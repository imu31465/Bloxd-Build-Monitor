export const id = 0;
export const ids = [0];
export const modules = {
  41147: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CapeMaterialPlugin: () => dB,
      HueTintMaterialPlugin: () => CB,
      LifeformMaterialPlugin: () => QB,
      OverlayMaterialPlugin: () => sB
    });
    var TB = ZB(41154),
      JB = ZB(38070);
    class oB extends((0, TB.h)(JB.d)) {}(0, TB.j)(JB.d, oB);
    var GB = ZB(37212);
    class vB extends((0, TB.h)(GB.f)) {}(0, TB.j)(GB.f, vB);
    var kB = ZB(37901);
    class cB extends((0, TB.h)(kB.f)) {}(0, TB.j)(kB.f, cB);
    var nB = ZB(37477),
      hB = ZB(40318),
      zB = ZB(37469);
    class FB extends((0, TB.h)(zB.d)) {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB), (0, nB.f)(BB)
      }
      dispose(BB) {
        (0, nB.h)(this._material), super.dispose(BB)
      }
    }(0, TB.j)(zB.d, FB), (0, zB.f)({
      disableUnusedSpecularTerm: TB.d,
      isLightingDisabled: BB => BB instanceof hB.StandardMaterial && BB.disableLighting
    });
    var NB = ZB(38726);
    class gB extends((0, TB.h)(NB.h)) {}(0, TB.j)(NB.h, gB);
    var qB = ZB(38851),
      yB = ZB(37317),
      UB = ZB(38199),
      WB = ZB(37255);
    class dB extends((0, TB.h)(qB.b)) {}(0, TB.j)(qB.b, dB);
    class CB extends((0, TB.h)(yB.d)) {}(0, TB.j)(yB.d, CB);
    class QB extends((0, TB.h)(UB.n)) {}(0, TB.j)(UB.n, QB);
    class sB extends((0, TB.h)(WB.c)) {}(0, TB.j)(WB.c, sB)
  },
  41580: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      addBabylonLights: () => CI,
      default: () => wI
    });
    var TB = ZB(41582),
      JB = (ZB(40034), ZB(41144), ZB(40528), ZB(41590)),
      oB = ZB(37304),
      GB = ZB(37113),
      vB = ZB(41605),
      kB = ZB(41607),
      cB = ZB(37253),
      nB = (ZB(41154), ZB(41617)),
      hB = ZB(41610),
      zB = ZB(38761),
      FB = ZB(41622),
      NB = ZB(39905),
      gB = ZB(38748);
    const qB = "gpuParticles",
      yB = gB.v,
      UB = BB => BB / 4,
      WB = BB => `gpuParticleSystem[${BB>>2}].${"xyzw"[3&BB]}`,
      dB = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${gB.e}\n#define COLOR_POSITIONS ${UB(yB.colorPositions)}\n#define COLOR1 ${UB(yB.color1)}\n#define COLOR2 ${UB(yB.color2)}\n#define VELOCITY ${UB(yB.zq)}\n#define REMAP ${UB(yB.remap)}\n#define RECORDS_PER_ROW ${gB.q}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${gB.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${WB(yB.gravity)}, ${WB(yB.gravity+1)}, ${WB(yB.gravity+2)}); }\nint colorCount() { return int(${WB(yB.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${UB(yB.colorDead)}]; }\nint velocityCount() { return int(${WB(yB.velocityCount)}); }\nint remapCount() { return int(${WB(yB.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    NB.c.ShadersStore[`${qB}VertexShader`] = dB, NB.c.ShadersStore[`${qB}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const CB = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      QB = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var sB = ZB(38741),
      wB = ZB(41624);
    class OB extends sB.d {
      constructor(BB, IB, ZB, TB) {
        super(BB, IB, ZB), this.renderer = ZB, this.lg = TB, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(gB.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, wB.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (BB, IB) => {
          const {
            engine: ZB
          } = this, TB = ZB._gl;
          ZB._bindTextureDirectly(TB.TEXTURE_2D, this.records, !0), ZB._unpackFlipY(!1);
          const JB = this.ring.recordBits;
          for (let oB = BB; oB < IB;) {
            const BB = Math.floor(oB / gB.q),
              ZB = Math.min(IB, (BB + 1) * gB.q);
            TB.texSubImage2D(TB.TEXTURE_2D, 0, oB % gB.q * 4, BB, 4 * (ZB - oB), 1, TB.RGBA_INTEGER, TB.UNSIGNED_INT, JB, oB * gB.i), oB = ZB
          }
          ZB._bindTextureDirectly(TB.TEXTURE_2D, null)
        }, this.id = BB;
        const JB = TB.PN();
        this.engine = JB;
        const oB = Math.max(1, IB),
          GB = Math.min(oB, gB.q);
        this.records = JB.createRawTexture(null, 4 * GB, Math.ceil(oB / GB), nB.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, nB.b.TEXTURE_NEAREST_SAMPLINGMODE, null, nB.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lg.getAnimationRatio() || 1;
        const IB = this.lg.getFrameId();
        if (IB === this.animatedFrame) return !1;
        const ZB = super.animate(BB);
        return ZB && (this.animatedFrame = IB, this.ring.takeUploads(this.uploadSlots)), ZB
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(BB) {
        (0, wB.i)(this, this.uniforms, this.uniformBits, BB);
        for (const ZB of gB.u) this.uniforms[ZB] = this.uniformBits[ZB];
        var IB;
        (0, wB.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (IB = this.ramp) || void 0 === IB || IB.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = hB.d.CreateRGBATexture(this.rampTexels.texels, gB.n, 1, this.lg, !1, !1, nB.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var BB;
        this.records.dispose(), null === (BB = this.ramp) || void 0 === BB || BB.dispose(), this.ramp = null
      }
    }
    const YB = "the context was lost before the programs linked";
    class iB {
      constructor(BB, IB) {
        this.lg = BB, this.reportFailure = IB, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, FB.c)(), this.engine = BB.PN(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = hB.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, BB, !1, !1, nB.b.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      Kr(BB, IB) {
        const ZB = gB.q * this.engine.getCaps().maxTextureSize;
        IB > ZB && this.warnOnce(`capacity:${BB}`, `particle system ${BB} holds ${ZB} particles, not ${IB}: its records texture's limit`);
        const TB = new OB(BB, Math.min(IB, ZB), this, this.lg);
        return this.lg.addParticleSystem(TB), TB
      }
      canDraw(BB) {
        var IB, ZB;
        if (this.failed || null === (IB = BB.texture) || void 0 === IB || null === (ZB = IB.mirror) || void 0 === ZB || !ZB.isReady()) return !1;
        for (const TB of (0, zB.k)(BB.blendMode))
          if (!this.effectFor(TB).isReady()) return !1;
        return !0
      }
      disposeStopped(BB) {
        this.lg._toBeDisposed.push(BB)
      }
      remove(BB) {
        this.lg.removeParticleSystem(BB), BB.releaseGl()
      }
      render(BB) {
        var IB;
        if (!BB.isReady() || !BB.hasLiveParticles()) return 0;
        const {
          engine: ZB,
          lg: TB,
          frame: JB
        } = this;
        BB.prepareDraw(this.warnOnce), BB.drawOffset(JB, 0), JB[3] = BB.drawTime();
        const oB = BB.ring.drawStart(),
          GB = BB.ring.drawCount(),
          vB = null !== (IB = BB.ramp) && void 0 !== IB ? IB : this.whiteRamp;
        ZB.setState(!1);
        for (const kB of (0, zB.k)(BB.blendMode)) {
          const IB = this.effectFor(kB);
          ZB.enableEffect(IB), IB.setTexture("gpuParticleTexture", BB.texture.mirror), IB.setTexture("gpuParticleRampTexture", vB), IB._bindTexture("gpuParticleRecords", BB.records), IB.setMatrix("gpuParticleView", TB.getViewMatrix()), IB.setMatrix("gpuParticleProjection", TB.getProjectionMatrix()), IB.setFloatArray4("gpuParticleSystem", BB.uniforms), IB.setFloat4("gpuParticleFrame", JB[0], JB[1], JB[2], JB[3]), IB.setFloat2("gpuParticleRange", oB, GB), IB.setFloat("gpuParticleRamp", BB.uniforms[gB.v.ramp]), ZB.bindBuffers(this.vertexBuffers, null, IB), ZB.setAlphaMode((0, zB.j)(kB)), ZB.drawArraysType(nB.b.MATERIAL_TriangleStripDrawMode, 0, 4, GB), IB._bindTexture("gpuParticleRecords", null)
        }
        return ZB.setAlphaMode(nB.b.ALPHA_DISABLE), GB
      }
      awaitLink(BB) {
        const IB = BB.getPipelineContext(),
          ZB = this.gl();
        !this.failed && ZB && (!IB || IB.isParallelCompiled && !IB.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : IB.isParallelCompiled && IB.program && (ZB.getProgramParameter(IB.program, ZB.LINK_STATUS) || this.fail(function(BB, IB, ZB) {
          if (BB.isContextLost()) return YB;
          for (const [TB, JB] of [
              ["VERTEX SHADER", IB.vertexShader],
              ["FRAGMENT SHADER", IB.fragmentShader]
            ]) {
            const IB = JB && !BB.getShaderParameter(JB, BB.COMPILE_STATUS) ? BB.getShaderInfoLog(JB) : null;
            if (IB) return `${TB} ${IB}`
          }
          return BB.getProgramInfoLog(ZB) || "a program did not link"
        }(ZB, IB, IB.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(BB) {
        return BB === zB.e ? this.multiplyEffect : this.effect
      }
      createEffect(BB) {
        return this.engine.createEffect(qB, [], CB, QB, BB, void 0, void 0, ((BB, IB) => {
          var ZB;
          this.fail(null !== (ZB = this.gl()) && void 0 !== ZB && ZB.isContextLost() ? YB : function(BB) {
            const IB = BB.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(IB) ? "a program failed, its log not in this browser's stack" : IB.replace(/^Error: /, "")
          }(IB))
        }))
      }
      fail(BB) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${BB}`), this.reportFailure(BB);
          for (const BB of this.lg.DW.slice()) BB instanceof OB && BB.disposeOnStop && BB.dispose()
        }
      }
    }
    var pB = ZB(39872);
    class aB extends pB.e {
      createEffect() {
        const BB = super.createEffect(...arguments);
        return MB(BB), HB.has(BB) || (HB.add(BB), BB.onCompileObservable.add((() => {
          MB(BB)
        }))), BB
      }
    }
    const HB = new WeakSet;

    function MB(BB) {
      BB._vertexSourceCodeBeforeMigration = "", BB._fragmentSourceCodeBeforeMigration = ""
    }
    var jB = ZB(40253),
      PB = ZB(41140),
      RB = ZB(40010),
      rB = ZB(40207),
      mB = ZB(40202),
      XB = ZB(40143),
      LB = ZB(41199),
      eB = ZB(37668),
      uB = ZB(41627),
      fB = ZB(41631),
      lB = ZB(41638),
      AB = ZB(40163),
      tB = ZB(3014),
      bB = ZB(37535),
      xB = ZB(40354),
      EB = ZB(37635),
      DB = ZB(37568);

    function KB(BB) {
      if (BB.visibility < 1 || !BB.isVisible || !BB.isEnabled() || BB.metadata[DB.e] || !BB.isReady()) return !0;
      const IB = BB.EW;
      if (!IB || 0 === IB.length) return !0;
      for (let ZB = 0; ZB < IB.length; ZB++) {
        const TB = IB[ZB],
          JB = TB.LN();
        if (!JB || !JB.isReadyForSubMesh(BB, TB, !1)) return !0
      }
      return !1
    }
    class VB {
      constructor(BB, IB) {
        this.Nz = BB, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, IB.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      QF(BB) {
        var IB;
        const ZB = this.armed;
        if (this.armed = !1, this.vis = null, !ZB) return !1;
        this.culled = 0;
        const {
          Nz: TB
        } = this, JB = null === (IB = TB.pW) || void 0 === IB ? void 0 : IB.visibility;
        if (!JB || !BB || TB.Ig.Zg) return !1;
        if (!(TB.vz.LTB[0] >= EB.h)) return !1;
        const oB = BB.getProjectionMatrix().m;
        if (0 !== oB[15]) return !1;
        const GB = TB.Mz,
          vB = BB.globalPosition,
          kB = this.eye;
        return kB[0] = vB.x + GB[0], kB[1] = vB.y + GB[1], kB[2] = vB.z + GB[2], !!JB.eyeClear(kB[0], kB[1], kB[2], BB.minZ, oB, TB.vz) && (this.vis = JB, this.passable.clear(), this.count = 0, !0)
      }
      see(BB, IB) {
        const ZB = this.count++;
        if (ZB === this.cellSlots.length) {
          const BB = new Int32Array(2 * ZB);
          BB.set(this.cellSlots), this.cellSlots = BB
        }
        this.cellSlots[ZB] = IB, this.meshes[ZB] = BB
      }
      seeThrough(BB) {
        this.passable.add(BB)
      }
      finish(BB, IB) {
        const {
          vis: ZB,
          eye: TB,
          meshes: JB,
          count: oB,
          cellSlots: GB
        } = this, {
          vz: vB
        } = this.Nz, [kB, cB] = vB.LTB, nB = null !== ZB && ZB.update(TB[0], TB[1], TB[2], vB.mBB, kB, cB, this.passable);
        let hB = 0;
        for (let zB = 0; zB < oB; zB++) {
          const TB = JB[zB];
          if (nB) {
            const BB = 3 * GB[zB];
            if (BB >= 0 && !ZB.isDrawn(IB[BB], IB[BB + 1], IB[BB + 2])) {
              hB++;
              continue
            }
          }
          AB.g.prototype.push.call(BB, TB)
        }
        JB.fill(null, 0, oB), this.count = 0, this.vis = null, this.culled = hB
      }
    }
    var SB = ZB(37613),
      BI = ZB(37551),
      II = ZB(40339),
      ZI = ZB(41647),
      TI = ZB(40341),
      JI = ZB(40272);
    let oI = 1;
    const GI = new WeakSet;

    function vI() {
      return oI
    }

    function kI() {
      oI = oI >= 1073741823 ? 1 : oI + 1
    }

    function cI(BB) {
      const IB = BB.metadata;
      if (!IB || !0 !== IB[bB.l]) return;
      const ZB = IB[bB.p],
        TB = null === ZB || void 0 === ZB ? void 0 : ZB._noaStamps;
      if (!ZB || !TB) return;
      const JB = ZB.entries.indexOf(BB);
      JB >= 0 && (TB[JB] = 0)
    }

    function nI(BB) {
      const IB = BB.EW;
      for (let ZB = 0; ZB < IB.length; ZB++) {
        const BB = IB[ZB].LN();
        if (BB && !BB.isFrozen) return !1
      }
      for (let ZB = 0; ZB < IB.length; ZB++) {
        const BB = IB[ZB].LN();
        BB && GI.add(BB)
      }
      return !0
    }
    let hI = !1;
    const zI = new WeakSet;

    function FI(BB, IB) {
      const ZB = BB[IB];
      if ("function" !== typeof ZB) throw new Error(`terrainDrawState: Babylon has no ${IB} to hook`);
      return ZB
    }

    function NI(BB, IB, ZB, TB, JB) {
      const oB = ZB.vz.mBB,
        GB = new Map;
      let vB = 0;
      const kB = new VB(ZB, BB),
        cB = new SB.d(oB, BB.PN());
      ! function(BB) {
        if (zI.has(BB) || (zI.add(BB), BB.onContextLostObservable.add(kI), BB.jN.add(kI)), hI) return;
        hI = !0;
        const IB = ZI.b.prototype,
          ZB = FI(IB, "_markSubMeshesAsDirty");
        Object.assign(IB, {
          _markSubMeshesAsDirty(BB) {
            ZB.call(this, BB), cI(this)
          }
        });
        const TB = FI(JI.e.prototype, "_syncParentEnabledState");
        Object.assign(JI.e.prototype, {
          _syncParentEnabledState() {
            TB.call(this), cI(this)
          }
        });
        const JB = FI(TI.e.prototype, "resetDrawCache");
        TI.e.prototype.resetDrawCache = function(BB, IB) {
          JB.call(this, BB, IB), cI(this.getMesh())
        };
        const oB = II.e.prototype,
          GB = FI(oB, "markDirty");
        oB.markDirty = function(BB) {
          GB.call(this, BB), GI.has(this) && kI()
        };
        const vB = FI(oB, "_markAllSubMeshesAsDirty");
        Object.assign(oB, {
          _markAllSubMeshesAsDirty(BB) {
            vB.call(this, BB), GI.has(this) && kI()
          }
        })
      }(BB.PN());
      let nB = new Float64Array(384),
        hB = new Int32Array(64),
        zB = new Uint8Array(64),
        FB = new Float64Array(64),
        NB = new Int32Array(192),
        gB = 0;
      const qB = [],
        yB = new Float64Array(24),
        UB = () => {
          const BB = qB.pop();
          return void 0 !== BB ? (hB[BB] = 0, BB) : (gB === hB.length && (nB = gI(nB, new Float64Array(2 * nB.length)), hB = gI(hB, new Int32Array(2 * hB.length)), zB = gI(zB, new Uint8Array(2 * zB.length)), FB = gI(FB, new Float64Array(2 * FB.length)), NB = gI(NB, new Int32Array(2 * NB.length))), gB++)
        },
        WB = BB => {
          const IB = 6 * BB._noaSlot,
            ZB = BB.bTB[0],
            TB = BB.bTB[1];
          nB[IB] = ZB.x, nB[IB + 1] = ZB.y, nB[IB + 2] = ZB.z, nB[IB + 3] = TB.x, nB[IB + 4] = TB.y, nB[IB + 5] = TB.z
        },
        dB = (BB, IB, ZB) => {
          if (!ZB) return kB.see(BB, -1), !1;
          const TB = KB(BB);
          return TB && kB.seeThrough(FB[IB]), kB.see(BB, IB), !TB
        };
      let CB = -1;
      return BB.getActiveMeshCandidates = () => {
        const ZB = BB.frustumPlanes,
          TB = IB._selectionContent;
        TB.reset(), (ZB => {
          const TB = BB.frustumPlanes;
          vB = vB + 1 | 0 || 1;
          const JB = IB.blocks,
            oB = kB.QF(BB.activeCamera),
            GB = oB && !0;
          if (GB) {
            const IB = BB.PN().currentRenderPassId;
            IB !== CB && (CB = IB, kI())
          }
          const cB = vI(),
            FB = GB && !1;
          JB.length > 0 && function(BB, IB) {
            for (let ZB = 0; ZB < 6; ZB++) {
              const TB = BB[ZB],
                JB = TB.normal;
              IB[4 * ZB] = JB.x, IB[4 * ZB + 1] = JB.y, IB[4 * ZB + 2] = JB.z, IB[4 * ZB + 3] = TB.d
            }
          }(TB, yB);
          const gB = nB,
            qB = hB,
            UB = zB;
          for (let BB = 0; BB < JB.length; BB++) {
            const IB = JB[BB];
            if (!xB.d.IsInFrustum(IB.bTB, TB)) continue;
            const nB = IB.entries;
            {
              const BB = IB._noaSlots,
                TB = IB._noaStamps,
                JB = IB._noaTerrain;
              for (let IB = 0; IB < nB.length; IB++) {
                const hB = BB[IB];
                if (qB[hB] !== vB && (qB[hB] = vB, UB[hB] = qI(gB, 6 * hB, yB) ? 1 : 0), 0 === UB[hB]) continue;
                const zB = nB[IB];
                if (GB && TB[IB] === cB) FB && 1 === JB[IB] && KB(zB) && 0, kB.see(zB, 1 === JB[IB] ? hB : -1);
                else if (GB) {
                  TB[IB] = cB;
                  const BB = !0 === zB.metadata[BI.o];
                  JB[IB] = BB ? 1 : 0;
                  const ZB = dB(zB, hB, BB);
                  !BB || ZB && nI(zB) || (TB[IB] = 0)
                } else oB ? dB(zB, hB, !0 === zB.metadata[BI.o]) : AB.g.prototype.push.call(ZB, zB)
              }
              continue
            }
          }
          oB && kB.finish(ZB, NB)
        })(TB), cB.apply(TB, BB.activeCamera);
        const oB = IB.tTB;
        for (let BB = 0; BB < oB.length; BB++) {
          const IB = oB[BB];
          IB.isEnabled() && AB.g.prototype.push.call(TB, IB)
        }
        return JB(TB, ZB), TB
      }, {
        xTB: () => kB.culled,
        jTB: (BB, IB) => {
          const JB = Math.floor(IB[0] / oB),
            vB = Math.floor(IB[1] / oB),
            kB = Math.floor(IB[2] / oB),
            cB = `${JB}|${vB}|${kB}`;
          let nB = GB.get(cB);
          if (!nB) {
            const BB = [0, 0, 0];
            ZB.jIB([JB * oB - 1, vB * oB - 1, kB * oB - 1], null, BB), nB = Object.assign(TB(BB, oB + 2), {
              DTB: cB,
              KTB: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: UB()
            }), WB(nB), FB[nB._noaSlot] = (0, tB.i)(JB, vB, kB), NB[3 * nB._noaSlot] = JB, NB[3 * nB._noaSlot + 1] = vB, NB[3 * nB._noaSlot + 2] = kB, GB.set(cB, nB)
          }
          nB.KTB++, BB.metadata[bB.t] = nB
        },
        jR: BB => {
          const IB = BB.metadata[bB.t];
          IB && (IB.KTB--, IB.KTB <= 0 && (GB.delete(IB.DTB), qB.push(IB._noaSlot)), BB.metadata[bB.t] = null)
        },
        ATB: (BB, IB) => {
          const ZB = BB,
            TB = IB.metadata[bB.t];
          (ZB._noaSlots ??= []).push(TB._noaSlot), (ZB._noaStamps ??= []).push(0), (ZB._noaTerrain ??= []).push(0), ZB.entries.push(IB)
        },
        removeEntry: (BB, IB) => {
          const ZB = BB,
            TB = ZB.entries,
            JB = TB.indexOf(IB);
          if (JB < 0) return;
          const oB = ZB._noaSlots,
            GB = ZB._noaStamps,
            vB = ZB._noaTerrain,
            kB = TB.length - 1;
          TB[JB] = TB[kB], oB[JB] = oB[kB], GB[JB] = GB[kB], vB[JB] = vB[kB], TB.pop(), oB.pop(), GB.pop(), vB.pop()
        },
        kBB: BB => {
          for (const IB of GB.values()) {
            IB.XTB.VTB(BB), IB.mTB.VTB(BB);
            for (const ZB of IB.bTB) ZB.VTB(BB);
            WB(IB)
          }
        }
      }
    }

    function gI(BB, IB) {
      return IB.set(BB), IB
    }

    function qI(BB, IB, ZB) {
      const TB = BB[IB],
        JB = BB[IB + 1],
        oB = BB[IB + 2],
        GB = BB[IB + 3],
        vB = BB[IB + 4],
        kB = BB[IB + 5];
      for (let cB = 0; cB < 24; cB += 4) {
        const BB = ZB[cB],
          IB = ZB[cB + 1],
          nB = ZB[cB + 2];
        if (!(BB * (BB >= 0 ? GB : TB) + IB * (IB >= 0 ? vB : JB) + nB * (nB >= 0 ? kB : oB) + ZB[cB + 3] >= 0)) return !1
      }
      return !0
    }
    var yI = ZB(37830);
    class UI {
      constructor(BB, IB) {
        var ZB = BB.lg;
        ZB.yTB(new lB.c(ZB));
        var TB = new uB.e(kB);
        ZB.BJB = TB, TB.blocks = [];
        var JB, oB = {},
          vB = [];
        this.textPlanes = vB, this.xTB = () => JB.xTB(), this.kBB = BB => {
          nB(TB, BB), JB.kBB(BB)
        }, this.jTB = (IB, ZB, GB) => {
          if (!IB.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!IB.metadata[bB.p] && !IB.metadata[bB.j]) {
            if (!ZB) {
              var kB = TB.tTB;
              if (IB.metadata[bB.x] && !IB.parent) {
                kB = vB;
                var nB = IB.qm().ZJB;
                IB.metadata[bB.y] = nB.center.length() + nB.radius, IB.RN = !0
              }
              return kB.push(IB), IB.metadata[bB.f] = kB, void(IB.metadata[bB.j] = !0)
            }
            var zB = Math.floor(GB[0] / cB),
              FB = Math.floor(GB[1] / cB),
              NB = Math.floor(GB[2] / cB),
              gB = zB + "|" + FB + "|" + NB,
              qB = oB[gB];
            if (!qB) {
              var yB = [zB * cB, FB * cB, NB * cB],
                UB = [0, 0, 0];
              BB.Nz.jIB(yB, null, UB), qB = hB(UB, cB), TB.blocks.push(qB), oB[gB] = qB, qB.DTB = gB
            }
            JB.jTB(IB, GB), JB.ATB(qB, IB), qB.KTB = (qB.KTB || 0) + 1, IB.metadata[bB.p] = qB, IB.metadata[bB.l] = !0, IB.RN = !0
          }
        }, this.jR = BB => {
          if (BB.metadata) {
            BB.metadata[bB.j] && ((0, tB.o)(BB.metadata[bB.f], BB), BB.metadata[bB.j] = !1), BB.metadata[bB.f] === vB && (BB.RN = !1), BB.metadata[bB.f] = void 0, BB.metadata[bB.y] = void 0;
            var IB = BB.metadata[bB.p];
            IB && IB.entries && (BB.metadata[bB.l] && JB.removeEntry(IB, BB), IB.KTB--, IB.KTB <= 0 && (delete oB[IB.DTB], (0, tB.o)(TB.blocks, IB))), JB.jR(BB), BB.metadata[bB.p] = null, BB.metadata[bB.l] = !1
          }
        }, this.o3 = function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (BB.metadata[bB.p]) {
            if (BB.metadata[bB.l] === IB) return;
            var ZB = BB.metadata[bB.p];
            ZB && ZB.entries && (IB ? JB.ATB(ZB, BB) : JB.removeEntry(ZB, BB)), BB.metadata[bB.l] = IB
          } else {
            if (BB.metadata[bB.j] === IB) return;
            var oB = BB.metadata[bB.f] || TB.tTB;
            IB ? oB.push(BB) : (0, tB.o)(oB, BB), BB.metadata[bB.j] = IB
          }
        };
        var kB = () => {},
          cB = IB * BB.Nz.vz.mBB,
          nB = (BB, IB) => {
            BB.blocks.forEach((BB => {
              BB.XTB.VTB(IB), BB.mTB.VTB(IB), BB.bTB.forEach((BB => BB.VTB(IB))), BB.blocks && nB(BB, IB)
            }))
          },
          hB = (BB, IB) => {
            var ZB = new GB.rN(BB[0], BB[1], BB[2]),
              TB = new GB.rN(BB[0] + IB, BB[1] + IB, BB[2] + IB);
            return new fB.e(ZB, TB, void 0, void 0, void 0, kB)
          };
        JB = NI(ZB, TB, BB.Nz, hB, ((BB, IB) => {
          for (var ZB = 0; ZB < vB.length; ZB++) {
            var TB = vB[ZB];
            TB.isEnabled(!1) && ((0, yI.d)(TB, IB) && AB.g.prototype.push.call(BB, TB))
          }
        }))
      }
    }

    function WI(BB) {
      const {
        holderPosition: IB,
        holderRotation: ZB,
        bS: TB,
        fov: JB,
        near: oB,
        far: GB
      } = BB.model.qS, vB = BB.cJB;
      vB.position.cBB(IB[0], IB[1], IB[2]), vB.rotation.cBB(ZB[0], ZB[1], ZB[2]);
      const kB = BB.camera;
      kB.position.cBB(TB[0], TB[1], TB[2]), kB.fov = JB, kB.minZ = oB, kB.maxZ = GB
    }

    function dI(BB) {
      const IB = BB.PN(),
        ZB = IB,
        TB = ZB._gl;
      if (!TB || ZB.cg < 2 || IB.iTB || TB.getParameter(TB.DEPTH_BITS) < 24) return !1;
      const JB = BB._renderingManager,
        oB = JB.getRenderingGroup(-1),
        GB = JB.getRenderingGroup(0),
        vB = rB.c.prototype.render;
      return oB.render = function(BB, IB, ZB, TB, JB, oB, kB, cB, nB) {
        (BB || GB._empty) && vB.call(this, BB, IB, ZB, TB, JB, oB, kB, cB, nB)
      }, GB.render = function(BB, ZB, JB, GB) {
        let kB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          cB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          zB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          FB = arguments.length > 8 ? arguments[8] : void 0;
        BB ? vB.call(this, BB, ZB, JB, GB, kB, cB, hB, zB, FB) : (IB.setAlphaMode(nB.b.ALPHA_DISABLE), vB.call(this, null, !1, !1, GB, kB, cB, hB, !1), oB._empty || (TB.depthRange(1, 1), vB.call(oB, null, ZB, JB, GB, kB, cB, hB, zB, FB), TB.depthRange(0, 1)), vB.call(this, null, ZB, JB, GB, !1, !1, !1, zB, FB))
      }, !0
    }

    function CI(BB, IB) {
      return [IB, eB.d].map(((IB, ZB) => {
        const TB = new JB.b("light", GB.rN.FromArray(IB), BB);
        return TB.diffuse = oB.Color3.FromArray([1, 1, 1]), TB.specular = oB.Color3.FromArray([1, 1, 1]), TB.intensity = eB.c[ZB], TB
      }))
    }
    class QI extends kB.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(BB) {
        var IB;
        this.heldTexture = BB, this.particleTexture = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.mirror) && void 0 !== IB ? IB : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        BB && (this.particleTexture = null, (0, cB.A)(this.heldTexture), this.heldTexture = null), super.dispose(BB, IB, ZB)
      }
    }
    const sI = TB.e.Zero();
    const wI = {
      bZB: function(BB, IB) {
        return new aB(BB, IB.fZB, {
          preserveDrawingBuffer: IB.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      zJB: function(BB, IB) {
        ! function(BB, IB, ZB) {
          const TB = new XB.b(BB.engine);
          BB.lg = TB, TB.detachControl(), TB.autoClear = !1, mB.e.MIN_RENDERINGGROUPS = -1;
          for (let oB = mB.e.MIN_RENDERINGGROUPS; oB <= 1; oB++) TB.setRenderingOrder(oB, rB.c.PainterSortCompare, rB.c.PainterSortCompare, rB.c.PainterSortCompare);
          TB.setRenderingAutoClearDepthStencil(0, !1), RB.c.Enabled = !1, BB.GJB = new UI(BB, Math.round(IB.vJB)), BB.cJB = new PB.c("camHolder", TB), BB.camera = new jB.e("camera", new GB.rN(0, 0, 0), TB), BB.camera.parent = BB.cJB, WI(BB), (0, eB.h)(BB, ((BB, IB, ZB) => (0, LB.m)(IB, ZB, BB.lg))), TB.clearColor = oB.e.FromArray(IB.clearColor), TB.ambientColor = oB.Color3.FromArray(IB.ambientColor);
          const JB = ZB(TB, IB.hJB);
          TB.onNewLightAddedObservable.add((BB => {
            JB.some((IB => IB === BB)) || console.error(`Light "${BB.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), TB.skipPointerMovePicking = !0
        }(BB, IB, CI), dI(BB.lg)
      },
      kJB: WI,
      setBabylonFog: function(BB, IB, ZB, TB) {
        const JB = BB.lg;
        JB.fogMode = 3, JB.fogStart = IB, JB.fogEnd = ZB, JB.fogColor.set(TB[0], TB[1], TB[2])
      },
      NJB: function(BB, IB, ZB) {
        return BB.engine.cg >= 2 && (BB.gJB || (BB.gJB = new iB(BB.lg, BB.qJB)), !BB.gJB.failed) ? BB.gJB.Kr(IB, ZB) : new QI(IB, ZB, BB.lg)
      },
      UJB: function(BB, IB) {
        BB.lg.DW.forEach((ZB => {
          if (ZB instanceof OB) return void ZB.kBB(IB, BB.Nz.Mz);
          const TB = ZB;
          if (TB.emitter.getConnectedParticleSystems)
            for (const BB of TB._particles) BB.position.set(BB.position.x - IB[0], BB.position.y - IB[1], BB.position.z - IB[2]);
          else {
            if (!TB.worldOffset) throw new Error("Particle system has no world offset");
            TB.worldOffset.x = -BB.Nz.Mz[0], TB.worldOffset.y = -BB.Nz.Mz[1], TB.worldOffset.z = -BB.Nz.Mz[2]
          }
        }))
      },
      linesFromArrays: function(BB, IB, ZB) {
        const TB = new vB.c(IB, BB.lg, null, void 0, void 0, !1);
        return (0, LB.i)(IB, ZB, BB.lg, TB), TB
      },
      Ag: cI,
      yJB: function(BB, IB) {
        return sI.origin.TY(IB.origin), sI.direction.TY(IB.direction), sI.length = IB.length, sI.epsilon = IB.epsilon, sI.yJB(BB, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41154: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => uB,
      h: () => UB,
      j: () => xB
    });
    var TB = ZB(40318),
      JB = ZB(41162),
      oB = ZB(41203),
      GB = ZB(41170),
      vB = ZB(37869),
      kB = ZB(37878),
      cB = ZB(37884),
      nB = ZB(37890),
      hB = ZB(37248),
      zB = ZB(37253),
      FB = ZB(41176),
      NB = ZB(37239),
      gB = ZB(37243),
      qB = ZB(37223);

    function yB(BB, IB) {
      return Object.assign((function(BB, ZB, TB, JB) {
        return IB(this.featureState, BB, ZB, TB, JB)
      }), {
        vN: BB
      })
    }

    function UB(BB) {
      const IB = class extends FB.b {
          constructor(IB, ZB) {
            const TB = (0, gB._)(IB),
              JB = TB && (0, gB.v)(TB, BB.name);
            for (var oB = arguments.length, GB = new Array(oB > 2 ? oB - 2 : 0), vB = 2; vB < oB; vB++) GB[vB - 2] = arguments[vB];
            super(IB, BB.name, BB.priority, JB ? JB.defines : BB.defines(...GB), !1), this.featureState = void 0, this.featureState = ZB, this._pluginManager._addPlugin(this), this._enable(!0), (0, gB.y)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === qB.c.GLSL || BB === qB.c.WGSL
          }
        },
        ZB = (0, NB.h)(BB);
      for (const [TB, JB] of Object.entries(NB.c)) {
        const oB = BB[TB];
        if (oB) {
          const BB = ZB[TB];
          Object.defineProperty(IB.prototype, JB, {
            value: yB(oB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return IB
    }
    class WB extends(UB(vB.e)) {}
    var dB = ZB(39872),
      CB = ZB(41179),
      QB = ZB(41184);

    function sB(BB, IB, ZB) {
      return (0, QB.d)(ZB, IB.urls, (() => async function(BB, IB, ZB) {
        const {
          width: TB
        } = BB[0].getSize(), JB = BB.map(((BB, ZB) => {
          var JB;
          const oB = Math.round(BB.getSize().height / TB),
            GB = null === IB || void 0 === IB ? void 0 : IB[ZB];
          return {
            pixels: GB && GB.byteLength === TB * TB * oB * 4 ? GB : null !== (JB = wB.get(BB.getInternalTexture())) && void 0 !== JB ? JB : BB._readPixelsSync(),
            layers: oB
          }
        })), oB = ZB.PN().getCaps().texture2DArrayMaxLayerCount, vB = (0, QB.c)(JB, TB, oB).map((BB => {
          let {
            pixels: IB,
            layers: JB
          } = BB;
          return {
            atlas: new CB.b(IB, TB, TB, JB, dB.e.TEXTUREFORMAT_RGBA, ZB, !0, !1, GB.e.NEAREST_NEAREST_MIPLINEAR),
            layers: JB
          }
        }));
        return BB.forEach(((BB, IB) => {
          const TB = BB.getInternalTexture();
          wB.has(TB) || (! function(BB, IB) {
            const ZB = IB.createRawTexture(new Uint8Array(4), 1, 1, dB.e.TEXTUREFORMAT_RGBA, !1, !1, GB.e.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), IB.unbindAllTextures(), ZB._swapAndDie(BB, !1)
          }(TB, ZB.PN()), wB.set(TB, JB[IB].pixels))
        })), vB
      }(BB, IB.pixels, ZB)))
    }
    const wB = new WeakMap;
    var OB = ZB(37897);
    class YB extends(UB(kB.g)) {
      constructor(BB, IB) {
        super(BB, IB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = IB.textures.map((BB => BB.mirror)), this.mirrors.forEach(((BB, IB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, IB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${IB}`, BB)
            }))
          }))
        })), (0, OB.i)(IB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, IB) {
        const ZB = this.featureState,
          {
            width: TB,
            height: JB
          } = BB.getSize(),
          oB = this._material.shaderLanguage;
        if (!ZB.useWebGL2) return void(0, OB.e)(this._material, ZB, IB, TB, Math.round(JB / TB), oB);
        if (this.loaded.add(IB), this.loaded.size < this.mirrors.length) return;
        const GB = await sB(this.mirrors, ZB.sources, this._material.JR());
        (0, OB.d)(this._material, ZB, GB, TB, oB)
      }
    }
    var iB = ZB(41192),
      pB = ZB(40351),
      aB = ZB(37113),
      HB = ZB(41197),
      MB = ZB(40463),
      jB = ZB(40341),
      PB = ZB(41140),
      RB = ZB(37650),
      rB = ZB(41199);
    class mB extends iB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const XB = {
      Mesh: HB.c,
      TransformNode: PB.c,
      UN: iB.d,
      VertexBuffer: iB.e,
      BoundingInfo: pB.d,
      rN: aB.rN,
      ArenaBuffer: mB,
      SubMesh: jB.e,
      VertexData: MB.c,
      MirroredGeometry: rB.e,
      meshFromArrays: rB.i,
      plainMeshFromArrays: rB.m
    };
    (0, RB.g)(XB);
    var LB = ZB(37477);
    class eB extends(UB(nB.f)) {
      constructor(BB, IB) {
        if (super(BB, IB), BB instanceof TB.StandardMaterial && IB.dirLightCount > 0) {
          const IB = BB,
            ZB = IB._blockDirtyMechanism;
          IB._blockDirtyMechanism = !0, BB.disableLighting = !0, IB._blockDirtyMechanism = ZB;
          const TB = (0, gB._)(BB);
          TB && (TB.disableLighting = !0, (0, gB.Y)(TB))
        }(0, LB.f)(BB)
      }
      dispose(BB) {
        (0, LB.h)(this._material), super.dispose(BB)
      }
    }

    function uB(BB, IB) {
      if (!(IB instanceof TB.StandardMaterial) || IB.specularTexture) return;
      const {
        r: ZB,
        g: JB,
        b: oB
      } = IB.specularColor;
      0 === ZB && 0 === JB && 0 === oB && (BB.SPECULARTERM = !1)
    }(0, nB.c)({
      disableUnusedSpecularTerm: uB
    });
    var fB = ZB(37336),
      lB = ZB(37662);
    const AB = new RegExp(`^#define ${cB.c}\\s*$`, "m");
    class tB extends(UB(cB.k)) {
      constructor(BB, IB) {
        super(BB, IB), this.WN = !1, IB.ditherOnlyWhileFading && (lB.f.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const IB = new WeakSet;
        BB.onEffectCreatedObservable.add((ZB => {
          let {
            effect: TB,
            subMesh: JB
          } = ZB;
          if (this.featureState.prewarmingDither || IB.has(TB)) return;
          IB.add(TB);
          const oB = null === JB || void 0 === JB ? void 0 : JB.getMesh();
          oB && !AB.test(TB.defines) && BB.JR().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(oB) || IB.delete(TB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.WN || BB.mC()) return !1;
        const IB = new jB.e(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, IB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== IB.effect
      }
      dispose(BB) {
        this.WN = !0, super.dispose(BB)
      }
    }
    const bB = new Map;

    function xB(BB, IB) {
      bB.set(BB, IB)
    }
    xB(vB.e, WB), xB(kB.g, YB), xB(cB.k, tB), xB(nB.f, eB), (0, hB.e)({
      create: (BB, IB) => {
        const ZB = new TB.StandardMaterial(BB.name, IB);
        return (0, fB.q)(BB, ZB), ZB.detailMap._pluginDefineNames
      },
      write: (BB, IB, ZB) => {
        (0, fB.X)(BB.mirror, IB, ZB)
      },
      addFeature: (BB, IB, ZB) => {
        const TB = bB.get(IB.feature);
        if (!TB) throw new Error(`${IB.feature.name} has no plugin class (registerPluginClass)`);
        new TB(BB.mirror, IB.state, ...ZB)
      },
      texture: (BB, IB, ZB) => {
        let {
          url: TB,
          noMipmap: JB,
          invertY: oB,
          samplingMode: vB,
          data: kB,
          sets: cB
        } = ZB;
        if (!kB) {
          const ZB = new GB.e(TB, IB, JB, oB, vB);
          return Object.assign(ZB, cB), void(0, zB.G)(BB, ZB)
        }
        const nB = {},
          hB = new Promise(((BB, IB) => {
            nB.onLoad = BB, nB.onError = (BB, ZB) => {
              IB(new Error(`${kB.context}: ${(null===ZB||void 0===ZB?void 0:ZB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: FB,
            bytes: NB,
            label: gB
          } = kB,
          qB = {
            noMipmap: JB,
            invertY: !1,
            samplingMode: vB,
            ...nB,
            mimeType: FB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yB = new GB.e(null, IB, qB);
        fB.r.set(yB, hB), Object.assign(yB, cB), yB.updateURL(TB, NB);
        const UB = yB.getInternalTexture();
        UB && (UB.label = gB), BB.uvSet = yB.coordinatesIndex, BB.matrix.set((0, fB.L)(yB)), (0, zB.G)(BB, yB)
      },
      cube: (BB, IB, ZB) => {
        let {
          rootUrl: TB,
          files: oB,
          noMipmap: vB,
          luminance: kB
        } = ZB;
        const {
          samplingMode: cB
        } = BB.sampler, nB = cB === (0, zB.z)(vB) ? null : () => {
          (0, fB.J)(hB, cB)
        }, hB = new JB.b(TB, IB, null, vB, oB, nB, null, (0, zB.x)(kB));
        hB.coordinatesMode = GB.e.SKYBOX_MODE, (0, zB.G)(BB, hB)
      },
      canvas: (BB, IB, ZB) => {
        let {
          width: TB,
          height: JB,
          mipmaps: vB,
          samplingMode: kB,
          hasAlpha: cB = !1,
          wrap: nB = GB.e.CLAMP_ADDRESSMODE
        } = ZB;
        const hB = new oB.c(IB, {
          width: TB,
          height: JB
        }, BB, vB, kB);
        hB.hasAlpha = cB, hB.wrapU = nB, hB.wrapV = nB;
        const zB = (0, fB.A)(hB);
        return (0, fB.B)(zB, hB), zB
      }
    })
  },
  41199: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      i: () => hB,
      m: () => zB
    });
    var TB = ZB(41192),
      JB = ZB(40129),
      oB = ZB(40351),
      GB = ZB(40469),
      vB = ZB(41197),
      kB = ZB(40463),
      cB = ZB(37525);
    class nB extends GB.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, IB) => {
          this.releaseUnlessInstanced(IB)
        }, this.onLinked = null
      }
      link(BB) {
        var IB;
        (0, cB.i)(BB), this.model = BB, null === (IB = this.onLinked) || void 0 === IB || IB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const JB of Object.values(this._vertexBuffers))
          if (!JB.getIsInstanced()) {
            const {
              byteOffset: IB,
              byteStride: ZB,
              type: TB,
              normalized: oB
            } = JB;
            BB.push({
              kind: JB.getKind(),
              data: JB.getData(),
              offset: IB,
              stride: ZB,
              components: JB.getSize(),
              glType: TB,
              isNormalized: oB
            })
          } const IB = this._indices.length ? this._indices : null,
          {
            minimum: ZB,
            maximum: TB
          } = this.extend;
        this.link(new cB.e(BB, IB, this.getTotalVertices(), new Float64Array(ZB.HTB()), new Float64Array(TB.HTB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const IB = new nB(BB, this.JR()),
          ZB = this.MTB(void 0, !0);
        ZB && IB.setIndices(ZB);
        let GB = !1;
        for (const oB in this._vertexBuffers) {
          const BB = this._vertexBuffers[oB],
            ZB = BB.getData();
          if (!ZB) continue;
          const vB = BB.getSize(),
            {
              type: kB,
              byteOffset: cB,
              byteStride: nB,
              normalized: hB
            } = BB;
          GB ||= BB.isUpdatable();
          const zB = BB.getIsInstanced() ? (ZB instanceof Array ? 4 * ZB.length : ZB.byteLength) / nB : this.getTotalVertices(),
            FB = (0, JB.s)(ZB, vB, kB, cB, nB, zB, !0),
            NB = {
              updatable: BB.isUpdatable(),
              stride: vB,
              type: kB,
              normalized: hB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          IB.setVerticesBuffer(new TB.e(this.PN(), FB, oB, NB), zB)
        }
        return IB._updatable = GB, IB._boundingInfo = new oB.d(this.extend.minimum, this.extend.maximum), IB.relink(), IB
      }
      static mergeMeshes(BB, IB, ZB, TB, JB, oB) {
        const kB = BB[0].JR(),
          cB = new vB.c(BB[0].name + "_merged", kB),
          hB = new nB(GB.e.RandomId(), kB, void 0, !1, cB);
        try {
          if (!vB.c.MergeMeshes(BB, IB, ZB, cB, JB, oB)) return cB.dispose(), null
        } catch (zB) {
          throw cB.dispose(), zB
        }
        return hB.relink(), cB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var IB;
        BB && null !== (IB = this.getVertexBuffer(BB)) && void 0 !== IB && IB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, cB.r)(this.model), this.model = null)
      }
    }

    function hB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new vB.c(BB, ZB);
      const JB = (0, cB.g)(IB),
        {
          positions: oB,
          normals: hB,
          uvs: zB,
          indices: FB,
          named: NB = {}
        } = IB,
        gB = new kB.c;
      gB.positions = oB, gB.normals = null !== hB && void 0 !== hB ? hB : null, gB.uvs = null !== zB && void 0 !== zB ? zB : null, gB.indices = FB;
      const qB = new nB(GB.e.RandomId(), ZB, gB, !1, TB);
      for (const {
          kind: GB,
          components: vB
        }
        of JB.vertexAttributes) GB in NB && TB.setVerticesData(GB, NB[GB], !1, vB);
      return qB.link(JB), TB
    }

    function zB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const JB = new vB.c(BB, ZB),
        {
          positions: oB,
          normals: GB,
          uvs: cB,
          indices: nB
        } = IB;
      return Object.assign(new kB.c, {
        positions: oB,
        normals: GB,
        uvs: cB,
        indices: nB
      }).applyToMesh(JB, TB), JB
    }
  },
  41624: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => qB,
      f: () => vB,
      i: () => GB,
      j: () => cB
    });
    var TB = ZB(37304),
      JB = ZB(38754),
      oB = ZB(38748);

    function GB(BB, IB, ZB, TB) {
      const JB = oB.v;
      IB.fill(0), BB.gravity.toArray(IB, JB.gravity), BB.colorDead.toArray(IB, JB.colorDead), ZB[JB.ramp] = BB.useRampGradients ? 1 : 0;
      const GB = BB.getColorGradients(),
        vB = zB(BB, GB, "colour", TB);
      ZB[JB.colorCount] = vB;
      for (let oB = 0; oB < vB; oB++) {
        var kB;
        const BB = GB[FB(GB, oB)];
        IB[JB.colorPositions + oB] = BB.gradient, BB.color1.toArray(IB, JB.color1 + 4 * oB), (null !== (kB = BB.color2) && void 0 !== kB ? kB : BB.color1).toArray(IB, JB.color2 + 4 * oB)
      }
      const cB = BB.getVelocityGradients(),
        nB = zB(BB, cB, "zq", TB);
      ZB[JB.velocityCount] = nB;
      for (let oB = 0; oB < nB; oB++) UB(IB, JB.zq + 4 * oB, cB[FB(cB, oB)]);
      const hB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        NB = zB(BB, hB, "colour remap", TB);
      ZB[JB.remapCount] = NB;
      for (let oB = 0; oB < NB; oB++) UB(IB, JB.remap + 4 * oB, hB[FB(hB, oB)])
    }

    function vB() {
      return {
        key: [],
        texels: new Uint8Array(4 * oB.n)
      }
    }
    const kB = [];

    function cB(BB, IB) {
      return nB(BB, kB), !yB(kB, IB.key) && (IB.key.length = 0, IB.key.push(...kB), IB.key.length > 0 && function(BB, IB) {
        for (let ZB = 0; ZB < oB.n; ZB++) JB.n.GetCurrentGradient(ZB / oB.n, BB, ((BB, IB, ZB) => {
          TB.Color3.LerpToRef(BB.color, IB.color, ZB, hB)
        })), IB[4 * ZB] = 255 * hB.r, IB[4 * ZB + 1] = 255 * hB.g, IB[4 * ZB + 2] = 255 * hB.b, IB[4 * ZB + 3] = 255
      }(BB.getRampGradients(), IB.texels), !0)
    }

    function nB(BB, IB) {
      IB.length = 0;
      const ZB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== ZB && void 0 !== ZB && ZB.length) {
        IB.push(ZB.length);
        for (const BB of ZB) IB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const hB = new TB.Color3;

    function zB(BB, IB, ZB, TB) {
      return IB ? IB.length > oB.e ? (TB(`particleStops:${ZB}`, `GPU particles use the first 2 and last ${oB.e-2} of more than ${oB.e} ${ZB} gradient stops (${BB.name})`), oB.e) : IB.length : 0
    }

    function FB(BB, IB) {
      return IB < 2 || BB.length <= oB.e ? IB : BB.length - oB.e + IB
    }
    const NB = new Float32Array(oB.r),
      gB = new Uint32Array(NB.buffer);

    function qB(BB, IB, ZB) {
      return GB(BB, NB, gB, ZB), IB && yB(gB, IB) ? null : gB.slice()
    }

    function yB(BB, IB) {
      if (BB.length !== IB.length) return !1;
      for (let ZB = 0; ZB < BB.length; ZB++)
        if (BB[ZB] !== IB[ZB]) return !1;
      return !0
    }

    function UB(BB, IB, ZB) {
      var TB;
      BB[IB] = ZB.gradient, BB[IB + 1] = ZB.factor1, BB[IB + 2] = null !== (TB = ZB.factor2) && void 0 !== TB ? TB : ZB.factor1
    }
  },
  41184: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      const TB = IB * IB * 4,
        JB = BB[0].layers,
        oB = JB * (BB.length - 1) + BB[BB.length - 1].layers,
        GB = new Uint8Array(oB * TB);
      BB.forEach(((IB, ZB) => {
        const oB = ZB + 1 < BB.length ? Math.min(IB.layers, JB) : IB.layers;
        GB.set(new Uint8Array(IB.pixels.buffer, IB.pixels.byteOffset, oB * TB), ZB * JB * TB)
      }));
      const vB = Math.max(1, Math.min(oB, ZB || oB));
      if (vB === oB) return [{
        pixels: GB,
        layers: oB
      }];
      const kB = [];
      for (let cB = 0; cB < oB; cB += vB) {
        const BB = Math.min(oB, cB + vB);
        kB.push({
          pixels: GB.slice(cB * TB, BB * TB),
          layers: BB - cB
        })
      }
      return kB
    }
    ZB.d(IB, {
      c: () => TB,
      d: () => oB
    });
    const JB = new WeakMap;

    function oB(BB, IB, ZB) {
      var TB, oB;
      const GB = null !== (TB = JB.get(BB)) && void 0 !== TB ? TB : new Map;
      JB.set(BB, GB);
      const vB = null !== (oB = GB.get(IB[0])) && void 0 !== oB ? oB : [];
      GB.set(IB[0], vB);
      const kB = vB.find((BB => BB.urls.length === IB.length && BB.urls.every(((BB, ZB) => BB === IB[ZB]))));
      if (kB) return kB.built;
      const cB = {
        urls: [...IB],
        built: ZB()
      };
      return vB.push(cB), cB.built.catch((() => {
        vB.splice(vB.indexOf(cB), 1)
      })), cB.built
    }
  },
  41622: (BB, IB, ZB) => {
    function TB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const IB = new Set;
      return (ZB, TB) => {
        IB.has(ZB) || (IB.add(ZB), console.warn(BB + TB))
      }
    }
    ZB.d(IB, {
      c: () => TB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);