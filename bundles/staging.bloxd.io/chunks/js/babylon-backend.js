export const id = 0;
export const ids = [0];
export const modules = {
  42601: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      CapeMaterialPlugin: () => MW,
      HueTintMaterialPlugin: () => KW,
      LifeformMaterialPlugin: () => SW,
      OverlayMaterialPlugin: () => YW
    });
    var mW = OW(42603),
      EW = OW(39198);
    class NW extends((0, mW.d)(EW.b)) {}(0, mW.g)(EW.b, NW);
    var PW = OW(38485);
    class LW extends((0, mW.d)(PW.e)) {}(0, mW.g)(PW.e, LW);
    var cW = OW(39025);
    class wW extends((0, mW.d)(cW.f)) {}(0, mW.g)(cW.f, wW);
    var tW = OW(38511),
      ZW = OW(41782),
      xW = OW(38502);
    class lW extends((0, mW.d)(xW.h)) {
      constructor(WW, iW, OW) {
        super(WW, iW, OW), (0, tW.i)(WW)
      }
      dispose(WW) {
        (0, tW.k)(this._material), super.dispose(WW)
      }
    }(0, mW.g)(xW.h, lW), (0, xW.j)({
      disableUnusedSpecularTerm: mW.c,
      isLightingDisabled: WW => WW instanceof ZW.StandardMaterial && WW.disableLighting
    });
    var AW = OW(39915);
    class bW extends((0, mW.d)(AW.d)) {}(0, mW.g)(AW.d, bW);
    var jW = OW(40011),
      UW = OW(38376),
      kW = OW(39308),
      sW = OW(38500);
    class MW extends((0, mW.d)(jW.b)) {}(0, mW.g)(jW.b, MW);
    class KW extends((0, mW.d)(UW.b)) {}(0, mW.g)(UW.b, KW);
    class SW extends((0, mW.d)(kW.m)) {}(0, mW.g)(kW.m, SW);
    class YW extends((0, mW.d)(sW.c)) {}(0, mW.g)(sW.c, YW)
  },
  53714: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      addBabylonLights: () => Hi,
      createSceneParticleSystem: () => di,
      default: () => vi
    });
    var mW = OW(53720),
      EW = (OW(41491), OW(42599), OW(41997), OW(53738)),
      NW = OW(38369),
      PW = OW(38235),
      LW = OW(53752),
      cW = OW(53756),
      wW = OW(38431),
      tW = (OW(42603), OW(53769)),
      ZW = OW(53763),
      xW = OW(39948),
      lW = OW(53774),
      AW = OW(41392),
      bW = OW(39931);
    const jW = "gpuParticles",
      UW = "gpuParticlesSummed",
      kW = bW.A,
      sW = WW => WW / 4,
      MW = (WW, iW, OW, mW) => Array.from({
        length: iW
      }, ((EW, NW) => `(${((WW,iW,OW)=>0===iW?`${WW} < 1`:iW===OW-1?`${WW} >= ${iW}`:`${WW} == ${iW}`)(WW,NW,iW)} ? ${OW(NW)} : ${mW})`)).join("\n\t\t+ "),
      KW = (WW, iW, OW) => `vec4 ${WW}(int i) {\n\treturn ${MW("i",OW,(WW=>`gpuParticleSystem[${iW+WW}]`),"vec4(0.0)")};\n}\n`,
      SW = `\n${KW("colorPositionsAt",sW(kW.colorPositions),bW.c/4)}\n${KW("color1At",sW(kW.color1),bW.c)}\n${KW("color2At",sW(kW.color2),bW.c)}\n${KW("velocityAt",sW(kW.Sj),bW.c)}\n${KW("remapStopAt",sW(kW.remap),bW.c)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${MW("j",4,(WW=>`v[${WW}]`),"0.0")};\n}\n`,
      YW = (WW, iW, OW, mW) => WW ? `${OW}(${mW})` : `gpuParticleSystem[${iW} + ${mW}]`,
      yW = WW => `gpuParticleSystem[${WW>>2}].${"xyzw"[3&WW]}`,
      TW = WW => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${bW.c}\n#define COLOR_POSITIONS ${sW(kW.colorPositions)}\n#define COLOR1 ${sW(kW.color1)}\n#define COLOR2 ${sW(kW.color2)}\n#define VELOCITY ${sW(kW.Sj)}\n#define REMAP ${sW(kW.remap)}\n#define RECORDS_PER_ROW ${bW.p}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${bW.t/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${yW(kW.gravity)}, ${yW(kW.gravity+1)}, ${yW(kW.gravity+2)}); }\nint colorCount() { return int(${yW(kW.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${sW(kW.colorDead)}]; }\nint velocityCount() { return int(${yW(kW.velocityCount)}); }\nint remapCount() { return int(${yW(kW.remapCount)}); }\n${WW?SW:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${WW?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${YW(WW,"COLOR1","color1At","i")}, ${YW(WW,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${YW(WW,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${YW(WW,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${YW(WW,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${YW(WW,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${YW(WW,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${YW(WW,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${YW(WW,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      JW = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    AW.c.ShadersStore[`${jW}VertexShader`] = TW(!1), AW.c.ShadersStore[`${jW}PixelShader`] = JW, AW.c.ShadersStore[`${UW}VertexShader`] = TW(!0), AW.c.ShadersStore[`${UW}PixelShader`] = JW;
    const hW = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      HW = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var nW = OW(39925),
      uW = OW(53776);
    class oW extends nW.d {
      constructor(WW, iW, OW, mW) {
        super(WW, iW, OW), this.renderer = OW, this.rb = mW, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(bW.t), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, uW.g)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (WW, iW) => {
          const {
            engine: OW
          } = this, mW = OW._gl;
          OW._bindTextureDirectly(mW.TEXTURE_2D, this.records, !0), OW._unpackFlipY(!1);
          const EW = this.ring.recordBits;
          for (let NW = WW; NW < iW;) {
            const WW = Math.floor(NW / bW.p),
              OW = Math.min(iW, (WW + 1) * bW.p);
            mW.texSubImage2D(mW.TEXTURE_2D, 0, NW % bW.p * 4, WW, 4 * (OW - NW), 1, mW.RGBA_INTEGER, mW.UNSIGNED_INT, EW, NW * bW.g), NW = OW
          }
          OW._bindTextureDirectly(mW.TEXTURE_2D, null)
        }, this.id = WW;
        const EW = mW.VA();
        this.engine = EW;
        const NW = Math.max(1, iW),
          PW = Math.min(NW, bW.p);
        this.records = EW.createRawTexture(null, 4 * PW, Math.ceil(NW / PW), tW.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, tW.e.TEXTURE_NEAREST_SAMPLINGMODE, null, tW.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rb.getAnimationRatio() || 1;
        const iW = this.rb.getFrameId();
        if (iW === this.animatedFrame) return !1;
        const OW = super.animate(WW);
        return OW && (this.animatedFrame = iW, this.ring.takeUploads(this.uploadSlots)), OW
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(WW) {
        (0, uW.h)(this, this.uniforms, this.uniformBits, WW);
        for (const OW of bW.w) this.uniforms[OW] = this.uniformBits[OW];
        var iW;
        (0, uW.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (iW = this.ramp) || void 0 === iW || iW.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = ZW.b.CreateRGBATexture(this.rampTexels.texels, bW.l, 1, this.rb, !1, !1, tW.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var WW;
        this.records.dispose(), null === (WW = this.ramp) || void 0 === WW || WW.dispose(), this.ramp = null
      }
    }
    const dW = "the context was lost before the programs linked";
    class eW {
      constructor(WW, iW) {
        this.rb = WW, this.reportFailure = iW, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = jW, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, lW.b)(), this.engine = WW.VA(), this.whiteRamp = ZW.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, WW, !1, !1, tW.e.TEXTURE_NEAREST_SAMPLINGMODE);
        const OW = this.linkPair(jW),
          mW = null !== OW && OW !== dW ? this.linkPair(UW) : OW;
        null === mW && null !== OW ? (console.warn(`GPU particles link their fallback here: ${OW}`), this.reportFailure(OW, !0)) : null !== mW && this.fail(mW === dW ? dW : null !== OW && void 0 !== OW ? OW : mW)
      }
      wV(WW, iW) {
        const OW = bW.p * this.engine.getCaps().maxTextureSize;
        iW > OW && this.warnOnce(`capacity:${WW}`, `particle system ${WW} holds ${OW} particles, not ${iW}: its records texture's limit`);
        const mW = new oW(WW, Math.min(iW, OW), this, this.rb);
        return this.rb.addParticleSystem(mW), mW
      }
      canDraw(WW) {
        var iW, OW;
        if (this.failed || null === (iW = WW.texture) || void 0 === iW || null === (OW = iW.mirror) || void 0 === OW || !OW.isReady()) return !1;
        for (const mW of (0, xW.h)(WW.blendMode))
          if (!this.effectFor(mW).isReady()) return !1;
        return !0
      }
      disposeStopped(WW) {
        this.rb._toBeDisposed.push(WW)
      }
      remove(WW) {
        this.rb.removeParticleSystem(WW), WW.releaseGl()
      }
      render(WW) {
        var iW;
        if (!WW.isReady() || !WW.hasLiveParticles()) return 0;
        const {
          engine: OW,
          rb: mW,
          frame: EW
        } = this;
        WW.prepareDraw(this.warnOnce), WW.drawOffset(EW, 0), EW[3] = WW.drawTime();
        const NW = WW.ring.drawStart(),
          PW = WW.ring.drawCount(),
          LW = null !== (iW = WW.ramp) && void 0 !== iW ? iW : this.whiteRamp;
        OW.setState(!1);
        for (const cW of (0, xW.h)(WW.blendMode)) {
          const iW = this.effectFor(cW);
          OW.enableEffect(iW), iW.setTexture("gpuParticleTexture", WW.texture.mirror), iW.setTexture("gpuParticleRampTexture", LW), iW._bindTexture("gpuParticleRecords", WW.records), iW.setMatrix("gpuParticleView", mW.getViewMatrix()), iW.setMatrix("gpuParticleProjection", mW.getProjectionMatrix()), iW.setFloatArray4("gpuParticleSystem", WW.uniforms), iW.setFloat4("gpuParticleFrame", EW[0], EW[1], EW[2], EW[3]), iW.setFloat2("gpuParticleRange", NW, PW), iW.setFloat("gpuParticleRamp", WW.uniforms[bW.A.ramp]), OW.bindBuffers(this.vertexBuffers, null, iW), OW.setAlphaMode((0, xW.e)(cW)), OW.drawArraysType(tW.e.MATERIAL_TriangleStripDrawMode, 0, 4, PW), iW._bindTexture("gpuParticleRecords", null)
        }
        return OW.setAlphaMode(tW.e.ALPHA_DISABLE), PW
      }
      linkPair(WW) {
        this.shader = WW, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(WW, ""), this.multiplyEffect = this.createEffect(WW, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(WW) {
        const iW = WW.getPipelineContext(),
          OW = this.gl();
        OW && null === this.pairFailure && (!iW || iW.isParallelCompiled && !iW.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : iW.isParallelCompiled && iW.program && (OW.getProgramParameter(iW.program, OW.LINK_STATUS) || this.programFailed(function(WW, iW, OW) {
          if (WW.isContextLost()) return dW;
          for (const [mW, EW] of [
              ["VERTEX SHADER", iW.vertexShader],
              ["FRAGMENT SHADER", iW.fragmentShader]
            ]) {
            const iW = EW && !WW.getShaderParameter(EW, WW.COMPILE_STATUS) ? WW.getShaderInfoLog(EW) : null;
            if (iW) return `${mW} ${iW}`
          }
          return WW.getProgramInfoLog(OW) || "a program did not link"
        }(OW, iW, iW.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(WW) {
        return WW === xW.b ? this.multiplyEffect : this.effect
      }
      createEffect(WW, iW) {
        return this.engine.createEffect(WW, [], hW, HW, iW, void 0, void 0, ((iW, OW) => {
          var mW;
          WW === this.shader && this.programFailed(null !== (mW = this.gl()) && void 0 !== mW && mW.isContextLost() ? dW : function(WW) {
            const iW = WW.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(iW) ? "a program failed, its log not in this browser's stack" : iW.replace(/^Error: /, "")
          }(OW))
        }))
      }
      programFailed(WW) {
        this.linkingPair ? this.pairFailure ??= WW : this.fail(WW)
      }
      fail(WW) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${WW}`), this.reportFailure(WW, !1);
          for (const WW of this.rb.vY.slice()) WW instanceof oW && WW.disposeOnStop && WW.dispose()
        }
      }
    }
    var vW = OW(41359);
    class gW extends vW.c {
      createEffect() {
        const WW = super.createEffect(...arguments);
        return VW(WW), DW.has(WW) || (DW.add(WW), WW.onCompileObservable.add((() => {
          VW(WW)
        }))), WW
      }
    }
    const DW = new WeakSet;

    function VW(WW) {
      WW._vertexSourceCodeBeforeMigration = "", WW._fragmentSourceCodeBeforeMigration = ""
    }
    var pW = OW(41715),
      fW = OW(42588),
      CW = OW(41469),
      XW = OW(41680),
      BW = OW(41675),
      qW = OW(41604),
      RW = OW(42650),
      GW = OW(38691),
      IW = OW(53781),
      aW = OW(53788),
      rW = OW(53797),
      zW = OW(41628),
      FW = OW(3911),
      QW = OW(38576),
      Wi = OW(41825),
      ii = OW(38645),
      Oi = OW(38594);

    function mi(WW) {
      if (WW.visibility < 1 || !WW.isVisible || !WW.isEnabled() || WW.metadata[Oi.g] || !WW.isReady()) return !0;
      const iW = WW.hY;
      if (!iW || 0 === iW.length) return !0;
      for (let OW = 0; OW < iW.length; OW++) {
        const mW = iW[OW],
          EW = mW.BA();
        if (!EW || !EW.isReadyForSubMesh(WW, mW, !1)) return !0
      }
      return !1
    }
    class Ei {
      constructor(WW, iW) {
        this.Hx = WW, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, iW.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      kZ(WW) {
        var iW;
        const OW = this.armed;
        if (this.armed = !1, this.vis = null, !OW) return !1;
        this.culled = 0;
        const {
          Hx: mW
        } = this, EW = null === (iW = mW.bY) || void 0 === iW ? void 0 : iW.visibility;
        if (!EW || !WW || mW.TZ.Lb) return !1;
        if (!(mW.oZ.lEW[0] >= ii.f)) return !1;
        const NW = WW.getProjectionMatrix().m;
        if (0 !== NW[15]) return !1;
        const PW = mW.Wl,
          LW = WW.globalPosition,
          cW = this.eye;
        return cW[0] = LW.x + PW[0], cW[1] = LW.y + PW[1], cW[2] = LW.z + PW[2], !!EW.eyeClear(cW[0], cW[1], cW[2], WW.minZ, NW, mW.oZ) && (this.vis = EW, this.passable.clear(), this.count = 0, !0)
      }
      see(WW, iW) {
        const OW = this.count++;
        if (OW === this.cellSlots.length) {
          const WW = new Int32Array(2 * OW);
          WW.set(this.cellSlots), this.cellSlots = WW
        }
        this.cellSlots[OW] = iW, this.meshes[OW] = WW
      }
      seeThrough(WW) {
        this.passable.add(WW)
      }
      finish(WW, iW) {
        const {
          vis: OW,
          eye: mW,
          meshes: EW,
          count: NW,
          cellSlots: PW
        } = this, {
          oZ: LW
        } = this.Hx, [cW, wW] = LW.lEW, tW = null !== OW && OW.update(mW[0], mW[1], mW[2], LW.UZ, cW, wW, this.passable);
        let ZW = 0;
        for (let xW = 0; xW < NW; xW++) {
          const mW = EW[xW];
          if (tW) {
            const WW = 3 * PW[xW];
            if (WW >= 0 && !OW.isDrawn(iW[WW], iW[WW + 1], iW[WW + 2])) {
              ZW++;
              continue
            }
          }
          zW.g.prototype.push.call(WW, mW)
        }
        EW.fill(null, 0, NW), this.count = 0, this.vis = null, this.culled = ZW
      }
    }
    var Ni = OW(38626),
      Pi = OW(38589),
      Li = OW(41805),
      ci = OW(53801),
      wi = OW(41808),
      ti = OW(41732);
    let Zi = 1;
    const xi = new WeakSet;

    function li() {
      return Zi
    }

    function Ai() {
      Zi = Zi >= 1073741823 ? 1 : Zi + 1
    }

    function bi(WW) {
      const iW = WW.metadata;
      if (!iW || !0 !== iW[QW.q]) return;
      const OW = iW[QW.v],
        mW = null === OW || void 0 === OW ? void 0 : OW._noaStamps;
      if (!OW || !mW) return;
      const EW = OW.entries.indexOf(WW);
      EW >= 0 && (mW[EW] = 0)
    }

    function ji(WW) {
      const iW = WW.hY;
      for (let OW = 0; OW < iW.length; OW++) {
        const WW = iW[OW].BA();
        if (WW && !WW.isFrozen) return !1
      }
      for (let OW = 0; OW < iW.length; OW++) {
        const WW = iW[OW].BA();
        WW && xi.add(WW)
      }
      return !0
    }
    let Ui = !1;
    const ki = new WeakSet;

    function si(WW, iW) {
      const OW = WW[iW];
      if ("function" !== typeof OW) throw new Error(`terrainDrawState: Babylon has no ${iW} to hook`);
      return OW
    }

    function Mi(WW, iW, OW, mW, EW) {
      const NW = OW.oZ.UZ,
        PW = new Map;
      let LW = 0;
      const cW = new Ei(OW, WW),
        wW = new Ni.d(NW, WW.VA());
      ! function(WW) {
        if (ki.has(WW) || (ki.add(WW), WW.onContextLostObservable.add(Ai), WW.DA.add(Ai)), Ui) return;
        Ui = !0;
        const iW = ci.b.prototype,
          OW = si(iW, "_markSubMeshesAsDirty");
        Object.assign(iW, {
          _markSubMeshesAsDirty(WW) {
            OW.call(this, WW), bi(this)
          }
        });
        const mW = si(ti.d.prototype, "_syncParentEnabledState");
        Object.assign(ti.d.prototype, {
          _syncParentEnabledState() {
            mW.call(this), bi(this)
          }
        });
        const EW = si(wi.d.prototype, "resetDrawCache");
        wi.d.prototype.resetDrawCache = function(WW, iW) {
          EW.call(this, WW, iW), bi(this.getMesh())
        };
        const NW = Li.d.prototype,
          PW = si(NW, "markDirty");
        NW.markDirty = function(WW) {
          PW.call(this, WW), xi.has(this) && Ai()
        };
        const LW = si(NW, "_markAllSubMeshesAsDirty");
        Object.assign(NW, {
          _markAllSubMeshesAsDirty(WW) {
            LW.call(this, WW), xi.has(this) && Ai()
          }
        })
      }(WW.VA());
      let tW = new Float64Array(384),
        ZW = new Int32Array(64),
        xW = new Uint8Array(64),
        lW = new Float64Array(64),
        AW = new Int32Array(192),
        bW = 0;
      const jW = [],
        UW = new Float64Array(24),
        kW = () => {
          const WW = jW.pop();
          return void 0 !== WW ? (ZW[WW] = 0, WW) : (bW === ZW.length && (tW = Ki(tW, new Float64Array(2 * tW.length)), ZW = Ki(ZW, new Int32Array(2 * ZW.length)), xW = Ki(xW, new Uint8Array(2 * xW.length)), lW = Ki(lW, new Float64Array(2 * lW.length)), AW = Ki(AW, new Int32Array(2 * AW.length))), bW++)
        },
        sW = WW => {
          const iW = 6 * WW._noaSlot,
            OW = WW.MEW[0],
            mW = WW.MEW[1];
          tW[iW] = OW.x, tW[iW + 1] = OW.y, tW[iW + 2] = OW.z, tW[iW + 3] = mW.x, tW[iW + 4] = mW.y, tW[iW + 5] = mW.z
        },
        MW = (WW, iW, OW) => {
          if (!OW) return cW.see(WW, -1), !1;
          const mW = mi(WW);
          return mW && cW.seeThrough(lW[iW]), cW.see(WW, iW), !mW
        };
      let KW = -1;
      return WW.getActiveMeshCandidates = () => {
        const OW = WW.frustumPlanes,
          mW = iW._selectionContent;
        mW.reset(), (OW => {
          const mW = WW.frustumPlanes;
          LW = LW + 1 | 0 || 1;
          const EW = iW.blocks,
            NW = cW.kZ(WW.activeCamera),
            PW = NW && !0;
          if (PW) {
            const iW = WW.VA().currentRenderPassId;
            iW !== KW && (KW = iW, Ai())
          }
          const wW = li(),
            lW = PW && !1;
          EW.length > 0 && function(WW, iW) {
            for (let OW = 0; OW < 6; OW++) {
              const mW = WW[OW],
                EW = mW.normal;
              iW[4 * OW] = EW.x, iW[4 * OW + 1] = EW.y, iW[4 * OW + 2] = EW.z, iW[4 * OW + 3] = mW.d
            }
          }(mW, UW);
          const bW = tW,
            jW = ZW,
            kW = xW;
          for (let WW = 0; WW < EW.length; WW++) {
            const iW = EW[WW];
            if (!Wi.b.IsInFrustum(iW.MEW, mW)) continue;
            const tW = iW.entries;
            {
              const WW = iW._noaSlots,
                mW = iW._noaStamps,
                EW = iW._noaTerrain;
              for (let iW = 0; iW < tW.length; iW++) {
                const ZW = WW[iW];
                if (jW[ZW] !== LW && (jW[ZW] = LW, kW[ZW] = Si(bW, 6 * ZW, UW) ? 1 : 0), 0 === kW[ZW]) continue;
                const xW = tW[iW];
                if (PW && mW[iW] === wW) lW && 1 === EW[iW] && mi(xW) && 0, cW.see(xW, 1 === EW[iW] ? ZW : -1);
                else if (PW) {
                  mW[iW] = wW;
                  const WW = !0 === xW.metadata[Pi.l];
                  EW[iW] = WW ? 1 : 0;
                  const OW = MW(xW, ZW, WW);
                  !WW || OW && ji(xW) || (mW[iW] = 0)
                } else NW ? MW(xW, ZW, !0 === xW.metadata[Pi.l]) : zW.g.prototype.push.call(OW, xW)
              }
              continue
            }
          }
          NW && cW.finish(OW, AW)
        })(mW), wW.apply(mW, WW.activeCamera);
        const NW = iW.sEW;
        for (let WW = 0; WW < NW.length; WW++) {
          const iW = NW[WW];
          iW.isEnabled() && zW.g.prototype.push.call(mW, iW)
        }
        return EW(mW, OW), mW
      }, {
        KEW: () => cW.culled,
        xEW: (WW, iW) => {
          const EW = Math.floor(iW[0] / NW),
            LW = Math.floor(iW[1] / NW),
            cW = Math.floor(iW[2] / NW),
            wW = `${EW}|${LW}|${cW}`;
          let tW = PW.get(wW);
          if (!tW) {
            const WW = [0, 0, 0];
            OW.fiW([EW * NW - 1, LW * NW - 1, cW * NW - 1], null, WW), tW = Object.assign(mW(WW, NW + 2), {
              SEW: wW,
              YEW: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: kW()
            }), sW(tW), lW[tW._noaSlot] = (0, FW.e)(EW, LW, cW), AW[3 * tW._noaSlot] = EW, AW[3 * tW._noaSlot + 1] = LW, AW[3 * tW._noaSlot + 2] = cW, PW.set(wW, tW)
          }
          tW.YEW++, WW.metadata[QW.y] = tW
        },
        pD: WW => {
          const iW = WW.metadata[QW.y];
          iW && (iW.YEW--, iW.YEW <= 0 && (PW.delete(iW.SEW), jW.push(iW._noaSlot)), WW.metadata[QW.y] = null)
        },
        kEW: (WW, iW) => {
          const OW = WW,
            mW = iW.metadata[QW.y];
          (OW._noaSlots ??= []).push(mW._noaSlot), (OW._noaStamps ??= []).push(0), (OW._noaTerrain ??= []).push(0), OW.entries.push(iW)
        },
        removeEntry: (WW, iW) => {
          const OW = WW,
            mW = OW.entries,
            EW = mW.indexOf(iW);
          if (EW < 0) return;
          const NW = OW._noaSlots,
            PW = OW._noaStamps,
            LW = OW._noaTerrain,
            cW = mW.length - 1;
          mW[EW] = mW[cW], NW[EW] = NW[cW], PW[EW] = PW[cW], LW[EW] = LW[cW], mW.pop(), NW.pop(), PW.pop(), LW.pop()
        },
        YWW: WW => {
          for (const iW of PW.values()) {
            iW.ZEW.yEW(WW), iW.tEW.yEW(WW);
            for (const OW of iW.MEW) OW.yEW(WW);
            sW(iW)
          }
        }
      }
    }

    function Ki(WW, iW) {
      return iW.set(WW), iW
    }

    function Si(WW, iW, OW) {
      const mW = WW[iW],
        EW = WW[iW + 1],
        NW = WW[iW + 2],
        PW = WW[iW + 3],
        LW = WW[iW + 4],
        cW = WW[iW + 5];
      for (let wW = 0; wW < 24; wW += 4) {
        const WW = OW[wW],
          iW = OW[wW + 1],
          tW = OW[wW + 2];
        if (!(WW * (WW >= 0 ? PW : mW) + iW * (iW >= 0 ? LW : EW) + tW * (tW >= 0 ? cW : NW) + OW[wW + 3] >= 0)) return !1
      }
      return !0
    }
    var Yi = OW(38948);
    class yi {
      constructor(WW, iW) {
        var OW = WW.rb;
        OW.MmW(new rW.b(OW));
        var mW = new IW.d(cW);
        OW.JEW = mW, mW.blocks = [];
        var EW, NW = {},
          LW = [];
        this.textPlanes = LW, this.KEW = () => EW.KEW(), this.YWW = WW => {
          tW(mW, WW), EW.YWW(WW)
        }, this.xEW = (iW, OW, PW) => {
          if (!iW.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!iW.metadata[QW.v] && !iW.metadata[QW.o]) {
            if (!OW) {
              var cW = mW.sEW;
              if (iW.metadata[QW.E] && !iW.parent) {
                cW = LW;
                var tW = iW.KV().HEW;
                iW.metadata[QW.F] = tW.center.length() + tW.radius, iW.pA = !0
              }
              return cW.push(iW), iW.metadata[QW.j] = cW, void(iW.metadata[QW.o] = !0)
            }
            var xW = Math.floor(PW[0] / wW),
              lW = Math.floor(PW[1] / wW),
              AW = Math.floor(PW[2] / wW),
              bW = xW + "|" + lW + "|" + AW,
              jW = NW[bW];
            if (!jW) {
              var UW = [xW * wW, lW * wW, AW * wW],
                kW = [0, 0, 0];
              WW.Hx.fiW(UW, null, kW), jW = ZW(kW, wW), mW.blocks.push(jW), NW[bW] = jW, jW.SEW = bW
            }
            EW.xEW(iW, PW), EW.kEW(jW, iW), jW.YEW = (jW.YEW || 0) + 1, iW.metadata[QW.v] = jW, iW.metadata[QW.q] = !0, iW.pA = !0
          }
        }, this.pD = WW => {
          if (WW.metadata) {
            WW.metadata[QW.o] && ((0, FW.i)(WW.metadata[QW.j], WW), WW.metadata[QW.o] = !1), WW.metadata[QW.j] === LW && (WW.pA = !1), WW.metadata[QW.j] = void 0, WW.metadata[QW.F] = void 0;
            var iW = WW.metadata[QW.v];
            iW && iW.entries && (WW.metadata[QW.q] && EW.removeEntry(iW, WW), iW.YEW--, iW.YEW <= 0 && (delete NW[iW.SEW], (0, FW.i)(mW.blocks, iW))), EW.pD(WW), WW.metadata[QW.v] = null, WW.metadata[QW.q] = !1
          }
        }, this.NWW = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (WW.metadata[QW.v]) {
            if (WW.metadata[QW.q] === iW) return;
            var OW = WW.metadata[QW.v];
            OW && OW.entries && (iW ? EW.kEW(OW, WW) : EW.removeEntry(OW, WW)), WW.metadata[QW.q] = iW
          } else {
            if (WW.metadata[QW.o] === iW) return;
            var NW = WW.metadata[QW.j] || mW.sEW;
            iW ? NW.push(WW) : (0, FW.i)(NW, WW), WW.metadata[QW.o] = iW
          }
        };
        var cW = () => {},
          wW = iW * WW.Hx.oZ.UZ,
          tW = (WW, iW) => {
            WW.blocks.forEach((WW => {
              WW.ZEW.yEW(iW), WW.tEW.yEW(iW), WW.MEW.forEach((WW => WW.yEW(iW))), WW.blocks && tW(WW, iW)
            }))
          },
          ZW = (WW, iW) => {
            var OW = new PW.fA(WW[0], WW[1], WW[2]),
              mW = new PW.fA(WW[0] + iW, WW[1] + iW, WW[2] + iW);
            return new aW.e(OW, mW, void 0, void 0, void 0, cW)
          };
        EW = Mi(OW, mW, WW.Hx, ZW, ((WW, iW) => {
          for (var OW = 0; OW < LW.length; OW++) {
            var mW = LW[OW];
            mW.isEnabled(!1) && ((0, Yi.e)(mW, iW) && zW.g.prototype.push.call(WW, mW))
          }
        }))
      }
    }

    function Ti(WW) {
      const {
        holderPosition: iW,
        holderRotation: OW,
        f4: mW,
        fov: EW,
        near: NW,
        far: PW
      } = WW.model.o4, LW = WW.gEW;
      LW.position.yWW(iW[0], iW[1], iW[2]), LW.rotation.yWW(OW[0], OW[1], OW[2]);
      const cW = WW.camera;
      cW.position.yWW(mW[0], mW[1], mW[2]), cW.fov = EW, cW.minZ = NW, cW.maxZ = PW
    }

    function Ji(WW) {
      const iW = WW.VA(),
        OW = iW,
        mW = OW._gl;
      if (!mW || OW.bb < 2 || iW.nmW || mW.getParameter(mW.DEPTH_BITS) < 24) return !1;
      const EW = WW._renderingManager,
        NW = EW.getRenderingGroup(-1),
        PW = EW.getRenderingGroup(0),
        LW = XW.c.prototype.render;
      return NW.render = function(WW, iW, OW, mW, EW, NW, cW, wW, tW) {
        (WW || PW._empty) && LW.call(this, WW, iW, OW, mW, EW, NW, cW, wW, tW)
      }, PW.render = function(WW, OW, EW, PW) {
        let cW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          wW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          xW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          lW = arguments.length > 8 ? arguments[8] : void 0;
        WW ? LW.call(this, WW, OW, EW, PW, cW, wW, ZW, xW, lW) : (iW.setAlphaMode(tW.e.ALPHA_DISABLE), LW.call(this, null, !1, !1, PW, cW, wW, ZW, !1), NW._empty || (mW.depthRange(1, 1), LW.call(NW, null, OW, EW, PW, cW, wW, ZW, xW, lW), mW.depthRange(0, 1)), LW.call(this, null, OW, EW, PW, !1, !1, !1, xW, lW))
      }, !0
    }

    function Hi(WW, iW) {
      return [iW, GW.e].map(((iW, OW) => {
        const mW = new EW.d("light", PW.fA.FromArray(iW), WW);
        return mW.diffuse = NW.Color3.FromArray([1, 1, 1]), mW.specular = NW.Color3.FromArray([1, 1, 1]), mW.intensity = GW.b[OW], mW
      }))
    }
    class ni extends cW.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(WW) {
        var iW;
        this.heldTexture = WW, this.particleTexture = null !== (iW = null === WW || void 0 === WW ? void 0 : WW.mirror) && void 0 !== iW ? iW : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        WW && (this.particleTexture = null, (0, wW.D)(this.heldTexture), this.heldTexture = null), super.dispose(WW, iW, OW)
      }
    }

    function ui(WW, iW, OW, mW) {
      return iW && !iW.failed ? iW.wV(OW, mW) : new ni(OW, mW, WW)
    }
    const oi = new WeakMap;

    function di(WW, iW, OW) {
      var mW;
      let EW = null !== (mW = oi.get(WW)) && void 0 !== mW ? mW : null;
      return !EW && WW.VA().bb >= 2 && (EW = new eW(WW, (iW => {
        console.error(`Particle programs failed in scene ${WW.uid}: ${iW}`)
      })), oi.set(WW, EW)), ui(WW, EW, iW, OW)
    }
    const ei = mW.b.Zero();
    const vi = {
      rOW: function(WW, iW) {
        return new gW(WW, iW.ROW, {
          preserveDrawingBuffer: iW.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      pEW: function(WW, iW) {
        ! function(WW, iW, OW) {
          const mW = new qW.c(WW.engine);
          WW.rb = mW, mW.detachControl(), mW.autoClear = !1, BW.d.MIN_RENDERINGGROUPS = -1;
          for (let NW = BW.d.MIN_RENDERINGGROUPS; NW <= 1; NW++) mW.setRenderingOrder(NW, XW.c.PainterSortCompare, XW.c.PainterSortCompare, XW.c.PainterSortCompare);
          mW.setRenderingAutoClearDepthStencil(0, !1), CW.e.Enabled = !1, WW.dEW = new yi(WW, Math.round(iW.eEW)), WW.gEW = new fW.e("camHolder", mW), WW.camera = new pW.b("camera", new PW.fA(0, 0, 0), mW), WW.camera.parent = WW.gEW, Ti(WW), (0, GW.g)(WW, ((WW, iW, OW) => (0, RW.e)(iW, OW, WW.rb))), mW.clearColor = NW.c.FromArray(iW.clearColor), mW.ambientColor = NW.Color3.FromArray(iW.ambientColor);
          const EW = OW(mW, iW.VEW);
          mW.onNewLightAddedObservable.add((WW => {
            EW.some((iW => iW === WW)) || console.error(`Light "${WW.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), mW.skipPointerMovePicking = !0
        }(WW, iW, Hi), Ji(WW.rb)
      },
      vEW: Ti,
      setBabylonFog: function(WW, iW, OW, mW) {
        const EW = WW.rb;
        EW.fogMode = 3, EW.fogStart = iW, EW.fogEnd = OW, EW.fogColor.set(mW[0], mW[1], mW[2])
      },
      CEW: function(WW, iW, OW) {
        return WW.engine.bb >= 2 && !WW.XEW && (WW.XEW = new eW(WW.rb, WW.BEW)), ui(WW.rb, WW.XEW, iW, OW)
      },
      REW: function(WW, iW) {
        WW.rb.vY.forEach((OW => {
          if (OW instanceof oW) return void OW.YWW(iW, WW.Hx.Wl);
          const mW = OW;
          if (mW.emitter.getConnectedParticleSystems)
            for (const WW of mW._particles) WW.position.set(WW.position.x - iW[0], WW.position.y - iW[1], WW.position.z - iW[2]);
          else {
            if (!mW.worldOffset) throw new Error("Particle system has no world offset");
            mW.worldOffset.x = -WW.Hx.Wl[0], mW.worldOffset.y = -WW.Hx.Wl[1], mW.worldOffset.z = -WW.Hx.Wl[2]
          }
        }))
      },
      linesFromArrays: function(WW, iW, OW) {
        const mW = new LW.b(iW, WW.rb, null, void 0, void 0, !1);
        return (0, RW.d)(iW, OW, WW.rb, mW), mW
      },
      zb: bi,
      qEW: function(WW, iW) {
        return ei.origin.HJ(iW.origin), ei.direction.HJ(iW.direction), ei.length = iW.length, ei.epsilon = iW.epsilon, ei.qEW(WW, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42603: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => XW,
      d: () => sW,
      g: () => rW
    });
    var mW = OW(41782),
      EW = OW(42612),
      NW = OW(42652),
      PW = OW(42616),
      LW = OW(38995),
      cW = OW(39004),
      wW = OW(39009),
      tW = OW(39011),
      ZW = OW(38464),
      xW = OW(38427),
      lW = OW(38431),
      AW = OW(42623),
      bW = OW(38405),
      jW = OW(38419),
      UW = OW(38388);

    function kW(WW, iW) {
      return Object.assign((function(WW, OW, mW, EW) {
        return iW(this.featureState, WW, OW, mW, EW)
      }), {
        cZ: WW
      })
    }

    function sW(WW) {
      const iW = class extends AW.e {
          constructor(iW, OW) {
            const mW = (0, jW.bb)(iW),
              EW = mW && (0, jW.v)(mW, WW.name);
            for (var NW = arguments.length, PW = new Array(NW > 2 ? NW - 2 : 0), LW = 2; LW < NW; LW++) PW[LW - 2] = arguments[LW];
            super(iW, WW.name, WW.priority, EW ? EW.defines : WW.defines(...PW), !1), this.featureState = void 0, this.featureState = OW, this._pluginManager._addPlugin(this), this._enable(!0), (0, jW.x)(this._material, WW, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return WW.className
          }
          isCompatible(WW) {
            return WW === UW.e.GLSL || WW === UW.e.WGSL
          }
        },
        OW = (0, bW.i)(WW);
      for (const [mW, EW] of Object.entries(bW.d)) {
        const NW = WW[mW];
        if (NW) {
          const WW = OW[mW];
          Object.defineProperty(iW.prototype, EW, {
            value: kW(NW, WW),
            writable: !0,
            configurable: !0
          })
        }
      }
      return iW
    }
    class MW extends(sW(LW.e)) {}
    var KW = OW(41359),
      SW = OW(42630),
      YW = OW(42633);

    function yW(WW, iW, OW) {
      return (0, YW.i)(OW, iW.urls, (() => async function(WW, iW, OW) {
        const {
          width: mW
        } = WW[0].getSize(), EW = WW.map(((WW, OW) => {
          var EW;
          const NW = Math.round(WW.getSize().height / mW),
            PW = null === iW || void 0 === iW ? void 0 : iW[OW];
          return {
            pixels: PW && PW.byteLength === mW * mW * NW * 4 ? PW : null !== (EW = TW.get(WW.getInternalTexture())) && void 0 !== EW ? EW : WW._readPixelsSync(),
            layers: NW
          }
        })), NW = Math.min(OW.VA().getCaps().texture2DArrayMaxLayerCount, 256), LW = (0, YW.e)(EW, mW, NW).map((WW => {
          let {
            pixels: iW,
            layers: EW
          } = WW;
          return {
            atlas: new SW.b(iW, mW, mW, EW, KW.c.TEXTUREFORMAT_RGBA, OW, !0, !1, PW.d.NEAREST_NEAREST_MIPLINEAR),
            layers: EW
          }
        }));
        return WW.forEach(((WW, iW) => {
          const mW = WW.getInternalTexture();
          TW.has(mW) || (! function(WW, iW) {
            const OW = iW.createRawTexture(new Uint8Array(4), 1, 1, KW.c.TEXTUREFORMAT_RGBA, !1, !1, PW.d.NEAREST_SAMPLINGMODE);
            WW._hardwareTexture.release(), iW.unbindAllTextures(), OW._swapAndDie(WW, !1)
          }(mW, OW.VA()), TW.set(mW, EW[iW].pixels))
        })), LW
      }(WW, iW.pixels, OW)))
    }
    const TW = new WeakMap;
    var JW = OW(39017);
    class hW extends(sW(cW.e)) {
      constructor(WW, iW) {
        super(WW, iW), this.loaded = new Set, this.mirrors = void 0, this.mirrors = iW.textures.map((WW => WW.mirror)), iW.useWebGL2 && !iW.imagesPerAtlas.length && iW.textureAtlases.splice(0, iW.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((WW, iW) => {
          WW.onLoadObservable.add((WW => {
            this.setTextureArrayData(WW, iW).catch((WW => {
              console.error(`Failed to build the texture arrays, at atlas ${iW}`, WW)
            }))
          }))
        })), (0, JW.h)(iW, WW.shaderLanguage)
      }
      async setTextureArrayData(WW, iW) {
        const OW = this.featureState,
          {
            width: mW,
            height: EW
          } = WW.getSize(),
          NW = this._material.shaderLanguage;
        if (!OW.useWebGL2) return void(0, JW.f)(this._material, OW, iW, mW, Math.round(EW / mW), NW);
        if (this.loaded.add(iW), this.loaded.size < this.mirrors.length) return;
        const PW = await yW(this.mirrors, OW.sources, this._material.bD());
        (0, JW.d)(this._material, OW, PW, mW, NW)
      }
    }
    var HW = OW(42635),
      nW = OW(41818),
      uW = OW(38235),
      oW = OW(42641),
      dW = OW(41927),
      eW = OW(41808),
      vW = OW(42588),
      gW = OW(38669),
      DW = OW(42650);
    class VW extends HW.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const pW = {
      Mesh: oW.e,
      TransformNode: vW.e,
      OZ: HW.e,
      VertexBuffer: HW.g,
      BoundingInfo: nW.b,
      fA: uW.fA,
      ArenaBuffer: VW,
      SubMesh: eW.d,
      VertexData: dW.c,
      MirroredGeometry: DW.c,
      meshFromArrays: DW.d,
      plainMeshFromArrays: DW.e
    };
    (0, gW.f)(pW);
    var fW = OW(38511);
    class CW extends(sW(tW.l)) {
      constructor(WW, iW) {
        if (super(WW, iW), WW instanceof mW.StandardMaterial && iW.dirLightCount > 0) {
          const iW = WW,
            OW = iW._blockDirtyMechanism;
          iW._blockDirtyMechanism = !0, WW.disableLighting = !0, iW._blockDirtyMechanism = OW;
          const mW = (0, jW.bb)(WW);
          mW && (mW.disableLighting = !0, (0, jW._)(mW))
        }(0, fW.i)(WW)
      }
      dispose(WW) {
        (0, fW.k)(this._material), super.dispose(WW)
      }
    }

    function XW(WW, iW) {
      if (!(iW instanceof mW.StandardMaterial) || iW.specularTexture) return;
      const {
        r: OW,
        g: EW,
        b: NW
      } = iW.specularColor;
      0 === OW && 0 === EW && 0 === NW && (WW.SPECULARTERM = !1)
    }(0, tW.h)({
      disableUnusedSpecularTerm: XW
    });
    var BW = OW(38437),
      qW = OW(38683);
    const RW = new RegExp(`^#define ${wW.c}\\s*$`, "m");
    class GW extends(sW(wW.i)) {
      constructor(WW, iW) {
        super(WW, iW), this.JA = !1, iW.ditherOnlyWhileFading && (qW.h.add(WW), this.prewarmDitherTwins(WW))
      }
      prewarmDitherTwins(WW) {
        const iW = new WeakSet;
        WW.onEffectCreatedObservable.add((OW => {
          let {
            effect: mW,
            subMesh: EW
          } = OW;
          if (this.featureState.prewarmingDither || iW.has(mW)) return;
          iW.add(mW);
          const NW = null === EW || void 0 === EW ? void 0 : EW.getMesh();
          NW && !RW.test(mW.defines) && WW.bD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(NW) || iW.delete(mW)
          }))
        }))
      }
      prewarmDither(WW) {
        if (this.JA || WW.Ay()) return !1;
        const iW = new eW.d(0, 0, 0, 0, 0, WW, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(WW, iW)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== iW.effect
      }
      dispose(WW) {
        this.JA = !0, super.dispose(WW)
      }
    }
    class IW extends(sW(ZW.d)) {}
    const aW = new Map;

    function rW(WW, iW) {
      aW.set(WW, iW)
    }
    rW(LW.e, MW), rW(cW.e, hW), rW(wW.i, GW), rW(tW.l, CW), rW(ZW.d, IW), (0, xW.c)({
      create: (WW, iW) => {
        const OW = new mW.StandardMaterial(WW.name, iW);
        return (0, BW.w)(WW, OW), OW.detailMap._pluginDefineNames
      },
      write: (WW, iW, OW) => {
        (0, BW.Z)(WW.mirror, iW, OW)
      },
      addFeature: (WW, iW, OW) => {
        const mW = aW.get(iW.feature);
        if (!mW) throw new Error(`${iW.feature.name} has no plugin class (registerPluginClass)`);
        new mW(WW.mirror, iW.state, ...OW)
      },
      texture: (WW, iW, OW) => {
        let {
          url: mW,
          noMipmap: EW,
          invertY: NW,
          samplingMode: LW,
          data: cW,
          sets: wW
        } = OW;
        if (!cW) {
          const OW = new PW.d(mW, iW, EW, NW, LW);
          return Object.assign(OW, wW), void(0, lW.O)(WW, OW)
        }
        const tW = {},
          ZW = new Promise(((WW, iW) => {
            tW.onLoad = WW, tW.onError = (WW, OW) => {
              iW(new Error(`${cW.context}: ${(null===OW||void 0===OW?void 0:OW.message)||WW||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: xW,
            bytes: AW,
            label: bW
          } = cW,
          jW = {
            noMipmap: EW,
            invertY: !1,
            samplingMode: LW,
            ...tW,
            mimeType: xW,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          UW = new PW.d(null, iW, jW);
        BW.z.set(UW, ZW), Object.assign(UW, wW), UW.updateURL(mW, AW);
        const kW = UW.getInternalTexture();
        kW && (kW.label = bW), WW.uvSet = UW.coordinatesIndex, WW.matrix.set((0, BW.U)(UW)), (0, lW.O)(WW, UW)
      },
      cube: (WW, iW, OW) => {
        let {
          rootUrl: mW,
          files: NW,
          noMipmap: LW,
          luminance: cW
        } = OW;
        const {
          samplingMode: wW
        } = WW.sampler, tW = wW === (0, lW.A)(LW) ? null : () => {
          (0, BW.R)(ZW, wW)
        }, ZW = new EW.b(mW, iW, null, LW, NW, tW, null, (0, lW.z)(cW));
        ZW.coordinatesMode = PW.d.SKYBOX_MODE, (0, lW.O)(WW, ZW)
      },
      canvas: (WW, iW, OW) => {
        let {
          width: mW,
          height: EW,
          mipmaps: LW,
          samplingMode: cW,
          hasAlpha: wW = !1,
          wrap: tW = PW.d.CLAMP_ADDRESSMODE
        } = OW;
        const ZW = new NW.d(iW, {
          width: mW,
          height: EW
        }, WW, LW, cW);
        ZW.hasAlpha = wW, ZW.wrapU = tW, ZW.wrapV = tW;
        const xW = (0, BW.H)(ZW);
        return (0, BW.K)(xW, ZW), xW
      }
    })
  },
  42650: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      d: () => ZW,
      e: () => xW
    });
    var mW = OW(42635),
      EW = OW(41582),
      NW = OW(41818),
      PW = OW(41929),
      LW = OW(42641),
      cW = OW(41927),
      wW = OW(38562);
    class tW extends PW.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (WW, iW) => {
          this.releaseUnlessInstanced(iW)
        }, this.onLinked = null
      }
      link(WW) {
        var iW;
        (0, wW.k)(WW), this.model = WW, null === (iW = this.onLinked) || void 0 === iW || iW.call(this, WW)
      }
      relink() {
        this.release();
        const WW = [];
        for (const EW of Object.values(this._vertexBuffers))
          if (!EW.getIsInstanced()) {
            const {
              byteOffset: iW,
              byteStride: OW,
              type: mW,
              normalized: NW
            } = EW;
            WW.push({
              kind: EW.getKind(),
              data: EW.getData(),
              offset: iW,
              stride: OW,
              components: EW.getSize(),
              glType: mW,
              isNormalized: NW
            })
          } const iW = this._indices.length ? this._indices : null,
          {
            minimum: OW,
            maximum: mW
          } = this.extend;
        this.link(new wW.d(WW, iW, this.getTotalVertices(), new Float64Array(OW.wEW()), new Float64Array(mW.wEW())))
      }
      copy(WW) {
        if (!this.model) return super.copy(WW);
        const iW = new tW(WW, this.bD()),
          OW = this.IEW(void 0, !0);
        OW && iW.setIndices(OW);
        let PW = !1;
        for (const NW in this._vertexBuffers) {
          const WW = this._vertexBuffers[NW],
            OW = WW.getData();
          if (!OW) continue;
          const LW = WW.getSize(),
            {
              type: cW,
              byteOffset: wW,
              byteStride: tW,
              normalized: ZW
            } = WW;
          PW ||= WW.isUpdatable();
          const xW = WW.getIsInstanced() ? (OW instanceof Array ? 4 * OW.length : OW.byteLength) / tW : this.getTotalVertices(),
            lW = (0, EW.l)(OW, LW, cW, wW, tW, xW, !0),
            AW = {
              updatable: WW.isUpdatable(),
              stride: LW,
              type: cW,
              normalized: ZW,
              takeBufferOwnership: !0,
              instanced: WW.getIsInstanced()
            };
          iW.setVerticesBuffer(new mW.g(this.VA(), lW, NW, AW), xW)
        }
        return iW._updatable = PW, iW._boundingInfo = new NW.b(this.extend.minimum, this.extend.maximum), iW.relink(), iW
      }
      static mergeMeshes(WW, iW, OW, mW, EW, NW) {
        const cW = WW[0].bD(),
          wW = new LW.e(WW[0].name + "_merged", cW),
          ZW = new tW(PW.b.RandomId(), cW, void 0, !1, wW);
        try {
          if (!LW.e.MergeMeshes(WW, iW, OW, wW, EW, NW)) return wW.dispose(), null
        } catch (xW) {
          throw wW.dispose(), xW
        }
        return ZW.relink(), wW
      }
      removeVerticesData(WW) {
        this.releaseUnlessInstanced(WW), super.removeVerticesData(WW)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(WW) {
        var iW;
        WW && null !== (iW = this.getVertexBuffer(WW)) && void 0 !== iW && iW.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, wW.q)(this.model), this.model = null)
      }
    }

    function ZW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LW.e(WW, OW);
      const EW = (0, wW.i)(iW),
        {
          positions: NW,
          normals: ZW,
          uvs: xW,
          indices: lW,
          named: AW = {}
        } = iW,
        bW = new cW.c;
      bW.positions = NW, bW.normals = null !== ZW && void 0 !== ZW ? ZW : null, bW.uvs = null !== xW && void 0 !== xW ? xW : null, bW.indices = lW;
      const jW = new tW(PW.b.RandomId(), OW, bW, !1, mW);
      for (const {
          kind: PW,
          components: LW
        }
        of EW.vertexAttributes) PW in AW && mW.setVerticesData(PW, AW[PW], !1, LW);
      return jW.link(EW), mW
    }

    function xW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const EW = new LW.e(WW, OW),
        {
          positions: NW,
          normals: PW,
          uvs: wW,
          indices: tW
        } = iW;
      return Object.assign(new cW.c, {
        positions: NW,
        normals: PW,
        uvs: wW,
        indices: tW
      }).applyToMesh(EW, mW), EW
    }
  },
  39931: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => cW,
      c: () => mW,
      g: () => PW,
      h: () => NW,
      l: () => EW,
      p: () => LW,
      t: () => wW,
      w: () => tW
    });
    const mW = 16,
      EW = 256,
      NW = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      PW = 16,
      LW = 256,
      cW = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + mW,
        color2: 12 + 5 * mW,
        Sj: 12 + 9 * mW,
        remap: 12 + 13 * mW
      },
      wW = 12 + 17 * mW,
      tW = [cW.colorCount, cW.velocityCount, cW.remapCount, cW.ramp]
  },
  39925: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => jW,
      g: () => sW
    });
    var mW = OW(38285),
      EW = OW(38235),
      NW = OW(38431),
      PW = OW(39931);
    class LW {
      constructor(WW) {
        this.aZ = WW, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const iW = Math.max(1, WW);
        this.records = new Float32Array(iW * PW.g), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(iW).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(WW) {
        const iW = this.aZ;
        for (let OW = 0; OW < iW; OW++) {
          const OW = this.cursor;
          if (this.cursor = OW + 1 === iW ? 0 : OW + 1, this.deaths[OW] <= WW) return OW
        }
        return -1
      }
      written(WW, iW) {
        this.deaths[WW] = iW, WW >= this.highWater && (this.highWater = WW + 1), this.uploadFrom < 0 ? (this.uploadFrom = WW, this.uploadTo = WW + 1) : WW >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, WW + 1) : this.wrapTo = Math.max(this.wrapTo, WW + 1)
      }
      shiftTimes(WW) {
        const iW = this.records,
          OW = this.highWater * PW.g;
        for (let mW = PW.h.time; mW < OW; mW += PW.g) iW[mW] -= WW;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(WW) {
        this.uploadFrom >= 0 && (WW(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && WW(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(WW) {
        let iW = 0;
        for (let OW = 0; OW < this.highWater; OW++) this.deaths[OW] > WW && iW++;
        return iW
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var cW = OW(38369),
      wW = OW(39938),
      tW = OW(39940),
      ZW = OW(39948);
    class xW {
      constructor() {
        this.particleEmitterType = new tW.d, this.texture = null, this.blendMode = ZW.d, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = EW.fA.Zero(), this.worldOffset = new EW.fA(0, 0, 0), this.color1 = new cW.c(1, 1, 1, 1), this.color2 = new cW.c(1, 1, 1, 1), this.colorDead = new cW.c(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var WW;
        return null !== (WW = lW(this).direction1) && void 0 !== WW ? WW : EW.fA.Zero()
      }
      set direction1(WW) {
        const iW = lW(this);
        iW.direction1 && (iW.direction1 = WW)
      }
      get direction2() {
        var WW;
        return null !== (WW = lW(this).direction2) && void 0 !== WW ? WW : EW.fA.Zero()
      }
      set direction2(WW) {
        const iW = lW(this);
        iW.direction2 && (iW.direction2 = WW)
      }
      get minEmitBox() {
        var WW;
        return null !== (WW = lW(this).minEmitBox) && void 0 !== WW ? WW : EW.fA.Zero()
      }
      set minEmitBox(WW) {
        const iW = lW(this);
        iW.minEmitBox && (iW.minEmitBox = WW)
      }
      get maxEmitBox() {
        var WW;
        return null !== (WW = lW(this).maxEmitBox) && void 0 !== WW ? WW : EW.fA.Zero()
      }
      set maxEmitBox(WW) {
        const iW = lW(this);
        iW.maxEmitBox && (iW.maxEmitBox = WW)
      }
      createBoxEmitter(WW, iW, OW, mW) {
        const EW = new tW.d;
        return this.particleEmitterType = EW, EW.direction1 = WW, EW.direction2 = iW, EW.minEmitBox = OW, EW.maxEmitBox = mW, EW
      }
      addColorGradient(WW, iW, OW) {
        return this.colorGradients ??= [], this.colorGradients.push(new wW.d(WW, iW, OW)), this.colorGradients.sort(AW), this
      }
      removeColorGradient(WW) {
        return bW(this.colorGradients, WW), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(WW, iW, OW) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new wW.i(WW, iW, OW)), this.velocityGradients.sort(AW), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(WW, iW, OW) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new wW.i(WW, iW, OW)), this.colorRemapGradients.sort(AW), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(WW, iW) {
        return this.rampGradients ??= [], this.rampGradients.push(new wW.g(WW, iW)), this.rampGradients.sort(AW), this
      }
      removeRampGradient(WW) {
        return bW(this.rampGradients, WW), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function lW(WW) {
      return WW.particleEmitterType
    }

    function AW(WW, iW) {
      return WW.gradient < iW.gradient ? -1 : WW.gradient > iW.gradient ? 1 : 0
    }

    function bW(WW, iW) {
      const OW = WW ? WW.findIndex((WW => WW.gradient === iW)) : -1;
      OW >= 0 && WW.splice(OW, 1)
    }
    class jW extends xW {
      constructor(WW, iW, OW) {
        super(), this.name = WW, this.host = OW, this.onDispose = UW, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = EW.fA.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.JA = !1, this.emitterMatrix = new EW.Matrix, this.inverseEmitterMatrix = new EW.Matrix, this.spawned = {
          position: new EW.fA,
          direction: new EW.fA
        }, this.ring = new LW(iW)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(WW) {
        var iW;
        null === (iW = this.emitterDisposed) || void 0 === iW || iW.remove(), this.emitterDisposed = null, this.emitterValue = WW, WW && MW(WW) && (this.emitterDisposed = WW.jD.add((() => {
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
        return !this.JA && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var WW;
        let iW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.JA || (this.JA = !0, null === (WW = this.emitterDisposed) || void 0 === WW || WW.remove(), this.emitterDisposed = null, iW && ((0, NW.D)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(WW) {
        const iW = this.emitter;
        return !!iW && !(MW(iW) && !iW.isEnabled()) && this.animate(WW)
      }
      animate(WW) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const iW = this.updateSpeed * WW;
        let OW;
        return this.manualEmitCount > -1 ? (OW = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (OW = this.emitRate * iW | 0, this.newPartsExcess += this.emitRate * iW - OW), this.newPartsExcess > 1 && (OW += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (OW = 0), this.alive = this.liveUntil > this.time, this.time += iW, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), OW > 0 && this.spawn(OW), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.JA && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var WW;
        return this.started = !1, null === (WW = this.onAnimationEnd) || void 0 === WW || WW.call(this), !!this.JA || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(WW, iW) {
        WW[iW] = this.anchor[0] + this.shift[0] + this.worldOffset.x, WW[iW + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, WW[iW + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      YWW(WW, iW) {
        this.emitterValue && MW(this.emitterValue) ? (this.shift[0] -= WW[0], this.shift[1] -= WW[1], this.shift[2] -= WW[2]) : this.worldOffset.set(-iW[0], -iW[1], -iW[2])
      }
      spawn(WW) {
        var iW, OW;
        const NW = this.emitterValue,
          LW = MW(NW) ? NW.getWorldMatrix() : EW.Matrix.TranslationToRef(NW.x, NW.y, NW.z, this.emitterMatrix);
        LW.invertToRef(this.inverseEmitterMatrix);
        const {
          position: cW,
          direction: wW
        } = this.spawned, tW = this.spawned, ZW = this.ring, xW = this.liveUntil <= this.time;
        xW && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, ZW.restart());
        const {
          records: lW,
          recordBits: AW
        } = ZW, bW = PW.h, jW = null === (iW = this.getColorGradients()) || void 0 === iW ? void 0 : iW[0], UW = jW ? jW.color1 : this.color1, kW = jW ? null !== (OW = jW.color2) && void 0 !== OW ? OW : jW.color1 : this.color2;
        for (let EW = 0; EW < WW; EW++) {
          const WW = ZW.freeSlot(this.time);
          if (WW < 0) break;
          const iW = (0, mW.RandomRange)(this.minLifeTime, this.maxLifeTime),
            OW = (0, mW.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(LW, cW, tW, !1), this.particleEmitterType.startDirectionFunction(LW, wW, tW, !1, this.inverseEmitterMatrix), 0 === OW ? wW.set(0, 0, 0) : wW.scaleInPlace(OW);
          const NW = (0, mW.RandomRange)(this.minSize, this.maxSize);
          xW && 0 === EW && (this.anchor[0] = cW.x, this.anchor[1] = cW.y, this.anchor[2] = cW.z);
          const jW = WW * PW.g;
          lW[jW + bW.position] = cW.x - this.anchor[0] - this.shift[0], lW[jW + bW.position + 1] = cW.y - this.anchor[1] - this.shift[1], lW[jW + bW.position + 2] = cW.z - this.anchor[2] - this.shift[2], lW[jW + bW.time] = this.time - this.epoch, lW[jW + bW.direction] = wW.x, lW[jW + bW.direction + 1] = wW.y, lW[jW + bW.direction + 2] = wW.z, lW[jW + bW.lifeTime] = iW, lW[jW + bW.size] = NW, AW[jW + bW.seed] = 4294967296 * Math.random() >>> 0;
          const sW = Math.random();
          lW[jW + bW.colour] = UW.r + (kW.r - UW.r) * sW, lW[jW + bW.colour + 1] = UW.g + (kW.g - UW.g) * sW, lW[jW + bW.colour + 2] = UW.b + (kW.b - UW.b) * sW, lW[jW + bW.colour + 3] = UW.a + (kW.a - UW.a) * sW;
          const MW = this.time + iW;
          MW > this.liveUntil && (this.liveUntil = MW), ZW.written(WW, MW)
        }
      }
    }

    function UW() {}
    const kW = 5;

    function sW(WW, iW) {
      const OW = [];
      let mW = 0;
      for (const EW of WW) EW.isReady() || (mW++, OW.length < kW && OW.push(`${iW} particle system ${EW.name}`));
      return mW > OW.length && OW.push(`${mW-OW.length} more ${iW} particle systems`), OW
    }

    function MW(WW) {
      return void 0 !== WW.position
    }
  },
  53776: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => jW,
      g: () => LW,
      h: () => PW,
      i: () => wW
    });
    var mW = OW(38369),
      EW = OW(39938),
      NW = OW(39931);

    function PW(WW, iW, OW, mW) {
      const EW = NW.A;
      iW.fill(0), WW.gravity.toArray(iW, EW.gravity), WW.colorDead.toArray(iW, EW.colorDead), OW[EW.ramp] = WW.useRampGradients ? 1 : 0;
      const PW = WW.getColorGradients(),
        LW = xW(WW, PW, "colour", mW);
      OW[EW.colorCount] = LW;
      for (let NW = 0; NW < LW; NW++) {
        var cW;
        const WW = PW[lW(PW, NW)];
        iW[EW.colorPositions + NW] = WW.gradient, WW.color1.toArray(iW, EW.color1 + 4 * NW), (null !== (cW = WW.color2) && void 0 !== cW ? cW : WW.color1).toArray(iW, EW.color2 + 4 * NW)
      }
      const wW = WW.getVelocityGradients(),
        tW = xW(WW, wW, "Sj", mW);
      OW[EW.velocityCount] = tW;
      for (let NW = 0; NW < tW; NW++) kW(iW, EW.Sj + 4 * NW, wW[lW(wW, NW)]);
      const ZW = WW.useRampGradients ? WW.getColorRemapGradients() : null,
        AW = xW(WW, ZW, "colour remap", mW);
      OW[EW.remapCount] = AW;
      for (let NW = 0; NW < AW; NW++) kW(iW, EW.remap + 4 * NW, ZW[lW(ZW, NW)])
    }

    function LW() {
      return {
        key: [],
        texels: new Uint8Array(4 * NW.l)
      }
    }
    const cW = [];

    function wW(WW, iW) {
      return tW(WW, cW), !UW(cW, iW.key) && (iW.key.length = 0, iW.key.push(...cW), iW.key.length > 0 && function(WW, iW) {
        for (let OW = 0; OW < NW.l; OW++) EW.m.GetCurrentGradient(OW / NW.l, WW, ((WW, iW, OW) => {
          mW.Color3.LerpToRef(WW.color, iW.color, OW, ZW)
        })), iW[4 * OW] = 255 * ZW.r, iW[4 * OW + 1] = 255 * ZW.g, iW[4 * OW + 2] = 255 * ZW.b, iW[4 * OW + 3] = 255
      }(WW.getRampGradients(), iW.texels), !0)
    }

    function tW(WW, iW) {
      iW.length = 0;
      const OW = WW.useRampGradients ? WW.getRampGradients() : null;
      if (null !== OW && void 0 !== OW && OW.length) {
        iW.push(OW.length);
        for (const WW of OW) iW.push(WW.gradient, WW.color.r, WW.color.g, WW.color.b)
      }
    }
    const ZW = new mW.Color3;

    function xW(WW, iW, OW, mW) {
      return iW ? iW.length > NW.c ? (mW(`particleStops:${OW}`, `GPU particles use the first 2 and last ${NW.c-2} of more than ${NW.c} ${OW} gradient stops (${WW.name})`), NW.c) : iW.length : 0
    }

    function lW(WW, iW) {
      return iW < 2 || WW.length <= NW.c ? iW : WW.length - NW.c + iW
    }
    const AW = new Float32Array(NW.t),
      bW = new Uint32Array(AW.buffer);

    function jW(WW, iW, OW) {
      return PW(WW, AW, bW, OW), iW && UW(bW, iW) ? null : bW.slice()
    }

    function UW(WW, iW) {
      if (WW.length !== iW.length) return !1;
      for (let OW = 0; OW < WW.length; OW++)
        if (WW[OW] !== iW[OW]) return !1;
      return !0
    }

    function kW(WW, iW, OW) {
      var mW;
      WW[iW] = OW.gradient, WW[iW + 1] = OW.factor1, WW[iW + 2] = null !== (mW = OW.factor2) && void 0 !== mW ? mW : OW.factor1
    }
  },
  42633: (WW, iW, OW) => {
    function mW(WW, iW, OW) {
      const mW = iW * iW * 4,
        EW = WW[0].layers,
        NW = EW * (WW.length - 1) + WW[WW.length - 1].layers,
        PW = new Uint8Array(NW * mW);
      WW.forEach(((iW, OW) => {
        const NW = OW + 1 < WW.length ? Math.min(iW.layers, EW) : iW.layers;
        PW.set(new Uint8Array(iW.pixels.buffer, iW.pixels.byteOffset, NW * mW), OW * EW * mW)
      }));
      const LW = Math.max(1, Math.min(NW, OW || NW));
      if (LW === NW) return [{
        pixels: PW,
        layers: NW
      }];
      const cW = [];
      for (let wW = 0; wW < NW; wW += LW) {
        const WW = Math.min(NW, wW + LW);
        cW.push({
          pixels: PW.slice(wW * mW, WW * mW),
          layers: WW - wW
        })
      }
      return cW
    }
    OW.d(iW, {
      e: () => mW,
      i: () => NW
    });
    const EW = new WeakMap;

    function NW(WW, iW, OW) {
      var mW, NW;
      const PW = null !== (mW = EW.get(WW)) && void 0 !== mW ? mW : new Map;
      EW.set(WW, PW);
      const LW = null !== (NW = PW.get(iW[0])) && void 0 !== NW ? NW : [];
      PW.set(iW[0], LW);
      const cW = LW.find((WW => WW.urls.length === iW.length && WW.urls.every(((WW, OW) => WW === iW[OW]))));
      if (cW) return cW.built;
      const wW = {
        urls: [...iW],
        built: OW()
      };
      return LW.push(wW), wW.built.catch((() => {
        LW.splice(LW.indexOf(wW), 1)
      })), wW.built
    }
  },
  39948: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      d: () => EW,
      e: () => cW,
      h: () => ZW
    });
    var mW = OW(38364);
    const EW = 0,
      NW = 3,
      PW = 4,
      LW = new Map([
        [EW, mW.e.ALPHA_ONEONE],
        [1, mW.e.ALPHA_COMBINE],
        [2, mW.e.ALPHA_ADD],
        [NW, mW.e.ALPHA_MULTIPLY],
        [-1, mW.e.ALPHA_SUBTRACT]
      ]);

    function cW(WW) {
      var iW;
      return null !== (iW = LW.get(WW)) && void 0 !== iW ? iW : WW
    }
    const wW = [NW, 2],
      tW = new Map;

    function ZW(WW) {
      if (WW === PW) return wW;
      let iW = tW.get(WW);
      return iW || (iW = [WW], tW.set(WW, iW)), iW
    }
  },
  53774: (WW, iW, OW) => {
    function mW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const iW = new Set;
      return (OW, mW) => {
        iW.has(OW) || (iW.add(OW), console.warn(WW + mW))
      }
    }
    OW.d(iW, {
      b: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);