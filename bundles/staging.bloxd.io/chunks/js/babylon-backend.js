export const id = 0;
export const ids = [0];
export const modules = {
  42420: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CapeMaterialPlugin: () => PH,
      HueTintMaterialPlugin: () => TH,
      LifeformMaterialPlugin: () => UH,
      OverlayMaterialPlugin: () => VH
    });
    var AH = LH(42424),
      rH = LH(38878);
    class SH extends((0, AH.f)(rH.e)) {}(0, AH.g)(rH.e, SH);
    var hH = LH(38176);
    class tH extends((0, AH.f)(hH.d)) {}(0, AH.g)(hH.d, tH);
    var zH = LH(38713);
    class CH extends((0, AH.f)(zH.h)) {}(0, AH.g)(zH.h, CH);
    var EH = LH(38194),
      XH = LH(41538),
      GH = LH(38192);
    class YH extends((0, AH.f)(GH.f)) {
      constructor(HH, BH, LH) {
        super(HH, BH, LH), (0, EH.k)(HH)
      }
      dispose(HH) {
        (0, EH.o)(this._material), super.dispose(HH)
      }
    }(0, AH.g)(GH.f, YH), (0, GH.h)({
      disableUnusedSpecularTerm: AH.d,
      isLightingDisabled: HH => HH instanceof XH.StandardMaterial && HH.disableLighting
    });
    var uH = LH(39607);
    class QH extends((0, AH.f)(uH.i)) {}(0, AH.g)(uH.i, QH);
    var WH = LH(39726),
      MH = LH(38077),
      xH = LH(39019),
      vH = LH(38190);
    class PH extends((0, AH.f)(WH.e)) {}(0, AH.g)(WH.e, PH);
    class TH extends((0, AH.f)(MH.e)) {}(0, AH.g)(MH.e, TH);
    class UH extends((0, AH.f)(xH.l)) {}(0, AH.g)(xH.l, UH);
    class VH extends((0, AH.f)(vH.d)) {}(0, AH.g)(vH.d, VH)
  },
  45030: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      addBabylonLights: () => mB,
      createSceneParticleSystem: () => lB,
      default: () => cB
    });
    var AH = LH(45032),
      rH = (LH(41264), LH(42418), LH(41784), LH(45039)),
      SH = LH(38071),
      hH = LH(37961),
      tH = LH(45055),
      zH = LH(45060),
      CH = LH(38135),
      EH = (LH(42424), LH(45065)),
      XH = LH(45062),
      GH = LH(39640),
      YH = LH(45067),
      uH = LH(41138),
      QH = LH(39624);
    const WH = "gpuParticles",
      MH = "gpuParticlesSummed",
      xH = QH.x,
      vH = HH => HH / 4,
      PH = (HH, BH, LH, AH) => Array.from({
        length: BH
      }, ((rH, SH) => `(${((HH,BH,LH)=>0===BH?`${HH} < 1`:BH===LH-1?`${HH} >= ${BH}`:`${HH} == ${BH}`)(HH,SH,BH)} ? ${LH(SH)} : ${AH})`)).join("\n\t\t+ "),
      TH = (HH, BH, LH) => `vec4 ${HH}(int i) {\n\treturn ${PH("i",LH,(HH=>`gpuParticleSystem[${BH+HH}]`),"vec4(0.0)")};\n}\n`,
      UH = `\n${TH("colorPositionsAt",vH(xH.colorPositions),QH.b/4)}\n${TH("color1At",vH(xH.color1),QH.b)}\n${TH("color2At",vH(xH.color2),QH.b)}\n${TH("velocityAt",vH(xH.EW),QH.b)}\n${TH("remapStopAt",vH(xH.remap),QH.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${PH("j",4,(HH=>`v[${HH}]`),"0.0")};\n}\n`,
      VH = (HH, BH, LH, AH) => HH ? `${LH}(${AH})` : `gpuParticleSystem[${BH} + ${AH}]`,
      OH = HH => `gpuParticleSystem[${HH>>2}].${"xyzw"[3&HH]}`,
      bH = HH => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${QH.b}\n#define COLOR_POSITIONS ${vH(xH.colorPositions)}\n#define COLOR1 ${vH(xH.color1)}\n#define COLOR2 ${vH(xH.color2)}\n#define VELOCITY ${vH(xH.EW)}\n#define REMAP ${vH(xH.remap)}\n#define RECORDS_PER_ROW ${QH.n}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${QH.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${OH(xH.gravity)}, ${OH(xH.gravity+1)}, ${OH(xH.gravity+2)}); }\nint colorCount() { return int(${OH(xH.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${vH(xH.colorDead)}]; }\nint velocityCount() { return int(${OH(xH.velocityCount)}); }\nint remapCount() { return int(${OH(xH.remapCount)}); }\n${HH?UH:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${HH?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${VH(HH,"COLOR1","color1At","i")}, ${VH(HH,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${VH(HH,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${VH(HH,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${VH(HH,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${VH(HH,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${VH(HH,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${VH(HH,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${VH(HH,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      kH = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    uH.c.ShadersStore[`${WH}VertexShader`] = bH(!1), uH.c.ShadersStore[`${WH}PixelShader`] = kH, uH.c.ShadersStore[`${MH}VertexShader`] = bH(!0), uH.c.ShadersStore[`${MH}PixelShader`] = kH;
    const mH = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      oH = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var IH = LH(39619),
      fH = LH(45075);
    class lH extends IH.b {
      constructor(HH, BH, LH, AH) {
        super(HH, BH, LH), this.renderer = LH, this.NQ = AH, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(QH.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, fH.c)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (HH, BH) => {
          const {
            engine: LH
          } = this, AH = LH._gl;
          LH._bindTextureDirectly(AH.TEXTURE_2D, this.records, !0), LH._unpackFlipY(!1);
          const rH = this.ring.recordBits;
          for (let SH = HH; SH < BH;) {
            const HH = Math.floor(SH / QH.n),
              LH = Math.min(BH, (HH + 1) * QH.n);
            AH.texSubImage2D(AH.TEXTURE_2D, 0, SH % QH.n * 4, HH, 4 * (LH - SH), 1, AH.RGBA_INTEGER, AH.UNSIGNED_INT, rH, SH * QH.c), SH = LH
          }
          LH._bindTextureDirectly(AH.TEXTURE_2D, null)
        }, this.id = HH;
        const rH = AH.Iu();
        this.engine = rH;
        const SH = Math.max(1, BH),
          hH = Math.min(SH, QH.n);
        this.records = rH.createRawTexture(null, 4 * hH, Math.ceil(SH / hH), EH.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, EH.c.TEXTURE_NEAREST_SAMPLINGMODE, null, EH.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.NQ.getAnimationRatio() || 1;
        const BH = this.NQ.getFrameId();
        if (BH === this.animatedFrame) return !1;
        const LH = super.animate(HH);
        return LH && (this.animatedFrame = BH, this.ring.takeUploads(this.uploadSlots)), LH
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(HH) {
        (0, fH.d)(this, this.uniforms, this.uniformBits, HH);
        for (const LH of QH.t) this.uniforms[LH] = this.uniformBits[LH];
        var BH;
        (0, fH.f)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (BH = this.ramp) || void 0 === BH || BH.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = XH.b.CreateRGBATexture(this.rampTexels.texels, QH.k, 1, this.NQ, !1, !1, EH.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var HH;
        this.records.dispose(), null === (HH = this.ramp) || void 0 === HH || HH.dispose(), this.ramp = null
      }
    }
    const KH = "the context was lost before the programs linked";
    class cH {
      constructor(HH, BH) {
        this.NQ = HH, this.reportFailure = BH, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = WH, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, YH.e)(), this.engine = HH.Iu(), this.whiteRamp = XH.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, HH, !1, !1, EH.c.TEXTURE_NEAREST_SAMPLINGMODE);
        const LH = this.linkPair(WH),
          AH = null !== LH && LH !== KH ? this.linkPair(MH) : LH;
        null === AH && null !== LH ? (console.warn(`GPU particles link their fallback here: ${LH}`), this.reportFailure(LH, !0)) : null !== AH && this.fail(AH === KH ? KH : null !== LH && void 0 !== LH ? LH : AH)
      }
      XF(HH, BH) {
        const LH = QH.n * this.engine.getCaps().maxTextureSize;
        BH > LH && this.warnOnce(`capacity:${HH}`, `particle system ${HH} holds ${LH} particles, not ${BH}: its records texture's limit`);
        const AH = new lH(HH, Math.min(BH, LH), this, this.NQ);
        return this.NQ.addParticleSystem(AH), AH
      }
      canDraw(HH) {
        var BH, LH;
        if (this.failed || null === (BH = HH.texture) || void 0 === BH || null === (LH = BH.mirror) || void 0 === LH || !LH.isReady()) return !1;
        for (const AH of (0, GH.k)(HH.blendMode))
          if (!this.effectFor(AH).isReady()) return !1;
        return !0
      }
      disposeStopped(HH) {
        this.NQ._toBeDisposed.push(HH)
      }
      remove(HH) {
        this.NQ.removeParticleSystem(HH), HH.releaseGl()
      }
      render(HH) {
        var BH;
        if (!HH.isReady() || !HH.hasLiveParticles()) return 0;
        const {
          engine: LH,
          NQ: AH,
          frame: rH
        } = this;
        HH.prepareDraw(this.warnOnce), HH.drawOffset(rH, 0), rH[3] = HH.drawTime();
        const SH = HH.ring.drawStart(),
          hH = HH.ring.drawCount(),
          tH = null !== (BH = HH.ramp) && void 0 !== BH ? BH : this.whiteRamp;
        LH.setState(!1);
        for (const zH of (0, GH.k)(HH.blendMode)) {
          const BH = this.effectFor(zH);
          LH.enableEffect(BH), BH.setTexture("gpuParticleTexture", HH.texture.mirror), BH.setTexture("gpuParticleRampTexture", tH), BH._bindTexture("gpuParticleRecords", HH.records), BH.setMatrix("gpuParticleView", AH.getViewMatrix()), BH.setMatrix("gpuParticleProjection", AH.getProjectionMatrix()), BH.setFloatArray4("gpuParticleSystem", HH.uniforms), BH.setFloat4("gpuParticleFrame", rH[0], rH[1], rH[2], rH[3]), BH.setFloat2("gpuParticleRange", SH, hH), BH.setFloat("gpuParticleRamp", HH.uniforms[QH.x.ramp]), LH.bindBuffers(this.vertexBuffers, null, BH), LH.setAlphaMode((0, GH.j)(zH)), LH.drawArraysType(EH.c.MATERIAL_TriangleStripDrawMode, 0, 4, hH), BH._bindTexture("gpuParticleRecords", null)
        }
        return LH.setAlphaMode(EH.c.ALPHA_DISABLE), hH
      }
      linkPair(HH) {
        this.shader = HH, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(HH, ""), this.multiplyEffect = this.createEffect(HH, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(HH) {
        const BH = HH.getPipelineContext(),
          LH = this.gl();
        LH && null === this.pairFailure && (!BH || BH.isParallelCompiled && !BH.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : BH.isParallelCompiled && BH.program && (LH.getProgramParameter(BH.program, LH.LINK_STATUS) || this.programFailed(function(HH, BH, LH) {
          if (HH.isContextLost()) return KH;
          for (const [AH, rH] of [
              ["VERTEX SHADER", BH.vertexShader],
              ["FRAGMENT SHADER", BH.fragmentShader]
            ]) {
            const BH = rH && !HH.getShaderParameter(rH, HH.COMPILE_STATUS) ? HH.getShaderInfoLog(rH) : null;
            if (BH) return `${AH} ${BH}`
          }
          return HH.getProgramInfoLog(LH) || "a program did not link"
        }(LH, BH, BH.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(HH) {
        return HH === GH.e ? this.multiplyEffect : this.effect
      }
      createEffect(HH, BH) {
        return this.engine.createEffect(HH, [], mH, oH, BH, void 0, void 0, ((BH, LH) => {
          var AH;
          HH === this.shader && this.programFailed(null !== (AH = this.gl()) && void 0 !== AH && AH.isContextLost() ? KH : function(HH) {
            const BH = HH.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(BH) ? "a program failed, its log not in this browser's stack" : BH.replace(/^Error: /, "")
          }(LH))
        }))
      }
      programFailed(HH) {
        this.linkingPair ? this.pairFailure ??= HH : this.fail(HH)
      }
      fail(HH) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${HH}`), this.reportFailure(HH, !1);
          for (const HH of this.NQ.dU.slice()) HH instanceof lH && HH.disposeOnStop && HH.dispose()
        }
      }
    }
    var eH = LH(41106);
    class qH extends eH.b {
      createEffect() {
        const HH = super.createEffect(...arguments);
        return NH(HH), gH.has(HH) || (gH.add(HH), HH.onCompileObservable.add((() => {
          NH(HH)
        }))), HH
      }
    }
    const gH = new WeakSet;

    function NH(HH) {
      HH._vertexSourceCodeBeforeMigration = "", HH._fragmentSourceCodeBeforeMigration = ""
    }
    var RH = LH(41478),
      jH = LH(42414),
      nH = LH(41231),
      FH = LH(41454),
      DH = LH(41448),
      wH = LH(41374),
      ZH = LH(42463),
      dH = LH(38362),
      aH = LH(45083),
      sH = LH(45086),
      JH = LH(45095),
      iH = LH(41398),
      pH = LH(3150),
      yH = LH(38261),
      HB = LH(41595),
      BB = LH(38319),
      LB = LH(38280);

    function AB(HH) {
      if (HH.visibility < 1 || !HH.isVisible || !HH.isEnabled() || HH.metadata[LB.g] || !HH.isReady()) return !0;
      const BH = HH.jU;
      if (!BH || 0 === BH.length) return !0;
      for (let LH = 0; LH < BH.length; LH++) {
        const AH = BH[LH],
          rH = AH.eu();
        if (!rH || !rH.isReadyForSubMesh(HH, AH, !1)) return !0
      }
      return !1
    }
    class rB {
      constructor(HH, BH) {
        this.bG = HH, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, BH.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      PX(HH) {
        var BH;
        const LH = this.armed;
        if (this.armed = !1, this.vis = null, !LH) return !1;
        this.culled = 0;
        const {
          bG: AH
        } = this, rH = null === (BH = AH.vU) || void 0 === BH ? void 0 : BH.visibility;
        if (!rH || !HH || AH.mX.yu) return !1;
        if (!(AH.cX.brH[0] >= BB.f)) return !1;
        const SH = HH.getProjectionMatrix().m;
        if (0 !== SH[15]) return !1;
        const hH = AH.DG,
          tH = HH.globalPosition,
          zH = this.eye;
        return zH[0] = tH.x + hH[0], zH[1] = tH.y + hH[1], zH[2] = tH.z + hH[2], !!rH.eyeClear(zH[0], zH[1], zH[2], HH.minZ, SH, AH.cX) && (this.vis = rH, this.passable.clear(), this.count = 0, !0)
      }
      see(HH, BH) {
        const LH = this.count++;
        if (LH === this.cellSlots.length) {
          const HH = new Int32Array(2 * LH);
          HH.set(this.cellSlots), this.cellSlots = HH
        }
        this.cellSlots[LH] = BH, this.meshes[LH] = HH
      }
      seeThrough(HH) {
        this.passable.add(HH)
      }
      finish(HH, BH) {
        const {
          vis: LH,
          eye: AH,
          meshes: rH,
          count: SH,
          cellSlots: hH
        } = this, {
          cX: tH
        } = this.bG, [zH, CH] = tH.brH, EH = null !== LH && LH.update(AH[0], AH[1], AH[2], tH.vX, zH, CH, this.passable);
        let XH = 0;
        for (let GH = 0; GH < SH; GH++) {
          const AH = rH[GH];
          if (EH) {
            const HH = 3 * hH[GH];
            if (HH >= 0 && !LH.isDrawn(BH[HH], BH[HH + 1], BH[HH + 2])) {
              XH++;
              continue
            }
          }
          iH.i.prototype.push.call(HH, AH)
        }
        rH.fill(null, 0, SH), this.count = 0, this.vis = null, this.culled = XH
      }
    }
    var SB = LH(38304),
      hB = LH(38269),
      tB = LH(41573),
      zB = LH(45102),
      CB = LH(41578),
      EB = LH(41498);
    let XB = 1;
    const GB = new WeakSet;

    function YB() {
      return XB
    }

    function uB() {
      XB = XB >= 1073741823 ? 1 : XB + 1
    }

    function QB(HH) {
      const BH = HH.metadata;
      if (!BH || !0 !== BH[yH.n]) return;
      const LH = BH[yH.t],
        AH = null === LH || void 0 === LH ? void 0 : LH._noaStamps;
      if (!LH || !AH) return;
      const rH = LH.entries.indexOf(HH);
      rH >= 0 && (AH[rH] = 0)
    }

    function WB(HH) {
      const BH = HH.jU;
      for (let LH = 0; LH < BH.length; LH++) {
        const HH = BH[LH].eu();
        if (HH && !HH.isFrozen) return !1
      }
      for (let LH = 0; LH < BH.length; LH++) {
        const HH = BH[LH].eu();
        HH && GB.add(HH)
      }
      return !0
    }
    let MB = !1;
    const xB = new WeakSet;

    function vB(HH, BH) {
      const LH = HH[BH];
      if ("function" !== typeof LH) throw new Error(`terrainDrawState: Babylon has no ${BH} to hook`);
      return LH
    }

    function PB(HH, BH, LH, AH, rH) {
      const SH = LH.cX.vX,
        hH = new Map;
      let tH = 0;
      const zH = new rB(LH, HH),
        CH = new SB.d(SH, HH.Iu());
      ! function(HH) {
        if (xB.has(HH) || (xB.add(HH), HH.onContextLostObservable.add(uB), HH.ou.add(uB)), MB) return;
        MB = !0;
        const BH = zB.e.prototype,
          LH = vB(BH, "_markSubMeshesAsDirty");
        Object.assign(BH, {
          _markSubMeshesAsDirty(HH) {
            LH.call(this, HH), QB(this)
          }
        });
        const AH = vB(EB.b.prototype, "_syncParentEnabledState");
        Object.assign(EB.b.prototype, {
          _syncParentEnabledState() {
            AH.call(this), QB(this)
          }
        });
        const rH = vB(CB.d.prototype, "resetDrawCache");
        CB.d.prototype.resetDrawCache = function(HH, BH) {
          rH.call(this, HH, BH), QB(this.getMesh())
        };
        const SH = tB.c.prototype,
          hH = vB(SH, "markDirty");
        SH.markDirty = function(HH) {
          hH.call(this, HH), GB.has(this) && uB()
        };
        const tH = vB(SH, "_markAllSubMeshesAsDirty");
        Object.assign(SH, {
          _markAllSubMeshesAsDirty(HH) {
            tH.call(this, HH), GB.has(this) && uB()
          }
        })
      }(HH.Iu());
      let EH = new Float64Array(384),
        XH = new Int32Array(64),
        GH = new Uint8Array(64),
        YH = new Float64Array(64),
        uH = new Int32Array(192),
        QH = 0;
      const WH = [],
        MH = new Float64Array(24),
        xH = () => {
          const HH = WH.pop();
          return void 0 !== HH ? (XH[HH] = 0, HH) : (QH === XH.length && (EH = TB(EH, new Float64Array(2 * EH.length)), XH = TB(XH, new Int32Array(2 * XH.length)), GH = TB(GH, new Uint8Array(2 * GH.length)), YH = TB(YH, new Float64Array(2 * YH.length)), uH = TB(uH, new Int32Array(2 * uH.length))), QH++)
        },
        vH = HH => {
          const BH = 6 * HH._noaSlot,
            LH = HH.KrH[0],
            AH = HH.KrH[1];
          EH[BH] = LH.x, EH[BH + 1] = LH.y, EH[BH + 2] = LH.z, EH[BH + 3] = AH.x, EH[BH + 4] = AH.y, EH[BH + 5] = AH.z
        },
        PH = (HH, BH, LH) => {
          if (!LH) return zH.see(HH, -1), !1;
          const AH = AB(HH);
          return AH && zH.seeThrough(YH[BH]), zH.see(HH, BH), !AH
        };
      let TH = -1;
      return HH.getActiveMeshCandidates = () => {
        const LH = HH.frustumPlanes,
          AH = BH._selectionContent;
        AH.reset(), (LH => {
          const AH = HH.frustumPlanes;
          tH = tH + 1 | 0 || 1;
          const rH = BH.blocks,
            SH = zH.PX(HH.activeCamera),
            hH = SH && !0;
          if (hH) {
            const BH = HH.Iu().currentRenderPassId;
            BH !== TH && (TH = BH, uB())
          }
          const CH = YB(),
            YH = hH && !1;
          rH.length > 0 && function(HH, BH) {
            for (let LH = 0; LH < 6; LH++) {
              const AH = HH[LH],
                rH = AH.normal;
              BH[4 * LH] = rH.x, BH[4 * LH + 1] = rH.y, BH[4 * LH + 2] = rH.z, BH[4 * LH + 3] = AH.d
            }
          }(AH, MH);
          const QH = EH,
            WH = XH,
            xH = GH;
          for (let HH = 0; HH < rH.length; HH++) {
            const BH = rH[HH];
            if (!HB.b.IsInFrustum(BH.KrH, AH)) continue;
            const EH = BH.entries;
            {
              const HH = BH._noaSlots,
                AH = BH._noaStamps,
                rH = BH._noaTerrain;
              for (let BH = 0; BH < EH.length; BH++) {
                const XH = HH[BH];
                if (WH[XH] !== tH && (WH[XH] = tH, xH[XH] = UB(QH, 6 * XH, MH) ? 1 : 0), 0 === xH[XH]) continue;
                const GH = EH[BH];
                if (hH && AH[BH] === CH) YH && 1 === rH[BH] && AB(GH) && 0, zH.see(GH, 1 === rH[BH] ? XH : -1);
                else if (hH) {
                  AH[BH] = CH;
                  const HH = !0 === GH.metadata[hB.l];
                  rH[BH] = HH ? 1 : 0;
                  const LH = PH(GH, XH, HH);
                  !HH || LH && WB(GH) || (AH[BH] = 0)
                } else SH ? PH(GH, XH, !0 === GH.metadata[hB.l]) : iH.i.prototype.push.call(LH, GH)
              }
              continue
            }
          }
          SH && zH.finish(LH, uH)
        })(AH), CH.apply(AH, HH.activeCamera);
        const SH = BH.lrH;
        for (let HH = 0; HH < SH.length; HH++) {
          const BH = SH[HH];
          BH.isEnabled() && iH.i.prototype.push.call(AH, BH)
        }
        return rH(AH, LH), AH
      }, {
        crH: () => zH.culled,
        QrH: (HH, BH) => {
          const rH = Math.floor(BH[0] / SH),
            tH = Math.floor(BH[1] / SH),
            zH = Math.floor(BH[2] / SH),
            CH = `${rH}|${tH}|${zH}`;
          let EH = hH.get(CH);
          if (!EH) {
            const HH = [0, 0, 0];
            LH.TLH([rH * SH - 1, tH * SH - 1, zH * SH - 1], null, HH), EH = Object.assign(AH(HH, SH + 2), {
              erH: CH,
              qrH: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: xH()
            }), vH(EH), YH[EH._noaSlot] = (0, pH.e)(rH, tH, zH), uH[3 * EH._noaSlot] = rH, uH[3 * EH._noaSlot + 1] = tH, uH[3 * EH._noaSlot + 2] = zH, hH.set(CH, EH)
          }
          EH.qrH++, HH.metadata[yH.u] = EH
        },
        gR: HH => {
          const BH = HH.metadata[yH.u];
          BH && (BH.qrH--, BH.qrH <= 0 && (hH.delete(BH.erH), WH.push(BH._noaSlot)), HH.metadata[yH.u] = null)
        },
        frH: (HH, BH) => {
          const LH = HH,
            AH = BH.metadata[yH.u];
          (LH._noaSlots ??= []).push(AH._noaSlot), (LH._noaStamps ??= []).push(0), (LH._noaTerrain ??= []).push(0), LH.entries.push(BH)
        },
        removeEntry: (HH, BH) => {
          const LH = HH,
            AH = LH.entries,
            rH = AH.indexOf(BH);
          if (rH < 0) return;
          const SH = LH._noaSlots,
            hH = LH._noaStamps,
            tH = LH._noaTerrain,
            zH = AH.length - 1;
          AH[rH] = AH[zH], SH[rH] = SH[zH], hH[rH] = hH[zH], tH[rH] = tH[zH], AH.pop(), SH.pop(), hH.pop(), tH.pop()
        },
        rBH: HH => {
          for (const BH of hH.values()) {
            BH.OrH.grH(HH), BH.VrH.grH(HH);
            for (const LH of BH.KrH) LH.grH(HH);
            vH(BH)
          }
        }
      }
    }

    function TB(HH, BH) {
      return BH.set(HH), BH
    }

    function UB(HH, BH, LH) {
      const AH = HH[BH],
        rH = HH[BH + 1],
        SH = HH[BH + 2],
        hH = HH[BH + 3],
        tH = HH[BH + 4],
        zH = HH[BH + 5];
      for (let CH = 0; CH < 24; CH += 4) {
        const HH = LH[CH],
          BH = LH[CH + 1],
          EH = LH[CH + 2];
        if (!(HH * (HH >= 0 ? hH : AH) + BH * (BH >= 0 ? tH : rH) + EH * (EH >= 0 ? zH : SH) + LH[CH + 3] >= 0)) return !1
      }
      return !0
    }
    var VB = LH(38623);
    class OB {
      constructor(HH, BH) {
        var LH = HH.NQ;
        LH.SrH(new JH.c(LH));
        var AH = new aH.d(zH);
        LH.RrH = AH, AH.blocks = [];
        var rH, SH = {},
          tH = [];
        this.textPlanes = tH, this.crH = () => rH.crH(), this.rBH = HH => {
          EH(AH, HH), rH.rBH(HH)
        }, this.QrH = (BH, LH, hH) => {
          if (!BH.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!BH.metadata[yH.t] && !BH.metadata[yH.k]) {
            if (!LH) {
              var zH = AH.lrH;
              if (BH.metadata[yH.B] && !BH.parent) {
                zH = tH;
                var EH = BH.jF().nrH;
                BH.metadata[yH.C] = EH.center.length() + EH.radius, BH.fu = !0
              }
              return zH.push(BH), BH.metadata[yH.e] = zH, void(BH.metadata[yH.k] = !0)
            }
            var GH = Math.floor(hH[0] / CH),
              YH = Math.floor(hH[1] / CH),
              uH = Math.floor(hH[2] / CH),
              QH = GH + "|" + YH + "|" + uH,
              WH = SH[QH];
            if (!WH) {
              var MH = [GH * CH, YH * CH, uH * CH],
                xH = [0, 0, 0];
              HH.bG.TLH(MH, null, xH), WH = XH(xH, CH), AH.blocks.push(WH), SH[QH] = WH, WH.erH = QH
            }
            rH.QrH(BH, hH), rH.frH(WH, BH), WH.qrH = (WH.qrH || 0) + 1, BH.metadata[yH.t] = WH, BH.metadata[yH.n] = !0, BH.fu = !0
          }
        }, this.gR = HH => {
          if (HH.metadata) {
            HH.metadata[yH.k] && ((0, pH.k)(HH.metadata[yH.e], HH), HH.metadata[yH.k] = !1), HH.metadata[yH.e] === tH && (HH.fu = !1), HH.metadata[yH.e] = void 0, HH.metadata[yH.C] = void 0;
            var BH = HH.metadata[yH.t];
            BH && BH.entries && (HH.metadata[yH.n] && rH.removeEntry(BH, HH), BH.qrH--, BH.qrH <= 0 && (delete SH[BH.erH], (0, pH.k)(AH.blocks, BH))), rH.gR(HH), HH.metadata[yH.t] = null, HH.metadata[yH.n] = !1
          }
        }, this.RHH = function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (HH.metadata[yH.t]) {
            if (HH.metadata[yH.n] === BH) return;
            var LH = HH.metadata[yH.t];
            LH && LH.entries && (BH ? rH.frH(LH, HH) : rH.removeEntry(LH, HH)), HH.metadata[yH.n] = BH
          } else {
            if (HH.metadata[yH.k] === BH) return;
            var SH = HH.metadata[yH.e] || AH.lrH;
            BH ? SH.push(HH) : (0, pH.k)(SH, HH), HH.metadata[yH.k] = BH
          }
        };
        var zH = () => {},
          CH = BH * HH.bG.cX.vX,
          EH = (HH, BH) => {
            HH.blocks.forEach((HH => {
              HH.OrH.grH(BH), HH.VrH.grH(BH), HH.KrH.forEach((HH => HH.grH(BH))), HH.blocks && EH(HH, BH)
            }))
          },
          XH = (HH, BH) => {
            var LH = new hH.lu(HH[0], HH[1], HH[2]),
              AH = new hH.lu(HH[0] + BH, HH[1] + BH, HH[2] + BH);
            return new sH.d(LH, AH, void 0, void 0, void 0, zH)
          };
        rH = PB(LH, AH, HH.bG, XH, ((HH, BH) => {
          for (var LH = 0; LH < tH.length; LH++) {
            var AH = tH[LH];
            AH.isEnabled(!1) && ((0, VB.d)(AH, BH) && iH.i.prototype.push.call(HH, AH))
          }
        }))
      }
    }

    function bB(HH) {
      const {
        holderPosition: BH,
        holderRotation: LH,
        R_: AH,
        fov: rH,
        near: SH,
        far: hH
      } = HH.model.N_, tH = HH.srH;
      tH.position.SBH(BH[0], BH[1], BH[2]), tH.rotation.SBH(LH[0], LH[1], LH[2]);
      const zH = HH.camera;
      zH.position.SBH(AH[0], AH[1], AH[2]), zH.fov = rH, zH.minZ = SH, zH.maxZ = hH
    }

    function kB(HH) {
      const BH = HH.Iu(),
        LH = BH,
        AH = LH._gl;
      if (!AH || LH.hQ < 2 || BH.WrH || AH.getParameter(AH.DEPTH_BITS) < 24) return !1;
      const rH = HH._renderingManager,
        SH = rH.getRenderingGroup(-1),
        hH = rH.getRenderingGroup(0),
        tH = FH.c.prototype.render;
      return SH.render = function(HH, BH, LH, AH, rH, SH, zH, CH, EH) {
        (HH || hH._empty) && tH.call(this, HH, BH, LH, AH, rH, SH, zH, CH, EH)
      }, hH.render = function(HH, LH, rH, hH) {
        let zH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          CH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XH = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          GH = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          YH = arguments.length > 8 ? arguments[8] : void 0;
        HH ? tH.call(this, HH, LH, rH, hH, zH, CH, XH, GH, YH) : (BH.setAlphaMode(EH.c.ALPHA_DISABLE), tH.call(this, null, !1, !1, hH, zH, CH, XH, !1), SH._empty || (AH.depthRange(1, 1), tH.call(SH, null, LH, rH, hH, zH, CH, XH, GH, YH), AH.depthRange(0, 1)), tH.call(this, null, LH, rH, hH, !1, !1, !1, GH, YH))
      }, !0
    }

    function mB(HH, BH) {
      return [BH, dH.e].map(((BH, LH) => {
        const AH = new rH.e("light", hH.lu.FromArray(BH), HH);
        return AH.diffuse = SH.Color3.FromArray([1, 1, 1]), AH.specular = SH.Color3.FromArray([1, 1, 1]), AH.intensity = dH.d[LH], AH
      }))
    }
    class oB extends zH.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(HH) {
        var BH;
        this.heldTexture = HH, this.particleTexture = null !== (BH = null === HH || void 0 === HH ? void 0 : HH.mirror) && void 0 !== BH ? BH : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let HH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        HH && (this.particleTexture = null, (0, CH.y)(this.heldTexture), this.heldTexture = null), super.dispose(HH, BH, LH)
      }
    }

    function IB(HH, BH, LH, AH) {
      return BH && !BH.failed ? BH.XF(LH, AH) : new oB(LH, AH, HH)
    }
    const fB = new WeakMap;

    function lB(HH, BH, LH) {
      var AH;
      let rH = null !== (AH = fB.get(HH)) && void 0 !== AH ? AH : null;
      return !rH && HH.Iu().hQ >= 2 && (rH = new cH(HH, (BH => {
        console.error(`Particle programs failed in scene ${HH.uid}: ${BH}`)
      })), fB.set(HH, rH)), IB(HH, rH, BH, LH)
    }
    const KB = AH.e.Zero();
    const cB = {
      lAH: function(HH, BH) {
        return new qH(HH, BH.mAH, {
          preserveDrawingBuffer: BH.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      yrH: function(HH, BH) {
        ! function(HH, BH, LH) {
          const AH = new wH.e(HH.engine);
          HH.NQ = AH, AH.detachControl(), AH.autoClear = !1, DH.c.MIN_RENDERINGGROUPS = -1;
          for (let SH = DH.c.MIN_RENDERINGGROUPS; SH <= 1; SH++) AH.setRenderingOrder(SH, FH.c.PainterSortCompare, FH.c.PainterSortCompare, FH.c.PainterSortCompare);
          AH.setRenderingAutoClearDepthStencil(0, !1), nH.e.Enabled = !1, HH.ZrH = new OB(HH, Math.round(BH.drH)), HH.srH = new jH.c("camHolder", AH), HH.camera = new RH.b("camera", new hH.lu(0, 0, 0), AH), HH.camera.parent = HH.srH, bB(HH), (0, dH.g)(HH, ((HH, BH, LH) => (0, ZH.g)(BH, LH, HH.NQ))), AH.clearColor = SH.d.FromArray(BH.clearColor), AH.ambientColor = SH.Color3.FromArray(BH.ambientColor);
          const rH = LH(AH, BH.irH);
          AH.onNewLightAddedObservable.add((HH => {
            rH.some((BH => BH === HH)) || console.error(`Light "${HH.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), AH.skipPointerMovePicking = !0
        }(HH, BH, mB), kB(HH.NQ)
      },
      arH: bB,
      setBabylonFog: function(HH, BH, LH, AH) {
        const rH = HH.NQ;
        rH.fogMode = 3, rH.fogStart = BH, rH.fogEnd = LH, rH.fogColor.set(AH[0], AH[1], AH[2])
      },
      BSH: function(HH, BH, LH) {
        return HH.engine.hQ >= 2 && !HH.LSH && (HH.LSH = new cH(HH.NQ, HH.ASH)), IB(HH.NQ, HH.LSH, BH, LH)
      },
      SSH: function(HH, BH) {
        HH.NQ.dU.forEach((LH => {
          if (LH instanceof lH) return void LH.rBH(BH, HH.bG.DG);
          const AH = LH;
          if (AH.emitter.getConnectedParticleSystems)
            for (const HH of AH._particles) HH.position.set(HH.position.x - BH[0], HH.position.y - BH[1], HH.position.z - BH[2]);
          else {
            if (!AH.worldOffset) throw new Error("Particle system has no world offset");
            AH.worldOffset.x = -HH.bG.DG[0], AH.worldOffset.y = -HH.bG.DG[1], AH.worldOffset.z = -HH.bG.DG[2]
          }
        }))
      },
      linesFromArrays: function(HH, BH, LH) {
        const AH = new tH.e(BH, HH.NQ, null, void 0, void 0, !1);
        return (0, ZH.f)(BH, LH, HH.NQ, AH), AH
      },
      RQ: QB,
      rSH: function(HH, BH) {
        return KB.origin.Tm(BH.origin), KB.direction.Tm(BH.direction), KB.length = BH.length, KB.epsilon = BH.epsilon, KB.rSH(HH, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42424: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => nH,
      f: () => xH,
      g: () => aH
    });
    var AH = LH(41538),
      rH = LH(42427),
      SH = LH(42472),
      hH = LH(42434),
      tH = LH(38681),
      zH = LH(38687),
      CH = LH(38695),
      EH = LH(38697),
      XH = LH(38131),
      GH = LH(38135),
      YH = LH(42439),
      uH = LH(38098),
      QH = LH(38118),
      WH = LH(38086);

    function MH(HH, BH) {
      return Object.assign((function(HH, LH, AH, rH) {
        return BH(this.featureState, HH, LH, AH, rH)
      }), {
        EX: HH
      })
    }

    function xH(HH) {
      const BH = class extends YH.e {
          constructor(BH, LH) {
            const AH = (0, QH.V)(BH),
              rH = AH && (0, QH.s)(AH, HH.name);
            for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
            super(BH, HH.name, HH.priority, rH ? rH.defines : HH.defines(...hH), !1), this.featureState = void 0, this.featureState = LH, this._pluginManager._addPlugin(this), this._enable(!0), (0, QH.v)(this._material, HH, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return HH.className
          }
          isCompatible(HH) {
            return HH === WH.c.GLSL || HH === WH.c.WGSL
          }
        },
        LH = (0, uH.h)(HH);
      for (const [AH, rH] of Object.entries(uH.d)) {
        const SH = HH[AH];
        if (SH) {
          const HH = LH[AH];
          Object.defineProperty(BH.prototype, rH, {
            value: MH(SH, HH),
            writable: !0,
            configurable: !0
          })
        }
      }
      return BH
    }
    class vH extends(xH(tH.c)) {}
    var PH = LH(41106),
      TH = LH(42445),
      UH = LH(42449);

    function VH(HH, BH, LH) {
      return (0, UH.d)(LH, BH.urls, (() => async function(HH, BH, LH) {
        const {
          width: AH
        } = HH[0].getSize(), rH = HH.map(((HH, LH) => {
          var rH;
          const SH = Math.round(HH.getSize().height / AH),
            hH = null === BH || void 0 === BH ? void 0 : BH[LH];
          return {
            pixels: hH && hH.byteLength === AH * AH * SH * 4 ? hH : null !== (rH = OH.get(HH.getInternalTexture())) && void 0 !== rH ? rH : HH._readPixelsSync(),
            layers: SH
          }
        })), SH = Math.min(LH.Iu().getCaps().texture2DArrayMaxLayerCount, 256), tH = (0, UH.c)(rH, AH, SH).map((HH => {
          let {
            pixels: BH,
            layers: rH
          } = HH;
          return {
            atlas: new TH.c(BH, AH, AH, rH, PH.b.TEXTUREFORMAT_RGBA, LH, !0, !1, hH.d.NEAREST_NEAREST_MIPLINEAR),
            layers: rH
          }
        }));
        return HH.forEach(((HH, BH) => {
          const AH = HH.getInternalTexture();
          OH.has(AH) || (! function(HH, BH) {
            const LH = BH.createRawTexture(new Uint8Array(4), 1, 1, PH.b.TEXTUREFORMAT_RGBA, !1, !1, hH.d.NEAREST_SAMPLINGMODE);
            HH._hardwareTexture.release(), BH.unbindAllTextures(), LH._swapAndDie(HH, !1)
          }(AH, LH.Iu()), OH.set(AH, rH[BH].pixels))
        })), tH
      }(HH, BH.pixels, LH)))
    }
    const OH = new WeakMap;
    var bH = LH(38705);
    class kH extends(xH(zH.g)) {
      constructor(HH, BH) {
        super(HH, BH), this.loaded = new Set, this.mirrors = void 0, this.mirrors = BH.textures.map((HH => HH.mirror)), BH.useWebGL2 && !BH.imagesPerAtlas.length && BH.textureAtlases.splice(0, BH.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((HH, BH) => {
          HH.onLoadObservable.add((HH => {
            this.setTextureArrayData(HH, BH).catch((HH => {
              console.error(`Failed to build the texture arrays, at atlas ${BH}`, HH)
            }))
          }))
        })), (0, bH.l)(BH, HH.shaderLanguage)
      }
      async setTextureArrayData(HH, BH) {
        const LH = this.featureState,
          {
            width: AH,
            height: rH
          } = HH.getSize(),
          SH = this._material.shaderLanguage;
        if (!LH.useWebGL2) return void(0, bH.f)(this._material, LH, BH, AH, Math.round(rH / AH), SH);
        if (this.loaded.add(BH), this.loaded.size < this.mirrors.length) return;
        const hH = await VH(this.mirrors, LH.sources, this._material.yN());
        (0, bH.b)(this._material, LH, hH, AH, SH)
      }
    }
    var mH = LH(42455),
      oH = LH(41588),
      IH = LH(37961),
      fH = LH(42458),
      lH = LH(41703),
      KH = LH(41578),
      cH = LH(42414),
      eH = LH(38339),
      qH = LH(42463);
    class gH extends mH.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const NH = {
      Mesh: fH.c,
      TransformNode: cH.c,
      rX: mH.b,
      VertexBuffer: mH.e,
      BoundingInfo: oH.d,
      lu: IH.lu,
      ArenaBuffer: gH,
      SubMesh: KH.d,
      VertexData: lH.b,
      MirroredGeometry: qH.c,
      meshFromArrays: qH.f,
      plainMeshFromArrays: qH.g
    };
    (0, eH.d)(NH);
    var RH = LH(38194);
    class jH extends(xH(EH.h)) {
      constructor(HH, BH) {
        if (super(HH, BH), HH instanceof AH.StandardMaterial && BH.dirLightCount > 0) {
          const BH = HH,
            LH = BH._blockDirtyMechanism;
          BH._blockDirtyMechanism = !0, HH.disableLighting = !0, BH._blockDirtyMechanism = LH;
          const AH = (0, QH.V)(HH);
          AH && (AH.disableLighting = !0, (0, QH.T)(AH))
        }(0, RH.k)(HH)
      }
      dispose(HH) {
        (0, RH.o)(this._material), super.dispose(HH)
      }
    }

    function nH(HH, BH) {
      if (!(BH instanceof AH.StandardMaterial) || BH.specularTexture) return;
      const {
        r: LH,
        g: rH,
        b: SH
      } = BH.specularColor;
      0 === LH && 0 === rH && 0 === SH && (HH.SPECULARTERM = !1)
    }(0, EH.d)({
      disableUnusedSpecularTerm: nH
    });
    var FH = LH(38141),
      DH = LH(38353);
    const wH = new RegExp(`^#define ${CH.d}\\s*$`, "m");
    class ZH extends(xH(CH.j)) {
      constructor(HH, BH) {
        super(HH, BH), this.Mu = !1, BH.ditherOnlyWhileFading && (DH.c.add(HH), this.prewarmDitherTwins(HH))
      }
      prewarmDitherTwins(HH) {
        const BH = new WeakSet;
        HH.onEffectCreatedObservable.add((LH => {
          let {
            effect: AH,
            subMesh: rH
          } = LH;
          if (this.featureState.prewarmingDither || BH.has(AH)) return;
          BH.add(AH);
          const SH = null === rH || void 0 === rH ? void 0 : rH.getMesh();
          SH && !wH.test(AH.defines) && HH.yN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(SH) || BH.delete(AH)
          }))
        }))
      }
      prewarmDither(HH) {
        if (this.Mu || HH.mV()) return !1;
        const BH = new KH.d(0, 0, 0, 0, 0, HH, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(HH, BH)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== BH.effect
      }
      dispose(HH) {
        this.Mu = !0, super.dispose(HH)
      }
    }
    const dH = new Map;

    function aH(HH, BH) {
      dH.set(HH, BH)
    }
    aH(tH.c, vH), aH(zH.g, kH), aH(CH.j, ZH), aH(EH.h, jH), (0, XH.d)({
      create: (HH, BH) => {
        const LH = new AH.StandardMaterial(HH.name, BH);
        return (0, FH.m)(HH, LH), LH.detailMap._pluginDefineNames
      },
      write: (HH, BH, LH) => {
        (0, FH.P)(HH.mirror, BH, LH)
      },
      addFeature: (HH, BH, LH) => {
        const AH = dH.get(BH.feature);
        if (!AH) throw new Error(`${BH.feature.name} has no plugin class (registerPluginClass)`);
        new AH(HH.mirror, BH.state, ...LH)
      },
      texture: (HH, BH, LH) => {
        let {
          url: AH,
          noMipmap: rH,
          invertY: SH,
          samplingMode: tH,
          data: zH,
          sets: CH
        } = LH;
        if (!zH) {
          const LH = new hH.d(AH, BH, rH, SH, tH);
          return Object.assign(LH, CH), void(0, GH.H)(HH, LH)
        }
        const EH = {},
          XH = new Promise(((HH, BH) => {
            EH.onLoad = HH, EH.onError = (HH, LH) => {
              BH(new Error(`${zH.context}: ${(null===LH||void 0===LH?void 0:LH.message)||HH||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: YH,
            bytes: uH,
            label: QH
          } = zH,
          WH = {
            noMipmap: rH,
            invertY: !1,
            samplingMode: tH,
            ...EH,
            mimeType: YH,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          MH = new hH.d(null, BH, WH);
        FH.o.set(MH, XH), Object.assign(MH, CH), MH.updateURL(AH, uH);
        const xH = MH.getInternalTexture();
        xH && (xH.label = QH), HH.uvSet = MH.coordinatesIndex, HH.matrix.set((0, FH.K)(MH)), (0, GH.H)(HH, MH)
      },
      cube: (HH, BH, LH) => {
        let {
          rootUrl: AH,
          files: SH,
          noMipmap: tH,
          luminance: zH
        } = LH;
        const {
          samplingMode: CH
        } = HH.sampler, EH = CH === (0, GH.w)(tH) ? null : () => {
          (0, FH.G)(XH, CH)
        }, XH = new rH.e(AH, BH, null, tH, SH, EH, null, (0, GH.s)(zH));
        XH.coordinatesMode = hH.d.SKYBOX_MODE, (0, GH.H)(HH, XH)
      },
      canvas: (HH, BH, LH) => {
        let {
          width: AH,
          height: rH,
          mipmaps: tH,
          samplingMode: zH,
          hasAlpha: CH = !1,
          wrap: EH = hH.d.CLAMP_ADDRESSMODE
        } = LH;
        const XH = new SH.e(BH, {
          width: AH,
          height: rH
        }, HH, tH, zH);
        XH.hasAlpha = CH, XH.wrapU = EH, XH.wrapV = EH;
        const GH = (0, FH.x)(XH);
        return (0, FH.y)(GH, XH), GH
      }
    })
  },
  42463: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH,
      f: () => XH,
      g: () => GH
    });
    var AH = LH(42455),
      rH = LH(41356),
      SH = LH(41588),
      hH = LH(41706),
      tH = LH(42458),
      zH = LH(41703),
      CH = LH(38251);
    class EH extends hH.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (HH, BH) => {
          this.releaseUnlessInstanced(BH)
        }, this.onLinked = null
      }
      link(HH) {
        var BH;
        (0, CH.r)(HH), this.model = HH, null === (BH = this.onLinked) || void 0 === BH || BH.call(this, HH)
      }
      relink() {
        this.release();
        const HH = [];
        for (const rH of Object.values(this._vertexBuffers))
          if (!rH.getIsInstanced()) {
            const {
              byteOffset: BH,
              byteStride: LH,
              type: AH,
              normalized: SH
            } = rH;
            HH.push({
              kind: rH.getKind(),
              data: rH.getData(),
              offset: BH,
              stride: LH,
              components: rH.getSize(),
              glType: AH,
              isNormalized: SH
            })
          } const BH = this._indices.length ? this._indices : null,
          {
            minimum: LH,
            maximum: AH
          } = this.extend;
        this.link(new CH.h(HH, BH, this.getTotalVertices(), new Float64Array(LH.xrH()), new Float64Array(AH.xrH())))
      }
      copy(HH) {
        if (!this.model) return super.copy(HH);
        const BH = new EH(HH, this.yN()),
          LH = this.vrH(void 0, !0);
        LH && BH.setIndices(LH);
        let hH = !1;
        for (const SH in this._vertexBuffers) {
          const HH = this._vertexBuffers[SH],
            LH = HH.getData();
          if (!LH) continue;
          const tH = HH.getSize(),
            {
              type: zH,
              byteOffset: CH,
              byteStride: EH,
              normalized: XH
            } = HH;
          hH ||= HH.isUpdatable();
          const GH = HH.getIsInstanced() ? (LH instanceof Array ? 4 * LH.length : LH.byteLength) / EH : this.getTotalVertices(),
            YH = (0, rH.r)(LH, tH, zH, CH, EH, GH, !0),
            uH = {
              updatable: HH.isUpdatable(),
              stride: tH,
              type: zH,
              normalized: XH,
              takeBufferOwnership: !0,
              instanced: HH.getIsInstanced()
            };
          BH.setVerticesBuffer(new AH.e(this.Iu(), YH, SH, uH), GH)
        }
        return BH._updatable = hH, BH._boundingInfo = new SH.d(this.extend.minimum, this.extend.maximum), BH.relink(), BH
      }
      static mergeMeshes(HH, BH, LH, AH, rH, SH) {
        const zH = HH[0].yN(),
          CH = new tH.c(HH[0].name + "_merged", zH),
          XH = new EH(hH.d.RandomId(), zH, void 0, !1, CH);
        try {
          if (!tH.c.MergeMeshes(HH, BH, LH, CH, rH, SH)) return CH.dispose(), null
        } catch (GH) {
          throw CH.dispose(), GH
        }
        return XH.relink(), CH
      }
      removeVerticesData(HH) {
        this.releaseUnlessInstanced(HH), super.removeVerticesData(HH)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(HH) {
        var BH;
        HH && null !== (BH = this.getVertexBuffer(HH)) && void 0 !== BH && BH.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, CH.z)(this.model), this.model = null)
      }
    }

    function XH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tH.c(HH, LH);
      const rH = (0, CH.p)(BH),
        {
          positions: SH,
          normals: XH,
          uvs: GH,
          indices: YH,
          named: uH = {}
        } = BH,
        QH = new zH.b;
      QH.positions = SH, QH.normals = null !== XH && void 0 !== XH ? XH : null, QH.uvs = null !== GH && void 0 !== GH ? GH : null, QH.indices = YH;
      const WH = new EH(hH.d.RandomId(), LH, QH, !1, AH);
      for (const {
          kind: hH,
          components: tH
        }
        of rH.vertexAttributes) hH in uH && AH.setVerticesData(hH, uH[hH], !1, tH);
      return WH.link(rH), AH
    }

    function GH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const rH = new tH.c(HH, LH),
        {
          positions: SH,
          normals: hH,
          uvs: CH,
          indices: EH
        } = BH;
      return Object.assign(new zH.b, {
        positions: SH,
        normals: hH,
        uvs: CH,
        indices: EH
      }).applyToMesh(rH, AH), rH
    }
  },
  39624: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => hH,
      g: () => SH,
      k: () => rH,
      n: () => tH,
      r: () => CH,
      t: () => EH,
      x: () => zH
    });
    const AH = 16,
      rH = 256,
      SH = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      hH = 16,
      tH = 256,
      zH = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + AH,
        color2: 12 + 5 * AH,
        EW: 12 + 9 * AH,
        remap: 12 + 13 * AH
      },
      CH = 12 + 17 * AH,
      EH = [zH.colorCount, zH.velocityCount, zH.remapCount, zH.ramp]
  },
  39619: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH,
      e: () => vH
    });
    var AH = LH(38002),
      rH = LH(37961),
      SH = LH(38135),
      hH = LH(39624);
    class tH {
      constructor(HH) {
        this.aX = HH, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const BH = Math.max(1, HH);
        this.records = new Float32Array(BH * hH.c), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(BH).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(HH) {
        const BH = this.aX;
        for (let LH = 0; LH < BH; LH++) {
          const LH = this.cursor;
          if (this.cursor = LH + 1 === BH ? 0 : LH + 1, this.deaths[LH] <= HH) return LH
        }
        return -1
      }
      written(HH, BH) {
        this.deaths[HH] = BH, HH >= this.highWater && (this.highWater = HH + 1), this.uploadFrom < 0 ? (this.uploadFrom = HH, this.uploadTo = HH + 1) : HH >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, HH + 1) : this.wrapTo = Math.max(this.wrapTo, HH + 1)
      }
      shiftTimes(HH) {
        const BH = this.records,
          LH = this.highWater * hH.c;
        for (let AH = hH.g.time; AH < LH; AH += hH.c) BH[AH] -= HH;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(HH) {
        this.uploadFrom >= 0 && (HH(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && HH(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(HH) {
        let BH = 0;
        for (let LH = 0; LH < this.highWater; LH++) this.deaths[LH] > HH && BH++;
        return BH
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var zH = LH(38071),
      CH = LH(39627),
      EH = LH(39633),
      XH = LH(39640);
    class GH {
      constructor() {
        this.particleEmitterType = new EH.b, this.texture = null, this.blendMode = XH.g, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = rH.lu.Zero(), this.worldOffset = new rH.lu(0, 0, 0), this.color1 = new zH.d(1, 1, 1, 1), this.color2 = new zH.d(1, 1, 1, 1), this.colorDead = new zH.d(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var HH;
        return null !== (HH = YH(this).direction1) && void 0 !== HH ? HH : rH.lu.Zero()
      }
      set direction1(HH) {
        const BH = YH(this);
        BH.direction1 && (BH.direction1 = HH)
      }
      get direction2() {
        var HH;
        return null !== (HH = YH(this).direction2) && void 0 !== HH ? HH : rH.lu.Zero()
      }
      set direction2(HH) {
        const BH = YH(this);
        BH.direction2 && (BH.direction2 = HH)
      }
      get minEmitBox() {
        var HH;
        return null !== (HH = YH(this).minEmitBox) && void 0 !== HH ? HH : rH.lu.Zero()
      }
      set minEmitBox(HH) {
        const BH = YH(this);
        BH.minEmitBox && (BH.minEmitBox = HH)
      }
      get maxEmitBox() {
        var HH;
        return null !== (HH = YH(this).maxEmitBox) && void 0 !== HH ? HH : rH.lu.Zero()
      }
      set maxEmitBox(HH) {
        const BH = YH(this);
        BH.maxEmitBox && (BH.maxEmitBox = HH)
      }
      createBoxEmitter(HH, BH, LH, AH) {
        const rH = new EH.b;
        return this.particleEmitterType = rH, rH.direction1 = HH, rH.direction2 = BH, rH.minEmitBox = LH, rH.maxEmitBox = AH, rH
      }
      addColorGradient(HH, BH, LH) {
        return this.colorGradients ??= [], this.colorGradients.push(new CH.e(HH, BH, LH)), this.colorGradients.sort(uH), this
      }
      removeColorGradient(HH) {
        return QH(this.colorGradients, HH), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(HH, BH, LH) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new CH.m(HH, BH, LH)), this.velocityGradients.sort(uH), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(HH, BH, LH) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new CH.m(HH, BH, LH)), this.colorRemapGradients.sort(uH), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(HH, BH) {
        return this.rampGradients ??= [], this.rampGradients.push(new CH.i(HH, BH)), this.rampGradients.sort(uH), this
      }
      removeRampGradient(HH) {
        return QH(this.rampGradients, HH), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function YH(HH) {
      return HH.particleEmitterType
    }

    function uH(HH, BH) {
      return HH.gradient < BH.gradient ? -1 : HH.gradient > BH.gradient ? 1 : 0
    }

    function QH(HH, BH) {
      const LH = HH ? HH.findIndex((HH => HH.gradient === BH)) : -1;
      LH >= 0 && HH.splice(LH, 1)
    }
    class WH extends GH {
      constructor(HH, BH, LH) {
        super(), this.name = HH, this.host = LH, this.onDispose = MH, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = rH.lu.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.Mu = !1, this.emitterMatrix = new rH.Matrix, this.inverseEmitterMatrix = new rH.Matrix, this.spawned = {
          position: new rH.lu,
          direction: new rH.lu
        }, this.ring = new tH(BH)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(HH) {
        var BH;
        null === (BH = this.emitterDisposed) || void 0 === BH || BH.remove(), this.emitterDisposed = null, this.emitterValue = HH, HH && PH(HH) && (this.emitterDisposed = HH.uR.add((() => {
          this.emitterDisposed = null, this.dispose()
        })))
      }
      start() {
        this.started = !0, this.stopped = !1
      }
      stop() {
        this.stopped = !0, this.endIfSpent()
      }
      isStarted() {
        return this.started
      }
      isStopping() {
        return this.stopped && this.alive
      }
      isEmitting() {
        return this.started && !this.stopped
      }
      isReady() {
        return !this.Mu && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var HH;
        let BH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.Mu || (this.Mu = !0, null === (HH = this.emitterDisposed) || void 0 === HH || HH.remove(), this.emitterDisposed = null, BH && ((0, SH.y)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(HH) {
        const BH = this.emitter;
        return !!BH && !(PH(BH) && !BH.isEnabled()) && this.animate(HH)
      }
      animate(HH) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const BH = this.updateSpeed * HH;
        let LH;
        return this.manualEmitCount > -1 ? (LH = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (LH = this.emitRate * BH | 0, this.newPartsExcess += this.emitRate * BH - LH), this.newPartsExcess > 1 && (LH += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (LH = 0), this.alive = this.liveUntil > this.time, this.time += BH, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), LH > 0 && this.spawn(LH), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.Mu && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var HH;
        return this.started = !1, null === (HH = this.onAnimationEnd) || void 0 === HH || HH.call(this), !!this.Mu || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(HH, BH) {
        HH[BH] = this.anchor[0] + this.shift[0] + this.worldOffset.x, HH[BH + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, HH[BH + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      rBH(HH, BH) {
        this.emitterValue && PH(this.emitterValue) ? (this.shift[0] -= HH[0], this.shift[1] -= HH[1], this.shift[2] -= HH[2]) : this.worldOffset.set(-BH[0], -BH[1], -BH[2])
      }
      spawn(HH) {
        var BH, LH;
        const SH = this.emitterValue,
          tH = PH(SH) ? SH.getWorldMatrix() : rH.Matrix.TranslationToRef(SH.x, SH.y, SH.z, this.emitterMatrix);
        tH.invertToRef(this.inverseEmitterMatrix);
        const {
          position: zH,
          direction: CH
        } = this.spawned, EH = this.spawned, XH = this.ring, GH = this.liveUntil <= this.time;
        GH && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, XH.restart());
        const {
          records: YH,
          recordBits: uH
        } = XH, QH = hH.g, WH = null === (BH = this.getColorGradients()) || void 0 === BH ? void 0 : BH[0], MH = WH ? WH.color1 : this.color1, xH = WH ? null !== (LH = WH.color2) && void 0 !== LH ? LH : WH.color1 : this.color2;
        for (let rH = 0; rH < HH; rH++) {
          const HH = XH.freeSlot(this.time);
          if (HH < 0) break;
          const BH = (0, AH.RandomRange)(this.minLifeTime, this.maxLifeTime),
            LH = (0, AH.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(tH, zH, EH, !1), this.particleEmitterType.startDirectionFunction(tH, CH, EH, !1, this.inverseEmitterMatrix), 0 === LH ? CH.set(0, 0, 0) : CH.scaleInPlace(LH);
          const SH = (0, AH.RandomRange)(this.minSize, this.maxSize);
          GH && 0 === rH && (this.anchor[0] = zH.x, this.anchor[1] = zH.y, this.anchor[2] = zH.z);
          const WH = HH * hH.c;
          YH[WH + QH.position] = zH.x - this.anchor[0] - this.shift[0], YH[WH + QH.position + 1] = zH.y - this.anchor[1] - this.shift[1], YH[WH + QH.position + 2] = zH.z - this.anchor[2] - this.shift[2], YH[WH + QH.time] = this.time - this.epoch, YH[WH + QH.direction] = CH.x, YH[WH + QH.direction + 1] = CH.y, YH[WH + QH.direction + 2] = CH.z, YH[WH + QH.lifeTime] = BH, YH[WH + QH.size] = SH, uH[WH + QH.seed] = 4294967296 * Math.random() >>> 0;
          const vH = Math.random();
          YH[WH + QH.colour] = MH.r + (xH.r - MH.r) * vH, YH[WH + QH.colour + 1] = MH.g + (xH.g - MH.g) * vH, YH[WH + QH.colour + 2] = MH.b + (xH.b - MH.b) * vH, YH[WH + QH.colour + 3] = MH.a + (xH.a - MH.a) * vH;
          const PH = this.time + BH;
          PH > this.liveUntil && (this.liveUntil = PH), XH.written(HH, PH)
        }
      }
    }

    function MH() {}
    const xH = 5;

    function vH(HH, BH) {
      const LH = [];
      let AH = 0;
      for (const rH of HH) rH.isReady() || (AH++, LH.length < xH && LH.push(`${BH} particle system ${rH.name}`));
      return AH > LH.length && LH.push(`${AH-LH.length} more ${BH} particle systems`), LH
    }

    function PH(HH) {
      return void 0 !== HH.position
    }
  },
  45075: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => WH,
      c: () => tH,
      d: () => hH,
      f: () => CH
    });
    var AH = LH(38071),
      rH = LH(39627),
      SH = LH(39624);

    function hH(HH, BH, LH, AH) {
      const rH = SH.x;
      BH.fill(0), HH.gravity.toArray(BH, rH.gravity), HH.colorDead.toArray(BH, rH.colorDead), LH[rH.ramp] = HH.useRampGradients ? 1 : 0;
      const hH = HH.getColorGradients(),
        tH = GH(HH, hH, "colour", AH);
      LH[rH.colorCount] = tH;
      for (let SH = 0; SH < tH; SH++) {
        var zH;
        const HH = hH[YH(hH, SH)];
        BH[rH.colorPositions + SH] = HH.gradient, HH.color1.toArray(BH, rH.color1 + 4 * SH), (null !== (zH = HH.color2) && void 0 !== zH ? zH : HH.color1).toArray(BH, rH.color2 + 4 * SH)
      }
      const CH = HH.getVelocityGradients(),
        EH = GH(HH, CH, "EW", AH);
      LH[rH.velocityCount] = EH;
      for (let SH = 0; SH < EH; SH++) xH(BH, rH.EW + 4 * SH, CH[YH(CH, SH)]);
      const XH = HH.useRampGradients ? HH.getColorRemapGradients() : null,
        uH = GH(HH, XH, "colour remap", AH);
      LH[rH.remapCount] = uH;
      for (let SH = 0; SH < uH; SH++) xH(BH, rH.remap + 4 * SH, XH[YH(XH, SH)])
    }

    function tH() {
      return {
        key: [],
        texels: new Uint8Array(4 * SH.k)
      }
    }
    const zH = [];

    function CH(HH, BH) {
      return EH(HH, zH), !MH(zH, BH.key) && (BH.key.length = 0, BH.key.push(...zH), BH.key.length > 0 && function(HH, BH) {
        for (let LH = 0; LH < SH.k; LH++) rH.o.GetCurrentGradient(LH / SH.k, HH, ((HH, BH, LH) => {
          AH.Color3.LerpToRef(HH.color, BH.color, LH, XH)
        })), BH[4 * LH] = 255 * XH.r, BH[4 * LH + 1] = 255 * XH.g, BH[4 * LH + 2] = 255 * XH.b, BH[4 * LH + 3] = 255
      }(HH.getRampGradients(), BH.texels), !0)
    }

    function EH(HH, BH) {
      BH.length = 0;
      const LH = HH.useRampGradients ? HH.getRampGradients() : null;
      if (null !== LH && void 0 !== LH && LH.length) {
        BH.push(LH.length);
        for (const HH of LH) BH.push(HH.gradient, HH.color.r, HH.color.g, HH.color.b)
      }
    }
    const XH = new AH.Color3;

    function GH(HH, BH, LH, AH) {
      return BH ? BH.length > SH.b ? (AH(`particleStops:${LH}`, `GPU particles use the first 2 and last ${SH.b-2} of more than ${SH.b} ${LH} gradient stops (${HH.name})`), SH.b) : BH.length : 0
    }

    function YH(HH, BH) {
      return BH < 2 || HH.length <= SH.b ? BH : HH.length - SH.b + BH
    }
    const uH = new Float32Array(SH.r),
      QH = new Uint32Array(uH.buffer);

    function WH(HH, BH, LH) {
      return hH(HH, uH, QH, LH), BH && MH(QH, BH) ? null : QH.slice()
    }

    function MH(HH, BH) {
      if (HH.length !== BH.length) return !1;
      for (let LH = 0; LH < HH.length; LH++)
        if (HH[LH] !== BH[LH]) return !1;
      return !0
    }

    function xH(HH, BH, LH) {
      var AH;
      HH[BH] = LH.gradient, HH[BH + 1] = LH.factor1, HH[BH + 2] = null !== (AH = LH.factor2) && void 0 !== AH ? AH : LH.factor1
    }
  },
  42449: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      const AH = BH * BH * 4,
        rH = HH[0].layers,
        SH = rH * (HH.length - 1) + HH[HH.length - 1].layers,
        hH = new Uint8Array(SH * AH);
      HH.forEach(((BH, LH) => {
        const SH = LH + 1 < HH.length ? Math.min(BH.layers, rH) : BH.layers;
        hH.set(new Uint8Array(BH.pixels.buffer, BH.pixels.byteOffset, SH * AH), LH * rH * AH)
      }));
      const tH = Math.max(1, Math.min(SH, LH || SH));
      if (tH === SH) return [{
        pixels: hH,
        layers: SH
      }];
      const zH = [];
      for (let CH = 0; CH < SH; CH += tH) {
        const HH = Math.min(SH, CH + tH);
        zH.push({
          pixels: hH.slice(CH * AH, HH * AH),
          layers: HH - CH
        })
      }
      return zH
    }
    LH.d(BH, {
      c: () => AH,
      d: () => SH
    });
    const rH = new WeakMap;

    function SH(HH, BH, LH) {
      var AH, SH;
      const hH = null !== (AH = rH.get(HH)) && void 0 !== AH ? AH : new Map;
      rH.set(HH, hH);
      const tH = null !== (SH = hH.get(BH[0])) && void 0 !== SH ? SH : [];
      hH.set(BH[0], tH);
      const zH = tH.find((HH => HH.urls.length === BH.length && HH.urls.every(((HH, LH) => HH === BH[LH]))));
      if (zH) return zH.built;
      const CH = {
        urls: [...BH],
        built: LH()
      };
      return tH.push(CH), CH.built.catch((() => {
        tH.splice(tH.indexOf(CH), 1)
      })), CH.built
    }
  },
  39640: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      g: () => rH,
      j: () => zH,
      k: () => XH
    });
    var AH = LH(38067);
    const rH = 0,
      SH = 3,
      hH = 4,
      tH = new Map([
        [rH, AH.c.ALPHA_ONEONE],
        [1, AH.c.ALPHA_COMBINE],
        [2, AH.c.ALPHA_ADD],
        [SH, AH.c.ALPHA_MULTIPLY],
        [-1, AH.c.ALPHA_SUBTRACT]
      ]);

    function zH(HH) {
      var BH;
      return null !== (BH = tH.get(HH)) && void 0 !== BH ? BH : HH
    }
    const CH = [SH, 2],
      EH = new Map;

    function XH(HH) {
      if (HH === hH) return CH;
      let BH = EH.get(HH);
      return BH || (BH = [HH], EH.set(HH, BH)), BH
    }
  },
  45067: (HH, BH, LH) => {
    function AH() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const BH = new Set;
      return (LH, AH) => {
        BH.has(LH) || (BH.add(LH), console.warn(HH + AH))
      }
    }
    LH.d(BH, {
      e: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);