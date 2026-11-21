export const id = 0;
export const ids = [0];
export const modules = {
  41099: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CapeMaterialPlugin: () => vd,
      HueTintMaterialPlugin: () => xd,
      LifeformMaterialPlugin: () => qd,
      OverlayMaterialPlugin: () => Bd
    });
    var pd = kd(41102),
      Nd = kd(38202);
    class Wd extends((0, pd.g)(Nd.c)) {}(0, pd.k)(Nd.c, Wd);
    var Pd = kd(37337);
    class Zd extends((0, pd.g)(Pd.h)) {}(0, pd.k)(Pd.h, Zd);
    var gd = kd(38054);
    class Cd extends((0, pd.g)(gd.f)) {}(0, pd.k)(gd.f, Cd);
    var Kd = kd(37613),
      od = kd(40251),
      ld = kd(37610);
    class Qd extends((0, pd.g)(ld.f)) {
      constructor(dd, Jd, kd) {
        super(dd, Jd, kd), (0, Kd.j)(dd)
      }
      dispose(dd) {
        (0, Kd.l)(this._material), super.dispose(dd)
      }
    }(0, pd.k)(ld.f, Qd), (0, ld.j)({
      disableUnusedSpecularTerm: pd.e,
      isLightingDisabled: dd => dd instanceof od.StandardMaterial && dd.disableLighting
    });
    var Ld = kd(38817);
    class Od extends((0, pd.g)(Ld.f)) {}(0, pd.k)(Ld.f, Od);
    var ed = kd(38947),
      Rd = kd(37446),
      Id = kd(38317),
      Gd = kd(37389);
    class vd extends((0, pd.g)(ed.e)) {}(0, pd.k)(ed.e, vd);
    class xd extends((0, pd.g)(Rd.b)) {}(0, pd.k)(Rd.b, xd);
    class qd extends((0, pd.g)(Id.n)) {}(0, pd.k)(Id.n, qd);
    class Bd extends((0, pd.g)(Gd.d)) {}(0, pd.k)(Gd.d, Bd)
  },
  41522: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      addBabylonLights: () => IJ,
      default: () => xJ
    });
    var pd = kd(41531),
      Nd = (kd(39941), kd(41095), kd(40475), kd(41543)),
      Wd = kd(39791),
      Pd = kd(37438),
      Zd = kd(37245),
      gd = kd(41553),
      Cd = kd(41556),
      Kd = kd(37386),
      od = (kd(41102), kd(41566)),
      ld = kd(41561),
      Qd = kd(38853),
      Ld = kd(41572),
      Od = kd(39829),
      ed = kd(38832);
    const Rd = "gpuParticles",
      Id = ed.p,
      Gd = dd => dd / 4,
      vd = dd => `gpuParticleSystem[${dd>>2}].${"xyzw"[3&dd]}`,
      xd = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${ed.c}\n#define COLOR_POSITIONS ${Gd(Id.colorPositions)}\n#define COLOR1 ${Gd(Id.color1)}\n#define COLOR2 ${Gd(Id.color2)}\n#define VELOCITY ${Gd(Id.hO)}\n#define REMAP ${Gd(Id.remap)}\n#define RECORDS_PER_ROW ${ed.i}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${ed.k/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${vd(Id.gravity)}, ${vd(Id.gravity+1)}, ${vd(Id.gravity+2)}); }\nint colorCount() { return int(${vd(Id.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Gd(Id.colorDead)}]; }\nint velocityCount() { return int(${vd(Id.velocityCount)}); }\nint remapCount() { return int(${vd(Id.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Od.c.ShadersStore[`${Rd}VertexShader`] = xd, Od.c.ShadersStore[`${Rd}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const qd = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Bd = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var sd = kd(38826),
      ad = kd(41579);
    class Md extends sd.c {
      constructor(dd, Jd, kd, pd) {
        super(dd, Jd, kd), this.renderer = kd, this.BO = pd, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(ed.k), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, ad.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (dd, Jd) => {
          const {
            engine: kd
          } = this, pd = kd._gl;
          kd._bindTextureDirectly(pd.TEXTURE_2D, this.records, !0), kd._unpackFlipY(!1);
          const Nd = this.ring.recordBits;
          for (let Wd = dd; Wd < Jd;) {
            const dd = Math.floor(Wd / ed.i),
              kd = Math.min(Jd, (dd + 1) * ed.i);
            pd.texSubImage2D(pd.TEXTURE_2D, 0, Wd % ed.i * 4, dd, 4 * (kd - Wd), 1, pd.RGBA_INTEGER, pd.UNSIGNED_INT, Nd, Wd * ed.d), Wd = kd
          }
          kd._bindTextureDirectly(pd.TEXTURE_2D, null)
        }, this.id = dd;
        const Nd = pd.eL();
        this.engine = Nd;
        const Wd = Math.max(1, Jd),
          Pd = Math.min(Wd, ed.i);
        this.records = Nd.createRawTexture(null, 4 * Pd, Math.ceil(Wd / Pd), od.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, od.e.TEXTURE_NEAREST_SAMPLINGMODE, null, od.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.BO.getAnimationRatio() || 1;
        const Jd = this.BO.getFrameId();
        if (Jd === this.animatedFrame) return !1;
        const kd = super.animate(dd);
        return kd && (this.animatedFrame = Jd, this.ring.takeUploads(this.uploadSlots)), kd
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(dd) {
        (0, ad.g)(this, this.uniforms, this.uniformBits, dd);
        for (const kd of ed.m) this.uniforms[kd] = this.uniformBits[kd];
        var Jd;
        (0, ad.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Jd = this.ramp) || void 0 === Jd || Jd.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = ld.d.CreateRGBATexture(this.rampTexels.texels, ed.f, 1, this.BO, !1, !1, od.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var dd;
        this.records.dispose(), null === (dd = this.ramp) || void 0 === dd || dd.dispose(), this.ramp = null
      }
    }
    class Fd {
      constructor(dd) {
        this.BO = dd, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Ld.c)(), this.engine = dd.eL(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = ld.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, dd, !1, !1, od.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      FX(dd, Jd) {
        const kd = ed.i * this.engine.getCaps().maxTextureSize;
        Jd > kd && this.warnOnce(`capacity:${dd}`, `particle system ${dd} holds ${kd} particles, not ${Jd}: its records texture's limit`);
        const pd = new Md(dd, Math.min(Jd, kd), this, this.BO);
        return this.BO.addParticleSystem(pd), pd
      }
      canDraw(dd) {
        var Jd, kd;
        if (this.failed || null === (Jd = dd.texture) || void 0 === Jd || null === (kd = Jd.mirror) || void 0 === kd || !kd.isReady()) return !1;
        for (const pd of (0, Qd.o)(dd.blendMode))
          if (!this.effectFor(pd).isReady()) return !1;
        return !0
      }
      disposeStopped(dd) {
        this.BO._toBeDisposed.push(dd)
      }
      remove(dd) {
        this.BO.removeParticleSystem(dd), dd.releaseGl()
      }
      render(dd) {
        var Jd;
        if (!dd.isReady() || !dd.hasLiveParticles()) return 0;
        const {
          engine: kd,
          BO: pd,
          frame: Nd
        } = this;
        dd.prepareDraw(this.warnOnce), dd.drawOffset(Nd, 0), Nd[3] = dd.drawTime();
        const Wd = dd.ring.drawStart(),
          Pd = dd.ring.drawCount(),
          Zd = null !== (Jd = dd.ramp) && void 0 !== Jd ? Jd : this.whiteRamp;
        kd.setState(!1);
        for (const gd of (0, Qd.o)(dd.blendMode)) {
          const Jd = this.effectFor(gd);
          kd.enableEffect(Jd), Jd.setTexture("gpuParticleTexture", dd.texture.mirror), Jd.setTexture("gpuParticleRampTexture", Zd), Jd._bindTexture("gpuParticleRecords", dd.records), Jd.setMatrix("gpuParticleView", pd.getViewMatrix()), Jd.setMatrix("gpuParticleProjection", pd.getProjectionMatrix()), Jd.setFloatArray4("gpuParticleSystem", dd.uniforms), Jd.setFloat4("gpuParticleFrame", Nd[0], Nd[1], Nd[2], Nd[3]), Jd.setFloat2("gpuParticleRange", Wd, Pd), Jd.setFloat("gpuParticleRamp", dd.uniforms[ed.p.ramp]), kd.bindBuffers(this.vertexBuffers, null, Jd), kd.setAlphaMode((0, Qd.k)(gd)), kd.drawArraysType(od.e.MATERIAL_TriangleStripDrawMode, 0, 4, Pd), Jd._bindTexture("gpuParticleRecords", null)
        }
        return kd.setAlphaMode(od.e.ALPHA_DISABLE), Pd
      }
      awaitLink(dd) {
        const Jd = dd.getPipelineContext(),
          kd = this.engine._gl;
        !this.failed && kd && (!Jd || Jd.isParallelCompiled && !Jd.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Jd.isParallelCompiled && Jd.program && (kd.getProgramParameter(Jd.program, kd.LINK_STATUS) || this.fail(kd.getProgramInfoLog(Jd.program) || "a program did not link")))
      }
      effectFor(dd) {
        return dd === Qd.d ? this.multiplyEffect : this.effect
      }
      createEffect(dd) {
        return this.engine.createEffect(Rd, [], qd, Bd, dd, void 0, void 0, ((dd, Jd) => {
          this.fail(Jd)
        }))
      }
      fail(dd) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${dd}`);
          for (const dd of this.BO.Qv.slice()) dd instanceof Md && dd.disposeOnStop && dd.dispose()
        }
      }
    }
    var Yd = kd(40189),
      md = kd(41090),
      bd = kd(39915),
      Sd = kd(40139),
      jd = kd(40131),
      Xd = kd(40054),
      fd = kd(41144),
      nd = kd(37814),
      Ud = kd(41583),
      yd = kd(41589),
      Dd = kd(41594),
      Td = kd(40080),
      Ed = kd(2745),
      cd = kd(37697),
      hd = kd(40294),
      rd = kd(37781),
      ud = kd(37722);

    function td(dd) {
      if (dd.visibility < 1 || !dd.isVisible || !dd.isEnabled() || dd.metadata[ud.e] || !dd.isReady()) return !0;
      const Jd = dd.rG;
      if (!Jd || 0 === Jd.length) return !0;
      for (let kd = 0; kd < Jd.length; kd++) {
        const pd = Jd[kd],
          Nd = pd.qL();
        if (!Nd || !Nd.isReadyForSubMesh(dd, pd, !1)) return !0
      }
      return !1
    }
    class Vd {
      constructor(dd, Jd) {
        this.Jl = dd, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Jd.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      ZQ(dd) {
        var Jd;
        const kd = this.armed;
        if (this.armed = !1, this.vis = null, !kd) return !1;
        this.culled = 0;
        const {
          Jl: pd
        } = this, Nd = null === (Jd = pd.mG) || void 0 === Jd ? void 0 : Jd.visibility;
        if (!Nd || !dd || pd.UL.yL) return !1;
        if (!(pd.Vo.Spd[0] >= rd.e)) return !1;
        const Wd = dd.getProjectionMatrix().m;
        if (0 !== Wd[15]) return !1;
        const Pd = pd.Rl,
          Zd = dd.globalPosition,
          gd = this.eye;
        return gd[0] = Zd.x + Pd[0], gd[1] = Zd.y + Pd[1], gd[2] = Zd.z + Pd[2], !!Nd.eyeClear(gd[0], gd[1], gd[2], dd.minZ, Wd, pd.Vo) && (this.vis = Nd, this.passable.clear(), this.count = 0, !0)
      }
      see(dd, Jd) {
        const kd = this.count++;
        if (kd === this.cellSlots.length) {
          const dd = new Int32Array(2 * kd);
          dd.set(this.cellSlots), this.cellSlots = dd
        }
        this.cellSlots[kd] = Jd, this.meshes[kd] = dd
      }
      seeThrough(dd) {
        this.passable.add(dd)
      }
      finish(dd, Jd) {
        const {
          vis: kd,
          eye: pd,
          meshes: Nd,
          count: Wd,
          cellSlots: Pd
        } = this, {
          Vo: Zd
        } = this.Jl, [gd, Cd] = Zd.Spd, Kd = null !== kd && kd.update(pd[0], pd[1], pd[2], Zd.Xdd, gd, Cd, this.passable);
        let od = 0;
        for (let ld = 0; ld < Wd; ld++) {
          const pd = Nd[ld];
          if (Kd) {
            const dd = 3 * Pd[ld];
            if (dd >= 0 && !kd.isDrawn(Jd[dd], Jd[dd + 1], Jd[dd + 2])) {
              od++;
              continue
            }
          }
          Td.h.prototype.push.call(dd, pd)
        }
        Nd.fill(null, 0, Wd), this.count = 0, this.vis = null, this.culled = od
      }
    }
    var zd = kd(37760),
      Hd = kd(37712),
      wd = kd(40278),
      Ad = kd(41599),
      dJ = kd(40282),
      JJ = kd(40205);
    let kJ = 1;
    const pJ = new WeakSet;

    function NJ() {
      return kJ
    }

    function WJ() {
      kJ = kJ >= 1073741823 ? 1 : kJ + 1
    }

    function PJ(dd) {
      const Jd = dd.metadata;
      if (!Jd || !0 !== Jd[cd.p]) return;
      const kd = Jd[cd.u],
        pd = null === kd || void 0 === kd ? void 0 : kd._noaStamps;
      if (!kd || !pd) return;
      const Nd = kd.entries.indexOf(dd);
      Nd >= 0 && (pd[Nd] = 0)
    }

    function ZJ(dd) {
      const Jd = dd.rG;
      for (let kd = 0; kd < Jd.length; kd++) {
        const dd = Jd[kd].qL();
        if (dd && !dd.isFrozen) return !1
      }
      for (let kd = 0; kd < Jd.length; kd++) {
        const dd = Jd[kd].qL();
        dd && pJ.add(dd)
      }
      return !0
    }
    let gJ = !1;
    const CJ = new WeakSet;

    function KJ(dd, Jd) {
      const kd = dd[Jd];
      if ("function" !== typeof kd) throw new Error(`terrainDrawState: Babylon has no ${Jd} to hook`);
      return kd
    }

    function oJ(dd, Jd, kd, pd, Nd) {
      const Wd = kd.Vo.Xdd,
        Pd = new Map;
      let Zd = 0;
      const gd = new Vd(kd, dd),
        Cd = new zd.e(Wd, dd.eL());
      ! function(dd) {
        if (CJ.has(dd) || (CJ.add(dd), dd.onContextLostObservable.add(WJ), dd.onContextRestoredObservable.add(WJ)), gJ) return;
        gJ = !0;
        const Jd = Ad.b.prototype,
          kd = KJ(Jd, "_markSubMeshesAsDirty");
        Object.assign(Jd, {
          _markSubMeshesAsDirty(dd) {
            kd.call(this, dd), PJ(this)
          }
        });
        const pd = KJ(JJ.c.prototype, "_syncParentEnabledState");
        Object.assign(JJ.c.prototype, {
          _syncParentEnabledState() {
            pd.call(this), PJ(this)
          }
        });
        const Nd = KJ(dJ.c.prototype, "resetDrawCache");
        dJ.c.prototype.resetDrawCache = function(dd, Jd) {
          Nd.call(this, dd, Jd), PJ(this.getMesh())
        };
        const Wd = wd.b.prototype,
          Pd = KJ(Wd, "markDirty");
        Wd.markDirty = function(dd) {
          Pd.call(this, dd), pJ.has(this) && WJ()
        };
        const Zd = KJ(Wd, "_markAllSubMeshesAsDirty");
        Object.assign(Wd, {
          _markAllSubMeshesAsDirty(dd) {
            Zd.call(this, dd), pJ.has(this) && WJ()
          }
        })
      }(dd.eL());
      let Kd = new Float64Array(384),
        od = new Int32Array(64),
        ld = new Uint8Array(64),
        Qd = new Float64Array(64),
        Ld = new Int32Array(192),
        Od = 0;
      const ed = [],
        Rd = new Float64Array(24),
        Id = () => {
          const dd = ed.pop();
          return void 0 !== dd ? (od[dd] = 0, dd) : (Od === od.length && (Kd = lJ(Kd, new Float64Array(2 * Kd.length)), od = lJ(od, new Int32Array(2 * od.length)), ld = lJ(ld, new Uint8Array(2 * ld.length)), Qd = lJ(Qd, new Float64Array(2 * Qd.length)), Ld = lJ(Ld, new Int32Array(2 * Ld.length))), Od++)
        },
        Gd = dd => {
          const Jd = 6 * dd._noaSlot,
            kd = dd.Dpd[0],
            pd = dd.Dpd[1];
          Kd[Jd] = kd.x, Kd[Jd + 1] = kd.y, Kd[Jd + 2] = kd.z, Kd[Jd + 3] = pd.x, Kd[Jd + 4] = pd.y, Kd[Jd + 5] = pd.z
        },
        vd = (dd, Jd, kd) => {
          if (!kd) return gd.see(dd, -1), !1;
          const pd = td(dd);
          return pd && gd.seeThrough(Qd[Jd]), gd.see(dd, Jd), !pd
        };
      let xd = -1;
      return dd.getActiveMeshCandidates = () => {
        const kd = dd.frustumPlanes,
          pd = Jd._selectionContent;
        pd.reset(), (kd => {
          const pd = dd.frustumPlanes;
          Zd = Zd + 1 | 0 || 1;
          const Nd = Jd.blocks,
            Wd = gd.ZQ(dd.activeCamera),
            Pd = Wd && !0;
          if (Pd) {
            const Jd = dd.eL().currentRenderPassId;
            Jd !== xd && (xd = Jd, WJ())
          }
          const Cd = NJ(),
            Qd = Pd && !1;
          Nd.length > 0 && function(dd, Jd) {
            for (let kd = 0; kd < 6; kd++) {
              const pd = dd[kd],
                Nd = pd.normal;
              Jd[4 * kd] = Nd.x, Jd[4 * kd + 1] = Nd.y, Jd[4 * kd + 2] = Nd.z, Jd[4 * kd + 3] = pd.d
            }
          }(pd, Rd);
          const Od = Kd,
            ed = od,
            Id = ld;
          for (let dd = 0; dd < Nd.length; dd++) {
            const Jd = Nd[dd];
            if (!hd.b.IsInFrustum(Jd.Dpd, pd)) continue;
            const Kd = Jd.entries;
            {
              const dd = Jd._noaSlots,
                pd = Jd._noaStamps,
                Nd = Jd._noaTerrain;
              for (let Jd = 0; Jd < Kd.length; Jd++) {
                const od = dd[Jd];
                if (ed[od] !== Zd && (ed[od] = Zd, Id[od] = QJ(Od, 6 * od, Rd) ? 1 : 0), 0 === Id[od]) continue;
                const ld = Kd[Jd];
                if (Pd && pd[Jd] === Cd) Qd && 1 === Nd[Jd] && td(ld) && 0, gd.see(ld, 1 === Nd[Jd] ? od : -1);
                else if (Pd) {
                  pd[Jd] = Cd;
                  const dd = !0 === ld.metadata[Hd.k];
                  Nd[Jd] = dd ? 1 : 0;
                  const kd = vd(ld, od, dd);
                  !dd || kd && ZJ(ld) || (pd[Jd] = 0)
                } else Wd ? vd(ld, od, !0 === ld.metadata[Hd.k]) : Td.h.prototype.push.call(kd, ld)
              }
              continue
            }
          }
          Wd && gd.finish(kd, Ld)
        })(pd), Cd.apply(pd, dd.activeCamera);
        const Wd = Jd.ypd;
        for (let dd = 0; dd < Wd.length; dd++) {
          const Jd = Wd[dd];
          Jd.isEnabled() && Td.h.prototype.push.call(pd, Jd)
        }
        return Nd(pd, kd), pd
      }, {
        Tpd: () => gd.culled,
        apd: (dd, Jd) => {
          const Nd = Math.floor(Jd[0] / Wd),
            Zd = Math.floor(Jd[1] / Wd),
            gd = Math.floor(Jd[2] / Wd),
            Cd = `${Nd}|${Zd}|${gd}`;
          let Kd = Pd.get(Cd);
          if (!Kd) {
            const dd = [0, 0, 0];
            kd.FJd([Nd * Wd - 1, Zd * Wd - 1, gd * Wd - 1], null, dd), Kd = Object.assign(pd(dd, Wd + 2), {
              Epd: Cd,
              cpd: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Id()
            }), Gd(Kd), Qd[Kd._noaSlot] = (0, Ed.h)(Nd, Zd, gd), Ld[3 * Kd._noaSlot] = Nd, Ld[3 * Kd._noaSlot + 1] = Zd, Ld[3 * Kd._noaSlot + 2] = gd, Pd.set(Cd, Kd)
          }
          Kd.cpd++, dd.metadata[cd.w] = Kd
        },
        Tm: dd => {
          const Jd = dd.metadata[cd.w];
          Jd && (Jd.cpd--, Jd.cpd <= 0 && (Pd.delete(Jd.Epd), ed.push(Jd._noaSlot)), dd.metadata[cd.w] = null)
        },
        Upd: (dd, Jd) => {
          const kd = dd,
            pd = Jd.metadata[cd.w];
          (kd._noaSlots ??= []).push(pd._noaSlot), (kd._noaStamps ??= []).push(0), (kd._noaTerrain ??= []).push(0), kd.entries.push(Jd)
        },
        removeEntry: (dd, Jd) => {
          const kd = dd,
            pd = kd.entries,
            Nd = pd.indexOf(Jd);
          if (Nd < 0) return;
          const Wd = kd._noaSlots,
            Pd = kd._noaStamps,
            Zd = kd._noaTerrain,
            gd = pd.length - 1;
          pd[Nd] = pd[gd], Wd[Nd] = Wd[gd], Pd[Nd] = Pd[gd], Zd[Nd] = Zd[gd], pd.pop(), Wd.pop(), Pd.pop(), Zd.pop()
        },
        Jdd: dd => {
          for (const Jd of Pd.values()) {
            Jd.bpd.hpd(dd), Jd.mpd.hpd(dd);
            for (const kd of Jd.Dpd) kd.hpd(dd);
            Gd(Jd)
          }
        }
      }
    }

    function lJ(dd, Jd) {
      return Jd.set(dd), Jd
    }

    function QJ(dd, Jd, kd) {
      const pd = dd[Jd],
        Nd = dd[Jd + 1],
        Wd = dd[Jd + 2],
        Pd = dd[Jd + 3],
        Zd = dd[Jd + 4],
        gd = dd[Jd + 5];
      for (let Cd = 0; Cd < 24; Cd += 4) {
        const dd = kd[Cd],
          Jd = kd[Cd + 1],
          Kd = kd[Cd + 2];
        if (!(dd * (dd >= 0 ? Pd : pd) + Jd * (Jd >= 0 ? Zd : Nd) + Kd * (Kd >= 0 ? gd : Wd) + kd[Cd + 3] >= 0)) return !1
      }
      return !0
    }
    var LJ = kd(37978);
    class OJ {
      constructor(dd, Jd) {
        var kd = dd.BO;
        kd.Cpd(new Dd.c(kd));
        var pd = new Ud.e(gd);
        kd.tpd = pd, pd.blocks = [];
        var Nd, Wd = {},
          Pd = [];
        this.textPlanes = Pd, this.Tpd = () => Nd.Tpd(), this.Jdd = dd => {
          Kd(pd, dd), Nd.Jdd(dd)
        }, this.apd = (Jd, kd, Zd) => {
          if (!Jd.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Jd.metadata[cd.u] && !Jd.metadata[cd.o]) {
            if (!kd) {
              var gd = pd.ypd;
              if (Jd.metadata[cd.y] && !Jd.parent) {
                gd = Pd;
                var Kd = Jd.pU().zpd;
                Jd.metadata[cd.B] = Kd.center.length() + Kd.radius, Jd.RL = !0
              }
              return gd.push(Jd), Jd.metadata[cd.j] = gd, void(Jd.metadata[cd.o] = !0)
            }
            var ld = Math.floor(Zd[0] / Cd),
              Qd = Math.floor(Zd[1] / Cd),
              Ld = Math.floor(Zd[2] / Cd),
              Od = ld + "|" + Qd + "|" + Ld,
              ed = Wd[Od];
            if (!ed) {
              var Rd = [ld * Cd, Qd * Cd, Ld * Cd],
                Id = [0, 0, 0];
              dd.Jl.FJd(Rd, null, Id), ed = od(Id, Cd), pd.blocks.push(ed), Wd[Od] = ed, ed.Epd = Od
            }
            Nd.apd(Jd, Zd), Nd.Upd(ed, Jd), ed.cpd = (ed.cpd || 0) + 1, Jd.metadata[cd.u] = ed, Jd.metadata[cd.p] = !0, Jd.RL = !0
          }
        }, this.Tm = dd => {
          if (dd.metadata) {
            dd.metadata[cd.o] && ((0, Ed.l)(dd.metadata[cd.j], dd), dd.metadata[cd.o] = !1), dd.metadata[cd.j] === Pd && (dd.RL = !1), dd.metadata[cd.j] = void 0, dd.metadata[cd.B] = void 0;
            var Jd = dd.metadata[cd.u];
            Jd && Jd.entries && (dd.metadata[cd.p] && Nd.removeEntry(Jd, dd), Jd.cpd--, Jd.cpd <= 0 && (delete Wd[Jd.Epd], (0, Ed.l)(pd.blocks, Jd))), Nd.Tm(dd), dd.metadata[cd.u] = null, dd.metadata[cd.p] = !1
          }
        }, this.K8 = function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (dd.metadata[cd.u]) {
            if (dd.metadata[cd.p] === Jd) return;
            var kd = dd.metadata[cd.u];
            kd && kd.entries && (Jd ? Nd.Upd(kd, dd) : Nd.removeEntry(kd, dd)), dd.metadata[cd.p] = Jd
          } else {
            if (dd.metadata[cd.o] === Jd) return;
            var Wd = dd.metadata[cd.j] || pd.ypd;
            Jd ? Wd.push(dd) : (0, Ed.l)(Wd, dd), dd.metadata[cd.o] = Jd
          }
        };
        var gd = () => {},
          Cd = Jd * dd.Jl.Vo.Xdd,
          Kd = (dd, Jd) => {
            dd.blocks.forEach((dd => {
              dd.bpd.hpd(Jd), dd.mpd.hpd(Jd), dd.Dpd.forEach((dd => dd.hpd(Jd))), dd.blocks && Kd(dd, Jd)
            }))
          },
          od = (dd, Jd) => {
            var kd = new Zd.IL(dd[0], dd[1], dd[2]),
              pd = new Zd.IL(dd[0] + Jd, dd[1] + Jd, dd[2] + Jd);
            return new yd.b(kd, pd, void 0, void 0, void 0, gd)
          };
        Nd = oJ(kd, pd, dd.Jl, od, ((dd, Jd) => {
          for (var kd = 0; kd < Pd.length; kd++) {
            var pd = Pd[kd];
            pd.isEnabled(!1) && ((0, LJ.c)(pd, Jd) && Td.h.prototype.push.call(dd, pd))
          }
        }))
      }
    }

    function eJ(dd) {
      const {
        holderPosition: Jd,
        holderRotation: kd,
        Xw: pd,
        fov: Nd,
        near: Wd,
        far: Pd
      } = dd.model.mw, Zd = dd.pNd;
      Zd.position.kdd(Jd[0], Jd[1], Jd[2]), Zd.rotation.kdd(kd[0], kd[1], kd[2]);
      const gd = dd.camera;
      gd.position.kdd(pd[0], pd[1], pd[2]), gd.fov = Nd, gd.minZ = Wd, gd.maxZ = Pd
    }

    function RJ(dd) {
      const Jd = dd.eL(),
        kd = Jd,
        pd = kd._gl;
      if (!pd || kd.uL < 2 || Jd.vpd || pd.getParameter(pd.DEPTH_BITS) < 24) return !1;
      const Nd = dd._renderingManager,
        Wd = Nd.getRenderingGroup(-1),
        Pd = Nd.getRenderingGroup(0),
        Zd = Sd.e.prototype.render;
      return Wd.render = function(dd, Jd, kd, pd, Nd, Wd, gd, Cd, Kd) {
        (dd || Pd._empty) && Zd.call(this, dd, Jd, kd, pd, Nd, Wd, gd, Cd, Kd)
      }, Pd.render = function(dd, kd, Nd, Pd) {
        let gd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Cd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Kd = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          ld = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Qd = arguments.length > 8 ? arguments[8] : void 0;
        dd ? Zd.call(this, dd, kd, Nd, Pd, gd, Cd, Kd, ld, Qd) : (Jd.setAlphaMode(od.e.ALPHA_DISABLE), Zd.call(this, null, !1, !1, Pd, gd, Cd, Kd, !1), Wd._empty || (pd.depthRange(1, 1), Zd.call(Wd, null, kd, Nd, Pd, gd, Cd, Kd, ld, Qd), pd.depthRange(0, 1)), Zd.call(this, null, kd, Nd, Pd, !1, !1, !1, ld, Qd))
      }, !0
    }

    function IJ(dd, Jd) {
      return [Jd, nd.e].map(((Jd, kd) => {
        const pd = new Nd.e("light", Zd.IL.FromArray(Jd), dd);
        return pd.diffuse = Pd.Color3.FromArray([1, 1, 1]), pd.specular = Pd.Color3.FromArray([1, 1, 1]), pd.intensity = nd.d[kd], pd
      }))
    }
    class GJ extends Cd.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(dd) {
        var Jd;
        this.heldTexture = dd, this.particleTexture = null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.mirror) && void 0 !== Jd ? Jd : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        dd && (this.particleTexture = null, (0, Kd.E)(this.heldTexture), this.heldTexture = null), super.dispose(dd, Jd, kd)
      }
    }
    const vJ = pd.d.Zero();
    const xJ = {
      Ukd: function(dd, Jd) {
        return new Wd.b(dd, Jd.Xkd, {
          preserveDrawingBuffer: Jd.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      PNd: function(dd, Jd) {
        ! function(dd, Jd, kd) {
          const pd = new Xd.e(dd.engine);
          dd.BO = pd, pd.detachControl(), pd.autoClear = !1, jd.b.MIN_RENDERINGGROUPS = -1;
          for (let Wd = jd.b.MIN_RENDERINGGROUPS; Wd <= 1; Wd++) pd.setRenderingOrder(Wd, Sd.e.PainterSortCompare, Sd.e.PainterSortCompare, Sd.e.PainterSortCompare);
          pd.setRenderingAutoClearDepthStencil(0, !1), bd.b.Enabled = !1, dd.dNd = new OJ(dd, Math.round(Jd.JNd)), dd.pNd = new md.e("camHolder", pd), dd.camera = new Yd.e("camera", new Zd.IL(0, 0, 0), pd), dd.camera.parent = dd.pNd, eJ(dd), (0, nd.f)(dd, ((dd, Jd, kd) => (0, fd.g)(Jd, kd, dd.BO))), pd.clearColor = Pd.c.FromArray(Jd.clearColor), pd.ambientColor = Pd.Color3.FromArray(Jd.ambientColor);
          const Nd = kd(pd, Jd.WNd);
          pd.onNewLightAddedObservable.add((dd => {
            Nd.some((Jd => Jd === dd)) || console.error(`Light "${dd.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), pd.skipPointerMovePicking = !0
        }(dd, Jd, IJ), RJ(dd.BO)
      },
      kNd: eJ,
      setBabylonFog: function(dd, Jd, kd, pd) {
        const Nd = dd.BO;
        Nd.fogMode = 3, Nd.fogStart = Jd, Nd.fogEnd = kd, Nd.fogColor.set(pd[0], pd[1], pd[2])
      },
      gNd: function(dd, Jd, kd) {
        return dd.engine.uL >= 2 && (dd.CNd || (dd.CNd = new Fd(dd.BO)), !dd.CNd.failed) ? dd.CNd.FX(Jd, kd) : new GJ(Jd, kd, dd.BO)
      },
      oNd: function(dd, Jd) {
        dd.BO.Qv.forEach((kd => {
          if (kd instanceof Md) return void kd.Jdd(Jd, dd.Jl.Rl);
          const pd = kd;
          if (pd.emitter.getConnectedParticleSystems)
            for (const dd of pd._particles) dd.position.set(dd.position.x - Jd[0], dd.position.y - Jd[1], dd.position.z - Jd[2]);
          else {
            if (!pd.worldOffset) throw new Error("Particle system has no world offset");
            pd.worldOffset.x = -dd.Jl.Rl[0], pd.worldOffset.y = -dd.Jl.Rl[1], pd.worldOffset.z = -dd.Jl.Rl[2]
          }
        }))
      },
      linesFromArrays: function(dd, Jd, kd) {
        const pd = new gd.c(Jd, dd.BO, null, void 0, void 0, !1);
        return (0, fd.c)(Jd, kd, dd.BO, pd), pd
      },
      sO: PJ,
      KNd: function(dd, Jd) {
        return vJ.origin.Fs(Jd.origin), vJ.direction.Fs(Jd.direction), vJ.length = Jd.length, vJ.epsilon = Jd.epsilon, vJ.KNd(dd, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41102: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Td,
      g: () => Id,
      k: () => td
    });
    var pd = kd(40251),
      Nd = kd(41108),
      Wd = kd(41148),
      Pd = kd(41115),
      Zd = kd(38016),
      gd = kd(38027),
      Cd = kd(38034),
      Kd = kd(38043),
      od = kd(37381),
      ld = kd(37386),
      Qd = kd(41117),
      Ld = kd(37360),
      Od = kd(37366),
      ed = kd(37347);

    function Rd(dd, Jd) {
      return Object.assign((function(dd, kd, pd, Nd) {
        return Jd(this.featureState, dd, kd, pd, Nd)
      }), {
        hQ: dd
      })
    }

    function Id(dd) {
      const Jd = class extends Qd.d {
          constructor(Jd, kd) {
            const pd = (0, Od.$)(Jd),
              Nd = pd && (0, Od.v)(pd, dd.name);
            for (var Wd = arguments.length, Pd = new Array(Wd > 2 ? Wd - 2 : 0), Zd = 2; Zd < Wd; Zd++) Pd[Zd - 2] = arguments[Zd];
            super(Jd, dd.name, dd.priority, Nd ? Nd.defines : dd.defines(...Pd), !1), this.featureState = void 0, this.featureState = kd, this._pluginManager._addPlugin(this), this._enable(!0), (0, Od.w)(this._material, dd, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return dd.className
          }
          isCompatible(dd) {
            return dd === ed.d.GLSL || dd === ed.d.WGSL
          }
        },
        kd = (0, Ld.i)(dd);
      for (const [pd, Nd] of Object.entries(Ld.c)) {
        const Wd = dd[pd];
        if (Wd) {
          const dd = kd[pd];
          Object.defineProperty(Jd.prototype, Nd, {
            value: Rd(Wd, dd),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Jd
    }
    class Gd extends(Id(Zd.d)) {}
    var vd = kd(39791),
      xd = kd(41125);
    const qd = new WeakMap;

    function Bd(dd, Jd, kd) {
      let pd = qd.get(kd);
      pd || (pd = new Map, qd.set(kd, pd));
      const {
        url: Nd
      } = dd;
      let Wd = pd.get(Nd);
      return Wd || (Wd = async function(dd, Jd, kd) {
        const {
          width: pd,
          height: Nd
        } = dd.getSize(), Wd = Math.round(Nd / pd), Zd = Jd && Jd.byteLength === pd * pd * Wd * 4 ? Jd : dd._readPixelsSync();
        return new xd.d(Zd, pd, pd, Wd, vd.b.TEXTUREFORMAT_RGBA, kd, !0, !1, Pd.d.NEAREST_NEAREST_MIPLINEAR)
      }(dd, Jd, kd), pd.set(Nd, Wd), Wd.catch((() => {
        pd.delete(Nd)
      }))), Wd
    }
    var sd = kd(38047);
    class ad extends(Id(gd.i)) {
      constructor(dd, Jd) {
        super(dd, Jd), Jd.textures.forEach(((dd, Jd) => {
          dd.mirror.onLoadObservable.add((dd => {
            this.setTextureArrayData(dd, Jd).catch((dd => {
              console.error(`Failed to build texture array for atlas ${Jd}`, dd)
            }))
          }))
        })), (0, sd.j)(Jd, dd.shaderLanguage)
      }
      async setTextureArrayData(dd, Jd) {
        var kd, pd;
        const Nd = this.featureState,
          {
            width: Wd,
            height: Pd
          } = dd.getSize(),
          Zd = Nd.useWebGL2 ? await Bd(dd, null !== (kd = null === (pd = Nd.sources.pixels) || void 0 === pd ? void 0 : pd[Jd]) && void 0 !== kd ? kd : null, this._material.Wm()) : null;
        (0, sd.e)(this._material, Nd, Jd, Zd, Wd, Math.round(Pd / Wd), this._material.shaderLanguage)
      }
    }
    var Md = kd(41134),
      Fd = kd(40292),
      Yd = kd(37245),
      md = kd(41140),
      bd = kd(40402),
      Sd = kd(40282),
      jd = kd(41090),
      Xd = kd(37797),
      fd = kd(41144);
    class nd extends Md.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Ud = {
      Mesh: md.d,
      TransformNode: jd.e,
      kL: Md.e,
      VertexBuffer: Md.f,
      BoundingInfo: Fd.b,
      IL: Yd.IL,
      ArenaBuffer: nd,
      SubMesh: Sd.c,
      VertexData: bd.c,
      MirroredGeometry: fd.b,
      meshFromArrays: fd.c,
      plainMeshFromArrays: fd.g
    };
    (0, Xd.g)(Ud);
    var yd = kd(37613);
    class Dd extends(Id(Kd.f)) {
      constructor(dd, Jd) {
        if (super(dd, Jd), dd instanceof pd.StandardMaterial && Jd.dirLightCount > 0) {
          const Jd = dd,
            kd = Jd._blockDirtyMechanism;
          Jd._blockDirtyMechanism = !0, dd.disableLighting = !0, Jd._blockDirtyMechanism = kd;
          const pd = (0, Od.$)(dd);
          pd && (pd.disableLighting = !0, (0, Od.Y)(pd))
        }(0, yd.j)(dd)
      }
      dispose(dd) {
        (0, yd.l)(this._material), super.dispose(dd)
      }
    }

    function Td(dd, Jd) {
      if (!(Jd instanceof pd.StandardMaterial) || Jd.specularTexture) return;
      const {
        r: kd,
        g: Nd,
        b: Wd
      } = Jd.specularColor;
      0 === kd && 0 === Nd && 0 === Wd && (dd.SPECULARTERM = !1)
    }(0, Kd.c)({
      disableUnusedSpecularTerm: Td
    });
    var Ed = kd(37473),
      cd = kd(37807);
    const hd = new RegExp(`^#define ${Cd.c}\\s*$`, "m");
    class rd extends(Id(Cd.i)) {
      constructor(dd, Jd) {
        super(dd, Jd), this.pL = !1, Jd.ditherOnlyWhileFading && (cd.e.add(dd), this.prewarmDitherTwins(dd))
      }
      prewarmDitherTwins(dd) {
        const Jd = new WeakSet;
        dd.onEffectCreatedObservable.add((kd => {
          let {
            effect: pd,
            subMesh: Nd
          } = kd;
          if (this.featureState.prewarmingDither || Jd.has(pd)) return;
          Jd.add(pd);
          const Wd = null === Nd || void 0 === Nd ? void 0 : Nd.getMesh();
          Wd && !hd.test(pd.defines) && dd.Wm().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Wd) || Jd.delete(pd)
          }))
        }))
      }
      prewarmDither(dd) {
        if (this.pL || dd.lq()) return !1;
        const Jd = new Sd.c(0, 0, 0, 0, 0, dd, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(dd, Jd)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Jd.effect
      }
      dispose(dd) {
        this.pL = !0, super.dispose(dd)
      }
    }
    const ud = new Map;

    function td(dd, Jd) {
      ud.set(dd, Jd)
    }
    td(Zd.d, Gd), td(gd.i, ad), td(Cd.i, rd), td(Kd.f, Dd), (0, od.c)({
      create: (dd, Jd) => {
        const kd = new pd.StandardMaterial(dd.name, Jd);
        return (0, Ed.p)(dd, kd), kd.detailMap._pluginDefineNames
      },
      write: (dd, Jd, kd) => {
        (0, Ed.R)(dd.mirror, Jd, kd)
      },
      addFeature: (dd, Jd, kd) => {
        const pd = ud.get(Jd.feature);
        if (!pd) throw new Error(`${Jd.feature.name} has no plugin class (registerPluginClass)`);
        new pd(dd.mirror, Jd.state, ...kd)
      },
      texture: (dd, Jd, kd) => {
        let {
          url: pd,
          noMipmap: Nd,
          invertY: Wd,
          samplingMode: Zd,
          data: gd,
          sets: Cd
        } = kd;
        if (!gd) {
          const kd = new Pd.d(pd, Jd, Nd, Wd, Zd);
          return Object.assign(kd, Cd), void(0, ld.K)(dd, kd)
        }
        const Kd = {},
          od = new Promise(((dd, Jd) => {
            Kd.onLoad = dd, Kd.onError = (dd, kd) => {
              Jd(new Error(`${gd.context}: ${(null===kd||void 0===kd?void 0:kd.message)||dd||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Qd,
            bytes: Ld,
            label: Od
          } = gd,
          ed = {
            noMipmap: Nd,
            invertY: !1,
            samplingMode: Zd,
            ...Kd,
            mimeType: Qd,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Rd = new Pd.d(null, Jd, ed);
        Ed.s.set(Rd, od), Object.assign(Rd, Cd), Rd.updateURL(pd, Ld);
        const Id = Rd.getInternalTexture();
        Id && (Id.label = Od), dd.uvSet = Rd.coordinatesIndex, dd.matrix.set((0, Ed.L)(Rd)), (0, ld.K)(dd, Rd)
      },
      cube: (dd, Jd, kd) => {
        let {
          rootUrl: pd,
          files: Wd,
          noMipmap: Zd,
          luminance: gd
        } = kd;
        const {
          samplingMode: Cd
        } = dd.sampler, Kd = Cd === (0, ld.D)(Zd) ? null : () => {
          (0, Ed.I)(od, Cd)
        }, od = new Nd.e(pd, Jd, null, Zd, Wd, Kd, null, (0, ld.A)(gd));
        od.coordinatesMode = Pd.d.SKYBOX_MODE, (0, ld.K)(dd, od)
      },
      canvas: (dd, Jd, kd) => {
        let {
          width: pd,
          height: Nd,
          mipmaps: Zd,
          samplingMode: gd,
          hasAlpha: Cd = !1,
          wrap: Kd = Pd.d.CLAMP_ADDRESSMODE
        } = kd;
        const od = new Wd.b(Jd, {
          width: pd,
          height: Nd
        }, dd, Zd, gd);
        od.hasAlpha = Cd, od.wrapU = Kd, od.wrapV = Kd;
        const ld = (0, Ed.z)(od);
        return (0, Ed.B)(ld, od), ld
      }
    })
  },
  41144: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Kd,
      c: () => od,
      g: () => ld
    });
    var pd = kd(41134),
      Nd = kd(40032),
      Wd = kd(40292),
      Pd = kd(40411),
      Zd = kd(41140),
      gd = kd(40402),
      Cd = kd(37682);
    class Kd extends Pd.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (dd, Jd) => {
          this.releaseUnlessInstanced(Jd)
        }, this.onLinked = null
      }
      link(dd) {
        var Jd;
        (0, Cd.j)(dd), this.model = dd, null === (Jd = this.onLinked) || void 0 === Jd || Jd.call(this, dd)
      }
      relink() {
        this.release();
        const dd = [];
        for (const Nd of Object.values(this._vertexBuffers))
          if (!Nd.getIsInstanced()) {
            const {
              byteOffset: Jd,
              byteStride: kd,
              type: pd,
              normalized: Wd
            } = Nd;
            dd.push({
              kind: Nd.getKind(),
              data: Nd.getData(),
              offset: Jd,
              stride: kd,
              components: Nd.getSize(),
              glType: pd,
              isNormalized: Wd
            })
          } const Jd = this._indices.length ? this._indices : null,
          {
            minimum: kd,
            maximum: pd
          } = this.extend;
        this.link(new Cd.c(dd, Jd, this.getTotalVertices(), new Float64Array(kd.spd()), new Float64Array(pd.spd())))
      }
      copy(dd) {
        if (!this.model) return super.copy(dd);
        const Jd = new Kd(dd, this.Wm()),
          kd = this.ipd(void 0, !0);
        kd && Jd.setIndices(kd);
        let Pd = !1;
        for (const Wd in this._vertexBuffers) {
          const dd = this._vertexBuffers[Wd],
            kd = dd.getData();
          if (!kd) continue;
          const Zd = dd.getSize(),
            {
              type: gd,
              byteOffset: Cd,
              byteStride: Kd,
              normalized: od
            } = dd;
          Pd ||= dd.isUpdatable();
          const ld = dd.getIsInstanced() ? (kd instanceof Array ? 4 * kd.length : kd.byteLength) / Kd : this.getTotalVertices(),
            Qd = (0, Nd.t)(kd, Zd, gd, Cd, Kd, ld, !0),
            Ld = {
              updatable: dd.isUpdatable(),
              stride: Zd,
              type: gd,
              normalized: od,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            };
          Jd.setVerticesBuffer(new pd.f(this.eL(), Qd, Wd, Ld), ld)
        }
        return Jd._updatable = Pd, Jd._boundingInfo = new Wd.b(this.extend.minimum, this.extend.maximum), Jd.relink(), Jd
      }
      static mergeMeshes(dd, Jd, kd, pd, Nd, Wd) {
        const gd = dd[0].Wm(),
          Cd = new Zd.d(dd[0].name + "_merged", gd),
          od = new Kd(Pd.e.RandomId(), gd, void 0, !1, Cd);
        try {
          if (!Zd.d.MergeMeshes(dd, Jd, kd, Cd, Nd, Wd)) return Cd.dispose(), null
        } catch (ld) {
          throw Cd.dispose(), ld
        }
        return od.relink(), Cd
      }
      removeVerticesData(dd) {
        this.releaseUnlessInstanced(dd), super.removeVerticesData(dd)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(dd) {
        var Jd;
        dd && null !== (Jd = this.getVertexBuffer(dd)) && void 0 !== Jd && Jd.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Cd.t)(this.model), this.model = null)
      }
    }

    function od(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Zd.d(dd, kd);
      const Nd = (0, Cd.h)(Jd),
        {
          positions: Wd,
          normals: od,
          uvs: ld,
          indices: Qd,
          named: Ld = {}
        } = Jd,
        Od = new gd.c;
      Od.positions = Wd, Od.normals = null !== od && void 0 !== od ? od : null, Od.uvs = null !== ld && void 0 !== ld ? ld : null, Od.indices = Qd;
      const ed = new Kd(Pd.e.RandomId(), kd, Od, !1, pd);
      for (const {
          kind: Pd,
          components: Zd
        }
        of Nd.vertexAttributes) Pd in Ld && pd.setVerticesData(Pd, Ld[Pd], !1, Zd);
      return ed.link(Nd), pd
    }

    function ld(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Nd = new Zd.d(dd, kd),
        {
          positions: Wd,
          normals: Pd,
          uvs: Cd,
          indices: Kd
        } = Jd;
      return Object.assign(new gd.c, {
        positions: Wd,
        normals: Pd,
        uvs: Cd,
        indices: Kd
      }).applyToMesh(Nd, pd), Nd
    }
  },
  41579: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ed,
      e: () => Zd,
      g: () => Pd,
      i: () => Cd
    });
    var pd = kd(37438),
      Nd = kd(38835),
      Wd = kd(38832);

    function Pd(dd, Jd, kd, pd) {
      const Nd = Wd.p;
      Jd.fill(0), dd.gravity.toArray(Jd, Nd.gravity), dd.colorDead.toArray(Jd, Nd.colorDead), kd[Nd.ramp] = dd.useRampGradients ? 1 : 0;
      const Pd = dd.getColorGradients(),
        Zd = ld(dd, Pd, "colour", pd);
      kd[Nd.colorCount] = Zd;
      for (let Wd = 0; Wd < Zd; Wd++) {
        var gd;
        const dd = Pd[Qd(Pd, Wd)];
        Jd[Nd.colorPositions + Wd] = dd.gradient, dd.color1.toArray(Jd, Nd.color1 + 4 * Wd), (null !== (gd = dd.color2) && void 0 !== gd ? gd : dd.color1).toArray(Jd, Nd.color2 + 4 * Wd)
      }
      const Cd = dd.getVelocityGradients(),
        Kd = ld(dd, Cd, "hO", pd);
      kd[Nd.velocityCount] = Kd;
      for (let Wd = 0; Wd < Kd; Wd++) Id(Jd, Nd.hO + 4 * Wd, Cd[Qd(Cd, Wd)]);
      const od = dd.useRampGradients ? dd.getColorRemapGradients() : null,
        Ld = ld(dd, od, "colour remap", pd);
      kd[Nd.remapCount] = Ld;
      for (let Wd = 0; Wd < Ld; Wd++) Id(Jd, Nd.remap + 4 * Wd, od[Qd(od, Wd)])
    }

    function Zd() {
      return {
        key: [],
        texels: new Uint8Array(4 * Wd.f)
      }
    }
    const gd = [];

    function Cd(dd, Jd) {
      return Kd(dd, gd), !Rd(gd, Jd.key) && (Jd.key.length = 0, Jd.key.push(...gd), Jd.key.length > 0 && function(dd, Jd) {
        for (let kd = 0; kd < Wd.f; kd++) Nd.k.GetCurrentGradient(kd / Wd.f, dd, ((dd, Jd, kd) => {
          pd.Color3.LerpToRef(dd.color, Jd.color, kd, od)
        })), Jd[4 * kd] = 255 * od.r, Jd[4 * kd + 1] = 255 * od.g, Jd[4 * kd + 2] = 255 * od.b, Jd[4 * kd + 3] = 255
      }(dd.getRampGradients(), Jd.texels), !0)
    }

    function Kd(dd, Jd) {
      Jd.length = 0;
      const kd = dd.useRampGradients ? dd.getRampGradients() : null;
      if (null !== kd && void 0 !== kd && kd.length) {
        Jd.push(kd.length);
        for (const dd of kd) Jd.push(dd.gradient, dd.color.r, dd.color.g, dd.color.b)
      }
    }
    const od = new pd.Color3;

    function ld(dd, Jd, kd, pd) {
      return Jd ? Jd.length > Wd.c ? (pd(`particleStops:${kd}`, `GPU particles use the first 2 and last ${Wd.c-2} of more than ${Wd.c} ${kd} gradient stops (${dd.name})`), Wd.c) : Jd.length : 0
    }

    function Qd(dd, Jd) {
      return Jd < 2 || dd.length <= Wd.c ? Jd : dd.length - Wd.c + Jd
    }
    const Ld = new Float32Array(Wd.k),
      Od = new Uint32Array(Ld.buffer);

    function ed(dd, Jd, kd) {
      return Pd(dd, Ld, Od, kd), Jd && Rd(Od, Jd) ? null : Od.slice()
    }

    function Rd(dd, Jd) {
      if (dd.length !== Jd.length) return !1;
      for (let kd = 0; kd < dd.length; kd++)
        if (dd[kd] !== Jd[kd]) return !1;
      return !0
    }

    function Id(dd, Jd, kd) {
      var pd;
      dd[Jd] = kd.gradient, dd[Jd + 1] = kd.factor1, dd[Jd + 2] = null !== (pd = kd.factor2) && void 0 !== pd ? pd : kd.factor1
    }
  },
  41572: (dd, Jd, kd) => {
    function pd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Jd = new Set;
      return (kd, pd) => {
        Jd.has(kd) || (Jd.add(kd), console.warn(dd + pd))
      }
    }
    kd.d(Jd, {
      c: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);