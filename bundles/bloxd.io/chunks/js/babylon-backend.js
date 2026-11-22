export const id = 0;
export const ids = [0];
export const modules = {
  40705: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      CapeMaterialPlugin: () => Yk,
      HueTintMaterialPlugin: () => Lk,
      LifeformMaterialPlugin: () => Ck,
      OverlayMaterialPlugin: () => Ak
    });
    var Dk = ik(40707),
      fk = ik(37599);
    class Sk extends((0, Dk.g)(fk.e)) {}(0, Dk.j)(fk.e, Sk);
    var bk = ik(36761);
    class rk extends((0, Dk.g)(bk.f)) {}(0, Dk.j)(bk.f, rk);
    var Pk = ik(37451);
    class mk extends((0, Dk.g)(Pk.h)) {}(0, Dk.j)(Pk.h, mk);
    var Mk = ik(37028),
      Kk = ik(39829),
      xk = ik(37020);
    class nk extends((0, Dk.g)(xk.e)) {
      constructor(kk, ek, ik) {
        super(kk, ek, ik), (0, Mk.j)(kk)
      }
      dispose(kk) {
        (0, Mk.m)(this._material), super.dispose(kk)
      }
    }(0, Dk.j)(xk.e, nk), (0, xk.h)({
      disableUnusedSpecularTerm: Dk.d,
      isLightingDisabled: kk => kk instanceof Kk.StandardMaterial && kk.disableLighting
    });
    var Uk = ik(38279);
    class Hk extends((0, Dk.g)(Uk.e)) {}(0, Dk.j)(Uk.e, Hk);
    var wk = ik(38371),
      lk = ik(36883),
      pk = ik(37717),
      yk = ik(36826);
    class Yk extends((0, Dk.g)(wk.d)) {}(0, Dk.j)(wk.d, Yk);
    class Lk extends((0, Dk.g)(lk.c)) {}(0, Dk.j)(lk.c, Lk);
    class Ck extends((0, Dk.g)(pk.o)) {}(0, Dk.j)(pk.o, Ck);
    class Ak extends((0, Dk.g)(yk.d)) {}(0, Dk.j)(yk.d, Ak)
  },
  41114: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      addBabylonLights: () => Ce,
      default: () => se
    });
    var Dk = ik(41122),
      fk = (ik(39552), ik(40701), ik(40055), ik(41138)),
      Sk = ik(36868),
      bk = ik(36690),
      rk = ik(41151),
      Pk = ik(41155),
      mk = ik(36821),
      Mk = (ik(40707), ik(41166)),
      Kk = ik(41162),
      xk = ik(38299),
      nk = ik(41171),
      Uk = ik(39412),
      Hk = ik(38287);
    const wk = "gpuParticles",
      lk = Hk.t,
      pk = kk => kk / 4,
      yk = kk => `gpuParticleSystem[${kk>>2}].${"xyzw"[3&kk]}`,
      Yk = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Hk.b}\n#define COLOR_POSITIONS ${pk(lk.colorPositions)}\n#define COLOR1 ${pk(lk.color1)}\n#define COLOR2 ${pk(lk.color2)}\n#define VELOCITY ${pk(lk.Cw)}\n#define REMAP ${pk(lk.remap)}\n#define RECORDS_PER_ROW ${Hk.n}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Hk.p/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${yk(lk.gravity)}, ${yk(lk.gravity+1)}, ${yk(lk.gravity+2)}); }\nint colorCount() { return int(${yk(lk.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${pk(lk.colorDead)}]; }\nint velocityCount() { return int(${yk(lk.velocityCount)}); }\nint remapCount() { return int(${yk(lk.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Uk.d.ShadersStore[`${wk}VertexShader`] = Yk, Uk.d.ShadersStore[`${wk}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Lk = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Ck = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Ak = ik(38282),
      jk = ik(41177);
    class sk extends Ak.b {
      constructor(kk, ek, ik, Dk) {
        super(kk, ek, ik), this.renderer = ik, this.bw = Dk, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Hk.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, jk.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (kk, ek) => {
          const {
            engine: ik
          } = this, Dk = ik._gl;
          ik._bindTextureDirectly(Dk.TEXTURE_2D, this.records, !0), ik._unpackFlipY(!1);
          const fk = this.ring.recordBits;
          for (let Sk = kk; Sk < ek;) {
            const kk = Math.floor(Sk / Hk.n),
              ik = Math.min(ek, (kk + 1) * Hk.n);
            Dk.texSubImage2D(Dk.TEXTURE_2D, 0, Sk % Hk.n * 4, kk, 4 * (ik - Sk), 1, Dk.RGBA_INTEGER, Dk.UNSIGNED_INT, fk, Sk * Hk.f), Sk = ik
          }
          ik._bindTextureDirectly(Dk.TEXTURE_2D, null)
        }, this.id = kk;
        const fk = Dk.JU();
        this.engine = fk;
        const Sk = Math.max(1, ek),
          bk = Math.min(Sk, Hk.n);
        this.records = fk.createRawTexture(null, 4 * bk, Math.ceil(Sk / bk), Mk.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Mk.c.TEXTURE_NEAREST_SAMPLINGMODE, null, Mk.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.bw.getAnimationRatio() || 1;
        const ek = this.bw.getFrameId();
        if (ek === this.animatedFrame) return !1;
        const ik = super.animate(kk);
        return ik && (this.animatedFrame = ek, this.ring.takeUploads(this.uploadSlots)), ik
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(kk) {
        (0, jk.j)(this, this.uniforms, this.uniformBits, kk);
        for (const ik of Hk.s) this.uniforms[ik] = this.uniformBits[ik];
        var ek;
        (0, jk.n)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ek = this.ramp) || void 0 === ek || ek.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Kk.c.CreateRGBATexture(this.rampTexels.texels, Hk.k, 1, this.bw, !1, !1, Mk.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var kk;
        this.records.dispose(), null === (kk = this.ramp) || void 0 === kk || kk.dispose(), this.ramp = null
      }
    }
    const dk = "the context was lost before the programs linked";
    class Vk {
      constructor(kk, ek) {
        this.bw = kk, this.reportFailure = ek, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, nk.d)(), this.engine = kk.JU(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Kk.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, kk, !1, !1, Mk.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      Aq(kk, ek) {
        const ik = Hk.n * this.engine.getCaps().maxTextureSize;
        ek > ik && this.warnOnce(`capacity:${kk}`, `particle system ${kk} holds ${ik} particles, not ${ek}: its records texture's limit`);
        const Dk = new sk(kk, Math.min(ek, ik), this, this.bw);
        return this.bw.addParticleSystem(Dk), Dk
      }
      canDraw(kk) {
        var ek, ik;
        if (this.failed || null === (ek = kk.texture) || void 0 === ek || null === (ik = ek.mirror) || void 0 === ik || !ik.isReady()) return !1;
        for (const Dk of (0, xk.m)(kk.blendMode))
          if (!this.effectFor(Dk).isReady()) return !1;
        return !0
      }
      disposeStopped(kk) {
        this.bw._toBeDisposed.push(kk)
      }
      remove(kk) {
        this.bw.removeParticleSystem(kk), kk.releaseGl()
      }
      render(kk) {
        var ek;
        if (!kk.isReady() || !kk.hasLiveParticles()) return 0;
        const {
          engine: ik,
          bw: Dk,
          frame: fk
        } = this;
        kk.prepareDraw(this.warnOnce), kk.drawOffset(fk, 0), fk[3] = kk.drawTime();
        const Sk = kk.ring.drawStart(),
          bk = kk.ring.drawCount(),
          rk = null !== (ek = kk.ramp) && void 0 !== ek ? ek : this.whiteRamp;
        ik.setState(!1);
        for (const Pk of (0, xk.m)(kk.blendMode)) {
          const ek = this.effectFor(Pk);
          ik.enableEffect(ek), ek.setTexture("gpuParticleTexture", kk.texture.mirror), ek.setTexture("gpuParticleRampTexture", rk), ek._bindTexture("gpuParticleRecords", kk.records), ek.setMatrix("gpuParticleView", Dk.getViewMatrix()), ek.setMatrix("gpuParticleProjection", Dk.getProjectionMatrix()), ek.setFloatArray4("gpuParticleSystem", kk.uniforms), ek.setFloat4("gpuParticleFrame", fk[0], fk[1], fk[2], fk[3]), ek.setFloat2("gpuParticleRange", Sk, bk), ek.setFloat("gpuParticleRamp", kk.uniforms[Hk.t.ramp]), ik.bindBuffers(this.vertexBuffers, null, ek), ik.setAlphaMode((0, xk.j)(Pk)), ik.drawArraysType(Mk.c.MATERIAL_TriangleStripDrawMode, 0, 4, bk), ek._bindTexture("gpuParticleRecords", null)
        }
        return ik.setAlphaMode(Mk.c.ALPHA_DISABLE), bk
      }
      awaitLink(kk) {
        const ek = kk.getPipelineContext(),
          ik = this.gl();
        !this.failed && ik && (!ek || ek.isParallelCompiled && !ek.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ek.isParallelCompiled && ek.program && (ik.getProgramParameter(ek.program, ik.LINK_STATUS) || this.fail(function(kk, ek, ik) {
          if (kk.isContextLost()) return dk;
          for (const [Dk, fk] of [
              ["VERTEX SHADER", ek.vertexShader],
              ["FRAGMENT SHADER", ek.fragmentShader]
            ]) {
            const ek = fk && !kk.getShaderParameter(fk, kk.COMPILE_STATUS) ? kk.getShaderInfoLog(fk) : null;
            if (ek) return `${Dk} ${ek}`
          }
          return kk.getProgramInfoLog(ik) || "a program did not link"
        }(ik, ek, ek.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(kk) {
        return kk === xk.c ? this.multiplyEffect : this.effect
      }
      createEffect(kk) {
        return this.engine.createEffect(wk, [], Lk, Ck, kk, void 0, void 0, ((kk, ek) => {
          var ik;
          this.fail(null !== (ik = this.gl()) && void 0 !== ik && ik.isContextLost() ? dk : function(kk) {
            const ek = kk.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(ek) ? "a program failed, its log not in this browser's stack" : ek.replace(/^Error: /, "")
          }(ek))
        }))
      }
      fail(kk) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${kk}`), this.reportFailure(kk);
          for (const kk of this.bw.ZY.slice()) kk instanceof sk && kk.disposeOnStop && kk.dispose()
        }
      }
    }
    var Fk = ik(39377);
    class uk extends Fk.d {
      createEffect() {
        const kk = super.createEffect(...arguments);
        return Ik(kk), qk.has(kk) || (qk.add(kk), kk.onCompileObservable.add((() => {
          Ik(kk)
        }))), kk
      }
    }
    const qk = new WeakSet;

    function Ik(kk) {
      kk._vertexSourceCodeBeforeMigration = "", kk._fragmentSourceCodeBeforeMigration = ""
    }
    var zk = ik(39774),
      Qk = ik(40693),
      vk = ik(39523),
      Ek = ik(39730),
      hk = ik(39728),
      ak = ik(39651),
      Wk = ik(40734),
      tk = ik(37213),
      Xk = ik(41186),
      Bk = ik(41191),
      ck = ik(41193),
      Tk = ik(39672),
      Zk = ik(2797),
      Ok = ik(37083),
      gk = ik(39894),
      Gk = ik(37174),
      Nk = ik(37109);

    function Rk(kk) {
      if (kk.visibility < 1 || !kk.isVisible || !kk.isEnabled() || kk.metadata[Nk.f] || !kk.isReady()) return !0;
      const ek = kk.TY;
      if (!ek || 0 === ek.length) return !0;
      for (let ik = 0; ik < ek.length; ik++) {
        const Dk = ek[ik],
          fk = Dk.fH();
        if (!fk || !fk.isReadyForSubMesh(kk, Dk, !1)) return !0
      }
      return !1
    }
    class Jk {
      constructor(kk, ek) {
        this.Lx = kk, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ek.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      tn(kk) {
        var ek;
        const ik = this.armed;
        if (this.armed = !1, this.vis = null, !ik) return !1;
        this.culled = 0;
        const {
          Lx: Dk
        } = this, fk = null === (ek = Dk.qY) || void 0 === ek ? void 0 : ek.visibility;
        if (!fk || !kk || Dk.yH.YH) return !1;
        if (!(Dk.Ux.kDk[0] >= Gk.i)) return !1;
        const Sk = kk.getProjectionMatrix().m;
        if (0 !== Sk[15]) return !1;
        const bk = Dk.Xx,
          rk = kk.globalPosition,
          Pk = this.eye;
        return Pk[0] = rk.x + bk[0], Pk[1] = rk.y + bk[1], Pk[2] = rk.z + bk[2], !!fk.eyeClear(Pk[0], Pk[1], Pk[2], kk.minZ, Sk, Dk.Ux) && (this.vis = fk, this.passable.clear(), this.count = 0, !0)
      }
      see(kk, ek) {
        const ik = this.count++;
        if (ik === this.cellSlots.length) {
          const kk = new Int32Array(2 * ik);
          kk.set(this.cellSlots), this.cellSlots = kk
        }
        this.cellSlots[ik] = ek, this.meshes[ik] = kk
      }
      seeThrough(kk) {
        this.passable.add(kk)
      }
      finish(kk, ek) {
        const {
          vis: ik,
          eye: Dk,
          meshes: fk,
          count: Sk,
          cellSlots: bk
        } = this, {
          Ux: rk
        } = this.Lx, [Pk, mk] = rk.kDk, Mk = null !== ik && ik.update(Dk[0], Dk[1], Dk[2], rk.kkk, Pk, mk, this.passable);
        let Kk = 0;
        for (let xk = 0; xk < Sk; xk++) {
          const Dk = fk[xk];
          if (Mk) {
            const kk = 3 * bk[xk];
            if (kk >= 0 && !ik.isDrawn(ek[kk], ek[kk + 1], ek[kk + 2])) {
              Kk++;
              continue
            }
          }
          Tk.h.prototype.push.call(kk, Dk)
        }
        fk.fill(null, 0, Sk), this.count = 0, this.vis = null, this.culled = Kk
      }
    }
    var ke = ik(37160),
      ee = ik(37095),
      ie = ik(39861),
      De = ik(41196),
      fe = ik(39870),
      Se = ik(39787);
    let be = 1;
    const re = new WeakSet;

    function Pe() {
      return be
    }

    function me() {
      be = be >= 1073741823 ? 1 : be + 1
    }

    function Me(kk) {
      const ek = kk.metadata;
      if (!ek || !0 !== ek[Ok.m]) return;
      const ik = ek[Ok.s],
        Dk = null === ik || void 0 === ik ? void 0 : ik._noaStamps;
      if (!ik || !Dk) return;
      const fk = ik.entries.indexOf(kk);
      fk >= 0 && (Dk[fk] = 0)
    }

    function Ke(kk) {
      const ek = kk.TY;
      for (let ik = 0; ik < ek.length; ik++) {
        const kk = ek[ik].fH();
        if (kk && !kk.isFrozen) return !1
      }
      for (let ik = 0; ik < ek.length; ik++) {
        const kk = ek[ik].fH();
        kk && re.add(kk)
      }
      return !0
    }
    let xe = !1;
    const ne = new WeakSet;

    function Ue(kk, ek) {
      const ik = kk[ek];
      if ("function" !== typeof ik) throw new Error(`terrainDrawState: Babylon has no ${ek} to hook`);
      return ik
    }

    function He(kk, ek, ik, Dk, fk) {
      const Sk = ik.Ux.kkk,
        bk = new Map;
      let rk = 0;
      const Pk = new Jk(ik, kk),
        mk = new ke.c(Sk, kk.JU());
      ! function(kk) {
        if (ne.has(kk) || (ne.add(kk), kk.onContextLostObservable.add(me), kk.RU.add(me)), xe) return;
        xe = !0;
        const ek = De.d.prototype,
          ik = Ue(ek, "_markSubMeshesAsDirty");
        Object.assign(ek, {
          _markSubMeshesAsDirty(kk) {
            ik.call(this, kk), Me(this)
          }
        });
        const Dk = Ue(Se.b.prototype, "_syncParentEnabledState");
        Object.assign(Se.b.prototype, {
          _syncParentEnabledState() {
            Dk.call(this), Me(this)
          }
        });
        const fk = Ue(fe.e.prototype, "resetDrawCache");
        fe.e.prototype.resetDrawCache = function(kk, ek) {
          fk.call(this, kk, ek), Me(this.getMesh())
        };
        const Sk = ie.e.prototype,
          bk = Ue(Sk, "markDirty");
        Sk.markDirty = function(kk) {
          bk.call(this, kk), re.has(this) && me()
        };
        const rk = Ue(Sk, "_markAllSubMeshesAsDirty");
        Object.assign(Sk, {
          _markAllSubMeshesAsDirty(kk) {
            rk.call(this, kk), re.has(this) && me()
          }
        })
      }(kk.JU());
      let Mk = new Float64Array(384),
        Kk = new Int32Array(64),
        xk = new Uint8Array(64),
        nk = new Float64Array(64),
        Uk = new Int32Array(192),
        Hk = 0;
      const wk = [],
        lk = new Float64Array(24),
        pk = () => {
          const kk = wk.pop();
          return void 0 !== kk ? (Kk[kk] = 0, kk) : (Hk === Kk.length && (Mk = we(Mk, new Float64Array(2 * Mk.length)), Kk = we(Kk, new Int32Array(2 * Kk.length)), xk = we(xk, new Uint8Array(2 * xk.length)), nk = we(nk, new Float64Array(2 * nk.length)), Uk = we(Uk, new Int32Array(2 * Uk.length))), Hk++)
        },
        yk = kk => {
          const ek = 6 * kk._noaSlot,
            ik = kk.rDk[0],
            Dk = kk.rDk[1];
          Mk[ek] = ik.x, Mk[ek + 1] = ik.y, Mk[ek + 2] = ik.z, Mk[ek + 3] = Dk.x, Mk[ek + 4] = Dk.y, Mk[ek + 5] = Dk.z
        },
        Yk = (kk, ek, ik) => {
          if (!ik) return Pk.see(kk, -1), !1;
          const Dk = Rk(kk);
          return Dk && Pk.seeThrough(nk[ek]), Pk.see(kk, ek), !Dk
        };
      let Lk = -1;
      return kk.getActiveMeshCandidates = () => {
        const ik = kk.frustumPlanes,
          Dk = ek._selectionContent;
        Dk.reset(), (ik => {
          const Dk = kk.frustumPlanes;
          rk = rk + 1 | 0 || 1;
          const fk = ek.blocks,
            Sk = Pk.tn(kk.activeCamera),
            bk = Sk && !0;
          if (bk) {
            const ek = kk.JU().currentRenderPassId;
            ek !== Lk && (Lk = ek, me())
          }
          const mk = Pe(),
            nk = bk && !1;
          fk.length > 0 && function(kk, ek) {
            for (let ik = 0; ik < 6; ik++) {
              const Dk = kk[ik],
                fk = Dk.normal;
              ek[4 * ik] = fk.x, ek[4 * ik + 1] = fk.y, ek[4 * ik + 2] = fk.z, ek[4 * ik + 3] = Dk.d
            }
          }(Dk, lk);
          const Hk = Mk,
            wk = Kk,
            pk = xk;
          for (let kk = 0; kk < fk.length; kk++) {
            const ek = fk[kk];
            if (!gk.e.IsInFrustum(ek.rDk, Dk)) continue;
            const Mk = ek.entries;
            {
              const kk = ek._noaSlots,
                Dk = ek._noaStamps,
                fk = ek._noaTerrain;
              for (let ek = 0; ek < Mk.length; ek++) {
                const Kk = kk[ek];
                if (wk[Kk] !== rk && (wk[Kk] = rk, pk[Kk] = le(Hk, 6 * Kk, lk) ? 1 : 0), 0 === pk[Kk]) continue;
                const xk = Mk[ek];
                if (bk && Dk[ek] === mk) nk && 1 === fk[ek] && Rk(xk) && 0, Pk.see(xk, 1 === fk[ek] ? Kk : -1);
                else if (bk) {
                  Dk[ek] = mk;
                  const kk = !0 === xk.metadata[ee.m];
                  fk[ek] = kk ? 1 : 0;
                  const ik = Yk(xk, Kk, kk);
                  !kk || ik && Ke(xk) || (Dk[ek] = 0)
                } else Sk ? Yk(xk, Kk, !0 === xk.metadata[ee.m]) : Tk.h.prototype.push.call(ik, xk)
              }
              continue
            }
          }
          Sk && Pk.finish(ik, Uk)
        })(Dk), mk.apply(Dk, kk.activeCamera);
        const Sk = ek.bDk;
        for (let kk = 0; kk < Sk.length; kk++) {
          const ek = Sk[kk];
          ek.isEnabled() && Tk.h.prototype.push.call(Dk, ek)
        }
        return fk(Dk, ik), Dk
      }, {
        PDk: () => Pk.culled,
        Zik: (kk, ek) => {
          const fk = Math.floor(ek[0] / Sk),
            rk = Math.floor(ek[1] / Sk),
            Pk = Math.floor(ek[2] / Sk),
            mk = `${fk}|${rk}|${Pk}`;
          let Mk = bk.get(mk);
          if (!Mk) {
            const kk = [0, 0, 0];
            ik.Zkk([fk * Sk - 1, rk * Sk - 1, Pk * Sk - 1], null, kk), Mk = Object.assign(Dk(kk, Sk + 2), {
              mDk: mk,
              MDk: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: pk()
            }), yk(Mk), nk[Mk._noaSlot] = (0, Zk.e)(fk, rk, Pk), Uk[3 * Mk._noaSlot] = fk, Uk[3 * Mk._noaSlot + 1] = rk, Uk[3 * Mk._noaSlot + 2] = Pk, bk.set(mk, Mk)
          }
          Mk.MDk++, kk.metadata[Ok.t] = Mk
        },
        Tu: kk => {
          const ek = kk.metadata[Ok.t];
          ek && (ek.MDk--, ek.MDk <= 0 && (bk.delete(ek.mDk), wk.push(ek._noaSlot)), kk.metadata[Ok.t] = null)
        },
        SDk: (kk, ek) => {
          const ik = kk,
            Dk = ek.metadata[Ok.t];
          (ik._noaSlots ??= []).push(Dk._noaSlot), (ik._noaStamps ??= []).push(0), (ik._noaTerrain ??= []).push(0), ik.entries.push(ek)
        },
        removeEntry: (kk, ek) => {
          const ik = kk,
            Dk = ik.entries,
            fk = Dk.indexOf(ek);
          if (fk < 0) return;
          const Sk = ik._noaSlots,
            bk = ik._noaStamps,
            rk = ik._noaTerrain,
            Pk = Dk.length - 1;
          Dk[fk] = Dk[Pk], Sk[fk] = Sk[Pk], bk[fk] = bk[Pk], rk[fk] = rk[Pk], Dk.pop(), Sk.pop(), bk.pop(), rk.pop()
        },
        T6: kk => {
          for (const ek of bk.values()) {
            ek.Jik.KDk(kk), ek.Rik.KDk(kk);
            for (const ik of ek.rDk) ik.KDk(kk);
            yk(ek)
          }
        }
      }
    }

    function we(kk, ek) {
      return ek.set(kk), ek
    }

    function le(kk, ek, ik) {
      const Dk = kk[ek],
        fk = kk[ek + 1],
        Sk = kk[ek + 2],
        bk = kk[ek + 3],
        rk = kk[ek + 4],
        Pk = kk[ek + 5];
      for (let mk = 0; mk < 24; mk += 4) {
        const kk = ik[mk],
          ek = ik[mk + 1],
          Mk = ik[mk + 2];
        if (!(kk * (kk >= 0 ? bk : Dk) + ek * (ek >= 0 ? rk : fk) + Mk * (Mk >= 0 ? Pk : Sk) + ik[mk + 3] >= 0)) return !1
      }
      return !0
    }
    var pe = ik(37377);
    class ye {
      constructor(kk, ek) {
        var ik = kk.bw;
        ik.qik(new ck.b(ik));
        var Dk = new Xk.c(Pk);
        ik.nDk = Dk, Dk.blocks = [];
        var fk, Sk = {},
          rk = [];
        this.textPlanes = rk, this.PDk = () => fk.PDk(), this.T6 = kk => {
          Mk(Dk, kk), fk.T6(kk)
        }, this.Zik = (ek, ik, bk) => {
          if (!ek.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!ek.metadata[Ok.s] && !ek.metadata[Ok.k]) {
            if (!ik) {
              var Pk = Dk.bDk;
              if (ek.metadata[Ok.x] && !ek.parent) {
                Pk = rk;
                var Mk = ek.hq().HDk;
                ek.metadata[Ok.B] = Mk.center.length() + Mk.radius, ek.kH = !0
              }
              return Pk.push(ek), ek.metadata[Ok.f] = Pk, void(ek.metadata[Ok.k] = !0)
            }
            var xk = Math.floor(bk[0] / mk),
              nk = Math.floor(bk[1] / mk),
              Uk = Math.floor(bk[2] / mk),
              Hk = xk + "|" + nk + "|" + Uk,
              wk = Sk[Hk];
            if (!wk) {
              var lk = [xk * mk, nk * mk, Uk * mk],
                pk = [0, 0, 0];
              kk.Lx.Zkk(lk, null, pk), wk = Kk(pk, mk), Dk.blocks.push(wk), Sk[Hk] = wk, wk.mDk = Hk
            }
            fk.Zik(ek, bk), fk.SDk(wk, ek), wk.MDk = (wk.MDk || 0) + 1, ek.metadata[Ok.s] = wk, ek.metadata[Ok.m] = !0, ek.kH = !0
          }
        }, this.Tu = kk => {
          if (kk.metadata) {
            kk.metadata[Ok.k] && ((0, Zk.j)(kk.metadata[Ok.f], kk), kk.metadata[Ok.k] = !1), kk.metadata[Ok.f] === rk && (kk.kH = !1), kk.metadata[Ok.f] = void 0, kk.metadata[Ok.B] = void 0;
            var ek = kk.metadata[Ok.s];
            ek && ek.entries && (kk.metadata[Ok.m] && fk.removeEntry(ek, kk), ek.MDk--, ek.MDk <= 0 && (delete Sk[ek.mDk], (0, Zk.j)(Dk.blocks, ek))), fk.Tu(kk), kk.metadata[Ok.s] = null, kk.metadata[Ok.m] = !1
          }
        }, this.T_ = function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (kk.metadata[Ok.s]) {
            if (kk.metadata[Ok.m] === ek) return;
            var ik = kk.metadata[Ok.s];
            ik && ik.entries && (ek ? fk.SDk(ik, kk) : fk.removeEntry(ik, kk)), kk.metadata[Ok.m] = ek
          } else {
            if (kk.metadata[Ok.k] === ek) return;
            var Sk = kk.metadata[Ok.f] || Dk.bDk;
            ek ? Sk.push(kk) : (0, Zk.j)(Sk, kk), kk.metadata[Ok.k] = ek
          }
        };
        var Pk = () => {},
          mk = ek * kk.Lx.Ux.kkk,
          Mk = (kk, ek) => {
            kk.blocks.forEach((kk => {
              kk.Jik.KDk(ek), kk.Rik.KDk(ek), kk.rDk.forEach((kk => kk.KDk(ek))), kk.blocks && Mk(kk, ek)
            }))
          },
          Kk = (kk, ek) => {
            var ik = new bk.eH(kk[0], kk[1], kk[2]),
              Dk = new bk.eH(kk[0] + ek, kk[1] + ek, kk[2] + ek);
            return new Bk.c(ik, Dk, void 0, void 0, void 0, Pk)
          };
        fk = He(ik, Dk, kk.Lx, Kk, ((kk, ek) => {
          for (var ik = 0; ik < rk.length; ik++) {
            var Dk = rk[ik];
            Dk.isEnabled(!1) && ((0, pe.c)(Dk, ek) && Tk.h.prototype.push.call(kk, Dk))
          }
        }))
      }
    }

    function Ye(kk) {
      const {
        holderPosition: ek,
        holderRotation: ik,
        fR: Dk,
        fov: fk,
        near: Sk,
        far: bk
      } = kk.model.kR, rk = kk.CDk;
      rk.position.Z6(ek[0], ek[1], ek[2]), rk.rotation.Z6(ik[0], ik[1], ik[2]);
      const Pk = kk.camera;
      Pk.position.Z6(Dk[0], Dk[1], Dk[2]), Pk.fov = fk, Pk.minZ = Sk, Pk.maxZ = bk
    }

    function Le(kk) {
      const ek = kk.JU(),
        ik = ek,
        Dk = ik._gl;
      if (!Dk || ik.VH < 2 || ek.Xik || Dk.getParameter(Dk.DEPTH_BITS) < 24) return !1;
      const fk = kk._renderingManager,
        Sk = fk.getRenderingGroup(-1),
        bk = fk.getRenderingGroup(0),
        rk = Ek.b.prototype.render;
      return Sk.render = function(kk, ek, ik, Dk, fk, Sk, Pk, mk, Mk) {
        (kk || bk._empty) && rk.call(this, kk, ek, ik, Dk, fk, Sk, Pk, mk, Mk)
      }, bk.render = function(kk, ik, fk, bk) {
        let Pk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Kk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          xk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          nk = arguments.length > 8 ? arguments[8] : void 0;
        kk ? rk.call(this, kk, ik, fk, bk, Pk, mk, Kk, xk, nk) : (ek.setAlphaMode(Mk.c.ALPHA_DISABLE), rk.call(this, null, !1, !1, bk, Pk, mk, Kk, !1), Sk._empty || (Dk.depthRange(1, 1), rk.call(Sk, null, ik, fk, bk, Pk, mk, Kk, xk, nk), Dk.depthRange(0, 1)), rk.call(this, null, ik, fk, bk, !1, !1, !1, xk, nk))
      }, !0
    }

    function Ce(kk, ek) {
      return [ek, tk.f].map(((ek, ik) => {
        const Dk = new fk.e("light", bk.eH.FromArray(ek), kk);
        return Dk.diffuse = Sk.Color3.FromArray([1, 1, 1]), Dk.specular = Sk.Color3.FromArray([1, 1, 1]), Dk.intensity = tk.c[ik], Dk
      }))
    }
    class Ae extends Pk.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(kk) {
        var ek;
        this.heldTexture = kk, this.particleTexture = null !== (ek = null === kk || void 0 === kk ? void 0 : kk.mirror) && void 0 !== ek ? ek : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        kk && (this.particleTexture = null, (0, mk.A)(this.heldTexture), this.heldTexture = null), super.dispose(kk, ek, ik)
      }
    }
    const je = Dk.b.Zero();
    const se = {
      bik: function(kk, ek) {
        return new uk(kk, ek.eik, {
          preserveDrawingBuffer: ek.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      sDk: function(kk, ek) {
        ! function(kk, ek, ik) {
          const Dk = new ak.d(kk.engine);
          kk.bw = Dk, Dk.detachControl(), Dk.autoClear = !1, hk.c.MIN_RENDERINGGROUPS = -1;
          for (let Sk = hk.c.MIN_RENDERINGGROUPS; Sk <= 1; Sk++) Dk.setRenderingOrder(Sk, Ek.b.PainterSortCompare, Ek.b.PainterSortCompare, Ek.b.PainterSortCompare);
          Dk.setRenderingAutoClearDepthStencil(0, !1), vk.b.Enabled = !1, kk.yDk = new ye(kk, Math.round(ek.YDk)), kk.CDk = new Qk.b("camHolder", Dk), kk.camera = new zk.d("camera", new bk.eH(0, 0, 0), Dk), kk.camera.parent = kk.CDk, Ye(kk), (0, tk.i)(kk, ((kk, ek, ik) => (0, Wk.i)(ek, ik, kk.bw))), Dk.clearColor = Sk.e.FromArray(ek.clearColor), Dk.ambientColor = Sk.Color3.FromArray(ek.ambientColor);
          const fk = ik(Dk, ek.jDk);
          Dk.onNewLightAddedObservable.add((kk => {
            fk.some((ek => ek === kk)) || console.error(`Light "${kk.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Dk.skipPointerMovePicking = !0
        }(kk, ek, Ce), Le(kk.bw)
      },
      LDk: Ye,
      setBabylonFog: function(kk, ek, ik, Dk) {
        const fk = kk.bw;
        fk.fogMode = 3, fk.fogStart = ek, fk.fogEnd = ik, fk.fogColor.set(Dk[0], Dk[1], Dk[2])
      },
      VDk: function(kk, ek, ik) {
        return kk.engine.VH >= 2 && (kk.FDk || (kk.FDk = new Vk(kk.bw, kk.uDk)), !kk.FDk.failed) ? kk.FDk.Aq(ek, ik) : new Ae(ek, ik, kk.bw)
      },
      IDk: function(kk, ek) {
        kk.bw.ZY.forEach((ik => {
          if (ik instanceof sk) return void ik.T6(ek, kk.Lx.Xx);
          const Dk = ik;
          if (Dk.emitter.getConnectedParticleSystems)
            for (const kk of Dk._particles) kk.position.set(kk.position.x - ek[0], kk.position.y - ek[1], kk.position.z - ek[2]);
          else {
            if (!Dk.worldOffset) throw new Error("Particle system has no world offset");
            Dk.worldOffset.x = -kk.Lx.Xx[0], Dk.worldOffset.y = -kk.Lx.Xx[1], Dk.worldOffset.z = -kk.Lx.Xx[2]
          }
        }))
      },
      linesFromArrays: function(kk, ek, ik) {
        const Dk = new rk.c(ek, kk.bw, null, void 0, void 0, !1);
        return (0, Wk.e)(ek, ik, kk.bw, Dk), Dk
      },
      rw: Me,
      qDk: function(kk, ek) {
        return je.origin.Fs(ek.origin), je.direction.Fs(ek.direction), je.length = ek.length, je.epsilon = ek.epsilon, je.qDk(kk, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40707: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Xk,
      g: () => pk,
      j: () => gk
    });
    var Dk = ik(39829),
      fk = ik(40711),
      Sk = ik(40738),
      bk = ik(40720),
      rk = ik(37416),
      Pk = ik(37430),
      mk = ik(37435),
      Mk = ik(37441),
      Kk = ik(36812),
      xk = ik(36821),
      nk = ik(40724),
      Uk = ik(36789),
      Hk = ik(36798),
      wk = ik(36773);

    function lk(kk, ek) {
      return Object.assign((function(kk, ik, Dk, fk) {
        return ek(this.featureState, kk, ik, Dk, fk)
      }), {
        sU: kk
      })
    }

    function pk(kk) {
      const ek = class extends nk.c {
          constructor(ek, ik) {
            const Dk = (0, Hk.Y)(ek),
              fk = Dk && (0, Hk.w)(Dk, kk.name);
            for (var Sk = arguments.length, bk = new Array(Sk > 2 ? Sk - 2 : 0), rk = 2; rk < Sk; rk++) bk[rk - 2] = arguments[rk];
            super(ek, kk.name, kk.priority, fk ? fk.defines : kk.defines(...bk), !1), this.featureState = void 0, this.featureState = ik, this._pluginManager._addPlugin(this), this._enable(!0), (0, Hk.z)(this._material, kk, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return kk.className
          }
          isCompatible(kk) {
            return kk === wk.d.GLSL || kk === wk.d.WGSL
          }
        },
        ik = (0, Uk.g)(kk);
      for (const [Dk, fk] of Object.entries(Uk.b)) {
        const Sk = kk[Dk];
        if (Sk) {
          const kk = ik[Dk];
          Object.defineProperty(ek.prototype, fk, {
            value: lk(Sk, kk),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ek
    }
    class yk extends(pk(rk.c)) {}
    var Yk = ik(39377),
      Lk = ik(40727);
    const Ck = new WeakMap;

    function Ak(kk, ek, ik) {
      let Dk = Ck.get(ik);
      Dk || (Dk = new Map, Ck.set(ik, Dk));
      const {
        url: fk
      } = kk;
      let Sk = Dk.get(fk);
      return Sk || (Sk = async function(kk, ek, ik) {
        var Dk;
        const {
          width: fk,
          height: Sk
        } = kk.getSize(), rk = Math.round(Sk / fk), Pk = kk.getInternalTexture(), mk = ek && ek.byteLength === fk * fk * rk * 4 ? ek : null !== (Dk = jk.get(Pk)) && void 0 !== Dk ? Dk : kk._readPixelsSync(), Mk = new Lk.c(mk, fk, fk, rk, Yk.d.TEXTUREFORMAT_RGBA, ik, !0, !1, bk.d.NEAREST_NEAREST_MIPLINEAR);
        jk.has(Pk) || (! function(kk, ek) {
          const ik = ek.createRawTexture(new Uint8Array(4), 1, 1, Yk.d.TEXTUREFORMAT_RGBA, !1, !1, bk.d.NEAREST_SAMPLINGMODE);
          kk._hardwareTexture.release(), ek.unbindAllTextures(), ik._swapAndDie(kk, !1)
        }(Pk, ik.JU()), jk.set(Pk, mk));
        return Mk
      }(kk, ek, ik), Dk.set(fk, Sk), Sk.catch((() => {
        Dk.delete(fk)
      }))), Sk
    }
    const jk = new WeakMap;
    var sk = ik(37444);
    class dk extends(pk(Pk.j)) {
      constructor(kk, ek) {
        super(kk, ek), ek.textures.forEach(((kk, ek) => {
          kk.mirror.onLoadObservable.add((kk => {
            this.setTextureArrayData(kk, ek).catch((kk => {
              console.error(`Failed to build texture array for atlas ${ek}`, kk)
            }))
          }))
        })), (0, sk.i)(ek, kk.shaderLanguage)
      }
      async setTextureArrayData(kk, ek) {
        var ik, Dk;
        const fk = this.featureState,
          {
            width: Sk,
            height: bk
          } = kk.getSize(),
          rk = fk.useWebGL2 ? await Ak(kk, null !== (ik = null === (Dk = fk.sources.pixels) || void 0 === Dk ? void 0 : Dk[ek]) && void 0 !== ik ? ik : null, this._material.XF()) : null;
        (0, sk.e)(this._material, fk, ek, rk, Sk, Math.round(bk / Sk), this._material.shaderLanguage)
      }
    }
    var Vk = ik(40729),
      Fk = ik(39887),
      uk = ik(36690),
      qk = ik(40732),
      Ik = ik(40001),
      zk = ik(39870),
      Qk = ik(40693),
      vk = ik(37189),
      Ek = ik(40734);
    class hk extends Vk.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ak = {
      Mesh: qk.d,
      TransformNode: Qk.b,
      hU: Vk.d,
      VertexBuffer: Vk.h,
      BoundingInfo: Fk.b,
      eH: uk.eH,
      ArenaBuffer: hk,
      SubMesh: zk.e,
      VertexData: Ik.b,
      MirroredGeometry: Ek.c,
      meshFromArrays: Ek.e,
      plainMeshFromArrays: Ek.i
    };
    (0, vk.e)(ak);
    var Wk = ik(37028);
    class tk extends(pk(Mk.f)) {
      constructor(kk, ek) {
        if (super(kk, ek), kk instanceof Dk.StandardMaterial && ek.dirLightCount > 0) {
          const ek = kk,
            ik = ek._blockDirtyMechanism;
          ek._blockDirtyMechanism = !0, kk.disableLighting = !0, ek._blockDirtyMechanism = ik;
          const Dk = (0, Hk.Y)(kk);
          Dk && (Dk.disableLighting = !0, (0, Hk.V)(Dk))
        }(0, Wk.j)(kk)
      }
      dispose(kk) {
        (0, Wk.m)(this._material), super.dispose(kk)
      }
    }

    function Xk(kk, ek) {
      if (!(ek instanceof Dk.StandardMaterial) || ek.specularTexture) return;
      const {
        r: ik,
        g: fk,
        b: Sk
      } = ek.specularColor;
      0 === ik && 0 === fk && 0 === Sk && (kk.SPECULARTERM = !1)
    }(0, Mk.e)({
      disableUnusedSpecularTerm: Xk
    });
    var Bk = ik(36903),
      ck = ik(37199);
    const Tk = new RegExp(`^#define ${mk.d}\\s*$`, "m");
    class Zk extends(pk(mk.g)) {
      constructor(kk, ek) {
        super(kk, ek), this.aU = !1, ek.ditherOnlyWhileFading && (ck.i.add(kk), this.prewarmDitherTwins(kk))
      }
      prewarmDitherTwins(kk) {
        const ek = new WeakSet;
        kk.onEffectCreatedObservable.add((ik => {
          let {
            effect: Dk,
            subMesh: fk
          } = ik;
          if (this.featureState.prewarmingDither || ek.has(Dk)) return;
          ek.add(Dk);
          const Sk = null === fk || void 0 === fk ? void 0 : fk.getMesh();
          Sk && !Tk.test(Dk.defines) && kk.XF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Sk) || ek.delete(Dk)
          }))
        }))
      }
      prewarmDither(kk) {
        if (this.aU || kk.RL()) return !1;
        const ek = new zk.e(0, 0, 0, 0, 0, kk, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(kk, ek)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ek.effect
      }
      dispose(kk) {
        this.aU = !0, super.dispose(kk)
      }
    }
    const Ok = new Map;

    function gk(kk, ek) {
      Ok.set(kk, ek)
    }
    gk(rk.c, yk), gk(Pk.j, dk), gk(mk.g, Zk), gk(Mk.f, tk), (0, Kk.b)({
      create: (kk, ek) => {
        const ik = new Dk.StandardMaterial(kk.name, ek);
        return (0, Bk.m)(kk, ik), ik.detailMap._pluginDefineNames
      },
      write: (kk, ek, ik) => {
        (0, Bk.S)(kk.mirror, ek, ik)
      },
      addFeature: (kk, ek, ik) => {
        const Dk = Ok.get(ek.feature);
        if (!Dk) throw new Error(`${ek.feature.name} has no plugin class (registerPluginClass)`);
        new Dk(kk.mirror, ek.state, ...ik)
      },
      texture: (kk, ek, ik) => {
        let {
          url: Dk,
          noMipmap: fk,
          invertY: Sk,
          samplingMode: rk,
          data: Pk,
          sets: mk
        } = ik;
        if (!Pk) {
          const ik = new bk.d(Dk, ek, fk, Sk, rk);
          return Object.assign(ik, mk), void(0, xk.G)(kk, ik)
        }
        const Mk = {},
          Kk = new Promise(((kk, ek) => {
            Mk.onLoad = kk, Mk.onError = (kk, ik) => {
              ek(new Error(`${Pk.context}: ${(null===ik||void 0===ik?void 0:ik.message)||kk||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: nk,
            bytes: Uk,
            label: Hk
          } = Pk,
          wk = {
            noMipmap: fk,
            invertY: !1,
            samplingMode: rk,
            ...Mk,
            mimeType: nk,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          lk = new bk.d(null, ek, wk);
        Bk.o.set(lk, Kk), Object.assign(lk, mk), lk.updateURL(Dk, Uk);
        const pk = lk.getInternalTexture();
        pk && (pk.label = Hk), kk.uvSet = lk.coordinatesIndex, kk.matrix.set((0, Bk.H)(lk)), (0, xk.G)(kk, lk)
      },
      cube: (kk, ek, ik) => {
        let {
          rootUrl: Dk,
          files: Sk,
          noMipmap: rk,
          luminance: Pk
        } = ik;
        const {
          samplingMode: mk
        } = kk.sampler, Mk = mk === (0, xk.y)(rk) ? null : () => {
          (0, Bk.E)(Kk, mk)
        }, Kk = new fk.b(Dk, ek, null, rk, Sk, Mk, null, (0, xk.x)(Pk));
        Kk.coordinatesMode = bk.d.SKYBOX_MODE, (0, xk.G)(kk, Kk)
      },
      canvas: (kk, ek, ik) => {
        let {
          width: Dk,
          height: fk,
          mipmaps: rk,
          samplingMode: Pk,
          hasAlpha: mk = !1,
          wrap: Mk = bk.d.CLAMP_ADDRESSMODE
        } = ik;
        const Kk = new Sk.d(ek, {
          width: Dk,
          height: fk
        }, kk, rk, Pk);
        Kk.hasAlpha = mk, Kk.wrapU = Mk, Kk.wrapV = Mk;
        const xk = (0, Bk.u)(Kk);
        return (0, Bk.x)(xk, Kk), xk
      }
    })
  },
  40734: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Mk,
      e: () => Kk,
      i: () => xk
    });
    var Dk = ik(40729),
      fk = ik(39623),
      Sk = ik(39887),
      bk = ik(40010),
      rk = ik(40732),
      Pk = ik(40001),
      mk = ik(37075);
    class Mk extends bk.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (kk, ek) => {
          this.releaseUnlessInstanced(ek)
        }, this.onLinked = null
      }
      link(kk) {
        var ek;
        (0, mk.m)(kk), this.model = kk, null === (ek = this.onLinked) || void 0 === ek || ek.call(this, kk)
      }
      relink() {
        this.release();
        const kk = [];
        for (const fk of Object.values(this._vertexBuffers))
          if (!fk.getIsInstanced()) {
            const {
              byteOffset: ek,
              byteStride: ik,
              type: Dk,
              normalized: Sk
            } = fk;
            kk.push({
              kind: fk.getKind(),
              data: fk.getData(),
              offset: ek,
              stride: ik,
              components: fk.getSize(),
              glType: Dk,
              isNormalized: Sk
            })
          } const ek = this._indices.length ? this._indices : null,
          {
            minimum: ik,
            maximum: Dk
          } = this.extend;
        this.link(new mk.c(kk, ek, this.getTotalVertices(), new Float64Array(ik.Tik()), new Float64Array(Dk.Tik())))
      }
      copy(kk) {
        if (!this.model) return super.copy(kk);
        const ek = new Mk(kk, this.XF()),
          ik = this.oik(void 0, !0);
        ik && ek.setIndices(ik);
        let bk = !1;
        for (const Sk in this._vertexBuffers) {
          const kk = this._vertexBuffers[Sk],
            ik = kk.getData();
          if (!ik) continue;
          const rk = kk.getSize(),
            {
              type: Pk,
              byteOffset: mk,
              byteStride: Mk,
              normalized: Kk
            } = kk;
          bk ||= kk.isUpdatable();
          const xk = kk.getIsInstanced() ? (ik instanceof Array ? 4 * ik.length : ik.byteLength) / Mk : this.getTotalVertices(),
            nk = (0, fk.q)(ik, rk, Pk, mk, Mk, xk, !0),
            Uk = {
              updatable: kk.isUpdatable(),
              stride: rk,
              type: Pk,
              normalized: Kk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            };
          ek.setVerticesBuffer(new Dk.h(this.JU(), nk, Sk, Uk), xk)
        }
        return ek._updatable = bk, ek._boundingInfo = new Sk.b(this.extend.minimum, this.extend.maximum), ek.relink(), ek
      }
      static mergeMeshes(kk, ek, ik, Dk, fk, Sk) {
        const Pk = kk[0].XF(),
          mk = new rk.d(kk[0].name + "_merged", Pk),
          Kk = new Mk(bk.e.RandomId(), Pk, void 0, !1, mk);
        try {
          if (!rk.d.MergeMeshes(kk, ek, ik, mk, fk, Sk)) return mk.dispose(), null
        } catch (xk) {
          throw mk.dispose(), xk
        }
        return Kk.relink(), mk
      }
      removeVerticesData(kk) {
        this.releaseUnlessInstanced(kk), super.removeVerticesData(kk)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(kk) {
        var ek;
        kk && null !== (ek = this.getVertexBuffer(kk)) && void 0 !== ek && ek.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, mk.s)(this.model), this.model = null)
      }
    }

    function Kk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new rk.d(kk, ik);
      const fk = (0, mk.i)(ek),
        {
          positions: Sk,
          normals: Kk,
          uvs: xk,
          indices: nk,
          named: Uk = {}
        } = ek,
        Hk = new Pk.b;
      Hk.positions = Sk, Hk.normals = null !== Kk && void 0 !== Kk ? Kk : null, Hk.uvs = null !== xk && void 0 !== xk ? xk : null, Hk.indices = nk;
      const wk = new Mk(bk.e.RandomId(), ik, Hk, !1, Dk);
      for (const {
          kind: bk,
          components: rk
        }
        of fk.vertexAttributes) bk in Uk && Dk.setVerticesData(bk, Uk[bk], !1, rk);
      return wk.link(fk), Dk
    }

    function xk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const fk = new rk.d(kk, ik),
        {
          positions: Sk,
          normals: bk,
          uvs: mk,
          indices: Mk
        } = ek;
      return Object.assign(new Pk.b, {
        positions: Sk,
        normals: bk,
        uvs: mk,
        indices: Mk
      }).applyToMesh(fk, Dk), fk
    }
  },
  41177: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => wk,
      f: () => rk,
      j: () => bk,
      n: () => mk
    });
    var Dk = ik(36868),
      fk = ik(38294),
      Sk = ik(38287);

    function bk(kk, ek, ik, Dk) {
      const fk = Sk.t;
      ek.fill(0), kk.gravity.toArray(ek, fk.gravity), kk.colorDead.toArray(ek, fk.colorDead), ik[fk.ramp] = kk.useRampGradients ? 1 : 0;
      const bk = kk.getColorGradients(),
        rk = xk(kk, bk, "colour", Dk);
      ik[fk.colorCount] = rk;
      for (let Sk = 0; Sk < rk; Sk++) {
        var Pk;
        const kk = bk[nk(bk, Sk)];
        ek[fk.colorPositions + Sk] = kk.gradient, kk.color1.toArray(ek, fk.color1 + 4 * Sk), (null !== (Pk = kk.color2) && void 0 !== Pk ? Pk : kk.color1).toArray(ek, fk.color2 + 4 * Sk)
      }
      const mk = kk.getVelocityGradients(),
        Mk = xk(kk, mk, "Cw", Dk);
      ik[fk.velocityCount] = Mk;
      for (let Sk = 0; Sk < Mk; Sk++) pk(ek, fk.Cw + 4 * Sk, mk[nk(mk, Sk)]);
      const Kk = kk.useRampGradients ? kk.getColorRemapGradients() : null,
        Uk = xk(kk, Kk, "colour remap", Dk);
      ik[fk.remapCount] = Uk;
      for (let Sk = 0; Sk < Uk; Sk++) pk(ek, fk.remap + 4 * Sk, Kk[nk(Kk, Sk)])
    }

    function rk() {
      return {
        key: [],
        texels: new Uint8Array(4 * Sk.k)
      }
    }
    const Pk = [];

    function mk(kk, ek) {
      return Mk(kk, Pk), !lk(Pk, ek.key) && (ek.key.length = 0, ek.key.push(...Pk), ek.key.length > 0 && function(kk, ek) {
        for (let ik = 0; ik < Sk.k; ik++) fk.m.GetCurrentGradient(ik / Sk.k, kk, ((kk, ek, ik) => {
          Dk.Color3.LerpToRef(kk.color, ek.color, ik, Kk)
        })), ek[4 * ik] = 255 * Kk.r, ek[4 * ik + 1] = 255 * Kk.g, ek[4 * ik + 2] = 255 * Kk.b, ek[4 * ik + 3] = 255
      }(kk.getRampGradients(), ek.texels), !0)
    }

    function Mk(kk, ek) {
      ek.length = 0;
      const ik = kk.useRampGradients ? kk.getRampGradients() : null;
      if (null !== ik && void 0 !== ik && ik.length) {
        ek.push(ik.length);
        for (const kk of ik) ek.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
      }
    }
    const Kk = new Dk.Color3;

    function xk(kk, ek, ik, Dk) {
      return ek ? ek.length > Sk.b ? (Dk(`particleStops:${ik}`, `GPU particles use the first 2 and last ${Sk.b-2} of more than ${Sk.b} ${ik} gradient stops (${kk.name})`), Sk.b) : ek.length : 0
    }

    function nk(kk, ek) {
      return ek < 2 || kk.length <= Sk.b ? ek : kk.length - Sk.b + ek
    }
    const Uk = new Float32Array(Sk.p),
      Hk = new Uint32Array(Uk.buffer);

    function wk(kk, ek, ik) {
      return bk(kk, Uk, Hk, ik), ek && lk(Hk, ek) ? null : Hk.slice()
    }

    function lk(kk, ek) {
      if (kk.length !== ek.length) return !1;
      for (let ik = 0; ik < kk.length; ik++)
        if (kk[ik] !== ek[ik]) return !1;
      return !0
    }

    function pk(kk, ek, ik) {
      var Dk;
      kk[ek] = ik.gradient, kk[ek + 1] = ik.factor1, kk[ek + 2] = null !== (Dk = ik.factor2) && void 0 !== Dk ? Dk : ik.factor1
    }
  },
  41171: (kk, ek, ik) => {
    function Dk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ek = new Set;
      return (ik, Dk) => {
        ek.has(ik) || (ek.add(ik), console.warn(kk + Dk))
      }
    }
    ik.d(ek, {
      d: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);