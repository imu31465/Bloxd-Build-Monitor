export const id = 0;
export const ids = [0];
export const modules = {
  42986: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CapeMaterialPlugin: () => er,
      HueTintMaterialPlugin: () => Kr,
      LifeformMaterialPlugin: () => yr,
      OverlayMaterialPlugin: () => Br
    });
    var Zr = Qr(42995),
      Wr = Qr(39507);
    class ar extends((0, Zr.h)(Wr.e)) {}(0, Zr.l)(Wr.e, ar);
    var jr = Qr(38809);
    class Ir extends((0, Zr.h)(jr.i)) {}(0, Zr.l)(jr.i, Ir);
    var fr = Qr(39348);
    class Er extends((0, Zr.h)(fr.h)) {}(0, Zr.l)(fr.h, Er);
    var pr = Qr(38831),
      xr = Qr(42100),
      mr = Qr(38824);
    class Nr extends((0, Zr.h)(mr.e)) {
      constructor(rr, Sr, Qr) {
        super(rr, Sr, Qr), (0, pr.j)(rr)
      }
      dispose(rr) {
        (0, pr.m)(this._material), super.dispose(rr)
      }
    }(0, Zr.l)(mr.e, Nr), (0, mr.i)({
      disableUnusedSpecularTerm: Zr.d,
      isLightingDisabled: rr => rr instanceof xr.StandardMaterial && rr.disableLighting
    });
    var Ur = Qr(40263);
    class tr extends((0, Zr.h)(Ur.h)) {}(0, Zr.l)(Ur.h, tr);
    var hr = Qr(40371),
      zr = Qr(38692),
      Yr = Qr(39632),
      nr = Qr(38819);
    class er extends((0, Zr.h)(hr.e)) {}(0, Zr.l)(hr.e, er);
    class Kr extends((0, Zr.h)(zr.e)) {}(0, Zr.l)(zr.e, Kr);
    class yr extends((0, Zr.h)(Yr.p)) {}(0, Zr.l)(Yr.p, yr);
    class Br extends((0, Zr.h)(nr.b)) {}(0, Zr.l)(nr.b, Br)
  },
  54088: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      addBabylonLights: () => LS,
      createSceneParticleSystem: () => HS,
      default: () => RS
    });
    var Zr = Qr(54093),
      Wr = (Qr(41851), Qr(42980), Qr(42318), Qr(54098)),
      ar = Qr(38679),
      jr = Qr(38555),
      Ir = Qr(54112),
      fr = Qr(54116),
      Er = Qr(38754),
      pr = (Qr(42995), Qr(54125)),
      xr = Qr(54122),
      mr = Qr(40293),
      Nr = Qr(54128),
      Ur = Qr(41743),
      tr = Qr(40276);
    const hr = "gpuParticles",
      zr = "gpuParticlesSummed",
      Yr = tr.s,
      nr = rr => rr / 4,
      er = (rr, Sr, Qr, Zr) => Array.from({
        length: Sr
      }, ((Wr, ar) => `(${((rr,Sr,Qr)=>0===Sr?`${rr} < 1`:Sr===Qr-1?`${rr} >= ${Sr}`:`${rr} == ${Sr}`)(rr,ar,Sr)} ? ${Qr(ar)} : ${Zr})`)).join("\n\t\t+ "),
      Kr = (rr, Sr, Qr) => `vec4 ${rr}(int i) {\n\treturn ${er("i",Qr,(rr=>`gpuParticleSystem[${Sr+rr}]`),"vec4(0.0)")};\n}\n`,
      yr = `\n${Kr("colorPositionsAt",nr(Yr.colorPositions),tr.b/4)}\n${Kr("color1At",nr(Yr.color1),tr.b)}\n${Kr("color2At",nr(Yr.color2),tr.b)}\n${Kr("velocityAt",nr(Yr.Lh),tr.b)}\n${Kr("remapStopAt",nr(Yr.remap),tr.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${er("j",4,(rr=>`v[${rr}]`),"0.0")};\n}\n`,
      Br = (rr, Sr, Qr, Zr) => rr ? `${Qr}(${Zr})` : `gpuParticleSystem[${Sr} + ${Zr}]`,
      Tr = rr => `gpuParticleSystem[${rr>>2}].${"xyzw"[3&rr]}`,
      vr = rr => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${tr.b}\n#define COLOR_POSITIONS ${nr(Yr.colorPositions)}\n#define COLOR1 ${nr(Yr.color1)}\n#define COLOR2 ${nr(Yr.color2)}\n#define VELOCITY ${nr(Yr.Lh)}\n#define REMAP ${nr(Yr.remap)}\n#define RECORDS_PER_ROW ${tr.o}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${tr.p/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Tr(Yr.gravity)}, ${Tr(Yr.gravity+1)}, ${Tr(Yr.gravity+2)}); }\nint colorCount() { return int(${Tr(Yr.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${nr(Yr.colorDead)}]; }\nint velocityCount() { return int(${Tr(Yr.velocityCount)}); }\nint remapCount() { return int(${Tr(Yr.remapCount)}); }\n${rr?yr:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${rr?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${Br(rr,"COLOR1","color1At","i")}, ${Br(rr,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${Br(rr,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${Br(rr,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${Br(rr,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${Br(rr,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${Br(rr,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${Br(rr,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${Br(rr,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      Or = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    Ur.e.ShadersStore[`${hr}VertexShader`] = vr(!1), Ur.e.ShadersStore[`${hr}PixelShader`] = Or, Ur.e.ShadersStore[`${zr}VertexShader`] = vr(!0), Ur.e.ShadersStore[`${zr}PixelShader`] = Or;
    const Lr = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      lr = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Xr = Qr(40274),
      Pr = Qr(54130);
    class Hr extends Xr.c {
      constructor(rr, Sr, Qr, Zr) {
        super(rr, Sr, Qr), this.renderer = Qr, this.Dt = Zr, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(tr.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Pr.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (rr, Sr) => {
          const {
            engine: Qr
          } = this, Zr = Qr._gl;
          Qr._bindTextureDirectly(Zr.TEXTURE_2D, this.records, !0), Qr._unpackFlipY(!1);
          const Wr = this.ring.recordBits;
          for (let ar = rr; ar < Sr;) {
            const rr = Math.floor(ar / tr.o),
              Qr = Math.min(Sr, (rr + 1) * tr.o);
            Zr.texSubImage2D(Zr.TEXTURE_2D, 0, ar % tr.o * 4, rr, 4 * (Qr - ar), 1, Zr.RGBA_INTEGER, Zr.UNSIGNED_INT, Wr, ar * tr.f), ar = Qr
          }
          Qr._bindTextureDirectly(Zr.TEXTURE_2D, null)
        }, this.id = rr;
        const Wr = Zr.MU();
        this.engine = Wr;
        const ar = Math.max(1, Sr),
          jr = Math.min(ar, tr.o);
        this.records = Wr.createRawTexture(null, 4 * jr, Math.ceil(ar / jr), pr.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, pr.d.TEXTURE_NEAREST_SAMPLINGMODE, null, pr.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Dt.getAnimationRatio() || 1;
        const Sr = this.Dt.getFrameId();
        if (Sr === this.animatedFrame) return !1;
        const Qr = super.animate(rr);
        return Qr && (this.animatedFrame = Sr, this.ring.takeUploads(this.uploadSlots)), Qr
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(rr) {
        (0, Pr.j)(this, this.uniforms, this.uniformBits, rr);
        for (const Qr of tr.r) this.uniforms[Qr] = this.uniformBits[Qr];
        var Sr;
        (0, Pr.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Sr = this.ramp) || void 0 === Sr || Sr.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = xr.c.CreateRGBATexture(this.rampTexels.texels, tr.m, 1, this.Dt, !1, !1, pr.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var rr;
        this.records.dispose(), null === (rr = this.ramp) || void 0 === rr || rr.dispose(), this.ramp = null
      }
    }
    const qr = "the context was lost before the programs linked";
    class Rr {
      constructor(rr, Sr) {
        this.Dt = rr, this.reportFailure = Sr, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = hr, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Nr.c)(), this.engine = rr.MU(), this.whiteRamp = xr.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, rr, !1, !1, pr.d.TEXTURE_NEAREST_SAMPLINGMODE);
        const Qr = this.linkPair(hr),
          Zr = null !== Qr && Qr !== qr ? this.linkPair(zr) : Qr;
        null === Zr && null !== Qr ? (console.warn(`GPU particles link their fallback here: ${Qr}`), this.reportFailure(Qr, !0)) : null !== Zr && this.fail(Zr === qr ? qr : null !== Qr && void 0 !== Qr ? Qr : Zr)
      }
      QG(rr, Sr) {
        const Qr = tr.o * this.engine.getCaps().maxTextureSize;
        Sr > Qr && this.warnOnce(`capacity:${rr}`, `particle system ${rr} holds ${Qr} particles, not ${Sr}: its records texture's limit`);
        const Zr = new Hr(rr, Math.min(Sr, Qr), this, this.Dt);
        return this.Dt.addParticleSystem(Zr), Zr
      }
      canDraw(rr) {
        var Sr, Qr;
        if (this.failed || null === (Sr = rr.texture) || void 0 === Sr || null === (Qr = Sr.mirror) || void 0 === Qr || !Qr.isReady()) return !1;
        for (const Zr of (0, mr.h)(rr.blendMode))
          if (!this.effectFor(Zr).isReady()) return !1;
        return !0
      }
      disposeStopped(rr) {
        this.Dt._toBeDisposed.push(rr)
      }
      remove(rr) {
        this.Dt.removeParticleSystem(rr), rr.releaseGl()
      }
      render(rr) {
        var Sr;
        if (!rr.isReady() || !rr.hasLiveParticles()) return 0;
        const {
          engine: Qr,
          Dt: Zr,
          frame: Wr
        } = this;
        rr.prepareDraw(this.warnOnce), rr.drawOffset(Wr, 0), Wr[3] = rr.drawTime();
        const ar = rr.ring.drawStart(),
          jr = rr.ring.drawCount(),
          Ir = null !== (Sr = rr.ramp) && void 0 !== Sr ? Sr : this.whiteRamp;
        Qr.setState(!1);
        for (const fr of (0, mr.h)(rr.blendMode)) {
          const Sr = this.effectFor(fr);
          Qr.enableEffect(Sr), Sr.setTexture("gpuParticleTexture", rr.texture.mirror), Sr.setTexture("gpuParticleRampTexture", Ir), Sr._bindTexture("gpuParticleRecords", rr.records), Sr.setMatrix("gpuParticleView", Zr.getViewMatrix()), Sr.setMatrix("gpuParticleProjection", Zr.getProjectionMatrix()), Sr.setFloatArray4("gpuParticleSystem", rr.uniforms), Sr.setFloat4("gpuParticleFrame", Wr[0], Wr[1], Wr[2], Wr[3]), Sr.setFloat2("gpuParticleRange", ar, jr), Sr.setFloat("gpuParticleRamp", rr.uniforms[tr.s.ramp]), Qr.bindBuffers(this.vertexBuffers, null, Sr), Qr.setAlphaMode((0, mr.g)(fr)), Qr.drawArraysType(pr.d.MATERIAL_TriangleStripDrawMode, 0, 4, jr), Sr._bindTexture("gpuParticleRecords", null)
        }
        return Qr.setAlphaMode(pr.d.ALPHA_DISABLE), jr
      }
      linkPair(rr) {
        this.shader = rr, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(rr, ""), this.multiplyEffect = this.createEffect(rr, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(rr) {
        const Sr = rr.getPipelineContext(),
          Qr = this.gl();
        Qr && null === this.pairFailure && (!Sr || Sr.isParallelCompiled && !Sr.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Sr.isParallelCompiled && Sr.program && (Qr.getProgramParameter(Sr.program, Qr.LINK_STATUS) || this.programFailed(function(rr, Sr, Qr) {
          if (rr.isContextLost()) return qr;
          for (const [Zr, Wr] of [
              ["VERTEX SHADER", Sr.vertexShader],
              ["FRAGMENT SHADER", Sr.fragmentShader]
            ]) {
            const Sr = Wr && !rr.getShaderParameter(Wr, rr.COMPILE_STATUS) ? rr.getShaderInfoLog(Wr) : null;
            if (Sr) return `${Zr} ${Sr}`
          }
          return rr.getProgramInfoLog(Qr) || "a program did not link"
        }(Qr, Sr, Sr.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(rr) {
        return rr === mr.d ? this.multiplyEffect : this.effect
      }
      createEffect(rr, Sr) {
        return this.engine.createEffect(rr, [], Lr, lr, Sr, void 0, void 0, ((Sr, Qr) => {
          var Zr;
          rr === this.shader && this.programFailed(null !== (Zr = this.gl()) && void 0 !== Zr && Zr.isContextLost() ? qr : function(rr) {
            const Sr = rr.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(Sr) ? "a program failed, its log not in this browser's stack" : Sr.replace(/^Error: /, "")
          }(Qr))
        }))
      }
      programFailed(rr) {
        this.linkingPair ? this.pairFailure ??= rr : this.fail(rr)
      }
      fail(rr) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${rr}`), this.reportFailure(rr, !1);
          for (const rr of this.Dt.pT.slice()) rr instanceof Hr && rr.disposeOnStop && rr.dispose()
        }
      }
    }
    var gr = Qr(41725);
    class Cr extends gr.d {
      createEffect() {
        const rr = super.createEffect(...arguments);
        return Gr(rr), Mr.has(rr) || (Mr.add(rr), rr.onCompileObservable.add((() => {
          Gr(rr)
        }))), rr
      }
    }
    const Mr = new WeakSet;

    function Gr(rr) {
      rr._vertexSourceCodeBeforeMigration = "", rr._fragmentSourceCodeBeforeMigration = ""
    }
    var kr = Qr(42047),
      Ar = Qr(42966),
      Vr = Qr(41834),
      ir = Qr(42018),
      wr = Qr(42014),
      cr = Qr(41934),
      Fr = Qr(43039),
      or = Qr(39021),
      br = Qr(54135),
      Jr = Qr(54138),
      Dr = Qr(54146),
      dr = Qr(41960),
      sr = Qr(3959),
      ur = Qr(38889),
      rS = Qr(42155),
      SS = Qr(38979),
      QS = Qr(38913);

    function ZS(rr) {
      if (rr.visibility < 1 || !rr.isVisible || !rr.isEnabled() || rr.metadata[QS.f] || !rr.isReady()) return !0;
      const Sr = rr.jT;
      if (!Sr || 0 === Sr.length) return !0;
      for (let Qr = 0; Qr < Sr.length; Qr++) {
        const Zr = Sr[Qr],
          Wr = Zr.iU();
        if (!Wr || !Wr.isReadyForSubMesh(rr, Zr, !1)) return !0
      }
      return !1
    }
    class WS {
      constructor(rr, Sr) {
        this.gm = rr, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Sr.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Yx(rr) {
        var Sr;
        const Qr = this.armed;
        if (this.armed = !1, this.vis = null, !Qr) return !1;
        this.culled = 0;
        const {
          gm: Zr
        } = this, Wr = null === (Sr = Zr.qB) || void 0 === Sr ? void 0 : Sr.visibility;
        if (!Wr || !rr || Zr.Ox.Wt) return !1;
        if (!(Zr.qx.PWr[0] >= SS.f)) return !1;
        const ar = rr.getProjectionMatrix().m;
        if (0 !== ar[15]) return !1;
        const jr = Zr.um,
          Ir = rr.globalPosition,
          fr = this.eye;
        return fr[0] = Ir.x + jr[0], fr[1] = Ir.y + jr[1], fr[2] = Ir.z + jr[2], !!Wr.eyeClear(fr[0], fr[1], fr[2], rr.minZ, ar, Zr.qx) && (this.vis = Wr, this.passable.clear(), this.count = 0, !0)
      }
      see(rr, Sr) {
        const Qr = this.count++;
        if (Qr === this.cellSlots.length) {
          const rr = new Int32Array(2 * Qr);
          rr.set(this.cellSlots), this.cellSlots = rr
        }
        this.cellSlots[Qr] = Sr, this.meshes[Qr] = rr
      }
      seeThrough(rr) {
        this.passable.add(rr)
      }
      finish(rr, Sr) {
        const {
          vis: Qr,
          eye: Zr,
          meshes: Wr,
          count: ar,
          cellSlots: jr
        } = this, {
          qx: Ir
        } = this.gm, [fr, Er] = Ir.PWr, pr = null !== Qr && Qr.update(Zr[0], Zr[1], Zr[2], Ir.zx, fr, Er, this.passable);
        let xr = 0;
        for (let mr = 0; mr < ar; mr++) {
          const Zr = Wr[mr];
          if (pr) {
            const rr = 3 * jr[mr];
            if (rr >= 0 && !Qr.isDrawn(Sr[rr], Sr[rr + 1], Sr[rr + 2])) {
              xr++;
              continue
            }
          }
          dr.h.prototype.push.call(rr, Zr)
        }
        Wr.fill(null, 0, ar), this.count = 0, this.vis = null, this.culled = xr
      }
    }
    var aS = Qr(38963),
      jS = Qr(38898),
      IS = Qr(42130),
      fS = Qr(54151),
      ES = Qr(42134),
      pS = Qr(42060);
    let xS = 1;
    const mS = new WeakSet;

    function NS() {
      return xS
    }

    function US() {
      xS = xS >= 1073741823 ? 1 : xS + 1
    }

    function tS(rr) {
      const Sr = rr.metadata;
      if (!Sr || !0 !== Sr[ur.p]) return;
      const Qr = Sr[ur.v],
        Zr = null === Qr || void 0 === Qr ? void 0 : Qr._noaStamps;
      if (!Qr || !Zr) return;
      const Wr = Qr.entries.indexOf(rr);
      Wr >= 0 && (Zr[Wr] = 0)
    }

    function hS(rr) {
      const Sr = rr.jT;
      for (let Qr = 0; Qr < Sr.length; Qr++) {
        const rr = Sr[Qr].iU();
        if (rr && !rr.isFrozen) return !1
      }
      for (let Qr = 0; Qr < Sr.length; Qr++) {
        const rr = Sr[Qr].iU();
        rr && mS.add(rr)
      }
      return !0
    }
    let zS = !1;
    const YS = new WeakSet;

    function nS(rr, Sr) {
      const Qr = rr[Sr];
      if ("function" !== typeof Qr) throw new Error(`terrainDrawState: Babylon has no ${Sr} to hook`);
      return Qr
    }

    function eS(rr, Sr, Qr, Zr, Wr) {
      const ar = Qr.qx.zx,
        jr = new Map;
      let Ir = 0;
      const fr = new WS(Qr, rr),
        Er = new aS.c(ar, rr.MU());
      ! function(rr) {
        if (YS.has(rr) || (YS.add(rr), rr.onContextLostObservable.add(US), rr.CU.add(US)), zS) return;
        zS = !0;
        const Sr = fS.b.prototype,
          Qr = nS(Sr, "_markSubMeshesAsDirty");
        Object.assign(Sr, {
          _markSubMeshesAsDirty(rr) {
            Qr.call(this, rr), tS(this)
          }
        });
        const Zr = nS(pS.c.prototype, "_syncParentEnabledState");
        Object.assign(pS.c.prototype, {
          _syncParentEnabledState() {
            Zr.call(this), tS(this)
          }
        });
        const Wr = nS(ES.b.prototype, "resetDrawCache");
        ES.b.prototype.resetDrawCache = function(rr, Sr) {
          Wr.call(this, rr, Sr), tS(this.getMesh())
        };
        const ar = IS.d.prototype,
          jr = nS(ar, "markDirty");
        ar.markDirty = function(rr) {
          jr.call(this, rr), mS.has(this) && US()
        };
        const Ir = nS(ar, "_markAllSubMeshesAsDirty");
        Object.assign(ar, {
          _markAllSubMeshesAsDirty(rr) {
            Ir.call(this, rr), mS.has(this) && US()
          }
        })
      }(rr.MU());
      let pr = new Float64Array(384),
        xr = new Int32Array(64),
        mr = new Uint8Array(64),
        Nr = new Float64Array(64),
        Ur = new Int32Array(192),
        tr = 0;
      const hr = [],
        zr = new Float64Array(24),
        Yr = () => {
          const rr = hr.pop();
          return void 0 !== rr ? (xr[rr] = 0, rr) : (tr === xr.length && (pr = KS(pr, new Float64Array(2 * pr.length)), xr = KS(xr, new Int32Array(2 * xr.length)), mr = KS(mr, new Uint8Array(2 * mr.length)), Nr = KS(Nr, new Float64Array(2 * Nr.length)), Ur = KS(Ur, new Int32Array(2 * Ur.length))), tr++)
        },
        nr = rr => {
          const Sr = 6 * rr._noaSlot,
            Qr = rr.GWr[0],
            Zr = rr.GWr[1];
          pr[Sr] = Qr.x, pr[Sr + 1] = Qr.y, pr[Sr + 2] = Qr.z, pr[Sr + 3] = Zr.x, pr[Sr + 4] = Zr.y, pr[Sr + 5] = Zr.z
        },
        er = (rr, Sr, Qr) => {
          if (!Qr) return fr.see(rr, -1), !1;
          const Zr = ZS(rr);
          return Zr && fr.seeThrough(Nr[Sr]), fr.see(rr, Sr), !Zr
        };
      let Kr = -1;
      return rr.getActiveMeshCandidates = () => {
        const Qr = rr.frustumPlanes,
          Zr = Sr._selectionContent;
        Zr.reset(), (Qr => {
          const Zr = rr.frustumPlanes;
          Ir = Ir + 1 | 0 || 1;
          const Wr = Sr.blocks,
            ar = fr.Yx(rr.activeCamera),
            jr = ar && !0;
          if (jr) {
            const Sr = rr.MU().currentRenderPassId;
            Sr !== Kr && (Kr = Sr, US())
          }
          const Er = NS(),
            Nr = jr && !1;
          Wr.length > 0 && function(rr, Sr) {
            for (let Qr = 0; Qr < 6; Qr++) {
              const Zr = rr[Qr],
                Wr = Zr.normal;
              Sr[4 * Qr] = Wr.x, Sr[4 * Qr + 1] = Wr.y, Sr[4 * Qr + 2] = Wr.z, Sr[4 * Qr + 3] = Zr.d
            }
          }(Zr, zr);
          const tr = pr,
            hr = xr,
            Yr = mr;
          for (let rr = 0; rr < Wr.length; rr++) {
            const Sr = Wr[rr];
            if (!rS.d.IsInFrustum(Sr.GWr, Zr)) continue;
            const pr = Sr.entries;
            {
              const rr = Sr._noaSlots,
                Zr = Sr._noaStamps,
                Wr = Sr._noaTerrain;
              for (let Sr = 0; Sr < pr.length; Sr++) {
                const xr = rr[Sr];
                if (hr[xr] !== Ir && (hr[xr] = Ir, Yr[xr] = yS(tr, 6 * xr, zr) ? 1 : 0), 0 === Yr[xr]) continue;
                const mr = pr[Sr];
                if (jr && Zr[Sr] === Er) Nr && 1 === Wr[Sr] && ZS(mr) && 0, fr.see(mr, 1 === Wr[Sr] ? xr : -1);
                else if (jr) {
                  Zr[Sr] = Er;
                  const rr = !0 === mr.metadata[jS.n];
                  Wr[Sr] = rr ? 1 : 0;
                  const Qr = er(mr, xr, rr);
                  !rr || Qr && hS(mr) || (Zr[Sr] = 0)
                } else ar ? er(mr, xr, !0 === mr.metadata[jS.n]) : dr.h.prototype.push.call(Qr, mr)
              }
              continue
            }
          }
          ar && fr.finish(Qr, Ur)
        })(Zr), Er.apply(Zr, rr.activeCamera);
        const ar = Sr.MWr;
        for (let rr = 0; rr < ar.length; rr++) {
          const Sr = ar[rr];
          Sr.isEnabled() && dr.h.prototype.push.call(Zr, Sr)
        }
        return Wr(Zr, Qr), Zr
      }, {
        kWr: () => fr.culled,
        XWr: (rr, Sr) => {
          const Wr = Math.floor(Sr[0] / ar),
            Ir = Math.floor(Sr[1] / ar),
            fr = Math.floor(Sr[2] / ar),
            Er = `${Wr}|${Ir}|${fr}`;
          let pr = jr.get(Er);
          if (!pr) {
            const rr = [0, 0, 0];
            Qr.sSr([Wr * ar - 1, Ir * ar - 1, fr * ar - 1], null, rr), pr = Object.assign(Zr(rr, ar + 2), {
              AWr: Er,
              VWr: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Yr()
            }), nr(pr), Nr[pr._noaSlot] = (0, sr.g)(Wr, Ir, fr), Ur[3 * pr._noaSlot] = Wr, Ur[3 * pr._noaSlot + 1] = Ir, Ur[3 * pr._noaSlot + 2] = fr, jr.set(Er, pr)
          }
          pr.VWr++, rr.metadata[ur.w] = pr
        },
        rM: rr => {
          const Sr = rr.metadata[ur.w];
          Sr && (Sr.VWr--, Sr.VWr <= 0 && (jr.delete(Sr.AWr), hr.push(Sr._noaSlot)), rr.metadata[ur.w] = null)
        },
        CWr: (rr, Sr) => {
          const Qr = rr,
            Zr = Sr.metadata[ur.w];
          (Qr._noaSlots ??= []).push(Zr._noaSlot), (Qr._noaStamps ??= []).push(0), (Qr._noaTerrain ??= []).push(0), Qr.entries.push(Sr)
        },
        removeEntry: (rr, Sr) => {
          const Qr = rr,
            Zr = Qr.entries,
            Wr = Zr.indexOf(Sr);
          if (Wr < 0) return;
          const ar = Qr._noaSlots,
            jr = Qr._noaStamps,
            Ir = Qr._noaTerrain,
            fr = Zr.length - 1;
          Zr[Wr] = Zr[fr], ar[Wr] = ar[fr], jr[Wr] = jr[fr], Ir[Wr] = Ir[fr], Zr.pop(), ar.pop(), jr.pop(), Ir.pop()
        },
        Prr: rr => {
          for (const Sr of jr.values()) {
            Sr.lWr.iWr(rr), Sr.LWr.iWr(rr);
            for (const Qr of Sr.GWr) Qr.iWr(rr);
            nr(Sr)
          }
        }
      }
    }

    function KS(rr, Sr) {
      return Sr.set(rr), Sr
    }

    function yS(rr, Sr, Qr) {
      const Zr = rr[Sr],
        Wr = rr[Sr + 1],
        ar = rr[Sr + 2],
        jr = rr[Sr + 3],
        Ir = rr[Sr + 4],
        fr = rr[Sr + 5];
      for (let Er = 0; Er < 24; Er += 4) {
        const rr = Qr[Er],
          Sr = Qr[Er + 1],
          pr = Qr[Er + 2];
        if (!(rr * (rr >= 0 ? jr : Zr) + Sr * (Sr >= 0 ? Ir : Wr) + pr * (pr >= 0 ? fr : ar) + Qr[Er + 3] >= 0)) return !1
      }
      return !0
    }
    var BS = Qr(39270);
    class TS {
      constructor(rr, Sr) {
        var Qr = rr.Dt;
        Qr.CZr(new Dr.b(Qr));
        var Zr = new br.e(fr);
        Qr.cWr = Zr, Zr.blocks = [];
        var Wr, ar = {},
          Ir = [];
        this.textPlanes = Ir, this.kWr = () => Wr.kWr(), this.Prr = rr => {
          pr(Zr, rr), Wr.Prr(rr)
        }, this.XWr = (Sr, Qr, jr) => {
          if (!Sr.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Sr.metadata[ur.v] && !Sr.metadata[ur.l]) {
            if (!Qr) {
              var fr = Zr.MWr;
              if (Sr.metadata[ur.C] && !Sr.parent) {
                fr = Ir;
                var pr = Sr.mG().oWr;
                Sr.metadata[ur.E] = pr.center.length() + pr.radius, Sr.GU = !0
              }
              return fr.push(Sr), Sr.metadata[ur.h] = fr, void(Sr.metadata[ur.l] = !0)
            }
            var mr = Math.floor(jr[0] / Er),
              Nr = Math.floor(jr[1] / Er),
              Ur = Math.floor(jr[2] / Er),
              tr = mr + "|" + Nr + "|" + Ur,
              hr = ar[tr];
            if (!hr) {
              var zr = [mr * Er, Nr * Er, Ur * Er],
                Yr = [0, 0, 0];
              rr.gm.sSr(zr, null, Yr), hr = xr(Yr, Er), Zr.blocks.push(hr), ar[tr] = hr, hr.AWr = tr
            }
            Wr.XWr(Sr, jr), Wr.CWr(hr, Sr), hr.VWr = (hr.VWr || 0) + 1, Sr.metadata[ur.v] = hr, Sr.metadata[ur.p] = !0, Sr.GU = !0
          }
        }, this.rM = rr => {
          if (rr.metadata) {
            rr.metadata[ur.l] && ((0, sr.m)(rr.metadata[ur.h], rr), rr.metadata[ur.l] = !1), rr.metadata[ur.h] === Ir && (rr.GU = !1), rr.metadata[ur.h] = void 0, rr.metadata[ur.E] = void 0;
            var Sr = rr.metadata[ur.v];
            Sr && Sr.entries && (rr.metadata[ur.p] && Wr.removeEntry(Sr, rr), Sr.VWr--, Sr.VWr <= 0 && (delete ar[Sr.AWr], (0, sr.m)(Zr.blocks, Sr))), Wr.rM(rr), rr.metadata[ur.v] = null, rr.metadata[ur.p] = !1
          }
        }, this.xrr = function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (rr.metadata[ur.v]) {
            if (rr.metadata[ur.p] === Sr) return;
            var Qr = rr.metadata[ur.v];
            Qr && Qr.entries && (Sr ? Wr.CWr(Qr, rr) : Wr.removeEntry(Qr, rr)), rr.metadata[ur.p] = Sr
          } else {
            if (rr.metadata[ur.l] === Sr) return;
            var ar = rr.metadata[ur.h] || Zr.MWr;
            Sr ? ar.push(rr) : (0, sr.m)(ar, rr), rr.metadata[ur.l] = Sr
          }
        };
        var fr = () => {},
          Er = Sr * rr.gm.qx.zx,
          pr = (rr, Sr) => {
            rr.blocks.forEach((rr => {
              rr.lWr.iWr(Sr), rr.LWr.iWr(Sr), rr.GWr.forEach((rr => rr.iWr(Sr))), rr.blocks && pr(rr, Sr)
            }))
          },
          xr = (rr, Sr) => {
            var Qr = new jr.kU(rr[0], rr[1], rr[2]),
              Zr = new jr.kU(rr[0] + Sr, rr[1] + Sr, rr[2] + Sr);
            return new Jr.d(Qr, Zr, void 0, void 0, void 0, fr)
          };
        Wr = eS(Qr, Zr, rr.gm, xr, ((rr, Sr) => {
          for (var Qr = 0; Qr < Ir.length; Qr++) {
            var Zr = Ir[Qr];
            Zr.isEnabled(!1) && ((0, BS.d)(Zr, Sr) && dr.h.prototype.push.call(rr, Zr))
          }
        }))
      }
    }

    function vS(rr) {
      const {
        holderPosition: Sr,
        holderRotation: Qr,
        S_: Zr,
        fov: Wr,
        near: ar,
        far: jr
      } = rr.model.r_, Ir = rr.Sar;
      Ir.position.Hrr(Sr[0], Sr[1], Sr[2]), Ir.rotation.Hrr(Qr[0], Qr[1], Qr[2]);
      const fr = rr.camera;
      fr.position.Hrr(Zr[0], Zr[1], Zr[2]), fr.fov = Wr, fr.minZ = ar, fr.maxZ = jr
    }

    function OS(rr) {
      const Sr = rr.MU(),
        Qr = Sr,
        Zr = Qr._gl;
      if (!Zr || Qr.tt < 2 || Sr.JZr || Zr.getParameter(Zr.DEPTH_BITS) < 24) return !1;
      const Wr = rr._renderingManager,
        ar = Wr.getRenderingGroup(-1),
        jr = Wr.getRenderingGroup(0),
        Ir = ir.c.prototype.render;
      return ar.render = function(rr, Sr, Qr, Zr, Wr, ar, fr, Er, pr) {
        (rr || jr._empty) && Ir.call(this, rr, Sr, Qr, Zr, Wr, ar, fr, Er, pr)
      }, jr.render = function(rr, Qr, Wr, jr) {
        let fr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Er = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xr = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          mr = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nr = arguments.length > 8 ? arguments[8] : void 0;
        rr ? Ir.call(this, rr, Qr, Wr, jr, fr, Er, xr, mr, Nr) : (Sr.setAlphaMode(pr.d.ALPHA_DISABLE), Ir.call(this, null, !1, !1, jr, fr, Er, xr, !1), ar._empty || (Zr.depthRange(1, 1), Ir.call(ar, null, Qr, Wr, jr, fr, Er, xr, mr, Nr), Zr.depthRange(0, 1)), Ir.call(this, null, Qr, Wr, jr, !1, !1, !1, mr, Nr))
      }, !0
    }

    function LS(rr, Sr) {
      return [Sr, or.f].map(((Sr, Qr) => {
        const Zr = new Wr.b("light", jr.kU.FromArray(Sr), rr);
        return Zr.diffuse = ar.Color3.FromArray([1, 1, 1]), Zr.specular = ar.Color3.FromArray([1, 1, 1]), Zr.intensity = or.e[Qr], Zr
      }))
    }
    class lS extends fr.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(rr) {
        var Sr;
        this.heldTexture = rr, this.particleTexture = null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.mirror) && void 0 !== Sr ? Sr : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let rr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        rr && (this.particleTexture = null, (0, Er.A)(this.heldTexture), this.heldTexture = null), super.dispose(rr, Sr, Qr)
      }
    }

    function XS(rr, Sr, Qr, Zr) {
      return Sr && !Sr.failed ? Sr.QG(Qr, Zr) : new lS(Qr, Zr, rr)
    }
    const PS = new WeakMap;

    function HS(rr, Sr, Qr) {
      var Zr;
      let Wr = null !== (Zr = PS.get(rr)) && void 0 !== Zr ? Zr : null;
      return !Wr && rr.MU().tt >= 2 && (Wr = new Rr(rr, (Sr => {
        console.error(`Particle programs failed in scene ${rr.uid}: ${Sr}`)
      })), PS.set(rr, Wr)), XS(rr, Wr, Sr, Qr)
    }
    const qS = Zr.d.Zero();
    const RS = {
      EZr: function(rr, Sr) {
        return new Cr(rr, Sr.aZr, {
          preserveDrawingBuffer: Sr.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      Iar: function(rr, Sr) {
        ! function(rr, Sr, Qr) {
          const Zr = new cr.c(rr.engine);
          rr.Dt = Zr, Zr.detachControl(), Zr.autoClear = !1, wr.b.MIN_RENDERINGGROUPS = -1;
          for (let ar = wr.b.MIN_RENDERINGGROUPS; ar <= 1; ar++) Zr.setRenderingOrder(ar, ir.c.PainterSortCompare, ir.c.PainterSortCompare, ir.c.PainterSortCompare);
          Zr.setRenderingAutoClearDepthStencil(0, !1), Vr.b.Enabled = !1, rr.dWr = new TS(rr, Math.round(Sr.sWr)), rr.Sar = new Ar.b("camHolder", Zr), rr.camera = new kr.b("camera", new jr.kU(0, 0, 0), Zr), rr.camera.parent = rr.Sar, vS(rr), (0, or.g)(rr, ((rr, Sr, Qr) => (0, Fr.j)(Sr, Qr, rr.Dt))), Zr.clearColor = ar.d.FromArray(Sr.clearColor), Zr.ambientColor = ar.Color3.FromArray(Sr.ambientColor);
          const Wr = Qr(Zr, Sr.Zar);
          Zr.onNewLightAddedObservable.add((rr => {
            Wr.some((Sr => Sr === rr)) || console.error(`Light "${rr.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Zr.skipPointerMovePicking = !0
        }(rr, Sr, LS), OS(rr.Dt)
      },
      uWr: vS,
      setBabylonFog: function(rr, Sr, Qr, Zr) {
        const Wr = rr.Dt;
        Wr.fogMode = 3, Wr.fogStart = Sr, Wr.fogEnd = Qr, Wr.fogColor.set(Zr[0], Zr[1], Zr[2])
      },
      xar: function(rr, Sr, Qr) {
        return rr.engine.tt >= 2 && !rr.Nar && (rr.Nar = new Rr(rr.Dt, rr.Uar)), XS(rr.Dt, rr.Nar, Sr, Qr)
      },
      Yar: function(rr, Sr) {
        rr.Dt.pT.forEach((Qr => {
          if (Qr instanceof Hr) return void Qr.Prr(Sr, rr.gm.um);
          const Zr = Qr;
          if (Zr.emitter.getConnectedParticleSystems)
            for (const rr of Zr._particles) rr.position.set(rr.position.x - Sr[0], rr.position.y - Sr[1], rr.position.z - Sr[2]);
          else {
            if (!Zr.worldOffset) throw new Error("Particle system has no world offset");
            Zr.worldOffset.x = -rr.gm.um[0], Zr.worldOffset.y = -rr.gm.um[1], Zr.worldOffset.z = -rr.gm.um[2]
          }
        }))
      },
      linesFromArrays: function(rr, Sr, Qr) {
        const Zr = new Ir.d(Sr, rr.Dt, null, void 0, void 0, !1);
        return (0, Fr.g)(Sr, Qr, rr.Dt, Zr), Zr
      },
      dt: tS,
      har: function(rr, Sr) {
        return qS.origin.iH(Sr.origin), qS.direction.iH(Sr.direction), qS.length = Sr.length, qS.epsilon = Sr.epsilon, qS.har(rr, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42995: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ir,
      h: () => nr,
      l: () => Dr
    });
    var Zr = Qr(42100),
      Wr = Qr(43001),
      ar = Qr(43041),
      jr = Qr(43008),
      Ir = Qr(39324),
      fr = Qr(39332),
      Er = Qr(39337),
      pr = Qr(39342),
      xr = Qr(38788),
      mr = Qr(38747),
      Nr = Qr(38754),
      Ur = Qr(43012),
      tr = Qr(38715),
      hr = Qr(38736),
      zr = Qr(38702);

    function Yr(rr, Sr) {
      return Object.assign((function(rr, Qr, Zr, Wr) {
        return Sr(this.featureState, rr, Qr, Zr, Wr)
      }), {
        Wx: rr
      })
    }

    function nr(rr) {
      const Sr = class extends Ur.e {
          constructor(Sr, Qr) {
            const Zr = (0, hr.Y)(Sr),
              Wr = Zr && (0, hr.v)(Zr, rr.name);
            for (var ar = arguments.length, jr = new Array(ar > 2 ? ar - 2 : 0), Ir = 2; Ir < ar; Ir++) jr[Ir - 2] = arguments[Ir];
            super(Sr, rr.name, rr.priority, Wr ? Wr.defines : rr.defines(...jr), !1), this.featureState = void 0, this.featureState = Qr, this._pluginManager._addPlugin(this), this._enable(!0), (0, hr.x)(this._material, rr, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return rr.className
          }
          isCompatible(rr) {
            return rr === zr.d.GLSL || rr === zr.d.WGSL
          }
        },
        Qr = (0, tr.h)(rr);
      for (const [Zr, Wr] of Object.entries(tr.c)) {
        const ar = rr[Zr];
        if (ar) {
          const rr = Qr[Zr];
          Object.defineProperty(Sr.prototype, Wr, {
            value: Yr(ar, rr),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Sr
    }
    class er extends(nr(Ir.c)) {}
    var Kr = Qr(41725),
      yr = Qr(43021),
      Br = Qr(43027);

    function Tr(rr, Sr, Qr) {
      return (0, Br.f)(Qr, Sr.urls, (() => async function(rr, Sr, Qr) {
        const {
          width: Zr
        } = rr[0].getSize(), Wr = rr.map(((rr, Qr) => {
          var Wr;
          const ar = Math.round(rr.getSize().height / Zr),
            jr = null === Sr || void 0 === Sr ? void 0 : Sr[Qr];
          return {
            pixels: jr && jr.byteLength === Zr * Zr * ar * 4 ? jr : null !== (Wr = vr.get(rr.getInternalTexture())) && void 0 !== Wr ? Wr : rr._readPixelsSync(),
            layers: ar
          }
        })), ar = Math.min(Qr.MU().getCaps().texture2DArrayMaxLayerCount, 256), Ir = (0, Br.b)(Wr, Zr, ar).map((rr => {
          let {
            pixels: Sr,
            layers: Wr
          } = rr;
          return {
            atlas: new yr.b(Sr, Zr, Zr, Wr, Kr.d.TEXTUREFORMAT_RGBA, Qr, !0, !1, jr.e.NEAREST_NEAREST_MIPLINEAR),
            layers: Wr
          }
        }));
        return rr.forEach(((rr, Sr) => {
          const Zr = rr.getInternalTexture();
          vr.has(Zr) || (! function(rr, Sr) {
            const Qr = Sr.createRawTexture(new Uint8Array(4), 1, 1, Kr.d.TEXTUREFORMAT_RGBA, !1, !1, jr.e.NEAREST_SAMPLINGMODE);
            rr._hardwareTexture.release(), Sr.unbindAllTextures(), Qr._swapAndDie(rr, !1)
          }(Zr, Qr.MU()), vr.set(Zr, Wr[Sr].pixels))
        })), Ir
      }(rr, Sr.pixels, Qr)))
    }
    const vr = new WeakMap;
    var Or = Qr(39345);
    class Lr extends(nr(fr.j)) {
      constructor(rr, Sr) {
        super(rr, Sr), this.loaded = new Set, this.mirrors = void 0, this.mirrors = Sr.textures.map((rr => rr.mirror)), Sr.useWebGL2 && !Sr.imagesPerAtlas.length && Sr.textureAtlases.splice(0, Sr.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((rr, Sr) => {
          rr.onLoadObservable.add((rr => {
            this.setTextureArrayData(rr, Sr).catch((rr => {
              console.error(`Failed to build the texture arrays, at atlas ${Sr}`, rr)
            }))
          }))
        })), (0, Or.i)(Sr, rr.shaderLanguage)
      }
      async setTextureArrayData(rr, Sr) {
        const Qr = this.featureState,
          {
            width: Zr,
            height: Wr
          } = rr.getSize(),
          ar = this._material.shaderLanguage;
        if (!Qr.useWebGL2) return void(0, Or.e)(this._material, Qr, Sr, Zr, Math.round(Wr / Zr), ar);
        if (this.loaded.add(Sr), this.loaded.size < this.mirrors.length) return;
        const jr = await Tr(this.mirrors, Qr.sources, this._material.eC());
        (0, Or.c)(this._material, Qr, jr, Zr, ar)
      }
    }
    var lr = Qr(43031),
      Xr = Qr(42147),
      Pr = Qr(38555),
      Hr = Qr(43037),
      qr = Qr(42256),
      Rr = Qr(42134),
      gr = Qr(42966),
      Cr = Qr(39002),
      Mr = Qr(43039);
    class Gr extends lr.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const kr = {
      Mesh: Hr.d,
      TransformNode: gr.b,
      Dp: lr.d,
      VertexBuffer: lr.g,
      BoundingInfo: Xr.c,
      kU: Pr.kU,
      ArenaBuffer: Gr,
      SubMesh: Rr.b,
      VertexData: qr.b,
      MirroredGeometry: Mr.d,
      meshFromArrays: Mr.g,
      plainMeshFromArrays: Mr.j
    };
    (0, Cr.g)(kr);
    var Ar = Qr(38831);
    class Vr extends(nr(pr.e)) {
      constructor(rr, Sr) {
        if (super(rr, Sr), rr instanceof Zr.StandardMaterial && Sr.dirLightCount > 0) {
          const Sr = rr,
            Qr = Sr._blockDirtyMechanism;
          Sr._blockDirtyMechanism = !0, rr.disableLighting = !0, Sr._blockDirtyMechanism = Qr;
          const Zr = (0, hr.Y)(rr);
          Zr && (Zr.disableLighting = !0, (0, hr.W)(Zr))
        }(0, Ar.j)(rr)
      }
      dispose(rr) {
        (0, Ar.m)(this._material), super.dispose(rr)
      }
    }

    function ir(rr, Sr) {
      if (!(Sr instanceof Zr.StandardMaterial) || Sr.specularTexture) return;
      const {
        r: Qr,
        g: Wr,
        b: ar
      } = Sr.specularColor;
      0 === Qr && 0 === Wr && 0 === ar && (rr.SPECULARTERM = !1)
    }(0, pr.d)({
      disableUnusedSpecularTerm: ir
    });
    var wr = Qr(38762),
      cr = Qr(39013);
    const Fr = new RegExp(`^#define ${Er.d}\\s*$`, "m");
    class or extends(nr(Er.k)) {
      constructor(rr, Sr) {
        super(rr, Sr), this.vU = !1, Sr.ditherOnlyWhileFading && (cr.e.add(rr), this.prewarmDitherTwins(rr))
      }
      prewarmDitherTwins(rr) {
        const Sr = new WeakSet;
        rr.onEffectCreatedObservable.add((Qr => {
          let {
            effect: Zr,
            subMesh: Wr
          } = Qr;
          if (this.featureState.prewarmingDither || Sr.has(Zr)) return;
          Sr.add(Zr);
          const ar = null === Wr || void 0 === Wr ? void 0 : Wr.getMesh();
          ar && !Fr.test(Zr.defines) && rr.eC().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ar) || Sr.delete(Zr)
          }))
        }))
      }
      prewarmDither(rr) {
        if (this.vU || rr.Dv()) return !1;
        const Sr = new Rr.b(0, 0, 0, 0, 0, rr, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(rr, Sr)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Sr.effect
      }
      dispose(rr) {
        this.vU = !0, super.dispose(rr)
      }
    }
    class br extends(nr(xr.d)) {}
    const Jr = new Map;

    function Dr(rr, Sr) {
      Jr.set(rr, Sr)
    }
    Dr(Ir.c, er), Dr(fr.j, Lr), Dr(Er.k, or), Dr(pr.e, Vr), Dr(xr.d, br), (0, mr.d)({
      create: (rr, Sr) => {
        const Qr = new Zr.StandardMaterial(rr.name, Sr);
        return (0, wr.p)(rr, Qr), Qr.detailMap._pluginDefineNames
      },
      write: (rr, Sr, Qr) => {
        (0, wr.V)(rr.mirror, Sr, Qr)
      },
      addFeature: (rr, Sr, Qr) => {
        const Zr = Jr.get(Sr.feature);
        if (!Zr) throw new Error(`${Sr.feature.name} has no plugin class (registerPluginClass)`);
        new Zr(rr.mirror, Sr.state, ...Qr)
      },
      texture: (rr, Sr, Qr) => {
        let {
          url: Zr,
          noMipmap: Wr,
          invertY: ar,
          samplingMode: Ir,
          data: fr,
          sets: Er
        } = Qr;
        if (!fr) {
          const Qr = new jr.e(Zr, Sr, Wr, ar, Ir);
          return Object.assign(Qr, Er), void(0, Nr.H)(rr, Qr)
        }
        const pr = {},
          xr = new Promise(((rr, Sr) => {
            pr.onLoad = rr, pr.onError = (rr, Qr) => {
              Sr(new Error(`${fr.context}: ${(null===Qr||void 0===Qr?void 0:Qr.message)||rr||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: mr,
            bytes: Ur,
            label: tr
          } = fr,
          hr = {
            noMipmap: Wr,
            invertY: !1,
            samplingMode: Ir,
            ...pr,
            mimeType: mr,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          zr = new jr.e(null, Sr, hr);
        wr.s.set(zr, xr), Object.assign(zr, Er), zr.updateURL(Zr, Ur);
        const Yr = zr.getInternalTexture();
        Yr && (Yr.label = tr), rr.uvSet = zr.coordinatesIndex, rr.matrix.set((0, wr.N)(zr)), (0, Nr.H)(rr, zr)
      },
      cube: (rr, Sr, Qr) => {
        let {
          rootUrl: Zr,
          files: ar,
          noMipmap: Ir,
          luminance: fr
        } = Qr;
        const {
          samplingMode: Er
        } = rr.sampler, pr = Er === (0, Nr.w)(Ir) ? null : () => {
          (0, wr.K)(xr, Er)
        }, xr = new Wr.d(Zr, Sr, null, Ir, ar, pr, null, (0, Nr.s)(fr));
        xr.coordinatesMode = jr.e.SKYBOX_MODE, (0, Nr.H)(rr, xr)
      },
      canvas: (rr, Sr, Qr) => {
        let {
          width: Zr,
          height: Wr,
          mipmaps: Ir,
          samplingMode: fr,
          hasAlpha: Er = !1,
          wrap: pr = jr.e.CLAMP_ADDRESSMODE
        } = Qr;
        const xr = new ar.e(Sr, {
          width: Zr,
          height: Wr
        }, rr, Ir, fr);
        xr.hasAlpha = Er, xr.wrapU = pr, xr.wrapV = pr;
        const mr = (0, wr.B)(xr);
        return (0, wr.F)(mr, xr), mr
      }
    })
  },
  43039: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => pr,
      g: () => xr,
      j: () => mr
    });
    var Zr = Qr(43031),
      Wr = Qr(41919),
      ar = Qr(42147),
      jr = Qr(42265),
      Ir = Qr(43037),
      fr = Qr(42256),
      Er = Qr(38879);
    class pr extends jr.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (rr, Sr) => {
          this.releaseUnlessInstanced(Sr)
        }, this.onLinked = null
      }
      link(rr) {
        var Sr;
        (0, Er.i)(rr), this.model = rr, null === (Sr = this.onLinked) || void 0 === Sr || Sr.call(this, rr)
      }
      relink() {
        this.release();
        const rr = [];
        for (const Wr of Object.values(this._vertexBuffers))
          if (!Wr.getIsInstanced()) {
            const {
              byteOffset: Sr,
              byteStride: Qr,
              type: Zr,
              normalized: ar
            } = Wr;
            rr.push({
              kind: Wr.getKind(),
              data: Wr.getData(),
              offset: Sr,
              stride: Qr,
              components: Wr.getSize(),
              glType: Zr,
              isNormalized: ar
            })
          } const Sr = this._indices.length ? this._indices : null,
          {
            minimum: Qr,
            maximum: Zr
          } = this.extend;
        this.link(new Er.f(rr, Sr, this.getTotalVertices(), new Float64Array(Qr.OWr()), new Float64Array(Zr.OWr())))
      }
      copy(rr) {
        if (!this.model) return super.copy(rr);
        const Sr = new pr(rr, this.eC()),
          Qr = this.yar(void 0, !0);
        Qr && Sr.setIndices(Qr);
        let jr = !1;
        for (const ar in this._vertexBuffers) {
          const rr = this._vertexBuffers[ar],
            Qr = rr.getData();
          if (!Qr) continue;
          const Ir = rr.getSize(),
            {
              type: fr,
              byteOffset: Er,
              byteStride: pr,
              normalized: xr
            } = rr;
          jr ||= rr.isUpdatable();
          const mr = rr.getIsInstanced() ? (Qr instanceof Array ? 4 * Qr.length : Qr.byteLength) / pr : this.getTotalVertices(),
            Nr = (0, Wr.n)(Qr, Ir, fr, Er, pr, mr, !0),
            Ur = {
              updatable: rr.isUpdatable(),
              stride: Ir,
              type: fr,
              normalized: xr,
              takeBufferOwnership: !0,
              instanced: rr.getIsInstanced()
            };
          Sr.setVerticesBuffer(new Zr.g(this.MU(), Nr, ar, Ur), mr)
        }
        return Sr._updatable = jr, Sr._boundingInfo = new ar.c(this.extend.minimum, this.extend.maximum), Sr.relink(), Sr
      }
      static mergeMeshes(rr, Sr, Qr, Zr, Wr, ar) {
        const fr = rr[0].eC(),
          Er = new Ir.d(rr[0].name + "_merged", fr),
          xr = new pr(jr.e.RandomId(), fr, void 0, !1, Er);
        try {
          if (!Ir.d.MergeMeshes(rr, Sr, Qr, Er, Wr, ar)) return Er.dispose(), null
        } catch (mr) {
          throw Er.dispose(), mr
        }
        return xr.relink(), Er
      }
      removeVerticesData(rr) {
        this.releaseUnlessInstanced(rr), super.removeVerticesData(rr)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(rr) {
        var Sr;
        rr && null !== (Sr = this.getVertexBuffer(rr)) && void 0 !== Sr && Sr.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Er.r)(this.model), this.model = null)
      }
    }

    function xr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ir.d(rr, Qr);
      const Wr = (0, Er.h)(Sr),
        {
          positions: ar,
          normals: xr,
          uvs: mr,
          indices: Nr,
          named: Ur = {}
        } = Sr,
        tr = new fr.b;
      tr.positions = ar, tr.normals = null !== xr && void 0 !== xr ? xr : null, tr.uvs = null !== mr && void 0 !== mr ? mr : null, tr.indices = Nr;
      const hr = new pr(jr.e.RandomId(), Qr, tr, !1, Zr);
      for (const {
          kind: jr,
          components: Ir
        }
        of Wr.vertexAttributes) jr in Ur && Zr.setVerticesData(jr, Ur[jr], !1, Ir);
      return hr.link(Wr), Zr
    }

    function mr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wr = new Ir.d(rr, Qr),
        {
          positions: ar,
          normals: jr,
          uvs: Er,
          indices: pr
        } = Sr;
      return Object.assign(new fr.b, {
        positions: ar,
        normals: jr,
        uvs: Er,
        indices: pr
      }).applyToMesh(Wr, Zr), Wr
    }
  },
  40276: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      f: () => jr,
      j: () => ar,
      m: () => Wr,
      o: () => Ir,
      p: () => Er,
      r: () => pr,
      s: () => fr
    });
    const Zr = 16,
      Wr = 256,
      ar = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      jr = 16,
      Ir = 256,
      fr = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + Zr,
        color2: 12 + 5 * Zr,
        Lh: 12 + 9 * Zr,
        remap: 12 + 13 * Zr
      },
      Er = 12 + 17 * Zr,
      pr = [fr.colorCount, fr.velocityCount, fr.remapCount, fr.ramp]
  },
  40274: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => hr,
      d: () => nr
    });
    var Zr = Qr(38599),
      Wr = Qr(38555),
      ar = Qr(38754),
      jr = Qr(40276);
    class Ir {
      constructor(rr) {
        this.sx = rr, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const Sr = Math.max(1, rr);
        this.records = new Float32Array(Sr * jr.f), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(Sr).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(rr) {
        const Sr = this.sx;
        for (let Qr = 0; Qr < Sr; Qr++) {
          const Qr = this.cursor;
          if (this.cursor = Qr + 1 === Sr ? 0 : Qr + 1, this.deaths[Qr] <= rr) return Qr
        }
        return -1
      }
      written(rr, Sr) {
        this.deaths[rr] = Sr, rr >= this.highWater && (this.highWater = rr + 1), this.uploadFrom < 0 ? (this.uploadFrom = rr, this.uploadTo = rr + 1) : rr >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, rr + 1) : this.wrapTo = Math.max(this.wrapTo, rr + 1)
      }
      shiftTimes(rr) {
        const Sr = this.records,
          Qr = this.highWater * jr.f;
        for (let Zr = jr.j.time; Zr < Qr; Zr += jr.f) Sr[Zr] -= rr;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(rr) {
        this.uploadFrom >= 0 && (rr(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && rr(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(rr) {
        let Sr = 0;
        for (let Qr = 0; Qr < this.highWater; Qr++) this.deaths[Qr] > rr && Sr++;
        return Sr
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var fr = Qr(38679),
      Er = Qr(40284),
      pr = Qr(40286),
      xr = Qr(40293);
    class mr {
      constructor() {
        this.particleEmitterType = new pr.b, this.texture = null, this.blendMode = xr.f, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = Wr.kU.Zero(), this.worldOffset = new Wr.kU(0, 0, 0), this.color1 = new fr.d(1, 1, 1, 1), this.color2 = new fr.d(1, 1, 1, 1), this.colorDead = new fr.d(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var rr;
        return null !== (rr = Nr(this).direction1) && void 0 !== rr ? rr : Wr.kU.Zero()
      }
      set direction1(rr) {
        const Sr = Nr(this);
        Sr.direction1 && (Sr.direction1 = rr)
      }
      get direction2() {
        var rr;
        return null !== (rr = Nr(this).direction2) && void 0 !== rr ? rr : Wr.kU.Zero()
      }
      set direction2(rr) {
        const Sr = Nr(this);
        Sr.direction2 && (Sr.direction2 = rr)
      }
      get minEmitBox() {
        var rr;
        return null !== (rr = Nr(this).minEmitBox) && void 0 !== rr ? rr : Wr.kU.Zero()
      }
      set minEmitBox(rr) {
        const Sr = Nr(this);
        Sr.minEmitBox && (Sr.minEmitBox = rr)
      }
      get maxEmitBox() {
        var rr;
        return null !== (rr = Nr(this).maxEmitBox) && void 0 !== rr ? rr : Wr.kU.Zero()
      }
      set maxEmitBox(rr) {
        const Sr = Nr(this);
        Sr.maxEmitBox && (Sr.maxEmitBox = rr)
      }
      createBoxEmitter(rr, Sr, Qr, Zr) {
        const Wr = new pr.b;
        return this.particleEmitterType = Wr, Wr.direction1 = rr, Wr.direction2 = Sr, Wr.minEmitBox = Qr, Wr.maxEmitBox = Zr, Wr
      }
      addColorGradient(rr, Sr, Qr) {
        return this.colorGradients ??= [], this.colorGradients.push(new Er.d(rr, Sr, Qr)), this.colorGradients.sort(Ur), this
      }
      removeColorGradient(rr) {
        return tr(this.colorGradients, rr), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(rr, Sr, Qr) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new Er.i(rr, Sr, Qr)), this.velocityGradients.sort(Ur), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(rr, Sr, Qr) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new Er.i(rr, Sr, Qr)), this.colorRemapGradients.sort(Ur), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(rr, Sr) {
        return this.rampGradients ??= [], this.rampGradients.push(new Er.f(rr, Sr)), this.rampGradients.sort(Ur), this
      }
      removeRampGradient(rr) {
        return tr(this.rampGradients, rr), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function Nr(rr) {
      return rr.particleEmitterType
    }

    function Ur(rr, Sr) {
      return rr.gradient < Sr.gradient ? -1 : rr.gradient > Sr.gradient ? 1 : 0
    }

    function tr(rr, Sr) {
      const Qr = rr ? rr.findIndex((rr => rr.gradient === Sr)) : -1;
      Qr >= 0 && rr.splice(Qr, 1)
    }
    class hr extends mr {
      constructor(rr, Sr, Qr) {
        super(), this.name = rr, this.host = Qr, this.onDispose = zr, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = Wr.kU.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.vU = !1, this.emitterMatrix = new Wr.Matrix, this.inverseEmitterMatrix = new Wr.Matrix, this.spawned = {
          position: new Wr.kU,
          direction: new Wr.kU
        }, this.ring = new Ir(Sr)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(rr) {
        var Sr;
        null === (Sr = this.emitterDisposed) || void 0 === Sr || Sr.remove(), this.emitterDisposed = null, this.emitterValue = rr, rr && er(rr) && (this.emitterDisposed = rr.lC.add((() => {
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
        return !this.vU && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var rr;
        let Sr = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.vU || (this.vU = !0, null === (rr = this.emitterDisposed) || void 0 === rr || rr.remove(), this.emitterDisposed = null, Sr && ((0, ar.A)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(rr) {
        const Sr = this.emitter;
        return !!Sr && !(er(Sr) && !Sr.isEnabled()) && this.animate(rr)
      }
      animate(rr) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const Sr = this.updateSpeed * rr;
        let Qr;
        return this.manualEmitCount > -1 ? (Qr = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (Qr = this.emitRate * Sr | 0, this.newPartsExcess += this.emitRate * Sr - Qr), this.newPartsExcess > 1 && (Qr += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (Qr = 0), this.alive = this.liveUntil > this.time, this.time += Sr, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), Qr > 0 && this.spawn(Qr), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.vU && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var rr;
        return this.started = !1, null === (rr = this.onAnimationEnd) || void 0 === rr || rr.call(this), !!this.vU || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(rr, Sr) {
        rr[Sr] = this.anchor[0] + this.shift[0] + this.worldOffset.x, rr[Sr + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, rr[Sr + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      Prr(rr, Sr) {
        this.emitterValue && er(this.emitterValue) ? (this.shift[0] -= rr[0], this.shift[1] -= rr[1], this.shift[2] -= rr[2]) : this.worldOffset.set(-Sr[0], -Sr[1], -Sr[2])
      }
      spawn(rr) {
        var Sr, Qr;
        const ar = this.emitterValue,
          Ir = er(ar) ? ar.getWorldMatrix() : Wr.Matrix.TranslationToRef(ar.x, ar.y, ar.z, this.emitterMatrix);
        Ir.invertToRef(this.inverseEmitterMatrix);
        const {
          position: fr,
          direction: Er
        } = this.spawned, pr = this.spawned, xr = this.ring, mr = this.liveUntil <= this.time;
        mr && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, xr.restart());
        const {
          records: Nr,
          recordBits: Ur
        } = xr, tr = jr.j, hr = null === (Sr = this.getColorGradients()) || void 0 === Sr ? void 0 : Sr[0], zr = hr ? hr.color1 : this.color1, Yr = hr ? null !== (Qr = hr.color2) && void 0 !== Qr ? Qr : hr.color1 : this.color2;
        for (let Wr = 0; Wr < rr; Wr++) {
          const rr = xr.freeSlot(this.time);
          if (rr < 0) break;
          const Sr = (0, Zr.RandomRange)(this.minLifeTime, this.maxLifeTime),
            Qr = (0, Zr.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(Ir, fr, pr, !1), this.particleEmitterType.startDirectionFunction(Ir, Er, pr, !1, this.inverseEmitterMatrix), 0 === Qr ? Er.set(0, 0, 0) : Er.scaleInPlace(Qr);
          const ar = (0, Zr.RandomRange)(this.minSize, this.maxSize);
          mr && 0 === Wr && (this.anchor[0] = fr.x, this.anchor[1] = fr.y, this.anchor[2] = fr.z);
          const hr = rr * jr.f;
          Nr[hr + tr.position] = fr.x - this.anchor[0] - this.shift[0], Nr[hr + tr.position + 1] = fr.y - this.anchor[1] - this.shift[1], Nr[hr + tr.position + 2] = fr.z - this.anchor[2] - this.shift[2], Nr[hr + tr.time] = this.time - this.epoch, Nr[hr + tr.direction] = Er.x, Nr[hr + tr.direction + 1] = Er.y, Nr[hr + tr.direction + 2] = Er.z, Nr[hr + tr.lifeTime] = Sr, Nr[hr + tr.size] = ar, Ur[hr + tr.seed] = 4294967296 * Math.random() >>> 0;
          const nr = Math.random();
          Nr[hr + tr.colour] = zr.r + (Yr.r - zr.r) * nr, Nr[hr + tr.colour + 1] = zr.g + (Yr.g - zr.g) * nr, Nr[hr + tr.colour + 2] = zr.b + (Yr.b - zr.b) * nr, Nr[hr + tr.colour + 3] = zr.a + (Yr.a - zr.a) * nr;
          const er = this.time + Sr;
          er > this.liveUntil && (this.liveUntil = er), xr.written(rr, er)
        }
      }
    }

    function zr() {}
    const Yr = 5;

    function nr(rr, Sr) {
      const Qr = [];
      let Zr = 0;
      for (const Wr of rr) Wr.isReady() || (Zr++, Qr.length < Yr && Qr.push(`${Sr} particle system ${Wr.name}`));
      return Zr > Qr.length && Qr.push(`${Zr-Qr.length} more ${Sr} particle systems`), Qr
    }

    function er(rr) {
      return void 0 !== rr.position
    }
  },
  54130: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => hr,
      f: () => Ir,
      j: () => jr,
      l: () => Er
    });
    var Zr = Qr(38679),
      Wr = Qr(40284),
      ar = Qr(40276);

    function jr(rr, Sr, Qr, Zr) {
      const Wr = ar.s;
      Sr.fill(0), rr.gravity.toArray(Sr, Wr.gravity), rr.colorDead.toArray(Sr, Wr.colorDead), Qr[Wr.ramp] = rr.useRampGradients ? 1 : 0;
      const jr = rr.getColorGradients(),
        Ir = mr(rr, jr, "colour", Zr);
      Qr[Wr.colorCount] = Ir;
      for (let ar = 0; ar < Ir; ar++) {
        var fr;
        const rr = jr[Nr(jr, ar)];
        Sr[Wr.colorPositions + ar] = rr.gradient, rr.color1.toArray(Sr, Wr.color1 + 4 * ar), (null !== (fr = rr.color2) && void 0 !== fr ? fr : rr.color1).toArray(Sr, Wr.color2 + 4 * ar)
      }
      const Er = rr.getVelocityGradients(),
        pr = mr(rr, Er, "Lh", Zr);
      Qr[Wr.velocityCount] = pr;
      for (let ar = 0; ar < pr; ar++) Yr(Sr, Wr.Lh + 4 * ar, Er[Nr(Er, ar)]);
      const xr = rr.useRampGradients ? rr.getColorRemapGradients() : null,
        Ur = mr(rr, xr, "colour remap", Zr);
      Qr[Wr.remapCount] = Ur;
      for (let ar = 0; ar < Ur; ar++) Yr(Sr, Wr.remap + 4 * ar, xr[Nr(xr, ar)])
    }

    function Ir() {
      return {
        key: [],
        texels: new Uint8Array(4 * ar.m)
      }
    }
    const fr = [];

    function Er(rr, Sr) {
      return pr(rr, fr), !zr(fr, Sr.key) && (Sr.key.length = 0, Sr.key.push(...fr), Sr.key.length > 0 && function(rr, Sr) {
        for (let Qr = 0; Qr < ar.m; Qr++) Wr.j.GetCurrentGradient(Qr / ar.m, rr, ((rr, Sr, Qr) => {
          Zr.Color3.LerpToRef(rr.color, Sr.color, Qr, xr)
        })), Sr[4 * Qr] = 255 * xr.r, Sr[4 * Qr + 1] = 255 * xr.g, Sr[4 * Qr + 2] = 255 * xr.b, Sr[4 * Qr + 3] = 255
      }(rr.getRampGradients(), Sr.texels), !0)
    }

    function pr(rr, Sr) {
      Sr.length = 0;
      const Qr = rr.useRampGradients ? rr.getRampGradients() : null;
      if (null !== Qr && void 0 !== Qr && Qr.length) {
        Sr.push(Qr.length);
        for (const rr of Qr) Sr.push(rr.gradient, rr.color.r, rr.color.g, rr.color.b)
      }
    }
    const xr = new Zr.Color3;

    function mr(rr, Sr, Qr, Zr) {
      return Sr ? Sr.length > ar.b ? (Zr(`particleStops:${Qr}`, `GPU particles use the first 2 and last ${ar.b-2} of more than ${ar.b} ${Qr} gradient stops (${rr.name})`), ar.b) : Sr.length : 0
    }

    function Nr(rr, Sr) {
      return Sr < 2 || rr.length <= ar.b ? Sr : rr.length - ar.b + Sr
    }
    const Ur = new Float32Array(ar.p),
      tr = new Uint32Array(Ur.buffer);

    function hr(rr, Sr, Qr) {
      return jr(rr, Ur, tr, Qr), Sr && zr(tr, Sr) ? null : tr.slice()
    }

    function zr(rr, Sr) {
      if (rr.length !== Sr.length) return !1;
      for (let Qr = 0; Qr < rr.length; Qr++)
        if (rr[Qr] !== Sr[Qr]) return !1;
      return !0
    }

    function Yr(rr, Sr, Qr) {
      var Zr;
      rr[Sr] = Qr.gradient, rr[Sr + 1] = Qr.factor1, rr[Sr + 2] = null !== (Zr = Qr.factor2) && void 0 !== Zr ? Zr : Qr.factor1
    }
  },
  43027: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr) {
      const Zr = Sr * Sr * 4,
        Wr = rr[0].layers,
        ar = Wr * (rr.length - 1) + rr[rr.length - 1].layers,
        jr = new Uint8Array(ar * Zr);
      rr.forEach(((Sr, Qr) => {
        const ar = Qr + 1 < rr.length ? Math.min(Sr.layers, Wr) : Sr.layers;
        jr.set(new Uint8Array(Sr.pixels.buffer, Sr.pixels.byteOffset, ar * Zr), Qr * Wr * Zr)
      }));
      const Ir = Math.max(1, Math.min(ar, Qr || ar));
      if (Ir === ar) return [{
        pixels: jr,
        layers: ar
      }];
      const fr = [];
      for (let Er = 0; Er < ar; Er += Ir) {
        const rr = Math.min(ar, Er + Ir);
        fr.push({
          pixels: jr.slice(Er * Zr, rr * Zr),
          layers: rr - Er
        })
      }
      return fr
    }
    Qr.d(Sr, {
      b: () => Zr,
      f: () => ar
    });
    const Wr = new WeakMap;

    function ar(rr, Sr, Qr) {
      var Zr, ar;
      const jr = null !== (Zr = Wr.get(rr)) && void 0 !== Zr ? Zr : new Map;
      Wr.set(rr, jr);
      const Ir = null !== (ar = jr.get(Sr[0])) && void 0 !== ar ? ar : [];
      jr.set(Sr[0], Ir);
      const fr = Ir.find((rr => rr.urls.length === Sr.length && rr.urls.every(((rr, Qr) => rr === Sr[Qr]))));
      if (fr) return fr.built;
      const Er = {
        urls: [...Sr],
        built: Qr()
      };
      return Ir.push(Er), Er.built.catch((() => {
        Ir.splice(Ir.indexOf(Er), 1)
      })), Er.built
    }
  },
  40293: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      f: () => Wr,
      g: () => fr,
      h: () => xr
    });
    var Zr = Qr(38677);
    const Wr = 0,
      ar = 3,
      jr = 4,
      Ir = new Map([
        [Wr, Zr.d.ALPHA_ONEONE],
        [1, Zr.d.ALPHA_COMBINE],
        [2, Zr.d.ALPHA_ADD],
        [ar, Zr.d.ALPHA_MULTIPLY],
        [-1, Zr.d.ALPHA_SUBTRACT]
      ]);

    function fr(rr) {
      var Sr;
      return null !== (Sr = Ir.get(rr)) && void 0 !== Sr ? Sr : rr
    }
    const Er = [ar, 2],
      pr = new Map;

    function xr(rr) {
      if (rr === jr) return Er;
      let Sr = pr.get(rr);
      return Sr || (Sr = [rr], pr.set(rr, Sr)), Sr
    }
  },
  54128: (rr, Sr, Qr) => {
    function Zr() {
      let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Sr = new Set;
      return (Qr, Zr) => {
        Sr.has(Qr) || (Sr.add(Qr), console.warn(rr + Zr))
      }
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);