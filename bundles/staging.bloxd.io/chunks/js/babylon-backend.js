export const id = 0;
export const ids = [0];
export const modules = {
  42124: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CapeMaterialPlugin: () => AB,
      HueTintMaterialPlugin: () => VB,
      LifeformMaterialPlugin: () => SB,
      OverlayMaterialPlugin: () => nB
    });
    var YB = GB(42129),
      DB = GB(38682);
    class QB extends((0, YB.e)(DB.e)) {}(0, YB.h)(DB.e, QB);
    var oB = GB(38005);
    class jB extends((0, YB.e)(oB.f)) {}(0, YB.h)(oB.f, jB);
    var yB = GB(38531);
    class JB extends((0, YB.e)(yB.f)) {}(0, YB.h)(yB.f, JB);
    var MB = GB(38025),
      PB = GB(41258),
      zB = GB(38019);
    class lB extends((0, YB.e)(zB.f)) {
      constructor(BB, OB, GB) {
        super(BB, OB, GB), (0, MB.j)(BB)
      }
      dispose(BB) {
        (0, MB.m)(this._material), super.dispose(BB)
      }
    }(0, YB.h)(zB.f, lB), (0, zB.g)({
      disableUnusedSpecularTerm: YB.b,
      isLightingDisabled: BB => BB instanceof PB.StandardMaterial && BB.disableLighting
    });
    var pB = GB(39376);
    class qB extends((0, YB.e)(pB.d)) {}(0, YB.h)(pB.d, qB);
    var ZB = GB(39497),
      NB = GB(37899),
      RB = GB(38801),
      WB = GB(38011);
    class AB extends((0, YB.e)(ZB.d)) {}(0, YB.h)(ZB.d, AB);
    class VB extends((0, YB.e)(NB.d)) {}(0, YB.h)(NB.d, VB);
    class SB extends((0, YB.e)(RB.l)) {}(0, YB.h)(RB.l, SB);
    class nB extends((0, YB.e)(WB.c)) {}(0, YB.h)(WB.c, nB)
  },
  44687: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      addBabylonLights: () => dO,
      createSceneParticleSystem: () => IO,
      default: () => iO
    });
    var YB = GB(44689),
      DB = (GB(40974), GB(42118), GB(41472), GB(44699)),
      QB = GB(37885),
      oB = GB(37771),
      jB = GB(44709),
      yB = GB(44712),
      JB = GB(37962),
      MB = (GB(42129), GB(44726)),
      PB = GB(44718),
      zB = GB(39412),
      lB = GB(44732),
      pB = GB(40864),
      qB = GB(39388);
    const ZB = "gpuParticles",
      NB = "gpuParticlesSummed",
      RB = qB.v,
      WB = BB => BB / 4,
      AB = (BB, OB, GB, YB) => Array.from({
        length: OB
      }, ((DB, QB) => `(${((BB,OB,GB)=>0===OB?`${BB} < 1`:OB===GB-1?`${BB} >= ${OB}`:`${BB} == ${OB}`)(BB,QB,OB)} ? ${GB(QB)} : ${YB})`)).join("\n\t\t+ "),
      VB = (BB, OB, GB) => `vec4 ${BB}(int i) {\n\treturn ${AB("i",GB,(BB=>`gpuParticleSystem[${OB+BB}]`),"vec4(0.0)")};\n}\n`,
      SB = `\n${VB("colorPositionsAt",WB(RB.colorPositions),qB.b/4)}\n${VB("color1At",WB(RB.color1),qB.b)}\n${VB("color2At",WB(RB.color2),qB.b)}\n${VB("velocityAt",WB(RB.lZ),qB.b)}\n${VB("remapStopAt",WB(RB.remap),qB.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${AB("j",4,(BB=>`v[${BB}]`),"0.0")};\n}\n`,
      nB = (BB, OB, GB, YB) => BB ? `${GB}(${YB})` : `gpuParticleSystem[${OB} + ${YB}]`,
      UB = BB => `gpuParticleSystem[${BB>>2}].${"xyzw"[3&BB]}`,
      fB = BB => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${qB.b}\n#define COLOR_POSITIONS ${WB(RB.colorPositions)}\n#define COLOR1 ${WB(RB.color1)}\n#define COLOR2 ${WB(RB.color2)}\n#define VELOCITY ${WB(RB.lZ)}\n#define REMAP ${WB(RB.remap)}\n#define RECORDS_PER_ROW ${qB.j}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${qB.n/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${UB(RB.gravity)}, ${UB(RB.gravity+1)}, ${UB(RB.gravity+2)}); }\nint colorCount() { return int(${UB(RB.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${WB(RB.colorDead)}]; }\nint velocityCount() { return int(${UB(RB.velocityCount)}); }\nint remapCount() { return int(${UB(RB.remapCount)}); }\n${BB?SB:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${BB?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${nB(BB,"COLOR1","color1At","i")}, ${nB(BB,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${nB(BB,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${nB(BB,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${nB(BB,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${nB(BB,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${nB(BB,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${nB(BB,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${nB(BB,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      kB = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    pB.b.ShadersStore[`${ZB}VertexShader`] = fB(!1), pB.b.ShadersStore[`${ZB}PixelShader`] = kB, pB.b.ShadersStore[`${NB}VertexShader`] = fB(!0), pB.b.ShadersStore[`${NB}PixelShader`] = kB;
    const dB = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      KB = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var uB = GB(39385),
      mB = GB(44735);
    class IB extends uB.b {
      constructor(BB, OB, GB, YB) {
        super(BB, OB, GB), this.renderer = GB, this.eq = YB, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(qB.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, mB.g)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (BB, OB) => {
          const {
            engine: GB
          } = this, YB = GB._gl;
          GB._bindTextureDirectly(YB.TEXTURE_2D, this.records, !0), GB._unpackFlipY(!1);
          const DB = this.ring.recordBits;
          for (let QB = BB; QB < OB;) {
            const BB = Math.floor(QB / qB.j),
              GB = Math.min(OB, (BB + 1) * qB.j);
            YB.texSubImage2D(YB.TEXTURE_2D, 0, QB % qB.j * 4, BB, 4 * (GB - QB), 1, YB.RGBA_INTEGER, YB.UNSIGNED_INT, DB, QB * qB.d), QB = GB
          }
          GB._bindTextureDirectly(YB.TEXTURE_2D, null)
        }, this.id = BB;
        const DB = YB.Lp();
        this.engine = DB;
        const QB = Math.max(1, OB),
          oB = Math.min(QB, qB.j);
        this.records = DB.createRawTexture(null, 4 * oB, Math.ceil(QB / oB), MB.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, MB.b.TEXTURE_NEAREST_SAMPLINGMODE, null, MB.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.eq.getAnimationRatio() || 1;
        const OB = this.eq.getFrameId();
        if (OB === this.animatedFrame) return !1;
        const GB = super.animate(BB);
        return GB && (this.animatedFrame = OB, this.ring.takeUploads(this.uploadSlots)), GB
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(BB) {
        (0, mB.j)(this, this.uniforms, this.uniformBits, BB);
        for (const GB of qB.r) this.uniforms[GB] = this.uniformBits[GB];
        var OB;
        (0, mB.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (OB = this.ramp) || void 0 === OB || OB.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = PB.d.CreateRGBATexture(this.rampTexels.texels, qB.h, 1, this.eq, !1, !1, MB.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var BB;
        this.records.dispose(), null === (BB = this.ramp) || void 0 === BB || BB.dispose(), this.ramp = null
      }
    }
    const FB = "the context was lost before the programs linked";
    class iB {
      constructor(BB, OB) {
        this.eq = BB, this.reportFailure = OB, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = ZB, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, lB.c)(), this.engine = BB.Lp(), this.whiteRamp = PB.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, BB, !1, !1, MB.b.TEXTURE_NEAREST_SAMPLINGMODE);
        const GB = this.linkPair(ZB),
          YB = null !== GB && GB !== FB ? this.linkPair(NB) : GB;
        null === YB && null !== GB ? (console.warn(`GPU particles link their fallback here: ${GB}`), this.reportFailure(GB, !0)) : null !== YB && this.fail(YB === FB ? FB : null !== GB && void 0 !== GB ? GB : YB)
      }
      gL(BB, OB) {
        const GB = qB.j * this.engine.getCaps().maxTextureSize;
        OB > GB && this.warnOnce(`capacity:${BB}`, `particle system ${BB} holds ${GB} particles, not ${OB}: its records texture's limit`);
        const YB = new IB(BB, Math.min(OB, GB), this, this.eq);
        return this.eq.addParticleSystem(YB), YB
      }
      canDraw(BB) {
        var OB, GB;
        if (this.failed || null === (OB = BB.texture) || void 0 === OB || null === (GB = OB.mirror) || void 0 === GB || !GB.isReady()) return !1;
        for (const YB of (0, zB.o)(BB.blendMode))
          if (!this.effectFor(YB).isReady()) return !1;
        return !0
      }
      disposeStopped(BB) {
        this.eq._toBeDisposed.push(BB)
      }
      remove(BB) {
        this.eq.removeParticleSystem(BB), BB.releaseGl()
      }
      render(BB) {
        var OB;
        if (!BB.isReady() || !BB.hasLiveParticles()) return 0;
        const {
          engine: GB,
          eq: YB,
          frame: DB
        } = this;
        BB.prepareDraw(this.warnOnce), BB.drawOffset(DB, 0), DB[3] = BB.drawTime();
        const QB = BB.ring.drawStart(),
          oB = BB.ring.drawCount(),
          jB = null !== (OB = BB.ramp) && void 0 !== OB ? OB : this.whiteRamp;
        GB.setState(!1);
        for (const yB of (0, zB.o)(BB.blendMode)) {
          const OB = this.effectFor(yB);
          GB.enableEffect(OB), OB.setTexture("gpuParticleTexture", BB.texture.mirror), OB.setTexture("gpuParticleRampTexture", jB), OB._bindTexture("gpuParticleRecords", BB.records), OB.setMatrix("gpuParticleView", YB.getViewMatrix()), OB.setMatrix("gpuParticleProjection", YB.getProjectionMatrix()), OB.setFloatArray4("gpuParticleSystem", BB.uniforms), OB.setFloat4("gpuParticleFrame", DB[0], DB[1], DB[2], DB[3]), OB.setFloat2("gpuParticleRange", QB, oB), OB.setFloat("gpuParticleRamp", BB.uniforms[qB.v.ramp]), GB.bindBuffers(this.vertexBuffers, null, OB), GB.setAlphaMode((0, zB.k)(yB)), GB.drawArraysType(MB.b.MATERIAL_TriangleStripDrawMode, 0, 4, oB), OB._bindTexture("gpuParticleRecords", null)
        }
        return GB.setAlphaMode(MB.b.ALPHA_DISABLE), oB
      }
      linkPair(BB) {
        this.shader = BB, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(BB, ""), this.multiplyEffect = this.createEffect(BB, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(BB) {
        const OB = BB.getPipelineContext(),
          GB = this.gl();
        GB && null === this.pairFailure && (!OB || OB.isParallelCompiled && !OB.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : OB.isParallelCompiled && OB.program && (GB.getProgramParameter(OB.program, GB.LINK_STATUS) || this.programFailed(function(BB, OB, GB) {
          if (BB.isContextLost()) return FB;
          for (const [YB, DB] of [
              ["VERTEX SHADER", OB.vertexShader],
              ["FRAGMENT SHADER", OB.fragmentShader]
            ]) {
            const OB = DB && !BB.getShaderParameter(DB, BB.COMPILE_STATUS) ? BB.getShaderInfoLog(DB) : null;
            if (OB) return `${YB} ${OB}`
          }
          return BB.getProgramInfoLog(GB) || "a program did not link"
        }(GB, OB, OB.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(BB) {
        return BB === zB.d ? this.multiplyEffect : this.effect
      }
      createEffect(BB, OB) {
        return this.engine.createEffect(BB, [], dB, KB, OB, void 0, void 0, ((OB, GB) => {
          var YB;
          BB === this.shader && this.programFailed(null !== (YB = this.gl()) && void 0 !== YB && YB.isContextLost() ? FB : function(BB) {
            const OB = BB.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(OB) ? "a program failed, its log not in this browser's stack" : OB.replace(/^Error: /, "")
          }(GB))
        }))
      }
      programFailed(BB) {
        this.linkingPair ? this.pairFailure ??= BB : this.fail(BB)
      }
      fail(BB) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${BB}`), this.reportFailure(BB, !1);
          for (const BB of this.eq.rW.slice()) BB instanceof IB && BB.disposeOnStop && BB.dispose()
        }
      }
    }
    var LB = GB(40825);
    class gB extends LB.c {
      createEffect() {
        const BB = super.createEffect(...arguments);
        return XB(BB), rB.has(BB) || (rB.add(BB), BB.onCompileObservable.add((() => {
          XB(BB)
        }))), BB
      }
    }
    const rB = new WeakSet;

    function XB(BB) {
      BB._vertexSourceCodeBeforeMigration = "", BB._fragmentSourceCodeBeforeMigration = ""
    }
    var wB = GB(41213),
      EB = GB(42111),
      cB = GB(40950),
      hB = GB(41180),
      aB = GB(41171),
      eB = GB(41089),
      TB = GB(42169),
      bB = GB(38193),
      CB = GB(44737),
      HB = GB(44746),
      vB = GB(44748),
      sB = GB(41112),
      xB = GB(3187),
      tB = GB(38094),
      BO = GB(41307),
      OO = GB(38156),
      GO = GB(38108);

    function YO(BB) {
      if (BB.visibility < 1 || !BB.isVisible || !BB.isEnabled() || BB.metadata[GO.e] || !BB.isReady()) return !0;
      const OB = BB.iW;
      if (!OB || 0 === OB.length) return !0;
      for (let GB = 0; GB < OB.length; GB++) {
        const YB = OB[GB],
          DB = YB.cp();
        if (!DB || !DB.isReadyForSubMesh(BB, YB, !1)) return !0
      }
      return !1
    }
    class DO {
      constructor(BB, OB) {
        this.kz = BB, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, OB.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      ZP(BB) {
        var OB;
        const GB = this.armed;
        if (this.armed = !1, this.vis = null, !GB) return !1;
        this.culled = 0;
        const {
          kz: YB
        } = this, DB = null === (OB = YB.pW) || void 0 === OB ? void 0 : OB.visibility;
        if (!DB || !BB || YB.UP.Dq) return !1;
        if (!(YB.mP.gDB[0] >= OO.e)) return !1;
        const QB = BB.getProjectionMatrix().m;
        if (0 !== QB[15]) return !1;
        const oB = YB.Tz,
          jB = BB.globalPosition,
          yB = this.eye;
        return yB[0] = jB.x + oB[0], yB[1] = jB.y + oB[1], yB[2] = jB.z + oB[2], !!DB.eyeClear(yB[0], yB[1], yB[2], BB.minZ, QB, YB.mP) && (this.vis = DB, this.passable.clear(), this.count = 0, !0)
      }
      see(BB, OB) {
        const GB = this.count++;
        if (GB === this.cellSlots.length) {
          const BB = new Int32Array(2 * GB);
          BB.set(this.cellSlots), this.cellSlots = BB
        }
        this.cellSlots[GB] = OB, this.meshes[GB] = BB
      }
      seeThrough(BB) {
        this.passable.add(BB)
      }
      finish(BB, OB) {
        const {
          vis: GB,
          eye: YB,
          meshes: DB,
          count: QB,
          cellSlots: oB
        } = this, {
          mP: jB
        } = this.kz, [yB, JB] = jB.gDB, MB = null !== GB && GB.update(YB[0], YB[1], YB[2], jB.qP, yB, JB, this.passable);
        let PB = 0;
        for (let zB = 0; zB < QB; zB++) {
          const YB = DB[zB];
          if (MB) {
            const BB = 3 * oB[zB];
            if (BB >= 0 && !GB.isDrawn(OB[BB], OB[BB + 1], OB[BB + 2])) {
              PB++;
              continue
            }
          }
          sB.d.prototype.push.call(BB, YB)
        }
        DB.fill(null, 0, QB), this.count = 0, this.vis = null, this.culled = PB
      }
    }
    var QO = GB(38146),
      oO = GB(38100),
      jO = GB(41283),
      yO = GB(44751),
      JO = GB(41287),
      MO = GB(41220);
    let PO = 1;
    const zO = new WeakSet;

    function lO() {
      return PO
    }

    function pO() {
      PO = PO >= 1073741823 ? 1 : PO + 1
    }

    function qO(BB) {
      const OB = BB.metadata;
      if (!OB || !0 !== OB[tB.q]) return;
      const GB = OB[tB.t],
        YB = null === GB || void 0 === GB ? void 0 : GB._noaStamps;
      if (!GB || !YB) return;
      const DB = GB.entries.indexOf(BB);
      DB >= 0 && (YB[DB] = 0)
    }

    function ZO(BB) {
      const OB = BB.iW;
      for (let GB = 0; GB < OB.length; GB++) {
        const BB = OB[GB].cp();
        if (BB && !BB.isFrozen) return !1
      }
      for (let GB = 0; GB < OB.length; GB++) {
        const BB = OB[GB].cp();
        BB && zO.add(BB)
      }
      return !0
    }
    let NO = !1;
    const RO = new WeakSet;

    function WO(BB, OB) {
      const GB = BB[OB];
      if ("function" !== typeof GB) throw new Error(`terrainDrawState: Babylon has no ${OB} to hook`);
      return GB
    }

    function AO(BB, OB, GB, YB, DB) {
      const QB = GB.mP.qP,
        oB = new Map;
      let jB = 0;
      const yB = new DO(GB, BB),
        JB = new QO.d(QB, BB.Lp());
      ! function(BB) {
        if (RO.has(BB) || (RO.add(BB), BB.onContextLostObservable.add(pO), BB.ip.add(pO)), NO) return;
        NO = !0;
        const OB = yO.b.prototype,
          GB = WO(OB, "_markSubMeshesAsDirty");
        Object.assign(OB, {
          _markSubMeshesAsDirty(BB) {
            GB.call(this, BB), qO(this)
          }
        });
        const YB = WO(MO.b.prototype, "_syncParentEnabledState");
        Object.assign(MO.b.prototype, {
          _syncParentEnabledState() {
            YB.call(this), qO(this)
          }
        });
        const DB = WO(JO.c.prototype, "resetDrawCache");
        JO.c.prototype.resetDrawCache = function(BB, OB) {
          DB.call(this, BB, OB), qO(this.getMesh())
        };
        const QB = jO.b.prototype,
          oB = WO(QB, "markDirty");
        QB.markDirty = function(BB) {
          oB.call(this, BB), zO.has(this) && pO()
        };
        const jB = WO(QB, "_markAllSubMeshesAsDirty");
        Object.assign(QB, {
          _markAllSubMeshesAsDirty(BB) {
            jB.call(this, BB), zO.has(this) && pO()
          }
        })
      }(BB.Lp());
      let MB = new Float64Array(384),
        PB = new Int32Array(64),
        zB = new Uint8Array(64),
        lB = new Float64Array(64),
        pB = new Int32Array(192),
        qB = 0;
      const ZB = [],
        NB = new Float64Array(24),
        RB = () => {
          const BB = ZB.pop();
          return void 0 !== BB ? (PB[BB] = 0, BB) : (qB === PB.length && (MB = VO(MB, new Float64Array(2 * MB.length)), PB = VO(PB, new Int32Array(2 * PB.length)), zB = VO(zB, new Uint8Array(2 * zB.length)), lB = VO(lB, new Float64Array(2 * lB.length)), pB = VO(pB, new Int32Array(2 * pB.length))), qB++)
        },
        WB = BB => {
          const OB = 6 * BB._noaSlot,
            GB = BB.aDB[0],
            YB = BB.aDB[1];
          MB[OB] = GB.x, MB[OB + 1] = GB.y, MB[OB + 2] = GB.z, MB[OB + 3] = YB.x, MB[OB + 4] = YB.y, MB[OB + 5] = YB.z
        },
        AB = (BB, OB, GB) => {
          if (!GB) return yB.see(BB, -1), !1;
          const YB = YO(BB);
          return YB && yB.seeThrough(lB[OB]), yB.see(BB, OB), !YB
        };
      let VB = -1;
      return BB.getActiveMeshCandidates = () => {
        const GB = BB.frustumPlanes,
          YB = OB._selectionContent;
        YB.reset(), (GB => {
          const YB = BB.frustumPlanes;
          jB = jB + 1 | 0 || 1;
          const DB = OB.blocks,
            QB = yB.ZP(BB.activeCamera),
            oB = QB && !0;
          if (oB) {
            const OB = BB.Lp().currentRenderPassId;
            OB !== VB && (VB = OB, pO())
          }
          const JB = lO(),
            lB = oB && !1;
          DB.length > 0 && function(BB, OB) {
            for (let GB = 0; GB < 6; GB++) {
              const YB = BB[GB],
                DB = YB.normal;
              OB[4 * GB] = DB.x, OB[4 * GB + 1] = DB.y, OB[4 * GB + 2] = DB.z, OB[4 * GB + 3] = YB.d
            }
          }(YB, NB);
          const qB = MB,
            ZB = PB,
            RB = zB;
          for (let BB = 0; BB < DB.length; BB++) {
            const OB = DB[BB];
            if (!BO.c.IsInFrustum(OB.aDB, YB)) continue;
            const MB = OB.entries;
            {
              const BB = OB._noaSlots,
                YB = OB._noaStamps,
                DB = OB._noaTerrain;
              for (let OB = 0; OB < MB.length; OB++) {
                const PB = BB[OB];
                if (ZB[PB] !== jB && (ZB[PB] = jB, RB[PB] = SO(qB, 6 * PB, NB) ? 1 : 0), 0 === RB[PB]) continue;
                const zB = MB[OB];
                if (oB && YB[OB] === JB) lB && 1 === DB[OB] && YO(zB) && 0, yB.see(zB, 1 === DB[OB] ? PB : -1);
                else if (oB) {
                  YB[OB] = JB;
                  const BB = !0 === zB.metadata[oO.k];
                  DB[OB] = BB ? 1 : 0;
                  const GB = AB(zB, PB, BB);
                  !BB || GB && ZO(zB) || (YB[OB] = 0)
                } else QB ? AB(zB, PB, !0 === zB.metadata[oO.k]) : sB.d.prototype.push.call(GB, zB)
              }
              continue
            }
          }
          QB && yB.finish(GB, pB)
        })(YB), JB.apply(YB, BB.activeCamera);
        const QB = OB.hDB;
        for (let BB = 0; BB < QB.length; BB++) {
          const OB = QB[BB];
          OB.isEnabled() && sB.d.prototype.push.call(YB, OB)
        }
        return DB(YB, GB), YB
      }, {
        eDB: () => yB.culled,
        UDB: (BB, OB) => {
          const DB = Math.floor(OB[0] / QB),
            jB = Math.floor(OB[1] / QB),
            yB = Math.floor(OB[2] / QB),
            JB = `${DB}|${jB}|${yB}`;
          let MB = oB.get(JB);
          if (!MB) {
            const BB = [0, 0, 0];
            GB.IGB([DB * QB - 1, jB * QB - 1, yB * QB - 1], null, BB), MB = Object.assign(YB(BB, QB + 2), {
              TDB: JB,
              bDB: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: RB()
            }), WB(MB), lB[MB._noaSlot] = (0, xB.i)(DB, jB, yB), pB[3 * MB._noaSlot] = DB, pB[3 * MB._noaSlot + 1] = jB, pB[3 * MB._noaSlot + 2] = yB, oB.set(JB, MB)
          }
          MB.bDB++, BB.metadata[tB.u] = MB
        },
        sF: BB => {
          const OB = BB.metadata[tB.u];
          OB && (OB.bDB--, OB.bDB <= 0 && (oB.delete(OB.TDB), ZB.push(OB._noaSlot)), BB.metadata[tB.u] = null)
        },
        cDB: (BB, OB) => {
          const GB = BB,
            YB = OB.metadata[tB.u];
          (GB._noaSlots ??= []).push(YB._noaSlot), (GB._noaStamps ??= []).push(0), (GB._noaTerrain ??= []).push(0), GB.entries.push(OB)
        },
        removeEntry: (BB, OB) => {
          const GB = BB,
            YB = GB.entries,
            DB = YB.indexOf(OB);
          if (DB < 0) return;
          const QB = GB._noaSlots,
            oB = GB._noaStamps,
            jB = GB._noaTerrain,
            yB = YB.length - 1;
          YB[DB] = YB[yB], QB[DB] = QB[yB], oB[DB] = oB[yB], jB[DB] = jB[yB], YB.pop(), QB.pop(), oB.pop(), jB.pop()
        },
        POB: BB => {
          for (const OB of oB.values()) {
            OB.LDB.CDB(BB), OB.iDB.CDB(BB);
            for (const GB of OB.aDB) GB.CDB(BB);
            WB(OB)
          }
        }
      }
    }

    function VO(BB, OB) {
      return OB.set(BB), OB
    }

    function SO(BB, OB, GB) {
      const YB = BB[OB],
        DB = BB[OB + 1],
        QB = BB[OB + 2],
        oB = BB[OB + 3],
        jB = BB[OB + 4],
        yB = BB[OB + 5];
      for (let JB = 0; JB < 24; JB += 4) {
        const BB = GB[JB],
          OB = GB[JB + 1],
          MB = GB[JB + 2];
        if (!(BB * (BB >= 0 ? oB : YB) + OB * (OB >= 0 ? jB : DB) + MB * (MB >= 0 ? yB : QB) + GB[JB + 3] >= 0)) return !1
      }
      return !0
    }
    var nO = GB(38440);
    class UO {
      constructor(BB, OB) {
        var GB = BB.eq;
        GB.pDB(new vB.b(GB));
        var YB = new CB.d(yB);
        GB.vDB = YB, YB.blocks = [];
        var DB, QB = {},
          jB = [];
        this.textPlanes = jB, this.eDB = () => DB.eDB(), this.POB = BB => {
          MB(YB, BB), DB.POB(BB)
        }, this.UDB = (OB, GB, oB) => {
          if (!OB.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!OB.metadata[tB.t] && !OB.metadata[tB.o]) {
            if (!GB) {
              var yB = YB.hDB;
              if (OB.metadata[tB.A] && !OB.parent) {
                yB = jB;
                var MB = OB.Gw().xDB;
                OB.metadata[tB.D] = MB.center.length() + MB.radius, OB.rp = !0
              }
              return yB.push(OB), OB.metadata[tB.h] = yB, void(OB.metadata[tB.o] = !0)
            }
            var zB = Math.floor(oB[0] / JB),
              lB = Math.floor(oB[1] / JB),
              pB = Math.floor(oB[2] / JB),
              qB = zB + "|" + lB + "|" + pB,
              ZB = QB[qB];
            if (!ZB) {
              var NB = [zB * JB, lB * JB, pB * JB],
                RB = [0, 0, 0];
              BB.kz.IGB(NB, null, RB), ZB = PB(RB, JB), YB.blocks.push(ZB), QB[qB] = ZB, ZB.TDB = qB
            }
            DB.UDB(OB, oB), DB.cDB(ZB, OB), ZB.bDB = (ZB.bDB || 0) + 1, OB.metadata[tB.t] = ZB, OB.metadata[tB.q] = !0, OB.rp = !0
          }
        }, this.sF = BB => {
          if (BB.metadata) {
            BB.metadata[tB.o] && ((0, xB.p)(BB.metadata[tB.h], BB), BB.metadata[tB.o] = !1), BB.metadata[tB.h] === jB && (BB.rp = !1), BB.metadata[tB.h] = void 0, BB.metadata[tB.D] = void 0;
            var OB = BB.metadata[tB.t];
            OB && OB.entries && (BB.metadata[tB.q] && DB.removeEntry(OB, BB), OB.bDB--, OB.bDB <= 0 && (delete QB[OB.TDB], (0, xB.p)(YB.blocks, OB))), DB.sF(BB), BB.metadata[tB.t] = null, BB.metadata[tB.q] = !1
          }
        }, this.EBB = function(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (BB.metadata[tB.t]) {
            if (BB.metadata[tB.q] === OB) return;
            var GB = BB.metadata[tB.t];
            GB && GB.entries && (OB ? DB.cDB(GB, BB) : DB.removeEntry(GB, BB)), BB.metadata[tB.q] = OB
          } else {
            if (BB.metadata[tB.o] === OB) return;
            var QB = BB.metadata[tB.h] || YB.hDB;
            OB ? QB.push(BB) : (0, xB.p)(QB, BB), BB.metadata[tB.o] = OB
          }
        };
        var yB = () => {},
          JB = OB * BB.kz.mP.qP,
          MB = (BB, OB) => {
            BB.blocks.forEach((BB => {
              BB.LDB.CDB(OB), BB.iDB.CDB(OB), BB.aDB.forEach((BB => BB.CDB(OB))), BB.blocks && MB(BB, OB)
            }))
          },
          PB = (BB, OB) => {
            var GB = new oB.Xp(BB[0], BB[1], BB[2]),
              YB = new oB.Xp(BB[0] + OB, BB[1] + OB, BB[2] + OB);
            return new HB.b(GB, YB, void 0, void 0, void 0, yB)
          };
        DB = AO(GB, YB, BB.kz, PB, ((BB, OB) => {
          for (var GB = 0; GB < jB.length; GB++) {
            var YB = jB[GB];
            YB.isEnabled(!1) && ((0, nO.c)(YB, OB) && sB.d.prototype.push.call(BB, YB))
          }
        }))
      }
    }

    function fO(BB) {
      const {
        holderPosition: OB,
        holderRotation: GB,
        q_: YB,
        fov: DB,
        near: QB,
        far: oB
      } = BB.model.p_, jB = BB.QQB;
      jB.position.zOB(OB[0], OB[1], OB[2]), jB.rotation.zOB(GB[0], GB[1], GB[2]);
      const yB = BB.camera;
      yB.position.zOB(YB[0], YB[1], YB[2]), yB.fov = DB, yB.minZ = QB, yB.maxZ = oB
    }

    function kO(BB) {
      const OB = BB.Lp(),
        GB = OB,
        YB = GB._gl;
      if (!YB || GB.Pq < 2 || OB.fDB || YB.getParameter(YB.DEPTH_BITS) < 24) return !1;
      const DB = BB._renderingManager,
        QB = DB.getRenderingGroup(-1),
        oB = DB.getRenderingGroup(0),
        jB = hB.e.prototype.render;
      return QB.render = function(BB, OB, GB, YB, DB, QB, yB, JB, MB) {
        (BB || oB._empty) && jB.call(this, BB, OB, GB, YB, DB, QB, yB, JB, MB)
      }, oB.render = function(BB, GB, DB, oB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          JB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          zB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          lB = arguments.length > 8 ? arguments[8] : void 0;
        BB ? jB.call(this, BB, GB, DB, oB, yB, JB, PB, zB, lB) : (OB.setAlphaMode(MB.b.ALPHA_DISABLE), jB.call(this, null, !1, !1, oB, yB, JB, PB, !1), QB._empty || (YB.depthRange(1, 1), jB.call(QB, null, GB, DB, oB, yB, JB, PB, zB, lB), YB.depthRange(0, 1)), jB.call(this, null, GB, DB, oB, !1, !1, !1, zB, lB))
      }, !0
    }

    function dO(BB, OB) {
      return [OB, bB.g].map(((OB, GB) => {
        const YB = new DB.b("light", oB.Xp.FromArray(OB), BB);
        return YB.diffuse = QB.Color3.FromArray([1, 1, 1]), YB.specular = QB.Color3.FromArray([1, 1, 1]), YB.intensity = bB.e[GB], YB
      }))
    }
    class KO extends yB.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(BB) {
        var OB;
        this.heldTexture = BB, this.particleTexture = null !== (OB = null === BB || void 0 === BB ? void 0 : BB.mirror) && void 0 !== OB ? OB : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        BB && (this.particleTexture = null, (0, JB.w)(this.heldTexture), this.heldTexture = null), super.dispose(BB, OB, GB)
      }
    }

    function uO(BB, OB, GB, YB) {
      return OB && !OB.failed ? OB.gL(GB, YB) : new KO(GB, YB, BB)
    }
    const mO = new WeakMap;

    function IO(BB, OB, GB) {
      var YB;
      let DB = null !== (YB = mO.get(BB)) && void 0 !== YB ? YB : null;
      return !DB && BB.Lp().Pq >= 2 && (DB = new iB(BB, (OB => {
        console.error(`Particle programs failed in scene ${BB.uid}: ${OB}`)
      })), mO.set(BB, DB)), uO(BB, DB, OB, GB)
    }
    const FO = YB.b.Zero();
    const iO = {
      hYB: function(BB, OB) {
        return new gB(BB, OB.XYB, {
          preserveDrawingBuffer: OB.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      yQB: function(BB, OB) {
        ! function(BB, OB, GB) {
          const YB = new eB.b(BB.engine);
          BB.eq = YB, YB.detachControl(), YB.autoClear = !1, aB.b.MIN_RENDERINGGROUPS = -1;
          for (let QB = aB.b.MIN_RENDERINGGROUPS; QB <= 1; QB++) YB.setRenderingOrder(QB, hB.e.PainterSortCompare, hB.e.PainterSortCompare, hB.e.PainterSortCompare);
          YB.setRenderingAutoClearDepthStencil(0, !1), cB.b.Enabled = !1, BB.GQB = new UO(BB, Math.round(OB.YQB)), BB.QQB = new EB.e("camHolder", YB), BB.camera = new wB.c("camera", new oB.Xp(0, 0, 0), YB), BB.camera.parent = BB.QQB, fO(BB), (0, bB.h)(BB, ((BB, OB, GB) => (0, TB.h)(OB, GB, BB.eq))), YB.clearColor = QB.e.FromArray(OB.clearColor), YB.ambientColor = QB.Color3.FromArray(OB.ambientColor);
          const DB = GB(YB, OB.jQB);
          YB.onNewLightAddedObservable.add((BB => {
            DB.some((OB => OB === BB)) || console.error(`Light "${BB.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), YB.skipPointerMovePicking = !0
        }(BB, OB, dO), kO(BB.eq)
      },
      DQB: fO,
      setBabylonFog: function(BB, OB, GB, YB) {
        const DB = BB.eq;
        DB.fogMode = 3, DB.fogStart = OB, DB.fogEnd = GB, DB.fogColor.set(YB[0], YB[1], YB[2])
      },
      MQB: function(BB, OB, GB) {
        return BB.engine.Pq >= 2 && !BB.PQB && (BB.PQB = new iB(BB.eq, BB.zQB)), uO(BB.eq, BB.PQB, OB, GB)
      },
      pQB: function(BB, OB) {
        BB.eq.rW.forEach((GB => {
          if (GB instanceof IB) return void GB.POB(OB, BB.kz.Tz);
          const YB = GB;
          if (YB.emitter.getConnectedParticleSystems)
            for (const BB of YB._particles) BB.position.set(BB.position.x - OB[0], BB.position.y - OB[1], BB.position.z - OB[2]);
          else {
            if (!YB.worldOffset) throw new Error("Particle system has no world offset");
            YB.worldOffset.x = -BB.kz.Tz[0], YB.worldOffset.y = -BB.kz.Tz[1], YB.worldOffset.z = -BB.kz.Tz[2]
          }
        }))
      },
      linesFromArrays: function(BB, OB, GB) {
        const YB = new jB.d(OB, BB.eq, null, void 0, void 0, !1);
        return (0, TB.g)(OB, GB, BB.eq, YB), YB
      },
      Tq: qO,
      lQB: function(BB, OB) {
        return FO.origin.IU(OB.origin), FO.direction.IU(OB.direction), FO.length = OB.length, FO.epsilon = OB.epsilon, FO.lQB(BB, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42129: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => cB,
      e: () => RB,
      h: () => CB
    });
    var YB = GB(41258),
      DB = GB(42131),
      QB = GB(42177),
      oB = GB(42133),
      jB = GB(38494),
      yB = GB(38504),
      JB = GB(38513),
      MB = GB(38515),
      PB = GB(37958),
      zB = GB(37962),
      lB = GB(42140),
      pB = GB(37919),
      qB = GB(37946),
      ZB = GB(37910);

    function NB(BB, OB) {
      return Object.assign((function(BB, GB, YB, DB) {
        return OB(this.featureState, BB, GB, YB, DB)
      }), {
        oP: BB
      })
    }

    function RB(BB) {
      const OB = class extends lB.c {
          constructor(OB, GB) {
            const YB = (0, qB.U)(OB),
              DB = YB && (0, qB.A)(YB, BB.name);
            for (var QB = arguments.length, oB = new Array(QB > 2 ? QB - 2 : 0), jB = 2; jB < QB; jB++) oB[jB - 2] = arguments[jB];
            super(OB, BB.name, BB.priority, DB ? DB.defines : BB.defines(...oB), !1), this.featureState = void 0, this.featureState = GB, this._pluginManager._addPlugin(this), this._enable(!0), (0, qB.B)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === ZB.c.GLSL || BB === ZB.c.WGSL
          }
        },
        GB = (0, pB.i)(BB);
      for (const [YB, DB] of Object.entries(pB.d)) {
        const QB = BB[YB];
        if (QB) {
          const BB = GB[YB];
          Object.defineProperty(OB.prototype, DB, {
            value: NB(QB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return OB
    }
    class WB extends(RB(jB.e)) {}
    var AB = GB(40825),
      VB = GB(42148),
      SB = GB(42154);

    function nB(BB, OB, GB) {
      return (0, SB.i)(GB, OB.urls, (() => async function(BB, OB, GB) {
        const {
          width: YB
        } = BB[0].getSize(), DB = BB.map(((BB, GB) => {
          var DB;
          const QB = Math.round(BB.getSize().height / YB),
            oB = null === OB || void 0 === OB ? void 0 : OB[GB];
          return {
            pixels: oB && oB.byteLength === YB * YB * QB * 4 ? oB : null !== (DB = UB.get(BB.getInternalTexture())) && void 0 !== DB ? DB : BB._readPixelsSync(),
            layers: QB
          }
        })), QB = Math.min(GB.Lp().getCaps().texture2DArrayMaxLayerCount, 256), jB = (0, SB.e)(DB, YB, QB).map((BB => {
          let {
            pixels: OB,
            layers: DB
          } = BB;
          return {
            atlas: new VB.e(OB, YB, YB, DB, AB.c.TEXTUREFORMAT_RGBA, GB, !0, !1, oB.e.NEAREST_NEAREST_MIPLINEAR),
            layers: DB
          }
        }));
        return BB.forEach(((BB, OB) => {
          const YB = BB.getInternalTexture();
          UB.has(YB) || (! function(BB, OB) {
            const GB = OB.createRawTexture(new Uint8Array(4), 1, 1, AB.c.TEXTUREFORMAT_RGBA, !1, !1, oB.e.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), OB.unbindAllTextures(), GB._swapAndDie(BB, !1)
          }(YB, GB.Lp()), UB.set(YB, DB[OB].pixels))
        })), jB
      }(BB, OB.pixels, GB)))
    }
    const UB = new WeakMap;
    var fB = GB(38522);
    class kB extends(RB(yB.f)) {
      constructor(BB, OB) {
        super(BB, OB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = OB.textures.map((BB => BB.mirror)), OB.useWebGL2 && !OB.imagesPerAtlas.length && OB.textureAtlases.splice(0, OB.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((BB, OB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, OB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${OB}`, BB)
            }))
          }))
        })), (0, fB.k)(OB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, OB) {
        const GB = this.featureState,
          {
            width: YB,
            height: DB
          } = BB.getSize(),
          QB = this._material.shaderLanguage;
        if (!GB.useWebGL2) return void(0, fB.g)(this._material, GB, OB, YB, Math.round(DB / YB), QB);
        if (this.loaded.add(OB), this.loaded.size < this.mirrors.length) return;
        const oB = await nB(this.mirrors, GB.sources, this._material.JF());
        (0, fB.d)(this._material, GB, oB, YB, QB)
      }
    }
    var dB = GB(42160),
      KB = GB(41300),
      uB = GB(37771),
      mB = GB(42167),
      IB = GB(41423),
      FB = GB(41287),
      iB = GB(42111),
      LB = GB(38169),
      gB = GB(42169);
    class rB extends dB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const XB = {
      Mesh: mB.b,
      TransformNode: iB.e,
      BP: dB.d,
      VertexBuffer: dB.g,
      BoundingInfo: KB.e,
      Xp: uB.Xp,
      ArenaBuffer: rB,
      SubMesh: FB.c,
      VertexData: IB.e,
      MirroredGeometry: gB.d,
      meshFromArrays: gB.g,
      plainMeshFromArrays: gB.h
    };
    (0, LB.d)(XB);
    var wB = GB(38025);
    class EB extends(RB(MB.f)) {
      constructor(BB, OB) {
        if (super(BB, OB), BB instanceof YB.StandardMaterial && OB.dirLightCount > 0) {
          const OB = BB,
            GB = OB._blockDirtyMechanism;
          OB._blockDirtyMechanism = !0, BB.disableLighting = !0, OB._blockDirtyMechanism = GB;
          const YB = (0, qB.U)(BB);
          YB && (YB.disableLighting = !0, (0, qB.S)(YB))
        }(0, wB.j)(BB)
      }
      dispose(BB) {
        (0, wB.m)(this._material), super.dispose(BB)
      }
    }

    function cB(BB, OB) {
      if (!(OB instanceof YB.StandardMaterial) || OB.specularTexture) return;
      const {
        r: GB,
        g: DB,
        b: QB
      } = OB.specularColor;
      0 === GB && 0 === DB && 0 === QB && (BB.SPECULARTERM = !1)
    }(0, MB.e)({
      disableUnusedSpecularTerm: cB
    });
    var hB = GB(37966),
      aB = GB(38183);
    const eB = new RegExp(`^#define ${JB.d}\\s*$`, "m");
    class TB extends(RB(JB.i)) {
      constructor(BB, OB) {
        super(BB, OB), this.Vp = !1, OB.ditherOnlyWhileFading && (aB.e.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const OB = new WeakSet;
        BB.onEffectCreatedObservable.add((GB => {
          let {
            effect: YB,
            subMesh: DB
          } = GB;
          if (this.featureState.prewarmingDither || OB.has(YB)) return;
          OB.add(YB);
          const QB = null === DB || void 0 === DB ? void 0 : DB.getMesh();
          QB && !eB.test(YB.defines) && BB.JF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(QB) || OB.delete(YB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.Vp || BB.lV()) return !1;
        const OB = new FB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, OB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== OB.effect
      }
      dispose(BB) {
        this.Vp = !0, super.dispose(BB)
      }
    }
    const bB = new Map;

    function CB(BB, OB) {
      bB.set(BB, OB)
    }
    CB(jB.e, WB), CB(yB.f, kB), CB(JB.i, TB), CB(MB.f, EB), (0, PB.c)({
      create: (BB, OB) => {
        const GB = new YB.StandardMaterial(BB.name, OB);
        return (0, hB.n)(BB, GB), GB.detailMap._pluginDefineNames
      },
      write: (BB, OB, GB) => {
        (0, hB.M)(BB.mirror, OB, GB)
      },
      addFeature: (BB, OB, GB) => {
        const YB = bB.get(OB.feature);
        if (!YB) throw new Error(`${OB.feature.name} has no plugin class (registerPluginClass)`);
        new YB(BB.mirror, OB.state, ...GB)
      },
      texture: (BB, OB, GB) => {
        let {
          url: YB,
          noMipmap: DB,
          invertY: QB,
          samplingMode: jB,
          data: yB,
          sets: JB
        } = GB;
        if (!yB) {
          const GB = new oB.e(YB, OB, DB, QB, jB);
          return Object.assign(GB, JB), void(0, zB.D)(BB, GB)
        }
        const MB = {},
          PB = new Promise(((BB, OB) => {
            MB.onLoad = BB, MB.onError = (BB, GB) => {
              OB(new Error(`${yB.context}: ${(null===GB||void 0===GB?void 0:GB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: lB,
            bytes: pB,
            label: qB
          } = yB,
          ZB = {
            noMipmap: DB,
            invertY: !1,
            samplingMode: jB,
            ...MB,
            mimeType: lB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          NB = new oB.e(null, OB, ZB);
        hB.o.set(NB, PB), Object.assign(NB, JB), NB.updateURL(YB, pB);
        const RB = NB.getInternalTexture();
        RB && (RB.label = qB), BB.uvSet = NB.coordinatesIndex, BB.matrix.set((0, hB.E)(NB)), (0, zB.D)(BB, NB)
      },
      cube: (BB, OB, GB) => {
        let {
          rootUrl: YB,
          files: QB,
          noMipmap: jB,
          luminance: yB
        } = GB;
        const {
          samplingMode: JB
        } = BB.sampler, MB = JB === (0, zB.v)(jB) ? null : () => {
          (0, hB.D)(PB, JB)
        }, PB = new DB.e(YB, OB, null, jB, QB, MB, null, (0, zB.u)(yB));
        PB.coordinatesMode = oB.e.SKYBOX_MODE, (0, zB.D)(BB, PB)
      },
      canvas: (BB, OB, GB) => {
        let {
          width: YB,
          height: DB,
          mipmaps: jB,
          samplingMode: yB,
          hasAlpha: JB = !1,
          wrap: MB = oB.e.CLAMP_ADDRESSMODE
        } = GB;
        const PB = new QB.c(OB, {
          width: YB,
          height: DB
        }, BB, jB, yB);
        PB.hasAlpha = JB, PB.wrapU = MB, PB.wrapV = MB;
        const zB = (0, hB.u)(PB);
        return (0, hB.x)(zB, PB), zB
      }
    })
  },
  42169: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => PB,
      h: () => zB
    });
    var YB = GB(42160),
      DB = GB(41067),
      QB = GB(41300),
      oB = GB(41426),
      jB = GB(42167),
      yB = GB(41423),
      JB = GB(38087);
    class MB extends oB.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, OB) => {
          this.releaseUnlessInstanced(OB)
        }, this.onLinked = null
      }
      link(BB) {
        var OB;
        (0, JB.k)(BB), this.model = BB, null === (OB = this.onLinked) || void 0 === OB || OB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const DB of Object.values(this._vertexBuffers))
          if (!DB.getIsInstanced()) {
            const {
              byteOffset: OB,
              byteStride: GB,
              type: YB,
              normalized: QB
            } = DB;
            BB.push({
              kind: DB.getKind(),
              data: DB.getData(),
              offset: OB,
              stride: GB,
              components: DB.getSize(),
              glType: YB,
              isNormalized: QB
            })
          } const OB = this._indices.length ? this._indices : null,
          {
            minimum: GB,
            maximum: YB
          } = this.extend;
        this.link(new JB.e(BB, OB, this.getTotalVertices(), new Float64Array(GB.dDB()), new Float64Array(YB.dDB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const OB = new MB(BB, this.JF()),
          GB = this.KDB(void 0, !0);
        GB && OB.setIndices(GB);
        let oB = !1;
        for (const QB in this._vertexBuffers) {
          const BB = this._vertexBuffers[QB],
            GB = BB.getData();
          if (!GB) continue;
          const jB = BB.getSize(),
            {
              type: yB,
              byteOffset: JB,
              byteStride: MB,
              normalized: PB
            } = BB;
          oB ||= BB.isUpdatable();
          const zB = BB.getIsInstanced() ? (GB instanceof Array ? 4 * GB.length : GB.byteLength) / MB : this.getTotalVertices(),
            lB = (0, DB.v)(GB, jB, yB, JB, MB, zB, !0),
            pB = {
              updatable: BB.isUpdatable(),
              stride: jB,
              type: yB,
              normalized: PB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          OB.setVerticesBuffer(new YB.g(this.Lp(), lB, QB, pB), zB)
        }
        return OB._updatable = oB, OB._boundingInfo = new QB.e(this.extend.minimum, this.extend.maximum), OB.relink(), OB
      }
      static mergeMeshes(BB, OB, GB, YB, DB, QB) {
        const yB = BB[0].JF(),
          JB = new jB.b(BB[0].name + "_merged", yB),
          PB = new MB(oB.d.RandomId(), yB, void 0, !1, JB);
        try {
          if (!jB.b.MergeMeshes(BB, OB, GB, JB, DB, QB)) return JB.dispose(), null
        } catch (zB) {
          throw JB.dispose(), zB
        }
        return PB.relink(), JB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var OB;
        BB && null !== (OB = this.getVertexBuffer(BB)) && void 0 !== OB && OB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, JB.q)(this.model), this.model = null)
      }
    }

    function PB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jB.b(BB, GB);
      const DB = (0, JB.j)(OB),
        {
          positions: QB,
          normals: PB,
          uvs: zB,
          indices: lB,
          named: pB = {}
        } = OB,
        qB = new yB.e;
      qB.positions = QB, qB.normals = null !== PB && void 0 !== PB ? PB : null, qB.uvs = null !== zB && void 0 !== zB ? zB : null, qB.indices = lB;
      const ZB = new MB(oB.d.RandomId(), GB, qB, !1, YB);
      for (const {
          kind: oB,
          components: jB
        }
        of DB.vertexAttributes) oB in pB && YB.setVerticesData(oB, pB[oB], !1, jB);
      return ZB.link(DB), YB
    }

    function zB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const DB = new jB.b(BB, GB),
        {
          positions: QB,
          normals: oB,
          uvs: JB,
          indices: MB
        } = OB;
      return Object.assign(new yB.e, {
        positions: QB,
        normals: oB,
        uvs: JB,
        indices: MB
      }).applyToMesh(DB, YB), DB
    }
  },
  39388: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      d: () => oB,
      f: () => QB,
      h: () => DB,
      j: () => jB,
      n: () => JB,
      r: () => MB,
      v: () => yB
    });
    const YB = 16,
      DB = 256,
      QB = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      oB = 16,
      jB = 256,
      yB = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + YB,
        color2: 12 + 5 * YB,
        lZ: 12 + 9 * YB,
        remap: 12 + 13 * YB
      },
      JB = 12 + 17 * YB,
      MB = [yB.colorCount, yB.velocityCount, yB.remapCount, yB.ramp]
  },
  39385: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB,
      f: () => WB
    });
    var YB = GB(37807),
      DB = GB(37771),
      QB = GB(37962),
      oB = GB(39388);
    class jB {
      constructor(BB) {
        this.CP = BB, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const OB = Math.max(1, BB);
        this.records = new Float32Array(OB * oB.d), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(OB).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(BB) {
        const OB = this.CP;
        for (let GB = 0; GB < OB; GB++) {
          const GB = this.cursor;
          if (this.cursor = GB + 1 === OB ? 0 : GB + 1, this.deaths[GB] <= BB) return GB
        }
        return -1
      }
      written(BB, OB) {
        this.deaths[BB] = OB, BB >= this.highWater && (this.highWater = BB + 1), this.uploadFrom < 0 ? (this.uploadFrom = BB, this.uploadTo = BB + 1) : BB >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, BB + 1) : this.wrapTo = Math.max(this.wrapTo, BB + 1)
      }
      shiftTimes(BB) {
        const OB = this.records,
          GB = this.highWater * oB.d;
        for (let YB = oB.f.time; YB < GB; YB += oB.d) OB[YB] -= BB;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(BB) {
        this.uploadFrom >= 0 && (BB(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && BB(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(BB) {
        let OB = 0;
        for (let GB = 0; GB < this.highWater; GB++) this.deaths[GB] > BB && OB++;
        return OB
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var yB = GB(37885),
      JB = GB(39394),
      MB = GB(39403),
      PB = GB(39412);
    class zB {
      constructor() {
        this.particleEmitterType = new MB.e, this.texture = null, this.blendMode = PB.g, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = DB.Xp.Zero(), this.worldOffset = new DB.Xp(0, 0, 0), this.color1 = new yB.e(1, 1, 1, 1), this.color2 = new yB.e(1, 1, 1, 1), this.colorDead = new yB.e(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var BB;
        return null !== (BB = lB(this).direction1) && void 0 !== BB ? BB : DB.Xp.Zero()
      }
      set direction1(BB) {
        const OB = lB(this);
        OB.direction1 && (OB.direction1 = BB)
      }
      get direction2() {
        var BB;
        return null !== (BB = lB(this).direction2) && void 0 !== BB ? BB : DB.Xp.Zero()
      }
      set direction2(BB) {
        const OB = lB(this);
        OB.direction2 && (OB.direction2 = BB)
      }
      get minEmitBox() {
        var BB;
        return null !== (BB = lB(this).minEmitBox) && void 0 !== BB ? BB : DB.Xp.Zero()
      }
      set minEmitBox(BB) {
        const OB = lB(this);
        OB.minEmitBox && (OB.minEmitBox = BB)
      }
      get maxEmitBox() {
        var BB;
        return null !== (BB = lB(this).maxEmitBox) && void 0 !== BB ? BB : DB.Xp.Zero()
      }
      set maxEmitBox(BB) {
        const OB = lB(this);
        OB.maxEmitBox && (OB.maxEmitBox = BB)
      }
      createBoxEmitter(BB, OB, GB, YB) {
        const DB = new MB.e;
        return this.particleEmitterType = DB, DB.direction1 = BB, DB.direction2 = OB, DB.minEmitBox = GB, DB.maxEmitBox = YB, DB
      }
      addColorGradient(BB, OB, GB) {
        return this.colorGradients ??= [], this.colorGradients.push(new JB.b(BB, OB, GB)), this.colorGradients.sort(pB), this
      }
      removeColorGradient(BB) {
        return qB(this.colorGradients, BB), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(BB, OB, GB) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new JB.g(BB, OB, GB)), this.velocityGradients.sort(pB), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(BB, OB, GB) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new JB.g(BB, OB, GB)), this.colorRemapGradients.sort(pB), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(BB, OB) {
        return this.rampGradients ??= [], this.rampGradients.push(new JB.d(BB, OB)), this.rampGradients.sort(pB), this
      }
      removeRampGradient(BB) {
        return qB(this.rampGradients, BB), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function lB(BB) {
      return BB.particleEmitterType
    }

    function pB(BB, OB) {
      return BB.gradient < OB.gradient ? -1 : BB.gradient > OB.gradient ? 1 : 0
    }

    function qB(BB, OB) {
      const GB = BB ? BB.findIndex((BB => BB.gradient === OB)) : -1;
      GB >= 0 && BB.splice(GB, 1)
    }
    class ZB extends zB {
      constructor(BB, OB, GB) {
        super(), this.name = BB, this.host = GB, this.onDispose = NB, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = DB.Xp.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.Vp = !1, this.emitterMatrix = new DB.Matrix, this.inverseEmitterMatrix = new DB.Matrix, this.spawned = {
          position: new DB.Xp,
          direction: new DB.Xp
        }, this.ring = new jB(OB)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(BB) {
        var OB;
        null === (OB = this.emitterDisposed) || void 0 === OB || OB.remove(), this.emitterDisposed = null, this.emitterValue = BB, BB && AB(BB) && (this.emitterDisposed = BB.lF.add((() => {
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
        return !this.Vp && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var BB;
        let OB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.Vp || (this.Vp = !0, null === (BB = this.emitterDisposed) || void 0 === BB || BB.remove(), this.emitterDisposed = null, OB && ((0, QB.w)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(BB) {
        const OB = this.emitter;
        return !!OB && !(AB(OB) && !OB.isEnabled()) && this.animate(BB)
      }
      animate(BB) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const OB = this.updateSpeed * BB;
        let GB;
        return this.manualEmitCount > -1 ? (GB = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (GB = this.emitRate * OB | 0, this.newPartsExcess += this.emitRate * OB - GB), this.newPartsExcess > 1 && (GB += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (GB = 0), this.alive = this.liveUntil > this.time, this.time += OB, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), GB > 0 && this.spawn(GB), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.Vp && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var BB;
        return this.started = !1, null === (BB = this.onAnimationEnd) || void 0 === BB || BB.call(this), !!this.Vp || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(BB, OB) {
        BB[OB] = this.anchor[0] + this.shift[0] + this.worldOffset.x, BB[OB + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, BB[OB + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      POB(BB, OB) {
        this.emitterValue && AB(this.emitterValue) ? (this.shift[0] -= BB[0], this.shift[1] -= BB[1], this.shift[2] -= BB[2]) : this.worldOffset.set(-OB[0], -OB[1], -OB[2])
      }
      spawn(BB) {
        var OB, GB;
        const QB = this.emitterValue,
          jB = AB(QB) ? QB.getWorldMatrix() : DB.Matrix.TranslationToRef(QB.x, QB.y, QB.z, this.emitterMatrix);
        jB.invertToRef(this.inverseEmitterMatrix);
        const {
          position: yB,
          direction: JB
        } = this.spawned, MB = this.spawned, PB = this.ring, zB = this.liveUntil <= this.time;
        zB && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, PB.restart());
        const {
          records: lB,
          recordBits: pB
        } = PB, qB = oB.f, ZB = null === (OB = this.getColorGradients()) || void 0 === OB ? void 0 : OB[0], NB = ZB ? ZB.color1 : this.color1, RB = ZB ? null !== (GB = ZB.color2) && void 0 !== GB ? GB : ZB.color1 : this.color2;
        for (let DB = 0; DB < BB; DB++) {
          const BB = PB.freeSlot(this.time);
          if (BB < 0) break;
          const OB = (0, YB.RandomRange)(this.minLifeTime, this.maxLifeTime),
            GB = (0, YB.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(jB, yB, MB, !1), this.particleEmitterType.startDirectionFunction(jB, JB, MB, !1, this.inverseEmitterMatrix), 0 === GB ? JB.set(0, 0, 0) : JB.scaleInPlace(GB);
          const QB = (0, YB.RandomRange)(this.minSize, this.maxSize);
          zB && 0 === DB && (this.anchor[0] = yB.x, this.anchor[1] = yB.y, this.anchor[2] = yB.z);
          const ZB = BB * oB.d;
          lB[ZB + qB.position] = yB.x - this.anchor[0] - this.shift[0], lB[ZB + qB.position + 1] = yB.y - this.anchor[1] - this.shift[1], lB[ZB + qB.position + 2] = yB.z - this.anchor[2] - this.shift[2], lB[ZB + qB.time] = this.time - this.epoch, lB[ZB + qB.direction] = JB.x, lB[ZB + qB.direction + 1] = JB.y, lB[ZB + qB.direction + 2] = JB.z, lB[ZB + qB.lifeTime] = OB, lB[ZB + qB.size] = QB, pB[ZB + qB.seed] = 4294967296 * Math.random() >>> 0;
          const WB = Math.random();
          lB[ZB + qB.colour] = NB.r + (RB.r - NB.r) * WB, lB[ZB + qB.colour + 1] = NB.g + (RB.g - NB.g) * WB, lB[ZB + qB.colour + 2] = NB.b + (RB.b - NB.b) * WB, lB[ZB + qB.colour + 3] = NB.a + (RB.a - NB.a) * WB;
          const AB = this.time + OB;
          AB > this.liveUntil && (this.liveUntil = AB), PB.written(BB, AB)
        }
      }
    }

    function NB() {}
    const RB = 5;

    function WB(BB, OB) {
      const GB = [];
      let YB = 0;
      for (const DB of BB) DB.isReady() || (YB++, GB.length < RB && GB.push(`${OB} particle system ${DB.name}`));
      return YB > GB.length && GB.push(`${YB-GB.length} more ${OB} particle systems`), GB
    }

    function AB(BB) {
      return void 0 !== BB.position
    }
  },
  44735: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => ZB,
      g: () => jB,
      j: () => oB,
      k: () => JB
    });
    var YB = GB(37885),
      DB = GB(39394),
      QB = GB(39388);

    function oB(BB, OB, GB, YB) {
      const DB = QB.v;
      OB.fill(0), BB.gravity.toArray(OB, DB.gravity), BB.colorDead.toArray(OB, DB.colorDead), GB[DB.ramp] = BB.useRampGradients ? 1 : 0;
      const oB = BB.getColorGradients(),
        jB = zB(BB, oB, "colour", YB);
      GB[DB.colorCount] = jB;
      for (let QB = 0; QB < jB; QB++) {
        var yB;
        const BB = oB[lB(oB, QB)];
        OB[DB.colorPositions + QB] = BB.gradient, BB.color1.toArray(OB, DB.color1 + 4 * QB), (null !== (yB = BB.color2) && void 0 !== yB ? yB : BB.color1).toArray(OB, DB.color2 + 4 * QB)
      }
      const JB = BB.getVelocityGradients(),
        MB = zB(BB, JB, "lZ", YB);
      GB[DB.velocityCount] = MB;
      for (let QB = 0; QB < MB; QB++) RB(OB, DB.lZ + 4 * QB, JB[lB(JB, QB)]);
      const PB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        pB = zB(BB, PB, "colour remap", YB);
      GB[DB.remapCount] = pB;
      for (let QB = 0; QB < pB; QB++) RB(OB, DB.remap + 4 * QB, PB[lB(PB, QB)])
    }

    function jB() {
      return {
        key: [],
        texels: new Uint8Array(4 * QB.h)
      }
    }
    const yB = [];

    function JB(BB, OB) {
      return MB(BB, yB), !NB(yB, OB.key) && (OB.key.length = 0, OB.key.push(...yB), OB.key.length > 0 && function(BB, OB) {
        for (let GB = 0; GB < QB.h; GB++) DB.h.GetCurrentGradient(GB / QB.h, BB, ((BB, OB, GB) => {
          YB.Color3.LerpToRef(BB.color, OB.color, GB, PB)
        })), OB[4 * GB] = 255 * PB.r, OB[4 * GB + 1] = 255 * PB.g, OB[4 * GB + 2] = 255 * PB.b, OB[4 * GB + 3] = 255
      }(BB.getRampGradients(), OB.texels), !0)
    }

    function MB(BB, OB) {
      OB.length = 0;
      const GB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== GB && void 0 !== GB && GB.length) {
        OB.push(GB.length);
        for (const BB of GB) OB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const PB = new YB.Color3;

    function zB(BB, OB, GB, YB) {
      return OB ? OB.length > QB.b ? (YB(`particleStops:${GB}`, `GPU particles use the first 2 and last ${QB.b-2} of more than ${QB.b} ${GB} gradient stops (${BB.name})`), QB.b) : OB.length : 0
    }

    function lB(BB, OB) {
      return OB < 2 || BB.length <= QB.b ? OB : BB.length - QB.b + OB
    }
    const pB = new Float32Array(QB.n),
      qB = new Uint32Array(pB.buffer);

    function ZB(BB, OB, GB) {
      return oB(BB, pB, qB, GB), OB && NB(qB, OB) ? null : qB.slice()
    }

    function NB(BB, OB) {
      if (BB.length !== OB.length) return !1;
      for (let GB = 0; GB < BB.length; GB++)
        if (BB[GB] !== OB[GB]) return !1;
      return !0
    }

    function RB(BB, OB, GB) {
      var YB;
      BB[OB] = GB.gradient, BB[OB + 1] = GB.factor1, BB[OB + 2] = null !== (YB = GB.factor2) && void 0 !== YB ? YB : GB.factor1
    }
  },
  42154: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      const YB = OB * OB * 4,
        DB = BB[0].layers,
        QB = DB * (BB.length - 1) + BB[BB.length - 1].layers,
        oB = new Uint8Array(QB * YB);
      BB.forEach(((OB, GB) => {
        const QB = GB + 1 < BB.length ? Math.min(OB.layers, DB) : OB.layers;
        oB.set(new Uint8Array(OB.pixels.buffer, OB.pixels.byteOffset, QB * YB), GB * DB * YB)
      }));
      const jB = Math.max(1, Math.min(QB, GB || QB));
      if (jB === QB) return [{
        pixels: oB,
        layers: QB
      }];
      const yB = [];
      for (let JB = 0; JB < QB; JB += jB) {
        const BB = Math.min(QB, JB + jB);
        yB.push({
          pixels: oB.slice(JB * YB, BB * YB),
          layers: BB - JB
        })
      }
      return yB
    }
    GB.d(OB, {
      e: () => YB,
      i: () => QB
    });
    const DB = new WeakMap;

    function QB(BB, OB, GB) {
      var YB, QB;
      const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
      DB.set(BB, oB);
      const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
      oB.set(OB[0], jB);
      const yB = jB.find((BB => BB.urls.length === OB.length && BB.urls.every(((BB, GB) => BB === OB[GB]))));
      if (yB) return yB.built;
      const JB = {
        urls: [...OB],
        built: GB()
      };
      return jB.push(JB), JB.built.catch((() => {
        jB.splice(jB.indexOf(JB), 1)
      })), JB.built
    }
  },
  39412: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      g: () => DB,
      k: () => yB,
      o: () => PB
    });
    var YB = GB(37880);
    const DB = 0,
      QB = 3,
      oB = 4,
      jB = new Map([
        [DB, YB.d.ALPHA_ONEONE],
        [1, YB.d.ALPHA_COMBINE],
        [2, YB.d.ALPHA_ADD],
        [QB, YB.d.ALPHA_MULTIPLY],
        [-1, YB.d.ALPHA_SUBTRACT]
      ]);

    function yB(BB) {
      var OB;
      return null !== (OB = jB.get(BB)) && void 0 !== OB ? OB : BB
    }
    const JB = [QB, 2],
      MB = new Map;

    function PB(BB) {
      if (BB === oB) return JB;
      let OB = MB.get(BB);
      return OB || (OB = [BB], MB.set(BB, OB)), OB
    }
  },
  44732: (BB, OB, GB) => {
    function YB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const OB = new Set;
      return (GB, YB) => {
        OB.has(GB) || (OB.add(GB), console.warn(BB + YB))
      }
    }
    GB.d(OB, {
      c: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);