export const id = 0;
export const ids = [0];
export const modules = {
  40739: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      CapeMaterialPlugin: () => DT,
      HueTintMaterialPlugin: () => aT,
      LifeformMaterialPlugin: () => FT,
      OverlayMaterialPlugin: () => rT
    });
    var lT = cT(40747),
      MT = cT(37868);
    class KT extends((0, lT.i)(MT.b)) {}(0, lT.j)(MT.b, KT);
    var OT = cT(36985);
    class yT extends((0, lT.i)(OT.h)) {}(0, lT.j)(OT.h, yT);
    var fT = cT(37709);
    class xT extends((0, lT.i)(fT.e)) {}(0, lT.j)(fT.e, xT);
    var IT = cT(37253),
      AT = cT(39889),
      CT = cT(37250);
    class jT extends((0, lT.i)(CT.g)) {
      constructor(TT, kT, cT) {
        super(TT, kT, cT), (0, IT.h)(TT)
      }
      dispose(TT) {
        (0, IT.i)(this._material), super.dispose(TT)
      }
    }(0, lT.j)(CT.g, jT), (0, CT.j)({
      disableUnusedSpecularTerm: lT.e,
      isLightingDisabled: TT => TT instanceof AT.StandardMaterial && TT.disableLighting
    });
    var vT = cT(38525);
    class tT extends((0, lT.i)(vT.d)) {}(0, lT.j)(vT.d, tT);
    var hT = cT(38624),
      NT = cT(37098),
      QT = cT(37982),
      ST = cT(37050);
    class DT extends((0, lT.i)(hT.d)) {}(0, lT.j)(hT.d, DT);
    class aT extends((0, lT.i)(NT.d)) {}(0, lT.j)(NT.d, aT);
    class FT extends((0, lT.i)(QT.j)) {}(0, lT.j)(QT.j, FT);
    class rT extends((0, lT.i)(ST.b)) {}(0, lT.j)(ST.b, rT)
  },
  41150: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      addBabylonLights: () => Nk,
      default: () => Dk
    });
    var lT = cT(41154),
      MT = (cT(39597), cT(40734), cT(40120), cT(41158)),
      KT = cT(39448),
      OT = cT(37086),
      yT = cT(36885),
      fT = cT(41166),
      xT = cT(41173),
      IT = cT(37041),
      AT = (cT(40747), cT(41188)),
      CT = cT(41180),
      jT = cT(38553),
      vT = cT(41196),
      tT = cT(39474),
      hT = cT(38539);
    const NT = "gpuParticles",
      QT = hT.v,
      ST = TT => TT / 4,
      DT = TT => `gpuParticleSystem[${TT>>2}].${"xyzw"[3&TT]}`,
      aT = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${hT.b}\n#define COLOR_POSITIONS ${ST(QT.colorPositions)}\n#define COLOR1 ${ST(QT.color1)}\n#define COLOR2 ${ST(QT.color2)}\n#define VELOCITY ${ST(QT.Oh)}\n#define REMAP ${ST(QT.remap)}\n#define RECORDS_PER_ROW ${hT.p}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${hT.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${DT(QT.gravity)}, ${DT(QT.gravity+1)}, ${DT(QT.gravity+2)}); }\nint colorCount() { return int(${DT(QT.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${ST(QT.colorDead)}]; }\nint velocityCount() { return int(${DT(QT.velocityCount)}); }\nint remapCount() { return int(${DT(QT.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    tT.d.ShadersStore[`${NT}VertexShader`] = aT, tT.d.ShadersStore[`${NT}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const FT = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      rT = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var PT = cT(38531),
      wT = cT(41199);
    class mT extends PT.c {
      constructor(TT, kT, cT, lT) {
        super(TT, kT, cT), this.renderer = cT, this.et = lT, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(hT.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, wT.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (TT, kT) => {
          const {
            engine: cT
          } = this, lT = cT._gl;
          cT._bindTextureDirectly(lT.TEXTURE_2D, this.records, !0), cT._unpackFlipY(!1);
          const MT = this.ring.recordBits;
          for (let KT = TT; KT < kT;) {
            const TT = Math.floor(KT / hT.p),
              cT = Math.min(kT, (TT + 1) * hT.p);
            lT.texSubImage2D(lT.TEXTURE_2D, 0, KT % hT.p * 4, TT, 4 * (cT - KT), 1, lT.RGBA_INTEGER, lT.UNSIGNED_INT, MT, KT * hT.f), KT = cT
          }
          cT._bindTextureDirectly(lT.TEXTURE_2D, null)
        }, this.id = TT;
        const MT = lT.Dv();
        this.engine = MT;
        const KT = Math.max(1, kT),
          OT = Math.min(KT, hT.p);
        this.records = MT.createRawTexture(null, 4 * OT, Math.ceil(KT / OT), AT.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, AT.e.TEXTURE_NEAREST_SAMPLINGMODE, null, AT.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.et.getAnimationRatio() || 1;
        const kT = this.et.getFrameId();
        if (kT === this.animatedFrame) return !1;
        const cT = super.animate(TT);
        return cT && (this.animatedFrame = kT, this.ring.takeUploads(this.uploadSlots)), cT
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(TT) {
        (0, wT.f)(this, this.uniforms, this.uniformBits, TT);
        for (const cT of hT.r) this.uniforms[cT] = this.uniformBits[cT];
        var kT;
        (0, wT.h)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (kT = this.ramp) || void 0 === kT || kT.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = CT.c.CreateRGBATexture(this.rampTexels.texels, hT.l, 1, this.et, !1, !1, AT.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var TT;
        this.records.dispose(), null === (TT = this.ramp) || void 0 === TT || TT.dispose(), this.ramp = null
      }
    }
    class bT {
      constructor(TT) {
        this.et = TT, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, vT.d)(), this.engine = TT.Dv(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = CT.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, TT, !1, !1, AT.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      iJ(TT, kT) {
        const cT = hT.p * this.engine.getCaps().maxTextureSize;
        kT > cT && this.warnOnce(`capacity:${TT}`, `particle system ${TT} holds ${cT} particles, not ${kT}: its records texture's limit`);
        const lT = new mT(TT, Math.min(kT, cT), this, this.et);
        return this.et.addParticleSystem(lT), lT
      }
      canDraw(TT) {
        var kT, cT;
        if (this.failed || null === (kT = TT.texture) || void 0 === kT || null === (cT = kT.mirror) || void 0 === cT || !cT.isReady()) return !1;
        for (const lT of (0, jT.i)(TT.blendMode))
          if (!this.effectFor(lT).isReady()) return !1;
        return !0
      }
      disposeStopped(TT) {
        this.et._toBeDisposed.push(TT)
      }
      remove(TT) {
        this.et.removeParticleSystem(TT), TT.releaseGl()
      }
      render(TT) {
        var kT;
        if (!TT.isReady() || !TT.hasLiveParticles()) return 0;
        const {
          engine: cT,
          et: lT,
          frame: MT
        } = this;
        TT.prepareDraw(this.warnOnce), TT.drawOffset(MT, 0), MT[3] = TT.drawTime();
        const KT = TT.ring.drawStart(),
          OT = TT.ring.drawCount(),
          yT = null !== (kT = TT.ramp) && void 0 !== kT ? kT : this.whiteRamp;
        cT.setState(!1);
        for (const fT of (0, jT.i)(TT.blendMode)) {
          const kT = this.effectFor(fT);
          cT.enableEffect(kT), kT.setTexture("gpuParticleTexture", TT.texture.mirror), kT.setTexture("gpuParticleRampTexture", yT), kT._bindTexture("gpuParticleRecords", TT.records), kT.setMatrix("gpuParticleView", lT.getViewMatrix()), kT.setMatrix("gpuParticleProjection", lT.getProjectionMatrix()), kT.setFloatArray4("gpuParticleSystem", TT.uniforms), kT.setFloat4("gpuParticleFrame", MT[0], MT[1], MT[2], MT[3]), kT.setFloat2("gpuParticleRange", KT, OT), kT.setFloat("gpuParticleRamp", TT.uniforms[hT.v.ramp]), cT.bindBuffers(this.vertexBuffers, null, kT), cT.setAlphaMode((0, jT.f)(fT)), cT.drawArraysType(AT.e.MATERIAL_TriangleStripDrawMode, 0, 4, OT), kT._bindTexture("gpuParticleRecords", null)
        }
        return cT.setAlphaMode(AT.e.ALPHA_DISABLE), OT
      }
      awaitLink(TT) {
        const kT = TT.getPipelineContext(),
          cT = this.engine._gl;
        !this.failed && cT && (!kT || kT.isParallelCompiled && !kT.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : kT.isParallelCompiled && kT.program && (cT.getProgramParameter(kT.program, cT.LINK_STATUS) || this.fail(cT.getProgramInfoLog(kT.program) || "a program did not link")))
      }
      effectFor(TT) {
        return TT === jT.c ? this.multiplyEffect : this.effect
      }
      createEffect(TT) {
        return this.engine.createEffect(NT, [], FT, rT, TT, void 0, void 0, ((TT, kT) => {
          this.fail(kT)
        }))
      }
      fail(TT) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${TT}`);
          for (const TT of this.et.lF.slice()) TT instanceof mT && TT.disposeOnStop && TT.dispose()
        }
      }
    }
    var zT = cT(39836),
      JT = cT(40726),
      oT = cT(39571),
      HT = cT(39803),
      eT = cT(39799),
      GT = cT(39716),
      VT = cT(40781),
      ET = cT(37466),
      ZT = cT(41208),
      uT = cT(41214),
      XT = cT(41223),
      dT = cT(39741),
      LT = cT(37322),
      RT = cT(37315),
      gT = cT(39929),
      UT = cT(37419),
      YT = cT(37356);

    function BT(TT) {
      if (TT.visibility < 1 || !TT.isVisible || !TT.isEnabled() || TT.metadata[YT.g] || !TT.isReady()) return !0;
      const kT = TT.kF;
      if (!kT || 0 === kT.length) return !0;
      for (let cT = 0; cT < kT.length; cT++) {
        const lT = kT[cT],
          MT = lT.wv();
        if (!MT || !MT.isReadyForSubMesh(TT, lT, !1)) return !0
      }
      return !1
    }
    class WT {
      constructor(TT, kT) {
        this.cC = TT, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, kT.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Ij(TT) {
        var kT;
        const cT = this.armed;
        if (this.armed = !1, this.vis = null, !cT) return !1;
        this.culled = 0;
        const {
          cC: lT
        } = this, MT = null === (kT = lT.bS) || void 0 === kT ? void 0 : kT.visibility;
        if (!MT || !TT || lT.gv.Uv) return !1;
        if (!(lT.pA.ocT[0] >= UT.g)) return !1;
        const KT = TT.getProjectionMatrix().m;
        if (0 !== KT[15]) return !1;
        const OT = lT.QC,
          yT = TT.globalPosition,
          fT = this.eye;
        return fT[0] = yT.x + OT[0], fT[1] = yT.y + OT[1], fT[2] = yT.z + OT[2], !!MT.eyeClear(fT[0], fT[1], fT[2], TT.minZ, KT, lT.pA) && (this.vis = MT, this.passable.clear(), this.count = 0, !0)
      }
      see(TT, kT) {
        const cT = this.count++;
        if (cT === this.cellSlots.length) {
          const TT = new Int32Array(2 * cT);
          TT.set(this.cellSlots), this.cellSlots = TT
        }
        this.cellSlots[cT] = kT, this.meshes[cT] = TT
      }
      seeThrough(TT) {
        this.passable.add(TT)
      }
      finish(TT, kT) {
        const {
          vis: cT,
          eye: lT,
          meshes: MT,
          count: KT,
          cellSlots: OT
        } = this, {
          pA: yT
        } = this.cC, [fT, xT] = yT.ocT, IT = null !== cT && cT.update(lT[0], lT[1], lT[2], yT.o_, fT, xT, this.passable);
        let AT = 0;
        for (let CT = 0; CT < KT; CT++) {
          const lT = MT[CT];
          if (IT) {
            const TT = 3 * OT[CT];
            if (TT >= 0 && !cT.isDrawn(kT[TT], kT[TT + 1], kT[TT + 2])) {
              AT++;
              continue
            }
          }
          dT.g.prototype.push.call(TT, lT)
        }
        MT.fill(null, 0, KT), this.count = 0, this.vis = null, this.culled = AT
      }
    }
    var nT = cT(37400),
      pT = cT(37340),
      iT = cT(39908),
      qT = cT(41225),
      sT = cT(39917),
      Tk = cT(39846);
    let kk = 1;
    const ck = new WeakSet;

    function lk() {
      return kk
    }

    function Mk() {
      kk = kk >= 1073741823 ? 1 : kk + 1
    }

    function Kk(TT) {
      const kT = TT.metadata;
      if (!kT || !0 !== kT[RT.p]) return;
      const cT = kT[RT.s],
        lT = null === cT || void 0 === cT ? void 0 : cT._noaStamps;
      if (!cT || !lT) return;
      const MT = cT.entries.indexOf(TT);
      MT >= 0 && (lT[MT] = 0)
    }

    function Ok(TT) {
      const kT = TT.kF;
      for (let cT = 0; cT < kT.length; cT++) {
        const TT = kT[cT].wv();
        if (TT && !TT.isFrozen) return !1
      }
      for (let cT = 0; cT < kT.length; cT++) {
        const TT = kT[cT].wv();
        TT && ck.add(TT)
      }
      return !0
    }
    let yk = !1;
    const fk = new WeakSet;

    function xk(TT, kT) {
      const cT = TT[kT];
      if ("function" !== typeof cT) throw new Error(`terrainDrawState: Babylon has no ${kT} to hook`);
      return cT
    }

    function Ik(TT, kT, cT, lT, MT) {
      const KT = cT.pA.o_,
        OT = new Map;
      let yT = 0;
      const fT = new WT(cT, TT),
        xT = new nT.c(KT, TT.Dv());
      ! function(TT) {
        if (fk.has(TT) || (fk.add(TT), TT.onContextLostObservable.add(Mk), TT.onContextRestoredObservable.add(Mk)), yk) return;
        yk = !0;
        const kT = qT.d.prototype,
          cT = xk(kT, "_markSubMeshesAsDirty");
        Object.assign(kT, {
          _markSubMeshesAsDirty(TT) {
            cT.call(this, TT), Kk(this)
          }
        });
        const lT = xk(Tk.b.prototype, "_syncParentEnabledState");
        Object.assign(Tk.b.prototype, {
          _syncParentEnabledState() {
            lT.call(this), Kk(this)
          }
        });
        const MT = xk(sT.c.prototype, "resetDrawCache");
        sT.c.prototype.resetDrawCache = function(TT, kT) {
          MT.call(this, TT, kT), Kk(this.getMesh())
        };
        const KT = iT.e.prototype,
          OT = xk(KT, "markDirty");
        KT.markDirty = function(TT) {
          OT.call(this, TT), ck.has(this) && Mk()
        };
        const yT = xk(KT, "_markAllSubMeshesAsDirty");
        Object.assign(KT, {
          _markAllSubMeshesAsDirty(TT) {
            yT.call(this, TT), ck.has(this) && Mk()
          }
        })
      }(TT.Dv());
      let IT = new Float64Array(384),
        AT = new Int32Array(64),
        CT = new Uint8Array(64),
        jT = new Float64Array(64),
        vT = new Int32Array(192),
        tT = 0;
      const hT = [],
        NT = new Float64Array(24),
        QT = () => {
          const TT = hT.pop();
          return void 0 !== TT ? (AT[TT] = 0, TT) : (tT === AT.length && (IT = Ak(IT, new Float64Array(2 * IT.length)), AT = Ak(AT, new Int32Array(2 * AT.length)), CT = Ak(CT, new Uint8Array(2 * CT.length)), jT = Ak(jT, new Float64Array(2 * jT.length)), vT = Ak(vT, new Int32Array(2 * vT.length))), tT++)
        },
        ST = TT => {
          const kT = 6 * TT._noaSlot,
            cT = TT.ucT[0],
            lT = TT.ucT[1];
          IT[kT] = cT.x, IT[kT + 1] = cT.y, IT[kT + 2] = cT.z, IT[kT + 3] = lT.x, IT[kT + 4] = lT.y, IT[kT + 5] = lT.z
        },
        DT = (TT, kT, cT) => {
          if (!cT) return fT.see(TT, -1), !1;
          const lT = BT(TT);
          return lT && fT.seeThrough(jT[kT]), fT.see(TT, kT), !lT
        };
      let aT = -1;
      return TT.getActiveMeshCandidates = () => {
        const cT = TT.frustumPlanes,
          lT = kT._selectionContent;
        lT.reset(), (cT => {
          const lT = TT.frustumPlanes;
          yT = yT + 1 | 0 || 1;
          const MT = kT.blocks,
            KT = fT.Ij(TT.activeCamera),
            OT = KT && !0;
          if (OT) {
            const kT = TT.Dv().currentRenderPassId;
            kT !== aT && (aT = kT, Mk())
          }
          const xT = lk(),
            jT = OT && !1;
          MT.length > 0 && function(TT, kT) {
            for (let cT = 0; cT < 6; cT++) {
              const lT = TT[cT],
                MT = lT.normal;
              kT[4 * cT] = MT.x, kT[4 * cT + 1] = MT.y, kT[4 * cT + 2] = MT.z, kT[4 * cT + 3] = lT.d
            }
          }(lT, NT);
          const tT = IT,
            hT = AT,
            QT = CT;
          for (let TT = 0; TT < MT.length; TT++) {
            const kT = MT[TT];
            if (!gT.d.IsInFrustum(kT.ucT, lT)) continue;
            const IT = kT.entries;
            {
              const TT = kT._noaSlots,
                lT = kT._noaStamps,
                MT = kT._noaTerrain;
              for (let kT = 0; kT < IT.length; kT++) {
                const AT = TT[kT];
                if (hT[AT] !== yT && (hT[AT] = yT, QT[AT] = Ck(tT, 6 * AT, NT) ? 1 : 0), 0 === QT[AT]) continue;
                const CT = IT[kT];
                if (OT && lT[kT] === xT) jT && 1 === MT[kT] && BT(CT) && 0, fT.see(CT, 1 === MT[kT] ? AT : -1);
                else if (OT) {
                  lT[kT] = xT;
                  const TT = !0 === CT.metadata[pT.k];
                  MT[kT] = TT ? 1 : 0;
                  const cT = DT(CT, AT, TT);
                  !TT || cT && Ok(CT) || (lT[kT] = 0)
                } else KT ? DT(CT, AT, !0 === CT.metadata[pT.k]) : dT.g.prototype.push.call(cT, CT)
              }
              continue
            }
          }
          KT && fT.finish(cT, vT)
        })(lT), xT.apply(lT, TT.activeCamera);
        const KT = kT.ZcT;
        for (let TT = 0; TT < KT.length; TT++) {
          const kT = KT[TT];
          kT.isEnabled() && dT.g.prototype.push.call(lT, kT)
        }
        return MT(lT, cT), lT
      }, {
        XcT: () => fT.culled,
        rcT: (TT, kT) => {
          const MT = Math.floor(kT[0] / KT),
            yT = Math.floor(kT[1] / KT),
            fT = Math.floor(kT[2] / KT),
            xT = `${MT}|${yT}|${fT}`;
          let IT = OT.get(xT);
          if (!IT) {
            const TT = [0, 0, 0];
            cT.FTT([MT * KT - 1, yT * KT - 1, fT * KT - 1], null, TT), IT = Object.assign(lT(TT, KT + 2), {
              dcT: xT,
              LcT: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: QT()
            }), ST(IT), jT[IT._noaSlot] = (0, LT.h)(MT, yT, fT), vT[3 * IT._noaSlot] = MT, vT[3 * IT._noaSlot + 1] = yT, vT[3 * IT._noaSlot + 2] = fT, OT.set(xT, IT)
          }
          IT.LcT++, TT.metadata[RT.t] = IT
        },
        eJ: TT => {
          const kT = TT.metadata[RT.t];
          kT && (kT.LcT--, kT.LcT <= 0 && (OT.delete(kT.dcT), hT.push(kT._noaSlot)), TT.metadata[RT.t] = null)
        },
        EcT: (TT, kT) => {
          const cT = TT,
            lT = kT.metadata[RT.t];
          (cT._noaSlots ??= []).push(lT._noaSlot), (cT._noaStamps ??= []).push(0), (cT._noaTerrain ??= []).push(0), cT.entries.push(kT)
        },
        removeEntry: (TT, kT) => {
          const cT = TT,
            lT = cT.entries,
            MT = lT.indexOf(kT);
          if (MT < 0) return;
          const KT = cT._noaSlots,
            OT = cT._noaStamps,
            yT = cT._noaTerrain,
            fT = lT.length - 1;
          lT[MT] = lT[fT], KT[MT] = KT[fT], OT[MT] = OT[fT], yT[MT] = yT[fT], lT.pop(), KT.pop(), OT.pop(), yT.pop()
        },
        y5: TT => {
          for (const kT of OT.values()) {
            kT.zcT.gcT(TT), kT.bcT.gcT(TT);
            for (const cT of kT.ucT) cT.gcT(TT);
            ST(kT)
          }
        }
      }
    }

    function Ak(TT, kT) {
      return kT.set(TT), kT
    }

    function Ck(TT, kT, cT) {
      const lT = TT[kT],
        MT = TT[kT + 1],
        KT = TT[kT + 2],
        OT = TT[kT + 3],
        yT = TT[kT + 4],
        fT = TT[kT + 5];
      for (let xT = 0; xT < 24; xT += 4) {
        const TT = cT[xT],
          kT = cT[xT + 1],
          IT = cT[xT + 2];
        if (!(TT * (TT >= 0 ? OT : lT) + kT * (kT >= 0 ? yT : MT) + IT * (IT >= 0 ? fT : KT) + cT[xT + 3] >= 0)) return !1
      }
      return !0
    }
    var jk = cT(37643);
    class vk {
      constructor(TT, kT) {
        var cT = TT.et;
        cT.ycT(new XT.b(cT));
        var lT = new ZT.e(fT);
        cT.YcT = lT, lT.blocks = [];
        var MT, KT = {},
          OT = [];
        this.textPlanes = OT, this.XcT = () => MT.XcT(), this.y5 = TT => {
          IT(lT, TT), MT.y5(TT)
        }, this.rcT = (kT, cT, yT) => {
          if (!kT.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!kT.metadata[RT.s] && !kT.metadata[RT.o]) {
            if (!cT) {
              var fT = lT.ZcT;
              if (kT.metadata[RT.y] && !kT.parent) {
                fT = OT;
                var IT = kT.DH().WcT;
                kT.metadata[RT.B] = IT.center.length() + IT.radius, kT.av = !0
              }
              return fT.push(kT), kT.metadata[RT.j] = fT, void(kT.metadata[RT.o] = !0)
            }
            var CT = Math.floor(yT[0] / xT),
              jT = Math.floor(yT[1] / xT),
              vT = Math.floor(yT[2] / xT),
              tT = CT + "|" + jT + "|" + vT,
              hT = KT[tT];
            if (!hT) {
              var NT = [CT * xT, jT * xT, vT * xT],
                QT = [0, 0, 0];
              TT.cC.FTT(NT, null, QT), hT = AT(QT, xT), lT.blocks.push(hT), KT[tT] = hT, hT.dcT = tT
            }
            MT.rcT(kT, yT), MT.EcT(hT, kT), hT.LcT = (hT.LcT || 0) + 1, kT.metadata[RT.s] = hT, kT.metadata[RT.p] = !0, kT.av = !0
          }
        }, this.eJ = TT => {
          if (TT.metadata) {
            TT.metadata[RT.o] && ((0, LT.p)(TT.metadata[RT.j], TT), TT.metadata[RT.o] = !1), TT.metadata[RT.j] === OT && (TT.av = !1), TT.metadata[RT.j] = void 0, TT.metadata[RT.B] = void 0;
            var kT = TT.metadata[RT.s];
            kT && kT.entries && (TT.metadata[RT.p] && MT.removeEntry(kT, TT), kT.LcT--, kT.LcT <= 0 && (delete KT[kT.dcT], (0, LT.p)(lT.blocks, kT))), MT.eJ(TT), TT.metadata[RT.s] = null, TT.metadata[RT.p] = !1
          }
        }, this.R6 = function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (TT.metadata[RT.s]) {
            if (TT.metadata[RT.p] === kT) return;
            var cT = TT.metadata[RT.s];
            cT && cT.entries && (kT ? MT.EcT(cT, TT) : MT.removeEntry(cT, TT)), TT.metadata[RT.p] = kT
          } else {
            if (TT.metadata[RT.o] === kT) return;
            var KT = TT.metadata[RT.j] || lT.ZcT;
            kT ? KT.push(TT) : (0, LT.p)(KT, TT), TT.metadata[RT.o] = kT
          }
        };
        var fT = () => {},
          xT = kT * TT.cC.pA.o_,
          IT = (TT, kT) => {
            TT.blocks.forEach((TT => {
              TT.zcT.gcT(kT), TT.bcT.gcT(kT), TT.ucT.forEach((TT => TT.gcT(kT))), TT.blocks && IT(TT, kT)
            }))
          },
          AT = (TT, kT) => {
            var cT = new yT.Fv(TT[0], TT[1], TT[2]),
              lT = new yT.Fv(TT[0] + kT, TT[1] + kT, TT[2] + kT);
            return new uT.d(cT, lT, void 0, void 0, void 0, fT)
          };
        MT = Ik(cT, lT, TT.cC, AT, ((TT, kT) => {
          for (var cT = 0; cT < OT.length; cT++) {
            var lT = OT[cT];
            lT.isEnabled(!1) && ((0, jk.d)(lT, kT) && dT.g.prototype.push.call(TT, lT))
          }
        }))
      }
    }

    function tk(TT) {
      const {
        holderPosition: kT,
        holderRotation: cT,
        aY: lT,
        fov: MT,
        near: KT,
        far: OT
      } = TT.model.hY, yT = TT.clT;
      yT.position.I5(kT[0], kT[1], kT[2]), yT.rotation.I5(cT[0], cT[1], cT[2]);
      const fT = TT.camera;
      fT.position.I5(lT[0], lT[1], lT[2]), fT.fov = MT, fT.minZ = KT, fT.maxZ = OT
    }

    function hk(TT) {
      const kT = TT.Dv(),
        cT = kT,
        lT = cT._gl;
      if (!lT || cT.qv < 2 || kT.QcT || lT.getParameter(lT.DEPTH_BITS) < 24) return !1;
      const MT = TT._renderingManager,
        KT = MT.getRenderingGroup(-1),
        OT = MT.getRenderingGroup(0),
        yT = HT.b.prototype.render;
      return KT.render = function(TT, kT, cT, lT, MT, KT, fT, xT, IT) {
        (TT || OT._empty) && yT.call(this, TT, kT, cT, lT, MT, KT, fT, xT, IT)
      }, OT.render = function(TT, cT, MT, OT) {
        let fT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          CT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          jT = arguments.length > 8 ? arguments[8] : void 0;
        TT ? yT.call(this, TT, cT, MT, OT, fT, xT, IT, CT, jT) : (kT.setAlphaMode(AT.e.ALPHA_DISABLE), yT.call(this, null, !1, !1, OT, fT, xT, IT, !1), KT._empty || (lT.depthRange(1, 1), yT.call(KT, null, cT, MT, OT, fT, xT, IT, CT, jT), lT.depthRange(0, 1)), yT.call(this, null, cT, MT, OT, !1, !1, !1, CT, jT))
      }, !0
    }

    function Nk(TT, kT) {
      return [kT, ET.f].map(((kT, cT) => {
        const lT = new MT.b("light", yT.Fv.FromArray(kT), TT);
        return lT.diffuse = OT.Color3.FromArray([1, 1, 1]), lT.specular = OT.Color3.FromArray([1, 1, 1]), lT.intensity = ET.b[cT], lT
      }))
    }
    class Qk extends xT.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(TT) {
        var kT;
        this.heldTexture = TT, this.particleTexture = null !== (kT = null === TT || void 0 === TT ? void 0 : TT.mirror) && void 0 !== kT ? kT : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        TT && (this.particleTexture = null, (0, IT.F)(this.heldTexture), this.heldTexture = null), super.dispose(TT, kT, cT)
      }
    }
    const Sk = lT.c.Zero();
    const Dk = {
      GkT: function(TT, kT) {
        return new KT.d(TT, kT.okT, {
          preserveDrawingBuffer: kT.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      KlT: function(TT, kT) {
        ! function(TT, kT, cT) {
          const lT = new GT.c(TT.engine);
          TT.et = lT, lT.detachControl(), lT.autoClear = !1, eT.c.MIN_RENDERINGGROUPS = -1;
          for (let KT = eT.c.MIN_RENDERINGGROUPS; KT <= 1; KT++) lT.setRenderingOrder(KT, HT.b.PainterSortCompare, HT.b.PainterSortCompare, HT.b.PainterSortCompare);
          lT.setRenderingAutoClearDepthStencil(0, !1), oT.b.Enabled = !1, TT.scT = new vk(TT, Math.round(kT.TlT)), TT.clT = new JT.b("camHolder", lT), TT.camera = new zT.d("camera", new yT.Fv(0, 0, 0), lT), TT.camera.parent = TT.clT, tk(TT), (0, ET.g)(TT, ((TT, kT, cT) => (0, VT.j)(kT, cT, TT.et))), lT.clearColor = OT.e.FromArray(kT.clearColor), lT.ambientColor = OT.Color3.FromArray(kT.ambientColor);
          const MT = cT(lT, kT.MlT);
          lT.onNewLightAddedObservable.add((TT => {
            MT.some((kT => kT === TT)) || console.error(`Light "${TT.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), lT.skipPointerMovePicking = !0
        }(TT, kT, Nk), hk(TT.et)
      },
      klT: tk,
      setBabylonFog: function(TT, kT, cT, lT) {
        const MT = TT.et;
        MT.fogMode = 3, MT.fogStart = kT, MT.fogEnd = cT, MT.fogColor.set(lT[0], lT[1], lT[2])
      },
      ylT: function(TT, kT, cT) {
        return TT.engine.qv >= 2 && (TT.flT || (TT.flT = new bT(TT.et)), !TT.flT.failed) ? TT.flT.iJ(kT, cT) : new Qk(kT, cT, TT.et)
      },
      IlT: function(TT, kT) {
        TT.et.lF.forEach((cT => {
          if (cT instanceof mT) return void cT.y5(kT, TT.cC.QC);
          const lT = cT;
          if (lT.emitter.getConnectedParticleSystems)
            for (const TT of lT._particles) TT.position.set(TT.position.x - kT[0], TT.position.y - kT[1], TT.position.z - kT[2]);
          else {
            if (!lT.worldOffset) throw new Error("Particle system has no world offset");
            lT.worldOffset.x = -TT.cC.QC[0], lT.worldOffset.y = -TT.cC.QC[1], lT.worldOffset.z = -TT.cC.QC[2]
          }
        }))
      },
      linesFromArrays: function(TT, kT, cT) {
        const lT = new fT.c(kT, TT.et, null, void 0, void 0, !1);
        return (0, VT.h)(kT, cT, TT.et, lT), lT
      },
      Gt: Kk,
      xlT: function(TT, kT) {
        return Sk.origin.UkT(kT.origin), Sk.direction.UkT(kT.direction), Sk.length = kT.length, Sk.epsilon = kT.epsilon, Sk.xlT(TT, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40747: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => dT,
      i: () => QT,
      j: () => BT
    });
    var lT = cT(39889),
      MT = cT(40749),
      KT = cT(40787),
      OT = cT(40752),
      yT = cT(37678),
      fT = cT(37686),
      xT = cT(37692),
      IT = cT(37695),
      AT = cT(37034),
      CT = cT(37041),
      jT = cT(40761),
      vT = cT(37013),
      tT = cT(37016),
      hT = cT(36996);

    function NT(TT, kT) {
      return Object.assign((function(TT, cT, lT, MT) {
        return kT(this.featureState, TT, cT, lT, MT)
      }), {
        nj: TT
      })
    }

    function QT(TT) {
      const kT = class extends jT.c {
          constructor(kT, cT) {
            const lT = (0, tT.cb)(kT),
              MT = lT && (0, tT.x)(lT, TT.name);
            for (var KT = arguments.length, OT = new Array(KT > 2 ? KT - 2 : 0), yT = 2; yT < KT; yT++) OT[yT - 2] = arguments[yT];
            super(kT, TT.name, TT.priority, MT ? MT.defines : TT.defines(...OT), !1), this.featureState = void 0, this.featureState = cT, this._pluginManager._addPlugin(this), this._enable(!0), (0, tT.B)(this._material, TT, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return TT.className
          }
          isCompatible(TT) {
            return TT === hT.b.GLSL || TT === hT.b.WGSL
          }
        },
        cT = (0, vT.j)(TT);
      for (const [lT, MT] of Object.entries(vT.b)) {
        const KT = TT[lT];
        if (KT) {
          const TT = cT[lT];
          Object.defineProperty(kT.prototype, MT, {
            value: NT(KT, TT),
            writable: !0,
            configurable: !0
          })
        }
      }
      return kT
    }
    class ST extends(QT(yT.b)) {}
    var DT = cT(39448),
      aT = cT(40769);
    const FT = new WeakMap;

    function rT(TT, kT, cT) {
      let lT = FT.get(cT);
      lT || (lT = new Map, FT.set(cT, lT));
      const {
        url: MT
      } = TT;
      let KT = lT.get(MT);
      return KT || (KT = async function(TT, kT, cT) {
        const {
          width: lT,
          height: MT
        } = TT.getSize(), KT = Math.round(MT / lT), yT = kT && kT.byteLength === lT * lT * KT * 4 ? kT : TT._readPixelsSync();
        return new aT.d(yT, lT, lT, KT, DT.d.TEXTUREFORMAT_RGBA, cT, !0, !1, OT.c.NEAREST_NEAREST_MIPLINEAR)
      }(TT, kT, cT), lT.set(MT, KT), KT.catch((() => {
        lT.delete(MT)
      }))), KT
    }
    var PT = cT(37700);
    class wT extends(QT(fT.g)) {
      constructor(TT, kT) {
        super(TT, kT), kT.textures.forEach(((TT, kT) => {
          TT.mirror.onLoadObservable.add((TT => {
            this.setTextureArrayData(TT, kT).catch((TT => {
              console.error(`Failed to build texture array for atlas ${kT}`, TT)
            }))
          }))
        })), (0, PT.h)(kT, TT.shaderLanguage)
      }
      async setTextureArrayData(TT, kT) {
        var cT, lT;
        const MT = this.featureState,
          {
            width: KT,
            height: OT
          } = TT.getSize(),
          yT = MT.useWebGL2 ? await rT(TT, null !== (cT = null === (lT = MT.sources.pixels) || void 0 === lT ? void 0 : lT[kT]) && void 0 !== cT ? cT : null, this._material.NJ()) : null;
        (0, PT.d)(this._material, MT, kT, yT, KT, Math.round(OT / KT), this._material.shaderLanguage)
      }
    }
    var mT = cT(40774),
      bT = cT(39926),
      zT = cT(36885),
      JT = cT(40778),
      oT = cT(40038),
      HT = cT(39917),
      eT = cT(40726),
      GT = cT(37442),
      VT = cT(40781);
    class ET extends mT.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ZT = {
      Mesh: JT.c,
      TransformNode: eT.b,
      Ov: mT.e,
      VertexBuffer: mT.i,
      BoundingInfo: bT.e,
      Fv: zT.Fv,
      ArenaBuffer: ET,
      SubMesh: HT.c,
      VertexData: oT.d,
      MirroredGeometry: VT.d,
      meshFromArrays: VT.h,
      plainMeshFromArrays: VT.j
    };
    (0, GT.i)(ZT);
    var uT = cT(37253);
    class XT extends(QT(IT.h)) {
      constructor(TT, kT) {
        if (super(TT, kT), TT instanceof lT.StandardMaterial && kT.dirLightCount > 0) {
          const kT = TT,
            cT = kT._blockDirtyMechanism;
          kT._blockDirtyMechanism = !0, TT.disableLighting = !0, kT._blockDirtyMechanism = cT;
          const lT = (0, tT.cb)(TT);
          lT && (lT.disableLighting = !0, (0, tT.ab)(lT))
        }(0, uT.h)(TT)
      }
      dispose(TT) {
        (0, uT.i)(this._material), super.dispose(TT)
      }
    }

    function dT(TT, kT) {
      if (!(kT instanceof lT.StandardMaterial) || kT.specularTexture) return;
      const {
        r: cT,
        g: MT,
        b: KT
      } = kT.specularColor;
      0 === cT && 0 === MT && 0 === KT && (TT.SPECULARTERM = !1)
    }(0, IT.g)({
      disableUnusedSpecularTerm: dT
    });
    var LT = cT(37127),
      RT = cT(37452);
    const gT = new RegExp(`^#define ${xT.e}\\s*$`, "m");
    class UT extends(QT(xT.j)) {
      constructor(TT, kT) {
        super(TT, kT), this.yv = !1, kT.ditherOnlyWhileFading && (RT.e.add(TT), this.prewarmDitherTwins(TT))
      }
      prewarmDitherTwins(TT) {
        const kT = new WeakSet;
        TT.onEffectCreatedObservable.add((cT => {
          let {
            effect: lT,
            subMesh: MT
          } = cT;
          if (this.featureState.prewarmingDither || kT.has(lT)) return;
          kT.add(lT);
          const KT = null === MT || void 0 === MT ? void 0 : MT.getMesh();
          KT && !gT.test(lT.defines) && TT.NJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(KT) || kT.delete(lT)
          }))
        }))
      }
      prewarmDither(TT) {
        if (this.yv || TT.VkT()) return !1;
        const kT = new HT.c(0, 0, 0, 0, 0, TT, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(TT, kT)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== kT.effect
      }
      dispose(TT) {
        this.yv = !0, super.dispose(TT)
      }
    }
    const YT = new Map;

    function BT(TT, kT) {
      YT.set(TT, kT)
    }
    BT(yT.b, ST), BT(fT.g, wT), BT(xT.j, UT), BT(IT.h, XT), (0, AT.c)({
      create: (TT, kT) => {
        const cT = new lT.StandardMaterial(TT.name, kT);
        return (0, LT.s)(TT, cT), cT.detailMap._pluginDefineNames
      },
      write: (TT, kT, cT) => {
        (0, LT.Y)(TT.mirror, kT, cT)
      },
      addFeature: (TT, kT, cT) => {
        const lT = YT.get(kT.feature);
        if (!lT) throw new Error(`${kT.feature.name} has no plugin class (registerPluginClass)`);
        new lT(TT.mirror, kT.state, ...cT)
      },
      texture: (TT, kT, cT) => {
        let {
          url: lT,
          noMipmap: MT,
          invertY: KT,
          samplingMode: yT,
          data: fT,
          sets: xT
        } = cT;
        if (!fT) {
          const cT = new OT.c(lT, kT, MT, KT, yT);
          return Object.assign(cT, xT), void(0, CT.M)(TT, cT)
        }
        const IT = {},
          AT = new Promise(((TT, kT) => {
            IT.onLoad = TT, IT.onError = (TT, cT) => {
              kT(new Error(`${fT.context}: ${(null===cT||void 0===cT?void 0:cT.message)||TT||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: jT,
            bytes: vT,
            label: tT
          } = fT,
          hT = {
            noMipmap: MT,
            invertY: !1,
            samplingMode: yT,
            ...IT,
            mimeType: jT,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          NT = new OT.c(null, kT, hT);
        LT.v.set(NT, AT), Object.assign(NT, xT), NT.updateURL(lT, vT);
        const QT = NT.getInternalTexture();
        QT && (QT.label = tT), TT.uvSet = NT.coordinatesIndex, TT.matrix.set((0, LT.R)(NT)), (0, CT.M)(TT, NT)
      },
      cube: (TT, kT, cT) => {
        let {
          rootUrl: lT,
          files: KT,
          noMipmap: yT,
          luminance: fT
        } = cT;
        const {
          samplingMode: xT
        } = TT.sampler, IT = xT === (0, CT.B)(yT) ? null : () => {
          (0, LT.N)(AT, xT)
        }, AT = new MT.b(lT, kT, null, yT, KT, IT, null, (0, CT.x)(fT));
        AT.coordinatesMode = OT.c.SKYBOX_MODE, (0, CT.M)(TT, AT)
      },
      canvas: (TT, kT, cT) => {
        let {
          width: lT,
          height: MT,
          mipmaps: yT,
          samplingMode: fT,
          hasAlpha: xT = !1,
          wrap: IT = OT.c.CLAMP_ADDRESSMODE
        } = cT;
        const AT = new KT.d(kT, {
          width: lT,
          height: MT
        }, TT, yT, fT);
        AT.hasAlpha = xT, AT.wrapU = IT, AT.wrapV = IT;
        const CT = (0, LT.E)(AT);
        return (0, LT.H)(CT, AT), CT
      }
    })
  },
  40781: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => IT,
      h: () => AT,
      j: () => CT
    });
    var lT = cT(40774),
      MT = cT(39689),
      KT = cT(39926),
      OT = cT(40042),
      yT = cT(40778),
      fT = cT(40038),
      xT = cT(37308);
    class IT extends OT.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (TT, kT) => {
          this.releaseUnlessInstanced(kT)
        }, this.onLinked = null
      }
      link(TT) {
        var kT;
        (0, xT.i)(TT), this.model = TT, null === (kT = this.onLinked) || void 0 === kT || kT.call(this, TT)
      }
      relink() {
        this.release();
        const TT = [];
        for (const MT of Object.values(this._vertexBuffers))
          if (!MT.getIsInstanced()) {
            const {
              byteOffset: kT,
              byteStride: cT,
              type: lT,
              normalized: KT
            } = MT;
            TT.push({
              kind: MT.getKind(),
              data: MT.getData(),
              offset: kT,
              stride: cT,
              components: MT.getSize(),
              glType: lT,
              isNormalized: KT
            })
          } const kT = this._indices.length ? this._indices : null,
          {
            minimum: cT,
            maximum: lT
          } = this.extend;
        this.link(new xT.d(TT, kT, this.getTotalVertices(), new Float64Array(cT.acT()), new Float64Array(lT.acT())))
      }
      copy(TT) {
        if (!this.model) return super.copy(TT);
        const kT = new IT(TT, this.NJ()),
          cT = this.FcT(void 0, !0);
        cT && kT.setIndices(cT);
        let OT = !1;
        for (const KT in this._vertexBuffers) {
          const TT = this._vertexBuffers[KT],
            cT = TT.getData();
          if (!cT) continue;
          const yT = TT.getSize(),
            {
              type: fT,
              byteOffset: xT,
              byteStride: IT,
              normalized: AT
            } = TT;
          OT ||= TT.isUpdatable();
          const CT = TT.getIsInstanced() ? (cT instanceof Array ? 4 * cT.length : cT.byteLength) / IT : this.getTotalVertices(),
            jT = (0, MT.m)(cT, yT, fT, xT, IT, CT, !0),
            vT = {
              updatable: TT.isUpdatable(),
              stride: yT,
              type: fT,
              normalized: AT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            };
          kT.setVerticesBuffer(new lT.i(this.Dv(), jT, KT, vT), CT)
        }
        return kT._updatable = OT, kT._boundingInfo = new KT.e(this.extend.minimum, this.extend.maximum), kT.relink(), kT
      }
      static mergeMeshes(TT, kT, cT, lT, MT, KT) {
        const fT = TT[0].NJ(),
          xT = new yT.c(TT[0].name + "_merged", fT),
          AT = new IT(OT.d.RandomId(), fT, void 0, !1, xT);
        try {
          if (!yT.c.MergeMeshes(TT, kT, cT, xT, MT, KT)) return xT.dispose(), null
        } catch (CT) {
          throw xT.dispose(), CT
        }
        return AT.relink(), xT
      }
      removeVerticesData(TT) {
        this.releaseUnlessInstanced(TT), super.removeVerticesData(TT)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(TT) {
        var kT;
        TT && null !== (kT = this.getVertexBuffer(TT)) && void 0 !== kT && kT.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, xT.p)(this.model), this.model = null)
      }
    }

    function AT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new yT.c(TT, cT);
      const MT = (0, xT.h)(kT),
        {
          positions: KT,
          normals: AT,
          uvs: CT,
          indices: jT,
          named: vT = {}
        } = kT,
        tT = new fT.d;
      tT.positions = KT, tT.normals = null !== AT && void 0 !== AT ? AT : null, tT.uvs = null !== CT && void 0 !== CT ? CT : null, tT.indices = jT;
      const hT = new IT(OT.d.RandomId(), cT, tT, !1, lT);
      for (const {
          kind: OT,
          components: yT
        }
        of MT.vertexAttributes) OT in vT && lT.setVerticesData(OT, vT[OT], !1, yT);
      return hT.link(MT), lT
    }

    function CT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const MT = new yT.c(TT, cT),
        {
          positions: KT,
          normals: OT,
          uvs: xT,
          indices: IT
        } = kT;
      return Object.assign(new fT.d, {
        positions: KT,
        normals: OT,
        uvs: xT,
        indices: IT
      }).applyToMesh(MT, lT), MT
    }
  },
  41199: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => hT,
      e: () => yT,
      f: () => OT,
      h: () => xT
    });
    var lT = cT(37086),
      MT = cT(38546),
      KT = cT(38539);

    function OT(TT, kT, cT, lT) {
      const MT = KT.v;
      kT.fill(0), TT.gravity.toArray(kT, MT.gravity), TT.colorDead.toArray(kT, MT.colorDead), cT[MT.ramp] = TT.useRampGradients ? 1 : 0;
      const OT = TT.getColorGradients(),
        yT = CT(TT, OT, "colour", lT);
      cT[MT.colorCount] = yT;
      for (let KT = 0; KT < yT; KT++) {
        var fT;
        const TT = OT[jT(OT, KT)];
        kT[MT.colorPositions + KT] = TT.gradient, TT.color1.toArray(kT, MT.color1 + 4 * KT), (null !== (fT = TT.color2) && void 0 !== fT ? fT : TT.color1).toArray(kT, MT.color2 + 4 * KT)
      }
      const xT = TT.getVelocityGradients(),
        IT = CT(TT, xT, "Oh", lT);
      cT[MT.velocityCount] = IT;
      for (let KT = 0; KT < IT; KT++) QT(kT, MT.Oh + 4 * KT, xT[jT(xT, KT)]);
      const AT = TT.useRampGradients ? TT.getColorRemapGradients() : null,
        vT = CT(TT, AT, "colour remap", lT);
      cT[MT.remapCount] = vT;
      for (let KT = 0; KT < vT; KT++) QT(kT, MT.remap + 4 * KT, AT[jT(AT, KT)])
    }

    function yT() {
      return {
        key: [],
        texels: new Uint8Array(4 * KT.l)
      }
    }
    const fT = [];

    function xT(TT, kT) {
      return IT(TT, fT), !NT(fT, kT.key) && (kT.key.length = 0, kT.key.push(...fT), kT.key.length > 0 && function(TT, kT) {
        for (let cT = 0; cT < KT.l; cT++) MT.p.GetCurrentGradient(cT / KT.l, TT, ((TT, kT, cT) => {
          lT.Color3.LerpToRef(TT.color, kT.color, cT, AT)
        })), kT[4 * cT] = 255 * AT.r, kT[4 * cT + 1] = 255 * AT.g, kT[4 * cT + 2] = 255 * AT.b, kT[4 * cT + 3] = 255
      }(TT.getRampGradients(), kT.texels), !0)
    }

    function IT(TT, kT) {
      kT.length = 0;
      const cT = TT.useRampGradients ? TT.getRampGradients() : null;
      if (null !== cT && void 0 !== cT && cT.length) {
        kT.push(cT.length);
        for (const TT of cT) kT.push(TT.gradient, TT.color.r, TT.color.g, TT.color.b)
      }
    }
    const AT = new lT.Color3;

    function CT(TT, kT, cT, lT) {
      return kT ? kT.length > KT.b ? (lT(`particleStops:${cT}`, `GPU particles use the first 2 and last ${KT.b-2} of more than ${KT.b} ${cT} gradient stops (${TT.name})`), KT.b) : kT.length : 0
    }

    function jT(TT, kT) {
      return kT < 2 || TT.length <= KT.b ? kT : TT.length - KT.b + kT
    }
    const vT = new Float32Array(KT.q),
      tT = new Uint32Array(vT.buffer);

    function hT(TT, kT, cT) {
      return OT(TT, vT, tT, cT), kT && NT(tT, kT) ? null : tT.slice()
    }

    function NT(TT, kT) {
      if (TT.length !== kT.length) return !1;
      for (let cT = 0; cT < TT.length; cT++)
        if (TT[cT] !== kT[cT]) return !1;
      return !0
    }

    function QT(TT, kT, cT) {
      var lT;
      TT[kT] = cT.gradient, TT[kT + 1] = cT.factor1, TT[kT + 2] = null !== (lT = cT.factor2) && void 0 !== lT ? lT : cT.factor1
    }
  },
  41196: (TT, kT, cT) => {
    function lT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const kT = new Set;
      return (cT, lT) => {
        kT.has(cT) || (kT.add(cT), console.warn(TT + lT))
      }
    }
    cT.d(kT, {
      d: () => lT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);