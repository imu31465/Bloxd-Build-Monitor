export const id = 0;
export const ids = [0];
export const modules = {
  42663: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      CapeMaterialPlugin: () => AR,
      HueTintMaterialPlugin: () => CR,
      LifeformMaterialPlugin: () => XR,
      OverlayMaterialPlugin: () => MR
    });
    var yR = GR(42671),
      tR = GR(39172);
    class uR extends((0, yR.d)(tR.e)) {}(0, yR.e)(tR.e, uR);
    var ZR = GR(38453);
    class qR extends((0, yR.d)(ZR.f)) {}(0, yR.e)(ZR.f, qR);
    var iR = GR(39010);
    class fR extends((0, yR.d)(iR.f)) {}(0, yR.e)(iR.f, fR);
    var VR = GR(38475),
      KR = GR(41781),
      wR = GR(38466);
    class rR extends((0, yR.d)(wR.e)) {
      constructor(RR, JR, GR) {
        super(RR, JR, GR), (0, VR.j)(RR)
      }
      dispose(RR) {
        (0, VR.l)(this._material), super.dispose(RR)
      }
    }(0, yR.e)(wR.e, rR), (0, wR.i)({
      disableUnusedSpecularTerm: yR.b,
      isLightingDisabled: RR => RR instanceof KR.StandardMaterial && RR.disableLighting
    });
    var eR = GR(39922);
    class aR extends((0, yR.d)(eR.f)) {}(0, yR.e)(eR.f, aR);
    var LR = GR(40035),
      nR = GR(38340),
      UR = GR(39288),
      WR = GR(38460);
    class AR extends((0, yR.d)(LR.c)) {}(0, yR.e)(LR.c, AR);
    class CR extends((0, yR.d)(nR.c)) {}(0, yR.e)(nR.c, CR);
    class XR extends((0, yR.d)(UR.q)) {}(0, yR.e)(UR.q, XR);
    class MR extends((0, yR.d)(WR.b)) {}(0, yR.e)(WR.b, MR)
  },
  53540: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      addBabylonLights: () => gJ,
      createSceneParticleSystem: () => xJ,
      default: () => DJ
    });
    var yR = GR(53543),
      tR = (GR(41497), GR(42657), GR(42014), GR(53557)),
      uR = GR(38329),
      ZR = GR(38195),
      qR = GR(53568),
      iR = GR(53576),
      fR = GR(38397),
      VR = (GR(42671), GR(53584)),
      KR = GR(53579),
      wR = GR(39950),
      rR = GR(53589),
      eR = GR(41387),
      aR = GR(39934);
    const LR = "gpuParticles",
      nR = "gpuParticlesSummed",
      UR = aR.x,
      WR = RR => RR / 4,
      AR = (RR, JR, GR, yR) => Array.from({
        length: JR
      }, ((tR, uR) => `(${((RR,JR,GR)=>0===JR?`${RR} < 1`:JR===GR-1?`${RR} >= ${JR}`:`${RR} == ${JR}`)(RR,uR,JR)} ? ${GR(uR)} : ${yR})`)).join("\n\t\t+ "),
      CR = (RR, JR, GR) => `vec4 ${RR}(int i) {\n\treturn ${AR("i",GR,(RR=>`gpuParticleSystem[${JR+RR}]`),"vec4(0.0)")};\n}\n`,
      XR = `\n${CR("colorPositionsAt",WR(UR.colorPositions),aR.c/4)}\n${CR("color1At",WR(UR.color1),aR.c)}\n${CR("color2At",WR(UR.color2),aR.c)}\n${CR("velocityAt",WR(UR.BL),aR.c)}\n${CR("remapStopAt",WR(UR.remap),aR.c)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${AR("j",4,(RR=>`v[${RR}]`),"0.0")};\n}\n`,
      MR = (RR, JR, GR, yR) => RR ? `${GR}(${yR})` : `gpuParticleSystem[${JR} + ${yR}]`,
      BR = RR => `gpuParticleSystem[${RR>>2}].${"xyzw"[3&RR]}`,
      lR = RR => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${aR.c}\n#define COLOR_POSITIONS ${WR(UR.colorPositions)}\n#define COLOR1 ${WR(UR.color1)}\n#define COLOR2 ${WR(UR.color2)}\n#define VELOCITY ${WR(UR.BL)}\n#define REMAP ${WR(UR.remap)}\n#define RECORDS_PER_ROW ${aR.r}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${aR.t/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${BR(UR.gravity)}, ${BR(UR.gravity+1)}, ${BR(UR.gravity+2)}); }\nint colorCount() { return int(${BR(UR.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${WR(UR.colorDead)}]; }\nint velocityCount() { return int(${BR(UR.velocityCount)}); }\nint remapCount() { return int(${BR(UR.remapCount)}); }\n${RR?XR:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${RR?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${MR(RR,"COLOR1","color1At","i")}, ${MR(RR,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${MR(RR,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${MR(RR,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${MR(RR,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${MR(RR,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${MR(RR,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${MR(RR,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${MR(RR,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      pR = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    eR.b.ShadersStore[`${LR}VertexShader`] = lR(!1), eR.b.ShadersStore[`${LR}PixelShader`] = pR, eR.b.ShadersStore[`${nR}VertexShader`] = lR(!0), eR.b.ShadersStore[`${nR}PixelShader`] = pR;
    const gR = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      bR = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var vR = GR(39932),
      OR = GR(53594);
    class xR extends vR.e {
      constructor(RR, JR, GR, yR) {
        super(RR, JR, GR), this.renderer = GR, this.tL = yR, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(aR.t), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, OR.d)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (RR, JR) => {
          const {
            engine: GR
          } = this, yR = GR._gl;
          GR._bindTextureDirectly(yR.TEXTURE_2D, this.records, !0), GR._unpackFlipY(!1);
          const tR = this.ring.recordBits;
          for (let uR = RR; uR < JR;) {
            const RR = Math.floor(uR / aR.r),
              GR = Math.min(JR, (RR + 1) * aR.r);
            yR.texSubImage2D(yR.TEXTURE_2D, 0, uR % aR.r * 4, RR, 4 * (GR - uR), 1, yR.RGBA_INTEGER, yR.UNSIGNED_INT, tR, uR * aR.g), uR = GR
          }
          GR._bindTextureDirectly(yR.TEXTURE_2D, null)
        }, this.id = RR;
        const tR = yR.ke();
        this.engine = tR;
        const uR = Math.max(1, JR),
          ZR = Math.min(uR, aR.r);
        this.records = tR.createRawTexture(null, 4 * ZR, Math.ceil(uR / ZR), VR.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, VR.c.TEXTURE_NEAREST_SAMPLINGMODE, null, VR.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tL.getAnimationRatio() || 1;
        const JR = this.tL.getFrameId();
        if (JR === this.animatedFrame) return !1;
        const GR = super.animate(RR);
        return GR && (this.animatedFrame = JR, this.ring.takeUploads(this.uploadSlots)), GR
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(RR) {
        (0, OR.e)(this, this.uniforms, this.uniformBits, RR);
        for (const GR of aR.w) this.uniforms[GR] = this.uniformBits[GR];
        var JR;
        (0, OR.g)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (JR = this.ramp) || void 0 === JR || JR.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = KR.b.CreateRGBATexture(this.rampTexels.texels, aR.o, 1, this.tL, !1, !1, VR.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var RR;
        this.records.dispose(), null === (RR = this.ramp) || void 0 === RR || RR.dispose(), this.ramp = null
      }
    }
    const NR = "the context was lost before the programs linked";
    class DR {
      constructor(RR, JR) {
        this.tL = RR, this.reportFailure = JR, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = LR, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, rR.d)(), this.engine = RR.ke(), this.whiteRamp = KR.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, RR, !1, !1, VR.c.TEXTURE_NEAREST_SAMPLINGMODE);
        const GR = this.linkPair(LR),
          yR = null !== GR && GR !== NR ? this.linkPair(nR) : GR;
        null === yR && null !== GR ? (console.warn(`GPU particles link their fallback here: ${GR}`), this.reportFailure(GR, !0)) : null !== yR && this.fail(yR === NR ? NR : null !== GR && void 0 !== GR ? GR : yR)
      }
      Km(RR, JR) {
        const GR = aR.r * this.engine.getCaps().maxTextureSize;
        JR > GR && this.warnOnce(`capacity:${RR}`, `particle system ${RR} holds ${GR} particles, not ${JR}: its records texture's limit`);
        const yR = new xR(RR, Math.min(JR, GR), this, this.tL);
        return this.tL.addParticleSystem(yR), yR
      }
      canDraw(RR) {
        var JR, GR;
        if (this.failed || null === (JR = RR.texture) || void 0 === JR || null === (GR = JR.mirror) || void 0 === GR || !GR.isReady()) return !1;
        for (const yR of (0, wR.m)(RR.blendMode))
          if (!this.effectFor(yR).isReady()) return !1;
        return !0
      }
      disposeStopped(RR) {
        this.tL._toBeDisposed.push(RR)
      }
      remove(RR) {
        this.tL.removeParticleSystem(RR), RR.releaseGl()
      }
      render(RR) {
        var JR;
        if (!RR.isReady() || !RR.hasLiveParticles()) return 0;
        const {
          engine: GR,
          tL: yR,
          frame: tR
        } = this;
        RR.prepareDraw(this.warnOnce), RR.drawOffset(tR, 0), tR[3] = RR.drawTime();
        const uR = RR.ring.drawStart(),
          ZR = RR.ring.drawCount(),
          qR = null !== (JR = RR.ramp) && void 0 !== JR ? JR : this.whiteRamp;
        GR.setState(!1);
        for (const iR of (0, wR.m)(RR.blendMode)) {
          const JR = this.effectFor(iR);
          GR.enableEffect(JR), JR.setTexture("gpuParticleTexture", RR.texture.mirror), JR.setTexture("gpuParticleRampTexture", qR), JR._bindTexture("gpuParticleRecords", RR.records), JR.setMatrix("gpuParticleView", yR.getViewMatrix()), JR.setMatrix("gpuParticleProjection", yR.getProjectionMatrix()), JR.setFloatArray4("gpuParticleSystem", RR.uniforms), JR.setFloat4("gpuParticleFrame", tR[0], tR[1], tR[2], tR[3]), JR.setFloat2("gpuParticleRange", uR, ZR), JR.setFloat("gpuParticleRamp", RR.uniforms[aR.x.ramp]), GR.bindBuffers(this.vertexBuffers, null, JR), GR.setAlphaMode((0, wR.i)(iR)), GR.drawArraysType(VR.c.MATERIAL_TriangleStripDrawMode, 0, 4, ZR), JR._bindTexture("gpuParticleRecords", null)
        }
        return GR.setAlphaMode(VR.c.ALPHA_DISABLE), ZR
      }
      linkPair(RR) {
        this.shader = RR, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(RR, ""), this.multiplyEffect = this.createEffect(RR, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(RR) {
        const JR = RR.getPipelineContext(),
          GR = this.gl();
        GR && null === this.pairFailure && (!JR || JR.isParallelCompiled && !JR.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : JR.isParallelCompiled && JR.program && (GR.getProgramParameter(JR.program, GR.LINK_STATUS) || this.programFailed(function(RR, JR, GR) {
          if (RR.isContextLost()) return NR;
          for (const [yR, tR] of [
              ["VERTEX SHADER", JR.vertexShader],
              ["FRAGMENT SHADER", JR.fragmentShader]
            ]) {
            const JR = tR && !RR.getShaderParameter(tR, RR.COMPILE_STATUS) ? RR.getShaderInfoLog(tR) : null;
            if (JR) return `${yR} ${JR}`
          }
          return RR.getProgramInfoLog(GR) || "a program did not link"
        }(GR, JR, JR.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(RR) {
        return RR === wR.c ? this.multiplyEffect : this.effect
      }
      createEffect(RR, JR) {
        return this.engine.createEffect(RR, [], gR, bR, JR, void 0, void 0, ((JR, GR) => {
          var yR;
          RR === this.shader && this.programFailed(null !== (yR = this.gl()) && void 0 !== yR && yR.isContextLost() ? NR : function(RR) {
            const JR = RR.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(JR) ? "a program failed, its log not in this browser's stack" : JR.replace(/^Error: /, "")
          }(GR))
        }))
      }
      programFailed(RR) {
        this.linkingPair ? this.pairFailure ??= RR : this.fail(RR)
      }
      fail(RR) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${RR}`), this.reportFailure(RR, !1);
          for (const RR of this.tL.pM.slice()) RR instanceof xR && RR.disposeOnStop && RR.dispose()
        }
      }
    }
    var HR = GR(41352);
    class oR extends HR.c {
      createEffect() {
        const RR = super.createEffect(...arguments);
        return PR(RR), cR.has(RR) || (cR.add(RR), RR.onCompileObservable.add((() => {
          PR(RR)
        }))), RR
      }
    }
    const cR = new WeakSet;

    function PR(RR) {
      RR._vertexSourceCodeBeforeMigration = "", RR._fragmentSourceCodeBeforeMigration = ""
    }
    var IR = GR(41719),
      mR = GR(42644),
      zR = GR(41475),
      SR = GR(41690),
      jR = GR(41681),
      dR = GR(41610),
      ER = GR(42716),
      YR = GR(38675),
      kR = GR(53599),
      QR = GR(53605),
      FR = GR(53612),
      TR = GR(41626),
      sR = GR(4006),
      hR = GR(38550),
      RJ = GR(41829),
      JJ = GR(38628),
      GJ = GR(38576);

    function yJ(RR) {
      if (RR.visibility < 1 || !RR.isVisible || !RR.isEnabled() || RR.metadata[GJ.f] || !RR.isReady()) return !0;
      const JR = RR.XM;
      if (!JR || 0 === JR.length) return !0;
      for (let GR = 0; GR < JR.length; GR++) {
        const yR = JR[GR],
          tR = yR.he();
        if (!tR || !tR.isReadyForSubMesh(RR, yR, !1)) return !0
      }
      return !1
    }
    class tJ {
      constructor(RR, JR) {
        this.xw = RR, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, JR.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      UK(RR) {
        var JR;
        const GR = this.armed;
        if (this.armed = !1, this.vis = null, !GR) return !1;
        this.culled = 0;
        const {
          xw: yR
        } = this, tR = null === (JR = yR.BX) || void 0 === JR ? void 0 : JR.visibility;
        if (!tR || !RR || yR.lK.La) return !1;
        if (!(yR.NK.htR[0] >= JJ.d)) return !1;
        const uR = RR.getProjectionMatrix().m;
        if (0 !== uR[15]) return !1;
        const ZR = yR.Fw,
          qR = RR.globalPosition,
          iR = this.eye;
        return iR[0] = qR.x + ZR[0], iR[1] = qR.y + ZR[1], iR[2] = qR.z + ZR[2], !!tR.eyeClear(iR[0], iR[1], iR[2], RR.minZ, uR, yR.NK) && (this.vis = tR, this.passable.clear(), this.count = 0, !0)
      }
      see(RR, JR) {
        const GR = this.count++;
        if (GR === this.cellSlots.length) {
          const RR = new Int32Array(2 * GR);
          RR.set(this.cellSlots), this.cellSlots = RR
        }
        this.cellSlots[GR] = JR, this.meshes[GR] = RR
      }
      seeThrough(RR) {
        this.passable.add(RR)
      }
      finish(RR, JR) {
        const {
          vis: GR,
          eye: yR,
          meshes: tR,
          count: uR,
          cellSlots: ZR
        } = this, {
          NK: qR
        } = this.xw, [iR, fR] = qR.htR, VR = null !== GR && GR.update(yR[0], yR[1], yR[2], qR.nK, iR, fR, this.passable);
        let KR = 0;
        for (let wR = 0; wR < uR; wR++) {
          const yR = tR[wR];
          if (VR) {
            const RR = 3 * ZR[wR];
            if (RR >= 0 && !GR.isDrawn(JR[RR], JR[RR + 1], JR[RR + 2])) {
              KR++;
              continue
            }
          }
          TR.f.prototype.push.call(RR, yR)
        }
        tR.fill(null, 0, uR), this.count = 0, this.vis = null, this.culled = KR
      }
    }
    var uJ = GR(38616),
      ZJ = GR(38565),
      qJ = GR(41810),
      iJ = GR(53615),
      fJ = GR(41813),
      VJ = GR(41741);
    let KJ = 1;
    const wJ = new WeakSet;

    function rJ() {
      return KJ
    }

    function eJ() {
      KJ = KJ >= 1073741823 ? 1 : KJ + 1
    }

    function aJ(RR) {
      const JR = RR.metadata;
      if (!JR || !0 !== JR[hR.s]) return;
      const GR = JR[hR.x],
        yR = null === GR || void 0 === GR ? void 0 : GR._noaStamps;
      if (!GR || !yR) return;
      const tR = GR.entries.indexOf(RR);
      tR >= 0 && (yR[tR] = 0)
    }

    function LJ(RR) {
      const JR = RR.XM;
      for (let GR = 0; GR < JR.length; GR++) {
        const RR = JR[GR].he();
        if (RR && !RR.isFrozen) return !1
      }
      for (let GR = 0; GR < JR.length; GR++) {
        const RR = JR[GR].he();
        RR && wJ.add(RR)
      }
      return !0
    }
    let nJ = !1;
    const UJ = new WeakSet;

    function WJ(RR, JR) {
      const GR = RR[JR];
      if ("function" !== typeof GR) throw new Error(`terrainDrawState: Babylon has no ${JR} to hook`);
      return GR
    }

    function AJ(RR, JR, GR, yR, tR) {
      const uR = GR.NK.nK,
        ZR = new Map;
      let qR = 0;
      const iR = new tJ(GR, RR),
        fR = new uJ.e(uR, RR.ke());
      ! function(RR) {
        if (UJ.has(RR) || (UJ.add(RR), RR.onContextLostObservable.add(eJ), RR.Ye.add(eJ)), nJ) return;
        nJ = !0;
        const JR = iJ.d.prototype,
          GR = WJ(JR, "_markSubMeshesAsDirty");
        Object.assign(JR, {
          _markSubMeshesAsDirty(RR) {
            GR.call(this, RR), aJ(this)
          }
        });
        const yR = WJ(VJ.d.prototype, "_syncParentEnabledState");
        Object.assign(VJ.d.prototype, {
          _syncParentEnabledState() {
            yR.call(this), aJ(this)
          }
        });
        const tR = WJ(fJ.b.prototype, "resetDrawCache");
        fJ.b.prototype.resetDrawCache = function(RR, JR) {
          tR.call(this, RR, JR), aJ(this.getMesh())
        };
        const uR = qJ.d.prototype,
          ZR = WJ(uR, "markDirty");
        uR.markDirty = function(RR) {
          ZR.call(this, RR), wJ.has(this) && eJ()
        };
        const qR = WJ(uR, "_markAllSubMeshesAsDirty");
        Object.assign(uR, {
          _markAllSubMeshesAsDirty(RR) {
            qR.call(this, RR), wJ.has(this) && eJ()
          }
        })
      }(RR.ke());
      let VR = new Float64Array(384),
        KR = new Int32Array(64),
        wR = new Uint8Array(64),
        rR = new Float64Array(64),
        eR = new Int32Array(192),
        aR = 0;
      const LR = [],
        nR = new Float64Array(24),
        UR = () => {
          const RR = LR.pop();
          return void 0 !== RR ? (KR[RR] = 0, RR) : (aR === KR.length && (VR = CJ(VR, new Float64Array(2 * VR.length)), KR = CJ(KR, new Int32Array(2 * KR.length)), wR = CJ(wR, new Uint8Array(2 * wR.length)), rR = CJ(rR, new Float64Array(2 * rR.length)), eR = CJ(eR, new Int32Array(2 * eR.length))), aR++)
        },
        WR = RR => {
          const JR = 6 * RR._noaSlot,
            GR = RR.ZuR[0],
            yR = RR.ZuR[1];
          VR[JR] = GR.x, VR[JR + 1] = GR.y, VR[JR + 2] = GR.z, VR[JR + 3] = yR.x, VR[JR + 4] = yR.y, VR[JR + 5] = yR.z
        },
        AR = (RR, JR, GR) => {
          if (!GR) return iR.see(RR, -1), !1;
          const yR = yJ(RR);
          return yR && iR.seeThrough(rR[JR]), iR.see(RR, JR), !yR
        };
      let CR = -1;
      return RR.getActiveMeshCandidates = () => {
        const GR = RR.frustumPlanes,
          yR = JR._selectionContent;
        yR.reset(), (GR => {
          const yR = RR.frustumPlanes;
          qR = qR + 1 | 0 || 1;
          const tR = JR.blocks,
            uR = iR.UK(RR.activeCamera),
            ZR = uR && !0;
          if (ZR) {
            const JR = RR.ke().currentRenderPassId;
            JR !== CR && (CR = JR, eJ())
          }
          const fR = rJ(),
            rR = ZR && !1;
          tR.length > 0 && function(RR, JR) {
            for (let GR = 0; GR < 6; GR++) {
              const yR = RR[GR],
                tR = yR.normal;
              JR[4 * GR] = tR.x, JR[4 * GR + 1] = tR.y, JR[4 * GR + 2] = tR.z, JR[4 * GR + 3] = yR.d
            }
          }(yR, nR);
          const aR = VR,
            LR = KR,
            UR = wR;
          for (let RR = 0; RR < tR.length; RR++) {
            const JR = tR[RR];
            if (!RJ.c.IsInFrustum(JR.ZuR, yR)) continue;
            const VR = JR.entries;
            {
              const RR = JR._noaSlots,
                yR = JR._noaStamps,
                tR = JR._noaTerrain;
              for (let JR = 0; JR < VR.length; JR++) {
                const KR = RR[JR];
                if (LR[KR] !== qR && (LR[KR] = qR, UR[KR] = XJ(aR, 6 * KR, nR) ? 1 : 0), 0 === UR[KR]) continue;
                const wR = VR[JR];
                if (ZR && yR[JR] === fR) rR && 1 === tR[JR] && yJ(wR) && 0, iR.see(wR, 1 === tR[JR] ? KR : -1);
                else if (ZR) {
                  yR[JR] = fR;
                  const RR = !0 === wR.metadata[ZJ.j];
                  tR[JR] = RR ? 1 : 0;
                  const GR = AR(wR, KR, RR);
                  !RR || GR && LJ(wR) || (yR[JR] = 0)
                } else uR ? AR(wR, KR, !0 === wR.metadata[ZJ.j]) : TR.f.prototype.push.call(GR, wR)
              }
              continue
            }
          }
          uR && iR.finish(GR, eR)
        })(yR), fR.apply(yR, RR.activeCamera);
        const uR = JR.uuR;
        for (let RR = 0; RR < uR.length; RR++) {
          const JR = uR[RR];
          JR.isEnabled() && TR.f.prototype.push.call(yR, JR)
        }
        return tR(yR, GR), yR
      }, {
        quR: () => iR.culled,
        stR: (RR, JR) => {
          const tR = Math.floor(JR[0] / uR),
            qR = Math.floor(JR[1] / uR),
            iR = Math.floor(JR[2] / uR),
            fR = `${tR}|${qR}|${iR}`;
          let VR = ZR.get(fR);
          if (!VR) {
            const RR = [0, 0, 0];
            GR.gGR([tR * uR - 1, qR * uR - 1, iR * uR - 1], null, RR), VR = Object.assign(yR(RR, uR + 2), {
              iuR: fR,
              fuR: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: UR()
            }), WR(VR), rR[VR._noaSlot] = (0, sR.g)(tR, qR, iR), eR[3 * VR._noaSlot] = tR, eR[3 * VR._noaSlot + 1] = qR, eR[3 * VR._noaSlot + 2] = iR, ZR.set(fR, VR)
          }
          VR.fuR++, RR.metadata[hR.A] = VR
        },
        vI: RR => {
          const JR = RR.metadata[hR.A];
          JR && (JR.fuR--, JR.fuR <= 0 && (ZR.delete(JR.iuR), LR.push(JR._noaSlot)), RR.metadata[hR.A] = null)
        },
        tuR: (RR, JR) => {
          const GR = RR,
            yR = JR.metadata[hR.A];
          (GR._noaSlots ??= []).push(yR._noaSlot), (GR._noaStamps ??= []).push(0), (GR._noaTerrain ??= []).push(0), GR.entries.push(JR)
        },
        removeEntry: (RR, JR) => {
          const GR = RR,
            yR = GR.entries,
            tR = yR.indexOf(JR);
          if (tR < 0) return;
          const uR = GR._noaSlots,
            ZR = GR._noaStamps,
            qR = GR._noaTerrain,
            iR = yR.length - 1;
          yR[tR] = yR[iR], uR[tR] = uR[iR], ZR[tR] = ZR[iR], qR[tR] = qR[iR], yR.pop(), uR.pop(), ZR.pop(), qR.pop()
        },
        fJR: RR => {
          for (const JR of ZR.values()) {
            JR.TtR.VuR(RR), JR.FtR.VuR(RR);
            for (const GR of JR.ZuR) GR.VuR(RR);
            WR(JR)
          }
        }
      }
    }

    function CJ(RR, JR) {
      return JR.set(RR), JR
    }

    function XJ(RR, JR, GR) {
      const yR = RR[JR],
        tR = RR[JR + 1],
        uR = RR[JR + 2],
        ZR = RR[JR + 3],
        qR = RR[JR + 4],
        iR = RR[JR + 5];
      for (let fR = 0; fR < 24; fR += 4) {
        const RR = GR[fR],
          JR = GR[fR + 1],
          VR = GR[fR + 2];
        if (!(RR * (RR >= 0 ? ZR : yR) + JR * (JR >= 0 ? qR : tR) + VR * (VR >= 0 ? iR : uR) + GR[fR + 3] >= 0)) return !1
      }
      return !0
    }
    var MJ = GR(38935);
    class BJ {
      constructor(RR, JR) {
        var GR = RR.tL;
        GR.qtR(new FR.e(GR));
        var yR = new kR.b(iR);
        GR.wuR = yR, yR.blocks = [];
        var tR, uR = {},
          qR = [];
        this.textPlanes = qR, this.quR = () => tR.quR(), this.fJR = RR => {
          VR(yR, RR), tR.fJR(RR)
        }, this.stR = (JR, GR, ZR) => {
          if (!JR.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!JR.metadata[hR.x] && !JR.metadata[hR.o]) {
            if (!GR) {
              var iR = yR.uuR;
              if (JR.metadata[hR.C] && !JR.parent) {
                iR = qR;
                var VR = JR.Tm().euR;
                JR.metadata[hR.E] = VR.center.length() + VR.radius, JR.Qe = !0
              }
              return iR.push(JR), JR.metadata[hR.j] = iR, void(JR.metadata[hR.o] = !0)
            }
            var wR = Math.floor(ZR[0] / fR),
              rR = Math.floor(ZR[1] / fR),
              eR = Math.floor(ZR[2] / fR),
              aR = wR + "|" + rR + "|" + eR,
              LR = uR[aR];
            if (!LR) {
              var nR = [wR * fR, rR * fR, eR * fR],
                UR = [0, 0, 0];
              RR.xw.gGR(nR, null, UR), LR = KR(UR, fR), yR.blocks.push(LR), uR[aR] = LR, LR.iuR = aR
            }
            tR.stR(JR, ZR), tR.tuR(LR, JR), LR.fuR = (LR.fuR || 0) + 1, JR.metadata[hR.x] = LR, JR.metadata[hR.s] = !0, JR.Qe = !0
          }
        }, this.vI = RR => {
          if (RR.metadata) {
            RR.metadata[hR.o] && ((0, sR.k)(RR.metadata[hR.j], RR), RR.metadata[hR.o] = !1), RR.metadata[hR.j] === qR && (RR.Qe = !1), RR.metadata[hR.j] = void 0, RR.metadata[hR.E] = void 0;
            var JR = RR.metadata[hR.x];
            JR && JR.entries && (RR.metadata[hR.s] && tR.removeEntry(JR, RR), JR.fuR--, JR.fuR <= 0 && (delete uR[JR.iuR], (0, sR.k)(yR.blocks, JR))), tR.vI(RR), RR.metadata[hR.x] = null, RR.metadata[hR.s] = !1
          }
        }, this.jRR = function(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (RR.metadata[hR.x]) {
            if (RR.metadata[hR.s] === JR) return;
            var GR = RR.metadata[hR.x];
            GR && GR.entries && (JR ? tR.tuR(GR, RR) : tR.removeEntry(GR, RR)), RR.metadata[hR.s] = JR
          } else {
            if (RR.metadata[hR.o] === JR) return;
            var uR = RR.metadata[hR.j] || yR.uuR;
            JR ? uR.push(RR) : (0, sR.k)(uR, RR), RR.metadata[hR.o] = JR
          }
        };
        var iR = () => {},
          fR = JR * RR.xw.NK.nK,
          VR = (RR, JR) => {
            RR.blocks.forEach((RR => {
              RR.TtR.VuR(JR), RR.FtR.VuR(JR), RR.ZuR.forEach((RR => RR.VuR(JR))), RR.blocks && VR(RR, JR)
            }))
          },
          KR = (RR, JR) => {
            var GR = new ZR.Fe(RR[0], RR[1], RR[2]),
              yR = new ZR.Fe(RR[0] + JR, RR[1] + JR, RR[2] + JR);
            return new QR.d(GR, yR, void 0, void 0, void 0, iR)
          };
        tR = AJ(GR, yR, RR.xw, KR, ((RR, JR) => {
          for (var GR = 0; GR < qR.length; GR++) {
            var yR = qR[GR];
            yR.isEnabled(!1) && ((0, MJ.b)(yR, JR) && TR.f.prototype.push.call(RR, yR))
          }
        }))
      }
    }

    function lJ(RR) {
      const {
        holderPosition: JR,
        holderRotation: GR,
        y5: yR,
        fov: tR,
        near: uR,
        far: ZR
      } = RR.model.Z2, qR = RR.CuR;
      qR.position.VJR(JR[0], JR[1], JR[2]), qR.rotation.VJR(GR[0], GR[1], GR[2]);
      const iR = RR.camera;
      iR.position.VJR(yR[0], yR[1], yR[2]), iR.fov = tR, iR.minZ = uR, iR.maxZ = ZR
    }

    function pJ(RR) {
      const JR = RR.ke(),
        GR = JR,
        yR = GR._gl;
      if (!yR || GR.Ma < 2 || JR.LtR || yR.getParameter(yR.DEPTH_BITS) < 24) return !1;
      const tR = RR._renderingManager,
        uR = tR.getRenderingGroup(-1),
        ZR = tR.getRenderingGroup(0),
        qR = SR.d.prototype.render;
      return uR.render = function(RR, JR, GR, yR, tR, uR, iR, fR, VR) {
        (RR || ZR._empty) && qR.call(this, RR, JR, GR, yR, tR, uR, iR, fR, VR)
      }, ZR.render = function(RR, GR, tR, ZR) {
        let iR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          KR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          wR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          rR = arguments.length > 8 ? arguments[8] : void 0;
        RR ? qR.call(this, RR, GR, tR, ZR, iR, fR, KR, wR, rR) : (JR.setAlphaMode(VR.c.ALPHA_DISABLE), qR.call(this, null, !1, !1, ZR, iR, fR, KR, !1), uR._empty || (yR.depthRange(1, 1), qR.call(uR, null, GR, tR, ZR, iR, fR, KR, wR, rR), yR.depthRange(0, 1)), qR.call(this, null, GR, tR, ZR, !1, !1, !1, wR, rR))
      }, !0
    }

    function gJ(RR, JR) {
      return [JR, YR.g].map(((JR, GR) => {
        const yR = new tR.c("light", ZR.Fe.FromArray(JR), RR);
        return yR.diffuse = uR.Color3.FromArray([1, 1, 1]), yR.specular = uR.Color3.FromArray([1, 1, 1]), yR.intensity = YR.e[GR], yR
      }))
    }
    class bJ extends iR.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(RR) {
        var JR;
        this.heldTexture = RR, this.particleTexture = null !== (JR = null === RR || void 0 === RR ? void 0 : RR.mirror) && void 0 !== JR ? JR : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        RR && (this.particleTexture = null, (0, fR.B)(this.heldTexture), this.heldTexture = null), super.dispose(RR, JR, GR)
      }
    }

    function vJ(RR, JR, GR, yR) {
      return JR && !JR.failed ? JR.Km(GR, yR) : new bJ(GR, yR, RR)
    }
    const OJ = new WeakMap;

    function xJ(RR, JR, GR) {
      var yR;
      let tR = null !== (yR = OJ.get(RR)) && void 0 !== yR ? yR : null;
      return !tR && RR.ke().Ma >= 2 && (tR = new DR(RR, (JR => {
        console.error(`Particle programs failed in scene ${RR.uid}: ${JR}`)
      })), OJ.set(RR, tR)), vJ(RR, tR, JR, GR)
    }
    const NJ = yR.d.Zero();
    const DJ = {
      oyR: function(RR, JR) {
        return new oR(RR, JR.xyR, {
          preserveDrawingBuffer: JR.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      BuR: function(RR, JR) {
        ! function(RR, JR, GR) {
          const yR = new dR.c(RR.engine);
          RR.tL = yR, yR.detachControl(), yR.autoClear = !1, jR.e.MIN_RENDERINGGROUPS = -1;
          for (let uR = jR.e.MIN_RENDERINGGROUPS; uR <= 1; uR++) yR.setRenderingOrder(uR, SR.d.PainterSortCompare, SR.d.PainterSortCompare, SR.d.PainterSortCompare);
          yR.setRenderingAutoClearDepthStencil(0, !1), zR.d.Enabled = !1, RR.UuR = new BJ(RR, Math.round(JR.WuR)), RR.CuR = new mR.c("camHolder", yR), RR.camera = new IR.e("camera", new ZR.Fe(0, 0, 0), yR), RR.camera.parent = RR.CuR, lJ(RR), (0, YR.i)(RR, ((RR, JR, GR) => (0, ER.i)(JR, GR, RR.tL))), yR.clearColor = uR.e.FromArray(JR.clearColor), yR.ambientColor = uR.Color3.FromArray(JR.ambientColor);
          const tR = GR(yR, JR.MuR);
          yR.onNewLightAddedObservable.add((RR => {
            tR.some((JR => JR === RR)) || console.error(`Light "${RR.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), yR.skipPointerMovePicking = !0
        }(RR, JR, gJ), pJ(RR.tL)
      },
      AuR: lJ,
      setBabylonFog: function(RR, JR, GR, yR) {
        const tR = RR.tL;
        tR.fogMode = 3, tR.fogStart = JR, tR.fogEnd = GR, tR.fogColor.set(yR[0], yR[1], yR[2])
      },
      puR: function(RR, JR, GR) {
        return RR.engine.Ma >= 2 && !RR.guR && (RR.guR = new DR(RR.tL, RR.buR)), vJ(RR.tL, RR.guR, JR, GR)
      },
      OuR: function(RR, JR) {
        RR.tL.pM.forEach((GR => {
          if (GR instanceof xR) return void GR.fJR(JR, RR.xw.Fw);
          const yR = GR;
          if (yR.emitter.getConnectedParticleSystems)
            for (const RR of yR._particles) RR.position.set(RR.position.x - JR[0], RR.position.y - JR[1], RR.position.z - JR[2]);
          else {
            if (!yR.worldOffset) throw new Error("Particle system has no world offset");
            yR.worldOffset.x = -RR.xw.Fw[0], yR.worldOffset.y = -RR.xw.Fw[1], yR.worldOffset.z = -RR.xw.Fw[2]
          }
        }))
      },
      linesFromArrays: function(RR, JR, GR) {
        const yR = new qR.d(JR, RR.tL, null, void 0, void 0, !1);
        return (0, ER.e)(JR, GR, RR.tL, yR), yR
      },
      uL: aJ,
      vuR: function(RR, JR) {
        return NJ.origin.vN(JR.origin), NJ.direction.vN(JR.direction), NJ.length = JR.length, NJ.epsilon = JR.epsilon, NJ.vuR(RR, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42671: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => SR,
      d: () => WR,
      e: () => FR
    });
    var yR = GR(41781),
      tR = GR(42677),
      uR = GR(42722),
      ZR = GR(42685),
      qR = GR(38986),
      iR = GR(38988),
      fR = GR(38995),
      VR = GR(38998),
      KR = GR(38424),
      wR = GR(38391),
      rR = GR(38397),
      eR = GR(42693),
      aR = GR(38366),
      LR = GR(38382),
      nR = GR(38358);

    function UR(RR, JR) {
      return Object.assign((function(RR, GR, yR, tR) {
        return JR(this.featureState, RR, GR, yR, tR)
      }), {
        iK: RR
      })
    }

    function WR(RR) {
      const JR = class extends eR.e {
          constructor(JR, GR) {
            const yR = (0, LR.bb)(JR),
              tR = yR && (0, LR.E)(yR, RR.name);
            for (var uR = arguments.length, ZR = new Array(uR > 2 ? uR - 2 : 0), qR = 2; qR < uR; qR++) ZR[qR - 2] = arguments[qR];
            super(JR, RR.name, RR.priority, tR ? tR.defines : RR.defines(...ZR), !1), this.featureState = void 0, this.featureState = GR, this._pluginManager._addPlugin(this), this._enable(!0), (0, LR.H)(this._material, RR, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return RR.className
          }
          isCompatible(RR) {
            return RR === nR.c.GLSL || RR === nR.c.WGSL
          }
        },
        GR = (0, aR.i)(RR);
      for (const [yR, tR] of Object.entries(aR.e)) {
        const uR = RR[yR];
        if (uR) {
          const RR = GR[yR];
          Object.defineProperty(JR.prototype, tR, {
            value: UR(uR, RR),
            writable: !0,
            configurable: !0
          })
        }
      }
      return JR
    }
    class AR extends(WR(qR.c)) {}
    var CR = GR(41352),
      XR = GR(42697),
      MR = GR(42704);

    function BR(RR, JR, GR) {
      return (0, MR.c)(GR, JR.urls, (() => async function(RR, JR, GR) {
        const {
          width: yR
        } = RR[0].getSize(), tR = RR.map(((RR, GR) => {
          var tR;
          const uR = Math.round(RR.getSize().height / yR),
            ZR = null === JR || void 0 === JR ? void 0 : JR[GR];
          return {
            pixels: ZR && ZR.byteLength === yR * yR * uR * 4 ? ZR : null !== (tR = lR.get(RR.getInternalTexture())) && void 0 !== tR ? tR : RR._readPixelsSync(),
            layers: uR
          }
        })), uR = Math.min(GR.ke().getCaps().texture2DArrayMaxLayerCount, 256), qR = (0, MR.b)(tR, yR, uR).map((RR => {
          let {
            pixels: JR,
            layers: tR
          } = RR;
          return {
            atlas: new XR.d(JR, yR, yR, tR, CR.c.TEXTUREFORMAT_RGBA, GR, !0, !1, ZR.c.NEAREST_NEAREST_MIPLINEAR),
            layers: tR
          }
        }));
        return RR.forEach(((RR, JR) => {
          const yR = RR.getInternalTexture();
          lR.has(yR) || (! function(RR, JR) {
            const GR = JR.createRawTexture(new Uint8Array(4), 1, 1, CR.c.TEXTUREFORMAT_RGBA, !1, !1, ZR.c.NEAREST_SAMPLINGMODE);
            RR._hardwareTexture.release(), JR.unbindAllTextures(), GR._swapAndDie(RR, !1)
          }(yR, GR.ke()), lR.set(yR, tR[JR].pixels))
        })), qR
      }(RR, JR.pixels, GR)))
    }
    const lR = new WeakMap;
    var pR = GR(39007);
    class gR extends(WR(iR.j)) {
      constructor(RR, JR) {
        super(RR, JR), this.loaded = new Set, this.mirrors = void 0, this.mirrors = JR.textures.map((RR => RR.mirror)), JR.useWebGL2 && !JR.imagesPerAtlas.length && JR.textureAtlases.splice(0, JR.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((RR, JR) => {
          RR.onLoadObservable.add((RR => {
            this.setTextureArrayData(RR, JR).catch((RR => {
              console.error(`Failed to build the texture arrays, at atlas ${JR}`, RR)
            }))
          }))
        })), (0, pR.l)(JR, RR.shaderLanguage)
      }
      async setTextureArrayData(RR, JR) {
        const GR = this.featureState,
          {
            width: yR,
            height: tR
          } = RR.getSize(),
          uR = this._material.shaderLanguage;
        if (!GR.useWebGL2) return void(0, pR.g)(this._material, GR, JR, yR, Math.round(tR / yR), uR);
        if (this.loaded.add(JR), this.loaded.size < this.mirrors.length) return;
        const ZR = await BR(this.mirrors, GR.sources, this._material.jH());
        (0, pR.e)(this._material, GR, ZR, yR, uR)
      }
    }
    var bR = GR(42711),
      vR = GR(41822),
      OR = GR(38195),
      xR = GR(42714),
      NR = GR(41951),
      DR = GR(41813),
      HR = GR(42644),
      oR = GR(38650),
      cR = GR(42716);
    class PR extends bR.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const IR = {
      Mesh: xR.b,
      TransformNode: HR.c,
      GK: bR.b,
      VertexBuffer: bR.c,
      BoundingInfo: vR.c,
      Fe: OR.Fe,
      ArenaBuffer: PR,
      SubMesh: DR.b,
      VertexData: NR.c,
      MirroredGeometry: cR.b,
      meshFromArrays: cR.e,
      plainMeshFromArrays: cR.i
    };
    (0, oR.g)(IR);
    var mR = GR(38475);
    class zR extends(WR(VR.h)) {
      constructor(RR, JR) {
        if (super(RR, JR), RR instanceof yR.StandardMaterial && JR.dirLightCount > 0) {
          const JR = RR,
            GR = JR._blockDirtyMechanism;
          JR._blockDirtyMechanism = !0, RR.disableLighting = !0, JR._blockDirtyMechanism = GR;
          const yR = (0, LR.bb)(RR);
          yR && (yR.disableLighting = !0, (0, LR._)(yR))
        }(0, mR.j)(RR)
      }
      dispose(RR) {
        (0, mR.l)(this._material), super.dispose(RR)
      }
    }

    function SR(RR, JR) {
      if (!(JR instanceof yR.StandardMaterial) || JR.specularTexture) return;
      const {
        r: GR,
        g: tR,
        b: uR
      } = JR.specularColor;
      0 === GR && 0 === tR && 0 === uR && (RR.SPECULARTERM = !1)
    }(0, VR.f)({
      disableUnusedSpecularTerm: SR
    });
    var jR = GR(38406),
      dR = GR(38666);
    const ER = new RegExp(`^#define ${fR.e}\\s*$`, "m");
    class YR extends(WR(fR.j)) {
      constructor(RR, JR) {
        super(RR, JR), this.He = !1, JR.ditherOnlyWhileFading && (dR.f.add(RR), this.prewarmDitherTwins(RR))
      }
      prewarmDitherTwins(RR) {
        const JR = new WeakSet;
        RR.onEffectCreatedObservable.add((GR => {
          let {
            effect: yR,
            subMesh: tR
          } = GR;
          if (this.featureState.prewarmingDither || JR.has(yR)) return;
          JR.add(yR);
          const uR = null === tR || void 0 === tR ? void 0 : tR.getMesh();
          uR && !ER.test(yR.defines) && RR.jH().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(uR) || JR.delete(yR)
          }))
        }))
      }
      prewarmDither(RR) {
        if (this.He || RR.oB()) return !1;
        const JR = new DR.b(0, 0, 0, 0, 0, RR, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(RR, JR)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== JR.effect
      }
      dispose(RR) {
        this.He = !0, super.dispose(RR)
      }
    }
    class kR extends(WR(KR.e)) {}
    const QR = new Map;

    function FR(RR, JR) {
      QR.set(RR, JR)
    }
    FR(qR.c, AR), FR(iR.j, gR), FR(fR.j, YR), FR(VR.h, zR), FR(KR.e, kR), (0, wR.b)({
      create: (RR, JR) => {
        const GR = new yR.StandardMaterial(RR.name, JR);
        return (0, jR.t)(RR, GR), GR.detailMap._pluginDefineNames
      },
      write: (RR, JR, GR) => {
        (0, jR.ab)(RR.mirror, JR, GR)
      },
      addFeature: (RR, JR, GR) => {
        const yR = QR.get(JR.feature);
        if (!yR) throw new Error(`${JR.feature.name} has no plugin class (registerPluginClass)`);
        new yR(RR.mirror, JR.state, ...GR)
      },
      texture: (RR, JR, GR) => {
        let {
          url: yR,
          noMipmap: tR,
          invertY: uR,
          samplingMode: qR,
          data: iR,
          sets: fR
        } = GR;
        if (!iR) {
          const GR = new ZR.c(yR, JR, tR, uR, qR);
          return Object.assign(GR, fR), void(0, rR.J)(RR, GR)
        }
        const VR = {},
          KR = new Promise(((RR, JR) => {
            VR.onLoad = RR, VR.onError = (RR, GR) => {
              JR(new Error(`${iR.context}: ${(null===GR||void 0===GR?void 0:GR.message)||RR||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: wR,
            bytes: eR,
            label: aR
          } = iR,
          LR = {
            noMipmap: tR,
            invertY: !1,
            samplingMode: qR,
            ...VR,
            mimeType: wR,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          nR = new ZR.c(null, JR, LR);
        jR.v.set(nR, KR), Object.assign(nR, fR), nR.updateURL(yR, eR);
        const UR = nR.getInternalTexture();
        UR && (UR.label = aR), RR.uvSet = nR.coordinatesIndex, RR.matrix.set((0, jR.T)(nR)), (0, rR.J)(RR, nR)
      },
      cube: (RR, JR, GR) => {
        let {
          rootUrl: yR,
          files: uR,
          noMipmap: qR,
          luminance: iR
        } = GR;
        const {
          samplingMode: fR
        } = RR.sampler, VR = fR === (0, rR.A)(qR) ? null : () => {
          (0, jR.P)(KR, fR)
        }, KR = new tR.d(yR, JR, null, qR, uR, VR, null, (0, rR.w)(iR));
        KR.coordinatesMode = ZR.c.SKYBOX_MODE, (0, rR.J)(RR, KR)
      },
      canvas: (RR, JR, GR) => {
        let {
          width: yR,
          height: tR,
          mipmaps: qR,
          samplingMode: iR,
          hasAlpha: fR = !1,
          wrap: VR = ZR.c.CLAMP_ADDRESSMODE
        } = GR;
        const KR = new uR.b(JR, {
          width: yR,
          height: tR
        }, RR, qR, iR);
        KR.hasAlpha = fR, KR.wrapU = VR, KR.wrapV = VR;
        const wR = (0, jR.D)(KR);
        return (0, jR.G)(wR, KR), wR
      }
    })
  },
  42716: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => VR,
      e: () => KR,
      i: () => wR
    });
    var yR = GR(42711),
      tR = GR(41586),
      uR = GR(41822),
      ZR = GR(41957),
      qR = GR(42714),
      iR = GR(41951),
      fR = GR(38532);
    class VR extends ZR.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (RR, JR) => {
          this.releaseUnlessInstanced(JR)
        }, this.onLinked = null
      }
      link(RR) {
        var JR;
        (0, fR.m)(RR), this.model = RR, null === (JR = this.onLinked) || void 0 === JR || JR.call(this, RR)
      }
      relink() {
        this.release();
        const RR = [];
        for (const tR of Object.values(this._vertexBuffers))
          if (!tR.getIsInstanced()) {
            const {
              byteOffset: JR,
              byteStride: GR,
              type: yR,
              normalized: uR
            } = tR;
            RR.push({
              kind: tR.getKind(),
              data: tR.getData(),
              offset: JR,
              stride: GR,
              components: tR.getSize(),
              glType: yR,
              isNormalized: uR
            })
          } const JR = this._indices.length ? this._indices : null,
          {
            minimum: GR,
            maximum: yR
          } = this.extend;
        this.link(new fR.e(RR, JR, this.getTotalVertices(), new Float64Array(GR.QtR()), new Float64Array(yR.QtR())))
      }
      copy(RR) {
        if (!this.model) return super.copy(RR);
        const JR = new VR(RR, this.jH()),
          GR = this.NuR(void 0, !0);
        GR && JR.setIndices(GR);
        let ZR = !1;
        for (const uR in this._vertexBuffers) {
          const RR = this._vertexBuffers[uR],
            GR = RR.getData();
          if (!GR) continue;
          const qR = RR.getSize(),
            {
              type: iR,
              byteOffset: fR,
              byteStride: VR,
              normalized: KR
            } = RR;
          ZR ||= RR.isUpdatable();
          const wR = RR.getIsInstanced() ? (GR instanceof Array ? 4 * GR.length : GR.byteLength) / VR : this.getTotalVertices(),
            rR = (0, tR.l)(GR, qR, iR, fR, VR, wR, !0),
            eR = {
              updatable: RR.isUpdatable(),
              stride: qR,
              type: iR,
              normalized: KR,
              takeBufferOwnership: !0,
              instanced: RR.getIsInstanced()
            };
          JR.setVerticesBuffer(new yR.c(this.ke(), rR, uR, eR), wR)
        }
        return JR._updatable = ZR, JR._boundingInfo = new uR.c(this.extend.minimum, this.extend.maximum), JR.relink(), JR
      }
      static mergeMeshes(RR, JR, GR, yR, tR, uR) {
        const iR = RR[0].jH(),
          fR = new qR.b(RR[0].name + "_merged", iR),
          KR = new VR(ZR.e.RandomId(), iR, void 0, !1, fR);
        try {
          if (!qR.b.MergeMeshes(RR, JR, GR, fR, tR, uR)) return fR.dispose(), null
        } catch (wR) {
          throw fR.dispose(), wR
        }
        return KR.relink(), fR
      }
      removeVerticesData(RR) {
        this.releaseUnlessInstanced(RR), super.removeVerticesData(RR)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(RR) {
        var JR;
        RR && null !== (JR = this.getVertexBuffer(RR)) && void 0 !== JR && JR.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, fR.s)(this.model), this.model = null)
      }
    }

    function KR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new qR.b(RR, GR);
      const tR = (0, fR.j)(JR),
        {
          positions: uR,
          normals: KR,
          uvs: wR,
          indices: rR,
          named: eR = {}
        } = JR,
        aR = new iR.c;
      aR.positions = uR, aR.normals = null !== KR && void 0 !== KR ? KR : null, aR.uvs = null !== wR && void 0 !== wR ? wR : null, aR.indices = rR;
      const LR = new VR(ZR.e.RandomId(), GR, aR, !1, yR);
      for (const {
          kind: ZR,
          components: qR
        }
        of tR.vertexAttributes) ZR in eR && yR.setVerticesData(ZR, eR[ZR], !1, qR);
      return LR.link(tR), yR
    }

    function wR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tR = new qR.b(RR, GR),
        {
          positions: uR,
          normals: ZR,
          uvs: fR,
          indices: VR
        } = JR;
      return Object.assign(new iR.c, {
        positions: uR,
        normals: ZR,
        uvs: fR,
        indices: VR
      }).applyToMesh(tR, yR), tR
    }
  },
  39934: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      g: () => ZR,
      k: () => uR,
      o: () => tR,
      r: () => qR,
      t: () => fR,
      w: () => VR,
      x: () => iR
    });
    const yR = 16,
      tR = 256,
      uR = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      ZR = 16,
      qR = 256,
      iR = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + yR,
        color2: 12 + 5 * yR,
        BL: 12 + 9 * yR,
        remap: 12 + 13 * yR
      },
      fR = 12 + 17 * yR,
      VR = [iR.colorCount, iR.velocityCount, iR.remapCount, iR.ramp]
  },
  39932: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => LR,
      g: () => WR
    });
    var yR = GR(38239),
      tR = GR(38195),
      uR = GR(38397),
      ZR = GR(39934);
    class qR {
      constructor(RR) {
        this.hK = RR, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const JR = Math.max(1, RR);
        this.records = new Float32Array(JR * ZR.g), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(JR).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(RR) {
        const JR = this.hK;
        for (let GR = 0; GR < JR; GR++) {
          const GR = this.cursor;
          if (this.cursor = GR + 1 === JR ? 0 : GR + 1, this.deaths[GR] <= RR) return GR
        }
        return -1
      }
      written(RR, JR) {
        this.deaths[RR] = JR, RR >= this.highWater && (this.highWater = RR + 1), this.uploadFrom < 0 ? (this.uploadFrom = RR, this.uploadTo = RR + 1) : RR >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, RR + 1) : this.wrapTo = Math.max(this.wrapTo, RR + 1)
      }
      shiftTimes(RR) {
        const JR = this.records,
          GR = this.highWater * ZR.g;
        for (let yR = ZR.k.time; yR < GR; yR += ZR.g) JR[yR] -= RR;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(RR) {
        this.uploadFrom >= 0 && (RR(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && RR(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(RR) {
        let JR = 0;
        for (let GR = 0; GR < this.highWater; GR++) this.deaths[GR] > RR && JR++;
        return JR
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var iR = GR(38329),
      fR = GR(39941),
      VR = GR(39943),
      KR = GR(39950);
    class wR {
      constructor() {
        this.particleEmitterType = new VR.b, this.texture = null, this.blendMode = KR.f, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = tR.Fe.Zero(), this.worldOffset = new tR.Fe(0, 0, 0), this.color1 = new iR.e(1, 1, 1, 1), this.color2 = new iR.e(1, 1, 1, 1), this.colorDead = new iR.e(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var RR;
        return null !== (RR = rR(this).direction1) && void 0 !== RR ? RR : tR.Fe.Zero()
      }
      set direction1(RR) {
        const JR = rR(this);
        JR.direction1 && (JR.direction1 = RR)
      }
      get direction2() {
        var RR;
        return null !== (RR = rR(this).direction2) && void 0 !== RR ? RR : tR.Fe.Zero()
      }
      set direction2(RR) {
        const JR = rR(this);
        JR.direction2 && (JR.direction2 = RR)
      }
      get minEmitBox() {
        var RR;
        return null !== (RR = rR(this).minEmitBox) && void 0 !== RR ? RR : tR.Fe.Zero()
      }
      set minEmitBox(RR) {
        const JR = rR(this);
        JR.minEmitBox && (JR.minEmitBox = RR)
      }
      get maxEmitBox() {
        var RR;
        return null !== (RR = rR(this).maxEmitBox) && void 0 !== RR ? RR : tR.Fe.Zero()
      }
      set maxEmitBox(RR) {
        const JR = rR(this);
        JR.maxEmitBox && (JR.maxEmitBox = RR)
      }
      createBoxEmitter(RR, JR, GR, yR) {
        const tR = new VR.b;
        return this.particleEmitterType = tR, tR.direction1 = RR, tR.direction2 = JR, tR.minEmitBox = GR, tR.maxEmitBox = yR, tR
      }
      addColorGradient(RR, JR, GR) {
        return this.colorGradients ??= [], this.colorGradients.push(new fR.c(RR, JR, GR)), this.colorGradients.sort(eR), this
      }
      removeColorGradient(RR) {
        return aR(this.colorGradients, RR), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(RR, JR, GR) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new fR.k(RR, JR, GR)), this.velocityGradients.sort(eR), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(RR, JR, GR) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new fR.k(RR, JR, GR)), this.colorRemapGradients.sort(eR), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(RR, JR) {
        return this.rampGradients ??= [], this.rampGradients.push(new fR.g(RR, JR)), this.rampGradients.sort(eR), this
      }
      removeRampGradient(RR) {
        return aR(this.rampGradients, RR), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function rR(RR) {
      return RR.particleEmitterType
    }

    function eR(RR, JR) {
      return RR.gradient < JR.gradient ? -1 : RR.gradient > JR.gradient ? 1 : 0
    }

    function aR(RR, JR) {
      const GR = RR ? RR.findIndex((RR => RR.gradient === JR)) : -1;
      GR >= 0 && RR.splice(GR, 1)
    }
    class LR extends wR {
      constructor(RR, JR, GR) {
        super(), this.name = RR, this.host = GR, this.onDispose = nR, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = tR.Fe.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.He = !1, this.emitterMatrix = new tR.Matrix, this.inverseEmitterMatrix = new tR.Matrix, this.spawned = {
          position: new tR.Fe,
          direction: new tR.Fe
        }, this.ring = new qR(JR)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(RR) {
        var JR;
        null === (JR = this.emitterDisposed) || void 0 === JR || JR.remove(), this.emitterDisposed = null, this.emitterValue = RR, RR && AR(RR) && (this.emitterDisposed = RR.YH.add((() => {
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
        return !this.He && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var RR;
        let JR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.He || (this.He = !0, null === (RR = this.emitterDisposed) || void 0 === RR || RR.remove(), this.emitterDisposed = null, JR && ((0, uR.B)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(RR) {
        const JR = this.emitter;
        return !!JR && !(AR(JR) && !JR.isEnabled()) && this.animate(RR)
      }
      animate(RR) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const JR = this.updateSpeed * RR;
        let GR;
        return this.manualEmitCount > -1 ? (GR = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (GR = this.emitRate * JR | 0, this.newPartsExcess += this.emitRate * JR - GR), this.newPartsExcess > 1 && (GR += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (GR = 0), this.alive = this.liveUntil > this.time, this.time += JR, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), GR > 0 && this.spawn(GR), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.He && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var RR;
        return this.started = !1, null === (RR = this.onAnimationEnd) || void 0 === RR || RR.call(this), !!this.He || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(RR, JR) {
        RR[JR] = this.anchor[0] + this.shift[0] + this.worldOffset.x, RR[JR + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, RR[JR + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      fJR(RR, JR) {
        this.emitterValue && AR(this.emitterValue) ? (this.shift[0] -= RR[0], this.shift[1] -= RR[1], this.shift[2] -= RR[2]) : this.worldOffset.set(-JR[0], -JR[1], -JR[2])
      }
      spawn(RR) {
        var JR, GR;
        const uR = this.emitterValue,
          qR = AR(uR) ? uR.getWorldMatrix() : tR.Matrix.TranslationToRef(uR.x, uR.y, uR.z, this.emitterMatrix);
        qR.invertToRef(this.inverseEmitterMatrix);
        const {
          position: iR,
          direction: fR
        } = this.spawned, VR = this.spawned, KR = this.ring, wR = this.liveUntil <= this.time;
        wR && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, KR.restart());
        const {
          records: rR,
          recordBits: eR
        } = KR, aR = ZR.k, LR = null === (JR = this.getColorGradients()) || void 0 === JR ? void 0 : JR[0], nR = LR ? LR.color1 : this.color1, UR = LR ? null !== (GR = LR.color2) && void 0 !== GR ? GR : LR.color1 : this.color2;
        for (let tR = 0; tR < RR; tR++) {
          const RR = KR.freeSlot(this.time);
          if (RR < 0) break;
          const JR = (0, yR.RandomRange)(this.minLifeTime, this.maxLifeTime),
            GR = (0, yR.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(qR, iR, VR, !1), this.particleEmitterType.startDirectionFunction(qR, fR, VR, !1, this.inverseEmitterMatrix), 0 === GR ? fR.set(0, 0, 0) : fR.scaleInPlace(GR);
          const uR = (0, yR.RandomRange)(this.minSize, this.maxSize);
          wR && 0 === tR && (this.anchor[0] = iR.x, this.anchor[1] = iR.y, this.anchor[2] = iR.z);
          const LR = RR * ZR.g;
          rR[LR + aR.position] = iR.x - this.anchor[0] - this.shift[0], rR[LR + aR.position + 1] = iR.y - this.anchor[1] - this.shift[1], rR[LR + aR.position + 2] = iR.z - this.anchor[2] - this.shift[2], rR[LR + aR.time] = this.time - this.epoch, rR[LR + aR.direction] = fR.x, rR[LR + aR.direction + 1] = fR.y, rR[LR + aR.direction + 2] = fR.z, rR[LR + aR.lifeTime] = JR, rR[LR + aR.size] = uR, eR[LR + aR.seed] = 4294967296 * Math.random() >>> 0;
          const WR = Math.random();
          rR[LR + aR.colour] = nR.r + (UR.r - nR.r) * WR, rR[LR + aR.colour + 1] = nR.g + (UR.g - nR.g) * WR, rR[LR + aR.colour + 2] = nR.b + (UR.b - nR.b) * WR, rR[LR + aR.colour + 3] = nR.a + (UR.a - nR.a) * WR;
          const AR = this.time + JR;
          AR > this.liveUntil && (this.liveUntil = AR), KR.written(RR, AR)
        }
      }
    }

    function nR() {}
    const UR = 5;

    function WR(RR, JR) {
      const GR = [];
      let yR = 0;
      for (const tR of RR) tR.isReady() || (yR++, GR.length < UR && GR.push(`${JR} particle system ${tR.name}`));
      return yR > GR.length && GR.push(`${yR-GR.length} more ${JR} particle systems`), GR
    }

    function AR(RR) {
      return void 0 !== RR.position
    }
  },
  53594: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => LR,
      d: () => qR,
      e: () => ZR,
      g: () => fR
    });
    var yR = GR(38329),
      tR = GR(39941),
      uR = GR(39934);

    function ZR(RR, JR, GR, yR) {
      const tR = uR.x;
      JR.fill(0), RR.gravity.toArray(JR, tR.gravity), RR.colorDead.toArray(JR, tR.colorDead), GR[tR.ramp] = RR.useRampGradients ? 1 : 0;
      const ZR = RR.getColorGradients(),
        qR = wR(RR, ZR, "colour", yR);
      GR[tR.colorCount] = qR;
      for (let uR = 0; uR < qR; uR++) {
        var iR;
        const RR = ZR[rR(ZR, uR)];
        JR[tR.colorPositions + uR] = RR.gradient, RR.color1.toArray(JR, tR.color1 + 4 * uR), (null !== (iR = RR.color2) && void 0 !== iR ? iR : RR.color1).toArray(JR, tR.color2 + 4 * uR)
      }
      const fR = RR.getVelocityGradients(),
        VR = wR(RR, fR, "BL", yR);
      GR[tR.velocityCount] = VR;
      for (let uR = 0; uR < VR; uR++) UR(JR, tR.BL + 4 * uR, fR[rR(fR, uR)]);
      const KR = RR.useRampGradients ? RR.getColorRemapGradients() : null,
        eR = wR(RR, KR, "colour remap", yR);
      GR[tR.remapCount] = eR;
      for (let uR = 0; uR < eR; uR++) UR(JR, tR.remap + 4 * uR, KR[rR(KR, uR)])
    }

    function qR() {
      return {
        key: [],
        texels: new Uint8Array(4 * uR.o)
      }
    }
    const iR = [];

    function fR(RR, JR) {
      return VR(RR, iR), !nR(iR, JR.key) && (JR.key.length = 0, JR.key.push(...iR), JR.key.length > 0 && function(RR, JR) {
        for (let GR = 0; GR < uR.o; GR++) tR.m.GetCurrentGradient(GR / uR.o, RR, ((RR, JR, GR) => {
          yR.Color3.LerpToRef(RR.color, JR.color, GR, KR)
        })), JR[4 * GR] = 255 * KR.r, JR[4 * GR + 1] = 255 * KR.g, JR[4 * GR + 2] = 255 * KR.b, JR[4 * GR + 3] = 255
      }(RR.getRampGradients(), JR.texels), !0)
    }

    function VR(RR, JR) {
      JR.length = 0;
      const GR = RR.useRampGradients ? RR.getRampGradients() : null;
      if (null !== GR && void 0 !== GR && GR.length) {
        JR.push(GR.length);
        for (const RR of GR) JR.push(RR.gradient, RR.color.r, RR.color.g, RR.color.b)
      }
    }
    const KR = new yR.Color3;

    function wR(RR, JR, GR, yR) {
      return JR ? JR.length > uR.c ? (yR(`particleStops:${GR}`, `GPU particles use the first 2 and last ${uR.c-2} of more than ${uR.c} ${GR} gradient stops (${RR.name})`), uR.c) : JR.length : 0
    }

    function rR(RR, JR) {
      return JR < 2 || RR.length <= uR.c ? JR : RR.length - uR.c + JR
    }
    const eR = new Float32Array(uR.t),
      aR = new Uint32Array(eR.buffer);

    function LR(RR, JR, GR) {
      return ZR(RR, eR, aR, GR), JR && nR(aR, JR) ? null : aR.slice()
    }

    function nR(RR, JR) {
      if (RR.length !== JR.length) return !1;
      for (let GR = 0; GR < RR.length; GR++)
        if (RR[GR] !== JR[GR]) return !1;
      return !0
    }

    function UR(RR, JR, GR) {
      var yR;
      RR[JR] = GR.gradient, RR[JR + 1] = GR.factor1, RR[JR + 2] = null !== (yR = GR.factor2) && void 0 !== yR ? yR : GR.factor1
    }
  },
  42704: (RR, JR, GR) => {
    function yR(RR, JR, GR) {
      const yR = JR * JR * 4,
        tR = RR[0].layers,
        uR = tR * (RR.length - 1) + RR[RR.length - 1].layers,
        ZR = new Uint8Array(uR * yR);
      RR.forEach(((JR, GR) => {
        const uR = GR + 1 < RR.length ? Math.min(JR.layers, tR) : JR.layers;
        ZR.set(new Uint8Array(JR.pixels.buffer, JR.pixels.byteOffset, uR * yR), GR * tR * yR)
      }));
      const qR = Math.max(1, Math.min(uR, GR || uR));
      if (qR === uR) return [{
        pixels: ZR,
        layers: uR
      }];
      const iR = [];
      for (let fR = 0; fR < uR; fR += qR) {
        const RR = Math.min(uR, fR + qR);
        iR.push({
          pixels: ZR.slice(fR * yR, RR * yR),
          layers: RR - fR
        })
      }
      return iR
    }
    GR.d(JR, {
      b: () => yR,
      c: () => uR
    });
    const tR = new WeakMap;

    function uR(RR, JR, GR) {
      var yR, uR;
      const ZR = null !== (yR = tR.get(RR)) && void 0 !== yR ? yR : new Map;
      tR.set(RR, ZR);
      const qR = null !== (uR = ZR.get(JR[0])) && void 0 !== uR ? uR : [];
      ZR.set(JR[0], qR);
      const iR = qR.find((RR => RR.urls.length === JR.length && RR.urls.every(((RR, GR) => RR === JR[GR]))));
      if (iR) return iR.built;
      const fR = {
        urls: [...JR],
        built: GR()
      };
      return qR.push(fR), fR.built.catch((() => {
        qR.splice(qR.indexOf(fR), 1)
      })), fR.built
    }
  },
  39950: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      f: () => tR,
      i: () => iR,
      m: () => KR
    });
    var yR = GR(38325);
    const tR = 0,
      uR = 3,
      ZR = 4,
      qR = new Map([
        [tR, yR.d.ALPHA_ONEONE],
        [1, yR.d.ALPHA_COMBINE],
        [2, yR.d.ALPHA_ADD],
        [uR, yR.d.ALPHA_MULTIPLY],
        [-1, yR.d.ALPHA_SUBTRACT]
      ]);

    function iR(RR) {
      var JR;
      return null !== (JR = qR.get(RR)) && void 0 !== JR ? JR : RR
    }
    const fR = [uR, 2],
      VR = new Map;

    function KR(RR) {
      if (RR === ZR) return fR;
      let JR = VR.get(RR);
      return JR || (JR = [RR], VR.set(RR, JR)), JR
    }
  },
  53589: (RR, JR, GR) => {
    function yR() {
      let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const JR = new Set;
      return (GR, yR) => {
        JR.has(GR) || (JR.add(GR), console.warn(RR + yR))
      }
    }
    GR.d(JR, {
      d: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);