export const id = 0;
export const ids = [0];
export const modules = {
  41123: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      CapeMaterialPlugin: () => Kk,
      HueTintMaterialPlugin: () => Qk,
      LifeformMaterialPlugin: () => sk,
      OverlayMaterialPlugin: () => Vk
    });
    var Xk = Ik(41132),
      Tk = Ik(38010);
    class ik extends((0, Xk.g)(Tk.d)) {}(0, Xk.h)(Tk.d, ik);
    var yk = Ik(37236);
    class lk extends((0, Xk.g)(yk.f)) {}(0, Xk.h)(yk.f, lk);
    var ak = Ik(37835);
    class qk extends((0, Xk.g)(ak.e)) {}(0, Xk.h)(ak.e, qk);
    var Lk = Ik(37461),
      tk = Ik(40269),
      Zk = Ik(37457);
    class jk extends((0, Xk.g)(Zk.e)) {
      constructor(kk, Fk, Ik) {
        super(kk, Fk, Ik), (0, Lk.h)(kk)
      }
      dispose(kk) {
        (0, Lk.l)(this._material), super.dispose(kk)
      }
    }(0, Xk.h)(Zk.e, jk), (0, Zk.f)({
      disableUnusedSpecularTerm: Xk.d,
      isLightingDisabled: kk => kk instanceof tk.StandardMaterial && kk.disableLighting
    });
    var ek = Ik(38684);
    class wk extends((0, Xk.g)(ek.d)) {}(0, Xk.h)(ek.d, wk);
    var Hk = Ik(38791),
      Jk = Ik(37340),
      xk = Ik(38126),
      Pk = Ik(37286);
    class Kk extends((0, Xk.g)(Hk.d)) {}(0, Xk.h)(Hk.d, Kk);
    class Qk extends((0, Xk.g)(Jk.d)) {}(0, Xk.h)(Jk.d, Qk);
    class sk extends((0, Xk.g)(xk.m)) {}(0, Xk.h)(xk.m, sk);
    class Vk extends((0, Xk.g)(Pk.d)) {}(0, Xk.h)(Pk.d, Vk)
  },
  41559: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      addBabylonLights: () => sF,
      default: () => SF
    });
    var Xk = Ik(41561),
      Tk = (Ik(39980), Ik(41117), Ik(40498), Ik(41573)),
      ik = Ik(37327),
      yk = Ik(37144),
      lk = Ik(41586),
      ak = Ik(41591),
      qk = Ik(37277),
      Lk = (Ik(41132), Ik(41601)),
      tk = Ik(41599),
      Zk = Ik(38714),
      jk = Ik(41604),
      ek = Ik(39837),
      wk = Ik(38700);
    const Hk = "gpuParticles",
      Jk = wk.t,
      xk = kk => kk / 4,
      Pk = kk => `gpuParticleSystem[${kk>>2}].${"xyzw"[3&kk]}`,
      Kk = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${wk.c}\n#define COLOR_POSITIONS ${xk(Jk.colorPositions)}\n#define COLOR1 ${xk(Jk.color1)}\n#define COLOR2 ${xk(Jk.color2)}\n#define VELOCITY ${xk(Jk.TH)}\n#define REMAP ${xk(Jk.remap)}\n#define RECORDS_PER_ROW ${wk.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${wk.p/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Pk(Jk.gravity)}, ${Pk(Jk.gravity+1)}, ${Pk(Jk.gravity+2)}); }\nint colorCount() { return int(${Pk(Jk.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${xk(Jk.colorDead)}]; }\nint velocityCount() { return int(${Pk(Jk.velocityCount)}); }\nint remapCount() { return int(${Pk(Jk.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    ek.b.ShadersStore[`${Hk}VertexShader`] = Kk, ek.b.ShadersStore[`${Hk}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Qk = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      sk = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Vk = Ik(38691),
      zk = Ik(41612);
    class Sk extends Vk.c {
      constructor(kk, Fk, Ik, Xk) {
        super(kk, Fk, Ik), this.renderer = Ik, this.Yw = Xk, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(wk.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, zk.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (kk, Fk) => {
          const {
            engine: Ik
          } = this, Xk = Ik._gl;
          Ik._bindTextureDirectly(Xk.TEXTURE_2D, this.records, !0), Ik._unpackFlipY(!1);
          const Tk = this.ring.recordBits;
          for (let ik = kk; ik < Fk;) {
            const kk = Math.floor(ik / wk.l),
              Ik = Math.min(Fk, (kk + 1) * wk.l);
            Xk.texSubImage2D(Xk.TEXTURE_2D, 0, ik % wk.l * 4, kk, 4 * (Ik - ik), 1, Xk.RGBA_INTEGER, Xk.UNSIGNED_INT, Tk, ik * wk.f), ik = Ik
          }
          Ik._bindTextureDirectly(Xk.TEXTURE_2D, null)
        }, this.id = kk;
        const Tk = Xk.Oe();
        this.engine = Tk;
        const ik = Math.max(1, Fk),
          yk = Math.min(ik, wk.l);
        this.records = Tk.createRawTexture(null, 4 * yk, Math.ceil(ik / yk), Lk.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Lk.d.TEXTURE_NEAREST_SAMPLINGMODE, null, Lk.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Yw.getAnimationRatio() || 1;
        const Fk = this.Yw.getFrameId();
        if (Fk === this.animatedFrame) return !1;
        const Ik = super.animate(kk);
        return Ik && (this.animatedFrame = Fk, this.ring.takeUploads(this.uploadSlots)), Ik
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(kk) {
        (0, zk.h)(this, this.uniforms, this.uniformBits, kk);
        for (const Ik of wk.r) this.uniforms[Ik] = this.uniformBits[Ik];
        var Fk;
        (0, zk.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Fk = this.ramp) || void 0 === Fk || Fk.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = tk.b.CreateRGBATexture(this.rampTexels.texels, wk.j, 1, this.Yw, !1, !1, Lk.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var kk;
        this.records.dispose(), null === (kk = this.ramp) || void 0 === kk || kk.dispose(), this.ramp = null
      }
    }
    const vk = "the context was lost before the programs linked";
    class Ek {
      constructor(kk, Fk) {
        this.Yw = kk, this.reportFailure = Fk, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, jk.d)(), this.engine = kk.Oe(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = tk.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, kk, !1, !1, Lk.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      kR(kk, Fk) {
        const Ik = wk.l * this.engine.getCaps().maxTextureSize;
        Fk > Ik && this.warnOnce(`capacity:${kk}`, `particle system ${kk} holds ${Ik} particles, not ${Fk}: its records texture's limit`);
        const Xk = new Sk(kk, Math.min(Fk, Ik), this, this.Yw);
        return this.Yw.addParticleSystem(Xk), Xk
      }
      canDraw(kk) {
        var Fk, Ik;
        if (this.failed || null === (Fk = kk.texture) || void 0 === Fk || null === (Ik = Fk.mirror) || void 0 === Ik || !Ik.isReady()) return !1;
        for (const Xk of (0, Zk.l)(kk.blendMode))
          if (!this.effectFor(Xk).isReady()) return !1;
        return !0
      }
      disposeStopped(kk) {
        this.Yw._toBeDisposed.push(kk)
      }
      remove(kk) {
        this.Yw.removeParticleSystem(kk), kk.releaseGl()
      }
      render(kk) {
        var Fk;
        if (!kk.isReady() || !kk.hasLiveParticles()) return 0;
        const {
          engine: Ik,
          Yw: Xk,
          frame: Tk
        } = this;
        kk.prepareDraw(this.warnOnce), kk.drawOffset(Tk, 0), Tk[3] = kk.drawTime();
        const ik = kk.ring.drawStart(),
          yk = kk.ring.drawCount(),
          lk = null !== (Fk = kk.ramp) && void 0 !== Fk ? Fk : this.whiteRamp;
        Ik.setState(!1);
        for (const ak of (0, Zk.l)(kk.blendMode)) {
          const Fk = this.effectFor(ak);
          Ik.enableEffect(Fk), Fk.setTexture("gpuParticleTexture", kk.texture.mirror), Fk.setTexture("gpuParticleRampTexture", lk), Fk._bindTexture("gpuParticleRecords", kk.records), Fk.setMatrix("gpuParticleView", Xk.getViewMatrix()), Fk.setMatrix("gpuParticleProjection", Xk.getProjectionMatrix()), Fk.setFloatArray4("gpuParticleSystem", kk.uniforms), Fk.setFloat4("gpuParticleFrame", Tk[0], Tk[1], Tk[2], Tk[3]), Fk.setFloat2("gpuParticleRange", ik, yk), Fk.setFloat("gpuParticleRamp", kk.uniforms[wk.t.ramp]), Ik.bindBuffers(this.vertexBuffers, null, Fk), Ik.setAlphaMode((0, Zk.h)(ak)), Ik.drawArraysType(Lk.d.MATERIAL_TriangleStripDrawMode, 0, 4, yk), Fk._bindTexture("gpuParticleRecords", null)
        }
        return Ik.setAlphaMode(Lk.d.ALPHA_DISABLE), yk
      }
      awaitLink(kk) {
        const Fk = kk.getPipelineContext(),
          Ik = this.gl();
        !this.failed && Ik && (!Fk || Fk.isParallelCompiled && !Fk.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Fk.isParallelCompiled && Fk.program && (Ik.getProgramParameter(Fk.program, Ik.LINK_STATUS) || this.fail(function(kk, Fk, Ik) {
          if (kk.isContextLost()) return vk;
          for (const [Xk, Tk] of [
              ["VERTEX SHADER", Fk.vertexShader],
              ["FRAGMENT SHADER", Fk.fragmentShader]
            ]) {
            const Fk = Tk && !kk.getShaderParameter(Tk, kk.COMPILE_STATUS) ? kk.getShaderInfoLog(Tk) : null;
            if (Fk) return `${Xk} ${Fk}`
          }
          return kk.getProgramInfoLog(Ik) || "a program did not link"
        }(Ik, Fk, Fk.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(kk) {
        return kk === Zk.b ? this.multiplyEffect : this.effect
      }
      createEffect(kk) {
        return this.engine.createEffect(Hk, [], Qk, sk, kk, void 0, void 0, ((kk, Fk) => {
          var Ik;
          this.fail(null !== (Ik = this.gl()) && void 0 !== Ik && Ik.isContextLost() ? vk : function(kk) {
            const Fk = kk.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(Fk) ? "a program failed, its log not in this browser's stack" : Fk.replace(/^Error: /, "")
          }(Fk))
        }))
      }
      fail(kk) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${kk}`), this.reportFailure(kk);
          for (const kk of this.Yw.jK.slice()) kk instanceof Sk && kk.disposeOnStop && kk.dispose()
        }
      }
    }
    var Ok = Ik(39806);
    class nk extends Ok.c {
      createEffect() {
        const kk = super.createEffect(...arguments);
        return pk(kk), Gk.has(kk) || (Gk.add(kk), kk.onCompileObservable.add((() => {
          pk(kk)
        }))), kk
      }
    }
    const Gk = new WeakSet;

    function pk(kk) {
      kk._vertexSourceCodeBeforeMigration = "", kk._fragmentSourceCodeBeforeMigration = ""
    }
    var uk = Ik(40201),
      bk = Ik(41114),
      Rk = Ik(39947),
      Uk = Ik(40161),
      Ck = Ik(40157),
      Nk = Ik(40082),
      ck = Ik(41170),
      Wk = Ik(37643),
      fk = Ik(41615),
      Bk = Ik(41620),
      dk = Ik(41629),
      Yk = Ik(40107),
      Ak = Ik(2786),
      gk = Ik(37533),
      mk = Ik(40312),
      hk = Ik(37610),
      rk = Ik(37556);

    function Dk(kk) {
      if (kk.visibility < 1 || !kk.isVisible || !kk.isEnabled() || kk.metadata[rk.f] || !kk.isReady()) return !0;
      const Fk = kk.lK;
      if (!Fk || 0 === Fk.length) return !0;
      for (let Ik = 0; Ik < Fk.length; Ik++) {
        const Xk = Fk[Ik],
          Tk = Xk.Ue();
        if (!Tk || !Tk.isReadyForSubMesh(kk, Xk, !1)) return !0
      }
      return !1
    }
    class Mk {
      constructor(kk, Fk) {
        this.qZ = kk, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Fk.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Hj(kk) {
        var Fk;
        const Ik = this.armed;
        if (this.armed = !1, this.vis = null, !Ik) return !1;
        this.culled = 0;
        const {
          qZ: Xk
        } = this, Tk = null === (Fk = Xk.Bx) || void 0 === Fk ? void 0 : Fk.visibility;
        if (!Tk || !kk || Xk.Xw.Tw) return !1;
        if (!(Xk.XZ.jXk[0] >= hk.h)) return !1;
        const ik = kk.getProjectionMatrix().m;
        if (0 !== ik[15]) return !1;
        const yk = Xk.SZ,
          lk = kk.globalPosition,
          ak = this.eye;
        return ak[0] = lk.x + yk[0], ak[1] = lk.y + yk[1], ak[2] = lk.z + yk[2], !!Tk.eyeClear(ak[0], ak[1], ak[2], kk.minZ, ik, Xk.XZ) && (this.vis = Tk, this.passable.clear(), this.count = 0, !0)
      }
      see(kk, Fk) {
        const Ik = this.count++;
        if (Ik === this.cellSlots.length) {
          const kk = new Int32Array(2 * Ik);
          kk.set(this.cellSlots), this.cellSlots = kk
        }
        this.cellSlots[Ik] = Fk, this.meshes[Ik] = kk
      }
      seeThrough(kk) {
        this.passable.add(kk)
      }
      finish(kk, Fk) {
        const {
          vis: Ik,
          eye: Xk,
          meshes: Tk,
          count: ik,
          cellSlots: yk
        } = this, {
          XZ: lk
        } = this.qZ, [ak, qk] = lk.jXk, Lk = null !== Ik && Ik.update(Xk[0], Xk[1], Xk[2], lk.xkk, ak, qk, this.passable);
        let tk = 0;
        for (let Zk = 0; Zk < ik; Zk++) {
          const Xk = Tk[Zk];
          if (Lk) {
            const kk = 3 * yk[Zk];
            if (kk >= 0 && !Ik.isDrawn(Fk[kk], Fk[kk + 1], Fk[kk + 2])) {
              tk++;
              continue
            }
          }
          Yk.f.prototype.push.call(kk, Xk)
        }
        Tk.fill(null, 0, ik), this.count = 0, this.vis = null, this.culled = tk
      }
    }
    var kF = Ik(37592),
      FF = Ik(37543),
      IF = Ik(40295),
      XF = Ik(41632),
      TF = Ik(40297),
      iF = Ik(40218);
    let yF = 1;
    const lF = new WeakSet;

    function aF() {
      return yF
    }

    function qF() {
      yF = yF >= 1073741823 ? 1 : yF + 1
    }

    function LF(kk) {
      const Fk = kk.metadata;
      if (!Fk || !0 !== Fk[gk.t]) return;
      const Ik = Fk[gk.x],
        Xk = null === Ik || void 0 === Ik ? void 0 : Ik._noaStamps;
      if (!Ik || !Xk) return;
      const Tk = Ik.entries.indexOf(kk);
      Tk >= 0 && (Xk[Tk] = 0)
    }

    function tF(kk) {
      const Fk = kk.lK;
      for (let Ik = 0; Ik < Fk.length; Ik++) {
        const kk = Fk[Ik].Ue();
        if (kk && !kk.isFrozen) return !1
      }
      for (let Ik = 0; Ik < Fk.length; Ik++) {
        const kk = Fk[Ik].Ue();
        kk && lF.add(kk)
      }
      return !0
    }
    let ZF = !1;
    const jF = new WeakSet;

    function eF(kk, Fk) {
      const Ik = kk[Fk];
      if ("function" !== typeof Ik) throw new Error(`terrainDrawState: Babylon has no ${Fk} to hook`);
      return Ik
    }

    function wF(kk, Fk, Ik, Xk, Tk) {
      const ik = Ik.XZ.xkk,
        yk = new Map;
      let lk = 0;
      const ak = new Mk(Ik, kk),
        qk = new kF.c(ik, kk.Oe());
      ! function(kk) {
        if (jF.has(kk) || (jF.add(kk), kk.onContextLostObservable.add(qF), kk.Ee.add(qF)), ZF) return;
        ZF = !0;
        const Fk = XF.c.prototype,
          Ik = eF(Fk, "_markSubMeshesAsDirty");
        Object.assign(Fk, {
          _markSubMeshesAsDirty(kk) {
            Ik.call(this, kk), LF(this)
          }
        });
        const Xk = eF(iF.b.prototype, "_syncParentEnabledState");
        Object.assign(iF.b.prototype, {
          _syncParentEnabledState() {
            Xk.call(this), LF(this)
          }
        });
        const Tk = eF(TF.b.prototype, "resetDrawCache");
        TF.b.prototype.resetDrawCache = function(kk, Fk) {
          Tk.call(this, kk, Fk), LF(this.getMesh())
        };
        const ik = IF.c.prototype,
          yk = eF(ik, "markDirty");
        ik.markDirty = function(kk) {
          yk.call(this, kk), lF.has(this) && qF()
        };
        const lk = eF(ik, "_markAllSubMeshesAsDirty");
        Object.assign(ik, {
          _markAllSubMeshesAsDirty(kk) {
            lk.call(this, kk), lF.has(this) && qF()
          }
        })
      }(kk.Oe());
      let Lk = new Float64Array(384),
        tk = new Int32Array(64),
        Zk = new Uint8Array(64),
        jk = new Float64Array(64),
        ek = new Int32Array(192),
        wk = 0;
      const Hk = [],
        Jk = new Float64Array(24),
        xk = () => {
          const kk = Hk.pop();
          return void 0 !== kk ? (tk[kk] = 0, kk) : (wk === tk.length && (Lk = HF(Lk, new Float64Array(2 * Lk.length)), tk = HF(tk, new Int32Array(2 * tk.length)), Zk = HF(Zk, new Uint8Array(2 * Zk.length)), jk = HF(jk, new Float64Array(2 * jk.length)), ek = HF(ek, new Int32Array(2 * ek.length))), wk++)
        },
        Pk = kk => {
          const Fk = 6 * kk._noaSlot,
            Ik = kk.KXk[0],
            Xk = kk.KXk[1];
          Lk[Fk] = Ik.x, Lk[Fk + 1] = Ik.y, Lk[Fk + 2] = Ik.z, Lk[Fk + 3] = Xk.x, Lk[Fk + 4] = Xk.y, Lk[Fk + 5] = Xk.z
        },
        Kk = (kk, Fk, Ik) => {
          if (!Ik) return ak.see(kk, -1), !1;
          const Xk = Dk(kk);
          return Xk && ak.seeThrough(jk[Fk]), ak.see(kk, Fk), !Xk
        };
      let Qk = -1;
      return kk.getActiveMeshCandidates = () => {
        const Ik = kk.frustumPlanes,
          Xk = Fk._selectionContent;
        Xk.reset(), (Ik => {
          const Xk = kk.frustumPlanes;
          lk = lk + 1 | 0 || 1;
          const Tk = Fk.blocks,
            ik = ak.Hj(kk.activeCamera),
            yk = ik && !0;
          if (yk) {
            const Fk = kk.Oe().currentRenderPassId;
            Fk !== Qk && (Qk = Fk, qF())
          }
          const qk = aF(),
            jk = yk && !1;
          Tk.length > 0 && function(kk, Fk) {
            for (let Ik = 0; Ik < 6; Ik++) {
              const Xk = kk[Ik],
                Tk = Xk.normal;
              Fk[4 * Ik] = Tk.x, Fk[4 * Ik + 1] = Tk.y, Fk[4 * Ik + 2] = Tk.z, Fk[4 * Ik + 3] = Xk.d
            }
          }(Xk, Jk);
          const wk = Lk,
            Hk = tk,
            xk = Zk;
          for (let kk = 0; kk < Tk.length; kk++) {
            const Fk = Tk[kk];
            if (!mk.d.IsInFrustum(Fk.KXk, Xk)) continue;
            const Lk = Fk.entries;
            {
              const kk = Fk._noaSlots,
                Xk = Fk._noaStamps,
                Tk = Fk._noaTerrain;
              for (let Fk = 0; Fk < Lk.length; Fk++) {
                const tk = kk[Fk];
                if (Hk[tk] !== lk && (Hk[tk] = lk, xk[tk] = JF(wk, 6 * tk, Jk) ? 1 : 0), 0 === xk[tk]) continue;
                const Zk = Lk[Fk];
                if (yk && Xk[Fk] === qk) jk && 1 === Tk[Fk] && Dk(Zk) && 0, ak.see(Zk, 1 === Tk[Fk] ? tk : -1);
                else if (yk) {
                  Xk[Fk] = qk;
                  const kk = !0 === Zk.metadata[FF.m];
                  Tk[Fk] = kk ? 1 : 0;
                  const Ik = Kk(Zk, tk, kk);
                  !kk || Ik && tF(Zk) || (Xk[Fk] = 0)
                } else ik ? Kk(Zk, tk, !0 === Zk.metadata[FF.m]) : Yk.f.prototype.push.call(Ik, Zk)
              }
              continue
            }
          }
          ik && ak.finish(Ik, ek)
        })(Xk), qk.apply(Xk, kk.activeCamera);
        const ik = Fk.PXk;
        for (let kk = 0; kk < ik.length; kk++) {
          const Fk = ik[kk];
          Fk.isEnabled() && Yk.f.prototype.push.call(Xk, Fk)
        }
        return Tk(Xk, Ik), Xk
      }, {
        QXk: () => ak.culled,
        lXk: (kk, Fk) => {
          const Tk = Math.floor(Fk[0] / ik),
            lk = Math.floor(Fk[1] / ik),
            ak = Math.floor(Fk[2] / ik),
            qk = `${Tk}|${lk}|${ak}`;
          let Lk = yk.get(qk);
          if (!Lk) {
            const kk = [0, 0, 0];
            Ik.ZFk([Tk * ik - 1, lk * ik - 1, ak * ik - 1], null, kk), Lk = Object.assign(Xk(kk, ik + 2), {
              sXk: qk,
              VXk: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: xk()
            }), Pk(Lk), jk[Lk._noaSlot] = (0, Ak.l)(Tk, lk, ak), ek[3 * Lk._noaSlot] = Tk, ek[3 * Lk._noaSlot + 1] = lk, ek[3 * Lk._noaSlot + 2] = ak, yk.set(qk, Lk)
          }
          Lk.VXk++, kk.metadata[gk.z] = Lk
        },
        zp: kk => {
          const Fk = kk.metadata[gk.z];
          Fk && (Fk.VXk--, Fk.VXk <= 0 && (yk.delete(Fk.sXk), Hk.push(Fk._noaSlot)), kk.metadata[gk.z] = null)
        },
        xXk: (kk, Fk) => {
          const Ik = kk,
            Xk = Fk.metadata[gk.z];
          (Ik._noaSlots ??= []).push(Xk._noaSlot), (Ik._noaStamps ??= []).push(0), (Ik._noaTerrain ??= []).push(0), Ik.entries.push(Fk)
        },
        removeEntry: (kk, Fk) => {
          const Ik = kk,
            Xk = Ik.entries,
            Tk = Xk.indexOf(Fk);
          if (Tk < 0) return;
          const ik = Ik._noaSlots,
            yk = Ik._noaStamps,
            lk = Ik._noaTerrain,
            ak = Xk.length - 1;
          Xk[Tk] = Xk[ak], ik[Tk] = ik[ak], yk[Tk] = yk[ak], lk[Tk] = lk[ak], Xk.pop(), ik.pop(), yk.pop(), lk.pop()
        },
        y5: kk => {
          for (const Fk of yk.values()) {
            Fk.ZXk.zXk(kk), Fk.tXk.zXk(kk);
            for (const Ik of Fk.KXk) Ik.zXk(kk);
            Pk(Fk)
          }
        }
      }
    }

    function HF(kk, Fk) {
      return Fk.set(kk), Fk
    }

    function JF(kk, Fk, Ik) {
      const Xk = kk[Fk],
        Tk = kk[Fk + 1],
        ik = kk[Fk + 2],
        yk = kk[Fk + 3],
        lk = kk[Fk + 4],
        ak = kk[Fk + 5];
      for (let qk = 0; qk < 24; qk += 4) {
        const kk = Ik[qk],
          Fk = Ik[qk + 1],
          Lk = Ik[qk + 2];
        if (!(kk * (kk >= 0 ? yk : Xk) + Fk * (Fk >= 0 ? lk : Tk) + Lk * (Lk >= 0 ? ak : ik) + Ik[qk + 3] >= 0)) return !1
      }
      return !0
    }
    var xF = Ik(37788);
    class PF {
      constructor(kk, Fk) {
        var Ik = kk.Yw;
        Ik.AIk(new dk.e(Ik));
        var Xk = new fk.e(ak);
        Ik.oXk = Xk, Xk.blocks = [];
        var Tk, ik = {},
          lk = [];
        this.textPlanes = lk, this.QXk = () => Tk.QXk(), this.y5 = kk => {
          Lk(Xk, kk), Tk.y5(kk)
        }, this.lXk = (Fk, Ik, yk) => {
          if (!Fk.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Fk.metadata[gk.x] && !Fk.metadata[gk.r]) {
            if (!Ik) {
              var ak = Xk.PXk;
              if (Fk.metadata[gk.D] && !Fk.parent) {
                ak = lk;
                var Lk = Fk.vR().EXk;
                Fk.metadata[gk.E] = Lk.center.length() + Lk.radius, Fk.ne = !0
              }
              return ak.push(Fk), Fk.metadata[gk.l] = ak, void(Fk.metadata[gk.r] = !0)
            }
            var Zk = Math.floor(yk[0] / qk),
              jk = Math.floor(yk[1] / qk),
              ek = Math.floor(yk[2] / qk),
              wk = Zk + "|" + jk + "|" + ek,
              Hk = ik[wk];
            if (!Hk) {
              var Jk = [Zk * qk, jk * qk, ek * qk],
                xk = [0, 0, 0];
              kk.qZ.ZFk(Jk, null, xk), Hk = tk(xk, qk), Xk.blocks.push(Hk), ik[wk] = Hk, Hk.sXk = wk
            }
            Tk.lXk(Fk, yk), Tk.xXk(Hk, Fk), Hk.VXk = (Hk.VXk || 0) + 1, Fk.metadata[gk.x] = Hk, Fk.metadata[gk.t] = !0, Fk.ne = !0
          }
        }, this.zp = kk => {
          if (kk.metadata) {
            kk.metadata[gk.r] && ((0, Ak.t)(kk.metadata[gk.l], kk), kk.metadata[gk.r] = !1), kk.metadata[gk.l] === lk && (kk.ne = !1), kk.metadata[gk.l] = void 0, kk.metadata[gk.E] = void 0;
            var Fk = kk.metadata[gk.x];
            Fk && Fk.entries && (kk.metadata[gk.t] && Tk.removeEntry(Fk, kk), Fk.VXk--, Fk.VXk <= 0 && (delete ik[Fk.sXk], (0, Ak.t)(Xk.blocks, Fk))), Tk.zp(kk), kk.metadata[gk.x] = null, kk.metadata[gk.t] = !1
          }
        }, this.K3 = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (kk.metadata[gk.x]) {
            if (kk.metadata[gk.t] === Fk) return;
            var Ik = kk.metadata[gk.x];
            Ik && Ik.entries && (Fk ? Tk.xXk(Ik, kk) : Tk.removeEntry(Ik, kk)), kk.metadata[gk.t] = Fk
          } else {
            if (kk.metadata[gk.r] === Fk) return;
            var ik = kk.metadata[gk.l] || Xk.PXk;
            Fk ? ik.push(kk) : (0, Ak.t)(ik, kk), kk.metadata[gk.r] = Fk
          }
        };
        var ak = () => {},
          qk = Fk * kk.qZ.XZ.xkk,
          Lk = (kk, Fk) => {
            kk.blocks.forEach((kk => {
              kk.ZXk.zXk(Fk), kk.tXk.zXk(Fk), kk.KXk.forEach((kk => kk.zXk(Fk))), kk.blocks && Lk(kk, Fk)
            }))
          },
          tk = (kk, Fk) => {
            var Ik = new yk.Ge(kk[0], kk[1], kk[2]),
              Xk = new yk.Ge(kk[0] + Fk, kk[1] + Fk, kk[2] + Fk);
            return new Bk.b(Ik, Xk, void 0, void 0, void 0, ak)
          };
        Tk = wF(Ik, Xk, kk.qZ, tk, ((kk, Fk) => {
          for (var Ik = 0; Ik < lk.length; Ik++) {
            var Xk = lk[Ik];
            Xk.isEnabled(!1) && ((0, xF.c)(Xk, Fk) && Yk.f.prototype.push.call(kk, Xk))
          }
        }))
      }
    }

    function KF(kk) {
      const {
        holderPosition: Fk,
        holderRotation: Ik,
        KD: Xk,
        fov: Tk,
        near: ik,
        far: yk
      } = kk.model.PD, lk = kk.RXk;
      lk.position.t5(Fk[0], Fk[1], Fk[2]), lk.rotation.t5(Ik[0], Ik[1], Ik[2]);
      const ak = kk.camera;
      ak.position.t5(Xk[0], Xk[1], Xk[2]), ak.fov = Tk, ak.minZ = ik, ak.maxZ = yk
    }

    function QF(kk) {
      const Fk = kk.Oe(),
        Ik = Fk,
        Xk = Ik._gl;
      if (!Xk || Ik.tw < 2 || Fk.IXk || Xk.getParameter(Xk.DEPTH_BITS) < 24) return !1;
      const Tk = kk._renderingManager,
        ik = Tk.getRenderingGroup(-1),
        yk = Tk.getRenderingGroup(0),
        lk = Uk.d.prototype.render;
      return ik.render = function(kk, Fk, Ik, Xk, Tk, ik, ak, qk, Lk) {
        (kk || yk._empty) && lk.call(this, kk, Fk, Ik, Xk, Tk, ik, ak, qk, Lk)
      }, yk.render = function(kk, Ik, Tk, yk) {
        let ak = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          qk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          tk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Zk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          jk = arguments.length > 8 ? arguments[8] : void 0;
        kk ? lk.call(this, kk, Ik, Tk, yk, ak, qk, tk, Zk, jk) : (Fk.setAlphaMode(Lk.d.ALPHA_DISABLE), lk.call(this, null, !1, !1, yk, ak, qk, tk, !1), ik._empty || (Xk.depthRange(1, 1), lk.call(ik, null, Ik, Tk, yk, ak, qk, tk, Zk, jk), Xk.depthRange(0, 1)), lk.call(this, null, Ik, Tk, yk, !1, !1, !1, Zk, jk))
      }, !0
    }

    function sF(kk, Fk) {
      return [Fk, Wk.d].map(((Fk, Ik) => {
        const Xk = new Tk.e("light", yk.Ge.FromArray(Fk), kk);
        return Xk.diffuse = ik.Color3.FromArray([1, 1, 1]), Xk.specular = ik.Color3.FromArray([1, 1, 1]), Xk.intensity = Wk.c[Ik], Xk
      }))
    }
    class VF extends ak.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(kk) {
        var Fk;
        this.heldTexture = kk, this.particleTexture = null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.mirror) && void 0 !== Fk ? Fk : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        kk && (this.particleTexture = null, (0, qk.A)(this.heldTexture), this.heldTexture = null), super.dispose(kk, Fk, Ik)
      }
    }
    const zF = Xk.c.Zero();
    const SF = {
      QIk: function(kk, Fk) {
        return new nk(kk, Fk.JIk, {
          preserveDrawingBuffer: Fk.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      NXk: function(kk, Fk) {
        ! function(kk, Fk, Ik) {
          const Xk = new Nk.c(kk.engine);
          kk.Yw = Xk, Xk.detachControl(), Xk.autoClear = !1, Ck.e.MIN_RENDERINGGROUPS = -1;
          for (let ik = Ck.e.MIN_RENDERINGGROUPS; ik <= 1; ik++) Xk.setRenderingOrder(ik, Uk.d.PainterSortCompare, Uk.d.PainterSortCompare, Uk.d.PainterSortCompare);
          Xk.setRenderingAutoClearDepthStencil(0, !1), Rk.e.Enabled = !1, kk.pXk = new PF(kk, Math.round(Fk.uXk)), kk.RXk = new bk.b("camHolder", Xk), kk.camera = new uk.e("camera", new yk.Ge(0, 0, 0), Xk), kk.camera.parent = kk.RXk, KF(kk), (0, Wk.e)(kk, ((kk, Fk, Ik) => (0, ck.k)(Fk, Ik, kk.Yw))), Xk.clearColor = ik.b.FromArray(Fk.clearColor), Xk.ambientColor = ik.Color3.FromArray(Fk.ambientColor);
          const Tk = Ik(Xk, Fk.CXk);
          Xk.onNewLightAddedObservable.add((kk => {
            Tk.some((Fk => Fk === kk)) || console.error(`Light "${kk.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Xk.skipPointerMovePicking = !0
        }(kk, Fk, sF), QF(kk.Yw)
      },
      bXk: KF,
      setBabylonFog: function(kk, Fk, Ik, Xk) {
        const Tk = kk.Yw;
        Tk.fogMode = 3, Tk.fogStart = Fk, Tk.fogEnd = Ik, Tk.fogColor.set(Xk[0], Xk[1], Xk[2])
      },
      WXk: function(kk, Fk, Ik) {
        return kk.engine.tw >= 2 && (kk.fXk || (kk.fXk = new Ek(kk.Yw, kk.BXk)), !kk.fXk.failed) ? kk.fXk.kR(Fk, Ik) : new VF(Fk, Ik, kk.Yw)
      },
      YXk: function(kk, Fk) {
        kk.Yw.jK.forEach((Ik => {
          if (Ik instanceof Sk) return void Ik.y5(Fk, kk.qZ.SZ);
          const Xk = Ik;
          if (Xk.emitter.getConnectedParticleSystems)
            for (const kk of Xk._particles) kk.position.set(kk.position.x - Fk[0], kk.position.y - Fk[1], kk.position.z - Fk[2]);
          else {
            if (!Xk.worldOffset) throw new Error("Particle system has no world offset");
            Xk.worldOffset.x = -kk.qZ.SZ[0], Xk.worldOffset.y = -kk.qZ.SZ[1], Xk.worldOffset.z = -kk.qZ.SZ[2]
          }
        }))
      },
      linesFromArrays: function(kk, Fk, Ik) {
        const Xk = new lk.d(Fk, kk.Yw, null, void 0, void 0, !1);
        return (0, ck.g)(Fk, Ik, kk.Yw, Xk), Xk
      },
      Aw: LF,
      dXk: function(kk, Fk) {
        return zF.origin.kS(Fk.origin), zF.direction.kS(Fk.direction), zF.length = Fk.length, zF.epsilon = Fk.epsilon, zF.dXk(kk, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41132: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => fk,
      g: () => xk,
      h: () => mk
    });
    var Xk = Ik(40269),
      Tk = Ik(41139),
      ik = Ik(41178),
      yk = Ik(41147),
      lk = Ik(37815),
      ak = Ik(37821),
      qk = Ik(37823),
      Lk = Ik(37829),
      tk = Ik(37270),
      Zk = Ik(37277),
      jk = Ik(41149),
      ek = Ik(37255),
      wk = Ik(37259),
      Hk = Ik(37249);

    function Jk(kk, Fk) {
      return Object.assign((function(kk, Ik, Xk, Tk) {
        return Fk(this.featureState, kk, Ik, Xk, Tk)
      }), {
        Ie: kk
      })
    }

    function xk(kk) {
      const Fk = class extends jk.d {
          constructor(Fk, Ik) {
            const Xk = (0, wk.X)(Fk),
              Tk = Xk && (0, wk.B)(Xk, kk.name);
            for (var ik = arguments.length, yk = new Array(ik > 2 ? ik - 2 : 0), lk = 2; lk < ik; lk++) yk[lk - 2] = arguments[lk];
            super(Fk, kk.name, kk.priority, Tk ? Tk.defines : kk.defines(...yk), !1), this.featureState = void 0, this.featureState = Ik, this._pluginManager._addPlugin(this), this._enable(!0), (0, wk.D)(this._material, kk, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return kk.className
          }
          isCompatible(kk) {
            return kk === Hk.e.GLSL || kk === Hk.e.WGSL
          }
        },
        Ik = (0, ek.i)(kk);
      for (const [Xk, Tk] of Object.entries(ek.e)) {
        const ik = kk[Xk];
        if (ik) {
          const kk = Ik[Xk];
          Object.defineProperty(Fk.prototype, Tk, {
            value: Jk(ik, kk),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Fk
    }
    class Pk extends(xk(lk.b)) {}
    var Kk = Ik(39806),
      Qk = Ik(41155);
    const sk = new WeakMap;

    function Vk(kk, Fk, Ik) {
      let Xk = sk.get(Ik);
      Xk || (Xk = new Map, sk.set(Ik, Xk));
      const {
        url: Tk
      } = kk;
      let ik = Xk.get(Tk);
      return ik || (ik = async function(kk, Fk, Ik) {
        var Xk;
        const {
          width: Tk,
          height: ik
        } = kk.getSize(), lk = Math.round(ik / Tk), ak = kk.getInternalTexture(), qk = Fk && Fk.byteLength === Tk * Tk * lk * 4 ? Fk : null !== (Xk = zk.get(ak)) && void 0 !== Xk ? Xk : kk._readPixelsSync(), Lk = new Qk.c(qk, Tk, Tk, lk, Kk.c.TEXTUREFORMAT_RGBA, Ik, !0, !1, yk.c.NEAREST_NEAREST_MIPLINEAR);
        zk.has(ak) || (! function(kk, Fk) {
          const Ik = Fk.createRawTexture(new Uint8Array(4), 1, 1, Kk.c.TEXTUREFORMAT_RGBA, !1, !1, yk.c.NEAREST_SAMPLINGMODE);
          kk._hardwareTexture.release(), Fk.unbindAllTextures(), Ik._swapAndDie(kk, !1)
        }(ak, Ik.Oe()), zk.set(ak, qk));
        return Lk
      }(kk, Fk, Ik), Xk.set(Tk, ik), ik.catch((() => {
        Xk.delete(Tk)
      }))), ik
    }
    const zk = new WeakMap;
    var Sk = Ik(37832);
    class vk extends(xk(ak.l)) {
      constructor(kk, Fk) {
        super(kk, Fk), Fk.textures.forEach(((kk, Fk) => {
          kk.mirror.onLoadObservable.add((kk => {
            this.setTextureArrayData(kk, Fk).catch((kk => {
              console.error(`Failed to build texture array for atlas ${Fk}`, kk)
            }))
          }))
        })), (0, Sk.h)(Fk, kk.shaderLanguage)
      }
      async setTextureArrayData(kk, Fk) {
        var Ik, Xk;
        const Tk = this.featureState,
          {
            width: ik,
            height: yk
          } = kk.getSize(),
          lk = Tk.useWebGL2 ? await Vk(kk, null !== (Ik = null === (Xk = Tk.sources.pixels) || void 0 === Xk ? void 0 : Xk[Fk]) && void 0 !== Ik ? Ik : null, this._material.mG()) : null;
        (0, Sk.e)(this._material, Tk, Fk, lk, ik, Math.round(yk / ik), this._material.shaderLanguage)
      }
    }
    var Ek = Ik(41158),
      Ok = Ik(40308),
      nk = Ik(37144),
      Gk = Ik(41165),
      pk = Ik(40427),
      uk = Ik(40297),
      bk = Ik(41114),
      Rk = Ik(37623),
      Uk = Ik(41170);
    class Ck extends Ek.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Nk = {
      Mesh: Gk.c,
      TransformNode: bk.b,
      je: Ek.c,
      VertexBuffer: Ek.g,
      BoundingInfo: Ok.d,
      Ge: nk.Ge,
      ArenaBuffer: Ck,
      SubMesh: uk.b,
      VertexData: pk.c,
      MirroredGeometry: Uk.c,
      meshFromArrays: Uk.g,
      plainMeshFromArrays: Uk.k
    };
    (0, Rk.f)(Nk);
    var ck = Ik(37461);
    class Wk extends(xk(Lk.e)) {
      constructor(kk, Fk) {
        if (super(kk, Fk), kk instanceof Xk.StandardMaterial && Fk.dirLightCount > 0) {
          const Fk = kk,
            Ik = Fk._blockDirtyMechanism;
          Fk._blockDirtyMechanism = !0, kk.disableLighting = !0, Fk._blockDirtyMechanism = Ik;
          const Xk = (0, wk.X)(kk);
          Xk && (Xk.disableLighting = !0, (0, wk.W)(Xk))
        }(0, ck.h)(kk)
      }
      dispose(kk) {
        (0, ck.l)(this._material), super.dispose(kk)
      }
    }

    function fk(kk, Fk) {
      if (!(Fk instanceof Xk.StandardMaterial) || Fk.specularTexture) return;
      const {
        r: Ik,
        g: Tk,
        b: ik
      } = Fk.specularColor;
      0 === Ik && 0 === Tk && 0 === ik && (kk.SPECULARTERM = !1)
    }(0, Lk.c)({
      disableUnusedSpecularTerm: fk
    });
    var Bk = Ik(37365),
      dk = Ik(37633);
    const Yk = new RegExp(`^#define ${qk.d}\\s*$`, "m");
    class Ak extends(xk(qk.h)) {
      constructor(kk, Fk) {
        super(kk, Fk), this.ee = !1, Fk.ditherOnlyWhileFading && (dk.e.add(kk), this.prewarmDitherTwins(kk))
      }
      prewarmDitherTwins(kk) {
        const Fk = new WeakSet;
        kk.onEffectCreatedObservable.add((Ik => {
          let {
            effect: Xk,
            subMesh: Tk
          } = Ik;
          if (this.featureState.prewarmingDither || Fk.has(Xk)) return;
          Fk.add(Xk);
          const ik = null === Tk || void 0 === Tk ? void 0 : Tk.getMesh();
          ik && !Yk.test(Xk.defines) && kk.mG().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ik) || Fk.delete(Xk)
          }))
        }))
      }
      prewarmDither(kk) {
        if (this.ee || kk.Hs()) return !1;
        const Fk = new uk.b(0, 0, 0, 0, 0, kk, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(kk, Fk)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Fk.effect
      }
      dispose(kk) {
        this.ee = !0, super.dispose(kk)
      }
    }
    const gk = new Map;

    function mk(kk, Fk) {
      gk.set(kk, Fk)
    }
    mk(lk.b, Pk), mk(ak.l, vk), mk(qk.h, Ak), mk(Lk.e, Wk), (0, tk.d)({
      create: (kk, Fk) => {
        const Ik = new Xk.StandardMaterial(kk.name, Fk);
        return (0, Bk.q)(kk, Ik), Ik.detailMap._pluginDefineNames
      },
      write: (kk, Fk, Ik) => {
        (0, Bk.X)(kk.mirror, Fk, Ik)
      },
      addFeature: (kk, Fk, Ik) => {
        const Xk = gk.get(Fk.feature);
        if (!Xk) throw new Error(`${Fk.feature.name} has no plugin class (registerPluginClass)`);
        new Xk(kk.mirror, Fk.state, ...Ik)
      },
      texture: (kk, Fk, Ik) => {
        let {
          url: Xk,
          noMipmap: Tk,
          invertY: ik,
          samplingMode: lk,
          data: ak,
          sets: qk
        } = Ik;
        if (!ak) {
          const Ik = new yk.c(Xk, Fk, Tk, ik, lk);
          return Object.assign(Ik, qk), void(0, Zk.H)(kk, Ik)
        }
        const Lk = {},
          tk = new Promise(((kk, Fk) => {
            Lk.onLoad = kk, Lk.onError = (kk, Ik) => {
              Fk(new Error(`${ak.context}: ${(null===Ik||void 0===Ik?void 0:Ik.message)||kk||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: jk,
            bytes: ek,
            label: wk
          } = ak,
          Hk = {
            noMipmap: Tk,
            invertY: !1,
            samplingMode: lk,
            ...Lk,
            mimeType: jk,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Jk = new yk.c(null, Fk, Hk);
        Bk.r.set(Jk, tk), Object.assign(Jk, qk), Jk.updateURL(Xk, ek);
        const xk = Jk.getInternalTexture();
        xk && (xk.label = wk), kk.uvSet = Jk.coordinatesIndex, kk.matrix.set((0, Bk.P)(Jk)), (0, Zk.H)(kk, Jk)
      },
      cube: (kk, Fk, Ik) => {
        let {
          rootUrl: Xk,
          files: ik,
          noMipmap: lk,
          luminance: ak
        } = Ik;
        const {
          samplingMode: qk
        } = kk.sampler, Lk = qk === (0, Zk.z)(lk) ? null : () => {
          (0, Bk.O)(tk, qk)
        }, tk = new Tk.c(Xk, Fk, null, lk, ik, Lk, null, (0, Zk.x)(ak));
        tk.coordinatesMode = yk.c.SKYBOX_MODE, (0, Zk.H)(kk, tk)
      },
      canvas: (kk, Fk, Ik) => {
        let {
          width: Xk,
          height: Tk,
          mipmaps: lk,
          samplingMode: ak,
          hasAlpha: qk = !1,
          wrap: Lk = yk.c.CLAMP_ADDRESSMODE
        } = Ik;
        const tk = new ik.d(Fk, {
          width: Xk,
          height: Tk
        }, kk, lk, ak);
        tk.hasAlpha = qk, tk.wrapU = Lk, tk.wrapV = Lk;
        const Zk = (0, Bk.B)(tk);
        return (0, Bk.E)(Zk, tk), Zk
      }
    })
  },
  41170: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      g: () => tk,
      k: () => Zk
    });
    var Xk = Ik(41158),
      Tk = Ik(40056),
      ik = Ik(40308),
      yk = Ik(40429),
      lk = Ik(41165),
      ak = Ik(40427),
      qk = Ik(37519);
    class Lk extends yk.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (kk, Fk) => {
          this.releaseUnlessInstanced(Fk)
        }, this.onLinked = null
      }
      link(kk) {
        var Fk;
        (0, qk.o)(kk), this.model = kk, null === (Fk = this.onLinked) || void 0 === Fk || Fk.call(this, kk)
      }
      relink() {
        this.release();
        const kk = [];
        for (const Tk of Object.values(this._vertexBuffers))
          if (!Tk.getIsInstanced()) {
            const {
              byteOffset: Fk,
              byteStride: Ik,
              type: Xk,
              normalized: ik
            } = Tk;
            kk.push({
              kind: Tk.getKind(),
              data: Tk.getData(),
              offset: Fk,
              stride: Ik,
              components: Tk.getSize(),
              glType: Xk,
              isNormalized: ik
            })
          } const Fk = this._indices.length ? this._indices : null,
          {
            minimum: Ik,
            maximum: Xk
          } = this.extend;
        this.link(new qk.h(kk, Fk, this.getTotalVertices(), new Float64Array(Ik.iXk()), new Float64Array(Xk.iXk())))
      }
      copy(kk) {
        if (!this.model) return super.copy(kk);
        const Fk = new Lk(kk, this.mG()),
          Ik = this.yXk(void 0, !0);
        Ik && Fk.setIndices(Ik);
        let yk = !1;
        for (const ik in this._vertexBuffers) {
          const kk = this._vertexBuffers[ik],
            Ik = kk.getData();
          if (!Ik) continue;
          const lk = kk.getSize(),
            {
              type: ak,
              byteOffset: qk,
              byteStride: Lk,
              normalized: tk
            } = kk;
          yk ||= kk.isUpdatable();
          const Zk = kk.getIsInstanced() ? (Ik instanceof Array ? 4 * Ik.length : Ik.byteLength) / Lk : this.getTotalVertices(),
            jk = (0, Tk.l)(Ik, lk, ak, qk, Lk, Zk, !0),
            ek = {
              updatable: kk.isUpdatable(),
              stride: lk,
              type: ak,
              normalized: tk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            };
          Fk.setVerticesBuffer(new Xk.g(this.Oe(), jk, ik, ek), Zk)
        }
        return Fk._updatable = yk, Fk._boundingInfo = new ik.d(this.extend.minimum, this.extend.maximum), Fk.relink(), Fk
      }
      static mergeMeshes(kk, Fk, Ik, Xk, Tk, ik) {
        const ak = kk[0].mG(),
          qk = new lk.c(kk[0].name + "_merged", ak),
          tk = new Lk(yk.d.RandomId(), ak, void 0, !1, qk);
        try {
          if (!lk.c.MergeMeshes(kk, Fk, Ik, qk, Tk, ik)) return qk.dispose(), null
        } catch (Zk) {
          throw qk.dispose(), Zk
        }
        return tk.relink(), qk
      }
      removeVerticesData(kk) {
        this.releaseUnlessInstanced(kk), super.removeVerticesData(kk)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(kk) {
        var Fk;
        kk && null !== (Fk = this.getVertexBuffer(kk)) && void 0 !== Fk && Fk.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, qk.u)(this.model), this.model = null)
      }
    }

    function tk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new lk.c(kk, Ik);
      const Tk = (0, qk.l)(Fk),
        {
          positions: ik,
          normals: tk,
          uvs: Zk,
          indices: jk,
          named: ek = {}
        } = Fk,
        wk = new ak.c;
      wk.positions = ik, wk.normals = null !== tk && void 0 !== tk ? tk : null, wk.uvs = null !== Zk && void 0 !== Zk ? Zk : null, wk.indices = jk;
      const Hk = new Lk(yk.d.RandomId(), Ik, wk, !1, Xk);
      for (const {
          kind: yk,
          components: lk
        }
        of Tk.vertexAttributes) yk in ek && Xk.setVerticesData(yk, ek[yk], !1, lk);
      return Hk.link(Tk), Xk
    }

    function Zk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Tk = new lk.c(kk, Ik),
        {
          positions: ik,
          normals: yk,
          uvs: qk,
          indices: Lk
        } = Fk;
      return Object.assign(new ak.c, {
        positions: ik,
        normals: yk,
        uvs: qk,
        indices: Lk
      }).applyToMesh(Tk, Xk), Tk
    }
  },
  41612: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Hk,
      e: () => lk,
      h: () => yk,
      i: () => qk
    });
    var Xk = Ik(37327),
      Tk = Ik(38706),
      ik = Ik(38700);

    function yk(kk, Fk, Ik, Xk) {
      const Tk = ik.t;
      Fk.fill(0), kk.gravity.toArray(Fk, Tk.gravity), kk.colorDead.toArray(Fk, Tk.colorDead), Ik[Tk.ramp] = kk.useRampGradients ? 1 : 0;
      const yk = kk.getColorGradients(),
        lk = Zk(kk, yk, "colour", Xk);
      Ik[Tk.colorCount] = lk;
      for (let ik = 0; ik < lk; ik++) {
        var ak;
        const kk = yk[jk(yk, ik)];
        Fk[Tk.colorPositions + ik] = kk.gradient, kk.color1.toArray(Fk, Tk.color1 + 4 * ik), (null !== (ak = kk.color2) && void 0 !== ak ? ak : kk.color1).toArray(Fk, Tk.color2 + 4 * ik)
      }
      const qk = kk.getVelocityGradients(),
        Lk = Zk(kk, qk, "TH", Xk);
      Ik[Tk.velocityCount] = Lk;
      for (let ik = 0; ik < Lk; ik++) xk(Fk, Tk.TH + 4 * ik, qk[jk(qk, ik)]);
      const tk = kk.useRampGradients ? kk.getColorRemapGradients() : null,
        ek = Zk(kk, tk, "colour remap", Xk);
      Ik[Tk.remapCount] = ek;
      for (let ik = 0; ik < ek; ik++) xk(Fk, Tk.remap + 4 * ik, tk[jk(tk, ik)])
    }

    function lk() {
      return {
        key: [],
        texels: new Uint8Array(4 * ik.j)
      }
    }
    const ak = [];

    function qk(kk, Fk) {
      return Lk(kk, ak), !Jk(ak, Fk.key) && (Fk.key.length = 0, Fk.key.push(...ak), Fk.key.length > 0 && function(kk, Fk) {
        for (let Ik = 0; Ik < ik.j; Ik++) Tk.e.GetCurrentGradient(Ik / ik.j, kk, ((kk, Fk, Ik) => {
          Xk.Color3.LerpToRef(kk.color, Fk.color, Ik, tk)
        })), Fk[4 * Ik] = 255 * tk.r, Fk[4 * Ik + 1] = 255 * tk.g, Fk[4 * Ik + 2] = 255 * tk.b, Fk[4 * Ik + 3] = 255
      }(kk.getRampGradients(), Fk.texels), !0)
    }

    function Lk(kk, Fk) {
      Fk.length = 0;
      const Ik = kk.useRampGradients ? kk.getRampGradients() : null;
      if (null !== Ik && void 0 !== Ik && Ik.length) {
        Fk.push(Ik.length);
        for (const kk of Ik) Fk.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
      }
    }
    const tk = new Xk.Color3;

    function Zk(kk, Fk, Ik, Xk) {
      return Fk ? Fk.length > ik.c ? (Xk(`particleStops:${Ik}`, `GPU particles use the first 2 and last ${ik.c-2} of more than ${ik.c} ${Ik} gradient stops (${kk.name})`), ik.c) : Fk.length : 0
    }

    function jk(kk, Fk) {
      return Fk < 2 || kk.length <= ik.c ? Fk : kk.length - ik.c + Fk
    }
    const ek = new Float32Array(ik.p),
      wk = new Uint32Array(ek.buffer);

    function Hk(kk, Fk, Ik) {
      return yk(kk, ek, wk, Ik), Fk && Jk(wk, Fk) ? null : wk.slice()
    }

    function Jk(kk, Fk) {
      if (kk.length !== Fk.length) return !1;
      for (let Ik = 0; Ik < kk.length; Ik++)
        if (kk[Ik] !== Fk[Ik]) return !1;
      return !0
    }

    function xk(kk, Fk, Ik) {
      var Xk;
      kk[Fk] = Ik.gradient, kk[Fk + 1] = Ik.factor1, kk[Fk + 2] = null !== (Xk = Ik.factor2) && void 0 !== Xk ? Xk : Ik.factor1
    }
  },
  41604: (kk, Fk, Ik) => {
    function Xk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Fk = new Set;
      return (Ik, Xk) => {
        Fk.has(Ik) || (Fk.add(Ik), console.warn(kk + Xk))
      }
    }
    Ik.d(Fk, {
      d: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);