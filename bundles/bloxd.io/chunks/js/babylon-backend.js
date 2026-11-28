export const id = 0;
export const ids = [0];
export const modules = {
  42795: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      CapeMaterialPlugin: () => hb,
      HueTintMaterialPlugin: () => zb,
      LifeformMaterialPlugin: () => Xb,
      OverlayMaterialPlugin: () => xb
    });
    var eb = Mb(42800),
      Hb = Mb(39254);
    class pb extends((0, eb.d)(Hb.e)) {}(0, eb.f)(Hb.e, pb);
    var Vb = Mb(38523);
    class gb extends((0, eb.d)(Vb.e)) {}(0, eb.f)(Vb.e, gb);
    var lb = Mb(39079);
    class Lb extends((0, eb.d)(lb.h)) {}(0, eb.f)(lb.h, Lb);
    var Ib = Mb(38547),
      Ob = Mb(41933),
      Ub = Mb(38542);
    class tb extends((0, eb.d)(Ub.c)) {
      constructor(bb, wb, Mb) {
        super(bb, wb, Mb), (0, Ib.g)(bb)
      }
      dispose(bb) {
        (0, Ib.j)(this._material), super.dispose(bb)
      }
    }(0, eb.f)(Ub.c, tb), (0, Ub.d)({
      disableUnusedSpecularTerm: eb.c,
      isLightingDisabled: bb => bb instanceof Ob.StandardMaterial && bb.disableLighting
    });
    var Cb = Mb(39980);
    class Eb extends((0, eb.d)(Cb.d)) {}(0, eb.f)(Cb.d, Eb);
    var Fb = Mb(40101),
      Bb = Mb(38411),
      sb = Mb(39362),
      mb = Mb(38535);
    class hb extends((0, eb.d)(Fb.b)) {}(0, eb.f)(Fb.b, hb);
    class zb extends((0, eb.d)(Bb.e)) {}(0, eb.f)(Bb.e, zb);
    class Xb extends((0, eb.d)(sb.l)) {}(0, eb.f)(sb.l, Xb);
    class xb extends((0, eb.d)(mb.b)) {}(0, eb.f)(mb.b, xb)
  },
  53736: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      addBabylonLights: () => Rw,
      createSceneParticleSystem: () => fw,
      default: () => Ww
    });
    var eb = Mb(53743),
      Hb = (Mb(41653), Mb(42792), Mb(42161), Mb(53757)),
      pb = Mb(38401),
      Vb = Mb(38281),
      gb = Mb(53766),
      lb = Mb(53771),
      Lb = Mb(38468),
      Ib = (Mb(42800), Mb(53781)),
      Ob = Mb(53775),
      Ub = Mb(40009),
      tb = Mb(53790),
      Cb = Mb(41518),
      Eb = Mb(39998);
    const Fb = "gpuParticles",
      Bb = "gpuParticlesSummed",
      sb = Eb.v,
      mb = bb => bb / 4,
      hb = (bb, wb, Mb, eb) => Array.from({
        length: wb
      }, ((Hb, pb) => `(${((bb,wb,Mb)=>0===wb?`${bb} < 1`:wb===Mb-1?`${bb} >= ${wb}`:`${bb} == ${wb}`)(bb,pb,wb)} ? ${Mb(pb)} : ${eb})`)).join("\n\t\t+ "),
      zb = (bb, wb, Mb) => `vec4 ${bb}(int i) {\n\treturn ${hb("i",Mb,(bb=>`gpuParticleSystem[${wb+bb}]`),"vec4(0.0)")};\n}\n`,
      Xb = `\n${zb("colorPositionsAt",mb(sb.colorPositions),Eb.d/4)}\n${zb("color1At",mb(sb.color1),Eb.d)}\n${zb("color2At",mb(sb.color2),Eb.d)}\n${zb("velocityAt",mb(sb.UF),Eb.d)}\n${zb("remapStopAt",mb(sb.remap),Eb.d)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${hb("j",4,(bb=>`v[${bb}]`),"0.0")};\n}\n`,
      xb = (bb, wb, Mb, eb) => bb ? `${Mb}(${eb})` : `gpuParticleSystem[${wb} + ${eb}]`,
      jb = bb => `gpuParticleSystem[${bb>>2}].${"xyzw"[3&bb]}`,
      Kb = bb => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Eb.d}\n#define COLOR_POSITIONS ${mb(sb.colorPositions)}\n#define COLOR1 ${mb(sb.color1)}\n#define COLOR2 ${mb(sb.color2)}\n#define VELOCITY ${mb(sb.UF)}\n#define REMAP ${mb(sb.remap)}\n#define RECORDS_PER_ROW ${Eb.o}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Eb.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${jb(sb.gravity)}, ${jb(sb.gravity+1)}, ${jb(sb.gravity+2)}); }\nint colorCount() { return int(${jb(sb.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${mb(sb.colorDead)}]; }\nint velocityCount() { return int(${jb(sb.velocityCount)}); }\nint remapCount() { return int(${jb(sb.remapCount)}); }\n${bb?Xb:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${bb?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${xb(bb,"COLOR1","color1At","i")}, ${xb(bb,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${xb(bb,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${xb(bb,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${xb(bb,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${xb(bb,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${xb(bb,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${xb(bb,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${xb(bb,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      rb = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    Cb.e.ShadersStore[`${Fb}VertexShader`] = Kb(!1), Cb.e.ShadersStore[`${Fb}PixelShader`] = rb, Cb.e.ShadersStore[`${Bb}VertexShader`] = Kb(!0), Cb.e.ShadersStore[`${Bb}PixelShader`] = rb;
    const Rb = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Db = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var cb = Mb(39992),
      Yb = Mb(53794);
    class Zb extends cb.e {
      constructor(bb, wb, Mb, eb) {
        super(bb, wb, Mb), this.renderer = Mb, this.JE = eb, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Eb.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Yb.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (bb, wb) => {
          const {
            engine: Mb
          } = this, eb = Mb._gl;
          Mb._bindTextureDirectly(eb.TEXTURE_2D, this.records, !0), Mb._unpackFlipY(!1);
          const Hb = this.ring.recordBits;
          for (let pb = bb; pb < wb;) {
            const bb = Math.floor(pb / Eb.o),
              Mb = Math.min(wb, (bb + 1) * Eb.o);
            eb.texSubImage2D(eb.TEXTURE_2D, 0, pb % Eb.o * 4, bb, 4 * (Mb - pb), 1, eb.RGBA_INTEGER, eb.UNSIGNED_INT, Hb, pb * Eb.g), pb = Mb
          }
          Mb._bindTextureDirectly(eb.TEXTURE_2D, null)
        }, this.id = bb;
        const Hb = eb.DC();
        this.engine = Hb;
        const pb = Math.max(1, wb),
          Vb = Math.min(pb, Eb.o);
        this.records = Hb.createRawTexture(null, 4 * Vb, Math.ceil(pb / Vb), Ib.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Ib.b.TEXTURE_NEAREST_SAMPLINGMODE, null, Ib.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.JE.getAnimationRatio() || 1;
        const wb = this.JE.getFrameId();
        if (wb === this.animatedFrame) return !1;
        const Mb = super.animate(bb);
        return Mb && (this.animatedFrame = wb, this.ring.takeUploads(this.uploadSlots)), Mb
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(bb) {
        (0, Yb.i)(this, this.uniforms, this.uniformBits, bb);
        for (const Mb of Eb.s) this.uniforms[Mb] = this.uniformBits[Mb];
        var wb;
        (0, Yb.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (wb = this.ramp) || void 0 === wb || wb.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Ob.b.CreateRGBATexture(this.rampTexels.texels, Eb.k, 1, this.JE, !1, !1, Ib.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var bb;
        this.records.dispose(), null === (bb = this.ramp) || void 0 === bb || bb.dispose(), this.ramp = null
      }
    }
    const fb = "the context was lost before the programs linked";
    class Ab {
      constructor(bb, wb) {
        this.JE = bb, this.reportFailure = wb, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = Fb, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, tb.d)(), this.engine = bb.DC(), this.whiteRamp = Ob.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, bb, !1, !1, Ib.b.TEXTURE_NEAREST_SAMPLINGMODE);
        const Mb = this.linkPair(Fb),
          eb = null !== Mb && Mb !== fb ? this.linkPair(Bb) : Mb;
        null === eb && null !== Mb ? (console.warn(`GPU particles link their fallback here: ${Mb}`), this.reportFailure(Mb, !0)) : null !== eb && this.fail(eb === fb ? fb : null !== Mb && void 0 !== Mb ? Mb : eb)
      }
      lN(bb, wb) {
        const Mb = Eb.o * this.engine.getCaps().maxTextureSize;
        wb > Mb && this.warnOnce(`capacity:${bb}`, `particle system ${bb} holds ${Mb} particles, not ${wb}: its records texture's limit`);
        const eb = new Zb(bb, Math.min(wb, Mb), this, this.JE);
        return this.JE.addParticleSystem(eb), eb
      }
      canDraw(bb) {
        var wb, Mb;
        if (this.failed || null === (wb = bb.texture) || void 0 === wb || null === (Mb = wb.mirror) || void 0 === Mb || !Mb.isReady()) return !1;
        for (const eb of (0, Ub.l)(bb.blendMode))
          if (!this.effectFor(eb).isReady()) return !1;
        return !0
      }
      disposeStopped(bb) {
        this.JE._toBeDisposed.push(bb)
      }
      remove(bb) {
        this.JE.removeParticleSystem(bb), bb.releaseGl()
      }
      render(bb) {
        var wb;
        if (!bb.isReady() || !bb.hasLiveParticles()) return 0;
        const {
          engine: Mb,
          JE: eb,
          frame: Hb
        } = this;
        bb.prepareDraw(this.warnOnce), bb.drawOffset(Hb, 0), Hb[3] = bb.drawTime();
        const pb = bb.ring.drawStart(),
          Vb = bb.ring.drawCount(),
          gb = null !== (wb = bb.ramp) && void 0 !== wb ? wb : this.whiteRamp;
        Mb.setState(!1);
        for (const lb of (0, Ub.l)(bb.blendMode)) {
          const wb = this.effectFor(lb);
          Mb.enableEffect(wb), wb.setTexture("gpuParticleTexture", bb.texture.mirror), wb.setTexture("gpuParticleRampTexture", gb), wb._bindTexture("gpuParticleRecords", bb.records), wb.setMatrix("gpuParticleView", eb.getViewMatrix()), wb.setMatrix("gpuParticleProjection", eb.getProjectionMatrix()), wb.setFloatArray4("gpuParticleSystem", bb.uniforms), wb.setFloat4("gpuParticleFrame", Hb[0], Hb[1], Hb[2], Hb[3]), wb.setFloat2("gpuParticleRange", pb, Vb), wb.setFloat("gpuParticleRamp", bb.uniforms[Eb.v.ramp]), Mb.bindBuffers(this.vertexBuffers, null, wb), Mb.setAlphaMode((0, Ub.i)(lb)), Mb.drawArraysType(Ib.b.MATERIAL_TriangleStripDrawMode, 0, 4, Vb), wb._bindTexture("gpuParticleRecords", null)
        }
        return Mb.setAlphaMode(Ib.b.ALPHA_DISABLE), Vb
      }
      linkPair(bb) {
        this.shader = bb, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(bb, ""), this.multiplyEffect = this.createEffect(bb, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(bb) {
        const wb = bb.getPipelineContext(),
          Mb = this.gl();
        Mb && null === this.pairFailure && (!wb || wb.isParallelCompiled && !wb.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : wb.isParallelCompiled && wb.program && (Mb.getProgramParameter(wb.program, Mb.LINK_STATUS) || this.programFailed(function(bb, wb, Mb) {
          if (bb.isContextLost()) return fb;
          for (const [eb, Hb] of [
              ["VERTEX SHADER", wb.vertexShader],
              ["FRAGMENT SHADER", wb.fragmentShader]
            ]) {
            const wb = Hb && !bb.getShaderParameter(Hb, bb.COMPILE_STATUS) ? bb.getShaderInfoLog(Hb) : null;
            if (wb) return `${eb} ${wb}`
          }
          return bb.getProgramInfoLog(Mb) || "a program did not link"
        }(Mb, wb, wb.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(bb) {
        return bb === Ub.b ? this.multiplyEffect : this.effect
      }
      createEffect(bb, wb) {
        return this.engine.createEffect(bb, [], Rb, Db, wb, void 0, void 0, ((wb, Mb) => {
          var eb;
          bb === this.shader && this.programFailed(null !== (eb = this.gl()) && void 0 !== eb && eb.isContextLost() ? fb : function(bb) {
            const wb = bb.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(wb) ? "a program failed, its log not in this browser's stack" : wb.replace(/^Error: /, "")
          }(Mb))
        }))
      }
      programFailed(bb) {
        this.linkingPair ? this.pairFailure ??= bb : this.fail(bb)
      }
      fail(bb) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${bb}`), this.reportFailure(bb, !1);
          for (const bb of this.JE.kR.slice()) bb instanceof Zb && bb.disposeOnStop && bb.dispose()
        }
      }
    }
    var Wb = Mb(41496);
    class Jb extends Wb.e {
      createEffect() {
        const bb = super.createEffect(...arguments);
        return Nb(bb), Sb.has(bb) || (Sb.add(bb), bb.onCompileObservable.add((() => {
          Nb(bb)
        }))), bb
      }
    }
    const Sb = new WeakSet;

    function Nb(bb) {
      bb._vertexSourceCodeBeforeMigration = "", bb._fragmentSourceCodeBeforeMigration = ""
    }
    var vb = Mb(41864),
      Qb = Mb(42787),
      Gb = Mb(41631),
      qb = Mb(41834),
      ab = Mb(41827),
      ib = Mb(41759),
      ub = Mb(42845),
      db = Mb(38743),
      Pb = Mb(53802),
      nb = Mb(53811),
      yb = Mb(53820),
      ob = Mb(41777),
      Tb = Mb(4111),
      kb = Mb(38613),
      bw = Mb(41988),
      ww = Mb(38690),
      Mw = Mb(38631);

    function ew(bb) {
      if (bb.visibility < 1 || !bb.isVisible || !bb.isEnabled() || bb.metadata[Mw.g] || !bb.isReady()) return !0;
      const wb = bb.oR;
      if (!wb || 0 === wb.length) return !0;
      for (let Mb = 0; Mb < wb.length; Mb++) {
        const eb = wb[Mb],
          Hb = eb.AC();
        if (!Hb || !Hb.isReadyForSubMesh(bb, eb, !1)) return !0
      }
      return !1
    }
    class Hw {
      constructor(bb, wb) {
        this.hU = bb, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, wb.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      LO(bb) {
        var wb;
        const Mb = this.armed;
        if (this.armed = !1, this.vis = null, !Mb) return !1;
        this.culled = 0;
        const {
          hU: eb
        } = this, Hb = null === (wb = eb.fR) || void 0 === wb ? void 0 : wb.visibility;
        if (!Hb || !bb || eb.FO.oC) return !1;
        if (!(eb.XO.Lpb[0] >= ww.e)) return !1;
        const pb = bb.getProjectionMatrix().m;
        if (0 !== pb[15]) return !1;
        const Vb = eb.SU,
          gb = bb.globalPosition,
          lb = this.eye;
        return lb[0] = gb.x + Vb[0], lb[1] = gb.y + Vb[1], lb[2] = gb.z + Vb[2], !!Hb.eyeClear(lb[0], lb[1], lb[2], bb.minZ, pb, eb.XO) && (this.vis = Hb, this.passable.clear(), this.count = 0, !0)
      }
      see(bb, wb) {
        const Mb = this.count++;
        if (Mb === this.cellSlots.length) {
          const bb = new Int32Array(2 * Mb);
          bb.set(this.cellSlots), this.cellSlots = bb
        }
        this.cellSlots[Mb] = wb, this.meshes[Mb] = bb
      }
      seeThrough(bb) {
        this.passable.add(bb)
      }
      finish(bb, wb) {
        const {
          vis: Mb,
          eye: eb,
          meshes: Hb,
          count: pb,
          cellSlots: Vb
        } = this, {
          XO: gb
        } = this.hU, [lb, Lb] = gb.Lpb, Ib = null !== Mb && Mb.update(eb[0], eb[1], eb[2], gb.lO, lb, Lb, this.passable);
        let Ob = 0;
        for (let Ub = 0; Ub < pb; Ub++) {
          const eb = Hb[Ub];
          if (Ib) {
            const bb = 3 * Vb[Ub];
            if (bb >= 0 && !Mb.isDrawn(wb[bb], wb[bb + 1], wb[bb + 2])) {
              Ob++;
              continue
            }
          }
          ob.h.prototype.push.call(bb, eb)
        }
        Hb.fill(null, 0, pb), this.count = 0, this.vis = null, this.culled = Ob
      }
    }
    var pw = Mb(38675),
      Vw = Mb(38618),
      gw = Mb(41963),
      lw = Mb(53828),
      Lw = Mb(41972),
      Iw = Mb(41886);
    let Ow = 1;
    const Uw = new WeakSet;

    function tw() {
      return Ow
    }

    function Cw() {
      Ow = Ow >= 1073741823 ? 1 : Ow + 1
    }

    function Ew(bb) {
      const wb = bb.metadata;
      if (!wb || !0 !== wb[kb.s]) return;
      const Mb = wb[kb.u],
        eb = null === Mb || void 0 === Mb ? void 0 : Mb._noaStamps;
      if (!Mb || !eb) return;
      const Hb = Mb.entries.indexOf(bb);
      Hb >= 0 && (eb[Hb] = 0)
    }

    function Fw(bb) {
      const wb = bb.oR;
      for (let Mb = 0; Mb < wb.length; Mb++) {
        const bb = wb[Mb].AC();
        if (bb && !bb.isFrozen) return !1
      }
      for (let Mb = 0; Mb < wb.length; Mb++) {
        const bb = wb[Mb].AC();
        bb && Uw.add(bb)
      }
      return !0
    }
    let Bw = !1;
    const sw = new WeakSet;

    function mw(bb, wb) {
      const Mb = bb[wb];
      if ("function" !== typeof Mb) throw new Error(`terrainDrawState: Babylon has no ${wb} to hook`);
      return Mb
    }

    function hw(bb, wb, Mb, eb, Hb) {
      const pb = Mb.XO.lO,
        Vb = new Map;
      let gb = 0;
      const lb = new Hw(Mb, bb),
        Lb = new pw.e(pb, bb.DC());
      ! function(bb) {
        if (sw.has(bb) || (sw.add(bb), bb.onContextLostObservable.add(Cw), bb.RC.add(Cw)), Bw) return;
        Bw = !0;
        const wb = lw.e.prototype,
          Mb = mw(wb, "_markSubMeshesAsDirty");
        Object.assign(wb, {
          _markSubMeshesAsDirty(bb) {
            Mb.call(this, bb), Ew(this)
          }
        });
        const eb = mw(Iw.d.prototype, "_syncParentEnabledState");
        Object.assign(Iw.d.prototype, {
          _syncParentEnabledState() {
            eb.call(this), Ew(this)
          }
        });
        const Hb = mw(Lw.d.prototype, "resetDrawCache");
        Lw.d.prototype.resetDrawCache = function(bb, wb) {
          Hb.call(this, bb, wb), Ew(this.getMesh())
        };
        const pb = gw.b.prototype,
          Vb = mw(pb, "markDirty");
        pb.markDirty = function(bb) {
          Vb.call(this, bb), Uw.has(this) && Cw()
        };
        const gb = mw(pb, "_markAllSubMeshesAsDirty");
        Object.assign(pb, {
          _markAllSubMeshesAsDirty(bb) {
            gb.call(this, bb), Uw.has(this) && Cw()
          }
        })
      }(bb.DC());
      let Ib = new Float64Array(384),
        Ob = new Int32Array(64),
        Ub = new Uint8Array(64),
        tb = new Float64Array(64),
        Cb = new Int32Array(192),
        Eb = 0;
      const Fb = [],
        Bb = new Float64Array(24),
        sb = () => {
          const bb = Fb.pop();
          return void 0 !== bb ? (Ob[bb] = 0, bb) : (Eb === Ob.length && (Ib = zw(Ib, new Float64Array(2 * Ib.length)), Ob = zw(Ob, new Int32Array(2 * Ob.length)), Ub = zw(Ub, new Uint8Array(2 * Ub.length)), tb = zw(tb, new Float64Array(2 * tb.length)), Cb = zw(Cb, new Int32Array(2 * Cb.length))), Eb++)
        },
        mb = bb => {
          const wb = 6 * bb._noaSlot,
            Mb = bb.Bpb[0],
            eb = bb.Bpb[1];
          Ib[wb] = Mb.x, Ib[wb + 1] = Mb.y, Ib[wb + 2] = Mb.z, Ib[wb + 3] = eb.x, Ib[wb + 4] = eb.y, Ib[wb + 5] = eb.z
        },
        hb = (bb, wb, Mb) => {
          if (!Mb) return lb.see(bb, -1), !1;
          const eb = ew(bb);
          return eb && lb.seeThrough(tb[wb]), lb.see(bb, wb), !eb
        };
      let zb = -1;
      return bb.getActiveMeshCandidates = () => {
        const Mb = bb.frustumPlanes,
          eb = wb._selectionContent;
        eb.reset(), (Mb => {
          const eb = bb.frustumPlanes;
          gb = gb + 1 | 0 || 1;
          const Hb = wb.blocks,
            pb = lb.LO(bb.activeCamera),
            Vb = pb && !0;
          if (Vb) {
            const wb = bb.DC().currentRenderPassId;
            wb !== zb && (zb = wb, Cw())
          }
          const Lb = tw(),
            tb = Vb && !1;
          Hb.length > 0 && function(bb, wb) {
            for (let Mb = 0; Mb < 6; Mb++) {
              const eb = bb[Mb],
                Hb = eb.normal;
              wb[4 * Mb] = Hb.x, wb[4 * Mb + 1] = Hb.y, wb[4 * Mb + 2] = Hb.z, wb[4 * Mb + 3] = eb.d
            }
          }(eb, Bb);
          const Eb = Ib,
            Fb = Ob,
            sb = Ub;
          for (let bb = 0; bb < Hb.length; bb++) {
            const wb = Hb[bb];
            if (!bw.b.IsInFrustum(wb.Bpb, eb)) continue;
            const Ib = wb.entries;
            {
              const bb = wb._noaSlots,
                eb = wb._noaStamps,
                Hb = wb._noaTerrain;
              for (let wb = 0; wb < Ib.length; wb++) {
                const Ob = bb[wb];
                if (Fb[Ob] !== gb && (Fb[Ob] = gb, sb[Ob] = Xw(Eb, 6 * Ob, Bb) ? 1 : 0), 0 === sb[Ob]) continue;
                const Ub = Ib[wb];
                if (Vb && eb[wb] === Lb) tb && 1 === Hb[wb] && ew(Ub) && 0, lb.see(Ub, 1 === Hb[wb] ? Ob : -1);
                else if (Vb) {
                  eb[wb] = Lb;
                  const bb = !0 === Ub.metadata[Vw.i];
                  Hb[wb] = bb ? 1 : 0;
                  const Mb = hb(Ub, Ob, bb);
                  !bb || Mb && Fw(Ub) || (eb[wb] = 0)
                } else pb ? hb(Ub, Ob, !0 === Ub.metadata[Vw.i]) : ob.h.prototype.push.call(Mb, Ub)
              }
              continue
            }
          }
          pb && lb.finish(Mb, Cb)
        })(eb), Lb.apply(eb, bb.activeCamera);
        const pb = wb.Fpb;
        for (let bb = 0; bb < pb.length; bb++) {
          const wb = pb[bb];
          wb.isEnabled() && ob.h.prototype.push.call(eb, wb)
        }
        return Hb(eb, Mb), eb
      }, {
        spb: () => lb.culled,
        lpb: (bb, wb) => {
          const Hb = Math.floor(wb[0] / pb),
            gb = Math.floor(wb[1] / pb),
            lb = Math.floor(wb[2] / pb),
            Lb = `${Hb}|${gb}|${lb}`;
          let Ib = Vb.get(Lb);
          if (!Ib) {
            const bb = [0, 0, 0];
            Mb.cMb([Hb * pb - 1, gb * pb - 1, lb * pb - 1], null, bb), Ib = Object.assign(eb(bb, pb + 2), {
              mpb: Lb,
              hpb: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: sb()
            }), mb(Ib), tb[Ib._noaSlot] = (0, Tb.g)(Hb, gb, lb), Cb[3 * Ib._noaSlot] = Hb, Cb[3 * Ib._noaSlot + 1] = gb, Cb[3 * Ib._noaSlot + 2] = lb, Vb.set(Lb, Ib)
          }
          Ib.hpb++, bb.metadata[kb.v] = Ib
        },
        dJ: bb => {
          const wb = bb.metadata[kb.v];
          wb && (wb.hpb--, wb.hpb <= 0 && (Vb.delete(wb.mpb), Fb.push(wb._noaSlot)), bb.metadata[kb.v] = null)
        },
        Epb: (bb, wb) => {
          const Mb = bb,
            eb = wb.metadata[kb.v];
          (Mb._noaSlots ??= []).push(eb._noaSlot), (Mb._noaStamps ??= []).push(0), (Mb._noaTerrain ??= []).push(0), Mb.entries.push(wb)
        },
        removeEntry: (bb, wb) => {
          const Mb = bb,
            eb = Mb.entries,
            Hb = eb.indexOf(wb);
          if (Hb < 0) return;
          const pb = Mb._noaSlots,
            Vb = Mb._noaStamps,
            gb = Mb._noaTerrain,
            lb = eb.length - 1;
          eb[Hb] = eb[lb], pb[Hb] = pb[lb], Vb[Hb] = Vb[lb], gb[Hb] = gb[lb], eb.pop(), pb.pop(), Vb.pop(), gb.pop()
        },
        Uwb: bb => {
          for (const wb of Vb.values()) {
            wb.gpb.zpb(bb), wb.Vpb.zpb(bb);
            for (const Mb of wb.Bpb) Mb.zpb(bb);
            mb(wb)
          }
        }
      }
    }

    function zw(bb, wb) {
      return wb.set(bb), wb
    }

    function Xw(bb, wb, Mb) {
      const eb = bb[wb],
        Hb = bb[wb + 1],
        pb = bb[wb + 2],
        Vb = bb[wb + 3],
        gb = bb[wb + 4],
        lb = bb[wb + 5];
      for (let Lb = 0; Lb < 24; Lb += 4) {
        const bb = Mb[Lb],
          wb = Mb[Lb + 1],
          Ib = Mb[Lb + 2];
        if (!(bb * (bb >= 0 ? Vb : eb) + wb * (wb >= 0 ? gb : Hb) + Ib * (Ib >= 0 ? lb : pb) + Mb[Lb + 3] >= 0)) return !1
      }
      return !0
    }
    var xw = Mb(39009);
    class jw {
      constructor(bb, wb) {
        var Mb = bb.JE;
        Mb.BHb(new yb.d(Mb));
        var eb = new Pb.c(lb);
        Mb.xpb = eb, eb.blocks = [];
        var Hb, pb = {},
          gb = [];
        this.textPlanes = gb, this.spb = () => Hb.spb(), this.Uwb = bb => {
          Ib(eb, bb), Hb.Uwb(bb)
        }, this.lpb = (wb, Mb, Vb) => {
          if (!wb.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!wb.metadata[kb.u] && !wb.metadata[kb.o]) {
            if (!Mb) {
              var lb = eb.Fpb;
              if (wb.metadata[kb.z] && !wb.parent) {
                lb = gb;
                var Ib = wb.XN().Kpb;
                wb.metadata[kb.A] = Ib.center.length() + Ib.radius, wb.cC = !0
              }
              return lb.push(wb), wb.metadata[kb.j] = lb, void(wb.metadata[kb.o] = !0)
            }
            var Ub = Math.floor(Vb[0] / Lb),
              tb = Math.floor(Vb[1] / Lb),
              Cb = Math.floor(Vb[2] / Lb),
              Eb = Ub + "|" + tb + "|" + Cb,
              Fb = pb[Eb];
            if (!Fb) {
              var Bb = [Ub * Lb, tb * Lb, Cb * Lb],
                sb = [0, 0, 0];
              bb.hU.cMb(Bb, null, sb), Fb = Ob(sb, Lb), eb.blocks.push(Fb), pb[Eb] = Fb, Fb.mpb = Eb
            }
            Hb.lpb(wb, Vb), Hb.Epb(Fb, wb), Fb.hpb = (Fb.hpb || 0) + 1, wb.metadata[kb.u] = Fb, wb.metadata[kb.s] = !0, wb.cC = !0
          }
        }, this.dJ = bb => {
          if (bb.metadata) {
            bb.metadata[kb.o] && ((0, Tb.m)(bb.metadata[kb.j], bb), bb.metadata[kb.o] = !1), bb.metadata[kb.j] === gb && (bb.cC = !1), bb.metadata[kb.j] = void 0, bb.metadata[kb.A] = void 0;
            var wb = bb.metadata[kb.u];
            wb && wb.entries && (bb.metadata[kb.s] && Hb.removeEntry(wb, bb), wb.hpb--, wb.hpb <= 0 && (delete pb[wb.mpb], (0, Tb.m)(eb.blocks, wb))), Hb.dJ(bb), bb.metadata[kb.u] = null, bb.metadata[kb.s] = !1
          }
        }, this.Pbb = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (bb.metadata[kb.u]) {
            if (bb.metadata[kb.s] === wb) return;
            var Mb = bb.metadata[kb.u];
            Mb && Mb.entries && (wb ? Hb.Epb(Mb, bb) : Hb.removeEntry(Mb, bb)), bb.metadata[kb.s] = wb
          } else {
            if (bb.metadata[kb.o] === wb) return;
            var pb = bb.metadata[kb.j] || eb.Fpb;
            wb ? pb.push(bb) : (0, Tb.m)(pb, bb), bb.metadata[kb.o] = wb
          }
        };
        var lb = () => {},
          Lb = wb * bb.hU.XO.lO,
          Ib = (bb, wb) => {
            bb.blocks.forEach((bb => {
              bb.gpb.zpb(wb), bb.Vpb.zpb(wb), bb.Bpb.forEach((bb => bb.zpb(wb))), bb.blocks && Ib(bb, wb)
            }))
          },
          Ob = (bb, wb) => {
            var Mb = new Vb.YC(bb[0], bb[1], bb[2]),
              eb = new Vb.YC(bb[0] + wb, bb[1] + wb, bb[2] + wb);
            return new nb.d(Mb, eb, void 0, void 0, void 0, lb)
          };
        Hb = hw(Mb, eb, bb.hU, Ob, ((bb, wb) => {
          for (var Mb = 0; Mb < gb.length; Mb++) {
            var eb = gb[Mb];
            eb.isEnabled(!1) && ((0, xw.b)(eb, wb) && ob.h.prototype.push.call(bb, eb))
          }
        }))
      }
    }

    function Kw(bb) {
      const {
        holderPosition: wb,
        holderRotation: Mb,
        k_: eb,
        fov: Hb,
        near: pb,
        far: Vb
      } = bb.model.T_, gb = bb.fpb;
      gb.position.twb(wb[0], wb[1], wb[2]), gb.rotation.twb(Mb[0], Mb[1], Mb[2]);
      const lb = bb.camera;
      lb.position.twb(eb[0], eb[1], eb[2]), lb.fov = Hb, lb.minZ = pb, lb.maxZ = Vb
    }

    function rw(bb) {
      const wb = bb.DC(),
        Mb = wb,
        eb = Mb._gl;
      if (!eb || Mb.HE < 2 || wb.rHb || eb.getParameter(eb.DEPTH_BITS) < 24) return !1;
      const Hb = bb._renderingManager,
        pb = Hb.getRenderingGroup(-1),
        Vb = Hb.getRenderingGroup(0),
        gb = qb.e.prototype.render;
      return pb.render = function(bb, wb, Mb, eb, Hb, pb, lb, Lb, Ib) {
        (bb || Vb._empty) && gb.call(this, bb, wb, Mb, eb, Hb, pb, lb, Lb, Ib)
      }, Vb.render = function(bb, Mb, Hb, Vb) {
        let lb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Lb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ob = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Ub = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          tb = arguments.length > 8 ? arguments[8] : void 0;
        bb ? gb.call(this, bb, Mb, Hb, Vb, lb, Lb, Ob, Ub, tb) : (wb.setAlphaMode(Ib.b.ALPHA_DISABLE), gb.call(this, null, !1, !1, Vb, lb, Lb, Ob, !1), pb._empty || (eb.depthRange(1, 1), gb.call(pb, null, Mb, Hb, Vb, lb, Lb, Ob, Ub, tb), eb.depthRange(0, 1)), gb.call(this, null, Mb, Hb, Vb, !1, !1, !1, Ub, tb))
      }, !0
    }

    function Rw(bb, wb) {
      return [wb, db.g].map(((wb, Mb) => {
        const eb = new Hb.e("light", Vb.YC.FromArray(wb), bb);
        return eb.diffuse = pb.Color3.FromArray([1, 1, 1]), eb.specular = pb.Color3.FromArray([1, 1, 1]), eb.intensity = db.c[Mb], eb
      }))
    }
    class Dw extends lb.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(bb) {
        var wb;
        this.heldTexture = bb, this.particleTexture = null !== (wb = null === bb || void 0 === bb ? void 0 : bb.mirror) && void 0 !== wb ? wb : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bb && (this.particleTexture = null, (0, Lb.B)(this.heldTexture), this.heldTexture = null), super.dispose(bb, wb, Mb)
      }
    }

    function Yw(bb, wb, Mb, eb) {
      return wb && !wb.failed ? wb.lN(Mb, eb) : new Dw(Mb, eb, bb)
    }
    const Zw = new WeakMap;

    function fw(bb, wb, Mb) {
      var eb;
      let Hb = null !== (eb = Zw.get(bb)) && void 0 !== eb ? eb : null;
      return !Hb && bb.DC().HE >= 2 && (Hb = new Ab(bb, (wb => {
        console.error(`Particle programs failed in scene ${bb.uid}: ${wb}`)
      })), Zw.set(bb, Hb)), Yw(bb, Hb, wb, Mb)
    }
    const Aw = eb.d.Zero();
    const Ww = {
      ueb: function(bb, wb) {
        return new Jb(bb, wb.Geb, {
          preserveDrawingBuffer: wb.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      Jpb: function(bb, wb) {
        ! function(bb, wb, Mb) {
          const eb = new ib.b(bb.engine);
          bb.JE = eb, eb.detachControl(), eb.autoClear = !1, ab.e.MIN_RENDERINGGROUPS = -1;
          for (let pb = ab.e.MIN_RENDERINGGROUPS; pb <= 1; pb++) eb.setRenderingOrder(pb, qb.e.PainterSortCompare, qb.e.PainterSortCompare, qb.e.PainterSortCompare);
          eb.setRenderingAutoClearDepthStencil(0, !1), Gb.d.Enabled = !1, bb.cpb = new jw(bb, Math.round(wb.Ypb)), bb.fpb = new Qb.b("camHolder", eb), bb.camera = new vb.d("camera", new Vb.YC(0, 0, 0), eb), bb.camera.parent = bb.fpb, Kw(bb), (0, db.i)(bb, ((bb, wb, Mb) => (0, ub.g)(wb, Mb, bb.JE))), eb.clearColor = pb.c.FromArray(wb.clearColor), eb.ambientColor = pb.Color3.FromArray(wb.ambientColor);
          const Hb = Mb(eb, wb.Wpb);
          eb.onNewLightAddedObservable.add((bb => {
            Hb.some((wb => wb === bb)) || console.error(`Light "${bb.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), eb.skipPointerMovePicking = !0
        }(bb, wb, Rw), rw(bb.JE)
      },
      Zpb: Kw,
      setBabylonFog: function(bb, wb, Mb, eb) {
        const Hb = bb.JE;
        Hb.fogMode = 3, Hb.fogStart = wb, Hb.fogEnd = Mb, Hb.fogColor.set(eb[0], eb[1], eb[2])
      },
      Npb: function(bb, wb, Mb) {
        return bb.engine.HE >= 2 && !bb.vpb && (bb.vpb = new Ab(bb.JE, bb.Qpb)), Yw(bb.JE, bb.vpb, wb, Mb)
      },
      qpb: function(bb, wb) {
        bb.JE.kR.forEach((Mb => {
          if (Mb instanceof Zb) return void Mb.Uwb(wb, bb.hU.SU);
          const eb = Mb;
          if (eb.emitter.getConnectedParticleSystems)
            for (const bb of eb._particles) bb.position.set(bb.position.x - wb[0], bb.position.y - wb[1], bb.position.z - wb[2]);
          else {
            if (!eb.worldOffset) throw new Error("Particle system has no world offset");
            eb.worldOffset.x = -bb.hU.SU[0], eb.worldOffset.y = -bb.hU.SU[1], eb.worldOffset.z = -bb.hU.SU[2]
          }
        }))
      },
      linesFromArrays: function(bb, wb, Mb) {
        const eb = new gb.b(wb, bb.JE, null, void 0, void 0, !1);
        return (0, ub.e)(wb, Mb, bb.JE, eb), eb
      },
      SE: Ew,
      Gpb: function(bb, wb) {
        return Aw.origin.eZ(wb.origin), Aw.direction.eZ(wb.direction), Aw.length = wb.length, Aw.epsilon = wb.epsilon, Aw.Gpb(bb, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42800: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => qb,
      d: () => mb,
      f: () => yb
    });
    var eb = Mb(41933),
      Hb = Mb(42805),
      pb = Mb(42847),
      Vb = Mb(42807),
      gb = Mb(39054),
      lb = Mb(39056),
      Lb = Mb(39059),
      Ib = Mb(39068),
      Ob = Mb(38505),
      Ub = Mb(38462),
      tb = Mb(38468),
      Cb = Mb(42814),
      Eb = Mb(38432),
      Fb = Mb(38449),
      Bb = Mb(38419);

    function sb(bb, wb) {
      return Object.assign((function(bb, Mb, eb, Hb) {
        return wb(this.featureState, bb, Mb, eb, Hb)
      }), {
        kI: bb
      })
    }

    function mb(bb) {
      const wb = class extends Cb.e {
          constructor(wb, Mb) {
            const eb = (0, Fb.ab)(wb),
              Hb = eb && (0, Fb.w)(eb, bb.name);
            for (var pb = arguments.length, Vb = new Array(pb > 2 ? pb - 2 : 0), gb = 2; gb < pb; gb++) Vb[gb - 2] = arguments[gb];
            super(wb, bb.name, bb.priority, Hb ? Hb.defines : bb.defines(...Vb), !1), this.featureState = void 0, this.featureState = Mb, this._pluginManager._addPlugin(this), this._enable(!0), (0, Fb.A)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === Bb.b.GLSL || bb === Bb.b.WGSL
          }
        },
        Mb = (0, Eb.e)(bb);
      for (const [eb, Hb] of Object.entries(Eb.c)) {
        const pb = bb[eb];
        if (pb) {
          const bb = Mb[eb];
          Object.defineProperty(wb.prototype, Hb, {
            value: sb(pb, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return wb
    }
    class hb extends(mb(gb.c)) {}
    var zb = Mb(41496),
      Xb = Mb(42822),
      xb = Mb(42829);

    function jb(bb, wb, Mb) {
      return (0, xb.e)(Mb, wb.urls, (() => async function(bb, wb, Mb) {
        const {
          width: eb
        } = bb[0].getSize(), Hb = bb.map(((bb, Mb) => {
          var Hb;
          const pb = Math.round(bb.getSize().height / eb),
            Vb = null === wb || void 0 === wb ? void 0 : wb[Mb];
          return {
            pixels: Vb && Vb.byteLength === eb * eb * pb * 4 ? Vb : null !== (Hb = Kb.get(bb.getInternalTexture())) && void 0 !== Hb ? Hb : bb._readPixelsSync(),
            layers: pb
          }
        })), pb = Math.min(Mb.DC().getCaps().texture2DArrayMaxLayerCount, 256), gb = (0, xb.b)(Hb, eb, pb).map((bb => {
          let {
            pixels: wb,
            layers: Hb
          } = bb;
          return {
            atlas: new Xb.d(wb, eb, eb, Hb, zb.e.TEXTUREFORMAT_RGBA, Mb, !0, !1, Vb.c.NEAREST_NEAREST_MIPLINEAR),
            layers: Hb
          }
        }));
        return bb.forEach(((bb, wb) => {
          const eb = bb.getInternalTexture();
          Kb.has(eb) || (! function(bb, wb) {
            const Mb = wb.createRawTexture(new Uint8Array(4), 1, 1, zb.e.TEXTUREFORMAT_RGBA, !1, !1, Vb.c.NEAREST_SAMPLINGMODE);
            bb._hardwareTexture.release(), wb.unbindAllTextures(), Mb._swapAndDie(bb, !1)
          }(eb, Mb.DC()), Kb.set(eb, Hb[wb].pixels))
        })), gb
      }(bb, wb.pixels, Mb)))
    }
    const Kb = new WeakMap;
    var rb = Mb(39072);
    class Rb extends(mb(lb.i)) {
      constructor(bb, wb) {
        super(bb, wb), this.loaded = new Set, this.mirrors = void 0, this.mirrors = wb.textures.map((bb => bb.mirror)), wb.useWebGL2 && !wb.imagesPerAtlas.length && wb.textureAtlases.splice(0, wb.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((bb, wb) => {
          bb.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, wb).catch((bb => {
              console.error(`Failed to build the texture arrays, at atlas ${wb}`, bb)
            }))
          }))
        })), (0, rb.g)(wb, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, wb) {
        const Mb = this.featureState,
          {
            width: eb,
            height: Hb
          } = bb.getSize(),
          pb = this._material.shaderLanguage;
        if (!Mb.useWebGL2) return void(0, rb.e)(this._material, Mb, wb, eb, Math.round(Hb / eb), pb);
        if (this.loaded.add(wb), this.loaded.size < this.mirrors.length) return;
        const Vb = await jb(this.mirrors, Mb.sources, this._material.RJ());
        (0, rb.b)(this._material, Mb, Vb, eb, pb)
      }
    }
    var Db = Mb(42831),
      cb = Mb(41984),
      Yb = Mb(38281),
      Zb = Mb(42839),
      fb = Mb(42091),
      Ab = Mb(41972),
      Wb = Mb(42787),
      Jb = Mb(38714),
      Sb = Mb(42845);
    class Nb extends Db.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const vb = {
      Mesh: Zb.e,
      TransformNode: Wb.b,
      uI: Db.d,
      VertexBuffer: Db.f,
      BoundingInfo: cb.e,
      YC: Yb.YC,
      ArenaBuffer: Nb,
      SubMesh: Ab.d,
      VertexData: fb.d,
      MirroredGeometry: Sb.b,
      meshFromArrays: Sb.e,
      plainMeshFromArrays: Sb.g
    };
    (0, Jb.f)(vb);
    var Qb = Mb(38547);
    class Gb extends(mb(Ib.g)) {
      constructor(bb, wb) {
        if (super(bb, wb), bb instanceof eb.StandardMaterial && wb.dirLightCount > 0) {
          const wb = bb,
            Mb = wb._blockDirtyMechanism;
          wb._blockDirtyMechanism = !0, bb.disableLighting = !0, wb._blockDirtyMechanism = Mb;
          const eb = (0, Fb.ab)(bb);
          eb && (eb.disableLighting = !0, (0, Fb.Z)(eb))
        }(0, Qb.g)(bb)
      }
      dispose(bb) {
        (0, Qb.j)(this._material), super.dispose(bb)
      }
    }

    function qb(bb, wb) {
      if (!(wb instanceof eb.StandardMaterial) || wb.specularTexture) return;
      const {
        r: Mb,
        g: Hb,
        b: pb
      } = wb.specularColor;
      0 === Mb && 0 === Hb && 0 === pb && (bb.SPECULARTERM = !1)
    }(0, Ib.d)({
      disableUnusedSpecularTerm: qb
    });
    var ab = Mb(38473),
      ib = Mb(38728);
    const ub = new RegExp(`^#define ${Lb.e}\\s*$`, "m");
    class db extends(mb(Lb.l)) {
      constructor(bb, wb) {
        super(bb, wb), this.BC = !1, wb.ditherOnlyWhileFading && (ib.f.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const wb = new WeakSet;
        bb.onEffectCreatedObservable.add((Mb => {
          let {
            effect: eb,
            subMesh: Hb
          } = Mb;
          if (this.featureState.prewarmingDither || wb.has(eb)) return;
          wb.add(eb);
          const pb = null === Hb || void 0 === Hb ? void 0 : Hb.getMesh();
          pb && !ub.test(eb.defines) && bb.RJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(pb) || wb.delete(eb)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.BC || bb.RD()) return !1;
        const wb = new Ab.d(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, wb)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== wb.effect
      }
      dispose(bb) {
        this.BC = !0, super.dispose(bb)
      }
    }
    class Pb extends(mb(Ob.c)) {}
    const nb = new Map;

    function yb(bb, wb) {
      nb.set(bb, wb)
    }
    yb(gb.c, hb), yb(lb.i, Rb), yb(Lb.l, db), yb(Ib.g, Gb), yb(Ob.c, Pb), (0, Ub.b)({
      create: (bb, wb) => {
        const Mb = new eb.StandardMaterial(bb.name, wb);
        return (0, ab.o)(bb, Mb), Mb.detailMap._pluginDefineNames
      },
      write: (bb, wb, Mb) => {
        (0, ab.Z)(bb.mirror, wb, Mb)
      },
      addFeature: (bb, wb, Mb) => {
        const eb = nb.get(wb.feature);
        if (!eb) throw new Error(`${wb.feature.name} has no plugin class (registerPluginClass)`);
        new eb(bb.mirror, wb.state, ...Mb)
      },
      texture: (bb, wb, Mb) => {
        let {
          url: eb,
          noMipmap: Hb,
          invertY: pb,
          samplingMode: gb,
          data: lb,
          sets: Lb
        } = Mb;
        if (!lb) {
          const Mb = new Vb.c(eb, wb, Hb, pb, gb);
          return Object.assign(Mb, Lb), void(0, tb.G)(bb, Mb)
        }
        const Ib = {},
          Ob = new Promise(((bb, wb) => {
            Ib.onLoad = bb, Ib.onError = (bb, Mb) => {
              wb(new Error(`${lb.context}: ${(null===Mb||void 0===Mb?void 0:Mb.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Ub,
            bytes: Cb,
            label: Eb
          } = lb,
          Fb = {
            noMipmap: Hb,
            invertY: !1,
            samplingMode: gb,
            ...Ib,
            mimeType: Ub,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Bb = new Vb.c(null, wb, Fb);
        ab.r.set(Bb, Ob), Object.assign(Bb, Lb), Bb.updateURL(eb, Cb);
        const sb = Bb.getInternalTexture();
        sb && (sb.label = Eb), bb.uvSet = Bb.coordinatesIndex, bb.matrix.set((0, ab.P)(Bb)), (0, tb.G)(bb, Bb)
      },
      cube: (bb, wb, Mb) => {
        let {
          rootUrl: eb,
          files: pb,
          noMipmap: gb,
          luminance: lb
        } = Mb;
        const {
          samplingMode: Lb
        } = bb.sampler, Ib = Lb === (0, tb.z)(gb) ? null : () => {
          (0, ab.L)(Ob, Lb)
        }, Ob = new Hb.e(eb, wb, null, gb, pb, Ib, null, (0, tb.w)(lb));
        Ob.coordinatesMode = Vb.c.SKYBOX_MODE, (0, tb.G)(bb, Ob)
      },
      canvas: (bb, wb, Mb) => {
        let {
          width: eb,
          height: Hb,
          mipmaps: gb,
          samplingMode: lb,
          hasAlpha: Lb = !1,
          wrap: Ib = Vb.c.CLAMP_ADDRESSMODE
        } = Mb;
        const Ob = new pb.e(wb, {
          width: eb,
          height: Hb
        }, bb, gb, lb);
        Ob.hasAlpha = Lb, Ob.wrapU = Ib, Ob.wrapV = Ib;
        const Ub = (0, ab.B)(Ob);
        return (0, ab.D)(Ub, Ob), Ub
      }
    })
  },
  42845: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      e: () => Ob,
      g: () => Ub
    });
    var eb = Mb(42831),
      Hb = Mb(41740),
      pb = Mb(41984),
      Vb = Mb(42093),
      gb = Mb(42839),
      lb = Mb(42091),
      Lb = Mb(38599);
    class Ib extends Vb.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, wb) => {
          this.releaseUnlessInstanced(wb)
        }, this.onLinked = null
      }
      link(bb) {
        var wb;
        (0, Lb.j)(bb), this.model = bb, null === (wb = this.onLinked) || void 0 === wb || wb.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Hb of Object.values(this._vertexBuffers))
          if (!Hb.getIsInstanced()) {
            const {
              byteOffset: wb,
              byteStride: Mb,
              type: eb,
              normalized: pb
            } = Hb;
            bb.push({
              kind: Hb.getKind(),
              data: Hb.getData(),
              offset: wb,
              stride: Mb,
              components: Hb.getSize(),
              glType: eb,
              isNormalized: pb
            })
          } const wb = this._indices.length ? this._indices : null,
          {
            minimum: Mb,
            maximum: eb
          } = this.extend;
        this.link(new Lb.d(bb, wb, this.getTotalVertices(), new Float64Array(Mb.ppb()), new Float64Array(eb.ppb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const wb = new Ib(bb, this.RJ()),
          Mb = this.ipb(void 0, !0);
        Mb && wb.setIndices(Mb);
        let Vb = !1;
        for (const pb in this._vertexBuffers) {
          const bb = this._vertexBuffers[pb],
            Mb = bb.getData();
          if (!Mb) continue;
          const gb = bb.getSize(),
            {
              type: lb,
              byteOffset: Lb,
              byteStride: Ib,
              normalized: Ob
            } = bb;
          Vb ||= bb.isUpdatable();
          const Ub = bb.getIsInstanced() ? (Mb instanceof Array ? 4 * Mb.length : Mb.byteLength) / Ib : this.getTotalVertices(),
            tb = (0, Hb.s)(Mb, gb, lb, Lb, Ib, Ub, !0),
            Cb = {
              updatable: bb.isUpdatable(),
              stride: gb,
              type: lb,
              normalized: Ob,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          wb.setVerticesBuffer(new eb.f(this.DC(), tb, pb, Cb), Ub)
        }
        return wb._updatable = Vb, wb._boundingInfo = new pb.e(this.extend.minimum, this.extend.maximum), wb.relink(), wb
      }
      static mergeMeshes(bb, wb, Mb, eb, Hb, pb) {
        const lb = bb[0].RJ(),
          Lb = new gb.e(bb[0].name + "_merged", lb),
          Ob = new Ib(Vb.c.RandomId(), lb, void 0, !1, Lb);
        try {
          if (!gb.e.MergeMeshes(bb, wb, Mb, Lb, Hb, pb)) return Lb.dispose(), null
        } catch (Ub) {
          throw Lb.dispose(), Ub
        }
        return Ob.relink(), Lb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var wb;
        bb && null !== (wb = this.getVertexBuffer(bb)) && void 0 !== wb && wb.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Lb.p)(this.model), this.model = null)
      }
    }

    function Ob(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new gb.e(bb, Mb);
      const Hb = (0, Lb.i)(wb),
        {
          positions: pb,
          normals: Ob,
          uvs: Ub,
          indices: tb,
          named: Cb = {}
        } = wb,
        Eb = new lb.d;
      Eb.positions = pb, Eb.normals = null !== Ob && void 0 !== Ob ? Ob : null, Eb.uvs = null !== Ub && void 0 !== Ub ? Ub : null, Eb.indices = tb;
      const Fb = new Ib(Vb.c.RandomId(), Mb, Eb, !1, eb);
      for (const {
          kind: Vb,
          components: gb
        }
        of Hb.vertexAttributes) Vb in Cb && eb.setVerticesData(Vb, Cb[Vb], !1, gb);
      return Fb.link(Hb), eb
    }

    function Ub(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Hb = new gb.e(bb, Mb),
        {
          positions: pb,
          normals: Vb,
          uvs: Lb,
          indices: Ib
        } = wb;
      return Object.assign(new lb.d, {
        positions: pb,
        normals: Vb,
        uvs: Lb,
        indices: Ib
      }).applyToMesh(Hb, eb), Hb
    }
  },
  39998: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      g: () => Vb,
      j: () => pb,
      k: () => Hb,
      o: () => gb,
      r: () => Lb,
      s: () => Ib,
      v: () => lb
    });
    const eb = 16,
      Hb = 256,
      pb = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      Vb = 16,
      gb = 256,
      lb = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + eb,
        color2: 12 + 5 * eb,
        UF: 12 + 9 * eb,
        remap: 12 + 13 * eb
      },
      Lb = 12 + 17 * eb,
      Ib = [lb.colorCount, lb.velocityCount, lb.remapCount, lb.ramp]
  },
  39992: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Fb,
      g: () => mb
    });
    var eb = Mb(38322),
      Hb = Mb(38281),
      pb = Mb(38468),
      Vb = Mb(39998);
    class gb {
      constructor(bb) {
        this.qO = bb, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const wb = Math.max(1, bb);
        this.records = new Float32Array(wb * Vb.g), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(wb).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(bb) {
        const wb = this.qO;
        for (let Mb = 0; Mb < wb; Mb++) {
          const Mb = this.cursor;
          if (this.cursor = Mb + 1 === wb ? 0 : Mb + 1, this.deaths[Mb] <= bb) return Mb
        }
        return -1
      }
      written(bb, wb) {
        this.deaths[bb] = wb, bb >= this.highWater && (this.highWater = bb + 1), this.uploadFrom < 0 ? (this.uploadFrom = bb, this.uploadTo = bb + 1) : bb >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, bb + 1) : this.wrapTo = Math.max(this.wrapTo, bb + 1)
      }
      shiftTimes(bb) {
        const wb = this.records,
          Mb = this.highWater * Vb.g;
        for (let eb = Vb.j.time; eb < Mb; eb += Vb.g) wb[eb] -= bb;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(bb) {
        this.uploadFrom >= 0 && (bb(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && bb(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(bb) {
        let wb = 0;
        for (let Mb = 0; Mb < this.highWater; Mb++) this.deaths[Mb] > bb && wb++;
        return wb
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var lb = Mb(38401),
      Lb = Mb(40004),
      Ib = Mb(40007),
      Ob = Mb(40009);
    class Ub {
      constructor() {
        this.particleEmitterType = new Ib.d, this.texture = null, this.blendMode = Ob.e, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = Hb.YC.Zero(), this.worldOffset = new Hb.YC(0, 0, 0), this.color1 = new lb.c(1, 1, 1, 1), this.color2 = new lb.c(1, 1, 1, 1), this.colorDead = new lb.c(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var bb;
        return null !== (bb = tb(this).direction1) && void 0 !== bb ? bb : Hb.YC.Zero()
      }
      set direction1(bb) {
        const wb = tb(this);
        wb.direction1 && (wb.direction1 = bb)
      }
      get direction2() {
        var bb;
        return null !== (bb = tb(this).direction2) && void 0 !== bb ? bb : Hb.YC.Zero()
      }
      set direction2(bb) {
        const wb = tb(this);
        wb.direction2 && (wb.direction2 = bb)
      }
      get minEmitBox() {
        var bb;
        return null !== (bb = tb(this).minEmitBox) && void 0 !== bb ? bb : Hb.YC.Zero()
      }
      set minEmitBox(bb) {
        const wb = tb(this);
        wb.minEmitBox && (wb.minEmitBox = bb)
      }
      get maxEmitBox() {
        var bb;
        return null !== (bb = tb(this).maxEmitBox) && void 0 !== bb ? bb : Hb.YC.Zero()
      }
      set maxEmitBox(bb) {
        const wb = tb(this);
        wb.maxEmitBox && (wb.maxEmitBox = bb)
      }
      createBoxEmitter(bb, wb, Mb, eb) {
        const Hb = new Ib.d;
        return this.particleEmitterType = Hb, Hb.direction1 = bb, Hb.direction2 = wb, Hb.minEmitBox = Mb, Hb.maxEmitBox = eb, Hb
      }
      addColorGradient(bb, wb, Mb) {
        return this.colorGradients ??= [], this.colorGradients.push(new Lb.e(bb, wb, Mb)), this.colorGradients.sort(Cb), this
      }
      removeColorGradient(bb) {
        return Eb(this.colorGradients, bb), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(bb, wb, Mb) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new Lb.i(bb, wb, Mb)), this.velocityGradients.sort(Cb), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(bb, wb, Mb) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new Lb.i(bb, wb, Mb)), this.colorRemapGradients.sort(Cb), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(bb, wb) {
        return this.rampGradients ??= [], this.rampGradients.push(new Lb.h(bb, wb)), this.rampGradients.sort(Cb), this
      }
      removeRampGradient(bb) {
        return Eb(this.rampGradients, bb), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function tb(bb) {
      return bb.particleEmitterType
    }

    function Cb(bb, wb) {
      return bb.gradient < wb.gradient ? -1 : bb.gradient > wb.gradient ? 1 : 0
    }

    function Eb(bb, wb) {
      const Mb = bb ? bb.findIndex((bb => bb.gradient === wb)) : -1;
      Mb >= 0 && bb.splice(Mb, 1)
    }
    class Fb extends Ub {
      constructor(bb, wb, Mb) {
        super(), this.name = bb, this.host = Mb, this.onDispose = Bb, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = Hb.YC.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.BC = !1, this.emitterMatrix = new Hb.Matrix, this.inverseEmitterMatrix = new Hb.Matrix, this.spawned = {
          position: new Hb.YC,
          direction: new Hb.YC
        }, this.ring = new gb(wb)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(bb) {
        var wb;
        null === (wb = this.emitterDisposed) || void 0 === wb || wb.remove(), this.emitterDisposed = null, this.emitterValue = bb, bb && hb(bb) && (this.emitterDisposed = bb.vJ.add((() => {
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
        return !this.BC && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var bb;
        let wb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.BC || (this.BC = !0, null === (bb = this.emitterDisposed) || void 0 === bb || bb.remove(), this.emitterDisposed = null, wb && ((0, pb.B)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(bb) {
        const wb = this.emitter;
        return !!wb && !(hb(wb) && !wb.isEnabled()) && this.animate(bb)
      }
      animate(bb) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const wb = this.updateSpeed * bb;
        let Mb;
        return this.manualEmitCount > -1 ? (Mb = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (Mb = this.emitRate * wb | 0, this.newPartsExcess += this.emitRate * wb - Mb), this.newPartsExcess > 1 && (Mb += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (Mb = 0), this.alive = this.liveUntil > this.time, this.time += wb, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), Mb > 0 && this.spawn(Mb), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.BC && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var bb;
        return this.started = !1, null === (bb = this.onAnimationEnd) || void 0 === bb || bb.call(this), !!this.BC || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(bb, wb) {
        bb[wb] = this.anchor[0] + this.shift[0] + this.worldOffset.x, bb[wb + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, bb[wb + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      Uwb(bb, wb) {
        this.emitterValue && hb(this.emitterValue) ? (this.shift[0] -= bb[0], this.shift[1] -= bb[1], this.shift[2] -= bb[2]) : this.worldOffset.set(-wb[0], -wb[1], -wb[2])
      }
      spawn(bb) {
        var wb, Mb;
        const pb = this.emitterValue,
          gb = hb(pb) ? pb.getWorldMatrix() : Hb.Matrix.TranslationToRef(pb.x, pb.y, pb.z, this.emitterMatrix);
        gb.invertToRef(this.inverseEmitterMatrix);
        const {
          position: lb,
          direction: Lb
        } = this.spawned, Ib = this.spawned, Ob = this.ring, Ub = this.liveUntil <= this.time;
        Ub && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, Ob.restart());
        const {
          records: tb,
          recordBits: Cb
        } = Ob, Eb = Vb.j, Fb = null === (wb = this.getColorGradients()) || void 0 === wb ? void 0 : wb[0], Bb = Fb ? Fb.color1 : this.color1, sb = Fb ? null !== (Mb = Fb.color2) && void 0 !== Mb ? Mb : Fb.color1 : this.color2;
        for (let Hb = 0; Hb < bb; Hb++) {
          const bb = Ob.freeSlot(this.time);
          if (bb < 0) break;
          const wb = (0, eb.RandomRange)(this.minLifeTime, this.maxLifeTime),
            Mb = (0, eb.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(gb, lb, Ib, !1), this.particleEmitterType.startDirectionFunction(gb, Lb, Ib, !1, this.inverseEmitterMatrix), 0 === Mb ? Lb.set(0, 0, 0) : Lb.scaleInPlace(Mb);
          const pb = (0, eb.RandomRange)(this.minSize, this.maxSize);
          Ub && 0 === Hb && (this.anchor[0] = lb.x, this.anchor[1] = lb.y, this.anchor[2] = lb.z);
          const Fb = bb * Vb.g;
          tb[Fb + Eb.position] = lb.x - this.anchor[0] - this.shift[0], tb[Fb + Eb.position + 1] = lb.y - this.anchor[1] - this.shift[1], tb[Fb + Eb.position + 2] = lb.z - this.anchor[2] - this.shift[2], tb[Fb + Eb.time] = this.time - this.epoch, tb[Fb + Eb.direction] = Lb.x, tb[Fb + Eb.direction + 1] = Lb.y, tb[Fb + Eb.direction + 2] = Lb.z, tb[Fb + Eb.lifeTime] = wb, tb[Fb + Eb.size] = pb, Cb[Fb + Eb.seed] = 4294967296 * Math.random() >>> 0;
          const mb = Math.random();
          tb[Fb + Eb.colour] = Bb.r + (sb.r - Bb.r) * mb, tb[Fb + Eb.colour + 1] = Bb.g + (sb.g - Bb.g) * mb, tb[Fb + Eb.colour + 2] = Bb.b + (sb.b - Bb.b) * mb, tb[Fb + Eb.colour + 3] = Bb.a + (sb.a - Bb.a) * mb;
          const hb = this.time + wb;
          hb > this.liveUntil && (this.liveUntil = hb), Ob.written(bb, hb)
        }
      }
    }

    function Bb() {}
    const sb = 5;

    function mb(bb, wb) {
      const Mb = [];
      let eb = 0;
      for (const Hb of bb) Hb.isReady() || (eb++, Mb.length < sb && Mb.push(`${wb} particle system ${Hb.name}`));
      return eb > Mb.length && Mb.push(`${eb-Mb.length} more ${wb} particle systems`), Mb
    }

    function hb(bb) {
      return void 0 !== bb.position
    }
  },
  53794: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Fb,
      f: () => gb,
      i: () => Vb,
      m: () => Lb
    });
    var eb = Mb(38401),
      Hb = Mb(40004),
      pb = Mb(39998);

    function Vb(bb, wb, Mb, eb) {
      const Hb = pb.v;
      wb.fill(0), bb.gravity.toArray(wb, Hb.gravity), bb.colorDead.toArray(wb, Hb.colorDead), Mb[Hb.ramp] = bb.useRampGradients ? 1 : 0;
      const Vb = bb.getColorGradients(),
        gb = Ub(bb, Vb, "colour", eb);
      Mb[Hb.colorCount] = gb;
      for (let pb = 0; pb < gb; pb++) {
        var lb;
        const bb = Vb[tb(Vb, pb)];
        wb[Hb.colorPositions + pb] = bb.gradient, bb.color1.toArray(wb, Hb.color1 + 4 * pb), (null !== (lb = bb.color2) && void 0 !== lb ? lb : bb.color1).toArray(wb, Hb.color2 + 4 * pb)
      }
      const Lb = bb.getVelocityGradients(),
        Ib = Ub(bb, Lb, "UF", eb);
      Mb[Hb.velocityCount] = Ib;
      for (let pb = 0; pb < Ib; pb++) sb(wb, Hb.UF + 4 * pb, Lb[tb(Lb, pb)]);
      const Ob = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        Cb = Ub(bb, Ob, "colour remap", eb);
      Mb[Hb.remapCount] = Cb;
      for (let pb = 0; pb < Cb; pb++) sb(wb, Hb.remap + 4 * pb, Ob[tb(Ob, pb)])
    }

    function gb() {
      return {
        key: [],
        texels: new Uint8Array(4 * pb.k)
      }
    }
    const lb = [];

    function Lb(bb, wb) {
      return Ib(bb, lb), !Bb(lb, wb.key) && (wb.key.length = 0, wb.key.push(...lb), wb.key.length > 0 && function(bb, wb) {
        for (let Mb = 0; Mb < pb.k; Mb++) Hb.j.GetCurrentGradient(Mb / pb.k, bb, ((bb, wb, Mb) => {
          eb.Color3.LerpToRef(bb.color, wb.color, Mb, Ob)
        })), wb[4 * Mb] = 255 * Ob.r, wb[4 * Mb + 1] = 255 * Ob.g, wb[4 * Mb + 2] = 255 * Ob.b, wb[4 * Mb + 3] = 255
      }(bb.getRampGradients(), wb.texels), !0)
    }

    function Ib(bb, wb) {
      wb.length = 0;
      const Mb = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== Mb && void 0 !== Mb && Mb.length) {
        wb.push(Mb.length);
        for (const bb of Mb) wb.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Ob = new eb.Color3;

    function Ub(bb, wb, Mb, eb) {
      return wb ? wb.length > pb.d ? (eb(`particleStops:${Mb}`, `GPU particles use the first 2 and last ${pb.d-2} of more than ${pb.d} ${Mb} gradient stops (${bb.name})`), pb.d) : wb.length : 0
    }

    function tb(bb, wb) {
      return wb < 2 || bb.length <= pb.d ? wb : bb.length - pb.d + wb
    }
    const Cb = new Float32Array(pb.r),
      Eb = new Uint32Array(Cb.buffer);

    function Fb(bb, wb, Mb) {
      return Vb(bb, Cb, Eb, Mb), wb && Bb(Eb, wb) ? null : Eb.slice()
    }

    function Bb(bb, wb) {
      if (bb.length !== wb.length) return !1;
      for (let Mb = 0; Mb < bb.length; Mb++)
        if (bb[Mb] !== wb[Mb]) return !1;
      return !0
    }

    function sb(bb, wb, Mb) {
      var eb;
      bb[wb] = Mb.gradient, bb[wb + 1] = Mb.factor1, bb[wb + 2] = null !== (eb = Mb.factor2) && void 0 !== eb ? eb : Mb.factor1
    }
  },
  42829: (bb, wb, Mb) => {
    function eb(bb, wb, Mb) {
      const eb = wb * wb * 4,
        Hb = bb[0].layers,
        pb = Hb * (bb.length - 1) + bb[bb.length - 1].layers,
        Vb = new Uint8Array(pb * eb);
      bb.forEach(((wb, Mb) => {
        const pb = Mb + 1 < bb.length ? Math.min(wb.layers, Hb) : wb.layers;
        Vb.set(new Uint8Array(wb.pixels.buffer, wb.pixels.byteOffset, pb * eb), Mb * Hb * eb)
      }));
      const gb = Math.max(1, Math.min(pb, Mb || pb));
      if (gb === pb) return [{
        pixels: Vb,
        layers: pb
      }];
      const lb = [];
      for (let Lb = 0; Lb < pb; Lb += gb) {
        const bb = Math.min(pb, Lb + gb);
        lb.push({
          pixels: Vb.slice(Lb * eb, bb * eb),
          layers: bb - Lb
        })
      }
      return lb
    }
    Mb.d(wb, {
      b: () => eb,
      e: () => pb
    });
    const Hb = new WeakMap;

    function pb(bb, wb, Mb) {
      var eb, pb;
      const Vb = null !== (eb = Hb.get(bb)) && void 0 !== eb ? eb : new Map;
      Hb.set(bb, Vb);
      const gb = null !== (pb = Vb.get(wb[0])) && void 0 !== pb ? pb : [];
      Vb.set(wb[0], gb);
      const lb = gb.find((bb => bb.urls.length === wb.length && bb.urls.every(((bb, Mb) => bb === wb[Mb]))));
      if (lb) return lb.built;
      const Lb = {
        urls: [...wb],
        built: Mb()
      };
      return gb.push(Lb), Lb.built.catch((() => {
        gb.splice(gb.indexOf(Lb), 1)
      })), Lb.built
    }
  },
  40009: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      e: () => Hb,
      i: () => lb,
      l: () => Ob
    });
    var eb = Mb(38397);
    const Hb = 0,
      pb = 3,
      Vb = 4,
      gb = new Map([
        [Hb, eb.c.ALPHA_ONEONE],
        [1, eb.c.ALPHA_COMBINE],
        [2, eb.c.ALPHA_ADD],
        [pb, eb.c.ALPHA_MULTIPLY],
        [-1, eb.c.ALPHA_SUBTRACT]
      ]);

    function lb(bb) {
      var wb;
      return null !== (wb = gb.get(bb)) && void 0 !== wb ? wb : bb
    }
    const Lb = [pb, 2],
      Ib = new Map;

    function Ob(bb) {
      if (bb === Vb) return Lb;
      let wb = Ib.get(bb);
      return wb || (wb = [bb], Ib.set(bb, wb)), wb
    }
  },
  53790: (bb, wb, Mb) => {
    function eb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const wb = new Set;
      return (Mb, eb) => {
        wb.has(Mb) || (wb.add(Mb), console.warn(bb + eb))
      }
    }
    Mb.d(wb, {
      d: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);