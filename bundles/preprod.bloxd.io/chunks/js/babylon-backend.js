export const id = 0;
export const ids = [0];
export const modules = {
  41335: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      CapeMaterialPlugin: () => GQ,
      HueTintMaterialPlugin: () => UQ,
      LifeformMaterialPlugin: () => bQ,
      OverlayMaterialPlugin: () => vQ
    });
    var wQ = XQ(41344),
      qQ = XQ(38293);
    class TQ extends((0, wQ.i)(qQ.d)) {}(0, wQ.l)(qQ.d, TQ);
    var zQ = XQ(37456);
    class sQ extends((0, wQ.i)(zQ.e)) {}(0, wQ.l)(zQ.e, sQ);
    var FQ = XQ(38129);
    class PQ extends((0, wQ.i)(FQ.d)) {}(0, wQ.l)(FQ.d, PQ);
    var gQ = XQ(37698),
      JQ = XQ(40530),
      rQ = XQ(37696);
    class IQ extends((0, wQ.i)(rQ.h)) {
      constructor(QQ, WQ, XQ) {
        super(QQ, WQ, XQ), (0, gQ.j)(QQ)
      }
      dispose(QQ) {
        (0, gQ.n)(this._material), super.dispose(QQ)
      }
    }(0, wQ.l)(rQ.h, IQ), (0, rQ.i)({
      disableUnusedSpecularTerm: wQ.e,
      isLightingDisabled: QQ => QQ instanceof JQ.StandardMaterial && QQ.disableLighting
    });
    var jQ = XQ(38966);
    class BQ extends((0, wQ.i)(jQ.e)) {}(0, wQ.l)(jQ.e, BQ);
    var yQ = XQ(39081),
      VQ = XQ(37555),
      DQ = XQ(38427),
      pQ = XQ(37500);
    class GQ extends((0, wQ.i)(yQ.c)) {}(0, wQ.l)(yQ.c, GQ);
    class UQ extends((0, wQ.i)(VQ.d)) {}(0, wQ.l)(VQ.d, UQ);
    class bQ extends((0, wQ.i)(DQ.m)) {}(0, wQ.l)(DQ.m, bQ);
    class vQ extends((0, wQ.i)(pQ.c)) {}(0, wQ.l)(pQ.c, vQ)
  },
  41797: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      addBabylonLights: () => lW,
      default: () => cW
    });
    var wQ = XQ(41804),
      qQ = (XQ(40245), XQ(41326), XQ(40732), XQ(41815)),
      TQ = XQ(37539),
      zQ = XQ(37367),
      sQ = XQ(41827),
      FQ = XQ(41830),
      PQ = XQ(37492),
      gQ = (XQ(41344), XQ(41834)),
      JQ = XQ(41832),
      rQ = XQ(38991),
      IQ = XQ(41842),
      jQ = XQ(40126),
      BQ = XQ(38979);
    const yQ = "gpuParticles",
      VQ = "gpuParticlesSummed",
      DQ = BQ.u,
      pQ = QQ => QQ / 4,
      GQ = (QQ, WQ, XQ, wQ) => Array.from({
        length: WQ
      }, ((qQ, TQ) => `(${((QQ,WQ,XQ)=>0===WQ?`${QQ} < 1`:WQ===XQ-1?`${QQ} >= ${WQ}`:`${QQ} == ${WQ}`)(QQ,TQ,WQ)} ? ${XQ(TQ)} : ${wQ})`)).join("\n\t\t+ "),
      UQ = (QQ, WQ, XQ) => `vec4 ${QQ}(int i) {\n\treturn ${GQ("i",XQ,(QQ=>`gpuParticleSystem[${WQ+QQ}]`),"vec4(0.0)")};\n}\n`,
      bQ = `\n${UQ("colorPositionsAt",pQ(DQ.colorPositions),BQ.e/4)}\n${UQ("color1At",pQ(DQ.color1),BQ.e)}\n${UQ("color2At",pQ(DQ.color2),BQ.e)}\n${UQ("velocityAt",pQ(DQ.Fy),BQ.e)}\n${UQ("remapStopAt",pQ(DQ.remap),BQ.e)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${GQ("j",4,(QQ=>`v[${QQ}]`),"0.0")};\n}\n`,
      vQ = (QQ, WQ, XQ, wQ) => QQ ? `${XQ}(${wQ})` : `gpuParticleSystem[${WQ} + ${wQ}]`,
      dQ = QQ => `gpuParticleSystem[${QQ>>2}].${"xyzw"[3&QQ]}`,
      HQ = QQ => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${BQ.e}\n#define COLOR_POSITIONS ${pQ(DQ.colorPositions)}\n#define COLOR1 ${pQ(DQ.color1)}\n#define COLOR2 ${pQ(DQ.color2)}\n#define VELOCITY ${pQ(DQ.Fy)}\n#define REMAP ${pQ(DQ.remap)}\n#define RECORDS_PER_ROW ${BQ.m}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${BQ.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${dQ(DQ.gravity)}, ${dQ(DQ.gravity+1)}, ${dQ(DQ.gravity+2)}); }\nint colorCount() { return int(${dQ(DQ.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${pQ(DQ.colorDead)}]; }\nint velocityCount() { return int(${dQ(DQ.velocityCount)}); }\nint remapCount() { return int(${dQ(DQ.remapCount)}); }\n${QQ?bQ:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${QQ?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${vQ(QQ,"COLOR1","color1At","i")}, ${vQ(QQ,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${vQ(QQ,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${vQ(QQ,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${vQ(QQ,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${vQ(QQ,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${vQ(QQ,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${vQ(QQ,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${vQ(QQ,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      aQ = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    jQ.b.ShadersStore[`${yQ}VertexShader`] = HQ(!1), jQ.b.ShadersStore[`${yQ}PixelShader`] = aQ, jQ.b.ShadersStore[`${VQ}VertexShader`] = HQ(!0), jQ.b.ShadersStore[`${VQ}PixelShader`] = aQ;
    const lQ = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      hQ = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var iQ = XQ(38972),
      cQ = XQ(41851);
    class AQ extends iQ.c {
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, WQ, XQ), this.renderer = XQ, this.cB = wQ, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(BQ.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, cQ.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (QQ, WQ) => {
          const {
            engine: XQ
          } = this, wQ = XQ._gl;
          XQ._bindTextureDirectly(wQ.TEXTURE_2D, this.records, !0), XQ._unpackFlipY(!1);
          const qQ = this.ring.recordBits;
          for (let TQ = QQ; TQ < WQ;) {
            const QQ = Math.floor(TQ / BQ.m),
              XQ = Math.min(WQ, (QQ + 1) * BQ.m);
            wQ.texSubImage2D(wQ.TEXTURE_2D, 0, TQ % BQ.m * 4, QQ, 4 * (XQ - TQ), 1, wQ.RGBA_INTEGER, wQ.UNSIGNED_INT, qQ, TQ * BQ.h), TQ = XQ
          }
          XQ._bindTextureDirectly(wQ.TEXTURE_2D, null)
        }, this.id = QQ;
        const qQ = wQ.Uj();
        this.engine = qQ;
        const TQ = Math.max(1, WQ),
          zQ = Math.min(TQ, BQ.m);
        this.records = qQ.createRawTexture(null, 4 * zQ, Math.ceil(TQ / zQ), gQ.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, gQ.b.TEXTURE_NEAREST_SAMPLINGMODE, null, gQ.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.cB.getAnimationRatio() || 1;
        const WQ = this.cB.getFrameId();
        if (WQ === this.animatedFrame) return !1;
        const XQ = super.animate(QQ);
        return XQ && (this.animatedFrame = WQ, this.ring.takeUploads(this.uploadSlots)), XQ
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(QQ) {
        (0, cQ.i)(this, this.uniforms, this.uniformBits, QQ);
        for (const XQ of BQ.t) this.uniforms[XQ] = this.uniformBits[XQ];
        var WQ;
        (0, cQ.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (WQ = this.ramp) || void 0 === WQ || WQ.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = JQ.b.CreateRGBATexture(this.rampTexels.texels, BQ.l, 1, this.cB, !1, !1, gQ.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var QQ;
        this.records.dispose(), null === (QQ = this.ramp) || void 0 === QQ || QQ.dispose(), this.ramp = null
      }
    }
    const RQ = "the context was lost before the programs linked";
    class EQ {
      constructor(QQ, WQ) {
        this.cB = QQ, this.reportFailure = WQ, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = yQ, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, IQ.e)(), this.engine = QQ.Uj(), this.whiteRamp = JQ.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, QQ, !1, !1, gQ.b.TEXTURE_NEAREST_SAMPLINGMODE);
        const XQ = this.linkPair(yQ),
          wQ = null !== XQ && XQ !== RQ ? this.linkPair(VQ) : XQ;
        null === wQ && null !== XQ ? (console.warn(`GPU particles link their fallback here: ${XQ}`), this.reportFailure(XQ, !0)) : null !== wQ && this.fail(wQ === RQ ? RQ : null !== XQ && void 0 !== XQ ? XQ : wQ)
      }
      rC(QQ, WQ) {
        const XQ = BQ.m * this.engine.getCaps().maxTextureSize;
        WQ > XQ && this.warnOnce(`capacity:${QQ}`, `particle system ${QQ} holds ${XQ} particles, not ${WQ}: its records texture's limit`);
        const wQ = new AQ(QQ, Math.min(WQ, XQ), this, this.cB);
        return this.cB.addParticleSystem(wQ), wQ
      }
      canDraw(QQ) {
        var WQ, XQ;
        if (this.failed || null === (WQ = QQ.texture) || void 0 === WQ || null === (XQ = WQ.mirror) || void 0 === XQ || !XQ.isReady()) return !1;
        for (const wQ of (0, rQ.l)(QQ.blendMode))
          if (!this.effectFor(wQ).isReady()) return !1;
        return !0
      }
      disposeStopped(QQ) {
        this.cB._toBeDisposed.push(QQ)
      }
      remove(QQ) {
        this.cB.removeParticleSystem(QQ), QQ.releaseGl()
      }
      render(QQ) {
        var WQ;
        if (!QQ.isReady() || !QQ.hasLiveParticles()) return 0;
        const {
          engine: XQ,
          cB: wQ,
          frame: qQ
        } = this;
        QQ.prepareDraw(this.warnOnce), QQ.drawOffset(qQ, 0), qQ[3] = QQ.drawTime();
        const TQ = QQ.ring.drawStart(),
          zQ = QQ.ring.drawCount(),
          sQ = null !== (WQ = QQ.ramp) && void 0 !== WQ ? WQ : this.whiteRamp;
        XQ.setState(!1);
        for (const FQ of (0, rQ.l)(QQ.blendMode)) {
          const WQ = this.effectFor(FQ);
          XQ.enableEffect(WQ), WQ.setTexture("gpuParticleTexture", QQ.texture.mirror), WQ.setTexture("gpuParticleRampTexture", sQ), WQ._bindTexture("gpuParticleRecords", QQ.records), WQ.setMatrix("gpuParticleView", wQ.getViewMatrix()), WQ.setMatrix("gpuParticleProjection", wQ.getProjectionMatrix()), WQ.setFloatArray4("gpuParticleSystem", QQ.uniforms), WQ.setFloat4("gpuParticleFrame", qQ[0], qQ[1], qQ[2], qQ[3]), WQ.setFloat2("gpuParticleRange", TQ, zQ), WQ.setFloat("gpuParticleRamp", QQ.uniforms[BQ.u.ramp]), XQ.bindBuffers(this.vertexBuffers, null, WQ), XQ.setAlphaMode((0, rQ.i)(FQ)), XQ.drawArraysType(gQ.b.MATERIAL_TriangleStripDrawMode, 0, 4, zQ), WQ._bindTexture("gpuParticleRecords", null)
        }
        return XQ.setAlphaMode(gQ.b.ALPHA_DISABLE), zQ
      }
      linkPair(QQ) {
        this.shader = QQ, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(QQ, ""), this.multiplyEffect = this.createEffect(QQ, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(QQ) {
        const WQ = QQ.getPipelineContext(),
          XQ = this.gl();
        XQ && null === this.pairFailure && (!WQ || WQ.isParallelCompiled && !WQ.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : WQ.isParallelCompiled && WQ.program && (XQ.getProgramParameter(WQ.program, XQ.LINK_STATUS) || this.programFailed(function(QQ, WQ, XQ) {
          if (QQ.isContextLost()) return RQ;
          for (const [wQ, qQ] of [
              ["VERTEX SHADER", WQ.vertexShader],
              ["FRAGMENT SHADER", WQ.fragmentShader]
            ]) {
            const WQ = qQ && !QQ.getShaderParameter(qQ, QQ.COMPILE_STATUS) ? QQ.getShaderInfoLog(qQ) : null;
            if (WQ) return `${wQ} ${WQ}`
          }
          return QQ.getProgramInfoLog(XQ) || "a program did not link"
        }(XQ, WQ, WQ.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(QQ) {
        return QQ === rQ.c ? this.multiplyEffect : this.effect
      }
      createEffect(QQ, WQ) {
        return this.engine.createEffect(QQ, [], lQ, hQ, WQ, void 0, void 0, ((WQ, XQ) => {
          var wQ;
          QQ === this.shader && this.programFailed(null !== (wQ = this.gl()) && void 0 !== wQ && wQ.isContextLost() ? RQ : function(QQ) {
            const WQ = QQ.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(WQ) ? "a program failed, its log not in this browser's stack" : WQ.replace(/^Error: /, "")
          }(XQ))
        }))
      }
      programFailed(QQ) {
        this.linkingPair ? this.pairFailure ??= QQ : this.fail(QQ)
      }
      fail(QQ) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${QQ}`), this.reportFailure(QQ, !1);
          for (const QQ of this.cB.KD.slice()) QQ instanceof AQ && QQ.disposeOnStop && QQ.dispose()
        }
      }
    }
    var CQ = XQ(40089);
    class uQ extends CQ.b {
      createEffect() {
        const QQ = super.createEffect(...arguments);
        return kQ(QQ), LQ.has(QQ) || (LQ.add(QQ), QQ.onCompileObservable.add((() => {
          kQ(QQ)
        }))), QQ
      }
    }
    const LQ = new WeakSet;

    function kQ(QQ) {
      QQ._vertexSourceCodeBeforeMigration = "", QQ._fragmentSourceCodeBeforeMigration = ""
    }
    var fQ = XQ(40479),
      SQ = XQ(41320),
      tQ = XQ(40221),
      oQ = XQ(40428),
      eQ = XQ(40422),
      nQ = XQ(40349),
      xQ = XQ(41386),
      YQ = XQ(37874),
      NQ = XQ(41855),
      ZQ = XQ(41858),
      OQ = XQ(41865),
      KQ = XQ(40371),
      mQ = XQ(3091),
      MQ = XQ(37772),
      QW = XQ(40564),
      WW = XQ(37837),
      XW = XQ(37790);

    function wW(QQ) {
      if (QQ.visibility < 1 || !QQ.isVisible || !QQ.isEnabled() || QQ.metadata[XW.f] || !QQ.isReady()) return !0;
      const WQ = QQ.ZD;
      if (!WQ || 0 === WQ.length) return !0;
      for (let XQ = 0; XQ < WQ.length; XQ++) {
        const wQ = WQ[XQ],
          qQ = wQ.lj();
        if (!qQ || !qQ.isReadyForSubMesh(QQ, wQ, !1)) return !0
      }
      return !1
    }
    class qW {
      constructor(QQ, WQ) {
        this.KJ = QQ, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, WQ.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      gI(QQ) {
        var WQ;
        const XQ = this.armed;
        if (this.armed = !1, this.vis = null, !XQ) return !1;
        this.culled = 0;
        const {
          KJ: wQ
        } = this, qQ = null === (WQ = wQ.RD) || void 0 === WQ ? void 0 : WQ.visibility;
        if (!qQ || !QQ || wQ.nj.xj) return !1;
        if (!(wQ.nJ.CwQ[0] >= WW.f)) return !1;
        const TQ = QQ.getProjectionMatrix().m;
        if (0 !== TQ[15]) return !1;
        const zQ = wQ.jr,
          sQ = QQ.globalPosition,
          FQ = this.eye;
        return FQ[0] = sQ.x + zQ[0], FQ[1] = sQ.y + zQ[1], FQ[2] = sQ.z + zQ[2], !!qQ.eyeClear(FQ[0], FQ[1], FQ[2], QQ.minZ, TQ, wQ.nJ) && (this.vis = qQ, this.passable.clear(), this.count = 0, !0)
      }
      see(QQ, WQ) {
        const XQ = this.count++;
        if (XQ === this.cellSlots.length) {
          const QQ = new Int32Array(2 * XQ);
          QQ.set(this.cellSlots), this.cellSlots = QQ
        }
        this.cellSlots[XQ] = WQ, this.meshes[XQ] = QQ
      }
      seeThrough(QQ) {
        this.passable.add(QQ)
      }
      finish(QQ, WQ) {
        const {
          vis: XQ,
          eye: wQ,
          meshes: qQ,
          count: TQ,
          cellSlots: zQ
        } = this, {
          nJ: sQ
        } = this.KJ, [FQ, PQ] = sQ.CwQ, gQ = null !== XQ && XQ.update(wQ[0], wQ[1], wQ[2], sQ.iQQ, FQ, PQ, this.passable);
        let JQ = 0;
        for (let rQ = 0; rQ < TQ; rQ++) {
          const wQ = qQ[rQ];
          if (gQ) {
            const QQ = 3 * zQ[rQ];
            if (QQ >= 0 && !XQ.isDrawn(WQ[QQ], WQ[QQ + 1], WQ[QQ + 2])) {
              JQ++;
              continue
            }
          }
          KQ.e.prototype.push.call(QQ, wQ)
        }
        qQ.fill(null, 0, TQ), this.count = 0, this.vis = null, this.culled = JQ
      }
    }
    var TW = XQ(37820),
      zW = XQ(37783),
      sW = XQ(40551),
      FW = XQ(41870),
      PW = XQ(40555),
      gW = XQ(40491);
    let JW = 1;
    const rW = new WeakSet;

    function IW() {
      return JW
    }

    function jW() {
      JW = JW >= 1073741823 ? 1 : JW + 1
    }

    function BW(QQ) {
      const WQ = QQ.metadata;
      if (!WQ || !0 !== WQ[MQ.m]) return;
      const XQ = WQ[MQ.u],
        wQ = null === XQ || void 0 === XQ ? void 0 : XQ._noaStamps;
      if (!XQ || !wQ) return;
      const qQ = XQ.entries.indexOf(QQ);
      qQ >= 0 && (wQ[qQ] = 0)
    }

    function yW(QQ) {
      const WQ = QQ.ZD;
      for (let XQ = 0; XQ < WQ.length; XQ++) {
        const QQ = WQ[XQ].lj();
        if (QQ && !QQ.isFrozen) return !1
      }
      for (let XQ = 0; XQ < WQ.length; XQ++) {
        const QQ = WQ[XQ].lj();
        QQ && rW.add(QQ)
      }
      return !0
    }
    let VW = !1;
    const DW = new WeakSet;

    function pW(QQ, WQ) {
      const XQ = QQ[WQ];
      if ("function" !== typeof XQ) throw new Error(`terrainDrawState: Babylon has no ${WQ} to hook`);
      return XQ
    }

    function GW(QQ, WQ, XQ, wQ, qQ) {
      const TQ = XQ.nJ.iQQ,
        zQ = new Map;
      let sQ = 0;
      const FQ = new qW(XQ, QQ),
        PQ = new TW.c(TQ, QQ.Uj());
      ! function(QQ) {
        if (DW.has(QQ) || (DW.add(QQ), QQ.onContextLostObservable.add(jW), QQ.Gj.add(jW)), VW) return;
        VW = !0;
        const WQ = FW.c.prototype,
          XQ = pW(WQ, "_markSubMeshesAsDirty");
        Object.assign(WQ, {
          _markSubMeshesAsDirty(QQ) {
            XQ.call(this, QQ), BW(this)
          }
        });
        const wQ = pW(gW.e.prototype, "_syncParentEnabledState");
        Object.assign(gW.e.prototype, {
          _syncParentEnabledState() {
            wQ.call(this), BW(this)
          }
        });
        const qQ = pW(PW.b.prototype, "resetDrawCache");
        PW.b.prototype.resetDrawCache = function(QQ, WQ) {
          qQ.call(this, QQ, WQ), BW(this.getMesh())
        };
        const TQ = sW.b.prototype,
          zQ = pW(TQ, "markDirty");
        TQ.markDirty = function(QQ) {
          zQ.call(this, QQ), rW.has(this) && jW()
        };
        const sQ = pW(TQ, "_markAllSubMeshesAsDirty");
        Object.assign(TQ, {
          _markAllSubMeshesAsDirty(QQ) {
            sQ.call(this, QQ), rW.has(this) && jW()
          }
        })
      }(QQ.Uj());
      let gQ = new Float64Array(384),
        JQ = new Int32Array(64),
        rQ = new Uint8Array(64),
        IQ = new Float64Array(64),
        jQ = new Int32Array(192),
        BQ = 0;
      const yQ = [],
        VQ = new Float64Array(24),
        DQ = () => {
          const QQ = yQ.pop();
          return void 0 !== QQ ? (JQ[QQ] = 0, QQ) : (BQ === JQ.length && (gQ = UW(gQ, new Float64Array(2 * gQ.length)), JQ = UW(JQ, new Int32Array(2 * JQ.length)), rQ = UW(rQ, new Uint8Array(2 * rQ.length)), IQ = UW(IQ, new Float64Array(2 * IQ.length)), jQ = UW(jQ, new Int32Array(2 * jQ.length))), BQ++)
        },
        pQ = QQ => {
          const WQ = 6 * QQ._noaSlot,
            XQ = QQ.owQ[0],
            wQ = QQ.owQ[1];
          gQ[WQ] = XQ.x, gQ[WQ + 1] = XQ.y, gQ[WQ + 2] = XQ.z, gQ[WQ + 3] = wQ.x, gQ[WQ + 4] = wQ.y, gQ[WQ + 5] = wQ.z
        },
        GQ = (QQ, WQ, XQ) => {
          if (!XQ) return FQ.see(QQ, -1), !1;
          const wQ = wW(QQ);
          return wQ && FQ.seeThrough(IQ[WQ]), FQ.see(QQ, WQ), !wQ
        };
      let UQ = -1;
      return QQ.getActiveMeshCandidates = () => {
        const XQ = QQ.frustumPlanes,
          wQ = WQ._selectionContent;
        wQ.reset(), (XQ => {
          const wQ = QQ.frustumPlanes;
          sQ = sQ + 1 | 0 || 1;
          const qQ = WQ.blocks,
            TQ = FQ.gI(QQ.activeCamera),
            zQ = TQ && !0;
          if (zQ) {
            const WQ = QQ.Uj().currentRenderPassId;
            WQ !== UQ && (UQ = WQ, jW())
          }
          const PQ = IW(),
            IQ = zQ && !1;
          qQ.length > 0 && function(QQ, WQ) {
            for (let XQ = 0; XQ < 6; XQ++) {
              const wQ = QQ[XQ],
                qQ = wQ.normal;
              WQ[4 * XQ] = qQ.x, WQ[4 * XQ + 1] = qQ.y, WQ[4 * XQ + 2] = qQ.z, WQ[4 * XQ + 3] = wQ.d
            }
          }(wQ, VQ);
          const BQ = gQ,
            yQ = JQ,
            DQ = rQ;
          for (let QQ = 0; QQ < qQ.length; QQ++) {
            const WQ = qQ[QQ];
            if (!QW.b.IsInFrustum(WQ.owQ, wQ)) continue;
            const gQ = WQ.entries;
            {
              const QQ = WQ._noaSlots,
                wQ = WQ._noaStamps,
                qQ = WQ._noaTerrain;
              for (let WQ = 0; WQ < gQ.length; WQ++) {
                const JQ = QQ[WQ];
                if (yQ[JQ] !== sQ && (yQ[JQ] = sQ, DQ[JQ] = bW(BQ, 6 * JQ, VQ) ? 1 : 0), 0 === DQ[JQ]) continue;
                const rQ = gQ[WQ];
                if (zQ && wQ[WQ] === PQ) IQ && 1 === qQ[WQ] && wW(rQ) && 0, FQ.see(rQ, 1 === qQ[WQ] ? JQ : -1);
                else if (zQ) {
                  wQ[WQ] = PQ;
                  const QQ = !0 === rQ.metadata[zW.k];
                  qQ[WQ] = QQ ? 1 : 0;
                  const XQ = GQ(rQ, JQ, QQ);
                  !QQ || XQ && yW(rQ) || (wQ[WQ] = 0)
                } else TQ ? GQ(rQ, JQ, !0 === rQ.metadata[zW.k]) : KQ.e.prototype.push.call(XQ, rQ)
              }
              continue
            }
          }
          TQ && FQ.finish(XQ, jQ)
        })(wQ), PQ.apply(wQ, QQ.activeCamera);
        const TQ = WQ.twQ;
        for (let QQ = 0; QQ < TQ.length; QQ++) {
          const WQ = TQ[QQ];
          WQ.isEnabled() && KQ.e.prototype.push.call(wQ, WQ)
        }
        return qQ(wQ, XQ), wQ
      }, {
        ewQ: () => FQ.culled,
        hwQ: (QQ, WQ) => {
          const qQ = Math.floor(WQ[0] / TQ),
            sQ = Math.floor(WQ[1] / TQ),
            FQ = Math.floor(WQ[2] / TQ),
            PQ = `${qQ}|${sQ}|${FQ}`;
          let gQ = zQ.get(PQ);
          if (!gQ) {
            const QQ = [0, 0, 0];
            XQ.dWQ([qQ * TQ - 1, sQ * TQ - 1, FQ * TQ - 1], null, QQ), gQ = Object.assign(wQ(QQ, TQ + 2), {
              nwQ: PQ,
              xwQ: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: DQ()
            }), pQ(gQ), IQ[gQ._noaSlot] = (0, mQ.i)(qQ, sQ, FQ), jQ[3 * gQ._noaSlot] = qQ, jQ[3 * gQ._noaSlot + 1] = sQ, jQ[3 * gQ._noaSlot + 2] = FQ, zQ.set(PQ, gQ)
          }
          gQ.xwQ++, QQ.metadata[MQ.x] = gQ
        },
        ZE: QQ => {
          const WQ = QQ.metadata[MQ.x];
          WQ && (WQ.xwQ--, WQ.xwQ <= 0 && (zQ.delete(WQ.nwQ), yQ.push(WQ._noaSlot)), QQ.metadata[MQ.x] = null)
        },
        SwQ: (QQ, WQ) => {
          const XQ = QQ,
            wQ = WQ.metadata[MQ.x];
          (XQ._noaSlots ??= []).push(wQ._noaSlot), (XQ._noaStamps ??= []).push(0), (XQ._noaTerrain ??= []).push(0), XQ.entries.push(WQ)
        },
        removeEntry: (QQ, WQ) => {
          const XQ = QQ,
            wQ = XQ.entries,
            qQ = wQ.indexOf(WQ);
          if (qQ < 0) return;
          const TQ = XQ._noaSlots,
            zQ = XQ._noaStamps,
            sQ = XQ._noaTerrain,
            FQ = wQ.length - 1;
          wQ[qQ] = wQ[FQ], TQ[qQ] = TQ[FQ], zQ[qQ] = zQ[FQ], sQ[qQ] = sQ[FQ], wQ.pop(), TQ.pop(), zQ.pop(), sQ.pop()
        },
        WQQ: QQ => {
          for (const WQ of zQ.values()) {
            WQ.EwQ.YwQ(QQ), WQ.RwQ.YwQ(QQ);
            for (const XQ of WQ.owQ) XQ.YwQ(QQ);
            pQ(WQ)
          }
        }
      }
    }

    function UW(QQ, WQ) {
      return WQ.set(QQ), WQ
    }

    function bW(QQ, WQ, XQ) {
      const wQ = QQ[WQ],
        qQ = QQ[WQ + 1],
        TQ = QQ[WQ + 2],
        zQ = QQ[WQ + 3],
        sQ = QQ[WQ + 4],
        FQ = QQ[WQ + 5];
      for (let PQ = 0; PQ < 24; PQ += 4) {
        const QQ = XQ[PQ],
          WQ = XQ[PQ + 1],
          gQ = XQ[PQ + 2];
        if (!(QQ * (QQ >= 0 ? zQ : wQ) + WQ * (WQ >= 0 ? sQ : qQ) + gQ * (gQ >= 0 ? FQ : TQ) + XQ[PQ + 3] >= 0)) return !1
      }
      return !0
    }
    var vW = XQ(38049);
    class dW {
      constructor(QQ, WQ) {
        var XQ = QQ.cB;
        XQ.rwQ(new OQ.b(XQ));
        var wQ = new NQ.d(FQ);
        XQ.ZwQ = wQ, wQ.blocks = [];
        var qQ, TQ = {},
          sQ = [];
        this.textPlanes = sQ, this.ewQ = () => qQ.ewQ(), this.WQQ = QQ => {
          gQ(wQ, QQ), qQ.WQQ(QQ)
        }, this.hwQ = (WQ, XQ, zQ) => {
          if (!WQ.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!WQ.metadata[MQ.u] && !WQ.metadata[MQ.l]) {
            if (!XQ) {
              var FQ = wQ.twQ;
              if (WQ.metadata[MQ.B] && !WQ.parent) {
                FQ = sQ;
                var gQ = WQ.uC().mwQ;
                WQ.metadata[MQ.F] = gQ.center.length() + gQ.radius, WQ.bj = !0
              }
              return FQ.push(WQ), WQ.metadata[MQ.g] = FQ, void(WQ.metadata[MQ.l] = !0)
            }
            var rQ = Math.floor(zQ[0] / PQ),
              IQ = Math.floor(zQ[1] / PQ),
              jQ = Math.floor(zQ[2] / PQ),
              BQ = rQ + "|" + IQ + "|" + jQ,
              yQ = TQ[BQ];
            if (!yQ) {
              var VQ = [rQ * PQ, IQ * PQ, jQ * PQ],
                DQ = [0, 0, 0];
              QQ.KJ.dWQ(VQ, null, DQ), yQ = JQ(DQ, PQ), wQ.blocks.push(yQ), TQ[BQ] = yQ, yQ.nwQ = BQ
            }
            qQ.hwQ(WQ, zQ), qQ.SwQ(yQ, WQ), yQ.xwQ = (yQ.xwQ || 0) + 1, WQ.metadata[MQ.u] = yQ, WQ.metadata[MQ.m] = !0, WQ.bj = !0
          }
        }, this.ZE = QQ => {
          if (QQ.metadata) {
            QQ.metadata[MQ.l] && ((0, mQ.o)(QQ.metadata[MQ.g], QQ), QQ.metadata[MQ.l] = !1), QQ.metadata[MQ.g] === sQ && (QQ.bj = !1), QQ.metadata[MQ.g] = void 0, QQ.metadata[MQ.F] = void 0;
            var WQ = QQ.metadata[MQ.u];
            WQ && WQ.entries && (QQ.metadata[MQ.m] && qQ.removeEntry(WQ, QQ), WQ.xwQ--, WQ.xwQ <= 0 && (delete TQ[WQ.nwQ], (0, mQ.o)(wQ.blocks, WQ))), qQ.ZE(QQ), QQ.metadata[MQ.u] = null, QQ.metadata[MQ.m] = !1
          }
        }, this.o_ = function(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (QQ.metadata[MQ.u]) {
            if (QQ.metadata[MQ.m] === WQ) return;
            var XQ = QQ.metadata[MQ.u];
            XQ && XQ.entries && (WQ ? qQ.SwQ(XQ, QQ) : qQ.removeEntry(XQ, QQ)), QQ.metadata[MQ.m] = WQ
          } else {
            if (QQ.metadata[MQ.l] === WQ) return;
            var TQ = QQ.metadata[MQ.g] || wQ.twQ;
            WQ ? TQ.push(QQ) : (0, mQ.o)(TQ, QQ), QQ.metadata[MQ.l] = WQ
          }
        };
        var FQ = () => {},
          PQ = WQ * QQ.KJ.nJ.iQQ,
          gQ = (QQ, WQ) => {
            QQ.blocks.forEach((QQ => {
              QQ.EwQ.YwQ(WQ), QQ.RwQ.YwQ(WQ), QQ.owQ.forEach((QQ => QQ.YwQ(WQ))), QQ.blocks && gQ(QQ, WQ)
            }))
          },
          JQ = (QQ, WQ) => {
            var XQ = new zQ.vj(QQ[0], QQ[1], QQ[2]),
              wQ = new zQ.vj(QQ[0] + WQ, QQ[1] + WQ, QQ[2] + WQ);
            return new ZQ.b(XQ, wQ, void 0, void 0, void 0, FQ)
          };
        qQ = GW(XQ, wQ, QQ.KJ, JQ, ((QQ, WQ) => {
          for (var XQ = 0; XQ < sQ.length; XQ++) {
            var wQ = sQ[XQ];
            wQ.isEnabled(!1) && ((0, vW.e)(wQ, WQ) && KQ.e.prototype.push.call(QQ, wQ))
          }
        }))
      }
    }

    function HW(QQ) {
      const {
        holderPosition: WQ,
        holderRotation: XQ,
        Km: wQ,
        fov: qQ,
        near: TQ,
        far: zQ
      } = QQ.model.Zm, sQ = QQ.zqQ;
      sQ.position.XQQ(WQ[0], WQ[1], WQ[2]), sQ.rotation.XQQ(XQ[0], XQ[1], XQ[2]);
      const FQ = QQ.camera;
      FQ.position.XQQ(wQ[0], wQ[1], wQ[2]), FQ.fov = qQ, FQ.minZ = TQ, FQ.maxZ = zQ
    }

    function aW(QQ) {
      const WQ = QQ.Uj(),
        XQ = WQ,
        wQ = XQ._gl;
      if (!wQ || XQ.Mj < 2 || WQ.vwQ || wQ.getParameter(wQ.DEPTH_BITS) < 24) return !1;
      const qQ = QQ._renderingManager,
        TQ = qQ.getRenderingGroup(-1),
        zQ = qQ.getRenderingGroup(0),
        sQ = oQ.e.prototype.render;
      return TQ.render = function(QQ, WQ, XQ, wQ, qQ, TQ, FQ, PQ, gQ) {
        (QQ || zQ._empty) && sQ.call(this, QQ, WQ, XQ, wQ, qQ, TQ, FQ, PQ, gQ)
      }, zQ.render = function(QQ, XQ, qQ, zQ) {
        let FQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          JQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          rQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          IQ = arguments.length > 8 ? arguments[8] : void 0;
        QQ ? sQ.call(this, QQ, XQ, qQ, zQ, FQ, PQ, JQ, rQ, IQ) : (WQ.setAlphaMode(gQ.b.ALPHA_DISABLE), sQ.call(this, null, !1, !1, zQ, FQ, PQ, JQ, !1), TQ._empty || (wQ.depthRange(1, 1), sQ.call(TQ, null, XQ, qQ, zQ, FQ, PQ, JQ, rQ, IQ), wQ.depthRange(0, 1)), sQ.call(this, null, XQ, qQ, zQ, !1, !1, !1, rQ, IQ))
      }, !0
    }

    function lW(QQ, WQ) {
      return [WQ, YQ.g].map(((WQ, XQ) => {
        const wQ = new qQ.e("light", zQ.vj.FromArray(WQ), QQ);
        return wQ.diffuse = TQ.Color3.FromArray([1, 1, 1]), wQ.specular = TQ.Color3.FromArray([1, 1, 1]), wQ.intensity = YQ.d[XQ], wQ
      }))
    }
    class hW extends FQ.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(QQ) {
        var WQ;
        this.heldTexture = QQ, this.particleTexture = null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.mirror) && void 0 !== WQ ? WQ : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        QQ && (this.particleTexture = null, (0, PQ.I)(this.heldTexture), this.heldTexture = null), super.dispose(QQ, WQ, XQ)
      }
    }
    const iW = wQ.e.Zero();
    const cW = {
      fXQ: function(QQ, WQ) {
        return new uQ(QQ, WQ.CXQ, {
          preserveDrawingBuffer: WQ.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      gqQ: function(QQ, WQ) {
        ! function(QQ, WQ, XQ) {
          const wQ = new nQ.c(QQ.engine);
          QQ.cB = wQ, wQ.detachControl(), wQ.autoClear = !1, eQ.e.MIN_RENDERINGGROUPS = -1;
          for (let TQ = eQ.e.MIN_RENDERINGGROUPS; TQ <= 1; TQ++) wQ.setRenderingOrder(TQ, oQ.e.PainterSortCompare, oQ.e.PainterSortCompare, oQ.e.PainterSortCompare);
          wQ.setRenderingAutoClearDepthStencil(0, !1), tQ.d.Enabled = !1, QQ.wqQ = new dW(QQ, Math.round(WQ.qqQ)), QQ.zqQ = new SQ.b("camHolder", wQ), QQ.camera = new fQ.c("camera", new zQ.vj(0, 0, 0), wQ), QQ.camera.parent = QQ.zqQ, HW(QQ), (0, YQ.k)(QQ, ((QQ, WQ, XQ) => (0, xQ.h)(WQ, XQ, QQ.cB))), wQ.clearColor = TQ.d.FromArray(WQ.clearColor), wQ.ambientColor = TQ.Color3.FromArray(WQ.ambientColor);
          const qQ = XQ(wQ, WQ.PqQ);
          wQ.onNewLightAddedObservable.add((QQ => {
            qQ.some((WQ => WQ === QQ)) || console.error(`Light "${QQ.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), wQ.skipPointerMovePicking = !0
        }(QQ, WQ, lW), aW(QQ.cB)
      },
      TqQ: HW,
      setBabylonFog: function(QQ, WQ, XQ, wQ) {
        const qQ = QQ.cB;
        qQ.fogMode = 3, qQ.fogStart = WQ, qQ.fogEnd = XQ, qQ.fogColor.set(wQ[0], wQ[1], wQ[2])
      },
      rqQ: function(QQ, WQ, XQ) {
        return QQ.engine.Mj >= 2 && (QQ.IqQ || (QQ.IqQ = new EQ(QQ.cB, QQ.jqQ)), !QQ.IqQ.failed) ? QQ.IqQ.rC(WQ, XQ) : new hW(WQ, XQ, QQ.cB)
      },
      yqQ: function(QQ, WQ) {
        QQ.cB.KD.forEach((XQ => {
          if (XQ instanceof AQ) return void XQ.WQQ(WQ, QQ.KJ.jr);
          const wQ = XQ;
          if (wQ.emitter.getConnectedParticleSystems)
            for (const QQ of wQ._particles) QQ.position.set(QQ.position.x - WQ[0], QQ.position.y - WQ[1], QQ.position.z - WQ[2]);
          else {
            if (!wQ.worldOffset) throw new Error("Particle system has no world offset");
            wQ.worldOffset.x = -QQ.KJ.jr[0], wQ.worldOffset.y = -QQ.KJ.jr[1], wQ.worldOffset.z = -QQ.KJ.jr[2]
          }
        }))
      },
      linesFromArrays: function(QQ, WQ, XQ) {
        const wQ = new sQ.d(WQ, QQ.cB, null, void 0, void 0, !1);
        return (0, xQ.f)(WQ, XQ, QQ.cB, wQ), wQ
      },
      AB: BW,
      BqQ: function(QQ, WQ) {
        return iW.origin.WH(WQ.origin), iW.direction.WH(WQ.direction), iW.length = WQ.length, iW.epsilon = WQ.epsilon, iW.BqQ(QQ, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41344: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => tQ,
      i: () => DQ,
      l: () => NQ
    });
    var wQ = XQ(40530),
      qQ = XQ(41348),
      TQ = XQ(41394),
      zQ = XQ(41354),
      sQ = XQ(38094),
      FQ = XQ(38107),
      PQ = XQ(38114),
      gQ = XQ(38116),
      JQ = XQ(37490),
      rQ = XQ(37492),
      IQ = XQ(41357),
      jQ = XQ(37477),
      BQ = XQ(37480),
      yQ = XQ(37468);

    function VQ(QQ, WQ) {
      return Object.assign((function(QQ, XQ, wQ, qQ) {
        return WQ(this.featureState, QQ, XQ, wQ, qQ)
      }), {
        NI: QQ
      })
    }

    function DQ(QQ) {
      const WQ = class extends IQ.b {
          constructor(WQ, XQ) {
            const wQ = (0, BQ._)(WQ),
              qQ = wQ && (0, BQ.u)(wQ, QQ.name);
            for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
            super(WQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...zQ), !1), this.featureState = void 0, this.featureState = XQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, BQ.y)(this._material, QQ, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return QQ.className
          }
          isCompatible(QQ) {
            return QQ === yQ.b.GLSL || QQ === yQ.b.WGSL
          }
        },
        XQ = (0, jQ.g)(QQ);
      for (const [wQ, qQ] of Object.entries(jQ.d)) {
        const TQ = QQ[wQ];
        if (TQ) {
          const QQ = XQ[wQ];
          Object.defineProperty(WQ.prototype, qQ, {
            value: VQ(TQ, QQ),
            writable: !0,
            configurable: !0
          })
        }
      }
      return WQ
    }
    class pQ extends(DQ(sQ.d)) {}
    var GQ = XQ(40089),
      UQ = XQ(41364),
      bQ = XQ(41366);

    function vQ(QQ, WQ, XQ) {
      return (0, bQ.f)(XQ, WQ.urls, (() => async function(QQ, WQ, XQ) {
        const {
          width: wQ
        } = QQ[0].getSize(), qQ = QQ.map(((QQ, XQ) => {
          var qQ;
          const TQ = Math.round(QQ.getSize().height / wQ),
            zQ = null === WQ || void 0 === WQ ? void 0 : WQ[XQ];
          return {
            pixels: zQ && zQ.byteLength === wQ * wQ * TQ * 4 ? zQ : null !== (qQ = dQ.get(QQ.getInternalTexture())) && void 0 !== qQ ? qQ : QQ._readPixelsSync(),
            layers: TQ
          }
        })), TQ = XQ.Uj().getCaps().texture2DArrayMaxLayerCount, sQ = (0, bQ.b)(qQ, wQ, TQ).map((QQ => {
          let {
            pixels: WQ,
            layers: qQ
          } = QQ;
          return {
            atlas: new UQ.d(WQ, wQ, wQ, qQ, GQ.b.TEXTUREFORMAT_RGBA, XQ, !0, !1, zQ.e.NEAREST_NEAREST_MIPLINEAR),
            layers: qQ
          }
        }));
        return QQ.forEach(((QQ, WQ) => {
          const wQ = QQ.getInternalTexture();
          dQ.has(wQ) || (! function(QQ, WQ) {
            const XQ = WQ.createRawTexture(new Uint8Array(4), 1, 1, GQ.b.TEXTUREFORMAT_RGBA, !1, !1, zQ.e.NEAREST_SAMPLINGMODE);
            QQ._hardwareTexture.release(), WQ.unbindAllTextures(), XQ._swapAndDie(QQ, !1)
          }(wQ, XQ.Uj()), dQ.set(wQ, qQ[WQ].pixels))
        })), sQ
      }(QQ, WQ.pixels, XQ)))
    }
    const dQ = new WeakMap;
    var HQ = XQ(38125);
    class aQ extends(DQ(FQ.h)) {
      constructor(QQ, WQ) {
        super(QQ, WQ), this.loaded = new Set, this.mirrors = void 0, this.mirrors = WQ.textures.map((QQ => QQ.mirror)), this.mirrors.forEach(((QQ, WQ) => {
          QQ.onLoadObservable.add((QQ => {
            this.setTextureArrayData(QQ, WQ).catch((QQ => {
              console.error(`Failed to build the texture arrays, at atlas ${WQ}`, QQ)
            }))
          }))
        })), (0, HQ.j)(WQ, QQ.shaderLanguage)
      }
      async setTextureArrayData(QQ, WQ) {
        const XQ = this.featureState,
          {
            width: wQ,
            height: qQ
          } = QQ.getSize(),
          TQ = this._material.shaderLanguage;
        if (!XQ.useWebGL2) return void(0, HQ.g)(this._material, XQ, WQ, wQ, Math.round(qQ / wQ), TQ);
        if (this.loaded.add(WQ), this.loaded.size < this.mirrors.length) return;
        const zQ = await vQ(this.mirrors, XQ.sources, this._material.sE());
        (0, HQ.d)(this._material, XQ, zQ, wQ, TQ)
      }
    }
    var lQ = XQ(41373),
      hQ = XQ(40561),
      iQ = XQ(37367),
      cQ = XQ(41379),
      AQ = XQ(40661),
      RQ = XQ(40555),
      EQ = XQ(41320),
      CQ = XQ(37855),
      uQ = XQ(41386);
    class LQ extends lQ.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const kQ = {
      Mesh: cQ.b,
      TransformNode: EQ.b,
      Tj: lQ.b,
      VertexBuffer: lQ.f,
      BoundingInfo: hQ.e,
      vj: iQ.vj,
      ArenaBuffer: LQ,
      SubMesh: RQ.b,
      VertexData: AQ.e,
      MirroredGeometry: uQ.b,
      meshFromArrays: uQ.f,
      plainMeshFromArrays: uQ.h
    };
    (0, CQ.f)(kQ);
    var fQ = XQ(37698);
    class SQ extends(DQ(gQ.k)) {
      constructor(QQ, WQ) {
        if (super(QQ, WQ), QQ instanceof wQ.StandardMaterial && WQ.dirLightCount > 0) {
          const WQ = QQ,
            XQ = WQ._blockDirtyMechanism;
          WQ._blockDirtyMechanism = !0, QQ.disableLighting = !0, WQ._blockDirtyMechanism = XQ;
          const wQ = (0, BQ._)(QQ);
          wQ && (wQ.disableLighting = !0, (0, BQ.Z)(wQ))
        }(0, fQ.j)(QQ)
      }
      dispose(QQ) {
        (0, fQ.n)(this._material), super.dispose(QQ)
      }
    }

    function tQ(QQ, WQ) {
      if (!(WQ instanceof wQ.StandardMaterial) || WQ.specularTexture) return;
      const {
        r: XQ,
        g: qQ,
        b: TQ
      } = WQ.specularColor;
      0 === XQ && 0 === qQ && 0 === TQ && (QQ.SPECULARTERM = !1)
    }(0, gQ.i)({
      disableUnusedSpecularTerm: tQ
    });
    var oQ = XQ(37582),
      eQ = XQ(37866);
    const nQ = new RegExp(`^#define ${PQ.d}\\s*$`, "m");
    class xQ extends(DQ(PQ.i)) {
      constructor(QQ, WQ) {
        super(QQ, WQ), this.zj = !1, WQ.ditherOnlyWhileFading && (eQ.e.add(QQ), this.prewarmDitherTwins(QQ))
      }
      prewarmDitherTwins(QQ) {
        const WQ = new WeakSet;
        QQ.onEffectCreatedObservable.add((XQ => {
          let {
            effect: wQ,
            subMesh: qQ
          } = XQ;
          if (this.featureState.prewarmingDither || WQ.has(wQ)) return;
          WQ.add(wQ);
          const TQ = null === qQ || void 0 === qQ ? void 0 : qQ.getMesh();
          TQ && !nQ.test(wQ.defines) && QQ.sE().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(TQ) || WQ.delete(wQ)
          }))
        }))
      }
      prewarmDither(QQ) {
        if (this.zj || QQ.rG()) return !1;
        const WQ = new RQ.b(0, 0, 0, 0, 0, QQ, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(QQ, WQ)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== WQ.effect
      }
      dispose(QQ) {
        this.zj = !0, super.dispose(QQ)
      }
    }
    const YQ = new Map;

    function NQ(QQ, WQ) {
      YQ.set(QQ, WQ)
    }
    NQ(sQ.d, pQ), NQ(FQ.h, aQ), NQ(PQ.i, xQ), NQ(gQ.k, SQ), (0, JQ.e)({
      create: (QQ, WQ) => {
        const XQ = new wQ.StandardMaterial(QQ.name, WQ);
        return (0, oQ.r)(QQ, XQ), XQ.detailMap._pluginDefineNames
      },
      write: (QQ, WQ, XQ) => {
        (0, oQ._)(QQ.mirror, WQ, XQ)
      },
      addFeature: (QQ, WQ, XQ) => {
        const wQ = YQ.get(WQ.feature);
        if (!wQ) throw new Error(`${WQ.feature.name} has no plugin class (registerPluginClass)`);
        new wQ(QQ.mirror, WQ.state, ...XQ)
      },
      texture: (QQ, WQ, XQ) => {
        let {
          url: wQ,
          noMipmap: qQ,
          invertY: TQ,
          samplingMode: sQ,
          data: FQ,
          sets: PQ
        } = XQ;
        if (!FQ) {
          const XQ = new zQ.e(wQ, WQ, qQ, TQ, sQ);
          return Object.assign(XQ, PQ), void(0, rQ.N)(QQ, XQ)
        }
        const gQ = {},
          JQ = new Promise(((QQ, WQ) => {
            gQ.onLoad = QQ, gQ.onError = (QQ, XQ) => {
              WQ(new Error(`${FQ.context}: ${(null===XQ||void 0===XQ?void 0:XQ.message)||QQ||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: IQ,
            bytes: jQ,
            label: BQ
          } = FQ,
          yQ = {
            noMipmap: qQ,
            invertY: !1,
            samplingMode: sQ,
            ...gQ,
            mimeType: IQ,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          VQ = new zQ.e(null, WQ, yQ);
        oQ.u.set(VQ, JQ), Object.assign(VQ, PQ), VQ.updateURL(wQ, jQ);
        const DQ = VQ.getInternalTexture();
        DQ && (DQ.label = BQ), QQ.uvSet = VQ.coordinatesIndex, QQ.matrix.set((0, oQ.T)(VQ)), (0, rQ.N)(QQ, VQ)
      },
      cube: (QQ, WQ, XQ) => {
        let {
          rootUrl: wQ,
          files: TQ,
          noMipmap: sQ,
          luminance: FQ
        } = XQ;
        const {
          samplingMode: PQ
        } = QQ.sampler, gQ = PQ === (0, rQ.E)(sQ) ? null : () => {
          (0, oQ.S)(JQ, PQ)
        }, JQ = new qQ.b(wQ, WQ, null, sQ, TQ, gQ, null, (0, rQ.A)(FQ));
        JQ.coordinatesMode = zQ.e.SKYBOX_MODE, (0, rQ.N)(QQ, JQ)
      },
      canvas: (QQ, WQ, XQ) => {
        let {
          width: wQ,
          height: qQ,
          mipmaps: sQ,
          samplingMode: FQ,
          hasAlpha: PQ = !1,
          wrap: gQ = zQ.e.CLAMP_ADDRESSMODE
        } = XQ;
        const JQ = new TQ.b(WQ, {
          width: wQ,
          height: qQ
        }, QQ, sQ, FQ);
        JQ.hasAlpha = PQ, JQ.wrapU = gQ, JQ.wrapV = gQ;
        const rQ = (0, oQ.F)(JQ);
        return (0, oQ.J)(rQ, JQ), rQ
      }
    })
  },
  41386: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => gQ,
      f: () => JQ,
      h: () => rQ
    });
    var wQ = XQ(41373),
      qQ = XQ(40331),
      TQ = XQ(40561),
      zQ = XQ(40670),
      sQ = XQ(41379),
      FQ = XQ(40661),
      PQ = XQ(37762);
    class gQ extends zQ.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (QQ, WQ) => {
          this.releaseUnlessInstanced(WQ)
        }, this.onLinked = null
      }
      link(QQ) {
        var WQ;
        (0, PQ.o)(QQ), this.model = QQ, null === (WQ = this.onLinked) || void 0 === WQ || WQ.call(this, QQ)
      }
      relink() {
        this.release();
        const QQ = [];
        for (const qQ of Object.values(this._vertexBuffers))
          if (!qQ.getIsInstanced()) {
            const {
              byteOffset: WQ,
              byteStride: XQ,
              type: wQ,
              normalized: TQ
            } = qQ;
            QQ.push({
              kind: qQ.getKind(),
              data: qQ.getData(),
              offset: WQ,
              stride: XQ,
              components: qQ.getSize(),
              glType: wQ,
              isNormalized: TQ
            })
          } const WQ = this._indices.length ? this._indices : null,
          {
            minimum: XQ,
            maximum: wQ
          } = this.extend;
        this.link(new PQ.g(QQ, WQ, this.getTotalVertices(), new Float64Array(XQ.awQ()), new Float64Array(wQ.awQ())))
      }
      copy(QQ) {
        if (!this.model) return super.copy(QQ);
        const WQ = new gQ(QQ, this.sE()),
          XQ = this.lwQ(void 0, !0);
        XQ && WQ.setIndices(XQ);
        let zQ = !1;
        for (const TQ in this._vertexBuffers) {
          const QQ = this._vertexBuffers[TQ],
            XQ = QQ.getData();
          if (!XQ) continue;
          const sQ = QQ.getSize(),
            {
              type: FQ,
              byteOffset: PQ,
              byteStride: gQ,
              normalized: JQ
            } = QQ;
          zQ ||= QQ.isUpdatable();
          const rQ = QQ.getIsInstanced() ? (XQ instanceof Array ? 4 * XQ.length : XQ.byteLength) / gQ : this.getTotalVertices(),
            IQ = (0, qQ.w)(XQ, sQ, FQ, PQ, gQ, rQ, !0),
            jQ = {
              updatable: QQ.isUpdatable(),
              stride: sQ,
              type: FQ,
              normalized: JQ,
              takeBufferOwnership: !0,
              instanced: QQ.getIsInstanced()
            };
          WQ.setVerticesBuffer(new wQ.f(this.Uj(), IQ, TQ, jQ), rQ)
        }
        return WQ._updatable = zQ, WQ._boundingInfo = new TQ.e(this.extend.minimum, this.extend.maximum), WQ.relink(), WQ
      }
      static mergeMeshes(QQ, WQ, XQ, wQ, qQ, TQ) {
        const FQ = QQ[0].sE(),
          PQ = new sQ.b(QQ[0].name + "_merged", FQ),
          JQ = new gQ(zQ.d.RandomId(), FQ, void 0, !1, PQ);
        try {
          if (!sQ.b.MergeMeshes(QQ, WQ, XQ, PQ, qQ, TQ)) return PQ.dispose(), null
        } catch (rQ) {
          throw PQ.dispose(), rQ
        }
        return JQ.relink(), PQ
      }
      removeVerticesData(QQ) {
        this.releaseUnlessInstanced(QQ), super.removeVerticesData(QQ)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(QQ) {
        var WQ;
        QQ && null !== (WQ = this.getVertexBuffer(QQ)) && void 0 !== WQ && WQ.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, PQ.u)(this.model), this.model = null)
      }
    }

    function JQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new sQ.b(QQ, XQ);
      const qQ = (0, PQ.m)(WQ),
        {
          positions: TQ,
          normals: JQ,
          uvs: rQ,
          indices: IQ,
          named: jQ = {}
        } = WQ,
        BQ = new FQ.e;
      BQ.positions = TQ, BQ.normals = null !== JQ && void 0 !== JQ ? JQ : null, BQ.uvs = null !== rQ && void 0 !== rQ ? rQ : null, BQ.indices = IQ;
      const yQ = new gQ(zQ.d.RandomId(), XQ, BQ, !1, wQ);
      for (const {
          kind: zQ,
          components: sQ
        }
        of qQ.vertexAttributes) zQ in jQ && wQ.setVerticesData(zQ, jQ[zQ], !1, sQ);
      return yQ.link(qQ), wQ
    }

    function rQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qQ = new sQ.b(QQ, XQ),
        {
          positions: TQ,
          normals: zQ,
          uvs: PQ,
          indices: gQ
        } = WQ;
      return Object.assign(new FQ.e, {
        positions: TQ,
        normals: zQ,
        uvs: PQ,
        indices: gQ
      }).applyToMesh(qQ, wQ), qQ
    }
  },
  41851: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => yQ,
      f: () => sQ,
      i: () => zQ,
      j: () => PQ
    });
    var wQ = XQ(37539),
      qQ = XQ(38986),
      TQ = XQ(38979);

    function zQ(QQ, WQ, XQ, wQ) {
      const qQ = TQ.u;
      WQ.fill(0), QQ.gravity.toArray(WQ, qQ.gravity), QQ.colorDead.toArray(WQ, qQ.colorDead), XQ[qQ.ramp] = QQ.useRampGradients ? 1 : 0;
      const zQ = QQ.getColorGradients(),
        sQ = rQ(QQ, zQ, "colour", wQ);
      XQ[qQ.colorCount] = sQ;
      for (let TQ = 0; TQ < sQ; TQ++) {
        var FQ;
        const QQ = zQ[IQ(zQ, TQ)];
        WQ[qQ.colorPositions + TQ] = QQ.gradient, QQ.color1.toArray(WQ, qQ.color1 + 4 * TQ), (null !== (FQ = QQ.color2) && void 0 !== FQ ? FQ : QQ.color1).toArray(WQ, qQ.color2 + 4 * TQ)
      }
      const PQ = QQ.getVelocityGradients(),
        gQ = rQ(QQ, PQ, "Fy", wQ);
      XQ[qQ.velocityCount] = gQ;
      for (let TQ = 0; TQ < gQ; TQ++) DQ(WQ, qQ.Fy + 4 * TQ, PQ[IQ(PQ, TQ)]);
      const JQ = QQ.useRampGradients ? QQ.getColorRemapGradients() : null,
        jQ = rQ(QQ, JQ, "colour remap", wQ);
      XQ[qQ.remapCount] = jQ;
      for (let TQ = 0; TQ < jQ; TQ++) DQ(WQ, qQ.remap + 4 * TQ, JQ[IQ(JQ, TQ)])
    }

    function sQ() {
      return {
        key: [],
        texels: new Uint8Array(4 * TQ.l)
      }
    }
    const FQ = [];

    function PQ(QQ, WQ) {
      return gQ(QQ, FQ), !VQ(FQ, WQ.key) && (WQ.key.length = 0, WQ.key.push(...FQ), WQ.key.length > 0 && function(QQ, WQ) {
        for (let XQ = 0; XQ < TQ.l; XQ++) qQ.l.GetCurrentGradient(XQ / TQ.l, QQ, ((QQ, WQ, XQ) => {
          wQ.Color3.LerpToRef(QQ.color, WQ.color, XQ, JQ)
        })), WQ[4 * XQ] = 255 * JQ.r, WQ[4 * XQ + 1] = 255 * JQ.g, WQ[4 * XQ + 2] = 255 * JQ.b, WQ[4 * XQ + 3] = 255
      }(QQ.getRampGradients(), WQ.texels), !0)
    }

    function gQ(QQ, WQ) {
      WQ.length = 0;
      const XQ = QQ.useRampGradients ? QQ.getRampGradients() : null;
      if (null !== XQ && void 0 !== XQ && XQ.length) {
        WQ.push(XQ.length);
        for (const QQ of XQ) WQ.push(QQ.gradient, QQ.color.r, QQ.color.g, QQ.color.b)
      }
    }
    const JQ = new wQ.Color3;

    function rQ(QQ, WQ, XQ, wQ) {
      return WQ ? WQ.length > TQ.e ? (wQ(`particleStops:${XQ}`, `GPU particles use the first 2 and last ${TQ.e-2} of more than ${TQ.e} ${XQ} gradient stops (${QQ.name})`), TQ.e) : WQ.length : 0
    }

    function IQ(QQ, WQ) {
      return WQ < 2 || QQ.length <= TQ.e ? WQ : QQ.length - TQ.e + WQ
    }
    const jQ = new Float32Array(TQ.q),
      BQ = new Uint32Array(jQ.buffer);

    function yQ(QQ, WQ, XQ) {
      return zQ(QQ, jQ, BQ, XQ), WQ && VQ(BQ, WQ) ? null : BQ.slice()
    }

    function VQ(QQ, WQ) {
      if (QQ.length !== WQ.length) return !1;
      for (let XQ = 0; XQ < QQ.length; XQ++)
        if (QQ[XQ] !== WQ[XQ]) return !1;
      return !0
    }

    function DQ(QQ, WQ, XQ) {
      var wQ;
      QQ[WQ] = XQ.gradient, QQ[WQ + 1] = XQ.factor1, QQ[WQ + 2] = null !== (wQ = XQ.factor2) && void 0 !== wQ ? wQ : XQ.factor1
    }
  },
  41366: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      const wQ = WQ * WQ * 4,
        qQ = QQ[0].layers,
        TQ = qQ * (QQ.length - 1) + QQ[QQ.length - 1].layers,
        zQ = new Uint8Array(TQ * wQ);
      QQ.forEach(((WQ, XQ) => {
        const TQ = XQ + 1 < QQ.length ? Math.min(WQ.layers, qQ) : WQ.layers;
        zQ.set(new Uint8Array(WQ.pixels.buffer, WQ.pixels.byteOffset, TQ * wQ), XQ * qQ * wQ)
      }));
      const sQ = Math.max(1, Math.min(TQ, XQ || TQ));
      if (sQ === TQ) return [{
        pixels: zQ,
        layers: TQ
      }];
      const FQ = [];
      for (let PQ = 0; PQ < TQ; PQ += sQ) {
        const QQ = Math.min(TQ, PQ + sQ);
        FQ.push({
          pixels: zQ.slice(PQ * wQ, QQ * wQ),
          layers: QQ - PQ
        })
      }
      return FQ
    }
    XQ.d(WQ, {
      b: () => wQ,
      f: () => TQ
    });
    const qQ = new WeakMap;

    function TQ(QQ, WQ, XQ) {
      var wQ, TQ;
      const zQ = null !== (wQ = qQ.get(QQ)) && void 0 !== wQ ? wQ : new Map;
      qQ.set(QQ, zQ);
      const sQ = null !== (TQ = zQ.get(WQ[0])) && void 0 !== TQ ? TQ : [];
      zQ.set(WQ[0], sQ);
      const FQ = sQ.find((QQ => QQ.urls.length === WQ.length && QQ.urls.every(((QQ, XQ) => QQ === WQ[XQ]))));
      if (FQ) return FQ.built;
      const PQ = {
        urls: [...WQ],
        built: XQ()
      };
      return sQ.push(PQ), PQ.built.catch((() => {
        sQ.splice(sQ.indexOf(PQ), 1)
      })), PQ.built
    }
  },
  41842: (QQ, WQ, XQ) => {
    function wQ() {
      let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const WQ = new Set;
      return (XQ, wQ) => {
        WQ.has(XQ) || (WQ.add(XQ), console.warn(QQ + wQ))
      }
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);