export const id = 270;
export const ids = [270];
export const modules = {
  41612: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Hk,
      e: () => lk,
      h: () => yk,
      i: () => qk
    });
    var Xk = Ik(37327),
      Tk = Ik(38706),
      ik = Ik(38700);

    function yk(kk, Fk, Ik, Xk) {
      const Tk = ik.t;
      Fk.fill(0), kk.gravity.toArray(Fk, Tk.gravity), kk.colorDead.toArray(Fk, Tk.colorDead), Ik[Tk.ramp] = kk.useRampGradients ? 1 : 0;
      const yk = kk.getColorGradients(),
        lk = Zk(kk, yk, "colour", Xk);
      Ik[Tk.colorCount] = lk;
      for (let ik = 0; ik < lk; ik++) {
        var ak;
        const kk = yk[jk(yk, ik)];
        Fk[Tk.colorPositions + ik] = kk.gradient, kk.color1.toArray(Fk, Tk.color1 + 4 * ik), (null !== (ak = kk.color2) && void 0 !== ak ? ak : kk.color1).toArray(Fk, Tk.color2 + 4 * ik)
      }
      const qk = kk.getVelocityGradients(),
        Lk = Zk(kk, qk, "TH", Xk);
      Ik[Tk.velocityCount] = Lk;
      for (let ik = 0; ik < Lk; ik++) xk(Fk, Tk.TH + 4 * ik, qk[jk(qk, ik)]);
      const tk = kk.useRampGradients ? kk.getColorRemapGradients() : null,
        ek = Zk(kk, tk, "colour remap", Xk);
      Ik[Tk.remapCount] = ek;
      for (let ik = 0; ik < ek; ik++) xk(Fk, Tk.remap + 4 * ik, tk[jk(tk, ik)])
    }

    function lk() {
      return {
        key: [],
        texels: new Uint8Array(4 * ik.j)
      }
    }
    const ak = [];

    function qk(kk, Fk) {
      return Lk(kk, ak), !Jk(ak, Fk.key) && (Fk.key.length = 0, Fk.key.push(...ak), Fk.key.length > 0 && function(kk, Fk) {
        for (let Ik = 0; Ik < ik.j; Ik++) Tk.e.GetCurrentGradient(Ik / ik.j, kk, ((kk, Fk, Ik) => {
          Xk.Color3.LerpToRef(kk.color, Fk.color, Ik, tk)
        })), Fk[4 * Ik] = 255 * tk.r, Fk[4 * Ik + 1] = 255 * tk.g, Fk[4 * Ik + 2] = 255 * tk.b, Fk[4 * Ik + 3] = 255
      }(kk.getRampGradients(), Fk.texels), !0)
    }

    function Lk(kk, Fk) {
      Fk.length = 0;
      const Ik = kk.useRampGradients ? kk.getRampGradients() : null;
      if (null !== Ik && void 0 !== Ik && Ik.length) {
        Fk.push(Ik.length);
        for (const kk of Ik) Fk.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
      }
    }
    const tk = new Xk.Color3;

    function Zk(kk, Fk, Ik, Xk) {
      return Fk ? Fk.length > ik.c ? (Xk(`particleStops:${Ik}`, `GPU particles use the first 2 and last ${ik.c-2} of more than ${ik.c} ${Ik} gradient stops (${kk.name})`), ik.c) : Fk.length : 0
    }

    function jk(kk, Fk) {
      return Fk < 2 || kk.length <= ik.c ? Fk : kk.length - ik.c + Fk
    }
    const ek = new Float32Array(ik.p),
      wk = new Uint32Array(ek.buffer);

    function Hk(kk, Fk, Ik) {
      return yk(kk, ek, wk, Ik), Fk && Jk(wk, Fk) ? null : wk.slice()
    }

    function Jk(kk, Fk) {
      if (kk.length !== Fk.length) return !1;
      for (let Ik = 0; Ik < kk.length; Ik++)
        if (kk[Ik] !== Fk[Ik]) return !1;
      return !0
    }

    function xk(kk, Fk, Ik) {
      var Xk;
      kk[Fk] = Ik.gradient, kk[Fk + 1] = Ik.factor1, kk[Fk + 2] = null !== (Xk = Ik.factor2) && void 0 !== Xk ? Xk : Ik.factor1
    }
  },
  41604: (kk, Fk, Ik) => {
    function Xk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Fk = new Set;
      return (Ik, Xk) => {
        Fk.has(Ik) || (Fk.add(Ik), console.warn(kk + Xk))
      }
    }
    Ik.d(Fk, {
      d: () => Xk
    })
  },
  41637: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      createLiteRendererAsync: () => pa,
      liteBabylonBackend: () => ck,
      setPipelineFailureHook: () => AT
    });
    var Xk = Ik(37327),
      Tk = Ik(37643),
      ik = Ik(37896),
      yk = Ik(37270),
      lk = Ik(37905);
    class ak extends lk.c {
      constructor() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        super(...Fk), this.color = new Xk.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: Fk[0].mG().getUniqueId(),
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
          needAlphaBlendingForMesh: kk => kk.visibility < 1 || kk.hasVertexAlpha,
          needAlphaTestingForMesh: () => !1,
          dispose: () => {}
        }
      }
      getClassName() {
        return "LinesMesh"
      }
    }
    const qk = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Lk = kk => 1 << qk.indexOf(kk),
      tk = Lk("VERTEXCOLOR"),
      Zk = Lk("INSTANCES"),
      jk = Lk("THIN_INSTANCES"),
      ek = Lk("INSTANCESCOLOR"),
      wk = Lk("FOG"),
      Hk = Lk("LITE_FRONT_LAYER");

    function Jk(kk, Fk, Ik, Xk) {
      let Tk = 0;
      return kk.isVerticesDataPresent("color") && (Tk |= tk), "none" !== Fk && (Tk |= Zk), "thin" === Fk && (Tk |= jk, kk.isVerticesDataPresent("instanceColor") && (Tk |= ek)), Xk.fogEnabled && kk.applyFog && 0 !== Xk.fogMode && (Tk |= wk), Ik >= 1 && (Tk |= Hk), Tk
    }

    function xk(kk, Fk) {
      kk.updateColor4("color", Fk.color, Fk.alpha)
    }
    var Pk = Ik(37832),
      Kk = Ik(37461),
      Qk = Ik(37365),
      sk = Ik(37249),
      Vk = Ik(37821),
      zk = Ik(37829),
      Sk = Ik(37259),
      vk = Ik(37263),
      Ek = Ik(37277);
    const Ok = sk.e.GLSL;
    class nk {
      constructor(kk, Fk) {
        this.name = kk, this.Yw = Fk, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.hG = {
          addOnce: kk => {
            this.disposers.push(kk)
          }
        }, this.uniqueId = Fk.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      mG() {
        return this.Yw
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
      needAlphaBlendingForMesh(kk) {
        return (0, Sk.R)(this.model, kk.visibility, kk.hasVertexAlpha)
      }
      needAlphaTestingForMesh(kk) {
        return (0, Sk.S)(this.model, kk.visibility, kk.hasVertexAlpha)
      }
      dispose() {
        (0, Kk.l)(this);
        for (const kk of this.disposers.splice(0)) kk()
      }
      get model() {
        return (0, Sk.X)(this)
      }
    }
    const Gk = new WeakSet;

    function pk(kk) {
      return Gk.has(kk)
    }

    function uk(kk) {
      Gk.add(kk)
    }
    const bk = {
      create: (kk, Fk) => ((0, Qk.q)(kk, new nk(kk.name, Fk)), vk.e.defines()),
      write: () => {},
      addFeature: (kk, Fk) => {
        const Ik = kk.mirror;
        Fk.feature === zk.e && Fk.state.dirLightCount > 0 && (kk.disableLighting = !0, (0, Sk.W)(kk)), "BLOXD_LIGHTING" in Fk.defines && (0, Kk.h)(Ik), Fk.feature === Vk.l && ((0, Pk.h)(Fk.state, Ok), function(kk, Fk) {
          const Ik = kk.mG().Oe();
          Fk.textures.forEach(((Xk, Tk) => {
            setTimeout((() => {
              var ik, yk;
              const {
                url: lk
              } = Xk.source;
              Ik.atlasArray(lk, null !== (ik = null === (yk = Fk.sources.pixels) || void 0 === yk ? void 0 : yk[Tk]) && void 0 !== ik ? ik : null, Fk.sources.layerWidth).then((Ik => {
                (0, Pk.e)(kk, Fk, Tk, Ik, Ik.layerWidth, Ik.layers, Ok)
              })).catch((kk => {
                console.error(`Failed to build texture array for atlas ${Tk}`, kk)
              }))
            }))
          }))
        }(Ik, Fk.state))
      },
      texture: (kk, Fk, Ik) => {
        let {
          data: Xk,
          sets: Tk
        } = Ik;
        var ik;
        (uk(kk), Xk) && (kk.uvSet = null !== (ik = null === Tk || void 0 === Tk ? void 0 : Tk.coordinatesIndex) && void 0 !== ik ? ik : 0, (0, Qk.cb)(kk.matrix, null !== Tk && void 0 !== Tk ? Tk : {}))
      },
      cube: uk,
      canvas: (kk, Fk, Ik) => {
        let {
          width: Xk,
          height: Tk,
          mipmaps: ik,
          samplingMode: yk = Ek.i.trilinear,
          hasAlpha: lk = !1,
          wrap: ak = Ek.d.clamp
        } = Ik;
        const qk = kk.Oe().createCanvas(Xk, Tk),
          Lk = new Ek.m("2d", {
            kind: "canvas",
            width: Xk,
            height: Tk,
            canvas: qk
          }, {
            samplingMode: yk,
            wrapU: ak,
            wrapV: ak,
            noMipmap: !ik,
            invertY: !0
          });
        return Lk.hasAlpha = lk, uk(Lk), Lk
      }
    };
    var Rk = Ik(37479),
      Uk = Ik(37187);
    class Ck {
      constructor(kk, Fk, Ik) {
        this.engine = kk, this.clearColor = Fk, this.ambientColor = Ik, this.onBeforeRenderObservable = new Uk.e, this.onBeforeCameraRenderObservable = new Uk.e, this.onAfterRenderObservable = new Uk.e, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.jK = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      Oe() {
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
      addPendingData(kk) {
        this.pending.push(kk)
      }
      removePendingData(kk) {
        const Fk = this.pending.indexOf(kk); - 1 !== Fk && this.pending.splice(Fk, 1)
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

    function Nk() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const ck = {
      QIk: Nk,
      NXk: (kk, Fk) => {
        const Ik = new Ck(kk.engine, Xk.b.FromArray(Fk.clearColor), Xk.Color3.FromArray(Fk.ambientColor));
        (0, yk.d)(bk, Ik), kk.Yw = Ik,
          function(kk, Fk) {
            const Ik = Object.assign((0, Rk.k)(kk, "camera"), {
              layerMask: 268435455
            });
            kk.model.nodes.setWorldSource(Ik.row, kk.model.view.worldMatrix), kk.camera = Fk.activeCamera = Ik
          }(kk, Ik), (0, Tk.e)(kk, ((kk, Fk, Ik) => (0, ik.d)(kk, Fk, Ik, lk.c)))
      },
      bXk: () => {},
      setBabylonFog: () => {},
      WXk: Nk,
      YXk: () => {},
      linesFromArrays: (kk, Fk, Ik) => (0, ik.d)(kk, Fk, Ik, ak),
      Aw: () => {},
      dXk: Nk
    };
    var Wk = Ik(41705),
      fk = Ik(41712);
    class Bk {
      constructor(kk) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const Fk = new Promise((kk => {
          this.refused = kk
        }));
        this.deviceLost = Promise.race([kk, Fk]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(kk) {
        (function(kk) {
          const {
            name: Fk,
            message: Ik
          } = null !== kk && void 0 !== kk ? kk : {};
          return "InvalidStateError" === Fk && "string" === typeof Ik && Ik.startsWith("GPUDevice.")
        })(kk) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: kk.message,
          framesRefused: !0
        }))
      }
    }
    class dk {
      constructor(kk) {
        this.resources = kk, this.matrixKey = {
          St: 0
        }, this.attributesKey = {
          St: 0
        }, this.inputs = Object.create(null);
        for (let Fk = 0; Fk < 4; Fk++) this.inputs[`world${Fk}`] = new gk(this.matrixKey, 16 * Fk, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(kk, Fk) {
        this.resources.vertexBufferCreated(this.matrixKey, kk, !0), Fk && this.resources.vertexBufferCreated(this.attributesKey, Fk, !0)
      }
    }
    class Yk extends dk {
      constructor(kk, Fk, Ik) {
        super(kk), this.mesh = Fk, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Xk = this.inputs;
        let Tk = 0;
        for (const {
            size: yk
          }
          of Ik) Tk += yk;
        for (const {
            name: yk,
            offset: lk,
            size: ak,
            type: qk
          }
          of Ik) Xk[yk] = new gk(this.attributesKey, 4 * lk, 4 * Tk, ak, !0, qk);
        this.rowStride = Tk, kk.U_.set(Fk, this);
        const ik = Fk.isVerticesDataPresent;
        Fk.isVerticesDataPresent = (kk, Ik) => kk in Xk || ik.call(Fk, kk, Ik)
      }
      attach(kk, Fk) {
        this.matrices = kk, this.attributes = Fk, this.bind(kk, Fk), this.mirror(kk, kk.length, kk.length / 16)
      }
      J9(kk) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, kk ? 64 * kk : void 0)
      }
      K9() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(kk, Fk) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * kk, 16 * Fk)
      }
      attributeRows(kk, Fk) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, kk * this.rowStride, Fk * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(kk, Fk, Ik) {
        const Xk = this.mesh._thinInstanceDataStorage;
        Xk.matrixData = kk, Xk.matrixBufferSize = Fk, Xk.worldMatrices = null, Xk.instancesCount = Ik
      }
    }
    class Ak extends dk {
      constructor(kk, Fk, Ik) {
        var Xk, Tk, ik, yk;
        super(kk), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.interleavedKinds) && void 0 !== Xk ? Xk : null, this.offsets = null !== (Tk = null === Ik || void 0 === Ik ? void 0 : Ik.interleavedOffsets) && void 0 !== Tk ? Tk : [], this.rowStride = null !== (ik = null === Ik || void 0 === Ik ? void 0 : Ik.interleavedRowStride) && void 0 !== ik ? ik : 0, null === (yk = this.layout) || void 0 === yk || yk.forEach(((kk, Fk) => {
          this.inputs[kk] = new gk(this.attributesKey, 4 * this.offsets[Fk], 4 * this.rowStride, Ik.strides[kk])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), kk.batchUploads.set(Fk, this), Fk.hG.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(kk) {
        const Fk = this.packedBatch;
        return Fk.renderSelf ? 0 === kk ? this.packedSource : Fk.instances[kk - 1] : Fk.instances[kk]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(kk, Fk, Ik, Xk) {
        const Tk = (Fk.renderSelf ? 1 : 0) + Fk.rows.length;
        if (this.frame = Xk, this.count = Tk, this.packedSource = kk, this.packedBatch = Fk, 0 === Tk) return;
        if (kk.getWorldMatrix(), 16 * Tk > this.matrices.length) {
          let kk = this.matrices.length / 16;
          for (; kk < Tk;) kk *= 2;
          this.matrices = new Float32Array(16 * kk), this.attributes &&= new Float32Array(kk * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let ik = 0;
        Fk.renderSelf && this.packRow(ik++, kk, Fk.row, Ik);
        for (let yk = 0; yk < Fk.rows.length; yk++) this.packRow(ik++, Fk.instances[yk], Fk.rows[yk], Ik);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * Tk), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, Tk * this.rowStride)
      }
      packRow(kk, Fk, Ik, Xk) {
        const Tk = this.matrices;
        if (Ik < 0) Tk.set(Fk.getWorldMatrix().m, 16 * kk);
        else
          for (let qk = 0; qk < 16; qk++) Tk[16 * kk + qk] = Xk[16 * Ik + qk];
        const ik = this.attributes;
        if (!ik) return;
        const yk = Fk.JR,
          lk = this.layout;
        for (let qk = 0; qk < lk.length; qk++) {
          var ak;
          const Fk = null !== (ak = yk[lk[qk]]) && void 0 !== ak ? ak : 0,
            Ik = kk * this.rowStride + this.offsets[qk];
          Fk.toArray ? Fk.toArray(ik, Ik) : Fk.copyToArray ? Fk.copyToArray(ik, Ik) : ik[Ik] = Fk
        }
      }
    }
    class gk {
      constructor(kk, Fk, Ik, Xk) {
        let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = kk, this.byteOffset = Fk, this.byteStride = Ik, this.size = Xk, this.instanced = Tk, this.type = ik, this.normalized = yk
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
    const mk = "CANVAS_ALPHA_ONE",
      hk = `override ${mk}: bool = false;`,
      rk = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Dk(kk, Fk, Ik) {
      var Xk;
      let Tk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const ik = null !== (Xk = Fk._colorFormat) && void 0 !== Xk ? Xk : "bgra8unorm",
        yk = Tk ? 15 : 0;
      return Ik ? {
        ...kk,
        targets: [{
          format: ik,
          blend: {
            color: Ik,
            alpha: rk
          },
          writeMask: yk
        }]
      } : {
        ...kk,
        constants: {
          ...kk.constants,
          [mk]: 1
        },
        targets: [{
          format: ik,
          writeMask: yk
        }]
      }
    }

    function Mk(kk, Fk) {
      kk._renderables.push(Fk)
    }

    function kF(kk) {
      var Fk, Ik;
      return null !== (Fk = null === (Ik = kk._frameGraph) || void 0 === Ik ? void 0 : Ik._tasks) && void 0 !== Fk ? Fk : []
    }

    function FF(kk) {
      return kk._currentEncoder
    }

    function IF(kk) {
      return kk.createBindGroupLayout({
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
    const XF = "greater-equal",
      TF = 2e5,
      iF = 1e5,
      yF = new WeakMap;

    function lF(kk, Fk) {
      let Ik = yF.get(kk);
      if (!Ik) {
        Ik = {
          module: kk.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, yF.set(kk, Ik)
      }
      const Xk = `${Fk._colorFormat}|${Fk._depthStencilFormat}|${Fk._sampleCount}`;
      let Tk = Ik.pipelines.get(Xk);
      if (!Tk) {
        var ik;
        const {
          module: yk
        } = Ik;
        Tk = kk.createRenderPipeline({
          label: `placeholder ${Xk}`,
          layout: kk.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: yk,
            entryPoint: "v"
          },
          fragment: {
            module: yk,
            entryPoint: "f",
            targets: [{
              format: null !== (ik = Fk._colorFormat) && void 0 !== ik ? ik : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: Fk._depthStencilFormat ? {
            format: Fk._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Fk._sampleCount
          }
        }), Ik.pipelines.set(Xk, Tk)
      }
      return Tk
    }

    function aF(kk, Fk, Ik) {
      const Xk = Fk.eye,
        Tk = Fk.viewMatrix;
      kk[0] = Xk[0] + Tk[2] * Ik, kk[1] = Xk[1] + Tk[6] * Ik, kk[2] = Xk[2] + Tk[10] * Ik
    }
    var qF = Ik(37954),
      LF = Ik(41604),
      tF = Ik(37255);
    const ZF = Math.PI,
      jF = ZF / 1.95,
      eF = [5e-4 / 94, 125e-7, 5e-4 / 18],
      wF = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((kk => {
        let [Fk, Ik] = kk;
        return .434 * ZF * Math.pow(2 * ZF / Fk, 2) * Ik
      }));

    function HF(kk, Fk, Ik) {
      const {
        up: Xk,
        mieDirectionalG: Tk
      } = kk, ik = 1 - PF(1 - Math.exp(Fk[1] / 45e4), 0, 1), yk = kk.rayleigh - (1 - ik), lk = Math.hypot(Fk[0], Fk[1], Fk[2]), ak = lk > 0 ? 1 / lk : 0, qk = Ik.sunDir;
      for (let jk = 0; jk < 3; jk++) qk[jk] = Fk[jk] * ak;
      const Lk = qk[0] * Xk[0] + qk[1] * Xk[1] + qk[2] * Xk[2],
        tk = 1e3 * Math.max(0, 1 - Math.exp(-(jF - Math.acos(PF(Lk, -1, 1))) / 1.5));
      Ik.sunE = tk;
      const Zk = .2 * kk.turbidity * 1e-17 * kk.mieCoefficient;
      for (let jk = 0; jk < 3; jk++) {
        const kk = eF[jk] * yk,
          Fk = wF[jk] * Zk,
          Xk = tk / (kk + Fk);
        Ik.inScatterR[jk] = kk * Xk, Ik.inScatterM[jk] = Fk * Xk, Ik.extinctionBeta[jk] = 8400 * kk + 1250 * Fk
      }
      return Ik.sunsetMix = PF(Math.pow(1 - Lk, 5), 0, 1), Ik.sunDiscE = 19e3 * tk, Ik.mieScale = (1 - Tk * Tk) / (4 * ZF), Ik.mieBase = 1 + Tk * Tk, Ik.mieSlope = 2 * Tk, Ik
    }
    const JF = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const xF = 1 / function(kk) {
      const {
        A: Fk,
        B: Ik,
        C: Xk,
        D: Tk,
        E: ik,
        F: yk
      } = JF;
      return (kk * (Fk * kk + Xk * Ik) + Tk * ik) / (kk * (Fk * kk + Ik) + Tk * yk) - ik / yk
    }(1e3);

    function PF(kk, Fk, Ik) {
      return Math.min(Math.max(kk, Fk), Ik)
    }
    const KF = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function QF(kk, Fk) {
      const Ik = new Map(Fk),
        Xk = [],
        Tk = [],
        ik = () => 0 === Tk.length || Tk[Tk.length - 1].active;
      let yk = null;
      const lk = () => {
        const kk = [...Ik].filter((kk => {
            let [, Fk] = kk;
            return !0 !== Fk
          })),
          Fk = kk.map((kk => {
            let [Fk] = kk;
            return Fk
          })).join("|");
        yk = kk.length ? new RegExp(`\\b(${Fk})\\b`, "g") : null
      };
      lk();
      for (const ak of kk.split("\n")) {
        const kk = KF.exec(ak);
        if (!kk) {
          ik() && Xk.push(yk ? sF(ak, yk, Ik) : ak);
          continue
        }
        const Fk = kk[1],
          qk = kk[2].trim();
        if ("ifdef" === Fk || "ifndef" === Fk || "if" === Fk) {
          const kk = ik(),
            Xk = "if" === Fk ? VF(qk, Ik) : Ik.has(qk) === ("ifdef" === Fk);
          Tk.push({
            active: kk && Xk,
            parentActive: kk,
            taken: Xk
          })
        } else if ("elif" === Fk || "else" === Fk) {
          const kk = Tk[Tk.length - 1];
          if (!kk) throw new Error(`#${Fk} without #if`);
          const Xk = !kk.taken && ("else" === Fk || VF(qk, Ik));
          kk.active = kk.parentActive && Xk, kk.taken = kk.taken || Xk
        } else if ("endif" === Fk) {
          if (!Tk.pop()) throw new Error("#endif without #if")
        } else if (ik()) {
          const [kk, ...Xk] = qk.split(/\s+/);
          "undef" === Fk ? Ik.delete(kk) : Ik.set(kk, !Xk.length || Xk.join(" ")), lk()
        }
      }
      if (Tk.length) throw new Error("Unterminated #if");
      return Xk.join("\n")
    }

    function sF(kk, Fk, Ik) {
      return kk.replace(Fk, (kk => {
        const Fk = Ik.get(kk);
        return "string" === typeof Fk ? Fk : kk
      }))
    }

    function VF(kk, Fk) {
      var Ik;
      const Xk = null !== (Ik = kk.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== Ik ? Ik : [];
      let Tk = 0;
      const ik = () => Xk[Tk],
        yk = () => Xk[Tk++],
        lk = kk => {
          const Ik = /^\d/.test(kk) ? kk : Fk.get(kk);
          return "string" === typeof Ik ? parseInt(Ik) : Number.NaN
        },
        ak = () => {
          const kk = yk();
          if ("!" === kk) return !ak();
          if ("(" === kk) {
            const kk = Lk();
            return yk(), kk
          }
          if ("defined" === kk) {
            const kk = "(" === ik();
            kk && yk();
            const Ik = yk();
            return kk && yk(), Fk.has(Ik)
          }
          const Ik = ik();
          if ("==" === Ik || "!=" === Ik || ">" === Ik || "<" === Ik || ">=" === Ik || "<=" === Ik) {
            yk();
            const Fk = lk(kk),
              Xk = lk(yk());
            if (Number.isNaN(Fk) || Number.isNaN(Xk)) return !1;
            switch (Ik) {
              case "==":
                return Fk === Xk;
              case "!=":
                return Fk !== Xk;
              case ">":
                return Fk > Xk;
              case "<":
                return Fk < Xk;
              case ">=":
                return Fk >= Xk;
              default:
                return Fk <= Xk
            }
          }
          return Fk.has(kk)
        },
        qk = () => {
          let kk = ak();
          for (;
            "&&" === ik();) {
            yk();
            const Fk = ak();
            kk = kk && Fk
          }
          return kk
        },
        Lk = () => {
          let kk = qk();
          for (;
            "||" === ik();) {
            yk();
            const Fk = qk();
            kk = kk || Fk
          }
          return kk
        },
        tk = Lk();
      if (Tk !== Xk.length) throw new Error(`Cannot evaluate #if ${kk}`);
      return tk
    }
    var zF = Ik(37253),
      SF = Ik(37561),
      oF = Ik(37563),
      vF = Ik(40708),
      EF = Ik(38755);
    const OF = 32,
      nF = [10, 3, 10],
      GF = [21, 7, 21],
      pF = GF[0] * GF[1] * GF[2],
      uF = 0,
      bF = 1,
      RF = 2,
      UF = 3,
      CF = 64,
      NF = 512,
      cF = 4 * pF,
      WF = 1536,
      fF = cF + pF * WF,
      BF = 1073741824,
      dF = fF + 1;

    function YF(kk, Fk) {
      const Ik = kk % Fk;
      return Ik < 0 ? Ik + Fk : Ik
    }

    function AF(kk, Fk, Ik) {
      return Xk = YF(kk, GF[0]), Tk = YF(Fk, GF[1]), ik = YF(Ik, GF[2]), Xk + GF[0] * (Tk + GF[1] * ik);
      var Xk, Tk, ik
    }

    function gF(kk, Fk, Ik) {
      return kk + 8 * (Fk + 8 * Ik)
    }

    function mF(kk, Fk, Ik) {
      return kk + 4 * (Fk + 4 * Ik)
    }
    const hF = 65535,
      rF = 0,
      DF = 1,
      MF = 2,
      kI = 3;

    function FI(kk) {
      return Math.ceil(kk * kk / 32)
    }
    const II = 8192,
      XI = 1 << 18,
      TI = 65536,
      iI = 294912,
      yI = 128,
      lI = 4096,
      aI = 16,
      qI = 16385,
      LI = 81921,
      tI = 147457,
      ZI = 4194304;
    const jI = [0, 0, 0],
      eI = [0, 0, 0];

    function wI(kk, Fk, Ik, Xk) {
      ! function(kk, Fk, Ik) {
        const [Xk, Tk, ik] = [kk[0], kk[1], kk[2]];
        let yk, lk, ak;
        Math.abs(Tk) < .99 ? (yk = ik, lk = 0, ak = -Xk) : (yk = -Tk, lk = Xk, ak = 0);
        const qk = Math.hypot(yk, lk, ak);
        Fk[0] = yk / qk, Fk[1] = lk / qk, Fk[2] = ak / qk, Ik[0] = Tk * Fk[2] - ik * Fk[1], Ik[1] = ik * Fk[0] - Xk * Fk[2], Ik[2] = Xk * Fk[1] - Tk * Fk[0]
      }(Xk, jI, eI);
      const Tk = 1 / 32;
      for (const [ik, yk] of [
          [0, jI],
          [4, eI]
        ]) {
        for (let Ik = 0; Ik < 3; Ik++) kk[Fk + ik + Ik] = yk[Ik] * Tk;
        kk[Fk + ik + 3] = -(yk[0] * Ik[0] + yk[1] * Ik[1] + yk[2] * Ik[2]) * Tk
      }
    }
    class HI {
      constructor() {
        this.words = new Uint32Array(tI), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      Hj(kk, Fk) {
        this.parts = 0, this.refs = 0, this.view = kk, this.viewAt = Fk;
        const Ik = kk[Fk + 1] * kk[Fk + 6] - kk[Fk + 2] * kk[Fk + 5],
          Xk = kk[Fk + 2] * kk[Fk + 4] - kk[Fk] * kk[Fk + 6],
          Tk = kk[Fk] * kk[Fk + 5] - kk[Fk + 1] * kk[Fk + 4],
          ik = Math.hypot(Ik, Xk, Tk) || 1;
        this.light[0] = Ik / ik, this.light[1] = Xk / ik, this.light[2] = Tk / ik
      }
      add(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= lI || ! function(kk, Fk, Ik) {
            const Xk = kk[Fk],
              Tk = kk[Fk + 1],
              ik = kk[Fk + 2],
              yk = kk[Fk + 3],
              lk = kk[Fk + 4],
              ak = kk[Fk + 5],
              qk = kk[Fk + 6],
              Lk = kk[Fk + 7],
              tk = kk[Fk + 8],
              Zk = kk[Fk + 9],
              jk = kk[Fk + 10],
              ek = kk[Fk + 11],
              wk = kk[Fk + 12],
              Hk = kk[Fk + 13],
              Jk = kk[Fk + 14],
              xk = kk[Fk + 15],
              Pk = Xk * ak - Tk * lk,
              Kk = Xk * qk - ik * lk,
              Qk = Xk * Lk - yk * lk,
              sk = Tk * qk - ik * ak,
              Vk = Tk * Lk - yk * ak,
              zk = ik * Lk - yk * qk,
              Sk = tk * Hk - Zk * wk,
              vk = tk * Jk - jk * wk,
              Ek = tk * xk - ek * wk,
              Ok = Zk * Jk - jk * Hk,
              nk = Zk * xk - ek * Hk,
              Gk = jk * xk - ek * Jk,
              pk = Pk * Gk - Kk * nk + Qk * Ok + sk * Ek - Vk * vk + zk * Sk;
            if (!(Math.abs(pk) > 1e-12)) return !1;
            const uk = 1 / pk;
            return Ik[0] = (ak * Gk - qk * nk + Lk * Ok) * uk, Ik[1] = (ik * nk - Tk * Gk - yk * Ok) * uk, Ik[2] = (Hk * zk - Jk * Vk + xk * sk) * uk, Ik[3] = (jk * Vk - Zk * zk - ek * sk) * uk, Ik[4] = (qk * Ek - lk * Gk - Lk * vk) * uk, Ik[5] = (Xk * Gk - ik * Ek + yk * vk) * uk, Ik[6] = (Jk * Qk - wk * zk - xk * Kk) * uk, Ik[7] = (tk * zk - jk * Qk + ek * Kk) * uk, Ik[8] = (lk * nk - ak * Ek + Lk * Sk) * uk, Ik[9] = (Tk * Ek - Xk * nk - yk * Sk) * uk, Ik[10] = (wk * Vk - Hk * Qk + xk * Pk) * uk, Ik[11] = (Zk * Qk - tk * Vk - ek * Pk) * uk, Ik[12] = (ak * vk - lk * Ok - qk * Sk) * uk, Ik[13] = (Xk * Ok - Tk * vk + ik * Sk) * uk, Ik[14] = (Hk * Kk - wk * sk - Jk * Pk) * uk, Ik[15] = (tk * sk - Zk * Kk + jk * Pk) * uk, !0
          }(Fk, Ik, this.inverse)) return;
        const {
          view: Xk,
          viewAt: Tk
        } = this, ik = Ik;
        let yk = 1 / 0,
          lk = 1 / 0,
          ak = -1 / 0,
          qk = -1 / 0,
          Lk = -1 / 0;
        const [tk, Zk, jk] = this.light;
        for (let Qk = 0; Qk < 8; Qk++) {
          const Ik = 1 & Qk ? kk.hi[0] : kk.lo[0],
            ek = 2 & Qk ? kk.hi[1] : kk.lo[1],
            wk = 4 & Qk ? kk.hi[2] : kk.lo[2],
            Hk = Ik * Fk[ik] + ek * Fk[ik + 4] + wk * Fk[ik + 8] + Fk[ik + 12],
            Jk = Ik * Fk[ik + 1] + ek * Fk[ik + 5] + wk * Fk[ik + 9] + Fk[ik + 13],
            xk = Ik * Fk[ik + 2] + ek * Fk[ik + 6] + wk * Fk[ik + 10] + Fk[ik + 14],
            Pk = Xk[Tk] * Hk + Xk[Tk + 1] * Jk + Xk[Tk + 2] * xk + Xk[Tk + 3],
            Kk = Xk[Tk + 4] * Hk + Xk[Tk + 5] * Jk + Xk[Tk + 6] * xk + Xk[Tk + 7];
          yk = Math.min(yk, Pk), lk = Math.min(lk, Kk), ak = Math.max(ak, Pk), qk = Math.max(qk, Kk), Lk = Math.max(Lk, tk * Hk + Zk * Jk + jk * xk)
        }
        if (ak < -1 || qk < -1 || yk >= 1 || lk >= 1) return;
        const ek = this.parts++,
          wk = this.rects;
        wk[4 * ek] = JI(yk), wk[4 * ek + 1] = JI(lk), wk[4 * ek + 2] = JI(ak), wk[4 * ek + 3] = JI(qk);
        const Hk = this.inverse,
          {
            cell: Jk,
            dims: xk,
            lo: Pk
          } = kk,
          Kk = LI + ek * aI;
        for (let Qk = 0; Qk < 3; Qk++) this.floats[Kk + 4 * Qk] = Hk[Qk] / Jk, this.floats[Kk + 4 * Qk + 1] = Hk[4 + Qk] / Jk, this.floats[Kk + 4 * Qk + 2] = Hk[8 + Qk] / Jk, this.floats[Kk + 4 * Qk + 3] = (Hk[12 + Qk] - Pk[Qk]) / Jk;
        this.words[Kk + 12] = kk.at, this.floats[Kk + 13] = Lk + .001 * (1 + Math.abs(Lk)), this.words[Kk + 14] = xk[0] | xk[1] << 8 | xk[2] << 16
      }
      finish() {
        const kk = yI,
          {
            counts: Fk,
            rects: Ik,
            words: Xk
          } = this;
        Fk.fill(0);
        let Tk = 0,
          ik = 0;
        for (; ik < this.parts; ik++) {
          const Xk = 4 * ik,
            yk = (Ik[Xk + 2] - Ik[Xk] + 1) * (Ik[Xk + 3] - Ik[Xk + 1] + 1);
          if (Tk + yk > 65536) break;
          Tk += yk;
          for (let Tk = Ik[Xk + 1]; Tk <= Ik[Xk + 3]; Tk++)
            for (let ik = Ik[Xk]; ik <= Ik[Xk + 2]; ik++) Fk[Tk * kk + ik]++
        }
        let yk = 0;
        for (let ak = 0; ak < 16384; ak++) Xk[ak] = yk, yk += Fk[ak], Fk[ak] = Xk[ak];
        Xk[16384] = yk;
        for (let ak = 0; ak < ik; ak++) {
          const Tk = 4 * ak;
          for (let ik = Ik[Tk + 1]; ik <= Ik[Tk + 3]; ik++)
            for (let yk = Ik[Tk]; yk <= Ik[Tk + 2]; yk++) Xk[qI + Fk[ik * kk + yk]++] = ak
        }
        const lk = this.floats;
        for (let ak = 0; ak < 16384; ak++) {
          const kk = qI + Xk[ak],
            Fk = kk + Math.min(Xk[ak + 1] - Xk[ak], 64);
          for (let Ik = kk + 1; Ik < Fk; Ik++) {
            const Fk = Xk[Ik],
              Tk = lk[81934 + Fk * aI];
            let ik = Ik - 1;
            for (; ik >= kk && lk[81934 + Xk[ik] * aI] < Tk; ik--) Xk[ik + 1] = Xk[ik];
            Xk[ik + 1] = Fk
          }
        }
        this.refs = Tk
      }
    }

    function JI(kk) {
      return Math.min(127, Math.max(0, Math.floor((.5 * kk + .5) * yI)))
    }

    function xI(kk, Fk, Ik, Xk, Tk) {
      for (let ik = 0; ik < 4; ik++)
        for (let yk = 0; yk < 4; yk++) Tk[4 * ik + yk] = kk[Fk + 4 * ik] * Ik[Xk + yk] + kk[Fk + 4 * ik + 1] * Ik[Xk + 4 + yk] + kk[Fk + 4 * ik + 2] * Ik[Xk + 8 + yk] + kk[Fk + 4 * ik + 3] * Ik[Xk + 12 + yk]
    }

    function PI(kk, Fk, Ik, Xk, Tk) {
      const ik = kk[0] - Fk,
        yk = kk[1] - Ik,
        lk = kk[2] - Xk,
        ak = kk[3] - Fk,
        qk = kk[4] - Ik,
        Lk = kk[5] - Xk,
        tk = kk[6] - Fk,
        Zk = kk[7] - Ik,
        jk = kk[8] - Xk;
      if (Math.min(ik, ak, tk) > Tk || Math.max(ik, ak, tk) < -Tk) return !1;
      if (Math.min(yk, qk, Zk) > Tk || Math.max(yk, qk, Zk) < -Tk) return !1;
      if (Math.min(lk, Lk, jk) > Tk || Math.max(lk, Lk, jk) < -Tk) return !1;
      const ek = ak - ik,
        wk = qk - yk,
        Hk = Lk - lk,
        Jk = tk - ak,
        xk = Zk - qk,
        Pk = jk - Lk,
        Kk = wk * Pk - Hk * xk,
        Qk = Hk * Jk - ek * Pk,
        sk = ek * xk - wk * Jk;
      if (Math.abs(Kk * ik + Qk * yk + sk * lk) > Tk * (Math.abs(Kk) + Math.abs(Qk) + Math.abs(sk))) return !1;
      const Vk = [ek, wk, Hk, Jk, xk, Pk, ik - tk, yk - Zk, lk - jk];
      for (let zk = 0; zk < 3; zk++) {
        const kk = Vk[3 * zk],
          Fk = Vk[3 * zk + 1],
          Ik = Vk[3 * zk + 2];
        for (let Xk = 0; Xk < 3; Xk++) {
          const ek = 0 === Xk ? 0 : 1 === Xk ? Ik : -Fk,
            wk = 0 === Xk ? -Ik : 1 === Xk ? 0 : kk,
            Hk = 0 === Xk ? Fk : 1 === Xk ? -kk : 0,
            Jk = ek * ik + wk * yk + Hk * lk,
            xk = ek * ak + wk * qk + Hk * Lk,
            Pk = ek * tk + wk * Zk + Hk * jk,
            Kk = Tk * (Math.abs(ek) + Math.abs(wk) + Math.abs(Hk));
          if (Math.min(Jk, xk, Pk) > Kk || Math.max(Jk, xk, Pk) < -Kk) return !1
        }
      }
      return !0
    }
    const KI = new Float32Array(1);
    new Uint32Array(KI.buffer);
    var QI = Ik(38760);

    function sI(kk) {
      const [Fk, Ik, Xk] = QI.o;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${kk.group}) @binding(${kk.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${Fk-1}, ${Ik-1}, ${Xk-1});\n}\n`
    }

    function VI(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [Tk, ik, yk] = GF, [lk, ak, qk] = nF, Lk = Math.log2(OF), tk = Xk ? "var<private> bloxdSpCrossed: bool;\n" : "", Zk = Xk ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${kk.group}) @binding(${kk.GZ}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${kk.group}) @binding(${kk.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${Ik?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${tk}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${DF}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${MF}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${Ik?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${kI}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${Tk}, ${ik}, ${yk});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${Tk} * (s.y + ${ik} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${lk}, ${ak}, ${qk}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Lk}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${UF}u) {\n\t\treturn named && state == ${RF}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${cF}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${fF}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${Fk?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${Fk?`\t\tif (exits && step > 0 && step % ${oI} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Lk}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${uF}u || kind == ${bF}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${RF}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${cF}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${Zk}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const zI = {
      group: 0,
      uniform: 0,
      GZ: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function SI() {
      const kk = zI;
      return `${sI(kk)}${VI(kk,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${QI.c}>,\n}\n@group(${kk.group}) @binding(${kk.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${kk.group}) @binding(${kk.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${QI.k})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${QI.c}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${QI.d}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const oI = 2;
    const vI = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function EI(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Xk = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${Fk.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        Tk = "trace" === Ik || "lit" === Ik,
        ik = "maskEdge" === Ik ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        yk = Tk ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${Fk.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${Fk.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===Ik?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${ik};\n`;
      return `${Xk}${kk.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${Tk?function(){const[kk,Fk,Ik]=QI.o;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${kk}.0, ${Fk}.0, ${Ik}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${yk}}\n`:""}${kk.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${Fk.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${Fk.renderOffset});\n}\n`:""}`
    }
    const OI = "bloxdSpOwnTexture";

    function nI(kk) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${kk.texture}) - 1u)))`
    }
    const GI = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${qF.g.map((kk=>{let[Fk,Ik]=kk;return`\tbloxdSpOut.${Fk} = (bloxdSpWord & ${Ik}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function pI(kk) {
      return `bloxdSpFlags(${kk})`
    }
    const uI = `${vF.k}.eyePosition`;

    function bI(kk, Fk, Ik, Xk, Tk) {
      const ik = kk.indexOf(Fk);
      if (ik < 0 || kk.indexOf(Fk, ik + 1) >= 0) throw new Error(`Lite's ${Tk} program changed at the shader pack ${Xk} hook: ${ik<0?"no":"more than one"} anchor (lite/${Tk}ShaderPack.ts)`);
      return kk.slice(0, ik) + Ik + kk.slice(ik + Fk.length)
    }

    function RI(kk) {
      return kk.sunShadow || kk.airShadow
    }

    function UI(kk, Fk) {
      return Fk && RI(kk)
    }
    const CI = {
      group: vF.h,
      ...vF.q
    };

    function NI(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!RI(kk)) return "";
      if (Fk) {
        const Fk = CI,
          Tk = "trace" === Ik || "lit" === Ik;
        let ik = "";
        kk.sunShadow && (ik = Tk ? `${VI(Fk,!0,"lit"===Ik)}${Xk=Fk,`@group(${Xk.group}) @binding(${Xk.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Xk.group}) @binding(${Xk.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(kk, Fk, Ik) {
          const Xk = `@group(${kk}) @binding(${Fk}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return Ik ? `${Xk}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${vI}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((kk=>`\t{\n\t\tlet o = vec2i(${kk});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Xk
        }(Fk.group, vF.s, "maskEdge" === Ik));
        const yk = {
          shadowDirection: `${vF.k}.shadowDirection`,
          renderOffset: `${vF.k}.renderOffset`,
          eyePosition: `${vF.k}.eyePosition`
        };
        return `${sI(Fk)}${ik}${function(kk){const[Fk,Ik,Xk]=QI.o;return`@group(${kk.group}) @binding(${kk.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${kk.group}) @binding(${kk.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${Fk}.0, ${Ik}.0, ${Xk}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(Fk)}${EI(kk,yk,Ik)}`
      }
      var Xk;
      return `${kk.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${kk.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function cI(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!Fk) return "";
      const ik = (yk = "fragmentInputs.vPositionW", lk = kk.sunShadow ? {
        normal: Ik,
        flags: Xk
      } : null, `\n\tbloxdSpShadowPosition = ${yk};\n${lk?`\tbloxdSpShadowNormal = normalize(${lk.normal});\n\tbloxdSpShadowEmissive = (${lk.flags} & ${qF.d.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${lk.flags} & ${qF.i}u) != 0u;\n`:""}`);
      var yk, lk;
      return kk.sunShadow && ("mask" === Tk || "maskEdge" === Tk) ? `${ik}${ak="fragmentInputs.position",qk="maskEdge"===Tk,`\n\tbloxdSpShadowPixel = vec2i(${ak}.xy);\n${qk?`\tbloxdSpShadowZ = ${ak}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${ak}.z), dpdy(${ak}.z));\n`:""}`}` : ik;
      var ak, qk
    }
    const WI = "bloxdSpTextureRotation",
      fI = "bloxdSpTextureLayers",
      BI = `@group(${vF.h}) @binding(${vF.v}) var<storage, read> ${fI}: array<u32>;\n`;

    function dI(kk) {
      return `\tvertexOutputs.vPackTexture = ${fI}[min(u32(${kk}), arrayLength(&${fI}) - 1u)];\n`
    }

    function YI(kk) {
      return void 0 !== kk.uv
    }

    function AI(kk) {
      if (!kk) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (YI(kk)) return function(kk) {
        const {
          texture: Fk,
          cells: Ik,
          layers: Xk
        } = kk, Tk = `textureDimensions(${Fk}, bloxdSpLevel)`, ik = Ik ? `max(vec2u(vec2f(${Tk}) / ${Ik}), vec2u(1u))` : Tk, yk = Ik ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ik};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${Ik}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${Ik}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${Fk}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${Tk} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${ik};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${Fk}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let lk;
        if (Ik)
          if (1 === Xk.length) lk = `\treturn bloxdSpOwnTexel(${Xk[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const kk = Xk.length - 1;
            lk = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Xk[kk]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let Fk = kk - 1; Fk >= 0; Fk--) lk += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Xk[Fk]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            lk += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else lk = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${kk.id?`var<private> ${OI}: u32;\n`:""}${yk}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${nI(kk)};\n\treturn ${ik};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${kk.id?OI:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${nI(kk)};\n${lk}}\n`
      }(kk);
      const Fk = kk,
        Ik = kk => {
          const Ik = kk > 0 ? `bloxdSpLayer - ${Fk.layers*kk}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${kk}, ${Fk.sampler}, bloxdSpTurned, ${Ik}, round(bloxdSpMipLevel));`
        };
      let Xk = "";
      for (let ik = 0; ik < Fk.count - 1; ik++) Xk += `\tif (bloxdSpLayer < ${Fk.layers*(ik+1)}u) {\n\t\t${Ik(ik)}\n\t}\n`;
      const Tk = Fk.frame ? `${Fk.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${WI}: u32;\n${BI}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${WI} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${WI} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${WI} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${Tk}${Xk}\t${Ik(Fk.count-1)}\n}\n`
    }

    function gI(kk, Fk, Ik) {
      return !!kk.surface && "bloxdDefaultSurface" !== kk.surface && function(kk, Fk) {
        return "liquid" === Fk || !kk
      }(Fk, Ik)
    }

    function mI(kk, Fk) {
      return kk.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${Fk.vertexLocalPosition}, ${pI(Fk.vertexFlags)});\n\t\tlet bloxdSpVertex = ${kk.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function hI(kk, Fk, Ik, Xk, Tk) {
      if (!kk.surface) return "";
      const ik = (kk, Fk) => `\n\tlet bloxdSpTexelUV = ${kk};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${Fk}) - 1u));`;
      let yk = "",
        lk = "0u, 0u, vec2f(0.0), 0.0";
      const ak = Xk && YI(Xk) ? Xk : null,
        qk = Xk && !YI(Xk) ? Xk : null;
      if (ak) {
        yk = `${ak.id?`\n\tlet bloxdSpTexture = ${ak.id};\n\t${OI} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${ak.uv};${ik(function(kk,Fk){var Ik;return`${null!==(Ik=kk.levelUv)&&void 0!==Ik?Ik:kk.cells?`${Fk} / ${kk.cells}`:Fk} * vec2f(textureDimensions(${kk.texture}))`}(ak,"bloxdSpUv"),ak.texture)}`, lk = (ak.id ? `${OI}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else qk && (yk = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${WI} = bloxdSpTexture >> 16u;${ik(`fragmentInputs.vMainUV1 * ${(0,zF.ob)(qk.width)}`,"textureAtlas0")}`, lk = `bloxdSpTexture & 0xffffu, ${WI}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Lk = Tk.overlayColour,
        tk = Lk ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        Zk = "bloxdDefaultSurface" !== kk.surface || Lk ? `\n\tbaseColor = vec4f(${tk}, baseColor.a);` : "",
        jk = gI(kk, Fk, Ik) ? `\n\t${Tk.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${yk}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${Tk.alpha}, ${Tk.enchantTier}, ${Tk.enchantColour}, ${Tk.enchantSpeed}, ${null!==Lk&&void 0!==Lk?Lk:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${Tk.normal}, ${Tk.localPosition}, ${pI(Tk.flags)}, ${lk});\n\tlet bloxdSpSurface = ${kk.surface}(bloxdSpSurfaceIn);${Zk}${jk}\n`
    }
    const rI = "bloxdSpLightIn";

    function DI(kk, Fk, Ik, Xk) {
      if (!kk.light) return "";
      const Tk = Fk ? `${zF.n}.rgb, ${zF.n}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${zF.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: ik,
          diffuse: yk,
          emissive: lk,
          ambient: ak,
          fogColour: qk,
          fogAlpha: Lk,
          normal: tk
        } = Xk;
      return `\tvar ${rI} = BloxdLightIn(vec3f(0.0), ${Ik?ik:"0.0"}, ${yk}, ${lk}, ${ak}, ${Tk}, ${qk}, ${Lk}, fragmentInputs.vPositionW, ${tk}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${rI}.litColour = bloxdLitColour(bloxdSpSurface, ${rI});\n`
    }

    function MI(kk) {
      return kk.light ? `\n\t{\n\t\tlet bloxdSpLight = ${kk.light}(bloxdSpSurface, ${rI});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const kX = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      FX = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      IX = "\treturn color;\n}",
      XX = {
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
    const TX = Object.freeze({});

    function iX(kk) {
      var Fk;
      return !(null === (Fk = (0, EF.f)(kk)) || void 0 === Fk || !Fk.sceneDepth)
    }

    function yX(kk) {
      const Fk = (0, EF.f)(kk);
      return !!Fk && gI(Fk.hooks, Fk.strict, Fk.program)
    }

    function lX(kk, Fk, Ik, Xk) {
      return bI(kk, Fk, Ik, Xk, "terrain")
    }

    function aX(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const ik = function(kk) {
          return (0, EF.e)(kk.packVariant, kk.liquid ? "liquid" : "terrain")
        }(kk),
        {
          hooks: yk
        } = ik,
        lk = UI(ik, Xk),
        ak = "edge" === Tk ? "maskEdge" : "plain" === Tk ? "mask" : "trace",
        qk = mI(yk, XX);
      qk && (Fk = lX(Fk, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${qk}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Lk = "atlas" === kk.texture ? {
          count: kk.atlasCount,
          layers: kk.atlasLayers,
          width: kk.F_,
          sampler: "atlasSampler",
          frame: kk.animated ? Ik : null
        } : null,
        tk = `${ik.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${cI(ik,lk,XX.normal,XX.flags,ak)}${hI(yk,ik.strict,ik.program,Lk,XX)}`;
      tk && (Fk = lX(Fk, kX, `${kX.slice(0,-1)}${tk}`, "surface"));
      const Zk = MI(yk);
      return Zk && (Fk = lX(Fk, FX, `${DI(yk,kk.lighting,kk.dirLightCount>0,XX)}${FX}`, "light input"), Fk = lX(Fk, IX, `${Zk.slice(1)}${IX}`, "light")), `${(0,vF.C)()}${ik.sceneDepth?`@group(${vF.h}) @binding(${vF.m}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${uI};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${NI(ik,lk,ak)}${AI(Lk)}${GI}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${ik.code}${Fk}`
    }
    const qX = sk.e.WGSL;

    function LX(kk) {
      return void 0 !== kk.packVariant
    }
    const tX = {
        AXk: 0,
        gXk: 4,
        mXk: 8,
        hXk: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      ZX = tX.aoLevels + 4,
      jX = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      eX = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      wX = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      HX = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      JX = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      xX = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      PX = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      KX = 0,
      QX = 3,
      sX = 4,
      VX = 5,
      zX = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${SF.c}, ${SF.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${SF.c}, ${SF.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      SX = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((kk=>oF.b>>kk&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const oX = {
      Dt: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: kk => `animDataPerTex[${kk}]`
    };

    function vX(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oX;
      return `\n\tlet atlasIdxIn = ${kk};\n\tlet animTick = ${Ik.Dt};\n\tlet animTickStride = ${Ik.stride};\n\tlet numAnimTextures = ${Ik.count};\n\t${(0,Vk.i)(sk.e.WGSL,Ik.perTexture)}\n\t${Fk}animLayer;\n`
    }

    function EX(kk) {
      const Fk = (Fk, Ik) => {
        const Xk = Fk > 0 ? `fragmentInputs.texAtlasIndex - ${kk.atlasLayers.toFixed(1)} * ${Fk.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${Ik?"textureSampleLevel":"textureSample"}(textureAtlas${Fk}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Xk}))${Ik?", atlasLod":""})`
      };
      if (1 === kk.atlasCount) return `baseColor = ${Fk(0,!1)};`;
      let Ik = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,zF.ob)(kk.F_)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Xk = 0; Xk < kk.atlasCount; Xk++) {
        const Tk = kk.atlasLayers * (Xk + 1) - .5;
        Ik += `${Xk>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,zF.ob)(Tk)}) {\n\t\tbaseColor = ${Fk(Xk,!0)};\n\t}`
      }
      return Ik
    }

    function OX(kk) {
      return `terrain-${kk.texture}${"atlas"===kk.texture?kk.atlasCount:""}${kk.animated?"-anim":""}${kk.alphaTest?"-test":""}${kk.lighting?"-lit":""}-dir${kk.dirLightCount}${kk.packed?"-packed":""}${LX(kk)?`-sp${kk.packVariant}`:""}${kk.liquid?"-liquid":""}${kk.resting?"-rest":""}`
    }

    function nX(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Xk = function(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const Ik = "none" !== kk.texture,
          Xk = "atlas" === kk.texture,
          Tk = kk.dirLightCount > 0,
          ik = LX(kk);
        if (kk.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${kk.dirLightCount}`);
        let yk = 1,
          lk = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Xk) {
          kk.animated && (lk += `@group(2) @binding(${yk++}) var<storage, read> animDataPerTex: array<f32>;\n`), lk += `@group(2) @binding(${yk++}) var atlasSampler: sampler;\n`;
          for (let Fk = 0; Fk < kk.atlasCount; Fk++) lk += `@group(2) @binding(${yk++}) var textureAtlas${Fk}: texture_2d_array<f32>;\n`
        } else "single" === kk.texture && (lk += `@group(2) @binding(${yk++}) var diffuseSamplerSampler: sampler;\n`, lk += `@group(2) @binding(${yk++}) var diffuseSampler: texture_2d<f32>;\n`);
        const ak = function(kk) {
            const Fk = PX,
              Ik = "none" !== kk.texture,
              Xk = "atlas" === kk.texture,
              Tk = LX(kk);
            return kk.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${Ik?"uv: vec2f,":""}\n\t${Xk?"texAtlasIndices: f32,":""}\n\t${kk.lighting?"aPackedLightLevels: f32,":""}\n\t${Tk?"blockFlagWords: vec2u,":""}\n}\n${zX}\n${SX}\n${"single"===kk.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${Ik?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===kk.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Xk?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${kk.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${Tk?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${Fk.position}) position: vec3f,\n\t@location(${Fk.normal}) normal: vec4f,\n\t@location(${Fk.color}) color: vec4f,\n\t${Ik?`@location(${Fk.uv}) uv: vec2f,`:""}\n\t${kk.lighting?`@location(${Fk.packedLight}) aPackedLightLevels: f32,`:""}\n\t${Tk?`@location(${Fk.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(kk),
          qk = `\n${HX}\n${eX}\n${wX}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${lk}\n${hk}\n${ak.declarations}\nstruct Varyings {\n\t${"none"===Fk?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${kk.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${Tk?"@location(5) vTerrainLambert: f32,":""}\n\t${Ik?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Xk?"@location(7) texAtlasIndex: f32,":""}\n\t${kk.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${ik?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${ik&&Xk?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${kk.resting?"":(0,zF.w)(qX)}\n${xX}\n\n@vertex\nfn mainVertex(${ak.parameter}) -> Varyings {\n\t${ak.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${ik?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${qF.d.placed}u;`:""}\n\t${ik&&Xk?dI("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${kk.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${Ik?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Xk?function(kk){return kk?vX("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(kk.animated):""}\n\t${"single"===kk.texture&&kk.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,zF._)(qX)}\n\t${(0,zF.J)(qX,kk.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${kk.resting?"":JX}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Xk?EX(kk):""}\n\t${"single"===kk.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Ik?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${kk.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${Tk?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${mk}));\n\t${LX(kk)?(0,zF.hb)(sk.e.WGSL):(0,zF.Q)(qX)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Lk = new Set;
        kk.lighting && Lk.add("BLOXD_LIGHTING");
        Tk && Lk.add("BLOXD_TERRAIN_DIRECTIONAL");
        return QF(qk, new Map([...Lk].map((kk => [kk, !0]))))
      }(kk, Ik);
      if (!LX(kk)) return Xk;
      const Tk = aX(kk, Xk, vX, Fk, Ik);
      return "none" === Ik ? Tk : `${Tk}${function(kk){const Fk="none"!==kk.texture&&kk.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${kk.resting?"":JX}\n\t${kk.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Fk&&"atlas"===kk.texture?EX(kk):""}\n\t${Fk&&"single"===kk.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${Fk?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${qF.d.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(kk)}`
    }
    const GX = new Map([
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

    function pX(kk, Fk) {
      const Ik = new Map;
      let Xk = 0;
      const Tk = [],
        ik = [],
        yk = [];
      for (const qk of Fk) {
        var lk, ak;
        const Fk = null !== (lk = qk.type.trim().split(/\s+/).pop()) && void 0 !== lk ? lk : qk.type,
          Lk = GX.get(Fk);
        if (!Lk) throw new Error(`Lite: no uniform layout for ${qk.name}: ${qk.type}`);
        const tk = null !== (ak = qk.arraySize) && void 0 !== ak ? ak : 0,
          Zk = tk ? 4 : Lk.align;
        Xk = Math.ceil(Xk / Zk) * Zk;
        const jk = tk ? 4 * Math.ceil(Lk.floats / 4) : Lk.floats;
        if (Ik.set(qk.name, {
            offset: Xk,
            floats: Lk.floats,
            arraySize: tk,
            stride: jk
          }), tk && Lk.floats <= 2) {
          const Fk = `${kk}_${yk.length}_strided`;
          ik.push(`struct ${Fk} {\n\t@size(16) el: ${Lk.wgsl},\n}`), yk.push(qk.name), Tk.push(`\t@align(16) ${qk.name}: array<${Fk}, ${tk}>,`)
        } else tk ? Tk.push(`\t@align(16) ${qk.name}: array<${Lk.wgsl}, ${tk}>,`) : Tk.push(`\t${qk.name}: ${Lk.wgsl},`);
        Xk += tk ? jk * tk : Lk.floats
      }
      return {
        slots: Ik,
        floats: Math.max(4, 4 * Math.ceil(Xk / 4)),
        wgsl: `${ik.join("\n")}\nstruct ${kk} {\n${Tk.join("\n")}\n}\n`,
        stridedArrays: yk
      }
    }
    const uX = [{
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
      bX = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      RX = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function UX(kk, Fk) {
      return `#if defined(${kk}) && ${kk}DIRECTUV == 0\nvarying v${Fk}UV: vec2f;\n#endif`
    }

    function CX(kk, Fk, Ik) {
      return `#if defined(${kk}) && ${kk}DIRECTUV == 0\nif (uniforms.v${Fk}Infos.x==0.)\n{vertexOutputs.v${Fk}UV= (uniforms.${Ik}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${Fk}UV= (uniforms.${Ik}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function NX(kk, Fk, Ik) {
      return `#ifdef ${kk}\n#if ${kk}DIRECTUV == 1\n#define v${Fk}UV vMainUV1\n#elif ${kk}DIRECTUV == 2\n#define v${Fk}UV vMainUV2\n#else\nvarying v${Fk}UV: vec2f;\n#endif\nvar ${Ik}SamplerSampler: sampler;\nvar ${Ik}Sampler: texture_2d<f32>;\n#endif`
    }
    const cX = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      WX = 256,
      fX = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      BX = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      dX = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      YX = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      AX = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      gX = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      mX = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      hX = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${BX}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${UX("OPACITY","Opacity")}\n${UX("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${mX}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${dX}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${CX("OPACITY","Opacity","opacity")}\n${CX("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${YX}\n#define CUSTOM_VERTEX_MAIN_END\n${AX}\n}\n`;
    const rX = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${NX("OPACITY","Opacity","opacity")}\n${NX("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${mX}\n${gX}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((kk,Fk)=>function(kk){const Fk=`
    frame.lights[LITE_LIGHT$ {
        kk
      }
      _SLOT] `;return`
    #ifdef LIGHT$ {
      kk
    }\
    nvar diffuse$ {
      kk
    }: vec4f = $ {
      Fk
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      kk
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      Fk
    }.vLightData, diffuse$ {
      kk
    }.rgb, $ {
      Fk
    }.vLightSpecular.rgb, diffuse$ {
      kk
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(Fk))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, DX = /^([gimus]+)!/, MX = new Set;

    function kT(kk) {
      MX.has(kk) || (MX.add(kk), console.warn(`Lite: no place for plugin code at ${kk} in the standard shader: it is left out`))
    }

    function FT(kk, Fk) {
      let Ik = kk;
      const Xk = new Map;
      for (const [ik, yk] of Fk) {
        var Tk;
        Xk.set(ik, `${null!==(Tk=Xk.get(ik))&&void 0!==Tk?Tk:""}${yk}\n`)
      }
      for (const [ik, yk] of Xk) {
        if (!ik.startsWith("!")) {
          const kk = `#define ${ik}`;
          if (!Ik.includes(kk)) {
            kT(ik);
            continue
          }
          Ik = Ik.replace(kk, (() => `\n${yk}\n${kk}`));
          continue
        }
        let kk = ik.substring(1),
          Fk = "g";
        if (kk.startsWith("!")) Fk = "", kk = kk.substring(1);
        else {
          const Ik = DX.exec(kk);
          Ik && (Fk = Ik[1], kk = kk.substring(Fk.length + 1))
        }
        const Xk = new RegExp(kk, Fk.includes("g") ? Fk : `${Fk}g`);
        let Tk = Xk.exec(Ik);
        for (Tk || kT(ik); Tk;) {
          const kk = Tk,
            Fk = yk.replace(/\$(\d+)/g, ((Fk, Ik) => Number(Ik) < kk.length ? kk[Number(Ik)] : ""));
          Ik = Ik.substring(0, kk.index) + Fk + Ik.substring(kk.index + kk[0].length), Xk.lastIndex = kk.index + Fk.length, Tk = Xk.exec(Ik)
        }
      }
      return Ik
    }
    const IT = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      XT = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      TT = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function iT(kk) {
      const Fk = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let Ik = kk.replace(IT, ((kk, Ik, Xk, Tk, ik, yk) => ("attribute" === Ik ? Fk.attributes.push({
        name: ik,
        type: yk
      }) : void 0 === Ik ? Fk.varyings.push({
        name: ik,
        type: yk,
        interpolation: lT(yk, Xk, Tk)
      }) : Fk.uniforms.push({
        name: ik,
        type: yT(yk)
      }), "")));
      return Ik = Ik.replace(XT, ((kk, Ik) => (Fk.samplers.add(Ik), ""))), Ik = Ik.replace(TT, ((kk, Ik, Xk) => (Fk.textures.push({
        name: Ik,
        type: Xk
      }), ""))), Fk.body = Ik, Fk
    }

    function yT(kk) {
      const Fk = kk.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        Ik = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(Fk);
      if (!Ik) throw new Error(`Lite: unsupported uniform type ${kk}`);
      return Ik
    }

    function lT(kk, Fk, Ik) {
      return void 0 === Fk && void 0 === Ik ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(kk.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === Fk ? "@interpolate(flat) " : `@interpolate(${null!==Fk&&void 0!==Fk?Fk:"perspective"}, ${null!==Ik&&void 0!==Ik?Ik:"center"}) `
    }

    function aT(kk) {
      return ZT({
        defines: kk.defines,
        vertex: FT(hX, kk.vertexCode),
        fragment: FT(rX, kk.fragmentCode),
        members: [...uX, ...kk.defines.has("OPACITY") ? bX : [], ...kk.defines.has("EMISSIVE") ? RX : [], ...kk.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function qT(kk) {
      const Fk = kk.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (Fk === kk) throw new Error("Lite: fragment main has no return");
      return Fk
    }
    const LT = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${BX}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${dX}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${YX}\n${AX}\n}\n`,
      tT = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${gX}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function ZT(kk) {
      const Fk = kk.defines,
        Ik = iT(QF(kk.vertex, Fk)),
        Xk = iT(QF(kk.fragment, Fk)),
        Tk = new Map;
      for (const Pk of [...Ik.varyings, ...Xk.varyings]) Tk.has(Pk.name) || Tk.set(Pk.name, Pk);
      const ik = [...Tk.values()].map(((kk, Fk) => `\t@location(${Fk}) ${kk.interpolation}${kk.name}: ${kk.type},`)),
        yk = [...kk.members];
      for (const Pk of [...Ik.uniforms, ...Xk.uniforms]) yk.some((kk => kk.name === Pk.name)) || yk.push(Pk);
      const lk = pX(kk.structName, yk),
        ak = [],
        qk = [];
      let Lk = 1;
      const tk = new Set;
      for (const Pk of [...Ik.textures, ...Xk.textures]) {
        if (tk.has(Pk.name)) continue;
        tk.add(Pk.name);
        const kk = `${Pk.name}Sampler`,
          Fk = Lk++,
          Ik = Lk++,
          Xk = Pk.type.startsWith("texture_2d_array") ? "2d-array" : Pk.type.startsWith("texture_cube") ? "cube" : "2d";
        ak.push({
          name: Pk.name,
          binding: Fk,
          samplerBinding: Ik,
          dimension: Xk
        }), qk.push(`@group(2) @binding(${Fk}) var ${Pk.name}: ${Pk.type};`), qk.push(`@group(2) @binding(${Ik}) var ${kk}: sampler;`)
      }
      for (const Pk of [...Ik.samplers, ...Xk.samplers])
        if (!tk.has(Pk.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Pk} has no texture`);
      const Zk = [HX, fX, lk.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${kk.structName};`, ...qk].join("\n"),
        jk = Ik.attributes,
        ek = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Ik.attributes.map(((kk, Fk) => `\t@location(${Fk}) ${kk.name}: ${kk.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        wk = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ik, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        Hk = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Xk.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...ik, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", hk, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${mk}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        Jk = kk => {
          for (const Fk of lk.stridedArrays) kk = kk.replace(new RegExp(`\\b${Fk}\\s*\\[(.*?)\\]`, "g"), `${Fk}[$1].el`);
          return kk
        };
      return {
        vertex: `${Zk}\n${ek}\n${wk}\n${Jk(Ik.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${Zk}\n${Hk}\n${qT((xk=Jk(Xk.body),xk.includes("fragmentInputs.position")?xk.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):xk))}`,
        attributes: jk,
        material: lk,
        textures: ak
      };
      var xk
    }
    const jT = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      eT = kk => ({
        name: kk,
        type: "vec3"
      }),
      wT = kk => ({
        name: kk,
        type: "float"
      }),
      HT = pX("EarthSkyUniforms", [eT("viewFrom"), wT("exposureScale"), eT("zenithOffset"), wT("fogOn"), eT("up"), wT("ditherOn"), eT("sun"), wT("turbidity"), eT("tint"), wT("rayleigh"), eT("sunDir"), wT("mieStrength"), eT("inScatterR"), wT("mieFocus"), eT("inScatterM"), wT("sunE"), eT("extinctionBeta"), wT("sunsetMix"), wT("mieScale"), wT("mieBase"), wT("mieSlope"), wT("sunDiscE"), wT("exposure")]),
      JT = `${HX}\n${fX}\n${HT.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      xT = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${jT.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      PT = `\n${hk}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(JF).map((kk=>{let[Fk,Ik]=kk;return`const TONE_${Fk}: f32 = ${Ik};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${xF};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${mk}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var KT = Ik(37144);
    const QT = new KT.Ge,
      sT = new KT.Ge,
      VT = new KT.Quaternion,
      zT = new Float64Array(3),
      ST = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      oT = new Float64Array(16);

    function vT(kk, Fk, Ik) {
      const Xk = Ik.worldMatrix;
      var Tk;
      kk.updateFloat3("viewFrom", Xk[12], Xk[13], Xk[14]), kk.updateFloatsFrom("zenithOffset", Fk.cameraOffset, 0, 3), kk.updateFloatsFrom("up", Fk.up, 0, 3), Fk.luminance > 0 && (kk.updateFloat("exposure", Fk.luminance), kk.updateFloat("exposureScale", (Tk = Fk.luminance, Math.log2(2 / Math.pow(Tk, 4))))), kk.updateFloat("turbidity", Fk.turbidity), kk.updateFloat("rayleigh", Fk.rayleigh), kk.updateFloat("mieStrength", Fk.mieCoefficient), kk.updateFloat("mieFocus", Fk.mieDirectionalG), kk.updateFloatsFrom("tint", Fk.tint, 0, 3), kk.updateFloat("fogOn", Fk.fog && Ik.fogEnabled && 0 !== Ik.fogMode ? 1 : 0), kk.updateFloat("ditherOn", Fk.dithering ? 1 : 0);
      const ik = Fk.sunPosition;
      if (QT.set(ik[0], ik[1], ik[2]), !Fk.useSunPosition) {
        const kk = Math.PI * (Fk.inclination - .5),
          Ik = 2 * Math.PI * (Fk.azimuth - .5);
        QT.set(Fk.distance * Math.cos(Ik) * Math.cos(kk), Fk.distance * Math.sin(-kk), Fk.distance * Math.sin(Ik) * Math.cos(kk)), KT.Quaternion.FromUnitVectorsToRef(KT.Ge.UpReadOnly, sT.set(Fk.up[0], Fk.up[1], Fk.up[2]), VT), QT.rotateByQuaternionToRef(VT, QT)
      }
      kk.updateVector3("sun", QT), zT[0] = QT.x, zT[1] = QT.y, zT[2] = QT.z;
      const yk = HF(Fk, zT, ST);
      kk.updateFloatsFrom("sunDir", yk.sunDir, 0, 3), kk.updateFloat("sunE", yk.sunE), kk.updateFloatsFrom("inScatterR", yk.inScatterR, 0, 3), kk.updateFloatsFrom("inScatterM", yk.inScatterM, 0, 3), kk.updateFloatsFrom("extinctionBeta", yk.extinctionBeta, 0, 3), kk.updateFloat("sunsetMix", yk.sunsetMix), kk.updateFloat("sunDiscE", yk.sunDiscE), kk.updateFloat("mieScale", yk.mieScale), kk.updateFloat("mieBase", yk.mieBase), kk.updateFloat("mieSlope", yk.mieSlope)
    }

    function ET(kk, Fk) {
      const Ik = oT;
      Ik[0] = Fk.far, Ik[5] = Fk.far, Ik[10] = Fk.far, Ik[15] = 1;
      const Xk = kk.infiniteDistance;
      for (let Tk = 0; Tk < 3; Tk++) Ik[12 + Tk] = kk.position[Tk] + (Xk ? Fk.worldMatrix[12 + Tk] : 0);
      return oT
    }
    var OT = Ik(38714);

    function nT(kk) {
      return Math.max(4, 4 * Math.ceil(kk / 4))
    }

    function GT(kk, Fk, Ik, Xk) {
      const Tk = kk.createBuffer({
        label: Xk,
        size: nT(Fk.byteLength),
        usage: Ik,
        mappedAtCreation: !0
      });
      return new Uint8Array(Tk.getMappedRange(), 0, Fk.byteLength).set(new Uint8Array(Fk.buffer, Fk.byteOffset, Fk.byteLength)), Tk.unmap(), Tk
    }

    function pT(kk, Fk) {
      return Math.floor(Math.log2(Math.max(kk, Fk))) + 1
    }

    function uT(kk, Fk, Ik, Xk, Tk, ik) {
      const yk = kk.createTexture({
          label: ik,
          size: {
            width: Ik,
            height: Xk,
            depthOrArrayLayers: Tk
          },
          format: "rgba8unorm",
          mipLevelCount: pT(Ik, Xk),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        lk = (Fk, Ik, Xk, ik) => {
          kk.queue.writeTexture({
            texture: yk,
            mipLevel: Ik
          }, Fk, {
            bytesPerRow: 4 * Xk,
            rowsPerImage: ik
          }, {
            width: Xk,
            height: ik,
            depthOrArrayLayers: Tk
          })
        };
      lk(Fk, 0, Ik, Xk);
      let ak = 1;
      for (const qk of function*(kk, Fk, Ik, Xk) {
          let Tk = kk,
            ik = Fk,
            yk = Ik;
          for (; ik > 1 || yk > 1;) {
            const kk = Math.max(1, ik >> 1),
              Fk = Math.max(1, yk >> 1),
              Ik = new Uint8Array(kk * Fk * Xk * 4),
              lk = 4 * ik;
            let ak = 0;
            for (let qk = 0; qk < Xk; qk++) {
              const Xk = qk * lk * yk;
              for (let qk = 0; qk < Fk; qk++) {
                const Fk = Xk + Math.min(2 * qk, yk - 1) * lk,
                  Lk = Xk + Math.min(2 * qk + 1, yk - 1) * lk;
                for (let Xk = 0; Xk < kk; Xk++) {
                  const kk = 4 * Math.min(2 * Xk, ik - 1),
                    yk = 4 * Math.min(2 * Xk + 1, ik - 1);
                  for (let Xk = 0; Xk < 4; Xk++) Ik[ak++] = Tk[Fk + kk + Xk] + Tk[Fk + yk + Xk] + Tk[Lk + kk + Xk] + Tk[Lk + yk + Xk] + 2 >> 2
                }
              }
            }
            yield {
              data: Ik,
              width: kk,
              height: Fk
            }, Tk = Ik, ik = kk, yk = Fk
          }
        }(Fk, Ik, Xk, Tk)) lk(qk.data, ak++, qk.width, qk.height);
      return yk
    }
    const bT = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function RT(kk) {
      if (kk.startsWith("data:")) {
        const Fk = kk.search(/[;,]/);
        return `data:${Fk>5?kk.slice(5,Fk):""} URL of ${kk.length} characters`
      }
      return kk.length > 80 ? `${kk.slice(0,80)}...` : kk
    }
    async function UT(kk) {
      const Fk = await fetch(kk);
      if (!Fk.ok) throw new Error(`${RT(kk)}: ${Fk.status} ${Fk.statusText}`);
      return createImageBitmap(await Fk.blob(), bT)
    }
    async function CT(kk) {
      const Fk = await UT(kk),
        Ik = new OffscreenCanvas(Fk.width, Fk.height),
        Xk = Ik.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Xk) throw new Error("No 2D context to decode an image");
      Xk.drawImage(Fk, 0, 0);
      const {
        data: Tk
      } = Xk.getImageData(0, 0, Fk.width, Fk.height);
      return Fk.close(), {
        pixels: new Uint8Array(Tk.buffer, Tk.byteOffset, Tk.byteLength),
        width: Ik.width,
        height: Ik.height
      }
    }
    const NT = new WeakMap;

    function cT(kk, Fk, Ik, Xk) {
      var Tk;
      const ik = null !== (Tk = NT.get(kk)) && void 0 !== Tk ? Tk : new Map;
      NT.set(kk, ik);
      let yk = ik.get(Fk);
      return yk || (yk = (async Tk => {
        const ik = null !== (Tk = function(kk, Fk) {
          const Ik = kk ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : null;
          return null !== Ik && void 0 !== Ik && Ik.byteLength && Fk && Ik.byteLength % (Fk * Fk * 4) === 0 ? {
            pixels: Ik,
            layerWidth: Fk,
            layers: Ik.byteLength / (Fk * Fk * 4)
          } : null
        }(Ik, Xk)) && void 0 !== Tk ? Tk : await async function(kk) {
          const {
            pixels: Fk,
            width: Ik
          } = await CT(kk);
          return {
            pixels: Fk,
            layerWidth: Ik,
            layers: Fk.byteLength / (Ik * Ik * 4)
          }
        }(Fk), {
          layerWidth: yk,
          layers: lk
        } = ik;
        return {
          texture: uT(kk, ik.pixels, yk, yk, lk, `atlas-${Fk}`),
          layerWidth: yk,
          layers: lk
        }
      })(), ik.set(Fk, yk), yk.catch((() => {
        ik.delete(Fk)
      }))), yk
    }
    const WT = new Map([
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
      fT = new Map([
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

    function BT(kk) {
      for (const Fk of (0, OT.l)(kk))
        if (!fT.has((0, OT.h)(Fk))) return !1;
      return !0
    }

    function dT(kk) {
      const Fk = fT.get(kk);
      if (!Fk) return null;
      const [Ik, Xk, Tk] = Fk;
      return {
        srcFactor: WT.get(Ik),
        dstFactor: WT.get(Xk),
        operation: Tk
      }
    }
    let YT = null;

    function AT(kk) {
      YT = kk
    }

    function gT(kk, Fk, Ik) {
      var Xk;
      null === (Xk = YT) || void 0 === Xk || Xk(kk, Fk, Ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class mT {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(kk, Fk, Ik, Xk, Tk) {
        Ik !== this.pipeline && (kk.setPipeline(Ik), this.pipeline = Ik), kk.setBindGroup(1, Xk, [Tk]);
        const ik = Fk.material.bindGroup;
        ik !== this.materialGroup && (kk.setBindGroup(2, ik), this.materialGroup = ik);
        const yk = Fk.program.packGroup;
        yk && yk !== this.packGroup && (kk.setBindGroup(vF.h, yk), this.packGroup = yk);
        const {
          vertexBuffers: lk,
          vertexOffsets: ak
        } = this;
        for (let qk = 0; qk < Fk.vertexBuffers.length; qk++) lk[qk] === Fk.vertexBuffers[qk] && ak[qk] === Fk.vertexOffsets[qk] || (kk.setVertexBuffer(qk, Fk.vertexBuffers[qk], Fk.vertexOffsets[qk]), lk[qk] = Fk.vertexBuffers[qk], ak[qk] = Fk.vertexOffsets[qk]);
        Fk.indexBuffer && Fk.indexBuffer !== this.indexBuffer && (kk.setIndexBuffer(Fk.indexBuffer, Fk.indexFormat), this.indexBuffer = Fk.indexBuffer)
      }
    }
    class hT {
      constructor(kk, Fk, Ik, Xk) {
        this.modelMeshes = kk, this.T6 = Fk, this.maker = Ik, this.warnOnce = Xk, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (kk, Fk) => {
          (Fk < -1 || Fk > 1) && this.warnOnce(`group:${Fk}`, `rendering group ${Fk} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(kk) {
        this.collectGroup(kk, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(kk, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(kk, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.T6.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(rT), this.transparentDraws.sort(DT)
      }
      collectGroup(kk, Fk, Ik, Xk, Tk) {
        const ik = this.modelMeshes.group(Fk),
          yk = this.T6.group(Fk),
          lk = 0 === Fk ? null === yk || void 0 === yk ? void 0 : yk.opaque : void 0;
        this.collectList(kk, null === ik || void 0 === ik ? void 0 : ik.opaque, lk || null === yk || void 0 === yk ? void 0 : yk.opaque, Fk, !1, Ik, Tk), lk && (this.T6.drawn += this.maker.bundleDraws(kk, lk, Fk)), this.collectList(kk, null === ik || void 0 === ik ? void 0 : ik.alphaTest, void 0, Fk, !1, Ik, Tk), this.collectList(kk, null === ik || void 0 === ik ? void 0 : ik.transparent, null === yk || void 0 === yk ? void 0 : yk.transparent, Fk, !0, Xk, Tk)
      }
      collectList(kk, Fk, Ik, Xk, Tk, ik, yk) {
        var lk;
        const ak = ik.length;
        Fk && this.maker.pushDraws(kk, Fk.units, Fk.units.length, Xk, Tk, ik, Fk.rows), Ik && (this.T6.drawn += this.maker.pushDraws(kk, Ik, Ik.length, Xk, Tk, ik));
        const qk = Tk ? null === (lk = this.modelMeshes.group(Xk)) || void 0 === lk ? void 0 : lk.text : void 0;
        qk && this.maker.pushDraws(kk, qk.units, qk.units.length, Xk, !0, ik, qk.rows), yk && MT(ik, ak)
      }
    }

    function rT(kk, Fk) {
      return kk.program.id - Fk.program.id || kk.material.owner.uniqueId - Fk.material.owner.uniqueId
    }

    function DT(kk, Fk) {
      return kk.material.owner.uniqueId - Fk.material.owner.uniqueId
    }

    function MT(kk, Fk) {
      for (let Ik = Fk + 1; Ik < kk.length; Ik++) {
        const Xk = kk[Ik];
        let Tk = Ik - 1;
        for (; Tk >= Fk && DT(kk[Tk], Xk) > 0; Tk--) kk[Tk + 1] = kk[Tk];
        kk[Tk + 1] = Xk
      }
    }
    const ki = {};

    function Fi(kk) {
      return kk.hasThinInstances ? "thin" : kk.rXk || kk._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function Ii(kk, Fk, Ik) {
      return kk ? (Ik._needUVs = !0, kk.optimizeUVAllocation && (0, Ek.F)(kk.matrix) ? (Ik[`${Fk}DIRECTUV`] = kk.uvSet + 1, Ik[`MAINUV${kk.uvSet+1}`] = !0) : Ik[`${Fk}DIRECTUV`] = 0, !0) : (Ik[`${Fk}DIRECTUV`] = 0, !1)
    }

    function Xi(kk) {
      const Fk = new Map;
      for (const Ik in kk) {
        if (95 === Ik.charCodeAt(0)) continue;
        const Xk = kk[Ik],
          Tk = typeof Xk;
        "number" === Tk || "string" === Tk ? Fk.set(Ik, String(Xk)) : Xk && "function" !== Tk && Fk.set(Ik, !0)
      }
      return Fk
    }

    function Ti(kk) {
      const Fk = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: Ik
        }
        of kk.features)
        for (const kk in Ik) Fk[kk] = Ik[kk];
      return Fk
    }

    function ii(kk) {
      const Fk = kk.parts.geometry;
      return null !== Fk && void 0 !== Fk && Fk.live ? Fk : null
    }

    function yi(kk) {
      var Fk;
      return null !== (Fk = ii(kk)) && void 0 !== Fk ? Fk : ki
    }
    class li {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = kk, this.warnOnce = Fk, this.programWithModel = Ik, this.packFailed = Xk, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(kk, Fk, Ik, Xk, Tk) {
        const ik = Fk.owner;
        let yk = this.drawStates.get(Fk);
        if (!yk) {
          const kk = Fk.parts.materials[Fk.range];
          if (!kk) return this.warnOnce("model", `${Ik.name} on ${ik.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          yk = {
            defines: Ti(kk),
            model: kk,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: Tk,
            groupId: Xk,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(Fk, yk)
        }
        if (this.programCurrent(yk, Fk, Tk, Xk)) return yk.program;
        const {
          model: lk
        } = yk, ak = yi(Fk), qk = this.instanceLayout(ik, Tk), Lk = this.definesBits(ik);
        if (!this.prepareModelDefines(kk, ik, lk, yk.defines, Xk, Tk)) return null;
        yk.instancing = Tk, yk.groupId = Xk, yk.modelVersion = lk.version, yk.geometry = ak, yk.instanceLayout = qk, yk.definesBits = Lk;
        const tk = function(kk) {
          let Fk = "";
          for (const [Ik, Xk] of kk) Fk += !0 === Xk ? `${Ik};` : `${Ik}=${Xk};`;
          return Fk
        }(Xi(yk.defines));
        return tk === yk.definesKey && yk.packVariant === this.modelPackVariant && yk.program && !this.packFailed(yk.program) || (yk.definesKey = tk, yk.packVariant = this.modelPackVariant, yk.program = this.programWithModel(lk, yk.defines, tk)), yk.program
      }
      programCurrent(kk, Fk, Ik, Xk) {
        return null !== kk.program && !this.packFailed(kk.program) && kk.instancing === Ik && kk.groupId === Xk && this.definesHold(kk, Fk, Ik)
      }
      definesHold(kk, Fk, Ik) {
        return kk.modelVersion === kk.model.version && kk.geometry === yi(Fk) && kk.instanceLayout === this.instanceLayout(Fk.owner, Ik) && kk.definesBits === this.definesBits(Fk.owner) && kk.packVariant === this.modelPackVariant
      }
      modelPackKind(kk) {
        var Fk;
        return 0 === this.modelPackVariant ? null : null !== (Fk = (0, Sk.B)(kk, zk.e.name)) && void 0 !== Fk && Fk.active ? "placed" : kk.item ? "item" : kk.lifeform ? "lifeform" : kk.box ? "box" : null
      }
      instanceLayout(kk, Fk) {
        var Ik, Xk, Tk;
        return "thin" === Fk ? null !== (Tk = this.resources.U_.get(kk)) && void 0 !== Tk ? Tk : null : "instanced" === Fk && null !== (Ik = null === (Xk = kk._userInstancedBuffersStorage) || void 0 === Xk ? void 0 : Xk.interleavedKinds) && void 0 !== Ik ? Ik : null
      }
      definesBits(kk) {
        const Fk = this.view;
        return (kk.visibility < 1 ? 1 : 0) | (kk.hasVertexAlpha ? 2 : 0) | (kk.applyFog ? 4 : 0) | (kk.useVertexColors ? 8 : 0) | (kk.nonUniformScaling ? 16 : 0) | (Fk.fogEnabled && 0 !== Fk.fogMode ? 32 : 0) | (Fk.lightsEnabled ? 64 : 0) | Fk.lightCount << 7
      }
      prepareLightDefines(kk, Fk, Ik) {
        let Xk = 0;
        if (this.view.lightsEnabled && !Fk) {
          const Fk = Math.min(Ik, 4);
          for (; Xk < this.view.lightCount && (kk[`LIGHT${Xk}`] = !0, kk[`LITE_LIGHT${Xk}_SLOT`] = Xk, Xk++, kk._needNormals = !0, Xk !== Fk););
        }
        for (let Tk = Xk; Tk < 4; Tk++) kk[`LIGHT${Tk}`] = !1, kk[`LITE_LIGHT${Tk}_SLOT`] = void 0
      }
      prepareModelDefines(kk, Fk, Ik, Xk, Tk, ik) {
        const {
          features: yk
        } = Ik;
        Xk._needNormals = !1, Xk._needUVs = !1;
        const lk = this.view;
        this.prepareLightDefines(Xk, Ik.disableLighting, Ik.maxSimultaneousLights), Xk.MAINUV1 = !1, Xk.MAINUV2 = !1;
        const ak = Ik.diffuseTexture;
        ak ? (Xk._needUVs = !0, Xk.DIFFUSE = !0, ak.optimizeUVAllocation && (0, Ek.F)(ak.matrix) ? (Xk.DIFFUSEDIRECTUV = ak.uvSet + 1, Xk[`MAINUV${ak.uvSet+1}`] = !0) : Xk.DIFFUSEDIRECTUV = 0, ak.uvSet > 1 && this.warnOnce(`uvset:${Ik.name}`, `${Ik.name} samples UV set ${ak.uvSet+1}, which is not supported`)) : (Xk.DIFFUSE = !1, Xk.DIFFUSEDIRECTUV = 0);
        const qk = Ik.opacityTexture,
          Lk = Ik.emissiveTexture;
        Xk.OPACITY = Ii(qk, "OPACITY", Xk), Xk.OPACITYRGB = null !== qk && qk.getAlphaFromRGB, Xk.EMISSIVE = Ii(Lk, "EMISSIVE", Xk), (qk && qk.uvSet > 1 || Lk && Lk.uvSet > 1) && this.warnOnce(`uvset:${Ik.name}`, `${Ik.name} samples a UV set past 2, which is not supported`);
        const tk = Ik.reflectionTexture,
          Zk = null !== tk;
        if (Zk) {
          if (!this.resources.boundTexture(tk)) return !1;
          Xk._needNormals = !0
        }
        Xk.REFLECTION = Zk, Xk.REFLECTIONMAP_3D = Zk, Xk.REFLECTIONMAP_SKYBOX = Zk, Xk.REFLECTIONMAP_OPPOSITEZ = Zk && (kk.useRightHandedSystem ? !tk.invertZ : tk.invertZ), Xk.ROUGHNESS = Zk && Ik.roughness > 0, Xk.REFLECTIONOVERALPHA = Zk && Ik.useReflectionOverAlpha, Xk.LITE_REFLECTION_LUMINANCE = Zk && "cube" === tk.source.kind && tk.source.luminance, (Fk.skeleton || Fk.morphTargetManager) && this.warnOnce(`skin:${Fk.name}`, `${Fk.name} has bones or morph targets, which are not supported`), Xk.FOG = Ik.fogEnabled && Fk.applyFog && lk.fogEnabled && 0 !== lk.fogMode, Xk.NONUNIFORMSCALING = Fk.nonUniformScaling;
        const {
          visibility: jk,
          hasVertexAlpha: ek
        } = Fk;
        Xk.ALPHATEST = (0, Sk.S)(Ik, jk, ek), Xk.ALPHAFROMDIFFUSE = (0, Sk.bb)(Ik), Xk.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Ik.transparencyMode, Xk.ALPHABLEND = null === Ik.transparencyMode || (0, Sk.R)(Ik, jk, ek), Xk.PREMULTIPLYALPHA = 7 === Ik.alphaMode || 8 === Ik.alphaMode, Xk.EMISSIVEASILLUMINATION = Ik.useEmissiveAsIllumination, Xk.LINKEMISSIVEWITHDIFFUSE = Ik.linkEmissiveWithDiffuse, Xk.TWOSIDEDLIGHTING = !Ik.backFaceCulling && Ik.twoSidedLighting, Xk.INSTANCES = "none" !== ik, Xk.THIN_INSTANCES = "thin" === ik, Xk.LITE_FRONT_LAYER = Tk >= 1;
        for (const {
            feature: Vk,
            state: zk,
            active: Sk
          }
          of yk) {
          var wk, Hk;
          if (Sk) null === (wk = (Hk = (0, tF.i)(Vk)).prepareDefinesBeforeAttributes) || void 0 === wk || wk.call(Hk, zk, Xk, kk, Fk)
        }
        this.modelPackKind(Ik) && (Xk._needNormals = !0), Xk.NORMAL = Xk._needNormals && Fk.isVerticesDataPresent("normal"), Xk.UV1 = Xk._needUVs && Fk.isVerticesDataPresent("uv"), Xk.UV2 = Xk._needUVs && Fk.isVerticesDataPresent("uv2");
        const Jk = Fk.useVertexColors && Fk.isVerticesDataPresent("color");
        Xk.VERTEXCOLOR = Jk, Xk.VERTEXALPHA = Fk.hasVertexAlpha && Jk, Xk.INSTANCESCOLOR = "none" !== ik && Fk.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Vk,
            state: zk,
            active: Sk
          }
          of yk) {
          var xk, Pk;
          if (Sk) null === (xk = (Pk = (0, tF.i)(Vk)).prepareDefines) || void 0 === xk || xk.call(Pk, zk, Xk, kk, Fk, Ik)
        }
        const Kk = kk.Oe();
        for (const {
            feature: Vk,
            state: zk,
            active: Sk
          }
          of yk) {
          var Qk, sk;
          if (Sk && !1 === (null === (Qk = (sk = (0, tF.i)(Vk)).isReadyForSubMesh) || void 0 === Qk ? void 0 : Qk.call(sk, zk, Xk, kk, Kk))) return !1
        }
        return !0
      }
    }

    function ai(kk, Fk, Ik) {
      return kk.codeVersion !== Fk.version && function(kk, Fk) {
        const Ik = [],
          Xk = [];
        for (const {
            feature: Zk,
            state: jk,
            active: ek
          }
          of Fk.features) {
          var Tk, ik, yk, lk;
          if (ek) qi(null === (Tk = (ik = (0, tF.i)(Zk)).getCustomCode) || void 0 === Tk ? void 0 : Tk.call(ik, jk, "vertex", sk.e.WGSL), Ik), qi(null === (yk = (lk = (0, tF.i)(Zk)).getCustomCode) || void 0 === yk ? void 0 : yk.call(lk, jk, "fragment", sk.e.WGSL), Xk)
        }
        const ak = [];
        for (const {
            feature: Zk,
            state: jk
          }
          of Fk.features) {
          var qk, Lk;
          const kk = null === (qk = (Lk = (0, tF.i)(Zk)).getUniforms) || void 0 === qk ? void 0 : qk.call(Lk, jk, sk.e.WGSL);
          for (const Fk of null !== (tk = null === kk || void 0 === kk ? void 0 : kk.ubo) && void 0 !== tk ? tk : []) {
            var tk;
            Fk.size && Fk.type && ak.push({
              name: Fk.name,
              type: Fk.type,
              arraySize: Fk.arraySize
            })
          }
        }
        kk.vertexCode = Ik, kk.fragmentCode = Xk, kk.pluginUniforms = ak, kk.codeKey = JSON.stringify([Ik, Xk, ak]), kk.codeVersion = Fk.version
      }(kk, Fk), `${Ik}#${kk.codeKey}`
    }

    function qi(kk, Fk) {
      if (kk)
        for (const Ik in kk) kk[Ik] && Fk.push([Ik, kk[Ik]])
    }
    const Li = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class ti {
      constructor(kk) {
        this.warnOnce = kk, this.states = new Map
      }
      renderState(kk, Fk, Ik, Xk) {
        var Tk;
        let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          yk = null !== (Tk = kk.sideOrientation) && void 0 !== Tk ? Tk : Fk.sideOrientation;
        Fk._getWorldMatrixDeterminant() < 0 && (yk = 0 === yk ? 1 : 0);
        const lk = "triangle-list" === ik,
          ak = Ik ? kk.alphaMode : 0,
          qk = (!Ik || (0 === ak || kk.forceDepthWrite)) && !kk.disableDepthWrite,
          Lk = lk && kk.backFaceCulling ? kk.cullBackFaces ? "back" : "front" : "none",
          tk = lk && 0 !== yk ? "ccw" : "cw",
          Zk = kk.depthFunction,
          jk = lk ? kk.zOffset : 0,
          ek = lk ? kk.zOffsetUnits : 0,
          wk = !kk.disableColorWrite;
        return Xk && Xk.alphaMode === ak && Xk.depthWrite === qk && Xk.depthFunction === Zk && Xk.cullMode === Lk && Xk.frontFace === tk && Xk.zOffset === jk && Xk.zOffsetUnits === ek && Xk.colourWrite === wk && Xk.topology === ik ? Xk : this.stateFor(ak, qk, Zk, Lk, tk, jk, ek, wk, ik)
      }
      stateFor(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
        const qk = `${kk}|${Fk}|${Ik}|${Xk}|${Tk}|${ik}|${yk}|${lk}|${ak}`;
        let Lk = this.states.get(qk);
        if (!Lk) {
          var tk;
          const Zk = kk ? dT(kk) : null;
          kk && !Zk && this.warnOnce(`alpha:${kk}`, `alpha mode ${kk} is not supported`), Lk = {
            key: qk,
            alphaMode: kk,
            depthFunction: Ik,
            zOffset: ik,
            zOffsetUnits: yk,
            topology: ak,
            blend: Zk,
            depthWrite: Fk,
            depthCompare: Ik && null !== (tk = Li.get(Ik)) && void 0 !== tk ? tk : null,
            cullMode: Xk,
            frontFace: Tk,
            depthBias: -yk,
            depthBiasSlopeScale: -ik,
            colourWrite: lk
          }, this.states.set(qk, Lk)
        }
        return Lk
      }
    }
    var Zi = Ik(37468);

    function ji(kk) {
      if (!kk.frozen) return -1;
      let Fk = kk.version;
      for (const {
          feature: Ik,
          state: Xk,
          active: Tk
        }
        of kk.features) {
        if (!Tk || !Ik.bind) continue;
        const kk = (0, tF.i)(Ik).uniformsVersion;
        if (!kk) return -1;
        Fk += kk(Xk)
      }
      return Fk
    }
    class ei {
      constructor(kk, Fk, Ik) {
        this.slots = kk, this.data = Fk, this.textures = Ik, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(kk, Fk) {
        this.write4(kk, Fk, 0, 0, 0, 1)
      }
      updateFloat2(kk, Fk, Ik) {
        this.write4(kk, Fk, Ik, 0, 0, 2)
      }
      updateFloat3(kk, Fk, Ik, Xk) {
        this.write4(kk, Fk, Ik, Xk, 0, 3)
      }
      updateFloat4(kk, Fk, Ik, Xk, Tk) {
        this.write4(kk, Fk, Ik, Xk, Tk, 4)
      }
      updateVector3(kk, Fk) {
        this.write4(kk, Fk.x, Fk.y, Fk.z, 0, 3)
      }
      updateVector4(kk, Fk) {
        this.write4(kk, Fk.x, Fk.y, Fk.z, Fk.w, 4)
      }
      updateColor3(kk, Fk) {
        this.write4(kk, Fk.r, Fk.g, Fk.b, 0, 3)
      }
      updateColor4(kk, Fk, Ik) {
        this.write4(kk, Fk.r, Fk.g, Fk.b, Ik, 4)
      }
      updateFloatsFrom(kk, Fk, Ik, Xk) {
        const Tk = this.slots.get(kk);
        if (!Tk) return;
        const ik = this.data,
          yk = Tk.offset;
        for (let lk = 0; lk < Xk; lk++) ik[yk + lk] = Fk[Ik + lk]
      }
      updateFloat3TimesFloats(kk, Fk, Ik, Xk) {
        const Tk = this.slots.get(kk);
        if (!Tk) return;
        const ik = this.data,
          yk = Tk.offset;
        ik[yk] = Fk[Ik] * Xk[0], ik[yk + 1] = Fk[Ik + 1] * Xk[1], ik[yk + 2] = Fk[Ik + 2] * Xk[2]
      }
      I9(kk, Fk) {
        const Ik = this.slots.get(kk);
        Ik && this.data.set(Fk.m, Ik.offset)
      }
      updateMatrixFloats(kk, Fk) {
        const Ik = this.slots.get(kk);
        Ik && this.data.set(Fk, Ik.offset)
      }
      updateFloatArray(kk, Fk) {
        const Ik = this.slots.get(kk);
        if (!Ik) return;
        if (!Ik.arraySize || Ik.stride === Ik.floats) return void this.data.set(Fk, Ik.offset);
        const Xk = Math.min(Fk.length, Ik.floats * Ik.arraySize);
        for (let Tk = 0; Tk < Xk; Tk++) this.data[Ik.offset + Math.floor(Tk / Ik.floats) * Ik.stride + Tk % Ik.floats] = Fk[Tk]
      }
      updateArray(kk, Fk) {
        this.updateFloatArray(kk, Fk)
      }
      setTexture(kk, Fk) {
        this.textures.set(kk, Fk), this.expected.delete(kk)
      }
      expectTexture(kk) {
        this.textures.set(kk, null), this.expected.add(kk)
      }
      write4(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = this.slots.get(kk);
        if (!yk) return;
        const lk = this.data,
          ak = yk.offset;
        lk[ak] = Fk, ik > 1 && (lk[ak + 1] = Ik), ik > 2 && (lk[ak + 2] = Xk), ik > 3 && (lk[ak + 3] = Tk)
      }
    }

    function wi(kk, Fk) {
      const Ik = cX,
        Xk = Zi.j,
        Tk = kk.lights,
        ik = Math.min(kk.lightCount, 8);
      for (let yk = 0; yk < ik; yk++) {
        const kk = Ik.lights + yk * Ik.lightStride,
          ik = yk * Zi.d;
        Fk[kk] = Tk[ik + Xk.vector], Fk[kk + 1] = Tk[ik + Xk.vector + 1], Fk[kk + 2] = Tk[ik + Xk.vector + 2], Fk[kk + 3] = Tk[ik + Xk.kind] === Zi.f.directional ? 1 : 0, Fk[kk + 4] = Tk[ik + Xk.diffuse], Fk[kk + 5] = Tk[ik + Xk.diffuse + 1], Fk[kk + 6] = Tk[ik + Xk.diffuse + 2], Fk[kk + 7] = Tk[ik + Xk.range], Fk[kk + 8] = Tk[ik + Xk.specular], Fk[kk + 9] = Tk[ik + Xk.specular + 1], Fk[kk + 10] = Tk[ik + Xk.specular + 2], Fk[kk + 11] = Tk[ik + Xk.range]
      }
      Fk[Ik.fogInfos] = kk.fogMode, Fk[Ik.fogInfos + 1] = kk.fogStart, Fk[Ik.fogInfos + 2] = kk.fogEnd, Fk[Ik.fogInfos + 3] = kk.fogDensity, Fk[Ik.fogColour] = kk.fogColour[0], Fk[Ik.fogColour + 1] = kk.fogColour[1], Fk[Ik.fogColour + 2] = kk.fogColour[2], Fk[Ik.outputHeight] = kk.renderHeight, Fk[Ik.animTick] = kk.animTick, Fk[Ik.timeMs] = kk.timeMs
    }
    class Hi {
      constructor(kk) {
        this.instancesOf = kk
      }
      refreshModelUniforms(kk, Fk, Ik, Xk) {
        const Tk = ji(Ik);
        if (Tk >= 0 && Tk === Fk.heldVersion && Fk.textures.get("diffuseSampler") === Ik.diffuseTexture && Fk.textures.get("reflectionCubeSampler") === Ik.reflectionTexture && Fk.textures.get("opacitySampler") === Ik.opacityTexture && Fk.textures.get("emissiveSampler") === Ik.emissiveTexture) return !0;
        if (Tk < 0)
          for (const ik of this.instancesOf(Ik)) ik.heldVersion = -1;
        return this.writeModelUniforms(kk, Fk, Ik, Xk), Fk.heldVersion = Tk, !1
      }
      writeModelUniforms(kk, Fk, Ik, Xk) {
        const {
          ubo: Tk
        } = Fk, ik = Ik.diffuseTexture, yk = Ik.diffuseColor;
        Tk.updateFloat4("vDiffuseColor", yk[0], yk[1], yk[2], Ik.alpha), ik && (Tk.updateFloat2("vDiffuseInfos", ik.uvSet, ik.level), Tk.updateMatrixFloats("diffuseMatrix", ik.matrix)), Tk.updateFloat("alphaCutOff", Ik.alphaCutOff), Tk.updateFloatsFrom("vEmissiveColor", Ik.emissiveColor, 0, 3), Tk.updateFloat3TimesFloats("vAmbientColor", Xk.ambientColour, 0, Ik.ambientColor);
        const lk = Ik.specularColor;
        Tk.updateFloat4("vSpecularColor", lk[0], lk[1], lk[2], Ik.specularPower), Tk.setTexture("diffuseSampler", ik);
        const ak = Ik.opacityTexture;
        ak && (Tk.updateFloat2("vOpacityInfos", ak.uvSet, ak.level), Tk.updateMatrixFloats("opacityMatrix", ak.matrix)), Tk.setTexture("opacitySampler", ak);
        const qk = Ik.emissiveTexture;
        qk && (Tk.updateFloat2("vEmissiveInfos", qk.uvSet, qk.level), Tk.updateMatrixFloats("emissiveMatrix", qk.matrix)), Tk.setTexture("emissiveSampler", qk);
        const Lk = Ik.reflectionTexture;
        Lk && Tk.updateMatrixFloats("reflectionMatrix", Lk.matrix), Tk.updateFloat2("vReflectionInfos", Lk ? Lk.level * kk.iblIntensity : 0, Ik.roughness), Tk.setTexture("reflectionCubeSampler", Lk);
        const tk = kk.Oe();
        for (const {
            feature: ek,
            state: wk,
            active: Hk
          }
          of Ik.features) {
          var Zk, jk;
          if (Hk) null === (Zk = (jk = (0, tF.i)(ek)).bind) || void 0 === Zk || Zk.call(jk, wk, Tk, kk, tk)
        }
      }
    }

    function Ji(kk) {
      const Fk = kk.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(Fk) ? "u32" : /i32|^vec\di$/.test(Fk) ? "i32" : "f32"
    }

    function xi(kk, Fk) {
      const Ik = kk.getSize(),
        Xk = Ji(Fk),
        Tk = kk => 4 === Ik ? `${kk}x4` : 2 === Ik ? `${kk}x2` : null;
      if ("f32" === Xk) {
        if (5126 === kk.type) return 1 === Ik ? "float32" : Ik >= 2 && Ik <= 4 ? `float32x${Ik}` : null;
        if (!kk.normalized) return null;
        switch (kk.type) {
          case 5121:
            return Tk("unorm8");
          case 5120:
            return Tk("snorm8");
          case 5123:
            return Tk("unorm16");
          case 5122:
            return Tk("snorm16")
        }
        return null
      }
      const ik = "u32" === Xk ? "uint" : "sint";
      switch (kk.type) {
        case 5125:
        case 5124:
          return 1 === Ik ? `${ik}32` : Ik <= 4 ? `${ik}32x${Ik}` : null;
        case 5121:
        case 5120:
          return Tk(`${ik}8`);
        case 5123:
        case 5122:
          return Tk(`${ik}16`)
      }
      return null
    }

    function Pi(kk) {
      var Fk;
      const Ik = /(8|16|32)(?:x(\d))?$/.exec(kk);
      return Ik ? Number(Ik[1]) / 8 * Number(null !== (Fk = Ik[2]) && void 0 !== Fk ? Fk : 1) : 4
    }
    class Ki {
      constructor(kk, Fk, Ik) {
        this.resources = kk, this.limits = Fk, this.warnOnce = Ik, this.layouts = new Map
      }
      resolveInputs(kk, Fk, Ik, Xk) {
        const Tk = [],
          ik = Ik.program.attributes,
          yk = [];
        for (let Lk = 0; Lk < ik.length; Lk++) {
          const Ik = ik[Lk],
            lk = Ik.optional ? null : this.resources.vertexInput(kk, Ik.name, Xk);
          if (!lk) {
            const kk = Ji(Ik.type),
              Fk = "u32" === kk ? "uint32x4" : "i32" === kk ? "sint32x4" : "float32x4";
            yk.push(null);
            const Xk = Tk.find((kk => null === kk.data));
            Xk ? Xk.attributes.push({
              shaderLocation: Lk,
              offset: 0,
              format: Fk
            }) : Tk.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Lk,
                offset: 0,
                format: Fk
              }]
            });
            continue
          }
          const ak = lk.getBuffer();
          yk.push(lk);
          const qk = xi(lk, Ik.type);
          if (!qk) return this.warnOnce(`format:${Fk}:${Ik.name}`, `${Fk}'s ${Ik.name} (type ${lk.type}, size ${lk.getSize()}) has no WebGPU vertex format`), null;
          const tk = lk.getIsInstanced() ? "instance" : "vertex",
            Zk = lk.byteStride,
            jk = Pi(qk),
            ek = Tk.find((kk => kk.data === ak && kk.stride === Zk && kk.step === tk && lk.byteOffset >= kk.base && lk.byteOffset - kk.base + jk <= Zk));
          ek ? ek.attributes.push({
            shaderLocation: Lk,
            offset: lk.byteOffset - ek.base,
            format: qk
          }) : Tk.push({
            data: ak,
            base: lk.byteOffset,
            stride: Zk,
            step: tk,
            attributes: [{
              shaderLocation: Lk,
              offset: 0,
              format: qk
            }]
          })
        }
        if (Tk.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${Fk}`, `${Fk} needs ${Tk.length} vertex buffers`), null;
        let lk = "";
        for (const Lk of Tk) {
          lk += `${Lk.stride}${"instance"===Lk.step?"i":"v"}`;
          for (const kk of Lk.attributes) lk += `,${kk.shaderLocation}:${kk.offset}:${kk.format}`;
          lk += ";"
        }
        let ak = this.layouts.get(lk);
        ak || (ak = {
          key: lk,
          buffers: Tk.map((kk => ({
            arrayStride: kk.stride,
            stepMode: kk.step,
            attributes: kk.attributes
          }))),
          instanceEnds: Tk.map((kk => {
            let Fk = -1;
            if ("instance" === kk.step)
              for (const Ik of kk.attributes) Fk = Math.max(Fk, Ik.offset + Pi(Ik.format));
            return Fk
          }))
        }, this.layouts.set(lk, ak));
        const qk = Tk.map((kk => kk.base));
        return {
          program: Ik,
          sources: yk,
          layout: ak,
          slotData: Tk.map((kk => kk.data)),
          w6: qk,
          buffers: [],
          offsets: qk,
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

    function Qi(kk, Fk, Ik, Xk) {
      const Tk = Fk.program.program.attributes;
      for (let ik = 0; ik < Tk.length; ik++) {
        if ((Tk[ik].optional ? null : Ik.vertexInput(kk, Tk[ik].name, Xk)) !== Fk.sources[ik]) return !1
      }
      return !0
    }
    const si = 64;
    class Vi {
      constructor(kk, Fk, Ik, Xk) {
        this.device = kk, this.layout = Fk, this.frameBuffer = Ik, this.label = Xk, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(kk) {
        if (kk * si <= this.data.length) return !1;
        let Fk = 2 * this.data.length;
        for (; kk * si > Fk;) Fk *= 2;
        const Ik = new Float32Array(Fk);
        return Ik.set(this.data), this.data = Ik, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Tk = this.data,
          ik = kk * si;
        let yk = Tk[ik + 16] !== Ik;
        for (let lk = 0; lk < 16 && !yk; lk++) yk = Tk[ik + lk] !== Fk[Xk + lk];
        if (yk) {
          for (let kk = 0; kk < 16; kk++) Tk[ik + kk] = Fk[Xk + kk];
          Tk[ik + 16] = Ik
        }
        return yk
      }
      upload(kk, Fk) {
        this.device.queue.writeBuffer(this.buffer, kk * WX, this.data, kk * si, (Fk - kk) * si)
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

    function zi(kk) {
      return kk.gpu[Ek.h.lite] ??= kk.materials.map(((Fk, Ik) => ({
        parts: kk,
        range: Ik,
        owner: kk.owner
      })))
    }

    function Si(kk) {
      var Fk, Ik, Xk;
      return null !== (Fk = null !== (Ik = null === (Xk = kk.parts.materials[kk.range]) || void 0 === Xk ? void 0 : Xk.mirror) && void 0 !== Ik ? Ik : kk.owner.material) && void 0 !== Fk ? Fk : null
    }
    const oi = ["opaque", "alphaTest", "transparent", "text"];

    function vi(kk) {
      for (const Fk of oi) kk[Fk].units.length = 0, kk[Fk].rows.length = 0
    }
    class Ei {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, LF.d)("Lite: ")
      }
      attach(kk, Fk) {
        this.model = kk, this.mirror = Fk
      }
      get worlds() {
        return this.model.nodes.XZ
      }
      get visibility() {
        return this.model.meshes.visibility
      }
      group(kk) {
        return this.groups.get(kk)
      }
      forEachGroup(kk) {
        this.groups.forEach(kk)
      }
      forEachSelected(kk) {
        for (const [Fk, Ik] of this.groups)
          for (const Xk of oi)
            for (const Tk of Ik[Xk].units) kk(Tk.owner, "text" === Xk ? "transparent" : Xk, Fk)
      }
      select(kk, Fk) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(vi);
        const {
          model: Ik,
          mirror: Xk
        } = this;
        if (!Ik || !Xk || !kk) return;
        this.rows.length < Ik.nodes.St && (this.rows = new Int32Array(Ik.nodes.St));
        const Tk = this.rows,
          ik = Ik.meshes;
        for (let lk = 0; lk < ik.looseCount; lk++) {
          const kk = ik.loose[lk],
            Ik = Xk.nodes[kk];
          Ik && !Ik.isBlocked && Ik.isEnabled() && !Ik.ci.hasAZeroComponent && ik.selects(kk, Fk.frustum) && (this.activate(Ik, kk), this.selectedCount++)
        }
        const yk = ik.selectTextPlanes(Fk.frustum, Tk);
        for (let lk = 0; lk < yk; lk++) {
          const Fk = Tk[lk],
            ik = Xk.nodes[Fk],
            yk = Ik.meshes.parts[Fk];
          if (!ik.isVisible || !(ik.visibility > 0) || 0 === (ik.layerMask & kk.layerMask) || !yk) continue;
          const ak = this.groupOf(Ik.meshes.layer[Fk]).text;
          for (const kk of zi(yk)) ak.units.push(kk), ak.rows.push(Fk);
          this.selectedCount++
        }
      }
      instanceBatch(kk) {
        const Fk = this.batchOf(kk);
        return Fk.dispatched || (Fk.dispatched = Fk.renderSelf = !0, Fk.row = this.rowOf(kk)), Fk
      }
      rowOf(kk) {
        return kk.row
      }
      activate(kk, Fk) {
        if (!kk.rG) {
          const Ik = kk;
          if (Ik.rXk) {
            const kk = this.batchOf(Ik);
            kk.dispatched = !0, kk.renderSelf = !0, kk.row = Fk
          }
          return void this.dispatch(Ik, Fk, Fk)
        }
        const Ik = kk,
          Xk = Ik.DXk;
        if (Xk._getWorldMatrixDeterminant() >= 0 !== Ik._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Xk.name}`, `A mirrored InstancedMesh of ${Xk.name} is not drawn yet`);
        const Tk = this.batchOf(Xk);
        Tk.instances.push(Ik), Tk.rows.push(Fk), Tk.dispatched || (Tk.dispatched = !0, this.dispatch(Xk, Fk, this.rowOf(Xk)))
      }
      batchOf(kk) {
        let Fk = this.batches.get(kk);
        return Fk || (Fk = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(kk, Fk)), Fk.frame !== this.frame && (Fk.frame = this.frame, Fk.dispatched = !1, Fk.renderSelf = !1, Fk.instances.length = 0, Fk.rows.length = 0), Fk
      }
      dispatch(kk, Fk, Ik) {
        const {
          layer: Xk,
          parts: Tk
        } = this.model.meshes;
        if (!Tk[Fk]) return;
        const ik = this.groupOf(Xk[Fk]),
          yk = kk;
        for (const lk of zi(Tk[Fk])) {
          const kk = Si(lk);
          if (!kk) continue;
          const Fk = kk.needAlphaBlendingForMesh(yk) ? ik.transparent : kk.needAlphaTestingForMesh(yk) ? ik.alphaTest : ik.opaque;
          Fk.units.push(lk), Fk.rows.push(Ik)
        }
      }
      groupOf(kk) {
        let Fk = this.groups.get(kk);
        return Fk || (Fk = {
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
        }, this.groups.set(kk, Fk)), Fk
      }
    }

    function Oi(kk) {
      kk.opaque.length = 0, kk.transparent.length = 0
    }
    class ni {
      constructor() {
        this.eq = new Map, this.enabled = [], this.groups = new Map, this.Gj = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(kk) {
        if (this.eq.has(kk)) return;
        const Fk = {
          mesh: kk,
          observer: kk.onEffectiveEnabledStateChangedObservable.add((kk => {
            this.Av(Fk, kk)
          })),
          index: -1,
          steady: null
        };
        this.eq.set(kk, Fk), this.Av(Fk, kk.isEnabled())
      }
      remove(kk) {
        const Fk = this.eq.get(kk);
        Fk && (Fk.observer.remove(!0), this.Av(Fk, !1), this.eq.delete(kk))
      }
      base(kk) {
        return this.eq.get(kk)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          eq: this.eq.size
        }
      }
      forEachSelected(kk) {
        for (const [Fk, Ik] of this.groups) {
          for (const Xk of Ik.opaque) kk(Xk.owner, "opaque", Fk);
          for (const Xk of Ik.transparent) kk(Xk.owner, "transparent", Fk)
        }
        for (const Fk of this.Gj) kk(Fk.mesh, "opaque", 0)
      }
      group(kk) {
        return this.groups.get(kk)
      }
      forEachGroup(kk) {
        this.groups.forEach(kk)
      }
      select(kk, Fk) {
        if (this.drawn = 0, this.selected = 0, this.Gj.length = 0, this.groups.forEach(Oi), !kk) return;
        const Ik = this.enabled;
        for (let Xk = 0; Xk < Ik.length; Xk++) {
          const Tk = Ik[Xk];
          if (Tk.steady && Fk(Tk, kk)) {
            this.selected++, this.Gj.push(Tk);
            continue
          }
          const ik = Tk.mesh;
          if (ik.isBlocked || ik.ci.hasAZeroComponent) continue;
          if (!ik.isVisible || ik.visibility <= 0 || 0 === (ik.layerMask & kk.layerMask)) continue;
          if (ik.rXk) {
            this.warned.has(ik.name) || (this.warned.add(ik.name), console.warn(`Lite: thin instance base ${ik.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: yk
          } = ik;
          if (!yk) continue;
          ik.computeWorldMatrix(), this.selected++;
          const lk = this.listsFor(ik.renderingGroupId);
          for (const kk of zi(yk)) {
            const Fk = Si(kk);
            Fk && (Fk.needAlphaBlendingForMesh(ik) ? lk.transparent.push(kk) : lk.opaque.push(kk))
          }
        }
      }
      Av(kk, Fk) {
        if (Fk === kk.index >= 0) return;
        kk.steady = null;
        const Ik = this.enabled;
        if (Fk) kk.index = Ik.length, Ik.push(kk);
        else {
          const Fk = Ik.pop();
          Fk !== kk && (Ik[kk.index] = Fk, Fk.index = kk.index), kk.index = -1
        }
      }
      listsFor(kk) {
        let Fk = this.groups.get(kk);
        return Fk || (Fk = {
          opaque: [],
          transparent: []
        }, this.groups.set(kk, Fk)), Fk
      }
    }
    var Gi = Ik(39584);
    class ui {
      constructor() {
        this.bundle = null, this.stale = !0, this.eq = new Set
      }
    }
    class bi {
      constructor(kk, Fk, Ik) {
        this.device = kk, this.slots = Fk, this.host = Ik, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new ui, this.yG = new ui, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new mT, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = kk => {
          kk.seen !== this.frame && (kk.draw && (kk.draw = null, this.args[5 * kk.slot + 1] = 0, this.argsDirty = !0, this.yG.stale ||= kk.yG), this.frame - kk.seen > 120 && (this.records.delete(kk.unit), this.freeSlots.push(kk.slot), kk.recorded && (this.bundleOf(kk).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(kk) {
          var Fk, Ik;
          let Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Fk = null === (Ik = globalThis.navigator) || void 0 === Ik ? void 0 : Ik.userAgent) && void 0 !== Fk ? Fk : "";
          const Tk = kk.adapterInfo;
          return "intel" === (null === Tk || void 0 === Tk ? void 0 : Tk.vendor) && "gen-12lp" === Tk.architecture && Xk.includes("Windows")
        }(kk), (0, Gi.D)(this.direct)
      }
      Zx() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Gi.D)(this.directThisFrame)
      }
      add(kk, Fk, Ik, Xk) {
        let Tk = this.records.get(kk);
        return Tk || (Tk = this.createRecord(kk), this.records.set(kk, Tk)), Tk.recorded && Ui(Tk, Fk) || (this.bundleOf(Tk).stale = !0), this.place(Tk, Fk, Ik, Xk), Tk
      }
      bundleOf(kk) {
        return kk.yG ? this.yG : this.main
      }
      addAgain(kk, Fk, Ik, Xk) {
        kk.recorded || (this.bundleOf(kk).stale = !0), this.place(kk, Fk, Ik, Xk)
      }
      place(kk, Fk, Ik, Xk) {
        kk.seen = this.frame, kk.yG && null === kk.draw && (this.yG.stale = !0), kk.draw = Fk, this.drawn++, Ik && this.slots.write(kk.slot, Ik, Xk) && (this.slotsFrom = Math.min(this.slotsFrom, kk.slot), this.slotsTo = Math.max(this.slotsTo, kk.slot));
        const Tk = this.args,
          ik = 5 * kk.slot;
        Tk[ik] === Fk.count && Tk[ik + 1] === Fk.instances && Tk[ik + 2] === Fk.first || (Tk[ik] = Fk.count, Tk[ik + 1] = Fk.instances, Tk[ik + 2] = Fk.first, this.argsDirty = !0, this.yG.stale ||= kk.yG)
      }
      Hx() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(kk) {
        for (const Fk of this.records.values()) Fk.draw && Fk.seen === this.frame && !Fk.yG && kk(Fk.draw, this.slots.data, Fk.slot * WX / 4)
      }
      resourceDestroyed(kk) {
        this.main.stale ||= this.main.eq.has(kk), this.yG.stale ||= this.yG.eq.has(kk)
      }
      execute(kk, Fk, Ik) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(kk, Fk, Ik, "direct"), this.drawn;
        const Xk = this.host.sceneGroup(Fk);
        if (!Xk) return this.main.bundle = null, this.yG.bundle = null, this.recordedSceneGroup = null, this.encode(kk, Fk, Ik, "direct"), this.drawn;
        this.recordedTarget === Ik && this.recordedSceneGroup === Xk || (this.recordedTarget = Ik, this.recordedSceneGroup = Xk, this.main.stale = !0, this.yG.stale = !0);
        const Tk = this.main,
          ik = this.yG;
        let yk = !1;
        !Tk.stale && Tk.bundle || (Tk.bundle = this.record(Fk, Ik, Xk, "indirect"), yk = !0);
        const lk = (0, Gi.i)();
        return (ik.stale || this.rangedEpoch !== lk) && (this.rangedEpoch = lk, ik.bundle = this.drawsRanged() ? this.record(Fk, Ik, Xk, "yG") : this.noRangedBundle(), yk = !0), yk && (this.bundles = ik.bundle ? [Tk.bundle, ik.bundle] : [Tk.bundle]), kk.executeBundles(this.bundles), kk.setBindGroup(0, Xk), this.drawn
      }
      record(kk, Fk, Ik, Xk) {
        const Tk = this.device.createRenderBundleEncoder({
          label: "yG" === Xk ? "thin-bases-ranged" : "thin-bases",
          colorFormats: kk._colorFormat ? [kk._colorFormat] : [],
          depthStencilFormat: kk._depthStencilFormat,
          sampleCount: kk._sampleCount
        });
        return Tk.setBindGroup(0, Ik), this.encode(Tk, kk, Fk, Xk), Tk.finish()
      }
      noRangedBundle() {
        for (const kk of this.records.values()) kk.yG && (kk.recorded = !1);
        return this.yG.eq.clear(), this.yG.stale = !1, null
      }
      drawsRanged() {
        for (const kk of this.records.values())
          if (kk.yG && kk.draw) return !0;
        return !1
      }
      encode(kk, Fk, Ik, Xk) {
        const Tk = [];
        for (const ak of this.records.values()) "direct" !== Xk && ak.yG !== ("yG" === Xk) || (ak.recorded = !1, ak.draw && Tk.push(ak));
        Tk.sort(Ci);
        const ik = "direct" === Xk ? null : "yG" === Xk ? this.yG : this.main;
        null === ik || void 0 === ik || ik.eq.clear(), this.binder.reset();
        let yk = !1;
        for (const ak of Tk) {
          var lk;
          const Tk = ak.draw,
            qk = this.host.pipelineFor(Tk, Fk, Ik);
          if (!qk) {
            this.host.pipelineCompiling(Tk, Ik) ? yk = !0 : ik && this.keep(ak, Tk, ik.eq);
            continue
          }
          let Lk;
          if (ak.yG && "indirect" !== Xk) {
            const kk = ak.unit.owner;
            Lk = "direct" === Xk && (0, Gi.s)(kk) || (0, Gi.k)(kk) || void 0
          }
          if (ik && this.keep(ak, Tk, ik.eq), 0 === (null === (lk = Lk) || void 0 === lk ? void 0 : lk.count)) continue;
          this.binder.bind(kk, Tk, qk, this.slots.bindGroup, ak.slot * WX);
          const tk = 5 * ak.slot;
          if ("indirect" === Xk) {
            Tk.indexBuffer ? kk.drawIndexedIndirect(this.argsBuffer, 4 * tk) : kk.drawIndirect(this.argsBuffer, 4 * tk);
            continue
          }
          const Zk = this.args;
          Lk ? Ri(kk, null !== Tk.indexBuffer, Zk, tk, Lk) : Tk.indexBuffer ? kk.drawIndexed(Zk[tk], Zk[tk + 1], Zk[tk + 2], 0, 0) : kk.draw(Zk[tk], Zk[tk + 1], Zk[tk + 2], 0)
        }
        ik && (ik.stale = yk)
      }
      keep(kk, Fk, Ik) {
        kk.recorded = !0, kk.pipelineKey = Fk.pipelineKey, kk.materialGroup = Fk.material.bindGroup, kk.vertexBuffers.length = 0, kk.vertexBuffers.push(...Fk.vertexBuffers), kk.vertexOffsets = Fk.vertexOffsets, kk.indexBuffer = Fk.indexBuffer, kk.indexFormat = Fk.indexFormat;
        for (const Xk of Fk.vertexBuffers) Ik.add(Xk);
        Fk.indexBuffer && Ik.add(Fk.indexBuffer), Ik.add(Fk.material.buffer);
        for (const Xk of Fk.material.bound) Xk && Ik.add(Xk)
      }
      createRecord(kk) {
        let Fk = this.freeSlots.pop();
        return void 0 === Fk && (Fk = this.slotCount++, this.grow()), {
          unit: kk,
          slot: Fk,
          yG: void 0 !== (0, Gi.k)(kk.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.yG.stale = !0), 5 * this.slotCount > this.args.length) {
          const kk = new Uint32Array(2 * this.args.length);
          kk.set(this.args), this.args = kk, this.argsBuffer.destroy(), this.argsBuffer = this.createArgsBuffer(), this.argsDirty = !0, this.main.stale = !0
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

    function Ri(kk, Fk, Ik, Xk, Tk) {
      const ik = Ik[Xk + 1],
        yk = Tk.data;
      for (let lk = 0; lk < Tk.count; lk++) {
        const Tk = Math.min(yk[2 * lk], ik),
          ak = Math.min(yk[2 * lk + 1], ik - Tk);
        0 !== ak && (Fk ? kk.drawIndexed(Ik[Xk], ak, Ik[Xk + 2], 0, Tk) : kk.draw(Ik[Xk], ak, Ik[Xk + 2], Tk))
      }
    }

    function Ui(kk, Fk) {
      if (kk.pipelineKey !== Fk.pipelineKey || kk.materialGroup !== Fk.material.bindGroup || kk.indexBuffer !== Fk.indexBuffer || kk.indexFormat !== Fk.indexFormat || kk.vertexOffsets !== Fk.vertexOffsets || kk.vertexBuffers.length !== Fk.vertexBuffers.length) return !1;
      for (let Ik = 0; Ik < kk.vertexBuffers.length; Ik++)
        if (kk.vertexBuffers[Ik] !== Fk.vertexBuffers[Ik]) return !1;
      return !0
    }

    function Ci(kk, Fk) {
      return rT(kk.draw, Fk.draw)
    }
    const Ni = new WeakMap,
      ci = {
        depth: !1,
        sunShadow: !1
      };

    function Wi(kk, Fk) {
      let Ik = Ni.get(kk);
      Ik || (Ik = new Map, Ni.set(kk, Ik));
      const Xk = `${Fk.depth?"-depth":""}${Fk.sunShadow?"-shadow":""}${Fk.shadowMask?"-mask":""}`;
      let Tk = Ik.get(Xk);
      if (!Tk) {
        const ik = [{
          binding: vF.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: vF.i
          }
        }, {
          binding: vF.v,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        Fk.depth && ik.push({
          binding: vF.m,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Fk.sunShadow && ik.push(... function() {
          const kk = GPUShaderStage.FRAGMENT,
            Fk = vF.q;
          return [{
            binding: Fk.uniform,
            visibility: kk,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: Fk.GZ,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Fk.special,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Fk.volume,
            visibility: kk,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: Fk.sampler,
            visibility: kk,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: Fk.entities,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: Fk.entityGrids,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), Fk.shadowMask && ik.push({
          binding: vF.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), Tk = kk.createBindGroupLayout({
          label: `${Fk.depth?"terrain-":""}shader-pack-inputs${Xk}`,
          entries: ik
        }), Ik.set(Xk, Tk)
      }
      return Tk
    }

    function fi(kk) {
      return Wi(kk, ci)
    }

    function Bi(kk, Fk) {
      if (!Fk) return !1;
      const Ik = (0, EF.f)(kk);
      return !!Ik && UI(Ik, Fk)
    }

    function di(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!LX(Fk)) return [];
      return [Wi(kk, {
        depth: iX(Fk.packVariant),
        sunShadow: Bi(Fk.packVariant, Ik),
        shadowMask: Xk
      })]
    }
    class Yi {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = kk, this.sunShadow = Ik, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(vF.i), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = kk.createBuffer({
          label: "shader-pack-inputs",
          size: vF.i,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Xk = (0, vF.y)(Fk);
        this.textures = kk.createBuffer({
          label: "shader-pack-textures",
          size: Xk.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), kk.queue.writeBuffer(this.textures, 0, Xk), this.bindGroup = kk.createBindGroup({
          label: "shader-pack-inputs",
          layout: fi(kk),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: vF.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: vF.v,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(kk, Fk, Ik) {
        (0, vF.G)(this.data, {
          seconds: kk.seconds(),
          lit: Ik,
          renderOffset: kk.renderOffset(),
          Fkk: kk.Fkk(),
          eyePosition: Fk,
          shadowDirection: kk.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Xk = Fk ? this.sunShadow : null;
        if ((Fk || Ik) && !Xk) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!kk && !Xk) return this.bindGroup;
        (kk && kk !== this.depthView || Ik && Ik !== this.maskView) && (this.depthView = null !== kk && void 0 !== kk ? kk : this.depthView, this.maskView = null !== Ik && void 0 !== Ik ? Ik : this.maskView, this.groups.clear());
        const Tk = (kk ? 1 : 0) | (Xk ? 2 : 0) | (Ik ? 4 : 0);
        let ik = this.groups.get(Tk);
        if (!ik) {
          const Fk = this.entries();
          kk && Fk.push({
            binding: vF.m,
            resource: kk
          }), Xk && Fk.push(...Xk.entries()), Ik && Fk.push({
            binding: vF.s,
            resource: Ik
          }), ik = this.device.createBindGroup({
            label: `${kk||Ik?"terrain-":""}shader-pack-inputs${kk?"-depth":""}${Xk?"-shadow":""}${Ik?"-mask":""}`,
            layout: Wi(this.device, {
              depth: !!kk,
              sunShadow: !!Xk,
              shadowMask: !!Ik
            }),
            entries: Fk
          }), this.groups.set(Tk, ik)
        }
        return ik
      }
      bind(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        kk.setBindGroup(vF.h, this.bindGroupFor(Fk, Ik, Xk))
      }
    }

    function Ai(kk, Fk, Ik) {
      if (kk.gpuVersion === Fk.gpuBuffersVersion) return !0;
      let Xk;
      do {
        if (Xk = Fk.gpuBuffersVersion, !gi(kk, Fk, Ik)) return !1
      } while (Fk.gpuBuffersVersion !== Xk);
      return kk.gpuVersion = Xk, kk.fitInstances = 0, !0
    }

    function gi(kk, Fk, Ik) {
      let Xk = null;
      for (let ik = 0; ik < kk.slotData.length; ik++) {
        var Tk;
        const yk = kk.slotData[ik],
          lk = yk ? Fk.gpuBuffer(yk) : Ik;
        if (!lk) return !1;
        yk && kk.layout.instanceEnds[ik] < 0 && Fk.cover(yk, Number.POSITIVE_INFINITY), kk.buffers[ik] = lk;
        const ak = kk.w6[ik] + (yk ? Fk.gpuOffset(yk) : 0);
        ak !== (null !== (Tk = Xk) && void 0 !== Tk ? Tk : kk.offsets)[ik] && (Xk ??= kk.offsets.slice(), Xk[ik] = ak), kk.ends[ik] = yk ? Fk.gpuEnd(yk) : lk.size
      }
      return Xk && (kk.offsets = Xk), !0
    }

    function mi(kk, Fk, Ik, Xk) {
      if (Fk <= kk.fitInstances) return null;
      const {
        layout: Tk,
        ends: ik,
        offsets: yk,
        slotData: lk,
        w6: ak
      } = kk;
      let qk = !1;
      for (let Lk = 0; Lk < Tk.buffers.length; Lk++) {
        const kk = Tk.instanceEnds[Lk];
        if (kk < 0) continue;
        const Xk = (Fk - 1) * Tk.buffers[Lk].arrayStride + kk;
        if (ik[Lk] - yk[Lk] < Xk) return {
          index: Lk,
          needed: Xk
        };
        const tk = lk[Lk];
        tk && Ik.cover(tk, ak[Lk] + Xk) && (qk = !0)
      }
      return qk && Ai(kk, Ik, Xk), kk.fitInstances = Fk, null
    }
    var ri = Ik(37815),
      Di = Ik(37835);
    const Mi = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      ky = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Fy = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      Iy = `((vertexInputs.aPackedLightLevels >> 16u) | ${qF.d.placed}u)`,
      Xy = "u32(vertexInputs.aShaderPackItem.x)",
      Ty = `${qF.d.lifeform}u`;

    function iy(kk) {
      return "item" === kk.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const yy = "bloxdSpEnchant",
      ly = "floor(finalWorld[3].xyz)";

    function ay(kk, Fk, Ik) {
      return "placed" === Fk.kind && kk.reads[Ik].includes("bloxdFragmentBlockPosition")
    }

    function qy(kk, Fk) {
      let [Ik, Xk] = kk;
      return Ik === Fk.point && Xk === Fk.code
    }

    function Ly(kk, Fk) {
      var Ik, Xk, Tk;
      const ik = null === (Ik = kk.find((kk => kk.texture))) || void 0 === Ik ? void 0 : Ik.texture,
        yk = null === (Xk = kk.find((kk => kk.enchantTier))) || void 0 === Xk ? void 0 : Xk.enchantTier,
        lk = null === (Tk = kk.find((kk => kk.overlay))) || void 0 === Tk ? void 0 : Tk.overlay,
        ak = lk ? Fk.filter((kk => qy(kk, lk))).length : 0;
      return lk && 1 === ak ? {
        texture: ik,
        overlay: lk,
        enchantTier: yk
      } : {
        texture: ik,
        enchantTier: yk
      }
    }

    function ty(kk) {
      if ("item" === kk.kind) {
        return {
          vertexFlags: `(${Xy} & 0xffffu)`,
          varying: "vPackItem",
          value: Xy,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return kk.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: Iy,
        varying: "vPackFlags",
        value: Iy,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Zy(kk) {
      return "lifeform" === kk.kind ? Ty : "0u"
    }

    function jy(kk) {
      return !!kk.BLOXD_PLUGIN_ENCHANTMENT
    }

    function ey(kk, Fk) {
      const {
        enchantTier: Ik
      } = Fk;
      return Ik && jy(Fk.defines) && "lifeform" === Fk.kind && Ky(kk, "enchantTier") ? Ik : null
    }

    function wy(kk, Fk) {
      return jy(Fk.defines) && Ky(kk, "enchantSpeed")
    }

    function Hy(kk) {
      const {
        overlay: Fk,
        defines: Ik
      } = kk;
      if (!Fk || !Ik.DIFFUSE) return null;
      const Xk = Ik.VERTEXCOLOR || Ik.INSTANCESCOLOR && Ik.INSTANCES;
      return `vec4f(${Fk.colour}.rgb * uniforms.vDiffuseInfos.y${Xk?" * fragmentInputs.vColor.rgb":""}, ${Fk.colour}.a)`
    }
    const Jy = "fragmentInputs.vPackTexture";

    function xy(kk) {
      const {
        atlas: Fk,
        defines: Ik,
        texture: Xk
      } = kk;
      if (Fk || !Ik.DIFFUSE) return null;
      if (Xk) return {
        texture: "diffuseSampler",
        ...Xk
      };
      const Tk = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===Ik.DIFFUSEDIRECTUV?"vMainUV1":2===Ik.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== kk.kind) return Tk;
      if (!Ik.BLOXD_PLUGIN_ANIMATED) return {
        ...Tk,
        id: Jy
      };
      const ik = sk.e.WGSL,
        yk = (0, sk.Mb)(ik, "uAnimStatesNum"),
        lk = (0, sk.lb)(ik, (0, ri.c)(ik), yk),
        ak = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${yk})`,
        layers: [lk],
        uv: `vec2f(${ak}.x, ${ak}.y * ${yk} - ${lk})`,
        levelUv: ak,
        id: Jy
      }
    }

    function Py(kk, Fk) {
      return "box" === Fk.kind && !!kk.hooks.surface && null !== xy(Fk)
    }

    function Ky(kk, Fk) {
      return kk.reads.fragment.includes(Fk)
    }

    function Qy(kk) {
      return !!kk.BLOXD_LIGHTING && !kk.BLOXD_UNLIT
    }

    function sy(kk, Fk, Ik, Xk) {
      const Tk = kk.filter((kk => {
        let [Ik, Xk] = kk;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === Ik && Xk === Fk
      }));
      if (1 !== Tk.length) throw new Error(`A model program for shader packs has ${0===Tk.length?"no":"more than one"} ${Xk} code before fog (lite/modelShaderPack.ts)`);
      return kk.map((kk => kk === Tk[0] ? [kk[0], Ik] : kk))
    }

    function Vy(kk, Fk, Ik, Xk) {
      const {
        hooks: Tk
      } = kk, {
        kind: ik,
        defines: yk
      } = Fk, lk = [...Ik];
      var ak;
      Fk.atlas && Tk.surface && lk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", dI("atlasIdxIn")]), "item" === ik && lk.push(["CUSTOM_VERTEX_DEFINITIONS", (0, sk.i)(sk.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Py(kk, Fk) && lk.push(["CUSTOM_VERTEX_DEFINITIONS", (0, sk.i)(sk.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (ak = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${fI}[min(u32(${ak}) - 1u, arrayLength(&${fI}) - 1u)], ${ak} > 0.5);\n`)]);
      const qk = ty(Fk);
      qk && (Tk.surface || Tk.light) && lk.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${qk.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${qk.varying} = ${qk.value};`]);
      let Lk = Xk;
      if (ay(kk, Fk, "fragment") && (lk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${ly});`]), Lk = [...Lk, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Ky(kk, "localPosition") && lk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${iy(Fk)};`]), jy(yk) && Tk.surface) {
        wy(kk, Fk) && lk.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const Ik = ey(kk, Fk);
        Ik && lk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Ik});`]);
        const Xk = (0, sk.vb)(sk.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Lk = [...sy(Lk, (0, Di.f)(sk.e.WGSL), Xk, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Di.b)(yy)]]
      }
      const {
        overlay: tk
      } = Fk;
      tk && Hy(Fk) && Tk.surface && (Lk = Lk.filter((kk => !qy(kk, tk))));
      const Zk = Tk.light ? function(kk) {
        return "placed" === kk.kind ? {
          name: "terrain",
          engine: (0, zF.Q)(sk.e.WGSL),
          pack: (0, zF.hb)(sk.e.WGSL)
        } : kk.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, zF.L)(sk.e.WGSL),
          pack: (0, zF.db)(sk.e.WGSL)
        } : null
      }(Fk) : null;
      if (Zk && (Lk = sy(Lk, Zk.engine, Zk.pack, `${Zk.name} light`), "placed" !== ik && Qy(yk))) {
        const kk = yk.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, sk.Mb)(sk.e.WGSL, "uEntityLightLevels") : (0, sk.Wb)(sk.e.WGSL, "aLightLevels");
        lk.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${zF.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, zF.fb)(sk.e.WGSL, kk)])
      }
      return {
        vertexCode: lk,
        fragmentCode: Lk
      }
    }

    function zy(kk, Fk, Ik, Xk) {
      return bI(kk, Fk, Ik, Xk, "model")
    }
    const Sy = "\t@builtin(position) position: vec4f,\n";

    function oy(kk, Fk) {
      const Ik = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(kk)[0];
      return `${Ik}${Fk}${kk.slice(Ik.length)}`
    }

    function vy(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: Tk
      } = Fk, ik = UI(Fk, Xk), {
        kind: yk,
        defines: lk
      } = Ik, ak = function(kk, Fk) {
        var Ik, Xk, Tk;
        const {
          defines: ik
        } = Fk, yk = ty(Fk), lk = !!ik.FOG, ak = jy(ik), qk = null !== (Ik = null === yk || void 0 === yk ? void 0 : yk.enchantTier) && void 0 !== Ik ? Ik : ey(kk, Fk) ? "fragmentInputs.vPackEnchantTier" : "0u", Lk = "lifeform" === Fk.kind && !ik.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Xk = null === yk || void 0 === yk ? void 0 : yk.vertexFlags) && void 0 !== Xk ? Xk : Zy(Fk),
          vertexLocalPosition: iy(Fk),
          flags: null !== (Tk = null === yk || void 0 === yk ? void 0 : yk.flags) && void 0 !== Tk ? Tk : Zy(Fk),
          normal: "normalW",
          alpha: Lk ? "alpha * baseColor.a" : "alpha",
          alphaOut: Lk ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: lk ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: lk ? "1.0 - fog" : "0.0",
          enchantTier: qk,
          enchantColour: ak ? `${yy}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: wy(kk, Fk) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Ky(kk, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: Hy(Fk)
        }
      }(Fk, Ik), qk = kk.textures.filter((kk => /^textureAtlas\d+$/.test(kk.name))).length, Lk = Ik.atlas && qk > 0 ? {
        count: qk,
        layers: Ik.atlas.layers,
        width: Ik.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: kk.material.slots.has("uAnimDataPerTex") ? (Fk, Ik) => vX(Fk, Ik, function(kk) {
          const Fk = kk.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Dt: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: kk => `uniforms.uAnimDataPerTex[${kk}]${Fk}`
          }
        }(kk)) : null
      } : null, tk = "placed" === yk ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", Zk = null !== Lk && void 0 !== Lk ? Lk : xy(Ik), jk = function(kk, Ik) {
        let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,vF.C)()}${NI(Fk,Ik)}${Xk}${AI(kk)}${GI}${tk}${Fk.code}`
      };
      let {
        vertex: ek,
        fragment: wk
      } = kk;
      const Hk = mI(Tk, ak);
      if (Hk) {
        const kk = ay(Fk, Ik, "vertex") ? `\tbloxdSpCell = ${ly};\n` : "";
        ek = zy(ek, Mi, `${kk}${Hk.slice(1)}${Mi}`, "vertex")
      }
      const Jk = `${cI(Fk,ik,function(kk,Fk){return Fk.TWOSIDEDLIGHTING?kk:`select(-(${kk}), ${kk}, fragmentInputs.frontFacing)`}(ak.normal,lk),ak.flags)}${hI(Tk,Fk.strict,Fk.program,Zk,ak)}`;
      Jk && (wk = zy(wk, ky, `${Jk.slice(1)}${ky}`, "surface")), ik && Fk.sunShadow && !lk.TWOSIDEDLIGHTING && (wk = zy(wk, Sy, `${Sy}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const xk = MI(Tk);
      if (xk) {
        const kk = DI(Tk, Qy(lk), !0, ak);
        wk = zy(wk, Fy, `${kk}${xk.slice(1)}${Fy}`, "light")
      }
      const Pk = Py(Fk, Ik) ? BI : "";
      return {
        ...kk,
        vertex: oy(ek, jk(Lk, !1, Pk)),
        fragment: oy(wk, jk(Zk, ik))
      }
    }
    const Ey = {
      name: "earthSky",
      uniqueId: -1
    };
    class Oy {
      constructor(kk) {
        this.resources = kk, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const kk of this.instances.values()) kk.released = !0, this.resources.destroyBuffer(kk.buffer);
        this.instances.clear()
      }
    }

    function ny(kk) {
      return kk.failed && null !== kk.packGroup
    }
    class Gy {
      constructor(kk, Fk, Ik) {
        this.device = kk, this.resources = Fk, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.T6 = new ni, this.modelMeshes = new Ei, this.thinBundle = void 0, this.binder = new mT, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new Hi((kk => this.modelSlot(kk).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, LF.d)("Lite: "), this.renderStates = new ti(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (kk, Fk) => this.keepSteady(kk, Fk), this.lists = new hT(this.modelMeshes, this.T6, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new li(Fk, this.warnOnce, ((kk, Fk, Ik) => this.programWithModel(kk, Fk, Ik)), ny), this.vertexLayouts = new Ki(Fk, kk.limits, this.warnOnce), this.sceneLayout = IF(kk), this.frameLayout = kk.createBindGroupLayout({
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
        }), this.frameBuffer = kk.createBuffer({
          label: "meshes-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.meshSlots = new Vi(kk, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = kk.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new bi(kk, new Vi(kk, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (kk, Fk, Ik) => this.pipelineFor(kk, Fk, Ik),
          pipelineCompiling: (kk, Fk) => !kk.program.failed && !1 !== this.pipelines.get(`${kk.pipelineKey}|${Fk}`),
          sceneGroup: kk => {
            const Fk = Ik(kk);
            return Fk || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), Fk
          }
        }), Fk.onDestroy = kk => {
          this.thinBundle.resourceDestroyed(kk)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Tk = {
          order: kk,
          isTransparent: Fk,
          _direct: !Fk,
          bind: (kk, Fk) => this.createBinding(Tk, Fk, Ik, Xk)
        };
        return Tk
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(kk, Fk, Ik) {
        var Xk;
        let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = Fk, this.drawDefines.view = Fk, this.thinBundle.Zx(), this.writeFrameUniforms();
        const ik = null !== (Xk = null === Tk || void 0 === Tk ? void 0 : Tk.defineFor("model")) && void 0 !== Xk ? Xk : 0;
        this.drawDefines.modelPackVariant = ik, Tk && 0 !== ik && (this.packInputs ??= new Yi(this.device, Tk.textureLayers(), this.sunShadow), this.packInputs.write(Tk, Fk.eye, Tk.Nw())), this.lists.clear(), this.slotCount = 0;
        const yk = kk.activeCamera;
        this.T6.select(yk, this.keepSteadyBase), this.modelMeshes.select(yk, Fk), Ik && this.pushEarthSky(Ik), this.lists.collect(kk), this.thinBundle.Hx(), this.uploadMeshSlots()
      }
      pushDraws(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const lk = ik.length;
        for (let ak = 0; ak < Ik; ak++) {
          const Ik = Fk[ak];
          let lk = this.retainedDraw(kk, Ik, Xk, Tk);
          if (void 0 === lk && (lk = this.drawFor(kk, Ik, Xk, Tk), this.retain(Ik, lk)), lk) {
            const kk = Ik.owner,
              Fk = yk ? yk[ak] : -1;
            lk.slotOffset = Fk < 0 ? this.writeMeshSlot(kk.getWorldMatrix().m, kk.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[Fk], 16 * Fk), ik.push(lk)
          }
        }
        return ik.length - lk
      }
      bundleDraws(kk, Fk, Ik) {
        let Xk = 0;
        for (const Tk of Fk) {
          let Fk = this.retainedDraw(kk, Tk, Ik, !1);
          const ik = void 0 !== Fk;
          if (void 0 === Fk && (Fk = this.drawFor(kk, Tk, Ik, !1), this.retain(Tk, Fk)), Fk) {
            const kk = Tk.owner,
              Ik = this.thinBundle.add(Tk, Fk, kk.getWorldMatrix().m, kk.visibility);
            ik && this.steadyFrom(Tk, Fk, Ik), Xk++
          }
        }
        return Xk
      }
      steadyFrom(kk, Fk, Ik) {
        const Xk = kk.owner,
          Tk = this.T6.base(Xk),
          ik = Xk.material,
          {
            drawState: yk,
            instance: lk
          } = Fk.inputs.retained;
        if (!Tk || !ik || 1 !== kk.parts.materials.length || Si(kk) !== ik) return;
        const ak = Tk.steady ??= {
          unit: kk,
          material: ik,
          visibility: 1,
          draw: Fk,
          record: Ik,
          drawState: yk,
          instance: lk,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        ak.unit = kk, ak.material = ik, ak.visibility = Xk.visibility, ak.draw = Fk, ak.record = Ik, ak.drawState = yk, ak.instance = lk, ak.bindGroup = lk.bindGroup, ak.gpuVersion = this.resources.gpuBuffersVersion, ak.fitInstances = Fk.inputs.fitInstances, ak.worldFlag = Xk.getWorldMatrix().updateFlag, ak.handedFrame = this.frame
      }
      keepSteady(kk, Fk) {
        const Ik = kk.steady;
        if (Ik.handedFrame !== this.frame - 1 || (this.frame + Ik.phase) % 8 === 0) return !1;
        const Xk = kk.mesh,
          {
            unit: Tk,
            draw: ik,
            instance: yk,
            drawState: lk
          } = Ik,
          ak = Xk.forcedInstanceCount || Xk.M6;
        if (!Xk.isVisible || Xk.rXk || Xk.visibility !== Ik.visibility || 0 === (Xk.layerMask & Fk.layerMask) || Xk.material !== Ik.material || 0 !== Xk.renderingGroupId || Xk.hasVertexAlpha || !this.drawDefines.definesHold(lk, Tk, lk.instancing) || Ik.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(ik.inputs, Tk, lk.instancing, ik.program) || ik.program.failed || yk.released || ak <= 0 || ak > Ik.fitInstances) return !1;
        if (yk.frame !== this.frame && this.bindMaterial(yk, this.modelUniforms.refreshModelUniforms(Xk.mG(), yk, yk.model, this.view)), !yk.bindable || yk.bindGroup !== Ik.bindGroup) return !1;
        const qk = Xk.computeWorldMatrix(),
          Lk = qk.updateFlag !== Ik.worldFlag;
        return Ik.worldFlag = qk.updateFlag, ik.instances = ak, this.thinBundle.addAgain(Ik.record, ik, Lk ? qk.m : null, Ik.visibility), Ik.handedFrame = this.frame, this.T6.drawn++, !0
      }
      retainedDraw(kk, Fk, Ik, Xk) {
        const Tk = this.inputs.get(Fk),
          ik = null === Tk || void 0 === Tk ? void 0 : Tk.retained;
        if (!Tk || !ik) return;
        const {
          drawState: yk,
          program: lk,
          instance: ak,
          instancing: qk
        } = ik, Lk = Fk.owner;
        if (Fi(Lk) !== qk) return;
        const tk = this.instanceCount(Lk, qk);
        if (tk <= 0) return null;
        if (ak.released || lk.failed || yk.program !== lk || !this.drawDefines.programCurrent(yk, Fk, qk, Ik) || !this.inputsStamped(Tk, Fk, qk, lk) || Lk.isUnIndexed !== ik.unIndexed || this.indexKey(Fk) !== ik.indexData) return;
        if (ik.indexBuffer && ik.gpuVersion !== this.resources.gpuBuffersVersion) {
          const kk = this.resources.gpuBuffer(ik.indexData);
          if (!kk) return;
          ik.indexBuffer = kk, ik.gpuVersion = this.resources.gpuBuffersVersion
        }
        let Zk = !1;
        if (ak.frame !== this.frame && (Zk = this.modelUniforms.refreshModelUniforms(kk, ak, ak.model, this.view)), !this.bindMaterial(ak, Zk) || !this.withGpuBuffers(Tk) || !this.instanceBuffersFit(Lk.name, Tk, tk)) return null;
        const jk = this.makeDraw(lk, Tk, this.renderStates.renderState(yk.model, Lk, Xk, Tk.state), ak, tk);
        return this.setRange(jk, Fk, ik.indexBuffer, ik.indexData), jk
      }
      retain(kk, Fk) {
        const Ik = this.drawDefines.drawStates.get(kk);
        if (!Fk || !Ik || Ik.program !== Fk.program) {
          const Fk = this.inputs.get(kk);
          return void(Fk && (Fk.retained = null))
        }
        const Xk = kk.owner,
          Tk = Ik.instancing,
          ik = this.indexKey(kk),
          yk = Fk.inputs.retained;
        yk ? (yk.drawState = Ik, yk.instancing = Tk, yk.program = Fk.program, yk.instance = Fk.material, yk.indexData = ik, yk.unIndexed = Xk.isUnIndexed, yk.indexBuffer = Fk.indexBuffer, yk.gpuVersion = this.resources.gpuBuffersVersion) : Fk.inputs.retained = {
          drawState: Ik,
          instancing: Tk,
          program: Fk.program,
          instance: Fk.material,
          indexData: ik,
          unIndexed: Xk.isUnIndexed,
          indexBuffer: Fk.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(kk, Fk, Ik, Xk) {
        const Tk = Fk.owner,
          ik = Si(Fk);
        if (!ik) return null;
        const yk = ik.getClassName();
        let lk = null;
        if (function(kk) {
            return "LinesMesh" === kk.getClassName()
          }(Tk)) {
          if (! function(kk) {
              return "ShaderMaterial" === kk.getClassName() && "color" === kk.shaderPath
            }(ik)) return this.warnOnce(`lines:${yk}`, `A LinesMesh with a ${yk} is not drawn yet (${ik.name})`), null;
          lk = Tk
        } else if ("StandardMaterial" !== yk && "LiteMaterial" !== yk) return this.warnOnce(`class:${yk}`, `${yk} is not drawn yet (${ik.name})`), null;
        const ak = Fi(Tk),
          qk = this.instanceCount(Tk, ak);
        if (qk <= 0) return null;
        const Lk = lk ? this.lineProgramFor(Tk, Ik, ak) : this.drawDefines.programFor(kk, Fk, ik, Ik, ak);
        if (!Lk || Lk.failed) return null;
        const tk = lk ? null : this.drawDefines.drawStates.get(Fk).model,
          Zk = tk ? this.modelInstance(tk, Lk) : this.materialInstance(Tk, Lk);
        let jk = !1;
        if (Zk.frame !== this.frame && (lk ? xk(Zk.ubo, lk) : jk = this.modelUniforms.refreshModelUniforms(kk, Zk, Zk.model, this.view)), !this.bindMaterial(Zk, jk)) return null;
        const ek = this.meshInputs(Fk, Lk, ak);
        if (!ek || !this.instanceBuffersFit(Tk.name, ek, qk)) return null;
        const wk = this.indexKey(Fk);
        let Hk = null;
        if (wk && !Tk.isUnIndexed && (Hk = this.resources.gpuBuffer(wk), !Hk)) return null;
        const Jk = this.renderStates.renderState(null !== tk && void 0 !== tk ? tk : ik, Tk, Xk, ek.state, lk ? "line-list" : "triangle-list"),
          Pk = this.makeDraw(Lk, ek, Jk, Zk, qk);
        return this.setRange(Pk, Fk, Hk, wk), Pk
      }
      indexKey(kk) {
        const Fk = ii(kk);
        return Fk ? this.resources.modelIndex(Fk) : null
      }
      setRange(kk, Fk, Ik, Xk) {
        Ik && (kk.indexBuffer = Ik, kk.indexFormat = this.resources.indexFormat(Xk));
        const Tk = 4 * Fk.range + (Ik ? 0 : 2);
        kk.unit = Fk, kk.first = Fk.parts.nZ[Tk], kk.count = Fk.parts.nZ[Tk + 1]
      }
      makeDraw(kk, Fk, Ik, Xk, Tk) {
        Fk.state !== Ik && (Fk.state = Ik, Fk.pipelineKey = `${kk.id}|${Fk.layout.key}|${Ik.key}`, Fk.pipeline = null);
        const ik = Fk.draw ??= {
          program: kk,
          inputs: Fk,
          pipelineKey: "",
          layout: Fk.layout,
          state: Ik,
          material: Xk,
          slotOffset: 0,
          vertexBuffers: Fk.buffers,
          vertexOffsets: Fk.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: Tk,
          unit: null
        };
        return ik.program = kk, ik.pipelineKey = Fk.pipelineKey, ik.state = Ik, ik.material = Xk, ik.vertexOffsets = Fk.offsets, ik.indexBuffer = null, ik.instances = Tk, ik
      }
      instanceCount(kk, Fk) {
        switch (Fk) {
          case "thin":
            return kk.forcedInstanceCount || kk.M6;
          case "instanced":
            return this.prepareInstances(kk);
          case "none":
            return 1
        }
      }
      prepareInstances(kk) {
        const Fk = function(kk, Fk) {
          const Ik = Fk._userInstancedBuffersStorage,
            Xk = kk.batchUploads.get(Fk);
          if (Xk) {
            var Tk;
            if (Xk.layout === (null !== (Tk = null === Ik || void 0 === Ik ? void 0 : Ik.interleavedKinds) && void 0 !== Tk ? Tk : null)) return Xk;
            Xk.release()
          }
          return new Ak(kk, Fk, Ik)
        }(this.resources, kk);
        return Fk.frame !== this.frame && Fk.pack(kk, this.modelMeshes.instanceBatch(kk), this.modelMeshes.worlds, this.frame), Fk.count
      }
      programWithModel(kk, Fk, Ik) {
        const Xk = this.modelSlot(kk),
          Tk = ai(Xk, kk, Ik),
          ik = this.drawDefines.modelPackKind(kk),
          yk = ik ? function(kk, Fk, Ik, Xk) {
            const Tk = (0, Sk.B)(kk, Vk.l.name),
              ik = [];
            for (const {
                feature: ak,
                state: qk,
                active: Lk
              }
              of kk.features) {
              var yk, lk;
              const kk = Lk ? null === (yk = (lk = (0, tF.i)(ak)).ke) || void 0 === yk ? void 0 : yk.call(lk, qk) : void 0;
              kk && ik.push(kk)
            }
            return {
              kind: Fk,
              atlas: null !== Tk && void 0 !== Tk && Tk.active ? (0, Vk.e)(Tk.state) : null,
              defines: Ik,
              ...Ly(ik, Xk)
            }
          }(kk, ik, Fk, Xk.fragmentCode) : null;
        if (yk && function(kk) {
            const Fk = kk.defines;
            return (null === kk.atlas || !!Fk.DIFFUSE && 1 === Fk.DIFFUSEDIRECTUV) && !!Fk.NORMAL && !Fk.REFLECTION && !Fk.EMISSIVEASILLUMINATION && !Fk.LINKEMISSIVEWITHDIFFUSE
          }(yk)) {
          const Ik = this.modelPackProgram(kk, Fk, `${Tk}#${ik}#sp${this.drawDefines.modelPackVariant}`, Xk, yk);
          if (Ik && !Ik.failed) return Ik
        }
        const lk = this.programs.get(Tk);
        if (lk || this.unbuildable.has(Tk)) return null !== lk && void 0 !== lk ? lk : null;
        let ak;
        try {
          ak = aT({
            defines: Xi(Fk),
            vertexCode: Xk.vertexCode,
            fragmentCode: Xk.fragmentCode,
            pluginUniforms: Xk.pluginUniforms
          })
        } catch (qk) {
          return this.unbuildable.add(Tk), this.warnOnce(`build:${Tk}`, `could not build a program for ${kk.name}: ${String(qk)}`), null
        }
        return this.createProgram(Tk, ak, "standard")
      }
      modelPackProgram(kk, Fk, Ik, Xk, Tk) {
        const ik = this.programs.get(Ik);
        if (ik || this.unbuildable.has(Ik)) return null !== ik && void 0 !== ik ? ik : null;
        const yk = this.drawDefines.modelPackVariant;
        let lk;
        try {
          const kk = function(kk) {
              return (0, EF.e)(kk, "model")
            }(yk),
            Ik = Vy(kk, Tk, Xk.vertexCode, Xk.fragmentCode);
          lk = vy(aT({
            defines: Xi(Fk),
            ...Ik,
            pluginUniforms: Xk.pluginUniforms
          }), kk, Tk, !!this.sunShadow)
        } catch (Lk) {
          return this.unbuildable.add(Ik), this.warnOnce(`build:${Ik}`, `could not build a shader pack program for ${kk.name}, which draws without the pack: ${String(Lk)}`), null
        }
        const ak = Bi(yk, !!this.sunShadow),
          qk = {
            group: this.packInputs.bindGroupFor(null, ak),
            layout: Wi(this.device, {
              depth: !1,
              sunShadow: ak
            })
          };
        return this.createProgram(Ik, lk, function(kk) {
          return `standard-sp${kk}`
        }(yk), qk)
      }
      lineProgramFor(kk, Fk, Ik) {
        const Xk = Jk(kk, Ik, Fk, this.view);
        let Tk = this.linePrograms.get(Xk);
        var ik;
        return Tk || (Tk = this.createProgram(`lines#${Xk}`, (ik = function(kk) {
          const Fk = new Map;
          for (let Ik = 0; Ik < qk.length; Ik++) kk & 1 << Ik && Fk.set(qk[Ik], !0);
          return Fk
        }(Xk), ZT({
          defines: ik,
          vertex: LT,
          fragment: tT,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Xk, Tk)), Tk
      }
      createProgram(kk, Fk, Ik) {
        var Xk;
        let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const ik = this.nextProgramId++,
          yk = `${Ik}-${ik}`,
          lk = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          ak = [{
            binding: 0,
            visibility: lk,
            buffer: {
              type: "uniform"
            }
          }];
        for (const tk of Fk.textures) ak.push({
          binding: tk.binding,
          visibility: lk,
          texture: {
            viewDimension: tk.dimension
          }
        }), ak.push({
          binding: tk.samplerBinding,
          visibility: lk,
          sampler: {}
        });
        const qk = this.device.createBindGroupLayout({
            label: yk,
            entries: ak
          }),
          Lk = {
            key: kk,
            id: ik,
            kind: Ik,
            program: Fk,
            vertex: this.device.createShaderModule({
              label: `${yk}-vertex`,
              code: Fk.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${yk}-fragment`,
              code: Fk.fragment
            }),
            materialLayout: qk,
            pipelineLayout: this.device.createPipelineLayout({
              label: yk,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, qk, ...Tk ? [Tk.layout] : []]
            }),
            packGroup: null !== (Xk = null === Tk || void 0 === Tk ? void 0 : Tk.group) && void 0 !== Xk ? Xk : null,
            failed: !1
          };
        return this.programs.set(kk, Lk), Lk
      }
      writeFrameUniforms() {
        const kk = this.frameUniforms;
        wi(this.view, kk), this.device.queue.writeBuffer(this.frameBuffer, 0, kk)
      }
      materialInstance(kk, Fk) {
        let Ik = this.materials.get(kk);
        if (!Ik) {
          const Fk = new Map;
          this.materials.set(kk, Fk), kk.hG.addOnce((() => {
            for (const kk of Fk.values()) kk.released = !0, this.resources.destroyBuffer(kk.buffer);
            this.materials.delete(kk)
          })), Ik = Fk
        }
        let Xk = Ik.get(Fk.key);
        return Xk || (Xk = this.newMaterialInstance(kk, null, Fk), Ik.set(Fk.key, Xk)), Xk
      }
      modelInstance(kk, Fk) {
        const Ik = this.modelSlot(kk);
        let Xk = Ik.instances.get(Fk.key);
        return Xk || (Xk = this.newMaterialInstance(kk, kk, Fk), Ik.instances.set(Fk.key, Xk)), Xk
      }
      modelSlot(kk) {
        let Fk = kk.gpu[Ek.h.lite];
        return Fk || (Fk = new Oy(this.resources), kk.gpu[Ek.h.lite] = Fk), Fk
      }
      newMaterialInstance(kk, Fk, Ik) {
        const Xk = Ik.program.material.floats,
          Tk = new Float32Array(Xk),
          ik = new Map;
        return {
          owner: kk,
          model: Fk,
          program: Ik,
          data: Tk,
          uploaded: new Float32Array(Xk).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${kk.name}-uniforms`,
            size: Math.max(16, 4 * Xk),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: ik,
          ubo: new ei(Ik.program.material.slots, Tk, ik),
          bindGroup: null,
          bound: new Array(2 * Ik.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(kk) {
        var Fk;
        const Ik = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: JT + xT,
            fragment: JT + PT,
            attributes: [],
            material: HT,
            textures: []
          }, "earthSky"),
          Xk = this.earthSkyUniforms ??= this.newMaterialInstance(Ey, null, Ik);
        this.earthSkyFrom !== kk && (this.earthSkyFrom = kk, Xk.data.fill(0)), vT(Xk.ubo, kk, this.view);
        const Tk = this.vertexInputs(Ik, Ey, "earthSky", Ik, null);
        if (Ik.failed || !Tk || !this.bindMaterial(Xk, !1)) return;
        const ik = null !== (Fk = Tk.state) && void 0 !== Fk ? Fk : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          yk = this.makeDraw(Ik, Tk, ik, Xk, 1);
        yk.count = jT.length;
        const lk = ET(kk, this.view);
        yk.slotOffset = this.writeMeshSlot(lk, 1), this.lists.skyDraws.push(yk)
      }
      uploadIfChanged(kk) {
        const {
          data: Fk,
          uploaded: Ik
        } = kk;
        for (let Xk = 0; Xk < Fk.length; Xk++)
          if (Fk[Xk] !== Ik[Xk]) return Ik.set(Fk), void this.device.queue.writeBuffer(kk.buffer, 0, Fk)
      }
      bindMaterial(kk, Fk) {
        return kk.frame !== this.frame && (kk.frame = this.frame, Fk || this.uploadIfChanged(kk), kk.bindable = this.bindTextures(kk)), kk.bindable
      }
      bindTextures(kk) {
        const {
          program: Fk,
          bound: Ik
        } = kk, Xk = Fk.program.textures;
        let Tk = !kk.bindGroup,
          ik = !0;
        for (let yk = 0; yk < Xk.length; yk++) {
          const Fk = kk.textures.get(Xk[yk].name),
            lk = Fk ? this.resources.boundTexture(Fk) : null;
          lk ? Ik[2 * yk] === lk.view && Ik[2 * yk + 1] === lk.sampler || (Ik[2 * yk] = lk.view, Ik[2 * yk + 1] = lk.sampler, Tk = !0) : (Fk || kk.ubo.expected.has(Xk[yk].name) || this.warnOnce(`texture:${kk.owner.name}:${Xk[yk].name}`, `${kk.owner.name} has no ${Xk[yk].name}`), ik = !1)
        }
        if (!ik) return Tk && (kk.bindGroup = null), !1;
        if (Tk) {
          const Tk = [{
            binding: 0,
            resource: {
              buffer: kk.buffer
            }
          }];
          for (let kk = 0; kk < Xk.length; kk++) Tk.push({
            binding: Xk[kk].binding,
            resource: Ik[2 * kk]
          }), Tk.push({
            binding: Xk[kk].samplerBinding,
            resource: Ik[2 * kk + 1]
          });
          kk.bindGroup = this.device.createBindGroup({
            label: `${kk.owner.name}-material`,
            layout: Fk.materialLayout,
            entries: Tk
          })
        }
        return !0
      }
      writeMeshSlot(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, kk, Fk, Ik), this.slotCount++ * WX
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(kk, Fk, Ik, Xk, Tk) {
        let ik = this.inputs.get(kk);
        if (!ik || ik.program !== Xk || !Qi(Fk, ik, this.resources, Tk)) {
          var yk;
          if (ik = null !== (yk = this.vertexLayouts.resolveInputs(Fk, Ik, Xk, Tk)) && void 0 !== yk ? yk : void 0, !ik) return null;
          this.inputs.set(kk, ik)
        }
        return this.withGpuBuffers(ik)
      }
      meshInputs(kk, Fk, Ik) {
        const Xk = this.inputs.get(kk);
        if (Xk && this.inputsStamped(Xk, kk, Ik, Fk)) return this.withGpuBuffers(Xk);
        const Tk = kk.owner,
          ik = ii(kk),
          yk = this.vertexInputs(kk, Tk, Tk.name, Fk, ik);
        return yk && (yk.geometry = yi(kk), yk.instanceLayout = this.drawDefines.instanceLayout(Tk, Ik)), yk
      }
      inputsStamped(kk, Fk, Ik, Xk) {
        return function(kk, Fk, Ik, Xk) {
          return kk.program === Ik && kk.geometry === yi(Fk) && kk.instanceLayout === Xk
        }(kk, Fk, Xk, this.drawDefines.instanceLayout(Fk.owner, Ik))
      }
      withGpuBuffers(kk) {
        return Ai(kk, this.resources, this.zeroBuffer) ? kk : null
      }
      instanceBuffersFit(kk, Fk, Ik) {
        const Xk = mi(Fk, Ik, this.resources, this.zeroBuffer);
        if (Xk) {
          const Tk = Fk.ends[Xk.index] - Fk.offsets[Xk.index] + Fk.w6[Xk.index];
          return this.warnOnce(`overrun:${kk}`, `${kk} draws ${Ik} instances from a ${Tk}-byte buffer (${Xk.needed} needed)`), !1
        }
        return !0
      }
      createBinding(kk, Fk, Ik, Xk) {
        const Tk = `${Fk._colorFormat}|${Fk._depthStencilFormat}|${Fk._depthCompare}|${Fk._sampleCount}`,
          ik = lF(this.device, Fk);
        if (kk === this.skyLastRenderable) {
          let Ik = null;
          return {
            renderable: kk,
            pipeline: ik,
            draw: kk => Ik ? this.drawSky(kk, Fk, Tk, Ik) : 0,
            update: kk => {
              Ik = kk
            }
          }
        }
        return {
          renderable: kk,
          pipeline: ik,
          draw: kk => (Xk ? Xk.execute(kk, Fk, Tk) : 0) + this.drawList(kk, Fk, Tk, Ik)
        }
      }
      drawSky(kk, Fk, Ik, Xk) {
        const Tk = this.lists.skyDraws,
          ik = Tk.length > 0;
        if (ik) {
          var yk;
          const Ik = (null !== (yk = Fk._depthCompare) && void 0 !== yk ? yk : XF).startsWith("greater") ? 0 : 1;
          kk.setViewport(0, 0, Xk.targetWidth, Xk.targetHeight, Ik, Ik)
        }
        const lk = this.drawList(kk, Fk, Ik, Tk);
        return ik && kk.setViewport(0, 0, Xk.targetWidth, Xk.targetHeight, 0, 1), lk
      }
      drawList(kk, Fk, Ik, Xk) {
        let Tk = 0;
        const ik = this.binder;
        ik.reset();
        for (const yk of Xk) {
          const Xk = this.pipelineFor(yk, Fk, Ik);
          Xk && (ik.bind(kk, yk, Xk, this.meshSlots.bindGroup, yk.slotOffset), yk.indexBuffer ? kk.drawIndexed(yk.count, yk.instances, yk.first, 0, 0) : kk.draw(yk.count, yk.instances, yk.first, 0), Tk++)
        }
        return Tk
      }
      pipelineFor(kk, Fk, Ik) {
        var Xk, Tk;
        if (kk.program.failed) return null;
        const ik = kk.inputs;
        if (ik.pipeline && ik.pipelineTarget === Ik) return ik.pipeline;
        const yk = `${kk.pipelineKey}|${Ik}`,
          lk = this.pipelines.get(yk);
        if (void 0 !== lk) return lk && (ik.pipeline = lk, ik.pipelineTarget = Ik), lk || null;
        this.pipelines.set(yk, null);
        const {
          program: ak,
          layout: qk,
          state: Lk
        } = kk, tk = {
          label: `standard-${ak.id}`,
          layout: ak.pipelineLayout,
          vertex: {
            module: ak.vertex,
            entryPoint: "main",
            buffers: qk.buffers
          },
          fragment: Dk({
            module: ak.fragment,
            entryPoint: "main"
          }, Fk, Lk.blend, Lk.colourWrite),
          depthStencil: Fk._depthStencilFormat ? {
            format: Fk._depthStencilFormat,
            depthCompare: null !== (Xk = null !== (Tk = Lk.depthCompare) && void 0 !== Tk ? Tk : Fk._depthCompare) && void 0 !== Xk ? Xk : XF,
            depthWriteEnabled: Lk.depthWrite,
            depthBias: Lk.depthBias,
            depthBiasSlopeScale: Lk.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: Fk._sampleCount
          },
          primitive: {
            topology: Lk.topology,
            frontFace: Lk.frontFace,
            cullMode: Lk.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(tk).then((kk => {
          this.compiling--, this.pipelines.set(yk, kk)
        }), (kk => {
          this.compiling--, this.reportFailure(ak, yk, kk)
        })), null
      }
      forEachSunShadowCaster(kk) {
        const Fk = this.caster,
          Ik = (Ik, Xk, Tk) => {
            const ik = Ik.unit && function(kk) {
              const Fk = kk.material.model;
              return null !== Fk && (Fk.lifeform || Fk.item) && Fk.castsSunShadow && "triangle-list" === kk.state.topology
            }(Ik) ? ii(Ik.unit) : null;
            if (!ik) return;
            const yk = Ik.unit.owner;
            switch (Fk.geometry = ik, Fk.skip = yk.noSunShadowVertices, Fk.indexed = null !== Ik.indexBuffer, Fk.first = Ik.first, Fk.count = Ik.count, Fk.XZ = Xk, Fk.worldAt = Tk, Fk.instances = null, Fk.instanceCount = 1, Fk.thin = !1, Fi(yk)) {
              case "thin": {
                const kk = yk._thinInstanceDataStorage.matrixData;
                if (!kk) return;
                Fk.instances = kk, Fk.instanceCount = Math.min(Ik.instances, kk.length / 16), Fk.thin = !0;
                break
              }
              case "instanced": {
                const kk = this.resources.batchUploads.get(yk);
                if (!kk || kk.frame !== this.frame || !this.writeBatchCasters(kk)) return;
                break
              }
            }
            kk(Fk)
          };
        for (const Xk of this.lists.opaqueDraws) Ik(Xk, this.meshSlots.data, Xk.slotOffset / 4);
        this.thinBundle.forEachDrawn(Ik)
      }
      writeBatchCasters(kk) {
        const {
          caster: Fk
        } = this, Ik = kk.packedMatrices, Xk = kk.count;
        Fk.instances = Ik, Fk.instanceCount = Xk;
        let Tk = -1;
        for (let ik = 0; ik < Xk; ik++) {
          const Fk = py(kk.packedRowMesh(ik));
          Fk && Tk < 0 ? (this.casterWorlds.length < 16 * Xk && (this.casterWorlds = new Float32Array(Ik.length)), this.casterWorlds.set(Ik.subarray(0, 16 * ik)), Tk = ik) : !Fk && Tk >= 0 && (this.casterWorlds.set(Ik.subarray(16 * ik, 16 * ik + 16), 16 * Tk), Tk++)
        }
        return Tk >= 0 && (Fk.instances = this.casterWorlds, Fk.instanceCount = Tk), Fk.instanceCount > 0
      }
      async reportFailure(kk, Fk, Ik) {
        const Xk = [];
        let Tk = !0;
        for (const [ik, yk] of [
            ["vertex", kk.vertex],
            ["fragment", kk.fragment]
          ]) {
          const kk = await yk.getCompilationInfo();
          for (const Fk of kk.messages) Tk &&= "error" !== Fk.type, Xk.push(`${ik}:${Fk.lineNum}:${Fk.linePos} ${Fk.type}: ${Fk.message}`)
        }
        if (Tk && !kk.packGroup) return this.pipelines.set(Fk, !1), console.error(`Lite: pipeline ${Fk} failed`, Ik), void gT("mesh", kk.kind, Ik);
        kk.failed || (kk.failed = !0, console.error(`Lite: program ${kk.id} failed`, Ik, Xk.join("\n"), {
          program: kk.program,
          key: kk.key
        }), gT("mesh", kk.kind, Ik, Tk ? null : Xk[0]))
      }
    }

    function py(kk) {
      var Fk, Ik;
      const Xk = null === (Fk = kk.JR) || void 0 === Fk || null === (Ik = Fk.aShaderPackItem) || void 0 === Ik ? void 0 : Ik.x;
      return void 0 !== Xk && 0 !== (Xk & qF.i)
    }
    var uy = Ik(41688),
      by = Ik(41690),
      Ry = Ik(41699),
      Uy = Ik(41643);
    const Cy = [0, 3, 1, 4, 2, 5];

    function Ny(kk, Fk, Ik, Xk, Tk) {
      const ik = Ik[0].width;
      try {
        return Tk ? function(kk, Fk, Ik) {
          const Xk = (0, Uy.c)(kk, Ik, Ik, 6);
          for (let Tk = 0; Tk < 6; Tk++)(0, Uy.f)(kk, Xk, Tk, Fk[Cy[Tk]], {
            invertY: !1
          });
          return Xk.texture
        }(kk, Ik, ik) : function(kk, Fk, Ik, Xk) {
          const Tk = kk.createTexture({
            label: "sink-cube",
            size: {
              width: Ik,
              height: Ik,
              depthOrArrayLayers: 6
            },
            format: Xk,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let ik = 0; ik < 6; ik++) kk.queue.copyExternalImageToTexture({
            source: Fk[Cy[ik]]
          }, {
            texture: Tk,
            origin: {
              x: 0,
              y: 0,
              z: ik
            }
          }, {
            width: Ik,
            height: Ik
          });
          return Tk
        }(Fk, Ik, ik, 1 === Xk ? "r8unorm" : "rgba8unorm")
      } finally {
        cy(Ik)
      }
    }

    function cy(kk) {
      for (const Fk of null !== kk && void 0 !== kk ? kk : []) null === Fk || void 0 === Fk || Fk.close()
    }
    async function Wy(kk) {
      const Fk = [],
        Ik = [];
      if (await Promise.all(kk.map(((kk, Xk) => (Fk[Xk] = null, kk.then((kk => {
          Fk[Xk] = kk
        }), (kk => {
          Ik.push(kk)
        })))))), Ik.length > 0) throw cy(Fk), Ik[0];
      return Fk
    }
    class fy {
      constructor(kk) {
        this.St = kk, this.starts = [], this.lengths = [], this.used = 0, kk > 0 && (this.starts.push(0), this.lengths.push(kk))
      }
      allocate(kk) {
        const {
          starts: Fk,
          lengths: Ik
        } = this;
        for (let Xk = 0; Xk < Fk.length; Xk++) {
          if (Ik[Xk] < kk) continue;
          const Tk = Fk[Xk];
          return Ik[Xk] === kk ? (Fk.splice(Xk, 1), Ik.splice(Xk, 1)) : (Fk[Xk] += kk, Ik[Xk] -= kk), this.used += kk, Tk
        }
        return -1
      }
      free(kk, Fk) {
        this.used -= Fk;
        const Ik = Math.min(kk + Fk, this.St);
        Ik > kk && this.release(kk, Ik - kk)
      }
      grow(kk) {
        const Fk = this.St;
        this.St = kk, this.release(Fk, kk - Fk)
      }
      truncate(kk) {
        const {
          starts: Fk,
          lengths: Ik
        } = this;
        for (let Xk = Fk.length - 1; Xk >= 0 && Fk[Xk] + Ik[Xk] > kk; Xk--) Fk[Xk] >= kk ? (Fk.splice(Xk, 1), Ik.splice(Xk, 1)) : Ik[Xk] = kk - Fk[Xk];
        this.St = kk
      }
      release(kk, Fk) {
        const {
          starts: Ik,
          lengths: Xk
        } = this;
        let Tk = 0,
          ik = Ik.length;
        for (; Tk < ik;) {
          const Fk = Tk + ik >> 1;
          Ik[Fk] < kk ? Tk = Fk + 1 : ik = Fk
        }
        const yk = Tk,
          lk = yk > 0 && Ik[yk - 1] + Xk[yk - 1] === kk,
          ak = yk < Ik.length && kk + Fk === Ik[yk];
        lk && ak ? (Xk[yk - 1] += Fk + Xk[yk], Ik.splice(yk, 1), Xk.splice(yk, 1)) : lk ? Xk[yk - 1] += Fk : ak ? (Ik[yk] = kk, Xk[yk] += Fk) : (Ik.splice(yk, 0, kk), Xk.splice(yk, 0, Fk))
      }
    }
    const By = 256;
    class dy {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = kk, this.onReplaced = Fk, this.mergeGap = Ik, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.nZ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const Tk = Math.max(By, Math.ceil(Xk / By) * By);
        this.bytes = new Uint8Array(Tk), this.words = new Uint32Array(this.bytes.buffer), this.nZ = new fy(Tk / By)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(kk) {
        return Math.max(1, Math.ceil(kk / By)) * By
      }
      allocate(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk;
        const Xk = dy.slotBytes(kk),
          Tk = Xk / By;
        let ik = this.nZ.allocate(Tk);
        ik < 0 && (this.grow(this.nZ.St + Tk), ik = this.nZ.allocate(Tk));
        const yk = ik * By;
        return this.growTo(yk + Math.max(Ik, Xk)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, yk, yk + Xk), Fk && this.bytes.set(new Uint8Array(Fk.buffer, Fk.byteOffset, Math.min(Fk.byteLength, Xk)), yk), this.markDirty(yk, yk + Xk), yk
      }
      growTo(kk) {
        const Fk = Math.ceil(kk / By);
        Fk > this.nZ.St && this.grow(Fk)
      }
      free(kk, Fk) {
        this.freed.push(kk, Fk)
      }
      write(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Xk <= 0) return;
        Xk <= 1024 && 0 === (3 & (kk | Ik | Xk)) ? this.copyWords(kk >> 2, Fk.buffer, Ik >> 2, Xk >> 2) : this.bytes.set(new Uint8Array(Fk.buffer, Ik, Xk), kk);
        let ik = kk + Xk;
        if (Tk) {
          const Fk = kk + 4 * Math.ceil(Xk / 4);
          this.bytes.fill(0, ik, Fk), ik = Fk
        }
        this.markDirty(kk, ik)
      }
      copyWords(kk, Fk, Ik, Xk) {
        let Tk = this.sourceWords.get(Fk);
        Tk || (Tk = new Uint32Array(Fk, 0, Fk.byteLength >> 2), this.sourceWords.set(Fk, Tk));
        const ik = this.words;
        for (let yk = 0; yk < Xk; yk++) ik[kk + yk] = Tk[Ik + yk]
      }
      move(kk, Fk, Ik) {
        this.bytes.copyWithin(Fk, kk, kk + Ik), this.markDirty(Fk, Fk + Ik)
      }
      flush() {
        for (const Fk of this.retired) this.onReplaced(Fk), Fk.destroy();
        this.retired.length = 0;
        const kk = this.dirtyStarts.length;
        if (kk > 0) {
          const {
            dirtyStarts: Fk,
            dirtyEnds: Ik,
            order: Xk
          } = this;
          Xk.length = kk;
          for (let lk = 0; lk < kk; lk++) Xk[lk] = lk;
          kk > 1 && Xk.sort(((kk, Ik) => Fk[kk] - Fk[Ik]));
          const Tk = this.mergeGap;
          let ik = Fk[Xk[0]],
            yk = Ik[Xk[0]];
          for (let lk = 1; lk < kk; lk++) {
            const kk = Xk[lk];
            Fk[kk] - yk <= Tk ? yk = Math.max(yk, Ik[kk]) : (this.send(ik, yk), ik = Fk[kk], yk = Ik[kk])
          }
          this.send(ik, yk), Fk.length = 0, Ik.length = 0
        }
        this.holding = !1
      }
      Hx() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const kk = this.freed;
        for (let Fk = 0; Fk < kk.length; Fk += 2) this.nZ.free(kk[Fk] / By, kk[Fk + 1] / By);
        kk.length = 0
      }
      send(kk, Fk) {
        this.device.queue.writeBuffer(this.gpu, kk, this.bytes.buffer, kk, Fk - kk);
        for (const Ik of this.replaced) {
          const Xk = Math.min(Fk, Ik.size);
          Xk > kk && this.device.queue.writeBuffer(Ik, kk, this.bytes.buffer, kk, Xk - kk)
        }
      }
      markDirty(kk, Fk) {
        kk &= -4, Fk = Fk + 3 & -4, this.holding ? (this.dirtyStarts.push(kk), this.dirtyEnds.push(Fk)) : this.send(kk, Fk)
      }
      grow(kk) {
        const Fk = this.nZ.St,
          Ik = Math.max(2 * Fk, kk),
          Xk = new Uint8Array(Ik * By);
        Xk.set(this.bytes);
        const Tk = this.gpu;
        this.gpu = this.createGpu(Xk.byteLength), this.bytes = Xk, this.words = new Uint32Array(Xk.buffer), this.nZ.grow(Ik), Tk && (this.replaced.push(Tk), this.onReplaced(Tk)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Fk * By)
      }
      createGpu(kk) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: kk,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Yy(kk) {
      return Array.isArray(kk) ? new Float32Array(kk) : kk
    }

    function Ay(kk, Fk, Ik, Xk, Tk) {
      const ik = nT(Tk),
        yk = Math.min(Tk, Xk.byteLength);
      if (ik === yk && Xk.byteOffset % 4 === 0) return void kk.queue.writeBuffer(Fk, Ik, Xk.buffer, Xk.byteOffset, ik);
      const lk = new Uint8Array(ik);
      lk.set(new Uint8Array(Xk.buffer, Xk.byteOffset, yk)), kk.queue.writeBuffer(Fk, Ik, lk)
    }

    function gy(kk, Fk, Ik) {
      const Xk = "linear",
        Tk = "nearest";
      let ik = Tk,
        yk = Tk,
        lk = "nearest",
        ak = !Fk;
      switch (kk) {
        case 11:
          ik = Xk, yk = Xk;
          break;
        case 3:
          ik = Xk, yk = Xk, lk = Fk ? "linear" : "nearest";
          break;
        case 8:
          lk = Fk ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          yk = Xk;
          break;
        case 6:
          yk = Xk, lk = Fk ? "linear" : "nearest";
          break;
        case 7:
          yk = Xk, ak = !0;
          break;
        case 9:
          ik = Xk;
          break;
        case 10:
          ik = Xk, lk = Fk ? "linear" : "nearest";
          break;
        case 2:
          ik = Xk, yk = Xk, Ik > 1 ? (lk = "linear", ak = !1) : ak = !0;
          break;
        case 12:
          ik = Xk, ak = !0;
          break;
        default:
          ak = !0
      }
      return Ik > 1 && !ak ? {
        magFilter: Xk,
        minFilter: Xk,
        mipmapFilter: "linear",
        maxAnisotropy: Ik
      } : {
        magFilter: ik,
        minFilter: yk,
        mipmapFilter: lk,
        ...ak ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function my(kk) {
      return 0 === kk ? "clamp-to-edge" : 2 === kk ? "mirror-repeat" : "repeat"
    }
    class hy {
      constructor(kk, Fk) {
        let {
          vertexArena: Ik = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = kk, this.device = Fk, this.buffers = new WeakMap, this.U_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = Ik ? new dy(Fk, (kk => {
          var Fk;
          null === (Fk = this.onDestroy) || void 0 === Fk || Fk.call(this, kk), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var kk;
        null === (kk = this.arena) || void 0 === kk || kk.flush()
      }
      endUploadFrame() {
        var kk;
        null === (kk = this.arena) || void 0 === kk || kk.Hx()
      }
      vertexBufferCreated(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ik ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(kk);
        const Tk = Yy(Fk);
        kk.St = Tk.byteLength, this.buffers.set(kk, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: Ik && null !== this.arena,
          pending: Tk,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Xk
        })
      }
      vertexBufferUpdated(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        const Tk = this.buffers.get(kk);
        if (!Tk) return;
        const ik = Yy(Fk),
          yk = void 0 === Xk ? ik.byteLength : Math.min(Xk, ik.byteLength);
        this.update(Tk, ik, Ik, yk)
      }
      vertexBufferFloatsUpdated(kk, Fk, Ik, Xk) {
        const Tk = this.buffers.get(kk);
        if (!Tk) return;
        const ik = Ik * Float32Array.BYTES_PER_ELEMENT,
          yk = (Xk - Ik) * Float32Array.BYTES_PER_ELEMENT;
        Tk.slot >= 0 && yk > 0 && ik + yk <= Tk.size ? this.writeSlot(Tk, ik, Fk, Fk.byteOffset + ik, yk, !1) : Tk.gpu && yk > 0 && ik + yk <= Tk.gpu.size ? this.device.queue.writeBuffer(Tk.gpu, ik, Fk.buffer, Fk.byteOffset + ik, yk) : this.update(Tk, Fk.subarray(Ik, Xk), ik, yk)
      }
      indexBufferCreated(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(kk);
        const Xk = function(kk) {
          if (kk instanceof Uint16Array || kk instanceof Uint32Array) return kk;
          for (let Fk = 0; Fk < kk.length; Fk++)
            if (kk[Fk] >= 65535) return new Uint32Array(kk);
          return new Uint16Array(kk)
        }(Fk);
        kk.is32Bits = 4 === Xk.BYTES_PER_ELEMENT, kk.St = Xk.byteLength, this.buffers.set(kk, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Xk,
          ownsPending: Xk !== Fk,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Ik
        })
      }
      bufferDeleted(kk) {
        const Fk = this.buffers.get(kk);
        null !== Fk && void 0 !== Fk && Fk.gpu ? (this.destroyBuffer(Fk.gpu), this.gpuBuffersVersion++) : Fk && Fk.slot >= 0 && (this.arena.free(Fk.slot, Fk.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(kk)
      }
      update(kk, Fk, Ik, Xk) {
        if (kk.slot >= 0) this.updateSlot(kk, Fk, Ik, Xk);
        else if (kk.gpu) {
          if (Ik + nT(Xk) > kk.gpu.size) {
            const Fk = this.device.createBuffer({
                label: kk.label,
                size: nT(Math.max(2 * kk.gpu.size, Ik + Xk)),
                usage: kk.usage | GPUBufferUsage.COPY_SRC
              }),
              Tk = this.device.createCommandEncoder();
            Tk.copyBufferToBuffer(kk.gpu, 0, Fk, 0, kk.gpu.size), this.device.queue.submit([Tk.finish()]), this.destroyBuffer(kk.gpu), this.gpuBuffersVersion++, kk.gpu = Fk
          }
          Ay(this.device, kk.gpu, Ik, Fk, Xk)
        } else {
          const ik = new Uint8Array(Fk.buffer, Fk.byteOffset, Xk),
            yk = kk.pending;
          if (yk && kk.ownsPending && Ik + Xk <= yk.byteLength) new Uint8Array(yk.buffer, yk.byteOffset, yk.byteLength).set(ik, Ik);
          else if (yk && 0 === Ik && Xk === yk.byteLength && Fk.byteLength === Xk) kk.pending = Fk, kk.ownsPending = !1;
          else {
            var Tk;
            const Fk = new Uint8Array(Math.max(null !== (Tk = null === yk || void 0 === yk ? void 0 : yk.byteLength) && void 0 !== Tk ? Tk : 0, Ik + Xk));
            yk && Fk.set(new Uint8Array(yk.buffer, yk.byteOffset, yk.byteLength)), Fk.set(ik, Ik), kk.pending = Fk, kk.ownsPending = !0
          }
        }
      }
      updateSlot(kk, Fk, Ik, Xk) {
        const Tk = this.arena;
        Ik + nT(Xk) > kk.size && (kk.size = nT(Math.max(2 * kk.size, Ik + Xk)), Tk.growTo(kk.slot + kk.size), this.gpuBuffersVersion++), 0 === Xk ? this.writeSlot(kk, Ik, Dy, 0, 4, !1) : this.writeSlot(kk, Ik, Fk, Fk.byteOffset, Xk, !0)
      }
      writeSlot(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Fk + (ik ? nT(Tk) : Tk);
        yk > kk.slotBytes && this.moveSlot(kk, yk), this.arena.write(kk.slot + Fk, Ik, Xk, Tk, ik)
      }
      moveSlot(kk, Fk) {
        const Ik = this.arena,
          Xk = dy.slotBytes(Math.max(Fk, Math.min(2 * kk.slotBytes, kk.size))),
          Tk = Ik.allocate(Xk, null, kk.size);
        Ik.move(kk.slot, Tk, kk.slotBytes), Ik.free(kk.slot, kk.slotBytes), kk.slot = Tk, kk.slotBytes = Xk, this.gpuBuffersVersion++
      }
      cover(kk, Fk) {
        const Ik = this.buffers.get(kk);
        if (!Ik || Ik.slot < 0) return !1;
        const Xk = Math.min(Fk, Ik.size);
        return !(Xk <= Ik.slotBytes) && (this.moveSlot(Ik, Xk), !0)
      }
      destroyBuffer(kk) {
        var Fk;
        null === (Fk = this.onDestroy) || void 0 === Fk || Fk.call(this, kk), kk.destroy()
      }
      gpuBuffer(kk) {
        const Fk = this.buffers.get(kk);
        if (!Fk) return null;
        if (Fk.slot >= 0) return this.arena.buffer;
        if (Fk.arena && Fk.pending) {
          const kk = Fk.pending,
            Ik = this.arena;
          return Fk.size = nT(kk.byteLength), Fk.slotBytes = dy.slotBytes(function(kk) {
            const Fk = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength);
            let Ik = Fk.length;
            if (kk.byteOffset % 4 === 0) {
              for (; Ik % 4 !== 0 && 0 === Fk[Ik - 1];) Ik--;
              if (Ik % 4 === 0) {
                const Fk = new Uint32Array(kk.buffer, kk.byteOffset, Ik / 4);
                let Xk = Fk.length;
                for (; Xk > 0 && 0 === Fk[Xk - 1];) Xk--;
                Ik = 4 * Xk
              }
            }
            for (; Ik > 0 && 0 === Fk[Ik - 1];) Ik--;
            return Ik
          }(kk)), Fk.slot = Ik.allocate(Fk.slotBytes, kk, Fk.size), Fk.pending = null, Ik.buffer
        }
        if (!Fk.gpu && Fk.pending) {
          const kk = Fk.pending;
          Fk.gpu = this.device.createBuffer({
            label: Fk.label,
            size: nT(kk.byteLength),
            usage: Fk.usage
          }), Ay(this.device, Fk.gpu, 0, kk, kk.byteLength), Fk.pending = null
        }
        return Fk.gpu
      }
      gpuOffset(kk) {
        var Fk, Ik;
        const Xk = null !== (Fk = null === (Ik = this.buffers.get(kk)) || void 0 === Ik ? void 0 : Ik.slot) && void 0 !== Fk ? Fk : -1;
        return Xk < 0 ? 0 : Xk
      }
      gpuEnd(kk) {
        var Fk, Ik;
        const Xk = this.buffers.get(kk);
        return Xk ? Xk.slot >= 0 ? Xk.slot + Xk.size : null !== (Fk = null === (Ik = Xk.gpu) || void 0 === Ik ? void 0 : Ik.size) && void 0 !== Fk ? Fk : 0 : 0
      }
      vertexInput(kk, Fk, Ik) {
        var Xk, Tk, ik, yk;
        return null !== (Xk = null !== (Tk = Ik && this.modelInput(Ik, Fk)) && void 0 !== Tk ? Tk : null === (ik = null !== (yk = this.U_.get(kk)) && void 0 !== yk ? yk : this.batchUploads.get(kk)) || void 0 === ik ? void 0 : ik.inputs[Fk]) && void 0 !== Xk ? Xk : null
      }
      modelInput(kk, Fk) {
        const Ik = this.geometrySlot(kk);
        let Xk = Ik.inputs.get(Fk);
        if (void 0 === Xk) {
          const Tk = kk.vertexAttributes.find((kk => kk.kind === Fk));
          Xk = Tk ? new gk(this.modelKey(Ik, Tk.data, !1), Tk.offset, Tk.stride, Tk.components, !1, Tk.glType, Tk.isNormalized) : null, Ik.inputs.set(Fk, Xk)
        }
        return Xk
      }
      modelIndex(kk) {
        return kk.indexData && this.modelKey(this.geometrySlot(kk), kk.indexData, !0)
      }
      geometrySlot(kk) {
        let Fk = kk.gpu[Ek.h.lite];
        if (!Fk) {
          const Ik = new Map,
            Xk = () => {
              for (const kk of Ik.values()) this.bufferDeleted(kk)
            },
            Tk = kk => {
              const Fk = Ik.get(kk);
              Fk && this.vertexBufferUpdated(Fk, kk)
            };
          Fk = {
            keys: Ik,
            inputs: new Map,
            release: Xk,
            updated: Tk
          }, kk.gpu[Ek.h.lite] = Fk
        }
        return Fk
      }
      modelKey(kk, Fk, Ik) {
        let Xk = kk.keys.get(Fk);
        if (!Xk) {
          if (Ik) {
            const kk = {
              St: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(kk, Fk, "model-indices"), Xk = kk
          } else Xk = {
            St: 0
          }, this.vertexBufferCreated(Xk, Fk, !1, "model-vertices");
          kk.keys.set(Fk, Xk)
        }
        return Xk
      }
      indexFormat(kk) {
        return kk.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(kk, Fk) {
        --kk.refs > 0 || (this.releaseTexture(kk), cy(kk.images), null !== Fk && this.textures.delete(Fk))
      }
      load(kk, Fk) {
        const Ik = Fk.decoded = async function(kk) {
          if ("cube" === kk.kind) return async function(kk) {
            if (6 !== kk.length) throw new Error(`${kk.length} files where six faces were expected`);
            const Fk = await Wy(kk.map((kk => UT(kk)))),
              Ik = Fk[0].width;
            return Wy(Fk.map((async kk => {
              if (kk.width === Ik && kk.height === Ik) return kk;
              try {
                return await createImageBitmap(kk, {
                  ...bT,
                  resizeWidth: Ik,
                  resizeHeight: Ik
                })
              } finally {
                kk.close()
              }
            })))
          }(kk.files);
          if ("data" === kk.kind && kk.data) return [await createImageBitmap(new Blob([kk.data]), bT)];
          return [await UT(ry(kk))]
        }(kk.source).then((kk => {
          0 === Fk.refs ? cy(kk) : Fk.images = kk
        }));
        this.track(Fk, ry(kk.source), Ik, (() => {
          Fk.wanted && !Fk.failed && Fk.refs > 0 && this.upload(kk, Fk)
        }))
      }
      canvasUpdated(kk, Fk, Ik) {
        const {
          state: Xk
        } = this.textureSlot(kk);
        Xk.dynamicSource = {
          invertY: Fk,
          premultiplied: Ik
        }, Xk.dynamic && this.pushDynamic(kk.source, Xk)
      }
      async atlasArray(kk, Fk, Ik) {
        const Xk = await cT(this.device, kk, Fk, Ik);
        if (!this.atlasBindings.has(Xk)) {
          const kk = (0, uy.d)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Xk, {
            view: Xk.texture.createView({
              dimension: "2d-array"
            }),
            sampler: kk
          })
        }
        return Xk
      }
      boundTexture(kk) {
        const Fk = this.atlasBindings.get(kk);
        if (Fk) return Fk;
        const Ik = kk;
        if (Ik.released) return null;
        const Xk = this.textureSlot(Ik, !0),
          {
            state: Tk
          } = Xk;
        if (!Tk.view && (Tk.wanted = !0, Tk.loading || Tk.failed || this.upload(Ik, Tk), !Tk.view)) return null;
        const ik = this.chosenSampler(Ik, Xk),
          yk = Xk.bound;
        return yk && yk.view === Tk.view && yk.sampler === ik ? yk : (Xk.bound = {
          view: Tk.view,
          sampler: ik
        }, Xk.bound)
      }
      textureLoaded(kk) {
        var Fk, Ik;
        return null !== (Fk = null === (Ik = kk.gpu[Ek.h.lite]) || void 0 === Ik ? void 0 : Ik.state.decoded) && void 0 !== Fk ? Fk : null
      }
      textureFailed(kk) {
        var Fk;
        return !0 === (null === (Fk = kk.gpu[Ek.h.lite]) || void 0 === Fk ? void 0 : Fk.state.failed)
      }
      chosenSampler(kk, Fk) {
        const {
          samplingMode: Ik,
          wrapU: Xk,
          wrapV: Tk
        } = kk.sampler, ik = Fk.state.hasMips, yk = function(kk, Fk) {
          const {
            bilinear: Ik,
            trilinear: Xk
          } = Ek.i;
          return !Fk && kk !== Ik || 11 !== kk && kk !== Xk && kk !== Ik ? 1 : 4
        }(Ik, ik), lk = Fk.sampler;
        if (lk && lk.samplingMode === Ik && lk.hasMips === ik && lk.anisotropy === yk && lk.wrapU === Xk && lk.wrapV === Tk) return lk.sampler;
        const ak = this.samplerFor(Ik, ik, yk, Xk, Tk);
        return Fk.sampler = {
          samplingMode: Ik,
          hasMips: ik,
          anisotropy: yk,
          wrapU: Xk,
          wrapV: Tk,
          sampler: ak
        }, ak
      }
      releaseTexture(kk) {
        var Fk, Ik;
        kk.view && (null === (Ik = this.onDestroy) || void 0 === Ik || Ik.call(this, kk.view));
        null === (Fk = kk.destroy) || void 0 === Fk || Fk.call(kk)
      }
      textureSlot(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const Ik = kk.gpu[Ek.h.lite];
        if (Ik) return Ik;
        const Xk = function(kk) {
          let {
            source: Fk,
            sampler: Ik
          } = kk;
          return "canvas" === Fk.kind ? null : `${Fk.kind}|${ry(Fk)}|${Ik.noMipmap}|${Ik.samplingMode}|${Ik.invertY}`
        }(kk);
        let Tk = null === Xk ? void 0 : this.textures.get(Xk);
        Tk || (Tk = {
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
        }, null !== Xk && (this.textures.set(Xk, Tk), this.load(kk, Tk), Fk && this.firstBindDecodes++)), Tk.refs++;
        const ik = Tk,
          yk = {
            state: Tk,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(ik, Xk)
            }
          };
        return kk.gpu[Ek.h.lite] = yk, yk
      }
      samplerFor(kk, Fk, Ik, Xk, Tk) {
        const ik = `${kk}|${Fk}|${Ik}|${Xk}|${Tk}`;
        let yk = this.samplers.get(ik);
        if (!yk) {
          const lk = {
            ...gy(kk, Fk, Ik),
            addressModeU: my(Xk),
            addressModeV: my(Tk)
          };
          yk = (0, uy.d)(this.engine, lk), this.samplers.set(ik, yk)
        }
        return yk
      }
      upload(kk, Fk) {
        const {
          source: Ik,
          sampler: Xk
        } = kk;
        Fk.hasMips = !Xk.noMipmap, "canvas" === Ik.kind ? this.createDynamic(Ik, Fk) : "cube" === Ik.kind ? this.uploadCube(Fk, Ik.luminance) : this.uploadImage(Fk, !0 === Xk.invertY, Ik.url)
      }
      uploadImage(kk, Fk, Ik) {
        const [Xk] = kk.images;
        kk.images = null;
        const Tk = (0, by.c)(this.engine, Xk, {
          mipMaps: kk.hasMips,
          invertY: Fk,
          srgb: !1
        }).then((Fk => {
          Xk.close(), 0 !== kk.refs ? (kk.view = Fk.view, kk.destroy = Fk.texture.destroy.bind(Fk.texture)) : Fk.texture.destroy()
        }));
        this.track(kk, Ik, Tk)
      }
      track(kk, Fk, Ik, Xk) {
        kk.loading = !0, this.pending++, Ik.catch((Ik => {
          kk.failed = !0, console.warn(`Lite: could not load texture ${RT(Fk)}`, Ik)
        })).finally((() => {
          kk.loading = !1, this.pending--, null === Xk || void 0 === Xk || Xk()
        }))
      }
      uploadCube(kk, Fk) {
        const Ik = kk.images;
        kk.images = null;
        const Xk = Ny(this.engine, this.device, Ik, (0, Ek.x)(Fk), kk.hasMips);
        kk.view = Xk.createView({
          dimension: "cube"
        }), kk.destroy = () => {
          Xk.destroy()
        }
      }
      createDynamic(kk, Fk) {
        const {
          canvas: Ik
        } = kk, Xk = (0, Ry.e)(this.engine, Math.max(1, Ik.width), Math.max(1, Ik.height), {
          mipMaps: Fk.hasMips,
          srgb: !1
        });
        Fk.dynamic = Xk, Fk.view = Xk.view, Fk.destroy = () => {
          Xk.texture.destroy()
        }, this.pushDynamic(kk, Fk)
      }
      pushDynamic(kk, Fk) {
        const Ik = Fk.dynamicSource,
          Xk = Fk.dynamic,
          {
            canvas: Tk
          } = kk;
        if (Ik && Xk && 0 !== Tk.width && 0 !== Tk.height) return Tk.width !== Xk.width || Tk.height !== Xk.height ? (this.releaseTexture(Fk), Fk.dynamic = null, Fk.view = null, void this.createDynamic(kk, Fk)) : void(0, Ry.f)(this.engine, Xk, Tk, {
          invertY: Ik.invertY,
          premultiplyAlpha: Ik.premultiplied
        })
      }
    }

    function ry(kk) {
      return "cube" === kk.kind ? kk.rootUrl : "canvas" === kk.kind ? "canvas" : kk.url
    }
    const Dy = new Uint8Array(4);

    function My(kk) {
      const Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      kk._colorAttachment.storeOp = kk._targetSignature._sampleCount > 1 ? Fk : "store";
      const Ik = kk._renderPassDescriptor.depthStencilAttachment;
      Ik && (Ik.depthStoreOp = Fk, Ik.stencilStoreOp && (Ik.stencilStoreOp = Fk))
    }
    var kl = Ik(37785),
      Fl = Ik(37818),
      Il = Ik(37503),
      Xl = Ik(39589);
    const Tl = new Float64Array([1, 1, 1]),
      il = new Float64Array([0, 1, 0]),
      yl = new Float64Array(4),
      ll = new Float32Array(16),
      al = new Float64Array(3),
      ql = new Float64Array(4);

    function Ll(kk, Fk, Ik) {
      kk.fov = Fk.fov, kk.near = Fk.near, kk.far = Fk.far, kk.renderWidth = Ik.renderWidth, kk.renderHeight = Ik.renderHeight, (0, Il.p)(Fk.holderRotation, 0, yl, 0), (0, Il.b)(Tl, 0, yl, 0, Fk.holderPosition, 0, ll);
      const Xk = Fk.KD;
      al[0] = Xk[0], al[1] = Xk[1], al[2] = Xk[2] + 1;
      const Tk = kk.viewMatrix;
      (0, Il.h)(Xk, al, il, Tk), (0, Il.e)(Tk, 0, Tk), (0, Il.l)(Tk, ll, 0, Tk), (0, Il.e)(Tk, 0, Tk);
      const ik = kk.worldMatrix;
      (0, Il.e)(Tk, 0, ik), kk.eye[0] = ik[12], kk.eye[1] = ik[13], kk.eye[2] = ik[14], ql[0] = kk.fov, ql[1] = kk.renderWidth / kk.renderHeight, ql[2] = kk.near, ql[3] = kk.far, (0, Il.o)(ql, kk.projectionMatrix), (0, Il.l)(Tk, kk.projectionMatrix, 0, kk.viewProjectionMatrix), (0, Xl.f)(kk.viewProjectionMatrix, kk.frustum)
    }

    function tl(kk, Fk) {
      let Ik = kk.frustumPlanes;
      Ik || (Ik = kk.frustumPlanes = Array.from({
        length: 6
      }, (() => new kl.e(0, 0, 0, 0))));
      for (let Xk = 0; Xk < 6; Xk++) {
        const kk = Ik[Xk].normal;
        kk._x = Fk[4 * Xk], kk._y = Fk[4 * Xk + 1], kk._z = Fk[4 * Xk + 2], kk._isDirty = !0, Ik[Xk].d = Fk[4 * Xk + 3]
      }
    }

    function Zl(kk, Fk) {
      const Ik = Fk.clearColor;
      kk.clearColour[0] = Ik.r, kk.clearColour[1] = Ik.g, kk.clearColour[2] = Ik.b, kk.clearColour[3] = Ik.a;
      const Xk = Fk.ambientColor;
      kk.ambientColour[0] = Xk.r, kk.ambientColour[1] = Xk.g, kk.ambientColour[2] = Xk.b, kk.animationRatio = Fk.animationRatio, kk.frameId = Fk.frameId, kk.version++
    }

    function jl(kk) {
      const Fk = kk.model.view;
      return Fk.animTick = (0, Fl.i)(), Fk.timeMs = performance.now(), Zl(Fk, kk.Yw), kk.model.update(Fk.frameId), Fk
    }

    function el(kk) {
      const Fk = kk.Yw,
        {
          view: Ik,
          PD: Xk
        } = kk.model;
      return Ll(Ik, Xk, Fk.Oe()), Fk.onBeforeRenderObservable.notifyObservers(Fk), tl(Fk, Ik.frustum), Fk.onBeforeCameraRenderObservable.notifyObservers(Fk.activeCamera), jl(kk)
    }
    var wl = Ik(37463),
      Hl = Ik(37581),
      Jl = Ik(37813);

    function xl(kk) {
      var Fk, Ik;
      const Xk = (0, Sk.X)(kk);
      if (!Xk || Xk.diffuseTexture && (0, Jl.j)(kk)) return null;
      const Tk = null === (Fk = (0, Sk.B)(Xk, Vk.l.name)) || void 0 === Fk ? void 0 : Fk.state,
        ik = null === (Ik = (0, Sk.B)(Xk, ri.b.name)) || void 0 === Ik ? void 0 : Ik.state,
        yk = new Float32Array(16);
      return function(kk, Fk, Ik, Xk) {
        var Tk, ik;
        const yk = jX;
        Xk.set(kk.diffuseColor, yk.diffuse), Xk[yk.diffuse + 3] = kk.alpha, Xk.set(kk.ambientColor, yk.ambientAndCutoff), Xk[yk.ambientAndCutoff + 3] = kk.alphaCutOff, Xk.set(kk.emissiveColor, yk.emissiveAndLevel), Xk[yk.emissiveAndLevel + 3] = null !== (Tk = null === (ik = kk.diffuseTexture) || void 0 === ik ? void 0 : ik.level) && void 0 !== Tk ? Tk : 1, null !== Fk && void 0 !== Fk && Fk.animDataPerTex ? (Xk[yk.anim + 1] = Fl.e, Xk[yk.anim + 2] = Fk.animDataPerTex.length / 3 - 1) : Ik && (Xk[yk.anim + 1] = Ik.numAnimStates, Xk[yk.anim + 2] = Ik.ticksPerAnimState)
      }(Xk, Tk, ik, yk), {
        model: Xk,
        atlas: Tk,
        texture: Tk ? "atlas" : Xk.diffuseTexture ? "single" : "none",
        animated: Tk ? !!Tk.animDataPerTex : !!ik,
        liquid: (0, Jl.n)(kk),
        customRenderMat: (0, Jl.j)(kk),
        uniformData: yk
      }
    }
    var Pl = Ik(2795);
    class Kl {
      constructor(kk) {
        this.units = kk, this.buffer = void 0, this.twin = null, this.bufferReady = !1, this.twinReady = !1
      }
      get ready() {
        return this.bufferReady && (!this.twin || this.twinReady)
      }
      destroy() {
        var kk;
        this.buffer.destroy(), null === (kk = this.twin) || void 0 === kk || kk.destroy()
      }
    }
    class Ql {
      constructor(kk, Fk) {
        this.arena = kk, this.nZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.nZ = new fy(Fk);
        const Ik = new Kl(Fk);
        Ik.buffer = this.createBuffer(Ik, !1), this.backings.push(Ik), this.refresh()
      }
      get St() {
        return this.nZ.St
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
        let kk = 0;
        for (const Fk of this.backings) kk += Fk.units * (this.arena.unitBytes + (Fk.twin ? this.arena.twinUnitBytes : 0));
        return kk
      }
      holds(kk) {
        return kk.start + kk.length <= this.usable
      }
      lost(kk) {
        return this.dropped || kk.start + kk.length > this.St
      }
      write(kk, Fk) {
        const {
          device: Ik,
          unitBytes: Xk
        } = this.arena;
        for (const Tk of this.backings) {
          const ik = (Tk.units - kk.start) * Xk;
          ik > 0 && Ik.queue.writeBuffer(Tk.buffer, kk.start * Xk, Fk, 0, Math.min(Fk.byteLength, ik))
        }
      }
      writeLight(kk, Fk) {
        const {
          device: Ik,
          twinUnitBytes: Xk,
          verticesPerUnit: Tk
        } = this.arena, {
          light: ik,
          count: yk
        } = this.arena.twinLight(Fk, Math.min(Fk.length, kk.length * Tk));
        for (const lk of this.backings) {
          lk.twin || (lk.twin = this.createBuffer(lk, !0));
          const Fk = (lk.units - kk.start) * Tk;
          Fk > 0 && Ik.queue.writeBuffer(lk.twin, kk.start * Xk, ik, 0, Math.min(yk, Fk))
        }
      }
      grow(kk) {
        this.arena.assertNotDrawing();
        const {
          device: Fk,
          unitBytes: Ik,
          label: Xk
        } = this.arena, Tk = this.backings[this.backings.length - 1], ik = new Kl(kk), yk = Fk.createCommandEncoder({
          label: `${Xk}-grow`
        });
        ik.buffer = this.createBuffer(ik, !1), yk.copyBufferToBuffer(Tk.buffer, 0, ik.buffer, 0, Tk.units * Ik), Tk.twin && (ik.twin = this.createBuffer(ik, !0), yk.copyBufferToBuffer(Tk.twin, 0, ik.twin, 0, Tk.units * this.arena.twinUnitBytes)), Fk.queue.submit([yk.finish()]), this.backings.push(ik), this.nZ.grow(kk)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const kk of this.backings) kk.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(kk, Fk) {
        const {
          device: Ik,
          unitBytes: Xk,
          twinUnitBytes: Tk,
          usage: ik,
          label: yk
        } = this.arena;
        Ik.pushErrorScope("out-of-memory");
        const lk = Ik.createBuffer({
          label: Fk ? `${yk}-light` : yk,
          size: kk.units * (Fk ? Tk : Xk),
          usage: (Fk ? this.arena.twinUsage : ik) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, Ik.popErrorScope().then((Ik => {
          this.arena.awaitingVerdict--, this.settle(kk, Fk, !Ik, !0)
        }), (Ik => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${yk} buffer, taken as failed: ${String(Ik)}`), this.settle(kk, Fk, !1, !1)
        })), lk
      }
      settle(kk, Fk, Ik, Xk) {
        const Tk = this.backings.indexOf(kk);
        if (!(this.dropped || Tk < 0)) {
          if (!Ik) {
            if (Xk && this.arena.ranOutOfMemory(kk.units, kk.units * (Fk ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === Tk) return void this.drop();
            for (const kk of this.backings.splice(Tk)) kk.destroy();
            return this.nZ.truncate(this.backings[Tk - 1].units), this.growable = !1, void this.promote()
          }
          Fk ? kk.twinReady = !0 : (kk.bufferReady = !0, this.arena.allocatedBuffer(kk.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: kk
        } = this;
        let Fk = 0;
        for (; Fk + 1 < kk.length && kk[Fk].ready && kk[Fk + 1].ready;) Fk++;
        for (const Ik of kk.splice(0, Fk)) Ik.destroy();
        this.refresh()
      }
      refresh() {
        const kk = this.backings[0];
        this.buffer = kk.buffer, this.twin = kk.twinReady ? kk.twin : null, this.usable = !this.dropped && kk.bufferReady ? kk.units : 0
      }
    }
    class sl {
      constructor(kk, Fk, Ik, Xk) {
        let {
          verticesPerUnit: Tk = 1,
          twinUsage: ik = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = kk, this.unitBytes = Fk, this.usage = Ik, this.label = Xk, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, LF.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), Fk % 4 !== 0) throw new Error(`${Xk}: ${Fk}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = Tk, this.twinUsage = ik, this.twinValueBytes = Tk > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * Tk
      }
      twinLight(kk, Fk) {
        if (4 === this.twinValueBytes) return this.widened.length < Fk && (this.widened = new Float32Array(Math.max(Fk, 2 * this.widened.length))), this.widened.set(kk.subarray(0, Fk)), {
          light: this.widened,
          count: Fk
        };
        const Ik = Fk % this.verticesPerUnit;
        if (0 === Ik) return {
          light: kk,
          count: Fk
        };
        const Xk = Fk - Ik + this.verticesPerUnit;
        return this.padded.length < Xk && (this.padded = new Uint16Array(Math.max(Xk, 2 * this.padded.length))), this.padded.set(kk.subarray(0, Fk)), this.padded.fill(0, Fk, Xk), {
          light: this.padded,
          count: Xk
        }
      }
      allocate(kk) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), kk > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const Tk of this.pages) {
          const Fk = Tk.nZ.allocate(kk);
          if (Fk >= 0) return {
            page: Tk,
            start: Fk,
            length: kk
          }
        }
        const Fk = this.pages[this.pages.length - 1];
        if (null !== Fk && void 0 !== Fk && Fk.canGrow) {
          const Ik = Math.min(this.ceiling, Math.max(2 * Fk.St, Fk.St + kk));
          if (Ik - Fk.St >= kk) return Fk.grow(Ik), {
            page: Fk,
            start: Fk.nZ.allocate(kk),
            length: kk
          }
        }
        Fk && Fk !== this.pages[0] && 0 === Fk.nZ.used && Fk.drop();
        const Ik = Math.floor(1048576 / this.unitBytes),
          Xk = new Ql(this, Math.max(kk, Math.min(this.ceiling, Ik)));
        return this.pages.push(Xk), {
          page: Xk,
          start: Xk.nZ.allocate(kk),
          length: kk
        }
      }
      free(kk) {
        this.assertNotDrawing();
        const {
          page: Fk
        } = kk;
        Fk.nZ.free(kk.start, kk.length), 0 === Fk.nZ.used && Fk !== this.pages[0] && Fk !== this.pages[this.pages.length - 1] && Fk.drop()
      }
      remove(kk) {
        const Fk = this.pages.indexOf(kk);
        Fk >= 0 && this.pages.splice(Fk, 1)
      }
      ranOutOfMemory(kk, Fk) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${Fk}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, kk), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, kk) / 2));
        const Ik = performance.now();
        Ik >= this.shortageUntil && (this.forgetFailedAt = Ik + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = Ik + 1e3)
      }
      allocatedBuffer(kk) {
        kk >= this.failed && (this.failed = 1 / 0);
        const Fk = Math.min(2 * kk, Math.floor((kk + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, Fk))
      }
      stats() {
        let kk = 0,
          Fk = 0,
          Ik = 0,
          Xk = 0;
        for (const Tk of this.pages) kk += Tk.St, Fk += Tk.nZ.used, Ik += Tk.hasTwin ? Tk.St * this.twinUnitBytes : 0, Xk += Tk.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: kk * this.unitBytes,
          usedBytes: Fk * this.unitBytes,
          twinBytes: Ik,
          allocatedBytes: Xk
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: kk,
          maxStorageBufferBindingSize: Fk
        } = this.device.limits;
        let Ik = Math.floor(Math.min(67108864, kk) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (Ik = Math.min(Ik, Math.floor(Fk / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (Ik = Math.min(Ik, Math.floor(Fk / this.twinUnitBytes))), Ik
      }
    }
    const Vl = 16383;

    function zl(kk, Fk, Ik, Xk, Tk) {
      let ik = 0;
      for (let yk = Ik; yk < Xk; yk += Vl) kk.drawIndexed(6 * Math.min(Vl, Xk - yk), 1, 0, Fk + 4 * yk, Tk), ik++;
      return ik
    }
    class Sl {
      constructor(kk, Fk) {
        this.recordsGroup = Fk, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const Ik = SF.f.strideWithoutAtlas;
        this.vertexArena = new sl(kk, Ik, GPUBufferUsage.VERTEX, `terrain-vertices-${Ik}`), this.quadArena = new sl(kk, Hl.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Xk = (0, oF.e)(new Uint16Array(98298), Vl);
        this.quadPattern = kk.createBuffer({
          label: "terrain-quad-pattern",
          size: Xk.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), kk.queue.writeBuffer(this.quadPattern, 0, Xk)
      }
      set(kk, Fk) {
        const Ik = Fk.packedVertices,
          Xk = Ik ? this.quadArena.allocate(kk.faceCount) : this.vertexArena.allocate(kk.vertexCount);
        if (!Xk) return !1;
        kk.vertices = Xk;
        const Tk = Ik ? new Uint8Array(Ik.buffer, Ik.byteOffset, Ik.byteLength) : new Uint8Array(Fk.vertices);
        return Xk.page.write(Xk, Tk), !0
      }
      setLight(kk, Fk) {
        const {
          vertices: Ik
        } = kk;
        Ik && 0 !== Fk.length && Ik.page.live && (Fk.length < kk.vertexCount ? Ik.page.arena.warnOnce("shortLight", `a part's ${Fk.length} light values are fewer than its ${kk.vertexCount} vertices, so its light is left as it was`) : (Ik.page.writeLight(Ik, Fk), kk.lit = !0))
      }
      lightFullSky(kk, Fk) {
        this.fullSky.length < Fk && (this.fullSky = new Uint16Array(Math.max(Fk, 4096)).fill(Pl.k));
        for (const Ik of kk) {
          const kk = Ik.vertices;
          kk.page.live && (kk.page.writeLight(kk, this.fullSky), Ik.lit = !0)
        }
      }
      backed(kk) {
        const {
          vertices: Fk
        } = kk;
        return !!Fk && Fk.page.holds(Fk)
      }
      lost(kk) {
        const {
          vertices: Fk
        } = kk;
        return !!Fk && Fk.page.lost(Fk)
      }
      release(kk) {
        kk.vertices && kk.vertices.page.arena.free(kk.vertices), kk.vertices = null, kk.lit = !1
      }
      setDrawing(kk) {
        this.forgetBound()
      }
      draw(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fk.faceCount;
        const ik = Fk.vertices,
          yk = ik.page,
          lk = Ik ? yk.twin : null;
        if (!yk.holds(ik) || Ik && !lk) return 0;
        const {
          verticesPerUnit: ak
        } = yk.arena;
        let qk = ik.start * ak;
        this.boundPattern || (kk.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Lk = Xk + Tk;
        if (ak > 1) return yk.buffer === this.boundRecords && lk === this.boundRecordsLight || (kk.setBindGroup(1, this.recordsGroup(yk.buffer, lk)), this.boundRecords = yk.buffer, this.boundRecordsLight = lk), zl(kk, qk, Xk, Lk, Fk.slot);
        yk.buffer !== this.boundVertices && (kk.setVertexBuffer(0, yk.buffer), this.boundVertices = yk.buffer), lk && lk !== this.boundLight && (kk.setVertexBuffer(1, lk), this.boundLight = lk);
        const tk = Fk.faceCount;
        return Lk <= tk ? zl(kk, qk, Xk, Lk, Fk.slot) : zl(kk, qk, Xk, tk, Fk.slot) + zl(kk, qk, Math.max(Xk, tk) - tk, Lk - tk, Fk.slot)
      }
      get buffersAwaitingVerdict() {
        let kk = 0;
        for (const Fk of this.arenas()) kk += Fk.awaitingVerdict;
        return kk
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class ol {
      constructor(kk, Fk, Ik, Xk) {
        this.device = kk, this.splitBefore = Fk, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = kk.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Tk = kk.createShaderModule({
          label: "scene-depth-copy",
          code: (ik = Ik._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${ik?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var ik;
        kk.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: Tk,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: Tk,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((kk => {
          this.pipeline = kk, this.building = !1
        }), (kk => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", kk)
        })), Ik._executeWithTransmission = () => this.execute(Ik, Xk)
      }
      get compiling() {
        return this.building
      }
      setWanted(kk) {
        this.wanted = kk
      }
      setPlanes(kk, Fk) {
        kk === this.near && Fk === this.far || (this.near = kk, this.far = Fk, this.unproject[0] = kk / (Fk - kk), this.unproject[1] = Fk * kk / (Fk - kk), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.copy) || void 0 === Fk ? void 0 : Fk.view) && void 0 !== kk ? kk : null
      }
      execute(kk, Fk) {
        var Ik;
        null === (Ik = this.retired) || void 0 === Ik || Ik.destroy(), this.retired = null;
        const Xk = FF(Fk),
          Tk = kk._transparentBindings,
          ik = this.wanted && this.pipeline ? this.splitIndex(Tk) : -1,
          yk = kk._colorAttachment,
          lk = yk.resolveTarget;
        ik >= 0 && (yk.resolveTarget = void 0, My(kk, !0));
        let ak = Xk.beginRenderPass(kk._renderPassDescriptor);
        ak.setBindGroup(0, kk._sceneBG);
        let qk = this.drawList(ak, Fk, kk._opaqueBindings, 0, kk._opaqueBindings.length);
        if (qk += this.drawList(ak, Fk, kk._directBindings, 0, kk._directBindings.length), qk += this.drawList(ak, Fk, Tk, 0, ik >= 0 ? ik : Tk.length), ak.end(), ik < 0) return qk;
        My(kk);
        const Lk = kk._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: tk,
            stencilLoadOp: Zk
          } = Lk,
          jk = yk.loadOp;
        yk.resolveTarget = lk;
        try {
          this.copyDepth(Xk, kk), yk.loadOp = "load", Lk.depthLoadOp = "load", Zk && (Lk.stencilLoadOp = "load"), ak = Xk.beginRenderPass(kk._renderPassDescriptor), ak.setBindGroup(0, kk._sceneBG), qk += this.drawList(ak, Fk, Tk, ik, Tk.length), ak.end()
        } finally {
          yk.loadOp = jk, Lk.depthLoadOp = tk, Lk.stencilLoadOp = Zk
        }
        return qk
      }
      splitIndex(kk) {
        for (let Fk = 0; Fk < kk.length; Fk++)
          if (kk[Fk].renderable === this.splitBefore) return Fk;
        return -1
      }
      drawList(kk, Fk, Ik, Xk, Tk) {
        let ik = null,
          yk = 0;
        for (let lk = Xk; lk < Tk; lk++) {
          const Xk = Ik[lk],
            Tk = Xk.renderable.mesh;
          Tk && !1 === Tk.visible || (Xk.pipeline !== ik && (kk.setPipeline(Xk.pipeline), ik = Xk.pipeline), yk += Xk.draw(kk, Fk))
        }
        return yk
      }
      copyDepth(kk, Fk) {
        var Ik, Xk;
        const Tk = (null !== (Ik = Fk._config.depth) && void 0 !== Ik ? Ik : Fk._config.rt)._depthTexture,
          ik = (null === (Xk = this.copy) || void 0 === Xk ? void 0 : Xk.source) === Tk ? this.copy : this.remakeCopy(Tk),
          yk = kk.beginRenderPass(ik.pass);
        yk.setPipeline(this.pipeline), yk.setBindGroup(0, ik.bindGroup), yk.draw(3), yk.end()
      }
      remakeCopy(kk) {
        var Fk, Ik;
        this.retired = null !== (Fk = null === (Ik = this.copy) || void 0 === Ik ? void 0 : Ik.texture) && void 0 !== Fk ? Fk : null;
        const Xk = this.device.createTexture({
            label: "scene-depth",
            size: [kk.width, kk.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Tk = Xk.createView(),
          ik = this.device.createBindGroup({
            label: "scene-depth-copy",
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [{
              binding: 0,
              resource: kk.createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.unprojectBuffer
              }
            }]
          }),
          yk = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: Tk,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: kk,
          texture: Xk,
          view: Tk,
          bindGroup: ik,
          pass: yk
        }, this.copy
      }
    }
    const vl = "rgba8unorm";

    function El(kk) {
      return kk ? 15 : 1
    }
    class Ol {
      constructor(kk, Fk, Ik, Xk) {
        this.device = kk, this.terrain = Xk, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = Fk._targetSignature._sampleCount > 1, this.cameraBuffer = kk.createBuffer({
          label: "sun-shadow-mask-camera",
          size: 64,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.layout = kk.createBindGroupLayout({
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
        const Tk = kk.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = kk.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: Tk,
          entries: []
        });
        const ik = kk.createShaderModule({
          label: "sun-shadow-mask",
          code: (yk = this.edge, `${(0,vF.C)()}${NI({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${yk?vI:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${El(yk)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${yk?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var yk;
        kk.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: kk.createPipelineLayout({
            bindGroupLayouts: [this.layout, Tk, Tk, Wi(kk, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: ik,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: ik,
            entryPoint: "maskFragment",
            targets: [{
              format: this.maskFormat
            }]
          }
        }).then((kk => {
          this.pipeline = kk, this.building = !1
        }), (kk => {
          this.building = !1, console.error("Lite: the sun shadow mask's trace failed to build, so terrain reading it is lit", kk)
        }));
        const lk = Fk._executeWithTransmission;
        Fk._executeWithTransmission = kk => this.execute(Fk, Ik, (() => lk ? lk(kk) : function(kk, Fk) {
          const Ik = FF(Fk).beginRenderPass(kk._renderPassDescriptor);
          Ik.setBindGroup(0, kk._sceneBG);
          let Xk = nl(Ik, Fk, kk._opaqueBindings);
          return Xk += nl(Ik, Fk, kk._directBindings), Xk += nl(Ik, Fk, kk._transparentBindings), Ik.end(), Xk
        }(Fk, Ik)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.targets) || void 0 === Fk ? void 0 : Fk.maskView) && void 0 !== kk ? kk : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(kk) {
        ! function(kk, Fk) {
          const Ik = kk.worldMatrix,
            Xk = kk.projectionMatrix,
            Tk = 1 / Xk[0],
            ik = 1 / Xk[5],
            yk = kk.far * kk.near / (kk.far - kk.near);
          Fk[0] = kk.eye[0], Fk[1] = kk.eye[1], Fk[2] = kk.eye[2], Fk[3] = 2 ** -23 / yk, Fk[4] = Ik[0] * Tk, Fk[5] = Ik[1] * Tk, Fk[6] = Ik[2] * Tk, Fk[7] = yk, Fk[8] = Ik[4] * ik, Fk[9] = Ik[5] * ik, Fk[10] = Ik[6] * ik, Fk[11] = kk.near / (kk.far - kk.near), Fk[12] = Ik[8], Fk[13] = Ik[9], Fk[14] = Ik[10], Fk[15] = 0
        }(kk, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(kk, Fk, Ik) {
        if (this.retire(), !this.terrain.readsMask) return Ik();
        const Xk = this.targetsFor(kk),
          Tk = FF(Fk),
          ik = kk._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Xk.prepass.depthStencilAttachment.view = ik.view);
        const yk = this.terrain.drawPrepass(Tk, Xk.prepass, kk._sceneBG);
        if (0 === yk) return Ik();
        if (this.trace(Tk, Xk), this.edge) return yk + 1 + Ik();
        const {
          depthLoadOp: lk,
          stencilLoadOp: ak
        } = ik;
        ik.depthLoadOp = "load", ak && (ik.stencilLoadOp = "load");
        try {
          return yk + 1 + Ik()
        } finally {
          ik.depthLoadOp = lk, ik.stencilLoadOp = ak
        }
      }
      trace(kk, Fk) {
        const Ik = this.terrain.sunShadowGroup(),
          Xk = kk.beginRenderPass(Fk.trace);
        this.pipeline && Ik && (Xk.setPipeline(this.pipeline), Xk.setBindGroup(0, Fk.bindGroup), Xk.setBindGroup(1, this.empty), Xk.setBindGroup(2, this.empty), Xk.setBindGroup(3, Ik), Xk.draw(3)), Xk.end()
      }
      retire() {
        const kk = this.retired;
        var Fk;
        kk && (kk.mask.destroy(), kk.normals.destroy(), null === (Fk = kk.depth) || void 0 === Fk || Fk.destroy(), this.retired = null)
      }
      targetsFor(kk) {
        var Fk, Ik;
        const Xk = (null !== (Fk = kk._config.depth) && void 0 !== Fk ? Fk : kk._config.rt)._depthTexture;
        return (null === (Ik = this.targets) || void 0 === Ik ? void 0 : Ik.source) === Xk ? this.targets : this.remake(kk, Xk)
      }
      remake(kk, Fk) {
        var Ik;
        this.retired = this.targets;
        const Xk = [Fk.width, Fk.height],
          Tk = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Xk,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          ik = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Xk,
            format: vl,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          yk = null !== (Ik = kk._targetSignature._depthStencilFormat) && void 0 !== Ik ? Ik : Fk.format,
          lk = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Xk,
            format: yk,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          ak = kk._renderPassDescriptor.depthStencilAttachment,
          qk = yk.includes("stencil"),
          Lk = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: ik.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: lk ? lk.createView() : ak.view,
              depthClearValue: ak.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...qk ? {
                stencilClearValue: ak.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          tk = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== lk && void 0 !== lk ? lk : Fk).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: ik.createView()
            }]
          }),
          Zk = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: Tk.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [El(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: Fk,
          mask: Tk,
          maskView: Tk.createView(),
          normals: ik,
          depth: lk,
          bindGroup: tk,
          prepass: Lk,
          trace: Zk
        }, this.targets
      }
    }

    function nl(kk, Fk, Ik) {
      let Xk = null,
        Tk = 0;
      for (const ik of Ik) {
        const Ik = ik.renderable.mesh;
        Ik && !1 === Ik.visible || (ik.pipeline !== Xk && (kk.setPipeline(ik.pipeline), Xk = ik.pipeline), Tk += ik.draw(kk, Fk))
      }
      return Tk
    }
    const Gl = 6e4,
      pl = {
        status: "ok"
      },
      ul = {
        status: "skipped"
      };
    async function bl(kk, Fk) {
      const {
        isCancelled: Ik
      } = kk;
      if (Ik()) return {
        status: "iI"
      };
      const {
        target: Xk
      } = Fk;
      if (!Xk) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const Tk = [],
        ik = Promise.all(Array.from(new Set(kk.materials), (async Ik => {
          Tk.push(await async function(kk, Fk, Ik, Xk) {
            const Tk = {
              lighting: kk.lighting,
              dirLightCount: Math.min(kk.dirLightCount, 4),
              ke: kk.runtime
            };
            try {
              const ik = Fk.material(Xk);
              return ik && LX(Fk.programKey(ik, !1, Tk)) ? (await ik.ready, kk.isCancelled() ? pl : ik.bindGroupLayout ? await async function(kk, Fk, Ik, Xk) {
                const {
                  device: Tk
                } = kk;
                let ik, yk;
                Tk.pushErrorScope("validation");
                try {
                  ik = kk.pipelineBuild(Fk, Ik, Xk)
                } finally {
                  yk = Tk.popErrorScope().catch((() => null))
                }
                const [lk, ak] = await Promise.all([yk, ik.built.then((() => null), (kk => null !== kk && void 0 !== kk ? kk : new Error("pipeline failed")))]);
                if (!lk && !ak) return pl;
                const qk = await Rl(ik.module),
                  Lk = qk.length > 0 ? qk.map((kk => `${ik.name} ${kk.lineNum}:${kk.linePos}: ${kk.message}`)).join("\n") : `${ik.name}: ${Ul(null!==ak&&void 0!==ak?ak:lk)}`;
                return {
                  status: "failed",
                  material: Fk.model.name,
                  message: Lk
                }
              }(Fk, ik, Fk.programKey(ik, "none" !== ik.texture, Tk), Ik): (console.warn(`Shader pack: skipped the compile check for "${Xk.name}", whose textures failed to load`), ul)) : pl
            } catch (ik) {
              return {
                status: "failed",
                material: Xk.name,
                message: Ul(ik)
              }
            }
          }(kk, Fk, Xk, Ik))
        }))),
        yk = function(kk, Fk) {
          let Ik, Xk, Tk = !1;
          const ik = new Promise((ik => {
            var yk;
            Ik = setTimeout((() => {
              ik("timeout")
            }), null !== (yk = Fk.timeoutMs) && void 0 !== yk ? yk : Gl), Xk = setInterval((() => {
              Fk.isCancelled() && ik("iI")
            }), 50), kk.lost.then((() => {
              Tk = !0, ik("lost")
            }))
          }));
          return {
            signal: ik,
            lost: () => Tk,
            dispose: () => {
              clearTimeout(Ik), clearInterval(Xk)
            }
          }
        }(Fk.device, kk);
      let lk;
      try {
        lk = await Promise.race([ik.then((() => "done")), yk.signal])
      } finally {
        yk.dispose()
      }
      if ("iI" === lk || Ik()) return {
        status: "iI"
      };
      const ak = Tk.find((kk => "failed" === kk.status));
      return ak && "lost" !== lk && !yk.lost() && await new Promise((kk => {
        setTimeout(kk, 0)
      })), "lost" === lk || yk.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : ak ? {
        status: "failed",
        failure: {
          material: ak.material,
          message: ak.message
        }
      } : "timeout" === lk ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(qk=kk.timeoutMs)&&void 0!==qk?qk:Gl)/1e3} s`), {
        status: "skipped"
      }) : Tk.some((kk => "skipped" === kk.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var qk
    }
    async function Rl(kk) {
      if (!kk) return [];
      try {
        return (await kk.getCompilationInfo()).messages.filter((kk => "error" === kk.type))
      } catch {
        return []
      }
    }

    function Ul(kk) {
      var Fk;
      return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.message) && void 0 !== Fk ? Fk : String(kk)
    }

    function Cl(kk, Fk, Ik, Xk) {
      LX(kk) ? Rl(Ik).then((kk => {
        const [Ik] = kk;
        gT("terrain", Fk, Xk, Ik ? `${Ik.lineNum}:${Ik.linePos} error: ${Ik.message}` : null)
      })) : gT("terrain", Fk, Xk)
    }
    var Nl = Ik(37586),
      cl = Ik(37600),
      Wl = Ik(37610),
      fl = Ik(2786);

    function Bl(kk, Fk, Ik, Xk, Tk) {
      const ik = Math.hypot(Ik[0], Ik[1], Ik[2]);
      if (!(ik > 0)) return;
      const yk = [Ik[0] / ik, Ik[1] / ik, Ik[2] / ik],
        lk = [Math.floor(Fk[0]), Math.floor(Fk[1]), Math.floor(Fk[2])],
        ak = [0, 0, 0],
        qk = [1 / 0, 1 / 0, 1 / 0],
        Lk = [1 / 0, 1 / 0, 1 / 0];
      for (let jk = 0; jk < 3; jk++) yk[jk] > 0 ? (ak[jk] = 1, qk[jk] = (lk[jk] + 1 - Fk[jk]) / yk[jk], Lk[jk] = 1 / yk[jk]) : yk[jk] < 0 && (ak[jk] = -1, qk[jk] = (lk[jk] - Fk[jk]) / yk[jk], Lk[jk] = -1 / yk[jk]);
      const {
        se: tk
      } = kk;
      let Zk = kk.yB(lk[0], lk[1], lk[2]);
      for (;;) {
        const Fk = qk[0] < qk[1] ? qk[0] < qk[2] ? 0 : 2 : qk[1] < qk[2] ? 1 : 2;
        if (qk[Fk] > Xk) return;
        const Ik = ak[Fk] > 0 ? lk[Fk] + 1 : lk[Fk];
        lk[Fk] += ak[Fk], qk[Fk] += Lk[Fk];
        const ik = kk.yB(lk[0], lk[1], lk[2]),
          yk = ik !== Zk && !(kk.opaque[Zk] && kk.opaque[ik]);
        if (yk) {
          const Xk = [lk[0], lk[1], lk[2]];
          Xk[Fk] = Ik;
          const ik = Math.floor(Xk[0] / tk),
            yk = Math.floor(Xk[1] / tk),
            ak = Math.floor(Xk[2] / tk);
          !kk.isDrawn(ik, yk, ak) && kk.hasParts(ik, yk, ak) && Tk.add(`${ik},${yk},${ak}`)
        }
        if (yk && kk.occluders[ik]) return;
        Zk = ik
      }
    }

    function dl(kk, Fk) {
      return kk.group - Fk.group || kk.nearest - Fk.nearest
    }
    class Yl {
      constructor(kk, Fk) {
        this.device = kk, this.PJ = Fk, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
      }
      createBuffer() {
        return this.device.createBuffer({
          label: "terrain-chunk-slots",
          size: this.data.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      allocate() {
        var kk;
        const Fk = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.next++;
        if (8 * Fk >= this.data.length) {
          const kk = new Float32Array(2 * this.data.length);
          kk.set(this.data), this.data = kk, this.words = new Uint32Array(kk.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.PJ()
        }
        return Fk
      }
      release(kk) {
        this.free.push(kk)
      }
      set(kk, Fk, Ik, Xk, Tk) {
        const ik = 8 * kk + KX;
        this.data[ik] = Fk, this.data[ik + 1] = Ik, this.data[ik + 2] = Xk, this.setVisibility(kk, Tk)
      }
      setVisibility(kk, Fk) {
        this.data[8 * kk + QX] = Fk, this.markDirty(kk, kk)
      }
      setFaces(kk, Fk, Ik) {
        const Xk = 8 * kk;
        this.words[Xk + sX] = Fk, this.words[Xk + VX] = Ik, this.markDirty(kk, kk)
      }
      markDirty(kk, Fk) {
        this.dirtyMin = Math.min(this.dirtyMin, kk), this.dirtyMax = Math.max(this.dirtyMax, Fk)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const Al = PX,
      gl = !0;
    const ml = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: Al.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      hl = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class rl {
      constructor(kk) {
        this.device = kk, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(ZX), this.dirLightUniforms = this.frameUniforms.subarray(tX.dirLights, tX.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, LF.d)(), this.faceGroups = !0, this.visibilityGraph = gl, this.visCull = gl, this.visCheck = !1, this.visCullMinDistance = Wl.h, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new Fa, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.ke = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Sl(kk, ((kk, Fk) => this.recordsGroup(kk, Fk))), this.slots = new Yl(kk, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = IF(kk), this.frameLayout = kk.createBindGroupLayout({
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
        }), this.frameBuffer = kk.createBuffer({
          label: "terrain-frame",
          size: this.frameUniforms.byteLength,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.frameBindGroup = this.createFrameBindGroup(), this.sampler = kk.createSampler({
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
          bind: (kk, Fk) => this.createBinding(this.opaqueRenderable, Fk, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (kk, Fk) => this.createBinding(this.transparentRenderable, Fk, !0)
        }
      }
      installSceneDepth(kk, Fk) {
        this.sceneDepth = new ol(this.device, this.transparentRenderable, kk, Fk)
      }
      createFrameBindGroup() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== kk && void 0 !== kk ? kk : this.slots.buffer
            }
          }, {
            binding: 3,
            resource: {
              buffer: null !== Fk && void 0 !== Fk ? Fk : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(kk, Fk) {
        const Ik = null !== Fk && void 0 !== Fk ? Fk : kk;
        let Xk = this.recordsGroups.get(Ik);
        return Xk || (Xk = this.createFrameBindGroup(kk, Fk), this.recordsGroups.set(Ik, Xk)), Xk
      }
      setChunkMesh(kk, Fk, Ik) {
        var Xk;
        let Tk = this.chunks.get(kk);
        Tk ? this.geometry.release(Tk) : (Tk = {
          mesh: kk,
          slot: this.slots.allocate(),
          origin: [Ik[0], Ik[1], Ik[2]],
          material: null,
          vertices: null,
          lit: !1,
          faceCount: 0,
          vertexCount: 0,
          packed: !1,
          lostRemeshes: 0,
          lostRetryAt: 0,
          visibility: kk.visibility,
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
        }, this.chunks.set(kk, Tk), this.writeSlot(Tk)), Tk.material = kk.material ? this.materialFor(kk.material) : null, Tk.packed = !!Fk.packedVertices, Tk.vertexCount = (0, Hl.f)(Fk), Tk.faceCount = Tk.vertexCount / 4;
        const ik = null !== (Xk = Fk.faceGroups) && void 0 !== Xk ? Xk : null;
        if (Tk.faceGroups = ik, ik) {
          const kk = Nl.o;
          Tk.planePX = ik[kk], Tk.planeNX = ik[kk + 1], Tk.planePY = ik[kk + 2], Tk.planeNY = ik[kk + 3], Tk.planePZ = ik[kk + 4], Tk.planeNZ = ik[kk + 5]
        }
        this.drawWhole(Tk), 0 !== Tk.faceCount && (this.geometry.set(Tk, Fk) ? (Tk.packed && this.slots.setFaces(Tk.slot, Tk.vertices.start + Tk.faceCount, Tk.faceCount), Fk.ae && this.setChunkMeshLight(kk, Fk.ae)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Tk.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(kk, Fk) {
        const Ik = this.chunks.get(kk);
        Ik && this.geometry.setLight(Ik, Fk)
      }
      drawStats() {
        let kk = this.transparent.length;
        for (const Fk of this.opaqueBatches) kk += Fk.meshes.length;
        return {
          drawn: kk,
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
      removeChunkMesh(kk) {
        const Fk = this.chunks.get(kk);
        Fk && (this.geometry.release(Fk), this.slots.release(Fk.slot), this.chunks.delete(kk))
      }
      remeshLost(kk, Fk) {
        this.geometry.release(Fk), Fk.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** Fk.lostRemeshes++);
        const Ik = kk.XZ,
          [Xk, Tk, ik] = Ik.kTk(Fk.origin[0], Fk.origin[1], Fk.origin[2]),
          yk = Ik.Qw.sw(Xk, Tk, ik);
        yk && (yk.Pw = !0, yk.zw = !0, Ik.Kw(yk, !1))
      }
      chooseFaceRanges(kk, Fk, Ik) {
        const Xk = this.faceRanges;
        kk.faceMask = Ik, kk.rangeCount = (0, cl.n)(Fk, Ik, Xk), kk.first0 = Xk[0], kk.count0 = Xk[1], kk.first1 = Xk[2], kk.count1 = Xk[3]
      }
      drawWhole(kk) {
        kk.faceMask = -1, kk.faceEpoch = -1, kk.rangeCount = 1, kk.first0 = 0, kk.count0 = kk.faceCount
      }
      writeSlot(kk) {
        const [Fk, Ik, Xk] = this.originOffset;
        this.slots.set(kk.slot, kk.origin[0] - Fk, kk.origin[1] - Ik, kk.origin[2] - Xk, kk.visibility)
      }
      materialFor(kk) {
        const Fk = this.materials.get(kk);
        if (Fk) return Fk;
        const Ik = xl(kk);
        if (!Ik) return this.warnOnce(`material:${kk.name}`, `Lite terrain cannot draw material "${kk.name}"; its chunks are skipped.`), null;
        const {
          model: Xk,
          atlas: Tk,
          texture: ik,
          animated: yk,
          uniformData: lk
        } = Ik, ak = {
          id: this.materials.size,
          model: Xk,
          texture: ik,
          animated: yk,
          uniformData: lk,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${kk.name}`,
            size: lk.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: Ik.liquid,
          customRenderMat: Ik.customRenderMat,
          atlasCount: 0,
          F_: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(kk, ak), this.device.queue.writeBuffer(ak.uniformBuffer, 0, lk), ak.ready = this.createMaterialBindGroup(ak, Tk).catch((Fk => {
          console.error(`Lite terrain failed to load the textures of material "${kk.name}"`, Fk)
        })), ak
      }
      materialLayout(kk) {
        const Fk = function(kk) {
            const Fk = ["uniforms"];
            if ("atlas" === kk.texture) {
              kk.animated && Fk.push("animData"), Fk.push("sampler");
              for (let Ik = 0; Ik < kk.atlasCount; Ik++) Fk.push("textureArray")
            } else "single" === kk.texture && Fk.push("sampler", "texture");
            return Fk
          }(kk),
          Ik = Fk.join(",");
        let Xk = this.materialLayouts.get(Ik);
        if (!Xk) {
          const kk = GPUShaderStage.FRAGMENT;
          Xk = this.device.createBindGroupLayout({
            label: `terrain-material-${Ik}`,
            entries: Fk.map(((Fk, Ik) => {
              switch (Fk) {
                case "uniforms":
                  return {
                    binding: Ik, visibility: GPUShaderStage.VERTEX | kk, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: Ik, visibility: GPUShaderStage.VERTEX | kk, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: Ik, visibility: kk, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: Ik, visibility: kk, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: Ik, visibility: kk, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(Ik, Xk)
        }
        return Xk
      }
      async createMaterialBindGroup(kk, Fk) {
        const Ik = [{
          buffer: kk.uniformBuffer
        }];
        if (Fk) {
          const {
            urls: Xk,
            pixels: Tk,
            layerWidth: ik
          } = Fk.sources, yk = await Promise.all(Xk.map(((kk, Fk) => {
            var Ik;
            return cT(this.device, kk, null !== (Ik = null === Tk || void 0 === Tk ? void 0 : Tk[Fk]) && void 0 !== Ik ? Ik : null, ik)
          })));
          kk.atlasCount = yk.length, kk.F_ = yk[0].layerWidth, kk.atlasLayers = yk[0].layers, Fk.animDataPerTex && Ik.push({
            buffer: GT(this.device, Float32Array.from(Fk.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), Ik.push(this.sampler);
          for (const kk of yk) Ik.push(kk.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === kk.texture) {
          const {
            url: Fk
          } = kk.model.diffuseTexture.source, {
            pixels: Xk,
            width: Tk,
            height: ik
          } = await CT(Fk);
          Ik.push(this.sampler), Ik.push(uT(this.device, Xk, Tk, ik, 1, `terrain-${Fk}`).createView({
            dimension: "2d"
          }))
        }
        const Xk = this.materialLayout(this.programKey(kk, !1));
        kk.bindGroupLayout = Xk, kk.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${kk.model.name}`,
          layout: Xk,
          entries: Ik.map(((kk, Fk) => ({
            binding: Fk,
            resource: kk
          })))
        })
      }
      programKey(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Xk = Ik ? Ik.lighting : this.lighting,
          Tk = Ik ? Ik.ke : this.ke,
          ik = {
            texture: kk.texture,
            atlasCount: kk.atlasCount,
            F_: kk.F_,
            atlasLayers: kk.atlasLayers,
            animated: kk.animated,
            alphaTest: kk.model.transparencyMode === Sk.r.alphaTest,
            lighting: Xk,
            dirLightCount: Ik ? Ik.dirLightCount : this.dirLightCount,
            packed: Fk
          };
        if (!Tk) return ik;
        const yk = this.shaderPackFields(kk, Tk),
          lk = "atlas" === kk.texture && kk.model.transparencyMode === Sk.r.opaque && yX(yk.packVariant);
        return {
          ...ik,
          ...yk,
          alphaTest: ik.alphaTest || lk
        }
      }
      shaderPackFields(kk, Fk) {
        const Ik = this.packVariant(kk, Fk);
        return void 0 === Ik ? TX : {
          packVariant: Ik,
          liquid: kk.liquid
        }
      }
      packVariant(kk, Fk) {
        return kk.customRenderMat ? void 0 : function(kk, Fk) {
          const Ik = kk ? kk.defineFor(Fk ? "liquid" : "terrain") : 0;
          return 0 === Ik ? void 0 : Ik
        }(Fk, kk.liquid)
      }
      isBlended(kk) {
        return kk.model.transparencyMode === Sk.r.alphaBlend
      }
      shaderModule(kk, Fk) {
        let Ik = this.modules.get(kk);
        return Ik || (Ik = this.device.createShaderModule({
          label: Fk,
          code: kk
        }), this.modules.set(kk, Ik)), Ik
      }
      pipelineFor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!kk.bindGroupLayout) return null;
        if (!Xk) return this.pipelineOf(kk, Fk, Ik);
        const Tk = this.pipelineIdNow(kk, Fk, !0, Ik),
          ik = this.pipelines.get(Tk);
        if (ik) return ik;
        const yk = this.pipelineOf(kk, Fk, Ik);
        return yk && void 0 === ik && this.startPipeline(Tk, kk, {
          ...this.programKey(kk, Fk),
          resting: Xk
        }, Ik), yk
      }
      pipelineOf(kk, Fk, Ik) {
        const Xk = this.pipelineIdNow(kk, Fk, !1, Ik),
          Tk = this.pipelines.get(Xk);
        return void 0 !== Tk ? Tk : (this.startPipeline(Xk, kk, this.programKey(kk, Fk), Ik), null)
      }
      pipelineIdNow(kk, Fk, Ik, Xk) {
        const {
          lighting: Tk,
          dirLightCount: ik
        } = this, {
          transparencyMode: yk,
          backFaceCulling: lk
        } = kk.model, ak = this.packVariant(kk, this.ke), qk = (Fk ? 2 : 0) + (Ik ? 1 : 0), Lk = kk.pipelineIds[qk];
        if (null !== Lk && Lk.lighting === Tk && Lk.dirLightCount === ik && Lk.packVariant === ak && Lk.transparencyMode === yk && Lk.cull === lk && Lk.atlasCount === kk.atlasCount && Lk.F_ === kk.F_ && Lk.atlasLayers === kk.atlasLayers && Lk.colorFormat === Xk._colorFormat && Lk.depthStencilFormat === Xk._depthStencilFormat && Lk.sampleCount === Xk._sampleCount) return Lk.id;
        const tk = this.programKey(kk, Fk),
          Zk = this.pipelineId(kk, Ik ? {
            ...tk,
            resting: Ik
          } : tk, Xk);
        return kk.pipelineIds[qk] = {
          id: Zk,
          lighting: Tk,
          dirLightCount: ik,
          packVariant: ak,
          transparencyMode: yk,
          cull: lk,
          atlasCount: kk.atlasCount,
          F_: kk.F_,
          atlasLayers: kk.atlasLayers,
          colorFormat: Xk._colorFormat,
          depthStencilFormat: Xk._depthStencilFormat,
          sampleCount: Xk._sampleCount
        }, Zk
      }
      pipelineId(kk, Fk, Ik) {
        return Dl(Fk, this.isBlended(kk), kk.model.backFaceCulling, Ik)
      }
      pipelineBuild(kk, Fk, Ik) {
        var Xk;
        const Tk = this.pipelineId(kk, Fk, Ik);
        return null !== (Xk = this.builds.get(Tk)) && void 0 !== Xk ? Xk : this.startPipeline(Tk, kk, Fk, Ik)
      }
      startPipeline(kk, Fk, Ik, Xk) {
        var Tk;
        this.pipelines.set(kk, null);
        const ik = OX(Ik),
          yk = this.isBlended(Fk),
          lk = this.shadowMask && Xk._depthStencilFormat ? function(kk, Fk, Ik, Xk) {
            if (void 0 === kk.packVariant || kk.liquid || Fk) return "none";
            const Tk = (0, EF.f)(kk.packVariant);
            return null === Tk || void 0 === Tk || !Tk.sunShadow || !UI(Tk, Ik) || Tk.discards || kk.alphaTest && yX(kk.packVariant) ? "none" : Xk ? "edge" : "plain"
          }(Ik, yk, !!this.sunShadow, Xk._sampleCount > 1) : "none";
        let ak;
        try {
          ak = nX(Ik, !!this.sunShadow, lk)
        } catch (Hk) {
          if (!LX(Ik)) throw Hk;
          return this.failedPackBuild(kk, Ik, ik, Hk)
        }
        const qk = this.shaderModule(ak, ik),
          Lk = [];
        Ik.packed || (Lk.push(function(kk, Fk) {
          const Ik = [{
            shaderLocation: Al.position,
            offset: SF.f.rk,
            format: "float32x3"
          }, {
            shaderLocation: Al.normal,
            offset: SF.f.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: Al.color,
            offset: SF.f.colorOffset,
            format: "unorm8x4"
          }];
          return kk && Ik.push({
            shaderLocation: Al.uv,
            offset: SF.f.uvOffset,
            format: "float32x2"
          }), Fk && Ik.push({
            shaderLocation: Al.blockFlagWords,
            offset: SF.f.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: SF.f.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: Ik
          }
        }("none" !== Ik.texture, LX(Ik))), Ik.lighting && Lk.push(ml));
        const tk = Fk.model.backFaceCulling,
          Zk = {
            label: ik,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, Fk.bindGroupLayout, ...di(this.device, Ik, !!this.sunShadow, "none" !== lk)]
            }),
            vertex: {
              module: qk,
              entryPoint: "mainVertex",
              buffers: Lk
            },
            fragment: Dk({
              module: qk,
              entryPoint: "mainFragment"
            }, Xk, yk ? hl : null),
            depthStencil: Xk._depthStencilFormat ? {
              format: Xk._depthStencilFormat,
              depthCompare: null !== (Tk = Xk._depthCompare) && void 0 !== Tk ? Tk : XF,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Xk._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: tk ? "back" : "none"
            }
          },
          jk = Ik.resting ? 0 : 1;
        this.compiling += jk;
        const ek = "none" === lk ? this.device.createRenderPipelineAsync(Zk) : this.startMaskPipelines(qk, Zk, "edge" === lk);
        ek.then((Fk => {
          this.compiling -= jk, this.pipelines.set(kk, Fk)
        }), (kk => {
          this.compiling -= jk, console.error(`Lite terrain pipeline ${ik} failed`, kk), Cl(Ik, ik, qk, kk)
        }));
        const wk = {
          name: ik,
          module: qk,
          built: ek
        };
        return this.builds.set(kk, wk), wk
      }
      startMaskPipelines(kk, Fk, Ik) {
        const Xk = Fk.depthStencil,
          Tk = this.device.createRenderPipelineAsync(Ik ? Fk : {
            ...Fk,
            depthStencil: {
              ...Xk,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          ik = this.device.createRenderPipelineAsync({
            ...Fk,
            label: `${Fk.label}-prepass`,
            fragment: {
              module: kk,
              entryPoint: "prepassFragment",
              targets: [{
                format: vl
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([Tk, ik]).then((kk => {
          let [Fk, Ik] = kk;
          return this.prepassOf.set(Fk, Ik), this.maskPipelines++, Fk
        }))
      }
      failedPackBuild(kk, Fk, Ik, Xk) {
        console.error(`Lite terrain pipeline ${Ik} failed`, Xk), Cl(Fk, Ik, null, Xk);
        const Tk = Promise.reject(Xk);
        Tk.catch((() => {}));
        const ik = {
          name: Ik,
          module: null,
          built: Tk
        };
        return this.builds.set(kk, ik), ik
      }
      checkShaderPack(kk) {
        return bl(kk, {
          device: this.device,
          target: this.target,
          material: kk => this.materialFor(kk),
          programKey: (kk, Fk, Ik) => this.programKey(kk, Fk, Ik),
          pipelineBuild: (kk, Fk, Ik) => this.pipelineBuild(kk, Fk, Ik)
        })
      }
      createBinding(kk, Fk, Ik) {
        return this.target = Fk, {
          renderable: kk,
          pipeline: lF(this.device, Fk),
          draw: kk => {
            this.geometry.setDrawing(!0);
            try {
              return Ik ? this.drawTransparent(kk, Fk) : this.drawOpaque(kk, Fk)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(kk, Fk) {
        var Ik, Xk, Tk, ik;
        const {
          qZ: yk
        } = kk;
        this.lighting = kk.Nw;
        const lk = (0, wl.z)(Fk);
        this.dirLightCount = Math.min(lk, 4), this.ke = null !== (Ik = yk.ke) && void 0 !== Ik ? Ik : null, lk > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(kk, Fk), this.animateMaterials(Fk.animTick);
        const ak = yk.SZ,
          qk = ak[0] !== this.originOffset[0] || ak[1] !== this.originOffset[1] || ak[2] !== this.originOffset[2];
        qk && (this.originOffset[0] = ak[0], this.originOffset[1] = ak[1], this.originOffset[2] = ak[2]);
        const Lk = Fk.eye;
        this.eye[0] = Lk[0], this.eye[1] = Lk[1], this.eye[2] = Lk[2], this.writeShaderPackInputs();
        const tk = Fk.projectionMatrix,
          Zk = 0 === tk[15];
        let jk = 0;
        (qk || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: ek
        } = this;
        aF(this.transparentRenderable._worldCenter, Fk, iF), this.resetBatches(Zk), this.transparent.length = 0, this.unlit.length = 0;
        const wk = yk.XZ.xkk,
          Hk = wk / 2 * Math.sqrt(3);
        let Jk = 0;
        const xk = !!this.ke && iX(this.ke.defineFor("liquid"));
        let Pk = !1;
        const Kk = null !== (Xk = null === (Tk = yk.Bx) || void 0 === Tk ? void 0 : Tk.visibility) && void 0 !== Xk ? Xk : null,
          Qk = this.visCull && Zk && 0 === this.compiling && null !== Kk && yk.XZ.jXk[0] >= this.visCullMinDistance ? this.target : null,
          sk = this.visPassable,
          Vk = this.visCandidates,
          zk = this.visCandidateBatches;
        sk.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let Sk = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let vk = 0;
        const Ek = (kk, Ik) => {
          if (!Ik) return this.transparent.push(kk), void(vk += 2 * kk.faceCount);
          if (null !== kk.faceGroups && Ik.faceCull) {
            if (0 === jk && (jk = (0, cl.d)(tk, Fk.renderWidth, Fk.renderHeight), jk !== this.faceFocalPx && (this.faceFocalPx = jk, ek = ++this.faceEpoch)), kk.faceEpoch !== ek) {
              kk.faceEpoch = ek;
              const Fk = Math.sqrt(kk.distance) + Hk,
                Ik = (0, cl.l)(kk.planePX, kk.planeNX, kk.planePY, kk.planeNY, kk.planePZ, kk.planeNZ, this.eye[0] - (kk.origin[0] - this.originOffset[0]), this.eye[1] - (kk.origin[1] - this.originOffset[1]), this.eye[2] - (kk.origin[2] - this.originOffset[2]), (0, cl.h)(Fk, jk));
              Ik !== kk.faceMask && this.chooseFaceRanges(kk, kk.faceGroups, Ik)
            }
            if (0 === kk.rangeCount) return
          } else - 1 !== kk.faceMask && this.drawWhole(kk);
          Ik.meshes.push(kk), vk += 2 * ((kk.rangeCount > 0 ? kk.count0 : 0) + (kk.rangeCount > 1 ? kk.count1 : 0))
        };
        for (const nk of this.chunks.values()) {
          qk && this.writeSlot(nk);
          const kk = nk.mesh.visibility;
          kk !== nk.visibility && (nk.visibility = kk, this.slots.setVisibility(nk.slot, kk));
          const {
            material: Ik
          } = nk;
          this.geometry.lost(nk) && performance.now() >= nk.lostRetryAt && this.remeshLost(yk, nk);
          const Xk = !(null === Ik || void 0 === Ik || !Ik.bindGroup) && this.geometry.backed(nk),
            Tk = Xk && this.lighting && !nk.vertices.page.twin;
          if (Qk && (Number.isNaN(nk.key) && (nk.ci = Math.floor(nk.origin[0] / wk), nk.cj = Math.floor(nk.origin[1] / wk), nk.ck = Math.floor(nk.origin[2] / wk), nk.key = (0, fl.l)(nk.ci, nk.cj, nk.ck)), (!Xk || kk < 1 || Tk || !this.batchDraws(Ik, nk.packed, Qk)) && this.visSeeThrough(nk, Qk) && sk.add(nk.key)), !Xk) continue;
          Tk || (nk.lostRemeshes = 0);
          const ik = nk.origin[0] - this.originOffset[0],
            lk = nk.origin[1] - this.originOffset[1],
            ak = nk.origin[2] - this.originOffset[2];
          if (!(0, Xl.b)(Fk.frustum, ik, lk, ak, wk)) continue;
          const Lk = ik + wk / 2 - this.eye[0],
            tk = lk + wk / 2 - this.eye[1],
            jk = ak + wk / 2 - this.eye[2];
          if (nk.distance = Lk * Lk + tk * tk + jk * jk, this.lighting && !nk.lit && (Jk = Math.max(Jk, nk.vertexCount), this.unlit.push(nk)), Tk) continue;
          const ek = this.isBlended(Ik) ? null : this.batchFor(Ik, nk.packed, nk.vertices.page, 1 === kk, Zk);
          Qk ? (Vk[Sk] = nk, zk[Sk++] = ek) : Ek(nk, ek)
        }
        const Ok = Qk ? this.sweepVisibility(kk, Fk, Kk) : null;
        null === (ik = (0, Gi.t)(yk)) || void 0 === ik || ik.update(Fk.frustum, this.originOffset, wk, Ok);
        for (let nk = 0; nk < Sk; nk++) {
          const kk = Vk[nk];
          !Ok || Ok.isDrawn(kk.ci, kk.cj, kk.ck) ? Ek(kk, zk[nk]) : (this.visCulledParts++, this.visCulledTriangles += 2 * kk.faceCount)
        }
        for (const nk of this.transparent) Pk ||= xk && nk.material.liquid && !nk.material.customRenderMat;
        this.submittedTriangles = vk, Ok && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(kk, Fk, Ok)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(Pk) : Pk && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && Jk > 0 && this.geometry.lightFullSky(this.unlit, Jk);
        for (const nk of this.opaqueBatches) this.chunkSorter.sort(nk.meshes, 1) || nk.meshes.sort(Ml);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(ka)
      }
      sweepVisibility(kk, Fk, Ik) {
        const {
          XZ: Xk
        } = kk.qZ, Tk = Xk.xkk, ik = this.visPassable, yk = this.eye[0] + this.originOffset[0], lk = this.eye[1] + this.originOffset[1], ak = this.eye[2] + this.originOffset[2];
        if (!Ik.eyeClear(yk, lk, ak, Fk.near, Fk.projectionMatrix, Xk)) return null;
        const [qk, Lk] = Xk.jXk, tk = Ik.update(yk, lk, ak, Tk, qk, Lk, ik);
        return this.visSweeps = Ik.sweeps, tk ? Ik : null
      }
      visSeeThrough(kk, Fk) {
        const {
          material: Ik
        } = kk;
        return (!Ik || !this.isBlended(Ik)) && (kk.mesh.visibility < 1 || !(null !== Ik && void 0 !== Ik && Ik.bindGroup) || kk.faceCount > 0 && (!this.geometry.backed(kk) || this.lighting && !kk.vertices.page.twin) || !this.batchDraws(Ik, kk.packed, Fk))
      }
      batchDraws(kk, Fk, Ik) {
        var Xk;
        const Tk = Fk ? 2 : 0;
        if (kk === this.visDrawsMaterial && function(kk, Fk) {
            return 0 !== (kk & 1 << Fk)
          }(this.visDrawsBits, Tk)) return 0 !== (this.visDrawsBits & 2 << Tk);
        let ik = null !== (Xk = this.visBatchDraws.get(kk)) && void 0 !== Xk ? Xk : 0;
        if (!(ik & 1 << Tk)) {
          ik |= 1 << Tk | (!!kk.bindGroupLayout && this.canDraw(kk, Fk) && !!this.pipelines.get(this.pipelineIdNow(kk, Fk, !1, Ik)) ? 2 << Tk : 0), this.visBatchDraws.set(kk, ik)
        }
        return this.visDrawsMaterial = kk, this.visDrawsBits = ik, 0 !== (ik & 2 << Tk)
      }
      runVisCheck(kk, Fk, Ik) {
        const {
          qZ: Xk
        } = kk, {
          XZ: Tk
        } = Xk, ik = Tk.xkk, yk = new Set;
        for (const jk of this.chunks.values()) yk.add(jk.key);
        const lk = KT.Matrix.FromArray(Fk.viewProjectionMatrix).invert(),
          [ak, qk, Lk] = this.originOffset,
          tk = new KT.Ge,
          Zk = function(kk, Fk, Ik, Xk) {
            const Tk = new Set;
            for (let ik = 0; ik < 27; ik++)
              for (let yk = 0; yk < 48; yk++) {
                const lk = Ik((yk + .5) / 48 * 2 - 1, (ik + .5) / 27 * 2 - 1);
                Bl(kk, Fk, [lk[0] - Fk[0], lk[1] - Fk[1], lk[2] - Fk[2]], Xk, Tk)
              }
            return Tk
          }({
            yB: (kk, Fk, Ik) => Tk.yB(kk, Fk, Ik),
            occluders: Ik.occluders,
            opaque: Ik.opaque,
            se: ik,
            isDrawn: (kk, Fk, Xk) => Ik.isDrawn(kk, Fk, Xk),
            hasParts: (kk, Fk, Ik) => yk.has((0, fl.l)(kk, Fk, Ik))
          }, [this.eye[0] + ak, this.eye[1] + qk, this.eye[2] + Lk], ((kk, Fk) => (KT.Ge.TransformCoordinatesFromFloatsToRef(kk, Fk, .5, lk, tk), [tk.x + ak, tk.y + qk, tk.z + Lk])), (Tk.jXk[0] + 1) * ik);
        this.visViolations = Zk.size;
        for (const jk of Zk) this.warnOnce(`vis:${jk}`, `Lite terrain cave culling skipped chunk ${jk}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var kk;
        null !== (kk = this.ke) && void 0 !== kk && kk.isRunning() && (this.shaderPackInputs ??= new Yi(this.device, this.ke.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.ke, this.eye, this.lighting))
      }
      bindShaderPackInputs(kk, Fk, Ik) {
        var Xk, Tk, ik, yk;
        let lk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const ak = this.packVariant(Fk, Ik);
        if (void 0 === ak) return;
        this.shaderPackInputs || (this.shaderPackInputs = new Yi(this.device, Ik.textureLayers(), this.sunShadow), this.shaderPackInputs.write(Ik, this.eye, this.lighting));
        const qk = iX(ak) ? null !== (Xk = null === (Tk = this.sceneDepth) || void 0 === Tk ? void 0 : Tk.view) && void 0 !== Xk ? Xk : this.standIn() : null,
          Lk = lk ? null !== (ik = null === (yk = this.shadowMask) || void 0 === yk ? void 0 : yk.view) && void 0 !== ik ? ik : this.standIn() : null;
        this.shaderPackInputs.bind(kk, qk, Bi(ak, !!this.sunShadow), Lk)
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
        var kk, Fk;
        return null !== (kk = null === (Fk = this.shaderPackInputs) || void 0 === Fk ? void 0 : Fk.bindGroupFor(null, !0)) && void 0 !== kk ? kk : null
      }
      resetBatches(kk) {
        const Fk = this.opaqueBatches;
        let Ik = 0;
        for (const Xk of Fk) Xk.meshes.length > 0 && (Xk.meshes.length = 0, Xk.faceCull = this.batchFaceCull(Xk.material, kk), Fk[Ik++] = Xk);
        Fk.length = Ik
      }
      orderBatches() {
        const kk = this.opaqueBatches;
        for (let Fk = 0; Fk < kk.length; Fk++) {
          const Ik = kk[Fk];
          Ik.group = Fk;
          for (let Xk = 0; Xk < Fk; Xk++) {
            const Fk = kk[Xk];
            if (Fk.material === Ik.material && Fk.packed === Ik.packed) {
              Ik.group = Fk.group;
              break
            }
          }
          Ik.nearest = Ik.meshes.length > 0 ? Ik.meshes[0].distance : 1 / 0
        }
        kk.sort(dl)
      }
      batchFor(kk, Fk, Ik, Xk, Tk) {
        for (const yk of this.opaqueBatches)
          if (yk.material === kk && yk.packed === Fk && yk.page === Ik && yk.resting === Xk) return yk;
        const ik = {
          material: kk,
          packed: Fk,
          page: Ik,
          resting: Xk,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(kk, Tk)
        };
        return this.opaqueBatches.push(ik), ik
      }
      batchFaceCull(kk, Fk) {
        return !(!Fk || !(0, Nl.t)(kk.model)) && (!this.ke || ! function(kk) {
          var Fk;
          return !(null === (Fk = (0, EF.f)(kk)) || void 0 === Fk || !Fk.movesVertices)
        }(this.packVariant(kk, this.ke)))
      }
      writeFrameUniforms(kk, Fk) {
        const Ik = this.frameUniforms,
          Xk = tX;
        if ((0, wl.B)(kk, Ik), Ik[Xk.fogInfos] = Fk.fogEnabled ? Fk.fogMode : 0, Ik[Xk.fogInfos + 1] = Fk.fogStart, Ik[Xk.fogInfos + 2] = Fk.fogEnd, Ik[Xk.fogInfos + 3] = Fk.fogDensity, Ik.set(Fk.fogColour, Xk.fogColour), Ik[Xk.outputHeight] = Fk.renderHeight, Ik.set(Fk.ambientColour, Xk.sceneAmbient), (0, wl.v)(Fk, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const Fk = (0, Hl.g)(kk.iw, kk.Se, kk.oe);
          for (let kk = 0; kk < 4; kk++) Ik[Xk.aoLevels + kk] = Fk[kk] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, Ik)
      }
      animateMaterials(kk) {
        const Fk = jX.anim;
        for (const Ik of this.materials.values()) Ik.animated && (Ik.uniformData[Fk] = kk, this.device.queue.writeBuffer(Ik.uniformBuffer, 4 * Fk, Ik.uniformData, Fk, 1))
      }
      canDraw(kk, Fk) {
        return !("atlas" === kk.texture && !Fk) || (this.warnOnce(`stride:${kk.id}`, `Lite terrain: material "${kk.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(kk, Fk) {
        let Ik = 0;
        kk.setBindGroup(1, this.frameBindGroup);
        for (const Xk of this.opaqueBatches) {
          if (!Xk.meshes.length || !this.canDraw(Xk.material, Xk.packed)) continue;
          const Tk = this.pipelineFor(Xk.material, Xk.packed, Fk, Xk.resting);
          Tk && (kk.setPipeline(Tk), kk.setBindGroup(2, Xk.material.bindGroup), this.ke && this.bindShaderPackInputs(kk, Xk.material, this.ke, this.prepassOf.has(Tk)), Ik += this.drawBatch(kk, Xk))
        }
        return Ik
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(kk, Fk, Ik) {
        const Xk = this.target,
          Tk = this.ke;
        if (!Xk || !Tk || 0 === this.maskPipelines) return 0;
        let ik = 0,
          yk = null;
        this.geometry.setDrawing(!0);
        try {
          for (const lk of this.opaqueBatches) {
            if (!lk.meshes.length || !this.canDraw(lk.material, lk.packed)) continue;
            const ak = this.pipelineFor(lk.material, lk.packed, Xk, lk.resting),
              qk = ak && this.prepassOf.get(ak);
            qk && (yk || (yk = kk.beginRenderPass(Fk), yk.setBindGroup(0, Ik), yk.setBindGroup(1, this.frameBindGroup)), yk.setPipeline(qk), yk.setBindGroup(2, lk.material.bindGroup), this.bindShaderPackInputs(yk, lk.material, Tk, !0), ik += this.drawBatch(yk, lk))
          }
        } finally {
          var lk;
          null === (lk = yk) || void 0 === lk || lk.end(), this.geometry.setDrawing(!1)
        }
        return ik
      }
      drawBatch(kk, Fk) {
        let Ik = 0;
        for (const Xk of Fk.meshes) {
          const {
            rangeCount: Fk
          } = Xk;
          Fk > 0 && (Ik += this.geometry.draw(kk, Xk, this.lighting, Xk.first0, Xk.count0), Fk > 1 && (Ik += this.geometry.draw(kk, Xk, this.lighting, Xk.first1, Xk.count1)))
        }
        return Ik
      }
      drawTransparent(kk, Fk) {
        let Ik = 0,
          Xk = null,
          Tk = null;
        kk.setBindGroup(1, this.frameBindGroup);
        for (const ik of this.transparent) {
          const yk = ik.material;
          if (!this.canDraw(yk, ik.packed)) continue;
          const lk = this.pipelineFor(yk, ik.packed, Fk);
          lk && (lk !== Xk && (kk.setPipeline(lk), Xk = lk, this.ke && this.bindShaderPackInputs(kk, yk, this.ke)), yk !== Tk && (kk.setBindGroup(2, yk.bindGroup), Tk = yk), Ik += this.geometry.draw(kk, ik, this.lighting))
        }
        return Ik
      }
    }

    function Dl(kk, Fk, Ik, Xk) {
      return `${OX(kk)}|${kk.atlasLayers}|${kk.F_}|${Fk}|${Ik}|${Xk._colorFormat}|${Xk._depthStencilFormat}|${Xk._sampleCount}`
    }

    function Ml(kk, Fk) {
      return kk.distance - Fk.distance
    }

    function ka(kk, Fk) {
      return Fk.distance - kk.distance
    }
    class Fa {
      constructor() {
        this.left = []
      }
      sort(kk, Fk) {
        for (let Ik = 0; Ik < kk.length; Ik++) {
          const Fk = kk[Ik].distance;
          if (Fk - Fk !== 0) return !1
        }
        return this.sortRange(kk, 0, kk.length, Fk), !0
      }
      sortRange(kk, Fk, Ik, Xk) {
        if (Ik - Fk <= 16) {
          for (let Tk = Fk + 1; Tk < Ik; Tk++) {
            const Ik = kk[Tk],
              ik = Xk * Ik.distance;
            let yk = Tk - 1;
            for (; yk >= Fk && Xk * kk[yk].distance > ik; yk--) kk[yk + 1] = kk[yk];
            kk[yk + 1] = Ik
          }
          return
        }
        const Tk = Fk + Ik >>> 1;
        if (this.sortRange(kk, Fk, Tk, Xk), this.sortRange(kk, Tk, Ik, Xk), Xk * kk[Tk - 1].distance <= Xk * kk[Tk].distance) return;
        const {
          left: ik
        } = this, yk = Tk - Fk;
        for (let Lk = 0; Lk < yk; Lk++) ik[Lk] = kk[Fk + Lk];
        let lk = 0,
          ak = Tk,
          qk = Fk;
        for (; lk < yk && ak < Ik;) kk[qk++] = Xk * kk[ak].distance < Xk * ik[lk].distance ? kk[ak++] : ik[lk++];
        for (; lk < yk;) kk[qk++] = ik[lk++]
      }
    }
    const Ia = Math.ceil(102);

    function Xa(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Fk;
      const ik = Math.min(Fk, Ik),
        yk = new Uint32Array(FI(Xk));
      for (let lk = 0; lk < Xk; lk++) {
        const Fk = Math.floor(lk * ik / Xk),
          Ik = Math.max(Fk + 1, Math.floor((lk + 1) * ik / Xk));
        for (let ak = 0; ak < Xk; ak++) {
          const qk = Math.floor(ak * ik / Xk),
            Lk = Math.max(qk + 1, Math.floor((ak + 1) * ik / Xk));
          let tk = 0;
          for (let Xk = Fk; Xk < Ik; Xk++)
            for (let Fk = qk; Fk < Lk; Fk++) kk[Xk * Tk + Fk] >= Ia && tk++;
          if (2 * tk >= (Ik - Fk) * (Lk - qk)) {
            const kk = ak + Xk * lk;
            yk[kk >>> 5] |= 1 << (31 & kk)
          }
        }
      }
      return yk
    }

    function Ta(kk) {
      return Math.max(1, Math.min(16, kk))
    }
    class ia {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = kk, this.loadTexture = Fk, this.warn = Ik, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(kk, Fk) {
        return (kk.kN !== this.builtVersion || this.blockCaster.length !== Fk) && (this.build(kk, Fk), !0)
      }
      build(kk, Fk) {
        this.builtVersion = kk.kN;
        const Ik = new Uint16Array(Fk),
          Xk = new Map;
        for (let Tk = 1; Tk < Fk; Tk++) {
          const Fk = this.classify(kk, Tk, Xk);
          if (null === Fk || Fk === hF) {
            Ik[Tk] = null === Fk ? 0 : hF;
            continue
          }
          let ik = this.byKey.get(Fk.key);
          void 0 === ik && (ik = this.allocate(Fk), this.byKey.set(Fk.key, ik)), Ik[Tk] = ik
        }
        this.blockCaster = Ik, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(kk, Fk) {
        const Ik = kk.o_[Fk];
        if ("function" !== typeof Ik) return Ik;
        try {
          return Ik()
        } catch (Xk) {
          return this.warnOnce(`Sun shadows: no caster option for block ${Fk}: ${Xk instanceof Error?Xk.message:String(Xk)}`), null
        }
      }
      classify(kk, Fk, Ik) {
        const Xk = this.option(kk, Fk);
        if ("none" === Xk) return null;
        if (Xk && Xk.planes.length > 0) {
          const kk = Xk.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(kk)}`,
            planes: kk
          }
        }
        if (kk.aj[Fk]) return null;
        const Tk = kk.Lj[Fk] ? kk.XN(Fk) : null;
        if (Tk && Tk.length >= 6) {
          const kk = function(kk) {
            const Fk = new Uint32Array(16);
            for (let Ik = 0; Ik + 6 <= kk.length; Ik += 6) {
              const Xk = [0, 1, 2].map((Fk => Math.max(0, Math.ceil(8 * kk[Ik + Fk] - .5)))),
                Tk = [0, 1, 2].map((Fk => Math.min(7, Math.floor(8 * kk[Ik + Fk + 3] - .5))));
              for (let kk = Xk[2]; kk <= Tk[2]; kk++)
                for (let Ik = Xk[1]; Ik <= Tk[1]; Ik++)
                  for (let ik = Xk[0]; ik <= Tk[0]; ik++) {
                    const Xk = ik + 8 * (Ik + 8 * kk);
                    Fk[Xk >>> 5] |= 1 << (31 & Xk)
                  }
            }
            return Fk
          }(Tk);
          return function(kk) {
            return kk.every((kk => 4294967295 === kk))
          }(kk) ? hF : kk.every((kk => 0 === kk)) ? null : {
            kind: "shape",
            key: `shape:${kk.join(",")}`,
            mask: kk
          }
        }
        if (kk.wV[Fk] || !kk.yw[Fk]) return null;
        const ik = [0, 1, 2, 3, 4, 5].map((Xk => {
          const Tk = kk.lw[6 * Fk + Xk];
          let ik = Ik.get(Tk);
          return void 0 === ik && (ik = function(kk) {
            if (!kk || kk.Jw) return null;
            const {
              k_: Fk,
              F_: Ik,
              U1: Xk
            } = kk;
            if (!Fk || !Ik || !(Ik > 0) || void 0 === Xk || !(Xk >= 0)) return null;
            const Tk = Fk[0],
              ik = Ik * Ik * 4;
            if (!Tk || Tk.byteLength < ik) return null;
            const yk = Math.floor(Tk.byteLength / ik),
              lk = Fk[Math.floor(Xk / yk)];
            if (!lk) return null;
            const ak = new Uint8Array(lk.buffer, lk.byteOffset, lk.byteLength),
              qk = Xk % yk * ik;
            if (qk + ik > ak.length) return null;
            const Lk = new Uint8Array(Ik * Ik);
            let tk = !1;
            for (let Zk = 0; Zk < Lk.length; Zk++) Lk[Zk] = ak[qk + 4 * Zk + 3], tk ||= Lk[Zk] < Ia;
            return tk ? {
              alpha: Lk,
              width: Ik
            } : null
          }(kk.Hw(Tk)), Ik.set(Tk, ik)), ik
        }));
        if (ik.every((kk => null === kk))) return hF;
        const yk = Ta(Math.max(...ik.map((kk => {
            var Fk;
            return null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.width) && void 0 !== Fk ? Fk : 1
          })))),
          lk = new Uint32Array(FI(yk)).fill(4294967295),
          ak = ik.map((kk => null === kk ? lk : Xa(kk.alpha, kk.width, kk.width, yk)));
        return {
          kind: "cutout",
          key: `cutout:${yk}:${ak.map((kk=>kk.join(","))).join("|")}`,
          size: yk,
          faces: ak
        }
      }
      allocate(kk) {
        if (this.nextCaster >= II) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const Fk = this.nextCaster++;
        if (this.writeCaster(Fk, rF, 0, 0, 0), "shape" === kk.kind) {
          const Ik = this.allocateMask(kk.mask.length);
          Ik >= 0 && (this.sink(Ik, kk.mask), this.writeCaster(Fk, DF, Ik, 0, 8))
        } else if ("cutout" === kk.kind) {
          const Ik = FI(kk.size),
            Xk = this.allocateMask(6 * Ik);
          if (Xk >= 0) {
            const Tk = new Uint32Array(6 * Ik);
            kk.faces.forEach(((kk, Fk) => {
              Tk.set(kk, Fk * Ik)
            })), this.sink(Xk, Tk), this.writeCaster(Fk, kI, Xk, 0, kk.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(Fk, kk.planes).finally((() => {
          this.planesLoading--
        })));
        return Fk
      }
      async loadPlanes(kk, Fk) {
        const Ik = await Promise.all(Fk.map((kk => this.texture(kk.texture))));
        if (Ik.some((kk => null === kk))) return;
        const Xk = Ik,
          Tk = Ta(Math.max(...Xk.map((kk => Math.min(kk.width, kk.height))))),
          ik = FI(Tk),
          yk = this.allocateMask(Fk.length * (4 + ik));
        if (yk < 0) return;
        const lk = new Uint32Array(Fk.length * (4 + ik)),
          ak = 4 * Fk.length;
        Fk.forEach(((kk, Fk) => {
          const Ik = yk + ak + Fk * ik;
          lk.set(function(kk, Fk) {
            const [Ik, Xk] = kk.tangent, Tk = Math.hypot(Ik, Xk) || 1, ik = Ik / Tk, yk = Xk / Tk, lk = kk.centre[0] * yk - kk.centre[1] * ik, ak = new Uint32Array(4);
            return new Float32Array(ak.buffer, 0, 3).set([ik, yk, lk]), ak[3] = Fk, ak
          }(kk, Ik), 4 * Fk), lk.set(Xa(Xk[Fk].alpha, Xk[Fk].width, Xk[Fk].height, Tk), ak + Fk * ik)
        })), this.sink(yk, lk), this.writeCaster(kk, MF, yk, Fk.length, Tk)
      }
      texture(kk) {
        let Fk = this.textures.get(kk);
        return Fk || (Fk = this.loadTexture(kk).catch((Fk => (this.warn(`Sun shadows: no mask for ${kk}: ${Fk instanceof Error?Fk.message:String(Fk)}`), null))), this.textures.set(kk, Fk)), Fk
      }
      allocateMask(kk) {
        if (this.nextMaskWord + kk > XI) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const Fk = 32768 + this.nextMaskWord;
        return this.nextMaskWord += kk, Fk
      }
      writeCaster(kk, Fk, Ik, Xk, Tk) {
        this.sink(0 + 4 * kk, Uint32Array.of(Fk, Ik, Xk, Tk))
      }
      warnOnce(kk) {
        this.warned.has(kk) || (this.warned.add(kk), this.warn(kk))
      }
    }
    var ya = Ik(2772);

    function la(kk) {
      return !kk.Pw && !kk.Qs && !kk.Ae
    }

    function aa() {
      return {
        bricks: new Uint32Array(WF),
        cells: new Uint16Array(32768),
        special: new Uint8Array(NF)
      }
    }
    class qa {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = kk, this.writeVoxels = Fk, this.writePool = Ik, this.warn = Xk, this.eyeChunk = null, this.slotChunk = new Array(pF).fill(null), this.slotVersion = new Float64Array(pF).fill(-1), this.slotPool = new Array(pF).fill(null), this.starved = new Uint8Array(pF), this.queue = [], this.queued = new Uint8Array(pF), this.queueSorted = !0, this.freePool = new Uint32Array(TI), this.freeCount = TI, this.casterTable = null, this.warnedPool = !1, this.scratch = aa(), this.victimScratch = aa(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * pF), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let Tk = 0; Tk < TI; Tk++) this.freePool[Tk] = 65535 - Tk
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return TI - this.freeCount
      }
      chunkAdded(kk) {
        if (null === this.eyeChunk || !this.inRadius(kk.i, kk.j, kk.k)) return;
        const Fk = AF(kk.i, kk.j, kk.k);
        this.slotChunk[Fk] = kk, this.slotVersion[Fk] = -1, this.enqueue(Fk)
      }
      update(kk, Fk, Ik) {
        const Xk = this.casters.blockCaster;
        if (Xk !== this.casterTable) {
          this.casterTable = Xk;
          for (let kk = 0; kk < pF; kk++) this.slotVersion[kk] = -1, this.slotChunk[kk] && this.enqueue(kk)
        }
        const Tk = Math.floor(kk[0] / 32),
          ik = Math.floor(kk[1] / 32),
          yk = Math.floor(kk[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== Tk || this.eyeChunk[1] !== ik || this.eyeChunk[2] !== yk) && (this.eyeChunk = [Tk, ik, yk], this.follow(Fk), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let lk = 0; lk < pF; lk++) {
          const kk = this.slotChunk[lk];
          kk && (kk.Hs || kk.Me !== this.slotVersion[lk]) && this.enqueue(lk)
        }
        this.drain(Ik), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(kk, Fk) {
        this.records.set(Fk, 4 * kk), this.windowTopStale = !0, this.writeVoxels(4 * kk, Fk)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const kk = this.records;
        let Fk = -1 / 0;
        for (let Xk = 0; Xk < kk.length; Xk += 4) {
          const Ik = 255 & kk[Xk + 3];
          Ik !== RF && Ik !== UF || !this.inRadius(kk[Xk], kk[Xk + 1], kk[Xk + 2]) || (Fk = Math.max(Fk, kk[Xk + 1] * OF + (kk[Xk + 3] >>> 8)))
        }
        const Ik = Fk === -1 / 0 ? 1 : Fk + BF;
        Ik !== this.windowTop[0] && (this.windowTop[0] = Ik, this.writeVoxels(fF, this.windowTop))
      }
      follow(kk) {
        const Fk = this.eyeChunk,
          [Ik, Xk, Tk] = nF;
        for (let yk = -Tk; yk <= Tk; yk++)
          for (let Tk = -Xk; Tk <= Xk; Tk++)
            for (let Xk = -Ik; Xk <= Ik; Xk++) {
              var ik;
              const Ik = Fk[0] + Xk,
                lk = Fk[1] + Tk,
                ak = Fk[2] + yk,
                qk = AF(Ik, lk, ak),
                Lk = this.slotChunk[qk];
              if (Lk && !Lk.Hs && Lk.i === Ik && Lk.j === lk && Lk.k === ak) continue;
              const tk = null !== (ik = kk(Ik, lk, ak)) && void 0 !== ik ? ik : null;
              Lk && (Lk.i !== Ik || Lk.j !== lk || Lk.k !== ak) && this.slotPool[qk] && (this.release(qk), this.record.fill(0), this.writeRecord(qk, this.record)), this.slotChunk[qk] = tk, this.slotVersion[qk] = -1, (tk || Lk) && this.enqueue(qk)
            }
      }
      requeueStarved() {
        for (let kk = 0; kk < pF; kk++) this.starved[kk] && this.slotChunk[kk] && this.enqueue(kk)
      }
      enqueue(kk) {
        this.queued[kk] || (this.queued[kk] = 1, this.queue.push(kk), this.queueSorted = !1)
      }
      drain(kk) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const kk = new Map;
          for (const Fk of this.queue) kk.set(Fk, this.slotDistance(Fk));
          this.queue.sort(((Fk, Ik) => kk.get(Ik) - kk.get(Fk))), this.queueSorted = !0
        }
        const Fk = performance.now();
        let Ik = 0;
        const Xk = [];
        for (; this.queue.length > 0 && (0 === Ik || performance.now() - Fk < kk);) {
          const kk = this.queue.pop(),
            Fk = this.slotChunk[kk];
          !Fk || Fk.Hs || la(Fk) ? (this.queued[kk] = 0, this.encodeSlot(kk), Ik++) : Xk.push(kk)
        }
        for (let Tk = Xk.length - 1; Tk >= 0; Tk--) this.queue.push(Xk[Tk])
      }
      slotDistance(kk) {
        const Fk = this.slotChunk[kk],
          Ik = this.eyeChunk;
        return Fk ? Math.max(Math.abs(Fk.i - Ik[0]), Math.abs(Fk.j - Ik[1]), Math.abs(Fk.k - Ik[2])) : 0
      }
      inRadius(kk, Fk, Ik) {
        const Xk = this.eyeChunk,
          [Tk, ik, yk] = nF;
        return Math.abs(kk - Xk[0]) <= Tk && Math.abs(Fk - Xk[1]) <= ik && Math.abs(Ik - Xk[2]) <= yk
      }
      release(kk) {
        const Fk = this.slotPool[kk];
        if (Fk) {
          for (let kk = Fk.length - 1; kk >= 0; kk--) this.freePool[this.freeCount++] = Fk[kk];
          this.slotPool[kk] = null
        }
      }
      encodeSlot(kk) {
        var Fk, Ik, Xk, Tk, ik;
        let yk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          lk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const ak = null !== (Fk = null === (Ik = this.slotPool[kk]) || void 0 === Ik ? void 0 : Ik.length) && void 0 !== Fk ? Fk : 0;
        this.release(kk), this.starved[kk] = 0;
        const qk = this.slotChunk[kk],
          Lk = this.record;
        if (!qk || qk.Hs || !qk.GZ) return this.slotChunk[kk] = null, this.slotVersion[kk] = -1, Lk.fill(0), this.writeRecord(kk, Lk), void(ak > 0 && this.requeueStarved());
        this.slotVersion[kk] = qk.Me;
        const tk = this.encodeBricks(qk, kk, yk, lk);
        Lk[0] = qk.i, Lk[1] = qk.j, Lk[2] = qk.k, Lk[3] = tk, this.writeRecord(kk, Lk), null === (Xk = this.encoded) || void 0 === Xk || Xk.call(this, qk), lk && (null !== (Tk = null === (ik = this.slotPool[kk]) || void 0 === ik ? void 0 : ik.length) && void 0 !== Tk ? Tk : 0) < ak && this.requeueStarved()
      }
      encodeBricks(kk, Fk, Ik, Xk) {
        if (kk.Le) return bF;
        const Tk = this.casters.blockCaster,
          {
            data: ik,
            stride: yk,
            offset: lk
          } = kk.GZ,
          [ak, qk, Lk] = yk,
          tk = OF,
          {
            bricks: Zk,
            cells: jk,
            special: ek
          } = Ik;
        Zk.fill(0), ek.fill(0);
        let wk = 0,
          Hk = 0,
          Jk = 0;
        for (let xk = 0; xk < tk; xk++) {
          const Fk = xk >> 2,
            Ik = 3 & xk,
            Xk = kk.vj[xk],
            yk = Xk === ya.d ? -1 : Xk < Tk.length ? Tk[Xk] : 0;
          if (0 !== yk)
            for (let kk = 0; kk < tk; kk++) {
              const Xk = kk >> 2,
                Pk = 3 & kk;
              let Kk = lk + kk * ak + xk * qk;
              for (let kk = 0; kk < tk; kk++, Kk += Lk) {
                let lk = yk;
                if (lk < 0) {
                  const kk = ik[Kk];
                  if (lk = kk < Tk.length ? Tk[kk] : 0, 0 === lk) continue
                }
                const ak = gF(Xk, Fk, kk >> 2),
                  qk = mF(Pk, Ik, 3 & kk);
                Zk[3 * ak + (qk >>> 5)] |= 1 << (31 & qk), jk[ak * CF + qk] = lk, wk++, Jk = xk, lk === hF ? Hk++ : ek[ak] = 1
              }
            }
        }
        return 0 === wk ? bF : 32768 === Hk ? RF | Jk << 8 : (this.writePoolEntries(Fk, Ik, Xk), this.writeVoxels(cF + Fk * WF, Zk), UF | Jk << 8)
      }
      writePoolEntries(kk, Fk, Ik) {
        const {
          bricks: Xk,
          cells: Tk,
          special: ik
        } = Fk, yk = this.entry;
        let lk = 0;
        for (let Lk = 0; Lk < NF; Lk++) lk += ik[Lk];
        if (0 === lk) return;
        Ik && this.freeCount < lk && this.evictBeyond(kk, lk);
        const ak = new Uint32Array(Ik ? Math.min(lk, this.freeCount) : 0);
        let qk = 0;
        for (let Lk = 0; Lk < NF; Lk++) {
          if (!ik[Lk]) continue;
          const Ik = 3 * Lk;
          if (qk === ak.length) {
            this.dropSpecials(Fk, Lk), this.starved[kk] = 1;
            continue
          }
          const lk = this.freePool[--this.freeCount];
          ak[qk++] = lk;
          for (let kk = 0; kk < CF; kk++) {
            const Fk = Xk[Ik + (kk >>> 5)] >>> (31 & kk) & 1 ? Tk[Lk * CF + kk] : 0;
            1 & kk ? yk[kk >> 1] |= Fk << 16 : yk[kk >> 1] = Fk
          }
          Xk[Ik + 2] = lk + 1, this.writePool(iI + 32 * lk, yk)
        }
        ak.length > 0 && (this.slotPool[kk] = ak)
      }
      evictBeyond(kk, Fk) {
        const Ik = this.slotDistance(kk),
          Xk = [];
        for (let Tk = 0; Tk < pF; Tk++) Tk !== kk && this.slotPool[Tk] && this.slotDistance(Tk) > Ik && Xk.push(Tk);
        Xk.sort(((kk, Fk) => this.slotDistance(Fk) - this.slotDistance(kk)));
        for (const Tk of Xk) {
          if (this.freeCount >= Fk) return;
          const kk = this.slotChunk[Tk];
          kk && !kk.Hs && kk.GZ && (kk.Me === this.slotVersion[Tk] || la(kk)) && this.encodeSlot(Tk, this.victimScratch, !1)
        }
      }
      dropSpecials(kk, Fk) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const Ik = 3 * Fk;
        for (let Xk = 0; Xk < CF; Xk++) kk.cells[Fk * CF + Xk] !== hF && (kk.bricks[Ik + (Xk >>> 5)] &= ~(1 << (31 & Xk)))
      }
    }
    var La = Ik(37519);
    class ta {
      constructor(kk) {
        this.device = kk, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new HI, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.XZ = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = kk.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = kk.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(kk, Fk, Ik) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Xk
        } = this;
        Xk.Hj(kk, Fk), Ik.forEachSunShadowCaster((kk => {
          this.add(kk)
        })), Xk.finish();
        const Tk = 0 === Xk.parts;
        if (Tk && this.uploadedEmpty) return;
        this.uploadedEmpty = Tk;
        const {
          queue: ik
        } = this.device, {
          words: yk
        } = Xk;
        ik.writeBuffer(this.frameBuffer, 0, yk, 0, 16385), Xk.refs > 0 && ik.writeBuffer(this.frameBuffer, 65540, yk, qI, Xk.refs), Tk || ik.writeBuffer(this.frameBuffer, 327684, yk, LI, Xk.parts * aI)
      }
      add(kk) {
        const Fk = this.gridFor(kk);
        if (!Fk) return;
        const {
          frame: Ik
        } = this, {
          XZ: Xk,
          worldAt: Tk,
          instances: ik,
          instanceCount: yk,
          thin: lk
        } = kk;
        if (ik)
          for (let ak = 0; ak < yk; ak++) lk ? (xI(ik, 16 * ak, Xk, Tk, this.XZ), Ik.add(Fk, this.XZ)) : Ik.add(Fk, ik, 16 * ak);
        else Ik.add(Fk, Xk, Tk)
      }
      gridFor(kk) {
        let {
          geometry: Fk,
          indexed: Ik,
          first: Xk,
          count: Tk,
          skip: ik
        } = kk, yk = this.grids.get(Fk);
        yk || (yk = new Map, this.grids.set(Fk, yk));
        const lk = `${Ik?Xk:-1-Xk}:${Tk}:${null!==ik&&void 0!==ik?ik:""}`;
        let ak = yk.get(lk);
        if (void 0 !== ak || this.gridsFull) return ak;
        const qk = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = qk + 2;
        else if (qk > this.bakeDeadline) return;
        return ak = this.bake(Fk, Ik, Xk, Tk, ik), void 0 !== ak && yk.set(lk, ak), ak
      }
      bake(kk, Fk, Ik, Xk, Tk) {
        const ik = kk.vertexAttributes.find((kk => "position" === kk.kind)),
          yk = ik ? function(kk, Fk, Ik, Xk) {
            let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const ik = kk => Fk ? Fk[Ik + kk] : Ik + kk,
              yk = kk => null !== Tk && [0, 1, 2].some((Fk => {
                const Ik = ik(kk + Fk);
                return Ik >= Tk[0] && Ik < Tk[1]
              })),
              lk = [1 / 0, 1 / 0, 1 / 0],
              ak = [-1 / 0, -1 / 0, -1 / 0];
            for (let xk = 0; xk + 2 < Xk; xk += 3)
              if (!yk(xk))
                for (let Fk = 0; Fk < 3; Fk++) {
                  const Ik = ik(xk + Fk);
                  for (let Fk = 0; Fk < 3; Fk++) lk[Fk] = Math.min(lk[Fk], kk[3 * Ik + Fk]), ak[Fk] = Math.max(ak[Fk], kk[3 * Ik + Fk])
                }
            const qk = Math.max(ak[0] - lk[0], ak[1] - lk[1], ak[2] - lk[2]);
            if (!(qk > 0)) return null;
            const Lk = qk / 64,
              tk = [0, 0, 0],
              Zk = [0, 0, 0],
              jk = [0, 0, 0];
            for (let xk = 0; xk < 3; xk++) tk[xk] = Math.min(65, Math.ceil((ak[xk] - lk[xk]) / Lk) + 1), Zk[xk] = lk[xk] - Lk / 2, jk[xk] = Zk[xk] + tk[xk] * Lk;
            const ek = new Uint32Array(Math.ceil(tk[0] * tk[1] * tk[2] / 32)),
              wk = new Float64Array(9),
              Hk = [0, 0, 0],
              Jk = [0, 0, 0];
            for (let xk = 0; xk + 2 < Xk; xk += 3)
              if (!yk(xk)) {
                for (let Fk = 0; Fk < 3; Fk++) {
                  const Ik = ik(xk + Fk);
                  for (let Xk = 0; Xk < 3; Xk++) wk[3 * Fk + Xk] = kk[3 * Ik + Xk]
                }
                for (let kk = 0; kk < 3; kk++) {
                  const Fk = Math.min(wk[kk], wk[3 + kk], wk[6 + kk]),
                    Ik = Math.max(wk[kk], wk[3 + kk], wk[6 + kk]);
                  Hk[kk] = Math.max(0, Math.floor((Fk - Zk[kk]) / Lk - 1e-6)), Jk[kk] = Math.min(tk[kk] - 1, Math.floor((Ik - Zk[kk]) / Lk + 1e-6))
                }
                for (let kk = Hk[2]; kk <= Jk[2]; kk++)
                  for (let Fk = Hk[1]; Fk <= Jk[1]; Fk++)
                    for (let Ik = Hk[0]; Ik <= Jk[0]; Ik++)
                      if (PI(wk, Zk[0] + (Ik + .5) * Lk, Zk[1] + (Fk + .5) * Lk, Zk[2] + (kk + .5) * Lk, Lk / 2)) {
                        const Xk = Ik + tk[0] * (Fk + tk[1] * kk);
                        ek[Xk >>> 5] |= 1 << (31 & Xk)
                      }
              } return {
              words: ek,
              lo: Zk,
              hi: jk,
              cell: Lk,
              dims: tk
            }
          }((0, La.i)(ik, kk.vertexCount), Fk ? kk.indexData : null, Ik, Xk, Tk) : null;
        if (!yk) return null;
        const {
          words: lk,
          ...ak
        } = yk;
        if (this.gridTop + lk.length > ZI) return void(this.gridsFull = !0);
        const qk = this.gridTop;
        return this.gridTop += lk.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * qk, lk), {
          ...ak,
          at: qk
        }
      }
    }
    const Za = Math.cos(1 * Math.PI / 180);

    function ja(kk, Fk) {
      return kk[0] * Fk[0] + kk[1] * Fk[1] + kk[2] * Fk[2] < Za
    }
    async function ea(kk) {
      const {
        pixels: Fk,
        width: Ik,
        height: Xk
      } = await CT(kk), Tk = new Uint8Array(Ik * Xk);
      for (let ik = 0; ik < Tk.length; ik++) Tk[ik] = Fk[4 * ik + 3];
      return {
        width: Ik,
        height: Xk,
        alpha: Tk
      }
    }
    class wa {
      constructor(kk, Fk) {
        this.device = kk, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(QI.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = kk.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = kk.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * dF,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = kk.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [Ik, Xk, Tk] = QI.o;
        this.volume = kk.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: Ik,
            height: Xk,
            depthOrArrayLayers: Tk
          },
          dimension: "3d",
          format: "rgba8unorm",
          usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING
        }), this.volumeView = this.volume.createView({
          label: "sun-shadow-volume"
        }), this.volumeSampler = kk.createSampler({
          label: "sun-shadow-volume",
          magFilter: "linear",
          minFilter: "linear",
          addressModeU: "repeat",
          addressModeV: "repeat",
          addressModeW: "repeat"
        }), this.work = kk.createBuffer({
          label: "sun-shadow-volume-work",
          size: QI.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = Fk ? new ta(kk) : null, this.entityStandIn = Fk ? null : kk.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var kk, Fk;
        const Ik = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || Ik.push("Lite sun shadow volume pipeline compiling");
        const Xk = null !== (kk = null === (Fk = this.casters) || void 0 === Fk ? void 0 : Fk.planesLoading) && void 0 !== kk ? kk : 0;
        return Xk > 0 && Ik.push(`${Xk} Lite sun shadow plane casters loading their textures`), Ik
      }
      entries() {
        var kk, Fk, Ik, Xk;
        const Tk = vF.q;
        return [{
          binding: Tk.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: Tk.GZ,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: Tk.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: Tk.volume,
          resource: this.volumeView
        }, {
          binding: Tk.sampler,
          resource: this.volumeSampler
        }, {
          binding: Tk.entities,
          resource: {
            buffer: null !== (kk = null === (Fk = this.entities) || void 0 === Fk ? void 0 : Fk.frameBuffer) && void 0 !== kk ? kk : this.entityStandIn
          }
        }, {
          binding: Tk.entityGrids,
          resource: {
            buffer: null !== (Ik = null === (Xk = this.entities) || void 0 === Xk ? void 0 : Xk.gridBuffer) && void 0 !== Ik ? Ik : this.entityStandIn
          }
        }]
      }
      prepare(kk, Fk, Ik) {
        var Xk;
        this.entitiesThisFrame = !1;
        const Tk = null !== (Xk = null === Ik || void 0 === Ik ? void 0 : Ik.sunShadowReach()) && void 0 !== Xk ? Xk : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!Ik || !Tk.sunShadow && !Tk.airShadow) return void(this.volumeHolds = null);
        if (kk.XZ.xkk !== OF) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${kk.XZ.xkk}; everything is lit.`)));
        const ik = this.start(kk);
        this.casters.update(kk.yj, kk.yj.Lj.length);
        const yk = kk.SZ;
        for (let Zk = 0; Zk < 3; Zk++) this.eye[Zk] = Fk[Zk] + yk[Zk];
        const lk = (0, QI.x)(this.eye);
        this.staleNear = lk;
        const ak = kk.XZ.Qw;
        ik.update(this.eye, ((kk, Fk, Ik) => ak.sw(kk, Fk, Ik)), 1);
        const qk = (0, QI.s)(Ik.Fkk()),
          Lk = ik.eyeChunk,
          tk = this.uniformInts;
        for (let Zk = 0; Zk < 3; Zk++) tk[Zk] = Lk[Zk], tk[4 + Zk] = lk[Zk];
        this.entitiesThisFrame = null !== this.entities && Tk.sunShadow, this.entitiesThisFrame && wI(this.uniformFloats, 8, Fk, qk), null !== this.volumeHolds && (this.castersWritten || ja(qk, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(lk, qk, Lk)
      }
      markStale(kk) {
        const Fk = this.staleNear,
          Ik = OF,
          Xk = [kk.i * Ik, kk.j * Ik, kk.k * Ik];
        for (let ik = 0; ik < 3; ik++)
          if (Xk[ik] + Ik <= Fk[ik] - Ik || Xk[ik] >= Fk[ik] + QI.o[ik] + Ik) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const Tk = this.stale;
        for (let ik = 0; ik < Tk.length; ik += 4)
          if (Tk[ik] === kk.i && Tk[ik + 1] === kk.j && Tk[ik + 2] === kk.k) return void(Tk[ik + 3] = this.swept);
        if (16 === Tk.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        Tk.push(kk.i, kk.j, kk.k, this.swept)
      }
      writeStale() {
        const kk = this.swept,
          Fk = this.stale;
        this.staleAll && kk - this.staleAllSwept >= QI.h && (this.staleAll = !1, Fk.length = 0);
        let Ik = 0;
        for (let Tk = 0; Tk < Fk.length; Tk += 4)
          if (kk - Fk[Tk + 3] < QI.h) {
            for (let kk = 0; kk < 4; kk++) Fk[Ik + kk] = Fk[Tk + kk];
            Ik += 4
          } Fk.length = Ik;
        const Xk = this.uniformInts;
        Xk[3] = this.staleAll ? 5 : Ik / 4;
        for (let Tk = 0; Tk < 4; Tk++)
          for (let kk = 0; kk < 3; kk++) Xk[16 + 4 * Tk + kk] = 4 * Tk < Ik ? Fk[4 * Tk + kk] * OF : 0
      }
      writeUniform() {
        const kk = this.uniformInts;
        let Fk = this.uniformWritten;
        if (Fk) {
          let Ik = !0;
          for (let Xk = 0; Xk < kk.length && Ik; Xk++) Ik = kk[Xk] === Fk[Xk];
          if (Ik) return
        }
        Fk ??= this.uniformWritten = new Int32Array(kk.length), Fk.set(kk), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(kk) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, kk)
      }
      computeVolume(kk, Fk, Ik) {
        const Xk = this.buildVolumePass();
        if (!Xk) return void(this.volumeHolds = null);
        const Tk = (0, QI.u)(this.volumeHolds, kk);
        this.volumeHolds = kk;
        const ik = 1 === Tk.length && Tk[0].size.every(((kk, Fk) => kk === QI.o[Fk])),
          yk = this.sweptChunk,
          lk = this.sweptLight,
          ak = Fk[0] !== lk[0] || Fk[1] !== lk[1] || Fk[2] !== lk[2],
          qk = Ik[0] !== yk[0] || Ik[1] !== yk[1] || Ik[2] !== yk[2],
          Lk = ak && ja(Fk, lk);
        if ((ik || this.written || qk || Lk) && (this.fastLeft = QI.h), ik || this.written || ak || qk) {
          this.written = !1;
          for (let kk = 0; kk < 3; kk++) yk[kk] = Ik[kk], lk[kk] = Fk[kk];
          this.sweepLeft = ik ? 0 : QI.h
        }
        if (ik ? this.swept += QI.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Tk.push(...(0, QI.y)(kk, this.slice)), this.slice = (this.slice + 1) % QI.h, this.swept++), 0 === Tk.length) return;
        const tk = (0, QI.A)(this.workData, Fk, Tk);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const Zk = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          jk = Zk.beginComputePass({
            label: "sun-shadow-volume"
          });
        jk.setPipeline(Xk.pipeline), jk.setBindGroup(zI.group, Xk.bindGroup), jk.dispatchWorkgroups(Math.ceil(tk / QI.k)), jk.end(), this.device.queue.submit([Zk.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const kk = zI,
          Fk = GPUShaderStage.COMPUTE,
          Ik = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: kk.uniform,
              visibility: Fk,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: kk.GZ,
              visibility: Fk,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: kk.special,
              visibility: Fk,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: kk.work,
              visibility: Fk,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: kk.volume,
              visibility: Fk,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Xk = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: Ik,
            entries: [{
              binding: kk.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: kk.GZ,
              resource: {
                buffer: this.voxelBuffer
              }
            }, {
              binding: kk.special,
              resource: {
                buffer: this.special
              }
            }, {
              binding: kk.work,
              resource: {
                buffer: this.work
              }
            }, {
              binding: kk.volume,
              resource: this.volumeView
            }]
          });
        return this.device.createComputePipelineAsync({
          label: "sun-shadow-volume",
          layout: this.device.createPipelineLayout({
            label: "sun-shadow-volume",
            bindGroupLayouts: [Ik]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: SI()
            }),
            entryPoint: "main"
          }
        }).then((kk => {
          this.volumePass = {
            pipeline: kk,
            bindGroup: Xk
          }
        }), (kk => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(kk)}`)
        })), null
      }
      start(kk) {
        if (this.window) return this.window;
        const Fk = (kk, Fk) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * kk, Fk)
        };
        this.casters = new ia(((kk, Ik) => {
          this.castersWritten = !0, Fk(kk, Ik)
        }), ea);
        const Ik = new qa(this.casters, ((kk, Fk) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * kk, Fk)
        }), Fk);
        return Ik.encoded = kk => {
          this.markStale(kk)
        }, kk.XZ.on("chunkAdded", (kk => {
          Ik.chunkAdded(kk)
        })), this.window = Ik, Ik
      }
    }
    var Ha = Ik(38691),
      Ja = Ik(38700);
    const xa = 0,
      Pa = 3,
      Ka = 4,
      Qa = 5;

    function sa(kk, Fk, Ik, Xk) {
      kk.drawOffset(Fk, Xk + xa), Fk[Xk + Pa] = kk.drawTime(), Ik[Xk + Ka] = kk.ring.drawStart(), Ik[Xk + Qa] = kk.ring.drawCount()
    }
    const Va = `\n${HX}\n\nconst MAX_STOPS = ${Ja.c}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Ja.c/4}>,\n\tcolor1: array<vec4f, ${Ja.c}>,\n\tcolor2: array<vec4f, ${Ja.c}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${Ja.c}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${Ja.c}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var za = Ik(41612);
    class Sa {
      constructor(kk, Fk, Ik, Xk) {
        this.device = kk, this.system = Fk, this.frameIndex = Ik, this.bindings = Xk, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, za.e)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (kk, Fk) => {
          this.device.queue.writeBuffer(this.ring, kk * Ja.f * 4, this.system.ring.records, kk * Ja.f, (Fk - kk) * Ja.f)
        };
        const {
          name: Tk
        } = Fk;
        this.ring = kk.createBuffer({
          label: `particles-${Tk}`,
          size: Fk.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = kk.createBuffer({
          label: `particles-uniforms-${Tk}`,
          size: 4 * Ja.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(kk) {
        const Fk = (0, za.d)(this.system, this.uniformBits, kk);
        Fk && (this.uniformBits = Fk, this.device.queue.writeBuffer(this.uniforms, 0, Fk))
      }
      bind() {
        const {
          system: kk
        } = this, Fk = this.texture;
        (0, za.i)(kk, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${kk.name}`,
          size: [Ja.j, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * Ja.j
        }, [Ja.j, 1]));
        const Ik = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === Fk.view && this.boundSampler === Fk.sampler && this.boundRamp === Ik || (this.boundView = Fk.view, this.boundSampler = Fk.sampler, this.boundRamp = Ik, this.bindGroup = this.device.createBindGroup({
          label: `particles-${kk.name}`,
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
            resource: Fk.sampler
          }, {
            binding: 3,
            resource: Fk.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: Ik
          }]
        }))
      }
      destroy() {
        var kk;
        this.ring.destroy(), this.uniforms.destroy(), null === (kk = this.ramp) || void 0 === kk || kk.destroy()
      }
    }
    class oa {
      constructor(kk, Fk) {
        this.device = kk, this.resources = Fk, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, LF.d)();
        const Ik = kk.createBindGroupLayout({
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
        this.frameLayout = kk.createBindGroupLayout({
          label: "particles-frame",
          entries: [{
            binding: 0,
            visibility: GPUShaderStage.VERTEX,
            buffer: {
              type: "uniform",
              hasDynamicOffset: !0
            }
          }]
        }), this.pipelineLayout = kk.createPipelineLayout({
          bindGroupLayouts: [IF(kk), Ik, this.frameLayout]
        }), this.module = kk.createShaderModule({
          label: "particles",
          code: Va
        });
        const Xk = kk.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        kk.queue.writeTexture({
          texture: Xk
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: Ik,
          rampSampler: kk.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Xk.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (Fk, Ik) => (this.bindTarget(Ik), {
            renderable: this.renderable,
            pipeline: lF(kk, Ik),
            draw: kk => Ik === this.preparedTarget ? this.draw(kk) : 0
          })
        }
      }
      get FTk() {
        return this.systems.size
      }
      reset() {
        for (const kk of this.systems.keys()) kk.reset()
      }
      describePendingWork() {
        return (0, Ha.g)(this.systems.keys(), "Lite")
      }
      kR(kk, Fk) {
        const Ik = new Ha.c(kk, Fk, this);
        return this.systems.set(Ik, new Sa(this.device, Ik, this.allocateFrameIndex(), this.bindings)), Ik
      }
      y5(kk, Fk) {
        for (const Ik of this.systems.keys()) Ik.y5(kk, Fk)
      }
      canDraw(kk) {
        const Fk = this.systems.get(kk),
          Ik = kk.texture ? this.resources.boundTexture(kk.texture) : null;
        if (!Fk || !Ik || !this.targetPipelines) return !1;
        if (Fk.texture = Ik, Fk.pipelines.length = 0, !BT(kk.blendMode)) return this.warnOnce(`blend:${kk.blendMode}`, `particle blend mode ${kk.blendMode} is not drawn (${kk.name})`), !0;
        const Xk = (0, OT.l)(kk.blendMode);
        for (const Tk of Xk) {
          const kk = this.pipelineFor(Tk);
          if (!1 === kk) return Fk.pipelines.length = 0, !0;
          kk && Fk.pipelines.push(kk)
        }
        return Fk.pipelines.length === Xk.length
      }
      disposeStopped(kk) {
        kk.dispose()
      }
      remove(kk) {
        const Fk = this.systems.get(kk);
        Fk && (this.systems.delete(kk), Fk.destroy(), this.freeFrameIndices.push(Fk.frameIndex))
      }
      prepare(kk) {
        const Fk = kk.animationRatio || 1;
        aF(this.renderable._worldCenter, kk, TF), this.preparedTarget = this.target, this.draws.length = 0;
        let Ik = 0;
        for (const Xk of this.systems.values()) {
          const kk = Xk.system;
          if (!kk.animateIfActive(Fk)) continue;
          if (kk.ring.takeUploads(Xk.upload), !kk.hasLiveParticles() || 0 === Xk.pipelines.length) continue;
          Xk.writeUniforms(this.warnOnce), Xk.bind();
          const Tk = 64 * Xk.frameIndex;
          Xk.count = kk.ring.drawCount(), sa(kk, this.frameData, this.frameBits, Tk), Ik = Math.max(Ik, Tk + 64), this.draws.push(Xk)
        }
        Ik > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, Ik)
      }
      draw(kk) {
        let Fk = 0,
          Ik = null;
        for (const Xk of this.draws) {
          kk.setBindGroup(1, Xk.bindGroup), kk.setBindGroup(2, this.frameBindGroup, [256 * Xk.frameIndex]);
          for (const Tk of Xk.pipelines) Tk !== Ik && (kk.setPipeline(Tk), Ik = Tk), kk.draw(4, Xk.count), Fk++
        }
        return Fk
      }
      bindTarget(kk) {
        this.target = kk;
        const Fk = `${kk._colorFormat}|${kk._depthStencilFormat}|${kk._depthCompare}|${kk._sampleCount}`;
        let Ik = this.pipelines.get(Fk);
        Ik || (Ik = new Map, this.pipelines.set(Fk, Ik)), this.targetPipelines = Ik
      }
      pipelineFor(kk) {
        var Fk;
        const Ik = this.targetPipelines,
          Xk = Ik.get(kk);
        if (void 0 !== Xk) return Xk;
        Ik.set(kk, null);
        const Tk = this.target,
          ik = kk === OT.b,
          yk = null !== (Fk = Tk._depthCompare) && void 0 !== Fk ? Fk : XF;
        return this.device.createRenderPipelineAsync({
          label: `particles-${kk}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Dk({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: ik ? 1 : 0
            }
          }, Tk, dT((0, OT.h)(kk))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: Tk._depthStencilFormat ? {
            format: Tk._depthStencilFormat,
            depthCompare: yk,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: Tk._sampleCount
          }
        }).then((Fk => {
          Ik.set(kk, Fk)
        }), (Fk => {
          Ik.set(kk, !1), console.error("Lite particle pipeline failed", Fk), gT("particles", `blend-${kk}`, Fk)
        })), null
      }
      allocateFrameIndex() {
        const kk = this.freeFrameIndices.pop();
        if (void 0 !== kk) return kk;
        const Fk = this.nextFrameIndex++;
        if (64 * (Fk + 1) > this.frameData.length) {
          const kk = new Float32Array(2 * this.frameData.length);
          kk.set(this.frameData), this.frameData = kk, this.frameBits = new Uint32Array(kk.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return Fk
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
    class va {
      constructor(kk, Fk, Ik, Xk, Tk) {
        this.lite = kk, this.canvas = Fk, this.info = Ik, this.resources = Tk, this.IXk = !1, this.needPOTTextures = !1, this.p_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = Fk.width, this.renderHeight = Fk.height, this.caps = {
          maxTextureSize: Xk.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Xk.maxTextureArrayLayers
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
      setSize(kk, Fk) {
        if (this.renderWidth === kk && this.renderHeight === Fk) return !1;
        const Ik = this.renderWidth,
          Xk = this.renderHeight;
        this.renderWidth = kk, this.renderHeight = Fk;
        try {
          (0, Wk.s)(this.lite, kk, Fk)
        } catch (Tk) {
          if (Tk instanceof DOMException && "InvalidStateError" === Tk.name) {
            this.renderWidth = Ik, this.renderHeight = Xk;
            try {
              (0, Wk.s)(this.lite, Ik, Xk)
            } catch {
              this.canvas.width = Ik, this.canvas.height = Xk
            }
            return console.warn("WebGPU could not allocate render targets for resize", kk, Fk, Tk.message), !1
          }
          throw Tk
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
      Zx() {
        const kk = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : kk - this.lastFrameTime, this.lastFrameTime = kk
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(kk, Fk) {
        const Ik = document.createElement("canvas");
        return Ik.width = kk, Ik.height = Fk, Ik
      }
      U_(kk, Fk) {
        var Ik;
        return null !== (Ik = this.resources.U_.get(kk)) && void 0 !== Ik ? Ik : new Yk(this.resources, kk, Fk)
      }
      atlasArray(kk, Fk, Ik) {
        return this.resources.atlasArray(kk, Fk, Ik)
      }
    }
    class Ea {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(kk) {
        this.fov = kk.fov, this.nearPlane = kk.near, this.farPlane = kk.far;
        const Fk = kk.worldMatrix;
        for (let Ik = 0; Ik < 16; Ik++)
          if (this.worldMatrix[Ik] !== Fk[Ik]) return this.worldMatrix.set(Fk), void this.worldMatrixVersion++
      }
    }
    class Oa {
      constructor(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
        let Lk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = kk, this.Yw = Fk, this.sceneTask = Ik, this.gpuDevice = Xk, this.terrain = Tk, this.meshes = ik, this.particles = yk, this.resources = lk, this.sunShadow = Lk, this.NFk = void 0, this.backendName = "WebGPU (Lite)", this.T6 = void 0, this.modelMeshes = void 0, this.camera = new Ea, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Bk(Xk.lost), this.deviceLost = this.refusals.deviceLost, this.NFk = new va(kk, ak, qk, Xk.limits, lk), (0, Ek.C)({
          eq: kk => {
            pk(kk) && lk.textureSlot(kk)
          },
          loaded: kk => pk(kk) ? lk.textureLoaded(kk) : null,
          canvasUpdated: (kk, Fk, Ik) => {
            pk(kk) && lk.canvasUpdated(kk, Fk, Ik)
          }
        }), this.T6 = ik.T6, this.modelMeshes = ik.modelMeshes, Fk.camera = this.camera
      }
      get castsEntitySunShadows() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.sunShadow) || void 0 === Fk ? void 0 : Fk.tracesEntities) && void 0 !== kk && kk
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(kk) {
        this.modelMeshes.attach(kk.model, kk.sceneMirror);
        const Fk = kk.Yw;
        this.setClearColour(Fk.clearColor.r, Fk.clearColor.g, Fk.clearColor.b), Fk.draw = () => {
          this.drawFrame(kk, Fk)
        }
      }
      render(kk) {
        if (!this.refusals.lost) {
          try {
            this.NFk.Zx(), kk.Yw.render()
          } catch (Fk) {
            throw this.refusals.frameFailed(Fk), Fk
          }
          this.refusals.frameDrawn()
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var kk, Fk, Ik, Xk;
        const Tk = [...this.particles.describePendingWork(), ...null !== (kk = null === (Fk = this.sunShadow) || void 0 === Fk ? void 0 : Fk.describePendingWork()) && void 0 !== kk ? kk : []],
          ik = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (Ik = this.terrain.sceneDepth) && void 0 !== Ik && Ik.compiling ? 1 : 0) + (null !== (Xk = this.terrain.shadowMask) && void 0 !== Xk && Xk.compiling ? 1 : 0);
        ik > 0 && Tk.push(`${ik} Lite pipelines compiling`);
        const yk = this.terrain.buffersAwaitingVerdict;
        yk > 0 && Tk.push(`${yk} Lite terrain buffers awaiting their out-of-memory verdict`);
        const lk = this.resources.texturesLoading;
        return lk > 0 && Tk.push(`${lk} Lite textures loading`), Tk
      }
      prepareTexture(kk) {
        return null !== this.resources.boundTexture(kk) || this.resources.textureFailed(kk)
      }
      drawFrame(kk, Fk) {
        var Ik, Xk, Tk, ik, yk, lk;
        const ak = el(kk);
        this.camera.copyFromView(ak), this.setClearColour(ak.clearColour[0], ak.clearColour[1], ak.clearColour[2]), null === (Ik = this.sunShadow) || void 0 === Ik || Ik.prepare(kk.qZ, ak.eye, null !== (Xk = kk.qZ.ke) && void 0 !== Xk ? Xk : null), this.terrain.prepare(kk, ak), null === (Tk = this.terrain.sceneDepth) || void 0 === Tk || Tk.setPlanes(ak.near, ak.far), null === (ik = this.terrain.shadowMask) || void 0 === ik || ik.prepare(ak), My(this.sceneTask), this.meshes.prepare(Fk, ak, kk.model.earthSky, null !== (yk = kk.qZ.ke) && void 0 !== yk ? yk : null), this.particles.prepare(ak);
        const qk = performance.now();
        this.resources.flushUploads(), null === (lk = this.sunShadow) || void 0 === lk || lk.traceEntities(this.meshes);
        try {
          (0, Wk.o)(this.engine, this.lastFrameTime > 0 ? qk - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = qk
      }
      setClearColour(kk, Fk, Ik) {
        const Xk = this.Yw.clearColor;
        Xk.r = kk, Xk.g = Fk, Xk.b = Ik, Xk.a = 1
      }
    }
    const na = "WebGPU device lost while Lite was starting";

    function Ga(kk, Fk) {
      return "object" === typeof kk && null !== kk ? Object.assign(kk, {
        startStep: Fk
      }) : kk
    }
    async function pa(kk, Fk) {
      const Ik = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!Ik) throw Ga(new Error("No WebGPU adapter"), "no_adapter");
      const Xk = Ik.info,
        Tk = {
          vendor: (null === Xk || void 0 === Xk ? void 0 : Xk.vendor) || "unknown vendor",
          renderer: (null === Xk || void 0 === Xk ? void 0 : Xk.architecture) || "unknown renderer",
          version: (null === Xk || void 0 === Xk ? void 0 : Xk.description) || "unknown version"
        },
        ik = function(kk) {
          const Fk = {};
          for (const Ik in kk.limits) {
            const Xk = kk.limits[Ik];
            "number" === typeof Xk && (Fk[Ik] = Xk)
          }
          return Fk
        }(Ik);
      let yk;
      kk.style.background = "black";
      try {
        yk = await (0, Wk.g)(kk, {
          msaaSamples: Fk.JIk ? 4 : 1,
          requiredLimits: ik,
          alphaMode: "premultiplied"
        })
      } catch (Lk) {
        throw Ga(Lk, "#47" === (null === (lk = Lk) || void 0 === lk ? void 0 : lk.message) ? "no_adapter" : "device")
      }
      var lk;
      null !== Fk.bufferSize && (0, Wk.s)(yk, Fk.bufferSize.width, Fk.bufferSize.height);
      const ak = function(kk) {
        return kk._device
      }(yk);
      let qk = null;
      ak.lost.then((kk => {
        qk = kk, console.error(`WebGPU device lost (${kk.reason}): ${kk.message}`)
      }));
      try {
        const Ik = await async function(kk, Fk, Ik, Xk, Tk, ik) {
          const yk = (0, fk.c)(kk),
            lk = new hy(kk, Fk),
            ak = new rl(Fk),
            qk = new Gy(Fk, lk, (kk => function(kk, Fk) {
              for (const Xk of kF(kk)) {
                var Ik;
                if (Xk._targetSignature === Fk) return null !== (Ik = Xk._sceneBG) && void 0 !== Ik ? Ik : null
              }
              return null
            }(yk, kk))),
            Lk = new oa(Fk, lk);
          for (const jk of function(kk, Fk, Ik) {
              return [Fk.opaqueRenderable, kk.opaqueRenderable, kk.skyLastRenderable, Ik.renderable, Fk.transparentRenderable, kk.transparentRenderable, kk.frontRenderable]
            }(qk, ak, Lk)) Mk(yk, jk);
          const tk = function(kk) {
            for (const Fk of kF(kk))
              if ("Yw" === Fk.name) return Fk;
            throw new Error("Lite: the scene has no render task named scene")
          }(yk);
          Tk && ak.installSceneDepth(tk, kk);
          const Zk = ik ? new wa(Fk, ik.entities) : null;
          ak.sunShadow = Zk, Zk && null !== ik && void 0 !== ik && ik.entities && (ak.shadowMask = new Ol(Fk, tk, kk, ak));
          return qk.sunShadow = Zk, await (0, fk.e)(yk), new Oa(kk, yk, tk, Fk, ak, qk, Lk, lk, Ik, Xk, Zk)
        }(yk, ak, kk, Tk, Fk.sceneDepth, Fk.sunShadow);
        if (null !== qk) {
          const {
            reason: kk,
            message: Fk
          } = qk;
          throw Object.assign(new Error(`${na} (${kk}): ${Fk}`), {
            fallbackReason: na
          })
        }
        return Ik
      } catch (Lk) {
        throw ak.destroy(), null === qk ? Lk : Ga(Lk, "device")
      }
    }
  },
  40708: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => jk,
      G: () => ek,
      e: () => Tk,
      h: () => Xk,
      i: () => Zk,
      k: () => Lk,
      l: () => Hk,
      m: () => ik,
      q: () => lk,
      s: () => ak,
      v: () => yk,
      y: () => wk
    });
    const Xk = 3,
      Tk = 0,
      ik = 1,
      yk = 2,
      lk = {
        uniform: 3,
        GZ: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      ak = 10,
      qk = "BloxdPackInputs",
      Lk = "bloxdPackInputs",
      tk = [{
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
      Zk = 80;

    function jk() {
      const kk = tk.map((kk => {
        let {
          name: Fk,
          type: Ik
        } = kk;
        return `    ${Fk}: ${Ik},\n`
      })).join("");
      return `struct ${qk} {\n${kk}}\n@group(${Xk}) @binding(${Tk}) var<uniform> ${Lk}: ${qk};\n`
    }

    function ek(kk, Fk) {
      const Ik = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, Zk),
        [Xk, Tk, ik, yk, lk, ak] = tk;
      Ik.setFloat32(Xk.offset, Fk.seconds, !0), Ik.setUint32(Tk.offset, Fk.lit ? 1 : 0, !0);
      for (let qk = 0; qk < 3; qk++) Ik.setInt32(ik.offset + 4 * qk, Fk.renderOffset[qk], !0), Ik.setFloat32(yk.offset + 4 * qk, Fk.Fkk[qk], !0), Ik.setFloat32(lk.offset + 4 * qk, Fk.eyePosition[qk], !0), Ik.setFloat32(ak.offset + 4 * qk, Fk.shadowDirection[qk], !0)
    }

    function wk(kk) {
      const Fk = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, Ik) => {
        let {
          id: Xk,
          rotation: Tk
        } = kk;
        Fk[Ik] = 65535 & Xk | (3 & Tk) << 16
      })), Fk
    }
    const Hk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);