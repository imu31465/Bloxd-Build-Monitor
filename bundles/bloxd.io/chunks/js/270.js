export const id = 270;
export const ids = [270];
export const modules = {
  41643: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => qm,
      g: () => wm,
      j: () => xm,
      m: () => im
    });
    var hm = fm(37330),
      Am = fm(38802),
      am = fm(38795);

    function xm(mm, Tm, fm, hm) {
      const Am = am.u;
      Tm.fill(0), mm.gravity.toArray(Tm, Am.gravity), mm.colorDead.toArray(Tm, Am.colorDead), fm[Am.ramp] = mm.useRampGradients ? 1 : 0;
      const xm = mm.getColorGradients(),
        wm = Em(mm, xm, "colour", hm);
      fm[Am.colorCount] = wm;
      for (let am = 0; am < wm; am++) {
        var Dm;
        const mm = xm[om(xm, am)];
        Tm[Am.colorPositions + am] = mm.gradient, mm.color1.toArray(Tm, Am.color1 + 4 * am), (null !== (Dm = mm.color2) && void 0 !== Dm ? Dm : mm.color1).toArray(Tm, Am.color2 + 4 * am)
      }
      const im = mm.getVelocityGradients(),
        Rm = Em(mm, im, "qq", hm);
      fm[Am.velocityCount] = Rm;
      for (let am = 0; am < Rm; am++) Vm(Tm, Am.qq + 4 * am, im[om(im, am)]);
      const pm = mm.useRampGradients ? mm.getColorRemapGradients() : null,
        Om = Em(mm, pm, "colour remap", hm);
      fm[Am.remapCount] = Om;
      for (let am = 0; am < Om; am++) Vm(Tm, Am.remap + 4 * am, pm[om(pm, am)])
    }

    function wm() {
      return {
        key: [],
        texels: new Uint8Array(4 * am.l)
      }
    }
    const Dm = [];

    function im(mm, Tm) {
      return Rm(mm, Dm), !jm(Dm, Tm.key) && (Tm.key.length = 0, Tm.key.push(...Dm), Tm.key.length > 0 && function(mm, Tm) {
        for (let fm = 0; fm < am.l; fm++) Am.j.GetCurrentGradient(fm / am.l, mm, ((mm, Tm, fm) => {
          hm.Color3.LerpToRef(mm.color, Tm.color, fm, pm)
        })), Tm[4 * fm] = 255 * pm.r, Tm[4 * fm + 1] = 255 * pm.g, Tm[4 * fm + 2] = 255 * pm.b, Tm[4 * fm + 3] = 255
      }(mm.getRampGradients(), Tm.texels), !0)
    }

    function Rm(mm, Tm) {
      Tm.length = 0;
      const fm = mm.useRampGradients ? mm.getRampGradients() : null;
      if (null !== fm && void 0 !== fm && fm.length) {
        Tm.push(fm.length);
        for (const mm of fm) Tm.push(mm.gradient, mm.color.r, mm.color.g, mm.color.b)
      }
    }
    const pm = new hm.Color3;

    function Em(mm, Tm, fm, hm) {
      return Tm ? Tm.length > am.d ? (hm(`particleStops:${fm}`, `GPU particles use the first 2 and last ${am.d-2} of more than ${am.d} ${fm} gradient stops (${mm.name})`), am.d) : Tm.length : 0
    }

    function om(mm, Tm) {
      return Tm < 2 || mm.length <= am.d ? Tm : mm.length - am.d + Tm
    }
    const Om = new Float32Array(am.o),
      Ym = new Uint32Array(Om.buffer);

    function qm(mm, Tm, fm) {
      return xm(mm, Om, Ym, fm), Tm && jm(Ym, Tm) ? null : Ym.slice()
    }

    function jm(mm, Tm) {
      if (mm.length !== Tm.length) return !1;
      for (let fm = 0; fm < mm.length; fm++)
        if (mm[fm] !== Tm[fm]) return !1;
      return !0
    }

    function Vm(mm, Tm, fm) {
      var hm;
      mm[Tm] = fm.gradient, mm[Tm + 1] = fm.factor1, mm[Tm + 2] = null !== (hm = fm.factor2) && void 0 !== hm ? hm : fm.factor1
    }
  },
  41638: (mm, Tm, fm) => {
    function hm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Tm = new Set;
      return (fm, hm) => {
        Tm.has(fm) || (Tm.add(fm), console.warn(mm + hm))
      }
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  41674: (mm, Tm, fm) => {
    fm.d(Tm, {
      createLiteRendererAsync: () => XD,
      liteBabylonBackend: () => rm,
      setPipelineFailureHook: () => UA
    });
    var hm = fm(37330),
      Am = fm(37680),
      am = fm(37967),
      xm = fm(37286),
      wm = fm(37972);
    class Dm extends wm.b {
      constructor() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        super(...Tm), this.color = new hm.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Tm[0].wG().getUniqueId(),
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
          needAlphaBlendingForMesh: mm => mm.visibility < 1 || mm.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const im = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Rm = mm => 1 << im.indexOf(mm),
      pm = Rm("VERTEXCOLOR"),
      Em = Rm("INSTANCES"),
      om = Rm("THIN_INSTANCES"),
      Om = Rm("INSTANCESCOLOR"),
      Ym = Rm("FOG"),
      qm = Rm("LITE_FRONT_LAYER");

    function jm(mm, Tm, fm, hm) {
      let Am = 0;
      return mm.isVerticesDataPresent("color") && (Am |= pm), "none" !== Tm && (Am |= Em), "thin" === Tm && (Am |= om, mm.isVerticesDataPresent("instanceColor") && (Am |= Om)), hm.fogEnabled && mm.applyFog && 0 !== hm.fogMode && (Am |= Ym), fm >= 1 && (Am |= qm), Am
    }

    function Vm(mm, Tm) {
      mm.updateColor4("color", Tm.color, Tm.alpha)
    }
    var Im = fm(37903),
      Km = fm(37488),
      Qm = fm(37357),
      nm = fm(37260),
      Jm = fm(37880),
      cm = fm(37894),
      zm = fm(37276),
      Zm = fm(37281),
      km = fm(37290);
    const bm = nm.b.GLSL;
    class Sm {
      constructor(mm, Tm) {
        this.name = mm, this.Aq = Tm, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.iG = {
          addOnce: mm => {
            this.disposers.push(mm)
          }
        }, this.uniqueId = Tm.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      wG() {
        return this.Aq
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
      needAlphaBlendingForMesh(mm) {
        return (0, zm.Q)(this.model, mm.visibility, mm.hasVertexAlpha)
      }
      needAlphaTestingForMesh(mm) {
        return (0, zm.T)(this.model, mm.visibility, mm.hasVertexAlpha)
      }
      dispose() {
        (0, Km.i)(this);
        for (const mm of this.disposers.splice(0)) mm()
      }
      get model() {
        return (0, zm.cb)(this)
      }
    }
    const em = new WeakSet;

    function Nm(mm) {
      return em.has(mm)
    }

    function Gm(mm) {
      em.add(mm)
    }
    const Xm = {
      create: (mm, Tm) => ((0, Qm.s)(mm, new Sm(mm.name, Tm)), Zm.b.defines()),
      write: () => {},
      addFeature: (mm, Tm) => {
        const fm = mm.mirror;
        Tm.feature === cm.g && Tm.state.dirLightCount > 0 && (mm.disableLighting = !0, (0, zm.$)(mm)), "BLOXD_LIGHTING" in Tm.defines && (0, Km.e)(fm), Tm.feature === Jm.j && ((0, Im.h)(Tm.state, bm), function(mm, Tm) {
          const fm = mm.wG().dO();
          Tm.textures.forEach(((hm, Am) => {
            setTimeout((() => {
              var am, xm;
              const {
                url: wm
              } = hm.source;
              fm.atlasArray(wm, null !== (am = null === (xm = Tm.sources.pixels) || void 0 === xm ? void 0 : xm[Am]) && void 0 !== am ? am : null, Tm.sources.layerWidth).then((fm => {
                (0, Im.c)(mm, Tm, Am, fm, fm.layerWidth, fm.layers, bm)
              })).catch((mm => {
                console.error(`Failed to build texture array for atlas ${Am}`, mm)
              }))
            }))
          }))
        }(fm, Tm.state))
      },
      texture: (mm, Tm, fm) => {
        let {
          data: hm,
          sets: Am
        } = fm;
        var am;
        (Gm(mm), hm) && (mm.uvSet = null !== (am = null === Am || void 0 === Am ? void 0 : Am.coordinatesIndex) && void 0 !== am ? am : 0, (0, Qm.db)(mm.matrix, null !== Am && void 0 !== Am ? Am : {}))
      },
      cube: Gm,
      canvas: (mm, Tm, fm) => {
        let {
          width: hm,
          height: Am,
          mipmaps: am,
          samplingMode: xm = km.e.trilinear,
          hasAlpha: wm = !1,
          wrap: Dm = km.b.clamp
        } = fm;
        const im = mm.dO().createCanvas(hm, Am),
          Rm = new km.h("2d", {
            kind: "canvas",
            width: hm,
            height: Am,
            canvas: im
          }, {
            samplingMode: xm,
            wrapU: Dm,
            wrapV: Dm,
            noMipmap: !am,
            invertY: !0
          });
        return Rm.hasAlpha = wm, Gm(Rm), Rm
      }
    };
    var Pm = fm(37510),
      Hm = fm(37203);
    class ym {
      constructor(mm, Tm, fm) {
        this.engine = mm, this.clearColor = Tm, this.ambientColor = fm, this.onBeforeRenderObservable = new Hm.c, this.onBeforeCameraRenderObservable = new Hm.c, this.onAfterRenderObservable = new Hm.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.VK = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      dO() {
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
      addPendingData(mm) {
        this.pending.push(mm)
      }
      removePendingData(mm) {
        const Tm = this.pending.indexOf(mm); - 1 !== Tm && this.pending.splice(Tm, 1)
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

    function Cm() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const rm = {
      Qfm: Cm,
      shm: (mm, Tm) => {
        const fm = new ym(mm.engine, hm.e.FromArray(Tm.clearColor), hm.Color3.FromArray(Tm.ambientColor));
        (0, xm.d)(Xm, fm), mm.Aq = fm,
          function(mm, Tm) {
            const fm = Object.assign((0, Pm.j)(mm, "camera"), {
              layerMask: 268435455
            });
            mm.model.nodes.setWorldSource(fm.row, mm.model.view.worldMatrix), mm.camera = Tm.activeCamera = fm
          }(mm, fm), (0, Am.h)(mm, ((mm, Tm, fm) => (0, am.f)(mm, Tm, fm, wm.b)))
      },
      Hhm: () => {},
      setBabylonFog: () => {},
      Mhm: Cm,
      thm: () => {},
      linesFromArrays: (mm, Tm, fm) => (0, am.f)(mm, Tm, fm, Dm),
      aq: () => {},
      vhm: Cm
    };
    var sm = fm(41717),
      lm = fm(41727);
    class Mm {
      constructor(mm) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const Tm = new Promise((mm => {
          this.refused = mm
        }));
        this.deviceLost = Promise.race([mm, Tm]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(mm) {
        (function(mm) {
          const {
            name: Tm,
            message: fm
          } = null !== mm && void 0 !== mm ? mm : {};
          return "InvalidStateError" === Tm && "string" === typeof fm && fm.startsWith("GPUDevice.")
        })(mm) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: mm.message,
          framesRefused: !0
        }))
      }
    }
    class um {
      constructor(mm) {
        this.resources = mm, this.matrixKey = {
          yp: 0
        }, this.attributesKey = {
          yp: 0
        }, this.inputs = Object.create(null);
        for (let Tm = 0; Tm < 4; Tm++) this.inputs[`world${Tm}`] = new tm(this.matrixKey, 16 * Tm, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(mm, Tm) {
        this.resources.vertexBufferCreated(this.matrixKey, mm, !0), Tm && this.resources.vertexBufferCreated(this.attributesKey, Tm, !0)
      }
    }
    class Bm extends um {
      constructor(mm, Tm, fm) {
        super(mm), this.mesh = Tm, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const hm = this.inputs;
        let Am = 0;
        for (const {
            size: xm
          }
          of fm) Am += xm;
        for (const {
            name: xm,
            offset: wm,
            size: Dm,
            type: im
          }
          of fm) hm[xm] = new tm(this.attributesKey, 4 * wm, 4 * Am, Dm, !0, im);
        this.rowStride = Am, mm.S_.set(Tm, this);
        const am = Tm.isVerticesDataPresent;
        Tm.isVerticesDataPresent = (mm, fm) => mm in hm || am.call(Tm, mm, fm)
      }
      attach(mm, Tm) {
        this.matrices = mm, this.attributes = Tm, this.bind(mm, Tm), this.mirror(mm, mm.length, mm.length / 16)
      }
      J9(mm) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, mm ? 64 * mm : void 0)
      }
      N9() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(mm, Tm) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * mm, 16 * Tm)
      }
      attributeRows(mm, Tm) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, mm * this.rowStride, Tm * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(mm, Tm, fm) {
        const hm = this.mesh._thinInstanceDataStorage;
        hm.matrixData = mm, hm.matrixBufferSize = Tm, hm.worldMatrices = null, hm.instancesCount = fm
      }
    }
    class Lm extends um {
      constructor(mm, Tm, fm) {
        var hm, Am, am, xm;
        super(mm), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (hm = null === fm || void 0 === fm ? void 0 : fm.interleavedKinds) && void 0 !== hm ? hm : null, this.offsets = null !== (Am = null === fm || void 0 === fm ? void 0 : fm.interleavedOffsets) && void 0 !== Am ? Am : [], this.rowStride = null !== (am = null === fm || void 0 === fm ? void 0 : fm.interleavedRowStride) && void 0 !== am ? am : 0, null === (xm = this.layout) || void 0 === xm || xm.forEach(((mm, Tm) => {
          this.inputs[mm] = new tm(this.attributesKey, 4 * this.offsets[Tm], 4 * this.rowStride, fm.strides[mm])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), mm.batchUploads.set(Tm, this), Tm.iG.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(mm) {
        const Tm = this.packedBatch;
        return Tm.renderSelf ? 0 === mm ? this.packedSource : Tm.instances[mm - 1] : Tm.instances[mm]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(mm, Tm, fm, hm) {
        const Am = (Tm.renderSelf ? 1 : 0) + Tm.rows.length;
        if (this.frame = hm, this.count = Am, this.packedSource = mm, this.packedBatch = Tm, 0 === Am) return;
        if (mm.getWorldMatrix(), 16 * Am > this.matrices.length) {
          let mm = this.matrices.length / 16;
          for (; mm < Am;) mm *= 2;
          this.matrices = new Float32Array(16 * mm), this.attributes &&= new Float32Array(mm * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let am = 0;
        Tm.renderSelf && this.packRow(am++, mm, Tm.row, fm);
        for (let xm = 0; xm < Tm.rows.length; xm++) this.packRow(am++, Tm.instances[xm], Tm.rows[xm], fm);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Am), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Am * this.rowStride)
      }
      packRow(mm, Tm, fm, hm) {
        const Am = this.matrices;
        if (fm < 0) Am.set(Tm.getWorldMatrix().m, 16 * mm);
        else
          for (let im = 0; im < 16; im++) Am[16 * mm + im] = hm[16 * fm + im];
        const am = this.attributes;
        if (!am) return;
        const xm = Tm.RP,
          wm = this.layout;
        for (let im = 0; im < wm.length; im++) {
          var Dm;
          const Tm = null !== (Dm = xm[wm[im]]) && void 0 !== Dm ? Dm : 0,
            fm = mm * this.rowStride + this.offsets[im];
          Tm.toArray ? Tm.toArray(am, fm) : Tm.copyToArray ? Tm.copyToArray(am, fm) : am[fm] = Tm
        }
      }
    }
    class tm {
      constructor(mm, Tm, fm, hm) {
        let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = mm, this.byteOffset = Tm, this.byteStride = fm, this.size = hm, this.instanced = Am, this.type = am, this.normalized = xm
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
    const Um = "CANVAS_ALPHA_ONE",
      dm = `override ${Um}: bool = false;`,
      gm = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Wm(mm, Tm, fm) {
      var hm;
      let Am = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const am = null !== (hm = Tm._colorFormat) && void 0 !== hm ? hm : "bgra8unorm",
        xm = Am ? 15 : 0;
      return fm ? {
        ...mm,
        targets: [{
          format: am,
          blend: {
            color: fm,
            alpha: gm
          },
          writeMask: xm
        }]
      } : {
        ...mm,
        constants: {
          ...mm.constants,
          [Um]: 1
        },
        targets: [{
          format: am,
          writeMask: xm
        }]
      }
    }

    function Fm(mm, Tm) {
      mm._renderables.push(Tm)
    }

    function mT(mm) {
      var Tm, fm;
      return null !== (Tm = null === (fm = mm._frameGraph) || void 0 === fm ? void 0 : fm._tasks) && void 0 !== Tm ? Tm : []
    }

    function TT(mm) {
      return mm._currentEncoder
    }

    function fT(mm) {
      return mm.createBindGroupLayout({
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
    const hT = "greater-equal",
      AT = 2e5,
      aT = 1e5,
      xT = new WeakMap;

    function wT(mm, Tm) {
      let fm = xT.get(mm);
      if (!fm) {
        fm = {
          module: mm.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, xT.set(mm, fm)
      }
      const hm = `${Tm._colorFormat}|${Tm._depthStencilFormat}|${Tm._sampleCount}`;
      let Am = fm.pipelines.get(hm);
      if (!Am) {
        var am;
        const {
          module: xm
        } = fm;
        Am = mm.createRenderPipeline({
          label: `placeholder ${hm}`,
          layout: mm.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: xm,
            entryPoint: "v"
          },
          fragment: {
            module: xm,
            entryPoint: "f",
            targets: [{
              format: null !== (am = Tm._colorFormat) && void 0 !== am ? am : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Tm._depthStencilFormat ? {
            format: Tm._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Tm._sampleCount
          }
        }), fm.pipelines.set(hm, Am)
      }
      return Am
    }

    function DT(mm, Tm, fm) {
      const hm = Tm.eye,
        Am = Tm.viewMatrix;
      mm[0] = hm[0] + Am[2] * fm, mm[1] = hm[1] + Am[6] * fm, mm[2] = hm[2] + Am[10] * fm
    }
    var iT = fm(38014),
      RT = fm(41638),
      pT = fm(37274);
    const ET = Math.PI,
      oT = ET / 1.95,
      OT = [5e-4 / 94, 125e-7, 5e-4 / 18],
      YT = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((mm => {
        let [Tm, fm] = mm;
        return .434 * ET * Math.pow(2 * ET / Tm, 2) * fm
      }));

    function qT(mm, Tm, fm) {
      const {
        up: hm,
        mieDirectionalG: Am
      } = mm, am = 1 - IT(1 - Math.exp(Tm[1] / 45e4), 0, 1), xm = mm.rayleigh - (1 - am), wm = Math.hypot(Tm[0], Tm[1], Tm[2]), Dm = wm > 0 ? 1 / wm : 0, im = fm.sunDir;
      for (let om = 0; om < 3; om++) im[om] = Tm[om] * Dm;
      const Rm = im[0] * hm[0] + im[1] * hm[1] + im[2] * hm[2],
        pm = 1e3 * Math.max(0, 1 - Math.exp(-(oT - Math.acos(IT(Rm, -1, 1))) / 1.5));
      fm.sunE = pm;
      const Em = .2 * mm.turbidity * 1e-17 * mm.mieCoefficient;
      for (let om = 0; om < 3; om++) {
        const mm = OT[om] * xm,
          Tm = YT[om] * Em,
          hm = pm / (mm + Tm);
        fm.inScatterR[om] = mm * hm, fm.inScatterM[om] = Tm * hm, fm.extinctionBeta[om] = 8400 * mm + 1250 * Tm
      }
      return fm.sunsetMix = IT(Math.pow(1 - Rm, 5), 0, 1), fm.sunDiscE = 19e3 * pm, fm.mieScale = (1 - Am * Am) / (4 * ET), fm.mieBase = 1 + Am * Am, fm.mieSlope = 2 * Am, fm
    }
    const jT = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const VT = 1 / function(mm) {
      const {
        A: Tm,
        B: fm,
        C: hm,
        D: Am,
        E: am,
        F: xm
      } = jT;
      return (mm * (Tm * mm + hm * fm) + Am * am) / (mm * (Tm * mm + fm) + Am * xm) - am / xm
    }(1e3);

    function IT(mm, Tm, fm) {
      return Math.min(Math.max(mm, Tm), fm)
    }
    const KT = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function QT(mm, Tm) {
      const fm = new Map(Tm),
        hm = [],
        Am = [],
        am = () => 0 === Am.length || Am[Am.length - 1].active;
      let xm = null;
      const wm = () => {
        const mm = [...fm].filter((mm => {
            let [, Tm] = mm;
            return !0 !== Tm
          })),
          Tm = mm.map((mm => {
            let [Tm] = mm;
            return Tm
          })).join("|");
        xm = mm.length ? new RegExp(`\\b(${Tm})\\b`, "g") : null
      };
      wm();
      for (const Dm of mm.split("\n")) {
        const mm = KT.exec(Dm);
        if (!mm) {
          am() && hm.push(xm ? nT(Dm, xm, fm) : Dm);
          continue
        }
        const Tm = mm[1],
          im = mm[2].trim();
        if ("ifdef" === Tm || "ifndef" === Tm || "if" === Tm) {
          const mm = am(),
            hm = "if" === Tm ? JT(im, fm) : fm.has(im) === ("ifdef" === Tm);
          Am.push({
            active: mm && hm,
            parentActive: mm,
            taken: hm
          })
        } else if ("elif" === Tm || "else" === Tm) {
          const mm = Am[Am.length - 1];
          if (!mm) throw new Error(`#${Tm} without #if`);
          const hm = !mm.taken && ("else" === Tm || JT(im, fm));
          mm.active = mm.parentActive && hm, mm.taken = mm.taken || hm
        } else if ("endif" === Tm) {
          if (!Am.pop()) throw new Error("#endif without #if")
        } else if (am()) {
          const [mm, ...hm] = im.split(/\s+/);
          "undef" === Tm ? fm.delete(mm) : fm.set(mm, !hm.length || hm.join(" ")), wm()
        }
      }
      if (Am.length) throw new Error("Unterminated #if");
      return hm.join("\n")
    }

    function nT(mm, Tm, fm) {
      return mm.replace(Tm, (mm => {
        const Tm = fm.get(mm);
        return "string" === typeof Tm ? Tm : mm
      }))
    }

    function JT(mm, Tm) {
      var fm;
      const hm = null !== (fm = mm.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== fm ? fm : [];
      let Am = 0;
      const am = () => hm[Am],
        xm = () => hm[Am++],
        wm = mm => {
          const fm = /^\d/.test(mm) ? mm : Tm.get(mm);
          return "string" === typeof fm ? parseInt(fm) : Number.NaN
        },
        Dm = () => {
          const mm = xm();
          if ("!" === mm) return !Dm();
          if ("(" === mm) {
            const mm = Rm();
            return xm(), mm
          }
          if ("defined" === mm) {
            const mm = "(" === am();
            mm && xm();
            const fm = xm();
            return mm && xm(), Tm.has(fm)
          }
          const fm = am();
          if ("==" === fm || "!=" === fm || ">" === fm || "<" === fm || ">=" === fm || "<=" === fm) {
            xm();
            const Tm = wm(mm),
              hm = wm(xm());
            if (Number.isNaN(Tm) || Number.isNaN(hm)) return !1;
            switch (fm) {
              case "==":
                return Tm === hm;
              case "!=":
                return Tm !== hm;
              case ">":
                return Tm > hm;
              case "<":
                return Tm < hm;
              case ">=":
                return Tm >= hm;
              default:
                return Tm <= hm
            }
          }
          return Tm.has(mm)
        },
        im = () => {
          let mm = Dm();
          for (;
            "&&" === am();) {
            xm();
            const Tm = Dm();
            mm = mm && Tm
          }
          return mm
        },
        Rm = () => {
          let mm = im();
          for (;
            "||" === am();) {
            xm();
            const Tm = im();
            mm = mm || Tm
          }
          return mm
        },
        pm = Rm();
      if (Am !== hm.length) throw new Error(`Cannot evaluate #if ${mm}`);
      return pm
    }
    var cT = fm(37267),
      zT = fm(37590),
      ZT = fm(37595),
      kT = fm(40776),
      bT = fm(38850);
    const ST = 32,
      eT = [10, 3, 10],
      NT = [21, 7, 21],
      GT = NT[0] * NT[1] * NT[2],
      XT = 0,
      PT = 1,
      HT = 2,
      yT = 3,
      CT = 64,
      rT = 512,
      sT = 4 * GT,
      lT = 1536,
      MT = sT + GT * lT,
      uT = 1073741824,
      BT = MT + 1;

    function LT(mm, Tm) {
      const fm = mm % Tm;
      return fm < 0 ? fm + Tm : fm
    }

    function vT(mm, Tm, fm) {
      return hm = LT(mm, NT[0]), Am = LT(Tm, NT[1]), am = LT(fm, NT[2]), hm + NT[0] * (Am + NT[1] * am);
      var hm, Am, am
    }

    function tT(mm, Tm, fm) {
      return mm + 8 * (Tm + 8 * fm)
    }

    function UT(mm, Tm, fm) {
      return mm + 4 * (Tm + 4 * fm)
    }
    const dT = 65535,
      gT = 0,
      WT = 1,
      FT = 2,
      mf = 3;

    function Tf(mm) {
      return Math.ceil(mm * mm / 32)
    }
    const ff = 8192,
      hf = 1 << 18,
      Af = 65536,
      af = 294912,
      xf = 128,
      wf = 4096,
      Df = 16,
      Rf = 16385,
      pf = 81921,
      Ef = 147457,
      of = 4194304;
    const Of = [0, 0, 0],
      Yf = [0, 0, 0];

    function qf(mm, Tm, fm, hm) {
      ! function(mm, Tm, fm) {
        const [hm, Am, am] = [mm[0], mm[1], mm[2]];
        let xm, wm, Dm;
        Math.abs(Am) < .99 ? (xm = am, wm = 0, Dm = -hm) : (xm = -Am, wm = hm, Dm = 0);
        const im = Math.hypot(xm, wm, Dm);
        Tm[0] = xm / im, Tm[1] = wm / im, Tm[2] = Dm / im, fm[0] = Am * Tm[2] - am * Tm[1], fm[1] = am * Tm[0] - hm * Tm[2], fm[2] = hm * Tm[1] - Am * Tm[0]
      }(hm, Of, Yf);
      const Am = 1 / 32;
      for (const [am, xm] of [
          [0, Of],
          [4, Yf]
        ]) {
        for (let fm = 0; fm < 3; fm++) mm[Tm + am + fm] = xm[fm] * Am;
        mm[Tm + am + 3] = -(xm[0] * fm[0] + xm[1] * fm[1] + xm[2] * fm[2]) * Am
      }
    }
    class jf {
      constructor() {
        this.words = new Uint32Array(Ef), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Go(mm, Tm) {
        this.parts = 0, this.refs = 0, this.view = mm, this.viewAt = Tm;
        const fm = mm[Tm + 1] * mm[Tm + 6] - mm[Tm + 2] * mm[Tm + 5],
          hm = mm[Tm + 2] * mm[Tm + 4] - mm[Tm] * mm[Tm + 6],
          Am = mm[Tm] * mm[Tm + 5] - mm[Tm + 1] * mm[Tm + 4],
          am = Math.hypot(fm, hm, Am) || 1;
        this.light[0] = fm / am, this.light[1] = hm / am, this.light[2] = Am / am
      }
      add(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= wf || ! function(mm, Tm, fm) {
            const hm = mm[Tm],
              Am = mm[Tm + 1],
              am = mm[Tm + 2],
              xm = mm[Tm + 3],
              wm = mm[Tm + 4],
              Dm = mm[Tm + 5],
              im = mm[Tm + 6],
              Rm = mm[Tm + 7],
              pm = mm[Tm + 8],
              Em = mm[Tm + 9],
              om = mm[Tm + 10],
              Om = mm[Tm + 11],
              Ym = mm[Tm + 12],
              qm = mm[Tm + 13],
              jm = mm[Tm + 14],
              Vm = mm[Tm + 15],
              Im = hm * Dm - Am * wm,
              Km = hm * im - am * wm,
              Qm = hm * Rm - xm * wm,
              nm = Am * im - am * Dm,
              Jm = Am * Rm - xm * Dm,
              cm = am * Rm - xm * im,
              zm = pm * qm - Em * Ym,
              Zm = pm * jm - om * Ym,
              km = pm * Vm - Om * Ym,
              bm = Em * jm - om * qm,
              Sm = Em * Vm - Om * qm,
              em = om * Vm - Om * jm,
              Nm = Im * em - Km * Sm + Qm * bm + nm * km - Jm * Zm + cm * zm;
            if (!(Math.abs(Nm) > 1e-12)) return !1;
            const Gm = 1 / Nm;
            return fm[0] = (Dm * em - im * Sm + Rm * bm) * Gm, fm[1] = (am * Sm - Am * em - xm * bm) * Gm, fm[2] = (qm * cm - jm * Jm + Vm * nm) * Gm, fm[3] = (om * Jm - Em * cm - Om * nm) * Gm, fm[4] = (im * km - wm * em - Rm * Zm) * Gm, fm[5] = (hm * em - am * km + xm * Zm) * Gm, fm[6] = (jm * Qm - Ym * cm - Vm * Km) * Gm, fm[7] = (pm * cm - om * Qm + Om * Km) * Gm, fm[8] = (wm * Sm - Dm * km + Rm * zm) * Gm, fm[9] = (Am * km - hm * Sm - xm * zm) * Gm, fm[10] = (Ym * Jm - qm * Qm + Vm * Im) * Gm, fm[11] = (Em * Qm - pm * Jm - Om * Im) * Gm, fm[12] = (Dm * Zm - wm * bm - im * zm) * Gm, fm[13] = (hm * bm - Am * Zm + am * zm) * Gm, fm[14] = (qm * Km - Ym * nm - jm * Im) * Gm, fm[15] = (pm * nm - Em * Km + om * Im) * Gm, !0
          }(Tm, fm, this.inverse)) return;
        const {
          view: hm,
          viewAt: Am
        } = this, am = fm;
        let xm = 1 / 0,
          wm = 1 / 0,
          Dm = -1 / 0,
          im = -1 / 0,
          Rm = -1 / 0;
        const [pm, Em, om] = this.light;
        for (let Qm = 0; Qm < 8; Qm++) {
          const fm = 1 & Qm ? mm.hi[0] : mm.lo[0],
            Om = 2 & Qm ? mm.hi[1] : mm.lo[1],
            Ym = 4 & Qm ? mm.hi[2] : mm.lo[2],
            qm = fm * Tm[am] + Om * Tm[am + 4] + Ym * Tm[am + 8] + Tm[am + 12],
            jm = fm * Tm[am + 1] + Om * Tm[am + 5] + Ym * Tm[am + 9] + Tm[am + 13],
            Vm = fm * Tm[am + 2] + Om * Tm[am + 6] + Ym * Tm[am + 10] + Tm[am + 14],
            Im = hm[Am] * qm + hm[Am + 1] * jm + hm[Am + 2] * Vm + hm[Am + 3],
            Km = hm[Am + 4] * qm + hm[Am + 5] * jm + hm[Am + 6] * Vm + hm[Am + 7];
          xm = Math.min(xm, Im), wm = Math.min(wm, Km), Dm = Math.max(Dm, Im), im = Math.max(im, Km), Rm = Math.max(Rm, pm * qm + Em * jm + om * Vm)
        }
        if (Dm < -1 || im < -1 || xm >= 1 || wm >= 1) return;
        const Om = this.parts++,
          Ym = this.rects;
        Ym[4 * Om] = Vf(xm), Ym[4 * Om + 1] = Vf(wm), Ym[4 * Om + 2] = Vf(Dm), Ym[4 * Om + 3] = Vf(im);
        const qm = this.inverse,
          {
            cell: jm,
            dims: Vm,
            lo: Im
          } = mm,
          Km = pf + Om * Df;
        for (let Qm = 0; Qm < 3; Qm++) this.floats[Km + 4 * Qm] = qm[Qm] / jm, this.floats[Km + 4 * Qm + 1] = qm[4 + Qm] / jm, this.floats[Km + 4 * Qm + 2] = qm[8 + Qm] / jm, this.floats[Km + 4 * Qm + 3] = (qm[12 + Qm] - Im[Qm]) / jm;
        this.words[Km + 12] = mm.at, this.floats[Km + 13] = Rm + .001 * (1 + Math.abs(Rm)), this.words[Km + 14] = Vm[0] | Vm[1] << 8 | Vm[2] << 16
      }
      finish() {
        const mm = xf,
          {
            counts: Tm,
            rects: fm,
            words: hm
          } = this;
        Tm.fill(0);
        let Am = 0,
          am = 0;
        for (; am < this.parts; am++) {
          const hm = 4 * am,
            xm = (fm[hm + 2] - fm[hm] + 1) * (fm[hm + 3] - fm[hm + 1] + 1);
          if (Am + xm > 65536) break;
          Am += xm;
          for (let Am = fm[hm + 1]; Am <= fm[hm + 3]; Am++)
            for (let am = fm[hm]; am <= fm[hm + 2]; am++) Tm[Am * mm + am]++
        }
        let xm = 0;
        for (let Dm = 0; Dm < 16384; Dm++) hm[Dm] = xm, xm += Tm[Dm], Tm[Dm] = hm[Dm];
        hm[16384] = xm;
        for (let Dm = 0; Dm < am; Dm++) {
          const Am = 4 * Dm;
          for (let am = fm[Am + 1]; am <= fm[Am + 3]; am++)
            for (let xm = fm[Am]; xm <= fm[Am + 2]; xm++) hm[Rf + Tm[am * mm + xm]++] = Dm
        }
        const wm = this.floats;
        for (let Dm = 0; Dm < 16384; Dm++) {
          const mm = Rf + hm[Dm],
            Tm = mm + Math.min(hm[Dm + 1] - hm[Dm], 64);
          for (let fm = mm + 1; fm < Tm; fm++) {
            const Tm = hm[fm],
              Am = wm[81934 + Tm * Df];
            let am = fm - 1;
            for (; am >= mm && wm[81934 + hm[am] * Df] < Am; am--) hm[am + 1] = hm[am];
            hm[am + 1] = Tm
          }
        }
        this.refs = Am
      }
    }

    function Vf(mm) {
      return Math.min(127, Math.max(0, Math.floor((.5 * mm + .5) * xf)))
    }

    function If(mm, Tm, fm, hm, Am) {
      for (let am = 0; am < 4; am++)
        for (let xm = 0; xm < 4; xm++) Am[4 * am + xm] = mm[Tm + 4 * am] * fm[hm + xm] + mm[Tm + 4 * am + 1] * fm[hm + 4 + xm] + mm[Tm + 4 * am + 2] * fm[hm + 8 + xm] + mm[Tm + 4 * am + 3] * fm[hm + 12 + xm]
    }

    function Kf(mm, Tm, fm, hm, Am) {
      const am = mm[0] - Tm,
        xm = mm[1] - fm,
        wm = mm[2] - hm,
        Dm = mm[3] - Tm,
        im = mm[4] - fm,
        Rm = mm[5] - hm,
        pm = mm[6] - Tm,
        Em = mm[7] - fm,
        om = mm[8] - hm;
      if (Math.min(am, Dm, pm) > Am || Math.max(am, Dm, pm) < -Am) return !1;
      if (Math.min(xm, im, Em) > Am || Math.max(xm, im, Em) < -Am) return !1;
      if (Math.min(wm, Rm, om) > Am || Math.max(wm, Rm, om) < -Am) return !1;
      const Om = Dm - am,
        Ym = im - xm,
        qm = Rm - wm,
        jm = pm - Dm,
        Vm = Em - im,
        Im = om - Rm,
        Km = Ym * Im - qm * Vm,
        Qm = qm * jm - Om * Im,
        nm = Om * Vm - Ym * jm;
      if (Math.abs(Km * am + Qm * xm + nm * wm) > Am * (Math.abs(Km) + Math.abs(Qm) + Math.abs(nm))) return !1;
      const Jm = [Om, Ym, qm, jm, Vm, Im, am - pm, xm - Em, wm - om];
      for (let cm = 0; cm < 3; cm++) {
        const mm = Jm[3 * cm],
          Tm = Jm[3 * cm + 1],
          fm = Jm[3 * cm + 2];
        for (let hm = 0; hm < 3; hm++) {
          const Om = 0 === hm ? 0 : 1 === hm ? fm : -Tm,
            Ym = 0 === hm ? -fm : 1 === hm ? 0 : mm,
            qm = 0 === hm ? Tm : 1 === hm ? -mm : 0,
            jm = Om * am + Ym * xm + qm * wm,
            Vm = Om * Dm + Ym * im + qm * Rm,
            Im = Om * pm + Ym * Em + qm * om,
            Km = Am * (Math.abs(Om) + Math.abs(Ym) + Math.abs(qm));
          if (Math.min(jm, Vm, Im) > Km || Math.max(jm, Vm, Im) < -Km) return !1
        }
      }
      return !0
    }
    const Qf = new Float32Array(1);
    new Uint32Array(Qf.buffer);
    var nf = fm(38855);

    function Jf(mm) {
      const [Tm, fm, hm] = nf.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${mm.group}) @binding(${mm.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Tm-1}, ${fm-1}, ${hm-1});\n}\n`
    }

    function zf(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Am, am, xm] = NT, [wm, Dm, im] = eT, Rm = Math.log2(ST), pm = hm ? "var<private> bloxdSpCrossed: bool;\n" : "", Em = hm ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${mm.group}) @binding(${mm.lE}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${mm.group}) @binding(${mm.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${fm?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${pm}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${WT}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${FT}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${fm?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${mf}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Am}, ${am}, ${xm});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Am} * (s.y + ${am} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${wm}, ${Dm}, ${im}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Rm}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${yT}u) {\n\t\treturn named && state == ${HT}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${sT}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${MT}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Tm?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Tm?`\t\tif (exits && step > 0 && step % ${bf} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Rm}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${XT}u || kind == ${PT}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${HT}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${sT}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Em}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const Zf = {
      group: 0,
      uniform: 0,
      lE: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function kf() {
      const mm = Zf;
      return `${Jf(mm)}${zf(mm,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${nf.b}>,\n}\n@group(${mm.group}) @binding(${mm.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${mm.group}) @binding(${mm.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${nf.k})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${nf.b}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${nf.f}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const bf = 2;
    const Sf = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function ef(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const hm = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Tm.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Am = "trace" === fm || "lit" === fm,
        am = "maskEdge" === fm ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        xm = Am ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Tm.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Tm.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===fm?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${am};\n`;
      return `${hm}${mm.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Am?function(){const[mm,Tm,fm]=nf.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${mm}.0, ${Tm}.0, ${fm}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${xm}}\n`:""}${mm.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Tm.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Tm.renderOffset});\n}\n`:""}`
    }
    const Nf = "bloxdSpOwnTexture";

    function Gf(mm) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${mm.texture}) - 1u)))`
    }
    const Xf = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${iT.e.map((mm=>{let[Tm,fm]=mm;return`\tbloxdSpOut.${Tm} = (bloxdSpWord & ${fm}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Pf(mm) {
      return `bloxdSpFlags(${mm})`
    }
    const Hf = `${kT.g}.eyePosition`;

    function yf(mm, Tm, fm, hm, Am) {
      const am = mm.indexOf(Tm);
      if (am < 0 || mm.indexOf(Tm, am + 1) >= 0) throw new Error(`Lite's ${Am} program changed at the shader pack ${hm} hook: ${am<0?"no":"more than one"} anchor (lite/${Am}ShaderPack.ts)`);
      return mm.slice(0, am) + fm + mm.slice(am + Tm.length)
    }

    function Cf(mm) {
      return mm.sunShadow || mm.airShadow
    }

    function rf(mm, Tm) {
      return Tm && Cf(mm)
    }
    const sf = {
      group: kT.e,
      ...kT.k
    };

    function lf(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!Cf(mm)) return "";
      if (Tm) {
        const Tm = sf,
          Am = "trace" === fm || "lit" === fm;
        let am = "";
        mm.sunShadow && (am = Am ? `${zf(Tm,!0,"lit"===fm)}${hm=Tm,`@group(${hm.group}) @binding(${hm.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${hm.group}) @binding(${hm.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(mm, Tm, fm) {
          const hm = `@group(${mm}) @binding(${Tm}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return fm ? `${hm}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Sf}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((mm=>`\t{\n\t\tlet o = vec2i(${mm});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : hm
        }(Tm.group, kT.n, "maskEdge" === fm));
        const xm = {
          shadowDirection: `${kT.g}.shadowDirection`,
          renderOffset: `${kT.g}.renderOffset`,
          eyePosition: `${kT.g}.eyePosition`
        };
        return `${Jf(Tm)}${am}${function(mm){const[Tm,fm,hm]=nf.o;return`@group(${mm.group}) @binding(${mm.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${mm.group}) @binding(${mm.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Tm}.0, ${fm}.0, ${hm}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Tm)}${ef(mm,xm,fm)}`
      }
      var hm;
      return `${mm.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${mm.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Mf(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Tm) return "";
      const am = (xm = "fragmentInputs.vPositionW", wm = mm.sunShadow ? {
        normal: fm,
        flags: hm
      } : null, `\n\tbloxdSpShadowPosition = ${xm};\n${wm?`\tbloxdSpShadowNormal = normalize(${wm.normal});\n\tbloxdSpShadowEmissive = (${wm.flags} & ${iT.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${wm.flags} & ${iT.h}u) != 0u;\n`:""}`);
      var xm, wm;
      return mm.sunShadow && ("mask" === Am || "maskEdge" === Am) ? `${am}${Dm="fragmentInputs.position",im="maskEdge"===Am,`\n\tbloxdSpShadowPixel = vec2i(${Dm}.xy);\n${im?`\tbloxdSpShadowZ = ${Dm}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Dm}.z), dpdy(${Dm}.z));\n`:""}`}` : am;
      var Dm, im
    }
    const uf = "bloxdSpTextureRotation",
      Bf = "bloxdSpTextureLayers",
      Lf = `@group(${kT.e}) @binding(${kT.q}) var<storage, read> ${Bf}: array<u32>;\n`;

    function vf(mm) {
      return `\tvertexOutputs.vPackTexture = ${Bf}[min(u32(${mm}), arrayLength(&${Bf}) - 1u)];\n`
    }

    function tf(mm) {
      return void 0 !== mm.uv
    }

    function Uf(mm) {
      if (!mm) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (tf(mm)) return function(mm) {
        const {
          texture: Tm,
          cells: fm,
          layers: hm
        } = mm, Am = `textureDimensions(${Tm}, bloxdSpLevel)`, am = fm ? `max(vec2u(vec2f(${Am}) / ${fm}), vec2u(1u))` : Am, xm = fm ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${am};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${fm}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${fm}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Tm}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Am} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${am};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Tm}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let wm;
        if (fm)
          if (1 === hm.length) wm = `\treturn bloxdSpOwnTexel(${hm[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const mm = hm.length - 1;
            wm = `\tvar bloxdSpColour = bloxdSpOwnTexel(${hm[mm]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Tm = mm - 1; Tm >= 0; Tm--) wm += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${hm[Tm]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            wm += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else wm = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${mm.id?`var<private> ${Nf}: u32;\n`:""}${xm}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Gf(mm)};\n\treturn ${am};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${mm.id?Nf:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Gf(mm)};\n${wm}}\n`
      }(mm);
      const Tm = mm,
        fm = mm => {
          const fm = mm > 0 ? `bloxdSpLayer - ${Tm.layers*mm}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${mm}, ${Tm.sampler}, bloxdSpTurned, ${fm}, round(bloxdSpMipLevel));`
        };
      let hm = "";
      for (let am = 0; am < Tm.count - 1; am++) hm += `\tif (bloxdSpLayer < ${Tm.layers*(am+1)}u) {\n\t\t${fm(am)}\n\t}\n`;
      const Am = Tm.frame ? `${Tm.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${uf}: u32;\n${Lf}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${uf} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${uf} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${uf} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Am}${hm}\t${fm(Tm.count-1)}\n}\n`
    }

    function df(mm, Tm, fm) {
      return !!mm.surface && "bloxdDefaultSurface" !== mm.surface && function(mm, Tm) {
        return "liquid" === Tm || !mm
      }(Tm, fm)
    }

    function gf(mm, Tm) {
      return mm.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Tm.vertexLocalPosition}, ${Pf(Tm.vertexFlags)});\n\t\tlet bloxdSpVertex = ${mm.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Wf(mm, Tm, fm, hm, Am) {
      if (!mm.surface) return "";
      const am = (mm, Tm) => `\n\tlet bloxdSpTexelUV = ${mm};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Tm}) - 1u));`;
      let xm = "",
        wm = "0u, 0u, vec2f(0.0), 0.0";
      const Dm = hm && tf(hm) ? hm : null,
        im = hm && !tf(hm) ? hm : null;
      if (Dm) {
        xm = `${Dm.id?`\n\tlet bloxdSpTexture = ${Dm.id};\n\t${Nf} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Dm.uv};${am(function(mm,Tm){var fm;return`${null!==(fm=mm.levelUv)&&void 0!==fm?fm:mm.cells?`${Tm} / ${mm.cells}`:Tm} * vec2f(textureDimensions(${mm.texture}))`}(Dm,"bloxdSpUv"),Dm.texture)}`, wm = (Dm.id ? `${Nf}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else im && (xm = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${uf} = bloxdSpTexture >> 16u;${am(`fragmentInputs.vMainUV1 * ${(0,cT.qb)(im.width)}`,"textureAtlas0")}`, wm = `bloxdSpTexture & 0xffffu, ${uf}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Rm = Am.overlayColour,
        pm = Rm ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Em = "bloxdDefaultSurface" !== mm.surface || Rm ? `\n\tbaseColor = vec4f(${pm}, baseColor.a);` : "",
        om = df(mm, Tm, fm) ? `\n\t${Am.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${xm}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Am.alpha}, ${Am.enchantTier}, ${Am.enchantColour}, ${Am.enchantSpeed}, ${null!==Rm&&void 0!==Rm?Rm:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Am.normal}, ${Am.localPosition}, ${Pf(Am.flags)}, ${wm});\n\tlet bloxdSpSurface = ${mm.surface}(bloxdSpSurfaceIn);${Em}${om}\n`
    }
    const Ff = "bloxdSpLightIn";

    function mh(mm, Tm, fm, hm) {
      if (!mm.light) return "";
      const Am = Tm ? `${cT.i}.rgb, ${cT.i}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${cT.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: am,
          diffuse: xm,
          emissive: wm,
          ambient: Dm,
          fogColour: im,
          fogAlpha: Rm,
          normal: pm
        } = hm;
      return `\tvar ${Ff} = BloxdLightIn(vec3f(0.0), ${fm?am:"0.0"}, ${xm}, ${wm}, ${Dm}, ${Am}, ${im}, ${Rm}, fragmentInputs.vPositionW, ${pm}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Ff}.litColour = bloxdLitColour(bloxdSpSurface, ${Ff});\n`
    }

    function Th(mm) {
      return mm.light ? `\n\t{\n\t\tlet bloxdSpLight = ${mm.light}(bloxdSpSurface, ${Ff});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const fh = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      hh = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      Ah = "\treturn color;\n}",
      ah = {
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
    const xh = Object.freeze({});

    function wh(mm) {
      var Tm;
      return !(null === (Tm = (0, bT.c)(mm)) || void 0 === Tm || !Tm.sceneDepth)
    }

    function Dh(mm) {
      const Tm = (0, bT.c)(mm);
      return !!Tm && df(Tm.hooks, Tm.strict, Tm.program)
    }

    function ih(mm, Tm, fm, hm) {
      return yf(mm, Tm, fm, hm, "terrain")
    }

    function Rh(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const am = function(mm) {
          return (0, bT.b)(mm.packVariant, mm.liquid ? "liquid" : "terrain")
        }(mm),
        {
          hooks: xm
        } = am,
        wm = rf(am, hm),
        Dm = "edge" === Am ? "maskEdge" : "plain" === Am ? "mask" : "trace",
        im = gf(xm, ah);
      im && (Tm = ih(Tm, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${im}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Rm = "atlas" === mm.texture ? {
          count: mm.atlasCount,
          layers: mm.atlasLayers,
          width: mm.J7,
          sampler: "atlasSampler",
          frame: mm.animated ? fm : null
        } : null,
        pm = `${am.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Mf(am,wm,ah.normal,ah.flags,Dm)}${Wf(xm,am.strict,am.program,Rm,ah)}`;
      pm && (Tm = ih(Tm, fh, `${fh.slice(0,-1)}${pm}`, "surface"));
      const Em = Th(xm);
      return Em && (Tm = ih(Tm, hh, `${mh(xm,mm.lighting,mm.dirLightCount>0,ah)}${hh}`, "light input"), Tm = ih(Tm, Ah, `${Em.slice(1)}${Ah}`, "light")), `${(0,kT.v)()}${am.sceneDepth?`@group(${kT.e}) @binding(${kT.i}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${Hf};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${lf(am,wm,Dm)}${Uf(Rm)}${Xf}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${am.code}${Tm}`
    }
    const ph = nm.b.WGSL;

    function Eh(mm) {
      return void 0 !== mm.packVariant
    }
    const oh = {
        Uhm: 0,
        dhm: 4,
        ghm: 8,
        Whm: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      Oh = oh.aoLevels + 4,
      Yh = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      qh = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      jh = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      Vh = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      Ih = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      Kh = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      Qh = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      nh = 0,
      Jh = 3,
      ch = 4,
      zh = 5,
      Zh = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${zT.e}, ${zT.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${zT.e}, ${zT.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      kh = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((mm=>ZT.b>>mm&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const bh = {
      DE: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: mm => `animDataPerTex[${mm}]`
    };

    function Sh(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bh;
      return `\n\tlet atlasIdxIn = ${mm};\n\tlet animTick = ${fm.DE};\n\tlet animTickStride = ${fm.stride};\n\tlet numAnimTextures = ${fm.count};\n\t${(0,Jm.f)(nm.b.WGSL,fm.perTexture)}\n\t${Tm}animLayer;\n`
    }

    function eh(mm) {
      const Tm = (Tm, fm) => {
        const hm = Tm > 0 ? `fragmentInputs.texAtlasIndex - ${mm.atlasLayers.toFixed(1)} * ${Tm.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${fm?"textureSampleLevel":"textureSample"}(textureAtlas${Tm}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${hm}))${fm?", atlasLod":""})`
      };
      if (1 === mm.atlasCount) return `baseColor = ${Tm(0,!1)};`;
      let fm = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,cT.qb)(mm.J7)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let hm = 0; hm < mm.atlasCount; hm++) {
        const Am = mm.atlasLayers * (hm + 1) - .5;
        fm += `${hm>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,cT.qb)(Am)}) {\n\t\tbaseColor = ${Tm(hm,!0)};\n\t}`
      }
      return fm
    }

    function Nh(mm) {
      return `terrain-${mm.texture}${"atlas"===mm.texture?mm.atlasCount:""}${mm.animated?"-anim":""}${mm.alphaTest?"-test":""}${mm.lighting?"-lit":""}-dir${mm.dirLightCount}${mm.packed?"-packed":""}${Eh(mm)?`-sp${mm.packVariant}`:""}${mm.liquid?"-liquid":""}${mm.resting?"-rest":""}`
    }

    function Gh(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const hm = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const fm = "none" !== mm.texture,
          hm = "atlas" === mm.texture,
          Am = mm.dirLightCount > 0,
          am = Eh(mm);
        if (mm.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${mm.dirLightCount}`);
        let xm = 1,
          wm = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (hm) {
          mm.animated && (wm += `@group(2) @binding(${xm++}) var<storage, read> animDataPerTex: array<f32>;\n`), wm += `@group(2) @binding(${xm++}) var atlasSampler: sampler;\n`;
          for (let Tm = 0; Tm < mm.atlasCount; Tm++) wm += `@group(2) @binding(${xm++}) var textureAtlas${Tm}: texture_2d_array<f32>;\n`
        } else "single" === mm.texture && (wm += `@group(2) @binding(${xm++}) var diffuseSamplerSampler: sampler;\n`, wm += `@group(2) @binding(${xm++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Dm = function(mm) {
            const Tm = Qh,
              fm = "none" !== mm.texture,
              hm = "atlas" === mm.texture,
              Am = Eh(mm);
            return mm.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${fm?"uv: vec2f,":""}\n\t${hm?"texAtlasIndices: f32,":""}\n\t${mm.lighting?"aPackedLightLevels: f32,":""}\n\t${Am?"blockFlagWords: vec2u,":""}\n}\n${Zh}\n${kh}\n${"single"===mm.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${fm?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===mm.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${hm?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${mm.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Am?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Tm.position}) position: vec3f,\n\t@location(${Tm.normal}) normal: vec4f,\n\t@location(${Tm.color}) color: vec4f,\n\t${fm?`@location(${Tm.uv}) uv: vec2f,`:""}\n\t${mm.lighting?`@location(${Tm.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Am?`@location(${Tm.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(mm),
          im = `\n${Vh}\n${qh}\n${jh}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${wm}\n${dm}\n${Dm.declarations}\nstruct Varyings {\n\t${"none"===Tm?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${mm.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Am?"@location(5) vTerrainLambert: f32,":""}\n\t${fm?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${hm?"@location(7) texAtlasIndex: f32,":""}\n\t${mm.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${am?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${am&&hm?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${mm.resting?"":(0,cT.r)(ph)}\n${Kh}\n\n@vertex\nfn mainVertex(${Dm.parameter}) -> Varyings {\n\t${Dm.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${am?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${iT.c.placed}u;`:""}\n\t${am&&hm?vf("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${mm.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${fm?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${hm?function(mm){return mm?Sh("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(mm.animated):""}\n\t${"single"===mm.texture&&mm.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,cT.X)(ph)}\n\t${(0,cT.I)(ph,mm.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${mm.resting?"":Ih}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${hm?eh(mm):""}\n\t${"single"===mm.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${fm?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${mm.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Am?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Um}));\n\t${Eh(mm)?(0,cT.ib)(nm.b.WGSL):(0,cT.Q)(ph)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Rm = new Set;
        mm.lighting && Rm.add("BLOXD_LIGHTING");
        Am && Rm.add("BLOXD_TERRAIN_DIRECTIONAL");
        return QT(im, new Map([...Rm].map((mm => [mm, !0]))))
      }(mm, fm);
      if (!Eh(mm)) return hm;
      const Am = Rh(mm, hm, Sh, Tm, fm);
      return "none" === fm ? Am : `${Am}${function(mm){const Tm="none"!==mm.texture&&mm.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${mm.resting?"":Ih}\n\t${mm.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Tm&&"atlas"===mm.texture?eh(mm):""}\n\t${Tm&&"single"===mm.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Tm?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${iT.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(mm)}`
    }
    const Xh = new Map([
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

    function Ph(mm, Tm) {
      const fm = new Map;
      let hm = 0;
      const Am = [],
        am = [],
        xm = [];
      for (const im of Tm) {
        var wm, Dm;
        const Tm = null !== (wm = im.type.trim().split(/\s+/).pop()) && void 0 !== wm ? wm : im.type,
          Rm = Xh.get(Tm);
        if (!Rm) throw new Error(`Lite: no uniform layout for ${im.name}: ${im.type}`);
        const pm = null !== (Dm = im.arraySize) && void 0 !== Dm ? Dm : 0,
          Em = pm ? 4 : Rm.align;
        hm = Math.ceil(hm / Em) * Em;
        const om = pm ? 4 * Math.ceil(Rm.floats / 4) : Rm.floats;
        if (fm.set(im.name, {
            offset: hm,
            floats: Rm.floats,
            arraySize: pm,
            stride: om
          }), pm && Rm.floats <= 2) {
          const Tm = `${mm}_${xm.length}_strided`;
          am.push(`struct ${Tm} {\n\t@size(16) el: ${Rm.wgsl},\n}`), xm.push(im.name), Am.push(`\t@align(16) ${im.name}: array<${Tm}, ${pm}>,`)
        } else pm ? Am.push(`\t@align(16) ${im.name}: array<${Rm.wgsl}, ${pm}>,`) : Am.push(`\t${im.name}: ${Rm.wgsl},`);
        hm += pm ? om * pm : Rm.floats
      }
      return {
        slots: fm,
        floats: Math.max(4, 4 * Math.ceil(hm / 4)),
        wgsl: `${am.join("\n")}\nstruct ${mm} {\n${Am.join("\n")}\n}\n`,
        stridedArrays: xm
      }
    }
    const Hh = [{
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
      yh = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      Ch = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function rh(mm, Tm) {
      return `#if defined(${mm}) && ${mm}DIRECTUV == 0\nvarying v${Tm}UV: vec2f;\n#endif`
    }

    function sh(mm, Tm, fm) {
      return `#if defined(${mm}) && ${mm}DIRECTUV == 0\nif (uniforms.v${Tm}Infos.x==0.)\n{vertexOutputs.v${Tm}UV= (uniforms.${fm}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Tm}UV= (uniforms.${fm}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function lh(mm, Tm, fm) {
      return `#ifdef ${mm}\n#if ${mm}DIRECTUV == 1\n#define v${Tm}UV vMainUV1\n#elif ${mm}DIRECTUV == 2\n#define v${Tm}UV vMainUV2\n#else\nvarying v${Tm}UV: vec2f;\n#endif\nvar ${fm}SamplerSampler: sampler;\nvar ${fm}Sampler: texture_2d<f32>;\n#endif`
    }
    const Mh = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      uh = 256,
      Bh = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      Lh = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      vh = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      th = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      Uh = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      dh = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      gh = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      Wh = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Lh}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${rh("OPACITY","Opacity")}\n${rh("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${gh}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${vh}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${sh("OPACITY","Opacity","opacity")}\n${sh("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${th}\n#define CUSTOM_VERTEX_MAIN_END\n${Uh}\n}\n`;
    const Fh = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${lh("OPACITY","Opacity","opacity")}\n${lh("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${gh}\n${dh}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((mm,Tm)=>function(mm){const Tm=`
    frame.lights[LITE_LIGHT$ {
        mm
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      mm
    }\
    nvar diffuse$ {
      mm
    }: vec4f = $ {
      Tm
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      mm
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Tm
    }.vLightData, diffuse$ {
      mm
    }.rgb, $ {
      Tm
    }.vLightSpecular.rgb, diffuse$ {
      mm
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Tm))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, mA = /^([gimus]+)!/, TA = new Set;

    function fA(mm) {
      TA.has(mm) || (TA.add(mm), console.warn(`Lite: no place for plugin code at ${mm} in the standard shader: it is left out`))
    }

    function hA(mm, Tm) {
      let fm = mm;
      const hm = new Map;
      for (const [am, xm] of Tm) {
        var Am;
        hm.set(am, `${null!==(Am=hm.get(am))&&void 0!==Am?Am:""}${xm}\n`)
      }
      for (const [am, xm] of hm) {
        if (!am.startsWith("!")) {
          const mm = `#define ${am}`;
          if (!fm.includes(mm)) {
            fA(am);
            continue
          }
          fm = fm.replace(mm, (() => `\n${xm}\n${mm}`));
          continue
        }
        let mm = am.substring(1),
          Tm = "g";
        if (mm.startsWith("!")) Tm = "", mm = mm.substring(1);
        else {
          const fm = mA.exec(mm);
          fm && (Tm = fm[1], mm = mm.substring(Tm.length + 1))
        }
        const hm = new RegExp(mm, Tm.includes("g") ? Tm : `${Tm}g`);
        let Am = hm.exec(fm);
        for (Am || fA(am); Am;) {
          const mm = Am,
            Tm = xm.replace(/\$(\d+)/g, ((Tm, fm) => Number(fm) < mm.length ? mm[Number(fm)] : ""));
          fm = fm.substring(0, mm.index) + Tm + fm.substring(mm.index + mm[0].length), hm.lastIndex = mm.index + Tm.length, Am = hm.exec(fm)
        }
      }
      return fm
    }
    const AA = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      aA = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      xA = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function wA(mm) {
      const Tm = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let fm = mm.replace(AA, ((mm, fm, hm, Am, am, xm) => ("attribute" === fm ? Tm.attributes.push({
        name: am,
        type: xm
      }) : void 0 === fm ? Tm.varyings.push({
        name: am,
        type: xm,
        interpolation: iA(xm, hm, Am)
      }) : Tm.uniforms.push({
        name: am,
        type: DA(xm)
      }), "")));
      return fm = fm.replace(aA, ((mm, fm) => (Tm.samplers.add(fm), ""))), fm = fm.replace(xA, ((mm, fm, hm) => (Tm.textures.push({
        name: fm,
        type: hm
      }), ""))), Tm.body = fm, Tm
    }

    function DA(mm) {
      const Tm = mm.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        fm = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Tm);
      if (!fm) throw new Error(`Lite: unsupported uniform type ${mm}`);
      return fm
    }

    function iA(mm, Tm, fm) {
      return void 0 === Tm && void 0 === fm ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(mm.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Tm ? "@interpolate(flat) " : `@interpolate(${null!==Tm&&void 0!==Tm?Tm:"perspective"}, ${null!==fm&&void 0!==fm?fm:"center"}) `
    }

    function RA(mm) {
      return OA({
        defines: mm.defines,
        vertex: hA(Wh, mm.vertexCode),
        fragment: hA(Fh, mm.fragmentCode),
        members: [...Hh, ...mm.defines.has("OPACITY") ? yh : [], ...mm.defines.has("EMISSIVE") ? Ch : [], ...mm.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function pA(mm) {
      const Tm = mm.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Tm === mm) throw new Error("Lite: fragment main has no return");
      return Tm
    }
    const EA = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Lh}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${vh}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${th}\n${Uh}\n}\n`,
      oA = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${dh}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function OA(mm) {
      const Tm = mm.defines,
        fm = wA(QT(mm.vertex, Tm)),
        hm = wA(QT(mm.fragment, Tm)),
        Am = new Map;
      for (const Im of [...fm.varyings, ...hm.varyings]) Am.has(Im.name) || Am.set(Im.name, Im);
      const am = [...Am.values()].map(((mm, Tm) => `\t@location(${Tm}) ${mm.interpolation}${mm.name}: ${mm.type},`)),
        xm = [...mm.members];
      for (const Im of [...fm.uniforms, ...hm.uniforms]) xm.some((mm => mm.name === Im.name)) || xm.push(Im);
      const wm = Ph(mm.structName, xm),
        Dm = [],
        im = [];
      let Rm = 1;
      const pm = new Set;
      for (const Im of [...fm.textures, ...hm.textures]) {
        if (pm.has(Im.name)) continue;
        pm.add(Im.name);
        const mm = `${Im.name}Sampler`,
          Tm = Rm++,
          fm = Rm++,
          hm = Im.type.startsWith("texture_2d_array") ? "2d-array" : Im.type.startsWith("texture_cube") ? "cube" : "2d";
        Dm.push({
          name: Im.name,
          binding: Tm,
          samplerBinding: fm,
          dimension: hm
        }), im.push(`@group(2) @binding(${Tm}) var ${Im.name}: ${Im.type};`), im.push(`@group(2) @binding(${fm}) var ${mm}: sampler;`)
      }
      for (const Im of [...fm.samplers, ...hm.samplers])
        if (!pm.has(Im.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Im} has no texture`);
      const Em = [Vh, Bh, wm.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${mm.structName};`, ...im].join("\n"),
        om = fm.attributes,
        Om = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...fm.attributes.map(((mm, Tm) => `\t@location(${Tm}) ${mm.name}: ${mm.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Ym = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...am, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        qm = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...hm.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...am, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", dm, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Um}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        jm = mm => {
          for (const Tm of wm.stridedArrays) mm = mm.replace(new RegExp(`\\b${Tm}\\s*\\[(.*?)\\]`, "g"), `${Tm}[$1].el`);
          return mm
        };
      return {
        vertex: `${Em}\n${Om}\n${Ym}\n${jm(fm.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Em}\n${qm}\n${pA((Vm=jm(hm.body),Vm.includes("fragmentInputs.position")?Vm.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Vm))}`,
        attributes: om,
        material: wm,
        textures: Dm
      };
      var Vm
    }
    const YA = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      qA = mm => ({
        name: mm,
        type: "vec3"
      }),
      jA = mm => ({
        name: mm,
        type: "float"
      }),
      VA = Ph("EarthSkyUniforms", [qA("viewFrom"), jA("exposureScale"), qA("zenithOffset"), jA("fogOn"), qA("up"), jA("ditherOn"), qA("sun"), jA("turbidity"), qA("tint"), jA("rayleigh"), qA("sunDir"), jA("mieStrength"), qA("inScatterR"), jA("mieFocus"), qA("inScatterM"), jA("sunE"), qA("extinctionBeta"), jA("sunsetMix"), jA("mieScale"), jA("mieBase"), jA("mieSlope"), jA("sunDiscE"), jA("exposure")]),
      IA = `${Vh}\n${Bh}\n${VA.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      KA = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${YA.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      QA = `\n${dm}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(jT).map((mm=>{let[Tm,fm]=mm;return`const TONE_${Tm}: f32 = ${fm};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${VT};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Um}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var nA = fm(37181);
    const JA = new nA.WO,
      cA = new nA.WO,
      zA = new nA.Quaternion,
      ZA = new Float64Array(3),
      kA = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      bA = new Float64Array(16);

    function SA(mm, Tm, fm) {
      const hm = fm.worldMatrix;
      var Am;
      mm.updateFloat3("viewFrom", hm[12], hm[13], hm[14]), mm.updateFloatsFrom("zenithOffset", Tm.cameraOffset, 0, 3), mm.updateFloatsFrom("up", Tm.up, 0, 3), Tm.luminance > 0 && (mm.updateFloat("exposure", Tm.luminance), mm.updateFloat("exposureScale", (Am = Tm.luminance, Math.log2(2 / Math.pow(Am, 4))))), mm.updateFloat("turbidity", Tm.turbidity), mm.updateFloat("rayleigh", Tm.rayleigh), mm.updateFloat("mieStrength", Tm.mieCoefficient), mm.updateFloat("mieFocus", Tm.mieDirectionalG), mm.updateFloatsFrom("tint", Tm.tint, 0, 3), mm.updateFloat("fogOn", Tm.fog && fm.fogEnabled && 0 !== fm.fogMode ? 1 : 0), mm.updateFloat("ditherOn", Tm.dithering ? 1 : 0);
      const am = Tm.sunPosition;
      if (JA.set(am[0], am[1], am[2]), !Tm.useSunPosition) {
        const mm = Math.PI * (Tm.inclination - .5),
          fm = 2 * Math.PI * (Tm.azimuth - .5);
        JA.set(Tm.distance * Math.cos(fm) * Math.cos(mm), Tm.distance * Math.sin(-mm), Tm.distance * Math.sin(fm) * Math.cos(mm)), nA.Quaternion.FromUnitVectorsToRef(nA.WO.UpReadOnly, cA.set(Tm.up[0], Tm.up[1], Tm.up[2]), zA), JA.rotateByQuaternionToRef(zA, JA)
      }
      mm.updateVector3("sun", JA), ZA[0] = JA.x, ZA[1] = JA.y, ZA[2] = JA.z;
      const xm = qT(Tm, ZA, kA);
      mm.updateFloatsFrom("sunDir", xm.sunDir, 0, 3), mm.updateFloat("sunE", xm.sunE), mm.updateFloatsFrom("inScatterR", xm.inScatterR, 0, 3), mm.updateFloatsFrom("inScatterM", xm.inScatterM, 0, 3), mm.updateFloatsFrom("extinctionBeta", xm.extinctionBeta, 0, 3), mm.updateFloat("sunsetMix", xm.sunsetMix), mm.updateFloat("sunDiscE", xm.sunDiscE), mm.updateFloat("mieScale", xm.mieScale), mm.updateFloat("mieBase", xm.mieBase), mm.updateFloat("mieSlope", xm.mieSlope)
    }

    function eA(mm, Tm) {
      const fm = bA;
      fm[0] = Tm.far, fm[5] = Tm.far, fm[10] = Tm.far, fm[15] = 1;
      const hm = mm.infiniteDistance;
      for (let Am = 0; Am < 3; Am++) fm[12 + Am] = mm.position[Am] + (hm ? Tm.worldMatrix[12 + Am] : 0);
      return bA
    }
    var NA = fm(38809);

    function GA(mm) {
      return Math.max(4, 4 * Math.ceil(mm / 4))
    }

    function XA(mm, Tm, fm, hm) {
      const Am = mm.createBuffer({
        label: hm,
        size: GA(Tm.byteLength),
        usage: fm,
        mappedAtCreation: !0
      });
      return new Uint8Array(Am.getMappedRange(), 0, Tm.byteLength).set(new Uint8Array(Tm.buffer, Tm.byteOffset, Tm.byteLength)), Am.unmap(), Am
    }

    function PA(mm, Tm) {
      return Math.floor(Math.log2(Math.max(mm, Tm))) + 1
    }

    function HA(mm, Tm, fm, hm, Am, am) {
      const xm = mm.createTexture({
          label: am,
          size: {
            width: fm,
            height: hm,
            depthOrArrayLayers: Am
          },
          format: "rgba8unorm",
          mipLevelCount: PA(fm, hm),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        wm = (Tm, fm, hm, am) => {
          mm.queue.writeTexture({
            texture: xm,
            mipLevel: fm
          }, Tm, {
            bytesPerRow: 4 * hm,
            rowsPerImage: am
          }, {
            width: hm,
            height: am,
            depthOrArrayLayers: Am
          })
        };
      wm(Tm, 0, fm, hm);
      let Dm = 1;
      for (const im of function*(mm, Tm, fm, hm) {
          let Am = mm,
            am = Tm,
            xm = fm;
          for (; am > 1 || xm > 1;) {
            const mm = Math.max(1, am >> 1),
              Tm = Math.max(1, xm >> 1),
              fm = new Uint8Array(mm * Tm * hm * 4),
              wm = 4 * am;
            let Dm = 0;
            for (let im = 0; im < hm; im++) {
              const hm = im * wm * xm;
              for (let im = 0; im < Tm; im++) {
                const Tm = hm + Math.min(2 * im, xm - 1) * wm,
                  Rm = hm + Math.min(2 * im + 1, xm - 1) * wm;
                for (let hm = 0; hm < mm; hm++) {
                  const mm = 4 * Math.min(2 * hm, am - 1),
                    xm = 4 * Math.min(2 * hm + 1, am - 1);
                  for (let hm = 0; hm < 4; hm++) fm[Dm++] = Am[Tm + mm + hm] + Am[Tm + xm + hm] + Am[Rm + mm + hm] + Am[Rm + xm + hm] + 2 >> 2
                }
              }
            }
            yield {
              data: fm,
              width: mm,
              height: Tm
            }, Am = fm, am = mm, xm = Tm
          }
        }(Tm, fm, hm, Am)) wm(im.data, Dm++, im.width, im.height);
      return xm
    }
    const yA = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function CA(mm) {
      if (mm.startsWith("data:")) {
        const Tm = mm.search(/[;,]/);
        return `data:${Tm>5?mm.slice(5,Tm):""} URL of ${mm.length} characters`
      }
      return mm.length > 80 ? `${mm.slice(0,80)}...` : mm
    }
    async function rA(mm) {
      const Tm = await fetch(mm);
      if (!Tm.ok) throw new Error(`${CA(mm)}: ${Tm.status} ${Tm.statusText}`);
      return createImageBitmap(await Tm.blob(), yA)
    }
    async function sA(mm) {
      const Tm = await rA(mm),
        fm = new OffscreenCanvas(Tm.width, Tm.height),
        hm = fm.getContext("2d", {
          willReadFrequently: !0
        });
      if (!hm) throw new Error("No 2D context to decode an image");
      hm.drawImage(Tm, 0, 0);
      const {
        data: Am
      } = hm.getImageData(0, 0, Tm.width, Tm.height);
      return Tm.close(), {
        pixels: new Uint8Array(Am.buffer, Am.byteOffset, Am.byteLength),
        width: fm.width,
        height: fm.height
      }
    }
    const lA = new WeakMap;

    function MA(mm, Tm, fm, hm) {
      var Am;
      const am = null !== (Am = lA.get(mm)) && void 0 !== Am ? Am : new Map;
      lA.set(mm, am);
      let xm = am.get(Tm);
      return xm || (xm = (async Am => {
        const am = null !== (Am = function(mm, Tm) {
          const fm = mm ? new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength) : null;
          return null !== fm && void 0 !== fm && fm.byteLength && Tm && fm.byteLength % (Tm * Tm * 4) === 0 ? {
            pixels: fm,
            layerWidth: Tm,
            layers: fm.byteLength / (Tm * Tm * 4)
          } : null
        }(fm, hm)) && void 0 !== Am ? Am : await async function(mm) {
          const {
            pixels: Tm,
            width: fm
          } = await sA(mm);
          return {
            pixels: Tm,
            layerWidth: fm,
            layers: Tm.byteLength / (fm * fm * 4)
          }
        }(Tm), {
          layerWidth: xm,
          layers: wm
        } = am;
        return {
          texture: HA(mm, am.pixels, xm, xm, wm, `atlas-${Tm}`),
          layerWidth: xm,
          layers: wm
        }
      })(), am.set(Tm, xm), xm.catch((() => {
        am.delete(Tm)
      }))), xm
    }
    const uA = new Map([
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
      BA = new Map([
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

    function LA(mm) {
      for (const Tm of (0, NA.j)(mm))
        if (!BA.has((0, NA.h)(Tm))) return !1;
      return !0
    }

    function vA(mm) {
      const Tm = BA.get(mm);
      if (!Tm) return null;
      const [fm, hm, Am] = Tm;
      return {
        srcFactor: uA.get(fm),
        dstFactor: uA.get(hm),
        operation: Am
      }
    }
    let tA = null;

    function UA(mm) {
      tA = mm
    }

    function dA(mm, Tm, fm) {
      var hm;
      null === (hm = tA) || void 0 === hm || hm(mm, Tm, fm, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class gA {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(mm, Tm, fm, hm, Am) {
        fm !== this.pipeline && (mm.setPipeline(fm), this.pipeline = fm), mm.setBindGroup(1, hm, [Am]);
        const am = Tm.material.bindGroup;
        am !== this.materialGroup && (mm.setBindGroup(2, am), this.materialGroup = am);
        const xm = Tm.program.packGroup;
        xm && xm !== this.packGroup && (mm.setBindGroup(kT.e, xm), this.packGroup = xm);
        const {
          vertexBuffers: wm,
          vertexOffsets: Dm
        } = this;
        for (let im = 0; im < Tm.vertexBuffers.length; im++) wm[im] === Tm.vertexBuffers[im] && Dm[im] === Tm.vertexOffsets[im] || (mm.setVertexBuffer(im, Tm.vertexBuffers[im], Tm.vertexOffsets[im]), wm[im] = Tm.vertexBuffers[im], Dm[im] = Tm.vertexOffsets[im]);
        Tm.indexBuffer && Tm.indexBuffer !== this.indexBuffer && (mm.setIndexBuffer(Tm.indexBuffer, Tm.indexFormat), this.indexBuffer = Tm.indexBuffer)
      }
    }
    class WA {
      constructor(mm, Tm, fm, hm) {
        this.modelMeshes = mm, this.I5 = Tm, this.maker = fm, this.warnOnce = hm, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (mm, Tm) => {
          (Tm < -1 || Tm > 1) && this.warnOnce(`group:${Tm}`, `rendering group ${Tm} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(mm) {
        this.collectGroup(mm, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(mm, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(mm, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.I5.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(FA), this.transparentDraws.sort(ma)
      }
      collectGroup(mm, Tm, fm, hm, Am) {
        const am = this.modelMeshes.group(Tm),
          xm = this.I5.group(Tm),
          wm = 0 === Tm ? null === xm || void 0 === xm ? void 0 : xm.opaque : void 0;
        this.collectList(mm, null === am || void 0 === am ? void 0 : am.opaque, wm || null === xm || void 0 === xm ? void 0 : xm.opaque, Tm, !1, fm, Am), wm && (this.I5.drawn += this.maker.bundleDraws(mm, wm, Tm)), this.collectList(mm, null === am || void 0 === am ? void 0 : am.alphaTest, void 0, Tm, !1, fm, Am), this.collectList(mm, null === am || void 0 === am ? void 0 : am.transparent, null === xm || void 0 === xm ? void 0 : xm.transparent, Tm, !0, hm, Am)
      }
      collectList(mm, Tm, fm, hm, Am, am, xm) {
        var wm;
        const Dm = am.length;
        Tm && this.maker.pushDraws(mm, Tm.units, Tm.units.length, hm, Am, am, Tm.rows), fm && (this.I5.drawn += this.maker.pushDraws(mm, fm, fm.length, hm, Am, am));
        const im = Am ? null === (wm = this.modelMeshes.group(hm)) || void 0 === wm ? void 0 : wm.text : void 0;
        im && this.maker.pushDraws(mm, im.units, im.units.length, hm, !0, am, im.rows), xm && Ta(am, Dm)
      }
    }

    function FA(mm, Tm) {
      return mm.program.id - Tm.program.id || mm.material.owner.uniqueId - Tm.material.owner.uniqueId
    }

    function ma(mm, Tm) {
      return mm.material.owner.uniqueId - Tm.material.owner.uniqueId
    }

    function Ta(mm, Tm) {
      for (let fm = Tm + 1; fm < mm.length; fm++) {
        const hm = mm[fm];
        let Am = fm - 1;
        for (; Am >= Tm && ma(mm[Am], hm) > 0; Am--) mm[Am + 1] = mm[Am];
        mm[Am + 1] = hm
      }
    }
    const fa = {};

    function ha(mm) {
      return mm.hasThinInstances ? "thin" : mm.Fhm || mm._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Aa(mm, Tm, fm) {
      return mm ? (fm._needUVs = !0, mm.optimizeUVAllocation && (0, km.D)(mm.matrix) ? (fm[`${Tm}DIRECTUV`] = mm.uvSet + 1, fm[`MAINUV${mm.uvSet+1}`] = !0) : fm[`${Tm}DIRECTUV`] = 0, !0) : (fm[`${Tm}DIRECTUV`] = 0, !1)
    }

    function aa(mm) {
      const Tm = new Map;
      for (const fm in mm) {
        if (95 === fm.charCodeAt(0)) continue;
        const hm = mm[fm],
          Am = typeof hm;
        "number" === Am || "string" === Am ? Tm.set(fm, String(hm)) : hm && "function" !== Am && Tm.set(fm, !0)
      }
      return Tm
    }

    function xa(mm) {
      const Tm = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: fm
        }
        of mm.features)
        for (const mm in fm) Tm[mm] = fm[mm];
      return Tm
    }

    function wa(mm) {
      const Tm = mm.parts.geometry;
      return null !== Tm && void 0 !== Tm && Tm.live ? Tm : null
    }

    function Da(mm) {
      var Tm;
      return null !== (Tm = wa(mm)) && void 0 !== Tm ? Tm : fa
    }
    class ia {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = mm, this.warnOnce = Tm, this.programWithModel = fm, this.packFailed = hm, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(mm, Tm, fm, hm, Am) {
        const am = Tm.owner;
        let xm = this.drawStates.get(Tm);
        if (!xm) {
          const mm = Tm.parts.materials[Tm.range];
          if (!mm) return this.warnOnce("model", `${fm.name} on ${am.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          xm = {
            defines: xa(mm),
            model: mm,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Am,
            groupId: hm,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Tm, xm)
        }
        if (this.programCurrent(xm, Tm, Am, hm)) return xm.program;
        const {
          model: wm
        } = xm, Dm = Da(Tm), im = this.instanceLayout(am, Am), Rm = this.definesBits(am);
        if (!this.prepareModelDefines(mm, am, wm, xm.defines, hm, Am)) return null;
        xm.instancing = Am, xm.groupId = hm, xm.modelVersion = wm.version, xm.geometry = Dm, xm.instanceLayout = im, xm.definesBits = Rm;
        const pm = function(mm) {
          let Tm = "";
          for (const [fm, hm] of mm) Tm += !0 === hm ? `${fm};` : `${fm}=${hm};`;
          return Tm
        }(aa(xm.defines));
        return pm === xm.definesKey && xm.packVariant === this.modelPackVariant && xm.program && !this.packFailed(xm.program) || (xm.definesKey = pm, xm.packVariant = this.modelPackVariant, xm.program = this.programWithModel(wm, xm.defines, pm)), xm.program
      }
      programCurrent(mm, Tm, fm, hm) {
        return null !== mm.program && !this.packFailed(mm.program) && mm.instancing === fm && mm.groupId === hm && this.definesHold(mm, Tm, fm)
      }
      definesHold(mm, Tm, fm) {
        return mm.modelVersion === mm.model.version && mm.geometry === Da(Tm) && mm.instanceLayout === this.instanceLayout(Tm.owner, fm) && mm.definesBits === this.definesBits(Tm.owner) && mm.packVariant === this.modelPackVariant
      }
      modelPackKind(mm) {
        var Tm;
        return 0 === this.modelPackVariant ? null : null !== (Tm = (0, zm.y)(mm, cm.g.name)) && void 0 !== Tm && Tm.active ? "placed" : mm.item ? "item" : mm.lifeform ? "lifeform" : mm.box ? "box" : null
      }
      instanceLayout(mm, Tm) {
        var fm, hm, Am;
        return "thin" === Tm ? null !== (Am = this.resources.S_.get(mm)) && void 0 !== Am ? Am : null : "instanced" === Tm && null !== (fm = null === (hm = mm._userInstancedBuffersStorage) || void 0 === hm ? void 0 : hm.interleavedKinds) && void 0 !== fm ? fm : null
      }
      definesBits(mm) {
        const Tm = this.view;
        return (mm.visibility < 1 ? 1 : 0) | (mm.hasVertexAlpha ? 2 : 0) | (mm.applyFog ? 4 : 0) | (mm.useVertexColors ? 8 : 0) | (mm.nonUniformScaling ? 16 : 0) | (Tm.fogEnabled && 0 !== Tm.fogMode ? 32 : 0) | (Tm.lightsEnabled ? 64 : 0) | Tm.lightCount << 7
      }
      prepareLightDefines(mm, Tm, fm) {
        let hm = 0;
        if (this.view.lightsEnabled && !Tm) {
          const Tm = Math.min(fm, 4);
          for (; hm < this.view.lightCount && (mm[`LIGHT${hm}`] = !0, mm[`LITE_LIGHT${hm}_SLOT`] = hm, hm++, mm._needNormals = !0, hm !== Tm););
        }
        for (let Am = hm; Am < 4; Am++) mm[`LIGHT${Am}`] = !1, mm[`LITE_LIGHT${Am}_SLOT`] = void 0
      }
      prepareModelDefines(mm, Tm, fm, hm, Am, am) {
        const {
          features: xm
        } = fm;
        hm._needNormals = !1, hm._needUVs = !1;
        const wm = this.view;
        this.prepareLightDefines(hm, fm.disableLighting, fm.maxSimultaneousLights), hm.MAINUV1 = !1, hm.MAINUV2 = !1;
        const Dm = fm.diffuseTexture;
        Dm ? (hm._needUVs = !0, hm.DIFFUSE = !0, Dm.optimizeUVAllocation && (0, km.D)(Dm.matrix) ? (hm.DIFFUSEDIRECTUV = Dm.uvSet + 1, hm[`MAINUV${Dm.uvSet+1}`] = !0) : hm.DIFFUSEDIRECTUV = 0, Dm.uvSet > 1 && this.warnOnce(`uvset:${fm.name}`, `${fm.name} samples UV set ${Dm.uvSet+1}, which is not supported`)) : (hm.DIFFUSE = !1, hm.DIFFUSEDIRECTUV = 0);
        const im = fm.opacityTexture,
          Rm = fm.emissiveTexture;
        hm.OPACITY = Aa(im, "OPACITY", hm), hm.OPACITYRGB = null !== im && im.getAlphaFromRGB, hm.EMISSIVE = Aa(Rm, "EMISSIVE", hm), (im && im.uvSet > 1 || Rm && Rm.uvSet > 1) && this.warnOnce(`uvset:${fm.name}`, `${fm.name} samples a UV set past 2, which is not supported`);
        const pm = fm.reflectionTexture,
          Em = null !== pm;
        if (Em) {
          if (!this.resources.boundTexture(pm)) return !1;
          hm._needNormals = !0
        }
        hm.REFLECTION = Em, hm.REFLECTIONMAP_3D = Em, hm.REFLECTIONMAP_SKYBOX = Em, hm.REFLECTIONMAP_OPPOSITEZ = Em && (mm.useRightHandedSystem ? !pm.invertZ : pm.invertZ), hm.ROUGHNESS = Em && fm.roughness > 0, hm.REFLECTIONOVERALPHA = Em && fm.useReflectionOverAlpha, hm.LITE_REFLECTION_LUMINANCE = Em && "cube" === pm.source.kind && pm.source.luminance, (Tm.skeleton || Tm.morphTargetManager) && this.warnOnce(`skin:${Tm.name}`, `${Tm.name} has bones or morph targets, which are not supported`), hm.FOG = fm.fogEnabled && Tm.applyFog && wm.fogEnabled && 0 !== wm.fogMode, hm.NONUNIFORMSCALING = Tm.nonUniformScaling;
        const {
          visibility: om,
          hasVertexAlpha: Om
        } = Tm;
        hm.ALPHATEST = (0, zm.T)(fm, om, Om), hm.ALPHAFROMDIFFUSE = (0, zm.nb)(fm), hm.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== fm.transparencyMode, hm.ALPHABLEND = null === fm.transparencyMode || (0, zm.Q)(fm, om, Om), hm.PREMULTIPLYALPHA = 7 === fm.alphaMode || 8 === fm.alphaMode, hm.EMISSIVEASILLUMINATION = fm.useEmissiveAsIllumination, hm.LINKEMISSIVEWITHDIFFUSE = fm.linkEmissiveWithDiffuse, hm.TWOSIDEDLIGHTING = !fm.backFaceCulling && fm.twoSidedLighting, hm.INSTANCES = "none" !== am, hm.THIN_INSTANCES = "thin" === am, hm.LITE_FRONT_LAYER = Am >= 1;
        for (const {
            feature: Jm,
            state: cm,
            active: zm
          }
          of xm) {
          var Ym, qm;
          if (zm) null === (Ym = (qm = (0, pT.i)(Jm)).prepareDefinesBeforeAttributes) || void 0 === Ym || Ym.call(qm, cm, hm, mm, Tm)
        }
        this.modelPackKind(fm) && (hm._needNormals = !0), hm.NORMAL = hm._needNormals && Tm.isVerticesDataPresent("normal"), hm.UV1 = hm._needUVs && Tm.isVerticesDataPresent("uv"), hm.UV2 = hm._needUVs && Tm.isVerticesDataPresent("uv2");
        const jm = Tm.useVertexColors && Tm.isVerticesDataPresent("color");
        hm.VERTEXCOLOR = jm, hm.VERTEXALPHA = Tm.hasVertexAlpha && jm, hm.INSTANCESCOLOR = "none" !== am && Tm.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Jm,
            state: cm,
            active: zm
          }
          of xm) {
          var Vm, Im;
          if (zm) null === (Vm = (Im = (0, pT.i)(Jm)).prepareDefines) || void 0 === Vm || Vm.call(Im, cm, hm, mm, Tm, fm)
        }
        const Km = mm.dO();
        for (const {
            feature: Jm,
            state: cm,
            active: zm
          }
          of xm) {
          var Qm, nm;
          if (zm && !1 === (null === (Qm = (nm = (0, pT.i)(Jm)).isReadyForSubMesh) || void 0 === Qm ? void 0 : Qm.call(nm, cm, hm, mm, Km))) return !1
        }
        return !0
      }
    }

    function Ra(mm, Tm, fm) {
      return mm.codeVersion !== Tm.version && function(mm, Tm) {
        const fm = [],
          hm = [];
        for (const {
            feature: Em,
            state: om,
            active: Om
          }
          of Tm.features) {
          var Am, am, xm, wm;
          if (Om) pa(null === (Am = (am = (0, pT.i)(Em)).getCustomCode) || void 0 === Am ? void 0 : Am.call(am, om, "vertex", nm.b.WGSL), fm), pa(null === (xm = (wm = (0, pT.i)(Em)).getCustomCode) || void 0 === xm ? void 0 : xm.call(wm, om, "fragment", nm.b.WGSL), hm)
        }
        const Dm = [];
        for (const {
            feature: Em,
            state: om
          }
          of Tm.features) {
          var im, Rm;
          const mm = null === (im = (Rm = (0, pT.i)(Em)).getUniforms) || void 0 === im ? void 0 : im.call(Rm, om, nm.b.WGSL);
          for (const Tm of null !== (pm = null === mm || void 0 === mm ? void 0 : mm.ubo) && void 0 !== pm ? pm : []) {
            var pm;
            Tm.size && Tm.type && Dm.push({
              name: Tm.name,
              type: Tm.type,
              arraySize: Tm.arraySize
            })
          }
        }
        mm.vertexCode = fm, mm.fragmentCode = hm, mm.pluginUniforms = Dm, mm.codeKey = JSON.stringify([fm, hm, Dm]), mm.codeVersion = Tm.version
      }(mm, Tm), `${fm}#${mm.codeKey}`
    }

    function pa(mm, Tm) {
      if (mm)
        for (const fm in mm) mm[fm] && Tm.push([fm, mm[fm]])
    }
    const Ea = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class oa {
      constructor(mm) {
        this.warnOnce = mm, this.states = new Map
      }
      renderState(mm, Tm, fm, hm) {
        var Am;
        let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          xm = null !== (Am = mm.sideOrientation) && void 0 !== Am ? Am : Tm.sideOrientation;
        Tm._getWorldMatrixDeterminant() < 0 && (xm = 0 === xm ? 1 : 0);
        const wm = "triangle-list" === am,
          Dm = fm ? mm.alphaMode : 0,
          im = (!fm || (0 === Dm || mm.forceDepthWrite)) && !mm.disableDepthWrite,
          Rm = wm && mm.backFaceCulling ? mm.cullBackFaces ? "back" : "front" : "none",
          pm = wm && 0 !== xm ? "ccw" : "cw",
          Em = mm.depthFunction,
          om = wm ? mm.zOffset : 0,
          Om = wm ? mm.zOffsetUnits : 0,
          Ym = !mm.disableColorWrite;
        return hm && hm.alphaMode === Dm && hm.depthWrite === im && hm.depthFunction === Em && hm.cullMode === Rm && hm.frontFace === pm && hm.zOffset === om && hm.zOffsetUnits === Om && hm.colourWrite === Ym && hm.topology === am ? hm : this.stateFor(Dm, im, Em, Rm, pm, om, Om, Ym, am)
      }
      stateFor(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        const im = `${mm}|${Tm}|${fm}|${hm}|${Am}|${am}|${xm}|${wm}|${Dm}`;
        let Rm = this.states.get(im);
        if (!Rm) {
          var pm;
          const Em = mm ? vA(mm) : null;
          mm && !Em && this.warnOnce(`alpha:${mm}`, `alpha mode ${mm} is not supported`), Rm = {
            key: im,
            alphaMode: mm,
            depthFunction: fm,
            zOffset: am,
            zOffsetUnits: xm,
            topology: Dm,
            blend: Em,
            depthWrite: Tm,
            depthCompare: fm && null !== (pm = Ea.get(fm)) && void 0 !== pm ? pm : null,
            cullMode: hm,
            frontFace: Am,
            depthBias: -xm,
            depthBiasSlopeScale: -am,
            colourWrite: wm
          }, this.states.set(im, Rm)
        }
        return Rm
      }
    }
    var Oa = fm(37498);

    function Ya(mm) {
      if (!mm.frozen) return -1;
      let Tm = mm.version;
      for (const {
          feature: fm,
          state: hm,
          active: Am
        }
        of mm.features) {
        if (!Am || !fm.bind) continue;
        const mm = (0, pT.i)(fm).uniformsVersion;
        if (!mm) return -1;
        Tm += mm(hm)
      }
      return Tm
    }
    class qa {
      constructor(mm, Tm, fm) {
        this.slots = mm, this.data = Tm, this.textures = fm, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(mm, Tm) {
        this.write4(mm, Tm, 0, 0, 0, 1)
      }
      updateFloat2(mm, Tm, fm) {
        this.write4(mm, Tm, fm, 0, 0, 2)
      }
      updateFloat3(mm, Tm, fm, hm) {
        this.write4(mm, Tm, fm, hm, 0, 3)
      }
      updateFloat4(mm, Tm, fm, hm, Am) {
        this.write4(mm, Tm, fm, hm, Am, 4)
      }
      updateVector3(mm, Tm) {
        this.write4(mm, Tm.x, Tm.y, Tm.z, 0, 3)
      }
      updateVector4(mm, Tm) {
        this.write4(mm, Tm.x, Tm.y, Tm.z, Tm.w, 4)
      }
      updateColor3(mm, Tm) {
        this.write4(mm, Tm.r, Tm.g, Tm.b, 0, 3)
      }
      updateColor4(mm, Tm, fm) {
        this.write4(mm, Tm.r, Tm.g, Tm.b, fm, 4)
      }
      updateFloatsFrom(mm, Tm, fm, hm) {
        const Am = this.slots.get(mm);
        if (!Am) return;
        const am = this.data,
          xm = Am.offset;
        for (let wm = 0; wm < hm; wm++) am[xm + wm] = Tm[fm + wm]
      }
      updateFloat3TimesFloats(mm, Tm, fm, hm) {
        const Am = this.slots.get(mm);
        if (!Am) return;
        const am = this.data,
          xm = Am.offset;
        am[xm] = Tm[fm] * hm[0], am[xm + 1] = Tm[fm + 1] * hm[1], am[xm + 2] = Tm[fm + 2] * hm[2]
      }
      K9(mm, Tm) {
        const fm = this.slots.get(mm);
        fm && this.data.set(Tm.m, fm.offset)
      }
      updateMatrixFloats(mm, Tm) {
        const fm = this.slots.get(mm);
        fm && this.data.set(Tm, fm.offset)
      }
      updateFloatArray(mm, Tm) {
        const fm = this.slots.get(mm);
        if (!fm) return;
        if (!fm.arraySize || fm.stride === fm.floats) return void this.data.set(Tm, fm.offset);
        const hm = Math.min(Tm.length, fm.floats * fm.arraySize);
        for (let Am = 0; Am < hm; Am++) this.data[fm.offset + Math.floor(Am / fm.floats) * fm.stride + Am % fm.floats] = Tm[Am]
      }
      updateArray(mm, Tm) {
        this.updateFloatArray(mm, Tm)
      }
      setTexture(mm, Tm) {
        this.textures.set(mm, Tm), this.expected.delete(mm)
      }
      expectTexture(mm) {
        this.textures.set(mm, null), this.expected.add(mm)
      }
      write4(mm, Tm, fm, hm, Am, am) {
        const xm = this.slots.get(mm);
        if (!xm) return;
        const wm = this.data,
          Dm = xm.offset;
        wm[Dm] = Tm, am > 1 && (wm[Dm + 1] = fm), am > 2 && (wm[Dm + 2] = hm), am > 3 && (wm[Dm + 3] = Am)
      }
    }

    function ja(mm, Tm) {
      const fm = Mh,
        hm = Oa.i,
        Am = mm.lights,
        am = Math.min(mm.lightCount, 8);
      for (let xm = 0; xm < am; xm++) {
        const mm = fm.lights + xm * fm.lightStride,
          am = xm * Oa.e;
        Tm[mm] = Am[am + hm.vector], Tm[mm + 1] = Am[am + hm.vector + 1], Tm[mm + 2] = Am[am + hm.vector + 2], Tm[mm + 3] = Am[am + hm.kind] === Oa.h.directional ? 1 : 0, Tm[mm + 4] = Am[am + hm.diffuse], Tm[mm + 5] = Am[am + hm.diffuse + 1], Tm[mm + 6] = Am[am + hm.diffuse + 2], Tm[mm + 7] = Am[am + hm.range], Tm[mm + 8] = Am[am + hm.specular], Tm[mm + 9] = Am[am + hm.specular + 1], Tm[mm + 10] = Am[am + hm.specular + 2], Tm[mm + 11] = Am[am + hm.range]
      }
      Tm[fm.fogInfos] = mm.fogMode, Tm[fm.fogInfos + 1] = mm.fogStart, Tm[fm.fogInfos + 2] = mm.fogEnd, Tm[fm.fogInfos + 3] = mm.fogDensity, Tm[fm.fogColour] = mm.fogColour[0], Tm[fm.fogColour + 1] = mm.fogColour[1], Tm[fm.fogColour + 2] = mm.fogColour[2], Tm[fm.outputHeight] = mm.renderHeight, Tm[fm.animTick] = mm.animTick, Tm[fm.timeMs] = mm.timeMs
    }
    class Va {
      constructor(mm) {
        this.instancesOf = mm
      }
      refreshModelUniforms(mm, Tm, fm, hm) {
        const Am = Ya(fm);
        if (Am >= 0 && Am === Tm.heldVersion && Tm.textures.get("diffuseSampler") === fm.diffuseTexture && Tm.textures.get("reflectionCubeSampler") === fm.reflectionTexture && Tm.textures.get("opacitySampler") === fm.opacityTexture && Tm.textures.get("emissiveSampler") === fm.emissiveTexture) return !0;
        if (Am < 0)
          for (const am of this.instancesOf(fm)) am.heldVersion = -1;
        return this.writeModelUniforms(mm, Tm, fm, hm), Tm.heldVersion = Am, !1
      }
      writeModelUniforms(mm, Tm, fm, hm) {
        const {
          ubo: Am
        } = Tm, am = fm.diffuseTexture, xm = fm.diffuseColor;
        Am.updateFloat4("vDiffuseColor", xm[0], xm[1], xm[2], fm.alpha), am && (Am.updateFloat2("vDiffuseInfos", am.uvSet, am.level), Am.updateMatrixFloats("diffuseMatrix", am.matrix)), Am.updateFloat("alphaCutOff", fm.alphaCutOff), Am.updateFloatsFrom("vEmissiveColor", fm.emissiveColor, 0, 3), Am.updateFloat3TimesFloats("vAmbientColor", hm.ambientColour, 0, fm.ambientColor);
        const wm = fm.specularColor;
        Am.updateFloat4("vSpecularColor", wm[0], wm[1], wm[2], fm.specularPower), Am.setTexture("diffuseSampler", am);
        const Dm = fm.opacityTexture;
        Dm && (Am.updateFloat2("vOpacityInfos", Dm.uvSet, Dm.level), Am.updateMatrixFloats("opacityMatrix", Dm.matrix)), Am.setTexture("opacitySampler", Dm);
        const im = fm.emissiveTexture;
        im && (Am.updateFloat2("vEmissiveInfos", im.uvSet, im.level), Am.updateMatrixFloats("emissiveMatrix", im.matrix)), Am.setTexture("emissiveSampler", im);
        const Rm = fm.reflectionTexture;
        Rm && Am.updateMatrixFloats("reflectionMatrix", Rm.matrix), Am.updateFloat2("vReflectionInfos", Rm ? Rm.level * mm.iblIntensity : 0, fm.roughness), Am.setTexture("reflectionCubeSampler", Rm);
        const pm = mm.dO();
        for (const {
            feature: Om,
            state: Ym,
            active: qm
          }
          of fm.features) {
          var Em, om;
          if (qm) null === (Em = (om = (0, pT.i)(Om)).bind) || void 0 === Em || Em.call(om, Ym, Am, mm, pm)
        }
      }
    }

    function Ia(mm) {
      const Tm = mm.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Tm) ? "u32" : /i32|^vec\di$/.test(Tm) ? "i32" : "f32"
    }

    function Ka(mm, Tm) {
      const fm = mm.getSize(),
        hm = Ia(Tm),
        Am = mm => 4 === fm ? `${mm}x4` : 2 === fm ? `${mm}x2` : null;
      if ("f32" === hm) {
        if (5126 === mm.type) return 1 === fm ? "float32" : fm >= 2 && fm <= 4 ? `float32x${fm}` : null;
        if (!mm.normalized) return null;
        switch (mm.type) {
          case 5121:
            return Am("unorm8");
          case 5120:
            return Am("snorm8");
          case 5123:
            return Am("unorm16");
          case 5122:
            return Am("snorm16")
        }
        return null
      }
      const am = "u32" === hm ? "uint" : "sint";
      switch (mm.type) {
        case 5125:
        case 5124:
          return 1 === fm ? `${am}32` : fm <= 4 ? `${am}32x${fm}` : null;
        case 5121:
        case 5120:
          return Am(`${am}8`);
        case 5123:
        case 5122:
          return Am(`${am}16`)
      }
      return null
    }

    function Qa(mm) {
      var Tm;
      const fm = /(8|16|32)(?:x(\d))?$/.exec(mm);
      return fm ? Number(fm[1]) / 8 * Number(null !== (Tm = fm[2]) && void 0 !== Tm ? Tm : 1) : 4
    }
    class na {
      constructor(mm, Tm, fm) {
        this.resources = mm, this.limits = Tm, this.warnOnce = fm, this.layouts = new Map
      }
      resolveInputs(mm, Tm, fm, hm) {
        const Am = [],
          am = fm.program.attributes,
          xm = [];
        for (let Rm = 0; Rm < am.length; Rm++) {
          const fm = am[Rm],
            wm = fm.optional ? null : this.resources.vertexInput(mm, fm.name, hm);
          if (!wm) {
            const mm = Ia(fm.type),
              Tm = "u32" === mm ? "uint32x4" : "i32" === mm ? "sint32x4" : "float32x4";
            xm.push(null);
            const hm = Am.find((mm => null === mm.data));
            hm ? hm.attributes.push({
              shaderLocation: Rm,
              offset: 0,
              format: Tm
            }) : Am.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Rm,
                offset: 0,
                format: Tm
              }]
            });
            continue
          }
          const Dm = wm.getBuffer();
          xm.push(wm);
          const im = Ka(wm, fm.type);
          if (!im) return this.warnOnce(`format:${Tm}:${fm.name}`, `${Tm}'s ${fm.name} (type ${wm.type}, size ${wm.getSize()}) has no WebGPU vertex format`), null;
          const pm = wm.getIsInstanced() ? "instance" : "vertex",
            Em = wm.byteStride,
            om = Qa(im),
            Om = Am.find((mm => mm.data === Dm && mm.stride === Em && mm.step === pm && wm.byteOffset >= mm.base && wm.byteOffset - mm.base + om <= Em));
          Om ? Om.attributes.push({
            shaderLocation: Rm,
            offset: wm.byteOffset - Om.base,
            format: im
          }) : Am.push({
            data: Dm,
            base: wm.byteOffset,
            stride: Em,
            step: pm,
            attributes: [{
              shaderLocation: Rm,
              offset: 0,
              format: im
            }]
          })
        }
        if (Am.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Tm}`, `${Tm} needs ${Am.length} vertex buffers`), null;
        let wm = "";
        for (const Rm of Am) {
          wm += `${Rm.stride}${"instance"===Rm.step?"i":"v"}`;
          for (const mm of Rm.attributes) wm += `,${mm.shaderLocation}:${mm.offset}:${mm.format}`;
          wm += ";"
        }
        let Dm = this.layouts.get(wm);
        Dm || (Dm = {
          key: wm,
          buffers: Am.map((mm => ({
            arrayStride: mm.stride,
            stepMode: mm.step,
            attributes: mm.attributes
          }))),
          instanceEnds: Am.map((mm => {
            let Tm = -1;
            if ("instance" === mm.step)
              for (const fm of mm.attributes) Tm = Math.max(Tm, fm.offset + Qa(fm.format));
            return Tm
          }))
        }, this.layouts.set(wm, Dm));
        const im = Am.map((mm => mm.base));
        return {
          program: fm,
          sources: xm,
          layout: Dm,
          slotData: Am.map((mm => mm.data)),
          B5: im,
          buffers: [],
          offsets: im,
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

    function Ja(mm, Tm, fm, hm) {
      const Am = Tm.program.program.attributes;
      for (let am = 0; am < Am.length; am++) {
        if ((Am[am].optional ? null : fm.vertexInput(mm, Am[am].name, hm)) !== Tm.sources[am]) return !1
      }
      return !0
    }
    const ca = 64;
    class za {
      constructor(mm, Tm, fm, hm) {
        this.device = mm, this.layout = Tm, this.frameBuffer = fm, this.label = hm, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(mm) {
        if (mm * ca <= this.data.length) return !1;
        let Tm = 2 * this.data.length;
        for (; mm * ca > Tm;) Tm *= 2;
        const fm = new Float32Array(Tm);
        return fm.set(this.data), this.data = fm, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Am = this.data,
          am = mm * ca;
        let xm = Am[am + 16] !== fm;
        for (let wm = 0; wm < 16 && !xm; wm++) xm = Am[am + wm] !== Tm[hm + wm];
        if (xm) {
          for (let mm = 0; mm < 16; mm++) Am[am + mm] = Tm[hm + mm];
          Am[am + 16] = fm
        }
        return xm
      }
      upload(mm, Tm) {
        this.device.queue.writeBuffer(this.buffer, mm * uh, this.data, mm * ca, (Tm - mm) * ca)
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

    function Za(mm) {
      return mm.gpu[km.c.lite] ??= mm.materials.map(((Tm, fm) => ({
        parts: mm,
        range: fm,
        owner: mm.owner
      })))
    }

    function ka(mm) {
      var Tm, fm, hm;
      return null !== (Tm = null !== (fm = null === (hm = mm.parts.materials[mm.range]) || void 0 === hm ? void 0 : hm.mirror) && void 0 !== fm ? fm : mm.owner.material) && void 0 !== Tm ? Tm : null
    }
    const ba = ["opaque", "alphaTest", "transparent", "text"];

    function Sa(mm) {
      for (const Tm of ba) mm[Tm].units.length = 0, mm[Tm].rows.length = 0
    }
    class ea {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, RT.c)("Lite: ")
      }
      attach(mm, Tm) {
        this.model = mm, this.mirror = Tm
      }
      get worlds() {
        return this.model.nodes.oE
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(mm) {
        return this.groups.get(mm)
      }
      forEachGroup(mm) {
        this.groups.forEach(mm)
      }
      forEachSelected(mm) {
        for (const [Tm, fm] of this.groups)
          for (const hm of ba)
            for (const Am of fm[hm].units) mm(Am.owner, "text" === hm ? "transparent" : hm, Tm)
      }
      select(mm, Tm) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(Sa);
        const {
          model: fm,
          mirror: hm
        } = this;
        if (!fm || !hm || !mm) return;
        this.rows.length < fm.nodes.yp && (this.rows = new Int32Array(fm.nodes.yp));
        const Am = this.rows,
          am = fm.meshes;
        for (let wm = 0; wm < am.looseCount; wm++) {
          const mm = am.loose[wm],
            fm = hm.nodes[mm];
          fm && !fm.isBlocked && fm.isEnabled() && !fm.fi.hasAZeroComponent && am.selects(mm, Tm.frustum) && (this.activate(fm, mm), this.selectedCount++)
        }
        const xm = am.selectTextPlanes(Tm.frustum, Am);
        for (let wm = 0; wm < xm; wm++) {
          const Tm = Am[wm],
            am = hm.nodes[Tm],
            xm = fm.meshes.parts[Tm];
          if (!am.isVisible || !(am.visibility > 0) || 0 === (am.layerMask & mm.layerMask) || !xm) continue;
          const Dm = this.groupOf(fm.meshes.layer[Tm]).text;
          for (const mm of Za(xm)) Dm.units.push(mm), Dm.rows.push(Tm);
          this.selectedCount++
        }
      }
      instanceBatch(mm) {
        const Tm = this.batchOf(mm);
        return Tm.dispatched || (Tm.dispatched = Tm.renderSelf = !0, Tm.row = this.rowOf(mm)), Tm
      }
      rowOf(mm) {
        return mm.row
      }
      activate(mm, Tm) {
        if (!mm.pG) {
          const fm = mm;
          if (fm.Fhm) {
            const mm = this.batchOf(fm);
            mm.dispatched = !0, mm.renderSelf = !0, mm.row = Tm
          }
          return void this.dispatch(fm, Tm, Tm)
        }
        const fm = mm,
          hm = fm.mAm;
        if (hm._getWorldMatrixDeterminant() >= 0 !== fm._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${hm.name}`, `A mirrored InstancedMesh of ${hm.name} is not drawn yet`);
        const Am = this.batchOf(hm);
        Am.instances.push(fm), Am.rows.push(Tm), Am.dispatched || (Am.dispatched = !0, this.dispatch(hm, Tm, this.rowOf(hm)))
      }
      batchOf(mm) {
        let Tm = this.batches.get(mm);
        return Tm || (Tm = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(mm, Tm)), Tm.frame !== this.frame && (Tm.frame = this.frame, Tm.dispatched = !1, Tm.renderSelf = !1, Tm.instances.length = 0, Tm.rows.length = 0), Tm
      }
      dispatch(mm, Tm, fm) {
        const {
          layer: hm,
          parts: Am
        } = this.model.meshes;
        if (!Am[Tm]) return;
        const am = this.groupOf(hm[Tm]),
          xm = mm;
        for (const wm of Za(Am[Tm])) {
          const mm = ka(wm);
          if (!mm) continue;
          const Tm = mm.needAlphaBlendingForMesh(xm) ? am.transparent : mm.needAlphaTestingForMesh(xm) ? am.alphaTest : am.opaque;
          Tm.units.push(wm), Tm.rows.push(fm)
        }
      }
      groupOf(mm) {
        let Tm = this.groups.get(mm);
        return Tm || (Tm = {
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
        }, this.groups.set(mm, Tm)), Tm
      }
    }

    function Na(mm) {
      mm.opaque.length = 0, mm.transparent.length = 0
    }
    class Ga {
      constructor() {
        this.ni = new Map, this.enabled = [], this.groups = new Map, this.mO = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(mm) {
        if (this.ni.has(mm)) return;
        const Tm = {
          mesh: mm,
          observer: mm.onEffectiveEnabledStateChangedObservable.add((mm => {
            this.Dk(Tm, mm)
          })),
          index: -1,
          steady: null
        };
        this.ni.set(mm, Tm), this.Dk(Tm, mm.isEnabled())
      }
      remove(mm) {
        const Tm = this.ni.get(mm);
        Tm && (Tm.observer.remove(!0), this.Dk(Tm, !1), this.ni.delete(mm))
      }
      base(mm) {
        return this.ni.get(mm)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          ni: this.ni.size
        }
      }
      forEachSelected(mm) {
        for (const [Tm, fm] of this.groups) {
          for (const hm of fm.opaque) mm(hm.owner, "opaque", Tm);
          for (const hm of fm.transparent) mm(hm.owner, "transparent", Tm)
        }
        for (const Tm of this.mO) mm(Tm.mesh, "opaque", 0)
      }
      group(mm) {
        return this.groups.get(mm)
      }
      forEachGroup(mm) {
        this.groups.forEach(mm)
      }
      select(mm, Tm) {
        if (this.drawn = 0, this.selected = 0, this.mO.length = 0, this.groups.forEach(Na), !mm) return;
        const fm = this.enabled;
        for (let hm = 0; hm < fm.length; hm++) {
          const Am = fm[hm];
          if (Am.steady && Tm(Am, mm)) {
            this.selected++, this.mO.push(Am);
            continue
          }
          const am = Am.mesh;
          if (am.isBlocked || am.fi.hasAZeroComponent) continue;
          if (!am.isVisible || am.visibility <= 0 || 0 === (am.layerMask & mm.layerMask)) continue;
          if (am.Fhm) {
            this.warned.has(am.name) || (this.warned.add(am.name), console.warn(`Lite: thin instance base ${am.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: xm
          } = am;
          if (!xm) continue;
          am.computeWorldMatrix(), this.selected++;
          const wm = this.listsFor(am.renderingGroupId);
          for (const mm of Za(xm)) {
            const Tm = ka(mm);
            Tm && (Tm.needAlphaBlendingForMesh(am) ? wm.transparent.push(mm) : wm.opaque.push(mm))
          }
        }
      }
      Dk(mm, Tm) {
        if (Tm === mm.index >= 0) return;
        mm.steady = null;
        const fm = this.enabled;
        if (Tm) mm.index = fm.length, fm.push(mm);
        else {
          const Tm = fm.pop();
          Tm !== mm && (fm[mm.index] = Tm, Tm.index = mm.index), mm.index = -1
        }
      }
      listsFor(mm) {
        let Tm = this.groups.get(mm);
        return Tm || (Tm = {
          opaque: [],
          transparent: []
        }, this.groups.set(mm, Tm)), Tm
      }
    }
    var Xa = fm(39699);
    class Pa {
      constructor() {
        this.bundle = null, this.stale = !0, this.ni = new Set
      }
    }
    class Ha {
      constructor(mm, Tm, fm) {
        this.device = mm, this.slots = Tm, this.host = fm, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Pa, this.qN = new Pa, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new gA, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = mm => {
          mm.seen !== this.frame && (mm.draw && (mm.draw = null, this.args[5 * mm.slot + 1] = 0, this.argsDirty = !0, this.qN.stale ||= mm.qN), this.frame - mm.seen > 120 && (this.records.delete(mm.unit), this.freeSlots.push(mm.slot), mm.recorded && (this.bundleOf(mm).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(mm) {
          var Tm, fm;
          let hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Tm = null === (fm = globalThis.navigator) || void 0 === fm ? void 0 : fm.userAgent) && void 0 !== Tm ? Tm : "";
          const Am = mm.adapterInfo;
          return "intel" === (null === Am || void 0 === Am ? void 0 : Am.vendor) && "gen-12lp" === Am.architecture && hm.includes("Windows")
        }(mm), (0, Xa.E)(this.direct)
      }
      bI() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Xa.E)(this.directThisFrame)
      }
      add(mm, Tm, fm, hm) {
        let Am = this.records.get(mm);
        return Am || (Am = this.createRecord(mm), this.records.set(mm, Am)), Am.recorded && Ca(Am, Tm) || (this.bundleOf(Am).stale = !0), this.place(Am, Tm, fm, hm), Am
      }
      bundleOf(mm) {
        return mm.qN ? this.qN : this.main
      }
      addAgain(mm, Tm, fm, hm) {
        mm.recorded || (this.bundleOf(mm).stale = !0), this.place(mm, Tm, fm, hm)
      }
      place(mm, Tm, fm, hm) {
        mm.seen = this.frame, mm.qN && null === mm.draw && (this.qN.stale = !0), mm.draw = Tm, this.drawn++, fm && this.slots.write(mm.slot, fm, hm) && (this.slotsFrom = Math.min(this.slotsFrom, mm.slot), this.slotsTo = Math.max(this.slotsTo, mm.slot));
        const Am = this.args,
          am = 5 * mm.slot;
        Am[am] === Tm.count && Am[am + 1] === Tm.instances && Am[am + 2] === Tm.first || (Am[am] = Tm.count, Am[am + 1] = Tm.instances, Am[am + 2] = Tm.first, this.argsDirty = !0, this.qN.stale ||= mm.qN)
      }
      HI() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(mm) {
        for (const Tm of this.records.values()) Tm.draw && Tm.seen === this.frame && !Tm.qN && mm(Tm.draw, this.slots.data, Tm.slot * uh / 4)
      }
      resourceDestroyed(mm) {
        this.main.stale ||= this.main.ni.has(mm), this.qN.stale ||= this.qN.ni.has(mm)
      }
      execute(mm, Tm, fm) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(mm, Tm, fm, "direct"), this.drawn;
        const hm = this.host.sceneGroup(Tm);
        if (!hm) return this.main.bundle = null, this.qN.bundle = null, this.recordedSceneGroup = null, this.encode(mm, Tm, fm, "direct"), this.drawn;
        this.recordedTarget === fm && this.recordedSceneGroup === hm || (this.recordedTarget = fm, this.recordedSceneGroup = hm, this.main.stale = !0, this.qN.stale = !0);
        const Am = this.main,
          am = this.qN;
        let xm = !1;
        !Am.stale && Am.bundle || (Am.bundle = this.record(Tm, fm, hm, "indirect"), xm = !0);
        const wm = (0, Xa.i)();
        return (am.stale || this.rangedEpoch !== wm) && (this.rangedEpoch = wm, am.bundle = this.drawsRanged() ? this.record(Tm, fm, hm, "qN") : this.noRangedBundle(), xm = !0), xm && (this.bundles = am.bundle ? [Am.bundle, am.bundle] : [Am.bundle]), mm.executeBundles(this.bundles), mm.setBindGroup(0, hm), this.drawn
      }
      record(mm, Tm, fm, hm) {
        const Am = this.device.createRenderBundleEncoder({
          label: "qN" === hm ? "thin-bases-ranged" : "thin-bases",
          colorFormats: mm._colorFormat ? [mm._colorFormat] : [],
          depthStencilFormat: mm._depthStencilFormat,
          sampleCount: mm._sampleCount
        });
        return Am.setBindGroup(0, fm), this.encode(Am, mm, Tm, hm), Am.finish()
      }
      noRangedBundle() {
        for (const mm of this.records.values()) mm.qN && (mm.recorded = !1);
        return this.qN.ni.clear(), this.qN.stale = !1, null
      }
      drawsRanged() {
        for (const mm of this.records.values())
          if (mm.qN && mm.draw) return !0;
        return !1
      }
      encode(mm, Tm, fm, hm) {
        const Am = [];
        for (const Dm of this.records.values()) "direct" !== hm && Dm.qN !== ("qN" === hm) || (Dm.recorded = !1, Dm.draw && Am.push(Dm));
        Am.sort(ra);
        const am = "direct" === hm ? null : "qN" === hm ? this.qN : this.main;
        null === am || void 0 === am || am.ni.clear(), this.binder.reset();
        let xm = !1;
        for (const Dm of Am) {
          var wm;
          const Am = Dm.draw,
            im = this.host.pipelineFor(Am, Tm, fm);
          if (!im) {
            this.host.pipelineCompiling(Am, fm) ? xm = !0 : am && this.keep(Dm, Am, am.ni);
            continue
          }
          let Rm;
          if (Dm.qN && "indirect" !== hm) {
            const mm = Dm.unit.owner;
            Rm = "direct" === hm && (0, Xa.v)(mm) || (0, Xa.m)(mm) || void 0
          }
          if (am && this.keep(Dm, Am, am.ni), 0 === (null === (wm = Rm) || void 0 === wm ? void 0 : wm.count)) continue;
          this.binder.bind(mm, Am, im, this.slots.bindGroup, Dm.slot * uh);
          const pm = 5 * Dm.slot;
          if ("indirect" === hm) {
            Am.indexBuffer ? mm.drawIndexedIndirect(this.argsBuffer, 4 * pm) : mm.drawIndirect(this.argsBuffer, 4 * pm);
            continue
          }
          const Em = this.args;
          Rm ? ya(mm, null !== Am.indexBuffer, Em, pm, Rm) : Am.indexBuffer ? mm.drawIndexed(Em[pm], Em[pm + 1], Em[pm + 2], 0, 0) : mm.draw(Em[pm], Em[pm + 1], Em[pm + 2], 0)
        }
        am && (am.stale = xm)
      }
      keep(mm, Tm, fm) {
        mm.recorded = !0, mm.pipelineKey = Tm.pipelineKey, mm.materialGroup = Tm.material.bindGroup, mm.vertexBuffers.length = 0, mm.vertexBuffers.push(...Tm.vertexBuffers), mm.vertexOffsets = Tm.vertexOffsets, mm.indexBuffer = Tm.indexBuffer, mm.indexFormat = Tm.indexFormat;
        for (const hm of Tm.vertexBuffers) fm.add(hm);
        Tm.indexBuffer && fm.add(Tm.indexBuffer), fm.add(Tm.material.buffer);
        for (const hm of Tm.material.bound) hm && fm.add(hm)
      }
      createRecord(mm) {
        let Tm = this.freeSlots.pop();
        return void 0 === Tm && (Tm = this.slotCount++, this.grow()), {
          unit: mm,
          slot: Tm,
          qN: void 0 !== (0, Xa.m)(mm.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.qN.stale = !0), 5 * this.slotCount > this.args.length) {
          const mm = new Uint32Array(2 * this.args.length);
          mm.set(this.args), this.args = mm, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function ya(mm, Tm, fm, hm, Am) {
      const am = fm[hm + 1],
        xm = Am.data;
      for (let wm = 0; wm < Am.count; wm++) {
        const Am = Math.min(xm[2 * wm], am),
          Dm = Math.min(xm[2 * wm + 1], am - Am);
        0 !== Dm && (Tm ? mm.drawIndexed(fm[hm], Dm, fm[hm + 2], 0, Am) : mm.draw(fm[hm], Dm, fm[hm + 2], Am))
      }
    }

    function Ca(mm, Tm) {
      if (mm.pipelineKey !== Tm.pipelineKey || mm.materialGroup !== Tm.material.bindGroup || mm.indexBuffer !== Tm.indexBuffer || mm.indexFormat !== Tm.indexFormat || mm.vertexOffsets !== Tm.vertexOffsets || mm.vertexBuffers.length !== Tm.vertexBuffers.length) return !1;
      for (let fm = 0; fm < mm.vertexBuffers.length; fm++)
        if (mm.vertexBuffers[fm] !== Tm.vertexBuffers[fm]) return !1;
      return !0
    }

    function ra(mm, Tm) {
      return FA(mm.draw, Tm.draw)
    }
    const sa = new WeakMap,
      la = {
        depth: !1,
        sunShadow: !1
      };

    function Ma(mm, Tm) {
      let fm = sa.get(mm);
      fm || (fm = new Map, sa.set(mm, fm));
      const hm = `${Tm.depth?"-depth":""}${Tm.sunShadow?"-shadow":""}${Tm.shadowMask?"-mask":""}`;
      let Am = fm.get(hm);
      if (!Am) {
        const am = [{
          binding: kT.b,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: kT.f
          }
        }, {
          binding: kT.q,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Tm.depth && am.push({
          binding: kT.i,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Tm.sunShadow && am.push(... function() {
          const mm = GPUShaderStage.FRAGMENT,
            Tm = kT.k;
          return [{
            binding: Tm.uniform,
            visibility: mm,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Tm.lE,
            visibility: mm,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Tm.special,
            visibility: mm,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Tm.volume,
            visibility: mm,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Tm.sampler,
            visibility: mm,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Tm.entities,
            visibility: mm,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Tm.entityGrids,
            visibility: mm,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Tm.shadowMask && am.push({
          binding: kT.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Am = mm.createBindGroupLayout({
          label: `${Tm.depth?"terrain-":""}shader-pack-inputs${hm}`,
          entries: am
        }), fm.set(hm, Am)
      }
      return Am
    }

    function ua(mm) {
      return Ma(mm, la)
    }

    function Ba(mm, Tm) {
      if (!Tm) return !1;
      const fm = (0, bT.c)(mm);
      return !!fm && rf(fm, Tm)
    }

    function La(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!Eh(Tm)) return [];
      return [Ma(mm, {
        depth: wh(Tm.packVariant),
        sunShadow: Ba(Tm.packVariant, fm),
        shadowMask: hm
      })]
    }
    class va {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = mm, this.sunShadow = fm, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(kT.f), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = mm.createBuffer({
          label: "shader-pack-inputs",
          size: kT.f,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const hm = (0, kT.u)(Tm);
        this.textures = mm.createBuffer({
          label: "shader-pack-textures",
          size: hm.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), mm.queue.writeBuffer(this.textures, 0, hm), this.bindGroup = mm.createBindGroup({
          label: "shader-pack-inputs",
          layout: ua(mm),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: kT.b,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: kT.q,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(mm, Tm, fm) {
        (0, kT.x)(this.data, {
          seconds: mm.seconds(),
          lit: fm,
          renderOffset: mm.renderOffset(),
          Q0: mm.Q0(),
          eyePosition: Tm,
          shadowDirection: mm.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hm = Tm ? this.sunShadow : null;
        if ((Tm || fm) && !hm) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!mm && !hm) return this.bindGroup;
        (mm && mm !== this.depthView || fm && fm !== this.maskView) && (this.depthView = null !== mm && void 0 !== mm ? mm : this.depthView, this.maskView = null !== fm && void 0 !== fm ? fm : this.maskView, this.groups.clear());
        const Am = (mm ? 1 : 0) | (hm ? 2 : 0) | (fm ? 4 : 0);
        let am = this.groups.get(Am);
        if (!am) {
          const Tm = this.entries();
          mm && Tm.push({
            binding: kT.i,
            resource: mm
          }), hm && Tm.push(...hm.entries()), fm && Tm.push({
            binding: kT.n,
            resource: fm
          }), am = this.device.createBindGroup({
            label: `${mm||fm?"terrain-":""}shader-pack-inputs${mm?"-depth":""}${hm?"-shadow":""}${fm?"-mask":""}`,
            layout: Ma(this.device, {
              depth: !!mm,
              sunShadow: !!hm,
              shadowMask: !!fm
            }),
            entries: Tm
          }), this.groups.set(Am, am)
        }
        return am
      }
      bind(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        mm.setBindGroup(kT.e, this.bindGroupFor(Tm, fm, hm))
      }
    }

    function ta(mm, Tm, fm) {
      if (mm.gpuVersion === Tm.gpuBuffersVersion) return !0;
      let hm;
      do {
        if (hm = Tm.gpuBuffersVersion, !Ua(mm, Tm, fm)) return !1
      } while (Tm.gpuBuffersVersion !== hm);
      return mm.gpuVersion = hm, mm.fitInstances = 0, !0
    }

    function Ua(mm, Tm, fm) {
      let hm = null;
      for (let am = 0; am < mm.slotData.length; am++) {
        var Am;
        const xm = mm.slotData[am],
          wm = xm ? Tm.gpuBuffer(xm) : fm;
        if (!wm) return !1;
        xm && mm.layout.instanceEnds[am] < 0 && Tm.cover(xm, Number.POSITIVE_INFINITY), mm.buffers[am] = wm;
        const Dm = mm.B5[am] + (xm ? Tm.gpuOffset(xm) : 0);
        Dm !== (null !== (Am = hm) && void 0 !== Am ? Am : mm.offsets)[am] && (hm ??= mm.offsets.slice(), hm[am] = Dm), mm.ends[am] = xm ? Tm.gpuEnd(xm) : wm.size
      }
      return hm && (mm.offsets = hm), !0
    }

    function da(mm, Tm, fm, hm) {
      if (Tm <= mm.fitInstances) return null;
      const {
        layout: Am,
        ends: am,
        offsets: xm,
        slotData: wm,
        B5: Dm
      } = mm;
      let im = !1;
      for (let Rm = 0; Rm < Am.buffers.length; Rm++) {
        const mm = Am.instanceEnds[Rm];
        if (mm < 0) continue;
        const hm = (Tm - 1) * Am.buffers[Rm].arrayStride + mm;
        if (am[Rm] - xm[Rm] < hm) return {
          index: Rm,
          needed: hm
        };
        const pm = wm[Rm];
        pm && fm.cover(pm, Dm[Rm] + hm) && (im = !0)
      }
      return im && ta(mm, fm, hm), mm.fitInstances = Tm, null
    }
    var ga = fm(37872),
      Wa = fm(37905);
    const Fa = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      mx = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Tx = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      fx = `((vertexInputs.aPackedLightLevels >> 16u) | ${iT.c.placed}u)`,
      hx = "u32(vertexInputs.aShaderPackItem.x)",
      Ax = `${iT.c.lifeform}u`;

    function ax(mm) {
      return "item" === mm.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const xx = "bloxdSpEnchant",
      wx = "floor(finalWorld[3].xyz)";

    function Dx(mm, Tm, fm) {
      return "placed" === Tm.kind && mm.reads[fm].includes("bloxdFragmentBlockPosition")
    }

    function ix(mm, Tm) {
      let [fm, hm] = mm;
      return fm === Tm.point && hm === Tm.code
    }

    function Rx(mm, Tm) {
      var fm, hm, Am;
      const am = null === (fm = mm.find((mm => mm.texture))) || void 0 === fm ? void 0 : fm.texture,
        xm = null === (hm = mm.find((mm => mm.enchantTier))) || void 0 === hm ? void 0 : hm.enchantTier,
        wm = null === (Am = mm.find((mm => mm.overlay))) || void 0 === Am ? void 0 : Am.overlay,
        Dm = wm ? Tm.filter((mm => ix(mm, wm))).length : 0;
      return wm && 1 === Dm ? {
        texture: am,
        overlay: wm,
        enchantTier: xm
      } : {
        texture: am,
        enchantTier: xm
      }
    }

    function px(mm) {
      if ("item" === mm.kind) {
        return {
          vertexFlags: `(${hx} & 0xffffu)`,
          varying: "vPackItem",
          value: hx,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return mm.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: fx,
        varying: "vPackFlags",
        value: fx,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Ex(mm) {
      return "lifeform" === mm.kind ? Ax : "0u"
    }

    function ox(mm) {
      return !!mm.BLOXD_PLUGIN_ENCHANTMENT
    }

    function Ox(mm, Tm) {
      const {
        enchantTier: fm
      } = Tm;
      return fm && ox(Tm.defines) && "lifeform" === Tm.kind && Kx(mm, "enchantTier") ? fm : null
    }

    function Yx(mm, Tm) {
      return ox(Tm.defines) && Kx(mm, "enchantSpeed")
    }

    function qx(mm) {
      const {
        overlay: Tm,
        defines: fm
      } = mm;
      if (!Tm || !fm.DIFFUSE) return null;
      const hm = fm.VERTEXCOLOR || fm.INSTANCESCOLOR && fm.INSTANCES;
      return `vec4f(${Tm.colour}.rgb * uniforms.vDiffuseInfos.y${hm?" * fragmentInputs.vColor.rgb":""}, ${Tm.colour}.a)`
    }
    const jx = "fragmentInputs.vPackTexture";

    function Vx(mm) {
      const {
        atlas: Tm,
        defines: fm,
        texture: hm
      } = mm;
      if (Tm || !fm.DIFFUSE) return null;
      if (hm) return {
        texture: "diffuseSampler",
        ...hm
      };
      const Am = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===fm.DIFFUSEDIRECTUV?"vMainUV1":2===fm.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== mm.kind) return Am;
      if (!fm.BLOXD_PLUGIN_ANIMATED) return {
        ...Am,
        id: jx
      };
      const am = nm.b.WGSL,
        xm = (0, nm.Ab)(am, "uAnimStatesNum"),
        wm = (0, nm.Y)(am, (0, ga.g)(am), xm),
        Dm = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${xm})`,
        layers: [wm],
        uv: `vec2f(${Dm}.x, ${Dm}.y * ${xm} - ${wm})`,
        levelUv: Dm,
        id: jx
      }
    }

    function Ix(mm, Tm) {
      return "box" === Tm.kind && !!mm.hooks.surface && null !== Vx(Tm)
    }

    function Kx(mm, Tm) {
      return mm.reads.fragment.includes(Tm)
    }

    function Qx(mm) {
      return !!mm.BLOXD_LIGHTING && !mm.BLOXD_UNLIT
    }

    function nx(mm, Tm, fm, hm) {
      const Am = mm.filter((mm => {
        let [fm, hm] = mm;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === fm && hm === Tm
      }));
      if (1 !== Am.length) throw new Error(`A model program for shader packs has ${0===Am.length?"no":"more than one"} ${hm} code before fog (lite/modelShaderPack.ts)`);
      return mm.map((mm => mm === Am[0] ? [mm[0], fm] : mm))
    }

    function Jx(mm, Tm, fm, hm) {
      const {
        hooks: Am
      } = mm, {
        kind: am,
        defines: xm
      } = Tm, wm = [...fm];
      var Dm;
      Tm.atlas && Am.surface && wm.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", vf("atlasIdxIn")]), "item" === am && wm.push(["CUSTOM_VERTEX_DEFINITIONS", (0, nm.e)(nm.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Ix(mm, Tm) && wm.push(["CUSTOM_VERTEX_DEFINITIONS", (0, nm.e)(nm.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Dm = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Bf}[min(u32(${Dm}) - 1u, arrayLength(&${Bf}) - 1u)], ${Dm} > 0.5);\n`)]);
      const im = px(Tm);
      im && (Am.surface || Am.light) && wm.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${im.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${im.varying} = ${im.value};`]);
      let Rm = hm;
      if (Dx(mm, Tm, "fragment") && (wm.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${wx});`]), Rm = [...Rm, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Kx(mm, "localPosition") && wm.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${ax(Tm)};`]), ox(xm) && Am.surface) {
        Yx(mm, Tm) && wm.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const fm = Ox(mm, Tm);
        fm && wm.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${fm});`]);
        const hm = (0, nm.jb)(nm.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Rm = [...nx(Rm, (0, Wa.h)(nm.b.WGSL), hm, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Wa.e)(xx)]]
      }
      const {
        overlay: pm
      } = Tm;
      pm && qx(Tm) && Am.surface && (Rm = Rm.filter((mm => !ix(mm, pm))));
      const Em = Am.light ? function(mm) {
        return "placed" === mm.kind ? {
          name: "terrain",
          engine: (0, cT.Q)(nm.b.WGSL),
          pack: (0, cT.ib)(nm.b.WGSL)
        } : mm.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, cT.L)(nm.b.WGSL),
          pack: (0, cT.bb)(nm.b.WGSL)
        } : null
      }(Tm) : null;
      if (Em && (Rm = nx(Rm, Em.engine, Em.pack, `${Em.name} light`), "placed" !== am && Qx(xm))) {
        const mm = xm.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, nm.Ab)(nm.b.WGSL, "uEntityLightLevels") : (0, nm.Ib)(nm.b.WGSL, "aLightLevels");
        wm.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${cT.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, cT.eb)(nm.b.WGSL, mm)])
      }
      return {
        vertexCode: wm,
        fragmentCode: Rm
      }
    }

    function cx(mm, Tm, fm, hm) {
      return yf(mm, Tm, fm, hm, "model")
    }
    const zx = "\t@builtin(position) position: vec4f,\n";

    function Zx(mm, Tm) {
      const fm = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(mm)[0];
      return `${fm}${Tm}${mm.slice(fm.length)}`
    }

    function kx(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Am
      } = Tm, am = rf(Tm, hm), {
        kind: xm,
        defines: wm
      } = fm, Dm = function(mm, Tm) {
        var fm, hm, Am;
        const {
          defines: am
        } = Tm, xm = px(Tm), wm = !!am.FOG, Dm = ox(am), im = null !== (fm = null === xm || void 0 === xm ? void 0 : xm.enchantTier) && void 0 !== fm ? fm : Ox(mm, Tm) ? "fragmentInputs.vPackEnchantTier" : "0u", Rm = "lifeform" === Tm.kind && !am.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (hm = null === xm || void 0 === xm ? void 0 : xm.vertexFlags) && void 0 !== hm ? hm : Ex(Tm),
          vertexLocalPosition: ax(Tm),
          flags: null !== (Am = null === xm || void 0 === xm ? void 0 : xm.flags) && void 0 !== Am ? Am : Ex(Tm),
          normal: "normalW",
          alpha: Rm ? "alpha * baseColor.a" : "alpha",
          alphaOut: Rm ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: wm ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: wm ? "1.0 - fog" : "0.0",
          enchantTier: im,
          enchantColour: Dm ? `${xx}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: Yx(mm, Tm) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Kx(mm, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: qx(Tm)
        }
      }(Tm, fm), im = mm.textures.filter((mm => /^textureAtlas\d+$/.test(mm.name))).length, Rm = fm.atlas && im > 0 ? {
        count: im,
        layers: fm.atlas.layers,
        width: fm.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: mm.material.slots.has("uAnimDataPerTex") ? (Tm, fm) => Sh(Tm, fm, function(mm) {
          const Tm = mm.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            DE: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: mm => `uniforms.uAnimDataPerTex[${mm}]${Tm}`
          }
        }(mm)) : null
      } : null, pm = "placed" === xm ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Em = null !== Rm && void 0 !== Rm ? Rm : Vx(fm), om = function(mm, fm) {
        let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,kT.v)()}${lf(Tm,fm)}${hm}${Uf(mm)}${Xf}${pm}${Tm.code}`
      };
      let {
        vertex: Om,
        fragment: Ym
      } = mm;
      const qm = gf(Am, Dm);
      if (qm) {
        const mm = Dx(Tm, fm, "vertex") ? `\tbloxdSpCell = ${wx};\n` : "";
        Om = cx(Om, Fa, `${mm}${qm.slice(1)}${Fa}`, "vertex")
      }
      const jm = `${Mf(Tm,am,function(mm,Tm){return Tm.TWOSIDEDLIGHTING?mm:`select(-(${mm}), ${mm}, fragmentInputs.frontFacing)`}(Dm.normal,wm),Dm.flags)}${Wf(Am,Tm.strict,Tm.program,Em,Dm)}`;
      jm && (Ym = cx(Ym, mx, `${jm.slice(1)}${mx}`, "surface")), am && Tm.sunShadow && !wm.TWOSIDEDLIGHTING && (Ym = cx(Ym, zx, `${zx}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const Vm = Th(Am);
      if (Vm) {
        const mm = mh(Am, Qx(wm), !0, Dm);
        Ym = cx(Ym, Tx, `${mm}${Vm.slice(1)}${Tx}`, "light")
      }
      const Im = Ix(Tm, fm) ? Lf : "";
      return {
        ...mm,
        vertex: Zx(Om, om(Rm, !1, Im)),
        fragment: Zx(Ym, om(Em, am))
      }
    }
    const bx = {
      name: "earthSky",
      uniqueId: -1
    };
    class Sx {
      constructor(mm) {
        this.resources = mm, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const mm of this.instances.values()) mm.released = !0, this.resources.destroyBuffer(mm.buffer);
        this.instances.clear()
      }
    }

    function ex(mm) {
      return mm.failed && null !== mm.packGroup
    }
    class Nx {
      constructor(mm, Tm, fm) {
        this.device = mm, this.resources = Tm, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I5 = new Ga, this.modelMeshes = new ea, this.thinBundle = void 0, this.binder = new gA, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Va((mm => this.modelSlot(mm).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, RT.c)("Lite: "), this.renderStates = new oa(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (mm, Tm) => this.keepSteady(mm, Tm), this.lists = new WA(this.modelMeshes, this.I5, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new ia(Tm, this.warnOnce, ((mm, Tm, fm) => this.programWithModel(mm, Tm, fm)), ex), this.vertexLayouts = new na(Tm, mm.limits, this.warnOnce), this.sceneLayout = fT(mm), this.frameLayout = mm.createBindGroupLayout({
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
        }), this.frameBuffer = mm.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new za(mm, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = mm.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new Ha(mm, new za(mm, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (mm, Tm, fm) => this.pipelineFor(mm, Tm, fm),
          pipelineCompiling: (mm, Tm) => !mm.program.failed && !1 !== this.pipelines.get(`${mm.pipelineKey}|${Tm}`),
          sceneGroup: mm => {
            const Tm = fm(mm);
            return Tm || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Tm
          }
        }), Tm.onDestroy = mm => {
          this.thinBundle.resourceDestroyed(mm)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Am = {
          order: mm,
          isTransparent: Tm,
          _direct: !Tm,
          bind: (mm, Tm) => this.createBinding(Am, Tm, fm, hm)
        };
        return Am
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(mm, Tm, fm) {
        var hm;
        let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Tm, this.drawDefines.view = Tm, this.thinBundle.bI(), this.writeFrameUniforms();
        const am = null !== (hm = null === Am || void 0 === Am ? void 0 : Am.defineFor("model")) && void 0 !== hm ? hm : 0;
        this.drawDefines.modelPackVariant = am, Am && 0 !== am && (this.packInputs ??= new va(this.device, Am.textureLayers(), this.sunShadow), this.packInputs.write(Am, Tm.eye, Am.FY())), this.lists.clear(), this.slotCount = 0;
        const xm = mm.activeCamera;
        this.I5.select(xm, this.keepSteadyBase), this.modelMeshes.select(xm, Tm), fm && this.pushEarthSky(fm), this.lists.collect(mm), this.thinBundle.HI(), this.uploadMeshSlots()
      }
      pushDraws(mm, Tm, fm, hm, Am, am) {
        let xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const wm = am.length;
        for (let Dm = 0; Dm < fm; Dm++) {
          const fm = Tm[Dm];
          let wm = this.retainedDraw(mm, fm, hm, Am);
          if (void 0 === wm && (wm = this.drawFor(mm, fm, hm, Am), this.retain(fm, wm)), wm) {
            const mm = fm.owner,
              Tm = xm ? xm[Dm] : -1;
            wm.slotOffset = Tm < 0 ? this.writeMeshSlot(mm.getWorldMatrix().m, mm.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Tm], 16 * Tm), am.push(wm)
          }
        }
        return am.length - wm
      }
      bundleDraws(mm, Tm, fm) {
        let hm = 0;
        for (const Am of Tm) {
          let Tm = this.retainedDraw(mm, Am, fm, !1);
          const am = void 0 !== Tm;
          if (void 0 === Tm && (Tm = this.drawFor(mm, Am, fm, !1), this.retain(Am, Tm)), Tm) {
            const mm = Am.owner,
              fm = this.thinBundle.add(Am, Tm, mm.getWorldMatrix().m, mm.visibility);
            am && this.steadyFrom(Am, Tm, fm), hm++
          }
        }
        return hm
      }
      steadyFrom(mm, Tm, fm) {
        const hm = mm.owner,
          Am = this.I5.base(hm),
          am = hm.material,
          {
            drawState: xm,
            instance: wm
          } = Tm.inputs.retained;
        if (!Am || !am || 1 !== mm.parts.materials.length || ka(mm) !== am) return;
        const Dm = Am.steady ??= {
          unit: mm,
          material: am,
          visibility: 1,
          draw: Tm,
          record: fm,
          drawState: xm,
          instance: wm,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Dm.unit = mm, Dm.material = am, Dm.visibility = hm.visibility, Dm.draw = Tm, Dm.record = fm, Dm.drawState = xm, Dm.instance = wm, Dm.bindGroup = wm.bindGroup, Dm.gpuVersion = this.resources.gpuBuffersVersion, Dm.fitInstances = Tm.inputs.fitInstances, Dm.worldFlag = hm.getWorldMatrix().updateFlag, Dm.handedFrame = this.frame
      }
      keepSteady(mm, Tm) {
        const fm = mm.steady;
        if (fm.handedFrame !== this.frame - 1 || (this.frame + fm.phase) % 8 === 0) return !1;
        const hm = mm.mesh,
          {
            unit: Am,
            draw: am,
            instance: xm,
            drawState: wm
          } = fm,
          Dm = hm.forcedInstanceCount || hm.o4;
        if (!hm.isVisible || hm.Fhm || hm.visibility !== fm.visibility || 0 === (hm.layerMask & Tm.layerMask) || hm.material !== fm.material || 0 !== hm.renderingGroupId || hm.hasVertexAlpha || !this.drawDefines.definesHold(wm, Am, wm.instancing) || fm.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(am.inputs, Am, wm.instancing, am.program) || am.program.failed || xm.released || Dm <= 0 || Dm > fm.fitInstances) return !1;
        if (xm.frame !== this.frame && this.bindMaterial(xm, this.modelUniforms.refreshModelUniforms(hm.wG(), xm, xm.model, this.view)), !xm.bindable || xm.bindGroup !== fm.bindGroup) return !1;
        const im = hm.computeWorldMatrix(),
          Rm = im.updateFlag !== fm.worldFlag;
        return fm.worldFlag = im.updateFlag, am.instances = Dm, this.thinBundle.addAgain(fm.record, am, Rm ? im.m : null, fm.visibility), fm.handedFrame = this.frame, this.I5.drawn++, !0
      }
      retainedDraw(mm, Tm, fm, hm) {
        const Am = this.inputs.get(Tm),
          am = null === Am || void 0 === Am ? void 0 : Am.retained;
        if (!Am || !am) return;
        const {
          drawState: xm,
          program: wm,
          instance: Dm,
          instancing: im
        } = am, Rm = Tm.owner;
        if (ha(Rm) !== im) return;
        const pm = this.instanceCount(Rm, im);
        if (pm <= 0) return null;
        if (Dm.released || wm.failed || xm.program !== wm || !this.drawDefines.programCurrent(xm, Tm, im, fm) || !this.inputsStamped(Am, Tm, im, wm) || Rm.isUnIndexed !== am.unIndexed || this.indexKey(Tm) !== am.indexData) return;
        if (am.indexBuffer && am.gpuVersion !== this.resources.gpuBuffersVersion) {
          const mm = this.resources.gpuBuffer(am.indexData);
          if (!mm) return;
          am.indexBuffer = mm, am.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Em = !1;
        if (Dm.frame !== this.frame && (Em = this.modelUniforms.refreshModelUniforms(mm, Dm, Dm.model, this.view)), !this.bindMaterial(Dm, Em) || !this.withGpuBuffers(Am) || !this.instanceBuffersFit(Rm.name, Am, pm)) return null;
        const om = this.makeDraw(wm, Am, this.renderStates.renderState(xm.model, Rm, hm, Am.state), Dm, pm);
        return this.setRange(om, Tm, am.indexBuffer, am.indexData), om
      }
      retain(mm, Tm) {
        const fm = this.drawDefines.drawStates.get(mm);
        if (!Tm || !fm || fm.program !== Tm.program) {
          const Tm = this.inputs.get(mm);
          return void(Tm && (Tm.retained = null))
        }
        const hm = mm.owner,
          Am = fm.instancing,
          am = this.indexKey(mm),
          xm = Tm.inputs.retained;
        xm ? (xm.drawState = fm, xm.instancing = Am, xm.program = Tm.program, xm.instance = Tm.material, xm.indexData = am, xm.unIndexed = hm.isUnIndexed, xm.indexBuffer = Tm.indexBuffer, xm.gpuVersion = this.resources.gpuBuffersVersion) : Tm.inputs.retained = {
          drawState: fm,
          instancing: Am,
          program: Tm.program,
          instance: Tm.material,
          indexData: am,
          unIndexed: hm.isUnIndexed,
          indexBuffer: Tm.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(mm, Tm, fm, hm) {
        const Am = Tm.owner,
          am = ka(Tm);
        if (!am) return null;
        const xm = am.getClassName();
        let wm = null;
        if (function(mm) {
            return "LinesMesh" === mm.getClassName()
          }(Am)) {
          if (! function(mm) {
              return "ShaderMaterial" === mm.getClassName() && "color" === mm.shaderPath
            }(am)) return this.warnOnce(`lines:${xm}`, `A LinesMesh with a ${xm} is not drawn yet (${am.name})`), null;
          wm = Am
        } else if ("StandardMaterial" !== xm && "LiteMaterial" !== xm) return this.warnOnce(`class:${xm}`, `${xm} is not drawn yet (${am.name})`), null;
        const Dm = ha(Am),
          im = this.instanceCount(Am, Dm);
        if (im <= 0) return null;
        const Rm = wm ? this.lineProgramFor(Am, fm, Dm) : this.drawDefines.programFor(mm, Tm, am, fm, Dm);
        if (!Rm || Rm.failed) return null;
        const pm = wm ? null : this.drawDefines.drawStates.get(Tm).model,
          Em = pm ? this.modelInstance(pm, Rm) : this.materialInstance(Am, Rm);
        let om = !1;
        if (Em.frame !== this.frame && (wm ? Vm(Em.ubo, wm) : om = this.modelUniforms.refreshModelUniforms(mm, Em, Em.model, this.view)), !this.bindMaterial(Em, om)) return null;
        const Om = this.meshInputs(Tm, Rm, Dm);
        if (!Om || !this.instanceBuffersFit(Am.name, Om, im)) return null;
        const Ym = this.indexKey(Tm);
        let qm = null;
        if (Ym && !Am.isUnIndexed && (qm = this.resources.gpuBuffer(Ym), !qm)) return null;
        const jm = this.renderStates.renderState(null !== pm && void 0 !== pm ? pm : am, Am, hm, Om.state, wm ? "line-list" : "triangle-list"),
          Im = this.makeDraw(Rm, Om, jm, Em, im);
        return this.setRange(Im, Tm, qm, Ym), Im
      }
      indexKey(mm) {
        const Tm = wa(mm);
        return Tm ? this.resources.modelIndex(Tm) : null
      }
      setRange(mm, Tm, fm, hm) {
        fm && (mm.indexBuffer = fm, mm.indexFormat = this.resources.indexFormat(hm));
        const Am = 4 * Tm.range + (fm ? 0 : 2);
        mm.unit = Tm, mm.first = Tm.parts.mo[Am], mm.count = Tm.parts.mo[Am + 1]
      }
      makeDraw(mm, Tm, fm, hm, Am) {
        Tm.state !== fm && (Tm.state = fm, Tm.pipelineKey = `${mm.id}|${Tm.layout.key}|${fm.key}`, Tm.pipeline = null);
        const am = Tm.draw ??= {
          program: mm,
          inputs: Tm,
          pipelineKey: "",
          layout: Tm.layout,
          state: fm,
          material: hm,
          slotOffset: 0,
          vertexBuffers: Tm.buffers,
          vertexOffsets: Tm.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Am,
          unit: null
        };
        return am.program = mm, am.pipelineKey = Tm.pipelineKey, am.state = fm, am.material = hm, am.vertexOffsets = Tm.offsets, am.indexBuffer = null, am.instances = Am, am
      }
      instanceCount(mm, Tm) {
        switch (Tm) {
          case "thin":
            return mm.forcedInstanceCount || mm.o4;
          case "instanced":
            return this.prepareInstances(mm);
          case "none":
            return 1
        }
      }
      prepareInstances(mm) {
        const Tm = function(mm, Tm) {
          const fm = Tm._userInstancedBuffersStorage,
            hm = mm.batchUploads.get(Tm);
          if (hm) {
            var Am;
            if (hm.layout === (null !== (Am = null === fm || void 0 === fm ? void 0 : fm.interleavedKinds) && void 0 !== Am ? Am : null)) return hm;
            hm.release()
          }
          return new Lm(mm, Tm, fm)
        }(this.resources, mm);
        return Tm.frame !== this.frame && Tm.pack(mm, this.modelMeshes.instanceBatch(mm), this.modelMeshes.worlds, this.frame), Tm.count
      }
      programWithModel(mm, Tm, fm) {
        const hm = this.modelSlot(mm),
          Am = Ra(hm, mm, fm),
          am = this.drawDefines.modelPackKind(mm),
          xm = am ? function(mm, Tm, fm, hm) {
            const Am = (0, zm.y)(mm, Jm.j.name),
              am = [];
            for (const {
                feature: Dm,
                state: im,
                active: Rm
              }
              of mm.features) {
              var xm, wm;
              const mm = Rm ? null === (xm = (wm = (0, pT.i)(Dm)).KO) || void 0 === xm ? void 0 : xm.call(wm, im) : void 0;
              mm && am.push(mm)
            }
            return {
              kind: Tm,
              atlas: null !== Am && void 0 !== Am && Am.active ? (0, Jm.d)(Am.state) : null,
              defines: fm,
              ...Rx(am, hm)
            }
          }(mm, am, Tm, hm.fragmentCode) : null;
        if (xm && function(mm) {
            const Tm = mm.defines;
            return (null === mm.atlas || !!Tm.DIFFUSE && 1 === Tm.DIFFUSEDIRECTUV) && !!Tm.NORMAL && !Tm.REFLECTION && !Tm.EMISSIVEASILLUMINATION && !Tm.LINKEMISSIVEWITHDIFFUSE
          }(xm)) {
          const fm = this.modelPackProgram(mm, Tm, `${Am}#${am}#sp${this.drawDefines.modelPackVariant}`, hm, xm);
          if (fm && !fm.failed) return fm
        }
        const wm = this.programs.get(Am);
        if (wm || this.unbuildable.has(Am)) return null !== wm && void 0 !== wm ? wm : null;
        let Dm;
        try {
          Dm = RA({
            defines: aa(Tm),
            vertexCode: hm.vertexCode,
            fragmentCode: hm.fragmentCode,
            pluginUniforms: hm.pluginUniforms
          })
        } catch (im) {
          return this.unbuildable.add(Am), this.warnOnce(`build:${Am}`, `could not build a program for ${mm.name}: ${String(im)}`), null
        }
        return this.createProgram(Am, Dm, "standard")
      }
      modelPackProgram(mm, Tm, fm, hm, Am) {
        const am = this.programs.get(fm);
        if (am || this.unbuildable.has(fm)) return null !== am && void 0 !== am ? am : null;
        const xm = this.drawDefines.modelPackVariant;
        let wm;
        try {
          const mm = function(mm) {
              return (0, bT.b)(mm, "model")
            }(xm),
            fm = Jx(mm, Am, hm.vertexCode, hm.fragmentCode);
          wm = kx(RA({
            defines: aa(Tm),
            ...fm,
            pluginUniforms: hm.pluginUniforms
          }), mm, Am, !!this.sunShadow)
        } catch (Rm) {
          return this.unbuildable.add(fm), this.warnOnce(`build:${fm}`, `could not build a shader pack program for ${mm.name}, which draws without the pack: ${String(Rm)}`), null
        }
        const Dm = Ba(xm, !!this.sunShadow),
          im = {
            group: this.packInputs.bindGroupFor(null, Dm),
            layout: Ma(this.device, {
              depth: !1,
              sunShadow: Dm
            })
          };
        return this.createProgram(fm, wm, function(mm) {
          return `standard-sp${mm}`
        }(xm), im)
      }
      lineProgramFor(mm, Tm, fm) {
        const hm = jm(mm, fm, Tm, this.view);
        let Am = this.linePrograms.get(hm);
        var am;
        return Am || (Am = this.createProgram(`lines#${hm}`, (am = function(mm) {
          const Tm = new Map;
          for (let fm = 0; fm < im.length; fm++) mm & 1 << fm && Tm.set(im[fm], !0);
          return Tm
        }(hm), OA({
          defines: am,
          vertex: EA,
          fragment: oA,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(hm, Am)), Am
      }
      createProgram(mm, Tm, fm) {
        var hm;
        let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const am = this.nextProgramId++,
          xm = `${fm}-${am}`,
          wm = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Dm = [{
            binding: 0,
            visibility: wm,
            buffer: {
              type: "uniform"
            }
          }];
        for (const pm of Tm.textures) Dm.push({
          binding: pm.binding,
          visibility: wm,
          texture: {
            viewDimension: pm.dimension
          }
        }), Dm.push({
          binding: pm.samplerBinding,
          visibility: wm,
          sampler: {}
        });
        const im = this.device.createBindGroupLayout({
            label: xm,
            entries: Dm
          }),
          Rm = {
            key: mm,
            id: am,
            kind: fm,
            program: Tm,
            vertex: this.device.createShaderModule({
              label: `${xm}-vertex`,
              code: Tm.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${xm}-fragment`,
              code: Tm.fragment
            }),
            materialLayout: im,
            pipelineLayout: this.device.createPipelineLayout({
              label: xm,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, im, ...Am ? [Am.layout] : []]
            }),
            packGroup: null !== (hm = null === Am || void 0 === Am ? void 0 : Am.group) && void 0 !== hm ? hm : null,
            failed: !1
          };
        return this.programs.set(mm, Rm), Rm
      }
      writeFrameUniforms() {
        const mm = this.frameUniforms;
        ja(this.view, mm), this.device.queue.writeBuffer(this.frameBuffer, 0, mm)
      }
      materialInstance(mm, Tm) {
        let fm = this.materials.get(mm);
        if (!fm) {
          const Tm = new Map;
          this.materials.set(mm, Tm), mm.iG.addOnce((() => {
            for (const mm of Tm.values()) mm.released = !0, this.resources.destroyBuffer(mm.buffer);
            this.materials.delete(mm)
          })), fm = Tm
        }
        let hm = fm.get(Tm.key);
        return hm || (hm = this.newMaterialInstance(mm, null, Tm), fm.set(Tm.key, hm)), hm
      }
      modelInstance(mm, Tm) {
        const fm = this.modelSlot(mm);
        let hm = fm.instances.get(Tm.key);
        return hm || (hm = this.newMaterialInstance(mm, mm, Tm), fm.instances.set(Tm.key, hm)), hm
      }
      modelSlot(mm) {
        let Tm = mm.gpu[km.c.lite];
        return Tm || (Tm = new Sx(this.resources), mm.gpu[km.c.lite] = Tm), Tm
      }
      newMaterialInstance(mm, Tm, fm) {
        const hm = fm.program.material.floats,
          Am = new Float32Array(hm),
          am = new Map;
        return {
          owner: mm,
          model: Tm,
          program: fm,
          data: Am,
          uploaded: new Float32Array(hm).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${mm.name}-uniforms`,
            size: Math.max(16, 4 * hm),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: am,
          ubo: new qa(fm.program.material.slots, Am, am),
          bindGroup: null,
          bound: new Array(2 * fm.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(mm) {
        var Tm;
        const fm = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: IA + KA,
            fragment: IA + QA,
            attributes: [],
            material: VA,
            textures: []
          }, "earthSky"),
          hm = this.earthSkyUniforms ??= this.newMaterialInstance(bx, null, fm);
        this.earthSkyFrom !== mm && (this.earthSkyFrom = mm, hm.data.fill(0)), SA(hm.ubo, mm, this.view);
        const Am = this.vertexInputs(fm, bx, "earthSky", fm, null);
        if (fm.failed || !Am || !this.bindMaterial(hm, !1)) return;
        const am = null !== (Tm = Am.state) && void 0 !== Tm ? Tm : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          xm = this.makeDraw(fm, Am, am, hm, 1);
        xm.count = YA.length;
        const wm = eA(mm, this.view);
        xm.slotOffset = this.writeMeshSlot(wm, 1), this.lists.skyDraws.push(xm)
      }
      uploadIfChanged(mm) {
        const {
          data: Tm,
          uploaded: fm
        } = mm;
        for (let hm = 0; hm < Tm.length; hm++)
          if (Tm[hm] !== fm[hm]) return fm.set(Tm), void this.device.queue.writeBuffer(mm.buffer, 0, Tm)
      }
      bindMaterial(mm, Tm) {
        return mm.frame !== this.frame && (mm.frame = this.frame, Tm || this.uploadIfChanged(mm), mm.bindable = this.bindTextures(mm)), mm.bindable
      }
      bindTextures(mm) {
        const {
          program: Tm,
          bound: fm
        } = mm, hm = Tm.program.textures;
        let Am = !mm.bindGroup,
          am = !0;
        for (let xm = 0; xm < hm.length; xm++) {
          const Tm = mm.textures.get(hm[xm].name),
            wm = Tm ? this.resources.boundTexture(Tm) : null;
          wm ? fm[2 * xm] === wm.view && fm[2 * xm + 1] === wm.sampler || (fm[2 * xm] = wm.view, fm[2 * xm + 1] = wm.sampler, Am = !0) : (Tm || mm.ubo.expected.has(hm[xm].name) || this.warnOnce(`texture:${mm.owner.name}:${hm[xm].name}`, `${mm.owner.name} has no ${hm[xm].name}`), am = !1)
        }
        if (!am) return Am && (mm.bindGroup = null), !1;
        if (Am) {
          const Am = [{
            binding: 0,
            resource: {
              buffer: mm.buffer
            }
          }];
          for (let mm = 0; mm < hm.length; mm++) Am.push({
            binding: hm[mm].binding,
            resource: fm[2 * mm]
          }), Am.push({
            binding: hm[mm].samplerBinding,
            resource: fm[2 * mm + 1]
          });
          mm.bindGroup = this.device.createBindGroup({
            label: `${mm.owner.name}-material`,
            layout: Tm.materialLayout,
            entries: Am
          })
        }
        return !0
      }
      writeMeshSlot(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, mm, Tm, fm), this.slotCount++ * uh
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(mm, Tm, fm, hm, Am) {
        let am = this.inputs.get(mm);
        if (!am || am.program !== hm || !Ja(Tm, am, this.resources, Am)) {
          var xm;
          if (am = null !== (xm = this.vertexLayouts.resolveInputs(Tm, fm, hm, Am)) && void 0 !== xm ? xm : void 0, !am) return null;
          this.inputs.set(mm, am)
        }
        return this.withGpuBuffers(am)
      }
      meshInputs(mm, Tm, fm) {
        const hm = this.inputs.get(mm);
        if (hm && this.inputsStamped(hm, mm, fm, Tm)) return this.withGpuBuffers(hm);
        const Am = mm.owner,
          am = wa(mm),
          xm = this.vertexInputs(mm, Am, Am.name, Tm, am);
        return xm && (xm.geometry = Da(mm), xm.instanceLayout = this.drawDefines.instanceLayout(Am, fm)), xm
      }
      inputsStamped(mm, Tm, fm, hm) {
        return function(mm, Tm, fm, hm) {
          return mm.program === fm && mm.geometry === Da(Tm) && mm.instanceLayout === hm
        }(mm, Tm, hm, this.drawDefines.instanceLayout(Tm.owner, fm))
      }
      withGpuBuffers(mm) {
        return ta(mm, this.resources, this.zeroBuffer) ? mm : null
      }
      instanceBuffersFit(mm, Tm, fm) {
        const hm = da(Tm, fm, this.resources, this.zeroBuffer);
        if (hm) {
          const Am = Tm.ends[hm.index] - Tm.offsets[hm.index] + Tm.B5[hm.index];
          return this.warnOnce(`overrun:${mm}`, `${mm} draws ${fm} instances from a ${Am}-byte buffer (${hm.needed} needed)`), !1
        }
        return !0
      }
      createBinding(mm, Tm, fm, hm) {
        const Am = `${Tm._colorFormat}|${Tm._depthStencilFormat}|${Tm._depthCompare}|${Tm._sampleCount}`,
          am = wT(this.device, Tm);
        if (mm === this.skyLastRenderable) {
          let fm = null;
          return {
            renderable: mm,
            pipeline: am,
            draw: mm => fm ? this.drawSky(mm, Tm, Am, fm) : 0,
            update: mm => {
              fm = mm
            }
          }
        }
        return {
          renderable: mm,
          pipeline: am,
          draw: mm => (hm ? hm.execute(mm, Tm, Am) : 0) + this.drawList(mm, Tm, Am, fm)
        }
      }
      drawSky(mm, Tm, fm, hm) {
        const Am = this.lists.skyDraws,
          am = Am.length > 0;
        if (am) {
          var xm;
          const fm = (null !== (xm = Tm._depthCompare) && void 0 !== xm ? xm : hT).startsWith("greater") ? 0 : 1;
          mm.setViewport(0, 0, hm.targetWidth, hm.targetHeight, fm, fm)
        }
        const wm = this.drawList(mm, Tm, fm, Am);
        return am && mm.setViewport(0, 0, hm.targetWidth, hm.targetHeight, 0, 1), wm
      }
      drawList(mm, Tm, fm, hm) {
        let Am = 0;
        const am = this.binder;
        am.reset();
        for (const xm of hm) {
          const hm = this.pipelineFor(xm, Tm, fm);
          hm && (am.bind(mm, xm, hm, this.meshSlots.bindGroup, xm.slotOffset), xm.indexBuffer ? mm.drawIndexed(xm.count, xm.instances, xm.first, 0, 0) : mm.draw(xm.count, xm.instances, xm.first, 0), Am++)
        }
        return Am
      }
      pipelineFor(mm, Tm, fm) {
        var hm, Am;
        if (mm.program.failed) return null;
        const am = mm.inputs;
        if (am.pipeline && am.pipelineTarget === fm) return am.pipeline;
        const xm = `${mm.pipelineKey}|${fm}`,
          wm = this.pipelines.get(xm);
        if (void 0 !== wm) return wm && (am.pipeline = wm, am.pipelineTarget = fm), wm || null;
        this.pipelines.set(xm, null);
        const {
          program: Dm,
          layout: im,
          state: Rm
        } = mm, pm = {
          label: `standard-${Dm.id}`,
          layout: Dm.pipelineLayout,
          vertex: {
            module: Dm.vertex,
            entryPoint: "main",
            buffers: im.buffers
          },
          fragment: Wm({
            module: Dm.fragment,
            entryPoint: "main"
          }, Tm, Rm.blend, Rm.colourWrite),
          depthStencil: Tm._depthStencilFormat ? {
            format: Tm._depthStencilFormat,
            depthCompare: null !== (hm = null !== (Am = Rm.depthCompare) && void 0 !== Am ? Am : Tm._depthCompare) && void 0 !== hm ? hm : hT,
            depthWriteEnabled: Rm.depthWrite,
            depthBias: Rm.depthBias,
            depthBiasSlopeScale: Rm.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Tm._sampleCount
          },
          primitive: {
            topology: Rm.topology,
            frontFace: Rm.frontFace,
            cullMode: Rm.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(pm).then((mm => {
          this.compiling--, this.pipelines.set(xm, mm)
        }), (mm => {
          this.compiling--, this.reportFailure(Dm, xm, mm)
        })), null
      }
      forEachSunShadowCaster(mm) {
        const Tm = this.caster,
          fm = (fm, hm, Am) => {
            const am = fm.unit && function(mm) {
              const Tm = mm.material.model;
              return null !== Tm && (Tm.lifeform || Tm.item) && Tm.castsSunShadow && "triangle-list" === mm.state.topology
            }(fm) ? wa(fm.unit) : null;
            if (!am) return;
            const xm = fm.unit.owner;
            switch (Tm.geometry = am, Tm.skip = xm.noSunShadowVertices, Tm.indexed = null !== fm.indexBuffer, Tm.first = fm.first, Tm.count = fm.count, Tm.oE = hm, Tm.worldAt = Am, Tm.instances = null, Tm.instanceCount = 1, Tm.thin = !1, ha(xm)) {
              case "thin": {
                const mm = xm._thinInstanceDataStorage.matrixData;
                if (!mm) return;
                Tm.instances = mm, Tm.instanceCount = Math.min(fm.instances, mm.length / 16), Tm.thin = !0;
                break
              }
              case "instanced": {
                const mm = this.resources.batchUploads.get(xm);
                if (!mm || mm.frame !== this.frame || !this.writeBatchCasters(mm)) return;
                break
              }
            }
            mm(Tm)
          };
        for (const hm of this.lists.opaqueDraws) fm(hm, this.meshSlots.data, hm.slotOffset / 4);
        this.thinBundle.forEachDrawn(fm)
      }
      writeBatchCasters(mm) {
        const {
          caster: Tm
        } = this, fm = mm.packedMatrices, hm = mm.count;
        Tm.instances = fm, Tm.instanceCount = hm;
        let Am = -1;
        for (let am = 0; am < hm; am++) {
          const Tm = Gx(mm.packedRowMesh(am));
          Tm && Am < 0 ? (this.casterWorlds.length < 16 * hm && (this.casterWorlds = new Float32Array(fm.length)), this.casterWorlds.set(fm.subarray(0, 16 * am)), Am = am) : !Tm && Am >= 0 && (this.casterWorlds.set(fm.subarray(16 * am, 16 * am + 16), 16 * Am), Am++)
        }
        return Am >= 0 && (Tm.instances = this.casterWorlds, Tm.instanceCount = Am), Tm.instanceCount > 0
      }
      async reportFailure(mm, Tm, fm) {
        const hm = [];
        let Am = !0;
        for (const [am, xm] of [
            ["vertex", mm.vertex],
            ["fragment", mm.fragment]
          ]) {
          const mm = await xm.getCompilationInfo();
          for (const Tm of mm.messages) Am &&= "error" !== Tm.type, hm.push(`${am}:${Tm.lineNum}:${Tm.linePos} ${Tm.type}: ${Tm.message}`)
        }
        if (Am && !mm.packGroup) return this.pipelines.set(Tm, !1), console.error(`Lite: pipeline ${Tm} failed`, fm), void dA("mesh", mm.kind, fm);
        mm.failed || (mm.failed = !0, console.error(`Lite: program ${mm.id} failed`, fm, hm.join("\n"), {
          program: mm.program,
          key: mm.key
        }), dA("mesh", mm.kind, fm, Am ? null : hm[0]))
      }
    }

    function Gx(mm) {
      var Tm, fm;
      const hm = null === (Tm = mm.RP) || void 0 === Tm || null === (fm = Tm.aShaderPackItem) || void 0 === fm ? void 0 : fm.x;
      return void 0 !== hm && 0 !== (hm & iT.h)
    }
    var Xx = fm(41703),
      Px = fm(41709),
      Hx = fm(41714),
      yx = fm(41676);
    const Cx = [0, 3, 1, 4, 2, 5];

    function rx(mm, Tm, fm, hm, Am) {
      const am = fm[0].width;
      try {
        return Am ? function(mm, Tm, fm) {
          const hm = (0, yx.d)(mm, fm, fm, 6);
          for (let Am = 0; Am < 6; Am++)(0, yx.g)(mm, hm, Am, Tm[Cx[Am]], {
            invertY: !1
          });
          return hm.texture
        }(mm, fm, am) : function(mm, Tm, fm, hm) {
          const Am = mm.createTexture({
            label: "sink-cube",
            size: {
              width: fm,
              height: fm,
              depthOrArrayLayers: 6
            },
            format: hm,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let am = 0; am < 6; am++) mm.queue.copyExternalImageToTexture({
            source: Tm[Cx[am]]
          }, {
            texture: Am,
            origin: {
              x: 0,
              y: 0,
              z: am
            }
          }, {
            width: fm,
            height: fm
          });
          return Am
        }(Tm, fm, am, 1 === hm ? "r8unorm" : "rgba8unorm")
      } finally {
        sx(fm)
      }
    }

    function sx(mm) {
      for (const Tm of null !== mm && void 0 !== mm ? mm : []) null === Tm || void 0 === Tm || Tm.close()
    }
    async function lx(mm) {
      const Tm = [],
        fm = [];
      if (await Promise.all(mm.map(((mm, hm) => (Tm[hm] = null, mm.then((mm => {
          Tm[hm] = mm
        }), (mm => {
          fm.push(mm)
        })))))), fm.length > 0) throw sx(Tm), fm[0];
      return Tm
    }
    class Mx {
      constructor(mm) {
        this.yp = mm, this.starts = [], this.lengths = [], this.used = 0, mm > 0 && (this.starts.push(0), this.lengths.push(mm))
      }
      allocate(mm) {
        const {
          starts: Tm,
          lengths: fm
        } = this;
        for (let hm = 0; hm < Tm.length; hm++) {
          if (fm[hm] < mm) continue;
          const Am = Tm[hm];
          return fm[hm] === mm ? (Tm.splice(hm, 1), fm.splice(hm, 1)) : (Tm[hm] += mm, fm[hm] -= mm), this.used += mm, Am
        }
        return -1
      }
      free(mm, Tm) {
        this.used -= Tm;
        const fm = Math.min(mm + Tm, this.yp);
        fm > mm && this.release(mm, fm - mm)
      }
      grow(mm) {
        const Tm = this.yp;
        this.yp = mm, this.release(Tm, mm - Tm)
      }
      truncate(mm) {
        const {
          starts: Tm,
          lengths: fm
        } = this;
        for (let hm = Tm.length - 1; hm >= 0 && Tm[hm] + fm[hm] > mm; hm--) Tm[hm] >= mm ? (Tm.splice(hm, 1), fm.splice(hm, 1)) : fm[hm] = mm - Tm[hm];
        this.yp = mm
      }
      release(mm, Tm) {
        const {
          starts: fm,
          lengths: hm
        } = this;
        let Am = 0,
          am = fm.length;
        for (; Am < am;) {
          const Tm = Am + am >> 1;
          fm[Tm] < mm ? Am = Tm + 1 : am = Tm
        }
        const xm = Am,
          wm = xm > 0 && fm[xm - 1] + hm[xm - 1] === mm,
          Dm = xm < fm.length && mm + Tm === fm[xm];
        wm && Dm ? (hm[xm - 1] += Tm + hm[xm], fm.splice(xm, 1), hm.splice(xm, 1)) : wm ? hm[xm - 1] += Tm : Dm ? (fm[xm] = mm, hm[xm] += Tm) : (fm.splice(xm, 0, mm), hm.splice(xm, 0, Tm))
      }
    }
    const ux = 256;
    class Bx {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = mm, this.onReplaced = Tm, this.mergeGap = fm, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.mo = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Am = Math.max(ux, Math.ceil(hm / ux) * ux);
        this.bytes = new Uint8Array(Am), this.words = new Uint32Array(this.bytes.buffer), this.mo = new Mx(Am / ux)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(mm) {
        return Math.max(1, Math.ceil(mm / ux)) * ux
      }
      allocate(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mm;
        const hm = Bx.slotBytes(mm),
          Am = hm / ux;
        let am = this.mo.allocate(Am);
        am < 0 && (this.grow(this.mo.yp + Am), am = this.mo.allocate(Am));
        const xm = am * ux;
        return this.growTo(xm + Math.max(fm, hm)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, xm, xm + hm), Tm && this.bytes.set(new Uint8Array(Tm.buffer, Tm.byteOffset, Math.min(Tm.byteLength, hm)), xm), this.markDirty(xm, xm + hm), xm
      }
      growTo(mm) {
        const Tm = Math.ceil(mm / ux);
        Tm > this.mo.yp && this.grow(Tm)
      }
      free(mm, Tm) {
        this.freed.push(mm, Tm)
      }
      write(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (hm <= 0) return;
        hm <= 1024 && 0 === (3 & (mm | fm | hm)) ? this.copyWords(mm >> 2, Tm.buffer, fm >> 2, hm >> 2) : this.bytes.set(new Uint8Array(Tm.buffer, fm, hm), mm);
        let am = mm + hm;
        if (Am) {
          const Tm = mm + 4 * Math.ceil(hm / 4);
          this.bytes.fill(0, am, Tm), am = Tm
        }
        this.markDirty(mm, am)
      }
      copyWords(mm, Tm, fm, hm) {
        let Am = this.sourceWords.get(Tm);
        Am || (Am = new Uint32Array(Tm, 0, Tm.byteLength >> 2), this.sourceWords.set(Tm, Am));
        const am = this.words;
        for (let xm = 0; xm < hm; xm++) am[mm + xm] = Am[fm + xm]
      }
      move(mm, Tm, fm) {
        this.bytes.copyWithin(Tm, mm, mm + fm), this.markDirty(Tm, Tm + fm)
      }
      flush() {
        for (const Tm of this.retired) this.onReplaced(Tm), Tm.destroy();
        this.retired.length = 0;
        const mm = this.dirtyStarts.length;
        if (mm > 0) {
          const {
            dirtyStarts: Tm,
            dirtyEnds: fm,
            order: hm
          } = this;
          hm.length = mm;
          for (let wm = 0; wm < mm; wm++) hm[wm] = wm;
          mm > 1 && hm.sort(((mm, fm) => Tm[mm] - Tm[fm]));
          const Am = this.mergeGap;
          let am = Tm[hm[0]],
            xm = fm[hm[0]];
          for (let wm = 1; wm < mm; wm++) {
            const mm = hm[wm];
            Tm[mm] - xm <= Am ? xm = Math.max(xm, fm[mm]) : (this.send(am, xm), am = Tm[mm], xm = fm[mm])
          }
          this.send(am, xm), Tm.length = 0, fm.length = 0
        }
        this.holding = !1
      }
      HI() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const mm = this.freed;
        for (let Tm = 0; Tm < mm.length; Tm += 2) this.mo.free(mm[Tm] / ux, mm[Tm + 1] / ux);
        mm.length = 0
      }
      send(mm, Tm) {
        this.device.queue.writeBuffer(this.gpu, mm, this.bytes.buffer, mm, Tm - mm);
        for (const fm of this.replaced) {
          const hm = Math.min(Tm, fm.size);
          hm > mm && this.device.queue.writeBuffer(fm, mm, this.bytes.buffer, mm, hm - mm)
        }
      }
      markDirty(mm, Tm) {
        mm &= -4, Tm = Tm + 3 & -4, this.holding ? (this.dirtyStarts.push(mm), this.dirtyEnds.push(Tm)) : this.send(mm, Tm)
      }
      grow(mm) {
        const Tm = this.mo.yp,
          fm = Math.max(2 * Tm, mm),
          hm = new Uint8Array(fm * ux);
        hm.set(this.bytes);
        const Am = this.gpu;
        this.gpu = this.createGpu(hm.byteLength), this.bytes = hm, this.words = new Uint32Array(hm.buffer), this.mo.grow(fm), Am && (this.replaced.push(Am), this.onReplaced(Am)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Tm * ux)
      }
      createGpu(mm) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: mm,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Lx(mm) {
      return Array.isArray(mm) ? new Float32Array(mm) : mm
    }

    function vx(mm, Tm, fm, hm, Am) {
      const am = GA(Am),
        xm = Math.min(Am, hm.byteLength);
      if (am === xm && hm.byteOffset % 4 === 0) return void mm.queue.writeBuffer(Tm, fm, hm.buffer, hm.byteOffset, am);
      const wm = new Uint8Array(am);
      wm.set(new Uint8Array(hm.buffer, hm.byteOffset, xm)), mm.queue.writeBuffer(Tm, fm, wm)
    }

    function tx(mm, Tm, fm) {
      const hm = "linear",
        Am = "nearest";
      let am = Am,
        xm = Am,
        wm = "nearest",
        Dm = !Tm;
      switch (mm) {
        case 11:
          am = hm, xm = hm;
          break;
        case 3:
          am = hm, xm = hm, wm = Tm ? "linear" : "nearest";
          break;
        case 8:
          wm = Tm ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          xm = hm;
          break;
        case 6:
          xm = hm, wm = Tm ? "linear" : "nearest";
          break;
        case 7:
          xm = hm, Dm = !0;
          break;
        case 9:
          am = hm;
          break;
        case 10:
          am = hm, wm = Tm ? "linear" : "nearest";
          break;
        case 2:
          am = hm, xm = hm, fm > 1 ? (wm = "linear", Dm = !1) : Dm = !0;
          break;
        case 12:
          am = hm, Dm = !0;
          break;
        default:
          Dm = !0
      }
      return fm > 1 && !Dm ? {
        magFilter: hm,
        minFilter: hm,
        mipmapFilter: "linear",
        maxAnisotropy: fm
      } : {
        magFilter: am,
        minFilter: xm,
        mipmapFilter: wm,
        ...Dm ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Ux(mm) {
      return 0 === mm ? "clamp-to-edge" : 2 === mm ? "mirror-repeat" : "repeat"
    }
    class dx {
      constructor(mm, Tm) {
        let {
          vertexArena: fm = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = mm, this.device = Tm, this.buffers = new WeakMap, this.S_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = fm ? new Bx(Tm, (mm => {
          var Tm;
          null === (Tm = this.onDestroy) || void 0 === Tm || Tm.call(this, mm), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var mm;
        null === (mm = this.arena) || void 0 === mm || mm.flush()
      }
      endUploadFrame() {
        var mm;
        null === (mm = this.arena) || void 0 === mm || mm.HI()
      }
      vertexBufferCreated(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fm ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(mm);
        const Am = Lx(Tm);
        mm.yp = Am.byteLength, this.buffers.set(mm, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: fm && null !== this.arena,
          pending: Am,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: hm
        })
      }
      vertexBufferUpdated(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        const Am = this.buffers.get(mm);
        if (!Am) return;
        const am = Lx(Tm),
          xm = void 0 === hm ? am.byteLength : Math.min(hm, am.byteLength);
        this.update(Am, am, fm, xm)
      }
      vertexBufferFloatsUpdated(mm, Tm, fm, hm) {
        const Am = this.buffers.get(mm);
        if (!Am) return;
        const am = fm * Float32Array.BYTES_PER_ELEMENT,
          xm = (hm - fm) * Float32Array.BYTES_PER_ELEMENT;
        Am.slot >= 0 && xm > 0 && am + xm <= Am.size ? this.writeSlot(Am, am, Tm, Tm.byteOffset + am, xm, !1) : Am.gpu && xm > 0 && am + xm <= Am.gpu.size ? this.device.queue.writeBuffer(Am.gpu, am, Tm.buffer, Tm.byteOffset + am, xm) : this.update(Am, Tm.subarray(fm, hm), am, xm)
      }
      indexBufferCreated(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(mm);
        const hm = function(mm) {
          if (mm instanceof Uint16Array || mm instanceof Uint32Array) return mm;
          for (let Tm = 0; Tm < mm.length; Tm++)
            if (mm[Tm] >= 65535) return new Uint32Array(mm);
          return new Uint16Array(mm)
        }(Tm);
        mm.is32Bits = 4 === hm.BYTES_PER_ELEMENT, mm.yp = hm.byteLength, this.buffers.set(mm, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: hm,
          ownsPending: hm !== Tm,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: fm
        })
      }
      bufferDeleted(mm) {
        const Tm = this.buffers.get(mm);
        null !== Tm && void 0 !== Tm && Tm.gpu ? (this.destroyBuffer(Tm.gpu), this.gpuBuffersVersion++) : Tm && Tm.slot >= 0 && (this.arena.free(Tm.slot, Tm.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(mm)
      }
      update(mm, Tm, fm, hm) {
        if (mm.slot >= 0) this.updateSlot(mm, Tm, fm, hm);
        else if (mm.gpu) {
          if (fm + GA(hm) > mm.gpu.size) {
            const Tm = this.device.createBuffer({
                label: mm.label,
                size: GA(Math.max(2 * mm.gpu.size, fm + hm)),
                usage: mm.usage | GPUBufferUsage.COPY_SRC
              }),
              Am = this.device.createCommandEncoder();
            Am.copyBufferToBuffer(mm.gpu, 0, Tm, 0, mm.gpu.size), this.device.queue.submit([Am.finish()]), this.destroyBuffer(mm.gpu), this.gpuBuffersVersion++, mm.gpu = Tm
          }
          vx(this.device, mm.gpu, fm, Tm, hm)
        } else {
          const am = new Uint8Array(Tm.buffer, Tm.byteOffset, hm),
            xm = mm.pending;
          if (xm && mm.ownsPending && fm + hm <= xm.byteLength) new Uint8Array(xm.buffer, xm.byteOffset, xm.byteLength).set(am, fm);
          else if (xm && 0 === fm && hm === xm.byteLength && Tm.byteLength === hm) mm.pending = Tm, mm.ownsPending = !1;
          else {
            var Am;
            const Tm = new Uint8Array(Math.max(null !== (Am = null === xm || void 0 === xm ? void 0 : xm.byteLength) && void 0 !== Am ? Am : 0, fm + hm));
            xm && Tm.set(new Uint8Array(xm.buffer, xm.byteOffset, xm.byteLength)), Tm.set(am, fm), mm.pending = Tm, mm.ownsPending = !0
          }
        }
      }
      updateSlot(mm, Tm, fm, hm) {
        const Am = this.arena;
        fm + GA(hm) > mm.size && (mm.size = GA(Math.max(2 * mm.size, fm + hm)), Am.growTo(mm.slot + mm.size), this.gpuBuffersVersion++), 0 === hm ? this.writeSlot(mm, fm, Wx, 0, 4, !1) : this.writeSlot(mm, fm, Tm, Tm.byteOffset, hm, !0)
      }
      writeSlot(mm, Tm, fm, hm, Am, am) {
        const xm = Tm + (am ? GA(Am) : Am);
        xm > mm.slotBytes && this.moveSlot(mm, xm), this.arena.write(mm.slot + Tm, fm, hm, Am, am)
      }
      moveSlot(mm, Tm) {
        const fm = this.arena,
          hm = Bx.slotBytes(Math.max(Tm, Math.min(2 * mm.slotBytes, mm.size))),
          Am = fm.allocate(hm, null, mm.size);
        fm.move(mm.slot, Am, mm.slotBytes), fm.free(mm.slot, mm.slotBytes), mm.slot = Am, mm.slotBytes = hm, this.gpuBuffersVersion++
      }
      cover(mm, Tm) {
        const fm = this.buffers.get(mm);
        if (!fm || fm.slot < 0) return !1;
        const hm = Math.min(Tm, fm.size);
        return !(hm <= fm.slotBytes) && (this.moveSlot(fm, hm), !0)
      }
      destroyBuffer(mm) {
        var Tm;
        null === (Tm = this.onDestroy) || void 0 === Tm || Tm.call(this, mm), mm.destroy()
      }
      gpuBuffer(mm) {
        const Tm = this.buffers.get(mm);
        if (!Tm) return null;
        if (Tm.slot >= 0) return this.arena.buffer;
        if (Tm.arena && Tm.pending) {
          const mm = Tm.pending,
            fm = this.arena;
          return Tm.size = GA(mm.byteLength), Tm.slotBytes = Bx.slotBytes(function(mm) {
            const Tm = new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength);
            let fm = Tm.length;
            if (mm.byteOffset % 4 === 0) {
              for (; fm % 4 !== 0 && 0 === Tm[fm - 1];) fm--;
              if (fm % 4 === 0) {
                const Tm = new Uint32Array(mm.buffer, mm.byteOffset, fm / 4);
                let hm = Tm.length;
                for (; hm > 0 && 0 === Tm[hm - 1];) hm--;
                fm = 4 * hm
              }
            }
            for (; fm > 0 && 0 === Tm[fm - 1];) fm--;
            return fm
          }(mm)), Tm.slot = fm.allocate(Tm.slotBytes, mm, Tm.size), Tm.pending = null, fm.buffer
        }
        if (!Tm.gpu && Tm.pending) {
          const mm = Tm.pending;
          Tm.gpu = this.device.createBuffer({
            label: Tm.label,
            size: GA(mm.byteLength),
            usage: Tm.usage
          }), vx(this.device, Tm.gpu, 0, mm, mm.byteLength), Tm.pending = null
        }
        return Tm.gpu
      }
      gpuOffset(mm) {
        var Tm, fm;
        const hm = null !== (Tm = null === (fm = this.buffers.get(mm)) || void 0 === fm ? void 0 : fm.slot) && void 0 !== Tm ? Tm : -1;
        return hm < 0 ? 0 : hm
      }
      gpuEnd(mm) {
        var Tm, fm;
        const hm = this.buffers.get(mm);
        return hm ? hm.slot >= 0 ? hm.slot + hm.size : null !== (Tm = null === (fm = hm.gpu) || void 0 === fm ? void 0 : fm.size) && void 0 !== Tm ? Tm : 0 : 0
      }
      vertexInput(mm, Tm, fm) {
        var hm, Am, am, xm;
        return null !== (hm = null !== (Am = fm && this.modelInput(fm, Tm)) && void 0 !== Am ? Am : null === (am = null !== (xm = this.S_.get(mm)) && void 0 !== xm ? xm : this.batchUploads.get(mm)) || void 0 === am ? void 0 : am.inputs[Tm]) && void 0 !== hm ? hm : null
      }
      modelInput(mm, Tm) {
        const fm = this.geometrySlot(mm);
        let hm = fm.inputs.get(Tm);
        if (void 0 === hm) {
          const Am = mm.vertexAttributes.find((mm => mm.kind === Tm));
          hm = Am ? new tm(this.modelKey(fm, Am.data, !1), Am.offset, Am.stride, Am.components, !1, Am.glType, Am.isNormalized) : null, fm.inputs.set(Tm, hm)
        }
        return hm
      }
      modelIndex(mm) {
        return mm.indexData && this.modelKey(this.geometrySlot(mm), mm.indexData, !0)
      }
      geometrySlot(mm) {
        let Tm = mm.gpu[km.c.lite];
        if (!Tm) {
          const fm = new Map,
            hm = () => {
              for (const mm of fm.values()) this.bufferDeleted(mm)
            },
            Am = mm => {
              const Tm = fm.get(mm);
              Tm && this.vertexBufferUpdated(Tm, mm)
            };
          Tm = {
            keys: fm,
            inputs: new Map,
            release: hm,
            updated: Am
          }, mm.gpu[km.c.lite] = Tm
        }
        return Tm
      }
      modelKey(mm, Tm, fm) {
        let hm = mm.keys.get(Tm);
        if (!hm) {
          if (fm) {
            const mm = {
              yp: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(mm, Tm, "model-indices"), hm = mm
          } else hm = {
            yp: 0
          }, this.vertexBufferCreated(hm, Tm, !1, "model-vertices");
          mm.keys.set(Tm, hm)
        }
        return hm
      }
      indexFormat(mm) {
        return mm.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(mm, Tm) {
        --mm.refs > 0 || (this.releaseTexture(mm), sx(mm.images), null !== Tm && this.textures.delete(Tm))
      }
      load(mm, Tm) {
        const fm = Tm.decoded = async function(mm) {
          if ("cube" === mm.kind) return async function(mm) {
            if (6 !== mm.length) throw new Error(`${mm.length} files where six faces were expected`);
            const Tm = await lx(mm.map((mm => rA(mm)))),
              fm = Tm[0].width;
            return lx(Tm.map((async mm => {
              if (mm.width === fm && mm.height === fm) return mm;
              try {
                return await createImageBitmap(mm, {
                  ...yA,
                  resizeWidth: fm,
                  resizeHeight: fm
                })
              } finally {
                mm.close()
              }
            })))
          }(mm.files);
          if ("data" === mm.kind && mm.data) return [await createImageBitmap(new Blob([mm.data]), yA)];
          return [await rA(gx(mm))]
        }(mm.source).then((mm => {
          0 === Tm.refs ? sx(mm) : Tm.images = mm
        }));
        this.track(Tm, gx(mm.source), fm, (() => {
          Tm.wanted && !Tm.failed && Tm.refs > 0 && this.upload(mm, Tm)
        }))
      }
      canvasUpdated(mm, Tm, fm) {
        const {
          state: hm
        } = this.textureSlot(mm);
        hm.dynamicSource = {
          invertY: Tm,
          premultiplied: fm
        }, hm.dynamic && this.pushDynamic(mm.source, hm)
      }
      async atlasArray(mm, Tm, fm) {
        const hm = await MA(this.device, mm, Tm, fm);
        if (!this.atlasBindings.has(hm)) {
          const mm = (0, Xx.e)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(hm, {
            view: hm.texture.createView({
              dimension: "2d-array"
            }),
            sampler: mm
          })
        }
        return hm
      }
      boundTexture(mm) {
        const Tm = this.atlasBindings.get(mm);
        if (Tm) return Tm;
        const fm = mm;
        if (fm.released) return null;
        const hm = this.textureSlot(fm, !0),
          {
            state: Am
          } = hm;
        if (!Am.view && (Am.wanted = !0, Am.loading || Am.failed || this.upload(fm, Am), !Am.view)) return null;
        const am = this.chosenSampler(fm, hm),
          xm = hm.bound;
        return xm && xm.view === Am.view && xm.sampler === am ? xm : (hm.bound = {
          view: Am.view,
          sampler: am
        }, hm.bound)
      }
      textureLoaded(mm) {
        var Tm, fm;
        return null !== (Tm = null === (fm = mm.gpu[km.c.lite]) || void 0 === fm ? void 0 : fm.state.decoded) && void 0 !== Tm ? Tm : null
      }
      textureFailed(mm) {
        var Tm;
        return !0 === (null === (Tm = mm.gpu[km.c.lite]) || void 0 === Tm ? void 0 : Tm.state.failed)
      }
      chosenSampler(mm, Tm) {
        const {
          samplingMode: fm,
          wrapU: hm,
          wrapV: Am
        } = mm.sampler, am = Tm.state.hasMips, xm = function(mm, Tm) {
          const {
            bilinear: fm,
            trilinear: hm
          } = km.e;
          return !Tm && mm !== fm || 11 !== mm && mm !== hm && mm !== fm ? 1 : 4
        }(fm, am), wm = Tm.sampler;
        if (wm && wm.samplingMode === fm && wm.hasMips === am && wm.anisotropy === xm && wm.wrapU === hm && wm.wrapV === Am) return wm.sampler;
        const Dm = this.samplerFor(fm, am, xm, hm, Am);
        return Tm.sampler = {
          samplingMode: fm,
          hasMips: am,
          anisotropy: xm,
          wrapU: hm,
          wrapV: Am,
          sampler: Dm
        }, Dm
      }
      releaseTexture(mm) {
        var Tm, fm;
        mm.view && (null === (fm = this.onDestroy) || void 0 === fm || fm.call(this, mm.view));
        null === (Tm = mm.destroy) || void 0 === Tm || Tm.call(mm)
      }
      textureSlot(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = mm.gpu[km.c.lite];
        if (fm) return fm;
        const hm = function(mm) {
          let {
            source: Tm,
            sampler: fm
          } = mm;
          return "canvas" === Tm.kind ? null : `${Tm.kind}|${gx(Tm)}|${fm.noMipmap}|${fm.samplingMode}|${fm.invertY}`
        }(mm);
        let Am = null === hm ? void 0 : this.textures.get(hm);
        Am || (Am = {
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
        }, null !== hm && (this.textures.set(hm, Am), this.load(mm, Am), Tm && this.firstBindDecodes++)), Am.refs++;
        const am = Am,
          xm = {
            state: Am,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(am, hm)
            }
          };
        return mm.gpu[km.c.lite] = xm, xm
      }
      samplerFor(mm, Tm, fm, hm, Am) {
        const am = `${mm}|${Tm}|${fm}|${hm}|${Am}`;
        let xm = this.samplers.get(am);
        if (!xm) {
          const wm = {
            ...tx(mm, Tm, fm),
            addressModeU: Ux(hm),
            addressModeV: Ux(Am)
          };
          xm = (0, Xx.e)(this.engine, wm), this.samplers.set(am, xm)
        }
        return xm
      }
      upload(mm, Tm) {
        const {
          source: fm,
          sampler: hm
        } = mm;
        Tm.hasMips = !hm.noMipmap, "canvas" === fm.kind ? this.createDynamic(fm, Tm) : "cube" === fm.kind ? this.uploadCube(Tm, fm.luminance) : this.uploadImage(Tm, !0 === hm.invertY, fm.url)
      }
      uploadImage(mm, Tm, fm) {
        const [hm] = mm.images;
        mm.images = null;
        const Am = (0, Px.b)(this.engine, hm, {
          mipMaps: mm.hasMips,
          invertY: Tm,
          srgb: !1
        }).then((Tm => {
          hm.close(), 0 !== mm.refs ? (mm.view = Tm.view, mm.destroy = Tm.texture.destroy.bind(Tm.texture)) : Tm.texture.destroy()
        }));
        this.track(mm, fm, Am)
      }
      track(mm, Tm, fm, hm) {
        mm.loading = !0, this.pending++, fm.catch((fm => {
          mm.failed = !0, console.warn(`Lite: could not load texture ${CA(Tm)}`, fm)
        })).finally((() => {
          mm.loading = !1, this.pending--, null === hm || void 0 === hm || hm()
        }))
      }
      uploadCube(mm, Tm) {
        const fm = mm.images;
        mm.images = null;
        const hm = rx(this.engine, this.device, fm, (0, km.w)(Tm), mm.hasMips);
        mm.view = hm.createView({
          dimension: "cube"
        }), mm.destroy = () => {
          hm.destroy()
        }
      }
      createDynamic(mm, Tm) {
        const {
          canvas: fm
        } = mm, hm = (0, Hx.b)(this.engine, Math.max(1, fm.width), Math.max(1, fm.height), {
          mipMaps: Tm.hasMips,
          srgb: !1
        });
        Tm.dynamic = hm, Tm.view = hm.view, Tm.destroy = () => {
          hm.texture.destroy()
        }, this.pushDynamic(mm, Tm)
      }
      pushDynamic(mm, Tm) {
        const fm = Tm.dynamicSource,
          hm = Tm.dynamic,
          {
            canvas: Am
          } = mm;
        if (fm && hm && 0 !== Am.width && 0 !== Am.height) return Am.width !== hm.width || Am.height !== hm.height ? (this.releaseTexture(Tm), Tm.dynamic = null, Tm.view = null, void this.createDynamic(mm, Tm)) : void(0, Hx.c)(this.engine, hm, Am, {
          invertY: fm.invertY,
          premultiplyAlpha: fm.premultiplied
        })
      }
    }

    function gx(mm) {
      return "cube" === mm.kind ? mm.rootUrl : "canvas" === mm.kind ? "canvas" : mm.url
    }
    const Wx = new Uint8Array(4);

    function Fx(mm) {
      const Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      mm._colorAttachment.storeOp = mm._targetSignature._sampleCount > 1 ? Tm : "store";
      const fm = mm._renderPassDescriptor.depthStencilAttachment;
      fm && (fm.depthStoreOp = Tm, fm.stencilStoreOp && (fm.stencilStoreOp = Tm))
    }
    var mw = fm(37821),
      Tw = fm(37875),
      fw = fm(37535),
      hw = fm(39705);
    const Aw = new Float64Array([1, 1, 1]),
      aw = new Float64Array([0, 1, 0]),
      xw = new Float64Array(4),
      ww = new Float32Array(16),
      Dw = new Float64Array(3),
      iw = new Float64Array(4);

    function Rw(mm, Tm, fm) {
      mm.fov = Tm.fov, mm.near = Tm.near, mm.far = Tm.far, mm.renderWidth = fm.renderWidth, mm.renderHeight = fm.renderHeight, (0, fw.n)(Tm.holderRotation, 0, xw, 0), (0, fw.e)(Aw, 0, xw, 0, Tm.holderPosition, 0, ww);
      const hm = Tm.zW;
      Dw[0] = hm[0], Dw[1] = hm[1], Dw[2] = hm[2] + 1;
      const Am = mm.viewMatrix;
      (0, fw.i)(hm, Dw, aw, Am), (0, fw.g)(Am, 0, Am), (0, fw.l)(Am, ww, 0, Am), (0, fw.g)(Am, 0, Am);
      const am = mm.worldMatrix;
      (0, fw.g)(Am, 0, am), mm.eye[0] = am[12], mm.eye[1] = am[13], mm.eye[2] = am[14], iw[0] = mm.fov, iw[1] = mm.renderWidth / mm.renderHeight, iw[2] = mm.near, iw[3] = mm.far, (0, fw.m)(iw, mm.projectionMatrix), (0, fw.l)(Am, mm.projectionMatrix, 0, mm.viewProjectionMatrix), (0, hw.f)(mm.viewProjectionMatrix, mm.frustum)
    }

    function pw(mm, Tm) {
      let fm = mm.frustumPlanes;
      fm || (fm = mm.frustumPlanes = Array.from({
        length: 6
      }, (() => new mw.d(0, 0, 0, 0))));
      for (let hm = 0; hm < 6; hm++) {
        const mm = fm[hm].normal;
        mm._x = Tm[4 * hm], mm._y = Tm[4 * hm + 1], mm._z = Tm[4 * hm + 2], mm._isDirty = !0, fm[hm].d = Tm[4 * hm + 3]
      }
    }

    function Ew(mm, Tm) {
      const fm = Tm.clearColor;
      mm.clearColour[0] = fm.r, mm.clearColour[1] = fm.g, mm.clearColour[2] = fm.b, mm.clearColour[3] = fm.a;
      const hm = Tm.ambientColor;
      mm.ambientColour[0] = hm.r, mm.ambientColour[1] = hm.g, mm.ambientColour[2] = hm.b, mm.animationRatio = Tm.animationRatio, mm.frameId = Tm.frameId, mm.version++
    }

    function ow(mm) {
      const Tm = mm.model.view;
      return Tm.animTick = (0, Tw.f)(), Tm.timeMs = performance.now(), Ew(Tm, mm.Aq), mm.model.update(Tm.frameId), Tm
    }

    function Ow(mm) {
      const Tm = mm.Aq,
        {
          view: fm,
          cW: hm
        } = mm.model;
      return Rw(fm, hm, Tm.dO()), Tm.onBeforeRenderObservable.notifyObservers(Tm), pw(Tm, fm.frustum), Tm.onBeforeCameraRenderObservable.notifyObservers(Tm.activeCamera), ow(mm)
    }
    var Yw = fm(37492),
      qw = fm(37614),
      jw = fm(37864);

    function Vw(mm) {
      var Tm, fm;
      const hm = (0, zm.cb)(mm);
      if (!hm || hm.diffuseTexture && (0, jw.j)(mm)) return null;
      const Am = null === (Tm = (0, zm.y)(hm, Jm.j.name)) || void 0 === Tm ? void 0 : Tm.state,
        am = null === (fm = (0, zm.y)(hm, ga.e.name)) || void 0 === fm ? void 0 : fm.state,
        xm = new Float32Array(16);
      return function(mm, Tm, fm, hm) {
        var Am, am;
        const xm = Yh;
        hm.set(mm.diffuseColor, xm.diffuse), hm[xm.diffuse + 3] = mm.alpha, hm.set(mm.ambientColor, xm.ambientAndCutoff), hm[xm.ambientAndCutoff + 3] = mm.alphaCutOff, hm.set(mm.emissiveColor, xm.emissiveAndLevel), hm[xm.emissiveAndLevel + 3] = null !== (Am = null === (am = mm.diffuseTexture) || void 0 === am ? void 0 : am.level) && void 0 !== Am ? Am : 1, null !== Tm && void 0 !== Tm && Tm.animDataPerTex ? (hm[xm.anim + 1] = Tw.e, hm[xm.anim + 2] = Tm.animDataPerTex.length / 3 - 1) : fm && (hm[xm.anim + 1] = fm.numAnimStates, hm[xm.anim + 2] = fm.ticksPerAnimState)
      }(hm, Am, am, xm), {
        model: hm,
        atlas: Am,
        texture: Am ? "atlas" : hm.diffuseTexture ? "single" : "none",
        animated: Am ? !!Am.animDataPerTex : !!am,
        liquid: (0, jw.m)(mm),
        customRenderMat: (0, jw.j)(mm),
        uniformData: xm
      }
    }
    var Iw = fm(2870);
    class Kw {
      constructor(mm) {
        this.units = mm, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var mm;
        this.buffer.destroy(), null === (mm = this.twin) || void 0 === mm || mm.destroy()
      }
    }
    class Qw {
      constructor(mm, Tm) {
        this.arena = mm, this.mo = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.mo = new Mx(Tm);
        const fm = new Kw(Tm);
        fm.buffer = this.createBuffer(fm, !1), this.backings.push(fm), this.refresh()
      }
      get yp() {
        return this.mo.yp
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
        let mm = 0;
        for (const Tm of this.backings) mm += Tm.units * (this.arena.unitBytes + (Tm.twin ? this.arena.twinUnitBytes : 0));
        return mm
      }
      holds(mm) {
        return mm.start + mm.length <= this.usable
      }
      lost(mm) {
        return this.dropped || mm.start + mm.length > this.yp
      }
      write(mm, Tm) {
        const {
          device: fm,
          unitBytes: hm
        } = this.arena;
        for (const Am of this.backings) {
          const am = (Am.units - mm.start) * hm;
          am > 0 && fm.queue.writeBuffer(Am.buffer, mm.start * hm, Tm, 0, Math.min(Tm.byteLength, am))
        }
      }
      writeLight(mm, Tm) {
        const {
          device: fm,
          twinUnitBytes: hm,
          verticesPerUnit: Am
        } = this.arena, {
          light: am,
          count: xm
        } = this.arena.twinLight(Tm, Math.min(Tm.length, mm.length * Am));
        for (const wm of this.backings) {
          wm.twin || (wm.twin = this.createBuffer(wm, !0));
          const Tm = (wm.units - mm.start) * Am;
          Tm > 0 && fm.queue.writeBuffer(wm.twin, mm.start * hm, am, 0, Math.min(xm, Tm))
        }
      }
      grow(mm) {
        this.arena.assertNotDrawing();
        const {
          device: Tm,
          unitBytes: fm,
          label: hm
        } = this.arena, Am = this.backings[this.backings.length - 1], am = new Kw(mm), xm = Tm.createCommandEncoder({
          label: `${hm}-grow`
        });
        am.buffer = this.createBuffer(am, !1), xm.copyBufferToBuffer(Am.buffer, 0, am.buffer, 0, Am.units * fm), Am.twin && (am.twin = this.createBuffer(am, !0), xm.copyBufferToBuffer(Am.twin, 0, am.twin, 0, Am.units * this.arena.twinUnitBytes)), Tm.queue.submit([xm.finish()]), this.backings.push(am), this.mo.grow(mm)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const mm of this.backings) mm.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(mm, Tm) {
        const {
          device: fm,
          unitBytes: hm,
          twinUnitBytes: Am,
          usage: am,
          label: xm
        } = this.arena;
        fm.pushErrorScope("out-of-memory");
        const wm = fm.createBuffer({
          label: Tm ? `${xm}-light` : xm,
          size: mm.units * (Tm ? Am : hm),
          usage: (Tm ? this.arena.twinUsage : am) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, fm.popErrorScope().then((fm => {
          this.arena.awaitingVerdict--, this.settle(mm, Tm, !fm, !0)
        }), (fm => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${xm} buffer, taken as failed: ${String(fm)}`), this.settle(mm, Tm, !1, !1)
        })), wm
      }
      settle(mm, Tm, fm, hm) {
        const Am = this.backings.indexOf(mm);
        if (!(this.dropped || Am < 0)) {
          if (!fm) {
            if (hm && this.arena.ranOutOfMemory(mm.units, mm.units * (Tm ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Am) return void this.drop();
            for (const mm of this.backings.splice(Am)) mm.destroy();
            return this.mo.truncate(this.backings[Am - 1].units), this.growable = !1, void this.promote()
          }
          Tm ? mm.twinReady = !0 : (mm.bufferReady = !0, this.arena.allocatedBuffer(mm.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: mm
        } = this;
        let Tm = 0;
        for (; Tm + 1 < mm.length && mm[Tm].ready && mm[Tm + 1].ready;) Tm++;
        for (const fm of mm.splice(0, Tm)) fm.destroy();
        this.refresh()
      }
      refresh() {
        const mm = this.backings[0];
        this.buffer = mm.buffer, this.twin = mm.twinReady ? mm.twin : null, this.usable = !this.dropped && mm.bufferReady ? mm.units : 0
      }
    }
    class nw {
      constructor(mm, Tm, fm, hm) {
        let {
          verticesPerUnit: Am = 1,
          twinUsage: am = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = mm, this.unitBytes = Tm, this.usage = fm, this.label = hm, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, RT.c)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Tm % 4 !== 0) throw new Error(`${hm}: ${Tm}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Am, this.twinUsage = am, this.twinValueBytes = Am > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Am
      }
      twinLight(mm, Tm) {
        if (4 === this.twinValueBytes) return this.widened.length < Tm && (this.widened = new Float32Array(Math.max(Tm, 2 * this.widened.length))), this.widened.set(mm.subarray(0, Tm)), {
          light: this.widened,
          count: Tm
        };
        const fm = Tm % this.verticesPerUnit;
        if (0 === fm) return {
          light: mm,
          count: Tm
        };
        const hm = Tm - fm + this.verticesPerUnit;
        return this.padded.length < hm && (this.padded = new Uint16Array(Math.max(hm, 2 * this.padded.length))), this.padded.set(mm.subarray(0, Tm)), this.padded.fill(0, Tm, hm), {
          light: this.padded,
          count: hm
        }
      }
      allocate(mm) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), mm > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Am of this.pages) {
          const Tm = Am.mo.allocate(mm);
          if (Tm >= 0) return {
            page: Am,
            start: Tm,
            length: mm
          }
        }
        const Tm = this.pages[this.pages.length - 1];
        if (null !== Tm && void 0 !== Tm && Tm.canGrow) {
          const fm = Math.min(this.ceiling, Math.max(2 * Tm.yp, Tm.yp + mm));
          if (fm - Tm.yp >= mm) return Tm.grow(fm), {
            page: Tm,
            start: Tm.mo.allocate(mm),
            length: mm
          }
        }
        Tm && Tm !== this.pages[0] && 0 === Tm.mo.used && Tm.drop();
        const fm = Math.floor(1048576 / this.unitBytes),
          hm = new Qw(this, Math.max(mm, Math.min(this.ceiling, fm)));
        return this.pages.push(hm), {
          page: hm,
          start: hm.mo.allocate(mm),
          length: mm
        }
      }
      free(mm) {
        this.assertNotDrawing();
        const {
          page: Tm
        } = mm;
        Tm.mo.free(mm.start, mm.length), 0 === Tm.mo.used && Tm !== this.pages[0] && Tm !== this.pages[this.pages.length - 1] && Tm.drop()
      }
      remove(mm) {
        const Tm = this.pages.indexOf(mm);
        Tm >= 0 && this.pages.splice(Tm, 1)
      }
      ranOutOfMemory(mm, Tm) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Tm}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, mm), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, mm) / 2));
        const fm = performance.now();
        fm >= this.shortageUntil && (this.forgetFailedAt = fm + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = fm + 1e3)
      }
      allocatedBuffer(mm) {
        mm >= this.failed && (this.failed = 1 / 0);
        const Tm = Math.min(2 * mm, Math.floor((mm + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Tm))
      }
      stats() {
        let mm = 0,
          Tm = 0,
          fm = 0,
          hm = 0;
        for (const Am of this.pages) mm += Am.yp, Tm += Am.mo.used, fm += Am.hasTwin ? Am.yp * this.twinUnitBytes : 0, hm += Am.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: mm * this.unitBytes,
          usedBytes: Tm * this.unitBytes,
          twinBytes: fm,
          allocatedBytes: hm
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: mm,
          maxStorageBufferBindingSize: Tm
        } = this.device.limits;
        let fm = Math.floor(Math.min(67108864, mm) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (fm = Math.min(fm, Math.floor(Tm / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (fm = Math.min(fm, Math.floor(Tm / this.twinUnitBytes))), fm
      }
    }
    const Jw = 16383;

    function zw(mm, Tm, fm, hm, Am) {
      let am = 0;
      for (let xm = fm; xm < hm; xm += Jw) mm.drawIndexed(6 * Math.min(Jw, hm - xm), 1, 0, Tm + 4 * xm, Am), am++;
      return am
    }
    class Zw {
      constructor(mm, Tm) {
        this.recordsGroup = Tm, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const fm = zT.i.strideWithoutAtlas;
        this.vertexArena = new nw(mm, fm, GPUBufferUsage.VERTEX, `terrain-vertices-${fm}`), this.quadArena = new nw(mm, qw.b, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const hm = (0, ZT.c)(new Uint16Array(98298), Jw);
        this.quadPattern = mm.createBuffer({
          label: "terrain-quad-pattern",
          size: hm.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), mm.queue.writeBuffer(this.quadPattern, 0, hm)
      }
      set(mm, Tm) {
        const fm = Tm.packedVertices,
          hm = fm ? this.quadArena.allocate(mm.faceCount) : this.vertexArena.allocate(mm.vertexCount);
        if (!hm) return !1;
        mm.vertices = hm;
        const Am = fm ? new Uint8Array(fm.buffer, fm.byteOffset, fm.byteLength) : new Uint8Array(Tm.vertices);
        return hm.page.write(hm, Am), !0
      }
      setLight(mm, Tm) {
        const {
          vertices: fm
        } = mm;
        fm && 0 !== Tm.length && fm.page.live && (Tm.length < mm.vertexCount ? fm.page.arena.warnOnce("shortLight", `a part's ${Tm.length} light values are fewer than its ${mm.vertexCount} vertices, so its light is left as it was`) : (fm.page.writeLight(fm, Tm), mm.lit = !0))
      }
      lightFullSky(mm, Tm) {
        this.fullSky.length < Tm && (this.fullSky = new Uint16Array(Math.max(Tm, 4096)).fill(Iw.g));
        for (const fm of mm) {
          const mm = fm.vertices;
          mm.page.live && (mm.page.writeLight(mm, this.fullSky), fm.lit = !0)
        }
      }
      backed(mm) {
        const {
          vertices: Tm
        } = mm;
        return !!Tm && Tm.page.holds(Tm)
      }
      lost(mm) {
        const {
          vertices: Tm
        } = mm;
        return !!Tm && Tm.page.lost(Tm)
      }
      release(mm) {
        mm.vertices && mm.vertices.page.arena.free(mm.vertices), mm.vertices = null, mm.lit = !1
      }
      setDrawing(mm) {
        this.forgetBound()
      }
      draw(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Tm.faceCount;
        const am = Tm.vertices,
          xm = am.page,
          wm = fm ? xm.twin : null;
        if (!xm.holds(am) || fm && !wm) return 0;
        const {
          verticesPerUnit: Dm
        } = xm.arena;
        let im = am.start * Dm;
        this.boundPattern || (mm.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Rm = hm + Am;
        if (Dm > 1) return xm.buffer === this.boundRecords && wm === this.boundRecordsLight || (mm.setBindGroup(1, this.recordsGroup(xm.buffer, wm)), this.boundRecords = xm.buffer, this.boundRecordsLight = wm), zw(mm, im, hm, Rm, Tm.slot);
        xm.buffer !== this.boundVertices && (mm.setVertexBuffer(0, xm.buffer), this.boundVertices = xm.buffer), wm && wm !== this.boundLight && (mm.setVertexBuffer(1, wm), this.boundLight = wm);
        const pm = Tm.faceCount;
        return Rm <= pm ? zw(mm, im, hm, Rm, Tm.slot) : zw(mm, im, hm, pm, Tm.slot) + zw(mm, im, Math.max(hm, pm) - pm, Rm - pm, Tm.slot)
      }
      get buffersAwaitingVerdict() {
        let mm = 0;
        for (const Tm of this.arenas()) mm += Tm.awaitingVerdict;
        return mm
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class kw {
      constructor(mm, Tm, fm, hm) {
        this.device = mm, this.splitBefore = Tm, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = mm.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Am = mm.createShaderModule({
          label: "scene-depth-copy",
          code: (am = fm._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${am?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var am;
        mm.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Am,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Am,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((mm => {
          this.pipeline = mm, this.building = !1
        }), (mm => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", mm)
        })), fm._executeWithTransmission = () => this.execute(fm, hm)
      }
      get compiling() {
        return this.building
      }
      setWanted(mm) {
        this.wanted = mm
      }
      setPlanes(mm, Tm) {
        mm === this.near && Tm === this.far || (this.near = mm, this.far = Tm, this.unproject[0] = mm / (Tm - mm), this.unproject[1] = Tm * mm / (Tm - mm), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.copy) || void 0 === Tm ? void 0 : Tm.view) && void 0 !== mm ? mm : null
      }
      execute(mm, Tm) {
        var fm;
        null === (fm = this.retired) || void 0 === fm || fm.destroy(), this.retired = null;
        const hm = TT(Tm),
          Am = mm._transparentBindings,
          am = this.wanted && this.pipeline ? this.splitIndex(Am) : -1,
          xm = mm._colorAttachment,
          wm = xm.resolveTarget;
        am >= 0 && (xm.resolveTarget = void 0, Fx(mm, !0));
        let Dm = hm.beginRenderPass(mm._renderPassDescriptor);
        Dm.setBindGroup(0, mm._sceneBG);
        let im = this.drawList(Dm, Tm, mm._opaqueBindings, 0, mm._opaqueBindings.length);
        if (im += this.drawList(Dm, Tm, mm._directBindings, 0, mm._directBindings.length), im += this.drawList(Dm, Tm, Am, 0, am >= 0 ? am : Am.length), Dm.end(), am < 0) return im;
        Fx(mm);
        const Rm = mm._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: pm,
            stencilLoadOp: Em
          } = Rm,
          om = xm.loadOp;
        xm.resolveTarget = wm;
        try {
          this.copyDepth(hm, mm), xm.loadOp = "load", Rm.depthLoadOp = "load", Em && (Rm.stencilLoadOp = "load"), Dm = hm.beginRenderPass(mm._renderPassDescriptor), Dm.setBindGroup(0, mm._sceneBG), im += this.drawList(Dm, Tm, Am, am, Am.length), Dm.end()
        } finally {
          xm.loadOp = om, Rm.depthLoadOp = pm, Rm.stencilLoadOp = Em
        }
        return im
      }
      splitIndex(mm) {
        for (let Tm = 0; Tm < mm.length; Tm++)
          if (mm[Tm].renderable === this.splitBefore) return Tm;
        return -1
      }
      drawList(mm, Tm, fm, hm, Am) {
        let am = null,
          xm = 0;
        for (let wm = hm; wm < Am; wm++) {
          const hm = fm[wm],
            Am = hm.renderable.mesh;
          Am && !1 === Am.visible || (hm.pipeline !== am && (mm.setPipeline(hm.pipeline), am = hm.pipeline), xm += hm.draw(mm, Tm))
        }
        return xm
      }
      copyDepth(mm, Tm) {
        var fm, hm;
        const Am = (null !== (fm = Tm._config.depth) && void 0 !== fm ? fm : Tm._config.rt)._depthTexture,
          am = (null === (hm = this.copy) || void 0 === hm ? void 0 : hm.source) === Am ? this.copy : this.remakeCopy(Am),
          xm = mm.beginRenderPass(am.pass);
        xm.setPipeline(this.pipeline), xm.setBindGroup(0, am.bindGroup), xm.draw(3), xm.end()
      }
      remakeCopy(mm) {
        var Tm, fm;
        this.retired = null !== (Tm = null === (fm = this.copy) || void 0 === fm ? void 0 : fm.texture) && void 0 !== Tm ? Tm : null;
        const hm = this.device.createTexture({
            label: "scene-depth",
            size: [mm.width, mm.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Am = hm.createView(),
          am = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: mm.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          xm = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Am,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: mm,
          texture: hm,
          view: Am,
          bindGroup: am,
          pass: xm
        }, this.copy
      }
    }
    const bw = "rgba8unorm";

    function Sw(mm) {
      return mm ? 15 : 1
    }
    class ew {
      constructor(mm, Tm, fm, hm) {
        this.device = mm, this.terrain = hm, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Tm._targetSignature._sampleCount > 1, this.cameraBuffer = mm.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = mm.createBindGroupLayout({
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
        const Am = mm.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = mm.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Am,
          entries: []
        });
        const am = mm.createShaderModule({
          label: "sun-shadow-mask",
          code: (xm = this.edge, `${(0,kT.v)()}${lf({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${xm?Sf:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Sw(xm)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${xm?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var xm;
        mm.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: mm.createPipelineLayout({
            bindGroupLayouts: [this.layout, Am, Am, Ma(mm, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: am,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: am,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((mm => {
          this.pipeline = mm, this.building = !1
        }), (mm => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", mm)
        }));
        const wm = Tm._executeWithTransmission;
        Tm._executeWithTransmission = mm => this.execute(Tm, fm, (() => wm ? wm(mm) : function(mm, Tm) {
          const fm = TT(Tm).beginRenderPass(mm._renderPassDescriptor);
          fm.setBindGroup(0, mm._sceneBG);
          let hm = Nw(fm, Tm, mm._opaqueBindings);
          return hm += Nw(fm, Tm, mm._directBindings), hm += Nw(fm, Tm, mm._transparentBindings), fm.end(), hm
        }(Tm, fm)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.targets) || void 0 === Tm ? void 0 : Tm.maskView) && void 0 !== mm ? mm : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(mm) {
        ! function(mm, Tm) {
          const fm = mm.worldMatrix,
            hm = mm.projectionMatrix,
            Am = 1 / hm[0],
            am = 1 / hm[5],
            xm = mm.far * mm.near / (mm.far - mm.near);
          Tm[0] = mm.eye[0], Tm[1] = mm.eye[1], Tm[2] = mm.eye[2], Tm[3] = 2 ** -23 / xm, Tm[4] = fm[0] * Am, Tm[5] = fm[1] * Am, Tm[6] = fm[2] * Am, Tm[7] = xm, Tm[8] = fm[4] * am, Tm[9] = fm[5] * am, Tm[10] = fm[6] * am, Tm[11] = mm.near / (mm.far - mm.near), Tm[12] = fm[8], Tm[13] = fm[9], Tm[14] = fm[10], Tm[15] = 0
        }(mm, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(mm, Tm, fm) {
        if (this.retire(), !this.terrain.readsMask) return fm();
        const hm = this.targetsFor(mm),
          Am = TT(Tm),
          am = mm._renderPassDescriptor.depthStencilAttachment;
        this.edge || (hm.prepass.depthStencilAttachment.view = am.view);
        const xm = this.terrain.drawPrepass(Am, hm.prepass, mm._sceneBG);
        if (0 === xm) return fm();
        if (this.trace(Am, hm), this.edge) return xm + 1 + fm();
        const {
          depthLoadOp: wm,
          stencilLoadOp: Dm
        } = am;
        am.depthLoadOp = "load", Dm && (am.stencilLoadOp = "load");
        try {
          return xm + 1 + fm()
        } finally {
          am.depthLoadOp = wm, am.stencilLoadOp = Dm
        }
      }
      trace(mm, Tm) {
        const fm = this.terrain.sunShadowGroup(),
          hm = mm.beginRenderPass(Tm.trace);
        this.pipeline && fm && (hm.setPipeline(this.pipeline), hm.setBindGroup(0, Tm.bindGroup), hm.setBindGroup(1, this.empty), hm.setBindGroup(2, this.empty), hm.setBindGroup(3, fm), hm.draw(3)), hm.end()
      }
      retire() {
        const mm = this.retired;
        var Tm;
        mm && (mm.mask.destroy(), mm.normals.destroy(), null === (Tm = mm.depth) || void 0 === Tm || Tm.destroy(), this.retired = null)
      }
      targetsFor(mm) {
        var Tm, fm;
        const hm = (null !== (Tm = mm._config.depth) && void 0 !== Tm ? Tm : mm._config.rt)._depthTexture;
        return (null === (fm = this.targets) || void 0 === fm ? void 0 : fm.source) === hm ? this.targets : this.remake(mm, hm)
      }
      remake(mm, Tm) {
        var fm;
        this.retired = this.targets;
        const hm = [Tm.width, Tm.height],
          Am = this.device.createTexture({
            label: "sun-shadow-mask",
            size: hm,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          am = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: hm,
            format: bw,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          xm = null !== (fm = mm._targetSignature._depthStencilFormat) && void 0 !== fm ? fm : Tm.format,
          wm = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: hm,
            format: xm,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Dm = mm._renderPassDescriptor.depthStencilAttachment,
          im = xm.includes("stencil"),
          Rm = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: am.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: wm ? wm.createView() : Dm.view,
              depthClearValue: Dm.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...im ? {
                stencilClearValue: Dm.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          pm = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== wm && void 0 !== wm ? wm : Tm).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: am.createView()
            }]
          }),
          Em = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Am.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Sw(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Tm,
          mask: Am,
          maskView: Am.createView(),
          normals: am,
          depth: wm,
          bindGroup: pm,
          prepass: Rm,
          trace: Em
        }, this.targets
      }
    }

    function Nw(mm, Tm, fm) {
      let hm = null,
        Am = 0;
      for (const am of fm) {
        const fm = am.renderable.mesh;
        fm && !1 === fm.visible || (am.pipeline !== hm && (mm.setPipeline(am.pipeline), hm = am.pipeline), Am += am.draw(mm, Tm))
      }
      return Am
    }
    const Gw = 6e4,
      Xw = {
        status: "ok"
      },
      Pw = {
        status: "skipped"
      };
    async function Hw(mm, Tm) {
      const {
        isCancelled: fm
      } = mm;
      if (fm()) return {
        status: "Af"
      };
      const {
        target: hm
      } = Tm;
      if (!hm) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Am = [],
        am = Promise.all(Array.from(new Set(mm.materials), (async fm => {
          Am.push(await async function(mm, Tm, fm, hm) {
            const Am = {
              lighting: mm.lighting,
              dirLightCount: Math.min(mm.dirLightCount, 4),
              KO: mm.runtime
            };
            try {
              const am = Tm.material(hm);
              return am && Eh(Tm.programKey(am, !1, Am)) ? (await am.ready, mm.isCancelled() ? Xw : am.bindGroupLayout ? await async function(mm, Tm, fm, hm) {
                const {
                  device: Am
                } = mm;
                let am, xm;
                Am.pushErrorScope("validation");
                try {
                  am = mm.pipelineBuild(Tm, fm, hm)
                } finally {
                  xm = Am.popErrorScope().catch((() => null))
                }
                const [wm, Dm] = await Promise.all([xm, am.built.then((() => null), (mm => null !== mm && void 0 !== mm ? mm : new Error("pipeline failed")))]);
                if (!wm && !Dm) return Xw;
                const im = await yw(am.module),
                  Rm = im.length > 0 ? im.map((mm => `${am.name} ${mm.lineNum}:${mm.linePos}: ${mm.message}`)).join("\n") : `${am.name}: ${Cw(null!==Dm&&void 0!==Dm?Dm:wm)}`;
                return {
                  status: "failed",
                  material: Tm.model.name,
                  message: Rm
                }
              }(Tm, am, Tm.programKey(am, "none" !== am.texture, Am), fm): (console.warn(`Shader pack: skipped the compile check for "${hm.name}", whose textures failed to load`), Pw)) : Xw
            } catch (am) {
              return {
                status: "failed",
                material: hm.name,
                message: Cw(am)
              }
            }
          }(mm, Tm, hm, fm))
        }))),
        xm = function(mm, Tm) {
          let fm, hm, Am = !1;
          const am = new Promise((am => {
            var xm;
            fm = setTimeout((() => {
              am("timeout")
            }), null !== (xm = Tm.timeoutMs) && void 0 !== xm ? xm : Gw), hm = setInterval((() => {
              Tm.isCancelled() && am("Af")
            }), 50), mm.lost.then((() => {
              Am = !0, am("lost")
            }))
          }));
          return {
            signal: am,
            lost: () => Am,
            dispose: () => {
              clearTimeout(fm), clearInterval(hm)
            }
          }
        }(Tm.device, mm);
      let wm;
      try {
        wm = await Promise.race([am.then((() => "done")), xm.signal])
      } finally {
        xm.dispose()
      }
      if ("Af" === wm || fm()) return {
        status: "Af"
      };
      const Dm = Am.find((mm => "failed" === mm.status));
      return Dm && "lost" !== wm && !xm.lost() && await new Promise((mm => {
        setTimeout(mm, 0)
      })), "lost" === wm || xm.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Dm ? {
        status: "failed",
        failure: {
          material: Dm.material,
          message: Dm.message
        }
      } : "timeout" === wm ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(im=mm.timeoutMs)&&void 0!==im?im:Gw)/1e3} s`), {
        status: "skipped"
      }) : Am.some((mm => "skipped" === mm.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var im
    }
    async function yw(mm) {
      if (!mm) return [];
      try {
        return (await mm.getCompilationInfo()).messages.filter((mm => "error" === mm.type))
      } catch {
        return []
      }
    }

    function Cw(mm) {
      var Tm;
      return null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.message) && void 0 !== Tm ? Tm : String(mm)
    }

    function rw(mm, Tm, fm, hm) {
      Eh(mm) ? yw(fm).then((mm => {
        const [fm] = mm;
        dA("terrain", Tm, hm, fm ? `${fm.lineNum}:${fm.linePos} error: ${fm.message}` : null)
      })) : dA("terrain", Tm, hm)
    }
    var sw = fm(37623),
      lw = fm(37637),
      Mw = fm(37644),
      uw = fm(2858);

    function Bw(mm, Tm, fm, hm, Am) {
      const am = Math.hypot(fm[0], fm[1], fm[2]);
      if (!(am > 0)) return;
      const xm = [fm[0] / am, fm[1] / am, fm[2] / am],
        wm = [Math.floor(Tm[0]), Math.floor(Tm[1]), Math.floor(Tm[2])],
        Dm = [0, 0, 0],
        im = [1 / 0, 1 / 0, 1 / 0],
        Rm = [1 / 0, 1 / 0, 1 / 0];
      for (let om = 0; om < 3; om++) xm[om] > 0 ? (Dm[om] = 1, im[om] = (wm[om] + 1 - Tm[om]) / xm[om], Rm[om] = 1 / xm[om]) : xm[om] < 0 && (Dm[om] = -1, im[om] = (wm[om] - Tm[om]) / xm[om], Rm[om] = -1 / xm[om]);
      const {
        MO: pm
      } = mm;
      let Em = mm.gM(wm[0], wm[1], wm[2]);
      for (;;) {
        const Tm = im[0] < im[1] ? im[0] < im[2] ? 0 : 2 : im[1] < im[2] ? 1 : 2;
        if (im[Tm] > hm) return;
        const fm = Dm[Tm] > 0 ? wm[Tm] + 1 : wm[Tm];
        wm[Tm] += Dm[Tm], im[Tm] += Rm[Tm];
        const am = mm.gM(wm[0], wm[1], wm[2]),
          xm = am !== Em && !(mm.opaque[Em] && mm.opaque[am]);
        if (xm) {
          const hm = [wm[0], wm[1], wm[2]];
          hm[Tm] = fm;
          const am = Math.floor(hm[0] / pm),
            xm = Math.floor(hm[1] / pm),
            Dm = Math.floor(hm[2] / pm);
          !mm.isDrawn(am, xm, Dm) && mm.hasParts(am, xm, Dm) && Am.add(`${am},${xm},${Dm}`)
        }
        if (xm && mm.occluders[am]) return;
        Em = am
      }
    }

    function Lw(mm, Tm) {
      return mm.group - Tm.group || mm.nearest - Tm.nearest
    }
    class vw {
      constructor(mm, Tm) {
        this.device = mm, this.zV = Tm, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var mm;
        const Tm = null !== (mm = this.free.pop()) && void 0 !== mm ? mm : this.next++;
        if (8 * Tm >= this.data.length) {
          const mm = new Float32Array(2 * this.data.length);
          mm.set(this.data), this.data = mm, this.words = new Uint32Array(mm.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.zV()
        }
        return Tm
      }
      release(mm) {
        this.free.push(mm)
      }
      set(mm, Tm, fm, hm, Am) {
        const am = 8 * mm + nh;
        this.data[am] = Tm, this.data[am + 1] = fm, this.data[am + 2] = hm, this.setVisibility(mm, Am)
      }
      setVisibility(mm, Tm) {
        this.data[8 * mm + Jh] = Tm, this.markDirty(mm, mm)
      }
      setFaces(mm, Tm, fm) {
        const hm = 8 * mm;
        this.words[hm + ch] = Tm, this.words[hm + zh] = fm, this.markDirty(mm, mm)
      }
      markDirty(mm, Tm) {
        this.dirtyMin = Math.min(this.dirtyMin, mm), this.dirtyMax = Math.max(this.dirtyMax, Tm)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const tw = Qh,
      Uw = !0;
    const dw = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: tw.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      gw = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Ww {
      constructor(mm) {
        this.device = mm, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(Oh), this.dirLightUniforms = this.frameUniforms.subarray(oh.dirLights, oh.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, RT.c)(), this.faceGroups = !0, this.visibilityGraph = Uw, this.visCull = Uw, this.visCheck = !1, this.visCullMinDistance = Mw.h, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new fD, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.KO = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Zw(mm, ((mm, Tm) => this.recordsGroup(mm, Tm))), this.slots = new vw(mm, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = fT(mm), this.frameLayout = mm.createBindGroupLayout({
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
        }), this.frameBuffer = mm.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = mm.createSampler({
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
          bind: (mm, Tm) => this.createBinding(this.opaqueRenderable, Tm, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (mm, Tm) => this.createBinding(this.transparentRenderable, Tm, !0)
        }
      }
      installSceneDepth(mm, Tm) {
        this.sceneDepth = new kw(this.device, this.transparentRenderable, mm, Tm)
      }
      createFrameBindGroup() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== mm && void 0 !== mm ? mm : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Tm && void 0 !== Tm ? Tm : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(mm, Tm) {
        const fm = null !== Tm && void 0 !== Tm ? Tm : mm;
        let hm = this.recordsGroups.get(fm);
        return hm || (hm = this.createFrameBindGroup(mm, Tm), this.recordsGroups.set(fm, hm)), hm
      }
      setChunkMesh(mm, Tm, fm) {
        var hm;
        let Am = this.chunks.get(mm);
        Am ? this.geometry.release(Am) : (Am = {
          mesh: mm,
          slot: this.slots.allocate(),
          origin: [fm[0], fm[1], fm[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: mm.visibility,
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
        }, this.chunks.set(mm, Am), this.writeSlot(Am)), Am.material = mm.material ? this.materialFor(mm.material) : null, Am.packed = !!Tm.packedVertices, Am.vertexCount = (0, qw.c)(Tm), Am.faceCount = Am.vertexCount / 4;
        const am = null !== (hm = Tm.faceGroups) && void 0 !== hm ? hm : null;
        if (Am.faceGroups = am, am) {
          const mm = sw.m;
          Am.planePX = am[mm], Am.planeNX = am[mm + 1], Am.planePY = am[mm + 2], Am.planeNY = am[mm + 3], Am.planePZ = am[mm + 4], Am.planeNZ = am[mm + 5]
        }
        this.drawWhole(Am), 0 !== Am.faceCount && (this.geometry.set(Am, Tm) ? (Am.packed && this.slots.setFaces(Am.slot, Am.vertices.start + Am.faceCount, Am.faceCount), Tm.bO && this.setChunkMeshLight(mm, Tm.bO)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Am.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(mm, Tm) {
        const fm = this.chunks.get(mm);
        fm && this.geometry.setLight(fm, Tm)
      }
      drawStats() {
        let mm = this.transparent.length;
        for (const Tm of this.opaqueBatches) mm += Tm.meshes.length;
        return {
          drawn: mm,
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
      removeChunkMesh(mm) {
        const Tm = this.chunks.get(mm);
        Tm && (this.geometry.release(Tm), this.slots.release(Tm.slot), this.chunks.delete(mm))
      }
      remeshLost(mm, Tm) {
        this.geometry.release(Tm), Tm.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Tm.lostRemeshes++);
        const fm = mm.oE,
          [hm, Am, am] = fm.fAm(Tm.origin[0], Tm.origin[1], Tm.origin[2]),
          xm = fm.HY.yY(hm, Am, am);
        xm && (xm.XY = !0, xm.rY = !0, fm.PY(xm, !1))
      }
      chooseFaceRanges(mm, Tm, fm) {
        const hm = this.faceRanges;
        mm.faceMask = fm, mm.rangeCount = (0, lw.l)(Tm, fm, hm), mm.first0 = hm[0], mm.count0 = hm[1], mm.first1 = hm[2], mm.count1 = hm[3]
      }
      drawWhole(mm) {
        mm.faceMask = -1, mm.faceEpoch = -1, mm.rangeCount = 1, mm.first0 = 0, mm.count0 = mm.faceCount
      }
      writeSlot(mm) {
        const [Tm, fm, hm] = this.originOffset;
        this.slots.set(mm.slot, mm.origin[0] - Tm, mm.origin[1] - fm, mm.origin[2] - hm, mm.visibility)
      }
      materialFor(mm) {
        const Tm = this.materials.get(mm);
        if (Tm) return Tm;
        const fm = Vw(mm);
        if (!fm) return this.warnOnce(`material:${mm.name}`, `Lite terrain cannot draw material "${mm.name}"; its chunks are skipped.`), null;
        const {
          model: hm,
          atlas: Am,
          texture: am,
          animated: xm,
          uniformData: wm
        } = fm, Dm = {
          id: this.materials.size,
          model: hm,
          texture: am,
          animated: xm,
          uniformData: wm,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${mm.name}`,
            size: wm.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: fm.liquid,
          customRenderMat: fm.customRenderMat,
          atlasCount: 0,
          J7: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(mm, Dm), this.device.queue.writeBuffer(Dm.uniformBuffer, 0, wm), Dm.ready = this.createMaterialBindGroup(Dm, Am).catch((Tm => {
          console.error(`Lite terrain failed to load the textures of material "${mm.name}"`, Tm)
        })), Dm
      }
      materialLayout(mm) {
        const Tm = function(mm) {
            const Tm = ["uniforms"];
            if ("atlas" === mm.texture) {
              mm.animated && Tm.push("animData"), Tm.push("sampler");
              for (let fm = 0; fm < mm.atlasCount; fm++) Tm.push("textureArray")
            } else "single" === mm.texture && Tm.push("sampler", "texture");
            return Tm
          }(mm),
          fm = Tm.join(",");
        let hm = this.materialLayouts.get(fm);
        if (!hm) {
          const mm = GPUShaderStage.FRAGMENT;
          hm = this.device.createBindGroupLayout({
            label: `terrain-material-${fm}`,
            entries: Tm.map(((Tm, fm) => {
              switch (Tm) {
                case "uniforms":
                  return {
                    binding: fm, visibility: GPUShaderStage.VERTEX | mm, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: fm, visibility: GPUShaderStage.VERTEX | mm, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: fm, visibility: mm, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: fm, visibility: mm, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: fm, visibility: mm, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(fm, hm)
        }
        return hm
      }
      async createMaterialBindGroup(mm, Tm) {
        const fm = [{
          buffer: mm.uniformBuffer
        }];
        if (Tm) {
          const {
            urls: hm,
            pixels: Am,
            layerWidth: am
          } = Tm.sources, xm = await Promise.all(hm.map(((mm, Tm) => {
            var fm;
            return MA(this.device, mm, null !== (fm = null === Am || void 0 === Am ? void 0 : Am[Tm]) && void 0 !== fm ? fm : null, am)
          })));
          mm.atlasCount = xm.length, mm.J7 = xm[0].layerWidth, mm.atlasLayers = xm[0].layers, Tm.animDataPerTex && fm.push({
            buffer: XA(this.device, Float32Array.from(Tm.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), fm.push(this.sampler);
          for (const mm of xm) fm.push(mm.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === mm.texture) {
          const {
            url: Tm
          } = mm.model.diffuseTexture.source, {
            pixels: hm,
            width: Am,
            height: am
          } = await sA(Tm);
          fm.push(this.sampler), fm.push(HA(this.device, hm, Am, am, 1, `terrain-${Tm}`).createView({
            dimension: "2d"
          }))
        }
        const hm = this.materialLayout(this.programKey(mm, !1));
        mm.bindGroupLayout = hm, mm.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${mm.model.name}`,
          layout: hm,
          entries: fm.map(((mm, Tm) => ({
            binding: Tm,
            resource: mm
          })))
        })
      }
      programKey(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const hm = fm ? fm.lighting : this.lighting,
          Am = fm ? fm.KO : this.KO,
          am = {
            texture: mm.texture,
            atlasCount: mm.atlasCount,
            J7: mm.J7,
            atlasLayers: mm.atlasLayers,
            animated: mm.animated,
            alphaTest: mm.model.transparencyMode === zm.s.alphaTest,
            lighting: hm,
            dirLightCount: fm ? fm.dirLightCount : this.dirLightCount,
            packed: Tm
          };
        if (!Am) return am;
        const xm = this.shaderPackFields(mm, Am),
          wm = "atlas" === mm.texture && mm.model.transparencyMode === zm.s.opaque && Dh(xm.packVariant);
        return {
          ...am,
          ...xm,
          alphaTest: am.alphaTest || wm
        }
      }
      shaderPackFields(mm, Tm) {
        const fm = this.packVariant(mm, Tm);
        return void 0 === fm ? xh : {
          packVariant: fm,
          liquid: mm.liquid
        }
      }
      packVariant(mm, Tm) {
        return mm.customRenderMat ? void 0 : function(mm, Tm) {
          const fm = mm ? mm.defineFor(Tm ? "liquid" : "terrain") : 0;
          return 0 === fm ? void 0 : fm
        }(Tm, mm.liquid)
      }
      isBlended(mm) {
        return mm.model.transparencyMode === zm.s.alphaBlend
      }
      shaderModule(mm, Tm) {
        let fm = this.modules.get(mm);
        return fm || (fm = this.device.createShaderModule({
          label: Tm,
          code: mm
        }), this.modules.set(mm, fm)), fm
      }
      pipelineFor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!mm.bindGroupLayout) return null;
        if (!hm) return this.pipelineOf(mm, Tm, fm);
        const Am = this.pipelineIdNow(mm, Tm, !0, fm),
          am = this.pipelines.get(Am);
        if (am) return am;
        const xm = this.pipelineOf(mm, Tm, fm);
        return xm && void 0 === am && this.startPipeline(Am, mm, {
          ...this.programKey(mm, Tm),
          resting: hm
        }, fm), xm
      }
      pipelineOf(mm, Tm, fm) {
        const hm = this.pipelineIdNow(mm, Tm, !1, fm),
          Am = this.pipelines.get(hm);
        return void 0 !== Am ? Am : (this.startPipeline(hm, mm, this.programKey(mm, Tm), fm), null)
      }
      pipelineIdNow(mm, Tm, fm, hm) {
        const {
          lighting: Am,
          dirLightCount: am
        } = this, {
          transparencyMode: xm,
          backFaceCulling: wm
        } = mm.model, Dm = this.packVariant(mm, this.KO), im = (Tm ? 2 : 0) + (fm ? 1 : 0), Rm = mm.pipelineIds[im];
        if (null !== Rm && Rm.lighting === Am && Rm.dirLightCount === am && Rm.packVariant === Dm && Rm.transparencyMode === xm && Rm.cull === wm && Rm.atlasCount === mm.atlasCount && Rm.J7 === mm.J7 && Rm.atlasLayers === mm.atlasLayers && Rm.colorFormat === hm._colorFormat && Rm.depthStencilFormat === hm._depthStencilFormat && Rm.sampleCount === hm._sampleCount) return Rm.id;
        const pm = this.programKey(mm, Tm),
          Em = this.pipelineId(mm, fm ? {
            ...pm,
            resting: fm
          } : pm, hm);
        return mm.pipelineIds[im] = {
          id: Em,
          lighting: Am,
          dirLightCount: am,
          packVariant: Dm,
          transparencyMode: xm,
          cull: wm,
          atlasCount: mm.atlasCount,
          J7: mm.J7,
          atlasLayers: mm.atlasLayers,
          colorFormat: hm._colorFormat,
          depthStencilFormat: hm._depthStencilFormat,
          sampleCount: hm._sampleCount
        }, Em
      }
      pipelineId(mm, Tm, fm) {
        return Fw(Tm, this.isBlended(mm), mm.model.backFaceCulling, fm)
      }
      pipelineBuild(mm, Tm, fm) {
        var hm;
        const Am = this.pipelineId(mm, Tm, fm);
        return null !== (hm = this.builds.get(Am)) && void 0 !== hm ? hm : this.startPipeline(Am, mm, Tm, fm)
      }
      startPipeline(mm, Tm, fm, hm) {
        var Am;
        this.pipelines.set(mm, null);
        const am = Nh(fm),
          xm = this.isBlended(Tm),
          wm = this.shadowMask && hm._depthStencilFormat ? function(mm, Tm, fm, hm) {
            if (void 0 === mm.packVariant || mm.liquid || Tm) return "none";
            const Am = (0, bT.c)(mm.packVariant);
            return null === Am || void 0 === Am || !Am.sunShadow || !rf(Am, fm) || Am.discards || mm.alphaTest && Dh(mm.packVariant) ? "none" : hm ? "edge" : "plain"
          }(fm, xm, !!this.sunShadow, hm._sampleCount > 1) : "none";
        let Dm;
        try {
          Dm = Gh(fm, !!this.sunShadow, wm)
        } catch (qm) {
          if (!Eh(fm)) throw qm;
          return this.failedPackBuild(mm, fm, am, qm)
        }
        const im = this.shaderModule(Dm, am),
          Rm = [];
        fm.packed || (Rm.push(function(mm, Tm) {
          const fm = [{
            shaderLocation: tw.position,
            offset: zT.i.gm,
            format: "float32x3"
          }, {
            shaderLocation: tw.normal,
            offset: zT.i.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: tw.color,
            offset: zT.i.colorOffset,
            format: "unorm8x4"
          }];
          return mm && fm.push({
            shaderLocation: tw.uv,
            offset: zT.i.uvOffset,
            format: "float32x2"
          }), Tm && fm.push({
            shaderLocation: tw.blockFlagWords,
            offset: zT.i.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: zT.i.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: fm
          }
        }("none" !== fm.texture, Eh(fm))), fm.lighting && Rm.push(dw));
        const pm = Tm.model.backFaceCulling,
          Em = {
            label: am,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Tm.bindGroupLayout, ...La(this.device, fm, !!this.sunShadow, "none" !== wm)]
            }),
            vertex: {
              module: im,
              entryPoint: "mainVertex",
              buffers: Rm
            },
            fragment: Wm({
              module: im,
              entryPoint: "mainFragment"
            }, hm, xm ? gw : null),
            depthStencil: hm._depthStencilFormat ? {
              format: hm._depthStencilFormat,
              depthCompare: null !== (Am = hm._depthCompare) && void 0 !== Am ? Am : hT,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: hm._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: pm ? "back" : "none"
            }
          },
          om = fm.resting ? 0 : 1;
        this.compiling += om;
        const Om = "none" === wm ? this.device.createRenderPipelineAsync(Em) : this.startMaskPipelines(im, Em, "edge" === wm);
        Om.then((Tm => {
          this.compiling -= om, this.pipelines.set(mm, Tm)
        }), (mm => {
          this.compiling -= om, console.error(`Lite terrain pipeline ${am} failed`, mm), rw(fm, am, im, mm)
        }));
        const Ym = {
          name: am,
          module: im,
          built: Om
        };
        return this.builds.set(mm, Ym), Ym
      }
      startMaskPipelines(mm, Tm, fm) {
        const hm = Tm.depthStencil,
          Am = this.device.createRenderPipelineAsync(fm ? Tm : {
            ...Tm,
            depthStencil: {
              ...hm,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          am = this.device.createRenderPipelineAsync({
            ...Tm,
            label: `${Tm.label}-prepass`,
            fragment: {
              module: mm,
              entryPoint: "prepassFragment",
              targets: [{
                format: bw
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Am, am]).then((mm => {
          let [Tm, fm] = mm;
          return this.prepassOf.set(Tm, fm), this.maskPipelines++, Tm
        }))
      }
      failedPackBuild(mm, Tm, fm, hm) {
        console.error(`Lite terrain pipeline ${fm} failed`, hm), rw(Tm, fm, null, hm);
        const Am = Promise.reject(hm);
        Am.catch((() => {}));
        const am = {
          name: fm,
          module: null,
          built: Am
        };
        return this.builds.set(mm, am), am
      }
      checkShaderPack(mm) {
        return Hw(mm, {
          device: this.device,
          target: this.target,
          material: mm => this.materialFor(mm),
          programKey: (mm, Tm, fm) => this.programKey(mm, Tm, fm),
          pipelineBuild: (mm, Tm, fm) => this.pipelineBuild(mm, Tm, fm)
        })
      }
      createBinding(mm, Tm, fm) {
        return this.target = Tm, {
          renderable: mm,
          pipeline: wT(this.device, Tm),
          draw: mm => {
            this.geometry.setDrawing(!0);
            try {
              return fm ? this.drawTransparent(mm, Tm) : this.drawOpaque(mm, Tm)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(mm, Tm) {
        var fm, hm, Am, am;
        const {
          IE: xm
        } = mm;
        this.lighting = mm.FY;
        const wm = (0, Yw.t)(Tm);
        this.dirLightCount = Math.min(wm, 4), this.KO = null !== (fm = xm.KO) && void 0 !== fm ? fm : null, wm > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(mm, Tm), this.animateMaterials(Tm.animTick);
        const Dm = xm.HE,
          im = Dm[0] !== this.originOffset[0] || Dm[1] !== this.originOffset[1] || Dm[2] !== this.originOffset[2];
        im && (this.originOffset[0] = Dm[0], this.originOffset[1] = Dm[1], this.originOffset[2] = Dm[2]);
        const Rm = Tm.eye;
        this.eye[0] = Rm[0], this.eye[1] = Rm[1], this.eye[2] = Rm[2], this.writeShaderPackInputs();
        const pm = Tm.projectionMatrix,
          Em = 0 === pm[15];
        let om = 0;
        (im || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Om
        } = this;
        DT(this.transparentRenderable._worldCenter, Tm, aT), this.resetBatches(Em), this.transparent.length = 0, this.unlit.length = 0;
        const Ym = xm.oE.qmm,
          qm = Ym / 2 * Math.sqrt(3);
        let jm = 0;
        const Vm = !!this.KO && wh(this.KO.defineFor("liquid"));
        let Im = !1;
        const Km = null !== (hm = null === (Am = xm.MI) || void 0 === Am ? void 0 : Am.visibility) && void 0 !== hm ? hm : null,
          Qm = this.visCull && Em && 0 === this.compiling && null !== Km && xm.oE.Ohm[0] >= this.visCullMinDistance ? this.target : null,
          nm = this.visPassable,
          Jm = this.visCandidates,
          cm = this.visCandidateBatches;
        nm.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let zm = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Zm = 0;
        const km = (mm, fm) => {
          if (!fm) return this.transparent.push(mm), void(Zm += 2 * mm.faceCount);
          if (null !== mm.faceGroups && fm.faceCull) {
            if (0 === om && (om = (0, lw.b)(pm, Tm.renderWidth, Tm.renderHeight), om !== this.faceFocalPx && (this.faceFocalPx = om, Om = ++this.faceEpoch)), mm.faceEpoch !== Om) {
              mm.faceEpoch = Om;
              const Tm = Math.sqrt(mm.distance) + qm,
                fm = (0, lw.g)(mm.planePX, mm.planeNX, mm.planePY, mm.planeNY, mm.planePZ, mm.planeNZ, this.eye[0] - (mm.origin[0] - this.originOffset[0]), this.eye[1] - (mm.origin[1] - this.originOffset[1]), this.eye[2] - (mm.origin[2] - this.originOffset[2]), (0, lw.d)(Tm, om));
              fm !== mm.faceMask && this.chooseFaceRanges(mm, mm.faceGroups, fm)
            }
            if (0 === mm.rangeCount) return
          } else - 1 !== mm.faceMask && this.drawWhole(mm);
          fm.meshes.push(mm), Zm += 2 * ((mm.rangeCount > 0 ? mm.count0 : 0) + (mm.rangeCount > 1 ? mm.count1 : 0))
        };
        for (const Sm of this.chunks.values()) {
          im && this.writeSlot(Sm);
          const mm = Sm.mesh.visibility;
          mm !== Sm.visibility && (Sm.visibility = mm, this.slots.setVisibility(Sm.slot, mm));
          const {
            material: fm
          } = Sm;
          this.geometry.lost(Sm) && performance.now() >= Sm.lostRetryAt && this.remeshLost(xm, Sm);
          const hm = !(null === fm || void 0 === fm || !fm.bindGroup) && this.geometry.backed(Sm),
            Am = hm && this.lighting && !Sm.vertices.page.twin;
          if (Qm && (Number.isNaN(Sm.key) && (Sm.ci = Math.floor(Sm.origin[0] / Ym), Sm.cj = Math.floor(Sm.origin[1] / Ym), Sm.ck = Math.floor(Sm.origin[2] / Ym), Sm.key = (0, uw.g)(Sm.ci, Sm.cj, Sm.ck)), (!hm || mm < 1 || Am || !this.batchDraws(fm, Sm.packed, Qm)) && this.visSeeThrough(Sm, Qm) && nm.add(Sm.key)), !hm) continue;
          Am || (Sm.lostRemeshes = 0);
          const am = Sm.origin[0] - this.originOffset[0],
            wm = Sm.origin[1] - this.originOffset[1],
            Dm = Sm.origin[2] - this.originOffset[2];
          if (!(0, hw.b)(Tm.frustum, am, wm, Dm, Ym)) continue;
          const Rm = am + Ym / 2 - this.eye[0],
            pm = wm + Ym / 2 - this.eye[1],
            om = Dm + Ym / 2 - this.eye[2];
          if (Sm.distance = Rm * Rm + pm * pm + om * om, this.lighting && !Sm.lit && (jm = Math.max(jm, Sm.vertexCount), this.unlit.push(Sm)), Am) continue;
          const Om = this.isBlended(fm) ? null : this.batchFor(fm, Sm.packed, Sm.vertices.page, 1 === mm, Em);
          Qm ? (Jm[zm] = Sm, cm[zm++] = Om) : km(Sm, Om)
        }
        const bm = Qm ? this.sweepVisibility(mm, Tm, Km) : null;
        null === (am = (0, Xa.w)(xm)) || void 0 === am || am.update(Tm.frustum, this.originOffset, Ym, bm);
        for (let Sm = 0; Sm < zm; Sm++) {
          const mm = Jm[Sm];
          !bm || bm.isDrawn(mm.ci, mm.cj, mm.ck) ? km(mm, cm[Sm]) : (this.visCulledParts++, this.visCulledTriangles += 2 * mm.faceCount)
        }
        for (const Sm of this.transparent) Im ||= Vm && Sm.material.liquid && !Sm.material.customRenderMat;
        this.submittedTriangles = Zm, bm && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(mm, Tm, bm)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Im) : Im && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && jm > 0 && this.geometry.lightFullSky(this.unlit, jm);
        for (const Sm of this.opaqueBatches) this.chunkSorter.sort(Sm.meshes, 1) || Sm.meshes.sort(mD);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(TD)
      }
      sweepVisibility(mm, Tm, fm) {
        const {
          oE: hm
        } = mm.IE, Am = hm.qmm, am = this.visPassable, xm = this.eye[0] + this.originOffset[0], wm = this.eye[1] + this.originOffset[1], Dm = this.eye[2] + this.originOffset[2];
        if (!fm.eyeClear(xm, wm, Dm, Tm.near, Tm.projectionMatrix, hm)) return null;
        const [im, Rm] = hm.Ohm, pm = fm.update(xm, wm, Dm, Am, im, Rm, am);
        return this.visSweeps = fm.sweeps, pm ? fm : null
      }
      visSeeThrough(mm, Tm) {
        const {
          material: fm
        } = mm;
        return (!fm || !this.isBlended(fm)) && (mm.mesh.visibility < 1 || !(null !== fm && void 0 !== fm && fm.bindGroup) || mm.faceCount > 0 && (!this.geometry.backed(mm) || this.lighting && !mm.vertices.page.twin) || !this.batchDraws(fm, mm.packed, Tm))
      }
      batchDraws(mm, Tm, fm) {
        var hm;
        const Am = Tm ? 2 : 0;
        if (mm === this.visDrawsMaterial && function(mm, Tm) {
            return 0 !== (mm & 1 << Tm)
          }(this.visDrawsBits, Am)) return 0 !== (this.visDrawsBits & 2 << Am);
        let am = null !== (hm = this.visBatchDraws.get(mm)) && void 0 !== hm ? hm : 0;
        if (!(am & 1 << Am)) {
          am |= 1 << Am | (!!mm.bindGroupLayout && this.canDraw(mm, Tm) && !!this.pipelines.get(this.pipelineIdNow(mm, Tm, !1, fm)) ? 2 << Am : 0), this.visBatchDraws.set(mm, am)
        }
        return this.visDrawsMaterial = mm, this.visDrawsBits = am, 0 !== (am & 2 << Am)
      }
      runVisCheck(mm, Tm, fm) {
        const {
          IE: hm
        } = mm, {
          oE: Am
        } = hm, am = Am.qmm, xm = new Set;
        for (const om of this.chunks.values()) xm.add(om.key);
        const wm = nA.Matrix.FromArray(Tm.viewProjectionMatrix).invert(),
          [Dm, im, Rm] = this.originOffset,
          pm = new nA.WO,
          Em = function(mm, Tm, fm, hm) {
            const Am = new Set;
            for (let am = 0; am < 27; am++)
              for (let xm = 0; xm < 48; xm++) {
                const wm = fm((xm + .5) / 48 * 2 - 1, (am + .5) / 27 * 2 - 1);
                Bw(mm, Tm, [wm[0] - Tm[0], wm[1] - Tm[1], wm[2] - Tm[2]], hm, Am)
              }
            return Am
          }({
            gM: (mm, Tm, fm) => Am.gM(mm, Tm, fm),
            occluders: fm.occluders,
            opaque: fm.opaque,
            MO: am,
            isDrawn: (mm, Tm, hm) => fm.isDrawn(mm, Tm, hm),
            hasParts: (mm, Tm, fm) => xm.has((0, uw.g)(mm, Tm, fm))
          }, [this.eye[0] + Dm, this.eye[1] + im, this.eye[2] + Rm], ((mm, Tm) => (nA.WO.TransformCoordinatesFromFloatsToRef(mm, Tm, .5, wm, pm), [pm.x + Dm, pm.y + im, pm.z + Rm])), (Am.Ohm[0] + 1) * am);
        this.visViolations = Em.size;
        for (const om of Em) this.warnOnce(`vis:${om}`, `Lite terrain cave culling skipped chunk ${om}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var mm;
        null !== (mm = this.KO) && void 0 !== mm && mm.isRunning() && (this.shaderPackInputs ??= new va(this.device, this.KO.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.KO, this.eye, this.lighting))
      }
      bindShaderPackInputs(mm, Tm, fm) {
        var hm, Am, am, xm;
        let wm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Dm = this.packVariant(Tm, fm);
        if (void 0 === Dm) return;
        this.shaderPackInputs || (this.shaderPackInputs = new va(this.device, fm.textureLayers(), this.sunShadow), this.shaderPackInputs.write(fm, this.eye, this.lighting));
        const im = wh(Dm) ? null !== (hm = null === (Am = this.sceneDepth) || void 0 === Am ? void 0 : Am.view) && void 0 !== hm ? hm : this.standIn() : null,
          Rm = wm ? null !== (am = null === (xm = this.shadowMask) || void 0 === xm ? void 0 : xm.view) && void 0 !== am ? am : this.standIn() : null;
        this.shaderPackInputs.bind(mm, im, Ba(Dm, !!this.sunShadow), Rm)
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
        var mm, Tm;
        return null !== (mm = null === (Tm = this.shaderPackInputs) || void 0 === Tm ? void 0 : Tm.bindGroupFor(null, !0)) && void 0 !== mm ? mm : null
      }
      resetBatches(mm) {
        const Tm = this.opaqueBatches;
        let fm = 0;
        for (const hm of Tm) hm.meshes.length > 0 && (hm.meshes.length = 0, hm.faceCull = this.batchFaceCull(hm.material, mm), Tm[fm++] = hm);
        Tm.length = fm
      }
      orderBatches() {
        const mm = this.opaqueBatches;
        for (let Tm = 0; Tm < mm.length; Tm++) {
          const fm = mm[Tm];
          fm.group = Tm;
          for (let hm = 0; hm < Tm; hm++) {
            const Tm = mm[hm];
            if (Tm.material === fm.material && Tm.packed === fm.packed) {
              fm.group = Tm.group;
              break
            }
          }
          fm.nearest = fm.meshes.length > 0 ? fm.meshes[0].distance : 1 / 0
        }
        mm.sort(Lw)
      }
      batchFor(mm, Tm, fm, hm, Am) {
        for (const xm of this.opaqueBatches)
          if (xm.material === mm && xm.packed === Tm && xm.page === fm && xm.resting === hm) return xm;
        const am = {
          material: mm,
          packed: Tm,
          page: fm,
          resting: hm,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(mm, Am)
        };
        return this.opaqueBatches.push(am), am
      }
      batchFaceCull(mm, Tm) {
        return !(!Tm || !(0, sw.s)(mm.model)) && (!this.KO || ! function(mm) {
          var Tm;
          return !(null === (Tm = (0, bT.c)(mm)) || void 0 === Tm || !Tm.movesVertices)
        }(this.packVariant(mm, this.KO)))
      }
      writeFrameUniforms(mm, Tm) {
        const fm = this.frameUniforms,
          hm = oh;
        if ((0, Yw.w)(mm, fm), fm[hm.fogInfos] = Tm.fogEnabled ? Tm.fogMode : 0, fm[hm.fogInfos + 1] = Tm.fogStart, fm[hm.fogInfos + 2] = Tm.fogEnd, fm[hm.fogInfos + 3] = Tm.fogDensity, fm.set(Tm.fogColour, hm.fogColour), fm[hm.outputHeight] = Tm.renderHeight, fm.set(Tm.ambientColour, hm.sceneAmbient), (0, Yw.s)(Tm, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Tm = (0, qw.e)(mm.VY, mm.LO, mm.vO);
          for (let mm = 0; mm < 4; mm++) fm[hm.aoLevels + mm] = Tm[mm] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, fm)
      }
      animateMaterials(mm) {
        const Tm = Yh.anim;
        for (const fm of this.materials.values()) fm.animated && (fm.uniformData[Tm] = mm, this.device.queue.writeBuffer(fm.uniformBuffer, 4 * Tm, fm.uniformData, Tm, 1))
      }
      canDraw(mm, Tm) {
        return !("atlas" === mm.texture && !Tm) || (this.warnOnce(`stride:${mm.id}`, `Lite terrain: material "${mm.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(mm, Tm) {
        let fm = 0;
        mm.setBindGroup(1, this.frameBindGroup);
        for (const hm of this.opaqueBatches) {
          if (!hm.meshes.length || !this.canDraw(hm.material, hm.packed)) continue;
          const Am = this.pipelineFor(hm.material, hm.packed, Tm, hm.resting);
          Am && (mm.setPipeline(Am), mm.setBindGroup(2, hm.material.bindGroup), this.KO && this.bindShaderPackInputs(mm, hm.material, this.KO, this.prepassOf.has(Am)), fm += this.drawBatch(mm, hm))
        }
        return fm
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(mm, Tm, fm) {
        const hm = this.target,
          Am = this.KO;
        if (!hm || !Am || 0 === this.maskPipelines) return 0;
        let am = 0,
          xm = null;
        this.geometry.setDrawing(!0);
        try {
          for (const wm of this.opaqueBatches) {
            if (!wm.meshes.length || !this.canDraw(wm.material, wm.packed)) continue;
            const Dm = this.pipelineFor(wm.material, wm.packed, hm, wm.resting),
              im = Dm && this.prepassOf.get(Dm);
            im && (xm || (xm = mm.beginRenderPass(Tm), xm.setBindGroup(0, fm), xm.setBindGroup(1, this.frameBindGroup)), xm.setPipeline(im), xm.setBindGroup(2, wm.material.bindGroup), this.bindShaderPackInputs(xm, wm.material, Am, !0), am += this.drawBatch(xm, wm))
          }
        } finally {
          var wm;
          null === (wm = xm) || void 0 === wm || wm.end(), this.geometry.setDrawing(!1)
        }
        return am
      }
      drawBatch(mm, Tm) {
        let fm = 0;
        for (const hm of Tm.meshes) {
          const {
            rangeCount: Tm
          } = hm;
          Tm > 0 && (fm += this.geometry.draw(mm, hm, this.lighting, hm.first0, hm.count0), Tm > 1 && (fm += this.geometry.draw(mm, hm, this.lighting, hm.first1, hm.count1)))
        }
        return fm
      }
      drawTransparent(mm, Tm) {
        let fm = 0,
          hm = null,
          Am = null;
        mm.setBindGroup(1, this.frameBindGroup);
        for (const am of this.transparent) {
          const xm = am.material;
          if (!this.canDraw(xm, am.packed)) continue;
          const wm = this.pipelineFor(xm, am.packed, Tm);
          wm && (wm !== hm && (mm.setPipeline(wm), hm = wm, this.KO && this.bindShaderPackInputs(mm, xm, this.KO)), xm !== Am && (mm.setBindGroup(2, xm.bindGroup), Am = xm), fm += this.geometry.draw(mm, am, this.lighting))
        }
        return fm
      }
    }

    function Fw(mm, Tm, fm, hm) {
      return `${Nh(mm)}|${mm.atlasLayers}|${mm.J7}|${Tm}|${fm}|${hm._colorFormat}|${hm._depthStencilFormat}|${hm._sampleCount}`
    }

    function mD(mm, Tm) {
      return mm.distance - Tm.distance
    }

    function TD(mm, Tm) {
      return Tm.distance - mm.distance
    }
    class fD {
      constructor() {
        this.left = []
      }
      sort(mm, Tm) {
        for (let fm = 0; fm < mm.length; fm++) {
          const Tm = mm[fm].distance;
          if (Tm - Tm !== 0) return !1
        }
        return this.sortRange(mm, 0, mm.length, Tm), !0
      }
      sortRange(mm, Tm, fm, hm) {
        if (fm - Tm <= 16) {
          for (let Am = Tm + 1; Am < fm; Am++) {
            const fm = mm[Am],
              am = hm * fm.distance;
            let xm = Am - 1;
            for (; xm >= Tm && hm * mm[xm].distance > am; xm--) mm[xm + 1] = mm[xm];
            mm[xm + 1] = fm
          }
          return
        }
        const Am = Tm + fm >>> 1;
        if (this.sortRange(mm, Tm, Am, hm), this.sortRange(mm, Am, fm, hm), hm * mm[Am - 1].distance <= hm * mm[Am].distance) return;
        const {
          left: am
        } = this, xm = Am - Tm;
        for (let Rm = 0; Rm < xm; Rm++) am[Rm] = mm[Tm + Rm];
        let wm = 0,
          Dm = Am,
          im = Tm;
        for (; wm < xm && Dm < fm;) mm[im++] = hm * mm[Dm].distance < hm * am[wm].distance ? mm[Dm++] : am[wm++];
        for (; wm < xm;) mm[im++] = am[wm++]
      }
    }
    const hD = Math.ceil(102);

    function AD(mm, Tm, fm, hm) {
      let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Tm;
      const am = Math.min(Tm, fm),
        xm = new Uint32Array(Tf(hm));
      for (let wm = 0; wm < hm; wm++) {
        const Tm = Math.floor(wm * am / hm),
          fm = Math.max(Tm + 1, Math.floor((wm + 1) * am / hm));
        for (let Dm = 0; Dm < hm; Dm++) {
          const im = Math.floor(Dm * am / hm),
            Rm = Math.max(im + 1, Math.floor((Dm + 1) * am / hm));
          let pm = 0;
          for (let hm = Tm; hm < fm; hm++)
            for (let Tm = im; Tm < Rm; Tm++) mm[hm * Am + Tm] >= hD && pm++;
          if (2 * pm >= (fm - Tm) * (Rm - im)) {
            const mm = Dm + hm * wm;
            xm[mm >>> 5] |= 1 << (31 & mm)
          }
        }
      }
      return xm
    }

    function aD(mm) {
      return Math.max(1, Math.min(16, mm))
    }
    class xD {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = mm, this.loadTexture = Tm, this.warn = fm, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(mm, Tm) {
        return (mm.rC !== this.builtVersion || this.blockCaster.length !== Tm) && (this.build(mm, Tm), !0)
      }
      build(mm, Tm) {
        this.builtVersion = mm.rC;
        const fm = new Uint16Array(Tm),
          hm = new Map;
        for (let Am = 1; Am < Tm; Am++) {
          const Tm = this.classify(mm, Am, hm);
          if (null === Tm || Tm === dT) {
            fm[Am] = null === Tm ? 0 : dT;
            continue
          }
          let am = this.byKey.get(Tm.key);
          void 0 === am && (am = this.allocate(Tm), this.byKey.set(Tm.key, am)), fm[Am] = am
        }
        this.blockCaster = fm, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(mm, Tm) {
        const fm = mm.q_[Tm];
        if ("function" !== typeof fm) return fm;
        try {
          return fm()
        } catch (hm) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Tm}: ${hm instanceof Error?hm.message:String(hm)}`), null
        }
      }
      classify(mm, Tm, fm) {
        const hm = this.option(mm, Tm);
        if ("none" === hm) return null;
        if (hm && hm.planes.length > 0) {
          const mm = hm.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(mm)}`,
            planes: mm
          }
        }
        if (mm.Ko[Tm]) return null;
        const Am = mm.Jo[Tm] ? mm.lC(Tm) : null;
        if (Am && Am.length >= 6) {
          const mm = function(mm) {
            const Tm = new Uint32Array(16);
            for (let fm = 0; fm + 6 <= mm.length; fm += 6) {
              const hm = [0, 1, 2].map((Tm => Math.max(0, Math.ceil(8 * mm[fm + Tm] - .5)))),
                Am = [0, 1, 2].map((Tm => Math.min(7, Math.floor(8 * mm[fm + Tm + 3] - .5))));
              for (let mm = hm[2]; mm <= Am[2]; mm++)
                for (let fm = hm[1]; fm <= Am[1]; fm++)
                  for (let am = hm[0]; am <= Am[0]; am++) {
                    const hm = am + 8 * (fm + 8 * mm);
                    Tm[hm >>> 5] |= 1 << (31 & hm)
                  }
            }
            return Tm
          }(Am);
          return function(mm) {
            return mm.every((mm => 4294967295 === mm))
          }(mm) ? dT : mm.every((mm => 0 === mm)) ? null : {
            kind: "shape",
            key: `shape:${mm.join(",")}`,
            mask: mm
          }
        }
        if (mm.bJ[Tm] || !mm.IY[Tm]) return null;
        const am = [0, 1, 2, 3, 4, 5].map((hm => {
          const Am = mm.KY[6 * Tm + hm];
          let am = fm.get(Am);
          return void 0 === am && (am = function(mm) {
            if (!mm || mm.NY) return null;
            const {
              R7: Tm,
              J7: fm,
              vF: hm
            } = mm;
            if (!Tm || !fm || !(fm > 0) || void 0 === hm || !(hm >= 0)) return null;
            const Am = Tm[0],
              am = fm * fm * 4;
            if (!Am || Am.byteLength < am) return null;
            const xm = Math.floor(Am.byteLength / am),
              wm = Tm[Math.floor(hm / xm)];
            if (!wm) return null;
            const Dm = new Uint8Array(wm.buffer, wm.byteOffset, wm.byteLength),
              im = hm % xm * am;
            if (im + am > Dm.length) return null;
            const Rm = new Uint8Array(fm * fm);
            let pm = !1;
            for (let Em = 0; Em < Rm.length; Em++) Rm[Em] = Dm[im + 4 * Em + 3], pm ||= Rm[Em] < hD;
            return pm ? {
              alpha: Rm,
              width: fm
            } : null
          }(mm.eY(Am)), fm.set(Am, am)), am
        }));
        if (am.every((mm => null === mm))) return dT;
        const xm = aD(Math.max(...am.map((mm => {
            var Tm;
            return null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.width) && void 0 !== Tm ? Tm : 1
          })))),
          wm = new Uint32Array(Tf(xm)).fill(4294967295),
          Dm = am.map((mm => null === mm ? wm : AD(mm.alpha, mm.width, mm.width, xm)));
        return {
          kind: "cutout",
          key: `cutout:${xm}:${Dm.map((mm=>mm.join(","))).join("|")}`,
          size: xm,
          faces: Dm
        }
      }
      allocate(mm) {
        if (this.nextCaster >= ff) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Tm = this.nextCaster++;
        if (this.writeCaster(Tm, gT, 0, 0, 0), "shape" === mm.kind) {
          const fm = this.allocateMask(mm.mask.length);
          fm >= 0 && (this.sink(fm, mm.mask), this.writeCaster(Tm, WT, fm, 0, 8))
        } else if ("cutout" === mm.kind) {
          const fm = Tf(mm.size),
            hm = this.allocateMask(6 * fm);
          if (hm >= 0) {
            const Am = new Uint32Array(6 * fm);
            mm.faces.forEach(((mm, Tm) => {
              Am.set(mm, Tm * fm)
            })), this.sink(hm, Am), this.writeCaster(Tm, mf, hm, 0, mm.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Tm, mm.planes).finally((() => {
          this.planesLoading--
        })));
        return Tm
      }
      async loadPlanes(mm, Tm) {
        const fm = await Promise.all(Tm.map((mm => this.texture(mm.texture))));
        if (fm.some((mm => null === mm))) return;
        const hm = fm,
          Am = aD(Math.max(...hm.map((mm => Math.min(mm.width, mm.height))))),
          am = Tf(Am),
          xm = this.allocateMask(Tm.length * (4 + am));
        if (xm < 0) return;
        const wm = new Uint32Array(Tm.length * (4 + am)),
          Dm = 4 * Tm.length;
        Tm.forEach(((mm, Tm) => {
          const fm = xm + Dm + Tm * am;
          wm.set(function(mm, Tm) {
            const [fm, hm] = mm.tangent, Am = Math.hypot(fm, hm) || 1, am = fm / Am, xm = hm / Am, wm = mm.centre[0] * xm - mm.centre[1] * am, Dm = new Uint32Array(4);
            return new Float32Array(Dm.buffer, 0, 3).set([am, xm, wm]), Dm[3] = Tm, Dm
          }(mm, fm), 4 * Tm), wm.set(AD(hm[Tm].alpha, hm[Tm].width, hm[Tm].height, Am), Dm + Tm * am)
        })), this.sink(xm, wm), this.writeCaster(mm, FT, xm, Tm.length, Am)
      }
      texture(mm) {
        let Tm = this.textures.get(mm);
        return Tm || (Tm = this.loadTexture(mm).catch((Tm => (this.warn(`Sun shadows: no mask for ${mm}: ${Tm instanceof Error?Tm.message:String(Tm)}`), null))), this.textures.set(mm, Tm)), Tm
      }
      allocateMask(mm) {
        if (this.nextMaskWord + mm > hf) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Tm = 32768 + this.nextMaskWord;
        return this.nextMaskWord += mm, Tm
      }
      writeCaster(mm, Tm, fm, hm, Am) {
        this.sink(0 + 4 * mm, Uint32Array.of(Tm, fm, hm, Am))
      }
      warnOnce(mm) {
        this.warned.has(mm) || (this.warned.add(mm), this.warn(mm))
      }
    }
    var wD = fm(2831);

    function DD(mm) {
      return !mm.XY && !mm.xJ && !mm.iY
    }

    function iD() {
      return {
        bricks: new Uint32Array(lT),
        cells: new Uint16Array(32768),
        special: new Uint8Array(rT)
      }
    }
    class RD {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = mm, this.writeVoxels = Tm, this.writePool = fm, this.warn = hm, this.eyeChunk = null, this.slotChunk = new Array(GT).fill(null), this.slotVersion = new Float64Array(GT).fill(-1), this.slotPool = new Array(GT).fill(null), this.starved = new Uint8Array(GT), this.queue = [], this.queued = new Uint8Array(GT), this.queueSorted = !0, this.freePool = new Uint32Array(Af), this.freeCount = Af, this.casterTable = null, this.warnedPool = !1, this.scratch = iD(), this.victimScratch = iD(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * GT), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Am = 0; Am < Af; Am++) this.freePool[Am] = 65535 - Am
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return Af - this.freeCount
      }
      chunkAdded(mm) {
        if (null === this.eyeChunk || !this.inRadius(mm.i, mm.j, mm.k)) return;
        const Tm = vT(mm.i, mm.j, mm.k);
        this.slotChunk[Tm] = mm, this.slotVersion[Tm] = -1, this.enqueue(Tm)
      }
      update(mm, Tm, fm) {
        const hm = this.casters.blockCaster;
        if (hm !== this.casterTable) {
          this.casterTable = hm;
          for (let mm = 0; mm < GT; mm++) this.slotVersion[mm] = -1, this.slotChunk[mm] && this.enqueue(mm)
        }
        const Am = Math.floor(mm[0] / 32),
          am = Math.floor(mm[1] / 32),
          xm = Math.floor(mm[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Am || this.eyeChunk[1] !== am || this.eyeChunk[2] !== xm) && (this.eyeChunk = [Am, am, xm], this.follow(Tm), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let wm = 0; wm < GT; wm++) {
          const mm = this.slotChunk[wm];
          mm && (mm.aJ || mm.EY !== this.slotVersion[wm]) && this.enqueue(wm)
        }
        this.drain(fm), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(mm, Tm) {
        this.records.set(Tm, 4 * mm), this.windowTopStale = !0, this.writeVoxels(4 * mm, Tm)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const mm = this.records;
        let Tm = -1 / 0;
        for (let hm = 0; hm < mm.length; hm += 4) {
          const fm = 255 & mm[hm + 3];
          fm !== HT && fm !== yT || !this.inRadius(mm[hm], mm[hm + 1], mm[hm + 2]) || (Tm = Math.max(Tm, mm[hm + 1] * ST + (mm[hm + 3] >>> 8)))
        }
        const fm = Tm === -1 / 0 ? 1 : Tm + uT;
        fm !== this.windowTop[0] && (this.windowTop[0] = fm, this.writeVoxels(MT, this.windowTop))
      }
      follow(mm) {
        const Tm = this.eyeChunk,
          [fm, hm, Am] = eT;
        for (let xm = -Am; xm <= Am; xm++)
          for (let Am = -hm; Am <= hm; Am++)
            for (let hm = -fm; hm <= fm; hm++) {
              var am;
              const fm = Tm[0] + hm,
                wm = Tm[1] + Am,
                Dm = Tm[2] + xm,
                im = vT(fm, wm, Dm),
                Rm = this.slotChunk[im];
              if (Rm && !Rm.aJ && Rm.i === fm && Rm.j === wm && Rm.k === Dm) continue;
              const pm = null !== (am = mm(fm, wm, Dm)) && void 0 !== am ? am : null;
              Rm && (Rm.i !== fm || Rm.j !== wm || Rm.k !== Dm) && this.slotPool[im] && (this.release(im), this.record.fill(0), this.writeRecord(im, this.record)), this.slotChunk[im] = pm, this.slotVersion[im] = -1, (pm || Rm) && this.enqueue(im)
            }
      }
      requeueStarved() {
        for (let mm = 0; mm < GT; mm++) this.starved[mm] && this.slotChunk[mm] && this.enqueue(mm)
      }
      enqueue(mm) {
        this.queued[mm] || (this.queued[mm] = 1, this.queue.push(mm), this.queueSorted = !1)
      }
      drain(mm) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const mm = new Map;
          for (const Tm of this.queue) mm.set(Tm, this.slotDistance(Tm));
          this.queue.sort(((Tm, fm) => mm.get(fm) - mm.get(Tm))), this.queueSorted = !0
        }
        const Tm = performance.now();
        let fm = 0;
        const hm = [];
        for (; this.queue.length > 0 && (0 === fm || performance.now() - Tm < mm);) {
          const mm = this.queue.pop(),
            Tm = this.slotChunk[mm];
          !Tm || Tm.aJ || DD(Tm) ? (this.queued[mm] = 0, this.encodeSlot(mm), fm++) : hm.push(mm)
        }
        for (let Am = hm.length - 1; Am >= 0; Am--) this.queue.push(hm[Am])
      }
      slotDistance(mm) {
        const Tm = this.slotChunk[mm],
          fm = this.eyeChunk;
        return Tm ? Math.max(Math.abs(Tm.i - fm[0]), Math.abs(Tm.j - fm[1]), Math.abs(Tm.k - fm[2])) : 0
      }
      inRadius(mm, Tm, fm) {
        const hm = this.eyeChunk,
          [Am, am, xm] = eT;
        return Math.abs(mm - hm[0]) <= Am && Math.abs(Tm - hm[1]) <= am && Math.abs(fm - hm[2]) <= xm
      }
      release(mm) {
        const Tm = this.slotPool[mm];
        if (Tm) {
          for (let mm = Tm.length - 1; mm >= 0; mm--) this.freePool[this.freeCount++] = Tm[mm];
          this.slotPool[mm] = null
        }
      }
      encodeSlot(mm) {
        var Tm, fm, hm, Am, am;
        let xm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          wm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Dm = null !== (Tm = null === (fm = this.slotPool[mm]) || void 0 === fm ? void 0 : fm.length) && void 0 !== Tm ? Tm : 0;
        this.release(mm), this.starved[mm] = 0;
        const im = this.slotChunk[mm],
          Rm = this.record;
        if (!im || im.aJ || !im.lE) return this.slotChunk[mm] = null, this.slotVersion[mm] = -1, Rm.fill(0), this.writeRecord(mm, Rm), void(Dm > 0 && this.requeueStarved());
        this.slotVersion[mm] = im.EY;
        const pm = this.encodeBricks(im, mm, xm, wm);
        Rm[0] = im.i, Rm[1] = im.j, Rm[2] = im.k, Rm[3] = pm, this.writeRecord(mm, Rm), null === (hm = this.encoded) || void 0 === hm || hm.call(this, im), wm && (null !== (Am = null === (am = this.slotPool[mm]) || void 0 === am ? void 0 : am.length) && void 0 !== Am ? Am : 0) < Dm && this.requeueStarved()
      }
      encodeBricks(mm, Tm, fm, hm) {
        if (mm.eO) return PT;
        const Am = this.casters.blockCaster,
          {
            data: am,
            stride: xm,
            offset: wm
          } = mm.lE,
          [Dm, im, Rm] = xm,
          pm = ST,
          {
            bricks: Em,
            cells: om,
            special: Om
          } = fm;
        Em.fill(0), Om.fill(0);
        let Ym = 0,
          qm = 0,
          jm = 0;
        for (let Vm = 0; Vm < pm; Vm++) {
          const Tm = Vm >> 2,
            fm = 3 & Vm,
            hm = mm.vo[Vm],
            xm = hm === wD.d ? -1 : hm < Am.length ? Am[hm] : 0;
          if (0 !== xm)
            for (let mm = 0; mm < pm; mm++) {
              const hm = mm >> 2,
                Im = 3 & mm;
              let Km = wm + mm * Dm + Vm * im;
              for (let mm = 0; mm < pm; mm++, Km += Rm) {
                let wm = xm;
                if (wm < 0) {
                  const mm = am[Km];
                  if (wm = mm < Am.length ? Am[mm] : 0, 0 === wm) continue
                }
                const Dm = tT(hm, Tm, mm >> 2),
                  im = UT(Im, fm, 3 & mm);
                Em[3 * Dm + (im >>> 5)] |= 1 << (31 & im), om[Dm * CT + im] = wm, Ym++, jm = Vm, wm === dT ? qm++ : Om[Dm] = 1
              }
            }
        }
        return 0 === Ym ? PT : 32768 === qm ? HT | jm << 8 : (this.writePoolEntries(Tm, fm, hm), this.writeVoxels(sT + Tm * lT, Em), yT | jm << 8)
      }
      writePoolEntries(mm, Tm, fm) {
        const {
          bricks: hm,
          cells: Am,
          special: am
        } = Tm, xm = this.entry;
        let wm = 0;
        for (let Rm = 0; Rm < rT; Rm++) wm += am[Rm];
        if (0 === wm) return;
        fm && this.freeCount < wm && this.evictBeyond(mm, wm);
        const Dm = new Uint32Array(fm ? Math.min(wm, this.freeCount) : 0);
        let im = 0;
        for (let Rm = 0; Rm < rT; Rm++) {
          if (!am[Rm]) continue;
          const fm = 3 * Rm;
          if (im === Dm.length) {
            this.dropSpecials(Tm, Rm), this.starved[mm] = 1;
            continue
          }
          const wm = this.freePool[--this.freeCount];
          Dm[im++] = wm;
          for (let mm = 0; mm < CT; mm++) {
            const Tm = hm[fm + (mm >>> 5)] >>> (31 & mm) & 1 ? Am[Rm * CT + mm] : 0;
            1 & mm ? xm[mm >> 1] |= Tm << 16 : xm[mm >> 1] = Tm
          }
          hm[fm + 2] = wm + 1, this.writePool(af + 32 * wm, xm)
        }
        Dm.length > 0 && (this.slotPool[mm] = Dm)
      }
      evictBeyond(mm, Tm) {
        const fm = this.slotDistance(mm),
          hm = [];
        for (let Am = 0; Am < GT; Am++) Am !== mm && this.slotPool[Am] && this.slotDistance(Am) > fm && hm.push(Am);
        hm.sort(((mm, Tm) => this.slotDistance(Tm) - this.slotDistance(mm)));
        for (const Am of hm) {
          if (this.freeCount >= Tm) return;
          const mm = this.slotChunk[Am];
          mm && !mm.aJ && mm.lE && (mm.EY === this.slotVersion[Am] || DD(mm)) && this.encodeSlot(Am, this.victimScratch, !1)
        }
      }
      dropSpecials(mm, Tm) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const fm = 3 * Tm;
        for (let hm = 0; hm < CT; hm++) mm.cells[Tm * CT + hm] !== dT && (mm.bricks[fm + (hm >>> 5)] &= ~(1 << (31 & hm)))
      }
    }
    var pD = fm(37545);
    class ED {
      constructor(mm) {
        this.device = mm, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new jf, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.oE = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = mm.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = mm.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(mm, Tm, fm) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: hm
        } = this;
        hm.Go(mm, Tm), fm.forEachSunShadowCaster((mm => {
          this.add(mm)
        })), hm.finish();
        const Am = 0 === hm.parts;
        if (Am && this.uploadedEmpty) return;
        this.uploadedEmpty = Am;
        const {
          queue: am
        } = this.device, {
          words: xm
        } = hm;
        am.writeBuffer(this.frameBuffer, 0, xm, 0, 16385), hm.refs > 0 && am.writeBuffer(this.frameBuffer, 65540, xm, Rf, hm.refs), Am || am.writeBuffer(this.frameBuffer, 327684, xm, pf, hm.parts * Df)
      }
      add(mm) {
        const Tm = this.gridFor(mm);
        if (!Tm) return;
        const {
          frame: fm
        } = this, {
          oE: hm,
          worldAt: Am,
          instances: am,
          instanceCount: xm,
          thin: wm
        } = mm;
        if (am)
          for (let Dm = 0; Dm < xm; Dm++) wm ? (If(am, 16 * Dm, hm, Am, this.oE), fm.add(Tm, this.oE)) : fm.add(Tm, am, 16 * Dm);
        else fm.add(Tm, hm, Am)
      }
      gridFor(mm) {
        let {
          geometry: Tm,
          indexed: fm,
          first: hm,
          count: Am,
          skip: am
        } = mm, xm = this.grids.get(Tm);
        xm || (xm = new Map, this.grids.set(Tm, xm));
        const wm = `${fm?hm:-1-hm}:${Am}:${null!==am&&void 0!==am?am:""}`;
        let Dm = xm.get(wm);
        if (void 0 !== Dm || this.gridsFull) return Dm;
        const im = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = im + 2;
        else if (im > this.bakeDeadline) return;
        return Dm = this.bake(Tm, fm, hm, Am, am), void 0 !== Dm && xm.set(wm, Dm), Dm
      }
      bake(mm, Tm, fm, hm, Am) {
        const am = mm.vertexAttributes.find((mm => "position" === mm.kind)),
          xm = am ? function(mm, Tm, fm, hm) {
            let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const am = mm => Tm ? Tm[fm + mm] : fm + mm,
              xm = mm => null !== Am && [0, 1, 2].some((Tm => {
                const fm = am(mm + Tm);
                return fm >= Am[0] && fm < Am[1]
              })),
              wm = [1 / 0, 1 / 0, 1 / 0],
              Dm = [-1 / 0, -1 / 0, -1 / 0];
            for (let Vm = 0; Vm + 2 < hm; Vm += 3)
              if (!xm(Vm))
                for (let Tm = 0; Tm < 3; Tm++) {
                  const fm = am(Vm + Tm);
                  for (let Tm = 0; Tm < 3; Tm++) wm[Tm] = Math.min(wm[Tm], mm[3 * fm + Tm]), Dm[Tm] = Math.max(Dm[Tm], mm[3 * fm + Tm])
                }
            const im = Math.max(Dm[0] - wm[0], Dm[1] - wm[1], Dm[2] - wm[2]);
            if (!(im > 0)) return null;
            const Rm = im / 64,
              pm = [0, 0, 0],
              Em = [0, 0, 0],
              om = [0, 0, 0];
            for (let Vm = 0; Vm < 3; Vm++) pm[Vm] = Math.min(65, Math.ceil((Dm[Vm] - wm[Vm]) / Rm) + 1), Em[Vm] = wm[Vm] - Rm / 2, om[Vm] = Em[Vm] + pm[Vm] * Rm;
            const Om = new Uint32Array(Math.ceil(pm[0] * pm[1] * pm[2] / 32)),
              Ym = new Float64Array(9),
              qm = [0, 0, 0],
              jm = [0, 0, 0];
            for (let Vm = 0; Vm + 2 < hm; Vm += 3)
              if (!xm(Vm)) {
                for (let Tm = 0; Tm < 3; Tm++) {
                  const fm = am(Vm + Tm);
                  for (let hm = 0; hm < 3; hm++) Ym[3 * Tm + hm] = mm[3 * fm + hm]
                }
                for (let mm = 0; mm < 3; mm++) {
                  const Tm = Math.min(Ym[mm], Ym[3 + mm], Ym[6 + mm]),
                    fm = Math.max(Ym[mm], Ym[3 + mm], Ym[6 + mm]);
                  qm[mm] = Math.max(0, Math.floor((Tm - Em[mm]) / Rm - 1e-6)), jm[mm] = Math.min(pm[mm] - 1, Math.floor((fm - Em[mm]) / Rm + 1e-6))
                }
                for (let mm = qm[2]; mm <= jm[2]; mm++)
                  for (let Tm = qm[1]; Tm <= jm[1]; Tm++)
                    for (let fm = qm[0]; fm <= jm[0]; fm++)
                      if (Kf(Ym, Em[0] + (fm + .5) * Rm, Em[1] + (Tm + .5) * Rm, Em[2] + (mm + .5) * Rm, Rm / 2)) {
                        const hm = fm + pm[0] * (Tm + pm[1] * mm);
                        Om[hm >>> 5] |= 1 << (31 & hm)
                      }
              } return {
              words: Om,
              lo: Em,
              hi: om,
              cell: Rm,
              dims: pm
            }
          }((0, pD.f)(am, mm.vertexCount), Tm ? mm.indexData : null, fm, hm, Am) : null;
        if (!xm) return null;
        const {
          words: wm,
          ...Dm
        } = xm;
        if (this.gridTop + wm.length > of) return void(this.gridsFull = !0);
        const im = this.gridTop;
        return this.gridTop += wm.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * im, wm), {
          ...Dm,
          at: im
        }
      }
    }
    const oD = Math.cos(1 * Math.PI / 180);

    function OD(mm, Tm) {
      return mm[0] * Tm[0] + mm[1] * Tm[1] + mm[2] * Tm[2] < oD
    }
    async function YD(mm) {
      const {
        pixels: Tm,
        width: fm,
        height: hm
      } = await sA(mm), Am = new Uint8Array(fm * hm);
      for (let am = 0; am < Am.length; am++) Am[am] = Tm[4 * am + 3];
      return {
        width: fm,
        height: hm,
        alpha: Am
      }
    }
    class qD {
      constructor(mm, Tm) {
        this.device = mm, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(nf.m), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = mm.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = mm.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * BT,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = mm.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [fm, hm, Am] = nf.o;
        this.volume = mm.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: fm,
            height: hm,
            depthOrArrayLayers: Am
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = mm.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = mm.createBuffer({
          label: "sun-shadow-volume-work",
          size: nf.m,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Tm ? new ED(mm) : null, this.entityStandIn = Tm ? null : mm.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var mm, Tm;
        const fm = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || fm.push("Lite sun shadow volume pipeline compiling");
        const hm = null !== (mm = null === (Tm = this.casters) || void 0 === Tm ? void 0 : Tm.planesLoading) && void 0 !== mm ? mm : 0;
        return hm > 0 && fm.push(`${hm} Lite sun shadow plane casters loading their textures`), fm
      }
      entries() {
        var mm, Tm, fm, hm;
        const Am = kT.k;
        return [{
          binding: Am.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Am.lE,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Am.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Am.volume,
          resource: this.volumeView
        }, {
          binding: Am.sampler,
          resource: this.volumeSampler
        }, {
          binding: Am.entities,
          resource: {
            buffer: null !== (mm = null === (Tm = this.entities) || void 0 === Tm ? void 0 : Tm.frameBuffer) && void 0 !== mm ? mm : this.entityStandIn
          }
        }, {
          binding: Am.entityGrids,
          resource: {
            buffer: null !== (fm = null === (hm = this.entities) || void 0 === hm ? void 0 : hm.gridBuffer) && void 0 !== fm ? fm : this.entityStandIn
          }
        }]
      }
      prepare(mm, Tm, fm) {
        var hm;
        this.entitiesThisFrame = !1;
        const Am = null !== (hm = null === fm || void 0 === fm ? void 0 : fm.sunShadowReach()) && void 0 !== hm ? hm : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!fm || !Am.sunShadow && !Am.airShadow) return void(this.volumeHolds = null);
        if (mm.oE.qmm !== ST) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${mm.oE.qmm}; everything is lit.`)));
        const am = this.start(mm);
        this.casters.update(mm.Vo, mm.Vo.Jo.length);
        const xm = mm.HE;
        for (let Em = 0; Em < 3; Em++) this.eye[Em] = Tm[Em] + xm[Em];
        const wm = (0, nf.v)(this.eye);
        this.staleNear = wm;
        const Dm = mm.oE.HY;
        am.update(this.eye, ((mm, Tm, fm) => Dm.yY(mm, Tm, fm)), 1);
        const im = (0, nf.s)(fm.Q0()),
          Rm = am.eyeChunk,
          pm = this.uniformInts;
        for (let Em = 0; Em < 3; Em++) pm[Em] = Rm[Em], pm[4 + Em] = wm[Em];
        this.entitiesThisFrame = null !== this.entities && Am.sunShadow, this.entitiesThisFrame && qf(this.uniformFloats, 8, Tm, im), null !== this.volumeHolds && (this.castersWritten || OD(im, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(wm, im, Rm)
      }
      markStale(mm) {
        const Tm = this.staleNear,
          fm = ST,
          hm = [mm.i * fm, mm.j * fm, mm.k * fm];
        for (let am = 0; am < 3; am++)
          if (hm[am] + fm <= Tm[am] - fm || hm[am] >= Tm[am] + nf.o[am] + fm) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Am = this.stale;
        for (let am = 0; am < Am.length; am += 4)
          if (Am[am] === mm.i && Am[am + 1] === mm.j && Am[am + 2] === mm.k) return void(Am[am + 3] = this.swept);
        if (16 === Am.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Am.push(mm.i, mm.j, mm.k, this.swept)
      }
      writeStale() {
        const mm = this.swept,
          Tm = this.stale;
        this.staleAll && mm - this.staleAllSwept >= nf.g && (this.staleAll = !1, Tm.length = 0);
        let fm = 0;
        for (let Am = 0; Am < Tm.length; Am += 4)
          if (mm - Tm[Am + 3] < nf.g) {
            for (let mm = 0; mm < 4; mm++) Tm[fm + mm] = Tm[Am + mm];
            fm += 4
          } Tm.length = fm;
        const hm = this.uniformInts;
        hm[3] = this.staleAll ? 5 : fm / 4;
        for (let Am = 0; Am < 4; Am++)
          for (let mm = 0; mm < 3; mm++) hm[16 + 4 * Am + mm] = 4 * Am < fm ? Tm[4 * Am + mm] * ST : 0
      }
      writeUniform() {
        const mm = this.uniformInts;
        let Tm = this.uniformWritten;
        if (Tm) {
          let fm = !0;
          for (let hm = 0; hm < mm.length && fm; hm++) fm = mm[hm] === Tm[hm];
          if (fm) return
        }
        Tm ??= this.uniformWritten = new Int32Array(mm.length), Tm.set(mm), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(mm) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, mm)
      }
      computeVolume(mm, Tm, fm) {
        const hm = this.buildVolumePass();
        if (!hm) return void(this.volumeHolds = null);
        const Am = (0, nf.u)(this.volumeHolds, mm);
        this.volumeHolds = mm;
        const am = 1 === Am.length && Am[0].size.every(((mm, Tm) => mm === nf.o[Tm])),
          xm = this.sweptChunk,
          wm = this.sweptLight,
          Dm = Tm[0] !== wm[0] || Tm[1] !== wm[1] || Tm[2] !== wm[2],
          im = fm[0] !== xm[0] || fm[1] !== xm[1] || fm[2] !== xm[2],
          Rm = Dm && OD(Tm, wm);
        if ((am || this.written || im || Rm) && (this.fastLeft = nf.g), am || this.written || Dm || im) {
          this.written = !1;
          for (let mm = 0; mm < 3; mm++) xm[mm] = fm[mm], wm[mm] = Tm[mm];
          this.sweepLeft = am ? 0 : nf.g
        }
        if (am ? this.swept += nf.g : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Am.push(...(0, nf.x)(mm, this.slice)), this.slice = (this.slice + 1) % nf.g, this.swept++), 0 === Am.length) return;
        const pm = (0, nf.B)(this.workData, Tm, Am);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Em = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          om = Em.beginComputePass({
            label: "sun-shadow-volume"
          });
        om.setPipeline(hm.pipeline), om.setBindGroup(Zf.group, hm.bindGroup), om.dispatchWorkgroups(Math.ceil(pm / nf.k)), om.end(), this.device.queue.submit([Em.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const mm = Zf,
          Tm = GPUShaderStage.COMPUTE,
          fm = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: mm.uniform,
              visibility: Tm,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: mm.lE,
              visibility: Tm,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: mm.special,
              visibility: Tm,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: mm.work,
              visibility: Tm,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: mm.volume,
              visibility: Tm,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          hm = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: fm,
            entries: [{
              binding: mm.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: mm.lE,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: mm.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: mm.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: mm.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [fm]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: kf()
            }),
            entryPoint: "main"
          }
        }).then((mm => {
          this.volumePass = {
            pipeline: mm,
            bindGroup: hm
          }
        }), (mm => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(mm)}`)
        })), null
      }
      start(mm) {
        if (this.window) return this.window;
        const Tm = (mm, Tm) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * mm, Tm)
        };
        this.casters = new xD(((mm, fm) => {
          this.castersWritten = !0, Tm(mm, fm)
        }), YD);
        const fm = new RD(this.casters, ((mm, Tm) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * mm, Tm)
        }), Tm);
        return fm.encoded = mm => {
          this.markStale(mm)
        }, mm.oE.on("chunkAdded", (mm => {
          fm.chunkAdded(mm)
        })), this.window = fm, fm
      }
    }
    var jD = fm(38790),
      VD = fm(38795);
    const ID = 0,
      KD = 3,
      QD = 4,
      nD = 5;

    function JD(mm, Tm, fm, hm) {
      mm.drawOffset(Tm, hm + ID), Tm[hm + KD] = mm.drawTime(), fm[hm + QD] = mm.ring.drawStart(), fm[hm + nD] = mm.ring.drawCount()
    }
    const cD = `\n${Vh}\n\nconst MAX_STOPS = ${VD.d}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${VD.d/4}>,\n\tcolor1: array<vec4f, ${VD.d}>,\n\tcolor2: array<vec4f, ${VD.d}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${VD.d}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${VD.d}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var zD = fm(41643);
    class ZD {
      constructor(mm, Tm, fm, hm) {
        this.device = mm, this.system = Tm, this.frameIndex = fm, this.bindings = hm, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, zD.g)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (mm, Tm) => {
          this.device.queue.writeBuffer(this.ring, mm * VD.g * 4, this.system.ring.records, mm * VD.g, (Tm - mm) * VD.g)
        };
        const {
          name: Am
        } = Tm;
        this.ring = mm.createBuffer({
          label: `particles-${Am}`,
          size: Tm.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = mm.createBuffer({
          label: `particles-uniforms-${Am}`,
          size: 4 * VD.o,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(mm) {
        const Tm = (0, zD.d)(this.system, this.uniformBits, mm);
        Tm && (this.uniformBits = Tm, this.device.queue.writeBuffer(this.uniforms, 0, Tm))
      }
      bind() {
        const {
          system: mm
        } = this, Tm = this.texture;
        (0, zD.m)(mm, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${mm.name}`,
          size: [VD.l, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * VD.l
        }, [VD.l, 1]));
        const fm = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Tm.view && this.boundSampler === Tm.sampler && this.boundRamp === fm || (this.boundView = Tm.view, this.boundSampler = Tm.sampler, this.boundRamp = fm, this.bindGroup = this.device.createBindGroup({
          label: `particles-${mm.name}`,
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
            resource: Tm.sampler
          }, {
            binding: 3,
            resource: Tm.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: fm
          }]
        }))
      }
      destroy() {
        var mm;
        this.ring.destroy(), this.uniforms.destroy(), null === (mm = this.ramp) || void 0 === mm || mm.destroy()
      }
    }
    class kD {
      constructor(mm, Tm) {
        this.device = mm, this.resources = Tm, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, RT.c)();
        const fm = mm.createBindGroupLayout({
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
        this.frameLayout = mm.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = mm.createPipelineLayout({
          bindGroupLayouts: [fT(mm), fm, this.frameLayout]
        }), this.module = mm.createShaderModule({
          label: "particles",
          code: cD
        });
        const hm = mm.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        mm.queue.writeTexture({
          texture: hm
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: fm,
          rampSampler: mm.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: hm.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Tm, fm) => (this.bindTarget(fm), {
            renderable: this.renderable,
            pipeline: wT(mm, fm),
            draw: mm => fm === this.preparedTarget ? this.draw(mm) : 0
          })
        }
      }
      get hAm() {
        return this.systems.size
      }
      reset() {
        for (const mm of this.systems.keys()) mm.reset()
      }
      describePendingWork() {
        return (0, jD.d)(this.systems.keys(), "Lite")
      }
      yX(mm, Tm) {
        const fm = new jD.c(mm, Tm, this);
        return this.systems.set(fm, new ZD(this.device, fm, this.allocateFrameIndex(), this.bindings)), fm
      }
      Q8(mm, Tm) {
        for (const fm of this.systems.keys()) fm.Q8(mm, Tm)
      }
      canDraw(mm) {
        const Tm = this.systems.get(mm),
          fm = mm.texture ? this.resources.boundTexture(mm.texture) : null;
        if (!Tm || !fm || !this.targetPipelines) return !1;
        if (Tm.texture = fm, Tm.pipelines.length = 0, !LA(mm.blendMode)) return this.warnOnce(`blend:${mm.blendMode}`, `particle blend mode ${mm.blendMode} is not drawn (${mm.name})`), !0;
        const hm = (0, NA.j)(mm.blendMode);
        for (const Am of hm) {
          const mm = this.pipelineFor(Am);
          if (!1 === mm) return Tm.pipelines.length = 0, !0;
          mm && Tm.pipelines.push(mm)
        }
        return Tm.pipelines.length === hm.length
      }
      disposeStopped(mm) {
        mm.dispose()
      }
      remove(mm) {
        const Tm = this.systems.get(mm);
        Tm && (this.systems.delete(mm), Tm.destroy(), this.freeFrameIndices.push(Tm.frameIndex))
      }
      prepare(mm) {
        const Tm = mm.animationRatio || 1;
        DT(this.renderable._worldCenter, mm, AT), this.preparedTarget = this.target, this.draws.length = 0;
        let fm = 0;
        for (const hm of this.systems.values()) {
          const mm = hm.system;
          if (!mm.animateIfActive(Tm)) continue;
          if (mm.ring.takeUploads(hm.upload), !mm.hasLiveParticles() || 0 === hm.pipelines.length) continue;
          hm.writeUniforms(this.warnOnce), hm.bind();
          const Am = 64 * hm.frameIndex;
          hm.count = mm.ring.drawCount(), JD(mm, this.frameData, this.frameBits, Am), fm = Math.max(fm, Am + 64), this.draws.push(hm)
        }
        fm > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, fm)
      }
      draw(mm) {
        let Tm = 0,
          fm = null;
        for (const hm of this.draws) {
          mm.setBindGroup(1, hm.bindGroup), mm.setBindGroup(2, this.frameBindGroup, [256 * hm.frameIndex]);
          for (const Am of hm.pipelines) Am !== fm && (mm.setPipeline(Am), fm = Am), mm.draw(4, hm.count), Tm++
        }
        return Tm
      }
      bindTarget(mm) {
        this.target = mm;
        const Tm = `${mm._colorFormat}|${mm._depthStencilFormat}|${mm._depthCompare}|${mm._sampleCount}`;
        let fm = this.pipelines.get(Tm);
        fm || (fm = new Map, this.pipelines.set(Tm, fm)), this.targetPipelines = fm
      }
      pipelineFor(mm) {
        var Tm;
        const fm = this.targetPipelines,
          hm = fm.get(mm);
        if (void 0 !== hm) return hm;
        fm.set(mm, null);
        const Am = this.target,
          am = mm === NA.c,
          xm = null !== (Tm = Am._depthCompare) && void 0 !== Tm ? Tm : hT;
        return this.device.createRenderPipelineAsync({
          label: `particles-${mm}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Wm({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: am ? 1 : 0
            }
          }, Am, vA((0, NA.h)(mm))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Am._depthStencilFormat ? {
            format: Am._depthStencilFormat,
            depthCompare: xm,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Am._sampleCount
          }
        }).then((Tm => {
          fm.set(mm, Tm)
        }), (Tm => {
          fm.set(mm, !1), console.error("Lite particle pipeline failed", Tm), dA("particles", `blend-${mm}`, Tm)
        })), null
      }
      allocateFrameIndex() {
        const mm = this.freeFrameIndices.pop();
        if (void 0 !== mm) return mm;
        const Tm = this.nextFrameIndex++;
        if (64 * (Tm + 1) > this.frameData.length) {
          const mm = new Float32Array(2 * this.frameData.length);
          mm.set(this.frameData), this.frameData = mm, this.frameBits = new Uint32Array(mm.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Tm
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
    class bD {
      constructor(mm, Tm, fm, hm, Am) {
        this.lite = mm, this.canvas = Tm, this.info = fm, this.resources = Am, this.fhm = !1, this.needPOTTextures = !1, this.J_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Tm.width, this.renderHeight = Tm.height, this.caps = {
          maxTextureSize: hm.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: hm.maxTextureArrayLayers
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
      setSize(mm, Tm) {
        if (this.renderWidth === mm && this.renderHeight === Tm) return !1;
        const fm = this.renderWidth,
          hm = this.renderHeight;
        this.renderWidth = mm, this.renderHeight = Tm;
        try {
          (0, sm.o)(this.lite, mm, Tm)
        } catch (Am) {
          if (Am instanceof DOMException && "InvalidStateError" === Am.name) {
            this.renderWidth = fm, this.renderHeight = hm;
            try {
              (0, sm.o)(this.lite, fm, hm)
            } catch {
              this.canvas.width = fm, this.canvas.height = hm
            }
            return console.warn("WebGPU could not allocate render targets for resize", mm, Tm, Am.message), !1
          }
          throw Am
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
      bI() {
        const mm = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : mm - this.lastFrameTime, this.lastFrameTime = mm
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(mm, Tm) {
        const fm = document.createElement("canvas");
        return fm.width = mm, fm.height = Tm, fm
      }
      S_(mm, Tm) {
        var fm;
        return null !== (fm = this.resources.S_.get(mm)) && void 0 !== fm ? fm : new Bm(this.resources, mm, Tm)
      }
      atlasArray(mm, Tm, fm) {
        return this.resources.atlasArray(mm, Tm, fm)
      }
    }
    class SD {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(mm) {
        this.fov = mm.fov, this.nearPlane = mm.near, this.farPlane = mm.far;
        const Tm = mm.worldMatrix;
        for (let fm = 0; fm < 16; fm++)
          if (this.worldMatrix[fm] !== Tm[fm]) return this.worldMatrix.set(Tm), void this.worldMatrixVersion++
      }
    }
    class eD {
      constructor(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        let Rm = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = mm, this.Aq = Tm, this.sceneTask = fm, this.gpuDevice = hm, this.terrain = Am, this.meshes = am, this.particles = xm, this.resources = wm, this.sunShadow = Rm, this.CTm = void 0, this.backendName = "WebGPU (Lite)", this.I5 = void 0, this.modelMeshes = void 0, this.camera = new SD, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Mm(hm.lost), this.deviceLost = this.refusals.deviceLost, this.CTm = new bD(mm, Dm, im, hm.limits, wm), (0, km.A)({
          ni: mm => {
            Nm(mm) && wm.textureSlot(mm)
          },
          loaded: mm => Nm(mm) ? wm.textureLoaded(mm) : null,
          canvasUpdated: (mm, Tm, fm) => {
            Nm(mm) && wm.canvasUpdated(mm, Tm, fm)
          }
        }), this.I5 = am.I5, this.modelMeshes = am.modelMeshes, Tm.camera = this.camera
      }
      get castsEntitySunShadows() {
        var mm, Tm;
        return null !== (mm = null === (Tm = this.sunShadow) || void 0 === Tm ? void 0 : Tm.tracesEntities) && void 0 !== mm && mm
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(mm) {
        this.modelMeshes.attach(mm.model, mm.sceneMirror);
        const Tm = mm.Aq;
        this.setClearColour(Tm.clearColor.r, Tm.clearColor.g, Tm.clearColor.b), Tm.draw = () => {
          this.drawFrame(mm, Tm)
        }
      }
      render(mm) {
        if (!this.refusals.lost) {
          try {
            this.CTm.bI(), mm.Aq.render()
          } catch (Tm) {
            throw this.refusals.frameFailed(Tm), Tm
          }
          this.refusals.frameDrawn()
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var mm, Tm, fm, hm;
        const Am = [...this.particles.describePendingWork(), ...null !== (mm = null === (Tm = this.sunShadow) || void 0 === Tm ? void 0 : Tm.describePendingWork()) && void 0 !== mm ? mm : []],
          am = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (fm = this.terrain.sceneDepth) && void 0 !== fm && fm.compiling ? 1 : 0) + (null !== (hm = this.terrain.shadowMask) && void 0 !== hm && hm.compiling ? 1 : 0);
        am > 0 && Am.push(`${am} Lite pipelines compiling`);
        const xm = this.terrain.buffersAwaitingVerdict;
        xm > 0 && Am.push(`${xm} Lite terrain buffers awaiting their out-of-memory verdict`);
        const wm = this.resources.texturesLoading;
        return wm > 0 && Am.push(`${wm} Lite textures loading`), Am
      }
      prepareTexture(mm) {
        return null !== this.resources.boundTexture(mm) || this.resources.textureFailed(mm)
      }
      drawFrame(mm, Tm) {
        var fm, hm, Am, am, xm, wm;
        const Dm = Ow(mm);
        this.camera.copyFromView(Dm), this.setClearColour(Dm.clearColour[0], Dm.clearColour[1], Dm.clearColour[2]), null === (fm = this.sunShadow) || void 0 === fm || fm.prepare(mm.IE, Dm.eye, null !== (hm = mm.IE.KO) && void 0 !== hm ? hm : null), this.terrain.prepare(mm, Dm), null === (Am = this.terrain.sceneDepth) || void 0 === Am || Am.setPlanes(Dm.near, Dm.far), null === (am = this.terrain.shadowMask) || void 0 === am || am.prepare(Dm), Fx(this.sceneTask), this.meshes.prepare(Tm, Dm, mm.model.earthSky, null !== (xm = mm.IE.KO) && void 0 !== xm ? xm : null), this.particles.prepare(Dm);
        const im = performance.now();
        this.resources.flushUploads(), null === (wm = this.sunShadow) || void 0 === wm || wm.traceEntities(this.meshes);
        try {
          (0, sm.k)(this.engine, this.lastFrameTime > 0 ? im - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = im
      }
      setClearColour(mm, Tm, fm) {
        const hm = this.Aq.clearColor;
        hm.r = mm, hm.g = Tm, hm.b = fm, hm.a = 1
      }
    }
    const ND = "WebGPU device lost while Lite was starting";

    function GD(mm, Tm) {
      return "object" === typeof mm && null !== mm ? Object.assign(mm, {
        startStep: Tm
      }) : mm
    }
    async function XD(mm, Tm) {
      const fm = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!fm) throw GD(new Error("No WebGPU adapter"), "no_adapter");
      const hm = fm.info,
        Am = {
          vendor: (null === hm || void 0 === hm ? void 0 : hm.vendor) || "unknown vendor",
          renderer: (null === hm || void 0 === hm ? void 0 : hm.architecture) || "unknown renderer",
          version: (null === hm || void 0 === hm ? void 0 : hm.description) || "unknown version"
        },
        am = function(mm) {
          const Tm = {};
          for (const fm in mm.limits) {
            const hm = mm.limits[fm];
            "number" === typeof hm && (Tm[fm] = hm)
          }
          return Tm
        }(fm);
      let xm;
      mm.style.background = "black";
      try {
        xm = await (0, sm.e)(mm, {
          msaaSamples: Tm.jfm ? 4 : 1,
          requiredLimits: am,
          alphaMode: "premultiplied"
        })
      } catch (Rm) {
        throw GD(Rm, "#47" === (null === (wm = Rm) || void 0 === wm ? void 0 : wm.message) ? "no_adapter" : "device")
      }
      var wm;
      null !== Tm.bufferSize && (0, sm.o)(xm, Tm.bufferSize.width, Tm.bufferSize.height);
      const Dm = function(mm) {
        return mm._device
      }(xm);
      let im = null;
      Dm.lost.then((mm => {
        im = mm, console.error(`WebGPU device lost (${mm.reason}): ${mm.message}`)
      }));
      try {
        const fm = await async function(mm, Tm, fm, hm, Am, am) {
          const xm = (0, lm.b)(mm),
            wm = new dx(mm, Tm),
            Dm = new Ww(Tm),
            im = new Nx(Tm, wm, (mm => function(mm, Tm) {
              for (const hm of mT(mm)) {
                var fm;
                if (hm._targetSignature === Tm) return null !== (fm = hm._sceneBG) && void 0 !== fm ? fm : null
              }
              return null
            }(xm, mm))),
            Rm = new kD(Tm, wm);
          for (const om of function(mm, Tm, fm) {
              return [Tm.opaqueRenderable, mm.opaqueRenderable, mm.skyLastRenderable, fm.renderable, Tm.transparentRenderable, mm.transparentRenderable, mm.frontRenderable]
            }(im, Dm, Rm)) Fm(xm, om);
          const pm = function(mm) {
            for (const Tm of mT(mm))
              if ("Aq" === Tm.name) return Tm;
            throw new Error("Lite: the scene has no render task named scene")
          }(xm);
          Am && Dm.installSceneDepth(pm, mm);
          const Em = am ? new qD(Tm, am.entities) : null;
          Dm.sunShadow = Em, Em && null !== am && void 0 !== am && am.entities && (Dm.shadowMask = new ew(Tm, pm, mm, Dm));
          return im.sunShadow = Em, await (0, lm.e)(xm), new eD(mm, xm, pm, Tm, Dm, im, Rm, wm, fm, hm, Em)
        }(xm, Dm, mm, Am, Tm.sceneDepth, Tm.sunShadow);
        if (null !== im) {
          const {
            reason: mm,
            message: Tm
          } = im;
          throw Object.assign(new Error(`${ND} (${mm}): ${Tm}`), {
            fallbackReason: ND
          })
        }
        return fm
      } catch (Rm) {
        throw Dm.destroy(), null === im ? Rm : GD(Rm, "device")
      }
    }
  },
  40776: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      e: () => hm,
      f: () => Em,
      g: () => Rm,
      h: () => qm,
      i: () => am,
      k: () => wm,
      n: () => Dm,
      q: () => xm,
      u: () => Ym,
      v: () => om,
      x: () => Om
    });
    const hm = 3,
      Am = 0,
      am = 1,
      xm = 2,
      wm = {
        uniform: 3,
        lE: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Dm = 10,
      im = "BloxdPackInputs",
      Rm = "bloxdPackInputs",
      pm = [{
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
      Em = 80;

    function om() {
      const mm = pm.map((mm => {
        let {
          name: Tm,
          type: fm
        } = mm;
        return `    ${Tm}: ${fm},\n`
      })).join("");
      return `struct ${im} {\n${mm}}\n@group(${hm}) @binding(${Am}) var<uniform> ${Rm}: ${im};\n`
    }

    function Om(mm, Tm) {
      const fm = new DataView(mm, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Em),
        [hm, Am, am, xm, wm, Dm] = pm;
      fm.setFloat32(hm.offset, Tm.seconds, !0), fm.setUint32(Am.offset, Tm.lit ? 1 : 0, !0);
      for (let im = 0; im < 3; im++) fm.setInt32(am.offset + 4 * im, Tm.renderOffset[im], !0), fm.setFloat32(xm.offset + 4 * im, Tm.Q0[im], !0), fm.setFloat32(wm.offset + 4 * im, Tm.eyePosition[im], !0), fm.setFloat32(Dm.offset + 4 * im, Tm.shadowDirection[im], !0)
    }

    function Ym(mm) {
      const Tm = new Uint32Array(Math.max(1, mm.length));
      return mm.forEach(((mm, fm) => {
        let {
          id: hm,
          rotation: Am
        } = mm;
        Tm[fm] = 65535 & hm | (3 & Am) << 16
      })), Tm
    }
    const qm = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);