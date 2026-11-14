export const id = 246;
export const ids = [246];
export const modules = {
  39559: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => tB,
      e: () => sc,
      h: () => uc,
      i: () => Pc
    });
    var Vc = nc(35808),
      Ic = nc(37224),
      rB = nc(37221);

    function uc(cB, Bc, nc, Vc) {
      const Ic = rB.y;
      Bc.fill(0), cB.gravity.toArray(Bc, Ic.gravity), cB.colorDead.toArray(Bc, Ic.colorDead), nc[Ic.ramp] = cB.useRampGradients ? 1 : 0;
      const uc = cB.getColorGradients(),
        sc = Tc(cB, uc, "colour", Vc);
      nc[Ic.colorCount] = sc;
      for (let rB = 0; rB < sc; rB++) {
        var Mc;
        const cB = uc[fc(uc, rB)];
        Bc[Ic.colorPositions + rB] = cB.gradient, cB.color1.toArray(Bc, Ic.color1 + 4 * rB), (null !== (Mc = cB.color2) && void 0 !== Mc ? Mc : cB.color1).toArray(Bc, Ic.color2 + 4 * rB)
      }
      const Pc = cB.getVelocityGradients(),
        qB = Tc(cB, Pc, "Qu", Vc);
      nc[Ic.velocityCount] = qB;
      for (let rB = 0; rB < qB; rB++) yB(Bc, Ic.Qu + 4 * rB, Pc[fc(Pc, rB)]);
      const Oc = cB.useRampGradients ? cB.getColorRemapGradients() : null,
        mB = Tc(cB, Oc, "colour remap", Vc);
      nc[Ic.remapCount] = mB;
      for (let rB = 0; rB < mB; rB++) yB(Bc, Ic.remap + 4 * rB, Oc[fc(Oc, rB)])
    }

    function sc() {
      return {
        key: [],
        texels: new Uint8Array(4 * rB.n)
      }
    }
    const Mc = [];

    function Pc(cB, Bc) {
      return qB(cB, Mc), !Sc(Mc, Bc.key) && (Bc.key.length = 0, Bc.key.push(...Mc), Bc.key.length > 0 && function(cB, Bc) {
        for (let nc = 0; nc < rB.n; nc++) Ic.l.GetCurrentGradient(nc / rB.n, cB, ((cB, Bc, nc) => {
          Vc.Color3.LerpToRef(cB.color, Bc.color, nc, Oc)
        })), Bc[4 * nc] = 255 * Oc.r, Bc[4 * nc + 1] = 255 * Oc.g, Bc[4 * nc + 2] = 255 * Oc.b, Bc[4 * nc + 3] = 255
      }(cB.getRampGradients(), Bc.texels), !0)
    }

    function qB(cB, Bc) {
      Bc.length = 0;
      const nc = cB.useRampGradients ? cB.getRampGradients() : null;
      if (null !== nc && void 0 !== nc && nc.length) {
        Bc.push(nc.length);
        for (const cB of nc) Bc.push(cB.gradient, cB.color.r, cB.color.g, cB.color.b)
      }
    }
    const Oc = new Vc.Color3;

    function Tc(cB, Bc, nc, Vc) {
      return Bc ? Bc.length > rB.e ? (Vc(`particleStops:${nc}`, `GPU particles use the first 2 and last ${rB.e-2} of more than ${rB.e} ${nc} gradient stops (${cB.name})`), rB.e) : Bc.length : 0
    }

    function fc(cB, Bc) {
      return Bc < 2 || cB.length <= rB.e ? Bc : cB.length - rB.e + Bc
    }
    const mB = new Float32Array(rB.q),
      ec = new Uint32Array(mB.buffer);

    function tB(cB, Bc, nc) {
      return uc(cB, mB, ec, nc), Bc && Sc(ec, Bc) ? null : ec.slice()
    }

    function Sc(cB, Bc) {
      if (cB.length !== Bc.length) return !1;
      for (let nc = 0; nc < cB.length; nc++)
        if (cB[nc] !== Bc[nc]) return !1;
      return !0
    }

    function yB(cB, Bc, nc) {
      var Vc;
      cB[Bc] = nc.gradient, cB[Bc + 1] = nc.factor1, cB[Bc + 2] = null !== (Vc = nc.factor2) && void 0 !== Vc ? Vc : nc.factor1
    }
  },
  39557: (cB, Bc, nc) => {
    function Vc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Bc = new Set;
      return (nc, Vc) => {
        Bc.has(nc) || (Bc.add(nc), console.warn(cB + Vc))
      }
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  39590: (cB, Bc, nc) => {
    nc.d(Bc, {
      createLiteRendererAsync: () => ZM,
      liteBabylonBackend: () => wc,
      setPipelineFailureHook: () => ir
    });
    var Vc = nc(35808),
      Ic = nc(36111),
      rB = nc(36463),
      uc = nc(35708),
      sc = nc(36474);
    class Mc extends sc.c {
      constructor() {
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        super(...Bc), this.color = new Vc.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Bc[0].knc().getUniqueId(),
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
          needAlphaBlendingForMesh: cB => cB.visibility < 1 || cB.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const Pc = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      qB = cB => 1 << Pc.indexOf(cB),
      Oc = qB("VERTEXCOLOR"),
      Tc = qB("INSTANCES"),
      fc = qB("THIN_INSTANCES"),
      mB = qB("INSTANCESCOLOR"),
      ec = qB("FOG"),
      tB = qB("LITE_FRONT_LAYER");

    function Sc(cB, Bc, nc, Vc) {
      let Ic = 0;
      return cB.isVerticesDataPresent("color") && (Ic |= Oc), "none" !== Bc && (Ic |= Tc), "thin" === Bc && (Ic |= fc, cB.isVerticesDataPresent("instanceColor") && (Ic |= mB)), Vc.fogEnabled && cB.applyFog && 0 !== Vc.fogMode && (Ic |= ec), nc >= 1 && (Ic |= tB), Ic
    }

    function yB(cB, Bc) {
      cB.updateColor4("color", Bc.color, Bc.alpha)
    }
    var zB = nc(36405),
      pc = nc(35916),
      hc = nc(35847),
      aB = nc(35679),
      lc = nc(36389),
      Yc = nc(36401),
      Lc = nc(35697),
      gB = nc(35699),
      Uc = nc(35714);
    const bB = aB.c.GLSL;
    class Zc {
      constructor(cB, Bc) {
        this.name = cB, this.Ir = Bc, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.XBc = {
          addOnce: cB => {
            this.disposers.push(cB)
          }
        }, this.uniqueId = Bc.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      knc() {
        return this.Ir
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
      needAlphaBlendingForMesh(cB) {
        return (0, Lc.Q)(this.model, cB.visibility, cB.hasVertexAlpha)
      }
      needAlphaTestingForMesh(cB) {
        return (0, Lc.S)(this.model, cB.visibility, cB.hasVertexAlpha)
      }
      dispose() {
        (0, pc.l)(this);
        for (const cB of this.disposers.splice(0)) cB()
      }
      get model() {
        return (0, Lc.X)(this)
      }
    }
    const Qc = new WeakSet;

    function Cc(cB) {
      return Qc.has(cB)
    }

    function vB(cB) {
      Qc.add(cB)
    }
    const Dc = {
      create: (cB, Bc) => ((0, hc.s)(cB, new Zc(cB.name, Bc)), gB.e.defines()),
      write: () => {},
      addFeature: (cB, Bc) => {
        const nc = cB.mirror;
        Bc.feature === Yc.j && Bc.state.dirLightCount > 0 && (cB.disableLighting = !0, (0, Lc.W)(cB)), "BLOXD_LIGHTING" in Bc.defines && (0, pc.i)(nc), Bc.feature === lc.j && ((0, zB.h)(Bc.state, bB), function(cB, Bc) {
          const nc = cB.knc().RV();
          Bc.textures.forEach(((Vc, Ic) => {
            setTimeout((() => {
              var rB, uc;
              const {
                url: sc
              } = Vc.source;
              nc.atlasArray(sc, null !== (rB = null === (uc = Bc.sources.pixels) || void 0 === uc ? void 0 : uc[Ic]) && void 0 !== rB ? rB : null, Bc.sources.layerWidth).then((nc => {
                (0, zB.e)(cB, Bc, Ic, nc, nc.layerWidth, nc.layers, bB)
              })).catch((cB => {
                console.error(`Failed to build texture array for atlas ${Ic}`, cB)
              }))
            }))
          }))
        }(nc, Bc.state))
      },
      texture: (cB, Bc, nc) => {
        let {
          data: Vc,
          sets: Ic
        } = nc;
        var rB;
        (vB(cB), Vc) && (cB.uvSet = null !== (rB = null === Ic || void 0 === Ic ? void 0 : Ic.coordinatesIndex) && void 0 !== rB ? rB : 0, (0, hc.bb)(cB.matrix, null !== Ic && void 0 !== Ic ? Ic : {}))
      },
      cube: vB,
      canvas: (cB, Bc, nc) => {
        let {
          width: Vc,
          height: Ic,
          mipmaps: rB,
          samplingMode: uc = Uc.k.trilinear,
          hasAlpha: sc = !1,
          wrap: Mc = Uc.e.clamp
        } = nc;
        const Pc = cB.RV().createCanvas(Vc, Ic),
          qB = new Uc.l("2d", {
            kind: "canvas",
            width: Vc,
            height: Ic,
            canvas: Pc
          }, {
            samplingMode: uc,
            wrapU: Mc,
            wrapV: Mc,
            noMipmap: !rB,
            invertY: !0
          });
        return qB.hasAlpha = sc, vB(qB), qB
      }
    };
    var Nc = nc(35938),
      Ec = nc(35783);
    class oc {
      constructor(cB, Bc, nc) {
        this.engine = cB, this.clearColor = Bc, this.ambientColor = nc, this.onBeforeRenderObservable = new Ec.c, this.onBeforeCameraRenderObservable = new Ec.c, this.onAfterRenderObservable = new Ec.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.qD = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      RV() {
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
      addPendingData(cB) {
        this.pending.push(cB)
      }
      removePendingData(cB) {
        const Bc = this.pending.indexOf(cB); - 1 !== Bc && this.pending.splice(Bc, 1)
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

    function Wc() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const wc = {
      bOc: Wc,
      gOc: (cB, Bc) => {
        const nc = new oc(cB.engine, Vc.c.FromArray(Bc.clearColor), Vc.Color3.FromArray(Bc.ambientColor));
        (0, uc.e)(Dc, nc), cB.Ir = nc,
          function(cB, Bc) {
            const nc = Object.assign((0, Nc.g)(cB, "camera"), {
              layerMask: 268435455
            });
            cB.model.nodes.setWorldSource(nc.row, cB.model.view.worldMatrix), cB.camera = Bc.activeCamera = nc
          }(cB, nc), (0, Ic.j)(cB, ((cB, Bc, nc) => (0, rB.i)(cB, Bc, nc, sc.c)))
      },
      aOc: () => {},
      setBabylonFog: () => {},
      Zqc: Wc,
      vOc: () => {},
      linesFromArrays: (cB, Bc, nc) => (0, rB.i)(cB, Bc, nc, Mc),
      ru: () => {},
      Cqc: Wc
    };
    var kB = nc(39656),
      Xc = nc(39673);
    class Hc {
      constructor(cB) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const Bc = new Promise((cB => {
          this.refused = cB
        }));
        this.deviceLost = Promise.race([cB, Bc])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(cB) {
        (function(cB) {
          const {
            name: Bc,
            message: nc
          } = null !== cB && void 0 !== cB ? cB : {};
          return "InvalidStateError" === Bc && "string" === typeof nc && nc.startsWith("GPUDevice.")
        })(cB) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: cB.message,
          framesRefused: !0
        }))
      }
    }
    class Fc {
      constructor(cB) {
        this.resources = cB, this.matrixKey = {
          Qc: 0
        }, this.attributesKey = {
          Qc: 0
        }, this.inputs = Object.create(null);
        for (let Bc = 0; Bc < 4; Bc++) this.inputs[`world${Bc}`] = new Rc(this.matrixKey, 16 * Bc, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(cB, Bc) {
        this.resources.vertexBufferCreated(this.matrixKey, cB, !0), Bc && this.resources.vertexBufferCreated(this.attributesKey, Bc, !0)
      }
    }
    class Jc extends Fc {
      constructor(cB, Bc, nc) {
        super(cB), this.mesh = Bc, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Vc = this.inputs;
        let Ic = 0;
        for (const {
            size: uc
          }
          of nc) Ic += uc;
        for (const {
            name: uc,
            offset: sc,
            size: Mc,
            type: Pc
          }
          of nc) Vc[uc] = new Rc(this.attributesKey, 4 * sc, 4 * Ic, Mc, !0, Pc);
        this.rowStride = Ic, cB.zuc.set(Bc, this);
        const rB = Bc.isVerticesDataPresent;
        Bc.isVerticesDataPresent = (cB, nc) => cB in Vc || rB.call(Bc, cB, nc)
      }
      attach(cB, Bc) {
        this.matrices = cB, this.attributes = Bc, this.bind(cB, Bc), this.mirror(cB, cB.length, cB.length / 16)
      }
      nuc(cB) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, cB ? 64 * cB : void 0)
      }
      Vuc() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(cB, Bc) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * cB, 16 * Bc)
      }
      attributeRows(cB, Bc) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, cB * this.rowStride, Bc * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(cB, Bc, nc) {
        const Vc = this.mesh._thinInstanceDataStorage;
        Vc.matrixData = cB, Vc.matrixBufferSize = Bc, Vc.worldMatrices = null, Vc.instancesCount = nc
      }
    }
    class jB extends Fc {
      constructor(cB, Bc, nc) {
        var Vc, Ic, rB, uc;
        super(cB), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.interleavedKinds) && void 0 !== Vc ? Vc : null, this.offsets = null !== (Ic = null === nc || void 0 === nc ? void 0 : nc.interleavedOffsets) && void 0 !== Ic ? Ic : [], this.rowStride = null !== (rB = null === nc || void 0 === nc ? void 0 : nc.interleavedRowStride) && void 0 !== rB ? rB : 0, null === (uc = this.layout) || void 0 === uc || uc.forEach(((cB, Bc) => {
          this.inputs[cB] = new Rc(this.attributesKey, 4 * this.offsets[Bc], 4 * this.rowStride, nc.strides[cB])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), cB.batchUploads.set(Bc, this), Bc.XBc.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(cB) {
        const Bc = this.packedBatch;
        return Bc.renderSelf ? 0 === cB ? this.packedSource : Bc.instances[cB - 1] : Bc.instances[cB]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(cB, Bc, nc, Vc) {
        const Ic = (Bc.renderSelf ? 1 : 0) + Bc.rows.length;
        if (this.frame = Vc, this.count = Ic, this.packedSource = cB, this.packedBatch = Bc, 0 === Ic) return;
        if (cB.getWorldMatrix(), 16 * Ic > this.matrices.length) {
          let cB = this.matrices.length / 16;
          for (; cB < Ic;) cB *= 2;
          this.matrices = new Float32Array(16 * cB), this.attributes &&= new Float32Array(cB * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let rB = 0;
        Bc.renderSelf && this.packRow(rB++, cB, Bc.row, nc);
        for (let uc = 0; uc < Bc.rows.length; uc++) this.packRow(rB++, Bc.instances[uc], Bc.rows[uc], nc);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Ic), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Ic * this.rowStride)
      }
      packRow(cB, Bc, nc, Vc) {
        const Ic = this.matrices;
        if (nc < 0) Ic.set(Bc.getWorldMatrix().m, 16 * cB);
        else
          for (let Pc = 0; Pc < 16; Pc++) Ic[16 * cB + Pc] = Vc[16 * nc + Pc];
        const rB = this.attributes;
        if (!rB) return;
        const uc = Bc.snc,
          sc = this.layout;
        for (let Pc = 0; Pc < sc.length; Pc++) {
          var Mc;
          const Bc = null !== (Mc = uc[sc[Pc]]) && void 0 !== Mc ? Mc : 0,
            nc = cB * this.rowStride + this.offsets[Pc];
          Bc.toArray ? Bc.toArray(rB, nc) : Bc.copyToArray ? Bc.copyToArray(rB, nc) : rB[nc] = Bc
        }
      }
    }
    class Rc {
      constructor(cB, Bc, nc, Vc) {
        let Ic = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          rB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          uc = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = cB, this.byteOffset = Bc, this.byteStride = nc, this.size = Vc, this.instanced = Ic, this.type = rB, this.normalized = uc
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
    const iB = "CANVAS_ALPHA_ONE",
      Kc = `override ${iB}: bool = false;`,
      xB = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function dc(cB, Bc, nc) {
      var Vc;
      let Ic = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const rB = null !== (Vc = Bc._colorFormat) && void 0 !== Vc ? Vc : "bgra8unorm",
        uc = Ic ? 15 : 0;
      return nc ? {
        ...cB,
        targets: [{
          format: rB,
          blend: {
            color: nc,
            alpha: xB
          },
          writeMask: uc
        }]
      } : {
        ...cB,
        constants: {
          ...cB.constants,
          [iB]: 1
        },
        targets: [{
          format: rB,
          writeMask: uc
        }]
      }
    }

    function Ac(cB, Bc) {
      cB._renderables.push(Bc)
    }

    function Gc(cB) {
      var Bc, nc;
      return null !== (Bc = null === (nc = cB._frameGraph) || void 0 === nc ? void 0 : nc._tasks) && void 0 !== Bc ? Bc : []
    }

    function cn(cB) {
      return cB._currentEncoder
    }

    function BB(cB) {
      return cB.createBindGroupLayout({
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
    const nB = "greater-equal",
      VB = 2e5,
      IB = 1e5,
      rn = new WeakMap;

    function uB(cB, Bc) {
      let nc = rn.get(cB);
      if (!nc) {
        nc = {
          module: cB.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, rn.set(cB, nc)
      }
      const Vc = `${Bc._colorFormat}|${Bc._depthStencilFormat}|${Bc._sampleCount}`;
      let Ic = nc.pipelines.get(Vc);
      if (!Ic) {
        var rB;
        const {
          module: uc
        } = nc;
        Ic = cB.createRenderPipeline({
          label: `placeholder ${Vc}`,
          layout: cB.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: uc,
            entryPoint: "v"
          },
          fragment: {
            module: uc,
            entryPoint: "f",
            targets: [{
              format: null !== (rB = Bc._colorFormat) && void 0 !== rB ? rB : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Bc._depthStencilFormat ? {
            format: Bc._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Bc._sampleCount
          }
        }), nc.pipelines.set(Vc, Ic)
      }
      return Ic
    }

    function sB(cB, Bc, nc) {
      const Vc = Bc.eye,
        Ic = Bc.viewMatrix;
      cB[0] = Vc[0] + Ic[2] * nc, cB[1] = Vc[1] + Ic[6] * nc, cB[2] = Vc[2] + Ic[10] * nc
    }
    var MB = nc(36511),
      PB = nc(39557),
      qn = nc(35689);
    const OB = Math.PI,
      TB = OB / 1.95,
      fB = [5e-4 / 94, 125e-7, 5e-4 / 18],
      mn = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((cB => {
        let [Bc, nc] = cB;
        return .434 * OB * Math.pow(2 * OB / Bc, 2) * nc
      }));

    function eB(cB, Bc, nc) {
      const {
        up: Vc,
        mieDirectionalG: Ic
      } = cB, rB = 1 - yn(1 - Math.exp(Bc[1] / 45e4), 0, 1), uc = cB.rayleigh - (1 - rB), sc = Math.hypot(Bc[0], Bc[1], Bc[2]), Mc = sc > 0 ? 1 / sc : 0, Pc = nc.sunDir;
      for (let fc = 0; fc < 3; fc++) Pc[fc] = Bc[fc] * Mc;
      const qB = Pc[0] * Vc[0] + Pc[1] * Vc[1] + Pc[2] * Vc[2],
        Oc = 1e3 * Math.max(0, 1 - Math.exp(-(TB - Math.acos(yn(qB, -1, 1))) / 1.5));
      nc.sunE = Oc;
      const Tc = .2 * cB.turbidity * 1e-17 * cB.mieCoefficient;
      for (let fc = 0; fc < 3; fc++) {
        const cB = fB[fc] * uc,
          Bc = mn[fc] * Tc,
          Vc = Oc / (cB + Bc);
        nc.inScatterR[fc] = cB * Vc, nc.inScatterM[fc] = Bc * Vc, nc.extinctionBeta[fc] = 8400 * cB + 1250 * Bc
      }
      return nc.sunsetMix = yn(Math.pow(1 - qB, 5), 0, 1), nc.sunDiscE = 19e3 * Oc, nc.mieScale = (1 - Ic * Ic) / (4 * OB), nc.mieBase = 1 + Ic * Ic, nc.mieSlope = 2 * Ic, nc
    }
    const tn = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const SB = 1 / function(cB) {
      const {
        A: Bc,
        B: nc,
        C: Vc,
        D: Ic,
        E: rB,
        F: uc
      } = tn;
      return (cB * (Bc * cB + Vc * nc) + Ic * rB) / (cB * (Bc * cB + nc) + Ic * uc) - rB / uc
    }(1e3);

    function yn(cB, Bc, nc) {
      return Math.min(Math.max(cB, Bc), nc)
    }
    const zn = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function pB(cB, Bc) {
      const nc = new Map(Bc),
        Vc = [],
        Ic = [],
        rB = () => 0 === Ic.length || Ic[Ic.length - 1].active;
      let uc = null;
      const sc = () => {
        const cB = [...nc].filter((cB => {
            let [, Bc] = cB;
            return !0 !== Bc
          })),
          Bc = cB.map((cB => {
            let [Bc] = cB;
            return Bc
          })).join("|");
        uc = cB.length ? new RegExp(`\\b(${Bc})\\b`, "g") : null
      };
      sc();
      for (const Mc of cB.split("\n")) {
        const cB = zn.exec(Mc);
        if (!cB) {
          rB() && Vc.push(uc ? hB(Mc, uc, nc) : Mc);
          continue
        }
        const Bc = cB[1],
          Pc = cB[2].trim();
        if ("ifdef" === Bc || "ifndef" === Bc || "if" === Bc) {
          const cB = rB(),
            Vc = "if" === Bc ? an(Pc, nc) : nc.has(Pc) === ("ifdef" === Bc);
          Ic.push({
            active: cB && Vc,
            parentActive: cB,
            taken: Vc
          })
        } else if ("elif" === Bc || "else" === Bc) {
          const cB = Ic[Ic.length - 1];
          if (!cB) throw new Error(`#${Bc} without #if`);
          const Vc = !cB.taken && ("else" === Bc || an(Pc, nc));
          cB.active = cB.parentActive && Vc, cB.taken = cB.taken || Vc
        } else if ("endif" === Bc) {
          if (!Ic.pop()) throw new Error("#endif without #if")
        } else if (rB()) {
          const [cB, ...Vc] = Pc.split(/\s+/);
          "undef" === Bc ? nc.delete(cB) : nc.set(cB, !Vc.length || Vc.join(" ")), sc()
        }
      }
      if (Ic.length) throw new Error("Unterminated #if");
      return Vc.join("\n")
    }

    function hB(cB, Bc, nc) {
      return cB.replace(Bc, (cB => {
        const Bc = nc.get(cB);
        return "string" === typeof Bc ? Bc : cB
      }))
    }

    function an(cB, Bc) {
      var nc;
      const Vc = null !== (nc = cB.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== nc ? nc : [];
      let Ic = 0;
      const rB = () => Vc[Ic],
        uc = () => Vc[Ic++],
        sc = cB => {
          const nc = /^\d/.test(cB) ? cB : Bc.get(cB);
          return "string" === typeof nc ? parseInt(nc) : Number.NaN
        },
        Mc = () => {
          const cB = uc();
          if ("!" === cB) return !Mc();
          if ("(" === cB) {
            const cB = qB();
            return uc(), cB
          }
          if ("defined" === cB) {
            const cB = "(" === rB();
            cB && uc();
            const nc = uc();
            return cB && uc(), Bc.has(nc)
          }
          const nc = rB();
          if ("==" === nc || "!=" === nc || ">" === nc || "<" === nc || ">=" === nc || "<=" === nc) {
            uc();
            const Bc = sc(cB),
              Vc = sc(uc());
            if (Number.isNaN(Bc) || Number.isNaN(Vc)) return !1;
            switch (nc) {
              case "==":
                return Bc === Vc;
              case "!=":
                return Bc !== Vc;
              case ">":
                return Bc > Vc;
              case "<":
                return Bc < Vc;
              case ">=":
                return Bc >= Vc;
              default:
                return Bc <= Vc
            }
          }
          return Bc.has(cB)
        },
        Pc = () => {
          let cB = Mc();
          for (;
            "&&" === rB();) {
            uc();
            const Bc = Mc();
            cB = cB && Bc
          }
          return cB
        },
        qB = () => {
          let cB = Pc();
          for (;
            "||" === rB();) {
            uc();
            const Bc = Pc();
            cB = cB || Bc
          }
          return cB
        },
        Oc = qB();
      if (Ic !== Vc.length) throw new Error(`Cannot evaluate #if ${cB}`);
      return Oc
    }
    var lB = nc(35686),
      YB = nc(36016),
      LB = nc(36024),
      gn = nc(38872),
      UB = nc(37256);
    const bn = 32,
      ZB = [10, 3, 10],
      QB = [21, 7, 21],
      CB = QB[0] * QB[1] * QB[2],
      vn = 0,
      DB = 1,
      NB = 2,
      EB = 3,
      oB = 64,
      WB = 512,
      wB = 4 * CB,
      kn = 1536,
      XB = wB + CB * kn,
      HB = 1073741824,
      FB = XB + 1;

    function JB(cB, Bc) {
      const nc = cB % Bc;
      return nc < 0 ? nc + Bc : nc
    }

    function jn(cB, Bc, nc) {
      return Vc = JB(cB, QB[0]), Ic = JB(Bc, QB[1]), rB = JB(nc, QB[2]), Vc + QB[0] * (Ic + QB[1] * rB);
      var Vc, Ic, rB
    }

    function RB(cB, Bc, nc) {
      return cB + 8 * (Bc + 8 * nc)
    }

    function KB(cB, Bc, nc) {
      return cB + 4 * (Bc + 4 * nc)
    }
    const xn = 65535,
      dB = 0,
      AB = 1,
      GB = 2,
      cV = 3;

    function Bn(cB) {
      return Math.ceil(cB * cB / 32)
    }
    const nn = 8192,
      Vn = 1 << 18,
      In = 65536,
      rV = 294912,
      un = 128,
      sn = 4096,
      Mn = 16,
      Pn = 16385,
      qV = 81921,
      On = 147457,
      Tn = 4194304;
    const fn = [0, 0, 0],
      mV = [0, 0, 0];

    function en(cB, Bc, nc, Vc) {
      ! function(cB, Bc, nc) {
        const [Vc, Ic, rB] = [cB[0], cB[1], cB[2]];
        let uc, sc, Mc;
        Math.abs(Ic) < .99 ? (uc = rB, sc = 0, Mc = -Vc) : (uc = -Ic, sc = Vc, Mc = 0);
        const Pc = Math.hypot(uc, sc, Mc);
        Bc[0] = uc / Pc, Bc[1] = sc / Pc, Bc[2] = Mc / Pc, nc[0] = Ic * Bc[2] - rB * Bc[1], nc[1] = rB * Bc[0] - Vc * Bc[2], nc[2] = Vc * Bc[1] - Ic * Bc[0]
      }(Vc, fn, mV);
      const Ic = 1 / 32;
      for (const [rB, uc] of [
          [0, fn],
          [4, mV]
        ]) {
        for (let nc = 0; nc < 3; nc++) cB[Bc + rB + nc] = uc[nc] * Ic;
        cB[Bc + rB + 3] = -(uc[0] * nc[0] + uc[1] * nc[1] + uc[2] * nc[2]) * Ic
      }
    }
    class tV {
      constructor() {
        this.words = new Uint32Array(On), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Ln(cB, Bc) {
        this.parts = 0, this.refs = 0, this.view = cB, this.viewAt = Bc;
        const nc = cB[Bc + 1] * cB[Bc + 6] - cB[Bc + 2] * cB[Bc + 5],
          Vc = cB[Bc + 2] * cB[Bc + 4] - cB[Bc] * cB[Bc + 6],
          Ic = cB[Bc] * cB[Bc + 5] - cB[Bc + 1] * cB[Bc + 4],
          rB = Math.hypot(nc, Vc, Ic) || 1;
        this.light[0] = nc / rB, this.light[1] = Vc / rB, this.light[2] = Ic / rB
      }
      add(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= sn || ! function(cB, Bc, nc) {
            const Vc = cB[Bc],
              Ic = cB[Bc + 1],
              rB = cB[Bc + 2],
              uc = cB[Bc + 3],
              sc = cB[Bc + 4],
              Mc = cB[Bc + 5],
              Pc = cB[Bc + 6],
              qB = cB[Bc + 7],
              Oc = cB[Bc + 8],
              Tc = cB[Bc + 9],
              fc = cB[Bc + 10],
              mB = cB[Bc + 11],
              ec = cB[Bc + 12],
              tB = cB[Bc + 13],
              Sc = cB[Bc + 14],
              yB = cB[Bc + 15],
              zB = Vc * Mc - Ic * sc,
              pc = Vc * Pc - rB * sc,
              hc = Vc * qB - uc * sc,
              aB = Ic * Pc - rB * Mc,
              lc = Ic * qB - uc * Mc,
              Yc = rB * qB - uc * Pc,
              Lc = Oc * tB - Tc * ec,
              gB = Oc * Sc - fc * ec,
              Uc = Oc * yB - mB * ec,
              bB = Tc * Sc - fc * tB,
              Zc = Tc * yB - mB * tB,
              Qc = fc * yB - mB * Sc,
              Cc = zB * Qc - pc * Zc + hc * bB + aB * Uc - lc * gB + Yc * Lc;
            if (!(Math.abs(Cc) > 1e-12)) return !1;
            const vB = 1 / Cc;
            return nc[0] = (Mc * Qc - Pc * Zc + qB * bB) * vB, nc[1] = (rB * Zc - Ic * Qc - uc * bB) * vB, nc[2] = (tB * Yc - Sc * lc + yB * aB) * vB, nc[3] = (fc * lc - Tc * Yc - mB * aB) * vB, nc[4] = (Pc * Uc - sc * Qc - qB * gB) * vB, nc[5] = (Vc * Qc - rB * Uc + uc * gB) * vB, nc[6] = (Sc * hc - ec * Yc - yB * pc) * vB, nc[7] = (Oc * Yc - fc * hc + mB * pc) * vB, nc[8] = (sc * Zc - Mc * Uc + qB * Lc) * vB, nc[9] = (Ic * Uc - Vc * Zc - uc * Lc) * vB, nc[10] = (ec * lc - tB * hc + yB * zB) * vB, nc[11] = (Tc * hc - Oc * lc - mB * zB) * vB, nc[12] = (Mc * gB - sc * bB - Pc * Lc) * vB, nc[13] = (Vc * bB - Ic * gB + rB * Lc) * vB, nc[14] = (tB * pc - ec * aB - Sc * zB) * vB, nc[15] = (Oc * aB - Tc * pc + fc * zB) * vB, !0
          }(Bc, nc, this.inverse)) return;
        const {
          view: Vc,
          viewAt: Ic
        } = this, rB = nc;
        let uc = 1 / 0,
          sc = 1 / 0,
          Mc = -1 / 0,
          Pc = -1 / 0,
          qB = -1 / 0;
        const [Oc, Tc, fc] = this.light;
        for (let hc = 0; hc < 8; hc++) {
          const nc = 1 & hc ? cB.hi[0] : cB.lo[0],
            mB = 2 & hc ? cB.hi[1] : cB.lo[1],
            ec = 4 & hc ? cB.hi[2] : cB.lo[2],
            tB = nc * Bc[rB] + mB * Bc[rB + 4] + ec * Bc[rB + 8] + Bc[rB + 12],
            Sc = nc * Bc[rB + 1] + mB * Bc[rB + 5] + ec * Bc[rB + 9] + Bc[rB + 13],
            yB = nc * Bc[rB + 2] + mB * Bc[rB + 6] + ec * Bc[rB + 10] + Bc[rB + 14],
            zB = Vc[Ic] * tB + Vc[Ic + 1] * Sc + Vc[Ic + 2] * yB + Vc[Ic + 3],
            pc = Vc[Ic + 4] * tB + Vc[Ic + 5] * Sc + Vc[Ic + 6] * yB + Vc[Ic + 7];
          uc = Math.min(uc, zB), sc = Math.min(sc, pc), Mc = Math.max(Mc, zB), Pc = Math.max(Pc, pc), qB = Math.max(qB, Oc * tB + Tc * Sc + fc * yB)
        }
        if (Mc < -1 || Pc < -1 || uc >= 1 || sc >= 1) return;
        const mB = this.parts++,
          ec = this.rects;
        ec[4 * mB] = Sn(uc), ec[4 * mB + 1] = Sn(sc), ec[4 * mB + 2] = Sn(Mc), ec[4 * mB + 3] = Sn(Pc);
        const tB = this.inverse,
          {
            cell: Sc,
            dims: yB,
            lo: zB
          } = cB,
          pc = qV + mB * Mn;
        for (let hc = 0; hc < 3; hc++) this.floats[pc + 4 * hc] = tB[hc] / Sc, this.floats[pc + 4 * hc + 1] = tB[4 + hc] / Sc, this.floats[pc + 4 * hc + 2] = tB[8 + hc] / Sc, this.floats[pc + 4 * hc + 3] = (tB[12 + hc] - zB[hc]) / Sc;
        this.words[pc + 12] = cB.at, this.floats[pc + 13] = qB + .001 * (1 + Math.abs(qB)), this.words[pc + 14] = yB[0] | yB[1] << 8 | yB[2] << 16
      }
      finish() {
        const cB = un,
          {
            counts: Bc,
            rects: nc,
            words: Vc
          } = this;
        Bc.fill(0);
        let Ic = 0,
          rB = 0;
        for (; rB < this.parts; rB++) {
          const Vc = 4 * rB,
            uc = (nc[Vc + 2] - nc[Vc] + 1) * (nc[Vc + 3] - nc[Vc + 1] + 1);
          if (Ic + uc > 65536) break;
          Ic += uc;
          for (let Ic = nc[Vc + 1]; Ic <= nc[Vc + 3]; Ic++)
            for (let rB = nc[Vc]; rB <= nc[Vc + 2]; rB++) Bc[Ic * cB + rB]++
        }
        let uc = 0;
        for (let Mc = 0; Mc < 16384; Mc++) Vc[Mc] = uc, uc += Bc[Mc], Bc[Mc] = Vc[Mc];
        Vc[16384] = uc;
        for (let Mc = 0; Mc < rB; Mc++) {
          const Ic = 4 * Mc;
          for (let rB = nc[Ic + 1]; rB <= nc[Ic + 3]; rB++)
            for (let uc = nc[Ic]; uc <= nc[Ic + 2]; uc++) Vc[Pn + Bc[rB * cB + uc]++] = Mc
        }
        const sc = this.floats;
        for (let Mc = 0; Mc < 16384; Mc++) {
          const cB = Pn + Vc[Mc],
            Bc = cB + Math.min(Vc[Mc + 1] - Vc[Mc], 64);
          for (let nc = cB + 1; nc < Bc; nc++) {
            const Bc = Vc[nc],
              Ic = sc[81934 + Bc * Mn];
            let rB = nc - 1;
            for (; rB >= cB && sc[81934 + Vc[rB] * Mn] < Ic; rB--) Vc[rB + 1] = Vc[rB];
            Vc[rB + 1] = Bc
          }
        }
        this.refs = Ic
      }
    }

    function Sn(cB) {
      return Math.min(127, Math.max(0, Math.floor((.5 * cB + .5) * un)))
    }

    function yV(cB, Bc, nc, Vc, Ic) {
      for (let rB = 0; rB < 4; rB++)
        for (let uc = 0; uc < 4; uc++) Ic[4 * rB + uc] = cB[Bc + 4 * rB] * nc[Vc + uc] + cB[Bc + 4 * rB + 1] * nc[Vc + 4 + uc] + cB[Bc + 4 * rB + 2] * nc[Vc + 8 + uc] + cB[Bc + 4 * rB + 3] * nc[Vc + 12 + uc]
    }

    function zV(cB, Bc, nc, Vc, Ic) {
      const rB = cB[0] - Bc,
        uc = cB[1] - nc,
        sc = cB[2] - Vc,
        Mc = cB[3] - Bc,
        Pc = cB[4] - nc,
        qB = cB[5] - Vc,
        Oc = cB[6] - Bc,
        Tc = cB[7] - nc,
        fc = cB[8] - Vc;
      if (Math.min(rB, Mc, Oc) > Ic || Math.max(rB, Mc, Oc) < -Ic) return !1;
      if (Math.min(uc, Pc, Tc) > Ic || Math.max(uc, Pc, Tc) < -Ic) return !1;
      if (Math.min(sc, qB, fc) > Ic || Math.max(sc, qB, fc) < -Ic) return !1;
      const mB = Mc - rB,
        ec = Pc - uc,
        tB = qB - sc,
        Sc = Oc - Mc,
        yB = Tc - Pc,
        zB = fc - qB,
        pc = ec * zB - tB * yB,
        hc = tB * Sc - mB * zB,
        aB = mB * yB - ec * Sc;
      if (Math.abs(pc * rB + hc * uc + aB * sc) > Ic * (Math.abs(pc) + Math.abs(hc) + Math.abs(aB))) return !1;
      const lc = [mB, ec, tB, Sc, yB, zB, rB - Oc, uc - Tc, sc - fc];
      for (let Yc = 0; Yc < 3; Yc++) {
        const cB = lc[3 * Yc],
          Bc = lc[3 * Yc + 1],
          nc = lc[3 * Yc + 2];
        for (let Vc = 0; Vc < 3; Vc++) {
          const mB = 0 === Vc ? 0 : 1 === Vc ? nc : -Bc,
            ec = 0 === Vc ? -nc : 1 === Vc ? 0 : cB,
            tB = 0 === Vc ? Bc : 1 === Vc ? -cB : 0,
            Sc = mB * rB + ec * uc + tB * sc,
            yB = mB * Mc + ec * Pc + tB * qB,
            zB = mB * Oc + ec * Tc + tB * fc,
            pc = Ic * (Math.abs(mB) + Math.abs(ec) + Math.abs(tB));
          if (Math.min(Sc, yB, zB) > pc || Math.max(Sc, yB, zB) < -pc) return !1
        }
      }
      return !0
    }
    const pn = new Float32Array(1);
    new Uint32Array(pn.buffer);
    var hn = nc(37261);

    function aV(cB) {
      const [Bc, nc, Vc] = hn.n;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${cB.group}) @binding(${cB.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Bc-1}, ${nc-1}, ${Vc-1});\n}\n`
    }

    function lnc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Ic, rB, uc] = QB, [sc, Mc, Pc] = ZB, qB = Math.log2(bn), Oc = Vc ? "var<private> bloxdSpCrossed: bool;\n" : "", Tc = Vc ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${cB.group}) @binding(${cB.NB}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${cB.group}) @binding(${cB.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${nc?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Oc}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${AB}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${GB}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${nc?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${cV}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Ic}, ${rB}, ${uc});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Ic} * (s.y + ${rB} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${sc}, ${Mc}, ${Pc}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${qB}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${EB}u) {\n\t\treturn named && state == ${NB}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${wB}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${XB}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Bc?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Bc?`\t\tif (exits && step > 0 && step % ${gV} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${qB}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${vn}u || kind == ${DB}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${NB}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${wB}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Tc}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Yn = {
      group: 0,
      uniform: 0,
      NB: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function Ln() {
      const cB = Yn;
      return `${aV(cB)}${lnc(cB,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${hn.e}>,\n}\n@group(${cB.group}) @binding(${cB.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${cB.group}) @binding(${cB.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${hn.k})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${hn.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${hn.g}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const gV = 2;
    const Un = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function bV(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Vc = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Bc.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Ic = "trace" === nc || "lit" === nc,
        rB = "maskEdge" === nc ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        uc = Ic ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Bc.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Bc.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===nc?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${rB};\n`;
      return `${Vc}${cB.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Ic?function(){const[cB,Bc,nc]=hn.n;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${cB}.0, ${Bc}.0, ${nc}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${uc}}\n`:""}${cB.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Bc.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Bc.renderOffset});\n}\n`:""}`
    }
    const Zn = "bloxdSpOwnTexture";

    function Qn(cB) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${cB.texture}) - 1u)))`
    }
    const Cn = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${MB.f.map((cB=>{let[Bc,nc]=cB;return`\tbloxdSpOut.${Bc} = (bloxdSpWord & ${nc}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function vV(cB) {
      return `bloxdSpFlags(${cB})`
    }
    const Dn = `${gn.i}.eyePosition`;

    function Nn(cB, Bc, nc, Vc, Ic) {
      const rB = cB.indexOf(Bc);
      if (rB < 0 || cB.indexOf(Bc, rB + 1) >= 0) throw new Error(`Lite's ${Ic} program changed at the shader pack ${Vc} hook: ${rB<0?"no":"more than one"} anchor (lite/${Ic}ShaderPack.ts)`);
      return cB.slice(0, rB) + nc + cB.slice(rB + Bc.length)
    }

    function En(cB) {
      return cB.sunShadow || cB.airShadow
    }

    function onc(cB, Bc) {
      return Bc && En(cB)
    }
    const Wn = {
      group: gn.g,
      ...gn.s
    };

    function wn(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!En(cB)) return "";
      if (Bc) {
        const Bc = Wn,
          Ic = "trace" === nc || "lit" === nc;
        let rB = "";
        cB.sunShadow && (rB = Ic ? `${lnc(Bc,!0,"lit"===nc)}${Vc=Bc,`@group(${Vc.group}) @binding(${Vc.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Vc.group}) @binding(${Vc.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(cB, Bc, nc) {
          const Vc = `@group(${cB}) @binding(${Bc}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return nc ? `${Vc}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Un}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((cB=>`\t{\n\t\tlet o = vec2i(${cB});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Vc
        }(Bc.group, gn.w, "maskEdge" === nc));
        const uc = {
          shadowDirection: `${gn.i}.shadowDirection`,
          renderOffset: `${gn.i}.renderOffset`,
          eyePosition: `${gn.i}.eyePosition`
        };
        return `${aV(Bc)}${rB}${function(cB){const[Bc,nc,Vc]=hn.n;return`@group(${cB.group}) @binding(${cB.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${cB.group}) @binding(${cB.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Bc}.0, ${nc}.0, ${Vc}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Bc)}${bV(cB,uc,nc)}`
      }
      var Vc;
      return `${cB.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${cB.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function kV(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Bc) return "";
      const rB = (uc = "fragmentInputs.vPositionW", sc = cB.sunShadow ? {
        normal: nc,
        flags: Vc
      } : null, `\n\tbloxdSpShadowPosition = ${uc};\n${sc?`\tbloxdSpShadowNormal = normalize(${sc.normal});\n\tbloxdSpShadowEmissive = (${sc.flags} & ${MB.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${sc.flags} & ${MB.h}u) != 0u;\n`:""}`);
      var uc, sc;
      return cB.sunShadow && ("mask" === Ic || "maskEdge" === Ic) ? `${rB}${Mc="fragmentInputs.position",Pc="maskEdge"===Ic,`\n\tbloxdSpShadowPixel = vec2i(${Mc}.xy);\n${Pc?`\tbloxdSpShadowZ = ${Mc}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Mc}.z), dpdy(${Mc}.z));\n`:""}`}` : rB;
      var Mc, Pc
    }
    const Xn = "bloxdSpTextureRotation",
      Hn = "bloxdSpTextureLayers",
      Fn = `@group(${gn.g}) @binding(${gn.y}) var<storage, read> ${Hn}: array<u32>;\n`;

    function Jn(cB) {
      return `\tvertexOutputs.vPackTexture = ${Hn}[min(u32(${cB}), arrayLength(&${Hn}) - 1u)];\n`
    }

    function jV(cB) {
      return void 0 !== cB.uv
    }

    function Rn(cB) {
      if (!cB) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (jV(cB)) return function(cB) {
        const {
          texture: Bc,
          cells: nc,
          layers: Vc
        } = cB, Ic = `textureDimensions(${Bc}, bloxdSpLevel)`, rB = nc ? `max(vec2u(vec2f(${Ic}) / ${nc}), vec2u(1u))` : Ic, uc = nc ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${rB};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${nc}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${nc}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Bc}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Ic} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${rB};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Bc}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let sc;
        if (nc)
          if (1 === Vc.length) sc = `\treturn bloxdSpOwnTexel(${Vc[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const cB = Vc.length - 1;
            sc = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Vc[cB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Bc = cB - 1; Bc >= 0; Bc--) sc += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Vc[Bc]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            sc += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else sc = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${cB.id?`var<private> ${Zn}: u32;\n`:""}${uc}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Qn(cB)};\n\treturn ${rB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${cB.id?Zn:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Qn(cB)};\n${sc}}\n`
      }(cB);
      const Bc = cB,
        nc = cB => {
          const nc = cB > 0 ? `bloxdSpLayer - ${Bc.layers*cB}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${cB}, ${Bc.sampler}, bloxdSpTurned, ${nc}, round(bloxdSpMipLevel));`
        };
      let Vc = "";
      for (let rB = 0; rB < Bc.count - 1; rB++) Vc += `\tif (bloxdSpLayer < ${Bc.layers*(rB+1)}u) {\n\t\t${nc(rB)}\n\t}\n`;
      const Ic = Bc.frame ? `${Bc.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${Xn}: u32;\n${Fn}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${Xn} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${Xn} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${Xn} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Ic}${Vc}\t${nc(Bc.count-1)}\n}\n`
    }

    function iV(cB, Bc, nc) {
      return !!cB.surface && "bloxdDefaultSurface" !== cB.surface && function(cB, Bc) {
        return "liquid" === Bc || !cB
      }(Bc, nc)
    }

    function Kn(cB, Bc) {
      return cB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Bc.vertexLocalPosition}, ${vV(Bc.vertexFlags)});\n\t\tlet bloxdSpVertex = ${cB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function xV(cB, Bc, nc, Vc, Ic) {
      if (!cB.surface) return "";
      const rB = (cB, Bc) => `\n\tlet bloxdSpTexelUV = ${cB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Bc}) - 1u));`;
      let uc = "",
        sc = "0u, 0u, vec2f(0.0), 0.0";
      const Mc = Vc && jV(Vc) ? Vc : null,
        Pc = Vc && !jV(Vc) ? Vc : null;
      if (Mc) {
        uc = `${Mc.id?`\n\tlet bloxdSpTexture = ${Mc.id};\n\t${Zn} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Mc.uv};${rB(function(cB,Bc){var nc;return`${null!==(nc=cB.levelUv)&&void 0!==nc?nc:cB.cells?`${Bc} / ${cB.cells}`:Bc} * vec2f(textureDimensions(${cB.texture}))`}(Mc,"bloxdSpUv"),Mc.texture)}`, sc = (Mc.id ? `${Zn}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else Pc && (uc = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${Xn} = bloxdSpTexture >> 16u;${rB(`fragmentInputs.vMainUV1 * ${(0,lB.sb)(Pc.width)}`,"textureAtlas0")}`, sc = `bloxdSpTexture & 0xffffu, ${Xn}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const qB = Ic.overlayColour,
        Oc = qB ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Tc = "bloxdDefaultSurface" !== cB.surface || qB ? `\n\tbaseColor = vec4f(${Oc}, baseColor.a);` : "",
        fc = iV(cB, Bc, nc) ? `\n\t${Ic.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${uc}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Ic.alpha}, ${Ic.enchantTier}, ${Ic.enchantColour}, ${Ic.enchantSpeed}, ${null!==qB&&void 0!==qB?qB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Ic.normal}, ${Ic.localPosition}, ${vV(Ic.flags)}, ${sc});\n\tlet bloxdSpSurface = ${cB.surface}(bloxdSpSurfaceIn);${Tc}${fc}\n`
    }
    const dn = "bloxdSpLightIn";

    function An(cB, Bc, nc, Vc) {
      if (!cB.light) return "";
      const Ic = Bc ? `${lB.k}.rgb, ${lB.k}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${lB.i}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: rB,
          diffuse: uc,
          emissive: sc,
          ambient: Mc,
          fogColour: Pc,
          fogAlpha: qB,
          normal: Oc
        } = Vc;
      return `\tvar ${dn} = BloxdLightIn(vec3f(0.0), ${nc?rB:"0.0"}, ${uc}, ${sc}, ${Mc}, ${Ic}, ${Pc}, ${qB}, fragmentInputs.vPositionW, ${Oc}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${dn}.litColour = bloxdLitColour(bloxdSpSurface, ${dn});\n`
    }

    function Gn(cB) {
      return cB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${cB.light}(bloxdSpSurface, ${dn});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const cI = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      BV = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      nV = "\treturn color;\n}",
      VV = {
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
    const IV = Object.freeze({});

    function rI(cB) {
      var Bc;
      return !(null === (Bc = (0, UB.f)(cB)) || void 0 === Bc || !Bc.sceneDepth)
    }

    function uV(cB) {
      const Bc = (0, UB.f)(cB);
      return !!Bc && iV(Bc.hooks, Bc.strict, Bc.program)
    }

    function sV(cB, Bc, nc, Vc) {
      return Nn(cB, Bc, nc, Vc, "terrain")
    }

    function MV(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const rB = function(cB) {
          return (0, UB.b)(cB.packVariant, cB.liquid ? "liquid" : "terrain")
        }(cB),
        {
          hooks: uc
        } = rB,
        sc = onc(rB, Vc),
        Mc = "edge" === Ic ? "maskEdge" : "plain" === Ic ? "mask" : "trace",
        Pc = Kn(uc, VV);
      Pc && (Bc = sV(Bc, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${Pc}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const qB = "atlas" === cB.texture ? {
          count: cB.atlasCount,
          layers: cB.atlasLayers,
          width: cB.JIc,
          sampler: "atlasSampler",
          frame: cB.animated ? nc : null
        } : null,
        Oc = `${rB.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${kV(rB,sc,VV.normal,VV.flags,Mc)}${xV(uc,rB.strict,rB.program,qB,VV)}`;
      Oc && (Bc = sV(Bc, cI, `${cI.slice(0,-1)}${Oc}`, "surface"));
      const Tc = Gn(uc);
      return Tc && (Bc = sV(Bc, BV, `${An(uc,cB.lighting,cB.dirLightCount>0,VV)}${BV}`, "light input"), Bc = sV(Bc, nV, `${Tc.slice(1)}${nV}`, "light")), `${(0,gn.D)()}${rB.sceneDepth?`@group(${gn.g}) @binding(${gn.q}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Dn};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${wn(rB,sc,Mc)}${Rn(qB)}${Cn}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${rB.code}${Bc}`
    }
    const PV = aB.c.WGSL;

    function qI(cB) {
      return void 0 !== cB.packVariant
    }
    const OV = {
        Dqc: 0,
        Nqc: 4,
        Eqc: 8,
        oqc: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      TV = OV.aoLevels + 4,
      fV = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      mI = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      eV = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      tI = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      SV = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      yI = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      zI = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      pV = 0,
      hV = 3,
      aI = 4,
      lV = 5,
      YV = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${YB.b}, ${YB.b}, corner == 0u || corner == 3u);\n\tlet dv = select(-${YB.b}, ${YB.b}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      LV = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = ((${LB.e}u >> dir) & 1u) == 1u;\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const gI = {
      cn: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: cB => `animDataPerTex[${cB}]`
    };

    function UV(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : gI,
        Vc = arguments.length > 3 ? arguments[3] : void 0;
      return `\n\tlet atlasIdxIn = ${cB};\n\tlet animTick = ${nc.cn};\n\tlet animTickStride = ${nc.stride};\n\tlet numAnimTextures = ${nc.count};\n\t${(0,lc.g)(aB.c.WGSL,nc.perTexture)}\n\t${Bc}animLayer;\n\t${Vc?`${Vc}animNext;`:""}\n`
    }

    function bI(cB) {
      const Bc = cB => `textureSample(diffuseSampler, diffuseSamplerSampler, ${cB})`;
      return cB ? `baseColor = mix(${Bc("fragmentInputs.vMainUV1")}, ${Bc("fragmentInputs.vMainUV1 + vec2f(0.0, fragmentInputs.vAnimStripNext.x)")}, fragmentInputs.vAnimStripNext.y);` : `baseColor = ${Bc("fragmentInputs.vMainUV1")};`
    }

    function ZV(cB) {
      const Bc = cB.atlasCount > 1 || cB.animated,
        nc = (nc, Vc) => {
          const Ic = nc > 0 ? `${Vc} - ${cB.atlasLayers.toFixed(1)} * ${nc.toFixed(1)}` : Vc;
          return `${Bc?"textureSampleLevel":"textureSample"}(textureAtlas${nc}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Ic}))${Bc?", atlasLod":""})`
        },
        Vc = function(Bc, Vc) {
          let Ic = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB.atlasCount;
          if (1 === Ic) return `${Bc} = ${nc(0,Vc)};`;
          let rB = "";
          for (let uc = 0; uc < Ic; uc++) {
            const Ic = cB.atlasLayers * (uc + 1) - .5;
            rB += `${uc>0?" else ":"\n\t"}if (${Vc} < ${(0,lB.sb)(Ic)}) {\n\t\t${Bc} = ${nc(uc,Vc)};\n\t}`
          }
          return rB
        },
        Ic = Bc ? `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,lB.sb)(cB.JIc)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n` : "",
        rB = cB.animated ? `\n\tif (fragmentInputs.texAtlasNext.y > 0.0) {\n\t\tvar atlasNextColor: vec4f;\n\t\t${Vc("atlasNextColor","fragmentInputs.texAtlasNext.x",cB.nextFrameAtlases)}\n\t\tbaseColor = mix(baseColor, atlasNextColor, fragmentInputs.texAtlasNext.y);\n\t}` : "";
      return `${Ic}${Vc("baseColor","fragmentInputs.texAtlasIndex")}${rB}`
    }

    function QV(cB) {
      return `terrain-${cB.texture}${"atlas"===cB.texture?cB.atlasCount:""}${cB.animated?"-anim":""}${void 0!==cB.nextFrameAtlases?`n${cB.nextFrameAtlases}`:""}${cB.alphaTest?"-test":""}${cB.lighting?"-lit":""}-dir${cB.dirLightCount}${cB.packed?"-packed":""}${qI(cB)?`-sp${cB.packVariant}`:""}${cB.liquid?"-liquid":""}${cB.resting?"-rest":""}`
    }

    function CV(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Vc = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const nc = "none" !== cB.texture,
          Vc = "atlas" === cB.texture,
          Ic = cB.dirLightCount > 0,
          rB = qI(cB);
        if (cB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${cB.dirLightCount}`);
        let uc = 1,
          sc = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Vc) {
          cB.animated && (sc += `@group(2) @binding(${uc++}) var<storage, read> animDataPerTex: array<f32>;\n`), sc += `@group(2) @binding(${uc++}) var atlasSampler: sampler;\n`;
          for (let Bc = 0; Bc < cB.atlasCount; Bc++) sc += `@group(2) @binding(${uc++}) var textureAtlas${Bc}: texture_2d_array<f32>;\n`
        } else "single" === cB.texture && (sc += `@group(2) @binding(${uc++}) var diffuseSamplerSampler: sampler;\n`, sc += `@group(2) @binding(${uc++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Mc = function(cB) {
            const Bc = zI,
              nc = "none" !== cB.texture,
              Vc = "atlas" === cB.texture,
              Ic = qI(cB);
            return cB.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${nc?"uv: vec2f,":""}\n\t${Vc?"texAtlasIndices: f32,":""}\n\t${cB.lighting?"aPackedLightLevels: f32,":""}\n\t${Ic?"blockFlagWords: vec2u,":""}\n}\n${YV}\n${LV}\n${"single"===cB.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\tlet ao = (r2 >> (3u + 2u * slot)) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${nc?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===cB.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Vc?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${cB.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Ic?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Bc.position}) position: vec3f,\n\t@location(${Bc.normal}) normal: vec4f,\n\t@location(${Bc.color}) color: vec4f,\n\t${nc?`@location(${Bc.uv}) uv: vec2f,`:""}\n\t${cB.lighting?`@location(${Bc.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Ic?`@location(${Bc.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(cB),
          Pc = `\n${tI}\n${mI}\n${eV}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${sc}\n${Kc}\n${Mc.declarations}\nstruct Varyings {\n\t${"none"===Bc?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${cB.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Ic?"@location(5) vTerrainLambert: f32,":""}\n\t${nc?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Vc?"@location(7) texAtlasIndex: f32,":""}\n\t${cB.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${rB?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${rB&&Vc?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n\t${Vc&&cB.animated?"@location(11) texAtlasNext: vec2f,":""}\n\t${"single"===cB.texture&&cB.animated?"@location(11) vAnimStripNext: vec2f,":""}\n}\n\n${cB.resting?"":(0,lB.t)(PV)}\n${yI}\n\n@vertex\nfn mainVertex(${Mc.parameter}) -> Varyings {\n\t${Mc.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${rB?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${MB.d.placed}u;`:""}\n\t${rB&&Vc?Jn("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${cB.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${nc?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Vc?function(cB){return cB?UV("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = ",gI,"vertexOutputs.texAtlasNext = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(cB.animated):""}\n\t${"single"===cB.texture&&cB.animated?"\n\tlet animFramePos = material.anim.x / abs(material.anim.z);\n\tlet frameTick = floor(animFramePos);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tlet animNextTexIndex = frameTick + 1.0 - material.anim.y * floor((frameTick + 1.0) / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n\tvertexOutputs.vAnimStripNext = vec2f((animNextTexIndex - animTexIndex) / material.anim.y, (animFramePos - frameTick) * step(0.0, material.anim.z));\n":""}\n\t${(0,lB.cb)(PV)}\n\t${(0,lB.M)(PV,cB.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${cB.resting?"":SV}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Vc?ZV(cB):""}\n\t${"single"===cB.texture?bI(cB.animated):""}\n\t${nc?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${cB.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Ic?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${iB}));\n\t${qI(cB)?(0,lB.nb)(aB.c.WGSL):(0,lB.W)(PV)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          qB = new Set;
        cB.lighting && qB.add("BLOXD_LIGHTING");
        Ic && qB.add("BLOXD_TERRAIN_DIRECTIONAL");
        return pB(Pc, new Map([...qB].map((cB => [cB, !0]))))
      }(cB, nc);
      if (!qI(cB)) return Vc;
      const Ic = MV(cB, Vc, UV, Bc, nc);
      return "none" === nc ? Ic : `${Ic}${function(cB){const Bc="none"!==cB.texture&&cB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${cB.resting?"":SV}\n\t${cB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Bc&&"atlas"===cB.texture?ZV(cB):""}\n\t${Bc&&"single"===cB.texture?bI(cB.animated):""}\n\t${Bc?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${MB.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(cB)}`
    }
    const vI = new Map([
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

    function DV(cB, Bc) {
      const nc = new Map;
      let Vc = 0;
      const Ic = [],
        rB = [],
        uc = [];
      for (const Pc of Bc) {
        var sc, Mc;
        const Bc = null !== (sc = Pc.type.trim().split(/\s+/).pop()) && void 0 !== sc ? sc : Pc.type,
          qB = vI.get(Bc);
        if (!qB) throw new Error(`Lite: no uniform layout for ${Pc.name}: ${Pc.type}`);
        const Oc = null !== (Mc = Pc.arraySize) && void 0 !== Mc ? Mc : 0,
          Tc = Oc ? 4 : qB.align;
        Vc = Math.ceil(Vc / Tc) * Tc;
        const fc = Oc ? 4 * Math.ceil(qB.floats / 4) : qB.floats;
        if (nc.set(Pc.name, {
            offset: Vc,
            floats: qB.floats,
            arraySize: Oc,
            stride: fc
          }), Oc && qB.floats <= 2) {
          const Bc = `${cB}_${uc.length}_strided`;
          rB.push(`struct ${Bc} {\n\t@size(16) el: ${qB.wgsl},\n}`), uc.push(Pc.name), Ic.push(`\t@align(16) ${Pc.name}: array<${Bc}, ${Oc}>,`)
        } else Oc ? Ic.push(`\t@align(16) ${Pc.name}: array<${qB.wgsl}, ${Oc}>,`) : Ic.push(`\t${Pc.name}: ${qB.wgsl},`);
        Vc += Oc ? fc * Oc : qB.floats
      }
      return {
        slots: nc,
        floats: Math.max(4, 4 * Math.ceil(Vc / 4)),
        wgsl: `${rB.join("\n")}\nstruct ${cB} {\n${Ic.join("\n")}\n}\n`,
        stridedArrays: uc
      }
    }
    const NV = [{
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
      EV = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      oV = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function WV(cB, Bc) {
      return `#if defined(${cB}) && ${cB}DIRECTUV == 0\nvarying v${Bc}UV: vec2f;\n#endif`
    }

    function wV(cB, Bc, nc) {
      return `#if defined(${cB}) && ${cB}DIRECTUV == 0\nif (uniforms.v${Bc}Infos.x==0.)\n{vertexOutputs.v${Bc}UV= (uniforms.${nc}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Bc}UV= (uniforms.${nc}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function kI(cB, Bc, nc) {
      return `#ifdef ${cB}\n#if ${cB}DIRECTUV == 1\n#define v${Bc}UV vMainUV1\n#elif ${cB}DIRECTUV == 2\n#define v${Bc}UV vMainUV2\n#else\nvarying v${Bc}UV: vec2f;\n#endif\nvar ${nc}SamplerSampler: sampler;\nvar ${nc}Sampler: texture_2d<f32>;\n#endif`
    }
    const XV = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      HV = 256,
      FV = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      JV = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      jI = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      RV = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      iI = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      KV = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      xI = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      dV = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${JV}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${WV("OPACITY","Opacity")}\n${WV("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${xI}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${jI}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${wV("OPACITY","Opacity","opacity")}\n${wV("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${RV}\n#define CUSTOM_VERTEX_MAIN_END\n${iI}\n}\n`;
    const AV = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${kI("OPACITY","Opacity","opacity")}\n${kI("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${xI}\n${KV}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((cB,Bc)=>function(cB){const Bc=`
    frame.lights[LITE_LIGHT$ {
        cB
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      cB
    }\
    nvar diffuse$ {
      cB
    }: vec4f = $ {
      Bc
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      cB
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Bc
    }.vLightData, diffuse$ {
      cB
    }.rgb, $ {
      Bc
    }.vLightSpecular.rgb, diffuse$ {
      cB
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Bc))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, GV = /^([gimus]+)!/, cr = new Set;

    function BI(cB) {
      cr.has(cB) || (cr.add(cB), console.warn(`Lite: no place for plugin code at ${cB} in the standard shader: it is left out`))
    }

    function nI(cB, Bc) {
      let nc = cB;
      const Vc = new Map;
      for (const [rB, uc] of Bc) {
        var Ic;
        Vc.set(rB, `${null!==(Ic=Vc.get(rB))&&void 0!==Ic?Ic:""}${uc}\n`)
      }
      for (const [rB, uc] of Vc) {
        if (!rB.startsWith("!")) {
          const cB = `#define ${rB}`;
          if (!nc.includes(cB)) {
            BI(rB);
            continue
          }
          nc = nc.replace(cB, (() => `\n${uc}\n${cB}`));
          continue
        }
        let cB = rB.substring(1),
          Bc = "g";
        if (cB.startsWith("!")) Bc = "", cB = cB.substring(1);
        else {
          const nc = GV.exec(cB);
          nc && (Bc = nc[1], cB = cB.substring(Bc.length + 1))
        }
        const Vc = new RegExp(cB, Bc.includes("g") ? Bc : `${Bc}g`);
        let Ic = Vc.exec(nc);
        for (Ic || BI(rB); Ic;) {
          const cB = Ic,
            Bc = uc.replace(/\$(\d+)/g, ((Bc, nc) => Number(nc) < cB.length ? cB[Number(nc)] : ""));
          nc = nc.substring(0, cB.index) + Bc + nc.substring(cB.index + cB[0].length), Vc.lastIndex = cB.index + Bc.length, Ic = Vc.exec(nc)
        }
      }
      return nc
    }
    const VI = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      II = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      rr = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function uI(cB) {
      const Bc = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let nc = cB.replace(VI, ((cB, nc, Vc, Ic, rB, uc) => ("attribute" === nc ? Bc.attributes.push({
        name: rB,
        type: uc
      }) : void 0 === nc ? Bc.varyings.push({
        name: rB,
        type: uc,
        interpolation: MI(uc, Vc, Ic)
      }) : Bc.uniforms.push({
        name: rB,
        type: sI(uc)
      }), "")));
      return nc = nc.replace(II, ((cB, nc) => (Bc.samplers.add(nc), ""))), nc = nc.replace(rr, ((cB, nc, Vc) => (Bc.textures.push({
        name: nc,
        type: Vc
      }), ""))), Bc.body = nc, Bc
    }

    function sI(cB) {
      const Bc = cB.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        nc = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Bc);
      if (!nc) throw new Error(`Lite: unsupported uniform type ${cB}`);
      return nc
    }

    function MI(cB, Bc, nc) {
      return void 0 === Bc && void 0 === nc ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(cB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Bc ? "@interpolate(flat) " : `@interpolate(${null!==Bc&&void 0!==Bc?Bc:"perspective"}, ${null!==nc&&void 0!==nc?nc:"center"}) `
    }

    function PI(cB) {
      return fI({
        defines: cB.defines,
        vertex: nI(dV, cB.vertexCode),
        fragment: nI(AV, cB.fragmentCode),
        members: [...NV, ...cB.defines.has("OPACITY") ? EV : [], ...cB.defines.has("EMISSIVE") ? oV : [], ...cB.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function qr(cB) {
      const Bc = cB.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Bc === cB) throw new Error("Lite: fragment main has no return");
      return Bc
    }
    const OI = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${JV}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${jI}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${RV}\n${iI}\n}\n`,
      TI = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${KV}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function fI(cB) {
      const Bc = cB.defines,
        nc = uI(pB(cB.vertex, Bc)),
        Vc = uI(pB(cB.fragment, Bc)),
        Ic = new Map;
      for (const zB of [...nc.varyings, ...Vc.varyings]) Ic.has(zB.name) || Ic.set(zB.name, zB);
      const rB = [...Ic.values()].map(((cB, Bc) => `\t@location(${Bc}) ${cB.interpolation}${cB.name}: ${cB.type},`)),
        uc = [...cB.members];
      for (const zB of [...nc.uniforms, ...Vc.uniforms]) uc.some((cB => cB.name === zB.name)) || uc.push(zB);
      const sc = DV(cB.structName, uc),
        Mc = [],
        Pc = [];
      let qB = 1;
      const Oc = new Set;
      for (const zB of [...nc.textures, ...Vc.textures]) {
        if (Oc.has(zB.name)) continue;
        Oc.add(zB.name);
        const cB = `${zB.name}Sampler`,
          Bc = qB++,
          nc = qB++,
          Vc = zB.type.startsWith("texture_2d_array") ? "2d-array" : zB.type.startsWith("texture_cube") ? "cube" : "2d";
        Mc.push({
          name: zB.name,
          binding: Bc,
          samplerBinding: nc,
          dimension: Vc
        }), Pc.push(`@group(2) @binding(${Bc}) var ${zB.name}: ${zB.type};`), Pc.push(`@group(2) @binding(${nc}) var ${cB}: sampler;`)
      }
      for (const zB of [...nc.samplers, ...Vc.samplers])
        if (!Oc.has(zB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${zB} has no texture`);
      const Tc = [tI, FV, sc.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${cB.structName};`, ...Pc].join("\n"),
        fc = nc.attributes,
        mB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...nc.attributes.map(((cB, Bc) => `\t@location(${Bc}) ${cB.name}: ${cB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        ec = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...rB, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        tB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Vc.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...rB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Kc, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${iB}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Sc = cB => {
          for (const Bc of sc.stridedArrays) cB = cB.replace(new RegExp(`\\b${Bc}\\s*\\[(.*?)\\]`, "g"), `${Bc}[$1].el`);
          return cB
        };
      return {
        vertex: `${Tc}\n${mB}\n${ec}\n${Sc(nc.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Tc}\n${tB}\n${qr((yB=Sc(Vc.body),yB.includes("fragmentInputs.position")?yB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):yB))}`,
        attributes: fc,
        material: sc,
        textures: Mc
      };
      var yB
    }
    const mr = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      eI = cB => ({
        name: cB,
        type: "vec3"
      }),
      tr = cB => ({
        name: cB,
        type: "float"
      }),
      SI = DV("EarthSkyUniforms", [eI("viewFrom"), tr("exposureScale"), eI("zenithOffset"), tr("fogOn"), eI("up"), tr("ditherOn"), eI("sun"), tr("turbidity"), eI("tint"), tr("rayleigh"), eI("sunDir"), tr("mieStrength"), eI("inScatterR"), tr("mieFocus"), eI("inScatterM"), tr("sunE"), eI("extinctionBeta"), tr("sunsetMix"), tr("mieScale"), tr("mieBase"), tr("mieSlope"), tr("sunDiscE"), tr("exposure")]),
      yr = `${tI}\n${FV}\n${SI.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      zr = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${mr.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      pI = `\n${Kc}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(tn).map((cB=>{let[Bc,nc]=cB;return`const TONE_${Bc}: f32 = ${nc};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${SB};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${iB}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var hI = nc(35753);
    const ar = new hI.KV,
      lI = new hI.KV,
      YI = new hI.Quaternion,
      LI = new Float64Array(3),
      gr = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      UI = new Float64Array(16);

    function br(cB, Bc, nc) {
      const Vc = nc.worldMatrix;
      var Ic;
      cB.updateFloat3("viewFrom", Vc[12], Vc[13], Vc[14]), cB.updateFloatsFrom("zenithOffset", Bc.cameraOffset, 0, 3), cB.updateFloatsFrom("up", Bc.up, 0, 3), Bc.luminance > 0 && (cB.updateFloat("exposure", Bc.luminance), cB.updateFloat("exposureScale", (Ic = Bc.luminance, Math.log2(2 / Math.pow(Ic, 4))))), cB.updateFloat("turbidity", Bc.turbidity), cB.updateFloat("rayleigh", Bc.rayleigh), cB.updateFloat("mieStrength", Bc.mieCoefficient), cB.updateFloat("mieFocus", Bc.mieDirectionalG), cB.updateFloatsFrom("tint", Bc.tint, 0, 3), cB.updateFloat("fogOn", Bc.fog && nc.fogEnabled && 0 !== nc.fogMode ? 1 : 0), cB.updateFloat("ditherOn", Bc.dithering ? 1 : 0);
      const rB = Bc.sunPosition;
      if (ar.set(rB[0], rB[1], rB[2]), !Bc.useSunPosition) {
        const cB = Math.PI * (Bc.inclination - .5),
          nc = 2 * Math.PI * (Bc.azimuth - .5);
        ar.set(Bc.distance * Math.cos(nc) * Math.cos(cB), Bc.distance * Math.sin(-cB), Bc.distance * Math.sin(nc) * Math.cos(cB)), hI.Quaternion.FromUnitVectorsToRef(hI.KV.UpReadOnly, lI.set(Bc.up[0], Bc.up[1], Bc.up[2]), YI), ar.rotateByQuaternionToRef(YI, ar)
      }
      cB.updateVector3("sun", ar), LI[0] = ar.x, LI[1] = ar.y, LI[2] = ar.z;
      const uc = eB(Bc, LI, gr);
      cB.updateFloatsFrom("sunDir", uc.sunDir, 0, 3), cB.updateFloat("sunE", uc.sunE), cB.updateFloatsFrom("inScatterR", uc.inScatterR, 0, 3), cB.updateFloatsFrom("inScatterM", uc.inScatterM, 0, 3), cB.updateFloatsFrom("extinctionBeta", uc.extinctionBeta, 0, 3), cB.updateFloat("sunsetMix", uc.sunsetMix), cB.updateFloat("sunDiscE", uc.sunDiscE), cB.updateFloat("mieScale", uc.mieScale), cB.updateFloat("mieBase", uc.mieBase), cB.updateFloat("mieSlope", uc.mieSlope)
    }

    function ZI(cB, Bc) {
      const nc = UI;
      nc[0] = Bc.far, nc[5] = Bc.far, nc[10] = Bc.far, nc[15] = 1;
      const Vc = cB.infiniteDistance;
      for (let Ic = 0; Ic < 3; Ic++) nc[12 + Ic] = cB.position[Ic] + (Vc ? Bc.worldMatrix[12 + Ic] : 0);
      return UI
    }
    var QI = nc(37234);

    function CI(cB) {
      return Math.max(4, 4 * Math.ceil(cB / 4))
    }

    function vr(cB, Bc, nc, Vc) {
      const Ic = cB.createBuffer({
        label: Vc,
        size: CI(Bc.byteLength),
        usage: nc,
        mappedAtCreation: !0
      });
      return new Uint8Array(Ic.getMappedRange(), 0, Bc.byteLength).set(new Uint8Array(Bc.buffer, Bc.byteOffset, Bc.byteLength)), Ic.unmap(), Ic
    }

    function DI(cB, Bc) {
      return Math.floor(Math.log2(Math.max(cB, Bc))) + 1
    }

    function NI(cB, Bc, nc, Vc, Ic, rB) {
      const uc = cB.createTexture({
          label: rB,
          size: {
            width: nc,
            height: Vc,
            depthOrArrayLayers: Ic
          },
          format: "rgba8unorm",
          mipLevelCount: DI(nc, Vc),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        sc = (Bc, nc, Vc, rB) => {
          cB.queue.writeTexture({
            texture: uc,
            mipLevel: nc
          }, Bc, {
            bytesPerRow: 4 * Vc,
            rowsPerImage: rB
          }, {
            width: Vc,
            height: rB,
            depthOrArrayLayers: Ic
          })
        };
      sc(Bc, 0, nc, Vc);
      let Mc = 1;
      for (const Pc of function*(cB, Bc, nc, Vc) {
          let Ic = cB,
            rB = Bc,
            uc = nc;
          for (; rB > 1 || uc > 1;) {
            const cB = Math.max(1, rB >> 1),
              Bc = Math.max(1, uc >> 1),
              nc = new Uint8Array(cB * Bc * Vc * 4),
              sc = 4 * rB;
            let Mc = 0;
            for (let Pc = 0; Pc < Vc; Pc++) {
              const Vc = Pc * sc * uc;
              for (let Pc = 0; Pc < Bc; Pc++) {
                const Bc = Vc + Math.min(2 * Pc, uc - 1) * sc,
                  qB = Vc + Math.min(2 * Pc + 1, uc - 1) * sc;
                for (let Vc = 0; Vc < cB; Vc++) {
                  const cB = 4 * Math.min(2 * Vc, rB - 1),
                    uc = 4 * Math.min(2 * Vc + 1, rB - 1);
                  for (let Vc = 0; Vc < 4; Vc++) nc[Mc++] = Ic[Bc + cB + Vc] + Ic[Bc + uc + Vc] + Ic[qB + cB + Vc] + Ic[qB + uc + Vc] + 2 >> 2
                }
              }
            }
            yield {
              data: nc,
              width: cB,
              height: Bc
            }, Ic = nc, rB = cB, uc = Bc
          }
        }(Bc, nc, Vc, Ic)) sc(Pc.data, Mc++, Pc.width, Pc.height);
      return uc
    }
    const EI = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function oI(cB) {
      if (cB.startsWith("data:")) {
        const Bc = cB.search(/[;,]/);
        return `data:${Bc>5?cB.slice(5,Bc):""} URL of ${cB.length} characters`
      }
      return cB.length > 80 ? `${cB.slice(0,80)}...` : cB
    }
    async function WI(cB) {
      const Bc = await fetch(cB);
      if (!Bc.ok) throw new Error(`${oI(cB)}: ${Bc.status} ${Bc.statusText}`);
      return createImageBitmap(await Bc.blob(), EI)
    }
    async function wI(cB) {
      const Bc = await WI(cB),
        nc = new OffscreenCanvas(Bc.width, Bc.height),
        Vc = nc.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Vc) throw new Error("No 2D context to decode an image");
      Vc.drawImage(Bc, 0, 0);
      const {
        data: Ic
      } = Vc.getImageData(0, 0, Bc.width, Bc.height);
      return Bc.close(), {
        pixels: new Uint8Array(Ic.buffer, Ic.byteOffset, Ic.byteLength),
        width: nc.width,
        height: nc.height
      }
    }
    const kr = new WeakMap;

    function XI(cB, Bc, nc, Vc) {
      var Ic;
      const rB = null !== (Ic = kr.get(cB)) && void 0 !== Ic ? Ic : new Map;
      kr.set(cB, rB);
      let uc = rB.get(Bc);
      return uc || (uc = (async Ic => {
        const rB = null !== (Ic = function(cB, Bc) {
          const nc = cB ? new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength) : null;
          return null !== nc && void 0 !== nc && nc.byteLength && Bc && nc.byteLength % (Bc * Bc * 4) === 0 ? {
            pixels: nc,
            layerWidth: Bc,
            layers: nc.byteLength / (Bc * Bc * 4)
          } : null
        }(nc, Vc)) && void 0 !== Ic ? Ic : await async function(cB) {
          const {
            pixels: Bc,
            width: nc
          } = await wI(cB);
          return {
            pixels: Bc,
            layerWidth: nc,
            layers: Bc.byteLength / (nc * nc * 4)
          }
        }(Bc), {
          layerWidth: uc,
          layers: sc
        } = rB;
        return {
          texture: NI(cB, rB.pixels, uc, uc, sc, `atlas-${Bc}`),
          layerWidth: uc,
          layers: sc
        }
      })(), rB.set(Bc, uc), uc.catch((() => {
        rB.delete(Bc)
      }))), uc
    }
    const HI = new Map([
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
      FI = new Map([
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

    function JI(cB) {
      for (const Bc of (0, QI.n)(cB))
        if (!FI.has((0, QI.j)(Bc))) return !1;
      return !0
    }

    function jr(cB) {
      const Bc = FI.get(cB);
      if (!Bc) return null;
      const [nc, Vc, Ic] = Bc;
      return {
        srcFactor: HI.get(nc),
        dstFactor: HI.get(Vc),
        operation: Ic
      }
    }
    let RI = null;

    function ir(cB) {
      RI = cB
    }

    function KI(cB, Bc, nc) {
      var Vc;
      null === (Vc = RI) || void 0 === Vc || Vc(cB, Bc, nc, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class xr {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(cB, Bc, nc, Vc, Ic) {
        nc !== this.pipeline && (cB.setPipeline(nc), this.pipeline = nc), cB.setBindGroup(1, Vc, [Ic]);
        const rB = Bc.material.bindGroup;
        rB !== this.materialGroup && (cB.setBindGroup(2, rB), this.materialGroup = rB);
        const uc = Bc.program.packGroup;
        uc && uc !== this.packGroup && (cB.setBindGroup(gn.g, uc), this.packGroup = uc);
        const {
          vertexBuffers: sc,
          vertexOffsets: Mc
        } = this;
        for (let Pc = 0; Pc < Bc.vertexBuffers.length; Pc++) sc[Pc] === Bc.vertexBuffers[Pc] && Mc[Pc] === Bc.vertexOffsets[Pc] || (cB.setVertexBuffer(Pc, Bc.vertexBuffers[Pc], Bc.vertexOffsets[Pc]), sc[Pc] = Bc.vertexBuffers[Pc], Mc[Pc] = Bc.vertexOffsets[Pc]);
        Bc.indexBuffer && Bc.indexBuffer !== this.indexBuffer && (cB.setIndexBuffer(Bc.indexBuffer, Bc.indexFormat), this.indexBuffer = Bc.indexBuffer)
      }
    }
    class dI {
      constructor(cB, Bc, nc, Vc) {
        this.modelMeshes = cB, this.Wrc = Bc, this.maker = nc, this.warnOnce = Vc, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(cB) {
        this.collectGroup(cB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(cB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(cB, 1, this.frontDraws, this.frontDraws, !0);
        for (const Bc of this.modelMeshes.groupIds())(Bc < -1 || Bc > 1) && this.warnOnce(`group:${Bc}`, `rendering group ${Bc} is not drawn`);
        for (const Bc of this.Wrc.groupIds())(Bc < -1 || Bc > 1) && this.warnOnce(`group:${Bc}`, `rendering group ${Bc} is not drawn`);
        this.opaqueDraws.sort(AI), this.transparentDraws.sort(GI)
      }
      collectGroup(cB, Bc, nc, Vc, Ic) {
        const rB = this.modelMeshes.group(Bc),
          uc = this.Wrc.group(Bc),
          sc = 0 === Bc ? null === uc || void 0 === uc ? void 0 : uc.opaque : void 0;
        this.collectList(cB, null === rB || void 0 === rB ? void 0 : rB.opaque, sc || null === uc || void 0 === uc ? void 0 : uc.opaque, Bc, !1, nc, Ic), sc && (this.Wrc.drawn += this.maker.bundleDraws(cB, sc, Bc)), this.collectList(cB, null === rB || void 0 === rB ? void 0 : rB.alphaTest, void 0, Bc, !1, nc, Ic), this.collectList(cB, null === rB || void 0 === rB ? void 0 : rB.transparent, null === uc || void 0 === uc ? void 0 : uc.transparent, Bc, !0, Vc, Ic)
      }
      collectList(cB, Bc, nc, Vc, Ic, rB, uc) {
        var sc;
        const Mc = rB.length;
        Bc && this.maker.pushDraws(cB, Bc.units, Bc.units.length, Vc, Ic, rB, Bc.rows), nc && (this.Wrc.drawn += this.maker.pushDraws(cB, nc, nc.length, Vc, Ic, rB));
        const Pc = Ic ? null === (sc = this.modelMeshes.group(Vc)) || void 0 === sc ? void 0 : sc.text : void 0;
        Pc && this.maker.pushDraws(cB, Pc.units, Pc.units.length, Vc, !0, rB, Pc.rows), uc && cu(rB, Mc)
      }
    }

    function AI(cB, Bc) {
      return cB.program.id - Bc.program.id || cB.material.owner.uniqueId - Bc.material.owner.uniqueId
    }

    function GI(cB, Bc) {
      return cB.material.owner.uniqueId - Bc.material.owner.uniqueId
    }

    function cu(cB, Bc) {
      for (let nc = Bc + 1; nc < cB.length; nc++) {
        const Vc = cB[nc];
        let Ic = nc - 1;
        for (; Ic >= Bc && GI(cB[Ic], Vc) > 0; Ic--) cB[Ic + 1] = cB[Ic];
        cB[Ic + 1] = Vc
      }
    }
    const Br = {};

    function nr(cB) {
      return cB.hasThinInstances ? "thin" : cB.Wqc || cB._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Vr(cB, Bc, nc) {
      return cB ? (nc._needUVs = !0, cB.optimizeUVAllocation && (0, Uc.I)(cB.matrix) ? (nc[`${Bc}DIRECTUV`] = cB.uvSet + 1, nc[`MAINUV${cB.uvSet+1}`] = !0) : nc[`${Bc}DIRECTUV`] = 0, !0) : (nc[`${Bc}DIRECTUV`] = 0, !1)
    }

    function Ir(cB) {
      const Bc = new Map;
      for (const nc in cB) {
        if (95 === nc.charCodeAt(0)) continue;
        const Vc = cB[nc],
          Ic = typeof Vc;
        "number" === Ic || "string" === Ic ? Bc.set(nc, String(Vc)) : Vc && "function" !== Ic && Bc.set(nc, !0)
      }
      return Bc
    }

    function ru(cB) {
      const Bc = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: nc
        }
        of cB.features)
        for (const cB in nc) Bc[cB] = nc[cB];
      return Bc
    }

    function ur(cB) {
      const Bc = cB.parts.geometry;
      return null !== Bc && void 0 !== Bc && Bc.live ? Bc : null
    }

    function sr(cB) {
      var Bc;
      return null !== (Bc = ur(cB)) && void 0 !== Bc ? Bc : Br
    }
    class Mr {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = cB, this.warnOnce = Bc, this.programWithModel = nc, this.packFailed = Vc, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(cB, Bc, nc, Vc, Ic) {
        const rB = Bc.owner;
        let uc = this.drawStates.get(Bc);
        if (!uc) {
          const cB = Bc.parts.materials[Bc.range];
          if (!cB) return this.warnOnce("model", `${nc.name} on ${rB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          uc = {
            defines: ru(cB),
            model: cB,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Ic,
            groupId: Vc,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Bc, uc)
        }
        if (this.programCurrent(uc, Bc, Ic, Vc)) return uc.program;
        const {
          model: sc
        } = uc, Mc = sr(Bc), Pc = this.instanceLayout(rB, Ic), qB = this.definesBits(rB);
        if (!this.prepareModelDefines(cB, rB, sc, uc.defines, Vc, Ic)) return null;
        uc.instancing = Ic, uc.groupId = Vc, uc.modelVersion = sc.version, uc.geometry = Mc, uc.instanceLayout = Pc, uc.definesBits = qB;
        const Oc = function(cB) {
          let Bc = "";
          for (const [nc, Vc] of cB) Bc += !0 === Vc ? `${nc};` : `${nc}=${Vc};`;
          return Bc
        }(Ir(uc.defines));
        return Oc === uc.definesKey && uc.packVariant === this.modelPackVariant && uc.program && !this.packFailed(uc.program) || (uc.definesKey = Oc, uc.packVariant = this.modelPackVariant, uc.program = this.programWithModel(sc, uc.defines, Oc)), uc.program
      }
      programCurrent(cB, Bc, nc, Vc) {
        return null !== cB.program && !this.packFailed(cB.program) && cB.instancing === nc && cB.groupId === Vc && this.definesHold(cB, Bc, nc)
      }
      definesHold(cB, Bc, nc) {
        return cB.modelVersion === cB.model.version && cB.geometry === sr(Bc) && cB.instanceLayout === this.instanceLayout(Bc.owner, nc) && cB.definesBits === this.definesBits(Bc.owner) && cB.packVariant === this.modelPackVariant
      }
      modelPackKind(cB) {
        var Bc;
        return 0 === this.modelPackVariant ? null : null !== (Bc = (0, Lc.z)(cB, Yc.j.name)) && void 0 !== Bc && Bc.active ? "placed" : cB.item ? "item" : cB.lifeform ? "lifeform" : cB.box ? "box" : null
      }
      instanceLayout(cB, Bc) {
        var nc, Vc, Ic;
        return "thin" === Bc ? null !== (Ic = this.resources.zuc.get(cB)) && void 0 !== Ic ? Ic : null : "instanced" === Bc && null !== (nc = null === (Vc = cB._userInstancedBuffersStorage) || void 0 === Vc ? void 0 : Vc.interleavedKinds) && void 0 !== nc ? nc : null
      }
      definesBits(cB) {
        const Bc = this.view;
        return (cB.visibility < 1 ? 1 : 0) | (cB.hasVertexAlpha ? 2 : 0) | (cB.applyFog ? 4 : 0) | (cB.useVertexColors ? 8 : 0) | (cB.nonUniformScaling ? 16 : 0) | (Bc.fogEnabled && 0 !== Bc.fogMode ? 32 : 0) | (Bc.lightsEnabled ? 64 : 0) | Bc.lightCount << 7
      }
      prepareLightDefines(cB, Bc, nc) {
        let Vc = 0;
        if (this.view.lightsEnabled && !Bc) {
          const Bc = Math.min(nc, 4);
          for (; Vc < this.view.lightCount && (cB[`LIGHT${Vc}`] = !0, cB[`LITE_LIGHT${Vc}_SLOT`] = Vc, Vc++, cB._needNormals = !0, Vc !== Bc););
        }
        for (let Ic = Vc; Ic < 4; Ic++) cB[`LIGHT${Ic}`] = !1, cB[`LITE_LIGHT${Ic}_SLOT`] = void 0
      }
      prepareModelDefines(cB, Bc, nc, Vc, Ic, rB) {
        const {
          features: uc
        } = nc;
        Vc._needNormals = !1, Vc._needUVs = !1;
        const sc = this.view;
        this.prepareLightDefines(Vc, nc.disableLighting, nc.maxSimultaneousLights), Vc.MAINUV1 = !1, Vc.MAINUV2 = !1;
        const Mc = nc.diffuseTexture;
        Mc ? (Vc._needUVs = !0, Vc.DIFFUSE = !0, Mc.optimizeUVAllocation && (0, Uc.I)(Mc.matrix) ? (Vc.DIFFUSEDIRECTUV = Mc.uvSet + 1, Vc[`MAINUV${Mc.uvSet+1}`] = !0) : Vc.DIFFUSEDIRECTUV = 0, Mc.uvSet > 1 && this.warnOnce(`uvset:${nc.name}`, `${nc.name} samples UV set ${Mc.uvSet+1}, which is not supported`)) : (Vc.DIFFUSE = !1, Vc.DIFFUSEDIRECTUV = 0);
        const Pc = nc.opacityTexture,
          qB = nc.emissiveTexture;
        Vc.OPACITY = Vr(Pc, "OPACITY", Vc), Vc.OPACITYRGB = null !== Pc && Pc.getAlphaFromRGB, Vc.EMISSIVE = Vr(qB, "EMISSIVE", Vc), (Pc && Pc.uvSet > 1 || qB && qB.uvSet > 1) && this.warnOnce(`uvset:${nc.name}`, `${nc.name} samples a UV set past 2, which is not supported`);
        const Oc = nc.reflectionTexture,
          Tc = null !== Oc;
        if (Tc) {
          if (!this.resources.boundTexture(Oc)) return !1;
          Vc._needNormals = !0
        }
        Vc.REFLECTION = Tc, Vc.REFLECTIONMAP_3D = Tc, Vc.REFLECTIONMAP_SKYBOX = Tc, Vc.REFLECTIONMAP_OPPOSITEZ = Tc && (cB.useRightHandedSystem ? !Oc.invertZ : Oc.invertZ), Vc.ROUGHNESS = Tc && nc.roughness > 0, Vc.REFLECTIONOVERALPHA = Tc && nc.useReflectionOverAlpha, Vc.LITE_REFLECTION_LUMINANCE = Tc && "cube" === Oc.source.kind && Oc.source.luminance, (Bc.skeleton || Bc.morphTargetManager) && this.warnOnce(`skin:${Bc.name}`, `${Bc.name} has bones or morph targets, which are not supported`), Vc.FOG = nc.fogEnabled && Bc.applyFog && sc.fogEnabled && 0 !== sc.fogMode, Vc.NONUNIFORMSCALING = Bc.nonUniformScaling;
        const {
          visibility: fc,
          hasVertexAlpha: mB
        } = Bc;
        Vc.ALPHATEST = (0, Lc.S)(nc, fc, mB), Vc.ALPHAFROMDIFFUSE = (0, Lc.bb)(nc), Vc.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== nc.transparencyMode, Vc.ALPHABLEND = null === nc.transparencyMode || (0, Lc.Q)(nc, fc, mB), Vc.PREMULTIPLYALPHA = 7 === nc.alphaMode || 8 === nc.alphaMode, Vc.EMISSIVEASILLUMINATION = nc.useEmissiveAsIllumination, Vc.LINKEMISSIVEWITHDIFFUSE = nc.linkEmissiveWithDiffuse, Vc.TWOSIDEDLIGHTING = !nc.backFaceCulling && nc.twoSidedLighting, Vc.INSTANCES = "none" !== rB, Vc.THIN_INSTANCES = "thin" === rB, Vc.LITE_FRONT_LAYER = Ic >= 1;
        for (const {
            feature: lc,
            state: Yc,
            active: Lc
          }
          of uc) {
          var ec, tB;
          if (Lc) null === (ec = (tB = (0, qn.g)(lc)).prepareDefinesBeforeAttributes) || void 0 === ec || ec.call(tB, Yc, Vc, cB, Bc)
        }
        this.modelPackKind(nc) && (Vc._needNormals = !0), Vc.NORMAL = Vc._needNormals && Bc.isVerticesDataPresent("normal"), Vc.UV1 = Vc._needUVs && Bc.isVerticesDataPresent("uv"), Vc.UV2 = Vc._needUVs && Bc.isVerticesDataPresent("uv2");
        const Sc = Bc.useVertexColors && Bc.isVerticesDataPresent("color");
        Vc.VERTEXCOLOR = Sc, Vc.VERTEXALPHA = Bc.hasVertexAlpha && Sc, Vc.INSTANCESCOLOR = "none" !== rB && Bc.isVerticesDataPresent("instanceColor");
        for (const {
            feature: lc,
            state: Yc,
            active: Lc
          }
          of uc) {
          var yB, zB;
          if (Lc) null === (yB = (zB = (0, qn.g)(lc)).prepareDefines) || void 0 === yB || yB.call(zB, Yc, Vc, cB, Bc, nc)
        }
        const pc = cB.RV();
        for (const {
            feature: lc,
            state: Yc,
            active: Lc
          }
          of uc) {
          var hc, aB;
          if (Lc && !1 === (null === (hc = (aB = (0, qn.g)(lc)).isReadyForSubMesh) || void 0 === hc ? void 0 : hc.call(aB, Yc, Vc, cB, pc))) return !1
        }
        return !0
      }
    }

    function Pr(cB, Bc, nc) {
      return cB.codeVersion !== Bc.version && function(cB, Bc) {
        const nc = [],
          Vc = [];
        for (const {
            feature: Tc,
            state: fc,
            active: mB
          }
          of Bc.features) {
          var Ic, rB, uc, sc;
          if (mB) qu(null === (Ic = (rB = (0, qn.g)(Tc)).getCustomCode) || void 0 === Ic ? void 0 : Ic.call(rB, fc, "vertex", aB.c.WGSL), nc), qu(null === (uc = (sc = (0, qn.g)(Tc)).getCustomCode) || void 0 === uc ? void 0 : uc.call(sc, fc, "fragment", aB.c.WGSL), Vc)
        }
        const Mc = [];
        for (const {
            feature: Tc,
            state: fc
          }
          of Bc.features) {
          var Pc, qB;
          const cB = null === (Pc = (qB = (0, qn.g)(Tc)).getUniforms) || void 0 === Pc ? void 0 : Pc.call(qB, fc, aB.c.WGSL);
          for (const Bc of null !== (Oc = null === cB || void 0 === cB ? void 0 : cB.ubo) && void 0 !== Oc ? Oc : []) {
            var Oc;
            Bc.size && Bc.type && Mc.push({
              name: Bc.name,
              type: Bc.type,
              arraySize: Bc.arraySize
            })
          }
        }
        cB.vertexCode = nc, cB.fragmentCode = Vc, cB.pluginUniforms = Mc, cB.codeKey = JSON.stringify([nc, Vc, Mc]), cB.codeVersion = Bc.version
      }(cB, Bc), `${nc}#${cB.codeKey}`
    }

    function qu(cB, Bc) {
      if (cB)
        for (const nc in cB) cB[nc] && Bc.push([nc, cB[nc]])
    }
    const Or = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class Tr {
      constructor(cB) {
        this.warnOnce = cB, this.states = new Map
      }
      renderState(cB, Bc, nc, Vc) {
        var Ic;
        let rB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          uc = null !== (Ic = cB.sideOrientation) && void 0 !== Ic ? Ic : Bc.sideOrientation;
        Bc._getWorldMatrixDeterminant() < 0 && (uc = 0 === uc ? 1 : 0);
        const sc = "triangle-list" === rB,
          Mc = nc ? cB.alphaMode : 0,
          Pc = (!nc || (0 === Mc || cB.forceDepthWrite)) && !cB.disableDepthWrite,
          qB = sc && cB.backFaceCulling ? cB.cullBackFaces ? "back" : "front" : "none",
          Oc = sc && 0 !== uc ? "ccw" : "cw",
          Tc = cB.depthFunction,
          fc = sc ? cB.zOffset : 0,
          mB = sc ? cB.zOffsetUnits : 0,
          ec = !cB.disableColorWrite;
        return Vc && Vc.alphaMode === Mc && Vc.depthWrite === Pc && Vc.depthFunction === Tc && Vc.cullMode === qB && Vc.frontFace === Oc && Vc.zOffset === fc && Vc.zOffsetUnits === mB && Vc.colourWrite === ec && Vc.topology === rB ? Vc : this.stateFor(Mc, Pc, Tc, qB, Oc, fc, mB, ec, rB)
      }
      stateFor(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
        const Pc = `${cB}|${Bc}|${nc}|${Vc}|${Ic}|${rB}|${uc}|${sc}|${Mc}`;
        let qB = this.states.get(Pc);
        if (!qB) {
          var Oc;
          const Tc = cB ? jr(cB) : null;
          cB && !Tc && this.warnOnce(`alpha:${cB}`, `alpha mode ${cB} is not supported`), qB = {
            key: Pc,
            alphaMode: cB,
            depthFunction: nc,
            zOffset: rB,
            zOffsetUnits: uc,
            topology: Mc,
            blend: Tc,
            depthWrite: Bc,
            depthCompare: nc && null !== (Oc = Or.get(nc)) && void 0 !== Oc ? Oc : null,
            cullMode: Vc,
            frontFace: Ic,
            depthBias: -uc,
            depthBiasSlopeScale: -rB,
            colourWrite: sc
          }, this.states.set(Pc, qB)
        }
        return qB
      }
    }
    var fr = nc(35928);

    function mu(cB) {
      if (!cB.frozen) return -1;
      let Bc = cB.version;
      for (const {
          feature: nc,
          state: Vc,
          active: Ic
        }
        of cB.features) {
        if (!Ic || !nc.bind) continue;
        const cB = (0, qn.g)(nc).uniformsVersion;
        if (!cB) return -1;
        Bc += cB(Vc)
      }
      return Bc
    }
    class er {
      constructor(cB, Bc, nc) {
        this.slots = cB, this.data = Bc, this.textures = nc, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(cB, Bc) {
        this.write4(cB, Bc, 0, 0, 0, 1)
      }
      updateFloat2(cB, Bc, nc) {
        this.write4(cB, Bc, nc, 0, 0, 2)
      }
      updateFloat3(cB, Bc, nc, Vc) {
        this.write4(cB, Bc, nc, Vc, 0, 3)
      }
      updateFloat4(cB, Bc, nc, Vc, Ic) {
        this.write4(cB, Bc, nc, Vc, Ic, 4)
      }
      updateVector3(cB, Bc) {
        this.write4(cB, Bc.x, Bc.y, Bc.z, 0, 3)
      }
      updateVector4(cB, Bc) {
        this.write4(cB, Bc.x, Bc.y, Bc.z, Bc.w, 4)
      }
      updateColor3(cB, Bc) {
        this.write4(cB, Bc.r, Bc.g, Bc.b, 0, 3)
      }
      updateColor4(cB, Bc, nc) {
        this.write4(cB, Bc.r, Bc.g, Bc.b, nc, 4)
      }
      updateFloatsFrom(cB, Bc, nc, Vc) {
        const Ic = this.slots.get(cB);
        if (!Ic) return;
        const rB = this.data,
          uc = Ic.offset;
        for (let sc = 0; sc < Vc; sc++) rB[uc + sc] = Bc[nc + sc]
      }
      updateFloat3TimesFloats(cB, Bc, nc, Vc) {
        const Ic = this.slots.get(cB);
        if (!Ic) return;
        const rB = this.data,
          uc = Ic.offset;
        rB[uc] = Bc[nc] * Vc[0], rB[uc + 1] = Bc[nc + 1] * Vc[1], rB[uc + 2] = Bc[nc + 2] * Vc[2]
      }
      Buc(cB, Bc) {
        const nc = this.slots.get(cB);
        nc && this.data.set(Bc.m, nc.offset)
      }
      updateMatrixFloats(cB, Bc) {
        const nc = this.slots.get(cB);
        nc && this.data.set(Bc, nc.offset)
      }
      updateFloatArray(cB, Bc) {
        const nc = this.slots.get(cB);
        if (!nc) return;
        if (!nc.arraySize || nc.stride === nc.floats) return void this.data.set(Bc, nc.offset);
        const Vc = Math.min(Bc.length, nc.floats * nc.arraySize);
        for (let Ic = 0; Ic < Vc; Ic++) this.data[nc.offset + Math.floor(Ic / nc.floats) * nc.stride + Ic % nc.floats] = Bc[Ic]
      }
      updateArray(cB, Bc) {
        this.updateFloatArray(cB, Bc)
      }
      setTexture(cB, Bc) {
        this.textures.set(cB, Bc), this.expected.delete(cB)
      }
      expectTexture(cB) {
        this.textures.set(cB, null), this.expected.add(cB)
      }
      write4(cB, Bc, nc, Vc, Ic, rB) {
        const uc = this.slots.get(cB);
        if (!uc) return;
        const sc = this.data,
          Mc = uc.offset;
        sc[Mc] = Bc, rB > 1 && (sc[Mc + 1] = nc), rB > 2 && (sc[Mc + 2] = Vc), rB > 3 && (sc[Mc + 3] = Ic)
      }
    }

    function tu(cB, Bc) {
      const nc = XV,
        Vc = fr.h,
        Ic = cB.lights,
        rB = Math.min(cB.lightCount, 8);
      for (let uc = 0; uc < rB; uc++) {
        const cB = nc.lights + uc * nc.lightStride,
          rB = uc * fr.d;
        Bc[cB] = Ic[rB + Vc.vector], Bc[cB + 1] = Ic[rB + Vc.vector + 1], Bc[cB + 2] = Ic[rB + Vc.vector + 2], Bc[cB + 3] = Ic[rB + Vc.kind] === fr.e.directional ? 1 : 0, Bc[cB + 4] = Ic[rB + Vc.diffuse], Bc[cB + 5] = Ic[rB + Vc.diffuse + 1], Bc[cB + 6] = Ic[rB + Vc.diffuse + 2], Bc[cB + 7] = Ic[rB + Vc.range], Bc[cB + 8] = Ic[rB + Vc.specular], Bc[cB + 9] = Ic[rB + Vc.specular + 1], Bc[cB + 10] = Ic[rB + Vc.specular + 2], Bc[cB + 11] = Ic[rB + Vc.range]
      }
      Bc[nc.fogInfos] = cB.fogMode, Bc[nc.fogInfos + 1] = cB.fogStart, Bc[nc.fogInfos + 2] = cB.fogEnd, Bc[nc.fogInfos + 3] = cB.fogDensity, Bc[nc.fogColour] = cB.fogColour[0], Bc[nc.fogColour + 1] = cB.fogColour[1], Bc[nc.fogColour + 2] = cB.fogColour[2], Bc[nc.outputHeight] = cB.renderHeight, Bc[nc.animTick] = cB.animTick, Bc[nc.timeMs] = cB.timeMs
    }
    class Sr {
      constructor(cB) {
        this.instancesOf = cB
      }
      refreshModelUniforms(cB, Bc, nc, Vc) {
        const Ic = mu(nc);
        if (Ic >= 0 && Ic === Bc.heldVersion && Bc.textures.get("diffuseSampler") === nc.diffuseTexture && Bc.textures.get("reflectionCubeSampler") === nc.reflectionTexture && Bc.textures.get("opacitySampler") === nc.opacityTexture && Bc.textures.get("emissiveSampler") === nc.emissiveTexture) return !0;
        if (Ic < 0)
          for (const rB of this.instancesOf(nc)) rB.heldVersion = -1;
        return this.writeModelUniforms(cB, Bc, nc, Vc), Bc.heldVersion = Ic, !1
      }
      writeModelUniforms(cB, Bc, nc, Vc) {
        const {
          ubo: Ic
        } = Bc, rB = nc.diffuseTexture, uc = nc.diffuseColor;
        Ic.updateFloat4("vDiffuseColor", uc[0], uc[1], uc[2], nc.alpha), rB && (Ic.updateFloat2("vDiffuseInfos", rB.uvSet, rB.level), Ic.updateMatrixFloats("diffuseMatrix", rB.matrix)), Ic.updateFloat("alphaCutOff", nc.alphaCutOff), Ic.updateFloatsFrom("vEmissiveColor", nc.emissiveColor, 0, 3), Ic.updateFloat3TimesFloats("vAmbientColor", Vc.ambientColour, 0, nc.ambientColor);
        const sc = nc.specularColor;
        Ic.updateFloat4("vSpecularColor", sc[0], sc[1], sc[2], nc.specularPower), Ic.setTexture("diffuseSampler", rB);
        const Mc = nc.opacityTexture;
        Mc && (Ic.updateFloat2("vOpacityInfos", Mc.uvSet, Mc.level), Ic.updateMatrixFloats("opacityMatrix", Mc.matrix)), Ic.setTexture("opacitySampler", Mc);
        const Pc = nc.emissiveTexture;
        Pc && (Ic.updateFloat2("vEmissiveInfos", Pc.uvSet, Pc.level), Ic.updateMatrixFloats("emissiveMatrix", Pc.matrix)), Ic.setTexture("emissiveSampler", Pc);
        const qB = nc.reflectionTexture;
        qB && Ic.updateMatrixFloats("reflectionMatrix", qB.matrix), Ic.updateFloat2("vReflectionInfos", qB ? qB.level * cB.iblIntensity : 0, nc.roughness), Ic.setTexture("reflectionCubeSampler", qB);
        const Oc = cB.RV();
        for (const {
            feature: mB,
            state: ec,
            active: tB
          }
          of nc.features) {
          var Tc, fc;
          if (tB) null === (Tc = (fc = (0, qn.g)(mB)).bind) || void 0 === Tc || Tc.call(fc, ec, Ic, cB, Oc)
        }
      }
    }

    function yu(cB) {
      const Bc = cB.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Bc) ? "u32" : /i32|^vec\di$/.test(Bc) ? "i32" : "f32"
    }

    function zu(cB, Bc) {
      const nc = cB.getSize(),
        Vc = yu(Bc),
        Ic = cB => 4 === nc ? `${cB}x4` : 2 === nc ? `${cB}x2` : null;
      if ("f32" === Vc) {
        if (5126 === cB.type) return 1 === nc ? "float32" : nc >= 2 && nc <= 4 ? `float32x${nc}` : null;
        if (!cB.normalized) return null;
        switch (cB.type) {
          case 5121:
            return Ic("unorm8");
          case 5120:
            return Ic("snorm8");
          case 5123:
            return Ic("unorm16");
          case 5122:
            return Ic("snorm16")
        }
        return null
      }
      const rB = "u32" === Vc ? "uint" : "sint";
      switch (cB.type) {
        case 5125:
        case 5124:
          return 1 === nc ? `${rB}32` : nc <= 4 ? `${rB}32x${nc}` : null;
        case 5121:
        case 5120:
          return Ic(`${rB}8`);
        case 5123:
        case 5122:
          return Ic(`${rB}16`)
      }
      return null
    }

    function pr(cB) {
      var Bc;
      const nc = /(8|16|32)(?:x(\d))?$/.exec(cB);
      return nc ? Number(nc[1]) / 8 * Number(null !== (Bc = nc[2]) && void 0 !== Bc ? Bc : 1) : 4
    }
    class hr {
      constructor(cB, Bc, nc) {
        this.resources = cB, this.limits = Bc, this.warnOnce = nc, this.layouts = new Map
      }
      resolveInputs(cB, Bc, nc, Vc) {
        const Ic = [],
          rB = nc.program.attributes,
          uc = [];
        for (let qB = 0; qB < rB.length; qB++) {
          const nc = rB[qB],
            sc = nc.optional ? null : this.resources.vertexInput(cB, nc.name, Vc);
          if (!sc) {
            const cB = yu(nc.type),
              Bc = "u32" === cB ? "uint32x4" : "i32" === cB ? "sint32x4" : "float32x4";
            uc.push(null);
            const Vc = Ic.find((cB => null === cB.data));
            Vc ? Vc.attributes.push({
              shaderLocation: qB,
              offset: 0,
              format: Bc
            }) : Ic.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: qB,
                offset: 0,
                format: Bc
              }]
            });
            continue
          }
          const Mc = sc.getBuffer();
          uc.push(sc);
          const Pc = zu(sc, nc.type);
          if (!Pc) return this.warnOnce(`format:${Bc}:${nc.name}`, `${Bc}'s ${nc.name} (type ${sc.type}, size ${sc.getSize()}) has no WebGPU vertex format`), null;
          const Oc = sc.getIsInstanced() ? "instance" : "vertex",
            Tc = sc.byteStride,
            fc = pr(Pc),
            mB = Ic.find((cB => cB.data === Mc && cB.stride === Tc && cB.step === Oc && sc.byteOffset >= cB.base && sc.byteOffset - cB.base + fc <= Tc));
          mB ? mB.attributes.push({
            shaderLocation: qB,
            offset: sc.byteOffset - mB.base,
            format: Pc
          }) : Ic.push({
            data: Mc,
            base: sc.byteOffset,
            stride: Tc,
            step: Oc,
            attributes: [{
              shaderLocation: qB,
              offset: 0,
              format: Pc
            }]
          })
        }
        if (Ic.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Bc}`, `${Bc} needs ${Ic.length} vertex buffers`), null;
        let sc = "";
        for (const qB of Ic) {
          sc += `${qB.stride}${"instance"===qB.step?"i":"v"}`;
          for (const cB of qB.attributes) sc += `,${cB.shaderLocation}:${cB.offset}:${cB.format}`;
          sc += ";"
        }
        let Mc = this.layouts.get(sc);
        Mc || (Mc = {
          key: sc,
          buffers: Ic.map((cB => ({
            arrayStride: cB.stride,
            stepMode: cB.step,
            attributes: cB.attributes
          }))),
          instanceEnds: Ic.map((cB => {
            let Bc = -1;
            if ("instance" === cB.step)
              for (const nc of cB.attributes) Bc = Math.max(Bc, nc.offset + pr(nc.format));
            return Bc
          }))
        }, this.layouts.set(sc, Mc));
        const Pc = Ic.map((cB => cB.base));
        return {
          program: nc,
          sources: uc,
          layout: Mc,
          slotData: Ic.map((cB => cB.data)),
          Xrc: Pc,
          buffers: [],
          offsets: Pc,
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

    function au(cB, Bc, nc, Vc) {
      const Ic = Bc.program.program.attributes;
      for (let rB = 0; rB < Ic.length; rB++) {
        if ((Ic[rB].optional ? null : nc.vertexInput(cB, Ic[rB].name, Vc)) !== Bc.sources[rB]) return !1
      }
      return !0
    }
    const lr = 64;
    class Yr {
      constructor(cB, Bc, nc, Vc) {
        this.device = cB, this.layout = Bc, this.frameBuffer = nc, this.label = Vc, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(cB) {
        if (cB * lr <= this.data.length) return !1;
        let Bc = 2 * this.data.length;
        for (; cB * lr > Bc;) Bc *= 2;
        const nc = new Float32Array(Bc);
        return nc.set(this.data), this.data = nc, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Ic = this.data,
          rB = cB * lr;
        let uc = Ic[rB + 16] !== nc;
        for (let sc = 0; sc < 16 && !uc; sc++) uc = Ic[rB + sc] !== Bc[Vc + sc];
        if (uc) {
          for (let cB = 0; cB < 16; cB++) Ic[rB + cB] = Bc[Vc + cB];
          Ic[rB + 16] = nc
        }
        return uc
      }
      upload(cB, Bc) {
        this.device.queue.writeBuffer(this.buffer, cB * HV, this.data, cB * lr, (Bc - cB) * lr)
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

    function Lr(cB) {
      return cB.gpu[Uc.i.lite] ??= cB.materials.map(((Bc, nc) => ({
        parts: cB,
        range: nc,
        owner: cB.owner
      })))
    }

    function gu(cB) {
      var Bc, nc, Vc;
      return null !== (Bc = null !== (nc = null === (Vc = cB.parts.materials[cB.range]) || void 0 === Vc ? void 0 : Vc.mirror) && void 0 !== nc ? nc : cB.owner.material) && void 0 !== Bc ? Bc : null
    }
    const Ur = ["opaque", "alphaTest", "transparent", "text"];
    class bu {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, PB.e)("Lite: ")
      }
      attach(cB, Bc) {
        this.model = cB, this.mirror = Bc
      }
      get worlds() {
        return this.model.nodes.rn
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(cB) {
        return this.groups.get(cB)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(cB) {
        for (const [Bc, nc] of this.groups)
          for (const Vc of Ur)
            for (const Ic of nc[Vc].units) cB(Ic.owner, "text" === Vc ? "transparent" : Vc, Bc)
      }
      select(cB, Bc) {
        this.frame++, this.selectedCount = 0;
        for (const sc of this.groups.values())
          for (const cB of Ur) sc[cB].units.length = 0, sc[cB].rows.length = 0;
        const {
          model: nc,
          mirror: Vc
        } = this;
        if (!nc || !Vc || !cB) return;
        this.rows.length < nc.nodes.Qc && (this.rows = new Int32Array(nc.nodes.Qc));
        const Ic = this.rows,
          rB = nc.meshes;
        for (let sc = 0; sc < rB.looseCount; sc++) {
          const cB = rB.loose[sc],
            nc = Vc.nodes[cB];
          nc && !nc.isBlocked && nc.isEnabled() && !nc.Su.hasAZeroComponent && rB.selects(cB, Bc.frustum) && (this.activate(nc, cB), this.selectedCount++)
        }
        const uc = rB.selectTextPlanes(Bc.frustum, Ic);
        for (let sc = 0; sc < uc; sc++) {
          const Bc = Ic[sc],
            rB = Vc.nodes[Bc],
            uc = nc.meshes.parts[Bc];
          if (!rB.isVisible || !(rB.visibility > 0) || 0 === (rB.layerMask & cB.layerMask) || !uc) continue;
          const Mc = this.groupOf(nc.meshes.layer[Bc]).text;
          for (const cB of Lr(uc)) Mc.units.push(cB), Mc.rows.push(Bc);
          this.selectedCount++
        }
      }
      instanceBatch(cB) {
        const Bc = this.batchOf(cB);
        return Bc.dispatched || (Bc.dispatched = Bc.renderSelf = !0, Bc.row = this.rowOf(cB)), Bc
      }
      rowOf(cB) {
        return cB.row
      }
      activate(cB, Bc) {
        if (!cB.HBc) {
          const nc = cB;
          if (nc.Wqc) {
            const cB = this.batchOf(nc);
            cB.dispatched = !0, cB.renderSelf = !0, cB.row = Bc
          }
          return void this.dispatch(nc, Bc, Bc)
        }
        const nc = cB,
          Vc = nc.wqc;
        if (Vc._getWorldMatrixDeterminant() >= 0 !== nc._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Vc.name}`, `A mirrored InstancedMesh of ${Vc.name} is not drawn yet`);
        const Ic = this.batchOf(Vc);
        Ic.instances.push(nc), Ic.rows.push(Bc), Ic.dispatched || (Ic.dispatched = !0, this.dispatch(Vc, Bc, this.rowOf(Vc)))
      }
      batchOf(cB) {
        let Bc = this.batches.get(cB);
        return Bc || (Bc = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(cB, Bc)), Bc.frame !== this.frame && (Bc.frame = this.frame, Bc.dispatched = !1, Bc.renderSelf = !1, Bc.instances.length = 0, Bc.rows.length = 0), Bc
      }
      dispatch(cB, Bc, nc) {
        const {
          layer: Vc,
          parts: Ic
        } = this.model.meshes;
        if (!Ic[Bc]) return;
        const rB = this.groupOf(Vc[Bc]),
          uc = cB;
        for (const sc of Lr(Ic[Bc])) {
          const cB = gu(sc);
          if (!cB) continue;
          const Bc = cB.needAlphaBlendingForMesh(uc) ? rB.transparent : cB.needAlphaTestingForMesh(uc) ? rB.alphaTest : rB.opaque;
          Bc.units.push(sc), Bc.rows.push(nc)
        }
      }
      groupOf(cB) {
        let Bc = this.groups.get(cB);
        return Bc || (Bc = {
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
        }, this.groups.set(cB, Bc)), Bc
      }
    }
    class Zr {
      constructor() {
        this.XB = new Map, this.enabled = [], this.groups = new Map, this.kept = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(cB) {
        if (this.XB.has(cB)) return;
        const Bc = {
          mesh: cB,
          observer: cB.onEffectiveEnabledStateChangedObservable.add((cB => {
            this.jnc(Bc, cB)
          })),
          index: -1,
          steady: null
        };
        this.XB.set(cB, Bc), this.jnc(Bc, cB.isEnabled())
      }
      remove(cB) {
        const Bc = this.XB.get(cB);
        Bc && (Bc.observer.remove(!0), this.jnc(Bc, !1), this.XB.delete(cB))
      }
      base(cB) {
        return this.XB.get(cB)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          XB: this.XB.size
        }
      }
      forEachSelected(cB) {
        for (const [Bc, nc] of this.groups) {
          for (const Vc of nc.opaque) cB(Vc.owner, "opaque", Bc);
          for (const Vc of nc.transparent) cB(Vc.owner, "transparent", Bc)
        }
        for (const Bc of this.kept) cB(Bc.mesh, "opaque", 0)
      }
      group(cB) {
        return this.groups.get(cB)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(cB, Bc) {
        this.drawn = 0, this.selected = 0, this.kept.length = 0;
        for (const Vc of this.groups.values()) Vc.opaque.length = 0, Vc.transparent.length = 0;
        if (!cB) return;
        const nc = this.enabled;
        for (let Vc = 0; Vc < nc.length; Vc++) {
          const Ic = nc[Vc];
          if (Ic.steady && Bc(Ic, cB)) {
            this.selected++, this.kept.push(Ic);
            continue
          }
          const rB = Ic.mesh;
          if (rB.isBlocked || rB.Su.hasAZeroComponent) continue;
          if (!rB.isVisible || rB.visibility <= 0 || 0 === (rB.layerMask & cB.layerMask)) continue;
          if (rB.Wqc) {
            this.warned.has(rB.name) || (this.warned.add(rB.name), console.warn(`Lite: thin instance base ${rB.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: uc
          } = rB;
          if (!uc) continue;
          rB.computeWorldMatrix(), this.selected++;
          const sc = this.listsFor(rB.renderingGroupId);
          for (const cB of Lr(uc)) {
            const Bc = gu(cB);
            Bc && (Bc.needAlphaBlendingForMesh(rB) ? sc.transparent.push(cB) : sc.opaque.push(cB))
          }
        }
      }
      jnc(cB, Bc) {
        if (Bc === cB.index >= 0) return;
        cB.steady = null;
        const nc = this.enabled;
        if (Bc) cB.index = nc.length, nc.push(cB);
        else {
          const Bc = nc.pop();
          Bc !== cB && (nc[cB.index] = Bc, Bc.index = cB.index), cB.index = -1
        }
      }
      listsFor(cB) {
        let Bc = this.groups.get(cB);
        return Bc || (Bc = {
          opaque: [],
          transparent: []
        }, this.groups.set(cB, Bc)), Bc
      }
    }
    var Qr = nc(37795);
    class Cr {
      constructor() {
        this.bundle = null, this.stale = !0, this.XB = new Set
      }
    }
    class vu {
      constructor(cB, Bc, nc) {
        this.device = cB, this.slots = Bc, this.host = nc, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Cr, this.LBc = new Cr, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new xr, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(cB) {
          var Bc, nc;
          let Vc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Bc = null === (nc = globalThis.navigator) || void 0 === nc ? void 0 : nc.userAgent) && void 0 !== Bc ? Bc : "";
          const Ic = cB.adapterInfo;
          return "intel" === (null === Ic || void 0 === Ic ? void 0 : Ic.vendor) && "gen-12lp" === Ic.architecture && Vc.includes("Windows")
        }(cB), (0, Qr.D)(this.direct)
      }
      sC() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Qr.D)(this.directThisFrame)
      }
      add(cB, Bc, nc, Vc) {
        let Ic = this.records.get(cB);
        return Ic || (Ic = this.createRecord(cB), this.records.set(cB, Ic)), Ic.recorded && Nr(Ic, Bc) || (this.bundleOf(Ic).stale = !0), this.place(Ic, Bc, nc, Vc), Ic
      }
      bundleOf(cB) {
        return cB.LBc ? this.LBc : this.main
      }
      addAgain(cB, Bc, nc, Vc) {
        cB.recorded || (this.bundleOf(cB).stale = !0), this.place(cB, Bc, nc, Vc)
      }
      place(cB, Bc, nc, Vc) {
        cB.seen = this.frame, cB.LBc && null === cB.draw && (this.LBc.stale = !0), cB.draw = Bc, this.drawn++, nc && this.slots.write(cB.slot, nc, Vc) && (this.slotsFrom = Math.min(this.slotsFrom, cB.slot), this.slotsTo = Math.max(this.slotsTo, cB.slot));
        const Ic = this.args,
          rB = 5 * cB.slot;
        Ic[rB] === Bc.count && Ic[rB + 1] === Bc.instances && Ic[rB + 2] === Bc.first || (Ic[rB] = Bc.count, Ic[rB + 1] = Bc.instances, Ic[rB + 2] = Bc.first, this.argsDirty = !0, this.LBc.stale ||= cB.LBc)
      }
      fC() {
        for (const cB of this.records.values()) cB.seen !== this.frame && (cB.draw && (cB.draw = null, this.args[5 * cB.slot + 1] = 0, this.argsDirty = !0, this.LBc.stale ||= cB.LBc), this.frame - cB.seen > 120 && (this.records.delete(cB.unit), this.freeSlots.push(cB.slot), cB.recorded && (this.bundleOf(cB).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(cB) {
        for (const Bc of this.records.values()) Bc.draw && Bc.seen === this.frame && !Bc.LBc && cB(Bc.draw, this.slots.data, Bc.slot * HV / 4)
      }
      resourceDestroyed(cB) {
        this.main.stale ||= this.main.XB.has(cB), this.LBc.stale ||= this.LBc.XB.has(cB)
      }
      execute(cB, Bc, nc) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(cB, Bc, nc, "direct"), this.drawn;
        const Vc = this.host.sceneGroup(Bc);
        if (!Vc) return this.main.bundle = null, this.LBc.bundle = null, this.recordedSceneGroup = null, this.encode(cB, Bc, nc, "direct"), this.drawn;
        this.recordedTarget === nc && this.recordedSceneGroup === Vc || (this.recordedTarget = nc, this.recordedSceneGroup = Vc, this.main.stale = !0, this.LBc.stale = !0);
        const Ic = this.main,
          rB = this.LBc;
        let uc = !1;
        !Ic.stale && Ic.bundle || (Ic.bundle = this.record(Bc, nc, Vc, "indirect"), uc = !0);
        const sc = (0, Qr.k)();
        return (rB.stale || this.rangedEpoch !== sc) && (this.rangedEpoch = sc, rB.bundle = this.drawsRanged() ? this.record(Bc, nc, Vc, "LBc") : this.noRangedBundle(), uc = !0), uc && (this.bundles = rB.bundle ? [Ic.bundle, rB.bundle] : [Ic.bundle]), cB.executeBundles(this.bundles), cB.setBindGroup(0, Vc), this.drawn
      }
      record(cB, Bc, nc, Vc) {
        const Ic = this.device.createRenderBundleEncoder({
          label: "LBc" === Vc ? "thin-bases-ranged" : "thin-bases",
          colorFormats: cB._colorFormat ? [cB._colorFormat] : [],
          depthStencilFormat: cB._depthStencilFormat,
          sampleCount: cB._sampleCount
        });
        return Ic.setBindGroup(0, nc), this.encode(Ic, cB, Bc, Vc), Ic.finish()
      }
      noRangedBundle() {
        for (const cB of this.records.values()) cB.LBc && (cB.recorded = !1);
        return this.LBc.XB.clear(), this.LBc.stale = !1, null
      }
      drawsRanged() {
        for (const cB of this.records.values())
          if (cB.LBc && cB.draw) return !0;
        return !1
      }
      encode(cB, Bc, nc, Vc) {
        const Ic = [];
        for (const Mc of this.records.values()) "direct" !== Vc && Mc.LBc !== ("LBc" === Vc) || (Mc.recorded = !1, Mc.draw && Ic.push(Mc));
        Ic.sort(Er);
        const rB = "direct" === Vc ? null : "LBc" === Vc ? this.LBc : this.main;
        null === rB || void 0 === rB || rB.XB.clear(), this.binder.reset();
        let uc = !1;
        for (const Mc of Ic) {
          var sc;
          const Ic = Mc.draw,
            Pc = this.host.pipelineFor(Ic, Bc, nc);
          if (!Pc) {
            this.host.pipelineCompiling(Ic, nc) ? uc = !0 : rB && this.keep(Mc, Ic, rB.XB);
            continue
          }
          let qB;
          if (Mc.LBc && "indirect" !== Vc) {
            const cB = Mc.unit.owner;
            qB = "direct" === Vc && (0, Qr.r)(cB) || (0, Qr.l)(cB) || void 0
          }
          if (rB && this.keep(Mc, Ic, rB.XB), 0 === (null === (sc = qB) || void 0 === sc ? void 0 : sc.count)) continue;
          this.binder.bind(cB, Ic, Pc, this.slots.bindGroup, Mc.slot * HV);
          const Oc = 5 * Mc.slot;
          if ("indirect" === Vc) {
            Ic.indexBuffer ? cB.drawIndexedIndirect(this.argsBuffer, 4 * Oc) : cB.drawIndirect(this.argsBuffer, 4 * Oc);
            continue
          }
          const Tc = this.args;
          qB ? Dr(cB, null !== Ic.indexBuffer, Tc, Oc, qB) : Ic.indexBuffer ? cB.drawIndexed(Tc[Oc], Tc[Oc + 1], Tc[Oc + 2], 0, 0) : cB.draw(Tc[Oc], Tc[Oc + 1], Tc[Oc + 2], 0)
        }
        rB && (rB.stale = uc)
      }
      keep(cB, Bc, nc) {
        cB.recorded = !0, cB.pipelineKey = Bc.pipelineKey, cB.materialGroup = Bc.material.bindGroup, cB.vertexBuffers.length = 0, cB.vertexBuffers.push(...Bc.vertexBuffers), cB.vertexOffsets = Bc.vertexOffsets, cB.indexBuffer = Bc.indexBuffer, cB.indexFormat = Bc.indexFormat;
        for (const Vc of Bc.vertexBuffers) nc.add(Vc);
        Bc.indexBuffer && nc.add(Bc.indexBuffer), nc.add(Bc.material.buffer);
        for (const Vc of Bc.material.bound) Vc && nc.add(Vc)
      }
      createRecord(cB) {
        let Bc = this.freeSlots.pop();
        return void 0 === Bc && (Bc = this.slotCount++, this.grow()), {
          unit: cB,
          slot: Bc,
          LBc: void 0 !== (0, Qr.l)(cB.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.LBc.stale = !0), 5 * this.slotCount > this.args.length) {
          const cB = new Uint32Array(2 * this.args.length);
          cB.set(this.args), this.args = cB, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Dr(cB, Bc, nc, Vc, Ic) {
      const rB = nc[Vc + 1],
        uc = Ic.data;
      for (let sc = 0; sc < Ic.count; sc++) {
        const Ic = Math.min(uc[2 * sc], rB),
          Mc = Math.min(uc[2 * sc + 1], rB - Ic);
        0 !== Mc && (Bc ? cB.drawIndexed(nc[Vc], Mc, nc[Vc + 2], 0, Ic) : cB.draw(nc[Vc], Mc, nc[Vc + 2], Ic))
      }
    }

    function Nr(cB, Bc) {
      if (cB.pipelineKey !== Bc.pipelineKey || cB.materialGroup !== Bc.material.bindGroup || cB.indexBuffer !== Bc.indexBuffer || cB.indexFormat !== Bc.indexFormat || cB.vertexOffsets !== Bc.vertexOffsets || cB.vertexBuffers.length !== Bc.vertexBuffers.length) return !1;
      for (let nc = 0; nc < cB.vertexBuffers.length; nc++)
        if (cB.vertexBuffers[nc] !== Bc.vertexBuffers[nc]) return !1;
      return !0
    }

    function Er(cB, Bc) {
      return AI(cB.draw, Bc.draw)
    }
    const or = new WeakMap,
      Wr = {
        depth: !1,
        sunShadow: !1
      };

    function wr(cB, Bc) {
      let nc = or.get(cB);
      nc || (nc = new Map, or.set(cB, nc));
      const Vc = `${Bc.depth?"-depth":""}${Bc.sunShadow?"-shadow":""}${Bc.shadowMask?"-mask":""}`;
      let Ic = nc.get(Vc);
      if (!Ic) {
        const rB = [{
          binding: gn.c,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: gn.h
          }
        }, {
          binding: gn.y,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Bc.depth && rB.push({
          binding: gn.q,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Bc.sunShadow && rB.push(... function() {
          const cB = GPUShaderStage.FRAGMENT,
            Bc = gn.s;
          return [{
            binding: Bc.uniform,
            visibility: cB,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Bc.NB,
            visibility: cB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Bc.special,
            visibility: cB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Bc.volume,
            visibility: cB,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Bc.sampler,
            visibility: cB,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Bc.entities,
            visibility: cB,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Bc.entityGrids,
            visibility: cB,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Bc.shadowMask && rB.push({
          binding: gn.w,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Ic = cB.createBindGroupLayout({
          label: `${Bc.depth?"terrain-":""}shader-pack-inputs${Vc}`,
          entries: rB
        }), nc.set(Vc, Ic)
      }
      return Ic
    }

    function ku(cB) {
      return wr(cB, Wr)
    }

    function Xr(cB, Bc) {
      if (!Bc) return !1;
      const nc = (0, UB.f)(cB);
      return !!nc && onc(nc, Bc)
    }

    function Hr(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!qI(Bc)) return [];
      return [wr(cB, {
        depth: rI(Bc.packVariant),
        sunShadow: Xr(Bc.packVariant, nc),
        shadowMask: Vc
      })]
    }
    class Fr {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = cB, this.sunShadow = nc, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(gn.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = cB.createBuffer({
          label: "shader-pack-inputs",
          size: gn.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Vc = (0, gn.B)(Bc);
        this.textures = cB.createBuffer({
          label: "shader-pack-textures",
          size: Vc.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), cB.queue.writeBuffer(this.textures, 0, Vc), this.bindGroup = cB.createBindGroup({
          label: "shader-pack-inputs",
          layout: ku(cB),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: gn.c,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: gn.y,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(cB, Bc, nc) {
        (0, gn.H)(this.data, {
          seconds: cB.seconds(),
          lit: nc,
          renderOffset: cB.renderOffset(),
          Duc: cB.Duc(),
          eyePosition: Bc,
          shadowDirection: cB.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Vc = Bc ? this.sunShadow : null;
        if ((Bc || nc) && !Vc) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!cB && !Vc) return this.bindGroup;
        (cB && cB !== this.depthView || nc && nc !== this.maskView) && (this.depthView = null !== cB && void 0 !== cB ? cB : this.depthView, this.maskView = null !== nc && void 0 !== nc ? nc : this.maskView, this.groups.clear());
        const Ic = (cB ? 1 : 0) | (Vc ? 2 : 0) | (nc ? 4 : 0);
        let rB = this.groups.get(Ic);
        if (!rB) {
          const Bc = this.entries();
          cB && Bc.push({
            binding: gn.q,
            resource: cB
          }), Vc && Bc.push(...Vc.entries()), nc && Bc.push({
            binding: gn.w,
            resource: nc
          }), rB = this.device.createBindGroup({
            label: `${cB||nc?"terrain-":""}shader-pack-inputs${cB?"-depth":""}${Vc?"-shadow":""}${nc?"-mask":""}`,
            layout: wr(this.device, {
              depth: !!cB,
              sunShadow: !!Vc,
              shadowMask: !!nc
            }),
            entries: Bc
          }), this.groups.set(Ic, rB)
        }
        return rB
      }
      bind(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        cB.setBindGroup(gn.g, this.bindGroupFor(Bc, nc, Vc))
      }
    }

    function Jr(cB, Bc, nc) {
      if (cB.gpuVersion === Bc.gpuBuffersVersion) return !0;
      let Vc;
      do {
        if (Vc = Bc.gpuBuffersVersion, !ju(cB, Bc, nc)) return !1
      } while (Bc.gpuBuffersVersion !== Vc);
      return cB.gpuVersion = Vc, cB.fitInstances = 0, !0
    }

    function ju(cB, Bc, nc) {
      let Vc = null;
      for (let rB = 0; rB < cB.slotData.length; rB++) {
        var Ic;
        const uc = cB.slotData[rB],
          sc = uc ? Bc.gpuBuffer(uc) : nc;
        if (!sc) return !1;
        uc && cB.layout.instanceEnds[rB] < 0 && Bc.cover(uc, Number.POSITIVE_INFINITY), cB.buffers[rB] = sc;
        const Mc = cB.Xrc[rB] + (uc ? Bc.gpuOffset(uc) : 0);
        Mc !== (null !== (Ic = Vc) && void 0 !== Ic ? Ic : cB.offsets)[rB] && (Vc ??= cB.offsets.slice(), Vc[rB] = Mc), cB.ends[rB] = uc ? Bc.gpuEnd(uc) : sc.size
      }
      return Vc && (cB.offsets = Vc), !0
    }

    function Rr(cB, Bc, nc, Vc) {
      if (Bc <= cB.fitInstances) return null;
      const {
        layout: Ic,
        ends: rB,
        offsets: uc,
        slotData: sc,
        Xrc: Mc
      } = cB;
      let Pc = !1;
      for (let qB = 0; qB < Ic.buffers.length; qB++) {
        const cB = Ic.instanceEnds[qB];
        if (cB < 0) continue;
        const Vc = (Bc - 1) * Ic.buffers[qB].arrayStride + cB;
        if (rB[qB] - uc[qB] < Vc) return {
          index: qB,
          needed: Vc
        };
        const Oc = sc[qB];
        Oc && nc.cover(Oc, Mc[qB] + Vc) && (Pc = !0)
      }
      return Pc && Jr(cB, nc, Vc), cB.fitInstances = Bc, null
    }
    var iu = nc(36377),
      Kr = nc(36407);
    const xu = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      dr = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Ar = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Gr = `((vertexInputs.aPackedLightLevels >> 16u) | ${MB.d.placed}u)`,
      cs = "u32(vertexInputs.aShaderPackItem.x)",
      Bu = `${MB.d.lifeform}u`;

    function nu(cB) {
      return "item" === cB.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Vu = "bloxdSpEnchant",
      Iu = "floor(finalWorld[3].xyz)";

    function rs(cB, Bc, nc) {
      return "placed" === Bc.kind && cB.reads[nc].includes("bloxdFragmentBlockPosition")
    }

    function uu(cB, Bc) {
      let [nc, Vc] = cB;
      return nc === Bc.point && Vc === Bc.code
    }

    function su(cB, Bc) {
      var nc, Vc, Ic;
      const rB = null === (nc = cB.find((cB => cB.texture))) || void 0 === nc ? void 0 : nc.texture,
        uc = null === (Vc = cB.find((cB => cB.enchantTier))) || void 0 === Vc ? void 0 : Vc.enchantTier,
        sc = null === (Ic = cB.find((cB => cB.overlay))) || void 0 === Ic ? void 0 : Ic.overlay,
        Mc = sc ? Bc.filter((cB => uu(cB, sc))).length : 0;
      return sc && 1 === Mc ? {
        texture: rB,
        overlay: sc,
        enchantTier: uc
      } : {
        texture: rB,
        enchantTier: uc
      }
    }

    function Mu(cB) {
      if ("item" === cB.kind) {
        return {
          vertexFlags: `(${cs} & 0xffffu)`,
          varying: "vPackItem",
          value: cs,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return cB.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Gr,
        varying: "vPackFlags",
        value: Gr,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Pu(cB) {
      return "lifeform" === cB.kind ? Bu : "0u"
    }

    function qs(cB) {
      return !!cB.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Ou(cB, Bc) {
      const {
        enchantTier: nc
      } = Bc;
      return nc && qs(Bc.defines) && "lifeform" === Bc.kind && Su(cB, "enchantTier") ? nc : null
    }

    function Tu(cB, Bc) {
      return qs(Bc.defines) && Su(cB, "enchantSpeed")
    }

    function fu(cB) {
      const {
        overlay: Bc,
        defines: nc
      } = cB;
      if (!Bc || !nc.DIFFUSE) return null;
      const Vc = nc.VERTEXCOLOR || nc.INSTANCESCOLOR && nc.INSTANCES;
      return `vec4f(${Bc.colour}.rgb * uniforms.vDiffuseInfos.y${Vc?" * fragmentInputs.vColor.rgb":""}, ${Bc.colour}.a)`
    }
    const ms = "fragmentInputs.vPackTexture";

    function eu(cB) {
      const {
        atlas: Bc,
        defines: nc,
        texture: Vc
      } = cB;
      if (Bc || !nc.DIFFUSE) return null;
      if (Vc) return {
        texture: "diffuseSampler",
        ...Vc
      };
      const Ic = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===nc.DIFFUSEDIRECTUV?"vMainUV1":2===nc.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== cB.kind) return Ic;
      if (!nc.BLOXD_PLUGIN_ANIMATED) return {
        ...Ic,
        id: ms
      };
      const rB = aB.c.WGSL,
        uc = (0, aB.Nb)(rB, "uAnimStatesNum"),
        sc = (0, aB.lb)(rB, (0, iu.i)(rB), uc),
        Mc = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${uc})`,
        layers: [sc],
        uv: `vec2f(${Mc}.x, ${Mc}.y * ${uc} - ${sc})`,
        levelUv: Mc,
        id: ms
      }
    }

    function ts(cB, Bc) {
      return "box" === Bc.kind && !!cB.hooks.surface && null !== eu(Bc)
    }

    function Su(cB, Bc) {
      return cB.reads.fragment.includes(Bc)
    }

    function ys(cB) {
      return !!cB.BLOXD_LIGHTING && !cB.BLOXD_UNLIT
    }

    function zs(cB, Bc, nc, Vc) {
      const Ic = cB.filter((cB => {
        let [nc, Vc] = cB;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === nc && Vc === Bc
      }));
      if (1 !== Ic.length) throw new Error(`A model program for shader packs has ${0===Ic.length?"no":"more than one"} ${Vc} code before fog (lite/modelShaderPack.ts)`);
      return cB.map((cB => cB === Ic[0] ? [cB[0], nc] : cB))
    }

    function pu(cB, Bc, nc, Vc) {
      const {
        hooks: Ic
      } = cB, {
        kind: rB,
        defines: uc
      } = Bc, sc = [...nc];
      var Mc;
      Bc.atlas && Ic.surface && sc.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Jn("atlasIdxIn")]), "item" === rB && sc.push(["CUSTOM_VERTEX_DEFINITIONS", (0, aB.e)(aB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), ts(cB, Bc) && sc.push(["CUSTOM_VERTEX_DEFINITIONS", (0, aB.e)(aB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Mc = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Hn}[min(u32(${Mc}) - 1u, arrayLength(&${Hn}) - 1u)], ${Mc} > 0.5);\n`)]);
      const Pc = Mu(Bc);
      Pc && (Ic.surface || Ic.light) && sc.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Pc.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Pc.varying} = ${Pc.value};`]);
      let qB = Vc;
      if (rs(cB, Bc, "fragment") && (sc.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Iu});`]), qB = [...qB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Su(cB, "localPosition") && sc.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${nu(Bc)};`]), qs(uc) && Ic.surface) {
        Tu(cB, Bc) && sc.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const nc = Ou(cB, Bc);
        nc && sc.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${nc});`]);
        const Vc = (0, aB.Bb)(aB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        qB = [...zs(qB, (0, Kr.f)(aB.c.WGSL), Vc, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Kr.b)(Vu)]]
      }
      const {
        overlay: Oc
      } = Bc;
      Oc && fu(Bc) && Ic.surface && (qB = qB.filter((cB => !uu(cB, Oc))));
      const Tc = Ic.light ? function(cB) {
        return "placed" === cB.kind ? {
          name: "terrain",
          engine: (0, lB.W)(aB.c.WGSL),
          pack: (0, lB.nb)(aB.c.WGSL)
        } : cB.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, lB.Q)(aB.c.WGSL),
          pack: (0, lB.ib)(aB.c.WGSL)
        } : null
      }(Bc) : null;
      if (Tc && (qB = zs(qB, Tc.engine, Tc.pack, `${Tc.name} light`), "placed" !== rB && ys(uc))) {
        const cB = uc.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, aB.Nb)(aB.c.WGSL, "uEntityLightLevels") : (0, aB.Xb)(aB.c.WGSL, "aLightLevels");
        sc.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${lB.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, lB.mb)(aB.c.WGSL, cB)])
      }
      return {
        vertexCode: sc,
        fragmentCode: qB
      }
    }

    function hu(cB, Bc, nc, Vc) {
      return Nn(cB, Bc, nc, Vc, "model")
    }
    const as = "\t@builtin(position) position: vec4f,\n";

    function lu(cB, Bc) {
      const nc = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(cB)[0];
      return `${nc}${Bc}${cB.slice(nc.length)}`
    }

    function Yu(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Ic
      } = Bc, rB = onc(Bc, Vc), {
        kind: uc,
        defines: sc
      } = nc, Mc = function(cB, Bc) {
        var nc, Vc, Ic;
        const {
          defines: rB
        } = Bc, uc = Mu(Bc), sc = !!rB.FOG, Mc = qs(rB), Pc = null !== (nc = null === uc || void 0 === uc ? void 0 : uc.enchantTier) && void 0 !== nc ? nc : Ou(cB, Bc) ? "fragmentInputs.vPackEnchantTier" : "0u", qB = "lifeform" === Bc.kind && !rB.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Vc = null === uc || void 0 === uc ? void 0 : uc.vertexFlags) && void 0 !== Vc ? Vc : Pu(Bc),
          vertexLocalPosition: nu(Bc),
          flags: null !== (Ic = null === uc || void 0 === uc ? void 0 : uc.flags) && void 0 !== Ic ? Ic : Pu(Bc),
          normal: "normalW",
          alpha: qB ? "alpha * baseColor.a" : "alpha",
          alphaOut: qB ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: sc ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: sc ? "1.0 - fog" : "0.0",
          enchantTier: Pc,
          enchantColour: Mc ? `${Vu}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Tu(cB, Bc) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Su(cB, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: fu(Bc)
        }
      }(Bc, nc), Pc = cB.textures.filter((cB => /^textureAtlas\d+$/.test(cB.name))).length, qB = nc.atlas && Pc > 0 ? {
        count: Pc,
        layers: nc.atlas.layers,
        width: nc.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: cB.material.slots.has("uAnimDataPerTex") ? (Bc, nc) => UV(Bc, nc, function(cB) {
          const Bc = cB.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            cn: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: cB => `uniforms.uAnimDataPerTex[${cB}]${Bc}`
          }
        }(cB)) : null
      } : null, Oc = "placed" === uc ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Tc = null !== qB && void 0 !== qB ? qB : eu(nc), fc = function(cB, nc) {
        let Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,gn.D)()}${wn(Bc,nc)}${Vc}${Rn(cB)}${Cn}${Oc}${Bc.code}`
      };
      let {
        vertex: mB,
        fragment: ec
      } = cB;
      const tB = Kn(Ic, Mc);
      if (tB) {
        const cB = rs(Bc, nc, "vertex") ? `\tbloxdSpCell = ${Iu};\n` : "";
        mB = hu(mB, xu, `${cB}${tB.slice(1)}${xu}`, "vertex")
      }
      const Sc = `${kV(Bc,rB,function(cB,Bc){return Bc.TWOSIDEDLIGHTING?cB:`select(-(${cB}), ${cB}, fragmentInputs.frontFacing)`}(Mc.normal,sc),Mc.flags)}${xV(Ic,Bc.strict,Bc.program,Tc,Mc)}`;
      Sc && (ec = hu(ec, dr, `${Sc.slice(1)}${dr}`, "surface")), rB && Bc.sunShadow && !sc.TWOSIDEDLIGHTING && (ec = hu(ec, as, `${as}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const yB = Gn(Ic);
      if (yB) {
        const cB = An(Ic, ys(sc), !0, Mc);
        ec = hu(ec, Ar, `${cB}${yB.slice(1)}${Ar}`, "light")
      }
      const zB = ts(Bc, nc) ? Fn : "";
      return {
        ...cB,
        vertex: lu(mB, fc(qB, !1, zB)),
        fragment: lu(ec, fc(Tc, rB))
      }
    }
    const Lu = {
      name: "earthSky",
      uniqueId: -1
    };
    class gs {
      constructor(cB) {
        this.resources = cB, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const cB of this.instances.values()) cB.released = !0, this.resources.destroyBuffer(cB.buffer);
        this.instances.clear()
      }
    }

    function Uu(cB) {
      return cB.failed && null !== cB.packGroup
    }
    class bs {
      constructor(cB, Bc, nc) {
        this.device = cB, this.resources = Bc, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Wrc = new Zr, this.modelMeshes = new bu, this.thinBundle = void 0, this.binder = new xr, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Sr((cB => this.modelSlot(cB).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, PB.e)("Lite: "), this.renderStates = new Tr(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (cB, Bc) => this.keepSteady(cB, Bc), this.lists = new dI(this.modelMeshes, this.Wrc, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Mr(Bc, this.warnOnce, ((cB, Bc, nc) => this.programWithModel(cB, Bc, nc)), Uu), this.vertexLayouts = new hr(Bc, cB.limits, this.warnOnce), this.sceneLayout = BB(cB), this.frameLayout = cB.createBindGroupLayout({
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
        }), this.frameBuffer = cB.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Yr(cB, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = cB.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new vu(cB, new Yr(cB, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (cB, Bc, nc) => this.pipelineFor(cB, Bc, nc),
          pipelineCompiling: (cB, Bc) => !cB.program.failed && !1 !== this.pipelines.get(`${cB.pipelineKey}|${Bc}`),
          sceneGroup: cB => {
            const Bc = nc(cB);
            return Bc || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Bc
          }
        }), Bc.onDestroy = cB => {
          this.thinBundle.resourceDestroyed(cB)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Ic = {
          order: cB,
          isTransparent: Bc,
          _direct: !Bc,
          bind: (cB, Bc) => this.createBinding(Ic, Bc, nc, Vc)
        };
        return Ic
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(cB, Bc, nc) {
        var Vc;
        let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Bc, this.drawDefines.view = Bc, this.thinBundle.sC(), this.writeFrameUniforms();
        const rB = null !== (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.defineFor("model")) && void 0 !== Vc ? Vc : 0;
        this.drawDefines.modelPackVariant = rB, Ic && 0 !== rB && (this.packInputs ??= new Fr(this.device, Ic.textureLayers(), this.sunShadow), this.packInputs.write(Ic, Bc.eye, Ic.GI())), this.lists.clear(), this.slotCount = 0;
        const uc = cB.activeCamera;
        this.Wrc.select(uc, this.keepSteadyBase), this.modelMeshes.select(uc, Bc), nc && this.pushEarthSky(nc), this.lists.collect(cB), this.thinBundle.fC(), this.uploadMeshSlots()
      }
      pushDraws(cB, Bc, nc, Vc, Ic, rB) {
        let uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const sc = rB.length;
        for (let Mc = 0; Mc < nc; Mc++) {
          const nc = Bc[Mc];
          let sc = this.retainedDraw(cB, nc, Vc, Ic);
          if (void 0 === sc && (sc = this.drawFor(cB, nc, Vc, Ic), this.retain(nc, sc)), sc) {
            const cB = nc.owner,
              Bc = uc ? uc[Mc] : -1;
            sc.slotOffset = Bc < 0 ? this.writeMeshSlot(cB.getWorldMatrix().m, cB.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Bc], 16 * Bc), rB.push(sc)
          }
        }
        return rB.length - sc
      }
      bundleDraws(cB, Bc, nc) {
        let Vc = 0;
        for (const Ic of Bc) {
          let Bc = this.retainedDraw(cB, Ic, nc, !1);
          const rB = void 0 !== Bc;
          if (void 0 === Bc && (Bc = this.drawFor(cB, Ic, nc, !1), this.retain(Ic, Bc)), Bc) {
            const cB = Ic.owner,
              nc = this.thinBundle.add(Ic, Bc, cB.getWorldMatrix().m, cB.visibility);
            rB && this.steadyFrom(Ic, Bc, nc), Vc++
          }
        }
        return Vc
      }
      steadyFrom(cB, Bc, nc) {
        const Vc = cB.owner,
          Ic = this.Wrc.base(Vc),
          rB = Vc.material,
          {
            drawState: uc,
            instance: sc
          } = Bc.inputs.retained;
        if (!Ic || !rB || 1 !== cB.parts.materials.length || gu(cB) !== rB) return;
        const Mc = Ic.steady ??= {
          unit: cB,
          material: rB,
          visibility: 1,
          draw: Bc,
          record: nc,
          drawState: uc,
          instance: sc,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Mc.unit = cB, Mc.material = rB, Mc.visibility = Vc.visibility, Mc.draw = Bc, Mc.record = nc, Mc.drawState = uc, Mc.instance = sc, Mc.bindGroup = sc.bindGroup, Mc.gpuVersion = this.resources.gpuBuffersVersion, Mc.fitInstances = Bc.inputs.fitInstances, Mc.worldFlag = Vc.getWorldMatrix().updateFlag, Mc.handedFrame = this.frame
      }
      keepSteady(cB, Bc) {
        const nc = cB.steady;
        if (nc.handedFrame !== this.frame - 1 || (this.frame + nc.phase) % 8 === 0) return !1;
        const Vc = cB.mesh,
          {
            unit: Ic,
            draw: rB,
            instance: uc,
            drawState: sc
          } = nc,
          Mc = Vc.forcedInstanceCount || Vc.Jrc;
        if (!Vc.isVisible || Vc.Wqc || Vc.visibility !== nc.visibility || 0 === (Vc.layerMask & Bc.layerMask) || Vc.material !== nc.material || 0 !== Vc.renderingGroupId || Vc.hasVertexAlpha || !this.drawDefines.definesHold(sc, Ic, sc.instancing) || nc.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(rB.inputs, Ic, sc.instancing, rB.program) || rB.program.failed || uc.released || Mc <= 0 || Mc > nc.fitInstances) return !1;
        if (uc.frame !== this.frame && this.bindMaterial(uc, this.modelUniforms.refreshModelUniforms(Vc.knc(), uc, uc.model, this.view)), !uc.bindable || uc.bindGroup !== nc.bindGroup) return !1;
        const Pc = Vc.computeWorldMatrix(),
          qB = Pc.updateFlag !== nc.worldFlag;
        return nc.worldFlag = Pc.updateFlag, rB.instances = Mc, this.thinBundle.addAgain(nc.record, rB, qB ? Pc.m : null, nc.visibility), nc.handedFrame = this.frame, this.Wrc.drawn++, !0
      }
      retainedDraw(cB, Bc, nc, Vc) {
        const Ic = this.inputs.get(Bc),
          rB = null === Ic || void 0 === Ic ? void 0 : Ic.retained;
        if (!Ic || !rB) return;
        const {
          drawState: uc,
          program: sc,
          instance: Mc,
          instancing: Pc
        } = rB, qB = Bc.owner;
        if (nr(qB) !== Pc) return;
        const Oc = this.instanceCount(qB, Pc);
        if (Oc <= 0) return null;
        if (Mc.released || sc.failed || uc.program !== sc || !this.drawDefines.programCurrent(uc, Bc, Pc, nc) || !this.inputsStamped(Ic, Bc, Pc, sc) || qB.isUnIndexed !== rB.unIndexed || this.indexKey(Bc) !== rB.indexData) return;
        if (rB.indexBuffer && rB.gpuVersion !== this.resources.gpuBuffersVersion) {
          const cB = this.resources.gpuBuffer(rB.indexData);
          if (!cB) return;
          rB.indexBuffer = cB, rB.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Tc = !1;
        if (Mc.frame !== this.frame && (Tc = this.modelUniforms.refreshModelUniforms(cB, Mc, Mc.model, this.view)), !this.bindMaterial(Mc, Tc) || !this.withGpuBuffers(Ic) || !this.instanceBuffersFit(qB.name, Ic, Oc)) return null;
        const fc = this.makeDraw(sc, Ic, this.renderStates.renderState(uc.model, qB, Vc, Ic.state), Mc, Oc);
        return this.setRange(fc, Bc, rB.indexBuffer, rB.indexData), fc
      }
      retain(cB, Bc) {
        const nc = this.drawDefines.drawStates.get(cB);
        if (!Bc || !nc || nc.program !== Bc.program) {
          const Bc = this.inputs.get(cB);
          return void(Bc && (Bc.retained = null))
        }
        const Vc = cB.owner,
          Ic = nc.instancing,
          rB = this.indexKey(cB),
          uc = Bc.inputs.retained;
        uc ? (uc.drawState = nc, uc.instancing = Ic, uc.program = Bc.program, uc.instance = Bc.material, uc.indexData = rB, uc.unIndexed = Vc.isUnIndexed, uc.indexBuffer = Bc.indexBuffer, uc.gpuVersion = this.resources.gpuBuffersVersion) : Bc.inputs.retained = {
          drawState: nc,
          instancing: Ic,
          program: Bc.program,
          instance: Bc.material,
          indexData: rB,
          unIndexed: Vc.isUnIndexed,
          indexBuffer: Bc.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(cB, Bc, nc, Vc) {
        const Ic = Bc.owner,
          rB = gu(Bc);
        if (!rB) return null;
        const uc = rB.getClassName();
        let sc = null;
        if (function(cB) {
            return "LinesMesh" === cB.getClassName()
          }(Ic)) {
          if (! function(cB) {
              return "ShaderMaterial" === cB.getClassName() && "color" === cB.shaderPath
            }(rB)) return this.warnOnce(`lines:${uc}`, `A LinesMesh with a ${uc} is not drawn yet (${rB.name})`), null;
          sc = Ic
        } else if ("StandardMaterial" !== uc && "LiteMaterial" !== uc) return this.warnOnce(`class:${uc}`, `${uc} is not drawn yet (${rB.name})`), null;
        const Mc = nr(Ic),
          Pc = this.instanceCount(Ic, Mc);
        if (Pc <= 0) return null;
        const qB = sc ? this.lineProgramFor(Ic, nc, Mc) : this.drawDefines.programFor(cB, Bc, rB, nc, Mc);
        if (!qB || qB.failed) return null;
        const Oc = sc ? null : this.drawDefines.drawStates.get(Bc).model,
          Tc = Oc ? this.modelInstance(Oc, qB) : this.materialInstance(Ic, qB);
        let fc = !1;
        if (Tc.frame !== this.frame && (sc ? yB(Tc.ubo, sc) : fc = this.modelUniforms.refreshModelUniforms(cB, Tc, Tc.model, this.view)), !this.bindMaterial(Tc, fc)) return null;
        const mB = this.meshInputs(Bc, qB, Mc);
        if (!mB || !this.instanceBuffersFit(Ic.name, mB, Pc)) return null;
        const ec = this.indexKey(Bc);
        let tB = null;
        if (ec && !Ic.isUnIndexed && (tB = this.resources.gpuBuffer(ec), !tB)) return null;
        const Sc = this.renderStates.renderState(null !== Oc && void 0 !== Oc ? Oc : rB, Ic, Vc, mB.state, sc ? "line-list" : "triangle-list"),
          zB = this.makeDraw(qB, mB, Sc, Tc, Pc);
        return this.setRange(zB, Bc, tB, ec), zB
      }
      indexKey(cB) {
        const Bc = ur(cB);
        return Bc ? this.resources.modelIndex(Bc) : null
      }
      setRange(cB, Bc, nc, Vc) {
        nc && (cB.indexBuffer = nc, cB.indexFormat = this.resources.indexFormat(Vc));
        const Ic = 4 * Bc.range + (nc ? 0 : 2);
        cB.unit = Bc, cB.first = Bc.parts.Iu[Ic], cB.count = Bc.parts.Iu[Ic + 1]
      }
      makeDraw(cB, Bc, nc, Vc, Ic) {
        Bc.state !== nc && (Bc.state = nc, Bc.pipelineKey = `${cB.id}|${Bc.layout.key}|${nc.key}`, Bc.pipeline = null);
        const rB = Bc.draw ??= {
          program: cB,
          inputs: Bc,
          pipelineKey: "",
          layout: Bc.layout,
          state: nc,
          material: Vc,
          slotOffset: 0,
          vertexBuffers: Bc.buffers,
          vertexOffsets: Bc.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Ic,
          unit: null
        };
        return rB.program = cB, rB.pipelineKey = Bc.pipelineKey, rB.state = nc, rB.material = Vc, rB.vertexOffsets = Bc.offsets, rB.indexBuffer = null, rB.instances = Ic, rB
      }
      instanceCount(cB, Bc) {
        switch (Bc) {
          case "thin":
            return cB.forcedInstanceCount || cB.Jrc;
          case "instanced":
            return this.prepareInstances(cB);
          case "none":
            return 1
        }
      }
      prepareInstances(cB) {
        const Bc = function(cB, Bc) {
          const nc = Bc._userInstancedBuffersStorage,
            Vc = cB.batchUploads.get(Bc);
          if (Vc) {
            var Ic;
            if (Vc.layout === (null !== (Ic = null === nc || void 0 === nc ? void 0 : nc.interleavedKinds) && void 0 !== Ic ? Ic : null)) return Vc;
            Vc.release()
          }
          return new jB(cB, Bc, nc)
        }(this.resources, cB);
        return Bc.frame !== this.frame && Bc.pack(cB, this.modelMeshes.instanceBatch(cB), this.modelMeshes.worlds, this.frame), Bc.count
      }
      programWithModel(cB, Bc, nc) {
        const Vc = this.modelSlot(cB),
          Ic = Pr(Vc, cB, nc),
          rB = this.drawDefines.modelPackKind(cB),
          uc = rB ? function(cB, Bc, nc, Vc) {
            const Ic = (0, Lc.z)(cB, lc.j.name),
              rB = [];
            for (const {
                feature: Mc,
                state: Pc,
                active: qB
              }
              of cB.features) {
              var uc, sc;
              const cB = qB ? null === (uc = (sc = (0, qn.g)(Mc)).qI) || void 0 === uc ? void 0 : uc.call(sc, Pc) : void 0;
              cB && rB.push(cB)
            }
            return {
              kind: Bc,
              atlas: null !== Ic && void 0 !== Ic && Ic.active ? (0, lc.c)(Ic.state) : null,
              defines: nc,
              ...su(rB, Vc)
            }
          }(cB, rB, Bc, Vc.fragmentCode) : null;
        if (uc && function(cB) {
            const Bc = cB.defines;
            return (null === cB.atlas || !!Bc.DIFFUSE && 1 === Bc.DIFFUSEDIRECTUV) && !!Bc.NORMAL && !Bc.REFLECTION && !Bc.EMISSIVEASILLUMINATION && !Bc.LINKEMISSIVEWITHDIFFUSE
          }(uc)) {
          const nc = this.modelPackProgram(cB, Bc, `${Ic}#${rB}#sp${this.drawDefines.modelPackVariant}`, Vc, uc);
          if (nc && !nc.failed) return nc
        }
        const sc = this.programs.get(Ic);
        if (sc || this.unbuildable.has(Ic)) return null !== sc && void 0 !== sc ? sc : null;
        let Mc;
        try {
          Mc = PI({
            defines: Ir(Bc),
            vertexCode: Vc.vertexCode,
            fragmentCode: Vc.fragmentCode,
            pluginUniforms: Vc.pluginUniforms
          })
        } catch (Pc) {
          return this.unbuildable.add(Ic), this.warnOnce(`build:${Ic}`, `could not build a program for ${cB.name}: ${String(Pc)}`), null
        }
        return this.createProgram(Ic, Mc, "standard")
      }
      modelPackProgram(cB, Bc, nc, Vc, Ic) {
        const rB = this.programs.get(nc);
        if (rB || this.unbuildable.has(nc)) return null !== rB && void 0 !== rB ? rB : null;
        const uc = this.drawDefines.modelPackVariant;
        let sc;
        try {
          const cB = function(cB) {
              return (0, UB.b)(cB, "model")
            }(uc),
            nc = pu(cB, Ic, Vc.vertexCode, Vc.fragmentCode);
          sc = Yu(PI({
            defines: Ir(Bc),
            ...nc,
            pluginUniforms: Vc.pluginUniforms
          }), cB, Ic, !!this.sunShadow)
        } catch (qB) {
          return this.unbuildable.add(nc), this.warnOnce(`build:${nc}`, `could not build a shader pack program for ${cB.name}, which draws without the pack: ${String(qB)}`), null
        }
        const Mc = Xr(uc, !!this.sunShadow),
          Pc = {
            group: this.packInputs.bindGroupFor(null, Mc),
            layout: wr(this.device, {
              depth: !1,
              sunShadow: Mc
            })
          };
        return this.createProgram(nc, sc, function(cB) {
          return `standard-sp${cB}`
        }(uc), Pc)
      }
      lineProgramFor(cB, Bc, nc) {
        const Vc = Sc(cB, nc, Bc, this.view);
        let Ic = this.linePrograms.get(Vc);
        var rB;
        return Ic || (Ic = this.createProgram(`lines#${Vc}`, (rB = function(cB) {
          const Bc = new Map;
          for (let nc = 0; nc < Pc.length; nc++) cB & 1 << nc && Bc.set(Pc[nc], !0);
          return Bc
        }(Vc), fI({
          defines: rB,
          vertex: OI,
          fragment: TI,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Vc, Ic)), Ic
      }
      createProgram(cB, Bc, nc) {
        var Vc;
        let Ic = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const rB = this.nextProgramId++,
          uc = `${nc}-${rB}`,
          sc = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Mc = [{
            binding: 0,
            visibility: sc,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Oc of Bc.textures) Mc.push({
          binding: Oc.binding,
          visibility: sc,
          texture: {
            viewDimension: Oc.dimension
          }
        }), Mc.push({
          binding: Oc.samplerBinding,
          visibility: sc,
          sampler: {}
        });
        const Pc = this.device.createBindGroupLayout({
            label: uc,
            entries: Mc
          }),
          qB = {
            key: cB,
            id: rB,
            kind: nc,
            program: Bc,
            vertex: this.device.createShaderModule({
              label: `${uc}-vertex`,
              code: Bc.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${uc}-fragment`,
              code: Bc.fragment
            }),
            materialLayout: Pc,
            pipelineLayout: this.device.createPipelineLayout({
              label: uc,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Pc, ...Ic ? [Ic.layout] : []]
            }),
            packGroup: null !== (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.group) && void 0 !== Vc ? Vc : null,
            failed: !1
          };
        return this.programs.set(cB, qB), qB
      }
      writeFrameUniforms() {
        const cB = this.frameUniforms;
        tu(this.view, cB), this.device.queue.writeBuffer(this.frameBuffer, 0, cB)
      }
      materialInstance(cB, Bc) {
        let nc = this.materials.get(cB);
        if (!nc) {
          const Bc = new Map;
          this.materials.set(cB, Bc), cB.XBc.addOnce((() => {
            for (const cB of Bc.values()) cB.released = !0, this.resources.destroyBuffer(cB.buffer);
            this.materials.delete(cB)
          })), nc = Bc
        }
        let Vc = nc.get(Bc.key);
        return Vc || (Vc = this.newMaterialInstance(cB, null, Bc), nc.set(Bc.key, Vc)), Vc
      }
      modelInstance(cB, Bc) {
        const nc = this.modelSlot(cB);
        let Vc = nc.instances.get(Bc.key);
        return Vc || (Vc = this.newMaterialInstance(cB, cB, Bc), nc.instances.set(Bc.key, Vc)), Vc
      }
      modelSlot(cB) {
        let Bc = cB.gpu[Uc.i.lite];
        return Bc || (Bc = new gs(this.resources), cB.gpu[Uc.i.lite] = Bc), Bc
      }
      newMaterialInstance(cB, Bc, nc) {
        const Vc = nc.program.material.floats,
          Ic = new Float32Array(Vc),
          rB = new Map;
        return {
          owner: cB,
          model: Bc,
          program: nc,
          data: Ic,
          uploaded: new Float32Array(Vc).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${cB.name}-uniforms`,
            size: Math.max(16, 4 * Vc),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: rB,
          ubo: new er(nc.program.material.slots, Ic, rB),
          bindGroup: null,
          bound: new Array(2 * nc.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(cB) {
        var Bc;
        const nc = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: yr + zr,
            fragment: yr + pI,
            attributes: [],
            material: SI,
            textures: []
          }, "earthSky"),
          Vc = this.earthSkyUniforms ??= this.newMaterialInstance(Lu, null, nc);
        this.earthSkyFrom !== cB && (this.earthSkyFrom = cB, Vc.data.fill(0)), br(Vc.ubo, cB, this.view);
        const Ic = this.vertexInputs(nc, Lu, "earthSky", nc, null);
        if (nc.failed || !Ic || !this.bindMaterial(Vc, !1)) return;
        const rB = null !== (Bc = Ic.state) && void 0 !== Bc ? Bc : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          uc = this.makeDraw(nc, Ic, rB, Vc, 1);
        uc.count = mr.length;
        const sc = ZI(cB, this.view);
        uc.slotOffset = this.writeMeshSlot(sc, 1), this.lists.skyDraws.push(uc)
      }
      uploadIfChanged(cB) {
        const {
          data: Bc,
          uploaded: nc
        } = cB;
        for (let Vc = 0; Vc < Bc.length; Vc++)
          if (Bc[Vc] !== nc[Vc]) return nc.set(Bc), void this.device.queue.writeBuffer(cB.buffer, 0, Bc)
      }
      bindMaterial(cB, Bc) {
        return cB.frame !== this.frame && (cB.frame = this.frame, Bc || this.uploadIfChanged(cB), cB.bindable = this.bindTextures(cB)), cB.bindable
      }
      bindTextures(cB) {
        const {
          program: Bc,
          bound: nc
        } = cB, Vc = Bc.program.textures;
        let Ic = !cB.bindGroup,
          rB = !0;
        for (let uc = 0; uc < Vc.length; uc++) {
          const Bc = cB.textures.get(Vc[uc].name),
            sc = Bc ? this.resources.boundTexture(Bc) : null;
          sc ? nc[2 * uc] === sc.view && nc[2 * uc + 1] === sc.sampler || (nc[2 * uc] = sc.view, nc[2 * uc + 1] = sc.sampler, Ic = !0) : (Bc || cB.ubo.expected.has(Vc[uc].name) || this.warnOnce(`texture:${cB.owner.name}:${Vc[uc].name}`, `${cB.owner.name} has no ${Vc[uc].name}`), rB = !1)
        }
        if (!rB) return Ic && (cB.bindGroup = null), !1;
        if (Ic) {
          const Ic = [{
            binding: 0,
            resource: {
              buffer: cB.buffer
            }
          }];
          for (let cB = 0; cB < Vc.length; cB++) Ic.push({
            binding: Vc[cB].binding,
            resource: nc[2 * cB]
          }), Ic.push({
            binding: Vc[cB].samplerBinding,
            resource: nc[2 * cB + 1]
          });
          cB.bindGroup = this.device.createBindGroup({
            label: `${cB.owner.name}-material`,
            layout: Bc.materialLayout,
            entries: Ic
          })
        }
        return !0
      }
      writeMeshSlot(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, cB, Bc, nc), this.slotCount++ * HV
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(cB, Bc, nc, Vc, Ic) {
        let rB = this.inputs.get(cB);
        if (!rB || rB.program !== Vc || !au(Bc, rB, this.resources, Ic)) {
          var uc;
          if (rB = null !== (uc = this.vertexLayouts.resolveInputs(Bc, nc, Vc, Ic)) && void 0 !== uc ? uc : void 0, !rB) return null;
          this.inputs.set(cB, rB)
        }
        return this.withGpuBuffers(rB)
      }
      meshInputs(cB, Bc, nc) {
        const Vc = this.inputs.get(cB);
        if (Vc && this.inputsStamped(Vc, cB, nc, Bc)) return this.withGpuBuffers(Vc);
        const Ic = cB.owner,
          rB = ur(cB),
          uc = this.vertexInputs(cB, Ic, Ic.name, Bc, rB);
        return uc && (uc.geometry = sr(cB), uc.instanceLayout = this.drawDefines.instanceLayout(Ic, nc)), uc
      }
      inputsStamped(cB, Bc, nc, Vc) {
        return function(cB, Bc, nc, Vc) {
          return cB.program === nc && cB.geometry === sr(Bc) && cB.instanceLayout === Vc
        }(cB, Bc, Vc, this.drawDefines.instanceLayout(Bc.owner, nc))
      }
      withGpuBuffers(cB) {
        return Jr(cB, this.resources, this.zeroBuffer) ? cB : null
      }
      instanceBuffersFit(cB, Bc, nc) {
        const Vc = Rr(Bc, nc, this.resources, this.zeroBuffer);
        if (Vc) {
          const Ic = Bc.ends[Vc.index] - Bc.offsets[Vc.index] + Bc.Xrc[Vc.index];
          return this.warnOnce(`overrun:${cB}`, `${cB} draws ${nc} instances from a ${Ic}-byte buffer (${Vc.needed} needed)`), !1
        }
        return !0
      }
      createBinding(cB, Bc, nc, Vc) {
        const Ic = `${Bc._colorFormat}|${Bc._depthStencilFormat}|${Bc._depthCompare}|${Bc._sampleCount}`,
          rB = uB(this.device, Bc);
        if (cB === this.skyLastRenderable) {
          let nc = null;
          return {
            renderable: cB,
            pipeline: rB,
            draw: cB => nc ? this.drawSky(cB, Bc, Ic, nc) : 0,
            update: cB => {
              nc = cB
            }
          }
        }
        return {
          renderable: cB,
          pipeline: rB,
          draw: cB => (Vc ? Vc.execute(cB, Bc, Ic) : 0) + this.drawList(cB, Bc, Ic, nc)
        }
      }
      drawSky(cB, Bc, nc, Vc) {
        const Ic = this.lists.skyDraws,
          rB = Ic.length > 0;
        if (rB) {
          var uc;
          const nc = (null !== (uc = Bc._depthCompare) && void 0 !== uc ? uc : nB).startsWith("greater") ? 0 : 1;
          cB.setViewport(0, 0, Vc.targetWidth, Vc.targetHeight, nc, nc)
        }
        const sc = this.drawList(cB, Bc, nc, Ic);
        return rB && cB.setViewport(0, 0, Vc.targetWidth, Vc.targetHeight, 0, 1), sc
      }
      drawList(cB, Bc, nc, Vc) {
        let Ic = 0;
        const rB = this.binder;
        rB.reset();
        for (const uc of Vc) {
          const Vc = this.pipelineFor(uc, Bc, nc);
          Vc && (rB.bind(cB, uc, Vc, this.meshSlots.bindGroup, uc.slotOffset), uc.indexBuffer ? cB.drawIndexed(uc.count, uc.instances, uc.first, 0, 0) : cB.draw(uc.count, uc.instances, uc.first, 0), Ic++)
        }
        return Ic
      }
      pipelineFor(cB, Bc, nc) {
        var Vc, Ic;
        if (cB.program.failed) return null;
        const rB = cB.inputs;
        if (rB.pipeline && rB.pipelineTarget === nc) return rB.pipeline;
        const uc = `${cB.pipelineKey}|${nc}`,
          sc = this.pipelines.get(uc);
        if (void 0 !== sc) return sc && (rB.pipeline = sc, rB.pipelineTarget = nc), sc || null;
        this.pipelines.set(uc, null);
        const {
          program: Mc,
          layout: Pc,
          state: qB
        } = cB, Oc = {
          label: `standard-${Mc.id}`,
          layout: Mc.pipelineLayout,
          vertex: {
            module: Mc.vertex,
            entryPoint: "main",
            buffers: Pc.buffers
          },
          fragment: dc({
            module: Mc.fragment,
            entryPoint: "main"
          }, Bc, qB.blend, qB.colourWrite),
          depthStencil: Bc._depthStencilFormat ? {
            format: Bc._depthStencilFormat,
            depthCompare: null !== (Vc = null !== (Ic = qB.depthCompare) && void 0 !== Ic ? Ic : Bc._depthCompare) && void 0 !== Vc ? Vc : nB,
            depthWriteEnabled: qB.depthWrite,
            depthBias: qB.depthBias,
            depthBiasSlopeScale: qB.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Bc._sampleCount
          },
          primitive: {
            topology: qB.topology,
            frontFace: qB.frontFace,
            cullMode: qB.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Oc).then((cB => {
          this.compiling--, this.pipelines.set(uc, cB)
        }), (cB => {
          this.compiling--, this.reportFailure(Mc, uc, cB)
        })), null
      }
      forEachSunShadowCaster(cB) {
        const Bc = this.caster,
          nc = (nc, Vc, Ic) => {
            const rB = nc.unit && function(cB) {
              const Bc = cB.material.model;
              return null !== Bc && (Bc.lifeform || Bc.item) && Bc.castsSunShadow && "triangle-list" === cB.state.topology
            }(nc) ? ur(nc.unit) : null;
            if (!rB) return;
            const uc = nc.unit.owner;
            switch (Bc.geometry = rB, Bc.skip = uc.noSunShadowVertices, Bc.indexed = null !== nc.indexBuffer, Bc.first = nc.first, Bc.count = nc.count, Bc.rn = Vc, Bc.worldAt = Ic, Bc.instances = null, Bc.instanceCount = 1, Bc.thin = !1, nr(uc)) {
              case "thin": {
                const cB = uc._thinInstanceDataStorage.matrixData;
                if (!cB) return;
                Bc.instances = cB, Bc.instanceCount = Math.min(nc.instances, cB.length / 16), Bc.thin = !0;
                break
              }
              case "instanced": {
                const cB = this.resources.batchUploads.get(uc);
                if (!cB || cB.frame !== this.frame || !this.writeBatchCasters(cB)) return;
                break
              }
            }
            cB(Bc)
          };
        for (const Vc of this.lists.opaqueDraws) nc(Vc, this.meshSlots.data, Vc.slotOffset / 4);
        this.thinBundle.forEachDrawn(nc)
      }
      writeBatchCasters(cB) {
        const {
          caster: Bc
        } = this, nc = cB.packedMatrices, Vc = cB.count;
        Bc.instances = nc, Bc.instanceCount = Vc;
        let Ic = -1;
        for (let rB = 0; rB < Vc; rB++) {
          const Bc = Zu(cB.packedRowMesh(rB));
          Bc && Ic < 0 ? (this.casterWorlds.length < 16 * Vc && (this.casterWorlds = new Float32Array(nc.length)), this.casterWorlds.set(nc.subarray(0, 16 * rB)), Ic = rB) : !Bc && Ic >= 0 && (this.casterWorlds.set(nc.subarray(16 * rB, 16 * rB + 16), 16 * Ic), Ic++)
        }
        return Ic >= 0 && (Bc.instances = this.casterWorlds, Bc.instanceCount = Ic), Bc.instanceCount > 0
      }
      async reportFailure(cB, Bc, nc) {
        const Vc = [];
        let Ic = !0;
        for (const [rB, uc] of [
            ["vertex", cB.vertex],
            ["fragment", cB.fragment]
          ]) {
          const cB = await uc.getCompilationInfo();
          for (const Bc of cB.messages) Ic &&= "error" !== Bc.type, Vc.push(`${rB}:${Bc.lineNum}:${Bc.linePos} ${Bc.type}: ${Bc.message}`)
        }
        if (Ic && !cB.packGroup) return this.pipelines.set(Bc, !1), console.error(`Lite: pipeline ${Bc} failed`, nc), void KI("mesh", cB.kind, nc);
        cB.failed || (cB.failed = !0, console.error(`Lite: program ${cB.id} failed`, nc, Vc.join("\n"), {
          program: cB.program,
          key: cB.key
        }), KI("mesh", cB.kind, nc, Ic ? null : Vc[0]))
      }
    }

    function Zu(cB) {
      var Bc, nc;
      const Vc = null === (Bc = cB.snc) || void 0 === Bc || null === (nc = Bc.aShaderPackItem) || void 0 === nc ? void 0 : nc.x;
      return void 0 !== Vc && 0 !== (Vc & MB.h)
    }
    var Qu = nc(39644),
      Cu = nc(39646),
      vs = nc(39648),
      Du = nc(39592);
    const Nu = [0, 3, 1, 4, 2, 5];

    function Eu(cB, Bc, nc, Vc, Ic) {
      const rB = nc[0].width;
      try {
        return Ic ? function(cB, Bc, nc) {
          const Vc = (0, Du.b)(cB, nc, nc, 6);
          for (let Ic = 0; Ic < 6; Ic++)(0, Du.e)(cB, Vc, Ic, Bc[Nu[Ic]], {
            invertY: !1
          });
          return Vc.texture
        }(cB, nc, rB) : function(cB, Bc, nc, Vc) {
          const Ic = cB.createTexture({
            label: "sink-cube",
            size: {
              width: nc,
              height: nc,
              depthOrArrayLayers: 6
            },
            format: Vc,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let rB = 0; rB < 6; rB++) cB.queue.copyExternalImageToTexture({
            source: Bc[Nu[rB]]
          }, {
            texture: Ic,
            origin: {
              x: 0,
              y: 0,
              z: rB
            }
          }, {
            width: nc,
            height: nc
          });
          return Ic
        }(Bc, nc, rB, 1 === Vc ? "r8unorm" : "rgba8unorm")
      } finally {
        ou(nc)
      }
    }

    function ou(cB) {
      for (const Bc of null !== cB && void 0 !== cB ? cB : []) null === Bc || void 0 === Bc || Bc.close()
    }
    async function Wu(cB) {
      const Bc = [],
        nc = [];
      if (await Promise.all(cB.map(((cB, Vc) => (Bc[Vc] = null, cB.then((cB => {
          Bc[Vc] = cB
        }), (cB => {
          nc.push(cB)
        })))))), nc.length > 0) throw ou(Bc), nc[0];
      return Bc
    }
    class wu {
      constructor(cB) {
        this.Qc = cB, this.starts = [], this.lengths = [], this.used = 0, cB > 0 && (this.starts.push(0), this.lengths.push(cB))
      }
      allocate(cB) {
        const {
          starts: Bc,
          lengths: nc
        } = this;
        for (let Vc = 0; Vc < Bc.length; Vc++) {
          if (nc[Vc] < cB) continue;
          const Ic = Bc[Vc];
          return nc[Vc] === cB ? (Bc.splice(Vc, 1), nc.splice(Vc, 1)) : (Bc[Vc] += cB, nc[Vc] -= cB), this.used += cB, Ic
        }
        return -1
      }
      free(cB, Bc) {
        this.used -= Bc;
        const nc = Math.min(cB + Bc, this.Qc);
        nc > cB && this.release(cB, nc - cB)
      }
      grow(cB) {
        const Bc = this.Qc;
        this.Qc = cB, this.release(Bc, cB - Bc)
      }
      truncate(cB) {
        const {
          starts: Bc,
          lengths: nc
        } = this;
        for (let Vc = Bc.length - 1; Vc >= 0 && Bc[Vc] + nc[Vc] > cB; Vc--) Bc[Vc] >= cB ? (Bc.splice(Vc, 1), nc.splice(Vc, 1)) : nc[Vc] = cB - Bc[Vc];
        this.Qc = cB
      }
      release(cB, Bc) {
        const {
          starts: nc,
          lengths: Vc
        } = this;
        let Ic = 0,
          rB = nc.length;
        for (; Ic < rB;) {
          const Bc = Ic + rB >> 1;
          nc[Bc] < cB ? Ic = Bc + 1 : rB = Bc
        }
        const uc = Ic,
          sc = uc > 0 && nc[uc - 1] + Vc[uc - 1] === cB,
          Mc = uc < nc.length && cB + Bc === nc[uc];
        sc && Mc ? (Vc[uc - 1] += Bc + Vc[uc], nc.splice(uc, 1), Vc.splice(uc, 1)) : sc ? Vc[uc - 1] += Bc : Mc ? (nc[uc] = cB, Vc[uc] += Bc) : (nc.splice(uc, 0, cB), Vc.splice(uc, 0, Bc))
      }
    }
    const ks = 256;
    class Xu {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = cB, this.onReplaced = Bc, this.mergeGap = nc, this.gpu = null, this.bytes = void 0, this.Iu = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Ic = Math.max(ks, Math.ceil(Vc / ks) * ks);
        this.bytes = new Uint8Array(Ic), this.Iu = new wu(Ic / ks)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(cB) {
        return Math.max(1, Math.ceil(cB / ks)) * ks
      }
      allocate(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cB;
        const Vc = Xu.slotBytes(cB),
          Ic = Vc / ks;
        let rB = this.Iu.allocate(Ic);
        rB < 0 && (this.grow(this.Iu.Qc + Ic), rB = this.Iu.allocate(Ic));
        const uc = rB * ks;
        return this.growTo(uc + Math.max(nc, Vc)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, uc, uc + Vc), Bc && this.bytes.set(new Uint8Array(Bc.buffer, Bc.byteOffset, Math.min(Bc.byteLength, Vc)), uc), this.markDirty(uc, uc + Vc), uc
      }
      growTo(cB) {
        const Bc = Math.ceil(cB / ks);
        Bc > this.Iu.Qc && this.grow(Bc)
      }
      free(cB, Bc) {
        this.freed.push(cB, Bc)
      }
      write(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Vc <= 0) return;
        this.bytes.set(new Uint8Array(Bc.buffer, nc, Vc), cB);
        let rB = cB + Vc;
        if (Ic) {
          const Bc = cB + 4 * Math.ceil(Vc / 4);
          this.bytes.fill(0, rB, Bc), rB = Bc
        }
        this.markDirty(cB, rB)
      }
      move(cB, Bc, nc) {
        this.bytes.copyWithin(Bc, cB, cB + nc), this.markDirty(Bc, Bc + nc)
      }
      flush() {
        for (const Bc of this.retired) this.onReplaced(Bc), Bc.destroy();
        this.retired.length = 0;
        const cB = this.dirtyStarts.length;
        if (cB > 0) {
          const {
            dirtyStarts: Bc,
            dirtyEnds: nc,
            order: Vc
          } = this;
          Vc.length = cB;
          for (let sc = 0; sc < cB; sc++) Vc[sc] = sc;
          cB > 1 && Vc.sort(((cB, nc) => Bc[cB] - Bc[nc]));
          const Ic = this.mergeGap;
          let rB = Bc[Vc[0]],
            uc = nc[Vc[0]];
          for (let sc = 1; sc < cB; sc++) {
            const cB = Vc[sc];
            Bc[cB] - uc <= Ic ? uc = Math.max(uc, nc[cB]) : (this.send(rB, uc), rB = Bc[cB], uc = nc[cB])
          }
          this.send(rB, uc), Bc.length = 0, nc.length = 0
        }
        this.holding = !1
      }
      fC() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const cB = this.freed;
        for (let Bc = 0; Bc < cB.length; Bc += 2) this.Iu.free(cB[Bc] / ks, cB[Bc + 1] / ks);
        cB.length = 0
      }
      send(cB, Bc) {
        this.device.queue.writeBuffer(this.gpu, cB, this.bytes.buffer, cB, Bc - cB);
        for (const nc of this.replaced) {
          const Vc = Math.min(Bc, nc.size);
          Vc > cB && this.device.queue.writeBuffer(nc, cB, this.bytes.buffer, cB, Vc - cB)
        }
      }
      markDirty(cB, Bc) {
        cB &= -4, Bc = Bc + 3 & -4, this.holding ? (this.dirtyStarts.push(cB), this.dirtyEnds.push(Bc)) : this.send(cB, Bc)
      }
      grow(cB) {
        const Bc = this.Iu.Qc,
          nc = Math.max(2 * Bc, cB),
          Vc = new Uint8Array(nc * ks);
        Vc.set(this.bytes);
        const Ic = this.gpu;
        this.gpu = this.createGpu(Vc.byteLength), this.bytes = Vc, this.Iu.grow(nc), Ic && (this.replaced.push(Ic), this.onReplaced(Ic)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Bc * ks)
      }
      createGpu(cB) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: cB,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Hu(cB) {
      return Array.isArray(cB) ? new Float32Array(cB) : cB
    }

    function Fu(cB, Bc, nc, Vc, Ic) {
      const rB = CI(Ic),
        uc = Math.min(Ic, Vc.byteLength);
      if (rB === uc && Vc.byteOffset % 4 === 0) return void cB.queue.writeBuffer(Bc, nc, Vc.buffer, Vc.byteOffset, rB);
      const sc = new Uint8Array(rB);
      sc.set(new Uint8Array(Vc.buffer, Vc.byteOffset, uc)), cB.queue.writeBuffer(Bc, nc, sc)
    }

    function Ju(cB, Bc, nc) {
      const Vc = "linear",
        Ic = "nearest";
      let rB = Ic,
        uc = Ic,
        sc = "nearest",
        Mc = !Bc;
      switch (cB) {
        case 11:
          rB = Vc, uc = Vc;
          break;
        case 3:
          rB = Vc, uc = Vc, sc = Bc ? "linear" : "nearest";
          break;
        case 8:
          sc = Bc ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          uc = Vc;
          break;
        case 6:
          uc = Vc, sc = Bc ? "linear" : "nearest";
          break;
        case 7:
          uc = Vc, Mc = !0;
          break;
        case 9:
          rB = Vc;
          break;
        case 10:
          rB = Vc, sc = Bc ? "linear" : "nearest";
          break;
        case 2:
          rB = Vc, uc = Vc, nc > 1 ? (sc = "linear", Mc = !1) : Mc = !0;
          break;
        case 12:
          rB = Vc, Mc = !0;
          break;
        default:
          Mc = !0
      }
      return nc > 1 && !Mc ? {
        magFilter: Vc,
        minFilter: Vc,
        mipmapFilter: "linear",
        maxAnisotropy: nc
      } : {
        magFilter: rB,
        minFilter: uc,
        mipmapFilter: sc,
        ...Mc ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function jsc(cB) {
      return 0 === cB ? "clamp-to-edge" : 2 === cB ? "mirror-repeat" : "repeat"
    }
    class Ru {
      constructor(cB, Bc) {
        let {
          vertexArena: nc = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = cB, this.device = Bc, this.buffers = new WeakMap, this.zuc = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = nc ? new Xu(Bc, (cB => {
          var Bc;
          null === (Bc = this.onDestroy) || void 0 === Bc || Bc.call(this, cB), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var cB;
        null === (cB = this.arena) || void 0 === cB || cB.flush()
      }
      endUploadFrame() {
        var cB;
        null === (cB = this.arena) || void 0 === cB || cB.fC()
      }
      vertexBufferCreated(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : nc ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(cB);
        const Ic = Hu(Bc);
        cB.Qc = Ic.byteLength, this.buffers.set(cB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: nc && null !== this.arena,
          pending: Ic,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Vc
        })
      }
      vertexBufferUpdated(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        const Ic = this.buffers.get(cB);
        if (!Ic) return;
        const rB = Hu(Bc),
          uc = void 0 === Vc ? rB.byteLength : Math.min(Vc, rB.byteLength);
        this.update(Ic, rB, nc, uc)
      }
      vertexBufferFloatsUpdated(cB, Bc, nc, Vc) {
        const Ic = this.buffers.get(cB);
        if (!Ic) return;
        const rB = nc * Float32Array.BYTES_PER_ELEMENT,
          uc = (Vc - nc) * Float32Array.BYTES_PER_ELEMENT;
        Ic.slot >= 0 && uc > 0 && rB + uc <= Ic.size ? this.writeSlot(Ic, rB, Bc, Bc.byteOffset + rB, uc, !1) : Ic.gpu && uc > 0 && rB + uc <= Ic.gpu.size ? this.device.queue.writeBuffer(Ic.gpu, rB, Bc.buffer, Bc.byteOffset + rB, uc) : this.update(Ic, Bc.subarray(nc, Vc), rB, uc)
      }
      indexBufferCreated(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(cB);
        const Vc = function(cB) {
          if (cB instanceof Uint16Array || cB instanceof Uint32Array) return cB;
          for (let Bc = 0; Bc < cB.length; Bc++)
            if (cB[Bc] >= 65535) return new Uint32Array(cB);
          return new Uint16Array(cB)
        }(Bc);
        cB.is32Bits = 4 === Vc.BYTES_PER_ELEMENT, cB.Qc = Vc.byteLength, this.buffers.set(cB, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Vc,
          ownsPending: Vc !== Bc,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: nc
        })
      }
      bufferDeleted(cB) {
        const Bc = this.buffers.get(cB);
        null !== Bc && void 0 !== Bc && Bc.gpu ? (this.destroyBuffer(Bc.gpu), this.gpuBuffersVersion++) : Bc && Bc.slot >= 0 && (this.arena.free(Bc.slot, Bc.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(cB)
      }
      update(cB, Bc, nc, Vc) {
        if (cB.slot >= 0) this.updateSlot(cB, Bc, nc, Vc);
        else if (cB.gpu) {
          if (nc + CI(Vc) > cB.gpu.size) {
            const Bc = this.device.createBuffer({
                label: cB.label,
                size: CI(Math.max(2 * cB.gpu.size, nc + Vc)),
                usage: cB.usage | GPUBufferUsage.COPY_SRC
              }),
              Ic = this.device.createCommandEncoder();
            Ic.copyBufferToBuffer(cB.gpu, 0, Bc, 0, cB.gpu.size), this.device.queue.submit([Ic.finish()]), this.destroyBuffer(cB.gpu), this.gpuBuffersVersion++, cB.gpu = Bc
          }
          Fu(this.device, cB.gpu, nc, Bc, Vc)
        } else {
          const rB = new Uint8Array(Bc.buffer, Bc.byteOffset, Vc),
            uc = cB.pending;
          if (uc && cB.ownsPending && nc + Vc <= uc.byteLength) new Uint8Array(uc.buffer, uc.byteOffset, uc.byteLength).set(rB, nc);
          else if (uc && 0 === nc && Vc === uc.byteLength && Bc.byteLength === Vc) cB.pending = Bc, cB.ownsPending = !1;
          else {
            var Ic;
            const Bc = new Uint8Array(Math.max(null !== (Ic = null === uc || void 0 === uc ? void 0 : uc.byteLength) && void 0 !== Ic ? Ic : 0, nc + Vc));
            uc && Bc.set(new Uint8Array(uc.buffer, uc.byteOffset, uc.byteLength)), Bc.set(rB, nc), cB.pending = Bc, cB.ownsPending = !0
          }
        }
      }
      updateSlot(cB, Bc, nc, Vc) {
        const Ic = this.arena;
        nc + CI(Vc) > cB.size && (cB.size = CI(Math.max(2 * cB.size, nc + Vc)), Ic.growTo(cB.slot + cB.size), this.gpuBuffersVersion++), 0 === Vc ? this.writeSlot(cB, nc, Ku, 0, 4, !1) : this.writeSlot(cB, nc, Bc, Bc.byteOffset, Vc, !0)
      }
      writeSlot(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Bc + (rB ? CI(Ic) : Ic);
        uc > cB.slotBytes && this.moveSlot(cB, uc), this.arena.write(cB.slot + Bc, nc, Vc, Ic, rB)
      }
      moveSlot(cB, Bc) {
        const nc = this.arena,
          Vc = Xu.slotBytes(Math.max(Bc, Math.min(2 * cB.slotBytes, cB.size))),
          Ic = nc.allocate(Vc, null, cB.size);
        nc.move(cB.slot, Ic, cB.slotBytes), nc.free(cB.slot, cB.slotBytes), cB.slot = Ic, cB.slotBytes = Vc, this.gpuBuffersVersion++
      }
      cover(cB, Bc) {
        const nc = this.buffers.get(cB);
        if (!nc || nc.slot < 0) return !1;
        const Vc = Math.min(Bc, nc.size);
        return !(Vc <= nc.slotBytes) && (this.moveSlot(nc, Vc), !0)
      }
      destroyBuffer(cB) {
        var Bc;
        null === (Bc = this.onDestroy) || void 0 === Bc || Bc.call(this, cB), cB.destroy()
      }
      gpuBuffer(cB) {
        const Bc = this.buffers.get(cB);
        if (!Bc) return null;
        if (Bc.slot >= 0) return this.arena.buffer;
        if (Bc.arena && Bc.pending) {
          const cB = Bc.pending,
            nc = this.arena;
          return Bc.size = CI(cB.byteLength), Bc.slotBytes = Xu.slotBytes(function(cB) {
            const Bc = new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength);
            let nc = Bc.length;
            if (cB.byteOffset % 4 === 0) {
              for (; nc % 4 !== 0 && 0 === Bc[nc - 1];) nc--;
              if (nc % 4 === 0) {
                const Bc = new Uint32Array(cB.buffer, cB.byteOffset, nc / 4);
                let Vc = Bc.length;
                for (; Vc > 0 && 0 === Bc[Vc - 1];) Vc--;
                nc = 4 * Vc
              }
            }
            for (; nc > 0 && 0 === Bc[nc - 1];) nc--;
            return nc
          }(cB)), Bc.slot = nc.allocate(Bc.slotBytes, cB, Bc.size), Bc.pending = null, nc.buffer
        }
        if (!Bc.gpu && Bc.pending) {
          const cB = Bc.pending;
          Bc.gpu = this.device.createBuffer({
            label: Bc.label,
            size: CI(cB.byteLength),
            usage: Bc.usage
          }), Fu(this.device, Bc.gpu, 0, cB, cB.byteLength), Bc.pending = null
        }
        return Bc.gpu
      }
      gpuOffset(cB) {
        var Bc, nc;
        const Vc = null !== (Bc = null === (nc = this.buffers.get(cB)) || void 0 === nc ? void 0 : nc.slot) && void 0 !== Bc ? Bc : -1;
        return Vc < 0 ? 0 : Vc
      }
      gpuEnd(cB) {
        var Bc, nc;
        const Vc = this.buffers.get(cB);
        return Vc ? Vc.slot >= 0 ? Vc.slot + Vc.size : null !== (Bc = null === (nc = Vc.gpu) || void 0 === nc ? void 0 : nc.size) && void 0 !== Bc ? Bc : 0 : 0
      }
      vertexInput(cB, Bc, nc) {
        var Vc, Ic, rB, uc;
        return null !== (Vc = null !== (Ic = nc && this.modelInput(nc, Bc)) && void 0 !== Ic ? Ic : null === (rB = null !== (uc = this.zuc.get(cB)) && void 0 !== uc ? uc : this.batchUploads.get(cB)) || void 0 === rB ? void 0 : rB.inputs[Bc]) && void 0 !== Vc ? Vc : null
      }
      modelInput(cB, Bc) {
        const nc = this.geometrySlot(cB);
        let Vc = nc.inputs.get(Bc);
        if (void 0 === Vc) {
          const Ic = cB.vertexAttributes.find((cB => cB.kind === Bc));
          Vc = Ic ? new Rc(this.modelKey(nc, Ic.data, !1), Ic.offset, Ic.stride, Ic.components, !1, Ic.glType, Ic.isNormalized) : null, nc.inputs.set(Bc, Vc)
        }
        return Vc
      }
      modelIndex(cB) {
        return cB.indexData && this.modelKey(this.geometrySlot(cB), cB.indexData, !0)
      }
      geometrySlot(cB) {
        let Bc = cB.gpu[Uc.i.lite];
        if (!Bc) {
          const nc = new Map,
            Vc = () => {
              for (const cB of nc.values()) this.bufferDeleted(cB)
            },
            Ic = cB => {
              const Bc = nc.get(cB);
              Bc && this.vertexBufferUpdated(Bc, cB)
            };
          Bc = {
            keys: nc,
            inputs: new Map,
            release: Vc,
            updated: Ic
          }, cB.gpu[Uc.i.lite] = Bc
        }
        return Bc
      }
      modelKey(cB, Bc, nc) {
        let Vc = cB.keys.get(Bc);
        if (!Vc) {
          if (nc) {
            const cB = {
              Qc: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(cB, Bc, "model-indices"), Vc = cB
          } else Vc = {
            Qc: 0
          }, this.vertexBufferCreated(Vc, Bc, !1, "model-vertices");
          cB.keys.set(Bc, Vc)
        }
        return Vc
      }
      indexFormat(cB) {
        return cB.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(cB, Bc) {
        --cB.refs > 0 || (this.releaseTexture(cB), ou(cB.images), null !== Bc && this.textures.delete(Bc))
      }
      load(cB, Bc) {
        const nc = Bc.decoded = async function(cB) {
          if ("cube" === cB.kind) return async function(cB) {
            if (6 !== cB.length) throw new Error(`${cB.length} files where six faces were expected`);
            const Bc = await Wu(cB.map((cB => WI(cB)))),
              nc = Bc[0].width;
            return Wu(Bc.map((async cB => {
              if (cB.width === nc && cB.height === nc) return cB;
              try {
                return await createImageBitmap(cB, {
                  ...EI,
                  resizeWidth: nc,
                  resizeHeight: nc
                })
              } finally {
                cB.close()
              }
            })))
          }(cB.files);
          if ("data" === cB.kind && cB.data) return [await createImageBitmap(new Blob([cB.data]), EI)];
          return [await WI(is(cB))]
        }(cB.source).then((cB => {
          0 === Bc.refs ? ou(cB) : Bc.images = cB
        }));
        this.track(Bc, is(cB.source), nc, (() => {
          Bc.wanted && !Bc.failed && Bc.refs > 0 && this.upload(cB, Bc)
        }))
      }
      canvasUpdated(cB, Bc, nc) {
        const {
          state: Vc
        } = this.textureSlot(cB);
        Vc.dynamicSource = {
          invertY: Bc,
          premultiplied: nc
        }, Vc.dynamic && this.pushDynamic(cB.source, Vc)
      }
      async atlasArray(cB, Bc, nc) {
        const Vc = await XI(this.device, cB, Bc, nc);
        if (!this.atlasBindings.has(Vc)) {
          const cB = (0, Qu.c)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Vc, {
            view: Vc.texture.createView({
              dimension: "2d-array"
            }),
            sampler: cB
          })
        }
        return Vc
      }
      boundTexture(cB) {
        const Bc = this.atlasBindings.get(cB);
        if (Bc) return Bc;
        const nc = cB;
        if (nc.released) return null;
        const Vc = this.textureSlot(nc, !0),
          {
            state: Ic
          } = Vc;
        if (!Ic.view && (Ic.wanted = !0, Ic.loading || Ic.failed || this.upload(nc, Ic), !Ic.view)) return null;
        const rB = this.chosenSampler(nc, Vc),
          uc = Vc.bound;
        return uc && uc.view === Ic.view && uc.sampler === rB ? uc : (Vc.bound = {
          view: Ic.view,
          sampler: rB
        }, Vc.bound)
      }
      textureLoaded(cB) {
        var Bc, nc;
        return null !== (Bc = null === (nc = cB.gpu[Uc.i.lite]) || void 0 === nc ? void 0 : nc.state.decoded) && void 0 !== Bc ? Bc : null
      }
      textureFailed(cB) {
        var Bc;
        return !0 === (null === (Bc = cB.gpu[Uc.i.lite]) || void 0 === Bc ? void 0 : Bc.state.failed)
      }
      chosenSampler(cB, Bc) {
        const {
          samplingMode: nc,
          wrapU: Vc,
          wrapV: Ic
        } = cB.sampler, rB = Bc.state.hasMips, uc = function(cB, Bc) {
          const {
            bilinear: nc,
            trilinear: Vc
          } = Uc.k;
          return !Bc && cB !== nc || 11 !== cB && cB !== Vc && cB !== nc ? 1 : 4
        }(nc, rB), sc = Bc.sampler;
        if (sc && sc.samplingMode === nc && sc.hasMips === rB && sc.anisotropy === uc && sc.wrapU === Vc && sc.wrapV === Ic) return sc.sampler;
        const Mc = this.samplerFor(nc, rB, uc, Vc, Ic);
        return Bc.sampler = {
          samplingMode: nc,
          hasMips: rB,
          anisotropy: uc,
          wrapU: Vc,
          wrapV: Ic,
          sampler: Mc
        }, Mc
      }
      releaseTexture(cB) {
        var Bc, nc;
        cB.view && (null === (nc = this.onDestroy) || void 0 === nc || nc.call(this, cB.view));
        null === (Bc = cB.destroy) || void 0 === Bc || Bc.call(cB)
      }
      textureSlot(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const nc = cB.gpu[Uc.i.lite];
        if (nc) return nc;
        const Vc = function(cB) {
          let {
            source: Bc,
            sampler: nc
          } = cB;
          return "canvas" === Bc.kind ? null : `${Bc.kind}|${is(Bc)}|${nc.noMipmap}|${nc.samplingMode}|${nc.invertY}`
        }(cB);
        let Ic = null === Vc ? void 0 : this.textures.get(Vc);
        Ic || (Ic = {
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
        }, null !== Vc && (this.textures.set(Vc, Ic), this.load(cB, Ic), Bc && this.firstBindDecodes++)), Ic.refs++;
        const rB = Ic,
          uc = {
            state: Ic,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(rB, Vc)
            }
          };
        return cB.gpu[Uc.i.lite] = uc, uc
      }
      samplerFor(cB, Bc, nc, Vc, Ic) {
        const rB = `${cB}|${Bc}|${nc}|${Vc}|${Ic}`;
        let uc = this.samplers.get(rB);
        if (!uc) {
          const sc = {
            ...Ju(cB, Bc, nc),
            addressModeU: jsc(Vc),
            addressModeV: jsc(Ic)
          };
          uc = (0, Qu.c)(this.engine, sc), this.samplers.set(rB, uc)
        }
        return uc
      }
      upload(cB, Bc) {
        const {
          source: nc,
          sampler: Vc
        } = cB;
        Bc.hasMips = !Vc.noMipmap, "canvas" === nc.kind ? this.createDynamic(nc, Bc) : "cube" === nc.kind ? this.uploadCube(Bc, nc.luminance) : this.uploadImage(Bc, !0 === Vc.invertY, nc.url)
      }
      uploadImage(cB, Bc, nc) {
        const [Vc] = cB.images;
        cB.images = null;
        const Ic = (0, Cu.e)(this.engine, Vc, {
          mipMaps: cB.hasMips,
          invertY: Bc,
          srgb: !1
        }).then((Bc => {
          Vc.close(), 0 !== cB.refs ? (cB.view = Bc.view, cB.destroy = Bc.texture.destroy.bind(Bc.texture)) : Bc.texture.destroy()
        }));
        this.track(cB, nc, Ic)
      }
      track(cB, Bc, nc, Vc) {
        cB.loading = !0, this.pending++, nc.catch((nc => {
          cB.failed = !0, console.warn(`Lite: could not load texture ${oI(Bc)}`, nc)
        })).finally((() => {
          cB.loading = !1, this.pending--, null === Vc || void 0 === Vc || Vc()
        }))
      }
      uploadCube(cB, Bc) {
        const nc = cB.images;
        cB.images = null;
        const Vc = Eu(this.engine, this.device, nc, (0, Uc.A)(Bc), cB.hasMips);
        cB.view = Vc.createView({
          dimension: "cube"
        }), cB.destroy = () => {
          Vc.destroy()
        }
      }
      createDynamic(cB, Bc) {
        const {
          canvas: nc
        } = cB, Vc = (0, vs.d)(this.engine, Math.max(1, nc.width), Math.max(1, nc.height), {
          mipMaps: Bc.hasMips,
          srgb: !1
        });
        Bc.dynamic = Vc, Bc.view = Vc.view, Bc.destroy = () => {
          Vc.texture.destroy()
        }, this.pushDynamic(cB, Bc)
      }
      pushDynamic(cB, Bc) {
        const nc = Bc.dynamicSource,
          Vc = Bc.dynamic,
          {
            canvas: Ic
          } = cB;
        if (nc && Vc && 0 !== Ic.width && 0 !== Ic.height) return Ic.width !== Vc.width || Ic.height !== Vc.height ? (this.releaseTexture(Bc), Bc.dynamic = null, Bc.view = null, void this.createDynamic(cB, Bc)) : void(0, vs.h)(this.engine, Vc, Ic, {
          invertY: nc.invertY,
          premultiplyAlpha: nc.premultiplied
        })
      }
    }

    function is(cB) {
      return "cube" === cB.kind ? cB.rootUrl : "canvas" === cB.kind ? "canvas" : cB.url
    }
    const Ku = new Uint8Array(4);

    function xs(cB) {
      const Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      cB._colorAttachment.storeOp = cB._targetSignature._sampleCount > 1 ? Bc : "store";
      const nc = cB._renderPassDescriptor.depthStencilAttachment;
      nc && (nc.depthStoreOp = Bc, nc.stencilStoreOp && (nc.stencilStoreOp = Bc))
    }
    var du = nc(36329),
      Au = nc(36385),
      Gu = nc(35963),
      cM = nc(37803);
    const Bs = new Float64Array([1, 1, 1]),
      ns = new Float64Array([0, 1, 0]),
      Vs = new Float64Array(4),
      Is = new Float32Array(16),
      rM = new Float64Array(3),
      us = new Float64Array(4);

    function ss(cB, Bc, nc) {
      cB.fov = Bc.fov, cB.near = Bc.near, cB.far = Bc.far, cB.renderWidth = nc.renderWidth, cB.renderHeight = nc.renderHeight, (0, Gu.n)(Bc.holderRotation, 0, Vs, 0), (0, Gu.b)(Bs, 0, Vs, 0, Bc.holderPosition, 0, Is);
      const Vc = Bc.lIc;
      rM[0] = Vc[0], rM[1] = Vc[1], rM[2] = Vc[2] + 1;
      const Ic = cB.viewMatrix;
      (0, Gu.g)(Vc, rM, ns, Ic), (0, Gu.d)(Ic, 0, Ic), (0, Gu.i)(Ic, Is, 0, Ic), (0, Gu.d)(Ic, 0, Ic);
      const rB = cB.worldMatrix;
      (0, Gu.d)(Ic, 0, rB), cB.eye[0] = rB[12], cB.eye[1] = rB[13], cB.eye[2] = rB[14], us[0] = cB.fov, us[1] = cB.renderWidth / cB.renderHeight, us[2] = cB.near, us[3] = cB.far, (0, Gu.j)(us, cB.projectionMatrix), (0, Gu.i)(Ic, cB.projectionMatrix, 0, cB.viewProjectionMatrix), (0, cM.e)(cB.viewProjectionMatrix, cB.frustum)
    }

    function Ms(cB, Bc) {
      let nc = cB.frustumPlanes;
      nc || (nc = cB.frustumPlanes = Array.from({
        length: 6
      }, (() => new du.d(0, 0, 0, 0))));
      for (let Vc = 0; Vc < 6; Vc++) {
        const cB = nc[Vc].normal;
        cB._x = Bc[4 * Vc], cB._y = Bc[4 * Vc + 1], cB._z = Bc[4 * Vc + 2], cB._isDirty = !0, nc[Vc].d = Bc[4 * Vc + 3]
      }
    }

    function Ps(cB, Bc) {
      const nc = Bc.clearColor;
      cB.clearColour[0] = nc.r, cB.clearColour[1] = nc.g, cB.clearColour[2] = nc.b, cB.clearColour[3] = nc.a;
      const Vc = Bc.ambientColor;
      cB.ambientColour[0] = Vc.r, cB.ambientColour[1] = Vc.g, cB.ambientColour[2] = Vc.b, cB.animationRatio = Bc.animationRatio, cB.frameId = Bc.frameId, cB.version++
    }

    function qM(cB) {
      const Bc = cB.model.view;
      return Bc.animTick = (0, Au.h)(), Bc.timeMs = performance.now(), Ps(Bc, cB.Ir), cB.model.update(Bc.frameId), Bc
    }

    function Os(cB) {
      const Bc = cB.Ir,
        {
          view: nc,
          hIc: Vc
        } = cB.model;
      return ss(nc, Vc, Bc.RV()), Bc.onBeforeRenderObservable.notifyObservers(Bc), Ms(Bc, nc.frustum), Bc.onBeforeCameraRenderObservable.notifyObservers(Bc.activeCamera), qM(cB)
    }
    var Ts = nc(35921),
      fs = nc(36038),
      mM = nc(36370);

    function es(cB) {
      var Bc, nc;
      const Vc = (0, Lc.X)(cB);
      if (!Vc || Vc.diffuseTexture && (0, mM.g)(cB)) return null;
      const Ic = null === (Bc = (0, Lc.z)(Vc, lc.j.name)) || void 0 === Bc ? void 0 : Bc.state,
        rB = null === (nc = (0, Lc.z)(Vc, iu.e.name)) || void 0 === nc ? void 0 : nc.state,
        uc = new Float32Array(16);
      return function(cB, Bc, nc, Vc) {
        var Ic, rB;
        const uc = fV;
        Vc.set(cB.diffuseColor, uc.diffuse), Vc[uc.diffuse + 3] = cB.alpha, Vc.set(cB.ambientColor, uc.ambientAndCutoff), Vc[uc.ambientAndCutoff + 3] = cB.alphaCutOff, Vc.set(cB.emissiveColor, uc.emissiveAndLevel), Vc[uc.emissiveAndLevel + 3] = null !== (Ic = null === (rB = cB.diffuseTexture) || void 0 === rB ? void 0 : rB.level) && void 0 !== Ic ? Ic : 1, null !== Bc && void 0 !== Bc && Bc.animDataPerTex ? (Vc[uc.anim + 1] = Au.d, Vc[uc.anim + 2] = Bc.animDataPerTex.length / 3 - 1) : nc && (Vc[uc.anim + 1] = nc.numAnimStates, Vc[uc.anim + 2] = nc.ticksPerAnimState)
      }(Vc, Ic, rB, uc), {
        model: Vc,
        atlas: Ic,
        texture: Ic ? "atlas" : Vc.diffuseTexture ? "single" : "none",
        animated: Ic ? !!Ic.animDataPerTex : !!rB,
        liquid: (0, mM.h)(cB),
        customRenderMat: (0, mM.g)(cB),
        uniformData: uc
      }
    }
    var tM = nc(35899);
    class Ss {
      constructor(cB) {
        this.units = cB, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var cB;
        this.buffer.destroy(), null === (cB = this.twin) || void 0 === cB || cB.destroy()
      }
    }
    class yM {
      constructor(cB, Bc) {
        this.arena = cB, this.Iu = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Iu = new wu(Bc);
        const nc = new Ss(Bc);
        nc.buffer = this.createBuffer(nc, !1), this.backings.push(nc), this.refresh()
      }
      get Qc() {
        return this.Iu.Qc
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
        let cB = 0;
        for (const Bc of this.backings) cB += Bc.units * (this.arena.unitBytes + (Bc.twin ? this.arena.twinUnitBytes : 0));
        return cB
      }
      holds(cB) {
        return cB.start + cB.length <= this.usable
      }
      lost(cB) {
        return this.dropped || cB.start + cB.length > this.Qc
      }
      write(cB, Bc) {
        const {
          device: nc,
          unitBytes: Vc
        } = this.arena;
        for (const Ic of this.backings) {
          const rB = (Ic.units - cB.start) * Vc;
          rB > 0 && nc.queue.writeBuffer(Ic.buffer, cB.start * Vc, Bc, 0, Math.min(Bc.byteLength, rB))
        }
      }
      writeLight(cB, Bc) {
        const {
          device: nc,
          twinUnitBytes: Vc,
          verticesPerUnit: Ic
        } = this.arena, {
          light: rB,
          count: uc
        } = this.arena.twinLight(Bc, Math.min(Bc.length, cB.length * Ic));
        for (const sc of this.backings) {
          sc.twin || (sc.twin = this.createBuffer(sc, !0));
          const Bc = (sc.units - cB.start) * Ic;
          Bc > 0 && nc.queue.writeBuffer(sc.twin, cB.start * Vc, rB, 0, Math.min(uc, Bc))
        }
      }
      grow(cB) {
        this.arena.assertNotDrawing();
        const {
          device: Bc,
          unitBytes: nc,
          label: Vc
        } = this.arena, Ic = this.backings[this.backings.length - 1], rB = new Ss(cB), uc = Bc.createCommandEncoder({
          label: `${Vc}-grow`
        });
        rB.buffer = this.createBuffer(rB, !1), uc.copyBufferToBuffer(Ic.buffer, 0, rB.buffer, 0, Ic.units * nc), Ic.twin && (rB.twin = this.createBuffer(rB, !0), uc.copyBufferToBuffer(Ic.twin, 0, rB.twin, 0, Ic.units * this.arena.twinUnitBytes)), Bc.queue.submit([uc.finish()]), this.backings.push(rB), this.Iu.grow(cB)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const cB of this.backings) cB.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(cB, Bc) {
        const {
          device: nc,
          unitBytes: Vc,
          twinUnitBytes: Ic,
          usage: rB,
          label: uc
        } = this.arena;
        nc.pushErrorScope("out-of-memory");
        const sc = nc.createBuffer({
          label: Bc ? `${uc}-light` : uc,
          size: cB.units * (Bc ? Ic : Vc),
          usage: (Bc ? this.arena.twinUsage : rB) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, nc.popErrorScope().then((nc => {
          this.arena.awaitingVerdict--, this.settle(cB, Bc, !nc, !0)
        }), (nc => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${uc} buffer, taken as failed: ${String(nc)}`), this.settle(cB, Bc, !1, !1)
        })), sc
      }
      settle(cB, Bc, nc, Vc) {
        const Ic = this.backings.indexOf(cB);
        if (!(this.dropped || Ic < 0)) {
          if (!nc) {
            if (Vc && this.arena.ranOutOfMemory(cB.units, cB.units * (Bc ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Ic) return void this.drop();
            for (const cB of this.backings.splice(Ic)) cB.destroy();
            return this.Iu.truncate(this.backings[Ic - 1].units), this.growable = !1, void this.promote()
          }
          Bc ? cB.twinReady = !0 : (cB.bufferReady = !0, this.arena.allocatedBuffer(cB.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: cB
        } = this;
        let Bc = 0;
        for (; Bc + 1 < cB.length && cB[Bc].ready && cB[Bc + 1].ready;) Bc++;
        for (const nc of cB.splice(0, Bc)) nc.destroy();
        this.refresh()
      }
      refresh() {
        const cB = this.backings[0];
        this.buffer = cB.buffer, this.twin = cB.twinReady ? cB.twin : null, this.usable = !this.dropped && cB.bufferReady ? cB.units : 0
      }
    }
    class zM {
      constructor(cB, Bc, nc, Vc) {
        let {
          verticesPerUnit: Ic = 1,
          twinUsage: rB = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = cB, this.unitBytes = Bc, this.usage = nc, this.label = Vc, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, PB.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Bc % 4 !== 0) throw new Error(`${Vc}: ${Bc}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Ic, this.twinUsage = rB, this.twinValueBytes = Ic > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Ic
      }
      twinLight(cB, Bc) {
        if (4 === this.twinValueBytes) return this.widened.length < Bc && (this.widened = new Float32Array(Math.max(Bc, 2 * this.widened.length))), this.widened.set(cB.subarray(0, Bc)), {
          light: this.widened,
          count: Bc
        };
        const nc = Bc % this.verticesPerUnit;
        if (0 === nc) return {
          light: cB,
          count: Bc
        };
        const Vc = Bc - nc + this.verticesPerUnit;
        return this.padded.length < Vc && (this.padded = new Uint16Array(Math.max(Vc, 2 * this.padded.length))), this.padded.set(cB.subarray(0, Bc)), this.padded.fill(0, Bc, Vc), {
          light: this.padded,
          count: Vc
        }
      }
      allocate(cB) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), cB > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Ic of this.pages) {
          const Bc = Ic.Iu.allocate(cB);
          if (Bc >= 0) return {
            page: Ic,
            start: Bc,
            length: cB
          }
        }
        const Bc = this.pages[this.pages.length - 1];
        if (null !== Bc && void 0 !== Bc && Bc.canGrow) {
          const nc = Math.min(this.ceiling, Math.max(2 * Bc.Qc, Bc.Qc + cB));
          if (nc - Bc.Qc >= cB) return Bc.grow(nc), {
            page: Bc,
            start: Bc.Iu.allocate(cB),
            length: cB
          }
        }
        Bc && Bc !== this.pages[0] && 0 === Bc.Iu.used && Bc.drop();
        const nc = Math.floor(1048576 / this.unitBytes),
          Vc = new yM(this, Math.max(cB, Math.min(this.ceiling, nc)));
        return this.pages.push(Vc), {
          page: Vc,
          start: Vc.Iu.allocate(cB),
          length: cB
        }
      }
      free(cB) {
        this.assertNotDrawing();
        const {
          page: Bc
        } = cB;
        Bc.Iu.free(cB.start, cB.length), 0 === Bc.Iu.used && Bc !== this.pages[0] && Bc !== this.pages[this.pages.length - 1] && Bc.drop()
      }
      remove(cB) {
        const Bc = this.pages.indexOf(cB);
        Bc >= 0 && this.pages.splice(Bc, 1)
      }
      ranOutOfMemory(cB, Bc) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Bc}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, cB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, cB) / 2));
        const nc = performance.now();
        nc >= this.shortageUntil && (this.forgetFailedAt = nc + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = nc + 1e3)
      }
      allocatedBuffer(cB) {
        cB >= this.failed && (this.failed = 1 / 0);
        const Bc = Math.min(2 * cB, Math.floor((cB + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Bc))
      }
      stats() {
        let cB = 0,
          Bc = 0,
          nc = 0,
          Vc = 0;
        for (const Ic of this.pages) cB += Ic.Qc, Bc += Ic.Iu.used, nc += Ic.hasTwin ? Ic.Qc * this.twinUnitBytes : 0, Vc += Ic.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: cB * this.unitBytes,
          usedBytes: Bc * this.unitBytes,
          twinBytes: nc,
          allocatedBytes: Vc
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: cB,
          maxStorageBufferBindingSize: Bc
        } = this.device.limits;
        let nc = Math.floor(Math.min(67108864, cB) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (nc = Math.min(nc, Math.floor(Bc / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (nc = Math.min(nc, Math.floor(Bc / this.twinUnitBytes))), nc
      }
    }
    const ps = 16383;

    function hs(cB, Bc, nc, Vc, Ic) {
      let rB = 0;
      for (let uc = nc; uc < Vc; uc += ps) cB.drawIndexed(6 * Math.min(ps, Vc - uc), 1, 0, Bc + 4 * uc, Ic), rB++;
      return rB
    }
    class aM {
      constructor(cB, Bc) {
        this.recordsGroup = Bc, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const nc = YB.e.strideWithoutAtlas;
        this.vertexArena = new zM(cB, nc, GPUBufferUsage.VERTEX, `terrain-vertices-${nc}`), this.quadArena = new zM(cB, fs.e, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Vc = (0, LB.g)(new Uint16Array(98298), ps);
        this.quadPattern = cB.createBuffer({
          label: "terrain-quad-pattern",
          size: Vc.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), cB.queue.writeBuffer(this.quadPattern, 0, Vc)
      }
      set(cB, Bc) {
        const nc = Bc.packedVertices,
          Vc = nc ? this.quadArena.allocate(cB.faceCount) : this.vertexArena.allocate(cB.vertexCount);
        if (!Vc) return !1;
        cB.vertices = Vc;
        const Ic = nc ? new Uint8Array(nc.buffer, nc.byteOffset, nc.byteLength) : new Uint8Array(Bc.vertices);
        return Vc.page.write(Vc, Ic), !0
      }
      setLight(cB, Bc) {
        const {
          vertices: nc
        } = cB;
        nc && 0 !== Bc.length && nc.page.live && (Bc.length < cB.vertexCount ? nc.page.arena.warnOnce("shortLight", `a part's ${Bc.length} light values are fewer than its ${cB.vertexCount} vertices, so its light is left as it was`) : (nc.page.writeLight(nc, Bc), cB.lit = !0))
      }
      lightFullSky(cB, Bc) {
        this.fullSky.length < Bc && (this.fullSky = new Uint16Array(Math.max(Bc, 4096)).fill(tM.g));
        for (const nc of cB) {
          const cB = nc.vertices;
          cB.page.live && (cB.page.writeLight(cB, this.fullSky), nc.lit = !0)
        }
      }
      backed(cB) {
        const {
          vertices: Bc
        } = cB;
        return !!Bc && Bc.page.holds(Bc)
      }
      lost(cB) {
        const {
          vertices: Bc
        } = cB;
        return !!Bc && Bc.page.lost(Bc)
      }
      release(cB) {
        cB.vertices && cB.vertices.page.arena.free(cB.vertices), cB.vertices = null, cB.lit = !1
      }
      setDrawing(cB) {
        this.forgetBound()
      }
      draw(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bc.faceCount;
        const rB = Bc.vertices,
          uc = rB.page,
          sc = nc ? uc.twin : null;
        if (!uc.holds(rB) || nc && !sc) return 0;
        const {
          verticesPerUnit: Mc
        } = uc.arena;
        let Pc = rB.start * Mc;
        this.boundPattern || (cB.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const qB = Vc + Ic;
        if (Mc > 1) return uc.buffer === this.boundRecords && sc === this.boundRecordsLight || (cB.setBindGroup(1, this.recordsGroup(uc.buffer, sc)), this.boundRecords = uc.buffer, this.boundRecordsLight = sc), hs(cB, Pc, Vc, qB, Bc.slot);
        uc.buffer !== this.boundVertices && (cB.setVertexBuffer(0, uc.buffer), this.boundVertices = uc.buffer), sc && sc !== this.boundLight && (cB.setVertexBuffer(1, sc), this.boundLight = sc);
        const Oc = Bc.faceCount;
        return qB <= Oc ? hs(cB, Pc, Vc, qB, Bc.slot) : hs(cB, Pc, Vc, Oc, Bc.slot) + hs(cB, Pc, Math.max(Vc, Oc) - Oc, qB - Oc, Bc.slot)
      }
      get buffersAwaitingVerdict() {
        let cB = 0;
        for (const Bc of this.arenas()) cB += Bc.awaitingVerdict;
        return cB
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class ls {
      constructor(cB, Bc, nc, Vc) {
        this.device = cB, this.splitBefore = Bc, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = cB.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Ic = cB.createShaderModule({
          label: "scene-depth-copy",
          code: (rB = nc._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${rB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var rB;
        cB.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Ic,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Ic,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((cB => {
          this.pipeline = cB, this.building = !1
        }), (cB => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", cB)
        })), nc._executeWithTransmission = () => this.execute(nc, Vc)
      }
      get compiling() {
        return this.building
      }
      setWanted(cB) {
        this.wanted = cB
      }
      setPlanes(cB, Bc) {
        cB === this.near && Bc === this.far || (this.near = cB, this.far = Bc, this.unproject[0] = cB / (Bc - cB), this.unproject[1] = Bc * cB / (Bc - cB), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.copy) || void 0 === Bc ? void 0 : Bc.view) && void 0 !== cB ? cB : null
      }
      execute(cB, Bc) {
        var nc;
        null === (nc = this.retired) || void 0 === nc || nc.destroy(), this.retired = null;
        const Vc = cn(Bc),
          Ic = cB._transparentBindings,
          rB = this.wanted && this.pipeline ? this.splitIndex(Ic) : -1,
          uc = cB._colorAttachment,
          sc = uc.resolveTarget;
        rB >= 0 && (uc.resolveTarget = void 0, xs(cB, !0));
        let Mc = Vc.beginRenderPass(cB._renderPassDescriptor);
        Mc.setBindGroup(0, cB._sceneBG);
        let Pc = this.drawList(Mc, Bc, cB._opaqueBindings, 0, cB._opaqueBindings.length);
        if (Pc += this.drawList(Mc, Bc, cB._directBindings, 0, cB._directBindings.length), Pc += this.drawList(Mc, Bc, Ic, 0, rB >= 0 ? rB : Ic.length), Mc.end(), rB < 0) return Pc;
        xs(cB);
        const qB = cB._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Oc,
            stencilLoadOp: Tc
          } = qB,
          fc = uc.loadOp;
        uc.resolveTarget = sc;
        try {
          this.copyDepth(Vc, cB), uc.loadOp = "load", qB.depthLoadOp = "load", Tc && (qB.stencilLoadOp = "load"), Mc = Vc.beginRenderPass(cB._renderPassDescriptor), Mc.setBindGroup(0, cB._sceneBG), Pc += this.drawList(Mc, Bc, Ic, rB, Ic.length), Mc.end()
        } finally {
          uc.loadOp = fc, qB.depthLoadOp = Oc, qB.stencilLoadOp = Tc
        }
        return Pc
      }
      splitIndex(cB) {
        for (let Bc = 0; Bc < cB.length; Bc++)
          if (cB[Bc].renderable === this.splitBefore) return Bc;
        return -1
      }
      drawList(cB, Bc, nc, Vc, Ic) {
        let rB = null,
          uc = 0;
        for (let sc = Vc; sc < Ic; sc++) {
          const Vc = nc[sc],
            Ic = Vc.renderable.mesh;
          Ic && !1 === Ic.visible || (Vc.pipeline !== rB && (cB.setPipeline(Vc.pipeline), rB = Vc.pipeline), uc += Vc.draw(cB, Bc))
        }
        return uc
      }
      copyDepth(cB, Bc) {
        var nc, Vc;
        const Ic = (null !== (nc = Bc._config.depth) && void 0 !== nc ? nc : Bc._config.rt)._depthTexture,
          rB = (null === (Vc = this.copy) || void 0 === Vc ? void 0 : Vc.source) === Ic ? this.copy : this.remakeCopy(Ic),
          uc = cB.beginRenderPass(rB.pass);
        uc.setPipeline(this.pipeline), uc.setBindGroup(0, rB.bindGroup), uc.draw(3), uc.end()
      }
      remakeCopy(cB) {
        var Bc, nc;
        this.retired = null !== (Bc = null === (nc = this.copy) || void 0 === nc ? void 0 : nc.texture) && void 0 !== Bc ? Bc : null;
        const Vc = this.device.createTexture({
            label: "scene-depth",
            size: [cB.width, cB.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Ic = Vc.createView(),
          rB = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: cB.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          uc = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Ic,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: cB,
          texture: Vc,
          view: Ic,
          bindGroup: rB,
          pass: uc
        }, this.copy
      }
    }
    const Ys = "rgba8unorm";

    function Ls(cB) {
      return cB ? 15 : 1
    }
    class gM {
      constructor(cB, Bc, nc, Vc) {
        this.device = cB, this.terrain = Vc, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Bc._targetSignature._sampleCount > 1, this.cameraBuffer = cB.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = cB.createBindGroupLayout({
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
        const Ic = cB.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = cB.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Ic,
          entries: []
        });
        const rB = cB.createShaderModule({
          label: "sun-shadow-mask",
          code: (uc = this.edge, `${(0,gn.D)()}${wn({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${uc?Un:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Ls(uc)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${uc?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var uc;
        cB.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: cB.createPipelineLayout({
            bindGroupLayouts: [this.layout, Ic, Ic, wr(cB, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: rB,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: rB,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((cB => {
          this.pipeline = cB, this.building = !1
        }), (cB => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", cB)
        }));
        const sc = Bc._executeWithTransmission;
        Bc._executeWithTransmission = cB => this.execute(Bc, nc, (() => sc ? sc(cB) : function(cB, Bc) {
          const nc = cn(Bc).beginRenderPass(cB._renderPassDescriptor);
          nc.setBindGroup(0, cB._sceneBG);
          let Vc = Us(nc, Bc, cB._opaqueBindings);
          return Vc += Us(nc, Bc, cB._directBindings), Vc += Us(nc, Bc, cB._transparentBindings), nc.end(), Vc
        }(Bc, nc)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.targets) || void 0 === Bc ? void 0 : Bc.maskView) && void 0 !== cB ? cB : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(cB) {
        ! function(cB, Bc) {
          const nc = cB.worldMatrix,
            Vc = cB.projectionMatrix,
            Ic = 1 / Vc[0],
            rB = 1 / Vc[5],
            uc = cB.far * cB.near / (cB.far - cB.near);
          Bc[0] = cB.eye[0], Bc[1] = cB.eye[1], Bc[2] = cB.eye[2], Bc[3] = 2 ** -23 / uc, Bc[4] = nc[0] * Ic, Bc[5] = nc[1] * Ic, Bc[6] = nc[2] * Ic, Bc[7] = uc, Bc[8] = nc[4] * rB, Bc[9] = nc[5] * rB, Bc[10] = nc[6] * rB, Bc[11] = cB.near / (cB.far - cB.near), Bc[12] = nc[8], Bc[13] = nc[9], Bc[14] = nc[10], Bc[15] = 0
        }(cB, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(cB, Bc, nc) {
        if (this.retire(), !this.terrain.readsMask) return nc();
        const Vc = this.targetsFor(cB),
          Ic = cn(Bc),
          rB = cB._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Vc.prepass.depthStencilAttachment.view = rB.view);
        const uc = this.terrain.drawPrepass(Ic, Vc.prepass, cB._sceneBG);
        if (0 === uc) return nc();
        if (this.trace(Ic, Vc), this.edge) return uc + 1 + nc();
        const {
          depthLoadOp: sc,
          stencilLoadOp: Mc
        } = rB;
        rB.depthLoadOp = "load", Mc && (rB.stencilLoadOp = "load");
        try {
          return uc + 1 + nc()
        } finally {
          rB.depthLoadOp = sc, rB.stencilLoadOp = Mc
        }
      }
      trace(cB, Bc) {
        const nc = this.terrain.sunShadowGroup(),
          Vc = cB.beginRenderPass(Bc.trace);
        this.pipeline && nc && (Vc.setPipeline(this.pipeline), Vc.setBindGroup(0, Bc.bindGroup), Vc.setBindGroup(1, this.empty), Vc.setBindGroup(2, this.empty), Vc.setBindGroup(3, nc), Vc.draw(3)), Vc.end()
      }
      retire() {
        const cB = this.retired;
        var Bc;
        cB && (cB.mask.destroy(), cB.normals.destroy(), null === (Bc = cB.depth) || void 0 === Bc || Bc.destroy(), this.retired = null)
      }
      targetsFor(cB) {
        var Bc, nc;
        const Vc = (null !== (Bc = cB._config.depth) && void 0 !== Bc ? Bc : cB._config.rt)._depthTexture;
        return (null === (nc = this.targets) || void 0 === nc ? void 0 : nc.source) === Vc ? this.targets : this.remake(cB, Vc)
      }
      remake(cB, Bc) {
        var nc;
        this.retired = this.targets;
        const Vc = [Bc.width, Bc.height],
          Ic = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Vc,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          rB = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Vc,
            format: Ys,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          uc = null !== (nc = cB._targetSignature._depthStencilFormat) && void 0 !== nc ? nc : Bc.format,
          sc = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Vc,
            format: uc,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Mc = cB._renderPassDescriptor.depthStencilAttachment,
          Pc = uc.includes("stencil"),
          qB = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: rB.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: sc ? sc.createView() : Mc.view,
              depthClearValue: Mc.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...Pc ? {
                stencilClearValue: Mc.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Oc = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== sc && void 0 !== sc ? sc : Bc).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: rB.createView()
            }]
          }),
          Tc = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Ic.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Ls(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Bc,
          mask: Ic,
          maskView: Ic.createView(),
          normals: rB,
          depth: sc,
          bindGroup: Oc,
          prepass: qB,
          trace: Tc
        }, this.targets
      }
    }

    function Us(cB, Bc, nc) {
      let Vc = null,
        Ic = 0;
      for (const rB of nc) {
        const nc = rB.renderable.mesh;
        nc && !1 === nc.visible || (rB.pipeline !== Vc && (cB.setPipeline(rB.pipeline), Vc = rB.pipeline), Ic += rB.draw(cB, Bc))
      }
      return Ic
    }
    const bM = 6e4,
      Zs = {
        status: "ok"
      },
      Qs = {
        status: "skipped"
      };
    async function Cs(cB, Bc) {
      const {
        isCancelled: nc
      } = cB;
      if (nc()) return {
        status: "gs"
      };
      const {
        target: Vc
      } = Bc;
      if (!Vc) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Ic = [],
        rB = Promise.all(Array.from(new Set(cB.materials), (async nc => {
          Ic.push(await async function(cB, Bc, nc, Vc) {
            const Ic = {
              lighting: cB.lighting,
              dirLightCount: Math.min(cB.dirLightCount, 4),
              qI: cB.runtime
            };
            try {
              const rB = Bc.material(Vc);
              return rB && qI(Bc.programKey(rB, !1, Ic)) ? (await rB.ready, cB.isCancelled() ? Zs : rB.bindGroupLayout ? await async function(cB, Bc, nc, Vc) {
                const {
                  device: Ic
                } = cB;
                let rB, uc;
                Ic.pushErrorScope("validation");
                try {
                  rB = cB.pipelineBuild(Bc, nc, Vc)
                } finally {
                  uc = Ic.popErrorScope().catch((() => null))
                }
                const [sc, Mc] = await Promise.all([uc, rB.built.then((() => null), (cB => null !== cB && void 0 !== cB ? cB : new Error("pipeline failed")))]);
                if (!sc && !Mc) return Zs;
                const Pc = await vM(rB.module),
                  qB = Pc.length > 0 ? Pc.map((cB => `${rB.name} ${cB.lineNum}:${cB.linePos}: ${cB.message}`)).join("\n") : `${rB.name}: ${Ds(null!==Mc&&void 0!==Mc?Mc:sc)}`;
                return {
                  status: "failed",
                  material: Bc.model.name,
                  message: qB
                }
              }(Bc, rB, Bc.programKey(rB, "none" !== rB.texture, Ic), nc): (console.warn(`Shader pack: skipped the compile check for "${Vc.name}", whose textures failed to load`), Qs)) : Zs
            } catch (rB) {
              return {
                status: "failed",
                material: Vc.name,
                message: Ds(rB)
              }
            }
          }(cB, Bc, Vc, nc))
        }))),
        uc = function(cB, Bc) {
          let nc, Vc, Ic = !1;
          const rB = new Promise((rB => {
            var uc;
            nc = setTimeout((() => {
              rB("timeout")
            }), null !== (uc = Bc.timeoutMs) && void 0 !== uc ? uc : bM), Vc = setInterval((() => {
              Bc.isCancelled() && rB("gs")
            }), 50), cB.lost.then((() => {
              Ic = !0, rB("lost")
            }))
          }));
          return {
            signal: rB,
            lost: () => Ic,
            dispose: () => {
              clearTimeout(nc), clearInterval(Vc)
            }
          }
        }(Bc.device, cB);
      let sc;
      try {
        sc = await Promise.race([rB.then((() => "done")), uc.signal])
      } finally {
        uc.dispose()
      }
      if ("gs" === sc || nc()) return {
        status: "gs"
      };
      const Mc = Ic.find((cB => "failed" === cB.status));
      return Mc && "lost" !== sc && !uc.lost() && await new Promise((cB => {
        setTimeout(cB, 0)
      })), "lost" === sc || uc.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Mc ? {
        status: "failed",
        failure: {
          material: Mc.material,
          message: Mc.message
        }
      } : "timeout" === sc ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Pc=cB.timeoutMs)&&void 0!==Pc?Pc:bM)/1e3} s`), {
        status: "skipped"
      }) : Ic.some((cB => "skipped" === cB.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var Pc
    }
    async function vM(cB) {
      if (!cB) return [];
      try {
        return (await cB.getCompilationInfo()).messages.filter((cB => "error" === cB.type))
      } catch {
        return []
      }
    }

    function Ds(cB) {
      var Bc;
      return null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.message) && void 0 !== Bc ? Bc : String(cB)
    }

    function Ns(cB, Bc, nc, Vc) {
      qI(cB) ? vM(nc).then((cB => {
        const [nc] = cB;
        KI("terrain", Bc, Vc, nc ? `${nc.lineNum}:${nc.linePos} error: ${nc.message}` : null)
      })) : KI("terrain", Bc, Vc)
    }
    var Es = nc(36043),
      os = nc(36060),
      Ws = nc(36069),
      ws = nc(35985);

    function kM(cB, Bc, nc, Vc, Ic) {
      const rB = Math.hypot(nc[0], nc[1], nc[2]);
      if (!(rB > 0)) return;
      const uc = [nc[0] / rB, nc[1] / rB, nc[2] / rB],
        sc = [Math.floor(Bc[0]), Math.floor(Bc[1]), Math.floor(Bc[2])],
        Mc = [0, 0, 0],
        Pc = [1 / 0, 1 / 0, 1 / 0],
        qB = [1 / 0, 1 / 0, 1 / 0];
      for (let fc = 0; fc < 3; fc++) uc[fc] > 0 ? (Mc[fc] = 1, Pc[fc] = (sc[fc] + 1 - Bc[fc]) / uc[fc], qB[fc] = 1 / uc[fc]) : uc[fc] < 0 && (Mc[fc] = -1, Pc[fc] = (sc[fc] - Bc[fc]) / uc[fc], qB[fc] = -1 / uc[fc]);
      const {
        kI: Oc
      } = cB;
      let Tc = cB.yIc(sc[0], sc[1], sc[2]);
      for (;;) {
        const Bc = Pc[0] < Pc[1] ? Pc[0] < Pc[2] ? 0 : 2 : Pc[1] < Pc[2] ? 1 : 2;
        if (Pc[Bc] > Vc) return;
        const nc = Mc[Bc] > 0 ? sc[Bc] + 1 : sc[Bc];
        sc[Bc] += Mc[Bc], Pc[Bc] += qB[Bc];
        const rB = cB.yIc(sc[0], sc[1], sc[2]),
          uc = rB !== Tc && !(cB.opaque[Tc] && cB.opaque[rB]);
        if (uc) {
          const Vc = [sc[0], sc[1], sc[2]];
          Vc[Bc] = nc;
          const rB = Math.floor(Vc[0] / Oc),
            uc = Math.floor(Vc[1] / Oc),
            Mc = Math.floor(Vc[2] / Oc);
          !cB.isDrawn(rB, uc, Mc) && cB.hasParts(rB, uc, Mc) && Ic.add(`${rB},${uc},${Mc}`)
        }
        if (uc && cB.occluders[rB]) return;
        Tc = rB
      }
    }

    function Xs(cB, Bc) {
      return cB.group - Bc.group || cB.nearest - Bc.nearest
    }
    class Hs {
      constructor(cB, Bc) {
        this.device = cB, this.ZZ = Bc, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var cB;
        const Bc = null !== (cB = this.free.pop()) && void 0 !== cB ? cB : this.next++;
        if (8 * Bc >= this.data.length) {
          const cB = new Float32Array(2 * this.data.length);
          cB.set(this.data), this.data = cB, this.words = new Uint32Array(cB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.ZZ()
        }
        return Bc
      }
      release(cB) {
        this.free.push(cB)
      }
      set(cB, Bc, nc, Vc, Ic) {
        const rB = 8 * cB + pV;
        this.data[rB] = Bc, this.data[rB + 1] = nc, this.data[rB + 2] = Vc, this.setVisibility(cB, Ic)
      }
      setVisibility(cB, Bc) {
        this.data[8 * cB + hV] = Bc, this.markDirty(cB, cB)
      }
      setFaces(cB, Bc, nc) {
        const Vc = 8 * cB;
        this.words[Vc + aI] = Bc, this.words[Vc + lV] = nc, this.markDirty(cB, cB)
      }
      markDirty(cB, Bc) {
        this.dirtyMin = Math.min(this.dirtyMin, cB), this.dirtyMax = Math.max(this.dirtyMax, Bc)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Fs = zI,
      Jsc = !0;
    const jM = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Fs.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Rs = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class iM {
      constructor(cB) {
        this.device = cB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(TV), this.dirLightUniforms = this.frameUniforms.subarray(OV.dirLights, OV.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, PB.e)(), this.faceGroups = !0, this.visibilityGraph = Jsc, this.visCull = Jsc, this.visCheck = !1, this.visCullMinDistance = Ws.c, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new As, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.qI = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new aM(cB, ((cB, Bc) => this.recordsGroup(cB, Bc))), this.slots = new Hs(cB, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = BB(cB), this.frameLayout = cB.createBindGroupLayout({
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
        }), this.frameBuffer = cB.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = cB.createSampler({
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
          bind: (cB, Bc) => this.createBinding(this.opaqueRenderable, Bc, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (cB, Bc) => this.createBinding(this.transparentRenderable, Bc, !0)
        }
      }
      installSceneDepth(cB, Bc) {
        this.sceneDepth = new ls(this.device, this.transparentRenderable, cB, Bc)
      }
      createFrameBindGroup() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== cB && void 0 !== cB ? cB : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Bc && void 0 !== Bc ? Bc : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(cB, Bc) {
        const nc = null !== Bc && void 0 !== Bc ? Bc : cB;
        let Vc = this.recordsGroups.get(nc);
        return Vc || (Vc = this.createFrameBindGroup(cB, Bc), this.recordsGroups.set(nc, Vc)), Vc
      }
      setChunkMesh(cB, Bc, nc) {
        var Vc;
        let Ic = this.chunks.get(cB);
        Ic ? this.geometry.release(Ic) : (Ic = {
          mesh: cB,
          slot: this.slots.allocate(),
          origin: [nc[0], nc[1], nc[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: cB.visibility,
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
        }, this.chunks.set(cB, Ic), this.writeSlot(Ic)), Ic.material = cB.material ? this.materialFor(cB.material) : null, Ic.packed = !!Bc.packedVertices, Ic.vertexCount = (0, fs.g)(Bc), Ic.faceCount = Ic.vertexCount / 4;
        const rB = null !== (Vc = Bc.faceGroups) && void 0 !== Vc ? Vc : null;
        if (Ic.faceGroups = rB, rB) {
          const cB = Es.l;
          Ic.planePX = rB[cB], Ic.planeNX = rB[cB + 1], Ic.planePY = rB[cB + 2], Ic.planeNY = rB[cB + 3], Ic.planePZ = rB[cB + 4], Ic.planeNZ = rB[cB + 5]
        }
        this.drawWhole(Ic), 0 !== Ic.faceCount && (this.geometry.set(Ic, Bc) ? (Ic.packed && this.slots.setFaces(Ic.slot, Ic.vertices.start + Ic.faceCount, Ic.faceCount), Bc.lV && this.setChunkMeshLight(cB, Bc.lV)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Ic.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(cB, Bc) {
        const nc = this.chunks.get(cB);
        nc && this.geometry.setLight(nc, Bc)
      }
      drawStats() {
        let cB = this.transparent.length;
        for (const Bc of this.opaqueBatches) cB += Bc.meshes.length;
        return {
          drawn: cB,
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
      removeChunkMesh(cB) {
        const Bc = this.chunks.get(cB);
        Bc && (this.geometry.release(Bc), this.slots.release(Bc.slot), this.chunks.delete(cB))
      }
      remeshLost(cB, Bc) {
        this.geometry.release(Bc), Bc.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Bc.lostRemeshes++);
        const nc = cB.rn,
          [Vc, Ic, rB] = nc.Xqc(Bc.origin[0], Bc.origin[1], Bc.origin[2]),
          uc = nc.DI.NI(Vc, Ic, rB);
        uc && (uc.CI = !0, uc.XI = !0, nc.vr(uc, !1))
      }
      chooseFaceRanges(cB, Bc, nc) {
        const Vc = this.faceRanges;
        cB.faceMask = nc, cB.rangeCount = (0, os.j)(Bc, nc, Vc), cB.first0 = Vc[0], cB.count0 = Vc[1], cB.first1 = Vc[2], cB.count1 = Vc[3]
      }
      drawWhole(cB) {
        cB.faceMask = -1, cB.faceEpoch = -1, cB.rangeCount = 1, cB.first0 = 0, cB.count0 = cB.faceCount
      }
      writeSlot(cB) {
        const [Bc, nc, Vc] = this.originOffset;
        this.slots.set(cB.slot, cB.origin[0] - Bc, cB.origin[1] - nc, cB.origin[2] - Vc, cB.visibility)
      }
      materialFor(cB) {
        const Bc = this.materials.get(cB);
        if (Bc) return Bc;
        const nc = es(cB);
        if (!nc) return this.warnOnce(`material:${cB.name}`, `Lite terrain cannot draw material "${cB.name}"; its chunks are skipped.`), null;
        const {
          model: Vc,
          atlas: Ic,
          texture: rB,
          animated: uc,
          uniformData: sc
        } = nc, Mc = {
          id: this.materials.size,
          model: Vc,
          texture: rB,
          animated: uc,
          uniformData: sc,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${cB.name}`,
            size: sc.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: nc.liquid,
          customRenderMat: nc.customRenderMat,
          atlasCount: 0,
          JIc: 0,
          atlasLayers: 0,
          nextFrameAtlases: void 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(cB, Mc), this.device.queue.writeBuffer(Mc.uniformBuffer, 0, sc), Mc.ready = this.createMaterialBindGroup(Mc, Ic).catch((Bc => {
          console.error(`Lite terrain failed to load the textures of material "${cB.name}"`, Bc)
        })), Mc
      }
      materialLayout(cB) {
        const Bc = function(cB) {
            const Bc = ["uniforms"];
            if ("atlas" === cB.texture) {
              cB.animated && Bc.push("animData"), Bc.push("sampler");
              for (let nc = 0; nc < cB.atlasCount; nc++) Bc.push("textureArray")
            } else "single" === cB.texture && Bc.push("sampler", "texture");
            return Bc
          }(cB),
          nc = Bc.join(",");
        let Vc = this.materialLayouts.get(nc);
        if (!Vc) {
          const cB = GPUShaderStage.FRAGMENT;
          Vc = this.device.createBindGroupLayout({
            label: `terrain-material-${nc}`,
            entries: Bc.map(((Bc, nc) => {
              switch (Bc) {
                case "uniforms":
                  return {
                    binding: nc, visibility: GPUShaderStage.VERTEX | cB, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: nc, visibility: GPUShaderStage.VERTEX | cB, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: nc, visibility: cB, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: nc, visibility: cB, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: nc, visibility: cB, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(nc, Vc)
        }
        return Vc
      }
      async createMaterialBindGroup(cB, Bc) {
        const nc = [{
          buffer: cB.uniformBuffer
        }];
        if (Bc) {
          const {
            urls: Vc,
            pixels: Ic,
            layerWidth: rB
          } = Bc.sources, uc = await Promise.all(Vc.map(((cB, Bc) => {
            var nc;
            return XI(this.device, cB, null !== (nc = null === Ic || void 0 === Ic ? void 0 : Ic[Bc]) && void 0 !== nc ? nc : null, rB)
          })));
          cB.atlasCount = uc.length, cB.JIc = uc[0].layerWidth, cB.atlasLayers = uc[0].layers, Bc.animDataPerTex && (cB.nextFrameAtlases = (0, lc.l)(Bc.animDataPerTex, cB.atlasLayers, cB.atlasCount), nc.push({
            buffer: vr(this.device, Float32Array.from(Bc.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          })), nc.push(this.sampler);
          for (const cB of uc) nc.push(cB.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === cB.texture) {
          const {
            url: Bc
          } = cB.model.diffuseTexture.source, {
            pixels: Vc,
            width: Ic,
            height: rB
          } = await wI(Bc);
          nc.push(this.sampler), nc.push(NI(this.device, Vc, Ic, rB, 1, `terrain-${Bc}`).createView({
            dimension: "2d"
          }))
        }
        const Vc = this.materialLayout(this.programKey(cB, !1));
        cB.bindGroupLayout = Vc, cB.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${cB.model.name}`,
          layout: Vc,
          entries: nc.map(((cB, Bc) => ({
            binding: Bc,
            resource: cB
          })))
        })
      }
      programKey(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Vc = nc ? nc.lighting : this.lighting,
          Ic = nc ? nc.qI : this.qI,
          rB = {
            texture: cB.texture,
            atlasCount: cB.atlasCount,
            JIc: cB.JIc,
            atlasLayers: cB.atlasLayers,
            nextFrameAtlases: cB.nextFrameAtlases,
            animated: cB.animated,
            alphaTest: cB.model.transparencyMode === Lc.q.alphaTest,
            lighting: Vc,
            dirLightCount: nc ? nc.dirLightCount : this.dirLightCount,
            packed: Bc
          };
        if (!Ic) return rB;
        const uc = this.shaderPackFields(cB, Ic),
          sc = "atlas" === cB.texture && cB.model.transparencyMode === Lc.q.opaque && uV(uc.packVariant);
        return {
          ...rB,
          ...uc,
          alphaTest: rB.alphaTest || sc
        }
      }
      shaderPackFields(cB, Bc) {
        return cB.customRenderMat ? IV : function(cB, Bc) {
          if (!cB) return IV;
          const nc = cB.defineFor(Bc ? "liquid" : "terrain");
          return 0 === nc ? IV : {
            packVariant: nc,
            liquid: Bc
          }
        }(Bc, cB.liquid)
      }
      isBlended(cB) {
        return cB.model.transparencyMode === Lc.q.alphaBlend
      }
      shaderModule(cB, Bc) {
        let nc = this.modules.get(cB);
        return nc || (nc = this.device.createShaderModule({
          label: Bc,
          code: cB
        }), this.modules.set(cB, nc)), nc
      }
      pipelineFor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!cB.bindGroupLayout) return null;
        const Ic = this.programKey(cB, Bc);
        if (!Vc) return this.pipelineOf(cB, Ic, nc);
        const rB = {
            ...Ic,
            resting: Vc
          },
          uc = this.pipelineId(cB, rB, nc),
          sc = this.pipelines.get(uc);
        if (sc) return sc;
        const Mc = this.pipelineOf(cB, Ic, nc);
        return Mc && void 0 === sc && this.startPipeline(uc, cB, rB, nc), Mc
      }
      pipelineOf(cB, Bc, nc) {
        const Vc = this.pipelineId(cB, Bc, nc),
          Ic = this.pipelines.get(Vc);
        return void 0 !== Ic ? Ic : (this.startPipeline(Vc, cB, Bc, nc), null)
      }
      pipelineId(cB, Bc, nc) {
        return Ks(Bc, this.isBlended(cB), cB.model.backFaceCulling, nc)
      }
      pipelineBuild(cB, Bc, nc) {
        var Vc;
        const Ic = this.pipelineId(cB, Bc, nc);
        return null !== (Vc = this.builds.get(Ic)) && void 0 !== Vc ? Vc : this.startPipeline(Ic, cB, Bc, nc)
      }
      startPipeline(cB, Bc, nc, Vc) {
        var Ic;
        this.pipelines.set(cB, null);
        const rB = QV(nc),
          uc = this.isBlended(Bc),
          sc = this.shadowMask && Vc._depthStencilFormat ? function(cB, Bc, nc, Vc) {
            if (void 0 === cB.packVariant || cB.liquid || Bc) return "none";
            const Ic = (0, UB.f)(cB.packVariant);
            return null === Ic || void 0 === Ic || !Ic.sunShadow || !onc(Ic, nc) || Ic.discards || cB.alphaTest && uV(cB.packVariant) ? "none" : Vc ? "edge" : "plain"
          }(nc, uc, !!this.sunShadow, Vc._sampleCount > 1) : "none";
        let Mc;
        try {
          Mc = CV(nc, !!this.sunShadow, sc)
        } catch (tB) {
          if (!qI(nc)) throw tB;
          return this.failedPackBuild(cB, nc, rB, tB)
        }
        const Pc = this.shaderModule(Mc, rB),
          qB = [];
        nc.packed || (qB.push(function(cB, Bc) {
          const nc = [{
            shaderLocation: Fs.position,
            offset: YB.e.gI,
            format: "float32x3"
          }, {
            shaderLocation: Fs.normal,
            offset: YB.e.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Fs.color,
            offset: YB.e.colorOffset,
            format: "unorm8x4"
          }];
          return cB && nc.push({
            shaderLocation: Fs.uv,
            offset: YB.e.uvOffset,
            format: "float32x2"
          }), Bc && nc.push({
            shaderLocation: Fs.blockFlagWords,
            offset: YB.e.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: YB.e.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: nc
          }
        }("none" !== nc.texture, qI(nc))), nc.lighting && qB.push(jM));
        const Oc = Bc.model.backFaceCulling,
          Tc = {
            label: rB,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Bc.bindGroupLayout, ...Hr(this.device, nc, !!this.sunShadow, "none" !== sc)]
            }),
            vertex: {
              module: Pc,
              entryPoint: "mainVertex",
              buffers: qB
            },
            fragment: dc({
              module: Pc,
              entryPoint: "mainFragment"
            }, Vc, uc ? Rs : null),
            depthStencil: Vc._depthStencilFormat ? {
              format: Vc._depthStencilFormat,
              depthCompare: null !== (Ic = Vc._depthCompare) && void 0 !== Ic ? Ic : nB,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Vc._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Oc ? "back" : "none"
            }
          },
          fc = nc.resting ? 0 : 1;
        this.compiling += fc;
        const mB = "none" === sc ? this.device.createRenderPipelineAsync(Tc) : this.startMaskPipelines(Pc, Tc, "edge" === sc);
        mB.then((Bc => {
          this.compiling -= fc, this.pipelines.set(cB, Bc)
        }), (cB => {
          this.compiling -= fc, console.error(`Lite terrain pipeline ${rB} failed`, cB), Ns(nc, rB, Pc, cB)
        }));
        const ec = {
          name: rB,
          module: Pc,
          built: mB
        };
        return this.builds.set(cB, ec), ec
      }
      startMaskPipelines(cB, Bc, nc) {
        const Vc = Bc.depthStencil,
          Ic = this.device.createRenderPipelineAsync(nc ? Bc : {
            ...Bc,
            depthStencil: {
              ...Vc,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          rB = this.device.createRenderPipelineAsync({
            ...Bc,
            label: `${Bc.label}-prepass`,
            fragment: {
              module: cB,
              entryPoint: "prepassFragment",
              targets: [{
                format: Ys
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Ic, rB]).then((cB => {
          let [Bc, nc] = cB;
          return this.prepassOf.set(Bc, nc), this.maskPipelines++, Bc
        }))
      }
      failedPackBuild(cB, Bc, nc, Vc) {
        console.error(`Lite terrain pipeline ${nc} failed`, Vc), Ns(Bc, nc, null, Vc);
        const Ic = Promise.reject(Vc);
        Ic.catch((() => {}));
        const rB = {
          name: nc,
          module: null,
          built: Ic
        };
        return this.builds.set(cB, rB), rB
      }
      checkShaderPack(cB) {
        return Cs(cB, {
          device: this.device,
          target: this.target,
          material: cB => this.materialFor(cB),
          programKey: (cB, Bc, nc) => this.programKey(cB, Bc, nc),
          pipelineBuild: (cB, Bc, nc) => this.pipelineBuild(cB, Bc, nc)
        })
      }
      createBinding(cB, Bc, nc) {
        return this.target = Bc, {
          renderable: cB,
          pipeline: uB(this.device, Bc),
          draw: cB => {
            this.geometry.setDrawing(!0);
            try {
              return nc ? this.drawTransparent(cB, Bc) : this.drawOpaque(cB, Bc)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(cB, Bc) {
        var nc, Vc, Ic, rB;
        const {
          TB: uc
        } = cB;
        this.lighting = cB.GI;
        const sc = (0, Ts.o)(Bc);
        this.dirLightCount = Math.min(sc, 4), this.qI = null !== (nc = uc.qI) && void 0 !== nc ? nc : null, sc > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(cB, Bc), this.animateMaterials(Bc.animTick);
        const Mc = uc.ZB,
          Pc = Mc[0] !== this.originOffset[0] || Mc[1] !== this.originOffset[1] || Mc[2] !== this.originOffset[2];
        Pc && (this.originOffset[0] = Mc[0], this.originOffset[1] = Mc[1], this.originOffset[2] = Mc[2]);
        const qB = Bc.eye;
        this.eye[0] = qB[0], this.eye[1] = qB[1], this.eye[2] = qB[2], this.writeShaderPackInputs();
        const Oc = Bc.projectionMatrix,
          Tc = 0 === Oc[15];
        let fc = 0;
        (Pc || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: mB
        } = this;
        sB(this.transparentRenderable._worldCenter, Bc, IB), this.resetBatches(Tc), this.transparent.length = 0, this.unlit.length = 0;
        const ec = uc.rn.Guc,
          tB = ec / 2 * Math.sqrt(3);
        let Sc = 0;
        const yB = !!this.qI && rI(this.qI.defineFor("liquid"));
        let zB = !1;
        const pc = null !== (Vc = null === (Ic = uc.JC) || void 0 === Ic ? void 0 : Ic.visibility) && void 0 !== Vc ? Vc : null,
          hc = this.visCull && Tc && 0 === this.compiling && null !== pc && uc.rn.cOc[0] >= this.visCullMinDistance ? this.target : null,
          aB = this.visPassable,
          lc = this.visCandidates,
          Yc = this.visCandidateBatches;
        aB.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Lc = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let gB = 0;
        const Uc = (cB, nc) => {
          if (!nc) return this.transparent.push(cB), void(gB += 2 * cB.faceCount);
          if (null !== cB.faceGroups && nc.faceCull) {
            if (0 === fc && (fc = (0, os.b)(Oc, Bc.renderWidth, Bc.renderHeight), fc !== this.faceFocalPx && (this.faceFocalPx = fc, mB = ++this.faceEpoch)), cB.faceEpoch !== mB) {
              cB.faceEpoch = mB;
              const Bc = Math.sqrt(cB.distance) + tB,
                nc = (0, os.g)(cB.planePX, cB.planeNX, cB.planePY, cB.planeNY, cB.planePZ, cB.planeNZ, this.eye[0] - (cB.origin[0] - this.originOffset[0]), this.eye[1] - (cB.origin[1] - this.originOffset[1]), this.eye[2] - (cB.origin[2] - this.originOffset[2]), (0, os.f)(Bc, fc));
              nc !== cB.faceMask && this.chooseFaceRanges(cB, cB.faceGroups, nc)
            }
            if (0 === cB.rangeCount) return
          } else - 1 !== cB.faceMask && this.drawWhole(cB);
          nc.meshes.push(cB), gB += 2 * ((cB.rangeCount > 0 ? cB.count0 : 0) + (cB.rangeCount > 1 ? cB.count1 : 0))
        };
        for (const Zc of this.chunks.values()) {
          Pc && this.writeSlot(Zc);
          const cB = Zc.mesh.visibility;
          cB !== Zc.visibility && (Zc.visibility = cB, this.slots.setVisibility(Zc.slot, cB));
          const {
            material: nc
          } = Zc;
          this.geometry.lost(Zc) && performance.now() >= Zc.lostRetryAt && this.remeshLost(uc, Zc);
          const Vc = !(null === nc || void 0 === nc || !nc.bindGroup) && this.geometry.backed(Zc),
            Ic = Vc && this.lighting && !Zc.vertices.page.twin;
          if (hc && (Number.isNaN(Zc.key) && (Zc.ci = Math.floor(Zc.origin[0] / ec), Zc.cj = Math.floor(Zc.origin[1] / ec), Zc.ck = Math.floor(Zc.origin[2] / ec), Zc.key = (0, ws.j)(Zc.ci, Zc.cj, Zc.ck)), (!Vc || cB < 1 || Ic || !this.batchDraws(nc, Zc.packed, hc)) && this.visSeeThrough(Zc, hc) && aB.add(Zc.key)), !Vc) continue;
          Ic || (Zc.lostRemeshes = 0);
          const rB = Zc.origin[0] - this.originOffset[0],
            sc = Zc.origin[1] - this.originOffset[1],
            Mc = Zc.origin[2] - this.originOffset[2];
          if (!(0, cM.c)(Bc.frustum, rB, sc, Mc, ec)) continue;
          const qB = rB + ec / 2 - this.eye[0],
            Oc = sc + ec / 2 - this.eye[1],
            fc = Mc + ec / 2 - this.eye[2];
          if (Zc.distance = qB * qB + Oc * Oc + fc * fc, this.lighting && !Zc.lit && (Sc = Math.max(Sc, Zc.vertexCount), this.unlit.push(Zc)), Ic) continue;
          const mB = this.isBlended(nc) ? null : this.batchFor(nc, Zc.packed, Zc.vertices.page, 1 === cB, Tc);
          hc ? (lc[Lc] = Zc, Yc[Lc++] = mB) : Uc(Zc, mB)
        }
        const bB = hc ? this.sweepVisibility(cB, Bc, pc) : null;
        null === (rB = (0, Qr.t)(uc)) || void 0 === rB || rB.update(Bc.frustum, this.originOffset, ec, bB);
        for (let Zc = 0; Zc < Lc; Zc++) {
          const cB = lc[Zc];
          !bB || bB.isDrawn(cB.ci, cB.cj, cB.ck) ? Uc(cB, Yc[Zc]) : (this.visCulledParts++, this.visCulledTriangles += 2 * cB.faceCount)
        }
        for (const Zc of this.transparent) zB ||= yB && Zc.material.liquid && !Zc.material.customRenderMat;
        this.submittedTriangles = gB, bB && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(cB, Bc, bB)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(zB) : zB && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Sc > 0 && this.geometry.lightFullSky(this.unlit, Sc);
        for (const Zc of this.opaqueBatches) this.chunkSorter.sort(Zc.meshes, 1) || Zc.meshes.sort(xM);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(ds)
      }
      sweepVisibility(cB, Bc, nc) {
        const {
          rn: Vc
        } = cB.TB, Ic = Vc.Guc, rB = this.visPassable, uc = this.eye[0] + this.originOffset[0], sc = this.eye[1] + this.originOffset[1], Mc = this.eye[2] + this.originOffset[2];
        if (!nc.eyeClear(uc, sc, Mc, Bc.near, Bc.projectionMatrix, Vc)) return null;
        const [Pc, qB] = Vc.cOc, Oc = nc.update(uc, sc, Mc, Ic, Pc, qB, rB);
        return this.visSweeps = nc.sweeps, Oc ? nc : null
      }
      visSeeThrough(cB, Bc) {
        const {
          material: nc
        } = cB;
        return (!nc || !this.isBlended(nc)) && (cB.mesh.visibility < 1 || !(null !== nc && void 0 !== nc && nc.bindGroup) || cB.faceCount > 0 && (!this.geometry.backed(cB) || this.lighting && !cB.vertices.page.twin) || !this.batchDraws(nc, cB.packed, Bc))
      }
      batchDraws(cB, Bc, nc) {
        var Vc;
        const Ic = Bc ? 2 : 0;
        if (cB === this.visDrawsMaterial && function(cB, Bc) {
            return 0 !== (cB & 1 << Bc)
          }(this.visDrawsBits, Ic)) return 0 !== (this.visDrawsBits & 2 << Ic);
        let rB = null !== (Vc = this.visBatchDraws.get(cB)) && void 0 !== Vc ? Vc : 0;
        if (!(rB & 1 << Ic)) {
          rB |= 1 << Ic | (!!cB.bindGroupLayout && this.canDraw(cB, Bc) && !!this.pipelines.get(this.pipelineId(cB, this.programKey(cB, Bc), nc)) ? 2 << Ic : 0), this.visBatchDraws.set(cB, rB)
        }
        return this.visDrawsMaterial = cB, this.visDrawsBits = rB, 0 !== (rB & 2 << Ic)
      }
      runVisCheck(cB, Bc, nc) {
        const {
          TB: Vc
        } = cB, {
          rn: Ic
        } = Vc, rB = Ic.Guc, uc = new Set;
        for (const fc of this.chunks.values()) uc.add(fc.key);
        const sc = hI.Matrix.FromArray(Bc.viewProjectionMatrix).invert(),
          [Mc, Pc, qB] = this.originOffset,
          Oc = new hI.KV,
          Tc = function(cB, Bc, nc, Vc) {
            const Ic = new Set;
            for (let rB = 0; rB < 27; rB++)
              for (let uc = 0; uc < 48; uc++) {
                const sc = nc((uc + .5) / 48 * 2 - 1, (rB + .5) / 27 * 2 - 1);
                kM(cB, Bc, [sc[0] - Bc[0], sc[1] - Bc[1], sc[2] - Bc[2]], Vc, Ic)
              }
            return Ic
          }({
            yIc: (cB, Bc, nc) => Ic.yIc(cB, Bc, nc),
            occluders: nc.occluders,
            opaque: nc.opaque,
            kI: rB,
            isDrawn: (cB, Bc, Vc) => nc.isDrawn(cB, Bc, Vc),
            hasParts: (cB, Bc, nc) => uc.has((0, ws.j)(cB, Bc, nc))
          }, [this.eye[0] + Mc, this.eye[1] + Pc, this.eye[2] + qB], ((cB, Bc) => (hI.KV.TransformCoordinatesFromFloatsToRef(cB, Bc, .5, sc, Oc), [Oc.x + Mc, Oc.y + Pc, Oc.z + qB])), (Ic.cOc[0] + 1) * rB);
        this.visViolations = Tc.size;
        for (const fc of Tc) this.warnOnce(`vis:${fc}`, `Lite terrain cave culling skipped chunk ${fc}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var cB;
        null !== (cB = this.qI) && void 0 !== cB && cB.isRunning() && (this.shaderPackInputs ??= new Fr(this.device, this.qI.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.qI, this.eye, this.lighting))
      }
      bindShaderPackInputs(cB, Bc, nc) {
        var Vc, Ic, rB, uc;
        let sc = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Mc
        } = this.shaderPackFields(Bc, nc);
        if (void 0 === Mc) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Fr(this.device, nc.textureLayers(), this.sunShadow), this.shaderPackInputs.write(nc, this.eye, this.lighting));
        const Pc = rI(Mc) ? null !== (Vc = null === (Ic = this.sceneDepth) || void 0 === Ic ? void 0 : Ic.view) && void 0 !== Vc ? Vc : this.standIn() : null,
          qB = sc ? null !== (rB = null === (uc = this.shadowMask) || void 0 === uc ? void 0 : uc.view) && void 0 !== rB ? rB : this.standIn() : null;
        this.shaderPackInputs.bind(cB, Pc, Xr(Mc, !!this.sunShadow), qB)
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
        var cB, Bc;
        return null !== (cB = null === (Bc = this.shaderPackInputs) || void 0 === Bc ? void 0 : Bc.bindGroupFor(null, !0)) && void 0 !== cB ? cB : null
      }
      resetBatches(cB) {
        const Bc = this.opaqueBatches;
        let nc = 0;
        for (const Vc of Bc) Vc.meshes.length > 0 && (Vc.meshes.length = 0, Vc.faceCull = this.batchFaceCull(Vc.material, cB), Bc[nc++] = Vc);
        Bc.length = nc
      }
      orderBatches() {
        const cB = this.opaqueBatches;
        for (let Bc = 0; Bc < cB.length; Bc++) {
          const nc = cB[Bc];
          nc.group = Bc;
          for (let Vc = 0; Vc < Bc; Vc++) {
            const Bc = cB[Vc];
            if (Bc.material === nc.material && Bc.packed === nc.packed) {
              nc.group = Bc.group;
              break
            }
          }
          nc.nearest = nc.meshes.length > 0 ? nc.meshes[0].distance : 1 / 0
        }
        cB.sort(Xs)
      }
      batchFor(cB, Bc, nc, Vc, Ic) {
        for (const uc of this.opaqueBatches)
          if (uc.material === cB && uc.packed === Bc && uc.page === nc && uc.resting === Vc) return uc;
        const rB = {
          material: cB,
          packed: Bc,
          page: nc,
          resting: Vc,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(cB, Ic)
        };
        return this.opaqueBatches.push(rB), rB
      }
      batchFaceCull(cB, Bc) {
        return !(!Bc || !(0, Es.o)(cB.model)) && (!this.qI || ! function(cB) {
          var Bc;
          return !(null === (Bc = (0, UB.f)(cB)) || void 0 === Bc || !Bc.movesVertices)
        }(this.shaderPackFields(cB, this.qI).packVariant))
      }
      writeFrameUniforms(cB, Bc) {
        const nc = this.frameUniforms,
          Vc = OV;
        if ((0, Ts.s)(cB, nc), nc[Vc.fogInfos] = Bc.fogEnabled ? Bc.fogMode : 0, nc[Vc.fogInfos + 1] = Bc.fogStart, nc[Vc.fogInfos + 2] = Bc.fogEnd, nc[Vc.fogInfos + 3] = Bc.fogDensity, nc.set(Bc.fogColour, Vc.fogColour), nc[Vc.outputHeight] = Bc.renderHeight, nc.set(Bc.ambientColour, Vc.sceneAmbient), (0, Ts.n)(Bc, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Bc = (0, fs.h)(cB.yr, cB.FV, cB.JV);
          for (let cB = 0; cB < 4; cB++) nc[Vc.aoLevels + cB] = Bc[cB] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, nc)
      }
      animateMaterials(cB) {
        const Bc = fV.anim;
        for (const nc of this.materials.values()) nc.animated && (nc.uniformData[Bc] = cB, this.device.queue.writeBuffer(nc.uniformBuffer, 4 * Bc, nc.uniformData, Bc, 1))
      }
      canDraw(cB, Bc) {
        return !("atlas" === cB.texture && !Bc) || (this.warnOnce(`stride:${cB.id}`, `Lite terrain: material "${cB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(cB, Bc) {
        let nc = 0;
        cB.setBindGroup(1, this.frameBindGroup);
        for (const Vc of this.opaqueBatches) {
          if (!Vc.meshes.length || !this.canDraw(Vc.material, Vc.packed)) continue;
          const Ic = this.pipelineFor(Vc.material, Vc.packed, Bc, Vc.resting);
          Ic && (cB.setPipeline(Ic), cB.setBindGroup(2, Vc.material.bindGroup), this.qI && this.bindShaderPackInputs(cB, Vc.material, this.qI, this.prepassOf.has(Ic)), nc += this.drawBatch(cB, Vc))
        }
        return nc
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(cB, Bc, nc) {
        const Vc = this.target,
          Ic = this.qI;
        if (!Vc || !Ic || 0 === this.maskPipelines) return 0;
        let rB = 0,
          uc = null;
        this.geometry.setDrawing(!0);
        try {
          for (const sc of this.opaqueBatches) {
            if (!sc.meshes.length || !this.canDraw(sc.material, sc.packed)) continue;
            const Mc = this.pipelineFor(sc.material, sc.packed, Vc, sc.resting),
              Pc = Mc && this.prepassOf.get(Mc);
            Pc && (uc || (uc = cB.beginRenderPass(Bc), uc.setBindGroup(0, nc), uc.setBindGroup(1, this.frameBindGroup)), uc.setPipeline(Pc), uc.setBindGroup(2, sc.material.bindGroup), this.bindShaderPackInputs(uc, sc.material, Ic, !0), rB += this.drawBatch(uc, sc))
          }
        } finally {
          var sc;
          null === (sc = uc) || void 0 === sc || sc.end(), this.geometry.setDrawing(!1)
        }
        return rB
      }
      drawBatch(cB, Bc) {
        let nc = 0;
        for (const Vc of Bc.meshes) {
          const {
            rangeCount: Bc
          } = Vc;
          Bc > 0 && (nc += this.geometry.draw(cB, Vc, this.lighting, Vc.first0, Vc.count0), Bc > 1 && (nc += this.geometry.draw(cB, Vc, this.lighting, Vc.first1, Vc.count1)))
        }
        return nc
      }
      drawTransparent(cB, Bc) {
        let nc = 0,
          Vc = null,
          Ic = null;
        cB.setBindGroup(1, this.frameBindGroup);
        for (const rB of this.transparent) {
          const uc = rB.material;
          if (!this.canDraw(uc, rB.packed)) continue;
          const sc = this.pipelineFor(uc, rB.packed, Bc);
          sc && (sc !== Vc && (cB.setPipeline(sc), Vc = sc, this.qI && this.bindShaderPackInputs(cB, uc, this.qI)), uc !== Ic && (cB.setBindGroup(2, uc.bindGroup), Ic = uc), nc += this.geometry.draw(cB, rB, this.lighting))
        }
        return nc
      }
    }

    function Ks(cB, Bc, nc, Vc) {
      return `${QV(cB)}|${cB.atlasLayers}|${cB.JIc}|${Bc}|${nc}|${Vc._colorFormat}|${Vc._depthStencilFormat}|${Vc._sampleCount}`
    }

    function xM(cB, Bc) {
      return cB.distance - Bc.distance
    }

    function ds(cB, Bc) {
      return Bc.distance - cB.distance
    }
    class As {
      constructor() {
        this.left = []
      }
      sort(cB, Bc) {
        for (let nc = 0; nc < cB.length; nc++) {
          const Bc = cB[nc].distance;
          if (Bc - Bc !== 0) return !1
        }
        return this.sortRange(cB, 0, cB.length, Bc), !0
      }
      sortRange(cB, Bc, nc, Vc) {
        if (nc - Bc <= 16) {
          for (let Ic = Bc + 1; Ic < nc; Ic++) {
            const nc = cB[Ic],
              rB = Vc * nc.distance;
            let uc = Ic - 1;
            for (; uc >= Bc && Vc * cB[uc].distance > rB; uc--) cB[uc + 1] = cB[uc];
            cB[uc + 1] = nc
          }
          return
        }
        const Ic = Bc + nc >>> 1;
        if (this.sortRange(cB, Bc, Ic, Vc), this.sortRange(cB, Ic, nc, Vc), Vc * cB[Ic - 1].distance <= Vc * cB[Ic].distance) return;
        const {
          left: rB
        } = this, uc = Ic - Bc;
        for (let qB = 0; qB < uc; qB++) rB[qB] = cB[Bc + qB];
        let sc = 0,
          Mc = Ic,
          Pc = Bc;
        for (; sc < uc && Mc < nc;) cB[Pc++] = Vc * cB[Mc].distance < Vc * rB[sc].distance ? cB[Mc++] : rB[sc++];
        for (; sc < uc;) cB[Pc++] = rB[sc++]
      }
    }
    const Gs = Math.ceil(102);

    function cP(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bc;
      const rB = Math.min(Bc, nc),
        uc = new Uint32Array(Bn(Vc));
      for (let sc = 0; sc < Vc; sc++) {
        const Bc = Math.floor(sc * rB / Vc),
          nc = Math.max(Bc + 1, Math.floor((sc + 1) * rB / Vc));
        for (let Mc = 0; Mc < Vc; Mc++) {
          const Pc = Math.floor(Mc * rB / Vc),
            qB = Math.max(Pc + 1, Math.floor((Mc + 1) * rB / Vc));
          let Oc = 0;
          for (let Vc = Bc; Vc < nc; Vc++)
            for (let Bc = Pc; Bc < qB; Bc++) cB[Vc * Ic + Bc] >= Gs && Oc++;
          if (2 * Oc >= (nc - Bc) * (qB - Pc)) {
            const cB = Mc + Vc * sc;
            uc[cB >>> 5] |= 1 << (31 & cB)
          }
        }
      }
      return uc
    }

    function BM(cB) {
      return Math.max(1, Math.min(16, cB))
    }
    class nM {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = cB, this.loadTexture = Bc, this.warn = nc, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(cB, Bc) {
        return (cB.Rnc !== this.builtVersion || this.blockCaster.length !== Bc) && (this.build(cB, Bc), !0)
      }
      build(cB, Bc) {
        this.builtVersion = cB.Rnc;
        const nc = new Uint16Array(Bc),
          Vc = new Map;
        for (let Ic = 1; Ic < Bc; Ic++) {
          const Bc = this.classify(cB, Ic, Vc);
          if (null === Bc || Bc === xn) {
            nc[Ic] = null === Bc ? 0 : xn;
            continue
          }
          let rB = this.byKey.get(Bc.key);
          void 0 === rB && (rB = this.allocate(Bc), this.byKey.set(Bc.key, rB)), nc[Ic] = rB
        }
        this.blockCaster = nc, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(cB, Bc) {
        const nc = cB.Trc[Bc];
        if ("function" !== typeof nc) return nc;
        try {
          return nc()
        } catch (Vc) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Bc}: ${Vc instanceof Error?Vc.message:String(Vc)}`), null
        }
      }
      classify(cB, Bc, nc) {
        const Vc = this.option(cB, Bc);
        if ("none" === Vc) return null;
        if (Vc && Vc.planes.length > 0) {
          const cB = Vc.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(cB)}`,
            planes: cB
          }
        }
        if (cB.Sn[Bc]) return null;
        const Ic = cB.zV[Bc] ? cB.Knc(Bc) : null;
        if (Ic && Ic.length >= 6) {
          const cB = function(cB) {
            const Bc = new Uint32Array(16);
            for (let nc = 0; nc + 6 <= cB.length; nc += 6) {
              const Vc = [0, 1, 2].map((Bc => Math.max(0, Math.ceil(8 * cB[nc + Bc] - .5)))),
                Ic = [0, 1, 2].map((Bc => Math.min(7, Math.floor(8 * cB[nc + Bc + 3] - .5))));
              for (let cB = Vc[2]; cB <= Ic[2]; cB++)
                for (let nc = Vc[1]; nc <= Ic[1]; nc++)
                  for (let rB = Vc[0]; rB <= Ic[0]; rB++) {
                    const Vc = rB + 8 * (nc + 8 * cB);
                    Bc[Vc >>> 5] |= 1 << (31 & Vc)
                  }
            }
            return Bc
          }(Ic);
          return function(cB) {
            return cB.every((cB => 4294967295 === cB))
          }(cB) ? xn : cB.every((cB => 0 === cB)) ? null : {
            kind: "shape",
            key: `shape:${cB.join(",")}`,
            mask: cB
          }
        }
        if (cB.IVc[Bc] || !cB.zr[Bc]) return null;
        const rB = [0, 1, 2, 3, 4, 5].map((Vc => {
          const Ic = cB.pI[6 * Bc + Vc];
          let rB = nc.get(Ic);
          return void 0 === rB && (rB = function(cB) {
            if (!cB || cB.ZI) return null;
            const {
              FIc: Bc,
              JIc: nc,
              HIc: Vc
            } = cB;
            if (!Bc || !nc || !(nc > 0) || void 0 === Vc || !(Vc >= 0)) return null;
            const Ic = Bc[0],
              rB = nc * nc * 4;
            if (!Ic || Ic.byteLength < rB) return null;
            const uc = Math.floor(Ic.byteLength / rB),
              sc = Bc[Math.floor(Vc / uc)];
            if (!sc) return null;
            const Mc = new Uint8Array(sc.buffer, sc.byteOffset, sc.byteLength),
              Pc = Vc % uc * rB;
            if (Pc + rB > Mc.length) return null;
            const qB = new Uint8Array(nc * nc);
            let Oc = !1;
            for (let Tc = 0; Tc < qB.length; Tc++) qB[Tc] = Mc[Pc + 4 * Tc + 3], Oc ||= qB[Tc] < Gs;
            return Oc ? {
              alpha: qB,
              width: nc
            } : null
          }(cB.br(Ic)), nc.set(Ic, rB)), rB
        }));
        if (rB.every((cB => null === cB))) return xn;
        const uc = BM(Math.max(...rB.map((cB => {
            var Bc;
            return null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.width) && void 0 !== Bc ? Bc : 1
          })))),
          sc = new Uint32Array(Bn(uc)).fill(4294967295),
          Mc = rB.map((cB => null === cB ? sc : cP(cB.alpha, cB.width, cB.width, uc)));
        return {
          kind: "cutout",
          key: `cutout:${uc}:${Mc.map((cB=>cB.join(","))).join("|")}`,
          size: uc,
          faces: Mc
        }
      }
      allocate(cB) {
        if (this.nextCaster >= nn) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Bc = this.nextCaster++;
        if (this.writeCaster(Bc, dB, 0, 0, 0), "shape" === cB.kind) {
          const nc = this.allocateMask(cB.mask.length);
          nc >= 0 && (this.sink(nc, cB.mask), this.writeCaster(Bc, AB, nc, 0, 8))
        } else if ("cutout" === cB.kind) {
          const nc = Bn(cB.size),
            Vc = this.allocateMask(6 * nc);
          if (Vc >= 0) {
            const Ic = new Uint32Array(6 * nc);
            cB.faces.forEach(((cB, Bc) => {
              Ic.set(cB, Bc * nc)
            })), this.sink(Vc, Ic), this.writeCaster(Bc, cV, Vc, 0, cB.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Bc, cB.planes).finally((() => {
          this.planesLoading--
        })));
        return Bc
      }
      async loadPlanes(cB, Bc) {
        const nc = await Promise.all(Bc.map((cB => this.texture(cB.texture))));
        if (nc.some((cB => null === cB))) return;
        const Vc = nc,
          Ic = BM(Math.max(...Vc.map((cB => Math.min(cB.width, cB.height))))),
          rB = Bn(Ic),
          uc = this.allocateMask(Bc.length * (4 + rB));
        if (uc < 0) return;
        const sc = new Uint32Array(Bc.length * (4 + rB)),
          Mc = 4 * Bc.length;
        Bc.forEach(((cB, Bc) => {
          const nc = uc + Mc + Bc * rB;
          sc.set(function(cB, Bc) {
            const [nc, Vc] = cB.tangent, Ic = Math.hypot(nc, Vc) || 1, rB = nc / Ic, uc = Vc / Ic, sc = cB.centre[0] * uc - cB.centre[1] * rB, Mc = new Uint32Array(4);
            return new Float32Array(Mc.buffer, 0, 3).set([rB, uc, sc]), Mc[3] = Bc, Mc
          }(cB, nc), 4 * Bc), sc.set(cP(Vc[Bc].alpha, Vc[Bc].width, Vc[Bc].height, Ic), Mc + Bc * rB)
        })), this.sink(uc, sc), this.writeCaster(cB, GB, uc, Bc.length, Ic)
      }
      texture(cB) {
        let Bc = this.textures.get(cB);
        return Bc || (Bc = this.loadTexture(cB).catch((Bc => (this.warn(`Sun shadows: no mask for ${cB}: ${Bc instanceof Error?Bc.message:String(Bc)}`), null))), this.textures.set(cB, Bc)), Bc
      }
      allocateMask(cB) {
        if (this.nextMaskWord + cB > Vn) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Bc = 32768 + this.nextMaskWord;
        return this.nextMaskWord += cB, Bc
      }
      writeCaster(cB, Bc, nc, Vc, Ic) {
        this.sink(0 + 4 * cB, Uint32Array.of(Bc, nc, Vc, Ic))
      }
      warnOnce(cB) {
        this.warned.has(cB) || (this.warned.add(cB), this.warn(cB))
      }
    }
    var VM = nc(36257);

    function IM(cB) {
      return !cB.CI && !cB.Hqc && !cB.MI
    }

    function rP() {
      return {
        bricks: new Uint32Array(kn),
        cells: new Uint16Array(32768),
        special: new Uint8Array(WB)
      }
    }
    class uM {
      constructor(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = cB, this.writeVoxels = Bc, this.writePool = nc, this.warn = Vc, this.eyeChunk = null, this.slotChunk = new Array(CB).fill(null), this.slotVersion = new Float64Array(CB).fill(-1), this.slotPool = new Array(CB).fill(null), this.starved = new Uint8Array(CB), this.queue = [], this.queued = new Uint8Array(CB), this.queueSorted = !0, this.freePool = new Uint32Array(In), this.freeCount = In, this.casterTable = null, this.warnedPool = !1, this.scratch = rP(), this.victimScratch = rP(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * CB), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Ic = 0; Ic < In; Ic++) this.freePool[Ic] = 65535 - Ic
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return In - this.freeCount
      }
      chunkAdded(cB) {
        if (null === this.eyeChunk || !this.inRadius(cB.i, cB.j, cB.k)) return;
        const Bc = jn(cB.i, cB.j, cB.k);
        this.slotChunk[Bc] = cB, this.slotVersion[Bc] = -1, this.enqueue(Bc)
      }
      update(cB, Bc, nc) {
        const Vc = this.casters.blockCaster;
        if (Vc !== this.casterTable) {
          this.casterTable = Vc;
          for (let cB = 0; cB < CB; cB++) this.slotVersion[cB] = -1, this.slotChunk[cB] && this.enqueue(cB)
        }
        const Ic = Math.floor(cB[0] / 32),
          rB = Math.floor(cB[1] / 32),
          uc = Math.floor(cB[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Ic || this.eyeChunk[1] !== rB || this.eyeChunk[2] !== uc) && (this.eyeChunk = [Ic, rB, uc], this.follow(Bc), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let sc = 0; sc < CB; sc++) {
          const cB = this.slotChunk[sc];
          cB && (cB.nPc || cB.TI !== this.slotVersion[sc]) && this.enqueue(sc)
        }
        this.drain(nc), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(cB, Bc) {
        this.records.set(Bc, 4 * cB), this.windowTopStale = !0, this.writeVoxels(4 * cB, Bc)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const cB = this.records;
        let Bc = -1 / 0;
        for (let Vc = 0; Vc < cB.length; Vc += 4) {
          const nc = 255 & cB[Vc + 3];
          nc !== NB && nc !== EB || !this.inRadius(cB[Vc], cB[Vc + 1], cB[Vc + 2]) || (Bc = Math.max(Bc, cB[Vc + 1] * bn + (cB[Vc + 3] >>> 8)))
        }
        const nc = Bc === -1 / 0 ? 1 : Bc + HB;
        nc !== this.windowTop[0] && (this.windowTop[0] = nc, this.writeVoxels(XB, this.windowTop))
      }
      follow(cB) {
        const Bc = this.eyeChunk,
          [nc, Vc, Ic] = ZB;
        for (let uc = -Ic; uc <= Ic; uc++)
          for (let Ic = -Vc; Ic <= Vc; Ic++)
            for (let Vc = -nc; Vc <= nc; Vc++) {
              var rB;
              const nc = Bc[0] + Vc,
                sc = Bc[1] + Ic,
                Mc = Bc[2] + uc,
                Pc = jn(nc, sc, Mc),
                qB = this.slotChunk[Pc];
              if (qB && !qB.nPc && qB.i === nc && qB.j === sc && qB.k === Mc) continue;
              const Oc = null !== (rB = cB(nc, sc, Mc)) && void 0 !== rB ? rB : null;
              qB && (qB.i !== nc || qB.j !== sc || qB.k !== Mc) && this.slotPool[Pc] && (this.release(Pc), this.record.fill(0), this.writeRecord(Pc, this.record)), this.slotChunk[Pc] = Oc, this.slotVersion[Pc] = -1, (Oc || qB) && this.enqueue(Pc)
            }
      }
      requeueStarved() {
        for (let cB = 0; cB < CB; cB++) this.starved[cB] && this.slotChunk[cB] && this.enqueue(cB)
      }
      enqueue(cB) {
        this.queued[cB] || (this.queued[cB] = 1, this.queue.push(cB), this.queueSorted = !1)
      }
      drain(cB) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const cB = new Map;
          for (const Bc of this.queue) cB.set(Bc, this.slotDistance(Bc));
          this.queue.sort(((Bc, nc) => cB.get(nc) - cB.get(Bc))), this.queueSorted = !0
        }
        const Bc = performance.now();
        let nc = 0;
        const Vc = [];
        for (; this.queue.length > 0 && (0 === nc || performance.now() - Bc < cB);) {
          const cB = this.queue.pop(),
            Bc = this.slotChunk[cB];
          !Bc || Bc.nPc || IM(Bc) ? (this.queued[cB] = 0, this.encodeSlot(cB), nc++) : Vc.push(cB)
        }
        for (let Ic = Vc.length - 1; Ic >= 0; Ic--) this.queue.push(Vc[Ic])
      }
      slotDistance(cB) {
        const Bc = this.slotChunk[cB],
          nc = this.eyeChunk;
        return Bc ? Math.max(Math.abs(Bc.i - nc[0]), Math.abs(Bc.j - nc[1]), Math.abs(Bc.k - nc[2])) : 0
      }
      inRadius(cB, Bc, nc) {
        const Vc = this.eyeChunk,
          [Ic, rB, uc] = ZB;
        return Math.abs(cB - Vc[0]) <= Ic && Math.abs(Bc - Vc[1]) <= rB && Math.abs(nc - Vc[2]) <= uc
      }
      release(cB) {
        const Bc = this.slotPool[cB];
        if (Bc) {
          for (let cB = Bc.length - 1; cB >= 0; cB--) this.freePool[this.freeCount++] = Bc[cB];
          this.slotPool[cB] = null
        }
      }
      encodeSlot(cB) {
        var Bc, nc, Vc, Ic, rB;
        let uc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          sc = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Mc = null !== (Bc = null === (nc = this.slotPool[cB]) || void 0 === nc ? void 0 : nc.length) && void 0 !== Bc ? Bc : 0;
        this.release(cB), this.starved[cB] = 0;
        const Pc = this.slotChunk[cB],
          qB = this.record;
        if (!Pc || Pc.nPc || !Pc.NB) return this.slotChunk[cB] = null, this.slotVersion[cB] = -1, qB.fill(0), this.writeRecord(cB, qB), void(Mc > 0 && this.requeueStarved());
        this.slotVersion[cB] = Pc.TI;
        const Oc = this.encodeBricks(Pc, cB, uc, sc);
        qB[0] = Pc.i, qB[1] = Pc.j, qB[2] = Pc.k, qB[3] = Oc, this.writeRecord(cB, qB), null === (Vc = this.encoded) || void 0 === Vc || Vc.call(this, Pc), sc && (null !== (Ic = null === (rB = this.slotPool[cB]) || void 0 === rB ? void 0 : rB.length) && void 0 !== Ic ? Ic : 0) < Mc && this.requeueStarved()
      }
      encodeBricks(cB, Bc, nc, Vc) {
        if (cB.LV) return DB;
        const Ic = this.casters.blockCaster,
          {
            data: rB,
            stride: uc,
            offset: sc
          } = cB.NB,
          [Mc, Pc, qB] = uc,
          Oc = bn,
          {
            bricks: Tc,
            cells: fc,
            special: mB
          } = nc;
        Tc.fill(0), mB.fill(0);
        let ec = 0,
          tB = 0,
          Sc = 0;
        for (let yB = 0; yB < Oc; yB++) {
          const Bc = yB >> 2,
            nc = 3 & yB,
            Vc = cB.onc[yB],
            uc = Vc === VM.d ? -1 : Vc < Ic.length ? Ic[Vc] : 0;
          if (0 !== uc)
            for (let cB = 0; cB < Oc; cB++) {
              const Vc = cB >> 2,
                zB = 3 & cB;
              let pc = sc + cB * Mc + yB * Pc;
              for (let cB = 0; cB < Oc; cB++, pc += qB) {
                let sc = uc;
                if (sc < 0) {
                  const cB = rB[pc];
                  if (sc = cB < Ic.length ? Ic[cB] : 0, 0 === sc) continue
                }
                const Mc = RB(Vc, Bc, cB >> 2),
                  Pc = KB(zB, nc, 3 & cB);
                Tc[3 * Mc + (Pc >>> 5)] |= 1 << (31 & Pc), fc[Mc * oB + Pc] = sc, ec++, Sc = yB, sc === xn ? tB++ : mB[Mc] = 1
              }
            }
        }
        return 0 === ec ? DB : 32768 === tB ? NB | Sc << 8 : (this.writePoolEntries(Bc, nc, Vc), this.writeVoxels(wB + Bc * kn, Tc), EB | Sc << 8)
      }
      writePoolEntries(cB, Bc, nc) {
        const {
          bricks: Vc,
          cells: Ic,
          special: rB
        } = Bc, uc = this.entry;
        let sc = 0;
        for (let qB = 0; qB < WB; qB++) sc += rB[qB];
        if (0 === sc) return;
        nc && this.freeCount < sc && this.evictBeyond(cB, sc);
        const Mc = new Uint32Array(nc ? Math.min(sc, this.freeCount) : 0);
        let Pc = 0;
        for (let qB = 0; qB < WB; qB++) {
          if (!rB[qB]) continue;
          const nc = 3 * qB;
          if (Pc === Mc.length) {
            this.dropSpecials(Bc, qB), this.starved[cB] = 1;
            continue
          }
          const sc = this.freePool[--this.freeCount];
          Mc[Pc++] = sc;
          for (let cB = 0; cB < oB; cB++) {
            const Bc = Vc[nc + (cB >>> 5)] >>> (31 & cB) & 1 ? Ic[qB * oB + cB] : 0;
            1 & cB ? uc[cB >> 1] |= Bc << 16 : uc[cB >> 1] = Bc
          }
          Vc[nc + 2] = sc + 1, this.writePool(rV + 32 * sc, uc)
        }
        Mc.length > 0 && (this.slotPool[cB] = Mc)
      }
      evictBeyond(cB, Bc) {
        const nc = this.slotDistance(cB),
          Vc = [];
        for (let Ic = 0; Ic < CB; Ic++) Ic !== cB && this.slotPool[Ic] && this.slotDistance(Ic) > nc && Vc.push(Ic);
        Vc.sort(((cB, Bc) => this.slotDistance(Bc) - this.slotDistance(cB)));
        for (const Ic of Vc) {
          if (this.freeCount >= Bc) return;
          const cB = this.slotChunk[Ic];
          cB && !cB.nPc && cB.NB && (cB.TI === this.slotVersion[Ic] || IM(cB)) && this.encodeSlot(Ic, this.victimScratch, !1)
        }
      }
      dropSpecials(cB, Bc) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const nc = 3 * Bc;
        for (let Vc = 0; Vc < oB; Vc++) cB.cells[Bc * oB + Vc] !== xn && (cB.bricks[nc + (Vc >>> 5)] &= ~(1 << (31 & Vc)))
      }
    }
    var sM = nc(35971);
    class MM {
      constructor(cB) {
        this.device = cB, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new tV, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.rn = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = cB.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = cB.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(cB, Bc, nc) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Vc
        } = this;
        Vc.Ln(cB, Bc), nc.forEachSunShadowCaster((cB => {
          this.add(cB)
        })), Vc.finish();
        const Ic = 0 === Vc.parts;
        if (Ic && this.uploadedEmpty) return;
        this.uploadedEmpty = Ic;
        const {
          queue: rB
        } = this.device, {
          words: uc
        } = Vc;
        rB.writeBuffer(this.frameBuffer, 0, uc, 0, 16385), Vc.refs > 0 && rB.writeBuffer(this.frameBuffer, 65540, uc, Pn, Vc.refs), Ic || rB.writeBuffer(this.frameBuffer, 327684, uc, qV, Vc.parts * Mn)
      }
      add(cB) {
        const Bc = this.gridFor(cB);
        if (!Bc) return;
        const {
          frame: nc
        } = this, {
          rn: Vc,
          worldAt: Ic,
          instances: rB,
          instanceCount: uc,
          thin: sc
        } = cB;
        if (rB)
          for (let Mc = 0; Mc < uc; Mc++) sc ? (yV(rB, 16 * Mc, Vc, Ic, this.rn), nc.add(Bc, this.rn)) : nc.add(Bc, rB, 16 * Mc);
        else nc.add(Bc, Vc, Ic)
      }
      gridFor(cB) {
        let {
          geometry: Bc,
          indexed: nc,
          first: Vc,
          count: Ic,
          skip: rB
        } = cB, uc = this.grids.get(Bc);
        uc || (uc = new Map, this.grids.set(Bc, uc));
        const sc = `${nc?Vc:-1-Vc}:${Ic}:${null!==rB&&void 0!==rB?rB:""}`;
        let Mc = uc.get(sc);
        if (void 0 !== Mc || this.gridsFull) return Mc;
        const Pc = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = Pc + 2;
        else if (Pc > this.bakeDeadline) return;
        return Mc = this.bake(Bc, nc, Vc, Ic, rB), void 0 !== Mc && uc.set(sc, Mc), Mc
      }
      bake(cB, Bc, nc, Vc, Ic) {
        const rB = cB.vertexAttributes.find((cB => "position" === cB.kind)),
          uc = rB ? function(cB, Bc, nc, Vc) {
            let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const rB = cB => Bc ? Bc[nc + cB] : nc + cB,
              uc = cB => null !== Ic && [0, 1, 2].some((Bc => {
                const nc = rB(cB + Bc);
                return nc >= Ic[0] && nc < Ic[1]
              })),
              sc = [1 / 0, 1 / 0, 1 / 0],
              Mc = [-1 / 0, -1 / 0, -1 / 0];
            for (let yB = 0; yB + 2 < Vc; yB += 3)
              if (!uc(yB))
                for (let Bc = 0; Bc < 3; Bc++) {
                  const nc = rB(yB + Bc);
                  for (let Bc = 0; Bc < 3; Bc++) sc[Bc] = Math.min(sc[Bc], cB[3 * nc + Bc]), Mc[Bc] = Math.max(Mc[Bc], cB[3 * nc + Bc])
                }
            const Pc = Math.max(Mc[0] - sc[0], Mc[1] - sc[1], Mc[2] - sc[2]);
            if (!(Pc > 0)) return null;
            const qB = Pc / 64,
              Oc = [0, 0, 0],
              Tc = [0, 0, 0],
              fc = [0, 0, 0];
            for (let yB = 0; yB < 3; yB++) Oc[yB] = Math.min(65, Math.ceil((Mc[yB] - sc[yB]) / qB) + 1), Tc[yB] = sc[yB] - qB / 2, fc[yB] = Tc[yB] + Oc[yB] * qB;
            const mB = new Uint32Array(Math.ceil(Oc[0] * Oc[1] * Oc[2] / 32)),
              ec = new Float64Array(9),
              tB = [0, 0, 0],
              Sc = [0, 0, 0];
            for (let yB = 0; yB + 2 < Vc; yB += 3)
              if (!uc(yB)) {
                for (let Bc = 0; Bc < 3; Bc++) {
                  const nc = rB(yB + Bc);
                  for (let Vc = 0; Vc < 3; Vc++) ec[3 * Bc + Vc] = cB[3 * nc + Vc]
                }
                for (let cB = 0; cB < 3; cB++) {
                  const Bc = Math.min(ec[cB], ec[3 + cB], ec[6 + cB]),
                    nc = Math.max(ec[cB], ec[3 + cB], ec[6 + cB]);
                  tB[cB] = Math.max(0, Math.floor((Bc - Tc[cB]) / qB - 1e-6)), Sc[cB] = Math.min(Oc[cB] - 1, Math.floor((nc - Tc[cB]) / qB + 1e-6))
                }
                for (let cB = tB[2]; cB <= Sc[2]; cB++)
                  for (let Bc = tB[1]; Bc <= Sc[1]; Bc++)
                    for (let nc = tB[0]; nc <= Sc[0]; nc++)
                      if (zV(ec, Tc[0] + (nc + .5) * qB, Tc[1] + (Bc + .5) * qB, Tc[2] + (cB + .5) * qB, qB / 2)) {
                        const Vc = nc + Oc[0] * (Bc + Oc[1] * cB);
                        mB[Vc >>> 5] |= 1 << (31 & Vc)
                      }
              } return {
              words: mB,
              lo: Tc,
              hi: fc,
              cell: qB,
              dims: Oc
            }
          }((0, sM.h)(rB, cB.vertexCount), Bc ? cB.indexData : null, nc, Vc, Ic) : null;
        if (!uc) return null;
        const {
          words: sc,
          ...Mc
        } = uc;
        if (this.gridTop + sc.length > Tn) return void(this.gridsFull = !0);
        const Pc = this.gridTop;
        return this.gridTop += sc.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * Pc, sc), {
          ...Mc,
          at: Pc
        }
      }
    }
    const PM = Math.cos(1 * Math.PI / 180);

    function qP(cB, Bc) {
      return cB[0] * Bc[0] + cB[1] * Bc[1] + cB[2] * Bc[2] < PM
    }
    async function OM(cB) {
      const {
        pixels: Bc,
        width: nc,
        height: Vc
      } = await wI(cB), Ic = new Uint8Array(nc * Vc);
      for (let rB = 0; rB < Ic.length; rB++) Ic[rB] = Bc[4 * rB + 3];
      return {
        width: nc,
        height: Vc,
        alpha: Ic
      }
    }
    class TM {
      constructor(cB, Bc) {
        this.device = cB, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(hn.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = cB.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = cB.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * FB,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = cB.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [nc, Vc, Ic] = hn.n;
        this.volume = cB.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: nc,
            height: Vc,
            depthOrArrayLayers: Ic
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = cB.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = cB.createBuffer({
          label: "sun-shadow-volume-work",
          size: hn.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Bc ? new MM(cB) : null, this.entityStandIn = Bc ? null : cB.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var cB, Bc;
        const nc = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || nc.push("Lite sun shadow volume pipeline compiling");
        const Vc = null !== (cB = null === (Bc = this.casters) || void 0 === Bc ? void 0 : Bc.planesLoading) && void 0 !== cB ? cB : 0;
        return Vc > 0 && nc.push(`${Vc} Lite sun shadow plane casters loading their textures`), nc
      }
      entries() {
        var cB, Bc, nc, Vc;
        const Ic = gn.s;
        return [{
          binding: Ic.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Ic.NB,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Ic.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Ic.volume,
          resource: this.volumeView
        }, {
          binding: Ic.sampler,
          resource: this.volumeSampler
        }, {
          binding: Ic.entities,
          resource: {
            buffer: null !== (cB = null === (Bc = this.entities) || void 0 === Bc ? void 0 : Bc.frameBuffer) && void 0 !== cB ? cB : this.entityStandIn
          }
        }, {
          binding: Ic.entityGrids,
          resource: {
            buffer: null !== (nc = null === (Vc = this.entities) || void 0 === Vc ? void 0 : Vc.gridBuffer) && void 0 !== nc ? nc : this.entityStandIn
          }
        }]
      }
      prepare(cB, Bc, nc) {
        var Vc;
        this.entitiesThisFrame = !1;
        const Ic = null !== (Vc = null === nc || void 0 === nc ? void 0 : nc.sunShadowReach()) && void 0 !== Vc ? Vc : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!nc || !Ic.sunShadow && !Ic.airShadow) return void(this.volumeHolds = null);
        if (cB.rn.Guc !== bn) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${cB.rn.Guc}; everything is lit.`)));
        const rB = this.start(cB);
        this.casters.update(cB.en, cB.en.zV.length);
        const uc = cB.ZB;
        for (let Tc = 0; Tc < 3; Tc++) this.eye[Tc] = Bc[Tc] + uc[Tc];
        const sc = (0, hn.v)(this.eye);
        this.staleNear = sc;
        const Mc = cB.rn.DI;
        rB.update(this.eye, ((cB, Bc, nc) => Mc.NI(cB, Bc, nc)), 1);
        const Pc = (0, hn.q)(nc.Duc()),
          qB = rB.eyeChunk,
          Oc = this.uniformInts;
        for (let Tc = 0; Tc < 3; Tc++) Oc[Tc] = qB[Tc], Oc[4 + Tc] = sc[Tc];
        this.entitiesThisFrame = null !== this.entities && Ic.sunShadow, this.entitiesThisFrame && en(this.uniformFloats, 8, Bc, Pc), null !== this.volumeHolds && (this.castersWritten || qP(Pc, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(sc, Pc, qB)
      }
      markStale(cB) {
        const Bc = this.staleNear,
          nc = bn,
          Vc = [cB.i * nc, cB.j * nc, cB.k * nc];
        for (let rB = 0; rB < 3; rB++)
          if (Vc[rB] + nc <= Bc[rB] - nc || Vc[rB] >= Bc[rB] + hn.n[rB] + nc) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Ic = this.stale;
        for (let rB = 0; rB < Ic.length; rB += 4)
          if (Ic[rB] === cB.i && Ic[rB + 1] === cB.j && Ic[rB + 2] === cB.k) return void(Ic[rB + 3] = this.swept);
        if (16 === Ic.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Ic.push(cB.i, cB.j, cB.k, this.swept)
      }
      writeStale() {
        const cB = this.swept,
          Bc = this.stale;
        this.staleAll && cB - this.staleAllSwept >= hn.h && (this.staleAll = !1, Bc.length = 0);
        let nc = 0;
        for (let Ic = 0; Ic < Bc.length; Ic += 4)
          if (cB - Bc[Ic + 3] < hn.h) {
            for (let cB = 0; cB < 4; cB++) Bc[nc + cB] = Bc[Ic + cB];
            nc += 4
          } Bc.length = nc;
        const Vc = this.uniformInts;
        Vc[3] = this.staleAll ? 5 : nc / 4;
        for (let Ic = 0; Ic < 4; Ic++)
          for (let cB = 0; cB < 3; cB++) Vc[16 + 4 * Ic + cB] = 4 * Ic < nc ? Bc[4 * Ic + cB] * bn : 0
      }
      writeUniform() {
        const cB = this.uniformInts;
        let Bc = this.uniformWritten;
        if (Bc) {
          let nc = !0;
          for (let Vc = 0; Vc < cB.length && nc; Vc++) nc = cB[Vc] === Bc[Vc];
          if (nc) return
        }
        Bc ??= this.uniformWritten = new Int32Array(cB.length), Bc.set(cB), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(cB) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, cB)
      }
      computeVolume(cB, Bc, nc) {
        const Vc = this.buildVolumePass();
        if (!Vc) return void(this.volumeHolds = null);
        const Ic = (0, hn.t)(this.volumeHolds, cB);
        this.volumeHolds = cB;
        const rB = 1 === Ic.length && Ic[0].size.every(((cB, Bc) => cB === hn.n[Bc])),
          uc = this.sweptChunk,
          sc = this.sweptLight,
          Mc = Bc[0] !== sc[0] || Bc[1] !== sc[1] || Bc[2] !== sc[2],
          Pc = nc[0] !== uc[0] || nc[1] !== uc[1] || nc[2] !== uc[2],
          qB = Mc && qP(Bc, sc);
        if ((rB || this.written || Pc || qB) && (this.fastLeft = hn.h), rB || this.written || Mc || Pc) {
          this.written = !1;
          for (let cB = 0; cB < 3; cB++) uc[cB] = nc[cB], sc[cB] = Bc[cB];
          this.sweepLeft = rB ? 0 : hn.h
        }
        if (rB ? this.swept += hn.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Ic.push(...(0, hn.x)(cB, this.slice)), this.slice = (this.slice + 1) % hn.h, this.swept++), 0 === Ic.length) return;
        const Oc = (0, hn.y)(this.workData, Bc, Ic);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Tc = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          fc = Tc.beginComputePass({
            label: "sun-shadow-volume"
          });
        fc.setPipeline(Vc.pipeline), fc.setBindGroup(Yn.group, Vc.bindGroup), fc.dispatchWorkgroups(Math.ceil(Oc / hn.k)), fc.end(), this.device.queue.submit([Tc.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const cB = Yn,
          Bc = GPUShaderStage.COMPUTE,
          nc = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: cB.uniform,
              visibility: Bc,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: cB.NB,
              visibility: Bc,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: cB.special,
              visibility: Bc,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: cB.work,
              visibility: Bc,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: cB.volume,
              visibility: Bc,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Vc = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: nc,
            entries: [{
              binding: cB.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: cB.NB,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: cB.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: cB.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: cB.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [nc]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: Ln()
            }),
            entryPoint: "main"
          }
        }).then((cB => {
          this.volumePass = {
            pipeline: cB,
            bindGroup: Vc
          }
        }), (cB => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(cB)}`)
        })), null
      }
      start(cB) {
        if (this.window) return this.window;
        const Bc = (cB, Bc) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * cB, Bc)
        };
        this.casters = new nM(((cB, nc) => {
          this.castersWritten = !0, Bc(cB, nc)
        }), OM);
        const nc = new uM(this.casters, ((cB, Bc) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * cB, Bc)
        }), Bc);
        return nc.encoded = cB => {
          this.markStale(cB)
        }, cB.rn.on("chunkAdded", (cB => {
          nc.chunkAdded(cB)
        })), this.window = nc, nc
      }
    }
    var fM = nc(37214),
      mP = nc(37221);
    const eM = 0,
      tP = 3,
      SM = 4,
      yP = 5;

    function zP(cB, Bc, nc, Vc) {
      cB.drawOffset(Bc, Vc + eM), Bc[Vc + tP] = cB.drawTime(), nc[Vc + SM] = cB.ring.drawStart(), nc[Vc + yP] = cB.ring.drawCount()
    }
    const pM = `\n${tI}\n\nconst MAX_STOPS = ${mP.e}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${mP.e/4}>,\n\tcolor1: array<vec4f, ${mP.e}>,\n\tcolor2: array<vec4f, ${mP.e}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${mP.e}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${mP.e}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var hM = nc(39559);
    class aP {
      constructor(cB, Bc, nc, Vc) {
        this.device = cB, this.system = Bc, this.frameIndex = nc, this.TV = Vc, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, hM.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (cB, Bc) => {
          this.device.queue.writeBuffer(this.ring, cB * mP.g * 4, this.system.ring.records, cB * mP.g, (Bc - cB) * mP.g)
        };
        const {
          name: Ic
        } = Bc;
        this.ring = cB.createBuffer({
          label: `particles-${Ic}`,
          size: Bc.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = cB.createBuffer({
          label: `particles-uniforms-${Ic}`,
          size: 4 * mP.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(cB) {
        const Bc = (0, hM.b)(this.system, this.uniformBits, cB);
        Bc && (this.uniformBits = Bc, this.device.queue.writeBuffer(this.uniforms, 0, Bc))
      }
      bind() {
        const {
          system: cB
        } = this, Bc = this.texture;
        (0, hM.i)(cB, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${cB.name}`,
          size: [mP.n, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * mP.n
        }, [mP.n, 1]));
        const nc = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.TV.whiteRamp;
        this.bindGroup && this.boundView === Bc.view && this.boundSampler === Bc.sampler && this.boundRamp === nc || (this.boundView = Bc.view, this.boundSampler = Bc.sampler, this.boundRamp = nc, this.bindGroup = this.device.createBindGroup({
          label: `particles-${cB.name}`,
          layout: this.TV.layout,
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
            resource: Bc.sampler
          }, {
            binding: 3,
            resource: Bc.view
          }, {
            binding: 4,
            resource: this.TV.rampSampler
          }, {
            binding: 5,
            resource: nc
          }]
        }))
      }
      destroy() {
        var cB;
        this.ring.destroy(), this.uniforms.destroy(), null === (cB = this.ramp) || void 0 === cB || cB.destroy()
      }
    }
    class lM {
      constructor(cB, Bc) {
        this.device = cB, this.resources = Bc, this.renderable = void 0, this.systems = new Map, this.draws = [], this.TV = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, PB.e)();
        const nc = cB.createBindGroupLayout({
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
        this.frameLayout = cB.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = cB.createPipelineLayout({
          bindGroupLayouts: [BB(cB), nc, this.frameLayout]
        }), this.module = cB.createShaderModule({
          label: "particles",
          code: pM
        });
        const Vc = cB.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        cB.queue.writeTexture({
          texture: Vc
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.TV = {
          layout: nc,
          rampSampler: cB.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Vc.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Bc, nc) => (this.bindTarget(nc), {
            renderable: this.renderable,
            pipeline: uB(cB, nc),
            draw: cB => nc === this.preparedTarget ? this.draw(cB) : 0
          })
        }
      }
      get Fqc() {
        return this.systems.size
      }
      reset() {
        for (const cB of this.systems.keys()) cB.reset()
      }
      describePendingWork() {
        return (0, fM.e)(this.systems.keys(), "Lite")
      }
      Vnc(cB, Bc) {
        const nc = new fM.b(cB, Bc, this);
        return this.systems.set(nc, new aP(this.device, nc, this.allocateFrameIndex(), this.TV)), nc
      }
      zsc(cB, Bc) {
        for (const nc of this.systems.keys()) nc.zsc(cB, Bc)
      }
      canDraw(cB) {
        const Bc = this.systems.get(cB),
          nc = cB.texture ? this.resources.boundTexture(cB.texture) : null;
        if (!Bc || !nc || !this.targetPipelines) return !1;
        if (Bc.texture = nc, Bc.pipelines.length = 0, !JI(cB.blendMode)) return this.warnOnce(`blend:${cB.blendMode}`, `particle blend mode ${cB.blendMode} is not drawn (${cB.name})`), !0;
        const Vc = (0, QI.n)(cB.blendMode);
        for (const Ic of Vc) {
          const cB = this.pipelineFor(Ic);
          if (!1 === cB) return Bc.pipelines.length = 0, !0;
          cB && Bc.pipelines.push(cB)
        }
        return Bc.pipelines.length === Vc.length
      }
      disposeStopped(cB) {
        cB.dispose()
      }
      remove(cB) {
        const Bc = this.systems.get(cB);
        Bc && (this.systems.delete(cB), Bc.destroy(), this.freeFrameIndices.push(Bc.frameIndex))
      }
      prepare(cB) {
        const Bc = cB.animationRatio || 1;
        sB(this.renderable._worldCenter, cB, VB), this.preparedTarget = this.target, this.draws.length = 0;
        let nc = 0;
        for (const Vc of this.systems.values()) {
          const cB = Vc.system;
          if (!cB.animateIfActive(Bc)) continue;
          if (cB.ring.takeUploads(Vc.upload), !cB.hasLiveParticles() || 0 === Vc.pipelines.length) continue;
          Vc.writeUniforms(this.warnOnce), Vc.bind();
          const Ic = 64 * Vc.frameIndex;
          Vc.count = cB.ring.drawCount(), zP(cB, this.frameData, this.frameBits, Ic), nc = Math.max(nc, Ic + 64), this.draws.push(Vc)
        }
        nc > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, nc)
      }
      draw(cB) {
        let Bc = 0,
          nc = null;
        for (const Vc of this.draws) {
          cB.setBindGroup(1, Vc.bindGroup), cB.setBindGroup(2, this.frameBindGroup, [256 * Vc.frameIndex]);
          for (const Ic of Vc.pipelines) Ic !== nc && (cB.setPipeline(Ic), nc = Ic), cB.draw(4, Vc.count), Bc++
        }
        return Bc
      }
      bindTarget(cB) {
        this.target = cB;
        const Bc = `${cB._colorFormat}|${cB._depthStencilFormat}|${cB._depthCompare}|${cB._sampleCount}`;
        let nc = this.pipelines.get(Bc);
        nc || (nc = new Map, this.pipelines.set(Bc, nc)), this.targetPipelines = nc
      }
      pipelineFor(cB) {
        var Bc;
        const nc = this.targetPipelines,
          Vc = nc.get(cB);
        if (void 0 !== Vc) return Vc;
        nc.set(cB, null);
        const Ic = this.target,
          rB = cB === QI.e,
          uc = null !== (Bc = Ic._depthCompare) && void 0 !== Bc ? Bc : nB;
        return this.device.createRenderPipelineAsync({
          label: `particles-${cB}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: dc({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: rB ? 1 : 0
            }
          }, Ic, jr((0, QI.j)(cB))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Ic._depthStencilFormat ? {
            format: Ic._depthStencilFormat,
            depthCompare: uc,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Ic._sampleCount
          }
        }).then((Bc => {
          nc.set(cB, Bc)
        }), (Bc => {
          nc.set(cB, !1), console.error("Lite particle pipeline failed", Bc), KI("particles", `blend-${cB}`, Bc)
        })), null
      }
      allocateFrameIndex() {
        const cB = this.freeFrameIndices.pop();
        if (void 0 !== cB) return cB;
        const Bc = this.nextFrameIndex++;
        if (64 * (Bc + 1) > this.frameData.length) {
          const cB = new Float32Array(2 * this.frameData.length);
          cB.set(this.frameData), this.frameData = cB, this.frameBits = new Uint32Array(cB.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Bc
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
    class YM {
      constructor(cB, Bc, nc, Vc, Ic) {
        this.lite = cB, this.canvas = Bc, this.info = nc, this.resources = Ic, this.HPc = !1, this.needPOTTextures = !1, this.tuc = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Bc.width, this.renderHeight = Bc.height, this.caps = {
          maxTextureSize: Vc.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Vc.maxTextureArrayLayers
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
      setSize(cB, Bc) {
        if (this.renderWidth === cB && this.renderHeight === Bc) return !1;
        const nc = this.renderWidth,
          Vc = this.renderHeight;
        this.renderWidth = cB, this.renderHeight = Bc;
        try {
          (0, kB.o)(this.lite, cB, Bc)
        } catch (Ic) {
          if (Ic instanceof DOMException && "InvalidStateError" === Ic.name) {
            this.renderWidth = nc, this.renderHeight = Vc;
            try {
              (0, kB.o)(this.lite, nc, Vc)
            } catch {
              this.canvas.width = nc, this.canvas.height = Vc
            }
            return console.warn("WebGPU could not allocate render targets for resize", cB, Bc, Ic.message), !1
          }
          throw Ic
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
      sC() {
        const cB = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : cB - this.lastFrameTime, this.lastFrameTime = cB
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(cB, Bc) {
        const nc = document.createElement("canvas");
        return nc.width = cB, nc.height = Bc, nc
      }
      zuc(cB, Bc) {
        var nc;
        return null !== (nc = this.resources.zuc.get(cB)) && void 0 !== nc ? nc : new Jc(this.resources, cB, Bc)
      }
      atlasArray(cB, Bc, nc) {
        return this.resources.atlasArray(cB, Bc, nc)
      }
    }
    class LM {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(cB) {
        this.fov = cB.fov, this.nearPlane = cB.near, this.farPlane = cB.far;
        const Bc = cB.worldMatrix;
        for (let nc = 0; nc < 16; nc++)
          if (this.worldMatrix[nc] !== Bc[nc]) return this.worldMatrix.set(Bc), void this.worldMatrixVersion++
      }
    }
    class gP {
      constructor(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
        let qB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = cB, this.Ir = Bc, this.sceneTask = nc, this.gpuDevice = Vc, this.terrain = Ic, this.meshes = rB, this.particles = uc, this.resources = sc, this.sunShadow = qB, this.zPc = void 0, this.backendName = "WebGPU (Lite)", this.Wrc = void 0, this.modelMeshes = void 0, this.camera = new LM, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Hc(Vc.lost), this.deviceLost = this.refusals.deviceLost, this.zPc = new YM(cB, Mc, Pc, Vc.limits, sc), (0, Uc.H)({
          XB: cB => {
            Cc(cB) && sc.textureSlot(cB)
          },
          loaded: cB => Cc(cB) ? sc.textureLoaded(cB) : null,
          canvasUpdated: (cB, Bc, nc) => {
            Cc(cB) && sc.canvasUpdated(cB, Bc, nc)
          }
        }), this.Wrc = rB.Wrc, this.modelMeshes = rB.modelMeshes, Bc.camera = this.camera
      }
      get castsEntitySunShadows() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.sunShadow) || void 0 === Bc ? void 0 : Bc.tracesEntities) && void 0 !== cB && cB
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(cB) {
        this.modelMeshes.attach(cB.model, cB.sceneMirror);
        const Bc = cB.Ir;
        this.setClearColour(Bc.clearColor.r, Bc.clearColor.g, Bc.clearColor.b), Bc.draw = () => {
          this.drawFrame(cB, Bc)
        }
      }
      render(cB) {
        try {
          this.zPc.sC(), cB.Ir.render()
        } catch (Bc) {
          throw this.refusals.frameFailed(Bc), Bc
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var cB, Bc, nc, Vc;
        const Ic = [...this.particles.describePendingWork(), ...null !== (cB = null === (Bc = this.sunShadow) || void 0 === Bc ? void 0 : Bc.describePendingWork()) && void 0 !== cB ? cB : []],
          rB = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (nc = this.terrain.sceneDepth) && void 0 !== nc && nc.compiling ? 1 : 0) + (null !== (Vc = this.terrain.shadowMask) && void 0 !== Vc && Vc.compiling ? 1 : 0);
        rB > 0 && Ic.push(`${rB} Lite pipelines compiling`);
        const uc = this.terrain.buffersAwaitingVerdict;
        uc > 0 && Ic.push(`${uc} Lite terrain buffers awaiting their out-of-memory verdict`);
        const sc = this.resources.texturesLoading;
        return sc > 0 && Ic.push(`${sc} Lite textures loading`), Ic
      }
      prepareTexture(cB) {
        return null !== this.resources.boundTexture(cB) || this.resources.textureFailed(cB)
      }
      drawFrame(cB, Bc) {
        var nc, Vc, Ic, rB, uc, sc;
        const Mc = Os(cB);
        this.camera.copyFromView(Mc), this.setClearColour(Mc.clearColour[0], Mc.clearColour[1], Mc.clearColour[2]), null === (nc = this.sunShadow) || void 0 === nc || nc.prepare(cB.TB, Mc.eye, null !== (Vc = cB.TB.qI) && void 0 !== Vc ? Vc : null), this.terrain.prepare(cB, Mc), null === (Ic = this.terrain.sceneDepth) || void 0 === Ic || Ic.setPlanes(Mc.near, Mc.far), null === (rB = this.terrain.shadowMask) || void 0 === rB || rB.prepare(Mc), xs(this.sceneTask), this.meshes.prepare(Bc, Mc, cB.model.earthSky, null !== (uc = cB.TB.qI) && void 0 !== uc ? uc : null), this.particles.prepare(Mc);
        const Pc = performance.now();
        this.resources.flushUploads(), null === (sc = this.sunShadow) || void 0 === sc || sc.traceEntities(this.meshes);
        try {
          (0, kB.n)(this.engine, this.lastFrameTime > 0 ? Pc - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = Pc
      }
      setClearColour(cB, Bc, nc) {
        const Vc = this.Ir.clearColor;
        Vc.r = cB, Vc.g = Bc, Vc.b = nc, Vc.a = 1
      }
    }
    const UM = "WebGPU device lost while Lite was starting";

    function bP(cB, Bc) {
      return "object" === typeof cB && null !== cB ? Object.assign(cB, {
        startStep: Bc
      }) : cB
    }
    async function ZM(cB, Bc) {
      const nc = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!nc) throw bP(new Error("No WebGPU adapter"), "no_adapter");
      const Vc = nc.info,
        Ic = {
          vendor: (null === Vc || void 0 === Vc ? void 0 : Vc.vendor) || "unknown vendor",
          renderer: (null === Vc || void 0 === Vc ? void 0 : Vc.architecture) || "unknown renderer",
          version: (null === Vc || void 0 === Vc ? void 0 : Vc.description) || "unknown version"
        },
        rB = function(cB) {
          const Bc = {};
          for (const nc in cB.limits) {
            const Vc = cB.limits[nc];
            "number" === typeof Vc && (Bc[nc] = Vc)
          }
          return Bc
        }(nc);
      let uc;
      cB.style.background = "black";
      try {
        uc = await (0, kB.g)(cB, {
          msaaSamples: Bc.BPc ? 4 : 1,
          requiredLimits: rB,
          alphaMode: "premultiplied"
        })
      } catch (qB) {
        throw bP(qB, "#47" === (null === (sc = qB) || void 0 === sc ? void 0 : sc.message) ? "no_adapter" : "device")
      }
      var sc;
      const Mc = function(cB) {
        return cB._device
      }(uc);
      let Pc = null;
      Mc.lost.then((cB => {
        Pc = cB, console.error(`WebGPU device lost (${cB.reason}): ${cB.message}`)
      }));
      try {
        const nc = await async function(cB, Bc, nc, Vc, Ic, rB) {
          const uc = (0, Xc.c)(cB),
            sc = new Ru(cB, Bc),
            Mc = new iM(Bc),
            Pc = new bs(Bc, sc, (cB => function(cB, Bc) {
              for (const Vc of Gc(cB)) {
                var nc;
                if (Vc._targetSignature === Bc) return null !== (nc = Vc._sceneBG) && void 0 !== nc ? nc : null
              }
              return null
            }(uc, cB))),
            qB = new lM(Bc, sc);
          for (const fc of function(cB, Bc, nc) {
              return [Bc.opaqueRenderable, cB.opaqueRenderable, cB.skyLastRenderable, nc.renderable, Bc.transparentRenderable, cB.transparentRenderable, cB.frontRenderable]
            }(Pc, Mc, qB)) Ac(uc, fc);
          const Oc = function(cB) {
            for (const Bc of Gc(cB))
              if ("Ir" === Bc.name) return Bc;
            throw new Error("Lite: the scene has no render task named scene")
          }(uc);
          Ic && Mc.installSceneDepth(Oc, cB);
          const Tc = rB ? new TM(Bc, rB.entities) : null;
          Mc.sunShadow = Tc, Tc && null !== rB && void 0 !== rB && rB.entities && (Mc.shadowMask = new gM(Bc, Oc, cB, Mc));
          return Pc.sunShadow = Tc, await (0, Xc.f)(uc), new gP(cB, uc, Oc, Bc, Mc, Pc, qB, sc, nc, Vc, Tc)
        }(uc, Mc, cB, Ic, Bc.sceneDepth, Bc.sunShadow);
        if (null !== Pc) {
          const {
            reason: cB,
            message: Bc
          } = Pc;
          throw Object.assign(new Error(`${UM} (${cB}): ${Bc}`), {
            fallbackReason: UM
          })
        }
        return nc
      } catch (qB) {
        throw Mc.destroy(), null === Pc ? qB : bP(qB, "device")
      }
    }
  },
  38872: (cB, Bc, nc) => {
    nc.d(Bc, {
      B: () => ec,
      D: () => fc,
      H: () => mB,
      c: () => Ic,
      g: () => Vc,
      h: () => Tc,
      i: () => qB,
      m: () => tB,
      q: () => rB,
      s: () => sc,
      w: () => Mc,
      y: () => uc
    });
    const Vc = 3,
      Ic = 0,
      rB = 1,
      uc = 2,
      sc = {
        uniform: 3,
        NB: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Mc = 10,
      Pc = "BloxdPackInputs",
      qB = "bloxdPackInputs",
      Oc = [{
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
      Tc = 80;

    function fc() {
      const cB = Oc.map((cB => {
        let {
          name: Bc,
          type: nc
        } = cB;
        return `    ${Bc}: ${nc},\n`
      })).join("");
      return `struct ${Pc} {\n${cB}}\n@group(${Vc}) @binding(${Ic}) var<uniform> ${qB}: ${Pc};\n`
    }

    function mB(cB, Bc) {
      const nc = new DataView(cB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Tc),
        [Vc, Ic, rB, uc, sc, Mc] = Oc;
      nc.setFloat32(Vc.offset, Bc.seconds, !0), nc.setUint32(Ic.offset, Bc.lit ? 1 : 0, !0);
      for (let Pc = 0; Pc < 3; Pc++) nc.setInt32(rB.offset + 4 * Pc, Bc.renderOffset[Pc], !0), nc.setFloat32(uc.offset + 4 * Pc, Bc.Duc[Pc], !0), nc.setFloat32(sc.offset + 4 * Pc, Bc.eyePosition[Pc], !0), nc.setFloat32(Mc.offset + 4 * Pc, Bc.shadowDirection[Pc], !0)
    }

    function ec(cB) {
      const Bc = new Uint32Array(Math.max(1, cB.length));
      return cB.forEach(((cB, nc) => {
        let {
          id: Vc,
          rotation: Ic
        } = cB;
        Bc[nc] = 65535 & Vc | (3 & Ic) << 16
      })), Bc
    }
    const tB = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);