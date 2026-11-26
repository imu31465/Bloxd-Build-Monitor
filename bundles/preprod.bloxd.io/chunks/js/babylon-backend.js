export const id = 0;
export const ids = [0];
export const modules = {
  42221: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CapeMaterialPlugin: () => BU,
      HueTintMaterialPlugin: () => ZU,
      LifeformMaterialPlugin: () => RU,
      OverlayMaterialPlugin: () => PU
    });
    var cU = zU(42229),
      yU = zU(38758);
    class QU extends((0, cU.i)(yU.e)) {}(0, cU.l)(yU.e, QU);
    var AU = zU(38034);
    class FU extends((0, cU.i)(AU.d)) {}(0, cU.l)(AU.d, FU);
    var oU = zU(38597);
    class DU extends((0, cU.i)(oU.e)) {}(0, cU.l)(oU.e, DU);
    var EU = zU(38057),
      YU = zU(41348),
      NU = zU(38053);
    class IU extends((0, cU.i)(NU.g)) {
      constructor(UU, XU, zU) {
        super(UU, XU, zU), (0, EU.h)(UU)
      }
      dispose(UU) {
        (0, EU.k)(this._material), super.dispose(UU)
      }
    }(0, cU.l)(NU.g, IU), (0, NU.i)({
      disableUnusedSpecularTerm: cU.e,
      isLightingDisabled: UU => UU instanceof YU.StandardMaterial && UU.disableLighting
    });
    var pU = zU(39504);
    class aU extends((0, cU.i)(pU.g)) {}(0, cU.l)(pU.g, aU);
    var tU = zU(39621),
      gU = zU(37932),
      kU = zU(38891),
      GU = zU(38046);
    class BU extends((0, cU.i)(tU.e)) {}(0, cU.l)(tU.e, BU);
    class ZU extends((0, cU.i)(gU.b)) {}(0, cU.l)(gU.b, ZU);
    class RU extends((0, cU.i)(kU.p)) {}(0, cU.l)(kU.p, RU);
    class PU extends((0, cU.i)(GU.d)) {}(0, cU.l)(GU.d, PU)
  },
  44223: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      addBabylonLights: () => eX,
      createSceneParticleSystem: () => OX,
      default: () => rX
    });
    var cU = zU(44227),
      yU = (zU(41093), zU(42215), zU(41563), zU(44240)),
      QU = zU(37919),
      AU = zU(37814),
      FU = zU(44254),
      oU = zU(44257),
      DU = zU(38004),
      EU = (zU(42229), zU(44270)),
      YU = zU(44262),
      NU = zU(39529),
      IU = zU(44273),
      pU = zU(40961),
      aU = zU(39516);
    const tU = "gpuParticles",
      gU = "gpuParticlesSummed",
      kU = aU.t,
      GU = UU => UU / 4,
      BU = (UU, XU, zU, cU) => Array.from({
        length: XU
      }, ((yU, QU) => `(${((UU,XU,zU)=>0===XU?`${UU} < 1`:XU===zU-1?`${UU} >= ${XU}`:`${UU} == ${XU}`)(UU,QU,XU)} ? ${zU(QU)} : ${cU})`)).join("\n\t\t+ "),
      ZU = (UU, XU, zU) => `vec4 ${UU}(int i) {\n\treturn ${BU("i",zU,(UU=>`gpuParticleSystem[${XU+UU}]`),"vec4(0.0)")};\n}\n`,
      RU = `\n${ZU("colorPositionsAt",GU(kU.colorPositions),aU.c/4)}\n${ZU("color1At",GU(kU.color1),aU.c)}\n${ZU("color2At",GU(kU.color2),aU.c)}\n${ZU("velocityAt",GU(kU.Et),aU.c)}\n${ZU("remapStopAt",GU(kU.remap),aU.c)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${BU("j",4,(UU=>`v[${UU}]`),"0.0")};\n}\n`,
      PU = (UU, XU, zU, cU) => UU ? `${zU}(${cU})` : `gpuParticleSystem[${XU} + ${cU}]`,
      WU = UU => `gpuParticleSystem[${UU>>2}].${"xyzw"[3&UU]}`,
      dU = UU => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${aU.c}\n#define COLOR_POSITIONS ${GU(kU.colorPositions)}\n#define COLOR1 ${GU(kU.color1)}\n#define COLOR2 ${GU(kU.color2)}\n#define VELOCITY ${GU(kU.Et)}\n#define REMAP ${GU(kU.remap)}\n#define RECORDS_PER_ROW ${aU.p}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${aU.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${WU(kU.gravity)}, ${WU(kU.gravity+1)}, ${WU(kU.gravity+2)}); }\nint colorCount() { return int(${WU(kU.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${GU(kU.colorDead)}]; }\nint velocityCount() { return int(${WU(kU.velocityCount)}); }\nint remapCount() { return int(${WU(kU.remapCount)}); }\n${UU?RU:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${UU?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${PU(UU,"COLOR1","color1At","i")}, ${PU(UU,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${PU(UU,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${PU(UU,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${PU(UU,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${PU(UU,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${PU(UU,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${PU(UU,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${PU(UU,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      LU = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    pU.b.ShadersStore[`${tU}VertexShader`] = dU(!1), pU.b.ShadersStore[`${tU}PixelShader`] = LU, pU.b.ShadersStore[`${gU}VertexShader`] = dU(!0), pU.b.ShadersStore[`${gU}PixelShader`] = LU;
    const eU = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      CU = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var wU = zU(39514),
      qU = zU(44281);
    class OU extends wU.c {
      constructor(UU, XU, zU, cU) {
        super(UU, XU, zU), this.renderer = zU, this.sa = cU, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(aU.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, qU.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (UU, XU) => {
          const {
            engine: zU
          } = this, cU = zU._gl;
          zU._bindTextureDirectly(cU.TEXTURE_2D, this.records, !0), zU._unpackFlipY(!1);
          const yU = this.ring.recordBits;
          for (let QU = UU; QU < XU;) {
            const UU = Math.floor(QU / aU.p),
              zU = Math.min(XU, (UU + 1) * aU.p);
            cU.texSubImage2D(cU.TEXTURE_2D, 0, QU % aU.p * 4, UU, 4 * (zU - QU), 1, cU.RGBA_INTEGER, cU.UNSIGNED_INT, yU, QU * aU.f), QU = zU
          }
          zU._bindTextureDirectly(cU.TEXTURE_2D, null)
        }, this.id = UU;
        const yU = cU.qp();
        this.engine = yU;
        const QU = Math.max(1, XU),
          AU = Math.min(QU, aU.p);
        this.records = yU.createRawTexture(null, 4 * AU, Math.ceil(QU / AU), EU.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, EU.b.TEXTURE_NEAREST_SAMPLINGMODE, null, EU.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.sa.getAnimationRatio() || 1;
        const XU = this.sa.getFrameId();
        if (XU === this.animatedFrame) return !1;
        const zU = super.animate(UU);
        return zU && (this.animatedFrame = XU, this.ring.takeUploads(this.uploadSlots)), zU
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(UU) {
        (0, qU.i)(this, this.uniforms, this.uniformBits, UU);
        for (const zU of aU.r) this.uniforms[zU] = this.uniformBits[zU];
        var XU;
        (0, qU.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (XU = this.ramp) || void 0 === XU || XU.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = YU.b.CreateRGBATexture(this.rampTexels.texels, aU.n, 1, this.sa, !1, !1, EU.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var UU;
        this.records.dispose(), null === (UU = this.ramp) || void 0 === UU || UU.dispose(), this.ramp = null
      }
    }
    const SU = "the context was lost before the programs linked";
    class rU {
      constructor(UU, XU) {
        this.sa = UU, this.reportFailure = XU, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = tU, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, IU.e)(), this.engine = UU.qp(), this.whiteRamp = YU.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, UU, !1, !1, EU.b.TEXTURE_NEAREST_SAMPLINGMODE);
        const zU = this.linkPair(tU),
          cU = null !== zU && zU !== SU ? this.linkPair(gU) : zU;
        null === cU && null !== zU ? (console.warn(`GPU particles link their fallback here: ${zU}`), this.reportFailure(zU, !0)) : null !== cU && this.fail(cU === SU ? SU : null !== zU && void 0 !== zU ? zU : cU)
      }
      lH(UU, XU) {
        const zU = aU.p * this.engine.getCaps().maxTextureSize;
        XU > zU && this.warnOnce(`capacity:${UU}`, `particle system ${UU} holds ${zU} particles, not ${XU}: its records texture's limit`);
        const cU = new OU(UU, Math.min(XU, zU), this, this.sa);
        return this.sa.addParticleSystem(cU), cU
      }
      canDraw(UU) {
        var XU, zU;
        if (this.failed || null === (XU = UU.texture) || void 0 === XU || null === (zU = XU.mirror) || void 0 === zU || !zU.isReady()) return !1;
        for (const cU of (0, NU.h)(UU.blendMode))
          if (!this.effectFor(cU).isReady()) return !1;
        return !0
      }
      disposeStopped(UU) {
        this.sa._toBeDisposed.push(UU)
      }
      remove(UU) {
        this.sa.removeParticleSystem(UU), UU.releaseGl()
      }
      render(UU) {
        var XU;
        if (!UU.isReady() || !UU.hasLiveParticles()) return 0;
        const {
          engine: zU,
          sa: cU,
          frame: yU
        } = this;
        UU.prepareDraw(this.warnOnce), UU.drawOffset(yU, 0), yU[3] = UU.drawTime();
        const QU = UU.ring.drawStart(),
          AU = UU.ring.drawCount(),
          FU = null !== (XU = UU.ramp) && void 0 !== XU ? XU : this.whiteRamp;
        zU.setState(!1);
        for (const oU of (0, NU.h)(UU.blendMode)) {
          const XU = this.effectFor(oU);
          zU.enableEffect(XU), XU.setTexture("gpuParticleTexture", UU.texture.mirror), XU.setTexture("gpuParticleRampTexture", FU), XU._bindTexture("gpuParticleRecords", UU.records), XU.setMatrix("gpuParticleView", cU.getViewMatrix()), XU.setMatrix("gpuParticleProjection", cU.getProjectionMatrix()), XU.setFloatArray4("gpuParticleSystem", UU.uniforms), XU.setFloat4("gpuParticleFrame", yU[0], yU[1], yU[2], yU[3]), XU.setFloat2("gpuParticleRange", QU, AU), XU.setFloat("gpuParticleRamp", UU.uniforms[aU.t.ramp]), zU.bindBuffers(this.vertexBuffers, null, XU), zU.setAlphaMode((0, NU.g)(oU)), zU.drawArraysType(EU.b.MATERIAL_TriangleStripDrawMode, 0, 4, AU), XU._bindTexture("gpuParticleRecords", null)
        }
        return zU.setAlphaMode(EU.b.ALPHA_DISABLE), AU
      }
      linkPair(UU) {
        this.shader = UU, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(UU, ""), this.multiplyEffect = this.createEffect(UU, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(UU) {
        const XU = UU.getPipelineContext(),
          zU = this.gl();
        zU && null === this.pairFailure && (!XU || XU.isParallelCompiled && !XU.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : XU.isParallelCompiled && XU.program && (zU.getProgramParameter(XU.program, zU.LINK_STATUS) || this.programFailed(function(UU, XU, zU) {
          if (UU.isContextLost()) return SU;
          for (const [cU, yU] of [
              ["VERTEX SHADER", XU.vertexShader],
              ["FRAGMENT SHADER", XU.fragmentShader]
            ]) {
            const XU = yU && !UU.getShaderParameter(yU, UU.COMPILE_STATUS) ? UU.getShaderInfoLog(yU) : null;
            if (XU) return `${cU} ${XU}`
          }
          return UU.getProgramInfoLog(zU) || "a program did not link"
        }(zU, XU, XU.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(UU) {
        return UU === NU.b ? this.multiplyEffect : this.effect
      }
      createEffect(UU, XU) {
        return this.engine.createEffect(UU, [], eU, CU, XU, void 0, void 0, ((XU, zU) => {
          var cU;
          UU === this.shader && this.programFailed(null !== (cU = this.gl()) && void 0 !== cU && cU.isContextLost() ? SU : function(UU) {
            const XU = UU.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(XU) ? "a program failed, its log not in this browser's stack" : XU.replace(/^Error: /, "")
          }(zU))
        }))
      }
      programFailed(UU) {
        this.linkingPair ? this.pairFailure ??= UU : this.fail(UU)
      }
      fail(UU) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${UU}`), this.reportFailure(UU, !1);
          for (const UU of this.sa.nB.slice()) UU instanceof OU && UU.disposeOnStop && UU.dispose()
        }
      }
    }
    var uU = zU(40929);
    class fU extends uU.c {
      createEffect() {
        const UU = super.createEffect(...arguments);
        return HU(UU), iU.has(UU) || (iU.add(UU), UU.onCompileObservable.add((() => {
          HU(UU)
        }))), UU
      }
    }
    const iU = new WeakSet;

    function HU(UU) {
      UU._vertexSourceCodeBeforeMigration = "", UU._fragmentSourceCodeBeforeMigration = ""
    }
    var MU = zU(41295),
      vU = zU(42205),
      VU = zU(41052),
      sU = zU(41258),
      nU = zU(41251),
      mU = zU(41199),
      lU = zU(42273),
      xU = zU(38250),
      JU = zU(44290),
      jU = zU(44292),
      KU = zU(44300),
      bU = zU(41210),
      TU = zU(3150),
      hU = zU(38130),
      UX = zU(41389),
      XX = zU(38214),
      zX = zU(38161);

    function cX(UU) {
      if (UU.visibility < 1 || !UU.isVisible || !UU.isEnabled() || UU.metadata[zX.f] || !UU.isReady()) return !0;
      const XU = UU.uB;
      if (!XU || 0 === XU.length) return !0;
      for (let zU = 0; zU < XU.length; zU++) {
        const cU = XU[zU],
          yU = cU.Hp();
        if (!yU || !yU.isReadyForSubMesh(UU, cU, !1)) return !0
      }
      return !1
    }
    class yX {
      constructor(UU, XU) {
        this.WN = UU, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, XU.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      gY(UU) {
        var XU;
        const zU = this.armed;
        if (this.armed = !1, this.vis = null, !zU) return !1;
        this.culled = 0;
        const {
          WN: cU
        } = this, yU = null === (XU = cU.yB) || void 0 === XU ? void 0 : XU.visibility;
        if (!yU || !UU || cU.WY.Ua) return !1;
        if (!(cU.qY.EyU[0] >= XX.g)) return !1;
        const QU = UU.getProjectionMatrix().m;
        if (0 !== QU[15]) return !1;
        const AU = cU.VN,
          FU = UU.globalPosition,
          oU = this.eye;
        return oU[0] = FU.x + AU[0], oU[1] = FU.y + AU[1], oU[2] = FU.z + AU[2], !!yU.eyeClear(oU[0], oU[1], oU[2], UU.minZ, QU, cU.qY) && (this.vis = yU, this.passable.clear(), this.count = 0, !0)
      }
      see(UU, XU) {
        const zU = this.count++;
        if (zU === this.cellSlots.length) {
          const UU = new Int32Array(2 * zU);
          UU.set(this.cellSlots), this.cellSlots = UU
        }
        this.cellSlots[zU] = XU, this.meshes[zU] = UU
      }
      seeThrough(UU) {
        this.passable.add(UU)
      }
      finish(UU, XU) {
        const {
          vis: zU,
          eye: cU,
          meshes: yU,
          count: QU,
          cellSlots: AU
        } = this, {
          qY: FU
        } = this.WN, [oU, DU] = FU.EyU, EU = null !== zU && zU.update(cU[0], cU[1], cU[2], FU.tY, oU, DU, this.passable);
        let YU = 0;
        for (let NU = 0; NU < QU; NU++) {
          const cU = yU[NU];
          if (EU) {
            const UU = 3 * AU[NU];
            if (UU >= 0 && !zU.isDrawn(XU[UU], XU[UU + 1], XU[UU + 2])) {
              YU++;
              continue
            }
          }
          bU.d.prototype.push.call(UU, cU)
        }
        yU.fill(null, 0, QU), this.count = 0, this.vis = null, this.culled = YU
      }
    }
    var QX = zU(38194),
      AX = zU(38145),
      FX = zU(41374),
      oX = zU(44307),
      DX = zU(41378),
      EX = zU(41314);
    let YX = 1;
    const NX = new WeakSet;

    function IX() {
      return YX
    }

    function pX() {
      YX = YX >= 1073741823 ? 1 : YX + 1
    }

    function aX(UU) {
      const XU = UU.metadata;
      if (!XU || !0 !== XU[hU.o]) return;
      const zU = XU[hU.w],
        cU = null === zU || void 0 === zU ? void 0 : zU._noaStamps;
      if (!zU || !cU) return;
      const yU = zU.entries.indexOf(UU);
      yU >= 0 && (cU[yU] = 0)
    }

    function tX(UU) {
      const XU = UU.uB;
      for (let zU = 0; zU < XU.length; zU++) {
        const UU = XU[zU].Hp();
        if (UU && !UU.isFrozen) return !1
      }
      for (let zU = 0; zU < XU.length; zU++) {
        const UU = XU[zU].Hp();
        UU && NX.add(UU)
      }
      return !0
    }
    let gX = !1;
    const kX = new WeakSet;

    function GX(UU, XU) {
      const zU = UU[XU];
      if ("function" !== typeof zU) throw new Error(`terrainDrawState: Babylon has no ${XU} to hook`);
      return zU
    }

    function BX(UU, XU, zU, cU, yU) {
      const QU = zU.qY.tY,
        AU = new Map;
      let FU = 0;
      const oU = new yX(zU, UU),
        DU = new QX.d(QU, UU.qp());
      ! function(UU) {
        if (kX.has(UU) || (kX.add(UU), UU.onContextLostObservable.add(pX), UU.wp.add(pX)), gX) return;
        gX = !0;
        const XU = oX.b.prototype,
          zU = GX(XU, "_markSubMeshesAsDirty");
        Object.assign(XU, {
          _markSubMeshesAsDirty(UU) {
            zU.call(this, UU), aX(this)
          }
        });
        const cU = GX(EX.e.prototype, "_syncParentEnabledState");
        Object.assign(EX.e.prototype, {
          _syncParentEnabledState() {
            cU.call(this), aX(this)
          }
        });
        const yU = GX(DX.d.prototype, "resetDrawCache");
        DX.d.prototype.resetDrawCache = function(UU, XU) {
          yU.call(this, UU, XU), aX(this.getMesh())
        };
        const QU = FX.c.prototype,
          AU = GX(QU, "markDirty");
        QU.markDirty = function(UU) {
          AU.call(this, UU), NX.has(this) && pX()
        };
        const FU = GX(QU, "_markAllSubMeshesAsDirty");
        Object.assign(QU, {
          _markAllSubMeshesAsDirty(UU) {
            FU.call(this, UU), NX.has(this) && pX()
          }
        })
      }(UU.qp());
      let EU = new Float64Array(384),
        YU = new Int32Array(64),
        NU = new Uint8Array(64),
        IU = new Float64Array(64),
        pU = new Int32Array(192),
        aU = 0;
      const tU = [],
        gU = new Float64Array(24),
        kU = () => {
          const UU = tU.pop();
          return void 0 !== UU ? (YU[UU] = 0, UU) : (aU === YU.length && (EU = ZX(EU, new Float64Array(2 * EU.length)), YU = ZX(YU, new Int32Array(2 * YU.length)), NU = ZX(NU, new Uint8Array(2 * NU.length)), IU = ZX(IU, new Float64Array(2 * IU.length)), pU = ZX(pU, new Int32Array(2 * pU.length))), aU++)
        },
        GU = UU => {
          const XU = 6 * UU._noaSlot,
            zU = UU.gyU[0],
            cU = UU.gyU[1];
          EU[XU] = zU.x, EU[XU + 1] = zU.y, EU[XU + 2] = zU.z, EU[XU + 3] = cU.x, EU[XU + 4] = cU.y, EU[XU + 5] = cU.z
        },
        BU = (UU, XU, zU) => {
          if (!zU) return oU.see(UU, -1), !1;
          const cU = cX(UU);
          return cU && oU.seeThrough(IU[XU]), oU.see(UU, XU), !cU
        };
      let ZU = -1;
      return UU.getActiveMeshCandidates = () => {
        const zU = UU.frustumPlanes,
          cU = XU._selectionContent;
        cU.reset(), (zU => {
          const cU = UU.frustumPlanes;
          FU = FU + 1 | 0 || 1;
          const yU = XU.blocks,
            QU = oU.gY(UU.activeCamera),
            AU = QU && !0;
          if (AU) {
            const XU = UU.qp().currentRenderPassId;
            XU !== ZU && (ZU = XU, pX())
          }
          const DU = IX(),
            IU = AU && !1;
          yU.length > 0 && function(UU, XU) {
            for (let zU = 0; zU < 6; zU++) {
              const cU = UU[zU],
                yU = cU.normal;
              XU[4 * zU] = yU.x, XU[4 * zU + 1] = yU.y, XU[4 * zU + 2] = yU.z, XU[4 * zU + 3] = cU.d
            }
          }(cU, gU);
          const aU = EU,
            tU = YU,
            kU = NU;
          for (let UU = 0; UU < yU.length; UU++) {
            const XU = yU[UU];
            if (!UX.e.IsInFrustum(XU.gyU, cU)) continue;
            const EU = XU.entries;
            {
              const UU = XU._noaSlots,
                cU = XU._noaStamps,
                yU = XU._noaTerrain;
              for (let XU = 0; XU < EU.length; XU++) {
                const YU = UU[XU];
                if (tU[YU] !== FU && (tU[YU] = FU, kU[YU] = RX(aU, 6 * YU, gU) ? 1 : 0), 0 === kU[YU]) continue;
                const NU = EU[XU];
                if (AU && cU[XU] === DU) IU && 1 === yU[XU] && cX(NU) && 0, oU.see(NU, 1 === yU[XU] ? YU : -1);
                else if (AU) {
                  cU[XU] = DU;
                  const UU = !0 === NU.metadata[AX.l];
                  yU[XU] = UU ? 1 : 0;
                  const zU = BU(NU, YU, UU);
                  !UU || zU && tX(NU) || (cU[XU] = 0)
                } else QU ? BU(NU, YU, !0 === NU.metadata[AX.l]) : bU.d.prototype.push.call(zU, NU)
              }
              continue
            }
          }
          QU && oU.finish(zU, pU)
        })(cU), DU.apply(cU, UU.activeCamera);
        const QU = XU.tyU;
        for (let UU = 0; UU < QU.length; UU++) {
          const XU = QU[UU];
          XU.isEnabled() && bU.d.prototype.push.call(cU, XU)
        }
        return yU(cU, zU), cU
      }, {
        kyU: () => oU.culled,
        UyU: (UU, XU) => {
          const yU = Math.floor(XU[0] / QU),
            FU = Math.floor(XU[1] / QU),
            oU = Math.floor(XU[2] / QU),
            DU = `${yU}|${FU}|${oU}`;
          let EU = AU.get(DU);
          if (!EU) {
            const UU = [0, 0, 0];
            zU.FzU([yU * QU - 1, FU * QU - 1, oU * QU - 1], null, UU), EU = Object.assign(cU(UU, QU + 2), {
              GyU: DU,
              ByU: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: kU()
            }), GU(EU), IU[EU._noaSlot] = (0, TU.k)(yU, FU, oU), pU[3 * EU._noaSlot] = yU, pU[3 * EU._noaSlot + 1] = FU, pU[3 * EU._noaSlot + 2] = oU, AU.set(DU, EU)
          }
          EU.ByU++, UU.metadata[hU.z] = EU
        },
        ZH: UU => {
          const XU = UU.metadata[hU.z];
          XU && (XU.ByU--, XU.ByU <= 0 && (AU.delete(XU.GyU), tU.push(XU._noaSlot)), UU.metadata[hU.z] = null)
        },
        ayU: (UU, XU) => {
          const zU = UU,
            cU = XU.metadata[hU.z];
          (zU._noaSlots ??= []).push(cU._noaSlot), (zU._noaStamps ??= []).push(0), (zU._noaTerrain ??= []).push(0), zU.entries.push(XU)
        },
        removeEntry: (UU, XU) => {
          const zU = UU,
            cU = zU.entries,
            yU = cU.indexOf(XU);
          if (yU < 0) return;
          const QU = zU._noaSlots,
            AU = zU._noaStamps,
            FU = zU._noaTerrain,
            oU = cU.length - 1;
          cU[yU] = cU[oU], QU[yU] = QU[oU], AU[yU] = AU[oU], FU[yU] = FU[oU], cU.pop(), QU.pop(), AU.pop(), FU.pop()
        },
        VUU: UU => {
          for (const XU of AU.values()) {
            XU.DyU.ZyU(UU), XU.oyU.ZyU(UU);
            for (const zU of XU.gyU) zU.ZyU(UU);
            GU(XU)
          }
        }
      }
    }

    function ZX(UU, XU) {
      return XU.set(UU), XU
    }

    function RX(UU, XU, zU) {
      const cU = UU[XU],
        yU = UU[XU + 1],
        QU = UU[XU + 2],
        AU = UU[XU + 3],
        FU = UU[XU + 4],
        oU = UU[XU + 5];
      for (let DU = 0; DU < 24; DU += 4) {
        const UU = zU[DU],
          XU = zU[DU + 1],
          EU = zU[DU + 2];
        if (!(UU * (UU >= 0 ? AU : cU) + XU * (XU >= 0 ? FU : yU) + EU * (EU >= 0 ? oU : QU) + zU[DU + 3] >= 0)) return !1
      }
      return !0
    }
    var PX = zU(38508);
    class WX {
      constructor(UU, XU) {
        var zU = UU.sa;
        zU.ncU(new KU.b(zU));
        var cU = new JU.e(oU);
        zU.PyU = cU, cU.blocks = [];
        var yU, QU = {},
          FU = [];
        this.textPlanes = FU, this.kyU = () => yU.kyU(), this.VUU = UU => {
          EU(cU, UU), yU.VUU(UU)
        }, this.UyU = (XU, zU, AU) => {
          if (!XU.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!XU.metadata[hU.w] && !XU.metadata[hU.m]) {
            if (!zU) {
              var oU = cU.tyU;
              if (XU.metadata[hU.F] && !XU.parent) {
                oU = FU;
                var EU = XU.gM().dyU;
                XU.metadata[hU.I] = EU.center.length() + EU.radius, XU.Op = !0
              }
              return oU.push(XU), XU.metadata[hU.j] = oU, void(XU.metadata[hU.m] = !0)
            }
            var NU = Math.floor(AU[0] / DU),
              IU = Math.floor(AU[1] / DU),
              pU = Math.floor(AU[2] / DU),
              aU = NU + "|" + IU + "|" + pU,
              tU = QU[aU];
            if (!tU) {
              var gU = [NU * DU, IU * DU, pU * DU],
                kU = [0, 0, 0];
              UU.WN.FzU(gU, null, kU), tU = YU(kU, DU), cU.blocks.push(tU), QU[aU] = tU, tU.GyU = aU
            }
            yU.UyU(XU, AU), yU.ayU(tU, XU), tU.ByU = (tU.ByU || 0) + 1, XU.metadata[hU.w] = tU, XU.metadata[hU.o] = !0, XU.Op = !0
          }
        }, this.ZH = UU => {
          if (UU.metadata) {
            UU.metadata[hU.m] && ((0, TU.p)(UU.metadata[hU.j], UU), UU.metadata[hU.m] = !1), UU.metadata[hU.j] === FU && (UU.Op = !1), UU.metadata[hU.j] = void 0, UU.metadata[hU.I] = void 0;
            var XU = UU.metadata[hU.w];
            XU && XU.entries && (UU.metadata[hU.o] && yU.removeEntry(XU, UU), XU.ByU--, XU.ByU <= 0 && (delete QU[XU.GyU], (0, TU.p)(cU.blocks, XU))), yU.ZH(UU), UU.metadata[hU.w] = null, UU.metadata[hU.o] = !1
          }
        }, this.RUU = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (UU.metadata[hU.w]) {
            if (UU.metadata[hU.o] === XU) return;
            var zU = UU.metadata[hU.w];
            zU && zU.entries && (XU ? yU.ayU(zU, UU) : yU.removeEntry(zU, UU)), UU.metadata[hU.o] = XU
          } else {
            if (UU.metadata[hU.m] === XU) return;
            var QU = UU.metadata[hU.j] || cU.tyU;
            XU ? QU.push(UU) : (0, TU.p)(QU, UU), UU.metadata[hU.m] = XU
          }
        };
        var oU = () => {},
          DU = XU * UU.WN.qY.tY,
          EU = (UU, XU) => {
            UU.blocks.forEach((UU => {
              UU.DyU.ZyU(XU), UU.oyU.ZyU(XU), UU.gyU.forEach((UU => UU.ZyU(XU))), UU.blocks && EU(UU, XU)
            }))
          },
          YU = (UU, XU) => {
            var zU = new AU.Sp(UU[0], UU[1], UU[2]),
              cU = new AU.Sp(UU[0] + XU, UU[1] + XU, UU[2] + XU);
            return new jU.c(zU, cU, void 0, void 0, void 0, oU)
          };
        yU = BX(zU, cU, UU.WN, YU, ((UU, XU) => {
          for (var zU = 0; zU < FU.length; zU++) {
            var cU = FU[zU];
            cU.isEnabled(!1) && ((0, PX.e)(cU, XU) && bU.d.prototype.push.call(UU, cU))
          }
        }))
      }
    }

    function dX(UU) {
      const {
        holderPosition: XU,
        holderRotation: zU,
        n_: cU,
        fov: yU,
        near: QU,
        far: AU
      } = UU.model.v_, FU = UU.ryU;
      FU.position.sUU(XU[0], XU[1], XU[2]), FU.rotation.sUU(zU[0], zU[1], zU[2]);
      const oU = UU.camera;
      oU.position.sUU(cU[0], cU[1], cU[2]), oU.fov = yU, oU.minZ = QU, oU.maxZ = AU
    }

    function LX(UU) {
      const XU = UU.qp(),
        zU = XU,
        cU = zU._gl;
      if (!cU || zU.Fa < 2 || XU.XyU || cU.getParameter(cU.DEPTH_BITS) < 24) return !1;
      const yU = UU._renderingManager,
        QU = yU.getRenderingGroup(-1),
        AU = yU.getRenderingGroup(0),
        FU = sU.c.prototype.render;
      return QU.render = function(UU, XU, zU, cU, yU, QU, oU, DU, EU) {
        (UU || AU._empty) && FU.call(this, UU, XU, zU, cU, yU, QU, oU, DU, EU)
      }, AU.render = function(UU, zU, yU, AU) {
        let oU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          DU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          YU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          NU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          IU = arguments.length > 8 ? arguments[8] : void 0;
        UU ? FU.call(this, UU, zU, yU, AU, oU, DU, YU, NU, IU) : (XU.setAlphaMode(EU.b.ALPHA_DISABLE), FU.call(this, null, !1, !1, AU, oU, DU, YU, !1), QU._empty || (cU.depthRange(1, 1), FU.call(QU, null, zU, yU, AU, oU, DU, YU, NU, IU), cU.depthRange(0, 1)), FU.call(this, null, zU, yU, AU, !1, !1, !1, NU, IU))
      }, !0
    }

    function eX(UU, XU) {
      return [XU, xU.e].map(((XU, zU) => {
        const cU = new yU.e("light", AU.Sp.FromArray(XU), UU);
        return cU.diffuse = QU.Color3.FromArray([1, 1, 1]), cU.specular = QU.Color3.FromArray([1, 1, 1]), cU.intensity = xU.d[zU], cU
      }))
    }
    class CX extends oU.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(UU) {
        var XU;
        this.heldTexture = UU, this.particleTexture = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.mirror) && void 0 !== XU ? XU : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        UU && (this.particleTexture = null, (0, DU.B)(this.heldTexture), this.heldTexture = null), super.dispose(UU, XU, zU)
      }
    }

    function wX(UU, XU, zU, cU) {
      return XU && !XU.failed ? XU.lH(zU, cU) : new CX(zU, cU, UU)
    }
    const qX = new WeakMap;

    function OX(UU, XU, zU) {
      var cU;
      let yU = null !== (cU = qX.get(UU)) && void 0 !== cU ? cU : null;
      return !yU && UU.qp().Fa >= 2 && (yU = new rU(UU, (XU => {
        console.error(`Particle programs failed in scene ${UU.uid}: ${XU}`)
      })), qX.set(UU, yU)), wX(UU, yU, XU, zU)
    }
    const SX = cU.d.Zero();
    const rX = {
      tcU: function(UU, XU) {
        return new fU(UU, XU.NcU, {
          preserveDrawingBuffer: XU.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      iyU: function(UU, XU) {
        ! function(UU, XU, zU) {
          const cU = new mU.e(UU.engine);
          UU.sa = cU, cU.detachControl(), cU.autoClear = !1, nU.e.MIN_RENDERINGGROUPS = -1;
          for (let QU = nU.e.MIN_RENDERINGGROUPS; QU <= 1; QU++) cU.setRenderingOrder(QU, sU.c.PainterSortCompare, sU.c.PainterSortCompare, sU.c.PainterSortCompare);
          cU.setRenderingAutoClearDepthStencil(0, !1), VU.b.Enabled = !1, UU.wyU = new WX(UU, Math.round(XU.OyU)), UU.ryU = new vU.c("camHolder", cU), UU.camera = new MU.b("camera", new AU.Sp(0, 0, 0), cU), UU.camera.parent = UU.ryU, dX(UU), (0, xU.i)(UU, ((UU, XU, zU) => (0, lU.i)(XU, zU, UU.sa))), cU.clearColor = QU.e.FromArray(XU.clearColor), cU.ambientColor = QU.Color3.FromArray(XU.ambientColor);
          const yU = zU(cU, XU.fyU);
          cU.onNewLightAddedObservable.add((UU => {
            yU.some((XU => XU === UU)) || console.error(`Light "${UU.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), cU.skipPointerMovePicking = !0
        }(UU, XU, eX), LX(UU.sa)
      },
      SyU: dX,
      setBabylonFog: function(UU, XU, zU, cU) {
        const yU = UU.sa;
        yU.fogMode = 3, yU.fogStart = XU, yU.fogEnd = zU, yU.fogColor.set(cU[0], cU[1], cU[2])
      },
      MyU: function(UU, XU, zU) {
        return UU.engine.Fa >= 2 && !UU.vyU && (UU.vyU = new rU(UU.sa, UU.VyU)), wX(UU.sa, UU.vyU, XU, zU)
      },
      nyU: function(UU, XU) {
        UU.sa.nB.forEach((zU => {
          if (zU instanceof OU) return void zU.VUU(XU, UU.WN.VN);
          const cU = zU;
          if (cU.emitter.getConnectedParticleSystems)
            for (const UU of cU._particles) UU.position.set(UU.position.x - XU[0], UU.position.y - XU[1], UU.position.z - XU[2]);
          else {
            if (!cU.worldOffset) throw new Error("Particle system has no world offset");
            cU.worldOffset.x = -UU.WN.VN[0], cU.worldOffset.y = -UU.WN.VN[1], cU.worldOffset.z = -UU.WN.VN[2]
          }
        }))
      },
      linesFromArrays: function(UU, XU, zU) {
        const cU = new FU.d(XU, UU.sa, null, void 0, void 0, !1);
        return (0, lU.f)(XU, zU, UU.sa, cU), cU
      },
      na: aX,
      syU: function(UU, XU) {
        return SX.origin.YL(XU.origin), SX.direction.YL(XU.direction), SX.length = XU.length, SX.epsilon = XU.epsilon, SX.syU(UU, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42229: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => VU,
      i: () => kU,
      l: () => JU
    });
    var cU = zU(41348),
      yU = zU(42233),
      QU = zU(42279),
      AU = zU(42242),
      FU = zU(38563),
      oU = zU(38573),
      DU = zU(38581),
      EU = zU(38589),
      YU = zU(37995),
      NU = zU(38004),
      IU = zU(42248),
      pU = zU(37961),
      aU = zU(37977),
      tU = zU(37946);

    function gU(UU, XU) {
      return Object.assign((function(UU, zU, cU, yU) {
        return XU(this.featureState, UU, zU, cU, yU)
      }), {
        FY: UU
      })
    }

    function kU(UU) {
      const XU = class extends IU.c {
          constructor(XU, zU) {
            const cU = (0, aU.V)(XU),
              yU = cU && (0, aU.v)(cU, UU.name);
            for (var QU = arguments.length, AU = new Array(QU > 2 ? QU - 2 : 0), FU = 2; FU < QU; FU++) AU[FU - 2] = arguments[FU];
            super(XU, UU.name, UU.priority, yU ? yU.defines : UU.defines(...AU), !1), this.featureState = void 0, this.featureState = zU, this._pluginManager._addPlugin(this), this._enable(!0), (0, aU.x)(this._material, UU, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return UU.className
          }
          isCompatible(UU) {
            return UU === tU.b.GLSL || UU === tU.b.WGSL
          }
        },
        zU = (0, pU.j)(UU);
      for (const [cU, yU] of Object.entries(pU.e)) {
        const QU = UU[cU];
        if (QU) {
          const UU = zU[cU];
          Object.defineProperty(XU.prototype, yU, {
            value: gU(QU, UU),
            writable: !0,
            configurable: !0
          })
        }
      }
      return XU
    }
    class GU extends(kU(FU.c)) {}
    var BU = zU(40929),
      ZU = zU(42257),
      RU = zU(42259);

    function PU(UU, XU, zU) {
      return (0, RU.g)(zU, XU.urls, (() => async function(UU, XU, zU) {
        const {
          width: cU
        } = UU[0].getSize(), yU = UU.map(((UU, zU) => {
          var yU;
          const QU = Math.round(UU.getSize().height / cU),
            AU = null === XU || void 0 === XU ? void 0 : XU[zU];
          return {
            pixels: AU && AU.byteLength === cU * cU * QU * 4 ? AU : null !== (yU = WU.get(UU.getInternalTexture())) && void 0 !== yU ? yU : UU._readPixelsSync(),
            layers: QU
          }
        })), QU = Math.min(zU.qp().getCaps().texture2DArrayMaxLayerCount, 256), FU = (0, RU.d)(yU, cU, QU).map((UU => {
          let {
            pixels: XU,
            layers: yU
          } = UU;
          return {
            atlas: new ZU.b(XU, cU, cU, yU, BU.c.TEXTUREFORMAT_RGBA, zU, !0, !1, AU.b.NEAREST_NEAREST_MIPLINEAR),
            layers: yU
          }
        }));
        return UU.forEach(((UU, XU) => {
          const cU = UU.getInternalTexture();
          WU.has(cU) || (! function(UU, XU) {
            const zU = XU.createRawTexture(new Uint8Array(4), 1, 1, BU.c.TEXTUREFORMAT_RGBA, !1, !1, AU.b.NEAREST_SAMPLINGMODE);
            UU._hardwareTexture.release(), XU.unbindAllTextures(), zU._swapAndDie(UU, !1)
          }(cU, zU.qp()), WU.set(cU, yU[XU].pixels))
        })), FU
      }(UU, XU.pixels, zU)))
    }
    const WU = new WeakMap;
    var dU = zU(38592);
    class LU extends(kU(oU.j)) {
      constructor(UU, XU) {
        super(UU, XU), this.loaded = new Set, this.mirrors = void 0, this.mirrors = XU.textures.map((UU => UU.mirror)), XU.useWebGL2 && !XU.imagesPerAtlas.length && XU.textureAtlases.splice(0, XU.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((UU, XU) => {
          UU.onLoadObservable.add((UU => {
            this.setTextureArrayData(UU, XU).catch((UU => {
              console.error(`Failed to build the texture arrays, at atlas ${XU}`, UU)
            }))
          }))
        })), (0, dU.h)(XU, UU.shaderLanguage)
      }
      async setTextureArrayData(UU, XU) {
        const zU = this.featureState,
          {
            width: cU,
            height: yU
          } = UU.getSize(),
          QU = this._material.shaderLanguage;
        if (!zU.useWebGL2) return void(0, dU.d)(this._material, zU, XU, cU, Math.round(yU / cU), QU);
        if (this.loaded.add(XU), this.loaded.size < this.mirrors.length) return;
        const AU = await PU(this.mirrors, zU.sources, this._material.nS());
        (0, dU.b)(this._material, zU, AU, cU, QU)
      }
    }
    var eU = zU(42261),
      CU = zU(41387),
      wU = zU(37814),
      qU = zU(42269),
      OU = zU(41493),
      SU = zU(41378),
      rU = zU(42205),
      uU = zU(38236),
      fU = zU(42273);
    class iU extends eU.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const HU = {
      Mesh: qU.d,
      TransformNode: rU.c,
      XY: eU.b,
      VertexBuffer: eU.e,
      BoundingInfo: CU.b,
      Sp: wU.Sp,
      ArenaBuffer: iU,
      SubMesh: SU.d,
      VertexData: OU.c,
      MirroredGeometry: fU.e,
      meshFromArrays: fU.f,
      plainMeshFromArrays: fU.i
    };
    (0, uU.d)(HU);
    var MU = zU(38057);
    class vU extends(kU(EU.h)) {
      constructor(UU, XU) {
        if (super(UU, XU), UU instanceof cU.StandardMaterial && XU.dirLightCount > 0) {
          const XU = UU,
            zU = XU._blockDirtyMechanism;
          XU._blockDirtyMechanism = !0, UU.disableLighting = !0, XU._blockDirtyMechanism = zU;
          const cU = (0, aU.V)(UU);
          cU && (cU.disableLighting = !0, (0, aU.T)(cU))
        }(0, MU.h)(UU)
      }
      dispose(UU) {
        (0, MU.k)(this._material), super.dispose(UU)
      }
    }

    function VU(UU, XU) {
      if (!(XU instanceof cU.StandardMaterial) || XU.specularTexture) return;
      const {
        r: zU,
        g: yU,
        b: QU
      } = XU.specularColor;
      0 === zU && 0 === yU && 0 === QU && (UU.SPECULARTERM = !1)
    }(0, EU.f)({
      disableUnusedSpecularTerm: VU
    });
    var sU = zU(38007),
      nU = zU(38243);
    const mU = new RegExp(`^#define ${DU.b}\\s*$`, "m");
    class lU extends(kU(DU.f)) {
      constructor(UU, XU) {
        super(UU, XU), this.kp = !1, XU.ditherOnlyWhileFading && (nU.e.add(UU), this.prewarmDitherTwins(UU))
      }
      prewarmDitherTwins(UU) {
        const XU = new WeakSet;
        UU.onEffectCreatedObservable.add((zU => {
          let {
            effect: cU,
            subMesh: yU
          } = zU;
          if (this.featureState.prewarmingDither || XU.has(cU)) return;
          XU.add(cU);
          const QU = null === yU || void 0 === yU ? void 0 : yU.getMesh();
          QU && !mU.test(cU.defines) && UU.nS().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(QU) || XU.delete(cU)
          }))
        }))
      }
      prewarmDither(UU) {
        if (this.kp || UU.oR()) return !1;
        const XU = new SU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(UU, XU)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== XU.effect
      }
      dispose(UU) {
        this.kp = !0, super.dispose(UU)
      }
    }
    const xU = new Map;

    function JU(UU, XU) {
      xU.set(UU, XU)
    }
    JU(FU.c, GU), JU(oU.j, LU), JU(DU.f, lU), JU(EU.h, vU), (0, YU.e)({
      create: (UU, XU) => {
        const zU = new cU.StandardMaterial(UU.name, XU);
        return (0, sU.m)(UU, zU), zU.detailMap._pluginDefineNames
      },
      write: (UU, XU, zU) => {
        (0, sU.S)(UU.mirror, XU, zU)
      },
      addFeature: (UU, XU, zU) => {
        const cU = xU.get(XU.feature);
        if (!cU) throw new Error(`${XU.feature.name} has no plugin class (registerPluginClass)`);
        new cU(UU.mirror, XU.state, ...zU)
      },
      texture: (UU, XU, zU) => {
        let {
          url: cU,
          noMipmap: yU,
          invertY: QU,
          samplingMode: FU,
          data: oU,
          sets: DU
        } = zU;
        if (!oU) {
          const zU = new AU.b(cU, XU, yU, QU, FU);
          return Object.assign(zU, DU), void(0, NU.I)(UU, zU)
        }
        const EU = {},
          YU = new Promise(((UU, XU) => {
            EU.onLoad = UU, EU.onError = (UU, zU) => {
              XU(new Error(`${oU.context}: ${(null===zU||void 0===zU?void 0:zU.message)||UU||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: IU,
            bytes: pU,
            label: aU
          } = oU,
          tU = {
            noMipmap: yU,
            invertY: !1,
            samplingMode: FU,
            ...EU,
            mimeType: IU,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          gU = new AU.b(null, XU, tU);
        sU.n.set(gU, YU), Object.assign(gU, DU), gU.updateURL(cU, pU);
        const kU = gU.getInternalTexture();
        kU && (kU.label = aU), UU.uvSet = gU.coordinatesIndex, UU.matrix.set((0, sU.J)(gU)), (0, NU.I)(UU, gU)
      },
      cube: (UU, XU, zU) => {
        let {
          rootUrl: cU,
          files: QU,
          noMipmap: FU,
          luminance: oU
        } = zU;
        const {
          samplingMode: DU
        } = UU.sampler, EU = DU === (0, NU.A)(FU) ? null : () => {
          (0, sU.F)(YU, DU)
        }, YU = new yU.b(cU, XU, null, FU, QU, EU, null, (0, NU.w)(oU));
        YU.coordinatesMode = AU.b.SKYBOX_MODE, (0, NU.I)(UU, YU)
      },
      canvas: (UU, XU, zU) => {
        let {
          width: cU,
          height: yU,
          mipmaps: FU,
          samplingMode: oU,
          hasAlpha: DU = !1,
          wrap: EU = AU.b.CLAMP_ADDRESSMODE
        } = zU;
        const YU = new QU.e(XU, {
          width: cU,
          height: yU
        }, UU, FU, oU);
        YU.hasAlpha = DU, YU.wrapU = EU, YU.wrapV = EU;
        const NU = (0, sU.v)(YU);
        return (0, sU.x)(NU, YU), NU
      }
    })
  },
  42273: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      f: () => YU,
      i: () => NU
    });
    var cU = zU(42261),
      yU = zU(41177),
      QU = zU(41387),
      AU = zU(41495),
      FU = zU(42269),
      oU = zU(41493),
      DU = zU(38121);
    class EU extends AU.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (UU, XU) => {
          this.releaseUnlessInstanced(XU)
        }, this.onLinked = null
      }
      link(UU) {
        var XU;
        (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
      }
      relink() {
        this.release();
        const UU = [];
        for (const yU of Object.values(this._vertexBuffers))
          if (!yU.getIsInstanced()) {
            const {
              byteOffset: XU,
              byteStride: zU,
              type: cU,
              normalized: QU
            } = yU;
            UU.push({
              kind: yU.getKind(),
              data: yU.getData(),
              offset: XU,
              stride: zU,
              components: yU.getSize(),
              glType: cU,
              isNormalized: QU
            })
          } const XU = this._indices.length ? this._indices : null,
          {
            minimum: zU,
            maximum: cU
          } = this.extend;
        this.link(new DU.h(UU, XU, this.getTotalVertices(), new Float64Array(zU.cyU()), new Float64Array(cU.cyU())))
      }
      copy(UU) {
        if (!this.model) return super.copy(UU);
        const XU = new EU(UU, this.nS()),
          zU = this.yyU(void 0, !0);
        zU && XU.setIndices(zU);
        let AU = !1;
        for (const QU in this._vertexBuffers) {
          const UU = this._vertexBuffers[QU],
            zU = UU.getData();
          if (!zU) continue;
          const FU = UU.getSize(),
            {
              type: oU,
              byteOffset: DU,
              byteStride: EU,
              normalized: YU
            } = UU;
          AU ||= UU.isUpdatable();
          const NU = UU.getIsInstanced() ? (zU instanceof Array ? 4 * zU.length : zU.byteLength) / EU : this.getTotalVertices(),
            IU = (0, yU.s)(zU, FU, oU, DU, EU, NU, !0),
            pU = {
              updatable: UU.isUpdatable(),
              stride: FU,
              type: oU,
              normalized: YU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            };
          XU.setVerticesBuffer(new cU.e(this.qp(), IU, QU, pU), NU)
        }
        return XU._updatable = AU, XU._boundingInfo = new QU.b(this.extend.minimum, this.extend.maximum), XU.relink(), XU
      }
      static mergeMeshes(UU, XU, zU, cU, yU, QU) {
        const oU = UU[0].nS(),
          DU = new FU.d(UU[0].name + "_merged", oU),
          YU = new EU(AU.d.RandomId(), oU, void 0, !1, DU);
        try {
          if (!FU.d.MergeMeshes(UU, XU, zU, DU, yU, QU)) return DU.dispose(), null
        } catch (NU) {
          throw DU.dispose(), NU
        }
        return YU.relink(), DU
      }
      removeVerticesData(UU) {
        this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(UU) {
        var XU;
        UU && null !== (XU = this.getVertexBuffer(UU)) && void 0 !== XU && XU.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, DU.w)(this.model), this.model = null)
      }
    }

    function YU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new FU.d(UU, zU);
      const yU = (0, DU.l)(XU),
        {
          positions: QU,
          normals: YU,
          uvs: NU,
          indices: IU,
          named: pU = {}
        } = XU,
        aU = new oU.c;
      aU.positions = QU, aU.normals = null !== YU && void 0 !== YU ? YU : null, aU.uvs = null !== NU && void 0 !== NU ? NU : null, aU.indices = IU;
      const tU = new EU(AU.d.RandomId(), zU, aU, !1, cU);
      for (const {
          kind: AU,
          components: FU
        }
        of yU.vertexAttributes) AU in pU && cU.setVerticesData(AU, pU[AU], !1, FU);
      return tU.link(yU), cU
    }

    function NU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const yU = new FU.d(UU, zU),
        {
          positions: QU,
          normals: AU,
          uvs: DU,
          indices: EU
        } = XU;
      return Object.assign(new oU.c, {
        positions: QU,
        normals: AU,
        uvs: DU,
        indices: EU
      }).applyToMesh(yU, cU), yU
    }
  },
  39516: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      f: () => AU,
      j: () => QU,
      n: () => yU,
      p: () => FU,
      q: () => DU,
      r: () => EU,
      t: () => oU
    });
    const cU = 16,
      yU = 256,
      QU = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      AU = 16,
      FU = 256,
      oU = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + cU,
        color2: 12 + 5 * cU,
        Et: 12 + 9 * cU,
        remap: 12 + 13 * cU
      },
      DU = 12 + 17 * cU,
      EU = [oU.colorCount, oU.velocityCount, oU.remapCount, oU.ramp]
  },
  39514: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => tU,
      d: () => GU
    });
    var cU = zU(37855),
      yU = zU(37814),
      QU = zU(38004),
      AU = zU(39516);
    class FU {
      constructor(UU) {
        this.xY = UU, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const XU = Math.max(1, UU);
        this.records = new Float32Array(XU * AU.f), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(XU).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(UU) {
        const XU = this.xY;
        for (let zU = 0; zU < XU; zU++) {
          const zU = this.cursor;
          if (this.cursor = zU + 1 === XU ? 0 : zU + 1, this.deaths[zU] <= UU) return zU
        }
        return -1
      }
      written(UU, XU) {
        this.deaths[UU] = XU, UU >= this.highWater && (this.highWater = UU + 1), this.uploadFrom < 0 ? (this.uploadFrom = UU, this.uploadTo = UU + 1) : UU >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, UU + 1) : this.wrapTo = Math.max(this.wrapTo, UU + 1)
      }
      shiftTimes(UU) {
        const XU = this.records,
          zU = this.highWater * AU.f;
        for (let cU = AU.j.time; cU < zU; cU += AU.f) XU[cU] -= UU;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(UU) {
        this.uploadFrom >= 0 && (UU(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && UU(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(UU) {
        let XU = 0;
        for (let zU = 0; zU < this.highWater; zU++) this.deaths[zU] > UU && XU++;
        return XU
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var oU = zU(37919),
      DU = zU(39519),
      EU = zU(39525),
      YU = zU(39529);
    class NU {
      constructor() {
        this.particleEmitterType = new EU.e, this.texture = null, this.blendMode = YU.d, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = yU.Sp.Zero(), this.worldOffset = new yU.Sp(0, 0, 0), this.color1 = new oU.e(1, 1, 1, 1), this.color2 = new oU.e(1, 1, 1, 1), this.colorDead = new oU.e(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var UU;
        return null !== (UU = IU(this).direction1) && void 0 !== UU ? UU : yU.Sp.Zero()
      }
      set direction1(UU) {
        const XU = IU(this);
        XU.direction1 && (XU.direction1 = UU)
      }
      get direction2() {
        var UU;
        return null !== (UU = IU(this).direction2) && void 0 !== UU ? UU : yU.Sp.Zero()
      }
      set direction2(UU) {
        const XU = IU(this);
        XU.direction2 && (XU.direction2 = UU)
      }
      get minEmitBox() {
        var UU;
        return null !== (UU = IU(this).minEmitBox) && void 0 !== UU ? UU : yU.Sp.Zero()
      }
      set minEmitBox(UU) {
        const XU = IU(this);
        XU.minEmitBox && (XU.minEmitBox = UU)
      }
      get maxEmitBox() {
        var UU;
        return null !== (UU = IU(this).maxEmitBox) && void 0 !== UU ? UU : yU.Sp.Zero()
      }
      set maxEmitBox(UU) {
        const XU = IU(this);
        XU.maxEmitBox && (XU.maxEmitBox = UU)
      }
      createBoxEmitter(UU, XU, zU, cU) {
        const yU = new EU.e;
        return this.particleEmitterType = yU, yU.direction1 = UU, yU.direction2 = XU, yU.minEmitBox = zU, yU.maxEmitBox = cU, yU
      }
      addColorGradient(UU, XU, zU) {
        return this.colorGradients ??= [], this.colorGradients.push(new DU.c(UU, XU, zU)), this.colorGradients.sort(pU), this
      }
      removeColorGradient(UU) {
        return aU(this.colorGradients, UU), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(UU, XU, zU) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new DU.e(UU, XU, zU)), this.velocityGradients.sort(pU), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(UU, XU, zU) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new DU.e(UU, XU, zU)), this.colorRemapGradients.sort(pU), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(UU, XU) {
        return this.rampGradients ??= [], this.rampGradients.push(new DU.d(UU, XU)), this.rampGradients.sort(pU), this
      }
      removeRampGradient(UU) {
        return aU(this.rampGradients, UU), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function IU(UU) {
      return UU.particleEmitterType
    }

    function pU(UU, XU) {
      return UU.gradient < XU.gradient ? -1 : UU.gradient > XU.gradient ? 1 : 0
    }

    function aU(UU, XU) {
      const zU = UU ? UU.findIndex((UU => UU.gradient === XU)) : -1;
      zU >= 0 && UU.splice(zU, 1)
    }
    class tU extends NU {
      constructor(UU, XU, zU) {
        super(), this.name = UU, this.host = zU, this.onDispose = gU, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = yU.Sp.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.kp = !1, this.emitterMatrix = new yU.Matrix, this.inverseEmitterMatrix = new yU.Matrix, this.spawned = {
          position: new yU.Sp,
          direction: new yU.Sp
        }, this.ring = new FU(XU)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(UU) {
        var XU;
        null === (XU = this.emitterDisposed) || void 0 === XU || XU.remove(), this.emitterDisposed = null, this.emitterValue = UU, UU && BU(UU) && (this.emitterDisposed = UU.bS.add((() => {
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
        return !this.kp && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var UU;
        let XU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.kp || (this.kp = !0, null === (UU = this.emitterDisposed) || void 0 === UU || UU.remove(), this.emitterDisposed = null, XU && ((0, QU.B)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(UU) {
        const XU = this.emitter;
        return !!XU && !(BU(XU) && !XU.isEnabled()) && this.animate(UU)
      }
      animate(UU) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const XU = this.updateSpeed * UU;
        let zU;
        return this.manualEmitCount > -1 ? (zU = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (zU = this.emitRate * XU | 0, this.newPartsExcess += this.emitRate * XU - zU), this.newPartsExcess > 1 && (zU += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (zU = 0), this.alive = this.liveUntil > this.time, this.time += XU, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), zU > 0 && this.spawn(zU), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.kp && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var UU;
        return this.started = !1, null === (UU = this.onAnimationEnd) || void 0 === UU || UU.call(this), !!this.kp || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(UU, XU) {
        UU[XU] = this.anchor[0] + this.shift[0] + this.worldOffset.x, UU[XU + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, UU[XU + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      VUU(UU, XU) {
        this.emitterValue && BU(this.emitterValue) ? (this.shift[0] -= UU[0], this.shift[1] -= UU[1], this.shift[2] -= UU[2]) : this.worldOffset.set(-XU[0], -XU[1], -XU[2])
      }
      spawn(UU) {
        var XU, zU;
        const QU = this.emitterValue,
          FU = BU(QU) ? QU.getWorldMatrix() : yU.Matrix.TranslationToRef(QU.x, QU.y, QU.z, this.emitterMatrix);
        FU.invertToRef(this.inverseEmitterMatrix);
        const {
          position: oU,
          direction: DU
        } = this.spawned, EU = this.spawned, YU = this.ring, NU = this.liveUntil <= this.time;
        NU && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, YU.restart());
        const {
          records: IU,
          recordBits: pU
        } = YU, aU = AU.j, tU = null === (XU = this.getColorGradients()) || void 0 === XU ? void 0 : XU[0], gU = tU ? tU.color1 : this.color1, kU = tU ? null !== (zU = tU.color2) && void 0 !== zU ? zU : tU.color1 : this.color2;
        for (let yU = 0; yU < UU; yU++) {
          const UU = YU.freeSlot(this.time);
          if (UU < 0) break;
          const XU = (0, cU.RandomRange)(this.minLifeTime, this.maxLifeTime),
            zU = (0, cU.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(FU, oU, EU, !1), this.particleEmitterType.startDirectionFunction(FU, DU, EU, !1, this.inverseEmitterMatrix), 0 === zU ? DU.set(0, 0, 0) : DU.scaleInPlace(zU);
          const QU = (0, cU.RandomRange)(this.minSize, this.maxSize);
          NU && 0 === yU && (this.anchor[0] = oU.x, this.anchor[1] = oU.y, this.anchor[2] = oU.z);
          const tU = UU * AU.f;
          IU[tU + aU.position] = oU.x - this.anchor[0] - this.shift[0], IU[tU + aU.position + 1] = oU.y - this.anchor[1] - this.shift[1], IU[tU + aU.position + 2] = oU.z - this.anchor[2] - this.shift[2], IU[tU + aU.time] = this.time - this.epoch, IU[tU + aU.direction] = DU.x, IU[tU + aU.direction + 1] = DU.y, IU[tU + aU.direction + 2] = DU.z, IU[tU + aU.lifeTime] = XU, IU[tU + aU.size] = QU, pU[tU + aU.seed] = 4294967296 * Math.random() >>> 0;
          const GU = Math.random();
          IU[tU + aU.colour] = gU.r + (kU.r - gU.r) * GU, IU[tU + aU.colour + 1] = gU.g + (kU.g - gU.g) * GU, IU[tU + aU.colour + 2] = gU.b + (kU.b - gU.b) * GU, IU[tU + aU.colour + 3] = gU.a + (kU.a - gU.a) * GU;
          const BU = this.time + XU;
          BU > this.liveUntil && (this.liveUntil = BU), YU.written(UU, BU)
        }
      }
    }

    function gU() {}
    const kU = 5;

    function GU(UU, XU) {
      const zU = [];
      let cU = 0;
      for (const yU of UU) yU.isReady() || (cU++, zU.length < kU && zU.push(`${XU} particle system ${yU.name}`));
      return cU > zU.length && zU.push(`${cU-zU.length} more ${XU} particle systems`), zU
    }

    function BU(UU) {
      return void 0 !== UU.position
    }
  },
  44281: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => tU,
      e: () => FU,
      i: () => AU,
      m: () => DU
    });
    var cU = zU(37919),
      yU = zU(39519),
      QU = zU(39516);

    function AU(UU, XU, zU, cU) {
      const yU = QU.t;
      XU.fill(0), UU.gravity.toArray(XU, yU.gravity), UU.colorDead.toArray(XU, yU.colorDead), zU[yU.ramp] = UU.useRampGradients ? 1 : 0;
      const AU = UU.getColorGradients(),
        FU = NU(UU, AU, "colour", cU);
      zU[yU.colorCount] = FU;
      for (let QU = 0; QU < FU; QU++) {
        var oU;
        const UU = AU[IU(AU, QU)];
        XU[yU.colorPositions + QU] = UU.gradient, UU.color1.toArray(XU, yU.color1 + 4 * QU), (null !== (oU = UU.color2) && void 0 !== oU ? oU : UU.color1).toArray(XU, yU.color2 + 4 * QU)
      }
      const DU = UU.getVelocityGradients(),
        EU = NU(UU, DU, "Et", cU);
      zU[yU.velocityCount] = EU;
      for (let QU = 0; QU < EU; QU++) kU(XU, yU.Et + 4 * QU, DU[IU(DU, QU)]);
      const YU = UU.useRampGradients ? UU.getColorRemapGradients() : null,
        pU = NU(UU, YU, "colour remap", cU);
      zU[yU.remapCount] = pU;
      for (let QU = 0; QU < pU; QU++) kU(XU, yU.remap + 4 * QU, YU[IU(YU, QU)])
    }

    function FU() {
      return {
        key: [],
        texels: new Uint8Array(4 * QU.n)
      }
    }
    const oU = [];

    function DU(UU, XU) {
      return EU(UU, oU), !gU(oU, XU.key) && (XU.key.length = 0, XU.key.push(...oU), XU.key.length > 0 && function(UU, XU) {
        for (let zU = 0; zU < QU.n; zU++) yU.g.GetCurrentGradient(zU / QU.n, UU, ((UU, XU, zU) => {
          cU.Color3.LerpToRef(UU.color, XU.color, zU, YU)
        })), XU[4 * zU] = 255 * YU.r, XU[4 * zU + 1] = 255 * YU.g, XU[4 * zU + 2] = 255 * YU.b, XU[4 * zU + 3] = 255
      }(UU.getRampGradients(), XU.texels), !0)
    }

    function EU(UU, XU) {
      XU.length = 0;
      const zU = UU.useRampGradients ? UU.getRampGradients() : null;
      if (null !== zU && void 0 !== zU && zU.length) {
        XU.push(zU.length);
        for (const UU of zU) XU.push(UU.gradient, UU.color.r, UU.color.g, UU.color.b)
      }
    }
    const YU = new cU.Color3;

    function NU(UU, XU, zU, cU) {
      return XU ? XU.length > QU.c ? (cU(`particleStops:${zU}`, `GPU particles use the first 2 and last ${QU.c-2} of more than ${QU.c} ${zU} gradient stops (${UU.name})`), QU.c) : XU.length : 0
    }

    function IU(UU, XU) {
      return XU < 2 || UU.length <= QU.c ? XU : UU.length - QU.c + XU
    }
    const pU = new Float32Array(QU.q),
      aU = new Uint32Array(pU.buffer);

    function tU(UU, XU, zU) {
      return AU(UU, pU, aU, zU), XU && gU(aU, XU) ? null : aU.slice()
    }

    function gU(UU, XU) {
      if (UU.length !== XU.length) return !1;
      for (let zU = 0; zU < UU.length; zU++)
        if (UU[zU] !== XU[zU]) return !1;
      return !0
    }

    function kU(UU, XU, zU) {
      var cU;
      UU[XU] = zU.gradient, UU[XU + 1] = zU.factor1, UU[XU + 2] = null !== (cU = zU.factor2) && void 0 !== cU ? cU : zU.factor1
    }
  },
  42259: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      const cU = XU * XU * 4,
        yU = UU[0].layers,
        QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
        AU = new Uint8Array(QU * cU);
      UU.forEach(((XU, zU) => {
        const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
        AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
      }));
      const FU = Math.max(1, Math.min(QU, zU || QU));
      if (FU === QU) return [{
        pixels: AU,
        layers: QU
      }];
      const oU = [];
      for (let DU = 0; DU < QU; DU += FU) {
        const UU = Math.min(QU, DU + FU);
        oU.push({
          pixels: AU.slice(DU * cU, UU * cU),
          layers: UU - DU
        })
      }
      return oU
    }
    zU.d(XU, {
      d: () => cU,
      g: () => QU
    });
    const yU = new WeakMap;

    function QU(UU, XU, zU) {
      var cU, QU;
      const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
      yU.set(UU, AU);
      const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
      AU.set(XU[0], FU);
      const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
      if (oU) return oU.built;
      const DU = {
        urls: [...XU],
        built: zU()
      };
      return FU.push(DU), DU.built.catch((() => {
        FU.splice(FU.indexOf(DU), 1)
      })), DU.built
    }
  },
  39529: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      d: () => yU,
      g: () => oU,
      h: () => YU
    });
    var cU = zU(37915);
    const yU = 0,
      QU = 3,
      AU = 4,
      FU = new Map([
        [yU, cU.d.ALPHA_ONEONE],
        [1, cU.d.ALPHA_COMBINE],
        [2, cU.d.ALPHA_ADD],
        [QU, cU.d.ALPHA_MULTIPLY],
        [-1, cU.d.ALPHA_SUBTRACT]
      ]);

    function oU(UU) {
      var XU;
      return null !== (XU = FU.get(UU)) && void 0 !== XU ? XU : UU
    }
    const DU = [QU, 2],
      EU = new Map;

    function YU(UU) {
      if (UU === AU) return DU;
      let XU = EU.get(UU);
      return XU || (XU = [UU], EU.set(UU, XU)), XU
    }
  },
  44273: (UU, XU, zU) => {
    function cU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const XU = new Set;
      return (zU, cU) => {
        XU.has(zU) || (XU.add(zU), console.warn(UU + cU))
      }
    }
    zU.d(XU, {
      e: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);