export const id = 249;
export const ids = [249];
export const modules = {
  40074: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ey,
      e: () => cb,
      i: () => Zy,
      j: () => oy
    });
    var Uy = Wy(35917),
      hy = Wy(37380),
      fy = Wy(37374);

    function Zy(yb, bb, Wy, Uy) {
      const hy = fy.u;
      bb.fill(0), yb.gravity.toArray(bb, hy.gravity), yb.colorDead.toArray(bb, hy.colorDead), Wy[hy.ramp] = yb.useRampGradients ? 1 : 0;
      const Zy = yb.getColorGradients(),
        cb = ey(yb, Zy, "colour", Uy);
      Wy[hy.colorCount] = cb;
      for (let fy = 0; fy < cb; fy++) {
        var Py;
        const yb = Zy[qb(Zy, fy)];
        bb[hy.colorPositions + fy] = yb.gradient, yb.color1.toArray(bb, hy.color1 + 4 * fy), (null !== (Py = yb.color2) && void 0 !== Py ? Py : yb.color1).toArray(bb, hy.color2 + 4 * fy)
      }
      const oy = yb.getVelocityGradients(),
        By = ey(yb, oy, "nZ", Uy);
      Wy[hy.velocityCount] = By;
      for (let fy = 0; fy < By; fy++) mb(bb, hy.nZ + 4 * fy, oy[qb(oy, fy)]);
      const Ky = yb.useRampGradients ? yb.getColorRemapGradients() : null,
        sy = ey(yb, Ky, "colour remap", Uy);
      Wy[hy.remapCount] = sy;
      for (let fy = 0; fy < sy; fy++) mb(bb, hy.remap + 4 * fy, Ky[qb(Ky, fy)])
    }

    function cb() {
      return {
        key: [],
        texels: new Uint8Array(4 * fy.m)
      }
    }
    const Py = [];

    function oy(yb, bb) {
      return By(yb, Py), !ly(Py, bb.key) && (bb.key.length = 0, bb.key.push(...Py), bb.key.length > 0 && function(yb, bb) {
        for (let Wy = 0; Wy < fy.m; Wy++) hy.i.GetCurrentGradient(Wy / fy.m, yb, ((yb, bb, Wy) => {
          Uy.Color3.LerpToRef(yb.color, bb.color, Wy, Ky)
        })), bb[4 * Wy] = 255 * Ky.r, bb[4 * Wy + 1] = 255 * Ky.g, bb[4 * Wy + 2] = 255 * Ky.b, bb[4 * Wy + 3] = 255
      }(yb.getRampGradients(), bb.texels), !0)
    }

    function By(yb, bb) {
      bb.length = 0;
      const Wy = yb.useRampGradients ? yb.getRampGradients() : null;
      if (null !== Wy && void 0 !== Wy && Wy.length) {
        bb.push(Wy.length);
        for (const yb of Wy) bb.push(yb.gradient, yb.color.r, yb.color.g, yb.color.b)
      }
    }
    const Ky = new Uy.Color3;

    function ey(yb, bb, Wy, Uy) {
      return bb ? bb.length > fy.c ? (Uy(`particleStops:${Wy}`, `GPU particles use the first 2 and last ${fy.c-2} of more than ${fy.c} ${Wy} gradient stops (${yb.name})`), fy.c) : bb.length : 0
    }

    function qb(yb, bb) {
      return bb < 2 || yb.length <= fy.c ? bb : yb.length - fy.c + bb
    }
    const sy = new Float32Array(fy.q),
      Sy = new Uint32Array(sy.buffer);

    function Ey(yb, bb, Wy) {
      return Zy(yb, sy, Sy, Wy), bb && ly(Sy, bb) ? null : Sy.slice()
    }

    function ly(yb, bb) {
      if (yb.length !== bb.length) return !1;
      for (let Wy = 0; Wy < yb.length; Wy++)
        if (yb[Wy] !== bb[Wy]) return !1;
      return !0
    }

    function mb(yb, bb, Wy) {
      var Uy;
      yb[bb] = Wy.gradient, yb[bb + 1] = Wy.factor1, yb[bb + 2] = null !== (Uy = Wy.factor2) && void 0 !== Uy ? Uy : Wy.factor1
    }
  },
  40066: (yb, bb, Wy) => {
    function Uy() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const bb = new Set;
      return (Wy, Uy) => {
        bb.has(Wy) || (bb.add(Wy), console.warn(yb + Uy))
      }
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  40108: (yb, bb, Wy) => {
    Wy.d(bb, {
      createLiteRendererAsync: () => MP,
      liteBabylonBackend: () => py,
      setPipelineFailureHook: () => Nh
    });
    var Uy = Wy(35917),
      hy = Wy(36213),
      fy = Wy(36557),
      Zy = Wy(35808),
      cb = Wy(36568);
    class Py extends cb.d {
      constructor() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        super(...bb), this.color = new Uy.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: bb[0].kWy().getUniqueId(),
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
          needAlphaBlendingForMesh: yb => yb.visibility < 1 || yb.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const oy = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      By = yb => 1 << oy.indexOf(yb),
      Ky = By("VERTEXCOLOR"),
      ey = By("INSTANCES"),
      qb = By("THIN_INSTANCES"),
      sy = By("INSTANCESCOLOR"),
      Sy = By("FOG"),
      Ey = By("LITE_FRONT_LAYER");

    function ly(yb, bb, Wy, Uy) {
      let hy = 0;
      return yb.isVerticesDataPresent("color") && (hy |= Ky), "none" !== bb && (hy |= ey), "thin" === bb && (hy |= qb, yb.isVerticesDataPresent("instanceColor") && (hy |= sy)), Uy.fogEnabled && yb.applyFog && 0 !== Uy.fogMode && (hy |= Sy), Wy >= 1 && (hy |= Ey), hy
    }

    function mb(yb, bb) {
      yb.updateColor4("color", bb.color, bb.alpha)
    }
    var Cy = Wy(36508),
      Ty = Wy(36001),
      Vy = Wy(35943),
      Jy = Wy(35790),
      gb = Wy(36491),
      Gy = Wy(36503),
      Oy = Wy(35804),
      Ry = Wy(35806),
      vb = Wy(35817);
    const ib = Jy.b.GLSL;
    class My {
      constructor(yb, bb) {
        this.name = yb, this.Pf = bb, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.Nby = {
          addOnce: yb => {
            this.disposers.push(yb)
          }
        }, this.uniqueId = bb.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      kWy() {
        return this.Pf
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
      needAlphaBlendingForMesh(yb) {
        return (0, Oy.S)(this.model, yb.visibility, yb.hasVertexAlpha)
      }
      needAlphaTestingForMesh(yb) {
        return (0, Oy.V)(this.model, yb.visibility, yb.hasVertexAlpha)
      }
      dispose() {
        (0, Ty.j)(this);
        for (const yb of this.disposers.splice(0)) yb()
      }
      get model() {
        return (0, Oy.bb)(this)
      }
    }
    const Yy = new WeakSet;

    function Xy(yb) {
      return Yy.has(yb)
    }

    function ny(yb) {
      Yy.add(yb)
    }
    const uy = {
      create: (yb, bb) => ((0, Vy.t)(yb, new My(yb.name, bb)), Ry.b.defines()),
      write: () => {},
      addFeature: (yb, bb) => {
        const Wy = yb.mirror;
        bb.feature === Gy.g && bb.state.dirLightCount > 0 && (yb.disableLighting = !0, (0, Oy._)(yb)), "BLOXD_LIGHTING" in bb.defines && (0, Ty.f)(Wy), bb.feature === gb.j && ((0, Cy.h)(bb.state, ib), function(yb, bb) {
          const Wy = yb.kWy().xh();
          bb.textures.forEach(((Uy, hy) => {
            setTimeout((() => {
              var fy, Zy;
              const {
                url: cb
              } = Uy.source;
              Wy.atlasArray(cb, null !== (fy = null === (Zy = bb.sources.pixels) || void 0 === Zy ? void 0 : Zy[hy]) && void 0 !== fy ? fy : null, bb.sources.layerWidth).then((Wy => {
                (0, Cy.e)(yb, bb, hy, Wy, Wy.layerWidth, Wy.layers, ib)
              })).catch((yb => {
                console.error(`Failed to build texture array for atlas ${hy}`, yb)
              }))
            }))
          }))
        }(Wy, bb.state))
      },
      texture: (yb, bb, Wy) => {
        let {
          data: Uy,
          sets: hy
        } = Wy;
        var fy;
        (ny(yb), Uy) && (yb.uvSet = null !== (fy = null === hy || void 0 === hy ? void 0 : hy.coordinatesIndex) && void 0 !== fy ? fy : 0, (0, Vy.db)(yb.matrix, null !== hy && void 0 !== hy ? hy : {}))
      },
      cube: ny,
      canvas: (yb, bb, Wy) => {
        let {
          width: Uy,
          height: hy,
          mipmaps: fy,
          samplingMode: Zy = vb.m.trilinear,
          hasAlpha: cb = !1,
          wrap: Py = vb.e.clamp
        } = Wy;
        const oy = yb.xh().createCanvas(Uy, hy),
          By = new vb.n("2d", {
            kind: "canvas",
            width: Uy,
            height: hy,
            canvas: oy
          }, {
            samplingMode: Zy,
            wrapU: Py,
            wrapV: Py,
            noMipmap: !fy,
            invertY: !0
          });
        return By.hasAlpha = cb, ny(By), By
      }
    };
    var rb = Wy(36026),
      Hy = Wy(35893);
    class ab {
      constructor(yb, bb, Wy) {
        this.engine = yb, this.clearColor = bb, this.ambientColor = Wy, this.onBeforeRenderObservable = new Hy.c, this.onBeforeCameraRenderObservable = new Hy.c, this.onAfterRenderObservable = new Hy.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.YV = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      xh() {
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
      addPendingData(yb) {
        this.pending.push(yb)
      }
      removePendingData(yb) {
        const bb = this.pending.indexOf(yb); - 1 !== bb && this.pending.splice(bb, 1)
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

    function Fy() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const py = {
      FBy: Fy,
      HBy: (yb, bb) => {
        const Wy = new ab(yb.engine, Uy.e.FromArray(bb.clearColor), Uy.Color3.FromArray(bb.ambientColor));
        (0, Zy.c)(uy, Wy), yb.Pf = Wy,
          function(yb, bb) {
            const Wy = Object.assign((0, rb.k)(yb, "camera"), {
              layerMask: 268435455
            });
            yb.model.nodes.setWorldSource(Wy.row, yb.model.view.worldMatrix), yb.camera = bb.activeCamera = Wy
          }(yb, Wy), (0, hy.j)(yb, ((yb, bb, Wy) => (0, fy.e)(yb, bb, Wy, cb.d)))
      },
      YBy: () => {},
      setBabylonFog: () => {},
      pBy: Fy,
      jKy: () => {},
      linesFromArrays: (yb, bb, Wy) => (0, fy.e)(yb, bb, Wy, Py),
      Bf: () => {},
      QBy: Fy
    };
    var Ly = Wy(40178),
      Qy = Wy(40192);
    class jb {
      constructor(yb) {
        this.deviceLost = void 0, this.refusedFrames = 0, this.refused = void 0;
        const bb = new Promise((yb => {
          this.refused = yb
        }));
        this.deviceLost = Promise.race([yb, bb])
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(yb) {
        (function(yb) {
          const {
            name: bb,
            message: Wy
          } = null !== yb && void 0 !== yb ? yb : {};
          return "InvalidStateError" === bb && "string" === typeof Wy && Wy.startsWith("GPUDevice.")
        })(yb) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: yb.message,
          framesRefused: !0
        }))
      }
    }
    class Dy {
      constructor(yb) {
        this.resources = yb, this.matrixKey = {
          Hy: 0
        }, this.attributesKey = {
          Hy: 0
        }, this.inputs = Object.create(null);
        for (let bb = 0; bb < 4; bb++) this.inputs[`world${bb}`] = new kb(this.matrixKey, 16 * bb, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(yb, bb) {
        this.resources.vertexBufferCreated(this.matrixKey, yb, !0), bb && this.resources.vertexBufferCreated(this.attributesKey, bb, !0)
      }
    }
    class tb extends Dy {
      constructor(yb, bb, Wy) {
        super(yb), this.mesh = bb, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Uy = this.inputs;
        let hy = 0;
        for (const {
            size: Zy
          }
          of Wy) hy += Zy;
        for (const {
            name: Zy,
            offset: cb,
            size: Py,
            type: oy
          }
          of Wy) Uy[Zy] = new kb(this.attributesKey, 4 * cb, 4 * hy, Py, !0, oy);
        this.rowStride = hy, yb.rZy.set(bb, this);
        const fy = bb.isVerticesDataPresent;
        bb.isVerticesDataPresent = (yb, Wy) => yb in Uy || fy.call(bb, yb, Wy)
      }
      attach(yb, bb) {
        this.matrices = yb, this.attributes = bb, this.bind(yb, bb), this.mirror(yb, yb.length, yb.length / 16)
      }
      sZy(yb) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, yb ? 64 * yb : void 0)
      }
      SZy() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(yb, bb) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * yb, 16 * bb)
      }
      attributeRows(yb, bb) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, yb * this.rowStride, bb * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(yb, bb, Wy) {
        const Uy = this.mesh._thinInstanceDataStorage;
        Uy.matrixData = yb, Uy.matrixBufferSize = bb, Uy.worldMatrices = null, Uy.instancesCount = Wy
      }
    }
    class wy extends Dy {
      constructor(yb, bb, Wy) {
        var Uy, hy, fy, Zy;
        super(yb), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.interleavedKinds) && void 0 !== Uy ? Uy : null, this.offsets = null !== (hy = null === Wy || void 0 === Wy ? void 0 : Wy.interleavedOffsets) && void 0 !== hy ? hy : [], this.rowStride = null !== (fy = null === Wy || void 0 === Wy ? void 0 : Wy.interleavedRowStride) && void 0 !== fy ? fy : 0, null === (Zy = this.layout) || void 0 === Zy || Zy.forEach(((yb, bb) => {
          this.inputs[yb] = new kb(this.attributesKey, 4 * this.offsets[bb], 4 * this.rowStride, Wy.strides[yb])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), yb.batchUploads.set(bb, this), bb.Nby.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(yb) {
        const bb = this.packedBatch;
        return bb.renderSelf ? 0 === yb ? this.packedSource : bb.instances[yb - 1] : bb.instances[yb]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(yb, bb, Wy, Uy) {
        const hy = (bb.renderSelf ? 1 : 0) + bb.rows.length;
        if (this.frame = Uy, this.count = hy, this.packedSource = yb, this.packedBatch = bb, 0 === hy) return;
        if (yb.getWorldMatrix(), 16 * hy > this.matrices.length) {
          let yb = this.matrices.length / 16;
          for (; yb < hy;) yb *= 2;
          this.matrices = new Float32Array(16 * yb), this.attributes &&= new Float32Array(yb * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let fy = 0;
        bb.renderSelf && this.packRow(fy++, yb, bb.row, Wy);
        for (let Zy = 0; Zy < bb.rows.length; Zy++) this.packRow(fy++, bb.instances[Zy], bb.rows[Zy], Wy);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * hy), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, hy * this.rowStride)
      }
      packRow(yb, bb, Wy, Uy) {
        const hy = this.matrices;
        if (Wy < 0) hy.set(bb.getWorldMatrix().m, 16 * yb);
        else
          for (let oy = 0; oy < 16; oy++) hy[16 * yb + oy] = Uy[16 * Wy + oy];
        const fy = this.attributes;
        if (!fy) return;
        const Zy = bb.BWy,
          cb = this.layout;
        for (let oy = 0; oy < cb.length; oy++) {
          var Py;
          const bb = null !== (Py = Zy[cb[oy]]) && void 0 !== Py ? Py : 0,
            Wy = yb * this.rowStride + this.offsets[oy];
          bb.toArray ? bb.toArray(fy, Wy) : bb.copyToArray ? bb.copyToArray(fy, Wy) : fy[Wy] = bb
        }
      }
    }
    class kb {
      constructor(yb, bb, Wy, Uy) {
        let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = yb, this.byteOffset = bb, this.byteStride = Wy, this.size = Uy, this.instanced = hy, this.type = fy, this.normalized = Zy
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
    const Ny = "CANVAS_ALPHA_ONE",
      zb = `override ${Ny}: bool = false;`,
      Iy = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function xb(yb, bb, Wy) {
      var Uy;
      let hy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const fy = null !== (Uy = bb._colorFormat) && void 0 !== Uy ? Uy : "bgra8unorm",
        Zy = hy ? 15 : 0;
      return Wy ? {
        ...yb,
        targets: [{
          format: fy,
          blend: {
            color: Wy,
            alpha: Iy
          },
          writeMask: Zy
        }]
      } : {
        ...yb,
        constants: {
          ...yb.constants,
          [Ny]: 1
        },
        targets: [{
          format: fy,
          writeMask: Zy
        }]
      }
    }

    function Ay(yb, bb) {
      yb._renderables.push(bb)
    }

    function dy(yb) {
      var bb, Wy;
      return null !== (bb = null === (Wy = yb._frameGraph) || void 0 === Wy ? void 0 : Wy._tasks) && void 0 !== bb ? bb : []
    }

    function yW(yb) {
      return yb._currentEncoder
    }

    function bW(yb) {
      return yb.createBindGroupLayout({
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
    const Wb = "greater-equal",
      Ub = 2e5,
      hb = 1e5,
      fb = new WeakMap;

    function Zb(yb, bb) {
      let Wy = fb.get(yb);
      if (!Wy) {
        Wy = {
          module: yb.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, fb.set(yb, Wy)
      }
      const Uy = `${bb._colorFormat}|${bb._depthStencilFormat}|${bb._sampleCount}`;
      let hy = Wy.pipelines.get(Uy);
      if (!hy) {
        var fy;
        const {
          module: Zy
        } = Wy;
        hy = yb.createRenderPipeline({
          label: `placeholder ${Uy}`,
          layout: yb.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: Zy,
            entryPoint: "v"
          },
          fragment: {
            module: Zy,
            entryPoint: "f",
            targets: [{
              format: null !== (fy = bb._colorFormat) && void 0 !== fy ? fy : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: bb._depthStencilFormat ? {
            format: bb._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: bb._sampleCount
          }
        }), Wy.pipelines.set(Uy, hy)
      }
      return hy
    }

    function cW(yb, bb, Wy) {
      const Uy = bb.eye,
        hy = bb.viewMatrix;
      yb[0] = Uy[0] + hy[2] * Wy, yb[1] = Uy[1] + hy[6] * Wy, yb[2] = Uy[2] + hy[10] * Wy
    }
    var Pb = Wy(36611),
      ob = Wy(40066),
      Bb = Wy(35800);
    const Kb = Math.PI,
      eb = Kb / 1.95,
      qW = [5e-4 / 94, 125e-7, 5e-4 / 18],
      sb = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((yb => {
        let [bb, Wy] = yb;
        return .434 * Kb * Math.pow(2 * Kb / bb, 2) * Wy
      }));

    function Sb(yb, bb, Wy) {
      const {
        up: Uy,
        mieDirectionalG: hy
      } = yb, fy = 1 - mW(1 - Math.exp(bb[1] / 45e4), 0, 1), Zy = yb.rayleigh - (1 - fy), cb = Math.hypot(bb[0], bb[1], bb[2]), Py = cb > 0 ? 1 / cb : 0, oy = Wy.sunDir;
      for (let qb = 0; qb < 3; qb++) oy[qb] = bb[qb] * Py;
      const By = oy[0] * Uy[0] + oy[1] * Uy[1] + oy[2] * Uy[2],
        Ky = 1e3 * Math.max(0, 1 - Math.exp(-(eb - Math.acos(mW(By, -1, 1))) / 1.5));
      Wy.sunE = Ky;
      const ey = .2 * yb.turbidity * 1e-17 * yb.mieCoefficient;
      for (let qb = 0; qb < 3; qb++) {
        const yb = qW[qb] * Zy,
          bb = sb[qb] * ey,
          Uy = Ky / (yb + bb);
        Wy.inScatterR[qb] = yb * Uy, Wy.inScatterM[qb] = bb * Uy, Wy.extinctionBeta[qb] = 8400 * yb + 1250 * bb
      }
      return Wy.sunsetMix = mW(Math.pow(1 - By, 5), 0, 1), Wy.sunDiscE = 19e3 * Ky, Wy.mieScale = (1 - hy * hy) / (4 * Kb), Wy.mieBase = 1 + hy * hy, Wy.mieSlope = 2 * hy, Wy
    }
    const Eb = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const lb = 1 / function(yb) {
      const {
        A: bb,
        B: Wy,
        C: Uy,
        D: hy,
        E: fy,
        F: Zy
      } = Eb;
      return (yb * (bb * yb + Uy * Wy) + hy * fy) / (yb * (bb * yb + Wy) + hy * Zy) - fy / Zy
    }(1e3);

    function mW(yb, bb, Wy) {
      return Math.min(Math.max(yb, bb), Wy)
    }
    const Cb = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Tb(yb, bb) {
      const Wy = new Map(bb),
        Uy = [],
        hy = [],
        fy = () => 0 === hy.length || hy[hy.length - 1].active;
      let Zy = null;
      const cb = () => {
        const yb = [...Wy].filter((yb => {
            let [, bb] = yb;
            return !0 !== bb
          })),
          bb = yb.map((yb => {
            let [bb] = yb;
            return bb
          })).join("|");
        Zy = yb.length ? new RegExp(`\\b(${bb})\\b`, "g") : null
      };
      cb();
      for (const Py of yb.split("\n")) {
        const yb = Cb.exec(Py);
        if (!yb) {
          fy() && Uy.push(Zy ? Vb(Py, Zy, Wy) : Py);
          continue
        }
        const bb = yb[1],
          oy = yb[2].trim();
        if ("ifdef" === bb || "ifndef" === bb || "if" === bb) {
          const yb = fy(),
            Uy = "if" === bb ? Jb(oy, Wy) : Wy.has(oy) === ("ifdef" === bb);
          hy.push({
            active: yb && Uy,
            parentActive: yb,
            taken: Uy
          })
        } else if ("elif" === bb || "else" === bb) {
          const yb = hy[hy.length - 1];
          if (!yb) throw new Error(`#${bb} without #if`);
          const Uy = !yb.taken && ("else" === bb || Jb(oy, Wy));
          yb.active = yb.parentActive && Uy, yb.taken = yb.taken || Uy
        } else if ("endif" === bb) {
          if (!hy.pop()) throw new Error("#endif without #if")
        } else if (fy()) {
          const [yb, ...Uy] = oy.split(/\s+/);
          "undef" === bb ? Wy.delete(yb) : Wy.set(yb, !Uy.length || Uy.join(" ")), cb()
        }
      }
      if (hy.length) throw new Error("Unterminated #if");
      return Uy.join("\n")
    }

    function Vb(yb, bb, Wy) {
      return yb.replace(bb, (yb => {
        const bb = Wy.get(yb);
        return "string" === typeof bb ? bb : yb
      }))
    }

    function Jb(yb, bb) {
      var Wy;
      const Uy = null !== (Wy = yb.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Wy ? Wy : [];
      let hy = 0;
      const fy = () => Uy[hy],
        Zy = () => Uy[hy++],
        cb = yb => {
          const Wy = /^\d/.test(yb) ? yb : bb.get(yb);
          return "string" === typeof Wy ? parseInt(Wy) : Number.NaN
        },
        Py = () => {
          const yb = Zy();
          if ("!" === yb) return !Py();
          if ("(" === yb) {
            const yb = By();
            return Zy(), yb
          }
          if ("defined" === yb) {
            const yb = "(" === fy();
            yb && Zy();
            const Wy = Zy();
            return yb && Zy(), bb.has(Wy)
          }
          const Wy = fy();
          if ("==" === Wy || "!=" === Wy || ">" === Wy || "<" === Wy || ">=" === Wy || "<=" === Wy) {
            Zy();
            const bb = cb(yb),
              Uy = cb(Zy());
            if (Number.isNaN(bb) || Number.isNaN(Uy)) return !1;
            switch (Wy) {
              case "==":
                return bb === Uy;
              case "!=":
                return bb !== Uy;
              case ">":
                return bb > Uy;
              case "<":
                return bb < Uy;
              case ">=":
                return bb >= Uy;
              default:
                return bb <= Uy
            }
          }
          return bb.has(yb)
        },
        oy = () => {
          let yb = Py();
          for (;
            "&&" === fy();) {
            Zy();
            const bb = Py();
            yb = yb && bb
          }
          return yb
        },
        By = () => {
          let yb = oy();
          for (;
            "||" === fy();) {
            Zy();
            const bb = oy();
            yb = yb || bb
          }
          return yb
        },
        Ky = By();
      if (hy !== Uy.length) throw new Error(`Cannot evaluate #if ${yb}`);
      return Ky
    }
    var gW = Wy(35797),
      Gb = Wy(36102),
      Ob = Wy(36107),
      Rb = Wy(39363),
      vW = Wy(37422);
    const iW = 32,
      Mb = [10, 3, 10],
      Yb = [21, 7, 21],
      Xb = Yb[0] * Yb[1] * Yb[2],
      nb = 0,
      ub = 1,
      rW = 2,
      Hb = 3,
      aW = 64,
      Fb = 512,
      pb = 4 * Xb,
      Lb = 1536,
      Qb = pb + Xb * Lb,
      jW = 1073741824,
      Db = Qb + 1;

    function tW(yb, bb) {
      const Wy = yb % bb;
      return Wy < 0 ? Wy + bb : Wy
    }

    function wb(yb, bb, Wy) {
      return Uy = tW(yb, Yb[0]), hy = tW(bb, Yb[1]), fy = tW(Wy, Yb[2]), Uy + Yb[0] * (hy + Yb[1] * fy);
      var Uy, hy, fy
    }

    function kW(yb, bb, Wy) {
      return yb + 8 * (bb + 8 * Wy)
    }

    function Nb(yb, bb, Wy) {
      return yb + 4 * (bb + 4 * Wy)
    }
    const zW = 65535,
      Ib = 0,
      xW = 1,
      Ab = 2,
      db = 3;

    function yU(yb) {
      return Math.ceil(yb * yb / 32)
    }
    const bU = 8192,
      WW = 1 << 18,
      UW = 65536,
      hW = 294912,
      fW = 128,
      ZW = 4096,
      cU = 16,
      PW = 16385,
      oW = 81921,
      BW = 147457,
      KW = 4194304;
    const eW = [0, 0, 0],
      qU = [0, 0, 0];

    function sW(yb, bb, Wy, Uy) {
      ! function(yb, bb, Wy) {
        const [Uy, hy, fy] = [yb[0], yb[1], yb[2]];
        let Zy, cb, Py;
        Math.abs(hy) < .99 ? (Zy = fy, cb = 0, Py = -Uy) : (Zy = -hy, cb = Uy, Py = 0);
        const oy = Math.hypot(Zy, cb, Py);
        bb[0] = Zy / oy, bb[1] = cb / oy, bb[2] = Py / oy, Wy[0] = hy * bb[2] - fy * bb[1], Wy[1] = fy * bb[0] - Uy * bb[2], Wy[2] = Uy * bb[1] - hy * bb[0]
      }(Uy, eW, qU);
      const hy = 1 / 32;
      for (const [fy, Zy] of [
          [0, eW],
          [4, qU]
        ]) {
        for (let Wy = 0; Wy < 3; Wy++) yb[bb + fy + Wy] = Zy[Wy] * hy;
        yb[bb + fy + 3] = -(Zy[0] * Wy[0] + Zy[1] * Wy[1] + Zy[2] * Wy[2]) * hy
      }
    }
    class SW {
      constructor() {
        this.words = new Uint32Array(BW), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      vU(yb, bb) {
        this.parts = 0, this.refs = 0, this.view = yb, this.viewAt = bb;
        const Wy = yb[bb + 1] * yb[bb + 6] - yb[bb + 2] * yb[bb + 5],
          Uy = yb[bb + 2] * yb[bb + 4] - yb[bb] * yb[bb + 6],
          hy = yb[bb] * yb[bb + 5] - yb[bb + 1] * yb[bb + 4],
          fy = Math.hypot(Wy, Uy, hy) || 1;
        this.light[0] = Wy / fy, this.light[1] = Uy / fy, this.light[2] = hy / fy
      }
      add(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= ZW || ! function(yb, bb, Wy) {
            const Uy = yb[bb],
              hy = yb[bb + 1],
              fy = yb[bb + 2],
              Zy = yb[bb + 3],
              cb = yb[bb + 4],
              Py = yb[bb + 5],
              oy = yb[bb + 6],
              By = yb[bb + 7],
              Ky = yb[bb + 8],
              ey = yb[bb + 9],
              qb = yb[bb + 10],
              sy = yb[bb + 11],
              Sy = yb[bb + 12],
              Ey = yb[bb + 13],
              ly = yb[bb + 14],
              mb = yb[bb + 15],
              Cy = Uy * Py - hy * cb,
              Ty = Uy * oy - fy * cb,
              Vy = Uy * By - Zy * cb,
              Jy = hy * oy - fy * Py,
              gb = hy * By - Zy * Py,
              Gy = fy * By - Zy * oy,
              Oy = Ky * Ey - ey * Sy,
              Ry = Ky * ly - qb * Sy,
              vb = Ky * mb - sy * Sy,
              ib = ey * ly - qb * Ey,
              My = ey * mb - sy * Ey,
              Yy = qb * mb - sy * ly,
              Xy = Cy * Yy - Ty * My + Vy * ib + Jy * vb - gb * Ry + Gy * Oy;
            if (!(Math.abs(Xy) > 1e-12)) return !1;
            const ny = 1 / Xy;
            return Wy[0] = (Py * Yy - oy * My + By * ib) * ny, Wy[1] = (fy * My - hy * Yy - Zy * ib) * ny, Wy[2] = (Ey * Gy - ly * gb + mb * Jy) * ny, Wy[3] = (qb * gb - ey * Gy - sy * Jy) * ny, Wy[4] = (oy * vb - cb * Yy - By * Ry) * ny, Wy[5] = (Uy * Yy - fy * vb + Zy * Ry) * ny, Wy[6] = (ly * Vy - Sy * Gy - mb * Ty) * ny, Wy[7] = (Ky * Gy - qb * Vy + sy * Ty) * ny, Wy[8] = (cb * My - Py * vb + By * Oy) * ny, Wy[9] = (hy * vb - Uy * My - Zy * Oy) * ny, Wy[10] = (Sy * gb - Ey * Vy + mb * Cy) * ny, Wy[11] = (ey * Vy - Ky * gb - sy * Cy) * ny, Wy[12] = (Py * Ry - cb * ib - oy * Oy) * ny, Wy[13] = (Uy * ib - hy * Ry + fy * Oy) * ny, Wy[14] = (Ey * Ty - Sy * Jy - ly * Cy) * ny, Wy[15] = (Ky * Jy - ey * Ty + qb * Cy) * ny, !0
          }(bb, Wy, this.inverse)) return;
        const {
          view: Uy,
          viewAt: hy
        } = this, fy = Wy;
        let Zy = 1 / 0,
          cb = 1 / 0,
          Py = -1 / 0,
          oy = -1 / 0,
          By = -1 / 0;
        const [Ky, ey, qb] = this.light;
        for (let Vy = 0; Vy < 8; Vy++) {
          const Wy = 1 & Vy ? yb.hi[0] : yb.lo[0],
            sy = 2 & Vy ? yb.hi[1] : yb.lo[1],
            Sy = 4 & Vy ? yb.hi[2] : yb.lo[2],
            Ey = Wy * bb[fy] + sy * bb[fy + 4] + Sy * bb[fy + 8] + bb[fy + 12],
            ly = Wy * bb[fy + 1] + sy * bb[fy + 5] + Sy * bb[fy + 9] + bb[fy + 13],
            mb = Wy * bb[fy + 2] + sy * bb[fy + 6] + Sy * bb[fy + 10] + bb[fy + 14],
            Cy = Uy[hy] * Ey + Uy[hy + 1] * ly + Uy[hy + 2] * mb + Uy[hy + 3],
            Ty = Uy[hy + 4] * Ey + Uy[hy + 5] * ly + Uy[hy + 6] * mb + Uy[hy + 7];
          Zy = Math.min(Zy, Cy), cb = Math.min(cb, Ty), Py = Math.max(Py, Cy), oy = Math.max(oy, Ty), By = Math.max(By, Ky * Ey + ey * ly + qb * mb)
        }
        if (Py < -1 || oy < -1 || Zy >= 1 || cb >= 1) return;
        const sy = this.parts++,
          Sy = this.rects;
        Sy[4 * sy] = EW(Zy), Sy[4 * sy + 1] = EW(cb), Sy[4 * sy + 2] = EW(Py), Sy[4 * sy + 3] = EW(oy);
        const Ey = this.inverse,
          {
            cell: ly,
            dims: mb,
            lo: Cy
          } = yb,
          Ty = oW + sy * cU;
        for (let Vy = 0; Vy < 3; Vy++) this.floats[Ty + 4 * Vy] = Ey[Vy] / ly, this.floats[Ty + 4 * Vy + 1] = Ey[4 + Vy] / ly, this.floats[Ty + 4 * Vy + 2] = Ey[8 + Vy] / ly, this.floats[Ty + 4 * Vy + 3] = (Ey[12 + Vy] - Cy[Vy]) / ly;
        this.words[Ty + 12] = yb.at, this.floats[Ty + 13] = By + .001 * (1 + Math.abs(By)), this.words[Ty + 14] = mb[0] | mb[1] << 8 | mb[2] << 16
      }
      finish() {
        const yb = fW,
          {
            counts: bb,
            rects: Wy,
            words: Uy
          } = this;
        bb.fill(0);
        let hy = 0,
          fy = 0;
        for (; fy < this.parts; fy++) {
          const Uy = 4 * fy,
            Zy = (Wy[Uy + 2] - Wy[Uy] + 1) * (Wy[Uy + 3] - Wy[Uy + 1] + 1);
          if (hy + Zy > 65536) break;
          hy += Zy;
          for (let hy = Wy[Uy + 1]; hy <= Wy[Uy + 3]; hy++)
            for (let fy = Wy[Uy]; fy <= Wy[Uy + 2]; fy++) bb[hy * yb + fy]++
        }
        let Zy = 0;
        for (let Py = 0; Py < 16384; Py++) Uy[Py] = Zy, Zy += bb[Py], bb[Py] = Uy[Py];
        Uy[16384] = Zy;
        for (let Py = 0; Py < fy; Py++) {
          const hy = 4 * Py;
          for (let fy = Wy[hy + 1]; fy <= Wy[hy + 3]; fy++)
            for (let Zy = Wy[hy]; Zy <= Wy[hy + 2]; Zy++) Uy[PW + bb[fy * yb + Zy]++] = Py
        }
        const cb = this.floats;
        for (let Py = 0; Py < 16384; Py++) {
          const yb = PW + Uy[Py],
            bb = yb + Math.min(Uy[Py + 1] - Uy[Py], 64);
          for (let Wy = yb + 1; Wy < bb; Wy++) {
            const bb = Uy[Wy],
              hy = cb[81934 + bb * cU];
            let fy = Wy - 1;
            for (; fy >= yb && cb[81934 + Uy[fy] * cU] < hy; fy--) Uy[fy + 1] = Uy[fy];
            Uy[fy + 1] = bb
          }
        }
        this.refs = hy
      }
    }

    function EW(yb) {
      return Math.min(127, Math.max(0, Math.floor((.5 * yb + .5) * fW)))
    }

    function lW(yb, bb, Wy, Uy, hy) {
      for (let fy = 0; fy < 4; fy++)
        for (let Zy = 0; Zy < 4; Zy++) hy[4 * fy + Zy] = yb[bb + 4 * fy] * Wy[Uy + Zy] + yb[bb + 4 * fy + 1] * Wy[Uy + 4 + Zy] + yb[bb + 4 * fy + 2] * Wy[Uy + 8 + Zy] + yb[bb + 4 * fy + 3] * Wy[Uy + 12 + Zy]
    }

    function mU(yb, bb, Wy, Uy, hy) {
      const fy = yb[0] - bb,
        Zy = yb[1] - Wy,
        cb = yb[2] - Uy,
        Py = yb[3] - bb,
        oy = yb[4] - Wy,
        By = yb[5] - Uy,
        Ky = yb[6] - bb,
        ey = yb[7] - Wy,
        qb = yb[8] - Uy;
      if (Math.min(fy, Py, Ky) > hy || Math.max(fy, Py, Ky) < -hy) return !1;
      if (Math.min(Zy, oy, ey) > hy || Math.max(Zy, oy, ey) < -hy) return !1;
      if (Math.min(cb, By, qb) > hy || Math.max(cb, By, qb) < -hy) return !1;
      const sy = Py - fy,
        Sy = oy - Zy,
        Ey = By - cb,
        ly = Ky - Py,
        mb = ey - oy,
        Cy = qb - By,
        Ty = Sy * Cy - Ey * mb,
        Vy = Ey * ly - sy * Cy,
        Jy = sy * mb - Sy * ly;
      if (Math.abs(Ty * fy + Vy * Zy + Jy * cb) > hy * (Math.abs(Ty) + Math.abs(Vy) + Math.abs(Jy))) return !1;
      const gb = [sy, Sy, Ey, ly, mb, Cy, fy - Ky, Zy - ey, cb - qb];
      for (let Gy = 0; Gy < 3; Gy++) {
        const yb = gb[3 * Gy],
          bb = gb[3 * Gy + 1],
          Wy = gb[3 * Gy + 2];
        for (let Uy = 0; Uy < 3; Uy++) {
          const sy = 0 === Uy ? 0 : 1 === Uy ? Wy : -bb,
            Sy = 0 === Uy ? -Wy : 1 === Uy ? 0 : yb,
            Ey = 0 === Uy ? bb : 1 === Uy ? -yb : 0,
            ly = sy * fy + Sy * Zy + Ey * cb,
            mb = sy * Py + Sy * oy + Ey * By,
            Cy = sy * Ky + Sy * ey + Ey * qb,
            Ty = hy * (Math.abs(sy) + Math.abs(Sy) + Math.abs(Ey));
          if (Math.min(ly, mb, Cy) > Ty || Math.max(ly, mb, Cy) < -Ty) return !1
        }
      }
      return !0
    }
    const CW = new Float32Array(1);
    new Uint32Array(CW.buffer);
    var TW = Wy(37431);

    function VW(yb) {
      const [bb, Wy, Uy] = TW.l;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${yb.group}) @binding(${yb.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${bb-1}, ${Wy-1}, ${Uy-1});\n}\n`
    }

    function JW(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [hy, fy, Zy] = Yb, [cb, Py, oy] = Mb, By = Math.log2(iW), Ky = Uy ? "var<private> bloxdSpCrossed: bool;\n" : "", ey = Uy ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${yb.group}) @binding(${yb.pb}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${yb.group}) @binding(${yb.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Wy?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Ky}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${xW}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Ab}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Wy?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${db}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${hy}, ${fy}, ${Zy});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${hy} * (s.y + ${fy} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${cb}, ${Py}, ${oy}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${By}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${Hb}u) {\n\t\treturn named && state == ${rW}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${pb}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Qb}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${bb?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${bb?`\t\tif (exits && step > 0 && step % ${OW} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${By}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${nb}u || kind == ${ub}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${rW}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${pb}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${ey}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const gU = {
      group: 0,
      uniform: 0,
      pb: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function GW() {
      const yb = gU;
      return `${VW(yb)}${JW(yb,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${TW.d}>,\n}\n@group(${yb.group}) @binding(${yb.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${yb.group}) @binding(${yb.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${TW.h})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${TW.d}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${TW.e}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const OW = 2;
    const RW = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function vU(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Uy = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${bb.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        hy = "trace" === Wy || "lit" === Wy,
        fy = "maskEdge" === Wy ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        Zy = hy ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${bb.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${bb.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Wy?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${fy};\n`;
      return `${Uy}${yb.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${hy?function(){const[yb,bb,Wy]=TW.l;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${yb}.0, ${bb}.0, ${Wy}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${Zy}}\n`:""}${yb.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${bb.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${bb.renderOffset});\n}\n`:""}`
    }
    const iU = "bloxdSpOwnTexture";

    function MW(yb) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${yb.texture}) - 1u)))`
    }
    const YW = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${Pb.f.map((yb=>{let[bb,Wy]=yb;return`\tbloxdSpOut.${bb} = (bloxdSpWord & ${Wy}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function XW(yb) {
      return `bloxdSpFlags(${yb})`
    }
    const nW = `${Rb.n}.eyePosition`;

    function uW(yb, bb, Wy, Uy, hy) {
      const fy = yb.indexOf(bb);
      if (fy < 0 || yb.indexOf(bb, fy + 1) >= 0) throw new Error(`Lite's ${hy} program changed at the shader pack ${Uy} hook: ${fy<0?"no":"more than one"} anchor (lite/${hy}ShaderPack.ts)`);
      return yb.slice(0, fy) + Wy + yb.slice(fy + bb.length)
    }

    function rU(yb) {
      return yb.sunShadow || yb.airShadow
    }

    function HW(yb, bb) {
      return bb && rU(yb)
    }
    const aU = {
      group: Rb.h,
      ...Rb.s
    };

    function FW(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!rU(yb)) return "";
      if (bb) {
        const bb = aU,
          hy = "trace" === Wy || "lit" === Wy;
        let fy = "";
        yb.sunShadow && (fy = hy ? `${JW(bb,!0,"lit"===Wy)}${Uy=bb,`@group(${Uy.group}) @binding(${Uy.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Uy.group}) @binding(${Uy.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(yb, bb, Wy) {
          const Uy = `@group(${yb}) @binding(${bb}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Wy ? `${Uy}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${RW}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((yb=>`\t{\n\t\tlet o = vec2i(${yb});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Uy
        }(bb.group, Rb.u, "maskEdge" === Wy));
        const Zy = {
          shadowDirection: `${Rb.n}.shadowDirection`,
          renderOffset: `${Rb.n}.renderOffset`,
          eyePosition: `${Rb.n}.eyePosition`
        };
        return `${VW(bb)}${fy}${function(yb){const[bb,Wy,Uy]=TW.l;return`@group(${yb.group}) @binding(${yb.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${yb.group}) @binding(${yb.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${bb}.0, ${Wy}.0, ${Uy}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(bb)}${vU(yb,Zy,Wy)}`
      }
      var Uy;
      return `${yb.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${yb.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function pW(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!bb) return "";
      const fy = (Zy = "fragmentInputs.vPositionW", cb = yb.sunShadow ? {
        normal: Wy,
        flags: Uy
      } : null, `\n\tbloxdSpShadowPosition = ${Zy};\n${cb?`\tbloxdSpShadowNormal = normalize(${cb.normal});\n\tbloxdSpShadowEmissive = (${cb.flags} & ${Pb.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${cb.flags} & ${Pb.i}u) != 0u;\n`:""}`);
      var Zy, cb;
      return yb.sunShadow && ("mask" === hy || "maskEdge" === hy) ? `${fy}${Py="fragmentInputs.position",oy="maskEdge"===hy,`\n\tbloxdSpShadowPixel = vec2i(${Py}.xy);\n${oy?`\tbloxdSpShadowZ = ${Py}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Py}.z), dpdy(${Py}.z));\n`:""}`}` : fy;
      var Py, oy
    }
    const LW = "bloxdSpTextureRotation",
      QW = "bloxdSpTextureLayers",
      jU = `@group(${Rb.h}) @binding(${Rb.x}) var<storage, read> ${QW}: array<u32>;\n`;

    function DW(yb) {
      return `\tvertexOutputs.vPackTexture = ${QW}[min(u32(${yb}), arrayLength(&${QW}) - 1u)];\n`
    }

    function tU(yb) {
      return void 0 !== yb.uv
    }

    function wW(yb) {
      if (!yb) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (tU(yb)) return function(yb) {
        const {
          texture: bb,
          cells: Wy,
          layers: Uy
        } = yb, hy = `textureDimensions(${bb}, bloxdSpLevel)`, fy = Wy ? `max(vec2u(vec2f(${hy}) / ${Wy}), vec2u(1u))` : hy, Zy = Wy ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${fy};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Wy}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Wy}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${bb}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${hy} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${fy};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${bb}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let cb;
        if (Wy)
          if (1 === Uy.length) cb = `\treturn bloxdSpOwnTexel(${Uy[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const yb = Uy.length - 1;
            cb = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Uy[yb]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let bb = yb - 1; bb >= 0; bb--) cb += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Uy[bb]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            cb += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else cb = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${yb.id?`var<private> ${iU}: u32;\n`:""}${Zy}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${MW(yb)};\n\treturn ${fy};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${yb.id?iU:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${MW(yb)};\n${cb}}\n`
      }(yb);
      const bb = yb,
        Wy = yb => {
          const Wy = yb > 0 ? `bloxdSpLayer - ${bb.layers*yb}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${yb}, ${bb.sampler}, bloxdSpTurned, ${Wy}, round(bloxdSpMipLevel));`
        };
      let Uy = "";
      for (let fy = 0; fy < bb.count - 1; fy++) Uy += `\tif (bloxdSpLayer < ${bb.layers*(fy+1)}u) {\n\t\t${Wy(fy)}\n\t}\n`;
      const hy = bb.frame ? `${bb.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${LW}: u32;\n${jU}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${LW} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${LW} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${LW} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${hy}${Uy}\t${Wy(bb.count-1)}\n}\n`
    }

    function kU(yb, bb, Wy) {
      return !!yb.surface && "bloxdDefaultSurface" !== yb.surface && function(yb, bb) {
        return "liquid" === bb || !yb
      }(bb, Wy)
    }

    function NW(yb, bb) {
      return yb.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${bb.vertexLocalPosition}, ${XW(bb.vertexFlags)});\n\t\tlet bloxdSpVertex = ${yb.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function zU(yb, bb, Wy, Uy, hy) {
      if (!yb.surface) return "";
      const fy = (yb, bb) => `\n\tlet bloxdSpTexelUV = ${yb};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${bb}) - 1u));`;
      let Zy = "",
        cb = "0u, 0u, vec2f(0.0), 0.0";
      const Py = Uy && tU(Uy) ? Uy : null,
        oy = Uy && !tU(Uy) ? Uy : null;
      if (Py) {
        Zy = `${Py.id?`\n\tlet bloxdSpTexture = ${Py.id};\n\t${iU} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Py.uv};${fy(function(yb,bb){var Wy;return`${null!==(Wy=yb.levelUv)&&void 0!==Wy?Wy:yb.cells?`${bb} / ${yb.cells}`:bb} * vec2f(textureDimensions(${yb.texture}))`}(Py,"bloxdSpUv"),Py.texture)}`, cb = (Py.id ? `${iU}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else oy && (Zy = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${LW} = bloxdSpTexture >> 16u;${fy(`fragmentInputs.vMainUV1 * ${(0,gW.kb)(oy.width)}`,"textureAtlas0")}`, cb = `bloxdSpTexture & 0xffffu, ${LW}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const By = hy.overlayColour,
        Ky = By ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        ey = "bloxdDefaultSurface" !== yb.surface || By ? `\n\tbaseColor = vec4f(${Ky}, baseColor.a);` : "",
        qb = kU(yb, bb, Wy) ? `\n\t${hy.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${Zy}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${hy.alpha}, ${hy.enchantTier}, ${hy.enchantColour}, ${hy.enchantSpeed}, ${null!==By&&void 0!==By?By:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${hy.normal}, ${hy.localPosition}, ${XW(hy.flags)}, ${cb});\n\tlet bloxdSpSurface = ${yb.surface}(bloxdSpSurfaceIn);${ey}${qb}\n`
    }
    const IW = "bloxdSpLightIn";

    function xU(yb, bb, Wy, Uy) {
      if (!yb.light) return "";
      const hy = bb ? `${gW.l}.rgb, ${gW.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${gW.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: fy,
          diffuse: Zy,
          emissive: cb,
          ambient: Py,
          fogColour: oy,
          fogAlpha: By,
          normal: Ky
        } = Uy;
      return `\tvar ${IW} = BloxdLightIn(vec3f(0.0), ${Wy?fy:"0.0"}, ${Zy}, ${cb}, ${Py}, ${hy}, ${oy}, ${By}, fragmentInputs.vPositionW, ${Ky}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${IW}.litColour = bloxdLitColour(bloxdSpSurface, ${IW});\n`
    }

    function AW(yb) {
      return yb.light ? `\n\t{\n\t\tlet bloxdSpLight = ${yb.light}(bloxdSpSurface, ${IW});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const dW = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      yh = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      bh = "\treturn color;\n}",
      WU = {
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
    const UU = Object.freeze({});

    function hU(yb) {
      var bb;
      return !(null === (bb = (0, vW.g)(yb)) || void 0 === bb || !bb.sceneDepth)
    }

    function fU(yb) {
      const bb = (0, vW.g)(yb);
      return !!bb && kU(bb.hooks, bb.strict, bb.program)
    }

    function ZU(yb, bb, Wy, Uy) {
      return uW(yb, bb, Wy, Uy, "terrain")
    }

    function ch(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const fy = function(yb) {
          return (0, vW.c)(yb.packVariant, yb.liquid ? "liquid" : "terrain")
        }(yb),
        {
          hooks: Zy
        } = fy,
        cb = HW(fy, Uy),
        Py = "edge" === hy ? "maskEdge" : "plain" === hy ? "mask" : "trace",
        oy = NW(Zy, WU);
      oy && (bb = ZU(bb, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${oy}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const By = "atlas" === yb.texture ? {
          count: yb.atlasCount,
          layers: yb.atlasLayers,
          width: yb.Pfy,
          sampler: "atlasSampler",
          frame: yb.animated ? Wy : null
        } : null,
        Ky = `${fy.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${pW(fy,cb,WU.normal,WU.flags,Py)}${zU(Zy,fy.strict,fy.program,By,WU)}`;
      Ky && (bb = ZU(bb, dW, `${dW.slice(0,-1)}${Ky}`, "surface"));
      const ey = AW(Zy);
      return ey && (bb = ZU(bb, yh, `${xU(Zy,yb.lighting,yb.dirLightCount>0,WU)}${yh}`, "light input"), bb = ZU(bb, bh, `${ey.slice(1)}${bh}`, "light")), `${(0,Rb.D)()}${fy.sceneDepth?`@group(${Rb.h}) @binding(${Rb.p}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${nW};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${FW(fy,cb,Py)}${wW(By)}${YW}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${fy.code}${bb}`
    }
    const PU = Jy.b.WGSL;

    function oU(yb) {
      return void 0 !== yb.packVariant
    }
    const BU = {
        DBy: 0,
        tKy: 4,
        wBy: 8,
        kKy: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      KU = BU.aoLevels + 4,
      eU = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      qh = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      sU = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      SU = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      EU = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      lU = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      mh = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      CU = 0,
      TU = 3,
      VU = 4,
      JU = 5,
      gh = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${Gb.e}, ${Gb.e}, corner == 0u || corner == 3u);\n\tlet dv = select(-${Gb.e}, ${Gb.e}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      GU = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32((pair >> ((slot & 1u) * 16u)) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = ((${Ob.b}u >> dir) & 1u) == 1u;\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const OU = {
      Zb: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: yb => `animDataPerTex[${yb}]`
    };

    function RU(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OU,
        Uy = arguments.length > 3 ? arguments[3] : void 0;
      return `\n\tlet atlasIdxIn = ${yb};\n\tlet animTick = ${Wy.Zb};\n\tlet animTickStride = ${Wy.stride};\n\tlet numAnimTextures = ${Wy.count};\n\t${(0,gb.f)(Jy.b.WGSL,Wy.perTexture)}\n\t${bb}animLayer;\n\t${Uy?`${Uy}animNext;`:""}\n`
    }

    function vh(yb) {
      const bb = yb => `textureSample(diffuseSampler, diffuseSamplerSampler, ${yb})`;
      return yb ? `baseColor = mix(${bb("fragmentInputs.vMainUV1")}, ${bb("fragmentInputs.vMainUV1 + vec2f(0.0, fragmentInputs.vAnimStripNext.x)")}, fragmentInputs.vAnimStripNext.y);` : `baseColor = ${bb("fragmentInputs.vMainUV1")};`
    }

    function ih(yb) {
      const bb = yb.atlasCount > 1 || yb.animated,
        Wy = (Wy, Uy) => {
          const hy = Wy > 0 ? `${Uy} - ${yb.atlasLayers.toFixed(1)} * ${Wy.toFixed(1)}` : Uy;
          return `${bb?"textureSampleLevel":"textureSample"}(textureAtlas${Wy}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${hy}))${bb?", atlasLod":""})`
        },
        Uy = function(bb, Uy) {
          let hy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb.atlasCount;
          if (1 === hy) return `${bb} = ${Wy(0,Uy)};`;
          let fy = "";
          for (let Zy = 0; Zy < hy; Zy++) {
            const hy = yb.atlasLayers * (Zy + 1) - .5;
            fy += `${Zy>0?" else ":"\n\t"}if (${Uy} < ${(0,gW.kb)(hy)}) {\n\t\t${bb} = ${Wy(Zy,Uy)};\n\t}`
          }
          return fy
        },
        hy = bb ? `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,gW.kb)(yb.Pfy)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n` : "",
        fy = yb.animated ? `\n\tif (fragmentInputs.texAtlasNext.y > 0.0) {\n\t\tvar atlasNextColor: vec4f;\n\t\t${Uy("atlasNextColor","fragmentInputs.texAtlasNext.x",yb.nextFrameAtlases)}\n\t\tbaseColor = mix(baseColor, atlasNextColor, fragmentInputs.texAtlasNext.y);\n\t}` : "";
      return `${hy}${Uy("baseColor","fragmentInputs.texAtlasIndex")}${fy}`
    }

    function MU(yb) {
      return `terrain-${yb.texture}${"atlas"===yb.texture?yb.atlasCount:""}${yb.animated?"-anim":""}${void 0!==yb.nextFrameAtlases?`n${yb.nextFrameAtlases}`:""}${yb.alphaTest?"-test":""}${yb.lighting?"-lit":""}-dir${yb.dirLightCount}${yb.packed?"-packed":""}${oU(yb)?`-sp${yb.packVariant}`:""}${yb.liquid?"-liquid":""}${yb.resting?"-rest":""}`
    }

    function YU(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Uy = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Wy = "none" !== yb.texture,
          Uy = "atlas" === yb.texture,
          hy = yb.dirLightCount > 0,
          fy = oU(yb);
        if (yb.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${yb.dirLightCount}`);
        let Zy = 1,
          cb = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Uy) {
          yb.animated && (cb += `@group(2) @binding(${Zy++}) var<storage, read> animDataPerTex: array<f32>;\n`), cb += `@group(2) @binding(${Zy++}) var atlasSampler: sampler;\n`;
          for (let bb = 0; bb < yb.atlasCount; bb++) cb += `@group(2) @binding(${Zy++}) var textureAtlas${bb}: texture_2d_array<f32>;\n`
        } else "single" === yb.texture && (cb += `@group(2) @binding(${Zy++}) var diffuseSamplerSampler: sampler;\n`, cb += `@group(2) @binding(${Zy++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Py = function(yb) {
            const bb = mh,
              Wy = "none" !== yb.texture,
              Uy = "atlas" === yb.texture,
              hy = oU(yb);
            return yb.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Wy?"uv: vec2f,":""}\n\t${Uy?"texAtlasIndices: f32,":""}\n\t${yb.lighting?"aPackedLightLevels: f32,":""}\n\t${hy?"blockFlagWords: vec2u,":""}\n}\n${gh}\n${GU}\n${"single"===yb.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\tlet ao = (r2 >> (3u + 2u * slot)) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Wy?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===yb.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Uy?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${yb.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${hy?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${bb.position}) position: vec3f,\n\t@location(${bb.normal}) normal: vec4f,\n\t@location(${bb.color}) color: vec4f,\n\t${Wy?`@location(${bb.uv}) uv: vec2f,`:""}\n\t${yb.lighting?`@location(${bb.packedLight}) aPackedLightLevels: f32,`:""}\n\t${hy?`@location(${bb.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(yb),
          oy = `\n${SU}\n${qh}\n${sU}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${cb}\n${zb}\n${Py.declarations}\nstruct Varyings {\n\t${"none"===bb?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${yb.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${hy?"@location(5) vTerrainLambert: f32,":""}\n\t${Wy?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Uy?"@location(7) texAtlasIndex: f32,":""}\n\t${yb.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${fy?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${fy&&Uy?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n\t${Uy&&yb.animated?"@location(11) texAtlasNext: vec2f,":""}\n\t${"single"===yb.texture&&yb.animated?"@location(11) vAnimStripNext: vec2f,":""}\n}\n\n${yb.resting?"":(0,gW.t)(PU)}\n${lU}\n\n@vertex\nfn mainVertex(${Py.parameter}) -> Varyings {\n\t${Py.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${fy?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${Pb.c.placed}u;`:""}\n\t${fy&&Uy?DW("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${yb.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Wy?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Uy?function(yb){return yb?RU("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = ",OU,"vertexOutputs.texAtlasNext = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(yb.animated):""}\n\t${"single"===yb.texture&&yb.animated?"\n\tlet animFramePos = material.anim.x / abs(material.anim.z);\n\tlet frameTick = floor(animFramePos);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tlet animNextTexIndex = frameTick + 1.0 - material.anim.y * floor((frameTick + 1.0) / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n\tvertexOutputs.vAnimStripNext = vec2f((animNextTexIndex - animTexIndex) / material.anim.y, (animFramePos - frameTick) * step(0.0, material.anim.z));\n":""}\n\t${(0,gW.Z)(PU)}\n\t${(0,gW.K)(PU,yb.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${yb.resting?"":EU}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Uy?ih(yb):""}\n\t${"single"===yb.texture?vh(yb.animated):""}\n\t${Wy?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${yb.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${hy?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${Ny}));\n\t${oU(yb)?(0,gW.eb)(Jy.b.WGSL):(0,gW.Q)(PU)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          By = new Set;
        yb.lighting && By.add("BLOXD_LIGHTING");
        hy && By.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Tb(oy, new Map([...By].map((yb => [yb, !0]))))
      }(yb, Wy);
      if (!oU(yb)) return Uy;
      const hy = ch(yb, Uy, RU, bb, Wy);
      return "none" === Wy ? hy : `${hy}${function(yb){const bb="none"!==yb.texture&&yb.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${yb.resting?"":EU}\n\t${yb.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${bb&&"atlas"===yb.texture?ih(yb):""}\n\t${bb&&"single"===yb.texture?vh(yb.animated):""}\n\t${bb?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${Pb.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(yb)}`
    }
    const XU = new Map([
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

    function nU(yb, bb) {
      const Wy = new Map;
      let Uy = 0;
      const hy = [],
        fy = [],
        Zy = [];
      for (const oy of bb) {
        var cb, Py;
        const bb = null !== (cb = oy.type.trim().split(/\s+/).pop()) && void 0 !== cb ? cb : oy.type,
          By = XU.get(bb);
        if (!By) throw new Error(`Lite: no uniform layout for ${oy.name}: ${oy.type}`);
        const Ky = null !== (Py = oy.arraySize) && void 0 !== Py ? Py : 0,
          ey = Ky ? 4 : By.align;
        Uy = Math.ceil(Uy / ey) * ey;
        const qb = Ky ? 4 * Math.ceil(By.floats / 4) : By.floats;
        if (Wy.set(oy.name, {
            offset: Uy,
            floats: By.floats,
            arraySize: Ky,
            stride: qb
          }), Ky && By.floats <= 2) {
          const bb = `${yb}_${Zy.length}_strided`;
          fy.push(`struct ${bb} {\n\t@size(16) el: ${By.wgsl},\n}`), Zy.push(oy.name), hy.push(`\t@align(16) ${oy.name}: array<${bb}, ${Ky}>,`)
        } else Ky ? hy.push(`\t@align(16) ${oy.name}: array<${By.wgsl}, ${Ky}>,`) : hy.push(`\t${oy.name}: ${By.wgsl},`);
        Uy += Ky ? qb * Ky : By.floats
      }
      return {
        slots: Wy,
        floats: Math.max(4, 4 * Math.ceil(Uy / 4)),
        wgsl: `${fy.join("\n")}\nstruct ${yb} {\n${hy.join("\n")}\n}\n`,
        stridedArrays: Zy
      }
    }
    const uU = [{
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
      rh = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      HU = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function ah(yb, bb) {
      return `#if defined(${yb}) && ${yb}DIRECTUV == 0\nvarying v${bb}UV: vec2f;\n#endif`
    }

    function FU(yb, bb, Wy) {
      return `#if defined(${yb}) && ${yb}DIRECTUV == 0\nif (uniforms.v${bb}Infos.x==0.)\n{vertexOutputs.v${bb}UV= (uniforms.${Wy}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${bb}UV= (uniforms.${Wy}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function pU(yb, bb, Wy) {
      return `#ifdef ${yb}\n#if ${yb}DIRECTUV == 1\n#define v${bb}UV vMainUV1\n#elif ${yb}DIRECTUV == 2\n#define v${bb}UV vMainUV2\n#else\nvarying v${bb}UV: vec2f;\n#endif\nvar ${Wy}SamplerSampler: sampler;\nvar ${Wy}Sampler: texture_2d<f32>;\n#endif`
    }
    const LU = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      QU = 256,
      jh = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      DU = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      th = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      wU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      kh = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      NU = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      zh = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      IU = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${DU}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${ah("OPACITY","Opacity")}\n${ah("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${zh}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${th}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${FU("OPACITY","Opacity","opacity")}\n${FU("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${wU}\n#define CUSTOM_VERTEX_MAIN_END\n${kh}\n}\n`;
    const xh = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${pU("OPACITY","Opacity","opacity")}\n${pU("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${zh}\n${NU}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((yb,bb)=>function(yb){const bb=`
    frame.lights[LITE_LIGHT$ {
        yb
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      yb
    }\
    nvar diffuse$ {
      yb
    }: vec4f = $ {
      bb
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      yb
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      bb
    }.vLightData, diffuse$ {
      yb
    }.rgb, $ {
      bb
    }.vLightSpecular.rgb, diffuse$ {
      yb
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(bb))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, AU = /^([gimus]+)!/, dU = new Set;

    function yf(yb) {
      dU.has(yb) || (dU.add(yb), console.warn(`Lite: no place for plugin code at ${yb} in the standard shader: it is left out`))
    }

    function bf(yb, bb) {
      let Wy = yb;
      const Uy = new Map;
      for (const [fy, Zy] of bb) {
        var hy;
        Uy.set(fy, `${null!==(hy=Uy.get(fy))&&void 0!==hy?hy:""}${Zy}\n`)
      }
      for (const [fy, Zy] of Uy) {
        if (!fy.startsWith("!")) {
          const yb = `#define ${fy}`;
          if (!Wy.includes(yb)) {
            yf(fy);
            continue
          }
          Wy = Wy.replace(yb, (() => `\n${Zy}\n${yb}`));
          continue
        }
        let yb = fy.substring(1),
          bb = "g";
        if (yb.startsWith("!")) bb = "", yb = yb.substring(1);
        else {
          const Wy = AU.exec(yb);
          Wy && (bb = Wy[1], yb = yb.substring(bb.length + 1))
        }
        const Uy = new RegExp(yb, bb.includes("g") ? bb : `${bb}g`);
        let hy = Uy.exec(Wy);
        for (hy || yf(fy); hy;) {
          const yb = hy,
            bb = Zy.replace(/\$(\d+)/g, ((bb, Wy) => Number(Wy) < yb.length ? yb[Number(Wy)] : ""));
          Wy = Wy.substring(0, yb.index) + bb + Wy.substring(yb.index + yb[0].length), Uy.lastIndex = yb.index + bb.length, hy = Uy.exec(Wy)
        }
      }
      return Wy
    }
    const Wh = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      Uh = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      hh = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function fh(yb) {
      const bb = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Wy = yb.replace(Wh, ((yb, Wy, Uy, hy, fy, Zy) => ("attribute" === Wy ? bb.attributes.push({
        name: fy,
        type: Zy
      }) : void 0 === Wy ? bb.varyings.push({
        name: fy,
        type: Zy,
        interpolation: cf(Zy, Uy, hy)
      }) : bb.uniforms.push({
        name: fy,
        type: Zh(Zy)
      }), "")));
      return Wy = Wy.replace(Uh, ((yb, Wy) => (bb.samplers.add(Wy), ""))), Wy = Wy.replace(hh, ((yb, Wy, Uy) => (bb.textures.push({
        name: Wy,
        type: Uy
      }), ""))), bb.body = Wy, bb
    }

    function Zh(yb) {
      const bb = yb.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Wy = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(bb);
      if (!Wy) throw new Error(`Lite: unsupported uniform type ${yb}`);
      return Wy
    }

    function cf(yb, bb, Wy) {
      return void 0 === bb && void 0 === Wy ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(yb.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === bb ? "@interpolate(flat) " : `@interpolate(${null!==bb&&void 0!==bb?bb:"perspective"}, ${null!==Wy&&void 0!==Wy?Wy:"center"}) `
    }

    function Ph(yb) {
      return eh({
        defines: yb.defines,
        vertex: bf(IU, yb.vertexCode),
        fragment: bf(xh, yb.fragmentCode),
        members: [...uU, ...yb.defines.has("OPACITY") ? rh : [], ...yb.defines.has("EMISSIVE") ? HU : [], ...yb.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function oh(yb) {
      const bb = yb.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (bb === yb) throw new Error("Lite: fragment main has no return");
      return bb
    }
    const Bh = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${DU}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${th}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${wU}\n${kh}\n}\n`,
      Kh = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${NU}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function eh(yb) {
      const bb = yb.defines,
        Wy = fh(Tb(yb.vertex, bb)),
        Uy = fh(Tb(yb.fragment, bb)),
        hy = new Map;
      for (const Cy of [...Wy.varyings, ...Uy.varyings]) hy.has(Cy.name) || hy.set(Cy.name, Cy);
      const fy = [...hy.values()].map(((yb, bb) => `\t@location(${bb}) ${yb.interpolation}${yb.name}: ${yb.type},`)),
        Zy = [...yb.members];
      for (const Cy of [...Wy.uniforms, ...Uy.uniforms]) Zy.some((yb => yb.name === Cy.name)) || Zy.push(Cy);
      const cb = nU(yb.structName, Zy),
        Py = [],
        oy = [];
      let By = 1;
      const Ky = new Set;
      for (const Cy of [...Wy.textures, ...Uy.textures]) {
        if (Ky.has(Cy.name)) continue;
        Ky.add(Cy.name);
        const yb = `${Cy.name}Sampler`,
          bb = By++,
          Wy = By++,
          Uy = Cy.type.startsWith("texture_2d_array") ? "2d-array" : Cy.type.startsWith("texture_cube") ? "cube" : "2d";
        Py.push({
          name: Cy.name,
          binding: bb,
          samplerBinding: Wy,
          dimension: Uy
        }), oy.push(`@group(2) @binding(${bb}) var ${Cy.name}: ${Cy.type};`), oy.push(`@group(2) @binding(${Wy}) var ${yb}: sampler;`)
      }
      for (const Cy of [...Wy.samplers, ...Uy.samplers])
        if (!Ky.has(Cy.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Cy} has no texture`);
      const ey = [SU, jh, cb.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${yb.structName};`, ...oy].join("\n"),
        qb = Wy.attributes,
        sy = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Wy.attributes.map(((yb, bb) => `\t@location(${bb}) ${yb.name}: ${yb.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Sy = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...fy, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Ey = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Uy.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...fy, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", zb, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${Ny}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        ly = yb => {
          for (const bb of cb.stridedArrays) yb = yb.replace(new RegExp(`\\b${bb}\\s*\\[(.*?)\\]`, "g"), `${bb}[$1].el`);
          return yb
        };
      return {
        vertex: `${ey}\n${sy}\n${Sy}\n${ly(Wy.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${ey}\n${Ey}\n${oh((mb=ly(Uy.body),mb.includes("fragmentInputs.position")?mb.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):mb))}`,
        attributes: qb,
        material: cb,
        textures: Py
      };
      var mb
    }
    const qf = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      sh = yb => ({
        name: yb,
        type: "vec3"
      }),
      Sh = yb => ({
        name: yb,
        type: "float"
      }),
      Eh = nU("EarthSkyUniforms", [sh("viewFrom"), Sh("exposureScale"), sh("zenithOffset"), Sh("fogOn"), sh("up"), Sh("ditherOn"), sh("sun"), Sh("turbidity"), sh("tint"), Sh("rayleigh"), sh("sunDir"), Sh("mieStrength"), sh("inScatterR"), Sh("mieFocus"), sh("inScatterM"), Sh("sunE"), sh("extinctionBeta"), Sh("sunsetMix"), Sh("mieScale"), Sh("mieBase"), Sh("mieSlope"), Sh("sunDiscE"), Sh("exposure")]),
      lh = `${SU}\n${jh}\n${Eh.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      mf = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${qf.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Ch = `\n${zb}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Eb).map((yb=>{let[bb,Wy]=yb;return`const TONE_${bb}: f32 = ${Wy};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${lb};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${Ny}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Th = Wy(35856);
    const Vh = new Th.dU,
      Jh = new Th.dU,
      gf = new Th.Quaternion,
      Gh = new Float64Array(3),
      Oh = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      Rh = new Float64Array(16);

    function vf(yb, bb, Wy) {
      const Uy = Wy.worldMatrix;
      var hy;
      yb.updateFloat3("viewFrom", Uy[12], Uy[13], Uy[14]), yb.updateFloatsFrom("zenithOffset", bb.cameraOffset, 0, 3), yb.updateFloatsFrom("up", bb.up, 0, 3), bb.luminance > 0 && (yb.updateFloat("exposure", bb.luminance), yb.updateFloat("exposureScale", (hy = bb.luminance, Math.log2(2 / Math.pow(hy, 4))))), yb.updateFloat("turbidity", bb.turbidity), yb.updateFloat("rayleigh", bb.rayleigh), yb.updateFloat("mieStrength", bb.mieCoefficient), yb.updateFloat("mieFocus", bb.mieDirectionalG), yb.updateFloatsFrom("tint", bb.tint, 0, 3), yb.updateFloat("fogOn", bb.fog && Wy.fogEnabled && 0 !== Wy.fogMode ? 1 : 0), yb.updateFloat("ditherOn", bb.dithering ? 1 : 0);
      const fy = bb.sunPosition;
      if (Vh.set(fy[0], fy[1], fy[2]), !bb.useSunPosition) {
        const yb = Math.PI * (bb.inclination - .5),
          Wy = 2 * Math.PI * (bb.azimuth - .5);
        Vh.set(bb.distance * Math.cos(Wy) * Math.cos(yb), bb.distance * Math.sin(-yb), bb.distance * Math.sin(Wy) * Math.cos(yb)), Th.Quaternion.FromUnitVectorsToRef(Th.dU.UpReadOnly, Jh.set(bb.up[0], bb.up[1], bb.up[2]), gf), Vh.rotateByQuaternionToRef(gf, Vh)
      }
      yb.updateVector3("sun", Vh), Gh[0] = Vh.x, Gh[1] = Vh.y, Gh[2] = Vh.z;
      const Zy = Sb(bb, Gh, Oh);
      yb.updateFloatsFrom("sunDir", Zy.sunDir, 0, 3), yb.updateFloat("sunE", Zy.sunE), yb.updateFloatsFrom("inScatterR", Zy.inScatterR, 0, 3), yb.updateFloatsFrom("inScatterM", Zy.inScatterM, 0, 3), yb.updateFloatsFrom("extinctionBeta", Zy.extinctionBeta, 0, 3), yb.updateFloat("sunsetMix", Zy.sunsetMix), yb.updateFloat("sunDiscE", Zy.sunDiscE), yb.updateFloat("mieScale", Zy.mieScale), yb.updateFloat("mieBase", Zy.mieBase), yb.updateFloat("mieSlope", Zy.mieSlope)
    }

    function Mh(yb, bb) {
      const Wy = Rh;
      Wy[0] = bb.far, Wy[5] = bb.far, Wy[10] = bb.far, Wy[15] = 1;
      const Uy = yb.infiniteDistance;
      for (let hy = 0; hy < 3; hy++) Wy[12 + hy] = yb.position[hy] + (Uy ? bb.worldMatrix[12 + hy] : 0);
      return Rh
    }
    var Yh = Wy(37386);

    function Xh(yb) {
      return Math.max(4, 4 * Math.ceil(yb / 4))
    }

    function nh(yb, bb, Wy, Uy) {
      const hy = yb.createBuffer({
        label: Uy,
        size: Xh(bb.byteLength),
        usage: Wy,
        mappedAtCreation: !0
      });
      return new Uint8Array(hy.getMappedRange(), 0, bb.byteLength).set(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength)), hy.unmap(), hy
    }

    function uh(yb, bb) {
      return Math.floor(Math.log2(Math.max(yb, bb))) + 1
    }

    function rf(yb, bb, Wy, Uy, hy, fy) {
      const Zy = yb.createTexture({
          label: fy,
          size: {
            width: Wy,
            height: Uy,
            depthOrArrayLayers: hy
          },
          format: "rgba8unorm",
          mipLevelCount: uh(Wy, Uy),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        cb = (bb, Wy, Uy, fy) => {
          yb.queue.writeTexture({
            texture: Zy,
            mipLevel: Wy
          }, bb, {
            bytesPerRow: 4 * Uy,
            rowsPerImage: fy
          }, {
            width: Uy,
            height: fy,
            depthOrArrayLayers: hy
          })
        };
      cb(bb, 0, Wy, Uy);
      let Py = 1;
      for (const oy of function*(yb, bb, Wy, Uy) {
          let hy = yb,
            fy = bb,
            Zy = Wy;
          for (; fy > 1 || Zy > 1;) {
            const yb = Math.max(1, fy >> 1),
              bb = Math.max(1, Zy >> 1),
              Wy = new Uint8Array(yb * bb * Uy * 4),
              cb = 4 * fy;
            let Py = 0;
            for (let oy = 0; oy < Uy; oy++) {
              const Uy = oy * cb * Zy;
              for (let oy = 0; oy < bb; oy++) {
                const bb = Uy + Math.min(2 * oy, Zy - 1) * cb,
                  By = Uy + Math.min(2 * oy + 1, Zy - 1) * cb;
                for (let Uy = 0; Uy < yb; Uy++) {
                  const yb = 4 * Math.min(2 * Uy, fy - 1),
                    Zy = 4 * Math.min(2 * Uy + 1, fy - 1);
                  for (let Uy = 0; Uy < 4; Uy++) Wy[Py++] = hy[bb + yb + Uy] + hy[bb + Zy + Uy] + hy[By + yb + Uy] + hy[By + Zy + Uy] + 2 >> 2
                }
              }
            }
            yield {
              data: Wy,
              width: yb,
              height: bb
            }, hy = Wy, fy = yb, Zy = bb
          }
        }(bb, Wy, Uy, hy)) cb(oy.data, Py++, oy.width, oy.height);
      return Zy
    }
    const Hh = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function af(yb) {
      if (yb.startsWith("data:")) {
        const bb = yb.search(/[;,]/);
        return `data:${bb>5?yb.slice(5,bb):""} URL of ${yb.length} characters`
      }
      return yb.length > 80 ? `${yb.slice(0,80)}...` : yb
    }
    async function Fh(yb) {
      const bb = await fetch(yb);
      if (!bb.ok) throw new Error(`${af(yb)}: ${bb.status} ${bb.statusText}`);
      return createImageBitmap(await bb.blob(), Hh)
    }
    async function ph(yb) {
      const bb = await Fh(yb),
        Wy = new OffscreenCanvas(bb.width, bb.height),
        Uy = Wy.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Uy) throw new Error("No 2D context to decode an image");
      Uy.drawImage(bb, 0, 0);
      const {
        data: hy
      } = Uy.getImageData(0, 0, bb.width, bb.height);
      return bb.close(), {
        pixels: new Uint8Array(hy.buffer, hy.byteOffset, hy.byteLength),
        width: Wy.width,
        height: Wy.height
      }
    }
    const Lh = new WeakMap;

    function Qh(yb, bb, Wy, Uy) {
      var hy;
      const fy = null !== (hy = Lh.get(yb)) && void 0 !== hy ? hy : new Map;
      Lh.set(yb, fy);
      let Zy = fy.get(bb);
      return Zy || (Zy = (async hy => {
        const fy = null !== (hy = function(yb, bb) {
          const Wy = yb ? new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength) : null;
          return null !== Wy && void 0 !== Wy && Wy.byteLength && bb && Wy.byteLength % (bb * bb * 4) === 0 ? {
            pixels: Wy,
            layerWidth: bb,
            layers: Wy.byteLength / (bb * bb * 4)
          } : null
        }(Wy, Uy)) && void 0 !== hy ? hy : await async function(yb) {
          const {
            pixels: bb,
            width: Wy
          } = await ph(yb);
          return {
            pixels: bb,
            layerWidth: Wy,
            layers: bb.byteLength / (Wy * Wy * 4)
          }
        }(bb), {
          layerWidth: Zy,
          layers: cb
        } = fy;
        return {
          texture: rf(yb, fy.pixels, Zy, Zy, cb, `atlas-${bb}`),
          layerWidth: Zy,
          layers: cb
        }
      })(), fy.set(bb, Zy), Zy.catch((() => {
        fy.delete(bb)
      }))), Zy
    }
    const jf = new Map([
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
      Dh = new Map([
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

    function tf(yb) {
      for (const bb of (0, Yh.m)(yb))
        if (!Dh.has((0, Yh.i)(bb))) return !1;
      return !0
    }

    function wh(yb) {
      const bb = Dh.get(yb);
      if (!bb) return null;
      const [Wy, Uy, hy] = bb;
      return {
        srcFactor: jf.get(Wy),
        dstFactor: jf.get(Uy),
        operation: hy
      }
    }
    let kf = null;

    function Nh(yb) {
      kf = yb
    }

    function zf(yb, bb, Wy) {
      var Uy;
      null === (Uy = kf) || void 0 === Uy || Uy(yb, bb, Wy, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Ih {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(yb, bb, Wy, Uy, hy) {
        Wy !== this.pipeline && (yb.setPipeline(Wy), this.pipeline = Wy), yb.setBindGroup(1, Uy, [hy]);
        const fy = bb.material.bindGroup;
        fy !== this.materialGroup && (yb.setBindGroup(2, fy), this.materialGroup = fy);
        const Zy = bb.program.packGroup;
        Zy && Zy !== this.packGroup && (yb.setBindGroup(Rb.h, Zy), this.packGroup = Zy);
        const {
          vertexBuffers: cb,
          vertexOffsets: Py
        } = this;
        for (let oy = 0; oy < bb.vertexBuffers.length; oy++) cb[oy] === bb.vertexBuffers[oy] && Py[oy] === bb.vertexOffsets[oy] || (yb.setVertexBuffer(oy, bb.vertexBuffers[oy], bb.vertexOffsets[oy]), cb[oy] = bb.vertexBuffers[oy], Py[oy] = bb.vertexOffsets[oy]);
        bb.indexBuffer && bb.indexBuffer !== this.indexBuffer && (yb.setIndexBuffer(bb.indexBuffer, bb.indexFormat), this.indexBuffer = bb.indexBuffer)
      }
    }
    class xf {
      constructor(yb, bb, Wy, Uy) {
        this.modelMeshes = yb, this.ycy = bb, this.maker = Wy, this.warnOnce = Uy, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = []
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(yb) {
        this.collectGroup(yb, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(yb, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(yb, 1, this.frontDraws, this.frontDraws, !0);
        for (const bb of this.modelMeshes.groupIds())(bb < -1 || bb > 1) && this.warnOnce(`group:${bb}`, `rendering group ${bb} is not drawn`);
        for (const bb of this.ycy.groupIds())(bb < -1 || bb > 1) && this.warnOnce(`group:${bb}`, `rendering group ${bb} is not drawn`);
        this.opaqueDraws.sort(Ah), this.transparentDraws.sort(dh)
      }
      collectGroup(yb, bb, Wy, Uy, hy) {
        const fy = this.modelMeshes.group(bb),
          Zy = this.ycy.group(bb),
          cb = 0 === bb ? null === Zy || void 0 === Zy ? void 0 : Zy.opaque : void 0;
        this.collectList(yb, null === fy || void 0 === fy ? void 0 : fy.opaque, cb || null === Zy || void 0 === Zy ? void 0 : Zy.opaque, bb, !1, Wy, hy), cb && (this.ycy.drawn += this.maker.bundleDraws(yb, cb, bb)), this.collectList(yb, null === fy || void 0 === fy ? void 0 : fy.alphaTest, void 0, bb, !1, Wy, hy), this.collectList(yb, null === fy || void 0 === fy ? void 0 : fy.transparent, null === Zy || void 0 === Zy ? void 0 : Zy.transparent, bb, !0, Uy, hy)
      }
      collectList(yb, bb, Wy, Uy, hy, fy, Zy) {
        var cb;
        const Py = fy.length;
        bb && this.maker.pushDraws(yb, bb.units, bb.units.length, Uy, hy, fy, bb.rows), Wy && (this.ycy.drawn += this.maker.pushDraws(yb, Wy, Wy.length, Uy, hy, fy));
        const oy = hy ? null === (cb = this.modelMeshes.group(Uy)) || void 0 === cb ? void 0 : cb.text : void 0;
        oy && this.maker.pushDraws(yb, oy.units, oy.units.length, Uy, !0, fy, oy.rows), Zy && yZ(fy, Py)
      }
    }

    function Ah(yb, bb) {
      return yb.program.id - bb.program.id || yb.material.owner.uniqueId - bb.material.owner.uniqueId
    }

    function dh(yb, bb) {
      return yb.material.owner.uniqueId - bb.material.owner.uniqueId
    }

    function yZ(yb, bb) {
      for (let Wy = bb + 1; Wy < yb.length; Wy++) {
        const Uy = yb[Wy];
        let hy = Wy - 1;
        for (; hy >= bb && dh(yb[hy], Uy) > 0; hy--) yb[hy + 1] = yb[hy];
        yb[hy + 1] = Uy
      }
    }
    const bZ = {};

    function Wf(yb) {
      return yb.hasThinInstances ? "thin" : yb.NBy || yb._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Uf(yb, bb, Wy) {
      return yb ? (Wy._needUVs = !0, yb.optimizeUVAllocation && (0, vb.B)(yb.matrix) ? (Wy[`${bb}DIRECTUV`] = yb.uvSet + 1, Wy[`MAINUV${yb.uvSet+1}`] = !0) : Wy[`${bb}DIRECTUV`] = 0, !0) : (Wy[`${bb}DIRECTUV`] = 0, !1)
    }

    function hf(yb) {
      const bb = new Map;
      for (const Wy in yb) {
        if (95 === Wy.charCodeAt(0)) continue;
        const Uy = yb[Wy],
          hy = typeof Uy;
        "number" === hy || "string" === hy ? bb.set(Wy, String(Uy)) : Uy && "function" !== hy && bb.set(Wy, !0)
      }
      return bb
    }

    function ff(yb) {
      const bb = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Wy
        }
        of yb.features)
        for (const yb in Wy) bb[yb] = Wy[yb];
      return bb
    }

    function Zf(yb) {
      const bb = yb.parts.geometry;
      return null !== bb && void 0 !== bb && bb.live ? bb : null
    }

    function cZ(yb) {
      var bb;
      return null !== (bb = Zf(yb)) && void 0 !== bb ? bb : bZ
    }
    class Pf {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = yb, this.warnOnce = bb, this.programWithModel = Wy, this.packFailed = Uy, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(yb, bb, Wy, Uy, hy) {
        const fy = bb.owner;
        let Zy = this.drawStates.get(bb);
        if (!Zy) {
          const yb = bb.parts.materials[bb.range];
          if (!yb) return this.warnOnce("model", `${Wy.name} on ${fy.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          Zy = {
            defines: ff(yb),
            model: yb,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: hy,
            groupId: Uy,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(bb, Zy)
        }
        if (this.programCurrent(Zy, bb, hy, Uy)) return Zy.program;
        const {
          model: cb
        } = Zy, Py = cZ(bb), oy = this.instanceLayout(fy, hy), By = this.definesBits(fy);
        if (!this.prepareModelDefines(yb, fy, cb, Zy.defines, Uy, hy)) return null;
        Zy.instancing = hy, Zy.groupId = Uy, Zy.modelVersion = cb.version, Zy.geometry = Py, Zy.instanceLayout = oy, Zy.definesBits = By;
        const Ky = function(yb) {
          let bb = "";
          for (const [Wy, Uy] of yb) bb += !0 === Uy ? `${Wy};` : `${Wy}=${Uy};`;
          return bb
        }(hf(Zy.defines));
        return Ky === Zy.definesKey && Zy.packVariant === this.modelPackVariant && Zy.program && !this.packFailed(Zy.program) || (Zy.definesKey = Ky, Zy.packVariant = this.modelPackVariant, Zy.program = this.programWithModel(cb, Zy.defines, Ky)), Zy.program
      }
      programCurrent(yb, bb, Wy, Uy) {
        return null !== yb.program && !this.packFailed(yb.program) && yb.instancing === Wy && yb.groupId === Uy && this.definesHold(yb, bb, Wy)
      }
      definesHold(yb, bb, Wy) {
        return yb.modelVersion === yb.model.version && yb.geometry === cZ(bb) && yb.instanceLayout === this.instanceLayout(bb.owner, Wy) && yb.definesBits === this.definesBits(bb.owner) && yb.packVariant === this.modelPackVariant
      }
      modelPackKind(yb) {
        var bb;
        return 0 === this.modelPackVariant ? null : null !== (bb = (0, Oy.x)(yb, Gy.g.name)) && void 0 !== bb && bb.active ? "placed" : yb.item ? "item" : yb.lifeform ? "lifeform" : yb.box ? "box" : null
      }
      instanceLayout(yb, bb) {
        var Wy, Uy, hy;
        return "thin" === bb ? null !== (hy = this.resources.rZy.get(yb)) && void 0 !== hy ? hy : null : "instanced" === bb && null !== (Wy = null === (Uy = yb._userInstancedBuffersStorage) || void 0 === Uy ? void 0 : Uy.interleavedKinds) && void 0 !== Wy ? Wy : null
      }
      definesBits(yb) {
        const bb = this.view;
        return (yb.visibility < 1 ? 1 : 0) | (yb.hasVertexAlpha ? 2 : 0) | (yb.applyFog ? 4 : 0) | (yb.useVertexColors ? 8 : 0) | (yb.nonUniformScaling ? 16 : 0) | (bb.fogEnabled && 0 !== bb.fogMode ? 32 : 0) | (bb.lightsEnabled ? 64 : 0) | bb.lightCount << 7
      }
      prepareLightDefines(yb, bb, Wy) {
        let Uy = 0;
        if (this.view.lightsEnabled && !bb) {
          const bb = Math.min(Wy, 4);
          for (; Uy < this.view.lightCount && (yb[`LIGHT${Uy}`] = !0, yb[`LITE_LIGHT${Uy}_SLOT`] = Uy, Uy++, yb._needNormals = !0, Uy !== bb););
        }
        for (let hy = Uy; hy < 4; hy++) yb[`LIGHT${hy}`] = !1, yb[`LITE_LIGHT${hy}_SLOT`] = void 0
      }
      prepareModelDefines(yb, bb, Wy, Uy, hy, fy) {
        const {
          features: Zy
        } = Wy;
        Uy._needNormals = !1, Uy._needUVs = !1;
        const cb = this.view;
        this.prepareLightDefines(Uy, Wy.disableLighting, Wy.maxSimultaneousLights), Uy.MAINUV1 = !1, Uy.MAINUV2 = !1;
        const Py = Wy.diffuseTexture;
        Py ? (Uy._needUVs = !0, Uy.DIFFUSE = !0, Py.optimizeUVAllocation && (0, vb.B)(Py.matrix) ? (Uy.DIFFUSEDIRECTUV = Py.uvSet + 1, Uy[`MAINUV${Py.uvSet+1}`] = !0) : Uy.DIFFUSEDIRECTUV = 0, Py.uvSet > 1 && this.warnOnce(`uvset:${Wy.name}`, `${Wy.name} samples UV set ${Py.uvSet+1}, which is not supported`)) : (Uy.DIFFUSE = !1, Uy.DIFFUSEDIRECTUV = 0);
        const oy = Wy.opacityTexture,
          By = Wy.emissiveTexture;
        Uy.OPACITY = Uf(oy, "OPACITY", Uy), Uy.OPACITYRGB = null !== oy && oy.getAlphaFromRGB, Uy.EMISSIVE = Uf(By, "EMISSIVE", Uy), (oy && oy.uvSet > 1 || By && By.uvSet > 1) && this.warnOnce(`uvset:${Wy.name}`, `${Wy.name} samples a UV set past 2, which is not supported`);
        const Ky = Wy.reflectionTexture,
          ey = null !== Ky;
        if (ey) {
          if (!this.resources.boundTexture(Ky)) return !1;
          Uy._needNormals = !0
        }
        Uy.REFLECTION = ey, Uy.REFLECTIONMAP_3D = ey, Uy.REFLECTIONMAP_SKYBOX = ey, Uy.REFLECTIONMAP_OPPOSITEZ = ey && (yb.useRightHandedSystem ? !Ky.invertZ : Ky.invertZ), Uy.ROUGHNESS = ey && Wy.roughness > 0, Uy.REFLECTIONOVERALPHA = ey && Wy.useReflectionOverAlpha, Uy.LITE_REFLECTION_LUMINANCE = ey && "cube" === Ky.source.kind && Ky.source.luminance, (bb.skeleton || bb.morphTargetManager) && this.warnOnce(`skin:${bb.name}`, `${bb.name} has bones or morph targets, which are not supported`), Uy.FOG = Wy.fogEnabled && bb.applyFog && cb.fogEnabled && 0 !== cb.fogMode, Uy.NONUNIFORMSCALING = bb.nonUniformScaling;
        const {
          visibility: qb,
          hasVertexAlpha: sy
        } = bb;
        Uy.ALPHATEST = (0, Oy.V)(Wy, qb, sy), Uy.ALPHAFROMDIFFUSE = (0, Oy.jb)(Wy), Uy.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Wy.transparencyMode, Uy.ALPHABLEND = null === Wy.transparencyMode || (0, Oy.S)(Wy, qb, sy), Uy.PREMULTIPLYALPHA = 7 === Wy.alphaMode || 8 === Wy.alphaMode, Uy.EMISSIVEASILLUMINATION = Wy.useEmissiveAsIllumination, Uy.LINKEMISSIVEWITHDIFFUSE = Wy.linkEmissiveWithDiffuse, Uy.TWOSIDEDLIGHTING = !Wy.backFaceCulling && Wy.twoSidedLighting, Uy.INSTANCES = "none" !== fy, Uy.THIN_INSTANCES = "thin" === fy, Uy.LITE_FRONT_LAYER = hy >= 1;
        for (const {
            feature: gb,
            state: Gy,
            active: Oy
          }
          of Zy) {
          var Sy, Ey;
          if (Oy) null === (Sy = (Ey = (0, Bb.g)(gb)).prepareDefinesBeforeAttributes) || void 0 === Sy || Sy.call(Ey, Gy, Uy, yb, bb)
        }
        this.modelPackKind(Wy) && (Uy._needNormals = !0), Uy.NORMAL = Uy._needNormals && bb.isVerticesDataPresent("normal"), Uy.UV1 = Uy._needUVs && bb.isVerticesDataPresent("uv"), Uy.UV2 = Uy._needUVs && bb.isVerticesDataPresent("uv2");
        const ly = bb.useVertexColors && bb.isVerticesDataPresent("color");
        Uy.VERTEXCOLOR = ly, Uy.VERTEXALPHA = bb.hasVertexAlpha && ly, Uy.INSTANCESCOLOR = "none" !== fy && bb.isVerticesDataPresent("instanceColor");
        for (const {
            feature: gb,
            state: Gy,
            active: Oy
          }
          of Zy) {
          var mb, Cy;
          if (Oy) null === (mb = (Cy = (0, Bb.g)(gb)).prepareDefines) || void 0 === mb || mb.call(Cy, Gy, Uy, yb, bb, Wy)
        }
        const Ty = yb.xh();
        for (const {
            feature: gb,
            state: Gy,
            active: Oy
          }
          of Zy) {
          var Vy, Jy;
          if (Oy && !1 === (null === (Vy = (Jy = (0, Bb.g)(gb)).isReadyForSubMesh) || void 0 === Vy ? void 0 : Vy.call(Jy, Gy, Uy, yb, Ty))) return !1
        }
        return !0
      }
    }

    function of(yb, bb, Wy) {
      return yb.codeVersion !== bb.version && function(yb, bb) {
        const Wy = [],
          Uy = [];
        for (const {
            feature: ey,
            state: qb,
            active: sy
          }
          of bb.features) {
          var hy, fy, Zy, cb;
          if (sy) Bf(null === (hy = (fy = (0, Bb.g)(ey)).getCustomCode) || void 0 === hy ? void 0 : hy.call(fy, qb, "vertex", Jy.b.WGSL), Wy), Bf(null === (Zy = (cb = (0, Bb.g)(ey)).getCustomCode) || void 0 === Zy ? void 0 : Zy.call(cb, qb, "fragment", Jy.b.WGSL), Uy)
        }
        const Py = [];
        for (const {
            feature: ey,
            state: qb
          }
          of bb.features) {
          var oy, By;
          const yb = null === (oy = (By = (0, Bb.g)(ey)).getUniforms) || void 0 === oy ? void 0 : oy.call(By, qb, Jy.b.WGSL);
          for (const bb of null !== (Ky = null === yb || void 0 === yb ? void 0 : yb.ubo) && void 0 !== Ky ? Ky : []) {
            var Ky;
            bb.size && bb.type && Py.push({
              name: bb.name,
              type: bb.type,
              arraySize: bb.arraySize
            })
          }
        }
        yb.vertexCode = Wy, yb.fragmentCode = Uy, yb.pluginUniforms = Py, yb.codeKey = JSON.stringify([Wy, Uy, Py]), yb.codeVersion = bb.version
      }(yb, bb), `${Wy}#${yb.codeKey}`
    }

    function Bf(yb, bb) {
      if (yb)
        for (const Wy in yb) yb[Wy] && bb.push([Wy, yb[Wy]])
    }
    const Kf = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class ef {
      constructor(yb) {
        this.warnOnce = yb, this.states = new Map
      }
      renderState(yb, bb, Wy, Uy) {
        var hy;
        let fy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          Zy = null !== (hy = yb.sideOrientation) && void 0 !== hy ? hy : bb.sideOrientation;
        bb._getWorldMatrixDeterminant() < 0 && (Zy = 0 === Zy ? 1 : 0);
        const cb = "triangle-list" === fy,
          Py = Wy ? yb.alphaMode : 0,
          oy = (!Wy || (0 === Py || yb.forceDepthWrite)) && !yb.disableDepthWrite,
          By = cb && yb.backFaceCulling ? yb.cullBackFaces ? "back" : "front" : "none",
          Ky = cb && 0 !== Zy ? "ccw" : "cw",
          ey = yb.depthFunction,
          qb = cb ? yb.zOffset : 0,
          sy = cb ? yb.zOffsetUnits : 0,
          Sy = !yb.disableColorWrite;
        return Uy && Uy.alphaMode === Py && Uy.depthWrite === oy && Uy.depthFunction === ey && Uy.cullMode === By && Uy.frontFace === Ky && Uy.zOffset === qb && Uy.zOffsetUnits === sy && Uy.colourWrite === Sy && Uy.topology === fy ? Uy : this.stateFor(Py, oy, ey, By, Ky, qb, sy, Sy, fy)
      }
      stateFor(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        const oy = `${yb}|${bb}|${Wy}|${Uy}|${hy}|${fy}|${Zy}|${cb}|${Py}`;
        let By = this.states.get(oy);
        if (!By) {
          var Ky;
          const ey = yb ? wh(yb) : null;
          yb && !ey && this.warnOnce(`alpha:${yb}`, `alpha mode ${yb} is not supported`), By = {
            key: oy,
            alphaMode: yb,
            depthFunction: Wy,
            zOffset: fy,
            zOffsetUnits: Zy,
            topology: Py,
            blend: ey,
            depthWrite: bb,
            depthCompare: Wy && null !== (Ky = Kf.get(Wy)) && void 0 !== Ky ? Ky : null,
            cullMode: Uy,
            frontFace: hy,
            depthBias: -Zy,
            depthBiasSlopeScale: -fy,
            colourWrite: cb
          }, this.states.set(oy, By)
        }
        return By
      }
    }
    var qZ = Wy(36016);

    function sf(yb) {
      if (!yb.frozen) return -1;
      let bb = yb.version;
      for (const {
          feature: Wy,
          state: Uy,
          active: hy
        }
        of yb.features) {
        if (!hy || !Wy.bind) continue;
        const yb = (0, Bb.g)(Wy).uniformsVersion;
        if (!yb) return -1;
        bb += yb(Uy)
      }
      return bb
    }
    class Sf {
      constructor(yb, bb, Wy) {
        this.slots = yb, this.data = bb, this.textures = Wy, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(yb, bb) {
        this.write4(yb, bb, 0, 0, 0, 1)
      }
      updateFloat2(yb, bb, Wy) {
        this.write4(yb, bb, Wy, 0, 0, 2)
      }
      updateFloat3(yb, bb, Wy, Uy) {
        this.write4(yb, bb, Wy, Uy, 0, 3)
      }
      updateFloat4(yb, bb, Wy, Uy, hy) {
        this.write4(yb, bb, Wy, Uy, hy, 4)
      }
      updateVector3(yb, bb) {
        this.write4(yb, bb.x, bb.y, bb.z, 0, 3)
      }
      updateVector4(yb, bb) {
        this.write4(yb, bb.x, bb.y, bb.z, bb.w, 4)
      }
      updateColor3(yb, bb) {
        this.write4(yb, bb.r, bb.g, bb.b, 0, 3)
      }
      updateColor4(yb, bb, Wy) {
        this.write4(yb, bb.r, bb.g, bb.b, Wy, 4)
      }
      updateFloatsFrom(yb, bb, Wy, Uy) {
        const hy = this.slots.get(yb);
        if (!hy) return;
        const fy = this.data,
          Zy = hy.offset;
        for (let cb = 0; cb < Uy; cb++) fy[Zy + cb] = bb[Wy + cb]
      }
      updateFloat3TimesFloats(yb, bb, Wy, Uy) {
        const hy = this.slots.get(yb);
        if (!hy) return;
        const fy = this.data,
          Zy = hy.offset;
        fy[Zy] = bb[Wy] * Uy[0], fy[Zy + 1] = bb[Wy + 1] * Uy[1], fy[Zy + 2] = bb[Wy + 2] * Uy[2]
      }
      qcy(yb, bb) {
        const Wy = this.slots.get(yb);
        Wy && this.data.set(bb.m, Wy.offset)
      }
      updateMatrixFloats(yb, bb) {
        const Wy = this.slots.get(yb);
        Wy && this.data.set(bb, Wy.offset)
      }
      updateFloatArray(yb, bb) {
        const Wy = this.slots.get(yb);
        if (!Wy) return;
        if (!Wy.arraySize || Wy.stride === Wy.floats) return void this.data.set(bb, Wy.offset);
        const Uy = Math.min(bb.length, Wy.floats * Wy.arraySize);
        for (let hy = 0; hy < Uy; hy++) this.data[Wy.offset + Math.floor(hy / Wy.floats) * Wy.stride + hy % Wy.floats] = bb[hy]
      }
      updateArray(yb, bb) {
        this.updateFloatArray(yb, bb)
      }
      setTexture(yb, bb) {
        this.textures.set(yb, bb), this.expected.delete(yb)
      }
      expectTexture(yb) {
        this.textures.set(yb, null), this.expected.add(yb)
      }
      write4(yb, bb, Wy, Uy, hy, fy) {
        const Zy = this.slots.get(yb);
        if (!Zy) return;
        const cb = this.data,
          Py = Zy.offset;
        cb[Py] = bb, fy > 1 && (cb[Py + 1] = Wy), fy > 2 && (cb[Py + 2] = Uy), fy > 3 && (cb[Py + 3] = hy)
      }
    }

    function Ef(yb, bb) {
      const Wy = LU,
        Uy = qZ.j,
        hy = yb.lights,
        fy = Math.min(yb.lightCount, 8);
      for (let Zy = 0; Zy < fy; Zy++) {
        const yb = Wy.lights + Zy * Wy.lightStride,
          fy = Zy * qZ.c;
        bb[yb] = hy[fy + Uy.vector], bb[yb + 1] = hy[fy + Uy.vector + 1], bb[yb + 2] = hy[fy + Uy.vector + 2], bb[yb + 3] = hy[fy + Uy.kind] === qZ.f.directional ? 1 : 0, bb[yb + 4] = hy[fy + Uy.diffuse], bb[yb + 5] = hy[fy + Uy.diffuse + 1], bb[yb + 6] = hy[fy + Uy.diffuse + 2], bb[yb + 7] = hy[fy + Uy.range], bb[yb + 8] = hy[fy + Uy.specular], bb[yb + 9] = hy[fy + Uy.specular + 1], bb[yb + 10] = hy[fy + Uy.specular + 2], bb[yb + 11] = hy[fy + Uy.range]
      }
      bb[Wy.fogInfos] = yb.fogMode, bb[Wy.fogInfos + 1] = yb.fogStart, bb[Wy.fogInfos + 2] = yb.fogEnd, bb[Wy.fogInfos + 3] = yb.fogDensity, bb[Wy.fogColour] = yb.fogColour[0], bb[Wy.fogColour + 1] = yb.fogColour[1], bb[Wy.fogColour + 2] = yb.fogColour[2], bb[Wy.outputHeight] = yb.renderHeight, bb[Wy.animTick] = yb.animTick, bb[Wy.timeMs] = yb.timeMs
    }
    class lf {
      constructor(yb) {
        this.instancesOf = yb
      }
      refreshModelUniforms(yb, bb, Wy, Uy) {
        const hy = sf(Wy);
        if (hy >= 0 && hy === bb.heldVersion && bb.textures.get("diffuseSampler") === Wy.diffuseTexture && bb.textures.get("reflectionCubeSampler") === Wy.reflectionTexture && bb.textures.get("opacitySampler") === Wy.opacityTexture && bb.textures.get("emissiveSampler") === Wy.emissiveTexture) return !0;
        if (hy < 0)
          for (const fy of this.instancesOf(Wy)) fy.heldVersion = -1;
        return this.writeModelUniforms(yb, bb, Wy, Uy), bb.heldVersion = hy, !1
      }
      writeModelUniforms(yb, bb, Wy, Uy) {
        const {
          ubo: hy
        } = bb, fy = Wy.diffuseTexture, Zy = Wy.diffuseColor;
        hy.updateFloat4("vDiffuseColor", Zy[0], Zy[1], Zy[2], Wy.alpha), fy && (hy.updateFloat2("vDiffuseInfos", fy.uvSet, fy.level), hy.updateMatrixFloats("diffuseMatrix", fy.matrix)), hy.updateFloat("alphaCutOff", Wy.alphaCutOff), hy.updateFloatsFrom("vEmissiveColor", Wy.emissiveColor, 0, 3), hy.updateFloat3TimesFloats("vAmbientColor", Uy.ambientColour, 0, Wy.ambientColor);
        const cb = Wy.specularColor;
        hy.updateFloat4("vSpecularColor", cb[0], cb[1], cb[2], Wy.specularPower), hy.setTexture("diffuseSampler", fy);
        const Py = Wy.opacityTexture;
        Py && (hy.updateFloat2("vOpacityInfos", Py.uvSet, Py.level), hy.updateMatrixFloats("opacityMatrix", Py.matrix)), hy.setTexture("opacitySampler", Py);
        const oy = Wy.emissiveTexture;
        oy && (hy.updateFloat2("vEmissiveInfos", oy.uvSet, oy.level), hy.updateMatrixFloats("emissiveMatrix", oy.matrix)), hy.setTexture("emissiveSampler", oy);
        const By = Wy.reflectionTexture;
        By && hy.updateMatrixFloats("reflectionMatrix", By.matrix), hy.updateFloat2("vReflectionInfos", By ? By.level * yb.iblIntensity : 0, Wy.roughness), hy.setTexture("reflectionCubeSampler", By);
        const Ky = yb.xh();
        for (const {
            feature: sy,
            state: Sy,
            active: Ey
          }
          of Wy.features) {
          var ey, qb;
          if (Ey) null === (ey = (qb = (0, Bb.g)(sy)).bind) || void 0 === ey || ey.call(qb, Sy, hy, yb, Ky)
        }
      }
    }

    function mZ(yb) {
      const bb = yb.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(bb) ? "u32" : /i32|^vec\di$/.test(bb) ? "i32" : "f32"
    }

    function Cf(yb, bb) {
      const Wy = yb.getSize(),
        Uy = mZ(bb),
        hy = yb => 4 === Wy ? `${yb}x4` : 2 === Wy ? `${yb}x2` : null;
      if ("f32" === Uy) {
        if (5126 === yb.type) return 1 === Wy ? "float32" : Wy >= 2 && Wy <= 4 ? `float32x${Wy}` : null;
        if (!yb.normalized) return null;
        switch (yb.type) {
          case 5121:
            return hy("unorm8");
          case 5120:
            return hy("snorm8");
          case 5123:
            return hy("unorm16");
          case 5122:
            return hy("snorm16")
        }
        return null
      }
      const fy = "u32" === Uy ? "uint" : "sint";
      switch (yb.type) {
        case 5125:
        case 5124:
          return 1 === Wy ? `${fy}32` : Wy <= 4 ? `${fy}32x${Wy}` : null;
        case 5121:
        case 5120:
          return hy(`${fy}8`);
        case 5123:
        case 5122:
          return hy(`${fy}16`)
      }
      return null
    }

    function Tf(yb) {
      var bb;
      const Wy = /(8|16|32)(?:x(\d))?$/.exec(yb);
      return Wy ? Number(Wy[1]) / 8 * Number(null !== (bb = Wy[2]) && void 0 !== bb ? bb : 1) : 4
    }
    class Vf {
      constructor(yb, bb, Wy) {
        this.resources = yb, this.limits = bb, this.warnOnce = Wy, this.layouts = new Map
      }
      resolveInputs(yb, bb, Wy, Uy) {
        const hy = [],
          fy = Wy.program.attributes,
          Zy = [];
        for (let By = 0; By < fy.length; By++) {
          const Wy = fy[By],
            cb = Wy.optional ? null : this.resources.vertexInput(yb, Wy.name, Uy);
          if (!cb) {
            const yb = mZ(Wy.type),
              bb = "u32" === yb ? "uint32x4" : "i32" === yb ? "sint32x4" : "float32x4";
            Zy.push(null);
            const Uy = hy.find((yb => null === yb.data));
            Uy ? Uy.attributes.push({
              shaderLocation: By,
              offset: 0,
              format: bb
            }) : hy.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: By,
                offset: 0,
                format: bb
              }]
            });
            continue
          }
          const Py = cb.getBuffer();
          Zy.push(cb);
          const oy = Cf(cb, Wy.type);
          if (!oy) return this.warnOnce(`format:${bb}:${Wy.name}`, `${bb}'s ${Wy.name} (type ${cb.type}, size ${cb.getSize()}) has no WebGPU vertex format`), null;
          const Ky = cb.getIsInstanced() ? "instance" : "vertex",
            ey = cb.byteStride,
            qb = Tf(oy),
            sy = hy.find((yb => yb.data === Py && yb.stride === ey && yb.step === Ky && cb.byteOffset >= yb.base && cb.byteOffset - yb.base + qb <= ey));
          sy ? sy.attributes.push({
            shaderLocation: By,
            offset: cb.byteOffset - sy.base,
            format: oy
          }) : hy.push({
            data: Py,
            base: cb.byteOffset,
            stride: ey,
            step: Ky,
            attributes: [{
              shaderLocation: By,
              offset: 0,
              format: oy
            }]
          })
        }
        if (hy.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${bb}`, `${bb} needs ${hy.length} vertex buffers`), null;
        let cb = "";
        for (const By of hy) {
          cb += `${By.stride}${"instance"===By.step?"i":"v"}`;
          for (const yb of By.attributes) cb += `,${yb.shaderLocation}:${yb.offset}:${yb.format}`;
          cb += ";"
        }
        let Py = this.layouts.get(cb);
        Py || (Py = {
          key: cb,
          buffers: hy.map((yb => ({
            arrayStride: yb.stride,
            stepMode: yb.step,
            attributes: yb.attributes
          }))),
          instanceEnds: hy.map((yb => {
            let bb = -1;
            if ("instance" === yb.step)
              for (const Wy of yb.attributes) bb = Math.max(bb, Wy.offset + Tf(Wy.format));
            return bb
          }))
        }, this.layouts.set(cb, Py));
        const oy = hy.map((yb => yb.base));
        return {
          program: Wy,
          sources: Zy,
          layout: Py,
          slotData: hy.map((yb => yb.data)),
          UZy: oy,
          buffers: [],
          offsets: oy,
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

    function Jf(yb, bb, Wy, Uy) {
      const hy = bb.program.program.attributes;
      for (let fy = 0; fy < hy.length; fy++) {
        if ((hy[fy].optional ? null : Wy.vertexInput(yb, hy[fy].name, Uy)) !== bb.sources[fy]) return !1
      }
      return !0
    }
    const gZ = 64;
    class Gf {
      constructor(yb, bb, Wy, Uy) {
        this.device = yb, this.layout = bb, this.frameBuffer = Wy, this.label = Uy, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(yb) {
        if (yb * gZ <= this.data.length) return !1;
        let bb = 2 * this.data.length;
        for (; yb * gZ > bb;) bb *= 2;
        const Wy = new Float32Array(bb);
        return Wy.set(this.data), this.data = Wy, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const hy = this.data,
          fy = yb * gZ;
        let Zy = hy[fy + 16] !== Wy;
        for (let cb = 0; cb < 16 && !Zy; cb++) Zy = hy[fy + cb] !== bb[Uy + cb];
        if (Zy) {
          for (let yb = 0; yb < 16; yb++) hy[fy + yb] = bb[Uy + yb];
          hy[fy + 16] = Wy
        }
        return Zy
      }
      upload(yb, bb) {
        this.device.queue.writeBuffer(this.buffer, yb * QU, this.data, yb * gZ, (bb - yb) * gZ)
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

    function Of(yb) {
      return yb.gpu[vb.i.lite] ??= yb.materials.map(((bb, Wy) => ({
        parts: yb,
        range: Wy,
        owner: yb.owner
      })))
    }

    function Rf(yb) {
      var bb, Wy, Uy;
      return null !== (bb = null !== (Wy = null === (Uy = yb.parts.materials[yb.range]) || void 0 === Uy ? void 0 : Uy.mirror) && void 0 !== Wy ? Wy : yb.owner.material) && void 0 !== bb ? bb : null
    }
    const vZ = ["opaque", "alphaTest", "transparent", "text"];
    class iZ {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, ob.e)("Lite: ")
      }
      attach(yb, bb) {
        this.model = yb, this.mirror = bb
      }
      get worlds() {
        return this.model.nodes.Kb
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(yb) {
        return this.groups.get(yb)
      }
      groupIds() {
        return this.groups.keys()
      }
      forEachSelected(yb) {
        for (const [bb, Wy] of this.groups)
          for (const Uy of vZ)
            for (const hy of Wy[Uy].units) yb(hy.owner, "text" === Uy ? "transparent" : Uy, bb)
      }
      select(yb, bb) {
        this.frame++, this.selectedCount = 0;
        for (const cb of this.groups.values())
          for (const yb of vZ) cb[yb].units.length = 0, cb[yb].rows.length = 0;
        const {
          model: Wy,
          mirror: Uy
        } = this;
        if (!Wy || !Uy || !yb) return;
        this.rows.length < Wy.nodes.Hy && (this.rows = new Int32Array(Wy.nodes.Hy));
        const hy = this.rows,
          fy = Wy.meshes;
        for (let cb = 0; cb < fy.looseCount; cb++) {
          const yb = fy.loose[cb],
            Wy = Uy.nodes[yb];
          Wy && !Wy.isBlocked && Wy.isEnabled() && !Wy.vZ.hasAZeroComponent && fy.selects(yb, bb.frustum) && (this.activate(Wy, yb), this.selectedCount++)
        }
        const Zy = fy.selectTextPlanes(bb.frustum, hy);
        for (let cb = 0; cb < Zy; cb++) {
          const bb = hy[cb],
            fy = Uy.nodes[bb],
            Zy = Wy.meshes.parts[bb];
          if (!fy.isVisible || !(fy.visibility > 0) || 0 === (fy.layerMask & yb.layerMask) || !Zy) continue;
          const Py = this.groupOf(Wy.meshes.layer[bb]).text;
          for (const yb of Of(Zy)) Py.units.push(yb), Py.rows.push(bb);
          this.selectedCount++
        }
      }
      instanceBatch(yb) {
        const bb = this.batchOf(yb);
        return bb.dispatched || (bb.dispatched = bb.renderSelf = !0, bb.row = this.rowOf(yb)), bb
      }
      rowOf(yb) {
        return yb.row
      }
      activate(yb, bb) {
        if (!yb.zWy) {
          const Wy = yb;
          if (Wy.NBy) {
            const yb = this.batchOf(Wy);
            yb.dispatched = !0, yb.renderSelf = !0, yb.row = bb
          }
          return void this.dispatch(Wy, bb, bb)
        }
        const Wy = yb,
          Uy = Wy.zKy;
        if (Uy._getWorldMatrixDeterminant() >= 0 !== Wy._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Uy.name}`, `A mirrored InstancedMesh of ${Uy.name} is not drawn yet`);
        const hy = this.batchOf(Uy);
        hy.instances.push(Wy), hy.rows.push(bb), hy.dispatched || (hy.dispatched = !0, this.dispatch(Uy, bb, this.rowOf(Uy)))
      }
      batchOf(yb) {
        let bb = this.batches.get(yb);
        return bb || (bb = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(yb, bb)), bb.frame !== this.frame && (bb.frame = this.frame, bb.dispatched = !1, bb.renderSelf = !1, bb.instances.length = 0, bb.rows.length = 0), bb
      }
      dispatch(yb, bb, Wy) {
        const {
          layer: Uy,
          parts: hy
        } = this.model.meshes;
        if (!hy[bb]) return;
        const fy = this.groupOf(Uy[bb]),
          Zy = yb;
        for (const cb of Of(hy[bb])) {
          const yb = Rf(cb);
          if (!yb) continue;
          const bb = yb.needAlphaBlendingForMesh(Zy) ? fy.transparent : yb.needAlphaTestingForMesh(Zy) ? fy.alphaTest : fy.opaque;
          bb.units.push(cb), bb.rows.push(Wy)
        }
      }
      groupOf(yb) {
        let bb = this.groups.get(yb);
        return bb || (bb = {
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
        }, this.groups.set(yb, bb)), bb
      }
    }
    class Mf {
      constructor() {
        this.kW = new Map, this.enabled = [], this.groups = new Map, this.DW = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(yb) {
        if (this.kW.has(yb)) return;
        const bb = {
          mesh: yb,
          observer: yb.onEffectiveEnabledStateChangedObservable.add((yb => {
            this.dJ(bb, yb)
          })),
          index: -1,
          steady: null
        };
        this.kW.set(yb, bb), this.dJ(bb, yb.isEnabled())
      }
      remove(yb) {
        const bb = this.kW.get(yb);
        bb && (bb.observer.remove(!0), this.dJ(bb, !1), this.kW.delete(yb))
      }
      base(yb) {
        return this.kW.get(yb)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          kW: this.kW.size
        }
      }
      forEachSelected(yb) {
        for (const [bb, Wy] of this.groups) {
          for (const Uy of Wy.opaque) yb(Uy.owner, "opaque", bb);
          for (const Uy of Wy.transparent) yb(Uy.owner, "transparent", bb)
        }
        for (const bb of this.DW) yb(bb.mesh, "opaque", 0)
      }
      group(yb) {
        return this.groups.get(yb)
      }
      groupIds() {
        return this.groups.keys()
      }
      select(yb, bb) {
        this.drawn = 0, this.selected = 0, this.DW.length = 0;
        for (const Uy of this.groups.values()) Uy.opaque.length = 0, Uy.transparent.length = 0;
        if (!yb) return;
        const Wy = this.enabled;
        for (let Uy = 0; Uy < Wy.length; Uy++) {
          const hy = Wy[Uy];
          if (hy.steady && bb(hy, yb)) {
            this.selected++, this.DW.push(hy);
            continue
          }
          const fy = hy.mesh;
          if (fy.isBlocked || fy.vZ.hasAZeroComponent) continue;
          if (!fy.isVisible || fy.visibility <= 0 || 0 === (fy.layerMask & yb.layerMask)) continue;
          if (fy.NBy) {
            this.warned.has(fy.name) || (this.warned.add(fy.name), console.warn(`Lite: thin instance base ${fy.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: Zy
          } = fy;
          if (!Zy) continue;
          fy.computeWorldMatrix(), this.selected++;
          const cb = this.listsFor(fy.renderingGroupId);
          for (const yb of Of(Zy)) {
            const bb = Rf(yb);
            bb && (bb.needAlphaBlendingForMesh(fy) ? cb.transparent.push(yb) : cb.opaque.push(yb))
          }
        }
      }
      dJ(yb, bb) {
        if (bb === yb.index >= 0) return;
        yb.steady = null;
        const Wy = this.enabled;
        if (bb) yb.index = Wy.length, Wy.push(yb);
        else {
          const bb = Wy.pop();
          bb !== yb && (Wy[yb.index] = bb, bb.index = yb.index), yb.index = -1
        }
      }
      listsFor(yb) {
        let bb = this.groups.get(yb);
        return bb || (bb = {
          opaque: [],
          transparent: []
        }, this.groups.set(yb, bb)), bb
      }
    }
    var Yf = Wy(38184);
    class Xf {
      constructor() {
        this.bundle = null, this.stale = !0, this.kW = new Set
      }
    }
    class nf {
      constructor(yb, bb, Wy) {
        this.device = yb, this.slots = bb, this.host = Wy, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new Xf, this.Xby = new Xf, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Ih, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.argsBuffer = this.createArgsBuffer(), this.direct = function(yb) {
          var bb, Wy;
          let Uy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (bb = null === (Wy = globalThis.navigator) || void 0 === Wy ? void 0 : Wy.userAgent) && void 0 !== bb ? bb : "";
          const hy = yb.adapterInfo;
          return "intel" === (null === hy || void 0 === hy ? void 0 : hy.vendor) && "gen-12lp" === hy.architecture && Uy.includes("Windows")
        }(yb), (0, Yf.F)(this.direct)
      }
      Jm() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Yf.F)(this.directThisFrame)
      }
      add(yb, bb, Wy, Uy) {
        let hy = this.records.get(yb);
        return hy || (hy = this.createRecord(yb), this.records.set(yb, hy)), hy.recorded && rZ(hy, bb) || (this.bundleOf(hy).stale = !0), this.place(hy, bb, Wy, Uy), hy
      }
      bundleOf(yb) {
        return yb.Xby ? this.Xby : this.main
      }
      addAgain(yb, bb, Wy, Uy) {
        yb.recorded || (this.bundleOf(yb).stale = !0), this.place(yb, bb, Wy, Uy)
      }
      place(yb, bb, Wy, Uy) {
        yb.seen = this.frame, yb.Xby && null === yb.draw && (this.Xby.stale = !0), yb.draw = bb, this.drawn++, Wy && this.slots.write(yb.slot, Wy, Uy) && (this.slotsFrom = Math.min(this.slotsFrom, yb.slot), this.slotsTo = Math.max(this.slotsTo, yb.slot));
        const hy = this.args,
          fy = 5 * yb.slot;
        hy[fy] === bb.count && hy[fy + 1] === bb.instances && hy[fy + 2] === bb.first || (hy[fy] = bb.count, hy[fy + 1] = bb.instances, hy[fy + 2] = bb.first, this.argsDirty = !0, this.Xby.stale ||= yb.Xby)
      }
      gC() {
        for (const yb of this.records.values()) yb.seen !== this.frame && (yb.draw && (yb.draw = null, this.args[5 * yb.slot + 1] = 0, this.argsDirty = !0, this.Xby.stale ||= yb.Xby), this.frame - yb.seen > 120 && (this.records.delete(yb.unit), this.freeSlots.push(yb.slot), yb.recorded && (this.bundleOf(yb).stale = !0)));
        this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(yb) {
        for (const bb of this.records.values()) bb.draw && bb.seen === this.frame && !bb.Xby && yb(bb.draw, this.slots.data, bb.slot * QU / 4)
      }
      resourceDestroyed(yb) {
        this.main.stale ||= this.main.kW.has(yb), this.Xby.stale ||= this.Xby.kW.has(yb)
      }
      execute(yb, bb, Wy) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(yb, bb, Wy, "direct"), this.drawn;
        const Uy = this.host.sceneGroup(bb);
        if (!Uy) return this.main.bundle = null, this.Xby.bundle = null, this.recordedSceneGroup = null, this.encode(yb, bb, Wy, "direct"), this.drawn;
        this.recordedTarget === Wy && this.recordedSceneGroup === Uy || (this.recordedTarget = Wy, this.recordedSceneGroup = Uy, this.main.stale = !0, this.Xby.stale = !0);
        const hy = this.main,
          fy = this.Xby;
        let Zy = !1;
        !hy.stale && hy.bundle || (hy.bundle = this.record(bb, Wy, Uy, "indirect"), Zy = !0);
        const cb = (0, Yf.m)();
        return (fy.stale || this.rangedEpoch !== cb) && (this.rangedEpoch = cb, fy.bundle = this.drawsRanged() ? this.record(bb, Wy, Uy, "Xby") : this.noRangedBundle(), Zy = !0), Zy && (this.bundles = fy.bundle ? [hy.bundle, fy.bundle] : [hy.bundle]), yb.executeBundles(this.bundles), yb.setBindGroup(0, Uy), this.drawn
      }
      record(yb, bb, Wy, Uy) {
        const hy = this.device.createRenderBundleEncoder({
          label: "Xby" === Uy ? "thin-bases-ranged" : "thin-bases",
          colorFormats: yb._colorFormat ? [yb._colorFormat] : [],
          depthStencilFormat: yb._depthStencilFormat,
          sampleCount: yb._sampleCount
        });
        return hy.setBindGroup(0, Wy), this.encode(hy, yb, bb, Uy), hy.finish()
      }
      noRangedBundle() {
        for (const yb of this.records.values()) yb.Xby && (yb.recorded = !1);
        return this.Xby.kW.clear(), this.Xby.stale = !1, null
      }
      drawsRanged() {
        for (const yb of this.records.values())
          if (yb.Xby && yb.draw) return !0;
        return !1
      }
      encode(yb, bb, Wy, Uy) {
        const hy = [];
        for (const Py of this.records.values()) "direct" !== Uy && Py.Xby !== ("Xby" === Uy) || (Py.recorded = !1, Py.draw && hy.push(Py));
        hy.sort(Hf);
        const fy = "direct" === Uy ? null : "Xby" === Uy ? this.Xby : this.main;
        null === fy || void 0 === fy || fy.kW.clear(), this.binder.reset();
        let Zy = !1;
        for (const Py of hy) {
          var cb;
          const hy = Py.draw,
            oy = this.host.pipelineFor(hy, bb, Wy);
          if (!oy) {
            this.host.pipelineCompiling(hy, Wy) ? Zy = !0 : fy && this.keep(Py, hy, fy.kW);
            continue
          }
          let By;
          if (Py.Xby && "indirect" !== Uy) {
            const yb = Py.unit.owner;
            By = "direct" === Uy && (0, Yf.t)(yb) || (0, Yf.n)(yb) || void 0
          }
          if (fy && this.keep(Py, hy, fy.kW), 0 === (null === (cb = By) || void 0 === cb ? void 0 : cb.count)) continue;
          this.binder.bind(yb, hy, oy, this.slots.bindGroup, Py.slot * QU);
          const Ky = 5 * Py.slot;
          if ("indirect" === Uy) {
            hy.indexBuffer ? yb.drawIndexedIndirect(this.argsBuffer, 4 * Ky) : yb.drawIndirect(this.argsBuffer, 4 * Ky);
            continue
          }
          const ey = this.args;
          By ? uf(yb, null !== hy.indexBuffer, ey, Ky, By) : hy.indexBuffer ? yb.drawIndexed(ey[Ky], ey[Ky + 1], ey[Ky + 2], 0, 0) : yb.draw(ey[Ky], ey[Ky + 1], ey[Ky + 2], 0)
        }
        fy && (fy.stale = Zy)
      }
      keep(yb, bb, Wy) {
        yb.recorded = !0, yb.pipelineKey = bb.pipelineKey, yb.materialGroup = bb.material.bindGroup, yb.vertexBuffers.length = 0, yb.vertexBuffers.push(...bb.vertexBuffers), yb.vertexOffsets = bb.vertexOffsets, yb.indexBuffer = bb.indexBuffer, yb.indexFormat = bb.indexFormat;
        for (const Uy of bb.vertexBuffers) Wy.add(Uy);
        bb.indexBuffer && Wy.add(bb.indexBuffer), Wy.add(bb.material.buffer);
        for (const Uy of bb.material.bound) Uy && Wy.add(Uy)
      }
      createRecord(yb) {
        let bb = this.freeSlots.pop();
        return void 0 === bb && (bb = this.slotCount++, this.grow()), {
          unit: yb,
          slot: bb,
          Xby: void 0 !== (0, Yf.n)(yb.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Xby.stale = !0), 5 * this.slotCount > this.args.length) {
          const yb = new Uint32Array(2 * this.args.length);
          yb.set(this.args), this.args = yb, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function uf(yb, bb, Wy, Uy, hy) {
      const fy = Wy[Uy + 1],
        Zy = hy.data;
      for (let cb = 0; cb < hy.count; cb++) {
        const hy = Math.min(Zy[2 * cb], fy),
          Py = Math.min(Zy[2 * cb + 1], fy - hy);
        0 !== Py && (bb ? yb.drawIndexed(Wy[Uy], Py, Wy[Uy + 2], 0, hy) : yb.draw(Wy[Uy], Py, Wy[Uy + 2], hy))
      }
    }

    function rZ(yb, bb) {
      if (yb.pipelineKey !== bb.pipelineKey || yb.materialGroup !== bb.material.bindGroup || yb.indexBuffer !== bb.indexBuffer || yb.indexFormat !== bb.indexFormat || yb.vertexOffsets !== bb.vertexOffsets || yb.vertexBuffers.length !== bb.vertexBuffers.length) return !1;
      for (let Wy = 0; Wy < yb.vertexBuffers.length; Wy++)
        if (yb.vertexBuffers[Wy] !== bb.vertexBuffers[Wy]) return !1;
      return !0
    }

    function Hf(yb, bb) {
      return Ah(yb.draw, bb.draw)
    }
    const aZ = new WeakMap,
      Ff = {
        depth: !1,
        sunShadow: !1
      };

    function pf(yb, bb) {
      let Wy = aZ.get(yb);
      Wy || (Wy = new Map, aZ.set(yb, Wy));
      const Uy = `${bb.depth?"-depth":""}${bb.sunShadow?"-shadow":""}${bb.shadowMask?"-mask":""}`;
      let hy = Wy.get(Uy);
      if (!hy) {
        const fy = [{
          binding: Rb.d,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Rb.k
          }
        }, {
          binding: Rb.x,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        bb.depth && fy.push({
          binding: Rb.p,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), bb.sunShadow && fy.push(... function() {
          const yb = GPUShaderStage.FRAGMENT,
            bb = Rb.s;
          return [{
            binding: bb.uniform,
            visibility: yb,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: bb.pb,
            visibility: yb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: bb.special,
            visibility: yb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: bb.volume,
            visibility: yb,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: bb.sampler,
            visibility: yb,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: bb.entities,
            visibility: yb,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: bb.entityGrids,
            visibility: yb,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), bb.shadowMask && fy.push({
          binding: Rb.u,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), hy = yb.createBindGroupLayout({
          label: `${bb.depth?"terrain-":""}shader-pack-inputs${Uy}`,
          entries: fy
        }), Wy.set(Uy, hy)
      }
      return hy
    }

    function Lf(yb) {
      return pf(yb, Ff)
    }

    function Qf(yb, bb) {
      if (!bb) return !1;
      const Wy = (0, vW.g)(yb);
      return !!Wy && HW(Wy, bb)
    }

    function jZ(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!oU(bb)) return [];
      return [pf(yb, {
        depth: hU(bb.packVariant),
        sunShadow: Qf(bb.packVariant, Wy),
        shadowMask: Uy
      })]
    }
    class Df {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = yb, this.sunShadow = Wy, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Rb.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = yb.createBuffer({
          label: "shader-pack-inputs",
          size: Rb.k,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Uy = (0, Rb.B)(bb);
        this.textures = yb.createBuffer({
          label: "shader-pack-textures",
          size: Uy.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), yb.queue.writeBuffer(this.textures, 0, Uy), this.bindGroup = yb.createBindGroup({
          label: "shader-pack-inputs",
          layout: Lf(yb),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Rb.d,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Rb.x,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(yb, bb, Wy) {
        (0, Rb.G)(this.data, {
          seconds: yb.seconds(),
          lit: Wy,
          renderOffset: yb.renderOffset(),
          QZy: yb.QZy(),
          eyePosition: bb,
          shadowDirection: yb.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Uy = bb ? this.sunShadow : null;
        if ((bb || Wy) && !Uy) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!yb && !Uy) return this.bindGroup;
        (yb && yb !== this.depthView || Wy && Wy !== this.maskView) && (this.depthView = null !== yb && void 0 !== yb ? yb : this.depthView, this.maskView = null !== Wy && void 0 !== Wy ? Wy : this.maskView, this.groups.clear());
        const hy = (yb ? 1 : 0) | (Uy ? 2 : 0) | (Wy ? 4 : 0);
        let fy = this.groups.get(hy);
        if (!fy) {
          const bb = this.entries();
          yb && bb.push({
            binding: Rb.p,
            resource: yb
          }), Uy && bb.push(...Uy.entries()), Wy && bb.push({
            binding: Rb.u,
            resource: Wy
          }), fy = this.device.createBindGroup({
            label: `${yb||Wy?"terrain-":""}shader-pack-inputs${yb?"-depth":""}${Uy?"-shadow":""}${Wy?"-mask":""}`,
            layout: pf(this.device, {
              depth: !!yb,
              sunShadow: !!Uy,
              shadowMask: !!Wy
            }),
            entries: bb
          }), this.groups.set(hy, fy)
        }
        return fy
      }
      bind(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        yb.setBindGroup(Rb.h, this.bindGroupFor(bb, Wy, Uy))
      }
    }

    function tZ(yb, bb, Wy) {
      if (yb.gpuVersion === bb.gpuBuffersVersion) return !0;
      let Uy;
      do {
        if (Uy = bb.gpuBuffersVersion, !wf(yb, bb, Wy)) return !1
      } while (bb.gpuBuffersVersion !== Uy);
      return yb.gpuVersion = Uy, yb.fitInstances = 0, !0
    }

    function wf(yb, bb, Wy) {
      let Uy = null;
      for (let fy = 0; fy < yb.slotData.length; fy++) {
        var hy;
        const Zy = yb.slotData[fy],
          cb = Zy ? bb.gpuBuffer(Zy) : Wy;
        if (!cb) return !1;
        Zy && yb.layout.instanceEnds[fy] < 0 && bb.cover(Zy, Number.POSITIVE_INFINITY), yb.buffers[fy] = cb;
        const Py = yb.UZy[fy] + (Zy ? bb.gpuOffset(Zy) : 0);
        Py !== (null !== (hy = Uy) && void 0 !== hy ? hy : yb.offsets)[fy] && (Uy ??= yb.offsets.slice(), Uy[fy] = Py), yb.ends[fy] = Zy ? bb.gpuEnd(Zy) : cb.size
      }
      return Uy && (yb.offsets = Uy), !0
    }

    function kZ(yb, bb, Wy, Uy) {
      if (bb <= yb.fitInstances) return null;
      const {
        layout: hy,
        ends: fy,
        offsets: Zy,
        slotData: cb,
        UZy: Py
      } = yb;
      let oy = !1;
      for (let By = 0; By < hy.buffers.length; By++) {
        const yb = hy.instanceEnds[By];
        if (yb < 0) continue;
        const Uy = (bb - 1) * hy.buffers[By].arrayStride + yb;
        if (fy[By] - Zy[By] < Uy) return {
          index: By,
          needed: Uy
        };
        const Ky = cb[By];
        Ky && Wy.cover(Ky, Py[By] + Uy) && (oy = !0)
      }
      return oy && tZ(yb, Wy, Uy), yb.fitInstances = bb, null
    }
    var Nf = Wy(36475),
      zZ = Wy(36513);
    const If = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      xZ = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Af = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      df = `((vertexInputs.aPackedLightLevels >> 16u) | ${Pb.c.placed}u)`,
      yc = "u32(vertexInputs.aShaderPackItem.x)",
      bc = `${Pb.c.lifeform}u`;

    function WZ(yb) {
      return "item" === yb.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const UZ = "bloxdSpEnchant",
      hZ = "floor(finalWorld[3].xyz)";

    function fZ(yb, bb, Wy) {
      return "placed" === bb.kind && yb.reads[Wy].includes("bloxdFragmentBlockPosition")
    }

    function ZZ(yb, bb) {
      let [Wy, Uy] = yb;
      return Wy === bb.point && Uy === bb.code
    }

    function cc(yb, bb) {
      var Wy, Uy, hy;
      const fy = null === (Wy = yb.find((yb => yb.texture))) || void 0 === Wy ? void 0 : Wy.texture,
        Zy = null === (Uy = yb.find((yb => yb.enchantTier))) || void 0 === Uy ? void 0 : Uy.enchantTier,
        cb = null === (hy = yb.find((yb => yb.overlay))) || void 0 === hy ? void 0 : hy.overlay,
        Py = cb ? bb.filter((yb => ZZ(yb, cb))).length : 0;
      return cb && 1 === Py ? {
        texture: fy,
        overlay: cb,
        enchantTier: Zy
      } : {
        texture: fy,
        enchantTier: Zy
      }
    }

    function PZ(yb) {
      if ("item" === yb.kind) {
        return {
          vertexFlags: `(${yc} & 0xffffu)`,
          varying: "vPackItem",
          value: yc,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return yb.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: df,
        varying: "vPackFlags",
        value: df,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function oZ(yb) {
      return "lifeform" === yb.kind ? bc : "0u"
    }

    function BZ(yb) {
      return !!yb.BLOXD_PLUGIN_ENCHANTMENT
    }

    function KZ(yb, bb) {
      const {
        enchantTier: Wy
      } = bb;
      return Wy && BZ(bb.defines) && "lifeform" === bb.kind && lZ(yb, "enchantTier") ? Wy : null
    }

    function eZ(yb, bb) {
      return BZ(bb.defines) && lZ(yb, "enchantSpeed")
    }

    function qc(yb) {
      const {
        overlay: bb,
        defines: Wy
      } = yb;
      if (!bb || !Wy.DIFFUSE) return null;
      const Uy = Wy.VERTEXCOLOR || Wy.INSTANCESCOLOR && Wy.INSTANCES;
      return `vec4f(${bb.colour}.rgb * uniforms.vDiffuseInfos.y${Uy?" * fragmentInputs.vColor.rgb":""}, ${bb.colour}.a)`
    }
    const sZ = "fragmentInputs.vPackTexture";

    function SZ(yb) {
      const {
        atlas: bb,
        defines: Wy,
        texture: Uy
      } = yb;
      if (bb || !Wy.DIFFUSE) return null;
      if (Uy) return {
        texture: "diffuseSampler",
        ...Uy
      };
      const hy = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Wy.DIFFUSEDIRECTUV?"vMainUV1":2===Wy.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== yb.kind) return hy;
      if (!Wy.BLOXD_PLUGIN_ANIMATED) return {
        ...hy,
        id: sZ
      };
      const fy = Jy.b.WGSL,
        Zy = (0, Jy.zb)(fy, "uAnimStatesNum"),
        cb = (0, Jy.eb)(fy, (0, Nf.d)(fy), Zy),
        Py = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${Zy})`,
        layers: [cb],
        uv: `vec2f(${Py}.x, ${Py}.y * ${Zy} - ${cb})`,
        levelUv: Py,
        id: sZ
      }
    }

    function EZ(yb, bb) {
      return "box" === bb.kind && !!yb.hooks.surface && null !== SZ(bb)
    }

    function lZ(yb, bb) {
      return yb.reads.fragment.includes(bb)
    }

    function mc(yb) {
      return !!yb.BLOXD_LIGHTING && !yb.BLOXD_UNLIT
    }

    function CZ(yb, bb, Wy, Uy) {
      const hy = yb.filter((yb => {
        let [Wy, Uy] = yb;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Wy && Uy === bb
      }));
      if (1 !== hy.length) throw new Error(`A model program for shader packs has ${0===hy.length?"no":"more than one"} ${Uy} code before fog (lite/modelShaderPack.ts)`);
      return yb.map((yb => yb === hy[0] ? [yb[0], Wy] : yb))
    }

    function TZ(yb, bb, Wy, Uy) {
      const {
        hooks: hy
      } = yb, {
        kind: fy,
        defines: Zy
      } = bb, cb = [...Wy];
      var Py;
      bb.atlas && hy.surface && cb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", DW("atlasIdxIn")]), "item" === fy && cb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Jy.f)(Jy.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), EZ(yb, bb) && cb.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Jy.f)(Jy.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Py = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${QW}[min(u32(${Py}) - 1u, arrayLength(&${QW}) - 1u)], ${Py} > 0.5);\n`)]);
      const oy = PZ(bb);
      oy && (hy.surface || hy.light) && cb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${oy.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${oy.varying} = ${oy.value};`]);
      let By = Uy;
      if (fZ(yb, bb, "fragment") && (cb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${hZ});`]), By = [...By, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), lZ(yb, "localPosition") && cb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${WZ(bb)};`]), BZ(Zy) && hy.surface) {
        eZ(yb, bb) && cb.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Wy = KZ(yb, bb);
        Wy && cb.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Wy});`]);
        const Uy = (0, Jy.pb)(Jy.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        By = [...CZ(By, (0, zZ.g)(Jy.b.WGSL), Uy, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, zZ.b)(UZ)]]
      }
      const {
        overlay: Ky
      } = bb;
      Ky && qc(bb) && hy.surface && (By = By.filter((yb => !ZZ(yb, Ky))));
      const ey = hy.light ? function(yb) {
        return "placed" === yb.kind ? {
          name: "terrain",
          engine: (0, gW.Q)(Jy.b.WGSL),
          pack: (0, gW.eb)(Jy.b.WGSL)
        } : yb.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, gW.N)(Jy.b.WGSL),
          pack: (0, gW.ab)(Jy.b.WGSL)
        } : null
      }(bb) : null;
      if (ey && (By = CZ(By, ey.engine, ey.pack, `${ey.name} light`), "placed" !== fy && mc(Zy))) {
        const yb = Zy.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Jy.zb)(Jy.b.WGSL, "uEntityLightLevels") : (0, Jy.Fb)(Jy.b.WGSL, "aLightLevels");
        cb.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${gW.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, gW.cb)(Jy.b.WGSL, yb)])
      }
      return {
        vertexCode: cb,
        fragmentCode: By
      }
    }

    function VZ(yb, bb, Wy, Uy) {
      return uW(yb, bb, Wy, Uy, "model")
    }
    const JZ = "\t@builtin(position) position: vec4f,\n";

    function gc(yb, bb) {
      const Wy = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(yb)[0];
      return `${Wy}${bb}${yb.slice(Wy.length)}`
    }

    function GZ(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: hy
      } = bb, fy = HW(bb, Uy), {
        kind: Zy,
        defines: cb
      } = Wy, Py = function(yb, bb) {
        var Wy, Uy, hy;
        const {
          defines: fy
        } = bb, Zy = PZ(bb), cb = !!fy.FOG, Py = BZ(fy), oy = null !== (Wy = null === Zy || void 0 === Zy ? void 0 : Zy.enchantTier) && void 0 !== Wy ? Wy : KZ(yb, bb) ? "fragmentInputs.vPackEnchantTier" : "0u", By = "lifeform" === bb.kind && !fy.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Uy = null === Zy || void 0 === Zy ? void 0 : Zy.vertexFlags) && void 0 !== Uy ? Uy : oZ(bb),
          vertexLocalPosition: WZ(bb),
          flags: null !== (hy = null === Zy || void 0 === Zy ? void 0 : Zy.flags) && void 0 !== hy ? hy : oZ(bb),
          normal: "normalW",
          alpha: By ? "alpha * baseColor.a" : "alpha",
          alphaOut: By ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: cb ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: cb ? "1.0 - fog" : "0.0",
          enchantTier: oy,
          enchantColour: Py ? `${UZ}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: eZ(yb, bb) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: lZ(yb, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: qc(bb)
        }
      }(bb, Wy), oy = yb.textures.filter((yb => /^textureAtlas\d+$/.test(yb.name))).length, By = Wy.atlas && oy > 0 ? {
        count: oy,
        layers: Wy.atlas.layers,
        width: Wy.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: yb.material.slots.has("uAnimDataPerTex") ? (bb, Wy) => RU(bb, Wy, function(yb) {
          const bb = yb.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Zb: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: yb => `uniforms.uAnimDataPerTex[${yb}]${bb}`
          }
        }(yb)) : null
      } : null, Ky = "placed" === Zy ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", ey = null !== By && void 0 !== By ? By : SZ(Wy), qb = function(yb, Wy) {
        let Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Rb.D)()}${FW(bb,Wy)}${Uy}${wW(yb)}${YW}${Ky}${bb.code}`
      };
      let {
        vertex: sy,
        fragment: Sy
      } = yb;
      const Ey = NW(hy, Py);
      if (Ey) {
        const yb = fZ(bb, Wy, "vertex") ? `\tbloxdSpCell = ${hZ};\n` : "";
        sy = VZ(sy, If, `${yb}${Ey.slice(1)}${If}`, "vertex")
      }
      const ly = `${pW(bb,fy,function(yb,bb){return bb.TWOSIDEDLIGHTING?yb:`select(-(${yb}), ${yb}, fragmentInputs.frontFacing)`}(Py.normal,cb),Py.flags)}${zU(hy,bb.strict,bb.program,ey,Py)}`;
      ly && (Sy = VZ(Sy, xZ, `${ly.slice(1)}${xZ}`, "surface")), fy && bb.sunShadow && !cb.TWOSIDEDLIGHTING && (Sy = VZ(Sy, JZ, `${JZ}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const mb = AW(hy);
      if (mb) {
        const yb = xU(hy, mc(cb), !0, Py);
        Sy = VZ(Sy, Af, `${yb}${mb.slice(1)}${Af}`, "light")
      }
      const Cy = EZ(bb, Wy) ? jU : "";
      return {
        ...yb,
        vertex: gc(sy, qb(By, !1, Cy)),
        fragment: gc(Sy, qb(ey, fy))
      }
    }
    const OZ = {
      name: "earthSky",
      uniqueId: -1
    };
    class RZ {
      constructor(yb) {
        this.resources = yb, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const yb of this.instances.values()) yb.released = !0, this.resources.destroyBuffer(yb.buffer);
        this.instances.clear()
      }
    }

    function vc(yb) {
      return yb.failed && null !== yb.packGroup
    }
    class ic {
      constructor(yb, bb, Wy) {
        this.device = yb, this.resources = bb, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.ycy = new Mf, this.modelMeshes = new iZ, this.thinBundle = void 0, this.binder = new Ih, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new lf((yb => this.modelSlot(yb).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, ob.e)("Lite: "), this.renderStates = new ef(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (yb, bb) => this.keepSteady(yb, bb), this.lists = new xf(this.modelMeshes, this.ycy, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new Pf(bb, this.warnOnce, ((yb, bb, Wy) => this.programWithModel(yb, bb, Wy)), vc), this.vertexLayouts = new Vf(bb, yb.limits, this.warnOnce), this.sceneLayout = bW(yb), this.frameLayout = yb.createBindGroupLayout({
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
        }), this.frameBuffer = yb.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Gf(yb, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = yb.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new nf(yb, new Gf(yb, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (yb, bb, Wy) => this.pipelineFor(yb, bb, Wy),
          pipelineCompiling: (yb, bb) => !yb.program.failed && !1 !== this.pipelines.get(`${yb.pipelineKey}|${bb}`),
          sceneGroup: yb => {
            const bb = Wy(yb);
            return bb || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), bb
          }
        }), bb.onDestroy = yb => {
          this.thinBundle.resourceDestroyed(yb)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const hy = {
          order: yb,
          isTransparent: bb,
          _direct: !bb,
          bind: (yb, bb) => this.createBinding(hy, bb, Wy, Uy)
        };
        return hy
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(yb, bb, Wy) {
        var Uy;
        let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = bb, this.drawDefines.view = bb, this.thinBundle.Jm(), this.writeFrameUniforms();
        const fy = null !== (Uy = null === hy || void 0 === hy ? void 0 : hy.defineFor("model")) && void 0 !== Uy ? Uy : 0;
        this.drawDefines.modelPackVariant = fy, hy && 0 !== fy && (this.packInputs ??= new Df(this.device, hy.textureLayers(), this.sunShadow), this.packInputs.write(hy, bb.eye, hy.Uf())), this.lists.clear(), this.slotCount = 0;
        const Zy = yb.activeCamera;
        this.ycy.select(Zy, this.keepSteadyBase), this.modelMeshes.select(Zy, bb), Wy && this.pushEarthSky(Wy), this.lists.collect(yb), this.thinBundle.gC(), this.uploadMeshSlots()
      }
      pushDraws(yb, bb, Wy, Uy, hy, fy) {
        let Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const cb = fy.length;
        for (let Py = 0; Py < Wy; Py++) {
          const Wy = bb[Py];
          let cb = this.retainedDraw(yb, Wy, Uy, hy);
          if (void 0 === cb && (cb = this.drawFor(yb, Wy, Uy, hy), this.retain(Wy, cb)), cb) {
            const yb = Wy.owner,
              bb = Zy ? Zy[Py] : -1;
            cb.slotOffset = bb < 0 ? this.writeMeshSlot(yb.getWorldMatrix().m, yb.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[bb], 16 * bb), fy.push(cb)
          }
        }
        return fy.length - cb
      }
      bundleDraws(yb, bb, Wy) {
        let Uy = 0;
        for (const hy of bb) {
          let bb = this.retainedDraw(yb, hy, Wy, !1);
          const fy = void 0 !== bb;
          if (void 0 === bb && (bb = this.drawFor(yb, hy, Wy, !1), this.retain(hy, bb)), bb) {
            const yb = hy.owner,
              Wy = this.thinBundle.add(hy, bb, yb.getWorldMatrix().m, yb.visibility);
            fy && this.steadyFrom(hy, bb, Wy), Uy++
          }
        }
        return Uy
      }
      steadyFrom(yb, bb, Wy) {
        const Uy = yb.owner,
          hy = this.ycy.base(Uy),
          fy = Uy.material,
          {
            drawState: Zy,
            instance: cb
          } = bb.inputs.retained;
        if (!hy || !fy || 1 !== yb.parts.materials.length || Rf(yb) !== fy) return;
        const Py = hy.steady ??= {
          unit: yb,
          material: fy,
          visibility: 1,
          draw: bb,
          record: Wy,
          drawState: Zy,
          instance: cb,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Py.unit = yb, Py.material = fy, Py.visibility = Uy.visibility, Py.draw = bb, Py.record = Wy, Py.drawState = Zy, Py.instance = cb, Py.bindGroup = cb.bindGroup, Py.gpuVersion = this.resources.gpuBuffersVersion, Py.fitInstances = bb.inputs.fitInstances, Py.worldFlag = Uy.getWorldMatrix().updateFlag, Py.handedFrame = this.frame
      }
      keepSteady(yb, bb) {
        const Wy = yb.steady;
        if (Wy.handedFrame !== this.frame - 1 || (this.frame + Wy.phase) % 8 === 0) return !1;
        const Uy = yb.mesh,
          {
            unit: hy,
            draw: fy,
            instance: Zy,
            drawState: cb
          } = Wy,
          Py = Uy.forcedInstanceCount || Uy.ZZy;
        if (!Uy.isVisible || Uy.NBy || Uy.visibility !== Wy.visibility || 0 === (Uy.layerMask & bb.layerMask) || Uy.material !== Wy.material || 0 !== Uy.renderingGroupId || Uy.hasVertexAlpha || !this.drawDefines.definesHold(cb, hy, cb.instancing) || Wy.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(fy.inputs, hy, cb.instancing, fy.program) || fy.program.failed || Zy.released || Py <= 0 || Py > Wy.fitInstances) return !1;
        if (Zy.frame !== this.frame && this.bindMaterial(Zy, this.modelUniforms.refreshModelUniforms(Uy.kWy(), Zy, Zy.model, this.view)), !Zy.bindable || Zy.bindGroup !== Wy.bindGroup) return !1;
        const oy = Uy.computeWorldMatrix(),
          By = oy.updateFlag !== Wy.worldFlag;
        return Wy.worldFlag = oy.updateFlag, fy.instances = Py, this.thinBundle.addAgain(Wy.record, fy, By ? oy.m : null, Wy.visibility), Wy.handedFrame = this.frame, this.ycy.drawn++, !0
      }
      retainedDraw(yb, bb, Wy, Uy) {
        const hy = this.inputs.get(bb),
          fy = null === hy || void 0 === hy ? void 0 : hy.retained;
        if (!hy || !fy) return;
        const {
          drawState: Zy,
          program: cb,
          instance: Py,
          instancing: oy
        } = fy, By = bb.owner;
        if (Wf(By) !== oy) return;
        const Ky = this.instanceCount(By, oy);
        if (Ky <= 0) return null;
        if (Py.released || cb.failed || Zy.program !== cb || !this.drawDefines.programCurrent(Zy, bb, oy, Wy) || !this.inputsStamped(hy, bb, oy, cb) || By.isUnIndexed !== fy.unIndexed || this.indexKey(bb) !== fy.indexData) return;
        if (fy.indexBuffer && fy.gpuVersion !== this.resources.gpuBuffersVersion) {
          const yb = this.resources.gpuBuffer(fy.indexData);
          if (!yb) return;
          fy.indexBuffer = yb, fy.gpuVersion = this.resources.gpuBuffersVersion
        }
        let ey = !1;
        if (Py.frame !== this.frame && (ey = this.modelUniforms.refreshModelUniforms(yb, Py, Py.model, this.view)), !this.bindMaterial(Py, ey) || !this.withGpuBuffers(hy) || !this.instanceBuffersFit(By.name, hy, Ky)) return null;
        const qb = this.makeDraw(cb, hy, this.renderStates.renderState(Zy.model, By, Uy, hy.state), Py, Ky);
        return this.setRange(qb, bb, fy.indexBuffer, fy.indexData), qb
      }
      retain(yb, bb) {
        const Wy = this.drawDefines.drawStates.get(yb);
        if (!bb || !Wy || Wy.program !== bb.program) {
          const bb = this.inputs.get(yb);
          return void(bb && (bb.retained = null))
        }
        const Uy = yb.owner,
          hy = Wy.instancing,
          fy = this.indexKey(yb),
          Zy = bb.inputs.retained;
        Zy ? (Zy.drawState = Wy, Zy.instancing = hy, Zy.program = bb.program, Zy.instance = bb.material, Zy.indexData = fy, Zy.unIndexed = Uy.isUnIndexed, Zy.indexBuffer = bb.indexBuffer, Zy.gpuVersion = this.resources.gpuBuffersVersion) : bb.inputs.retained = {
          drawState: Wy,
          instancing: hy,
          program: bb.program,
          instance: bb.material,
          indexData: fy,
          unIndexed: Uy.isUnIndexed,
          indexBuffer: bb.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(yb, bb, Wy, Uy) {
        const hy = bb.owner,
          fy = Rf(bb);
        if (!fy) return null;
        const Zy = fy.getClassName();
        let cb = null;
        if (function(yb) {
            return "LinesMesh" === yb.getClassName()
          }(hy)) {
          if (! function(yb) {
              return "ShaderMaterial" === yb.getClassName() && "color" === yb.shaderPath
            }(fy)) return this.warnOnce(`lines:${Zy}`, `A LinesMesh with a ${Zy} is not drawn yet (${fy.name})`), null;
          cb = hy
        } else if ("StandardMaterial" !== Zy && "LiteMaterial" !== Zy) return this.warnOnce(`class:${Zy}`, `${Zy} is not drawn yet (${fy.name})`), null;
        const Py = Wf(hy),
          oy = this.instanceCount(hy, Py);
        if (oy <= 0) return null;
        const By = cb ? this.lineProgramFor(hy, Wy, Py) : this.drawDefines.programFor(yb, bb, fy, Wy, Py);
        if (!By || By.failed) return null;
        const Ky = cb ? null : this.drawDefines.drawStates.get(bb).model,
          ey = Ky ? this.modelInstance(Ky, By) : this.materialInstance(hy, By);
        let qb = !1;
        if (ey.frame !== this.frame && (cb ? mb(ey.ubo, cb) : qb = this.modelUniforms.refreshModelUniforms(yb, ey, ey.model, this.view)), !this.bindMaterial(ey, qb)) return null;
        const sy = this.meshInputs(bb, By, Py);
        if (!sy || !this.instanceBuffersFit(hy.name, sy, oy)) return null;
        const Sy = this.indexKey(bb);
        let Ey = null;
        if (Sy && !hy.isUnIndexed && (Ey = this.resources.gpuBuffer(Sy), !Ey)) return null;
        const ly = this.renderStates.renderState(null !== Ky && void 0 !== Ky ? Ky : fy, hy, Uy, sy.state, cb ? "line-list" : "triangle-list"),
          Cy = this.makeDraw(By, sy, ly, ey, oy);
        return this.setRange(Cy, bb, Ey, Sy), Cy
      }
      indexKey(yb) {
        const bb = Zf(yb);
        return bb ? this.resources.modelIndex(bb) : null
      }
      setRange(yb, bb, Wy, Uy) {
        Wy && (yb.indexBuffer = Wy, yb.indexFormat = this.resources.indexFormat(Uy));
        const hy = 4 * bb.range + (Wy ? 0 : 2);
        yb.unit = bb, yb.first = bb.parts.lZ[hy], yb.count = bb.parts.lZ[hy + 1]
      }
      makeDraw(yb, bb, Wy, Uy, hy) {
        bb.state !== Wy && (bb.state = Wy, bb.pipelineKey = `${yb.id}|${bb.layout.key}|${Wy.key}`, bb.pipeline = null);
        const fy = bb.draw ??= {
          program: yb,
          inputs: bb,
          pipelineKey: "",
          layout: bb.layout,
          state: Wy,
          material: Uy,
          slotOffset: 0,
          vertexBuffers: bb.buffers,
          vertexOffsets: bb.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: hy,
          unit: null
        };
        return fy.program = yb, fy.pipelineKey = bb.pipelineKey, fy.state = Wy, fy.material = Uy, fy.vertexOffsets = bb.offsets, fy.indexBuffer = null, fy.instances = hy, fy
      }
      instanceCount(yb, bb) {
        switch (bb) {
          case "thin":
            return yb.forcedInstanceCount || yb.ZZy;
          case "instanced":
            return this.prepareInstances(yb);
          case "none":
            return 1
        }
      }
      prepareInstances(yb) {
        const bb = function(yb, bb) {
          const Wy = bb._userInstancedBuffersStorage,
            Uy = yb.batchUploads.get(bb);
          if (Uy) {
            var hy;
            if (Uy.layout === (null !== (hy = null === Wy || void 0 === Wy ? void 0 : Wy.interleavedKinds) && void 0 !== hy ? hy : null)) return Uy;
            Uy.release()
          }
          return new wy(yb, bb, Wy)
        }(this.resources, yb);
        return bb.frame !== this.frame && bb.pack(yb, this.modelMeshes.instanceBatch(yb), this.modelMeshes.worlds, this.frame), bb.count
      }
      programWithModel(yb, bb, Wy) {
        const Uy = this.modelSlot(yb),
          hy = of(Uy, yb, Wy),
          fy = this.drawDefines.modelPackKind(yb),
          Zy = fy ? function(yb, bb, Wy, Uy) {
            const hy = (0, Oy.x)(yb, gb.j.name),
              fy = [];
            for (const {
                feature: Py,
                state: oy,
                active: By
              }
              of yb.features) {
              var Zy, cb;
              const yb = By ? null === (Zy = (cb = (0, Bb.g)(Py)).eU) || void 0 === Zy ? void 0 : Zy.call(cb, oy) : void 0;
              yb && fy.push(yb)
            }
            return {
              kind: bb,
              atlas: null !== hy && void 0 !== hy && hy.active ? (0, gb.d)(hy.state) : null,
              defines: Wy,
              ...cc(fy, Uy)
            }
          }(yb, fy, bb, Uy.fragmentCode) : null;
        if (Zy && function(yb) {
            const bb = yb.defines;
            return (null === yb.atlas || !!bb.DIFFUSE && 1 === bb.DIFFUSEDIRECTUV) && !!bb.NORMAL && !bb.REFLECTION && !bb.EMISSIVEASILLUMINATION && !bb.LINKEMISSIVEWITHDIFFUSE
          }(Zy)) {
          const Wy = this.modelPackProgram(yb, bb, `${hy}#${fy}#sp${this.drawDefines.modelPackVariant}`, Uy, Zy);
          if (Wy && !Wy.failed) return Wy
        }
        const cb = this.programs.get(hy);
        if (cb || this.unbuildable.has(hy)) return null !== cb && void 0 !== cb ? cb : null;
        let Py;
        try {
          Py = Ph({
            defines: hf(bb),
            vertexCode: Uy.vertexCode,
            fragmentCode: Uy.fragmentCode,
            pluginUniforms: Uy.pluginUniforms
          })
        } catch (oy) {
          return this.unbuildable.add(hy), this.warnOnce(`build:${hy}`, `could not build a program for ${yb.name}: ${String(oy)}`), null
        }
        return this.createProgram(hy, Py, "standard")
      }
      modelPackProgram(yb, bb, Wy, Uy, hy) {
        const fy = this.programs.get(Wy);
        if (fy || this.unbuildable.has(Wy)) return null !== fy && void 0 !== fy ? fy : null;
        const Zy = this.drawDefines.modelPackVariant;
        let cb;
        try {
          const yb = function(yb) {
              return (0, vW.c)(yb, "model")
            }(Zy),
            Wy = TZ(yb, hy, Uy.vertexCode, Uy.fragmentCode);
          cb = GZ(Ph({
            defines: hf(bb),
            ...Wy,
            pluginUniforms: Uy.pluginUniforms
          }), yb, hy, !!this.sunShadow)
        } catch (By) {
          return this.unbuildable.add(Wy), this.warnOnce(`build:${Wy}`, `could not build a shader pack program for ${yb.name}, which draws without the pack: ${String(By)}`), null
        }
        const Py = Qf(Zy, !!this.sunShadow),
          oy = {
            group: this.packInputs.bindGroupFor(null, Py),
            layout: pf(this.device, {
              depth: !1,
              sunShadow: Py
            })
          };
        return this.createProgram(Wy, cb, function(yb) {
          return `standard-sp${yb}`
        }(Zy), oy)
      }
      lineProgramFor(yb, bb, Wy) {
        const Uy = ly(yb, Wy, bb, this.view);
        let hy = this.linePrograms.get(Uy);
        var fy;
        return hy || (hy = this.createProgram(`lines#${Uy}`, (fy = function(yb) {
          const bb = new Map;
          for (let Wy = 0; Wy < oy.length; Wy++) yb & 1 << Wy && bb.set(oy[Wy], !0);
          return bb
        }(Uy), eh({
          defines: fy,
          vertex: Bh,
          fragment: Kh,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Uy, hy)), hy
      }
      createProgram(yb, bb, Wy) {
        var Uy;
        let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const fy = this.nextProgramId++,
          Zy = `${Wy}-${fy}`,
          cb = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Py = [{
            binding: 0,
            visibility: cb,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Ky of bb.textures) Py.push({
          binding: Ky.binding,
          visibility: cb,
          texture: {
            viewDimension: Ky.dimension
          }
        }), Py.push({
          binding: Ky.samplerBinding,
          visibility: cb,
          sampler: {}
        });
        const oy = this.device.createBindGroupLayout({
            label: Zy,
            entries: Py
          }),
          By = {
            key: yb,
            id: fy,
            kind: Wy,
            program: bb,
            vertex: this.device.createShaderModule({
              label: `${Zy}-vertex`,
              code: bb.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${Zy}-fragment`,
              code: bb.fragment
            }),
            materialLayout: oy,
            pipelineLayout: this.device.createPipelineLayout({
              label: Zy,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, oy, ...hy ? [hy.layout] : []]
            }),
            packGroup: null !== (Uy = null === hy || void 0 === hy ? void 0 : hy.group) && void 0 !== Uy ? Uy : null,
            failed: !1
          };
        return this.programs.set(yb, By), By
      }
      writeFrameUniforms() {
        const yb = this.frameUniforms;
        Ef(this.view, yb), this.device.queue.writeBuffer(this.frameBuffer, 0, yb)
      }
      materialInstance(yb, bb) {
        let Wy = this.materials.get(yb);
        if (!Wy) {
          const bb = new Map;
          this.materials.set(yb, bb), yb.Nby.addOnce((() => {
            for (const yb of bb.values()) yb.released = !0, this.resources.destroyBuffer(yb.buffer);
            this.materials.delete(yb)
          })), Wy = bb
        }
        let Uy = Wy.get(bb.key);
        return Uy || (Uy = this.newMaterialInstance(yb, null, bb), Wy.set(bb.key, Uy)), Uy
      }
      modelInstance(yb, bb) {
        const Wy = this.modelSlot(yb);
        let Uy = Wy.instances.get(bb.key);
        return Uy || (Uy = this.newMaterialInstance(yb, yb, bb), Wy.instances.set(bb.key, Uy)), Uy
      }
      modelSlot(yb) {
        let bb = yb.gpu[vb.i.lite];
        return bb || (bb = new RZ(this.resources), yb.gpu[vb.i.lite] = bb), bb
      }
      newMaterialInstance(yb, bb, Wy) {
        const Uy = Wy.program.material.floats,
          hy = new Float32Array(Uy),
          fy = new Map;
        return {
          owner: yb,
          model: bb,
          program: Wy,
          data: hy,
          uploaded: new Float32Array(Uy).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${yb.name}-uniforms`,
            size: Math.max(16, 4 * Uy),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: fy,
          ubo: new Sf(Wy.program.material.slots, hy, fy),
          bindGroup: null,
          bound: new Array(2 * Wy.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(yb) {
        var bb;
        const Wy = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: lh + mf,
            fragment: lh + Ch,
            attributes: [],
            material: Eh,
            textures: []
          }, "earthSky"),
          Uy = this.earthSkyUniforms ??= this.newMaterialInstance(OZ, null, Wy);
        this.earthSkyFrom !== yb && (this.earthSkyFrom = yb, Uy.data.fill(0)), vf(Uy.ubo, yb, this.view);
        const hy = this.vertexInputs(Wy, OZ, "earthSky", Wy, null);
        if (Wy.failed || !hy || !this.bindMaterial(Uy, !1)) return;
        const fy = null !== (bb = hy.state) && void 0 !== bb ? bb : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          Zy = this.makeDraw(Wy, hy, fy, Uy, 1);
        Zy.count = qf.length;
        const cb = Mh(yb, this.view);
        Zy.slotOffset = this.writeMeshSlot(cb, 1), this.lists.skyDraws.push(Zy)
      }
      uploadIfChanged(yb) {
        const {
          data: bb,
          uploaded: Wy
        } = yb;
        for (let Uy = 0; Uy < bb.length; Uy++)
          if (bb[Uy] !== Wy[Uy]) return Wy.set(bb), void this.device.queue.writeBuffer(yb.buffer, 0, bb)
      }
      bindMaterial(yb, bb) {
        return yb.frame !== this.frame && (yb.frame = this.frame, bb || this.uploadIfChanged(yb), yb.bindable = this.bindTextures(yb)), yb.bindable
      }
      bindTextures(yb) {
        const {
          program: bb,
          bound: Wy
        } = yb, Uy = bb.program.textures;
        let hy = !yb.bindGroup,
          fy = !0;
        for (let Zy = 0; Zy < Uy.length; Zy++) {
          const bb = yb.textures.get(Uy[Zy].name),
            cb = bb ? this.resources.boundTexture(bb) : null;
          cb ? Wy[2 * Zy] === cb.view && Wy[2 * Zy + 1] === cb.sampler || (Wy[2 * Zy] = cb.view, Wy[2 * Zy + 1] = cb.sampler, hy = !0) : (bb || yb.ubo.expected.has(Uy[Zy].name) || this.warnOnce(`texture:${yb.owner.name}:${Uy[Zy].name}`, `${yb.owner.name} has no ${Uy[Zy].name}`), fy = !1)
        }
        if (!fy) return hy && (yb.bindGroup = null), !1;
        if (hy) {
          const hy = [{
            binding: 0,
            resource: {
              buffer: yb.buffer
            }
          }];
          for (let yb = 0; yb < Uy.length; yb++) hy.push({
            binding: Uy[yb].binding,
            resource: Wy[2 * yb]
          }), hy.push({
            binding: Uy[yb].samplerBinding,
            resource: Wy[2 * yb + 1]
          });
          yb.bindGroup = this.device.createBindGroup({
            label: `${yb.owner.name}-material`,
            layout: bb.materialLayout,
            entries: hy
          })
        }
        return !0
      }
      writeMeshSlot(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, yb, bb, Wy), this.slotCount++ * QU
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(yb, bb, Wy, Uy, hy) {
        let fy = this.inputs.get(yb);
        if (!fy || fy.program !== Uy || !Jf(bb, fy, this.resources, hy)) {
          var Zy;
          if (fy = null !== (Zy = this.vertexLayouts.resolveInputs(bb, Wy, Uy, hy)) && void 0 !== Zy ? Zy : void 0, !fy) return null;
          this.inputs.set(yb, fy)
        }
        return this.withGpuBuffers(fy)
      }
      meshInputs(yb, bb, Wy) {
        const Uy = this.inputs.get(yb);
        if (Uy && this.inputsStamped(Uy, yb, Wy, bb)) return this.withGpuBuffers(Uy);
        const hy = yb.owner,
          fy = Zf(yb),
          Zy = this.vertexInputs(yb, hy, hy.name, bb, fy);
        return Zy && (Zy.geometry = cZ(yb), Zy.instanceLayout = this.drawDefines.instanceLayout(hy, Wy)), Zy
      }
      inputsStamped(yb, bb, Wy, Uy) {
        return function(yb, bb, Wy, Uy) {
          return yb.program === Wy && yb.geometry === cZ(bb) && yb.instanceLayout === Uy
        }(yb, bb, Uy, this.drawDefines.instanceLayout(bb.owner, Wy))
      }
      withGpuBuffers(yb) {
        return tZ(yb, this.resources, this.zeroBuffer) ? yb : null
      }
      instanceBuffersFit(yb, bb, Wy) {
        const Uy = kZ(bb, Wy, this.resources, this.zeroBuffer);
        if (Uy) {
          const hy = bb.ends[Uy.index] - bb.offsets[Uy.index] + bb.UZy[Uy.index];
          return this.warnOnce(`overrun:${yb}`, `${yb} draws ${Wy} instances from a ${hy}-byte buffer (${Uy.needed} needed)`), !1
        }
        return !0
      }
      createBinding(yb, bb, Wy, Uy) {
        const hy = `${bb._colorFormat}|${bb._depthStencilFormat}|${bb._depthCompare}|${bb._sampleCount}`,
          fy = Zb(this.device, bb);
        if (yb === this.skyLastRenderable) {
          let Wy = null;
          return {
            renderable: yb,
            pipeline: fy,
            draw: yb => Wy ? this.drawSky(yb, bb, hy, Wy) : 0,
            update: yb => {
              Wy = yb
            }
          }
        }
        return {
          renderable: yb,
          pipeline: fy,
          draw: yb => (Uy ? Uy.execute(yb, bb, hy) : 0) + this.drawList(yb, bb, hy, Wy)
        }
      }
      drawSky(yb, bb, Wy, Uy) {
        const hy = this.lists.skyDraws,
          fy = hy.length > 0;
        if (fy) {
          var Zy;
          const Wy = (null !== (Zy = bb._depthCompare) && void 0 !== Zy ? Zy : Wb).startsWith("greater") ? 0 : 1;
          yb.setViewport(0, 0, Uy.targetWidth, Uy.targetHeight, Wy, Wy)
        }
        const cb = this.drawList(yb, bb, Wy, hy);
        return fy && yb.setViewport(0, 0, Uy.targetWidth, Uy.targetHeight, 0, 1), cb
      }
      drawList(yb, bb, Wy, Uy) {
        let hy = 0;
        const fy = this.binder;
        fy.reset();
        for (const Zy of Uy) {
          const Uy = this.pipelineFor(Zy, bb, Wy);
          Uy && (fy.bind(yb, Zy, Uy, this.meshSlots.bindGroup, Zy.slotOffset), Zy.indexBuffer ? yb.drawIndexed(Zy.count, Zy.instances, Zy.first, 0, 0) : yb.draw(Zy.count, Zy.instances, Zy.first, 0), hy++)
        }
        return hy
      }
      pipelineFor(yb, bb, Wy) {
        var Uy, hy;
        if (yb.program.failed) return null;
        const fy = yb.inputs;
        if (fy.pipeline && fy.pipelineTarget === Wy) return fy.pipeline;
        const Zy = `${yb.pipelineKey}|${Wy}`,
          cb = this.pipelines.get(Zy);
        if (void 0 !== cb) return cb && (fy.pipeline = cb, fy.pipelineTarget = Wy), cb || null;
        this.pipelines.set(Zy, null);
        const {
          program: Py,
          layout: oy,
          state: By
        } = yb, Ky = {
          label: `standard-${Py.id}`,
          layout: Py.pipelineLayout,
          vertex: {
            module: Py.vertex,
            entryPoint: "main",
            buffers: oy.buffers
          },
          fragment: xb({
            module: Py.fragment,
            entryPoint: "main"
          }, bb, By.blend, By.colourWrite),
          depthStencil: bb._depthStencilFormat ? {
            format: bb._depthStencilFormat,
            depthCompare: null !== (Uy = null !== (hy = By.depthCompare) && void 0 !== hy ? hy : bb._depthCompare) && void 0 !== Uy ? Uy : Wb,
            depthWriteEnabled: By.depthWrite,
            depthBias: By.depthBias,
            depthBiasSlopeScale: By.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: bb._sampleCount
          },
          primitive: {
            topology: By.topology,
            frontFace: By.frontFace,
            cullMode: By.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Ky).then((yb => {
          this.compiling--, this.pipelines.set(Zy, yb)
        }), (yb => {
          this.compiling--, this.reportFailure(Py, Zy, yb)
        })), null
      }
      forEachSunShadowCaster(yb) {
        const bb = this.caster,
          Wy = (Wy, Uy, hy) => {
            const fy = Wy.unit && function(yb) {
              const bb = yb.material.model;
              return null !== bb && (bb.lifeform || bb.item) && bb.castsSunShadow && "triangle-list" === yb.state.topology
            }(Wy) ? Zf(Wy.unit) : null;
            if (!fy) return;
            const Zy = Wy.unit.owner;
            switch (bb.geometry = fy, bb.skip = Zy.noSunShadowVertices, bb.indexed = null !== Wy.indexBuffer, bb.first = Wy.first, bb.count = Wy.count, bb.Kb = Uy, bb.worldAt = hy, bb.instances = null, bb.instanceCount = 1, bb.thin = !1, Wf(Zy)) {
              case "thin": {
                const yb = Zy._thinInstanceDataStorage.matrixData;
                if (!yb) return;
                bb.instances = yb, bb.instanceCount = Math.min(Wy.instances, yb.length / 16), bb.thin = !0;
                break
              }
              case "instanced": {
                const yb = this.resources.batchUploads.get(Zy);
                if (!yb || yb.frame !== this.frame || !this.writeBatchCasters(yb)) return;
                break
              }
            }
            yb(bb)
          };
        for (const Uy of this.lists.opaqueDraws) Wy(Uy, this.meshSlots.data, Uy.slotOffset / 4);
        this.thinBundle.forEachDrawn(Wy)
      }
      writeBatchCasters(yb) {
        const {
          caster: bb
        } = this, Wy = yb.packedMatrices, Uy = yb.count;
        bb.instances = Wy, bb.instanceCount = Uy;
        let hy = -1;
        for (let fy = 0; fy < Uy; fy++) {
          const bb = MZ(yb.packedRowMesh(fy));
          bb && hy < 0 ? (this.casterWorlds.length < 16 * Uy && (this.casterWorlds = new Float32Array(Wy.length)), this.casterWorlds.set(Wy.subarray(0, 16 * fy)), hy = fy) : !bb && hy >= 0 && (this.casterWorlds.set(Wy.subarray(16 * fy, 16 * fy + 16), 16 * hy), hy++)
        }
        return hy >= 0 && (bb.instances = this.casterWorlds, bb.instanceCount = hy), bb.instanceCount > 0
      }
      async reportFailure(yb, bb, Wy) {
        const Uy = [];
        let hy = !0;
        for (const [fy, Zy] of [
            ["vertex", yb.vertex],
            ["fragment", yb.fragment]
          ]) {
          const yb = await Zy.getCompilationInfo();
          for (const bb of yb.messages) hy &&= "error" !== bb.type, Uy.push(`${fy}:${bb.lineNum}:${bb.linePos} ${bb.type}: ${bb.message}`)
        }
        if (hy && !yb.packGroup) return this.pipelines.set(bb, !1), console.error(`Lite: pipeline ${bb} failed`, Wy), void zf("mesh", yb.kind, Wy);
        yb.failed || (yb.failed = !0, console.error(`Lite: program ${yb.id} failed`, Wy, Uy.join("\n"), {
          program: yb.program,
          key: yb.key
        }), zf("mesh", yb.kind, Wy, hy ? null : Uy[0]))
      }
    }

    function MZ(yb) {
      var bb, Wy;
      const Uy = null === (bb = yb.BWy) || void 0 === bb || null === (Wy = bb.aShaderPackItem) || void 0 === Wy ? void 0 : Wy.x;
      return void 0 !== Uy && 0 !== (Uy & Pb.i)
    }
    var YZ = Wy(40160),
      XZ = Wy(40166),
      nZ = Wy(40170),
      uZ = Wy(40115);
    const rc = [0, 3, 1, 4, 2, 5];

    function HZ(yb, bb, Wy, Uy, hy) {
      const fy = Wy[0].width;
      try {
        return hy ? function(yb, bb, Wy) {
          const Uy = (0, uZ.b)(yb, Wy, Wy, 6);
          for (let hy = 0; hy < 6; hy++)(0, uZ.e)(yb, Uy, hy, bb[rc[hy]], {
            invertY: !1
          });
          return Uy.texture
        }(yb, Wy, fy) : function(yb, bb, Wy, Uy) {
          const hy = yb.createTexture({
            label: "sink-cube",
            size: {
              width: Wy,
              height: Wy,
              depthOrArrayLayers: 6
            },
            format: Uy,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let fy = 0; fy < 6; fy++) yb.queue.copyExternalImageToTexture({
            source: bb[rc[fy]]
          }, {
            texture: hy,
            origin: {
              x: 0,
              y: 0,
              z: fy
            }
          }, {
            width: Wy,
            height: Wy
          });
          return hy
        }(bb, Wy, fy, 1 === Uy ? "r8unorm" : "rgba8unorm")
      } finally {
        ac(Wy)
      }
    }

    function ac(yb) {
      for (const bb of null !== yb && void 0 !== yb ? yb : []) null === bb || void 0 === bb || bb.close()
    }
    async function FZ(yb) {
      const bb = [],
        Wy = [];
      if (await Promise.all(yb.map(((yb, Uy) => (bb[Uy] = null, yb.then((yb => {
          bb[Uy] = yb
        }), (yb => {
          Wy.push(yb)
        })))))), Wy.length > 0) throw ac(bb), Wy[0];
      return bb
    }
    class pZ {
      constructor(yb) {
        this.Hy = yb, this.starts = [], this.lengths = [], this.used = 0, yb > 0 && (this.starts.push(0), this.lengths.push(yb))
      }
      allocate(yb) {
        const {
          starts: bb,
          lengths: Wy
        } = this;
        for (let Uy = 0; Uy < bb.length; Uy++) {
          if (Wy[Uy] < yb) continue;
          const hy = bb[Uy];
          return Wy[Uy] === yb ? (bb.splice(Uy, 1), Wy.splice(Uy, 1)) : (bb[Uy] += yb, Wy[Uy] -= yb), this.used += yb, hy
        }
        return -1
      }
      free(yb, bb) {
        this.used -= bb;
        const Wy = Math.min(yb + bb, this.Hy);
        Wy > yb && this.release(yb, Wy - yb)
      }
      grow(yb) {
        const bb = this.Hy;
        this.Hy = yb, this.release(bb, yb - bb)
      }
      truncate(yb) {
        const {
          starts: bb,
          lengths: Wy
        } = this;
        for (let Uy = bb.length - 1; Uy >= 0 && bb[Uy] + Wy[Uy] > yb; Uy--) bb[Uy] >= yb ? (bb.splice(Uy, 1), Wy.splice(Uy, 1)) : Wy[Uy] = yb - bb[Uy];
        this.Hy = yb
      }
      release(yb, bb) {
        const {
          starts: Wy,
          lengths: Uy
        } = this;
        let hy = 0,
          fy = Wy.length;
        for (; hy < fy;) {
          const bb = hy + fy >> 1;
          Wy[bb] < yb ? hy = bb + 1 : fy = bb
        }
        const Zy = hy,
          cb = Zy > 0 && Wy[Zy - 1] + Uy[Zy - 1] === yb,
          Py = Zy < Wy.length && yb + bb === Wy[Zy];
        cb && Py ? (Uy[Zy - 1] += bb + Uy[Zy], Wy.splice(Zy, 1), Uy.splice(Zy, 1)) : cb ? Uy[Zy - 1] += bb : Py ? (Wy[Zy] = yb, Uy[Zy] += bb) : (Wy.splice(Zy, 0, yb), Uy.splice(Zy, 0, bb))
      }
    }
    const LZ = 256;
    class QZ {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = yb, this.onReplaced = bb, this.mergeGap = Wy, this.gpu = null, this.bytes = void 0, this.lZ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const hy = Math.max(LZ, Math.ceil(Uy / LZ) * LZ);
        this.bytes = new Uint8Array(hy), this.lZ = new pZ(hy / LZ)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(yb) {
        return Math.max(1, Math.ceil(yb / LZ)) * LZ
      }
      allocate(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yb;
        const Uy = QZ.slotBytes(yb),
          hy = Uy / LZ;
        let fy = this.lZ.allocate(hy);
        fy < 0 && (this.grow(this.lZ.Hy + hy), fy = this.lZ.allocate(hy));
        const Zy = fy * LZ;
        return this.growTo(Zy + Math.max(Wy, Uy)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, Zy, Zy + Uy), bb && this.bytes.set(new Uint8Array(bb.buffer, bb.byteOffset, Math.min(bb.byteLength, Uy)), Zy), this.markDirty(Zy, Zy + Uy), Zy
      }
      growTo(yb) {
        const bb = Math.ceil(yb / LZ);
        bb > this.lZ.Hy && this.grow(bb)
      }
      free(yb, bb) {
        this.freed.push(yb, bb)
      }
      write(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Uy <= 0) return;
        this.bytes.set(new Uint8Array(bb.buffer, Wy, Uy), yb);
        let fy = yb + Uy;
        if (hy) {
          const bb = yb + 4 * Math.ceil(Uy / 4);
          this.bytes.fill(0, fy, bb), fy = bb
        }
        this.markDirty(yb, fy)
      }
      move(yb, bb, Wy) {
        this.bytes.copyWithin(bb, yb, yb + Wy), this.markDirty(bb, bb + Wy)
      }
      flush() {
        for (const bb of this.retired) this.onReplaced(bb), bb.destroy();
        this.retired.length = 0;
        const yb = this.dirtyStarts.length;
        if (yb > 0) {
          const {
            dirtyStarts: bb,
            dirtyEnds: Wy,
            order: Uy
          } = this;
          Uy.length = yb;
          for (let cb = 0; cb < yb; cb++) Uy[cb] = cb;
          yb > 1 && Uy.sort(((yb, Wy) => bb[yb] - bb[Wy]));
          const hy = this.mergeGap;
          let fy = bb[Uy[0]],
            Zy = Wy[Uy[0]];
          for (let cb = 1; cb < yb; cb++) {
            const yb = Uy[cb];
            bb[yb] - Zy <= hy ? Zy = Math.max(Zy, Wy[yb]) : (this.send(fy, Zy), fy = bb[yb], Zy = Wy[yb])
          }
          this.send(fy, Zy), bb.length = 0, Wy.length = 0
        }
        this.holding = !1
      }
      gC() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const yb = this.freed;
        for (let bb = 0; bb < yb.length; bb += 2) this.lZ.free(yb[bb] / LZ, yb[bb + 1] / LZ);
        yb.length = 0
      }
      send(yb, bb) {
        this.device.queue.writeBuffer(this.gpu, yb, this.bytes.buffer, yb, bb - yb);
        for (const Wy of this.replaced) {
          const Uy = Math.min(bb, Wy.size);
          Uy > yb && this.device.queue.writeBuffer(Wy, yb, this.bytes.buffer, yb, Uy - yb)
        }
      }
      markDirty(yb, bb) {
        yb &= -4, bb = bb + 3 & -4, this.holding ? (this.dirtyStarts.push(yb), this.dirtyEnds.push(bb)) : this.send(yb, bb)
      }
      grow(yb) {
        const bb = this.lZ.Hy,
          Wy = Math.max(2 * bb, yb),
          Uy = new Uint8Array(Wy * LZ);
        Uy.set(this.bytes);
        const hy = this.gpu;
        this.gpu = this.createGpu(Uy.byteLength), this.bytes = Uy, this.lZ.grow(Wy), hy && (this.replaced.push(hy), this.onReplaced(hy)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, bb * LZ)
      }
      createGpu(yb) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: yb,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function jc(yb) {
      return Array.isArray(yb) ? new Float32Array(yb) : yb
    }

    function DZ(yb, bb, Wy, Uy, hy) {
      const fy = Xh(hy),
        Zy = Math.min(hy, Uy.byteLength);
      if (fy === Zy && Uy.byteOffset % 4 === 0) return void yb.queue.writeBuffer(bb, Wy, Uy.buffer, Uy.byteOffset, fy);
      const cb = new Uint8Array(fy);
      cb.set(new Uint8Array(Uy.buffer, Uy.byteOffset, Zy)), yb.queue.writeBuffer(bb, Wy, cb)
    }

    function tc(yb, bb, Wy) {
      const Uy = "linear",
        hy = "nearest";
      let fy = hy,
        Zy = hy,
        cb = "nearest",
        Py = !bb;
      switch (yb) {
        case 11:
          fy = Uy, Zy = Uy;
          break;
        case 3:
          fy = Uy, Zy = Uy, cb = bb ? "linear" : "nearest";
          break;
        case 8:
          cb = bb ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          Zy = Uy;
          break;
        case 6:
          Zy = Uy, cb = bb ? "linear" : "nearest";
          break;
        case 7:
          Zy = Uy, Py = !0;
          break;
        case 9:
          fy = Uy;
          break;
        case 10:
          fy = Uy, cb = bb ? "linear" : "nearest";
          break;
        case 2:
          fy = Uy, Zy = Uy, Wy > 1 ? (cb = "linear", Py = !1) : Py = !0;
          break;
        case 12:
          fy = Uy, Py = !0;
          break;
        default:
          Py = !0
      }
      return Wy > 1 && !Py ? {
        magFilter: Uy,
        minFilter: Uy,
        mipmapFilter: "linear",
        maxAnisotropy: Wy
      } : {
        magFilter: fy,
        minFilter: Zy,
        mipmapFilter: cb,
        ...Py ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function wZ(yb) {
      return 0 === yb ? "clamp-to-edge" : 2 === yb ? "mirror-repeat" : "repeat"
    }
    class kc {
      constructor(yb, bb) {
        let {
          vertexArena: Wy = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = yb, this.device = bb, this.buffers = new WeakMap, this.rZy = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Wy ? new QZ(bb, (yb => {
          var bb;
          null === (bb = this.onDestroy) || void 0 === bb || bb.call(this, yb), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var yb;
        null === (yb = this.arena) || void 0 === yb || yb.flush()
      }
      endUploadFrame() {
        var yb;
        null === (yb = this.arena) || void 0 === yb || yb.gC()
      }
      vertexBufferCreated(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wy ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(yb);
        const hy = jc(bb);
        yb.Hy = hy.byteLength, this.buffers.set(yb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Wy && null !== this.arena,
          pending: hy,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Uy
        })
      }
      vertexBufferUpdated(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        const hy = this.buffers.get(yb);
        if (!hy) return;
        const fy = jc(bb),
          Zy = void 0 === Uy ? fy.byteLength : Math.min(Uy, fy.byteLength);
        this.update(hy, fy, Wy, Zy)
      }
      vertexBufferFloatsUpdated(yb, bb, Wy, Uy) {
        const hy = this.buffers.get(yb);
        if (!hy) return;
        const fy = Wy * Float32Array.BYTES_PER_ELEMENT,
          Zy = (Uy - Wy) * Float32Array.BYTES_PER_ELEMENT;
        hy.slot >= 0 && Zy > 0 && fy + Zy <= hy.size ? this.writeSlot(hy, fy, bb, bb.byteOffset + fy, Zy, !1) : hy.gpu && Zy > 0 && fy + Zy <= hy.gpu.size ? this.device.queue.writeBuffer(hy.gpu, fy, bb.buffer, bb.byteOffset + fy, Zy) : this.update(hy, bb.subarray(Wy, Uy), fy, Zy)
      }
      indexBufferCreated(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(yb);
        const Uy = function(yb) {
          if (yb instanceof Uint16Array || yb instanceof Uint32Array) return yb;
          for (let bb = 0; bb < yb.length; bb++)
            if (yb[bb] >= 65535) return new Uint32Array(yb);
          return new Uint16Array(yb)
        }(bb);
        yb.is32Bits = 4 === Uy.BYTES_PER_ELEMENT, yb.Hy = Uy.byteLength, this.buffers.set(yb, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Uy,
          ownsPending: Uy !== bb,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Wy
        })
      }
      bufferDeleted(yb) {
        const bb = this.buffers.get(yb);
        null !== bb && void 0 !== bb && bb.gpu ? (this.destroyBuffer(bb.gpu), this.gpuBuffersVersion++) : bb && bb.slot >= 0 && (this.arena.free(bb.slot, bb.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(yb)
      }
      update(yb, bb, Wy, Uy) {
        if (yb.slot >= 0) this.updateSlot(yb, bb, Wy, Uy);
        else if (yb.gpu) {
          if (Wy + Xh(Uy) > yb.gpu.size) {
            const bb = this.device.createBuffer({
                label: yb.label,
                size: Xh(Math.max(2 * yb.gpu.size, Wy + Uy)),
                usage: yb.usage | GPUBufferUsage.COPY_SRC
              }),
              hy = this.device.createCommandEncoder();
            hy.copyBufferToBuffer(yb.gpu, 0, bb, 0, yb.gpu.size), this.device.queue.submit([hy.finish()]), this.destroyBuffer(yb.gpu), this.gpuBuffersVersion++, yb.gpu = bb
          }
          DZ(this.device, yb.gpu, Wy, bb, Uy)
        } else {
          const fy = new Uint8Array(bb.buffer, bb.byteOffset, Uy),
            Zy = yb.pending;
          if (Zy && yb.ownsPending && Wy + Uy <= Zy.byteLength) new Uint8Array(Zy.buffer, Zy.byteOffset, Zy.byteLength).set(fy, Wy);
          else if (Zy && 0 === Wy && Uy === Zy.byteLength && bb.byteLength === Uy) yb.pending = bb, yb.ownsPending = !1;
          else {
            var hy;
            const bb = new Uint8Array(Math.max(null !== (hy = null === Zy || void 0 === Zy ? void 0 : Zy.byteLength) && void 0 !== hy ? hy : 0, Wy + Uy));
            Zy && bb.set(new Uint8Array(Zy.buffer, Zy.byteOffset, Zy.byteLength)), bb.set(fy, Wy), yb.pending = bb, yb.ownsPending = !0
          }
        }
      }
      updateSlot(yb, bb, Wy, Uy) {
        const hy = this.arena;
        Wy + Xh(Uy) > yb.size && (yb.size = Xh(Math.max(2 * yb.size, Wy + Uy)), hy.growTo(yb.slot + yb.size), this.gpuBuffersVersion++), 0 === Uy ? this.writeSlot(yb, Wy, zc, 0, 4, !1) : this.writeSlot(yb, Wy, bb, bb.byteOffset, Uy, !0)
      }
      writeSlot(yb, bb, Wy, Uy, hy, fy) {
        const Zy = bb + (fy ? Xh(hy) : hy);
        Zy > yb.slotBytes && this.moveSlot(yb, Zy), this.arena.write(yb.slot + bb, Wy, Uy, hy, fy)
      }
      moveSlot(yb, bb) {
        const Wy = this.arena,
          Uy = QZ.slotBytes(Math.max(bb, Math.min(2 * yb.slotBytes, yb.size))),
          hy = Wy.allocate(Uy, null, yb.size);
        Wy.move(yb.slot, hy, yb.slotBytes), Wy.free(yb.slot, yb.slotBytes), yb.slot = hy, yb.slotBytes = Uy, this.gpuBuffersVersion++
      }
      cover(yb, bb) {
        const Wy = this.buffers.get(yb);
        if (!Wy || Wy.slot < 0) return !1;
        const Uy = Math.min(bb, Wy.size);
        return !(Uy <= Wy.slotBytes) && (this.moveSlot(Wy, Uy), !0)
      }
      destroyBuffer(yb) {
        var bb;
        null === (bb = this.onDestroy) || void 0 === bb || bb.call(this, yb), yb.destroy()
      }
      gpuBuffer(yb) {
        const bb = this.buffers.get(yb);
        if (!bb) return null;
        if (bb.slot >= 0) return this.arena.buffer;
        if (bb.arena && bb.pending) {
          const yb = bb.pending,
            Wy = this.arena;
          return bb.size = Xh(yb.byteLength), bb.slotBytes = QZ.slotBytes(function(yb) {
            const bb = new Uint8Array(yb.buffer, yb.byteOffset, yb.byteLength);
            let Wy = bb.length;
            if (yb.byteOffset % 4 === 0) {
              for (; Wy % 4 !== 0 && 0 === bb[Wy - 1];) Wy--;
              if (Wy % 4 === 0) {
                const bb = new Uint32Array(yb.buffer, yb.byteOffset, Wy / 4);
                let Uy = bb.length;
                for (; Uy > 0 && 0 === bb[Uy - 1];) Uy--;
                Wy = 4 * Uy
              }
            }
            for (; Wy > 0 && 0 === bb[Wy - 1];) Wy--;
            return Wy
          }(yb)), bb.slot = Wy.allocate(bb.slotBytes, yb, bb.size), bb.pending = null, Wy.buffer
        }
        if (!bb.gpu && bb.pending) {
          const yb = bb.pending;
          bb.gpu = this.device.createBuffer({
            label: bb.label,
            size: Xh(yb.byteLength),
            usage: bb.usage
          }), DZ(this.device, bb.gpu, 0, yb, yb.byteLength), bb.pending = null
        }
        return bb.gpu
      }
      gpuOffset(yb) {
        var bb, Wy;
        const Uy = null !== (bb = null === (Wy = this.buffers.get(yb)) || void 0 === Wy ? void 0 : Wy.slot) && void 0 !== bb ? bb : -1;
        return Uy < 0 ? 0 : Uy
      }
      gpuEnd(yb) {
        var bb, Wy;
        const Uy = this.buffers.get(yb);
        return Uy ? Uy.slot >= 0 ? Uy.slot + Uy.size : null !== (bb = null === (Wy = Uy.gpu) || void 0 === Wy ? void 0 : Wy.size) && void 0 !== bb ? bb : 0 : 0
      }
      vertexInput(yb, bb, Wy) {
        var Uy, hy, fy, Zy;
        return null !== (Uy = null !== (hy = Wy && this.modelInput(Wy, bb)) && void 0 !== hy ? hy : null === (fy = null !== (Zy = this.rZy.get(yb)) && void 0 !== Zy ? Zy : this.batchUploads.get(yb)) || void 0 === fy ? void 0 : fy.inputs[bb]) && void 0 !== Uy ? Uy : null
      }
      modelInput(yb, bb) {
        const Wy = this.geometrySlot(yb);
        let Uy = Wy.inputs.get(bb);
        if (void 0 === Uy) {
          const hy = yb.vertexAttributes.find((yb => yb.kind === bb));
          Uy = hy ? new kb(this.modelKey(Wy, hy.data, !1), hy.offset, hy.stride, hy.components, !1, hy.glType, hy.isNormalized) : null, Wy.inputs.set(bb, Uy)
        }
        return Uy
      }
      modelIndex(yb) {
        return yb.indexData && this.modelKey(this.geometrySlot(yb), yb.indexData, !0)
      }
      geometrySlot(yb) {
        let bb = yb.gpu[vb.i.lite];
        if (!bb) {
          const Wy = new Map,
            Uy = () => {
              for (const yb of Wy.values()) this.bufferDeleted(yb)
            },
            hy = yb => {
              const bb = Wy.get(yb);
              bb && this.vertexBufferUpdated(bb, yb)
            };
          bb = {
            keys: Wy,
            inputs: new Map,
            release: Uy,
            updated: hy
          }, yb.gpu[vb.i.lite] = bb
        }
        return bb
      }
      modelKey(yb, bb, Wy) {
        let Uy = yb.keys.get(bb);
        if (!Uy) {
          if (Wy) {
            const yb = {
              Hy: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(yb, bb, "model-indices"), Uy = yb
          } else Uy = {
            Hy: 0
          }, this.vertexBufferCreated(Uy, bb, !1, "model-vertices");
          yb.keys.set(bb, Uy)
        }
        return Uy
      }
      indexFormat(yb) {
        return yb.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(yb, bb) {
        --yb.refs > 0 || (this.releaseTexture(yb), ac(yb.images), null !== bb && this.textures.delete(bb))
      }
      load(yb, bb) {
        const Wy = bb.decoded = async function(yb) {
          if ("cube" === yb.kind) return async function(yb) {
            if (6 !== yb.length) throw new Error(`${yb.length} files where six faces were expected`);
            const bb = await FZ(yb.map((yb => Fh(yb)))),
              Wy = bb[0].width;
            return FZ(bb.map((async yb => {
              if (yb.width === Wy && yb.height === Wy) return yb;
              try {
                return await createImageBitmap(yb, {
                  ...Hh,
                  resizeWidth: Wy,
                  resizeHeight: Wy
                })
              } finally {
                yb.close()
              }
            })))
          }(yb.files);
          if ("data" === yb.kind && yb.data) return [await createImageBitmap(new Blob([yb.data]), Hh)];
          return [await Fh(NZ(yb))]
        }(yb.source).then((yb => {
          0 === bb.refs ? ac(yb) : bb.images = yb
        }));
        this.track(bb, NZ(yb.source), Wy, (() => {
          bb.wanted && !bb.failed && bb.refs > 0 && this.upload(yb, bb)
        }))
      }
      canvasUpdated(yb, bb, Wy) {
        const {
          state: Uy
        } = this.textureSlot(yb);
        Uy.dynamicSource = {
          invertY: bb,
          premultiplied: Wy
        }, Uy.dynamic && this.pushDynamic(yb.source, Uy)
      }
      async atlasArray(yb, bb, Wy) {
        const Uy = await Qh(this.device, yb, bb, Wy);
        if (!this.atlasBindings.has(Uy)) {
          const yb = (0, YZ.c)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Uy, {
            view: Uy.texture.createView({
              dimension: "2d-array"
            }),
            sampler: yb
          })
        }
        return Uy
      }
      boundTexture(yb) {
        const bb = this.atlasBindings.get(yb);
        if (bb) return bb;
        const Wy = yb;
        if (Wy.released) return null;
        const Uy = this.textureSlot(Wy, !0),
          {
            state: hy
          } = Uy;
        if (!hy.view && (hy.wanted = !0, hy.loading || hy.failed || this.upload(Wy, hy), !hy.view)) return null;
        const fy = this.chosenSampler(Wy, Uy),
          Zy = Uy.bound;
        return Zy && Zy.view === hy.view && Zy.sampler === fy ? Zy : (Uy.bound = {
          view: hy.view,
          sampler: fy
        }, Uy.bound)
      }
      textureLoaded(yb) {
        var bb, Wy;
        return null !== (bb = null === (Wy = yb.gpu[vb.i.lite]) || void 0 === Wy ? void 0 : Wy.state.decoded) && void 0 !== bb ? bb : null
      }
      textureFailed(yb) {
        var bb;
        return !0 === (null === (bb = yb.gpu[vb.i.lite]) || void 0 === bb ? void 0 : bb.state.failed)
      }
      chosenSampler(yb, bb) {
        const {
          samplingMode: Wy,
          wrapU: Uy,
          wrapV: hy
        } = yb.sampler, fy = bb.state.hasMips, Zy = function(yb, bb) {
          const {
            bilinear: Wy,
            trilinear: Uy
          } = vb.m;
          return !bb && yb !== Wy || 11 !== yb && yb !== Uy && yb !== Wy ? 1 : 4
        }(Wy, fy), cb = bb.sampler;
        if (cb && cb.samplingMode === Wy && cb.hasMips === fy && cb.anisotropy === Zy && cb.wrapU === Uy && cb.wrapV === hy) return cb.sampler;
        const Py = this.samplerFor(Wy, fy, Zy, Uy, hy);
        return bb.sampler = {
          samplingMode: Wy,
          hasMips: fy,
          anisotropy: Zy,
          wrapU: Uy,
          wrapV: hy,
          sampler: Py
        }, Py
      }
      releaseTexture(yb) {
        var bb, Wy;
        yb.view && (null === (Wy = this.onDestroy) || void 0 === Wy || Wy.call(this, yb.view));
        null === (bb = yb.destroy) || void 0 === bb || bb.call(yb)
      }
      textureSlot(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Wy = yb.gpu[vb.i.lite];
        if (Wy) return Wy;
        const Uy = function(yb) {
          let {
            source: bb,
            sampler: Wy
          } = yb;
          return "canvas" === bb.kind ? null : `${bb.kind}|${NZ(bb)}|${Wy.noMipmap}|${Wy.samplingMode}|${Wy.invertY}`
        }(yb);
        let hy = null === Uy ? void 0 : this.textures.get(Uy);
        hy || (hy = {
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
        }, null !== Uy && (this.textures.set(Uy, hy), this.load(yb, hy), bb && this.firstBindDecodes++)), hy.refs++;
        const fy = hy,
          Zy = {
            state: hy,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(fy, Uy)
            }
          };
        return yb.gpu[vb.i.lite] = Zy, Zy
      }
      samplerFor(yb, bb, Wy, Uy, hy) {
        const fy = `${yb}|${bb}|${Wy}|${Uy}|${hy}`;
        let Zy = this.samplers.get(fy);
        if (!Zy) {
          const cb = {
            ...tc(yb, bb, Wy),
            addressModeU: wZ(Uy),
            addressModeV: wZ(hy)
          };
          Zy = (0, YZ.c)(this.engine, cb), this.samplers.set(fy, Zy)
        }
        return Zy
      }
      upload(yb, bb) {
        const {
          source: Wy,
          sampler: Uy
        } = yb;
        bb.hasMips = !Uy.noMipmap, "canvas" === Wy.kind ? this.createDynamic(Wy, bb) : "cube" === Wy.kind ? this.uploadCube(bb, Wy.luminance) : this.uploadImage(bb, !0 === Uy.invertY, Wy.url)
      }
      uploadImage(yb, bb, Wy) {
        const [Uy] = yb.images;
        yb.images = null;
        const hy = (0, XZ.b)(this.engine, Uy, {
          mipMaps: yb.hasMips,
          invertY: bb,
          srgb: !1
        }).then((bb => {
          Uy.close(), 0 !== yb.refs ? (yb.view = bb.view, yb.destroy = bb.texture.destroy.bind(bb.texture)) : bb.texture.destroy()
        }));
        this.track(yb, Wy, hy)
      }
      track(yb, bb, Wy, Uy) {
        yb.loading = !0, this.pending++, Wy.catch((Wy => {
          yb.failed = !0, console.warn(`Lite: could not load texture ${af(bb)}`, Wy)
        })).finally((() => {
          yb.loading = !1, this.pending--, null === Uy || void 0 === Uy || Uy()
        }))
      }
      uploadCube(yb, bb) {
        const Wy = yb.images;
        yb.images = null;
        const Uy = HZ(this.engine, this.device, Wy, (0, vb.w)(bb), yb.hasMips);
        yb.view = Uy.createView({
          dimension: "cube"
        }), yb.destroy = () => {
          Uy.destroy()
        }
      }
      createDynamic(yb, bb) {
        const {
          canvas: Wy
        } = yb, Uy = (0, nZ.b)(this.engine, Math.max(1, Wy.width), Math.max(1, Wy.height), {
          mipMaps: bb.hasMips,
          srgb: !1
        });
        bb.dynamic = Uy, bb.view = Uy.view, bb.destroy = () => {
          Uy.texture.destroy()
        }, this.pushDynamic(yb, bb)
      }
      pushDynamic(yb, bb) {
        const Wy = bb.dynamicSource,
          Uy = bb.dynamic,
          {
            canvas: hy
          } = yb;
        if (Wy && Uy && 0 !== hy.width && 0 !== hy.height) return hy.width !== Uy.width || hy.height !== Uy.height ? (this.releaseTexture(bb), bb.dynamic = null, bb.view = null, void this.createDynamic(yb, bb)) : void(0, nZ.d)(this.engine, Uy, hy, {
          invertY: Wy.invertY,
          premultiplyAlpha: Wy.premultiplied
        })
      }
    }

    function NZ(yb) {
      return "cube" === yb.kind ? yb.rootUrl : "canvas" === yb.kind ? "canvas" : yb.url
    }
    const zc = new Uint8Array(4);

    function IZ(yb) {
      const bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      yb._colorAttachment.storeOp = yb._targetSignature._sampleCount > 1 ? bb : "store";
      const Wy = yb._renderPassDescriptor.depthStencilAttachment;
      Wy && (Wy.depthStoreOp = bb, Wy.stencilStoreOp && (Wy.stencilStoreOp = bb))
    }
    var xc = Wy(36434),
      AZ = Wy(36483),
      dZ = Wy(36047),
      yP = Wy(38189);
    const bP = new Float64Array([1, 1, 1]),
      Wc = new Float64Array([0, 1, 0]),
      Uc = new Float64Array(4),
      hc = new Float32Array(16),
      fc = new Float64Array(3),
      Zc = new Float64Array(4);

    function cP(yb, bb, Wy) {
      yb.fov = bb.fov, yb.near = bb.near, yb.far = bb.far, yb.renderWidth = Wy.renderWidth, yb.renderHeight = Wy.renderHeight, (0, dZ.u)(bb.holderRotation, 0, Uc, 0), (0, dZ.e)(bP, 0, Uc, 0, bb.holderPosition, 0, hc);
      const Uy = bb.Lhy;
      fc[0] = Uy[0], fc[1] = Uy[1], fc[2] = Uy[2] + 1;
      const hy = yb.viewMatrix;
      (0, dZ.k)(Uy, fc, Wc, hy), (0, dZ.g)(hy, 0, hy), (0, dZ.o)(hy, hc, 0, hy), (0, dZ.g)(hy, 0, hy);
      const fy = yb.worldMatrix;
      (0, dZ.g)(hy, 0, fy), yb.eye[0] = fy[12], yb.eye[1] = fy[13], yb.eye[2] = fy[14], Zc[0] = yb.fov, Zc[1] = yb.renderWidth / yb.renderHeight, Zc[2] = yb.near, Zc[3] = yb.far, (0, dZ.q)(Zc, yb.projectionMatrix), (0, dZ.o)(hy, yb.projectionMatrix, 0, yb.viewProjectionMatrix), (0, yP.g)(yb.viewProjectionMatrix, yb.frustum)
    }

    function Pc(yb, bb) {
      let Wy = yb.frustumPlanes;
      Wy || (Wy = yb.frustumPlanes = Array.from({
        length: 6
      }, (() => new xc.c(0, 0, 0, 0))));
      for (let Uy = 0; Uy < 6; Uy++) {
        const yb = Wy[Uy].normal;
        yb._x = bb[4 * Uy], yb._y = bb[4 * Uy + 1], yb._z = bb[4 * Uy + 2], yb._isDirty = !0, Wy[Uy].d = bb[4 * Uy + 3]
      }
    }

    function oc(yb, bb) {
      const Wy = bb.clearColor;
      yb.clearColour[0] = Wy.r, yb.clearColour[1] = Wy.g, yb.clearColour[2] = Wy.b, yb.clearColour[3] = Wy.a;
      const Uy = bb.ambientColor;
      yb.ambientColour[0] = Uy.r, yb.ambientColour[1] = Uy.g, yb.ambientColour[2] = Uy.b, yb.animationRatio = bb.animationRatio, yb.frameId = bb.frameId, yb.version++
    }

    function Bc(yb) {
      const bb = yb.model.view;
      return bb.animTick = (0, AZ.g)(), bb.timeMs = performance.now(), oc(bb, yb.Pf), yb.model.update(bb.frameId), bb
    }

    function Kc(yb) {
      const bb = yb.Pf,
        {
          view: Wy,
          phy: Uy
        } = yb.model;
      return cP(Wy, Uy, bb.xh()), bb.onBeforeRenderObservable.notifyObservers(bb), Pc(bb, Wy.frustum), bb.onBeforeCameraRenderObservable.notifyObservers(bb.activeCamera), Bc(yb)
    }
    var ec = Wy(36008),
      qP = Wy(36128),
      sc = Wy(36470);

    function Sc(yb) {
      var bb, Wy;
      const Uy = (0, Oy.bb)(yb);
      if (!Uy || Uy.diffuseTexture && (0, sc.l)(yb)) return null;
      const hy = null === (bb = (0, Oy.x)(Uy, gb.j.name)) || void 0 === bb ? void 0 : bb.state,
        fy = null === (Wy = (0, Oy.x)(Uy, Nf.b.name)) || void 0 === Wy ? void 0 : Wy.state,
        Zy = new Float32Array(16);
      return function(yb, bb, Wy, Uy) {
        var hy, fy;
        const Zy = eU;
        Uy.set(yb.diffuseColor, Zy.diffuse), Uy[Zy.diffuse + 3] = yb.alpha, Uy.set(yb.ambientColor, Zy.ambientAndCutoff), Uy[Zy.ambientAndCutoff + 3] = yb.alphaCutOff, Uy.set(yb.emissiveColor, Zy.emissiveAndLevel), Uy[Zy.emissiveAndLevel + 3] = null !== (hy = null === (fy = yb.diffuseTexture) || void 0 === fy ? void 0 : fy.level) && void 0 !== hy ? hy : 1, null !== bb && void 0 !== bb && bb.animDataPerTex ? (Uy[Zy.anim + 1] = AZ.e, Uy[Zy.anim + 2] = bb.animDataPerTex.length / 3 - 1) : Wy && (Uy[Zy.anim + 1] = Wy.numAnimStates, Uy[Zy.anim + 2] = Wy.ticksPerAnimState)
      }(Uy, hy, fy, Zy), {
        model: Uy,
        atlas: hy,
        texture: hy ? "atlas" : Uy.diffuseTexture ? "single" : "none",
        animated: hy ? !!hy.animDataPerTex : !!fy,
        liquid: (0, sc.o)(yb),
        customRenderMat: (0, sc.l)(yb),
        uniformData: Zy
      }
    }
    var Ec = Wy(35993);
    class lc {
      constructor(yb) {
        this.units = yb, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var yb;
        this.buffer.destroy(), null === (yb = this.twin) || void 0 === yb || yb.destroy()
      }
    }
    class mP {
      constructor(yb, bb) {
        this.arena = yb, this.lZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.lZ = new pZ(bb);
        const Wy = new lc(bb);
        Wy.buffer = this.createBuffer(Wy, !1), this.backings.push(Wy), this.refresh()
      }
      get Hy() {
        return this.lZ.Hy
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
        let yb = 0;
        for (const bb of this.backings) yb += bb.units * (this.arena.unitBytes + (bb.twin ? this.arena.twinUnitBytes : 0));
        return yb
      }
      holds(yb) {
        return yb.start + yb.length <= this.usable
      }
      lost(yb) {
        return this.dropped || yb.start + yb.length > this.Hy
      }
      write(yb, bb) {
        const {
          device: Wy,
          unitBytes: Uy
        } = this.arena;
        for (const hy of this.backings) {
          const fy = (hy.units - yb.start) * Uy;
          fy > 0 && Wy.queue.writeBuffer(hy.buffer, yb.start * Uy, bb, 0, Math.min(bb.byteLength, fy))
        }
      }
      writeLight(yb, bb) {
        const {
          device: Wy,
          twinUnitBytes: Uy,
          verticesPerUnit: hy
        } = this.arena, {
          light: fy,
          count: Zy
        } = this.arena.twinLight(bb, Math.min(bb.length, yb.length * hy));
        for (const cb of this.backings) {
          cb.twin || (cb.twin = this.createBuffer(cb, !0));
          const bb = (cb.units - yb.start) * hy;
          bb > 0 && Wy.queue.writeBuffer(cb.twin, yb.start * Uy, fy, 0, Math.min(Zy, bb))
        }
      }
      grow(yb) {
        this.arena.assertNotDrawing();
        const {
          device: bb,
          unitBytes: Wy,
          label: Uy
        } = this.arena, hy = this.backings[this.backings.length - 1], fy = new lc(yb), Zy = bb.createCommandEncoder({
          label: `${Uy}-grow`
        });
        fy.buffer = this.createBuffer(fy, !1), Zy.copyBufferToBuffer(hy.buffer, 0, fy.buffer, 0, hy.units * Wy), hy.twin && (fy.twin = this.createBuffer(fy, !0), Zy.copyBufferToBuffer(hy.twin, 0, fy.twin, 0, hy.units * this.arena.twinUnitBytes)), bb.queue.submit([Zy.finish()]), this.backings.push(fy), this.lZ.grow(yb)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const yb of this.backings) yb.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(yb, bb) {
        const {
          device: Wy,
          unitBytes: Uy,
          twinUnitBytes: hy,
          usage: fy,
          label: Zy
        } = this.arena;
        Wy.pushErrorScope("out-of-memory");
        const cb = Wy.createBuffer({
          label: bb ? `${Zy}-light` : Zy,
          size: yb.units * (bb ? hy : Uy),
          usage: (bb ? this.arena.twinUsage : fy) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Wy.popErrorScope().then((Wy => {
          this.arena.awaitingVerdict--, this.settle(yb, bb, !Wy, !0)
        }), (Wy => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Zy} buffer, taken as failed: ${String(Wy)}`), this.settle(yb, bb, !1, !1)
        })), cb
      }
      settle(yb, bb, Wy, Uy) {
        const hy = this.backings.indexOf(yb);
        if (!(this.dropped || hy < 0)) {
          if (!Wy) {
            if (Uy && this.arena.ranOutOfMemory(yb.units, yb.units * (bb ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === hy) return void this.drop();
            for (const yb of this.backings.splice(hy)) yb.destroy();
            return this.lZ.truncate(this.backings[hy - 1].units), this.growable = !1, void this.promote()
          }
          bb ? yb.twinReady = !0 : (yb.bufferReady = !0, this.arena.allocatedBuffer(yb.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: yb
        } = this;
        let bb = 0;
        for (; bb + 1 < yb.length && yb[bb].ready && yb[bb + 1].ready;) bb++;
        for (const Wy of yb.splice(0, bb)) Wy.destroy();
        this.refresh()
      }
      refresh() {
        const yb = this.backings[0];
        this.buffer = yb.buffer, this.twin = yb.twinReady ? yb.twin : null, this.usable = !this.dropped && yb.bufferReady ? yb.units : 0
      }
    }
    class Cc {
      constructor(yb, bb, Wy, Uy) {
        let {
          verticesPerUnit: hy = 1,
          twinUsage: fy = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = yb, this.unitBytes = bb, this.usage = Wy, this.label = Uy, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, ob.e)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), bb % 4 !== 0) throw new Error(`${Uy}: ${bb}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = hy, this.twinUsage = fy, this.twinValueBytes = hy > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * hy
      }
      twinLight(yb, bb) {
        if (4 === this.twinValueBytes) return this.widened.length < bb && (this.widened = new Float32Array(Math.max(bb, 2 * this.widened.length))), this.widened.set(yb.subarray(0, bb)), {
          light: this.widened,
          count: bb
        };
        const Wy = bb % this.verticesPerUnit;
        if (0 === Wy) return {
          light: yb,
          count: bb
        };
        const Uy = bb - Wy + this.verticesPerUnit;
        return this.padded.length < Uy && (this.padded = new Uint16Array(Math.max(Uy, 2 * this.padded.length))), this.padded.set(yb.subarray(0, bb)), this.padded.fill(0, bb, Uy), {
          light: this.padded,
          count: Uy
        }
      }
      allocate(yb) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), yb > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const hy of this.pages) {
          const bb = hy.lZ.allocate(yb);
          if (bb >= 0) return {
            page: hy,
            start: bb,
            length: yb
          }
        }
        const bb = this.pages[this.pages.length - 1];
        if (null !== bb && void 0 !== bb && bb.canGrow) {
          const Wy = Math.min(this.ceiling, Math.max(2 * bb.Hy, bb.Hy + yb));
          if (Wy - bb.Hy >= yb) return bb.grow(Wy), {
            page: bb,
            start: bb.lZ.allocate(yb),
            length: yb
          }
        }
        bb && bb !== this.pages[0] && 0 === bb.lZ.used && bb.drop();
        const Wy = Math.floor(1048576 / this.unitBytes),
          Uy = new mP(this, Math.max(yb, Math.min(this.ceiling, Wy)));
        return this.pages.push(Uy), {
          page: Uy,
          start: Uy.lZ.allocate(yb),
          length: yb
        }
      }
      free(yb) {
        this.assertNotDrawing();
        const {
          page: bb
        } = yb;
        bb.lZ.free(yb.start, yb.length), 0 === bb.lZ.used && bb !== this.pages[0] && bb !== this.pages[this.pages.length - 1] && bb.drop()
      }
      remove(yb) {
        const bb = this.pages.indexOf(yb);
        bb >= 0 && this.pages.splice(bb, 1)
      }
      ranOutOfMemory(yb, bb) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${bb}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, yb), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, yb) / 2));
        const Wy = performance.now();
        Wy >= this.shortageUntil && (this.forgetFailedAt = Wy + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Wy + 1e3)
      }
      allocatedBuffer(yb) {
        yb >= this.failed && (this.failed = 1 / 0);
        const bb = Math.min(2 * yb, Math.floor((yb + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, bb))
      }
      stats() {
        let yb = 0,
          bb = 0,
          Wy = 0,
          Uy = 0;
        for (const hy of this.pages) yb += hy.Hy, bb += hy.lZ.used, Wy += hy.hasTwin ? hy.Hy * this.twinUnitBytes : 0, Uy += hy.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: yb * this.unitBytes,
          usedBytes: bb * this.unitBytes,
          twinBytes: Wy,
          allocatedBytes: Uy
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: yb,
          maxStorageBufferBindingSize: bb
        } = this.device.limits;
        let Wy = Math.floor(Math.min(67108864, yb) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Wy = Math.min(Wy, Math.floor(bb / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Wy = Math.min(Wy, Math.floor(bb / this.twinUnitBytes))), Wy
      }
    }
    const Tc = 16383;

    function Vc(yb, bb, Wy, Uy, hy) {
      let fy = 0;
      for (let Zy = Wy; Zy < Uy; Zy += Tc) yb.drawIndexed(6 * Math.min(Tc, Uy - Zy), 1, 0, bb + 4 * Zy, hy), fy++;
      return fy
    }
    class Jc {
      constructor(yb, bb) {
        this.recordsGroup = bb, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Wy = Gb.h.strideWithoutAtlas;
        this.vertexArena = new Cc(yb, Wy, GPUBufferUsage.VERTEX, `terrain-vertices-${Wy}`), this.quadArena = new Cc(yb, qP.d, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Uy = (0, Ob.f)(new Uint16Array(98298), Tc);
        this.quadPattern = yb.createBuffer({
          label: "terrain-quad-pattern",
          size: Uy.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), yb.queue.writeBuffer(this.quadPattern, 0, Uy)
      }
      set(yb, bb) {
        const Wy = bb.packedVertices,
          Uy = Wy ? this.quadArena.allocate(yb.faceCount) : this.vertexArena.allocate(yb.vertexCount);
        if (!Uy) return !1;
        yb.vertices = Uy;
        const hy = Wy ? new Uint8Array(Wy.buffer, Wy.byteOffset, Wy.byteLength) : new Uint8Array(bb.vertices);
        return Uy.page.write(Uy, hy), !0
      }
      setLight(yb, bb) {
        const {
          vertices: Wy
        } = yb;
        Wy && 0 !== bb.length && Wy.page.live && (bb.length < yb.vertexCount ? Wy.page.arena.warnOnce("shortLight", `a part's ${bb.length} light values are fewer than its ${yb.vertexCount} vertices, so its light is left as it was`) : (Wy.page.writeLight(Wy, bb), yb.lit = !0))
      }
      lightFullSky(yb, bb) {
        this.fullSky.length < bb && (this.fullSky = new Uint16Array(Math.max(bb, 4096)).fill(Ec.h));
        for (const Wy of yb) {
          const yb = Wy.vertices;
          yb.page.live && (yb.page.writeLight(yb, this.fullSky), Wy.lit = !0)
        }
      }
      backed(yb) {
        const {
          vertices: bb
        } = yb;
        return !!bb && bb.page.holds(bb)
      }
      lost(yb) {
        const {
          vertices: bb
        } = yb;
        return !!bb && bb.page.lost(bb)
      }
      release(yb) {
        yb.vertices && yb.vertices.page.arena.free(yb.vertices), yb.vertices = null, yb.lit = !1
      }
      setDrawing(yb) {
        this.forgetBound()
      }
      draw(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb.faceCount;
        const fy = bb.vertices,
          Zy = fy.page,
          cb = Wy ? Zy.twin : null;
        if (!Zy.holds(fy) || Wy && !cb) return 0;
        const {
          verticesPerUnit: Py
        } = Zy.arena;
        let oy = fy.start * Py;
        this.boundPattern || (yb.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const By = Uy + hy;
        if (Py > 1) return Zy.buffer === this.boundRecords && cb === this.boundRecordsLight || (yb.setBindGroup(1, this.recordsGroup(Zy.buffer, cb)), this.boundRecords = Zy.buffer, this.boundRecordsLight = cb), Vc(yb, oy, Uy, By, bb.slot);
        Zy.buffer !== this.boundVertices && (yb.setVertexBuffer(0, Zy.buffer), this.boundVertices = Zy.buffer), cb && cb !== this.boundLight && (yb.setVertexBuffer(1, cb), this.boundLight = cb);
        const Ky = bb.faceCount;
        return By <= Ky ? Vc(yb, oy, Uy, By, bb.slot) : Vc(yb, oy, Uy, Ky, bb.slot) + Vc(yb, oy, Math.max(Uy, Ky) - Ky, By - Ky, bb.slot)
      }
      get buffersAwaitingVerdict() {
        let yb = 0;
        for (const bb of this.arenas()) yb += bb.awaitingVerdict;
        return yb
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class gP {
      constructor(yb, bb, Wy, Uy) {
        this.device = yb, this.splitBefore = bb, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = yb.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const hy = yb.createShaderModule({
          label: "scene-depth-copy",
          code: (fy = Wy._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${fy?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var fy;
        yb.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: hy,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: hy,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((yb => {
          this.pipeline = yb, this.building = !1
        }), (yb => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", yb)
        })), Wy._executeWithTransmission = () => this.execute(Wy, Uy)
      }
      get compiling() {
        return this.building
      }
      setWanted(yb) {
        this.wanted = yb
      }
      setPlanes(yb, bb) {
        yb === this.near && bb === this.far || (this.near = yb, this.far = bb, this.unproject[0] = yb / (bb - yb), this.unproject[1] = bb * yb / (bb - yb), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var yb, bb;
        return null !== (yb = null === (bb = this.copy) || void 0 === bb ? void 0 : bb.view) && void 0 !== yb ? yb : null
      }
      execute(yb, bb) {
        var Wy;
        null === (Wy = this.retired) || void 0 === Wy || Wy.destroy(), this.retired = null;
        const Uy = yW(bb),
          hy = yb._transparentBindings,
          fy = this.wanted && this.pipeline ? this.splitIndex(hy) : -1,
          Zy = yb._colorAttachment,
          cb = Zy.resolveTarget;
        fy >= 0 && (Zy.resolveTarget = void 0, IZ(yb, !0));
        let Py = Uy.beginRenderPass(yb._renderPassDescriptor);
        Py.setBindGroup(0, yb._sceneBG);
        let oy = this.drawList(Py, bb, yb._opaqueBindings, 0, yb._opaqueBindings.length);
        if (oy += this.drawList(Py, bb, yb._directBindings, 0, yb._directBindings.length), oy += this.drawList(Py, bb, hy, 0, fy >= 0 ? fy : hy.length), Py.end(), fy < 0) return oy;
        IZ(yb);
        const By = yb._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Ky,
            stencilLoadOp: ey
          } = By,
          qb = Zy.loadOp;
        Zy.resolveTarget = cb;
        try {
          this.copyDepth(Uy, yb), Zy.loadOp = "load", By.depthLoadOp = "load", ey && (By.stencilLoadOp = "load"), Py = Uy.beginRenderPass(yb._renderPassDescriptor), Py.setBindGroup(0, yb._sceneBG), oy += this.drawList(Py, bb, hy, fy, hy.length), Py.end()
        } finally {
          Zy.loadOp = qb, By.depthLoadOp = Ky, By.stencilLoadOp = ey
        }
        return oy
      }
      splitIndex(yb) {
        for (let bb = 0; bb < yb.length; bb++)
          if (yb[bb].renderable === this.splitBefore) return bb;
        return -1
      }
      drawList(yb, bb, Wy, Uy, hy) {
        let fy = null,
          Zy = 0;
        for (let cb = Uy; cb < hy; cb++) {
          const Uy = Wy[cb],
            hy = Uy.renderable.mesh;
          hy && !1 === hy.visible || (Uy.pipeline !== fy && (yb.setPipeline(Uy.pipeline), fy = Uy.pipeline), Zy += Uy.draw(yb, bb))
        }
        return Zy
      }
      copyDepth(yb, bb) {
        var Wy, Uy;
        const hy = (null !== (Wy = bb._config.depth) && void 0 !== Wy ? Wy : bb._config.rt)._depthTexture,
          fy = (null === (Uy = this.copy) || void 0 === Uy ? void 0 : Uy.source) === hy ? this.copy : this.remakeCopy(hy),
          Zy = yb.beginRenderPass(fy.pass);
        Zy.setPipeline(this.pipeline), Zy.setBindGroup(0, fy.bindGroup), Zy.draw(3), Zy.end()
      }
      remakeCopy(yb) {
        var bb, Wy;
        this.retired = null !== (bb = null === (Wy = this.copy) || void 0 === Wy ? void 0 : Wy.texture) && void 0 !== bb ? bb : null;
        const Uy = this.device.createTexture({
            label: "scene-depth",
            size: [yb.width, yb.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          hy = Uy.createView(),
          fy = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: yb.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          Zy = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: hy,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: yb,
          texture: Uy,
          view: hy,
          bindGroup: fy,
          pass: Zy
        }, this.copy
      }
    }
    const Gc = "rgba8unorm";

    function Oc(yb) {
      return yb ? 15 : 1
    }
    class Rc {
      constructor(yb, bb, Wy, Uy) {
        this.device = yb, this.terrain = Uy, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = bb._targetSignature._sampleCount > 1, this.cameraBuffer = yb.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = yb.createBindGroupLayout({
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
        const hy = yb.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = yb.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: hy,
          entries: []
        });
        const fy = yb.createShaderModule({
          label: "sun-shadow-mask",
          code: (Zy = this.edge, `${(0,Rb.D)()}${FW({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_depth_2d;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${Zy?RW:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0);\n\tif (d <= 0.0) {\n\t\treturn vec4f(${Oc(Zy)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${Zy?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var Zy;
        yb.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: yb.createPipelineLayout({
            bindGroupLayouts: [this.layout, hy, hy, pf(yb, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: fy,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: fy,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((yb => {
          this.pipeline = yb, this.building = !1
        }), (yb => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", yb)
        }));
        const cb = bb._executeWithTransmission;
        bb._executeWithTransmission = yb => this.execute(bb, Wy, (() => cb ? cb(yb) : function(yb, bb) {
          const Wy = yW(bb).beginRenderPass(yb._renderPassDescriptor);
          Wy.setBindGroup(0, yb._sceneBG);
          let Uy = vP(Wy, bb, yb._opaqueBindings);
          return Uy += vP(Wy, bb, yb._directBindings), Uy += vP(Wy, bb, yb._transparentBindings), Wy.end(), Uy
        }(bb, Wy)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var yb, bb;
        return null !== (yb = null === (bb = this.targets) || void 0 === bb ? void 0 : bb.maskView) && void 0 !== yb ? yb : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(yb) {
        ! function(yb, bb) {
          const Wy = yb.worldMatrix,
            Uy = yb.projectionMatrix,
            hy = 1 / Uy[0],
            fy = 1 / Uy[5],
            Zy = yb.far * yb.near / (yb.far - yb.near);
          bb[0] = yb.eye[0], bb[1] = yb.eye[1], bb[2] = yb.eye[2], bb[3] = 2 ** -23 / Zy, bb[4] = Wy[0] * hy, bb[5] = Wy[1] * hy, bb[6] = Wy[2] * hy, bb[7] = Zy, bb[8] = Wy[4] * fy, bb[9] = Wy[5] * fy, bb[10] = Wy[6] * fy, bb[11] = yb.near / (yb.far - yb.near), bb[12] = Wy[8], bb[13] = Wy[9], bb[14] = Wy[10], bb[15] = 0
        }(yb, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(yb, bb, Wy) {
        if (this.retire(), !this.terrain.readsMask) return Wy();
        const Uy = this.targetsFor(yb),
          hy = yW(bb),
          fy = yb._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Uy.prepass.depthStencilAttachment.view = fy.view);
        const Zy = this.terrain.drawPrepass(hy, Uy.prepass, yb._sceneBG);
        if (0 === Zy) return Wy();
        if (this.trace(hy, Uy), this.edge) return Zy + 1 + Wy();
        const {
          depthLoadOp: cb,
          stencilLoadOp: Py
        } = fy;
        fy.depthLoadOp = "load", Py && (fy.stencilLoadOp = "load");
        try {
          return Zy + 1 + Wy()
        } finally {
          fy.depthLoadOp = cb, fy.stencilLoadOp = Py
        }
      }
      trace(yb, bb) {
        const Wy = this.terrain.sunShadowGroup(),
          Uy = yb.beginRenderPass(bb.trace);
        this.pipeline && Wy && (Uy.setPipeline(this.pipeline), Uy.setBindGroup(0, bb.bindGroup), Uy.setBindGroup(1, this.empty), Uy.setBindGroup(2, this.empty), Uy.setBindGroup(3, Wy), Uy.draw(3)), Uy.end()
      }
      retire() {
        const yb = this.retired;
        var bb;
        yb && (yb.mask.destroy(), yb.normals.destroy(), null === (bb = yb.depth) || void 0 === bb || bb.destroy(), this.retired = null)
      }
      targetsFor(yb) {
        var bb, Wy;
        const Uy = (null !== (bb = yb._config.depth) && void 0 !== bb ? bb : yb._config.rt)._depthTexture;
        return (null === (Wy = this.targets) || void 0 === Wy ? void 0 : Wy.source) === Uy ? this.targets : this.remake(yb, Uy)
      }
      remake(yb, bb) {
        var Wy;
        this.retired = this.targets;
        const Uy = [bb.width, bb.height],
          hy = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Uy,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          fy = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Uy,
            format: Gc,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Zy = null !== (Wy = yb._targetSignature._depthStencilFormat) && void 0 !== Wy ? Wy : bb.format,
          cb = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Uy,
            format: Zy,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Py = yb._renderPassDescriptor.depthStencilAttachment,
          oy = Zy.includes("stencil"),
          By = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: fy.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: cb ? cb.createView() : Py.view,
              depthClearValue: Py.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...oy ? {
                stencilClearValue: Py.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Ky = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== cb && void 0 !== cb ? cb : bb).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: fy.createView()
            }]
          }),
          ey = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: hy.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [Oc(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: bb,
          mask: hy,
          maskView: hy.createView(),
          normals: fy,
          depth: cb,
          bindGroup: Ky,
          prepass: By,
          trace: ey
        }, this.targets
      }
    }

    function vP(yb, bb, Wy) {
      let Uy = null,
        hy = 0;
      for (const fy of Wy) {
        const Wy = fy.renderable.mesh;
        Wy && !1 === Wy.visible || (fy.pipeline !== Uy && (yb.setPipeline(fy.pipeline), Uy = fy.pipeline), hy += fy.draw(yb, bb))
      }
      return hy
    }
    const iP = 6e4,
      Mc = {
        status: "ok"
      },
      Yc = {
        status: "skipped"
      };
    async function Xc(yb, bb) {
      const {
        isCancelled: Wy
      } = yb;
      if (Wy()) return {
        status: "RZ"
      };
      const {
        target: Uy
      } = bb;
      if (!Uy) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const hy = [],
        fy = Promise.all(Array.from(new Set(yb.materials), (async Wy => {
          hy.push(await async function(yb, bb, Wy, Uy) {
            const hy = {
              lighting: yb.lighting,
              dirLightCount: Math.min(yb.dirLightCount, 4),
              eU: yb.runtime
            };
            try {
              const fy = bb.material(Uy);
              return fy && oU(bb.programKey(fy, !1, hy)) ? (await fy.ready, yb.isCancelled() ? Mc : fy.bindGroupLayout ? await async function(yb, bb, Wy, Uy) {
                const {
                  device: hy
                } = yb;
                let fy, Zy;
                hy.pushErrorScope("validation");
                try {
                  fy = yb.pipelineBuild(bb, Wy, Uy)
                } finally {
                  Zy = hy.popErrorScope().catch((() => null))
                }
                const [cb, Py] = await Promise.all([Zy, fy.built.then((() => null), (yb => null !== yb && void 0 !== yb ? yb : new Error("pipeline failed")))]);
                if (!cb && !Py) return Mc;
                const oy = await nc(fy.module),
                  By = oy.length > 0 ? oy.map((yb => `${fy.name} ${yb.lineNum}:${yb.linePos}: ${yb.message}`)).join("\n") : `${fy.name}: ${uc(null!==Py&&void 0!==Py?Py:cb)}`;
                return {
                  status: "failed",
                  material: bb.model.name,
                  message: By
                }
              }(bb, fy, bb.programKey(fy, "none" !== fy.texture, hy), Wy): (console.warn(`Shader pack: skipped the compile check for "${Uy.name}", whose textures failed to load`), Yc)) : Mc
            } catch (fy) {
              return {
                status: "failed",
                material: Uy.name,
                message: uc(fy)
              }
            }
          }(yb, bb, Uy, Wy))
        }))),
        Zy = function(yb, bb) {
          let Wy, Uy, hy = !1;
          const fy = new Promise((fy => {
            var Zy;
            Wy = setTimeout((() => {
              fy("timeout")
            }), null !== (Zy = bb.timeoutMs) && void 0 !== Zy ? Zy : iP), Uy = setInterval((() => {
              bb.isCancelled() && fy("RZ")
            }), 50), yb.lost.then((() => {
              hy = !0, fy("lost")
            }))
          }));
          return {
            signal: fy,
            lost: () => hy,
            dispose: () => {
              clearTimeout(Wy), clearInterval(Uy)
            }
          }
        }(bb.device, yb);
      let cb;
      try {
        cb = await Promise.race([fy.then((() => "done")), Zy.signal])
      } finally {
        Zy.dispose()
      }
      if ("RZ" === cb || Wy()) return {
        status: "RZ"
      };
      const Py = hy.find((yb => "failed" === yb.status));
      return Py && "lost" !== cb && !Zy.lost() && await new Promise((yb => {
        setTimeout(yb, 0)
      })), "lost" === cb || Zy.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Py ? {
        status: "failed",
        failure: {
          material: Py.material,
          message: Py.message
        }
      } : "timeout" === cb ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(oy=yb.timeoutMs)&&void 0!==oy?oy:iP)/1e3} s`), {
        status: "skipped"
      }) : hy.some((yb => "skipped" === yb.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var oy
    }
    async function nc(yb) {
      if (!yb) return [];
      try {
        return (await yb.getCompilationInfo()).messages.filter((yb => "error" === yb.type))
      } catch {
        return []
      }
    }

    function uc(yb) {
      var bb;
      return null !== (bb = null === yb || void 0 === yb ? void 0 : yb.message) && void 0 !== bb ? bb : String(yb)
    }

    function rP(yb, bb, Wy, Uy) {
      oU(yb) ? nc(Wy).then((yb => {
        const [Wy] = yb;
        zf("terrain", bb, Uy, Wy ? `${Wy.lineNum}:${Wy.linePos} error: ${Wy.message}` : null)
      })) : zf("terrain", bb, Uy)
    }
    var Hc = Wy(36137),
      aP = Wy(36146),
      Fc = Wy(36160),
      pc = Wy(36073);

    function Lc(yb, bb, Wy, Uy, hy) {
      const fy = Math.hypot(Wy[0], Wy[1], Wy[2]);
      if (!(fy > 0)) return;
      const Zy = [Wy[0] / fy, Wy[1] / fy, Wy[2] / fy],
        cb = [Math.floor(bb[0]), Math.floor(bb[1]), Math.floor(bb[2])],
        Py = [0, 0, 0],
        oy = [1 / 0, 1 / 0, 1 / 0],
        By = [1 / 0, 1 / 0, 1 / 0];
      for (let qb = 0; qb < 3; qb++) Zy[qb] > 0 ? (Py[qb] = 1, oy[qb] = (cb[qb] + 1 - bb[qb]) / Zy[qb], By[qb] = 1 / Zy[qb]) : Zy[qb] < 0 && (Py[qb] = -1, oy[qb] = (cb[qb] - bb[qb]) / Zy[qb], By[qb] = -1 / Zy[qb]);
      const {
        DU: Ky
      } = yb;
      let ey = yb.ahy(cb[0], cb[1], cb[2]);
      for (;;) {
        const bb = oy[0] < oy[1] ? oy[0] < oy[2] ? 0 : 2 : oy[1] < oy[2] ? 1 : 2;
        if (oy[bb] > Uy) return;
        const Wy = Py[bb] > 0 ? cb[bb] + 1 : cb[bb];
        cb[bb] += Py[bb], oy[bb] += By[bb];
        const fy = yb.ahy(cb[0], cb[1], cb[2]),
          Zy = fy !== ey && !(yb.opaque[ey] && yb.opaque[fy]);
        if (Zy) {
          const Uy = [cb[0], cb[1], cb[2]];
          Uy[bb] = Wy;
          const fy = Math.floor(Uy[0] / Ky),
            Zy = Math.floor(Uy[1] / Ky),
            Py = Math.floor(Uy[2] / Ky);
          !yb.isDrawn(fy, Zy, Py) && yb.hasParts(fy, Zy, Py) && hy.add(`${fy},${Zy},${Py}`)
        }
        if (Zy && yb.occluders[fy]) return;
        ey = fy
      }
    }

    function Qc(yb, bb) {
      return yb.group - bb.group || yb.nearest - bb.nearest
    }
    class jP {
      constructor(yb, bb) {
        this.device = yb, this.pE = bb, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var yb;
        const bb = null !== (yb = this.free.pop()) && void 0 !== yb ? yb : this.next++;
        if (8 * bb >= this.data.length) {
          const yb = new Float32Array(2 * this.data.length);
          yb.set(this.data), this.data = yb, this.words = new Uint32Array(yb.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.pE()
        }
        return bb
      }
      release(yb) {
        this.free.push(yb)
      }
      set(yb, bb, Wy, Uy, hy) {
        const fy = 8 * yb + CU;
        this.data[fy] = bb, this.data[fy + 1] = Wy, this.data[fy + 2] = Uy, this.setVisibility(yb, hy)
      }
      setVisibility(yb, bb) {
        this.data[8 * yb + TU] = bb, this.markDirty(yb, yb)
      }
      setFaces(yb, bb, Wy) {
        const Uy = 8 * yb;
        this.words[Uy + VU] = bb, this.words[Uy + JU] = Wy, this.markDirty(yb, yb)
      }
      markDirty(yb, bb) {
        this.dirtyMin = Math.min(this.dirtyMin, yb), this.dirtyMax = Math.max(this.dirtyMax, bb)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Dc = mh,
      tP = !0;
    const wc = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Dc.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      kP = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Nc {
      constructor(yb) {
        this.device = yb, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(KU), this.dirLightUniforms = this.frameUniforms.subarray(BU.dirLights, BU.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, ob.e)(), this.faceGroups = !0, this.visibilityGraph = tP, this.visCull = tP, this.visCheck = !1, this.visCullMinDistance = Fc.f, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Ac, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.eU = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Jc(yb, ((yb, bb) => this.recordsGroup(yb, bb))), this.slots = new jP(yb, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = bW(yb), this.frameLayout = yb.createBindGroupLayout({
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
        }), this.frameBuffer = yb.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = yb.createSampler({
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
          bind: (yb, bb) => this.createBinding(this.opaqueRenderable, bb, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (yb, bb) => this.createBinding(this.transparentRenderable, bb, !0)
        }
      }
      installSceneDepth(yb, bb) {
        this.sceneDepth = new gP(this.device, this.transparentRenderable, yb, bb)
      }
      createFrameBindGroup() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== yb && void 0 !== yb ? yb : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== bb && void 0 !== bb ? bb : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(yb, bb) {
        const Wy = null !== bb && void 0 !== bb ? bb : yb;
        let Uy = this.recordsGroups.get(Wy);
        return Uy || (Uy = this.createFrameBindGroup(yb, bb), this.recordsGroups.set(Wy, Uy)), Uy
      }
      setChunkMesh(yb, bb, Wy) {
        var Uy;
        let hy = this.chunks.get(yb);
        hy ? this.geometry.release(hy) : (hy = {
          mesh: yb,
          slot: this.slots.allocate(),
          origin: [Wy[0], Wy[1], Wy[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: yb.visibility,
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
        }, this.chunks.set(yb, hy), this.writeSlot(hy)), hy.material = yb.material ? this.materialFor(yb.material) : null, hy.packed = !!bb.packedVertices, hy.vertexCount = (0, qP.h)(bb), hy.faceCount = hy.vertexCount / 4;
        const fy = null !== (Uy = bb.faceGroups) && void 0 !== Uy ? Uy : null;
        if (hy.faceGroups = fy, fy) {
          const yb = Hc.o;
          hy.planePX = fy[yb], hy.planeNX = fy[yb + 1], hy.planePY = fy[yb + 2], hy.planeNY = fy[yb + 3], hy.planePZ = fy[yb + 4], hy.planeNZ = fy[yb + 5]
        }
        this.drawWhole(hy), 0 !== hy.faceCount && (this.geometry.set(hy, bb) ? (hy.packed && this.slots.setFaces(hy.slot, hy.vertices.start + hy.faceCount, hy.faceCount), bb.OU && this.setChunkMeshLight(yb, bb.OU)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${hy.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(yb, bb) {
        const Wy = this.chunks.get(yb);
        Wy && this.geometry.setLight(Wy, bb)
      }
      drawStats() {
        let yb = this.transparent.length;
        for (const bb of this.opaqueBatches) yb += bb.meshes.length;
        return {
          drawn: yb,
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
      removeChunkMesh(yb) {
        const bb = this.chunks.get(yb);
        bb && (this.geometry.release(bb), this.slots.release(bb.slot), this.chunks.delete(yb))
      }
      remeshLost(yb, bb) {
        this.geometry.release(bb), bb.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** bb.lostRemeshes++);
        const Wy = yb.Kb,
          [Uy, hy, fy] = Wy.xKy(bb.origin[0], bb.origin[1], bb.origin[2]),
          Zy = Wy.Fh.ph(Uy, hy, fy);
        Zy && (Zy.Hh = !0, Zy.kf = !0, Wy.af(Zy, !1))
      }
      chooseFaceRanges(yb, bb, Wy) {
        const Uy = this.faceRanges;
        yb.faceMask = Wy, yb.rangeCount = (0, aP.o)(bb, Wy, Uy), yb.first0 = Uy[0], yb.count0 = Uy[1], yb.first1 = Uy[2], yb.count1 = Uy[3]
      }
      drawWhole(yb) {
        yb.faceMask = -1, yb.faceEpoch = -1, yb.rangeCount = 1, yb.first0 = 0, yb.count0 = yb.faceCount
      }
      writeSlot(yb) {
        const [bb, Wy, Uy] = this.originOffset;
        this.slots.set(yb.slot, yb.origin[0] - bb, yb.origin[1] - Wy, yb.origin[2] - Uy, yb.visibility)
      }
      materialFor(yb) {
        const bb = this.materials.get(yb);
        if (bb) return bb;
        const Wy = Sc(yb);
        if (!Wy) return this.warnOnce(`material:${yb.name}`, `Lite terrain cannot draw material "${yb.name}"; its chunks are skipped.`), null;
        const {
          model: Uy,
          atlas: hy,
          texture: fy,
          animated: Zy,
          uniformData: cb
        } = Wy, Py = {
          id: this.materials.size,
          model: Uy,
          texture: fy,
          animated: Zy,
          uniformData: cb,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${yb.name}`,
            size: cb.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Wy.liquid,
          customRenderMat: Wy.customRenderMat,
          atlasCount: 0,
          Pfy: 0,
          atlasLayers: 0,
          nextFrameAtlases: void 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve()
        };
        return this.materials.set(yb, Py), this.device.queue.writeBuffer(Py.uniformBuffer, 0, cb), Py.ready = this.createMaterialBindGroup(Py, hy).catch((bb => {
          console.error(`Lite terrain failed to load the textures of material "${yb.name}"`, bb)
        })), Py
      }
      materialLayout(yb) {
        const bb = function(yb) {
            const bb = ["uniforms"];
            if ("atlas" === yb.texture) {
              yb.animated && bb.push("animData"), bb.push("sampler");
              for (let Wy = 0; Wy < yb.atlasCount; Wy++) bb.push("textureArray")
            } else "single" === yb.texture && bb.push("sampler", "texture");
            return bb
          }(yb),
          Wy = bb.join(",");
        let Uy = this.materialLayouts.get(Wy);
        if (!Uy) {
          const yb = GPUShaderStage.FRAGMENT;
          Uy = this.device.createBindGroupLayout({
            label: `terrain-material-${Wy}`,
            entries: bb.map(((bb, Wy) => {
              switch (bb) {
                case "uniforms":
                  return {
                    binding: Wy, visibility: GPUShaderStage.VERTEX | yb, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Wy, visibility: GPUShaderStage.VERTEX | yb, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Wy, visibility: yb, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Wy, visibility: yb, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Wy, visibility: yb, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Wy, Uy)
        }
        return Uy
      }
      async createMaterialBindGroup(yb, bb) {
        const Wy = [{
          buffer: yb.uniformBuffer
        }];
        if (bb) {
          const {
            urls: Uy,
            pixels: hy,
            layerWidth: fy
          } = bb.sources, Zy = await Promise.all(Uy.map(((yb, bb) => {
            var Wy;
            return Qh(this.device, yb, null !== (Wy = null === hy || void 0 === hy ? void 0 : hy[bb]) && void 0 !== Wy ? Wy : null, fy)
          })));
          yb.atlasCount = Zy.length, yb.Pfy = Zy[0].layerWidth, yb.atlasLayers = Zy[0].layers, bb.animDataPerTex && (yb.nextFrameAtlases = (0, gb.n)(bb.animDataPerTex, yb.atlasLayers, yb.atlasCount), Wy.push({
            buffer: nh(this.device, Float32Array.from(bb.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          })), Wy.push(this.sampler);
          for (const yb of Zy) Wy.push(yb.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === yb.texture) {
          const {
            url: bb
          } = yb.model.diffuseTexture.source, {
            pixels: Uy,
            width: hy,
            height: fy
          } = await ph(bb);
          Wy.push(this.sampler), Wy.push(rf(this.device, Uy, hy, fy, 1, `terrain-${bb}`).createView({
            dimension: "2d"
          }))
        }
        const Uy = this.materialLayout(this.programKey(yb, !1));
        yb.bindGroupLayout = Uy, yb.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${yb.model.name}`,
          layout: Uy,
          entries: Wy.map(((yb, bb) => ({
            binding: bb,
            resource: yb
          })))
        })
      }
      programKey(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Uy = Wy ? Wy.lighting : this.lighting,
          hy = Wy ? Wy.eU : this.eU,
          fy = {
            texture: yb.texture,
            atlasCount: yb.atlasCount,
            Pfy: yb.Pfy,
            atlasLayers: yb.atlasLayers,
            nextFrameAtlases: yb.nextFrameAtlases,
            animated: yb.animated,
            alphaTest: yb.model.transparencyMode === Oy.o.alphaTest,
            lighting: Uy,
            dirLightCount: Wy ? Wy.dirLightCount : this.dirLightCount,
            packed: bb
          };
        if (!hy) return fy;
        const Zy = this.shaderPackFields(yb, hy),
          cb = "atlas" === yb.texture && yb.model.transparencyMode === Oy.o.opaque && fU(Zy.packVariant);
        return {
          ...fy,
          ...Zy,
          alphaTest: fy.alphaTest || cb
        }
      }
      shaderPackFields(yb, bb) {
        return yb.customRenderMat ? UU : function(yb, bb) {
          if (!yb) return UU;
          const Wy = yb.defineFor(bb ? "liquid" : "terrain");
          return 0 === Wy ? UU : {
            packVariant: Wy,
            liquid: bb
          }
        }(bb, yb.liquid)
      }
      isBlended(yb) {
        return yb.model.transparencyMode === Oy.o.alphaBlend
      }
      shaderModule(yb, bb) {
        let Wy = this.modules.get(yb);
        return Wy || (Wy = this.device.createShaderModule({
          label: bb,
          code: yb
        }), this.modules.set(yb, Wy)), Wy
      }
      pipelineFor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!yb.bindGroupLayout) return null;
        const hy = this.programKey(yb, bb);
        if (!Uy) return this.pipelineOf(yb, hy, Wy);
        const fy = {
            ...hy,
            resting: Uy
          },
          Zy = this.pipelineId(yb, fy, Wy),
          cb = this.pipelines.get(Zy);
        if (cb) return cb;
        const Py = this.pipelineOf(yb, hy, Wy);
        return Py && void 0 === cb && this.startPipeline(Zy, yb, fy, Wy), Py
      }
      pipelineOf(yb, bb, Wy) {
        const Uy = this.pipelineId(yb, bb, Wy),
          hy = this.pipelines.get(Uy);
        return void 0 !== hy ? hy : (this.startPipeline(Uy, yb, bb, Wy), null)
      }
      pipelineId(yb, bb, Wy) {
        return zP(bb, this.isBlended(yb), yb.model.backFaceCulling, Wy)
      }
      pipelineBuild(yb, bb, Wy) {
        var Uy;
        const hy = this.pipelineId(yb, bb, Wy);
        return null !== (Uy = this.builds.get(hy)) && void 0 !== Uy ? Uy : this.startPipeline(hy, yb, bb, Wy)
      }
      startPipeline(yb, bb, Wy, Uy) {
        var hy;
        this.pipelines.set(yb, null);
        const fy = MU(Wy),
          Zy = this.isBlended(bb),
          cb = this.shadowMask && Uy._depthStencilFormat ? function(yb, bb, Wy, Uy) {
            if (void 0 === yb.packVariant || yb.liquid || bb) return "none";
            const hy = (0, vW.g)(yb.packVariant);
            return null === hy || void 0 === hy || !hy.sunShadow || !HW(hy, Wy) || hy.discards || yb.alphaTest && fU(yb.packVariant) ? "none" : Uy ? "edge" : "plain"
          }(Wy, Zy, !!this.sunShadow, Uy._sampleCount > 1) : "none";
        let Py;
        try {
          Py = YU(Wy, !!this.sunShadow, cb)
        } catch (Ey) {
          if (!oU(Wy)) throw Ey;
          return this.failedPackBuild(yb, Wy, fy, Ey)
        }
        const oy = this.shaderModule(Py, fy),
          By = [];
        Wy.packed || (By.push(function(yb, bb) {
          const Wy = [{
            shaderLocation: Dc.position,
            offset: Gb.h.MU,
            format: "float32x3"
          }, {
            shaderLocation: Dc.normal,
            offset: Gb.h.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Dc.color,
            offset: Gb.h.colorOffset,
            format: "unorm8x4"
          }];
          return yb && Wy.push({
            shaderLocation: Dc.uv,
            offset: Gb.h.uvOffset,
            format: "float32x2"
          }), bb && Wy.push({
            shaderLocation: Dc.blockFlagWords,
            offset: Gb.h.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: Gb.h.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Wy
          }
        }("none" !== Wy.texture, oU(Wy))), Wy.lighting && By.push(wc));
        const Ky = bb.model.backFaceCulling,
          ey = {
            label: fy,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, bb.bindGroupLayout, ...jZ(this.device, Wy, !!this.sunShadow, "none" !== cb)]
            }),
            vertex: {
              module: oy,
              entryPoint: "mainVertex",
              buffers: By
            },
            fragment: xb({
              module: oy,
              entryPoint: "mainFragment"
            }, Uy, Zy ? kP : null),
            depthStencil: Uy._depthStencilFormat ? {
              format: Uy._depthStencilFormat,
              depthCompare: null !== (hy = Uy._depthCompare) && void 0 !== hy ? hy : Wb,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Uy._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Ky ? "back" : "none"
            }
          },
          qb = Wy.resting ? 0 : 1;
        this.compiling += qb;
        const sy = "none" === cb ? this.device.createRenderPipelineAsync(ey) : this.startMaskPipelines(oy, ey, "edge" === cb);
        sy.then((bb => {
          this.compiling -= qb, this.pipelines.set(yb, bb)
        }), (yb => {
          this.compiling -= qb, console.error(`Lite terrain pipeline ${fy} failed`, yb), rP(Wy, fy, oy, yb)
        }));
        const Sy = {
          name: fy,
          module: oy,
          built: sy
        };
        return this.builds.set(yb, Sy), Sy
      }
      startMaskPipelines(yb, bb, Wy) {
        const Uy = bb.depthStencil,
          hy = this.device.createRenderPipelineAsync(Wy ? bb : {
            ...bb,
            depthStencil: {
              ...Uy,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          fy = this.device.createRenderPipelineAsync({
            ...bb,
            label: `${bb.label}-prepass`,
            fragment: {
              module: yb,
              entryPoint: "prepassFragment",
              targets: [{
                format: Gc
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([hy, fy]).then((yb => {
          let [bb, Wy] = yb;
          return this.prepassOf.set(bb, Wy), this.maskPipelines++, bb
        }))
      }
      failedPackBuild(yb, bb, Wy, Uy) {
        console.error(`Lite terrain pipeline ${Wy} failed`, Uy), rP(bb, Wy, null, Uy);
        const hy = Promise.reject(Uy);
        hy.catch((() => {}));
        const fy = {
          name: Wy,
          module: null,
          built: hy
        };
        return this.builds.set(yb, fy), fy
      }
      checkShaderPack(yb) {
        return Xc(yb, {
          device: this.device,
          target: this.target,
          material: yb => this.materialFor(yb),
          programKey: (yb, bb, Wy) => this.programKey(yb, bb, Wy),
          pipelineBuild: (yb, bb, Wy) => this.pipelineBuild(yb, bb, Wy)
        })
      }
      createBinding(yb, bb, Wy) {
        return this.target = bb, {
          renderable: yb,
          pipeline: Zb(this.device, bb),
          draw: yb => {
            this.geometry.setDrawing(!0);
            try {
              return Wy ? this.drawTransparent(yb, bb) : this.drawOpaque(yb, bb)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(yb, bb) {
        var Wy, Uy, hy, fy;
        const {
          lb: Zy
        } = yb;
        this.lighting = yb.Uf;
        const cb = (0, ec.u)(bb);
        this.dirLightCount = Math.min(cb, 4), this.eU = null !== (Wy = Zy.eU) && void 0 !== Wy ? Wy : null, cb > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(yb, bb), this.animateMaterials(bb.animTick);
        const Py = Zy.ub,
          oy = Py[0] !== this.originOffset[0] || Py[1] !== this.originOffset[1] || Py[2] !== this.originOffset[2];
        oy && (this.originOffset[0] = Py[0], this.originOffset[1] = Py[1], this.originOffset[2] = Py[2]);
        const By = bb.eye;
        this.eye[0] = By[0], this.eye[1] = By[1], this.eye[2] = By[2], this.writeShaderPackInputs();
        const Ky = bb.projectionMatrix,
          ey = 0 === Ky[15];
        let qb = 0;
        (oy || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: sy
        } = this;
        cW(this.transparentRenderable._worldCenter, bb, hb), this.resetBatches(ey), this.transparent.length = 0, this.unlit.length = 0;
        const Sy = Zy.Kb.Zcy,
          Ey = Sy / 2 * Math.sqrt(3);
        let ly = 0;
        const mb = !!this.eU && hU(this.eU.defineFor("liquid"));
        let Cy = !1;
        const Ty = null !== (Uy = null === (hy = Zy.Im) || void 0 === hy ? void 0 : hy.visibility) && void 0 !== Uy ? Uy : null,
          Vy = this.visCull && ey && 0 === this.compiling && null !== Ty && Zy.Kb.PBy[0] >= this.visCullMinDistance ? this.target : null,
          Jy = this.visPassable,
          gb = this.visCandidates,
          Gy = this.visCandidateBatches;
        Jy.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Oy = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let Ry = 0;
        const vb = (yb, Wy) => {
          if (!Wy) return this.transparent.push(yb), void(Ry += 2 * yb.faceCount);
          if (null !== yb.faceGroups && Wy.faceCull) {
            if (0 === qb && (qb = (0, aP.e)(Ky, bb.renderWidth, bb.renderHeight), qb !== this.faceFocalPx && (this.faceFocalPx = qb, sy = ++this.faceEpoch)), yb.faceEpoch !== sy) {
              yb.faceEpoch = sy;
              const bb = Math.sqrt(yb.distance) + Ey,
                Wy = (0, aP.i)(yb.planePX, yb.planeNX, yb.planePY, yb.planeNY, yb.planePZ, yb.planeNZ, this.eye[0] - (yb.origin[0] - this.originOffset[0]), this.eye[1] - (yb.origin[1] - this.originOffset[1]), this.eye[2] - (yb.origin[2] - this.originOffset[2]), (0, aP.h)(bb, qb));
              Wy !== yb.faceMask && this.chooseFaceRanges(yb, yb.faceGroups, Wy)
            }
            if (0 === yb.rangeCount) return
          } else - 1 !== yb.faceMask && this.drawWhole(yb);
          Wy.meshes.push(yb), Ry += 2 * ((yb.rangeCount > 0 ? yb.count0 : 0) + (yb.rangeCount > 1 ? yb.count1 : 0))
        };
        for (const My of this.chunks.values()) {
          oy && this.writeSlot(My);
          const yb = My.mesh.visibility;
          yb !== My.visibility && (My.visibility = yb, this.slots.setVisibility(My.slot, yb));
          const {
            material: Wy
          } = My;
          this.geometry.lost(My) && performance.now() >= My.lostRetryAt && this.remeshLost(Zy, My);
          const Uy = !(null === Wy || void 0 === Wy || !Wy.bindGroup) && this.geometry.backed(My),
            hy = Uy && this.lighting && !My.vertices.page.twin;
          if (Vy && (Number.isNaN(My.key) && (My.ci = Math.floor(My.origin[0] / Sy), My.cj = Math.floor(My.origin[1] / Sy), My.ck = Math.floor(My.origin[2] / Sy), My.key = (0, pc.m)(My.ci, My.cj, My.ck)), (!Uy || yb < 1 || hy || !this.batchDraws(Wy, My.packed, Vy)) && this.visSeeThrough(My, Vy) && Jy.add(My.key)), !Uy) continue;
          hy || (My.lostRemeshes = 0);
          const fy = My.origin[0] - this.originOffset[0],
            cb = My.origin[1] - this.originOffset[1],
            Py = My.origin[2] - this.originOffset[2];
          if (!(0, yP.e)(bb.frustum, fy, cb, Py, Sy)) continue;
          const By = fy + Sy / 2 - this.eye[0],
            Ky = cb + Sy / 2 - this.eye[1],
            qb = Py + Sy / 2 - this.eye[2];
          if (My.distance = By * By + Ky * Ky + qb * qb, this.lighting && !My.lit && (ly = Math.max(ly, My.vertexCount), this.unlit.push(My)), hy) continue;
          const sy = this.isBlended(Wy) ? null : this.batchFor(Wy, My.packed, My.vertices.page, 1 === yb, ey);
          Vy ? (gb[Oy] = My, Gy[Oy++] = sy) : vb(My, sy)
        }
        const ib = Vy ? this.sweepVisibility(yb, bb, Ty) : null;
        null === (fy = (0, Yf.u)(Zy)) || void 0 === fy || fy.update(bb.frustum, this.originOffset, Sy, ib);
        for (let My = 0; My < Oy; My++) {
          const yb = gb[My];
          !ib || ib.isDrawn(yb.ci, yb.cj, yb.ck) ? vb(yb, Gy[My]) : (this.visCulledParts++, this.visCulledTriangles += 2 * yb.faceCount)
        }
        for (const My of this.transparent) Cy ||= mb && My.material.liquid && !My.material.customRenderMat;
        this.submittedTriangles = Ry, ib && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(yb, bb, ib)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Cy) : Cy && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && ly > 0 && this.geometry.lightFullSky(this.unlit, ly);
        for (const My of this.opaqueBatches) this.chunkSorter.sort(My.meshes, 1) || My.meshes.sort(Ic);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(xP)
      }
      sweepVisibility(yb, bb, Wy) {
        const {
          Kb: Uy
        } = yb.lb, hy = Uy.Zcy, fy = this.visPassable, Zy = this.eye[0] + this.originOffset[0], cb = this.eye[1] + this.originOffset[1], Py = this.eye[2] + this.originOffset[2];
        if (!Wy.eyeClear(Zy, cb, Py, bb.near, bb.projectionMatrix, Uy)) return null;
        const [oy, By] = Uy.PBy, Ky = Wy.update(Zy, cb, Py, hy, oy, By, fy);
        return this.visSweeps = Wy.sweeps, Ky ? Wy : null
      }
      visSeeThrough(yb, bb) {
        const {
          material: Wy
        } = yb;
        return (!Wy || !this.isBlended(Wy)) && (yb.mesh.visibility < 1 || !(null !== Wy && void 0 !== Wy && Wy.bindGroup) || yb.faceCount > 0 && (!this.geometry.backed(yb) || this.lighting && !yb.vertices.page.twin) || !this.batchDraws(Wy, yb.packed, bb))
      }
      batchDraws(yb, bb, Wy) {
        var Uy;
        const hy = bb ? 2 : 0;
        if (yb === this.visDrawsMaterial && function(yb, bb) {
            return 0 !== (yb & 1 << bb)
          }(this.visDrawsBits, hy)) return 0 !== (this.visDrawsBits & 2 << hy);
        let fy = null !== (Uy = this.visBatchDraws.get(yb)) && void 0 !== Uy ? Uy : 0;
        if (!(fy & 1 << hy)) {
          fy |= 1 << hy | (!!yb.bindGroupLayout && this.canDraw(yb, bb) && !!this.pipelines.get(this.pipelineId(yb, this.programKey(yb, bb), Wy)) ? 2 << hy : 0), this.visBatchDraws.set(yb, fy)
        }
        return this.visDrawsMaterial = yb, this.visDrawsBits = fy, 0 !== (fy & 2 << hy)
      }
      runVisCheck(yb, bb, Wy) {
        const {
          lb: Uy
        } = yb, {
          Kb: hy
        } = Uy, fy = hy.Zcy, Zy = new Set;
        for (const qb of this.chunks.values()) Zy.add(qb.key);
        const cb = Th.Matrix.FromArray(bb.viewProjectionMatrix).invert(),
          [Py, oy, By] = this.originOffset,
          Ky = new Th.dU,
          ey = function(yb, bb, Wy, Uy) {
            const hy = new Set;
            for (let fy = 0; fy < 27; fy++)
              for (let Zy = 0; Zy < 48; Zy++) {
                const cb = Wy((Zy + .5) / 48 * 2 - 1, (fy + .5) / 27 * 2 - 1);
                Lc(yb, bb, [cb[0] - bb[0], cb[1] - bb[1], cb[2] - bb[2]], Uy, hy)
              }
            return hy
          }({
            ahy: (yb, bb, Wy) => hy.ahy(yb, bb, Wy),
            occluders: Wy.occluders,
            opaque: Wy.opaque,
            DU: fy,
            isDrawn: (yb, bb, Uy) => Wy.isDrawn(yb, bb, Uy),
            hasParts: (yb, bb, Wy) => Zy.has((0, pc.m)(yb, bb, Wy))
          }, [this.eye[0] + Py, this.eye[1] + oy, this.eye[2] + By], ((yb, bb) => (Th.dU.TransformCoordinatesFromFloatsToRef(yb, bb, .5, cb, Ky), [Ky.x + Py, Ky.y + oy, Ky.z + By])), (hy.PBy[0] + 1) * fy);
        this.visViolations = ey.size;
        for (const qb of ey) this.warnOnce(`vis:${qb}`, `Lite terrain cave culling skipped chunk ${qb}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var yb;
        null !== (yb = this.eU) && void 0 !== yb && yb.isRunning() && (this.shaderPackInputs ??= new Df(this.device, this.eU.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.eU, this.eye, this.lighting))
      }
      bindShaderPackInputs(yb, bb, Wy) {
        var Uy, hy, fy, Zy;
        let cb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const {
          packVariant: Py
        } = this.shaderPackFields(bb, Wy);
        if (void 0 === Py) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Df(this.device, Wy.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Wy, this.eye, this.lighting));
        const oy = hU(Py) ? null !== (Uy = null === (hy = this.sceneDepth) || void 0 === hy ? void 0 : hy.view) && void 0 !== Uy ? Uy : this.standIn() : null,
          By = cb ? null !== (fy = null === (Zy = this.shadowMask) || void 0 === Zy ? void 0 : Zy.view) && void 0 !== fy ? fy : this.standIn() : null;
        this.shaderPackInputs.bind(yb, oy, Qf(Py, !!this.sunShadow), By)
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
        var yb, bb;
        return null !== (yb = null === (bb = this.shaderPackInputs) || void 0 === bb ? void 0 : bb.bindGroupFor(null, !0)) && void 0 !== yb ? yb : null
      }
      resetBatches(yb) {
        const bb = this.opaqueBatches;
        let Wy = 0;
        for (const Uy of bb) Uy.meshes.length > 0 && (Uy.meshes.length = 0, Uy.faceCull = this.batchFaceCull(Uy.material, yb), bb[Wy++] = Uy);
        bb.length = Wy
      }
      orderBatches() {
        const yb = this.opaqueBatches;
        for (let bb = 0; bb < yb.length; bb++) {
          const Wy = yb[bb];
          Wy.group = bb;
          for (let Uy = 0; Uy < bb; Uy++) {
            const bb = yb[Uy];
            if (bb.material === Wy.material && bb.packed === Wy.packed) {
              Wy.group = bb.group;
              break
            }
          }
          Wy.nearest = Wy.meshes.length > 0 ? Wy.meshes[0].distance : 1 / 0
        }
        yb.sort(Qc)
      }
      batchFor(yb, bb, Wy, Uy, hy) {
        for (const Zy of this.opaqueBatches)
          if (Zy.material === yb && Zy.packed === bb && Zy.page === Wy && Zy.resting === Uy) return Zy;
        const fy = {
          material: yb,
          packed: bb,
          page: Wy,
          resting: Uy,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(yb, hy)
        };
        return this.opaqueBatches.push(fy), fy
      }
      batchFaceCull(yb, bb) {
        return !(!bb || !(0, Hc.u)(yb.model)) && (!this.eU || ! function(yb) {
          var bb;
          return !(null === (bb = (0, vW.g)(yb)) || void 0 === bb || !bb.movesVertices)
        }(this.shaderPackFields(yb, this.eU).packVariant))
      }
      writeFrameUniforms(yb, bb) {
        const Wy = this.frameUniforms,
          Uy = BU;
        if ((0, ec.y)(yb, Wy), Wy[Uy.fogInfos] = bb.fogEnabled ? bb.fogMode : 0, Wy[Uy.fogInfos + 1] = bb.fogStart, Wy[Uy.fogInfos + 2] = bb.fogEnd, Wy[Uy.fogInfos + 3] = bb.fogDensity, Wy.set(bb.fogColour, Uy.fogColour), Wy[Uy.outputHeight] = bb.renderHeight, Wy.set(bb.ambientColour, Uy.sceneAmbient), (0, ec.t)(bb, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const bb = (0, qP.k)(yb.Vh, yb.NU, yb.zh);
          for (let yb = 0; yb < 4; yb++) Wy[Uy.aoLevels + yb] = bb[yb] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Wy)
      }
      animateMaterials(yb) {
        const bb = eU.anim;
        for (const Wy of this.materials.values()) Wy.animated && (Wy.uniformData[bb] = yb, this.device.queue.writeBuffer(Wy.uniformBuffer, 4 * bb, Wy.uniformData, bb, 1))
      }
      canDraw(yb, bb) {
        return !("atlas" === yb.texture && !bb) || (this.warnOnce(`stride:${yb.id}`, `Lite terrain: material "${yb.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(yb, bb) {
        let Wy = 0;
        yb.setBindGroup(1, this.frameBindGroup);
        for (const Uy of this.opaqueBatches) {
          if (!Uy.meshes.length || !this.canDraw(Uy.material, Uy.packed)) continue;
          const hy = this.pipelineFor(Uy.material, Uy.packed, bb, Uy.resting);
          hy && (yb.setPipeline(hy), yb.setBindGroup(2, Uy.material.bindGroup), this.eU && this.bindShaderPackInputs(yb, Uy.material, this.eU, this.prepassOf.has(hy)), Wy += this.drawBatch(yb, Uy))
        }
        return Wy
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(yb, bb, Wy) {
        const Uy = this.target,
          hy = this.eU;
        if (!Uy || !hy || 0 === this.maskPipelines) return 0;
        let fy = 0,
          Zy = null;
        this.geometry.setDrawing(!0);
        try {
          for (const cb of this.opaqueBatches) {
            if (!cb.meshes.length || !this.canDraw(cb.material, cb.packed)) continue;
            const Py = this.pipelineFor(cb.material, cb.packed, Uy, cb.resting),
              oy = Py && this.prepassOf.get(Py);
            oy && (Zy || (Zy = yb.beginRenderPass(bb), Zy.setBindGroup(0, Wy), Zy.setBindGroup(1, this.frameBindGroup)), Zy.setPipeline(oy), Zy.setBindGroup(2, cb.material.bindGroup), this.bindShaderPackInputs(Zy, cb.material, hy, !0), fy += this.drawBatch(Zy, cb))
          }
        } finally {
          var cb;
          null === (cb = Zy) || void 0 === cb || cb.end(), this.geometry.setDrawing(!1)
        }
        return fy
      }
      drawBatch(yb, bb) {
        let Wy = 0;
        for (const Uy of bb.meshes) {
          const {
            rangeCount: bb
          } = Uy;
          bb > 0 && (Wy += this.geometry.draw(yb, Uy, this.lighting, Uy.first0, Uy.count0), bb > 1 && (Wy += this.geometry.draw(yb, Uy, this.lighting, Uy.first1, Uy.count1)))
        }
        return Wy
      }
      drawTransparent(yb, bb) {
        let Wy = 0,
          Uy = null,
          hy = null;
        yb.setBindGroup(1, this.frameBindGroup);
        for (const fy of this.transparent) {
          const Zy = fy.material;
          if (!this.canDraw(Zy, fy.packed)) continue;
          const cb = this.pipelineFor(Zy, fy.packed, bb);
          cb && (cb !== Uy && (yb.setPipeline(cb), Uy = cb, this.eU && this.bindShaderPackInputs(yb, Zy, this.eU)), Zy !== hy && (yb.setBindGroup(2, Zy.bindGroup), hy = Zy), Wy += this.geometry.draw(yb, fy, this.lighting))
        }
        return Wy
      }
    }

    function zP(yb, bb, Wy, Uy) {
      return `${MU(yb)}|${yb.atlasLayers}|${yb.Pfy}|${bb}|${Wy}|${Uy._colorFormat}|${Uy._depthStencilFormat}|${Uy._sampleCount}`
    }

    function Ic(yb, bb) {
      return yb.distance - bb.distance
    }

    function xP(yb, bb) {
      return bb.distance - yb.distance
    }
    class Ac {
      constructor() {
        this.left = []
      }
      sort(yb, bb) {
        for (let Wy = 0; Wy < yb.length; Wy++) {
          const bb = yb[Wy].distance;
          if (bb - bb !== 0) return !1
        }
        return this.sortRange(yb, 0, yb.length, bb), !0
      }
      sortRange(yb, bb, Wy, Uy) {
        if (Wy - bb <= 16) {
          for (let hy = bb + 1; hy < Wy; hy++) {
            const Wy = yb[hy],
              fy = Uy * Wy.distance;
            let Zy = hy - 1;
            for (; Zy >= bb && Uy * yb[Zy].distance > fy; Zy--) yb[Zy + 1] = yb[Zy];
            yb[Zy + 1] = Wy
          }
          return
        }
        const hy = bb + Wy >>> 1;
        if (this.sortRange(yb, bb, hy, Uy), this.sortRange(yb, hy, Wy, Uy), Uy * yb[hy - 1].distance <= Uy * yb[hy].distance) return;
        const {
          left: fy
        } = this, Zy = hy - bb;
        for (let By = 0; By < Zy; By++) fy[By] = yb[bb + By];
        let cb = 0,
          Py = hy,
          oy = bb;
        for (; cb < Zy && Py < Wy;) yb[oy++] = Uy * yb[Py].distance < Uy * fy[cb].distance ? yb[Py++] : fy[cb++];
        for (; cb < Zy;) yb[oy++] = fy[cb++]
      }
    }
    const dc = Math.ceil(102);

    function yo(yb, bb, Wy, Uy) {
      let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : bb;
      const fy = Math.min(bb, Wy),
        Zy = new Uint32Array(yU(Uy));
      for (let cb = 0; cb < Uy; cb++) {
        const bb = Math.floor(cb * fy / Uy),
          Wy = Math.max(bb + 1, Math.floor((cb + 1) * fy / Uy));
        for (let Py = 0; Py < Uy; Py++) {
          const oy = Math.floor(Py * fy / Uy),
            By = Math.max(oy + 1, Math.floor((Py + 1) * fy / Uy));
          let Ky = 0;
          for (let Uy = bb; Uy < Wy; Uy++)
            for (let bb = oy; bb < By; bb++) yb[Uy * hy + bb] >= dc && Ky++;
          if (2 * Ky >= (Wy - bb) * (By - oy)) {
            const yb = Py + Uy * cb;
            Zy[yb >>> 5] |= 1 << (31 & yb)
          }
        }
      }
      return Zy
    }

    function bo(yb) {
      return Math.max(1, Math.min(16, yb))
    }
    class WP {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = yb, this.loadTexture = bb, this.warn = Wy, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(yb, bb) {
        return (yb.xUy !== this.builtVersion || this.blockCaster.length !== bb) && (this.build(yb, bb), !0)
      }
      build(yb, bb) {
        this.builtVersion = yb.xUy;
        const Wy = new Uint16Array(bb),
          Uy = new Map;
        for (let hy = 1; hy < bb; hy++) {
          const bb = this.classify(yb, hy, Uy);
          if (null === bb || bb === zW) {
            Wy[hy] = null === bb ? 0 : zW;
            continue
          }
          let fy = this.byKey.get(bb.key);
          void 0 === fy && (fy = this.allocate(bb), this.byKey.set(bb.key, fy)), Wy[hy] = fy
        }
        this.blockCaster = Wy, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(yb, bb) {
        const Wy = yb.Rfy[bb];
        if ("function" !== typeof Wy) return Wy;
        try {
          return Wy()
        } catch (Uy) {
          return this.warnOnce(`Sun shadows: no caster option for block ${bb}: ${Uy instanceof Error?Uy.message:String(Uy)}`), null
        }
      }
      classify(yb, bb, Wy) {
        const Uy = this.option(yb, bb);
        if ("none" === Uy) return null;
        if (Uy && Uy.planes.length > 0) {
          const yb = Uy.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(yb)}`,
            planes: yb
          }
        }
        if (yb.mU[bb]) return null;
        const hy = yb.VW[bb] ? yb.dWy(bb) : null;
        if (hy && hy.length >= 6) {
          const yb = function(yb) {
            const bb = new Uint32Array(16);
            for (let Wy = 0; Wy + 6 <= yb.length; Wy += 6) {
              const Uy = [0, 1, 2].map((bb => Math.max(0, Math.ceil(8 * yb[Wy + bb] - .5)))),
                hy = [0, 1, 2].map((bb => Math.min(7, Math.floor(8 * yb[Wy + bb + 3] - .5))));
              for (let yb = Uy[2]; yb <= hy[2]; yb++)
                for (let Wy = Uy[1]; Wy <= hy[1]; Wy++)
                  for (let fy = Uy[0]; fy <= hy[0]; fy++) {
                    const Uy = fy + 8 * (Wy + 8 * yb);
                    bb[Uy >>> 5] |= 1 << (31 & Uy)
                  }
            }
            return bb
          }(hy);
          return function(yb) {
            return yb.every((yb => 4294967295 === yb))
          }(yb) ? zW : yb.every((yb => 0 === yb)) ? null : {
            kind: "shape",
            key: `shape:${yb.join(",")}`,
            mask: yb
          }
        }
        if (yb.PUy[bb] || !yb.Jh[bb]) return null;
        const fy = [0, 1, 2, 3, 4, 5].map((Uy => {
          const hy = yb.gf[6 * bb + Uy];
          let fy = Wy.get(hy);
          return void 0 === fy && (fy = function(yb) {
            if (!yb || yb.uh) return null;
            const {
              cZy: bb,
              Pfy: Wy,
              Zfy: Uy
            } = yb;
            if (!bb || !Wy || !(Wy > 0) || void 0 === Uy || !(Uy >= 0)) return null;
            const hy = bb[0],
              fy = Wy * Wy * 4;
            if (!hy || hy.byteLength < fy) return null;
            const Zy = Math.floor(hy.byteLength / fy),
              cb = bb[Math.floor(Uy / Zy)];
            if (!cb) return null;
            const Py = new Uint8Array(cb.buffer, cb.byteOffset, cb.byteLength),
              oy = Uy % Zy * fy;
            if (oy + fy > Py.length) return null;
            const By = new Uint8Array(Wy * Wy);
            let Ky = !1;
            for (let ey = 0; ey < By.length; ey++) By[ey] = Py[oy + 4 * ey + 3], Ky ||= By[ey] < dc;
            return Ky ? {
              alpha: By,
              width: Wy
            } : null
          }(yb.nh(hy)), Wy.set(hy, fy)), fy
        }));
        if (fy.every((yb => null === yb))) return zW;
        const Zy = bo(Math.max(...fy.map((yb => {
            var bb;
            return null !== (bb = null === yb || void 0 === yb ? void 0 : yb.width) && void 0 !== bb ? bb : 1
          })))),
          cb = new Uint32Array(yU(Zy)).fill(4294967295),
          Py = fy.map((yb => null === yb ? cb : yo(yb.alpha, yb.width, yb.width, Zy)));
        return {
          kind: "cutout",
          key: `cutout:${Zy}:${Py.map((yb=>yb.join(","))).join("|")}`,
          size: Zy,
          faces: Py
        }
      }
      allocate(yb) {
        if (this.nextCaster >= bU) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const bb = this.nextCaster++;
        if (this.writeCaster(bb, Ib, 0, 0, 0), "shape" === yb.kind) {
          const Wy = this.allocateMask(yb.mask.length);
          Wy >= 0 && (this.sink(Wy, yb.mask), this.writeCaster(bb, xW, Wy, 0, 8))
        } else if ("cutout" === yb.kind) {
          const Wy = yU(yb.size),
            Uy = this.allocateMask(6 * Wy);
          if (Uy >= 0) {
            const hy = new Uint32Array(6 * Wy);
            yb.faces.forEach(((yb, bb) => {
              hy.set(yb, bb * Wy)
            })), this.sink(Uy, hy), this.writeCaster(bb, db, Uy, 0, yb.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(bb, yb.planes).finally((() => {
          this.planesLoading--
        })));
        return bb
      }
      async loadPlanes(yb, bb) {
        const Wy = await Promise.all(bb.map((yb => this.texture(yb.texture))));
        if (Wy.some((yb => null === yb))) return;
        const Uy = Wy,
          hy = bo(Math.max(...Uy.map((yb => Math.min(yb.width, yb.height))))),
          fy = yU(hy),
          Zy = this.allocateMask(bb.length * (4 + fy));
        if (Zy < 0) return;
        const cb = new Uint32Array(bb.length * (4 + fy)),
          Py = 4 * bb.length;
        bb.forEach(((yb, bb) => {
          const Wy = Zy + Py + bb * fy;
          cb.set(function(yb, bb) {
            const [Wy, Uy] = yb.tangent, hy = Math.hypot(Wy, Uy) || 1, fy = Wy / hy, Zy = Uy / hy, cb = yb.centre[0] * Zy - yb.centre[1] * fy, Py = new Uint32Array(4);
            return new Float32Array(Py.buffer, 0, 3).set([fy, Zy, cb]), Py[3] = bb, Py
          }(yb, Wy), 4 * bb), cb.set(yo(Uy[bb].alpha, Uy[bb].width, Uy[bb].height, hy), Py + bb * fy)
        })), this.sink(Zy, cb), this.writeCaster(yb, Ab, Zy, bb.length, hy)
      }
      texture(yb) {
        let bb = this.textures.get(yb);
        return bb || (bb = this.loadTexture(yb).catch((bb => (this.warn(`Sun shadows: no mask for ${yb}: ${bb instanceof Error?bb.message:String(bb)}`), null))), this.textures.set(yb, bb)), bb
      }
      allocateMask(yb) {
        if (this.nextMaskWord + yb > WW) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const bb = 32768 + this.nextMaskWord;
        return this.nextMaskWord += yb, bb
      }
      writeCaster(yb, bb, Wy, Uy, hy) {
        this.sink(0 + 4 * yb, Uint32Array.of(bb, Wy, Uy, hy))
      }
      warnOnce(yb) {
        this.warned.has(yb) || (this.warned.add(yb), this.warn(yb))
      }
    }
    var UP = Wy(36355);

    function hP(yb) {
      return !yb.Hh && !yb.ABy && !yb.Kh
    }

    function fP() {
      return {
        bricks: new Uint32Array(Lb),
        cells: new Uint16Array(32768),
        special: new Uint8Array(Fb)
      }
    }
    class ZP {
      constructor(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = yb, this.writeVoxels = bb, this.writePool = Wy, this.warn = Uy, this.eyeChunk = null, this.slotChunk = new Array(Xb).fill(null), this.slotVersion = new Float64Array(Xb).fill(-1), this.slotPool = new Array(Xb).fill(null), this.starved = new Uint8Array(Xb), this.queue = [], this.queued = new Uint8Array(Xb), this.queueSorted = !0, this.freePool = new Uint32Array(UW), this.freeCount = UW, this.casterTable = null, this.warnedPool = !1, this.scratch = fP(), this.victimScratch = fP(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * Xb), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let hy = 0; hy < UW; hy++) this.freePool[hy] = 65535 - hy
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return UW - this.freeCount
      }
      chunkAdded(yb) {
        if (null === this.eyeChunk || !this.inRadius(yb.i, yb.j, yb.k)) return;
        const bb = wb(yb.i, yb.j, yb.k);
        this.slotChunk[bb] = yb, this.slotVersion[bb] = -1, this.enqueue(bb)
      }
      update(yb, bb, Wy) {
        const Uy = this.casters.blockCaster;
        if (Uy !== this.casterTable) {
          this.casterTable = Uy;
          for (let yb = 0; yb < Xb; yb++) this.slotVersion[yb] = -1, this.slotChunk[yb] && this.enqueue(yb)
        }
        const hy = Math.floor(yb[0] / 32),
          fy = Math.floor(yb[1] / 32),
          Zy = Math.floor(yb[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== hy || this.eyeChunk[1] !== fy || this.eyeChunk[2] !== Zy) && (this.eyeChunk = [hy, fy, Zy], this.follow(bb), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let cb = 0; cb < Xb; cb++) {
          const yb = this.slotChunk[cb];
          yb && (yb.Koy || yb.sh !== this.slotVersion[cb]) && this.enqueue(cb)
        }
        this.drain(Wy), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(yb, bb) {
        this.records.set(bb, 4 * yb), this.windowTopStale = !0, this.writeVoxels(4 * yb, bb)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const yb = this.records;
        let bb = -1 / 0;
        for (let Uy = 0; Uy < yb.length; Uy += 4) {
          const Wy = 255 & yb[Uy + 3];
          Wy !== rW && Wy !== Hb || !this.inRadius(yb[Uy], yb[Uy + 1], yb[Uy + 2]) || (bb = Math.max(bb, yb[Uy + 1] * iW + (yb[Uy + 3] >>> 8)))
        }
        const Wy = bb === -1 / 0 ? 1 : bb + jW;
        Wy !== this.windowTop[0] && (this.windowTop[0] = Wy, this.writeVoxels(Qb, this.windowTop))
      }
      follow(yb) {
        const bb = this.eyeChunk,
          [Wy, Uy, hy] = Mb;
        for (let Zy = -hy; Zy <= hy; Zy++)
          for (let hy = -Uy; hy <= Uy; hy++)
            for (let Uy = -Wy; Uy <= Wy; Uy++) {
              var fy;
              const Wy = bb[0] + Uy,
                cb = bb[1] + hy,
                Py = bb[2] + Zy,
                oy = wb(Wy, cb, Py),
                By = this.slotChunk[oy];
              if (By && !By.Koy && By.i === Wy && By.j === cb && By.k === Py) continue;
              const Ky = null !== (fy = yb(Wy, cb, Py)) && void 0 !== fy ? fy : null;
              By && (By.i !== Wy || By.j !== cb || By.k !== Py) && this.slotPool[oy] && (this.release(oy), this.record.fill(0), this.writeRecord(oy, this.record)), this.slotChunk[oy] = Ky, this.slotVersion[oy] = -1, (Ky || By) && this.enqueue(oy)
            }
      }
      requeueStarved() {
        for (let yb = 0; yb < Xb; yb++) this.starved[yb] && this.slotChunk[yb] && this.enqueue(yb)
      }
      enqueue(yb) {
        this.queued[yb] || (this.queued[yb] = 1, this.queue.push(yb), this.queueSorted = !1)
      }
      drain(yb) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const yb = new Map;
          for (const bb of this.queue) yb.set(bb, this.slotDistance(bb));
          this.queue.sort(((bb, Wy) => yb.get(Wy) - yb.get(bb))), this.queueSorted = !0
        }
        const bb = performance.now();
        let Wy = 0;
        const Uy = [];
        for (; this.queue.length > 0 && (0 === Wy || performance.now() - bb < yb);) {
          const yb = this.queue.pop(),
            bb = this.slotChunk[yb];
          !bb || bb.Koy || hP(bb) ? (this.queued[yb] = 0, this.encodeSlot(yb), Wy++) : Uy.push(yb)
        }
        for (let hy = Uy.length - 1; hy >= 0; hy--) this.queue.push(Uy[hy])
      }
      slotDistance(yb) {
        const bb = this.slotChunk[yb],
          Wy = this.eyeChunk;
        return bb ? Math.max(Math.abs(bb.i - Wy[0]), Math.abs(bb.j - Wy[1]), Math.abs(bb.k - Wy[2])) : 0
      }
      inRadius(yb, bb, Wy) {
        const Uy = this.eyeChunk,
          [hy, fy, Zy] = Mb;
        return Math.abs(yb - Uy[0]) <= hy && Math.abs(bb - Uy[1]) <= fy && Math.abs(Wy - Uy[2]) <= Zy
      }
      release(yb) {
        const bb = this.slotPool[yb];
        if (bb) {
          for (let yb = bb.length - 1; yb >= 0; yb--) this.freePool[this.freeCount++] = bb[yb];
          this.slotPool[yb] = null
        }
      }
      encodeSlot(yb) {
        var bb, Wy, Uy, hy, fy;
        let Zy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          cb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Py = null !== (bb = null === (Wy = this.slotPool[yb]) || void 0 === Wy ? void 0 : Wy.length) && void 0 !== bb ? bb : 0;
        this.release(yb), this.starved[yb] = 0;
        const oy = this.slotChunk[yb],
          By = this.record;
        if (!oy || oy.Koy || !oy.pb) return this.slotChunk[yb] = null, this.slotVersion[yb] = -1, By.fill(0), this.writeRecord(yb, By), void(Py > 0 && this.requeueStarved());
        this.slotVersion[yb] = oy.sh;
        const Ky = this.encodeBricks(oy, yb, Zy, cb);
        By[0] = oy.i, By[1] = oy.j, By[2] = oy.k, By[3] = Ky, this.writeRecord(yb, By), null === (Uy = this.encoded) || void 0 === Uy || Uy.call(this, oy), cb && (null !== (hy = null === (fy = this.slotPool[yb]) || void 0 === fy ? void 0 : fy.length) && void 0 !== hy ? hy : 0) < Py && this.requeueStarved()
      }
      encodeBricks(yb, bb, Wy, Uy) {
        if (yb.ih) return ub;
        const hy = this.casters.blockCaster,
          {
            data: fy,
            stride: Zy,
            offset: cb
          } = yb.pb,
          [Py, oy, By] = Zy,
          Ky = iW,
          {
            bricks: ey,
            cells: qb,
            special: sy
          } = Wy;
        ey.fill(0), sy.fill(0);
        let Sy = 0,
          Ey = 0,
          ly = 0;
        for (let mb = 0; mb < Ky; mb++) {
          const bb = mb >> 2,
            Wy = 3 & mb,
            Uy = yb.pW[mb],
            Zy = Uy === UP.d ? -1 : Uy < hy.length ? hy[Uy] : 0;
          if (0 !== Zy)
            for (let yb = 0; yb < Ky; yb++) {
              const Uy = yb >> 2,
                Cy = 3 & yb;
              let Ty = cb + yb * Py + mb * oy;
              for (let yb = 0; yb < Ky; yb++, Ty += By) {
                let cb = Zy;
                if (cb < 0) {
                  const yb = fy[Ty];
                  if (cb = yb < hy.length ? hy[yb] : 0, 0 === cb) continue
                }
                const Py = kW(Uy, bb, yb >> 2),
                  oy = Nb(Cy, Wy, 3 & yb);
                ey[3 * Py + (oy >>> 5)] |= 1 << (31 & oy), qb[Py * aW + oy] = cb, Sy++, ly = mb, cb === zW ? Ey++ : sy[Py] = 1
              }
            }
        }
        return 0 === Sy ? ub : 32768 === Ey ? rW | ly << 8 : (this.writePoolEntries(bb, Wy, Uy), this.writeVoxels(pb + bb * Lb, ey), Hb | ly << 8)
      }
      writePoolEntries(yb, bb, Wy) {
        const {
          bricks: Uy,
          cells: hy,
          special: fy
        } = bb, Zy = this.entry;
        let cb = 0;
        for (let By = 0; By < Fb; By++) cb += fy[By];
        if (0 === cb) return;
        Wy && this.freeCount < cb && this.evictBeyond(yb, cb);
        const Py = new Uint32Array(Wy ? Math.min(cb, this.freeCount) : 0);
        let oy = 0;
        for (let By = 0; By < Fb; By++) {
          if (!fy[By]) continue;
          const Wy = 3 * By;
          if (oy === Py.length) {
            this.dropSpecials(bb, By), this.starved[yb] = 1;
            continue
          }
          const cb = this.freePool[--this.freeCount];
          Py[oy++] = cb;
          for (let yb = 0; yb < aW; yb++) {
            const bb = Uy[Wy + (yb >>> 5)] >>> (31 & yb) & 1 ? hy[By * aW + yb] : 0;
            1 & yb ? Zy[yb >> 1] |= bb << 16 : Zy[yb >> 1] = bb
          }
          Uy[Wy + 2] = cb + 1, this.writePool(hW + 32 * cb, Zy)
        }
        Py.length > 0 && (this.slotPool[yb] = Py)
      }
      evictBeyond(yb, bb) {
        const Wy = this.slotDistance(yb),
          Uy = [];
        for (let hy = 0; hy < Xb; hy++) hy !== yb && this.slotPool[hy] && this.slotDistance(hy) > Wy && Uy.push(hy);
        Uy.sort(((yb, bb) => this.slotDistance(bb) - this.slotDistance(yb)));
        for (const hy of Uy) {
          if (this.freeCount >= bb) return;
          const yb = this.slotChunk[hy];
          yb && !yb.Koy && yb.pb && (yb.sh === this.slotVersion[hy] || hP(yb)) && this.encodeSlot(hy, this.victimScratch, !1)
        }
      }
      dropSpecials(yb, bb) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Wy = 3 * bb;
        for (let Uy = 0; Uy < aW; Uy++) yb.cells[bb * aW + Uy] !== zW && (yb.bricks[Wy + (Uy >>> 5)] &= ~(1 << (31 & Uy)))
      }
    }
    var co = Wy(36060);
    class PP {
      constructor(yb) {
        this.device = yb, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new SW, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Kb = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = yb.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = yb.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(yb, bb, Wy) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Uy
        } = this;
        Uy.vU(yb, bb), Wy.forEachSunShadowCaster((yb => {
          this.add(yb)
        })), Uy.finish();
        const hy = 0 === Uy.parts;
        if (hy && this.uploadedEmpty) return;
        this.uploadedEmpty = hy;
        const {
          queue: fy
        } = this.device, {
          words: Zy
        } = Uy;
        fy.writeBuffer(this.frameBuffer, 0, Zy, 0, 16385), Uy.refs > 0 && fy.writeBuffer(this.frameBuffer, 65540, Zy, PW, Uy.refs), hy || fy.writeBuffer(this.frameBuffer, 327684, Zy, oW, Uy.parts * cU)
      }
      add(yb) {
        const bb = this.gridFor(yb);
        if (!bb) return;
        const {
          frame: Wy
        } = this, {
          Kb: Uy,
          worldAt: hy,
          instances: fy,
          instanceCount: Zy,
          thin: cb
        } = yb;
        if (fy)
          for (let Py = 0; Py < Zy; Py++) cb ? (lW(fy, 16 * Py, Uy, hy, this.Kb), Wy.add(bb, this.Kb)) : Wy.add(bb, fy, 16 * Py);
        else Wy.add(bb, Uy, hy)
      }
      gridFor(yb) {
        let {
          geometry: bb,
          indexed: Wy,
          first: Uy,
          count: hy,
          skip: fy
        } = yb, Zy = this.grids.get(bb);
        Zy || (Zy = new Map, this.grids.set(bb, Zy));
        const cb = `${Wy?Uy:-1-Uy}:${hy}:${null!==fy&&void 0!==fy?fy:""}`;
        let Py = Zy.get(cb);
        if (void 0 !== Py || this.gridsFull) return Py;
        const oy = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = oy + 2;
        else if (oy > this.bakeDeadline) return;
        return Py = this.bake(bb, Wy, Uy, hy, fy), void 0 !== Py && Zy.set(cb, Py), Py
      }
      bake(yb, bb, Wy, Uy, hy) {
        const fy = yb.vertexAttributes.find((yb => "position" === yb.kind)),
          Zy = fy ? function(yb, bb, Wy, Uy) {
            let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const fy = yb => bb ? bb[Wy + yb] : Wy + yb,
              Zy = yb => null !== hy && [0, 1, 2].some((bb => {
                const Wy = fy(yb + bb);
                return Wy >= hy[0] && Wy < hy[1]
              })),
              cb = [1 / 0, 1 / 0, 1 / 0],
              Py = [-1 / 0, -1 / 0, -1 / 0];
            for (let mb = 0; mb + 2 < Uy; mb += 3)
              if (!Zy(mb))
                for (let bb = 0; bb < 3; bb++) {
                  const Wy = fy(mb + bb);
                  for (let bb = 0; bb < 3; bb++) cb[bb] = Math.min(cb[bb], yb[3 * Wy + bb]), Py[bb] = Math.max(Py[bb], yb[3 * Wy + bb])
                }
            const oy = Math.max(Py[0] - cb[0], Py[1] - cb[1], Py[2] - cb[2]);
            if (!(oy > 0)) return null;
            const By = oy / 64,
              Ky = [0, 0, 0],
              ey = [0, 0, 0],
              qb = [0, 0, 0];
            for (let mb = 0; mb < 3; mb++) Ky[mb] = Math.min(65, Math.ceil((Py[mb] - cb[mb]) / By) + 1), ey[mb] = cb[mb] - By / 2, qb[mb] = ey[mb] + Ky[mb] * By;
            const sy = new Uint32Array(Math.ceil(Ky[0] * Ky[1] * Ky[2] / 32)),
              Sy = new Float64Array(9),
              Ey = [0, 0, 0],
              ly = [0, 0, 0];
            for (let mb = 0; mb + 2 < Uy; mb += 3)
              if (!Zy(mb)) {
                for (let bb = 0; bb < 3; bb++) {
                  const Wy = fy(mb + bb);
                  for (let Uy = 0; Uy < 3; Uy++) Sy[3 * bb + Uy] = yb[3 * Wy + Uy]
                }
                for (let yb = 0; yb < 3; yb++) {
                  const bb = Math.min(Sy[yb], Sy[3 + yb], Sy[6 + yb]),
                    Wy = Math.max(Sy[yb], Sy[3 + yb], Sy[6 + yb]);
                  Ey[yb] = Math.max(0, Math.floor((bb - ey[yb]) / By - 1e-6)), ly[yb] = Math.min(Ky[yb] - 1, Math.floor((Wy - ey[yb]) / By + 1e-6))
                }
                for (let yb = Ey[2]; yb <= ly[2]; yb++)
                  for (let bb = Ey[1]; bb <= ly[1]; bb++)
                    for (let Wy = Ey[0]; Wy <= ly[0]; Wy++)
                      if (mU(Sy, ey[0] + (Wy + .5) * By, ey[1] + (bb + .5) * By, ey[2] + (yb + .5) * By, By / 2)) {
                        const Uy = Wy + Ky[0] * (bb + Ky[1] * yb);
                        sy[Uy >>> 5] |= 1 << (31 & Uy)
                      }
              } return {
              words: sy,
              lo: ey,
              hi: qb,
              cell: By,
              dims: Ky
            }
          }((0, co.h)(fy, yb.vertexCount), bb ? yb.indexData : null, Wy, Uy, hy) : null;
        if (!Zy) return null;
        const {
          words: cb,
          ...Py
        } = Zy;
        if (this.gridTop + cb.length > KW) return void(this.gridsFull = !0);
        const oy = this.gridTop;
        return this.gridTop += cb.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * oy, cb), {
          ...Py,
          at: oy
        }
      }
    }
    const oP = Math.cos(1 * Math.PI / 180);

    function BP(yb, bb) {
      return yb[0] * bb[0] + yb[1] * bb[1] + yb[2] * bb[2] < oP
    }
    async function KP(yb) {
      const {
        pixels: bb,
        width: Wy,
        height: Uy
      } = await ph(yb), hy = new Uint8Array(Wy * Uy);
      for (let fy = 0; fy < hy.length; fy++) hy[fy] = bb[4 * fy + 3];
      return {
        width: Wy,
        height: Uy,
        alpha: hy
      }
    }
    class eP {
      constructor(yb, bb) {
        this.device = yb, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(TW.j), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = yb.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = yb.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Db,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = yb.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Wy, Uy, hy] = TW.l;
        this.volume = yb.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Wy,
            height: Uy,
            depthOrArrayLayers: hy
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = yb.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = yb.createBuffer({
          label: "sun-shadow-volume-work",
          size: TW.j,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = bb ? new PP(yb) : null, this.entityStandIn = bb ? null : yb.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var yb, bb;
        const Wy = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Wy.push("Lite sun shadow volume pipeline compiling");
        const Uy = null !== (yb = null === (bb = this.casters) || void 0 === bb ? void 0 : bb.planesLoading) && void 0 !== yb ? yb : 0;
        return Uy > 0 && Wy.push(`${Uy} Lite sun shadow plane casters loading their textures`), Wy
      }
      entries() {
        var yb, bb, Wy, Uy;
        const hy = Rb.s;
        return [{
          binding: hy.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: hy.pb,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: hy.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: hy.volume,
          resource: this.volumeView
        }, {
          binding: hy.sampler,
          resource: this.volumeSampler
        }, {
          binding: hy.entities,
          resource: {
            buffer: null !== (yb = null === (bb = this.entities) || void 0 === bb ? void 0 : bb.frameBuffer) && void 0 !== yb ? yb : this.entityStandIn
          }
        }, {
          binding: hy.entityGrids,
          resource: {
            buffer: null !== (Wy = null === (Uy = this.entities) || void 0 === Uy ? void 0 : Uy.gridBuffer) && void 0 !== Wy ? Wy : this.entityStandIn
          }
        }]
      }
      prepare(yb, bb, Wy) {
        var Uy;
        this.entitiesThisFrame = !1;
        const hy = null !== (Uy = null === Wy || void 0 === Wy ? void 0 : Wy.sunShadowReach()) && void 0 !== Uy ? Uy : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Wy || !hy.sunShadow && !hy.airShadow) return void(this.volumeHolds = null);
        if (yb.Kb.Zcy !== iW) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${yb.Kb.Zcy}; everything is lit.`)));
        const fy = this.start(yb);
        this.casters.update(yb.EW, yb.EW.VW.length);
        const Zy = yb.ub;
        for (let ey = 0; ey < 3; ey++) this.eye[ey] = bb[ey] + Zy[ey];
        const cb = (0, TW.t)(this.eye);
        this.staleNear = cb;
        const Py = yb.Kb.Fh;
        fy.update(this.eye, ((yb, bb, Wy) => Py.ph(yb, bb, Wy)), 1);
        const oy = (0, TW.n)(Wy.QZy()),
          By = fy.eyeChunk,
          Ky = this.uniformInts;
        for (let ey = 0; ey < 3; ey++) Ky[ey] = By[ey], Ky[4 + ey] = cb[ey];
        this.entitiesThisFrame = null !== this.entities && hy.sunShadow, this.entitiesThisFrame && sW(this.uniformFloats, 8, bb, oy), null !== this.volumeHolds && (this.castersWritten || BP(oy, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(cb, oy, By)
      }
      markStale(yb) {
        const bb = this.staleNear,
          Wy = iW,
          Uy = [yb.i * Wy, yb.j * Wy, yb.k * Wy];
        for (let fy = 0; fy < 3; fy++)
          if (Uy[fy] + Wy <= bb[fy] - Wy || Uy[fy] >= bb[fy] + TW.l[fy] + Wy) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const hy = this.stale;
        for (let fy = 0; fy < hy.length; fy += 4)
          if (hy[fy] === yb.i && hy[fy + 1] === yb.j && hy[fy + 2] === yb.k) return void(hy[fy + 3] = this.swept);
        if (16 === hy.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        hy.push(yb.i, yb.j, yb.k, this.swept)
      }
      writeStale() {
        const yb = this.swept,
          bb = this.stale;
        this.staleAll && yb - this.staleAllSwept >= TW.f && (this.staleAll = !1, bb.length = 0);
        let Wy = 0;
        for (let hy = 0; hy < bb.length; hy += 4)
          if (yb - bb[hy + 3] < TW.f) {
            for (let yb = 0; yb < 4; yb++) bb[Wy + yb] = bb[hy + yb];
            Wy += 4
          } bb.length = Wy;
        const Uy = this.uniformInts;
        Uy[3] = this.staleAll ? 5 : Wy / 4;
        for (let hy = 0; hy < 4; hy++)
          for (let yb = 0; yb < 3; yb++) Uy[16 + 4 * hy + yb] = 4 * hy < Wy ? bb[4 * hy + yb] * iW : 0
      }
      writeUniform() {
        const yb = this.uniformInts;
        let bb = this.uniformWritten;
        if (bb) {
          let Wy = !0;
          for (let Uy = 0; Uy < yb.length && Wy; Uy++) Wy = yb[Uy] === bb[Uy];
          if (Wy) return
        }
        bb ??= this.uniformWritten = new Int32Array(yb.length), bb.set(yb), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(yb) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, yb)
      }
      computeVolume(yb, bb, Wy) {
        const Uy = this.buildVolumePass();
        if (!Uy) return void(this.volumeHolds = null);
        const hy = (0, TW.q)(this.volumeHolds, yb);
        this.volumeHolds = yb;
        const fy = 1 === hy.length && hy[0].size.every(((yb, bb) => yb === TW.l[bb])),
          Zy = this.sweptChunk,
          cb = this.sweptLight,
          Py = bb[0] !== cb[0] || bb[1] !== cb[1] || bb[2] !== cb[2],
          oy = Wy[0] !== Zy[0] || Wy[1] !== Zy[1] || Wy[2] !== Zy[2],
          By = Py && BP(bb, cb);
        if ((fy || this.written || oy || By) && (this.fastLeft = TW.f), fy || this.written || Py || oy) {
          this.written = !1;
          for (let yb = 0; yb < 3; yb++) Zy[yb] = Wy[yb], cb[yb] = bb[yb];
          this.sweepLeft = fy ? 0 : TW.f
        }
        if (fy ? this.swept += TW.f : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, hy.push(...(0, TW.w)(yb, this.slice)), this.slice = (this.slice + 1) % TW.f, this.swept++), 0 === hy.length) return;
        const Ky = (0, TW.A)(this.workData, bb, hy);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const ey = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          qb = ey.beginComputePass({
            label: "sun-shadow-volume"
          });
        qb.setPipeline(Uy.pipeline), qb.setBindGroup(gU.group, Uy.bindGroup), qb.dispatchWorkgroups(Math.ceil(Ky / TW.h)), qb.end(), this.device.queue.submit([ey.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const yb = gU,
          bb = GPUShaderStage.COMPUTE,
          Wy = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: yb.uniform,
              visibility: bb,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: yb.pb,
              visibility: bb,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: yb.special,
              visibility: bb,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: yb.work,
              visibility: bb,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: yb.volume,
              visibility: bb,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Uy = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Wy,
            entries: [{
              binding: yb.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: yb.pb,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: yb.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: yb.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: yb.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Wy]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: GW()
            }),
            entryPoint: "main"
          }
        }).then((yb => {
          this.volumePass = {
            pipeline: yb,
            bindGroup: Uy
          }
        }), (yb => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(yb)}`)
        })), null
      }
      start(yb) {
        if (this.window) return this.window;
        const bb = (yb, bb) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * yb, bb)
        };
        this.casters = new WP(((yb, Wy) => {
          this.castersWritten = !0, bb(yb, Wy)
        }), KP);
        const Wy = new ZP(this.casters, ((yb, bb) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * yb, bb)
        }), bb);
        return Wy.encoded = yb => {
          this.markStale(yb)
        }, yb.Kb.on("chunkAdded", (yb => {
          Wy.chunkAdded(yb)
        })), this.window = Wy, Wy
      }
    }
    var qo = Wy(37372),
      sP = Wy(37374);
    const SP = 0,
      EP = 3,
      lP = 4,
      mo = 5;

    function CP(yb, bb, Wy, Uy) {
      yb.drawOffset(bb, Uy + SP), bb[Uy + EP] = yb.drawTime(), Wy[Uy + lP] = yb.ring.drawStart(), Wy[Uy + mo] = yb.ring.drawCount()
    }
    const TP = `\n${SU}\n\nconst MAX_STOPS = ${sP.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${sP.c/4}>,\n\tcolor1: array<vec4f, ${sP.c}>,\n\tcolor2: array<vec4f, ${sP.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${sP.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${sP.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\tlet word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\tlet p = particles[(frame.start + instanceIndex) % frame.count];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var VP = Wy(40074);
    class JP {
      constructor(yb, bb, Wy, Uy) {
        this.device = yb, this.system = bb, this.frameIndex = Wy, this.sU = Uy, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, VP.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (yb, bb) => {
          this.device.queue.writeBuffer(this.ring, yb * sP.f * 4, this.system.ring.records, yb * sP.f, (bb - yb) * sP.f)
        };
        const {
          name: hy
        } = bb;
        this.ring = yb.createBuffer({
          label: `particles-${hy}`,
          size: bb.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = yb.createBuffer({
          label: `particles-uniforms-${hy}`,
          size: 4 * sP.q,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(yb) {
        const bb = (0, VP.b)(this.system, this.uniformBits, yb);
        bb && (this.uniformBits = bb, this.device.queue.writeBuffer(this.uniforms, 0, bb))
      }
      bind() {
        const {
          system: yb
        } = this, bb = this.texture;
        (0, VP.j)(yb, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${yb.name}`,
          size: [sP.m, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * sP.m
        }, [sP.m, 1]));
        const Wy = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.sU.whiteRamp;
        this.bindGroup && this.boundView === bb.view && this.boundSampler === bb.sampler && this.boundRamp === Wy || (this.boundView = bb.view, this.boundSampler = bb.sampler, this.boundRamp = Wy, this.bindGroup = this.device.createBindGroup({
          label: `particles-${yb.name}`,
          layout: this.sU.layout,
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
            resource: bb.sampler
          }, {
            binding: 3,
            resource: bb.view
          }, {
            binding: 4,
            resource: this.sU.rampSampler
          }, {
            binding: 5,
            resource: Wy
          }]
        }))
      }
      destroy() {
        var yb;
        this.ring.destroy(), this.uniforms.destroy(), null === (yb = this.ramp) || void 0 === yb || yb.destroy()
      }
    }
    class go {
      constructor(yb, bb) {
        this.device = yb, this.resources = bb, this.renderable = void 0, this.systems = new Map, this.draws = [], this.sU = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, ob.e)();
        const Wy = yb.createBindGroupLayout({
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
        this.frameLayout = yb.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = yb.createPipelineLayout({
          bindGroupLayouts: [bW(yb), Wy, this.frameLayout]
        }), this.module = yb.createShaderModule({
          label: "particles",
          code: TP
        });
        const Uy = yb.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        yb.queue.writeTexture({
          texture: Uy
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.sU = {
          layout: Wy,
          rampSampler: yb.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Uy.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (bb, Wy) => (this.bindTarget(Wy), {
            renderable: this.renderable,
            pipeline: Zb(yb, Wy),
            draw: yb => Wy === this.preparedTarget ? this.draw(yb) : 0
          })
        }
      }
      get dBy() {
        return this.systems.size
      }
      reset() {
        for (const yb of this.systems.keys()) yb.reset()
      }
      describePendingWork() {
        return (0, qo.f)(this.systems.keys(), "Lite")
      }
      cUy(yb, bb) {
        const Wy = new qo.b(yb, bb, this);
        return this.systems.set(Wy, new JP(this.device, Wy, this.allocateFrameIndex(), this.sU)), Wy
      }
      RZy(yb, bb) {
        for (const Wy of this.systems.keys()) Wy.RZy(yb, bb)
      }
      canDraw(yb) {
        const bb = this.systems.get(yb),
          Wy = yb.texture ? this.resources.boundTexture(yb.texture) : null;
        if (!bb || !Wy || !this.targetPipelines) return !1;
        if (bb.texture = Wy, bb.pipelines.length = 0, !tf(yb.blendMode)) return this.warnOnce(`blend:${yb.blendMode}`, `particle blend mode ${yb.blendMode} is not drawn (${yb.name})`), !0;
        const Uy = (0, Yh.m)(yb.blendMode);
        for (const hy of Uy) {
          const yb = this.pipelineFor(hy);
          if (!1 === yb) return bb.pipelines.length = 0, !0;
          yb && bb.pipelines.push(yb)
        }
        return bb.pipelines.length === Uy.length
      }
      disposeStopped(yb) {
        yb.dispose()
      }
      remove(yb) {
        const bb = this.systems.get(yb);
        bb && (this.systems.delete(yb), bb.destroy(), this.freeFrameIndices.push(bb.frameIndex))
      }
      prepare(yb) {
        const bb = yb.animationRatio || 1;
        cW(this.renderable._worldCenter, yb, Ub), this.preparedTarget = this.target, this.draws.length = 0;
        let Wy = 0;
        for (const Uy of this.systems.values()) {
          const yb = Uy.system;
          if (!yb.animateIfActive(bb)) continue;
          if (yb.ring.takeUploads(Uy.upload), !yb.hasLiveParticles() || 0 === Uy.pipelines.length) continue;
          Uy.writeUniforms(this.warnOnce), Uy.bind();
          const hy = 64 * Uy.frameIndex;
          Uy.count = yb.ring.drawCount(), CP(yb, this.frameData, this.frameBits, hy), Wy = Math.max(Wy, hy + 64), this.draws.push(Uy)
        }
        Wy > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Wy)
      }
      draw(yb) {
        let bb = 0,
          Wy = null;
        for (const Uy of this.draws) {
          yb.setBindGroup(1, Uy.bindGroup), yb.setBindGroup(2, this.frameBindGroup, [256 * Uy.frameIndex]);
          for (const hy of Uy.pipelines) hy !== Wy && (yb.setPipeline(hy), Wy = hy), yb.draw(4, Uy.count), bb++
        }
        return bb
      }
      bindTarget(yb) {
        this.target = yb;
        const bb = `${yb._colorFormat}|${yb._depthStencilFormat}|${yb._depthCompare}|${yb._sampleCount}`;
        let Wy = this.pipelines.get(bb);
        Wy || (Wy = new Map, this.pipelines.set(bb, Wy)), this.targetPipelines = Wy
      }
      pipelineFor(yb) {
        var bb;
        const Wy = this.targetPipelines,
          Uy = Wy.get(yb);
        if (void 0 !== Uy) return Uy;
        Wy.set(yb, null);
        const hy = this.target,
          fy = yb === Yh.d,
          Zy = null !== (bb = hy._depthCompare) && void 0 !== bb ? bb : Wb;
        return this.device.createRenderPipelineAsync({
          label: `particles-${yb}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: xb({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: fy ? 1 : 0
            }
          }, hy, wh((0, Yh.i)(yb))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: hy._depthStencilFormat ? {
            format: hy._depthStencilFormat,
            depthCompare: Zy,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: hy._sampleCount
          }
        }).then((bb => {
          Wy.set(yb, bb)
        }), (bb => {
          Wy.set(yb, !1), console.error("Lite particle pipeline failed", bb), zf("particles", `blend-${yb}`, bb)
        })), null
      }
      allocateFrameIndex() {
        const yb = this.freeFrameIndices.pop();
        if (void 0 !== yb) return yb;
        const bb = this.nextFrameIndex++;
        if (64 * (bb + 1) > this.frameData.length) {
          const yb = new Float32Array(2 * this.frameData.length);
          yb.set(this.frameData), this.frameData = yb, this.frameBits = new Uint32Array(yb.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return bb
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
    class GP {
      constructor(yb, bb, Wy, Uy, hy) {
        this.lite = yb, this.canvas = bb, this.info = Wy, this.resources = hy, this.Aoy = !1, this.needPOTTextures = !1, this.Xfy = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = bb.width, this.renderHeight = bb.height, this.caps = {
          maxTextureSize: Uy.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Uy.maxTextureArrayLayers
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
      setSize(yb, bb) {
        if (this.renderWidth === yb && this.renderHeight === bb) return !1;
        const Wy = this.renderWidth,
          Uy = this.renderHeight;
        this.renderWidth = yb, this.renderHeight = bb;
        try {
          (0, Ly.r)(this.lite, yb, bb)
        } catch (hy) {
          if (hy instanceof DOMException && "InvalidStateError" === hy.name) {
            this.renderWidth = Wy, this.renderHeight = Uy;
            try {
              (0, Ly.r)(this.lite, Wy, Uy)
            } catch {
              this.canvas.width = Wy, this.canvas.height = Uy
            }
            return console.warn("WebGPU could not allocate render targets for resize", yb, bb, hy.message), !1
          }
          throw hy
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
      Jm() {
        const yb = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : yb - this.lastFrameTime, this.lastFrameTime = yb
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(yb, bb) {
        const Wy = document.createElement("canvas");
        return Wy.width = yb, Wy.height = bb, Wy
      }
      rZy(yb, bb) {
        var Wy;
        return null !== (Wy = this.resources.rZy.get(yb)) && void 0 !== Wy ? Wy : new tb(this.resources, yb, bb)
      }
      atlasArray(yb, bb, Wy) {
        return this.resources.atlasArray(yb, bb, Wy)
      }
    }
    class OP {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(yb) {
        this.fov = yb.fov, this.nearPlane = yb.near, this.farPlane = yb.far;
        const bb = yb.worldMatrix;
        for (let Wy = 0; Wy < 16; Wy++)
          if (this.worldMatrix[Wy] !== bb[Wy]) return this.worldMatrix.set(bb), void this.worldMatrixVersion++
      }
    }
    class RP {
      constructor(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
        let By = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = yb, this.Pf = bb, this.sceneTask = Wy, this.gpuDevice = Uy, this.terrain = hy, this.meshes = fy, this.particles = Zy, this.resources = cb, this.sunShadow = By, this.OPy = void 0, this.backendName = "WebGPU (Lite)", this.ycy = void 0, this.modelMeshes = void 0, this.camera = new OP, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new jb(Uy.lost), this.deviceLost = this.refusals.deviceLost, this.OPy = new GP(yb, Py, oy, Uy.limits, cb), (0, vb.A)({
          kW: yb => {
            Xy(yb) && cb.textureSlot(yb)
          },
          loaded: yb => Xy(yb) ? cb.textureLoaded(yb) : null,
          canvasUpdated: (yb, bb, Wy) => {
            Xy(yb) && cb.canvasUpdated(yb, bb, Wy)
          }
        }), this.ycy = fy.ycy, this.modelMeshes = fy.modelMeshes, bb.camera = this.camera
      }
      get castsEntitySunShadows() {
        var yb, bb;
        return null !== (yb = null === (bb = this.sunShadow) || void 0 === bb ? void 0 : bb.tracesEntities) && void 0 !== yb && yb
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(yb) {
        this.modelMeshes.attach(yb.model, yb.sceneMirror);
        const bb = yb.Pf;
        this.setClearColour(bb.clearColor.r, bb.clearColor.g, bb.clearColor.b), bb.draw = () => {
          this.drawFrame(yb, bb)
        }
      }
      render(yb) {
        try {
          this.OPy.Jm(), yb.Pf.render()
        } catch (bb) {
          throw this.refusals.frameFailed(bb), bb
        }
        this.refusals.frameDrawn()
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var yb, bb, Wy, Uy;
        const hy = [...this.particles.describePendingWork(), ...null !== (yb = null === (bb = this.sunShadow) || void 0 === bb ? void 0 : bb.describePendingWork()) && void 0 !== yb ? yb : []],
          fy = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Wy = this.terrain.sceneDepth) && void 0 !== Wy && Wy.compiling ? 1 : 0) + (null !== (Uy = this.terrain.shadowMask) && void 0 !== Uy && Uy.compiling ? 1 : 0);
        fy > 0 && hy.push(`${fy} Lite pipelines compiling`);
        const Zy = this.terrain.buffersAwaitingVerdict;
        Zy > 0 && hy.push(`${Zy} Lite terrain buffers awaiting their out-of-memory verdict`);
        const cb = this.resources.texturesLoading;
        return cb > 0 && hy.push(`${cb} Lite textures loading`), hy
      }
      prepareTexture(yb) {
        return null !== this.resources.boundTexture(yb) || this.resources.textureFailed(yb)
      }
      drawFrame(yb, bb) {
        var Wy, Uy, hy, fy, Zy, cb;
        const Py = Kc(yb);
        this.camera.copyFromView(Py), this.setClearColour(Py.clearColour[0], Py.clearColour[1], Py.clearColour[2]), null === (Wy = this.sunShadow) || void 0 === Wy || Wy.prepare(yb.lb, Py.eye, null !== (Uy = yb.lb.eU) && void 0 !== Uy ? Uy : null), this.terrain.prepare(yb, Py), null === (hy = this.terrain.sceneDepth) || void 0 === hy || hy.setPlanes(Py.near, Py.far), null === (fy = this.terrain.shadowMask) || void 0 === fy || fy.prepare(Py), IZ(this.sceneTask), this.meshes.prepare(bb, Py, yb.model.earthSky, null !== (Zy = yb.lb.eU) && void 0 !== Zy ? Zy : null), this.particles.prepare(Py);
        const oy = performance.now();
        this.resources.flushUploads(), null === (cb = this.sunShadow) || void 0 === cb || cb.traceEntities(this.meshes);
        try {
          (0, Ly.o)(this.engine, this.lastFrameTime > 0 ? oy - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = oy
      }
      setClearColour(yb, bb, Wy) {
        const Uy = this.Pf.clearColor;
        Uy.r = yb, Uy.g = bb, Uy.b = Wy, Uy.a = 1
      }
    }
    const vo = "WebGPU device lost while Lite was starting";

    function io(yb, bb) {
      return "object" === typeof yb && null !== yb ? Object.assign(yb, {
        startStep: bb
      }) : yb
    }
    async function MP(yb, bb) {
      const Wy = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!Wy) throw io(new Error("No WebGPU adapter"), "no_adapter");
      const Uy = Wy.info,
        hy = {
          vendor: (null === Uy || void 0 === Uy ? void 0 : Uy.vendor) || "unknown vendor",
          renderer: (null === Uy || void 0 === Uy ? void 0 : Uy.architecture) || "unknown renderer",
          version: (null === Uy || void 0 === Uy ? void 0 : Uy.description) || "unknown version"
        },
        fy = function(yb) {
          const bb = {};
          for (const Wy in yb.limits) {
            const Uy = yb.limits[Wy];
            "number" === typeof Uy && (bb[Wy] = Uy)
          }
          return bb
        }(Wy);
      let Zy;
      yb.style.background = "black";
      try {
        Zy = await (0, Ly.h)(yb, {
          msaaSamples: bb.Boy ? 4 : 1,
          requiredLimits: fy,
          alphaMode: "premultiplied"
        })
      } catch (By) {
        throw io(By, "#47" === (null === (cb = By) || void 0 === cb ? void 0 : cb.message) ? "no_adapter" : "device")
      }
      var cb;
      const Py = function(yb) {
        return yb._device
      }(Zy);
      let oy = null;
      Py.lost.then((yb => {
        oy = yb, console.error(`WebGPU device lost (${yb.reason}): ${yb.message}`)
      }));
      try {
        const Wy = await async function(yb, bb, Wy, Uy, hy, fy) {
          const Zy = (0, Qy.c)(yb),
            cb = new kc(yb, bb),
            Py = new Nc(bb),
            oy = new ic(bb, cb, (yb => function(yb, bb) {
              for (const Uy of dy(yb)) {
                var Wy;
                if (Uy._targetSignature === bb) return null !== (Wy = Uy._sceneBG) && void 0 !== Wy ? Wy : null
              }
              return null
            }(Zy, yb))),
            By = new go(bb, cb);
          for (const qb of function(yb, bb, Wy) {
              return [bb.opaqueRenderable, yb.opaqueRenderable, yb.skyLastRenderable, Wy.renderable, bb.transparentRenderable, yb.transparentRenderable, yb.frontRenderable]
            }(oy, Py, By)) Ay(Zy, qb);
          const Ky = function(yb) {
            for (const bb of dy(yb))
              if ("Pf" === bb.name) return bb;
            throw new Error("Lite: the scene has no render task named scene")
          }(Zy);
          hy && Py.installSceneDepth(Ky, yb);
          const ey = fy ? new eP(bb, fy.entities) : null;
          Py.sunShadow = ey, ey && null !== fy && void 0 !== fy && fy.entities && (Py.shadowMask = new Rc(bb, Ky, yb, Py));
          return oy.sunShadow = ey, await (0, Qy.e)(Zy), new RP(yb, Zy, Ky, bb, Py, oy, By, cb, Wy, Uy, ey)
        }(Zy, Py, yb, hy, bb.sceneDepth, bb.sunShadow);
        if (null !== oy) {
          const {
            reason: yb,
            message: bb
          } = oy;
          throw Object.assign(new Error(`${vo} (${yb}): ${bb}`), {
            fallbackReason: vo
          })
        }
        return Wy
      } catch (By) {
        throw Py.destroy(), null === oy ? By : io(By, "device")
      }
    }
  },
  39363: (yb, bb, Wy) => {
    Wy.d(bb, {
      B: () => Sy,
      D: () => qb,
      G: () => sy,
      d: () => hy,
      h: () => Uy,
      k: () => ey,
      n: () => By,
      o: () => Ey,
      p: () => fy,
      s: () => cb,
      u: () => Py,
      x: () => Zy
    });
    const Uy = 3,
      hy = 0,
      fy = 1,
      Zy = 2,
      cb = {
        uniform: 3,
        pb: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Py = 10,
      oy = "BloxdPackInputs",
      By = "bloxdPackInputs",
      Ky = [{
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
      ey = 80;

    function qb() {
      const yb = Ky.map((yb => {
        let {
          name: bb,
          type: Wy
        } = yb;
        return `    ${bb}: ${Wy},\n`
      })).join("");
      return `struct ${oy} {\n${yb}}\n@group(${Uy}) @binding(${hy}) var<uniform> ${By}: ${oy};\n`
    }

    function sy(yb, bb) {
      const Wy = new DataView(yb, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, ey),
        [Uy, hy, fy, Zy, cb, Py] = Ky;
      Wy.setFloat32(Uy.offset, bb.seconds, !0), Wy.setUint32(hy.offset, bb.lit ? 1 : 0, !0);
      for (let oy = 0; oy < 3; oy++) Wy.setInt32(fy.offset + 4 * oy, bb.renderOffset[oy], !0), Wy.setFloat32(Zy.offset + 4 * oy, bb.QZy[oy], !0), Wy.setFloat32(cb.offset + 4 * oy, bb.eyePosition[oy], !0), Wy.setFloat32(Py.offset + 4 * oy, bb.shadowDirection[oy], !0)
    }

    function Sy(yb) {
      const bb = new Uint32Array(Math.max(1, yb.length));
      return yb.forEach(((yb, Wy) => {
        let {
          id: Uy,
          rotation: hy
        } = yb;
        bb[Wy] = 65535 & Uy | (3 & hy) << 16
      })), bb
    }
    const Ey = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);