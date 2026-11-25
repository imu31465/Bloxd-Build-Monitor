export const id = 0;
export const ids = [0];
export const modules = {
  42227: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CapeMaterialPlugin: () => UM,
      HueTintMaterialPlugin: () => GM,
      LifeformMaterialPlugin: () => CM,
      OverlayMaterialPlugin: () => eM
    });
    var OM = iM(42233),
      SM = iM(38984);
    class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
    var aM = iM(38275);
    class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
    var nM = iM(38832);
    class QM extends((0, OM.i)(nM.e)) {}(0, OM.m)(nM.e, QM);
    var zM = iM(38298),
      LM = iM(41374),
      mM = iM(38294);
    class HM extends((0, OM.i)(mM.e)) {
      constructor(MM, rM, iM) {
        super(MM, rM, iM), (0, zM.k)(MM)
      }
      dispose(MM) {
        (0, zM.m)(this._material), super.dispose(MM)
      }
    }(0, OM.m)(mM.e, HM), (0, mM.f)({
      disableUnusedSpecularTerm: OM.e,
      isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
    });
    var hM = iM(39720);
    class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
    var dM = iM(39852),
      yM = iM(38178),
      lM = iM(39126),
      EM = iM(38287);
    class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
    class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
    class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
    class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
  },
  44202: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      addBabylonLights: () => gr,
      createSceneParticleSystem: () => Wr,
      default: () => Dr
    });
    var OM = iM(44206),
      SM = (iM(41074), iM(42220), iM(41564), iM(44220)),
      jM = iM(38167),
      aM = iM(38034),
      PM = iM(44235),
      nM = iM(44237),
      QM = iM(38233),
      zM = (iM(42233), iM(44241)),
      LM = iM(44239),
      mM = iM(39760),
      HM = iM(44250),
      hM = iM(40964),
      JM = iM(39741);
    const dM = "gpuParticles",
      yM = "gpuParticlesSummed",
      lM = JM.z,
      EM = MM => MM / 4,
      UM = (MM, rM, iM, OM) => Array.from({
        length: rM
      }, ((SM, jM) => `(${((MM,rM,iM)=>0===rM?`${MM} < 1`:rM===iM-1?`${MM} >= ${rM}`:`${MM} == ${rM}`)(MM,jM,rM)} ? ${iM(jM)} : ${OM})`)).join("\n\t\t+ "),
      GM = (MM, rM, iM) => `vec4 ${MM}(int i) {\n\treturn ${UM("i",iM,(MM=>`gpuParticleSystem[${rM+MM}]`),"vec4(0.0)")};\n}\n`,
      CM = `\n${GM("colorPositionsAt",EM(lM.colorPositions),JM.d/4)}\n${GM("color1At",EM(lM.color1),JM.d)}\n${GM("color2At",EM(lM.color2),JM.d)}\n${GM("velocityAt",EM(lM.dd),JM.d)}\n${GM("remapStopAt",EM(lM.remap),JM.d)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${UM("j",4,(MM=>`v[${MM}]`),"0.0")};\n}\n`,
      eM = (MM, rM, iM, OM) => MM ? `${iM}(${OM})` : `gpuParticleSystem[${rM} + ${OM}]`,
      bM = MM => `gpuParticleSystem[${MM>>2}].${"xyzw"[3&MM]}`,
      wM = MM => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${JM.d}\n#define COLOR_POSITIONS ${EM(lM.colorPositions)}\n#define COLOR1 ${EM(lM.color1)}\n#define COLOR2 ${EM(lM.color2)}\n#define VELOCITY ${EM(lM.dd)}\n#define REMAP ${EM(lM.remap)}\n#define RECORDS_PER_ROW ${JM.p}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${JM.s/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${bM(lM.gravity)}, ${bM(lM.gravity+1)}, ${bM(lM.gravity+2)}); }\nint colorCount() { return int(${bM(lM.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${EM(lM.colorDead)}]; }\nint velocityCount() { return int(${bM(lM.velocityCount)}); }\nint remapCount() { return int(${bM(lM.remapCount)}); }\n${MM?CM:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${MM?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${eM(MM,"COLOR1","color1At","i")}, ${eM(MM,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${eM(MM,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${eM(MM,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${eM(MM,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${eM(MM,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${eM(MM,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${eM(MM,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${eM(MM,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      tM = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    hM.e.ShadersStore[`${dM}VertexShader`] = wM(!1), hM.e.ShadersStore[`${dM}PixelShader`] = tM, hM.e.ShadersStore[`${yM}VertexShader`] = wM(!0), hM.e.ShadersStore[`${yM}PixelShader`] = tM;
    const gM = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      uM = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var RM = iM(39733),
      pM = iM(44259);
    class WM extends RM.b {
      constructor(MM, rM, iM, OM) {
        super(MM, rM, iM), this.renderer = iM, this.YJ = OM, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(JM.s), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, pM.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (MM, rM) => {
          const {
            engine: iM
          } = this, OM = iM._gl;
          iM._bindTextureDirectly(OM.TEXTURE_2D, this.records, !0), iM._unpackFlipY(!1);
          const SM = this.ring.recordBits;
          for (let jM = MM; jM < rM;) {
            const MM = Math.floor(jM / JM.p),
              iM = Math.min(rM, (MM + 1) * JM.p);
            OM.texSubImage2D(OM.TEXTURE_2D, 0, jM % JM.p * 4, MM, 4 * (iM - jM), 1, OM.RGBA_INTEGER, OM.UNSIGNED_INT, SM, jM * JM.g), jM = iM
          }
          iM._bindTextureDirectly(OM.TEXTURE_2D, null)
        }, this.id = MM;
        const SM = OM.ph();
        this.engine = SM;
        const jM = Math.max(1, rM),
          aM = Math.min(jM, JM.p);
        this.records = SM.createRawTexture(null, 4 * aM, Math.ceil(jM / aM), zM.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, zM.d.TEXTURE_NEAREST_SAMPLINGMODE, null, zM.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.YJ.getAnimationRatio() || 1;
        const rM = this.YJ.getFrameId();
        if (rM === this.animatedFrame) return !1;
        const iM = super.animate(MM);
        return iM && (this.animatedFrame = rM, this.ring.takeUploads(this.uploadSlots)), iM
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(MM) {
        (0, pM.h)(this, this.uniforms, this.uniformBits, MM);
        for (const iM of JM.v) this.uniforms[iM] = this.uniformBits[iM];
        var rM;
        (0, pM.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (rM = this.ramp) || void 0 === rM || rM.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = LM.e.CreateRGBATexture(this.rampTexels.texels, JM.o, 1, this.YJ, !1, !1, zM.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var MM;
        this.records.dispose(), null === (MM = this.ramp) || void 0 === MM || MM.dispose(), this.ramp = null
      }
    }
    const sM = "the context was lost before the programs linked";
    class DM {
      constructor(MM, rM) {
        this.YJ = MM, this.reportFailure = rM, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = dM, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, HM.b)(), this.engine = MM.ph(), this.whiteRamp = LM.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, MM, !1, !1, zM.d.TEXTURE_NEAREST_SAMPLINGMODE);
        const iM = this.linkPair(dM),
          OM = null !== iM && iM !== sM ? this.linkPair(yM) : iM;
        null === OM && null !== iM ? (console.warn(`GPU particles link their fallback here: ${iM}`), this.reportFailure(iM, !0)) : null !== OM && this.fail(OM === sM ? sM : null !== iM && void 0 !== iM ? iM : OM)
      }
      uZ(MM, rM) {
        const iM = JM.p * this.engine.getCaps().maxTextureSize;
        rM > iM && this.warnOnce(`capacity:${MM}`, `particle system ${MM} holds ${iM} particles, not ${rM}: its records texture's limit`);
        const OM = new WM(MM, Math.min(rM, iM), this, this.YJ);
        return this.YJ.addParticleSystem(OM), OM
      }
      canDraw(MM) {
        var rM, iM;
        if (this.failed || null === (rM = MM.texture) || void 0 === rM || null === (iM = rM.mirror) || void 0 === iM || !iM.isReady()) return !1;
        for (const OM of (0, mM.k)(MM.blendMode))
          if (!this.effectFor(OM).isReady()) return !1;
        return !0
      }
      disposeStopped(MM) {
        this.YJ._toBeDisposed.push(MM)
      }
      remove(MM) {
        this.YJ.removeParticleSystem(MM), MM.releaseGl()
      }
      render(MM) {
        var rM;
        if (!MM.isReady() || !MM.hasLiveParticles()) return 0;
        const {
          engine: iM,
          YJ: OM,
          frame: SM
        } = this;
        MM.prepareDraw(this.warnOnce), MM.drawOffset(SM, 0), SM[3] = MM.drawTime();
        const jM = MM.ring.drawStart(),
          aM = MM.ring.drawCount(),
          PM = null !== (rM = MM.ramp) && void 0 !== rM ? rM : this.whiteRamp;
        iM.setState(!1);
        for (const nM of (0, mM.k)(MM.blendMode)) {
          const rM = this.effectFor(nM);
          iM.enableEffect(rM), rM.setTexture("gpuParticleTexture", MM.texture.mirror), rM.setTexture("gpuParticleRampTexture", PM), rM._bindTexture("gpuParticleRecords", MM.records), rM.setMatrix("gpuParticleView", OM.getViewMatrix()), rM.setMatrix("gpuParticleProjection", OM.getProjectionMatrix()), rM.setFloatArray4("gpuParticleSystem", MM.uniforms), rM.setFloat4("gpuParticleFrame", SM[0], SM[1], SM[2], SM[3]), rM.setFloat2("gpuParticleRange", jM, aM), rM.setFloat("gpuParticleRamp", MM.uniforms[JM.z.ramp]), iM.bindBuffers(this.vertexBuffers, null, rM), iM.setAlphaMode((0, mM.i)(nM)), iM.drawArraysType(zM.d.MATERIAL_TriangleStripDrawMode, 0, 4, aM), rM._bindTexture("gpuParticleRecords", null)
        }
        return iM.setAlphaMode(zM.d.ALPHA_DISABLE), aM
      }
      linkPair(MM) {
        this.shader = MM, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(MM, ""), this.multiplyEffect = this.createEffect(MM, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(MM) {
        const rM = MM.getPipelineContext(),
          iM = this.gl();
        iM && null === this.pairFailure && (!rM || rM.isParallelCompiled && !rM.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : rM.isParallelCompiled && rM.program && (iM.getProgramParameter(rM.program, iM.LINK_STATUS) || this.programFailed(function(MM, rM, iM) {
          if (MM.isContextLost()) return sM;
          for (const [OM, SM] of [
              ["VERTEX SHADER", rM.vertexShader],
              ["FRAGMENT SHADER", rM.fragmentShader]
            ]) {
            const rM = SM && !MM.getShaderParameter(SM, MM.COMPILE_STATUS) ? MM.getShaderInfoLog(SM) : null;
            if (rM) return `${OM} ${rM}`
          }
          return MM.getProgramInfoLog(iM) || "a program did not link"
        }(iM, rM, rM.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(MM) {
        return MM === mM.e ? this.multiplyEffect : this.effect
      }
      createEffect(MM, rM) {
        return this.engine.createEffect(MM, [], gM, uM, rM, void 0, void 0, ((rM, iM) => {
          var OM;
          MM === this.shader && this.programFailed(null !== (OM = this.gl()) && void 0 !== OM && OM.isContextLost() ? sM : function(MM) {
            const rM = MM.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(rM) ? "a program failed, its log not in this browser's stack" : rM.replace(/^Error: /, "")
          }(iM))
        }))
      }
      programFailed(MM) {
        this.linkingPair ? this.pairFailure ??= MM : this.fail(MM)
      }
      fail(MM) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${MM}`), this.reportFailure(MM, !1);
          for (const MM of this.YJ.aG.slice()) MM instanceof WM && MM.disposeOnStop && MM.dispose()
        }
      }
    }
    var kM = iM(40931);
    class ZM extends kM.e {
      createEffect() {
        const MM = super.createEffect(...arguments);
        return fM(MM), oM.has(MM) || (oM.add(MM), MM.onCompileObservable.add((() => {
          fM(MM)
        }))), MM
      }
    }
    const oM = new WeakSet;

    function fM(MM) {
      MM._vertexSourceCodeBeforeMigration = "", MM._fragmentSourceCodeBeforeMigration = ""
    }
    var YM = iM(41313),
      NM = iM(42212),
      AM = iM(41048),
      xM = iM(41274),
      vM = iM(41269),
      FM = iM(41190),
      BM = iM(42280),
      XM = iM(38476),
      IM = iM(44265),
      KM = iM(44273),
      qM = iM(44280),
      TM = iM(41213),
      VM = iM(3177),
      cM = iM(38363),
      Mr = iM(41412),
      rr = iM(38442),
      ir = iM(38388);

    function Or(MM) {
      if (MM.visibility < 1 || !MM.isVisible || !MM.isEnabled() || MM.metadata[ir.f] || !MM.isReady()) return !0;
      const rM = MM.iG;
      if (!rM || 0 === rM.length) return !0;
      for (let iM = 0; iM < rM.length; iM++) {
        const OM = rM[iM],
          SM = OM.Zh();
        if (!SM || !SM.isReadyForSubMesh(MM, OM, !1)) return !0
      }
      return !1
    }
    class Sr {
      constructor(MM, rM) {
        this.Cm = MM, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, rM.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      JL(MM) {
        var rM;
        const iM = this.armed;
        if (this.armed = !1, this.vis = null, !iM) return !1;
        this.culled = 0;
        const {
          Cm: OM
        } = this, SM = null === (rM = OM.kU) || void 0 === rM ? void 0 : rM.visibility;
        if (!SM || !MM || OM.CL.MJ) return !1;
        if (!(OM.uL.GOM[0] >= rr.h)) return !1;
        const jM = MM.getProjectionMatrix().m;
        if (0 !== jM[15]) return !1;
        const aM = OM.Am,
          PM = MM.globalPosition,
          nM = this.eye;
        return nM[0] = PM.x + aM[0], nM[1] = PM.y + aM[1], nM[2] = PM.z + aM[2], !!SM.eyeClear(nM[0], nM[1], nM[2], MM.minZ, jM, OM.uL) && (this.vis = SM, this.passable.clear(), this.count = 0, !0)
      }
      see(MM, rM) {
        const iM = this.count++;
        if (iM === this.cellSlots.length) {
          const MM = new Int32Array(2 * iM);
          MM.set(this.cellSlots), this.cellSlots = MM
        }
        this.cellSlots[iM] = rM, this.meshes[iM] = MM
      }
      seeThrough(MM) {
        this.passable.add(MM)
      }
      finish(MM, rM) {
        const {
          vis: iM,
          eye: OM,
          meshes: SM,
          count: jM,
          cellSlots: aM
        } = this, {
          uL: PM
        } = this.Cm, [nM, QM] = PM.GOM, zM = null !== iM && iM.update(OM[0], OM[1], OM[2], PM.hL, nM, QM, this.passable);
        let LM = 0;
        for (let mM = 0; mM < jM; mM++) {
          const OM = SM[mM];
          if (zM) {
            const MM = 3 * aM[mM];
            if (MM >= 0 && !iM.isDrawn(rM[MM], rM[MM + 1], rM[MM + 2])) {
              LM++;
              continue
            }
          }
          TM.e.prototype.push.call(MM, OM)
        }
        SM.fill(null, 0, jM), this.count = 0, this.vis = null, this.culled = LM
      }
    }
    var jr = iM(38423),
      ar = iM(38375),
      Pr = iM(41397),
      nr = iM(44287),
      Qr = iM(41400),
      zr = iM(41328);
    let Lr = 1;
    const mr = new WeakSet;

    function Hr() {
      return Lr
    }

    function hr() {
      Lr = Lr >= 1073741823 ? 1 : Lr + 1
    }

    function Jr(MM) {
      const rM = MM.metadata;
      if (!rM || !0 !== rM[cM.q]) return;
      const iM = rM[cM.t],
        OM = null === iM || void 0 === iM ? void 0 : iM._noaStamps;
      if (!iM || !OM) return;
      const SM = iM.entries.indexOf(MM);
      SM >= 0 && (OM[SM] = 0)
    }

    function dr(MM) {
      const rM = MM.iG;
      for (let iM = 0; iM < rM.length; iM++) {
        const MM = rM[iM].Zh();
        if (MM && !MM.isFrozen) return !1
      }
      for (let iM = 0; iM < rM.length; iM++) {
        const MM = rM[iM].Zh();
        MM && mr.add(MM)
      }
      return !0
    }
    let yr = !1;
    const lr = new WeakSet;

    function Er(MM, rM) {
      const iM = MM[rM];
      if ("function" !== typeof iM) throw new Error(`terrainDrawState: Babylon has no ${rM} to hook`);
      return iM
    }

    function Ur(MM, rM, iM, OM, SM) {
      const jM = iM.uL.hL,
        aM = new Map;
      let PM = 0;
      const nM = new Sr(iM, MM),
        QM = new jr.b(jM, MM.ph());
      ! function(MM) {
        if (lr.has(MM) || (lr.add(MM), MM.onContextLostObservable.add(hr), MM.Rh.add(hr)), yr) return;
        yr = !0;
        const rM = nr.b.prototype,
          iM = Er(rM, "_markSubMeshesAsDirty");
        Object.assign(rM, {
          _markSubMeshesAsDirty(MM) {
            iM.call(this, MM), Jr(this)
          }
        });
        const OM = Er(zr.d.prototype, "_syncParentEnabledState");
        Object.assign(zr.d.prototype, {
          _syncParentEnabledState() {
            OM.call(this), Jr(this)
          }
        });
        const SM = Er(Qr.e.prototype, "resetDrawCache");
        Qr.e.prototype.resetDrawCache = function(MM, rM) {
          SM.call(this, MM, rM), Jr(this.getMesh())
        };
        const jM = Pr.c.prototype,
          aM = Er(jM, "markDirty");
        jM.markDirty = function(MM) {
          aM.call(this, MM), mr.has(this) && hr()
        };
        const PM = Er(jM, "_markAllSubMeshesAsDirty");
        Object.assign(jM, {
          _markAllSubMeshesAsDirty(MM) {
            PM.call(this, MM), mr.has(this) && hr()
          }
        })
      }(MM.ph());
      let zM = new Float64Array(384),
        LM = new Int32Array(64),
        mM = new Uint8Array(64),
        HM = new Float64Array(64),
        hM = new Int32Array(192),
        JM = 0;
      const dM = [],
        yM = new Float64Array(24),
        lM = () => {
          const MM = dM.pop();
          return void 0 !== MM ? (LM[MM] = 0, MM) : (JM === LM.length && (zM = Gr(zM, new Float64Array(2 * zM.length)), LM = Gr(LM, new Int32Array(2 * LM.length)), mM = Gr(mM, new Uint8Array(2 * mM.length)), HM = Gr(HM, new Float64Array(2 * HM.length)), hM = Gr(hM, new Int32Array(2 * hM.length))), JM++)
        },
        EM = MM => {
          const rM = 6 * MM._noaSlot,
            iM = MM.ROM[0],
            OM = MM.ROM[1];
          zM[rM] = iM.x, zM[rM + 1] = iM.y, zM[rM + 2] = iM.z, zM[rM + 3] = OM.x, zM[rM + 4] = OM.y, zM[rM + 5] = OM.z
        },
        UM = (MM, rM, iM) => {
          if (!iM) return nM.see(MM, -1), !1;
          const OM = Or(MM);
          return OM && nM.seeThrough(HM[rM]), nM.see(MM, rM), !OM
        };
      let GM = -1;
      return MM.getActiveMeshCandidates = () => {
        const iM = MM.frustumPlanes,
          OM = rM._selectionContent;
        OM.reset(), (iM => {
          const OM = MM.frustumPlanes;
          PM = PM + 1 | 0 || 1;
          const SM = rM.blocks,
            jM = nM.JL(MM.activeCamera),
            aM = jM && !0;
          if (aM) {
            const rM = MM.ph().currentRenderPassId;
            rM !== GM && (GM = rM, hr())
          }
          const QM = Hr(),
            HM = aM && !1;
          SM.length > 0 && function(MM, rM) {
            for (let iM = 0; iM < 6; iM++) {
              const OM = MM[iM],
                SM = OM.normal;
              rM[4 * iM] = SM.x, rM[4 * iM + 1] = SM.y, rM[4 * iM + 2] = SM.z, rM[4 * iM + 3] = OM.d
            }
          }(OM, yM);
          const JM = zM,
            dM = LM,
            lM = mM;
          for (let MM = 0; MM < SM.length; MM++) {
            const rM = SM[MM];
            if (!Mr.e.IsInFrustum(rM.ROM, OM)) continue;
            const zM = rM.entries;
            {
              const MM = rM._noaSlots,
                OM = rM._noaStamps,
                SM = rM._noaTerrain;
              for (let rM = 0; rM < zM.length; rM++) {
                const LM = MM[rM];
                if (dM[LM] !== PM && (dM[LM] = PM, lM[LM] = Cr(JM, 6 * LM, yM) ? 1 : 0), 0 === lM[LM]) continue;
                const mM = zM[rM];
                if (aM && OM[rM] === QM) HM && 1 === SM[rM] && Or(mM) && 0, nM.see(mM, 1 === SM[rM] ? LM : -1);
                else if (aM) {
                  OM[rM] = QM;
                  const MM = !0 === mM.metadata[ar.q];
                  SM[rM] = MM ? 1 : 0;
                  const iM = UM(mM, LM, MM);
                  !MM || iM && dr(mM) || (OM[rM] = 0)
                } else jM ? UM(mM, LM, !0 === mM.metadata[ar.q]) : TM.e.prototype.push.call(iM, mM)
              }
              continue
            }
          }
          jM && nM.finish(iM, hM)
        })(OM), QM.apply(OM, MM.activeCamera);
        const jM = rM.uOM;
        for (let MM = 0; MM < jM.length; MM++) {
          const rM = jM[MM];
          rM.isEnabled() && TM.e.prototype.push.call(OM, rM)
        }
        return SM(OM, iM), OM
      }, {
        pOM: () => nM.culled,
        JOM: (MM, rM) => {
          const SM = Math.floor(rM[0] / jM),
            PM = Math.floor(rM[1] / jM),
            nM = Math.floor(rM[2] / jM),
            QM = `${SM}|${PM}|${nM}`;
          let zM = aM.get(QM);
          if (!zM) {
            const MM = [0, 0, 0];
            iM.ErM([SM * jM - 1, PM * jM - 1, nM * jM - 1], null, MM), zM = Object.assign(OM(MM, jM + 2), {
              WOM: QM,
              sOM: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: lM()
            }), EM(zM), HM[zM._noaSlot] = (0, VM.k)(SM, PM, nM), hM[3 * zM._noaSlot] = SM, hM[3 * zM._noaSlot + 1] = PM, hM[3 * zM._noaSlot + 2] = nM, aM.set(QM, zM)
          }
          zM.sOM++, MM.metadata[cM.x] = zM
        },
        Fk: MM => {
          const rM = MM.metadata[cM.x];
          rM && (rM.sOM--, rM.sOM <= 0 && (aM.delete(rM.WOM), dM.push(rM._noaSlot)), MM.metadata[cM.x] = null)
        },
        gOM: (MM, rM) => {
          const iM = MM,
            OM = rM.metadata[cM.x];
          (iM._noaSlots ??= []).push(OM._noaSlot), (iM._noaStamps ??= []).push(0), (iM._noaTerrain ??= []).push(0), iM.entries.push(rM)
        },
        removeEntry: (MM, rM) => {
          const iM = MM,
            OM = iM.entries,
            SM = OM.indexOf(rM);
          if (SM < 0) return;
          const jM = iM._noaSlots,
            aM = iM._noaStamps,
            PM = iM._noaTerrain,
            nM = OM.length - 1;
          OM[SM] = OM[nM], jM[SM] = jM[nM], aM[SM] = aM[nM], PM[SM] = PM[nM], OM.pop(), jM.pop(), aM.pop(), PM.pop()
        },
        rMM: MM => {
          for (const rM of aM.values()) {
            rM.UOM.kOM(MM), rM.EOM.kOM(MM);
            for (const iM of rM.ROM) iM.kOM(MM);
            EM(rM)
          }
        }
      }
    }

    function Gr(MM, rM) {
      return rM.set(MM), rM
    }

    function Cr(MM, rM, iM) {
      const OM = MM[rM],
        SM = MM[rM + 1],
        jM = MM[rM + 2],
        aM = MM[rM + 3],
        PM = MM[rM + 4],
        nM = MM[rM + 5];
      for (let QM = 0; QM < 24; QM += 4) {
        const MM = iM[QM],
          rM = iM[QM + 1],
          zM = iM[QM + 2];
        if (!(MM * (MM >= 0 ? aM : OM) + rM * (rM >= 0 ? PM : SM) + zM * (zM >= 0 ? nM : jM) + iM[QM + 3] >= 0)) return !1
      }
      return !0
    }
    var er = iM(38749);
    class br {
      constructor(MM, rM) {
        var iM = MM.YJ;
        iM.MOM(new qM.c(iM));
        var OM = new IM.c(nM);
        iM.oOM = OM, OM.blocks = [];
        var SM, jM = {},
          PM = [];
        this.textPlanes = PM, this.pOM = () => SM.pOM(), this.rMM = MM => {
          zM(OM, MM), SM.rMM(MM)
        }, this.JOM = (rM, iM, aM) => {
          if (!rM.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!rM.metadata[cM.t] && !rM.metadata[cM.n]) {
            if (!iM) {
              var nM = OM.uOM;
              if (rM.metadata[cM.B] && !rM.parent) {
                nM = PM;
                var zM = rM.aY().YOM;
                rM.metadata[cM.E] = zM.center.length() + zM.radius, rM.Wh = !0
              }
              return nM.push(rM), rM.metadata[cM.i] = nM, void(rM.metadata[cM.n] = !0)
            }
            var mM = Math.floor(aM[0] / QM),
              HM = Math.floor(aM[1] / QM),
              hM = Math.floor(aM[2] / QM),
              JM = mM + "|" + HM + "|" + hM,
              dM = jM[JM];
            if (!dM) {
              var yM = [mM * QM, HM * QM, hM * QM],
                lM = [0, 0, 0];
              MM.Cm.ErM(yM, null, lM), dM = LM(lM, QM), OM.blocks.push(dM), jM[JM] = dM, dM.WOM = JM
            }
            SM.JOM(rM, aM), SM.gOM(dM, rM), dM.sOM = (dM.sOM || 0) + 1, rM.metadata[cM.t] = dM, rM.metadata[cM.q] = !0, rM.Wh = !0
          }
        }, this.Fk = MM => {
          if (MM.metadata) {
            MM.metadata[cM.n] && ((0, VM.o)(MM.metadata[cM.i], MM), MM.metadata[cM.n] = !1), MM.metadata[cM.i] === PM && (MM.Wh = !1), MM.metadata[cM.i] = void 0, MM.metadata[cM.E] = void 0;
            var rM = MM.metadata[cM.t];
            rM && rM.entries && (MM.metadata[cM.q] && SM.removeEntry(rM, MM), rM.sOM--, rM.sOM <= 0 && (delete jM[rM.WOM], (0, VM.o)(OM.blocks, rM))), SM.Fk(MM), MM.metadata[cM.t] = null, MM.metadata[cM.q] = !1
          }
        }, this.E_ = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (MM.metadata[cM.t]) {
            if (MM.metadata[cM.q] === rM) return;
            var iM = MM.metadata[cM.t];
            iM && iM.entries && (rM ? SM.gOM(iM, MM) : SM.removeEntry(iM, MM)), MM.metadata[cM.q] = rM
          } else {
            if (MM.metadata[cM.n] === rM) return;
            var jM = MM.metadata[cM.i] || OM.uOM;
            rM ? jM.push(MM) : (0, VM.o)(jM, MM), MM.metadata[cM.n] = rM
          }
        };
        var nM = () => {},
          QM = rM * MM.Cm.uL.hL,
          zM = (MM, rM) => {
            MM.blocks.forEach((MM => {
              MM.UOM.kOM(rM), MM.EOM.kOM(rM), MM.ROM.forEach((MM => MM.kOM(rM))), MM.blocks && zM(MM, rM)
            }))
          },
          LM = (MM, rM) => {
            var iM = new aM.sh(MM[0], MM[1], MM[2]),
              OM = new aM.sh(MM[0] + rM, MM[1] + rM, MM[2] + rM);
            return new KM.b(iM, OM, void 0, void 0, void 0, nM)
          };
        SM = Ur(iM, OM, MM.Cm, LM, ((MM, rM) => {
          for (var iM = 0; iM < PM.length; iM++) {
            var OM = PM[iM];
            OM.isEnabled(!1) && ((0, er.b)(OM, rM) && TM.e.prototype.push.call(MM, OM))
          }
        }))
      }
    }

    function wr(MM) {
      const {
        holderPosition: rM,
        holderRotation: iM,
        yV: OM,
        fov: SM,
        near: jM,
        far: aM
      } = MM.model.JV, PM = MM.IOM;
      PM.position.iMM(rM[0], rM[1], rM[2]), PM.rotation.iMM(iM[0], iM[1], iM[2]);
      const nM = MM.camera;
      nM.position.iMM(OM[0], OM[1], OM[2]), nM.fov = SM, nM.minZ = jM, nM.maxZ = aM
    }

    function tr(MM) {
      const rM = MM.ph(),
        iM = rM,
        OM = iM._gl;
      if (!OM || iM.PJ < 2 || rM.LOM || OM.getParameter(OM.DEPTH_BITS) < 24) return !1;
      const SM = MM._renderingManager,
        jM = SM.getRenderingGroup(-1),
        aM = SM.getRenderingGroup(0),
        PM = xM.c.prototype.render;
      return jM.render = function(MM, rM, iM, OM, SM, jM, nM, QM, zM) {
        (MM || aM._empty) && PM.call(this, MM, rM, iM, OM, SM, jM, nM, QM, zM)
      }, aM.render = function(MM, iM, SM, aM) {
        let nM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          LM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          mM = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          HM = arguments.length > 8 ? arguments[8] : void 0;
        MM ? PM.call(this, MM, iM, SM, aM, nM, QM, LM, mM, HM) : (rM.setAlphaMode(zM.d.ALPHA_DISABLE), PM.call(this, null, !1, !1, aM, nM, QM, LM, !1), jM._empty || (OM.depthRange(1, 1), PM.call(jM, null, iM, SM, aM, nM, QM, LM, mM, HM), OM.depthRange(0, 1)), PM.call(this, null, iM, SM, aM, !1, !1, !1, mM, HM))
      }, !0
    }

    function gr(MM, rM) {
      return [rM, XM.c].map(((rM, iM) => {
        const OM = new SM.b("light", aM.sh.FromArray(rM), MM);
        return OM.diffuse = jM.Color3.FromArray([1, 1, 1]), OM.specular = jM.Color3.FromArray([1, 1, 1]), OM.intensity = XM.b[iM], OM
      }))
    }
    class ur extends nM.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(MM) {
        var rM;
        this.heldTexture = MM, this.particleTexture = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.mirror) && void 0 !== rM ? rM : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        MM && (this.particleTexture = null, (0, QM.z)(this.heldTexture), this.heldTexture = null), super.dispose(MM, rM, iM)
      }
    }

    function Rr(MM, rM, iM, OM) {
      return rM && !rM.failed ? rM.uZ(iM, OM) : new ur(iM, OM, MM)
    }
    const pr = new WeakMap;

    function Wr(MM, rM, iM) {
      var OM;
      let SM = null !== (OM = pr.get(MM)) && void 0 !== OM ? OM : null;
      return !SM && MM.ph().PJ >= 2 && (SM = new DM(MM, (rM => {
        console.error(`Particle programs failed in scene ${MM.uid}: ${rM}`)
      })), pr.set(MM, SM)), Rr(MM, SM, rM, iM)
    }
    const sr = OM.e.Zero();
    const Dr = {
      uiM: function(MM, rM) {
        return new ZM(MM, rM.biM, {
          preserveDrawingBuffer: rM.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      TOM: function(MM, rM) {
        ! function(MM, rM, iM) {
          const OM = new FM.b(MM.engine);
          MM.YJ = OM, OM.detachControl(), OM.autoClear = !1, vM.b.MIN_RENDERINGGROUPS = -1;
          for (let jM = vM.b.MIN_RENDERINGGROUPS; jM <= 1; jM++) OM.setRenderingOrder(jM, xM.c.PainterSortCompare, xM.c.PainterSortCompare, xM.c.PainterSortCompare);
          OM.setRenderingAutoClearDepthStencil(0, !1), AM.e.Enabled = !1, MM.vOM = new br(MM, Math.round(rM.FOM)), MM.IOM = new NM.e("camHolder", OM), MM.camera = new YM.d("camera", new aM.sh(0, 0, 0), OM), MM.camera.parent = MM.IOM, wr(MM), (0, XM.d)(MM, ((MM, rM, iM) => (0, BM.k)(rM, iM, MM.YJ))), OM.clearColor = jM.d.FromArray(rM.clearColor), OM.ambientColor = jM.Color3.FromArray(rM.ambientColor);
          const SM = iM(OM, rM.qOM);
          OM.onNewLightAddedObservable.add((MM => {
            SM.some((rM => rM === MM)) || console.error(`Light "${MM.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), OM.skipPointerMovePicking = !0
        }(MM, rM, gr), tr(MM.YJ)
      },
      XOM: wr,
      setBabylonFog: function(MM, rM, iM, OM) {
        const SM = MM.YJ;
        SM.fogMode = 3, SM.fogStart = rM, SM.fogEnd = iM, SM.fogColor.set(OM[0], OM[1], OM[2])
      },
      cOM: function(MM, rM, iM) {
        return MM.engine.PJ >= 2 && !MM.MSM && (MM.MSM = new DM(MM.YJ, MM.rSM)), Rr(MM.YJ, MM.MSM, rM, iM)
      },
      OSM: function(MM, rM) {
        MM.YJ.aG.forEach((iM => {
          if (iM instanceof WM) return void iM.rMM(rM, MM.Cm.Am);
          const OM = iM;
          if (OM.emitter.getConnectedParticleSystems)
            for (const MM of OM._particles) MM.position.set(MM.position.x - rM[0], MM.position.y - rM[1], MM.position.z - rM[2]);
          else {
            if (!OM.worldOffset) throw new Error("Particle system has no world offset");
            OM.worldOffset.x = -MM.Cm.Am[0], OM.worldOffset.y = -MM.Cm.Am[1], OM.worldOffset.z = -MM.Cm.Am[2]
          }
        }))
      },
      linesFromArrays: function(MM, rM, iM) {
        const OM = new PM.d(rM, MM.YJ, null, void 0, void 0, !1);
        return (0, BM.h)(rM, iM, MM.YJ, OM), OM
      },
      NJ: Jr,
      iSM: function(MM, rM) {
        return sr.origin.jR(rM.origin), sr.direction.jR(rM.direction), sr.length = rM.length, sr.epsilon = rM.epsilon, sr.iSM(MM, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42233: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => AM,
      i: () => lM,
      m: () => IM
    });
    var OM = iM(41374),
      SM = iM(42241),
      jM = iM(42283),
      aM = iM(42248),
      PM = iM(38797),
      nM = iM(38809),
      QM = iM(38815),
      zM = iM(38822),
      LM = iM(38227),
      mM = iM(38233),
      HM = iM(42256),
      hM = iM(38198),
      JM = iM(38217),
      dM = iM(38188);

    function yM(MM, rM) {
      return Object.assign((function(MM, iM, OM, SM) {
        return rM(this.featureState, MM, iM, OM, SM)
      }), {
        jL: MM
      })
    }

    function lM(MM) {
      const rM = class extends HM.d {
          constructor(rM, iM) {
            const OM = (0, JM.Y)(rM),
              SM = OM && (0, JM.v)(OM, MM.name);
            for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
            super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return MM.className
          }
          isCompatible(MM) {
            return MM === dM.b.GLSL || MM === dM.b.WGSL
          }
        },
        iM = (0, hM.i)(MM);
      for (const [OM, SM] of Object.entries(hM.d)) {
        const jM = MM[OM];
        if (jM) {
          const MM = iM[OM];
          Object.defineProperty(rM.prototype, SM, {
            value: yM(jM, MM),
            writable: !0,
            configurable: !0
          })
        }
      }
      return rM
    }
    class EM extends(lM(PM.b)) {}
    var UM = iM(40931),
      GM = iM(42260),
      CM = iM(42265);

    function eM(MM, rM, iM) {
      return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
        const {
          width: OM
        } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
          var SM;
          const jM = Math.round(MM.getSize().height / OM),
            aM = null === rM || void 0 === rM ? void 0 : rM[iM];
          return {
            pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
            layers: jM
          }
        })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
          let {
            pixels: rM,
            layers: SM
          } = MM;
          return {
            atlas: new GM.e(rM, OM, OM, SM, UM.e.TEXTUREFORMAT_RGBA, iM, !0, !1, aM.c.NEAREST_NEAREST_MIPLINEAR),
            layers: SM
          }
        }));
        return MM.forEach(((MM, rM) => {
          const OM = MM.getInternalTexture();
          bM.has(OM) || (! function(MM, rM) {
            const iM = rM.createRawTexture(new Uint8Array(4), 1, 1, UM.e.TEXTUREFORMAT_RGBA, !1, !1, aM.c.NEAREST_SAMPLINGMODE);
            MM._hardwareTexture.release(), rM.unbindAllTextures(), iM._swapAndDie(MM, !1)
          }(OM, iM.ph()), bM.set(OM, SM[rM].pixels))
        })), PM
      }(MM, rM.pixels, iM)))
    }
    const bM = new WeakMap;
    var wM = iM(38829);
    class tM extends(lM(nM.g)) {
      constructor(MM, rM) {
        super(MM, rM), this.loaded = new Set, this.mirrors = void 0, this.mirrors = rM.textures.map((MM => MM.mirror)), this.mirrors.forEach(((MM, rM) => {
          MM.onLoadObservable.add((MM => {
            this.setTextureArrayData(MM, rM).catch((MM => {
              console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
            }))
          }))
        })), (0, wM.j)(rM, MM.shaderLanguage)
      }
      async setTextureArrayData(MM, rM) {
        const iM = this.featureState,
          {
            width: OM,
            height: SM
          } = MM.getSize(),
          jM = this._material.shaderLanguage;
        if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
        if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
        const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
        (0, wM.c)(this._material, iM, aM, OM, jM)
      }
    }
    var gM = iM(42269),
      uM = iM(41410),
      RM = iM(38034),
      pM = iM(42278),
      WM = iM(41508),
      sM = iM(41400),
      DM = iM(42212),
      kM = iM(38457),
      ZM = iM(42280);
    class oM extends gM.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const fM = {
      Mesh: pM.d,
      TransformNode: DM.e,
      Vz: gM.b,
      VertexBuffer: gM.e,
      BoundingInfo: uM.d,
      sh: RM.sh,
      ArenaBuffer: oM,
      SubMesh: sM.e,
      VertexData: WM.d,
      MirroredGeometry: ZM.d,
      meshFromArrays: ZM.h,
      plainMeshFromArrays: ZM.k
    };
    (0, kM.g)(fM);
    var YM = iM(38298);
    class NM extends(lM(zM.j)) {
      constructor(MM, rM) {
        if (super(MM, rM), MM instanceof OM.StandardMaterial && rM.dirLightCount > 0) {
          const rM = MM,
            iM = rM._blockDirtyMechanism;
          rM._blockDirtyMechanism = !0, MM.disableLighting = !0, rM._blockDirtyMechanism = iM;
          const OM = (0, JM.Y)(MM);
          OM && (OM.disableLighting = !0, (0, JM.W)(OM))
        }(0, YM.k)(MM)
      }
      dispose(MM) {
        (0, YM.m)(this._material), super.dispose(MM)
      }
    }

    function AM(MM, rM) {
      if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
      const {
        r: iM,
        g: SM,
        b: jM
      } = rM.specularColor;
      0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
    }(0, zM.f)({
      disableUnusedSpecularTerm: AM
    });
    var xM = iM(38235),
      vM = iM(38467);
    const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
    class BM extends(lM(QM.g)) {
      constructor(MM, rM) {
        super(MM, rM), this.dh = !1, rM.ditherOnlyWhileFading && (vM.f.add(MM), this.prewarmDitherTwins(MM))
      }
      prewarmDitherTwins(MM) {
        const rM = new WeakSet;
        MM.onEffectCreatedObservable.add((iM => {
          let {
            effect: OM,
            subMesh: SM
          } = iM;
          if (this.featureState.prewarmingDither || rM.has(OM)) return;
          rM.add(OM);
          const jM = null === SM || void 0 === SM ? void 0 : SM.getMesh();
          jM && !FM.test(OM.defines) && MM.Hk().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(jM) || rM.delete(OM)
          }))
        }))
      }
      prewarmDither(MM) {
        if (this.dh || MM.xG()) return !1;
        const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(MM, rM)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== rM.effect
      }
      dispose(MM) {
        this.dh = !0, super.dispose(MM)
      }
    }
    const XM = new Map;

    function IM(MM, rM) {
      XM.set(MM, rM)
    }
    IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
      create: (MM, rM) => {
        const iM = new OM.StandardMaterial(MM.name, rM);
        return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
      },
      write: (MM, rM, iM) => {
        (0, xM.U)(MM.mirror, rM, iM)
      },
      addFeature: (MM, rM, iM) => {
        const OM = XM.get(rM.feature);
        if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
        new OM(MM.mirror, rM.state, ...iM)
      },
      texture: (MM, rM, iM) => {
        let {
          url: OM,
          noMipmap: SM,
          invertY: jM,
          samplingMode: PM,
          data: nM,
          sets: QM
        } = iM;
        if (!nM) {
          const iM = new aM.c(OM, rM, SM, jM, PM);
          return Object.assign(iM, QM), void(0, mM.F)(MM, iM)
        }
        const zM = {},
          LM = new Promise(((MM, rM) => {
            zM.onLoad = MM, zM.onError = (MM, iM) => {
              rM(new Error(`${nM.context}: ${(null===iM||void 0===iM?void 0:iM.message)||MM||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: HM,
            bytes: hM,
            label: JM
          } = nM,
          dM = {
            noMipmap: SM,
            invertY: !1,
            samplingMode: PM,
            ...zM,
            mimeType: HM,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yM = new aM.c(null, rM, dM);
        xM.w.set(yM, LM), Object.assign(yM, QM), yM.updateURL(OM, hM);
        const lM = yM.getInternalTexture();
        lM && (lM.label = JM), MM.uvSet = yM.coordinatesIndex, MM.matrix.set((0, xM.O)(yM)), (0, mM.F)(MM, yM)
      },
      cube: (MM, rM, iM) => {
        let {
          rootUrl: OM,
          files: jM,
          noMipmap: PM,
          luminance: nM
        } = iM;
        const {
          samplingMode: QM
        } = MM.sampler, zM = QM === (0, mM.y)(PM) ? null : () => {
          (0, xM.M)(LM, QM)
        }, LM = new SM.d(OM, rM, null, PM, jM, zM, null, (0, mM.v)(nM));
        LM.coordinatesMode = aM.c.SKYBOX_MODE, (0, mM.F)(MM, LM)
      },
      canvas: (MM, rM, iM) => {
        let {
          width: OM,
          height: SM,
          mipmaps: PM,
          samplingMode: nM,
          hasAlpha: QM = !1,
          wrap: zM = aM.c.CLAMP_ADDRESSMODE
        } = iM;
        const LM = new jM.b(rM, {
          width: OM,
          height: SM
        }, MM, PM, nM);
        LM.hasAlpha = QM, LM.wrapU = zM, LM.wrapV = zM;
        const mM = (0, xM.C)(LM);
        return (0, xM.F)(mM, LM), mM
      }
    })
  },
  42280: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      h: () => LM,
      k: () => mM
    });
    var OM = iM(42269),
      SM = iM(41167),
      jM = iM(41410),
      aM = iM(41512),
      PM = iM(42278),
      nM = iM(41508),
      QM = iM(38347);
    class zM extends aM.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (MM, rM) => {
          this.releaseUnlessInstanced(rM)
        }, this.onLinked = null
      }
      link(MM) {
        var rM;
        (0, QM.j)(MM), this.model = MM, null === (rM = this.onLinked) || void 0 === rM || rM.call(this, MM)
      }
      relink() {
        this.release();
        const MM = [];
        for (const SM of Object.values(this._vertexBuffers))
          if (!SM.getIsInstanced()) {
            const {
              byteOffset: rM,
              byteStride: iM,
              type: OM,
              normalized: jM
            } = SM;
            MM.push({
              kind: SM.getKind(),
              data: SM.getData(),
              offset: rM,
              stride: iM,
              components: SM.getSize(),
              glType: OM,
              isNormalized: jM
            })
          } const rM = this._indices.length ? this._indices : null,
          {
            minimum: iM,
            maximum: OM
          } = this.extend;
        this.link(new QM.e(MM, rM, this.getTotalVertices(), new Float64Array(iM.HOM()), new Float64Array(OM.HOM())))
      }
      copy(MM) {
        if (!this.model) return super.copy(MM);
        const rM = new zM(MM, this.Hk()),
          iM = this.hOM(void 0, !0);
        iM && rM.setIndices(iM);
        let aM = !1;
        for (const jM in this._vertexBuffers) {
          const MM = this._vertexBuffers[jM],
            iM = MM.getData();
          if (!iM) continue;
          const PM = MM.getSize(),
            {
              type: nM,
              byteOffset: QM,
              byteStride: zM,
              normalized: LM
            } = MM;
          aM ||= MM.isUpdatable();
          const mM = MM.getIsInstanced() ? (iM instanceof Array ? 4 * iM.length : iM.byteLength) / zM : this.getTotalVertices(),
            HM = (0, SM.r)(iM, PM, nM, QM, zM, mM, !0),
            hM = {
              updatable: MM.isUpdatable(),
              stride: PM,
              type: nM,
              normalized: LM,
              takeBufferOwnership: !0,
              instanced: MM.getIsInstanced()
            };
          rM.setVerticesBuffer(new OM.e(this.ph(), HM, jM, hM), mM)
        }
        return rM._updatable = aM, rM._boundingInfo = new jM.d(this.extend.minimum, this.extend.maximum), rM.relink(), rM
      }
      static mergeMeshes(MM, rM, iM, OM, SM, jM) {
        const nM = MM[0].Hk(),
          QM = new PM.d(MM[0].name + "_merged", nM),
          LM = new zM(aM.e.RandomId(), nM, void 0, !1, QM);
        try {
          if (!PM.d.MergeMeshes(MM, rM, iM, QM, SM, jM)) return QM.dispose(), null
        } catch (mM) {
          throw QM.dispose(), mM
        }
        return LM.relink(), QM
      }
      removeVerticesData(MM) {
        this.releaseUnlessInstanced(MM), super.removeVerticesData(MM)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(MM) {
        var rM;
        MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, QM.p)(this.model), this.model = null)
      }
    }

    function LM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
      const SM = (0, QM.i)(rM),
        {
          positions: jM,
          normals: LM,
          uvs: mM,
          indices: HM,
          named: hM = {}
        } = rM,
        JM = new nM.d;
      JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
      const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
      for (const {
          kind: aM,
          components: PM
        }
        of SM.vertexAttributes) aM in hM && OM.setVerticesData(aM, hM[aM], !1, PM);
      return dM.link(SM), OM
    }

    function mM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SM = new PM.d(MM, iM),
        {
          positions: jM,
          normals: aM,
          uvs: QM,
          indices: zM
        } = rM;
      return Object.assign(new nM.d, {
        positions: jM,
        normals: aM,
        uvs: QM,
        indices: zM
      }).applyToMesh(SM, OM), SM
    }
  },
  39741: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM,
      g: () => aM,
      k: () => jM,
      o: () => SM,
      p: () => PM,
      s: () => QM,
      v: () => zM,
      z: () => nM
    });
    const OM = 16,
      SM = 256,
      jM = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      aM = 16,
      PM = 256,
      nM = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + OM,
        color2: 12 + 5 * OM,
        dd: 12 + 9 * OM,
        remap: 12 + 13 * OM
      },
      QM = 12 + 17 * OM,
      zM = [nM.colorCount, nM.velocityCount, nM.remapCount, nM.ramp]
  },
  39733: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => dM,
      f: () => EM
    });
    var OM = iM(38074),
      SM = iM(38034),
      jM = iM(38233),
      aM = iM(39741);
    class PM {
      constructor(MM) {
        this.vL = MM, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const rM = Math.max(1, MM);
        this.records = new Float32Array(rM * aM.g), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(rM).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(MM) {
        const rM = this.vL;
        for (let iM = 0; iM < rM; iM++) {
          const iM = this.cursor;
          if (this.cursor = iM + 1 === rM ? 0 : iM + 1, this.deaths[iM] <= MM) return iM
        }
        return -1
      }
      written(MM, rM) {
        this.deaths[MM] = rM, MM >= this.highWater && (this.highWater = MM + 1), this.uploadFrom < 0 ? (this.uploadFrom = MM, this.uploadTo = MM + 1) : MM >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, MM + 1) : this.wrapTo = Math.max(this.wrapTo, MM + 1)
      }
      shiftTimes(MM) {
        const rM = this.records,
          iM = this.highWater * aM.g;
        for (let OM = aM.k.time; OM < iM; OM += aM.g) rM[OM] -= MM;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(MM) {
        this.uploadFrom >= 0 && (MM(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && MM(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(MM) {
        let rM = 0;
        for (let iM = 0; iM < this.highWater; iM++) this.deaths[iM] > MM && rM++;
        return rM
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var nM = iM(38167),
      QM = iM(39748),
      zM = iM(39756),
      LM = iM(39760);
    class mM {
      constructor() {
        this.particleEmitterType = new zM.b, this.texture = null, this.blendMode = LM.g, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = SM.sh.Zero(), this.worldOffset = new SM.sh(0, 0, 0), this.color1 = new nM.d(1, 1, 1, 1), this.color2 = new nM.d(1, 1, 1, 1), this.colorDead = new nM.d(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var MM;
        return null !== (MM = HM(this).direction1) && void 0 !== MM ? MM : SM.sh.Zero()
      }
      set direction1(MM) {
        const rM = HM(this);
        rM.direction1 && (rM.direction1 = MM)
      }
      get direction2() {
        var MM;
        return null !== (MM = HM(this).direction2) && void 0 !== MM ? MM : SM.sh.Zero()
      }
      set direction2(MM) {
        const rM = HM(this);
        rM.direction2 && (rM.direction2 = MM)
      }
      get minEmitBox() {
        var MM;
        return null !== (MM = HM(this).minEmitBox) && void 0 !== MM ? MM : SM.sh.Zero()
      }
      set minEmitBox(MM) {
        const rM = HM(this);
        rM.minEmitBox && (rM.minEmitBox = MM)
      }
      get maxEmitBox() {
        var MM;
        return null !== (MM = HM(this).maxEmitBox) && void 0 !== MM ? MM : SM.sh.Zero()
      }
      set maxEmitBox(MM) {
        const rM = HM(this);
        rM.maxEmitBox && (rM.maxEmitBox = MM)
      }
      createBoxEmitter(MM, rM, iM, OM) {
        const SM = new zM.b;
        return this.particleEmitterType = SM, SM.direction1 = MM, SM.direction2 = rM, SM.minEmitBox = iM, SM.maxEmitBox = OM, SM
      }
      addColorGradient(MM, rM, iM) {
        return this.colorGradients ??= [], this.colorGradients.push(new QM.b(MM, rM, iM)), this.colorGradients.sort(hM), this
      }
      removeColorGradient(MM) {
        return JM(this.colorGradients, MM), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(MM, rM, iM) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new QM.e(MM, rM, iM)), this.velocityGradients.sort(hM), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(MM, rM, iM) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new QM.e(MM, rM, iM)), this.colorRemapGradients.sort(hM), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(MM, rM) {
        return this.rampGradients ??= [], this.rampGradients.push(new QM.c(MM, rM)), this.rampGradients.sort(hM), this
      }
      removeRampGradient(MM) {
        return JM(this.rampGradients, MM), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function HM(MM) {
      return MM.particleEmitterType
    }

    function hM(MM, rM) {
      return MM.gradient < rM.gradient ? -1 : MM.gradient > rM.gradient ? 1 : 0
    }

    function JM(MM, rM) {
      const iM = MM ? MM.findIndex((MM => MM.gradient === rM)) : -1;
      iM >= 0 && MM.splice(iM, 1)
    }
    class dM extends mM {
      constructor(MM, rM, iM) {
        super(), this.name = MM, this.host = iM, this.onDispose = yM, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = SM.sh.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.dh = !1, this.emitterMatrix = new SM.Matrix, this.inverseEmitterMatrix = new SM.Matrix, this.spawned = {
          position: new SM.sh,
          direction: new SM.sh
        }, this.ring = new PM(rM)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(MM) {
        var rM;
        null === (rM = this.emitterDisposed) || void 0 === rM || rM.remove(), this.emitterDisposed = null, this.emitterValue = MM, MM && UM(MM) && (this.emitterDisposed = MM.Rk.add((() => {
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
        return !this.dh && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var MM;
        let rM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.dh || (this.dh = !0, null === (MM = this.emitterDisposed) || void 0 === MM || MM.remove(), this.emitterDisposed = null, rM && ((0, jM.z)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(MM) {
        const rM = this.emitter;
        return !!rM && !(UM(rM) && !rM.isEnabled()) && this.animate(MM)
      }
      animate(MM) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const rM = this.updateSpeed * MM;
        let iM;
        return this.manualEmitCount > -1 ? (iM = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (iM = this.emitRate * rM | 0, this.newPartsExcess += this.emitRate * rM - iM), this.newPartsExcess > 1 && (iM += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (iM = 0), this.alive = this.liveUntil > this.time, this.time += rM, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), iM > 0 && this.spawn(iM), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.dh && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var MM;
        return this.started = !1, null === (MM = this.onAnimationEnd) || void 0 === MM || MM.call(this), !!this.dh || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(MM, rM) {
        MM[rM] = this.anchor[0] + this.shift[0] + this.worldOffset.x, MM[rM + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, MM[rM + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      rMM(MM, rM) {
        this.emitterValue && UM(this.emitterValue) ? (this.shift[0] -= MM[0], this.shift[1] -= MM[1], this.shift[2] -= MM[2]) : this.worldOffset.set(-rM[0], -rM[1], -rM[2])
      }
      spawn(MM) {
        var rM, iM;
        const jM = this.emitterValue,
          PM = UM(jM) ? jM.getWorldMatrix() : SM.Matrix.TranslationToRef(jM.x, jM.y, jM.z, this.emitterMatrix);
        PM.invertToRef(this.inverseEmitterMatrix);
        const {
          position: nM,
          direction: QM
        } = this.spawned, zM = this.spawned, LM = this.ring, mM = this.liveUntil <= this.time;
        mM && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, LM.restart());
        const {
          records: HM,
          recordBits: hM
        } = LM, JM = aM.k, dM = null === (rM = this.getColorGradients()) || void 0 === rM ? void 0 : rM[0], yM = dM ? dM.color1 : this.color1, lM = dM ? null !== (iM = dM.color2) && void 0 !== iM ? iM : dM.color1 : this.color2;
        for (let SM = 0; SM < MM; SM++) {
          const MM = LM.freeSlot(this.time);
          if (MM < 0) break;
          const rM = (0, OM.RandomRange)(this.minLifeTime, this.maxLifeTime),
            iM = (0, OM.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(PM, nM, zM, !1), this.particleEmitterType.startDirectionFunction(PM, QM, zM, !1, this.inverseEmitterMatrix), 0 === iM ? QM.set(0, 0, 0) : QM.scaleInPlace(iM);
          const jM = (0, OM.RandomRange)(this.minSize, this.maxSize);
          mM && 0 === SM && (this.anchor[0] = nM.x, this.anchor[1] = nM.y, this.anchor[2] = nM.z);
          const dM = MM * aM.g;
          HM[dM + JM.position] = nM.x - this.anchor[0] - this.shift[0], HM[dM + JM.position + 1] = nM.y - this.anchor[1] - this.shift[1], HM[dM + JM.position + 2] = nM.z - this.anchor[2] - this.shift[2], HM[dM + JM.time] = this.time - this.epoch, HM[dM + JM.direction] = QM.x, HM[dM + JM.direction + 1] = QM.y, HM[dM + JM.direction + 2] = QM.z, HM[dM + JM.lifeTime] = rM, HM[dM + JM.size] = jM, hM[dM + JM.seed] = 4294967296 * Math.random() >>> 0;
          const EM = Math.random();
          HM[dM + JM.colour] = yM.r + (lM.r - yM.r) * EM, HM[dM + JM.colour + 1] = yM.g + (lM.g - yM.g) * EM, HM[dM + JM.colour + 2] = yM.b + (lM.b - yM.b) * EM, HM[dM + JM.colour + 3] = yM.a + (lM.a - yM.a) * EM;
          const UM = this.time + rM;
          UM > this.liveUntil && (this.liveUntil = UM), LM.written(MM, UM)
        }
      }
    }

    function yM() {}
    const lM = 5;

    function EM(MM, rM) {
      const iM = [];
      let OM = 0;
      for (const SM of MM) SM.isReady() || (OM++, iM.length < lM && iM.push(`${rM} particle system ${SM.name}`));
      return OM > iM.length && iM.push(`${OM-iM.length} more ${rM} particle systems`), iM
    }

    function UM(MM) {
      return void 0 !== MM.position
    }
  },
  44259: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => dM,
      e: () => PM,
      h: () => aM,
      i: () => QM
    });
    var OM = iM(38167),
      SM = iM(39748),
      jM = iM(39741);

    function aM(MM, rM, iM, OM) {
      const SM = jM.z;
      rM.fill(0), MM.gravity.toArray(rM, SM.gravity), MM.colorDead.toArray(rM, SM.colorDead), iM[SM.ramp] = MM.useRampGradients ? 1 : 0;
      const aM = MM.getColorGradients(),
        PM = mM(MM, aM, "colour", OM);
      iM[SM.colorCount] = PM;
      for (let jM = 0; jM < PM; jM++) {
        var nM;
        const MM = aM[HM(aM, jM)];
        rM[SM.colorPositions + jM] = MM.gradient, MM.color1.toArray(rM, SM.color1 + 4 * jM), (null !== (nM = MM.color2) && void 0 !== nM ? nM : MM.color1).toArray(rM, SM.color2 + 4 * jM)
      }
      const QM = MM.getVelocityGradients(),
        zM = mM(MM, QM, "dd", OM);
      iM[SM.velocityCount] = zM;
      for (let jM = 0; jM < zM; jM++) lM(rM, SM.dd + 4 * jM, QM[HM(QM, jM)]);
      const LM = MM.useRampGradients ? MM.getColorRemapGradients() : null,
        hM = mM(MM, LM, "colour remap", OM);
      iM[SM.remapCount] = hM;
      for (let jM = 0; jM < hM; jM++) lM(rM, SM.remap + 4 * jM, LM[HM(LM, jM)])
    }

    function PM() {
      return {
        key: [],
        texels: new Uint8Array(4 * jM.o)
      }
    }
    const nM = [];

    function QM(MM, rM) {
      return zM(MM, nM), !yM(nM, rM.key) && (rM.key.length = 0, rM.key.push(...nM), rM.key.length > 0 && function(MM, rM) {
        for (let iM = 0; iM < jM.o; iM++) SM.i.GetCurrentGradient(iM / jM.o, MM, ((MM, rM, iM) => {
          OM.Color3.LerpToRef(MM.color, rM.color, iM, LM)
        })), rM[4 * iM] = 255 * LM.r, rM[4 * iM + 1] = 255 * LM.g, rM[4 * iM + 2] = 255 * LM.b, rM[4 * iM + 3] = 255
      }(MM.getRampGradients(), rM.texels), !0)
    }

    function zM(MM, rM) {
      rM.length = 0;
      const iM = MM.useRampGradients ? MM.getRampGradients() : null;
      if (null !== iM && void 0 !== iM && iM.length) {
        rM.push(iM.length);
        for (const MM of iM) rM.push(MM.gradient, MM.color.r, MM.color.g, MM.color.b)
      }
    }
    const LM = new OM.Color3;

    function mM(MM, rM, iM, OM) {
      return rM ? rM.length > jM.d ? (OM(`particleStops:${iM}`, `GPU particles use the first 2 and last ${jM.d-2} of more than ${jM.d} ${iM} gradient stops (${MM.name})`), jM.d) : rM.length : 0
    }

    function HM(MM, rM) {
      return rM < 2 || MM.length <= jM.d ? rM : MM.length - jM.d + rM
    }
    const hM = new Float32Array(jM.s),
      JM = new Uint32Array(hM.buffer);

    function dM(MM, rM, iM) {
      return aM(MM, hM, JM, iM), rM && yM(JM, rM) ? null : JM.slice()
    }

    function yM(MM, rM) {
      if (MM.length !== rM.length) return !1;
      for (let iM = 0; iM < MM.length; iM++)
        if (MM[iM] !== rM[iM]) return !1;
      return !0
    }

    function lM(MM, rM, iM) {
      var OM;
      MM[rM] = iM.gradient, MM[rM + 1] = iM.factor1, MM[rM + 2] = null !== (OM = iM.factor2) && void 0 !== OM ? OM : iM.factor1
    }
  },
  42265: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      const OM = rM * rM * 4,
        SM = MM[0].layers,
        jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
        aM = new Uint8Array(jM * OM);
      MM.forEach(((rM, iM) => {
        const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
        aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
      }));
      const PM = Math.max(1, Math.min(jM, iM || jM));
      if (PM === jM) return [{
        pixels: aM,
        layers: jM
      }];
      const nM = [];
      for (let QM = 0; QM < jM; QM += PM) {
        const MM = Math.min(jM, QM + PM);
        nM.push({
          pixels: aM.slice(QM * OM, MM * OM),
          layers: MM - QM
        })
      }
      return nM
    }
    iM.d(rM, {
      c: () => OM,
      f: () => jM
    });
    const SM = new WeakMap;

    function jM(MM, rM, iM) {
      var OM, jM;
      const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
      SM.set(MM, aM);
      const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
      aM.set(rM[0], PM);
      const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
      if (nM) return nM.built;
      const QM = {
        urls: [...rM],
        built: iM()
      };
      return PM.push(QM), QM.built.catch((() => {
        PM.splice(PM.indexOf(QM), 1)
      })), QM.built
    }
  },
  39760: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      g: () => SM,
      i: () => nM,
      k: () => LM
    });
    var OM = iM(38158);
    const SM = 0,
      jM = 3,
      aM = 4,
      PM = new Map([
        [SM, OM.c.ALPHA_ONEONE],
        [1, OM.c.ALPHA_COMBINE],
        [2, OM.c.ALPHA_ADD],
        [jM, OM.c.ALPHA_MULTIPLY],
        [-1, OM.c.ALPHA_SUBTRACT]
      ]);

    function nM(MM) {
      var rM;
      return null !== (rM = PM.get(MM)) && void 0 !== rM ? rM : MM
    }
    const QM = [jM, 2],
      zM = new Map;

    function LM(MM) {
      if (MM === aM) return QM;
      let rM = zM.get(MM);
      return rM || (rM = [MM], zM.set(MM, rM)), rM
    }
  },
  44250: (MM, rM, iM) => {
    function OM() {
      let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const rM = new Set;
      return (iM, OM) => {
        rM.has(iM) || (rM.add(iM), console.warn(MM + OM))
      }
    }
    iM.d(rM, {
      b: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);