export const id = 0;
export const ids = [0];
export const modules = {
  40550: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      CapeMaterialPlugin: () => ik,
      HueTintMaterialPlugin: () => Yk,
      LifeformMaterialPlugin: () => Lk,
      OverlayMaterialPlugin: () => Ok
    });
    var Rk = Bk(40554),
      tk = Bk(37693);
    class ak extends((0, Rk.f)(tk.e)) {}(0, Rk.i)(tk.e, ak);
    var Xk = Bk(36826);
    class bk extends((0, Rk.f)(Xk.h)) {}(0, Rk.i)(Xk.h, bk);
    var wk = Bk(37540);
    class dk extends((0, Rk.f)(wk.d)) {}(0, Rk.i)(wk.d, dk);
    var sk = Bk(37061),
      Vk = Bk(39674),
      Jk = Bk(37055);
    class Ak extends((0, Rk.f)(Jk.f)) {
      constructor(kk, Fk, Bk) {
        super(kk, Fk, Bk), (0, sk.k)(kk)
      }
      dispose(kk) {
        (0, sk.o)(this._material), super.dispose(kk)
      }
    }(0, Rk.i)(Jk.f, Ak), (0, Jk.j)({
      disableUnusedSpecularTerm: Rk.d,
      isLightingDisabled: kk => kk instanceof Vk.StandardMaterial && kk.disableLighting
    });
    var ek = Bk(38330);
    class yk extends((0, Rk.f)(ek.d)) {}(0, Rk.i)(ek.d, yk);
    var fk = Bk(38431),
      mk = Bk(36920),
      Wk = Bk(37794),
      vk = Bk(36876);
    class ik extends((0, Rk.f)(fk.b)) {}(0, Rk.i)(fk.b, ik);
    class Yk extends((0, Rk.f)(mk.e)) {}(0, Rk.i)(mk.e, Yk);
    class Lk extends((0, Rk.f)(Wk.m)) {}(0, Rk.i)(Wk.m, Lk);
    class Ok extends((0, Rk.f)(vk.b)) {}(0, Rk.i)(vk.b, Ok)
  },
  40986: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      addBabylonLights: () => WF,
      default: () => YF
    });
    var Rk = Bk(40990),
      tk = (Bk(39368), Bk(40541), Bk(39897), Bk(40997)),
      ak = Bk(39236),
      Xk = Bk(36911),
      bk = Bk(36754),
      wk = Bk(41009),
      dk = Bk(41017),
      sk = Bk(36867),
      Vk = (Bk(40554), Bk(41024)),
      Jk = Bk(41021),
      Ak = Bk(38359),
      ek = Bk(41033),
      yk = Bk(39270),
      fk = Bk(38339);
    const mk = "gpuParticles",
      Wk = fk.l,
      vk = kk => kk / 4,
      ik = kk => `gpuParticleSystem[${kk>>2}].${"xyzw"[3&kk]}`,
      Yk = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${fk.b}\n#define COLOR_POSITIONS ${vk(Wk.colorPositions)}\n#define COLOR1 ${vk(Wk.color1)}\n#define COLOR2 ${vk(Wk.color2)}\n#define VELOCITY ${vk(Wk.bs)}\n#define REMAP ${vk(Wk.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${fk.i/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${ik(Wk.gravity)}, ${ik(Wk.gravity+1)}, ${ik(Wk.gravity+2)}); }\nint colorCount() { return int(${ik(Wk.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${vk(Wk.colorDead)}]; }\nint velocityCount() { return int(${ik(Wk.velocityCount)}); }\nint remapCount() { return int(${ik(Wk.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    yk.d.ShadersStore[`${mk}VertexShader`] = Yk, yk.d.ShadersStore[`${mk}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Lk = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Ok = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Ek = Bk(38334),
      Sk = Bk(41039);
    class Nk extends Ek.c {
      constructor(kk, Fk, Bk, Rk) {
        super(kk, Fk, Bk), this.renderer = Bk, this.ef = Rk, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(fk.i), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Sk.h)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (kk, Fk) => {
          const {
            engine: Bk,
            perRow: Rk
          } = this, tk = Bk._gl;
          Bk._bindTextureDirectly(tk.TEXTURE_2D, this.records, !0), Bk._unpackFlipY(!1);
          const ak = this.ring.recordBits;
          for (let Xk = kk; Xk < Fk;) {
            const kk = Math.floor(Xk / Rk),
              Bk = Math.min(Fk, (kk + 1) * Rk);
            tk.texSubImage2D(tk.TEXTURE_2D, 0, Xk % Rk * 4, kk, 4 * (Bk - Xk), 1, tk.RGBA_INTEGER, tk.UNSIGNED_INT, ak, Xk * fk.d), Xk = Bk
          }
          Bk._bindTextureDirectly(tk.TEXTURE_2D, null)
        }, this.id = kk;
        const tk = Rk.ne();
        this.engine = tk;
        const ak = Math.max(1, Fk);
        this.perRow = Math.min(ak, 256), this.records = tk.createRawTexture(null, 4 * this.perRow, Math.ceil(ak / this.perRow), Vk.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Vk.c.TEXTURE_NEAREST_SAMPLINGMODE, null, Vk.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ef.getAnimationRatio() || 1;
        const Fk = this.ef.getFrameId();
        if (Fk === this.animatedFrame) return !1;
        const Bk = super.animate(kk);
        return Bk && (this.animatedFrame = Fk, this.ring.takeUploads(this.uploadSlots)), Bk
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(kk) {
        (0, Sk.i)(this, this.uniforms, this.uniformBits, kk);
        for (const Bk of fk.j) this.uniforms[Bk] = this.uniformBits[Bk];
        var Fk;
        (0, Sk.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Fk = this.ramp) || void 0 === Fk || Fk.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Jk.d.CreateRGBATexture(this.rampTexels.texels, fk.g, 1, this.ef, !1, !1, Vk.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var kk;
        this.records.dispose(), null === (kk = this.ramp) || void 0 === kk || kk.dispose(), this.ramp = null
      }
    }
    class Hk {
      constructor(kk) {
        this.ef = kk, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, ek.b)(), this.engine = kk.ne(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Jk.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, kk, !1, !1, Vk.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      iH(kk, Fk) {
        const Bk = 256 * this.engine.getCaps().maxTextureSize;
        Fk > Bk && this.warnOnce(`capacity:${kk}`, `particle system ${kk} holds ${Bk} particles, not ${Fk}: its records texture's limit`);
        const Rk = new Nk(kk, Math.min(Fk, Bk), this, this.ef);
        return this.ef.addParticleSystem(Rk), Rk
      }
      canDraw(kk) {
        var Fk, Bk;
        if (this.failed || null === (Fk = kk.texture) || void 0 === Fk || null === (Bk = Fk.mirror) || void 0 === Bk || !Bk.isReady()) return !1;
        for (const Rk of (0, Ak.m)(kk.blendMode))
          if (!this.effectFor(Rk).isReady()) return !1;
        return !0
      }
      disposeStopped(kk) {
        this.ef._toBeDisposed.push(kk)
      }
      remove(kk) {
        this.ef.removeParticleSystem(kk), kk.releaseGl()
      }
      render(kk) {
        var Fk;
        if (!kk.isReady() || !kk.hasLiveParticles()) return 0;
        const {
          engine: Bk,
          ef: Rk,
          frame: tk
        } = this;
        kk.prepareDraw(this.warnOnce), kk.drawOffset(tk, 0), tk[3] = kk.drawTime();
        const ak = kk.ring.drawStart(),
          Xk = kk.ring.drawCount(),
          bk = null !== (Fk = kk.ramp) && void 0 !== Fk ? Fk : this.whiteRamp;
        Bk.setState(!1);
        for (const wk of (0, Ak.m)(kk.blendMode)) {
          const Fk = this.effectFor(wk);
          Bk.enableEffect(Fk), Fk.setTexture("gpuParticleTexture", kk.texture.mirror), Fk.setTexture("gpuParticleRampTexture", bk), Fk._bindTexture("gpuParticleRecords", kk.records), Fk.setMatrix("gpuParticleView", Rk.getViewMatrix()), Fk.setMatrix("gpuParticleProjection", Rk.getProjectionMatrix()), Fk.setFloatArray4("gpuParticleSystem", kk.uniforms), Fk.setFloat4("gpuParticleFrame", tk[0], tk[1], tk[2], tk[3]), Fk.setFloat2("gpuParticleRange", ak, Xk), Fk.setFloat("gpuParticleRamp", kk.uniforms[fk.l.ramp]), Bk.bindBuffers(this.vertexBuffers, null, Fk), Bk.setAlphaMode((0, Ak.j)(wk)), Bk.drawArraysType(Vk.c.MATERIAL_TriangleStripDrawMode, 0, 4, Xk), Fk._bindTexture("gpuParticleRecords", null)
        }
        return Bk.setAlphaMode(Vk.c.ALPHA_DISABLE), Xk
      }
      awaitLink(kk) {
        const Fk = kk.getPipelineContext(),
          Bk = this.engine._gl;
        !this.failed && Bk && (!Fk || Fk.isParallelCompiled && !Fk.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Fk.isParallelCompiled && Fk.program && (Bk.getProgramParameter(Fk.program, Bk.LINK_STATUS) || this.fail(Bk.getProgramInfoLog(Fk.program) || "a program did not link")))
      }
      effectFor(kk) {
        return kk === Ak.d ? this.multiplyEffect : this.effect
      }
      createEffect(kk) {
        return this.engine.createEffect(mk, [], Lk, Ok, kk, void 0, void 0, ((kk, Fk) => {
          this.fail(Fk)
        }))
      }
      fail(kk) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${kk}`);
          for (const kk of this.ef.fY.slice()) kk instanceof Nk && kk.disposeOnStop && kk.dispose()
        }
      }
    }
    var uk = Bk(39615),
      Mk = Bk(40536),
      gk = Bk(39347),
      Uk = Bk(39567),
      ck = Bk(39560),
      Gk = Bk(39486),
      Tk = Bk(40601),
      rk = Bk(37274),
      Dk = Bk(41045),
      zk = Bk(41049),
      Pk = Bk(41056),
      hk = Bk(39506),
      qk = Bk(37151),
      Ck = Bk(37145),
      Zk = Bk(39721),
      pk = Bk(37223),
      Kk = Bk(37172);

    function xk(kk) {
      if (kk.visibility < 1 || !kk.isVisible || !kk.isEnabled() || kk.metadata[Kk.e] || !kk.isReady()) return !0;
      const Fk = kk.AY;
      if (!Fk || 0 === Fk.length) return !0;
      for (let Bk = 0; Bk < Fk.length; Bk++) {
        const Rk = Fk[Bk],
          tk = Rk.Ry();
        if (!tk || !tk.isReadyForSubMesh(kk, Rk, !1)) return !0
      }
      return !1
    }
    class jk {
      constructor(kk, Fk) {
        this.SJ = kk, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Fk.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      UA(kk) {
        var Fk;
        const Bk = this.armed;
        if (this.armed = !1, this.vis = null, !Bk) return !1;
        this.culled = 0;
        const {
          SJ: Rk
        } = this, tk = null === (Fk = Rk.VY) || void 0 === Fk ? void 0 : Fk.visibility;
        if (!tk || !kk || Rk.Ly.Oy) return !1;
        if (!(Rk.iJ.lBk[0] >= pk.i)) return !1;
        const ak = kk.getProjectionMatrix().m;
        if (0 !== ak[15]) return !1;
        const Xk = Rk.CJ,
          bk = kk.globalPosition,
          wk = this.eye;
        return wk[0] = bk.x + Xk[0], wk[1] = bk.y + Xk[1], wk[2] = bk.z + Xk[2], !!tk.eyeClear(wk[0], wk[1], wk[2], kk.minZ, ak, Rk.iJ) && (this.vis = tk, this.passable.clear(), this.count = 0, !0)
      }
      see(kk, Fk) {
        const Bk = this.count++;
        if (Bk === this.cellSlots.length) {
          const kk = new Int32Array(2 * Bk);
          kk.set(this.cellSlots), this.cellSlots = kk
        }
        this.cellSlots[Bk] = Fk, this.meshes[Bk] = kk
      }
      seeThrough(kk) {
        this.passable.add(kk)
      }
      finish(kk, Fk) {
        const {
          vis: Bk,
          eye: Rk,
          meshes: tk,
          count: ak,
          cellSlots: Xk
        } = this, {
          iJ: bk
        } = this.SJ, [wk, dk] = bk.lBk, sk = null !== Bk && Bk.update(Rk[0], Rk[1], Rk[2], bk.I9, wk, dk, this.passable);
        let Vk = 0;
        for (let Jk = 0; Jk < ak; Jk++) {
          const Rk = tk[Jk];
          if (sk) {
            const kk = 3 * Xk[Jk];
            if (kk >= 0 && !Bk.isDrawn(Fk[kk], Fk[kk + 1], Fk[kk + 2])) {
              Vk++;
              continue
            }
          }
          hk.c.prototype.push.call(kk, Rk)
        }
        tk.fill(null, 0, ak), this.count = 0, this.vis = null, this.culled = Vk
      }
    }
    var lk = Bk(37206),
      nk = Bk(37163),
      Ik = Bk(39695),
      Qk = Bk(41060),
      kF = Bk(39703),
      FF = Bk(39628);
    let BF = 1;
    const RF = new WeakSet;

    function tF() {
      return BF
    }

    function aF() {
      BF = BF >= 1073741823 ? 1 : BF + 1
    }

    function XF(kk) {
      const Fk = kk.metadata;
      if (!Fk || !0 !== Fk[Ck.t]) return;
      const Bk = Fk[Ck.A],
        Rk = null === Bk || void 0 === Bk ? void 0 : Bk._noaStamps;
      if (!Bk || !Rk) return;
      const tk = Bk.entries.indexOf(kk);
      tk >= 0 && (Rk[tk] = 0)
    }

    function bF(kk) {
      const Fk = kk.AY;
      for (let Bk = 0; Bk < Fk.length; Bk++) {
        const kk = Fk[Bk].Ry();
        if (kk && !kk.isFrozen) return !1
      }
      for (let Bk = 0; Bk < Fk.length; Bk++) {
        const kk = Fk[Bk].Ry();
        kk && RF.add(kk)
      }
      return !0
    }
    let wF = !1;
    const dF = new WeakSet;

    function sF(kk, Fk) {
      const Bk = kk[Fk];
      if ("function" !== typeof Bk) throw new Error(`terrainDrawState: Babylon has no ${Fk} to hook`);
      return Bk
    }

    function VF(kk, Fk, Bk, Rk, tk) {
      const ak = Bk.iJ.I9,
        Xk = new Map;
      let bk = 0;
      const wk = new jk(Bk, kk),
        dk = new lk.c(ak, kk.ne());
      ! function(kk) {
        if (dF.has(kk) || (dF.add(kk), kk.onContextLostObservable.add(aF), kk.onContextRestoredObservable.add(aF)), wF) return;
        wF = !0;
        const Fk = Qk.c.prototype,
          Bk = sF(Fk, "_markSubMeshesAsDirty");
        Object.assign(Fk, {
          _markSubMeshesAsDirty(kk) {
            Bk.call(this, kk), XF(this)
          }
        });
        const Rk = sF(FF.b.prototype, "_syncParentEnabledState");
        Object.assign(FF.b.prototype, {
          _syncParentEnabledState() {
            Rk.call(this), XF(this)
          }
        });
        const tk = sF(kF.d.prototype, "resetDrawCache");
        kF.d.prototype.resetDrawCache = function(kk, Fk) {
          tk.call(this, kk, Fk), XF(this.getMesh())
        };
        const ak = Ik.c.prototype,
          Xk = sF(ak, "markDirty");
        ak.markDirty = function(kk) {
          Xk.call(this, kk), RF.has(this) && aF()
        };
        const bk = sF(ak, "_markAllSubMeshesAsDirty");
        Object.assign(ak, {
          _markAllSubMeshesAsDirty(kk) {
            bk.call(this, kk), RF.has(this) && aF()
          }
        })
      }(kk.ne());
      let sk = new Float64Array(384),
        Vk = new Int32Array(64),
        Jk = new Uint8Array(64),
        Ak = new Float64Array(64),
        ek = new Int32Array(192),
        yk = 0;
      const fk = [],
        mk = new Float64Array(24),
        Wk = () => {
          const kk = fk.pop();
          return void 0 !== kk ? (Vk[kk] = 0, kk) : (yk === Vk.length && (sk = JF(sk, new Float64Array(2 * sk.length)), Vk = JF(Vk, new Int32Array(2 * Vk.length)), Jk = JF(Jk, new Uint8Array(2 * Jk.length)), Ak = JF(Ak, new Float64Array(2 * Ak.length)), ek = JF(ek, new Int32Array(2 * ek.length))), yk++)
        },
        vk = kk => {
          const Fk = 6 * kk._noaSlot,
            Bk = kk.RRk[0],
            Rk = kk.RRk[1];
          sk[Fk] = Bk.x, sk[Fk + 1] = Bk.y, sk[Fk + 2] = Bk.z, sk[Fk + 3] = Rk.x, sk[Fk + 4] = Rk.y, sk[Fk + 5] = Rk.z
        },
        ik = (kk, Fk, Bk) => {
          if (!Bk) return wk.see(kk, -1), !1;
          const Rk = xk(kk);
          return Rk && wk.seeThrough(Ak[Fk]), wk.see(kk, Fk), !Rk
        };
      let Yk = -1;
      return kk.getActiveMeshCandidates = () => {
        const Bk = kk.frustumPlanes,
          Rk = Fk._selectionContent;
        Rk.reset(), (Bk => {
          const Rk = kk.frustumPlanes;
          bk = bk + 1 | 0 || 1;
          const tk = Fk.blocks,
            ak = wk.UA(kk.activeCamera),
            Xk = ak && !0;
          if (Xk) {
            const Fk = kk.ne().currentRenderPassId;
            Fk !== Yk && (Yk = Fk, aF())
          }
          const dk = tF(),
            Ak = Xk && !1;
          tk.length > 0 && function(kk, Fk) {
            for (let Bk = 0; Bk < 6; Bk++) {
              const Rk = kk[Bk],
                tk = Rk.normal;
              Fk[4 * Bk] = tk.x, Fk[4 * Bk + 1] = tk.y, Fk[4 * Bk + 2] = tk.z, Fk[4 * Bk + 3] = Rk.d
            }
          }(Rk, mk);
          const yk = sk,
            fk = Vk,
            Wk = Jk;
          for (let kk = 0; kk < tk.length; kk++) {
            const Fk = tk[kk];
            if (!Zk.d.IsInFrustum(Fk.RRk, Rk)) continue;
            const sk = Fk.entries;
            {
              const kk = Fk._noaSlots,
                Rk = Fk._noaStamps,
                tk = Fk._noaTerrain;
              for (let Fk = 0; Fk < sk.length; Fk++) {
                const Vk = kk[Fk];
                if (fk[Vk] !== bk && (fk[Vk] = bk, Wk[Vk] = AF(yk, 6 * Vk, mk) ? 1 : 0), 0 === Wk[Vk]) continue;
                const Jk = sk[Fk];
                if (Xk && Rk[Fk] === dk) Ak && 1 === tk[Fk] && xk(Jk) && 0, wk.see(Jk, 1 === tk[Fk] ? Vk : -1);
                else if (Xk) {
                  Rk[Fk] = dk;
                  const kk = !0 === Jk.metadata[nk.o];
                  tk[Fk] = kk ? 1 : 0;
                  const Bk = ik(Jk, Vk, kk);
                  !kk || Bk && bF(Jk) || (Rk[Fk] = 0)
                } else ak ? ik(Jk, Vk, !0 === Jk.metadata[nk.o]) : hk.c.prototype.push.call(Bk, Jk)
              }
              continue
            }
          }
          ak && wk.finish(Bk, ek)
        })(Rk), dk.apply(Rk, kk.activeCamera);
        const ak = Fk.BRk;
        for (let kk = 0; kk < ak.length; kk++) {
          const Fk = ak[kk];
          Fk.isEnabled() && hk.c.prototype.push.call(Rk, Fk)
        }
        return tk(Rk, Bk), Rk
      }, {
        tRk: () => wk.culled,
        qBk: (kk, Fk) => {
          const tk = Math.floor(Fk[0] / ak),
            bk = Math.floor(Fk[1] / ak),
            wk = Math.floor(Fk[2] / ak),
            dk = `${tk}|${bk}|${wk}`;
          let sk = Xk.get(dk);
          if (!sk) {
            const kk = [0, 0, 0];
            Bk.pkk([tk * ak - 1, bk * ak - 1, wk * ak - 1], null, kk), sk = Object.assign(Rk(kk, ak + 2), {
              aRk: dk,
              XRk: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Wk()
            }), vk(sk), Ak[sk._noaSlot] = (0, qk.k)(tk, bk, wk), ek[3 * sk._noaSlot] = tk, ek[3 * sk._noaSlot + 1] = bk, ek[3 * sk._noaSlot + 2] = wk, Xk.set(dk, sk)
          }
          sk.XRk++, kk.metadata[Ck.B] = sk
        },
        hN: kk => {
          const Fk = kk.metadata[Ck.B];
          Fk && (Fk.XRk--, Fk.XRk <= 0 && (Xk.delete(Fk.aRk), fk.push(Fk._noaSlot)), kk.metadata[Ck.B] = null)
        },
        FRk: (kk, Fk) => {
          const Bk = kk,
            Rk = Fk.metadata[Ck.B];
          (Bk._noaSlots ??= []).push(Rk._noaSlot), (Bk._noaStamps ??= []).push(0), (Bk._noaTerrain ??= []).push(0), Bk.entries.push(Fk)
        },
        removeEntry: (kk, Fk) => {
          const Bk = kk,
            Rk = Bk.entries,
            tk = Rk.indexOf(Fk);
          if (tk < 0) return;
          const ak = Bk._noaSlots,
            Xk = Bk._noaStamps,
            bk = Bk._noaTerrain,
            wk = Rk.length - 1;
          Rk[tk] = Rk[wk], ak[tk] = ak[wk], Xk[tk] = Xk[wk], bk[tk] = bk[wk], Rk.pop(), ak.pop(), Xk.pop(), bk.pop()
        },
        Z2: kk => {
          for (const Fk of Xk.values()) {
            Fk.xBk.wRk(kk), Fk.KBk.wRk(kk);
            for (const Bk of Fk.RRk) Bk.wRk(kk);
            vk(Fk)
          }
        }
      }
    }

    function JF(kk, Fk) {
      return Fk.set(kk), Fk
    }

    function AF(kk, Fk, Bk) {
      const Rk = kk[Fk],
        tk = kk[Fk + 1],
        ak = kk[Fk + 2],
        Xk = kk[Fk + 3],
        bk = kk[Fk + 4],
        wk = kk[Fk + 5];
      for (let dk = 0; dk < 24; dk += 4) {
        const kk = Bk[dk],
          Fk = Bk[dk + 1],
          sk = Bk[dk + 2];
        if (!(kk * (kk >= 0 ? Xk : Rk) + Fk * (Fk >= 0 ? bk : tk) + sk * (sk >= 0 ? wk : ak) + Bk[dk + 3] >= 0)) return !1
      }
      return !0
    }
    var eF = Bk(37476);
    class yF {
      constructor(kk, Fk) {
        var Bk = kk.ef;
        Bk.SBk(new Pk.b(Bk));
        var Rk = new Dk.d(wk);
        Bk.sRk = Rk, Rk.blocks = [];
        var tk, ak = {},
          Xk = [];
        this.textPlanes = Xk, this.tRk = () => tk.tRk(), this.Z2 = kk => {
          sk(Rk, kk), tk.Z2(kk)
        }, this.qBk = (Fk, Bk, bk) => {
          if (!Fk.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Fk.metadata[Ck.A] && !Fk.metadata[Ck.q]) {
            if (!Bk) {
              var wk = Rk.BRk;
              if (Fk.metadata[Ck.D] && !Fk.parent) {
                wk = Xk;
                var sk = Fk.ZH().JRk;
                Fk.metadata[Ck.F] = sk.center.length() + sk.radius, Fk.Ie = !0
              }
              return wk.push(Fk), Fk.metadata[Ck.j] = wk, void(Fk.metadata[Ck.q] = !0)
            }
            var Jk = Math.floor(bk[0] / dk),
              Ak = Math.floor(bk[1] / dk),
              ek = Math.floor(bk[2] / dk),
              yk = Jk + "|" + Ak + "|" + ek,
              fk = ak[yk];
            if (!fk) {
              var mk = [Jk * dk, Ak * dk, ek * dk],
                Wk = [0, 0, 0];
              kk.SJ.pkk(mk, null, Wk), fk = Vk(Wk, dk), Rk.blocks.push(fk), ak[yk] = fk, fk.aRk = yk
            }
            tk.qBk(Fk, bk), tk.FRk(fk, Fk), fk.XRk = (fk.XRk || 0) + 1, Fk.metadata[Ck.A] = fk, Fk.metadata[Ck.t] = !0, Fk.Ie = !0
          }
        }, this.hN = kk => {
          if (kk.metadata) {
            kk.metadata[Ck.q] && ((0, qk.p)(kk.metadata[Ck.j], kk), kk.metadata[Ck.q] = !1), kk.metadata[Ck.j] === Xk && (kk.Ie = !1), kk.metadata[Ck.j] = void 0, kk.metadata[Ck.F] = void 0;
            var Fk = kk.metadata[Ck.A];
            Fk && Fk.entries && (kk.metadata[Ck.t] && tk.removeEntry(Fk, kk), Fk.XRk--, Fk.XRk <= 0 && (delete ak[Fk.aRk], (0, qk.p)(Rk.blocks, Fk))), tk.hN(kk), kk.metadata[Ck.A] = null, kk.metadata[Ck.t] = !1
          }
        }, this.o_ = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (kk.metadata[Ck.A]) {
            if (kk.metadata[Ck.t] === Fk) return;
            var Bk = kk.metadata[Ck.A];
            Bk && Bk.entries && (Fk ? tk.FRk(Bk, kk) : tk.removeEntry(Bk, kk)), kk.metadata[Ck.t] = Fk
          } else {
            if (kk.metadata[Ck.q] === Fk) return;
            var ak = kk.metadata[Ck.j] || Rk.BRk;
            Fk ? ak.push(kk) : (0, qk.p)(ak, kk), kk.metadata[Ck.q] = Fk
          }
        };
        var wk = () => {},
          dk = Fk * kk.SJ.iJ.I9,
          sk = (kk, Fk) => {
            kk.blocks.forEach((kk => {
              kk.xBk.wRk(Fk), kk.KBk.wRk(Fk), kk.RRk.forEach((kk => kk.wRk(Fk))), kk.blocks && sk(kk, Fk)
            }))
          },
          Vk = (kk, Fk) => {
            var Bk = new bk.Qe(kk[0], kk[1], kk[2]),
              Rk = new bk.Qe(kk[0] + Fk, kk[1] + Fk, kk[2] + Fk);
            return new zk.e(Bk, Rk, void 0, void 0, void 0, wk)
          };
        tk = VF(Bk, Rk, kk.SJ, Vk, ((kk, Fk) => {
          for (var Bk = 0; Bk < Xk.length; Bk++) {
            var Rk = Xk[Bk];
            Rk.isEnabled(!1) && ((0, eF.d)(Rk, Fk) && hk.c.prototype.push.call(kk, Rk))
          }
        }))
      }
    }

    function fF(kk) {
      const {
        holderPosition: Fk,
        holderRotation: Bk,
        bK: Rk,
        fov: tk,
        near: ak,
        far: Xk
      } = kk.model.Qp, bk = kk.vRk;
      bk.position.E1(Fk[0], Fk[1], Fk[2]), bk.rotation.E1(Bk[0], Bk[1], Bk[2]);
      const wk = kk.camera;
      wk.position.E1(Rk[0], Rk[1], Rk[2]), wk.fov = tk, wk.minZ = ak, wk.maxZ = Xk
    }

    function mF(kk) {
      const Fk = kk.ne(),
        Bk = Fk,
        Rk = Bk._gl;
      if (!Rk || Bk.Uy < 2 || Fk.rBk || Rk.getParameter(Rk.DEPTH_BITS) < 24) return !1;
      const tk = kk._renderingManager,
        ak = tk.getRenderingGroup(-1),
        Xk = tk.getRenderingGroup(0),
        bk = Uk.b.prototype.render;
      return ak.render = function(kk, Fk, Bk, Rk, tk, ak, wk, dk, sk) {
        (kk || Xk._empty) && bk.call(this, kk, Fk, Bk, Rk, tk, ak, wk, dk, sk)
      }, Xk.render = function(kk, Bk, tk, Xk) {
        let wk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          dk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Jk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Ak = arguments.length > 8 ? arguments[8] : void 0;
        kk ? bk.call(this, kk, Bk, tk, Xk, wk, dk, sk, Jk, Ak) : (Fk.setAlphaMode(Vk.c.ALPHA_DISABLE), bk.call(this, null, !1, !1, Xk, wk, dk, sk, !1), ak._empty || (Rk.depthRange(1, 1), bk.call(ak, null, Bk, tk, Xk, wk, dk, sk, Jk, Ak), Rk.depthRange(0, 1)), bk.call(this, null, Bk, tk, Xk, !1, !1, !1, Jk, Ak))
      }, !0
    }

    function WF(kk, Fk) {
      return [Fk, rk.e].map(((Fk, Bk) => {
        const Rk = new tk.e("light", bk.Qe.FromArray(Fk), kk);
        return Rk.diffuse = Xk.Color3.FromArray([1, 1, 1]), Rk.specular = Xk.Color3.FromArray([1, 1, 1]), Rk.intensity = rk.d[Bk], Rk
      }))
    }
    class vF extends dk.d {
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
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        kk && (this.particleTexture = null, (0, sk.F)(this.heldTexture), this.heldTexture = null), super.dispose(kk, Fk, Bk)
      }
    }
    const iF = Rk.d.Zero();
    const YF = {
      ORk: function(kk, Fk) {
        return new ak.e(kk, Fk.QFk, {
          preserveDrawingBuffer: Fk.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      oRk: function(kk, Fk) {
        ! function(kk, Fk, Bk) {
          const Rk = new Gk.c(kk.engine);
          kk.ef = Rk, Rk.detachControl(), Rk.autoClear = !1, ck.e.MIN_RENDERINGGROUPS = -1;
          for (let ak = ck.e.MIN_RENDERINGGROUPS; ak <= 1; ak++) Rk.setRenderingOrder(ak, Uk.b.PainterSortCompare, Uk.b.PainterSortCompare, Uk.b.PainterSortCompare);
          Rk.setRenderingAutoClearDepthStencil(0, !1), gk.b.Enabled = !1, kk.fRk = new yF(kk, Math.round(Fk.mRk)), kk.vRk = new Mk.e("camHolder", Rk), kk.camera = new uk.e("camera", new bk.Qe(0, 0, 0), Rk), kk.camera.parent = kk.vRk, fF(kk), (0, rk.g)(kk, ((kk, Fk, Bk) => (0, Tk.g)(Fk, Bk, kk.ef))), Rk.clearColor = Xk.c.FromArray(Fk.clearColor), Rk.ambientColor = Xk.Color3.FromArray(Fk.ambientColor);
          const tk = Bk(Rk, Fk.YRk);
          Rk.onNewLightAddedObservable.add((kk => {
            tk.some((Fk => Fk === kk)) || console.error(`Light "${kk.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Rk.skipPointerMovePicking = !0
        }(kk, Fk, WF), mF(kk.ef)
      },
      WRk: fF,
      setBabylonFog: function(kk, Fk, Bk, Rk) {
        const tk = kk.ef;
        tk.fogMode = 3, tk.fogStart = Fk, tk.fogEnd = Bk, tk.fogColor.set(Rk[0], Rk[1], Rk[2])
      },
      ERk: function(kk, Fk, Bk) {
        return kk.engine.Uy >= 2 && (kk.SRk || (kk.SRk = new Hk(kk.ef)), !kk.SRk.failed) ? kk.SRk.iH(Fk, Bk) : new vF(Fk, Bk, kk.ef)
      },
      HRk: function(kk, Fk) {
        kk.ef.fY.forEach((Bk => {
          if (Bk instanceof Nk) return void Bk.Z2(Fk, kk.SJ.CJ);
          const Rk = Bk;
          if (Rk.emitter.getConnectedParticleSystems)
            for (const kk of Rk._particles) kk.position.set(kk.position.x - Fk[0], kk.position.y - Fk[1], kk.position.z - Fk[2]);
          else {
            if (!Rk.worldOffset) throw new Error("Particle system has no world offset");
            Rk.worldOffset.x = -kk.SJ.CJ[0], Rk.worldOffset.y = -kk.SJ.CJ[1], Rk.worldOffset.z = -kk.SJ.CJ[2]
          }
        }))
      },
      linesFromArrays: function(kk, Fk, Bk) {
        const Rk = new wk.e(Fk, kk.ef, null, void 0, void 0, !1);
        return (0, Tk.e)(Fk, Bk, kk.ef, Rk), Rk
      },
      yf: XF,
      NRk: function(kk, Fk) {
        return iF.origin.sBk(Fk.origin), iF.direction.sBk(Fk.direction), iF.length = Fk.length, iF.epsilon = Fk.epsilon, iF.NRk(kk, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40554: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => hk,
      f: () => Wk,
      i: () => xk
    });
    var Rk = Bk(39674),
      tk = Bk(40563),
      ak = Bk(40603),
      Xk = Bk(40570),
      bk = Bk(37512),
      wk = Bk(37521),
      dk = Bk(37524),
      sk = Bk(37526),
      Vk = Bk(36861),
      Jk = Bk(36867),
      Ak = Bk(40573),
      ek = Bk(36842),
      yk = Bk(36851),
      fk = Bk(36836);

    function mk(kk, Fk) {
      return Object.assign((function(kk, Bk, Rk, tk) {
        return Fk(this.featureState, kk, Bk, Rk, tk)
      }), {
        oe: kk
      })
    }

    function Wk(kk) {
      const Fk = class extends Ak.d {
          constructor(Fk, Bk) {
            const Rk = (0, yk._)(Fk),
              tk = Rk && (0, yk.z)(Rk, kk.name);
            for (var ak = arguments.length, Xk = new Array(ak > 2 ? ak - 2 : 0), bk = 2; bk < ak; bk++) Xk[bk - 2] = arguments[bk];
            super(Fk, kk.name, kk.priority, tk ? tk.defines : kk.defines(...Xk), !1), this.featureState = void 0, this.featureState = Bk, this._pluginManager._addPlugin(this), this._enable(!0), (0, yk.A)(this._material, kk, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return kk.className
          }
          isCompatible(kk) {
            return kk === fk.e.GLSL || kk === fk.e.WGSL
          }
        },
        Bk = (0, ek.j)(kk);
      for (const [Rk, tk] of Object.entries(ek.e)) {
        const ak = kk[Rk];
        if (ak) {
          const kk = Bk[Rk];
          Object.defineProperty(Fk.prototype, tk, {
            value: mk(ak, kk),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Fk
    }
    class vk extends(Wk(bk.e)) {}
    var ik = Bk(39236),
      Yk = Bk(40576);
    const Lk = new WeakMap;

    function Ok(kk, Fk, Bk) {
      let Rk = Lk.get(Bk);
      Rk || (Rk = new Map, Lk.set(Bk, Rk));
      const {
        url: tk
      } = kk;
      let ak = Rk.get(tk);
      return ak || (ak = async function(kk, Fk, Bk) {
        const {
          width: Rk,
          height: tk
        } = kk.getSize(), ak = Math.round(tk / Rk), bk = Fk && Fk.byteLength === Rk * Rk * ak * 4 ? Fk : kk._readPixelsSync();
        return new Yk.d(bk, Rk, Rk, ak, ik.e.TEXTUREFORMAT_RGBA, Bk, !0, !1, Xk.c.NEAREST_NEAREST_MIPLINEAR)
      }(kk, Fk, Bk), Rk.set(tk, ak), ak.catch((() => {
        Rk.delete(tk)
      }))), ak
    }
    var Ek = Bk(37533);
    class Sk extends(Wk(wk.i)) {
      constructor(kk, Fk) {
        super(kk, Fk), Fk.textures.forEach(((kk, Fk) => {
          kk.mirror.onLoadObservable.add((kk => {
            this.setTextureArrayData(kk, Fk).catch((kk => {
              console.error(`Failed to build texture array for atlas ${Fk}`, kk)
            }))
          }))
        })), (0, Ek.g)(Fk, kk.shaderLanguage)
      }
      async setTextureArrayData(kk, Fk) {
        var Bk, Rk;
        const tk = this.featureState,
          {
            width: ak,
            height: Xk
          } = kk.getSize(),
          bk = tk.useWebGL2 ? await Ok(kk, null !== (Bk = null === (Rk = tk.sources.pixels) || void 0 === Rk ? void 0 : Rk[Fk]) && void 0 !== Bk ? Bk : null, this._material.XN()) : null;
        (0, Ek.b)(this._material, tk, Fk, bk, ak, Math.round(Xk / ak), this._material.shaderLanguage)
      }
    }
    var Nk = Bk(40583),
      Hk = Bk(39716),
      uk = Bk(36754),
      Mk = Bk(40592),
      gk = Bk(39829),
      Uk = Bk(39703),
      ck = Bk(40536),
      Gk = Bk(37245),
      Tk = Bk(40601);
    class rk extends Nk.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Dk = {
      Mesh: Mk.d,
      TransformNode: ck.e,
      Ge: Nk.b,
      VertexBuffer: Nk.e,
      BoundingInfo: Hk.b,
      Qe: uk.Qe,
      ArenaBuffer: rk,
      SubMesh: Uk.d,
      VertexData: gk.e,
      MirroredGeometry: Tk.b,
      meshFromArrays: Tk.e,
      plainMeshFromArrays: Tk.g
    };
    (0, Gk.h)(Dk);
    var zk = Bk(37061);
    class Pk extends(Wk(sk.f)) {
      constructor(kk, Fk) {
        if (super(kk, Fk), kk instanceof Rk.StandardMaterial && Fk.dirLightCount > 0) {
          const Fk = kk,
            Bk = Fk._blockDirtyMechanism;
          Fk._blockDirtyMechanism = !0, kk.disableLighting = !0, Fk._blockDirtyMechanism = Bk;
          const Rk = (0, yk._)(kk);
          Rk && (Rk.disableLighting = !0, (0, yk.X)(Rk))
        }(0, zk.k)(kk)
      }
      dispose(kk) {
        (0, zk.o)(this._material), super.dispose(kk)
      }
    }

    function hk(kk, Fk) {
      if (!(Fk instanceof Rk.StandardMaterial) || Fk.specularTexture) return;
      const {
        r: Bk,
        g: tk,
        b: ak
      } = Fk.specularColor;
      0 === Bk && 0 === tk && 0 === ak && (kk.SPECULARTERM = !1)
    }(0, sk.e)({
      disableUnusedSpecularTerm: hk
    });
    var qk = Bk(36939),
      Ck = Bk(37258);
    const Zk = new RegExp(`^#define ${dk.d}\\s*$`, "m");
    class pk extends(Wk(dk.j)) {
      constructor(kk, Fk) {
        super(kk, Fk), this.Te = !1, Fk.ditherOnlyWhileFading && (Ck.h.add(kk), this.prewarmDitherTwins(kk))
      }
      prewarmDitherTwins(kk) {
        const Fk = new WeakSet;
        kk.onEffectCreatedObservable.add((Bk => {
          let {
            effect: Rk,
            subMesh: tk
          } = Bk;
          if (this.featureState.prewarmingDither || Fk.has(Rk)) return;
          Fk.add(Rk);
          const ak = null === tk || void 0 === tk ? void 0 : tk.getMesh();
          ak && !Zk.test(Rk.defines) && kk.XN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ak) || Fk.delete(Rk)
          }))
        }))
      }
      prewarmDither(kk) {
        if (this.Te || kk.BBk()) return !1;
        const Fk = new Uk.d(0, 0, 0, 0, 0, kk, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(kk, Fk)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Fk.effect
      }
      dispose(kk) {
        this.Te = !0, super.dispose(kk)
      }
    }
    const Kk = new Map;

    function xk(kk, Fk) {
      Kk.set(kk, Fk)
    }
    xk(bk.e, vk), xk(wk.i, Sk), xk(dk.j, pk), xk(sk.f, Pk), (0, Vk.b)({
      create: (kk, Fk) => {
        const Bk = new Rk.StandardMaterial(kk.name, Fk);
        return (0, qk.r)(kk, Bk), Bk.detailMap._pluginDefineNames
      },
      write: (kk, Fk, Bk) => {
        (0, qk.T)(kk.mirror, Fk, Bk)
      },
      addFeature: (kk, Fk, Bk) => {
        const Rk = Kk.get(Fk.feature);
        if (!Rk) throw new Error(`${Fk.feature.name} has no plugin class (registerPluginClass)`);
        new Rk(kk.mirror, Fk.state, ...Bk)
      },
      texture: (kk, Fk, Bk) => {
        let {
          url: Rk,
          noMipmap: tk,
          invertY: ak,
          samplingMode: bk,
          data: wk,
          sets: dk
        } = Bk;
        if (!wk) {
          const Bk = new Xk.c(Rk, Fk, tk, ak, bk);
          return Object.assign(Bk, dk), void(0, Jk.O)(kk, Bk)
        }
        const sk = {},
          Vk = new Promise(((kk, Fk) => {
            sk.onLoad = kk, sk.onError = (kk, Bk) => {
              Fk(new Error(`${wk.context}: ${(null===Bk||void 0===Bk?void 0:Bk.message)||kk||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Ak,
            bytes: ek,
            label: yk
          } = wk,
          fk = {
            noMipmap: tk,
            invertY: !1,
            samplingMode: bk,
            ...sk,
            mimeType: Ak,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          mk = new Xk.c(null, Fk, fk);
        qk.t.set(mk, Vk), Object.assign(mk, dk), mk.updateURL(Rk, ek);
        const Wk = mk.getInternalTexture();
        Wk && (Wk.label = yk), kk.uvSet = mk.coordinatesIndex, kk.matrix.set((0, qk.M)(mk)), (0, Jk.O)(kk, mk)
      },
      cube: (kk, Fk, Bk) => {
        let {
          rootUrl: Rk,
          files: ak,
          noMipmap: bk,
          luminance: wk
        } = Bk;
        const {
          samplingMode: dk
        } = kk.sampler, sk = dk === (0, Jk.B)(bk) ? null : () => {
          (0, qk.K)(Vk, dk)
        }, Vk = new tk.d(Rk, Fk, null, bk, ak, sk, null, (0, Jk.A)(wk));
        Vk.coordinatesMode = Xk.c.SKYBOX_MODE, (0, Jk.O)(kk, Vk)
      },
      canvas: (kk, Fk, Bk) => {
        let {
          width: Rk,
          height: tk,
          mipmaps: bk,
          samplingMode: wk,
          hasAlpha: dk = !1,
          wrap: sk = Xk.c.CLAMP_ADDRESSMODE
        } = Bk;
        const Vk = new ak.d(Fk, {
          width: Rk,
          height: tk
        }, kk, bk, wk);
        Vk.hasAlpha = dk, Vk.wrapU = sk, Vk.wrapV = sk;
        const Jk = (0, qk.y)(Vk);
        return (0, qk.B)(Jk, Vk), Jk
      }
    })
  },
  40601: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => sk,
      e: () => Vk,
      g: () => Jk
    });
    var Rk = Bk(40583),
      tk = Bk(39463),
      ak = Bk(39716),
      Xk = Bk(39836),
      bk = Bk(40592),
      wk = Bk(39829),
      dk = Bk(37131);
    class sk extends Xk.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (kk, Fk) => {
          this.releaseUnlessInstanced(Fk)
        }, this.onLinked = null
      }
      link(kk) {
        var Fk;
        (0, dk.m)(kk), this.model = kk, null === (Fk = this.onLinked) || void 0 === Fk || Fk.call(this, kk)
      }
      relink() {
        this.release();
        const kk = [];
        for (const tk of Object.values(this._vertexBuffers))
          if (!tk.getIsInstanced()) {
            const {
              byteOffset: Fk,
              byteStride: Bk,
              type: Rk,
              normalized: ak
            } = tk;
            kk.push({
              kind: tk.getKind(),
              data: tk.getData(),
              offset: Fk,
              stride: Bk,
              components: tk.getSize(),
              glType: Rk,
              isNormalized: ak
            })
          } const Fk = this._indices.length ? this._indices : null,
          {
            minimum: Bk,
            maximum: Rk
          } = this.extend;
        this.link(new dk.d(kk, Fk, this.getTotalVertices(), new Float64Array(Bk.PBk()), new Float64Array(Rk.PBk())))
      }
      copy(kk) {
        if (!this.model) return super.copy(kk);
        const Fk = new sk(kk, this.XN()),
          Bk = this.hBk(void 0, !0);
        Bk && Fk.setIndices(Bk);
        let Xk = !1;
        for (const ak in this._vertexBuffers) {
          const kk = this._vertexBuffers[ak],
            Bk = kk.getData();
          if (!Bk) continue;
          const bk = kk.getSize(),
            {
              type: wk,
              byteOffset: dk,
              byteStride: sk,
              normalized: Vk
            } = kk;
          Xk ||= kk.isUpdatable();
          const Jk = kk.getIsInstanced() ? (Bk instanceof Array ? 4 * Bk.length : Bk.byteLength) / sk : this.getTotalVertices(),
            Ak = (0, tk.p)(Bk, bk, wk, dk, sk, Jk, !0),
            ek = {
              updatable: kk.isUpdatable(),
              stride: bk,
              type: wk,
              normalized: Vk,
              takeBufferOwnership: !0,
              instanced: kk.getIsInstanced()
            };
          Fk.setVerticesBuffer(new Rk.e(this.ne(), Ak, ak, ek), Jk)
        }
        return Fk._updatable = Xk, Fk._boundingInfo = new ak.b(this.extend.minimum, this.extend.maximum), Fk.relink(), Fk
      }
      static mergeMeshes(kk, Fk, Bk, Rk, tk, ak) {
        const wk = kk[0].XN(),
          dk = new bk.d(kk[0].name + "_merged", wk),
          Vk = new sk(Xk.e.RandomId(), wk, void 0, !1, dk);
        try {
          if (!bk.d.MergeMeshes(kk, Fk, Bk, dk, tk, ak)) return dk.dispose(), null
        } catch (Jk) {
          throw dk.dispose(), Jk
        }
        return Vk.relink(), dk
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
        this.model && ((0, dk.r)(this.model), this.model = null)
      }
    }

    function Vk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bk.d(kk, Bk);
      const tk = (0, dk.j)(Fk),
        {
          positions: ak,
          normals: Vk,
          uvs: Jk,
          indices: Ak,
          named: ek = {}
        } = Fk,
        yk = new wk.e;
      yk.positions = ak, yk.normals = null !== Vk && void 0 !== Vk ? Vk : null, yk.uvs = null !== Jk && void 0 !== Jk ? Jk : null, yk.indices = Ak;
      const fk = new sk(Xk.e.RandomId(), Bk, yk, !1, Rk);
      for (const {
          kind: Xk,
          components: bk
        }
        of tk.vertexAttributes) Xk in ek && Rk.setVerticesData(Xk, ek[Xk], !1, bk);
      return fk.link(tk), Rk
    }

    function Jk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tk = new bk.d(kk, Bk),
        {
          positions: ak,
          normals: Xk,
          uvs: dk,
          indices: sk
        } = Fk;
      return Object.assign(new wk.e, {
        positions: ak,
        normals: Xk,
        uvs: dk,
        indices: sk
      }).applyToMesh(tk, Rk), tk
    }
  },
  41039: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => fk,
      h: () => bk,
      i: () => Xk,
      m: () => dk
    });
    var Rk = Bk(36911),
      tk = Bk(38344),
      ak = Bk(38339);

    function Xk(kk, Fk, Bk, Rk) {
      const tk = ak.l;
      Fk.fill(0), kk.gravity.toArray(Fk, tk.gravity), kk.colorDead.toArray(Fk, tk.colorDead), Bk[tk.ramp] = kk.useRampGradients ? 1 : 0;
      const Xk = kk.getColorGradients(),
        bk = Jk(kk, Xk, "colour", Rk);
      Bk[tk.colorCount] = bk;
      for (let ak = 0; ak < bk; ak++) {
        var wk;
        const kk = Xk[Ak(Xk, ak)];
        Fk[tk.colorPositions + ak] = kk.gradient, kk.color1.toArray(Fk, tk.color1 + 4 * ak), (null !== (wk = kk.color2) && void 0 !== wk ? wk : kk.color1).toArray(Fk, tk.color2 + 4 * ak)
      }
      const dk = kk.getVelocityGradients(),
        sk = Jk(kk, dk, "bs", Rk);
      Bk[tk.velocityCount] = sk;
      for (let ak = 0; ak < sk; ak++) Wk(Fk, tk.bs + 4 * ak, dk[Ak(dk, ak)]);
      const Vk = kk.useRampGradients ? kk.getColorRemapGradients() : null,
        ek = Jk(kk, Vk, "colour remap", Rk);
      Bk[tk.remapCount] = ek;
      for (let ak = 0; ak < ek; ak++) Wk(Fk, tk.remap + 4 * ak, Vk[Ak(Vk, ak)])
    }

    function bk() {
      return {
        key: [],
        texels: new Uint8Array(4 * ak.g)
      }
    }
    const wk = [];

    function dk(kk, Fk) {
      return sk(kk, wk), !mk(wk, Fk.key) && (Fk.key.length = 0, Fk.key.push(...wk), Fk.key.length > 0 && function(kk, Fk) {
        for (let Bk = 0; Bk < ak.g; Bk++) tk.i.GetCurrentGradient(Bk / ak.g, kk, ((kk, Fk, Bk) => {
          Rk.Color3.LerpToRef(kk.color, Fk.color, Bk, Vk)
        })), Fk[4 * Bk] = 255 * Vk.r, Fk[4 * Bk + 1] = 255 * Vk.g, Fk[4 * Bk + 2] = 255 * Vk.b, Fk[4 * Bk + 3] = 255
      }(kk.getRampGradients(), Fk.texels), !0)
    }

    function sk(kk, Fk) {
      Fk.length = 0;
      const Bk = kk.useRampGradients ? kk.getRampGradients() : null;
      if (null !== Bk && void 0 !== Bk && Bk.length) {
        Fk.push(Bk.length);
        for (const kk of Bk) Fk.push(kk.gradient, kk.color.r, kk.color.g, kk.color.b)
      }
    }
    const Vk = new Rk.Color3;

    function Jk(kk, Fk, Bk, Rk) {
      return Fk ? Fk.length > ak.b ? (Rk(`particleStops:${Bk}`, `GPU particles use the first 2 and last ${ak.b-2} of more than ${ak.b} ${Bk} gradient stops (${kk.name})`), ak.b) : Fk.length : 0
    }

    function Ak(kk, Fk) {
      return Fk < 2 || kk.length <= ak.b ? Fk : kk.length - ak.b + Fk
    }
    const ek = new Float32Array(ak.i),
      yk = new Uint32Array(ek.buffer);

    function fk(kk, Fk, Bk) {
      return Xk(kk, ek, yk, Bk), Fk && mk(yk, Fk) ? null : yk.slice()
    }

    function mk(kk, Fk) {
      if (kk.length !== Fk.length) return !1;
      for (let Bk = 0; Bk < kk.length; Bk++)
        if (kk[Bk] !== Fk[Bk]) return !1;
      return !0
    }

    function Wk(kk, Fk, Bk) {
      var Rk;
      kk[Fk] = Bk.gradient, kk[Fk + 1] = Bk.factor1, kk[Fk + 2] = null !== (Rk = Bk.factor2) && void 0 !== Rk ? Rk : Bk.factor1
    }
  },
  41033: (kk, Fk, Bk) => {
    function Rk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Fk = new Set;
      return (Bk, Rk) => {
        Fk.has(Bk) || (Fk.add(Bk), console.warn(kk + Rk))
      }
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);