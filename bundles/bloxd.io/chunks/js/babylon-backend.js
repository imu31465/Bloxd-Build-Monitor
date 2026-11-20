export const id = 0;
export const ids = [0];
export const modules = {
  40701: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      CapeMaterialPlugin: () => du,
      HueTintMaterialPlugin: () => bu,
      LifeformMaterialPlugin: () => Cu,
      OverlayMaterialPlugin: () => ku
    });
    var Eu = yu(40703),
      Ku = yu(37757);
    class Qu extends((0, Eu.h)(Ku.b)) {}(0, Eu.k)(Ku.b, Qu);
    var mu = yu(36898);
    class Ju extends((0, Eu.h)(mu.i)) {}(0, Eu.k)(mu.i, Ju);
    var Nu = yu(37617);
    class Xu extends((0, Eu.h)(Nu.g)) {}(0, Eu.k)(Nu.g, Xu);
    var Vu = yu(37150),
      ru = yu(39827),
      Bu = yu(37141);
    class xu extends((0, Eu.h)(Bu.c)) {
      constructor(uu, Ru, yu) {
        super(uu, Ru, yu), (0, Vu.l)(uu)
      }
      dispose(uu) {
        (0, Vu.n)(this._material), super.dispose(uu)
      }
    }(0, Eu.k)(Bu.c, xu), (0, Bu.g)({
      disableUnusedSpecularTerm: Eu.e,
      isLightingDisabled: uu => uu instanceof ru.StandardMaterial && uu.disableLighting
    });
    var Su = yu(38458);
    class pu extends((0, Eu.h)(Su.f)) {}(0, Eu.k)(Su.f, pu);
    var Tu = yu(38558),
      Wu = yu(36994),
      ju = yu(37876),
      Hu = yu(36943);
    class du extends((0, Eu.h)(Tu.d)) {}(0, Eu.k)(Tu.d, du);
    class bu extends((0, Eu.h)(Wu.d)) {}(0, Eu.k)(Wu.d, bu);
    class Cu extends((0, Eu.h)(ju.j)) {}(0, Eu.k)(ju.j, Cu);
    class ku extends((0, Eu.h)(Hu.b)) {}(0, Eu.k)(Hu.b, ku)
  },
  41130: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      addBabylonLights: () => WR,
      default: () => dR
    });
    var Eu = yu(41135),
      Ku = (yu(39539), yu(40692), yu(40057), yu(41145)),
      Qu = yu(39380),
      mu = yu(36986),
      Ju = yu(36828),
      Nu = yu(41154),
      Xu = yu(41162),
      Vu = yu(36934),
      ru = (yu(40703), yu(41171)),
      Bu = yu(41165),
      xu = yu(38483),
      Su = yu(41174),
      pu = yu(39403),
      Tu = yu(38467);
    const Wu = "gpuParticles",
      ju = Tu.w,
      Hu = uu => uu / 4,
      du = uu => `gpuParticleSystem[${uu>>2}].${"xyzw"[3&uu]}`,
      bu = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Tu.c}\n#define COLOR_POSITIONS ${Hu(ju.colorPositions)}\n#define COLOR1 ${Hu(ju.color1)}\n#define COLOR2 ${Hu(ju.color2)}\n#define VELOCITY ${Hu(ju.JT)}\n#define REMAP ${Hu(ju.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Tu.o/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${du(ju.gravity)}, ${du(ju.gravity+1)}, ${du(ju.gravity+2)}); }\nint colorCount() { return int(${du(ju.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Hu(ju.colorDead)}]; }\nint velocityCount() { return int(${du(ju.velocityCount)}); }\nint remapCount() { return int(${du(ju.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    pu.e.ShadersStore[`${Wu}VertexShader`] = bu, pu.e.ShadersStore[`${Wu}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Cu = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      ku = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var eu = yu(38460),
      Au = yu(41178);
    class Du extends eu.b {
      constructor(uu, Ru, yu, Eu) {
        super(uu, Ru, yu), this.renderer = yu, this.cp = Eu, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(Tu.o), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Au.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (uu, Ru) => {
          const {
            engine: yu,
            perRow: Eu
          } = this, Ku = yu._gl;
          yu._bindTextureDirectly(Ku.TEXTURE_2D, this.records, !0), yu._unpackFlipY(!1);
          const Qu = this.ring.recordBits;
          for (let mu = uu; mu < Ru;) {
            const uu = Math.floor(mu / Eu),
              yu = Math.min(Ru, (uu + 1) * Eu);
            Ku.texSubImage2D(Ku.TEXTURE_2D, 0, mu % Eu * 4, uu, 4 * (yu - mu), 1, Ku.RGBA_INTEGER, Ku.UNSIGNED_INT, Qu, mu * Tu.e), mu = yu
          }
          yu._bindTextureDirectly(Ku.TEXTURE_2D, null)
        }, this.id = uu;
        const Ku = Eu.eS();
        this.engine = Ku;
        const Qu = Math.max(1, Ru);
        this.perRow = Math.min(Qu, 256), this.records = Ku.createRawTexture(null, 4 * this.perRow, Math.ceil(Qu / this.perRow), ru.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, ru.c.TEXTURE_NEAREST_SAMPLINGMODE, null, ru.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.cp.getAnimationRatio() || 1;
        const Ru = this.cp.getFrameId();
        if (Ru === this.animatedFrame) return !1;
        const yu = super.animate(uu);
        return yu && (this.animatedFrame = Ru, this.ring.takeUploads(this.uploadSlots)), yu
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(uu) {
        (0, Au.h)(this, this.uniforms, this.uniformBits, uu);
        for (const yu of Tu.s) this.uniforms[yu] = this.uniformBits[yu];
        var Ru;
        (0, Au.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Ru = this.ramp) || void 0 === Ru || Ru.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Bu.d.CreateRGBATexture(this.rampTexels.texels, Tu.k, 1, this.cp, !1, !1, ru.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var uu;
        this.records.dispose(), null === (uu = this.ramp) || void 0 === uu || uu.dispose(), this.ramp = null
      }
    }
    class Mu {
      constructor(uu) {
        this.cp = uu, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Su.c)(), this.engine = uu.eS(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Bu.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, uu, !1, !1, ru.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      xI(uu, Ru) {
        const yu = 256 * this.engine.getCaps().maxTextureSize;
        Ru > yu && this.warnOnce(`capacity:${uu}`, `particle system ${uu} holds ${yu} particles, not ${Ru}: its records texture's limit`);
        const Eu = new Du(uu, Math.min(Ru, yu), this, this.cp);
        return this.cp.addParticleSystem(Eu), Eu
      }
      canDraw(uu) {
        var Ru, yu;
        if (this.failed || null === (Ru = uu.texture) || void 0 === Ru || null === (yu = Ru.mirror) || void 0 === yu || !yu.isReady()) return !1;
        for (const Eu of (0, xu.j)(uu.blendMode))
          if (!this.effectFor(Eu).isReady()) return !1;
        return !0
      }
      disposeStopped(uu) {
        this.cp._toBeDisposed.push(uu)
      }
      remove(uu) {
        this.cp.removeParticleSystem(uu), uu.releaseGl()
      }
      render(uu) {
        var Ru;
        if (!uu.isReady() || !uu.hasLiveParticles()) return 0;
        const {
          engine: yu,
          cp: Eu,
          frame: Ku
        } = this;
        uu.prepareDraw(this.warnOnce), uu.drawOffset(Ku, 0), Ku[3] = uu.drawTime();
        const Qu = uu.ring.drawStart(),
          mu = uu.ring.drawCount(),
          Ju = null !== (Ru = uu.ramp) && void 0 !== Ru ? Ru : this.whiteRamp;
        yu.setState(!1);
        for (const Nu of (0, xu.j)(uu.blendMode)) {
          const Ru = this.effectFor(Nu);
          yu.enableEffect(Ru), Ru.setTexture("gpuParticleTexture", uu.texture.mirror), Ru.setTexture("gpuParticleRampTexture", Ju), Ru._bindTexture("gpuParticleRecords", uu.records), Ru.setMatrix("gpuParticleView", Eu.getViewMatrix()), Ru.setMatrix("gpuParticleProjection", Eu.getProjectionMatrix()), Ru.setFloatArray4("gpuParticleSystem", uu.uniforms), Ru.setFloat4("gpuParticleFrame", Ku[0], Ku[1], Ku[2], Ku[3]), Ru.setFloat2("gpuParticleRange", Qu, mu), Ru.setFloat("gpuParticleRamp", uu.uniforms[Tu.w.ramp]), yu.bindBuffers(this.vertexBuffers, null, Ru), yu.setAlphaMode((0, xu.h)(Nu)), yu.drawArraysType(ru.c.MATERIAL_TriangleStripDrawMode, 0, 4, mu), Ru._bindTexture("gpuParticleRecords", null)
        }
        return yu.setAlphaMode(ru.c.ALPHA_DISABLE), mu
      }
      awaitLink(uu) {
        const Ru = uu.getPipelineContext(),
          yu = this.engine._gl;
        !this.failed && yu && (!Ru || Ru.isParallelCompiled && !Ru.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Ru.isParallelCompiled && Ru.program && (yu.getProgramParameter(Ru.program, yu.LINK_STATUS) || this.fail(yu.getProgramInfoLog(Ru.program) || "a program did not link")))
      }
      effectFor(uu) {
        return uu === xu.b ? this.multiplyEffect : this.effect
      }
      createEffect(uu) {
        return this.engine.createEffect(Wu, [], Cu, ku, uu, void 0, void 0, ((uu, Ru) => {
          this.fail(Ru)
        }))
      }
      fail(uu) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${uu}`);
          for (const uu of this.cp.JC.slice()) uu instanceof Du && uu.disposeOnStop && uu.dispose()
        }
      }
    }
    var Iu = yu(39766),
      Gu = yu(40683),
      Uu = yu(39514),
      nu = yu(39729),
      su = yu(39721),
      tu = yu(39643),
      lu = yu(40744),
      gu = yu(37332),
      cu = yu(41183),
      Lu = yu(41191),
      zu = yu(41193),
      Fu = yu(39667),
      wu = yu(37223),
      Zu = yu(37215),
      hu = yu(39886),
      Pu = yu(37292),
      iu = yu(37239);

    function Yu(uu) {
      if (uu.visibility < 1 || !uu.isVisible || !uu.isEnabled() || uu.metadata[iu.f] || !uu.isReady()) return !0;
      const Ru = uu.mC;
      if (!Ru || 0 === Ru.length) return !0;
      for (let yu = 0; yu < Ru.length; yu++) {
        const Eu = Ru[yu],
          Ku = Eu.nS();
        if (!Ku || !Ku.isReadyForSubMesh(uu, Eu, !1)) return !0
      }
      return !1
    }
    class ou {
      constructor(uu, Ru) {
        this.Yr = uu, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Ru.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Kx(uu) {
        var Ru;
        const yu = this.armed;
        if (this.armed = !1, this.vis = null, !yu) return !1;
        this.culled = 0;
        const {
          Yr: Eu
        } = this, Ku = null === (Ru = Eu.RC) || void 0 === Ru ? void 0 : Ru.visibility;
        if (!Ku || !uu || Eu.oS.qS) return !1;
        if (!(Eu.Fr.lEu[0] >= Pu.i)) return !1;
        const Qu = uu.getProjectionMatrix().m;
        if (0 !== Qu[15]) return !1;
        const mu = Eu.BB,
          Ju = uu.globalPosition,
          Nu = this.eye;
        return Nu[0] = Ju.x + mu[0], Nu[1] = Ju.y + mu[1], Nu[2] = Ju.z + mu[2], !!Ku.eyeClear(Nu[0], Nu[1], Nu[2], uu.minZ, Qu, Eu.Fr) && (this.vis = Ku, this.passable.clear(), this.count = 0, !0)
      }
      see(uu, Ru) {
        const yu = this.count++;
        if (yu === this.cellSlots.length) {
          const uu = new Int32Array(2 * yu);
          uu.set(this.cellSlots), this.cellSlots = uu
        }
        this.cellSlots[yu] = Ru, this.meshes[yu] = uu
      }
      seeThrough(uu) {
        this.passable.add(uu)
      }
      finish(uu, Ru) {
        const {
          vis: yu,
          eye: Eu,
          meshes: Ku,
          count: Qu,
          cellSlots: mu
        } = this, {
          Fr: Ju
        } = this.Yr, [Nu, Xu] = Ju.lEu, Vu = null !== yu && yu.update(Eu[0], Eu[1], Eu[2], Ju.Luu, Nu, Xu, this.passable);
        let ru = 0;
        for (let Bu = 0; Bu < Qu; Bu++) {
          const Eu = Ku[Bu];
          if (Vu) {
            const uu = 3 * mu[Bu];
            if (uu >= 0 && !yu.isDrawn(Ru[uu], Ru[uu + 1], Ru[uu + 2])) {
              ru++;
              continue
            }
          }
          Fu.i.prototype.push.call(uu, Eu)
        }
        Ku.fill(null, 0, Qu), this.count = 0, this.vis = null, this.culled = ru
      }
    }
    var qu = yu(37277),
      Ou = yu(37233),
      vu = yu(39863),
      au = yu(41197),
      fu = yu(39866),
      uR = yu(39780);
    let RR = 1;
    const yR = new WeakSet;

    function ER() {
      return RR
    }

    function KR() {
      RR = RR >= 1073741823 ? 1 : RR + 1
    }

    function QR(uu) {
      const Ru = uu.metadata;
      if (!Ru || !0 !== Ru[Zu.p]) return;
      const yu = Ru[Zu.r],
        Eu = null === yu || void 0 === yu ? void 0 : yu._noaStamps;
      if (!yu || !Eu) return;
      const Ku = yu.entries.indexOf(uu);
      Ku >= 0 && (Eu[Ku] = 0)
    }

    function mR(uu) {
      const Ru = uu.mC;
      for (let yu = 0; yu < Ru.length; yu++) {
        const uu = Ru[yu].nS();
        if (uu && !uu.isFrozen) return !1
      }
      for (let yu = 0; yu < Ru.length; yu++) {
        const uu = Ru[yu].nS();
        uu && yR.add(uu)
      }
      return !0
    }
    let JR = !1;
    const NR = new WeakSet;

    function XR(uu, Ru) {
      const yu = uu[Ru];
      if ("function" !== typeof yu) throw new Error(`terrainDrawState: Babylon has no ${Ru} to hook`);
      return yu
    }

    function VR(uu, Ru, yu, Eu, Ku) {
      const Qu = yu.Fr.Luu,
        mu = new Map;
      let Ju = 0;
      const Nu = new ou(yu, uu),
        Xu = new qu.e(Qu, uu.eS());
      ! function(uu) {
        if (NR.has(uu) || (NR.add(uu), uu.onContextLostObservable.add(KR), uu.onContextRestoredObservable.add(KR)), JR) return;
        JR = !0;
        const Ru = au.e.prototype,
          yu = XR(Ru, "_markSubMeshesAsDirty");
        Object.assign(Ru, {
          _markSubMeshesAsDirty(uu) {
            yu.call(this, uu), QR(this)
          }
        });
        const Eu = XR(uR.e.prototype, "_syncParentEnabledState");
        Object.assign(uR.e.prototype, {
          _syncParentEnabledState() {
            Eu.call(this), QR(this)
          }
        });
        const Ku = XR(fu.c.prototype, "resetDrawCache");
        fu.c.prototype.resetDrawCache = function(uu, Ru) {
          Ku.call(this, uu, Ru), QR(this.getMesh())
        };
        const Qu = vu.d.prototype,
          mu = XR(Qu, "markDirty");
        Qu.markDirty = function(uu) {
          mu.call(this, uu), yR.has(this) && KR()
        };
        const Ju = XR(Qu, "_markAllSubMeshesAsDirty");
        Object.assign(Qu, {
          _markAllSubMeshesAsDirty(uu) {
            Ju.call(this, uu), yR.has(this) && KR()
          }
        })
      }(uu.eS());
      let Vu = new Float64Array(384),
        ru = new Int32Array(64),
        Bu = new Uint8Array(64),
        xu = new Float64Array(64),
        Su = new Int32Array(192),
        pu = 0;
      const Tu = [],
        Wu = new Float64Array(24),
        ju = () => {
          const uu = Tu.pop();
          return void 0 !== uu ? (ru[uu] = 0, uu) : (pu === ru.length && (Vu = rR(Vu, new Float64Array(2 * Vu.length)), ru = rR(ru, new Int32Array(2 * ru.length)), Bu = rR(Bu, new Uint8Array(2 * Bu.length)), xu = rR(xu, new Float64Array(2 * xu.length)), Su = rR(Su, new Int32Array(2 * Su.length))), pu++)
        },
        Hu = uu => {
          const Ru = 6 * uu._noaSlot,
            yu = uu.ZEu[0],
            Eu = uu.ZEu[1];
          Vu[Ru] = yu.x, Vu[Ru + 1] = yu.y, Vu[Ru + 2] = yu.z, Vu[Ru + 3] = Eu.x, Vu[Ru + 4] = Eu.y, Vu[Ru + 5] = Eu.z
        },
        du = (uu, Ru, yu) => {
          if (!yu) return Nu.see(uu, -1), !1;
          const Eu = Yu(uu);
          return Eu && Nu.seeThrough(xu[Ru]), Nu.see(uu, Ru), !Eu
        };
      let bu = -1;
      return uu.getActiveMeshCandidates = () => {
        const yu = uu.frustumPlanes,
          Eu = Ru._selectionContent;
        Eu.reset(), (yu => {
          const Eu = uu.frustumPlanes;
          Ju = Ju + 1 | 0 || 1;
          const Ku = Ru.blocks,
            Qu = Nu.Kx(uu.activeCamera),
            mu = Qu && !0;
          if (mu) {
            const Ru = uu.eS().currentRenderPassId;
            Ru !== bu && (bu = Ru, KR())
          }
          const Xu = ER(),
            xu = mu && !1;
          Ku.length > 0 && function(uu, Ru) {
            for (let yu = 0; yu < 6; yu++) {
              const Eu = uu[yu],
                Ku = Eu.normal;
              Ru[4 * yu] = Ku.x, Ru[4 * yu + 1] = Ku.y, Ru[4 * yu + 2] = Ku.z, Ru[4 * yu + 3] = Eu.d
            }
          }(Eu, Wu);
          const pu = Vu,
            Tu = ru,
            ju = Bu;
          for (let uu = 0; uu < Ku.length; uu++) {
            const Ru = Ku[uu];
            if (!hu.e.IsInFrustum(Ru.ZEu, Eu)) continue;
            const Vu = Ru.entries;
            {
              const uu = Ru._noaSlots,
                Eu = Ru._noaStamps,
                Ku = Ru._noaTerrain;
              for (let Ru = 0; Ru < Vu.length; Ru++) {
                const ru = uu[Ru];
                if (Tu[ru] !== Ju && (Tu[ru] = Ju, ju[ru] = BR(pu, 6 * ru, Wu) ? 1 : 0), 0 === ju[ru]) continue;
                const Bu = Vu[Ru];
                if (mu && Eu[Ru] === Xu) xu && 1 === Ku[Ru] && Yu(Bu) && 0, Nu.see(Bu, 1 === Ku[Ru] ? ru : -1);
                else if (mu) {
                  Eu[Ru] = Xu;
                  const uu = !0 === Bu.metadata[Ou.j];
                  Ku[Ru] = uu ? 1 : 0;
                  const yu = du(Bu, ru, uu);
                  !uu || yu && mR(Bu) || (Eu[Ru] = 0)
                } else Qu ? du(Bu, ru, !0 === Bu.metadata[Ou.j]) : Fu.i.prototype.push.call(yu, Bu)
              }
              continue
            }
          }
          Qu && Nu.finish(yu, Su)
        })(Eu), Xu.apply(Eu, uu.activeCamera);
        const Qu = Ru.wEu;
        for (let uu = 0; uu < Qu.length; uu++) {
          const Ru = Qu[uu];
          Ru.isEnabled() && Fu.i.prototype.push.call(Eu, Ru)
        }
        return Ku(Eu, yu), Eu
      }, {
        hEu: () => Nu.culled,
        MEu: (uu, Ru) => {
          const Ku = Math.floor(Ru[0] / Qu),
            Ju = Math.floor(Ru[1] / Qu),
            Nu = Math.floor(Ru[2] / Qu),
            Xu = `${Ku}|${Ju}|${Nu}`;
          let Vu = mu.get(Xu);
          if (!Vu) {
            const uu = [0, 0, 0];
            yu.IRu([Ku * Qu - 1, Ju * Qu - 1, Nu * Qu - 1], null, uu), Vu = Object.assign(Eu(uu, Qu + 2), {
              PEu: Xu,
              iEu: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: ju()
            }), Hu(Vu), xu[Vu._noaSlot] = (0, wu.k)(Ku, Ju, Nu), Su[3 * Vu._noaSlot] = Ku, Su[3 * Vu._noaSlot + 1] = Ju, Su[3 * Vu._noaSlot + 2] = Nu, mu.set(Xu, Vu)
          }
          Vu.iEu++, uu.metadata[Zu.s] = Vu
        },
        rM: uu => {
          const Ru = uu.metadata[Zu.s];
          Ru && (Ru.iEu--, Ru.iEu <= 0 && (mu.delete(Ru.PEu), Tu.push(Ru._noaSlot)), uu.metadata[Zu.s] = null)
        },
        FEu: (uu, Ru) => {
          const yu = uu,
            Eu = Ru.metadata[Zu.s];
          (yu._noaSlots ??= []).push(Eu._noaSlot), (yu._noaStamps ??= []).push(0), (yu._noaTerrain ??= []).push(0), yu.entries.push(Ru)
        },
        removeEntry: (uu, Ru) => {
          const yu = uu,
            Eu = yu.entries,
            Ku = Eu.indexOf(Ru);
          if (Ku < 0) return;
          const Qu = yu._noaSlots,
            mu = yu._noaStamps,
            Ju = yu._noaTerrain,
            Nu = Eu.length - 1;
          Eu[Ku] = Eu[Nu], Qu[Ku] = Qu[Nu], mu[Ku] = mu[Nu], Ju[Ku] = Ju[Nu], Eu.pop(), Qu.pop(), mu.pop(), Ju.pop()
        },
        Quu: uu => {
          for (const Ru of mu.values()) {
            Ru.sEu.oEu(uu), Ru.nEu.oEu(uu);
            for (const yu of Ru.ZEu) yu.oEu(uu);
            Hu(Ru)
          }
        }
      }
    }

    function rR(uu, Ru) {
      return Ru.set(uu), Ru
    }

    function BR(uu, Ru, yu) {
      const Eu = uu[Ru],
        Ku = uu[Ru + 1],
        Qu = uu[Ru + 2],
        mu = uu[Ru + 3],
        Ju = uu[Ru + 4],
        Nu = uu[Ru + 5];
      for (let Xu = 0; Xu < 24; Xu += 4) {
        const uu = yu[Xu],
          Ru = yu[Xu + 1],
          Vu = yu[Xu + 2];
        if (!(uu * (uu >= 0 ? mu : Eu) + Ru * (Ru >= 0 ? Ju : Ku) + Vu * (Vu >= 0 ? Nu : Qu) + yu[Xu + 3] >= 0)) return !1
      }
      return !0
    }
    var xR = yu(37532);
    class SR {
      constructor(uu, Ru) {
        var yu = uu.cp;
        yu.BEu(new zu.d(yu));
        var Eu = new cu.d(Nu);
        yu.OEu = Eu, Eu.blocks = [];
        var Ku, Qu = {},
          mu = [];
        this.textPlanes = mu, this.hEu = () => Ku.hEu(), this.Quu = uu => {
          Vu(Eu, uu), Ku.Quu(uu)
        }, this.MEu = (Ru, yu, Ju) => {
          if (!Ru.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Ru.metadata[Zu.r] && !Ru.metadata[Zu.m]) {
            if (!yu) {
              var Nu = Eu.wEu;
              if (Ru.metadata[Zu.u] && !Ru.parent) {
                Nu = mu;
                var Vu = Ru.vI().aEu;
                Ru.metadata[Zu.x] = Vu.center.length() + Vu.radius, Ru.DS = !0
              }
              return Nu.push(Ru), Ru.metadata[Zu.i] = Nu, void(Ru.metadata[Zu.m] = !0)
            }
            var Bu = Math.floor(Ju[0] / Xu),
              xu = Math.floor(Ju[1] / Xu),
              Su = Math.floor(Ju[2] / Xu),
              pu = Bu + "|" + xu + "|" + Su,
              Tu = Qu[pu];
            if (!Tu) {
              var Wu = [Bu * Xu, xu * Xu, Su * Xu],
                ju = [0, 0, 0];
              uu.Yr.IRu(Wu, null, ju), Tu = ru(ju, Xu), Eu.blocks.push(Tu), Qu[pu] = Tu, Tu.PEu = pu
            }
            Ku.MEu(Ru, Ju), Ku.FEu(Tu, Ru), Tu.iEu = (Tu.iEu || 0) + 1, Ru.metadata[Zu.r] = Tu, Ru.metadata[Zu.p] = !0, Ru.DS = !0
          }
        }, this.rM = uu => {
          if (uu.metadata) {
            uu.metadata[Zu.m] && ((0, wu.p)(uu.metadata[Zu.i], uu), uu.metadata[Zu.m] = !1), uu.metadata[Zu.i] === mu && (uu.DS = !1), uu.metadata[Zu.i] = void 0, uu.metadata[Zu.x] = void 0;
            var Ru = uu.metadata[Zu.r];
            Ru && Ru.entries && (uu.metadata[Zu.p] && Ku.removeEntry(Ru, uu), Ru.iEu--, Ru.iEu <= 0 && (delete Qu[Ru.PEu], (0, wu.p)(Eu.blocks, Ru))), Ku.rM(uu), uu.metadata[Zu.r] = null, uu.metadata[Zu.p] = !1
          }
        }, this.P_ = function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (uu.metadata[Zu.r]) {
            if (uu.metadata[Zu.p] === Ru) return;
            var yu = uu.metadata[Zu.r];
            yu && yu.entries && (Ru ? Ku.FEu(yu, uu) : Ku.removeEntry(yu, uu)), uu.metadata[Zu.p] = Ru
          } else {
            if (uu.metadata[Zu.m] === Ru) return;
            var Qu = uu.metadata[Zu.i] || Eu.wEu;
            Ru ? Qu.push(uu) : (0, wu.p)(Qu, uu), uu.metadata[Zu.m] = Ru
          }
        };
        var Nu = () => {},
          Xu = Ru * uu.Yr.Fr.Luu,
          Vu = (uu, Ru) => {
            uu.blocks.forEach((uu => {
              uu.sEu.oEu(Ru), uu.nEu.oEu(Ru), uu.ZEu.forEach((uu => uu.oEu(Ru))), uu.blocks && Vu(uu, Ru)
            }))
          },
          ru = (uu, Ru) => {
            var yu = new Ju.MS(uu[0], uu[1], uu[2]),
              Eu = new Ju.MS(uu[0] + Ru, uu[1] + Ru, uu[2] + Ru);
            return new Lu.d(yu, Eu, void 0, void 0, void 0, Nu)
          };
        Ku = VR(yu, Eu, uu.Yr, ru, ((uu, Ru) => {
          for (var yu = 0; yu < mu.length; yu++) {
            var Eu = mu[yu];
            Eu.isEnabled(!1) && ((0, xR.b)(Eu, Ru) && Fu.i.prototype.push.call(uu, Eu))
          }
        }))
      }
    }

    function pR(uu) {
      const {
        holderPosition: Ru,
        holderRotation: yu,
        Qv: Eu,
        fov: Ku,
        near: Qu,
        far: mu
      } = uu.model.LO, Ju = uu.QKu;
      Ju.position.muu(Ru[0], Ru[1], Ru[2]), Ju.rotation.muu(yu[0], yu[1], yu[2]);
      const Nu = uu.camera;
      Nu.position.muu(Eu[0], Eu[1], Eu[2]), Nu.fov = Ku, Nu.minZ = Qu, Nu.maxZ = mu
    }

    function TR(uu) {
      const Ru = uu.eS(),
        yu = Ru,
        Eu = yu._gl;
      if (!Eu || yu.Ep < 2 || Ru.CEu || Eu.getParameter(Eu.DEPTH_BITS) < 24) return !1;
      const Ku = uu._renderingManager,
        Qu = Ku.getRenderingGroup(-1),
        mu = Ku.getRenderingGroup(0),
        Ju = nu.e.prototype.render;
      return Qu.render = function(uu, Ru, yu, Eu, Ku, Qu, Nu, Xu, Vu) {
        (uu || mu._empty) && Ju.call(this, uu, Ru, yu, Eu, Ku, Qu, Nu, Xu, Vu)
      }, mu.render = function(uu, yu, Ku, mu) {
        let Nu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vu = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Bu = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          xu = arguments.length > 8 ? arguments[8] : void 0;
        uu ? Ju.call(this, uu, yu, Ku, mu, Nu, Xu, Vu, Bu, xu) : (Ru.setAlphaMode(ru.c.ALPHA_DISABLE), Ju.call(this, null, !1, !1, mu, Nu, Xu, Vu, !1), Qu._empty || (Eu.depthRange(1, 1), Ju.call(Qu, null, yu, Ku, mu, Nu, Xu, Vu, Bu, xu), Eu.depthRange(0, 1)), Ju.call(this, null, yu, Ku, mu, !1, !1, !1, Bu, xu))
      }, !0
    }

    function WR(uu, Ru) {
      return [Ru, gu.f].map(((Ru, yu) => {
        const Eu = new Ku.d("light", Ju.MS.FromArray(Ru), uu);
        return Eu.diffuse = mu.Color3.FromArray([1, 1, 1]), Eu.specular = mu.Color3.FromArray([1, 1, 1]), Eu.intensity = gu.c[yu], Eu
      }))
    }
    class jR extends Xu.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(uu) {
        var Ru;
        this.heldTexture = uu, this.particleTexture = null !== (Ru = null === uu || void 0 === uu ? void 0 : uu.mirror) && void 0 !== Ru ? Ru : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let uu = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        uu && (this.particleTexture = null, (0, Vu.I)(this.heldTexture), this.heldTexture = null), super.dispose(uu, Ru, yu)
      }
    }
    const HR = Eu.e.Zero();
    const dR = {
      VKu: function(uu, Ru) {
        return new Qu.e(uu, Ru.Lyu, {
          preserveDrawingBuffer: Ru.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      NKu: function(uu, Ru) {
        ! function(uu, Ru, yu) {
          const Eu = new tu.c(uu.engine);
          uu.cp = Eu, Eu.detachControl(), Eu.autoClear = !1, su.b.MIN_RENDERINGGROUPS = -1;
          for (let Qu = su.b.MIN_RENDERINGGROUPS; Qu <= 1; Qu++) Eu.setRenderingOrder(Qu, nu.e.PainterSortCompare, nu.e.PainterSortCompare, nu.e.PainterSortCompare);
          Eu.setRenderingAutoClearDepthStencil(0, !1), Uu.b.Enabled = !1, uu.yKu = new SR(uu, Math.round(Ru.EKu)), uu.QKu = new Gu.c("camHolder", Eu), uu.camera = new Iu.e("camera", new Ju.MS(0, 0, 0), Eu), uu.camera.parent = uu.QKu, pR(uu), (0, gu.h)(uu, ((uu, Ru, yu) => (0, lu.i)(Ru, yu, uu.cp))), Eu.clearColor = mu.c.FromArray(Ru.clearColor), Eu.ambientColor = mu.Color3.FromArray(Ru.ambientColor);
          const Ku = yu(Eu, Ru.JKu);
          Eu.onNewLightAddedObservable.add((uu => {
            Ku.some((Ru => Ru === uu)) || console.error(`Light "${uu.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Eu.skipPointerMovePicking = !0
        }(uu, Ru, WR), TR(uu.cp)
      },
      KKu: pR,
      setBabylonFog: function(uu, Ru, yu, Eu) {
        const Ku = uu.cp;
        Ku.fogMode = 3, Ku.fogStart = Ru, Ku.fogEnd = yu, Ku.fogColor.set(Eu[0], Eu[1], Eu[2])
      },
      rKu: function(uu, Ru, yu) {
        return uu.engine.Ep >= 2 && (uu.BKu || (uu.BKu = new Mu(uu.cp)), !uu.BKu.failed) ? uu.BKu.xI(Ru, yu) : new jR(Ru, yu, uu.cp)
      },
      SKu: function(uu, Ru) {
        uu.cp.JC.forEach((yu => {
          if (yu instanceof Du) return void yu.Quu(Ru, uu.Yr.BB);
          const Eu = yu;
          if (Eu.emitter.getConnectedParticleSystems)
            for (const uu of Eu._particles) uu.position.set(uu.position.x - Ru[0], uu.position.y - Ru[1], uu.position.z - Ru[2]);
          else {
            if (!Eu.worldOffset) throw new Error("Particle system has no world offset");
            Eu.worldOffset.x = -uu.Yr.BB[0], Eu.worldOffset.y = -uu.Yr.BB[1], Eu.worldOffset.z = -uu.Yr.BB[2]
          }
        }))
      },
      linesFromArrays: function(uu, Ru, yu) {
        const Eu = new Nu.b(Ru, uu.cp, null, void 0, void 0, !1);
        return (0, lu.g)(Ru, yu, uu.cp, Eu), Eu
      },
      Lp: QR,
      xKu: function(uu, Ru) {
        return HR.origin.Oyu(Ru.origin), HR.direction.Oyu(Ru.direction), HR.length = Ru.length, HR.epsilon = Ru.epsilon, HR.xKu(uu, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40703: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Fu,
      h: () => ju,
      k: () => Yu
    });
    var Eu = yu(39827),
      Ku = yu(40707),
      Qu = yu(40750),
      mu = yu(40709),
      Ju = yu(37581),
      Nu = yu(37590),
      Xu = yu(37598),
      Vu = yu(37605),
      ru = yu(36932),
      Bu = yu(36934),
      xu = yu(40718),
      Su = yu(36915),
      pu = yu(36923),
      Tu = yu(36906);

    function Wu(uu, Ru) {
      return Object.assign((function(uu, yu, Eu, Ku) {
        return Ru(this.featureState, uu, yu, Eu, Ku)
      }), {
        qx: uu
      })
    }

    function ju(uu) {
      const Ru = class extends xu.e {
          constructor(Ru, yu) {
            const Eu = (0, pu.U)(Ru),
              Ku = Eu && (0, pu.u)(Eu, uu.name);
            for (var Qu = arguments.length, mu = new Array(Qu > 2 ? Qu - 2 : 0), Ju = 2; Ju < Qu; Ju++) mu[Ju - 2] = arguments[Ju];
            super(Ru, uu.name, uu.priority, Ku ? Ku.defines : uu.defines(...mu), !1), this.featureState = void 0, this.featureState = yu, this._pluginManager._addPlugin(this), this._enable(!0), (0, pu.x)(this._material, uu, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return uu.className
          }
          isCompatible(uu) {
            return uu === Tu.c.GLSL || uu === Tu.c.WGSL
          }
        },
        yu = (0, Su.l)(uu);
      for (const [Eu, Ku] of Object.entries(Su.e)) {
        const Qu = uu[Eu];
        if (Qu) {
          const uu = yu[Eu];
          Object.defineProperty(Ru.prototype, Ku, {
            value: Wu(Qu, uu),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Ru
    }
    class Hu extends(ju(Ju.b)) {}
    var du = yu(39380),
      bu = yu(40723);
    const Cu = new WeakMap;

    function ku(uu, Ru, yu) {
      let Eu = Cu.get(yu);
      Eu || (Eu = new Map, Cu.set(yu, Eu));
      const {
        url: Ku
      } = uu;
      let Qu = Eu.get(Ku);
      return Qu || (Qu = async function(uu, Ru, yu) {
        const {
          width: Eu,
          height: Ku
        } = uu.getSize(), Qu = Math.round(Ku / Eu), Ju = Ru && Ru.byteLength === Eu * Eu * Qu * 4 ? Ru : uu._readPixelsSync();
        return new bu.e(Ju, Eu, Eu, Qu, du.e.TEXTUREFORMAT_RGBA, yu, !0, !1, mu.e.NEAREST_NEAREST_MIPLINEAR)
      }(uu, Ru, yu), Eu.set(Ku, Qu), Qu.catch((() => {
        Eu.delete(Ku)
      }))), Qu
    }
    var eu = yu(37612);
    class Au extends(ju(Nu.j)) {
      constructor(uu, Ru) {
        super(uu, Ru), Ru.textures.forEach(((uu, Ru) => {
          uu.mirror.onLoadObservable.add((uu => {
            this.setTextureArrayData(uu, Ru).catch((uu => {
              console.error(`Failed to build texture array for atlas ${Ru}`, uu)
            }))
          }))
        })), (0, eu.g)(Ru, uu.shaderLanguage)
      }
      async setTextureArrayData(uu, Ru) {
        var yu, Eu;
        const Ku = this.featureState,
          {
            width: Qu,
            height: mu
          } = uu.getSize(),
          Ju = Ku.useWebGL2 ? await ku(uu, null !== (yu = null === (Eu = Ku.sources.pixels) || void 0 === Eu ? void 0 : Eu[Ru]) && void 0 !== yu ? yu : null, this._material.lD()) : null;
        (0, eu.d)(this._material, Ku, Ru, Ju, Qu, Math.round(mu / Qu), this._material.shaderLanguage)
      }
    }
    var Du = yu(40732),
      Mu = yu(39877),
      Iu = yu(36828),
      Gu = yu(40741),
      Uu = yu(39990),
      nu = yu(39866),
      su = yu(40683),
      tu = yu(37306),
      lu = yu(40744);
    class gu extends Du.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const cu = {
      Mesh: Gu.b,
      TransformNode: su.c,
      XS: Du.c,
      VertexBuffer: Du.d,
      BoundingInfo: Mu.c,
      MS: Iu.MS,
      ArenaBuffer: gu,
      SubMesh: nu.c,
      VertexData: Uu.e,
      MirroredGeometry: lu.d,
      meshFromArrays: lu.g,
      plainMeshFromArrays: lu.i
    };
    (0, tu.f)(cu);
    var Lu = yu(37150);
    class zu extends(ju(Vu.j)) {
      constructor(uu, Ru) {
        if (super(uu, Ru), uu instanceof Eu.StandardMaterial && Ru.dirLightCount > 0) {
          const Ru = uu,
            yu = Ru._blockDirtyMechanism;
          Ru._blockDirtyMechanism = !0, uu.disableLighting = !0, Ru._blockDirtyMechanism = yu;
          const Eu = (0, pu.U)(uu);
          Eu && (Eu.disableLighting = !0, (0, pu.S)(Eu))
        }(0, Lu.l)(uu)
      }
      dispose(uu) {
        (0, Lu.n)(this._material), super.dispose(uu)
      }
    }

    function Fu(uu, Ru) {
      if (!(Ru instanceof Eu.StandardMaterial) || Ru.specularTexture) return;
      const {
        r: yu,
        g: Ku,
        b: Qu
      } = Ru.specularColor;
      0 === yu && 0 === Ku && 0 === Qu && (uu.SPECULARTERM = !1)
    }(0, Vu.g)({
      disableUnusedSpecularTerm: Fu
    });
    var wu = yu(37019),
      Zu = yu(37324);
    const hu = new RegExp(`^#define ${Xu.c}\\s*$`, "m");
    class Pu extends(ju(Xu.e)) {
      constructor(uu, Ru) {
        super(uu, Ru), this.VS = !1, Ru.ditherOnlyWhileFading && (Zu.d.add(uu), this.prewarmDitherTwins(uu))
      }
      prewarmDitherTwins(uu) {
        const Ru = new WeakSet;
        uu.onEffectCreatedObservable.add((yu => {
          let {
            effect: Eu,
            subMesh: Ku
          } = yu;
          if (this.featureState.prewarmingDither || Ru.has(Eu)) return;
          Ru.add(Eu);
          const Qu = null === Ku || void 0 === Ku ? void 0 : Ku.getMesh();
          Qu && !hu.test(Eu.defines) && uu.lD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Qu) || Ru.delete(Eu)
          }))
        }))
      }
      prewarmDither(uu) {
        if (this.VS || uu.wyu()) return !1;
        const Ru = new nu.c(0, 0, 0, 0, 0, uu, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(uu, Ru)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Ru.effect
      }
      dispose(uu) {
        this.VS = !0, super.dispose(uu)
      }
    }
    const iu = new Map;

    function Yu(uu, Ru) {
      iu.set(uu, Ru)
    }
    Yu(Ju.b, Hu), Yu(Nu.j, Au), Yu(Xu.e, Pu), Yu(Vu.j, zu), (0, ru.c)({
      create: (uu, Ru) => {
        const yu = new Eu.StandardMaterial(uu.name, Ru);
        return (0, wu.p)(uu, yu), yu.detailMap._pluginDefineNames
      },
      write: (uu, Ru, yu) => {
        (0, wu.T)(uu.mirror, Ru, yu)
      },
      addFeature: (uu, Ru, yu) => {
        const Eu = iu.get(Ru.feature);
        if (!Eu) throw new Error(`${Ru.feature.name} has no plugin class (registerPluginClass)`);
        new Eu(uu.mirror, Ru.state, ...yu)
      },
      texture: (uu, Ru, yu) => {
        let {
          url: Eu,
          noMipmap: Ku,
          invertY: Qu,
          samplingMode: Ju,
          data: Nu,
          sets: Xu
        } = yu;
        if (!Nu) {
          const yu = new mu.e(Eu, Ru, Ku, Qu, Ju);
          return Object.assign(yu, Xu), void(0, Bu.M)(uu, yu)
        }
        const Vu = {},
          ru = new Promise(((uu, Ru) => {
            Vu.onLoad = uu, Vu.onError = (uu, yu) => {
              Ru(new Error(`${Nu.context}: ${(null===yu||void 0===yu?void 0:yu.message)||uu||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: xu,
            bytes: Su,
            label: pu
          } = Nu,
          Tu = {
            noMipmap: Ku,
            invertY: !1,
            samplingMode: Ju,
            ...Vu,
            mimeType: xu,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Wu = new mu.e(null, Ru, Tu);
        wu.t.set(Wu, ru), Object.assign(Wu, Xu), Wu.updateURL(Eu, Su);
        const ju = Wu.getInternalTexture();
        ju && (ju.label = pu), uu.uvSet = Wu.coordinatesIndex, uu.matrix.set((0, wu.L)(Wu)), (0, Bu.M)(uu, Wu)
      },
      cube: (uu, Ru, yu) => {
        let {
          rootUrl: Eu,
          files: Qu,
          noMipmap: Ju,
          luminance: Nu
        } = yu;
        const {
          samplingMode: Xu
        } = uu.sampler, Vu = Xu === (0, Bu.F)(Ju) ? null : () => {
          (0, wu.J)(ru, Xu)
        }, ru = new Ku.e(Eu, Ru, null, Ju, Qu, Vu, null, (0, Bu.C)(Nu));
        ru.coordinatesMode = mu.e.SKYBOX_MODE, (0, Bu.M)(uu, ru)
      },
      canvas: (uu, Ru, yu) => {
        let {
          width: Eu,
          height: Ku,
          mipmaps: Ju,
          samplingMode: Nu,
          hasAlpha: Xu = !1,
          wrap: Vu = mu.e.CLAMP_ADDRESSMODE
        } = yu;
        const ru = new Qu.c(Ru, {
          width: Eu,
          height: Ku
        }, uu, Ju, Nu);
        ru.hasAlpha = Xu, ru.wrapU = Vu, ru.wrapV = Vu;
        const Bu = (0, wu.B)(ru);
        return (0, wu.D)(Bu, ru), Bu
      }
    })
  },
  40744: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Vu,
      g: () => ru,
      i: () => Bu
    });
    var Eu = yu(40732),
      Ku = yu(39625),
      Qu = yu(39877),
      mu = yu(39994),
      Ju = yu(40741),
      Nu = yu(39990),
      Xu = yu(37203);
    class Vu extends mu.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (uu, Ru) => {
          this.releaseUnlessInstanced(Ru)
        }, this.onLinked = null
      }
      link(uu) {
        var Ru;
        (0, Xu.r)(uu), this.model = uu, null === (Ru = this.onLinked) || void 0 === Ru || Ru.call(this, uu)
      }
      relink() {
        this.release();
        const uu = [];
        for (const Ku of Object.values(this._vertexBuffers))
          if (!Ku.getIsInstanced()) {
            const {
              byteOffset: Ru,
              byteStride: yu,
              type: Eu,
              normalized: Qu
            } = Ku;
            uu.push({
              kind: Ku.getKind(),
              data: Ku.getData(),
              offset: Ru,
              stride: yu,
              components: Ku.getSize(),
              glType: Eu,
              isNormalized: Qu
            })
          } const Ru = this._indices.length ? this._indices : null,
          {
            minimum: yu,
            maximum: Eu
          } = this.extend;
        this.link(new Xu.h(uu, Ru, this.getTotalVertices(), new Float64Array(yu.AEu()), new Float64Array(Eu.AEu())))
      }
      copy(uu) {
        if (!this.model) return super.copy(uu);
        const Ru = new Vu(uu, this.lD()),
          yu = this.DEu(void 0, !0);
        yu && Ru.setIndices(yu);
        let mu = !1;
        for (const Qu in this._vertexBuffers) {
          const uu = this._vertexBuffers[Qu],
            yu = uu.getData();
          if (!yu) continue;
          const Ju = uu.getSize(),
            {
              type: Nu,
              byteOffset: Xu,
              byteStride: Vu,
              normalized: ru
            } = uu;
          mu ||= uu.isUpdatable();
          const Bu = uu.getIsInstanced() ? (yu instanceof Array ? 4 * yu.length : yu.byteLength) / Vu : this.getTotalVertices(),
            xu = (0, Ku.u)(yu, Ju, Nu, Xu, Vu, Bu, !0),
            Su = {
              updatable: uu.isUpdatable(),
              stride: Ju,
              type: Nu,
              normalized: ru,
              takeBufferOwnership: !0,
              instanced: uu.getIsInstanced()
            };
          Ru.setVerticesBuffer(new Eu.d(this.eS(), xu, Qu, Su), Bu)
        }
        return Ru._updatable = mu, Ru._boundingInfo = new Qu.c(this.extend.minimum, this.extend.maximum), Ru.relink(), Ru
      }
      static mergeMeshes(uu, Ru, yu, Eu, Ku, Qu) {
        const Nu = uu[0].lD(),
          Xu = new Ju.b(uu[0].name + "_merged", Nu),
          ru = new Vu(mu.b.RandomId(), Nu, void 0, !1, Xu);
        try {
          if (!Ju.b.MergeMeshes(uu, Ru, yu, Xu, Ku, Qu)) return Xu.dispose(), null
        } catch (Bu) {
          throw Xu.dispose(), Bu
        }
        return ru.relink(), Xu
      }
      removeVerticesData(uu) {
        this.releaseUnlessInstanced(uu), super.removeVerticesData(uu)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(uu) {
        var Ru;
        uu && null !== (Ru = this.getVertexBuffer(uu)) && void 0 !== Ru && Ru.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Xu.B)(this.model), this.model = null)
      }
    }

    function ru(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ju.b(uu, yu);
      const Ku = (0, Xu.o)(Ru),
        {
          positions: Qu,
          normals: ru,
          uvs: Bu,
          indices: xu,
          named: Su = {}
        } = Ru,
        pu = new Nu.e;
      pu.positions = Qu, pu.normals = null !== ru && void 0 !== ru ? ru : null, pu.uvs = null !== Bu && void 0 !== Bu ? Bu : null, pu.indices = xu;
      const Tu = new Vu(mu.b.RandomId(), yu, pu, !1, Eu);
      for (const {
          kind: mu,
          components: Ju
        }
        of Ku.vertexAttributes) mu in Su && Eu.setVerticesData(mu, Su[mu], !1, Ju);
      return Tu.link(Ku), Eu
    }

    function Bu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ku = new Ju.b(uu, yu),
        {
          positions: Qu,
          normals: mu,
          uvs: Xu,
          indices: Vu
        } = Ru;
      return Object.assign(new Nu.e, {
        positions: Qu,
        normals: mu,
        uvs: Xu,
        indices: Vu
      }).applyToMesh(Ku, Eu), Ku
    }
  },
  41178: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Tu,
      e: () => Ju,
      h: () => mu,
      j: () => Xu
    });
    var Eu = yu(36986),
      Ku = yu(38471),
      Qu = yu(38467);

    function mu(uu, Ru, yu, Eu) {
      const Ku = Qu.w;
      Ru.fill(0), uu.gravity.toArray(Ru, Ku.gravity), uu.colorDead.toArray(Ru, Ku.colorDead), yu[Ku.ramp] = uu.useRampGradients ? 1 : 0;
      const mu = uu.getColorGradients(),
        Ju = Bu(uu, mu, "colour", Eu);
      yu[Ku.colorCount] = Ju;
      for (let Qu = 0; Qu < Ju; Qu++) {
        var Nu;
        const uu = mu[xu(mu, Qu)];
        Ru[Ku.colorPositions + Qu] = uu.gradient, uu.color1.toArray(Ru, Ku.color1 + 4 * Qu), (null !== (Nu = uu.color2) && void 0 !== Nu ? Nu : uu.color1).toArray(Ru, Ku.color2 + 4 * Qu)
      }
      const Xu = uu.getVelocityGradients(),
        Vu = Bu(uu, Xu, "JT", Eu);
      yu[Ku.velocityCount] = Vu;
      for (let Qu = 0; Qu < Vu; Qu++) ju(Ru, Ku.JT + 4 * Qu, Xu[xu(Xu, Qu)]);
      const ru = uu.useRampGradients ? uu.getColorRemapGradients() : null,
        Su = Bu(uu, ru, "colour remap", Eu);
      yu[Ku.remapCount] = Su;
      for (let Qu = 0; Qu < Su; Qu++) ju(Ru, Ku.remap + 4 * Qu, ru[xu(ru, Qu)])
    }

    function Ju() {
      return {
        key: [],
        texels: new Uint8Array(4 * Qu.k)
      }
    }
    const Nu = [];

    function Xu(uu, Ru) {
      return Vu(uu, Nu), !Wu(Nu, Ru.key) && (Ru.key.length = 0, Ru.key.push(...Nu), Ru.key.length > 0 && function(uu, Ru) {
        for (let yu = 0; yu < Qu.k; yu++) Ku.i.GetCurrentGradient(yu / Qu.k, uu, ((uu, Ru, yu) => {
          Eu.Color3.LerpToRef(uu.color, Ru.color, yu, ru)
        })), Ru[4 * yu] = 255 * ru.r, Ru[4 * yu + 1] = 255 * ru.g, Ru[4 * yu + 2] = 255 * ru.b, Ru[4 * yu + 3] = 255
      }(uu.getRampGradients(), Ru.texels), !0)
    }

    function Vu(uu, Ru) {
      Ru.length = 0;
      const yu = uu.useRampGradients ? uu.getRampGradients() : null;
      if (null !== yu && void 0 !== yu && yu.length) {
        Ru.push(yu.length);
        for (const uu of yu) Ru.push(uu.gradient, uu.color.r, uu.color.g, uu.color.b)
      }
    }
    const ru = new Eu.Color3;

    function Bu(uu, Ru, yu, Eu) {
      return Ru ? Ru.length > Qu.c ? (Eu(`particleStops:${yu}`, `GPU particles use the first 2 and last ${Qu.c-2} of more than ${Qu.c} ${yu} gradient stops (${uu.name})`), Qu.c) : Ru.length : 0
    }

    function xu(uu, Ru) {
      return Ru < 2 || uu.length <= Qu.c ? Ru : uu.length - Qu.c + Ru
    }
    const Su = new Float32Array(Qu.o),
      pu = new Uint32Array(Su.buffer);

    function Tu(uu, Ru, yu) {
      return mu(uu, Su, pu, yu), Ru && Wu(pu, Ru) ? null : pu.slice()
    }

    function Wu(uu, Ru) {
      if (uu.length !== Ru.length) return !1;
      for (let yu = 0; yu < uu.length; yu++)
        if (uu[yu] !== Ru[yu]) return !1;
      return !0
    }

    function ju(uu, Ru, yu) {
      var Eu;
      uu[Ru] = yu.gradient, uu[Ru + 1] = yu.factor1, uu[Ru + 2] = null !== (Eu = yu.factor2) && void 0 !== Eu ? Eu : yu.factor1
    }
  },
  41174: (uu, Ru, yu) => {
    function Eu() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Ru = new Set;
      return (yu, Eu) => {
        Ru.has(yu) || (Ru.add(yu), console.warn(uu + Eu))
      }
    }
    yu.d(Ru, {
      c: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);