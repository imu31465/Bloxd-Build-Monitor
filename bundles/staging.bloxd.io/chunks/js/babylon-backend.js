export const id = 0;
export const ids = [0];
export const modules = {
  41323: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      CapeMaterialPlugin: () => Jt,
      HueTintMaterialPlugin: () => Ct,
      LifeformMaterialPlugin: () => ut,
      OverlayMaterialPlugin: () => Kt
    });
    var Ot = Vt(41332),
      qt = Vt(38261);
    class Dt extends((0, Ot.d)(qt.e)) {}(0, Ot.f)(qt.e, Dt);
    var mt = Vt(37426);
    class dt extends((0, Ot.d)(mt.e)) {}(0, Ot.f)(mt.e, dt);
    var jt = Vt(38105);
    class Ht extends((0, Ot.d)(jt.d)) {}(0, Ot.f)(jt.d, Ht);
    var Xt = Vt(37670),
      Qt = Vt(40452),
      lt = Vt(37663);
    class Et extends((0, Ot.d)(lt.h)) {
      constructor(tt, et, Vt) {
        super(tt, et, Vt), (0, Xt.j)(tt)
      }
      dispose(tt) {
        (0, Xt.m)(this._material), super.dispose(tt)
      }
    }(0, Ot.f)(lt.h, Et), (0, lt.j)({
      disableUnusedSpecularTerm: Ot.c,
      isLightingDisabled: tt => tt instanceof Qt.StandardMaterial && tt.disableLighting
    });
    var ft = Vt(38913);
    class wt extends((0, Ot.d)(ft.f)) {}(0, Ot.f)(ft.f, wt);
    var yt = Vt(39019),
      Nt = Vt(37521),
      Mt = Vt(38386),
      bt = Vt(37476);
    class Jt extends((0, Ot.d)(yt.b)) {}(0, Ot.f)(yt.b, Jt);
    class Ct extends((0, Ot.d)(Nt.d)) {}(0, Ot.f)(Nt.d, Ct);
    class ut extends((0, Ot.d)(Mt.m)) {}(0, Ot.f)(Mt.m, ut);
    class Kt extends((0, Ot.d)(bt.b)) {}(0, Ot.f)(bt.b, Kt)
  },
  41802: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      addBabylonLights: () => Ce,
      default: () => he
    });
    var Ot = Vt(41805),
      qt = (Vt(40182), Vt(41316), Vt(40669), Vt(41816)),
      Dt = Vt(37510),
      mt = Vt(37331),
      dt = Vt(41824),
      jt = Vt(41831),
      Ht = Vt(37467),
      Xt = (Vt(41332), Vt(41842)),
      Qt = Vt(41840),
      lt = Vt(38937),
      Et = Vt(41848),
      ft = Vt(40061),
      wt = Vt(38924);
    const yt = "gpuParticles",
      Nt = wt.w,
      Mt = tt => tt / 4,
      bt = tt => `gpuParticleSystem[${tt>>2}].${"xyzw"[3&tt]}`,
      Jt = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${wt.e}\n#define COLOR_POSITIONS ${Mt(Nt.colorPositions)}\n#define COLOR1 ${Mt(Nt.color1)}\n#define COLOR2 ${Mt(Nt.color2)}\n#define VELOCITY ${Mt(Nt.Dy)}\n#define REMAP ${Mt(Nt.remap)}\n#define RECORDS_PER_ROW ${wt.p}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${wt.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${bt(Nt.gravity)}, ${bt(Nt.gravity+1)}, ${bt(Nt.gravity+2)}); }\nint colorCount() { return int(${bt(Nt.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Mt(Nt.colorDead)}]; }\nint velocityCount() { return int(${bt(Nt.velocityCount)}); }\nint remapCount() { return int(${bt(Nt.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    ft.b.ShadersStore[`${yt}VertexShader`] = Jt, ft.b.ShadersStore[`${yt}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Ct = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      ut = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Kt = Vt(38922),
      ht = Vt(41851);
    class vt extends Kt.b {
      constructor(tt, et, Vt, Ot) {
        super(tt, et, Vt), this.renderer = Vt, this.Fw = Ot, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(wt.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, ht.i)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (tt, et) => {
          const {
            engine: Vt
          } = this, Ot = Vt._gl;
          Vt._bindTextureDirectly(Ot.TEXTURE_2D, this.records, !0), Vt._unpackFlipY(!1);
          const qt = this.ring.recordBits;
          for (let Dt = tt; Dt < et;) {
            const tt = Math.floor(Dt / wt.p),
              Vt = Math.min(et, (tt + 1) * wt.p);
            Ot.texSubImage2D(Ot.TEXTURE_2D, 0, Dt % wt.p * 4, tt, 4 * (Vt - Dt), 1, Ot.RGBA_INTEGER, Ot.UNSIGNED_INT, qt, Dt * wt.h), Dt = Vt
          }
          Vt._bindTextureDirectly(Ot.TEXTURE_2D, null)
        }, this.id = tt;
        const qt = Ot.Jf();
        this.engine = qt;
        const Dt = Math.max(1, et),
          mt = Math.min(Dt, wt.p);
        this.records = qt.createRawTexture(null, 4 * mt, Math.ceil(Dt / mt), Xt.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Xt.e.TEXTURE_NEAREST_SAMPLINGMODE, null, Xt.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Fw.getAnimationRatio() || 1;
        const et = this.Fw.getFrameId();
        if (et === this.animatedFrame) return !1;
        const Vt = super.animate(tt);
        return Vt && (this.animatedFrame = et, this.ring.takeUploads(this.uploadSlots)), Vt
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(tt) {
        (0, ht.m)(this, this.uniforms, this.uniformBits, tt);
        for (const Vt of wt.s) this.uniforms[Vt] = this.uniformBits[Vt];
        var et;
        (0, ht.o)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (et = this.ramp) || void 0 === et || et.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Qt.d.CreateRGBATexture(this.rampTexels.texels, wt.l, 1, this.Fw, !1, !1, Xt.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var tt;
        this.records.dispose(), null === (tt = this.ramp) || void 0 === tt || tt.dispose(), this.ramp = null
      }
    }
    const Wt = "the context was lost before the programs linked";
    class St {
      constructor(tt, et) {
        this.Fw = tt, this.reportFailure = et, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Et.b)(), this.engine = tt.Jf(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Qt.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, tt, !1, !1, Xt.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      xZ(tt, et) {
        const Vt = wt.p * this.engine.getCaps().maxTextureSize;
        et > Vt && this.warnOnce(`capacity:${tt}`, `particle system ${tt} holds ${Vt} particles, not ${et}: its records texture's limit`);
        const Ot = new vt(tt, Math.min(et, Vt), this, this.Fw);
        return this.Fw.addParticleSystem(Ot), Ot
      }
      canDraw(tt) {
        var et, Vt;
        if (this.failed || null === (et = tt.texture) || void 0 === et || null === (Vt = et.mirror) || void 0 === Vt || !Vt.isReady()) return !1;
        for (const Ot of (0, lt.g)(tt.blendMode))
          if (!this.effectFor(Ot).isReady()) return !1;
        return !0
      }
      disposeStopped(tt) {
        this.Fw._toBeDisposed.push(tt)
      }
      remove(tt) {
        this.Fw.removeParticleSystem(tt), tt.releaseGl()
      }
      render(tt) {
        var et;
        if (!tt.isReady() || !tt.hasLiveParticles()) return 0;
        const {
          engine: Vt,
          Fw: Ot,
          frame: qt
        } = this;
        tt.prepareDraw(this.warnOnce), tt.drawOffset(qt, 0), qt[3] = tt.drawTime();
        const Dt = tt.ring.drawStart(),
          mt = tt.ring.drawCount(),
          dt = null !== (et = tt.ramp) && void 0 !== et ? et : this.whiteRamp;
        Vt.setState(!1);
        for (const jt of (0, lt.g)(tt.blendMode)) {
          const et = this.effectFor(jt);
          Vt.enableEffect(et), et.setTexture("gpuParticleTexture", tt.texture.mirror), et.setTexture("gpuParticleRampTexture", dt), et._bindTexture("gpuParticleRecords", tt.records), et.setMatrix("gpuParticleView", Ot.getViewMatrix()), et.setMatrix("gpuParticleProjection", Ot.getProjectionMatrix()), et.setFloatArray4("gpuParticleSystem", tt.uniforms), et.setFloat4("gpuParticleFrame", qt[0], qt[1], qt[2], qt[3]), et.setFloat2("gpuParticleRange", Dt, mt), et.setFloat("gpuParticleRamp", tt.uniforms[wt.w.ramp]), Vt.bindBuffers(this.vertexBuffers, null, et), Vt.setAlphaMode((0, lt.e)(jt)), Vt.drawArraysType(Xt.e.MATERIAL_TriangleStripDrawMode, 0, 4, mt), et._bindTexture("gpuParticleRecords", null)
        }
        return Vt.setAlphaMode(Xt.e.ALPHA_DISABLE), mt
      }
      awaitLink(tt) {
        const et = tt.getPipelineContext(),
          Vt = this.gl();
        !this.failed && Vt && (!et || et.isParallelCompiled && !et.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : et.isParallelCompiled && et.program && (Vt.getProgramParameter(et.program, Vt.LINK_STATUS) || this.fail(function(tt, et, Vt) {
          if (tt.isContextLost()) return Wt;
          for (const [Ot, qt] of [
              ["VERTEX SHADER", et.vertexShader],
              ["FRAGMENT SHADER", et.fragmentShader]
            ]) {
            const et = qt && !tt.getShaderParameter(qt, tt.COMPILE_STATUS) ? tt.getShaderInfoLog(qt) : null;
            if (et) return `${Ot} ${et}`
          }
          return tt.getProgramInfoLog(Vt) || "a program did not link"
        }(Vt, et, et.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(tt) {
        return tt === lt.b ? this.multiplyEffect : this.effect
      }
      createEffect(tt) {
        return this.engine.createEffect(yt, [], Ct, ut, tt, void 0, void 0, ((tt, et) => {
          var Vt;
          this.fail(null !== (Vt = this.gl()) && void 0 !== Vt && Vt.isContextLost() ? Wt : function(tt) {
            const et = tt.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(et) ? "a program failed, its log not in this browser's stack" : et.replace(/^Error: /, "")
          }(et))
        }))
      }
      fail(tt) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${tt}`), this.reportFailure(tt);
          for (const tt of this.Fw.PJ.slice()) tt instanceof vt && tt.disposeOnStop && tt.dispose()
        }
      }
    }
    var ct = Vt(40023);
    class Rt extends ct.e {
      createEffect() {
        const tt = super.createEffect(...arguments);
        return Pt(tt), It.has(tt) || (It.add(tt), tt.onCompileObservable.add((() => {
          Pt(tt)
        }))), tt
      }
    }
    const It = new WeakSet;

    function Pt(tt) {
      tt._vertexSourceCodeBeforeMigration = "", tt._fragmentSourceCodeBeforeMigration = ""
    }
    var Zt = Vt(40397),
      Lt = Vt(41312),
      Ft = Vt(40155),
      kt = Vt(40359),
      Gt = Vt(40357),
      zt = Vt(40289),
      ot = Vt(41387),
      rt = Vt(37867),
      Ut = Vt(41854),
      At = Vt(41858),
      it = Vt(41865),
      Yt = Vt(40311),
      Bt = Vt(2947),
      pt = Vt(37738),
      xt = Vt(40497),
      Tt = Vt(37825),
      gt = Vt(37764);

    function st(tt) {
      if (tt.visibility < 1 || !tt.isVisible || !tt.isEnabled() || tt.metadata[gt.f] || !tt.isReady()) return !0;
      const et = tt.vJ;
      if (!et || 0 === et.length) return !0;
      for (let Vt = 0; Vt < et.length; Vt++) {
        const Ot = et[Vt],
          qt = Ot.vf();
        if (!qt || !qt.isReadyForSubMesh(tt, Ot, !1)) return !0
      }
      return !1
    }
    class nt {
      constructor(tt, et) {
        this.ql = tt, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, et.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      XE(tt) {
        var et;
        const Vt = this.armed;
        if (this.armed = !1, this.vis = null, !Vt) return !1;
        this.culled = 0;
        const {
          ql: Ot
        } = this, qt = null === (et = Ot.aJ) || void 0 === et ? void 0 : et.visibility;
        if (!qt || !tt || Ot.Bf.pf) return !1;
        if (!(Ot.sQ.BOt[0] >= Tt.e)) return !1;
        const Dt = tt.getProjectionMatrix().m;
        if (0 !== Dt[15]) return !1;
        const mt = Ot.bl,
          dt = tt.globalPosition,
          jt = this.eye;
        return jt[0] = dt.x + mt[0], jt[1] = dt.y + mt[1], jt[2] = dt.z + mt[2], !!qt.eyeClear(jt[0], jt[1], jt[2], tt.minZ, Dt, Ot.sQ) && (this.vis = qt, this.passable.clear(), this.count = 0, !0)
      }
      see(tt, et) {
        const Vt = this.count++;
        if (Vt === this.cellSlots.length) {
          const tt = new Int32Array(2 * Vt);
          tt.set(this.cellSlots), this.cellSlots = tt
        }
        this.cellSlots[Vt] = et, this.meshes[Vt] = tt
      }
      seeThrough(tt) {
        this.passable.add(tt)
      }
      finish(tt, et) {
        const {
          vis: Vt,
          eye: Ot,
          meshes: qt,
          count: Dt,
          cellSlots: mt
        } = this, {
          sQ: dt
        } = this.ql, [jt, Ht] = dt.BOt, Xt = null !== Vt && Vt.update(Ot[0], Ot[1], Ot[2], dt.vtt, jt, Ht, this.passable);
        let Qt = 0;
        for (let lt = 0; lt < Dt; lt++) {
          const Ot = qt[lt];
          if (Xt) {
            const tt = 3 * mt[lt];
            if (tt >= 0 && !Vt.isDrawn(et[tt], et[tt + 1], et[tt + 2])) {
              Qt++;
              continue
            }
          }
          Yt.g.prototype.push.call(tt, Ot)
        }
        qt.fill(null, 0, Dt), this.count = 0, this.vis = null, this.culled = Qt
      }
    }
    var te = Vt(37805),
      ee = Vt(37754),
      Ve = Vt(40474),
      Oe = Vt(41873),
      qe = Vt(40476),
      De = Vt(40415);
    let me = 1;
    const de = new WeakSet;

    function je() {
      return me
    }

    function He() {
      me = me >= 1073741823 ? 1 : me + 1
    }

    function Xe(tt) {
      const et = tt.metadata;
      if (!et || !0 !== et[pt.n]) return;
      const Vt = et[pt.s],
        Ot = null === Vt || void 0 === Vt ? void 0 : Vt._noaStamps;
      if (!Vt || !Ot) return;
      const qt = Vt.entries.indexOf(tt);
      qt >= 0 && (Ot[qt] = 0)
    }

    function Qe(tt) {
      const et = tt.vJ;
      for (let Vt = 0; Vt < et.length; Vt++) {
        const tt = et[Vt].vf();
        if (tt && !tt.isFrozen) return !1
      }
      for (let Vt = 0; Vt < et.length; Vt++) {
        const tt = et[Vt].vf();
        tt && de.add(tt)
      }
      return !0
    }
    let le = !1;
    const Ee = new WeakSet;

    function fe(tt, et) {
      const Vt = tt[et];
      if ("function" !== typeof Vt) throw new Error(`terrainDrawState: Babylon has no ${et} to hook`);
      return Vt
    }

    function we(tt, et, Vt, Ot, qt) {
      const Dt = Vt.sQ.vtt,
        mt = new Map;
      let dt = 0;
      const jt = new nt(Vt, tt),
        Ht = new te.d(Dt, tt.Jf());
      ! function(tt) {
        if (Ee.has(tt) || (Ee.add(tt), tt.onContextLostObservable.add(He), tt.bf.add(He)), le) return;
        le = !0;
        const et = Oe.c.prototype,
          Vt = fe(et, "_markSubMeshesAsDirty");
        Object.assign(et, {
          _markSubMeshesAsDirty(tt) {
            Vt.call(this, tt), Xe(this)
          }
        });
        const Ot = fe(De.d.prototype, "_syncParentEnabledState");
        Object.assign(De.d.prototype, {
          _syncParentEnabledState() {
            Ot.call(this), Xe(this)
          }
        });
        const qt = fe(qe.d.prototype, "resetDrawCache");
        qe.d.prototype.resetDrawCache = function(tt, et) {
          qt.call(this, tt, et), Xe(this.getMesh())
        };
        const Dt = Ve.c.prototype,
          mt = fe(Dt, "markDirty");
        Dt.markDirty = function(tt) {
          mt.call(this, tt), de.has(this) && He()
        };
        const dt = fe(Dt, "_markAllSubMeshesAsDirty");
        Object.assign(Dt, {
          _markAllSubMeshesAsDirty(tt) {
            dt.call(this, tt), de.has(this) && He()
          }
        })
      }(tt.Jf());
      let Xt = new Float64Array(384),
        Qt = new Int32Array(64),
        lt = new Uint8Array(64),
        Et = new Float64Array(64),
        ft = new Int32Array(192),
        wt = 0;
      const yt = [],
        Nt = new Float64Array(24),
        Mt = () => {
          const tt = yt.pop();
          return void 0 !== tt ? (Qt[tt] = 0, tt) : (wt === Qt.length && (Xt = ye(Xt, new Float64Array(2 * Xt.length)), Qt = ye(Qt, new Int32Array(2 * Qt.length)), lt = ye(lt, new Uint8Array(2 * lt.length)), Et = ye(Et, new Float64Array(2 * Et.length)), ft = ye(ft, new Int32Array(2 * ft.length))), wt++)
        },
        bt = tt => {
          const et = 6 * tt._noaSlot,
            Vt = tt.tqt[0],
            Ot = tt.tqt[1];
          Xt[et] = Vt.x, Xt[et + 1] = Vt.y, Xt[et + 2] = Vt.z, Xt[et + 3] = Ot.x, Xt[et + 4] = Ot.y, Xt[et + 5] = Ot.z
        },
        Jt = (tt, et, Vt) => {
          if (!Vt) return jt.see(tt, -1), !1;
          const Ot = st(tt);
          return Ot && jt.seeThrough(Et[et]), jt.see(tt, et), !Ot
        };
      let Ct = -1;
      return tt.getActiveMeshCandidates = () => {
        const Vt = tt.frustumPlanes,
          Ot = et._selectionContent;
        Ot.reset(), (Vt => {
          const Ot = tt.frustumPlanes;
          dt = dt + 1 | 0 || 1;
          const qt = et.blocks,
            Dt = jt.XE(tt.activeCamera),
            mt = Dt && !0;
          if (mt) {
            const et = tt.Jf().currentRenderPassId;
            et !== Ct && (Ct = et, He())
          }
          const Ht = je(),
            Et = mt && !1;
          qt.length > 0 && function(tt, et) {
            for (let Vt = 0; Vt < 6; Vt++) {
              const Ot = tt[Vt],
                qt = Ot.normal;
              et[4 * Vt] = qt.x, et[4 * Vt + 1] = qt.y, et[4 * Vt + 2] = qt.z, et[4 * Vt + 3] = Ot.d
            }
          }(Ot, Nt);
          const wt = Xt,
            yt = Qt,
            Mt = lt;
          for (let tt = 0; tt < qt.length; tt++) {
            const et = qt[tt];
            if (!xt.e.IsInFrustum(et.tqt, Ot)) continue;
            const Xt = et.entries;
            {
              const tt = et._noaSlots,
                Ot = et._noaStamps,
                qt = et._noaTerrain;
              for (let et = 0; et < Xt.length; et++) {
                const Qt = tt[et];
                if (yt[Qt] !== dt && (yt[Qt] = dt, Mt[Qt] = Ne(wt, 6 * Qt, Nt) ? 1 : 0), 0 === Mt[Qt]) continue;
                const lt = Xt[et];
                if (mt && Ot[et] === Ht) Et && 1 === qt[et] && st(lt) && 0, jt.see(lt, 1 === qt[et] ? Qt : -1);
                else if (mt) {
                  Ot[et] = Ht;
                  const tt = !0 === lt.metadata[ee.l];
                  qt[et] = tt ? 1 : 0;
                  const Vt = Jt(lt, Qt, tt);
                  !tt || Vt && Qe(lt) || (Ot[et] = 0)
                } else Dt ? Jt(lt, Qt, !0 === lt.metadata[ee.l]) : Yt.g.prototype.push.call(Vt, lt)
              }
              continue
            }
          }
          Dt && jt.finish(Vt, ft)
        })(Ot), Ht.apply(Ot, tt.activeCamera);
        const Dt = et.nOt;
        for (let tt = 0; tt < Dt.length; tt++) {
          const et = Dt[tt];
          et.isEnabled() && Yt.g.prototype.push.call(Ot, et)
        }
        return qt(Ot, Vt), Ot
      }, {
        eqt: () => jt.culled,
        oOt: (tt, et) => {
          const qt = Math.floor(et[0] / Dt),
            dt = Math.floor(et[1] / Dt),
            jt = Math.floor(et[2] / Dt),
            Ht = `${qt}|${dt}|${jt}`;
          let Xt = mt.get(Ht);
          if (!Xt) {
            const tt = [0, 0, 0];
            Vt.Fet([qt * Dt - 1, dt * Dt - 1, jt * Dt - 1], null, tt), Xt = Object.assign(Ot(tt, Dt + 2), {
              Vqt: Ht,
              Oqt: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Mt()
            }), bt(Xt), Et[Xt._noaSlot] = (0, Bt.e)(qt, dt, jt), ft[3 * Xt._noaSlot] = qt, ft[3 * Xt._noaSlot + 1] = dt, ft[3 * Xt._noaSlot + 2] = jt, mt.set(Ht, Xt)
          }
          Xt.Oqt++, tt.metadata[pt.u] = Xt
        },
        wZ: tt => {
          const et = tt.metadata[pt.u];
          et && (et.Oqt--, et.Oqt <= 0 && (mt.delete(et.Vqt), yt.push(et._noaSlot)), tt.metadata[pt.u] = null)
        },
        sOt: (tt, et) => {
          const Vt = tt,
            Ot = et.metadata[pt.u];
          (Vt._noaSlots ??= []).push(Ot._noaSlot), (Vt._noaStamps ??= []).push(0), (Vt._noaTerrain ??= []).push(0), Vt.entries.push(et)
        },
        removeEntry: (tt, et) => {
          const Vt = tt,
            Ot = Vt.entries,
            qt = Ot.indexOf(et);
          if (qt < 0) return;
          const Dt = Vt._noaSlots,
            mt = Vt._noaStamps,
            dt = Vt._noaTerrain,
            jt = Ot.length - 1;
          Ot[qt] = Ot[jt], Dt[qt] = Dt[jt], mt[qt] = mt[jt], dt[qt] = dt[jt], Ot.pop(), Dt.pop(), mt.pop(), dt.pop()
        },
        K9: tt => {
          for (const et of mt.values()) {
            et.YOt.qqt(tt), et.iOt.qqt(tt);
            for (const Vt of et.tqt) Vt.qqt(tt);
            bt(et)
          }
        }
      }
    }

    function ye(tt, et) {
      return et.set(tt), et
    }

    function Ne(tt, et, Vt) {
      const Ot = tt[et],
        qt = tt[et + 1],
        Dt = tt[et + 2],
        mt = tt[et + 3],
        dt = tt[et + 4],
        jt = tt[et + 5];
      for (let Ht = 0; Ht < 24; Ht += 4) {
        const tt = Vt[Ht],
          et = Vt[Ht + 1],
          Xt = Vt[Ht + 2];
        if (!(tt * (tt >= 0 ? mt : Ot) + et * (et >= 0 ? dt : qt) + Xt * (Xt >= 0 ? jt : Dt) + Vt[Ht + 3] >= 0)) return !1
      }
      return !0
    }
    var ae = Vt(38024);
    class Me {
      constructor(tt, et) {
        var Vt = tt.Fw;
        Vt.KOt(new it.d(Vt));
        var Ot = new Ut.e(jt);
        Vt.mqt = Ot, Ot.blocks = [];
        var qt, Dt = {},
          dt = [];
        this.textPlanes = dt, this.eqt = () => qt.eqt(), this.K9 = tt => {
          Xt(Ot, tt), qt.K9(tt)
        }, this.oOt = (et, Vt, mt) => {
          if (!et.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!et.metadata[pt.s] && !et.metadata[pt.m]) {
            if (!Vt) {
              var jt = Ot.nOt;
              if (et.metadata[pt.z] && !et.parent) {
                jt = dt;
                var Xt = et.fL().jqt;
                et.metadata[pt.C] = Xt.center.length() + Xt.radius, et.Cf = !0
              }
              return jt.push(et), et.metadata[pt.i] = jt, void(et.metadata[pt.m] = !0)
            }
            var lt = Math.floor(mt[0] / Ht),
              Et = Math.floor(mt[1] / Ht),
              ft = Math.floor(mt[2] / Ht),
              wt = lt + "|" + Et + "|" + ft,
              yt = Dt[wt];
            if (!yt) {
              var Nt = [lt * Ht, Et * Ht, ft * Ht],
                Mt = [0, 0, 0];
              tt.ql.Fet(Nt, null, Mt), yt = Qt(Mt, Ht), Ot.blocks.push(yt), Dt[wt] = yt, yt.Vqt = wt
            }
            qt.oOt(et, mt), qt.sOt(yt, et), yt.Oqt = (yt.Oqt || 0) + 1, et.metadata[pt.s] = yt, et.metadata[pt.n] = !0, et.Cf = !0
          }
        }, this.wZ = tt => {
          if (tt.metadata) {
            tt.metadata[pt.m] && ((0, Bt.h)(tt.metadata[pt.i], tt), tt.metadata[pt.m] = !1), tt.metadata[pt.i] === dt && (tt.Cf = !1), tt.metadata[pt.i] = void 0, tt.metadata[pt.C] = void 0;
            var et = tt.metadata[pt.s];
            et && et.entries && (tt.metadata[pt.n] && qt.removeEntry(et, tt), et.Oqt--, et.Oqt <= 0 && (delete Dt[et.Vqt], (0, Bt.h)(Ot.blocks, et))), qt.wZ(tt), tt.metadata[pt.s] = null, tt.metadata[pt.n] = !1
          }
        }, this.A_ = function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (tt.metadata[pt.s]) {
            if (tt.metadata[pt.n] === et) return;
            var Vt = tt.metadata[pt.s];
            Vt && Vt.entries && (et ? qt.sOt(Vt, tt) : qt.removeEntry(Vt, tt)), tt.metadata[pt.n] = et
          } else {
            if (tt.metadata[pt.m] === et) return;
            var Dt = tt.metadata[pt.i] || Ot.nOt;
            et ? Dt.push(tt) : (0, Bt.h)(Dt, tt), tt.metadata[pt.m] = et
          }
        };
        var jt = () => {},
          Ht = et * tt.ql.sQ.vtt,
          Xt = (tt, et) => {
            tt.blocks.forEach((tt => {
              tt.YOt.qqt(et), tt.iOt.qqt(et), tt.tqt.forEach((tt => tt.qqt(et))), tt.blocks && Xt(tt, et)
            }))
          },
          Qt = (tt, et) => {
            var Vt = new mt.uf(tt[0], tt[1], tt[2]),
              Ot = new mt.uf(tt[0] + et, tt[1] + et, tt[2] + et);
            return new At.e(Vt, Ot, void 0, void 0, void 0, jt)
          };
        qt = we(Vt, Ot, tt.ql, Qt, ((tt, et) => {
          for (var Vt = 0; Vt < dt.length; Vt++) {
            var Ot = dt[Vt];
            Ot.isEnabled(!1) && ((0, ae.d)(Ot, et) && Yt.g.prototype.push.call(tt, Ot))
          }
        }))
      }
    }

    function be(tt) {
      const {
        holderPosition: et,
        holderRotation: Vt,
        lT: Ot,
        fov: qt,
        near: Dt,
        far: mt
      } = tt.model.XT, dt = tt.wqt;
      dt.position.W9(et[0], et[1], et[2]), dt.rotation.W9(Vt[0], Vt[1], Vt[2]);
      const jt = tt.camera;
      jt.position.W9(Ot[0], Ot[1], Ot[2]), jt.fov = qt, jt.minZ = Dt, jt.maxZ = mt
    }

    function Je(tt) {
      const et = tt.Jf(),
        Vt = et,
        Ot = Vt._gl;
      if (!Ot || Vt.Vw < 2 || et.LOt || Ot.getParameter(Ot.DEPTH_BITS) < 24) return !1;
      const qt = tt._renderingManager,
        Dt = qt.getRenderingGroup(-1),
        mt = qt.getRenderingGroup(0),
        dt = kt.d.prototype.render;
      return Dt.render = function(tt, et, Vt, Ot, qt, Dt, jt, Ht, Xt) {
        (tt || mt._empty) && dt.call(this, tt, et, Vt, Ot, qt, Dt, jt, Ht, Xt)
      }, mt.render = function(tt, Vt, qt, mt) {
        let jt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ht = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Qt = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          lt = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Et = arguments.length > 8 ? arguments[8] : void 0;
        tt ? dt.call(this, tt, Vt, qt, mt, jt, Ht, Qt, lt, Et) : (et.setAlphaMode(Xt.e.ALPHA_DISABLE), dt.call(this, null, !1, !1, mt, jt, Ht, Qt, !1), Dt._empty || (Ot.depthRange(1, 1), dt.call(Dt, null, Vt, qt, mt, jt, Ht, Qt, lt, Et), Ot.depthRange(0, 1)), dt.call(this, null, Vt, qt, mt, !1, !1, !1, lt, Et))
      }, !0
    }

    function Ce(tt, et) {
      return [et, rt.f].map(((et, Vt) => {
        const Ot = new qt.d("light", mt.uf.FromArray(et), tt);
        return Ot.diffuse = Dt.Color3.FromArray([1, 1, 1]), Ot.specular = Dt.Color3.FromArray([1, 1, 1]), Ot.intensity = rt.d[Vt], Ot
      }))
    }
    class ue extends jt.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(tt) {
        var et;
        this.heldTexture = tt, this.particleTexture = null !== (et = null === tt || void 0 === tt ? void 0 : tt.mirror) && void 0 !== et ? et : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let tt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        tt && (this.particleTexture = null, (0, Ht.H)(this.heldTexture), this.heldTexture = null), super.dispose(tt, et, Vt)
      }
    }
    const Ke = Ot.e.Zero();
    const he = {
      nVt: function(tt, et) {
        return new Rt(tt, et.xVt, {
          preserveDrawingBuffer: et.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      aqt: function(tt, et) {
        ! function(tt, et, Vt) {
          const Ot = new zt.c(tt.engine);
          tt.Fw = Ot, Ot.detachControl(), Ot.autoClear = !1, Gt.b.MIN_RENDERINGGROUPS = -1;
          for (let Dt = Gt.b.MIN_RENDERINGGROUPS; Dt <= 1; Dt++) Ot.setRenderingOrder(Dt, kt.d.PainterSortCompare, kt.d.PainterSortCompare, kt.d.PainterSortCompare);
          Ot.setRenderingAutoClearDepthStencil(0, !1), Ft.e.Enabled = !1, tt.lqt = new Me(tt, Math.round(et.Eqt)), tt.wqt = new Lt.c("camHolder", Ot), tt.camera = new Zt.c("camera", new mt.uf(0, 0, 0), Ot), tt.camera.parent = tt.wqt, be(tt), (0, rt.i)(tt, ((tt, et, Vt) => (0, ot.k)(et, Vt, tt.Fw))), Ot.clearColor = Dt.e.FromArray(et.clearColor), Ot.ambientColor = Dt.Color3.FromArray(et.ambientColor);
          const qt = Vt(Ot, et.Nqt);
          Ot.onNewLightAddedObservable.add((tt => {
            qt.some((et => et === tt)) || console.error(`Light "${tt.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Ot.skipPointerMovePicking = !0
        }(tt, et, Ce), Je(tt.Fw)
      },
      fqt: be,
      setBabylonFog: function(tt, et, Vt, Ot) {
        const qt = tt.Fw;
        qt.fogMode = 3, qt.fogStart = et, qt.fogEnd = Vt, qt.fogColor.set(Ot[0], Ot[1], Ot[2])
      },
      bqt: function(tt, et, Vt) {
        return tt.engine.Vw >= 2 && (tt.Jqt || (tt.Jqt = new St(tt.Fw, tt.Cqt)), !tt.Jqt.failed) ? tt.Jqt.xZ(et, Vt) : new ue(et, Vt, tt.Fw)
      },
      Kqt: function(tt, et) {
        tt.Fw.PJ.forEach((Vt => {
          if (Vt instanceof vt) return void Vt.K9(et, tt.ql.bl);
          const Ot = Vt;
          if (Ot.emitter.getConnectedParticleSystems)
            for (const tt of Ot._particles) tt.position.set(tt.position.x - et[0], tt.position.y - et[1], tt.position.z - et[2]);
          else {
            if (!Ot.worldOffset) throw new Error("Particle system has no world offset");
            Ot.worldOffset.x = -tt.ql.bl[0], Ot.worldOffset.y = -tt.ql.bl[1], Ot.worldOffset.z = -tt.ql.bl[2]
          }
        }))
      },
      linesFromArrays: function(tt, et, Vt) {
        const Ot = new dt.c(et, tt.Fw, null, void 0, void 0, !1);
        return (0, ot.h)(et, Vt, tt.Fw, Ot), Ot
      },
      kw: Xe,
      uqt: function(tt, et) {
        return Ke.origin.rK(et.origin), Ke.direction.rK(et.direction), Ke.length = et.length, Ke.epsilon = et.epsilon, Ke.uqt(tt, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41332: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ut,
      d: () => Mt,
      f: () => xt
    });
    var Ot = Vt(40452),
      qt = Vt(41339),
      Dt = Vt(41394),
      mt = Vt(41348),
      dt = Vt(38068),
      jt = Vt(38080),
      Ht = Vt(38085),
      Xt = Vt(38091),
      Qt = Vt(37461),
      lt = Vt(37467),
      Et = Vt(41355),
      ft = Vt(37448),
      wt = Vt(37454),
      yt = Vt(37435);

    function Nt(tt, et) {
      return Object.assign((function(tt, Vt, Ot, qt) {
        return et(this.featureState, tt, Vt, Ot, qt)
      }), {
        pE: tt
      })
    }

    function Mt(tt) {
      const et = class extends Et.d {
          constructor(et, Vt) {
            const Ot = (0, wt.X)(et),
              qt = Ot && (0, wt.s)(Ot, tt.name);
            for (var Dt = arguments.length, mt = new Array(Dt > 2 ? Dt - 2 : 0), dt = 2; dt < Dt; dt++) mt[dt - 2] = arguments[dt];
            super(et, tt.name, tt.priority, qt ? qt.defines : tt.defines(...mt), !1), this.featureState = void 0, this.featureState = Vt, this._pluginManager._addPlugin(this), this._enable(!0), (0, wt.v)(this._material, tt, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return tt.className
          }
          isCompatible(tt) {
            return tt === yt.c.GLSL || tt === yt.c.WGSL
          }
        },
        Vt = (0, ft.g)(tt);
      for (const [Ot, qt] of Object.entries(ft.c)) {
        const Dt = tt[Ot];
        if (Dt) {
          const tt = Vt[Ot];
          Object.defineProperty(et.prototype, qt, {
            value: Nt(Dt, tt),
            writable: !0,
            configurable: !0
          })
        }
      }
      return et
    }
    class bt extends(Mt(dt.e)) {}
    var Jt = Vt(40023),
      Ct = Vt(41361),
      ut = Vt(41370);

    function Kt(tt, et, Vt) {
      return (0, ut.e)(Vt, et.urls, (() => async function(tt, et, Vt) {
        const {
          width: Ot
        } = tt[0].getSize(), qt = tt.map(((tt, Vt) => {
          var qt;
          const Dt = Math.round(tt.getSize().height / Ot),
            mt = null === et || void 0 === et ? void 0 : et[Vt];
          return {
            pixels: mt && mt.byteLength === Ot * Ot * Dt * 4 ? mt : null !== (qt = ht.get(tt.getInternalTexture())) && void 0 !== qt ? qt : tt._readPixelsSync(),
            layers: Dt
          }
        })), Dt = Vt.Jf().getCaps().texture2DArrayMaxLayerCount, dt = (0, ut.d)(qt, Ot, Dt).map((tt => {
          let {
            pixels: et,
            layers: qt
          } = tt;
          return {
            atlas: new Ct.c(et, Ot, Ot, qt, Jt.e.TEXTUREFORMAT_RGBA, Vt, !0, !1, mt.b.NEAREST_NEAREST_MIPLINEAR),
            layers: qt
          }
        }));
        return tt.forEach(((tt, et) => {
          const Ot = tt.getInternalTexture();
          ht.has(Ot) || (! function(tt, et) {
            const Vt = et.createRawTexture(new Uint8Array(4), 1, 1, Jt.e.TEXTUREFORMAT_RGBA, !1, !1, mt.b.NEAREST_SAMPLINGMODE);
            tt._hardwareTexture.release(), et.unbindAllTextures(), Vt._swapAndDie(tt, !1)
          }(Ot, Vt.Jf()), ht.set(Ot, qt[et].pixels))
        })), dt
      }(tt, et.pixels, Vt)))
    }
    const ht = new WeakMap;
    var vt = Vt(38100);
    class Wt extends(Mt(jt.j)) {
      constructor(tt, et) {
        super(tt, et), this.loaded = new Set, this.mirrors = void 0, this.mirrors = et.textures.map((tt => tt.mirror)), this.mirrors.forEach(((tt, et) => {
          tt.onLoadObservable.add((tt => {
            this.setTextureArrayData(tt, et).catch((tt => {
              console.error(`Failed to build the texture arrays, at atlas ${et}`, tt)
            }))
          }))
        })), (0, vt.m)(et, tt.shaderLanguage)
      }
      async setTextureArrayData(tt, et) {
        const Vt = this.featureState,
          {
            width: Ot,
            height: qt
          } = tt.getSize(),
          Dt = this._material.shaderLanguage;
        if (!Vt.useWebGL2) return void(0, vt.g)(this._material, Vt, et, Ot, Math.round(qt / Ot), Dt);
        if (this.loaded.add(et), this.loaded.size < this.mirrors.length) return;
        const mt = await Kt(this.mirrors, Vt.sources, this._material.vI());
        (0, vt.e)(this._material, Vt, mt, Ot, Dt)
      }
    }
    var St = Vt(41374),
      ct = Vt(40490),
      Rt = Vt(37331),
      It = Vt(41379),
      Pt = Vt(40608),
      Zt = Vt(40476),
      Lt = Vt(41312),
      Ft = Vt(37846),
      kt = Vt(41387);
    class Gt extends St.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const zt = {
      Mesh: It.b,
      TransformNode: Lt.c,
      mf: St.b,
      VertexBuffer: St.e,
      BoundingInfo: ct.c,
      uf: Rt.uf,
      ArenaBuffer: Gt,
      SubMesh: Zt.d,
      VertexData: Pt.d,
      MirroredGeometry: kt.e,
      meshFromArrays: kt.h,
      plainMeshFromArrays: kt.k
    };
    (0, Ft.g)(zt);
    var ot = Vt(37670);
    class rt extends(Mt(Xt.i)) {
      constructor(tt, et) {
        if (super(tt, et), tt instanceof Ot.StandardMaterial && et.dirLightCount > 0) {
          const et = tt,
            Vt = et._blockDirtyMechanism;
          et._blockDirtyMechanism = !0, tt.disableLighting = !0, et._blockDirtyMechanism = Vt;
          const Ot = (0, wt.X)(tt);
          Ot && (Ot.disableLighting = !0, (0, wt.U)(Ot))
        }(0, ot.j)(tt)
      }
      dispose(tt) {
        (0, ot.m)(this._material), super.dispose(tt)
      }
    }

    function Ut(tt, et) {
      if (!(et instanceof Ot.StandardMaterial) || et.specularTexture) return;
      const {
        r: Vt,
        g: qt,
        b: Dt
      } = et.specularColor;
      0 === Vt && 0 === qt && 0 === Dt && (tt.SPECULARTERM = !1)
    }(0, Xt.g)({
      disableUnusedSpecularTerm: Ut
    });
    var At = Vt(37545),
      it = Vt(37856);
    const Yt = new RegExp(`^#define ${Ht.c}\\s*$`, "m");
    class Bt extends(Mt(Ht.h)) {
      constructor(tt, et) {
        super(tt, et), this.df = !1, et.ditherOnlyWhileFading && (it.g.add(tt), this.prewarmDitherTwins(tt))
      }
      prewarmDitherTwins(tt) {
        const et = new WeakSet;
        tt.onEffectCreatedObservable.add((Vt => {
          let {
            effect: Ot,
            subMesh: qt
          } = Vt;
          if (this.featureState.prewarmingDither || et.has(Ot)) return;
          et.add(Ot);
          const Dt = null === qt || void 0 === qt ? void 0 : qt.getMesh();
          Dt && !Yt.test(Ot.defines) && tt.vI().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Dt) || et.delete(Ot)
          }))
        }))
      }
      prewarmDither(tt) {
        if (this.df || tt.bC()) return !1;
        const et = new Zt.d(0, 0, 0, 0, 0, tt, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(tt, et)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== et.effect
      }
      dispose(tt) {
        this.df = !0, super.dispose(tt)
      }
    }
    const pt = new Map;

    function xt(tt, et) {
      pt.set(tt, et)
    }
    xt(dt.e, bt), xt(jt.j, Wt), xt(Ht.h, Bt), xt(Xt.i, rt), (0, Qt.e)({
      create: (tt, et) => {
        const Vt = new Ot.StandardMaterial(tt.name, et);
        return (0, At.q)(tt, Vt), Vt.detailMap._pluginDefineNames
      },
      write: (tt, et, Vt) => {
        (0, At.V)(tt.mirror, et, Vt)
      },
      addFeature: (tt, et, Vt) => {
        const Ot = pt.get(et.feature);
        if (!Ot) throw new Error(`${et.feature.name} has no plugin class (registerPluginClass)`);
        new Ot(tt.mirror, et.state, ...Vt)
      },
      texture: (tt, et, Vt) => {
        let {
          url: Ot,
          noMipmap: qt,
          invertY: Dt,
          samplingMode: dt,
          data: jt,
          sets: Ht
        } = Vt;
        if (!jt) {
          const Vt = new mt.b(Ot, et, qt, Dt, dt);
          return Object.assign(Vt, Ht), void(0, lt.N)(tt, Vt)
        }
        const Xt = {},
          Qt = new Promise(((tt, et) => {
            Xt.onLoad = tt, Xt.onError = (tt, Vt) => {
              et(new Error(`${jt.context}: ${(null===Vt||void 0===Vt?void 0:Vt.message)||tt||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Et,
            bytes: ft,
            label: wt
          } = jt,
          yt = {
            noMipmap: qt,
            invertY: !1,
            samplingMode: dt,
            ...Xt,
            mimeType: Et,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Nt = new mt.b(null, et, yt);
        At.s.set(Nt, Qt), Object.assign(Nt, Ht), Nt.updateURL(Ot, ft);
        const Mt = Nt.getInternalTexture();
        Mt && (Mt.label = wt), tt.uvSet = Nt.coordinatesIndex, tt.matrix.set((0, At.N)(Nt)), (0, lt.N)(tt, Nt)
      },
      cube: (tt, et, Vt) => {
        let {
          rootUrl: Ot,
          files: Dt,
          noMipmap: dt,
          luminance: jt
        } = Vt;
        const {
          samplingMode: Ht
        } = tt.sampler, Xt = Ht === (0, lt.E)(dt) ? null : () => {
          (0, At.L)(Qt, Ht)
        }, Qt = new qt.e(Ot, et, null, dt, Dt, Xt, null, (0, lt.B)(jt));
        Qt.coordinatesMode = mt.b.SKYBOX_MODE, (0, lt.N)(tt, Qt)
      },
      canvas: (tt, et, Vt) => {
        let {
          width: Ot,
          height: qt,
          mipmaps: dt,
          samplingMode: jt,
          hasAlpha: Ht = !1,
          wrap: Xt = mt.b.CLAMP_ADDRESSMODE
        } = Vt;
        const Qt = new Dt.c(et, {
          width: Ot,
          height: qt
        }, tt, dt, jt);
        Qt.hasAlpha = Ht, Qt.wrapU = Xt, Qt.wrapV = Xt;
        const lt = (0, At.C)(Qt);
        return (0, At.G)(lt, Qt), lt
      }
    })
  },
  41387: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      h: () => Qt,
      k: () => lt
    });
    var Ot = Vt(41374),
      qt = Vt(40270),
      Dt = Vt(40490),
      mt = Vt(40614),
      dt = Vt(41379),
      jt = Vt(40608),
      Ht = Vt(37727);
    class Xt extends mt.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (tt, et) => {
          this.releaseUnlessInstanced(et)
        }, this.onLinked = null
      }
      link(tt) {
        var et;
        (0, Ht.n)(tt), this.model = tt, null === (et = this.onLinked) || void 0 === et || et.call(this, tt)
      }
      relink() {
        this.release();
        const tt = [];
        for (const qt of Object.values(this._vertexBuffers))
          if (!qt.getIsInstanced()) {
            const {
              byteOffset: et,
              byteStride: Vt,
              type: Ot,
              normalized: Dt
            } = qt;
            tt.push({
              kind: qt.getKind(),
              data: qt.getData(),
              offset: et,
              stride: Vt,
              components: qt.getSize(),
              glType: Ot,
              isNormalized: Dt
            })
          } const et = this._indices.length ? this._indices : null,
          {
            minimum: Vt,
            maximum: Ot
          } = this.extend;
        this.link(new Ht.d(tt, et, this.getTotalVertices(), new Float64Array(Vt.GOt()), new Float64Array(Ot.GOt())))
      }
      copy(tt) {
        if (!this.model) return super.copy(tt);
        const et = new Xt(tt, this.vI()),
          Vt = this.zOt(void 0, !0);
        Vt && et.setIndices(Vt);
        let mt = !1;
        for (const Dt in this._vertexBuffers) {
          const tt = this._vertexBuffers[Dt],
            Vt = tt.getData();
          if (!Vt) continue;
          const dt = tt.getSize(),
            {
              type: jt,
              byteOffset: Ht,
              byteStride: Xt,
              normalized: Qt
            } = tt;
          mt ||= tt.isUpdatable();
          const lt = tt.getIsInstanced() ? (Vt instanceof Array ? 4 * Vt.length : Vt.byteLength) / Xt : this.getTotalVertices(),
            Et = (0, qt.z)(Vt, dt, jt, Ht, Xt, lt, !0),
            ft = {
              updatable: tt.isUpdatable(),
              stride: dt,
              type: jt,
              normalized: Qt,
              takeBufferOwnership: !0,
              instanced: tt.getIsInstanced()
            };
          et.setVerticesBuffer(new Ot.e(this.Jf(), Et, Dt, ft), lt)
        }
        return et._updatable = mt, et._boundingInfo = new Dt.c(this.extend.minimum, this.extend.maximum), et.relink(), et
      }
      static mergeMeshes(tt, et, Vt, Ot, qt, Dt) {
        const jt = tt[0].vI(),
          Ht = new dt.b(tt[0].name + "_merged", jt),
          Qt = new Xt(mt.d.RandomId(), jt, void 0, !1, Ht);
        try {
          if (!dt.b.MergeMeshes(tt, et, Vt, Ht, qt, Dt)) return Ht.dispose(), null
        } catch (lt) {
          throw Ht.dispose(), lt
        }
        return Qt.relink(), Ht
      }
      removeVerticesData(tt) {
        this.releaseUnlessInstanced(tt), super.removeVerticesData(tt)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(tt) {
        var et;
        tt && null !== (et = this.getVertexBuffer(tt)) && void 0 !== et && et.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Ht.x)(this.model), this.model = null)
      }
    }

    function Qt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new dt.b(tt, Vt);
      const qt = (0, Ht.j)(et),
        {
          positions: Dt,
          normals: Qt,
          uvs: lt,
          indices: Et,
          named: ft = {}
        } = et,
        wt = new jt.d;
      wt.positions = Dt, wt.normals = null !== Qt && void 0 !== Qt ? Qt : null, wt.uvs = null !== lt && void 0 !== lt ? lt : null, wt.indices = Et;
      const yt = new Xt(mt.d.RandomId(), Vt, wt, !1, Ot);
      for (const {
          kind: mt,
          components: dt
        }
        of qt.vertexAttributes) mt in ft && Ot.setVerticesData(mt, ft[mt], !1, dt);
      return yt.link(qt), Ot
    }

    function lt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const qt = new dt.b(tt, Vt),
        {
          positions: Dt,
          normals: mt,
          uvs: Ht,
          indices: Xt
        } = et;
      return Object.assign(new jt.d, {
        positions: Dt,
        normals: mt,
        uvs: Ht,
        indices: Xt
      }).applyToMesh(qt, Ot), qt
    }
  },
  41851: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => yt,
      i: () => dt,
      m: () => mt,
      o: () => Ht
    });
    var Ot = Vt(37510),
      qt = Vt(38927),
      Dt = Vt(38924);

    function mt(tt, et, Vt, Ot) {
      const qt = Dt.w;
      et.fill(0), tt.gravity.toArray(et, qt.gravity), tt.colorDead.toArray(et, qt.colorDead), Vt[qt.ramp] = tt.useRampGradients ? 1 : 0;
      const mt = tt.getColorGradients(),
        dt = lt(tt, mt, "colour", Ot);
      Vt[qt.colorCount] = dt;
      for (let Dt = 0; Dt < dt; Dt++) {
        var jt;
        const tt = mt[Et(mt, Dt)];
        et[qt.colorPositions + Dt] = tt.gradient, tt.color1.toArray(et, qt.color1 + 4 * Dt), (null !== (jt = tt.color2) && void 0 !== jt ? jt : tt.color1).toArray(et, qt.color2 + 4 * Dt)
      }
      const Ht = tt.getVelocityGradients(),
        Xt = lt(tt, Ht, "Dy", Ot);
      Vt[qt.velocityCount] = Xt;
      for (let Dt = 0; Dt < Xt; Dt++) Mt(et, qt.Dy + 4 * Dt, Ht[Et(Ht, Dt)]);
      const Qt = tt.useRampGradients ? tt.getColorRemapGradients() : null,
        ft = lt(tt, Qt, "colour remap", Ot);
      Vt[qt.remapCount] = ft;
      for (let Dt = 0; Dt < ft; Dt++) Mt(et, qt.remap + 4 * Dt, Qt[Et(Qt, Dt)])
    }

    function dt() {
      return {
        key: [],
        texels: new Uint8Array(4 * Dt.l)
      }
    }
    const jt = [];

    function Ht(tt, et) {
      return Xt(tt, jt), !Nt(jt, et.key) && (et.key.length = 0, et.key.push(...jt), et.key.length > 0 && function(tt, et) {
        for (let Vt = 0; Vt < Dt.l; Vt++) qt.i.GetCurrentGradient(Vt / Dt.l, tt, ((tt, et, Vt) => {
          Ot.Color3.LerpToRef(tt.color, et.color, Vt, Qt)
        })), et[4 * Vt] = 255 * Qt.r, et[4 * Vt + 1] = 255 * Qt.g, et[4 * Vt + 2] = 255 * Qt.b, et[4 * Vt + 3] = 255
      }(tt.getRampGradients(), et.texels), !0)
    }

    function Xt(tt, et) {
      et.length = 0;
      const Vt = tt.useRampGradients ? tt.getRampGradients() : null;
      if (null !== Vt && void 0 !== Vt && Vt.length) {
        et.push(Vt.length);
        for (const tt of Vt) et.push(tt.gradient, tt.color.r, tt.color.g, tt.color.b)
      }
    }
    const Qt = new Ot.Color3;

    function lt(tt, et, Vt, Ot) {
      return et ? et.length > Dt.e ? (Ot(`particleStops:${Vt}`, `GPU particles use the first 2 and last ${Dt.e-2} of more than ${Dt.e} ${Vt} gradient stops (${tt.name})`), Dt.e) : et.length : 0
    }

    function Et(tt, et) {
      return et < 2 || tt.length <= Dt.e ? et : tt.length - Dt.e + et
    }
    const ft = new Float32Array(Dt.r),
      wt = new Uint32Array(ft.buffer);

    function yt(tt, et, Vt) {
      return mt(tt, ft, wt, Vt), et && Nt(wt, et) ? null : wt.slice()
    }

    function Nt(tt, et) {
      if (tt.length !== et.length) return !1;
      for (let Vt = 0; Vt < tt.length; Vt++)
        if (tt[Vt] !== et[Vt]) return !1;
      return !0
    }

    function Mt(tt, et, Vt) {
      var Ot;
      tt[et] = Vt.gradient, tt[et + 1] = Vt.factor1, tt[et + 2] = null !== (Ot = Vt.factor2) && void 0 !== Ot ? Ot : Vt.factor1
    }
  },
  41370: (tt, et, Vt) => {
    function Ot(tt, et, Vt) {
      const Ot = et * et * 4,
        qt = tt[0].layers,
        Dt = qt * (tt.length - 1) + tt[tt.length - 1].layers,
        mt = new Uint8Array(Dt * Ot);
      tt.forEach(((et, Vt) => {
        const Dt = Vt + 1 < tt.length ? Math.min(et.layers, qt) : et.layers;
        mt.set(new Uint8Array(et.pixels.buffer, et.pixels.byteOffset, Dt * Ot), Vt * qt * Ot)
      }));
      const dt = Math.max(1, Math.min(Dt, Vt || Dt));
      if (dt === Dt) return [{
        pixels: mt,
        layers: Dt
      }];
      const jt = [];
      for (let Ht = 0; Ht < Dt; Ht += dt) {
        const tt = Math.min(Dt, Ht + dt);
        jt.push({
          pixels: mt.slice(Ht * Ot, tt * Ot),
          layers: tt - Ht
        })
      }
      return jt
    }
    Vt.d(et, {
      d: () => Ot,
      e: () => Dt
    });
    const qt = new WeakMap;

    function Dt(tt, et, Vt) {
      var Ot, Dt;
      const mt = null !== (Ot = qt.get(tt)) && void 0 !== Ot ? Ot : new Map;
      qt.set(tt, mt);
      const dt = null !== (Dt = mt.get(et[0])) && void 0 !== Dt ? Dt : [];
      mt.set(et[0], dt);
      const jt = dt.find((tt => tt.urls.length === et.length && tt.urls.every(((tt, Vt) => tt === et[Vt]))));
      if (jt) return jt.built;
      const Ht = {
        urls: [...et],
        built: Vt()
      };
      return dt.push(Ht), Ht.built.catch((() => {
        dt.splice(dt.indexOf(Ht), 1)
      })), Ht.built
    }
  },
  41848: (tt, et, Vt) => {
    function Ot() {
      let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const et = new Set;
      return (Vt, Ot) => {
        et.has(Vt) || (et.add(Vt), console.warn(tt + Ot))
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);