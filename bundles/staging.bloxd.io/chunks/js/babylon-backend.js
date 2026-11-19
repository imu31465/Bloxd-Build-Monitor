export const id = 0;
export const ids = [0];
export const modules = {
  40373: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      addBabylonLights: () => ro,
      default: () => ho
    });
    var iT = IT(40378),
      zT = (IT(38744), IT(40029), IT(39273), IT(40387)),
      kT = IT(38589),
      WT = IT(36175),
      XT = IT(36114),
      BT = IT(40400),
      FT = IT(40409),
      ST = IT(36076),
      DT = (IT(40043), IT(40413)),
      LT = IT(40411),
      xT = IT(37700),
      cT = IT(40417),
      KT = IT(38617),
      MT = IT(37682);
    const rT = "gpuParticles",
      AT = MT.v,
      gT = TT => TT / 4,
      hT = TT => `gpuParticleSystem[${TT>>2}].${"xyzw"[3&TT]}`,
      wT = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${MT.c}\n#define COLOR_POSITIONS ${gT(AT.colorPositions)}\n#define COLOR1 ${gT(AT.color1)}\n#define COLOR2 ${gT(AT.color2)}\n#define VELOCITY ${gT(AT.LM)}\n#define REMAP ${gT(AT.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${MT.o/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${hT(AT.gravity)}, ${hT(AT.gravity+1)}, ${hT(AT.gravity+2)}); }\nint colorCount() { return int(${hT(AT.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${gT(AT.colorDead)}]; }\nint velocityCount() { return int(${hT(AT.velocityCount)}); }\nint remapCount() { return int(${hT(AT.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    KT.c.ShadersStore[`${rT}VertexShader`] = wT, KT.c.ShadersStore[`${rT}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const mT = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      eT = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var RT = IT(37673),
      uT = IT(40425);
    class vT extends RT.b {
      constructor(TT, oT, IT, iT) {
        super(TT, oT, IT), this.renderer = IT, this.NK = iT, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(MT.o), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, uT.c)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (TT, oT) => {
          const {
            engine: IT,
            perRow: iT
          } = this, zT = IT._gl;
          IT._bindTextureDirectly(zT.TEXTURE_2D, this.records, !0), IT._unpackFlipY(!1);
          const kT = this.ring.recordBits;
          for (let WT = TT; WT < oT;) {
            const TT = Math.floor(WT / iT),
              IT = Math.min(oT, (TT + 1) * iT);
            zT.texSubImage2D(zT.TEXTURE_2D, 0, WT % iT * 4, TT, 4 * (IT - WT), 1, zT.RGBA_INTEGER, zT.UNSIGNED_INT, kT, WT * MT.e), WT = IT
          }
          IT._bindTextureDirectly(zT.TEXTURE_2D, null)
        }, this.id = TT;
        const zT = iT.Zc();
        this.engine = zT;
        const kT = Math.max(1, oT);
        this.perRow = Math.min(kT, 256), this.records = zT.createRawTexture(null, 4 * this.perRow, Math.ceil(kT / this.perRow), DT.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, DT.d.TEXTURE_NEAREST_SAMPLINGMODE, null, DT.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.NK.getAnimationRatio() || 1;
        const oT = this.NK.getFrameId();
        if (oT === this.animatedFrame) return !1;
        const IT = super.animate(TT);
        return IT && (this.animatedFrame = oT, this.ring.takeUploads(this.uploadSlots)), IT
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(TT) {
        (0, uT.g)(this, this.uniforms, this.uniformBits, TT);
        for (const IT of MT.r) this.uniforms[IT] = this.uniformBits[IT];
        var oT;
        (0, uT.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (oT = this.ramp) || void 0 === oT || oT.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = LT.e.CreateRGBATexture(this.rampTexels.texels, MT.l, 1, this.NK, !1, !1, DT.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var TT;
        this.records.dispose(), null === (TT = this.ramp) || void 0 === TT || TT.dispose(), this.ramp = null
      }
    }
    class ET {
      constructor(TT) {
        this.NK = TT, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, cT.c)(), this.engine = TT.Zc(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = LT.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, TT, !1, !1, DT.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      aJ(TT, oT) {
        const IT = 256 * this.engine.getCaps().maxTextureSize;
        oT > IT && this.warnOnce(`capacity:${TT}`, `particle system ${TT} holds ${IT} particles, not ${oT}: its records texture's limit`);
        const iT = new vT(TT, Math.min(oT, IT), this, this.NK);
        return this.NK.addParticleSystem(iT), iT
      }
      canDraw(TT) {
        var oT, IT;
        if (this.failed || null === (oT = TT.texture) || void 0 === oT || null === (IT = oT.mirror) || void 0 === IT || !IT.isReady()) return !1;
        for (const iT of (0, xT.l)(TT.blendMode))
          if (!this.effectFor(iT).isReady()) return !1;
        return !0
      }
      disposeStopped(TT) {
        this.NK._toBeDisposed.push(TT)
      }
      remove(TT) {
        this.NK.removeParticleSystem(TT), TT.releaseGl()
      }
      render(TT) {
        var oT;
        if (!TT.isReady() || !TT.hasLiveParticles()) return 0;
        const {
          engine: IT,
          NK: iT,
          frame: zT
        } = this;
        TT.prepareDraw(this.warnOnce), TT.drawOffset(zT, 0), zT[3] = TT.drawTime();
        const kT = TT.ring.drawStart(),
          WT = TT.ring.drawCount(),
          XT = null !== (oT = TT.ramp) && void 0 !== oT ? oT : this.whiteRamp;
        IT.setState(!1);
        for (const BT of (0, xT.l)(TT.blendMode)) {
          const oT = this.effectFor(BT);
          IT.enableEffect(oT), oT.setTexture("gpuParticleTexture", TT.texture.mirror), oT.setTexture("gpuParticleRampTexture", XT), oT._bindTexture("gpuParticleRecords", TT.records), oT.setMatrix("gpuParticleView", iT.getViewMatrix()), oT.setMatrix("gpuParticleProjection", iT.getProjectionMatrix()), oT.setFloatArray4("gpuParticleSystem", TT.uniforms), oT.setFloat4("gpuParticleFrame", zT[0], zT[1], zT[2], zT[3]), oT.setFloat2("gpuParticleRange", kT, WT), oT.setFloat("gpuParticleRamp", TT.uniforms[MT.v.ramp]), IT.bindBuffers(this.vertexBuffers, null, oT), IT.setAlphaMode((0, xT.i)(BT)), IT.drawArraysType(DT.d.MATERIAL_TriangleStripDrawMode, 0, 4, WT), oT._bindTexture("gpuParticleRecords", null)
        }
        return IT.setAlphaMode(DT.d.ALPHA_DISABLE), WT
      }
      awaitLink(TT) {
        const oT = TT.getPipelineContext(),
          IT = this.engine._gl;
        !this.failed && IT && (!oT || oT.isParallelCompiled && !oT.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : oT.isParallelCompiled && oT.program && (IT.getProgramParameter(oT.program, IT.LINK_STATUS) || this.fail(IT.getProgramInfoLog(oT.program) || "a program did not link")))
      }
      effectFor(TT) {
        return TT === xT.b ? this.multiplyEffect : this.effect
      }
      createEffect(TT) {
        return this.engine.createEffect(rT, [], mT, eT, TT, void 0, void 0, ((TT, oT) => {
          this.fail(oT)
        }))
      }
      fail(TT) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${TT}`);
          for (const TT of this.NK.bR.slice()) TT instanceof vT && TT.disposeOnStop && TT.dispose()
        }
      }
    }
    var fT = IT(38979),
      CT = IT(40023),
      jT = IT(38716),
      JT = IT(38946),
      UT = IT(38941),
      aT = IT(38874),
      YT = IT(40084),
      QT = IT(36472),
      OT = IT(40432),
      HT = IT(40434),
      nT = IT(40442),
      qT = IT(38897),
      ZT = IT(36335),
      lT = IT(36333),
      sT = IT(39093),
      tT = IT(36409),
      GT = IT(36355);

    function pT(TT) {
      if (TT.visibility < 1 || !TT.isVisible || !TT.isEnabled() || TT.metadata[GT.e] || !TT.isReady()) return !0;
      const oT = TT.pR;
      if (!oT || 0 === oT.length) return !0;
      for (let IT = 0; IT < oT.length; IT++) {
        const iT = oT[IT],
          zT = iT.bc();
        if (!zT || !zT.isReadyForSubMesh(TT, iT, !1)) return !0
      }
      return !1
    }
    class bT {
      constructor(TT, oT) {
        this.FL = TT, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, oT.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      hx(TT) {
        var oT;
        const IT = this.armed;
        if (this.armed = !1, this.vis = null, !IT) return !1;
        this.culled = 0;
        const {
          FL: iT
        } = this, zT = null === (oT = iT.jR) || void 0 === oT ? void 0 : oT.visibility;
        if (!zT || !TT || iT.FK.SK) return !1;
        if (!(iT.iL.dIT[0] >= tT.e)) return !1;
        const kT = TT.getProjectionMatrix().m;
        if (0 !== kT[15]) return !1;
        const WT = iT.uL,
          XT = TT.globalPosition,
          BT = this.eye;
        return BT[0] = XT.x + WT[0], BT[1] = XT.y + WT[1], BT[2] = XT.z + WT[2], !!zT.eyeClear(BT[0], BT[1], BT[2], TT.minZ, kT, iT.iL) && (this.vis = zT, this.passable.clear(), this.count = 0, !0)
      }
      see(TT, oT) {
        const IT = this.count++;
        if (IT === this.cellSlots.length) {
          const TT = new Int32Array(2 * IT);
          TT.set(this.cellSlots), this.cellSlots = TT
        }
        this.cellSlots[IT] = oT, this.meshes[IT] = TT
      }
      seeThrough(TT) {
        this.passable.add(TT)
      }
      finish(TT, oT) {
        const {
          vis: IT,
          eye: iT,
          meshes: zT,
          count: kT,
          cellSlots: WT
        } = this, {
          iL: XT
        } = this.FL, [BT, FT] = XT.dIT, ST = null !== IT && IT.update(iT[0], iT[1], iT[2], XT.A4, BT, FT, this.passable);
        let DT = 0;
        for (let LT = 0; LT < kT; LT++) {
          const iT = zT[LT];
          if (ST) {
            const TT = 3 * WT[LT];
            if (TT >= 0 && !IT.isDrawn(oT[TT], oT[TT + 1], oT[TT + 2])) {
              DT++;
              continue
            }
          }
          qT.f.prototype.push.call(TT, iT)
        }
        zT.fill(null, 0, kT), this.count = 0, this.vis = null, this.culled = DT
      }
    }
    var yT = IT(36397),
      NT = IT(36344),
      PT = IT(39068),
      dT = IT(40451),
      VT = IT(39076),
      To = IT(38994);
    let oo = 1;
    const Io = new WeakSet;

    function io() {
      return oo
    }

    function zo() {
      oo = oo >= 1073741823 ? 1 : oo + 1
    }

    function ko(TT) {
      const oT = TT.metadata;
      if (!oT || !0 !== oT[lT.o]) return;
      const IT = oT[lT.u],
        iT = null === IT || void 0 === IT ? void 0 : IT._noaStamps;
      if (!IT || !iT) return;
      const zT = IT.entries.indexOf(TT);
      zT >= 0 && (iT[zT] = 0)
    }

    function Wo(TT) {
      const oT = TT.pR;
      for (let IT = 0; IT < oT.length; IT++) {
        const TT = oT[IT].bc();
        if (TT && !TT.isFrozen) return !1
      }
      for (let IT = 0; IT < oT.length; IT++) {
        const TT = oT[IT].bc();
        TT && Io.add(TT)
      }
      return !0
    }
    let Xo = !1;
    const Bo = new WeakSet;

    function Fo(TT, oT) {
      const IT = TT[oT];
      if ("function" !== typeof IT) throw new Error(`terrainDrawState: Babylon has no ${oT} to hook`);
      return IT
    }

    function So(TT, oT, IT, iT, zT) {
      const kT = IT.iL.A4,
        WT = new Map;
      let XT = 0;
      const BT = new bT(IT, TT),
        FT = new yT.b(kT, TT.Zc());
      ! function(TT) {
        if (Bo.has(TT) || (Bo.add(TT), TT.onContextLostObservable.add(zo), TT.onContextRestoredObservable.add(zo)), Xo) return;
        Xo = !0;
        const oT = dT.b.prototype,
          IT = Fo(oT, "_markSubMeshesAsDirty");
        Object.assign(oT, {
          _markSubMeshesAsDirty(TT) {
            IT.call(this, TT), ko(this)
          }
        });
        const iT = Fo(To.c.prototype, "_syncParentEnabledState");
        Object.assign(To.c.prototype, {
          _syncParentEnabledState() {
            iT.call(this), ko(this)
          }
        });
        const zT = Fo(VT.c.prototype, "resetDrawCache");
        VT.c.prototype.resetDrawCache = function(TT, oT) {
          zT.call(this, TT, oT), ko(this.getMesh())
        };
        const kT = PT.c.prototype,
          WT = Fo(kT, "markDirty");
        kT.markDirty = function(TT) {
          WT.call(this, TT), Io.has(this) && zo()
        };
        const XT = Fo(kT, "_markAllSubMeshesAsDirty");
        Object.assign(kT, {
          _markAllSubMeshesAsDirty(TT) {
            XT.call(this, TT), Io.has(this) && zo()
          }
        })
      }(TT.Zc());
      let ST = new Float64Array(384),
        DT = new Int32Array(64),
        LT = new Uint8Array(64),
        xT = new Float64Array(64),
        cT = new Int32Array(192),
        KT = 0;
      const MT = [],
        rT = new Float64Array(24),
        AT = () => {
          const TT = MT.pop();
          return void 0 !== TT ? (DT[TT] = 0, TT) : (KT === DT.length && (ST = Do(ST, new Float64Array(2 * ST.length)), DT = Do(DT, new Int32Array(2 * DT.length)), LT = Do(LT, new Uint8Array(2 * LT.length)), xT = Do(xT, new Float64Array(2 * xT.length)), cT = Do(cT, new Int32Array(2 * cT.length))), KT++)
        },
        gT = TT => {
          const oT = 6 * TT._noaSlot,
            IT = TT.kiT[0],
            iT = TT.kiT[1];
          ST[oT] = IT.x, ST[oT + 1] = IT.y, ST[oT + 2] = IT.z, ST[oT + 3] = iT.x, ST[oT + 4] = iT.y, ST[oT + 5] = iT.z
        },
        hT = (TT, oT, IT) => {
          if (!IT) return BT.see(TT, -1), !1;
          const iT = pT(TT);
          return iT && BT.seeThrough(xT[oT]), BT.see(TT, oT), !iT
        };
      let wT = -1;
      return TT.getActiveMeshCandidates = () => {
        const IT = TT.frustumPlanes,
          iT = oT._selectionContent;
        iT.reset(), (IT => {
          const iT = TT.frustumPlanes;
          XT = XT + 1 | 0 || 1;
          const zT = oT.blocks,
            kT = BT.hx(TT.activeCamera),
            WT = kT && !0;
          if (WT) {
            const oT = TT.Zc().currentRenderPassId;
            oT !== wT && (wT = oT, zo())
          }
          const FT = io(),
            xT = WT && !1;
          zT.length > 0 && function(TT, oT) {
            for (let IT = 0; IT < 6; IT++) {
              const iT = TT[IT],
                zT = iT.normal;
              oT[4 * IT] = zT.x, oT[4 * IT + 1] = zT.y, oT[4 * IT + 2] = zT.z, oT[4 * IT + 3] = iT.d
            }
          }(iT, rT);
          const KT = ST,
            MT = DT,
            AT = LT;
          for (let TT = 0; TT < zT.length; TT++) {
            const oT = zT[TT];
            if (!sT.b.IsInFrustum(oT.kiT, iT)) continue;
            const ST = oT.entries;
            {
              const TT = oT._noaSlots,
                iT = oT._noaStamps,
                zT = oT._noaTerrain;
              for (let oT = 0; oT < ST.length; oT++) {
                const DT = TT[oT];
                if (MT[DT] !== XT && (MT[DT] = XT, AT[DT] = Lo(KT, 6 * DT, rT) ? 1 : 0), 0 === AT[DT]) continue;
                const LT = ST[oT];
                if (WT && iT[oT] === FT) xT && 1 === zT[oT] && pT(LT) && 0, BT.see(LT, 1 === zT[oT] ? DT : -1);
                else if (WT) {
                  iT[oT] = FT;
                  const TT = !0 === LT.metadata[NT.n];
                  zT[oT] = TT ? 1 : 0;
                  const IT = hT(LT, DT, TT);
                  !TT || IT && Wo(LT) || (iT[oT] = 0)
                } else kT ? hT(LT, DT, !0 === LT.metadata[NT.n]) : qT.f.prototype.push.call(IT, LT)
              }
              continue
            }
          }
          kT && BT.finish(IT, cT)
        })(iT), FT.apply(iT, TT.activeCamera);
        const kT = oT.ziT;
        for (let TT = 0; TT < kT.length; TT++) {
          const oT = kT[TT];
          oT.isEnabled() && qT.f.prototype.push.call(iT, oT)
        }
        return zT(iT, IT), iT
      }, {
        WiT: () => BT.culled,
        tIT: (TT, oT) => {
          const zT = Math.floor(oT[0] / kT),
            XT = Math.floor(oT[1] / kT),
            BT = Math.floor(oT[2] / kT),
            FT = `${zT}|${XT}|${BT}`;
          let ST = WT.get(FT);
          if (!ST) {
            const TT = [0, 0, 0];
            IT.sTT([zT * kT - 1, XT * kT - 1, BT * kT - 1], null, TT), ST = Object.assign(iT(TT, kT + 2), {
              XiT: FT,
              BiT: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: AT()
            }), gT(ST), xT[ST._noaSlot] = (0, ZT.k)(zT, XT, BT), cT[3 * ST._noaSlot] = zT, cT[3 * ST._noaSlot + 1] = XT, cT[3 * ST._noaSlot + 2] = BT, WT.set(FT, ST)
          }
          ST.BiT++, TT.metadata[lT.v] = ST
        },
        KJ: TT => {
          const oT = TT.metadata[lT.v];
          oT && (oT.BiT--, oT.BiT <= 0 && (WT.delete(oT.XiT), MT.push(oT._noaSlot)), TT.metadata[lT.v] = null)
        },
        iiT: (TT, oT) => {
          const IT = TT,
            iT = oT.metadata[lT.v];
          (IT._noaSlots ??= []).push(iT._noaSlot), (IT._noaStamps ??= []).push(0), (IT._noaTerrain ??= []).push(0), IT.entries.push(oT)
        },
        removeEntry: (TT, oT) => {
          const IT = TT,
            iT = IT.entries,
            zT = iT.indexOf(oT);
          if (zT < 0) return;
          const kT = IT._noaSlots,
            WT = IT._noaStamps,
            XT = IT._noaTerrain,
            BT = iT.length - 1;
          iT[zT] = iT[BT], kT[zT] = kT[BT], WT[zT] = WT[BT], XT[zT] = XT[BT], iT.pop(), kT.pop(), WT.pop(), XT.pop()
        },
        F_: TT => {
          for (const oT of WT.values()) {
            oT.NIT.SiT(TT), oT.yIT.SiT(TT);
            for (const IT of oT.kiT) IT.SiT(TT);
            gT(oT)
          }
        }
      }
    }

    function Do(TT, oT) {
      return oT.set(TT), oT
    }

    function Lo(TT, oT, IT) {
      const iT = TT[oT],
        zT = TT[oT + 1],
        kT = TT[oT + 2],
        WT = TT[oT + 3],
        XT = TT[oT + 4],
        BT = TT[oT + 5];
      for (let FT = 0; FT < 24; FT += 4) {
        const TT = IT[FT],
          oT = IT[FT + 1],
          ST = IT[FT + 2];
        if (!(TT * (TT >= 0 ? WT : iT) + oT * (oT >= 0 ? XT : zT) + ST * (ST >= 0 ? BT : kT) + IT[FT + 3] >= 0)) return !1
      }
      return !0
    }
    var xo = IT(36722);
    class co {
      constructor(TT, oT) {
        var IT = TT.NK;
        IT.fIT(new nT.d(IT));
        var iT = new OT.b(BT);
        IT.LiT = iT, iT.blocks = [];
        var zT, kT = {},
          WT = [];
        this.textPlanes = WT, this.WiT = () => zT.WiT(), this.F_ = TT => {
          ST(iT, TT), zT.F_(TT)
        }, this.tIT = (oT, IT, XT) => {
          if (!oT.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!oT.metadata[lT.u] && !oT.metadata[lT.n]) {
            if (!IT) {
              var BT = iT.ziT;
              if (oT.metadata[lT.B] && !oT.parent) {
                BT = WT;
                var ST = oT.GJ().KiT;
                oT.metadata[lT.C] = ST.center.length() + ST.radius, oT.lc = !0
              }
              return BT.push(oT), oT.metadata[lT.g] = BT, void(oT.metadata[lT.n] = !0)
            }
            var LT = Math.floor(XT[0] / FT),
              xT = Math.floor(XT[1] / FT),
              cT = Math.floor(XT[2] / FT),
              KT = LT + "|" + xT + "|" + cT,
              MT = kT[KT];
            if (!MT) {
              var rT = [LT * FT, xT * FT, cT * FT],
                AT = [0, 0, 0];
              TT.FL.sTT(rT, null, AT), MT = DT(AT, FT), iT.blocks.push(MT), kT[KT] = MT, MT.XiT = KT
            }
            zT.tIT(oT, XT), zT.iiT(MT, oT), MT.BiT = (MT.BiT || 0) + 1, oT.metadata[lT.u] = MT, oT.metadata[lT.o] = !0, oT.lc = !0
          }
        }, this.KJ = TT => {
          if (TT.metadata) {
            TT.metadata[lT.n] && ((0, ZT.p)(TT.metadata[lT.g], TT), TT.metadata[lT.n] = !1), TT.metadata[lT.g] === WT && (TT.lc = !1), TT.metadata[lT.g] = void 0, TT.metadata[lT.C] = void 0;
            var oT = TT.metadata[lT.u];
            oT && oT.entries && (TT.metadata[lT.o] && zT.removeEntry(oT, TT), oT.BiT--, oT.BiT <= 0 && (delete kT[oT.XiT], (0, ZT.p)(iT.blocks, oT))), zT.KJ(TT), TT.metadata[lT.u] = null, TT.metadata[lT.o] = !1
          }
        }, this.u9 = function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (TT.metadata[lT.u]) {
            if (TT.metadata[lT.o] === oT) return;
            var IT = TT.metadata[lT.u];
            IT && IT.entries && (oT ? zT.iiT(IT, TT) : zT.removeEntry(IT, TT)), TT.metadata[lT.o] = oT
          } else {
            if (TT.metadata[lT.n] === oT) return;
            var kT = TT.metadata[lT.g] || iT.ziT;
            oT ? kT.push(TT) : (0, ZT.p)(kT, TT), TT.metadata[lT.n] = oT
          }
        };
        var BT = () => {},
          FT = oT * TT.FL.iL.A4,
          ST = (TT, oT) => {
            TT.blocks.forEach((TT => {
              TT.NIT.SiT(oT), TT.yIT.SiT(oT), TT.kiT.forEach((TT => TT.SiT(oT))), TT.blocks && ST(TT, oT)
            }))
          },
          DT = (TT, oT) => {
            var IT = new XT.sc(TT[0], TT[1], TT[2]),
              iT = new XT.sc(TT[0] + oT, TT[1] + oT, TT[2] + oT);
            return new HT.e(IT, iT, void 0, void 0, void 0, BT)
          };
        zT = So(IT, iT, TT.FL, DT, ((TT, oT) => {
          for (var IT = 0; IT < WT.length; IT++) {
            var iT = WT[IT];
            iT.isEnabled(!1) && ((0, xo.b)(iT, oT) && qT.f.prototype.push.call(TT, iT))
          }
        }))
      }
    }

    function Ko(TT) {
      const {
        holderPosition: oT,
        holderRotation: IT,
        Qy: iT,
        fov: zT,
        near: kT,
        far: WT
      } = TT.model.Uy, XT = TT.miT;
      XT.position.S_(oT[0], oT[1], oT[2]), XT.rotation.S_(IT[0], IT[1], IT[2]);
      const BT = TT.camera;
      BT.position.S_(iT[0], iT[1], iT[2]), BT.fov = zT, BT.minZ = kT, BT.maxZ = WT
    }

    function Mo(TT) {
      const oT = TT.Zc(),
        IT = oT,
        iT = IT._gl;
      if (!iT || IT.rK < 2 || oT.lIT || iT.getParameter(iT.DEPTH_BITS) < 24) return !1;
      const zT = TT._renderingManager,
        kT = zT.getRenderingGroup(-1),
        WT = zT.getRenderingGroup(0),
        XT = JT.e.prototype.render;
      return kT.render = function(TT, oT, IT, iT, zT, kT, BT, FT, ST) {
        (TT || WT._empty) && XT.call(this, TT, oT, IT, iT, zT, kT, BT, FT, ST)
      }, WT.render = function(TT, IT, zT, WT) {
        let BT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          FT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ST = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          LT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          xT = arguments.length > 8 ? arguments[8] : void 0;
        TT ? XT.call(this, TT, IT, zT, WT, BT, FT, ST, LT, xT) : (oT.setAlphaMode(DT.d.ALPHA_DISABLE), XT.call(this, null, !1, !1, WT, BT, FT, ST, !1), kT._empty || (iT.depthRange(1, 1), XT.call(kT, null, IT, zT, WT, BT, FT, ST, LT, xT), iT.depthRange(0, 1)), XT.call(this, null, IT, zT, WT, !1, !1, !1, LT, xT))
      }, !0
    }

    function ro(TT, oT) {
      return [oT, QT.f].map(((oT, IT) => {
        const iT = new zT.d("light", XT.sc.FromArray(oT), TT);
        return iT.diffuse = WT.Color3.FromArray([1, 1, 1]), iT.specular = WT.Color3.FromArray([1, 1, 1]), iT.intensity = QT.c[IT], iT
      }))
    }
    class Ao extends FT.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(TT) {
        var oT;
        this.heldTexture = TT, this.particleTexture = null !== (oT = null === TT || void 0 === TT ? void 0 : TT.mirror) && void 0 !== oT ? oT : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        TT && (this.particleTexture = null, (0, ST.B)(this.heldTexture), this.heldTexture = null), super.dispose(TT, oT, IT)
      }
    }
    const go = iT.d.Zero();
    const ho = {
      EiT: function(TT, oT) {
        return new kT.c(TT, oT.VoT, {
          preserveDrawingBuffer: oT.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      uiT: function(TT, oT) {
        ! function(TT, oT, IT) {
          const iT = new aT.d(TT.engine);
          TT.NK = iT, iT.detachControl(), iT.autoClear = !1, UT.d.MIN_RENDERINGGROUPS = -1;
          for (let kT = UT.d.MIN_RENDERINGGROUPS; kT <= 1; kT++) iT.setRenderingOrder(kT, JT.e.PainterSortCompare, JT.e.PainterSortCompare, JT.e.PainterSortCompare);
          iT.setRenderingAutoClearDepthStencil(0, !1), jT.c.Enabled = !1, TT.giT = new co(TT, Math.round(oT.hiT)), TT.miT = new CT.c("camHolder", iT), TT.camera = new fT.e("camera", new XT.sc(0, 0, 0), iT), TT.camera.parent = TT.miT, Ko(TT), (0, QT.i)(TT, ((TT, oT, IT) => (0, YT.h)(oT, IT, TT.NK))), iT.clearColor = WT.b.FromArray(oT.clearColor), iT.ambientColor = WT.Color3.FromArray(oT.ambientColor);
          const zT = IT(iT, oT.RiT);
          iT.onNewLightAddedObservable.add((TT => {
            zT.some((oT => oT === TT)) || console.error(`Light "${TT.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), iT.skipPointerMovePicking = !0
        }(TT, oT, ro), Mo(TT.NK)
      },
      wiT: Ko,
      setBabylonFog: function(TT, oT, IT, iT) {
        const zT = TT.NK;
        zT.fogMode = 3, zT.fogStart = oT, zT.fogEnd = IT, zT.fogColor.set(iT[0], iT[1], iT[2])
      },
      fiT: function(TT, oT, IT) {
        return TT.engine.rK >= 2 && (TT.CiT || (TT.CiT = new ET(TT.NK)), !TT.CiT.failed) ? TT.CiT.aJ(oT, IT) : new Ao(oT, IT, TT.NK)
      },
      JiT: function(TT, oT) {
        TT.NK.bR.forEach((IT => {
          if (IT instanceof vT) return void IT.F_(oT, TT.FL.uL);
          const iT = IT;
          if (iT.emitter.getConnectedParticleSystems)
            for (const TT of iT._particles) TT.position.set(TT.position.x - oT[0], TT.position.y - oT[1], TT.position.z - oT[2]);
          else {
            if (!iT.worldOffset) throw new Error("Particle system has no world offset");
            iT.worldOffset.x = -TT.FL.uL[0], iT.worldOffset.y = -TT.FL.uL[1], iT.worldOffset.z = -TT.FL.uL[2]
          }
        }))
      },
      linesFromArrays: function(TT, oT, IT) {
        const iT = new BT.e(oT, TT.NK, null, void 0, void 0, !1);
        return (0, YT.d)(oT, IT, TT.NK, iT), iT
      },
      PK: ko,
      jiT: function(TT, oT) {
        return go.origin.SIT(oT.origin), go.direction.SIT(oT.direction), go.length = oT.length, go.epsilon = oT.epsilon, go.jiT(TT, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40425: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => MT,
      c: () => XT,
      g: () => WT,
      i: () => FT
    });
    var iT = IT(36175),
      zT = IT(37687),
      kT = IT(37682);

    function WT(TT, oT, IT, iT) {
      const zT = kT.v;
      oT.fill(0), TT.gravity.toArray(oT, zT.gravity), TT.colorDead.toArray(oT, zT.colorDead), IT[zT.ramp] = TT.useRampGradients ? 1 : 0;
      const WT = TT.getColorGradients(),
        XT = LT(TT, WT, "colour", iT);
      IT[zT.colorCount] = XT;
      for (let kT = 0; kT < XT; kT++) {
        var BT;
        const TT = WT[xT(WT, kT)];
        oT[zT.colorPositions + kT] = TT.gradient, TT.color1.toArray(oT, zT.color1 + 4 * kT), (null !== (BT = TT.color2) && void 0 !== BT ? BT : TT.color1).toArray(oT, zT.color2 + 4 * kT)
      }
      const FT = TT.getVelocityGradients(),
        ST = LT(TT, FT, "LM", iT);
      IT[zT.velocityCount] = ST;
      for (let kT = 0; kT < ST; kT++) AT(oT, zT.LM + 4 * kT, FT[xT(FT, kT)]);
      const DT = TT.useRampGradients ? TT.getColorRemapGradients() : null,
        cT = LT(TT, DT, "colour remap", iT);
      IT[zT.remapCount] = cT;
      for (let kT = 0; kT < cT; kT++) AT(oT, zT.remap + 4 * kT, DT[xT(DT, kT)])
    }

    function XT() {
      return {
        key: [],
        texels: new Uint8Array(4 * kT.l)
      }
    }
    const BT = [];

    function FT(TT, oT) {
      return ST(TT, BT), !rT(BT, oT.key) && (oT.key.length = 0, oT.key.push(...BT), oT.key.length > 0 && function(TT, oT) {
        for (let IT = 0; IT < kT.l; IT++) zT.i.GetCurrentGradient(IT / kT.l, TT, ((TT, oT, IT) => {
          iT.Color3.LerpToRef(TT.color, oT.color, IT, DT)
        })), oT[4 * IT] = 255 * DT.r, oT[4 * IT + 1] = 255 * DT.g, oT[4 * IT + 2] = 255 * DT.b, oT[4 * IT + 3] = 255
      }(TT.getRampGradients(), oT.texels), !0)
    }

    function ST(TT, oT) {
      oT.length = 0;
      const IT = TT.useRampGradients ? TT.getRampGradients() : null;
      if (null !== IT && void 0 !== IT && IT.length) {
        oT.push(IT.length);
        for (const TT of IT) oT.push(TT.gradient, TT.color.r, TT.color.g, TT.color.b)
      }
    }
    const DT = new iT.Color3;

    function LT(TT, oT, IT, iT) {
      return oT ? oT.length > kT.c ? (iT(`particleStops:${IT}`, `GPU particles use the first 2 and last ${kT.c-2} of more than ${kT.c} ${IT} gradient stops (${TT.name})`), kT.c) : oT.length : 0
    }

    function xT(TT, oT) {
      return oT < 2 || TT.length <= kT.c ? oT : TT.length - kT.c + oT
    }
    const cT = new Float32Array(kT.o),
      KT = new Uint32Array(cT.buffer);

    function MT(TT, oT, IT) {
      return WT(TT, cT, KT, IT), oT && rT(KT, oT) ? null : KT.slice()
    }

    function rT(TT, oT) {
      if (TT.length !== oT.length) return !1;
      for (let IT = 0; IT < TT.length; IT++)
        if (TT[IT] !== oT[IT]) return !1;
      return !0
    }

    function AT(TT, oT, IT) {
      var iT;
      TT[oT] = IT.gradient, TT[oT + 1] = IT.factor1, TT[oT + 2] = null !== (iT = IT.factor2) && void 0 !== iT ? iT : IT.factor1
    }
  },
  40417: (TT, oT, IT) => {
    function iT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const oT = new Set;
      return (IT, iT) => {
        oT.has(IT) || (oT.add(IT), console.warn(TT + iT))
      }
    }
    IT.d(oT, {
      c: () => iT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);