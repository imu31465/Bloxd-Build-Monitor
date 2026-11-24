export const id = 0;
export const ids = [0];
export const modules = {
  41131: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CapeMaterialPlugin: () => QS,
      HueTintMaterialPlugin: () => DS,
      LifeformMaterialPlugin: () => wS,
      OverlayMaterialPlugin: () => hS
    });
    var tS = gS(41136),
      bS = gS(38033);
    class XS extends((0, tS.e)(bS.d)) {}(0, tS.h)(bS.d, XS);
    var xS = gS(37193);
    class NS extends((0, tS.e)(xS.h)) {}(0, tS.h)(xS.h, NS);
    var qS = gS(37876);
    class uS extends((0, tS.e)(qS.f)) {}(0, tS.h)(qS.f, uS);
    var IS = gS(37445),
      fS = gS(40306),
      kS = gS(37441);
    class aS extends((0, tS.e)(kS.e)) {
      constructor(SS, HS, gS) {
        super(SS, HS, gS), (0, IS.k)(SS)
      }
      dispose(SS) {
        (0, IS.n)(this._material), super.dispose(SS)
      }
    }(0, tS.h)(kS.e, aS), (0, kS.f)({
      disableUnusedSpecularTerm: tS.d,
      isLightingDisabled: SS => SS instanceof fS.StandardMaterial && SS.disableLighting
    });
    var KS = gS(38698);
    class jS extends((0, tS.e)(KS.c)) {}(0, tS.h)(KS.c, jS);
    var GS = gS(38815),
      CS = gS(37306),
      nS = gS(38169),
      PS = gS(37247);
    class QS extends((0, tS.e)(GS.b)) {}(0, tS.h)(GS.b, QS);
    class DS extends((0, tS.e)(CS.d)) {}(0, tS.h)(CS.d, DS);
    class wS extends((0, tS.e)(nS.p)) {}(0, tS.h)(nS.p, wS);
    class hS extends((0, tS.e)(PS.d)) {}(0, tS.h)(PS.d, hS)
  },
  41572: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      addBabylonLights: () => DH,
      default: () => ZH
    });
    var tS = gS(41579),
      bS = (gS(40019), gS(41125), gS(40519), gS(41589)),
      XS = gS(37294),
      xS = gS(37113),
      NS = gS(41598),
      qS = gS(41605),
      uS = gS(37242),
      IS = (gS(41136), gS(41617)),
      fS = gS(41613),
      kS = gS(38724),
      aS = gS(41625),
      KS = gS(39899),
      jS = gS(38712);
    const GS = "gpuParticles",
      CS = jS.u,
      nS = SS => SS / 4,
      PS = SS => `gpuParticleSystem[${SS>>2}].${"xyzw"[3&SS]}`,
      QS = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${jS.b}\n#define COLOR_POSITIONS ${nS(CS.colorPositions)}\n#define COLOR1 ${nS(CS.color1)}\n#define COLOR2 ${nS(CS.color2)}\n#define VELOCITY ${nS(CS.xG)}\n#define REMAP ${nS(CS.remap)}\n#define RECORDS_PER_ROW ${jS.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${jS.m/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${PS(CS.gravity)}, ${PS(CS.gravity+1)}, ${PS(CS.gravity+2)}); }\nint colorCount() { return int(${PS(CS.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${nS(CS.colorDead)}]; }\nint velocityCount() { return int(${PS(CS.velocityCount)}); }\nint remapCount() { return int(${PS(CS.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    KS.c.ShadersStore[`${GS}VertexShader`] = QS, KS.c.ShadersStore[`${GS}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const DS = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      wS = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var hS = gS(38710),
      ZS = gS(41629);
    class JS extends hS.c {
      constructor(SS, HS, gS, tS) {
        super(SS, HS, gS), this.renderer = gS, this.Bj = tS, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(jS.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, ZS.i)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (SS, HS) => {
          const {
            engine: gS
          } = this, tS = gS._gl;
          gS._bindTextureDirectly(tS.TEXTURE_2D, this.records, !0), gS._unpackFlipY(!1);
          const bS = this.ring.recordBits;
          for (let XS = SS; XS < HS;) {
            const SS = Math.floor(XS / jS.l),
              gS = Math.min(HS, (SS + 1) * jS.l);
            tS.texSubImage2D(tS.TEXTURE_2D, 0, XS % jS.l * 4, SS, 4 * (gS - XS), 1, tS.RGBA_INTEGER, tS.UNSIGNED_INT, bS, XS * jS.f), XS = gS
          }
          gS._bindTextureDirectly(tS.TEXTURE_2D, null)
        }, this.id = SS;
        const bS = tS.AK();
        this.engine = bS;
        const XS = Math.max(1, HS),
          xS = Math.min(XS, jS.l);
        this.records = bS.createRawTexture(null, 4 * xS, Math.ceil(XS / xS), IS.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, IS.e.TEXTURE_NEAREST_SAMPLINGMODE, null, IS.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Bj.getAnimationRatio() || 1;
        const HS = this.Bj.getFrameId();
        if (HS === this.animatedFrame) return !1;
        const gS = super.animate(SS);
        return gS && (this.animatedFrame = HS, this.ring.takeUploads(this.uploadSlots)), gS
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(SS) {
        (0, ZS.m)(this, this.uniforms, this.uniformBits, SS);
        for (const gS of jS.q) this.uniforms[gS] = this.uniformBits[gS];
        var HS;
        (0, ZS.n)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (HS = this.ramp) || void 0 === HS || HS.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = fS.d.CreateRGBATexture(this.rampTexels.texels, jS.k, 1, this.Bj, !1, !1, IS.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var SS;
        this.records.dispose(), null === (SS = this.ramp) || void 0 === SS || SS.dispose(), this.ramp = null
      }
    }
    const OS = "the context was lost before the programs linked";
    class dS {
      constructor(SS, HS) {
        this.Bj = SS, this.reportFailure = HS, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, aS.d)(), this.engine = SS.AK(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = fS.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, SS, !1, !1, IS.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      RY(SS, HS) {
        const gS = jS.l * this.engine.getCaps().maxTextureSize;
        HS > gS && this.warnOnce(`capacity:${SS}`, `particle system ${SS} holds ${gS} particles, not ${HS}: its records texture's limit`);
        const tS = new JS(SS, Math.min(HS, gS), this, this.Bj);
        return this.Bj.addParticleSystem(tS), tS
      }
      canDraw(SS) {
        var HS, gS;
        if (this.failed || null === (HS = SS.texture) || void 0 === HS || null === (gS = HS.mirror) || void 0 === gS || !gS.isReady()) return !1;
        for (const tS of (0, kS.j)(SS.blendMode))
          if (!this.effectFor(tS).isReady()) return !1;
        return !0
      }
      disposeStopped(SS) {
        this.Bj._toBeDisposed.push(SS)
      }
      remove(SS) {
        this.Bj.removeParticleSystem(SS), SS.releaseGl()
      }
      render(SS) {
        var HS;
        if (!SS.isReady() || !SS.hasLiveParticles()) return 0;
        const {
          engine: gS,
          Bj: tS,
          frame: bS
        } = this;
        SS.prepareDraw(this.warnOnce), SS.drawOffset(bS, 0), bS[3] = SS.drawTime();
        const XS = SS.ring.drawStart(),
          xS = SS.ring.drawCount(),
          NS = null !== (HS = SS.ramp) && void 0 !== HS ? HS : this.whiteRamp;
        gS.setState(!1);
        for (const qS of (0, kS.j)(SS.blendMode)) {
          const HS = this.effectFor(qS);
          gS.enableEffect(HS), HS.setTexture("gpuParticleTexture", SS.texture.mirror), HS.setTexture("gpuParticleRampTexture", NS), HS._bindTexture("gpuParticleRecords", SS.records), HS.setMatrix("gpuParticleView", tS.getViewMatrix()), HS.setMatrix("gpuParticleProjection", tS.getProjectionMatrix()), HS.setFloatArray4("gpuParticleSystem", SS.uniforms), HS.setFloat4("gpuParticleFrame", bS[0], bS[1], bS[2], bS[3]), HS.setFloat2("gpuParticleRange", XS, xS), HS.setFloat("gpuParticleRamp", SS.uniforms[jS.u.ramp]), gS.bindBuffers(this.vertexBuffers, null, HS), gS.setAlphaMode((0, kS.h)(qS)), gS.drawArraysType(IS.e.MATERIAL_TriangleStripDrawMode, 0, 4, xS), HS._bindTexture("gpuParticleRecords", null)
        }
        return gS.setAlphaMode(IS.e.ALPHA_DISABLE), xS
      }
      awaitLink(SS) {
        const HS = SS.getPipelineContext(),
          gS = this.gl();
        !this.failed && gS && (!HS || HS.isParallelCompiled && !HS.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : HS.isParallelCompiled && HS.program && (gS.getProgramParameter(HS.program, gS.LINK_STATUS) || this.fail(function(SS, HS, gS) {
          if (SS.isContextLost()) return OS;
          for (const [tS, bS] of [
              ["VERTEX SHADER", HS.vertexShader],
              ["FRAGMENT SHADER", HS.fragmentShader]
            ]) {
            const HS = bS && !SS.getShaderParameter(bS, SS.COMPILE_STATUS) ? SS.getShaderInfoLog(bS) : null;
            if (HS) return `${tS} ${HS}`
          }
          return SS.getProgramInfoLog(gS) || "a program did not link"
        }(gS, HS, HS.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(SS) {
        return SS === kS.c ? this.multiplyEffect : this.effect
      }
      createEffect(SS) {
        return this.engine.createEffect(GS, [], DS, wS, SS, void 0, void 0, ((SS, HS) => {
          var gS;
          this.fail(null !== (gS = this.gl()) && void 0 !== gS && gS.isContextLost() ? OS : function(SS) {
            const HS = SS.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(HS) ? "a program failed, its log not in this browser's stack" : HS.replace(/^Error: /, "")
          }(HS))
        }))
      }
      fail(SS) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${SS}`), this.reportFailure(SS);
          for (const SS of this.Bj.zD.slice()) SS instanceof JS && SS.disposeOnStop && SS.dispose()
        }
      }
    }
    var cS = gS(39867);
    class vS extends cS.b {
      createEffect() {
        const SS = super.createEffect(...arguments);
        return LS(SS), ES.has(SS) || (ES.add(SS), SS.onCompileObservable.add((() => {
          LS(SS)
        }))), SS
      }
    }
    const ES = new WeakSet;

    function LS(SS) {
      SS._vertexSourceCodeBeforeMigration = "", SS._fragmentSourceCodeBeforeMigration = ""
    }
    var YS = gS(40236),
      AS = gS(41123),
      yS = gS(39987),
      VS = gS(40204),
      iS = gS(40196),
      WS = gS(40129),
      zS = gS(41168),
      US = gS(37636),
      pS = gS(41638),
      sS = gS(41640),
      BS = gS(41648),
      MS = gS(40144),
      FS = gS(3004),
      RS = gS(37515),
      TS = gS(40352),
      oS = gS(37603),
      lS = gS(37535);

    function mS(SS) {
      if (SS.visibility < 1 || !SS.isVisible || !SS.isEnabled() || SS.metadata[lS.g] || !SS.isReady()) return !0;
      const HS = SS.dD;
      if (!HS || 0 === HS.length) return !0;
      for (let gS = 0; gS < HS.length; gS++) {
        const tS = HS[gS],
          bS = tS.zK();
        if (!bS || !bS.isReadyForSubMesh(SS, tS, !1)) return !0
      }
      return !1
    }
    class eS {
      constructor(SS, HS) {
        this.qk = SS, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, HS.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Qa(SS) {
        var HS;
        const gS = this.armed;
        if (this.armed = !1, this.vis = null, !gS) return !1;
        this.culled = 0;
        const {
          qk: tS
        } = this, bS = null === (HS = tS.jD) || void 0 === HS ? void 0 : HS.visibility;
        if (!bS || !SS || tS.Hj.gj) return !1;
        if (!(tS.gk.XtS[0] >= oS.e)) return !1;
        const XS = SS.getProjectionMatrix().m;
        if (0 !== XS[15]) return !1;
        const xS = tS.Zk,
          NS = SS.globalPosition,
          qS = this.eye;
        return qS[0] = NS.x + xS[0], qS[1] = NS.y + xS[1], qS[2] = NS.z + xS[2], !!bS.eyeClear(qS[0], qS[1], qS[2], SS.minZ, XS, tS.gk) && (this.vis = bS, this.passable.clear(), this.count = 0, !0)
      }
      see(SS, HS) {
        const gS = this.count++;
        if (gS === this.cellSlots.length) {
          const SS = new Int32Array(2 * gS);
          SS.set(this.cellSlots), this.cellSlots = SS
        }
        this.cellSlots[gS] = HS, this.meshes[gS] = SS
      }
      seeThrough(SS) {
        this.passable.add(SS)
      }
      finish(SS, HS) {
        const {
          vis: gS,
          eye: tS,
          meshes: bS,
          count: XS,
          cellSlots: xS
        } = this, {
          gk: NS
        } = this.qk, [qS, uS] = NS.XtS, IS = null !== gS && gS.update(tS[0], tS[1], tS[2], NS.XSS, qS, uS, this.passable);
        let fS = 0;
        for (let kS = 0; kS < XS; kS++) {
          const tS = bS[kS];
          if (IS) {
            const SS = 3 * xS[kS];
            if (SS >= 0 && !gS.isDrawn(HS[SS], HS[SS + 1], HS[SS + 2])) {
              fS++;
              continue
            }
          }
          MS.f.prototype.push.call(SS, tS)
        }
        bS.fill(null, 0, XS), this.count = 0, this.vis = null, this.culled = fS
      }
    }
    var rS = gS(37578),
      SH = gS(37528),
      HH = gS(40331),
      gH = gS(41650),
      tH = gS(40337),
      bH = gS(40256);
    let XH = 1;
    const xH = new WeakSet;

    function NH() {
      return XH
    }

    function qH() {
      XH = XH >= 1073741823 ? 1 : XH + 1
    }

    function uH(SS) {
      const HS = SS.metadata;
      if (!HS || !0 !== HS[RS.p]) return;
      const gS = HS[RS.t],
        tS = null === gS || void 0 === gS ? void 0 : gS._noaStamps;
      if (!gS || !tS) return;
      const bS = gS.entries.indexOf(SS);
      bS >= 0 && (tS[bS] = 0)
    }

    function IH(SS) {
      const HS = SS.dD;
      for (let gS = 0; gS < HS.length; gS++) {
        const SS = HS[gS].zK();
        if (SS && !SS.isFrozen) return !1
      }
      for (let gS = 0; gS < HS.length; gS++) {
        const SS = HS[gS].zK();
        SS && xH.add(SS)
      }
      return !0
    }
    let fH = !1;
    const kH = new WeakSet;

    function aH(SS, HS) {
      const gS = SS[HS];
      if ("function" !== typeof gS) throw new Error(`terrainDrawState: Babylon has no ${HS} to hook`);
      return gS
    }

    function KH(SS, HS, gS, tS, bS) {
      const XS = gS.gk.XSS,
        xS = new Map;
      let NS = 0;
      const qS = new eS(gS, SS),
        uS = new rS.b(XS, SS.AK());
      ! function(SS) {
        if (kH.has(SS) || (kH.add(SS), SS.onContextLostObservable.add(qH), SS.YK.add(qH)), fH) return;
        fH = !0;
        const HS = gH.e.prototype,
          gS = aH(HS, "_markSubMeshesAsDirty");
        Object.assign(HS, {
          _markSubMeshesAsDirty(SS) {
            gS.call(this, SS), uH(this)
          }
        });
        const tS = aH(bH.e.prototype, "_syncParentEnabledState");
        Object.assign(bH.e.prototype, {
          _syncParentEnabledState() {
            tS.call(this), uH(this)
          }
        });
        const bS = aH(tH.e.prototype, "resetDrawCache");
        tH.e.prototype.resetDrawCache = function(SS, HS) {
          bS.call(this, SS, HS), uH(this.getMesh())
        };
        const XS = HH.d.prototype,
          xS = aH(XS, "markDirty");
        XS.markDirty = function(SS) {
          xS.call(this, SS), xH.has(this) && qH()
        };
        const NS = aH(XS, "_markAllSubMeshesAsDirty");
        Object.assign(XS, {
          _markAllSubMeshesAsDirty(SS) {
            NS.call(this, SS), xH.has(this) && qH()
          }
        })
      }(SS.AK());
      let IS = new Float64Array(384),
        fS = new Int32Array(64),
        kS = new Uint8Array(64),
        aS = new Float64Array(64),
        KS = new Int32Array(192),
        jS = 0;
      const GS = [],
        CS = new Float64Array(24),
        nS = () => {
          const SS = GS.pop();
          return void 0 !== SS ? (fS[SS] = 0, SS) : (jS === fS.length && (IS = jH(IS, new Float64Array(2 * IS.length)), fS = jH(fS, new Int32Array(2 * fS.length)), kS = jH(kS, new Uint8Array(2 * kS.length)), aS = jH(aS, new Float64Array(2 * aS.length)), KS = jH(KS, new Int32Array(2 * KS.length))), jS++)
        },
        PS = SS => {
          const HS = 6 * SS._noaSlot,
            gS = SS.ktS[0],
            tS = SS.ktS[1];
          IS[HS] = gS.x, IS[HS + 1] = gS.y, IS[HS + 2] = gS.z, IS[HS + 3] = tS.x, IS[HS + 4] = tS.y, IS[HS + 5] = tS.z
        },
        QS = (SS, HS, gS) => {
          if (!gS) return qS.see(SS, -1), !1;
          const tS = mS(SS);
          return tS && qS.seeThrough(aS[HS]), qS.see(SS, HS), !tS
        };
      let DS = -1;
      return SS.getActiveMeshCandidates = () => {
        const gS = SS.frustumPlanes,
          tS = HS._selectionContent;
        tS.reset(), (gS => {
          const tS = SS.frustumPlanes;
          NS = NS + 1 | 0 || 1;
          const bS = HS.blocks,
            XS = qS.Qa(SS.activeCamera),
            xS = XS && !0;
          if (xS) {
            const HS = SS.AK().currentRenderPassId;
            HS !== DS && (DS = HS, qH())
          }
          const uS = NH(),
            aS = xS && !1;
          bS.length > 0 && function(SS, HS) {
            for (let gS = 0; gS < 6; gS++) {
              const tS = SS[gS],
                bS = tS.normal;
              HS[4 * gS] = bS.x, HS[4 * gS + 1] = bS.y, HS[4 * gS + 2] = bS.z, HS[4 * gS + 3] = tS.d
            }
          }(tS, CS);
          const jS = IS,
            GS = fS,
            nS = kS;
          for (let SS = 0; SS < bS.length; SS++) {
            const HS = bS[SS];
            if (!TS.c.IsInFrustum(HS.ktS, tS)) continue;
            const IS = HS.entries;
            {
              const SS = HS._noaSlots,
                tS = HS._noaStamps,
                bS = HS._noaTerrain;
              for (let HS = 0; HS < IS.length; HS++) {
                const fS = SS[HS];
                if (GS[fS] !== NS && (GS[fS] = NS, nS[fS] = GH(jS, 6 * fS, CS) ? 1 : 0), 0 === nS[fS]) continue;
                const kS = IS[HS];
                if (xS && tS[HS] === uS) aS && 1 === bS[HS] && mS(kS) && 0, qS.see(kS, 1 === bS[HS] ? fS : -1);
                else if (xS) {
                  tS[HS] = uS;
                  const SS = !0 === kS.metadata[SH.l];
                  bS[HS] = SS ? 1 : 0;
                  const gS = QS(kS, fS, SS);
                  !SS || gS && IH(kS) || (tS[HS] = 0)
                } else XS ? QS(kS, fS, !0 === kS.metadata[SH.l]) : MS.f.prototype.push.call(gS, kS)
              }
              continue
            }
          }
          XS && qS.finish(gS, KS)
        })(tS), uS.apply(tS, SS.activeCamera);
        const XS = HS.ftS;
        for (let SS = 0; SS < XS.length; SS++) {
          const HS = XS[SS];
          HS.isEnabled() && MS.f.prototype.push.call(tS, HS)
        }
        return bS(tS, gS), tS
      }, {
        atS: () => qS.culled,
        egS: (SS, HS) => {
          const bS = Math.floor(HS[0] / XS),
            NS = Math.floor(HS[1] / XS),
            qS = Math.floor(HS[2] / XS),
            uS = `${bS}|${NS}|${qS}`;
          let IS = xS.get(uS);
          if (!IS) {
            const SS = [0, 0, 0];
            gS.HHS([bS * XS - 1, NS * XS - 1, qS * XS - 1], null, SS), IS = Object.assign(tS(SS, XS + 2), {
              KtS: uS,
              jtS: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: nS()
            }), PS(IS), aS[IS._noaSlot] = (0, FS.g)(bS, NS, qS), KS[3 * IS._noaSlot] = bS, KS[3 * IS._noaSlot + 1] = NS, KS[3 * IS._noaSlot + 2] = qS, xS.set(uS, IS)
          }
          IS.jtS++, SS.metadata[RS.w] = IS
        },
        ZY: SS => {
          const HS = SS.metadata[RS.w];
          HS && (HS.jtS--, HS.jtS <= 0 && (xS.delete(HS.KtS), GS.push(HS._noaSlot)), SS.metadata[RS.w] = null)
        },
        ItS: (SS, HS) => {
          const gS = SS,
            tS = HS.metadata[RS.w];
          (gS._noaSlots ??= []).push(tS._noaSlot), (gS._noaStamps ??= []).push(0), (gS._noaTerrain ??= []).push(0), gS.entries.push(HS)
        },
        removeEntry: (SS, HS) => {
          const gS = SS,
            tS = gS.entries,
            bS = tS.indexOf(HS);
          if (bS < 0) return;
          const XS = gS._noaSlots,
            xS = gS._noaStamps,
            NS = gS._noaTerrain,
            qS = tS.length - 1;
          tS[bS] = tS[qS], XS[bS] = XS[qS], xS[bS] = xS[qS], NS[bS] = NS[qS], tS.pop(), XS.pop(), xS.pop(), NS.pop()
        },
        t5: SS => {
          for (const HS of xS.values()) {
            HS.btS.GtS(SS), HS.ttS.GtS(SS);
            for (const gS of HS.ktS) gS.GtS(SS);
            PS(HS)
          }
        }
      }
    }

    function jH(SS, HS) {
      return HS.set(SS), HS
    }

    function GH(SS, HS, gS) {
      const tS = SS[HS],
        bS = SS[HS + 1],
        XS = SS[HS + 2],
        xS = SS[HS + 3],
        NS = SS[HS + 4],
        qS = SS[HS + 5];
      for (let uS = 0; uS < 24; uS += 4) {
        const SS = gS[uS],
          HS = gS[uS + 1],
          IS = gS[uS + 2];
        if (!(SS * (SS >= 0 ? xS : tS) + HS * (HS >= 0 ? NS : bS) + IS * (IS >= 0 ? qS : XS) + gS[uS + 3] >= 0)) return !1
      }
      return !0
    }
    var CH = gS(37797);
    class nH {
      constructor(SS, HS) {
        var gS = SS.Bj;
        gS.igS(new BS.b(gS));
        var tS = new pS.d(qS);
        gS.ntS = tS, tS.blocks = [];
        var bS, XS = {},
          NS = [];
        this.textPlanes = NS, this.atS = () => bS.atS(), this.t5 = SS => {
          IS(tS, SS), bS.t5(SS)
        }, this.egS = (HS, gS, xS) => {
          if (!HS.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!HS.metadata[RS.t] && !HS.metadata[RS.m]) {
            if (!gS) {
              var qS = tS.ftS;
              if (HS.metadata[RS.B] && !HS.parent) {
                qS = NS;
                var IS = HS.hA().QtS;
                HS.metadata[RS.E] = IS.center.length() + IS.radius, HS.yK = !0
              }
              return qS.push(HS), HS.metadata[RS.j] = qS, void(HS.metadata[RS.m] = !0)
            }
            var kS = Math.floor(xS[0] / uS),
              aS = Math.floor(xS[1] / uS),
              KS = Math.floor(xS[2] / uS),
              jS = kS + "|" + aS + "|" + KS,
              GS = XS[jS];
            if (!GS) {
              var CS = [kS * uS, aS * uS, KS * uS],
                nS = [0, 0, 0];
              SS.qk.HHS(CS, null, nS), GS = fS(nS, uS), tS.blocks.push(GS), XS[jS] = GS, GS.KtS = jS
            }
            bS.egS(HS, xS), bS.ItS(GS, HS), GS.jtS = (GS.jtS || 0) + 1, HS.metadata[RS.t] = GS, HS.metadata[RS.p] = !0, HS.yK = !0
          }
        }, this.ZY = SS => {
          if (SS.metadata) {
            SS.metadata[RS.m] && ((0, FS.o)(SS.metadata[RS.j], SS), SS.metadata[RS.m] = !1), SS.metadata[RS.j] === NS && (SS.yK = !1), SS.metadata[RS.j] = void 0, SS.metadata[RS.E] = void 0;
            var HS = SS.metadata[RS.t];
            HS && HS.entries && (SS.metadata[RS.p] && bS.removeEntry(HS, SS), HS.jtS--, HS.jtS <= 0 && (delete XS[HS.KtS], (0, FS.o)(tS.blocks, HS))), bS.ZY(SS), SS.metadata[RS.t] = null, SS.metadata[RS.p] = !1
          }
        }, this.W4 = function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (SS.metadata[RS.t]) {
            if (SS.metadata[RS.p] === HS) return;
            var gS = SS.metadata[RS.t];
            gS && gS.entries && (HS ? bS.ItS(gS, SS) : bS.removeEntry(gS, SS)), SS.metadata[RS.p] = HS
          } else {
            if (SS.metadata[RS.m] === HS) return;
            var XS = SS.metadata[RS.j] || tS.ftS;
            HS ? XS.push(SS) : (0, FS.o)(XS, SS), SS.metadata[RS.m] = HS
          }
        };
        var qS = () => {},
          uS = HS * SS.qk.gk.XSS,
          IS = (SS, HS) => {
            SS.blocks.forEach((SS => {
              SS.btS.GtS(HS), SS.ttS.GtS(HS), SS.ktS.forEach((SS => SS.GtS(HS))), SS.blocks && IS(SS, HS)
            }))
          },
          fS = (SS, HS) => {
            var gS = new xS.VK(SS[0], SS[1], SS[2]),
              tS = new xS.VK(SS[0] + HS, SS[1] + HS, SS[2] + HS);
            return new sS.c(gS, tS, void 0, void 0, void 0, qS)
          };
        bS = KH(gS, tS, SS.qk, fS, ((SS, HS) => {
          for (var gS = 0; gS < NS.length; gS++) {
            var tS = NS[gS];
            tS.isEnabled(!1) && ((0, CH.b)(tS, HS) && MS.f.prototype.push.call(SS, tS))
          }
        }))
      }
    }

    function PH(SS) {
      const {
        holderPosition: HS,
        holderRotation: gS,
        aT: tS,
        fov: bS,
        near: XS,
        far: xS
      } = SS.model.qT, NS = SS.ctS;
      NS.position.I5(HS[0], HS[1], HS[2]), NS.rotation.I5(gS[0], gS[1], gS[2]);
      const qS = SS.camera;
      qS.position.I5(tS[0], tS[1], tS[2]), qS.fov = bS, qS.minZ = XS, qS.maxZ = xS
    }

    function QH(SS) {
      const HS = SS.AK(),
        gS = HS,
        tS = gS._gl;
      if (!tS || gS.uj < 2 || HS.RgS || tS.getParameter(tS.DEPTH_BITS) < 24) return !1;
      const bS = SS._renderingManager,
        XS = bS.getRenderingGroup(-1),
        xS = bS.getRenderingGroup(0),
        NS = VS.e.prototype.render;
      return XS.render = function(SS, HS, gS, tS, bS, XS, qS, uS, IS) {
        (SS || xS._empty) && NS.call(this, SS, HS, gS, tS, bS, XS, qS, uS, IS)
      }, xS.render = function(SS, gS, bS, xS) {
        let qS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          kS = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          aS = arguments.length > 8 ? arguments[8] : void 0;
        SS ? NS.call(this, SS, gS, bS, xS, qS, uS, fS, kS, aS) : (HS.setAlphaMode(IS.e.ALPHA_DISABLE), NS.call(this, null, !1, !1, xS, qS, uS, fS, !1), XS._empty || (tS.depthRange(1, 1), NS.call(XS, null, gS, bS, xS, qS, uS, fS, kS, aS), tS.depthRange(0, 1)), NS.call(this, null, gS, bS, xS, !1, !1, !1, kS, aS))
      }, !0
    }

    function DH(SS, HS) {
      return [HS, US.c].map(((HS, gS) => {
        const tS = new bS.c("light", xS.VK.FromArray(HS), SS);
        return tS.diffuse = XS.Color3.FromArray([1, 1, 1]), tS.specular = XS.Color3.FromArray([1, 1, 1]), tS.intensity = US.b[gS], tS
      }))
    }
    class wH extends qS.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(SS) {
        var HS;
        this.heldTexture = SS, this.particleTexture = null !== (HS = null === SS || void 0 === SS ? void 0 : SS.mirror) && void 0 !== HS ? HS : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let SS = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        SS && (this.particleTexture = null, (0, uS.y)(this.heldTexture), this.heldTexture = null), super.dispose(SS, HS, gS)
      }
    }
    const hH = tS.d.Zero();
    const ZH = {
      kgS: function(SS, HS) {
        return new vS(SS, HS.qgS, {
          preserveDrawingBuffer: HS.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      LtS: function(SS, HS) {
        ! function(SS, HS, gS) {
          const tS = new WS.b(SS.engine);
          SS.Bj = tS, tS.detachControl(), tS.autoClear = !1, iS.c.MIN_RENDERINGGROUPS = -1;
          for (let XS = iS.c.MIN_RENDERINGGROUPS; XS <= 1; XS++) tS.setRenderingOrder(XS, VS.e.PainterSortCompare, VS.e.PainterSortCompare, VS.e.PainterSortCompare);
          tS.setRenderingAutoClearDepthStencil(0, !1), yS.c.Enabled = !1, SS.ZtS = new nH(SS, Math.round(HS.JtS)), SS.ctS = new AS.d("camHolder", tS), SS.camera = new YS.e("camera", new xS.VK(0, 0, 0), tS), SS.camera.parent = SS.ctS, PH(SS), (0, US.e)(SS, ((SS, HS, gS) => (0, zS.i)(HS, gS, SS.Bj))), tS.clearColor = XS.b.FromArray(HS.clearColor), tS.ambientColor = XS.Color3.FromArray(HS.ambientColor);
          const bS = gS(tS, HS.EtS);
          tS.onNewLightAddedObservable.add((SS => {
            bS.some((HS => HS === SS)) || console.error(`Light "${SS.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), tS.skipPointerMovePicking = !0
        }(SS, HS, DH), QH(SS.Bj)
      },
      OtS: PH,
      setBabylonFog: function(SS, HS, gS, tS) {
        const bS = SS.Bj;
        bS.fogMode = 3, bS.fogStart = HS, bS.fogEnd = gS, bS.fogColor.set(tS[0], tS[1], tS[2])
      },
      AtS: function(SS, HS, gS) {
        return SS.engine.uj >= 2 && (SS.ytS || (SS.ytS = new dS(SS.Bj, SS.VtS)), !SS.ytS.failed) ? SS.ytS.RY(HS, gS) : new wH(HS, gS, SS.Bj)
      },
      WtS: function(SS, HS) {
        SS.Bj.zD.forEach((gS => {
          if (gS instanceof JS) return void gS.t5(HS, SS.qk.Zk);
          const tS = gS;
          if (tS.emitter.getConnectedParticleSystems)
            for (const SS of tS._particles) SS.position.set(SS.position.x - HS[0], SS.position.y - HS[1], SS.position.z - HS[2]);
          else {
            if (!tS.worldOffset) throw new Error("Particle system has no world offset");
            tS.worldOffset.x = -SS.qk.Zk[0], tS.worldOffset.y = -SS.qk.Zk[1], tS.worldOffset.z = -SS.qk.Zk[2]
          }
        }))
      },
      linesFromArrays: function(SS, HS, gS) {
        const tS = new NS.e(HS, SS.Bj, null, void 0, void 0, !1);
        return (0, zS.h)(HS, gS, SS.Bj, tS), tS
      },
      Mj: uH,
      itS: function(SS, HS) {
        return hH.origin.dJ(HS.origin), hH.direction.dJ(HS.direction), hH.length = HS.length, hH.epsilon = HS.epsilon, hH.itS(SS, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41136: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => pS,
      e: () => nS,
      h: () => TS
    });
    var tS = gS(40306),
      bS = gS(41138),
      XS = gS(41177),
      xS = gS(41142),
      NS = gS(37843),
      qS = gS(37855),
      uS = gS(37862),
      IS = gS(37864),
      fS = gS(37240),
      kS = gS(37242),
      aS = gS(41144),
      KS = gS(37216),
      jS = gS(37225),
      GS = gS(37209);

    function CS(SS, HS) {
      return Object.assign((function(SS, gS, tS, bS) {
        return HS(this.featureState, SS, gS, tS, bS)
      }), {
        xK: SS
      })
    }

    function nS(SS) {
      const HS = class extends aS.d {
          constructor(HS, gS) {
            const tS = (0, jS.cb)(HS),
              bS = tS && (0, jS.v)(tS, SS.name);
            for (var XS = arguments.length, xS = new Array(XS > 2 ? XS - 2 : 0), NS = 2; NS < XS; NS++) xS[NS - 2] = arguments[NS];
            super(HS, SS.name, SS.priority, bS ? bS.defines : SS.defines(...xS), !1), this.featureState = void 0, this.featureState = gS, this._pluginManager._addPlugin(this), this._enable(!0), (0, jS.z)(this._material, SS, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return SS.className
          }
          isCompatible(SS) {
            return SS === GS.e.GLSL || SS === GS.e.WGSL
          }
        },
        gS = (0, KS.e)(SS);
      for (const [tS, bS] of Object.entries(KS.b)) {
        const XS = SS[tS];
        if (XS) {
          const SS = gS[tS];
          Object.defineProperty(HS.prototype, bS, {
            value: CS(XS, SS),
            writable: !0,
            configurable: !0
          })
        }
      }
      return HS
    }
    class PS extends(nS(NS.c)) {}
    var QS = gS(39867),
      DS = gS(41152);
    const wS = new WeakMap;

    function hS(SS, HS, gS) {
      let tS = wS.get(gS);
      tS || (tS = new Map, wS.set(gS, tS));
      const {
        url: bS
      } = SS;
      let XS = tS.get(bS);
      return XS || (XS = async function(SS, HS, gS) {
        var tS;
        const {
          width: bS,
          height: XS
        } = SS.getSize(), NS = Math.round(XS / bS), qS = SS.getInternalTexture(), uS = HS && HS.byteLength === bS * bS * NS * 4 ? HS : null !== (tS = ZS.get(qS)) && void 0 !== tS ? tS : SS._readPixelsSync(), IS = new DS.e(uS, bS, bS, NS, QS.b.TEXTUREFORMAT_RGBA, gS, !0, !1, xS.c.NEAREST_NEAREST_MIPLINEAR);
        ZS.has(qS) || (! function(SS, HS) {
          const gS = HS.createRawTexture(new Uint8Array(4), 1, 1, QS.b.TEXTUREFORMAT_RGBA, !1, !1, xS.c.NEAREST_SAMPLINGMODE);
          SS._hardwareTexture.release(), HS.unbindAllTextures(), gS._swapAndDie(SS, !1)
        }(qS, gS.AK()), ZS.set(qS, uS));
        return IS
      }(SS, HS, gS), tS.set(bS, XS), XS.catch((() => {
        tS.delete(bS)
      }))), XS
    }
    const ZS = new WeakMap;
    var JS = gS(37867);
    class OS extends(nS(qS.j)) {
      constructor(SS, HS) {
        super(SS, HS), HS.textures.forEach(((SS, HS) => {
          SS.mirror.onLoadObservable.add((SS => {
            this.setTextureArrayData(SS, HS).catch((SS => {
              console.error(`Failed to build texture array for atlas ${HS}`, SS)
            }))
          }))
        })), (0, JS.h)(HS, SS.shaderLanguage)
      }
      async setTextureArrayData(SS, HS) {
        var gS, tS;
        const bS = this.featureState,
          {
            width: XS,
            height: xS
          } = SS.getSize(),
          NS = bS.useWebGL2 ? await hS(SS, null !== (gS = null === (tS = bS.sources.pixels) || void 0 === tS ? void 0 : tS[HS]) && void 0 !== gS ? gS : null, this._material.lL()) : null;
        (0, JS.b)(this._material, bS, HS, NS, XS, Math.round(xS / XS), this._material.shaderLanguage)
      }
    }
    var dS = gS(41157),
      cS = gS(40346),
      vS = gS(37113),
      ES = gS(41166),
      LS = gS(40449),
      YS = gS(40337),
      AS = gS(41123),
      yS = gS(37615),
      VS = gS(41168);
    class iS extends dS.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const WS = {
      Mesh: ES.e,
      TransformNode: AS.d,
      CK: dS.c,
      VertexBuffer: dS.f,
      BoundingInfo: cS.e,
      VK: vS.VK,
      ArenaBuffer: iS,
      SubMesh: YS.e,
      VertexData: LS.e,
      MirroredGeometry: VS.e,
      meshFromArrays: VS.h,
      plainMeshFromArrays: VS.i
    };
    (0, yS.c)(WS);
    var zS = gS(37445);
    class US extends(nS(IS.i)) {
      constructor(SS, HS) {
        if (super(SS, HS), SS instanceof tS.StandardMaterial && HS.dirLightCount > 0) {
          const HS = SS,
            gS = HS._blockDirtyMechanism;
          HS._blockDirtyMechanism = !0, SS.disableLighting = !0, HS._blockDirtyMechanism = gS;
          const tS = (0, jS.cb)(SS);
          tS && (tS.disableLighting = !0, (0, jS.$)(tS))
        }(0, zS.k)(SS)
      }
      dispose(SS) {
        (0, zS.n)(this._material), super.dispose(SS)
      }
    }

    function pS(SS, HS) {
      if (!(HS instanceof tS.StandardMaterial) || HS.specularTexture) return;
      const {
        r: gS,
        g: bS,
        b: XS
      } = HS.specularColor;
      0 === gS && 0 === bS && 0 === XS && (SS.SPECULARTERM = !1)
    }(0, IS.e)({
      disableUnusedSpecularTerm: pS
    });
    var sS = gS(37335),
      BS = gS(37624);
    const MS = new RegExp(`^#define ${uS.c}\\s*$`, "m");
    class FS extends(nS(uS.h)) {
      constructor(SS, HS) {
        super(SS, HS), this.nK = !1, HS.ditherOnlyWhileFading && (BS.e.add(SS), this.prewarmDitherTwins(SS))
      }
      prewarmDitherTwins(SS) {
        const HS = new WeakSet;
        SS.onEffectCreatedObservable.add((gS => {
          let {
            effect: tS,
            subMesh: bS
          } = gS;
          if (this.featureState.prewarmingDither || HS.has(tS)) return;
          HS.add(tS);
          const XS = null === bS || void 0 === bS ? void 0 : bS.getMesh();
          XS && !MS.test(tS.defines) && SS.lL().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(XS) || HS.delete(tS)
          }))
        }))
      }
      prewarmDither(SS) {
        if (this.nK || SS.Ow()) return !1;
        const HS = new YS.e(0, 0, 0, 0, 0, SS, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(SS, HS)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== HS.effect
      }
      dispose(SS) {
        this.nK = !0, super.dispose(SS)
      }
    }
    const RS = new Map;

    function TS(SS, HS) {
      RS.set(SS, HS)
    }
    TS(NS.c, PS), TS(qS.j, OS), TS(uS.h, FS), TS(IS.i, US), (0, fS.d)({
      create: (SS, HS) => {
        const gS = new tS.StandardMaterial(SS.name, HS);
        return (0, sS.q)(SS, gS), gS.detailMap._pluginDefineNames
      },
      write: (SS, HS, gS) => {
        (0, sS.S)(SS.mirror, HS, gS)
      },
      addFeature: (SS, HS, gS) => {
        const tS = RS.get(HS.feature);
        if (!tS) throw new Error(`${HS.feature.name} has no plugin class (registerPluginClass)`);
        new tS(SS.mirror, HS.state, ...gS)
      },
      texture: (SS, HS, gS) => {
        let {
          url: tS,
          noMipmap: bS,
          invertY: XS,
          samplingMode: NS,
          data: qS,
          sets: uS
        } = gS;
        if (!qS) {
          const gS = new xS.c(tS, HS, bS, XS, NS);
          return Object.assign(gS, uS), void(0, kS.I)(SS, gS)
        }
        const IS = {},
          fS = new Promise(((SS, HS) => {
            IS.onLoad = SS, IS.onError = (SS, gS) => {
              HS(new Error(`${qS.context}: ${(null===gS||void 0===gS?void 0:gS.message)||SS||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: aS,
            bytes: KS,
            label: jS
          } = qS,
          GS = {
            noMipmap: bS,
            invertY: !1,
            samplingMode: NS,
            ...IS,
            mimeType: aS,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          CS = new xS.c(null, HS, GS);
        sS.r.set(CS, fS), Object.assign(CS, uS), CS.updateURL(tS, KS);
        const nS = CS.getInternalTexture();
        nS && (nS.label = jS), SS.uvSet = CS.coordinatesIndex, SS.matrix.set((0, sS.L)(CS)), (0, kS.I)(SS, CS)
      },
      cube: (SS, HS, gS) => {
        let {
          rootUrl: tS,
          files: XS,
          noMipmap: NS,
          luminance: qS
        } = gS;
        const {
          samplingMode: uS
        } = SS.sampler, IS = uS === (0, kS.x)(NS) ? null : () => {
          (0, sS.H)(fS, uS)
        }, fS = new bS.d(tS, HS, null, NS, XS, IS, null, (0, kS.u)(qS));
        fS.coordinatesMode = xS.c.SKYBOX_MODE, (0, kS.I)(SS, fS)
      },
      canvas: (SS, HS, gS) => {
        let {
          width: tS,
          height: bS,
          mipmaps: NS,
          samplingMode: qS,
          hasAlpha: uS = !1,
          wrap: IS = xS.c.CLAMP_ADDRESSMODE
        } = gS;
        const fS = new XS.b(HS, {
          width: tS,
          height: bS
        }, SS, NS, qS);
        fS.hasAlpha = uS, fS.wrapU = IS, fS.wrapV = IS;
        const kS = (0, sS.y)(fS);
        return (0, sS.B)(kS, fS), kS
      }
    })
  },
  41168: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      h: () => fS,
      i: () => kS
    });
    var tS = gS(41157),
      bS = gS(40113),
      XS = gS(40346),
      xS = gS(40452),
      NS = gS(41166),
      qS = gS(40449),
      uS = gS(37505);
    class IS extends xS.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (SS, HS) => {
          this.releaseUnlessInstanced(HS)
        }, this.onLinked = null
      }
      link(SS) {
        var HS;
        (0, uS.o)(SS), this.model = SS, null === (HS = this.onLinked) || void 0 === HS || HS.call(this, SS)
      }
      relink() {
        this.release();
        const SS = [];
        for (const bS of Object.values(this._vertexBuffers))
          if (!bS.getIsInstanced()) {
            const {
              byteOffset: HS,
              byteStride: gS,
              type: tS,
              normalized: XS
            } = bS;
            SS.push({
              kind: bS.getKind(),
              data: bS.getData(),
              offset: HS,
              stride: gS,
              components: bS.getSize(),
              glType: tS,
              isNormalized: XS
            })
          } const HS = this._indices.length ? this._indices : null,
          {
            minimum: gS,
            maximum: tS
          } = this.extend;
        this.link(new uS.g(SS, HS, this.getTotalVertices(), new Float64Array(gS.lgS()), new Float64Array(tS.lgS())))
      }
      copy(SS) {
        if (!this.model) return super.copy(SS);
        const HS = new IS(SS, this.lL()),
          gS = this.mgS(void 0, !0);
        gS && HS.setIndices(gS);
        let xS = !1;
        for (const XS in this._vertexBuffers) {
          const SS = this._vertexBuffers[XS],
            gS = SS.getData();
          if (!gS) continue;
          const NS = SS.getSize(),
            {
              type: qS,
              byteOffset: uS,
              byteStride: IS,
              normalized: fS
            } = SS;
          xS ||= SS.isUpdatable();
          const kS = SS.getIsInstanced() ? (gS instanceof Array ? 4 * gS.length : gS.byteLength) / IS : this.getTotalVertices(),
            aS = (0, bS.p)(gS, NS, qS, uS, IS, kS, !0),
            KS = {
              updatable: SS.isUpdatable(),
              stride: NS,
              type: qS,
              normalized: fS,
              takeBufferOwnership: !0,
              instanced: SS.getIsInstanced()
            };
          HS.setVerticesBuffer(new tS.f(this.AK(), aS, XS, KS), kS)
        }
        return HS._updatable = xS, HS._boundingInfo = new XS.e(this.extend.minimum, this.extend.maximum), HS.relink(), HS
      }
      static mergeMeshes(SS, HS, gS, tS, bS, XS) {
        const qS = SS[0].lL(),
          uS = new NS.e(SS[0].name + "_merged", qS),
          fS = new IS(xS.e.RandomId(), qS, void 0, !1, uS);
        try {
          if (!NS.e.MergeMeshes(SS, HS, gS, uS, bS, XS)) return uS.dispose(), null
        } catch (kS) {
          throw uS.dispose(), kS
        }
        return fS.relink(), uS
      }
      removeVerticesData(SS) {
        this.releaseUnlessInstanced(SS), super.removeVerticesData(SS)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(SS) {
        var HS;
        SS && null !== (HS = this.getVertexBuffer(SS)) && void 0 !== HS && HS.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, uS.w)(this.model), this.model = null)
      }
    }

    function fS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NS.e(SS, gS);
      const bS = (0, uS.l)(HS),
        {
          positions: XS,
          normals: fS,
          uvs: kS,
          indices: aS,
          named: KS = {}
        } = HS,
        jS = new qS.e;
      jS.positions = XS, jS.normals = null !== fS && void 0 !== fS ? fS : null, jS.uvs = null !== kS && void 0 !== kS ? kS : null, jS.indices = aS;
      const GS = new IS(xS.e.RandomId(), gS, jS, !1, tS);
      for (const {
          kind: xS,
          components: NS
        }
        of bS.vertexAttributes) xS in KS && tS.setVerticesData(xS, KS[xS], !1, NS);
      return GS.link(bS), tS
    }

    function kS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const bS = new NS.e(SS, gS),
        {
          positions: XS,
          normals: xS,
          uvs: uS,
          indices: IS
        } = HS;
      return Object.assign(new qS.e, {
        positions: XS,
        normals: xS,
        uvs: uS,
        indices: IS
      }).applyToMesh(bS, tS), bS
    }
  },
  41629: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => GS,
      i: () => NS,
      m: () => xS,
      n: () => uS
    });
    var tS = gS(37294),
      bS = gS(38715),
      XS = gS(38712);

    function xS(SS, HS, gS, tS) {
      const bS = XS.u;
      HS.fill(0), SS.gravity.toArray(HS, bS.gravity), SS.colorDead.toArray(HS, bS.colorDead), gS[bS.ramp] = SS.useRampGradients ? 1 : 0;
      const xS = SS.getColorGradients(),
        NS = kS(SS, xS, "colour", tS);
      gS[bS.colorCount] = NS;
      for (let XS = 0; XS < NS; XS++) {
        var qS;
        const SS = xS[aS(xS, XS)];
        HS[bS.colorPositions + XS] = SS.gradient, SS.color1.toArray(HS, bS.color1 + 4 * XS), (null !== (qS = SS.color2) && void 0 !== qS ? qS : SS.color1).toArray(HS, bS.color2 + 4 * XS)
      }
      const uS = SS.getVelocityGradients(),
        IS = kS(SS, uS, "xG", tS);
      gS[bS.velocityCount] = IS;
      for (let XS = 0; XS < IS; XS++) nS(HS, bS.xG + 4 * XS, uS[aS(uS, XS)]);
      const fS = SS.useRampGradients ? SS.getColorRemapGradients() : null,
        KS = kS(SS, fS, "colour remap", tS);
      gS[bS.remapCount] = KS;
      for (let XS = 0; XS < KS; XS++) nS(HS, bS.remap + 4 * XS, fS[aS(fS, XS)])
    }

    function NS() {
      return {
        key: [],
        texels: new Uint8Array(4 * XS.k)
      }
    }
    const qS = [];

    function uS(SS, HS) {
      return IS(SS, qS), !CS(qS, HS.key) && (HS.key.length = 0, HS.key.push(...qS), HS.key.length > 0 && function(SS, HS) {
        for (let gS = 0; gS < XS.k; gS++) bS.n.GetCurrentGradient(gS / XS.k, SS, ((SS, HS, gS) => {
          tS.Color3.LerpToRef(SS.color, HS.color, gS, fS)
        })), HS[4 * gS] = 255 * fS.r, HS[4 * gS + 1] = 255 * fS.g, HS[4 * gS + 2] = 255 * fS.b, HS[4 * gS + 3] = 255
      }(SS.getRampGradients(), HS.texels), !0)
    }

    function IS(SS, HS) {
      HS.length = 0;
      const gS = SS.useRampGradients ? SS.getRampGradients() : null;
      if (null !== gS && void 0 !== gS && gS.length) {
        HS.push(gS.length);
        for (const SS of gS) HS.push(SS.gradient, SS.color.r, SS.color.g, SS.color.b)
      }
    }
    const fS = new tS.Color3;

    function kS(SS, HS, gS, tS) {
      return HS ? HS.length > XS.b ? (tS(`particleStops:${gS}`, `GPU particles use the first 2 and last ${XS.b-2} of more than ${XS.b} ${gS} gradient stops (${SS.name})`), XS.b) : HS.length : 0
    }

    function aS(SS, HS) {
      return HS < 2 || SS.length <= XS.b ? HS : SS.length - XS.b + HS
    }
    const KS = new Float32Array(XS.m),
      jS = new Uint32Array(KS.buffer);

    function GS(SS, HS, gS) {
      return xS(SS, KS, jS, gS), HS && CS(jS, HS) ? null : jS.slice()
    }

    function CS(SS, HS) {
      if (SS.length !== HS.length) return !1;
      for (let gS = 0; gS < SS.length; gS++)
        if (SS[gS] !== HS[gS]) return !1;
      return !0
    }

    function nS(SS, HS, gS) {
      var tS;
      SS[HS] = gS.gradient, SS[HS + 1] = gS.factor1, SS[HS + 2] = null !== (tS = gS.factor2) && void 0 !== tS ? tS : gS.factor1
    }
  },
  41625: (SS, HS, gS) => {
    function tS() {
      let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const HS = new Set;
      return (gS, tS) => {
        HS.has(gS) || (HS.add(gS), console.warn(SS + tS))
      }
    }
    gS.d(HS, {
      d: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);