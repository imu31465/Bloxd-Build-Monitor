export const id = 261;
export const ids = [261];
export const modules = {
  40820: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Kz,
      e: () => Mz,
      f: () => lz,
      j: () => Hz
    });
    var Ez = bz(36709),
      nz = bz(38089),
      iz = bz(38083);

    function lz(zz, uz, bz, Ez) {
      const nz = iz.y;
      uz.fill(0), zz.gravity.toArray(uz, nz.gravity), zz.colorDead.toArray(uz, nz.colorDead), bz[nz.ramp] = zz.useRampGradients ? 1 : 0;
      const lz = zz.getColorGradients(),
        Mz = dz(zz, lz, "colour", Ez);
      bz[nz.colorCount] = Mz;
      for (let iz = 0; iz < Mz; iz++) {
        var tz;
        const zz = lz[Fz(lz, iz)];
        uz[nz.colorPositions + iz] = zz.gradient, zz.color1.toArray(uz, nz.color1 + 4 * iz), (null !== (tz = zz.color2) && void 0 !== tz ? tz : zz.color1).toArray(uz, nz.color2 + 4 * iz)
      }
      const Hz = zz.getVelocityGradients(),
        Oz = dz(zz, Hz, "ht", Ez);
      bz[nz.velocityCount] = Oz;
      for (let iz = 0; iz < Oz; iz++) Xz(uz, nz.ht + 4 * iz, Hz[Fz(Hz, iz)]);
      const pz = zz.useRampGradients ? zz.getColorRemapGradients() : null,
        Zz = dz(zz, pz, "colour remap", Ez);
      bz[nz.remapCount] = Zz;
      for (let iz = 0; iz < Zz; iz++) Xz(uz, nz.remap + 4 * iz, pz[Fz(pz, iz)])
    }

    function Mz() {
      return {
        key: [],
        texels: new Uint8Array(4 * iz.m)
      }
    }
    const tz = [];

    function Hz(zz, uz) {
      return Oz(zz, tz), !wz(tz, uz.key) && (uz.key.length = 0, uz.key.push(...tz), uz.key.length > 0 && function(zz, uz) {
        for (let bz = 0; bz < iz.m; bz++) nz.k.GetCurrentGradient(bz / iz.m, zz, ((zz, uz, bz) => {
          Ez.Color3.LerpToRef(zz.color, uz.color, bz, pz)
        })), uz[4 * bz] = 255 * pz.r, uz[4 * bz + 1] = 255 * pz.g, uz[4 * bz + 2] = 255 * pz.b, uz[4 * bz + 3] = 255
      }(zz.getRampGradients(), uz.texels), !0)
    }

    function Oz(zz, uz) {
      uz.length = 0;
      const bz = zz.useRampGradients ? zz.getRampGradients() : null;
      if (null !== bz && void 0 !== bz && bz.length) {
        uz.push(bz.length);
        for (const zz of bz) uz.push(zz.gradient, zz.color.r, zz.color.g, zz.color.b)
      }
    }
    const pz = new Ez.Color3;

    function dz(zz, uz, bz, Ez) {
      return uz ? uz.length > iz.e ? (Ez(`particleStops:${bz}`, `GPU particles use the first 2 and last ${iz.e-2} of more than ${iz.e} ${bz} gradient stops (${zz.name})`), iz.e) : uz.length : 0
    }

    function Fz(zz, uz) {
      return uz < 2 || zz.length <= iz.e ? uz : zz.length - iz.e + uz
    }
    const Zz = new Float32Array(iz.q),
      Rz = new Uint32Array(Zz.buffer);

    function Kz(zz, uz, bz) {
      return lz(zz, Zz, Rz, bz), uz && wz(Rz, uz) ? null : Rz.slice()
    }

    function wz(zz, uz) {
      if (zz.length !== uz.length) return !1;
      for (let bz = 0; bz < zz.length; bz++)
        if (zz[bz] !== uz[bz]) return !1;
      return !0
    }

    function Xz(zz, uz, bz) {
      var Ez;
      zz[uz] = bz.gradient, zz[uz + 1] = bz.factor1, zz[uz + 2] = null !== (Ez = bz.factor2) && void 0 !== Ez ? Ez : bz.factor1
    }
  },
  40812: (zz, uz, bz) => {
    function Ez() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const uz = new Set;
      return (bz, Ez) => {
        uz.has(bz) || (uz.add(bz), console.warn(zz + Ez))
      }
    }
    bz.d(uz, {
      b: () => Ez
    })
  },
  40860: (zz, uz, bz) => {
    bz.d(uz, {
      createLiteRendererAsync: () => Vt,
      liteBabylonBackend: () => cz,
      setPipelineFailureHook: () => In
    });
    var Ez = bz(36709),
      nz = bz(37068),
      iz = bz(37332),
      lz = bz(36648),
      Mz = bz(37341);
    class tz extends Mz.c {
      constructor() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        super(...uz), this.color = new Ez.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: uz[0].XT().getUniqueId(),
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
    const Hz = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Oz = zz => 1 << Hz.indexOf(zz),
      pz = Oz("VERTEXCOLOR"),
      dz = Oz("INSTANCES"),
      Fz = Oz("THIN_INSTANCES"),
      Zz = Oz("INSTANCESCOLOR"),
      Rz = Oz("FOG"),
      Kz = Oz("LITE_FRONT_LAYER");

    function wz(zz, uz, bz, Ez) {
      let nz = 0;
      return zz.isVerticesDataPresent("color") && (nz |= pz), "none" !== uz && (nz |= dz), "thin" === uz && (nz |= Fz, zz.isVerticesDataPresent("instanceColor") && (nz |= Zz)), Ez.fogEnabled && zz.applyFog && 0 !== Ez.fogMode && (nz |= Rz), bz >= 1 && (nz |= Kz), nz
    }

    function Xz(zz, uz) {
      zz.updateColor4("color", uz.color, uz.alpha)
    }
    var fz = bz(37292),
      sz = bz(36878),
      rz = bz(36743),
      oz = bz(36619),
      Nz = bz(37282),
      vz = bz(37290),
      xz = bz(36636),
      Jz = bz(36642),
      Az = bz(36654);
    const Tz = oz.c.GLSL;
    class Lz {
      constructor(zz, uz) {
        this.name = zz, this.tK = uz, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.aT = {
          addOnce: zz => {
            this.disposers.push(zz)
          }
        }, this.uniqueId = uz.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      XT() {
        return this.tK
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
        return (0, xz.N)(this.model, zz.visibility, zz.hasVertexAlpha)
      }
      needAlphaTestingForMesh(zz) {
        return (0, xz.P)(this.model, zz.visibility, zz.hasVertexAlpha)
      }
      dispose() {
        (0, sz.n)(this);
        for (const zz of this.disposers.splice(0)) zz()
      }
      get model() {
        return (0, xz.W)(this)
      }
    }
    const Pz = new WeakSet;

    function Gz(zz) {
      return Pz.has(zz)
    }

    function az(zz) {
      Pz.add(zz)
    }
    const Vz = {
      create: (zz, uz) => ((0, rz.r)(zz, new Lz(zz.name, uz)), Jz.b.defines()),
      write: () => {},
      addFeature: (zz, uz) => {
        const bz = zz.mirror;
        uz.feature === vz.i && uz.state.dirLightCount > 0 && (zz.disableLighting = !0, (0, xz.U)(zz)), "BLOXD_LIGHTING" in uz.defines && (0, sz.k)(bz), uz.feature === Nz.j && ((0, fz.i)(uz.state, Tz), function(zz, uz) {
          const bz = zz.XT().uR();
          uz.textures.forEach(((Ez, nz) => {
            setTimeout((() => {
              var iz, lz;
              const {
                url: Mz
              } = Ez.source;
              bz.atlasArray(Mz, null !== (iz = null === (lz = uz.sources.pixels) || void 0 === lz ? void 0 : lz[nz]) && void 0 !== iz ? iz : null, uz.sources.layerWidth).then((bz => {
                (0, fz.b)(zz, uz, nz, bz, bz.layerWidth, bz.layers, Tz)
              })).catch((zz => {
                console.error(`Failed to build texture array for atlas ${nz}`, zz)
              }))
            }))
          }))
        }(bz, uz.state))
      },
      texture: (zz, uz, bz) => {
        let {
          data: Ez,
          sets: nz
        } = bz;
        var iz;
        (az(zz), Ez) && (zz.uvSet = null !== (iz = null === nz || void 0 === nz ? void 0 : nz.coordinatesIndex) && void 0 !== iz ? iz : 0, (0, rz.ab)(zz.matrix, null !== nz && void 0 !== nz ? nz : {}))
      },
      cube: az,
      canvas: (zz, uz, bz) => {
        let {
          width: Ez,
          height: nz,
          mipmaps: iz,
          samplingMode: lz = Az.f.trilinear,
          hasAlpha: Mz = !1,
          wrap: tz = Az.b.clamp
        } = bz;
        const Hz = zz.uR().createCanvas(Ez, nz),
          Oz = new Az.i("2d", {
            kind: "canvas",
            width: Ez,
            height: nz,
            canvas: Hz
          }, {
            samplingMode: lz,
            wrapU: tz,
            wrapV: tz,
            noMipmap: !iz,
            invertY: !0
          });
        return Oz.hasAlpha = Mz, az(Oz), Oz
      }
    };
    var mz = bz(36901),
      qz = bz(36547);
    class hz {
      constructor(zz, uz, bz) {
        this.engine = zz, this.clearColor = uz, this.ambientColor = bz, this.onBeforeRenderObservable = new qz.b, this.onBeforeCameraRenderObservable = new qz.b, this.onAfterRenderObservable = new qz.b, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.yN = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      uR() {
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
        const uz = this.pending.indexOf(zz); - 1 !== uz && this.pending.splice(uz, 1)
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

    function Uz() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const cz = {
      MEz: Uz,
      iEz: (zz, uz) => {
        const bz = new hz(zz.engine, Ez.d.FromArray(uz.clearColor), Ez.Color3.FromArray(uz.ambientColor));
        (0, lz.c)(Vz, bz), zz.tK = bz,
          function(zz, uz) {
            const bz = Object.assign((0, mz.e)(zz, "camera"), {
              layerMask: 268435455
            });
            zz.model.nodes.setWorldSource(bz.row, zz.model.view.worldMatrix), zz.camera = uz.activeCamera = bz
          }(zz, bz), (0, nz.i)(zz, ((zz, uz, bz) => (0, iz.k)(zz, uz, bz, Mz.c)))
      },
      uEz: () => {},
      setBabylonFog: () => {},
      tEz: Uz,
      pEz: () => {},
      linesFromArrays: (zz, uz, bz) => (0, iz.k)(zz, uz, bz, tz),
      HK: () => {},
      OEz: Uz
    };
    var gz = bz(40924),
      Sz = bz(40936);
    class yz {
      constructor(zz) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const uz = new Promise((zz => {
          this.refused = zz
        }));
        this.deviceLost = Promise.race([zz, uz])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(zz) {
        (function(zz) {
          const {
            name: uz,
            message: bz
          } = null !== zz && void 0 !== zz ? zz : {};
          return "InvalidStateError" === uz && "string" === typeof bz && bz.startsWith("GPUDevice.")
        })(zz) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: zz.message,
          framesRefused: !0
        }))
      }
    }
    class Dz {
      constructor(zz) {
        this.resources = zz, this.matrixKey = {
          Bp: 0
        }, this.attributesKey = {
          Bp: 0
        }, this.inputs = Object.create(null);
        for (let uz = 0; uz < 4; uz++) this.inputs[`world${uz}`] = new ez(this.matrixKey, 16 * uz, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(zz, uz) {
        this.resources.vertexBufferCreated(this.matrixKey, zz, !0), uz && this.resources.vertexBufferCreated(this.attributesKey, uz, !0)
      }
    }
    class Qz extends Dz {
      constructor(zz, uz, bz) {
        super(zz), this.mesh = uz, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Ez = this.inputs;
        let nz = 0;
        for (const {
            size: lz
          }
          of bz) nz += lz;
        for (const {
            name: lz,
            offset: Mz,
            size: tz,
            type: Hz
          }
          of bz) Ez[lz] = new ez(this.attributesKey, 4 * Mz, 4 * nz, tz, !0, Hz);
        this.rowStride = nz, zz.fY.set(uz, this);
        const iz = uz.isVerticesDataPresent;
        uz.isVerticesDataPresent = (zz, bz) => zz in Ez || iz.call(uz, zz, bz)
      }
      attach(zz, uz) {
        this.matrices = zz, this.attributes = uz, this.bind(zz, uz), this.mirror(zz, zz.length, zz.length / 16)
      }
      p_(zz) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, zz ? 64 * zz : void 0)
      }
      F_() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(zz, uz) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * zz, 16 * uz)
      }
      attributeRows(zz, uz) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, zz * this.rowStride, uz * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(zz, uz, bz) {
        const Ez = this.mesh._thinInstanceDataStorage;
        Ez.matrixData = zz, Ez.matrixBufferSize = uz, Ez.worldMatrices = null, Ez.instancesCount = bz
      }
    }
    class Wz extends Dz {
      constructor(zz, uz, bz) {
        var Ez, nz, iz, lz;
        super(zz), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.interleavedKinds) && void 0 !== Ez ? Ez : null, this.offsets = null !== (nz = null === bz || void 0 === bz ? void 0 : bz.interleavedOffsets) && void 0 !== nz ? nz : [], this.rowStride = null !== (iz = null === bz || void 0 === bz ? void 0 : bz.interleavedRowStride) && void 0 !== iz ? iz : 0, null === (lz = this.layout) || void 0 === lz || lz.forEach(((zz, uz) => {
          this.inputs[zz] = new ez(this.attributesKey, 4 * this.offsets[uz], 4 * this.rowStride, bz.strides[zz])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), zz.batchUploads.set(uz, this), uz.aT.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(zz) {
        const uz = this.packedBatch;
        return uz.renderSelf ? 0 === zz ? this.packedSource : uz.instances[zz - 1] : uz.instances[zz]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(zz, uz, bz, Ez) {
        const nz = (uz.renderSelf ? 1 : 0) + uz.rows.length;
        if (this.frame = Ez, this.count = nz, this.packedSource = zz, this.packedBatch = uz, 0 === nz) return;
        if (zz.getWorldMatrix(), 16 * nz > this.matrices.length) {
          let zz = this.matrices.length / 16;
          for (; zz < nz;) zz *= 2;
          this.matrices = new Float32Array(16 * zz), this.attributes &&= new Float32Array(zz * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let iz = 0;
        uz.renderSelf && this.packRow(iz++, zz, uz.row, bz);
        for (let lz = 0; lz < uz.rows.length; lz++) this.packRow(iz++, uz.instances[lz], uz.rows[lz], bz);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * nz), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, nz * this.rowStride)
      }
      packRow(zz, uz, bz, Ez) {
        const nz = this.matrices;
        if (bz < 0) nz.set(uz.getWorldMatrix().m, 16 * zz);
        else
          for (let Hz = 0; Hz < 16; Hz++) nz[16 * zz + Hz] = Ez[16 * bz + Hz];
        const iz = this.attributes;
        if (!iz) return;
        const lz = uz.RP,
          Mz = this.layout;
        for (let Hz = 0; Hz < Mz.length; Hz++) {
          var tz;
          const uz = null !== (tz = lz[Mz[Hz]]) && void 0 !== tz ? tz : 0,
            bz = zz * this.rowStride + this.offsets[Hz];
          uz.toArray ? uz.toArray(iz, bz) : uz.copyToArray ? uz.copyToArray(iz, bz) : iz[bz] = uz
        }
      }
    }
    class ez {
      constructor(zz, uz, bz, Ez) {
        let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = zz, this.byteOffset = uz, this.byteStride = bz, this.size = Ez, this.instanced = nz, this.type = iz, this.normalized = lz
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
    const jz = "CANVAS_ALPHA_ONE",
      Iz = `override ${jz}: bool = false;`,
      Bz = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Cz(zz, uz, bz) {
      var Ez;
      let nz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const iz = null !== (Ez = uz._colorFormat) && void 0 !== Ez ? Ez : "bgra8unorm",
        lz = nz ? 15 : 0;
      return bz ? {
        ...zz,
        targets: [{
          format: iz,
          blend: {
            color: bz,
            alpha: Bz
          },
          writeMask: lz
        }]
      } : {
        ...zz,
        constants: {
          ...zz.constants,
          [jz]: 1
        },
        targets: [{
          format: iz,
          writeMask: lz
        }]
      }
    }

    function Yz(zz, uz) {
      zz._renderables.push(uz)
    }

    function kz(zz) {
      var uz, bz;
      return null !== (uz = null === (bz = zz._frameGraph) || void 0 === bz ? void 0 : bz._tasks) && void 0 !== uz ? uz : []
    }

    function zu(zz) {
      return zz._currentEncoder
    }

    function uu(zz) {
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
    const bu = "greater-equal",
      Eu = 2e5,
      nu = 1e5,
      iu = new WeakMap;

    function lu(zz, uz) {
      let bz = iu.get(zz);
      if (!bz) {
        bz = {
          module: zz.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, iu.set(zz, bz)
      }
      const Ez = `${uz._colorFormat}|${uz._depthStencilFormat}|${uz._sampleCount}`;
      let nz = bz.pipelines.get(Ez);
      if (!nz) {
        var iz;
        const {
          module: lz
        } = bz;
        nz = zz.createRenderPipeline({
          label: `placeholder ${Ez}`,
          layout: zz.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: lz,
            entryPoint: "v"
          },
          fragment: {
            module: lz,
            entryPoint: "f",
            targets: [{
              format: null !== (iz = uz._colorFormat) && void 0 !== iz ? iz : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: uz._depthStencilFormat ? {
            format: uz._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: uz._sampleCount
          }
        }), bz.pipelines.set(Ez, nz)
      }
      return nz
    }

    function Mu(zz, uz, bz) {
      const Ez = uz.eye,
        nz = uz.viewMatrix;
      zz[0] = Ez[0] + nz[2] * bz, zz[1] = Ez[1] + nz[6] * bz, zz[2] = Ez[2] + nz[10] * bz
    }
    var tu = bz(37385),
      Hu = bz(40812),
      Ou = bz(36633);
    const pu = Math.PI,
      du = pu / 1.95,
      Fu = [5e-4 / 94, 125e-7, 5e-4 / 18],
      Zu = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((zz => {
        let [uz, bz] = zz;
        return .434 * pu * Math.pow(2 * pu / uz, 2) * bz
      }));

    function Ru(zz, uz, bz) {
      const {
        up: Ez,
        mieDirectionalG: nz
      } = zz, iz = 1 - Xu(1 - Math.exp(uz[1] / 45e4), 0, 1), lz = zz.rayleigh - (1 - iz), Mz = Math.hypot(uz[0], uz[1], uz[2]), tz = Mz > 0 ? 1 / Mz : 0, Hz = bz.sunDir;
      for (let Fz = 0; Fz < 3; Fz++) Hz[Fz] = uz[Fz] * tz;
      const Oz = Hz[0] * Ez[0] + Hz[1] * Ez[1] + Hz[2] * Ez[2],
        pz = 1e3 * Math.max(0, 1 - Math.exp(-(du - Math.acos(Xu(Oz, -1, 1))) / 1.5));
      bz.sunE = pz;
      const dz = .2 * zz.turbidity * 1e-17 * zz.mieCoefficient;
      for (let Fz = 0; Fz < 3; Fz++) {
        const zz = Fu[Fz] * lz,
          uz = Zu[Fz] * dz,
          Ez = pz / (zz + uz);
        bz.inScatterR[Fz] = zz * Ez, bz.inScatterM[Fz] = uz * Ez, bz.extinctionBeta[Fz] = 8400 * zz + 1250 * uz
      }
      return bz.sunsetMix = Xu(Math.pow(1 - Oz, 5), 0, 1), bz.sunDiscE = 19e3 * pz, bz.mieScale = (1 - nz * nz) / (4 * pu), bz.mieBase = 1 + nz * nz, bz.mieSlope = 2 * nz, bz
    }
    const Ku = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const wu = 1 / function(zz) {
      const {
        A: uz,
        B: bz,
        C: Ez,
        D: nz,
        E: iz,
        F: lz
      } = Ku;
      return (zz * (uz * zz + Ez * bz) + nz * iz) / (zz * (uz * zz + bz) + nz * lz) - iz / lz
    }(1e3);

    function Xu(zz, uz, bz) {
      return Math.min(Math.max(zz, uz), bz)
    }
    const fu = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function su(zz, uz) {
      const bz = new Map(uz),
        Ez = [],
        nz = [],
        iz = () => 0 === nz.length || nz[nz.length - 1].active;
      let lz = null;
      const Mz = () => {
        const zz = [...bz].filter((zz => {
            let [, uz] = zz;
            return !0 !== uz
          })),
          uz = zz.map((zz => {
            let [uz] = zz;
            return uz
          })).join("|");
        lz = zz.length ? new RegExp(`\\b(${uz})\\b`, "g") : null
      };
      Mz();
      for (const tz of zz.split("\n")) {
        const zz = fu.exec(tz);
        if (!zz) {
          iz() && Ez.push(lz ? ru(tz, lz, bz) : tz);
          continue
        }
        const uz = zz[1],
          Hz = zz[2].trim();
        if ("ifdef" === uz || "ifndef" === uz || "if" === uz) {
          const zz = iz(),
            Ez = "if" === uz ? ou(Hz, bz) : bz.has(Hz) === ("ifdef" === uz);
          nz.push({
            active: zz && Ez,
            parentActive: zz,
            taken: Ez
          })
        } else if ("elif" === uz || "else" === uz) {
          const zz = nz[nz.length - 1];
          if (!zz) throw new Error(`#${uz} without #if`);
          const Ez = !zz.taken && ("else" === uz || ou(Hz, bz));
          zz.active = zz.parentActive && Ez, zz.taken = zz.taken || Ez
        } else if ("endif" === uz) {
          if (!nz.pop()) throw new Error("#endif without #if")
        } else if (iz()) {
          const [zz, ...Ez] = Hz.split(/\s+/);
          "undef" === uz ? bz.delete(zz) : bz.set(zz, !Ez.length || Ez.join(" ")), Mz()
        }
      }
      if (nz.length) throw new Error("Unterminated #if");
      return Ez.join("\n")
    }

    function ru(zz, uz, bz) {
      return zz.replace(uz, (zz => {
        const uz = bz.get(zz);
        return "string" === typeof uz ? uz : zz
      }))
    }

    function ou(zz, uz) {
      var bz;
      const Ez = null !== (bz = zz.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== bz ? bz : [];
      let nz = 0;
      const iz = () => Ez[nz],
        lz = () => Ez[nz++],
        Mz = zz => {
          const bz = /^\d/.test(zz) ? zz : uz.get(zz);
          return "string" === typeof bz ? parseInt(bz) : Number.NaN
        },
        tz = () => {
          const zz = lz();
          if ("!" === zz) return !tz();
          if ("(" === zz) {
            const zz = Oz();
            return lz(), zz
          }
          if ("defined" === zz) {
            const zz = "(" === iz();
            zz && lz();
            const bz = lz();
            return zz && lz(), uz.has(bz)
          }
          const bz = iz();
          if ("==" === bz || "!=" === bz || ">" === bz || "<" === bz || ">=" === bz || "<=" === bz) {
            lz();
            const uz = Mz(zz),
              Ez = Mz(lz());
            if (Number.isNaN(uz) || Number.isNaN(Ez)) return !1;
            switch (bz) {
              case "==":
                return uz === Ez;
              case "!=":
                return uz !== Ez;
              case ">":
                return uz > Ez;
              case "<":
                return uz < Ez;
              case ">=":
                return uz >= Ez;
              default:
                return uz <= Ez
            }
          }
          return uz.has(zz)
        },
        Hz = () => {
          let zz = tz();
          for (;
            "&&" === iz();) {
            lz();
            const uz = tz();
            zz = zz && uz
          }
          return zz
        },
        Oz = () => {
          let zz = Hz();
          for (;
            "||" === iz();) {
            lz();
            const uz = Hz();
            zz = zz || uz
          }
          return zz
        },
        pz = Oz();
      if (nz !== Ez.length) throw new Error(`Cannot evaluate #if ${zz}`);
      return pz
    }
    var Nu = bz(36627),
      vu = bz(36976),
      xu = bz(36981),
      Ju = bz(40071),
      Au = bz(38123);
    const Tu = 32,
      Lu = [10, 3, 10],
      Pu = [21, 7, 21],
      Gu = Pu[0] * Pu[1] * Pu[2],
      au = 0,
      Vu = 1,
      mu = 2,
      qu = 3,
      hu = 64,
      Uu = 512,
      cu = 4 * Gu,
      gu = 1536,
      Su = cu + Gu * gu,
      yu = 1073741824,
      Du = Su + 1;

    function Qu(zz, uz) {
      const bz = zz % uz;
      return bz < 0 ? bz + uz : bz
    }

    function Wu(zz, uz, bz) {
      return Ez = Qu(zz, Pu[0]), nz = Qu(uz, Pu[1]), iz = Qu(bz, Pu[2]), Ez + Pu[0] * (nz + Pu[1] * iz);
      var Ez, nz, iz
    }

    function eu(zz, uz, bz) {
      return zz + 8 * (uz + 8 * bz)
    }

    function ju(zz, uz, bz) {
      return zz + 4 * (uz + 4 * bz)
    }
    const Iu = 65535,
      Bu = 0,
      Cu = 1,
      Yu = 2,
      ku = 3;

    function zb(zz) {
      return Math.ceil(zz * zz / 32)
    }
    const ub = 8192,
      bb = 1 << 18,
      Eb = 65536,
      nb = 294912,
      ib = 128,
      lb = 4096,
      Mb = 16,
      tb = 16385,
      Hb = 81921,
      Ob = 147457,
      pb = 4194304;
    const db = [0, 0, 0],
      Fb = [0, 0, 0];

    function Zb(zz, uz, bz, Ez) {
      ! function(zz, uz, bz) {
        const [Ez, nz, iz] = [zz[0], zz[1], zz[2]];
        let lz, Mz, tz;
        Math.abs(nz) < .99 ? (lz = iz, Mz = 0, tz = -Ez) : (lz = -nz, Mz = Ez, tz = 0);
        const Hz = Math.hypot(lz, Mz, tz);
        uz[0] = lz / Hz, uz[1] = Mz / Hz, uz[2] = tz / Hz, bz[0] = nz * uz[2] - iz * uz[1], bz[1] = iz * uz[0] - Ez * uz[2], bz[2] = Ez * uz[1] - nz * uz[0]
      }(Ez, db, Fb);
      const nz = 1 / 32;
      for (const [iz, lz] of [
          [0, db],
          [4, Fb]
        ]) {
        for (let bz = 0; bz < 3; bz++) zz[uz + iz + bz] = lz[bz] * nz;
        zz[uz + iz + 3] = -(lz[0] * bz[0] + lz[1] * bz[1] + lz[2] * bz[2]) * nz
      }
    }
    class Rb {
      constructor() {
        this.words = new Uint32Array(Ob), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      QF(zz, uz) {
        this.parts = 0, this.refs = 0, this.view = zz, this.viewAt = uz;
        const bz = zz[uz + 1] * zz[uz + 6] - zz[uz + 2] * zz[uz + 5],
          Ez = zz[uz + 2] * zz[uz + 4] - zz[uz] * zz[uz + 6],
          nz = zz[uz] * zz[uz + 5] - zz[uz + 1] * zz[uz + 4],
          iz = Math.hypot(bz, Ez, nz) || 1;
        this.light[0] = bz / iz, this.light[1] = Ez / iz, this.light[2] = nz / iz
      }
      add(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= lb || ! function(zz, uz, bz) {
            const Ez = zz[uz],
              nz = zz[uz + 1],
              iz = zz[uz + 2],
              lz = zz[uz + 3],
              Mz = zz[uz + 4],
              tz = zz[uz + 5],
              Hz = zz[uz + 6],
              Oz = zz[uz + 7],
              pz = zz[uz + 8],
              dz = zz[uz + 9],
              Fz = zz[uz + 10],
              Zz = zz[uz + 11],
              Rz = zz[uz + 12],
              Kz = zz[uz + 13],
              wz = zz[uz + 14],
              Xz = zz[uz + 15],
              fz = Ez * tz - nz * Mz,
              sz = Ez * Hz - iz * Mz,
              rz = Ez * Oz - lz * Mz,
              oz = nz * Hz - iz * tz,
              Nz = nz * Oz - lz * tz,
              vz = iz * Oz - lz * Hz,
              xz = pz * Kz - dz * Rz,
              Jz = pz * wz - Fz * Rz,
              Az = pz * Xz - Zz * Rz,
              Tz = dz * wz - Fz * Kz,
              Lz = dz * Xz - Zz * Kz,
              Pz = Fz * Xz - Zz * wz,
              Gz = fz * Pz - sz * Lz + rz * Tz + oz * Az - Nz * Jz + vz * xz;
            if (!(Math.abs(Gz) > 1e-12)) return !1;
            const az = 1 / Gz;
            return bz[0] = (tz * Pz - Hz * Lz + Oz * Tz) * az, bz[1] = (iz * Lz - nz * Pz - lz * Tz) * az, bz[2] = (Kz * vz - wz * Nz + Xz * oz) * az, bz[3] = (Fz * Nz - dz * vz - Zz * oz) * az, bz[4] = (Hz * Az - Mz * Pz - Oz * Jz) * az, bz[5] = (Ez * Pz - iz * Az + lz * Jz) * az, bz[6] = (wz * rz - Rz * vz - Xz * sz) * az, bz[7] = (pz * vz - Fz * rz + Zz * sz) * az, bz[8] = (Mz * Lz - tz * Az + Oz * xz) * az, bz[9] = (nz * Az - Ez * Lz - lz * xz) * az, bz[10] = (Rz * Nz - Kz * rz + Xz * fz) * az, bz[11] = (dz * rz - pz * Nz - Zz * fz) * az, bz[12] = (tz * Jz - Mz * Tz - Hz * xz) * az, bz[13] = (Ez * Tz - nz * Jz + iz * xz) * az, bz[14] = (Kz * sz - Rz * oz - wz * fz) * az, bz[15] = (pz * oz - dz * sz + Fz * fz) * az, !0
          }(uz, bz, this.inverse)) return;
        const {
          view: Ez,
          viewAt: nz
        } = this, iz = bz;
        let lz = 1 / 0,
          Mz = 1 / 0,
          tz = -1 / 0,
          Hz = -1 / 0,
          Oz = -1 / 0;
        const [pz, dz, Fz] = this.light;
        for (let rz = 0; rz < 8; rz++) {
          const bz = 1 & rz ? zz.hi[0] : zz.lo[0],
            Zz = 2 & rz ? zz.hi[1] : zz.lo[1],
            Rz = 4 & rz ? zz.hi[2] : zz.lo[2],
            Kz = bz * uz[iz] + Zz * uz[iz + 4] + Rz * uz[iz + 8] + uz[iz + 12],
            wz = bz * uz[iz + 1] + Zz * uz[iz + 5] + Rz * uz[iz + 9] + uz[iz + 13],
            Xz = bz * uz[iz + 2] + Zz * uz[iz + 6] + Rz * uz[iz + 10] + uz[iz + 14],
            fz = Ez[nz] * Kz + Ez[nz + 1] * wz + Ez[nz + 2] * Xz + Ez[nz + 3],
            sz = Ez[nz + 4] * Kz + Ez[nz + 5] * wz + Ez[nz + 6] * Xz + Ez[nz + 7];
          lz = Math.min(lz, fz), Mz = Math.min(Mz, sz), tz = Math.max(tz, fz), Hz = Math.max(Hz, sz), Oz = Math.max(Oz, pz * Kz + dz * wz + Fz * Xz)
        }
        if (tz < -1 || Hz < -1 || lz >= 1 || Mz >= 1) return;
        const Zz = this.parts++,
          Rz = this.rects;
        Rz[4 * Zz] = Kb(lz), Rz[4 * Zz + 1] = Kb(Mz), Rz[4 * Zz + 2] = Kb(tz), Rz[4 * Zz + 3] = Kb(Hz);
        const Kz = this.inverse,
          {
            cell: wz,
            dims: Xz,
            lo: fz
          } = zz,
          sz = Hb + Zz * Mb;
        for (let rz = 0; rz < 3; rz++) this.floats[sz + 4 * rz] = Kz[rz] / wz, this.floats[sz + 4 * rz + 1] = Kz[4 + rz] / wz, this.floats[sz + 4 * rz + 2] = Kz[8 + rz] / wz, this.floats[sz + 4 * rz + 3] = (Kz[12 + rz] - fz[rz]) / wz;
        this.words[sz + 12] = zz.at, this.floats[sz + 13] = Oz + .001 * (1 + Math.abs(Oz)), this.words[sz + 14] = Xz[0] | Xz[1] << 8 | Xz[2] << 16
      }
      finish() {
        const zz = ib,
          {
            counts: uz,
            rects: bz,
            words: Ez
          } = this;
        uz.fill(0);
        let nz = 0,
          iz = 0;
        for (; iz < this.parts; iz++) {
          const Ez = 4 * iz,
            lz = (bz[Ez + 2] - bz[Ez] + 1) * (bz[Ez + 3] - bz[Ez + 1] + 1);
          if (nz + lz > 65536) break;
          nz += lz;
          for (let nz = bz[Ez + 1]; nz <= bz[Ez + 3]; nz++)
            for (let iz = bz[Ez]; iz <= bz[Ez + 2]; iz++) uz[nz * zz + iz]++
        }
        let lz = 0;
        for (let tz = 0; tz < 16384; tz++) Ez[tz] = lz, lz += uz[tz], uz[tz] = Ez[tz];
        Ez[16384] = lz;
        for (let tz = 0; tz < iz; tz++) {
          const nz = 4 * tz;
          for (let iz = bz[nz + 1]; iz <= bz[nz + 3]; iz++)
            for (let lz = bz[nz]; lz <= bz[nz + 2]; lz++) Ez[tb + uz[iz * zz + lz]++] = tz
        }
        const Mz = this.floats;
        for (let tz = 0; tz < 16384; tz++) {
          const zz = tb + Ez[tz],
            uz = zz + Math.min(Ez[tz + 1] - Ez[tz], 64);
          for (let bz = zz + 1; bz < uz; bz++) {
            const uz = Ez[bz],
              nz = Mz[81934 + uz * Mb];
            let iz = bz - 1;
            for (; iz >= zz && Mz[81934 + Ez[iz] * Mb] < nz; iz--) Ez[iz + 1] = Ez[iz];
            Ez[iz + 1] = uz
          }
        }
        this.refs = nz
      }
    }

    function Kb(zz) {
      return Math.min(127, Math.max(0, Math.floor((.5 * zz + .5) * ib)))
    }

    function wb(zz, uz, bz, Ez, nz) {
      for (let iz = 0; iz < 4; iz++)
        for (let lz = 0; lz < 4; lz++) nz[4 * iz + lz] = zz[uz + 4 * iz] * bz[Ez + lz] + zz[uz + 4 * iz + 1] * bz[Ez + 4 + lz] + zz[uz + 4 * iz + 2] * bz[Ez + 8 + lz] + zz[uz + 4 * iz + 3] * bz[Ez + 12 + lz]
    }

    function Xb(zz, uz, bz, Ez, nz) {
      const iz = zz[0] - uz,
        lz = zz[1] - bz,
        Mz = zz[2] - Ez,
        tz = zz[3] - uz,
        Hz = zz[4] - bz,
        Oz = zz[5] - Ez,
        pz = zz[6] - uz,
        dz = zz[7] - bz,
        Fz = zz[8] - Ez;
      if (Math.min(iz, tz, pz) > nz || Math.max(iz, tz, pz) < -nz) return !1;
      if (Math.min(lz, Hz, dz) > nz || Math.max(lz, Hz, dz) < -nz) return !1;
      if (Math.min(Mz, Oz, Fz) > nz || Math.max(Mz, Oz, Fz) < -nz) return !1;
      const Zz = tz - iz,
        Rz = Hz - lz,
        Kz = Oz - Mz,
        wz = pz - tz,
        Xz = dz - Hz,
        fz = Fz - Oz,
        sz = Rz * fz - Kz * Xz,
        rz = Kz * wz - Zz * fz,
        oz = Zz * Xz - Rz * wz;
      if (Math.abs(sz * iz + rz * lz + oz * Mz) > nz * (Math.abs(sz) + Math.abs(rz) + Math.abs(oz))) return !1;
      const Nz = [Zz, Rz, Kz, wz, Xz, fz, iz - pz, lz - dz, Mz - Fz];
      for (let vz = 0; vz < 3; vz++) {
        const zz = Nz[3 * vz],
          uz = Nz[3 * vz + 1],
          bz = Nz[3 * vz + 2];
        for (let Ez = 0; Ez < 3; Ez++) {
          const Zz = 0 === Ez ? 0 : 1 === Ez ? bz : -uz,
            Rz = 0 === Ez ? -bz : 1 === Ez ? 0 : zz,
            Kz = 0 === Ez ? uz : 1 === Ez ? -zz : 0,
            wz = Zz * iz + Rz * lz + Kz * Mz,
            Xz = Zz * tz + Rz * Hz + Kz * Oz,
            fz = Zz * pz + Rz * dz + Kz * Fz,
            sz = nz * (Math.abs(Zz) + Math.abs(Rz) + Math.abs(Kz));
          if (Math.min(wz, Xz, fz) > sz || Math.max(wz, Xz, fz) < -sz) return !1
        }
      }
      return !0
    }
    const fb = new Float32Array(1);
    new Uint32Array(fb.buffer);
    var sb = bz(38127);

    function rb(zz) {
      const [uz, bz, Ez] = sb.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${zz.group}) @binding(${zz.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${uz-1}, ${bz-1}, ${Ez-1});\n}\n`
    }

    function ob(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [nz, iz, lz] = Pu, [Mz, tz, Hz] = Lu, Oz = Math.log2(Tu), pz = Ez ? "var<private> bloxdSpCrossed: bool;\n" : "", dz = Ez ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${zz.group}) @binding(${zz.nF}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${zz.group}) @binding(${zz.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${bz?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${pz}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Cu}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Yu}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${bz?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${ku}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${nz}, ${iz}, ${lz});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${nz} * (s.y + ${iz} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${Mz}, ${tz}, ${Hz}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Oz}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${qu}u) {\n\t\treturn named && state == ${mu}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${cu}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Su}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${uz?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${uz?`\t\tif (exits && step > 0 && step % ${xb} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Oz}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${au}u || kind == ${Vu}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${mu}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${cu}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${dz}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Nb = {
      group: 0,
      uniform: 0,
      nF: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function vb() {
      const zz = Nb;
      return `${rb(zz)}${ob(zz,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${sb.c}>,\n}\n@group(${zz.group}) @binding(${zz.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${zz.group}) @binding(${zz.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${sb.l})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${sb.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${sb.d}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const xb = 2;
    const Jb = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function Ab(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Ez = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${uz.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        nz = "trace" === bz || "lit" === bz,
        iz = "maskEdge" === bz ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        lz = nz ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${uz.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${uz.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===bz?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${iz};\n`;
      return `${Ez}${zz.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${nz?function(){const[zz,uz,bz]=sb.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${zz}.0, ${uz}.0, ${bz}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${lz}}\n`:""}${zz.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${uz.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${uz.renderOffset});\n}\n`:""}`
    }
    const Tb = "bloxdSpOwnTexture";

    function Lb(zz) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${zz.texture}) - 1u)))`
    }
    const Pb = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${tu.f.map((zz=>{let[uz,bz]=zz;return`\tbloxdSpOut.${uz} = (bloxdSpWord & ${bz}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Gb(zz) {
      return `bloxdSpFlags(${zz})`
    }
    const ab = `${Ju.j}.eyePosition`;

    function Vb(zz, uz, bz, Ez, nz) {
      const iz = zz.indexOf(uz);
      if (iz < 0 || zz.indexOf(uz, iz + 1) >= 0) throw new Error(`Lite's ${nz} program changed at the shader pack ${Ez} hook: ${iz<0?"no":"more than one"} anchor (lite/${nz}ShaderPack.ts)`);
      return zz.slice(0, iz) + bz + zz.slice(iz + uz.length)
    }

    function mb(zz) {
      return zz.sunShadow || zz.airShadow
    }

    function qb(zz, uz) {
      return uz && mb(zz)
    }
    const hb = {
      group: Ju.g,
      ...Ju.q
    };

    function Ub(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!mb(zz)) return "";
      if (uz) {
        const uz = hb,
          nz = "trace" === bz || "lit" === bz;
        let iz = "";
        zz.sunShadow && (iz = nz ? `${ob(uz,!0,"lit"===bz)}${Ez=uz,`@group(${Ez.group}) @binding(${Ez.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Ez.group}) @binding(${Ez.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(zz, uz, bz) {
          const Ez = `@group(${zz}) @binding(${uz}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return bz ? `${Ez}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Jb}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((zz=>`\t{\n\t\tlet o = vec2i(${zz});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Ez
        }(uz.group, Ju.t, "maskEdge" === bz));
        const lz = {
          shadowDirection: `${Ju.j}.shadowDirection`,
          renderOffset: `${Ju.j}.renderOffset`,
          eyePosition: `${Ju.j}.eyePosition`
        };
        return `${rb(uz)}${iz}${function(zz){const[uz,bz,Ez]=sb.o;return`@group(${zz.group}) @binding(${zz.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${zz.group}) @binding(${zz.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${uz}.0, ${bz}.0, ${Ez}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(uz)}${Ab(zz,lz,bz)}`
      }
      var Ez;
      return `${zz.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${zz.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function cb(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!uz) return "";
      const iz = (lz = "fragmentInputs.vPositionW", Mz = zz.sunShadow ? {
        normal: bz,
        flags: Ez
      } : null, `\n\tbloxdSpShadowPosition = ${lz};\n${Mz?`\tbloxdSpShadowNormal = normalize(${Mz.normal});\n\tbloxdSpShadowEmissive = (${Mz.flags} & ${tu.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${Mz.flags} & ${tu.i}u) != 0u;\n`:""}`);
      var lz, Mz;
      return zz.sunShadow && ("mask" === nz || "maskEdge" === nz) ? `${iz}${tz="fragmentInputs.position",Hz="maskEdge"===nz,`\n\tbloxdSpShadowPixel = vec2i(${tz}.xy);\n${Hz?`\tbloxdSpShadowZ = ${tz}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${tz}.z), dpdy(${tz}.z));\n`:""}`}` : iz;
      var tz, Hz
    }
    const gb = "bloxdSpTextureRotation",
      Sb = "bloxdSpTextureLayers",
      yb = `@group(${Ju.g}) @binding(${Ju.w}) var<storage, read> ${Sb}: array<u32>;\n`;

    function Db(zz) {
      return `\tvertexOutputs.vPackTexture = ${Sb}[min(u32(${zz}), arrayLength(&${Sb}) - 1u)];\n`
    }

    function Qb(zz) {
      return void 0 !== zz.uv
    }

    function Wb(zz) {
      if (!zz) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Qb(zz)) return function(zz) {
        const {
          texture: uz,
          cells: bz,
          layers: Ez
        } = zz, nz = `textureDimensions(${uz}, bloxdSpLevel)`, iz = bz ? `max(vec2u(vec2f(${nz}) / ${bz}), vec2u(1u))` : nz, lz = bz ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${iz};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${bz}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${bz}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${uz}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${nz} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${iz};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${uz}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let Mz;
        if (bz)
          if (1 === Ez.length) Mz = `\treturn bloxdSpOwnTexel(${Ez[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const zz = Ez.length - 1;
            Mz = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Ez[zz]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let uz = zz - 1; uz >= 0; uz--) Mz += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Ez[uz]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            Mz += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else Mz = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${zz.id?`var<private> ${Tb}: u32;\n`:""}${lz}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Lb(zz)};\n\treturn ${iz};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${zz.id?Tb:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Lb(zz)};\n${Mz}}\n`
      }(zz);
      const uz = zz,
        bz = zz => {
          const bz = zz > 0 ? `bloxdSpLayer - ${uz.layers*zz}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${zz}, ${uz.sampler}, bloxdSpTurned, ${bz}, round(bloxdSpMipLevel));`
        };
      let Ez = "";
      for (let iz = 0; iz < uz.count - 1; iz++) Ez += `\tif (bloxdSpLayer < ${uz.layers*(iz+1)}u) {\n\t\t${bz(iz)}\n\t}\n`;
      const nz = uz.frame ? `${uz.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${gb}: u32;\n${yb}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${gb} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${gb} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${gb} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${nz}${Ez}\t${bz(uz.count-1)}\n}\n`
    }

    function eb(zz, uz, bz) {
      return !!zz.surface && "bloxdDefaultSurface" !== zz.surface && function(zz, uz) {
        return "liquid" === uz || !zz
      }(uz, bz)
    }

    function jb(zz, uz) {
      return zz.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${uz.vertexLocalPosition}, ${Gb(uz.vertexFlags)});\n\t\tlet bloxdSpVertex = ${zz.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Ib(zz, uz, bz, Ez, nz) {
      if (!zz.surface) return "";
      const iz = (zz, uz) => `\n\tlet bloxdSpTexelUV = ${zz};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${uz}) - 1u));`;
      let lz = "",
        Mz = "0u, 0u, vec2f(0.0), 0.0";
      const tz = Ez && Qb(Ez) ? Ez : null,
        Hz = Ez && !Qb(Ez) ? Ez : null;
      if (tz) {
        lz = `${tz.id?`\n\tlet bloxdSpTexture = ${tz.id};\n\t${Tb} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${tz.uv};${iz(function(zz,uz){var bz;return`${null!==(bz=zz.levelUv)&&void 0!==bz?bz:zz.cells?`${uz} / ${zz.cells}`:uz} * vec2f(textureDimensions(${zz.texture}))`}(tz,"bloxdSpUv"),tz.texture)}`, Mz = (tz.id ? `${Tb}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Hz && (lz = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${gb} = bloxdSpTexture >> 16u;${iz(`fragmentInputs.vMainUV1 * ${(0,Nu.pb)(Hz.width)}`,"textureAtlas0")}`, Mz = `bloxdSpTexture & 0xffffu, ${gb}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Oz = nz.overlayColour,
        pz = Oz ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        dz = "bloxdDefaultSurface" !== zz.surface || Oz ? `\n\tbaseColor = vec4f(${pz}, baseColor.a);` : "",
        Fz = eb(zz, uz, bz) ? `\n\t${nz.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${lz}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${nz.alpha}, ${nz.enchantTier}, ${nz.enchantColour}, ${nz.enchantSpeed}, ${null!==Oz&&void 0!==Oz?Oz:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${nz.normal}, ${nz.localPosition}, ${Gb(nz.flags)}, ${Mz});\n\tlet bloxdSpSurface = ${zz.surface}(bloxdSpSurfaceIn);${dz}${Fz}\n`
    }
    const Bb = "bloxdSpLightIn";

    function Cb(zz, uz, bz, Ez) {
      if (!zz.light) return "";
      const nz = uz ? `${Nu.n}.rgb, ${Nu.n}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Nu.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: iz,
          diffuse: lz,
          emissive: Mz,
          ambient: tz,
          fogColour: Hz,
          fogAlpha: Oz,
          normal: pz
        } = Ez;
      return `\tvar ${Bb} = BloxdLightIn(vec3f(0.0), ${bz?iz:"0.0"}, ${lz}, ${Mz}, ${tz}, ${nz}, ${Hz}, ${Oz}, fragmentInputs.vPositionW, ${pz}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Bb}.litColour = bloxdLitColour(bloxdSpSurface, ${Bb});\n`
    }

    function Yb(zz) {
      return zz.light ? `\n\t{\n\t\tlet bloxdSpLight = ${zz.light}(bloxdSpSurface, ${Bb});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const kb = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      zE = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      uE = "\treturn color;\n}",
      bE = {
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

    function nE(zz) {
      var uz;
      return !(null === (uz = (0, Au.e)(zz)) || void 0 === uz || !uz.sceneDepth)
    }

    function iE(zz) {
      const uz = (0, Au.e)(zz);
      return !!uz && eb(uz.hooks, uz.strict, uz.program)
    }

    function lE(zz, uz, bz, Ez) {
      return Vb(zz, uz, bz, Ez, "terrain")
    }

    function ME(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const iz = function(zz) {
          return (0, Au.b)(zz.packVariant, zz.liquid ? "liquid" : "terrain")
        }(zz),
        {
          hooks: lz
        } = iz,
        Mz = qb(iz, Ez),
        tz = "edge" === nz ? "maskEdge" : "plain" === nz ? "mask" : "trace",
        Hz = jb(lz, bE);
      Hz && (uz = lE(uz, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Hz}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Oz = "atlas" === zz.texture ? {
          count: zz.atlasCount,
          layers: zz.atlasLayers,
          width: zz.uC,
          sampler: "atlasSampler",
          frame: zz.animated ? bz : null
        } : null,
        pz = `${iz.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${cb(iz,Mz,bE.normal,bE.flags,tz)}${Ib(lz,iz.strict,iz.program,Oz,bE)}`;
      pz && (uz = lE(uz, kb, `${kb.slice(0,-1)}${pz}`, "surface"));
      const dz = Yb(lz);
      return dz && (uz = lE(uz, zE, `${Cb(lz,zz.lighting,zz.dirLightCount>0,bE)}${zE}`, "light input"), uz = lE(uz, uE, `${dz.slice(1)}${uE}`, "light")), `${(0,Ju.A)()}${iz.sceneDepth?`@group(${Ju.g}) @binding(${Ju.o}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${ab};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Ub(iz,Mz,tz)}${Wb(Oz)}${Pb}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${iz.code}${uz}`
    }
    const tE = oz.c.WGSL;

    function HE(zz) {
      return void 0 !== zz.packVariant
    }
    const OE = {
        dEz: 0,
        FEz: 4,
        ZEz: 8,
        REz: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      pE = OE.aoLevels + 4,
      dE = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      FE = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      ZE = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      RE = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      KE = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      wE = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      XE = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      fE = 0,
      sE = 3,
      rE = 4,
      oE = 5,
      NE = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${vu.b}, ${vu.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${vu.b}, ${vu.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      vE = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((zz=>xu.c>>zz&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const xE = {
      sd: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: zz => `animDataPerTex[${zz}]`
    };

    function JE(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xE;
      return `\n\tlet atlasIdxIn = ${zz};\n\tlet animTick = ${bz.sd};\n\tlet animTickStride = ${bz.stride};\n\tlet numAnimTextures = ${bz.count};\n\t${(0,Nz.g)(oz.c.WGSL,bz.perTexture)}\n\t${uz}animLayer;\n`
    }

    function AE(zz) {
      const uz = (uz, bz) => {
        const Ez = uz > 0 ? `fragmentInputs.texAtlasIndex - ${zz.atlasLayers.toFixed(1)} * ${uz.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${bz?"textureSampleLevel":"textureSample"}(textureAtlas${uz}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Ez}))${bz?", atlasLod":""})`
      };
      if (1 === zz.atlasCount) return `baseColor = ${uz(0,!1)};`;
      let bz = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Nu.pb)(zz.uC)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Ez = 0; Ez < zz.atlasCount; Ez++) {
        const nz = zz.atlasLayers * (Ez + 1) - .5;
        bz += `${Ez>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Nu.pb)(nz)}) {\n\t\tbaseColor = ${uz(Ez,!0)};\n\t}`
      }
      return bz
    }

    function TE(zz) {
      return `terrain-${zz.texture}${"atlas"===zz.texture?zz.atlasCount:""}${zz.animated?"-anim":""}${zz.alphaTest?"-test":""}${zz.lighting?"-lit":""}-dir${zz.dirLightCount}${zz.packed?"-packed":""}${HE(zz)?`-sp${zz.packVariant}`:""}${zz.liquid?"-liquid":""}${zz.resting?"-rest":""}`
    }

    function LE(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Ez = function(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const bz = "none" !== zz.texture,
          Ez = "atlas" === zz.texture,
          nz = zz.dirLightCount > 0,
          iz = HE(zz);
        if (zz.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${zz.dirLightCount}`);
        let lz = 1,
          Mz = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Ez) {
          zz.animated && (Mz += `@group(2) @binding(${lz++}) var<storage, read> animDataPerTex: array<f32>;\n`), Mz += `@group(2) @binding(${lz++}) var atlasSampler: sampler;\n`;
          for (let uz = 0; uz < zz.atlasCount; uz++) Mz += `@group(2) @binding(${lz++}) var textureAtlas${uz}: texture_2d_array<f32>;\n`
        } else "single" === zz.texture && (Mz += `@group(2) @binding(${lz++}) var diffuseSamplerSampler: sampler;\n`, Mz += `@group(2) @binding(${lz++}) var diffuseSampler: texture_2d<f32>;\n`);
        const tz = function(zz) {
            const uz = XE,
              bz = "none" !== zz.texture,
              Ez = "atlas" === zz.texture,
              nz = HE(zz);
            return zz.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${bz?"uv: vec2f,":""}\n\t${Ez?"texAtlasIndices: f32,":""}\n\t${zz.lighting?"aPackedLightLevels: f32,":""}\n\t${nz?"blockFlagWords: vec2u,":""}\n}\n${NE}\n${vE}\n${"single"===zz.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${bz?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===zz.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Ez?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${zz.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${nz?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${uz.position}) position: vec3f,\n\t@location(${uz.normal}) normal: vec4f,\n\t@location(${uz.color}) color: vec4f,\n\t${bz?`@location(${uz.uv}) uv: vec2f,`:""}\n\t${zz.lighting?`@location(${uz.packedLight}) aPackedLightLevels: f32,`:""}\n\t${nz?`@location(${uz.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(zz),
          Hz = `\n${RE}\n${FE}\n${ZE}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${Mz}\n${Iz}\n${tz.declarations}\nstruct Varyings {\n\t${"none"===uz?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${zz.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${nz?"@location(5) vTerrainLambert: f32,":""}\n\t${bz?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Ez?"@location(7) texAtlasIndex: f32,":""}\n\t${zz.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${iz?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${iz&&Ez?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${zz.resting?"":(0,Nu.v)(tE)}\n${wE}\n\n@vertex\nfn mainVertex(${tz.parameter}) -> Varyings {\n\t${tz.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${iz?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${tu.e.placed}u;`:""}\n\t${iz&&Ez?Db("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${zz.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${bz?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Ez?function(zz){return zz?JE("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(zz.animated):""}\n\t${"single"===zz.texture&&zz.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,Nu.ab)(tE)}\n\t${(0,Nu.I)(tE,zz.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${zz.resting?"":KE}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Ez?AE(zz):""}\n\t${"single"===zz.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${bz?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${zz.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${nz?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${jz}));\n\t${HE(zz)?(0,Nu.lb)(oz.c.WGSL):(0,Nu.S)(tE)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Oz = new Set;
        zz.lighting && Oz.add("BLOXD_LIGHTING");
        nz && Oz.add("BLOXD_TERRAIN_DIRECTIONAL");
        return su(Hz, new Map([...Oz].map((zz => [zz, !0]))))
      }(zz, bz);
      if (!HE(zz)) return Ez;
      const nz = ME(zz, Ez, JE, uz, bz);
      return "none" === bz ? nz : `${nz}${function(zz){const uz="none"!==zz.texture&&zz.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${zz.resting?"":KE}\n\t${zz.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${uz&&"atlas"===zz.texture?AE(zz):""}\n\t${uz&&"single"===zz.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${uz?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${tu.e.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(zz)}`
    }
    const PE = new Map([
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

    function GE(zz, uz) {
      const bz = new Map;
      let Ez = 0;
      const nz = [],
        iz = [],
        lz = [];
      for (const Hz of uz) {
        var Mz, tz;
        const uz = null !== (Mz = Hz.type.trim().split(/\s+/).pop()) && void 0 !== Mz ? Mz : Hz.type,
          Oz = PE.get(uz);
        if (!Oz) throw new Error(`Lite: no uniform layout for ${Hz.name}: ${Hz.type}`);
        const pz = null !== (tz = Hz.arraySize) && void 0 !== tz ? tz : 0,
          dz = pz ? 4 : Oz.align;
        Ez = Math.ceil(Ez / dz) * dz;
        const Fz = pz ? 4 * Math.ceil(Oz.floats / 4) : Oz.floats;
        if (bz.set(Hz.name, {
            offset: Ez,
            floats: Oz.floats,
            arraySize: pz,
            stride: Fz
          }), pz && Oz.floats <= 2) {
          const uz = `${zz}_${lz.length}_strided`;
          iz.push(`struct ${uz} {\n\t@size(16) el: ${Oz.wgsl},\n}`), lz.push(Hz.name), nz.push(`\t@align(16) ${Hz.name}: array<${uz}, ${pz}>,`)
        } else pz ? nz.push(`\t@align(16) ${Hz.name}: array<${Oz.wgsl}, ${pz}>,`) : nz.push(`\t${Hz.name}: ${Oz.wgsl},`);
        Ez += pz ? Fz * pz : Oz.floats
      }
      return {
        slots: bz,
        floats: Math.max(4, 4 * Math.ceil(Ez / 4)),
        wgsl: `${iz.join("\n")}\nstruct ${zz} {\n${nz.join("\n")}\n}\n`,
        stridedArrays: lz
      }
    }
    const aE = [{
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
      VE = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      mE = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function qE(zz, uz) {
      return `#if defined(${zz}) && ${zz}DIRECTUV == 0\nvarying v${uz}UV: vec2f;\n#endif`
    }

    function hE(zz, uz, bz) {
      return `#if defined(${zz}) && ${zz}DIRECTUV == 0\nif (uniforms.v${uz}Infos.x==0.)\n{vertexOutputs.v${uz}UV= (uniforms.${bz}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${uz}UV= (uniforms.${bz}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function UE(zz, uz, bz) {
      return `#ifdef ${zz}\n#if ${zz}DIRECTUV == 1\n#define v${uz}UV vMainUV1\n#elif ${zz}DIRECTUV == 2\n#define v${uz}UV vMainUV2\n#else\nvarying v${uz}UV: vec2f;\n#endif\nvar ${bz}SamplerSampler: sampler;\nvar ${bz}Sampler: texture_2d<f32>;\n#endif`
    }
    const cE = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      gE = 256,
      SE = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      yE = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      DE = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      QE = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      WE = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      eE = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      jE = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      IE = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${yE}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${qE("OPACITY","Opacity")}\n${qE("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${jE}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${DE}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${hE("OPACITY","Opacity","opacity")}\n${hE("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${QE}\n#define CUSTOM_VERTEX_MAIN_END\n${WE}\n}\n`;
    const BE = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${UE("OPACITY","Opacity","opacity")}\n${UE("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${jE}\n${eE}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((zz,uz)=>function(zz){const uz=`
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
      uz
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      zz
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      uz
    }.vLightData, diffuse$ {
      zz
    }.rgb, $ {
      uz
    }.vLightSpecular.rgb, diffuse$ {
      zz
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(uz))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, CE = /^([gimus]+)!/, YE = new Set;

    function kE(zz) {
      YE.has(zz) || (YE.add(zz), console.warn(`Lite: no place for plugin code at ${zz} in the standard shader: it is left out`))
    }

    function zn(zz, uz) {
      let bz = zz;
      const Ez = new Map;
      for (const [iz, lz] of uz) {
        var nz;
        Ez.set(iz, `${null!==(nz=Ez.get(iz))&&void 0!==nz?nz:""}${lz}\n`)
      }
      for (const [iz, lz] of Ez) {
        if (!iz.startsWith("!")) {
          const zz = `#define ${iz}`;
          if (!bz.includes(zz)) {
            kE(iz);
            continue
          }
          bz = bz.replace(zz, (() => `\n${lz}\n${zz}`));
          continue
        }
        let zz = iz.substring(1),
          uz = "g";
        if (zz.startsWith("!")) uz = "", zz = zz.substring(1);
        else {
          const bz = CE.exec(zz);
          bz && (uz = bz[1], zz = zz.substring(uz.length + 1))
        }
        const Ez = new RegExp(zz, uz.includes("g") ? uz : `${uz}g`);
        let nz = Ez.exec(bz);
        for (nz || kE(iz); nz;) {
          const zz = nz,
            uz = lz.replace(/\$(\d+)/g, ((uz, bz) => Number(bz) < zz.length ? zz[Number(bz)] : ""));
          bz = bz.substring(0, zz.index) + uz + bz.substring(zz.index + zz[0].length), Ez.lastIndex = zz.index + uz.length, nz = Ez.exec(bz)
        }
      }
      return bz
    }
    const un = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      bn = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      En = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function nn(zz) {
      const uz = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let bz = zz.replace(un, ((zz, bz, Ez, nz, iz, lz) => ("attribute" === bz ? uz.attributes.push({
        name: iz,
        type: lz
      }) : void 0 === bz ? uz.varyings.push({
        name: iz,
        type: lz,
        interpolation: tn(lz, Ez, nz)
      }) : uz.uniforms.push({
        name: iz,
        type: Mn(lz)
      }), "")));
      return bz = bz.replace(bn, ((zz, bz) => (uz.samplers.add(bz), ""))), bz = bz.replace(En, ((zz, bz, Ez) => (uz.textures.push({
        name: bz,
        type: Ez
      }), ""))), uz.body = bz, uz
    }

    function Mn(zz) {
      const uz = zz.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        bz = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(uz);
      if (!bz) throw new Error(`Lite: unsupported uniform type ${zz}`);
      return bz
    }

    function tn(zz, uz, bz) {
      return void 0 === uz && void 0 === bz ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(zz.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === uz ? "@interpolate(flat) " : `@interpolate(${null!==uz&&void 0!==uz?uz:"perspective"}, ${null!==bz&&void 0!==bz?bz:"center"}) `
    }

    function Hn(zz) {
      return Fn({
        defines: zz.defines,
        vertex: zn(IE, zz.vertexCode),
        fragment: zn(BE, zz.fragmentCode),
        members: [...aE, ...zz.defines.has("OPACITY") ? VE : [], ...zz.defines.has("EMISSIVE") ? mE : [], ...zz.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function On(zz) {
      const uz = zz.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (uz === zz) throw new Error("Lite: fragment main has no return");
      return uz
    }
    const pn = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${yE}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${DE}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${QE}\n${WE}\n}\n`,
      dn = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${eE}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Fn(zz) {
      const uz = zz.defines,
        bz = nn(su(zz.vertex, uz)),
        Ez = nn(su(zz.fragment, uz)),
        nz = new Map;
      for (const fz of [...bz.varyings, ...Ez.varyings]) nz.has(fz.name) || nz.set(fz.name, fz);
      const iz = [...nz.values()].map(((zz, uz) => `\t@location(${uz}) ${zz.interpolation}${zz.name}: ${zz.type},`)),
        lz = [...zz.members];
      for (const fz of [...bz.uniforms, ...Ez.uniforms]) lz.some((zz => zz.name === fz.name)) || lz.push(fz);
      const Mz = GE(zz.structName, lz),
        tz = [],
        Hz = [];
      let Oz = 1;
      const pz = new Set;
      for (const fz of [...bz.textures, ...Ez.textures]) {
        if (pz.has(fz.name)) continue;
        pz.add(fz.name);
        const zz = `${fz.name}Sampler`,
          uz = Oz++,
          bz = Oz++,
          Ez = fz.type.startsWith("texture_2d_array") ? "2d-array" : fz.type.startsWith("texture_cube") ? "cube" : "2d";
        tz.push({
          name: fz.name,
          binding: uz,
          samplerBinding: bz,
          dimension: Ez
        }), Hz.push(`@group(2) @binding(${uz}) var ${fz.name}: ${fz.type};`), Hz.push(`@group(2) @binding(${bz}) var ${zz}: sampler;`)
      }
      for (const fz of [...bz.samplers, ...Ez.samplers])
        if (!pz.has(fz.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${fz} has no texture`);
      const dz = [RE, SE, Mz.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${zz.structName};`, ...Hz].join("\n"),
        Fz = bz.attributes,
        Zz = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...bz.attributes.map(((zz, uz) => `\t@location(${uz}) ${zz.name}: ${zz.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Rz = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...iz, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Kz = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Ez.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...iz, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Iz, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${jz}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        wz = zz => {
          for (const uz of Mz.stridedArrays) zz = zz.replace(new RegExp(`\\b${uz}\\s*\\[(.*?)\\]`, "g"), `${uz}[$1].el`);
          return zz
        };
      return {
        vertex: `${dz}\n${Zz}\n${Rz}\n${wz(bz.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${dz}\n${Kz}\n${On((Xz=wz(Ez.body),Xz.includes("fragmentInputs.position")?Xz.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Xz))}`,
        attributes: Fz,
        material: Mz,
        textures: tz
      };
      var Xz
    }
    const Zn = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      Rn = zz => ({
        name: zz,
        type: "vec3"
      }),
      Kn = zz => ({
        name: zz,
        type: "float"
      }),
      wn = GE("EarthSkyUniforms", [Rn("viewFrom"), Kn("exposureScale"), Rn("zenithOffset"), Kn("fogOn"), Rn("up"), Kn("ditherOn"), Rn("sun"), Kn("turbidity"), Rn("tint"), Kn("rayleigh"), Rn("sunDir"), Kn("mieStrength"), Rn("inScatterR"), Kn("mieFocus"), Rn("inScatterM"), Kn("sunE"), Rn("extinctionBeta"), Kn("sunsetMix"), Kn("mieScale"), Kn("mieBase"), Kn("mieSlope"), Kn("sunDiscE"), Kn("exposure")]),
      Xn = `${RE}\n${SE}\n${wn.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      fn = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Zn.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      sn = `\n${Iz}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Ku).map((zz=>{let[uz,bz]=zz;return`const TONE_${uz}: f32 = ${bz};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${wu};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${jz}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var rn = bz(36514);
    const Nn = new rn.ER,
      vn = new rn.ER,
      xn = new rn.Quaternion,
      Jn = new Float64Array(3),
      An = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Tn = new Float64Array(16);

    function Ln(zz, uz, bz) {
      const Ez = bz.worldMatrix;
      var nz;
      zz.updateFloat3("viewFrom", Ez[12], Ez[13], Ez[14]), zz.updateFloatsFrom("zenithOffset", uz.cameraOffset, 0, 3), zz.updateFloatsFrom("up", uz.up, 0, 3), uz.luminance > 0 && (zz.updateFloat("exposure", uz.luminance), zz.updateFloat("exposureScale", (nz = uz.luminance, Math.log2(2 / Math.pow(nz, 4))))), zz.updateFloat("turbidity", uz.turbidity), zz.updateFloat("rayleigh", uz.rayleigh), zz.updateFloat("mieStrength", uz.mieCoefficient), zz.updateFloat("mieFocus", uz.mieDirectionalG), zz.updateFloatsFrom("tint", uz.tint, 0, 3), zz.updateFloat("fogOn", uz.fog && bz.fogEnabled && 0 !== bz.fogMode ? 1 : 0), zz.updateFloat("ditherOn", uz.dithering ? 1 : 0);
      const iz = uz.sunPosition;
      if (Nn.set(iz[0], iz[1], iz[2]), !uz.useSunPosition) {
        const zz = Math.PI * (uz.inclination - .5),
          bz = 2 * Math.PI * (uz.azimuth - .5);
        Nn.set(uz.distance * Math.cos(bz) * Math.cos(zz), uz.distance * Math.sin(-zz), uz.distance * Math.sin(bz) * Math.cos(zz)), rn.Quaternion.FromUnitVectorsToRef(rn.ER.UpReadOnly, vn.set(uz.up[0], uz.up[1], uz.up[2]), xn), Nn.rotateByQuaternionToRef(xn, Nn)
      }
      zz.updateVector3("sun", Nn), Jn[0] = Nn.x, Jn[1] = Nn.y, Jn[2] = Nn.z;
      const lz = Ru(uz, Jn, An);
      zz.updateFloatsFrom("sunDir", lz.sunDir, 0, 3), zz.updateFloat("sunE", lz.sunE), zz.updateFloatsFrom("inScatterR", lz.inScatterR, 0, 3), zz.updateFloatsFrom("inScatterM", lz.inScatterM, 0, 3), zz.updateFloatsFrom("extinctionBeta", lz.extinctionBeta, 0, 3), zz.updateFloat("sunsetMix", lz.sunsetMix), zz.updateFloat("sunDiscE", lz.sunDiscE), zz.updateFloat("mieScale", lz.mieScale), zz.updateFloat("mieBase", lz.mieBase), zz.updateFloat("mieSlope", lz.mieSlope)
    }

    function Pn(zz, uz) {
      const bz = Tn;
      bz[0] = uz.far, bz[5] = uz.far, bz[10] = uz.far, bz[15] = 1;
      const Ez = zz.infiniteDistance;
      for (let nz = 0; nz < 3; nz++) bz[12 + nz] = zz.position[nz] + (Ez ? uz.worldMatrix[12 + nz] : 0);
      return Tn
    }
    var Gn = bz(38101);

    function an(zz) {
      return Math.max(4, 4 * Math.ceil(zz / 4))
    }

    function Vn(zz, uz, bz, Ez) {
      const nz = zz.createBuffer({
        label: Ez,
        size: an(uz.byteLength),
        usage: bz,
        mappedAtCreation: !0
      });
      return new Uint8Array(nz.getMappedRange(), 0, uz.byteLength).set(new Uint8Array(uz.buffer, uz.byteOffset, uz.byteLength)), nz.unmap(), nz
    }

    function mn(zz, uz) {
      return Math.floor(Math.log2(Math.max(zz, uz))) + 1
    }

    function qn(zz, uz, bz, Ez, nz, iz) {
      const lz = zz.createTexture({
          label: iz,
          size: {
            width: bz,
            height: Ez,
            depthOrArrayLayers: nz
          },
          format: "rgba8unorm",
          mipLevelCount: mn(bz, Ez),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        Mz = (uz, bz, Ez, iz) => {
          zz.queue.writeTexture({
            texture: lz,
            mipLevel: bz
          }, uz, {
            bytesPerRow: 4 * Ez,
            rowsPerImage: iz
          }, {
            width: Ez,
            height: iz,
            depthOrArrayLayers: nz
          })
        };
      Mz(uz, 0, bz, Ez);
      let tz = 1;
      for (const Hz of function*(zz, uz, bz, Ez) {
          let nz = zz,
            iz = uz,
            lz = bz;
          for (; iz > 1 || lz > 1;) {
            const zz = Math.max(1, iz >> 1),
              uz = Math.max(1, lz >> 1),
              bz = new Uint8Array(zz * uz * Ez * 4),
              Mz = 4 * iz;
            let tz = 0;
            for (let Hz = 0; Hz < Ez; Hz++) {
              const Ez = Hz * Mz * lz;
              for (let Hz = 0; Hz < uz; Hz++) {
                const uz = Ez + Math.min(2 * Hz, lz - 1) * Mz,
                  Oz = Ez + Math.min(2 * Hz + 1, lz - 1) * Mz;
                for (let Ez = 0; Ez < zz; Ez++) {
                  const zz = 4 * Math.min(2 * Ez, iz - 1),
                    lz = 4 * Math.min(2 * Ez + 1, iz - 1);
                  for (let Ez = 0; Ez < 4; Ez++) bz[tz++] = nz[uz + zz + Ez] + nz[uz + lz + Ez] + nz[Oz + zz + Ez] + nz[Oz + lz + Ez] + 2 >> 2
                }
              }
            }
            yield {
              data: bz,
              width: zz,
              height: uz
            }, nz = bz, iz = zz, lz = uz
          }
        }(uz, bz, Ez, nz)) Mz(Hz.data, tz++, Hz.width, Hz.height);
      return lz
    }
    const hn = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Un(zz) {
      if (zz.startsWith("data:")) {
        const uz = zz.search(/[;,]/);
        return `data:${uz>5?zz.slice(5,uz):""} URL of ${zz.length} characters`
      }
      return zz.length > 80 ? `${zz.slice(0,80)}...` : zz
    }
    async function cn(zz) {
      const uz = await fetch(zz);
      if (!uz.ok) throw new Error(`${Un(zz)}: ${uz.status} ${uz.statusText}`);
      return createImageBitmap(await uz.blob(), hn)
    }
    async function gn(zz) {
      const uz = await cn(zz),
        bz = new OffscreenCanvas(uz.width, uz.height),
        Ez = bz.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Ez) throw new Error("No 2D context to decode an image");
      Ez.drawImage(uz, 0, 0);
      const {
        data: nz
      } = Ez.getImageData(0, 0, uz.width, uz.height);
      return uz.close(), {
        pixels: new Uint8Array(nz.buffer, nz.byteOffset, nz.byteLength),
        width: bz.width,
        height: bz.height
      }
    }
    const Sn = new WeakMap;

    function yn(zz, uz, bz, Ez) {
      var nz;
      const iz = null !== (nz = Sn.get(zz)) && void 0 !== nz ? nz : new Map;
      Sn.set(zz, iz);
      let lz = iz.get(uz);
      return lz || (lz = (async nz => {
        const iz = null !== (nz = function(zz, uz) {
          const bz = zz ? new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength) : null;
          return null !== bz && void 0 !== bz && bz.byteLength && uz && bz.byteLength % (uz * uz * 4) === 0 ? {
            pixels: bz,
            layerWidth: uz,
            layers: bz.byteLength / (uz * uz * 4)
          } : null
        }(bz, Ez)) && void 0 !== nz ? nz : await async function(zz) {
          const {
            pixels: uz,
            width: bz
          } = await gn(zz);
          return {
            pixels: uz,
            layerWidth: bz,
            layers: uz.byteLength / (bz * bz * 4)
          }
        }(uz), {
          layerWidth: lz,
          layers: Mz
        } = iz;
        return {
          texture: qn(zz, iz.pixels, lz, lz, Mz, `atlas-${uz}`),
          layerWidth: lz,
          layers: Mz
        }
      })(), iz.set(uz, lz), lz.catch((() => {
        iz.delete(uz)
      }))), lz
    }
    const Dn = new Map([
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
      Qn = new Map([
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

    function Wn(zz) {
      for (const uz of (0, Gn.k)(zz))
        if (!Qn.has((0, Gn.i)(uz))) return !1;
      return !0
    }

    function en(zz) {
      const uz = Qn.get(zz);
      if (!uz) return null;
      const [bz, Ez, nz] = uz;
      return {
        srcFactor: Dn.get(bz),
        dstFactor: Dn.get(Ez),
        operation: nz
      }
    }
    let jn = null;

    function In(zz) {
      jn = zz
    }

    function Bn(zz, uz, bz) {
      var Ez;
      null === (Ez = jn) || void 0 === Ez || Ez(zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Cn {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(zz, uz, bz, Ez, nz) {
        bz !== this.pipeline && (zz.setPipeline(bz), this.pipeline = bz), zz.setBindGroup(1, Ez, [nz]);
        const iz = uz.material.bindGroup;
        iz !== this.materialGroup && (zz.setBindGroup(2, iz), this.materialGroup = iz);
        const lz = uz.program.packGroup;
        lz && lz !== this.packGroup && (zz.setBindGroup(Ju.g, lz), this.packGroup = lz);
        const {
          vertexBuffers: Mz,
          vertexOffsets: tz
        } = this;
        for (let Hz = 0; Hz < uz.vertexBuffers.length; Hz++) Mz[Hz] === uz.vertexBuffers[Hz] && tz[Hz] === uz.vertexOffsets[Hz] || (zz.setVertexBuffer(Hz, uz.vertexBuffers[Hz], uz.vertexOffsets[Hz]), Mz[Hz] = uz.vertexBuffers[Hz], tz[Hz] = uz.vertexOffsets[Hz]);
        uz.indexBuffer && uz.indexBuffer !== this.indexBuffer && (zz.setIndexBuffer(uz.indexBuffer, uz.indexFormat), this.indexBuffer = uz.indexBuffer)
      }
    }
    class Yn {
      constructor(zz, uz, bz, Ez) {
        this.modelMeshes = zz, this.Dk = uz, this.maker = bz, this.warnOnce = Ez, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(zz) {
        this.collectGroup(zz, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(zz, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(zz, 1, this.frontDraws, this.frontDraws, !0);
        for (const uz of this.modelMeshes.groupIds())(uz < -1 || uz > 1) && this.warnOnce(`group:${uz}`, `rendering group ${uz} is not drawn`);
        for (const uz of this.Dk.groupIds())(uz < -1 || uz > 1) && this.warnOnce(`group:${uz}`, `rendering group ${uz} is not drawn`);
        this.opaqueDraws.sort(kn), this.transparentDraws.sort(zi)
      }
      collectGroup(zz, uz, bz, Ez, nz) {
        const iz = this.modelMeshes.group(uz),
          lz = this.Dk.group(uz),
          Mz = 0 === uz ? null === lz || void 0 === lz ? void 0 : lz.opaque : void 0;
        this.collectList(zz, null === iz || void 0 === iz ? void 0 : iz.opaque, Mz || null === lz || void 0 === lz ? void 0 : lz.opaque, uz, !1, bz, nz), Mz && (this.Dk.drawn += this.maker.bundleDraws(zz, Mz, uz)), this.collectList(zz, null === iz || void 0 === iz ? void 0 : iz.alphaTest, void 0, uz, !1, bz, nz), this.collectList(zz, null === iz || void 0 === iz ? void 0 : iz.transparent, null === lz || void 0 === lz ? void 0 : lz.transparent, uz, !0, Ez, nz)
      }
      collectList(zz, uz, bz, Ez, nz, iz, lz) {
        var Mz;
        const tz = iz.length;
        uz && this.maker.pushDraws(zz, uz.units, uz.units.length, Ez, nz, iz, uz.rows), bz && (this.Dk.drawn += this.maker.pushDraws(zz, bz, bz.length, Ez, nz, iz));
        const Hz = nz ? null === (Mz = this.modelMeshes.group(Ez)) || void 0 === Mz ? void 0 : Mz.text : void 0;
        Hz && this.maker.pushDraws(zz, Hz.units, Hz.units.length, Ez, !0, iz, Hz.rows), lz && ui(iz, tz)
      }
    }

    function kn(zz, uz) {
      return zz.program.id - uz.program.id || zz.material.owner.uniqueId - uz.material.owner.uniqueId
    }

    function zi(zz, uz) {
      return zz.material.owner.uniqueId - uz.material.owner.uniqueId
    }

    function ui(zz, uz) {
      for (let bz = uz + 1; bz < zz.length; bz++) {
        const Ez = zz[bz];
        let nz = bz - 1;
        for (; nz >= uz && zi(zz[nz], Ez) > 0; nz--) zz[nz + 1] = zz[nz];
        zz[nz + 1] = Ez
      }
    }
    const bi = {};

    function Ei(zz) {
      return zz.hasThinInstances ? "thin" : zz.KEz || zz._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function ni(zz, uz, bz) {
      return zz ? (bz._needUVs = !0, zz.optimizeUVAllocation && (0, Az.D)(zz.matrix) ? (bz[`${uz}DIRECTUV`] = zz.uvSet + 1, bz[`MAINUV${zz.uvSet+1}`] = !0) : bz[`${uz}DIRECTUV`] = 0, !0) : (bz[`${uz}DIRECTUV`] = 0, !1)
    }

    function ii(zz) {
      const uz = new Map;
      for (const bz in zz) {
        if (95 === bz.charCodeAt(0)) continue;
        const Ez = zz[bz],
          nz = typeof Ez;
        "number" === nz || "string" === nz ? uz.set(bz, String(Ez)) : Ez && "function" !== nz && uz.set(bz, !0)
      }
      return uz
    }

    function li(zz) {
      const uz = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: bz
        }
        of zz.features)
        for (const zz in bz) uz[zz] = bz[zz];
      return uz
    }

    function Mi(zz) {
      const uz = zz.parts.geometry;
      return null !== uz && void 0 !== uz && uz.live ? uz : null
    }

    function ti(zz) {
      var uz;
      return null !== (uz = Mi(zz)) && void 0 !== uz ? uz : bi
    }
    class Hi {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = zz, this.warnOnce = uz, this.programWithModel = bz, this.packFailed = Ez, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(zz, uz, bz, Ez, nz) {
        const iz = uz.owner;
        let lz = this.drawStates.get(uz);
        if (!lz) {
          const zz = uz.parts.materials[uz.range];
          if (!zz) return this.warnOnce("model", `${bz.name} on ${iz.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          lz = {
            defines: li(zz),
            model: zz,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: nz,
            groupId: Ez,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(uz, lz)
        }
        if (this.programCurrent(lz, uz, nz, Ez)) return lz.program;
        const {
          model: Mz
        } = lz, tz = ti(uz), Hz = this.instanceLayout(iz, nz), Oz = this.definesBits(iz);
        if (!this.prepareModelDefines(zz, iz, Mz, lz.defines, Ez, nz)) return null;
        lz.instancing = nz, lz.groupId = Ez, lz.modelVersion = Mz.version, lz.geometry = tz, lz.instanceLayout = Hz, lz.definesBits = Oz;
        const pz = function(zz) {
          let uz = "";
          for (const [bz, Ez] of zz) uz += !0 === Ez ? `${bz};` : `${bz}=${Ez};`;
          return uz
        }(ii(lz.defines));
        return pz === lz.definesKey && lz.packVariant === this.modelPackVariant && lz.program && !this.packFailed(lz.program) || (lz.definesKey = pz, lz.packVariant = this.modelPackVariant, lz.program = this.programWithModel(Mz, lz.defines, pz)), lz.program
      }
      programCurrent(zz, uz, bz, Ez) {
        return null !== zz.program && !this.packFailed(zz.program) && zz.instancing === bz && zz.groupId === Ez && this.definesHold(zz, uz, bz)
      }
      definesHold(zz, uz, bz) {
        return zz.modelVersion === zz.model.version && zz.geometry === ti(uz) && zz.instanceLayout === this.instanceLayout(uz.owner, bz) && zz.definesBits === this.definesBits(uz.owner) && zz.packVariant === this.modelPackVariant
      }
      modelPackKind(zz) {
        var uz;
        return 0 === this.modelPackVariant ? null : null !== (uz = (0, xz.u)(zz, vz.i.name)) && void 0 !== uz && uz.active ? "placed" : zz.item ? "item" : zz.lifeform ? "lifeform" : zz.box ? "box" : null
      }
      instanceLayout(zz, uz) {
        var bz, Ez, nz;
        return "thin" === uz ? null !== (nz = this.resources.fY.get(zz)) && void 0 !== nz ? nz : null : "instanced" === uz && null !== (bz = null === (Ez = zz._userInstancedBuffersStorage) || void 0 === Ez ? void 0 : Ez.interleavedKinds) && void 0 !== bz ? bz : null
      }
      definesBits(zz) {
        const uz = this.view;
        return (zz.visibility < 1 ? 1 : 0) | (zz.hasVertexAlpha ? 2 : 0) | (zz.applyFog ? 4 : 0) | (zz.useVertexColors ? 8 : 0) | (zz.nonUniformScaling ? 16 : 0) | (uz.fogEnabled && 0 !== uz.fogMode ? 32 : 0) | (uz.lightsEnabled ? 64 : 0) | uz.lightCount << 7
      }
      prepareLightDefines(zz, uz, bz) {
        let Ez = 0;
        if (this.view.lightsEnabled && !uz) {
          const uz = Math.min(bz, 4);
          for (; Ez < this.view.lightCount && (zz[`LIGHT${Ez}`] = !0, zz[`LITE_LIGHT${Ez}_SLOT`] = Ez, Ez++, zz._needNormals = !0, Ez !== uz););
        }
        for (let nz = Ez; nz < 4; nz++) zz[`LIGHT${nz}`] = !1, zz[`LITE_LIGHT${nz}_SLOT`] = void 0
      }
      prepareModelDefines(zz, uz, bz, Ez, nz, iz) {
        const {
          features: lz
        } = bz;
        Ez._needNormals = !1, Ez._needUVs = !1;
        const Mz = this.view;
        this.prepareLightDefines(Ez, bz.disableLighting, bz.maxSimultaneousLights), Ez.MAINUV1 = !1, Ez.MAINUV2 = !1;
        const tz = bz.diffuseTexture;
        tz ? (Ez._needUVs = !0, Ez.DIFFUSE = !0, tz.optimizeUVAllocation && (0, Az.D)(tz.matrix) ? (Ez.DIFFUSEDIRECTUV = tz.uvSet + 1, Ez[`MAINUV${tz.uvSet+1}`] = !0) : Ez.DIFFUSEDIRECTUV = 0, tz.uvSet > 1 && this.warnOnce(`uvset:${bz.name}`, `${bz.name} samples UV set ${tz.uvSet+1}, which is not supported`)) : (Ez.DIFFUSE = !1, Ez.DIFFUSEDIRECTUV = 0);
        const Hz = bz.opacityTexture,
          Oz = bz.emissiveTexture;
        Ez.OPACITY = ni(Hz, "OPACITY", Ez), Ez.OPACITYRGB = null !== Hz && Hz.getAlphaFromRGB, Ez.EMISSIVE = ni(Oz, "EMISSIVE", Ez), (Hz && Hz.uvSet > 1 || Oz && Oz.uvSet > 1) && this.warnOnce(`uvset:${bz.name}`, `${bz.name} samples a UV set past 2, which is not supported`);
        const pz = bz.reflectionTexture,
          dz = null !== pz;
        if (dz) {
          if (!this.resources.boundTexture(pz)) return !1;
          Ez._needNormals = !0
        }
        Ez.REFLECTION = dz, Ez.REFLECTIONMAP_3D = dz, Ez.REFLECTIONMAP_SKYBOX = dz, Ez.REFLECTIONMAP_OPPOSITEZ = dz && (zz.useRightHandedSystem ? !pz.invertZ : pz.invertZ), Ez.ROUGHNESS = dz && bz.roughness > 0, Ez.REFLECTIONOVERALPHA = dz && bz.useReflectionOverAlpha, Ez.LITE_REFLECTION_LUMINANCE = dz && "cube" === pz.source.kind && pz.source.luminance, (uz.skeleton || uz.morphTargetManager) && this.warnOnce(`skin:${uz.name}`, `${uz.name} has bones or morph targets, which are not supported`), Ez.FOG = bz.fogEnabled && uz.applyFog && Mz.fogEnabled && 0 !== Mz.fogMode, Ez.NONUNIFORMSCALING = uz.nonUniformScaling;
        const {
          visibility: Fz,
          hasVertexAlpha: Zz
        } = uz;
        Ez.ALPHATEST = (0, xz.P)(bz, Fz, Zz), Ez.ALPHAFROMDIFFUSE = (0, xz.db)(bz), Ez.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== bz.transparencyMode, Ez.ALPHABLEND = null === bz.transparencyMode || (0, xz.N)(bz, Fz, Zz), Ez.PREMULTIPLYALPHA = 7 === bz.alphaMode || 8 === bz.alphaMode, Ez.EMISSIVEASILLUMINATION = bz.useEmissiveAsIllumination, Ez.LINKEMISSIVEWITHDIFFUSE = bz.linkEmissiveWithDiffuse, Ez.TWOSIDEDLIGHTING = !bz.backFaceCulling && bz.twoSidedLighting, Ez.INSTANCES = "none" !== iz, Ez.THIN_INSTANCES = "thin" === iz, Ez.LITE_FRONT_LAYER = nz >= 1;
        for (const {
            feature: Nz,
            state: vz,
            active: xz
          }
          of lz) {
          var Rz, Kz;
          if (xz) null === (Rz = (Kz = (0, Ou.j)(Nz)).prepareDefinesBeforeAttributes) || void 0 === Rz || Rz.call(Kz, vz, Ez, zz, uz)
        }
        this.modelPackKind(bz) && (Ez._needNormals = !0), Ez.NORMAL = Ez._needNormals && uz.isVerticesDataPresent("normal"), Ez.UV1 = Ez._needUVs && uz.isVerticesDataPresent("uv"), Ez.UV2 = Ez._needUVs && uz.isVerticesDataPresent("uv2");
        const wz = uz.useVertexColors && uz.isVerticesDataPresent("color");
        Ez.VERTEXCOLOR = wz, Ez.VERTEXALPHA = uz.hasVertexAlpha && wz, Ez.INSTANCESCOLOR = "none" !== iz && uz.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Nz,
            state: vz,
            active: xz
          }
          of lz) {
          var Xz, fz;
          if (xz) null === (Xz = (fz = (0, Ou.j)(Nz)).prepareDefines) || void 0 === Xz || Xz.call(fz, vz, Ez, zz, uz, bz)
        }
        const sz = zz.uR();
        for (const {
            feature: Nz,
            state: vz,
            active: xz
          }
          of lz) {
          var rz, oz;
          if (xz && !1 === (null === (rz = (oz = (0, Ou.j)(Nz)).isReadyForSubMesh) || void 0 === rz ? void 0 : rz.call(oz, vz, Ez, zz, sz))) return !1
        }
        return !0
      }
    }

    function Oi(zz, uz, bz) {
      return zz.codeVersion !== uz.version && function(zz, uz) {
        const bz = [],
          Ez = [];
        for (const {
            feature: dz,
            state: Fz,
            active: Zz
          }
          of uz.features) {
          var nz, iz, lz, Mz;
          if (Zz) di(null === (nz = (iz = (0, Ou.j)(dz)).getCustomCode) || void 0 === nz ? void 0 : nz.call(iz, Fz, "vertex", oz.c.WGSL), bz), di(null === (lz = (Mz = (0, Ou.j)(dz)).getCustomCode) || void 0 === lz ? void 0 : lz.call(Mz, Fz, "fragment", oz.c.WGSL), Ez)
        }
        const tz = [];
        for (const {
            feature: dz,
            state: Fz
          }
          of uz.features) {
          var Hz, Oz;
          const zz = null === (Hz = (Oz = (0, Ou.j)(dz)).getUniforms) || void 0 === Hz ? void 0 : Hz.call(Oz, Fz, oz.c.WGSL);
          for (const uz of null !== (pz = null === zz || void 0 === zz ? void 0 : zz.ubo) && void 0 !== pz ? pz : []) {
            var pz;
            uz.size && uz.type && tz.push({
              name: uz.name,
              type: uz.type,
              arraySize: uz.arraySize
            })
          }
        }
        zz.vertexCode = bz, zz.fragmentCode = Ez, zz.pluginUniforms = tz, zz.codeKey = JSON.stringify([bz, Ez, tz]), zz.codeVersion = uz.version
      }(zz, uz), `${bz}#${zz.codeKey}`
    }

    function di(zz, uz) {
      if (zz)
        for (const bz in zz) zz[bz] && uz.push([bz, zz[bz]])
    }
    const Fi = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Zi {
      constructor(zz) {
        this.warnOnce = zz, this.states = new Map
      }
      renderState(zz, uz, bz, Ez) {
        var nz;
        let iz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          lz = null !== (nz = zz.sideOrientation) && void 0 !== nz ? nz : uz.sideOrientation;
        uz._getWorldMatrixDeterminant() < 0 && (lz = 0 === lz ? 1 : 0);
        const Mz = "triangle-list" === iz,
          tz = bz ? zz.alphaMode : 0,
          Hz = (!bz || (0 === tz || zz.forceDepthWrite)) && !zz.disableDepthWrite,
          Oz = Mz && zz.backFaceCulling ? zz.cullBackFaces ? "back" : "front" : "none",
          pz = Mz && 0 !== lz ? "ccw" : "cw",
          dz = zz.depthFunction,
          Fz = Mz ? zz.zOffset : 0,
          Zz = Mz ? zz.zOffsetUnits : 0,
          Rz = !zz.disableColorWrite;
        return Ez && Ez.alphaMode === tz && Ez.depthWrite === Hz && Ez.depthFunction === dz && Ez.cullMode === Oz && Ez.frontFace === pz && Ez.zOffset === Fz && Ez.zOffsetUnits === Zz && Ez.colourWrite === Rz && Ez.topology === iz ? Ez : this.stateFor(tz, Hz, dz, Oz, pz, Fz, Zz, Rz, iz)
      }
      stateFor(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
        const Hz = `${zz}|${uz}|${bz}|${Ez}|${nz}|${iz}|${lz}|${Mz}|${tz}`;
        let Oz = this.states.get(Hz);
        if (!Oz) {
          var pz;
          const dz = zz ? en(zz) : null;
          zz && !dz && this.warnOnce(`alpha:${zz}`, `alpha mode ${zz} is not supported`), Oz = {
            key: Hz,
            alphaMode: zz,
            depthFunction: bz,
            zOffset: iz,
            zOffsetUnits: lz,
            topology: tz,
            blend: dz,
            depthWrite: uz,
            depthCompare: bz && null !== (pz = Fi.get(bz)) && void 0 !== pz ? pz : null,
            cullMode: Ez,
            frontFace: nz,
            depthBias: -lz,
            depthBiasSlopeScale: -iz,
            colourWrite: Mz
          }, this.states.set(Hz, Oz)
        }
        return Oz
      }
    }
    var Ri = bz(36890);

    function Ki(zz) {
      if (!zz.frozen) return -1;
      let uz = zz.version;
      for (const {
          feature: bz,
          state: Ez,
          active: nz
        }
        of zz.features) {
        if (!nz || !bz.bind) continue;
        const zz = (0, Ou.j)(bz).uniformsVersion;
        if (!zz) return -1;
        uz += zz(Ez)
      }
      return uz
    }
    class wi {
      constructor(zz, uz, bz) {
        this.slots = zz, this.data = uz, this.textures = bz, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(zz, uz) {
        this.write4(zz, uz, 0, 0, 0, 1)
      }
      updateFloat2(zz, uz, bz) {
        this.write4(zz, uz, bz, 0, 0, 2)
      }
      updateFloat3(zz, uz, bz, Ez) {
        this.write4(zz, uz, bz, Ez, 0, 3)
      }
      updateFloat4(zz, uz, bz, Ez, nz) {
        this.write4(zz, uz, bz, Ez, nz, 4)
      }
      updateVector3(zz, uz) {
        this.write4(zz, uz.x, uz.y, uz.z, 0, 3)
      }
      updateVector4(zz, uz) {
        this.write4(zz, uz.x, uz.y, uz.z, uz.w, 4)
      }
      updateColor3(zz, uz) {
        this.write4(zz, uz.r, uz.g, uz.b, 0, 3)
      }
      updateColor4(zz, uz, bz) {
        this.write4(zz, uz.r, uz.g, uz.b, bz, 4)
      }
      updateFloatsFrom(zz, uz, bz, Ez) {
        const nz = this.slots.get(zz);
        if (!nz) return;
        const iz = this.data,
          lz = nz.offset;
        for (let Mz = 0; Mz < Ez; Mz++) iz[lz + Mz] = uz[bz + Mz]
      }
      updateFloat3TimesFloats(zz, uz, bz, Ez) {
        const nz = this.slots.get(zz);
        if (!nz) return;
        const iz = this.data,
          lz = nz.offset;
        iz[lz] = uz[bz] * Ez[0], iz[lz + 1] = uz[bz + 1] * Ez[1], iz[lz + 2] = uz[bz + 2] * Ez[2]
      }
      M_(zz, uz) {
        const bz = this.slots.get(zz);
        bz && this.data.set(uz.m, bz.offset)
      }
      updateMatrixFloats(zz, uz) {
        const bz = this.slots.get(zz);
        bz && this.data.set(uz, bz.offset)
      }
      updateFloatArray(zz, uz) {
        const bz = this.slots.get(zz);
        if (!bz) return;
        if (!bz.arraySize || bz.stride === bz.floats) return void this.data.set(uz, bz.offset);
        const Ez = Math.min(uz.length, bz.floats * bz.arraySize);
        for (let nz = 0; nz < Ez; nz++) this.data[bz.offset + Math.floor(nz / bz.floats) * bz.stride + nz % bz.floats] = uz[nz]
      }
      updateArray(zz, uz) {
        this.updateFloatArray(zz, uz)
      }
      setTexture(zz, uz) {
        this.textures.set(zz, uz), this.expected.delete(zz)
      }
      expectTexture(zz) {
        this.textures.set(zz, null), this.expected.add(zz)
      }
      write4(zz, uz, bz, Ez, nz, iz) {
        const lz = this.slots.get(zz);
        if (!lz) return;
        const Mz = this.data,
          tz = lz.offset;
        Mz[tz] = uz, iz > 1 && (Mz[tz + 1] = bz), iz > 2 && (Mz[tz + 2] = Ez), iz > 3 && (Mz[tz + 3] = nz)
      }
    }

    function Xi(zz, uz) {
      const bz = cE,
        Ez = Ri.h,
        nz = zz.lights,
        iz = Math.min(zz.lightCount, 8);
      for (let lz = 0; lz < iz; lz++) {
        const zz = bz.lights + lz * bz.lightStride,
          iz = lz * Ri.b;
        uz[zz] = nz[iz + Ez.vector], uz[zz + 1] = nz[iz + Ez.vector + 1], uz[zz + 2] = nz[iz + Ez.vector + 2], uz[zz + 3] = nz[iz + Ez.kind] === Ri.e.directional ? 1 : 0, uz[zz + 4] = nz[iz + Ez.diffuse], uz[zz + 5] = nz[iz + Ez.diffuse + 1], uz[zz + 6] = nz[iz + Ez.diffuse + 2], uz[zz + 7] = nz[iz + Ez.range], uz[zz + 8] = nz[iz + Ez.specular], uz[zz + 9] = nz[iz + Ez.specular + 1], uz[zz + 10] = nz[iz + Ez.specular + 2], uz[zz + 11] = nz[iz + Ez.range]
      }
      uz[bz.fogInfos] = zz.fogMode, uz[bz.fogInfos + 1] = zz.fogStart, uz[bz.fogInfos + 2] = zz.fogEnd, uz[bz.fogInfos + 3] = zz.fogDensity, uz[bz.fogColour] = zz.fogColour[0], uz[bz.fogColour + 1] = zz.fogColour[1], uz[bz.fogColour + 2] = zz.fogColour[2], uz[bz.outputHeight] = zz.renderHeight, uz[bz.animTick] = zz.animTick, uz[bz.timeMs] = zz.timeMs
    }
    class fi {
      constructor(zz) {
        this.instancesOf = zz
      }
      refreshModelUniforms(zz, uz, bz, Ez) {
        const nz = Ki(bz);
        if (nz >= 0 && nz === uz.heldVersion && uz.textures.get("diffuseSampler") === bz.diffuseTexture && uz.textures.get("reflectionCubeSampler") === bz.reflectionTexture && uz.textures.get("opacitySampler") === bz.opacityTexture && uz.textures.get("emissiveSampler") === bz.emissiveTexture) return !0;
        if (nz < 0)
          for (const iz of this.instancesOf(bz)) iz.heldVersion = -1;
        return this.writeModelUniforms(zz, uz, bz, Ez), uz.heldVersion = nz, !1
      }
      writeModelUniforms(zz, uz, bz, Ez) {
        const {
          ubo: nz
        } = uz, iz = bz.diffuseTexture, lz = bz.diffuseColor;
        nz.updateFloat4("vDiffuseColor", lz[0], lz[1], lz[2], bz.alpha), iz && (nz.updateFloat2("vDiffuseInfos", iz.uvSet, iz.level), nz.updateMatrixFloats("diffuseMatrix", iz.matrix)), nz.updateFloat("alphaCutOff", bz.alphaCutOff), nz.updateFloatsFrom("vEmissiveColor", bz.emissiveColor, 0, 3), nz.updateFloat3TimesFloats("vAmbientColor", Ez.ambientColour, 0, bz.ambientColor);
        const Mz = bz.specularColor;
        nz.updateFloat4("vSpecularColor", Mz[0], Mz[1], Mz[2], bz.specularPower), nz.setTexture("diffuseSampler", iz);
        const tz = bz.opacityTexture;
        tz && (nz.updateFloat2("vOpacityInfos", tz.uvSet, tz.level), nz.updateMatrixFloats("opacityMatrix", tz.matrix)), nz.setTexture("opacitySampler", tz);
        const Hz = bz.emissiveTexture;
        Hz && (nz.updateFloat2("vEmissiveInfos", Hz.uvSet, Hz.level), nz.updateMatrixFloats("emissiveMatrix", Hz.matrix)), nz.setTexture("emissiveSampler", Hz);
        const Oz = bz.reflectionTexture;
        Oz && nz.updateMatrixFloats("reflectionMatrix", Oz.matrix), nz.updateFloat2("vReflectionInfos", Oz ? Oz.level * zz.iblIntensity : 0, bz.roughness), nz.setTexture("reflectionCubeSampler", Oz);
        const pz = zz.uR();
        for (const {
            feature: Zz,
            state: Rz,
            active: Kz
          }
          of bz.features) {
          var dz, Fz;
          if (Kz) null === (dz = (Fz = (0, Ou.j)(Zz)).bind) || void 0 === dz || dz.call(Fz, Rz, nz, zz, pz)
        }
      }
    }

    function si(zz) {
      const uz = zz.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(uz) ? "u32" : /i32|^vec\di$/.test(uz) ? "i32" : "f32"
    }

    function ri(zz, uz) {
      const bz = zz.getSize(),
        Ez = si(uz),
        nz = zz => 4 === bz ? `${zz}x4` : 2 === bz ? `${zz}x2` : null;
      if ("f32" === Ez) {
        if (5126 === zz.type) return 1 === bz ? "float32" : bz >= 2 && bz <= 4 ? `float32x${bz}` : null;
        if (!zz.normalized) return null;
        switch (zz.type) {
          case 5121:
            return nz("unorm8");
          case 5120:
            return nz("snorm8");
          case 5123:
            return nz("unorm16");
          case 5122:
            return nz("snorm16")
        }
        return null
      }
      const iz = "u32" === Ez ? "uint" : "sint";
      switch (zz.type) {
        case 5125:
        case 5124:
          return 1 === bz ? `${iz}32` : bz <= 4 ? `${iz}32x${bz}` : null;
        case 5121:
        case 5120:
          return nz(`${iz}8`);
        case 5123:
        case 5122:
          return nz(`${iz}16`)
      }
      return null
    }

    function oi(zz) {
      var uz;
      const bz = /(8|16|32)(?:x(\d))?$/.exec(zz);
      return bz ? Number(bz[1]) / 8 * Number(null !== (uz = bz[2]) && void 0 !== uz ? uz : 1) : 4
    }
    class Ni {
      constructor(zz, uz, bz) {
        this.resources = zz, this.limits = uz, this.warnOnce = bz, this.layouts = new Map
      }
      resolveInputs(zz, uz, bz, Ez) {
        const nz = [],
          iz = bz.program.attributes,
          lz = [];
        for (let Oz = 0; Oz < iz.length; Oz++) {
          const bz = iz[Oz],
            Mz = bz.optional ? null : this.resources.vertexInput(zz, bz.name, Ez);
          if (!Mz) {
            const zz = si(bz.type),
              uz = "u32" === zz ? "uint32x4" : "i32" === zz ? "sint32x4" : "float32x4";
            lz.push(null);
            const Ez = nz.find((zz => null === zz.data));
            Ez ? Ez.attributes.push({
              shaderLocation: Oz,
              offset: 0,
              format: uz
            }) : nz.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Oz,
                offset: 0,
                format: uz
              }]
            });
            continue
          }
          const tz = Mz.getBuffer();
          lz.push(Mz);
          const Hz = ri(Mz, bz.type);
          if (!Hz) return this.warnOnce(`format:${uz}:${bz.name}`, `${uz}'s ${bz.name} (type ${Mz.type}, size ${Mz.getSize()}) has no WebGPU vertex format`), null;
          const pz = Mz.getIsInstanced() ? "instance" : "vertex",
            dz = Mz.byteStride,
            Fz = oi(Hz),
            Zz = nz.find((zz => zz.data === tz && zz.stride === dz && zz.step === pz && Mz.byteOffset >= zz.base && Mz.byteOffset - zz.base + Fz <= dz));
          Zz ? Zz.attributes.push({
            shaderLocation: Oz,
            offset: Mz.byteOffset - Zz.base,
            format: Hz
          }) : nz.push({
            data: tz,
            base: Mz.byteOffset,
            stride: dz,
            step: pz,
            attributes: [{
              shaderLocation: Oz,
              offset: 0,
              format: Hz
            }]
          })
        }
        if (nz.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${uz}`, `${uz} needs ${nz.length} vertex buffers`), null;
        let Mz = "";
        for (const Oz of nz) {
          Mz += `${Oz.stride}${"instance"===Oz.step?"i":"v"}`;
          for (const zz of Oz.attributes) Mz += `,${zz.shaderLocation}:${zz.offset}:${zz.format}`;
          Mz += ";"
        }
        let tz = this.layouts.get(Mz);
        tz || (tz = {
          key: Mz,
          buffers: nz.map((zz => ({
            arrayStride: zz.stride,
            stepMode: zz.step,
            attributes: zz.attributes
          }))),
          instanceEnds: nz.map((zz => {
            let uz = -1;
            if ("instance" === zz.step)
              for (const bz of zz.attributes) uz = Math.max(uz, bz.offset + oi(bz.format));
            return uz
          }))
        }, this.layouts.set(Mz, tz));
        const Hz = nz.map((zz => zz.base));
        return {
          program: bz,
          sources: lz,
          layout: tz,
          slotData: nz.map((zz => zz.data)),
          Z8: Hz,
          buffers: [],
          offsets: Hz,
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

    function vi(zz, uz, bz, Ez) {
      const nz = uz.program.program.attributes;
      for (let iz = 0; iz < nz.length; iz++) {
        if ((nz[iz].optional ? null : bz.vertexInput(zz, nz[iz].name, Ez)) !== uz.sources[iz]) return !1
      }
      return !0
    }
    const xi = 64;
    class Ji {
      constructor(zz, uz, bz, Ez) {
        this.device = zz, this.layout = uz, this.frameBuffer = bz, this.label = Ez, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(zz) {
        if (zz * xi <= this.data.length) return !1;
        let uz = 2 * this.data.length;
        for (; zz * xi > uz;) uz *= 2;
        const bz = new Float32Array(uz);
        return bz.set(this.data), this.data = bz, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nz = this.data,
          iz = zz * xi;
        let lz = nz[iz + 16] !== bz;
        for (let Mz = 0; Mz < 16 && !lz; Mz++) lz = nz[iz + Mz] !== uz[Ez + Mz];
        if (lz) {
          for (let zz = 0; zz < 16; zz++) nz[iz + zz] = uz[Ez + zz];
          nz[iz + 16] = bz
        }
        return lz
      }
      upload(zz, uz) {
        this.device.queue.writeBuffer(this.buffer, zz * gE, this.data, zz * xi, (uz - zz) * xi)
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

    function Ai(zz) {
      return zz.gpu[Az.c.lite] ??= zz.materials.map(((uz, bz) => ({
        parts: zz,
        range: bz,
        owner: zz.owner
      })))
    }

    function Ti(zz) {
      var uz, bz, Ez;
      return null !== (uz = null !== (bz = null === (Ez = zz.parts.materials[zz.range]) || void 0 === Ez ? void 0 : Ez.mirror) && void 0 !== bz ? bz : zz.owner.material) && void 0 !== uz ? uz : null
    }
    const Li = ["opaque", "alphaTest", "transparent", "text"];
    class Pi {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Hu.b)("Lite: ")
      }
      attach(zz, uz) {
        this.model = zz, this.mirror = uz
      }
      get worlds() {
        return this.model.nodes.xd
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
        for (const [uz, bz] of this.groups)
          for (const Ez of Li)
            for (const nz of bz[Ez].units) zz(nz.owner, "text" === Ez ? "transparent" : Ez, uz)
      }
      select(zz, uz) {
        this.frame++, this.selectedCount = 0;
        for (const Mz of this.groups.values())
          for (const zz of Li) Mz[zz].units.length = 0, Mz[zz].rows.length = 0;
        const {
          model: bz,
          mirror: Ez
        } = this;
        if (!bz || !Ez || !zz) return;
        this.rows.length < bz.nodes.Bp && (this.rows = new Int32Array(bz.nodes.Bp));
        const nz = this.rows,
          iz = bz.meshes;
        for (let Mz = 0; Mz < iz.looseCount; Mz++) {
          const zz = iz.loose[Mz],
            bz = Ez.nodes[zz];
          bz && !bz.isBlocked && bz.isEnabled() && !bz.ti.hasAZeroComponent && iz.selects(zz, uz.frustum) && (this.activate(bz, zz), this.selectedCount++)
        }
        const lz = iz.selectTextPlanes(uz.frustum, nz);
        for (let Mz = 0; Mz < lz; Mz++) {
          const uz = nz[Mz],
            iz = Ez.nodes[uz],
            lz = bz.meshes.parts[uz];
          if (!iz.isVisible || !(iz.visibility > 0) || 0 === (iz.layerMask & zz.layerMask) || !lz) continue;
          const tz = this.groupOf(bz.meshes.layer[uz]).text;
          for (const zz of Ai(lz)) tz.units.push(zz), tz.rows.push(uz);
          this.selectedCount++
        }
      }
      instanceBatch(zz) {
        const uz = this.batchOf(zz);
        return uz.dispatched || (uz.dispatched = uz.renderSelf = !0, uz.row = this.rowOf(zz)), uz
      }
      rowOf(zz) {
        return zz.row
      }
      activate(zz, uz) {
        if (!zz.qT) {
          const bz = zz;
          if (bz.KEz) {
            const zz = this.batchOf(bz);
            zz.dispatched = !0, zz.renderSelf = !0, zz.row = uz
          }
          return void this.dispatch(bz, uz, uz)
        }
        const bz = zz,
          Ez = bz.wEz;
        if (Ez._getWorldMatrixDeterminant() >= 0 !== bz._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Ez.name}`, `A mirrored InstancedMesh of ${Ez.name} is not drawn yet`);
        const nz = this.batchOf(Ez);
        nz.instances.push(bz), nz.rows.push(uz), nz.dispatched || (nz.dispatched = !0, this.dispatch(Ez, uz, this.rowOf(Ez)))
      }
      batchOf(zz) {
        let uz = this.batches.get(zz);
        return uz || (uz = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(zz, uz)), uz.frame !== this.frame && (uz.frame = this.frame, uz.dispatched = !1, uz.renderSelf = !1, uz.instances.length = 0, uz.rows.length = 0), uz
      }
      dispatch(zz, uz, bz) {
        const {
          layer: Ez,
          parts: nz
        } = this.model.meshes;
        if (!nz[uz]) return;
        const iz = this.groupOf(Ez[uz]),
          lz = zz;
        for (const Mz of Ai(nz[uz])) {
          const zz = Ti(Mz);
          if (!zz) continue;
          const uz = zz.needAlphaBlendingForMesh(lz) ? iz.transparent : zz.needAlphaTestingForMesh(lz) ? iz.alphaTest : iz.opaque;
          uz.units.push(Mz), uz.rows.push(bz)
        }
      }
      groupOf(zz) {
        let uz = this.groups.get(zz);
        return uz || (uz = {
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
        }, this.groups.set(zz, uz)), uz
      }
    }
    class Gi {
      constructor() {
        this.yM = new Map, this.enabled = [], this.groups = new Map, this.MZ = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(zz) {
        if (this.yM.has(zz)) return;
        const uz = {
          mesh: zz,
          observer: zz.onEffectiveEnabledStateChangedObservable.add((zz => {
            this.Zx(uz, zz)
          })),
          index: -1,
          steady: null
        };
        this.yM.set(zz, uz), this.Zx(uz, zz.isEnabled())
      }
      remove(zz) {
        const uz = this.yM.get(zz);
        uz && (uz.observer.remove(!0), this.Zx(uz, !1), this.yM.delete(zz))
      }
      base(zz) {
        return this.yM.get(zz)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          yM: this.yM.size
        }
      }
      forEachSelected(zz) {
        for (const [uz, bz] of this.groups) {
          for (const Ez of bz.opaque) zz(Ez.owner, "opaque", uz);
          for (const Ez of bz.transparent) zz(Ez.owner, "transparent", uz)
        }
        for (const uz of this.MZ) zz(uz.mesh, "opaque", 0)
      }
      group(zz) {
        return this.groups.get(zz)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(zz, uz) {
        this.drawn = 0, this.selected = 0, this.MZ.length = 0;
        for (const Ez of this.groups.values()) Ez.opaque.length = 0, Ez.transparent.length = 0;
        if (!zz) return;
        const bz = this.enabled;
        for (let Ez = 0; Ez < bz.length; Ez++) {
          const nz = bz[Ez];
          if (nz.steady && uz(nz, zz)) {
            this.selected++, this.MZ.push(nz);
            continue
          }
          const iz = nz.mesh;
          if (iz.isBlocked || iz.ti.hasAZeroComponent) continue;
          if (!iz.isVisible || iz.visibility <= 0 || 0 === (iz.layerMask & zz.layerMask)) continue;
          if (iz.KEz) {
            this.warned.has(iz.name) || (this.warned.add(iz.name), console.warn(`Lite: thin instance base ${iz.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: lz
          } = iz;
          if (!lz) continue;
          iz.computeWorldMatrix(), this.selected++;
          const Mz = this.listsFor(iz.renderingGroupId);
          for (const zz of Ai(lz)) {
            const uz = Ti(zz);
            uz && (uz.needAlphaBlendingForMesh(iz) ? Mz.transparent.push(zz) : Mz.opaque.push(zz))
          }
        }
      }
      Zx(zz, uz) {
        if (uz === zz.index >= 0) return;
        zz.steady = null;
        const bz = this.enabled;
        if (uz) zz.index = bz.length, bz.push(zz);
        else {
          const uz = bz.pop();
          uz !== zz && (bz[zz.index] = uz, uz.index = zz.index), zz.index = -1
        }
      }
      listsFor(zz) {
        let uz = this.groups.get(zz);
        return uz || (uz = {
          opaque: [],
          transparent: []
        }, this.groups.set(zz, uz)), uz
      }
    }
    var ai = bz(38933);
    class Vi {
      constructor() {
        this.bundle = null, this.stale = !0, this.yM = new Set
      }
    }
    class mi {
      constructor(zz, uz, bz) {
        this.device = zz, this.slots = uz, this.host = bz, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Vi, this.VJ = new Vi, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Cn, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(zz) {
          var uz, bz;
          let Ez = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (uz = null === (bz = globalThis.navigator) || void 0 === bz ? void 0 : bz.userAgent) && void 0 !== uz ? uz : "";
          const nz = zz.adapterInfo;
          return "intel" === (null === nz || void 0 === nz ? void 0 : nz.vendor) && "gen-12lp" === nz.architecture && Ez.includes("Windows")
        }(zz), (0, ai.G)(this.direct)
      }
      ZN() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ai.G)(this.directThisFrame)
      }
      add(zz, uz, bz, Ez) {
        let nz = this.records.get(zz);
        return nz || (nz = this.createRecord(zz), this.records.set(zz, nz)), nz.recorded && Ui(nz, uz) || (this.bundleOf(nz).stale = !0), this.place(nz, uz, bz, Ez), nz
      }
      bundleOf(zz) {
        return zz.VJ ? this.VJ : this.main
      }
      addAgain(zz, uz, bz, Ez) {
        zz.recorded || (this.bundleOf(zz).stale = !0), this.place(zz, uz, bz, Ez)
      }
      place(zz, uz, bz, Ez) {
        zz.seen = this.frame, zz.VJ && null === zz.draw && (this.VJ.stale = !0), zz.draw = uz, this.drawn++, bz && this.slots.write(zz.slot, bz, Ez) && (this.slotsFrom = Math.min(this.slotsFrom, zz.slot), this.slotsTo = Math.max(this.slotsTo, zz.slot));
        const nz = this.args,
          iz = 5 * zz.slot;
        nz[iz] === uz.count && nz[iz + 1] === uz.instances && nz[iz + 2] === uz.first || (nz[iz] = uz.count, nz[iz + 1] = uz.instances, nz[iz + 2] = uz.first, this.argsDirty = !0, this.VJ.stale ||= zz.VJ)
      }
      XN() {
        for (const zz of this.records.values()) zz.seen !== this.frame && (zz.draw && (zz.draw = null, this.args[5 * zz.slot + 1] = 0, this.argsDirty = !0, this.VJ.stale ||= zz.VJ), this.frame - zz.seen > 120 && (this.records.delete(zz.unit), this.freeSlots.push(zz.slot), zz.recorded && (this.bundleOf(zz).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(zz) {
        for (const uz of this.records.values()) uz.draw && uz.seen === this.frame && !uz.VJ && zz(uz.draw, this.slots.data, uz.slot * gE / 4)
      }
      resourceDestroyed(zz) {
        this.main.stale ||= this.main.yM.has(zz), this.VJ.stale ||= this.VJ.yM.has(zz)
      }
      execute(zz, uz, bz) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(zz, uz, bz, "direct"), this.drawn;
        const Ez = this.host.sceneGroup(uz);
        if (!Ez) return this.main.bundle = null, this.VJ.bundle = null, this.recordedSceneGroup = null, this.encode(zz, uz, bz, "direct"), this.drawn;
        this.recordedTarget === bz && this.recordedSceneGroup === Ez || (this.recordedTarget = bz, this.recordedSceneGroup = Ez, this.main.stale = !0, this.VJ.stale = !0);
        const nz = this.main,
          iz = this.VJ;
        let lz = !1;
        !nz.stale && nz.bundle || (nz.bundle = this.record(uz, bz, Ez, "indirect"), lz = !0);
        const Mz = (0, ai.l)();
        return (iz.stale || this.rangedEpoch !== Mz) && (this.rangedEpoch = Mz, iz.bundle = this.drawsRanged() ? this.record(uz, bz, Ez, "VJ") : this.noRangedBundle(), lz = !0), lz && (this.bundles = iz.bundle ? [nz.bundle, iz.bundle] : [nz.bundle]), zz.executeBundles(this.bundles), zz.setBindGroup(0, Ez), this.drawn
      }
      record(zz, uz, bz, Ez) {
        const nz = this.device.createRenderBundleEncoder({
          label: "VJ" === Ez ? "thin-bases-ranged" : "thin-bases",
          colorFormats: zz._colorFormat ? [zz._colorFormat] : [],
          depthStencilFormat: zz._depthStencilFormat,
          sampleCount: zz._sampleCount
        });
        return nz.setBindGroup(0, bz), this.encode(nz, zz, uz, Ez), nz.finish()
      }
      noRangedBundle() {
        for (const zz of this.records.values()) zz.VJ && (zz.recorded = !1);
        return this.VJ.yM.clear(), this.VJ.stale = !1, null
      }
      drawsRanged() {
        for (const zz of this.records.values())
          if (zz.VJ && zz.draw) return !0;
        return !1
      }
      encode(zz, uz, bz, Ez) {
        const nz = [];
        for (const tz of this.records.values()) "direct" !== Ez && tz.VJ !== ("VJ" === Ez) || (tz.recorded = !1, tz.draw && nz.push(tz));
        nz.sort(ci);
        const iz = "direct" === Ez ? null : "VJ" === Ez ? this.VJ : this.main;
        null === iz || void 0 === iz || iz.yM.clear(), this.binder.reset();
        let lz = !1;
        for (const tz of nz) {
          var Mz;
          const nz = tz.draw,
            Hz = this.host.pipelineFor(nz, uz, bz);
          if (!Hz) {
            this.host.pipelineCompiling(nz, bz) ? lz = !0 : iz && this.keep(tz, nz, iz.yM);
            continue
          }
          let Oz;
          if (tz.VJ && "indirect" !== Ez) {
            const zz = tz.unit.owner;
            Oz = "direct" === Ez && (0, ai.u)(zz) || (0, ai.p)(zz) || void 0
          }
          if (iz && this.keep(tz, nz, iz.yM), 0 === (null === (Mz = Oz) || void 0 === Mz ? void 0 : Mz.count)) continue;
          this.binder.bind(zz, nz, Hz, this.slots.bindGroup, tz.slot * gE);
          const pz = 5 * tz.slot;
          if ("indirect" === Ez) {
            nz.indexBuffer ? zz.drawIndexedIndirect(this.argsBuffer, 4 * pz) : zz.drawIndirect(this.argsBuffer, 4 * pz);
            continue
          }
          const dz = this.args;
          Oz ? qi(zz, null !== nz.indexBuffer, dz, pz, Oz) : nz.indexBuffer ? zz.drawIndexed(dz[pz], dz[pz + 1], dz[pz + 2], 0, 0) : zz.draw(dz[pz], dz[pz + 1], dz[pz + 2], 0)
        }
        iz && (iz.stale = lz)
      }
      keep(zz, uz, bz) {
        zz.recorded = !0, zz.pipelineKey = uz.pipelineKey, zz.materialGroup = uz.material.bindGroup, zz.vertexBuffers.length = 0, zz.vertexBuffers.push(...uz.vertexBuffers), zz.vertexOffsets = uz.vertexOffsets, zz.indexBuffer = uz.indexBuffer, zz.indexFormat = uz.indexFormat;
        for (const Ez of uz.vertexBuffers) bz.add(Ez);
        uz.indexBuffer && bz.add(uz.indexBuffer), bz.add(uz.material.buffer);
        for (const Ez of uz.material.bound) Ez && bz.add(Ez)
      }
      createRecord(zz) {
        let uz = this.freeSlots.pop();
        return void 0 === uz && (uz = this.slotCount++, this.grow()), {
          unit: zz,
          slot: uz,
          VJ: void 0 !== (0, ai.p)(zz.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.VJ.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function qi(zz, uz, bz, Ez, nz) {
      const iz = bz[Ez + 1],
        lz = nz.data;
      for (let Mz = 0; Mz < nz.count; Mz++) {
        const nz = Math.min(lz[2 * Mz], iz),
          tz = Math.min(lz[2 * Mz + 1], iz - nz);
        0 !== tz && (uz ? zz.drawIndexed(bz[Ez], tz, bz[Ez + 2], 0, nz) : zz.draw(bz[Ez], tz, bz[Ez + 2], nz))
      }
    }

    function Ui(zz, uz) {
      if (zz.pipelineKey !== uz.pipelineKey || zz.materialGroup !== uz.material.bindGroup || zz.indexBuffer !== uz.indexBuffer || zz.indexFormat !== uz.indexFormat || zz.vertexOffsets !== uz.vertexOffsets || zz.vertexBuffers.length !== uz.vertexBuffers.length) return !1;
      for (let bz = 0; bz < zz.vertexBuffers.length; bz++)
        if (zz.vertexBuffers[bz] !== uz.vertexBuffers[bz]) return !1;
      return !0
    }

    function ci(zz, uz) {
      return kn(zz.draw, uz.draw)
    }
    const gi = new WeakMap,
      Si = {
        depth: !1,
        sunShadow: !1
      };

    function yi(zz, uz) {
      let bz = gi.get(zz);
      bz || (bz = new Map, gi.set(zz, bz));
      const Ez = `${uz.depth?"-depth":""}${uz.sunShadow?"-shadow":""}${uz.shadowMask?"-mask":""}`;
      let nz = bz.get(Ez);
      if (!nz) {
        const iz = [{
          binding: Ju.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Ju.h
          }
        }, {
          binding: Ju.w,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        uz.depth && iz.push({
          binding: Ju.o,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), uz.sunShadow && iz.push(... function() {
          const zz = GPUShaderStage.FRAGMENT,
            uz = Ju.q;
          return [{
            binding: uz.uniform,
            visibility: zz,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: uz.nF,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: uz.special,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: uz.volume,
            visibility: zz,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: uz.sampler,
            visibility: zz,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: uz.entities,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: uz.entityGrids,
            visibility: zz,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), uz.shadowMask && iz.push({
          binding: Ju.t,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), nz = zz.createBindGroupLayout({
          label: `${uz.depth?"terrain-":""}shader-pack-inputs${Ez}`,
          entries: iz
        }), bz.set(Ez, nz)
      }
      return nz
    }

    function Di(zz) {
      return yi(zz, Si)
    }

    function Qi(zz, uz) {
      if (!uz) return !1;
      const bz = (0, Au.e)(zz);
      return !!bz && qb(bz, uz)
    }

    function Wi(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!HE(uz)) return [];
      return [yi(zz, {
        depth: nE(uz.packVariant),
        sunShadow: Qi(uz.packVariant, bz),
        shadowMask: Ez
      })]
    }
    class ei {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = zz, this.sunShadow = bz, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Ju.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = zz.createBuffer({
          label: "shader-pack-inputs",
          size: Ju.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Ez = (0, Ju.y)(uz);
        this.textures = zz.createBuffer({
          label: "shader-pack-textures",
          size: Ez.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), zz.queue.writeBuffer(this.textures, 0, Ez), this.bindGroup = zz.createBindGroup({
          label: "shader-pack-inputs",
          layout: Di(zz),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Ju.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Ju.w,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(zz, uz, bz) {
        (0, Ju.B)(this.data, {
          seconds: zz.seconds(),
          lit: bz,
          renderOffset: zz.renderOffset(),
          k_: zz.k_(),
          eyePosition: uz,
          shadowDirection: zz.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ez = uz ? this.sunShadow : null;
        if ((uz || bz) && !Ez) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!zz && !Ez) return this.bindGroup;
        (zz && zz !== this.depthView || bz && bz !== this.maskView) && (this.depthView = null !== zz && void 0 !== zz ? zz : this.depthView, this.maskView = null !== bz && void 0 !== bz ? bz : this.maskView, this.groups.clear());
        const nz = (zz ? 1 : 0) | (Ez ? 2 : 0) | (bz ? 4 : 0);
        let iz = this.groups.get(nz);
        if (!iz) {
          const uz = this.entries();
          zz && uz.push({
            binding: Ju.o,
            resource: zz
          }), Ez && uz.push(...Ez.entries()), bz && uz.push({
            binding: Ju.t,
            resource: bz
          }), iz = this.device.createBindGroup({
            label: `${zz||bz?"terrain-":""}shader-pack-inputs${zz?"-depth":""}${Ez?"-shadow":""}${bz?"-mask":""}`,
            layout: yi(this.device, {
              depth: !!zz,
              sunShadow: !!Ez,
              shadowMask: !!bz
            }),
            entries: uz
          }), this.groups.set(nz, iz)
        }
        return iz
      }
      bind(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        zz.setBindGroup(Ju.g, this.bindGroupFor(uz, bz, Ez))
      }
    }

    function ji(zz, uz, bz) {
      if (zz.gpuVersion === uz.gpuBuffersVersion) return !0;
      let Ez;
      do {
        if (Ez = uz.gpuBuffersVersion, !Ii(zz, uz, bz)) return !1
      } while (uz.gpuBuffersVersion !== Ez);
      return zz.gpuVersion = Ez, zz.fitInstances = 0, !0
    }

    function Ii(zz, uz, bz) {
      let Ez = null;
      for (let iz = 0; iz < zz.slotData.length; iz++) {
        var nz;
        const lz = zz.slotData[iz],
          Mz = lz ? uz.gpuBuffer(lz) : bz;
        if (!Mz) return !1;
        lz && zz.layout.instanceEnds[iz] < 0 && uz.cover(lz, Number.POSITIVE_INFINITY), zz.buffers[iz] = Mz;
        const tz = zz.Z8[iz] + (lz ? uz.gpuOffset(lz) : 0);
        tz !== (null !== (nz = Ez) && void 0 !== nz ? nz : zz.offsets)[iz] && (Ez ??= zz.offsets.slice(), Ez[iz] = tz), zz.ends[iz] = lz ? uz.gpuEnd(lz) : Mz.size
      }
      return Ez && (zz.offsets = Ez), !0
    }

    function Bi(zz, uz, bz, Ez) {
      if (uz <= zz.fitInstances) return null;
      const {
        layout: nz,
        ends: iz,
        offsets: lz,
        slotData: Mz,
        Z8: tz
      } = zz;
      let Hz = !1;
      for (let Oz = 0; Oz < nz.buffers.length; Oz++) {
        const zz = nz.instanceEnds[Oz];
        if (zz < 0) continue;
        const Ez = (uz - 1) * nz.buffers[Oz].arrayStride + zz;
        if (iz[Oz] - lz[Oz] < Ez) return {
          index: Oz,
          needed: Ez
        };
        const pz = Mz[Oz];
        pz && bz.cover(pz, tz[Oz] + Ez) && (Hz = !0)
      }
      return Hz && ji(zz, bz, Ez), zz.fitInstances = uz, null
    }
    var Ci = bz(37276),
      Yi = bz(37295);
    const ki = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      zl = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      ul = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      bl = `((vertexInputs.aPackedLightLevels >> 16u) | ${tu.e.placed}u)`,
      El = "u32(vertexInputs.aShaderPackItem.x)",
      nl = `${tu.e.lifeform}u`;

    function il(zz) {
      return "item" === zz.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const ll = "bloxdSpEnchant",
      Ml = "floor(finalWorld[3].xyz)";

    function tl(zz, uz, bz) {
      return "placed" === uz.kind && zz.reads[bz].includes("bloxdFragmentBlockPosition")
    }

    function Hl(zz, uz) {
      let [bz, Ez] = zz;
      return bz === uz.point && Ez === uz.code
    }

    function Ol(zz, uz) {
      var bz, Ez, nz;
      const iz = null === (bz = zz.find((zz => zz.texture))) || void 0 === bz ? void 0 : bz.texture,
        lz = null === (Ez = zz.find((zz => zz.enchantTier))) || void 0 === Ez ? void 0 : Ez.enchantTier,
        Mz = null === (nz = zz.find((zz => zz.overlay))) || void 0 === nz ? void 0 : nz.overlay,
        tz = Mz ? uz.filter((zz => Hl(zz, Mz))).length : 0;
      return Mz && 1 === tz ? {
        texture: iz,
        overlay: Mz,
        enchantTier: lz
      } : {
        texture: iz,
        enchantTier: lz
      }
    }

    function pl(zz) {
      if ("item" === zz.kind) {
        return {
          vertexFlags: `(${El} & 0xffffu)`,
          varying: "vPackItem",
          value: El,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return zz.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: bl,
        varying: "vPackFlags",
        value: bl,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function dl(zz) {
      return "lifeform" === zz.kind ? nl : "0u"
    }

    function Fl(zz) {
      return !!zz.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Zl(zz, uz) {
      const {
        enchantTier: bz
      } = uz;
      return bz && Fl(uz.defines) && "lifeform" === uz.kind && sl(zz, "enchantTier") ? bz : null
    }

    function Rl(zz, uz) {
      return Fl(uz.defines) && sl(zz, "enchantSpeed")
    }

    function Kl(zz) {
      const {
        overlay: uz,
        defines: bz
      } = zz;
      if (!uz || !bz.DIFFUSE) return null;
      const Ez = bz.VERTEXCOLOR || bz.INSTANCESCOLOR && bz.INSTANCES;
      return `vec4f(${uz.colour}.rgb * uniforms.vDiffuseInfos.y${Ez?" * fragmentInputs.vColor.rgb":""}, ${uz.colour}.a)`
    }
    const wl = "fragmentInputs.vPackTexture";

    function Xl(zz) {
      const {
        atlas: uz,
        defines: bz,
        texture: Ez
      } = zz;
      if (uz || !bz.DIFFUSE) return null;
      if (Ez) return {
        texture: "diffuseSampler",
        ...Ez
      };
      const nz = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===bz.DIFFUSEDIRECTUV?"vMainUV1":2===bz.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== zz.kind) return nz;
      if (!bz.BLOXD_PLUGIN_ANIMATED) return {
        ...nz,
        id: wl
      };
      const iz = oz.c.WGSL,
        lz = (0, oz.vb)(iz, "uAnimStatesNum"),
        Mz = (0, oz.U)(iz, (0, Ci.g)(iz), lz),
        tz = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${lz})`,
        layers: [Mz],
        uv: `vec2f(${tz}.x, ${tz}.y * ${lz} - ${Mz})`,
        levelUv: tz,
        id: wl
      }
    }

    function fl(zz, uz) {
      return "box" === uz.kind && !!zz.hooks.surface && null !== Xl(uz)
    }

    function sl(zz, uz) {
      return zz.reads.fragment.includes(uz)
    }

    function rl(zz) {
      return !!zz.BLOXD_LIGHTING && !zz.BLOXD_UNLIT
    }

    function ol(zz, uz, bz, Ez) {
      const nz = zz.filter((zz => {
        let [bz, Ez] = zz;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === bz && Ez === uz
      }));
      if (1 !== nz.length) throw new Error(`A model program for shader packs has ${0===nz.length?"no":"more than one"} ${Ez} code before fog (lite/modelShaderPack.ts)`);
      return zz.map((zz => zz === nz[0] ? [zz[0], bz] : zz))
    }

    function Nl(zz, uz, bz, Ez) {
      const {
        hooks: nz
      } = zz, {
        kind: iz,
        defines: lz
      } = uz, Mz = [...bz];
      var tz;
      uz.atlas && nz.surface && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Db("atlasIdxIn")]), "item" === iz && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", (0, oz.g)(oz.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), fl(zz, uz) && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", (0, oz.g)(oz.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (tz = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Sb}[min(u32(${tz}) - 1u, arrayLength(&${Sb}) - 1u)], ${tz} > 0.5);\n`)]);
      const Hz = pl(uz);
      Hz && (nz.surface || nz.light) && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Hz.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Hz.varying} = ${Hz.value};`]);
      let Oz = Ez;
      if (tl(zz, uz, "fragment") && (Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Ml});`]), Oz = [...Oz, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), sl(zz, "localPosition") && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${il(uz)};`]), Fl(lz) && nz.surface) {
        Rl(zz, uz) && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const bz = Zl(zz, uz);
        bz && Mz.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${bz});`]);
        const Ez = (0, oz.ib)(oz.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Oz = [...ol(Oz, (0, Yi.i)(oz.c.WGSL), Ez, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Yi.d)(ll)]]
      }
      const {
        overlay: pz
      } = uz;
      pz && Kl(uz) && nz.surface && (Oz = Oz.filter((zz => !Hl(zz, pz))));
      const dz = nz.light ? function(zz) {
        return "placed" === zz.kind ? {
          name: "terrain",
          engine: (0, Nu.S)(oz.c.WGSL),
          pack: (0, Nu.lb)(oz.c.WGSL)
        } : zz.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, Nu.L)(oz.c.WGSL),
          pack: (0, Nu.db)(oz.c.WGSL)
        } : null
      }(uz) : null;
      if (dz && (Oz = ol(Oz, dz.engine, dz.pack, `${dz.name} light`), "placed" !== iz && rl(lz))) {
        const zz = lz.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, oz.vb)(oz.c.WGSL, "uEntityLightLevels") : (0, oz.Fb)(oz.c.WGSL, "aLightLevels");
        Mz.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Nu.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Nu.hb)(oz.c.WGSL, zz)])
      }
      return {
        vertexCode: Mz,
        fragmentCode: Oz
      }
    }

    function vl(zz, uz, bz, Ez) {
      return Vb(zz, uz, bz, Ez, "model")
    }
    const xl = "\t@builtin(position) position: vec4f,\n";

    function Jl(zz, uz) {
      const bz = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(zz)[0];
      return `${bz}${uz}${zz.slice(bz.length)}`
    }

    function Al(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: nz
      } = uz, iz = qb(uz, Ez), {
        kind: lz,
        defines: Mz
      } = bz, tz = function(zz, uz) {
        var bz, Ez, nz;
        const {
          defines: iz
        } = uz, lz = pl(uz), Mz = !!iz.FOG, tz = Fl(iz), Hz = null !== (bz = null === lz || void 0 === lz ? void 0 : lz.enchantTier) && void 0 !== bz ? bz : Zl(zz, uz) ? "fragmentInputs.vPackEnchantTier" : "0u", Oz = "lifeform" === uz.kind && !iz.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Ez = null === lz || void 0 === lz ? void 0 : lz.vertexFlags) && void 0 !== Ez ? Ez : dl(uz),
          vertexLocalPosition: il(uz),
          flags: null !== (nz = null === lz || void 0 === lz ? void 0 : lz.flags) && void 0 !== nz ? nz : dl(uz),
          normal: "normalW",
          alpha: Oz ? "alpha * baseColor.a" : "alpha",
          alphaOut: Oz ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: Mz ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: Mz ? "1.0 - fog" : "0.0",
          enchantTier: Hz,
          enchantColour: tz ? `${ll}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Rl(zz, uz) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: sl(zz, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Kl(uz)
        }
      }(uz, bz), Hz = zz.textures.filter((zz => /^textureAtlas\d+$/.test(zz.name))).length, Oz = bz.atlas && Hz > 0 ? {
        count: Hz,
        layers: bz.atlas.layers,
        width: bz.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: zz.material.slots.has("uAnimDataPerTex") ? (uz, bz) => JE(uz, bz, function(zz) {
          const uz = zz.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            sd: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: zz => `uniforms.uAnimDataPerTex[${zz}]${uz}`
          }
        }(zz)) : null
      } : null, pz = "placed" === lz ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", dz = null !== Oz && void 0 !== Oz ? Oz : Xl(bz), Fz = function(zz, bz) {
        let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Ju.A)()}${Ub(uz,bz)}${Ez}${Wb(zz)}${Pb}${pz}${uz.code}`
      };
      let {
        vertex: Zz,
        fragment: Rz
      } = zz;
      const Kz = jb(nz, tz);
      if (Kz) {
        const zz = tl(uz, bz, "vertex") ? `\tbloxdSpCell = ${Ml};\n` : "";
        Zz = vl(Zz, ki, `${zz}${Kz.slice(1)}${ki}`, "vertex")
      }
      const wz = `${cb(uz,iz,function(zz,uz){return uz.TWOSIDEDLIGHTING?zz:`select(-(${zz}), ${zz}, fragmentInputs.frontFacing)`}(tz.normal,Mz),tz.flags)}${Ib(nz,uz.strict,uz.program,dz,tz)}`;
      wz && (Rz = vl(Rz, zl, `${wz.slice(1)}${zl}`, "surface")), iz && uz.sunShadow && !Mz.TWOSIDEDLIGHTING && (Rz = vl(Rz, xl, `${xl}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Xz = Yb(nz);
      if (Xz) {
        const zz = Cb(nz, rl(Mz), !0, tz);
        Rz = vl(Rz, ul, `${zz}${Xz.slice(1)}${ul}`, "light")
      }
      const fz = fl(uz, bz) ? yb : "";
      return {
        ...zz,
        vertex: Jl(Zz, Fz(Oz, !1, fz)),
        fragment: Jl(Rz, Fz(dz, iz))
      }
    }
    const Tl = {
      name: "earthSky",
      uniqueId: -1
    };
    class Ll {
      constructor(zz) {
        this.resources = zz, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const zz of this.instances.values()) zz.released = !0, this.resources.destroyBuffer(zz.buffer);
        this.instances.clear()
      }
    }

    function Pl(zz) {
      return zz.failed && null !== zz.packGroup
    }
    class Gl {
      constructor(zz, uz, bz) {
        this.device = zz, this.resources = uz, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Dk = new Gi, this.modelMeshes = new Pi, this.thinBundle = void 0, this.binder = new Cn, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new fi((zz => this.modelSlot(zz).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Hu.b)("Lite: "), this.renderStates = new Zi(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (zz, uz) => this.keepSteady(zz, uz), this.lists = new Yn(this.modelMeshes, this.Dk, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Hi(uz, this.warnOnce, ((zz, uz, bz) => this.programWithModel(zz, uz, bz)), Pl), this.vertexLayouts = new Ni(uz, zz.limits, this.warnOnce), this.sceneLayout = uu(zz), this.frameLayout = zz.createBindGroupLayout({
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
        }), this.meshSlots = new Ji(zz, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = zz.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new mi(zz, new Ji(zz, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (zz, uz, bz) => this.pipelineFor(zz, uz, bz),
          pipelineCompiling: (zz, uz) => !zz.program.failed && !1 !== this.pipelines.get(`${zz.pipelineKey}|${uz}`),
          sceneGroup: zz => {
            const uz = bz(zz);
            return uz || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), uz
          }
        }), uz.onDestroy = zz => {
          this.thinBundle.resourceDestroyed(zz)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const nz = {
          order: zz,
          isTransparent: uz,
          _direct: !uz,
          bind: (zz, uz) => this.createBinding(nz, uz, bz, Ez)
        };
        return nz
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(zz, uz, bz) {
        var Ez;
        let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = uz, this.drawDefines.view = uz, this.thinBundle.ZN(), this.writeFrameUniforms();
        const iz = null !== (Ez = null === nz || void 0 === nz ? void 0 : nz.defineFor("model")) && void 0 !== Ez ? Ez : 0;
        this.drawDefines.modelPackVariant = iz, nz && 0 !== iz && (this.packInputs ??= new ei(this.device, nz.textureLayers(), this.sunShadow), this.packInputs.write(nz, uz.eye, nz.EK())), this.lists.clear(), this.slotCount = 0;
        const lz = zz.activeCamera;
        this.Dk.select(lz, this.keepSteadyBase), this.modelMeshes.select(lz, uz), bz && this.pushEarthSky(bz), this.lists.collect(zz), this.thinBundle.XN(), this.uploadMeshSlots()
      }
      pushDraws(zz, uz, bz, Ez, nz, iz) {
        let lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Mz = iz.length;
        for (let tz = 0; tz < bz; tz++) {
          const bz = uz[tz];
          let Mz = this.retainedDraw(zz, bz, Ez, nz);
          if (void 0 === Mz && (Mz = this.drawFor(zz, bz, Ez, nz), this.retain(bz, Mz)), Mz) {
            const zz = bz.owner,
              uz = lz ? lz[tz] : -1;
            Mz.slotOffset = uz < 0 ? this.writeMeshSlot(zz.getWorldMatrix().m, zz.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[uz], 16 * uz), iz.push(Mz)
          }
        }
        return iz.length - Mz
      }
      bundleDraws(zz, uz, bz) {
        let Ez = 0;
        for (const nz of uz) {
          let uz = this.retainedDraw(zz, nz, bz, !1);
          const iz = void 0 !== uz;
          if (void 0 === uz && (uz = this.drawFor(zz, nz, bz, !1), this.retain(nz, uz)), uz) {
            const zz = nz.owner,
              bz = this.thinBundle.add(nz, uz, zz.getWorldMatrix().m, zz.visibility);
            iz && this.steadyFrom(nz, uz, bz), Ez++
          }
        }
        return Ez
      }
      steadyFrom(zz, uz, bz) {
        const Ez = zz.owner,
          nz = this.Dk.base(Ez),
          iz = Ez.material,
          {
            drawState: lz,
            instance: Mz
          } = uz.inputs.retained;
        if (!nz || !iz || 1 !== zz.parts.materials.length || Ti(zz) !== iz) return;
        const tz = nz.steady ??= {
          unit: zz,
          material: iz,
          visibility: 1,
          draw: uz,
          record: bz,
          drawState: lz,
          instance: Mz,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        tz.unit = zz, tz.material = iz, tz.visibility = Ez.visibility, tz.draw = uz, tz.record = bz, tz.drawState = lz, tz.instance = Mz, tz.bindGroup = Mz.bindGroup, tz.gpuVersion = this.resources.gpuBuffersVersion, tz.fitInstances = uz.inputs.fitInstances, tz.worldFlag = Ez.getWorldMatrix().updateFlag, tz.handedFrame = this.frame
      }
      keepSteady(zz, uz) {
        const bz = zz.steady;
        if (bz.handedFrame !== this.frame - 1 || (this.frame + bz.phase) % 8 === 0) return !1;
        const Ez = zz.mesh,
          {
            unit: nz,
            draw: iz,
            instance: lz,
            drawState: Mz
          } = bz,
          tz = Ez.forcedInstanceCount || Ez.W8;
        if (!Ez.isVisible || Ez.KEz || Ez.visibility !== bz.visibility || 0 === (Ez.layerMask & uz.layerMask) || Ez.material !== bz.material || 0 !== Ez.renderingGroupId || Ez.hasVertexAlpha || !this.drawDefines.definesHold(Mz, nz, Mz.instancing) || bz.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(iz.inputs, nz, Mz.instancing, iz.program) || iz.program.failed || lz.released || tz <= 0 || tz > bz.fitInstances) return !1;
        if (lz.frame !== this.frame && this.bindMaterial(lz, this.modelUniforms.refreshModelUniforms(Ez.XT(), lz, lz.model, this.view)), !lz.bindable || lz.bindGroup !== bz.bindGroup) return !1;
        const Hz = Ez.computeWorldMatrix(),
          Oz = Hz.updateFlag !== bz.worldFlag;
        return bz.worldFlag = Hz.updateFlag, iz.instances = tz, this.thinBundle.addAgain(bz.record, iz, Oz ? Hz.m : null, bz.visibility), bz.handedFrame = this.frame, this.Dk.drawn++, !0
      }
      retainedDraw(zz, uz, bz, Ez) {
        const nz = this.inputs.get(uz),
          iz = null === nz || void 0 === nz ? void 0 : nz.retained;
        if (!nz || !iz) return;
        const {
          drawState: lz,
          program: Mz,
          instance: tz,
          instancing: Hz
        } = iz, Oz = uz.owner;
        if (Ei(Oz) !== Hz) return;
        const pz = this.instanceCount(Oz, Hz);
        if (pz <= 0) return null;
        if (tz.released || Mz.failed || lz.program !== Mz || !this.drawDefines.programCurrent(lz, uz, Hz, bz) || !this.inputsStamped(nz, uz, Hz, Mz) || Oz.isUnIndexed !== iz.unIndexed || this.indexKey(uz) !== iz.indexData) return;
        if (iz.indexBuffer && iz.gpuVersion !== this.resources.gpuBuffersVersion) {
          const zz = this.resources.gpuBuffer(iz.indexData);
          if (!zz) return;
          iz.indexBuffer = zz, iz.gpuVersion = this.resources.gpuBuffersVersion
        }
        let dz = !1;
        if (tz.frame !== this.frame && (dz = this.modelUniforms.refreshModelUniforms(zz, tz, tz.model, this.view)), !this.bindMaterial(tz, dz) || !this.withGpuBuffers(nz) || !this.instanceBuffersFit(Oz.name, nz, pz)) return null;
        const Fz = this.makeDraw(Mz, nz, this.renderStates.renderState(lz.model, Oz, Ez, nz.state), tz, pz);
        return this.setRange(Fz, uz, iz.indexBuffer, iz.indexData), Fz
      }
      retain(zz, uz) {
        const bz = this.drawDefines.drawStates.get(zz);
        if (!uz || !bz || bz.program !== uz.program) {
          const uz = this.inputs.get(zz);
          return void(uz && (uz.retained = null))
        }
        const Ez = zz.owner,
          nz = bz.instancing,
          iz = this.indexKey(zz),
          lz = uz.inputs.retained;
        lz ? (lz.drawState = bz, lz.instancing = nz, lz.program = uz.program, lz.instance = uz.material, lz.indexData = iz, lz.unIndexed = Ez.isUnIndexed, lz.indexBuffer = uz.indexBuffer, lz.gpuVersion = this.resources.gpuBuffersVersion) : uz.inputs.retained = {
          drawState: bz,
          instancing: nz,
          program: uz.program,
          instance: uz.material,
          indexData: iz,
          unIndexed: Ez.isUnIndexed,
          indexBuffer: uz.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(zz, uz, bz, Ez) {
        const nz = uz.owner,
          iz = Ti(uz);
        if (!iz) return null;
        const lz = iz.getClassName();
        let Mz = null;
        if (function(zz) {
            return "LinesMesh" === zz.getClassName()
          }(nz)) {
          if (! function(zz) {
              return "ShaderMaterial" === zz.getClassName() && "color" === zz.shaderPath
            }(iz)) return this.warnOnce(`lines:${lz}`, `A LinesMesh with a ${lz} is not drawn yet (${iz.name})`), null;
          Mz = nz
        } else if ("StandardMaterial" !== lz && "LiteMaterial" !== lz) return this.warnOnce(`class:${lz}`, `${lz} is not drawn yet (${iz.name})`), null;
        const tz = Ei(nz),
          Hz = this.instanceCount(nz, tz);
        if (Hz <= 0) return null;
        const Oz = Mz ? this.lineProgramFor(nz, bz, tz) : this.drawDefines.programFor(zz, uz, iz, bz, tz);
        if (!Oz || Oz.failed) return null;
        const pz = Mz ? null : this.drawDefines.drawStates.get(uz).model,
          dz = pz ? this.modelInstance(pz, Oz) : this.materialInstance(nz, Oz);
        let Fz = !1;
        if (dz.frame !== this.frame && (Mz ? Xz(dz.ubo, Mz) : Fz = this.modelUniforms.refreshModelUniforms(zz, dz, dz.model, this.view)), !this.bindMaterial(dz, Fz)) return null;
        const Zz = this.meshInputs(uz, Oz, tz);
        if (!Zz || !this.instanceBuffersFit(nz.name, Zz, Hz)) return null;
        const Rz = this.indexKey(uz);
        let Kz = null;
        if (Rz && !nz.isUnIndexed && (Kz = this.resources.gpuBuffer(Rz), !Kz)) return null;
        const wz = this.renderStates.renderState(null !== pz && void 0 !== pz ? pz : iz, nz, Ez, Zz.state, Mz ? "line-list" : "triangle-list"),
          fz = this.makeDraw(Oz, Zz, wz, dz, Hz);
        return this.setRange(fz, uz, Kz, Rz), fz
      }
      indexKey(zz) {
        const uz = Mi(zz);
        return uz ? this.resources.modelIndex(uz) : null
      }
      setRange(zz, uz, bz, Ez) {
        bz && (zz.indexBuffer = bz, zz.indexFormat = this.resources.indexFormat(Ez));
        const nz = 4 * uz.range + (bz ? 0 : 2);
        zz.unit = uz, zz.first = uz.parts.al[nz], zz.count = uz.parts.al[nz + 1]
      }
      makeDraw(zz, uz, bz, Ez, nz) {
        uz.state !== bz && (uz.state = bz, uz.pipelineKey = `${zz.id}|${uz.layout.key}|${bz.key}`, uz.pipeline = null);
        const iz = uz.draw ??= {
          program: zz,
          inputs: uz,
          pipelineKey: "",
          layout: uz.layout,
          state: bz,
          material: Ez,
          slotOffset: 0,
          vertexBuffers: uz.buffers,
          vertexOffsets: uz.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: nz,
          unit: null
        };
        return iz.program = zz, iz.pipelineKey = uz.pipelineKey, iz.state = bz, iz.material = Ez, iz.vertexOffsets = uz.offsets, iz.indexBuffer = null, iz.instances = nz, iz
      }
      instanceCount(zz, uz) {
        switch (uz) {
          case "thin":
            return zz.forcedInstanceCount || zz.W8;
          case "instanced":
            return this.prepareInstances(zz);
          case "none":
            return 1
        }
      }
      prepareInstances(zz) {
        const uz = function(zz, uz) {
          const bz = uz._userInstancedBuffersStorage,
            Ez = zz.batchUploads.get(uz);
          if (Ez) {
            var nz;
            if (Ez.layout === (null !== (nz = null === bz || void 0 === bz ? void 0 : bz.interleavedKinds) && void 0 !== nz ? nz : null)) return Ez;
            Ez.release()
          }
          return new Wz(zz, uz, bz)
        }(this.resources, zz);
        return uz.frame !== this.frame && uz.pack(zz, this.modelMeshes.instanceBatch(zz), this.modelMeshes.worlds, this.frame), uz.count
      }
      programWithModel(zz, uz, bz) {
        const Ez = this.modelSlot(zz),
          nz = Oi(Ez, zz, bz),
          iz = this.drawDefines.modelPackKind(zz),
          lz = iz ? function(zz, uz, bz, Ez) {
            const nz = (0, xz.u)(zz, Nz.j.name),
              iz = [];
            for (const {
                feature: tz,
                state: Hz,
                active: Oz
              }
              of zz.features) {
              var lz, Mz;
              const zz = Oz ? null === (lz = (Mz = (0, Ou.j)(tz)).JZ) || void 0 === lz ? void 0 : lz.call(Mz, Hz) : void 0;
              zz && iz.push(zz)
            }
            return {
              kind: uz,
              atlas: null !== nz && void 0 !== nz && nz.active ? (0, Nz.e)(nz.state) : null,
              defines: bz,
              ...Ol(iz, Ez)
            }
          }(zz, iz, uz, Ez.fragmentCode) : null;
        if (lz && function(zz) {
            const uz = zz.defines;
            return (null === zz.atlas || !!uz.DIFFUSE && 1 === uz.DIFFUSEDIRECTUV) && !!uz.NORMAL && !uz.REFLECTION && !uz.EMISSIVEASILLUMINATION && !uz.LINKEMISSIVEWITHDIFFUSE
          }(lz)) {
          const bz = this.modelPackProgram(zz, uz, `${nz}#${iz}#sp${this.drawDefines.modelPackVariant}`, Ez, lz);
          if (bz && !bz.failed) return bz
        }
        const Mz = this.programs.get(nz);
        if (Mz || this.unbuildable.has(nz)) return null !== Mz && void 0 !== Mz ? Mz : null;
        let tz;
        try {
          tz = Hn({
            defines: ii(uz),
            vertexCode: Ez.vertexCode,
            fragmentCode: Ez.fragmentCode,
            pluginUniforms: Ez.pluginUniforms
          })
        } catch (Hz) {
          return this.unbuildable.add(nz), this.warnOnce(`build:${nz}`, `could not build a program for ${zz.name}: ${String(Hz)}`), null
        }
        return this.createProgram(nz, tz, "standard")
      }
      modelPackProgram(zz, uz, bz, Ez, nz) {
        const iz = this.programs.get(bz);
        if (iz || this.unbuildable.has(bz)) return null !== iz && void 0 !== iz ? iz : null;
        const lz = this.drawDefines.modelPackVariant;
        let Mz;
        try {
          const zz = function(zz) {
              return (0, Au.b)(zz, "model")
            }(lz),
            bz = Nl(zz, nz, Ez.vertexCode, Ez.fragmentCode);
          Mz = Al(Hn({
            defines: ii(uz),
            ...bz,
            pluginUniforms: Ez.pluginUniforms
          }), zz, nz, !!this.sunShadow)
        } catch (Oz) {
          return this.unbuildable.add(bz), this.warnOnce(`build:${bz}`, `could not build a shader pack program for ${zz.name}, which draws without the pack: ${String(Oz)}`), null
        }
        const tz = Qi(lz, !!this.sunShadow),
          Hz = {
            group: this.packInputs.bindGroupFor(null, tz),
            layout: yi(this.device, {
              depth: !1,
              sunShadow: tz
            })
          };
        return this.createProgram(bz, Mz, function(zz) {
          return `standard-sp${zz}`
        }(lz), Hz)
      }
      lineProgramFor(zz, uz, bz) {
        const Ez = wz(zz, bz, uz, this.view);
        let nz = this.linePrograms.get(Ez);
        var iz;
        return nz || (nz = this.createProgram(`lines#${Ez}`, (iz = function(zz) {
          const uz = new Map;
          for (let bz = 0; bz < Hz.length; bz++) zz & 1 << bz && uz.set(Hz[bz], !0);
          return uz
        }(Ez), Fn({
          defines: iz,
          vertex: pn,
          fragment: dn,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Ez, nz)), nz
      }
      createProgram(zz, uz, bz) {
        var Ez;
        let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const iz = this.nextProgramId++,
          lz = `${bz}-${iz}`,
          Mz = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          tz = [{
            binding: 0,
            visibility: Mz,
            buffer: {
              type: "uniform"
            }
          }];
        for (const pz of uz.textures) tz.push({
          binding: pz.binding,
          visibility: Mz,
          texture: {
            viewDimension: pz.dimension
          }
        }), tz.push({
          binding: pz.samplerBinding,
          visibility: Mz,
          sampler: {}
        });
        const Hz = this.device.createBindGroupLayout({
            label: lz,
            entries: tz
          }),
          Oz = {
            key: zz,
            id: iz,
            kind: bz,
            program: uz,
            vertex: this.device.createShaderModule({
              label: `${lz}-vertex`,
              code: uz.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${lz}-fragment`,
              code: uz.fragment
            }),
            materialLayout: Hz,
            pipelineLayout: this.device.createPipelineLayout({
              label: lz,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Hz, ...nz ? [nz.layout] : []]
            }),
            packGroup: null !== (Ez = null === nz || void 0 === nz ? void 0 : nz.group) && void 0 !== Ez ? Ez : null,
            failed: !1
          };
        return this.programs.set(zz, Oz), Oz
      }
      writeFrameUniforms() {
        const zz = this.frameUniforms;
        Xi(this.view, zz), this.device.queue.writeBuffer(this.frameBuffer, 0, zz)
      }
      materialInstance(zz, uz) {
        let bz = this.materials.get(zz);
        if (!bz) {
          const uz = new Map;
          this.materials.set(zz, uz), zz.aT.addOnce((() => {
            for (const zz of uz.values()) zz.released = !0, this.resources.destroyBuffer(zz.buffer);
            this.materials.delete(zz)
          })), bz = uz
        }
        let Ez = bz.get(uz.key);
        return Ez || (Ez = this.newMaterialInstance(zz, null, uz), bz.set(uz.key, Ez)), Ez
      }
      modelInstance(zz, uz) {
        const bz = this.modelSlot(zz);
        let Ez = bz.instances.get(uz.key);
        return Ez || (Ez = this.newMaterialInstance(zz, zz, uz), bz.instances.set(uz.key, Ez)), Ez
      }
      modelSlot(zz) {
        let uz = zz.gpu[Az.c.lite];
        return uz || (uz = new Ll(this.resources), zz.gpu[Az.c.lite] = uz), uz
      }
      newMaterialInstance(zz, uz, bz) {
        const Ez = bz.program.material.floats,
          nz = new Float32Array(Ez),
          iz = new Map;
        return {
          owner: zz,
          model: uz,
          program: bz,
          data: nz,
          uploaded: new Float32Array(Ez).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${zz.name}-uniforms`,
            size: Math.max(16, 4 * Ez),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: iz,
          ubo: new wi(bz.program.material.slots, nz, iz),
          bindGroup: null,
          bound: new Array(2 * bz.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(zz) {
        var uz;
        const bz = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Xn + fn,
            fragment: Xn + sn,
            attributes: [],
            material: wn,
            textures: []
          }, "earthSky"),
          Ez = this.earthSkyUniforms ??= this.newMaterialInstance(Tl, null, bz);
        this.earthSkyFrom !== zz && (this.earthSkyFrom = zz, Ez.data.fill(0)), Ln(Ez.ubo, zz, this.view);
        const nz = this.vertexInputs(bz, Tl, "earthSky", bz, null);
        if (bz.failed || !nz || !this.bindMaterial(Ez, !1)) return;
        const iz = null !== (uz = nz.state) && void 0 !== uz ? uz : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          lz = this.makeDraw(bz, nz, iz, Ez, 1);
        lz.count = Zn.length;
        const Mz = Pn(zz, this.view);
        lz.slotOffset = this.writeMeshSlot(Mz, 1), this.lists.skyDraws.push(lz)
      }
      uploadIfChanged(zz) {
        const {
          data: uz,
          uploaded: bz
        } = zz;
        for (let Ez = 0; Ez < uz.length; Ez++)
          if (uz[Ez] !== bz[Ez]) return bz.set(uz), void this.device.queue.writeBuffer(zz.buffer, 0, uz)
      }
      bindMaterial(zz, uz) {
        return zz.frame !== this.frame && (zz.frame = this.frame, uz || this.uploadIfChanged(zz), zz.bindable = this.bindTextures(zz)), zz.bindable
      }
      bindTextures(zz) {
        const {
          program: uz,
          bound: bz
        } = zz, Ez = uz.program.textures;
        let nz = !zz.bindGroup,
          iz = !0;
        for (let lz = 0; lz < Ez.length; lz++) {
          const uz = zz.textures.get(Ez[lz].name),
            Mz = uz ? this.resources.boundTexture(uz) : null;
          Mz ? bz[2 * lz] === Mz.view && bz[2 * lz + 1] === Mz.sampler || (bz[2 * lz] = Mz.view, bz[2 * lz + 1] = Mz.sampler, nz = !0) : (uz || zz.ubo.expected.has(Ez[lz].name) || this.warnOnce(`texture:${zz.owner.name}:${Ez[lz].name}`, `${zz.owner.name} has no ${Ez[lz].name}`), iz = !1)
        }
        if (!iz) return nz && (zz.bindGroup = null), !1;
        if (nz) {
          const nz = [{
            binding: 0,
            resource: {
              buffer: zz.buffer
            }
          }];
          for (let zz = 0; zz < Ez.length; zz++) nz.push({
            binding: Ez[zz].binding,
            resource: bz[2 * zz]
          }), nz.push({
            binding: Ez[zz].samplerBinding,
            resource: bz[2 * zz + 1]
          });
          zz.bindGroup = this.device.createBindGroup({
            label: `${zz.owner.name}-material`,
            layout: uz.materialLayout,
            entries: nz
          })
        }
        return !0
      }
      writeMeshSlot(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, zz, uz, bz), this.slotCount++ * gE
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(zz, uz, bz, Ez, nz) {
        let iz = this.inputs.get(zz);
        if (!iz || iz.program !== Ez || !vi(uz, iz, this.resources, nz)) {
          var lz;
          if (iz = null !== (lz = this.vertexLayouts.resolveInputs(uz, bz, Ez, nz)) && void 0 !== lz ? lz : void 0, !iz) return null;
          this.inputs.set(zz, iz)
        }
        return this.withGpuBuffers(iz)
      }
      meshInputs(zz, uz, bz) {
        const Ez = this.inputs.get(zz);
        if (Ez && this.inputsStamped(Ez, zz, bz, uz)) return this.withGpuBuffers(Ez);
        const nz = zz.owner,
          iz = Mi(zz),
          lz = this.vertexInputs(zz, nz, nz.name, uz, iz);
        return lz && (lz.geometry = ti(zz), lz.instanceLayout = this.drawDefines.instanceLayout(nz, bz)), lz
      }
      inputsStamped(zz, uz, bz, Ez) {
        return function(zz, uz, bz, Ez) {
          return zz.program === bz && zz.geometry === ti(uz) && zz.instanceLayout === Ez
        }(zz, uz, Ez, this.drawDefines.instanceLayout(uz.owner, bz))
      }
      withGpuBuffers(zz) {
        return ji(zz, this.resources, this.zeroBuffer) ? zz : null
      }
      instanceBuffersFit(zz, uz, bz) {
        const Ez = Bi(uz, bz, this.resources, this.zeroBuffer);
        if (Ez) {
          const nz = uz.ends[Ez.index] - uz.offsets[Ez.index] + uz.Z8[Ez.index];
          return this.warnOnce(`overrun:${zz}`, `${zz} draws ${bz} instances from a ${nz}-byte buffer (${Ez.needed} needed)`), !1
        }
        return !0
      }
      createBinding(zz, uz, bz, Ez) {
        const nz = `${uz._colorFormat}|${uz._depthStencilFormat}|${uz._depthCompare}|${uz._sampleCount}`,
          iz = lu(this.device, uz);
        if (zz === this.skyLastRenderable) {
          let bz = null;
          return {
            renderable: zz,
            pipeline: iz,
            draw: zz => bz ? this.drawSky(zz, uz, nz, bz) : 0,
            update: zz => {
              bz = zz
            }
          }
        }
        return {
          renderable: zz,
          pipeline: iz,
          draw: zz => (Ez ? Ez.execute(zz, uz, nz) : 0) + this.drawList(zz, uz, nz, bz)
        }
      }
      drawSky(zz, uz, bz, Ez) {
        const nz = this.lists.skyDraws,
          iz = nz.length > 0;
        if (iz) {
          var lz;
          const bz = (null !== (lz = uz._depthCompare) && void 0 !== lz ? lz : bu).startsWith("greater") ? 0 : 1;
          zz.setViewport(0, 0, Ez.targetWidth, Ez.targetHeight, bz, bz)
        }
        const Mz = this.drawList(zz, uz, bz, nz);
        return iz && zz.setViewport(0, 0, Ez.targetWidth, Ez.targetHeight, 0, 1), Mz
      }
      drawList(zz, uz, bz, Ez) {
        let nz = 0;
        const iz = this.binder;
        iz.reset();
        for (const lz of Ez) {
          const Ez = this.pipelineFor(lz, uz, bz);
          Ez && (iz.bind(zz, lz, Ez, this.meshSlots.bindGroup, lz.slotOffset), lz.indexBuffer ? zz.drawIndexed(lz.count, lz.instances, lz.first, 0, 0) : zz.draw(lz.count, lz.instances, lz.first, 0), nz++)
        }
        return nz
      }
      pipelineFor(zz, uz, bz) {
        var Ez, nz;
        if (zz.program.failed) return null;
        const iz = zz.inputs;
        if (iz.pipeline && iz.pipelineTarget === bz) return iz.pipeline;
        const lz = `${zz.pipelineKey}|${bz}`,
          Mz = this.pipelines.get(lz);
        if (void 0 !== Mz) return Mz && (iz.pipeline = Mz, iz.pipelineTarget = bz), Mz || null;
        this.pipelines.set(lz, null);
        const {
          program: tz,
          layout: Hz,
          state: Oz
        } = zz, pz = {
          label: `standard-${tz.id}`,
          layout: tz.pipelineLayout,
          vertex: {
            module: tz.vertex,
            entryPoint: "main",
            buffers: Hz.buffers
          },
          fragment: Cz({
            module: tz.fragment,
            entryPoint: "main"
          }, uz, Oz.blend, Oz.colourWrite),
          depthStencil: uz._depthStencilFormat ? {
            format: uz._depthStencilFormat,
            depthCompare: null !== (Ez = null !== (nz = Oz.depthCompare) && void 0 !== nz ? nz : uz._depthCompare) && void 0 !== Ez ? Ez : bu,
            depthWriteEnabled: Oz.depthWrite,
            depthBias: Oz.depthBias,
            depthBiasSlopeScale: Oz.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: uz._sampleCount
          },
          primitive: {
            topology: Oz.topology,
            frontFace: Oz.frontFace,
            cullMode: Oz.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(pz).then((zz => {
          this.compiling--, this.pipelines.set(lz, zz)
        }), (zz => {
          this.compiling--, this.reportFailure(tz, lz, zz)
        })), null
      }
      forEachSunShadowCaster(zz) {
        const uz = this.caster,
          bz = (bz, Ez, nz) => {
            const iz = bz.unit && function(zz) {
              const uz = zz.material.model;
              return null !== uz && (uz.lifeform || uz.item) && uz.castsSunShadow && "triangle-list" === zz.state.topology
            }(bz) ? Mi(bz.unit) : null;
            if (!iz) return;
            const lz = bz.unit.owner;
            switch (uz.geometry = iz, uz.skip = lz.noSunShadowVertices, uz.indexed = null !== bz.indexBuffer, uz.first = bz.first, uz.count = bz.count, uz.xd = Ez, uz.worldAt = nz, uz.instances = null, uz.instanceCount = 1, uz.thin = !1, Ei(lz)) {
              case "thin": {
                const zz = lz._thinInstanceDataStorage.matrixData;
                if (!zz) return;
                uz.instances = zz, uz.instanceCount = Math.min(bz.instances, zz.length / 16), uz.thin = !0;
                break
              }
              case "instanced": {
                const zz = this.resources.batchUploads.get(lz);
                if (!zz || zz.frame !== this.frame || !this.writeBatchCasters(zz)) return;
                break
              }
            }
            zz(uz)
          };
        for (const Ez of this.lists.opaqueDraws) bz(Ez, this.meshSlots.data, Ez.slotOffset / 4);
        this.thinBundle.forEachDrawn(bz)
      }
      writeBatchCasters(zz) {
        const {
          caster: uz
        } = this, bz = zz.packedMatrices, Ez = zz.count;
        uz.instances = bz, uz.instanceCount = Ez;
        let nz = -1;
        for (let iz = 0; iz < Ez; iz++) {
          const uz = al(zz.packedRowMesh(iz));
          uz && nz < 0 ? (this.casterWorlds.length < 16 * Ez && (this.casterWorlds = new Float32Array(bz.length)), this.casterWorlds.set(bz.subarray(0, 16 * iz)), nz = iz) : !uz && nz >= 0 && (this.casterWorlds.set(bz.subarray(16 * iz, 16 * iz + 16), 16 * nz), nz++)
        }
        return nz >= 0 && (uz.instances = this.casterWorlds, uz.instanceCount = nz), uz.instanceCount > 0
      }
      async reportFailure(zz, uz, bz) {
        const Ez = [];
        let nz = !0;
        for (const [iz, lz] of [
            ["vertex", zz.vertex],
            ["fragment", zz.fragment]
          ]) {
          const zz = await lz.getCompilationInfo();
          for (const uz of zz.messages) nz &&= "error" !== uz.type, Ez.push(`${iz}:${uz.lineNum}:${uz.linePos} ${uz.type}: ${uz.message}`)
        }
        if (nz && !zz.packGroup) return this.pipelines.set(uz, !1), console.error(`Lite: pipeline ${uz} failed`, bz), void Bn("mesh", zz.kind, bz);
        zz.failed || (zz.failed = !0, console.error(`Lite: program ${zz.id} failed`, bz, Ez.join("\n"), {
          program: zz.program,
          key: zz.key
        }), Bn("mesh", zz.kind, bz, nz ? null : Ez[0]))
      }
    }

    function al(zz) {
      var uz, bz;
      const Ez = null === (uz = zz.RP) || void 0 === uz || null === (bz = uz.aShaderPackItem) || void 0 === bz ? void 0 : bz.x;
      return void 0 !== Ez && 0 !== (Ez & tu.i)
    }
    var Vl = bz(40906),
      ml = bz(40911),
      ql = bz(40915),
      hl = bz(40866);
    const Ul = [0, 3, 1, 4, 2, 5];

    function cl(zz, uz, bz, Ez, nz) {
      const iz = bz[0].width;
      try {
        return nz ? function(zz, uz, bz) {
          const Ez = (0, hl.d)(zz, bz, bz, 6);
          for (let nz = 0; nz < 6; nz++)(0, hl.f)(zz, Ez, nz, uz[Ul[nz]], {
            invertY: !1
          });
          return Ez.texture
        }(zz, bz, iz) : function(zz, uz, bz, Ez) {
          const nz = zz.createTexture({
            label: "sink-cube",
            size: {
              width: bz,
              height: bz,
              depthOrArrayLayers: 6
            },
            format: Ez,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let iz = 0; iz < 6; iz++) zz.queue.copyExternalImageToTexture({
            source: uz[Ul[iz]]
          }, {
            texture: nz,
            origin: {
              x: 0,
              y: 0,
              z: iz
            }
          }, {
            width: bz,
            height: bz
          });
          return nz
        }(uz, bz, iz, 1 === Ez ? "r8unorm" : "rgba8unorm")
      } finally {
        gl(bz)
      }
    }

    function gl(zz) {
      for (const uz of null !== zz && void 0 !== zz ? zz : []) null === uz || void 0 === uz || uz.close()
    }
    async function Sl(zz) {
      const uz = [],
        bz = [];
      if (await Promise.all(zz.map(((zz, Ez) => (uz[Ez] = null, zz.then((zz => {
          uz[Ez] = zz
        }), (zz => {
          bz.push(zz)
        })))))), bz.length > 0) throw gl(uz), bz[0];
      return uz
    }
    class yl {
      constructor(zz) {
        this.Bp = zz, this.starts = [], this.lengths = [], this.used = 0, zz > 0 && (this.starts.push(0), this.lengths.push(zz))
      }
      allocate(zz) {
        const {
          starts: uz,
          lengths: bz
        } = this;
        for (let Ez = 0; Ez < uz.length; Ez++) {
          if (bz[Ez] < zz) continue;
          const nz = uz[Ez];
          return bz[Ez] === zz ? (uz.splice(Ez, 1), bz.splice(Ez, 1)) : (uz[Ez] += zz, bz[Ez] -= zz), this.used += zz, nz
        }
        return -1
      }
      free(zz, uz) {
        this.used -= uz;
        const bz = Math.min(zz + uz, this.Bp);
        bz > zz && this.release(zz, bz - zz)
      }
      grow(zz) {
        const uz = this.Bp;
        this.Bp = zz, this.release(uz, zz - uz)
      }
      truncate(zz) {
        const {
          starts: uz,
          lengths: bz
        } = this;
        for (let Ez = uz.length - 1; Ez >= 0 && uz[Ez] + bz[Ez] > zz; Ez--) uz[Ez] >= zz ? (uz.splice(Ez, 1), bz.splice(Ez, 1)) : bz[Ez] = zz - uz[Ez];
        this.Bp = zz
      }
      release(zz, uz) {
        const {
          starts: bz,
          lengths: Ez
        } = this;
        let nz = 0,
          iz = bz.length;
        for (; nz < iz;) {
          const uz = nz + iz >> 1;
          bz[uz] < zz ? nz = uz + 1 : iz = uz
        }
        const lz = nz,
          Mz = lz > 0 && bz[lz - 1] + Ez[lz - 1] === zz,
          tz = lz < bz.length && zz + uz === bz[lz];
        Mz && tz ? (Ez[lz - 1] += uz + Ez[lz], bz.splice(lz, 1), Ez.splice(lz, 1)) : Mz ? Ez[lz - 1] += uz : tz ? (bz[lz] = zz, Ez[lz] += uz) : (bz.splice(lz, 0, zz), Ez.splice(lz, 0, uz))
      }
    }
    const Dl = 256;
    class Ql {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = zz, this.onReplaced = uz, this.mergeGap = bz, this.gpu = null, this.bytes = void 0, this.al = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const nz = Math.max(Dl, Math.ceil(Ez / Dl) * Dl);
        this.bytes = new Uint8Array(nz), this.al = new yl(nz / Dl)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(zz) {
        return Math.max(1, Math.ceil(zz / Dl)) * Dl
      }
      allocate(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zz;
        const Ez = Ql.slotBytes(zz),
          nz = Ez / Dl;
        let iz = this.al.allocate(nz);
        iz < 0 && (this.grow(this.al.Bp + nz), iz = this.al.allocate(nz));
        const lz = iz * Dl;
        return this.growTo(lz + Math.max(bz, Ez)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, lz, lz + Ez), uz && this.bytes.set(new Uint8Array(uz.buffer, uz.byteOffset, Math.min(uz.byteLength, Ez)), lz), this.markDirty(lz, lz + Ez), lz
      }
      growTo(zz) {
        const uz = Math.ceil(zz / Dl);
        uz > this.al.Bp && this.grow(uz)
      }
      free(zz, uz) {
        this.freed.push(zz, uz)
      }
      write(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Ez <= 0) return;
        this.bytes.set(new Uint8Array(uz.buffer, bz, Ez), zz);
        let iz = zz + Ez;
        if (nz) {
          const uz = zz + 4 * Math.ceil(Ez / 4);
          this.bytes.fill(0, iz, uz), iz = uz
        }
        this.markDirty(zz, iz)
      }
      move(zz, uz, bz) {
        this.bytes.copyWithin(uz, zz, zz + bz), this.markDirty(uz, uz + bz)
      }
      flush() {
        for (const uz of this.retired) this.onReplaced(uz), uz.destroy();
        this.retired.length = 0;
        const zz = this.dirtyStarts.length;
        if (zz > 0) {
          const {
            dirtyStarts: uz,
            dirtyEnds: bz,
            order: Ez
          } = this;
          Ez.length = zz;
          for (let Mz = 0; Mz < zz; Mz++) Ez[Mz] = Mz;
          zz > 1 && Ez.sort(((zz, bz) => uz[zz] - uz[bz]));
          const nz = this.mergeGap;
          let iz = uz[Ez[0]],
            lz = bz[Ez[0]];
          for (let Mz = 1; Mz < zz; Mz++) {
            const zz = Ez[Mz];
            uz[zz] - lz <= nz ? lz = Math.max(lz, bz[zz]) : (this.send(iz, lz), iz = uz[zz], lz = bz[zz])
          }
          this.send(iz, lz), uz.length = 0, bz.length = 0
        }
        this.holding = !1
      }
      XN() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const zz = this.freed;
        for (let uz = 0; uz < zz.length; uz += 2) this.al.free(zz[uz] / Dl, zz[uz + 1] / Dl);
        zz.length = 0
      }
      send(zz, uz) {
        this.device.queue.writeBuffer(this.gpu, zz, this.bytes.buffer, zz, uz - zz);
        for (const bz of this.replaced) {
          const Ez = Math.min(uz, bz.size);
          Ez > zz && this.device.queue.writeBuffer(bz, zz, this.bytes.buffer, zz, Ez - zz)
        }
      }
      markDirty(zz, uz) {
        zz &= -4, uz = uz + 3 & -4, this.holding ? (this.dirtyStarts.push(zz), this.dirtyEnds.push(uz)) : this.send(zz, uz)
      }
      grow(zz) {
        const uz = this.al.Bp,
          bz = Math.max(2 * uz, zz),
          Ez = new Uint8Array(bz * Dl);
        Ez.set(this.bytes);
        const nz = this.gpu;
        this.gpu = this.createGpu(Ez.byteLength), this.bytes = Ez, this.al.grow(bz), nz && (this.replaced.push(nz), this.onReplaced(nz)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, uz * Dl)
      }
      createGpu(zz) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: zz,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Wl(zz) {
      return Array.isArray(zz) ? new Float32Array(zz) : zz
    }

    function el(zz, uz, bz, Ez, nz) {
      const iz = an(nz),
        lz = Math.min(nz, Ez.byteLength);
      if (iz === lz && Ez.byteOffset % 4 === 0) return void zz.queue.writeBuffer(uz, bz, Ez.buffer, Ez.byteOffset, iz);
      const Mz = new Uint8Array(iz);
      Mz.set(new Uint8Array(Ez.buffer, Ez.byteOffset, lz)), zz.queue.writeBuffer(uz, bz, Mz)
    }

    function jl(zz, uz, bz) {
      const Ez = "linear",
        nz = "nearest";
      let iz = nz,
        lz = nz,
        Mz = "nearest",
        tz = !uz;
      switch (zz) {
        case 11:
          iz = Ez, lz = Ez;
          break;
        case 3:
          iz = Ez, lz = Ez, Mz = uz ? "linear" : "nearest";
          break;
        case 8:
          Mz = uz ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          lz = Ez;
          break;
        case 6:
          lz = Ez, Mz = uz ? "linear" : "nearest";
          break;
        case 7:
          lz = Ez, tz = !0;
          break;
        case 9:
          iz = Ez;
          break;
        case 10:
          iz = Ez, Mz = uz ? "linear" : "nearest";
          break;
        case 2:
          iz = Ez, lz = Ez, bz > 1 ? (Mz = "linear", tz = !1) : tz = !0;
          break;
        case 12:
          iz = Ez, tz = !0;
          break;
        default:
          tz = !0
      }
      return bz > 1 && !tz ? {
        magFilter: Ez,
        minFilter: Ez,
        mipmapFilter: "linear",
        maxAnisotropy: bz
      } : {
        magFilter: iz,
        minFilter: lz,
        mipmapFilter: Mz,
        ...tz ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Il(zz) {
      return 0 === zz ? "clamp-to-edge" : 2 === zz ? "mirror-repeat" : "repeat"
    }
    class Bl {
      constructor(zz, uz) {
        let {
          vertexArena: bz = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = zz, this.device = uz, this.buffers = new WeakMap, this.fY = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = bz ? new Ql(uz, (zz => {
          var uz;
          null === (uz = this.onDestroy) || void 0 === uz || uz.call(this, zz), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var zz;
        null === (zz = this.arena) || void 0 === zz || zz.flush()
      }
      endUploadFrame() {
        var zz;
        null === (zz = this.arena) || void 0 === zz || zz.XN()
      }
      vertexBufferCreated(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bz ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(zz);
        const nz = Wl(uz);
        zz.Bp = nz.byteLength, this.buffers.set(zz, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: bz && null !== this.arena,
          pending: nz,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Ez
        })
      }
      vertexBufferUpdated(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        const nz = this.buffers.get(zz);
        if (!nz) return;
        const iz = Wl(uz),
          lz = void 0 === Ez ? iz.byteLength : Math.min(Ez, iz.byteLength);
        this.update(nz, iz, bz, lz)
      }
      vertexBufferFloatsUpdated(zz, uz, bz, Ez) {
        const nz = this.buffers.get(zz);
        if (!nz) return;
        const iz = bz * Float32Array.BYTES_PER_ELEMENT,
          lz = (Ez - bz) * Float32Array.BYTES_PER_ELEMENT;
        nz.slot >= 0 && lz > 0 && iz + lz <= nz.size ? this.writeSlot(nz, iz, uz, uz.byteOffset + iz, lz, !1) : nz.gpu && lz > 0 && iz + lz <= nz.gpu.size ? this.device.queue.writeBuffer(nz.gpu, iz, uz.buffer, uz.byteOffset + iz, lz) : this.update(nz, uz.subarray(bz, Ez), iz, lz)
      }
      indexBufferCreated(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(zz);
        const Ez = function(zz) {
          if (zz instanceof Uint16Array || zz instanceof Uint32Array) return zz;
          for (let uz = 0; uz < zz.length; uz++)
            if (zz[uz] >= 65535) return new Uint32Array(zz);
          return new Uint16Array(zz)
        }(uz);
        zz.is32Bits = 4 === Ez.BYTES_PER_ELEMENT, zz.Bp = Ez.byteLength, this.buffers.set(zz, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Ez,
          ownsPending: Ez !== uz,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: bz
        })
      }
      bufferDeleted(zz) {
        const uz = this.buffers.get(zz);
        null !== uz && void 0 !== uz && uz.gpu ? (this.destroyBuffer(uz.gpu), this.gpuBuffersVersion++) : uz && uz.slot >= 0 && (this.arena.free(uz.slot, uz.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(zz)
      }
      update(zz, uz, bz, Ez) {
        if (zz.slot >= 0) this.updateSlot(zz, uz, bz, Ez);
        else if (zz.gpu) {
          if (bz + an(Ez) > zz.gpu.size) {
            const uz = this.device.createBuffer({
                label: zz.label,
                size: an(Math.max(2 * zz.gpu.size, bz + Ez)),
                usage: zz.usage | GPUBufferUsage.COPY_SRC
              }),
              nz = this.device.createCommandEncoder();
            nz.copyBufferToBuffer(zz.gpu, 0, uz, 0, zz.gpu.size), this.device.queue.submit([nz.finish()]), this.destroyBuffer(zz.gpu), this.gpuBuffersVersion++, zz.gpu = uz
          }
          el(this.device, zz.gpu, bz, uz, Ez)
        } else {
          const iz = new Uint8Array(uz.buffer, uz.byteOffset, Ez),
            lz = zz.pending;
          if (lz && zz.ownsPending && bz + Ez <= lz.byteLength) new Uint8Array(lz.buffer, lz.byteOffset, lz.byteLength).set(iz, bz);
          else if (lz && 0 === bz && Ez === lz.byteLength && uz.byteLength === Ez) zz.pending = uz, zz.ownsPending = !1;
          else {
            var nz;
            const uz = new Uint8Array(Math.max(null !== (nz = null === lz || void 0 === lz ? void 0 : lz.byteLength) && void 0 !== nz ? nz : 0, bz + Ez));
            lz && uz.set(new Uint8Array(lz.buffer, lz.byteOffset, lz.byteLength)), uz.set(iz, bz), zz.pending = uz, zz.ownsPending = !0
          }
        }
      }
      updateSlot(zz, uz, bz, Ez) {
        const nz = this.arena;
        bz + an(Ez) > zz.size && (zz.size = an(Math.max(2 * zz.size, bz + Ez)), nz.growTo(zz.slot + zz.size), this.gpuBuffersVersion++), 0 === Ez ? this.writeSlot(zz, bz, Yl, 0, 4, !1) : this.writeSlot(zz, bz, uz, uz.byteOffset, Ez, !0)
      }
      writeSlot(zz, uz, bz, Ez, nz, iz) {
        const lz = uz + (iz ? an(nz) : nz);
        lz > zz.slotBytes && this.moveSlot(zz, lz), this.arena.write(zz.slot + uz, bz, Ez, nz, iz)
      }
      moveSlot(zz, uz) {
        const bz = this.arena,
          Ez = Ql.slotBytes(Math.max(uz, Math.min(2 * zz.slotBytes, zz.size))),
          nz = bz.allocate(Ez, null, zz.size);
        bz.move(zz.slot, nz, zz.slotBytes), bz.free(zz.slot, zz.slotBytes), zz.slot = nz, zz.slotBytes = Ez, this.gpuBuffersVersion++
      }
      cover(zz, uz) {
        const bz = this.buffers.get(zz);
        if (!bz || bz.slot < 0) return !1;
        const Ez = Math.min(uz, bz.size);
        return !(Ez <= bz.slotBytes) && (this.moveSlot(bz, Ez), !0)
      }
      destroyBuffer(zz) {
        var uz;
        null === (uz = this.onDestroy) || void 0 === uz || uz.call(this, zz), zz.destroy()
      }
      gpuBuffer(zz) {
        const uz = this.buffers.get(zz);
        if (!uz) return null;
        if (uz.slot >= 0) return this.arena.buffer;
        if (uz.arena && uz.pending) {
          const zz = uz.pending,
            bz = this.arena;
          return uz.size = an(zz.byteLength), uz.slotBytes = Ql.slotBytes(function(zz) {
            const uz = new Uint8Array(zz.buffer, zz.byteOffset, zz.byteLength);
            let bz = uz.length;
            if (zz.byteOffset % 4 === 0) {
              for (; bz % 4 !== 0 && 0 === uz[bz - 1];) bz--;
              if (bz % 4 === 0) {
                const uz = new Uint32Array(zz.buffer, zz.byteOffset, bz / 4);
                let Ez = uz.length;
                for (; Ez > 0 && 0 === uz[Ez - 1];) Ez--;
                bz = 4 * Ez
              }
            }
            for (; bz > 0 && 0 === uz[bz - 1];) bz--;
            return bz
          }(zz)), uz.slot = bz.allocate(uz.slotBytes, zz, uz.size), uz.pending = null, bz.buffer
        }
        if (!uz.gpu && uz.pending) {
          const zz = uz.pending;
          uz.gpu = this.device.createBuffer({
            label: uz.label,
            size: an(zz.byteLength),
            usage: uz.usage
          }), el(this.device, uz.gpu, 0, zz, zz.byteLength), uz.pending = null
        }
        return uz.gpu
      }
      gpuOffset(zz) {
        var uz, bz;
        const Ez = null !== (uz = null === (bz = this.buffers.get(zz)) || void 0 === bz ? void 0 : bz.slot) && void 0 !== uz ? uz : -1;
        return Ez < 0 ? 0 : Ez
      }
      gpuEnd(zz) {
        var uz, bz;
        const Ez = this.buffers.get(zz);
        return Ez ? Ez.slot >= 0 ? Ez.slot + Ez.size : null !== (uz = null === (bz = Ez.gpu) || void 0 === bz ? void 0 : bz.size) && void 0 !== uz ? uz : 0 : 0
      }
      vertexInput(zz, uz, bz) {
        var Ez, nz, iz, lz;
        return null !== (Ez = null !== (nz = bz && this.modelInput(bz, uz)) && void 0 !== nz ? nz : null === (iz = null !== (lz = this.fY.get(zz)) && void 0 !== lz ? lz : this.batchUploads.get(zz)) || void 0 === iz ? void 0 : iz.inputs[uz]) && void 0 !== Ez ? Ez : null
      }
      modelInput(zz, uz) {
        const bz = this.geometrySlot(zz);
        let Ez = bz.inputs.get(uz);
        if (void 0 === Ez) {
          const nz = zz.vertexAttributes.find((zz => zz.kind === uz));
          Ez = nz ? new ez(this.modelKey(bz, nz.data, !1), nz.offset, nz.stride, nz.components, !1, nz.glType, nz.isNormalized) : null, bz.inputs.set(uz, Ez)
        }
        return Ez
      }
      modelIndex(zz) {
        return zz.indexData && this.modelKey(this.geometrySlot(zz), zz.indexData, !0)
      }
      geometrySlot(zz) {
        let uz = zz.gpu[Az.c.lite];
        if (!uz) {
          const bz = new Map,
            Ez = () => {
              for (const zz of bz.values()) this.bufferDeleted(zz)
            },
            nz = zz => {
              const uz = bz.get(zz);
              uz && this.vertexBufferUpdated(uz, zz)
            };
          uz = {
            keys: bz,
            inputs: new Map,
            release: Ez,
            updated: nz
          }, zz.gpu[Az.c.lite] = uz
        }
        return uz
      }
      modelKey(zz, uz, bz) {
        let Ez = zz.keys.get(uz);
        if (!Ez) {
          if (bz) {
            const zz = {
              Bp: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(zz, uz, "model-indices"), Ez = zz
          } else Ez = {
            Bp: 0
          }, this.vertexBufferCreated(Ez, uz, !1, "model-vertices");
          zz.keys.set(uz, Ez)
        }
        return Ez
      }
      indexFormat(zz) {
        return zz.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(zz, uz) {
        --zz.refs > 0 || (this.releaseTexture(zz), gl(zz.images), null !== uz && this.textures.delete(uz))
      }
      load(zz, uz) {
        const bz = uz.decoded = async function(zz) {
          if ("cube" === zz.kind) return async function(zz) {
            if (6 !== zz.length) throw new Error(`${zz.length} files where six faces were expected`);
            const uz = await Sl(zz.map((zz => cn(zz)))),
              bz = uz[0].width;
            return Sl(uz.map((async zz => {
              if (zz.width === bz && zz.height === bz) return zz;
              try {
                return await createImageBitmap(zz, {
                  ...hn,
                  resizeWidth: bz,
                  resizeHeight: bz
                })
              } finally {
                zz.close()
              }
            })))
          }(zz.files);
          if ("data" === zz.kind && zz.data) return [await createImageBitmap(new Blob([zz.data]), hn)];
          return [await cn(Cl(zz))]
        }(zz.source).then((zz => {
          0 === uz.refs ? gl(zz) : uz.images = zz
        }));
        this.track(uz, Cl(zz.source), bz, (() => {
          uz.wanted && !uz.failed && uz.refs > 0 && this.upload(zz, uz)
        }))
      }
      canvasUpdated(zz, uz, bz) {
        const {
          state: Ez
        } = this.textureSlot(zz);
        Ez.dynamicSource = {
          invertY: uz,
          premultiplied: bz
        }, Ez.dynamic && this.pushDynamic(zz.source, Ez)
      }
      async atlasArray(zz, uz, bz) {
        const Ez = await yn(this.device, zz, uz, bz);
        if (!this.atlasBindings.has(Ez)) {
          const zz = (0, Vl.b)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Ez, {
            view: Ez.texture.createView({
              dimension: "2d-array"
            }),
            sampler: zz
          })
        }
        return Ez
      }
      boundTexture(zz) {
        const uz = this.atlasBindings.get(zz);
        if (uz) return uz;
        const bz = zz;
        if (bz.released) return null;
        const Ez = this.textureSlot(bz, !0),
          {
            state: nz
          } = Ez;
        if (!nz.view && (nz.wanted = !0, nz.loading || nz.failed || this.upload(bz, nz), !nz.view)) return null;
        const iz = this.chosenSampler(bz, Ez),
          lz = Ez.bound;
        return lz && lz.view === nz.view && lz.sampler === iz ? lz : (Ez.bound = {
          view: nz.view,
          sampler: iz
        }, Ez.bound)
      }
      textureLoaded(zz) {
        var uz, bz;
        return null !== (uz = null === (bz = zz.gpu[Az.c.lite]) || void 0 === bz ? void 0 : bz.state.decoded) && void 0 !== uz ? uz : null
      }
      textureFailed(zz) {
        var uz;
        return !0 === (null === (uz = zz.gpu[Az.c.lite]) || void 0 === uz ? void 0 : uz.state.failed)
      }
      chosenSampler(zz, uz) {
        const {
          samplingMode: bz,
          wrapU: Ez,
          wrapV: nz
        } = zz.sampler, iz = uz.state.hasMips, lz = function(zz, uz) {
          const {
            bilinear: bz,
            trilinear: Ez
          } = Az.f;
          return !uz && zz !== bz || 11 !== zz && zz !== Ez && zz !== bz ? 1 : 4
        }(bz, iz), Mz = uz.sampler;
        if (Mz && Mz.samplingMode === bz && Mz.hasMips === iz && Mz.anisotropy === lz && Mz.wrapU === Ez && Mz.wrapV === nz) return Mz.sampler;
        const tz = this.samplerFor(bz, iz, lz, Ez, nz);
        return uz.sampler = {
          samplingMode: bz,
          hasMips: iz,
          anisotropy: lz,
          wrapU: Ez,
          wrapV: nz,
          sampler: tz
        }, tz
      }
      releaseTexture(zz) {
        var uz, bz;
        zz.view && (null === (bz = this.onDestroy) || void 0 === bz || bz.call(this, zz.view));
        null === (uz = zz.destroy) || void 0 === uz || uz.call(zz)
      }
      textureSlot(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const bz = zz.gpu[Az.c.lite];
        if (bz) return bz;
        const Ez = function(zz) {
          let {
            source: uz,
            sampler: bz
          } = zz;
          return "canvas" === uz.kind ? null : `${uz.kind}|${Cl(uz)}|${bz.noMipmap}|${bz.samplingMode}|${bz.invertY}`
        }(zz);
        let nz = null === Ez ? void 0 : this.textures.get(Ez);
        nz || (nz = {
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
        }, null !== Ez && (this.textures.set(Ez, nz), this.load(zz, nz), uz && this.firstBindDecodes++)), nz.refs++;
        const iz = nz,
          lz = {
            state: nz,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(iz, Ez)
            }
          };
        return zz.gpu[Az.c.lite] = lz, lz
      }
      samplerFor(zz, uz, bz, Ez, nz) {
        const iz = `${zz}|${uz}|${bz}|${Ez}|${nz}`;
        let lz = this.samplers.get(iz);
        if (!lz) {
          const Mz = {
            ...jl(zz, uz, bz),
            addressModeU: Il(Ez),
            addressModeV: Il(nz)
          };
          lz = (0, Vl.b)(this.engine, Mz), this.samplers.set(iz, lz)
        }
        return lz
      }
      upload(zz, uz) {
        const {
          source: bz,
          sampler: Ez
        } = zz;
        uz.hasMips = !Ez.noMipmap, "canvas" === bz.kind ? this.createDynamic(bz, uz) : "cube" === bz.kind ? this.uploadCube(uz, bz.luminance) : this.uploadImage(uz, !0 === Ez.invertY, bz.url)
      }
      uploadImage(zz, uz, bz) {
        const [Ez] = zz.images;
        zz.images = null;
        const nz = (0, ml.b)(this.engine, Ez, {
          mipMaps: zz.hasMips,
          invertY: uz,
          srgb: !1
        }).then((uz => {
          Ez.close(), 0 !== zz.refs ? (zz.view = uz.view, zz.destroy = uz.texture.destroy.bind(uz.texture)) : uz.texture.destroy()
        }));
        this.track(zz, bz, nz)
      }
      track(zz, uz, bz, Ez) {
        zz.loading = !0, this.pending++, bz.catch((bz => {
          zz.failed = !0, console.warn(`Lite: could not load texture ${Un(uz)}`, bz)
        })).finally((() => {
          zz.loading = !1, this.pending--, null === Ez || void 0 === Ez || Ez()
        }))
      }
      uploadCube(zz, uz) {
        const bz = zz.images;
        zz.images = null;
        const Ez = cl(this.engine, this.device, bz, (0, Az.t)(uz), zz.hasMips);
        zz.view = Ez.createView({
          dimension: "cube"
        }), zz.destroy = () => {
          Ez.destroy()
        }
      }
      createDynamic(zz, uz) {
        const {
          canvas: bz
        } = zz, Ez = (0, ql.c)(this.engine, Math.max(1, bz.width), Math.max(1, bz.height), {
          mipMaps: uz.hasMips,
          srgb: !1
        });
        uz.dynamic = Ez, uz.view = Ez.view, uz.destroy = () => {
          Ez.texture.destroy()
        }, this.pushDynamic(zz, uz)
      }
      pushDynamic(zz, uz) {
        const bz = uz.dynamicSource,
          Ez = uz.dynamic,
          {
            canvas: nz
          } = zz;
        if (bz && Ez && 0 !== nz.width && 0 !== nz.height) return nz.width !== Ez.width || nz.height !== Ez.height ? (this.releaseTexture(uz), uz.dynamic = null, uz.view = null, void this.createDynamic(zz, uz)) : void(0, ql.d)(this.engine, Ez, nz, {
          invertY: bz.invertY,
          premultiplyAlpha: bz.premultiplied
        })
      }
    }

    function Cl(zz) {
      return "cube" === zz.kind ? zz.rootUrl : "canvas" === zz.kind ? "canvas" : zz.url
    }
    const Yl = new Uint8Array(4);

    function kl(zz) {
      const uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      zz._colorAttachment.storeOp = zz._targetSignature._sampleCount > 1 ? uz : "store";
      const bz = zz._renderPassDescriptor.depthStencilAttachment;
      bz && (bz.depthStoreOp = uz, bz.stencilStoreOp && (bz.stencilStoreOp = uz))
    }
    var zM = bz(37239),
      uM = bz(37280),
      bM = bz(36920),
      EM = bz(38939);
    const nM = new Float64Array([1, 1, 1]),
      iM = new Float64Array([0, 1, 0]),
      lM = new Float64Array(4),
      MM = new Float32Array(16),
      tM = new Float64Array(3),
      HM = new Float64Array(4);

    function OM(zz, uz, bz) {
      zz.fov = uz.fov, zz.near = uz.near, zz.far = uz.far, zz.renderWidth = bz.renderWidth, zz.renderHeight = bz.renderHeight, (0, bM.u)(uz.holderRotation, 0, lM, 0), (0, bM.c)(nM, 0, lM, 0, uz.holderPosition, 0, MM);
      const Ez = uz.MI;
      tM[0] = Ez[0], tM[1] = Ez[1], tM[2] = Ez[2] + 1;
      const nz = zz.viewMatrix;
      (0, bM.l)(Ez, tM, iM, nz), (0, bM.i)(nz, 0, nz), (0, bM.o)(nz, MM, 0, nz), (0, bM.i)(nz, 0, nz);
      const iz = zz.worldMatrix;
      (0, bM.i)(nz, 0, iz), zz.eye[0] = iz[12], zz.eye[1] = iz[13], zz.eye[2] = iz[14], HM[0] = zz.fov, HM[1] = zz.renderWidth / zz.renderHeight, HM[2] = zz.near, HM[3] = zz.far, (0, bM.s)(HM, zz.projectionMatrix), (0, bM.o)(nz, zz.projectionMatrix, 0, zz.viewProjectionMatrix), (0, EM.c)(zz.viewProjectionMatrix, zz.frustum)
    }

    function pM(zz, uz) {
      let bz = zz.frustumPlanes;
      bz || (bz = zz.frustumPlanes = Array.from({
        length: 6
      }, (() => new zM.b(0, 0, 0, 0))));
      for (let Ez = 0; Ez < 6; Ez++) {
        const zz = bz[Ez].normal;
        zz._x = uz[4 * Ez], zz._y = uz[4 * Ez + 1], zz._z = uz[4 * Ez + 2], zz._isDirty = !0, bz[Ez].d = uz[4 * Ez + 3]
      }
    }

    function dM(zz, uz) {
      const bz = uz.clearColor;
      zz.clearColour[0] = bz.r, zz.clearColour[1] = bz.g, zz.clearColour[2] = bz.b, zz.clearColour[3] = bz.a;
      const Ez = uz.ambientColor;
      zz.ambientColour[0] = Ez.r, zz.ambientColour[1] = Ez.g, zz.ambientColour[2] = Ez.b, zz.animationRatio = uz.animationRatio, zz.frameId = uz.frameId, zz.version++
    }

    function FM(zz) {
      const uz = zz.model.view;
      return uz.animTick = (0, uM.f)(), uz.timeMs = performance.now(), dM(uz, zz.tK), zz.model.update(uz.frameId), uz
    }

    function ZM(zz) {
      const uz = zz.tK,
        {
          view: bz,
          bI: Ez
        } = zz.model;
      return OM(bz, Ez, uz.uR()), uz.onBeforeRenderObservable.notifyObservers(uz), pM(uz, bz.frustum), uz.onBeforeCameraRenderObservable.notifyObservers(uz.activeCamera), FM(zz)
    }
    var RM = bz(36887),
      KM = bz(36997),
      wM = bz(37273);

    function XM(zz) {
      var uz, bz;
      const Ez = (0, xz.W)(zz);
      if (!Ez || Ez.diffuseTexture && (0, wM.i)(zz)) return null;
      const nz = null === (uz = (0, xz.u)(Ez, Nz.j.name)) || void 0 === uz ? void 0 : uz.state,
        iz = null === (bz = (0, xz.u)(Ez, Ci.d.name)) || void 0 === bz ? void 0 : bz.state,
        lz = new Float32Array(16);
      return function(zz, uz, bz, Ez) {
        var nz, iz;
        const lz = dE;
        Ez.set(zz.diffuseColor, lz.diffuse), Ez[lz.diffuse + 3] = zz.alpha, Ez.set(zz.ambientColor, lz.ambientAndCutoff), Ez[lz.ambientAndCutoff + 3] = zz.alphaCutOff, Ez.set(zz.emissiveColor, lz.emissiveAndLevel), Ez[lz.emissiveAndLevel + 3] = null !== (nz = null === (iz = zz.diffuseTexture) || void 0 === iz ? void 0 : iz.level) && void 0 !== nz ? nz : 1, null !== uz && void 0 !== uz && uz.animDataPerTex ? (Ez[lz.anim + 1] = uM.d, Ez[lz.anim + 2] = uz.animDataPerTex.length / 3 - 1) : bz && (Ez[lz.anim + 1] = bz.numAnimStates, Ez[lz.anim + 2] = bz.ticksPerAnimState)
      }(Ez, nz, iz, lz), {
        model: Ez,
        atlas: nz,
        texture: nz ? "atlas" : Ez.diffuseTexture ? "single" : "none",
        animated: nz ? !!nz.animDataPerTex : !!iz,
        liquid: (0, wM.l)(zz),
        customRenderMat: (0, wM.i)(zz),
        uniformData: lz
      }
    }
    var fM = bz(36864);
    class sM {
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
    class rM {
      constructor(zz, uz) {
        this.arena = zz, this.al = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.al = new yl(uz);
        const bz = new sM(uz);
        bz.buffer = this.createBuffer(bz, !1), this.backings.push(bz), this.refresh()
      }
      get Bp() {
        return this.al.Bp
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
        for (const uz of this.backings) zz += uz.units * (this.arena.unitBytes + (uz.twin ? this.arena.twinUnitBytes : 0));
        return zz
      }
      holds(zz) {
        return zz.start + zz.length <= this.usable
      }
      lost(zz) {
        return this.dropped || zz.start + zz.length > this.Bp
      }
      write(zz, uz) {
        const {
          device: bz,
          unitBytes: Ez
        } = this.arena;
        for (const nz of this.backings) {
          const iz = (nz.units - zz.start) * Ez;
          iz > 0 && bz.queue.writeBuffer(nz.buffer, zz.start * Ez, uz, 0, Math.min(uz.byteLength, iz))
        }
      }
      writeLight(zz, uz) {
        const {
          device: bz,
          twinUnitBytes: Ez,
          verticesPerUnit: nz
        } = this.arena, {
          light: iz,
          count: lz
        } = this.arena.twinLight(uz, Math.min(uz.length, zz.length * nz));
        for (const Mz of this.backings) {
          Mz.twin || (Mz.twin = this.createBuffer(Mz, !0));
          const uz = (Mz.units - zz.start) * nz;
          uz > 0 && bz.queue.writeBuffer(Mz.twin, zz.start * Ez, iz, 0, Math.min(lz, uz))
        }
      }
      grow(zz) {
        this.arena.assertNotDrawing();
        const {
          device: uz,
          unitBytes: bz,
          label: Ez
        } = this.arena, nz = this.backings[this.backings.length - 1], iz = new sM(zz), lz = uz.createCommandEncoder({
          label: `${Ez}-grow`
        });
        iz.buffer = this.createBuffer(iz, !1), lz.copyBufferToBuffer(nz.buffer, 0, iz.buffer, 0, nz.units * bz), nz.twin && (iz.twin = this.createBuffer(iz, !0), lz.copyBufferToBuffer(nz.twin, 0, iz.twin, 0, nz.units * this.arena.twinUnitBytes)), uz.queue.submit([lz.finish()]), this.backings.push(iz), this.al.grow(zz)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const zz of this.backings) zz.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(zz, uz) {
        const {
          device: bz,
          unitBytes: Ez,
          twinUnitBytes: nz,
          usage: iz,
          label: lz
        } = this.arena;
        bz.pushErrorScope("out-of-memory");
        const Mz = bz.createBuffer({
          label: uz ? `${lz}-light` : lz,
          size: zz.units * (uz ? nz : Ez),
          usage: (uz ? this.arena.twinUsage : iz) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, bz.popErrorScope().then((bz => {
          this.arena.awaitingVerdict--, this.settle(zz, uz, !bz, !0)
        }), (bz => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${lz} buffer, taken as failed: ${String(bz)}`), this.settle(zz, uz, !1, !1)
        })), Mz
      }
      settle(zz, uz, bz, Ez) {
        const nz = this.backings.indexOf(zz);
        if (!(this.dropped || nz < 0)) {
          if (!bz) {
            if (Ez && this.arena.ranOutOfMemory(zz.units, zz.units * (uz ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === nz) return void this.drop();
            for (const zz of this.backings.splice(nz)) zz.destroy();
            return this.al.truncate(this.backings[nz - 1].units), this.growable = !1, void this.promote()
          }
          uz ? zz.twinReady = !0 : (zz.bufferReady = !0, this.arena.allocatedBuffer(zz.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: zz
        } = this;
        let uz = 0;
        for (; uz + 1 < zz.length && zz[uz].ready && zz[uz + 1].ready;) uz++;
        for (const bz of zz.splice(0, uz)) bz.destroy();
        this.refresh()
      }
      refresh() {
        const zz = this.backings[0];
        this.buffer = zz.buffer, this.twin = zz.twinReady ? zz.twin : null, this.usable = !this.dropped && zz.bufferReady ? zz.units : 0
      }
    }
    class oM {
      constructor(zz, uz, bz, Ez) {
        let {
          verticesPerUnit: nz = 1,
          twinUsage: iz = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = zz, this.unitBytes = uz, this.usage = bz, this.label = Ez, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Hu.b)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), uz % 4 !== 0) throw new Error(`${Ez}: ${uz}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = nz, this.twinUsage = iz, this.twinValueBytes = nz > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * nz
      }
      twinLight(zz, uz) {
        if (4 === this.twinValueBytes) return this.widened.length < uz && (this.widened = new Float32Array(Math.max(uz, 2 * this.widened.length))), this.widened.set(zz.subarray(0, uz)), {
          light: this.widened,
          count: uz
        };
        const bz = uz % this.verticesPerUnit;
        if (0 === bz) return {
          light: zz,
          count: uz
        };
        const Ez = uz - bz + this.verticesPerUnit;
        return this.padded.length < Ez && (this.padded = new Uint16Array(Math.max(Ez, 2 * this.padded.length))), this.padded.set(zz.subarray(0, uz)), this.padded.fill(0, uz, Ez), {
          light: this.padded,
          count: Ez
        }
      }
      allocate(zz) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), zz > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const nz of this.pages) {
          const uz = nz.al.allocate(zz);
          if (uz >= 0) return {
            page: nz,
            start: uz,
            length: zz
          }
        }
        const uz = this.pages[this.pages.length - 1];
        if (null !== uz && void 0 !== uz && uz.canGrow) {
          const bz = Math.min(this.ceiling, Math.max(2 * uz.Bp, uz.Bp + zz));
          if (bz - uz.Bp >= zz) return uz.grow(bz), {
            page: uz,
            start: uz.al.allocate(zz),
            length: zz
          }
        }
        uz && uz !== this.pages[0] && 0 === uz.al.used && uz.drop();
        const bz = Math.floor(1048576 / this.unitBytes),
          Ez = new rM(this, Math.max(zz, Math.min(this.ceiling, bz)));
        return this.pages.push(Ez), {
          page: Ez,
          start: Ez.al.allocate(zz),
          length: zz
        }
      }
      free(zz) {
        this.assertNotDrawing();
        const {
          page: uz
        } = zz;
        uz.al.free(zz.start, zz.length), 0 === uz.al.used && uz !== this.pages[0] && uz !== this.pages[this.pages.length - 1] && uz.drop()
      }
      remove(zz) {
        const uz = this.pages.indexOf(zz);
        uz >= 0 && this.pages.splice(uz, 1)
      }
      ranOutOfMemory(zz, uz) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${uz}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, zz), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, zz) / 2));
        const bz = performance.now();
        bz >= this.shortageUntil && (this.forgetFailedAt = bz + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = bz + 1e3)
      }
      allocatedBuffer(zz) {
        zz >= this.failed && (this.failed = 1 / 0);
        const uz = Math.min(2 * zz, Math.floor((zz + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, uz))
      }
      stats() {
        let zz = 0,
          uz = 0,
          bz = 0,
          Ez = 0;
        for (const nz of this.pages) zz += nz.Bp, uz += nz.al.used, bz += nz.hasTwin ? nz.Bp * this.twinUnitBytes : 0, Ez += nz.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: zz * this.unitBytes,
          usedBytes: uz * this.unitBytes,
          twinBytes: bz,
          allocatedBytes: Ez
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: zz,
          maxStorageBufferBindingSize: uz
        } = this.device.limits;
        let bz = Math.floor(Math.min(67108864, zz) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (bz = Math.min(bz, Math.floor(uz / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (bz = Math.min(bz, Math.floor(uz / this.twinUnitBytes))), bz
      }
    }
    const NM = 16383;

    function vM(zz, uz, bz, Ez, nz) {
      let iz = 0;
      for (let lz = bz; lz < Ez; lz += NM) zz.drawIndexed(6 * Math.min(NM, Ez - lz), 1, 0, uz + 4 * lz, nz), iz++;
      return iz
    }
    class xM {
      constructor(zz, uz) {
        this.recordsGroup = uz, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const bz = vu.e.strideWithoutAtlas;
        this.vertexArena = new oM(zz, bz, GPUBufferUsage.VERTEX, `terrain-vertices-${bz}`), this.quadArena = new oM(zz, KM.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Ez = (0, xu.d)(new Uint16Array(98298), NM);
        this.quadPattern = zz.createBuffer({
          label: "terrain-quad-pattern",
          size: Ez.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), zz.queue.writeBuffer(this.quadPattern, 0, Ez)
      }
      set(zz, uz) {
        const bz = uz.packedVertices,
          Ez = bz ? this.quadArena.allocate(zz.faceCount) : this.vertexArena.allocate(zz.vertexCount);
        if (!Ez) return !1;
        zz.vertices = Ez;
        const nz = bz ? new Uint8Array(bz.buffer, bz.byteOffset, bz.byteLength) : new Uint8Array(uz.vertices);
        return Ez.page.write(Ez, nz), !0
      }
      setLight(zz, uz) {
        const {
          vertices: bz
        } = zz;
        bz && 0 !== uz.length && bz.page.live && (uz.length < zz.vertexCount ? bz.page.arena.warnOnce("shortLight", `a part's ${uz.length} light values are fewer than its ${zz.vertexCount} vertices, so its light is left as it was`) : (bz.page.writeLight(bz, uz), zz.lit = !0))
      }
      lightFullSky(zz, uz) {
        this.fullSky.length < uz && (this.fullSky = new Uint16Array(Math.max(uz, 4096)).fill(fM.h));
        for (const bz of zz) {
          const zz = bz.vertices;
          zz.page.live && (zz.page.writeLight(zz, this.fullSky), bz.lit = !0)
        }
      }
      backed(zz) {
        const {
          vertices: uz
        } = zz;
        return !!uz && uz.page.holds(uz)
      }
      lost(zz) {
        const {
          vertices: uz
        } = zz;
        return !!uz && uz.page.lost(uz)
      }
      release(zz) {
        zz.vertices && zz.vertices.page.arena.free(zz.vertices), zz.vertices = null, zz.lit = !1
      }
      setDrawing(zz) {
        this.forgetBound()
      }
      draw(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uz.faceCount;
        const iz = uz.vertices,
          lz = iz.page,
          Mz = bz ? lz.twin : null;
        if (!lz.holds(iz) || bz && !Mz) return 0;
        const {
          verticesPerUnit: tz
        } = lz.arena;
        let Hz = iz.start * tz;
        this.boundPattern || (zz.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Oz = Ez + nz;
        if (tz > 1) return lz.buffer === this.boundRecords && Mz === this.boundRecordsLight || (zz.setBindGroup(1, this.recordsGroup(lz.buffer, Mz)), this.boundRecords = lz.buffer, this.boundRecordsLight = Mz), vM(zz, Hz, Ez, Oz, uz.slot);
        lz.buffer !== this.boundVertices && (zz.setVertexBuffer(0, lz.buffer), this.boundVertices = lz.buffer), Mz && Mz !== this.boundLight && (zz.setVertexBuffer(1, Mz), this.boundLight = Mz);
        const pz = uz.faceCount;
        return Oz <= pz ? vM(zz, Hz, Ez, Oz, uz.slot) : vM(zz, Hz, Ez, pz, uz.slot) + vM(zz, Hz, Math.max(Ez, pz) - pz, Oz - pz, uz.slot)
      }
      get buffersAwaitingVerdict() {
        let zz = 0;
        for (const uz of this.arenas()) zz += uz.awaitingVerdict;
        return zz
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class JM {
      constructor(zz, uz, bz, Ez) {
        this.device = zz, this.splitBefore = uz, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = zz.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const nz = zz.createShaderModule({
          label: "scene-depth-copy",
          code: (iz = bz._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${iz?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var iz;
        zz.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: nz,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: nz,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((zz => {
          this.pipeline = zz, this.building = !1
        }), (zz => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", zz)
        })), bz._executeWithTransmission = () => this.execute(bz, Ez)
      }
      get compiling() {
        return this.building
      }
      setWanted(zz) {
        this.wanted = zz
      }
      setPlanes(zz, uz) {
        zz === this.near && uz === this.far || (this.near = zz, this.far = uz, this.unproject[0] = zz / (uz - zz), this.unproject[1] = uz * zz / (uz - zz), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var zz, uz;
        return null !== (zz = null === (uz = this.copy) || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null
      }
      execute(zz, uz) {
        var bz;
        null === (bz = this.retired) || void 0 === bz || bz.destroy(), this.retired = null;
        const Ez = zu(uz),
          nz = zz._transparentBindings,
          iz = this.wanted && this.pipeline ? this.splitIndex(nz) : -1,
          lz = zz._colorAttachment,
          Mz = lz.resolveTarget;
        iz >= 0 && (lz.resolveTarget = void 0, kl(zz, !0));
        let tz = Ez.beginRenderPass(zz._renderPassDescriptor);
        tz.setBindGroup(0, zz._sceneBG);
        let Hz = this.drawList(tz, uz, zz._opaqueBindings, 0, zz._opaqueBindings.length);
        if (Hz += this.drawList(tz, uz, zz._directBindings, 0, zz._directBindings.length), Hz += this.drawList(tz, uz, nz, 0, iz >= 0 ? iz : nz.length), tz.end(), iz < 0) return Hz;
        kl(zz);
        const Oz = zz._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: pz,
            stencilLoadOp: dz
          } = Oz,
          Fz = lz.loadOp;
        lz.resolveTarget = Mz;
        try {
          this.copyDepth(Ez, zz), lz.loadOp = "load", Oz.depthLoadOp = "load", dz && (Oz.stencilLoadOp = "load"), tz = Ez.beginRenderPass(zz._renderPassDescriptor), tz.setBindGroup(0, zz._sceneBG), Hz += this.drawList(tz, uz, nz, iz, nz.length), tz.end()
        } finally {
          lz.loadOp = Fz, Oz.depthLoadOp = pz, Oz.stencilLoadOp = dz
        }
        return Hz
      }
      splitIndex(zz) {
        for (let uz = 0; uz < zz.length; uz++)
          if (zz[uz].renderable === this.splitBefore) return uz;
        return -1
      }
      drawList(zz, uz, bz, Ez, nz) {
        let iz = null,
          lz = 0;
        for (let Mz = Ez; Mz < nz; Mz++) {
          const Ez = bz[Mz],
            nz = Ez.renderable.mesh;
          nz && !1 === nz.visible || (Ez.pipeline !== iz && (zz.setPipeline(Ez.pipeline), iz = Ez.pipeline), lz += Ez.draw(zz, uz))
        }
        return lz
      }
      copyDepth(zz, uz) {
        var bz, Ez;
        const nz = (null !== (bz = uz._config.depth) && void 0 !== bz ? bz : uz._config.rt)._depthTexture,
          iz = (null === (Ez = this.copy) || void 0 === Ez ? void 0 : Ez.source) === nz ? this.copy : this.remakeCopy(nz),
          lz = zz.beginRenderPass(iz.pass);
        lz.setPipeline(this.pipeline), lz.setBindGroup(0, iz.bindGroup), lz.draw(3), lz.end()
      }
      remakeCopy(zz) {
        var uz, bz;
        this.retired = null !== (uz = null === (bz = this.copy) || void 0 === bz ? void 0 : bz.texture) && void 0 !== uz ? uz : null;
        const Ez = this.device.createTexture({
            label: "scene-depth",
            size: [zz.width, zz.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          nz = Ez.createView(),
          iz = this.device.createBindGroup({
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
          lz = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: nz,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: zz,
          texture: Ez,
          view: nz,
          bindGroup: iz,
          pass: lz
        }, this.copy
      }
    }
    const AM = "rgba8unorm";

    function TM(zz) {
      return zz ? 15 : 1
    }
    class LM {
      constructor(zz, uz, bz, Ez) {
        this.device = zz, this.terrain = Ez, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = uz._targetSignature._sampleCount > 1, this.cameraBuffer = zz.createBuffer({
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
        const nz = zz.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = zz.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: nz,
          entries: []
        });
        const iz = zz.createShaderModule({
          label: "sun-shadow-mask",
          code: (lz = this.edge, `${(0,Ju.A)()}${Ub({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${lz?Jb:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${TM(lz)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${lz?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var lz;
        zz.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: zz.createPipelineLayout({
            bindGroupLayouts: [this.layout, nz, nz, yi(zz, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: iz,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: iz,
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
        const Mz = uz._executeWithTransmission;
        uz._executeWithTransmission = zz => this.execute(uz, bz, (() => Mz ? Mz(zz) : function(zz, uz) {
          const bz = zu(uz).beginRenderPass(zz._renderPassDescriptor);
          bz.setBindGroup(0, zz._sceneBG);
          let Ez = PM(bz, uz, zz._opaqueBindings);
          return Ez += PM(bz, uz, zz._directBindings), Ez += PM(bz, uz, zz._transparentBindings), bz.end(), Ez
        }(uz, bz)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var zz, uz;
        return null !== (zz = null === (uz = this.targets) || void 0 === uz ? void 0 : uz.maskView) && void 0 !== zz ? zz : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(zz) {
        ! function(zz, uz) {
          const bz = zz.worldMatrix,
            Ez = zz.projectionMatrix,
            nz = 1 / Ez[0],
            iz = 1 / Ez[5],
            lz = zz.far * zz.near / (zz.far - zz.near);
          uz[0] = zz.eye[0], uz[1] = zz.eye[1], uz[2] = zz.eye[2], uz[3] = 2 ** -23 / lz, uz[4] = bz[0] * nz, uz[5] = bz[1] * nz, uz[6] = bz[2] * nz, uz[7] = lz, uz[8] = bz[4] * iz, uz[9] = bz[5] * iz, uz[10] = bz[6] * iz, uz[11] = zz.near / (zz.far - zz.near), uz[12] = bz[8], uz[13] = bz[9], uz[14] = bz[10], uz[15] = 0
        }(zz, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(zz, uz, bz) {
        if (this.retire(), !this.terrain.readsMask) return bz();
        const Ez = this.targetsFor(zz),
          nz = zu(uz),
          iz = zz._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Ez.prepass.depthStencilAttachment.view = iz.view);
        const lz = this.terrain.drawPrepass(nz, Ez.prepass, zz._sceneBG);
        if (0 === lz) return bz();
        if (this.trace(nz, Ez), this.edge) return lz + 1 + bz();
        const {
          depthLoadOp: Mz,
          stencilLoadOp: tz
        } = iz;
        iz.depthLoadOp = "load", tz && (iz.stencilLoadOp = "load");
        try {
          return lz + 1 + bz()
        } finally {
          iz.depthLoadOp = Mz, iz.stencilLoadOp = tz
        }
      }
      trace(zz, uz) {
        const bz = this.terrain.sunShadowGroup(),
          Ez = zz.beginRenderPass(uz.trace);
        this.pipeline && bz && (Ez.setPipeline(this.pipeline), Ez.setBindGroup(0, uz.bindGroup), Ez.setBindGroup(1, this.empty), Ez.setBindGroup(2, this.empty), Ez.setBindGroup(3, bz), Ez.draw(3)), Ez.end()
      }
      retire() {
        const zz = this.retired;
        var uz;
        zz && (zz.mask.destroy(), zz.normals.destroy(), null === (uz = zz.depth) || void 0 === uz || uz.destroy(), this.retired = null)
      }
      targetsFor(zz) {
        var uz, bz;
        const Ez = (null !== (uz = zz._config.depth) && void 0 !== uz ? uz : zz._config.rt)._depthTexture;
        return (null === (bz = this.targets) || void 0 === bz ? void 0 : bz.source) === Ez ? this.targets : this.remake(zz, Ez)
      }
      remake(zz, uz) {
        var bz;
        this.retired = this.targets;
        const Ez = [uz.width, uz.height],
          nz = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Ez,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          iz = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Ez,
            format: AM,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          lz = null !== (bz = zz._targetSignature._depthStencilFormat) && void 0 !== bz ? bz : uz.format,
          Mz = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Ez,
            format: lz,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          tz = zz._renderPassDescriptor.depthStencilAttachment,
          Hz = lz.includes("stencil"),
          Oz = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: iz.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: Mz ? Mz.createView() : tz.view,
              depthClearValue: tz.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Hz ? {
                stencilClearValue: tz.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          pz = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== Mz && void 0 !== Mz ? Mz : uz).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: iz.createView()
            }]
          }),
          dz = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: nz.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [TM(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: uz,
          mask: nz,
          maskView: nz.createView(),
          normals: iz,
          depth: Mz,
          bindGroup: pz,
          prepass: Oz,
          trace: dz
        }, this.targets
      }
    }

    function PM(zz, uz, bz) {
      let Ez = null,
        nz = 0;
      for (const iz of bz) {
        const bz = iz.renderable.mesh;
        bz && !1 === bz.visible || (iz.pipeline !== Ez && (zz.setPipeline(iz.pipeline), Ez = iz.pipeline), nz += iz.draw(zz, uz))
      }
      return nz
    }
    const GM = 6e4,
      aM = {
        status: "ok"
      },
      VM = {
        status: "skipped"
      };
    async function mM(zz, uz) {
      const {
        isCancelled: bz
      } = zz;
      if (bz()) return {
        status: "ob"
      };
      const {
        target: Ez
      } = uz;
      if (!Ez) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const nz = [],
        iz = Promise.all(Array.from(new Set(zz.materials), (async bz => {
          nz.push(await async function(zz, uz, bz, Ez) {
            const nz = {
              lighting: zz.lighting,
              dirLightCount: Math.min(zz.dirLightCount, 4),
              JZ: zz.runtime
            };
            try {
              const iz = uz.material(Ez);
              return iz && HE(uz.programKey(iz, !1, nz)) ? (await iz.ready, zz.isCancelled() ? aM : iz.bindGroupLayout ? await async function(zz, uz, bz, Ez) {
                const {
                  device: nz
                } = zz;
                let iz, lz;
                nz.pushErrorScope("validation");
                try {
                  iz = zz.pipelineBuild(uz, bz, Ez)
                } finally {
                  lz = nz.popErrorScope().catch((() => null))
                }
                const [Mz, tz] = await Promise.all([lz, iz.built.then((() => null), (zz => null !== zz && void 0 !== zz ? zz : new Error("pipeline failed")))]);
                if (!Mz && !tz) return aM;
                const Hz = await qM(iz.module),
                  Oz = Hz.length > 0 ? Hz.map((zz => `${iz.name} ${zz.lineNum}:${zz.linePos}: ${zz.message}`)).join("\n") : `${iz.name}: ${hM(null!==tz&&void 0!==tz?tz:Mz)}`;
                return {
                  status: "failed",
                  material: uz.model.name,
                  message: Oz
                }
              }(uz, iz, uz.programKey(iz, "none" !== iz.texture, nz), bz): (console.warn(`Shader pack: skipped the compile check for "${Ez.name}", whose textures failed to load`), VM)) : aM
            } catch (iz) {
              return {
                status: "failed",
                material: Ez.name,
                message: hM(iz)
              }
            }
          }(zz, uz, Ez, bz))
        }))),
        lz = function(zz, uz) {
          let bz, Ez, nz = !1;
          const iz = new Promise((iz => {
            var lz;
            bz = setTimeout((() => {
              iz("timeout")
            }), null !== (lz = uz.timeoutMs) && void 0 !== lz ? lz : GM), Ez = setInterval((() => {
              uz.isCancelled() && iz("ob")
            }), 50), zz.lost.then((() => {
              nz = !0, iz("lost")
            }))
          }));
          return {
            signal: iz,
            lost: () => nz,
            dispose: () => {
              clearTimeout(bz), clearInterval(Ez)
            }
          }
        }(uz.device, zz);
      let Mz;
      try {
        Mz = await Promise.race([iz.then((() => "done")), lz.signal])
      } finally {
        lz.dispose()
      }
      if ("ob" === Mz || bz()) return {
        status: "ob"
      };
      const tz = nz.find((zz => "failed" === zz.status));
      return tz && "lost" !== Mz && !lz.lost() && await new Promise((zz => {
        setTimeout(zz, 0)
      })), "lost" === Mz || lz.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : tz ? {
        status: "failed",
        failure: {
          material: tz.material,
          message: tz.message
        }
      } : "timeout" === Mz ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Hz=zz.timeoutMs)&&void 0!==Hz?Hz:GM)/1e3} s`), {
        status: "skipped"
      }) : nz.some((zz => "skipped" === zz.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Hz
    }
    async function qM(zz) {
      if (!zz) return [];
      try {
        return (await zz.getCompilationInfo()).messages.filter((zz => "error" === zz.type))
      } catch {
        return []
      }
    }

    function hM(zz) {
      var uz;
      return null !== (uz = null === zz || void 0 === zz ? void 0 : zz.message) && void 0 !== uz ? uz : String(zz)
    }

    function UM(zz, uz, bz, Ez) {
      HE(zz) ? qM(bz).then((zz => {
        const [bz] = zz;
        Bn("terrain", uz, Ez, bz ? `${bz.lineNum}:${bz.linePos} error: ${bz.message}` : null)
      })) : Bn("terrain", uz, Ez)
    }
    var cM = bz(37006),
      gM = bz(37020),
      SM = bz(37027),
      yM = bz(36950);

    function DM(zz, uz, bz, Ez, nz) {
      const iz = Math.hypot(bz[0], bz[1], bz[2]);
      if (!(iz > 0)) return;
      const lz = [bz[0] / iz, bz[1] / iz, bz[2] / iz],
        Mz = [Math.floor(uz[0]), Math.floor(uz[1]), Math.floor(uz[2])],
        tz = [0, 0, 0],
        Hz = [1 / 0, 1 / 0, 1 / 0],
        Oz = [1 / 0, 1 / 0, 1 / 0];
      for (let Fz = 0; Fz < 3; Fz++) lz[Fz] > 0 ? (tz[Fz] = 1, Hz[Fz] = (Mz[Fz] + 1 - uz[Fz]) / lz[Fz], Oz[Fz] = 1 / lz[Fz]) : lz[Fz] < 0 && (tz[Fz] = -1, Hz[Fz] = (Mz[Fz] - uz[Fz]) / lz[Fz], Oz[Fz] = -1 / lz[Fz]);
      const {
        IZ: pz
      } = zz;
      let dz = zz.IU(Mz[0], Mz[1], Mz[2]);
      for (;;) {
        const uz = Hz[0] < Hz[1] ? Hz[0] < Hz[2] ? 0 : 2 : Hz[1] < Hz[2] ? 1 : 2;
        if (Hz[uz] > Ez) return;
        const bz = tz[uz] > 0 ? Mz[uz] + 1 : Mz[uz];
        Mz[uz] += tz[uz], Hz[uz] += Oz[uz];
        const iz = zz.IU(Mz[0], Mz[1], Mz[2]),
          lz = iz !== dz && !(zz.opaque[dz] && zz.opaque[iz]);
        if (lz) {
          const Ez = [Mz[0], Mz[1], Mz[2]];
          Ez[uz] = bz;
          const iz = Math.floor(Ez[0] / pz),
            lz = Math.floor(Ez[1] / pz),
            tz = Math.floor(Ez[2] / pz);
          !zz.isDrawn(iz, lz, tz) && zz.hasParts(iz, lz, tz) && nz.add(`${iz},${lz},${tz}`)
        }
        if (lz && zz.occluders[iz]) return;
        dz = iz
      }
    }

    function QM(zz, uz) {
      return zz.group - uz.group || zz.nearest - uz.nearest
    }
    class WM {
      constructor(zz, uz) {
        this.device = zz, this.Fs = uz, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const uz = null !== (zz = this.free.pop()) && void 0 !== zz ? zz : this.next++;
        if (8 * uz >= this.data.length) {
          const zz = new Float32Array(2 * this.data.length);
          zz.set(this.data), this.data = zz, this.words = new Uint32Array(zz.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Fs()
        }
        return uz
      }
      release(zz) {
        this.free.push(zz)
      }
      set(zz, uz, bz, Ez, nz) {
        const iz = 8 * zz + fE;
        this.data[iz] = uz, this.data[iz + 1] = bz, this.data[iz + 2] = Ez, this.setVisibility(zz, nz)
      }
      setVisibility(zz, uz) {
        this.data[8 * zz + sE] = uz, this.markDirty(zz, zz)
      }
      setFaces(zz, uz, bz) {
        const Ez = 8 * zz;
        this.words[Ez + rE] = uz, this.words[Ez + oE] = bz, this.markDirty(zz, zz)
      }
      markDirty(zz, uz) {
        this.dirtyMin = Math.min(this.dirtyMin, zz), this.dirtyMax = Math.max(this.dirtyMax, uz)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const eM = XE,
      jM = !0;
    const IM = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: eM.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      BM = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class CM {
      constructor(zz) {
        this.device = zz, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(pE), this.dirLightUniforms = this.frameUniforms.subarray(OE.dirLights, OE.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Hu.b)(), this.faceGroups = !0, this.visibilityGraph = jM, this.visCull = jM, this.visCheck = !1, this.visCullMinDistance = SM.e, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new ut, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.JZ = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new xM(zz, ((zz, uz) => this.recordsGroup(zz, uz))), this.slots = new WM(zz, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = uu(zz), this.frameLayout = zz.createBindGroupLayout({
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
          bind: (zz, uz) => this.createBinding(this.opaqueRenderable, uz, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (zz, uz) => this.createBinding(this.transparentRenderable, uz, !0)
        }
      }
      installSceneDepth(zz, uz) {
        this.sceneDepth = new JM(this.device, this.transparentRenderable, zz, uz)
      }
      createFrameBindGroup() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== uz && void 0 !== uz ? uz : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(zz, uz) {
        const bz = null !== uz && void 0 !== uz ? uz : zz;
        let Ez = this.recordsGroups.get(bz);
        return Ez || (Ez = this.createFrameBindGroup(zz, uz), this.recordsGroups.set(bz, Ez)), Ez
      }
      setChunkMesh(zz, uz, bz) {
        var Ez;
        let nz = this.chunks.get(zz);
        nz ? this.geometry.release(nz) : (nz = {
          mesh: zz,
          slot: this.slots.allocate(),
          origin: [bz[0], bz[1], bz[2]],
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
        }, this.chunks.set(zz, nz), this.writeSlot(nz)), nz.material = zz.material ? this.materialFor(zz.material) : null, nz.packed = !!uz.packedVertices, nz.vertexCount = (0, KM.d)(uz), nz.faceCount = nz.vertexCount / 4;
        const iz = null !== (Ez = uz.faceGroups) && void 0 !== Ez ? Ez : null;
        if (nz.faceGroups = iz, iz) {
          const zz = cM.j;
          nz.planePX = iz[zz], nz.planeNX = iz[zz + 1], nz.planePY = iz[zz + 2], nz.planeNY = iz[zz + 3], nz.planePZ = iz[zz + 4], nz.planeNZ = iz[zz + 5]
        }
        this.drawWhole(nz), 0 !== nz.faceCount && (this.geometry.set(nz, uz) ? (nz.packed && this.slots.setFaces(nz.slot, nz.vertices.start + nz.faceCount, nz.faceCount), uz.mZ && this.setChunkMeshLight(zz, uz.mZ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${nz.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(zz, uz) {
        const bz = this.chunks.get(zz);
        bz && this.geometry.setLight(bz, uz)
      }
      drawStats() {
        let zz = this.transparent.length;
        for (const uz of this.opaqueBatches) zz += uz.meshes.length;
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
        const uz = this.chunks.get(zz);
        uz && (this.geometry.release(uz), this.slots.release(uz.slot), this.chunks.delete(zz))
      }
      remeshLost(zz, uz) {
        this.geometry.release(uz), uz.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** uz.lostRemeshes++);
        const bz = zz.xd,
          [Ez, nz, iz] = bz.fEz(uz.origin[0], uz.origin[1], uz.origin[2]),
          lz = bz.gR.SR(Ez, nz, iz);
        lz && (lz.UR = !0, lz.eR = !0, bz.cR(lz, !1))
      }
      chooseFaceRanges(zz, uz, bz) {
        const Ez = this.faceRanges;
        zz.faceMask = bz, zz.rangeCount = (0, gM.o)(uz, bz, Ez), zz.first0 = Ez[0], zz.count0 = Ez[1], zz.first1 = Ez[2], zz.count1 = Ez[3]
      }
      drawWhole(zz) {
        zz.faceMask = -1, zz.faceEpoch = -1, zz.rangeCount = 1, zz.first0 = 0, zz.count0 = zz.faceCount
      }
      writeSlot(zz) {
        const [uz, bz, Ez] = this.originOffset;
        this.slots.set(zz.slot, zz.origin[0] - uz, zz.origin[1] - bz, zz.origin[2] - Ez, zz.visibility)
      }
      materialFor(zz) {
        const uz = this.materials.get(zz);
        if (uz) return uz;
        const bz = XM(zz);
        if (!bz) return this.warnOnce(`material:${zz.name}`, `Lite terrain cannot draw material "${zz.name}"; its chunks are skipped.`), null;
        const {
          model: Ez,
          atlas: nz,
          texture: iz,
          animated: lz,
          uniformData: Mz
        } = bz, tz = {
          id: this.materials.size,
          model: Ez,
          texture: iz,
          animated: lz,
          uniformData: Mz,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${zz.name}`,
            size: Mz.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: bz.liquid,
          customRenderMat: bz.customRenderMat,
          atlasCount: 0,
          uC: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(zz, tz), this.device.queue.writeBuffer(tz.uniformBuffer, 0, Mz), tz.ready = this.createMaterialBindGroup(tz, nz).catch((uz => {
          console.error(`Lite terrain failed to load the textures of material "${zz.name}"`, uz)
        })), tz
      }
      materialLayout(zz) {
        const uz = function(zz) {
            const uz = ["uniforms"];
            if ("atlas" === zz.texture) {
              zz.animated && uz.push("animData"), uz.push("sampler");
              for (let bz = 0; bz < zz.atlasCount; bz++) uz.push("textureArray")
            } else "single" === zz.texture && uz.push("sampler", "texture");
            return uz
          }(zz),
          bz = uz.join(",");
        let Ez = this.materialLayouts.get(bz);
        if (!Ez) {
          const zz = GPUShaderStage.FRAGMENT;
          Ez = this.device.createBindGroupLayout({
            label: `terrain-material-${bz}`,
            entries: uz.map(((uz, bz) => {
              switch (uz) {
                case "uniforms":
                  return {
                    binding: bz, visibility: GPUShaderStage.VERTEX | zz, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: bz, visibility: GPUShaderStage.VERTEX | zz, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: bz, visibility: zz, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: bz, visibility: zz, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: bz, visibility: zz, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(bz, Ez)
        }
        return Ez
      }
      async createMaterialBindGroup(zz, uz) {
        const bz = [{
          buffer: zz.uniformBuffer
        }];
        if (uz) {
          const {
            urls: Ez,
            pixels: nz,
            layerWidth: iz
          } = uz.sources, lz = await Promise.all(Ez.map(((zz, uz) => {
            var bz;
            return yn(this.device, zz, null !== (bz = null === nz || void 0 === nz ? void 0 : nz[uz]) && void 0 !== bz ? bz : null, iz)
          })));
          zz.atlasCount = lz.length, zz.uC = lz[0].layerWidth, zz.atlasLayers = lz[0].layers, uz.animDataPerTex && bz.push({
            buffer: Vn(this.device, Float32Array.from(uz.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), bz.push(this.sampler);
          for (const zz of lz) bz.push(zz.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === zz.texture) {
          const {
            url: uz
          } = zz.model.diffuseTexture.source, {
            pixels: Ez,
            width: nz,
            height: iz
          } = await gn(uz);
          bz.push(this.sampler), bz.push(qn(this.device, Ez, nz, iz, 1, `terrain-${uz}`).createView({
            dimension: "2d"
          }))
        }
        const Ez = this.materialLayout(this.programKey(zz, !1));
        zz.bindGroupLayout = Ez, zz.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${zz.model.name}`,
          layout: Ez,
          entries: bz.map(((zz, uz) => ({
            binding: uz,
            resource: zz
          })))
        })
      }
      programKey(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Ez = bz ? bz.lighting : this.lighting,
          nz = bz ? bz.JZ : this.JZ,
          iz = {
            texture: zz.texture,
            atlasCount: zz.atlasCount,
            uC: zz.uC,
            atlasLayers: zz.atlasLayers,
            animated: zz.animated,
            alphaTest: zz.model.transparencyMode === xz.o.alphaTest,
            lighting: Ez,
            dirLightCount: bz ? bz.dirLightCount : this.dirLightCount,
            packed: uz
          };
        if (!nz) return iz;
        const lz = this.shaderPackFields(zz, nz),
          Mz = "atlas" === zz.texture && zz.model.transparencyMode === xz.o.opaque && iE(lz.packVariant);
        return {
          ...iz,
          ...lz,
          alphaTest: iz.alphaTest || Mz
        }
      }
      shaderPackFields(zz, uz) {
        return zz.customRenderMat ? EE : function(zz, uz) {
          if (!zz) return EE;
          const bz = zz.defineFor(uz ? "liquid" : "terrain");
          return 0 === bz ? EE : {
            packVariant: bz,
            liquid: uz
          }
        }(uz, zz.liquid)
      }
      isBlended(zz) {
        return zz.model.transparencyMode === xz.o.alphaBlend
      }
      shaderModule(zz, uz) {
        let bz = this.modules.get(zz);
        return bz || (bz = this.device.createShaderModule({
          label: uz,
          code: zz
        }), this.modules.set(zz, bz)), bz
      }
      pipelineFor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!zz.bindGroupLayout) return null;
        const nz = this.programKey(zz, uz);
        if (!Ez) return this.pipelineOf(zz, nz, bz);
        const iz = {
            ...nz,
            resting: Ez
          },
          lz = this.pipelineId(zz, iz, bz),
          Mz = this.pipelines.get(lz);
        if (Mz) return Mz;
        const tz = this.pipelineOf(zz, nz, bz);
        return tz && void 0 === Mz && this.startPipeline(lz, zz, iz, bz), tz
      }
      pipelineOf(zz, uz, bz) {
        const Ez = this.pipelineId(zz, uz, bz),
          nz = this.pipelines.get(Ez);
        return void 0 !== nz ? nz : (this.startPipeline(Ez, zz, uz, bz), null)
      }
      pipelineId(zz, uz, bz) {
        return YM(uz, this.isBlended(zz), zz.model.backFaceCulling, bz)
      }
      pipelineBuild(zz, uz, bz) {
        var Ez;
        const nz = this.pipelineId(zz, uz, bz);
        return null !== (Ez = this.builds.get(nz)) && void 0 !== Ez ? Ez : this.startPipeline(nz, zz, uz, bz)
      }
      startPipeline(zz, uz, bz, Ez) {
        var nz;
        this.pipelines.set(zz, null);
        const iz = TE(bz),
          lz = this.isBlended(uz),
          Mz = this.shadowMask && Ez._depthStencilFormat ? function(zz, uz, bz, Ez) {
            if (void 0 === zz.packVariant || zz.liquid || uz) return "none";
            const nz = (0, Au.e)(zz.packVariant);
            return null === nz || void 0 === nz || !nz.sunShadow || !qb(nz, bz) || nz.discards || zz.alphaTest && iE(zz.packVariant) ? "none" : Ez ? "edge" : "plain"
          }(bz, lz, !!this.sunShadow, Ez._sampleCount > 1) : "none";
        let tz;
        try {
          tz = LE(bz, !!this.sunShadow, Mz)
        } catch (Kz) {
          if (!HE(bz)) throw Kz;
          return this.failedPackBuild(zz, bz, iz, Kz)
        }
        const Hz = this.shaderModule(tz, iz),
          Oz = [];
        bz.packed || (Oz.push(function(zz, uz) {
          const bz = [{
            shaderLocation: eM.position,
            offset: vu.e.fu,
            format: "float32x3"
          }, {
            shaderLocation: eM.normal,
            offset: vu.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: eM.color,
            offset: vu.e.colorOffset,
            format: "unorm8x4"
          }];
          return zz && bz.push({
            shaderLocation: eM.uv,
            offset: vu.e.uvOffset,
            format: "float32x2"
          }), uz && bz.push({
            shaderLocation: eM.blockFlagWords,
            offset: vu.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: vu.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: bz
          }
        }("none" !== bz.texture, HE(bz))), bz.lighting && Oz.push(IM));
        const pz = uz.model.backFaceCulling,
          dz = {
            label: iz,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, uz.bindGroupLayout, ...Wi(this.device, bz, !!this.sunShadow, "none" !== Mz)]
            }),
            vertex: {
              module: Hz,
              entryPoint: "mainVertex",
              buffers: Oz
            },
            fragment: Cz({
              module: Hz,
              entryPoint: "mainFragment"
            }, Ez, lz ? BM : null),
            depthStencil: Ez._depthStencilFormat ? {
              format: Ez._depthStencilFormat,
              depthCompare: null !== (nz = Ez._depthCompare) && void 0 !== nz ? nz : bu,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Ez._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: pz ? "back" : "none"
            }
          },
          Fz = bz.resting ? 0 : 1;
        this.compiling += Fz;
        const Zz = "none" === Mz ? this.device.createRenderPipelineAsync(dz) : this.startMaskPipelines(Hz, dz, "edge" === Mz);
        Zz.then((uz => {
          this.compiling -= Fz, this.pipelines.set(zz, uz)
        }), (zz => {
          this.compiling -= Fz, console.error(`Lite terrain pipeline ${iz} failed`, zz), UM(bz, iz, Hz, zz)
        }));
        const Rz = {
          name: iz,
          module: Hz,
          built: Zz
        };
        return this.builds.set(zz, Rz), Rz
      }
      startMaskPipelines(zz, uz, bz) {
        const Ez = uz.depthStencil,
          nz = this.device.createRenderPipelineAsync(bz ? uz : {
            ...uz,
            depthStencil: {
              ...Ez,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          iz = this.device.createRenderPipelineAsync({
            ...uz,
            label: `${uz.label}-prepass`,
            fragment: {
              module: zz,
              entryPoint: "prepassFragment",
              targets: [{
                format: AM
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([nz, iz]).then((zz => {
          let [uz, bz] = zz;
          return this.prepassOf.set(uz, bz), this.maskPipelines++, uz
        }))
      }
      failedPackBuild(zz, uz, bz, Ez) {
        console.error(`Lite terrain pipeline ${bz} failed`, Ez), UM(uz, bz, null, Ez);
        const nz = Promise.reject(Ez);
        nz.catch((() => {}));
        const iz = {
          name: bz,
          module: null,
          built: nz
        };
        return this.builds.set(zz, iz), iz
      }
      checkShaderPack(zz) {
        return mM(zz, {
          device: this.device,
          target: this.target,
          material: zz => this.materialFor(zz),
          programKey: (zz, uz, bz) => this.programKey(zz, uz, bz),
          pipelineBuild: (zz, uz, bz) => this.pipelineBuild(zz, uz, bz)
        })
      }
      createBinding(zz, uz, bz) {
        return this.target = uz, {
          renderable: zz,
          pipeline: lu(this.device, uz),
          draw: zz => {
            this.geometry.setDrawing(!0);
            try {
              return bz ? this.drawTransparent(zz, uz) : this.drawOpaque(zz, uz)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(zz, uz) {
        var bz, Ez, nz, iz;
        const {
          Gd: lz
        } = zz;
        this.lighting = zz.EK;
        const Mz = (0, RM.x)(uz);
        this.dirLightCount = Math.min(Mz, 4), this.JZ = null !== (bz = lz.JZ) && void 0 !== bz ? bz : null, Mz > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(zz, uz), this.animateMaterials(uz.animTick);
        const tz = lz.kd,
          Hz = tz[0] !== this.originOffset[0] || tz[1] !== this.originOffset[1] || tz[2] !== this.originOffset[2];
        Hz && (this.originOffset[0] = tz[0], this.originOffset[1] = tz[1], this.originOffset[2] = tz[2]);
        const Oz = uz.eye;
        this.eye[0] = Oz[0], this.eye[1] = Oz[1], this.eye[2] = Oz[2], this.writeShaderPackInputs();
        const pz = uz.projectionMatrix,
          dz = 0 === pz[15];
        let Fz = 0;
        (Hz || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Zz
        } = this;
        Mu(this.transparentRenderable._worldCenter, uz, nu), this.resetBatches(dz), this.transparent.length = 0, this.unlit.length = 0;
        const Rz = lz.xd.B5,
          Kz = Rz / 2 * Math.sqrt(3);
        let wz = 0;
        const Xz = !!this.JZ && nE(this.JZ.defineFor("liquid"));
        let fz = !1;
        const sz = null !== (Ez = null === (nz = lz.mN) || void 0 === nz ? void 0 : nz.visibility) && void 0 !== Ez ? Ez : null,
          rz = this.visCull && dz && 0 === this.compiling && null !== sz && lz.xd.Gbz[0] >= this.visCullMinDistance ? this.target : null,
          oz = this.visPassable,
          Nz = this.visCandidates,
          vz = this.visCandidateBatches;
        oz.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let xz = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Jz = 0;
        const Az = (zz, bz) => {
          if (!bz) return this.transparent.push(zz), void(Jz += 2 * zz.faceCount);
          if (null !== zz.faceGroups && bz.faceCull) {
            if (0 === Fz && (Fz = (0, gM.b)(pz, uz.renderWidth, uz.renderHeight), Fz !== this.faceFocalPx && (this.faceFocalPx = Fz, Zz = ++this.faceEpoch)), zz.faceEpoch !== Zz) {
              zz.faceEpoch = Zz;
              const uz = Math.sqrt(zz.distance) + Kz,
                bz = (0, gM.h)(zz.planePX, zz.planeNX, zz.planePY, zz.planeNY, zz.planePZ, zz.planeNZ, this.eye[0] - (zz.origin[0] - this.originOffset[0]), this.eye[1] - (zz.origin[1] - this.originOffset[1]), this.eye[2] - (zz.origin[2] - this.originOffset[2]), (0, gM.d)(uz, Fz));
              bz !== zz.faceMask && this.chooseFaceRanges(zz, zz.faceGroups, bz)
            }
            if (0 === zz.rangeCount) return
          } else - 1 !== zz.faceMask && this.drawWhole(zz);
          bz.meshes.push(zz), Jz += 2 * ((zz.rangeCount > 0 ? zz.count0 : 0) + (zz.rangeCount > 1 ? zz.count1 : 0))
        };
        for (const Lz of this.chunks.values()) {
          Hz && this.writeSlot(Lz);
          const zz = Lz.mesh.visibility;
          zz !== Lz.visibility && (Lz.visibility = zz, this.slots.setVisibility(Lz.slot, zz));
          const {
            material: bz
          } = Lz;
          this.geometry.lost(Lz) && performance.now() >= Lz.lostRetryAt && this.remeshLost(lz, Lz);
          const Ez = !(null === bz || void 0 === bz || !bz.bindGroup) && this.geometry.backed(Lz),
            nz = Ez && this.lighting && !Lz.vertices.page.twin;
          if (rz && (Number.isNaN(Lz.key) && (Lz.ci = Math.floor(Lz.origin[0] / Rz), Lz.cj = Math.floor(Lz.origin[1] / Rz), Lz.ck = Math.floor(Lz.origin[2] / Rz), Lz.key = (0, yM.h)(Lz.ci, Lz.cj, Lz.ck)), (!Ez || zz < 1 || nz || !this.batchDraws(bz, Lz.packed, rz)) && this.visSeeThrough(Lz, rz) && oz.add(Lz.key)), !Ez) continue;
          nz || (Lz.lostRemeshes = 0);
          const iz = Lz.origin[0] - this.originOffset[0],
            Mz = Lz.origin[1] - this.originOffset[1],
            tz = Lz.origin[2] - this.originOffset[2];
          if (!(0, EM.b)(uz.frustum, iz, Mz, tz, Rz)) continue;
          const Oz = iz + Rz / 2 - this.eye[0],
            pz = Mz + Rz / 2 - this.eye[1],
            Fz = tz + Rz / 2 - this.eye[2];
          if (Lz.distance = Oz * Oz + pz * pz + Fz * Fz, this.lighting && !Lz.lit && (wz = Math.max(wz, Lz.vertexCount), this.unlit.push(Lz)), nz) continue;
          const Zz = this.isBlended(bz) ? null : this.batchFor(bz, Lz.packed, Lz.vertices.page, 1 === zz, dz);
          rz ? (Nz[xz] = Lz, vz[xz++] = Zz) : Az(Lz, Zz)
        }
        const Tz = rz ? this.sweepVisibility(zz, uz, sz) : null;
        null === (iz = (0, ai.w)(lz)) || void 0 === iz || iz.update(uz.frustum, this.originOffset, Rz, Tz);
        for (let Lz = 0; Lz < xz; Lz++) {
          const zz = Nz[Lz];
          !Tz || Tz.isDrawn(zz.ci, zz.cj, zz.ck) ? Az(zz, vz[Lz]) : (this.visCulledParts++, this.visCulledTriangles += 2 * zz.faceCount)
        }
        for (const Lz of this.transparent) fz ||= Xz && Lz.material.liquid && !Lz.material.customRenderMat;
        this.submittedTriangles = Jz, Tz && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(zz, uz, Tz)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(fz) : fz && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && wz > 0 && this.geometry.lightFullSky(this.unlit, wz);
        for (const Lz of this.opaqueBatches) this.chunkSorter.sort(Lz.meshes, 1) || Lz.meshes.sort(kM);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(zt)
      }
      sweepVisibility(zz, uz, bz) {
        const {
          xd: Ez
        } = zz.Gd, nz = Ez.B5, iz = this.visPassable, lz = this.eye[0] + this.originOffset[0], Mz = this.eye[1] + this.originOffset[1], tz = this.eye[2] + this.originOffset[2];
        if (!bz.eyeClear(lz, Mz, tz, uz.near, uz.projectionMatrix, Ez)) return null;
        const [Hz, Oz] = Ez.Gbz, pz = bz.update(lz, Mz, tz, nz, Hz, Oz, iz);
        return this.visSweeps = bz.sweeps, pz ? bz : null
      }
      visSeeThrough(zz, uz) {
        const {
          material: bz
        } = zz;
        return (!bz || !this.isBlended(bz)) && (zz.mesh.visibility < 1 || !(null !== bz && void 0 !== bz && bz.bindGroup) || zz.faceCount > 0 && (!this.geometry.backed(zz) || this.lighting && !zz.vertices.page.twin) || !this.batchDraws(bz, zz.packed, uz))
      }
      batchDraws(zz, uz, bz) {
        var Ez;
        const nz = uz ? 2 : 0;
        if (zz === this.visDrawsMaterial && function(zz, uz) {
            return 0 !== (zz & 1 << uz)
          }(this.visDrawsBits, nz)) return 0 !== (this.visDrawsBits & 2 << nz);
        let iz = null !== (Ez = this.visBatchDraws.get(zz)) && void 0 !== Ez ? Ez : 0;
        if (!(iz & 1 << nz)) {
          iz |= 1 << nz | (!!zz.bindGroupLayout && this.canDraw(zz, uz) && !!this.pipelines.get(this.pipelineId(zz, this.programKey(zz, uz), bz)) ? 2 << nz : 0), this.visBatchDraws.set(zz, iz)
        }
        return this.visDrawsMaterial = zz, this.visDrawsBits = iz, 0 !== (iz & 2 << nz)
      }
      runVisCheck(zz, uz, bz) {
        const {
          Gd: Ez
        } = zz, {
          xd: nz
        } = Ez, iz = nz.B5, lz = new Set;
        for (const Fz of this.chunks.values()) lz.add(Fz.key);
        const Mz = rn.Matrix.FromArray(uz.viewProjectionMatrix).invert(),
          [tz, Hz, Oz] = this.originOffset,
          pz = new rn.ER,
          dz = function(zz, uz, bz, Ez) {
            const nz = new Set;
            for (let iz = 0; iz < 27; iz++)
              for (let lz = 0; lz < 48; lz++) {
                const Mz = bz((lz + .5) / 48 * 2 - 1, (iz + .5) / 27 * 2 - 1);
                DM(zz, uz, [Mz[0] - uz[0], Mz[1] - uz[1], Mz[2] - uz[2]], Ez, nz)
              }
            return nz
          }({
            IU: (zz, uz, bz) => nz.IU(zz, uz, bz),
            occluders: bz.occluders,
            opaque: bz.opaque,
            IZ: iz,
            isDrawn: (zz, uz, Ez) => bz.isDrawn(zz, uz, Ez),
            hasParts: (zz, uz, bz) => lz.has((0, yM.h)(zz, uz, bz))
          }, [this.eye[0] + tz, this.eye[1] + Hz, this.eye[2] + Oz], ((zz, uz) => (rn.ER.TransformCoordinatesFromFloatsToRef(zz, uz, .5, Mz, pz), [pz.x + tz, pz.y + Hz, pz.z + Oz])), (nz.Gbz[0] + 1) * iz);
        this.visViolations = dz.size;
        for (const Fz of dz) this.warnOnce(`vis:${Fz}`, `Lite terrain cave culling skipped chunk ${Fz}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var zz;
        null !== (zz = this.JZ) && void 0 !== zz && zz.isRunning() && (this.shaderPackInputs ??= new ei(this.device, this.JZ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.JZ, this.eye, this.lighting))
      }
      bindShaderPackInputs(zz, uz, bz) {
        var Ez, nz, iz, lz;
        let Mz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: tz
        } = this.shaderPackFields(uz, bz);
        if (void 0 === tz) return;
        this.shaderPackInputs || (this.shaderPackInputs = new ei(this.device, bz.textureLayers(), this.sunShadow), this.shaderPackInputs.write(bz, this.eye, this.lighting));
        const Hz = nE(tz) ? null !== (Ez = null === (nz = this.sceneDepth) || void 0 === nz ? void 0 : nz.view) && void 0 !== Ez ? Ez : this.standIn() : null,
          Oz = Mz ? null !== (iz = null === (lz = this.shadowMask) || void 0 === lz ? void 0 : lz.view) && void 0 !== iz ? iz : this.standIn() : null;
        this.shaderPackInputs.bind(zz, Hz, Qi(tz, !!this.sunShadow), Oz)
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
        var zz, uz;
        return null !== (zz = null === (uz = this.shaderPackInputs) || void 0 === uz ? void 0 : uz.bindGroupFor(null, !0)) && void 0 !== zz ? zz : null
      }
      resetBatches(zz) {
        const uz = this.opaqueBatches;
        let bz = 0;
        for (const Ez of uz) Ez.meshes.length > 0 && (Ez.meshes.length = 0, Ez.faceCull = this.batchFaceCull(Ez.material, zz), uz[bz++] = Ez);
        uz.length = bz
      }
      orderBatches() {
        const zz = this.opaqueBatches;
        for (let uz = 0; uz < zz.length; uz++) {
          const bz = zz[uz];
          bz.group = uz;
          for (let Ez = 0; Ez < uz; Ez++) {
            const uz = zz[Ez];
            if (uz.material === bz.material && uz.packed === bz.packed) {
              bz.group = uz.group;
              break
            }
          }
          bz.nearest = bz.meshes.length > 0 ? bz.meshes[0].distance : 1 / 0
        }
        zz.sort(QM)
      }
      batchFor(zz, uz, bz, Ez, nz) {
        for (const lz of this.opaqueBatches)
          if (lz.material === zz && lz.packed === uz && lz.page === bz && lz.resting === Ez) return lz;
        const iz = {
          material: zz,
          packed: uz,
          page: bz,
          resting: Ez,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(zz, nz)
        };
        return this.opaqueBatches.push(iz), iz
      }
      batchFaceCull(zz, uz) {
        return !(!uz || !(0, cM.p)(zz.model)) && (!this.JZ || ! function(zz) {
          var uz;
          return !(null === (uz = (0, Au.e)(zz)) || void 0 === uz || !uz.movesVertices)
        }(this.shaderPackFields(zz, this.JZ).packVariant))
      }
      writeFrameUniforms(zz, uz) {
        const bz = this.frameUniforms,
          Ez = OE;
        if ((0, RM.y)(zz, bz), bz[Ez.fogInfos] = uz.fogEnabled ? uz.fogMode : 0, bz[Ez.fogInfos + 1] = uz.fogStart, bz[Ez.fogInfos + 2] = uz.fogEnd, bz[Ez.fogInfos + 3] = uz.fogDensity, bz.set(uz.fogColour, Ez.fogColour), bz[Ez.outputHeight] = uz.renderHeight, bz.set(uz.ambientColour, Ez.sceneAmbient), (0, RM.v)(uz, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const uz = (0, KM.f)(zz.vR, zz.YZ, zz.kZ);
          for (let zz = 0; zz < 4; zz++) bz[Ez.aoLevels + zz] = uz[zz] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, bz)
      }
      animateMaterials(zz) {
        const uz = dE.anim;
        for (const bz of this.materials.values()) bz.animated && (bz.uniformData[uz] = zz, this.device.queue.writeBuffer(bz.uniformBuffer, 4 * uz, bz.uniformData, uz, 1))
      }
      canDraw(zz, uz) {
        return !("atlas" === zz.texture && !uz) || (this.warnOnce(`stride:${zz.id}`, `Lite terrain: material "${zz.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(zz, uz) {
        let bz = 0;
        zz.setBindGroup(1, this.frameBindGroup);
        for (const Ez of this.opaqueBatches) {
          if (!Ez.meshes.length || !this.canDraw(Ez.material, Ez.packed)) continue;
          const nz = this.pipelineFor(Ez.material, Ez.packed, uz, Ez.resting);
          nz && (zz.setPipeline(nz), zz.setBindGroup(2, Ez.material.bindGroup), this.JZ && this.bindShaderPackInputs(zz, Ez.material, this.JZ, this.prepassOf.has(nz)), bz += this.drawBatch(zz, Ez))
        }
        return bz
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(zz, uz, bz) {
        const Ez = this.target,
          nz = this.JZ;
        if (!Ez || !nz || 0 === this.maskPipelines) return 0;
        let iz = 0,
          lz = null;
        this.geometry.setDrawing(!0);
        try {
          for (const Mz of this.opaqueBatches) {
            if (!Mz.meshes.length || !this.canDraw(Mz.material, Mz.packed)) continue;
            const tz = this.pipelineFor(Mz.material, Mz.packed, Ez, Mz.resting),
              Hz = tz && this.prepassOf.get(tz);
            Hz && (lz || (lz = zz.beginRenderPass(uz), lz.setBindGroup(0, bz), lz.setBindGroup(1, this.frameBindGroup)), lz.setPipeline(Hz), lz.setBindGroup(2, Mz.material.bindGroup), this.bindShaderPackInputs(lz, Mz.material, nz, !0), iz += this.drawBatch(lz, Mz))
          }
        } finally {
          var Mz;
          null === (Mz = lz) || void 0 === Mz || Mz.end(), this.geometry.setDrawing(!1)
        }
        return iz
      }
      drawBatch(zz, uz) {
        let bz = 0;
        for (const Ez of uz.meshes) {
          const {
            rangeCount: uz
          } = Ez;
          uz > 0 && (bz += this.geometry.draw(zz, Ez, this.lighting, Ez.first0, Ez.count0), uz > 1 && (bz += this.geometry.draw(zz, Ez, this.lighting, Ez.first1, Ez.count1)))
        }
        return bz
      }
      drawTransparent(zz, uz) {
        let bz = 0,
          Ez = null,
          nz = null;
        zz.setBindGroup(1, this.frameBindGroup);
        for (const iz of this.transparent) {
          const lz = iz.material;
          if (!this.canDraw(lz, iz.packed)) continue;
          const Mz = this.pipelineFor(lz, iz.packed, uz);
          Mz && (Mz !== Ez && (zz.setPipeline(Mz), Ez = Mz, this.JZ && this.bindShaderPackInputs(zz, lz, this.JZ)), lz !== nz && (zz.setBindGroup(2, lz.bindGroup), nz = lz), bz += this.geometry.draw(zz, iz, this.lighting))
        }
        return bz
      }
    }

    function YM(zz, uz, bz, Ez) {
      return `${TE(zz)}|${zz.atlasLayers}|${zz.uC}|${uz}|${bz}|${Ez._colorFormat}|${Ez._depthStencilFormat}|${Ez._sampleCount}`
    }

    function kM(zz, uz) {
      return zz.distance - uz.distance
    }

    function zt(zz, uz) {
      return uz.distance - zz.distance
    }
    class ut {
      constructor() {
        this.left = []
      }
      sort(zz, uz) {
        for (let bz = 0; bz < zz.length; bz++) {
          const uz = zz[bz].distance;
          if (uz - uz !== 0) return !1
        }
        return this.sortRange(zz, 0, zz.length, uz), !0
      }
      sortRange(zz, uz, bz, Ez) {
        if (bz - uz <= 16) {
          for (let nz = uz + 1; nz < bz; nz++) {
            const bz = zz[nz],
              iz = Ez * bz.distance;
            let lz = nz - 1;
            for (; lz >= uz && Ez * zz[lz].distance > iz; lz--) zz[lz + 1] = zz[lz];
            zz[lz + 1] = bz
          }
          return
        }
        const nz = uz + bz >>> 1;
        if (this.sortRange(zz, uz, nz, Ez), this.sortRange(zz, nz, bz, Ez), Ez * zz[nz - 1].distance <= Ez * zz[nz].distance) return;
        const {
          left: iz
        } = this, lz = nz - uz;
        for (let Oz = 0; Oz < lz; Oz++) iz[Oz] = zz[uz + Oz];
        let Mz = 0,
          tz = nz,
          Hz = uz;
        for (; Mz < lz && tz < bz;) zz[Hz++] = Ez * zz[tz].distance < Ez * iz[Mz].distance ? zz[tz++] : iz[Mz++];
        for (; Mz < lz;) zz[Hz++] = iz[Mz++]
      }
    }
    const bt = Math.ceil(102);

    function Et(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uz;
      const iz = Math.min(uz, bz),
        lz = new Uint32Array(zb(Ez));
      for (let Mz = 0; Mz < Ez; Mz++) {
        const uz = Math.floor(Mz * iz / Ez),
          bz = Math.max(uz + 1, Math.floor((Mz + 1) * iz / Ez));
        for (let tz = 0; tz < Ez; tz++) {
          const Hz = Math.floor(tz * iz / Ez),
            Oz = Math.max(Hz + 1, Math.floor((tz + 1) * iz / Ez));
          let pz = 0;
          for (let Ez = uz; Ez < bz; Ez++)
            for (let uz = Hz; uz < Oz; uz++) zz[Ez * nz + uz] >= bt && pz++;
          if (2 * pz >= (bz - uz) * (Oz - Hz)) {
            const zz = tz + Ez * Mz;
            lz[zz >>> 5] |= 1 << (31 & zz)
          }
        }
      }
      return lz
    }

    function nt(zz) {
      return Math.max(1, Math.min(16, zz))
    }
    class it {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = zz, this.loadTexture = uz, this.warn = bz, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(zz, uz) {
        return (zz.hV !== this.builtVersion || this.blockCaster.length !== uz) && (this.build(zz, uz), !0)
      }
      build(zz, uz) {
        this.builtVersion = zz.hV;
        const bz = new Uint16Array(uz),
          Ez = new Map;
        for (let nz = 1; nz < uz; nz++) {
          const uz = this.classify(zz, nz, Ez);
          if (null === uz || uz === Iu) {
            bz[nz] = null === uz ? 0 : Iu;
            continue
          }
          let iz = this.byKey.get(uz.key);
          void 0 === iz && (iz = this.allocate(uz), this.byKey.set(uz.key, iz)), bz[nz] = iz
        }
        this.blockCaster = bz, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(zz, uz) {
        const bz = zz.bY[uz];
        if ("function" !== typeof bz) return bz;
        try {
          return bz()
        } catch (Ez) {
          return this.warnOnce(`Sun shadows: no caster option for block ${uz}: ${Ez instanceof Error?Ez.message:String(Ez)}`), null
        }
      }
      classify(zz, uz, bz) {
        const Ez = this.option(zz, uz);
        if ("none" === Ez) return null;
        if (Ez && Ez.planes.length > 0) {
          const zz = Ez.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(zz)}`,
            planes: zz
          }
        }
        if (zz.qF[uz]) return null;
        const nz = zz.UF[uz] ? zz.yV(uz) : null;
        if (nz && nz.length >= 6) {
          const zz = function(zz) {
            const uz = new Uint32Array(16);
            for (let bz = 0; bz + 6 <= zz.length; bz += 6) {
              const Ez = [0, 1, 2].map((uz => Math.max(0, Math.ceil(8 * zz[bz + uz] - .5)))),
                nz = [0, 1, 2].map((uz => Math.min(7, Math.floor(8 * zz[bz + uz + 3] - .5))));
              for (let zz = Ez[2]; zz <= nz[2]; zz++)
                for (let bz = Ez[1]; bz <= nz[1]; bz++)
                  for (let iz = Ez[0]; iz <= nz[0]; iz++) {
                    const Ez = iz + 8 * (bz + 8 * zz);
                    uz[Ez >>> 5] |= 1 << (31 & Ez)
                  }
            }
            return uz
          }(nz);
          return function(zz) {
            return zz.every((zz => 4294967295 === zz))
          }(zz) ? Iu : zz.every((zz => 0 === zz)) ? null : {
            kind: "shape",
            key: `shape:${zz.join(",")}`,
            mask: zz
          }
        }
        if (zz.qm[uz] || !zz.xR[uz]) return null;
        const iz = [0, 1, 2, 3, 4, 5].map((Ez => {
          const nz = zz.JR[6 * uz + Ez];
          let iz = bz.get(nz);
          return void 0 === iz && (iz = function(zz) {
            if (!zz || zz.qR) return null;
            const {
              zC: uz,
              uC: bz,
              YB: Ez
            } = zz;
            if (!uz || !bz || !(bz > 0) || void 0 === Ez || !(Ez >= 0)) return null;
            const nz = uz[0],
              iz = bz * bz * 4;
            if (!nz || nz.byteLength < iz) return null;
            const lz = Math.floor(nz.byteLength / iz),
              Mz = uz[Math.floor(Ez / lz)];
            if (!Mz) return null;
            const tz = new Uint8Array(Mz.buffer, Mz.byteOffset, Mz.byteLength),
              Hz = Ez % lz * iz;
            if (Hz + iz > tz.length) return null;
            const Oz = new Uint8Array(bz * bz);
            let pz = !1;
            for (let dz = 0; dz < Oz.length; dz++) Oz[dz] = tz[Hz + 4 * dz + 3], pz ||= Oz[dz] < bt;
            return pz ? {
              alpha: Oz,
              width: bz
            } : null
          }(zz.mR(nz)), bz.set(nz, iz)), iz
        }));
        if (iz.every((zz => null === zz))) return Iu;
        const lz = nt(Math.max(...iz.map((zz => {
            var uz;
            return null !== (uz = null === zz || void 0 === zz ? void 0 : zz.width) && void 0 !== uz ? uz : 1
          })))),
          Mz = new Uint32Array(zb(lz)).fill(4294967295),
          tz = iz.map((zz => null === zz ? Mz : Et(zz.alpha, zz.width, zz.width, lz)));
        return {
          kind: "cutout",
          key: `cutout:${lz}:${tz.map((zz=>zz.join(","))).join("|")}`,
          size: lz,
          faces: tz
        }
      }
      allocate(zz) {
        if (this.nextCaster >= ub) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const uz = this.nextCaster++;
        if (this.writeCaster(uz, Bu, 0, 0, 0), "shape" === zz.kind) {
          const bz = this.allocateMask(zz.mask.length);
          bz >= 0 && (this.sink(bz, zz.mask), this.writeCaster(uz, Cu, bz, 0, 8))
        } else if ("cutout" === zz.kind) {
          const bz = zb(zz.size),
            Ez = this.allocateMask(6 * bz);
          if (Ez >= 0) {
            const nz = new Uint32Array(6 * bz);
            zz.faces.forEach(((zz, uz) => {
              nz.set(zz, uz * bz)
            })), this.sink(Ez, nz), this.writeCaster(uz, ku, Ez, 0, zz.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(uz, zz.planes).finally((() => {
          this.planesLoading--
        })));
        return uz
      }
      async loadPlanes(zz, uz) {
        const bz = await Promise.all(uz.map((zz => this.texture(zz.texture))));
        if (bz.some((zz => null === zz))) return;
        const Ez = bz,
          nz = nt(Math.max(...Ez.map((zz => Math.min(zz.width, zz.height))))),
          iz = zb(nz),
          lz = this.allocateMask(uz.length * (4 + iz));
        if (lz < 0) return;
        const Mz = new Uint32Array(uz.length * (4 + iz)),
          tz = 4 * uz.length;
        uz.forEach(((zz, uz) => {
          const bz = lz + tz + uz * iz;
          Mz.set(function(zz, uz) {
            const [bz, Ez] = zz.tangent, nz = Math.hypot(bz, Ez) || 1, iz = bz / nz, lz = Ez / nz, Mz = zz.centre[0] * lz - zz.centre[1] * iz, tz = new Uint32Array(4);
            return new Float32Array(tz.buffer, 0, 3).set([iz, lz, Mz]), tz[3] = uz, tz
          }(zz, bz), 4 * uz), Mz.set(Et(Ez[uz].alpha, Ez[uz].width, Ez[uz].height, nz), tz + uz * iz)
        })), this.sink(lz, Mz), this.writeCaster(zz, Yu, lz, uz.length, nz)
      }
      texture(zz) {
        let uz = this.textures.get(zz);
        return uz || (uz = this.loadTexture(zz).catch((uz => (this.warn(`Sun shadows: no mask for ${zz}: ${uz instanceof Error?uz.message:String(uz)}`), null))), this.textures.set(zz, uz)), uz
      }
      allocateMask(zz) {
        if (this.nextMaskWord + zz > bb) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const uz = 32768 + this.nextMaskWord;
        return this.nextMaskWord += zz, uz
      }
      writeCaster(zz, uz, bz, Ez, nz) {
        this.sink(0 + 4 * zz, Uint32Array.of(uz, bz, Ez, nz))
      }
      warnOnce(zz) {
        this.warned.has(zz) || (this.warned.add(zz), this.warn(zz))
      }
    }
    var lt = bz(37177);

    function Mt(zz) {
      return !zz.UR && !zz.sEz && !zz.RR
    }

    function tt() {
      return {
        bricks: new Uint32Array(gu),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Uu)
      }
    }
    class Ht {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = zz, this.writeVoxels = uz, this.writePool = bz, this.warn = Ez, this.eyeChunk = null, this.slotChunk = new Array(Gu).fill(null), this.slotVersion = new Float64Array(Gu).fill(-1), this.slotPool = new Array(Gu).fill(null), this.starved = new Uint8Array(Gu), this.queue = [], this.queued = new Uint8Array(Gu), this.queueSorted = !0, this.freePool = new Uint32Array(Eb), this.freeCount = Eb, this.casterTable = null, this.warnedPool = !1, this.scratch = tt(), this.victimScratch = tt(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Gu), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let nz = 0; nz < Eb; nz++) this.freePool[nz] = 65535 - nz
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Eb - this.freeCount
      }
      chunkAdded(zz) {
        if (null === this.eyeChunk || !this.inRadius(zz.i, zz.j, zz.k)) return;
        const uz = Wu(zz.i, zz.j, zz.k);
        this.slotChunk[uz] = zz, this.slotVersion[uz] = -1, this.enqueue(uz)
      }
      update(zz, uz, bz) {
        const Ez = this.casters.blockCaster;
        if (Ez !== this.casterTable) {
          this.casterTable = Ez;
          for (let zz = 0; zz < Gu; zz++) this.slotVersion[zz] = -1, this.slotChunk[zz] && this.enqueue(zz)
        }
        const nz = Math.floor(zz[0] / 32),
          iz = Math.floor(zz[1] / 32),
          lz = Math.floor(zz[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== nz || this.eyeChunk[1] !== iz || this.eyeChunk[2] !== lz) && (this.eyeChunk = [nz, iz, lz], this.follow(uz), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let Mz = 0; Mz < Gu; Mz++) {
          const zz = this.slotChunk[Mz];
          zz && (zz.Uuz || zz.XR !== this.slotVersion[Mz]) && this.enqueue(Mz)
        }
        this.drain(bz), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(zz, uz) {
        this.records.set(uz, 4 * zz), this.windowTopStale = !0, this.writeVoxels(4 * zz, uz)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const zz = this.records;
        let uz = -1 / 0;
        for (let Ez = 0; Ez < zz.length; Ez += 4) {
          const bz = 255 & zz[Ez + 3];
          bz !== mu && bz !== qu || !this.inRadius(zz[Ez], zz[Ez + 1], zz[Ez + 2]) || (uz = Math.max(uz, zz[Ez + 1] * Tu + (zz[Ez + 3] >>> 8)))
        }
        const bz = uz === -1 / 0 ? 1 : uz + yu;
        bz !== this.windowTop[0] && (this.windowTop[0] = bz, this.writeVoxels(Su, this.windowTop))
      }
      follow(zz) {
        const uz = this.eyeChunk,
          [bz, Ez, nz] = Lu;
        for (let lz = -nz; lz <= nz; lz++)
          for (let nz = -Ez; nz <= Ez; nz++)
            for (let Ez = -bz; Ez <= bz; Ez++) {
              var iz;
              const bz = uz[0] + Ez,
                Mz = uz[1] + nz,
                tz = uz[2] + lz,
                Hz = Wu(bz, Mz, tz),
                Oz = this.slotChunk[Hz];
              if (Oz && !Oz.Uuz && Oz.i === bz && Oz.j === Mz && Oz.k === tz) continue;
              const pz = null !== (iz = zz(bz, Mz, tz)) && void 0 !== iz ? iz : null;
              Oz && (Oz.i !== bz || Oz.j !== Mz || Oz.k !== tz) && this.slotPool[Hz] && (this.release(Hz), this.record.fill(0), this.writeRecord(Hz, this.record)), this.slotChunk[Hz] = pz, this.slotVersion[Hz] = -1, (pz || Oz) && this.enqueue(Hz)
            }
      }
      requeueStarved() {
        for (let zz = 0; zz < Gu; zz++) this.starved[zz] && this.slotChunk[zz] && this.enqueue(zz)
      }
      enqueue(zz) {
        this.queued[zz] || (this.queued[zz] = 1, this.queue.push(zz), this.queueSorted = !1)
      }
      drain(zz) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const zz = new Map;
          for (const uz of this.queue) zz.set(uz, this.slotDistance(uz));
          this.queue.sort(((uz, bz) => zz.get(bz) - zz.get(uz))), this.queueSorted = !0
        }
        const uz = performance.now();
        let bz = 0;
        const Ez = [];
        for (; this.queue.length > 0 && (0 === bz || performance.now() - uz < zz);) {
          const zz = this.queue.pop(),
            uz = this.slotChunk[zz];
          !uz || uz.Uuz || Mt(uz) ? (this.queued[zz] = 0, this.encodeSlot(zz), bz++) : Ez.push(zz)
        }
        for (let nz = Ez.length - 1; nz >= 0; nz--) this.queue.push(Ez[nz])
      }
      slotDistance(zz) {
        const uz = this.slotChunk[zz],
          bz = this.eyeChunk;
        return uz ? Math.max(Math.abs(uz.i - bz[0]), Math.abs(uz.j - bz[1]), Math.abs(uz.k - bz[2])) : 0
      }
      inRadius(zz, uz, bz) {
        const Ez = this.eyeChunk,
          [nz, iz, lz] = Lu;
        return Math.abs(zz - Ez[0]) <= nz && Math.abs(uz - Ez[1]) <= iz && Math.abs(bz - Ez[2]) <= lz
      }
      release(zz) {
        const uz = this.slotPool[zz];
        if (uz) {
          for (let zz = uz.length - 1; zz >= 0; zz--) this.freePool[this.freeCount++] = uz[zz];
          this.slotPool[zz] = null
        }
      }
      encodeSlot(zz) {
        var uz, bz, Ez, nz, iz;
        let lz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          Mz = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const tz = null !== (uz = null === (bz = this.slotPool[zz]) || void 0 === bz ? void 0 : bz.length) && void 0 !== uz ? uz : 0;
        this.release(zz), this.starved[zz] = 0;
        const Hz = this.slotChunk[zz],
          Oz = this.record;
        if (!Hz || Hz.Uuz || !Hz.nF) return this.slotChunk[zz] = null, this.slotVersion[zz] = -1, Oz.fill(0), this.writeRecord(zz, Oz), void(tz > 0 && this.requeueStarved());
        this.slotVersion[zz] = Hz.XR;
        const pz = this.encodeBricks(Hz, zz, lz, Mz);
        Oz[0] = Hz.i, Oz[1] = Hz.j, Oz[2] = Hz.k, Oz[3] = pz, this.writeRecord(zz, Oz), null === (Ez = this.encoded) || void 0 === Ez || Ez.call(this, Hz), Mz && (null !== (nz = null === (iz = this.slotPool[zz]) || void 0 === iz ? void 0 : iz.length) && void 0 !== nz ? nz : 0) < tz && this.requeueStarved()
      }
      encodeBricks(zz, uz, bz, Ez) {
        if (zz.hZ) return Vu;
        const nz = this.casters.blockCaster,
          {
            data: iz,
            stride: lz,
            offset: Mz
          } = zz.nF,
          [tz, Hz, Oz] = lz,
          pz = Tu,
          {
            bricks: dz,
            cells: Fz,
            special: Zz
          } = bz;
        dz.fill(0), Zz.fill(0);
        let Rz = 0,
          Kz = 0,
          wz = 0;
        for (let Xz = 0; Xz < pz; Xz++) {
          const uz = Xz >> 2,
            bz = 3 & Xz,
            Ez = zz.bZ[Xz],
            lz = Ez === lt.c ? -1 : Ez < nz.length ? nz[Ez] : 0;
          if (0 !== lz)
            for (let zz = 0; zz < pz; zz++) {
              const Ez = zz >> 2,
                fz = 3 & zz;
              let sz = Mz + zz * tz + Xz * Hz;
              for (let zz = 0; zz < pz; zz++, sz += Oz) {
                let Mz = lz;
                if (Mz < 0) {
                  const zz = iz[sz];
                  if (Mz = zz < nz.length ? nz[zz] : 0, 0 === Mz) continue
                }
                const tz = eu(Ez, uz, zz >> 2),
                  Hz = ju(fz, bz, 3 & zz);
                dz[3 * tz + (Hz >>> 5)] |= 1 << (31 & Hz), Fz[tz * hu + Hz] = Mz, Rz++, wz = Xz, Mz === Iu ? Kz++ : Zz[tz] = 1
              }
            }
        }
        return 0 === Rz ? Vu : 32768 === Kz ? mu | wz << 8 : (this.writePoolEntries(uz, bz, Ez), this.writeVoxels(cu + uz * gu, dz), qu | wz << 8)
      }
      writePoolEntries(zz, uz, bz) {
        const {
          bricks: Ez,
          cells: nz,
          special: iz
        } = uz, lz = this.entry;
        let Mz = 0;
        for (let Oz = 0; Oz < Uu; Oz++) Mz += iz[Oz];
        if (0 === Mz) return;
        bz && this.freeCount < Mz && this.evictBeyond(zz, Mz);
        const tz = new Uint32Array(bz ? Math.min(Mz, this.freeCount) : 0);
        let Hz = 0;
        for (let Oz = 0; Oz < Uu; Oz++) {
          if (!iz[Oz]) continue;
          const bz = 3 * Oz;
          if (Hz === tz.length) {
            this.dropSpecials(uz, Oz), this.starved[zz] = 1;
            continue
          }
          const Mz = this.freePool[--this.freeCount];
          tz[Hz++] = Mz;
          for (let zz = 0; zz < hu; zz++) {
            const uz = Ez[bz + (zz >>> 5)] >>> (31 & zz) & 1 ? nz[Oz * hu + zz] : 0;
            1 & zz ? lz[zz >> 1] |= uz << 16 : lz[zz >> 1] = uz
          }
          Ez[bz + 2] = Mz + 1, this.writePool(nb + 32 * Mz, lz)
        }
        tz.length > 0 && (this.slotPool[zz] = tz)
      }
      evictBeyond(zz, uz) {
        const bz = this.slotDistance(zz),
          Ez = [];
        for (let nz = 0; nz < Gu; nz++) nz !== zz && this.slotPool[nz] && this.slotDistance(nz) > bz && Ez.push(nz);
        Ez.sort(((zz, uz) => this.slotDistance(uz) - this.slotDistance(zz)));
        for (const nz of Ez) {
          if (this.freeCount >= uz) return;
          const zz = this.slotChunk[nz];
          zz && !zz.Uuz && zz.nF && (zz.XR === this.slotVersion[nz] || Mt(zz)) && this.encodeSlot(nz, this.victimScratch, !1)
        }
      }
      dropSpecials(zz, uz) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const bz = 3 * uz;
        for (let Ez = 0; Ez < hu; Ez++) zz.cells[uz * hu + Ez] !== Iu && (zz.bricks[bz + (Ez >>> 5)] &= ~(1 << (31 & Ez)))
      }
    }
    var Ot = bz(36930);
    class pt {
      constructor(zz) {
        this.device = zz, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Rb, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.xd = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = zz.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = zz.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(zz, uz, bz) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Ez
        } = this;
        Ez.QF(zz, uz), bz.forEachSunShadowCaster((zz => {
          this.add(zz)
        })), Ez.finish();
        const nz = 0 === Ez.parts;
        if (nz && this.uploadedEmpty) return;
        this.uploadedEmpty = nz;
        const {
          queue: iz
        } = this.device, {
          words: lz
        } = Ez;
        iz.writeBuffer(this.frameBuffer, 0, lz, 0, 16385), Ez.refs > 0 && iz.writeBuffer(this.frameBuffer, 65540, lz, tb, Ez.refs), nz || iz.writeBuffer(this.frameBuffer, 327684, lz, Hb, Ez.parts * Mb)
      }
      add(zz) {
        const uz = this.gridFor(zz);
        if (!uz) return;
        const {
          frame: bz
        } = this, {
          xd: Ez,
          worldAt: nz,
          instances: iz,
          instanceCount: lz,
          thin: Mz
        } = zz;
        if (iz)
          for (let tz = 0; tz < lz; tz++) Mz ? (wb(iz, 16 * tz, Ez, nz, this.xd), bz.add(uz, this.xd)) : bz.add(uz, iz, 16 * tz);
        else bz.add(uz, Ez, nz)
      }
      gridFor(zz) {
        let {
          geometry: uz,
          indexed: bz,
          first: Ez,
          count: nz,
          skip: iz
        } = zz, lz = this.grids.get(uz);
        lz || (lz = new Map, this.grids.set(uz, lz));
        const Mz = `${bz?Ez:-1-Ez}:${nz}:${null!==iz&&void 0!==iz?iz:""}`;
        let tz = lz.get(Mz);
        if (void 0 !== tz || this.gridsFull) return tz;
        const Hz = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Hz + 2;
        else if (Hz > this.bakeDeadline) return;
        return tz = this.bake(uz, bz, Ez, nz, iz), void 0 !== tz && lz.set(Mz, tz), tz
      }
      bake(zz, uz, bz, Ez, nz) {
        const iz = zz.vertexAttributes.find((zz => "position" === zz.kind)),
          lz = iz ? function(zz, uz, bz, Ez) {
            let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const iz = zz => uz ? uz[bz + zz] : bz + zz,
              lz = zz => null !== nz && [0, 1, 2].some((uz => {
                const bz = iz(zz + uz);
                return bz >= nz[0] && bz < nz[1]
              })),
              Mz = [1 / 0, 1 / 0, 1 / 0],
              tz = [-1 / 0, -1 / 0, -1 / 0];
            for (let Xz = 0; Xz + 2 < Ez; Xz += 3)
              if (!lz(Xz))
                for (let uz = 0; uz < 3; uz++) {
                  const bz = iz(Xz + uz);
                  for (let uz = 0; uz < 3; uz++) Mz[uz] = Math.min(Mz[uz], zz[3 * bz + uz]), tz[uz] = Math.max(tz[uz], zz[3 * bz + uz])
                }
            const Hz = Math.max(tz[0] - Mz[0], tz[1] - Mz[1], tz[2] - Mz[2]);
            if (!(Hz > 0)) return null;
            const Oz = Hz / 64,
              pz = [0, 0, 0],
              dz = [0, 0, 0],
              Fz = [0, 0, 0];
            for (let Xz = 0; Xz < 3; Xz++) pz[Xz] = Math.min(65, Math.ceil((tz[Xz] - Mz[Xz]) / Oz) + 1), dz[Xz] = Mz[Xz] - Oz / 2, Fz[Xz] = dz[Xz] + pz[Xz] * Oz;
            const Zz = new Uint32Array(Math.ceil(pz[0] * pz[1] * pz[2] / 32)),
              Rz = new Float64Array(9),
              Kz = [0, 0, 0],
              wz = [0, 0, 0];
            for (let Xz = 0; Xz + 2 < Ez; Xz += 3)
              if (!lz(Xz)) {
                for (let uz = 0; uz < 3; uz++) {
                  const bz = iz(Xz + uz);
                  for (let Ez = 0; Ez < 3; Ez++) Rz[3 * uz + Ez] = zz[3 * bz + Ez]
                }
                for (let zz = 0; zz < 3; zz++) {
                  const uz = Math.min(Rz[zz], Rz[3 + zz], Rz[6 + zz]),
                    bz = Math.max(Rz[zz], Rz[3 + zz], Rz[6 + zz]);
                  Kz[zz] = Math.max(0, Math.floor((uz - dz[zz]) / Oz - 1e-6)), wz[zz] = Math.min(pz[zz] - 1, Math.floor((bz - dz[zz]) / Oz + 1e-6))
                }
                for (let zz = Kz[2]; zz <= wz[2]; zz++)
                  for (let uz = Kz[1]; uz <= wz[1]; uz++)
                    for (let bz = Kz[0]; bz <= wz[0]; bz++)
                      if (Xb(Rz, dz[0] + (bz + .5) * Oz, dz[1] + (uz + .5) * Oz, dz[2] + (zz + .5) * Oz, Oz / 2)) {
                        const Ez = bz + pz[0] * (uz + pz[1] * zz);
                        Zz[Ez >>> 5] |= 1 << (31 & Ez)
                      }
              } return {
              words: Zz,
              lo: dz,
              hi: Fz,
              cell: Oz,
              dims: pz
            }
          }((0, Ot.g)(iz, zz.vertexCount), uz ? zz.indexData : null, bz, Ez, nz) : null;
        if (!lz) return null;
        const {
          words: Mz,
          ...tz
        } = lz;
        if (this.gridTop + Mz.length > pb) return void(this.gridsFull = !0);
        const Hz = this.gridTop;
        return this.gridTop += Mz.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Hz, Mz), {
          ...tz,
          at: Hz
        }
      }
    }
    const dt = Math.cos(1 * Math.PI / 180);

    function Ft(zz, uz) {
      return zz[0] * uz[0] + zz[1] * uz[1] + zz[2] * uz[2] < dt
    }
    async function Zt(zz) {
      const {
        pixels: uz,
        width: bz,
        height: Ez
      } = await gn(zz), nz = new Uint8Array(bz * Ez);
      for (let iz = 0; iz < nz.length; iz++) nz[iz] = uz[4 * iz + 3];
      return {
        width: bz,
        height: Ez,
        alpha: nz
      }
    }
    class Rt {
      constructor(zz, uz) {
        this.device = zz, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(sb.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = zz.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = zz.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Du,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = zz.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [bz, Ez, nz] = sb.o;
        this.volume = zz.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: bz,
            height: Ez,
            depthOrArrayLayers: nz
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
          size: sb.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = uz ? new pt(zz) : null, this.entityStandIn = uz ? null : zz.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var zz, uz;
        const bz = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || bz.push("Lite sun shadow volume pipeline compiling");
        const Ez = null !== (zz = null === (uz = this.casters) || void 0 === uz ? void 0 : uz.planesLoading) && void 0 !== zz ? zz : 0;
        return Ez > 0 && bz.push(`${Ez} Lite sun shadow plane casters loading their textures`), bz
      }
      entries() {
        var zz, uz, bz, Ez;
        const nz = Ju.q;
        return [{
          binding: nz.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: nz.nF,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: nz.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: nz.volume,
          resource: this.volumeView
        }, {
          binding: nz.sampler,
          resource: this.volumeSampler
        }, {
          binding: nz.entities,
          resource: {
            buffer: null !== (zz = null === (uz = this.entities) || void 0 === uz ? void 0 : uz.frameBuffer) && void 0 !== zz ? zz : this.entityStandIn
          }
        }, {
          binding: nz.entityGrids,
          resource: {
            buffer: null !== (bz = null === (Ez = this.entities) || void 0 === Ez ? void 0 : Ez.gridBuffer) && void 0 !== bz ? bz : this.entityStandIn
          }
        }]
      }
      prepare(zz, uz, bz) {
        var Ez;
        this.entitiesThisFrame = !1;
        const nz = null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.sunShadowReach()) && void 0 !== Ez ? Ez : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!bz || !nz.sunShadow && !nz.airShadow) return void(this.volumeHolds = null);
        if (zz.xd.B5 !== Tu) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${zz.xd.B5}; everything is lit.`)));
        const iz = this.start(zz);
        this.casters.update(zz.VF, zz.VF.UF.length);
        const lz = zz.kd;
        for (let dz = 0; dz < 3; dz++) this.eye[dz] = uz[dz] + lz[dz];
        const Mz = (0, sb.v)(this.eye);
        this.staleNear = Mz;
        const tz = zz.xd.gR;
        iz.update(this.eye, ((zz, uz, bz) => tz.SR(zz, uz, bz)), 1);
        const Hz = (0, sb.s)(bz.k_()),
          Oz = iz.eyeChunk,
          pz = this.uniformInts;
        for (let dz = 0; dz < 3; dz++) pz[dz] = Oz[dz], pz[4 + dz] = Mz[dz];
        this.entitiesThisFrame = null !== this.entities && nz.sunShadow, this.entitiesThisFrame && Zb(this.uniformFloats, 8, uz, Hz), null !== this.volumeHolds && (this.castersWritten || Ft(Hz, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(Mz, Hz, Oz)
      }
      markStale(zz) {
        const uz = this.staleNear,
          bz = Tu,
          Ez = [zz.i * bz, zz.j * bz, zz.k * bz];
        for (let iz = 0; iz < 3; iz++)
          if (Ez[iz] + bz <= uz[iz] - bz || Ez[iz] >= uz[iz] + sb.o[iz] + bz) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const nz = this.stale;
        for (let iz = 0; iz < nz.length; iz += 4)
          if (nz[iz] === zz.i && nz[iz + 1] === zz.j && nz[iz + 2] === zz.k) return void(nz[iz + 3] = this.swept);
        if (16 === nz.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        nz.push(zz.i, zz.j, zz.k, this.swept)
      }
      writeStale() {
        const zz = this.swept,
          uz = this.stale;
        this.staleAll && zz - this.staleAllSwept >= sb.h && (this.staleAll = !1, uz.length = 0);
        let bz = 0;
        for (let nz = 0; nz < uz.length; nz += 4)
          if (zz - uz[nz + 3] < sb.h) {
            for (let zz = 0; zz < 4; zz++) uz[bz + zz] = uz[nz + zz];
            bz += 4
          } uz.length = bz;
        const Ez = this.uniformInts;
        Ez[3] = this.staleAll ? 5 : bz / 4;
        for (let nz = 0; nz < 4; nz++)
          for (let zz = 0; zz < 3; zz++) Ez[16 + 4 * nz + zz] = 4 * nz < bz ? uz[4 * nz + zz] * Tu : 0
      }
      writeUniform() {
        const zz = this.uniformInts;
        let uz = this.uniformWritten;
        if (uz) {
          let bz = !0;
          for (let Ez = 0; Ez < zz.length && bz; Ez++) bz = zz[Ez] === uz[Ez];
          if (bz) return
        }
        uz ??= this.uniformWritten = new Int32Array(zz.length), uz.set(zz), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(zz) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, zz)
      }
      computeVolume(zz, uz, bz) {
        const Ez = this.buildVolumePass();
        if (!Ez) return void(this.volumeHolds = null);
        const nz = (0, sb.u)(this.volumeHolds, zz);
        this.volumeHolds = zz;
        const iz = 1 === nz.length && nz[0].size.every(((zz, uz) => zz === sb.o[uz])),
          lz = this.sweptChunk,
          Mz = this.sweptLight,
          tz = uz[0] !== Mz[0] || uz[1] !== Mz[1] || uz[2] !== Mz[2],
          Hz = bz[0] !== lz[0] || bz[1] !== lz[1] || bz[2] !== lz[2],
          Oz = tz && Ft(uz, Mz);
        if ((iz || this.written || Hz || Oz) && (this.fastLeft = sb.h), iz || this.written || tz || Hz) {
          this.written = !1;
          for (let zz = 0; zz < 3; zz++) lz[zz] = bz[zz], Mz[zz] = uz[zz];
          this.sweepLeft = iz ? 0 : sb.h
        }
        if (iz ? this.swept += sb.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, nz.push(...(0, sb.w)(zz, this.slice)), this.slice = (this.slice + 1) % sb.h, this.swept++), 0 === nz.length) return;
        const pz = (0, sb.A)(this.workData, uz, nz);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const dz = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          Fz = dz.beginComputePass({
            label: "sun-shadow-volume"
          });
        Fz.setPipeline(Ez.pipeline), Fz.setBindGroup(Nb.group, Ez.bindGroup), Fz.dispatchWorkgroups(Math.ceil(pz / sb.l)), Fz.end(), this.device.queue.submit([dz.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const zz = Nb,
          uz = GPUShaderStage.COMPUTE,
          bz = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: zz.uniform,
              visibility: uz,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: zz.nF,
              visibility: uz,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: zz.special,
              visibility: uz,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: zz.work,
              visibility: uz,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: zz.volume,
              visibility: uz,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Ez = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: bz,
            entries: [{
              binding: zz.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: zz.nF,
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
            bindGroupLayouts: [bz]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: vb()
            }),
            entryPoint: "main"
          }
        }).then((zz => {
          this.volumePass = {
            pipeline: zz,
            bindGroup: Ez
          }
        }), (zz => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(zz)}`)
        })), null
      }
      start(zz) {
        if (this.window) return this.window;
        const uz = (zz, uz) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * zz, uz)
        };
        this.casters = new it(((zz, bz) => {
          this.castersWritten = !0, uz(zz, bz)
        }), Zt);
        const bz = new Ht(this.casters, ((zz, uz) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * zz, uz)
        }), uz);
        return bz.encoded = zz => {
          this.markStale(zz)
        }, zz.xd.on("chunkAdded", (zz => {
          bz.chunkAdded(zz)
        })), this.window = bz, bz
      }
    }
    var Kt = bz(38079),
      wt = bz(38083);
    const Xt = 0,
      ft = 3,
      st = 4,
      rt = 5;

    function ot(zz, uz, bz, Ez) {
      zz.drawOffset(uz, Ez + Xt), uz[Ez + ft] = zz.drawTime(), bz[Ez + st] = zz.ring.drawStart(), bz[Ez + rt] = zz.ring.drawCount()
    }
    const Nt = `\n${RE}\n\nconst MAX_STOPS = ${wt.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${wt.e/4}>,\n\tcolor1: array<vec4f, ${wt.e}>,\n\tcolor2: array<vec4f, ${wt.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${wt.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${wt.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var vt = bz(40820);
    class xt {
      constructor(zz, uz, bz, Ez) {
        this.device = zz, this.system = uz, this.frameIndex = bz, this.bindings = Ez, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, vt.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (zz, uz) => {
          this.device.queue.writeBuffer(this.ring, zz * wt.i * 4, this.system.ring.records, zz * wt.i, (uz - zz) * wt.i)
        };
        const {
          name: nz
        } = uz;
        this.ring = zz.createBuffer({
          label: `particles-${nz}`,
          size: uz.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = zz.createBuffer({
          label: `particles-uniforms-${nz}`,
          size: 4 * wt.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(zz) {
        const uz = (0, vt.c)(this.system, this.uniformBits, zz);
        uz && (this.uniformBits = uz, this.device.queue.writeBuffer(this.uniforms, 0, uz))
      }
      bind() {
        const {
          system: zz
        } = this, uz = this.texture;
        (0, vt.j)(zz, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${zz.name}`,
          size: [wt.m, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * wt.m
        }, [wt.m, 1]));
        const bz = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === uz.view && this.boundSampler === uz.sampler && this.boundRamp === bz || (this.boundView = uz.view, this.boundSampler = uz.sampler, this.boundRamp = bz, this.bindGroup = this.device.createBindGroup({
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
            resource: uz.sampler
          }, {
            binding: 3,
            resource: uz.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: bz
          }]
        }))
      }
      destroy() {
        var zz;
        this.ring.destroy(), this.uniforms.destroy(), null === (zz = this.ramp) || void 0 === zz || zz.destroy()
      }
    }
    class Jt {
      constructor(zz, uz) {
        this.device = zz, this.resources = uz, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Hu.b)();
        const bz = zz.createBindGroupLayout({
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
          bindGroupLayouts: [uu(zz), bz, this.frameLayout]
        }), this.module = zz.createShaderModule({
          label: "particles",
          code: Nt
        });
        const Ez = zz.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        zz.queue.writeTexture({
          texture: Ez
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: bz,
          rampSampler: zz.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Ez.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (uz, bz) => (this.bindTarget(bz), {
            renderable: this.renderable,
            pipeline: lu(zz, bz),
            draw: zz => bz === this.preparedTarget ? this.draw(zz) : 0
          })
        }
      }
      get rEz() {
        return this.systems.size
      }
      reset() {
        for (const zz of this.systems.keys()) zz.reset()
      }
      describePendingWork() {
        return (0, Kt.e)(this.systems.keys(), "Lite")
      }
      cL(zz, uz) {
        const bz = new Kt.d(zz, uz, this);
        return this.systems.set(bz, new xt(this.device, bz, this.allocateFrameIndex(), this.bindings)), bz
      }
      L_(zz, uz) {
        for (const bz of this.systems.keys()) bz.L_(zz, uz)
      }
      canDraw(zz) {
        const uz = this.systems.get(zz),
          bz = zz.texture ? this.resources.boundTexture(zz.texture) : null;
        if (!uz || !bz || !this.targetPipelines) return !1;
        if (uz.texture = bz, uz.pipelines.length = 0, !Wn(zz.blendMode)) return this.warnOnce(`blend:${zz.blendMode}`, `particle blend mode ${zz.blendMode} is not drawn (${zz.name})`), !0;
        const Ez = (0, Gn.k)(zz.blendMode);
        for (const nz of Ez) {
          const zz = this.pipelineFor(nz);
          if (!1 === zz) return uz.pipelines.length = 0, !0;
          zz && uz.pipelines.push(zz)
        }
        return uz.pipelines.length === Ez.length
      }
      disposeStopped(zz) {
        zz.dispose()
      }
      remove(zz) {
        const uz = this.systems.get(zz);
        uz && (this.systems.delete(zz), uz.destroy(), this.freeFrameIndices.push(uz.frameIndex))
      }
      prepare(zz) {
        const uz = zz.animationRatio || 1;
        Mu(this.renderable._worldCenter, zz, Eu), this.preparedTarget = this.target, this.draws.length = 0;
        let bz = 0;
        for (const Ez of this.systems.values()) {
          const zz = Ez.system;
          if (!zz.animateIfActive(uz)) continue;
          if (zz.ring.takeUploads(Ez.upload), !zz.hasLiveParticles() || 0 === Ez.pipelines.length) continue;
          Ez.writeUniforms(this.warnOnce), Ez.bind();
          const nz = 64 * Ez.frameIndex;
          Ez.count = zz.ring.drawCount(), ot(zz, this.frameData, this.frameBits, nz), bz = Math.max(bz, nz + 64), this.draws.push(Ez)
        }
        bz > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, bz)
      }
      draw(zz) {
        let uz = 0,
          bz = null;
        for (const Ez of this.draws) {
          zz.setBindGroup(1, Ez.bindGroup), zz.setBindGroup(2, this.frameBindGroup, [256 * Ez.frameIndex]);
          for (const nz of Ez.pipelines) nz !== bz && (zz.setPipeline(nz), bz = nz), zz.draw(4, Ez.count), uz++
        }
        return uz
      }
      bindTarget(zz) {
        this.target = zz;
        const uz = `${zz._colorFormat}|${zz._depthStencilFormat}|${zz._depthCompare}|${zz._sampleCount}`;
        let bz = this.pipelines.get(uz);
        bz || (bz = new Map, this.pipelines.set(uz, bz)), this.targetPipelines = bz
      }
      pipelineFor(zz) {
        var uz;
        const bz = this.targetPipelines,
          Ez = bz.get(zz);
        if (void 0 !== Ez) return Ez;
        bz.set(zz, null);
        const nz = this.target,
          iz = zz === Gn.c,
          lz = null !== (uz = nz._depthCompare) && void 0 !== uz ? uz : bu;
        return this.device.createRenderPipelineAsync({
          label: `particles-${zz}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Cz({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: iz ? 1 : 0
            }
          }, nz, en((0, Gn.i)(zz))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: nz._depthStencilFormat ? {
            format: nz._depthStencilFormat,
            depthCompare: lz,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: nz._sampleCount
          }
        }).then((uz => {
          bz.set(zz, uz)
        }), (uz => {
          bz.set(zz, !1), console.error("Lite particle pipeline failed", uz), Bn("particles", `blend-${zz}`, uz)
        })), null
      }
      allocateFrameIndex() {
        const zz = this.freeFrameIndices.pop();
        if (void 0 !== zz) return zz;
        const uz = this.nextFrameIndex++;
        if (64 * (uz + 1) > this.frameData.length) {
          const zz = new Float32Array(2 * this.frameData.length);
          zz.set(this.frameData), this.frameData = zz, this.frameBits = new Uint32Array(zz.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return uz
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
    class At {
      constructor(zz, uz, bz, Ez, nz) {
        this.lite = zz, this.canvas = uz, this.info = bz, this.resources = nz, this.fbz = !1, this.needPOTTextures = !1, this.FY = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = uz.width, this.renderHeight = uz.height, this.caps = {
          maxTextureSize: Ez.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Ez.maxTextureArrayLayers
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
      setSize(zz, uz) {
        if (this.renderWidth === zz && this.renderHeight === uz) return !1;
        const bz = this.renderWidth,
          Ez = this.renderHeight;
        this.renderWidth = zz, this.renderHeight = uz;
        try {
          (0, gz.m)(this.lite, zz, uz)
        } catch (nz) {
          if (nz instanceof DOMException && "InvalidStateError" === nz.name) {
            this.renderWidth = bz, this.renderHeight = Ez;
            try {
              (0, gz.m)(this.lite, bz, Ez)
            } catch {
              this.canvas.width = bz, this.canvas.height = Ez
            }
            return console.warn("WebGPU could not allocate render targets for resize", zz, uz, nz.message), !1
          }
          throw nz
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
      ZN() {
        const zz = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : zz - this.lastFrameTime, this.lastFrameTime = zz
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(zz, uz) {
        const bz = document.createElement("canvas");
        return bz.width = zz, bz.height = uz, bz
      }
      fY(zz, uz) {
        var bz;
        return null !== (bz = this.resources.fY.get(zz)) && void 0 !== bz ? bz : new Qz(this.resources, zz, uz)
      }
      atlasArray(zz, uz, bz) {
        return this.resources.atlasArray(zz, uz, bz)
      }
    }
    class Tt {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(zz) {
        this.fov = zz.fov, this.nearPlane = zz.near, this.farPlane = zz.far;
        const uz = zz.worldMatrix;
        for (let bz = 0; bz < 16; bz++)
          if (this.worldMatrix[bz] !== uz[bz]) return this.worldMatrix.set(uz), void this.worldMatrixVersion++
      }
    }
    class Lt {
      constructor(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
        let Oz = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = zz, this.tK = uz, this.sceneTask = bz, this.gpuDevice = Ez, this.terrain = nz, this.meshes = iz, this.particles = lz, this.resources = Mz, this.sunShadow = Oz, this.buz = void 0, this.backendName = "WebGPU (Lite)", this.Dk = void 0, this.modelMeshes = void 0, this.camera = new Tt, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new yz(Ez.lost), this.deviceLost = this.refusals.deviceLost, this.buz = new At(zz, tz, Hz, Ez.limits, Mz), (0, Az.A)({
          yM: zz => {
            Gz(zz) && Mz.textureSlot(zz)
          },
          loaded: zz => Gz(zz) ? Mz.textureLoaded(zz) : null,
          canvasUpdated: (zz, uz, bz) => {
            Gz(zz) && Mz.canvasUpdated(zz, uz, bz)
          }
        }), this.Dk = iz.Dk, this.modelMeshes = iz.modelMeshes, uz.camera = this.camera
      }
      get castsEntitySunShadows() {
        var zz, uz;
        return null !== (zz = null === (uz = this.sunShadow) || void 0 === uz ? void 0 : uz.tracesEntities) && void 0 !== zz && zz
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(zz) {
        this.modelMeshes.attach(zz.model, zz.sceneMirror);
        const uz = zz.tK;
        this.setClearColour(uz.clearColor.r, uz.clearColor.g, uz.clearColor.b), uz.draw = () => {
          this.drawFrame(zz, uz)
        }
      }
      render(zz) {
        try {
          this.buz.ZN(), zz.tK.render()
        } catch (uz) {
          throw this.refusals.frameFailed(uz), uz
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var zz, uz, bz, Ez;
        const nz = [...this.particles.describePendingWork(), ...null !== (zz = null === (uz = this.sunShadow) || void 0 === uz ? void 0 : uz.describePendingWork()) && void 0 !== zz ? zz : []],
          iz = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (bz = this.terrain.sceneDepth) && void 0 !== bz && bz.compiling ? 1 : 0) + (null !== (Ez = this.terrain.shadowMask) && void 0 !== Ez && Ez.compiling ? 1 : 0);
        iz > 0 && nz.push(`${iz} Lite pipelines compiling`);
        const lz = this.terrain.buffersAwaitingVerdict;
        lz > 0 && nz.push(`${lz} Lite terrain buffers awaiting their out-of-memory verdict`);
        const Mz = this.resources.texturesLoading;
        return Mz > 0 && nz.push(`${Mz} Lite textures loading`), nz
      }
      prepareTexture(zz) {
        return null !== this.resources.boundTexture(zz) || this.resources.textureFailed(zz)
      }
      drawFrame(zz, uz) {
        var bz, Ez, nz, iz, lz, Mz;
        const tz = ZM(zz);
        this.camera.copyFromView(tz), this.setClearColour(tz.clearColour[0], tz.clearColour[1], tz.clearColour[2]), null === (bz = this.sunShadow) || void 0 === bz || bz.prepare(zz.Gd, tz.eye, null !== (Ez = zz.Gd.JZ) && void 0 !== Ez ? Ez : null), this.terrain.prepare(zz, tz), null === (nz = this.terrain.sceneDepth) || void 0 === nz || nz.setPlanes(tz.near, tz.far), null === (iz = this.terrain.shadowMask) || void 0 === iz || iz.prepare(tz), kl(this.sceneTask), this.meshes.prepare(uz, tz, zz.model.earthSky, null !== (lz = zz.Gd.JZ) && void 0 !== lz ? lz : null), this.particles.prepare(tz);
        const Hz = performance.now();
        this.resources.flushUploads(), null === (Mz = this.sunShadow) || void 0 === Mz || Mz.traceEntities(this.meshes);
        try {
          (0, gz.k)(this.engine, this.lastFrameTime > 0 ? Hz - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Hz
      }
      setClearColour(zz, uz, bz) {
        const Ez = this.tK.clearColor;
        Ez.r = zz, Ez.g = uz, Ez.b = bz, Ez.a = 1
      }
    }
    const Pt = "WebGPU device lost while Lite was starting";

    function Gt(zz, uz) {
      return "object" === typeof zz && null !== zz ? Object.assign(zz, {
        startStep: uz
      }) : zz
    }
    async function Vt(zz, uz) {
      const bz = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!bz) throw Gt(new Error("No WebGPU adapter"), "no_adapter");
      const Ez = bz.info,
        nz = {
          vendor: (null === Ez || void 0 === Ez ? void 0 : Ez.vendor) || "unknown vendor",
          renderer: (null === Ez || void 0 === Ez ? void 0 : Ez.architecture) || "unknown renderer",
          version: (null === Ez || void 0 === Ez ? void 0 : Ez.description) || "unknown version"
        },
        iz = function(zz) {
          const uz = {};
          for (const bz in zz.limits) {
            const Ez = zz.limits[bz];
            "number" === typeof Ez && (uz[bz] = Ez)
          }
          return uz
        }(bz);
      let lz;
      zz.style.background = "black";
      try {
        lz = await (0, gz.c)(zz, {
          msaaSamples: uz.muz ? 4 : 1,
          requiredLimits: iz,
          alphaMode: "premultiplied"
        })
      } catch (Oz) {
        throw Gt(Oz, "#47" === (null === (Mz = Oz) || void 0 === Mz ? void 0 : Mz.message) ? "no_adapter" : "device")
      }
      var Mz;
      const tz = function(zz) {
        return zz._device
      }(lz);
      let Hz = null;
      tz.lost.then((zz => {
        Hz = zz, console.error(`WebGPU device lost (${zz.reason}): ${zz.message}`)
      }));
      try {
        const bz = await async function(zz, uz, bz, Ez, nz, iz) {
          const lz = (0, Sz.b)(zz),
            Mz = new Bl(zz, uz),
            tz = new CM(uz),
            Hz = new Gl(uz, Mz, (zz => function(zz, uz) {
              for (const Ez of kz(zz)) {
                var bz;
                if (Ez._targetSignature === uz) return null !== (bz = Ez._sceneBG) && void 0 !== bz ? bz : null
              }
              return null
            }(lz, zz))),
            Oz = new Jt(uz, Mz);
          for (const Fz of function(zz, uz, bz) {
              return [uz.opaqueRenderable, zz.opaqueRenderable, zz.skyLastRenderable, bz.renderable, uz.transparentRenderable, zz.transparentRenderable, zz.frontRenderable]
            }(Hz, tz, Oz)) Yz(lz, Fz);
          const pz = function(zz) {
            for (const uz of kz(zz))
              if ("tK" === uz.name) return uz;
            throw new Error("Lite: the scene has no render task named scene")
          }(lz);
          nz && tz.installSceneDepth(pz, zz);
          const dz = iz ? new Rt(uz, iz.entities) : null;
          tz.sunShadow = dz, dz && null !== iz && void 0 !== iz && iz.entities && (tz.shadowMask = new LM(uz, pz, zz, tz));
          return Hz.sunShadow = dz, await (0, Sz.f)(lz), new Lt(zz, lz, pz, uz, tz, Hz, Oz, Mz, bz, Ez, dz)
        }(lz, tz, zz, nz, uz.sceneDepth, uz.sunShadow);
        if (null !== Hz) {
          const {
            reason: zz,
            message: uz
          } = Hz;
          throw Object.assign(new Error(`${Pt} (${zz}): ${uz}`), {
            fallbackReason: Pt
          })
        }
        return bz
      } catch (Oz) {
        throw tz.destroy(), null === Hz ? Oz : Gt(Oz, "device")
      }
    }
  },
  40071: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Fz,
      B: () => Zz,
      c: () => nz,
      g: () => Ez,
      h: () => dz,
      j: () => Oz,
      m: () => Kz,
      o: () => iz,
      q: () => Mz,
      t: () => tz,
      w: () => lz,
      y: () => Rz
    });
    const Ez = 3,
      nz = 0,
      iz = 1,
      lz = 2,
      Mz = {
        uniform: 3,
        nF: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      tz = 10,
      Hz = "BloxdPackInputs",
      Oz = "bloxdPackInputs",
      pz = [{
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
      dz = 80;

    function Fz() {
      const zz = pz.map((zz => {
        let {
          name: uz,
          type: bz
        } = zz;
        return `    ${uz}: ${bz},\n`
      })).join("");
      return `struct ${Hz} {\n${zz}}\n@group(${Ez}) @binding(${nz}) var<uniform> ${Oz}: ${Hz};\n`
    }

    function Zz(zz, uz) {
      const bz = new DataView(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, dz),
        [Ez, nz, iz, lz, Mz, tz] = pz;
      bz.setFloat32(Ez.offset, uz.seconds, !0), bz.setUint32(nz.offset, uz.lit ? 1 : 0, !0);
      for (let Hz = 0; Hz < 3; Hz++) bz.setInt32(iz.offset + 4 * Hz, uz.renderOffset[Hz], !0), bz.setFloat32(lz.offset + 4 * Hz, uz.k_[Hz], !0), bz.setFloat32(Mz.offset + 4 * Hz, uz.eyePosition[Hz], !0), bz.setFloat32(tz.offset + 4 * Hz, uz.shadowDirection[Hz], !0)
    }

    function Rz(zz) {
      const uz = new Uint32Array(Math.max(1, zz.length));
      return zz.forEach(((zz, bz) => {
        let {
          id: Ez,
          rotation: nz
        } = zz;
        uz[bz] = 65535 & Ez | (3 & nz) << 16
      })), uz
    }
    const Kz = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);