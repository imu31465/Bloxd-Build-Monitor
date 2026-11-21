export const id = 0;
export const ids = [0];
export const modules = {
  40532: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      CapeMaterialPlugin: () => pQ,
      HueTintMaterialPlugin: () => cQ,
      LifeformMaterialPlugin: () => CQ,
      OverlayMaterialPlugin: () => SQ
    });
    var LQ = wQ(40535),
      qQ = wQ(37557);
    class oQ extends((0, LQ.h)(qQ.c)) {}(0, LQ.j)(qQ.c, oQ);
    var DQ = wQ(36782);
    class kQ extends((0, LQ.h)(DQ.f)) {}(0, LQ.j)(DQ.f, kQ);
    var vQ = wQ(37401);
    class mQ extends((0, LQ.h)(vQ.e)) {}(0, LQ.j)(vQ.e, mQ);
    var uQ = wQ(37019),
      HQ = wQ(39692),
      bQ = wQ(37016);
    class YQ extends((0, LQ.h)(bQ.h)) {
      constructor(QQ, FQ, wQ) {
        super(QQ, FQ, wQ), (0, uQ.e)(QQ)
      }
      dispose(QQ) {
        (0, uQ.g)(this._material), super.dispose(QQ)
      }
    }(0, LQ.j)(bQ.h, YQ), (0, bQ.j)({
      disableUnusedSpecularTerm: LQ.d,
      isLightingDisabled: QQ => QQ instanceof HQ.StandardMaterial && QQ.disableLighting
    });
    var xQ = wQ(38220);
    class AQ extends((0, LQ.h)(xQ.e)) {}(0, LQ.j)(xQ.e, AQ);
    var tQ = wQ(38328),
      eQ = wQ(36881),
      MQ = wQ(37678),
      GQ = wQ(36831);
    class pQ extends((0, LQ.h)(tQ.e)) {}(0, LQ.j)(tQ.e, pQ);
    class cQ extends((0, LQ.h)(eQ.d)) {}(0, LQ.j)(eQ.d, cQ);
    class CQ extends((0, LQ.h)(MQ.o)) {}(0, LQ.j)(MQ.o, CQ);
    class SQ extends((0, LQ.h)(GQ.b)) {}(0, LQ.j)(GQ.b, SQ)
  },
  40965: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      addBabylonLights: () => eF,
      default: () => pF
    });
    var LQ = wQ(40970),
      qQ = (wQ(39380), wQ(40526), wQ(39906), wQ(40981)),
      oQ = wQ(39211),
      DQ = wQ(36870),
      kQ = wQ(36688),
      vQ = wQ(40988),
      mQ = wQ(40992),
      uQ = wQ(36822),
      HQ = (wQ(40535), wQ(41005)),
      bQ = wQ(40998),
      YQ = wQ(38247),
      xQ = wQ(41008),
      AQ = wQ(39251),
      tQ = wQ(38230);
    const eQ = "gpuParticles",
      MQ = tQ.y,
      GQ = QQ => QQ / 4,
      pQ = QQ => `gpuParticleSystem[${QQ>>2}].${"xyzw"[3&QQ]}`,
      cQ = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${tQ.e}\n#define COLOR_POSITIONS ${GQ(MQ.colorPositions)}\n#define COLOR1 ${GQ(MQ.color1)}\n#define COLOR2 ${GQ(MQ.color2)}\n#define VELOCITY ${GQ(MQ.Qt)}\n#define REMAP ${GQ(MQ.remap)}\n#define RECORDS_PER_ROW ${tQ.n}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${tQ.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${pQ(MQ.gravity)}, ${pQ(MQ.gravity+1)}, ${pQ(MQ.gravity+2)}); }\nint colorCount() { return int(${pQ(MQ.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${GQ(MQ.colorDead)}]; }\nint velocityCount() { return int(${pQ(MQ.velocityCount)}); }\nint remapCount() { return int(${pQ(MQ.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    AQ.c.ShadersStore[`${eQ}VertexShader`] = cQ, AQ.c.ShadersStore[`${eQ}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const CQ = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      SQ = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var iQ = wQ(38222),
      WQ = wQ(41015);
    class RQ extends iQ.e {
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, FQ, wQ), this.renderer = wQ, this.lA = LQ, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(tQ.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, WQ.d)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (QQ, FQ) => {
          const {
            engine: wQ
          } = this, LQ = wQ._gl;
          wQ._bindTextureDirectly(LQ.TEXTURE_2D, this.records, !0), wQ._unpackFlipY(!1);
          const qQ = this.ring.recordBits;
          for (let oQ = QQ; oQ < FQ;) {
            const QQ = Math.floor(oQ / tQ.n),
              wQ = Math.min(FQ, (QQ + 1) * tQ.n);
            LQ.texSubImage2D(LQ.TEXTURE_2D, 0, oQ % tQ.n * 4, QQ, 4 * (wQ - oQ), 1, LQ.RGBA_INTEGER, LQ.UNSIGNED_INT, qQ, oQ * tQ.f), oQ = wQ
          }
          wQ._bindTextureDirectly(LQ.TEXTURE_2D, null)
        }, this.id = QQ;
        const qQ = LQ.Wx();
        this.engine = qQ;
        const oQ = Math.max(1, FQ),
          DQ = Math.min(oQ, tQ.n);
        this.records = qQ.createRawTexture(null, 4 * DQ, Math.ceil(oQ / DQ), HQ.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, HQ.d.TEXTURE_NEAREST_SAMPLINGMODE, null, HQ.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lA.getAnimationRatio() || 1;
        const FQ = this.lA.getFrameId();
        if (FQ === this.animatedFrame) return !1;
        const wQ = super.animate(QQ);
        return wQ && (this.animatedFrame = FQ, this.ring.takeUploads(this.uploadSlots)), wQ
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(QQ) {
        (0, WQ.e)(this, this.uniforms, this.uniformBits, QQ);
        for (const wQ of tQ.u) this.uniforms[wQ] = this.uniformBits[wQ];
        var FQ;
        (0, WQ.g)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (FQ = this.ramp) || void 0 === FQ || FQ.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = bQ.c.CreateRGBATexture(this.rampTexels.texels, tQ.k, 1, this.lA, !1, !1, HQ.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var QQ;
        this.records.dispose(), null === (QQ = this.ramp) || void 0 === QQ || QQ.dispose(), this.ramp = null
      }
    }
    class OQ {
      constructor(QQ) {
        this.lA = QQ, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, xQ.b)(), this.engine = QQ.Wx(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = bQ.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, QQ, !1, !1, HQ.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      aT(QQ, FQ) {
        const wQ = tQ.n * this.engine.getCaps().maxTextureSize;
        FQ > wQ && this.warnOnce(`capacity:${QQ}`, `particle system ${QQ} holds ${wQ} particles, not ${FQ}: its records texture's limit`);
        const LQ = new RQ(QQ, Math.min(FQ, wQ), this, this.lA);
        return this.lA.addParticleSystem(LQ), LQ
      }
      canDraw(QQ) {
        var FQ, wQ;
        if (this.failed || null === (FQ = QQ.texture) || void 0 === FQ || null === (wQ = FQ.mirror) || void 0 === wQ || !wQ.isReady()) return !1;
        for (const LQ of (0, YQ.l)(QQ.blendMode))
          if (!this.effectFor(LQ).isReady()) return !1;
        return !0
      }
      disposeStopped(QQ) {
        this.lA._toBeDisposed.push(QQ)
      }
      remove(QQ) {
        this.lA.removeParticleSystem(QQ), QQ.releaseGl()
      }
      render(QQ) {
        var FQ;
        if (!QQ.isReady() || !QQ.hasLiveParticles()) return 0;
        const {
          engine: wQ,
          lA: LQ,
          frame: qQ
        } = this;
        QQ.prepareDraw(this.warnOnce), QQ.drawOffset(qQ, 0), qQ[3] = QQ.drawTime();
        const oQ = QQ.ring.drawStart(),
          DQ = QQ.ring.drawCount(),
          kQ = null !== (FQ = QQ.ramp) && void 0 !== FQ ? FQ : this.whiteRamp;
        wQ.setState(!1);
        for (const vQ of (0, YQ.l)(QQ.blendMode)) {
          const FQ = this.effectFor(vQ);
          wQ.enableEffect(FQ), FQ.setTexture("gpuParticleTexture", QQ.texture.mirror), FQ.setTexture("gpuParticleRampTexture", kQ), FQ._bindTexture("gpuParticleRecords", QQ.records), FQ.setMatrix("gpuParticleView", LQ.getViewMatrix()), FQ.setMatrix("gpuParticleProjection", LQ.getProjectionMatrix()), FQ.setFloatArray4("gpuParticleSystem", QQ.uniforms), FQ.setFloat4("gpuParticleFrame", qQ[0], qQ[1], qQ[2], qQ[3]), FQ.setFloat2("gpuParticleRange", oQ, DQ), FQ.setFloat("gpuParticleRamp", QQ.uniforms[tQ.y.ramp]), wQ.bindBuffers(this.vertexBuffers, null, FQ), wQ.setAlphaMode((0, YQ.j)(vQ)), wQ.drawArraysType(HQ.d.MATERIAL_TriangleStripDrawMode, 0, 4, DQ), FQ._bindTexture("gpuParticleRecords", null)
        }
        return wQ.setAlphaMode(HQ.d.ALPHA_DISABLE), DQ
      }
      awaitLink(QQ) {
        const FQ = QQ.getPipelineContext(),
          wQ = this.engine._gl;
        !this.failed && wQ && (!FQ || FQ.isParallelCompiled && !FQ.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : FQ.isParallelCompiled && FQ.program && (wQ.getProgramParameter(FQ.program, wQ.LINK_STATUS) || this.fail(wQ.getProgramInfoLog(FQ.program) || "a program did not link")))
      }
      effectFor(QQ) {
        return QQ === YQ.e ? this.multiplyEffect : this.effect
      }
      createEffect(QQ) {
        return this.engine.createEffect(eQ, [], CQ, SQ, QQ, void 0, void 0, ((QQ, FQ) => {
          this.fail(FQ)
        }))
      }
      fail(QQ) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${QQ}`);
          for (const QQ of this.lA.fC.slice()) QQ instanceof RQ && QQ.disposeOnStop && QQ.dispose()
        }
      }
    }
    var sQ = wQ(39625),
      rQ = wQ(40518),
      IQ = wQ(39352),
      UQ = wQ(39582),
      NQ = wQ(39574),
      TQ = wQ(39491),
      KQ = wQ(40571),
      zQ = wQ(37172),
      lQ = wQ(41021),
      jQ = wQ(41027),
      aQ = wQ(41033),
      XQ = wQ(39518),
      fQ = wQ(2797),
      VQ = wQ(37082),
      hQ = wQ(39736),
      JQ = wQ(37145),
      EQ = wQ(37100);

    function nQ(QQ) {
      if (QQ.visibility < 1 || !QQ.isVisible || !QQ.isEnabled() || QQ.metadata[EQ.e] || !QQ.isReady()) return !0;
      const FQ = QQ.lC;
      if (!FQ || 0 === FQ.length) return !0;
      for (let wQ = 0; wQ < FQ.length; wQ++) {
        const LQ = FQ[wQ],
          qQ = LQ.Ux();
        if (!qQ || !qQ.isReadyForSubMesh(QQ, LQ, !1)) return !0
      }
      return !1
    }
    class gQ {
      constructor(QQ, FQ) {
        this.dH = QQ, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, FQ.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      mY(QQ) {
        var FQ;
        const wQ = this.armed;
        if (this.armed = !1, this.vis = null, !wQ) return !1;
        this.culled = 0;
        const {
          dH: LQ
        } = this, qQ = null === (FQ = LQ.RC) || void 0 === FQ ? void 0 : FQ.visibility;
        if (!qQ || !QQ || LQ.Zx.yx) return !1;
        if (!(LQ.nH.KLQ[0] >= JQ.h)) return !1;
        const oQ = QQ.getProjectionMatrix().m;
        if (0 !== oQ[15]) return !1;
        const DQ = LQ.Mb,
          kQ = QQ.globalPosition,
          vQ = this.eye;
        return vQ[0] = kQ.x + DQ[0], vQ[1] = kQ.y + DQ[1], vQ[2] = kQ.z + DQ[2], !!qQ.eyeClear(vQ[0], vQ[1], vQ[2], QQ.minZ, oQ, LQ.nH) && (this.vis = qQ, this.passable.clear(), this.count = 0, !0)
      }
      see(QQ, FQ) {
        const wQ = this.count++;
        if (wQ === this.cellSlots.length) {
          const QQ = new Int32Array(2 * wQ);
          QQ.set(this.cellSlots), this.cellSlots = QQ
        }
        this.cellSlots[wQ] = FQ, this.meshes[wQ] = QQ
      }
      seeThrough(QQ) {
        this.passable.add(QQ)
      }
      finish(QQ, FQ) {
        const {
          vis: wQ,
          eye: LQ,
          meshes: qQ,
          count: oQ,
          cellSlots: DQ
        } = this, {
          nH: kQ
        } = this.dH, [vQ, mQ] = kQ.KLQ, uQ = null !== wQ && wQ.update(LQ[0], LQ[1], LQ[2], kQ.KQQ, vQ, mQ, this.passable);
        let HQ = 0;
        for (let bQ = 0; bQ < oQ; bQ++) {
          const LQ = qQ[bQ];
          if (uQ) {
            const QQ = 3 * DQ[bQ];
            if (QQ >= 0 && !wQ.isDrawn(FQ[QQ], FQ[QQ + 1], FQ[QQ + 2])) {
              HQ++;
              continue
            }
          }
          XQ.d.prototype.push.call(QQ, LQ)
        }
        qQ.fill(null, 0, oQ), this.count = 0, this.vis = null, this.culled = HQ
      }
    }
    var PQ = wQ(37129),
      ZQ = wQ(37093),
      yQ = wQ(39717),
      BQ = wQ(41039),
      dQ = wQ(39725),
      QF = wQ(39650);
    let FF = 1;
    const wF = new WeakSet;

    function LF() {
      return FF
    }

    function qF() {
      FF = FF >= 1073741823 ? 1 : FF + 1
    }

    function oF(QQ) {
      const FQ = QQ.metadata;
      if (!FQ || !0 !== FQ[VQ.s]) return;
      const wQ = FQ[VQ.y],
        LQ = null === wQ || void 0 === wQ ? void 0 : wQ._noaStamps;
      if (!wQ || !LQ) return;
      const qQ = wQ.entries.indexOf(QQ);
      qQ >= 0 && (LQ[qQ] = 0)
    }

    function DF(QQ) {
      const FQ = QQ.lC;
      for (let wQ = 0; wQ < FQ.length; wQ++) {
        const QQ = FQ[wQ].Ux();
        if (QQ && !QQ.isFrozen) return !1
      }
      for (let wQ = 0; wQ < FQ.length; wQ++) {
        const QQ = FQ[wQ].Ux();
        QQ && wF.add(QQ)
      }
      return !0
    }
    let kF = !1;
    const vF = new WeakSet;

    function mF(QQ, FQ) {
      const wQ = QQ[FQ];
      if ("function" !== typeof wQ) throw new Error(`terrainDrawState: Babylon has no ${FQ} to hook`);
      return wQ
    }

    function uF(QQ, FQ, wQ, LQ, qQ) {
      const oQ = wQ.nH.KQQ,
        DQ = new Map;
      let kQ = 0;
      const vQ = new gQ(wQ, QQ),
        mQ = new PQ.b(oQ, QQ.Wx());
      ! function(QQ) {
        if (vF.has(QQ) || (vF.add(QQ), QQ.onContextLostObservable.add(qF), QQ.onContextRestoredObservable.add(qF)), kF) return;
        kF = !0;
        const FQ = BQ.e.prototype,
          wQ = mF(FQ, "_markSubMeshesAsDirty");
        Object.assign(FQ, {
          _markSubMeshesAsDirty(QQ) {
            wQ.call(this, QQ), oF(this)
          }
        });
        const LQ = mF(QF.c.prototype, "_syncParentEnabledState");
        Object.assign(QF.c.prototype, {
          _syncParentEnabledState() {
            LQ.call(this), oF(this)
          }
        });
        const qQ = mF(dQ.c.prototype, "resetDrawCache");
        dQ.c.prototype.resetDrawCache = function(QQ, FQ) {
          qQ.call(this, QQ, FQ), oF(this.getMesh())
        };
        const oQ = yQ.d.prototype,
          DQ = mF(oQ, "markDirty");
        oQ.markDirty = function(QQ) {
          DQ.call(this, QQ), wF.has(this) && qF()
        };
        const kQ = mF(oQ, "_markAllSubMeshesAsDirty");
        Object.assign(oQ, {
          _markAllSubMeshesAsDirty(QQ) {
            kQ.call(this, QQ), wF.has(this) && qF()
          }
        })
      }(QQ.Wx());
      let uQ = new Float64Array(384),
        HQ = new Int32Array(64),
        bQ = new Uint8Array(64),
        YQ = new Float64Array(64),
        xQ = new Int32Array(192),
        AQ = 0;
      const tQ = [],
        eQ = new Float64Array(24),
        MQ = () => {
          const QQ = tQ.pop();
          return void 0 !== QQ ? (HQ[QQ] = 0, QQ) : (AQ === HQ.length && (uQ = HF(uQ, new Float64Array(2 * uQ.length)), HQ = HF(HQ, new Int32Array(2 * HQ.length)), bQ = HF(bQ, new Uint8Array(2 * bQ.length)), YQ = HF(YQ, new Float64Array(2 * YQ.length)), xQ = HF(xQ, new Int32Array(2 * xQ.length))), AQ++)
        },
        GQ = QQ => {
          const FQ = 6 * QQ._noaSlot,
            wQ = QQ.hLQ[0],
            LQ = QQ.hLQ[1];
          uQ[FQ] = wQ.x, uQ[FQ + 1] = wQ.y, uQ[FQ + 2] = wQ.z, uQ[FQ + 3] = LQ.x, uQ[FQ + 4] = LQ.y, uQ[FQ + 5] = LQ.z
        },
        pQ = (QQ, FQ, wQ) => {
          if (!wQ) return vQ.see(QQ, -1), !1;
          const LQ = nQ(QQ);
          return LQ && vQ.seeThrough(YQ[FQ]), vQ.see(QQ, FQ), !LQ
        };
      let cQ = -1;
      return QQ.getActiveMeshCandidates = () => {
        const wQ = QQ.frustumPlanes,
          LQ = FQ._selectionContent;
        LQ.reset(), (wQ => {
          const LQ = QQ.frustumPlanes;
          kQ = kQ + 1 | 0 || 1;
          const qQ = FQ.blocks,
            oQ = vQ.mY(QQ.activeCamera),
            DQ = oQ && !0;
          if (DQ) {
            const FQ = QQ.Wx().currentRenderPassId;
            FQ !== cQ && (cQ = FQ, qF())
          }
          const mQ = LF(),
            YQ = DQ && !1;
          qQ.length > 0 && function(QQ, FQ) {
            for (let wQ = 0; wQ < 6; wQ++) {
              const LQ = QQ[wQ],
                qQ = LQ.normal;
              FQ[4 * wQ] = qQ.x, FQ[4 * wQ + 1] = qQ.y, FQ[4 * wQ + 2] = qQ.z, FQ[4 * wQ + 3] = LQ.d
            }
          }(LQ, eQ);
          const AQ = uQ,
            tQ = HQ,
            MQ = bQ;
          for (let QQ = 0; QQ < qQ.length; QQ++) {
            const FQ = qQ[QQ];
            if (!hQ.e.IsInFrustum(FQ.hLQ, LQ)) continue;
            const uQ = FQ.entries;
            {
              const QQ = FQ._noaSlots,
                LQ = FQ._noaStamps,
                qQ = FQ._noaTerrain;
              for (let FQ = 0; FQ < uQ.length; FQ++) {
                const HQ = QQ[FQ];
                if (tQ[HQ] !== kQ && (tQ[HQ] = kQ, MQ[HQ] = bF(AQ, 6 * HQ, eQ) ? 1 : 0), 0 === MQ[HQ]) continue;
                const bQ = uQ[FQ];
                if (DQ && LQ[FQ] === mQ) YQ && 1 === qQ[FQ] && nQ(bQ) && 0, vQ.see(bQ, 1 === qQ[FQ] ? HQ : -1);
                else if (DQ) {
                  LQ[FQ] = mQ;
                  const QQ = !0 === bQ.metadata[ZQ.i];
                  qQ[FQ] = QQ ? 1 : 0;
                  const wQ = pQ(bQ, HQ, QQ);
                  !QQ || wQ && DF(bQ) || (LQ[FQ] = 0)
                } else oQ ? pQ(bQ, HQ, !0 === bQ.metadata[ZQ.i]) : XQ.d.prototype.push.call(wQ, bQ)
              }
              continue
            }
          }
          oQ && vQ.finish(wQ, xQ)
        })(LQ), mQ.apply(LQ, QQ.activeCamera);
        const oQ = FQ.fLQ;
        for (let QQ = 0; QQ < oQ.length; QQ++) {
          const FQ = oQ[QQ];
          FQ.isEnabled() && XQ.d.prototype.push.call(LQ, FQ)
        }
        return qQ(LQ, wQ), LQ
      }, {
        JLQ: () => vQ.culled,
        sLQ: (QQ, FQ) => {
          const qQ = Math.floor(FQ[0] / oQ),
            kQ = Math.floor(FQ[1] / oQ),
            vQ = Math.floor(FQ[2] / oQ),
            mQ = `${qQ}|${kQ}|${vQ}`;
          let uQ = DQ.get(mQ);
          if (!uQ) {
            const QQ = [0, 0, 0];
            wQ.OFQ([qQ * oQ - 1, kQ * oQ - 1, vQ * oQ - 1], null, QQ), uQ = Object.assign(LQ(QQ, oQ + 2), {
              ELQ: mQ,
              nLQ: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: MQ()
            }), GQ(uQ), YQ[uQ._noaSlot] = (0, fQ.i)(qQ, kQ, vQ), xQ[3 * uQ._noaSlot] = qQ, xQ[3 * uQ._noaSlot + 1] = kQ, xQ[3 * uQ._noaSlot + 2] = vQ, DQ.set(mQ, uQ)
          }
          uQ.nLQ++, QQ.metadata[VQ.C] = uQ
        },
        yN: QQ => {
          const FQ = QQ.metadata[VQ.C];
          FQ && (FQ.nLQ--, FQ.nLQ <= 0 && (DQ.delete(FQ.ELQ), tQ.push(FQ._noaSlot)), QQ.metadata[VQ.C] = null)
        },
        XLQ: (QQ, FQ) => {
          const wQ = QQ,
            LQ = FQ.metadata[VQ.C];
          (wQ._noaSlots ??= []).push(LQ._noaSlot), (wQ._noaStamps ??= []).push(0), (wQ._noaTerrain ??= []).push(0), wQ.entries.push(FQ)
        },
        removeEntry: (QQ, FQ) => {
          const wQ = QQ,
            LQ = wQ.entries,
            qQ = LQ.indexOf(FQ);
          if (qQ < 0) return;
          const oQ = wQ._noaSlots,
            DQ = wQ._noaStamps,
            kQ = wQ._noaTerrain,
            vQ = LQ.length - 1;
          LQ[qQ] = LQ[vQ], oQ[qQ] = oQ[vQ], DQ[qQ] = DQ[vQ], kQ[qQ] = kQ[vQ], LQ.pop(), oQ.pop(), DQ.pop(), kQ.pop()
        },
        kQQ: QQ => {
          for (const FQ of DQ.values()) {
            FQ.TLQ.gLQ(QQ), FQ.NLQ.gLQ(QQ);
            for (const wQ of FQ.hLQ) wQ.gLQ(QQ);
            GQ(FQ)
          }
        }
      }
    }

    function HF(QQ, FQ) {
      return FQ.set(QQ), FQ
    }

    function bF(QQ, FQ, wQ) {
      const LQ = QQ[FQ],
        qQ = QQ[FQ + 1],
        oQ = QQ[FQ + 2],
        DQ = QQ[FQ + 3],
        kQ = QQ[FQ + 4],
        vQ = QQ[FQ + 5];
      for (let mQ = 0; mQ < 24; mQ += 4) {
        const QQ = wQ[mQ],
          FQ = wQ[mQ + 1],
          uQ = wQ[mQ + 2];
        if (!(QQ * (QQ >= 0 ? DQ : LQ) + FQ * (FQ >= 0 ? kQ : qQ) + uQ * (uQ >= 0 ? vQ : oQ) + wQ[mQ + 3] >= 0)) return !1
      }
      return !0
    }
    var YF = wQ(37333);
    class xF {
      constructor(QQ, FQ) {
        var wQ = QQ.lA;
        wQ.HLQ(new aQ.b(wQ));
        var LQ = new lQ.e(vQ);
        wQ.ZLQ = LQ, LQ.blocks = [];
        var qQ, oQ = {},
          DQ = [];
        this.textPlanes = DQ, this.JLQ = () => qQ.JLQ(), this.kQQ = QQ => {
          uQ(LQ, QQ), qQ.kQQ(QQ)
        }, this.sLQ = (FQ, wQ, kQ) => {
          if (!FQ.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!FQ.metadata[VQ.y] && !FQ.metadata[VQ.q]) {
            if (!wQ) {
              var vQ = LQ.fLQ;
              if (FQ.metadata[VQ.E] && !FQ.parent) {
                vQ = DQ;
                var uQ = FQ.sK().BLQ;
                FQ.metadata[VQ.H] = uQ.center.length() + uQ.radius, FQ.Rx = !0
              }
              return vQ.push(FQ), FQ.metadata[VQ.k] = vQ, void(FQ.metadata[VQ.q] = !0)
            }
            var bQ = Math.floor(kQ[0] / mQ),
              YQ = Math.floor(kQ[1] / mQ),
              xQ = Math.floor(kQ[2] / mQ),
              AQ = bQ + "|" + YQ + "|" + xQ,
              tQ = oQ[AQ];
            if (!tQ) {
              var eQ = [bQ * mQ, YQ * mQ, xQ * mQ],
                MQ = [0, 0, 0];
              QQ.dH.OFQ(eQ, null, MQ), tQ = HQ(MQ, mQ), LQ.blocks.push(tQ), oQ[AQ] = tQ, tQ.ELQ = AQ
            }
            qQ.sLQ(FQ, kQ), qQ.XLQ(tQ, FQ), tQ.nLQ = (tQ.nLQ || 0) + 1, FQ.metadata[VQ.y] = tQ, FQ.metadata[VQ.s] = !0, FQ.Rx = !0
          }
        }, this.yN = QQ => {
          if (QQ.metadata) {
            QQ.metadata[VQ.q] && ((0, fQ.o)(QQ.metadata[VQ.k], QQ), QQ.metadata[VQ.q] = !1), QQ.metadata[VQ.k] === DQ && (QQ.Rx = !1), QQ.metadata[VQ.k] = void 0, QQ.metadata[VQ.H] = void 0;
            var FQ = QQ.metadata[VQ.y];
            FQ && FQ.entries && (QQ.metadata[VQ.s] && qQ.removeEntry(FQ, QQ), FQ.nLQ--, FQ.nLQ <= 0 && (delete oQ[FQ.ELQ], (0, fQ.o)(LQ.blocks, FQ))), qQ.yN(QQ), QQ.metadata[VQ.y] = null, QQ.metadata[VQ.s] = !1
          }
        }, this.W4 = function(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (QQ.metadata[VQ.y]) {
            if (QQ.metadata[VQ.s] === FQ) return;
            var wQ = QQ.metadata[VQ.y];
            wQ && wQ.entries && (FQ ? qQ.XLQ(wQ, QQ) : qQ.removeEntry(wQ, QQ)), QQ.metadata[VQ.s] = FQ
          } else {
            if (QQ.metadata[VQ.q] === FQ) return;
            var oQ = QQ.metadata[VQ.k] || LQ.fLQ;
            FQ ? oQ.push(QQ) : (0, fQ.o)(oQ, QQ), QQ.metadata[VQ.q] = FQ
          }
        };
        var vQ = () => {},
          mQ = FQ * QQ.dH.nH.KQQ,
          uQ = (QQ, FQ) => {
            QQ.blocks.forEach((QQ => {
              QQ.TLQ.gLQ(FQ), QQ.NLQ.gLQ(FQ), QQ.hLQ.forEach((QQ => QQ.gLQ(FQ))), QQ.blocks && uQ(QQ, FQ)
            }))
          },
          HQ = (QQ, FQ) => {
            var wQ = new kQ.Ox(QQ[0], QQ[1], QQ[2]),
              LQ = new kQ.Ox(QQ[0] + FQ, QQ[1] + FQ, QQ[2] + FQ);
            return new jQ.e(wQ, LQ, void 0, void 0, void 0, vQ)
          };
        qQ = uF(wQ, LQ, QQ.dH, HQ, ((QQ, FQ) => {
          for (var wQ = 0; wQ < DQ.length; wQ++) {
            var LQ = DQ[wQ];
            LQ.isEnabled(!1) && ((0, YF.b)(LQ, FQ) && XQ.d.prototype.push.call(QQ, LQ))
          }
        }))
      }
    }

    function AF(QQ) {
      const {
        holderPosition: FQ,
        holderRotation: wQ,
        Q8: LQ,
        fov: qQ,
        near: oQ,
        far: DQ
      } = QQ.model.yB, kQ = QQ.DqQ;
      kQ.position.vQQ(FQ[0], FQ[1], FQ[2]), kQ.rotation.vQQ(wQ[0], wQ[1], wQ[2]);
      const vQ = QQ.camera;
      vQ.position.vQQ(LQ[0], LQ[1], LQ[2]), vQ.fov = qQ, vQ.minZ = oQ, vQ.maxZ = DQ
    }

    function tF(QQ) {
      const FQ = QQ.Wx(),
        wQ = FQ,
        LQ = wQ._gl;
      if (!LQ || wQ.oA < 2 || FQ.SLQ || LQ.getParameter(LQ.DEPTH_BITS) < 24) return !1;
      const qQ = QQ._renderingManager,
        oQ = qQ.getRenderingGroup(-1),
        DQ = qQ.getRenderingGroup(0),
        kQ = UQ.e.prototype.render;
      return oQ.render = function(QQ, FQ, wQ, LQ, qQ, oQ, vQ, mQ, uQ) {
        (QQ || DQ._empty) && kQ.call(this, QQ, FQ, wQ, LQ, qQ, oQ, vQ, mQ, uQ)
      }, DQ.render = function(QQ, wQ, qQ, DQ) {
        let vQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          bQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          YQ = arguments.length > 8 ? arguments[8] : void 0;
        QQ ? kQ.call(this, QQ, wQ, qQ, DQ, vQ, mQ, uQ, bQ, YQ) : (FQ.setAlphaMode(HQ.d.ALPHA_DISABLE), kQ.call(this, null, !1, !1, DQ, vQ, mQ, uQ, !1), oQ._empty || (LQ.depthRange(1, 1), kQ.call(oQ, null, wQ, qQ, DQ, vQ, mQ, uQ, bQ, YQ), LQ.depthRange(0, 1)), kQ.call(this, null, wQ, qQ, DQ, !1, !1, !1, bQ, YQ))
      }, !0
    }

    function eF(QQ, FQ) {
      return [FQ, zQ.g].map(((FQ, wQ) => {
        const LQ = new qQ.b("light", kQ.Ox.FromArray(FQ), QQ);
        return LQ.diffuse = DQ.Color3.FromArray([1, 1, 1]), LQ.specular = DQ.Color3.FromArray([1, 1, 1]), LQ.intensity = zQ.e[wQ], LQ
      }))
    }
    class MF extends mQ.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(QQ) {
        var FQ;
        this.heldTexture = QQ, this.particleTexture = null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.mirror) && void 0 !== FQ ? FQ : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        QQ && (this.particleTexture = null, (0, uQ.v)(this.heldTexture), this.heldTexture = null), super.dispose(QQ, FQ, wQ)
      }
    }
    const GF = LQ.c.Zero();
    const pF = {
      awQ: function(QQ, FQ) {
        return new oQ.b(QQ, FQ.zwQ, {
          preserveDrawingBuffer: FQ.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      mqQ: function(QQ, FQ) {
        ! function(QQ, FQ, wQ) {
          const LQ = new TQ.d(QQ.engine);
          QQ.lA = LQ, LQ.detachControl(), LQ.autoClear = !1, NQ.e.MIN_RENDERINGGROUPS = -1;
          for (let oQ = NQ.e.MIN_RENDERINGGROUPS; oQ <= 1; oQ++) LQ.setRenderingOrder(oQ, UQ.e.PainterSortCompare, UQ.e.PainterSortCompare, UQ.e.PainterSortCompare);
          LQ.setRenderingAutoClearDepthStencil(0, !1), IQ.e.Enabled = !1, QQ.LqQ = new xF(QQ, Math.round(FQ.qqQ)), QQ.DqQ = new rQ.e("camHolder", LQ), QQ.camera = new sQ.b("camera", new kQ.Ox(0, 0, 0), LQ), QQ.camera.parent = QQ.DqQ, AF(QQ), (0, zQ.k)(QQ, ((QQ, FQ, wQ) => (0, KQ.k)(FQ, wQ, QQ.lA))), LQ.clearColor = DQ.b.FromArray(FQ.clearColor), LQ.ambientColor = DQ.Color3.FromArray(FQ.ambientColor);
          const qQ = wQ(LQ, FQ.vqQ);
          LQ.onNewLightAddedObservable.add((QQ => {
            qQ.some((FQ => FQ === QQ)) || console.error(`Light "${QQ.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), LQ.skipPointerMovePicking = !0
        }(QQ, FQ, eF), tF(QQ.lA)
      },
      oqQ: AF,
      setBabylonFog: function(QQ, FQ, wQ, LQ) {
        const qQ = QQ.lA;
        qQ.fogMode = 3, qQ.fogStart = FQ, qQ.fogEnd = wQ, qQ.fogColor.set(LQ[0], LQ[1], LQ[2])
      },
      HqQ: function(QQ, FQ, wQ) {
        return QQ.engine.oA >= 2 && (QQ.bqQ || (QQ.bqQ = new OQ(QQ.lA)), !QQ.bqQ.failed) ? QQ.bqQ.aT(FQ, wQ) : new MF(FQ, wQ, QQ.lA)
      },
      xqQ: function(QQ, FQ) {
        QQ.lA.fC.forEach((wQ => {
          if (wQ instanceof RQ) return void wQ.kQQ(FQ, QQ.dH.Mb);
          const LQ = wQ;
          if (LQ.emitter.getConnectedParticleSystems)
            for (const QQ of LQ._particles) QQ.position.set(QQ.position.x - FQ[0], QQ.position.y - FQ[1], QQ.position.z - FQ[2]);
          else {
            if (!LQ.worldOffset) throw new Error("Particle system has no world offset");
            LQ.worldOffset.x = -QQ.dH.Mb[0], LQ.worldOffset.y = -QQ.dH.Mb[1], LQ.worldOffset.z = -QQ.dH.Mb[2]
          }
        }))
      },
      linesFromArrays: function(QQ, FQ, wQ) {
        const LQ = new vQ.e(FQ, QQ.lA, null, void 0, void 0, !1);
        return (0, KQ.i)(FQ, wQ, QQ.lA, LQ), LQ
      },
      jA: oF,
      YqQ: function(QQ, FQ) {
        return GF.origin.Qs(FQ.origin), GF.direction.Qs(FQ.direction), GF.length = FQ.length, GF.epsilon = FQ.epsilon, GF.YqQ(QQ, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40535: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => XQ,
      h: () => MQ,
      j: () => nQ
    });
    var LQ = wQ(39692),
      qQ = wQ(40537),
      oQ = wQ(40575),
      DQ = wQ(40539),
      kQ = wQ(37368),
      vQ = wQ(37381),
      mQ = wQ(37389),
      uQ = wQ(37392),
      HQ = wQ(36820),
      bQ = wQ(36822),
      YQ = wQ(40544),
      xQ = wQ(36803),
      AQ = wQ(36809),
      tQ = wQ(36795);

    function eQ(QQ, FQ) {
      return Object.assign((function(QQ, wQ, LQ, qQ) {
        return FQ(this.featureState, QQ, wQ, LQ, qQ)
      }), {
        gY: QQ
      })
    }

    function MQ(QQ) {
      const FQ = class extends YQ.d {
          constructor(FQ, wQ) {
            const LQ = (0, AQ.jb)(FQ),
              qQ = LQ && (0, AQ.z)(LQ, QQ.name);
            for (var oQ = arguments.length, DQ = new Array(oQ > 2 ? oQ - 2 : 0), kQ = 2; kQ < oQ; kQ++) DQ[kQ - 2] = arguments[kQ];
            super(FQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...DQ), !1), this.featureState = void 0, this.featureState = wQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, AQ.C)(this._material, QQ, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return QQ.className
          }
          isCompatible(QQ) {
            return QQ === tQ.d.GLSL || QQ === tQ.d.WGSL
          }
        },
        wQ = (0, xQ.j)(QQ);
      for (const [LQ, qQ] of Object.entries(xQ.e)) {
        const oQ = QQ[LQ];
        if (oQ) {
          const QQ = wQ[LQ];
          Object.defineProperty(FQ.prototype, qQ, {
            value: eQ(oQ, QQ),
            writable: !0,
            configurable: !0
          })
        }
      }
      return FQ
    }
    class GQ extends(MQ(kQ.e)) {}
    var pQ = wQ(39211),
      cQ = wQ(40551);
    const CQ = new WeakMap;

    function SQ(QQ, FQ, wQ) {
      let LQ = CQ.get(wQ);
      LQ || (LQ = new Map, CQ.set(wQ, LQ));
      const {
        url: qQ
      } = QQ;
      let oQ = LQ.get(qQ);
      return oQ || (oQ = async function(QQ, FQ, wQ) {
        const {
          width: LQ,
          height: qQ
        } = QQ.getSize(), oQ = Math.round(qQ / LQ), kQ = FQ && FQ.byteLength === LQ * LQ * oQ * 4 ? FQ : QQ._readPixelsSync();
        return new cQ.e(kQ, LQ, LQ, oQ, pQ.b.TEXTUREFORMAT_RGBA, wQ, !0, !1, DQ.b.NEAREST_NEAREST_MIPLINEAR)
      }(QQ, FQ, wQ), LQ.set(qQ, oQ), oQ.catch((() => {
        LQ.delete(qQ)
      }))), oQ
    }
    var iQ = wQ(37399);
    class WQ extends(MQ(vQ.l)) {
      constructor(QQ, FQ) {
        super(QQ, FQ), FQ.textures.forEach(((QQ, FQ) => {
          QQ.mirror.onLoadObservable.add((QQ => {
            this.setTextureArrayData(QQ, FQ).catch((QQ => {
              console.error(`Failed to build texture array for atlas ${FQ}`, QQ)
            }))
          }))
        })), (0, iQ.m)(FQ, QQ.shaderLanguage)
      }
      async setTextureArrayData(QQ, FQ) {
        var wQ, LQ;
        const qQ = this.featureState,
          {
            width: oQ,
            height: DQ
          } = QQ.getSize(),
          kQ = qQ.useWebGL2 ? await SQ(QQ, null !== (wQ = null === (LQ = qQ.sources.pixels) || void 0 === LQ ? void 0 : LQ[FQ]) && void 0 !== wQ ? wQ : null, this._material.iN()) : null;
        (0, iQ.e)(this._material, qQ, FQ, kQ, oQ, Math.round(DQ / oQ), this._material.shaderLanguage)
      }
    }
    var RQ = wQ(40554),
      OQ = wQ(39731),
      sQ = wQ(36688),
      rQ = wQ(40563),
      IQ = wQ(39835),
      UQ = wQ(39725),
      NQ = wQ(40518),
      TQ = wQ(37152),
      KQ = wQ(40571);
    class zQ extends RQ.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const lQ = {
      Mesh: rQ.c,
      TransformNode: NQ.e,
      Dx: RQ.c,
      VertexBuffer: RQ.d,
      BoundingInfo: OQ.d,
      Ox: sQ.Ox,
      ArenaBuffer: zQ,
      SubMesh: UQ.c,
      VertexData: IQ.c,
      MirroredGeometry: KQ.e,
      meshFromArrays: KQ.i,
      plainMeshFromArrays: KQ.k
    };
    (0, TQ.d)(lQ);
    var jQ = wQ(37019);
    class aQ extends(MQ(uQ.h)) {
      constructor(QQ, FQ) {
        if (super(QQ, FQ), QQ instanceof LQ.StandardMaterial && FQ.dirLightCount > 0) {
          const FQ = QQ,
            wQ = FQ._blockDirtyMechanism;
          FQ._blockDirtyMechanism = !0, QQ.disableLighting = !0, FQ._blockDirtyMechanism = wQ;
          const LQ = (0, AQ.jb)(QQ);
          LQ && (LQ.disableLighting = !0, (0, AQ.fb)(LQ))
        }(0, jQ.e)(QQ)
      }
      dispose(QQ) {
        (0, jQ.g)(this._material), super.dispose(QQ)
      }
    }

    function XQ(QQ, FQ) {
      if (!(FQ instanceof LQ.StandardMaterial) || FQ.specularTexture) return;
      const {
        r: wQ,
        g: qQ,
        b: oQ
      } = FQ.specularColor;
      0 === wQ && 0 === qQ && 0 === oQ && (QQ.SPECULARTERM = !1)
    }(0, uQ.g)({
      disableUnusedSpecularTerm: XQ
    });
    var fQ = wQ(36897),
      VQ = wQ(37158);
    const hQ = new RegExp(`^#define ${mQ.c}\\s*$`, "m");
    class JQ extends(MQ(mQ.j)) {
      constructor(QQ, FQ) {
        super(QQ, FQ), this.kx = !1, FQ.ditherOnlyWhileFading && (VQ.f.add(QQ), this.prewarmDitherTwins(QQ))
      }
      prewarmDitherTwins(QQ) {
        const FQ = new WeakSet;
        QQ.onEffectCreatedObservable.add((wQ => {
          let {
            effect: LQ,
            subMesh: qQ
          } = wQ;
          if (this.featureState.prewarmingDither || FQ.has(LQ)) return;
          FQ.add(LQ);
          const oQ = null === qQ || void 0 === qQ ? void 0 : qQ.getMesh();
          oQ && !hQ.test(LQ.defines) && QQ.iN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(oQ) || FQ.delete(LQ)
          }))
        }))
      }
      prewarmDither(QQ) {
        if (this.kx || QQ.vW()) return !1;
        const FQ = new UQ.c(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(QQ, FQ)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== FQ.effect
      }
      dispose(QQ) {
        this.kx = !0, super.dispose(QQ)
      }
    }
    const EQ = new Map;

    function nQ(QQ, FQ) {
      EQ.set(QQ, FQ)
    }
    nQ(kQ.e, GQ), nQ(vQ.l, WQ), nQ(mQ.j, JQ), nQ(uQ.h, aQ), (0, HQ.d)({
      create: (QQ, FQ) => {
        const wQ = new LQ.StandardMaterial(QQ.name, FQ);
        return (0, fQ.p)(QQ, wQ), wQ.detailMap._pluginDefineNames
      },
      write: (QQ, FQ, wQ) => {
        (0, fQ.S)(QQ.mirror, FQ, wQ)
      },
      addFeature: (QQ, FQ, wQ) => {
        const LQ = EQ.get(FQ.feature);
        if (!LQ) throw new Error(`${FQ.feature.name} has no plugin class (registerPluginClass)`);
        new LQ(QQ.mirror, FQ.state, ...wQ)
      },
      texture: (QQ, FQ, wQ) => {
        let {
          url: LQ,
          noMipmap: qQ,
          invertY: oQ,
          samplingMode: kQ,
          data: vQ,
          sets: mQ
        } = wQ;
        if (!vQ) {
          const wQ = new DQ.b(LQ, FQ, qQ, oQ, kQ);
          return Object.assign(wQ, mQ), void(0, bQ.C)(QQ, wQ)
        }
        const uQ = {},
          HQ = new Promise(((QQ, FQ) => {
            uQ.onLoad = QQ, uQ.onError = (QQ, wQ) => {
              FQ(new Error(`${vQ.context}: ${(null===wQ||void 0===wQ?void 0:wQ.message)||QQ||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: YQ,
            bytes: xQ,
            label: AQ
          } = vQ,
          tQ = {
            noMipmap: qQ,
            invertY: !1,
            samplingMode: kQ,
            ...uQ,
            mimeType: YQ,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          eQ = new DQ.b(null, FQ, tQ);
        fQ.r.set(eQ, HQ), Object.assign(eQ, mQ), eQ.updateURL(LQ, xQ);
        const MQ = eQ.getInternalTexture();
        MQ && (MQ.label = AQ), QQ.uvSet = eQ.coordinatesIndex, QQ.matrix.set((0, fQ.M)(eQ)), (0, bQ.C)(QQ, eQ)
      },
      cube: (QQ, FQ, wQ) => {
        let {
          rootUrl: LQ,
          files: oQ,
          noMipmap: kQ,
          luminance: vQ
        } = wQ;
        const {
          samplingMode: mQ
        } = QQ.sampler, uQ = mQ === (0, bQ.t)(kQ) ? null : () => {
          (0, fQ.J)(HQ, mQ)
        }, HQ = new qQ.d(LQ, FQ, null, kQ, oQ, uQ, null, (0, bQ.s)(vQ));
        HQ.coordinatesMode = DQ.b.SKYBOX_MODE, (0, bQ.C)(QQ, HQ)
      },
      canvas: (QQ, FQ, wQ) => {
        let {
          width: LQ,
          height: qQ,
          mipmaps: kQ,
          samplingMode: vQ,
          hasAlpha: mQ = !1,
          wrap: uQ = DQ.b.CLAMP_ADDRESSMODE
        } = wQ;
        const HQ = new oQ.e(FQ, {
          width: LQ,
          height: qQ
        }, QQ, kQ, vQ);
        HQ.hasAlpha = mQ, HQ.wrapU = uQ, HQ.wrapV = uQ;
        const bQ = (0, fQ.A)(HQ);
        return (0, fQ.E)(bQ, HQ), bQ
      }
    })
  },
  40571: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => uQ,
      i: () => HQ,
      k: () => bQ
    });
    var LQ = wQ(40554),
      qQ = wQ(39470),
      oQ = wQ(39731),
      DQ = wQ(39840),
      kQ = wQ(40563),
      vQ = wQ(39835),
      mQ = wQ(37065);
    class uQ extends DQ.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (QQ, FQ) => {
          this.releaseUnlessInstanced(FQ)
        }, this.onLinked = null
      }
      link(QQ) {
        var FQ;
        (0, mQ.p)(QQ), this.model = QQ, null === (FQ = this.onLinked) || void 0 === FQ || FQ.call(this, QQ)
      }
      relink() {
        this.release();
        const QQ = [];
        for (const qQ of Object.values(this._vertexBuffers))
          if (!qQ.getIsInstanced()) {
            const {
              byteOffset: FQ,
              byteStride: wQ,
              type: LQ,
              normalized: oQ
            } = qQ;
            QQ.push({
              kind: qQ.getKind(),
              data: qQ.getData(),
              offset: FQ,
              stride: wQ,
              components: qQ.getSize(),
              glType: LQ,
              isNormalized: oQ
            })
          } const FQ = this._indices.length ? this._indices : null,
          {
            minimum: wQ,
            maximum: LQ
          } = this.extend;
        this.link(new mQ.h(QQ, FQ, this.getTotalVertices(), new Float64Array(wQ.RLQ()), new Float64Array(LQ.RLQ())))
      }
      copy(QQ) {
        if (!this.model) return super.copy(QQ);
        const FQ = new uQ(QQ, this.iN()),
          wQ = this.OLQ(void 0, !0);
        wQ && FQ.setIndices(wQ);
        let DQ = !1;
        for (const oQ in this._vertexBuffers) {
          const QQ = this._vertexBuffers[oQ],
            wQ = QQ.getData();
          if (!wQ) continue;
          const kQ = QQ.getSize(),
            {
              type: vQ,
              byteOffset: mQ,
              byteStride: uQ,
              normalized: HQ
            } = QQ;
          DQ ||= QQ.isUpdatable();
          const bQ = QQ.getIsInstanced() ? (wQ instanceof Array ? 4 * wQ.length : wQ.byteLength) / uQ : this.getTotalVertices(),
            YQ = (0, qQ.u)(wQ, kQ, vQ, mQ, uQ, bQ, !0),
            xQ = {
              updatable: QQ.isUpdatable(),
              stride: kQ,
              type: vQ,
              normalized: HQ,
              takeBufferOwnership: !0,
              instanced: QQ.getIsInstanced()
            };
          FQ.setVerticesBuffer(new LQ.d(this.Wx(), YQ, oQ, xQ), bQ)
        }
        return FQ._updatable = DQ, FQ._boundingInfo = new oQ.d(this.extend.minimum, this.extend.maximum), FQ.relink(), FQ
      }
      static mergeMeshes(QQ, FQ, wQ, LQ, qQ, oQ) {
        const vQ = QQ[0].iN(),
          mQ = new kQ.c(QQ[0].name + "_merged", vQ),
          HQ = new uQ(DQ.c.RandomId(), vQ, void 0, !1, mQ);
        try {
          if (!kQ.c.MergeMeshes(QQ, FQ, wQ, mQ, qQ, oQ)) return mQ.dispose(), null
        } catch (bQ) {
          throw mQ.dispose(), bQ
        }
        return HQ.relink(), mQ
      }
      removeVerticesData(QQ) {
        this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(QQ) {
        var FQ;
        QQ && null !== (FQ = this.getVertexBuffer(QQ)) && void 0 !== FQ && FQ.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, mQ.B)(this.model), this.model = null)
      }
    }

    function HQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kQ.c(QQ, wQ);
      const qQ = (0, mQ.m)(FQ),
        {
          positions: oQ,
          normals: HQ,
          uvs: bQ,
          indices: YQ,
          named: xQ = {}
        } = FQ,
        AQ = new vQ.c;
      AQ.positions = oQ, AQ.normals = null !== HQ && void 0 !== HQ ? HQ : null, AQ.uvs = null !== bQ && void 0 !== bQ ? bQ : null, AQ.indices = YQ;
      const tQ = new uQ(DQ.c.RandomId(), wQ, AQ, !1, LQ);
      for (const {
          kind: DQ,
          components: kQ
        }
        of qQ.vertexAttributes) DQ in xQ && LQ.setVerticesData(DQ, xQ[DQ], !1, kQ);
      return tQ.link(qQ), LQ
    }

    function bQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qQ = new kQ.c(QQ, wQ),
        {
          positions: oQ,
          normals: DQ,
          uvs: mQ,
          indices: uQ
        } = FQ;
      return Object.assign(new vQ.c, {
        positions: oQ,
        normals: DQ,
        uvs: mQ,
        indices: uQ
      }).applyToMesh(qQ, LQ), qQ
    }
  },
  41015: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => tQ,
      d: () => kQ,
      e: () => DQ,
      g: () => mQ
    });
    var LQ = wQ(36870),
      qQ = wQ(38236),
      oQ = wQ(38230);

    function DQ(QQ, FQ, wQ, LQ) {
      const qQ = oQ.y;
      FQ.fill(0), QQ.gravity.toArray(FQ, qQ.gravity), QQ.colorDead.toArray(FQ, qQ.colorDead), wQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
      const DQ = QQ.getColorGradients(),
        kQ = bQ(QQ, DQ, "colour", LQ);
      wQ[qQ.colorCount] = kQ;
      for (let oQ = 0; oQ < kQ; oQ++) {
        var vQ;
        const QQ = DQ[YQ(DQ, oQ)];
        FQ[qQ.colorPositions + oQ] = QQ.gradient, QQ.color1.toArray(FQ, qQ.color1 + 4 * oQ), (null !== (vQ = QQ.color2) && void 0 !== vQ ? vQ : QQ.color1).toArray(FQ, qQ.color2 + 4 * oQ)
      }
      const mQ = QQ.getVelocityGradients(),
        uQ = bQ(QQ, mQ, "Qt", LQ);
      wQ[qQ.velocityCount] = uQ;
      for (let oQ = 0; oQ < uQ; oQ++) MQ(FQ, qQ.Qt + 4 * oQ, mQ[YQ(mQ, oQ)]);
      const HQ = QQ.useRampGradients ? QQ.getColorRemapGradients() : null,
        xQ = bQ(QQ, HQ, "colour remap", LQ);
      wQ[qQ.remapCount] = xQ;
      for (let oQ = 0; oQ < xQ; oQ++) MQ(FQ, qQ.remap + 4 * oQ, HQ[YQ(HQ, oQ)])
    }

    function kQ() {
      return {
        key: [],
        texels: new Uint8Array(4 * oQ.k)
      }
    }
    const vQ = [];

    function mQ(QQ, FQ) {
      return uQ(QQ, vQ), !eQ(vQ, FQ.key) && (FQ.key.length = 0, FQ.key.push(...vQ), FQ.key.length > 0 && function(QQ, FQ) {
        for (let wQ = 0; wQ < oQ.k; wQ++) qQ.k.GetCurrentGradient(wQ / oQ.k, QQ, ((QQ, FQ, wQ) => {
          LQ.Color3.LerpToRef(QQ.color, FQ.color, wQ, HQ)
        })), FQ[4 * wQ] = 255 * HQ.r, FQ[4 * wQ + 1] = 255 * HQ.g, FQ[4 * wQ + 2] = 255 * HQ.b, FQ[4 * wQ + 3] = 255
      }(QQ.getRampGradients(), FQ.texels), !0)
    }

    function uQ(QQ, FQ) {
      FQ.length = 0;
      const wQ = QQ.useRampGradients ? QQ.getRampGradients() : null;
      if (null !== wQ && void 0 !== wQ && wQ.length) {
        FQ.push(wQ.length);
        for (const QQ of wQ) FQ.push(QQ.gradient, QQ.color.r, QQ.color.g, QQ.color.b)
      }
    }
    const HQ = new LQ.Color3;

    function bQ(QQ, FQ, wQ, LQ) {
      return FQ ? FQ.length > oQ.e ? (LQ(`particleStops:${wQ}`, `GPU particles use the first 2 and last ${oQ.e-2} of more than ${oQ.e} ${wQ} gradient stops (${QQ.name})`), oQ.e) : FQ.length : 0
    }

    function YQ(QQ, FQ) {
      return FQ < 2 || QQ.length <= oQ.e ? FQ : QQ.length - oQ.e + FQ
    }
    const xQ = new Float32Array(oQ.r),
      AQ = new Uint32Array(xQ.buffer);

    function tQ(QQ, FQ, wQ) {
      return DQ(QQ, xQ, AQ, wQ), FQ && eQ(AQ, FQ) ? null : AQ.slice()
    }

    function eQ(QQ, FQ) {
      if (QQ.length !== FQ.length) return !1;
      for (let wQ = 0; wQ < QQ.length; wQ++)
        if (QQ[wQ] !== FQ[wQ]) return !1;
      return !0
    }

    function MQ(QQ, FQ, wQ) {
      var LQ;
      QQ[FQ] = wQ.gradient, QQ[FQ + 1] = wQ.factor1, QQ[FQ + 2] = null !== (LQ = wQ.factor2) && void 0 !== LQ ? LQ : wQ.factor1
    }
  },
  41008: (QQ, FQ, wQ) => {
    function LQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const FQ = new Set;
      return (wQ, LQ) => {
        FQ.has(wQ) || (FQ.add(wQ), console.warn(QQ + LQ))
      }
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);