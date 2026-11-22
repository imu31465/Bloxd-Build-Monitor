export const id = 266;
export const ids = [266];
export const modules = {
  41177: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => wk,
      f: () => rk,
      j: () => bk,
      n: () => mk
    });
    var Dk = ik(36868),
      fk = ik(38294),
      Sk = ik(38287);

    function bk(kk, ek, ik, Dk) {
      const fk = Sk.t;
      ek.fill(0), kk.gravity.toArray(ek, fk.gravity), kk.colorDead.toArray(ek, fk.colorDead), ik[fk.ramp] = kk.useRampGradients ? 1 : 0;
      const bk = kk.getColorGradients(),
        rk = xk(kk, bk, "colour", Dk);
      ik[fk.colorCount] = rk;
      for (let Sk = 0; Sk < rk; Sk++) {
        var Pk;
        const kk = bk[nk(bk, Sk)];
        ek[fk.colorPositions + Sk] = kk.gradient, kk.color1.toArray(ek, fk.color1 + 4 * Sk), (null !== (Pk = kk.color2) && void 0 !== Pk ? Pk : kk.color1).toArray(ek, fk.color2 + 4 * Sk)
      }
      const mk = kk.getVelocityGradients(),
        Mk = xk(kk, mk, "Cw", Dk);
      ik[fk.velocityCount] = Mk;
      for (let Sk = 0; Sk < Mk; Sk++) pk(ek, fk.Cw + 4 * Sk, mk[nk(mk, Sk)]);
      const Kk = kk.useRampGradients ? kk.getColorRemapGradients() : null,
        Uk = xk(kk, Kk, "colour remap", Dk);
      ik[fk.remapCount] = Uk;
      for (let Sk = 0; Sk < Uk; Sk++) pk(ek, fk.remap + 4 * Sk, Kk[nk(Kk, Sk)])
    }

    function rk() {
      return {
        key: [],
        texels: new Uint8Array(4 * Sk.k)
      }
    }
    const Pk = [];

    function mk(kk, ek) {
      return Mk(kk, Pk), !lk(Pk, ek.key) && (ek.key.length = 0, ek.key.push(...Pk), ek.key.length > 0 && function(kk, ek) {
        for (let ik = 0; ik < Sk.k; ik++) fk.m.GetCurrentGradient(ik / Sk.k, kk, ((kk, ek, ik) => {
          Dk.Color3.LerpToRef(kk.color, ek.color, ik, Kk)
        })), ek[4 * ik] = 255 * Kk.r, ek[4 * ik + 1] = 255 * Kk.g, ek[4 * ik + 2] = 255 * Kk.b, ek[4 * ik + 3] = 255
      }(kk.getRampGradients(), ek.texels), !0)
    }

    function Mk(kk, ek) {
      ek.length = 0;
      const ik = kk.useRampGradients ? kk.getRampGradients() : null;
      if (null !== ik && void 0 !== ik && ik.length) {
        ek.push(ik.length);
        for (const kk of ik) ek.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
      }
    }
    const Kk = new Dk.Color3;

    function xk(kk, ek, ik, Dk) {
      return ek ? ek.length > Sk.b ? (Dk(`particleStops:${ik}`, `GPU particles use the first 2 and last ${Sk.b-2} of more than ${Sk.b} ${ik} gradient stops (${kk.name})`), Sk.b) : ek.length : 0
    }

    function nk(kk, ek) {
      return ek < 2 || kk.length <= Sk.b ? ek : kk.length - Sk.b + ek
    }
    const Uk = new Float32Array(Sk.p),
      Hk = new Uint32Array(Uk.buffer);

    function wk(kk, ek, ik) {
      return bk(kk, Uk, Hk, ik), ek && lk(Hk, ek) ? null : Hk.slice()
    }

    function lk(kk, ek) {
      if (kk.length !== ek.length) return !1;
      for (let ik = 0; ik < kk.length; ik++)
        if (kk[ik] !== ek[ik]) return !1;
      return !0
    }

    function pk(kk, ek, ik) {
      var Dk;
      kk[ek] = ik.gradient, kk[ek + 1] = ik.factor1, kk[ek + 2] = null !== (Dk = ik.factor2) && void 0 !== Dk ? Dk : ik.factor1
    }
  },
  41171: (kk, ek, ik) => {
    function Dk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ek = new Set;
      return (ik, Dk) => {
        ek.has(ik) || (ek.add(ik), console.warn(kk + Dk))
      }
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  41207: (kk, ek, ik) => {
    ik.d(ek, {
      createLiteRendererAsync: () => vP,
      liteBabylonBackend: () => Wk,
      setPipelineFailureHook: () => Nf
    });
    var Dk = ik(36868),
      fk = ik(37213),
      Sk = ik(37489),
      bk = ik(36812),
      rk = ik(37506);
    class Pk extends rk.c {
      constructor() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        super(...ek), this.color = new Dk.Color3(1, 1, 1), this.alpha = 1, this.material = {
          name: "colorShader",
          uniqueId: ek[0].XF().getUniqueId(),
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
    const mk = ["VERTEXCOLOR", "VERTEXALPHA", "INSTANCES", "THIN_INSTANCES", "INSTANCESCOLOR", "FOG", "LITE_FRONT_LAYER"],
      Mk = kk => 1 << mk.indexOf(kk),
      Kk = Mk("VERTEXCOLOR"),
      xk = Mk("INSTANCES"),
      nk = Mk("THIN_INSTANCES"),
      Uk = Mk("INSTANCESCOLOR"),
      Hk = Mk("FOG"),
      wk = Mk("LITE_FRONT_LAYER");

    function lk(kk, ek, ik, Dk) {
      let fk = 0;
      return kk.isVerticesDataPresent("color") && (fk |= Kk), "none" !== ek && (fk |= xk), "thin" === ek && (fk |= nk, kk.isVerticesDataPresent("instanceColor") && (fk |= Uk)), Dk.fogEnabled && kk.applyFog && 0 !== Dk.fogMode && (fk |= Hk), ik >= 1 && (fk |= wk), fk
    }

    function pk(kk, ek) {
      kk.updateColor4("color", ek.color, ek.alpha)
    }
    var yk = ik(37444),
      Yk = ik(37028),
      Lk = ik(36903),
      Ck = ik(36773),
      Ak = ik(37430),
      jk = ik(37441),
      sk = ik(36798),
      dk = ik(36806),
      Vk = ik(36821);
    const Fk = Ck.d.GLSL;
    class uk {
      constructor(kk, ek) {
        this.name = kk, this.bw = ek, this.uniqueId = void 0, this.checkReadyOnlyOnce = !1, this._blockDirtyMechanism = !1, this.disposers = [], this.ZF = {
          addOnce: kk => {
            this.disposers.push(kk)
          }
        }, this.uniqueId = ek.getUniqueId()
      }
      get isFrozen() {
        return this.checkReadyOnlyOnce
      }
      XF() {
        return this.bw
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
        return (0, sk.P)(this.model, kk.visibility, kk.hasVertexAlpha)
      }
      needAlphaTestingForMesh(kk) {
        return (0, sk.R)(this.model, kk.visibility, kk.hasVertexAlpha)
      }
      dispose() {
        (0, Yk.m)(this);
        for (const kk of this.disposers.splice(0)) kk()
      }
      get model() {
        return (0, sk.Y)(this)
      }
    }
    const qk = new WeakSet;

    function Ik(kk) {
      return qk.has(kk)
    }

    function zk(kk) {
      qk.add(kk)
    }
    const Qk = {
      create: (kk, ek) => ((0, Lk.m)(kk, new uk(kk.name, ek)), dk.d.defines()),
      write: () => {},
      addFeature: (kk, ek) => {
        const ik = kk.mirror;
        ek.feature === jk.f && ek.state.dirLightCount > 0 && (kk.disableLighting = !0, (0, sk.V)(kk)), "BLOXD_LIGHTING" in ek.defines && (0, Yk.j)(ik), ek.feature === Ak.j && ((0, yk.i)(ek.state, Fk), function(kk, ek) {
          const ik = kk.XF().JU();
          ek.textures.forEach(((Dk, fk) => {
            setTimeout((() => {
              var Sk, bk;
              const {
                url: rk
              } = Dk.source;
              ik.atlasArray(rk, null !== (Sk = null === (bk = ek.sources.pixels) || void 0 === bk ? void 0 : bk[fk]) && void 0 !== Sk ? Sk : null, ek.sources.layerWidth).then((ik => {
                (0, yk.e)(kk, ek, fk, ik, ik.layerWidth, ik.layers, Fk)
              })).catch((kk => {
                console.error(`Failed to build texture array for atlas ${fk}`, kk)
              }))
            }))
          }))
        }(ik, ek.state))
      },
      texture: (kk, ek, ik) => {
        let {
          data: Dk,
          sets: fk
        } = ik;
        var Sk;
        (zk(kk), Dk) && (kk.uvSet = null !== (Sk = null === fk || void 0 === fk ? void 0 : fk.coordinatesIndex) && void 0 !== Sk ? Sk : 0, (0, Lk._)(kk.matrix, null !== fk && void 0 !== fk ? fk : {}))
      },
      cube: zk,
      canvas: (kk, ek, ik) => {
        let {
          width: Dk,
          height: fk,
          mipmaps: Sk,
          samplingMode: bk = Vk.f.trilinear,
          hasAlpha: rk = !1,
          wrap: Pk = Vk.b.clamp
        } = ik;
        const mk = kk.JU().createCanvas(Dk, fk),
          Mk = new Vk.i("2d", {
            kind: "canvas",
            width: Dk,
            height: fk,
            canvas: mk
          }, {
            samplingMode: bk,
            wrapU: Pk,
            wrapV: Pk,
            noMipmap: !Sk,
            invertY: !0
          });
        return Mk.hasAlpha = rk, zk(Mk), Mk
      }
    };
    var vk = ik(37041),
      Ek = ik(36726);
    class hk {
      constructor(kk, ek, ik) {
        this.engine = kk, this.clearColor = ek, this.ambientColor = ik, this.onBeforeRenderObservable = new Ek.c, this.onBeforeCameraRenderObservable = new Ek.c, this.onAfterRenderObservable = new Ek.c, this.activeCamera = null, this.useRightHandedSystem = !1, this.iblIntensity = 1, this.particlesEnabled = !0, this.meshes = [], this.materials = [], this.textures = [], this.transformNodes = [], this.ZY = [], this.frustumPlanes = void 0, this.draw = () => {}, this.frameId = 0, this.animationRatio = 1, this.lastId = 0, this.pending = []
      }
      JU() {
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
        const ek = this.pending.indexOf(kk); - 1 !== ek && this.pending.splice(ek, 1)
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

    function ak() {
      throw new Error("Lite has no WebGL engine, Babylon particles or Babylon picks")
    }
    const Wk = {
      bik: ak,
      sDk: (kk, ek) => {
        const ik = new hk(kk.engine, Dk.e.FromArray(ek.clearColor), Dk.Color3.FromArray(ek.ambientColor));
        (0, bk.b)(Qk, ik), kk.bw = ik,
          function(kk, ek) {
            const ik = Object.assign((0, vk.f)(kk, "camera"), {
              layerMask: 268435455
            });
            kk.model.nodes.setWorldSource(ik.row, kk.model.view.worldMatrix), kk.camera = ek.activeCamera = ik
          }(kk, ik), (0, fk.i)(kk, ((kk, ek, ik) => (0, Sk.h)(kk, ek, ik, rk.c)))
      },
      LDk: () => {},
      setBabylonFog: () => {},
      VDk: ak,
      IDk: () => {},
      linesFromArrays: (kk, ek, ik) => (0, Sk.h)(kk, ek, ik, Pk),
      rw: () => {},
      qDk: ak
    };
    var tk = ik(41291),
      Xk = ik(41302);
    class Bk {
      constructor(kk) {
        this.deviceLost = void 0, this.lost = !1, this.refusedFrames = 0, this.refused = void 0;
        const ek = new Promise((kk => {
          this.refused = kk
        }));
        this.deviceLost = Promise.race([kk, ek]), this.deviceLost.then((() => {
          this.lost = !0
        }))
      }
      frameDrawn() {
        this.refusedFrames = 0
      }
      frameFailed(kk) {
        (function(kk) {
          const {
            name: ek,
            message: ik
          } = null !== kk && void 0 !== kk ? kk : {};
          return "InvalidStateError" === ek && "string" === typeof ik && ik.startsWith("GPUDevice.")
        })(kk) && (this.refusedFrames++, 3 === this.refusedFrames && this.refused({
          reason: "unknown",
          message: kk.message,
          framesRefused: !0
        }))
      }
    }
    class ck {
      constructor(kk) {
        this.resources = kk, this.matrixKey = {
          vK: 0
        }, this.attributesKey = {
          vK: 0
        }, this.inputs = Object.create(null);
        for (let ek = 0; ek < 4; ek++) this.inputs[`world${ek}`] = new Ok(this.matrixKey, 16 * ek, 64, 4)
      }
      release() {
        this.resources.bufferDeleted(this.matrixKey), this.resources.bufferDeleted(this.attributesKey)
      }
      bind(kk, ek) {
        this.resources.vertexBufferCreated(this.matrixKey, kk, !0), ek && this.resources.vertexBufferCreated(this.attributesKey, ek, !0)
      }
    }
    class Tk extends ck {
      constructor(kk, ek, ik) {
        super(kk), this.mesh = ek, this.rowStride = void 0, this.matrices = null, this.attributes = null;
        const Dk = this.inputs;
        let fk = 0;
        for (const {
            size: bk
          }
          of ik) fk += bk;
        for (const {
            name: bk,
            offset: rk,
            size: Pk,
            type: mk
          }
          of ik) Dk[bk] = new Ok(this.attributesKey, 4 * rk, 4 * fk, Pk, !0, mk);
        this.rowStride = fk, kk.i_.set(ek, this);
        const Sk = ek.isVerticesDataPresent;
        ek.isVerticesDataPresent = (kk, ik) => kk in Dk || Sk.call(ek, kk, ik)
      }
      attach(kk, ek) {
        this.matrices = kk, this.attributes = ek, this.bind(kk, ek), this.mirror(kk, kk.length, kk.length / 16)
      }
      R7(kk) {
        this.matrices && this.resources.vertexBufferUpdated(this.matrixKey, this.matrices, 0, kk ? 64 * kk : void 0)
      }
      J7() {
        this.attributes && this.resources.vertexBufferUpdated(this.attributesKey, this.attributes)
      }
      matrixRows(kk, ek) {
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 16 * kk, 16 * ek)
      }
      attributeRows(kk, ek) {
        this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, kk * this.rowStride, ek * this.rowStride)
      }
      release() {
        super.release(), this.matrices = null, this.attributes = null, this.mirror(null, 512, 0)
      }
      mirror(kk, ek, ik) {
        const Dk = this.mesh._thinInstanceDataStorage;
        Dk.matrixData = kk, Dk.matrixBufferSize = ek, Dk.worldMatrices = null, Dk.instancesCount = ik
      }
    }
    class Zk extends ck {
      constructor(kk, ek, ik) {
        var Dk, fk, Sk, bk;
        super(kk), this.layout = void 0, this.offsets = void 0, this.rowStride = void 0, this.matrices = new Float32Array(512), this.attributes = void 0, this.frame = -1, this.count = 0, this.packedSource = null, this.packedBatch = null, this.layout = null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.interleavedKinds) && void 0 !== Dk ? Dk : null, this.offsets = null !== (fk = null === ik || void 0 === ik ? void 0 : ik.interleavedOffsets) && void 0 !== fk ? fk : [], this.rowStride = null !== (Sk = null === ik || void 0 === ik ? void 0 : ik.interleavedRowStride) && void 0 !== Sk ? Sk : 0, null === (bk = this.layout) || void 0 === bk || bk.forEach(((kk, ek) => {
          this.inputs[kk] = new Ok(this.attributesKey, 4 * this.offsets[ek], 4 * this.rowStride, ik.strides[kk])
        })), this.attributes = this.rowStride > 0 ? new Float32Array(32 * this.rowStride) : null, this.bind(this.matrices, this.attributes), kk.batchUploads.set(ek, this), ek.ZF.addOnce((() => {
          this.release()
        }))
      }
      get packedMatrices() {
        return this.matrices
      }
      packedRowMesh(kk) {
        const ek = this.packedBatch;
        return ek.renderSelf ? 0 === kk ? this.packedSource : ek.instances[kk - 1] : ek.instances[kk]
      }
      get packedAttributes() {
        return this.attributes
      }
      pack(kk, ek, ik, Dk) {
        const fk = (ek.renderSelf ? 1 : 0) + ek.rows.length;
        if (this.frame = Dk, this.count = fk, this.packedSource = kk, this.packedBatch = ek, 0 === fk) return;
        if (kk.getWorldMatrix(), 16 * fk > this.matrices.length) {
          let kk = this.matrices.length / 16;
          for (; kk < fk;) kk *= 2;
          this.matrices = new Float32Array(16 * kk), this.attributes &&= new Float32Array(kk * this.rowStride), this.bind(this.matrices, this.attributes)
        }
        let Sk = 0;
        ek.renderSelf && this.packRow(Sk++, kk, ek.row, ik);
        for (let bk = 0; bk < ek.rows.length; bk++) this.packRow(Sk++, ek.instances[bk], ek.rows[bk], ik);
        this.resources.vertexBufferFloatsUpdated(this.matrixKey, this.matrices, 0, 16 * fk), this.attributes && this.resources.vertexBufferFloatsUpdated(this.attributesKey, this.attributes, 0, fk * this.rowStride)
      }
      packRow(kk, ek, ik, Dk) {
        const fk = this.matrices;
        if (ik < 0) fk.set(ek.getWorldMatrix().m, 16 * kk);
        else
          for (let mk = 0; mk < 16; mk++) fk[16 * kk + mk] = Dk[16 * ik + mk];
        const Sk = this.attributes;
        if (!Sk) return;
        const bk = ek.Iq,
          rk = this.layout;
        for (let mk = 0; mk < rk.length; mk++) {
          var Pk;
          const ek = null !== (Pk = bk[rk[mk]]) && void 0 !== Pk ? Pk : 0,
            ik = kk * this.rowStride + this.offsets[mk];
          ek.toArray ? ek.toArray(Sk, ik) : ek.copyToArray ? ek.copyToArray(Sk, ik) : Sk[ik] = ek
        }
      }
    }
    class Ok {
      constructor(kk, ek, ik, Dk) {
        let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5126,
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        this.key = kk, this.byteOffset = ek, this.byteStride = ik, this.size = Dk, this.instanced = fk, this.type = Sk, this.normalized = bk
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
    const gk = "CANVAS_ALPHA_ONE",
      Gk = `override ${gk}: bool = false;`,
      Nk = {
        srcFactor: "zero",
        dstFactor: "one",
        operation: "add"
      };

    function Rk(kk, ek, ik) {
      var Dk;
      let fk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      const Sk = null !== (Dk = ek._colorFormat) && void 0 !== Dk ? Dk : "bgra8unorm",
        bk = fk ? 15 : 0;
      return ik ? {
        ...kk,
        targets: [{
          format: Sk,
          blend: {
            color: ik,
            alpha: Nk
          },
          writeMask: bk
        }]
      } : {
        ...kk,
        constants: {
          ...kk.constants,
          [gk]: 1
        },
        targets: [{
          format: Sk,
          writeMask: bk
        }]
      }
    }

    function Jk(kk, ek) {
      kk._renderables.push(ek)
    }

    function ke(kk) {
      var ek, ik;
      return null !== (ek = null === (ik = kk._frameGraph) || void 0 === ik ? void 0 : ik._tasks) && void 0 !== ek ? ek : []
    }

    function ee(kk) {
      return kk._currentEncoder
    }

    function ie(kk) {
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
    const De = "greater-equal",
      fe = 2e5,
      Se = 1e5,
      be = new WeakMap;

    function re(kk, ek) {
      let ik = be.get(kk);
      if (!ik) {
        ik = {
          module: kk.createShaderModule({
            label: "placeholder",
            code: "@vertex fn v() -> @builtin(position) vec4f { return vec4f(0.0, 0.0, 0.0, 1.0); }\n@fragment fn f() -> @location(0) vec4f { return vec4f(0.0); }"
          }),
          pipelines: new Map
        }, be.set(kk, ik)
      }
      const Dk = `${ek._colorFormat}|${ek._depthStencilFormat}|${ek._sampleCount}`;
      let fk = ik.pipelines.get(Dk);
      if (!fk) {
        var Sk;
        const {
          module: bk
        } = ik;
        fk = kk.createRenderPipeline({
          label: `placeholder ${Dk}`,
          layout: kk.createPipelineLayout({
            bindGroupLayouts: []
          }),
          vertex: {
            module: bk,
            entryPoint: "v"
          },
          fragment: {
            module: bk,
            entryPoint: "f",
            targets: [{
              format: null !== (Sk = ek._colorFormat) && void 0 !== Sk ? Sk : "bgra8unorm",
              writeMask: 0
            }]
          },
          depthStencil: ek._depthStencilFormat ? {
            format: ek._depthStencilFormat,
            depthCompare: "always",
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: ek._sampleCount
          }
        }), ik.pipelines.set(Dk, fk)
      }
      return fk
    }

    function Pe(kk, ek, ik) {
      const Dk = ek.eye,
        fk = ek.viewMatrix;
      kk[0] = Dk[0] + fk[2] * ik, kk[1] = Dk[1] + fk[6] * ik, kk[2] = Dk[2] + fk[10] * ik
    }
    var me = ik(37544),
      Me = ik(41171),
      Ke = ik(36789);
    const xe = Math.PI,
      ne = xe / 1.95,
      Ue = [5e-4 / 94, 125e-7, 5e-4 / 18],
      He = [
        [68e-8, .686],
        [55e-8, .678],
        [45e-8, .666]
      ].map((kk => {
        let [ek, ik] = kk;
        return .434 * xe * Math.pow(2 * xe / ek, 2) * ik
      }));

    function we(kk, ek, ik) {
      const {
        up: Dk,
        mieDirectionalG: fk
      } = kk, Sk = 1 - ye(1 - Math.exp(ek[1] / 45e4), 0, 1), bk = kk.rayleigh - (1 - Sk), rk = Math.hypot(ek[0], ek[1], ek[2]), Pk = rk > 0 ? 1 / rk : 0, mk = ik.sunDir;
      for (let nk = 0; nk < 3; nk++) mk[nk] = ek[nk] * Pk;
      const Mk = mk[0] * Dk[0] + mk[1] * Dk[1] + mk[2] * Dk[2],
        Kk = 1e3 * Math.max(0, 1 - Math.exp(-(ne - Math.acos(ye(Mk, -1, 1))) / 1.5));
      ik.sunE = Kk;
      const xk = .2 * kk.turbidity * 1e-17 * kk.mieCoefficient;
      for (let nk = 0; nk < 3; nk++) {
        const kk = Ue[nk] * bk,
          ek = He[nk] * xk,
          Dk = Kk / (kk + ek);
        ik.inScatterR[nk] = kk * Dk, ik.inScatterM[nk] = ek * Dk, ik.extinctionBeta[nk] = 8400 * kk + 1250 * ek
      }
      return ik.sunsetMix = ye(Math.pow(1 - Mk, 5), 0, 1), ik.sunDiscE = 19e3 * Kk, ik.mieScale = (1 - fk * fk) / (4 * xe), ik.mieBase = 1 + fk * fk, ik.mieSlope = 2 * fk, ik
    }
    const le = {
      A: .15,
      B: .5,
      C: .1,
      D: .2,
      E: .02,
      F: .3
    };
    const pe = 1 / function(kk) {
      const {
        A: ek,
        B: ik,
        C: Dk,
        D: fk,
        E: Sk,
        F: bk
      } = le;
      return (kk * (ek * kk + Dk * ik) + fk * Sk) / (kk * (ek * kk + ik) + fk * bk) - Sk / bk
    }(1e3);

    function ye(kk, ek, ik) {
      return Math.min(Math.max(kk, ek), ik)
    }
    const Ye = /^\s*#(ifdef|ifndef|if|elif|else|endif|define|undef)\b(.*)$/;

    function Le(kk, ek) {
      const ik = new Map(ek),
        Dk = [],
        fk = [],
        Sk = () => 0 === fk.length || fk[fk.length - 1].active;
      let bk = null;
      const rk = () => {
        const kk = [...ik].filter((kk => {
            let [, ek] = kk;
            return !0 !== ek
          })),
          ek = kk.map((kk => {
            let [ek] = kk;
            return ek
          })).join("|");
        bk = kk.length ? new RegExp(`\\b(${ek})\\b`, "g") : null
      };
      rk();
      for (const Pk of kk.split("\n")) {
        const kk = Ye.exec(Pk);
        if (!kk) {
          Sk() && Dk.push(bk ? Ce(Pk, bk, ik) : Pk);
          continue
        }
        const ek = kk[1],
          mk = kk[2].trim();
        if ("ifdef" === ek || "ifndef" === ek || "if" === ek) {
          const kk = Sk(),
            Dk = "if" === ek ? Ae(mk, ik) : ik.has(mk) === ("ifdef" === ek);
          fk.push({
            active: kk && Dk,
            parentActive: kk,
            taken: Dk
          })
        } else if ("elif" === ek || "else" === ek) {
          const kk = fk[fk.length - 1];
          if (!kk) throw new Error(`#${ek} without #if`);
          const Dk = !kk.taken && ("else" === ek || Ae(mk, ik));
          kk.active = kk.parentActive && Dk, kk.taken = kk.taken || Dk
        } else if ("endif" === ek) {
          if (!fk.pop()) throw new Error("#endif without #if")
        } else if (Sk()) {
          const [kk, ...Dk] = mk.split(/\s+/);
          "undef" === ek ? ik.delete(kk) : ik.set(kk, !Dk.length || Dk.join(" ")), rk()
        }
      }
      if (fk.length) throw new Error("Unterminated #if");
      return Dk.join("\n")
    }

    function Ce(kk, ek, ik) {
      return kk.replace(ek, (kk => {
        const ek = ik.get(kk);
        return "string" === typeof ek ? ek : kk
      }))
    }

    function Ae(kk, ek) {
      var ik;
      const Dk = null !== (ik = kk.match(/defined|\d+(\.\d+)?|\w+|&&|\|\||==|!=|>=|<=|[()!<>]/g)) && void 0 !== ik ? ik : [];
      let fk = 0;
      const Sk = () => Dk[fk],
        bk = () => Dk[fk++],
        rk = kk => {
          const ik = /^\d/.test(kk) ? kk : ek.get(kk);
          return "string" === typeof ik ? parseInt(ik) : Number.NaN
        },
        Pk = () => {
          const kk = bk();
          if ("!" === kk) return !Pk();
          if ("(" === kk) {
            const kk = Mk();
            return bk(), kk
          }
          if ("defined" === kk) {
            const kk = "(" === Sk();
            kk && bk();
            const ik = bk();
            return kk && bk(), ek.has(ik)
          }
          const ik = Sk();
          if ("==" === ik || "!=" === ik || ">" === ik || "<" === ik || ">=" === ik || "<=" === ik) {
            bk();
            const ek = rk(kk),
              Dk = rk(bk());
            if (Number.isNaN(ek) || Number.isNaN(Dk)) return !1;
            switch (ik) {
              case "==":
                return ek === Dk;
              case "!=":
                return ek !== Dk;
              case ">":
                return ek > Dk;
              case "<":
                return ek < Dk;
              case ">=":
                return ek >= Dk;
              default:
                return ek <= Dk
            }
          }
          return ek.has(kk)
        },
        mk = () => {
          let kk = Pk();
          for (;
            "&&" === Sk();) {
            bk();
            const ek = Pk();
            kk = kk && ek
          }
          return kk
        },
        Mk = () => {
          let kk = mk();
          for (;
            "||" === Sk();) {
            bk();
            const ek = mk();
            kk = kk || ek
          }
          return kk
        },
        Kk = Mk();
      if (fk !== Dk.length) throw new Error(`Cannot evaluate #if ${kk}`);
      return Kk
    }
    var je = ik(36781),
      se = ik(37116),
      de = ik(37118),
      Ve = ik(40283),
      Fe = ik(38333);
    const ue = 32,
      qe = [10, 3, 10],
      Ie = [21, 7, 21],
      ze = Ie[0] * Ie[1] * Ie[2],
      Qe = 0,
      ve = 1,
      Ee = 2,
      he = 3,
      ae = 64,
      We = 512,
      te = 4 * ze,
      Xe = 1536,
      Be = te + ze * Xe,
      ce = 1073741824,
      Te = Be + 1;

    function oe(kk, ek) {
      const ik = kk % ek;
      return ik < 0 ? ik + ek : ik
    }

    function Ze(kk, ek, ik) {
      return Dk = oe(kk, Ie[0]), fk = oe(ek, Ie[1]), Sk = oe(ik, Ie[2]), Dk + Ie[0] * (fk + Ie[1] * Sk);
      var Dk, fk, Sk
    }

    function Oe(kk, ek, ik) {
      return kk + 8 * (ek + 8 * ik)
    }

    function ge(kk, ek, ik) {
      return kk + 4 * (ek + 4 * ik)
    }
    const Ge = 65535,
      Ne = 0,
      Re = 1,
      Je = 2,
      ki = 3;

    function ei(kk) {
      return Math.ceil(kk * kk / 32)
    }
    const ii = 8192,
      Di = 1 << 18,
      fi = 65536,
      Si = 294912,
      bi = 128,
      ri = 4096,
      Pi = 16,
      mi = 16385,
      Mi = 81921,
      Ki = 147457,
      xi = 4194304;
    const ni = [0, 0, 0],
      Ui = [0, 0, 0];

    function Hi(kk, ek, ik, Dk) {
      ! function(kk, ek, ik) {
        const [Dk, fk, Sk] = [kk[0], kk[1], kk[2]];
        let bk, rk, Pk;
        Math.abs(fk) < .99 ? (bk = Sk, rk = 0, Pk = -Dk) : (bk = -fk, rk = Dk, Pk = 0);
        const mk = Math.hypot(bk, rk, Pk);
        ek[0] = bk / mk, ek[1] = rk / mk, ek[2] = Pk / mk, ik[0] = fk * ek[2] - Sk * ek[1], ik[1] = Sk * ek[0] - Dk * ek[2], ik[2] = Dk * ek[1] - fk * ek[0]
      }(Dk, ni, Ui);
      const fk = 1 / 32;
      for (const [Sk, bk] of [
          [0, ni],
          [4, Ui]
        ]) {
        for (let ik = 0; ik < 3; ik++) kk[ek + Sk + ik] = bk[ik] * fk;
        kk[ek + Sk + 3] = -(bk[0] * ik[0] + bk[1] * ik[1] + bk[2] * ik[2]) * fk
      }
    }
    class wi {
      constructor() {
        this.words = new Uint32Array(Ki), this.parts = 0, this.refs = 0, this.floats = new Float32Array(this.words.buffer), this.rects = new Int32Array(16384), this.counts = new Uint32Array(16384), this.inverse = new Float64Array(16), this.view = new Float32Array(8), this.viewAt = 0, this.light = [0, 1, 0]
      }
      tn(kk, ek) {
        this.parts = 0, this.refs = 0, this.view = kk, this.viewAt = ek;
        const ik = kk[ek + 1] * kk[ek + 6] - kk[ek + 2] * kk[ek + 5],
          Dk = kk[ek + 2] * kk[ek + 4] - kk[ek] * kk[ek + 6],
          fk = kk[ek] * kk[ek + 5] - kk[ek + 1] * kk[ek + 4],
          Sk = Math.hypot(ik, Dk, fk) || 1;
        this.light[0] = ik / Sk, this.light[1] = Dk / Sk, this.light[2] = fk / Sk
      }
      add(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this.parts >= ri || ! function(kk, ek, ik) {
            const Dk = kk[ek],
              fk = kk[ek + 1],
              Sk = kk[ek + 2],
              bk = kk[ek + 3],
              rk = kk[ek + 4],
              Pk = kk[ek + 5],
              mk = kk[ek + 6],
              Mk = kk[ek + 7],
              Kk = kk[ek + 8],
              xk = kk[ek + 9],
              nk = kk[ek + 10],
              Uk = kk[ek + 11],
              Hk = kk[ek + 12],
              wk = kk[ek + 13],
              lk = kk[ek + 14],
              pk = kk[ek + 15],
              yk = Dk * Pk - fk * rk,
              Yk = Dk * mk - Sk * rk,
              Lk = Dk * Mk - bk * rk,
              Ck = fk * mk - Sk * Pk,
              Ak = fk * Mk - bk * Pk,
              jk = Sk * Mk - bk * mk,
              sk = Kk * wk - xk * Hk,
              dk = Kk * lk - nk * Hk,
              Vk = Kk * pk - Uk * Hk,
              Fk = xk * lk - nk * wk,
              uk = xk * pk - Uk * wk,
              qk = nk * pk - Uk * lk,
              Ik = yk * qk - Yk * uk + Lk * Fk + Ck * Vk - Ak * dk + jk * sk;
            if (!(Math.abs(Ik) > 1e-12)) return !1;
            const zk = 1 / Ik;
            return ik[0] = (Pk * qk - mk * uk + Mk * Fk) * zk, ik[1] = (Sk * uk - fk * qk - bk * Fk) * zk, ik[2] = (wk * jk - lk * Ak + pk * Ck) * zk, ik[3] = (nk * Ak - xk * jk - Uk * Ck) * zk, ik[4] = (mk * Vk - rk * qk - Mk * dk) * zk, ik[5] = (Dk * qk - Sk * Vk + bk * dk) * zk, ik[6] = (lk * Lk - Hk * jk - pk * Yk) * zk, ik[7] = (Kk * jk - nk * Lk + Uk * Yk) * zk, ik[8] = (rk * uk - Pk * Vk + Mk * sk) * zk, ik[9] = (fk * Vk - Dk * uk - bk * sk) * zk, ik[10] = (Hk * Ak - wk * Lk + pk * yk) * zk, ik[11] = (xk * Lk - Kk * Ak - Uk * yk) * zk, ik[12] = (Pk * dk - rk * Fk - mk * sk) * zk, ik[13] = (Dk * Fk - fk * dk + Sk * sk) * zk, ik[14] = (wk * Yk - Hk * Ck - lk * yk) * zk, ik[15] = (Kk * Ck - xk * Yk + nk * yk) * zk, !0
          }(ek, ik, this.inverse)) return;
        const {
          view: Dk,
          viewAt: fk
        } = this, Sk = ik;
        let bk = 1 / 0,
          rk = 1 / 0,
          Pk = -1 / 0,
          mk = -1 / 0,
          Mk = -1 / 0;
        const [Kk, xk, nk] = this.light;
        for (let Lk = 0; Lk < 8; Lk++) {
          const ik = 1 & Lk ? kk.hi[0] : kk.lo[0],
            Uk = 2 & Lk ? kk.hi[1] : kk.lo[1],
            Hk = 4 & Lk ? kk.hi[2] : kk.lo[2],
            wk = ik * ek[Sk] + Uk * ek[Sk + 4] + Hk * ek[Sk + 8] + ek[Sk + 12],
            lk = ik * ek[Sk + 1] + Uk * ek[Sk + 5] + Hk * ek[Sk + 9] + ek[Sk + 13],
            pk = ik * ek[Sk + 2] + Uk * ek[Sk + 6] + Hk * ek[Sk + 10] + ek[Sk + 14],
            yk = Dk[fk] * wk + Dk[fk + 1] * lk + Dk[fk + 2] * pk + Dk[fk + 3],
            Yk = Dk[fk + 4] * wk + Dk[fk + 5] * lk + Dk[fk + 6] * pk + Dk[fk + 7];
          bk = Math.min(bk, yk), rk = Math.min(rk, Yk), Pk = Math.max(Pk, yk), mk = Math.max(mk, Yk), Mk = Math.max(Mk, Kk * wk + xk * lk + nk * pk)
        }
        if (Pk < -1 || mk < -1 || bk >= 1 || rk >= 1) return;
        const Uk = this.parts++,
          Hk = this.rects;
        Hk[4 * Uk] = li(bk), Hk[4 * Uk + 1] = li(rk), Hk[4 * Uk + 2] = li(Pk), Hk[4 * Uk + 3] = li(mk);
        const wk = this.inverse,
          {
            cell: lk,
            dims: pk,
            lo: yk
          } = kk,
          Yk = Mi + Uk * Pi;
        for (let Lk = 0; Lk < 3; Lk++) this.floats[Yk + 4 * Lk] = wk[Lk] / lk, this.floats[Yk + 4 * Lk + 1] = wk[4 + Lk] / lk, this.floats[Yk + 4 * Lk + 2] = wk[8 + Lk] / lk, this.floats[Yk + 4 * Lk + 3] = (wk[12 + Lk] - yk[Lk]) / lk;
        this.words[Yk + 12] = kk.at, this.floats[Yk + 13] = Mk + .001 * (1 + Math.abs(Mk)), this.words[Yk + 14] = pk[0] | pk[1] << 8 | pk[2] << 16
      }
      finish() {
        const kk = bi,
          {
            counts: ek,
            rects: ik,
            words: Dk
          } = this;
        ek.fill(0);
        let fk = 0,
          Sk = 0;
        for (; Sk < this.parts; Sk++) {
          const Dk = 4 * Sk,
            bk = (ik[Dk + 2] - ik[Dk] + 1) * (ik[Dk + 3] - ik[Dk + 1] + 1);
          if (fk + bk > 65536) break;
          fk += bk;
          for (let fk = ik[Dk + 1]; fk <= ik[Dk + 3]; fk++)
            for (let Sk = ik[Dk]; Sk <= ik[Dk + 2]; Sk++) ek[fk * kk + Sk]++
        }
        let bk = 0;
        for (let Pk = 0; Pk < 16384; Pk++) Dk[Pk] = bk, bk += ek[Pk], ek[Pk] = Dk[Pk];
        Dk[16384] = bk;
        for (let Pk = 0; Pk < Sk; Pk++) {
          const fk = 4 * Pk;
          for (let Sk = ik[fk + 1]; Sk <= ik[fk + 3]; Sk++)
            for (let bk = ik[fk]; bk <= ik[fk + 2]; bk++) Dk[mi + ek[Sk * kk + bk]++] = Pk
        }
        const rk = this.floats;
        for (let Pk = 0; Pk < 16384; Pk++) {
          const kk = mi + Dk[Pk],
            ek = kk + Math.min(Dk[Pk + 1] - Dk[Pk], 64);
          for (let ik = kk + 1; ik < ek; ik++) {
            const ek = Dk[ik],
              fk = rk[81934 + ek * Pi];
            let Sk = ik - 1;
            for (; Sk >= kk && rk[81934 + Dk[Sk] * Pi] < fk; Sk--) Dk[Sk + 1] = Dk[Sk];
            Dk[Sk + 1] = ek
          }
        }
        this.refs = fk
      }
    }

    function li(kk) {
      return Math.min(127, Math.max(0, Math.floor((.5 * kk + .5) * bi)))
    }

    function yi(kk, ek, ik, Dk, fk) {
      for (let Sk = 0; Sk < 4; Sk++)
        for (let bk = 0; bk < 4; bk++) fk[4 * Sk + bk] = kk[ek + 4 * Sk] * ik[Dk + bk] + kk[ek + 4 * Sk + 1] * ik[Dk + 4 + bk] + kk[ek + 4 * Sk + 2] * ik[Dk + 8 + bk] + kk[ek + 4 * Sk + 3] * ik[Dk + 12 + bk]
    }

    function Yi(kk, ek, ik, Dk, fk) {
      const Sk = kk[0] - ek,
        bk = kk[1] - ik,
        rk = kk[2] - Dk,
        Pk = kk[3] - ek,
        mk = kk[4] - ik,
        Mk = kk[5] - Dk,
        Kk = kk[6] - ek,
        xk = kk[7] - ik,
        nk = kk[8] - Dk;
      if (Math.min(Sk, Pk, Kk) > fk || Math.max(Sk, Pk, Kk) < -fk) return !1;
      if (Math.min(bk, mk, xk) > fk || Math.max(bk, mk, xk) < -fk) return !1;
      if (Math.min(rk, Mk, nk) > fk || Math.max(rk, Mk, nk) < -fk) return !1;
      const Uk = Pk - Sk,
        Hk = mk - bk,
        wk = Mk - rk,
        lk = Kk - Pk,
        pk = xk - mk,
        yk = nk - Mk,
        Yk = Hk * yk - wk * pk,
        Lk = wk * lk - Uk * yk,
        Ck = Uk * pk - Hk * lk;
      if (Math.abs(Yk * Sk + Lk * bk + Ck * rk) > fk * (Math.abs(Yk) + Math.abs(Lk) + Math.abs(Ck))) return !1;
      const Ak = [Uk, Hk, wk, lk, pk, yk, Sk - Kk, bk - xk, rk - nk];
      for (let jk = 0; jk < 3; jk++) {
        const kk = Ak[3 * jk],
          ek = Ak[3 * jk + 1],
          ik = Ak[3 * jk + 2];
        for (let Dk = 0; Dk < 3; Dk++) {
          const Uk = 0 === Dk ? 0 : 1 === Dk ? ik : -ek,
            Hk = 0 === Dk ? -ik : 1 === Dk ? 0 : kk,
            wk = 0 === Dk ? ek : 1 === Dk ? -kk : 0,
            lk = Uk * Sk + Hk * bk + wk * rk,
            pk = Uk * Pk + Hk * mk + wk * Mk,
            yk = Uk * Kk + Hk * xk + wk * nk,
            Yk = fk * (Math.abs(Uk) + Math.abs(Hk) + Math.abs(wk));
          if (Math.min(lk, pk, yk) > Yk || Math.max(lk, pk, yk) < -Yk) return !1
        }
      }
      return !0
    }
    const Li = new Float32Array(1);
    new Uint32Array(Li.buffer);
    var Ci = ik(38341);

    function Ai(kk) {
      const [ek, ik, Dk] = Ci.r;
      return `struct BloxdSpSunShadow {\n\teyeChunk: vec3i,\n\tstaleCount: u32,\n\tvolumeLo: vec3i,\n\tentityX: vec4f,\n\tentityY: vec4f,\n\tstale: array<vec4i, 4>,\n}\n@group(${kk.group}) @binding(${kk.uniform}) var<uniform> bloxdSpSunShadow: BloxdSpSunShadow;\nfn bloxdSpVolumeTexel(cell: vec3i) -> vec3i {\n\treturn cell & vec3i(${ek-1}, ${ik-1}, ${Dk-1});\n}\n`
    }

    function ji(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const [fk, Sk, bk] = Ie, [rk, Pk, mk] = qe, Mk = Math.log2(ue), Kk = Dk ? "var<private> bloxdSpCrossed: bool;\n" : "", xk = Dk ? "\t\t\tbloxdSpCrossed = true;\n" : "";
      return `@group(${kk.group}) @binding(${kk.gx}) var<storage, read> bloxdSpShadowVoxels: array<u32>;\n@group(${kk.group}) @binding(${kk.special}) var<storage, read> bloxdSpShadowSpecial: array<u32>;\n${ik?"var<private> bloxdSpPlaneTolerance: f32;\n":""}${Kk}struct BloxdSpBoxExit {\n\tt: f32,\n\taxis: i32,\n\tcell: vec3i,\n}\n// inv: 1 / d, 0 where d is, taken once per ray rather than divided per exit\nfn bloxdSpExitBox(o: vec3f, d: vec3f, inv: vec3f, lo: vec3i, offset: vec3i, size: i32) -> BloxdSpBoxExit {\n\tlet low = vec3f(lo - offset);\n\tlet far = select(low, low + f32(size), d > vec3f(0.0));\n\tlet ta = select(vec3f(1e30), (far - o) * inv, d != vec3f(0.0));\n\tvar axis = 0;\n\tvar t = ta.x;\n\tif (ta.y < t) {\n\t\tt = ta.y;\n\t\taxis = 1;\n\t}\n\tif (ta.z < t) {\n\t\tt = ta.z;\n\t\taxis = 2;\n\t}\n\tlet inside = clamp(vec3i(floor(o + t * d)) + offset, lo, lo + vec3i(size - 1));\n\tlet beyond = select(lo - vec3i(1), lo + vec3i(size), d > vec3f(0.0));\n\t// select, not cell[axis] = beyond[axis]: dynamic indexing spills the vector to memory on some drivers (~9% of the frame on Mali)\n\tlet cell = select(inside, beyond, vec3<bool>(axis == 0, axis == 1, axis == 2));\n\treturn BloxdSpBoxExit(t, axis, cell);\n}\nfn bloxdSpMaskBit(word: u32, bit: u32) -> bool {\n\treturn ((bloxdSpShadowSpecial[word + (bit >> 5u)] >> (bit & 31u)) & 1u) == 1u;\n}\nfn bloxdSpCasterBlocks(caster: u32, o: vec3f, d: vec3f, cell: vec3i, offset: vec3i, t0: f32, t1: f32, axis: i32) -> bool {\n\tlet base = 0u + caster * 4u;\n\tlet kind = bloxdSpShadowSpecial[base];\n\tlet data = bloxdSpShadowSpecial[base + 1u];\n\t// Every loop here has a fixed bound, whatever the buffers hold: a GPU stuck in one loses the device\n\tlet count = min(bloxdSpShadowSpecial[base + 2u], 4u);\n\tlet size = bloxdSpShadowSpecial[base + 3u];\n\tlet q = o - vec3f(cell - offset);\n\tif (kind == ${Re}u) {\n\t\tlet qs = q * 8.0;\n\t\tlet ds = d * 8.0;\n\t\tlet invs = select(vec3f(0.0), 1.0 / ds, ds != vec3f(0.0));\n\t\tvar sub = clamp(vec3i(floor(qs + t0 * ds)), vec3i(0), vec3i(7));\n\t\tfor (var step = 0; step < 24; step++) {\n\t\t\tif (bloxdSpMaskBit(data, u32(sub.x + 8 * (sub.y + 8 * sub.z)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\tlet exit = bloxdSpExitBox(qs, ds, invs, sub, vec3i(0), 1);\n\t\t\t// Only the axis it left by can be out of the shape\n\t\t\tif (exit.t >= t1 || any(exit.cell < vec3i(0)) || any(exit.cell >= vec3i(8))) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tsub = exit.cell;\n\t\t}\n\t\treturn false;\n\t}\n\tlet fs = f32(size);\n\tif (kind == ${Je}u) {\n\t\tfor (var p = 0u; p < count; p++) {\n\t\t\tlet plane = data + p * 4u;\n\t\t\tlet tx = bitcast<f32>(bloxdSpShadowSpecial[plane]);\n\t\t\tlet tz = bitcast<f32>(bloxdSpShadowSpecial[plane + 1u]);\n\t\t\tlet along = bitcast<f32>(bloxdSpShadowSpecial[plane + 2u]);\n\t\t\tlet dn = d.x * tz - d.z * tx;\n\t\t\tif (abs(dn) < 1e-6) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet t = (along - ((q.x - 0.5) * tz - (q.z - 0.5) * tx)) / dn;\n\t\t\t// Not a plane the trace starts on (SUN_SHADOW_PLANE_START), nor in its first cell one within depth's error of it\n\t\t\tif (t < select(t0, t0 + 0.0009765625, axis < 0) || t > t1${ik?" || (axis < 0 && abs(t * dn) < bloxdSpPlaneTolerance)":""}) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tlet h = q + t * d;\n\t\t\tlet u = (h.x - 0.5) * tx + (h.z - 0.5) * tz + 0.5;\n\t\t\tlet v = 1.0 - h.y;\n\t\t\tif (u < 0.0 || u >= 1.0 || v < 0.0 || v >= 1.0) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\t\tif (bloxdSpMaskBit(bloxdSpShadowSpecial[plane + 3u], u32(floor(u * fs)) + size * u32(floor(v * fs)))) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\tif (kind == ${ki}u && axis >= 0) {\n\t\t// In through the +axis face going down the axis, else the -axis face; faces go +x, -x, +y, -y, +z, -z\n\t\tlet plusFace = d[axis] < 0.0;\n\t\tlet face = u32(2 * axis) + select(1u, 0u, plusFace);\n\t\tlet h = clamp(q + t0 * d, vec3f(0.0), vec3f(1.0));\n\t\t// As terrain samples faces (terrainShader.ts packedUv)\n\t\tvar uv = vec2f(select(h.x, 1.0 - h.x, plusFace), 1.0 - h.y);\n\t\tif (axis == 0) {\n\t\t\tuv = vec2f(select(1.0 - h.z, h.z, plusFace), 1.0 - h.y);\n\t\t} else if (axis == 1) {\n\t\t\tuv = vec2f(select(1.0 - h.x, h.x, plusFace), 1.0 - h.z);\n\t\t}\n\t\tlet texel = min(vec2u(floor(uv * fs)), vec2u(size - 1u));\n\t\treturn bloxdSpMaskBit(data + face * ((size * size + 31u) / 32u), texel.x + size * texel.y);\n\t}\n\treturn false;\n}\nfn bloxdSpWindowSlot(chunk: vec3i) -> u32 {\n\tlet window = vec3i(${fk}, ${Sk}, ${bk});\n\tlet r = chunk % window;\n\tlet s = select(r, r + window, r < vec3i(0));\n\treturn u32(s.x + ${fk} * (s.y + ${Sk} * s.z));\n}\nfn bloxdSpWindowHas(chunk: vec3i) -> bool {\n\treturn all(abs(chunk - bloxdSpSunShadow.eyeChunk) <= vec3i(${rk}, ${Pk}, ${mk}));\n}\nfn bloxdSpCellFull(cell: vec3i) -> bool {\n\tlet chunk = cell >> vec3u(${Mk}u);\n\tif (!bloxdSpWindowHas(chunk)) {\n\t\treturn false;\n\t}\n\tlet slot = bloxdSpWindowSlot(chunk);\n\tlet record = slot * 4u;\n\tlet named = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\tlet state = bloxdSpShadowVoxels[record + 3u] & 255u;\n\tif (!named || state != ${he}u) {\n\t\treturn named && state == ${Ee}u;\n\t}\n\tlet local = cell - chunk * 32;\n\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\tlet brickBase = ${te}u + slot * 1536u + brick * 3u;\n\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\tif (((bloxdSpShadowVoxels[brickBase + (bit >> 5u)] >> (bit & 31u)) & 1u) == 0u) {\n\t\treturn false;\n\t}\n\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\tif (pool == 0u) {\n\t\treturn true;\n\t}\n\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\treturn ((entry >> ((bit & 1u) * 16u)) & 0xffffu) == 65535u;\n}\n// ownCell: whether the caster in the cell it starts in can block it (sunShadowTrace.ts traceSunShadow)\nfn bloxdSpShadowMarch(o: vec3f, d: vec3f, offset: vec3i, maxSteps: i32, ownCell: bool) -> vec4f {\n\tvar cell = vec3i(floor(o)) + offset;\n\tvar t = 0.0;\n\tvar axis = -1;\n\tlet inv = select(vec3f(0.0), 1.0 / d, d != vec3f(0.0));\n\t// The chunk the slot and record were read for: they change only with it\n\tvar cached = vec3i(-2147483647);\n\tvar slot = 0u;\n\tvar named = false;\n\tvar state = 0u;\n\t// Rising above the window's highest cell that may block, it crosses nothing more (0: never written)\n\tlet windowWord = bloxdSpShadowVoxels[${Be}u];\n\tlet windowTop = select(2147483647, bitcast<i32>(windowWord) - 1073741824, d.y > 0.0 && windowWord != 0u);\n${ek?"\tlet exits = bloxdSpRayFresh(o, d, offset);\n":""}\tfor (var step = 0; step < maxSteps; step++) {\n${ek?`\t\tif (exits && step > 0 && step % ${Vi} == 0 && bloxdSpVolumeOpenLit(o + t * d, offset)) {\n\t\t\treturn vec4f(o + t * d, -1.0);\n\t\t}\n`:""}\t\tif (cell.y > windowTop) {\n\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t}\n\t\tlet chunk = cell >> vec3u(${Mk}u);\n\t\tif (any(chunk != cached)) {\n\t\t\tif (!bloxdSpWindowHas(chunk)) {\n\t\t\t\treturn vec4f(o + t * d, 1.0);\n\t\t\t}\n\t\t\tcached = chunk;\n\t\t\tslot = bloxdSpWindowSlot(chunk);\n\t\t\tlet record = slot * 4u;\n\t\t\tnamed = all(bitcast<vec3i>(vec3u(bloxdSpShadowVoxels[record], bloxdSpShadowVoxels[record + 1u], bloxdSpShadowVoxels[record + 2u])) == chunk);\n\t\t\tstate = bloxdSpShadowVoxels[record + 3u];\n\t\t}\n\t\tlet chunkLo = chunk * 32;\n\t\tlet kind = state & 255u;\n\t\t// Rising above its highest cell that may block, it crosses nothing more in the chunk\n\t\tif (!named || kind == ${Qe}u || kind == ${ve}u || (d.y > 0.0 && cell.y - chunkLo.y > i32(state >> 8u))) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo, offset, 32);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tif (kind == ${Ee}u) {\n\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t}\n\t\tlet local = cell - chunkLo;\n\t\tlet brick = u32((local.x >> 2u) + 8 * ((local.y >> 2u) + 8 * (local.z >> 2u)));\n\t\tlet brickBase = ${te}u + slot * 1536u + brick * 3u;\n\t\tlet low = bloxdSpShadowVoxels[brickBase];\n\t\tlet high = bloxdSpShadowVoxels[brickBase + 1u];\n\t\tif (low == 0u && high == 0u) {\n\t\t\tlet exit = bloxdSpExitBox(o, d, inv, chunkLo + (local & vec3i(~3)), offset, 4);\n\t\t\tt = max(t, exit.t);\n\t\t\taxis = exit.axis;\n\t\t\tcell = exit.cell;\n\t\t\tcontinue;\n\t\t}\n\t\tlet bit = u32((local.x & 3) + 4 * ((local.y & 3) + 4 * (local.z & 3)));\n\t\tlet exit = bloxdSpExitBox(o, d, inv, cell, offset, 1);\n\t\tif (((select(high, low, bit < 32u) >> (bit & 31u)) & 1u) == 1u) {\n\t\t\tlet pool = bloxdSpShadowVoxels[brickBase + 2u];\n\t\t\tif (pool == 0u) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n\t\t\tlet entry = bloxdSpShadowSpecial[294912u + (pool - 1u) * 32u + (bit >> 1u)];\n\t\t\tlet caster = (entry >> ((bit & 1u) * 16u)) & 0xffffu;\n\t\t\tif (caster == 65535u || ((ownCell || axis >= 0) && bloxdSpCasterBlocks(caster, o, d, cell, offset, t, exit.t, axis))) {\n\t\t\t\treturn vec4f(o + t * d, 0.0);\n\t\t\t}\n${xk}\t\t}\n\t\tt = max(t, exit.t);\n\t\taxis = exit.axis;\n\t\tcell = exit.cell;\n\t}\n\treturn vec4f(o + t * d, -1.0);\n}\n`
    }
    const si = {
      group: 0,
      uniform: 0,
      gx: 1,
      special: 2,
      work: 3,
      volume: 4
    };

    function di() {
      const kk = si;
      return `${Ai(kk)}${ji(kk,!1,!1,!0)}struct BloxdSpVolumeBox {\n\tlo: vec3i,\n\tfirst: u32,\n\tsize: vec3u,\n}\nstruct BloxdSpVolumeWork {\n\tlight: vec3f,\n\tboxes: u32,\n\tbox: array<BloxdSpVolumeBox, ${Ci.e}>,\n}\n@group(${kk.group}) @binding(${kk.work}) var<uniform> bloxdSpVolumeWork: BloxdSpVolumeWork;\n@group(${kk.group}) @binding(${kk.volume}) var bloxdSpVolumeOut: texture_storage_3d<rgba8unorm, write>;\n@compute @workgroup_size(${Ci.k})\nfn main(@builtin(global_invocation_id) id: vec3u) {\n\tvar at = 0u;\n\tlet boxes = min(bloxdSpVolumeWork.boxes, ${Ci.e}u);\n\tfor (var b = 1u; b < boxes; b++) {\n\t\tif (id.x >= bloxdSpVolumeWork.box[b].first) {\n\t\t\tat = b;\n\t\t}\n\t}\n\tlet box = bloxdSpVolumeWork.box[at];\n\tlet index = id.x - box.first;\n\tif (index >= box.size.x * box.size.y * box.size.z) {\n\t\treturn;\n\t}\n\tlet r = box.lo + vec3i(vec3u(index % box.size.x, (index / box.size.x) % box.size.y, index / (box.size.x * box.size.y)));\n\t// From the cell's centre, relative to the volume's corner: exact in f32\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet cell = lo + r;\n\tlet open = !bloxdSpCellFull(cell);\n\tvar lit = 0.0;\n\tbloxdSpCrossed = false;\n\tif (open) {\n\t\t// Past its own caster: a cell's light is what reaches it (sunShadowVolume.ts sunShadowVolumeCell)\n\t\tlet march = bloxdSpShadowMarch(vec3f(r) + vec3f(0.5), bloxdSpVolumeWork.light, lo, ${Ci.i}, false);\n\t\tlit = select(march.w, 1.0, march.w < 0.0);\n\t}\n\ttextureStore(bloxdSpVolumeOut, bloxdSpVolumeTexel(cell), vec4f(lit, select(0.0, 1.0, open), select(0.0, 1.0, lit == 1.0 && !bloxdSpCrossed), 1.0));\n}\n`
    }
    const Vi = 2;
    const Fi = "fn bloxdSpNormalCode(n: vec3f) -> f32 {\n\tlet a = abs(n);\n\tif (a.x >= a.y && a.x >= a.z) {\n\t\treturn select(1.0, 0.0, n.x > 0.0);\n\t}\n\tif (a.y >= a.z) {\n\t\treturn select(3.0, 2.0, n.y > 0.0);\n\t}\n\treturn select(5.0, 4.0, n.z > 0.0);\n}\n";

    function ui(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      const Dk = `var<private> bloxdSpShadowPosition: vec3f;\nfn bloxdSpShadowLight() -> vec4f {\n\t// Towards the sun or moon, as the CPU works it out (sunShadowLight)\n\tlet bloxdSpLight = -${ek.shadowDirection};\n\treturn vec4f(bloxdSpLight, smoothstep(0.0, 0.1, bloxdSpLight.y));\n}\n`,
        fk = "trace" === ik || "lit" === ik,
        Sk = "maskEdge" === ik ? "bloxdSpMaskEdge()" : "textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0).r",
        bk = fk ? `\tlet bloxdSpOrigin = bloxdSpShadowPosition + bloxdSpShadowNormal * 0.25;\n\tlet bloxdSpMarch = bloxdSpShadowMarch(bloxdSpOrigin, bloxdSpLight.xyz, ${ek.renderOffset}, 64, true);\n\tvar bloxdSpLit = bloxdSpMarch.w;\n\tif (bloxdSpLit < 0.0) {\n\t\t// Out of steps, or open and lit from here: on from the volume, from where it got to\n\t\tbloxdSpLit = bloxdSpVolumeAt(bloxdSpMarch.xyz, ${ek.renderOffset});\n\t}\n\tif (bloxdSpLit > 0.0 && !bloxdSpShadowFirstPerson) {\n\t\t// Lifeforms and items, but not on the first-person held item, which the body you're in would shade as you turn\n\t\tbloxdSpLit *= bloxdSpEntityLight(bloxdSpShadowPosition, bloxdSpLight.xyz, bloxdSpFacingDot);\n\t}\n\treturn ${"lit"===ik?"bloxdSpLit":"bloxdSpLight.w * bloxdSpFacing * bloxdSpLit"};\n` : `\treturn bloxdSpLight.w * bloxdSpFacing * ${Sk};\n`;
      return `${Dk}${kk.sunShadow?`var<private> bloxdSpShadowNormal: vec3f;\nvar<private> bloxdSpShadowEmissive: bool;\nvar<private> bloxdSpShadowFirstPerson: bool;\n${fk?function(){const[kk,ek,ik]=Ci.r;return`fn bloxdSpRayFresh(o: vec3f, d: vec3f, offset: vec3i) -> bool {\n\tif (bloxdSpSunShadow.staleCount > 4u) {\n\t\treturn false;\n\t}\n\tlet inv = select(vec3f(1e30), 1.0 / d, d != vec3f(0.0));\n\tlet count = bloxdSpSunShadow.staleCount;\n\tfor (var b = 0u; b < count; b++) {\n\t\tlet lo = vec3f(bloxdSpSunShadow.stale[b].xyz - offset) - 1.0;\n\t\tlet a = (lo - o) * inv;\n\t\tlet z = (lo + 34.0 - o) * inv;\n\t\tlet near = max(max(min(a.x, z.x), min(a.y, z.y)), min(a.z, z.z));\n\t\tlet far = min(min(max(a.x, z.x), max(a.y, z.y)), max(a.z, z.z));\n\t\tif (far >= max(near, 0.0)) {\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn true;\n}\nfn bloxdSpVolumeOpenLit(p: vec3f, offset: vec3i) -> bool {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${kk}.0, ${ek}.0, ${ik}.0);\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.5)) || any(r > size - vec3f(0.5))) {\n\t\treturn false;\n\t}\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, (r + vec3f(bloxdSpVolumeTexel(lo))) / size, 0.0);\n\treturn sample.b >= 0.999;\n}\n`}():""}fn bloxdShadow() -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\t// A face lit by its own light\n\tif (bloxdSpShadowEmissive) {\n\t\treturn 1.0;\n\t}\n\tlet bloxdSpFacingDot = dot(bloxdSpShadowNormal, bloxdSpLight.xyz);\n\tlet bloxdSpFacing = smoothstep(0.0, 0.5, bloxdSpFacingDot);\n\tif (bloxdSpLight.w <= 0.0 || bloxdSpFacing <= 0.0) {\n\t\treturn 0.0;\n\t}\n${bk}}\n`:""}${kk.airShadow?`fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\tlet bloxdSpLight = bloxdSpShadowLight();\n\tlet bloxdSpAt = mix(${ek.eyePosition}, bloxdSpShadowPosition, clamp(bloxdSpT, 0.0, 1.0));\n\treturn bloxdSpLight.w * bloxdSpVolumeAt(bloxdSpAt, ${ek.renderOffset});\n}\n`:""}`
    }
    const qi = "bloxdSpOwnTexture";

    function Ii(kk) {
      return `u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(${kk.texture}) - 1u)))`
    }
    const zi = `fn bloxdSpFlags(bloxdSpWord: u32) -> BloxdFlags {\n\tvar bloxdSpOut: BloxdFlags;\n${me.f.map((kk=>{let[ek,ik]=kk;return`\tbloxdSpOut.${ek} = (bloxdSpWord & ${ik}u) != 0u;\n`})).join("")}\treturn bloxdSpOut;\n}\n`;

    function Qi(kk) {
      return `bloxdSpFlags(${kk})`
    }
    const vi = `${Ve.i}.eyePosition`;

    function Ei(kk, ek, ik, Dk, fk) {
      const Sk = kk.indexOf(ek);
      if (Sk < 0 || kk.indexOf(ek, Sk + 1) >= 0) throw new Error(`Lite's ${fk} program changed at the shader pack ${Dk} hook: ${Sk<0?"no":"more than one"} anchor (lite/${fk}ShaderPack.ts)`);
      return kk.slice(0, Sk) + ik + kk.slice(Sk + ek.length)
    }

    function ai(kk) {
      return kk.sunShadow || kk.airShadow
    }

    function Wi(kk, ek) {
      return ek && ai(kk)
    }
    const ti = {
      group: Ve.g,
      ...Ve.o
    };

    function Xi(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "trace";
      if (!ai(kk)) return "";
      if (ek) {
        const ek = ti,
          fk = "trace" === ik || "lit" === ik;
        let Sk = "";
        kk.sunShadow && (Sk = fk ? `${ji(ek,!0,"lit"===ik)}${Dk=ek,`@group(${Dk.group}) @binding(${Dk.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${Dk.group}) @binding(${Dk.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn bloxdSpEntityRow(i: u32) -> vec4f {\n\treturn bitcast<vec4f>(vec4u(bloxdSpShadowEntities[i], bloxdSpShadowEntities[i + 1u], bloxdSpShadowEntities[i + 2u], bloxdSpShadowEntities[i + 3u]));\n}\nfn bloxdSpEntityLight(p: vec3f, light: vec3f, facing: f32) -> f32 {\n\tlet p4 = vec4f(p, 1.0);\n\tlet across = vec2f(dot(bloxdSpSunShadow.entityX, p4), dot(bloxdSpSunShadow.entityY, p4));\n\tif (any(abs(across) >= vec2f(1.0))) {\n\t\treturn 1.0;\n\t}\n\tlet bin = vec2u(clamp(vec2i(floor((across * 0.5 + 0.5) * 128.0)), vec2i(0), vec2i(127)));\n\tlet b = bin.y * 128u + bin.x;\n\tlet start = bloxdSpShadowEntities[b];\n\tlet count = min(bloxdSpShadowEntities[b + 1u] - start, 64u);\n\tlet along = dot(p, light);\n\tfor (var k = 0u; k < count; k++) {\n\t\tlet base = 81921u + bloxdSpShadowEntities[16385u + start + k] * 16u;\n\t\t// Ending before the fragment along the light, as do those after it: their rays can't meet them\n\t\tif (bitcast<f32>(bloxdSpShadowEntities[base + 13u]) < along) {\n\t\t\tbreak;\n\t\t}\n\t\tlet r0 = bloxdSpEntityRow(base);\n\t\tlet r1 = bloxdSpEntityRow(base + 4u);\n\t\tlet r2 = bloxdSpEntityRow(base + 8u);\n\t\tlet packed = bloxdSpShadowEntities[base + 14u];\n\t\tlet dims = vec3u(packed & 0xffu, (packed >> 8u) & 0xffu, packed >> 16u);\n\t\t// In cells from the grid's low corner, and per unit along the light\n\t\tlet q = vec3f(dot(r0, p4), dot(r1, p4), dot(r2, p4));\n\t\t// Its rows' least squared length: the square of 1 over its largest scale, in cells\n\t\tlet shortest = min(min(dot(r0.xyz, r0.xyz), dot(r1.xyz, r1.xyz)), dot(r2.xyz, r2.xyz));\n\t\tvar dq = vec3f(dot(r0.xyz, light), dot(r1.xyz, light), dot(r2.xyz, light));\n\t\tdq = select(dq, vec3f(1e-9), abs(dq) < vec3f(1e-9));\n\t\tlet inv = 1.0 / dq;\n\t\tlet size = vec3f(dims);\n\t\tlet ta = -q * inv;\n\t\tlet tb = (size - q) * inv;\n\t\tlet tlo = min(ta, tb);\n\t\tlet thi = max(ta, tb);\n\t\t// Off the face's plane, past the cells around its own surface: its largest cells, over how fast the light leaves the\n\t\t// plane (finite as the face turns away)\n\t\tlet t0 = max(max(tlo.x, tlo.y), max(tlo.z, 2.0 * inverseSqrt(shortest) / max(facing, 1e-3)));\n\t\tlet t1 = min(min(thi.x, thi.y), thi.z);\n\t\tif (t0 >= t1) {\n\t\t\tcontinue;\n\t\t}\n\t\tlet up = dq > vec3f(0.0);\n\t\tvar at = vec3i(clamp(floor(q + dq * t0), vec3f(0.0), size - 1.0));\n\t\tlet step = select(vec3i(-1), vec3i(1), up);\n\t\tlet delta = abs(inv);\n\t\tvar next = (vec3f(at) + select(vec3f(0.0), vec3f(1.0), up) - q) * inv;\n\t\tlet data = bloxdSpShadowEntities[base + 12u];\n\t\tfor (var s = 0; s < 198; s++) {\n\t\t\tlet index = u32(at.x) + dims.x * (u32(at.y) + dims.y * u32(at.z));\n\t\t\tif ((bloxdSpShadowEntityGrids[data + (index >> 5u)] & (1u << (index & 31u))) != 0u) {\n\t\t\t\treturn 0.0;\n\t\t\t}\n\t\t\tif (next.x <= next.y && next.x <= next.z) {\n\t\t\t\tat.x += step.x;\n\t\t\t\tnext.x += delta.x;\n\t\t\t} else if (next.y <= next.z) {\n\t\t\t\tat.y += step.y;\n\t\t\t\tnext.y += delta.y;\n\t\t\t} else {\n\t\t\t\tat.z += step.z;\n\t\t\t\tnext.z += delta.z;\n\t\t\t}\n\t\t\tif (any(at < vec3i(0)) || any(at >= vec3i(dims))) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn 1.0;\n}\n`}` : function(kk, ek, ik) {
          const Dk = `@group(${kk}) @binding(${ek}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
          return ik ? `${Dk}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${Fi}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = textureLoad(bloxdSpShadowMask, bloxdSpShadowPixel, 0);\n\tlet mCode = floor(m.r * 0.5);\n\tlet mError = select(1e30, abs(m.g - bloxdSpShadowZ), mCode == code);\n\tif (mError <= tolerance) {\n\t\treturn m.r - mCode * 2.0;\n\t}\n\tlet last = vec2i(textureDimensions(bloxdSpShadowMask)) - 1;\n\tvar lit = m.r - mCode * 2.0;\n\tvar error = mError;\n${["-1, 0","1, 0","0, -1","0, 1"].map((kk=>`\t{\n\t\tlet o = vec2i(${kk});\n\t\tlet q = textureLoad(bloxdSpShadowMask, clamp(bloxdSpShadowPixel + o, vec2i(0), last), 0);\n\t\tlet qCode = floor(q.r * 0.5);\n\t\tlet e = abs(q.g - (bloxdSpShadowZ + dot(vec2f(o), bloxdSpShadowDz)));\n\t\tif (qCode == code && e < error) {\n\t\t\terror = e;\n\t\t\tlit = q.r - qCode * 2.0;\n\t\t}\n\t}\n`)).join("")}\treturn lit;\n}\n` : Dk
        }(ek.group, Ve.s, "maskEdge" === ik));
        const bk = {
          shadowDirection: `${Ve.i}.shadowDirection`,
          renderOffset: `${Ve.i}.renderOffset`,
          eyePosition: `${Ve.i}.eyePosition`
        };
        return `${Ai(ek)}${Sk}${function(kk){const[ek,ik,Dk]=Ci.r;return`@group(${kk.group}) @binding(${kk.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${kk.group}) @binding(${kk.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset: vec3i) -> f32 {\n\tlet lo = bloxdSpSunShadow.volumeLo;\n\tlet size = vec3f(${ek}.0, ${ik}.0, ${Dk}.0);\n\t// From the volume's low corner, in whole blocks either side, so f32 keeps it exact\n\tlet r = p - vec3f(lo - offset);\n\tif (any(r < vec3f(0.0)) || any(r > size)) {\n\t\treturn 1.0;\n\t}\n\t// Clear of the edges, where filtering would wrap onto the far side\n\tlet uvw = (clamp(r, vec3f(0.5), size - vec3f(0.5)) + vec3f(bloxdSpVolumeTexel(lo))) / size;\n\tlet sample = textureSampleLevel(bloxdSpShadowVolume, bloxdSpShadowVolumeSampler, uvw, 0.0);\n\tif (sample.g < 0.03125) {\n\t\treturn 1.0;\n\t}\n\treturn min(sample.r / sample.g, 1.0);\n}\n`}(ek)}${ui(kk,bk,ik)}`
      }
      var Dk;
      return `${kk.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${kk.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
    }

    function Bi(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "trace";
      if (!ek) return "";
      const Sk = (bk = "fragmentInputs.vPositionW", rk = kk.sunShadow ? {
        normal: ik,
        flags: Dk
      } : null, `\n\tbloxdSpShadowPosition = ${bk};\n${rk?`\tbloxdSpShadowNormal = normalize(${rk.normal});\n\tbloxdSpShadowEmissive = (${rk.flags} & ${me.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${rk.flags} & ${me.h}u) != 0u;\n`:""}`);
      var bk, rk;
      return kk.sunShadow && ("mask" === fk || "maskEdge" === fk) ? `${Sk}${Pk="fragmentInputs.position",mk="maskEdge"===fk,`\n\tbloxdSpShadowPixel = vec2i(${Pk}.xy);\n${mk?`\tbloxdSpShadowZ = ${Pk}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${Pk}.z), dpdy(${Pk}.z));\n`:""}`}` : Sk;
      var Pk, mk
    }
    const ci = "bloxdSpTextureRotation",
      Ti = "bloxdSpTextureLayers",
      oi = `@group(${Ve.g}) @binding(${Ve.w}) var<storage, read> ${Ti}: array<u32>;\n`;

    function Zi(kk) {
      return `\tvertexOutputs.vPackTexture = ${Ti}[min(u32(${kk}), arrayLength(&${Ti}) - 1u)];\n`
    }

    function Oi(kk) {
      return void 0 !== kk.uv
    }

    function gi(kk) {
      if (!kk) return "fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn vec2u(1u);\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\treturn vec4f(1.0);\n}\n";
      if (Oi(kk)) return function(kk) {
        const {
          texture: ek,
          cells: ik,
          layers: Dk
        } = kk, fk = `textureDimensions(${ek}, bloxdSpLevel)`, Sk = ik ? `max(vec2u(vec2f(${fk}) / ${ik}), vec2u(1u))` : fk, bk = ik ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Sk};\n\tlet bloxdSpIndex = u32(round(bloxdSpCellIndex));\n\tlet bloxdSpAcross = max(u32(round(${ik}.x)), 1u);\n\tlet bloxdSpDown = max(u32(round(${ik}.y)), 1u);\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\tlet bloxdSpCellAt = vec2u(bloxdSpIndex % bloxdSpAcross, bloxdSpIndex / bloxdSpAcross % bloxdSpDown);\n\treturn textureLoad(${ek}, min(bloxdSpCellAt * bloxdSpSize + bloxdSpAt, ${fk} - 1u), bloxdSpLevel);\n}\n` : `fn bloxdSpOwnTexel(bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${Sk};\n\tlet bloxdSpAt = min(vec2u(fract(bloxdSpUv) * vec2f(bloxdSpSize)), bloxdSpSize - 1u);\n\treturn textureLoad(${ek}, bloxdSpAt, bloxdSpLevel);\n}\n`;
        let rk;
        if (ik)
          if (1 === Dk.length) rk = `\treturn bloxdSpOwnTexel(${Dk[0]}, bloxdSpUv, bloxdSpLevel);\n`;
          else {
            const kk = Dk.length - 1;
            rk = `\tvar bloxdSpColour = bloxdSpOwnTexel(${Dk[kk]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
            for (let ek = kk - 1; ek >= 0; ek--) rk += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${Dk[ek]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a));\n\t}\n`;
            rk += "\treturn vec4f(bloxdSpColour.rgb / max(bloxdSpColour.a, 0.001), bloxdSpColour.a);\n"
          }
        else rk = "\treturn bloxdSpOwnTexel(bloxdSpUv, bloxdSpLevel);\n";
        return `${kk.id?`var<private> ${qi}: u32;\n`:""}${bk}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Ii(kk)};\n\treturn ${Sk};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId != ${kk.id?qi:"0u"}) {\n\t\treturn vec4f(1.0);\n\t}\n\tlet bloxdSpLevel = ${Ii(kk)};\n${rk}}\n`
      }(kk);
      const ek = kk,
        ik = kk => {
          const ik = kk > 0 ? `bloxdSpLayer - ${ek.layers*kk}u` : "bloxdSpLayer";
          return `return textureSampleLevel(textureAtlas${kk}, ${ek.sampler}, bloxdSpTurned, ${ik}, round(bloxdSpMipLevel));`
        };
      let Dk = "";
      for (let Sk = 0; Sk < ek.count - 1; Sk++) Dk += `\tif (bloxdSpLayer < ${ek.layers*(Sk+1)}u) {\n\t\t${ik(Sk)}\n\t}\n`;
      const fk = ek.frame ? `${ek.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
      return `var<private> ${ci}: u32;\n${oi}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId == 0u) {\n\t\treturn vec4f(1.0);\n\t}\n\t// Each quarter turn clockwise the face shows its texture at reads the unturned texture at (v, 1 - u)\n\tvar bloxdSpTurned = bloxdSpUv;\n\tif (${ci} == 1u) {\n\t\tbloxdSpTurned = vec2f(bloxdSpUv.y, 1.0 - bloxdSpUv.x);\n\t} else if (${ci} == 2u) {\n\t\tbloxdSpTurned = 1.0 - bloxdSpUv;\n\t} else if (${ci} == 3u) {\n\t\tbloxdSpTurned = vec2f(1.0 - bloxdSpUv.y, bloxdSpUv.x);\n\t}\n${fk}${Dk}\t${ik(ek.count-1)}\n}\n`
    }

    function Gi(kk, ek, ik) {
      return !!kk.surface && "bloxdDefaultSurface" !== kk.surface && function(kk, ek) {
        return "liquid" === ek || !kk
      }(ek, ik)
    }

    function Ni(kk, ek) {
      return kk.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${ek.vertexLocalPosition}, ${Qi(ek.vertexFlags)});\n\t\tlet bloxdSpVertex = ${kk.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t}\n` : ""
    }

    function Ri(kk, ek, ik, Dk, fk) {
      if (!kk.surface) return "";
      const Sk = (kk, ek) => `\n\tlet bloxdSpTexelUV = ${kk};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = clamp(bloxdSpLod, 0.0, f32(textureNumLevels(${ek}) - 1u));`;
      let bk = "",
        rk = "0u, 0u, vec2f(0.0), 0.0";
      const Pk = Dk && Oi(Dk) ? Dk : null,
        mk = Dk && !Oi(Dk) ? Dk : null;
      if (Pk) {
        bk = `${Pk.id?`\n\tlet bloxdSpTexture = ${Pk.id};\n\t${qi} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${Pk.uv};${Sk(function(kk,ek){var ik;return`${null!==(ik=kk.levelUv)&&void 0!==ik?ik:kk.cells?`${ek} / ${kk.cells}`:ek} * vec2f(textureDimensions(${kk.texture}))`}(Pk,"bloxdSpUv"),Pk.texture)}`, rk = (Pk.id ? `${qi}, bloxdSpTexture >> 16u` : "0u, 0u") + ", bloxdSpUv, bloxdSpMipLevel"
      } else mk && (bk = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${ci} = bloxdSpTexture >> 16u;${Sk(`fragmentInputs.vMainUV1 * ${(0,je.rb)(mk.width)}`,"textureAtlas0")}`, rk = `bloxdSpTexture & 0xffffu, ${ci}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
      const Mk = fk.overlayColour,
        Kk = Mk ? "mix(bloxdSpSurface.colour, bloxdSpSurface.overlayColour.rgb, bloxdSpSurface.overlayColour.a)" : "bloxdSpSurface.colour",
        xk = "bloxdDefaultSurface" !== kk.surface || Mk ? `\n\tbaseColor = vec4f(${Kk}, baseColor.a);` : "",
        nk = Gi(kk, ek, ik) ? `\n\t${fk.alphaOut} = bloxdSpSurface.alpha;` : "";
      return `${bk}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${fk.alpha}, ${fk.enchantTier}, ${fk.enchantColour}, ${fk.enchantSpeed}, ${null!==Mk&&void 0!==Mk?Mk:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${fk.normal}, ${fk.localPosition}, ${Qi(fk.flags)}, ${rk});\n\tlet bloxdSpSurface = ${kk.surface}(bloxdSpSurfaceIn);${xk}${nk}\n`
    }
    const Ji = "bloxdSpLightIn";

    function kD(kk, ek, ik, Dk) {
      if (!kk.light) return "";
      const fk = ek ? `${je.o}.rgb, ${je.o}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${je.k}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
        {
          lambert: Sk,
          diffuse: bk,
          emissive: rk,
          ambient: Pk,
          fogColour: mk,
          fogAlpha: Mk,
          normal: Kk
        } = Dk;
      return `\tvar ${Ji} = BloxdLightIn(vec3f(0.0), ${ik?Sk:"0.0"}, ${bk}, ${rk}, ${Pk}, ${fk}, ${mk}, ${Mk}, fragmentInputs.vPositionW, ${Kk}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn.uv, bloxdSpSurfaceIn.mipLevel);\n\t${Ji}.litColour = bloxdLitColour(bloxdSpSurface, ${Ji});\n`
    }

    function eD(kk) {
      return kk.light ? `\n\t{\n\t\tlet bloxdSpLight = ${kk.light}(bloxdSpSurface, ${Ji});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
    }
    const iD = "\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n",
      DD = "\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n",
      fD = "\treturn color;\n}",
      SD = {
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
    const bD = Object.freeze({});

    function rD(kk) {
      var ek;
      return !(null === (ek = (0, Fe.e)(kk)) || void 0 === ek || !ek.sceneDepth)
    }

    function PD(kk) {
      const ek = (0, Fe.e)(kk);
      return !!ek && Gi(ek.hooks, ek.strict, ek.program)
    }

    function mD(kk, ek, ik, Dk) {
      return Ei(kk, ek, ik, Dk, "terrain")
    }

    function MD(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none";
      const Sk = function(kk) {
          return (0, Fe.d)(kk.packVariant, kk.liquid ? "liquid" : "terrain")
        }(kk),
        {
          hooks: bk
        } = Sk,
        rk = Wi(Sk, Dk),
        Pk = "edge" === fk ? "maskEdge" : "plain" === fk ? "mask" : "trace",
        mk = Ni(bk, SD);
      mk && (ek = mD(ek, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n", `\tvar worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);${mk}\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n`, "vertex"));
      const Mk = "atlas" === kk.texture ? {
          count: kk.atlasCount,
          layers: kk.atlasLayers,
          width: kk.yJ,
          sampler: "atlasSampler",
          frame: kk.animated ? ik : null
        } : null,
        Kk = `${Sk.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${Bi(Sk,rk,SD.normal,SD.flags,Pk)}${Ri(bk,Sk.strict,Sk.program,Mk,SD)}`;
      Kk && (ek = mD(ek, iD, `${iD.slice(0,-1)}${Kk}`, "surface"));
      const xk = eD(bk);
      return xk && (ek = mD(ek, DD, `${kD(bk,kk.lighting,kk.dirLightCount>0,SD)}${DD}`, "light input"), ek = mD(ek, fD, `${xk.slice(1)}${fD}`, "light")), `${(0,Ve.A)()}${Sk.sceneDepth?`@group(${Ve.g}) @binding(${Ve.n}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSpPixel: vec2i;\nvar<private> bloxdSpPositionW: vec3f;\nfn bloxdOpaqueBehind() -> BloxdOpaqueBehind {\n\tlet bloxdSpZ = textureLoad(bloxdSpSceneDepth, bloxdSpPixel, 0).r;\n\tif (bloxdSpZ <= 0.0) {\n\t\treturn BloxdOpaqueBehind(false, vec3f(0.0), 0.0);\n\t}\n\tlet bloxdSpEye = ${vi};\n\tlet bloxdSpScale = max(bloxdSpZ / (scene.view * vec4f(bloxdSpPositionW, 1.0)).z, 1.0);\n\tlet bloxdSpBehind = bloxdSpEye + (bloxdSpPositionW - bloxdSpEye) * bloxdSpScale;\n\treturn BloxdOpaqueBehind(true, bloxdSpBehind, distance(bloxdSpBehind, bloxdSpEye));\n}\n`:""}${Xi(Sk,rk,Pk)}${gi(Mk)}${zi}fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * 0.5)) + bloxdRenderOffset();\n}\n${Sk.code}${ek}`
    }
    const KD = Ck.d.WGSL;

    function xD(kk) {
      return void 0 !== kk.packVariant
    }
    const nD = {
        zDk: 0,
        QDk: 4,
        vDk: 8,
        EDk: 12,
        fogInfos: 16,
        fogColour: 20,
        outputHeight: 23,
        sceneAmbient: 24,
        dirLights: 28,
        aoLevels: 44
      },
      UD = nD.aoLevels + 4,
      HD = {
        diffuse: 0,
        ambientAndCutoff: 4,
        emissiveAndLevel: 8,
        anim: 12
      },
      wD = "\nstruct TerrainFrameUniforms {\n\tuHeldLightColour: vec4f,\n\tuHeldLightPos: vec4f,\n\tuSkyLightColour: vec3f,\n\tuAmbientLightColour: vec3f,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tsceneAmbient: vec3f,\n\tuDirLights: array<vec4f, 4>,\n\taoLevels: vec4f,\n}\n",
      lD = "\nstruct TerrainMaterialUniforms {\n\tvDiffuseColor: vec4f,\n\tambientAndCutoff: vec4f,\n\temissiveAndLevel: vec4f,\n\tanim: vec4f,\n}\n",
      pD = "\nstruct LiteSceneUniforms {\n\tviewProjection: mat4x4f,\n\tview: mat4x4f,\n\tvEyePosition: vec4f,\n}\n@group(0) @binding(0) var<uniform> scene: LiteSceneUniforms;\nfn liteWorldLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, clip.z * 0.5, clip.w);\n}\nfn liteFrontLayer(clip: vec4f) -> vec4f {\n\treturn vec4f(clip.xy, (clip.z + clip.w) * 0.5, clip.w);\n}\n",
      yD = "\n\tlet fading = fragmentInputs.vVisibility < 255.0 / 256.0;\n\tif (fading && fragmentInputs.vVisibility < bayerDither(vec2f(fragmentInputs.position.x, uniforms.outputHeight - fragmentInputs.position.y))) {\n\t\tdiscard;\n\t}\n",
      YD = "\nfn calcFogFactor(fogDistance: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = uniforms.vFogInfos.y;\n\tlet fogEnd = uniforms.vFogInfos.z;\n\tlet fogDensity = uniforms.vFogInfos.w;\n\tlet dist = length(fogDistance);\n\tif (uniforms.vFogInfos.x == 3.0) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (uniforms.vFogInfos.x == 1.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (uniforms.vFogInfos.x == 2.0) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n",
      LD = {
        position: 0,
        normal: 1,
        color: 2,
        uv: 3,
        packedLight: 5,
        blockFlagWords: 7
      },
      CD = 0,
      AD = 3,
      jD = 4,
      sD = 5,
      dD = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet du = select(-${se.c}, ${se.c}, corner == 0u || corner == 3u);\n\tlet dv = select(-${se.c}, ${se.c}, corner < 2u);\n\tif (axis == 0u) {\n\t\treturn vec2f(s * (p.z + du), -(p.y + dv));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(s * (p.x + dv), -(p.z + du));\n\t}\n\treturn vec2f(-s * (p.x + du), -(p.y + dv));\n}\n`,
      VD = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight(quad: u32, slot: u32) -> f32 {\n\tlet pair = quadLight[quad * 2u + (slot >> 1u)];\n\treturn f32(select(pair, pair >> 16u, (slot & 1u) == 1u) & 0xffffu);\n}\nfn slotCorner(dir: u32, diagonal: u32, slot: u32) -> u32 {\n\tlet reversed = any(vec3u(dir) == vec3u(${[0,1,2,3,4,5].filter((kk=>de.c>>kk&1)).join("u, ")}u));\n\treturn (diagonal + select(slot, 4u - slot, reversed)) & 3u;\n}\nfn quadCorner(r0: u32, axis: u32, corner: u32) -> vec3f {\n\tlet w = f32(((r0 >> 18u) & 63u) + 1u) * select(0.0, 1.0, corner == 1u || corner == 2u);\n\tlet h = f32(((r0 >> 24u) & 63u) + 1u) * select(0.0, 1.0, corner >= 2u);\n\tlet du = select(vec3f(0.0, 0.0, w), vec3f(w, 0.0, 0.0), axis == 2u);\n\tlet dv = select(vec3f(0.0, h, 0.0), vec3f(h, 0.0, 0.0), axis == 1u);\n\treturn vec3f(f32(r0 & 63u), f32((r0 >> 6u) & 63u), f32((r0 >> 12u) & 63u)) + du + dv;\n}\n`;
    const FD = {
      Px: "material.anim.x",
      stride: "material.anim.y",
      count: "material.anim.z",
      perTexture: kk => `animDataPerTex[${kk}]`
    };

    function uD(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FD;
      return `\n\tlet atlasIdxIn = ${kk};\n\tlet animTick = ${ik.Px};\n\tlet animTickStride = ${ik.stride};\n\tlet numAnimTextures = ${ik.count};\n\t${(0,Ak.i)(Ck.d.WGSL,ik.perTexture)}\n\t${ek}animLayer;\n`
    }

    function qD(kk) {
      const ek = (ek, ik) => {
        const Dk = ek > 0 ? `fragmentInputs.texAtlasIndex - ${kk.atlasLayers.toFixed(1)} * ${ek.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
        return `${ik?"textureSampleLevel":"textureSample"}(textureAtlas${ek}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${Dk}))${ik?", atlasLod":""})`
      };
      if (1 === kk.atlasCount) return `baseColor = ${ek(0,!1)};`;
      let ik = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,je.rb)(kk.yJ)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
      for (let Dk = 0; Dk < kk.atlasCount; Dk++) {
        const fk = kk.atlasLayers * (Dk + 1) - .5;
        ik += `${Dk>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,je.rb)(fk)}) {\n\t\tbaseColor = ${ek(Dk,!0)};\n\t}`
      }
      return ik
    }

    function ID(kk) {
      return `terrain-${kk.texture}${"atlas"===kk.texture?kk.atlasCount:""}${kk.animated?"-anim":""}${kk.alphaTest?"-test":""}${kk.lighting?"-lit":""}-dir${kk.dirLightCount}${kk.packed?"-packed":""}${xD(kk)?`-sp${kk.packVariant}`:""}${kk.liquid?"-liquid":""}${kk.resting?"-rest":""}`
    }

    function zD(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none";
      const Dk = function(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none";
        const ik = "none" !== kk.texture,
          Dk = "atlas" === kk.texture,
          fk = kk.dirLightCount > 0,
          Sk = xD(kk);
        if (kk.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${kk.dirLightCount}`);
        let bk = 1,
          rk = "@group(2) @binding(0) var<uniform> material: TerrainMaterialUniforms;\n";
        if (Dk) {
          kk.animated && (rk += `@group(2) @binding(${bk++}) var<storage, read> animDataPerTex: array<f32>;\n`), rk += `@group(2) @binding(${bk++}) var atlasSampler: sampler;\n`;
          for (let ek = 0; ek < kk.atlasCount; ek++) rk += `@group(2) @binding(${bk++}) var textureAtlas${ek}: texture_2d_array<f32>;\n`
        } else "single" === kk.texture && (rk += `@group(2) @binding(${bk++}) var diffuseSamplerSampler: sampler;\n`, rk += `@group(2) @binding(${bk++}) var diffuseSampler: texture_2d<f32>;\n`);
        const Pk = function(kk) {
            const ek = LD,
              ik = "none" !== kk.texture,
              Dk = "atlas" === kk.texture,
              fk = xD(kk);
            return kk.packed ? {
              declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${ik?"uv: vec2f,":""}\n\t${Dk?"texAtlasIndices: f32,":""}\n\t${kk.lighting?"aPackedLightLevels: f32,":""}\n\t${fk?"blockFlagWords: vec2u,":""}\n}\n${dD}\n${VD}\n${"single"===kk.texture?"\nfn packedFaceUvOffset(r0: u32, dir: u32) -> vec2f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\tlet x = f32(r0 & 63u);\n\tlet y = f32((r0 >> 6u) & 63u);\n\tlet z = f32((r0 >> 12u) & 63u);\n\tif (axis == 0u) {\n\t\treturn vec2f(-s * z, y + f32(((r0 >> 24u) & 63u) + 1u));\n\t}\n\tif (axis == 1u) {\n\t\treturn vec2f(-s * x, z + f32(((r0 >> 18u) & 63u) + 1u));\n\t}\n\treturn vec2f(s * x, y + f32(((r0 >> 24u) & 63u) + 1u));\n}\n":""}\n`,
              parameter: "packedInputs: PackedVertexInputs",
              decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet r2 = quads[quad * 3u + 2u];\n\tlet dir = r2 & 7u;\n\tlet corner = slotCorner(dir, (r2 >> 11u) & 1u, slot);\n\tlet position = quadCorner(quads[quad * 3u], dir >> 1u, corner);\n\tlet face = quads[quad * 3u + 1u];\n\t// A constant shift a slot, as render-shaders' terrain.wgsl decodes it\n\tlet aoBits = r2 >> 3u;\n\tlet ao = select(select(aoBits, aoBits >> 2u, slot == 1u), select(aoBits >> 4u, aoBits >> 6u, slot == 3u), slot >= 2u) & 3u;\n\tvertexInputs.chunkSlot = packedInputs.chunkSlot;\n\tvertexInputs.position = position;\n\tvertexInputs.normal = packedNormal(dir);\n\t// Packed parts are untinted, so the colour is the AO level's, as unorm8 decodes it; its alpha no program reads\n\tvertexInputs.color = vec4f(vec3f(uniforms.aoLevels[ao]), 1.0);\n\t${ik?"vertexInputs.uv = packedUv(position, dir, corner);":""}\n\t${"single"===kk.texture?"vertexInputs.uv += packedFaceUvOffset(quads[quad * 3u], dir);":""}\n\t${Dk?"vertexInputs.texAtlasIndices = f32(face & 0xffffu);":""}\n\t${kk.lighting?"vertexInputs.aPackedLightLevels = quadSlotLight(quad, slot);":""}\n\t${fk?"vertexInputs.blockFlagWords = vec2u(face, face << 8u);":""}\n`
            } : {
              declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${ek.position}) position: vec3f,\n\t@location(${ek.normal}) normal: vec4f,\n\t@location(${ek.color}) color: vec4f,\n\t${ik?`@location(${ek.uv}) uv: vec2f,`:""}\n\t${kk.lighting?`@location(${ek.packedLight}) aPackedLightLevels: f32,`:""}\n\t${fk?`@location(${ek.blockFlagWords}) blockFlagWords: vec2u,`:""}\n}\n`,
              parameter: "vertexInputs: VertexInputs",
              decode: ""
            }
          }(kk),
          mk = `\n${pD}\n${wD}\n${lD}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\n\t/** The fade-in. */\n\tvisibility: f32,\n\t/** Quad records only: where the part's faces end in its page, in records, and how many it has. */\n\tfaceEnd: u32,\n\tfaceCount: u32,\n}\n@group(1) @binding(1) var<storage, read> chunks: array<TerrainChunk>;\n${rk}\n${Gk}\n${Pk.declarations}\nstruct Varyings {\n\t${"none"===ek?"":"// Invariant: at 1x the scene's pass draws over the pre-pass's depth with an equal test\n\t@invariant "}@builtin(position) position: vec4f,\n\t// Centroid, as an edge pixel's centre can lie past its face and packs floor this to find the block\n\t@location(0) @interpolate(perspective, centroid) vPositionW: vec3f,\n\t@location(1) vNormalW: vec3f,\n\t@location(2) vColor: vec3f,\n\t@location(3) vFogDistance: vec3f,\n\t${kk.resting?"":"@location(4) @interpolate(flat) vVisibility: f32,"}\n\t${fk?"@location(5) vTerrainLambert: f32,":""}\n\t${ik?"@location(6) @interpolate(perspective, centroid) vMainUV1: vec2f,":""}\n\t${Dk?"@location(7) texAtlasIndex: f32,":""}\n\t${kk.lighting?"@location(8) vLightLevels: vec4f,":""}\n\t${Sk?"@location(9) @interpolate(flat) vBlockFlags: u32,":""}\n\t${Sk&&Dk?"@location(10) @interpolate(flat) vPackTexture: u32,":""}\n}\n\n${kk.resting?"":(0,je.w)(KD)}\n${YD}\n\n@vertex\nfn mainVertex(${Pk.parameter}) -> Varyings {\n\t${Pk.decode}\n\tvar vertexOutputs: Varyings;\n\tlet chunk = chunks[vertexInputs.chunkSlot];\n\t${Sk?`vertexOutputs.vBlockFlags = ((vertexInputs.blockFlagWords.x >> 24u) << 8u) | (vertexInputs.blockFlagWords.y >> 24u) | ${me.c.placed}u;`:""}\n\t${Sk&&Dk?Zi("vertexInputs.texAtlasIndices").trim():""}\n\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz);\n\tvertexOutputs.vColor = vertexInputs.color.rgb;\n\tvertexOutputs.vFogDistance = (scene.view * worldPos).xyz;\n\t${kk.resting?"":"vertexOutputs.vVisibility = chunk.visibility;"}\n\t${ik?"vertexOutputs.vMainUV1 = vertexInputs.uv;":""}\n\t${Dk?function(kk){return kk?uD("vertexInputs.texAtlasIndices","vertexOutputs.texAtlasIndex = "):"vertexOutputs.texAtlasIndex = vertexInputs.texAtlasIndices;"}(kk.animated):""}\n\t${"single"===kk.texture&&kk.animated?"\n\tlet frameTick = floor(material.anim.x / material.anim.z);\n\tlet animTexIndex = frameTick - material.anim.y * floor(frameTick / material.anim.y);\n\tvertexOutputs.vMainUV1.y = (vertexOutputs.vMainUV1.y + animTexIndex) / material.anim.y;\n":""}\n\t${(0,je.gb)(KD)}\n\t${(0,je.I)(KD,kk.dirLightCount)}\n\treturn vertexOutputs;\n}\n\n@fragment\nfn mainFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${kk.resting?"":yD}\n\tvar baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${Dk?qD(kk):""}\n\t${"single"===kk.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ik?"alpha *= baseColor.a;\n\tbaseColor = vec4f(baseColor.rgb * material.emissiveAndLevel.w, baseColor.a);":""}\n\tbaseColor = vec4f(baseColor.rgb * fragmentInputs.vColor, baseColor.a);\n\t${kk.alphaTest?"if (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}\n\talpha = 1.0;":""}\n\tvar diffuseBase = vec3f(0.0);\n\t${fk?"diffuseBase += vec3f(fragmentInputs.vTerrainLambert);":""}\n\tlet ambient = material.ambientAndCutoff.xyz * uniforms.sceneAmbient;\n\tlet finalDiffuse = clamp(diffuseBase * material.vDiffuseColor.rgb + material.emissiveAndLevel.xyz + ambient, vec3f(0.0), vec3f(1.0)) * baseColor.rgb;\n\t// Nothing past here changes alpha: light, fog and a pack's light hook keep it\n\tvar color = vec4f(finalDiffuse, select(alpha, 1.0, ${gk}));\n\t${xD(kk)?(0,je.nb)(Ck.d.WGSL):(0,je.U)(KD)}\n\tcolor = vec4f(max(color.rgb, vec3f(0.0)), color.a);\n\tlet fog = calcFogFactor(fragmentInputs.vFogDistance);\n\tcolor = vec4f(mix(uniforms.vFogColor, color.rgb, fog), color.a);\n\treturn color;\n}\n`,
          Mk = new Set;
        kk.lighting && Mk.add("BLOXD_LIGHTING");
        fk && Mk.add("BLOXD_TERRAIN_DIRECTIONAL");
        return Le(mk, new Map([...Mk].map((kk => [kk, !0]))))
      }(kk, ik);
      if (!xD(kk)) return Dk;
      const fk = MD(kk, Dk, uD, ek, ik);
      return "none" === ik ? fk : `${fk}${function(kk){const ek="none"!==kk.texture&&kk.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${kk.resting?"":yD}\n\t${kk.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material.vDiffuseColor.a;\n\t${ek&&"atlas"===kk.texture?qD(kk):""}\n\t${ek&&"single"===kk.texture?"baseColor = textureSample(diffuseSampler, diffuseSamplerSampler, fragmentInputs.vMainUV1);":""}\n\t${ek?"alpha *= baseColor.a;":""}\n\tif (alpha < material.ambientAndCutoff.w) {\n\t\tdiscard;\n\t}`:""}\n\tlet emissive = (fragmentInputs.vBlockFlags & ${me.c.emissive}u) != 0u;\n\treturn vec4f(normalize(fragmentInputs.vNormalW) * 0.5 + 0.5, select(0.0, 1.0, emissive));\n}\n`}(kk)}`
    }
    const QD = new Map([
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

    function vD(kk, ek) {
      const ik = new Map;
      let Dk = 0;
      const fk = [],
        Sk = [],
        bk = [];
      for (const mk of ek) {
        var rk, Pk;
        const ek = null !== (rk = mk.type.trim().split(/\s+/).pop()) && void 0 !== rk ? rk : mk.type,
          Mk = QD.get(ek);
        if (!Mk) throw new Error(`Lite: no uniform layout for ${mk.name}: ${mk.type}`);
        const Kk = null !== (Pk = mk.arraySize) && void 0 !== Pk ? Pk : 0,
          xk = Kk ? 4 : Mk.align;
        Dk = Math.ceil(Dk / xk) * xk;
        const nk = Kk ? 4 * Math.ceil(Mk.floats / 4) : Mk.floats;
        if (ik.set(mk.name, {
            offset: Dk,
            floats: Mk.floats,
            arraySize: Kk,
            stride: nk
          }), Kk && Mk.floats <= 2) {
          const ek = `${kk}_${bk.length}_strided`;
          Sk.push(`struct ${ek} {\n\t@size(16) el: ${Mk.wgsl},\n}`), bk.push(mk.name), fk.push(`\t@align(16) ${mk.name}: array<${ek}, ${Kk}>,`)
        } else Kk ? fk.push(`\t@align(16) ${mk.name}: array<${Mk.wgsl}, ${Kk}>,`) : fk.push(`\t${mk.name}: ${Mk.wgsl},`);
        Dk += Kk ? nk * Kk : Mk.floats
      }
      return {
        slots: ik,
        floats: Math.max(4, 4 * Math.ceil(Dk / 4)),
        wgsl: `${Sk.join("\n")}\nstruct ${kk} {\n${fk.join("\n")}\n}\n`,
        stridedArrays: bk
      }
    }
    const ED = [{
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
      hD = [{
        name: "vOpacityInfos",
        type: "vec2"
      }, {
        name: "opacityMatrix",
        type: "mat4"
      }],
      aD = [{
        name: "vEmissiveInfos",
        type: "vec2"
      }, {
        name: "emissiveMatrix",
        type: "mat4"
      }];

    function WD(kk, ek) {
      return `#if defined(${kk}) && ${kk}DIRECTUV == 0\nvarying v${ek}UV: vec2f;\n#endif`
    }

    function tD(kk, ek, ik) {
      return `#if defined(${kk}) && ${kk}DIRECTUV == 0\nif (uniforms.v${ek}Infos.x==0.)\n{vertexOutputs.v${ek}UV= (uniforms.${ik}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ek}UV= (uniforms.${ik}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
    }

    function XD(kk, ek, ik) {
      return `#ifdef ${kk}\n#if ${kk}DIRECTUV == 1\n#define v${ek}UV vMainUV1\n#elif ${kk}DIRECTUV == 2\n#define v${ek}UV vMainUV2\n#else\nvarying v${ek}UV: vec2f;\n#endif\nvar ${ik}SamplerSampler: sampler;\nvar ${ik}Sampler: texture_2d<f32>;\n#endif`
    }
    const BD = {
        lights: 0,
        lightStride: 12,
        fogInfos: 96,
        fogColour: 100,
        outputHeight: 103,
        animTick: 104,
        timeMs: 105
      },
      cD = 256,
      TD = "\nstruct LiteLight {\n\tvLightData: vec4f,\n\tvLightDiffuse: vec4f,\n\tvLightSpecular: vec4f,\n}\nstruct LiteFrameUniforms {\n\tlights: array<LiteLight, 8>,\n\tvFogInfos: vec4f,\n\tvFogColor: vec3f,\n\toutputHeight: f32,\n\tanimTick: f32,\n\ttimeMs: f32,\n}\n@group(1) @binding(0) var<uniform> frame: LiteFrameUniforms;\nstruct Mesh {\n\tworld: mat4x4f,\n\tvisibility: f32,\n}\n@group(1) @binding(1) var<uniform> mesh: Mesh;\nstruct Internals {\n\tyFactor_: f32,\n\ttextureOutputHeight_: f32,\n}\nconst internals = Internals(1.0, 0.0);\n",
      oD = "#ifdef INSTANCES\nattribute world0: vec4f;\nattribute world1: vec4f;\nattribute world2: vec4f;\nattribute world3: vec4f;\n#ifdef INSTANCESCOLOR\nattribute instanceColor: vec4f;\n#endif\n#endif",
      ZD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#ifdef THIN_INSTANCES\nfinalWorld=mesh.world*finalWorld;\n#endif\n#else\nvar finalWorld=mesh.world;\n#endif",
      OD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif",
      gD = "#ifdef LITE_FRONT_LAYER\nvertexOutputs.position=liteFrontLayer(vertexOutputs.position);\n#else\nvertexOutputs.position=liteWorldLayer(vertexOutputs.position);\n#endif\nreturn vertexOutputs;",
      GD = "#ifdef FOG\nfn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;\nvar fogStart: f32=frame.vFogInfos.y;\nvar fogEnd: f32=frame.vFogInfos.z;\nvar fogDensity: f32=frame.vFogInfos.w;\nvar fogDistance: f32=length(fragmentInputs.vFogDistance);\nif (3.==frame.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);\n}\nelse if (1.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDensity);\n}\nelse if (2.==frame.vFogInfos.x)\n{fogCoeff=1.0/pow(2.71828,fogDistance*fogDistance*fogDensity*fogDensity);\n}\nreturn clamp(fogCoeff,0.0,1.0);\n}\n#endif",
      ND = "const LinearEncodePowerApprox: f32=2.2;\nconst GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;\nfn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,\nb11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,\nb21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}\nfn toLinearSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(LinearEncodePowerApprox));}\nfn toGammaSpaceVec3(color: vec3f)->vec3f {return pow(color,vec3f(GammaEncodePowerApprox));}\nfn fromRGBD(rgbd: vec4<f32>)->vec3f {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}",
      RD = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${oD}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nvarying vDiffuseUV: vec2f;\n#endif\n${WD("OPACITY","Opacity")}\n${WD("EMISSIVE","Emissive")}\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n${ND}\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n${ZD}\nvar worldPos: vec4f=finalWorld*vec4f(positionUpdated,1.0);\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transpose(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\nvertexOutputs.position=scene.viewProjection*worldPos;\nvertexOutputs.vPositionW= worldPos.xyz;\n#ifndef UV1\nvar uvUpdated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f=vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#if defined(DIFFUSE) && DIFFUSEDIRECTUV == 0\nif (uniforms.vDiffuseInfos.x==0.)\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.vDiffuseUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif\n${tD("OPACITY","Opacity","opacity")}\n${tD("EMISSIVE","Emissive","emissive")}\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${OD}\n#define CUSTOM_VERTEX_MAIN_END\n${gD}\n}\n`;
    const JD = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n#ifdef DIFFUSE\n#if DIFFUSEDIRECTUV == 1\n#define vDiffuseUV vMainUV1\n#elif DIFFUSEDIRECTUV == 2\n#define vDiffuseUV vMainUV2\n#else\nvarying vDiffuseUV: vec2f;\n#endif\nvar diffuseSamplerSampler: sampler;\nvar diffuseSampler: texture_2d<f32>;\n#endif\n${XD("OPACITY","Opacity","opacity")}\n${XD("EMISSIVE","Emissive","emissive")}\nstruct lightingInfo\n{diffuse: vec3f,\n};\nfn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;\nvar lightVectorW: vec3f;\nvar attenuation: f32=1.0;\nif (lightData.w==0.)\n{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;\nattenuation=max(0.,1.0-length(direction)/range);\nlightVectorW=normalize(direction);\n}\nelse\n{lightVectorW=normalize(-lightData.xyz);\n}\nvar ndl: f32=max(0.,dot(vNormal,lightVectorW));\nresult.diffuse=ndl*diffuseColor*attenuation;\nreturn result;\n}\nfn TEXRD(t: texture_2d<f32>,ts: sampler,uv: vec2f)->vec4f {return textureSample(t,ts,uv);\n}\n#ifdef REFLECTION\nvar reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\nfn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f\n{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}\nfn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f\n{\n#ifdef REFLECTIONMAP_SKYBOX\nreturn computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);\n#else\nreturn vec3f(0.);\n#endif\n}\n#endif\n${ND}\n${GD}\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;\n#ifdef NORMAL\nvar normalW: vec3f=normalize(fragmentInputs.vNormalW);\n#else\nvar normalW: vec3f=normalize(cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));\nnormalW=select(-normalW,normalW,dot(normalW,viewDirectionW)>=0.0);\n#endif\n#ifdef TWOSIDEDLIGHTING\nnormalW=select(-normalW,normalW,fragmentInputs.frontFacing);\n#endif\nvar uvOffset: vec2f= vec2f(0.0,0.0);\n#ifdef DIFFUSE\nbaseColor=TEXRD(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);\n#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)\nif (baseColor.a<uniforms.alphaCutOff) {discard;}\n#endif\n#ifdef ALPHAFROMDIFFUSE\nalpha*=baseColor.a;\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_ALPHA\nbaseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);\n#endif\n#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE\nvar baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n#define CUSTOM_FRAGMENT_BEFORE_LIGHTS\nvar glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;\nvar diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;\nvar shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;\n${Array.from({length:4},((kk,ek)=>function(kk){const ek=`
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
      ek
    }.vLightDiffuse;\
    n #define CUSTOM_LIGHT$ {
      kk
    }
    _COLOR\ ninfo = computeLighting(viewDirectionW, normalW, $ {
      ek
    }.vLightData, diffuse$ {
      kk
    }.rgb, $ {
      ek
    }.vLightSpecular.rgb, diffuse$ {
      kk
    }.a, glossiness);\
    nshadow = 1.;\
    naggShadow += shadow;\
    nnumLights += 1.0;\
    ndiffuseBase += info.diffuse * shadow;\
    n #endif`}(ek))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n#ifdef REFLECTIONMAP_OPPOSITEZ\nvReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);\n#endif\n#ifdef ROUGHNESS\nvar bias: f32=uniforms.vReflectionInfos.y;\nreflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);\n#else\nreflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);\n#endif\n#ifdef LITE_REFLECTION_LUMINANCE\nreflectionColor=vec4f(reflectionColor.rrr,1.0);\n#endif\n#ifdef RGBDREFLECTION\nreflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);\n#endif\n#ifdef IS_REFLECTION_LINEAR\nreflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);\n#endif\nreflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);\n#endif\n#ifdef OPACITY\nvar opacityMap: vec4f=TEXRD(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*uniforms.vOpacityInfos.y;\n#endif\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=fragmentInputs.vColor.a;\n#endif\n#ifdef ALPHATEST\n#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS\nif (alpha<uniforms.alphaCutOff) {discard;}\n#endif\n#ifndef ALPHABLEND\nalpha=1.0;\n#endif\n#endif\nvar emissiveColor: vec3f=uniforms.vEmissiveColor;\n#ifdef EMISSIVE\nemissiveColor+=TEXRD(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\n#ifdef LINKEMISSIVEWITHDIFFUSE\nvar finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#else\nvar finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;\n#endif\n#endif\nvar finalSpecular: vec3f= vec3f(0.0);\n#ifdef REFLECTIONOVERALPHA\nalpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);\n#endif\n#ifdef EMISSIVEASILLUMINATION\nvar color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,vec3f(0.0),vec3f(1.0)),alpha);\n#else\nvar color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FOG\ncolor=vec4f(max(color.rgb,vec3f(0.)),color.a);\n#ifdef FOG\nvar fog: f32=CalcFogFactor();\ncolor= vec4f(mix(frame.vFogColor,color.rgb,fog),color.a);\n#endif\ncolor=vec4f(color.rgb,color.a*mesh.visibility);\n#ifdef PREMULTIPLYALPHA\ncolor=vec4f(color.rgb*color.a, color.a);\n#endif\n#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR\nfragmentOutputs.color=color;\n#define CUSTOM_FRAGMENT_MAIN_END\nreturn fragmentOutputs;\n}\n`, kf = /^([gimus]+)!/, ef = new Set;

    function Df(kk) {
      ef.has(kk) || (ef.add(kk), console.warn(`Lite: no place for plugin code at ${kk} in the standard shader: it is left out`))
    }

    function ff(kk, ek) {
      let ik = kk;
      const Dk = new Map;
      for (const [Sk, bk] of ek) {
        var fk;
        Dk.set(Sk, `${null!==(fk=Dk.get(Sk))&&void 0!==fk?fk:""}${bk}\n`)
      }
      for (const [Sk, bk] of Dk) {
        if (!Sk.startsWith("!")) {
          const kk = `#define ${Sk}`;
          if (!ik.includes(kk)) {
            Df(Sk);
            continue
          }
          ik = ik.replace(kk, (() => `\n${bk}\n${kk}`));
          continue
        }
        let kk = Sk.substring(1),
          ek = "g";
        if (kk.startsWith("!")) ek = "", kk = kk.substring(1);
        else {
          const ik = kf.exec(kk);
          ik && (ek = ik[1], kk = kk.substring(ek.length + 1))
        }
        const Dk = new RegExp(kk, ek.includes("g") ? ek : `${ek}g`);
        let fk = Dk.exec(ik);
        for (fk || Df(Sk); fk;) {
          const kk = fk,
            ek = bk.replace(/\$(\d+)/g, ((ek, ik) => Number(ik) < kk.length ? kk[Number(ik)] : ""));
          ik = ik.substring(0, kk.index) + ek + ik.substring(kk.index + kk[0].length), Dk.lastIndex = kk.index + ek.length, fk = Dk.exec(ik)
        }
      }
      return ik
    }
    const Sf = /\b(?:(attribute|uniform)|(?:(flat|linear|perspective)\s+)?(?:(center|centroid|sample)\s+)?varying)\s+(\w+)\s*:\s*([\w<>, ]+?)\s*;/g,
      bf = /\bvar\s+(\w+)\s*:\s*sampler\s*;/g,
      rf = /\bvar\s+(\w+)\s*:\s*(texture_\w+(?:<\s*f32\s*>)?)\s*;/g;

    function Pf(kk) {
      const ek = {
        attributes: [],
        varyings: [],
        uniforms: [],
        textures: [],
        samplers: new Set,
        body: ""
      };
      let ik = kk.replace(Sf, ((kk, ik, Dk, fk, Sk, bk) => ("attribute" === ik ? ek.attributes.push({
        name: Sk,
        type: bk
      }) : void 0 === ik ? ek.varyings.push({
        name: Sk,
        type: bk,
        interpolation: Mf(bk, Dk, fk)
      }) : ek.uniforms.push({
        name: Sk,
        type: mf(bk)
      }), "")));
      return ik = ik.replace(bf, ((kk, ik) => (ek.samplers.add(ik), ""))), ik = ik.replace(rf, ((kk, ik, Dk) => (ek.textures.push({
        name: ik,
        type: Dk
      }), ""))), ek.body = ik, ek
    }

    function mf(kk) {
      const ek = kk.replace(/\s+/g, "").replace("vec2<f32>", "vec2f").replace("vec3<f32>", "vec3f").replace("vec4<f32>", "vec4f").replace("mat4x4<f32>", "mat4x4f"),
        ik = new Map([
          ["f32", "float"],
          ["vec2f", "vec2"],
          ["vec3f", "vec3"],
          ["vec4f", "vec4"],
          ["mat4x4f", "mat4"]
        ]).get(ek);
      if (!ik) throw new Error(`Lite: unsupported uniform type ${kk}`);
      return ik
    }

    function Mf(kk, ek, ik) {
      return void 0 === ek && void 0 === ik ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(kk.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ek ? "@interpolate(flat) " : `@interpolate(${null!==ek&&void 0!==ek?ek:"perspective"}, ${null!==ik&&void 0!==ik?ik:"center"}) `
    }

    function Kf(kk) {
      return Hf({
        defines: kk.defines,
        vertex: ff(RD, kk.vertexCode),
        fragment: ff(JD, kk.fragmentCode),
        members: [...ED, ...kk.defines.has("OPACITY") ? hD : [], ...kk.defines.has("EMISSIVE") ? aD : [], ...kk.pluginUniforms],
        structName: "StandardUniforms"
      })
    }

    function xf(kk) {
      const ek = kk.replace(/\breturn\s+fragmentOutputs\s*;/g, "return canvasOutputs();");
      if (ek === kk) throw new Error("Lite: fragment main has no return");
      return ek
    }
    const nf = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${oD}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\nvertexInputs = input;\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n${ZD}\nvar worldPos: vec4f=finalWorld*vec4f(vertexInputs.position,1.0);\nvertexOutputs.position=scene.viewProjection*worldPos;\n#ifdef FOG\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#endif\n${OD}\n${gD}\n}\n`,
      Uf = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${GD}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs = input;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvar color: vec4f=fragmentInputs.vColor;\n#else\nvar color: vec4f=uniforms.color;\n#endif\n#ifdef FOG\ncolor=vec4f(mix(frame.vFogColor,color.rgb,CalcFogFactor()),color.a);\n#endif\nfragmentOutputs.color=color;\nreturn fragmentOutputs;\n}\n`;

    function Hf(kk) {
      const ek = kk.defines,
        ik = Pf(Le(kk.vertex, ek)),
        Dk = Pf(Le(kk.fragment, ek)),
        fk = new Map;
      for (const yk of [...ik.varyings, ...Dk.varyings]) fk.has(yk.name) || fk.set(yk.name, yk);
      const Sk = [...fk.values()].map(((kk, ek) => `\t@location(${ek}) ${kk.interpolation}${kk.name}: ${kk.type},`)),
        bk = [...kk.members];
      for (const yk of [...ik.uniforms, ...Dk.uniforms]) bk.some((kk => kk.name === yk.name)) || bk.push(yk);
      const rk = vD(kk.structName, bk),
        Pk = [],
        mk = [];
      let Mk = 1;
      const Kk = new Set;
      for (const yk of [...ik.textures, ...Dk.textures]) {
        if (Kk.has(yk.name)) continue;
        Kk.add(yk.name);
        const kk = `${yk.name}Sampler`,
          ek = Mk++,
          ik = Mk++,
          Dk = yk.type.startsWith("texture_2d_array") ? "2d-array" : yk.type.startsWith("texture_cube") ? "cube" : "2d";
        Pk.push({
          name: yk.name,
          binding: ek,
          samplerBinding: ik,
          dimension: Dk
        }), mk.push(`@group(2) @binding(${ek}) var ${yk.name}: ${yk.type};`), mk.push(`@group(2) @binding(${ik}) var ${kk}: sampler;`)
      }
      for (const yk of [...ik.samplers, ...Dk.samplers])
        if (!Kk.has(yk.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${yk} has no texture`);
      const xk = [pD, TD, rk.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${kk.structName};`, ...mk].join("\n"),
        nk = ik.attributes,
        Uk = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ik.attributes.map(((kk, ek) => `\t@location(${ek}) ${kk.name}: ${kk.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
        Hk = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Sk, "}", "var<private> vertexOutputs: FragmentInputs;"].join("\n"),
        wk = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Dk.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Sk, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@location(0) color: vec4f,", "}", "var<private> fragmentOutputs: FragmentOutputs;", Gk, "fn canvasOutputs() -> FragmentOutputs {", `\tif (${gk}) {`, "\t\tfragmentOutputs.color.a = 1.0;", "\t}", "\treturn fragmentOutputs;", "}"].join("\n"),
        lk = kk => {
          for (const ek of rk.stridedArrays) kk = kk.replace(new RegExp(`\\b${ek}\\s*\\[(.*?)\\]`, "g"), `${ek}[$1].el`);
          return kk
        };
      return {
        vertex: `${xk}\n${Uk}\n${Hk}\n${lk(ik.body)}`,
        fragment: `diagnostic(off, derivative_uniformity);\n${xk}\n${wk}\n${xf((pk=lk(Dk.body),pk.includes("fragmentInputs.position")?pk.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):pk))}`,
        attributes: nk,
        material: rk,
        textures: Pk
      };
      var pk
    }
    const wf = [6, 4, 5, 7, 6, 5, 0, 2, 3, 1, 0, 3, 5, 1, 3, 7, 5, 3, 0, 4, 6, 2, 0, 6, 3, 2, 6, 7, 3, 6, 0, 1, 5, 4, 0, 5],
      lf = kk => ({
        name: kk,
        type: "vec3"
      }),
      pf = kk => ({
        name: kk,
        type: "float"
      }),
      yf = vD("EarthSkyUniforms", [lf("viewFrom"), pf("exposureScale"), lf("zenithOffset"), pf("fogOn"), lf("up"), pf("ditherOn"), lf("sun"), pf("turbidity"), lf("tint"), pf("rayleigh"), lf("sunDir"), pf("mieStrength"), lf("inScatterR"), pf("mieFocus"), lf("inScatterM"), pf("sunE"), lf("extinctionBeta"), pf("sunsetMix"), pf("mieScale"), pf("mieBase"), pf("mieSlope"), pf("sunDiscE"), pf("exposure")]),
      Yf = `${pD}\n${TD}\n${yf.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
      Lf = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${wf.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: EarthSkyVarying;\n\tout.position = liteWorldLayer(scene.viewProjection * mesh.world * vec4f(position, 1.0));\n\tlet worldPosition = mesh.world * vec4f(position, 1.0);\n\tout.worldPosition = worldPosition.xyz;\n\tout.fogDistance = (scene.view * worldPosition).xyz;\n\tout.tint = sky.tint;\n\treturn out;\n}\n`,
      Cf = `\n${Gk}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(le).map((kk=>{let[ek,ik]=kk;return`const TONE_${ek}: f32 = ${ik};`})).join(" ")}\n\n// The rest of main's prelude, as it was, for sky pack overrides that use it; the default calls none of it\nconst WAVELENGTHS: vec3f = vec3f(680E-9, 550E-9, 450E-9);\nconst MIE_K: vec3f = vec3f(0.686, 0.678, 0.666);\nconst MIE_V: f32 = 4.0;\nconst RAYLEIGH_ZENITH_LENGTH: f32 = 8.4E3;\nconst MIE_ZENITH_LENGTH: f32 = 1.25E3;\nconst SUN_INTENSITY: f32 = 1000.0;\nconst SUN_CUTOFF: f32 = PI / 1.95;\nconst SUN_STEEPNESS: f32 = 1.5;\nconst TONE_WHITE: f32 = 1000.0;\n\nfn rayleighBeta() -> vec3f { return vec3f(0.0005) / vec3f(94, 40, 18); }\n\nfn rayleighPhase(cosTheta: f32) -> f32 { return (3.0 / (16.0 * PI)) * (1.0 + pow(cosTheta, 2.0)); }\n\nfn mieBeta(wavelengths: vec3f, k: vec3f, turbidity: f32) -> vec3f {\n\tvar c: f32 = (0.2 * turbidity) * 10E-18;\n\treturn 0.434 * c * PI * pow((2.0 * PI) / wavelengths, vec3f(MIE_V - 2.0)) * k;\n}\n\nfn henyeyGreenstein(cosTheta: f32, g: f32) -> f32 {\n\treturn (1.0 / (4.0 * PI)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0 * g * cosTheta + pow(g, 2.0), 1.5));\n}\n\nfn sunIntensity(zenithAngleCos: f32) -> f32 {\n\treturn SUN_INTENSITY * max(0.0, 1.0 - exp((-(SUN_CUTOFF - acos(zenithAngleCos)) / SUN_STEEPNESS)));\n}\n\n// A sky shader pack can replace earthSkyRadiance (the scattering, over EarthSkyInput) or earthSkyColour (the tonemap) by\n// name. The prelude, EarthSkyInput and both signatures are main's, so a pack written against main compiles unchanged.\nstruct EarthSkyInput {\n\tview: vec3f, zenithView: vec3f, sun: vec3f, up: vec3f,\n\tturbidity: f32, rayleigh: f32, mieStrength: f32, mieFocus: f32,\n}\n\nfn filmic(x: vec3f) -> vec3f {\n\treturn ((x * (TONE_A * x + TONE_C * TONE_B) + TONE_D * TONE_E) / (x * (TONE_A * x + TONE_B) + TONE_D * TONE_F)) - TONE_E / TONE_F;\n}\n\n// The default reads input's view, zenithView and up, and the terms the CPU precomputes from the frame's uniforms\n// (earthSkyDerived.ts) straight from sky: they already include input's sun, turbidity, rayleigh, mieStrength and mieFocus.\nfn earthSkyRadiance(input: EarthSkyInput) -> vec3f {\n\t// cos(acos(x)) is x: the Rayleigh and Mie optical lengths share this denominator\n\tlet cosZenith = max(0.0, dot(input.up, input.zenithView));\n\tlet zenithAngle = acos(cosZenith);\n\tlet opticalLength = 1.0 / (cosZenith + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / PI), -1.253));\n\tlet extinction = exp(-sky.extinctionBeta * opticalLength);\n\tlet cosTheta = dot(input.view, sky.sunDir);\n\tlet rCos = cosTheta * 0.5 + 0.5;\n\tlet rPhase = (3.0 / (16.0 * PI)) * (1.0 + rCos * rCos);\n\tlet mBase = sky.mieBase - sky.mieSlope * cosTheta;\n\tlet mPhase = sky.mieScale * inverseSqrt(mBase) / mBase;\n\tlet scattered = sky.inScatterR * rPhase + sky.inScatterM * mPhase;\n\tlet lit = scattered * (1.0 - extinction);\n\tlet inScattered = lit * sqrt(lit) * mix(vec3f(1.0), sqrt(scattered * extinction), vec3f(sky.sunsetMix));\n\tlet sunDisc = smoothstep(SUN_DISC_COS, SUN_DISC_COS + 0.00002, cosTheta);\n\tlet night = (0.1 + sky.sunDiscE * sunDisc) * extinction;\n\treturn (inScattered + night) * 0.04 + vec3f(0.0, 0.001, 0.0025) * 0.3;\n}\n\n// The contract for overrides: exposure is SkyMaterial's luminance (main passes sky.exposure), as Babylon's tonemap reads it.\n// The default tonemaps with the frame's precomputed sky.exposureScale, its log2(2 / exposure^4), written together with it.\nfn earthSkyColour(radiance: vec3f, exposure: f32) -> vec3f {\n\treturn filmic(sky.exposureScale * radiance) * ${pe};\n}\n\nfn ditherOffset(seed: vec2f, variance: f32) -> f32 {\n\tlet rand: f32 = fract(sin(dot(seed.xy, vec2f(12.9898, 78.233))) * 43758.5453);\n\tlet normVariance: f32 = variance / 255.0;\n\treturn mix(-normVariance, normVariance, rand);\n}\n\nfn fogFactor(fromEye: vec3f) -> f32 {\n\tvar fogCoeff: f32 = 1.0;\n\tlet fogStart = frame.vFogInfos.y;\n\tlet fogEnd = frame.vFogInfos.z;\n\tlet fogDensity = frame.vFogInfos.w;\n\tlet dist = length(fromEye);\n\tif (3.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = (fogEnd - dist) / (fogEnd - fogStart);\n\t} else if (1.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * fogDensity);\n\t} else if (2.0 == frame.vFogInfos.x) {\n\t\tfogCoeff = 1.0 / pow(2.71828, dist * dist * fogDensity * fogDensity);\n\t}\n\treturn clamp(fogCoeff, 0.0, 1.0);\n}\n\n@fragment\nfn main(input: EarthSkyVarying) -> @location(0) vec4f {\n\tlet toSky = input.worldPosition - sky.viewFrom;\n\tlet radiance = earthSkyRadiance(EarthSkyInput(normalize(toSky), normalize(toSky + sky.zenithOffset), sky.sun, sky.up, sky.turbidity, sky.rayleigh, sky.mieStrength, sky.mieFocus));\n\t// Parity: off, the dither and fog branches are skipped, as Babylon leaves them out with its defines; the dither reads the WebGL frag coord, as in Babylon\n\tvar dither = 0.0;\n\tif (sky.ditherOn != 0.0) { dither = ditherOffset(vec2f(input.position.x, frame.outputHeight - input.position.y), 0.5); }\n\tvar colour = clamp(vec4f(earthSkyColour(radiance, sky.exposure) * input.tint + dither, 1.0), vec4f(0.0), vec4f(1.0));\n\tif (sky.fogOn != 0.0) { colour = vec4f(mix(frame.vFogColor, colour.rgb, fogFactor(input.fogDistance)), colour.a); }\n\t// The canvas's alpha on the unblended pipeline it draws in (canvasFragment)\n\tif (${gk}) { colour.a = 1.0; }\n\treturn colour;\n}\n`;
    var Af = ik(36690);
    const jf = new Af.eH,
      sf = new Af.eH,
      df = new Af.Quaternion,
      Vf = new Float64Array(3),
      Ff = new class {
        constructor() {
          this.sunDir = new Float64Array(3), this.sunE = 0, this.inScatterR = new Float64Array(3), this.inScatterM = new Float64Array(3), this.extinctionBeta = new Float64Array(3), this.sunsetMix = 0, this.sunDiscE = 0, this.mieScale = 0, this.mieBase = 0, this.mieSlope = 0
        }
      },
      uf = new Float64Array(16);

    function qf(kk, ek, ik) {
      const Dk = ik.worldMatrix;
      var fk;
      kk.updateFloat3("viewFrom", Dk[12], Dk[13], Dk[14]), kk.updateFloatsFrom("zenithOffset", ek.cameraOffset, 0, 3), kk.updateFloatsFrom("up", ek.up, 0, 3), ek.luminance > 0 && (kk.updateFloat("exposure", ek.luminance), kk.updateFloat("exposureScale", (fk = ek.luminance, Math.log2(2 / Math.pow(fk, 4))))), kk.updateFloat("turbidity", ek.turbidity), kk.updateFloat("rayleigh", ek.rayleigh), kk.updateFloat("mieStrength", ek.mieCoefficient), kk.updateFloat("mieFocus", ek.mieDirectionalG), kk.updateFloatsFrom("tint", ek.tint, 0, 3), kk.updateFloat("fogOn", ek.fog && ik.fogEnabled && 0 !== ik.fogMode ? 1 : 0), kk.updateFloat("ditherOn", ek.dithering ? 1 : 0);
      const Sk = ek.sunPosition;
      if (jf.set(Sk[0], Sk[1], Sk[2]), !ek.useSunPosition) {
        const kk = Math.PI * (ek.inclination - .5),
          ik = 2 * Math.PI * (ek.azimuth - .5);
        jf.set(ek.distance * Math.cos(ik) * Math.cos(kk), ek.distance * Math.sin(-kk), ek.distance * Math.sin(ik) * Math.cos(kk)), Af.Quaternion.FromUnitVectorsToRef(Af.eH.UpReadOnly, sf.set(ek.up[0], ek.up[1], ek.up[2]), df), jf.rotateByQuaternionToRef(df, jf)
      }
      kk.updateVector3("sun", jf), Vf[0] = jf.x, Vf[1] = jf.y, Vf[2] = jf.z;
      const bk = we(ek, Vf, Ff);
      kk.updateFloatsFrom("sunDir", bk.sunDir, 0, 3), kk.updateFloat("sunE", bk.sunE), kk.updateFloatsFrom("inScatterR", bk.inScatterR, 0, 3), kk.updateFloatsFrom("inScatterM", bk.inScatterM, 0, 3), kk.updateFloatsFrom("extinctionBeta", bk.extinctionBeta, 0, 3), kk.updateFloat("sunsetMix", bk.sunsetMix), kk.updateFloat("sunDiscE", bk.sunDiscE), kk.updateFloat("mieScale", bk.mieScale), kk.updateFloat("mieBase", bk.mieBase), kk.updateFloat("mieSlope", bk.mieSlope)
    }

    function If(kk, ek) {
      const ik = uf;
      ik[0] = ek.far, ik[5] = ek.far, ik[10] = ek.far, ik[15] = 1;
      const Dk = kk.infiniteDistance;
      for (let fk = 0; fk < 3; fk++) ik[12 + fk] = kk.position[fk] + (Dk ? ek.worldMatrix[12 + fk] : 0);
      return uf
    }
    var zf = ik(38299);

    function Qf(kk) {
      return Math.max(4, 4 * Math.ceil(kk / 4))
    }

    function vf(kk, ek, ik, Dk) {
      const fk = kk.createBuffer({
        label: Dk,
        size: Qf(ek.byteLength),
        usage: ik,
        mappedAtCreation: !0
      });
      return new Uint8Array(fk.getMappedRange(), 0, ek.byteLength).set(new Uint8Array(ek.buffer, ek.byteOffset, ek.byteLength)), fk.unmap(), fk
    }

    function Ef(kk, ek) {
      return Math.floor(Math.log2(Math.max(kk, ek))) + 1
    }

    function hf(kk, ek, ik, Dk, fk, Sk) {
      const bk = kk.createTexture({
          label: Sk,
          size: {
            width: ik,
            height: Dk,
            depthOrArrayLayers: fk
          },
          format: "rgba8unorm",
          mipLevelCount: Ef(ik, Dk),
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }),
        rk = (ek, ik, Dk, Sk) => {
          kk.queue.writeTexture({
            texture: bk,
            mipLevel: ik
          }, ek, {
            bytesPerRow: 4 * Dk,
            rowsPerImage: Sk
          }, {
            width: Dk,
            height: Sk,
            depthOrArrayLayers: fk
          })
        };
      rk(ek, 0, ik, Dk);
      let Pk = 1;
      for (const mk of function*(kk, ek, ik, Dk) {
          let fk = kk,
            Sk = ek,
            bk = ik;
          for (; Sk > 1 || bk > 1;) {
            const kk = Math.max(1, Sk >> 1),
              ek = Math.max(1, bk >> 1),
              ik = new Uint8Array(kk * ek * Dk * 4),
              rk = 4 * Sk;
            let Pk = 0;
            for (let mk = 0; mk < Dk; mk++) {
              const Dk = mk * rk * bk;
              for (let mk = 0; mk < ek; mk++) {
                const ek = Dk + Math.min(2 * mk, bk - 1) * rk,
                  Mk = Dk + Math.min(2 * mk + 1, bk - 1) * rk;
                for (let Dk = 0; Dk < kk; Dk++) {
                  const kk = 4 * Math.min(2 * Dk, Sk - 1),
                    bk = 4 * Math.min(2 * Dk + 1, Sk - 1);
                  for (let Dk = 0; Dk < 4; Dk++) ik[Pk++] = fk[ek + kk + Dk] + fk[ek + bk + Dk] + fk[Mk + kk + Dk] + fk[Mk + bk + Dk] + 2 >> 2
                }
              }
            }
            yield {
              data: ik,
              width: kk,
              height: ek
            }, fk = ik, Sk = kk, bk = ek
          }
        }(ek, ik, Dk, fk)) rk(mk.data, Pk++, mk.width, mk.height);
      return bk
    }
    const af = {
      premultiplyAlpha: "none",
      colorSpaceConversion: "none"
    };

    function Wf(kk) {
      if (kk.startsWith("data:")) {
        const ek = kk.search(/[;,]/);
        return `data:${ek>5?kk.slice(5,ek):""} URL of ${kk.length} characters`
      }
      return kk.length > 80 ? `${kk.slice(0,80)}...` : kk
    }
    async function tf(kk) {
      const ek = await fetch(kk);
      if (!ek.ok) throw new Error(`${Wf(kk)}: ${ek.status} ${ek.statusText}`);
      return createImageBitmap(await ek.blob(), af)
    }
    async function Xf(kk) {
      const ek = await tf(kk),
        ik = new OffscreenCanvas(ek.width, ek.height),
        Dk = ik.getContext("2d", {
          willReadFrequently: !0
        });
      if (!Dk) throw new Error("No 2D context to decode an image");
      Dk.drawImage(ek, 0, 0);
      const {
        data: fk
      } = Dk.getImageData(0, 0, ek.width, ek.height);
      return ek.close(), {
        pixels: new Uint8Array(fk.buffer, fk.byteOffset, fk.byteLength),
        width: ik.width,
        height: ik.height
      }
    }
    const Bf = new WeakMap;

    function Tf(kk, ek, ik, Dk) {
      var fk;
      const Sk = null !== (fk = Bf.get(kk)) && void 0 !== fk ? fk : new Map;
      Bf.set(kk, Sk);
      let bk = Sk.get(ek);
      return bk || (bk = (async fk => {
        const Sk = null !== (fk = function(kk, ek) {
          const ik = kk ? new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength) : null;
          return null !== ik && void 0 !== ik && ik.byteLength && ek && ik.byteLength % (ek * ek * 4) === 0 ? {
            pixels: ik,
            layerWidth: ek,
            layers: ik.byteLength / (ek * ek * 4)
          } : null
        }(ik, Dk)) && void 0 !== fk ? fk : await async function(kk) {
          const {
            pixels: ek,
            width: ik
          } = await Xf(kk);
          return {
            pixels: ek,
            layerWidth: ik,
            layers: ek.byteLength / (ik * ik * 4)
          }
        }(ek), {
          layerWidth: bk,
          layers: rk
        } = Sk;
        return {
          texture: hf(kk, Sk.pixels, bk, bk, rk, `atlas-${ek}`),
          layerWidth: bk,
          layers: rk
        }
      })(), Sk.set(ek, bk), bk.catch((() => {
        Sk.delete(ek)
      }))), bk
    }
    const of = new Map([
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
    ]), Zf = new Map([
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

    function Of(kk) {
      for (const ek of (0, zf.m)(kk))
        if (!Zf.has((0, zf.j)(ek))) return !1;
      return !0
    }

    function gf(kk) {
      const ek = Zf.get(kk);
      if (!ek) return null;
      const [ik, Dk, fk] = ek;
      return {
        srcFactor: of.get(ik),
        dstFactor: of.get(Dk),
        operation: fk
      }
    }
    let Gf = null;

    function Nf(kk) {
      Gf = kk
    }

    function Rf(kk, ek, ik) {
      var Dk;
      null === (Dk = Gf) || void 0 === Dk || Dk(kk, ek, ik, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null)
    }
    class Jf {
      constructor() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers = [], this.vertexOffsets = [], this.indexBuffer = null
      }
      reset() {
        this.pipeline = null, this.materialGroup = null, this.packGroup = null, this.vertexBuffers.length = 0, this.vertexOffsets.length = 0, this.indexBuffer = null
      }
      bind(kk, ek, ik, Dk, fk) {
        ik !== this.pipeline && (kk.setPipeline(ik), this.pipeline = ik), kk.setBindGroup(1, Dk, [fk]);
        const Sk = ek.material.bindGroup;
        Sk !== this.materialGroup && (kk.setBindGroup(2, Sk), this.materialGroup = Sk);
        const bk = ek.program.packGroup;
        bk && bk !== this.packGroup && (kk.setBindGroup(Ve.g, bk), this.packGroup = bk);
        const {
          vertexBuffers: rk,
          vertexOffsets: Pk
        } = this;
        for (let mk = 0; mk < ek.vertexBuffers.length; mk++) rk[mk] === ek.vertexBuffers[mk] && Pk[mk] === ek.vertexOffsets[mk] || (kk.setVertexBuffer(mk, ek.vertexBuffers[mk], ek.vertexOffsets[mk]), rk[mk] = ek.vertexBuffers[mk], Pk[mk] = ek.vertexOffsets[mk]);
        ek.indexBuffer && ek.indexBuffer !== this.indexBuffer && (kk.setIndexBuffer(ek.indexBuffer, ek.indexFormat), this.indexBuffer = ek.indexBuffer)
      }
    }
    class kS {
      constructor(kk, ek, ik, Dk) {
        this.modelMeshes = kk, this.j_ = ek, this.maker = ik, this.warnOnce = Dk, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (kk, ek) => {
          (ek < -1 || ek > 1) && this.warnOnce(`group:${ek}`, `rendering group ${ek} is not drawn`)
        }
      }
      clear() {
        this.skyDraws.length = 0, this.opaqueDraws.length = 0, this.transparentDraws.length = 0, this.frontDraws.length = 0
      }
      collect(kk) {
        this.collectGroup(kk, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(kk, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(kk, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.j_.forEachGroup(this.warnIfNotDrawn), this.opaqueDraws.sort(eS), this.transparentDraws.sort(iS)
      }
      collectGroup(kk, ek, ik, Dk, fk) {
        const Sk = this.modelMeshes.group(ek),
          bk = this.j_.group(ek),
          rk = 0 === ek ? null === bk || void 0 === bk ? void 0 : bk.opaque : void 0;
        this.collectList(kk, null === Sk || void 0 === Sk ? void 0 : Sk.opaque, rk || null === bk || void 0 === bk ? void 0 : bk.opaque, ek, !1, ik, fk), rk && (this.j_.drawn += this.maker.bundleDraws(kk, rk, ek)), this.collectList(kk, null === Sk || void 0 === Sk ? void 0 : Sk.alphaTest, void 0, ek, !1, ik, fk), this.collectList(kk, null === Sk || void 0 === Sk ? void 0 : Sk.transparent, null === bk || void 0 === bk ? void 0 : bk.transparent, ek, !0, Dk, fk)
      }
      collectList(kk, ek, ik, Dk, fk, Sk, bk) {
        var rk;
        const Pk = Sk.length;
        ek && this.maker.pushDraws(kk, ek.units, ek.units.length, Dk, fk, Sk, ek.rows), ik && (this.j_.drawn += this.maker.pushDraws(kk, ik, ik.length, Dk, fk, Sk));
        const mk = fk ? null === (rk = this.modelMeshes.group(Dk)) || void 0 === rk ? void 0 : rk.text : void 0;
        mk && this.maker.pushDraws(kk, mk.units, mk.units.length, Dk, !0, Sk, mk.rows), bk && DS(Sk, Pk)
      }
    }

    function eS(kk, ek) {
      return kk.program.id - ek.program.id || kk.material.owner.uniqueId - ek.material.owner.uniqueId
    }

    function iS(kk, ek) {
      return kk.material.owner.uniqueId - ek.material.owner.uniqueId
    }

    function DS(kk, ek) {
      for (let ik = ek + 1; ik < kk.length; ik++) {
        const Dk = kk[ik];
        let fk = ik - 1;
        for (; fk >= ek && iS(kk[fk], Dk) > 0; fk--) kk[fk + 1] = kk[fk];
        kk[fk + 1] = Dk
      }
    }
    const fS = {};

    function SS(kk) {
      return kk.hasThinInstances ? "thin" : kk.hDk || kk._userInstancedBuffersStorage ? "instanced" : "none"
    }

    function bS(kk, ek, ik) {
      return kk ? (ik._needUVs = !0, kk.optimizeUVAllocation && (0, Vk.F)(kk.matrix) ? (ik[`${ek}DIRECTUV`] = kk.uvSet + 1, ik[`MAINUV${kk.uvSet+1}`] = !0) : ik[`${ek}DIRECTUV`] = 0, !0) : (ik[`${ek}DIRECTUV`] = 0, !1)
    }

    function rS(kk) {
      const ek = new Map;
      for (const ik in kk) {
        if (95 === ik.charCodeAt(0)) continue;
        const Dk = kk[ik],
          fk = typeof Dk;
        "number" === fk || "string" === fk ? ek.set(ik, String(Dk)) : Dk && "function" !== fk && ek.set(ik, !0)
      }
      return ek
    }

    function PS(kk) {
      const ek = {
        markAllAsDirty: () => {}
      };
      for (const {
          defines: ik
        }
        of kk.features)
        for (const kk in ik) ek[kk] = ik[kk];
      return ek
    }

    function mS(kk) {
      const ek = kk.parts.geometry;
      return null !== ek && void 0 !== ek && ek.live ? ek : null
    }

    function MS(kk) {
      var ek;
      return null !== (ek = mS(kk)) && void 0 !== ek ? ek : fS
    }
    class KS {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => !1;
        this.resources = kk, this.warnOnce = ek, this.programWithModel = ik, this.packFailed = Dk, this.drawStates = new WeakMap, this.view = void 0, this.modelPackVariant = 0
      }
      programFor(kk, ek, ik, Dk, fk) {
        const Sk = ek.owner;
        let bk = this.drawStates.get(ek);
        if (!bk) {
          const kk = ek.parts.materials[ek.range];
          if (!kk) return this.warnOnce("model", `${ik.name} on ${Sk.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
          bk = {
            defines: PS(kk),
            model: kk,
            modelVersion: -1,
            definesKey: "",
            program: null,
            instancing: fk,
            groupId: Dk,
            geometry: null,
            instanceLayout: null,
            definesBits: 0,
            packVariant: 0
          }, this.drawStates.set(ek, bk)
        }
        if (this.programCurrent(bk, ek, fk, Dk)) return bk.program;
        const {
          model: rk
        } = bk, Pk = MS(ek), mk = this.instanceLayout(Sk, fk), Mk = this.definesBits(Sk);
        if (!this.prepareModelDefines(kk, Sk, rk, bk.defines, Dk, fk)) return null;
        bk.instancing = fk, bk.groupId = Dk, bk.modelVersion = rk.version, bk.geometry = Pk, bk.instanceLayout = mk, bk.definesBits = Mk;
        const Kk = function(kk) {
          let ek = "";
          for (const [ik, Dk] of kk) ek += !0 === Dk ? `${ik};` : `${ik}=${Dk};`;
          return ek
        }(rS(bk.defines));
        return Kk === bk.definesKey && bk.packVariant === this.modelPackVariant && bk.program && !this.packFailed(bk.program) || (bk.definesKey = Kk, bk.packVariant = this.modelPackVariant, bk.program = this.programWithModel(rk, bk.defines, Kk)), bk.program
      }
      programCurrent(kk, ek, ik, Dk) {
        return null !== kk.program && !this.packFailed(kk.program) && kk.instancing === ik && kk.groupId === Dk && this.definesHold(kk, ek, ik)
      }
      definesHold(kk, ek, ik) {
        return kk.modelVersion === kk.model.version && kk.geometry === MS(ek) && kk.instanceLayout === this.instanceLayout(ek.owner, ik) && kk.definesBits === this.definesBits(ek.owner) && kk.packVariant === this.modelPackVariant
      }
      modelPackKind(kk) {
        var ek;
        return 0 === this.modelPackVariant ? null : null !== (ek = (0, sk.w)(kk, jk.f.name)) && void 0 !== ek && ek.active ? "placed" : kk.item ? "item" : kk.lifeform ? "lifeform" : kk.box ? "box" : null
      }
      instanceLayout(kk, ek) {
        var ik, Dk, fk;
        return "thin" === ek ? null !== (fk = this.resources.i_.get(kk)) && void 0 !== fk ? fk : null : "instanced" === ek && null !== (ik = null === (Dk = kk._userInstancedBuffersStorage) || void 0 === Dk ? void 0 : Dk.interleavedKinds) && void 0 !== ik ? ik : null
      }
      definesBits(kk) {
        const ek = this.view;
        return (kk.visibility < 1 ? 1 : 0) | (kk.hasVertexAlpha ? 2 : 0) | (kk.applyFog ? 4 : 0) | (kk.useVertexColors ? 8 : 0) | (kk.nonUniformScaling ? 16 : 0) | (ek.fogEnabled && 0 !== ek.fogMode ? 32 : 0) | (ek.lightsEnabled ? 64 : 0) | ek.lightCount << 7
      }
      prepareLightDefines(kk, ek, ik) {
        let Dk = 0;
        if (this.view.lightsEnabled && !ek) {
          const ek = Math.min(ik, 4);
          for (; Dk < this.view.lightCount && (kk[`LIGHT${Dk}`] = !0, kk[`LITE_LIGHT${Dk}_SLOT`] = Dk, Dk++, kk._needNormals = !0, Dk !== ek););
        }
        for (let fk = Dk; fk < 4; fk++) kk[`LIGHT${fk}`] = !1, kk[`LITE_LIGHT${fk}_SLOT`] = void 0
      }
      prepareModelDefines(kk, ek, ik, Dk, fk, Sk) {
        const {
          features: bk
        } = ik;
        Dk._needNormals = !1, Dk._needUVs = !1;
        const rk = this.view;
        this.prepareLightDefines(Dk, ik.disableLighting, ik.maxSimultaneousLights), Dk.MAINUV1 = !1, Dk.MAINUV2 = !1;
        const Pk = ik.diffuseTexture;
        Pk ? (Dk._needUVs = !0, Dk.DIFFUSE = !0, Pk.optimizeUVAllocation && (0, Vk.F)(Pk.matrix) ? (Dk.DIFFUSEDIRECTUV = Pk.uvSet + 1, Dk[`MAINUV${Pk.uvSet+1}`] = !0) : Dk.DIFFUSEDIRECTUV = 0, Pk.uvSet > 1 && this.warnOnce(`uvset:${ik.name}`, `${ik.name} samples UV set ${Pk.uvSet+1}, which is not supported`)) : (Dk.DIFFUSE = !1, Dk.DIFFUSEDIRECTUV = 0);
        const mk = ik.opacityTexture,
          Mk = ik.emissiveTexture;
        Dk.OPACITY = bS(mk, "OPACITY", Dk), Dk.OPACITYRGB = null !== mk && mk.getAlphaFromRGB, Dk.EMISSIVE = bS(Mk, "EMISSIVE", Dk), (mk && mk.uvSet > 1 || Mk && Mk.uvSet > 1) && this.warnOnce(`uvset:${ik.name}`, `${ik.name} samples a UV set past 2, which is not supported`);
        const Kk = ik.reflectionTexture,
          xk = null !== Kk;
        if (xk) {
          if (!this.resources.boundTexture(Kk)) return !1;
          Dk._needNormals = !0
        }
        Dk.REFLECTION = xk, Dk.REFLECTIONMAP_3D = xk, Dk.REFLECTIONMAP_SKYBOX = xk, Dk.REFLECTIONMAP_OPPOSITEZ = xk && (kk.useRightHandedSystem ? !Kk.invertZ : Kk.invertZ), Dk.ROUGHNESS = xk && ik.roughness > 0, Dk.REFLECTIONOVERALPHA = xk && ik.useReflectionOverAlpha, Dk.LITE_REFLECTION_LUMINANCE = xk && "cube" === Kk.source.kind && Kk.source.luminance, (ek.skeleton || ek.morphTargetManager) && this.warnOnce(`skin:${ek.name}`, `${ek.name} has bones or morph targets, which are not supported`), Dk.FOG = ik.fogEnabled && ek.applyFog && rk.fogEnabled && 0 !== rk.fogMode, Dk.NONUNIFORMSCALING = ek.nonUniformScaling;
        const {
          visibility: nk,
          hasVertexAlpha: Uk
        } = ek;
        Dk.ALPHATEST = (0, sk.R)(ik, nk, Uk), Dk.ALPHAFROMDIFFUSE = (0, sk.eb)(ik), Dk.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ik.transparencyMode, Dk.ALPHABLEND = null === ik.transparencyMode || (0, sk.P)(ik, nk, Uk), Dk.PREMULTIPLYALPHA = 7 === ik.alphaMode || 8 === ik.alphaMode, Dk.EMISSIVEASILLUMINATION = ik.useEmissiveAsIllumination, Dk.LINKEMISSIVEWITHDIFFUSE = ik.linkEmissiveWithDiffuse, Dk.TWOSIDEDLIGHTING = !ik.backFaceCulling && ik.twoSidedLighting, Dk.INSTANCES = "none" !== Sk, Dk.THIN_INSTANCES = "thin" === Sk, Dk.LITE_FRONT_LAYER = fk >= 1;
        for (const {
            feature: Ak,
            state: jk,
            active: sk
          }
          of bk) {
          var Hk, wk;
          if (sk) null === (Hk = (wk = (0, Ke.g)(Ak)).prepareDefinesBeforeAttributes) || void 0 === Hk || Hk.call(wk, jk, Dk, kk, ek)
        }
        this.modelPackKind(ik) && (Dk._needNormals = !0), Dk.NORMAL = Dk._needNormals && ek.isVerticesDataPresent("normal"), Dk.UV1 = Dk._needUVs && ek.isVerticesDataPresent("uv"), Dk.UV2 = Dk._needUVs && ek.isVerticesDataPresent("uv2");
        const lk = ek.useVertexColors && ek.isVerticesDataPresent("color");
        Dk.VERTEXCOLOR = lk, Dk.VERTEXALPHA = ek.hasVertexAlpha && lk, Dk.INSTANCESCOLOR = "none" !== Sk && ek.isVerticesDataPresent("instanceColor");
        for (const {
            feature: Ak,
            state: jk,
            active: sk
          }
          of bk) {
          var pk, yk;
          if (sk) null === (pk = (yk = (0, Ke.g)(Ak)).prepareDefines) || void 0 === pk || pk.call(yk, jk, Dk, kk, ek, ik)
        }
        const Yk = kk.JU();
        for (const {
            feature: Ak,
            state: jk,
            active: sk
          }
          of bk) {
          var Lk, Ck;
          if (sk && !1 === (null === (Lk = (Ck = (0, Ke.g)(Ak)).isReadyForSubMesh) || void 0 === Lk ? void 0 : Lk.call(Ck, jk, Dk, kk, Yk))) return !1
        }
        return !0
      }
    }

    function xS(kk, ek, ik) {
      return kk.codeVersion !== ek.version && function(kk, ek) {
        const ik = [],
          Dk = [];
        for (const {
            feature: xk,
            state: nk,
            active: Uk
          }
          of ek.features) {
          var fk, Sk, bk, rk;
          if (Uk) nS(null === (fk = (Sk = (0, Ke.g)(xk)).getCustomCode) || void 0 === fk ? void 0 : fk.call(Sk, nk, "vertex", Ck.d.WGSL), ik), nS(null === (bk = (rk = (0, Ke.g)(xk)).getCustomCode) || void 0 === bk ? void 0 : bk.call(rk, nk, "fragment", Ck.d.WGSL), Dk)
        }
        const Pk = [];
        for (const {
            feature: xk,
            state: nk
          }
          of ek.features) {
          var mk, Mk;
          const kk = null === (mk = (Mk = (0, Ke.g)(xk)).getUniforms) || void 0 === mk ? void 0 : mk.call(Mk, nk, Ck.d.WGSL);
          for (const ek of null !== (Kk = null === kk || void 0 === kk ? void 0 : kk.ubo) && void 0 !== Kk ? Kk : []) {
            var Kk;
            ek.size && ek.type && Pk.push({
              name: ek.name,
              type: ek.type,
              arraySize: ek.arraySize
            })
          }
        }
        kk.vertexCode = ik, kk.fragmentCode = Dk, kk.pluginUniforms = Pk, kk.codeKey = JSON.stringify([ik, Dk, Pk]), kk.codeVersion = ek.version
      }(kk, ek), `${ik}#${kk.codeKey}`
    }

    function nS(kk, ek) {
      if (kk)
        for (const ik in kk) kk[ik] && ek.push([ik, kk[ik]])
    }
    const US = new Map([
      [512, "never"],
      [513, "greater"],
      [514, "equal"],
      [515, "greater-equal"],
      [516, "less"],
      [517, "not-equal"],
      [518, "less-equal"],
      [519, "always"]
    ]);
    class HS {
      constructor(kk) {
        this.warnOnce = kk, this.states = new Map
      }
      renderState(kk, ek, ik, Dk) {
        var fk;
        let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "triangle-list",
          bk = null !== (fk = kk.sideOrientation) && void 0 !== fk ? fk : ek.sideOrientation;
        ek._getWorldMatrixDeterminant() < 0 && (bk = 0 === bk ? 1 : 0);
        const rk = "triangle-list" === Sk,
          Pk = ik ? kk.alphaMode : 0,
          mk = (!ik || (0 === Pk || kk.forceDepthWrite)) && !kk.disableDepthWrite,
          Mk = rk && kk.backFaceCulling ? kk.cullBackFaces ? "back" : "front" : "none",
          Kk = rk && 0 !== bk ? "ccw" : "cw",
          xk = kk.depthFunction,
          nk = rk ? kk.zOffset : 0,
          Uk = rk ? kk.zOffsetUnits : 0,
          Hk = !kk.disableColorWrite;
        return Dk && Dk.alphaMode === Pk && Dk.depthWrite === mk && Dk.depthFunction === xk && Dk.cullMode === Mk && Dk.frontFace === Kk && Dk.zOffset === nk && Dk.zOffsetUnits === Uk && Dk.colourWrite === Hk && Dk.topology === Sk ? Dk : this.stateFor(Pk, mk, xk, Mk, Kk, nk, Uk, Hk, Sk)
      }
      stateFor(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
        const mk = `${kk}|${ek}|${ik}|${Dk}|${fk}|${Sk}|${bk}|${rk}|${Pk}`;
        let Mk = this.states.get(mk);
        if (!Mk) {
          var Kk;
          const xk = kk ? gf(kk) : null;
          kk && !xk && this.warnOnce(`alpha:${kk}`, `alpha mode ${kk} is not supported`), Mk = {
            key: mk,
            alphaMode: kk,
            depthFunction: ik,
            zOffset: Sk,
            zOffsetUnits: bk,
            topology: Pk,
            blend: xk,
            depthWrite: ek,
            depthCompare: ik && null !== (Kk = US.get(ik)) && void 0 !== Kk ? Kk : null,
            cullMode: Dk,
            frontFace: fk,
            depthBias: -bk,
            depthBiasSlopeScale: -Sk,
            colourWrite: rk
          }, this.states.set(mk, Mk)
        }
        return Mk
      }
    }
    var wS = ik(37035);

    function lS(kk) {
      if (!kk.frozen) return -1;
      let ek = kk.version;
      for (const {
          feature: ik,
          state: Dk,
          active: fk
        }
        of kk.features) {
        if (!fk || !ik.bind) continue;
        const kk = (0, Ke.g)(ik).uniformsVersion;
        if (!kk) return -1;
        ek += kk(Dk)
      }
      return ek
    }
    class pS {
      constructor(kk, ek, ik) {
        this.slots = kk, this.data = ek, this.textures = ik, this.useUbo = !0, this.currentEffect = null, this.expected = new Set
      }
      updateFloat(kk, ek) {
        this.write4(kk, ek, 0, 0, 0, 1)
      }
      updateFloat2(kk, ek, ik) {
        this.write4(kk, ek, ik, 0, 0, 2)
      }
      updateFloat3(kk, ek, ik, Dk) {
        this.write4(kk, ek, ik, Dk, 0, 3)
      }
      updateFloat4(kk, ek, ik, Dk, fk) {
        this.write4(kk, ek, ik, Dk, fk, 4)
      }
      updateVector3(kk, ek) {
        this.write4(kk, ek.x, ek.y, ek.z, 0, 3)
      }
      updateVector4(kk, ek) {
        this.write4(kk, ek.x, ek.y, ek.z, ek.w, 4)
      }
      updateColor3(kk, ek) {
        this.write4(kk, ek.r, ek.g, ek.b, 0, 3)
      }
      updateColor4(kk, ek, ik) {
        this.write4(kk, ek.r, ek.g, ek.b, ik, 4)
      }
      updateFloatsFrom(kk, ek, ik, Dk) {
        const fk = this.slots.get(kk);
        if (!fk) return;
        const Sk = this.data,
          bk = fk.offset;
        for (let rk = 0; rk < Dk; rk++) Sk[bk + rk] = ek[ik + rk]
      }
      updateFloat3TimesFloats(kk, ek, ik, Dk) {
        const fk = this.slots.get(kk);
        if (!fk) return;
        const Sk = this.data,
          bk = fk.offset;
        Sk[bk] = ek[ik] * Dk[0], Sk[bk + 1] = ek[ik + 1] * Dk[1], Sk[bk + 2] = ek[ik + 2] * Dk[2]
      }
      N7(kk, ek) {
        const ik = this.slots.get(kk);
        ik && this.data.set(ek.m, ik.offset)
      }
      updateMatrixFloats(kk, ek) {
        const ik = this.slots.get(kk);
        ik && this.data.set(ek, ik.offset)
      }
      updateFloatArray(kk, ek) {
        const ik = this.slots.get(kk);
        if (!ik) return;
        if (!ik.arraySize || ik.stride === ik.floats) return void this.data.set(ek, ik.offset);
        const Dk = Math.min(ek.length, ik.floats * ik.arraySize);
        for (let fk = 0; fk < Dk; fk++) this.data[ik.offset + Math.floor(fk / ik.floats) * ik.stride + fk % ik.floats] = ek[fk]
      }
      updateArray(kk, ek) {
        this.updateFloatArray(kk, ek)
      }
      setTexture(kk, ek) {
        this.textures.set(kk, ek), this.expected.delete(kk)
      }
      expectTexture(kk) {
        this.textures.set(kk, null), this.expected.add(kk)
      }
      write4(kk, ek, ik, Dk, fk, Sk) {
        const bk = this.slots.get(kk);
        if (!bk) return;
        const rk = this.data,
          Pk = bk.offset;
        rk[Pk] = ek, Sk > 1 && (rk[Pk + 1] = ik), Sk > 2 && (rk[Pk + 2] = Dk), Sk > 3 && (rk[Pk + 3] = fk)
      }
    }

    function yS(kk, ek) {
      const ik = BD,
        Dk = wS.h,
        fk = kk.lights,
        Sk = Math.min(kk.lightCount, 8);
      for (let bk = 0; bk < Sk; bk++) {
        const kk = ik.lights + bk * ik.lightStride,
          Sk = bk * wS.e;
        ek[kk] = fk[Sk + Dk.vector], ek[kk + 1] = fk[Sk + Dk.vector + 1], ek[kk + 2] = fk[Sk + Dk.vector + 2], ek[kk + 3] = fk[Sk + Dk.kind] === wS.g.directional ? 1 : 0, ek[kk + 4] = fk[Sk + Dk.diffuse], ek[kk + 5] = fk[Sk + Dk.diffuse + 1], ek[kk + 6] = fk[Sk + Dk.diffuse + 2], ek[kk + 7] = fk[Sk + Dk.range], ek[kk + 8] = fk[Sk + Dk.specular], ek[kk + 9] = fk[Sk + Dk.specular + 1], ek[kk + 10] = fk[Sk + Dk.specular + 2], ek[kk + 11] = fk[Sk + Dk.range]
      }
      ek[ik.fogInfos] = kk.fogMode, ek[ik.fogInfos + 1] = kk.fogStart, ek[ik.fogInfos + 2] = kk.fogEnd, ek[ik.fogInfos + 3] = kk.fogDensity, ek[ik.fogColour] = kk.fogColour[0], ek[ik.fogColour + 1] = kk.fogColour[1], ek[ik.fogColour + 2] = kk.fogColour[2], ek[ik.outputHeight] = kk.renderHeight, ek[ik.animTick] = kk.animTick, ek[ik.timeMs] = kk.timeMs
    }
    class YS {
      constructor(kk) {
        this.instancesOf = kk
      }
      refreshModelUniforms(kk, ek, ik, Dk) {
        const fk = lS(ik);
        if (fk >= 0 && fk === ek.heldVersion && ek.textures.get("diffuseSampler") === ik.diffuseTexture && ek.textures.get("reflectionCubeSampler") === ik.reflectionTexture && ek.textures.get("opacitySampler") === ik.opacityTexture && ek.textures.get("emissiveSampler") === ik.emissiveTexture) return !0;
        if (fk < 0)
          for (const Sk of this.instancesOf(ik)) Sk.heldVersion = -1;
        return this.writeModelUniforms(kk, ek, ik, Dk), ek.heldVersion = fk, !1
      }
      writeModelUniforms(kk, ek, ik, Dk) {
        const {
          ubo: fk
        } = ek, Sk = ik.diffuseTexture, bk = ik.diffuseColor;
        fk.updateFloat4("vDiffuseColor", bk[0], bk[1], bk[2], ik.alpha), Sk && (fk.updateFloat2("vDiffuseInfos", Sk.uvSet, Sk.level), fk.updateMatrixFloats("diffuseMatrix", Sk.matrix)), fk.updateFloat("alphaCutOff", ik.alphaCutOff), fk.updateFloatsFrom("vEmissiveColor", ik.emissiveColor, 0, 3), fk.updateFloat3TimesFloats("vAmbientColor", Dk.ambientColour, 0, ik.ambientColor);
        const rk = ik.specularColor;
        fk.updateFloat4("vSpecularColor", rk[0], rk[1], rk[2], ik.specularPower), fk.setTexture("diffuseSampler", Sk);
        const Pk = ik.opacityTexture;
        Pk && (fk.updateFloat2("vOpacityInfos", Pk.uvSet, Pk.level), fk.updateMatrixFloats("opacityMatrix", Pk.matrix)), fk.setTexture("opacitySampler", Pk);
        const mk = ik.emissiveTexture;
        mk && (fk.updateFloat2("vEmissiveInfos", mk.uvSet, mk.level), fk.updateMatrixFloats("emissiveMatrix", mk.matrix)), fk.setTexture("emissiveSampler", mk);
        const Mk = ik.reflectionTexture;
        Mk && fk.updateMatrixFloats("reflectionMatrix", Mk.matrix), fk.updateFloat2("vReflectionInfos", Mk ? Mk.level * kk.iblIntensity : 0, ik.roughness), fk.setTexture("reflectionCubeSampler", Mk);
        const Kk = kk.JU();
        for (const {
            feature: Uk,
            state: Hk,
            active: wk
          }
          of ik.features) {
          var xk, nk;
          if (wk) null === (xk = (nk = (0, Ke.g)(Uk)).bind) || void 0 === xk || xk.call(nk, Hk, fk, kk, Kk)
        }
      }
    }

    function LS(kk) {
      const ek = kk.replace(/\s+/g, "");
      return /u32|^vec\du$/.test(ek) ? "u32" : /i32|^vec\di$/.test(ek) ? "i32" : "f32"
    }

    function CS(kk, ek) {
      const ik = kk.getSize(),
        Dk = LS(ek),
        fk = kk => 4 === ik ? `${kk}x4` : 2 === ik ? `${kk}x2` : null;
      if ("f32" === Dk) {
        if (5126 === kk.type) return 1 === ik ? "float32" : ik >= 2 && ik <= 4 ? `float32x${ik}` : null;
        if (!kk.normalized) return null;
        switch (kk.type) {
          case 5121:
            return fk("unorm8");
          case 5120:
            return fk("snorm8");
          case 5123:
            return fk("unorm16");
          case 5122:
            return fk("snorm16")
        }
        return null
      }
      const Sk = "u32" === Dk ? "uint" : "sint";
      switch (kk.type) {
        case 5125:
        case 5124:
          return 1 === ik ? `${Sk}32` : ik <= 4 ? `${Sk}32x${ik}` : null;
        case 5121:
        case 5120:
          return fk(`${Sk}8`);
        case 5123:
        case 5122:
          return fk(`${Sk}16`)
      }
      return null
    }

    function AS(kk) {
      var ek;
      const ik = /(8|16|32)(?:x(\d))?$/.exec(kk);
      return ik ? Number(ik[1]) / 8 * Number(null !== (ek = ik[2]) && void 0 !== ek ? ek : 1) : 4
    }
    class jS {
      constructor(kk, ek, ik) {
        this.resources = kk, this.limits = ek, this.warnOnce = ik, this.layouts = new Map
      }
      resolveInputs(kk, ek, ik, Dk) {
        const fk = [],
          Sk = ik.program.attributes,
          bk = [];
        for (let Mk = 0; Mk < Sk.length; Mk++) {
          const ik = Sk[Mk],
            rk = ik.optional ? null : this.resources.vertexInput(kk, ik.name, Dk);
          if (!rk) {
            const kk = LS(ik.type),
              ek = "u32" === kk ? "uint32x4" : "i32" === kk ? "sint32x4" : "float32x4";
            bk.push(null);
            const Dk = fk.find((kk => null === kk.data));
            Dk ? Dk.attributes.push({
              shaderLocation: Mk,
              offset: 0,
              format: ek
            }) : fk.push({
              data: null,
              base: 0,
              stride: 0,
              step: "vertex",
              attributes: [{
                shaderLocation: Mk,
                offset: 0,
                format: ek
              }]
            });
            continue
          }
          const Pk = rk.getBuffer();
          bk.push(rk);
          const mk = CS(rk, ik.type);
          if (!mk) return this.warnOnce(`format:${ek}:${ik.name}`, `${ek}'s ${ik.name} (type ${rk.type}, size ${rk.getSize()}) has no WebGPU vertex format`), null;
          const Kk = rk.getIsInstanced() ? "instance" : "vertex",
            xk = rk.byteStride,
            nk = AS(mk),
            Uk = fk.find((kk => kk.data === Pk && kk.stride === xk && kk.step === Kk && rk.byteOffset >= kk.base && rk.byteOffset - kk.base + nk <= xk));
          Uk ? Uk.attributes.push({
            shaderLocation: Mk,
            offset: rk.byteOffset - Uk.base,
            format: mk
          }) : fk.push({
            data: Pk,
            base: rk.byteOffset,
            stride: xk,
            step: Kk,
            attributes: [{
              shaderLocation: Mk,
              offset: 0,
              format: mk
            }]
          })
        }
        if (fk.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ek}`, `${ek} needs ${fk.length} vertex buffers`), null;
        let rk = "";
        for (const Mk of fk) {
          rk += `${Mk.stride}${"instance"===Mk.step?"i":"v"}`;
          for (const kk of Mk.attributes) rk += `,${kk.shaderLocation}:${kk.offset}:${kk.format}`;
          rk += ";"
        }
        let Pk = this.layouts.get(rk);
        Pk || (Pk = {
          key: rk,
          buffers: fk.map((kk => ({
            arrayStride: kk.stride,
            stepMode: kk.step,
            attributes: kk.attributes
          }))),
          instanceEnds: fk.map((kk => {
            let ek = -1;
            if ("instance" === kk.step)
              for (const ik of kk.attributes) ek = Math.max(ek, ik.offset + AS(ik.format));
            return ek
          }))
        }, this.layouts.set(rk, Pk));
        const mk = fk.map((kk => kk.base));
        return {
          program: ik,
          sources: bk,
          layout: Pk,
          slotData: fk.map((kk => kk.data)),
          Q_: mk,
          buffers: [],
          offsets: mk,
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

    function sS(kk, ek, ik, Dk) {
      const fk = ek.program.program.attributes;
      for (let Sk = 0; Sk < fk.length; Sk++) {
        if ((fk[Sk].optional ? null : ik.vertexInput(kk, fk[Sk].name, Dk)) !== ek.sources[Sk]) return !1
      }
      return !0
    }
    const dS = 64;
    class VS {
      constructor(kk, ek, ik, Dk) {
        this.device = kk, this.layout = ek, this.frameBuffer = ik, this.label = Dk, this.data = new Float32Array(4096), this.buffer = void 0, this.bindGroup = void 0, this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup()
      }
      ensure(kk) {
        if (kk * dS <= this.data.length) return !1;
        let ek = 2 * this.data.length;
        for (; kk * dS > ek;) ek *= 2;
        const ik = new Float32Array(ek);
        return ik.set(this.data), this.data = ik, this.buffer.destroy(), this.buffer = this.createBuffer(), this.bindGroup = this.createBindGroup(), !0
      }
      write(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const fk = this.data,
          Sk = kk * dS;
        let bk = fk[Sk + 16] !== ik;
        for (let rk = 0; rk < 16 && !bk; rk++) bk = fk[Sk + rk] !== ek[Dk + rk];
        if (bk) {
          for (let kk = 0; kk < 16; kk++) fk[Sk + kk] = ek[Dk + kk];
          fk[Sk + 16] = ik
        }
        return bk
      }
      upload(kk, ek) {
        this.device.queue.writeBuffer(this.buffer, kk * cD, this.data, kk * dS, (ek - kk) * dS)
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

    function FS(kk) {
      return kk.gpu[Vk.c.lite] ??= kk.materials.map(((ek, ik) => ({
        parts: kk,
        range: ik,
        owner: kk.owner
      })))
    }

    function uS(kk) {
      var ek, ik, Dk;
      return null !== (ek = null !== (ik = null === (Dk = kk.parts.materials[kk.range]) || void 0 === Dk ? void 0 : Dk.mirror) && void 0 !== ik ? ik : kk.owner.material) && void 0 !== ek ? ek : null
    }
    const qS = ["opaque", "alphaTest", "transparent", "text"];

    function IS(kk) {
      for (const ek of qS) kk[ek].units.length = 0, kk[ek].rows.length = 0
    }
    class zS {
      constructor() {
        this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Me.d)("Lite: ")
      }
      attach(kk, ek) {
        this.model = kk, this.mirror = ek
      }
      get worlds() {
        return this.model.nodes.Ux
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
        for (const [ek, ik] of this.groups)
          for (const Dk of qS)
            for (const fk of ik[Dk].units) kk(fk.owner, "text" === Dk ? "transparent" : Dk, ek)
      }
      select(kk, ek) {
        this.frame++, this.selectedCount = 0, this.groups.forEach(IS);
        const {
          model: ik,
          mirror: Dk
        } = this;
        if (!ik || !Dk || !kk) return;
        this.rows.length < ik.nodes.vK && (this.rows = new Int32Array(ik.nodes.vK));
        const fk = this.rows,
          Sk = ik.meshes;
        for (let rk = 0; rk < Sk.looseCount; rk++) {
          const kk = Sk.loose[rk],
            ik = Dk.nodes[kk];
          ik && !ik.isBlocked && ik.isEnabled() && !ik.wi.hasAZeroComponent && Sk.selects(kk, ek.frustum) && (this.activate(ik, kk), this.selectedCount++)
        }
        const bk = Sk.selectTextPlanes(ek.frustum, fk);
        for (let rk = 0; rk < bk; rk++) {
          const ek = fk[rk],
            Sk = Dk.nodes[ek],
            bk = ik.meshes.parts[ek];
          if (!Sk.isVisible || !(Sk.visibility > 0) || 0 === (Sk.layerMask & kk.layerMask) || !bk) continue;
          const Pk = this.groupOf(ik.meshes.layer[ek]).text;
          for (const kk of FS(bk)) Pk.units.push(kk), Pk.rows.push(ek);
          this.selectedCount++
        }
      }
      instanceBatch(kk) {
        const ek = this.batchOf(kk);
        return ek.dispatched || (ek.dispatched = ek.renderSelf = !0, ek.row = this.rowOf(kk)), ek
      }
      rowOf(kk) {
        return kk.row
      }
      activate(kk, ek) {
        if (!kk.JF) {
          const ik = kk;
          if (ik.hDk) {
            const kk = this.batchOf(ik);
            kk.dispatched = !0, kk.renderSelf = !0, kk.row = ek
          }
          return void this.dispatch(ik, ek, ek)
        }
        const ik = kk,
          Dk = ik.aDk;
        if (Dk._getWorldMatrixDeterminant() >= 0 !== ik._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Dk.name}`, `A mirrored InstancedMesh of ${Dk.name} is not drawn yet`);
        const fk = this.batchOf(Dk);
        fk.instances.push(ik), fk.rows.push(ek), fk.dispatched || (fk.dispatched = !0, this.dispatch(Dk, ek, this.rowOf(Dk)))
      }
      batchOf(kk) {
        let ek = this.batches.get(kk);
        return ek || (ek = {
          frame: 0,
          dispatched: !1,
          renderSelf: !1,
          row: -1,
          instances: [],
          rows: []
        }, this.batches.set(kk, ek)), ek.frame !== this.frame && (ek.frame = this.frame, ek.dispatched = !1, ek.renderSelf = !1, ek.instances.length = 0, ek.rows.length = 0), ek
      }
      dispatch(kk, ek, ik) {
        const {
          layer: Dk,
          parts: fk
        } = this.model.meshes;
        if (!fk[ek]) return;
        const Sk = this.groupOf(Dk[ek]),
          bk = kk;
        for (const rk of FS(fk[ek])) {
          const kk = uS(rk);
          if (!kk) continue;
          const ek = kk.needAlphaBlendingForMesh(bk) ? Sk.transparent : kk.needAlphaTestingForMesh(bk) ? Sk.alphaTest : Sk.opaque;
          ek.units.push(rk), ek.rows.push(ik)
        }
      }
      groupOf(kk) {
        let ek = this.groups.get(kk);
        return ek || (ek = {
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
        }, this.groups.set(kk, ek)), ek
      }
    }

    function QS(kk) {
      kk.opaque.length = 0, kk.transparent.length = 0
    }
    class vS {
      constructor() {
        this.XM = new Map, this.enabled = [], this.groups = new Map, this.fU = [], this.warned = new Set, this.selected = 0, this.drawn = 0
      }
      add(kk) {
        if (this.XM.has(kk)) return;
        const ek = {
          mesh: kk,
          observer: kk.onEffectiveEnabledStateChangedObservable.add((kk => {
            this.bV(ek, kk)
          })),
          index: -1,
          steady: null
        };
        this.XM.set(kk, ek), this.bV(ek, kk.isEnabled())
      }
      remove(kk) {
        const ek = this.XM.get(kk);
        ek && (ek.observer.remove(!0), this.bV(ek, !1), this.XM.delete(kk))
      }
      base(kk) {
        return this.XM.get(kk)
      }
      drawStats() {
        return {
          drawn: this.drawn,
          selected: this.selected,
          XM: this.XM.size
        }
      }
      forEachSelected(kk) {
        for (const [ek, ik] of this.groups) {
          for (const Dk of ik.opaque) kk(Dk.owner, "opaque", ek);
          for (const Dk of ik.transparent) kk(Dk.owner, "transparent", ek)
        }
        for (const ek of this.fU) kk(ek.mesh, "opaque", 0)
      }
      group(kk) {
        return this.groups.get(kk)
      }
      forEachGroup(kk) {
        this.groups.forEach(kk)
      }
      select(kk, ek) {
        if (this.drawn = 0, this.selected = 0, this.fU.length = 0, this.groups.forEach(QS), !kk) return;
        const ik = this.enabled;
        for (let Dk = 0; Dk < ik.length; Dk++) {
          const fk = ik[Dk];
          if (fk.steady && ek(fk, kk)) {
            this.selected++, this.fU.push(fk);
            continue
          }
          const Sk = fk.mesh;
          if (Sk.isBlocked || Sk.wi.hasAZeroComponent) continue;
          if (!Sk.isVisible || Sk.visibility <= 0 || 0 === (Sk.layerMask & kk.layerMask)) continue;
          if (Sk.hDk) {
            this.warned.has(Sk.name) || (this.warned.add(Sk.name), console.warn(`Lite: thin instance base ${Sk.name} has InstancedMeshes and is not drawn`));
            continue
          }
          const {
            parts: bk
          } = Sk;
          if (!bk) continue;
          Sk.computeWorldMatrix(), this.selected++;
          const rk = this.listsFor(Sk.renderingGroupId);
          for (const kk of FS(bk)) {
            const ek = uS(kk);
            ek && (ek.needAlphaBlendingForMesh(Sk) ? rk.transparent.push(kk) : rk.opaque.push(kk))
          }
        }
      }
      bV(kk, ek) {
        if (ek === kk.index >= 0) return;
        kk.steady = null;
        const ik = this.enabled;
        if (ek) kk.index = ik.length, ik.push(kk);
        else {
          const ek = ik.pop();
          ek !== kk && (ik[kk.index] = ek, ek.index = kk.index), kk.index = -1
        }
      }
      listsFor(kk) {
        let ek = this.groups.get(kk);
        return ek || (ek = {
          opaque: [],
          transparent: []
        }, this.groups.set(kk, ek)), ek
      }
    }
    var ES = ik(39139);
    class hS {
      constructor() {
        this.bundle = null, this.stale = !0, this.XM = new Set
      }
    }
    class aS {
      constructor(kk, ek, ik) {
        this.device = kk, this.slots = ek, this.host = ik, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = new hS, this.GV = new hS, this.rangedEpoch = -1, this.bundles = [], this.recordedTarget = "", this.recordedSceneGroup = null, this.binder = new Jf, this.frame = 0, this.drawn = 0, this.direct = void 0, this.directThisFrame = !1, this.endRecordFrame = kk => {
          kk.seen !== this.frame && (kk.draw && (kk.draw = null, this.args[5 * kk.slot + 1] = 0, this.argsDirty = !0, this.GV.stale ||= kk.GV), this.frame - kk.seen > 120 && (this.records.delete(kk.unit), this.freeSlots.push(kk.slot), kk.recorded && (this.bundleOf(kk).stale = !0)))
        }, this.argsBuffer = this.createArgsBuffer(), this.direct = function(kk) {
          var ek, ik;
          let Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ek = null === (ik = globalThis.navigator) || void 0 === ik ? void 0 : ik.userAgent) && void 0 !== ek ? ek : "";
          const fk = kk.adapterInfo;
          return "intel" === (null === fk || void 0 === fk ? void 0 : fk.vendor) && "gen-12lp" === fk.architecture && Dk.includes("Windows")
        }(kk), (0, ES.H)(this.direct)
      }
      AY() {
        this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ES.H)(this.directThisFrame)
      }
      add(kk, ek, ik, Dk) {
        let fk = this.records.get(kk);
        return fk || (fk = this.createRecord(kk), this.records.set(kk, fk)), fk.recorded && tS(fk, ek) || (this.bundleOf(fk).stale = !0), this.place(fk, ek, ik, Dk), fk
      }
      bundleOf(kk) {
        return kk.GV ? this.GV : this.main
      }
      addAgain(kk, ek, ik, Dk) {
        kk.recorded || (this.bundleOf(kk).stale = !0), this.place(kk, ek, ik, Dk)
      }
      place(kk, ek, ik, Dk) {
        kk.seen = this.frame, kk.GV && null === kk.draw && (this.GV.stale = !0), kk.draw = ek, this.drawn++, ik && this.slots.write(kk.slot, ik, Dk) && (this.slotsFrom = Math.min(this.slotsFrom, kk.slot), this.slotsTo = Math.max(this.slotsTo, kk.slot));
        const fk = this.args,
          Sk = 5 * kk.slot;
        fk[Sk] === ek.count && fk[Sk + 1] === ek.instances && fk[Sk + 2] === ek.first || (fk[Sk] = ek.count, fk[Sk + 1] = ek.instances, fk[Sk + 2] = ek.first, this.argsDirty = !0, this.GV.stale ||= kk.GV)
      }
      VY() {
        this.records.forEach(this.endRecordFrame), this.argsDirty && !this.directThisFrame && (this.device.queue.writeBuffer(this.argsBuffer, 0, this.args, 0, 5 * this.slotCount), this.argsDirty = !1), this.slotsTo >= 0 && (this.slots.upload(this.slotsFrom, this.slotsTo + 1), this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1)
      }
      forEachDrawn(kk) {
        for (const ek of this.records.values()) ek.draw && ek.seen === this.frame && !ek.GV && kk(ek.draw, this.slots.data, ek.slot * cD / 4)
      }
      resourceDestroyed(kk) {
        this.main.stale ||= this.main.XM.has(kk), this.GV.stale ||= this.GV.XM.has(kk)
      }
      execute(kk, ek, ik) {
        if (0 === this.drawn) return 0;
        if (this.directThisFrame) return this.encode(kk, ek, ik, "direct"), this.drawn;
        const Dk = this.host.sceneGroup(ek);
        if (!Dk) return this.main.bundle = null, this.GV.bundle = null, this.recordedSceneGroup = null, this.encode(kk, ek, ik, "direct"), this.drawn;
        this.recordedTarget === ik && this.recordedSceneGroup === Dk || (this.recordedTarget = ik, this.recordedSceneGroup = Dk, this.main.stale = !0, this.GV.stale = !0);
        const fk = this.main,
          Sk = this.GV;
        let bk = !1;
        !fk.stale && fk.bundle || (fk.bundle = this.record(ek, ik, Dk, "indirect"), bk = !0);
        const rk = (0, ES.m)();
        return (Sk.stale || this.rangedEpoch !== rk) && (this.rangedEpoch = rk, Sk.bundle = this.drawsRanged() ? this.record(ek, ik, Dk, "GV") : this.noRangedBundle(), bk = !0), bk && (this.bundles = Sk.bundle ? [fk.bundle, Sk.bundle] : [fk.bundle]), kk.executeBundles(this.bundles), kk.setBindGroup(0, Dk), this.drawn
      }
      record(kk, ek, ik, Dk) {
        const fk = this.device.createRenderBundleEncoder({
          label: "GV" === Dk ? "thin-bases-ranged" : "thin-bases",
          colorFormats: kk._colorFormat ? [kk._colorFormat] : [],
          depthStencilFormat: kk._depthStencilFormat,
          sampleCount: kk._sampleCount
        });
        return fk.setBindGroup(0, ik), this.encode(fk, kk, ek, Dk), fk.finish()
      }
      noRangedBundle() {
        for (const kk of this.records.values()) kk.GV && (kk.recorded = !1);
        return this.GV.XM.clear(), this.GV.stale = !1, null
      }
      drawsRanged() {
        for (const kk of this.records.values())
          if (kk.GV && kk.draw) return !0;
        return !1
      }
      encode(kk, ek, ik, Dk) {
        const fk = [];
        for (const Pk of this.records.values()) "direct" !== Dk && Pk.GV !== ("GV" === Dk) || (Pk.recorded = !1, Pk.draw && fk.push(Pk));
        fk.sort(XS);
        const Sk = "direct" === Dk ? null : "GV" === Dk ? this.GV : this.main;
        null === Sk || void 0 === Sk || Sk.XM.clear(), this.binder.reset();
        let bk = !1;
        for (const Pk of fk) {
          var rk;
          const fk = Pk.draw,
            mk = this.host.pipelineFor(fk, ek, ik);
          if (!mk) {
            this.host.pipelineCompiling(fk, ik) ? bk = !0 : Sk && this.keep(Pk, fk, Sk.XM);
            continue
          }
          let Mk;
          if (Pk.GV && "indirect" !== Dk) {
            const kk = Pk.unit.owner;
            Mk = "direct" === Dk && (0, ES.x)(kk) || (0, ES.o)(kk) || void 0
          }
          if (Sk && this.keep(Pk, fk, Sk.XM), 0 === (null === (rk = Mk) || void 0 === rk ? void 0 : rk.count)) continue;
          this.binder.bind(kk, fk, mk, this.slots.bindGroup, Pk.slot * cD);
          const Kk = 5 * Pk.slot;
          if ("indirect" === Dk) {
            fk.indexBuffer ? kk.drawIndexedIndirect(this.argsBuffer, 4 * Kk) : kk.drawIndirect(this.argsBuffer, 4 * Kk);
            continue
          }
          const xk = this.args;
          Mk ? WS(kk, null !== fk.indexBuffer, xk, Kk, Mk) : fk.indexBuffer ? kk.drawIndexed(xk[Kk], xk[Kk + 1], xk[Kk + 2], 0, 0) : kk.draw(xk[Kk], xk[Kk + 1], xk[Kk + 2], 0)
        }
        Sk && (Sk.stale = bk)
      }
      keep(kk, ek, ik) {
        kk.recorded = !0, kk.pipelineKey = ek.pipelineKey, kk.materialGroup = ek.material.bindGroup, kk.vertexBuffers.length = 0, kk.vertexBuffers.push(...ek.vertexBuffers), kk.vertexOffsets = ek.vertexOffsets, kk.indexBuffer = ek.indexBuffer, kk.indexFormat = ek.indexFormat;
        for (const Dk of ek.vertexBuffers) ik.add(Dk);
        ek.indexBuffer && ik.add(ek.indexBuffer), ik.add(ek.material.buffer);
        for (const Dk of ek.material.bound) Dk && ik.add(Dk)
      }
      createRecord(kk) {
        let ek = this.freeSlots.pop();
        return void 0 === ek && (ek = this.slotCount++, this.grow()), {
          unit: kk,
          slot: ek,
          GV: void 0 !== (0, ES.o)(kk.owner),
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
        if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.GV.stale = !0), 5 * this.slotCount > this.args.length) {
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

    function WS(kk, ek, ik, Dk, fk) {
      const Sk = ik[Dk + 1],
        bk = fk.data;
      for (let rk = 0; rk < fk.count; rk++) {
        const fk = Math.min(bk[2 * rk], Sk),
          Pk = Math.min(bk[2 * rk + 1], Sk - fk);
        0 !== Pk && (ek ? kk.drawIndexed(ik[Dk], Pk, ik[Dk + 2], 0, fk) : kk.draw(ik[Dk], Pk, ik[Dk + 2], fk))
      }
    }

    function tS(kk, ek) {
      if (kk.pipelineKey !== ek.pipelineKey || kk.materialGroup !== ek.material.bindGroup || kk.indexBuffer !== ek.indexBuffer || kk.indexFormat !== ek.indexFormat || kk.vertexOffsets !== ek.vertexOffsets || kk.vertexBuffers.length !== ek.vertexBuffers.length) return !1;
      for (let ik = 0; ik < kk.vertexBuffers.length; ik++)
        if (kk.vertexBuffers[ik] !== ek.vertexBuffers[ik]) return !1;
      return !0
    }

    function XS(kk, ek) {
      return eS(kk.draw, ek.draw)
    }
    const BS = new WeakMap,
      cS = {
        depth: !1,
        sunShadow: !1
      };

    function TS(kk, ek) {
      let ik = BS.get(kk);
      ik || (ik = new Map, BS.set(kk, ik));
      const Dk = `${ek.depth?"-depth":""}${ek.sunShadow?"-shadow":""}${ek.shadowMask?"-mask":""}`;
      let fk = ik.get(Dk);
      if (!fk) {
        const Sk = [{
          binding: Ve.e,
          visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          buffer: {
            type: "uniform",
            minBindingSize: Ve.h
          }
        }, {
          binding: Ve.w,
          visibility: GPUShaderStage.VERTEX,
          buffer: {
            type: "read-only-storage"
          }
        }];
        ek.depth && Sk.push({
          binding: Ve.n,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), ek.sunShadow && Sk.push(... function() {
          const kk = GPUShaderStage.FRAGMENT,
            ek = Ve.o;
          return [{
            binding: ek.uniform,
            visibility: kk,
            buffer: {
              type: "uniform"
            }
          }, {
            binding: ek.gx,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ek.special,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ek.volume,
            visibility: kk,
            texture: {
              sampleType: "float",
              viewDimension: "3d"
            }
          }, {
            binding: ek.sampler,
            visibility: kk,
            sampler: {
              type: "filtering"
            }
          }, {
            binding: ek.entities,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }, {
            binding: ek.entityGrids,
            visibility: kk,
            buffer: {
              type: "read-only-storage"
            }
          }]
        }()), ek.shadowMask && Sk.push({
          binding: Ve.s,
          visibility: GPUShaderStage.FRAGMENT,
          texture: {
            sampleType: "unfilterable-float"
          }
        }), fk = kk.createBindGroupLayout({
          label: `${ek.depth?"terrain-":""}shader-pack-inputs${Dk}`,
          entries: Sk
        }), ik.set(Dk, fk)
      }
      return fk
    }

    function oS(kk) {
      return TS(kk, cS)
    }

    function ZS(kk, ek) {
      if (!ek) return !1;
      const ik = (0, Fe.e)(kk);
      return !!ik && Wi(ik, ek)
    }

    function OS(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!xD(ek)) return [];
      return [TS(kk, {
        depth: rD(ek.packVariant),
        sunShadow: ZS(ek.packVariant, ik),
        shadowMask: Dk
      })]
    }
    class gS {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.device = kk, this.sunShadow = ik, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(Ve.h), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = kk.createBuffer({
          label: "shader-pack-inputs",
          size: Ve.h,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const Dk = (0, Ve.y)(ek);
        this.textures = kk.createBuffer({
          label: "shader-pack-textures",
          size: Dk.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), kk.queue.writeBuffer(this.textures, 0, Dk), this.bindGroup = kk.createBindGroup({
          label: "shader-pack-inputs",
          layout: oS(kk),
          entries: this.entries()
        })
      }
      entries() {
        return [{
          binding: Ve.e,
          resource: {
            buffer: this.buffer
          }
        }, {
          binding: Ve.w,
          resource: {
            buffer: this.textures
          }
        }]
      }
      write(kk, ek, ik) {
        (0, Ve.C)(this.data, {
          seconds: kk.seconds(),
          lit: ik,
          renderOffset: kk.renderOffset(),
          Z5: kk.Z5(),
          eyePosition: ek,
          shadowDirection: kk.shadowDirection()
        }), this.device.queue.writeBuffer(this.buffer, 0, this.data)
      }
      bindGroupFor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Dk = ek ? this.sunShadow : null;
        if ((ek || ik) && !Dk) throw new Error("A shader pack program binds sun shadows on a page without them");
        if (!kk && !Dk) return this.bindGroup;
        (kk && kk !== this.depthView || ik && ik !== this.maskView) && (this.depthView = null !== kk && void 0 !== kk ? kk : this.depthView, this.maskView = null !== ik && void 0 !== ik ? ik : this.maskView, this.groups.clear());
        const fk = (kk ? 1 : 0) | (Dk ? 2 : 0) | (ik ? 4 : 0);
        let Sk = this.groups.get(fk);
        if (!Sk) {
          const ek = this.entries();
          kk && ek.push({
            binding: Ve.n,
            resource: kk
          }), Dk && ek.push(...Dk.entries()), ik && ek.push({
            binding: Ve.s,
            resource: ik
          }), Sk = this.device.createBindGroup({
            label: `${kk||ik?"terrain-":""}shader-pack-inputs${kk?"-depth":""}${Dk?"-shadow":""}${ik?"-mask":""}`,
            layout: TS(this.device, {
              depth: !!kk,
              sunShadow: !!Dk,
              shadowMask: !!ik
            }),
            entries: ek
          }), this.groups.set(fk, Sk)
        }
        return Sk
      }
      bind(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        kk.setBindGroup(Ve.g, this.bindGroupFor(ek, ik, Dk))
      }
    }

    function GS(kk, ek, ik) {
      if (kk.gpuVersion === ek.gpuBuffersVersion) return !0;
      let Dk;
      do {
        if (Dk = ek.gpuBuffersVersion, !NS(kk, ek, ik)) return !1
      } while (ek.gpuBuffersVersion !== Dk);
      return kk.gpuVersion = Dk, kk.fitInstances = 0, !0
    }

    function NS(kk, ek, ik) {
      let Dk = null;
      for (let Sk = 0; Sk < kk.slotData.length; Sk++) {
        var fk;
        const bk = kk.slotData[Sk],
          rk = bk ? ek.gpuBuffer(bk) : ik;
        if (!rk) return !1;
        bk && kk.layout.instanceEnds[Sk] < 0 && ek.cover(bk, Number.POSITIVE_INFINITY), kk.buffers[Sk] = rk;
        const Pk = kk.Q_[Sk] + (bk ? ek.gpuOffset(bk) : 0);
        Pk !== (null !== (fk = Dk) && void 0 !== fk ? fk : kk.offsets)[Sk] && (Dk ??= kk.offsets.slice(), Dk[Sk] = Pk), kk.ends[Sk] = bk ? ek.gpuEnd(bk) : rk.size
      }
      return Dk && (kk.offsets = Dk), !0
    }

    function RS(kk, ek, ik, Dk) {
      if (ek <= kk.fitInstances) return null;
      const {
        layout: fk,
        ends: Sk,
        offsets: bk,
        slotData: rk,
        Q_: Pk
      } = kk;
      let mk = !1;
      for (let Mk = 0; Mk < fk.buffers.length; Mk++) {
        const kk = fk.instanceEnds[Mk];
        if (kk < 0) continue;
        const Dk = (ek - 1) * fk.buffers[Mk].arrayStride + kk;
        if (Sk[Mk] - bk[Mk] < Dk) return {
          index: Mk,
          needed: Dk
        };
        const Kk = rk[Mk];
        Kk && ik.cover(Kk, Pk[Mk] + Dk) && (mk = !0)
      }
      return mk && GS(kk, ik, Dk), kk.fitInstances = ek, null
    }
    var JS = ik(37416),
      kb = ik(37451);
    const eb = "vertexOutputs.position=scene.viewProjection*worldPos;\n",
      ib = "var baseAmbientColor: vec3f= vec3f(1.,1.,1.);\n",
      Db = "color=vec4f(color.rgb,color.a*mesh.visibility);\n",
      fb = `((vertexInputs.aPackedLightLevels >> 16u) | ${me.c.placed}u)`,
      Sb = "u32(vertexInputs.aShaderPackItem.x)",
      bb = `${me.c.lifeform}u`;

    function rb(kk) {
      return "item" === kk.kind ? "bloxdSpItemLocalPosition(positionUpdated, vertexInputs.aShaderPackItem)" : "positionUpdated"
    }
    const Pb = "bloxdSpEnchant",
      mb = "floor(finalWorld[3].xyz)";

    function Mb(kk, ek, ik) {
      return "placed" === ek.kind && kk.reads[ik].includes("bloxdFragmentBlockPosition")
    }

    function Kb(kk, ek) {
      let [ik, Dk] = kk;
      return ik === ek.point && Dk === ek.code
    }

    function xb(kk, ek) {
      var ik, Dk, fk;
      const Sk = null === (ik = kk.find((kk => kk.texture))) || void 0 === ik ? void 0 : ik.texture,
        bk = null === (Dk = kk.find((kk => kk.enchantTier))) || void 0 === Dk ? void 0 : Dk.enchantTier,
        rk = null === (fk = kk.find((kk => kk.overlay))) || void 0 === fk ? void 0 : fk.overlay,
        Pk = rk ? ek.filter((kk => Kb(kk, rk))).length : 0;
      return rk && 1 === Pk ? {
        texture: Sk,
        overlay: rk,
        enchantTier: bk
      } : {
        texture: Sk,
        enchantTier: bk
      }
    }

    function nb(kk) {
      if ("item" === kk.kind) {
        return {
          vertexFlags: `(${Sb} & 0xffffu)`,
          varying: "vPackItem",
          value: Sb,
          flags: "(fragmentInputs.vPackItem & 0xffffu)",
          enchantTier: "(fragmentInputs.vPackItem >> 16u)"
        }
      }
      return kk.defines.BLOXD_LIGHT_WORD ? {
        vertexFlags: fb,
        varying: "vPackFlags",
        value: fb,
        flags: "fragmentInputs.vPackFlags",
        enchantTier: "0u"
      } : null
    }

    function Ub(kk) {
      return "lifeform" === kk.kind ? bb : "0u"
    }

    function Hb(kk) {
      return !!kk.BLOXD_PLUGIN_ENCHANTMENT
    }

    function wb(kk, ek) {
      const {
        enchantTier: ik
      } = ek;
      return ik && Hb(ek.defines) && "lifeform" === ek.kind && Cb(kk, "enchantTier") ? ik : null
    }

    function lb(kk, ek) {
      return Hb(ek.defines) && Cb(kk, "enchantSpeed")
    }

    function pb(kk) {
      const {
        overlay: ek,
        defines: ik
      } = kk;
      if (!ek || !ik.DIFFUSE) return null;
      const Dk = ik.VERTEXCOLOR || ik.INSTANCESCOLOR && ik.INSTANCES;
      return `vec4f(${ek.colour}.rgb * uniforms.vDiffuseInfos.y${Dk?" * fragmentInputs.vColor.rgb":""}, ${ek.colour}.a)`
    }
    const yb = "fragmentInputs.vPackTexture";

    function Yb(kk) {
      const {
        atlas: ek,
        defines: ik,
        texture: Dk
      } = kk;
      if (ek || !ik.DIFFUSE) return null;
      if (Dk) return {
        texture: "diffuseSampler",
        ...Dk
      };
      const fk = {
        texture: "diffuseSampler",
        cells: null,
        layers: [],
        uv: `fragmentInputs.${1===ik.DIFFUSEDIRECTUV?"vMainUV1":2===ik.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
      };
      if ("box" !== kk.kind) return fk;
      if (!ik.BLOXD_PLUGIN_ANIMATED) return {
        ...fk,
        id: yb
      };
      const Sk = Ck.d.WGSL,
        bk = (0, Ck.Hb)(Sk, "uAnimStatesNum"),
        rk = (0, Ck.db)(Sk, (0, JS.e)(Sk), bk),
        Pk = "fragmentInputs.vMainUV1";
      return {
        texture: "diffuseSampler",
        cells: `vec2f(1.0, ${bk})`,
        layers: [rk],
        uv: `vec2f(${Pk}.x, ${Pk}.y * ${bk} - ${rk})`,
        levelUv: Pk,
        id: yb
      }
    }

    function Lb(kk, ek) {
      return "box" === ek.kind && !!kk.hooks.surface && null !== Yb(ek)
    }

    function Cb(kk, ek) {
      return kk.reads.fragment.includes(ek)
    }

    function Ab(kk) {
      return !!kk.BLOXD_LIGHTING && !kk.BLOXD_UNLIT
    }

    function jb(kk, ek, ik, Dk) {
      const fk = kk.filter((kk => {
        let [ik, Dk] = kk;
        return "CUSTOM_FRAGMENT_BEFORE_FOG" === ik && Dk === ek
      }));
      if (1 !== fk.length) throw new Error(`A model program for shader packs has ${0===fk.length?"no":"more than one"} ${Dk} code before fog (lite/modelShaderPack.ts)`);
      return kk.map((kk => kk === fk[0] ? [kk[0], ik] : kk))
    }

    function sb(kk, ek, ik, Dk) {
      const {
        hooks: fk
      } = kk, {
        kind: Sk,
        defines: bk
      } = ek, rk = [...ik];
      var Pk;
      ek.atlas && fk.surface && rk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", Zi("atlasIdxIn")]), "item" === Sk && rk.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Ck.e)(Ck.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "\nfn bloxdSpQuarterTurns(v: vec2f, quarters: u32) -> vec2f {\n    let c = select(select(0.0, -1.0, quarters == 2u), 1.0, quarters == 0u);\n    let s = select(select(0.0, -1.0, quarters == 3u), 1.0, quarters == 1u);\n    return vec2f(v.x * c - v.y * s, v.x * s + v.y * c);\n}\nfn bloxdSpItemLocalPosition(position: vec3f, item: vec4f) -> vec3f {\n    let p = position * item.y + vec3f(0.0, item.z, 0.0);\n    let turn = u32(item.w);\n    let yz = bloxdSpQuarterTurns(p.yz, turn >> 2u);\n    let zx = bloxdSpQuarterTurns(vec2f(yz.y, p.x), turn & 3u);\n    return vec3f(zx.y, yz.x, zx.x);\n}\n"]), Lb(kk, ek) && rk.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Ck.e)(Ck.d.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", (Pk = "vertexInputs.aShaderPackItem.x", `\tvertexOutputs.vPackTexture = select(0u, ${Ti}[min(u32(${Pk}) - 1u, arrayLength(&${Ti}) - 1u)], ${Pk} > 0.5);\n`)]);
      const mk = nb(ek);
      mk && (fk.surface || fk.light) && rk.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${mk.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${mk.varying} = ${mk.value};`]);
      let Mk = Dk;
      if (Mb(kk, ek, "fragment") && (rk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${mb});`]), Mk = [...Mk, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Cb(kk, "localPosition") && rk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackLocalPosition: vec3f;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackLocalPosition = ${rb(ek)};`]), Hb(bk) && fk.surface) {
        lb(kk, ek) && rk.push(["CUSTOM_VERTEX_DEFINITIONS", "flat varying vPackEnchantSpeed: f32;"], ["CUSTOM_VERTEX_MAIN_END", "vertexOutputs.vPackEnchantSpeed = vertexInputs.aEnchantmentSpeed;"]);
        const ik = wb(kk, ek);
        ik && rk.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ik});`]);
        const Dk = (0, Ck.rb)(Ck.d.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
        Mk = [...jb(Mk, (0, kb.k)(Ck.d.WGSL), Dk, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, kb.e)(Pb)]]
      }
      const {
        overlay: Kk
      } = ek;
      Kk && pb(ek) && fk.surface && (Mk = Mk.filter((kk => !Kb(kk, Kk))));
      const xk = fk.light ? function(kk) {
        return "placed" === kk.kind ? {
          name: "terrain",
          engine: (0, je.U)(Ck.d.WGSL),
          pack: (0, je.nb)(Ck.d.WGSL)
        } : kk.defines.BLOXD_PLUGIN_ENTITY_LIGHT ? {
          name: "entity",
          engine: (0, je.J)(Ck.d.WGSL),
          pack: (0, je.lb)(Ck.d.WGSL)
        } : null
      }(ek) : null;
      if (xk && (Mk = jb(Mk, xk.engine, xk.pack, `${xk.name} light`), "placed" !== Sk && Ab(bk))) {
        const kk = bk.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Ck.Hb)(Ck.d.WGSL, "uEntityLightLevels") : (0, Ck.Rb)(Ck.d.WGSL, "aLightLevels");
        rk.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${je.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, je.mb)(Ck.d.WGSL, kk)])
      }
      return {
        vertexCode: rk,
        fragmentCode: Mk
      }
    }

    function db(kk, ek, ik, Dk) {
      return Ei(kk, ek, ik, Dk, "model")
    }
    const Vb = "\t@builtin(position) position: vec4f,\n";

    function Fb(kk, ek) {
      const ik = /^(?:(?:diagnostic|enable|requires)\b[^;]*;\n)*/.exec(kk)[0];
      return `${ik}${ek}${kk.slice(ik.length)}`
    }

    function ub(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const {
        hooks: fk
      } = ek, Sk = Wi(ek, Dk), {
        kind: bk,
        defines: rk
      } = ik, Pk = function(kk, ek) {
        var ik, Dk, fk;
        const {
          defines: Sk
        } = ek, bk = nb(ek), rk = !!Sk.FOG, Pk = Hb(Sk), mk = null !== (ik = null === bk || void 0 === bk ? void 0 : bk.enchantTier) && void 0 !== ik ? ik : wb(kk, ek) ? "fragmentInputs.vPackEnchantTier" : "0u", Mk = "lifeform" === ek.kind && !Sk.ALPHAFROMDIFFUSE;
        return {
          vertexFlags: null !== (Dk = null === bk || void 0 === bk ? void 0 : bk.vertexFlags) && void 0 !== Dk ? Dk : Ub(ek),
          vertexLocalPosition: rb(ek),
          flags: null !== (fk = null === bk || void 0 === bk ? void 0 : bk.flags) && void 0 !== fk ? fk : Ub(ek),
          normal: "normalW",
          alpha: Mk ? "alpha * baseColor.a" : "alpha",
          alphaOut: Mk ? "baseColor.a" : "alpha",
          lambert: "diffuseBase.r",
          diffuse: "diffuseColor",
          emissive: "emissiveColor",
          ambient: "uniforms.vAmbientColor",
          fogColour: rk ? "frame.vFogColor" : "vec3f(0.0)",
          fogAlpha: rk ? "1.0 - fog" : "0.0",
          enchantTier: mk,
          enchantColour: Pk ? `${Pb}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
          enchantSpeed: lb(kk, ek) ? "fragmentInputs.vPackEnchantSpeed" : "0.0",
          localPosition: Cb(kk, "localPosition") ? "fragmentInputs.vPackLocalPosition" : "vec3f(0.0)",
          overlayColour: pb(ek)
        }
      }(ek, ik), mk = kk.textures.filter((kk => /^textureAtlas\d+$/.test(kk.name))).length, Mk = ik.atlas && mk > 0 ? {
        count: mk,
        layers: ik.atlas.layers,
        width: ik.atlas.width,
        sampler: "textureAtlas0Sampler",
        frame: kk.material.slots.has("uAnimDataPerTex") ? (ek, ik) => uD(ek, ik, function(kk) {
          const ek = kk.material.stridedArrays.includes("uAnimDataPerTex") ? ".el" : "";
          return {
            Px: "frame.animTick",
            stride: "uniforms.uAnimData.y",
            count: "uniforms.uAnimData.z",
            perTexture: kk => `uniforms.uAnimDataPerTex[${kk}]${ek}`
          }
        }(kk)) : null
      } : null, Kk = "placed" === bk ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - bloxdSpCell - 0.5) <= vec3f(0.5 + 1.0 / 256.0));\n\treturn select(vec3i(floor(bloxdSpBehind)), vec3i(bloxdSpCell), bloxdSpInside) + bloxdRenderOffset();\n}\n" : "fn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\treturn vec3i(floor(bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0))) + bloxdRenderOffset();\n}\n", xk = null !== Mk && void 0 !== Mk ? Mk : Yb(ik), nk = function(kk, ik) {
        let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return `${(0,Ve.A)()}${Xi(ek,ik)}${Dk}${gi(kk)}${zi}${Kk}${ek.code}`
      };
      let {
        vertex: Uk,
        fragment: Hk
      } = kk;
      const wk = Ni(fk, Pk);
      if (wk) {
        const kk = Mb(ek, ik, "vertex") ? `\tbloxdSpCell = ${mb};\n` : "";
        Uk = db(Uk, eb, `${kk}${wk.slice(1)}${eb}`, "vertex")
      }
      const lk = `${Bi(ek,Sk,function(kk,ek){return ek.TWOSIDEDLIGHTING?kk:`select(-(${kk}), ${kk}, fragmentInputs.frontFacing)`}(Pk.normal,rk),Pk.flags)}${Ri(fk,ek.strict,ek.program,xk,Pk)}`;
      lk && (Hk = db(Hk, ib, `${lk.slice(1)}${ib}`, "surface")), Sk && ek.sunShadow && !rk.TWOSIDEDLIGHTING && (Hk = db(Hk, Vb, `${Vb}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
      const pk = eD(fk);
      if (pk) {
        const kk = kD(fk, Ab(rk), !0, Pk);
        Hk = db(Hk, Db, `${kk}${pk.slice(1)}${Db}`, "light")
      }
      const yk = Lb(ek, ik) ? oi : "";
      return {
        ...kk,
        vertex: Fb(Uk, nk(Mk, !1, yk)),
        fragment: Fb(Hk, nk(xk, Sk))
      }
    }
    const qb = {
      name: "earthSky",
      uniqueId: -1
    };
    class Ib {
      constructor(kk) {
        this.resources = kk, this.instances = new Map, this.vertexCode = [], this.fragmentCode = [], this.pluginUniforms = [], this.codeKey = "", this.codeVersion = -1
      }
      release() {
        for (const kk of this.instances.values()) kk.released = !0, this.resources.destroyBuffer(kk.buffer);
        this.instances.clear()
      }
    }

    function zb(kk) {
      return kk.failed && null !== kk.packGroup
    }
    class Qb {
      constructor(kk, ek, ik) {
        this.device = kk, this.resources = ek, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.j_ = new vS, this.modelMeshes = new zS, this.thinBundle = void 0, this.binder = new Jf, this.sceneLayout = void 0, this.frameLayout = void 0, this.frameUniforms = new Float32Array(108), this.frameBuffer = void 0, this.meshSlots = void 0, this.zeroBuffer = void 0, this.programs = new Map, this.earthSkyProgram = null, this.earthSkyUniforms = null, this.earthSkyFrom = null, this.drawDefines = void 0, this.modelUniforms = new YS((kk => this.modelSlot(kk).instances.values())), this.vertexLayouts = void 0, this.inputs = new WeakMap, this.unbuildable = new Set, this.linePrograms = new Map, this.materials = new WeakMap, this.pipelines = new Map, this.compiling = 0, this.warnOnce = (0, Me.d)("Lite: "), this.renderStates = new HS(this.warnOnce), this.nextProgramId = 0, this.frame = 0, this.packInputs = null, this.sunShadow = null, this.caster = {}, this.casterWorlds = new Float32Array(0), this.view = void 0, this.steadyPhase = 0, this.keepSteadyBase = (kk, ek) => this.keepSteady(kk, ek), this.lists = new kS(this.modelMeshes, this.j_, this, this.warnOnce), this.slotCount = 0, this.drawDefines = new KS(ek, this.warnOnce, ((kk, ek, ik) => this.programWithModel(kk, ek, ik)), zb), this.vertexLayouts = new jS(ek, kk.limits, this.warnOnce), this.sceneLayout = ie(kk), this.frameLayout = kk.createBindGroupLayout({
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
        }), this.meshSlots = new VS(kk, this.frameLayout, this.frameBuffer, "meshes-per-draw"), this.zeroBuffer = kk.createBuffer({
          label: "meshes-zero-attribute",
          size: 16,
          usage: GPUBufferUsage.VERTEX
        }), this.thinBundle = new aS(kk, new VS(kk, this.frameLayout, this.frameBuffer, "thin-bases-slots"), {
          pipelineFor: (kk, ek, ik) => this.pipelineFor(kk, ek, ik),
          pipelineCompiling: (kk, ek) => !kk.program.failed && !1 !== this.pipelines.get(`${kk.pipelineKey}|${ek}`),
          sceneGroup: kk => {
            const ek = ik(kk);
            return ek || this.warnOnce("scene-group", "no render task draws to this target: thin bases are drawn without a bundle"), ek
          }
        }), ek.onDestroy = kk => {
          this.thinBundle.resourceDestroyed(kk)
        }, this.skyLastRenderable = this.renderable(1e3, !1, this.lists.skyDraws), this.opaqueRenderable = this.renderable(150, !1, this.lists.opaqueDraws, this.thinBundle), this.transparentRenderable = this.renderable(300, !0, this.lists.transparentDraws), this.frontRenderable = this.renderable(400, !0, this.lists.frontDraws)
      }
      renderable(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const fk = {
          order: kk,
          isTransparent: ek,
          _direct: !ek,
          bind: (kk, ek) => this.createBinding(fk, ek, ik, Dk)
        };
        return fk
      }
      get pipelinesCompiling() {
        return this.compiling
      }
      prepare(kk, ek, ik) {
        var Dk;
        let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this.frame++, this.view = ek, this.drawDefines.view = ek, this.thinBundle.AY(), this.writeFrameUniforms();
        const Sk = null !== (Dk = null === fk || void 0 === fk ? void 0 : fk.defineFor("model")) && void 0 !== Dk ? Dk : 0;
        this.drawDefines.modelPackVariant = Sk, fk && 0 !== Sk && (this.packInputs ??= new gS(this.device, fk.textureLayers(), this.sunShadow), this.packInputs.write(fk, ek.eye, fk.ew())), this.lists.clear(), this.slotCount = 0;
        const bk = kk.activeCamera;
        this.j_.select(bk, this.keepSteadyBase), this.modelMeshes.select(bk, ek), ik && this.pushEarthSky(ik), this.lists.collect(kk), this.thinBundle.VY(), this.uploadMeshSlots()
      }
      pushDraws(kk, ek, ik, Dk, fk, Sk) {
        let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const rk = Sk.length;
        for (let Pk = 0; Pk < ik; Pk++) {
          const ik = ek[Pk];
          let rk = this.retainedDraw(kk, ik, Dk, fk);
          if (void 0 === rk && (rk = this.drawFor(kk, ik, Dk, fk), this.retain(ik, rk)), rk) {
            const kk = ik.owner,
              ek = bk ? bk[Pk] : -1;
            rk.slotOffset = ek < 0 ? this.writeMeshSlot(kk.getWorldMatrix().m, kk.visibility) : this.writeMeshSlot(this.modelMeshes.worlds, this.modelMeshes.visibility[ek], 16 * ek), Sk.push(rk)
          }
        }
        return Sk.length - rk
      }
      bundleDraws(kk, ek, ik) {
        let Dk = 0;
        for (const fk of ek) {
          let ek = this.retainedDraw(kk, fk, ik, !1);
          const Sk = void 0 !== ek;
          if (void 0 === ek && (ek = this.drawFor(kk, fk, ik, !1), this.retain(fk, ek)), ek) {
            const kk = fk.owner,
              ik = this.thinBundle.add(fk, ek, kk.getWorldMatrix().m, kk.visibility);
            Sk && this.steadyFrom(fk, ek, ik), Dk++
          }
        }
        return Dk
      }
      steadyFrom(kk, ek, ik) {
        const Dk = kk.owner,
          fk = this.j_.base(Dk),
          Sk = Dk.material,
          {
            drawState: bk,
            instance: rk
          } = ek.inputs.retained;
        if (!fk || !Sk || 1 !== kk.parts.materials.length || uS(kk) !== Sk) return;
        const Pk = fk.steady ??= {
          unit: kk,
          material: Sk,
          visibility: 1,
          draw: ek,
          record: ik,
          drawState: bk,
          instance: rk,
          bindGroup: null,
          gpuVersion: -1,
          fitInstances: 0,
          worldFlag: -1,
          handedFrame: -1,
          phase: this.steadyPhase++ % 8
        };
        Pk.unit = kk, Pk.material = Sk, Pk.visibility = Dk.visibility, Pk.draw = ek, Pk.record = ik, Pk.drawState = bk, Pk.instance = rk, Pk.bindGroup = rk.bindGroup, Pk.gpuVersion = this.resources.gpuBuffersVersion, Pk.fitInstances = ek.inputs.fitInstances, Pk.worldFlag = Dk.getWorldMatrix().updateFlag, Pk.handedFrame = this.frame
      }
      keepSteady(kk, ek) {
        const ik = kk.steady;
        if (ik.handedFrame !== this.frame - 1 || (this.frame + ik.phase) % 8 === 0) return !1;
        const Dk = kk.mesh,
          {
            unit: fk,
            draw: Sk,
            instance: bk,
            drawState: rk
          } = ik,
          Pk = Dk.forcedInstanceCount || Dk.h_;
        if (!Dk.isVisible || Dk.hDk || Dk.visibility !== ik.visibility || 0 === (Dk.layerMask & ek.layerMask) || Dk.material !== ik.material || 0 !== Dk.renderingGroupId || Dk.hasVertexAlpha || !this.drawDefines.definesHold(rk, fk, rk.instancing) || ik.gpuVersion !== this.resources.gpuBuffersVersion || !this.inputsStamped(Sk.inputs, fk, rk.instancing, Sk.program) || Sk.program.failed || bk.released || Pk <= 0 || Pk > ik.fitInstances) return !1;
        if (bk.frame !== this.frame && this.bindMaterial(bk, this.modelUniforms.refreshModelUniforms(Dk.XF(), bk, bk.model, this.view)), !bk.bindable || bk.bindGroup !== ik.bindGroup) return !1;
        const mk = Dk.computeWorldMatrix(),
          Mk = mk.updateFlag !== ik.worldFlag;
        return ik.worldFlag = mk.updateFlag, Sk.instances = Pk, this.thinBundle.addAgain(ik.record, Sk, Mk ? mk.m : null, ik.visibility), ik.handedFrame = this.frame, this.j_.drawn++, !0
      }
      retainedDraw(kk, ek, ik, Dk) {
        const fk = this.inputs.get(ek),
          Sk = null === fk || void 0 === fk ? void 0 : fk.retained;
        if (!fk || !Sk) return;
        const {
          drawState: bk,
          program: rk,
          instance: Pk,
          instancing: mk
        } = Sk, Mk = ek.owner;
        if (SS(Mk) !== mk) return;
        const Kk = this.instanceCount(Mk, mk);
        if (Kk <= 0) return null;
        if (Pk.released || rk.failed || bk.program !== rk || !this.drawDefines.programCurrent(bk, ek, mk, ik) || !this.inputsStamped(fk, ek, mk, rk) || Mk.isUnIndexed !== Sk.unIndexed || this.indexKey(ek) !== Sk.indexData) return;
        if (Sk.indexBuffer && Sk.gpuVersion !== this.resources.gpuBuffersVersion) {
          const kk = this.resources.gpuBuffer(Sk.indexData);
          if (!kk) return;
          Sk.indexBuffer = kk, Sk.gpuVersion = this.resources.gpuBuffersVersion
        }
        let xk = !1;
        if (Pk.frame !== this.frame && (xk = this.modelUniforms.refreshModelUniforms(kk, Pk, Pk.model, this.view)), !this.bindMaterial(Pk, xk) || !this.withGpuBuffers(fk) || !this.instanceBuffersFit(Mk.name, fk, Kk)) return null;
        const nk = this.makeDraw(rk, fk, this.renderStates.renderState(bk.model, Mk, Dk, fk.state), Pk, Kk);
        return this.setRange(nk, ek, Sk.indexBuffer, Sk.indexData), nk
      }
      retain(kk, ek) {
        const ik = this.drawDefines.drawStates.get(kk);
        if (!ek || !ik || ik.program !== ek.program) {
          const ek = this.inputs.get(kk);
          return void(ek && (ek.retained = null))
        }
        const Dk = kk.owner,
          fk = ik.instancing,
          Sk = this.indexKey(kk),
          bk = ek.inputs.retained;
        bk ? (bk.drawState = ik, bk.instancing = fk, bk.program = ek.program, bk.instance = ek.material, bk.indexData = Sk, bk.unIndexed = Dk.isUnIndexed, bk.indexBuffer = ek.indexBuffer, bk.gpuVersion = this.resources.gpuBuffersVersion) : ek.inputs.retained = {
          drawState: ik,
          instancing: fk,
          program: ek.program,
          instance: ek.material,
          indexData: Sk,
          unIndexed: Dk.isUnIndexed,
          indexBuffer: ek.indexBuffer,
          gpuVersion: this.resources.gpuBuffersVersion
        }
      }
      drawFor(kk, ek, ik, Dk) {
        const fk = ek.owner,
          Sk = uS(ek);
        if (!Sk) return null;
        const bk = Sk.getClassName();
        let rk = null;
        if (function(kk) {
            return "LinesMesh" === kk.getClassName()
          }(fk)) {
          if (! function(kk) {
              return "ShaderMaterial" === kk.getClassName() && "color" === kk.shaderPath
            }(Sk)) return this.warnOnce(`lines:${bk}`, `A LinesMesh with a ${bk} is not drawn yet (${Sk.name})`), null;
          rk = fk
        } else if ("StandardMaterial" !== bk && "LiteMaterial" !== bk) return this.warnOnce(`class:${bk}`, `${bk} is not drawn yet (${Sk.name})`), null;
        const Pk = SS(fk),
          mk = this.instanceCount(fk, Pk);
        if (mk <= 0) return null;
        const Mk = rk ? this.lineProgramFor(fk, ik, Pk) : this.drawDefines.programFor(kk, ek, Sk, ik, Pk);
        if (!Mk || Mk.failed) return null;
        const Kk = rk ? null : this.drawDefines.drawStates.get(ek).model,
          xk = Kk ? this.modelInstance(Kk, Mk) : this.materialInstance(fk, Mk);
        let nk = !1;
        if (xk.frame !== this.frame && (rk ? pk(xk.ubo, rk) : nk = this.modelUniforms.refreshModelUniforms(kk, xk, xk.model, this.view)), !this.bindMaterial(xk, nk)) return null;
        const Uk = this.meshInputs(ek, Mk, Pk);
        if (!Uk || !this.instanceBuffersFit(fk.name, Uk, mk)) return null;
        const Hk = this.indexKey(ek);
        let wk = null;
        if (Hk && !fk.isUnIndexed && (wk = this.resources.gpuBuffer(Hk), !wk)) return null;
        const lk = this.renderStates.renderState(null !== Kk && void 0 !== Kk ? Kk : Sk, fk, Dk, Uk.state, rk ? "line-list" : "triangle-list"),
          yk = this.makeDraw(Mk, Uk, lk, xk, mk);
        return this.setRange(yk, ek, wk, Hk), yk
      }
      indexKey(kk) {
        const ek = mS(kk);
        return ek ? this.resources.modelIndex(ek) : null
      }
      setRange(kk, ek, ik, Dk) {
        ik && (kk.indexBuffer = ik, kk.indexFormat = this.resources.indexFormat(Dk));
        const fk = 4 * ek.range + (ik ? 0 : 2);
        kk.unit = ek, kk.first = ek.parts.lw[fk], kk.count = ek.parts.lw[fk + 1]
      }
      makeDraw(kk, ek, ik, Dk, fk) {
        ek.state !== ik && (ek.state = ik, ek.pipelineKey = `${kk.id}|${ek.layout.key}|${ik.key}`, ek.pipeline = null);
        const Sk = ek.draw ??= {
          program: kk,
          inputs: ek,
          pipelineKey: "",
          layout: ek.layout,
          state: ik,
          material: Dk,
          slotOffset: 0,
          vertexBuffers: ek.buffers,
          vertexOffsets: ek.offsets,
          indexBuffer: null,
          indexFormat: "uint16",
          first: 0,
          count: 0,
          instances: fk,
          unit: null
        };
        return Sk.program = kk, Sk.pipelineKey = ek.pipelineKey, Sk.state = ik, Sk.material = Dk, Sk.vertexOffsets = ek.offsets, Sk.indexBuffer = null, Sk.instances = fk, Sk
      }
      instanceCount(kk, ek) {
        switch (ek) {
          case "thin":
            return kk.forcedInstanceCount || kk.h_;
          case "instanced":
            return this.prepareInstances(kk);
          case "none":
            return 1
        }
      }
      prepareInstances(kk) {
        const ek = function(kk, ek) {
          const ik = ek._userInstancedBuffersStorage,
            Dk = kk.batchUploads.get(ek);
          if (Dk) {
            var fk;
            if (Dk.layout === (null !== (fk = null === ik || void 0 === ik ? void 0 : ik.interleavedKinds) && void 0 !== fk ? fk : null)) return Dk;
            Dk.release()
          }
          return new Zk(kk, ek, ik)
        }(this.resources, kk);
        return ek.frame !== this.frame && ek.pack(kk, this.modelMeshes.instanceBatch(kk), this.modelMeshes.worlds, this.frame), ek.count
      }
      programWithModel(kk, ek, ik) {
        const Dk = this.modelSlot(kk),
          fk = xS(Dk, kk, ik),
          Sk = this.drawDefines.modelPackKind(kk),
          bk = Sk ? function(kk, ek, ik, Dk) {
            const fk = (0, sk.w)(kk, Ak.j.name),
              Sk = [];
            for (const {
                feature: Pk,
                state: mk,
                active: Mk
              }
              of kk.features) {
              var bk, rk;
              const kk = Mk ? null === (bk = (rk = (0, Ke.g)(Pk)).AU) || void 0 === bk ? void 0 : bk.call(rk, mk) : void 0;
              kk && Sk.push(kk)
            }
            return {
              kind: ek,
              atlas: null !== fk && void 0 !== fk && fk.active ? (0, Ak.e)(fk.state) : null,
              defines: ik,
              ...xb(Sk, Dk)
            }
          }(kk, Sk, ek, Dk.fragmentCode) : null;
        if (bk && function(kk) {
            const ek = kk.defines;
            return (null === kk.atlas || !!ek.DIFFUSE && 1 === ek.DIFFUSEDIRECTUV) && !!ek.NORMAL && !ek.REFLECTION && !ek.EMISSIVEASILLUMINATION && !ek.LINKEMISSIVEWITHDIFFUSE
          }(bk)) {
          const ik = this.modelPackProgram(kk, ek, `${fk}#${Sk}#sp${this.drawDefines.modelPackVariant}`, Dk, bk);
          if (ik && !ik.failed) return ik
        }
        const rk = this.programs.get(fk);
        if (rk || this.unbuildable.has(fk)) return null !== rk && void 0 !== rk ? rk : null;
        let Pk;
        try {
          Pk = Kf({
            defines: rS(ek),
            vertexCode: Dk.vertexCode,
            fragmentCode: Dk.fragmentCode,
            pluginUniforms: Dk.pluginUniforms
          })
        } catch (mk) {
          return this.unbuildable.add(fk), this.warnOnce(`build:${fk}`, `could not build a program for ${kk.name}: ${String(mk)}`), null
        }
        return this.createProgram(fk, Pk, "standard")
      }
      modelPackProgram(kk, ek, ik, Dk, fk) {
        const Sk = this.programs.get(ik);
        if (Sk || this.unbuildable.has(ik)) return null !== Sk && void 0 !== Sk ? Sk : null;
        const bk = this.drawDefines.modelPackVariant;
        let rk;
        try {
          const kk = function(kk) {
              return (0, Fe.d)(kk, "model")
            }(bk),
            ik = sb(kk, fk, Dk.vertexCode, Dk.fragmentCode);
          rk = ub(Kf({
            defines: rS(ek),
            ...ik,
            pluginUniforms: Dk.pluginUniforms
          }), kk, fk, !!this.sunShadow)
        } catch (Mk) {
          return this.unbuildable.add(ik), this.warnOnce(`build:${ik}`, `could not build a shader pack program for ${kk.name}, which draws without the pack: ${String(Mk)}`), null
        }
        const Pk = ZS(bk, !!this.sunShadow),
          mk = {
            group: this.packInputs.bindGroupFor(null, Pk),
            layout: TS(this.device, {
              depth: !1,
              sunShadow: Pk
            })
          };
        return this.createProgram(ik, rk, function(kk) {
          return `standard-sp${kk}`
        }(bk), mk)
      }
      lineProgramFor(kk, ek, ik) {
        const Dk = lk(kk, ik, ek, this.view);
        let fk = this.linePrograms.get(Dk);
        var Sk;
        return fk || (fk = this.createProgram(`lines#${Dk}`, (Sk = function(kk) {
          const ek = new Map;
          for (let ik = 0; ik < mk.length; ik++) kk & 1 << ik && ek.set(mk[ik], !0);
          return ek
        }(Dk), Hf({
          defines: Sk,
          vertex: nf,
          fragment: Uf,
          members: [],
          structName: "MaterialUniforms"
        })), "color"), this.linePrograms.set(Dk, fk)), fk
      }
      createProgram(kk, ek, ik) {
        var Dk;
        let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Sk = this.nextProgramId++,
          bk = `${ik}-${Sk}`,
          rk = GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
          Pk = [{
            binding: 0,
            visibility: rk,
            buffer: {
              type: "uniform"
            }
          }];
        for (const Kk of ek.textures) Pk.push({
          binding: Kk.binding,
          visibility: rk,
          texture: {
            viewDimension: Kk.dimension
          }
        }), Pk.push({
          binding: Kk.samplerBinding,
          visibility: rk,
          sampler: {}
        });
        const mk = this.device.createBindGroupLayout({
            label: bk,
            entries: Pk
          }),
          Mk = {
            key: kk,
            id: Sk,
            kind: ik,
            program: ek,
            vertex: this.device.createShaderModule({
              label: `${bk}-vertex`,
              code: ek.vertex
            }),
            fragment: this.device.createShaderModule({
              label: `${bk}-fragment`,
              code: ek.fragment
            }),
            materialLayout: mk,
            pipelineLayout: this.device.createPipelineLayout({
              label: bk,
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, mk, ...fk ? [fk.layout] : []]
            }),
            packGroup: null !== (Dk = null === fk || void 0 === fk ? void 0 : fk.group) && void 0 !== Dk ? Dk : null,
            failed: !1
          };
        return this.programs.set(kk, Mk), Mk
      }
      writeFrameUniforms() {
        const kk = this.frameUniforms;
        yS(this.view, kk), this.device.queue.writeBuffer(this.frameBuffer, 0, kk)
      }
      materialInstance(kk, ek) {
        let ik = this.materials.get(kk);
        if (!ik) {
          const ek = new Map;
          this.materials.set(kk, ek), kk.ZF.addOnce((() => {
            for (const kk of ek.values()) kk.released = !0, this.resources.destroyBuffer(kk.buffer);
            this.materials.delete(kk)
          })), ik = ek
        }
        let Dk = ik.get(ek.key);
        return Dk || (Dk = this.newMaterialInstance(kk, null, ek), ik.set(ek.key, Dk)), Dk
      }
      modelInstance(kk, ek) {
        const ik = this.modelSlot(kk);
        let Dk = ik.instances.get(ek.key);
        return Dk || (Dk = this.newMaterialInstance(kk, kk, ek), ik.instances.set(ek.key, Dk)), Dk
      }
      modelSlot(kk) {
        let ek = kk.gpu[Vk.c.lite];
        return ek || (ek = new Ib(this.resources), kk.gpu[Vk.c.lite] = ek), ek
      }
      newMaterialInstance(kk, ek, ik) {
        const Dk = ik.program.material.floats,
          fk = new Float32Array(Dk),
          Sk = new Map;
        return {
          owner: kk,
          model: ek,
          program: ik,
          data: fk,
          uploaded: new Float32Array(Dk).fill(Number.NaN),
          buffer: this.device.createBuffer({
            label: `${kk.name}-uniforms`,
            size: Math.max(16, 4 * Dk),
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          textures: Sk,
          ubo: new pS(ik.program.material.slots, fk, Sk),
          bindGroup: null,
          bound: new Array(2 * ik.program.textures.length).fill(null),
          frame: -1,
          bindable: !1,
          released: !1,
          heldVersion: -1
        }
      }
      pushEarthSky(kk) {
        var ek;
        const ik = this.earthSkyProgram ??= this.createProgram("earthSky", {
            vertex: Yf + Lf,
            fragment: Yf + Cf,
            attributes: [],
            material: yf,
            textures: []
          }, "earthSky"),
          Dk = this.earthSkyUniforms ??= this.newMaterialInstance(qb, null, ik);
        this.earthSkyFrom !== kk && (this.earthSkyFrom = kk, Dk.data.fill(0)), qf(Dk.ubo, kk, this.view);
        const fk = this.vertexInputs(ik, qb, "earthSky", ik, null);
        if (ik.failed || !fk || !this.bindMaterial(Dk, !1)) return;
        const Sk = null !== (ek = fk.state) && void 0 !== ek ? ek : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
          bk = this.makeDraw(ik, fk, Sk, Dk, 1);
        bk.count = wf.length;
        const rk = If(kk, this.view);
        bk.slotOffset = this.writeMeshSlot(rk, 1), this.lists.skyDraws.push(bk)
      }
      uploadIfChanged(kk) {
        const {
          data: ek,
          uploaded: ik
        } = kk;
        for (let Dk = 0; Dk < ek.length; Dk++)
          if (ek[Dk] !== ik[Dk]) return ik.set(ek), void this.device.queue.writeBuffer(kk.buffer, 0, ek)
      }
      bindMaterial(kk, ek) {
        return kk.frame !== this.frame && (kk.frame = this.frame, ek || this.uploadIfChanged(kk), kk.bindable = this.bindTextures(kk)), kk.bindable
      }
      bindTextures(kk) {
        const {
          program: ek,
          bound: ik
        } = kk, Dk = ek.program.textures;
        let fk = !kk.bindGroup,
          Sk = !0;
        for (let bk = 0; bk < Dk.length; bk++) {
          const ek = kk.textures.get(Dk[bk].name),
            rk = ek ? this.resources.boundTexture(ek) : null;
          rk ? ik[2 * bk] === rk.view && ik[2 * bk + 1] === rk.sampler || (ik[2 * bk] = rk.view, ik[2 * bk + 1] = rk.sampler, fk = !0) : (ek || kk.ubo.expected.has(Dk[bk].name) || this.warnOnce(`texture:${kk.owner.name}:${Dk[bk].name}`, `${kk.owner.name} has no ${Dk[bk].name}`), Sk = !1)
        }
        if (!Sk) return fk && (kk.bindGroup = null), !1;
        if (fk) {
          const fk = [{
            binding: 0,
            resource: {
              buffer: kk.buffer
            }
          }];
          for (let kk = 0; kk < Dk.length; kk++) fk.push({
            binding: Dk[kk].binding,
            resource: ik[2 * kk]
          }), fk.push({
            binding: Dk[kk].samplerBinding,
            resource: ik[2 * kk + 1]
          });
          kk.bindGroup = this.device.createBindGroup({
            label: `${kk.owner.name}-material`,
            layout: ek.materialLayout,
            entries: fk
          })
        }
        return !0
      }
      writeMeshSlot(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return this.meshSlots.ensure(this.slotCount + 1), this.meshSlots.write(this.slotCount, kk, ek, ik), this.slotCount++ * cD
      }
      uploadMeshSlots() {
        this.slotCount > 0 && this.meshSlots.upload(0, this.slotCount)
      }
      vertexInputs(kk, ek, ik, Dk, fk) {
        let Sk = this.inputs.get(kk);
        if (!Sk || Sk.program !== Dk || !sS(ek, Sk, this.resources, fk)) {
          var bk;
          if (Sk = null !== (bk = this.vertexLayouts.resolveInputs(ek, ik, Dk, fk)) && void 0 !== bk ? bk : void 0, !Sk) return null;
          this.inputs.set(kk, Sk)
        }
        return this.withGpuBuffers(Sk)
      }
      meshInputs(kk, ek, ik) {
        const Dk = this.inputs.get(kk);
        if (Dk && this.inputsStamped(Dk, kk, ik, ek)) return this.withGpuBuffers(Dk);
        const fk = kk.owner,
          Sk = mS(kk),
          bk = this.vertexInputs(kk, fk, fk.name, ek, Sk);
        return bk && (bk.geometry = MS(kk), bk.instanceLayout = this.drawDefines.instanceLayout(fk, ik)), bk
      }
      inputsStamped(kk, ek, ik, Dk) {
        return function(kk, ek, ik, Dk) {
          return kk.program === ik && kk.geometry === MS(ek) && kk.instanceLayout === Dk
        }(kk, ek, Dk, this.drawDefines.instanceLayout(ek.owner, ik))
      }
      withGpuBuffers(kk) {
        return GS(kk, this.resources, this.zeroBuffer) ? kk : null
      }
      instanceBuffersFit(kk, ek, ik) {
        const Dk = RS(ek, ik, this.resources, this.zeroBuffer);
        if (Dk) {
          const fk = ek.ends[Dk.index] - ek.offsets[Dk.index] + ek.Q_[Dk.index];
          return this.warnOnce(`overrun:${kk}`, `${kk} draws ${ik} instances from a ${fk}-byte buffer (${Dk.needed} needed)`), !1
        }
        return !0
      }
      createBinding(kk, ek, ik, Dk) {
        const fk = `${ek._colorFormat}|${ek._depthStencilFormat}|${ek._depthCompare}|${ek._sampleCount}`,
          Sk = re(this.device, ek);
        if (kk === this.skyLastRenderable) {
          let ik = null;
          return {
            renderable: kk,
            pipeline: Sk,
            draw: kk => ik ? this.drawSky(kk, ek, fk, ik) : 0,
            update: kk => {
              ik = kk
            }
          }
        }
        return {
          renderable: kk,
          pipeline: Sk,
          draw: kk => (Dk ? Dk.execute(kk, ek, fk) : 0) + this.drawList(kk, ek, fk, ik)
        }
      }
      drawSky(kk, ek, ik, Dk) {
        const fk = this.lists.skyDraws,
          Sk = fk.length > 0;
        if (Sk) {
          var bk;
          const ik = (null !== (bk = ek._depthCompare) && void 0 !== bk ? bk : De).startsWith("greater") ? 0 : 1;
          kk.setViewport(0, 0, Dk.targetWidth, Dk.targetHeight, ik, ik)
        }
        const rk = this.drawList(kk, ek, ik, fk);
        return Sk && kk.setViewport(0, 0, Dk.targetWidth, Dk.targetHeight, 0, 1), rk
      }
      drawList(kk, ek, ik, Dk) {
        let fk = 0;
        const Sk = this.binder;
        Sk.reset();
        for (const bk of Dk) {
          const Dk = this.pipelineFor(bk, ek, ik);
          Dk && (Sk.bind(kk, bk, Dk, this.meshSlots.bindGroup, bk.slotOffset), bk.indexBuffer ? kk.drawIndexed(bk.count, bk.instances, bk.first, 0, 0) : kk.draw(bk.count, bk.instances, bk.first, 0), fk++)
        }
        return fk
      }
      pipelineFor(kk, ek, ik) {
        var Dk, fk;
        if (kk.program.failed) return null;
        const Sk = kk.inputs;
        if (Sk.pipeline && Sk.pipelineTarget === ik) return Sk.pipeline;
        const bk = `${kk.pipelineKey}|${ik}`,
          rk = this.pipelines.get(bk);
        if (void 0 !== rk) return rk && (Sk.pipeline = rk, Sk.pipelineTarget = ik), rk || null;
        this.pipelines.set(bk, null);
        const {
          program: Pk,
          layout: mk,
          state: Mk
        } = kk, Kk = {
          label: `standard-${Pk.id}`,
          layout: Pk.pipelineLayout,
          vertex: {
            module: Pk.vertex,
            entryPoint: "main",
            buffers: mk.buffers
          },
          fragment: Rk({
            module: Pk.fragment,
            entryPoint: "main"
          }, ek, Mk.blend, Mk.colourWrite),
          depthStencil: ek._depthStencilFormat ? {
            format: ek._depthStencilFormat,
            depthCompare: null !== (Dk = null !== (fk = Mk.depthCompare) && void 0 !== fk ? fk : ek._depthCompare) && void 0 !== Dk ? Dk : De,
            depthWriteEnabled: Mk.depthWrite,
            depthBias: Mk.depthBias,
            depthBiasSlopeScale: Mk.depthBiasSlopeScale
          } : void 0,
          multisample: {
            count: ek._sampleCount
          },
          primitive: {
            topology: Mk.topology,
            frontFace: Mk.frontFace,
            cullMode: Mk.cullMode
          }
        };
        return this.compiling++, this.device.createRenderPipelineAsync(Kk).then((kk => {
          this.compiling--, this.pipelines.set(bk, kk)
        }), (kk => {
          this.compiling--, this.reportFailure(Pk, bk, kk)
        })), null
      }
      forEachSunShadowCaster(kk) {
        const ek = this.caster,
          ik = (ik, Dk, fk) => {
            const Sk = ik.unit && function(kk) {
              const ek = kk.material.model;
              return null !== ek && (ek.lifeform || ek.item) && ek.castsSunShadow && "triangle-list" === kk.state.topology
            }(ik) ? mS(ik.unit) : null;
            if (!Sk) return;
            const bk = ik.unit.owner;
            switch (ek.geometry = Sk, ek.skip = bk.noSunShadowVertices, ek.indexed = null !== ik.indexBuffer, ek.first = ik.first, ek.count = ik.count, ek.Ux = Dk, ek.worldAt = fk, ek.instances = null, ek.instanceCount = 1, ek.thin = !1, SS(bk)) {
              case "thin": {
                const kk = bk._thinInstanceDataStorage.matrixData;
                if (!kk) return;
                ek.instances = kk, ek.instanceCount = Math.min(ik.instances, kk.length / 16), ek.thin = !0;
                break
              }
              case "instanced": {
                const kk = this.resources.batchUploads.get(bk);
                if (!kk || kk.frame !== this.frame || !this.writeBatchCasters(kk)) return;
                break
              }
            }
            kk(ek)
          };
        for (const Dk of this.lists.opaqueDraws) ik(Dk, this.meshSlots.data, Dk.slotOffset / 4);
        this.thinBundle.forEachDrawn(ik)
      }
      writeBatchCasters(kk) {
        const {
          caster: ek
        } = this, ik = kk.packedMatrices, Dk = kk.count;
        ek.instances = ik, ek.instanceCount = Dk;
        let fk = -1;
        for (let Sk = 0; Sk < Dk; Sk++) {
          const ek = vb(kk.packedRowMesh(Sk));
          ek && fk < 0 ? (this.casterWorlds.length < 16 * Dk && (this.casterWorlds = new Float32Array(ik.length)), this.casterWorlds.set(ik.subarray(0, 16 * Sk)), fk = Sk) : !ek && fk >= 0 && (this.casterWorlds.set(ik.subarray(16 * Sk, 16 * Sk + 16), 16 * fk), fk++)
        }
        return fk >= 0 && (ek.instances = this.casterWorlds, ek.instanceCount = fk), ek.instanceCount > 0
      }
      async reportFailure(kk, ek, ik) {
        const Dk = [];
        let fk = !0;
        for (const [Sk, bk] of [
            ["vertex", kk.vertex],
            ["fragment", kk.fragment]
          ]) {
          const kk = await bk.getCompilationInfo();
          for (const ek of kk.messages) fk &&= "error" !== ek.type, Dk.push(`${Sk}:${ek.lineNum}:${ek.linePos} ${ek.type}: ${ek.message}`)
        }
        if (fk && !kk.packGroup) return this.pipelines.set(ek, !1), console.error(`Lite: pipeline ${ek} failed`, ik), void Rf("mesh", kk.kind, ik);
        kk.failed || (kk.failed = !0, console.error(`Lite: program ${kk.id} failed`, ik, Dk.join("\n"), {
          program: kk.program,
          key: kk.key
        }), Rf("mesh", kk.kind, ik, fk ? null : Dk[0]))
      }
    }

    function vb(kk) {
      var ek, ik;
      const Dk = null === (ek = kk.Iq) || void 0 === ek || null === (ik = ek.aShaderPackItem) || void 0 === ik ? void 0 : ik.x;
      return void 0 !== Dk && 0 !== (Dk & me.h)
    }
    var Eb = ik(41266),
      hb = ik(41275),
      ab = ik(41284),
      Wb = ik(41215);
    const tb = [0, 3, 1, 4, 2, 5];

    function Xb(kk, ek, ik, Dk, fk) {
      const Sk = ik[0].width;
      try {
        return fk ? function(kk, ek, ik) {
          const Dk = (0, Wb.b)(kk, ik, ik, 6);
          for (let fk = 0; fk < 6; fk++)(0, Wb.d)(kk, Dk, fk, ek[tb[fk]], {
            invertY: !1
          });
          return Dk.texture
        }(kk, ik, Sk) : function(kk, ek, ik, Dk) {
          const fk = kk.createTexture({
            label: "sink-cube",
            size: {
              width: ik,
              height: ik,
              depthOrArrayLayers: 6
            },
            format: Dk,
            usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
          });
          for (let Sk = 0; Sk < 6; Sk++) kk.queue.copyExternalImageToTexture({
            source: ek[tb[Sk]]
          }, {
            texture: fk,
            origin: {
              x: 0,
              y: 0,
              z: Sk
            }
          }, {
            width: ik,
            height: ik
          });
          return fk
        }(ek, ik, Sk, 1 === Dk ? "r8unorm" : "rgba8unorm")
      } finally {
        Bb(ik)
      }
    }

    function Bb(kk) {
      for (const ek of null !== kk && void 0 !== kk ? kk : []) null === ek || void 0 === ek || ek.close()
    }
    async function cb(kk) {
      const ek = [],
        ik = [];
      if (await Promise.all(kk.map(((kk, Dk) => (ek[Dk] = null, kk.then((kk => {
          ek[Dk] = kk
        }), (kk => {
          ik.push(kk)
        })))))), ik.length > 0) throw Bb(ek), ik[0];
      return ek
    }
    class Tb {
      constructor(kk) {
        this.vK = kk, this.starts = [], this.lengths = [], this.used = 0, kk > 0 && (this.starts.push(0), this.lengths.push(kk))
      }
      allocate(kk) {
        const {
          starts: ek,
          lengths: ik
        } = this;
        for (let Dk = 0; Dk < ek.length; Dk++) {
          if (ik[Dk] < kk) continue;
          const fk = ek[Dk];
          return ik[Dk] === kk ? (ek.splice(Dk, 1), ik.splice(Dk, 1)) : (ek[Dk] += kk, ik[Dk] -= kk), this.used += kk, fk
        }
        return -1
      }
      free(kk, ek) {
        this.used -= ek;
        const ik = Math.min(kk + ek, this.vK);
        ik > kk && this.release(kk, ik - kk)
      }
      grow(kk) {
        const ek = this.vK;
        this.vK = kk, this.release(ek, kk - ek)
      }
      truncate(kk) {
        const {
          starts: ek,
          lengths: ik
        } = this;
        for (let Dk = ek.length - 1; Dk >= 0 && ek[Dk] + ik[Dk] > kk; Dk--) ek[Dk] >= kk ? (ek.splice(Dk, 1), ik.splice(Dk, 1)) : ik[Dk] = kk - ek[Dk];
        this.vK = kk
      }
      release(kk, ek) {
        const {
          starts: ik,
          lengths: Dk
        } = this;
        let fk = 0,
          Sk = ik.length;
        for (; fk < Sk;) {
          const ek = fk + Sk >> 1;
          ik[ek] < kk ? fk = ek + 1 : Sk = ek
        }
        const bk = fk,
          rk = bk > 0 && ik[bk - 1] + Dk[bk - 1] === kk,
          Pk = bk < ik.length && kk + ek === ik[bk];
        rk && Pk ? (Dk[bk - 1] += ek + Dk[bk], ik.splice(bk, 1), Dk.splice(bk, 1)) : rk ? Dk[bk - 1] += ek : Pk ? (ik[bk] = kk, Dk[bk] += ek) : (ik.splice(bk, 0, kk), Dk.splice(bk, 0, ek))
      }
    }
    const ob = 256;
    class Zb {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1048576;
        this.device = kk, this.onReplaced = ek, this.mergeGap = ik, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.lw = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], this.freed = [], this.holding = !0;
        const fk = Math.max(ob, Math.ceil(Dk / ob) * ob);
        this.bytes = new Uint8Array(fk), this.words = new Uint32Array(this.bytes.buffer), this.lw = new Tb(fk / ob)
      }
      get buffer() {
        return this.gpu ??= this.createGpu(this.bytes.byteLength)
      }
      static slotBytes(kk) {
        return Math.max(1, Math.ceil(kk / ob)) * ob
      }
      allocate(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk;
        const Dk = Zb.slotBytes(kk),
          fk = Dk / ob;
        let Sk = this.lw.allocate(fk);
        Sk < 0 && (this.grow(this.lw.vK + fk), Sk = this.lw.allocate(fk));
        const bk = Sk * ob;
        return this.growTo(bk + Math.max(ik, Dk)), this.gpu ??= this.createGpu(this.bytes.byteLength), this.bytes.fill(0, bk, bk + Dk), ek && this.bytes.set(new Uint8Array(ek.buffer, ek.byteOffset, Math.min(ek.byteLength, Dk)), bk), this.markDirty(bk, bk + Dk), bk
      }
      growTo(kk) {
        const ek = Math.ceil(kk / ob);
        ek > this.lw.vK && this.grow(ek)
      }
      free(kk, ek) {
        this.freed.push(kk, ek)
      }
      write(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (Dk <= 0) return;
        Dk <= 1024 && 0 === (3 & (kk | ik | Dk)) ? this.copyWords(kk >> 2, ek.buffer, ik >> 2, Dk >> 2) : this.bytes.set(new Uint8Array(ek.buffer, ik, Dk), kk);
        let Sk = kk + Dk;
        if (fk) {
          const ek = kk + 4 * Math.ceil(Dk / 4);
          this.bytes.fill(0, Sk, ek), Sk = ek
        }
        this.markDirty(kk, Sk)
      }
      copyWords(kk, ek, ik, Dk) {
        let fk = this.sourceWords.get(ek);
        fk || (fk = new Uint32Array(ek, 0, ek.byteLength >> 2), this.sourceWords.set(ek, fk));
        const Sk = this.words;
        for (let bk = 0; bk < Dk; bk++) Sk[kk + bk] = fk[ik + bk]
      }
      move(kk, ek, ik) {
        this.bytes.copyWithin(ek, kk, kk + ik), this.markDirty(ek, ek + ik)
      }
      flush() {
        for (const ek of this.retired) this.onReplaced(ek), ek.destroy();
        this.retired.length = 0;
        const kk = this.dirtyStarts.length;
        if (kk > 0) {
          const {
            dirtyStarts: ek,
            dirtyEnds: ik,
            order: Dk
          } = this;
          Dk.length = kk;
          for (let rk = 0; rk < kk; rk++) Dk[rk] = rk;
          kk > 1 && Dk.sort(((kk, ik) => ek[kk] - ek[ik]));
          const fk = this.mergeGap;
          let Sk = ek[Dk[0]],
            bk = ik[Dk[0]];
          for (let rk = 1; rk < kk; rk++) {
            const kk = Dk[rk];
            ek[kk] - bk <= fk ? bk = Math.max(bk, ik[kk]) : (this.send(Sk, bk), Sk = ek[kk], bk = ik[kk])
          }
          this.send(Sk, bk), ek.length = 0, ik.length = 0
        }
        this.holding = !1
      }
      VY() {
        this.holding = !0, this.retired.push(...this.replaced), this.replaced.length = 0;
        const kk = this.freed;
        for (let ek = 0; ek < kk.length; ek += 2) this.lw.free(kk[ek] / ob, kk[ek + 1] / ob);
        kk.length = 0
      }
      send(kk, ek) {
        this.device.queue.writeBuffer(this.gpu, kk, this.bytes.buffer, kk, ek - kk);
        for (const ik of this.replaced) {
          const Dk = Math.min(ek, ik.size);
          Dk > kk && this.device.queue.writeBuffer(ik, kk, this.bytes.buffer, kk, Dk - kk)
        }
      }
      markDirty(kk, ek) {
        kk &= -4, ek = ek + 3 & -4, this.holding ? (this.dirtyStarts.push(kk), this.dirtyEnds.push(ek)) : this.send(kk, ek)
      }
      grow(kk) {
        const ek = this.lw.vK,
          ik = Math.max(2 * ek, kk),
          Dk = new Uint8Array(ik * ob);
        Dk.set(this.bytes);
        const fk = this.gpu;
        this.gpu = this.createGpu(Dk.byteLength), this.bytes = Dk, this.words = new Uint32Array(Dk.buffer), this.lw.grow(ik), fk && (this.replaced.push(fk), this.onReplaced(fk)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ek * ob)
      }
      createGpu(kk) {
        return this.device.createBuffer({
          label: "sink-dynamic-arena",
          size: kk,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
        })
      }
    }

    function Ob(kk) {
      return Array.isArray(kk) ? new Float32Array(kk) : kk
    }

    function gb(kk, ek, ik, Dk, fk) {
      const Sk = Qf(fk),
        bk = Math.min(fk, Dk.byteLength);
      if (Sk === bk && Dk.byteOffset % 4 === 0) return void kk.queue.writeBuffer(ek, ik, Dk.buffer, Dk.byteOffset, Sk);
      const rk = new Uint8Array(Sk);
      rk.set(new Uint8Array(Dk.buffer, Dk.byteOffset, bk)), kk.queue.writeBuffer(ek, ik, rk)
    }

    function Gb(kk, ek, ik) {
      const Dk = "linear",
        fk = "nearest";
      let Sk = fk,
        bk = fk,
        rk = "nearest",
        Pk = !ek;
      switch (kk) {
        case 11:
          Sk = Dk, bk = Dk;
          break;
        case 3:
          Sk = Dk, bk = Dk, rk = ek ? "linear" : "nearest";
          break;
        case 8:
          rk = ek ? "linear" : "nearest";
          break;
        case 4:
          break;
        case 5:
          bk = Dk;
          break;
        case 6:
          bk = Dk, rk = ek ? "linear" : "nearest";
          break;
        case 7:
          bk = Dk, Pk = !0;
          break;
        case 9:
          Sk = Dk;
          break;
        case 10:
          Sk = Dk, rk = ek ? "linear" : "nearest";
          break;
        case 2:
          Sk = Dk, bk = Dk, ik > 1 ? (rk = "linear", Pk = !1) : Pk = !0;
          break;
        case 12:
          Sk = Dk, Pk = !0;
          break;
        default:
          Pk = !0
      }
      return ik > 1 && !Pk ? {
        magFilter: Dk,
        minFilter: Dk,
        mipmapFilter: "linear",
        maxAnisotropy: ik
      } : {
        magFilter: Sk,
        minFilter: bk,
        mipmapFilter: rk,
        ...Pk ? {
          lodMinClamp: 0,
          lodMaxClamp: 0
        } : {}
      }
    }

    function Nb(kk) {
      return 0 === kk ? "clamp-to-edge" : 2 === kk ? "mirror-repeat" : "repeat"
    }
    class Rb {
      constructor(kk, ek) {
        let {
          vertexArena: ik = !0
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        this.engine = kk, this.device = ek, this.buffers = new WeakMap, this.i_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.gpuBuffersVersion = 0, this.onDestroy = null, this.pending = 0, this.firstBindDecodes = 0, this.arena = void 0, this.arena = ik ? new Zb(ek, (kk => {
          var ek;
          null === (ek = this.onDestroy) || void 0 === ek || ek.call(this, kk), this.gpuBuffersVersion++
        })) : null
      }
      flushUploads() {
        var kk;
        null === (kk = this.arena) || void 0 === kk || kk.flush()
      }
      endUploadFrame() {
        var kk;
        null === (kk = this.arena) || void 0 === kk || kk.VY()
      }
      vertexBufferCreated(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ik ? "sink-dynamic-vertices" : "sink-vertices";
        this.bufferDeleted(kk);
        const fk = Ob(ek);
        kk.vK = fk.byteLength, this.buffers.set(kk, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: ik && null !== this.arena,
          pending: fk,
          ownsPending: !1,
          usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: Dk
        })
      }
      vertexBufferUpdated(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        const fk = this.buffers.get(kk);
        if (!fk) return;
        const Sk = Ob(ek),
          bk = void 0 === Dk ? Sk.byteLength : Math.min(Dk, Sk.byteLength);
        this.update(fk, Sk, ik, bk)
      }
      vertexBufferFloatsUpdated(kk, ek, ik, Dk) {
        const fk = this.buffers.get(kk);
        if (!fk) return;
        const Sk = ik * Float32Array.BYTES_PER_ELEMENT,
          bk = (Dk - ik) * Float32Array.BYTES_PER_ELEMENT;
        fk.slot >= 0 && bk > 0 && Sk + bk <= fk.size ? this.writeSlot(fk, Sk, ek, ek.byteOffset + Sk, bk, !1) : fk.gpu && bk > 0 && Sk + bk <= fk.gpu.size ? this.device.queue.writeBuffer(fk.gpu, Sk, ek.buffer, ek.byteOffset + Sk, bk) : this.update(fk, ek.subarray(ik, Dk), Sk, bk)
      }
      indexBufferCreated(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "sink-indices";
        this.bufferDeleted(kk);
        const Dk = function(kk) {
          if (kk instanceof Uint16Array || kk instanceof Uint32Array) return kk;
          for (let ek = 0; ek < kk.length; ek++)
            if (kk[ek] >= 65535) return new Uint32Array(kk);
          return new Uint16Array(kk)
        }(ek);
        kk.is32Bits = 4 === Dk.BYTES_PER_ELEMENT, kk.vK = Dk.byteLength, this.buffers.set(kk, {
          gpu: null,
          slot: -1,
          slotBytes: 0,
          size: 0,
          arena: !1,
          pending: Dk,
          ownsPending: Dk !== ek,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
          label: ik
        })
      }
      bufferDeleted(kk) {
        const ek = this.buffers.get(kk);
        null !== ek && void 0 !== ek && ek.gpu ? (this.destroyBuffer(ek.gpu), this.gpuBuffersVersion++) : ek && ek.slot >= 0 && (this.arena.free(ek.slot, ek.slotBytes), this.gpuBuffersVersion++), this.buffers.delete(kk)
      }
      update(kk, ek, ik, Dk) {
        if (kk.slot >= 0) this.updateSlot(kk, ek, ik, Dk);
        else if (kk.gpu) {
          if (ik + Qf(Dk) > kk.gpu.size) {
            const ek = this.device.createBuffer({
                label: kk.label,
                size: Qf(Math.max(2 * kk.gpu.size, ik + Dk)),
                usage: kk.usage | GPUBufferUsage.COPY_SRC
              }),
              fk = this.device.createCommandEncoder();
            fk.copyBufferToBuffer(kk.gpu, 0, ek, 0, kk.gpu.size), this.device.queue.submit([fk.finish()]), this.destroyBuffer(kk.gpu), this.gpuBuffersVersion++, kk.gpu = ek
          }
          gb(this.device, kk.gpu, ik, ek, Dk)
        } else {
          const Sk = new Uint8Array(ek.buffer, ek.byteOffset, Dk),
            bk = kk.pending;
          if (bk && kk.ownsPending && ik + Dk <= bk.byteLength) new Uint8Array(bk.buffer, bk.byteOffset, bk.byteLength).set(Sk, ik);
          else if (bk && 0 === ik && Dk === bk.byteLength && ek.byteLength === Dk) kk.pending = ek, kk.ownsPending = !1;
          else {
            var fk;
            const ek = new Uint8Array(Math.max(null !== (fk = null === bk || void 0 === bk ? void 0 : bk.byteLength) && void 0 !== fk ? fk : 0, ik + Dk));
            bk && ek.set(new Uint8Array(bk.buffer, bk.byteOffset, bk.byteLength)), ek.set(Sk, ik), kk.pending = ek, kk.ownsPending = !0
          }
        }
      }
      updateSlot(kk, ek, ik, Dk) {
        const fk = this.arena;
        ik + Qf(Dk) > kk.size && (kk.size = Qf(Math.max(2 * kk.size, ik + Dk)), fk.growTo(kk.slot + kk.size), this.gpuBuffersVersion++), 0 === Dk ? this.writeSlot(kk, ik, kr, 0, 4, !1) : this.writeSlot(kk, ik, ek, ek.byteOffset, Dk, !0)
      }
      writeSlot(kk, ek, ik, Dk, fk, Sk) {
        const bk = ek + (Sk ? Qf(fk) : fk);
        bk > kk.slotBytes && this.moveSlot(kk, bk), this.arena.write(kk.slot + ek, ik, Dk, fk, Sk)
      }
      moveSlot(kk, ek) {
        const ik = this.arena,
          Dk = Zb.slotBytes(Math.max(ek, Math.min(2 * kk.slotBytes, kk.size))),
          fk = ik.allocate(Dk, null, kk.size);
        ik.move(kk.slot, fk, kk.slotBytes), ik.free(kk.slot, kk.slotBytes), kk.slot = fk, kk.slotBytes = Dk, this.gpuBuffersVersion++
      }
      cover(kk, ek) {
        const ik = this.buffers.get(kk);
        if (!ik || ik.slot < 0) return !1;
        const Dk = Math.min(ek, ik.size);
        return !(Dk <= ik.slotBytes) && (this.moveSlot(ik, Dk), !0)
      }
      destroyBuffer(kk) {
        var ek;
        null === (ek = this.onDestroy) || void 0 === ek || ek.call(this, kk), kk.destroy()
      }
      gpuBuffer(kk) {
        const ek = this.buffers.get(kk);
        if (!ek) return null;
        if (ek.slot >= 0) return this.arena.buffer;
        if (ek.arena && ek.pending) {
          const kk = ek.pending,
            ik = this.arena;
          return ek.size = Qf(kk.byteLength), ek.slotBytes = Zb.slotBytes(function(kk) {
            const ek = new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength);
            let ik = ek.length;
            if (kk.byteOffset % 4 === 0) {
              for (; ik % 4 !== 0 && 0 === ek[ik - 1];) ik--;
              if (ik % 4 === 0) {
                const ek = new Uint32Array(kk.buffer, kk.byteOffset, ik / 4);
                let Dk = ek.length;
                for (; Dk > 0 && 0 === ek[Dk - 1];) Dk--;
                ik = 4 * Dk
              }
            }
            for (; ik > 0 && 0 === ek[ik - 1];) ik--;
            return ik
          }(kk)), ek.slot = ik.allocate(ek.slotBytes, kk, ek.size), ek.pending = null, ik.buffer
        }
        if (!ek.gpu && ek.pending) {
          const kk = ek.pending;
          ek.gpu = this.device.createBuffer({
            label: ek.label,
            size: Qf(kk.byteLength),
            usage: ek.usage
          }), gb(this.device, ek.gpu, 0, kk, kk.byteLength), ek.pending = null
        }
        return ek.gpu
      }
      gpuOffset(kk) {
        var ek, ik;
        const Dk = null !== (ek = null === (ik = this.buffers.get(kk)) || void 0 === ik ? void 0 : ik.slot) && void 0 !== ek ? ek : -1;
        return Dk < 0 ? 0 : Dk
      }
      gpuEnd(kk) {
        var ek, ik;
        const Dk = this.buffers.get(kk);
        return Dk ? Dk.slot >= 0 ? Dk.slot + Dk.size : null !== (ek = null === (ik = Dk.gpu) || void 0 === ik ? void 0 : ik.size) && void 0 !== ek ? ek : 0 : 0
      }
      vertexInput(kk, ek, ik) {
        var Dk, fk, Sk, bk;
        return null !== (Dk = null !== (fk = ik && this.modelInput(ik, ek)) && void 0 !== fk ? fk : null === (Sk = null !== (bk = this.i_.get(kk)) && void 0 !== bk ? bk : this.batchUploads.get(kk)) || void 0 === Sk ? void 0 : Sk.inputs[ek]) && void 0 !== Dk ? Dk : null
      }
      modelInput(kk, ek) {
        const ik = this.geometrySlot(kk);
        let Dk = ik.inputs.get(ek);
        if (void 0 === Dk) {
          const fk = kk.vertexAttributes.find((kk => kk.kind === ek));
          Dk = fk ? new Ok(this.modelKey(ik, fk.data, !1), fk.offset, fk.stride, fk.components, !1, fk.glType, fk.isNormalized) : null, ik.inputs.set(ek, Dk)
        }
        return Dk
      }
      modelIndex(kk) {
        return kk.indexData && this.modelKey(this.geometrySlot(kk), kk.indexData, !0)
      }
      geometrySlot(kk) {
        let ek = kk.gpu[Vk.c.lite];
        if (!ek) {
          const ik = new Map,
            Dk = () => {
              for (const kk of ik.values()) this.bufferDeleted(kk)
            },
            fk = kk => {
              const ek = ik.get(kk);
              ek && this.vertexBufferUpdated(ek, kk)
            };
          ek = {
            keys: ik,
            inputs: new Map,
            release: Dk,
            updated: fk
          }, kk.gpu[Vk.c.lite] = ek
        }
        return ek
      }
      modelKey(kk, ek, ik) {
        let Dk = kk.keys.get(ek);
        if (!Dk) {
          if (ik) {
            const kk = {
              vK: 0,
              is32Bits: !1
            };
            this.indexBufferCreated(kk, ek, "model-indices"), Dk = kk
          } else Dk = {
            vK: 0
          }, this.vertexBufferCreated(Dk, ek, !1, "model-vertices");
          kk.keys.set(ek, Dk)
        }
        return Dk
      }
      indexFormat(kk) {
        return kk.is32Bits ? "uint32" : "uint16"
      }
      get texturesLoading() {
        return this.pending
      }
      releaseSlot(kk, ek) {
        --kk.refs > 0 || (this.releaseTexture(kk), Bb(kk.images), null !== ek && this.textures.delete(ek))
      }
      load(kk, ek) {
        const ik = ek.decoded = async function(kk) {
          if ("cube" === kk.kind) return async function(kk) {
            if (6 !== kk.length) throw new Error(`${kk.length} files where six faces were expected`);
            const ek = await cb(kk.map((kk => tf(kk)))),
              ik = ek[0].width;
            return cb(ek.map((async kk => {
              if (kk.width === ik && kk.height === ik) return kk;
              try {
                return await createImageBitmap(kk, {
                  ...af,
                  resizeWidth: ik,
                  resizeHeight: ik
                })
              } finally {
                kk.close()
              }
            })))
          }(kk.files);
          if ("data" === kk.kind && kk.data) return [await createImageBitmap(new Blob([kk.data]), af)];
          return [await tf(Jb(kk))]
        }(kk.source).then((kk => {
          0 === ek.refs ? Bb(kk) : ek.images = kk
        }));
        this.track(ek, Jb(kk.source), ik, (() => {
          ek.wanted && !ek.failed && ek.refs > 0 && this.upload(kk, ek)
        }))
      }
      canvasUpdated(kk, ek, ik) {
        const {
          state: Dk
        } = this.textureSlot(kk);
        Dk.dynamicSource = {
          invertY: ek,
          premultiplied: ik
        }, Dk.dynamic && this.pushDynamic(kk.source, Dk)
      }
      async atlasArray(kk, ek, ik) {
        const Dk = await Tf(this.device, kk, ek, ik);
        if (!this.atlasBindings.has(Dk)) {
          const kk = (0, Eb.c)(this.engine, {
            magFilter: "nearest",
            minFilter: "nearest",
            mipmapFilter: "linear",
            addressModeU: "repeat",
            addressModeV: "repeat"
          });
          this.atlasBindings.set(Dk, {
            view: Dk.texture.createView({
              dimension: "2d-array"
            }),
            sampler: kk
          })
        }
        return Dk
      }
      boundTexture(kk) {
        const ek = this.atlasBindings.get(kk);
        if (ek) return ek;
        const ik = kk;
        if (ik.released) return null;
        const Dk = this.textureSlot(ik, !0),
          {
            state: fk
          } = Dk;
        if (!fk.view && (fk.wanted = !0, fk.loading || fk.failed || this.upload(ik, fk), !fk.view)) return null;
        const Sk = this.chosenSampler(ik, Dk),
          bk = Dk.bound;
        return bk && bk.view === fk.view && bk.sampler === Sk ? bk : (Dk.bound = {
          view: fk.view,
          sampler: Sk
        }, Dk.bound)
      }
      textureLoaded(kk) {
        var ek, ik;
        return null !== (ek = null === (ik = kk.gpu[Vk.c.lite]) || void 0 === ik ? void 0 : ik.state.decoded) && void 0 !== ek ? ek : null
      }
      textureFailed(kk) {
        var ek;
        return !0 === (null === (ek = kk.gpu[Vk.c.lite]) || void 0 === ek ? void 0 : ek.state.failed)
      }
      chosenSampler(kk, ek) {
        const {
          samplingMode: ik,
          wrapU: Dk,
          wrapV: fk
        } = kk.sampler, Sk = ek.state.hasMips, bk = function(kk, ek) {
          const {
            bilinear: ik,
            trilinear: Dk
          } = Vk.f;
          return !ek && kk !== ik || 11 !== kk && kk !== Dk && kk !== ik ? 1 : 4
        }(ik, Sk), rk = ek.sampler;
        if (rk && rk.samplingMode === ik && rk.hasMips === Sk && rk.anisotropy === bk && rk.wrapU === Dk && rk.wrapV === fk) return rk.sampler;
        const Pk = this.samplerFor(ik, Sk, bk, Dk, fk);
        return ek.sampler = {
          samplingMode: ik,
          hasMips: Sk,
          anisotropy: bk,
          wrapU: Dk,
          wrapV: fk,
          sampler: Pk
        }, Pk
      }
      releaseTexture(kk) {
        var ek, ik;
        kk.view && (null === (ik = this.onDestroy) || void 0 === ik || ik.call(this, kk.view));
        null === (ek = kk.destroy) || void 0 === ek || ek.call(kk)
      }
      textureSlot(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ik = kk.gpu[Vk.c.lite];
        if (ik) return ik;
        const Dk = function(kk) {
          let {
            source: ek,
            sampler: ik
          } = kk;
          return "canvas" === ek.kind ? null : `${ek.kind}|${Jb(ek)}|${ik.noMipmap}|${ik.samplingMode}|${ik.invertY}`
        }(kk);
        let fk = null === Dk ? void 0 : this.textures.get(Dk);
        fk || (fk = {
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
        }, null !== Dk && (this.textures.set(Dk, fk), this.load(kk, fk), ek && this.firstBindDecodes++)), fk.refs++;
        const Sk = fk,
          bk = {
            state: fk,
            bound: null,
            sampler: null,
            release: () => {
              this.releaseSlot(Sk, Dk)
            }
          };
        return kk.gpu[Vk.c.lite] = bk, bk
      }
      samplerFor(kk, ek, ik, Dk, fk) {
        const Sk = `${kk}|${ek}|${ik}|${Dk}|${fk}`;
        let bk = this.samplers.get(Sk);
        if (!bk) {
          const rk = {
            ...Gb(kk, ek, ik),
            addressModeU: Nb(Dk),
            addressModeV: Nb(fk)
          };
          bk = (0, Eb.c)(this.engine, rk), this.samplers.set(Sk, bk)
        }
        return bk
      }
      upload(kk, ek) {
        const {
          source: ik,
          sampler: Dk
        } = kk;
        ek.hasMips = !Dk.noMipmap, "canvas" === ik.kind ? this.createDynamic(ik, ek) : "cube" === ik.kind ? this.uploadCube(ek, ik.luminance) : this.uploadImage(ek, !0 === Dk.invertY, ik.url)
      }
      uploadImage(kk, ek, ik) {
        const [Dk] = kk.images;
        kk.images = null;
        const fk = (0, hb.e)(this.engine, Dk, {
          mipMaps: kk.hasMips,
          invertY: ek,
          srgb: !1
        }).then((ek => {
          Dk.close(), 0 !== kk.refs ? (kk.view = ek.view, kk.destroy = ek.texture.destroy.bind(ek.texture)) : ek.texture.destroy()
        }));
        this.track(kk, ik, fk)
      }
      track(kk, ek, ik, Dk) {
        kk.loading = !0, this.pending++, ik.catch((ik => {
          kk.failed = !0, console.warn(`Lite: could not load texture ${Wf(ek)}`, ik)
        })).finally((() => {
          kk.loading = !1, this.pending--, null === Dk || void 0 === Dk || Dk()
        }))
      }
      uploadCube(kk, ek) {
        const ik = kk.images;
        kk.images = null;
        const Dk = Xb(this.engine, this.device, ik, (0, Vk.x)(ek), kk.hasMips);
        kk.view = Dk.createView({
          dimension: "cube"
        }), kk.destroy = () => {
          Dk.destroy()
        }
      }
      createDynamic(kk, ek) {
        const {
          canvas: ik
        } = kk, Dk = (0, ab.e)(this.engine, Math.max(1, ik.width), Math.max(1, ik.height), {
          mipMaps: ek.hasMips,
          srgb: !1
        });
        ek.dynamic = Dk, ek.view = Dk.view, ek.destroy = () => {
          Dk.texture.destroy()
        }, this.pushDynamic(kk, ek)
      }
      pushDynamic(kk, ek) {
        const ik = ek.dynamicSource,
          Dk = ek.dynamic,
          {
            canvas: fk
          } = kk;
        if (ik && Dk && 0 !== fk.width && 0 !== fk.height) return fk.width !== Dk.width || fk.height !== Dk.height ? (this.releaseTexture(ek), ek.dynamic = null, ek.view = null, void this.createDynamic(kk, ek)) : void(0, ab.g)(this.engine, Dk, fk, {
          invertY: ik.invertY,
          premultiplyAlpha: ik.premultiplied
        })
      }
    }

    function Jb(kk) {
      return "cube" === kk.kind ? kk.rootUrl : "canvas" === kk.kind ? "canvas" : kk.url
    }
    const kr = new Uint8Array(4);

    function er(kk) {
      const ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? "store" : "discard";
      kk._colorAttachment.storeOp = kk._targetSignature._sampleCount > 1 ? ek : "store";
      const ik = kk._renderPassDescriptor.depthStencilAttachment;
      ik && (ik.depthStoreOp = ek, ik.stencilStoreOp && (ik.stencilStoreOp = ek))
    }
    var ir = ik(37372),
      Dr = ik(37425),
      fr = ik(37064),
      Sr = ik(39144);
    const br = new Float64Array([1, 1, 1]),
      rr = new Float64Array([0, 1, 0]),
      Pr = new Float64Array(4),
      mr = new Float32Array(16),
      Mr = new Float64Array(3),
      Kr = new Float64Array(4);

    function xr(kk, ek, ik) {
      kk.fov = ek.fov, kk.near = ek.near, kk.far = ek.far, kk.renderWidth = ik.renderWidth, kk.renderHeight = ik.renderHeight, (0, fr.u)(ek.holderRotation, 0, Pr, 0), (0, fr.d)(br, 0, Pr, 0, ek.holderPosition, 0, mr);
      const Dk = ek.fR;
      Mr[0] = Dk[0], Mr[1] = Dk[1], Mr[2] = Dk[2] + 1;
      const fk = kk.viewMatrix;
      (0, fr.k)(Dk, Mr, rr, fk), (0, fr.i)(fk, 0, fk), (0, fr.m)(fk, mr, 0, fk), (0, fr.i)(fk, 0, fk);
      const Sk = kk.worldMatrix;
      (0, fr.i)(fk, 0, Sk), kk.eye[0] = Sk[12], kk.eye[1] = Sk[13], kk.eye[2] = Sk[14], Kr[0] = kk.fov, Kr[1] = kk.renderWidth / kk.renderHeight, Kr[2] = kk.near, Kr[3] = kk.far, (0, fr.q)(Kr, kk.projectionMatrix), (0, fr.m)(fk, kk.projectionMatrix, 0, kk.viewProjectionMatrix), (0, Sr.g)(kk.viewProjectionMatrix, kk.frustum)
    }

    function nr(kk, ek) {
      let ik = kk.frustumPlanes;
      ik || (ik = kk.frustumPlanes = Array.from({
        length: 6
      }, (() => new ir.c(0, 0, 0, 0))));
      for (let Dk = 0; Dk < 6; Dk++) {
        const kk = ik[Dk].normal;
        kk._x = ek[4 * Dk], kk._y = ek[4 * Dk + 1], kk._z = ek[4 * Dk + 2], kk._isDirty = !0, ik[Dk].d = ek[4 * Dk + 3]
      }
    }

    function Ur(kk, ek) {
      const ik = ek.clearColor;
      kk.clearColour[0] = ik.r, kk.clearColour[1] = ik.g, kk.clearColour[2] = ik.b, kk.clearColour[3] = ik.a;
      const Dk = ek.ambientColor;
      kk.ambientColour[0] = Dk.r, kk.ambientColour[1] = Dk.g, kk.ambientColour[2] = Dk.b, kk.animationRatio = ek.animationRatio, kk.frameId = ek.frameId, kk.version++
    }

    function Hr(kk) {
      const ek = kk.model.view;
      return ek.animTick = (0, Dr.h)(), ek.timeMs = performance.now(), Ur(ek, kk.bw), kk.model.update(ek.frameId), ek
    }

    function wr(kk) {
      const ek = kk.bw,
        {
          view: ik,
          kR: Dk
        } = kk.model;
      return xr(ik, Dk, ek.JU()), ek.onBeforeRenderObservable.notifyObservers(ek), nr(ek, ik.frustum), ek.onBeforeCameraRenderObservable.notifyObservers(ek.activeCamera), Hr(kk)
    }
    var lr = ik(37031),
      pr = ik(37144),
      yr = ik(37408);

    function Yr(kk) {
      var ek, ik;
      const Dk = (0, sk.Y)(kk);
      if (!Dk || Dk.diffuseTexture && (0, yr.e)(kk)) return null;
      const fk = null === (ek = (0, sk.w)(Dk, Ak.j.name)) || void 0 === ek ? void 0 : ek.state,
        Sk = null === (ik = (0, sk.w)(Dk, JS.c.name)) || void 0 === ik ? void 0 : ik.state,
        bk = new Float32Array(16);
      return function(kk, ek, ik, Dk) {
        var fk, Sk;
        const bk = HD;
        Dk.set(kk.diffuseColor, bk.diffuse), Dk[bk.diffuse + 3] = kk.alpha, Dk.set(kk.ambientColor, bk.ambientAndCutoff), Dk[bk.ambientAndCutoff + 3] = kk.alphaCutOff, Dk.set(kk.emissiveColor, bk.emissiveAndLevel), Dk[bk.emissiveAndLevel + 3] = null !== (fk = null === (Sk = kk.diffuseTexture) || void 0 === Sk ? void 0 : Sk.level) && void 0 !== fk ? fk : 1, null !== ek && void 0 !== ek && ek.animDataPerTex ? (Dk[bk.anim + 1] = Dr.e, Dk[bk.anim + 2] = ek.animDataPerTex.length / 3 - 1) : ik && (Dk[bk.anim + 1] = ik.numAnimStates, Dk[bk.anim + 2] = ik.ticksPerAnimState)
      }(Dk, fk, Sk, bk), {
        model: Dk,
        atlas: fk,
        texture: fk ? "atlas" : Dk.diffuseTexture ? "single" : "none",
        animated: fk ? !!fk.animDataPerTex : !!Sk,
        liquid: (0, yr.i)(kk),
        customRenderMat: (0, yr.e)(kk),
        uniformData: bk
      }
    }
    var Lr = ik(2812);
    class Cr {
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
    class Ar {
      constructor(kk, ek) {
        this.arena = kk, this.lw = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.lw = new Tb(ek);
        const ik = new Cr(ek);
        ik.buffer = this.createBuffer(ik, !1), this.backings.push(ik), this.refresh()
      }
      get vK() {
        return this.lw.vK
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
        for (const ek of this.backings) kk += ek.units * (this.arena.unitBytes + (ek.twin ? this.arena.twinUnitBytes : 0));
        return kk
      }
      holds(kk) {
        return kk.start + kk.length <= this.usable
      }
      lost(kk) {
        return this.dropped || kk.start + kk.length > this.vK
      }
      write(kk, ek) {
        const {
          device: ik,
          unitBytes: Dk
        } = this.arena;
        for (const fk of this.backings) {
          const Sk = (fk.units - kk.start) * Dk;
          Sk > 0 && ik.queue.writeBuffer(fk.buffer, kk.start * Dk, ek, 0, Math.min(ek.byteLength, Sk))
        }
      }
      writeLight(kk, ek) {
        const {
          device: ik,
          twinUnitBytes: Dk,
          verticesPerUnit: fk
        } = this.arena, {
          light: Sk,
          count: bk
        } = this.arena.twinLight(ek, Math.min(ek.length, kk.length * fk));
        for (const rk of this.backings) {
          rk.twin || (rk.twin = this.createBuffer(rk, !0));
          const ek = (rk.units - kk.start) * fk;
          ek > 0 && ik.queue.writeBuffer(rk.twin, kk.start * Dk, Sk, 0, Math.min(bk, ek))
        }
      }
      grow(kk) {
        this.arena.assertNotDrawing();
        const {
          device: ek,
          unitBytes: ik,
          label: Dk
        } = this.arena, fk = this.backings[this.backings.length - 1], Sk = new Cr(kk), bk = ek.createCommandEncoder({
          label: `${Dk}-grow`
        });
        Sk.buffer = this.createBuffer(Sk, !1), bk.copyBufferToBuffer(fk.buffer, 0, Sk.buffer, 0, fk.units * ik), fk.twin && (Sk.twin = this.createBuffer(Sk, !0), bk.copyBufferToBuffer(fk.twin, 0, Sk.twin, 0, fk.units * this.arena.twinUnitBytes)), ek.queue.submit([bk.finish()]), this.backings.push(Sk), this.lw.grow(kk)
      }
      drop() {
        if (!this.dropped) {
          this.dropped = !0;
          for (const kk of this.backings) kk.destroy();
          this.refresh(), this.arena.remove(this)
        }
      }
      createBuffer(kk, ek) {
        const {
          device: ik,
          unitBytes: Dk,
          twinUnitBytes: fk,
          usage: Sk,
          label: bk
        } = this.arena;
        ik.pushErrorScope("out-of-memory");
        const rk = ik.createBuffer({
          label: ek ? `${bk}-light` : bk,
          size: kk.units * (ek ? fk : Dk),
          usage: (ek ? this.arena.twinUsage : Sk) | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC
        });
        return this.arena.awaitingVerdict++, ik.popErrorScope().then((ik => {
          this.arena.awaitingVerdict--, this.settle(kk, ek, !ik, !0)
        }), (ik => {
          this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${bk} buffer, taken as failed: ${String(ik)}`), this.settle(kk, ek, !1, !1)
        })), rk
      }
      settle(kk, ek, ik, Dk) {
        const fk = this.backings.indexOf(kk);
        if (!(this.dropped || fk < 0)) {
          if (!ik) {
            if (Dk && this.arena.ranOutOfMemory(kk.units, kk.units * (ek ? this.arena.twinUnitBytes : this.arena.unitBytes)), 0 === fk) return void this.drop();
            for (const kk of this.backings.splice(fk)) kk.destroy();
            return this.lw.truncate(this.backings[fk - 1].units), this.growable = !1, void this.promote()
          }
          ek ? kk.twinReady = !0 : (kk.bufferReady = !0, this.arena.allocatedBuffer(kk.units)), this.promote()
        }
      }
      promote() {
        const {
          backings: kk
        } = this;
        let ek = 0;
        for (; ek + 1 < kk.length && kk[ek].ready && kk[ek + 1].ready;) ek++;
        for (const ik of kk.splice(0, ek)) ik.destroy();
        this.refresh()
      }
      refresh() {
        const kk = this.backings[0];
        this.buffer = kk.buffer, this.twin = kk.twinReady ? kk.twin : null, this.usable = !this.dropped && kk.bufferReady ? kk.units : 0
      }
    }
    class jr {
      constructor(kk, ek, ik, Dk) {
        let {
          verticesPerUnit: fk = 1,
          twinUsage: Sk = GPUBufferUsage.VERTEX
        } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        if (this.device = kk, this.unitBytes = ek, this.usage = ik, this.label = Dk, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.ceiling = -1, this.failed = 1 / 0, this.shortages = 0, this.forgetFailedAt = 0, this.shortageUntil = -1 / 0, this.warnOnce = (0, Me.d)("Lite terrain: "), this.padded = new Uint16Array(0), this.widened = new Float32Array(0), ek % 4 !== 0) throw new Error(`${Dk}: ${ek}-byte units cannot keep every range four-byte aligned`);
        this.verticesPerUnit = fk, this.twinUsage = Sk, this.twinValueBytes = fk > 1 ? 2 : 4, this.twinUnitBytes = this.twinValueBytes * fk
      }
      twinLight(kk, ek) {
        if (4 === this.twinValueBytes) return this.widened.length < ek && (this.widened = new Float32Array(Math.max(ek, 2 * this.widened.length))), this.widened.set(kk.subarray(0, ek)), {
          light: this.widened,
          count: ek
        };
        const ik = ek % this.verticesPerUnit;
        if (0 === ik) return {
          light: kk,
          count: ek
        };
        const Dk = ek - ik + this.verticesPerUnit;
        return this.padded.length < Dk && (this.padded = new Uint16Array(Math.max(Dk, 2 * this.padded.length))), this.padded.set(kk.subarray(0, ek)), this.padded.fill(0, ek, Dk), {
          light: this.padded,
          count: Dk
        }
      }
      allocate(kk) {
        if (this.assertNotDrawing(), this.limit < 0 && (this.limit = this.ceiling = this.pageLimit()), kk > this.limit) return null;
        this.failed !== 1 / 0 && performance.now() >= this.forgetFailedAt && (this.failed = 1 / 0, this.ceiling = this.limit);
        for (const fk of this.pages) {
          const ek = fk.lw.allocate(kk);
          if (ek >= 0) return {
            page: fk,
            start: ek,
            length: kk
          }
        }
        const ek = this.pages[this.pages.length - 1];
        if (null !== ek && void 0 !== ek && ek.canGrow) {
          const ik = Math.min(this.ceiling, Math.max(2 * ek.vK, ek.vK + kk));
          if (ik - ek.vK >= kk) return ek.grow(ik), {
            page: ek,
            start: ek.lw.allocate(kk),
            length: kk
          }
        }
        ek && ek !== this.pages[0] && 0 === ek.lw.used && ek.drop();
        const ik = Math.floor(1048576 / this.unitBytes),
          Dk = new Ar(this, Math.max(kk, Math.min(this.ceiling, ik)));
        return this.pages.push(Dk), {
          page: Dk,
          start: Dk.lw.allocate(kk),
          length: kk
        }
      }
      free(kk) {
        this.assertNotDrawing();
        const {
          page: ek
        } = kk;
        ek.lw.free(kk.start, kk.length), 0 === ek.lw.used && ek !== this.pages[0] && ek !== this.pages[this.pages.length - 1] && ek.drop()
      }
      remove(kk) {
        const ek = this.pages.indexOf(kk);
        ek >= 0 && this.pages.splice(ek, 1)
      }
      ranOutOfMemory(kk, ek) {
        this.warnOnce("outOfMemory", `out of GPU memory for a ${ek}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, kk), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, kk) / 2));
        const ik = performance.now();
        ik >= this.shortageUntil && (this.forgetFailedAt = ik + Math.min(6e5, 3e4 * 2 ** this.shortages++), this.shortageUntil = ik + 1e3)
      }
      allocatedBuffer(kk) {
        kk >= this.failed && (this.failed = 1 / 0);
        const ek = Math.min(2 * kk, Math.floor((kk + this.failed) / 2));
        this.ceiling = Math.min(this.limit, Math.max(this.ceiling, ek))
      }
      stats() {
        let kk = 0,
          ek = 0,
          ik = 0,
          Dk = 0;
        for (const fk of this.pages) kk += fk.vK, ek += fk.lw.used, ik += fk.hasTwin ? fk.vK * this.twinUnitBytes : 0, Dk += fk.allocatedBytes;
        return {
          pages: this.pages.length,
          capacityBytes: kk * this.unitBytes,
          usedBytes: ek * this.unitBytes,
          twinBytes: ik,
          allocatedBytes: Dk
        }
      }
      assertNotDrawing() {}
      pageLimit() {
        const {
          maxBufferSize: kk,
          maxStorageBufferBindingSize: ek
        } = this.device.limits;
        let ik = Math.floor(Math.min(67108864, kk) / this.unitBytes);
        return this.usage & GPUBufferUsage.STORAGE && (ik = Math.min(ik, Math.floor(ek / this.unitBytes))), this.twinUsage & GPUBufferUsage.STORAGE && (ik = Math.min(ik, Math.floor(ek / this.twinUnitBytes))), ik
      }
    }
    const sr = 16383;

    function dr(kk, ek, ik, Dk, fk) {
      let Sk = 0;
      for (let bk = ik; bk < Dk; bk += sr) kk.drawIndexed(6 * Math.min(sr, Dk - bk), 1, 0, ek + 4 * bk, fk), Sk++;
      return Sk
    }
    class Vr {
      constructor(kk, ek) {
        this.recordsGroup = ek, this.vertexArena = void 0, this.quadArena = void 0, this.quadPattern = void 0, this.fullSky = new Uint16Array(0), this.boundVertices = null, this.boundLight = null, this.boundRecords = null, this.boundRecordsLight = null, this.boundPattern = !1;
        const ik = se.d.strideWithoutAtlas;
        this.vertexArena = new jr(kk, ik, GPUBufferUsage.VERTEX, `terrain-vertices-${ik}`), this.quadArena = new jr(kk, pr.c, GPUBufferUsage.STORAGE, "terrain-quads", {
          verticesPerUnit: 4,
          twinUsage: GPUBufferUsage.STORAGE
        });
        const Dk = (0, de.d)(new Uint16Array(98298), sr);
        this.quadPattern = kk.createBuffer({
          label: "terrain-quad-pattern",
          size: Dk.byteLength,
          usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
        }), kk.queue.writeBuffer(this.quadPattern, 0, Dk)
      }
      set(kk, ek) {
        const ik = ek.packedVertices,
          Dk = ik ? this.quadArena.allocate(kk.faceCount) : this.vertexArena.allocate(kk.vertexCount);
        if (!Dk) return !1;
        kk.vertices = Dk;
        const fk = ik ? new Uint8Array(ik.buffer, ik.byteOffset, ik.byteLength) : new Uint8Array(ek.vertices);
        return Dk.page.write(Dk, fk), !0
      }
      setLight(kk, ek) {
        const {
          vertices: ik
        } = kk;
        ik && 0 !== ek.length && ik.page.live && (ek.length < kk.vertexCount ? ik.page.arena.warnOnce("shortLight", `a part's ${ek.length} light values are fewer than its ${kk.vertexCount} vertices, so its light is left as it was`) : (ik.page.writeLight(ik, ek), kk.lit = !0))
      }
      lightFullSky(kk, ek) {
        this.fullSky.length < ek && (this.fullSky = new Uint16Array(Math.max(ek, 4096)).fill(Lr.j));
        for (const ik of kk) {
          const kk = ik.vertices;
          kk.page.live && (kk.page.writeLight(kk, this.fullSky), ik.lit = !0)
        }
      }
      backed(kk) {
        const {
          vertices: ek
        } = kk;
        return !!ek && ek.page.holds(ek)
      }
      lost(kk) {
        const {
          vertices: ek
        } = kk;
        return !!ek && ek.page.lost(ek)
      }
      release(kk) {
        kk.vertices && kk.vertices.page.arena.free(kk.vertices), kk.vertices = null, kk.lit = !1
      }
      setDrawing(kk) {
        this.forgetBound()
      }
      draw(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ek.faceCount;
        const Sk = ek.vertices,
          bk = Sk.page,
          rk = ik ? bk.twin : null;
        if (!bk.holds(Sk) || ik && !rk) return 0;
        const {
          verticesPerUnit: Pk
        } = bk.arena;
        let mk = Sk.start * Pk;
        this.boundPattern || (kk.setIndexBuffer(this.quadPattern, "uint16"), this.boundPattern = !0);
        const Mk = Dk + fk;
        if (Pk > 1) return bk.buffer === this.boundRecords && rk === this.boundRecordsLight || (kk.setBindGroup(1, this.recordsGroup(bk.buffer, rk)), this.boundRecords = bk.buffer, this.boundRecordsLight = rk), dr(kk, mk, Dk, Mk, ek.slot);
        bk.buffer !== this.boundVertices && (kk.setVertexBuffer(0, bk.buffer), this.boundVertices = bk.buffer), rk && rk !== this.boundLight && (kk.setVertexBuffer(1, rk), this.boundLight = rk);
        const Kk = ek.faceCount;
        return Mk <= Kk ? dr(kk, mk, Dk, Mk, ek.slot) : dr(kk, mk, Dk, Kk, ek.slot) + dr(kk, mk, Math.max(Dk, Kk) - Kk, Mk - Kk, ek.slot)
      }
      get buffersAwaitingVerdict() {
        let kk = 0;
        for (const ek of this.arenas()) kk += ek.awaitingVerdict;
        return kk
      }* arenas() {
        yield this.vertexArena, yield this.quadArena
      }
      forgetBound() {
        this.boundVertices = this.boundLight = this.boundRecords = this.boundRecordsLight = null, this.boundPattern = !1
      }
    }
    class Fr {
      constructor(kk, ek, ik, Dk) {
        this.device = kk, this.splitBefore = ek, this.wanted = !1, this.pipeline = null, this.building = !0, this.unprojectBuffer = void 0, this.unproject = new Float32Array(2), this.near = 0, this.far = 0, this.copy = null, this.retired = null, this.unprojectBuffer = kk.createBuffer({
          label: "scene-depth-unproject",
          size: 8,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        });
        const fk = kk.createShaderModule({
          label: "scene-depth-copy",
          code: (Sk = ik._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Sk?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn copyFragment(@builtin(position) pixel: vec4f) -> @location(0) f32 {\n\tlet d = textureLoad(depth, vec2i(pixel.xy), 0);\n\tif (d <= 0.0) {\n\t\treturn 0.0;\n\t}\n\treturn unproject.y / (2.0 * d + unproject.x);\n}\n`)
        });
        var Sk;
        kk.createRenderPipelineAsync({
          label: "scene-depth-copy",
          layout: "auto",
          vertex: {
            module: fk,
            entryPoint: "copyVertex"
          },
          fragment: {
            module: fk,
            entryPoint: "copyFragment",
            targets: [{
              format: "r32float"
            }]
          }
        }).then((kk => {
          this.pipeline = kk, this.building = !1
        }), (kk => {
          this.building = !1, console.error("Lite: the scene depth copy failed to build, so liquids find nothing behind them", kk)
        })), ik._executeWithTransmission = () => this.execute(ik, Dk)
      }
      get compiling() {
        return this.building
      }
      setWanted(kk) {
        this.wanted = kk
      }
      setPlanes(kk, ek) {
        kk === this.near && ek === this.far || (this.near = kk, this.far = ek, this.unproject[0] = kk / (ek - kk), this.unproject[1] = ek * kk / (ek - kk), this.device.queue.writeBuffer(this.unprojectBuffer, 0, this.unproject))
      }
      get view() {
        var kk, ek;
        return null !== (kk = null === (ek = this.copy) || void 0 === ek ? void 0 : ek.view) && void 0 !== kk ? kk : null
      }
      execute(kk, ek) {
        var ik;
        null === (ik = this.retired) || void 0 === ik || ik.destroy(), this.retired = null;
        const Dk = ee(ek),
          fk = kk._transparentBindings,
          Sk = this.wanted && this.pipeline ? this.splitIndex(fk) : -1,
          bk = kk._colorAttachment,
          rk = bk.resolveTarget;
        Sk >= 0 && (bk.resolveTarget = void 0, er(kk, !0));
        let Pk = Dk.beginRenderPass(kk._renderPassDescriptor);
        Pk.setBindGroup(0, kk._sceneBG);
        let mk = this.drawList(Pk, ek, kk._opaqueBindings, 0, kk._opaqueBindings.length);
        if (mk += this.drawList(Pk, ek, kk._directBindings, 0, kk._directBindings.length), mk += this.drawList(Pk, ek, fk, 0, Sk >= 0 ? Sk : fk.length), Pk.end(), Sk < 0) return mk;
        er(kk);
        const Mk = kk._renderPassDescriptor.depthStencilAttachment,
          {
            depthLoadOp: Kk,
            stencilLoadOp: xk
          } = Mk,
          nk = bk.loadOp;
        bk.resolveTarget = rk;
        try {
          this.copyDepth(Dk, kk), bk.loadOp = "load", Mk.depthLoadOp = "load", xk && (Mk.stencilLoadOp = "load"), Pk = Dk.beginRenderPass(kk._renderPassDescriptor), Pk.setBindGroup(0, kk._sceneBG), mk += this.drawList(Pk, ek, fk, Sk, fk.length), Pk.end()
        } finally {
          bk.loadOp = nk, Mk.depthLoadOp = Kk, Mk.stencilLoadOp = xk
        }
        return mk
      }
      splitIndex(kk) {
        for (let ek = 0; ek < kk.length; ek++)
          if (kk[ek].renderable === this.splitBefore) return ek;
        return -1
      }
      drawList(kk, ek, ik, Dk, fk) {
        let Sk = null,
          bk = 0;
        for (let rk = Dk; rk < fk; rk++) {
          const Dk = ik[rk],
            fk = Dk.renderable.mesh;
          fk && !1 === fk.visible || (Dk.pipeline !== Sk && (kk.setPipeline(Dk.pipeline), Sk = Dk.pipeline), bk += Dk.draw(kk, ek))
        }
        return bk
      }
      copyDepth(kk, ek) {
        var ik, Dk;
        const fk = (null !== (ik = ek._config.depth) && void 0 !== ik ? ik : ek._config.rt)._depthTexture,
          Sk = (null === (Dk = this.copy) || void 0 === Dk ? void 0 : Dk.source) === fk ? this.copy : this.remakeCopy(fk),
          bk = kk.beginRenderPass(Sk.pass);
        bk.setPipeline(this.pipeline), bk.setBindGroup(0, Sk.bindGroup), bk.draw(3), bk.end()
      }
      remakeCopy(kk) {
        var ek, ik;
        this.retired = null !== (ek = null === (ik = this.copy) || void 0 === ik ? void 0 : ik.texture) && void 0 !== ek ? ek : null;
        const Dk = this.device.createTexture({
            label: "scene-depth",
            size: [kk.width, kk.height],
            format: "r32float",
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          fk = Dk.createView(),
          Sk = this.device.createBindGroup({
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
          bk = {
            label: "scene-depth-copy",
            colorAttachments: [{
              view: fk,
              loadOp: "clear",
              storeOp: "store",
              clearValue: [0, 0, 0, 0]
            }]
          };
        return this.copy = {
          source: kk,
          texture: Dk,
          view: fk,
          bindGroup: Sk,
          pass: bk
        }, this.copy
      }
    }
    const ur = "rgba8unorm";

    function qr(kk) {
      return kk ? 15 : 1
    }
    class Ir {
      constructor(kk, ek, ik, Dk) {
        this.device = kk, this.terrain = Dk, this.pipeline = null, this.building = !0, this.edge = void 0, this.layout = void 0, this.empty = void 0, this.cameraBuffer = void 0, this.camera = new Float32Array(16), this.targets = null, this.retired = null, this.edge = ek._targetSignature._sampleCount > 1, this.cameraBuffer = kk.createBuffer({
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
        const fk = kk.createBindGroupLayout({
          label: "sun-shadow-mask-empty",
          entries: []
        });
        this.empty = kk.createBindGroup({
          label: "sun-shadow-mask-empty",
          layout: fk,
          entries: []
        });
        const Sk = kk.createShaderModule({
          label: "sun-shadow-mask",
          code: (bk = this.edge, `${(0,Ve.A)()}${Xi({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\tforward: vec3f,\n}\n@group(0) @binding(1) var<uniform> bloxdSmCamera: BloxdSmCamera;\n@group(0) @binding(2) var bloxdSmNormal: texture_2d<f32>;\n${bk?Fi:""}\n@vertex\nfn maskVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {\n\tlet corner = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0))[i];\n\treturn vec4f(corner, 0.0, 1.0);\n}\n\n@fragment\nfn maskFragment(@builtin(position) pixel: vec4f) -> @location(0) vec4f {\n\tlet at = vec2i(pixel.xy);\n\tlet d = textureLoad(bloxdSmDepth, at, 0).x;\n\tif (d <= 0.0) {\n\t\treturn vec4f(${qr(bk)}.0, 0.0, 0.0, 0.0);\n\t}\n\t// View z from the depth as it is, then along the pixel's ray: an inverse view-projection would round d against 1\n\tlet size = vec2f(textureDimensions(bloxdSmDepth));\n\tlet ndc = vec2f(pixel.x / size.x * 2.0 - 1.0, 1.0 - pixel.y / size.y * 2.0);\n\tlet z = bloxdSmCamera.depthScale / (2.0 * d + bloxdSmCamera.depthBias);\n\tlet packed = textureLoad(bloxdSmNormal, at, 0);\n\tbloxdSpShadowPosition = bloxdSmCamera.eye + z * (bloxdSmCamera.forward + ndc.x * bloxdSmCamera.right + ndc.y * bloxdSmCamera.up);\n\t// Capped well inside the quarter block origins start off their face: past it, a few pixels\n\tbloxdSpPlaneTolerance = min(z * z * bloxdSmCamera.tolerance, 0.125);\n\tbloxdSpShadowNormal = normalize(packed.xyz * 2.0 - 1.0);\n\tbloxdSpShadowEmissive = packed.w > 0.5;\n\treturn ${bk?"vec4f(bloxdSpNormalCode(bloxdSpShadowNormal) * 2.0 + bloxdShadow(), d, 0.0, 0.0)":"vec4f(bloxdShadow())"};\n}\n`)
        });
        var bk;
        kk.createRenderPipelineAsync({
          label: "sun-shadow-mask",
          layout: kk.createPipelineLayout({
            bindGroupLayouts: [this.layout, fk, fk, TS(kk, {
              depth: !1,
              sunShadow: !0
            })]
          }),
          vertex: {
            module: Sk,
            entryPoint: "maskVertex"
          },
          fragment: {
            module: Sk,
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
        const rk = ek._executeWithTransmission;
        ek._executeWithTransmission = kk => this.execute(ek, ik, (() => rk ? rk(kk) : function(kk, ek) {
          const ik = ee(ek).beginRenderPass(kk._renderPassDescriptor);
          ik.setBindGroup(0, kk._sceneBG);
          let Dk = zr(ik, ek, kk._opaqueBindings);
          return Dk += zr(ik, ek, kk._directBindings), Dk += zr(ik, ek, kk._transparentBindings), ik.end(), Dk
        }(ek, ik)))
      }
      get compiling() {
        return this.building
      }
      get view() {
        var kk, ek;
        return null !== (kk = null === (ek = this.targets) || void 0 === ek ? void 0 : ek.maskView) && void 0 !== kk ? kk : null
      }
      get maskFormat() {
        return this.edge ? "rg32float" : "r8unorm"
      }
      prepare(kk) {
        ! function(kk, ek) {
          const ik = kk.worldMatrix,
            Dk = kk.projectionMatrix,
            fk = 1 / Dk[0],
            Sk = 1 / Dk[5],
            bk = kk.far * kk.near / (kk.far - kk.near);
          ek[0] = kk.eye[0], ek[1] = kk.eye[1], ek[2] = kk.eye[2], ek[3] = 2 ** -23 / bk, ek[4] = ik[0] * fk, ek[5] = ik[1] * fk, ek[6] = ik[2] * fk, ek[7] = bk, ek[8] = ik[4] * Sk, ek[9] = ik[5] * Sk, ek[10] = ik[6] * Sk, ek[11] = kk.near / (kk.far - kk.near), ek[12] = ik[8], ek[13] = ik[9], ek[14] = ik[10], ek[15] = 0
        }(kk, this.camera), this.device.queue.writeBuffer(this.cameraBuffer, 0, this.camera)
      }
      execute(kk, ek, ik) {
        if (this.retire(), !this.terrain.readsMask) return ik();
        const Dk = this.targetsFor(kk),
          fk = ee(ek),
          Sk = kk._renderPassDescriptor.depthStencilAttachment;
        this.edge || (Dk.prepass.depthStencilAttachment.view = Sk.view);
        const bk = this.terrain.drawPrepass(fk, Dk.prepass, kk._sceneBG);
        if (0 === bk) return ik();
        if (this.trace(fk, Dk), this.edge) return bk + 1 + ik();
        const {
          depthLoadOp: rk,
          stencilLoadOp: Pk
        } = Sk;
        Sk.depthLoadOp = "load", Pk && (Sk.stencilLoadOp = "load");
        try {
          return bk + 1 + ik()
        } finally {
          Sk.depthLoadOp = rk, Sk.stencilLoadOp = Pk
        }
      }
      trace(kk, ek) {
        const ik = this.terrain.sunShadowGroup(),
          Dk = kk.beginRenderPass(ek.trace);
        this.pipeline && ik && (Dk.setPipeline(this.pipeline), Dk.setBindGroup(0, ek.bindGroup), Dk.setBindGroup(1, this.empty), Dk.setBindGroup(2, this.empty), Dk.setBindGroup(3, ik), Dk.draw(3)), Dk.end()
      }
      retire() {
        const kk = this.retired;
        var ek;
        kk && (kk.mask.destroy(), kk.normals.destroy(), null === (ek = kk.depth) || void 0 === ek || ek.destroy(), this.retired = null)
      }
      targetsFor(kk) {
        var ek, ik;
        const Dk = (null !== (ek = kk._config.depth) && void 0 !== ek ? ek : kk._config.rt)._depthTexture;
        return (null === (ik = this.targets) || void 0 === ik ? void 0 : ik.source) === Dk ? this.targets : this.remake(kk, Dk)
      }
      remake(kk, ek) {
        var ik;
        this.retired = this.targets;
        const Dk = [ek.width, ek.height],
          fk = this.device.createTexture({
            label: "sun-shadow-mask",
            size: Dk,
            format: this.maskFormat,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          Sk = this.device.createTexture({
            label: "sun-shadow-prepass-normals",
            size: Dk,
            format: ur,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }),
          bk = null !== (ik = kk._targetSignature._depthStencilFormat) && void 0 !== ik ? ik : ek.format,
          rk = this.edge ? this.device.createTexture({
            label: "sun-shadow-prepass-depth",
            size: Dk,
            format: bk,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          }) : null,
          Pk = kk._renderPassDescriptor.depthStencilAttachment,
          mk = bk.includes("stencil"),
          Mk = {
            label: "sun-shadow-prepass",
            colorAttachments: [{
              view: Sk.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [.5, 1, .5, 0]
            }],
            depthStencilAttachment: {
              view: rk ? rk.createView() : Pk.view,
              depthClearValue: Pk.depthClearValue,
              depthLoadOp: "clear",
              depthStoreOp: "store",
              ...mk ? {
                stencilClearValue: Pk.stencilClearValue,
                stencilLoadOp: "clear",
                stencilStoreOp: "store"
              } : {}
            }
          },
          Kk = this.device.createBindGroup({
            label: "sun-shadow-mask",
            layout: this.layout,
            entries: [{
              binding: 0,
              resource: (null !== rk && void 0 !== rk ? rk : ek).createView({
                aspect: "depth-only"
              })
            }, {
              binding: 1,
              resource: {
                buffer: this.cameraBuffer
              }
            }, {
              binding: 2,
              resource: Sk.createView()
            }]
          }),
          xk = {
            label: "sun-shadow-mask",
            colorAttachments: [{
              view: fk.createView(),
              loadOp: "clear",
              storeOp: "store",
              clearValue: [qr(this.edge), 0, 0, 0]
            }]
          };
        return this.targets = {
          source: ek,
          mask: fk,
          maskView: fk.createView(),
          normals: Sk,
          depth: rk,
          bindGroup: Kk,
          prepass: Mk,
          trace: xk
        }, this.targets
      }
    }

    function zr(kk, ek, ik) {
      let Dk = null,
        fk = 0;
      for (const Sk of ik) {
        const ik = Sk.renderable.mesh;
        ik && !1 === ik.visible || (Sk.pipeline !== Dk && (kk.setPipeline(Sk.pipeline), Dk = Sk.pipeline), fk += Sk.draw(kk, ek))
      }
      return fk
    }
    const Qr = 6e4,
      vr = {
        status: "ok"
      },
      Er = {
        status: "skipped"
      };
    async function hr(kk, ek) {
      const {
        isCancelled: ik
      } = kk;
      if (ik()) return {
        status: "Ji"
      };
      const {
        target: Dk
      } = ek;
      if (!Dk) return console.warn("Shader pack: skipped the compile check, as Lite hasn't bound terrain yet"), {
        status: "skipped"
      };
      const fk = [],
        Sk = Promise.all(Array.from(new Set(kk.materials), (async ik => {
          fk.push(await async function(kk, ek, ik, Dk) {
            const fk = {
              lighting: kk.lighting,
              dirLightCount: Math.min(kk.dirLightCount, 4),
              AU: kk.runtime
            };
            try {
              const Sk = ek.material(Dk);
              return Sk && xD(ek.programKey(Sk, !1, fk)) ? (await Sk.ready, kk.isCancelled() ? vr : Sk.bindGroupLayout ? await async function(kk, ek, ik, Dk) {
                const {
                  device: fk
                } = kk;
                let Sk, bk;
                fk.pushErrorScope("validation");
                try {
                  Sk = kk.pipelineBuild(ek, ik, Dk)
                } finally {
                  bk = fk.popErrorScope().catch((() => null))
                }
                const [rk, Pk] = await Promise.all([bk, Sk.built.then((() => null), (kk => null !== kk && void 0 !== kk ? kk : new Error("pipeline failed")))]);
                if (!rk && !Pk) return vr;
                const mk = await ar(Sk.module),
                  Mk = mk.length > 0 ? mk.map((kk => `${Sk.name} ${kk.lineNum}:${kk.linePos}: ${kk.message}`)).join("\n") : `${Sk.name}: ${Wr(null!==Pk&&void 0!==Pk?Pk:rk)}`;
                return {
                  status: "failed",
                  material: ek.model.name,
                  message: Mk
                }
              }(ek, Sk, ek.programKey(Sk, "none" !== Sk.texture, fk), ik): (console.warn(`Shader pack: skipped the compile check for "${Dk.name}", whose textures failed to load`), Er)) : vr
            } catch (Sk) {
              return {
                status: "failed",
                material: Dk.name,
                message: Wr(Sk)
              }
            }
          }(kk, ek, Dk, ik))
        }))),
        bk = function(kk, ek) {
          let ik, Dk, fk = !1;
          const Sk = new Promise((Sk => {
            var bk;
            ik = setTimeout((() => {
              Sk("timeout")
            }), null !== (bk = ek.timeoutMs) && void 0 !== bk ? bk : Qr), Dk = setInterval((() => {
              ek.isCancelled() && Sk("Ji")
            }), 50), kk.lost.then((() => {
              fk = !0, Sk("lost")
            }))
          }));
          return {
            signal: Sk,
            lost: () => fk,
            dispose: () => {
              clearTimeout(ik), clearInterval(Dk)
            }
          }
        }(ek.device, kk);
      let rk;
      try {
        rk = await Promise.race([Sk.then((() => "done")), bk.signal])
      } finally {
        bk.dispose()
      }
      if ("Ji" === rk || ik()) return {
        status: "Ji"
      };
      const Pk = fk.find((kk => "failed" === kk.status));
      return Pk && "lost" !== rk && !bk.lost() && await new Promise((kk => {
        setTimeout(kk, 0)
      })), "lost" === rk || bk.lost() ? (console.warn("Shader pack: skipped the compile check, as the GPU device was lost"), {
        status: "skipped"
      }) : Pk ? {
        status: "failed",
        failure: {
          material: Pk.material,
          message: Pk.message
        }
      } : "timeout" === rk ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(mk=kk.timeoutMs)&&void 0!==mk?mk:Qr)/1e3} s`), {
        status: "skipped"
      }) : fk.some((kk => "skipped" === kk.status)) ? {
        status: "skipped"
      } : {
        status: "ok"
      };
      var mk
    }
    async function ar(kk) {
      if (!kk) return [];
      try {
        return (await kk.getCompilationInfo()).messages.filter((kk => "error" === kk.type))
      } catch {
        return []
      }
    }

    function Wr(kk) {
      var ek;
      return null !== (ek = null === kk || void 0 === kk ? void 0 : kk.message) && void 0 !== ek ? ek : String(kk)
    }

    function tr(kk, ek, ik, Dk) {
      xD(kk) ? ar(ik).then((kk => {
        const [ik] = kk;
        Rf("terrain", ek, Dk, ik ? `${ik.lineNum}:${ik.linePos} error: ${ik.message}` : null)
      })) : Rf("terrain", ek, Dk)
    }
    var Xr = ik(37152),
      Br = ik(37164),
      cr = ik(37174),
      Tr = ik(2797);

    function or(kk, ek, ik, Dk, fk) {
      const Sk = Math.hypot(ik[0], ik[1], ik[2]);
      if (!(Sk > 0)) return;
      const bk = [ik[0] / Sk, ik[1] / Sk, ik[2] / Sk],
        rk = [Math.floor(ek[0]), Math.floor(ek[1]), Math.floor(ek[2])],
        Pk = [0, 0, 0],
        mk = [1 / 0, 1 / 0, 1 / 0],
        Mk = [1 / 0, 1 / 0, 1 / 0];
      for (let nk = 0; nk < 3; nk++) bk[nk] > 0 ? (Pk[nk] = 1, mk[nk] = (rk[nk] + 1 - ek[nk]) / bk[nk], Mk[nk] = 1 / bk[nk]) : bk[nk] < 0 && (Pk[nk] = -1, mk[nk] = (rk[nk] - ek[nk]) / bk[nk], Mk[nk] = -1 / bk[nk]);
      const {
        oU: Kk
      } = kk;
      let xk = kk.lT(rk[0], rk[1], rk[2]);
      for (;;) {
        const ek = mk[0] < mk[1] ? mk[0] < mk[2] ? 0 : 2 : mk[1] < mk[2] ? 1 : 2;
        if (mk[ek] > Dk) return;
        const ik = Pk[ek] > 0 ? rk[ek] + 1 : rk[ek];
        rk[ek] += Pk[ek], mk[ek] += Mk[ek];
        const Sk = kk.lT(rk[0], rk[1], rk[2]),
          bk = Sk !== xk && !(kk.opaque[xk] && kk.opaque[Sk]);
        if (bk) {
          const Dk = [rk[0], rk[1], rk[2]];
          Dk[ek] = ik;
          const Sk = Math.floor(Dk[0] / Kk),
            bk = Math.floor(Dk[1] / Kk),
            Pk = Math.floor(Dk[2] / Kk);
          !kk.isDrawn(Sk, bk, Pk) && kk.hasParts(Sk, bk, Pk) && fk.add(`${Sk},${bk},${Pk}`)
        }
        if (bk && kk.occluders[Sk]) return;
        xk = Sk
      }
    }

    function Zr(kk, ek) {
      return kk.group - ek.group || kk.nearest - ek.nearest
    }
    class Or {
      constructor(kk, ek) {
        this.device = kk, this.Ay = ek, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
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
        const ek = null !== (kk = this.free.pop()) && void 0 !== kk ? kk : this.next++;
        if (8 * ek >= this.data.length) {
          const kk = new Float32Array(2 * this.data.length);
          kk.set(this.data), this.data = kk, this.words = new Uint32Array(kk.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Ay()
        }
        return ek
      }
      release(kk) {
        this.free.push(kk)
      }
      set(kk, ek, ik, Dk, fk) {
        const Sk = 8 * kk + CD;
        this.data[Sk] = ek, this.data[Sk + 1] = ik, this.data[Sk + 2] = Dk, this.setVisibility(kk, fk)
      }
      setVisibility(kk, ek) {
        this.data[8 * kk + AD] = ek, this.markDirty(kk, kk)
      }
      setFaces(kk, ek, ik) {
        const Dk = 8 * kk;
        this.words[Dk + jD] = ek, this.words[Dk + sD] = ik, this.markDirty(kk, kk)
      }
      markDirty(kk, ek) {
        this.dirtyMin = Math.min(this.dirtyMin, kk), this.dirtyMax = Math.max(this.dirtyMax, ek)
      }
      flush() {
        if (this.dirtyMax < this.dirtyMin) return;
        this.device.queue.writeBuffer(this.buffer, 8 * this.dirtyMin * 4, this.data, 8 * this.dirtyMin, 8 * (this.dirtyMax - this.dirtyMin + 1)), this.dirtyMin = 1 / 0, this.dirtyMax = -1
      }
    }
    const gr = LD,
      Gr = !0;
    const Nr = {
        arrayStride: 4,
        stepMode: "vertex",
        attributes: [{
          shaderLocation: gr.packedLight,
          offset: 0,
          format: "float32"
        }]
      },
      Rr = {
        srcFactor: "src-alpha",
        dstFactor: "one-minus-src-alpha",
        operation: "add"
      };
    class Jr {
      constructor(kk) {
        this.device = kk, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout = void 0, this.materialLayouts = new Map, this.frameUniforms = new Float32Array(UD), this.dirLightUniforms = this.frameUniforms.subarray(nD.dirLights, nD.aoLevels), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.recordsGroups = new WeakMap, this.modules = new Map, this.pipelines = new Map, this.prepassOf = new WeakMap, this.maskPipelines = 0, this.builds = new Map, this.target = null, this.compiling = 0, this.sampler = void 0, this.geometry = void 0, this.warnOnce = (0, Me.d)(), this.faceGroups = !0, this.visibilityGraph = Gr, this.visCull = Gr, this.visCheck = !1, this.visCullMinDistance = cr.i, this.visCheckFrame = 0, this.visCandidates = [], this.visCandidateBatches = [], this.visPassable = new Set, this.visBatchDraws = new Map, this.visDrawsMaterial = null, this.visDrawsBits = 0, this.visCulledParts = 0, this.visCulledTriangles = 0, this.visViolations = 0, this.visSweeps = 0, this.submittedTriangles = 0, this.chunkSorter = new DP, this.opaqueBatches = [], this.transparent = [], this.unlit = [], this.lighting = !1, this.dirLightCount = 0, this.aoLevelsWritten = !1, this.originOffset = [0, 0, 0], this.eye = [0, 0, 0], this.faceRanges = new Int32Array(4), this.faceEpoch = 0, this.faceEye = [NaN, NaN, NaN], this.faceFocalPx = NaN, this.AU = null, this.shaderPackInputs = null, this.depthStandIn = null, this.geometry = new Vr(kk, ((kk, ek) => this.recordsGroup(kk, ek))), this.slots = new Or(kk, (() => {
          this.frameBindGroup = this.createFrameBindGroup(), this.recordsGroups = new WeakMap
        })), this.sceneLayout = ie(kk), this.frameLayout = kk.createBindGroupLayout({
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
          bind: (kk, ek) => this.createBinding(this.opaqueRenderable, ek, !1)
        }, this.transparentRenderable = {
          order: 200,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (kk, ek) => this.createBinding(this.transparentRenderable, ek, !0)
        }
      }
      installSceneDepth(kk, ek) {
        this.sceneDepth = new Fr(this.device, this.transparentRenderable, kk, ek)
      }
      createFrameBindGroup() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
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
              buffer: null !== ek && void 0 !== ek ? ek : this.slots.buffer
            }
          }]
        })
      }
      recordsGroup(kk, ek) {
        const ik = null !== ek && void 0 !== ek ? ek : kk;
        let Dk = this.recordsGroups.get(ik);
        return Dk || (Dk = this.createFrameBindGroup(kk, ek), this.recordsGroups.set(ik, Dk)), Dk
      }
      setChunkMesh(kk, ek, ik) {
        var Dk;
        let fk = this.chunks.get(kk);
        fk ? this.geometry.release(fk) : (fk = {
          mesh: kk,
          slot: this.slots.allocate(),
          origin: [ik[0], ik[1], ik[2]],
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
        }, this.chunks.set(kk, fk), this.writeSlot(fk)), fk.material = kk.material ? this.materialFor(kk.material) : null, fk.packed = !!ek.packedVertices, fk.vertexCount = (0, pr.d)(ek), fk.faceCount = fk.vertexCount / 4;
        const Sk = null !== (Dk = ek.faceGroups) && void 0 !== Dk ? Dk : null;
        if (fk.faceGroups = Sk, Sk) {
          const kk = Xr.o;
          fk.planePX = Sk[kk], fk.planeNX = Sk[kk + 1], fk.planePY = Sk[kk + 2], fk.planeNY = Sk[kk + 3], fk.planePZ = Sk[kk + 4], fk.planeNZ = Sk[kk + 5]
        }
        this.drawWhole(fk), 0 !== fk.faceCount && (this.geometry.set(fk, ek) ? (fk.packed && this.slots.setFaces(fk.slot, fk.vertices.start + fk.faceCount, fk.faceCount), ek.IU && this.setChunkMeshLight(kk, ek.IU)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${fk.vertexCount} vertices is more than a buffer may hold, and is left out.`))
      }
      setChunkMeshLight(kk, ek) {
        const ik = this.chunks.get(kk);
        ik && this.geometry.setLight(ik, ek)
      }
      drawStats() {
        let kk = this.transparent.length;
        for (const ek of this.opaqueBatches) kk += ek.meshes.length;
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
        const ek = this.chunks.get(kk);
        ek && (this.geometry.release(ek), this.slots.release(ek.slot), this.chunks.delete(kk))
      }
      remeshLost(kk, ek) {
        this.geometry.release(ek), ek.lostRetryAt = performance.now() + Math.min(6e4, 1e3 * 2 ** ek.lostRemeshes++);
        const ik = kk.Ux,
          [Dk, fk, Sk] = ik.tDk(ek.origin[0], ek.origin[1], ek.origin[2]),
          bk = ik.aH.WH(Dk, fk, Sk);
        bk && (bk.EH = !0, bk.XH = !0, ik.hH(bk, !1))
      }
      chooseFaceRanges(kk, ek, ik) {
        const Dk = this.faceRanges;
        kk.faceMask = ik, kk.rangeCount = (0, Br.p)(ek, ik, Dk), kk.first0 = Dk[0], kk.count0 = Dk[1], kk.first1 = Dk[2], kk.count1 = Dk[3]
      }
      drawWhole(kk) {
        kk.faceMask = -1, kk.faceEpoch = -1, kk.rangeCount = 1, kk.first0 = 0, kk.count0 = kk.faceCount
      }
      writeSlot(kk) {
        const [ek, ik, Dk] = this.originOffset;
        this.slots.set(kk.slot, kk.origin[0] - ek, kk.origin[1] - ik, kk.origin[2] - Dk, kk.visibility)
      }
      materialFor(kk) {
        const ek = this.materials.get(kk);
        if (ek) return ek;
        const ik = Yr(kk);
        if (!ik) return this.warnOnce(`material:${kk.name}`, `Lite terrain cannot draw material "${kk.name}"; its chunks are skipped.`), null;
        const {
          model: Dk,
          atlas: fk,
          texture: Sk,
          animated: bk,
          uniformData: rk
        } = ik, Pk = {
          id: this.materials.size,
          model: Dk,
          texture: Sk,
          animated: bk,
          uniformData: rk,
          uniformBuffer: this.device.createBuffer({
            label: `terrain-material-${kk.name}`,
            size: rk.byteLength,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
          }),
          liquid: ik.liquid,
          customRenderMat: ik.customRenderMat,
          atlasCount: 0,
          yJ: 0,
          atlasLayers: 0,
          bindGroup: null,
          bindGroupLayout: null,
          ready: Promise.resolve(),
          pipelineIds: [null, null, null, null]
        };
        return this.materials.set(kk, Pk), this.device.queue.writeBuffer(Pk.uniformBuffer, 0, rk), Pk.ready = this.createMaterialBindGroup(Pk, fk).catch((ek => {
          console.error(`Lite terrain failed to load the textures of material "${kk.name}"`, ek)
        })), Pk
      }
      materialLayout(kk) {
        const ek = function(kk) {
            const ek = ["uniforms"];
            if ("atlas" === kk.texture) {
              kk.animated && ek.push("animData"), ek.push("sampler");
              for (let ik = 0; ik < kk.atlasCount; ik++) ek.push("textureArray")
            } else "single" === kk.texture && ek.push("sampler", "texture");
            return ek
          }(kk),
          ik = ek.join(",");
        let Dk = this.materialLayouts.get(ik);
        if (!Dk) {
          const kk = GPUShaderStage.FRAGMENT;
          Dk = this.device.createBindGroupLayout({
            label: `terrain-material-${ik}`,
            entries: ek.map(((ek, ik) => {
              switch (ek) {
                case "uniforms":
                  return {
                    binding: ik, visibility: GPUShaderStage.VERTEX | kk, buffer: {
                      type: "uniform"
                    }
                  };
                case "animData":
                  return {
                    binding: ik, visibility: GPUShaderStage.VERTEX | kk, buffer: {
                      type: "read-only-storage"
                    }
                  };
                case "sampler":
                  return {
                    binding: ik, visibility: kk, sampler: {
                      type: "filtering"
                    }
                  };
                case "texture":
                  return {
                    binding: ik, visibility: kk, texture: {
                      sampleType: "float",
                      viewDimension: "2d"
                    }
                  };
                case "textureArray":
                  return {
                    binding: ik, visibility: kk, texture: {
                      sampleType: "float",
                      viewDimension: "2d-array"
                    }
                  }
              }
            }))
          }), this.materialLayouts.set(ik, Dk)
        }
        return Dk
      }
      async createMaterialBindGroup(kk, ek) {
        const ik = [{
          buffer: kk.uniformBuffer
        }];
        if (ek) {
          const {
            urls: Dk,
            pixels: fk,
            layerWidth: Sk
          } = ek.sources, bk = await Promise.all(Dk.map(((kk, ek) => {
            var ik;
            return Tf(this.device, kk, null !== (ik = null === fk || void 0 === fk ? void 0 : fk[ek]) && void 0 !== ik ? ik : null, Sk)
          })));
          kk.atlasCount = bk.length, kk.yJ = bk[0].layerWidth, kk.atlasLayers = bk[0].layers, ek.animDataPerTex && ik.push({
            buffer: vf(this.device, Float32Array.from(ek.animDataPerTex), GPUBufferUsage.STORAGE, "terrain-anim")
          }), ik.push(this.sampler);
          for (const kk of bk) ik.push(kk.texture.createView({
            dimension: "2d-array"
          }))
        } else if ("single" === kk.texture) {
          const {
            url: ek
          } = kk.model.diffuseTexture.source, {
            pixels: Dk,
            width: fk,
            height: Sk
          } = await Xf(ek);
          ik.push(this.sampler), ik.push(hf(this.device, Dk, fk, Sk, 1, `terrain-${ek}`).createView({
            dimension: "2d"
          }))
        }
        const Dk = this.materialLayout(this.programKey(kk, !1));
        kk.bindGroupLayout = Dk, kk.bindGroup = this.device.createBindGroup({
          label: `terrain-material-${kk.model.name}`,
          layout: Dk,
          entries: ik.map(((kk, ek) => ({
            binding: ek,
            resource: kk
          })))
        })
      }
      programKey(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Dk = ik ? ik.lighting : this.lighting,
          fk = ik ? ik.AU : this.AU,
          Sk = {
            texture: kk.texture,
            atlasCount: kk.atlasCount,
            yJ: kk.yJ,
            atlasLayers: kk.atlasLayers,
            animated: kk.animated,
            alphaTest: kk.model.transparencyMode === sk.r.alphaTest,
            lighting: Dk,
            dirLightCount: ik ? ik.dirLightCount : this.dirLightCount,
            packed: ek
          };
        if (!fk) return Sk;
        const bk = this.shaderPackFields(kk, fk),
          rk = "atlas" === kk.texture && kk.model.transparencyMode === sk.r.opaque && PD(bk.packVariant);
        return {
          ...Sk,
          ...bk,
          alphaTest: Sk.alphaTest || rk
        }
      }
      shaderPackFields(kk, ek) {
        const ik = this.packVariant(kk, ek);
        return void 0 === ik ? bD : {
          packVariant: ik,
          liquid: kk.liquid
        }
      }
      packVariant(kk, ek) {
        return kk.customRenderMat ? void 0 : function(kk, ek) {
          const ik = kk ? kk.defineFor(ek ? "liquid" : "terrain") : 0;
          return 0 === ik ? void 0 : ik
        }(ek, kk.liquid)
      }
      isBlended(kk) {
        return kk.model.transparencyMode === sk.r.alphaBlend
      }
      shaderModule(kk, ek) {
        let ik = this.modules.get(kk);
        return ik || (ik = this.device.createShaderModule({
          label: ek,
          code: kk
        }), this.modules.set(kk, ik)), ik
      }
      pipelineFor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!kk.bindGroupLayout) return null;
        if (!Dk) return this.pipelineOf(kk, ek, ik);
        const fk = this.pipelineIdNow(kk, ek, !0, ik),
          Sk = this.pipelines.get(fk);
        if (Sk) return Sk;
        const bk = this.pipelineOf(kk, ek, ik);
        return bk && void 0 === Sk && this.startPipeline(fk, kk, {
          ...this.programKey(kk, ek),
          resting: Dk
        }, ik), bk
      }
      pipelineOf(kk, ek, ik) {
        const Dk = this.pipelineIdNow(kk, ek, !1, ik),
          fk = this.pipelines.get(Dk);
        return void 0 !== fk ? fk : (this.startPipeline(Dk, kk, this.programKey(kk, ek), ik), null)
      }
      pipelineIdNow(kk, ek, ik, Dk) {
        const {
          lighting: fk,
          dirLightCount: Sk
        } = this, {
          transparencyMode: bk,
          backFaceCulling: rk
        } = kk.model, Pk = this.packVariant(kk, this.AU), mk = (ek ? 2 : 0) + (ik ? 1 : 0), Mk = kk.pipelineIds[mk];
        if (null !== Mk && Mk.lighting === fk && Mk.dirLightCount === Sk && Mk.packVariant === Pk && Mk.transparencyMode === bk && Mk.cull === rk && Mk.atlasCount === kk.atlasCount && Mk.yJ === kk.yJ && Mk.atlasLayers === kk.atlasLayers && Mk.colorFormat === Dk._colorFormat && Mk.depthStencilFormat === Dk._depthStencilFormat && Mk.sampleCount === Dk._sampleCount) return Mk.id;
        const Kk = this.programKey(kk, ek),
          xk = this.pipelineId(kk, ik ? {
            ...Kk,
            resting: ik
          } : Kk, Dk);
        return kk.pipelineIds[mk] = {
          id: xk,
          lighting: fk,
          dirLightCount: Sk,
          packVariant: Pk,
          transparencyMode: bk,
          cull: rk,
          atlasCount: kk.atlasCount,
          yJ: kk.yJ,
          atlasLayers: kk.atlasLayers,
          colorFormat: Dk._colorFormat,
          depthStencilFormat: Dk._depthStencilFormat,
          sampleCount: Dk._sampleCount
        }, xk
      }
      pipelineId(kk, ek, ik) {
        return kP(ek, this.isBlended(kk), kk.model.backFaceCulling, ik)
      }
      pipelineBuild(kk, ek, ik) {
        var Dk;
        const fk = this.pipelineId(kk, ek, ik);
        return null !== (Dk = this.builds.get(fk)) && void 0 !== Dk ? Dk : this.startPipeline(fk, kk, ek, ik)
      }
      startPipeline(kk, ek, ik, Dk) {
        var fk;
        this.pipelines.set(kk, null);
        const Sk = ID(ik),
          bk = this.isBlended(ek),
          rk = this.shadowMask && Dk._depthStencilFormat ? function(kk, ek, ik, Dk) {
            if (void 0 === kk.packVariant || kk.liquid || ek) return "none";
            const fk = (0, Fe.e)(kk.packVariant);
            return null === fk || void 0 === fk || !fk.sunShadow || !Wi(fk, ik) || fk.discards || kk.alphaTest && PD(kk.packVariant) ? "none" : Dk ? "edge" : "plain"
          }(ik, bk, !!this.sunShadow, Dk._sampleCount > 1) : "none";
        let Pk;
        try {
          Pk = zD(ik, !!this.sunShadow, rk)
        } catch (wk) {
          if (!xD(ik)) throw wk;
          return this.failedPackBuild(kk, ik, Sk, wk)
        }
        const mk = this.shaderModule(Pk, Sk),
          Mk = [];
        ik.packed || (Mk.push(function(kk, ek) {
          const ik = [{
            shaderLocation: gr.position,
            offset: se.d.gS,
            format: "float32x3"
          }, {
            shaderLocation: gr.normal,
            offset: se.d.normalOffset,
            format: "snorm8x4"
          }, {
            shaderLocation: gr.color,
            offset: se.d.colorOffset,
            format: "unorm8x4"
          }];
          return kk && ik.push({
            shaderLocation: gr.uv,
            offset: se.d.uvOffset,
            format: "float32x2"
          }), ek && ik.push({
            shaderLocation: gr.blockFlagWords,
            offset: se.d.normalOffset,
            format: "uint32x2"
          }), {
            arrayStride: se.d.strideWithoutAtlas,
            stepMode: "vertex",
            attributes: ik
          }
        }("none" !== ik.texture, xD(ik))), ik.lighting && Mk.push(Nr));
        const Kk = ek.model.backFaceCulling,
          xk = {
            label: Sk,
            layout: this.device.createPipelineLayout({
              bindGroupLayouts: [this.sceneLayout, this.frameLayout, ek.bindGroupLayout, ...OS(this.device, ik, !!this.sunShadow, "none" !== rk)]
            }),
            vertex: {
              module: mk,
              entryPoint: "mainVertex",
              buffers: Mk
            },
            fragment: Rk({
              module: mk,
              entryPoint: "mainFragment"
            }, Dk, bk ? Rr : null),
            depthStencil: Dk._depthStencilFormat ? {
              format: Dk._depthStencilFormat,
              depthCompare: null !== (fk = Dk._depthCompare) && void 0 !== fk ? fk : De,
              depthWriteEnabled: !0
            } : void 0,
            multisample: {
              count: Dk._sampleCount
            },
            primitive: {
              topology: "triangle-list",
              frontFace: "ccw",
              cullMode: Kk ? "back" : "none"
            }
          },
          nk = ik.resting ? 0 : 1;
        this.compiling += nk;
        const Uk = "none" === rk ? this.device.createRenderPipelineAsync(xk) : this.startMaskPipelines(mk, xk, "edge" === rk);
        Uk.then((ek => {
          this.compiling -= nk, this.pipelines.set(kk, ek)
        }), (kk => {
          this.compiling -= nk, console.error(`Lite terrain pipeline ${Sk} failed`, kk), tr(ik, Sk, mk, kk)
        }));
        const Hk = {
          name: Sk,
          module: mk,
          built: Uk
        };
        return this.builds.set(kk, Hk), Hk
      }
      startMaskPipelines(kk, ek, ik) {
        const Dk = ek.depthStencil,
          fk = this.device.createRenderPipelineAsync(ik ? ek : {
            ...ek,
            depthStencil: {
              ...Dk,
              depthCompare: "equal",
              depthWriteEnabled: !1
            }
          }),
          Sk = this.device.createRenderPipelineAsync({
            ...ek,
            label: `${ek.label}-prepass`,
            fragment: {
              module: kk,
              entryPoint: "prepassFragment",
              targets: [{
                format: ur
              }]
            },
            multisample: {
              count: 1
            }
          });
        return Promise.all([fk, Sk]).then((kk => {
          let [ek, ik] = kk;
          return this.prepassOf.set(ek, ik), this.maskPipelines++, ek
        }))
      }
      failedPackBuild(kk, ek, ik, Dk) {
        console.error(`Lite terrain pipeline ${ik} failed`, Dk), tr(ek, ik, null, Dk);
        const fk = Promise.reject(Dk);
        fk.catch((() => {}));
        const Sk = {
          name: ik,
          module: null,
          built: fk
        };
        return this.builds.set(kk, Sk), Sk
      }
      checkShaderPack(kk) {
        return hr(kk, {
          device: this.device,
          target: this.target,
          material: kk => this.materialFor(kk),
          programKey: (kk, ek, ik) => this.programKey(kk, ek, ik),
          pipelineBuild: (kk, ek, ik) => this.pipelineBuild(kk, ek, ik)
        })
      }
      createBinding(kk, ek, ik) {
        return this.target = ek, {
          renderable: kk,
          pipeline: re(this.device, ek),
          draw: kk => {
            this.geometry.setDrawing(!0);
            try {
              return ik ? this.drawTransparent(kk, ek) : this.drawOpaque(kk, ek)
            } finally {
              this.geometry.setDrawing(!1)
            }
          }
        }
      }
      prepare(kk, ek) {
        var ik, Dk, fk, Sk;
        const {
          Lx: bk
        } = kk;
        this.lighting = kk.ew;
        const rk = (0, lr.t)(ek);
        this.dirLightCount = Math.min(rk, 4), this.AU = null !== (ik = bk.AU) && void 0 !== ik ? ik : null, rk > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(kk, ek), this.animateMaterials(ek.animTick);
        const Pk = bk.Xx,
          mk = Pk[0] !== this.originOffset[0] || Pk[1] !== this.originOffset[1] || Pk[2] !== this.originOffset[2];
        mk && (this.originOffset[0] = Pk[0], this.originOffset[1] = Pk[1], this.originOffset[2] = Pk[2]);
        const Mk = ek.eye;
        this.eye[0] = Mk[0], this.eye[1] = Mk[1], this.eye[2] = Mk[2], this.writeShaderPackInputs();
        const Kk = ek.projectionMatrix,
          xk = 0 === Kk[15];
        let nk = 0;
        (mk || this.eye[0] !== this.faceEye[0] || this.eye[1] !== this.faceEye[1] || this.eye[2] !== this.faceEye[2]) && (this.faceEpoch++, this.faceEye[0] = this.eye[0], this.faceEye[1] = this.eye[1], this.faceEye[2] = this.eye[2]);
        let {
          faceEpoch: Uk
        } = this;
        Pe(this.transparentRenderable._worldCenter, ek, Se), this.resetBatches(xk), this.transparent.length = 0, this.unlit.length = 0;
        const Hk = bk.Ux.kkk,
          wk = Hk / 2 * Math.sqrt(3);
        let lk = 0;
        const pk = !!this.AU && rD(this.AU.defineFor("liquid"));
        let yk = !1;
        const Yk = null !== (Dk = null === (fk = bk.qY) || void 0 === fk ? void 0 : fk.visibility) && void 0 !== Dk ? Dk : null,
          Lk = this.visCull && xk && 0 === this.compiling && null !== Yk && bk.Ux.kDk[0] >= this.visCullMinDistance ? this.target : null,
          Ck = this.visPassable,
          Ak = this.visCandidates,
          jk = this.visCandidateBatches;
        Ck.clear(), this.visBatchDraws.clear(), this.visDrawsMaterial = null;
        let sk = 0;
        this.visCulledParts = 0, this.visCulledTriangles = 0;
        let dk = 0;
        const Vk = (kk, ik) => {
          if (!ik) return this.transparent.push(kk), void(dk += 2 * kk.faceCount);
          if (null !== kk.faceGroups && ik.faceCull) {
            if (0 === nk && (nk = (0, Br.d)(Kk, ek.renderWidth, ek.renderHeight), nk !== this.faceFocalPx && (this.faceFocalPx = nk, Uk = ++this.faceEpoch)), kk.faceEpoch !== Uk) {
              kk.faceEpoch = Uk;
              const ek = Math.sqrt(kk.distance) + wk,
                ik = (0, Br.l)(kk.planePX, kk.planeNX, kk.planePY, kk.planeNY, kk.planePZ, kk.planeNZ, this.eye[0] - (kk.origin[0] - this.originOffset[0]), this.eye[1] - (kk.origin[1] - this.originOffset[1]), this.eye[2] - (kk.origin[2] - this.originOffset[2]), (0, Br.h)(ek, nk));
              ik !== kk.faceMask && this.chooseFaceRanges(kk, kk.faceGroups, ik)
            }
            if (0 === kk.rangeCount) return
          } else - 1 !== kk.faceMask && this.drawWhole(kk);
          ik.meshes.push(kk), dk += 2 * ((kk.rangeCount > 0 ? kk.count0 : 0) + (kk.rangeCount > 1 ? kk.count1 : 0))
        };
        for (const uk of this.chunks.values()) {
          mk && this.writeSlot(uk);
          const kk = uk.mesh.visibility;
          kk !== uk.visibility && (uk.visibility = kk, this.slots.setVisibility(uk.slot, kk));
          const {
            material: ik
          } = uk;
          this.geometry.lost(uk) && performance.now() >= uk.lostRetryAt && this.remeshLost(bk, uk);
          const Dk = !(null === ik || void 0 === ik || !ik.bindGroup) && this.geometry.backed(uk),
            fk = Dk && this.lighting && !uk.vertices.page.twin;
          if (Lk && (Number.isNaN(uk.key) && (uk.ci = Math.floor(uk.origin[0] / Hk), uk.cj = Math.floor(uk.origin[1] / Hk), uk.ck = Math.floor(uk.origin[2] / Hk), uk.key = (0, Tr.e)(uk.ci, uk.cj, uk.ck)), (!Dk || kk < 1 || fk || !this.batchDraws(ik, uk.packed, Lk)) && this.visSeeThrough(uk, Lk) && Ck.add(uk.key)), !Dk) continue;
          fk || (uk.lostRemeshes = 0);
          const Sk = uk.origin[0] - this.originOffset[0],
            rk = uk.origin[1] - this.originOffset[1],
            Pk = uk.origin[2] - this.originOffset[2];
          if (!(0, Sr.c)(ek.frustum, Sk, rk, Pk, Hk)) continue;
          const Mk = Sk + Hk / 2 - this.eye[0],
            Kk = rk + Hk / 2 - this.eye[1],
            nk = Pk + Hk / 2 - this.eye[2];
          if (uk.distance = Mk * Mk + Kk * Kk + nk * nk, this.lighting && !uk.lit && (lk = Math.max(lk, uk.vertexCount), this.unlit.push(uk)), fk) continue;
          const Uk = this.isBlended(ik) ? null : this.batchFor(ik, uk.packed, uk.vertices.page, 1 === kk, xk);
          Lk ? (Ak[sk] = uk, jk[sk++] = Uk) : Vk(uk, Uk)
        }
        const Fk = Lk ? this.sweepVisibility(kk, ek, Yk) : null;
        null === (Sk = (0, ES.y)(bk)) || void 0 === Sk || Sk.update(ek.frustum, this.originOffset, Hk, Fk);
        for (let uk = 0; uk < sk; uk++) {
          const kk = Ak[uk];
          !Fk || Fk.isDrawn(kk.ci, kk.cj, kk.ck) ? Vk(kk, jk[uk]) : (this.visCulledParts++, this.visCulledTriangles += 2 * kk.faceCount)
        }
        for (const uk of this.transparent) yk ||= pk && uk.material.liquid && !uk.material.customRenderMat;
        this.submittedTriangles = dk, Fk && this.visCheck && ++this.visCheckFrame >= 60 && (this.visCheckFrame = 0, this.runVisCheck(kk, ek, Fk)), this.slots.flush(), this.sceneDepth ? this.sceneDepth.setWanted(yk) : yk && this.warnOnce("sceneDepth", "Lite: a shader pack reads scene depth on a page that didn't turn it on, so liquids find nothing behind them"), this.lighting && lk > 0 && this.geometry.lightFullSky(this.unlit, lk);
        for (const uk of this.opaqueBatches) this.chunkSorter.sort(uk.meshes, 1) || uk.meshes.sort(eP);
        this.orderBatches(), this.chunkSorter.sort(this.transparent, -1) || this.transparent.sort(iP)
      }
      sweepVisibility(kk, ek, ik) {
        const {
          Ux: Dk
        } = kk.Lx, fk = Dk.kkk, Sk = this.visPassable, bk = this.eye[0] + this.originOffset[0], rk = this.eye[1] + this.originOffset[1], Pk = this.eye[2] + this.originOffset[2];
        if (!ik.eyeClear(bk, rk, Pk, ek.near, ek.projectionMatrix, Dk)) return null;
        const [mk, Mk] = Dk.kDk, Kk = ik.update(bk, rk, Pk, fk, mk, Mk, Sk);
        return this.visSweeps = ik.sweeps, Kk ? ik : null
      }
      visSeeThrough(kk, ek) {
        const {
          material: ik
        } = kk;
        return (!ik || !this.isBlended(ik)) && (kk.mesh.visibility < 1 || !(null !== ik && void 0 !== ik && ik.bindGroup) || kk.faceCount > 0 && (!this.geometry.backed(kk) || this.lighting && !kk.vertices.page.twin) || !this.batchDraws(ik, kk.packed, ek))
      }
      batchDraws(kk, ek, ik) {
        var Dk;
        const fk = ek ? 2 : 0;
        if (kk === this.visDrawsMaterial && function(kk, ek) {
            return 0 !== (kk & 1 << ek)
          }(this.visDrawsBits, fk)) return 0 !== (this.visDrawsBits & 2 << fk);
        let Sk = null !== (Dk = this.visBatchDraws.get(kk)) && void 0 !== Dk ? Dk : 0;
        if (!(Sk & 1 << fk)) {
          Sk |= 1 << fk | (!!kk.bindGroupLayout && this.canDraw(kk, ek) && !!this.pipelines.get(this.pipelineIdNow(kk, ek, !1, ik)) ? 2 << fk : 0), this.visBatchDraws.set(kk, Sk)
        }
        return this.visDrawsMaterial = kk, this.visDrawsBits = Sk, 0 !== (Sk & 2 << fk)
      }
      runVisCheck(kk, ek, ik) {
        const {
          Lx: Dk
        } = kk, {
          Ux: fk
        } = Dk, Sk = fk.kkk, bk = new Set;
        for (const nk of this.chunks.values()) bk.add(nk.key);
        const rk = Af.Matrix.FromArray(ek.viewProjectionMatrix).invert(),
          [Pk, mk, Mk] = this.originOffset,
          Kk = new Af.eH,
          xk = function(kk, ek, ik, Dk) {
            const fk = new Set;
            for (let Sk = 0; Sk < 27; Sk++)
              for (let bk = 0; bk < 48; bk++) {
                const rk = ik((bk + .5) / 48 * 2 - 1, (Sk + .5) / 27 * 2 - 1);
                or(kk, ek, [rk[0] - ek[0], rk[1] - ek[1], rk[2] - ek[2]], Dk, fk)
              }
            return fk
          }({
            lT: (kk, ek, ik) => fk.lT(kk, ek, ik),
            occluders: ik.occluders,
            opaque: ik.opaque,
            oU: Sk,
            isDrawn: (kk, ek, Dk) => ik.isDrawn(kk, ek, Dk),
            hasParts: (kk, ek, ik) => bk.has((0, Tr.e)(kk, ek, ik))
          }, [this.eye[0] + Pk, this.eye[1] + mk, this.eye[2] + Mk], ((kk, ek) => (Af.eH.TransformCoordinatesFromFloatsToRef(kk, ek, .5, rk, Kk), [Kk.x + Pk, Kk.y + mk, Kk.z + Mk])), (fk.kDk[0] + 1) * Sk);
        this.visViolations = xk.size;
        for (const nk of xk) this.warnOnce(`vis:${nk}`, `Lite terrain cave culling skipped chunk ${nk}, which a ray from the eye reaches.`)
      }
      writeShaderPackInputs() {
        var kk;
        null !== (kk = this.AU) && void 0 !== kk && kk.isRunning() && (this.shaderPackInputs ??= new gS(this.device, this.AU.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.AU, this.eye, this.lighting))
      }
      bindShaderPackInputs(kk, ek, ik) {
        var Dk, fk, Sk, bk;
        let rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Pk = this.packVariant(ek, ik);
        if (void 0 === Pk) return;
        this.shaderPackInputs || (this.shaderPackInputs = new gS(this.device, ik.textureLayers(), this.sunShadow), this.shaderPackInputs.write(ik, this.eye, this.lighting));
        const mk = rD(Pk) ? null !== (Dk = null === (fk = this.sceneDepth) || void 0 === fk ? void 0 : fk.view) && void 0 !== Dk ? Dk : this.standIn() : null,
          Mk = rk ? null !== (Sk = null === (bk = this.shadowMask) || void 0 === bk ? void 0 : bk.view) && void 0 !== Sk ? Sk : this.standIn() : null;
        this.shaderPackInputs.bind(kk, mk, ZS(Pk, !!this.sunShadow), Mk)
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
        var kk, ek;
        return null !== (kk = null === (ek = this.shaderPackInputs) || void 0 === ek ? void 0 : ek.bindGroupFor(null, !0)) && void 0 !== kk ? kk : null
      }
      resetBatches(kk) {
        const ek = this.opaqueBatches;
        let ik = 0;
        for (const Dk of ek) Dk.meshes.length > 0 && (Dk.meshes.length = 0, Dk.faceCull = this.batchFaceCull(Dk.material, kk), ek[ik++] = Dk);
        ek.length = ik
      }
      orderBatches() {
        const kk = this.opaqueBatches;
        for (let ek = 0; ek < kk.length; ek++) {
          const ik = kk[ek];
          ik.group = ek;
          for (let Dk = 0; Dk < ek; Dk++) {
            const ek = kk[Dk];
            if (ek.material === ik.material && ek.packed === ik.packed) {
              ik.group = ek.group;
              break
            }
          }
          ik.nearest = ik.meshes.length > 0 ? ik.meshes[0].distance : 1 / 0
        }
        kk.sort(Zr)
      }
      batchFor(kk, ek, ik, Dk, fk) {
        for (const bk of this.opaqueBatches)
          if (bk.material === kk && bk.packed === ek && bk.page === ik && bk.resting === Dk) return bk;
        const Sk = {
          material: kk,
          packed: ek,
          page: ik,
          resting: Dk,
          meshes: [],
          group: 0,
          nearest: 0,
          faceCull: this.batchFaceCull(kk, fk)
        };
        return this.opaqueBatches.push(Sk), Sk
      }
      batchFaceCull(kk, ek) {
        return !(!ek || !(0, Xr.s)(kk.model)) && (!this.AU || ! function(kk) {
          var ek;
          return !(null === (ek = (0, Fe.e)(kk)) || void 0 === ek || !ek.movesVertices)
        }(this.packVariant(kk, this.AU)))
      }
      writeFrameUniforms(kk, ek) {
        const ik = this.frameUniforms,
          Dk = nD;
        if ((0, lr.w)(kk, ik), ik[Dk.fogInfos] = ek.fogEnabled ? ek.fogMode : 0, ik[Dk.fogInfos + 1] = ek.fogStart, ik[Dk.fogInfos + 2] = ek.fogEnd, ik[Dk.fogInfos + 3] = ek.fogDensity, ik.set(ek.fogColour, Dk.fogColour), ik[Dk.outputHeight] = ek.renderHeight, ik.set(ek.ambientColour, Dk.sceneAmbient), (0, lr.r)(ek, this.dirLightCount, this.dirLightUniforms), !this.aoLevelsWritten) {
          const ek = (0, pr.f)(kk.LH, kk.gU, kk.GU);
          for (let kk = 0; kk < 4; kk++) ik[Dk.aoLevels + kk] = ek[kk] / 255;
          this.aoLevelsWritten = !0
        }
        this.device.queue.writeBuffer(this.frameBuffer, 0, ik)
      }
      animateMaterials(kk) {
        const ek = HD.anim;
        for (const ik of this.materials.values()) ik.animated && (ik.uniformData[ek] = kk, this.device.queue.writeBuffer(ik.uniformBuffer, 4 * ek, ik.uniformData, ek, 1))
      }
      canDraw(kk, ek) {
        return !("atlas" === kk.texture && !ek) || (this.warnOnce(`stride:${kk.id}`, `Lite terrain: material "${kk.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
      }
      drawOpaque(kk, ek) {
        let ik = 0;
        kk.setBindGroup(1, this.frameBindGroup);
        for (const Dk of this.opaqueBatches) {
          if (!Dk.meshes.length || !this.canDraw(Dk.material, Dk.packed)) continue;
          const fk = this.pipelineFor(Dk.material, Dk.packed, ek, Dk.resting);
          fk && (kk.setPipeline(fk), kk.setBindGroup(2, Dk.material.bindGroup), this.AU && this.bindShaderPackInputs(kk, Dk.material, this.AU, this.prepassOf.has(fk)), ik += this.drawBatch(kk, Dk))
        }
        return ik
      }
      get readsMask() {
        return this.maskPipelines > 0
      }
      drawPrepass(kk, ek, ik) {
        const Dk = this.target,
          fk = this.AU;
        if (!Dk || !fk || 0 === this.maskPipelines) return 0;
        let Sk = 0,
          bk = null;
        this.geometry.setDrawing(!0);
        try {
          for (const rk of this.opaqueBatches) {
            if (!rk.meshes.length || !this.canDraw(rk.material, rk.packed)) continue;
            const Pk = this.pipelineFor(rk.material, rk.packed, Dk, rk.resting),
              mk = Pk && this.prepassOf.get(Pk);
            mk && (bk || (bk = kk.beginRenderPass(ek), bk.setBindGroup(0, ik), bk.setBindGroup(1, this.frameBindGroup)), bk.setPipeline(mk), bk.setBindGroup(2, rk.material.bindGroup), this.bindShaderPackInputs(bk, rk.material, fk, !0), Sk += this.drawBatch(bk, rk))
          }
        } finally {
          var rk;
          null === (rk = bk) || void 0 === rk || rk.end(), this.geometry.setDrawing(!1)
        }
        return Sk
      }
      drawBatch(kk, ek) {
        let ik = 0;
        for (const Dk of ek.meshes) {
          const {
            rangeCount: ek
          } = Dk;
          ek > 0 && (ik += this.geometry.draw(kk, Dk, this.lighting, Dk.first0, Dk.count0), ek > 1 && (ik += this.geometry.draw(kk, Dk, this.lighting, Dk.first1, Dk.count1)))
        }
        return ik
      }
      drawTransparent(kk, ek) {
        let ik = 0,
          Dk = null,
          fk = null;
        kk.setBindGroup(1, this.frameBindGroup);
        for (const Sk of this.transparent) {
          const bk = Sk.material;
          if (!this.canDraw(bk, Sk.packed)) continue;
          const rk = this.pipelineFor(bk, Sk.packed, ek);
          rk && (rk !== Dk && (kk.setPipeline(rk), Dk = rk, this.AU && this.bindShaderPackInputs(kk, bk, this.AU)), bk !== fk && (kk.setBindGroup(2, bk.bindGroup), fk = bk), ik += this.geometry.draw(kk, Sk, this.lighting))
        }
        return ik
      }
    }

    function kP(kk, ek, ik, Dk) {
      return `${ID(kk)}|${kk.atlasLayers}|${kk.yJ}|${ek}|${ik}|${Dk._colorFormat}|${Dk._depthStencilFormat}|${Dk._sampleCount}`
    }

    function eP(kk, ek) {
      return kk.distance - ek.distance
    }

    function iP(kk, ek) {
      return ek.distance - kk.distance
    }
    class DP {
      constructor() {
        this.left = []
      }
      sort(kk, ek) {
        for (let ik = 0; ik < kk.length; ik++) {
          const ek = kk[ik].distance;
          if (ek - ek !== 0) return !1
        }
        return this.sortRange(kk, 0, kk.length, ek), !0
      }
      sortRange(kk, ek, ik, Dk) {
        if (ik - ek <= 16) {
          for (let fk = ek + 1; fk < ik; fk++) {
            const ik = kk[fk],
              Sk = Dk * ik.distance;
            let bk = fk - 1;
            for (; bk >= ek && Dk * kk[bk].distance > Sk; bk--) kk[bk + 1] = kk[bk];
            kk[bk + 1] = ik
          }
          return
        }
        const fk = ek + ik >>> 1;
        if (this.sortRange(kk, ek, fk, Dk), this.sortRange(kk, fk, ik, Dk), Dk * kk[fk - 1].distance <= Dk * kk[fk].distance) return;
        const {
          left: Sk
        } = this, bk = fk - ek;
        for (let Mk = 0; Mk < bk; Mk++) Sk[Mk] = kk[ek + Mk];
        let rk = 0,
          Pk = fk,
          mk = ek;
        for (; rk < bk && Pk < ik;) kk[mk++] = Dk * kk[Pk].distance < Dk * Sk[rk].distance ? kk[Pk++] : Sk[rk++];
        for (; rk < bk;) kk[mk++] = Sk[rk++]
      }
    }
    const fP = Math.ceil(102);

    function SP(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ek;
      const Sk = Math.min(ek, ik),
        bk = new Uint32Array(ei(Dk));
      for (let rk = 0; rk < Dk; rk++) {
        const ek = Math.floor(rk * Sk / Dk),
          ik = Math.max(ek + 1, Math.floor((rk + 1) * Sk / Dk));
        for (let Pk = 0; Pk < Dk; Pk++) {
          const mk = Math.floor(Pk * Sk / Dk),
            Mk = Math.max(mk + 1, Math.floor((Pk + 1) * Sk / Dk));
          let Kk = 0;
          for (let Dk = ek; Dk < ik; Dk++)
            for (let ek = mk; ek < Mk; ek++) kk[Dk * fk + ek] >= fP && Kk++;
          if (2 * Kk >= (ik - ek) * (Mk - mk)) {
            const kk = Pk + Dk * rk;
            bk[kk >>> 5] |= 1 << (31 & kk)
          }
        }
      }
      return bk
    }

    function bP(kk) {
      return Math.max(1, Math.min(16, kk))
    }
    class rP {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : console.warn;
        this.sink = kk, this.loadTexture = ek, this.warn = ik, this.blockCaster = new Uint16Array(1), this.builtVersion = -1, this.byKey = new Map, this.nextCaster = 1, this.nextMaskWord = 0, this.warned = new Set, this.textures = new Map, this.loads = [], this.pending = Promise.resolve(), this.planesLoading = 0
      }
      update(kk, ek) {
        return (kk.iW !== this.builtVersion || this.blockCaster.length !== ek) && (this.build(kk, ek), !0)
      }
      build(kk, ek) {
        this.builtVersion = kk.iW;
        const ik = new Uint16Array(ek),
          Dk = new Map;
        for (let fk = 1; fk < ek; fk++) {
          const ek = this.classify(kk, fk, Dk);
          if (null === ek || ek === Ge) {
            ik[fk] = null === ek ? 0 : Ge;
            continue
          }
          let Sk = this.byKey.get(ek.key);
          void 0 === Sk && (Sk = this.allocate(ek), this.byKey.set(ek.key, Sk)), ik[fk] = Sk
        }
        this.blockCaster = ik, this.pending = Promise.all(this.loads).then((() => {}))
      }
      option(kk, ek) {
        const ik = kk.A4[ek];
        if ("function" !== typeof ik) return ik;
        try {
          return ik()
        } catch (Dk) {
          return this.warnOnce(`Sun shadows: no caster option for block ${ek}: ${Dk instanceof Error?Dk.message:String(Dk)}`), null
        }
      }
      classify(kk, ek, ik) {
        const Dk = this.option(kk, ek);
        if ("none" === Dk) return null;
        if (Dk && Dk.planes.length > 0) {
          const kk = Dk.planes.slice(0, 4);
          return {
            kind: "planes",
            key: `planes:${JSON.stringify(kk)}`,
            planes: kk
          }
        }
        if (kk.Fn[ek]) return null;
        const fk = kk.zn[ek] ? kk.fW(ek) : null;
        if (fk && fk.length >= 6) {
          const kk = function(kk) {
            const ek = new Uint32Array(16);
            for (let ik = 0; ik + 6 <= kk.length; ik += 6) {
              const Dk = [0, 1, 2].map((ek => Math.max(0, Math.ceil(8 * kk[ik + ek] - .5)))),
                fk = [0, 1, 2].map((ek => Math.min(7, Math.floor(8 * kk[ik + ek + 3] - .5))));
              for (let kk = Dk[2]; kk <= fk[2]; kk++)
                for (let ik = Dk[1]; ik <= fk[1]; ik++)
                  for (let Sk = Dk[0]; Sk <= fk[0]; Sk++) {
                    const Dk = Sk + 8 * (ik + 8 * kk);
                    ek[Dk >>> 5] |= 1 << (31 & Dk)
                  }
            }
            return ek
          }(fk);
          return function(kk) {
            return kk.every((kk => 4294967295 === kk))
          }(kk) ? Ge : kk.every((kk => 0 === kk)) ? null : {
            kind: "shape",
            key: `shape:${kk.join(",")}`,
            mask: kk
          }
        }
        if (kk.pC[ek] || !kk.CH[ek]) return null;
        const Sk = [0, 1, 2, 3, 4, 5].map((Dk => {
          const fk = kk.AH[6 * ek + Dk];
          let Sk = ik.get(fk);
          return void 0 === Sk && (Sk = function(kk) {
            if (!kk || kk.QH) return null;
            const {
              HJ: ek,
              yJ: ik,
              xJ: Dk
            } = kk;
            if (!ek || !ik || !(ik > 0) || void 0 === Dk || !(Dk >= 0)) return null;
            const fk = ek[0],
              Sk = ik * ik * 4;
            if (!fk || fk.byteLength < Sk) return null;
            const bk = Math.floor(fk.byteLength / Sk),
              rk = ek[Math.floor(Dk / bk)];
            if (!rk) return null;
            const Pk = new Uint8Array(rk.buffer, rk.byteOffset, rk.byteLength),
              mk = Dk % bk * Sk;
            if (mk + Sk > Pk.length) return null;
            const Mk = new Uint8Array(ik * ik);
            let Kk = !1;
            for (let xk = 0; xk < Mk.length; xk++) Mk[xk] = Pk[mk + 4 * xk + 3], Kk ||= Mk[xk] < fP;
            return Kk ? {
              alpha: Mk,
              width: ik
            } : null
          }(kk.zH(fk)), ik.set(fk, Sk)), Sk
        }));
        if (Sk.every((kk => null === kk))) return Ge;
        const bk = bP(Math.max(...Sk.map((kk => {
            var ek;
            return null !== (ek = null === kk || void 0 === kk ? void 0 : kk.width) && void 0 !== ek ? ek : 1
          })))),
          rk = new Uint32Array(ei(bk)).fill(4294967295),
          Pk = Sk.map((kk => null === kk ? rk : SP(kk.alpha, kk.width, kk.width, bk)));
        return {
          kind: "cutout",
          key: `cutout:${bk}:${Pk.map((kk=>kk.join(","))).join("|")}`,
          size: bk,
          faces: Pk
        }
      }
      allocate(kk) {
        if (this.nextCaster >= ii) return this.warnOnce("Sun shadows: more than 8191 casters; the rest cast nothing."), 0;
        const ek = this.nextCaster++;
        if (this.writeCaster(ek, Ne, 0, 0, 0), "shape" === kk.kind) {
          const ik = this.allocateMask(kk.mask.length);
          ik >= 0 && (this.sink(ik, kk.mask), this.writeCaster(ek, Re, ik, 0, 8))
        } else if ("cutout" === kk.kind) {
          const ik = ei(kk.size),
            Dk = this.allocateMask(6 * ik);
          if (Dk >= 0) {
            const fk = new Uint32Array(6 * ik);
            kk.faces.forEach(((kk, ek) => {
              fk.set(kk, ek * ik)
            })), this.sink(Dk, fk), this.writeCaster(ek, ki, Dk, 0, kk.size)
          }
        } else this.planesLoading++, this.loads.push(this.loadPlanes(ek, kk.planes).finally((() => {
          this.planesLoading--
        })));
        return ek
      }
      async loadPlanes(kk, ek) {
        const ik = await Promise.all(ek.map((kk => this.texture(kk.texture))));
        if (ik.some((kk => null === kk))) return;
        const Dk = ik,
          fk = bP(Math.max(...Dk.map((kk => Math.min(kk.width, kk.height))))),
          Sk = ei(fk),
          bk = this.allocateMask(ek.length * (4 + Sk));
        if (bk < 0) return;
        const rk = new Uint32Array(ek.length * (4 + Sk)),
          Pk = 4 * ek.length;
        ek.forEach(((kk, ek) => {
          const ik = bk + Pk + ek * Sk;
          rk.set(function(kk, ek) {
            const [ik, Dk] = kk.tangent, fk = Math.hypot(ik, Dk) || 1, Sk = ik / fk, bk = Dk / fk, rk = kk.centre[0] * bk - kk.centre[1] * Sk, Pk = new Uint32Array(4);
            return new Float32Array(Pk.buffer, 0, 3).set([Sk, bk, rk]), Pk[3] = ek, Pk
          }(kk, ik), 4 * ek), rk.set(SP(Dk[ek].alpha, Dk[ek].width, Dk[ek].height, fk), Pk + ek * Sk)
        })), this.sink(bk, rk), this.writeCaster(kk, Je, bk, ek.length, fk)
      }
      texture(kk) {
        let ek = this.textures.get(kk);
        return ek || (ek = this.loadTexture(kk).catch((ek => (this.warn(`Sun shadows: no mask for ${kk}: ${ek instanceof Error?ek.message:String(ek)}`), null))), this.textures.set(kk, ek)), ek
      }
      allocateMask(kk) {
        if (this.nextMaskWord + kk > Di) return this.warnOnce("Sun shadows: casters' masks are over 262144 words; the rest cast nothing."), -1;
        const ek = 32768 + this.nextMaskWord;
        return this.nextMaskWord += kk, ek
      }
      writeCaster(kk, ek, ik, Dk, fk) {
        this.sink(0 + 4 * kk, Uint32Array.of(ek, ik, Dk, fk))
      }
      warnOnce(kk) {
        this.warned.has(kk) || (this.warned.add(kk), this.warn(kk))
      }
    }
    var PP = ik(2776);

    function mP(kk) {
      return !kk.EH && !kk.eC && !kk.xH
    }

    function MP() {
      return {
        bricks: new Uint32Array(Xe),
        cells: new Uint16Array(32768),
        special: new Uint8Array(We)
      }
    }
    class KP {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : console.warn;
        this.casters = kk, this.writeVoxels = ek, this.writePool = ik, this.warn = Dk, this.eyeChunk = null, this.slotChunk = new Array(ze).fill(null), this.slotVersion = new Float64Array(ze).fill(-1), this.slotPool = new Array(ze).fill(null), this.starved = new Uint8Array(ze), this.queue = [], this.queued = new Uint8Array(ze), this.queueSorted = !0, this.freePool = new Uint32Array(fi), this.freeCount = fi, this.casterTable = null, this.warnedPool = !1, this.scratch = MP(), this.victimScratch = MP(), this.record = new Uint32Array(4), this.entry = new Uint32Array(32), this.records = new Int32Array(4 * ze), this.windowTopStale = !0, this.windowTop = new Uint32Array(1), this.encoded = null;
        for (let fk = 0; fk < fi; fk++) this.freePool[fk] = 65535 - fk
      }
      get queuedCount() {
        return this.queue.length
      }
      get poolInUse() {
        return fi - this.freeCount
      }
      chunkAdded(kk) {
        if (null === this.eyeChunk || !this.inRadius(kk.i, kk.j, kk.k)) return;
        const ek = Ze(kk.i, kk.j, kk.k);
        this.slotChunk[ek] = kk, this.slotVersion[ek] = -1, this.enqueue(ek)
      }
      update(kk, ek, ik) {
        const Dk = this.casters.blockCaster;
        if (Dk !== this.casterTable) {
          this.casterTable = Dk;
          for (let kk = 0; kk < ze; kk++) this.slotVersion[kk] = -1, this.slotChunk[kk] && this.enqueue(kk)
        }
        const fk = Math.floor(kk[0] / 32),
          Sk = Math.floor(kk[1] / 32),
          bk = Math.floor(kk[2] / 32);
        (null === this.eyeChunk || this.eyeChunk[0] !== fk || this.eyeChunk[1] !== Sk || this.eyeChunk[2] !== bk) && (this.eyeChunk = [fk, Sk, bk], this.follow(ek), this.queueSorted = !1, this.requeueStarved(), this.windowTopStale = !0);
        for (let rk = 0; rk < ze; rk++) {
          const kk = this.slotChunk[rk];
          kk && (kk.RL || kk.HH !== this.slotVersion[rk]) && this.enqueue(rk)
        }
        this.drain(ik), this.windowTopStale && this.writeWindowTop()
      }
      writeRecord(kk, ek) {
        this.records.set(ek, 4 * kk), this.windowTopStale = !0, this.writeVoxels(4 * kk, ek)
      }
      writeWindowTop() {
        this.windowTopStale = !1;
        const kk = this.records;
        let ek = -1 / 0;
        for (let Dk = 0; Dk < kk.length; Dk += 4) {
          const ik = 255 & kk[Dk + 3];
          ik !== Ee && ik !== he || !this.inRadius(kk[Dk], kk[Dk + 1], kk[Dk + 2]) || (ek = Math.max(ek, kk[Dk + 1] * ue + (kk[Dk + 3] >>> 8)))
        }
        const ik = ek === -1 / 0 ? 1 : ek + ce;
        ik !== this.windowTop[0] && (this.windowTop[0] = ik, this.writeVoxels(Be, this.windowTop))
      }
      follow(kk) {
        const ek = this.eyeChunk,
          [ik, Dk, fk] = qe;
        for (let bk = -fk; bk <= fk; bk++)
          for (let fk = -Dk; fk <= Dk; fk++)
            for (let Dk = -ik; Dk <= ik; Dk++) {
              var Sk;
              const ik = ek[0] + Dk,
                rk = ek[1] + fk,
                Pk = ek[2] + bk,
                mk = Ze(ik, rk, Pk),
                Mk = this.slotChunk[mk];
              if (Mk && !Mk.RL && Mk.i === ik && Mk.j === rk && Mk.k === Pk) continue;
              const Kk = null !== (Sk = kk(ik, rk, Pk)) && void 0 !== Sk ? Sk : null;
              Mk && (Mk.i !== ik || Mk.j !== rk || Mk.k !== Pk) && this.slotPool[mk] && (this.release(mk), this.record.fill(0), this.writeRecord(mk, this.record)), this.slotChunk[mk] = Kk, this.slotVersion[mk] = -1, (Kk || Mk) && this.enqueue(mk)
            }
      }
      requeueStarved() {
        for (let kk = 0; kk < ze; kk++) this.starved[kk] && this.slotChunk[kk] && this.enqueue(kk)
      }
      enqueue(kk) {
        this.queued[kk] || (this.queued[kk] = 1, this.queue.push(kk), this.queueSorted = !1)
      }
      drain(kk) {
        if (0 === this.queue.length) return;
        if (!this.queueSorted) {
          const kk = new Map;
          for (const ek of this.queue) kk.set(ek, this.slotDistance(ek));
          this.queue.sort(((ek, ik) => kk.get(ik) - kk.get(ek))), this.queueSorted = !0
        }
        const ek = performance.now();
        let ik = 0;
        const Dk = [];
        for (; this.queue.length > 0 && (0 === ik || performance.now() - ek < kk);) {
          const kk = this.queue.pop(),
            ek = this.slotChunk[kk];
          !ek || ek.RL || mP(ek) ? (this.queued[kk] = 0, this.encodeSlot(kk), ik++) : Dk.push(kk)
        }
        for (let fk = Dk.length - 1; fk >= 0; fk--) this.queue.push(Dk[fk])
      }
      slotDistance(kk) {
        const ek = this.slotChunk[kk],
          ik = this.eyeChunk;
        return ek ? Math.max(Math.abs(ek.i - ik[0]), Math.abs(ek.j - ik[1]), Math.abs(ek.k - ik[2])) : 0
      }
      inRadius(kk, ek, ik) {
        const Dk = this.eyeChunk,
          [fk, Sk, bk] = qe;
        return Math.abs(kk - Dk[0]) <= fk && Math.abs(ek - Dk[1]) <= Sk && Math.abs(ik - Dk[2]) <= bk
      }
      release(kk) {
        const ek = this.slotPool[kk];
        if (ek) {
          for (let kk = ek.length - 1; kk >= 0; kk--) this.freePool[this.freeCount++] = ek[kk];
          this.slotPool[kk] = null
        }
      }
      encodeSlot(kk) {
        var ek, ik, Dk, fk, Sk;
        let bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.scratch,
          rk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const Pk = null !== (ek = null === (ik = this.slotPool[kk]) || void 0 === ik ? void 0 : ik.length) && void 0 !== ek ? ek : 0;
        this.release(kk), this.starved[kk] = 0;
        const mk = this.slotChunk[kk],
          Mk = this.record;
        if (!mk || mk.RL || !mk.gx) return this.slotChunk[kk] = null, this.slotVersion[kk] = -1, Mk.fill(0), this.writeRecord(kk, Mk), void(Pk > 0 && this.requeueStarved());
        this.slotVersion[kk] = mk.HH;
        const Kk = this.encodeBricks(mk, kk, bk, rk);
        Mk[0] = mk.i, Mk[1] = mk.j, Mk[2] = mk.k, Mk[3] = Kk, this.writeRecord(kk, Mk), null === (Dk = this.encoded) || void 0 === Dk || Dk.call(this, mk), rk && (null !== (fk = null === (Sk = this.slotPool[kk]) || void 0 === Sk ? void 0 : Sk.length) && void 0 !== fk ? fk : 0) < Pk && this.requeueStarved()
      }
      encodeBricks(kk, ek, ik, Dk) {
        if (kk.QU) return ve;
        const fk = this.casters.blockCaster,
          {
            data: Sk,
            stride: bk,
            offset: rk
          } = kk.gx,
          [Pk, mk, Mk] = bk,
          Kk = ue,
          {
            bricks: xk,
            cells: nk,
            special: Uk
          } = ik;
        xk.fill(0), Uk.fill(0);
        let Hk = 0,
          wk = 0,
          lk = 0;
        for (let pk = 0; pk < Kk; pk++) {
          const ek = pk >> 2,
            ik = 3 & pk,
            Dk = kk.kU[pk],
            bk = Dk === PP.h ? -1 : Dk < fk.length ? fk[Dk] : 0;
          if (0 !== bk)
            for (let kk = 0; kk < Kk; kk++) {
              const Dk = kk >> 2,
                yk = 3 & kk;
              let Yk = rk + kk * Pk + pk * mk;
              for (let kk = 0; kk < Kk; kk++, Yk += Mk) {
                let rk = bk;
                if (rk < 0) {
                  const kk = Sk[Yk];
                  if (rk = kk < fk.length ? fk[kk] : 0, 0 === rk) continue
                }
                const Pk = Oe(Dk, ek, kk >> 2),
                  mk = ge(yk, ik, 3 & kk);
                xk[3 * Pk + (mk >>> 5)] |= 1 << (31 & mk), nk[Pk * ae + mk] = rk, Hk++, lk = pk, rk === Ge ? wk++ : Uk[Pk] = 1
              }
            }
        }
        return 0 === Hk ? ve : 32768 === wk ? Ee | lk << 8 : (this.writePoolEntries(ek, ik, Dk), this.writeVoxels(te + ek * Xe, xk), he | lk << 8)
      }
      writePoolEntries(kk, ek, ik) {
        const {
          bricks: Dk,
          cells: fk,
          special: Sk
        } = ek, bk = this.entry;
        let rk = 0;
        for (let Mk = 0; Mk < We; Mk++) rk += Sk[Mk];
        if (0 === rk) return;
        ik && this.freeCount < rk && this.evictBeyond(kk, rk);
        const Pk = new Uint32Array(ik ? Math.min(rk, this.freeCount) : 0);
        let mk = 0;
        for (let Mk = 0; Mk < We; Mk++) {
          if (!Sk[Mk]) continue;
          const ik = 3 * Mk;
          if (mk === Pk.length) {
            this.dropSpecials(ek, Mk), this.starved[kk] = 1;
            continue
          }
          const rk = this.freePool[--this.freeCount];
          Pk[mk++] = rk;
          for (let kk = 0; kk < ae; kk++) {
            const ek = Dk[ik + (kk >>> 5)] >>> (31 & kk) & 1 ? fk[Mk * ae + kk] : 0;
            1 & kk ? bk[kk >> 1] |= ek << 16 : bk[kk >> 1] = ek
          }
          Dk[ik + 2] = rk + 1, this.writePool(Si + 32 * rk, bk)
        }
        Pk.length > 0 && (this.slotPool[kk] = Pk)
      }
      evictBeyond(kk, ek) {
        const ik = this.slotDistance(kk),
          Dk = [];
        for (let fk = 0; fk < ze; fk++) fk !== kk && this.slotPool[fk] && this.slotDistance(fk) > ik && Dk.push(fk);
        Dk.sort(((kk, ek) => this.slotDistance(ek) - this.slotDistance(kk)));
        for (const fk of Dk) {
          if (this.freeCount >= ek) return;
          const kk = this.slotChunk[fk];
          kk && !kk.RL && kk.gx && (kk.HH === this.slotVersion[fk] || mP(kk)) && this.encodeSlot(fk, this.victimScratch, !1)
        }
      }
      dropSpecials(kk, ek) {
        this.warnedPool || (this.warnedPool = !0, this.warn("Sun shadows: the special pool's 65536 entries are in use; plants and shapes in the furthest chunks cast nothing."));
        const ik = 3 * ek;
        for (let Dk = 0; Dk < ae; Dk++) kk.cells[ek * ae + Dk] !== Ge && (kk.bricks[ik + (Dk >>> 5)] &= ~(1 << (31 & Dk)))
      }
    }
    var xP = ik(37075);
    class nP {
      constructor(kk) {
        this.device = kk, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new wi, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Ux = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = kk.createBuffer({
          label: "sun-shadow-entities",
          size: 589828,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.gridBuffer = kk.createBuffer({
          label: "sun-shadow-entity-grids",
          size: 16777216,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
      }
      update(kk, ek, ik) {
        this.gridsFull && (this.gridsFull = !1, this.grids = new WeakMap, this.gridTop = 0), this.bakeDeadline = -1;
        const {
          frame: Dk
        } = this;
        Dk.tn(kk, ek), ik.forEachSunShadowCaster((kk => {
          this.add(kk)
        })), Dk.finish();
        const fk = 0 === Dk.parts;
        if (fk && this.uploadedEmpty) return;
        this.uploadedEmpty = fk;
        const {
          queue: Sk
        } = this.device, {
          words: bk
        } = Dk;
        Sk.writeBuffer(this.frameBuffer, 0, bk, 0, 16385), Dk.refs > 0 && Sk.writeBuffer(this.frameBuffer, 65540, bk, mi, Dk.refs), fk || Sk.writeBuffer(this.frameBuffer, 327684, bk, Mi, Dk.parts * Pi)
      }
      add(kk) {
        const ek = this.gridFor(kk);
        if (!ek) return;
        const {
          frame: ik
        } = this, {
          Ux: Dk,
          worldAt: fk,
          instances: Sk,
          instanceCount: bk,
          thin: rk
        } = kk;
        if (Sk)
          for (let Pk = 0; Pk < bk; Pk++) rk ? (yi(Sk, 16 * Pk, Dk, fk, this.Ux), ik.add(ek, this.Ux)) : ik.add(ek, Sk, 16 * Pk);
        else ik.add(ek, Dk, fk)
      }
      gridFor(kk) {
        let {
          geometry: ek,
          indexed: ik,
          first: Dk,
          count: fk,
          skip: Sk
        } = kk, bk = this.grids.get(ek);
        bk || (bk = new Map, this.grids.set(ek, bk));
        const rk = `${ik?Dk:-1-Dk}:${fk}:${null!==Sk&&void 0!==Sk?Sk:""}`;
        let Pk = bk.get(rk);
        if (void 0 !== Pk || this.gridsFull) return Pk;
        const mk = performance.now();
        if (this.bakeDeadline < 0) this.bakeDeadline = mk + 2;
        else if (mk > this.bakeDeadline) return;
        return Pk = this.bake(ek, ik, Dk, fk, Sk), void 0 !== Pk && bk.set(rk, Pk), Pk
      }
      bake(kk, ek, ik, Dk, fk) {
        const Sk = kk.vertexAttributes.find((kk => "position" === kk.kind)),
          bk = Sk ? function(kk, ek, ik, Dk) {
            let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Sk = kk => ek ? ek[ik + kk] : ik + kk,
              bk = kk => null !== fk && [0, 1, 2].some((ek => {
                const ik = Sk(kk + ek);
                return ik >= fk[0] && ik < fk[1]
              })),
              rk = [1 / 0, 1 / 0, 1 / 0],
              Pk = [-1 / 0, -1 / 0, -1 / 0];
            for (let pk = 0; pk + 2 < Dk; pk += 3)
              if (!bk(pk))
                for (let ek = 0; ek < 3; ek++) {
                  const ik = Sk(pk + ek);
                  for (let ek = 0; ek < 3; ek++) rk[ek] = Math.min(rk[ek], kk[3 * ik + ek]), Pk[ek] = Math.max(Pk[ek], kk[3 * ik + ek])
                }
            const mk = Math.max(Pk[0] - rk[0], Pk[1] - rk[1], Pk[2] - rk[2]);
            if (!(mk > 0)) return null;
            const Mk = mk / 64,
              Kk = [0, 0, 0],
              xk = [0, 0, 0],
              nk = [0, 0, 0];
            for (let pk = 0; pk < 3; pk++) Kk[pk] = Math.min(65, Math.ceil((Pk[pk] - rk[pk]) / Mk) + 1), xk[pk] = rk[pk] - Mk / 2, nk[pk] = xk[pk] + Kk[pk] * Mk;
            const Uk = new Uint32Array(Math.ceil(Kk[0] * Kk[1] * Kk[2] / 32)),
              Hk = new Float64Array(9),
              wk = [0, 0, 0],
              lk = [0, 0, 0];
            for (let pk = 0; pk + 2 < Dk; pk += 3)
              if (!bk(pk)) {
                for (let ek = 0; ek < 3; ek++) {
                  const ik = Sk(pk + ek);
                  for (let Dk = 0; Dk < 3; Dk++) Hk[3 * ek + Dk] = kk[3 * ik + Dk]
                }
                for (let kk = 0; kk < 3; kk++) {
                  const ek = Math.min(Hk[kk], Hk[3 + kk], Hk[6 + kk]),
                    ik = Math.max(Hk[kk], Hk[3 + kk], Hk[6 + kk]);
                  wk[kk] = Math.max(0, Math.floor((ek - xk[kk]) / Mk - 1e-6)), lk[kk] = Math.min(Kk[kk] - 1, Math.floor((ik - xk[kk]) / Mk + 1e-6))
                }
                for (let kk = wk[2]; kk <= lk[2]; kk++)
                  for (let ek = wk[1]; ek <= lk[1]; ek++)
                    for (let ik = wk[0]; ik <= lk[0]; ik++)
                      if (Yi(Hk, xk[0] + (ik + .5) * Mk, xk[1] + (ek + .5) * Mk, xk[2] + (kk + .5) * Mk, Mk / 2)) {
                        const Dk = ik + Kk[0] * (ek + Kk[1] * kk);
                        Uk[Dk >>> 5] |= 1 << (31 & Dk)
                      }
              } return {
              words: Uk,
              lo: xk,
              hi: nk,
              cell: Mk,
              dims: Kk
            }
          }((0, xP.e)(Sk, kk.vertexCount), ek ? kk.indexData : null, ik, Dk, fk) : null;
        if (!bk) return null;
        const {
          words: rk,
          ...Pk
        } = bk;
        if (this.gridTop + rk.length > xi) return void(this.gridsFull = !0);
        const mk = this.gridTop;
        return this.gridTop += rk.length, this.device.queue.writeBuffer(this.gridBuffer, 4 * mk, rk), {
          ...Pk,
          at: mk
        }
      }
    }
    const UP = Math.cos(1 * Math.PI / 180);

    function HP(kk, ek) {
      return kk[0] * ek[0] + kk[1] * ek[1] + kk[2] * ek[2] < UP
    }
    async function wP(kk) {
      const {
        pixels: ek,
        width: ik,
        height: Dk
      } = await Xf(kk), fk = new Uint8Array(ik * Dk);
      for (let Sk = 0; Sk < fk.length; Sk++) fk[Sk] = ek[4 * Sk + 3];
      return {
        width: ik,
        height: Dk,
        alpha: fk
      }
    }
    class lP {
      constructor(kk, ek) {
        this.device = kk, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Ci.n), this.entities = void 0, this.entityStandIn = void 0, this.entitiesThisFrame = !1, this.window = null, this.casters = null, this.uniformData = new ArrayBuffer(128), this.uniformInts = new Int32Array(this.uniformData), this.uniformFloats = new Float32Array(this.uniformData), this.uniformWritten = null, this.eye = [0, 0, 0], this.warned = !1, this.volumePass = null, this.volumePassStarted = !1, this.volumePassFailed = !1, this.volumeHolds = null, this.slice = 0, this.sweepLeft = 0, this.written = !1, this.sweptChunk = [0, 0, 0], this.sweptLight = [0, 0, 0], this.stale = [], this.staleAll = !1, this.staleAllSwept = 0, this.castersWritten = !1, this.swept = 0, this.fastLeft = 0, this.paced = 0, this.staleNear = [0, 0, 0], this.uniform = kk.createBuffer({
          label: "sun-shadow",
          size: 128,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.voxelBuffer = kk.createBuffer({
          label: "sun-shadow-voxels",
          size: 4 * Te,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.special = kk.createBuffer({
          label: "sun-shadow-special",
          size: 9568256,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });
        const [ik, Dk, fk] = Ci.r;
        this.volume = kk.createTexture({
          label: "sun-shadow-volume",
          size: {
            width: ik,
            height: Dk,
            depthOrArrayLayers: fk
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
          size: Ci.n,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        }), this.entities = ek ? new nP(kk) : null, this.entityStandIn = ek ? null : kk.createBuffer({
          label: "sun-shadow-entities-stand-in",
          size: 16,
          usage: GPUBufferUsage.STORAGE
        })
      }
      get tracesEntities() {
        return null !== this.entities
      }
      describePendingWork() {
        var kk, ek;
        const ik = [];
        !this.volumePassStarted || this.volumePass || this.volumePassFailed || ik.push("Lite sun shadow volume pipeline compiling");
        const Dk = null !== (kk = null === (ek = this.casters) || void 0 === ek ? void 0 : ek.planesLoading) && void 0 !== kk ? kk : 0;
        return Dk > 0 && ik.push(`${Dk} Lite sun shadow plane casters loading their textures`), ik
      }
      entries() {
        var kk, ek, ik, Dk;
        const fk = Ve.o;
        return [{
          binding: fk.uniform,
          resource: {
            buffer: this.uniform
          }
        }, {
          binding: fk.gx,
          resource: {
            buffer: this.voxelBuffer
          }
        }, {
          binding: fk.special,
          resource: {
            buffer: this.special
          }
        }, {
          binding: fk.volume,
          resource: this.volumeView
        }, {
          binding: fk.sampler,
          resource: this.volumeSampler
        }, {
          binding: fk.entities,
          resource: {
            buffer: null !== (kk = null === (ek = this.entities) || void 0 === ek ? void 0 : ek.frameBuffer) && void 0 !== kk ? kk : this.entityStandIn
          }
        }, {
          binding: fk.entityGrids,
          resource: {
            buffer: null !== (ik = null === (Dk = this.entities) || void 0 === Dk ? void 0 : Dk.gridBuffer) && void 0 !== ik ? ik : this.entityStandIn
          }
        }]
      }
      prepare(kk, ek, ik) {
        var Dk;
        this.entitiesThisFrame = !1;
        const fk = null !== (Dk = null === ik || void 0 === ik ? void 0 : ik.sunShadowReach()) && void 0 !== Dk ? Dk : {
          sunShadow: !1,
          airShadow: !1
        };
        if (!ik || !fk.sunShadow && !fk.airShadow) return void(this.volumeHolds = null);
        if (kk.Ux.kkk !== ue) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${kk.Ux.kkk}; everything is lit.`)));
        const Sk = this.start(kk);
        this.casters.update(kk.dn, kk.dn.zn.length);
        const bk = kk.Xx;
        for (let xk = 0; xk < 3; xk++) this.eye[xk] = ek[xk] + bk[xk];
        const rk = (0, Ci.y)(this.eye);
        this.staleNear = rk;
        const Pk = kk.Ux.aH;
        Sk.update(this.eye, ((kk, ek, ik) => Pk.WH(kk, ek, ik)), 1);
        const mk = (0, Ci.t)(ik.Z5()),
          Mk = Sk.eyeChunk,
          Kk = this.uniformInts;
        for (let xk = 0; xk < 3; xk++) Kk[xk] = Mk[xk], Kk[4 + xk] = rk[xk];
        this.entitiesThisFrame = null !== this.entities && fk.sunShadow, this.entitiesThisFrame && Hi(this.uniformFloats, 8, ek, mk), null !== this.volumeHolds && (this.castersWritten || HP(mk, this.sweptLight)) && (this.staleAll = !0, this.staleAllSwept = this.swept), this.castersWritten = !1, this.writeStale(), this.writeUniform(), this.computeVolume(rk, mk, Mk)
      }
      markStale(kk) {
        const ek = this.staleNear,
          ik = ue,
          Dk = [kk.i * ik, kk.j * ik, kk.k * ik];
        for (let Sk = 0; Sk < 3; Sk++)
          if (Dk[Sk] + ik <= ek[Sk] - ik || Dk[Sk] >= ek[Sk] + Ci.r[Sk] + ik) return;
        if (this.staleAll) return void(this.staleAllSwept = this.swept);
        const fk = this.stale;
        for (let Sk = 0; Sk < fk.length; Sk += 4)
          if (fk[Sk] === kk.i && fk[Sk + 1] === kk.j && fk[Sk + 2] === kk.k) return void(fk[Sk + 3] = this.swept);
        if (16 === fk.length) return this.staleAll = !0, void(this.staleAllSwept = this.swept);
        fk.push(kk.i, kk.j, kk.k, this.swept)
      }
      writeStale() {
        const kk = this.swept,
          ek = this.stale;
        this.staleAll && kk - this.staleAllSwept >= Ci.j && (this.staleAll = !1, ek.length = 0);
        let ik = 0;
        for (let fk = 0; fk < ek.length; fk += 4)
          if (kk - ek[fk + 3] < Ci.j) {
            for (let kk = 0; kk < 4; kk++) ek[ik + kk] = ek[fk + kk];
            ik += 4
          } ek.length = ik;
        const Dk = this.uniformInts;
        Dk[3] = this.staleAll ? 5 : ik / 4;
        for (let fk = 0; fk < 4; fk++)
          for (let kk = 0; kk < 3; kk++) Dk[16 + 4 * fk + kk] = 4 * fk < ik ? ek[4 * fk + kk] * ue : 0
      }
      writeUniform() {
        const kk = this.uniformInts;
        let ek = this.uniformWritten;
        if (ek) {
          let ik = !0;
          for (let Dk = 0; Dk < kk.length && ik; Dk++) ik = kk[Dk] === ek[Dk];
          if (ik) return
        }
        ek ??= this.uniformWritten = new Int32Array(kk.length), ek.set(kk), this.device.queue.writeBuffer(this.uniform, 0, this.uniformData)
      }
      traceEntities(kk) {
        this.entitiesThisFrame && this.entities.update(this.uniformFloats, 8, kk)
      }
      computeVolume(kk, ek, ik) {
        const Dk = this.buildVolumePass();
        if (!Dk) return void(this.volumeHolds = null);
        const fk = (0, Ci.x)(this.volumeHolds, kk);
        this.volumeHolds = kk;
        const Sk = 1 === fk.length && fk[0].size.every(((kk, ek) => kk === Ci.r[ek])),
          bk = this.sweptChunk,
          rk = this.sweptLight,
          Pk = ek[0] !== rk[0] || ek[1] !== rk[1] || ek[2] !== rk[2],
          mk = ik[0] !== bk[0] || ik[1] !== bk[1] || ik[2] !== bk[2],
          Mk = Pk && HP(ek, rk);
        if ((Sk || this.written || mk || Mk) && (this.fastLeft = Ci.j), Sk || this.written || Pk || mk) {
          this.written = !1;
          for (let kk = 0; kk < 3; kk++) bk[kk] = ik[kk], rk[kk] = ek[kk];
          this.sweepLeft = Sk ? 0 : Ci.j
        }
        if (Sk ? this.swept += Ci.j : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, fk.push(...(0, Ci.C)(kk, this.slice)), this.slice = (this.slice + 1) % Ci.j, this.swept++), 0 === fk.length) return;
        const Kk = (0, Ci.G)(this.workData, ek, fk);
        this.device.queue.writeBuffer(this.work, 0, this.workData);
        const xk = this.device.createCommandEncoder({
            label: "sun-shadow-volume"
          }),
          nk = xk.beginComputePass({
            label: "sun-shadow-volume"
          });
        nk.setPipeline(Dk.pipeline), nk.setBindGroup(si.group, Dk.bindGroup), nk.dispatchWorkgroups(Math.ceil(Kk / Ci.k)), nk.end(), this.device.queue.submit([xk.finish()])
      }
      buildVolumePass() {
        if (this.volumePass || this.volumePassStarted) return this.volumePass;
        this.volumePassStarted = !0;
        const kk = si,
          ek = GPUShaderStage.COMPUTE,
          ik = this.device.createBindGroupLayout({
            label: "sun-shadow-volume",
            entries: [{
              binding: kk.uniform,
              visibility: ek,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: kk.gx,
              visibility: ek,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: kk.special,
              visibility: ek,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: kk.work,
              visibility: ek,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: kk.volume,
              visibility: ek,
              storageTexture: {
                access: "write-only",
                format: "rgba8unorm",
                viewDimension: "3d"
              }
            }]
          }),
          Dk = this.device.createBindGroup({
            label: "sun-shadow-volume",
            layout: ik,
            entries: [{
              binding: kk.uniform,
              resource: {
                buffer: this.uniform
              }
            }, {
              binding: kk.gx,
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
            bindGroupLayouts: [ik]
          }),
          compute: {
            module: this.device.createShaderModule({
              label: "sun-shadow-volume",
              code: di()
            }),
            entryPoint: "main"
          }
        }).then((kk => {
          this.volumePass = {
            pipeline: kk,
            bindGroup: Dk
          }
        }), (kk => {
          this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(kk)}`)
        })), null
      }
      start(kk) {
        if (this.window) return this.window;
        const ek = (kk, ek) => {
          this.written = !0, this.device.queue.writeBuffer(this.special, 4 * kk, ek)
        };
        this.casters = new rP(((kk, ik) => {
          this.castersWritten = !0, ek(kk, ik)
        }), wP);
        const ik = new KP(this.casters, ((kk, ek) => {
          this.written = !0, this.device.queue.writeBuffer(this.voxelBuffer, 4 * kk, ek)
        }), ek);
        return ik.encoded = kk => {
          this.markStale(kk)
        }, kk.Ux.on("chunkAdded", (kk => {
          ik.chunkAdded(kk)
        })), this.window = ik, ik
      }
    }
    var pP = ik(38282),
      yP = ik(38287);
    const YP = 0,
      LP = 3,
      CP = 4,
      AP = 5;

    function jP(kk, ek, ik, Dk) {
      kk.drawOffset(ek, Dk + YP), ek[Dk + LP] = kk.drawTime(), ik[Dk + CP] = kk.ring.drawStart(), ik[Dk + AP] = kk.ring.drawCount()
    }
    const sP = `\n${pD}\n\nconst MAX_STOPS = ${yP.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${yP.b/4}>,\n\tcolor1: array<vec4f, ${yP.b}>,\n\tcolor2: array<vec4f, ${yP.b}>,\n\t// Position, factor and factor2 per stop.\n\tvelocity: array<vec4f, ${yP.b}>,\n\t// Position, min and max per stop.\n\tremap: array<vec4f, ${yP.b}>,\n}\n\n// A particle as spawned: position relative to the frame offset and spawn time; direction times emit power and\n// lifetime; size, random seed and colour.\nstruct Particle {\n\tspawn: vec4f,\n\tvelocity: vec4f,\n\tsize: f32,\n\tseed: u32,\n\tcolour: vec4f,\n}\n\nstruct SystemFrame {\n\toffset: vec3f,\n\tnow: f32,\n\t// The slot drawn first (the oldest), and the slots in use.\n\tstart: u32,\n\tcount: u32,\n}\n\n@group(1) @binding(0) var<uniform> system: SystemUniforms;\n@group(1) @binding(1) var<storage, read> particles: array<Particle>;\n@group(1) @binding(2) var diffuseSampler: sampler;\n@group(1) @binding(3) var diffuseTexture: texture_2d<f32>;\n@group(1) @binding(4) var rampSampler: sampler;\n@group(1) @binding(5) var rampTexture: texture_2d<f32>;\n@group(2) @binding(0) var<uniform> frame: SystemFrame;\n\n// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\noverride MULTIPLY_PASS: bool = false;\n\nstruct VertexOutput {\n\t@builtin(position) position: vec4f,\n\t@location(0) uv: vec2f,\n\t@location(1) colour: vec4f,\n\t@location(2) remap: vec4f,\n}\n\nfn hash(v: u32) -> u32 {\n\tlet state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tlet top = state >> 28u;\n\tlet bits0 = state >> 4u;\n\tlet bits1 = select(bits0, bits0 >> 1u, (top & 1u) != 0u);\n\tlet bits2 = select(bits1, bits1 >> 2u, (top & 2u) != 0u);\n\tlet bits3 = select(bits2, bits2 >> 4u, (top & 4u) != 0u);\n\tlet word = (select(bits3, bits3 >> 8u, (top & 8u) != 0u) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfn random(seed: u32, stop: u32) -> f32 {\n\treturn f32(hash(seed ^ (stop * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfn colourPosition(i: u32) -> f32 {\n\treturn system.colorPositions[i / 4u][i % 4u];\n}\n\nfn stopColour(i: u32, seed: u32) -> vec4f {\n\treturn mix(system.color1[i], system.color2[i], random(seed, i));\n}\n\nfn velocityFactor(i: u32, seed: u32) -> f32 {\n\tlet stop = system.velocity[i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\n// _ProcessColorGradients / _ProcessColor at the particle's age. Babylon's GetCurrentGradient picks stop 0's pair\n// below the first stop, where a particle keeps the colour it was given for the next stop (stop 1's pick); the first\n// segment containing the ratio; or else the last stop.\nfn colourAt(p: Particle, age: f32, ratio: f32, seed: u32) -> vec4f {\n\tlet n = system.colorCount;\n\tvar colour: vec4f;\n\tif (n == 0u) {\n\t\tcolour = mix(p.colour, system.colorDead, ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0u, seed);\n\t} else if (ratio < colourPosition(0u)) {\n\t\tcolour = stopColour(min(1u, n - 1u), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1u, seed);\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = colourPosition(i);\n\t\t\tlet b = colourPosition(i + 1u);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tlet scale = select(0.0, (ratio - a) / (b - a), b > a);\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1u, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\n// The integral of (alpha + beta s)(d + g s) over s0..s1: the distance travelled while the velocity factor is\n// alpha + beta s at age s and the direction d + g s.\nfn travel(alpha: f32, beta: f32, d: vec3f, g: vec3f, s0: f32, s1: f32) -> vec3f {\n\tlet ds = s1 - s0;\n\tlet ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tlet ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\n// Where the particle has moved by its age: each frame Babylon moves it by its direction times the step and the\n// velocity factor, then adds gravity times the step to the direction. The factor is piecewise linear in the age,\n// picked as colourAt picks colours.\nfn displacement(d: vec3f, age: f32, life: f32, seed: u32) -> vec3f {\n\tlet g = system.gravity;\n\tlet n = system.velocityCount;\n\tif (n == 0u) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvar total = vec3f(0.0);\n\tlet first = system.velocity[0u].x * life;\n\tlet beforeFirst = min(age, first);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1u, n - 1u), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (var i = 0u; i + 1u < n; i++) {\n\t\tlet a = system.velocity[i].x * life;\n\t\tlet b = system.velocity[i + 1u].x * life;\n\t\tlet lo = max(a, 0.0);\n\t\tlet hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tlet fa = velocityFactor(i, seed);\n\t\t\tlet beta = (velocityFactor(i + 1u, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tlet afterLast = max(system.velocity[n - 1u].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1u, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\n// _ProcessRemapGradients: the colour remap's min and range at the ratio; a new particle has (0, 1, 0, 1).\nfn remapAt(age: f32, ratio: f32) -> vec4f {\n\tlet n = system.remapCount;\n\tif (n == 0u || age == 0.0) {\n\t\treturn vec4f(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvar stop = system.remap[n - 1u].yz;\n\tif (ratio < system.remap[0u].x) {\n\t\tstop = system.remap[0u].yz;\n\t} else {\n\t\tfor (var i = 0u; i + 1u < n; i++) {\n\t\t\tlet a = system.remap[i];\n\t\t\tlet b = system.remap[i + 1u];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, select(0.0, (ratio - a.x) / (b.x - a.x), b.x > a.x));\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4f(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\n@vertex\nfn mainVertex(@builtin(vertex_index) vertexIndex: u32, @builtin(instance_index) instanceIndex: u32) -> VertexOutput {\n\tvar out: VertexOutput;\n\t// One wrap, not %, as glParticleShader.ts picks the slot, since start < count and a draw's instances are count\n\t// (gpuParticleRing.ts)\n\tlet count = frame.count;\n\tlet unwrapped = frame.start + instanceIndex;\n\tlet p = particles[select(unwrapped, unwrapped - count, unwrapped >= count)];\n\tlet age = frame.now - p.spawn.w;\n\tlet life = p.velocity.w;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tout.position = vec4f(0.0, 0.0, 2.0, 1.0);\n\t\treturn out;\n\t}\n\tlet ratio = age / life;\n\tlet seed = p.seed;\n\tlet centre = frame.offset + p.spawn.xyz + displacement(p.velocity.xyz, age, life, seed);\n\t// ThinParticleSystem's billboard: the corner offset in view space, here along the camera's right and up.\n\tlet corner = vec2f(f32(vertexIndex & 1u), f32(vertexIndex >> 1u));\n\tlet offset = (corner - 0.5) * p.size;\n\tlet right = vec3f(scene.view[0][0], scene.view[1][0], scene.view[2][0]);\n\tlet up = vec3f(scene.view[0][1], scene.view[1][1], scene.view[2][1]);\n\tout.position = liteWorldLayer(scene.viewProjection * vec4f(centre + right * offset.x + up * offset.y, 1.0));\n\tout.uv = corner;\n\tout.colour = colourAt(p, age, ratio, seed);\n\tout.remap = remapAt(age, ratio);\n\treturn out;\n}\n\n// Babylon's particles.fragment with the default texture mask, without fog or image processing.\n@fragment\nfn mainFragment(in: VertexOutput) -> @location(0) vec4f {\n\tlet textureColour = textureSample(diffuseTexture, diffuseSampler, in.uv);\n\tvar colour = textureColour * in.colour;\n\tif (system.ramp != 0u) {\n\t\tlet index = clamp((colour.a - in.remap.x) / in.remap.y, 0.0, 1.0);\n\t\tlet rampColour = textureSample(rampTexture, rampSampler, vec2f(1.0 - index, 0.0));\n\t\tcolour = vec4f(colour.rgb * rampColour.rgb, clamp((colour.a * rampColour.a - in.remap.z) / in.remap.w, 0.0, 1.0));\n\t}\n\tif (MULTIPLY_PASS) {\n\t\tlet sourceAlpha = in.colour.a * textureColour.a;\n\t\tcolour = vec4f(colour.rgb * sourceAlpha + vec3f(1.0 - sourceAlpha), colour.a);\n\t}\n\treturn colour;\n}\n`;
    var dP = ik(41177);
    class VP {
      constructor(kk, ek, ik, Dk) {
        this.device = kk, this.system = ek, this.frameIndex = ik, this.bindings = Dk, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, dP.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.boundSampler = null, this.boundRamp = null, this.texture = null, this.pipelines = [], this.count = 0, this.upload = (kk, ek) => {
          this.device.queue.writeBuffer(this.ring, kk * yP.f * 4, this.system.ring.records, kk * yP.f, (ek - kk) * yP.f)
        };
        const {
          name: fk
        } = ek;
        this.ring = kk.createBuffer({
          label: `particles-${fk}`,
          size: ek.ring.records.byteLength,
          usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        }), this.uniforms = kk.createBuffer({
          label: `particles-uniforms-${fk}`,
          size: 4 * yP.p,
          usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
        })
      }
      writeUniforms(kk) {
        const ek = (0, dP.c)(this.system, this.uniformBits, kk);
        ek && (this.uniformBits = ek, this.device.queue.writeBuffer(this.uniforms, 0, ek))
      }
      bind() {
        const {
          system: kk
        } = this, ek = this.texture;
        (0, dP.n)(kk, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
          label: `particles-ramp-${kk.name}`,
          size: [yP.k, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        }), this.rampView = this.ramp.createView()), this.device.queue.writeTexture({
          texture: this.ramp
        }, this.rampTexels.texels, {
          bytesPerRow: 4 * yP.k
        }, [yP.k, 1]));
        const ik = this.rampTexels.key.length > 0 && this.rampView ? this.rampView : this.bindings.whiteRamp;
        this.bindGroup && this.boundView === ek.view && this.boundSampler === ek.sampler && this.boundRamp === ik || (this.boundView = ek.view, this.boundSampler = ek.sampler, this.boundRamp = ik, this.bindGroup = this.device.createBindGroup({
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
            resource: ek.sampler
          }, {
            binding: 3,
            resource: ek.view
          }, {
            binding: 4,
            resource: this.bindings.rampSampler
          }, {
            binding: 5,
            resource: ik
          }]
        }))
      }
      destroy() {
        var kk;
        this.ring.destroy(), this.uniforms.destroy(), null === (kk = this.ramp) || void 0 === kk || kk.destroy()
      }
    }
    class FP {
      constructor(kk, ek) {
        this.device = kk, this.resources = ek, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(4096), this.frameBits = new Uint32Array(this.frameData.buffer), this.frameBuffer = void 0, this.frameBindGroup = void 0, this.freeFrameIndices = [], this.nextFrameIndex = 0, this.target = null, this.targetPipelines = null, this.preparedTarget = null, this.warnOnce = (0, Me.d)();
        const ik = kk.createBindGroupLayout({
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
          bindGroupLayouts: [ie(kk), ik, this.frameLayout]
        }), this.module = kk.createShaderModule({
          label: "particles",
          code: sP
        });
        const Dk = kk.createTexture({
          label: "particles-no-ramp",
          size: [1, 1],
          format: "rgba8unorm",
          usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST
        });
        kk.queue.writeTexture({
          texture: Dk
        }, new Uint8Array([255, 255, 255, 255]), {
          bytesPerRow: 4
        }, [1, 1]), this.bindings = {
          layout: ik,
          rampSampler: kk.createSampler({
            label: "particles-ramp",
            magFilter: "nearest",
            minFilter: "nearest",
            addressModeU: "repeat",
            addressModeV: "repeat"
          }),
          whiteRamp: Dk.createView()
        }, this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup(), this.renderable = {
          order: 251,
          isTransparent: !0,
          _worldCenter: [0, 0, 0],
          bind: (ek, ik) => (this.bindTarget(ik), {
            renderable: this.renderable,
            pipeline: re(kk, ik),
            draw: kk => ik === this.preparedTarget ? this.draw(kk) : 0
          })
        }
      }
      get XDk() {
        return this.systems.size
      }
      reset() {
        for (const kk of this.systems.keys()) kk.reset()
      }
      describePendingWork() {
        return (0, pP.d)(this.systems.keys(), "Lite")
      }
      Aq(kk, ek) {
        const ik = new pP.b(kk, ek, this);
        return this.systems.set(ik, new VP(this.device, ik, this.allocateFrameIndex(), this.bindings)), ik
      }
      T6(kk, ek) {
        for (const ik of this.systems.keys()) ik.T6(kk, ek)
      }
      canDraw(kk) {
        const ek = this.systems.get(kk),
          ik = kk.texture ? this.resources.boundTexture(kk.texture) : null;
        if (!ek || !ik || !this.targetPipelines) return !1;
        if (ek.texture = ik, ek.pipelines.length = 0, !Of(kk.blendMode)) return this.warnOnce(`blend:${kk.blendMode}`, `particle blend mode ${kk.blendMode} is not drawn (${kk.name})`), !0;
        const Dk = (0, zf.m)(kk.blendMode);
        for (const fk of Dk) {
          const kk = this.pipelineFor(fk);
          if (!1 === kk) return ek.pipelines.length = 0, !0;
          kk && ek.pipelines.push(kk)
        }
        return ek.pipelines.length === Dk.length
      }
      disposeStopped(kk) {
        kk.dispose()
      }
      remove(kk) {
        const ek = this.systems.get(kk);
        ek && (this.systems.delete(kk), ek.destroy(), this.freeFrameIndices.push(ek.frameIndex))
      }
      prepare(kk) {
        const ek = kk.animationRatio || 1;
        Pe(this.renderable._worldCenter, kk, fe), this.preparedTarget = this.target, this.draws.length = 0;
        let ik = 0;
        for (const Dk of this.systems.values()) {
          const kk = Dk.system;
          if (!kk.animateIfActive(ek)) continue;
          if (kk.ring.takeUploads(Dk.upload), !kk.hasLiveParticles() || 0 === Dk.pipelines.length) continue;
          Dk.writeUniforms(this.warnOnce), Dk.bind();
          const fk = 64 * Dk.frameIndex;
          Dk.count = kk.ring.drawCount(), jP(kk, this.frameData, this.frameBits, fk), ik = Math.max(ik, fk + 64), this.draws.push(Dk)
        }
        ik > 0 && this.device.queue.writeBuffer(this.frameBuffer, 0, this.frameData, 0, ik)
      }
      draw(kk) {
        let ek = 0,
          ik = null;
        for (const Dk of this.draws) {
          kk.setBindGroup(1, Dk.bindGroup), kk.setBindGroup(2, this.frameBindGroup, [256 * Dk.frameIndex]);
          for (const fk of Dk.pipelines) fk !== ik && (kk.setPipeline(fk), ik = fk), kk.draw(4, Dk.count), ek++
        }
        return ek
      }
      bindTarget(kk) {
        this.target = kk;
        const ek = `${kk._colorFormat}|${kk._depthStencilFormat}|${kk._depthCompare}|${kk._sampleCount}`;
        let ik = this.pipelines.get(ek);
        ik || (ik = new Map, this.pipelines.set(ek, ik)), this.targetPipelines = ik
      }
      pipelineFor(kk) {
        var ek;
        const ik = this.targetPipelines,
          Dk = ik.get(kk);
        if (void 0 !== Dk) return Dk;
        ik.set(kk, null);
        const fk = this.target,
          Sk = kk === zf.c,
          bk = null !== (ek = fk._depthCompare) && void 0 !== ek ? ek : De;
        return this.device.createRenderPipelineAsync({
          label: `particles-${kk}`,
          layout: this.pipelineLayout,
          vertex: {
            module: this.module,
            entryPoint: "mainVertex"
          },
          fragment: Rk({
            module: this.module,
            entryPoint: "mainFragment",
            constants: {
              MULTIPLY_PASS: Sk ? 1 : 0
            }
          }, fk, gf((0, zf.j)(kk))),
          primitive: {
            topology: "triangle-strip",
            cullMode: "none"
          },
          depthStencil: fk._depthStencilFormat ? {
            format: fk._depthStencilFormat,
            depthCompare: bk,
            depthWriteEnabled: !1
          } : void 0,
          multisample: {
            count: fk._sampleCount
          }
        }).then((ek => {
          ik.set(kk, ek)
        }), (ek => {
          ik.set(kk, !1), console.error("Lite particle pipeline failed", ek), Rf("particles", `blend-${kk}`, ek)
        })), null
      }
      allocateFrameIndex() {
        const kk = this.freeFrameIndices.pop();
        if (void 0 !== kk) return kk;
        const ek = this.nextFrameIndex++;
        if (64 * (ek + 1) > this.frameData.length) {
          const kk = new Float32Array(2 * this.frameData.length);
          kk.set(this.frameData), this.frameData = kk, this.frameBits = new Uint32Array(kk.buffer), this.frameBuffer.destroy(), this.frameBuffer = this.createFrameBuffer(), this.frameBindGroup = this.createFrameBindGroup()
        }
        return ek
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
    class uP {
      constructor(kk, ek, ik, Dk, fk) {
        this.lite = kk, this.canvas = ek, this.info = ik, this.resources = fk, this.Xik = !1, this.needPOTTextures = !1, this.O4 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
          reset: () => {
            this.lastFrameTime = null
          }
        }, this.caps = void 0, this.deltaTime = 0, this.lastFrameTime = null, this.renderWidth = ek.width, this.renderHeight = ek.height, this.caps = {
          maxTextureSize: Dk.maxTextureDimension2D,
          texture2DArrayMaxLayerCount: Dk.maxTextureArrayLayers
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
      setSize(kk, ek) {
        if (this.renderWidth === kk && this.renderHeight === ek) return !1;
        const ik = this.renderWidth,
          Dk = this.renderHeight;
        this.renderWidth = kk, this.renderHeight = ek;
        try {
          (0, tk.o)(this.lite, kk, ek)
        } catch (fk) {
          if (fk instanceof DOMException && "InvalidStateError" === fk.name) {
            this.renderWidth = ik, this.renderHeight = Dk;
            try {
              (0, tk.o)(this.lite, ik, Dk)
            } catch {
              this.canvas.width = ik, this.canvas.height = Dk
            }
            return console.warn("WebGPU could not allocate render targets for resize", kk, ek, fk.message), !1
          }
          throw fk
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
      AY() {
        const kk = performance.now();
        this.deltaTime = null === this.lastFrameTime ? 0 : kk - this.lastFrameTime, this.lastFrameTime = kk
      }
      getDeltaTime() {
        return this.deltaTime
      }
      createCanvas(kk, ek) {
        const ik = document.createElement("canvas");
        return ik.width = kk, ik.height = ek, ik
      }
      i_(kk, ek) {
        var ik;
        return null !== (ik = this.resources.i_.get(kk)) && void 0 !== ik ? ik : new Tk(this.resources, kk, ek)
      }
      atlasArray(kk, ek, ik) {
        return this.resources.atlasArray(kk, ek, ik)
      }
    }
    class qP {
      constructor() {
        this.fov = .8, this.nearPlane = 1, this.farPlane = 1e3, this.children = [], this.worldMatrix = new Float32Array(16), this.worldMatrixVersion = 0, this._viewCache = new Float32Array(16), this._projCache = new Float32Array(16), this._vpCache = new Float32Array(16)
      }
      copyFromView(kk) {
        this.fov = kk.fov, this.nearPlane = kk.near, this.farPlane = kk.far;
        const ek = kk.worldMatrix;
        for (let ik = 0; ik < 16; ik++)
          if (this.worldMatrix[ik] !== ek[ik]) return this.worldMatrix.set(ek), void this.worldMatrixVersion++
      }
    }
    class IP {
      constructor(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
        let Mk = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null;
        this.engine = kk, this.bw = ek, this.sceneTask = ik, this.gpuDevice = Dk, this.terrain = fk, this.meshes = Sk, this.particles = bk, this.resources = rk, this.sunShadow = Mk, this.Yek = void 0, this.backendName = "WebGPU (Lite)", this.j_ = void 0, this.modelMeshes = void 0, this.camera = new qP, this.lastFrameTime = 0, this.refusals = void 0, this.deviceLost = void 0, this.refusals = new Bk(Dk.lost), this.deviceLost = this.refusals.deviceLost, this.Yek = new uP(kk, Pk, mk, Dk.limits, rk), (0, Vk.E)({
          XM: kk => {
            Ik(kk) && rk.textureSlot(kk)
          },
          loaded: kk => Ik(kk) ? rk.textureLoaded(kk) : null,
          canvasUpdated: (kk, ek, ik) => {
            Ik(kk) && rk.canvasUpdated(kk, ek, ik)
          }
        }), this.j_ = Sk.j_, this.modelMeshes = Sk.modelMeshes, ek.camera = this.camera
      }
      get castsEntitySunShadows() {
        var kk, ek;
        return null !== (kk = null === (ek = this.sunShadow) || void 0 === ek ? void 0 : ek.tracesEntities) && void 0 !== kk && kk
      }
      get sampleCount() {
        return this.engine.msaaSamples
      }
      attach(kk) {
        this.modelMeshes.attach(kk.model, kk.sceneMirror);
        const ek = kk.bw;
        this.setClearColour(ek.clearColor.r, ek.clearColor.g, ek.clearColor.b), ek.draw = () => {
          this.drawFrame(kk, ek)
        }
      }
      render(kk) {
        if (!this.refusals.lost) {
          try {
            this.Yek.AY(), kk.bw.render()
          } catch (ek) {
            throw this.refusals.frameFailed(ek), ek
          }
          this.refusals.frameDrawn()
        }
      }
      lastFrameDrawCalls() {
        return this.engine.drawCallCount
      }
      describePendingWork() {
        var kk, ek, ik, Dk;
        const fk = [...this.particles.describePendingWork(), ...null !== (kk = null === (ek = this.sunShadow) || void 0 === ek ? void 0 : ek.describePendingWork()) && void 0 !== kk ? kk : []],
          Sk = this.meshes.pipelinesCompiling + this.terrain.pipelinesCompiling + (null !== (ik = this.terrain.sceneDepth) && void 0 !== ik && ik.compiling ? 1 : 0) + (null !== (Dk = this.terrain.shadowMask) && void 0 !== Dk && Dk.compiling ? 1 : 0);
        Sk > 0 && fk.push(`${Sk} Lite pipelines compiling`);
        const bk = this.terrain.buffersAwaitingVerdict;
        bk > 0 && fk.push(`${bk} Lite terrain buffers awaiting their out-of-memory verdict`);
        const rk = this.resources.texturesLoading;
        return rk > 0 && fk.push(`${rk} Lite textures loading`), fk
      }
      prepareTexture(kk) {
        return null !== this.resources.boundTexture(kk) || this.resources.textureFailed(kk)
      }
      drawFrame(kk, ek) {
        var ik, Dk, fk, Sk, bk, rk;
        const Pk = wr(kk);
        this.camera.copyFromView(Pk), this.setClearColour(Pk.clearColour[0], Pk.clearColour[1], Pk.clearColour[2]), null === (ik = this.sunShadow) || void 0 === ik || ik.prepare(kk.Lx, Pk.eye, null !== (Dk = kk.Lx.AU) && void 0 !== Dk ? Dk : null), this.terrain.prepare(kk, Pk), null === (fk = this.terrain.sceneDepth) || void 0 === fk || fk.setPlanes(Pk.near, Pk.far), null === (Sk = this.terrain.shadowMask) || void 0 === Sk || Sk.prepare(Pk), er(this.sceneTask), this.meshes.prepare(ek, Pk, kk.model.earthSky, null !== (bk = kk.Lx.AU) && void 0 !== bk ? bk : null), this.particles.prepare(Pk);
        const mk = performance.now();
        this.resources.flushUploads(), null === (rk = this.sunShadow) || void 0 === rk || rk.traceEntities(this.meshes);
        try {
          (0, tk.k)(this.engine, this.lastFrameTime > 0 ? mk - this.lastFrameTime : 0)
        } finally {
          this.resources.endUploadFrame()
        }
        this.lastFrameTime = mk
      }
      setClearColour(kk, ek, ik) {
        const Dk = this.bw.clearColor;
        Dk.r = kk, Dk.g = ek, Dk.b = ik, Dk.a = 1
      }
    }
    const zP = "WebGPU device lost while Lite was starting";

    function QP(kk, ek) {
      return "object" === typeof kk && null !== kk ? Object.assign(kk, {
        startStep: ek
      }) : kk
    }
    async function vP(kk, ek) {
      const ik = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
      });
      if (!ik) throw QP(new Error("No WebGPU adapter"), "no_adapter");
      const Dk = ik.info,
        fk = {
          vendor: (null === Dk || void 0 === Dk ? void 0 : Dk.vendor) || "unknown vendor",
          renderer: (null === Dk || void 0 === Dk ? void 0 : Dk.architecture) || "unknown renderer",
          version: (null === Dk || void 0 === Dk ? void 0 : Dk.description) || "unknown version"
        },
        Sk = function(kk) {
          const ek = {};
          for (const ik in kk.limits) {
            const Dk = kk.limits[ik];
            "number" === typeof Dk && (ek[ik] = Dk)
          }
          return ek
        }(ik);
      let bk;
      kk.style.background = "black";
      try {
        bk = await (0, tk.d)(kk, {
          msaaSamples: ek.eik ? 4 : 1,
          requiredLimits: Sk,
          alphaMode: "premultiplied"
        })
      } catch (Mk) {
        throw QP(Mk, "#47" === (null === (rk = Mk) || void 0 === rk ? void 0 : rk.message) ? "no_adapter" : "device")
      }
      var rk;
      null !== ek.bufferSize && (0, tk.o)(bk, ek.bufferSize.width, ek.bufferSize.height);
      const Pk = function(kk) {
        return kk._device
      }(bk);
      let mk = null;
      Pk.lost.then((kk => {
        mk = kk, console.error(`WebGPU device lost (${kk.reason}): ${kk.message}`)
      }));
      try {
        const ik = await async function(kk, ek, ik, Dk, fk, Sk) {
          const bk = (0, Xk.d)(kk),
            rk = new Rb(kk, ek),
            Pk = new Jr(ek),
            mk = new Qb(ek, rk, (kk => function(kk, ek) {
              for (const Dk of ke(kk)) {
                var ik;
                if (Dk._targetSignature === ek) return null !== (ik = Dk._sceneBG) && void 0 !== ik ? ik : null
              }
              return null
            }(bk, kk))),
            Mk = new FP(ek, rk);
          for (const nk of function(kk, ek, ik) {
              return [ek.opaqueRenderable, kk.opaqueRenderable, kk.skyLastRenderable, ik.renderable, ek.transparentRenderable, kk.transparentRenderable, kk.frontRenderable]
            }(mk, Pk, Mk)) Jk(bk, nk);
          const Kk = function(kk) {
            for (const ek of ke(kk))
              if ("bw" === ek.name) return ek;
            throw new Error("Lite: the scene has no render task named scene")
          }(bk);
          fk && Pk.installSceneDepth(Kk, kk);
          const xk = Sk ? new lP(ek, Sk.entities) : null;
          Pk.sunShadow = xk, xk && null !== Sk && void 0 !== Sk && Sk.entities && (Pk.shadowMask = new Ir(ek, Kk, kk, Pk));
          return mk.sunShadow = xk, await (0, Xk.e)(bk), new IP(kk, bk, Kk, ek, Pk, mk, Mk, rk, ik, Dk, xk)
        }(bk, Pk, kk, fk, ek.sceneDepth, ek.sunShadow);
        if (null !== mk) {
          const {
            reason: kk,
            message: ek
          } = mk;
          throw Object.assign(new Error(`${zP} (${kk}): ${ek}`), {
            fallbackReason: zP
          })
        }
        return ik
      } catch (Mk) {
        throw Pk.destroy(), null === mk ? Mk : QP(Mk, "device")
      }
    }
  },
  40283: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => nk,
      C: () => Uk,
      e: () => fk,
      g: () => Dk,
      h: () => xk,
      i: () => Mk,
      j: () => wk,
      n: () => Sk,
      o: () => rk,
      s: () => Pk,
      w: () => bk,
      y: () => Hk
    });
    const Dk = 3,
      fk = 0,
      Sk = 1,
      bk = 2,
      rk = {
        uniform: 3,
        gx: 4,
        special: 5,
        volume: 6,
        sampler: 7,
        entities: 8,
        entityGrids: 9
      },
      Pk = 10,
      mk = "BloxdPackInputs",
      Mk = "bloxdPackInputs",
      Kk = [{
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
      xk = 80;

    function nk() {
      const kk = Kk.map((kk => {
        let {
          name: ek,
          type: ik
        } = kk;
        return `    ${ek}: ${ik},\n`
      })).join("");
      return `struct ${mk} {\n${kk}}\n@group(${Dk}) @binding(${fk}) var<uniform> ${Mk}: ${mk};\n`
    }

    function Uk(kk, ek) {
      const ik = new DataView(kk, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, xk),
        [Dk, fk, Sk, bk, rk, Pk] = Kk;
      ik.setFloat32(Dk.offset, ek.seconds, !0), ik.setUint32(fk.offset, ek.lit ? 1 : 0, !0);
      for (let mk = 0; mk < 3; mk++) ik.setInt32(Sk.offset + 4 * mk, ek.renderOffset[mk], !0), ik.setFloat32(bk.offset + 4 * mk, ek.Z5[mk], !0), ik.setFloat32(rk.offset + 4 * mk, ek.eyePosition[mk], !0), ik.setFloat32(Pk.offset + 4 * mk, ek.shadowDirection[mk], !0)
    }

    function Hk(kk) {
      const ek = new Uint32Array(Math.max(1, kk.length));
      return kk.forEach(((kk, ik) => {
        let {
          id: Dk,
          rotation: fk
        } = kk;
        ek[ik] = 65535 & Dk | (3 & fk) << 16
      })), ek
    }
    const wk = {
      off: 0,
      strict: 1,
      allow: 2
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);