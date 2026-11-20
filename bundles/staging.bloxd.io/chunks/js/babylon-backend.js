export const id = 0;
export const ids = [0];
export const modules = {
  40862: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      CapeMaterialPlugin: () => Pq,
      HueTintMaterialPlugin: () => Qq,
      LifeformMaterialPlugin: () => yq,
      OverlayMaterialPlugin: () => tq
    });
    var Yq = gq(40869),
      lq = gq(37987);
    class Oq extends((0, Yq.h)(lq.c)) {}(0, Yq.i)(lq.c, Oq);
    var mq = gq(37206);
    class xq extends((0, Yq.h)(mq.h)) {}(0, Yq.i)(mq.h, xq);
    var Aq = gq(37828);
    class cq extends((0, Yq.h)(Aq.e)) {}(0, Yq.i)(Aq.e, cq);
    var uq = gq(37429),
      Bq = gq(40003),
      Wq = gq(37421);
    class Nq extends((0, Yq.h)(Wq.f)) {
      constructor(qq, Eq, gq) {
        super(qq, Eq, gq), (0, uq.l)(qq)
      }
      dispose(qq) {
        (0, uq.n)(this._material), super.dispose(qq)
      }
    }(0, Yq.i)(Wq.f, Nq), (0, Wq.i)({
      disableUnusedSpecularTerm: Yq.e,
      isLightingDisabled: qq => qq instanceof Bq.StandardMaterial && qq.disableLighting
    });
    var aq = gq(38662);
    class Vq extends((0, Yq.h)(aq.e)) {}(0, Yq.i)(aq.e, Vq);
    var dq = gq(38755),
      jq = gq(37295),
      Hq = gq(38114),
      oq = gq(37253);
    class Pq extends((0, Yq.h)(dq.d)) {}(0, Yq.i)(dq.d, Pq);
    class Qq extends((0, Yq.h)(jq.d)) {}(0, Yq.i)(jq.d, Qq);
    class yq extends((0, Yq.h)(Hq.l)) {}(0, Yq.i)(Hq.l, yq);
    class tq extends((0, Yq.h)(oq.e)) {}(0, Yq.i)(oq.e, tq)
  },
  41307: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      addBabylonLights: () => jE,
      default: () => PE
    });
    var Yq = gq(41311),
      lq = (gq(39732), gq(40860), gq(40236), gq(41324)),
      Oq = gq(39585),
      mq = gq(37286),
      xq = gq(37131),
      Aq = gq(41334),
      cq = gq(41338),
      uq = gq(37244),
      Bq = (gq(40869), gq(41347)),
      Wq = gq(41340),
      Nq = gq(38684),
      aq = gq(41352),
      Vq = gq(39617),
      dq = gq(38671);
    const jq = "gpuParticles",
      Hq = dq.w,
      oq = qq => qq / 4,
      Pq = qq => `gpuParticleSystem[${qq>>2}].${"xyzw"[3&qq]}`,
      Qq = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${dq.b}\n#define COLOR_POSITIONS ${oq(Hq.colorPositions)}\n#define COLOR1 ${oq(Hq.color1)}\n#define COLOR2 ${oq(Hq.color2)}\n#define VELOCITY ${oq(Hq.JV)}\n#define REMAP ${oq(Hq.remap)}\n#define RECORDS_PER_ROW ${dq.o}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${dq.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Pq(Hq.gravity)}, ${Pq(Hq.gravity+1)}, ${Pq(Hq.gravity+2)}); }\nint colorCount() { return int(${Pq(Hq.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${oq(Hq.colorDead)}]; }\nint velocityCount() { return int(${Pq(Hq.velocityCount)}); }\nint remapCount() { return int(${Pq(Hq.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Vq.d.ShadersStore[`${jq}VertexShader`] = Qq, Vq.d.ShadersStore[`${jq}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const yq = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      tq = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var rq = gq(38665),
      vq = gq(41355);
    class hq extends rq.d {
      constructor(qq, Eq, gq, Yq) {
        super(qq, Eq, gq), this.renderer = gq, this.PV = Yq, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(dq.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, vq.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (qq, Eq) => {
          const {
            engine: gq
          } = this, Yq = gq._gl;
          gq._bindTextureDirectly(Yq.TEXTURE_2D, this.records, !0), gq._unpackFlipY(!1);
          const lq = this.ring.recordBits;
          for (let Oq = qq; Oq < Eq;) {
            const qq = Math.floor(Oq / dq.o),
              gq = Math.min(Eq, (qq + 1) * dq.o);
            Yq.texSubImage2D(Yq.TEXTURE_2D, 0, Oq % dq.o * 4, qq, 4 * (gq - Oq), 1, Yq.RGBA_INTEGER, Yq.UNSIGNED_INT, lq, Oq * dq.f), Oq = gq
          }
          gq._bindTextureDirectly(Yq.TEXTURE_2D, null)
        }, this.id = qq;
        const lq = Yq.Ba();
        this.engine = lq;
        const Oq = Math.max(1, Eq),
          mq = Math.min(Oq, dq.o);
        this.records = lq.createRawTexture(null, 4 * mq, Math.ceil(Oq / mq), Bq.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Bq.c.TEXTURE_NEAREST_SAMPLINGMODE, null, Bq.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.PV.getAnimationRatio() || 1;
        const Eq = this.PV.getFrameId();
        if (Eq === this.animatedFrame) return !1;
        const gq = super.animate(qq);
        return gq && (this.animatedFrame = Eq, this.ring.takeUploads(this.uploadSlots)), gq
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(qq) {
        (0, vq.h)(this, this.uniforms, this.uniformBits, qq);
        for (const gq of dq.s) this.uniforms[gq] = this.uniformBits[gq];
        var Eq;
        (0, vq.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Eq = this.ramp) || void 0 === Eq || Eq.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Wq.d.CreateRGBATexture(this.rampTexels.texels, dq.m, 1, this.PV, !1, !1, Bq.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var qq;
        this.records.dispose(), null === (qq = this.ramp) || void 0 === qq || qq.dispose(), this.ramp = null
      }
    }
    class nq {
      constructor(qq) {
        this.PV = qq, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, aq.e)(), this.engine = qq.Ba(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Wq.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, qq, !1, !1, Bq.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      Fk(qq, Eq) {
        const gq = dq.o * this.engine.getCaps().maxTextureSize;
        Eq > gq && this.warnOnce(`capacity:${qq}`, `particle system ${qq} holds ${gq} particles, not ${Eq}: its records texture's limit`);
        const Yq = new hq(qq, Math.min(Eq, gq), this, this.PV);
        return this.PV.addParticleSystem(Yq), Yq
      }
      canDraw(qq) {
        var Eq, gq;
        if (this.failed || null === (Eq = qq.texture) || void 0 === Eq || null === (gq = Eq.mirror) || void 0 === gq || !gq.isReady()) return !1;
        for (const Yq of (0, Nq.l)(qq.blendMode))
          if (!this.effectFor(Yq).isReady()) return !1;
        return !0
      }
      disposeStopped(qq) {
        this.PV._toBeDisposed.push(qq)
      }
      remove(qq) {
        this.PV.removeParticleSystem(qq), qq.releaseGl()
      }
      render(qq) {
        var Eq;
        if (!qq.isReady() || !qq.hasLiveParticles()) return 0;
        const {
          engine: gq,
          PV: Yq,
          frame: lq
        } = this;
        qq.prepareDraw(this.warnOnce), qq.drawOffset(lq, 0), lq[3] = qq.drawTime();
        const Oq = qq.ring.drawStart(),
          mq = qq.ring.drawCount(),
          xq = null !== (Eq = qq.ramp) && void 0 !== Eq ? Eq : this.whiteRamp;
        gq.setState(!1);
        for (const Aq of (0, Nq.l)(qq.blendMode)) {
          const Eq = this.effectFor(Aq);
          gq.enableEffect(Eq), Eq.setTexture("gpuParticleTexture", qq.texture.mirror), Eq.setTexture("gpuParticleRampTexture", xq), Eq._bindTexture("gpuParticleRecords", qq.records), Eq.setMatrix("gpuParticleView", Yq.getViewMatrix()), Eq.setMatrix("gpuParticleProjection", Yq.getProjectionMatrix()), Eq.setFloatArray4("gpuParticleSystem", qq.uniforms), Eq.setFloat4("gpuParticleFrame", lq[0], lq[1], lq[2], lq[3]), Eq.setFloat2("gpuParticleRange", Oq, mq), Eq.setFloat("gpuParticleRamp", qq.uniforms[dq.w.ramp]), gq.bindBuffers(this.vertexBuffers, null, Eq), gq.setAlphaMode((0, Nq.i)(Aq)), gq.drawArraysType(Bq.c.MATERIAL_TriangleStripDrawMode, 0, 4, mq), Eq._bindTexture("gpuParticleRecords", null)
        }
        return gq.setAlphaMode(Bq.c.ALPHA_DISABLE), mq
      }
      awaitLink(qq) {
        const Eq = qq.getPipelineContext(),
          gq = this.engine._gl;
        !this.failed && gq && (!Eq || Eq.isParallelCompiled && !Eq.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Eq.isParallelCompiled && Eq.program && (gq.getProgramParameter(Eq.program, gq.LINK_STATUS) || this.fail(gq.getProgramInfoLog(Eq.program) || "a program did not link")))
      }
      effectFor(qq) {
        return qq === Nq.d ? this.multiplyEffect : this.effect
      }
      createEffect(qq) {
        return this.engine.createEffect(jq, [], yq, tq, qq, void 0, void 0, ((qq, Eq) => {
          this.fail(Eq)
        }))
      }
      fail(qq) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${qq}`);
          for (const qq of this.PV.xZ.slice()) qq instanceof hq && qq.disposeOnStop && qq.dispose()
        }
      }
    }
    var bq = gq(39941),
      iq = gq(40857),
      Zq = gq(39712),
      fq = gq(39903),
      Mq = gq(39900),
      Tq = gq(39833),
      zq = gq(40908),
      Sq = gq(37614),
      pq = gq(41361),
      Gq = gq(41369),
      Lq = gq(41374),
      Jq = gq(39858),
      kq = gq(2778),
      Rq = gq(37489),
      Uq = gq(40060),
      Fq = gq(37569),
      sq = gq(37513);

    function Xq(qq) {
      if (qq.visibility < 1 || !qq.isVisible || !qq.isEnabled() || qq.metadata[sq.c] || !qq.isReady()) return !0;
      const Eq = qq.fn;
      if (!Eq || 0 === Eq.length) return !0;
      for (let gq = 0; gq < Eq.length; gq++) {
        const Yq = Eq[gq],
          lq = Yq.da();
        if (!lq || !lq.isReadyForSubMesh(qq, Yq, !1)) return !0
      }
      return !1
    }
    class wq {
      constructor(qq, Eq) {
        this.wB = qq, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Eq.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      gN(qq) {
        var Eq;
        const gq = this.armed;
        if (this.armed = !1, this.vis = null, !gq) return !1;
        this.culled = 0;
        const {
          wB: Yq
        } = this, lq = null === (Eq = Yq.Qv) || void 0 === Eq ? void 0 : Eq.visibility;
        if (!lq || !qq || Yq.Ma.Ta) return !1;
        if (!(Yq.kB.pYq[0] >= Fq.f)) return !1;
        const Oq = qq.getProjectionMatrix().m;
        if (0 !== Oq[15]) return !1;
        const mq = Yq.BW,
          xq = qq.globalPosition,
          Aq = this.eye;
        return Aq[0] = xq.x + mq[0], Aq[1] = xq.y + mq[1], Aq[2] = xq.z + mq[2], !!lq.eyeClear(Aq[0], Aq[1], Aq[2], qq.minZ, Oq, Yq.kB) && (this.vis = lq, this.passable.clear(), this.count = 0, !0)
      }
      see(qq, Eq) {
        const gq = this.count++;
        if (gq === this.cellSlots.length) {
          const qq = new Int32Array(2 * gq);
          qq.set(this.cellSlots), this.cellSlots = qq
        }
        this.cellSlots[gq] = Eq, this.meshes[gq] = qq
      }
      seeThrough(qq) {
        this.passable.add(qq)
      }
      finish(qq, Eq) {
        const {
          vis: gq,
          eye: Yq,
          meshes: lq,
          count: Oq,
          cellSlots: mq
        } = this, {
          kB: xq
        } = this.wB, [Aq, cq] = xq.pYq, uq = null !== gq && gq.update(Yq[0], Yq[1], Yq[2], xq.Uqq, Aq, cq, this.passable);
        let Bq = 0;
        for (let Wq = 0; Wq < Oq; Wq++) {
          const Yq = lq[Wq];
          if (uq) {
            const qq = 3 * mq[Wq];
            if (qq >= 0 && !gq.isDrawn(Eq[qq], Eq[qq + 1], Eq[qq + 2])) {
              Bq++;
              continue
            }
          }
          Jq.c.prototype.push.call(qq, Yq)
        }
        lq.fill(null, 0, Oq), this.count = 0, this.vis = null, this.culled = Bq
      }
    }
    var Kq = gq(37560),
      Cq = gq(37499),
      Iq = gq(40037),
      eq = gq(41377),
      Dq = gq(40040),
      qE = gq(39960);
    let EE = 1;
    const gE = new WeakSet;

    function YE() {
      return EE
    }

    function lE() {
      EE = EE >= 1073741823 ? 1 : EE + 1
    }

    function OE(qq) {
      const Eq = qq.metadata;
      if (!Eq || !0 !== Eq[Rq.n]) return;
      const gq = Eq[Rq.s],
        Yq = null === gq || void 0 === gq ? void 0 : gq._noaStamps;
      if (!gq || !Yq) return;
      const lq = gq.entries.indexOf(qq);
      lq >= 0 && (Yq[lq] = 0)
    }

    function mE(qq) {
      const Eq = qq.fn;
      for (let gq = 0; gq < Eq.length; gq++) {
        const qq = Eq[gq].da();
        if (qq && !qq.isFrozen) return !1
      }
      for (let gq = 0; gq < Eq.length; gq++) {
        const qq = Eq[gq].da();
        qq && gE.add(qq)
      }
      return !0
    }
    let xE = !1;
    const AE = new WeakSet;

    function cE(qq, Eq) {
      const gq = qq[Eq];
      if ("function" !== typeof gq) throw new Error(`terrainDrawState: Babylon has no ${Eq} to hook`);
      return gq
    }

    function uE(qq, Eq, gq, Yq, lq) {
      const Oq = gq.kB.Uqq,
        mq = new Map;
      let xq = 0;
      const Aq = new wq(gq, qq),
        cq = new Kq.d(Oq, qq.Ba());
      ! function(qq) {
        if (AE.has(qq) || (AE.add(qq), qq.onContextLostObservable.add(lE), qq.onContextRestoredObservable.add(lE)), xE) return;
        xE = !0;
        const Eq = eq.d.prototype,
          gq = cE(Eq, "_markSubMeshesAsDirty");
        Object.assign(Eq, {
          _markSubMeshesAsDirty(qq) {
            gq.call(this, qq), OE(this)
          }
        });
        const Yq = cE(qE.c.prototype, "_syncParentEnabledState");
        Object.assign(qE.c.prototype, {
          _syncParentEnabledState() {
            Yq.call(this), OE(this)
          }
        });
        const lq = cE(Dq.c.prototype, "resetDrawCache");
        Dq.c.prototype.resetDrawCache = function(qq, Eq) {
          lq.call(this, qq, Eq), OE(this.getMesh())
        };
        const Oq = Iq.e.prototype,
          mq = cE(Oq, "markDirty");
        Oq.markDirty = function(qq) {
          mq.call(this, qq), gE.has(this) && lE()
        };
        const xq = cE(Oq, "_markAllSubMeshesAsDirty");
        Object.assign(Oq, {
          _markAllSubMeshesAsDirty(qq) {
            xq.call(this, qq), gE.has(this) && lE()
          }
        })
      }(qq.Ba());
      let uq = new Float64Array(384),
        Bq = new Int32Array(64),
        Wq = new Uint8Array(64),
        Nq = new Float64Array(64),
        aq = new Int32Array(192),
        Vq = 0;
      const dq = [],
        jq = new Float64Array(24),
        Hq = () => {
          const qq = dq.pop();
          return void 0 !== qq ? (Bq[qq] = 0, qq) : (Vq === Bq.length && (uq = BE(uq, new Float64Array(2 * uq.length)), Bq = BE(Bq, new Int32Array(2 * Bq.length)), Wq = BE(Wq, new Uint8Array(2 * Wq.length)), Nq = BE(Nq, new Float64Array(2 * Nq.length)), aq = BE(aq, new Int32Array(2 * aq.length))), Vq++)
        },
        oq = qq => {
          const Eq = 6 * qq._noaSlot,
            gq = qq.FYq[0],
            Yq = qq.FYq[1];
          uq[Eq] = gq.x, uq[Eq + 1] = gq.y, uq[Eq + 2] = gq.z, uq[Eq + 3] = Yq.x, uq[Eq + 4] = Yq.y, uq[Eq + 5] = Yq.z
        },
        Pq = (qq, Eq, gq) => {
          if (!gq) return Aq.see(qq, -1), !1;
          const Yq = Xq(qq);
          return Yq && Aq.seeThrough(Nq[Eq]), Aq.see(qq, Eq), !Yq
        };
      let Qq = -1;
      return qq.getActiveMeshCandidates = () => {
        const gq = qq.frustumPlanes,
          Yq = Eq._selectionContent;
        Yq.reset(), (gq => {
          const Yq = qq.frustumPlanes;
          xq = xq + 1 | 0 || 1;
          const lq = Eq.blocks,
            Oq = Aq.gN(qq.activeCamera),
            mq = Oq && !0;
          if (mq) {
            const Eq = qq.Ba().currentRenderPassId;
            Eq !== Qq && (Qq = Eq, lE())
          }
          const cq = YE(),
            Nq = mq && !1;
          lq.length > 0 && function(qq, Eq) {
            for (let gq = 0; gq < 6; gq++) {
              const Yq = qq[gq],
                lq = Yq.normal;
              Eq[4 * gq] = lq.x, Eq[4 * gq + 1] = lq.y, Eq[4 * gq + 2] = lq.z, Eq[4 * gq + 3] = Yq.d
            }
          }(Yq, jq);
          const Vq = uq,
            dq = Bq,
            Hq = Wq;
          for (let qq = 0; qq < lq.length; qq++) {
            const Eq = lq[qq];
            if (!Uq.d.IsInFrustum(Eq.FYq, Yq)) continue;
            const uq = Eq.entries;
            {
              const qq = Eq._noaSlots,
                Yq = Eq._noaStamps,
                lq = Eq._noaTerrain;
              for (let Eq = 0; Eq < uq.length; Eq++) {
                const Bq = qq[Eq];
                if (dq[Bq] !== xq && (dq[Bq] = xq, Hq[Bq] = WE(Vq, 6 * Bq, jq) ? 1 : 0), 0 === Hq[Bq]) continue;
                const Wq = uq[Eq];
                if (mq && Yq[Eq] === cq) Nq && 1 === lq[Eq] && Xq(Wq) && 0, Aq.see(Wq, 1 === lq[Eq] ? Bq : -1);
                else if (mq) {
                  Yq[Eq] = cq;
                  const qq = !0 === Wq.metadata[Cq.l];
                  lq[Eq] = qq ? 1 : 0;
                  const gq = Pq(Wq, Bq, qq);
                  !qq || gq && mE(Wq) || (Yq[Eq] = 0)
                } else Oq ? Pq(Wq, Bq, !0 === Wq.metadata[Cq.l]) : Jq.c.prototype.push.call(gq, Wq)
              }
              continue
            }
          }
          Oq && Aq.finish(gq, aq)
        })(Yq), cq.apply(Yq, qq.activeCamera);
        const Oq = Eq.UYq;
        for (let qq = 0; qq < Oq.length; qq++) {
          const Eq = Oq[qq];
          Eq.isEnabled() && Jq.c.prototype.push.call(Yq, Eq)
        }
        return lq(Yq, gq), Yq
      }, {
        sYq: () => Aq.culled,
        ZYq: (qq, Eq) => {
          const lq = Math.floor(Eq[0] / Oq),
            xq = Math.floor(Eq[1] / Oq),
            Aq = Math.floor(Eq[2] / Oq),
            cq = `${lq}|${xq}|${Aq}`;
          let uq = mq.get(cq);
          if (!uq) {
            const qq = [0, 0, 0];
            gq.TEq([lq * Oq - 1, xq * Oq - 1, Aq * Oq - 1], null, qq), uq = Object.assign(Yq(qq, Oq + 2), {
              XYq: cq,
              wYq: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Hq()
            }), oq(uq), Nq[uq._noaSlot] = (0, kq.i)(lq, xq, Aq), aq[3 * uq._noaSlot] = lq, aq[3 * uq._noaSlot + 1] = xq, aq[3 * uq._noaSlot + 2] = Aq, mq.set(cq, uq)
          }
          uq.wYq++, qq.metadata[Rq.t] = uq
        },
        Wk: qq => {
          const Eq = qq.metadata[Rq.t];
          Eq && (Eq.wYq--, Eq.wYq <= 0 && (mq.delete(Eq.XYq), dq.push(Eq._noaSlot)), qq.metadata[Rq.t] = null)
        },
        RYq: (qq, Eq) => {
          const gq = qq,
            Yq = Eq.metadata[Rq.t];
          (gq._noaSlots ??= []).push(Yq._noaSlot), (gq._noaStamps ??= []).push(0), (gq._noaTerrain ??= []).push(0), gq.entries.push(Eq)
        },
        removeEntry: (qq, Eq) => {
          const gq = qq,
            Yq = gq.entries,
            lq = Yq.indexOf(Eq);
          if (lq < 0) return;
          const Oq = gq._noaSlots,
            mq = gq._noaStamps,
            xq = gq._noaTerrain,
            Aq = Yq.length - 1;
          Yq[lq] = Yq[Aq], Oq[lq] = Oq[Aq], mq[lq] = mq[Aq], xq[lq] = xq[Aq], Yq.pop(), Oq.pop(), mq.pop(), xq.pop()
        },
        aqq: qq => {
          for (const Eq of mq.values()) {
            Eq.SYq.KYq(qq), Eq.zYq.KYq(qq);
            for (const gq of Eq.FYq) gq.KYq(qq);
            oq(Eq)
          }
        }
      }
    }

    function BE(qq, Eq) {
      return Eq.set(qq), Eq
    }

    function WE(qq, Eq, gq) {
      const Yq = qq[Eq],
        lq = qq[Eq + 1],
        Oq = qq[Eq + 2],
        mq = qq[Eq + 3],
        xq = qq[Eq + 4],
        Aq = qq[Eq + 5];
      for (let cq = 0; cq < 24; cq += 4) {
        const qq = gq[cq],
          Eq = gq[cq + 1],
          uq = gq[cq + 2];
        if (!(qq * (qq >= 0 ? mq : Yq) + Eq * (Eq >= 0 ? xq : lq) + uq * (uq >= 0 ? Aq : Oq) + gq[cq + 3] >= 0)) return !1
      }
      return !0
    }
    var NE = gq(37773);
    class aE {
      constructor(qq, Eq) {
        var gq = qq.PV;
        gq.VYq(new Lq.e(gq));
        var Yq = new pq.c(Aq);
        gq.IYq = Yq, Yq.blocks = [];
        var lq, Oq = {},
          mq = [];
        this.textPlanes = mq, this.sYq = () => lq.sYq(), this.aqq = qq => {
          uq(Yq, qq), lq.aqq(qq)
        }, this.ZYq = (Eq, gq, xq) => {
          if (!Eq.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Eq.metadata[Rq.s] && !Eq.metadata[Rq.l]) {
            if (!gq) {
              var Aq = Yq.UYq;
              if (Eq.metadata[Rq.z] && !Eq.parent) {
                Aq = mq;
                var uq = Eq.yR().DYq;
                Eq.metadata[Rq.D] = uq.center.length() + uq.radius, Eq.Wa = !0
              }
              return Aq.push(Eq), Eq.metadata[Rq.g] = Aq, void(Eq.metadata[Rq.l] = !0)
            }
            var Wq = Math.floor(xq[0] / cq),
              Nq = Math.floor(xq[1] / cq),
              aq = Math.floor(xq[2] / cq),
              Vq = Wq + "|" + Nq + "|" + aq,
              dq = Oq[Vq];
            if (!dq) {
              var jq = [Wq * cq, Nq * cq, aq * cq],
                Hq = [0, 0, 0];
              qq.wB.TEq(jq, null, Hq), dq = Bq(Hq, cq), Yq.blocks.push(dq), Oq[Vq] = dq, dq.XYq = Vq
            }
            lq.ZYq(Eq, xq), lq.RYq(dq, Eq), dq.wYq = (dq.wYq || 0) + 1, Eq.metadata[Rq.s] = dq, Eq.metadata[Rq.n] = !0, Eq.Wa = !0
          }
        }, this.Wk = qq => {
          if (qq.metadata) {
            qq.metadata[Rq.l] && ((0, kq.m)(qq.metadata[Rq.g], qq), qq.metadata[Rq.l] = !1), qq.metadata[Rq.g] === mq && (qq.Wa = !1), qq.metadata[Rq.g] = void 0, qq.metadata[Rq.D] = void 0;
            var Eq = qq.metadata[Rq.s];
            Eq && Eq.entries && (qq.metadata[Rq.n] && lq.removeEntry(Eq, qq), Eq.wYq--, Eq.wYq <= 0 && (delete Oq[Eq.XYq], (0, kq.m)(Yq.blocks, Eq))), lq.Wk(qq), qq.metadata[Rq.s] = null, qq.metadata[Rq.n] = !1
          }
        }, this.t5 = function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (qq.metadata[Rq.s]) {
            if (qq.metadata[Rq.n] === Eq) return;
            var gq = qq.metadata[Rq.s];
            gq && gq.entries && (Eq ? lq.RYq(gq, qq) : lq.removeEntry(gq, qq)), qq.metadata[Rq.n] = Eq
          } else {
            if (qq.metadata[Rq.l] === Eq) return;
            var Oq = qq.metadata[Rq.g] || Yq.UYq;
            Eq ? Oq.push(qq) : (0, kq.m)(Oq, qq), qq.metadata[Rq.l] = Eq
          }
        };
        var Aq = () => {},
          cq = Eq * qq.wB.kB.Uqq,
          uq = (qq, Eq) => {
            qq.blocks.forEach((qq => {
              qq.SYq.KYq(Eq), qq.zYq.KYq(Eq), qq.FYq.forEach((qq => qq.KYq(Eq))), qq.blocks && uq(qq, Eq)
            }))
          },
          Bq = (qq, Eq) => {
            var gq = new xq.Na(qq[0], qq[1], qq[2]),
              Yq = new xq.Na(qq[0] + Eq, qq[1] + Eq, qq[2] + Eq);
            return new Gq.c(gq, Yq, void 0, void 0, void 0, Aq)
          };
        lq = uE(gq, Yq, qq.wB, Bq, ((qq, Eq) => {
          for (var gq = 0; gq < mq.length; gq++) {
            var Yq = mq[gq];
            Yq.isEnabled(!1) && ((0, NE.b)(Yq, Eq) && Jq.c.prototype.push.call(qq, Yq))
          }
        }))
      }
    }

    function VE(qq) {
      const {
        holderPosition: Eq,
        holderRotation: gq,
        U3: Yq,
        fov: lq,
        near: Oq,
        far: mq
      } = qq.model.o3, xq = qq.mlq;
      xq.position.Vqq(Eq[0], Eq[1], Eq[2]), xq.rotation.Vqq(gq[0], gq[1], gq[2]);
      const Aq = qq.camera;
      Aq.position.Vqq(Yq[0], Yq[1], Yq[2]), Aq.fov = lq, Aq.minZ = Oq, Aq.maxZ = mq
    }

    function dE(qq) {
      const Eq = qq.Ba(),
        gq = Eq,
        Yq = gq._gl;
      if (!Yq || gq.Ra < 2 || Eq.vYq || Yq.getParameter(Yq.DEPTH_BITS) < 24) return !1;
      const lq = qq._renderingManager,
        Oq = lq.getRenderingGroup(-1),
        mq = lq.getRenderingGroup(0),
        xq = fq.c.prototype.render;
      return Oq.render = function(qq, Eq, gq, Yq, lq, Oq, Aq, cq, uq) {
        (qq || mq._empty) && xq.call(this, qq, Eq, gq, Yq, lq, Oq, Aq, cq, uq)
      }, mq.render = function(qq, gq, lq, mq) {
        let Aq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          cq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          uq = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Wq = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nq = arguments.length > 8 ? arguments[8] : void 0;
        qq ? xq.call(this, qq, gq, lq, mq, Aq, cq, uq, Wq, Nq) : (Eq.setAlphaMode(Bq.c.ALPHA_DISABLE), xq.call(this, null, !1, !1, mq, Aq, cq, uq, !1), Oq._empty || (Yq.depthRange(1, 1), xq.call(Oq, null, gq, lq, mq, Aq, cq, uq, Wq, Nq), Yq.depthRange(0, 1)), xq.call(this, null, gq, lq, mq, !1, !1, !1, Wq, Nq))
      }, !0
    }

    function jE(qq, Eq) {
      return [Eq, Sq.i].map(((Eq, gq) => {
        const Yq = new lq.e("light", xq.Na.FromArray(Eq), qq);
        return Yq.diffuse = mq.Color3.FromArray([1, 1, 1]), Yq.specular = mq.Color3.FromArray([1, 1, 1]), Yq.intensity = Sq.e[gq], Yq
      }))
    }
    class HE extends cq.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(qq) {
        var Eq;
        this.heldTexture = qq, this.particleTexture = null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.mirror) && void 0 !== Eq ? Eq : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let qq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        qq && (this.particleTexture = null, (0, uq.w)(this.heldTexture), this.heldTexture = null), super.dispose(qq, Eq, gq)
      }
    }
    const oE = Yq.d.Zero();
    const PE = {
      sgq: function(qq, Eq) {
        return new Oq.b(qq, Eq.Rgq, {
          preserveDrawingBuffer: Eq.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      clq: function(qq, Eq) {
        ! function(qq, Eq, gq) {
          const Yq = new Tq.e(qq.engine);
          qq.PV = Yq, Yq.detachControl(), Yq.autoClear = !1, Mq.d.MIN_RENDERINGGROUPS = -1;
          for (let Oq = Mq.d.MIN_RENDERINGGROUPS; Oq <= 1; Oq++) Yq.setRenderingOrder(Oq, fq.c.PainterSortCompare, fq.c.PainterSortCompare, fq.c.PainterSortCompare);
          Yq.setRenderingAutoClearDepthStencil(0, !1), Zq.b.Enabled = !1, qq.Ylq = new aE(qq, Math.round(Eq.llq)), qq.mlq = new iq.e("camHolder", Yq), qq.camera = new bq.c("camera", new xq.Na(0, 0, 0), Yq), qq.camera.parent = qq.mlq, VE(qq), (0, Sq.l)(qq, ((qq, Eq, gq) => (0, zq.i)(Eq, gq, qq.PV))), Yq.clearColor = mq.e.FromArray(Eq.clearColor), Yq.ambientColor = mq.Color3.FromArray(Eq.ambientColor);
          const lq = gq(Yq, Eq.Alq);
          Yq.onNewLightAddedObservable.add((qq => {
            lq.some((Eq => Eq === qq)) || console.error(`Light "${qq.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Yq.skipPointerMovePicking = !0
        }(qq, Eq, jE), dE(qq.PV)
      },
      Olq: VE,
      setBabylonFog: function(qq, Eq, gq, Yq) {
        const lq = qq.PV;
        lq.fogMode = 3, lq.fogStart = Eq, lq.fogEnd = gq, lq.fogColor.set(Yq[0], Yq[1], Yq[2])
      },
      Blq: function(qq, Eq, gq) {
        return qq.engine.Ra >= 2 && (qq.Wlq || (qq.Wlq = new nq(qq.PV)), !qq.Wlq.failed) ? qq.Wlq.Fk(Eq, gq) : new HE(Eq, gq, qq.PV)
      },
      alq: function(qq, Eq) {
        qq.PV.xZ.forEach((gq => {
          if (gq instanceof hq) return void gq.aqq(Eq, qq.wB.BW);
          const Yq = gq;
          if (Yq.emitter.getConnectedParticleSystems)
            for (const qq of Yq._particles) qq.position.set(qq.position.x - Eq[0], qq.position.y - Eq[1], qq.position.z - Eq[2]);
          else {
            if (!Yq.worldOffset) throw new Error("Particle system has no world offset");
            Yq.worldOffset.x = -qq.wB.BW[0], Yq.worldOffset.y = -qq.wB.BW[1], Yq.worldOffset.z = -qq.wB.BW[2]
          }
        }))
      },
      linesFromArrays: function(qq, Eq, gq) {
        const Yq = new Aq.b(Eq, qq.PV, null, void 0, void 0, !1);
        return (0, zq.f)(Eq, gq, qq.PV, Yq), Yq
      },
      QV: OE,
      Nlq: function(qq, Eq) {
        return oE.origin.WG(Eq.origin), oE.direction.WG(Eq.direction), oE.length = Eq.length, oE.epsilon = Eq.epsilon, oE.Nlq(qq, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40869: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Jq,
      h: () => Hq,
      i: () => Xq
    });
    var Yq = gq(40003),
      lq = gq(40878),
      Oq = gq(40910),
      mq = gq(40883),
      xq = gq(37803),
      Aq = gq(37815),
      cq = gq(37818),
      uq = gq(37821),
      Bq = gq(37242),
      Wq = gq(37244),
      Nq = gq(40889),
      aq = gq(37230),
      Vq = gq(37233),
      dq = gq(37220);

    function jq(qq, Eq) {
      return Object.assign((function(qq, gq, Yq, lq) {
        return Eq(this.featureState, qq, gq, Yq, lq)
      }), {
        LN: qq
      })
    }

    function Hq(qq) {
      const Eq = class extends Nq.d {
          constructor(Eq, gq) {
            const Yq = (0, Vq.T)(Eq),
              lq = Yq && (0, Vq.u)(Yq, qq.name);
            for (var Oq = arguments.length, mq = new Array(Oq > 2 ? Oq - 2 : 0), xq = 2; xq < Oq; xq++) mq[xq - 2] = arguments[xq];
            super(Eq, qq.name, qq.priority, lq ? lq.defines : qq.defines(...mq), !1), this.featureState = void 0, this.featureState = gq, this._pluginManager._addPlugin(this), this._enable(!0), (0, Vq.w)(this._material, qq, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return qq.className
          }
          isCompatible(qq) {
            return qq === dq.d.GLSL || qq === dq.d.WGSL
          }
        },
        gq = (0, aq.k)(qq);
      for (const [Yq, lq] of Object.entries(aq.d)) {
        const Oq = qq[Yq];
        if (Oq) {
          const qq = gq[Yq];
          Object.defineProperty(Eq.prototype, lq, {
            value: jq(Oq, qq),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Eq
    }
    class oq extends(Hq(xq.e)) {}
    var Pq = gq(39585),
      Qq = gq(40898);
    const yq = new WeakMap;

    function tq(qq, Eq, gq) {
      let Yq = yq.get(gq);
      Yq || (Yq = new Map, yq.set(gq, Yq));
      const {
        url: lq
      } = qq;
      let Oq = Yq.get(lq);
      return Oq || (Oq = async function(qq, Eq, gq) {
        const {
          width: Yq,
          height: lq
        } = qq.getSize(), Oq = Math.round(lq / Yq), xq = Eq && Eq.byteLength === Yq * Yq * Oq * 4 ? Eq : qq._readPixelsSync();
        return new Qq.c(xq, Yq, Yq, Oq, Pq.b.TEXTUREFORMAT_RGBA, gq, !0, !1, mq.d.NEAREST_NEAREST_MIPLINEAR)
      }(qq, Eq, gq), Yq.set(lq, Oq), Oq.catch((() => {
        Yq.delete(lq)
      }))), Oq
    }
    var rq = gq(37823);
    class vq extends(Hq(Aq.j)) {
      constructor(qq, Eq) {
        super(qq, Eq), Eq.textures.forEach(((qq, Eq) => {
          qq.mirror.onLoadObservable.add((qq => {
            this.setTextureArrayData(qq, Eq).catch((qq => {
              console.error(`Failed to build texture array for atlas ${Eq}`, qq)
            }))
          }))
        })), (0, rq.h)(Eq, qq.shaderLanguage)
      }
      async setTextureArrayData(qq, Eq) {
        var gq, Yq;
        const lq = this.featureState,
          {
            width: Oq,
            height: mq
          } = qq.getSize(),
          xq = lq.useWebGL2 ? await tq(qq, null !== (gq = null === (Yq = lq.sources.pixels) || void 0 === Yq ? void 0 : Yq[Eq]) && void 0 !== gq ? gq : null, this._material.ZJ()) : null;
        (0, rq.e)(this._material, lq, Eq, xq, Oq, Math.round(mq / Oq), this._material.shaderLanguage)
      }
    }
    var hq = gq(40901),
      nq = gq(40055),
      bq = gq(37131),
      iq = gq(40905),
      Zq = gq(40176),
      fq = gq(40040),
      Mq = gq(40857),
      Tq = gq(37586),
      zq = gq(40908);
    class Sq extends hq.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const pq = {
      Mesh: iq.c,
      TransformNode: Mq.e,
      IN: hq.e,
      VertexBuffer: hq.f,
      BoundingInfo: nq.d,
      Na: bq.Na,
      ArenaBuffer: Sq,
      SubMesh: fq.c,
      VertexData: Zq.d,
      MirroredGeometry: zq.b,
      meshFromArrays: zq.f,
      plainMeshFromArrays: zq.i
    };
    (0, Tq.e)(pq);
    var Gq = gq(37429);
    class Lq extends(Hq(uq.g)) {
      constructor(qq, Eq) {
        if (super(qq, Eq), qq instanceof Yq.StandardMaterial && Eq.dirLightCount > 0) {
          const Eq = qq,
            gq = Eq._blockDirtyMechanism;
          Eq._blockDirtyMechanism = !0, qq.disableLighting = !0, Eq._blockDirtyMechanism = gq;
          const Yq = (0, Vq.T)(qq);
          Yq && (Yq.disableLighting = !0, (0, Vq.Q)(Yq))
        }(0, Gq.l)(qq)
      }
      dispose(qq) {
        (0, Gq.n)(this._material), super.dispose(qq)
      }
    }

    function Jq(qq, Eq) {
      if (!(Eq instanceof Yq.StandardMaterial) || Eq.specularTexture) return;
      const {
        r: gq,
        g: lq,
        b: Oq
      } = Eq.specularColor;
      0 === gq && 0 === lq && 0 === Oq && (qq.SPECULARTERM = !1)
    }(0, uq.c)({
      disableUnusedSpecularTerm: Jq
    });
    var kq = gq(37313),
      Rq = gq(37601);
    const Uq = new RegExp(`^#define ${cq.c}\\s*$`, "m");
    class Fq extends(Hq(cq.j)) {
      constructor(qq, Eq) {
        super(qq, Eq), this.eN = !1, Eq.ditherOnlyWhileFading && (Rq.g.add(qq), this.prewarmDitherTwins(qq))
      }
      prewarmDitherTwins(qq) {
        const Eq = new WeakSet;
        qq.onEffectCreatedObservable.add((gq => {
          let {
            effect: Yq,
            subMesh: lq
          } = gq;
          if (this.featureState.prewarmingDither || Eq.has(Yq)) return;
          Eq.add(Yq);
          const Oq = null === lq || void 0 === lq ? void 0 : lq.getMesh();
          Oq && !Uq.test(Yq.defines) && qq.ZJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Oq) || Eq.delete(Yq)
          }))
        }))
      }
      prewarmDither(qq) {
        if (this.eN || qq.bM()) return !1;
        const Eq = new fq.c(0, 0, 0, 0, 0, qq, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(qq, Eq)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Eq.effect
      }
      dispose(qq) {
        this.eN = !0, super.dispose(qq)
      }
    }
    const sq = new Map;

    function Xq(qq, Eq) {
      sq.set(qq, Eq)
    }
    Xq(xq.e, oq), Xq(Aq.j, vq), Xq(cq.j, Fq), Xq(uq.g, Lq), (0, Bq.e)({
      create: (qq, Eq) => {
        const gq = new Yq.StandardMaterial(qq.name, Eq);
        return (0, kq.t)(qq, gq), gq.detailMap._pluginDefineNames
      },
      write: (qq, Eq, gq) => {
        (0, kq.W)(qq.mirror, Eq, gq)
      },
      addFeature: (qq, Eq, gq) => {
        const Yq = sq.get(Eq.feature);
        if (!Yq) throw new Error(`${Eq.feature.name} has no plugin class (registerPluginClass)`);
        new Yq(qq.mirror, Eq.state, ...gq)
      },
      texture: (qq, Eq, gq) => {
        let {
          url: Yq,
          noMipmap: lq,
          invertY: Oq,
          samplingMode: xq,
          data: Aq,
          sets: cq
        } = gq;
        if (!Aq) {
          const gq = new mq.d(Yq, Eq, lq, Oq, xq);
          return Object.assign(gq, cq), void(0, Wq.B)(qq, gq)
        }
        const uq = {},
          Bq = new Promise(((qq, Eq) => {
            uq.onLoad = qq, uq.onError = (qq, gq) => {
              Eq(new Error(`${Aq.context}: ${(null===gq||void 0===gq?void 0:gq.message)||qq||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Nq,
            bytes: aq,
            label: Vq
          } = Aq,
          dq = {
            noMipmap: lq,
            invertY: !1,
            samplingMode: xq,
            ...uq,
            mimeType: Nq,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          jq = new mq.d(null, Eq, dq);
        kq.v.set(jq, Bq), Object.assign(jq, cq), jq.updateURL(Yq, aq);
        const Hq = jq.getInternalTexture();
        Hq && (Hq.label = Vq), qq.uvSet = jq.coordinatesIndex, qq.matrix.set((0, kq.R)(jq)), (0, Wq.B)(qq, jq)
      },
      cube: (qq, Eq, gq) => {
        let {
          rootUrl: Yq,
          files: Oq,
          noMipmap: xq,
          luminance: Aq
        } = gq;
        const {
          samplingMode: cq
        } = qq.sampler, uq = cq === (0, Wq.v)(xq) ? null : () => {
          (0, kq.Q)(Bq, cq)
        }, Bq = new lq.e(Yq, Eq, null, xq, Oq, uq, null, (0, Wq.u)(Aq));
        Bq.coordinatesMode = mq.d.SKYBOX_MODE, (0, Wq.B)(qq, Bq)
      },
      canvas: (qq, Eq, gq) => {
        let {
          width: Yq,
          height: lq,
          mipmaps: xq,
          samplingMode: Aq,
          hasAlpha: cq = !1,
          wrap: uq = mq.d.CLAMP_ADDRESSMODE
        } = gq;
        const Bq = new Oq.e(Eq, {
          width: Yq,
          height: lq
        }, qq, xq, Aq);
        Bq.hasAlpha = cq, Bq.wrapU = uq, Bq.wrapV = uq;
        const Wq = (0, kq.F)(Bq);
        return (0, kq.H)(Wq, Bq), Wq
      }
    })
  },
  40908: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => uq,
      f: () => Bq,
      i: () => Wq
    });
    var Yq = gq(40901),
      lq = gq(39817),
      Oq = gq(40055),
      mq = gq(40180),
      xq = gq(40905),
      Aq = gq(40176),
      cq = gq(37481);
    class uq extends mq.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (qq, Eq) => {
          this.releaseUnlessInstanced(Eq)
        }, this.onLinked = null
      }
      link(qq) {
        var Eq;
        (0, cq.q)(qq), this.model = qq, null === (Eq = this.onLinked) || void 0 === Eq || Eq.call(this, qq)
      }
      relink() {
        this.release();
        const qq = [];
        for (const lq of Object.values(this._vertexBuffers))
          if (!lq.getIsInstanced()) {
            const {
              byteOffset: Eq,
              byteStride: gq,
              type: Yq,
              normalized: Oq
            } = lq;
            qq.push({
              kind: lq.getKind(),
              data: lq.getData(),
              offset: Eq,
              stride: gq,
              components: lq.getSize(),
              glType: Yq,
              isNormalized: Oq
            })
          } const Eq = this._indices.length ? this._indices : null,
          {
            minimum: gq,
            maximum: Yq
          } = this.extend;
        this.link(new cq.h(qq, Eq, this.getTotalVertices(), new Float64Array(gq.bYq()), new Float64Array(Yq.bYq())))
      }
      copy(qq) {
        if (!this.model) return super.copy(qq);
        const Eq = new uq(qq, this.ZJ()),
          gq = this.iYq(void 0, !0);
        gq && Eq.setIndices(gq);
        let mq = !1;
        for (const Oq in this._vertexBuffers) {
          const qq = this._vertexBuffers[Oq],
            gq = qq.getData();
          if (!gq) continue;
          const xq = qq.getSize(),
            {
              type: Aq,
              byteOffset: cq,
              byteStride: uq,
              normalized: Bq
            } = qq;
          mq ||= qq.isUpdatable();
          const Wq = qq.getIsInstanced() ? (gq instanceof Array ? 4 * gq.length : gq.byteLength) / uq : this.getTotalVertices(),
            Nq = (0, lq.r)(gq, xq, Aq, cq, uq, Wq, !0),
            aq = {
              updatable: qq.isUpdatable(),
              stride: xq,
              type: Aq,
              normalized: Bq,
              takeBufferOwnership: !0,
              instanced: qq.getIsInstanced()
            };
          Eq.setVerticesBuffer(new Yq.f(this.Ba(), Nq, Oq, aq), Wq)
        }
        return Eq._updatable = mq, Eq._boundingInfo = new Oq.d(this.extend.minimum, this.extend.maximum), Eq.relink(), Eq
      }
      static mergeMeshes(qq, Eq, gq, Yq, lq, Oq) {
        const Aq = qq[0].ZJ(),
          cq = new xq.c(qq[0].name + "_merged", Aq),
          Bq = new uq(mq.d.RandomId(), Aq, void 0, !1, cq);
        try {
          if (!xq.c.MergeMeshes(qq, Eq, gq, cq, lq, Oq)) return cq.dispose(), null
        } catch (Wq) {
          throw cq.dispose(), Wq
        }
        return Bq.relink(), cq
      }
      removeVerticesData(qq) {
        this.releaseUnlessInstanced(qq), super.removeVerticesData(qq)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(qq) {
        var Eq;
        qq && null !== (Eq = this.getVertexBuffer(qq)) && void 0 !== Eq && Eq.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, cq.x)(this.model), this.model = null)
      }
    }

    function Bq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xq.c(qq, gq);
      const lq = (0, cq.n)(Eq),
        {
          positions: Oq,
          normals: Bq,
          uvs: Wq,
          indices: Nq,
          named: aq = {}
        } = Eq,
        Vq = new Aq.d;
      Vq.positions = Oq, Vq.normals = null !== Bq && void 0 !== Bq ? Bq : null, Vq.uvs = null !== Wq && void 0 !== Wq ? Wq : null, Vq.indices = Nq;
      const dq = new uq(mq.d.RandomId(), gq, Vq, !1, Yq);
      for (const {
          kind: mq,
          components: xq
        }
        of lq.vertexAttributes) mq in aq && Yq.setVerticesData(mq, aq[mq], !1, xq);
      return dq.link(lq), Yq
    }

    function Wq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const lq = new xq.c(qq, gq),
        {
          positions: Oq,
          normals: mq,
          uvs: cq,
          indices: uq
        } = Eq;
      return Object.assign(new Aq.d, {
        positions: Oq,
        normals: mq,
        uvs: cq,
        indices: uq
      }).applyToMesh(lq, Yq), lq
    }
  },
  41355: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => dq,
      e: () => xq,
      h: () => mq,
      l: () => cq
    });
    var Yq = gq(37286),
      lq = gq(38677),
      Oq = gq(38671);

    function mq(qq, Eq, gq, Yq) {
      const lq = Oq.w;
      Eq.fill(0), qq.gravity.toArray(Eq, lq.gravity), qq.colorDead.toArray(Eq, lq.colorDead), gq[lq.ramp] = qq.useRampGradients ? 1 : 0;
      const mq = qq.getColorGradients(),
        xq = Wq(qq, mq, "colour", Yq);
      gq[lq.colorCount] = xq;
      for (let Oq = 0; Oq < xq; Oq++) {
        var Aq;
        const qq = mq[Nq(mq, Oq)];
        Eq[lq.colorPositions + Oq] = qq.gradient, qq.color1.toArray(Eq, lq.color1 + 4 * Oq), (null !== (Aq = qq.color2) && void 0 !== Aq ? Aq : qq.color1).toArray(Eq, lq.color2 + 4 * Oq)
      }
      const cq = qq.getVelocityGradients(),
        uq = Wq(qq, cq, "JV", Yq);
      gq[lq.velocityCount] = uq;
      for (let Oq = 0; Oq < uq; Oq++) Hq(Eq, lq.JV + 4 * Oq, cq[Nq(cq, Oq)]);
      const Bq = qq.useRampGradients ? qq.getColorRemapGradients() : null,
        aq = Wq(qq, Bq, "colour remap", Yq);
      gq[lq.remapCount] = aq;
      for (let Oq = 0; Oq < aq; Oq++) Hq(Eq, lq.remap + 4 * Oq, Bq[Nq(Bq, Oq)])
    }

    function xq() {
      return {
        key: [],
        texels: new Uint8Array(4 * Oq.m)
      }
    }
    const Aq = [];

    function cq(qq, Eq) {
      return uq(qq, Aq), !jq(Aq, Eq.key) && (Eq.key.length = 0, Eq.key.push(...Aq), Eq.key.length > 0 && function(qq, Eq) {
        for (let gq = 0; gq < Oq.m; gq++) lq.k.GetCurrentGradient(gq / Oq.m, qq, ((qq, Eq, gq) => {
          Yq.Color3.LerpToRef(qq.color, Eq.color, gq, Bq)
        })), Eq[4 * gq] = 255 * Bq.r, Eq[4 * gq + 1] = 255 * Bq.g, Eq[4 * gq + 2] = 255 * Bq.b, Eq[4 * gq + 3] = 255
      }(qq.getRampGradients(), Eq.texels), !0)
    }

    function uq(qq, Eq) {
      Eq.length = 0;
      const gq = qq.useRampGradients ? qq.getRampGradients() : null;
      if (null !== gq && void 0 !== gq && gq.length) {
        Eq.push(gq.length);
        for (const qq of gq) Eq.push(qq.gradient, qq.color.r, qq.color.g, qq.color.b)
      }
    }
    const Bq = new Yq.Color3;

    function Wq(qq, Eq, gq, Yq) {
      return Eq ? Eq.length > Oq.b ? (Yq(`particleStops:${gq}`, `GPU particles use the first 2 and last ${Oq.b-2} of more than ${Oq.b} ${gq} gradient stops (${qq.name})`), Oq.b) : Eq.length : 0
    }

    function Nq(qq, Eq) {
      return Eq < 2 || qq.length <= Oq.b ? Eq : qq.length - Oq.b + Eq
    }
    const aq = new Float32Array(Oq.r),
      Vq = new Uint32Array(aq.buffer);

    function dq(qq, Eq, gq) {
      return mq(qq, aq, Vq, gq), Eq && jq(Vq, Eq) ? null : Vq.slice()
    }

    function jq(qq, Eq) {
      if (qq.length !== Eq.length) return !1;
      for (let gq = 0; gq < qq.length; gq++)
        if (qq[gq] !== Eq[gq]) return !1;
      return !0
    }

    function Hq(qq, Eq, gq) {
      var Yq;
      qq[Eq] = gq.gradient, qq[Eq + 1] = gq.factor1, qq[Eq + 2] = null !== (Yq = gq.factor2) && void 0 !== Yq ? Yq : gq.factor1
    }
  },
  41352: (qq, Eq, gq) => {
    function Yq() {
      let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Eq = new Set;
      return (gq, Yq) => {
        Eq.has(gq) || (Eq.add(gq), console.warn(qq + Yq))
      }
    }
    gq.d(Eq, {
      e: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);