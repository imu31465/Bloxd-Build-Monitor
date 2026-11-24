export const id = 0;
export const ids = [0];
export const modules = {
  41176: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      CapeMaterialPlugin: () => Km,
      HueTintMaterialPlugin: () => Qm,
      LifeformMaterialPlugin: () => nm,
      OverlayMaterialPlugin: () => Jm
    });
    var hm = fm(41178),
      Am = fm(38070);
    class am extends((0, hm.h)(Am.b)) {}(0, hm.j)(Am.b, am);
    var xm = fm(37250);
    class wm extends((0, hm.h)(xm.d)) {}(0, hm.j)(xm.d, wm);
    var Dm = fm(37905);
    class im extends((0, hm.h)(Dm.f)) {}(0, hm.j)(Dm.f, im);
    var Rm = fm(37488),
      pm = fm(40357),
      Em = fm(37479);
    class om extends((0, hm.h)(Em.i)) {
      constructor(mm, Tm, fm) {
        super(mm, Tm, fm), (0, Rm.e)(mm)
      }
      dispose(mm) {
        (0, Rm.i)(this._material), super.dispose(mm)
      }
    }(0, hm.j)(Em.i, om), (0, Em.k)({
      disableUnusedSpecularTerm: hm.d,
      isLightingDisabled: mm => mm instanceof pm.StandardMaterial && mm.disableLighting
    });
    var Om = fm(38781);
    class Ym extends((0, hm.h)(Om.d)) {}(0, hm.j)(Om.d, Ym);
    var qm = fm(38890),
      jm = fm(37341),
      Vm = fm(38196),
      Im = fm(37294);
    class Km extends((0, hm.h)(qm.d)) {}(0, hm.j)(qm.d, Km);
    class Qm extends((0, hm.h)(jm.b)) {}(0, hm.j)(jm.b, Qm);
    class nm extends((0, hm.h)(Vm.n)) {}(0, hm.j)(Vm.n, nm);
    class Jm extends((0, hm.h)(Im.b)) {}(0, hm.j)(Im.b, Jm)
  },
  41596: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      addBabylonLights: () => nT,
      default: () => zT
    });
    var hm = fm(41599),
      Am = (fm(40096), fm(41173), fm(40590), fm(41609)),
      am = fm(37330),
      xm = fm(37181),
      wm = fm(41620),
      Dm = fm(41626),
      im = fm(37290),
      Rm = (fm(41178), fm(41636)),
      pm = fm(41634),
      Em = fm(38809),
      om = fm(41638),
      Om = fm(39960),
      Ym = fm(38795);
    const qm = "gpuParticles",
      jm = Ym.u,
      Vm = mm => mm / 4,
      Im = mm => `gpuParticleSystem[${mm>>2}].${"xyzw"[3&mm]}`,
      Km = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Ym.d}\n#define COLOR_POSITIONS ${Vm(jm.colorPositions)}\n#define COLOR1 ${Vm(jm.color1)}\n#define COLOR2 ${Vm(jm.color2)}\n#define VELOCITY ${Vm(jm.qq)}\n#define REMAP ${Vm(jm.remap)}\n#define RECORDS_PER_ROW ${Ym.m}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Ym.o/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Im(jm.gravity)}, ${Im(jm.gravity+1)}, ${Im(jm.gravity+2)}); }\nint colorCount() { return int(${Im(jm.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Vm(jm.colorDead)}]; }\nint velocityCount() { return int(${Im(jm.velocityCount)}); }\nint remapCount() { return int(${Im(jm.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Om.e.ShadersStore[`${qm}VertexShader`] = Km, Om.e.ShadersStore[`${qm}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Qm = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      nm = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Jm = fm(38790),
      cm = fm(41643);
    class zm extends Jm.c {
      constructor(mm, Tm, fm, hm) {
        super(mm, Tm, fm), this.renderer = fm, this.Aq = hm, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Ym.o), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, cm.g)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (mm, Tm) => {
          const {
            engine: fm
          } = this, hm = fm._gl;
          fm._bindTextureDirectly(hm.TEXTURE_2D, this.records, !0), fm._unpackFlipY(!1);
          const Am = this.ring.recordBits;
          for (let am = mm; am < Tm;) {
            const mm = Math.floor(am / Ym.m),
              fm = Math.min(Tm, (mm + 1) * Ym.m);
            hm.texSubImage2D(hm.TEXTURE_2D, 0, am % Ym.m * 4, mm, 4 * (fm - am), 1, hm.RGBA_INTEGER, hm.UNSIGNED_INT, Am, am * Ym.g), am = fm
          }
          fm._bindTextureDirectly(hm.TEXTURE_2D, null)
        }, this.id = mm;
        const Am = hm.dO();
        this.engine = Am;
        const am = Math.max(1, Tm),
          xm = Math.min(am, Ym.m);
        this.records = Am.createRawTexture(null, 4 * xm, Math.ceil(am / xm), Rm.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Rm.b.TEXTURE_NEAREST_SAMPLINGMODE, null, Rm.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Aq.getAnimationRatio() || 1;
        const Tm = this.Aq.getFrameId();
        if (Tm === this.animatedFrame) return !1;
        const fm = super.animate(mm);
        return fm && (this.animatedFrame = Tm, this.ring.takeUploads(this.uploadSlots)), fm
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(mm) {
        (0, cm.j)(this, this.uniforms, this.uniformBits, mm);
        for (const fm of Ym.q) this.uniforms[fm] = this.uniformBits[fm];
        var Tm;
        (0, cm.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Tm = this.ramp) || void 0 === Tm || Tm.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = pm.b.CreateRGBATexture(this.rampTexels.texels, Ym.l, 1, this.Aq, !1, !1, Rm.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var mm;
        this.records.dispose(), null === (mm = this.ramp) || void 0 === mm || mm.dispose(), this.ramp = null
      }
    }
    const Zm = "the context was lost before the programs linked";
    class km {
      constructor(mm, Tm) {
        this.Aq = mm, this.reportFailure = Tm, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, om.c)(), this.engine = mm.dO(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = pm.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, mm, !1, !1, Rm.b.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      yX(mm, Tm) {
        const fm = Ym.m * this.engine.getCaps().maxTextureSize;
        Tm > fm && this.warnOnce(`capacity:${mm}`, `particle system ${mm} holds ${fm} particles, not ${Tm}: its records texture's limit`);
        const hm = new zm(mm, Math.min(Tm, fm), this, this.Aq);
        return this.Aq.addParticleSystem(hm), hm
      }
      canDraw(mm) {
        var Tm, fm;
        if (this.failed || null === (Tm = mm.texture) || void 0 === Tm || null === (fm = Tm.mirror) || void 0 === fm || !fm.isReady()) return !1;
        for (const hm of (0, Em.j)(mm.blendMode))
          if (!this.effectFor(hm).isReady()) return !1;
        return !0
      }
      disposeStopped(mm) {
        this.Aq._toBeDisposed.push(mm)
      }
      remove(mm) {
        this.Aq.removeParticleSystem(mm), mm.releaseGl()
      }
      render(mm) {
        var Tm;
        if (!mm.isReady() || !mm.hasLiveParticles()) return 0;
        const {
          engine: fm,
          Aq: hm,
          frame: Am
        } = this;
        mm.prepareDraw(this.warnOnce), mm.drawOffset(Am, 0), Am[3] = mm.drawTime();
        const am = mm.ring.drawStart(),
          xm = mm.ring.drawCount(),
          wm = null !== (Tm = mm.ramp) && void 0 !== Tm ? Tm : this.whiteRamp;
        fm.setState(!1);
        for (const Dm of (0, Em.j)(mm.blendMode)) {
          const Tm = this.effectFor(Dm);
          fm.enableEffect(Tm), Tm.setTexture("gpuParticleTexture", mm.texture.mirror), Tm.setTexture("gpuParticleRampTexture", wm), Tm._bindTexture("gpuParticleRecords", mm.records), Tm.setMatrix("gpuParticleView", hm.getViewMatrix()), Tm.setMatrix("gpuParticleProjection", hm.getProjectionMatrix()), Tm.setFloatArray4("gpuParticleSystem", mm.uniforms), Tm.setFloat4("gpuParticleFrame", Am[0], Am[1], Am[2], Am[3]), Tm.setFloat2("gpuParticleRange", am, xm), Tm.setFloat("gpuParticleRamp", mm.uniforms[Ym.u.ramp]), fm.bindBuffers(this.vertexBuffers, null, Tm), fm.setAlphaMode((0, Em.h)(Dm)), fm.drawArraysType(Rm.b.MATERIAL_TriangleStripDrawMode, 0, 4, xm), Tm._bindTexture("gpuParticleRecords", null)
        }
        return fm.setAlphaMode(Rm.b.ALPHA_DISABLE), xm
      }
      awaitLink(mm) {
        const Tm = mm.getPipelineContext(),
          fm = this.gl();
        !this.failed && fm && (!Tm || Tm.isParallelCompiled && !Tm.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Tm.isParallelCompiled && Tm.program && (fm.getProgramParameter(Tm.program, fm.LINK_STATUS) || this.fail(function(mm, Tm, fm) {
          if (mm.isContextLost()) return Zm;
          for (const [hm, Am] of [
              ["VERTEX SHADER", Tm.vertexShader],
              ["FRAGMENT SHADER", Tm.fragmentShader]
            ]) {
            const Tm = Am && !mm.getShaderParameter(Am, mm.COMPILE_STATUS) ? mm.getShaderInfoLog(Am) : null;
            if (Tm) return `${hm} ${Tm}`
          }
          return mm.getProgramInfoLog(fm) || "a program did not link"
        }(fm, Tm, Tm.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(mm) {
        return mm === Em.c ? this.multiplyEffect : this.effect
      }
      createEffect(mm) {
        return this.engine.createEffect(qm, [], Qm, nm, mm, void 0, void 0, ((mm, Tm) => {
          var fm;
          this.fail(null !== (fm = this.gl()) && void 0 !== fm && fm.isContextLost() ? Zm : function(mm) {
            const Tm = mm.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(Tm) ? "a program failed, its log not in this browser's stack" : Tm.replace(/^Error: /, "")
          }(Tm))
        }))
      }
      fail(mm) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${mm}`), this.reportFailure(mm);
          for (const mm of this.Aq.VK.slice()) mm instanceof zm && mm.disposeOnStop && mm.dispose()
        }
      }
    }
    var bm = fm(39930);
    class Sm extends bm.d {
      createEffect() {
        const mm = super.createEffect(...arguments);
        return Nm(mm), em.has(mm) || (em.add(mm), mm.onCompileObservable.add((() => {
          Nm(mm)
        }))), mm
      }
    }
    const em = new WeakSet;

    function Nm(mm) {
      mm._vertexSourceCodeBeforeMigration = "", mm._fragmentSourceCodeBeforeMigration = ""
    }
    var Gm = fm(40309),
      Xm = fm(41166),
      Pm = fm(40068),
      Hm = fm(40272),
      ym = fm(40264),
      Cm = fm(40196),
      rm = fm(41218),
      sm = fm(37680),
      lm = fm(41645),
      Mm = fm(41652),
      um = fm(41661),
      Bm = fm(40220),
      Lm = fm(2858),
      tm = fm(37554),
      Um = fm(40408),
      dm = fm(37644),
      gm = fm(37581);

    function Wm(mm) {
      if (mm.visibility < 1 || !mm.isVisible || !mm.isEnabled() || mm.metadata[gm.d] || !mm.isReady()) return !0;
      const Tm = mm.jK;
      if (!Tm || 0 === Tm.length) return !0;
      for (let fm = 0; fm < Tm.length; fm++) {
        const hm = Tm[fm],
          Am = hm.TY();
        if (!Am || !Am.isReadyForSubMesh(mm, hm, !1)) return !0
      }
      return !1
    }
    class Fm {
      constructor(mm, Tm) {
        this.IE = mm, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Tm.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Go(mm) {
        var Tm;
        const fm = this.armed;
        if (this.armed = !1, this.vis = null, !fm) return !1;
        this.culled = 0;
        const {
          IE: hm
        } = this, Am = null === (Tm = hm.MI) || void 0 === Tm ? void 0 : Tm.visibility;
        if (!Am || !mm || hm.qY.jY) return !1;
        if (!(hm.oE.Ohm[0] >= dm.h)) return !1;
        const am = mm.getProjectionMatrix().m;
        if (0 !== am[15]) return !1;
        const xm = hm.HE,
          wm = mm.globalPosition,
          Dm = this.eye;
        return Dm[0] = wm.x + xm[0], Dm[1] = wm.y + xm[1], Dm[2] = wm.z + xm[2], !!Am.eyeClear(Dm[0], Dm[1], Dm[2], mm.minZ, am, hm.oE) && (this.vis = Am, this.passable.clear(), this.count = 0, !0)
      }
      see(mm, Tm) {
        const fm = this.count++;
        if (fm === this.cellSlots.length) {
          const mm = new Int32Array(2 * fm);
          mm.set(this.cellSlots), this.cellSlots = mm
        }
        this.cellSlots[fm] = Tm, this.meshes[fm] = mm
      }
      seeThrough(mm) {
        this.passable.add(mm)
      }
      finish(mm, Tm) {
        const {
          vis: fm,
          eye: hm,
          meshes: Am,
          count: am,
          cellSlots: xm
        } = this, {
          oE: wm
        } = this.IE, [Dm, im] = wm.Ohm, Rm = null !== fm && fm.update(hm[0], hm[1], hm[2], wm.qmm, Dm, im, this.passable);
        let pm = 0;
        for (let Em = 0; Em < am; Em++) {
          const hm = Am[Em];
          if (Rm) {
            const mm = 3 * xm[Em];
            if (mm >= 0 && !fm.isDrawn(Tm[mm], Tm[mm + 1], Tm[mm + 2])) {
              pm++;
              continue
            }
          }
          Bm.f.prototype.push.call(mm, hm)
        }
        Am.fill(null, 0, am), this.count = 0, this.vis = null, this.culled = pm
      }
    }
    var mT = fm(37630),
      TT = fm(37568),
      fT = fm(40383),
      hT = fm(41664),
      AT = fm(40391),
      aT = fm(40326);
    let xT = 1;
    const wT = new WeakSet;

    function DT() {
      return xT
    }

    function iT() {
      xT = xT >= 1073741823 ? 1 : xT + 1
    }

    function RT(mm) {
      const Tm = mm.metadata;
      if (!Tm || !0 !== Tm[tm.q]) return;
      const fm = Tm[tm.w],
        hm = null === fm || void 0 === fm ? void 0 : fm._noaStamps;
      if (!fm || !hm) return;
      const Am = fm.entries.indexOf(mm);
      Am >= 0 && (hm[Am] = 0)
    }

    function pT(mm) {
      const Tm = mm.jK;
      for (let fm = 0; fm < Tm.length; fm++) {
        const mm = Tm[fm].TY();
        if (mm && !mm.isFrozen) return !1
      }
      for (let fm = 0; fm < Tm.length; fm++) {
        const mm = Tm[fm].TY();
        mm && wT.add(mm)
      }
      return !0
    }
    let ET = !1;
    const oT = new WeakSet;

    function OT(mm, Tm) {
      const fm = mm[Tm];
      if ("function" !== typeof fm) throw new Error(`terrainDrawState: Babylon has no ${Tm} to hook`);
      return fm
    }

    function YT(mm, Tm, fm, hm, Am) {
      const am = fm.oE.qmm,
        xm = new Map;
      let wm = 0;
      const Dm = new Fm(fm, mm),
        im = new mT.e(am, mm.dO());
      ! function(mm) {
        if (oT.has(mm) || (oT.add(mm), mm.onContextLostObservable.add(iT), mm.UO.add(iT)), ET) return;
        ET = !0;
        const Tm = hT.c.prototype,
          fm = OT(Tm, "_markSubMeshesAsDirty");
        Object.assign(Tm, {
          _markSubMeshesAsDirty(mm) {
            fm.call(this, mm), RT(this)
          }
        });
        const hm = OT(aT.c.prototype, "_syncParentEnabledState");
        Object.assign(aT.c.prototype, {
          _syncParentEnabledState() {
            hm.call(this), RT(this)
          }
        });
        const Am = OT(AT.e.prototype, "resetDrawCache");
        AT.e.prototype.resetDrawCache = function(mm, Tm) {
          Am.call(this, mm, Tm), RT(this.getMesh())
        };
        const am = fT.d.prototype,
          xm = OT(am, "markDirty");
        am.markDirty = function(mm) {
          xm.call(this, mm), wT.has(this) && iT()
        };
        const wm = OT(am, "_markAllSubMeshesAsDirty");
        Object.assign(am, {
          _markAllSubMeshesAsDirty(mm) {
            wm.call(this, mm), wT.has(this) && iT()
          }
        })
      }(mm.dO());
      let Rm = new Float64Array(384),
        pm = new Int32Array(64),
        Em = new Uint8Array(64),
        om = new Float64Array(64),
        Om = new Int32Array(192),
        Ym = 0;
      const qm = [],
        jm = new Float64Array(24),
        Vm = () => {
          const mm = qm.pop();
          return void 0 !== mm ? (pm[mm] = 0, mm) : (Ym === pm.length && (Rm = qT(Rm, new Float64Array(2 * Rm.length)), pm = qT(pm, new Int32Array(2 * pm.length)), Em = qT(Em, new Uint8Array(2 * Em.length)), om = qT(om, new Float64Array(2 * om.length)), Om = qT(Om, new Int32Array(2 * Om.length))), Ym++)
        },
        Im = mm => {
          const Tm = 6 * mm._noaSlot,
            fm = mm.Qhm[0],
            hm = mm.Qhm[1];
          Rm[Tm] = fm.x, Rm[Tm + 1] = fm.y, Rm[Tm + 2] = fm.z, Rm[Tm + 3] = hm.x, Rm[Tm + 4] = hm.y, Rm[Tm + 5] = hm.z
        },
        Km = (mm, Tm, fm) => {
          if (!fm) return Dm.see(mm, -1), !1;
          const hm = Wm(mm);
          return hm && Dm.seeThrough(om[Tm]), Dm.see(mm, Tm), !hm
        };
      let Qm = -1;
      return mm.getActiveMeshCandidates = () => {
        const fm = mm.frustumPlanes,
          hm = Tm._selectionContent;
        hm.reset(), (fm => {
          const hm = mm.frustumPlanes;
          wm = wm + 1 | 0 || 1;
          const Am = Tm.blocks,
            am = Dm.Go(mm.activeCamera),
            xm = am && !0;
          if (xm) {
            const Tm = mm.dO().currentRenderPassId;
            Tm !== Qm && (Qm = Tm, iT())
          }
          const im = DT(),
            om = xm && !1;
          Am.length > 0 && function(mm, Tm) {
            for (let fm = 0; fm < 6; fm++) {
              const hm = mm[fm],
                Am = hm.normal;
              Tm[4 * fm] = Am.x, Tm[4 * fm + 1] = Am.y, Tm[4 * fm + 2] = Am.z, Tm[4 * fm + 3] = hm.d
            }
          }(hm, jm);
          const Ym = Rm,
            qm = pm,
            Vm = Em;
          for (let mm = 0; mm < Am.length; mm++) {
            const Tm = Am[mm];
            if (!Um.c.IsInFrustum(Tm.Qhm, hm)) continue;
            const Rm = Tm.entries;
            {
              const mm = Tm._noaSlots,
                hm = Tm._noaStamps,
                Am = Tm._noaTerrain;
              for (let Tm = 0; Tm < Rm.length; Tm++) {
                const pm = mm[Tm];
                if (qm[pm] !== wm && (qm[pm] = wm, Vm[pm] = jT(Ym, 6 * pm, jm) ? 1 : 0), 0 === Vm[pm]) continue;
                const Em = Rm[Tm];
                if (xm && hm[Tm] === im) om && 1 === Am[Tm] && Wm(Em) && 0, Dm.see(Em, 1 === Am[Tm] ? pm : -1);
                else if (xm) {
                  hm[Tm] = im;
                  const mm = !0 === Em.metadata[TT.l];
                  Am[Tm] = mm ? 1 : 0;
                  const fm = Km(Em, pm, mm);
                  !mm || fm && pT(Em) || (hm[Tm] = 0)
                } else am ? Km(Em, pm, !0 === Em.metadata[TT.l]) : Bm.f.prototype.push.call(fm, Em)
              }
              continue
            }
          }
          am && Dm.finish(fm, Om)
        })(hm), im.apply(hm, mm.activeCamera);
        const am = Tm.Khm;
        for (let mm = 0; mm < am.length; mm++) {
          const Tm = am[mm];
          Tm.isEnabled() && Bm.f.prototype.push.call(hm, Tm)
        }
        return Am(hm, fm), hm
      }, {
        nhm: () => Dm.culled,
        whm: (mm, Tm) => {
          const Am = Math.floor(Tm[0] / am),
            wm = Math.floor(Tm[1] / am),
            Dm = Math.floor(Tm[2] / am),
            im = `${Am}|${wm}|${Dm}`;
          let Rm = xm.get(im);
          if (!Rm) {
            const mm = [0, 0, 0];
            fm.pTm([Am * am - 1, wm * am - 1, Dm * am - 1], null, mm), Rm = Object.assign(hm(mm, am + 2), {
              Jhm: im,
              chm: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Vm()
            }), Im(Rm), om[Rm._noaSlot] = (0, Lm.g)(Am, wm, Dm), Om[3 * Rm._noaSlot] = Am, Om[3 * Rm._noaSlot + 1] = wm, Om[3 * Rm._noaSlot + 2] = Dm, xm.set(im, Rm)
          }
          Rm.chm++, mm.metadata[tm.y] = Rm
        },
        yG: mm => {
          const Tm = mm.metadata[tm.y];
          Tm && (Tm.chm--, Tm.chm <= 0 && (xm.delete(Tm.Jhm), qm.push(Tm._noaSlot)), mm.metadata[tm.y] = null)
        },
        Ihm: (mm, Tm) => {
          const fm = mm,
            hm = Tm.metadata[tm.y];
          (fm._noaSlots ??= []).push(hm._noaSlot), (fm._noaStamps ??= []).push(0), (fm._noaTerrain ??= []).push(0), fm.entries.push(Tm)
        },
        removeEntry: (mm, Tm) => {
          const fm = mm,
            hm = fm.entries,
            Am = hm.indexOf(Tm);
          if (Am < 0) return;
          const am = fm._noaSlots,
            xm = fm._noaStamps,
            wm = fm._noaTerrain,
            Dm = hm.length - 1;
          hm[Am] = hm[Dm], am[Am] = am[Dm], xm[Am] = xm[Dm], wm[Am] = wm[Dm], hm.pop(), am.pop(), xm.pop(), wm.pop()
        },
        Q8: mm => {
          for (const Tm of xm.values()) {
            Tm.ohm.zhm(mm), Tm.Ehm.zhm(mm);
            for (const fm of Tm.Qhm) fm.zhm(mm);
            Im(Tm)
          }
        }
      }
    }

    function qT(mm, Tm) {
      return Tm.set(mm), Tm
    }

    function jT(mm, Tm, fm) {
      const hm = mm[Tm],
        Am = mm[Tm + 1],
        am = mm[Tm + 2],
        xm = mm[Tm + 3],
        wm = mm[Tm + 4],
        Dm = mm[Tm + 5];
      for (let im = 0; im < 24; im += 4) {
        const mm = fm[im],
          Tm = fm[im + 1],
          Rm = fm[im + 2];
        if (!(mm * (mm >= 0 ? xm : hm) + Tm * (Tm >= 0 ? wm : Am) + Rm * (Rm >= 0 ? Dm : am) + fm[im + 3] >= 0)) return !1
      }
      return !0
    }
    var VT = fm(37827);
    class IT {
      constructor(mm, Tm) {
        var fm = mm.Aq;
        fm.vfm(new um.b(fm));
        var hm = new lm.e(Dm);
        fm.khm = hm, hm.blocks = [];
        var Am, am = {},
          wm = [];
        this.textPlanes = wm, this.nhm = () => Am.nhm(), this.Q8 = mm => {
          Rm(hm, mm), Am.Q8(mm)
        }, this.whm = (Tm, fm, xm) => {
          if (!Tm.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Tm.metadata[tm.w] && !Tm.metadata[tm.n]) {
            if (!fm) {
              var Dm = hm.Khm;
              if (Tm.metadata[tm.D] && !Tm.parent) {
                Dm = wm;
                var Rm = Tm.DH().Shm;
                Tm.metadata[tm.G] = Rm.center.length() + Rm.radius, Tm.gO = !0
              }
              return Dm.push(Tm), Tm.metadata[tm.i] = Dm, void(Tm.metadata[tm.n] = !0)
            }
            var Em = Math.floor(xm[0] / im),
              om = Math.floor(xm[1] / im),
              Om = Math.floor(xm[2] / im),
              Ym = Em + "|" + om + "|" + Om,
              qm = am[Ym];
            if (!qm) {
              var jm = [Em * im, om * im, Om * im],
                Vm = [0, 0, 0];
              mm.IE.pTm(jm, null, Vm), qm = pm(Vm, im), hm.blocks.push(qm), am[Ym] = qm, qm.Jhm = Ym
            }
            Am.whm(Tm, xm), Am.Ihm(qm, Tm), qm.chm = (qm.chm || 0) + 1, Tm.metadata[tm.w] = qm, Tm.metadata[tm.q] = !0, Tm.gO = !0
          }
        }, this.yG = mm => {
          if (mm.metadata) {
            mm.metadata[tm.n] && ((0, Lm.k)(mm.metadata[tm.i], mm), mm.metadata[tm.n] = !1), mm.metadata[tm.i] === wm && (mm.gO = !1), mm.metadata[tm.i] = void 0, mm.metadata[tm.G] = void 0;
            var Tm = mm.metadata[tm.w];
            Tm && Tm.entries && (mm.metadata[tm.q] && Am.removeEntry(Tm, mm), Tm.chm--, Tm.chm <= 0 && (delete am[Tm.Jhm], (0, Lm.k)(hm.blocks, Tm))), Am.yG(mm), mm.metadata[tm.w] = null, mm.metadata[tm.q] = !1
          }
        }, this.K4 = function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (mm.metadata[tm.w]) {
            if (mm.metadata[tm.q] === Tm) return;
            var fm = mm.metadata[tm.w];
            fm && fm.entries && (Tm ? Am.Ihm(fm, mm) : Am.removeEntry(fm, mm)), mm.metadata[tm.q] = Tm
          } else {
            if (mm.metadata[tm.n] === Tm) return;
            var am = mm.metadata[tm.i] || hm.Khm;
            Tm ? am.push(mm) : (0, Lm.k)(am, mm), mm.metadata[tm.n] = Tm
          }
        };
        var Dm = () => {},
          im = Tm * mm.IE.oE.qmm,
          Rm = (mm, Tm) => {
            mm.blocks.forEach((mm => {
              mm.ohm.zhm(Tm), mm.Ehm.zhm(Tm), mm.Qhm.forEach((mm => mm.zhm(Tm))), mm.blocks && Rm(mm, Tm)
            }))
          },
          pm = (mm, Tm) => {
            var fm = new xm.WO(mm[0], mm[1], mm[2]),
              hm = new xm.WO(mm[0] + Tm, mm[1] + Tm, mm[2] + Tm);
            return new Mm.e(fm, hm, void 0, void 0, void 0, Dm)
          };
        Am = YT(fm, hm, mm.IE, pm, ((mm, Tm) => {
          for (var fm = 0; fm < wm.length; fm++) {
            var hm = wm[fm];
            hm.isEnabled(!1) && ((0, VT.c)(hm, Tm) && Bm.f.prototype.push.call(mm, hm))
          }
        }))
      }
    }

    function KT(mm) {
      const {
        holderPosition: Tm,
        holderRotation: fm,
        zW: hm,
        fov: Am,
        near: am,
        far: xm
      } = mm.model.cW, wm = mm.yhm;
      wm.position.Z8(Tm[0], Tm[1], Tm[2]), wm.rotation.Z8(fm[0], fm[1], fm[2]);
      const Dm = mm.camera;
      Dm.position.Z8(hm[0], hm[1], hm[2]), Dm.fov = Am, Dm.minZ = am, Dm.maxZ = xm
    }

    function QT(mm) {
      const Tm = mm.dO(),
        fm = Tm,
        hm = fm._gl;
      if (!hm || fm.zY < 2 || Tm.fhm || hm.getParameter(hm.DEPTH_BITS) < 24) return !1;
      const Am = mm._renderingManager,
        am = Am.getRenderingGroup(-1),
        xm = Am.getRenderingGroup(0),
        wm = Hm.e.prototype.render;
      return am.render = function(mm, Tm, fm, hm, Am, am, Dm, im, Rm) {
        (mm || xm._empty) && wm.call(this, mm, Tm, fm, hm, Am, am, Dm, im, Rm)
      }, xm.render = function(mm, fm, Am, xm) {
        let Dm = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          im = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          pm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Em = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          om = arguments.length > 8 ? arguments[8] : void 0;
        mm ? wm.call(this, mm, fm, Am, xm, Dm, im, pm, Em, om) : (Tm.setAlphaMode(Rm.b.ALPHA_DISABLE), wm.call(this, null, !1, !1, xm, Dm, im, pm, !1), am._empty || (hm.depthRange(1, 1), wm.call(am, null, fm, Am, xm, Dm, im, pm, Em, om), hm.depthRange(0, 1)), wm.call(this, null, fm, Am, xm, !1, !1, !1, Em, om))
      }, !0
    }

    function nT(mm, Tm) {
      return [Tm, sm.g].map(((Tm, fm) => {
        const hm = new Am.e("light", xm.WO.FromArray(Tm), mm);
        return hm.diffuse = am.Color3.FromArray([1, 1, 1]), hm.specular = am.Color3.FromArray([1, 1, 1]), hm.intensity = sm.e[fm], hm
      }))
    }
    class JT extends Dm.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(mm) {
        var Tm;
        this.heldTexture = mm, this.particleTexture = null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.mirror) && void 0 !== Tm ? Tm : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        mm && (this.particleTexture = null, (0, im.z)(this.heldTexture), this.heldTexture = null), super.dispose(mm, Tm, fm)
      }
    }
    const cT = hm.c.Zero();
    const zT = {
      Qfm: function(mm, Tm) {
        return new Sm(mm, Tm.jfm, {
          preserveDrawingBuffer: Tm.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      shm: function(mm, Tm) {
        ! function(mm, Tm, fm) {
          const hm = new Cm.c(mm.engine);
          mm.Aq = hm, hm.detachControl(), hm.autoClear = !1, ym.b.MIN_RENDERINGGROUPS = -1;
          for (let am = ym.b.MIN_RENDERINGGROUPS; am <= 1; am++) hm.setRenderingOrder(am, Hm.e.PainterSortCompare, Hm.e.PainterSortCompare, Hm.e.PainterSortCompare);
          hm.setRenderingAutoClearDepthStencil(0, !1), Pm.d.Enabled = !1, mm.Xhm = new IT(mm, Math.round(Tm.Phm)), mm.yhm = new Xm.c("camHolder", hm), mm.camera = new Gm.b("camera", new xm.WO(0, 0, 0), hm), mm.camera.parent = mm.yhm, KT(mm), (0, sm.h)(mm, ((mm, Tm, fm) => (0, rm.h)(Tm, fm, mm.Aq))), hm.clearColor = am.e.FromArray(Tm.clearColor), hm.ambientColor = am.Color3.FromArray(Tm.ambientColor);
          const Am = fm(hm, Tm.rhm);
          hm.onNewLightAddedObservable.add((mm => {
            Am.some((Tm => Tm === mm)) || console.error(`Light "${mm.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), hm.skipPointerMovePicking = !0
        }(mm, Tm, nT), QT(mm.Aq)
      },
      Hhm: KT,
      setBabylonFog: function(mm, Tm, fm, hm) {
        const Am = mm.Aq;
        Am.fogMode = 3, Am.fogStart = Tm, Am.fogEnd = fm, Am.fogColor.set(hm[0], hm[1], hm[2])
      },
      Mhm: function(mm, Tm, fm) {
        return mm.engine.zY >= 2 && (mm.Bhm || (mm.Bhm = new km(mm.Aq, mm.Lhm)), !mm.Bhm.failed) ? mm.Bhm.yX(Tm, fm) : new JT(Tm, fm, mm.Aq)
      },
      thm: function(mm, Tm) {
        mm.Aq.VK.forEach((fm => {
          if (fm instanceof zm) return void fm.Q8(Tm, mm.IE.HE);
          const hm = fm;
          if (hm.emitter.getConnectedParticleSystems)
            for (const mm of hm._particles) mm.position.set(mm.position.x - Tm[0], mm.position.y - Tm[1], mm.position.z - Tm[2]);
          else {
            if (!hm.worldOffset) throw new Error("Particle system has no world offset");
            hm.worldOffset.x = -mm.IE.HE[0], hm.worldOffset.y = -mm.IE.HE[1], hm.worldOffset.z = -mm.IE.HE[2]
          }
        }))
      },
      linesFromArrays: function(mm, Tm, fm) {
        const hm = new wm.c(Tm, mm.Aq, null, void 0, void 0, !1);
        return (0, rm.f)(Tm, fm, mm.Aq, hm), hm
      },
      aq: RT,
      vhm: function(mm, Tm) {
        return cT.origin.ZZ(Tm.origin), cT.direction.ZZ(Tm.direction), cT.length = Tm.length, cT.epsilon = Tm.epsilon, cT.vhm(mm, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41178: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => lm,
      h: () => Vm,
      j: () => Um
    });
    var hm = fm(40357),
      Am = fm(41186),
      am = fm(41220),
      xm = fm(41194),
      wm = fm(37872),
      Dm = fm(37880),
      im = fm(37888),
      Rm = fm(37894),
      pm = fm(37286),
      Em = fm(37290),
      om = fm(41198),
      Om = fm(37274),
      Ym = fm(37276),
      qm = fm(37260);

    function jm(mm, Tm) {
      return Object.assign((function(mm, fm, hm, Am) {
        return Tm(this.featureState, mm, fm, hm, Am)
      }), {
        nO: mm
      })
    }

    function Vm(mm) {
      const Tm = class extends om.e {
          constructor(Tm, fm) {
            const hm = (0, Ym.cb)(Tm),
              Am = hm && (0, Ym.y)(hm, mm.name);
            for (var am = arguments.length, xm = new Array(am > 2 ? am - 2 : 0), wm = 2; wm < am; wm++) xm[wm - 2] = arguments[wm];
            super(Tm, mm.name, mm.priority, Am ? Am.defines : mm.defines(...xm), !1), this.featureState = void 0, this.featureState = fm, this._pluginManager._addPlugin(this), this._enable(!0), (0, Ym.A)(this._material, mm, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return mm.className
          }
          isCompatible(mm) {
            return mm === qm.b.GLSL || mm === qm.b.WGSL
          }
        },
        fm = (0, Om.i)(mm);
      for (const [hm, Am] of Object.entries(Om.d)) {
        const am = mm[hm];
        if (am) {
          const mm = fm[hm];
          Object.defineProperty(Tm.prototype, Am, {
            value: jm(am, mm),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Tm
    }
    class Im extends(Vm(wm.e)) {}
    var Km = fm(39930),
      Qm = fm(41201);
    const nm = new WeakMap;

    function Jm(mm, Tm, fm) {
      let hm = nm.get(fm);
      hm || (hm = new Map, nm.set(fm, hm));
      const {
        url: Am
      } = mm;
      let am = hm.get(Am);
      return am || (am = async function(mm, Tm, fm) {
        var hm;
        const {
          width: Am,
          height: am
        } = mm.getSize(), wm = Math.round(am / Am), Dm = mm.getInternalTexture(), im = Tm && Tm.byteLength === Am * Am * wm * 4 ? Tm : null !== (hm = cm.get(Dm)) && void 0 !== hm ? hm : mm._readPixelsSync(), Rm = new Qm.c(im, Am, Am, wm, Km.d.TEXTUREFORMAT_RGBA, fm, !0, !1, xm.c.NEAREST_NEAREST_MIPLINEAR);
        cm.has(Dm) || (! function(mm, Tm) {
          const fm = Tm.createRawTexture(new Uint8Array(4), 1, 1, Km.d.TEXTUREFORMAT_RGBA, !1, !1, xm.c.NEAREST_SAMPLINGMODE);
          mm._hardwareTexture.release(), Tm.unbindAllTextures(), fm._swapAndDie(mm, !1)
        }(Dm, fm.dO()), cm.set(Dm, im));
        return Rm
      }(mm, Tm, fm), hm.set(Am, am), am.catch((() => {
        hm.delete(Am)
      }))), am
    }
    const cm = new WeakMap;
    var zm = fm(37903);
    class Zm extends(Vm(Dm.j)) {
      constructor(mm, Tm) {
        super(mm, Tm), Tm.textures.forEach(((mm, Tm) => {
          mm.mirror.onLoadObservable.add((mm => {
            this.setTextureArrayData(mm, Tm).catch((mm => {
              console.error(`Failed to build texture array for atlas ${Tm}`, mm)
            }))
          }))
        })), (0, zm.h)(Tm, mm.shaderLanguage)
      }
      async setTextureArrayData(mm, Tm) {
        var fm, hm;
        const Am = this.featureState,
          {
            width: am,
            height: xm
          } = mm.getSize(),
          wm = Am.useWebGL2 ? await Jm(mm, null !== (fm = null === (hm = Am.sources.pixels) || void 0 === hm ? void 0 : hm[Tm]) && void 0 !== fm ? fm : null, this._material.wG()) : null;
        (0, zm.c)(this._material, Am, Tm, wm, am, Math.round(xm / am), this._material.shaderLanguage)
      }
    }
    var km = fm(41203),
      bm = fm(40404),
      Sm = fm(37181),
      em = fm(41212),
      Nm = fm(40527),
      Gm = fm(40391),
      Xm = fm(41166),
      Pm = fm(37661),
      Hm = fm(41218);
    class ym extends km.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Cm = {
      Mesh: em.c,
      TransformNode: Xm.c,
      XO: km.e,
      VertexBuffer: km.g,
      BoundingInfo: bm.b,
      WO: Sm.WO,
      ArenaBuffer: ym,
      SubMesh: Gm.e,
      VertexData: Nm.c,
      MirroredGeometry: Hm.d,
      meshFromArrays: Hm.f,
      plainMeshFromArrays: Hm.h
    };
    (0, Pm.f)(Cm);
    var rm = fm(37488);
    class sm extends(Vm(Rm.g)) {
      constructor(mm, Tm) {
        if (super(mm, Tm), mm instanceof hm.StandardMaterial && Tm.dirLightCount > 0) {
          const Tm = mm,
            fm = Tm._blockDirtyMechanism;
          Tm._blockDirtyMechanism = !0, mm.disableLighting = !0, Tm._blockDirtyMechanism = fm;
          const hm = (0, Ym.cb)(mm);
          hm && (hm.disableLighting = !0, (0, Ym.$)(hm))
        }(0, rm.e)(mm)
      }
      dispose(mm) {
        (0, rm.i)(this._material), super.dispose(mm)
      }
    }

    function lm(mm, Tm) {
      if (!(Tm instanceof hm.StandardMaterial) || Tm.specularTexture) return;
      const {
        r: fm,
        g: Am,
        b: am
      } = Tm.specularColor;
      0 === fm && 0 === Am && 0 === am && (mm.SPECULARTERM = !1)
    }(0, Rm.d)({
      disableUnusedSpecularTerm: lm
    });
    var Mm = fm(37357),
      um = fm(37671);
    const Bm = new RegExp(`^#define ${im.c}\\s*$`, "m");
    class Lm extends(Vm(im.j)) {
      constructor(mm, Tm) {
        super(mm, Tm), this.PO = !1, Tm.ditherOnlyWhileFading && (um.e.add(mm), this.prewarmDitherTwins(mm))
      }
      prewarmDitherTwins(mm) {
        const Tm = new WeakSet;
        mm.onEffectCreatedObservable.add((fm => {
          let {
            effect: hm,
            subMesh: Am
          } = fm;
          if (this.featureState.prewarmingDither || Tm.has(hm)) return;
          Tm.add(hm);
          const am = null === Am || void 0 === Am ? void 0 : Am.getMesh();
          am && !Bm.test(hm.defines) && mm.wG().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(am) || Tm.delete(hm)
          }))
        }))
      }
      prewarmDither(mm) {
        if (this.PO || mm.aJ()) return !1;
        const Tm = new Gm.e(0, 0, 0, 0, 0, mm, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(mm, Tm)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Tm.effect
      }
      dispose(mm) {
        this.PO = !0, super.dispose(mm)
      }
    }
    const tm = new Map;

    function Um(mm, Tm) {
      tm.set(mm, Tm)
    }
    Um(wm.e, Im), Um(Dm.j, Zm), Um(im.j, Lm), Um(Rm.g, sm), (0, pm.d)({
      create: (mm, Tm) => {
        const fm = new hm.StandardMaterial(mm.name, Tm);
        return (0, Mm.s)(mm, fm), fm.detailMap._pluginDefineNames
      },
      write: (mm, Tm, fm) => {
        (0, Mm.W)(mm.mirror, Tm, fm)
      },
      addFeature: (mm, Tm, fm) => {
        const hm = tm.get(Tm.feature);
        if (!hm) throw new Error(`${Tm.feature.name} has no plugin class (registerPluginClass)`);
        new hm(mm.mirror, Tm.state, ...fm)
      },
      texture: (mm, Tm, fm) => {
        let {
          url: hm,
          noMipmap: Am,
          invertY: am,
          samplingMode: wm,
          data: Dm,
          sets: im
        } = fm;
        if (!Dm) {
          const fm = new xm.c(hm, Tm, Am, am, wm);
          return Object.assign(fm, im), void(0, Em.H)(mm, fm)
        }
        const Rm = {},
          pm = new Promise(((mm, Tm) => {
            Rm.onLoad = mm, Rm.onError = (mm, fm) => {
              Tm(new Error(`${Dm.context}: ${(null===fm||void 0===fm?void 0:fm.message)||mm||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: om,
            bytes: Om,
            label: Ym
          } = Dm,
          qm = {
            noMipmap: Am,
            invertY: !1,
            samplingMode: wm,
            ...Rm,
            mimeType: om,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          jm = new xm.c(null, Tm, qm);
        Mm.w.set(jm, pm), Object.assign(jm, im), jm.updateURL(hm, Om);
        const Vm = jm.getInternalTexture();
        Vm && (Vm.label = Ym), mm.uvSet = jm.coordinatesIndex, mm.matrix.set((0, Mm.P)(jm)), (0, Em.H)(mm, jm)
      },
      cube: (mm, Tm, fm) => {
        let {
          rootUrl: hm,
          files: am,
          noMipmap: wm,
          luminance: Dm
        } = fm;
        const {
          samplingMode: im
        } = mm.sampler, Rm = im === (0, Em.y)(wm) ? null : () => {
          (0, Mm.L)(pm, im)
        }, pm = new Am.b(hm, Tm, null, wm, am, Rm, null, (0, Em.w)(Dm));
        pm.coordinatesMode = xm.c.SKYBOX_MODE, (0, Em.H)(mm, pm)
      },
      canvas: (mm, Tm, fm) => {
        let {
          width: hm,
          height: Am,
          mipmaps: wm,
          samplingMode: Dm,
          hasAlpha: im = !1,
          wrap: Rm = xm.c.CLAMP_ADDRESSMODE
        } = fm;
        const pm = new am.b(Tm, {
          width: hm,
          height: Am
        }, mm, wm, Dm);
        pm.hasAlpha = im, pm.wrapU = Rm, pm.wrapV = Rm;
        const Em = (0, Mm.B)(pm);
        return (0, Mm.F)(Em, pm), Em
      }
    })
  },
  41218: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Rm,
      f: () => pm,
      h: () => Em
    });
    var hm = fm(41203),
      Am = fm(40180),
      am = fm(40404),
      xm = fm(40529),
      wm = fm(41212),
      Dm = fm(40527),
      im = fm(37545);
    class Rm extends xm.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (mm, Tm) => {
          this.releaseUnlessInstanced(Tm)
        }, this.onLinked = null
      }
      link(mm) {
        var Tm;
        (0, im.i)(mm), this.model = mm, null === (Tm = this.onLinked) || void 0 === Tm || Tm.call(this, mm)
      }
      relink() {
        this.release();
        const mm = [];
        for (const Am of Object.values(this._vertexBuffers))
          if (!Am.getIsInstanced()) {
            const {
              byteOffset: Tm,
              byteStride: fm,
              type: hm,
              normalized: am
            } = Am;
            mm.push({
              kind: Am.getKind(),
              data: Am.getData(),
              offset: Tm,
              stride: fm,
              components: Am.getSize(),
              glType: hm,
              isNormalized: am
            })
          } const Tm = this._indices.length ? this._indices : null,
          {
            minimum: fm,
            maximum: hm
          } = this.extend;
        this.link(new im.e(mm, Tm, this.getTotalVertices(), new Float64Array(fm.ahm()), new Float64Array(hm.ahm())))
      }
      copy(mm) {
        if (!this.model) return super.copy(mm);
        const Tm = new Rm(mm, this.wG()),
          fm = this.xhm(void 0, !0);
        fm && Tm.setIndices(fm);
        let xm = !1;
        for (const am in this._vertexBuffers) {
          const mm = this._vertexBuffers[am],
            fm = mm.getData();
          if (!fm) continue;
          const wm = mm.getSize(),
            {
              type: Dm,
              byteOffset: im,
              byteStride: Rm,
              normalized: pm
            } = mm;
          xm ||= mm.isUpdatable();
          const Em = mm.getIsInstanced() ? (fm instanceof Array ? 4 * fm.length : fm.byteLength) / Rm : this.getTotalVertices(),
            om = (0, Am.u)(fm, wm, Dm, im, Rm, Em, !0),
            Om = {
              updatable: mm.isUpdatable(),
              stride: wm,
              type: Dm,
              normalized: pm,
              takeBufferOwnership: !0,
              instanced: mm.getIsInstanced()
            };
          Tm.setVerticesBuffer(new hm.g(this.dO(), om, am, Om), Em)
        }
        return Tm._updatable = xm, Tm._boundingInfo = new am.b(this.extend.minimum, this.extend.maximum), Tm.relink(), Tm
      }
      static mergeMeshes(mm, Tm, fm, hm, Am, am) {
        const Dm = mm[0].wG(),
          im = new wm.c(mm[0].name + "_merged", Dm),
          pm = new Rm(xm.d.RandomId(), Dm, void 0, !1, im);
        try {
          if (!wm.c.MergeMeshes(mm, Tm, fm, im, Am, am)) return im.dispose(), null
        } catch (Em) {
          throw im.dispose(), Em
        }
        return pm.relink(), im
      }
      removeVerticesData(mm) {
        this.releaseUnlessInstanced(mm), super.removeVerticesData(mm)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(mm) {
        var Tm;
        mm && null !== (Tm = this.getVertexBuffer(mm)) && void 0 !== Tm && Tm.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, im.m)(this.model), this.model = null)
      }
    }

    function pm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new wm.c(mm, fm);
      const Am = (0, im.g)(Tm),
        {
          positions: am,
          normals: pm,
          uvs: Em,
          indices: om,
          named: Om = {}
        } = Tm,
        Ym = new Dm.c;
      Ym.positions = am, Ym.normals = null !== pm && void 0 !== pm ? pm : null, Ym.uvs = null !== Em && void 0 !== Em ? Em : null, Ym.indices = om;
      const qm = new Rm(xm.d.RandomId(), fm, Ym, !1, hm);
      for (const {
          kind: xm,
          components: wm
        }
        of Am.vertexAttributes) xm in Om && hm.setVerticesData(xm, Om[xm], !1, wm);
      return qm.link(Am), hm
    }

    function Em(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Am = new wm.c(mm, fm),
        {
          positions: am,
          normals: xm,
          uvs: im,
          indices: Rm
        } = Tm;
      return Object.assign(new Dm.c, {
        positions: am,
        normals: xm,
        uvs: im,
        indices: Rm
      }).applyToMesh(Am, hm), Am
    }
  },
  41643: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => qm,
      g: () => wm,
      j: () => xm,
      m: () => im
    });
    var hm = fm(37330),
      Am = fm(38802),
      am = fm(38795);

    function xm(mm, Tm, fm, hm) {
      const Am = am.u;
      Tm.fill(0), mm.gravity.toArray(Tm, Am.gravity), mm.colorDead.toArray(Tm, Am.colorDead), fm[Am.ramp] = mm.useRampGradients ? 1 : 0;
      const xm = mm.getColorGradients(),
        wm = Em(mm, xm, "colour", hm);
      fm[Am.colorCount] = wm;
      for (let am = 0; am < wm; am++) {
        var Dm;
        const mm = xm[om(xm, am)];
        Tm[Am.colorPositions + am] = mm.gradient, mm.color1.toArray(Tm, Am.color1 + 4 * am), (null !== (Dm = mm.color2) && void 0 !== Dm ? Dm : mm.color1).toArray(Tm, Am.color2 + 4 * am)
      }
      const im = mm.getVelocityGradients(),
        Rm = Em(mm, im, "qq", hm);
      fm[Am.velocityCount] = Rm;
      for (let am = 0; am < Rm; am++) Vm(Tm, Am.qq + 4 * am, im[om(im, am)]);
      const pm = mm.useRampGradients ? mm.getColorRemapGradients() : null,
        Om = Em(mm, pm, "colour remap", hm);
      fm[Am.remapCount] = Om;
      for (let am = 0; am < Om; am++) Vm(Tm, Am.remap + 4 * am, pm[om(pm, am)])
    }

    function wm() {
      return {
        key: [],
        texels: new Uint8Array(4 * am.l)
      }
    }
    const Dm = [];

    function im(mm, Tm) {
      return Rm(mm, Dm), !jm(Dm, Tm.key) && (Tm.key.length = 0, Tm.key.push(...Dm), Tm.key.length > 0 && function(mm, Tm) {
        for (let fm = 0; fm < am.l; fm++) Am.j.GetCurrentGradient(fm / am.l, mm, ((mm, Tm, fm) => {
          hm.Color3.LerpToRef(mm.color, Tm.color, fm, pm)
        })), Tm[4 * fm] = 255 * pm.r, Tm[4 * fm + 1] = 255 * pm.g, Tm[4 * fm + 2] = 255 * pm.b, Tm[4 * fm + 3] = 255
      }(mm.getRampGradients(), Tm.texels), !0)
    }

    function Rm(mm, Tm) {
      Tm.length = 0;
      const fm = mm.useRampGradients ? mm.getRampGradients() : null;
      if (null !== fm && void 0 !== fm && fm.length) {
        Tm.push(fm.length);
        for (const mm of fm) Tm.push(mm.gradient, mm.color.r, mm.color.g, mm.color.b)
      }
    }
    const pm = new hm.Color3;

    function Em(mm, Tm, fm, hm) {
      return Tm ? Tm.length > am.d ? (hm(`particleStops:${fm}`, `GPU particles use the first 2 and last ${am.d-2} of more than ${am.d} ${fm} gradient stops (${mm.name})`), am.d) : Tm.length : 0
    }

    function om(mm, Tm) {
      return Tm < 2 || mm.length <= am.d ? Tm : mm.length - am.d + Tm
    }
    const Om = new Float32Array(am.o),
      Ym = new Uint32Array(Om.buffer);

    function qm(mm, Tm, fm) {
      return xm(mm, Om, Ym, fm), Tm && jm(Ym, Tm) ? null : Ym.slice()
    }

    function jm(mm, Tm) {
      if (mm.length !== Tm.length) return !1;
      for (let fm = 0; fm < mm.length; fm++)
        if (mm[fm] !== Tm[fm]) return !1;
      return !0
    }

    function Vm(mm, Tm, fm) {
      var hm;
      mm[Tm] = fm.gradient, mm[Tm + 1] = fm.factor1, mm[Tm + 2] = null !== (hm = fm.factor2) && void 0 !== hm ? hm : fm.factor1
    }
  },
  41638: (mm, Tm, fm) => {
    function hm() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Tm = new Set;
      return (fm, hm) => {
        Tm.has(fm) || (Tm.add(fm), console.warn(mm + hm))
      }
    }
    fm.d(Tm, {
      c: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);