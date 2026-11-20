export const id = 0;
export const ids = [0];
export const modules = {
  40416: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CapeMaterialPlugin: () => mv,
      HueTintMaterialPlugin: () => jv,
      LifeformMaterialPlugin: () => fv,
      OverlayMaterialPlugin: () => Fv
    });
    var hv = Pv(40423),
      Sv = Pv(37536);
    class ev extends((0, hv.e)(Sv.b)) {}(0, hv.i)(Sv.b, ev);
    var gv = Pv(36659);
    class pv extends((0, hv.e)(gv.h)) {}(0, hv.i)(gv.h, pv);
    var dv = Pv(37384);
    class Nv extends((0, hv.e)(dv.e)) {}(0, hv.i)(dv.e, Nv);
    var lv = Pv(36898),
      Tv = Pv(39560),
      Wv = Pv(36895);
    class wv extends((0, hv.e)(Wv.h)) {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv), (0, lv.j)(vv)
      }
      dispose(vv) {
        (0, lv.k)(this._material), super.dispose(vv)
      }
    }(0, hv.i)(Wv.h, wv), (0, Wv.j)({
      disableUnusedSpecularTerm: hv.b,
      isLightingDisabled: vv => vv instanceof Tv.StandardMaterial && vv.disableLighting
    });
    var av = Pv(38226);
    class sv extends((0, hv.e)(av.g)) {}(0, hv.i)(av.g, sv);
    var Cv = Pv(38330),
      iv = Pv(36757),
      cv = Pv(37662),
      Gv = Pv(36708);
    class mv extends((0, hv.e)(Cv.d)) {}(0, hv.i)(Cv.d, mv);
    class jv extends((0, hv.e)(iv.e)) {}(0, hv.i)(iv.e, jv);
    class fv extends((0, hv.e)(cv.q)) {}(0, hv.i)(cv.q, fv);
    class Fv extends((0, hv.e)(Gv.c)) {}(0, hv.i)(Gv.c, Fv)
  },
  40853: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      addBabylonLights: () => iz,
      default: () => mz
    });
    var hv = Pv(40861),
      Sv = (Pv(39275), Pv(40410), Pv(39800), Pv(40871)),
      ev = Pv(39127),
      gv = Pv(36745),
      pv = Pv(36591),
      dv = Pv(40883),
      Nv = Pv(40892),
      lv = Pv(36705),
      Tv = (Pv(40423), Pv(40906)),
      Wv = Pv(40898),
      wv = Pv(38254),
      av = Pv(40908),
      sv = Pv(39162),
      Cv = Pv(38239);
    const iv = "gpuParticles",
      cv = Cv.s,
      Gv = vv => vv / 4,
      mv = vv => `gpuParticleSystem[${vv>>2}].${"xyzw"[3&vv]}`,
      jv = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Cv.c}\n#define COLOR_POSITIONS ${Gv(cv.colorPositions)}\n#define COLOR1 ${Gv(cv.color1)}\n#define COLOR2 ${Gv(cv.color2)}\n#define VELOCITY ${Gv(cv.pC)}\n#define REMAP ${Gv(cv.remap)}\n#define RECORDS_PER_ROW ${Cv.j}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Cv.l/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${mv(cv.gravity)}, ${mv(cv.gravity+1)}, ${mv(cv.gravity+2)}); }\nint colorCount() { return int(${mv(cv.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Gv(cv.colorDead)}]; }\nint velocityCount() { return int(${mv(cv.velocityCount)}); }\nint remapCount() { return int(${mv(cv.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    sv.d.ShadersStore[`${iv}VertexShader`] = jv, sv.d.ShadersStore[`${iv}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const fv = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Fv = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Yv = Pv(38235),
      nv = Pv(40916);
    class Ov extends Yv.c {
      constructor(vv, zv, Pv, hv) {
        super(vv, zv, Pv), this.renderer = Pv, this.Is = hv, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Cv.l), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, nv.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (vv, zv) => {
          const {
            engine: Pv
          } = this, hv = Pv._gl;
          Pv._bindTextureDirectly(hv.TEXTURE_2D, this.records, !0), Pv._unpackFlipY(!1);
          const Sv = this.ring.recordBits;
          for (let ev = vv; ev < zv;) {
            const vv = Math.floor(ev / Cv.j),
              Pv = Math.min(zv, (vv + 1) * Cv.j);
            hv.texSubImage2D(hv.TEXTURE_2D, 0, ev % Cv.j * 4, vv, 4 * (Pv - ev), 1, hv.RGBA_INTEGER, hv.UNSIGNED_INT, Sv, ev * Cv.d), ev = Pv
          }
          Pv._bindTextureDirectly(hv.TEXTURE_2D, null)
        }, this.id = vv;
        const Sv = hv.ma();
        this.engine = Sv;
        const ev = Math.max(1, zv),
          gv = Math.min(ev, Cv.j);
        this.records = Sv.createRawTexture(null, 4 * gv, Math.ceil(ev / gv), Tv.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Tv.d.TEXTURE_NEAREST_SAMPLINGMODE, null, Tv.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Is.getAnimationRatio() || 1;
        const zv = this.Is.getFrameId();
        if (zv === this.animatedFrame) return !1;
        const Pv = super.animate(vv);
        return Pv && (this.animatedFrame = zv, this.ring.takeUploads(this.uploadSlots)), Pv
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(vv) {
        (0, nv.j)(this, this.uniforms, this.uniformBits, vv);
        for (const Pv of Cv.p) this.uniforms[Pv] = this.uniformBits[Pv];
        var zv;
        (0, nv.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zv = this.ramp) || void 0 === zv || zv.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Wv.e.CreateRGBATexture(this.rampTexels.texels, Cv.i, 1, this.Is, !1, !1, Tv.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var vv;
        this.records.dispose(), null === (vv = this.ramp) || void 0 === vv || vv.dispose(), this.ramp = null
      }
    }
    class Dv {
      constructor(vv) {
        this.Is = vv, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, av.d)(), this.engine = vv.ma(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Wv.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, vv, !1, !1, Tv.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      vV(vv, zv) {
        const Pv = Cv.j * this.engine.getCaps().maxTextureSize;
        zv > Pv && this.warnOnce(`capacity:${vv}`, `particle system ${vv} holds ${Pv} particles, not ${zv}: its records texture's limit`);
        const hv = new Ov(vv, Math.min(zv, Pv), this, this.Is);
        return this.Is.addParticleSystem(hv), hv
      }
      canDraw(vv) {
        var zv, Pv;
        if (this.failed || null === (zv = vv.texture) || void 0 === zv || null === (Pv = zv.mirror) || void 0 === Pv || !Pv.isReady()) return !1;
        for (const hv of (0, wv.i)(vv.blendMode))
          if (!this.effectFor(hv).isReady()) return !1;
        return !0
      }
      disposeStopped(vv) {
        this.Is._toBeDisposed.push(vv)
      }
      remove(vv) {
        this.Is.removeParticleSystem(vv), vv.releaseGl()
      }
      render(vv) {
        var zv;
        if (!vv.isReady() || !vv.hasLiveParticles()) return 0;
        const {
          engine: Pv,
          Is: hv,
          frame: Sv
        } = this;
        vv.prepareDraw(this.warnOnce), vv.drawOffset(Sv, 0), Sv[3] = vv.drawTime();
        const ev = vv.ring.drawStart(),
          gv = vv.ring.drawCount(),
          pv = null !== (zv = vv.ramp) && void 0 !== zv ? zv : this.whiteRamp;
        Pv.setState(!1);
        for (const dv of (0, wv.i)(vv.blendMode)) {
          const zv = this.effectFor(dv);
          Pv.enableEffect(zv), zv.setTexture("gpuParticleTexture", vv.texture.mirror), zv.setTexture("gpuParticleRampTexture", pv), zv._bindTexture("gpuParticleRecords", vv.records), zv.setMatrix("gpuParticleView", hv.getViewMatrix()), zv.setMatrix("gpuParticleProjection", hv.getProjectionMatrix()), zv.setFloatArray4("gpuParticleSystem", vv.uniforms), zv.setFloat4("gpuParticleFrame", Sv[0], Sv[1], Sv[2], Sv[3]), zv.setFloat2("gpuParticleRange", ev, gv), zv.setFloat("gpuParticleRamp", vv.uniforms[Cv.s.ramp]), Pv.bindBuffers(this.vertexBuffers, null, zv), Pv.setAlphaMode((0, wv.h)(dv)), Pv.drawArraysType(Tv.d.MATERIAL_TriangleStripDrawMode, 0, 4, gv), zv._bindTexture("gpuParticleRecords", null)
        }
        return Pv.setAlphaMode(Tv.d.ALPHA_DISABLE), gv
      }
      awaitLink(vv) {
        const zv = vv.getPipelineContext(),
          Pv = this.engine._gl;
        !this.failed && Pv && (!zv || zv.isParallelCompiled && !zv.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : zv.isParallelCompiled && zv.program && (Pv.getProgramParameter(zv.program, Pv.LINK_STATUS) || this.fail(Pv.getProgramInfoLog(zv.program) || "a program did not link")))
      }
      effectFor(vv) {
        return vv === wv.c ? this.multiplyEffect : this.effect
      }
      createEffect(vv) {
        return this.engine.createEffect(iv, [], fv, Fv, vv, void 0, void 0, ((vv, zv) => {
          this.fail(zv)
        }))
      }
      fail(vv) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${vv}`);
          for (const vv of this.Is.mF.slice()) vv instanceof Ov && vv.disposeOnStop && vv.dispose()
        }
      }
    }
    var Kv = Pv(39506),
      Vv = Pv(40408),
      Uv = Pv(39257),
      Rv = Pv(39468),
      xv = Pv(39459),
      tv = Pv(39387),
      qv = Pv(40469),
      Iv = Pv(37100),
      Qv = Pv(40924),
      Zv = Pv(40929),
      Av = Pv(40931),
      Lv = Pv(39413),
      Hv = Pv(36983),
      Mv = Pv(36976),
      yv = Pv(39611),
      Bv = Pv(37067),
      Jv = Pv(37011);

    function Ev(vv) {
      if (vv.visibility < 1 || !vv.isVisible || !vv.isEnabled() || vv.metadata[Jv.f] || !vv.isReady()) return !0;
      const zv = vv.sF;
      if (!zv || 0 === zv.length) return !0;
      for (let Pv = 0; Pv < zv.length; Pv++) {
        const hv = zv[Pv],
          Sv = hv.na();
        if (!Sv || !Sv.isReadyForSubMesh(vv, hv, !1)) return !0
      }
      return !1
    }
    class ov {
      constructor(vv, zv) {
        this.vW = vv, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zv.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      dw(vv) {
        var zv;
        const Pv = this.armed;
        if (this.armed = !1, this.vis = null, !Pv) return !1;
        this.culled = 0;
        const {
          vW: hv
        } = this, Sv = null === (zv = hv.SF) || void 0 === zv ? void 0 : zv.visibility;
        if (!Sv || !vv || hv.Ma.ya) return !1;
        if (!(hv.oT.CPv[0] >= Bv.g)) return !1;
        const ev = vv.getProjectionMatrix().m;
        if (0 !== ev[15]) return !1;
        const gv = hv.iW,
          pv = vv.globalPosition,
          dv = this.eye;
        return dv[0] = pv.x + gv[0], dv[1] = pv.y + gv[1], dv[2] = pv.z + gv[2], !!Sv.eyeClear(dv[0], dv[1], dv[2], vv.minZ, ev, hv.oT) && (this.vis = Sv, this.passable.clear(), this.count = 0, !0)
      }
      see(vv, zv) {
        const Pv = this.count++;
        if (Pv === this.cellSlots.length) {
          const vv = new Int32Array(2 * Pv);
          vv.set(this.cellSlots), this.cellSlots = vv
        }
        this.cellSlots[Pv] = zv, this.meshes[Pv] = vv
      }
      seeThrough(vv) {
        this.passable.add(vv)
      }
      finish(vv, zv) {
        const {
          vis: Pv,
          eye: hv,
          meshes: Sv,
          count: ev,
          cellSlots: gv
        } = this, {
          oT: pv
        } = this.vW, [dv, Nv] = pv.CPv, lv = null !== Pv && Pv.update(hv[0], hv[1], hv[2], pv.O4, dv, Nv, this.passable);
        let Tv = 0;
        for (let Wv = 0; Wv < ev; Wv++) {
          const hv = Sv[Wv];
          if (lv) {
            const vv = 3 * gv[Wv];
            if (vv >= 0 && !Pv.isDrawn(zv[vv], zv[vv + 1], zv[vv + 2])) {
              Tv++;
              continue
            }
          }
          Lv.g.prototype.push.call(vv, hv)
        }
        Sv.fill(null, 0, ev), this.count = 0, this.vis = null, this.culled = Tv
      }
    }
    var bv = Pv(37053),
      rv = Pv(36997),
      kv = Pv(39593),
      Xv = Pv(40935),
      uv = Pv(39598),
      vz = Pv(39518);
    let zz = 1;
    const Pz = new WeakSet;

    function hz() {
      return zz
    }

    function Sz() {
      zz = zz >= 1073741823 ? 1 : zz + 1
    }

    function ez(vv) {
      const zv = vv.metadata;
      if (!zv || !0 !== zv[Mv.o]) return;
      const Pv = zv[Mv.q],
        hv = null === Pv || void 0 === Pv ? void 0 : Pv._noaStamps;
      if (!Pv || !hv) return;
      const Sv = Pv.entries.indexOf(vv);
      Sv >= 0 && (hv[Sv] = 0)
    }

    function gz(vv) {
      const zv = vv.sF;
      for (let Pv = 0; Pv < zv.length; Pv++) {
        const vv = zv[Pv].na();
        if (vv && !vv.isFrozen) return !1
      }
      for (let Pv = 0; Pv < zv.length; Pv++) {
        const vv = zv[Pv].na();
        vv && Pz.add(vv)
      }
      return !0
    }
    let pz = !1;
    const dz = new WeakSet;

    function Nz(vv, zv) {
      const Pv = vv[zv];
      if ("function" !== typeof Pv) throw new Error(`terrainDrawState: Babylon has no ${zv} to hook`);
      return Pv
    }

    function lz(vv, zv, Pv, hv, Sv) {
      const ev = Pv.oT.O4,
        gv = new Map;
      let pv = 0;
      const dv = new ov(Pv, vv),
        Nv = new bv.e(ev, vv.ma());
      ! function(vv) {
        if (dz.has(vv) || (dz.add(vv), vv.onContextLostObservable.add(Sz), vv.onContextRestoredObservable.add(Sz)), pz) return;
        pz = !0;
        const zv = Xv.e.prototype,
          Pv = Nz(zv, "_markSubMeshesAsDirty");
        Object.assign(zv, {
          _markSubMeshesAsDirty(vv) {
            Pv.call(this, vv), ez(this)
          }
        });
        const hv = Nz(vz.c.prototype, "_syncParentEnabledState");
        Object.assign(vz.c.prototype, {
          _syncParentEnabledState() {
            hv.call(this), ez(this)
          }
        });
        const Sv = Nz(uv.c.prototype, "resetDrawCache");
        uv.c.prototype.resetDrawCache = function(vv, zv) {
          Sv.call(this, vv, zv), ez(this.getMesh())
        };
        const ev = kv.b.prototype,
          gv = Nz(ev, "markDirty");
        ev.markDirty = function(vv) {
          gv.call(this, vv), Pz.has(this) && Sz()
        };
        const pv = Nz(ev, "_markAllSubMeshesAsDirty");
        Object.assign(ev, {
          _markAllSubMeshesAsDirty(vv) {
            pv.call(this, vv), Pz.has(this) && Sz()
          }
        })
      }(vv.ma());
      let lv = new Float64Array(384),
        Tv = new Int32Array(64),
        Wv = new Uint8Array(64),
        wv = new Float64Array(64),
        av = new Int32Array(192),
        sv = 0;
      const Cv = [],
        iv = new Float64Array(24),
        cv = () => {
          const vv = Cv.pop();
          return void 0 !== vv ? (Tv[vv] = 0, vv) : (sv === Tv.length && (lv = Tz(lv, new Float64Array(2 * lv.length)), Tv = Tz(Tv, new Int32Array(2 * Tv.length)), Wv = Tz(Wv, new Uint8Array(2 * Wv.length)), wv = Tz(wv, new Float64Array(2 * wv.length)), av = Tz(av, new Int32Array(2 * av.length))), sv++)
        },
        Gv = vv => {
          const zv = 6 * vv._noaSlot,
            Pv = vv.YPv[0],
            hv = vv.YPv[1];
          lv[zv] = Pv.x, lv[zv + 1] = Pv.y, lv[zv + 2] = Pv.z, lv[zv + 3] = hv.x, lv[zv + 4] = hv.y, lv[zv + 5] = hv.z
        },
        mv = (vv, zv, Pv) => {
          if (!Pv) return dv.see(vv, -1), !1;
          const hv = Ev(vv);
          return hv && dv.seeThrough(wv[zv]), dv.see(vv, zv), !hv
        };
      let jv = -1;
      return vv.getActiveMeshCandidates = () => {
        const Pv = vv.frustumPlanes,
          hv = zv._selectionContent;
        hv.reset(), (Pv => {
          const hv = vv.frustumPlanes;
          pv = pv + 1 | 0 || 1;
          const Sv = zv.blocks,
            ev = dv.dw(vv.activeCamera),
            gv = ev && !0;
          if (gv) {
            const zv = vv.ma().currentRenderPassId;
            zv !== jv && (jv = zv, Sz())
          }
          const Nv = hz(),
            wv = gv && !1;
          Sv.length > 0 && function(vv, zv) {
            for (let Pv = 0; Pv < 6; Pv++) {
              const hv = vv[Pv],
                Sv = hv.normal;
              zv[4 * Pv] = Sv.x, zv[4 * Pv + 1] = Sv.y, zv[4 * Pv + 2] = Sv.z, zv[4 * Pv + 3] = hv.d
            }
          }(hv, iv);
          const sv = lv,
            Cv = Tv,
            cv = Wv;
          for (let vv = 0; vv < Sv.length; vv++) {
            const zv = Sv[vv];
            if (!yv.c.IsInFrustum(zv.YPv, hv)) continue;
            const lv = zv.entries;
            {
              const vv = zv._noaSlots,
                hv = zv._noaStamps,
                Sv = zv._noaTerrain;
              for (let zv = 0; zv < lv.length; zv++) {
                const Tv = vv[zv];
                if (Cv[Tv] !== pv && (Cv[Tv] = pv, cv[Tv] = Wz(sv, 6 * Tv, iv) ? 1 : 0), 0 === cv[Tv]) continue;
                const Wv = lv[zv];
                if (gv && hv[zv] === Nv) wv && 1 === Sv[zv] && Ev(Wv) && 0, dv.see(Wv, 1 === Sv[zv] ? Tv : -1);
                else if (gv) {
                  hv[zv] = Nv;
                  const vv = !0 === Wv.metadata[rv.n];
                  Sv[zv] = vv ? 1 : 0;
                  const Pv = mv(Wv, Tv, vv);
                  !vv || Pv && gz(Wv) || (hv[zv] = 0)
                } else ev ? mv(Wv, Tv, !0 === Wv.metadata[rv.n]) : Lv.g.prototype.push.call(Pv, Wv)
              }
              continue
            }
          }
          ev && dv.finish(Pv, av)
        })(hv), Nv.apply(hv, vv.activeCamera);
        const ev = zv.FPv;
        for (let vv = 0; vv < ev.length; vv++) {
          const zv = ev[vv];
          zv.isEnabled() && Lv.g.prototype.push.call(hv, zv)
        }
        return Sv(hv, Pv), hv
      }, {
        nPv: () => dv.culled,
        NPv: (vv, zv) => {
          const Sv = Math.floor(zv[0] / ev),
            pv = Math.floor(zv[1] / ev),
            dv = Math.floor(zv[2] / ev),
            Nv = `${Sv}|${pv}|${dv}`;
          let lv = gv.get(Nv);
          if (!lv) {
            const vv = [0, 0, 0];
            Pv.pvv([Sv * ev - 1, pv * ev - 1, dv * ev - 1], null, vv), lv = Object.assign(hv(vv, ev + 2), {
              OPv: Nv,
              DPv: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: cv()
            }), Gv(lv), wv[lv._noaSlot] = (0, Hv.h)(Sv, pv, dv), av[3 * lv._noaSlot] = Sv, av[3 * lv._noaSlot + 1] = pv, av[3 * lv._noaSlot + 2] = dv, gv.set(Nv, lv)
          }
          lv.DPv++, vv.metadata[Mv.t] = lv
        },
        sK: vv => {
          const zv = vv.metadata[Mv.t];
          zv && (zv.DPv--, zv.DPv <= 0 && (gv.delete(zv.OPv), Cv.push(zv._noaSlot)), vv.metadata[Mv.t] = null)
        },
        fPv: (vv, zv) => {
          const Pv = vv,
            hv = zv.metadata[Mv.t];
          (Pv._noaSlots ??= []).push(hv._noaSlot), (Pv._noaStamps ??= []).push(0), (Pv._noaTerrain ??= []).push(0), Pv.entries.push(zv)
        },
        removeEntry: (vv, zv) => {
          const Pv = vv,
            hv = Pv.entries,
            Sv = hv.indexOf(zv);
          if (Sv < 0) return;
          const ev = Pv._noaSlots,
            gv = Pv._noaStamps,
            pv = Pv._noaTerrain,
            dv = hv.length - 1;
          hv[Sv] = hv[dv], ev[Sv] = ev[dv], gv[Sv] = gv[dv], pv[Sv] = pv[dv], hv.pop(), ev.pop(), gv.pop(), pv.pop()
        },
        j_: vv => {
          for (const zv of gv.values()) {
            zv.aPv.VPv(vv), zv.wPv.VPv(vv);
            for (const Pv of zv.YPv) Pv.VPv(vv);
            Gv(zv)
          }
        }
      }
    }

    function Tz(vv, zv) {
      return zv.set(vv), zv
    }

    function Wz(vv, zv, Pv) {
      const hv = vv[zv],
        Sv = vv[zv + 1],
        ev = vv[zv + 2],
        gv = vv[zv + 3],
        pv = vv[zv + 4],
        dv = vv[zv + 5];
      for (let Nv = 0; Nv < 24; Nv += 4) {
        const vv = Pv[Nv],
          zv = Pv[Nv + 1],
          lv = Pv[Nv + 2];
        if (!(vv * (vv >= 0 ? gv : hv) + zv * (zv >= 0 ? pv : Sv) + lv * (lv >= 0 ? dv : ev) + Pv[Nv + 3] >= 0)) return !1
      }
      return !0
    }
    var wz = Pv(37302);
    class az {
      constructor(vv, zv) {
        var Pv = vv.Is;
        Pv.Ezv(new Av.e(Pv));
        var hv = new Qv.b(dv);
        Pv.RPv = hv, hv.blocks = [];
        var Sv, ev = {},
          gv = [];
        this.textPlanes = gv, this.nPv = () => Sv.nPv(), this.j_ = vv => {
          lv(hv, vv), Sv.j_(vv)
        }, this.NPv = (zv, Pv, pv) => {
          if (!zv.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!zv.metadata[Mv.q] && !zv.metadata[Mv.k]) {
            if (!Pv) {
              var dv = hv.FPv;
              if (zv.metadata[Mv.v] && !zv.parent) {
                dv = gv;
                var lv = zv.cV().tPv;
                zv.metadata[Mv.w] = lv.center.length() + lv.radius, zv.ja = !0
              }
              return dv.push(zv), zv.metadata[Mv.g] = dv, void(zv.metadata[Mv.k] = !0)
            }
            var Wv = Math.floor(pv[0] / Nv),
              wv = Math.floor(pv[1] / Nv),
              av = Math.floor(pv[2] / Nv),
              sv = Wv + "|" + wv + "|" + av,
              Cv = ev[sv];
            if (!Cv) {
              var iv = [Wv * Nv, wv * Nv, av * Nv],
                cv = [0, 0, 0];
              vv.vW.pvv(iv, null, cv), Cv = Tv(cv, Nv), hv.blocks.push(Cv), ev[sv] = Cv, Cv.OPv = sv
            }
            Sv.NPv(zv, pv), Sv.fPv(Cv, zv), Cv.DPv = (Cv.DPv || 0) + 1, zv.metadata[Mv.q] = Cv, zv.metadata[Mv.o] = !0, zv.ja = !0
          }
        }, this.sK = vv => {
          if (vv.metadata) {
            vv.metadata[Mv.k] && ((0, Hv.n)(vv.metadata[Mv.g], vv), vv.metadata[Mv.k] = !1), vv.metadata[Mv.g] === gv && (vv.ja = !1), vv.metadata[Mv.g] = void 0, vv.metadata[Mv.w] = void 0;
            var zv = vv.metadata[Mv.q];
            zv && zv.entries && (vv.metadata[Mv.o] && Sv.removeEntry(zv, vv), zv.DPv--, zv.DPv <= 0 && (delete ev[zv.OPv], (0, Hv.n)(hv.blocks, zv))), Sv.sK(vv), vv.metadata[Mv.q] = null, vv.metadata[Mv.o] = !1
          }
        }, this.EX = function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (vv.metadata[Mv.q]) {
            if (vv.metadata[Mv.o] === zv) return;
            var Pv = vv.metadata[Mv.q];
            Pv && Pv.entries && (zv ? Sv.fPv(Pv, vv) : Sv.removeEntry(Pv, vv)), vv.metadata[Mv.o] = zv
          } else {
            if (vv.metadata[Mv.k] === zv) return;
            var ev = vv.metadata[Mv.g] || hv.FPv;
            zv ? ev.push(vv) : (0, Hv.n)(ev, vv), vv.metadata[Mv.k] = zv
          }
        };
        var dv = () => {},
          Nv = zv * vv.vW.oT.O4,
          lv = (vv, zv) => {
            vv.blocks.forEach((vv => {
              vv.aPv.VPv(zv), vv.wPv.VPv(zv), vv.YPv.forEach((vv => vv.VPv(zv))), vv.blocks && lv(vv, zv)
            }))
          },
          Tv = (vv, zv) => {
            var Pv = new pv.fa(vv[0], vv[1], vv[2]),
              hv = new pv.fa(vv[0] + zv, vv[1] + zv, vv[2] + zv);
            return new Zv.c(Pv, hv, void 0, void 0, void 0, dv)
          };
        Sv = lz(Pv, hv, vv.vW, Tv, ((vv, zv) => {
          for (var Pv = 0; Pv < gv.length; Pv++) {
            var hv = gv[Pv];
            hv.isEnabled(!1) && ((0, wz.c)(hv, zv) && Lv.g.prototype.push.call(vv, hv))
          }
        }))
      }
    }

    function sz(vv) {
      const {
        holderPosition: zv,
        holderRotation: Pv,
        Gy: hv,
        fov: Sv,
        near: ev,
        far: gv
      } = vv.model.Wy, pv = vv.HPv;
      pv.position.f_(zv[0], zv[1], zv[2]), pv.rotation.f_(Pv[0], Pv[1], Pv[2]);
      const dv = vv.camera;
      dv.position.f_(hv[0], hv[1], hv[2]), dv.fov = Sv, dv.minZ = ev, dv.maxZ = gv
    }

    function Cz(vv) {
      const zv = vv.ma(),
        Pv = zv,
        hv = Pv._gl;
      if (!hv || Pv.ka < 2 || zv.SPv || hv.getParameter(hv.DEPTH_BITS) < 24) return !1;
      const Sv = vv._renderingManager,
        ev = Sv.getRenderingGroup(-1),
        gv = Sv.getRenderingGroup(0),
        pv = Rv.e.prototype.render;
      return ev.render = function(vv, zv, Pv, hv, Sv, ev, dv, Nv, lv) {
        (vv || gv._empty) && pv.call(this, vv, zv, Pv, hv, Sv, ev, dv, Nv, lv)
      }, gv.render = function(vv, Pv, Sv, gv) {
        let dv = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Nv = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lv = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Wv = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          wv = arguments.length > 8 ? arguments[8] : void 0;
        vv ? pv.call(this, vv, Pv, Sv, gv, dv, Nv, lv, Wv, wv) : (zv.setAlphaMode(Tv.d.ALPHA_DISABLE), pv.call(this, null, !1, !1, gv, dv, Nv, lv, !1), ev._empty || (hv.depthRange(1, 1), pv.call(ev, null, Pv, Sv, gv, dv, Nv, lv, Wv, wv), hv.depthRange(0, 1)), pv.call(this, null, Pv, Sv, gv, !1, !1, !1, Wv, wv))
      }, !0
    }

    function iz(vv, zv) {
      return [zv, Iv.f].map(((zv, Pv) => {
        const hv = new Sv.e("light", pv.fa.FromArray(zv), vv);
        return hv.diffuse = gv.Color3.FromArray([1, 1, 1]), hv.specular = gv.Color3.FromArray([1, 1, 1]), hv.intensity = Iv.c[Pv], hv
      }))
    }
    class cz extends Nv.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(vv) {
        var zv;
        this.heldTexture = vv, this.particleTexture = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.mirror) && void 0 !== zv ? zv : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let vv = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        vv && (this.particleTexture = null, (0, lv.D)(this.heldTexture), this.heldTexture = null), super.dispose(vv, zv, Pv)
      }
    }
    const Gz = hv.c.Zero();
    const mz = {
      Gzv: function(vv, zv) {
        return new ev.d(vv, zv.Czv, {
          preserveDrawingBuffer: zv.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      BPv: function(vv, zv) {
        ! function(vv, zv, Pv) {
          const hv = new tv.b(vv.engine);
          vv.Is = hv, hv.detachControl(), hv.autoClear = !1, xv.b.MIN_RENDERINGGROUPS = -1;
          for (let ev = xv.b.MIN_RENDERINGGROUPS; ev <= 1; ev++) hv.setRenderingOrder(ev, Rv.e.PainterSortCompare, Rv.e.PainterSortCompare, Rv.e.PainterSortCompare);
          hv.setRenderingAutoClearDepthStencil(0, !1), Uv.c.Enabled = !1, vv.ZPv = new az(vv, Math.round(zv.APv)), vv.HPv = new Vv.b("camHolder", hv), vv.camera = new Kv.e("camera", new pv.fa(0, 0, 0), hv), vv.camera.parent = vv.HPv, sz(vv), (0, Iv.h)(vv, ((vv, zv, Pv) => (0, qv.i)(zv, Pv, vv.Is))), hv.clearColor = gv.d.FromArray(zv.clearColor), hv.ambientColor = gv.Color3.FromArray(zv.ambientColor);
          const Sv = Pv(hv, zv.yPv);
          hv.onNewLightAddedObservable.add((vv => {
            Sv.some((zv => zv === vv)) || console.error(`Light "${vv.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), hv.skipPointerMovePicking = !0
        }(vv, zv, iz), Cz(vv.Is)
      },
      LPv: sz,
      setBabylonFog: function(vv, zv, Pv, hv) {
        const Sv = vv.Is;
        Sv.fogMode = 3, Sv.fogStart = zv, Sv.fogEnd = Pv, Sv.fogColor.set(hv[0], hv[1], hv[2])
      },
      EPv: function(vv, zv, Pv) {
        return vv.engine.ka >= 2 && (vv.oPv || (vv.oPv = new Dv(vv.Is)), !vv.oPv.failed) ? vv.oPv.vV(zv, Pv) : new cz(zv, Pv, vv.Is)
      },
      rPv: function(vv, zv) {
        vv.Is.mF.forEach((Pv => {
          if (Pv instanceof Ov) return void Pv.j_(zv, vv.vW.iW);
          const hv = Pv;
          if (hv.emitter.getConnectedParticleSystems)
            for (const vv of hv._particles) vv.position.set(vv.position.x - zv[0], vv.position.y - zv[1], vv.position.z - zv[2]);
          else {
            if (!hv.worldOffset) throw new Error("Particle system has no world offset");
            hv.worldOffset.x = -vv.vW.iW[0], hv.worldOffset.y = -vv.vW.iW[1], hv.worldOffset.z = -vv.vW.iW[2]
          }
        }))
      },
      linesFromArrays: function(vv, zv, Pv) {
        const hv = new dv.c(zv, vv.Is, null, void 0, void 0, !1);
        return (0, qv.g)(zv, Pv, vv.Is, hv), hv
      },
      Qs: ez,
      bPv: function(vv, zv) {
        return Gz.origin.Vzv(zv.origin), Gz.direction.Vzv(zv.direction), Gz.length = zv.length, Gz.epsilon = zv.epsilon, Gz.bPv(vv, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40423: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Lv,
      e: () => cv,
      i: () => Ev
    });
    var hv = Pv(39560),
      Sv = Pv(40430),
      ev = Pv(40471),
      gv = Pv(40435),
      pv = Pv(37341),
      dv = Pv(37349),
      Nv = Pv(37358),
      lv = Pv(37366),
      Tv = Pv(36697),
      Wv = Pv(36705),
      wv = Pv(40444),
      av = Pv(36681),
      sv = Pv(36685),
      Cv = Pv(36668);

    function iv(vv, zv) {
      return Object.assign((function(vv, Pv, hv, Sv) {
        return zv(this.featureState, vv, Pv, hv, Sv)
      }), {
        Ew: vv
      })
    }

    function cv(vv) {
      const zv = class extends wv.e {
          constructor(zv, Pv) {
            const hv = (0, sv.bb)(zv),
              Sv = hv && (0, sv.x)(hv, vv.name);
            for (var ev = arguments.length, gv = new Array(ev > 2 ? ev - 2 : 0), pv = 2; pv < ev; pv++) gv[pv - 2] = arguments[pv];
            super(zv, vv.name, vv.priority, Sv ? Sv.defines : vv.defines(...gv), !1), this.featureState = void 0, this.featureState = Pv, this._pluginManager._addPlugin(this), this._enable(!0), (0, sv.A)(this._material, vv, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return vv.className
          }
          isCompatible(vv) {
            return vv === Cv.d.GLSL || vv === Cv.d.WGSL
          }
        },
        Pv = (0, av.g)(vv);
      for (const [hv, Sv] of Object.entries(av.d)) {
        const ev = vv[hv];
        if (ev) {
          const vv = Pv[hv];
          Object.defineProperty(zv.prototype, Sv, {
            value: iv(ev, vv),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zv
    }
    class Gv extends(cv(pv.c)) {}
    var mv = Pv(39127),
      jv = Pv(40452);
    const fv = new WeakMap;

    function Fv(vv, zv, Pv) {
      let hv = fv.get(Pv);
      hv || (hv = new Map, fv.set(Pv, hv));
      const {
        url: Sv
      } = vv;
      let ev = hv.get(Sv);
      return ev || (ev = async function(vv, zv, Pv) {
        const {
          width: hv,
          height: Sv
        } = vv.getSize(), ev = Math.round(Sv / hv), pv = zv && zv.byteLength === hv * hv * ev * 4 ? zv : vv._readPixelsSync();
        return new jv.c(pv, hv, hv, ev, mv.d.TEXTUREFORMAT_RGBA, Pv, !0, !1, gv.d.NEAREST_NEAREST_MIPLINEAR)
      }(vv, zv, Pv), hv.set(Sv, ev), ev.catch((() => {
        hv.delete(Sv)
      }))), ev
    }
    var Yv = Pv(37375);
    class nv extends(cv(dv.g)) {
      constructor(vv, zv) {
        super(vv, zv), zv.textures.forEach(((vv, zv) => {
          vv.mirror.onLoadObservable.add((vv => {
            this.setTextureArrayData(vv, zv).catch((vv => {
              console.error(`Failed to build texture array for atlas ${zv}`, vv)
            }))
          }))
        })), (0, Yv.i)(zv, vv.shaderLanguage)
      }
      async setTextureArrayData(vv, zv) {
        var Pv, hv;
        const Sv = this.featureState,
          {
            width: ev,
            height: gv
          } = vv.getSize(),
          pv = Sv.useWebGL2 ? await Fv(vv, null !== (Pv = null === (hv = Sv.sources.pixels) || void 0 === hv ? void 0 : hv[zv]) && void 0 !== Pv ? Pv : null, this._material.rD()) : null;
        (0, Yv.d)(this._material, Sv, zv, pv, ev, Math.round(gv / ev), this._material.shaderLanguage)
      }
    }
    var Ov = Pv(40454),
      Dv = Pv(39609),
      Kv = Pv(36591),
      Vv = Pv(40460),
      Uv = Pv(39720),
      Rv = Pv(39598),
      xv = Pv(40408),
      tv = Pv(37086),
      qv = Pv(40469);
    class Iv extends Ov.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Qv = {
      Mesh: Vv.e,
      TransformNode: xv.b,
      Sa: Ov.e,
      VertexBuffer: Ov.i,
      BoundingInfo: Dv.e,
      fa: Kv.fa,
      ArenaBuffer: Iv,
      SubMesh: Rv.c,
      VertexData: Uv.d,
      MirroredGeometry: qv.d,
      meshFromArrays: qv.g,
      plainMeshFromArrays: qv.i
    };
    (0, tv.d)(Qv);
    var Zv = Pv(36898);
    class Av extends(cv(lv.i)) {
      constructor(vv, zv) {
        if (super(vv, zv), vv instanceof hv.StandardMaterial && zv.dirLightCount > 0) {
          const zv = vv,
            Pv = zv._blockDirtyMechanism;
          zv._blockDirtyMechanism = !0, vv.disableLighting = !0, zv._blockDirtyMechanism = Pv;
          const hv = (0, sv.bb)(vv);
          hv && (hv.disableLighting = !0, (0, sv.Z)(hv))
        }(0, Zv.j)(vv)
      }
      dispose(vv) {
        (0, Zv.k)(this._material), super.dispose(vv)
      }
    }

    function Lv(vv, zv) {
      if (!(zv instanceof hv.StandardMaterial) || zv.specularTexture) return;
      const {
        r: Pv,
        g: Sv,
        b: ev
      } = zv.specularColor;
      0 === Pv && 0 === Sv && 0 === ev && (vv.SPECULARTERM = !1)
    }(0, lv.h)({
      disableUnusedSpecularTerm: Lv
    });
    var Hv = Pv(36775),
      Mv = Pv(37095);
    const yv = new RegExp(`^#define ${Nv.b}\\s*$`, "m");
    class Bv extends(cv(Nv.g)) {
      constructor(vv, zv) {
        super(vv, zv), this.ea = !1, zv.ditherOnlyWhileFading && (Mv.h.add(vv), this.prewarmDitherTwins(vv))
      }
      prewarmDitherTwins(vv) {
        const zv = new WeakSet;
        vv.onEffectCreatedObservable.add((Pv => {
          let {
            effect: hv,
            subMesh: Sv
          } = Pv;
          if (this.featureState.prewarmingDither || zv.has(hv)) return;
          zv.add(hv);
          const ev = null === Sv || void 0 === Sv ? void 0 : Sv.getMesh();
          ev && !yv.test(hv.defines) && vv.rD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ev) || zv.delete(hv)
          }))
        }))
      }
      prewarmDither(vv) {
        if (this.ea || vv.mzv()) return !1;
        const zv = new Rv.c(0, 0, 0, 0, 0, vv, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(vv, zv)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zv.effect
      }
      dispose(vv) {
        this.ea = !0, super.dispose(vv)
      }
    }
    const Jv = new Map;

    function Ev(vv, zv) {
      Jv.set(vv, zv)
    }
    Ev(pv.c, Gv), Ev(dv.g, nv), Ev(Nv.g, Bv), Ev(lv.i, Av), (0, Tv.c)({
      create: (vv, zv) => {
        const Pv = new hv.StandardMaterial(vv.name, zv);
        return (0, Hv.m)(vv, Pv), Pv.detailMap._pluginDefineNames
      },
      write: (vv, zv, Pv) => {
        (0, Hv.M)(vv.mirror, zv, Pv)
      },
      addFeature: (vv, zv, Pv) => {
        const hv = Jv.get(zv.feature);
        if (!hv) throw new Error(`${zv.feature.name} has no plugin class (registerPluginClass)`);
        new hv(vv.mirror, zv.state, ...Pv)
      },
      texture: (vv, zv, Pv) => {
        let {
          url: hv,
          noMipmap: Sv,
          invertY: ev,
          samplingMode: pv,
          data: dv,
          sets: Nv
        } = Pv;
        if (!dv) {
          const Pv = new gv.d(hv, zv, Sv, ev, pv);
          return Object.assign(Pv, Nv), void(0, Wv.K)(vv, Pv)
        }
        const lv = {},
          Tv = new Promise(((vv, zv) => {
            lv.onLoad = vv, lv.onError = (vv, Pv) => {
              zv(new Error(`${dv.context}: ${(null===Pv||void 0===Pv?void 0:Pv.message)||vv||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: wv,
            bytes: av,
            label: sv
          } = dv,
          Cv = {
            noMipmap: Sv,
            invertY: !1,
            samplingMode: pv,
            ...lv,
            mimeType: wv,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          iv = new gv.d(null, zv, Cv);
        Hv.q.set(iv, Tv), Object.assign(iv, Nv), iv.updateURL(hv, av);
        const cv = iv.getInternalTexture();
        cv && (cv.label = sv), vv.uvSet = iv.coordinatesIndex, vv.matrix.set((0, Hv.F)(iv)), (0, Wv.K)(vv, iv)
      },
      cube: (vv, zv, Pv) => {
        let {
          rootUrl: hv,
          files: ev,
          noMipmap: pv,
          luminance: dv
        } = Pv;
        const {
          samplingMode: Nv
        } = vv.sampler, lv = Nv === (0, Wv.z)(pv) ? null : () => {
          (0, Hv.C)(Tv, Nv)
        }, Tv = new Sv.b(hv, zv, null, pv, ev, lv, null, (0, Wv.v)(dv));
        Tv.coordinatesMode = gv.d.SKYBOX_MODE, (0, Wv.K)(vv, Tv)
      },
      canvas: (vv, zv, Pv) => {
        let {
          width: hv,
          height: Sv,
          mipmaps: pv,
          samplingMode: dv,
          hasAlpha: Nv = !1,
          wrap: lv = gv.d.CLAMP_ADDRESSMODE
        } = Pv;
        const Tv = new ev.b(zv, {
          width: hv,
          height: Sv
        }, vv, pv, dv);
        Tv.hasAlpha = Nv, Tv.wrapU = lv, Tv.wrapV = lv;
        const Wv = (0, Hv.v)(Tv);
        return (0, Hv.w)(Wv, Tv), Wv
      }
    })
  },
  40469: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      g: () => Tv,
      i: () => Wv
    });
    var hv = Pv(40454),
      Sv = Pv(39361),
      ev = Pv(39609),
      gv = Pv(39728),
      pv = Pv(40460),
      dv = Pv(39720),
      Nv = Pv(36964);
    class lv extends gv.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (vv, zv) => {
          this.releaseUnlessInstanced(zv)
        }, this.onLinked = null
      }
      link(vv) {
        var zv;
        (0, Nv.p)(vv), this.model = vv, null === (zv = this.onLinked) || void 0 === zv || zv.call(this, vv)
      }
      relink() {
        this.release();
        const vv = [];
        for (const Sv of Object.values(this._vertexBuffers))
          if (!Sv.getIsInstanced()) {
            const {
              byteOffset: zv,
              byteStride: Pv,
              type: hv,
              normalized: ev
            } = Sv;
            vv.push({
              kind: Sv.getKind(),
              data: Sv.getData(),
              offset: zv,
              stride: Pv,
              components: Sv.getSize(),
              glType: hv,
              isNormalized: ev
            })
          } const zv = this._indices.length ? this._indices : null,
          {
            minimum: Pv,
            maximum: hv
          } = this.extend;
        this.link(new Nv.g(vv, zv, this.getTotalVertices(), new Float64Array(Pv.pPv()), new Float64Array(hv.pPv())))
      }
      copy(vv) {
        if (!this.model) return super.copy(vv);
        const zv = new lv(vv, this.rD()),
          Pv = this.dPv(void 0, !0);
        Pv && zv.setIndices(Pv);
        let gv = !1;
        for (const ev in this._vertexBuffers) {
          const vv = this._vertexBuffers[ev],
            Pv = vv.getData();
          if (!Pv) continue;
          const pv = vv.getSize(),
            {
              type: dv,
              byteOffset: Nv,
              byteStride: lv,
              normalized: Tv
            } = vv;
          gv ||= vv.isUpdatable();
          const Wv = vv.getIsInstanced() ? (Pv instanceof Array ? 4 * Pv.length : Pv.byteLength) / lv : this.getTotalVertices(),
            wv = (0, Sv.t)(Pv, pv, dv, Nv, lv, Wv, !0),
            av = {
              updatable: vv.isUpdatable(),
              stride: pv,
              type: dv,
              normalized: Tv,
              takeBufferOwnership: !0,
              instanced: vv.getIsInstanced()
            };
          zv.setVerticesBuffer(new hv.i(this.ma(), wv, ev, av), Wv)
        }
        return zv._updatable = gv, zv._boundingInfo = new ev.e(this.extend.minimum, this.extend.maximum), zv.relink(), zv
      }
      static mergeMeshes(vv, zv, Pv, hv, Sv, ev) {
        const dv = vv[0].rD(),
          Nv = new pv.e(vv[0].name + "_merged", dv),
          Tv = new lv(gv.b.RandomId(), dv, void 0, !1, Nv);
        try {
          if (!pv.e.MergeMeshes(vv, zv, Pv, Nv, Sv, ev)) return Nv.dispose(), null
        } catch (Wv) {
          throw Nv.dispose(), Wv
        }
        return Tv.relink(), Nv
      }
      removeVerticesData(vv) {
        this.releaseUnlessInstanced(vv), super.removeVerticesData(vv)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(vv) {
        var zv;
        vv && null !== (zv = this.getVertexBuffer(vv)) && void 0 !== zv && zv.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Nv.A)(this.model), this.model = null)
      }
    }

    function Tv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pv.e(vv, Pv);
      const Sv = (0, Nv.l)(zv),
        {
          positions: ev,
          normals: Tv,
          uvs: Wv,
          indices: wv,
          named: av = {}
        } = zv,
        sv = new dv.d;
      sv.positions = ev, sv.normals = null !== Tv && void 0 !== Tv ? Tv : null, sv.uvs = null !== Wv && void 0 !== Wv ? Wv : null, sv.indices = wv;
      const Cv = new lv(gv.b.RandomId(), Pv, sv, !1, hv);
      for (const {
          kind: gv,
          components: pv
        }
        of Sv.vertexAttributes) gv in av && hv.setVerticesData(gv, av[gv], !1, pv);
      return Cv.link(Sv), hv
    }

    function Wv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Sv = new pv.e(vv, Pv),
        {
          positions: ev,
          normals: gv,
          uvs: Nv,
          indices: lv
        } = zv;
      return Object.assign(new dv.d, {
        positions: ev,
        normals: gv,
        uvs: Nv,
        indices: lv
      }).applyToMesh(Sv, hv), Sv
    }
  },
  40916: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Cv,
      f: () => pv,
      j: () => gv,
      k: () => Nv
    });
    var hv = Pv(36745),
      Sv = Pv(38245),
      ev = Pv(38239);

    function gv(vv, zv, Pv, hv) {
      const Sv = ev.s;
      zv.fill(0), vv.gravity.toArray(zv, Sv.gravity), vv.colorDead.toArray(zv, Sv.colorDead), Pv[Sv.ramp] = vv.useRampGradients ? 1 : 0;
      const gv = vv.getColorGradients(),
        pv = Wv(vv, gv, "colour", hv);
      Pv[Sv.colorCount] = pv;
      for (let ev = 0; ev < pv; ev++) {
        var dv;
        const vv = gv[wv(gv, ev)];
        zv[Sv.colorPositions + ev] = vv.gradient, vv.color1.toArray(zv, Sv.color1 + 4 * ev), (null !== (dv = vv.color2) && void 0 !== dv ? dv : vv.color1).toArray(zv, Sv.color2 + 4 * ev)
      }
      const Nv = vv.getVelocityGradients(),
        lv = Wv(vv, Nv, "pC", hv);
      Pv[Sv.velocityCount] = lv;
      for (let ev = 0; ev < lv; ev++) cv(zv, Sv.pC + 4 * ev, Nv[wv(Nv, ev)]);
      const Tv = vv.useRampGradients ? vv.getColorRemapGradients() : null,
        av = Wv(vv, Tv, "colour remap", hv);
      Pv[Sv.remapCount] = av;
      for (let ev = 0; ev < av; ev++) cv(zv, Sv.remap + 4 * ev, Tv[wv(Tv, ev)])
    }

    function pv() {
      return {
        key: [],
        texels: new Uint8Array(4 * ev.i)
      }
    }
    const dv = [];

    function Nv(vv, zv) {
      return lv(vv, dv), !iv(dv, zv.key) && (zv.key.length = 0, zv.key.push(...dv), zv.key.length > 0 && function(vv, zv) {
        for (let Pv = 0; Pv < ev.i; Pv++) Sv.i.GetCurrentGradient(Pv / ev.i, vv, ((vv, zv, Pv) => {
          hv.Color3.LerpToRef(vv.color, zv.color, Pv, Tv)
        })), zv[4 * Pv] = 255 * Tv.r, zv[4 * Pv + 1] = 255 * Tv.g, zv[4 * Pv + 2] = 255 * Tv.b, zv[4 * Pv + 3] = 255
      }(vv.getRampGradients(), zv.texels), !0)
    }

    function lv(vv, zv) {
      zv.length = 0;
      const Pv = vv.useRampGradients ? vv.getRampGradients() : null;
      if (null !== Pv && void 0 !== Pv && Pv.length) {
        zv.push(Pv.length);
        for (const vv of Pv) zv.push(vv.gradient, vv.color.r, vv.color.g, vv.color.b)
      }
    }
    const Tv = new hv.Color3;

    function Wv(vv, zv, Pv, hv) {
      return zv ? zv.length > ev.c ? (hv(`particleStops:${Pv}`, `GPU particles use the first 2 and last ${ev.c-2} of more than ${ev.c} ${Pv} gradient stops (${vv.name})`), ev.c) : zv.length : 0
    }

    function wv(vv, zv) {
      return zv < 2 || vv.length <= ev.c ? zv : vv.length - ev.c + zv
    }
    const av = new Float32Array(ev.l),
      sv = new Uint32Array(av.buffer);

    function Cv(vv, zv, Pv) {
      return gv(vv, av, sv, Pv), zv && iv(sv, zv) ? null : sv.slice()
    }

    function iv(vv, zv) {
      if (vv.length !== zv.length) return !1;
      for (let Pv = 0; Pv < vv.length; Pv++)
        if (vv[Pv] !== zv[Pv]) return !1;
      return !0
    }

    function cv(vv, zv, Pv) {
      var hv;
      vv[zv] = Pv.gradient, vv[zv + 1] = Pv.factor1, vv[zv + 2] = null !== (hv = Pv.factor2) && void 0 !== hv ? hv : Pv.factor1
    }
  },
  40908: (vv, zv, Pv) => {
    function hv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const zv = new Set;
      return (Pv, hv) => {
        zv.has(Pv) || (zv.add(Pv), console.warn(vv + hv))
      }
    }
    Pv.d(zv, {
      d: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);