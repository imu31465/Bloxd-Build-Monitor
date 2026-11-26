export const id = 0;
export const ids = [0];
export const modules = {
  42450: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CapeMaterialPlugin: () => tV,
      HueTintMaterialPlugin: () => FV,
      LifeformMaterialPlugin: () => TV,
      OverlayMaterialPlugin: () => PV
    });
    var JV = xV(42457),
      YV = xV(39173);
    class UV extends((0, JV.h)(YV.b)) {}(0, JV.l)(YV.b, UV);
    var yV = xV(38479);
    class pV extends((0, JV.h)(yV.d)) {}(0, JV.l)(yV.d, pV);
    var QV = xV(39003);
    class nV extends((0, JV.h)(QV.g)) {}(0, JV.l)(QV.g, nV);
    var wV = xV(38502),
      ZV = xV(41524),
      vV = xV(38497);
    class rV extends((0, JV.h)(vV.g)) {
      constructor(VV, eV, xV) {
        super(VV, eV, xV), (0, wV.g)(VV)
      }
      dispose(VV) {
        (0, wV.h)(this._material), super.dispose(VV)
      }
    }(0, JV.l)(vV.g, rV), (0, vV.k)({
      disableUnusedSpecularTerm: JV.e,
      isLightingDisabled: VV => VV instanceof ZV.StandardMaterial && VV.disableLighting
    });
    var kV = xV(39880);
    class bV extends((0, JV.h)(kV.g)) {}(0, JV.l)(kV.g, bV);
    var EV = xV(39984),
      BV = xV(38395),
      jV = xV(39277),
      qV = xV(38493);
    class tV extends((0, JV.h)(EV.b)) {}(0, JV.l)(EV.b, tV);
    class FV extends((0, JV.h)(BV.e)) {}(0, JV.l)(BV.e, FV);
    class TV extends((0, JV.h)(jV.q)) {}(0, JV.l)(jV.q, TV);
    class PV extends((0, JV.h)(qV.e)) {}(0, JV.l)(qV.e, PV)
  },
  44455: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      addBabylonLights: () => Me,
      createSceneParticleSystem: () => Re,
      default: () => De
    });
    var JV = xV(44458),
      YV = (xV(41234), xV(42445), xV(41744), xV(44465)),
      UV = xV(38387),
      yV = xV(38263),
      pV = xV(44474),
      QV = xV(44476),
      nV = xV(38437),
      wV = (xV(42457), xV(44486)),
      ZV = xV(44480),
      vV = xV(39910),
      rV = xV(44490),
      kV = xV(41108),
      bV = xV(39892);
    const EV = "gpuParticles",
      BV = "gpuParticlesSummed",
      jV = bV.r,
      qV = VV => VV / 4,
      tV = (VV, eV, xV, JV) => Array.from({
        length: eV
      }, ((YV, UV) => `(${((VV,eV,xV)=>0===eV?`${VV} < 1`:eV===xV-1?`${VV} >= ${eV}`:`${VV} == ${eV}`)(VV,UV,eV)} ? ${xV(UV)} : ${JV})`)).join("\n\t\t+ "),
      FV = (VV, eV, xV) => `vec4 ${VV}(int i) {\n\treturn ${tV("i",xV,(VV=>`gpuParticleSystem[${eV+VV}]`),"vec4(0.0)")};\n}\n`,
      TV = `\n${FV("colorPositionsAt",qV(jV.colorPositions),bV.e/4)}\n${FV("color1At",qV(jV.color1),bV.e)}\n${FV("color2At",qV(jV.color2),bV.e)}\n${FV("velocityAt",qV(jV.ME),bV.e)}\n${FV("remapStopAt",qV(jV.remap),bV.e)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${tV("j",4,(VV=>`v[${VV}]`),"0.0")};\n}\n`,
      PV = (VV, eV, xV, JV) => VV ? `${xV}(${JV})` : `gpuParticleSystem[${eV} + ${JV}]`,
      AV = VV => `gpuParticleSystem[${VV>>2}].${"xyzw"[3&VV]}`,
      NV = VV => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${bV.e}\n#define COLOR_POSITIONS ${qV(jV.colorPositions)}\n#define COLOR1 ${qV(jV.color1)}\n#define COLOR2 ${qV(jV.color2)}\n#define VELOCITY ${qV(jV.ME)}\n#define REMAP ${qV(jV.remap)}\n#define RECORDS_PER_ROW ${bV.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${bV.p/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${AV(jV.gravity)}, ${AV(jV.gravity+1)}, ${AV(jV.gravity+2)}); }\nint colorCount() { return int(${AV(jV.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${qV(jV.colorDead)}]; }\nint velocityCount() { return int(${AV(jV.velocityCount)}); }\nint remapCount() { return int(${AV(jV.remapCount)}); }\n${VV?TV:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${VV?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${PV(VV,"COLOR1","color1At","i")}, ${PV(VV,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${PV(VV,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${PV(VV,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${PV(VV,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${PV(VV,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${PV(VV,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${PV(VV,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${PV(VV,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      XV = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    kV.d.ShadersStore[`${EV}VertexShader`] = NV(!1), kV.d.ShadersStore[`${EV}PixelShader`] = XV, kV.d.ShadersStore[`${BV}VertexShader`] = NV(!0), kV.d.ShadersStore[`${BV}PixelShader`] = XV;
    const MV = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      zV = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var GV = xV(39890),
      WV = xV(44494);
    class RV extends GV.d {
      constructor(VV, eV, xV, JV) {
        super(VV, eV, xV), this.renderer = xV, this.yE = JV, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(bV.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, WV.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (VV, eV) => {
          const {
            engine: xV
          } = this, JV = xV._gl;
          xV._bindTextureDirectly(JV.TEXTURE_2D, this.records, !0), xV._unpackFlipY(!1);
          const YV = this.ring.recordBits;
          for (let UV = VV; UV < eV;) {
            const VV = Math.floor(UV / bV.l),
              xV = Math.min(eV, (VV + 1) * bV.l);
            JV.texSubImage2D(JV.TEXTURE_2D, 0, UV % bV.l * 4, VV, 4 * (xV - UV), 1, JV.RGBA_INTEGER, JV.UNSIGNED_INT, YV, UV * bV.f), UV = xV
          }
          xV._bindTextureDirectly(JV.TEXTURE_2D, null)
        }, this.id = VV;
        const YV = JV.sk();
        this.engine = YV;
        const UV = Math.max(1, eV),
          yV = Math.min(UV, bV.l);
        this.records = YV.createRawTexture(null, 4 * yV, Math.ceil(UV / yV), wV.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, wV.c.TEXTURE_NEAREST_SAMPLINGMODE, null, wV.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.yE.getAnimationRatio() || 1;
        const eV = this.yE.getFrameId();
        if (eV === this.animatedFrame) return !1;
        const xV = super.animate(VV);
        return xV && (this.animatedFrame = eV, this.ring.takeUploads(this.uploadSlots)), xV
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(VV) {
        (0, WV.g)(this, this.uniforms, this.uniformBits, VV);
        for (const xV of bV.q) this.uniforms[xV] = this.uniformBits[xV];
        var eV;
        (0, WV.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (eV = this.ramp) || void 0 === eV || eV.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = ZV.e.CreateRGBATexture(this.rampTexels.texels, bV.j, 1, this.yE, !1, !1, wV.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var VV;
        this.records.dispose(), null === (VV = this.ramp) || void 0 === VV || VV.dispose(), this.ramp = null
      }
    }
    const gV = "the context was lost before the programs linked";
    class DV {
      constructor(VV, eV) {
        this.yE = VV, this.reportFailure = eV, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = EV, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, rV.b)(), this.engine = VV.sk(), this.whiteRamp = ZV.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, VV, !1, !1, wV.c.TEXTURE_NEAREST_SAMPLINGMODE);
        const xV = this.linkPair(EV),
          JV = null !== xV && xV !== gV ? this.linkPair(BV) : xV;
        null === JV && null !== xV ? (console.warn(`GPU particles link their fallback here: ${xV}`), this.reportFailure(xV, !0)) : null !== JV && this.fail(JV === gV ? gV : null !== xV && void 0 !== xV ? xV : JV)
      }
      fC(VV, eV) {
        const xV = bV.l * this.engine.getCaps().maxTextureSize;
        eV > xV && this.warnOnce(`capacity:${VV}`, `particle system ${VV} holds ${xV} particles, not ${eV}: its records texture's limit`);
        const JV = new RV(VV, Math.min(eV, xV), this, this.yE);
        return this.yE.addParticleSystem(JV), JV
      }
      canDraw(VV) {
        var eV, xV;
        if (this.failed || null === (eV = VV.texture) || void 0 === eV || null === (xV = eV.mirror) || void 0 === xV || !xV.isReady()) return !1;
        for (const JV of (0, vV.l)(VV.blendMode))
          if (!this.effectFor(JV).isReady()) return !1;
        return !0
      }
      disposeStopped(VV) {
        this.yE._toBeDisposed.push(VV)
      }
      remove(VV) {
        this.yE.removeParticleSystem(VV), VV.releaseGl()
      }
      render(VV) {
        var eV;
        if (!VV.isReady() || !VV.hasLiveParticles()) return 0;
        const {
          engine: xV,
          yE: JV,
          frame: YV
        } = this;
        VV.prepareDraw(this.warnOnce), VV.drawOffset(YV, 0), YV[3] = VV.drawTime();
        const UV = VV.ring.drawStart(),
          yV = VV.ring.drawCount(),
          pV = null !== (eV = VV.ramp) && void 0 !== eV ? eV : this.whiteRamp;
        xV.setState(!1);
        for (const QV of (0, vV.l)(VV.blendMode)) {
          const eV = this.effectFor(QV);
          xV.enableEffect(eV), eV.setTexture("gpuParticleTexture", VV.texture.mirror), eV.setTexture("gpuParticleRampTexture", pV), eV._bindTexture("gpuParticleRecords", VV.records), eV.setMatrix("gpuParticleView", JV.getViewMatrix()), eV.setMatrix("gpuParticleProjection", JV.getProjectionMatrix()), eV.setFloatArray4("gpuParticleSystem", VV.uniforms), eV.setFloat4("gpuParticleFrame", YV[0], YV[1], YV[2], YV[3]), eV.setFloat2("gpuParticleRange", UV, yV), eV.setFloat("gpuParticleRamp", VV.uniforms[bV.r.ramp]), xV.bindBuffers(this.vertexBuffers, null, eV), xV.setAlphaMode((0, vV.i)(QV)), xV.drawArraysType(wV.c.MATERIAL_TriangleStripDrawMode, 0, 4, yV), eV._bindTexture("gpuParticleRecords", null)
        }
        return xV.setAlphaMode(wV.c.ALPHA_DISABLE), yV
      }
      linkPair(VV) {
        this.shader = VV, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(VV, ""), this.multiplyEffect = this.createEffect(VV, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(VV) {
        const eV = VV.getPipelineContext(),
          xV = this.gl();
        xV && null === this.pairFailure && (!eV || eV.isParallelCompiled && !eV.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : eV.isParallelCompiled && eV.program && (xV.getProgramParameter(eV.program, xV.LINK_STATUS) || this.programFailed(function(VV, eV, xV) {
          if (VV.isContextLost()) return gV;
          for (const [JV, YV] of [
              ["VERTEX SHADER", eV.vertexShader],
              ["FRAGMENT SHADER", eV.fragmentShader]
            ]) {
            const eV = YV && !VV.getShaderParameter(YV, VV.COMPILE_STATUS) ? VV.getShaderInfoLog(YV) : null;
            if (eV) return `${JV} ${eV}`
          }
          return VV.getProgramInfoLog(xV) || "a program did not link"
        }(xV, eV, eV.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(VV) {
        return VV === vV.e ? this.multiplyEffect : this.effect
      }
      createEffect(VV, eV) {
        return this.engine.createEffect(VV, [], MV, zV, eV, void 0, void 0, ((eV, xV) => {
          var JV;
          VV === this.shader && this.programFailed(null !== (JV = this.gl()) && void 0 !== JV && JV.isContextLost() ? gV : function(VV) {
            const eV = VV.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(eV) ? "a program failed, its log not in this browser's stack" : eV.replace(/^Error: /, "")
          }(xV))
        }))
      }
      programFailed(VV) {
        this.linkingPair ? this.pairFailure ??= VV : this.fail(VV)
      }
      fail(VV) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${VV}`), this.reportFailure(VV, !1);
          for (const VV of this.yE.lT.slice()) VV instanceof RV && VV.disposeOnStop && VV.dispose()
        }
      }
    }
    var iV = xV(41071);
    class CV extends iV.c {
      createEffect() {
        const VV = super.createEffect(...arguments);
        return oV(VV), aV.has(VV) || (aV.add(VV), VV.onCompileObservable.add((() => {
          oV(VV)
        }))), VV
      }
    }
    const aV = new WeakSet;

    function oV(VV) {
      VV._vertexSourceCodeBeforeMigration = "", VV._fragmentSourceCodeBeforeMigration = ""
    }
    var cV = xV(41466),
      hV = xV(42439),
      lV = xV(41204),
      LV = xV(41420),
      fV = xV(41413),
      mV = xV(41331),
      KV = xV(42506),
      HV = xV(38688),
      uV = xV(44497),
      sV = xV(44503),
      SV = xV(44509),
      IV = xV(41353),
      dV = xV(3185),
      OV = xV(38556),
      Ve = xV(41572),
      ee = xV(38647),
      xe = xV(38589);

    function Je(VV) {
      if (VV.visibility < 1 || !VV.isVisible || !VV.isEnabled() || VV.metadata[xe.g] || !VV.isReady()) return !0;
      const eV = VV.hT;
      if (!eV || 0 === eV.length) return !0;
      for (let xV = 0; xV < eV.length; xV++) {
        const JV = eV[xV],
          YV = JV.eb();
        if (!YV || !YV.isReadyForSubMesh(VV, JV, !1)) return !0
      }
      return !1
    }
    class Ye {
      constructor(VV, eV) {
        this.iv = VV, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, eV.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      NZ(VV) {
        var eV;
        const xV = this.armed;
        if (this.armed = !1, this.vis = null, !xV) return !1;
        this.culled = 0;
        const {
          iv: JV
        } = this, YV = null === (eV = JV.wT) || void 0 === eV ? void 0 : eV.visibility;
        if (!YV || !VV || JV.gZ.jb) return !1;
        if (!(JV.cZ.cYV[0] >= ee.g)) return !1;
        const UV = VV.getProjectionMatrix().m;
        if (0 !== UV[15]) return !1;
        const yV = JV.Vr,
          pV = VV.globalPosition,
          QV = this.eye;
        return QV[0] = pV.x + yV[0], QV[1] = pV.y + yV[1], QV[2] = pV.z + yV[2], !!YV.eyeClear(QV[0], QV[1], QV[2], VV.minZ, UV, JV.cZ) && (this.vis = YV, this.passable.clear(), this.count = 0, !0)
      }
      see(VV, eV) {
        const xV = this.count++;
        if (xV === this.cellSlots.length) {
          const VV = new Int32Array(2 * xV);
          VV.set(this.cellSlots), this.cellSlots = VV
        }
        this.cellSlots[xV] = eV, this.meshes[xV] = VV
      }
      seeThrough(VV) {
        this.passable.add(VV)
      }
      finish(VV, eV) {
        const {
          vis: xV,
          eye: JV,
          meshes: YV,
          count: UV,
          cellSlots: yV
        } = this, {
          cZ: pV
        } = this.iv, [QV, nV] = pV.cYV, wV = null !== xV && xV.update(JV[0], JV[1], JV[2], pV.AZ, QV, nV, this.passable);
        let ZV = 0;
        for (let vV = 0; vV < UV; vV++) {
          const JV = YV[vV];
          if (wV) {
            const VV = 3 * yV[vV];
            if (VV >= 0 && !xV.isDrawn(eV[VV], eV[VV + 1], eV[VV + 2])) {
              ZV++;
              continue
            }
          }
          IV.f.prototype.push.call(VV, JV)
        }
        YV.fill(null, 0, UV), this.count = 0, this.vis = null, this.culled = ZV
      }
    }
    var Ue = xV(38630),
      ye = xV(38573),
      pe = xV(41553),
      Qe = xV(44511),
      ne = xV(41559),
      we = xV(41486);
    let Ze = 1;
    const ve = new WeakSet;

    function re() {
      return Ze
    }

    function ke() {
      Ze = Ze >= 1073741823 ? 1 : Ze + 1
    }

    function be(VV) {
      const eV = VV.metadata;
      if (!eV || !0 !== eV[OV.s]) return;
      const xV = eV[OV.w],
        JV = null === xV || void 0 === xV ? void 0 : xV._noaStamps;
      if (!xV || !JV) return;
      const YV = xV.entries.indexOf(VV);
      YV >= 0 && (JV[YV] = 0)
    }

    function Ee(VV) {
      const eV = VV.hT;
      for (let xV = 0; xV < eV.length; xV++) {
        const VV = eV[xV].eb();
        if (VV && !VV.isFrozen) return !1
      }
      for (let xV = 0; xV < eV.length; xV++) {
        const VV = eV[xV].eb();
        VV && ve.add(VV)
      }
      return !0
    }
    let Be = !1;
    const je = new WeakSet;

    function qe(VV, eV) {
      const xV = VV[eV];
      if ("function" !== typeof xV) throw new Error(`terrainDrawState: Babylon has no ${eV} to hook`);
      return xV
    }

    function te(VV, eV, xV, JV, YV) {
      const UV = xV.cZ.AZ,
        yV = new Map;
      let pV = 0;
      const QV = new Ye(xV, VV),
        nV = new Ue.e(UV, VV.sk());
      ! function(VV) {
        if (je.has(VV) || (je.add(VV), VV.onContextLostObservable.add(ke), VV.uk.add(ke)), Be) return;
        Be = !0;
        const eV = Qe.e.prototype,
          xV = qe(eV, "_markSubMeshesAsDirty");
        Object.assign(eV, {
          _markSubMeshesAsDirty(VV) {
            xV.call(this, VV), be(this)
          }
        });
        const JV = qe(we.e.prototype, "_syncParentEnabledState");
        Object.assign(we.e.prototype, {
          _syncParentEnabledState() {
            JV.call(this), be(this)
          }
        });
        const YV = qe(ne.c.prototype, "resetDrawCache");
        ne.c.prototype.resetDrawCache = function(VV, eV) {
          YV.call(this, VV, eV), be(this.getMesh())
        };
        const UV = pe.e.prototype,
          yV = qe(UV, "markDirty");
        UV.markDirty = function(VV) {
          yV.call(this, VV), ve.has(this) && ke()
        };
        const pV = qe(UV, "_markAllSubMeshesAsDirty");
        Object.assign(UV, {
          _markAllSubMeshesAsDirty(VV) {
            pV.call(this, VV), ve.has(this) && ke()
          }
        })
      }(VV.sk());
      let wV = new Float64Array(384),
        ZV = new Int32Array(64),
        vV = new Uint8Array(64),
        rV = new Float64Array(64),
        kV = new Int32Array(192),
        bV = 0;
      const EV = [],
        BV = new Float64Array(24),
        jV = () => {
          const VV = EV.pop();
          return void 0 !== VV ? (ZV[VV] = 0, VV) : (bV === ZV.length && (wV = Fe(wV, new Float64Array(2 * wV.length)), ZV = Fe(ZV, new Int32Array(2 * ZV.length)), vV = Fe(vV, new Uint8Array(2 * vV.length)), rV = Fe(rV, new Float64Array(2 * rV.length)), kV = Fe(kV, new Int32Array(2 * kV.length))), bV++)
        },
        qV = VV => {
          const eV = 6 * VV._noaSlot,
            xV = VV.HYV[0],
            JV = VV.HYV[1];
          wV[eV] = xV.x, wV[eV + 1] = xV.y, wV[eV + 2] = xV.z, wV[eV + 3] = JV.x, wV[eV + 4] = JV.y, wV[eV + 5] = JV.z
        },
        tV = (VV, eV, xV) => {
          if (!xV) return QV.see(VV, -1), !1;
          const JV = Je(VV);
          return JV && QV.seeThrough(rV[eV]), QV.see(VV, eV), !JV
        };
      let FV = -1;
      return VV.getActiveMeshCandidates = () => {
        const xV = VV.frustumPlanes,
          JV = eV._selectionContent;
        JV.reset(), (xV => {
          const JV = VV.frustumPlanes;
          pV = pV + 1 | 0 || 1;
          const YV = eV.blocks,
            UV = QV.NZ(VV.activeCamera),
            yV = UV && !0;
          if (yV) {
            const eV = VV.sk().currentRenderPassId;
            eV !== FV && (FV = eV, ke())
          }
          const nV = re(),
            rV = yV && !1;
          YV.length > 0 && function(VV, eV) {
            for (let xV = 0; xV < 6; xV++) {
              const JV = VV[xV],
                YV = JV.normal;
              eV[4 * xV] = YV.x, eV[4 * xV + 1] = YV.y, eV[4 * xV + 2] = YV.z, eV[4 * xV + 3] = JV.d
            }
          }(JV, BV);
          const bV = wV,
            EV = ZV,
            jV = vV;
          for (let VV = 0; VV < YV.length; VV++) {
            const eV = YV[VV];
            if (!Ve.d.IsInFrustum(eV.HYV, JV)) continue;
            const wV = eV.entries;
            {
              const VV = eV._noaSlots,
                JV = eV._noaStamps,
                YV = eV._noaTerrain;
              for (let eV = 0; eV < wV.length; eV++) {
                const ZV = VV[eV];
                if (EV[ZV] !== pV && (EV[ZV] = pV, jV[ZV] = Te(bV, 6 * ZV, BV) ? 1 : 0), 0 === jV[ZV]) continue;
                const vV = wV[eV];
                if (yV && JV[eV] === nV) rV && 1 === YV[eV] && Je(vV) && 0, QV.see(vV, 1 === YV[eV] ? ZV : -1);
                else if (yV) {
                  JV[eV] = nV;
                  const VV = !0 === vV.metadata[ye.k];
                  YV[eV] = VV ? 1 : 0;
                  const xV = tV(vV, ZV, VV);
                  !VV || xV && Ee(vV) || (JV[eV] = 0)
                } else UV ? tV(vV, ZV, !0 === vV.metadata[ye.k]) : IV.f.prototype.push.call(xV, vV)
              }
              continue
            }
          }
          UV && QV.finish(xV, kV)
        })(JV), nV.apply(JV, VV.activeCamera);
        const UV = eV.KYV;
        for (let VV = 0; VV < UV.length; VV++) {
          const eV = UV[VV];
          eV.isEnabled() && IV.f.prototype.push.call(JV, eV)
        }
        return YV(JV, xV), JV
      }, {
        uYV: () => QV.culled,
        gYV: (VV, eV) => {
          const YV = Math.floor(eV[0] / UV),
            pV = Math.floor(eV[1] / UV),
            QV = Math.floor(eV[2] / UV),
            nV = `${YV}|${pV}|${QV}`;
          let wV = yV.get(nV);
          if (!wV) {
            const VV = [0, 0, 0];
            xV.oxV([YV * UV - 1, pV * UV - 1, QV * UV - 1], null, VV), wV = Object.assign(JV(VV, UV + 2), {
              sYV: nV,
              SYV: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: jV()
            }), qV(wV), rV[wV._noaSlot] = (0, dV.g)(YV, pV, QV), kV[3 * wV._noaSlot] = YV, kV[3 * wV._noaSlot + 1] = pV, kV[3 * wV._noaSlot + 2] = QV, yV.set(nV, wV)
          }
          wV.SYV++, VV.metadata[OV.x] = wV
        },
        rC: VV => {
          const eV = VV.metadata[OV.x];
          eV && (eV.SYV--, eV.SYV <= 0 && (yV.delete(eV.sYV), EV.push(eV._noaSlot)), VV.metadata[OV.x] = null)
        },
        mYV: (VV, eV) => {
          const xV = VV,
            JV = eV.metadata[OV.x];
          (xV._noaSlots ??= []).push(JV._noaSlot), (xV._noaStamps ??= []).push(0), (xV._noaTerrain ??= []).push(0), xV.entries.push(eV)
        },
        removeEntry: (VV, eV) => {
          const xV = VV,
            JV = xV.entries,
            YV = JV.indexOf(eV);
          if (YV < 0) return;
          const UV = xV._noaSlots,
            yV = xV._noaStamps,
            pV = xV._noaTerrain,
            QV = JV.length - 1;
          JV[YV] = JV[QV], UV[YV] = UV[QV], yV[YV] = yV[QV], pV[YV] = pV[QV], JV.pop(), UV.pop(), yV.pop(), pV.pop()
        },
        teV: VV => {
          for (const eV of yV.values()) {
            eV.oYV.IYV(VV), eV.aYV.IYV(VV);
            for (const xV of eV.HYV) xV.IYV(VV);
            qV(eV)
          }
        }
      }
    }

    function Fe(VV, eV) {
      return eV.set(VV), eV
    }

    function Te(VV, eV, xV) {
      const JV = VV[eV],
        YV = VV[eV + 1],
        UV = VV[eV + 2],
        yV = VV[eV + 3],
        pV = VV[eV + 4],
        QV = VV[eV + 5];
      for (let nV = 0; nV < 24; nV += 4) {
        const VV = xV[nV],
          eV = xV[nV + 1],
          wV = xV[nV + 2];
        if (!(VV * (VV >= 0 ? yV : JV) + eV * (eV >= 0 ? pV : YV) + wV * (wV >= 0 ? QV : UV) + xV[nV + 3] >= 0)) return !1
      }
      return !0
    }
    var Pe = xV(38919);
    class Ae {
      constructor(VV, eV) {
        var xV = VV.yE;
        xV.jYV(new SV.c(xV));
        var JV = new uV.d(QV);
        xV.OYV = JV, JV.blocks = [];
        var YV, UV = {},
          pV = [];
        this.textPlanes = pV, this.uYV = () => YV.uYV(), this.teV = VV => {
          wV(JV, VV), YV.teV(VV)
        }, this.gYV = (eV, xV, yV) => {
          if (!eV.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!eV.metadata[OV.w] && !eV.metadata[OV.r]) {
            if (!xV) {
              var QV = JV.KYV;
              if (eV.metadata[OV.C] && !eV.parent) {
                QV = pV;
                var wV = eV.qL().xUV;
                eV.metadata[OV.E] = wV.center.length() + wV.radius, eV.Sk = !0
              }
              return QV.push(eV), eV.metadata[OV.j] = QV, void(eV.metadata[OV.r] = !0)
            }
            var vV = Math.floor(yV[0] / nV),
              rV = Math.floor(yV[1] / nV),
              kV = Math.floor(yV[2] / nV),
              bV = vV + "|" + rV + "|" + kV,
              EV = UV[bV];
            if (!EV) {
              var BV = [vV * nV, rV * nV, kV * nV],
                jV = [0, 0, 0];
              VV.iv.oxV(BV, null, jV), EV = ZV(jV, nV), JV.blocks.push(EV), UV[bV] = EV, EV.sYV = bV
            }
            YV.gYV(eV, yV), YV.mYV(EV, eV), EV.SYV = (EV.SYV || 0) + 1, eV.metadata[OV.w] = EV, eV.metadata[OV.s] = !0, eV.Sk = !0
          }
        }, this.rC = VV => {
          if (VV.metadata) {
            VV.metadata[OV.r] && ((0, dV.m)(VV.metadata[OV.j], VV), VV.metadata[OV.r] = !1), VV.metadata[OV.j] === pV && (VV.Sk = !1), VV.metadata[OV.j] = void 0, VV.metadata[OV.E] = void 0;
            var eV = VV.metadata[OV.w];
            eV && eV.entries && (VV.metadata[OV.s] && YV.removeEntry(eV, VV), eV.SYV--, eV.SYV <= 0 && (delete UV[eV.sYV], (0, dV.m)(JV.blocks, eV))), YV.rC(VV), VV.metadata[OV.w] = null, VV.metadata[OV.s] = !1
          }
        }, this.xeV = function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (VV.metadata[OV.w]) {
            if (VV.metadata[OV.s] === eV) return;
            var xV = VV.metadata[OV.w];
            xV && xV.entries && (eV ? YV.mYV(xV, VV) : YV.removeEntry(xV, VV)), VV.metadata[OV.s] = eV
          } else {
            if (VV.metadata[OV.r] === eV) return;
            var UV = VV.metadata[OV.j] || JV.KYV;
            eV ? UV.push(VV) : (0, dV.m)(UV, VV), VV.metadata[OV.r] = eV
          }
        };
        var QV = () => {},
          nV = eV * VV.iv.cZ.AZ,
          wV = (VV, eV) => {
            VV.blocks.forEach((VV => {
              VV.oYV.IYV(eV), VV.aYV.IYV(eV), VV.HYV.forEach((VV => VV.IYV(eV))), VV.blocks && wV(VV, eV)
            }))
          },
          ZV = (VV, eV) => {
            var xV = new yV.Ik(VV[0], VV[1], VV[2]),
              JV = new yV.Ik(VV[0] + eV, VV[1] + eV, VV[2] + eV);
            return new sV.c(xV, JV, void 0, void 0, void 0, QV)
          };
        YV = te(xV, JV, VV.iv, ZV, ((VV, eV) => {
          for (var xV = 0; xV < pV.length; xV++) {
            var JV = pV[xV];
            JV.isEnabled(!1) && ((0, Pe.d)(JV, eV) && IV.f.prototype.push.call(VV, JV))
          }
        }))
      }
    }

    function Ne(VV) {
      const {
        holderPosition: eV,
        holderRotation: xV,
        I9: JV,
        fov: YV,
        near: UV,
        far: yV
      } = VV.model.K9, pV = VV.wUV;
      pV.position.FeV(eV[0], eV[1], eV[2]), pV.rotation.FeV(xV[0], xV[1], xV[2]);
      const QV = VV.camera;
      QV.position.FeV(JV[0], JV[1], JV[2]), QV.fov = YV, QV.minZ = UV, QV.maxZ = yV
    }

    function Xe(VV) {
      const eV = VV.sk(),
        xV = eV,
        JV = xV._gl;
      if (!JV || xV.Nb < 2 || eV.zYV || JV.getParameter(JV.DEPTH_BITS) < 24) return !1;
      const YV = VV._renderingManager,
        UV = YV.getRenderingGroup(-1),
        yV = YV.getRenderingGroup(0),
        pV = LV.d.prototype.render;
      return UV.render = function(VV, eV, xV, JV, YV, UV, QV, nV, wV) {
        (VV || yV._empty) && pV.call(this, VV, eV, xV, JV, YV, UV, QV, nV, wV)
      }, yV.render = function(VV, xV, YV, yV) {
        let QV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          nV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZV = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          vV = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          rV = arguments.length > 8 ? arguments[8] : void 0;
        VV ? pV.call(this, VV, xV, YV, yV, QV, nV, ZV, vV, rV) : (eV.setAlphaMode(wV.c.ALPHA_DISABLE), pV.call(this, null, !1, !1, yV, QV, nV, ZV, !1), UV._empty || (JV.depthRange(1, 1), pV.call(UV, null, xV, YV, yV, QV, nV, ZV, vV, rV), JV.depthRange(0, 1)), pV.call(this, null, xV, YV, yV, !1, !1, !1, vV, rV))
      }, !0
    }

    function Me(VV, eV) {
      return [eV, HV.g].map(((eV, xV) => {
        const JV = new YV.e("light", yV.Ik.FromArray(eV), VV);
        return JV.diffuse = UV.Color3.FromArray([1, 1, 1]), JV.specular = UV.Color3.FromArray([1, 1, 1]), JV.intensity = HV.c[xV], JV
      }))
    }
    class ze extends QV.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(VV) {
        var eV;
        this.heldTexture = VV, this.particleTexture = null !== (eV = null === VV || void 0 === VV ? void 0 : VV.mirror) && void 0 !== eV ? eV : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let VV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        VV && (this.particleTexture = null, (0, nV.D)(this.heldTexture), this.heldTexture = null), super.dispose(VV, eV, xV)
      }
    }

    function Ge(VV, eV, xV, JV) {
      return eV && !eV.failed ? eV.fC(xV, JV) : new ze(xV, JV, VV)
    }
    const We = new WeakMap;

    function Re(VV, eV, xV) {
      var JV;
      let YV = null !== (JV = We.get(VV)) && void 0 !== JV ? JV : null;
      return !YV && VV.sk().Nb >= 2 && (YV = new DV(VV, (eV => {
        console.error(`Particle programs failed in scene ${VV.uid}: ${eV}`)
      })), We.set(VV, YV)), Ge(VV, YV, eV, xV)
    }
    const ge = JV.e.Zero();
    const De = {
      uJV: function(VV, eV) {
        return new CV(VV, eV.fJV, {
          preserveDrawingBuffer: eV.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      kUV: function(VV, eV) {
        ! function(VV, eV, xV) {
          const JV = new mV.c(VV.engine);
          VV.yE = JV, JV.detachControl(), JV.autoClear = !1, fV.b.MIN_RENDERINGGROUPS = -1;
          for (let UV = fV.b.MIN_RENDERINGGROUPS; UV <= 1; UV++) JV.setRenderingOrder(UV, LV.d.PainterSortCompare, LV.d.PainterSortCompare, LV.d.PainterSortCompare);
          JV.setRenderingAutoClearDepthStencil(0, !1), lV.c.Enabled = !1, VV.pUV = new Ae(VV, Math.round(eV.QUV)), VV.wUV = new hV.d("camHolder", JV), VV.camera = new cV.d("camera", new yV.Ik(0, 0, 0), JV), VV.camera.parent = VV.wUV, Ne(VV), (0, HV.j)(VV, ((VV, eV, xV) => (0, KV.d)(eV, xV, VV.yE))), JV.clearColor = UV.c.FromArray(eV.clearColor), JV.ambientColor = UV.Color3.FromArray(eV.ambientColor);
          const YV = xV(JV, eV.rUV);
          JV.onNewLightAddedObservable.add((VV => {
            YV.some((eV => eV === VV)) || console.error(`Light "${VV.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), JV.skipPointerMovePicking = !0
        }(VV, eV, Me), Xe(VV.yE)
      },
      nUV: Ne,
      setBabylonFog: function(VV, eV, xV, JV) {
        const YV = VV.yE;
        YV.fogMode = 3, YV.fogStart = eV, YV.fogEnd = xV, YV.fogColor.set(JV[0], JV[1], JV[2])
      },
      EUV: function(VV, eV, xV) {
        return VV.engine.Nb >= 2 && !VV.BUV && (VV.BUV = new DV(VV.yE, VV.jUV)), Ge(VV.yE, VV.BUV, eV, xV)
      },
      tUV: function(VV, eV) {
        VV.yE.lT.forEach((xV => {
          if (xV instanceof RV) return void xV.teV(eV, VV.iv.Vr);
          const JV = xV;
          if (JV.emitter.getConnectedParticleSystems)
            for (const VV of JV._particles) VV.position.set(VV.position.x - eV[0], VV.position.y - eV[1], VV.position.z - eV[2]);
          else {
            if (!JV.worldOffset) throw new Error("Particle system has no world offset");
            JV.worldOffset.x = -VV.iv.Vr[0], JV.worldOffset.y = -VV.iv.Vr[1], JV.worldOffset.z = -VV.iv.Vr[2]
          }
        }))
      },
      linesFromArrays: function(VV, eV, xV) {
        const JV = new pV.d(eV, VV.yE, null, void 0, void 0, !1);
        return (0, KV.c)(eV, xV, VV.yE, JV), JV
      },
      pE: be,
      qUV: function(VV, eV) {
        return ge.origin.iG(eV.origin), ge.direction.iG(eV.direction), ge.length = eV.length, ge.epsilon = eV.epsilon, ge.qUV(VV, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42457: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => lV,
      h: () => jV,
      l: () => uV
    });
    var JV = xV(41524),
      YV = xV(42463),
      UV = xV(42509),
      yV = xV(42471),
      pV = xV(38977),
      QV = xV(38985),
      nV = xV(38987),
      wV = xV(38991),
      ZV = xV(38433),
      vV = xV(38437),
      rV = xV(42479),
      kV = xV(38408),
      bV = xV(38421),
      EV = xV(38399);

    function BV(VV, eV) {
      return Object.assign((function(VV, xV, JV, YV) {
        return eV(this.featureState, VV, xV, JV, YV)
      }), {
        bZ: VV
      })
    }

    function jV(VV) {
      const eV = class extends rV.c {
          constructor(eV, xV) {
            const JV = (0, bV.eb)(eV),
              YV = JV && (0, bV.v)(JV, VV.name);
            for (var UV = arguments.length, yV = new Array(UV > 2 ? UV - 2 : 0), pV = 2; pV < UV; pV++) yV[pV - 2] = arguments[pV];
            super(eV, VV.name, VV.priority, YV ? YV.defines : VV.defines(...yV), !1), this.featureState = void 0, this.featureState = xV, this._pluginManager._addPlugin(this), this._enable(!0), (0, bV.z)(this._material, VV, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return VV.className
          }
          isCompatible(VV) {
            return VV === EV.d.GLSL || VV === EV.d.WGSL
          }
        },
        xV = (0, kV.j)(VV);
      for (const [JV, YV] of Object.entries(kV.c)) {
        const UV = VV[JV];
        if (UV) {
          const VV = xV[JV];
          Object.defineProperty(eV.prototype, YV, {
            value: BV(UV, VV),
            writable: !0,
            configurable: !0
          })
        }
      }
      return eV
    }
    class qV extends(jV(pV.b)) {}
    var tV = xV(41071),
      FV = xV(42487),
      TV = xV(42490);

    function PV(VV, eV, xV) {
      return (0, TV.g)(xV, eV.urls, (() => async function(VV, eV, xV) {
        const {
          width: JV
        } = VV[0].getSize(), YV = VV.map(((VV, xV) => {
          var YV;
          const UV = Math.round(VV.getSize().height / JV),
            yV = null === eV || void 0 === eV ? void 0 : eV[xV];
          return {
            pixels: yV && yV.byteLength === JV * JV * UV * 4 ? yV : null !== (YV = AV.get(VV.getInternalTexture())) && void 0 !== YV ? YV : VV._readPixelsSync(),
            layers: UV
          }
        })), UV = xV.sk().getCaps().texture2DArrayMaxLayerCount, pV = (0, TV.e)(YV, JV, UV).map((VV => {
          let {
            pixels: eV,
            layers: YV
          } = VV;
          return {
            atlas: new FV.d(eV, JV, JV, YV, tV.c.TEXTUREFORMAT_RGBA, xV, !0, !1, yV.b.NEAREST_NEAREST_MIPLINEAR),
            layers: YV
          }
        }));
        return VV.forEach(((VV, eV) => {
          const JV = VV.getInternalTexture();
          AV.has(JV) || (! function(VV, eV) {
            const xV = eV.createRawTexture(new Uint8Array(4), 1, 1, tV.c.TEXTUREFORMAT_RGBA, !1, !1, yV.b.NEAREST_SAMPLINGMODE);
            VV._hardwareTexture.release(), eV.unbindAllTextures(), xV._swapAndDie(VV, !1)
          }(JV, xV.sk()), AV.set(JV, YV[eV].pixels))
        })), pV
      }(VV, eV.pixels, xV)))
    }
    const AV = new WeakMap;
    var NV = xV(38994);
    class XV extends(jV(QV.h)) {
      constructor(VV, eV) {
        super(VV, eV), this.loaded = new Set, this.mirrors = void 0, this.mirrors = eV.textures.map((VV => VV.mirror)), this.mirrors.forEach(((VV, eV) => {
          VV.onLoadObservable.add((VV => {
            this.setTextureArrayData(VV, eV).catch((VV => {
              console.error(`Failed to build the texture arrays, at atlas ${eV}`, VV)
            }))
          }))
        })), (0, NV.f)(eV, VV.shaderLanguage)
      }
      async setTextureArrayData(VV, eV) {
        const xV = this.featureState,
          {
            width: JV,
            height: YV
          } = VV.getSize(),
          UV = this._material.shaderLanguage;
        if (!xV.useWebGL2) return void(0, NV.c)(this._material, xV, eV, JV, Math.round(YV / JV), UV);
        if (this.loaded.add(eV), this.loaded.size < this.mirrors.length) return;
        const yV = await PV(this.mirrors, xV.sources, this._material.dD());
        (0, NV.b)(this._material, xV, yV, JV, UV)
      }
    }
    var MV = xV(42496),
      zV = xV(41566),
      GV = xV(38263),
      WV = xV(42498),
      RV = xV(41674),
      gV = xV(41559),
      DV = xV(42439),
      iV = xV(38662),
      CV = xV(42506);
    class aV extends MV.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const oV = {
      Mesh: WV.e,
      TransformNode: DV.d,
      nZ: MV.b,
      VertexBuffer: MV.c,
      BoundingInfo: zV.b,
      Ik: GV.Ik,
      ArenaBuffer: aV,
      SubMesh: gV.c,
      VertexData: RV.c,
      MirroredGeometry: CV.b,
      meshFromArrays: CV.c,
      plainMeshFromArrays: CV.d
    };
    (0, iV.h)(oV);
    var cV = xV(38502);
    class hV extends(jV(wV.j)) {
      constructor(VV, eV) {
        if (super(VV, eV), VV instanceof JV.StandardMaterial && eV.dirLightCount > 0) {
          const eV = VV,
            xV = eV._blockDirtyMechanism;
          eV._blockDirtyMechanism = !0, VV.disableLighting = !0, eV._blockDirtyMechanism = xV;
          const JV = (0, bV.eb)(VV);
          JV && (JV.disableLighting = !0, (0, bV.bb)(JV))
        }(0, cV.g)(VV)
      }
      dispose(VV) {
        (0, cV.h)(this._material), super.dispose(VV)
      }
    }

    function lV(VV, eV) {
      if (!(eV instanceof JV.StandardMaterial) || eV.specularTexture) return;
      const {
        r: xV,
        g: YV,
        b: UV
      } = eV.specularColor;
      0 === xV && 0 === YV && 0 === UV && (VV.SPECULARTERM = !1)
    }(0, wV.g)({
      disableUnusedSpecularTerm: lV
    });
    var LV = xV(38445),
      fV = xV(38673);
    const mV = new RegExp(`^#define ${nV.e}\\s*$`, "m");
    class KV extends(jV(nV.l)) {
      constructor(VV, eV) {
        super(VV, eV), this.ik = !1, eV.ditherOnlyWhileFading && (fV.e.add(VV), this.prewarmDitherTwins(VV))
      }
      prewarmDitherTwins(VV) {
        const eV = new WeakSet;
        VV.onEffectCreatedObservable.add((xV => {
          let {
            effect: JV,
            subMesh: YV
          } = xV;
          if (this.featureState.prewarmingDither || eV.has(JV)) return;
          eV.add(JV);
          const UV = null === YV || void 0 === YV ? void 0 : YV.getMesh();
          UV && !mV.test(JV.defines) && VV.dD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(UV) || eV.delete(JV)
          }))
        }))
      }
      prewarmDither(VV) {
        if (this.ik || VV.iN()) return !1;
        const eV = new gV.c(0, 0, 0, 0, 0, VV, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(VV, eV)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== eV.effect
      }
      dispose(VV) {
        this.ik = !0, super.dispose(VV)
      }
    }
    const HV = new Map;

    function uV(VV, eV) {
      HV.set(VV, eV)
    }
    uV(pV.b, qV), uV(QV.h, XV), uV(nV.l, KV), uV(wV.j, hV), (0, ZV.e)({
      create: (VV, eV) => {
        const xV = new JV.StandardMaterial(VV.name, eV);
        return (0, LV.m)(VV, xV), xV.detailMap._pluginDefineNames
      },
      write: (VV, eV, xV) => {
        (0, LV.I)(VV.mirror, eV, xV)
      },
      addFeature: (VV, eV, xV) => {
        const JV = HV.get(eV.feature);
        if (!JV) throw new Error(`${eV.feature.name} has no plugin class (registerPluginClass)`);
        new JV(VV.mirror, eV.state, ...xV)
      },
      texture: (VV, eV, xV) => {
        let {
          url: JV,
          noMipmap: YV,
          invertY: UV,
          samplingMode: pV,
          data: QV,
          sets: nV
        } = xV;
        if (!QV) {
          const xV = new yV.b(JV, eV, YV, UV, pV);
          return Object.assign(xV, nV), void(0, vV.J)(VV, xV)
        }
        const wV = {},
          ZV = new Promise(((VV, eV) => {
            wV.onLoad = VV, wV.onError = (VV, xV) => {
              eV(new Error(`${QV.context}: ${(null===xV||void 0===xV?void 0:xV.message)||VV||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: rV,
            bytes: kV,
            label: bV
          } = QV,
          EV = {
            noMipmap: YV,
            invertY: !1,
            samplingMode: pV,
            ...wV,
            mimeType: rV,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          BV = new yV.b(null, eV, EV);
        LV.q.set(BV, ZV), Object.assign(BV, nV), BV.updateURL(JV, kV);
        const jV = BV.getInternalTexture();
        jV && (jV.label = bV), VV.uvSet = BV.coordinatesIndex, VV.matrix.set((0, LV.B)(BV)), (0, vV.J)(VV, BV)
      },
      cube: (VV, eV, xV) => {
        let {
          rootUrl: JV,
          files: UV,
          noMipmap: pV,
          luminance: QV
        } = xV;
        const {
          samplingMode: nV
        } = VV.sampler, wV = nV === (0, vV.z)(pV) ? null : () => {
          (0, LV.A)(ZV, nV)
        }, ZV = new YV.c(JV, eV, null, pV, UV, wV, null, (0, vV.w)(QV));
        ZV.coordinatesMode = yV.b.SKYBOX_MODE, (0, vV.J)(VV, ZV)
      },
      canvas: (VV, eV, xV) => {
        let {
          width: JV,
          height: YV,
          mipmaps: pV,
          samplingMode: QV,
          hasAlpha: nV = !1,
          wrap: wV = yV.b.CLAMP_ADDRESSMODE
        } = xV;
        const ZV = new UV.c(eV, {
          width: JV,
          height: YV
        }, VV, pV, QV);
        ZV.hasAlpha = nV, ZV.wrapU = wV, ZV.wrapV = wV;
        const vV = (0, LV.v)(ZV);
        return (0, LV.w)(vV, ZV), vV
      }
    })
  },
  42506: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      c: () => ZV,
      d: () => vV
    });
    var JV = xV(42496),
      YV = xV(41318),
      UV = xV(41566),
      yV = xV(41677),
      pV = xV(42498),
      QV = xV(41674),
      nV = xV(38547);
    class wV extends yV.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (VV, eV) => {
          this.releaseUnlessInstanced(eV)
        }, this.onLinked = null
      }
      link(VV) {
        var eV;
        (0, nV.m)(VV), this.model = VV, null === (eV = this.onLinked) || void 0 === eV || eV.call(this, VV)
      }
      relink() {
        this.release();
        const VV = [];
        for (const YV of Object.values(this._vertexBuffers))
          if (!YV.getIsInstanced()) {
            const {
              byteOffset: eV,
              byteStride: xV,
              type: JV,
              normalized: UV
            } = YV;
            VV.push({
              kind: YV.getKind(),
              data: YV.getData(),
              offset: eV,
              stride: xV,
              components: YV.getSize(),
              glType: JV,
              isNormalized: UV
            })
          } const eV = this._indices.length ? this._indices : null,
          {
            minimum: xV,
            maximum: JV
          } = this.extend;
        this.link(new nV.e(VV, eV, this.getTotalVertices(), new Float64Array(xV.WYV()), new Float64Array(JV.WYV())))
      }
      copy(VV) {
        if (!this.model) return super.copy(VV);
        const eV = new wV(VV, this.dD()),
          xV = this.RYV(void 0, !0);
        xV && eV.setIndices(xV);
        let yV = !1;
        for (const UV in this._vertexBuffers) {
          const VV = this._vertexBuffers[UV],
            xV = VV.getData();
          if (!xV) continue;
          const pV = VV.getSize(),
            {
              type: QV,
              byteOffset: nV,
              byteStride: wV,
              normalized: ZV
            } = VV;
          yV ||= VV.isUpdatable();
          const vV = VV.getIsInstanced() ? (xV instanceof Array ? 4 * xV.length : xV.byteLength) / wV : this.getTotalVertices(),
            rV = (0, YV.q)(xV, pV, QV, nV, wV, vV, !0),
            kV = {
              updatable: VV.isUpdatable(),
              stride: pV,
              type: QV,
              normalized: ZV,
              takeBufferOwnership: !0,
              instanced: VV.getIsInstanced()
            };
          eV.setVerticesBuffer(new JV.c(this.sk(), rV, UV, kV), vV)
        }
        return eV._updatable = yV, eV._boundingInfo = new UV.b(this.extend.minimum, this.extend.maximum), eV.relink(), eV
      }
      static mergeMeshes(VV, eV, xV, JV, YV, UV) {
        const QV = VV[0].dD(),
          nV = new pV.e(VV[0].name + "_merged", QV),
          ZV = new wV(yV.c.RandomId(), QV, void 0, !1, nV);
        try {
          if (!pV.e.MergeMeshes(VV, eV, xV, nV, YV, UV)) return nV.dispose(), null
        } catch (vV) {
          throw nV.dispose(), vV
        }
        return ZV.relink(), nV
      }
      removeVerticesData(VV) {
        this.releaseUnlessInstanced(VV), super.removeVerticesData(VV)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(VV) {
        var eV;
        VV && null !== (eV = this.getVertexBuffer(VV)) && void 0 !== eV && eV.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, nV.u)(this.model), this.model = null)
      }
    }

    function ZV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pV.e(VV, xV);
      const YV = (0, nV.i)(eV),
        {
          positions: UV,
          normals: ZV,
          uvs: vV,
          indices: rV,
          named: kV = {}
        } = eV,
        bV = new QV.c;
      bV.positions = UV, bV.normals = null !== ZV && void 0 !== ZV ? ZV : null, bV.uvs = null !== vV && void 0 !== vV ? vV : null, bV.indices = rV;
      const EV = new wV(yV.c.RandomId(), xV, bV, !1, JV);
      for (const {
          kind: yV,
          components: pV
        }
        of YV.vertexAttributes) yV in kV && JV.setVerticesData(yV, kV[yV], !1, pV);
      return EV.link(YV), JV
    }

    function vV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const YV = new pV.e(VV, xV),
        {
          positions: UV,
          normals: yV,
          uvs: nV,
          indices: wV
        } = eV;
      return Object.assign(new QV.c, {
        positions: UV,
        normals: yV,
        uvs: nV,
        indices: wV
      }).applyToMesh(YV, JV), YV
    }
  },
  39892: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV,
      f: () => yV,
      h: () => UV,
      j: () => YV,
      l: () => pV,
      p: () => nV,
      q: () => wV,
      r: () => QV
    });
    const JV = 16,
      YV = 256,
      UV = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      yV = 16,
      pV = 256,
      QV = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + JV,
        color2: 12 + 5 * JV,
        ME: 12 + 9 * JV,
        remap: 12 + 13 * JV
      },
      nV = 12 + 17 * JV,
      wV = [QV.colorCount, QV.velocityCount, QV.remapCount, QV.ramp]
  },
  39890: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => EV,
      g: () => qV
    });
    var JV = xV(38303),
      YV = xV(38263),
      UV = xV(38437),
      yV = xV(39892);
    class pV {
      constructor(VV) {
        this.Jv = VV, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const eV = Math.max(1, VV);
        this.records = new Float32Array(eV * yV.f), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(eV).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(VV) {
        const eV = this.Jv;
        for (let xV = 0; xV < eV; xV++) {
          const xV = this.cursor;
          if (this.cursor = xV + 1 === eV ? 0 : xV + 1, this.deaths[xV] <= VV) return xV
        }
        return -1
      }
      written(VV, eV) {
        this.deaths[VV] = eV, VV >= this.highWater && (this.highWater = VV + 1), this.uploadFrom < 0 ? (this.uploadFrom = VV, this.uploadTo = VV + 1) : VV >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, VV + 1) : this.wrapTo = Math.max(this.wrapTo, VV + 1)
      }
      shiftTimes(VV) {
        const eV = this.records,
          xV = this.highWater * yV.f;
        for (let JV = yV.h.time; JV < xV; JV += yV.f) eV[JV] -= VV;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(VV) {
        this.uploadFrom >= 0 && (VV(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && VV(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(VV) {
        let eV = 0;
        for (let xV = 0; xV < this.highWater; xV++) this.deaths[xV] > VV && eV++;
        return eV
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var QV = xV(38387),
      nV = xV(39899),
      wV = xV(39908),
      ZV = xV(39910);
    class vV {
      constructor() {
        this.particleEmitterType = new wV.d, this.texture = null, this.blendMode = ZV.h, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = YV.Ik.Zero(), this.worldOffset = new YV.Ik(0, 0, 0), this.color1 = new QV.c(1, 1, 1, 1), this.color2 = new QV.c(1, 1, 1, 1), this.colorDead = new QV.c(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var VV;
        return null !== (VV = rV(this).direction1) && void 0 !== VV ? VV : YV.Ik.Zero()
      }
      set direction1(VV) {
        const eV = rV(this);
        eV.direction1 && (eV.direction1 = VV)
      }
      get direction2() {
        var VV;
        return null !== (VV = rV(this).direction2) && void 0 !== VV ? VV : YV.Ik.Zero()
      }
      set direction2(VV) {
        const eV = rV(this);
        eV.direction2 && (eV.direction2 = VV)
      }
      get minEmitBox() {
        var VV;
        return null !== (VV = rV(this).minEmitBox) && void 0 !== VV ? VV : YV.Ik.Zero()
      }
      set minEmitBox(VV) {
        const eV = rV(this);
        eV.minEmitBox && (eV.minEmitBox = VV)
      }
      get maxEmitBox() {
        var VV;
        return null !== (VV = rV(this).maxEmitBox) && void 0 !== VV ? VV : YV.Ik.Zero()
      }
      set maxEmitBox(VV) {
        const eV = rV(this);
        eV.maxEmitBox && (eV.maxEmitBox = VV)
      }
      createBoxEmitter(VV, eV, xV, JV) {
        const YV = new wV.d;
        return this.particleEmitterType = YV, YV.direction1 = VV, YV.direction2 = eV, YV.minEmitBox = xV, YV.maxEmitBox = JV, YV
      }
      addColorGradient(VV, eV, xV) {
        return this.colorGradients ??= [], this.colorGradients.push(new nV.c(VV, eV, xV)), this.colorGradients.sort(kV), this
      }
      removeColorGradient(VV) {
        return bV(this.colorGradients, VV), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(VV, eV, xV) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new nV.h(VV, eV, xV)), this.velocityGradients.sort(kV), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(VV, eV, xV) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new nV.h(VV, eV, xV)), this.colorRemapGradients.sort(kV), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(VV, eV) {
        return this.rampGradients ??= [], this.rampGradients.push(new nV.d(VV, eV)), this.rampGradients.sort(kV), this
      }
      removeRampGradient(VV) {
        return bV(this.rampGradients, VV), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function rV(VV) {
      return VV.particleEmitterType
    }

    function kV(VV, eV) {
      return VV.gradient < eV.gradient ? -1 : VV.gradient > eV.gradient ? 1 : 0
    }

    function bV(VV, eV) {
      const xV = VV ? VV.findIndex((VV => VV.gradient === eV)) : -1;
      xV >= 0 && VV.splice(xV, 1)
    }
    class EV extends vV {
      constructor(VV, eV, xV) {
        super(), this.name = VV, this.host = xV, this.onDispose = BV, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = YV.Ik.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.ik = !1, this.emitterMatrix = new YV.Matrix, this.inverseEmitterMatrix = new YV.Matrix, this.spawned = {
          position: new YV.Ik,
          direction: new YV.Ik
        }, this.ring = new pV(eV)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(VV) {
        var eV;
        null === (eV = this.emitterDisposed) || void 0 === eV || eV.remove(), this.emitterDisposed = null, this.emitterValue = VV, VV && tV(VV) && (this.emitterDisposed = VV.eC.add((() => {
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
        return !this.ik && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var VV;
        let eV = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.ik || (this.ik = !0, null === (VV = this.emitterDisposed) || void 0 === VV || VV.remove(), this.emitterDisposed = null, eV && ((0, UV.D)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(VV) {
        const eV = this.emitter;
        return !!eV && !(tV(eV) && !eV.isEnabled()) && this.animate(VV)
      }
      animate(VV) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const eV = this.updateSpeed * VV;
        let xV;
        return this.manualEmitCount > -1 ? (xV = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (xV = this.emitRate * eV | 0, this.newPartsExcess += this.emitRate * eV - xV), this.newPartsExcess > 1 && (xV += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (xV = 0), this.alive = this.liveUntil > this.time, this.time += eV, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), xV > 0 && this.spawn(xV), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.ik && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var VV;
        return this.started = !1, null === (VV = this.onAnimationEnd) || void 0 === VV || VV.call(this), !!this.ik || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(VV, eV) {
        VV[eV] = this.anchor[0] + this.shift[0] + this.worldOffset.x, VV[eV + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, VV[eV + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      teV(VV, eV) {
        this.emitterValue && tV(this.emitterValue) ? (this.shift[0] -= VV[0], this.shift[1] -= VV[1], this.shift[2] -= VV[2]) : this.worldOffset.set(-eV[0], -eV[1], -eV[2])
      }
      spawn(VV) {
        var eV, xV;
        const UV = this.emitterValue,
          pV = tV(UV) ? UV.getWorldMatrix() : YV.Matrix.TranslationToRef(UV.x, UV.y, UV.z, this.emitterMatrix);
        pV.invertToRef(this.inverseEmitterMatrix);
        const {
          position: QV,
          direction: nV
        } = this.spawned, wV = this.spawned, ZV = this.ring, vV = this.liveUntil <= this.time;
        vV && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, ZV.restart());
        const {
          records: rV,
          recordBits: kV
        } = ZV, bV = yV.h, EV = null === (eV = this.getColorGradients()) || void 0 === eV ? void 0 : eV[0], BV = EV ? EV.color1 : this.color1, jV = EV ? null !== (xV = EV.color2) && void 0 !== xV ? xV : EV.color1 : this.color2;
        for (let YV = 0; YV < VV; YV++) {
          const VV = ZV.freeSlot(this.time);
          if (VV < 0) break;
          const eV = (0, JV.RandomRange)(this.minLifeTime, this.maxLifeTime),
            xV = (0, JV.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(pV, QV, wV, !1), this.particleEmitterType.startDirectionFunction(pV, nV, wV, !1, this.inverseEmitterMatrix), 0 === xV ? nV.set(0, 0, 0) : nV.scaleInPlace(xV);
          const UV = (0, JV.RandomRange)(this.minSize, this.maxSize);
          vV && 0 === YV && (this.anchor[0] = QV.x, this.anchor[1] = QV.y, this.anchor[2] = QV.z);
          const EV = VV * yV.f;
          rV[EV + bV.position] = QV.x - this.anchor[0] - this.shift[0], rV[EV + bV.position + 1] = QV.y - this.anchor[1] - this.shift[1], rV[EV + bV.position + 2] = QV.z - this.anchor[2] - this.shift[2], rV[EV + bV.time] = this.time - this.epoch, rV[EV + bV.direction] = nV.x, rV[EV + bV.direction + 1] = nV.y, rV[EV + bV.direction + 2] = nV.z, rV[EV + bV.lifeTime] = eV, rV[EV + bV.size] = UV, kV[EV + bV.seed] = 4294967296 * Math.random() >>> 0;
          const qV = Math.random();
          rV[EV + bV.colour] = BV.r + (jV.r - BV.r) * qV, rV[EV + bV.colour + 1] = BV.g + (jV.g - BV.g) * qV, rV[EV + bV.colour + 2] = BV.b + (jV.b - BV.b) * qV, rV[EV + bV.colour + 3] = BV.a + (jV.a - BV.a) * qV;
          const tV = this.time + eV;
          tV > this.liveUntil && (this.liveUntil = tV), ZV.written(VV, tV)
        }
      }
    }

    function BV() {}
    const jV = 5;

    function qV(VV, eV) {
      const xV = [];
      let JV = 0;
      for (const YV of VV) YV.isReady() || (JV++, xV.length < jV && xV.push(`${eV} particle system ${YV.name}`));
      return JV > xV.length && xV.push(`${JV-xV.length} more ${eV} particle systems`), xV
    }

    function tV(VV) {
      return void 0 !== VV.position
    }
  },
  44494: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => EV,
      f: () => pV,
      g: () => yV,
      k: () => nV
    });
    var JV = xV(38387),
      YV = xV(39899),
      UV = xV(39892);

    function yV(VV, eV, xV, JV) {
      const YV = UV.r;
      eV.fill(0), VV.gravity.toArray(eV, YV.gravity), VV.colorDead.toArray(eV, YV.colorDead), xV[YV.ramp] = VV.useRampGradients ? 1 : 0;
      const yV = VV.getColorGradients(),
        pV = vV(VV, yV, "colour", JV);
      xV[YV.colorCount] = pV;
      for (let UV = 0; UV < pV; UV++) {
        var QV;
        const VV = yV[rV(yV, UV)];
        eV[YV.colorPositions + UV] = VV.gradient, VV.color1.toArray(eV, YV.color1 + 4 * UV), (null !== (QV = VV.color2) && void 0 !== QV ? QV : VV.color1).toArray(eV, YV.color2 + 4 * UV)
      }
      const nV = VV.getVelocityGradients(),
        wV = vV(VV, nV, "ME", JV);
      xV[YV.velocityCount] = wV;
      for (let UV = 0; UV < wV; UV++) jV(eV, YV.ME + 4 * UV, nV[rV(nV, UV)]);
      const ZV = VV.useRampGradients ? VV.getColorRemapGradients() : null,
        kV = vV(VV, ZV, "colour remap", JV);
      xV[YV.remapCount] = kV;
      for (let UV = 0; UV < kV; UV++) jV(eV, YV.remap + 4 * UV, ZV[rV(ZV, UV)])
    }

    function pV() {
      return {
        key: [],
        texels: new Uint8Array(4 * UV.j)
      }
    }
    const QV = [];

    function nV(VV, eV) {
      return wV(VV, QV), !BV(QV, eV.key) && (eV.key.length = 0, eV.key.push(...QV), eV.key.length > 0 && function(VV, eV) {
        for (let xV = 0; xV < UV.j; xV++) YV.i.GetCurrentGradient(xV / UV.j, VV, ((VV, eV, xV) => {
          JV.Color3.LerpToRef(VV.color, eV.color, xV, ZV)
        })), eV[4 * xV] = 255 * ZV.r, eV[4 * xV + 1] = 255 * ZV.g, eV[4 * xV + 2] = 255 * ZV.b, eV[4 * xV + 3] = 255
      }(VV.getRampGradients(), eV.texels), !0)
    }

    function wV(VV, eV) {
      eV.length = 0;
      const xV = VV.useRampGradients ? VV.getRampGradients() : null;
      if (null !== xV && void 0 !== xV && xV.length) {
        eV.push(xV.length);
        for (const VV of xV) eV.push(VV.gradient, VV.color.r, VV.color.g, VV.color.b)
      }
    }
    const ZV = new JV.Color3;

    function vV(VV, eV, xV, JV) {
      return eV ? eV.length > UV.e ? (JV(`particleStops:${xV}`, `GPU particles use the first 2 and last ${UV.e-2} of more than ${UV.e} ${xV} gradient stops (${VV.name})`), UV.e) : eV.length : 0
    }

    function rV(VV, eV) {
      return eV < 2 || VV.length <= UV.e ? eV : VV.length - UV.e + eV
    }
    const kV = new Float32Array(UV.p),
      bV = new Uint32Array(kV.buffer);

    function EV(VV, eV, xV) {
      return yV(VV, kV, bV, xV), eV && BV(bV, eV) ? null : bV.slice()
    }

    function BV(VV, eV) {
      if (VV.length !== eV.length) return !1;
      for (let xV = 0; xV < VV.length; xV++)
        if (VV[xV] !== eV[xV]) return !1;
      return !0
    }

    function jV(VV, eV, xV) {
      var JV;
      VV[eV] = xV.gradient, VV[eV + 1] = xV.factor1, VV[eV + 2] = null !== (JV = xV.factor2) && void 0 !== JV ? JV : xV.factor1
    }
  },
  42490: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      const JV = eV * eV * 4,
        YV = VV[0].layers,
        UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
        yV = new Uint8Array(UV * JV);
      VV.forEach(((eV, xV) => {
        const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
        yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
      }));
      const pV = Math.max(1, Math.min(UV, xV || UV));
      if (pV === UV) return [{
        pixels: yV,
        layers: UV
      }];
      const QV = [];
      for (let nV = 0; nV < UV; nV += pV) {
        const VV = Math.min(UV, nV + pV);
        QV.push({
          pixels: yV.slice(nV * JV, VV * JV),
          layers: VV - nV
        })
      }
      return QV
    }
    xV.d(eV, {
      e: () => JV,
      g: () => UV
    });
    const YV = new WeakMap;

    function UV(VV, eV, xV) {
      var JV, UV;
      const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
      YV.set(VV, yV);
      const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
      yV.set(eV[0], pV);
      const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
      if (QV) return QV.built;
      const nV = {
        urls: [...eV],
        built: xV()
      };
      return pV.push(nV), nV.built.catch((() => {
        pV.splice(pV.indexOf(nV), 1)
      })), nV.built
    }
  },
  39910: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => UV,
      h: () => YV,
      i: () => QV,
      l: () => ZV
    });
    var JV = xV(38385);
    const YV = 0,
      UV = 3,
      yV = 4,
      pV = new Map([
        [YV, JV.d.ALPHA_ONEONE],
        [1, JV.d.ALPHA_COMBINE],
        [2, JV.d.ALPHA_ADD],
        [UV, JV.d.ALPHA_MULTIPLY],
        [-1, JV.d.ALPHA_SUBTRACT]
      ]);

    function QV(VV) {
      var eV;
      return null !== (eV = pV.get(VV)) && void 0 !== eV ? eV : VV
    }
    const nV = [UV, 2],
      wV = new Map;

    function ZV(VV) {
      if (VV === yV) return nV;
      let eV = wV.get(VV);
      return eV || (eV = [VV], wV.set(VV, eV)), eV
    }
  },
  44490: (VV, eV, xV) => {
    function JV() {
      let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const eV = new Set;
      return (xV, JV) => {
        eV.has(xV) || (eV.add(xV), console.warn(VV + JV))
      }
    }
    xV.d(eV, {
      b: () => JV
    })
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);