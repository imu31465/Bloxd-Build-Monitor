export const id = 0;
export const ids = [0];
export const modules = {
  41338: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      CapeMaterialPlugin: () => eu,
      HueTintMaterialPlugin: () => Gu,
      LifeformMaterialPlugin: () => pu,
      OverlayMaterialPlugin: () => wu
    });
    var su = ju(41346),
      Uu = ju(38386);
    class Zu extends((0, su.g)(Uu.e)) {}(0, su.k)(Uu.e, Zu);
    var Xu = ju(37571);
    class lu extends((0, su.g)(Xu.g)) {}(0, su.k)(Xu.g, lu);
    var qu = ju(38236);
    class fu extends((0, su.g)(qu.f)) {}(0, su.k)(qu.f, fu);
    var Cu = ju(37816),
      bu = ju(40514),
      cu = ju(37811);
    class Nu extends((0, su.g)(cu.e)) {
      constructor(uu, Eu, ju) {
        super(uu, Eu, ju), (0, Cu.h)(uu)
      }
      dispose(uu) {
        (0, Cu.k)(this._material), super.dispose(uu)
      }
    }(0, su.k)(cu.e, Nu), (0, cu.g)({
      disableUnusedSpecularTerm: su.e,
      isLightingDisabled: uu => uu instanceof bu.StandardMaterial && uu.disableLighting
    });
    var Ou = ju(39038);
    class Yu extends((0, su.g)(Ou.e)) {}(0, su.k)(Ou.e, Yu);
    var hu = ju(39141),
      Du = ju(37684),
      gu = ju(38494),
      Mu = ju(37637);
    class eu extends((0, su.g)(hu.d)) {}(0, su.k)(hu.d, eu);
    class Gu extends((0, su.g)(Du.b)) {}(0, su.k)(Du.b, Gu);
    class pu extends((0, su.g)(gu.m)) {}(0, su.k)(gu.m, pu);
    class wu extends((0, su.g)(Mu.b)) {}(0, su.k)(Mu.b, wu)
  },
  41810: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      addBabylonLights: () => GE,
      default: () => JE
    });
    var su = ju(41814),
      Uu = (ju(40238), ju(41335), ju(40742), ju(41825)),
      Zu = ju(37671),
      Xu = ju(37488),
      lu = ju(41838),
      qu = ju(41847),
      fu = ju(37630),
      Cu = (ju(41346), ju(41857)),
      bu = ju(41855),
      cu = ju(39065),
      Nu = ju(41861),
      Ou = ju(40127),
      Yu = ju(39052);
    const hu = "gpuParticles",
      Du = Yu.v,
      gu = uu => uu / 4,
      Mu = uu => `gpuParticleSystem[${uu>>2}].${"xyzw"[3&uu]}`,
      eu = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Yu.b}\n#define COLOR_POSITIONS ${gu(Du.colorPositions)}\n#define COLOR1 ${gu(Du.color1)}\n#define COLOR2 ${gu(Du.color2)}\n#define VELOCITY ${gu(Du.RY)}\n#define REMAP ${gu(Du.remap)}\n#define RECORDS_PER_ROW ${Yu.m}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Yu.p/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Mu(Du.gravity)}, ${Mu(Du.gravity+1)}, ${Mu(Du.gravity+2)}); }\nint colorCount() { return int(${Mu(Du.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${gu(Du.colorDead)}]; }\nint velocityCount() { return int(${Mu(Du.velocityCount)}); }\nint remapCount() { return int(${Mu(Du.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Ou.b.ShadersStore[`${hu}VertexShader`] = eu, Ou.b.ShadersStore[`${hu}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Gu = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      pu = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var wu = ju(39046),
      Ju = ju(41870);
    class du extends wu.c {
      constructor(uu, Eu, ju, su) {
        super(uu, Eu, ju), this.renderer = ju, this.vY = su, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Yu.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Ju.h)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (uu, Eu) => {
          const {
            engine: ju
          } = this, su = ju._gl;
          ju._bindTextureDirectly(su.TEXTURE_2D, this.records, !0), ju._unpackFlipY(!1);
          const Uu = this.ring.recordBits;
          for (let Zu = uu; Zu < Eu;) {
            const uu = Math.floor(Zu / Yu.m),
              ju = Math.min(Eu, (uu + 1) * Yu.m);
            su.texSubImage2D(su.TEXTURE_2D, 0, Zu % Yu.m * 4, uu, 4 * (ju - Zu), 1, su.RGBA_INTEGER, su.UNSIGNED_INT, Uu, Zu * Yu.e), Zu = ju
          }
          ju._bindTextureDirectly(su.TEXTURE_2D, null)
        }, this.id = uu;
        const Uu = su.wO();
        this.engine = Uu;
        const Zu = Math.max(1, Eu),
          Xu = Math.min(Zu, Yu.m);
        this.records = Uu.createRawTexture(null, 4 * Xu, Math.ceil(Zu / Xu), Cu.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Cu.e.TEXTURE_NEAREST_SAMPLINGMODE, null, Cu.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.vY.getAnimationRatio() || 1;
        const Eu = this.vY.getFrameId();
        if (Eu === this.animatedFrame) return !1;
        const ju = super.animate(uu);
        return ju && (this.animatedFrame = Eu, this.ring.takeUploads(this.uploadSlots)), ju
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(uu) {
        (0, Ju.i)(this, this.uniforms, this.uniformBits, uu);
        for (const ju of Yu.t) this.uniforms[ju] = this.uniformBits[ju];
        var Eu;
        (0, Ju.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Eu = this.ramp) || void 0 === Eu || Eu.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = bu.d.CreateRGBATexture(this.rampTexels.texels, Yu.j, 1, this.vY, !1, !1, Cu.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var uu;
        this.records.dispose(), null === (uu = this.ramp) || void 0 === uu || uu.dispose(), this.ramp = null
      }
    }
    const au = "the context was lost before the programs linked";
    class Pu {
      constructor(uu, Eu) {
        this.vY = uu, this.reportFailure = Eu, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Nu.d)(), this.engine = uu.wO(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = bu.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, uu, !1, !1, Cu.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      Kr(uu, Eu) {
        const ju = Yu.m * this.engine.getCaps().maxTextureSize;
        Eu > ju && this.warnOnce(`capacity:${uu}`, `particle system ${uu} holds ${ju} particles, not ${Eu}: its records texture's limit`);
        const su = new du(uu, Math.min(Eu, ju), this, this.vY);
        return this.vY.addParticleSystem(su), su
      }
      canDraw(uu) {
        var Eu, ju;
        if (this.failed || null === (Eu = uu.texture) || void 0 === Eu || null === (ju = Eu.mirror) || void 0 === ju || !ju.isReady()) return !1;
        for (const su of (0, cu.k)(uu.blendMode))
          if (!this.effectFor(su).isReady()) return !1;
        return !0
      }
      disposeStopped(uu) {
        this.vY._toBeDisposed.push(uu)
      }
      remove(uu) {
        this.vY.removeParticleSystem(uu), uu.releaseGl()
      }
      render(uu) {
        var Eu;
        if (!uu.isReady() || !uu.hasLiveParticles()) return 0;
        const {
          engine: ju,
          vY: su,
          frame: Uu
        } = this;
        uu.prepareDraw(this.warnOnce), uu.drawOffset(Uu, 0), Uu[3] = uu.drawTime();
        const Zu = uu.ring.drawStart(),
          Xu = uu.ring.drawCount(),
          lu = null !== (Eu = uu.ramp) && void 0 !== Eu ? Eu : this.whiteRamp;
        ju.setState(!1);
        for (const qu of (0, cu.k)(uu.blendMode)) {
          const Eu = this.effectFor(qu);
          ju.enableEffect(Eu), Eu.setTexture("gpuParticleTexture", uu.texture.mirror), Eu.setTexture("gpuParticleRampTexture", lu), Eu._bindTexture("gpuParticleRecords", uu.records), Eu.setMatrix("gpuParticleView", su.getViewMatrix()), Eu.setMatrix("gpuParticleProjection", su.getProjectionMatrix()), Eu.setFloatArray4("gpuParticleSystem", uu.uniforms), Eu.setFloat4("gpuParticleFrame", Uu[0], Uu[1], Uu[2], Uu[3]), Eu.setFloat2("gpuParticleRange", Zu, Xu), Eu.setFloat("gpuParticleRamp", uu.uniforms[Yu.v.ramp]), ju.bindBuffers(this.vertexBuffers, null, Eu), ju.setAlphaMode((0, cu.j)(qu)), ju.drawArraysType(Cu.e.MATERIAL_TriangleStripDrawMode, 0, 4, Xu), Eu._bindTexture("gpuParticleRecords", null)
        }
        return ju.setAlphaMode(Cu.e.ALPHA_DISABLE), Xu
      }
      awaitLink(uu) {
        const Eu = uu.getPipelineContext(),
          ju = this.gl();
        !this.failed && ju && (!Eu || Eu.isParallelCompiled && !Eu.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Eu.isParallelCompiled && Eu.program && (ju.getProgramParameter(Eu.program, ju.LINK_STATUS) || this.fail(function(uu, Eu, ju) {
          if (uu.isContextLost()) return au;
          for (const [su, Uu] of [
              ["VERTEX SHADER", Eu.vertexShader],
              ["FRAGMENT SHADER", Eu.fragmentShader]
            ]) {
            const Eu = Uu && !uu.getShaderParameter(Uu, uu.COMPILE_STATUS) ? uu.getShaderInfoLog(Uu) : null;
            if (Eu) return `${su} ${Eu}`
          }
          return uu.getProgramInfoLog(ju) || "a program did not link"
        }(ju, Eu, Eu.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(uu) {
        return uu === cu.e ? this.multiplyEffect : this.effect
      }
      createEffect(uu) {
        return this.engine.createEffect(hu, [], Gu, pu, uu, void 0, void 0, ((uu, Eu) => {
          var ju;
          this.fail(null !== (ju = this.gl()) && void 0 !== ju && ju.isContextLost() ? au : function(uu) {
            const Eu = uu.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(Eu) ? "a program failed, its log not in this browser's stack" : Eu.replace(/^Error: /, "")
          }(Eu))
        }))
      }
      fail(uu) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${uu}`), this.reportFailure(uu);
          for (const uu of this.vY.WG.slice()) uu instanceof du && uu.disposeOnStop && uu.dispose()
        }
      }
    }
    var ou = ju(40092);
    class ku extends ou.c {
      createEffect() {
        const uu = super.createEffect(...arguments);
        return vu(uu), mu.has(uu) || (mu.add(uu), uu.onCompileObservable.add((() => {
          vu(uu)
        }))), uu
      }
    }
    const mu = new WeakSet;

    function vu(uu) {
      uu._vertexSourceCodeBeforeMigration = "", uu._fragmentSourceCodeBeforeMigration = ""
    }
    var Ku = ju(40456),
      Vu = ju(41329),
      ru = ju(40209),
      Qu = ju(40420),
      iu = ju(40417),
      Wu = ju(40346),
      Su = ju(41394),
      Iu = ju(37993),
      Fu = ju(41875),
      Bu = ju(41877),
      Lu = ju(41885),
      tu = ju(40366),
      xu = ju(2999),
      Tu = ju(37874),
      Hu = ju(40581),
      Au = ju(37954),
      nu = ju(37901);

    function yu(uu) {
      if (uu.visibility < 1 || !uu.isVisible || !uu.isEnabled() || uu.metadata[nu.g] || !uu.isReady()) return !0;
      const Eu = uu.iG;
      if (!Eu || 0 === Eu.length) return !0;
      for (let ju = 0; ju < Eu.length; ju++) {
        const su = Eu[ju],
          Uu = su.oO();
        if (!Uu || !Uu.isReadyForSubMesh(uu, su, !1)) return !0
      }
      return !1
    }
    class zu {
      constructor(uu, Eu) {
        this.Uc = uu, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Eu.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      NN(uu) {
        var Eu;
        const ju = this.armed;
        if (this.armed = !1, this.vis = null, !ju) return !1;
        this.culled = 0;
        const {
          Uc: su
        } = this, Uu = null === (Eu = su.mG) || void 0 === Eu ? void 0 : Eu.visibility;
        if (!Uu || !uu || su.tO.xO) return !1;
        if (!(su.zb.Jsu[0] >= Au.d)) return !1;
        const Zu = uu.getProjectionMatrix().m;
        if (0 !== Zu[15]) return !1;
        const Xu = su.ec,
          lu = uu.globalPosition,
          qu = this.eye;
        return qu[0] = lu.x + Xu[0], qu[1] = lu.y + Xu[1], qu[2] = lu.z + Xu[2], !!Uu.eyeClear(qu[0], qu[1], qu[2], uu.minZ, Zu, su.zb) && (this.vis = Uu, this.passable.clear(), this.count = 0, !0)
      }
      see(uu, Eu) {
        const ju = this.count++;
        if (ju === this.cellSlots.length) {
          const uu = new Int32Array(2 * ju);
          uu.set(this.cellSlots), this.cellSlots = uu
        }
        this.cellSlots[ju] = Eu, this.meshes[ju] = uu
      }
      seeThrough(uu) {
        this.passable.add(uu)
      }
      finish(uu, Eu) {
        const {
          vis: ju,
          eye: su,
          meshes: Uu,
          count: Zu,
          cellSlots: Xu
        } = this, {
          zb: lu
        } = this.Uc, [qu, fu] = lu.Jsu, Cu = null !== ju && ju.update(su[0], su[1], su[2], lu.duu, qu, fu, this.passable);
        let bu = 0;
        for (let cu = 0; cu < Zu; cu++) {
          const su = Uu[cu];
          if (Cu) {
            const uu = 3 * Xu[cu];
            if (uu >= 0 && !ju.isDrawn(Eu[uu], Eu[uu + 1], Eu[uu + 2])) {
              bu++;
              continue
            }
          }
          tu.f.prototype.push.call(uu, su)
        }
        Uu.fill(null, 0, Zu), this.count = 0, this.vis = null, this.culled = bu
      }
    }
    var Ru = ju(37938),
      uE = ju(37886),
      EE = ju(40552),
      jE = ju(41890),
      sE = ju(40556),
      UE = ju(40467);
    let ZE = 1;
    const XE = new WeakSet;

    function lE() {
      return ZE
    }

    function qE() {
      ZE = ZE >= 1073741823 ? 1 : ZE + 1
    }

    function fE(uu) {
      const Eu = uu.metadata;
      if (!Eu || !0 !== Eu[Tu.q]) return;
      const ju = Eu[Tu.v],
        su = null === ju || void 0 === ju ? void 0 : ju._noaStamps;
      if (!ju || !su) return;
      const Uu = ju.entries.indexOf(uu);
      Uu >= 0 && (su[Uu] = 0)
    }

    function CE(uu) {
      const Eu = uu.iG;
      for (let ju = 0; ju < Eu.length; ju++) {
        const uu = Eu[ju].oO();
        if (uu && !uu.isFrozen) return !1
      }
      for (let ju = 0; ju < Eu.length; ju++) {
        const uu = Eu[ju].oO();
        uu && XE.add(uu)
      }
      return !0
    }
    let bE = !1;
    const cE = new WeakSet;

    function NE(uu, Eu) {
      const ju = uu[Eu];
      if ("function" !== typeof ju) throw new Error(`terrainDrawState: Babylon has no ${Eu} to hook`);
      return ju
    }

    function OE(uu, Eu, ju, su, Uu) {
      const Zu = ju.zb.duu,
        Xu = new Map;
      let lu = 0;
      const qu = new zu(ju, uu),
        fu = new Ru.d(Zu, uu.wO());
      ! function(uu) {
        if (cE.has(uu) || (cE.add(uu), uu.onContextLostObservable.add(qE), uu.pO.add(qE)), bE) return;
        bE = !0;
        const Eu = jE.c.prototype,
          ju = NE(Eu, "_markSubMeshesAsDirty");
        Object.assign(Eu, {
          _markSubMeshesAsDirty(uu) {
            ju.call(this, uu), fE(this)
          }
        });
        const su = NE(UE.c.prototype, "_syncParentEnabledState");
        Object.assign(UE.c.prototype, {
          _syncParentEnabledState() {
            su.call(this), fE(this)
          }
        });
        const Uu = NE(sE.e.prototype, "resetDrawCache");
        sE.e.prototype.resetDrawCache = function(uu, Eu) {
          Uu.call(this, uu, Eu), fE(this.getMesh())
        };
        const Zu = EE.b.prototype,
          Xu = NE(Zu, "markDirty");
        Zu.markDirty = function(uu) {
          Xu.call(this, uu), XE.has(this) && qE()
        };
        const lu = NE(Zu, "_markAllSubMeshesAsDirty");
        Object.assign(Zu, {
          _markAllSubMeshesAsDirty(uu) {
            lu.call(this, uu), XE.has(this) && qE()
          }
        })
      }(uu.wO());
      let Cu = new Float64Array(384),
        bu = new Int32Array(64),
        cu = new Uint8Array(64),
        Nu = new Float64Array(64),
        Ou = new Int32Array(192),
        Yu = 0;
      const hu = [],
        Du = new Float64Array(24),
        gu = () => {
          const uu = hu.pop();
          return void 0 !== uu ? (bu[uu] = 0, uu) : (Yu === bu.length && (Cu = YE(Cu, new Float64Array(2 * Cu.length)), bu = YE(bu, new Int32Array(2 * bu.length)), cu = YE(cu, new Uint8Array(2 * cu.length)), Nu = YE(Nu, new Float64Array(2 * Nu.length)), Ou = YE(Ou, new Int32Array(2 * Ou.length))), Yu++)
        },
        Mu = uu => {
          const Eu = 6 * uu._noaSlot,
            ju = uu.vsu[0],
            su = uu.vsu[1];
          Cu[Eu] = ju.x, Cu[Eu + 1] = ju.y, Cu[Eu + 2] = ju.z, Cu[Eu + 3] = su.x, Cu[Eu + 4] = su.y, Cu[Eu + 5] = su.z
        },
        eu = (uu, Eu, ju) => {
          if (!ju) return qu.see(uu, -1), !1;
          const su = yu(uu);
          return su && qu.seeThrough(Nu[Eu]), qu.see(uu, Eu), !su
        };
      let Gu = -1;
      return uu.getActiveMeshCandidates = () => {
        const ju = uu.frustumPlanes,
          su = Eu._selectionContent;
        su.reset(), (ju => {
          const su = uu.frustumPlanes;
          lu = lu + 1 | 0 || 1;
          const Uu = Eu.blocks,
            Zu = qu.NN(uu.activeCamera),
            Xu = Zu && !0;
          if (Xu) {
            const Eu = uu.wO().currentRenderPassId;
            Eu !== Gu && (Gu = Eu, qE())
          }
          const fu = lE(),
            Nu = Xu && !1;
          Uu.length > 0 && function(uu, Eu) {
            for (let ju = 0; ju < 6; ju++) {
              const su = uu[ju],
                Uu = su.normal;
              Eu[4 * ju] = Uu.x, Eu[4 * ju + 1] = Uu.y, Eu[4 * ju + 2] = Uu.z, Eu[4 * ju + 3] = su.d
            }
          }(su, Du);
          const Yu = Cu,
            hu = bu,
            gu = cu;
          for (let uu = 0; uu < Uu.length; uu++) {
            const Eu = Uu[uu];
            if (!Hu.e.IsInFrustum(Eu.vsu, su)) continue;
            const Cu = Eu.entries;
            {
              const uu = Eu._noaSlots,
                su = Eu._noaStamps,
                Uu = Eu._noaTerrain;
              for (let Eu = 0; Eu < Cu.length; Eu++) {
                const bu = uu[Eu];
                if (hu[bu] !== lu && (hu[bu] = lu, gu[bu] = hE(Yu, 6 * bu, Du) ? 1 : 0), 0 === gu[bu]) continue;
                const cu = Cu[Eu];
                if (Xu && su[Eu] === fu) Nu && 1 === Uu[Eu] && yu(cu) && 0, qu.see(cu, 1 === Uu[Eu] ? bu : -1);
                else if (Xu) {
                  su[Eu] = fu;
                  const uu = !0 === cu.metadata[uE.k];
                  Uu[Eu] = uu ? 1 : 0;
                  const ju = eu(cu, bu, uu);
                  !uu || ju && CE(cu) || (su[Eu] = 0)
                } else Zu ? eu(cu, bu, !0 === cu.metadata[uE.k]) : tu.f.prototype.push.call(ju, cu)
              }
              continue
            }
          }
          Zu && qu.finish(ju, Ou)
        })(su), fu.apply(su, uu.activeCamera);
        const Zu = Eu.msu;
        for (let uu = 0; uu < Zu.length; uu++) {
          const Eu = Zu[uu];
          Eu.isEnabled() && tu.f.prototype.push.call(su, Eu)
        }
        return Uu(su, ju), su
      }, {
        Ksu: () => qu.culled,
        hsu: (uu, Eu) => {
          const Uu = Math.floor(Eu[0] / Zu),
            lu = Math.floor(Eu[1] / Zu),
            qu = Math.floor(Eu[2] / Zu),
            fu = `${Uu}|${lu}|${qu}`;
          let Cu = Xu.get(fu);
          if (!Cu) {
            const uu = [0, 0, 0];
            ju.MEu([Uu * Zu - 1, lu * Zu - 1, qu * Zu - 1], null, uu), Cu = Object.assign(su(uu, Zu + 2), {
              Vsu: fu,
              rsu: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: gu()
            }), Mu(Cu), Nu[Cu._noaSlot] = (0, xu.k)(Uu, lu, qu), Ou[3 * Cu._noaSlot] = Uu, Ou[3 * Cu._noaSlot + 1] = lu, Ou[3 * Cu._noaSlot + 2] = qu, Xu.set(fu, Cu)
          }
          Cu.rsu++, uu.metadata[Tu.w] = Cu
        },
        rV: uu => {
          const Eu = uu.metadata[Tu.w];
          Eu && (Eu.rsu--, Eu.rsu <= 0 && (Xu.delete(Eu.Vsu), hu.push(Eu._noaSlot)), uu.metadata[Tu.w] = null)
        },
        ksu: (uu, Eu) => {
          const ju = uu,
            su = Eu.metadata[Tu.w];
          (ju._noaSlots ??= []).push(su._noaSlot), (ju._noaStamps ??= []).push(0), (ju._noaTerrain ??= []).push(0), ju.entries.push(Eu)
        },
        removeEntry: (uu, Eu) => {
          const ju = uu,
            su = ju.entries,
            Uu = su.indexOf(Eu);
          if (Uu < 0) return;
          const Zu = ju._noaSlots,
            Xu = ju._noaStamps,
            lu = ju._noaTerrain,
            qu = su.length - 1;
          su[Uu] = su[qu], Zu[Uu] = Zu[qu], Xu[Uu] = Xu[qu], lu[Uu] = lu[qu], su.pop(), Zu.pop(), Xu.pop(), lu.pop()
        },
        I6: uu => {
          for (const Eu of Xu.values()) {
            Eu.wsu.Qsu(uu), Eu.Gsu.Qsu(uu);
            for (const ju of Eu.vsu) ju.Qsu(uu);
            Mu(Eu)
          }
        }
      }
    }

    function YE(uu, Eu) {
      return Eu.set(uu), Eu
    }

    function hE(uu, Eu, ju) {
      const su = uu[Eu],
        Uu = uu[Eu + 1],
        Zu = uu[Eu + 2],
        Xu = uu[Eu + 3],
        lu = uu[Eu + 4],
        qu = uu[Eu + 5];
      for (let fu = 0; fu < 24; fu += 4) {
        const uu = ju[fu],
          Eu = ju[fu + 1],
          Cu = ju[fu + 2];
        if (!(uu * (uu >= 0 ? Xu : su) + Eu * (Eu >= 0 ? lu : Uu) + Cu * (Cu >= 0 ? qu : Zu) + ju[fu + 3] >= 0)) return !1
      }
      return !0
    }
    var DE = ju(38159);
    class gE {
      constructor(uu, Eu) {
        var ju = uu.vY;
        ju.usu(new Lu.e(ju));
        var su = new Fu.c(qu);
        ju.Wsu = su, su.blocks = [];
        var Uu, Zu = {},
          lu = [];
        this.textPlanes = lu, this.Ksu = () => Uu.Ksu(), this.I6 = uu => {
          Cu(su, uu), Uu.I6(uu)
        }, this.hsu = (Eu, ju, Xu) => {
          if (!Eu.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Eu.metadata[Tu.v] && !Eu.metadata[Tu.p]) {
            if (!ju) {
              var qu = su.msu;
              if (Eu.metadata[Tu.B] && !Eu.parent) {
                qu = lu;
                var Cu = Eu.EW().Isu;
                Eu.metadata[Tu.F] = Cu.center.length() + Cu.radius, Eu.JO = !0
              }
              return qu.push(Eu), Eu.metadata[Tu.j] = qu, void(Eu.metadata[Tu.p] = !0)
            }
            var cu = Math.floor(Xu[0] / fu),
              Nu = Math.floor(Xu[1] / fu),
              Ou = Math.floor(Xu[2] / fu),
              Yu = cu + "|" + Nu + "|" + Ou,
              hu = Zu[Yu];
            if (!hu) {
              var Du = [cu * fu, Nu * fu, Ou * fu],
                gu = [0, 0, 0];
              uu.Uc.MEu(Du, null, gu), hu = bu(gu, fu), su.blocks.push(hu), Zu[Yu] = hu, hu.Vsu = Yu
            }
            Uu.hsu(Eu, Xu), Uu.ksu(hu, Eu), hu.rsu = (hu.rsu || 0) + 1, Eu.metadata[Tu.v] = hu, Eu.metadata[Tu.q] = !0, Eu.JO = !0
          }
        }, this.rV = uu => {
          if (uu.metadata) {
            uu.metadata[Tu.p] && ((0, xu.p)(uu.metadata[Tu.j], uu), uu.metadata[Tu.p] = !1), uu.metadata[Tu.j] === lu && (uu.JO = !1), uu.metadata[Tu.j] = void 0, uu.metadata[Tu.F] = void 0;
            var Eu = uu.metadata[Tu.v];
            Eu && Eu.entries && (uu.metadata[Tu.q] && Uu.removeEntry(Eu, uu), Eu.rsu--, Eu.rsu <= 0 && (delete Zu[Eu.Vsu], (0, xu.p)(su.blocks, Eu))), Uu.rV(uu), uu.metadata[Tu.v] = null, uu.metadata[Tu.q] = !1
          }
        }, this.L_ = function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (uu.metadata[Tu.v]) {
            if (uu.metadata[Tu.q] === Eu) return;
            var ju = uu.metadata[Tu.v];
            ju && ju.entries && (Eu ? Uu.ksu(ju, uu) : Uu.removeEntry(ju, uu)), uu.metadata[Tu.q] = Eu
          } else {
            if (uu.metadata[Tu.p] === Eu) return;
            var Zu = uu.metadata[Tu.j] || su.msu;
            Eu ? Zu.push(uu) : (0, xu.p)(Zu, uu), uu.metadata[Tu.p] = Eu
          }
        };
        var qu = () => {},
          fu = Eu * uu.Uc.zb.duu,
          Cu = (uu, Eu) => {
            uu.blocks.forEach((uu => {
              uu.wsu.Qsu(Eu), uu.Gsu.Qsu(Eu), uu.vsu.forEach((uu => uu.Qsu(Eu))), uu.blocks && Cu(uu, Eu)
            }))
          },
          bu = (uu, Eu) => {
            var ju = new Xu.dO(uu[0], uu[1], uu[2]),
              su = new Xu.dO(uu[0] + Eu, uu[1] + Eu, uu[2] + Eu);
            return new Bu.d(ju, su, void 0, void 0, void 0, qu)
          };
        Uu = OE(ju, su, uu.Uc, bu, ((uu, Eu) => {
          for (var ju = 0; ju < lu.length; ju++) {
            var su = lu[ju];
            su.isEnabled(!1) && ((0, DE.e)(su, Eu) && tu.f.prototype.push.call(uu, su))
          }
        }))
      }
    }

    function ME(uu) {
      const {
        holderPosition: Eu,
        holderRotation: ju,
        jR: su,
        fov: Uu,
        near: Zu,
        far: Xu
      } = uu.model.uR, lu = uu.Asu;
      lu.position.T6(Eu[0], Eu[1], Eu[2]), lu.rotation.T6(ju[0], ju[1], ju[2]);
      const qu = uu.camera;
      qu.position.T6(su[0], su[1], su[2]), qu.fov = Uu, qu.minZ = Zu, qu.maxZ = Xu
    }

    function eE(uu) {
      const Eu = uu.wO(),
        ju = Eu,
        su = ju._gl;
      if (!su || ju.uY < 2 || Eu.bsu || su.getParameter(su.DEPTH_BITS) < 24) return !1;
      const Uu = uu._renderingManager,
        Zu = Uu.getRenderingGroup(-1),
        Xu = Uu.getRenderingGroup(0),
        lu = Qu.d.prototype.render;
      return Zu.render = function(uu, Eu, ju, su, Uu, Zu, qu, fu, Cu) {
        (uu || Xu._empty) && lu.call(this, uu, Eu, ju, su, Uu, Zu, qu, fu, Cu)
      }, Xu.render = function(uu, ju, Uu, Xu) {
        let qu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          cu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nu = arguments.length > 8 ? arguments[8] : void 0;
        uu ? lu.call(this, uu, ju, Uu, Xu, qu, fu, bu, cu, Nu) : (Eu.setAlphaMode(Cu.e.ALPHA_DISABLE), lu.call(this, null, !1, !1, Xu, qu, fu, bu, !1), Zu._empty || (su.depthRange(1, 1), lu.call(Zu, null, ju, Uu, Xu, qu, fu, bu, cu, Nu), su.depthRange(0, 1)), lu.call(this, null, ju, Uu, Xu, !1, !1, !1, cu, Nu))
      }, !0
    }

    function GE(uu, Eu) {
      return [Eu, Iu.e].map(((Eu, ju) => {
        const su = new Uu.b("light", Xu.dO.FromArray(Eu), uu);
        return su.diffuse = Zu.Color3.FromArray([1, 1, 1]), su.specular = Zu.Color3.FromArray([1, 1, 1]), su.intensity = Iu.c[ju], su
      }))
    }
    class pE extends qu.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(uu) {
        var Eu;
        this.heldTexture = uu, this.particleTexture = null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.mirror) && void 0 !== Eu ? Eu : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        uu && (this.particleTexture = null, (0, fu.D)(this.heldTexture), this.heldTexture = null), super.dispose(uu, Eu, ju)
      }
    }
    const wE = su.e.Zero();
    const JE = {
      oju: function(uu, Eu) {
        return new ku(uu, Eu.Jju, {
          preserveDrawingBuffer: Eu.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      zsu: function(uu, Eu) {
        ! function(uu, Eu, ju) {
          const su = new Wu.b(uu.engine);
          uu.vY = su, su.detachControl(), su.autoClear = !1, iu.c.MIN_RENDERINGGROUPS = -1;
          for (let Zu = iu.c.MIN_RENDERINGGROUPS; Zu <= 1; Zu++) su.setRenderingOrder(Zu, Qu.d.PainterSortCompare, Qu.d.PainterSortCompare, Qu.d.PainterSortCompare);
          su.setRenderingAutoClearDepthStencil(0, !1), ru.b.Enabled = !1, uu.tsu = new gE(uu, Math.round(Eu.Tsu)), uu.Asu = new Vu.e("camHolder", su), uu.camera = new Ku.d("camera", new Xu.dO(0, 0, 0), su), uu.camera.parent = uu.Asu, ME(uu), (0, Iu.h)(uu, ((uu, Eu, ju) => (0, Su.k)(Eu, ju, uu.vY))), su.clearColor = Zu.b.FromArray(Eu.clearColor), su.ambientColor = Zu.Color3.FromArray(Eu.ambientColor);
          const Uu = ju(su, Eu.ysu);
          su.onNewLightAddedObservable.add((uu => {
            Uu.some((Eu => Eu === uu)) || console.error(`Light "${uu.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), su.skipPointerMovePicking = !0
        }(uu, Eu, GE), eE(uu.vY)
      },
      Hsu: ME,
      setBabylonFog: function(uu, Eu, ju, su) {
        const Uu = uu.vY;
        Uu.fogMode = 3, Uu.fogStart = Eu, Uu.fogEnd = ju, Uu.fogColor.set(su[0], su[1], su[2])
      },
      uUu: function(uu, Eu, ju) {
        return uu.engine.uY >= 2 && (uu.EUu || (uu.EUu = new Pu(uu.vY, uu.jUu)), !uu.EUu.failed) ? uu.EUu.Kr(Eu, ju) : new pE(Eu, ju, uu.vY)
      },
      UUu: function(uu, Eu) {
        uu.vY.WG.forEach((ju => {
          if (ju instanceof du) return void ju.I6(Eu, uu.Uc.ec);
          const su = ju;
          if (su.emitter.getConnectedParticleSystems)
            for (const uu of su._particles) uu.position.set(uu.position.x - Eu[0], uu.position.y - Eu[1], uu.position.z - Eu[2]);
          else {
            if (!su.worldOffset) throw new Error("Particle system has no world offset");
            su.worldOffset.x = -uu.Uc.ec[0], su.worldOffset.y = -uu.Uc.ec[1], su.worldOffset.z = -uu.Uc.ec[2]
          }
        }))
      },
      linesFromArrays: function(uu, Eu, ju) {
        const su = new lu.e(Eu, uu.vY, null, void 0, void 0, !1);
        return (0, Su.h)(Eu, ju, uu.vY, su), su
      },
      KY: fE,
      sUu: function(uu, Eu) {
        return wE.origin.yJ(Eu.origin), wE.direction.yJ(Eu.direction), wE.length = Eu.length, wE.epsilon = Eu.epsilon, wE.sUu(uu, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41346: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Fu,
      g: () => gu,
      k: () => Hu
    });
    var su = ju(40514),
      Uu = ju(41353),
      Zu = ju(41400),
      Xu = ju(41360),
      lu = ju(38209),
      qu = ju(38218),
      fu = ju(38220),
      Cu = ju(38226),
      bu = ju(37621),
      cu = ju(37630),
      Nu = ju(41364),
      Ou = ju(37595),
      Yu = ju(37603),
      hu = ju(37582);

    function Du(uu, Eu) {
      return Object.assign((function(uu, ju, su, Uu) {
        return Eu(this.featureState, uu, ju, su, Uu)
      }), {
        yN: uu
      })
    }

    function gu(uu) {
      const Eu = class extends Nu.e {
          constructor(Eu, ju) {
            const su = (0, Yu.$)(Eu),
              Uu = su && (0, Yu.z)(su, uu.name);
            for (var Zu = arguments.length, Xu = new Array(Zu > 2 ? Zu - 2 : 0), lu = 2; lu < Zu; lu++) Xu[lu - 2] = arguments[lu];
            super(Eu, uu.name, uu.priority, Uu ? Uu.defines : uu.defines(...Xu), !1), this.featureState = void 0, this.featureState = ju, this._pluginManager._addPlugin(this), this._enable(!0), (0, Yu.D)(this._material, uu, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return uu.className
          }
          isCompatible(uu) {
            return uu === hu.c.GLSL || uu === hu.c.WGSL
          }
        },
        ju = (0, Ou.h)(uu);
      for (const [su, Uu] of Object.entries(Ou.b)) {
        const Zu = uu[su];
        if (Zu) {
          const uu = ju[su];
          Object.defineProperty(Eu.prototype, Uu, {
            value: Du(Zu, uu),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Eu
    }
    class Mu extends(gu(lu.c)) {}
    var eu = ju(40092),
      Gu = ju(41366),
      pu = ju(41373);

    function wu(uu, Eu, ju) {
      return (0, pu.g)(ju, Eu.urls, (() => async function(uu, Eu, ju) {
        const {
          width: su
        } = uu[0].getSize(), Uu = uu.map(((uu, ju) => {
          var Uu;
          const Zu = Math.round(uu.getSize().height / su),
            Xu = null === Eu || void 0 === Eu ? void 0 : Eu[ju];
          return {
            pixels: Xu && Xu.byteLength === su * su * Zu * 4 ? Xu : null !== (Uu = Ju.get(uu.getInternalTexture())) && void 0 !== Uu ? Uu : uu._readPixelsSync(),
            layers: Zu
          }
        })), Zu = ju.wO().getCaps().texture2DArrayMaxLayerCount, lu = (0, pu.e)(Uu, su, Zu).map((uu => {
          let {
            pixels: Eu,
            layers: Uu
          } = uu;
          return {
            atlas: new Gu.d(Eu, su, su, Uu, eu.c.TEXTUREFORMAT_RGBA, ju, !0, !1, Xu.c.NEAREST_NEAREST_MIPLINEAR),
            layers: Uu
          }
        }));
        return uu.forEach(((uu, Eu) => {
          const su = uu.getInternalTexture();
          Ju.has(su) || (! function(uu, Eu) {
            const ju = Eu.createRawTexture(new Uint8Array(4), 1, 1, eu.c.TEXTUREFORMAT_RGBA, !1, !1, Xu.c.NEAREST_SAMPLINGMODE);
            uu._hardwareTexture.release(), Eu.unbindAllTextures(), ju._swapAndDie(uu, !1)
          }(su, ju.wO()), Ju.set(su, Uu[Eu].pixels))
        })), lu
      }(uu, Eu.pixels, ju)))
    }
    const Ju = new WeakMap;
    var du = ju(38232);
    class au extends(gu(qu.h)) {
      constructor(uu, Eu) {
        super(uu, Eu), this.loaded = new Set, this.mirrors = void 0, this.mirrors = Eu.textures.map((uu => uu.mirror)), this.mirrors.forEach(((uu, Eu) => {
          uu.onLoadObservable.add((uu => {
            this.setTextureArrayData(uu, Eu).catch((uu => {
              console.error(`Failed to build the texture arrays, at atlas ${Eu}`, uu)
            }))
          }))
        })), (0, du.i)(Eu, uu.shaderLanguage)
      }
      async setTextureArrayData(uu, Eu) {
        const ju = this.featureState,
          {
            width: su,
            height: Uu
          } = uu.getSize(),
          Zu = this._material.shaderLanguage;
        if (!ju.useWebGL2) return void(0, du.e)(this._material, ju, Eu, su, Math.round(Uu / su), Zu);
        if (this.loaded.add(Eu), this.loaded.size < this.mirrors.length) return;
        const Xu = await wu(this.mirrors, ju.sources, this._material.hV());
        (0, du.b)(this._material, ju, Xu, su, Zu)
      }
    }
    var Pu = ju(41378),
      ou = ju(40574),
      ku = ju(37488),
      mu = ju(41387),
      vu = ju(40668),
      Ku = ju(40556),
      Vu = ju(41329),
      ru = ju(37969),
      Qu = ju(41394);
    class iu extends Pu.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Wu = {
      Mesh: mu.d,
      TransformNode: Vu.e,
      qO: Pu.d,
      VertexBuffer: Pu.e,
      BoundingInfo: ou.c,
      dO: ku.dO,
      ArenaBuffer: iu,
      SubMesh: Ku.e,
      VertexData: vu.b,
      MirroredGeometry: Qu.e,
      meshFromArrays: Qu.h,
      plainMeshFromArrays: Qu.k
    };
    (0, ru.d)(Wu);
    var Su = ju(37816);
    class Iu extends(gu(Cu.h)) {
      constructor(uu, Eu) {
        if (super(uu, Eu), uu instanceof su.StandardMaterial && Eu.dirLightCount > 0) {
          const Eu = uu,
            ju = Eu._blockDirtyMechanism;
          Eu._blockDirtyMechanism = !0, uu.disableLighting = !0, Eu._blockDirtyMechanism = ju;
          const su = (0, Yu.$)(uu);
          su && (su.disableLighting = !0, (0, Yu.Z)(su))
        }(0, Su.h)(uu)
      }
      dispose(uu) {
        (0, Su.k)(this._material), super.dispose(uu)
      }
    }

    function Fu(uu, Eu) {
      if (!(Eu instanceof su.StandardMaterial) || Eu.specularTexture) return;
      const {
        r: ju,
        g: Uu,
        b: Zu
      } = Eu.specularColor;
      0 === ju && 0 === Uu && 0 === Zu && (uu.SPECULARTERM = !1)
    }(0, Cu.d)({
      disableUnusedSpecularTerm: Fu
    });
    var Bu = ju(37704),
      Lu = ju(37977);
    const tu = new RegExp(`^#define ${fu.c}\\s*$`, "m");
    class xu extends(gu(fu.f)) {
      constructor(uu, Eu) {
        super(uu, Eu), this.fO = !1, Eu.ditherOnlyWhileFading && (Lu.h.add(uu), this.prewarmDitherTwins(uu))
      }
      prewarmDitherTwins(uu) {
        const Eu = new WeakSet;
        uu.onEffectCreatedObservable.add((ju => {
          let {
            effect: su,
            subMesh: Uu
          } = ju;
          if (this.featureState.prewarmingDither || Eu.has(su)) return;
          Eu.add(su);
          const Zu = null === Uu || void 0 === Uu ? void 0 : Uu.getMesh();
          Zu && !tu.test(su.defines) && uu.hV().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Zu) || Eu.delete(su)
          }))
        }))
      }
      prewarmDither(uu) {
        if (this.fO || uu.Gw()) return !1;
        const Eu = new Ku.e(0, 0, 0, 0, 0, uu, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(uu, Eu)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Eu.effect
      }
      dispose(uu) {
        this.fO = !0, super.dispose(uu)
      }
    }
    const Tu = new Map;

    function Hu(uu, Eu) {
      Tu.set(uu, Eu)
    }
    Hu(lu.c, Mu), Hu(qu.h, au), Hu(fu.f, xu), Hu(Cu.h, Iu), (0, bu.b)({
      create: (uu, Eu) => {
        const ju = new su.StandardMaterial(uu.name, Eu);
        return (0, Bu.s)(uu, ju), ju.detailMap._pluginDefineNames
      },
      write: (uu, Eu, ju) => {
        (0, Bu.Y)(uu.mirror, Eu, ju)
      },
      addFeature: (uu, Eu, ju) => {
        const su = Tu.get(Eu.feature);
        if (!su) throw new Error(`${Eu.feature.name} has no plugin class (registerPluginClass)`);
        new su(uu.mirror, Eu.state, ...ju)
      },
      texture: (uu, Eu, ju) => {
        let {
          url: su,
          noMipmap: Uu,
          invertY: Zu,
          samplingMode: lu,
          data: qu,
          sets: fu
        } = ju;
        if (!qu) {
          const ju = new Xu.c(su, Eu, Uu, Zu, lu);
          return Object.assign(ju, fu), void(0, cu.G)(uu, ju)
        }
        const Cu = {},
          bu = new Promise(((uu, Eu) => {
            Cu.onLoad = uu, Cu.onError = (uu, ju) => {
              Eu(new Error(`${qu.context}: ${(null===ju||void 0===ju?void 0:ju.message)||uu||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Nu,
            bytes: Ou,
            label: Yu
          } = qu,
          hu = {
            noMipmap: Uu,
            invertY: !1,
            samplingMode: lu,
            ...Cu,
            mimeType: Nu,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Du = new Xu.c(null, Eu, hu);
        Bu.v.set(Du, bu), Object.assign(Du, fu), Du.updateURL(su, Ou);
        const gu = Du.getInternalTexture();
        gu && (gu.label = Yu), uu.uvSet = Du.coordinatesIndex, uu.matrix.set((0, Bu.Q)(Du)), (0, cu.G)(uu, Du)
      },
      cube: (uu, Eu, ju) => {
        let {
          rootUrl: su,
          files: Zu,
          noMipmap: lu,
          luminance: qu
        } = ju;
        const {
          samplingMode: fu
        } = uu.sampler, Cu = fu === (0, cu.z)(lu) ? null : () => {
          (0, Bu.O)(bu, fu)
        }, bu = new Uu.e(su, Eu, null, lu, Zu, Cu, null, (0, cu.x)(qu));
        bu.coordinatesMode = Xu.c.SKYBOX_MODE, (0, cu.G)(uu, bu)
      },
      canvas: (uu, Eu, ju) => {
        let {
          width: su,
          height: Uu,
          mipmaps: lu,
          samplingMode: qu,
          hasAlpha: fu = !1,
          wrap: Cu = Xu.c.CLAMP_ADDRESSMODE
        } = ju;
        const bu = new Zu.d(Eu, {
          width: su,
          height: Uu
        }, uu, lu, qu);
        bu.hasAlpha = fu, bu.wrapU = Cu, bu.wrapV = Cu;
        const cu = (0, Bu.G)(bu);
        return (0, Bu.I)(cu, bu), cu
      }
    })
  },
  41394: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      h: () => bu,
      k: () => cu
    });
    var su = ju(41378),
      Uu = ju(40319),
      Zu = ju(40574),
      Xu = ju(40676),
      lu = ju(41387),
      qu = ju(40668),
      fu = ju(37867);
    class Cu extends Xu.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (uu, Eu) => {
          this.releaseUnlessInstanced(Eu)
        }, this.onLinked = null
      }
      link(uu) {
        var Eu;
        (0, fu.p)(uu), this.model = uu, null === (Eu = this.onLinked) || void 0 === Eu || Eu.call(this, uu)
      }
      relink() {
        this.release();
        const uu = [];
        for (const Uu of Object.values(this._vertexBuffers))
          if (!Uu.getIsInstanced()) {
            const {
              byteOffset: Eu,
              byteStride: ju,
              type: su,
              normalized: Zu
            } = Uu;
            uu.push({
              kind: Uu.getKind(),
              data: Uu.getData(),
              offset: Eu,
              stride: ju,
              components: Uu.getSize(),
              glType: su,
              isNormalized: Zu
            })
          } const Eu = this._indices.length ? this._indices : null,
          {
            minimum: ju,
            maximum: su
          } = this.extend;
        this.link(new fu.f(uu, Eu, this.getTotalVertices(), new Float64Array(ju.Osu()), new Float64Array(su.Osu())))
      }
      copy(uu) {
        if (!this.model) return super.copy(uu);
        const Eu = new Cu(uu, this.hV()),
          ju = this.Ysu(void 0, !0);
        ju && Eu.setIndices(ju);
        let Xu = !1;
        for (const Zu in this._vertexBuffers) {
          const uu = this._vertexBuffers[Zu],
            ju = uu.getData();
          if (!ju) continue;
          const lu = uu.getSize(),
            {
              type: qu,
              byteOffset: fu,
              byteStride: Cu,
              normalized: bu
            } = uu;
          Xu ||= uu.isUpdatable();
          const cu = uu.getIsInstanced() ? (ju instanceof Array ? 4 * ju.length : ju.byteLength) / Cu : this.getTotalVertices(),
            Nu = (0, Uu.s)(ju, lu, qu, fu, Cu, cu, !0),
            Ou = {
              updatable: uu.isUpdatable(),
              stride: lu,
              type: qu,
              normalized: bu,
              takeBufferOwnership: !0,
              instanced: uu.getIsInstanced()
            };
          Eu.setVerticesBuffer(new su.e(this.wO(), Nu, Zu, Ou), cu)
        }
        return Eu._updatable = Xu, Eu._boundingInfo = new Zu.c(this.extend.minimum, this.extend.maximum), Eu.relink(), Eu
      }
      static mergeMeshes(uu, Eu, ju, su, Uu, Zu) {
        const qu = uu[0].hV(),
          fu = new lu.d(uu[0].name + "_merged", qu),
          bu = new Cu(Xu.b.RandomId(), qu, void 0, !1, fu);
        try {
          if (!lu.d.MergeMeshes(uu, Eu, ju, fu, Uu, Zu)) return fu.dispose(), null
        } catch (cu) {
          throw fu.dispose(), cu
        }
        return bu.relink(), fu
      }
      removeVerticesData(uu) {
        this.releaseUnlessInstanced(uu), super.removeVerticesData(uu)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(uu) {
        var Eu;
        uu && null !== (Eu = this.getVertexBuffer(uu)) && void 0 !== Eu && Eu.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, fu.x)(this.model), this.model = null)
      }
    }

    function bu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new lu.d(uu, ju);
      const Uu = (0, fu.n)(Eu),
        {
          positions: Zu,
          normals: bu,
          uvs: cu,
          indices: Nu,
          named: Ou = {}
        } = Eu,
        Yu = new qu.b;
      Yu.positions = Zu, Yu.normals = null !== bu && void 0 !== bu ? bu : null, Yu.uvs = null !== cu && void 0 !== cu ? cu : null, Yu.indices = Nu;
      const hu = new Cu(Xu.b.RandomId(), ju, Yu, !1, su);
      for (const {
          kind: Xu,
          components: lu
        }
        of Uu.vertexAttributes) Xu in Ou && su.setVerticesData(Xu, Ou[Xu], !1, lu);
      return hu.link(Uu), su
    }

    function cu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Uu = new lu.d(uu, ju),
        {
          positions: Zu,
          normals: Xu,
          uvs: fu,
          indices: Cu
        } = Eu;
      return Object.assign(new qu.b, {
        positions: Zu,
        normals: Xu,
        uvs: fu,
        indices: Cu
      }).applyToMesh(Uu, su), Uu
    }
  },
  41870: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => hu,
      h: () => lu,
      i: () => Xu,
      l: () => fu
    });
    var su = ju(37671),
      Uu = ju(39056),
      Zu = ju(39052);

    function Xu(uu, Eu, ju, su) {
      const Uu = Zu.v;
      Eu.fill(0), uu.gravity.toArray(Eu, Uu.gravity), uu.colorDead.toArray(Eu, Uu.colorDead), ju[Uu.ramp] = uu.useRampGradients ? 1 : 0;
      const Xu = uu.getColorGradients(),
        lu = cu(uu, Xu, "colour", su);
      ju[Uu.colorCount] = lu;
      for (let Zu = 0; Zu < lu; Zu++) {
        var qu;
        const uu = Xu[Nu(Xu, Zu)];
        Eu[Uu.colorPositions + Zu] = uu.gradient, uu.color1.toArray(Eu, Uu.color1 + 4 * Zu), (null !== (qu = uu.color2) && void 0 !== qu ? qu : uu.color1).toArray(Eu, Uu.color2 + 4 * Zu)
      }
      const fu = uu.getVelocityGradients(),
        Cu = cu(uu, fu, "RY", su);
      ju[Uu.velocityCount] = Cu;
      for (let Zu = 0; Zu < Cu; Zu++) gu(Eu, Uu.RY + 4 * Zu, fu[Nu(fu, Zu)]);
      const bu = uu.useRampGradients ? uu.getColorRemapGradients() : null,
        Ou = cu(uu, bu, "colour remap", su);
      ju[Uu.remapCount] = Ou;
      for (let Zu = 0; Zu < Ou; Zu++) gu(Eu, Uu.remap + 4 * Zu, bu[Nu(bu, Zu)])
    }

    function lu() {
      return {
        key: [],
        texels: new Uint8Array(4 * Zu.j)
      }
    }
    const qu = [];

    function fu(uu, Eu) {
      return Cu(uu, qu), !Du(qu, Eu.key) && (Eu.key.length = 0, Eu.key.push(...qu), Eu.key.length > 0 && function(uu, Eu) {
        for (let ju = 0; ju < Zu.j; ju++) Uu.m.GetCurrentGradient(ju / Zu.j, uu, ((uu, Eu, ju) => {
          su.Color3.LerpToRef(uu.color, Eu.color, ju, bu)
        })), Eu[4 * ju] = 255 * bu.r, Eu[4 * ju + 1] = 255 * bu.g, Eu[4 * ju + 2] = 255 * bu.b, Eu[4 * ju + 3] = 255
      }(uu.getRampGradients(), Eu.texels), !0)
    }

    function Cu(uu, Eu) {
      Eu.length = 0;
      const ju = uu.useRampGradients ? uu.getRampGradients() : null;
      if (null !== ju && void 0 !== ju && ju.length) {
        Eu.push(ju.length);
        for (const uu of ju) Eu.push(uu.gradient, uu.color.r, uu.color.g, uu.color.b)
      }
    }
    const bu = new su.Color3;

    function cu(uu, Eu, ju, su) {
      return Eu ? Eu.length > Zu.b ? (su(`particleStops:${ju}`, `GPU particles use the first 2 and last ${Zu.b-2} of more than ${Zu.b} ${ju} gradient stops (${uu.name})`), Zu.b) : Eu.length : 0
    }

    function Nu(uu, Eu) {
      return Eu < 2 || uu.length <= Zu.b ? Eu : uu.length - Zu.b + Eu
    }
    const Ou = new Float32Array(Zu.p),
      Yu = new Uint32Array(Ou.buffer);

    function hu(uu, Eu, ju) {
      return Xu(uu, Ou, Yu, ju), Eu && Du(Yu, Eu) ? null : Yu.slice()
    }

    function Du(uu, Eu) {
      if (uu.length !== Eu.length) return !1;
      for (let ju = 0; ju < uu.length; ju++)
        if (uu[ju] !== Eu[ju]) return !1;
      return !0
    }

    function gu(uu, Eu, ju) {
      var su;
      uu[Eu] = ju.gradient, uu[Eu + 1] = ju.factor1, uu[Eu + 2] = null !== (su = ju.factor2) && void 0 !== su ? su : ju.factor1
    }
  },
  41373: (uu, Eu, ju) => {
    function su(uu, Eu, ju) {
      const su = Eu * Eu * 4,
        Uu = uu[0].layers,
        Zu = Uu * (uu.length - 1) + uu[uu.length - 1].layers,
        Xu = new Uint8Array(Zu * su);
      uu.forEach(((Eu, ju) => {
        const Zu = ju + 1 < uu.length ? Math.min(Eu.layers, Uu) : Eu.layers;
        Xu.set(new Uint8Array(Eu.pixels.buffer, Eu.pixels.byteOffset, Zu * su), ju * Uu * su)
      }));
      const lu = Math.max(1, Math.min(Zu, ju || Zu));
      if (lu === Zu) return [{
        pixels: Xu,
        layers: Zu
      }];
      const qu = [];
      for (let fu = 0; fu < Zu; fu += lu) {
        const uu = Math.min(Zu, fu + lu);
        qu.push({
          pixels: Xu.slice(fu * su, uu * su),
          layers: uu - fu
        })
      }
      return qu
    }
    ju.d(Eu, {
      e: () => su,
      g: () => Zu
    });
    const Uu = new WeakMap;

    function Zu(uu, Eu, ju) {
      var su, Zu;
      const Xu = null !== (su = Uu.get(uu)) && void 0 !== su ? su : new Map;
      Uu.set(uu, Xu);
      const lu = null !== (Zu = Xu.get(Eu[0])) && void 0 !== Zu ? Zu : [];
      Xu.set(Eu[0], lu);
      const qu = lu.find((uu => uu.urls.length === Eu.length && uu.urls.every(((uu, ju) => uu === Eu[ju]))));
      if (qu) return qu.built;
      const fu = {
        urls: [...Eu],
        built: ju()
      };
      return lu.push(fu), fu.built.catch((() => {
        lu.splice(lu.indexOf(fu), 1)
      })), fu.built
    }
  },
  41861: (uu, Eu, ju) => {
    function su() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Eu = new Set;
      return (ju, su) => {
        Eu.has(ju) || (Eu.add(ju), console.warn(uu + su))
      }
    }
    ju.d(Eu, {
      d: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);