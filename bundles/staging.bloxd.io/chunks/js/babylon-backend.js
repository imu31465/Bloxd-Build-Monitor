export const id = 0;
export const ids = [0];
export const modules = {
  41509: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      CapeMaterialPlugin: () => EG,
      HueTintMaterialPlugin: () => oG,
      LifeformMaterialPlugin: () => XG,
      OverlayMaterialPlugin: () => uG
    });
    var wG = ZG(41515),
      SG = ZG(38416);
    class LG extends((0, wG.g)(SG.b)) {}(0, wG.i)(SG.b, LG);
    var yG = ZG(37518);
    class kG extends((0, wG.g)(yG.e)) {}(0, wG.i)(yG.e, kG);
    var UG = ZG(38256);
    class YG extends((0, wG.g)(UG.h)) {}(0, wG.i)(UG.h, YG);
    var VG = ZG(37788),
      pG = ZG(40644),
      fG = ZG(37782);
    class QG extends((0, wG.g)(fG.f)) {
      constructor(GG, bG, ZG) {
        super(GG, bG, ZG), (0, VG.h)(GG)
      }
      dispose(GG) {
        (0, VG.k)(this._material), super.dispose(GG)
      }
    }(0, wG.i)(fG.f, QG), (0, fG.h)({
      disableUnusedSpecularTerm: wG.e,
      isLightingDisabled: GG => GG instanceof pG.StandardMaterial && GG.disableLighting
    });
    var KG = ZG(39097);
    class hG extends((0, wG.g)(KG.f)) {}(0, wG.i)(KG.f, hG);
    var dG = ZG(39195),
      JG = ZG(37629),
      rG = ZG(38546),
      zG = ZG(37576);
    class EG extends((0, wG.g)(dG.c)) {}(0, wG.i)(dG.c, EG);
    class oG extends((0, wG.g)(JG.b)) {}(0, wG.i)(JG.b, oG);
    class XG extends((0, wG.g)(rG.o)) {}(0, wG.i)(rG.o, XG);
    class uG extends((0, wG.g)(zG.c)) {}(0, wG.i)(zG.c, uG)
  },
  41988: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      addBabylonLights: () => ob,
      default: () => ib
    });
    var wG = ZG(41995),
      SG = (ZG(40369), ZG(41502), ZG(40865), ZG(42002)),
      LG = ZG(37618),
      yG = ZG(37432),
      kG = ZG(42014),
      UG = ZG(42016),
      YG = ZG(37567),
      VG = (ZG(41515), ZG(42032)),
      pG = ZG(42025),
      fG = ZG(39121),
      QG = ZG(42035),
      KG = ZG(40237),
      hG = ZG(39111);
    const dG = "gpuParticles",
      JG = hG.t,
      rG = GG => GG / 4,
      zG = GG => `gpuParticleSystem[${GG>>2}].${"xyzw"[3&GG]}`,
      EG = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${hG.b}\n#define COLOR_POSITIONS ${rG(JG.colorPositions)}\n#define COLOR1 ${rG(JG.color1)}\n#define COLOR2 ${rG(JG.color2)}\n#define VELOCITY ${rG(JG.Sd)}\n#define REMAP ${rG(JG.remap)}\n#define RECORDS_PER_ROW ${hG.i}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${hG.m/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${zG(JG.gravity)}, ${zG(JG.gravity+1)}, ${zG(JG.gravity+2)}); }\nint colorCount() { return int(${zG(JG.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${rG(JG.colorDead)}]; }\nint velocityCount() { return int(${zG(JG.velocityCount)}); }\nint remapCount() { return int(${zG(JG.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    KG.e.ShadersStore[`${dG}VertexShader`] = EG, KG.e.ShadersStore[`${dG}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const oG = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      XG = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var uG = ZG(39106),
      iG = ZG(42043);
    class CG extends uG.b {
      constructor(GG, bG, ZG, wG) {
        super(GG, bG, ZG), this.renderer = ZG, this.Ah = wG, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(hG.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, iG.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (GG, bG) => {
          const {
            engine: ZG
          } = this, wG = ZG._gl;
          ZG._bindTextureDirectly(wG.TEXTURE_2D, this.records, !0), ZG._unpackFlipY(!1);
          const SG = this.ring.recordBits;
          for (let LG = GG; LG < bG;) {
            const GG = Math.floor(LG / hG.i),
              ZG = Math.min(bG, (GG + 1) * hG.i);
            wG.texSubImage2D(wG.TEXTURE_2D, 0, LG % hG.i * 4, GG, 4 * (ZG - LG), 1, wG.RGBA_INTEGER, wG.UNSIGNED_INT, SG, LG * hG.c), LG = ZG
          }
          ZG._bindTextureDirectly(wG.TEXTURE_2D, null)
        }, this.id = GG;
        const SG = wG.CK();
        this.engine = SG;
        const LG = Math.max(1, bG),
          yG = Math.min(LG, hG.i);
        this.records = SG.createRawTexture(null, 4 * yG, Math.ceil(LG / yG), VG.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, VG.d.TEXTURE_NEAREST_SAMPLINGMODE, null, VG.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Ah.getAnimationRatio() || 1;
        const bG = this.Ah.getFrameId();
        if (bG === this.animatedFrame) return !1;
        const ZG = super.animate(GG);
        return ZG && (this.animatedFrame = bG, this.ring.takeUploads(this.uploadSlots)), ZG
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(GG) {
        (0, iG.i)(this, this.uniforms, this.uniformBits, GG);
        for (const ZG of hG.q) this.uniforms[ZG] = this.uniformBits[ZG];
        var bG;
        (0, iG.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (bG = this.ramp) || void 0 === bG || bG.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = pG.e.CreateRGBATexture(this.rampTexels.texels, hG.f, 1, this.Ah, !1, !1, VG.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var GG;
        this.records.dispose(), null === (GG = this.ramp) || void 0 === GG || GG.dispose(), this.ramp = null
      }
    }
    const WG = "the context was lost before the programs linked";
    class mG {
      constructor(GG, bG) {
        this.Ah = GG, this.reportFailure = bG, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, QG.e)(), this.engine = GG.CK(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = pG.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, GG, !1, !1, VG.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      rM(GG, bG) {
        const ZG = hG.i * this.engine.getCaps().maxTextureSize;
        bG > ZG && this.warnOnce(`capacity:${GG}`, `particle system ${GG} holds ${ZG} particles, not ${bG}: its records texture's limit`);
        const wG = new CG(GG, Math.min(bG, ZG), this, this.Ah);
        return this.Ah.addParticleSystem(wG), wG
      }
      canDraw(GG) {
        var bG, ZG;
        if (this.failed || null === (bG = GG.texture) || void 0 === bG || null === (ZG = bG.mirror) || void 0 === ZG || !ZG.isReady()) return !1;
        for (const wG of (0, fG.o)(GG.blendMode))
          if (!this.effectFor(wG).isReady()) return !1;
        return !0
      }
      disposeStopped(GG) {
        this.Ah._toBeDisposed.push(GG)
      }
      remove(GG) {
        this.Ah.removeParticleSystem(GG), GG.releaseGl()
      }
      render(GG) {
        var bG;
        if (!GG.isReady() || !GG.hasLiveParticles()) return 0;
        const {
          engine: ZG,
          Ah: wG,
          frame: SG
        } = this;
        GG.prepareDraw(this.warnOnce), GG.drawOffset(SG, 0), SG[3] = GG.drawTime();
        const LG = GG.ring.drawStart(),
          yG = GG.ring.drawCount(),
          kG = null !== (bG = GG.ramp) && void 0 !== bG ? bG : this.whiteRamp;
        ZG.setState(!1);
        for (const UG of (0, fG.o)(GG.blendMode)) {
          const bG = this.effectFor(UG);
          ZG.enableEffect(bG), bG.setTexture("gpuParticleTexture", GG.texture.mirror), bG.setTexture("gpuParticleRampTexture", kG), bG._bindTexture("gpuParticleRecords", GG.records), bG.setMatrix("gpuParticleView", wG.getViewMatrix()), bG.setMatrix("gpuParticleProjection", wG.getProjectionMatrix()), bG.setFloatArray4("gpuParticleSystem", GG.uniforms), bG.setFloat4("gpuParticleFrame", SG[0], SG[1], SG[2], SG[3]), bG.setFloat2("gpuParticleRange", LG, yG), bG.setFloat("gpuParticleRamp", GG.uniforms[hG.t.ramp]), ZG.bindBuffers(this.vertexBuffers, null, bG), ZG.setAlphaMode((0, fG.k)(UG)), ZG.drawArraysType(VG.d.MATERIAL_TriangleStripDrawMode, 0, 4, yG), bG._bindTexture("gpuParticleRecords", null)
        }
        return ZG.setAlphaMode(VG.d.ALPHA_DISABLE), yG
      }
      awaitLink(GG) {
        const bG = GG.getPipelineContext(),
          ZG = this.gl();
        !this.failed && ZG && (!bG || bG.isParallelCompiled && !bG.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : bG.isParallelCompiled && bG.program && (ZG.getProgramParameter(bG.program, ZG.LINK_STATUS) || this.fail(function(GG, bG, ZG) {
          if (GG.isContextLost()) return WG;
          for (const [wG, SG] of [
              ["VERTEX SHADER", bG.vertexShader],
              ["FRAGMENT SHADER", bG.fragmentShader]
            ]) {
            const bG = SG && !GG.getShaderParameter(SG, GG.COMPILE_STATUS) ? GG.getShaderInfoLog(SG) : null;
            if (bG) return `${wG} ${bG}`
          }
          return GG.getProgramInfoLog(ZG) || "a program did not link"
        }(ZG, bG, bG.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(GG) {
        return GG === fG.e ? this.multiplyEffect : this.effect
      }
      createEffect(GG) {
        return this.engine.createEffect(dG, [], oG, XG, GG, void 0, void 0, ((GG, bG) => {
          var ZG;
          this.fail(null !== (ZG = this.gl()) && void 0 !== ZG && ZG.isContextLost() ? WG : function(GG) {
            const bG = GG.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(bG) ? "a program failed, its log not in this browser's stack" : bG.replace(/^Error: /, "")
          }(bG))
        }))
      }
      fail(GG) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${GG}`), this.reportFailure(GG);
          for (const GG of this.Ah.lE.slice()) GG instanceof CG && GG.disposeOnStop && GG.dispose()
        }
      }
    }
    var IG = ZG(40197);
    class FG extends IG.b {
      createEffect() {
        const GG = super.createEffect(...arguments);
        return aG(GG), vG.has(GG) || (vG.add(GG), GG.onCompileObservable.add((() => {
          aG(GG)
        }))), GG
      }
    }
    const vG = new WeakSet;

    function aG(GG) {
      GG._vertexSourceCodeBeforeMigration = "", GG._fragmentSourceCodeBeforeMigration = ""
    }
    var cG = ZG(40582),
      lG = ZG(41498),
      jG = ZG(40337),
      PG = ZG(40543),
      MG = ZG(40540),
      AG = ZG(40467),
      sG = ZG(41565),
      qG = ZG(37993),
      nG = ZG(42051),
      gG = ZG(42057),
      eG = ZG(42059),
      RG = ZG(40484),
      TG = ZG(2854),
      HG = ZG(37855),
      tG = ZG(40683),
      DG = ZG(37941),
      NG = ZG(37879);

    function OG(GG) {
      if (GG.visibility < 1 || !GG.isVisible || !GG.isEnabled() || GG.metadata[NG.f] || !GG.isReady()) return !0;
      const bG = GG.aE;
      if (!bG || 0 === bG.length) return !0;
      for (let ZG = 0; ZG < bG.length; ZG++) {
        const wG = bG[ZG],
          SG = wG.vK();
        if (!SG || !SG.isReadyForSubMesh(GG, wG, !1)) return !0
      }
      return !1
    }
    class xG {
      constructor(GG, bG) {
        this.wf = GG, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, bG.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      hQ(GG) {
        var bG;
        const ZG = this.armed;
        if (this.armed = !1, this.vis = null, !ZG) return !1;
        this.culled = 0;
        const {
          wf: wG
        } = this, SG = null === (bG = wG.QE) || void 0 === bG ? void 0 : bG.visibility;
        if (!SG || !GG || wG.HK.tK) return !1;
        if (!(wG.Op.PwG[0] >= DG.d)) return !1;
        const LG = GG.getProjectionMatrix().m;
        if (0 !== LG[15]) return !1;
        const yG = wG.zf,
          kG = GG.globalPosition,
          UG = this.eye;
        return UG[0] = kG.x + yG[0], UG[1] = kG.y + yG[1], UG[2] = kG.z + yG[2], !!SG.eyeClear(UG[0], UG[1], UG[2], GG.minZ, LG, wG.Op) && (this.vis = SG, this.passable.clear(), this.count = 0, !0)
      }
      see(GG, bG) {
        const ZG = this.count++;
        if (ZG === this.cellSlots.length) {
          const GG = new Int32Array(2 * ZG);
          GG.set(this.cellSlots), this.cellSlots = GG
        }
        this.cellSlots[ZG] = bG, this.meshes[ZG] = GG
      }
      seeThrough(GG) {
        this.passable.add(GG)
      }
      finish(GG, bG) {
        const {
          vis: ZG,
          eye: wG,
          meshes: SG,
          count: LG,
          cellSlots: yG
        } = this, {
          Op: kG
        } = this.wf, [UG, YG] = kG.PwG, VG = null !== ZG && ZG.update(wG[0], wG[1], wG[2], kG.sGG, UG, YG, this.passable);
        let pG = 0;
        for (let fG = 0; fG < LG; fG++) {
          const wG = SG[fG];
          if (VG) {
            const GG = 3 * yG[fG];
            if (GG >= 0 && !ZG.isDrawn(bG[GG], bG[GG + 1], bG[GG + 2])) {
              pG++;
              continue
            }
          }
          RG.g.prototype.push.call(GG, wG)
        }
        SG.fill(null, 0, LG), this.count = 0, this.vis = null, this.culled = pG
      }
    }
    var BG = ZG(37926),
      Gb = ZG(37867),
      bb = ZG(40664),
      Zb = ZG(42065),
      wb = ZG(40673),
      Sb = ZG(40599);
    let Lb = 1;
    const yb = new WeakSet;

    function kb() {
      return Lb
    }

    function Ub() {
      Lb = Lb >= 1073741823 ? 1 : Lb + 1
    }

    function Yb(GG) {
      const bG = GG.metadata;
      if (!bG || !0 !== bG[HG.t]) return;
      const ZG = bG[HG.v],
        wG = null === ZG || void 0 === ZG ? void 0 : ZG._noaStamps;
      if (!ZG || !wG) return;
      const SG = ZG.entries.indexOf(GG);
      SG >= 0 && (wG[SG] = 0)
    }

    function Vb(GG) {
      const bG = GG.aE;
      for (let ZG = 0; ZG < bG.length; ZG++) {
        const GG = bG[ZG].vK();
        if (GG && !GG.isFrozen) return !1
      }
      for (let ZG = 0; ZG < bG.length; ZG++) {
        const GG = bG[ZG].vK();
        GG && yb.add(GG)
      }
      return !0
    }
    let pb = !1;
    const fb = new WeakSet;

    function Qb(GG, bG) {
      const ZG = GG[bG];
      if ("function" !== typeof ZG) throw new Error(`terrainDrawState: Babylon has no ${bG} to hook`);
      return ZG
    }

    function Kb(GG, bG, ZG, wG, SG) {
      const LG = ZG.Op.sGG,
        yG = new Map;
      let kG = 0;
      const UG = new xG(ZG, GG),
        YG = new BG.e(LG, GG.CK());
      ! function(GG) {
        if (fb.has(GG) || (fb.add(GG), GG.onContextLostObservable.add(Ub), GG.iK.add(Ub)), pb) return;
        pb = !0;
        const bG = Zb.d.prototype,
          ZG = Qb(bG, "_markSubMeshesAsDirty");
        Object.assign(bG, {
          _markSubMeshesAsDirty(GG) {
            ZG.call(this, GG), Yb(this)
          }
        });
        const wG = Qb(Sb.e.prototype, "_syncParentEnabledState");
        Object.assign(Sb.e.prototype, {
          _syncParentEnabledState() {
            wG.call(this), Yb(this)
          }
        });
        const SG = Qb(wb.c.prototype, "resetDrawCache");
        wb.c.prototype.resetDrawCache = function(GG, bG) {
          SG.call(this, GG, bG), Yb(this.getMesh())
        };
        const LG = bb.e.prototype,
          yG = Qb(LG, "markDirty");
        LG.markDirty = function(GG) {
          yG.call(this, GG), yb.has(this) && Ub()
        };
        const kG = Qb(LG, "_markAllSubMeshesAsDirty");
        Object.assign(LG, {
          _markAllSubMeshesAsDirty(GG) {
            kG.call(this, GG), yb.has(this) && Ub()
          }
        })
      }(GG.CK());
      let VG = new Float64Array(384),
        pG = new Int32Array(64),
        fG = new Uint8Array(64),
        QG = new Float64Array(64),
        KG = new Int32Array(192),
        hG = 0;
      const dG = [],
        JG = new Float64Array(24),
        rG = () => {
          const GG = dG.pop();
          return void 0 !== GG ? (pG[GG] = 0, GG) : (hG === pG.length && (VG = hb(VG, new Float64Array(2 * VG.length)), pG = hb(pG, new Int32Array(2 * pG.length)), fG = hb(fG, new Uint8Array(2 * fG.length)), QG = hb(QG, new Float64Array(2 * QG.length)), KG = hb(KG, new Int32Array(2 * KG.length))), hG++)
        },
        zG = GG => {
          const bG = 6 * GG._noaSlot,
            ZG = GG.ewG[0],
            wG = GG.ewG[1];
          VG[bG] = ZG.x, VG[bG + 1] = ZG.y, VG[bG + 2] = ZG.z, VG[bG + 3] = wG.x, VG[bG + 4] = wG.y, VG[bG + 5] = wG.z
        },
        EG = (GG, bG, ZG) => {
          if (!ZG) return UG.see(GG, -1), !1;
          const wG = OG(GG);
          return wG && UG.seeThrough(QG[bG]), UG.see(GG, bG), !wG
        };
      let oG = -1;
      return GG.getActiveMeshCandidates = () => {
        const ZG = GG.frustumPlanes,
          wG = bG._selectionContent;
        wG.reset(), (ZG => {
          const wG = GG.frustumPlanes;
          kG = kG + 1 | 0 || 1;
          const SG = bG.blocks,
            LG = UG.hQ(GG.activeCamera),
            yG = LG && !0;
          if (yG) {
            const bG = GG.CK().currentRenderPassId;
            bG !== oG && (oG = bG, Ub())
          }
          const YG = kb(),
            QG = yG && !1;
          SG.length > 0 && function(GG, bG) {
            for (let ZG = 0; ZG < 6; ZG++) {
              const wG = GG[ZG],
                SG = wG.normal;
              bG[4 * ZG] = SG.x, bG[4 * ZG + 1] = SG.y, bG[4 * ZG + 2] = SG.z, bG[4 * ZG + 3] = wG.d
            }
          }(wG, JG);
          const hG = VG,
            dG = pG,
            rG = fG;
          for (let GG = 0; GG < SG.length; GG++) {
            const bG = SG[GG];
            if (!tG.c.IsInFrustum(bG.ewG, wG)) continue;
            const VG = bG.entries;
            {
              const GG = bG._noaSlots,
                wG = bG._noaStamps,
                SG = bG._noaTerrain;
              for (let bG = 0; bG < VG.length; bG++) {
                const pG = GG[bG];
                if (dG[pG] !== kG && (dG[pG] = kG, rG[pG] = db(hG, 6 * pG, JG) ? 1 : 0), 0 === rG[pG]) continue;
                const fG = VG[bG];
                if (yG && wG[bG] === YG) QG && 1 === SG[bG] && OG(fG) && 0, UG.see(fG, 1 === SG[bG] ? pG : -1);
                else if (yG) {
                  wG[bG] = YG;
                  const GG = !0 === fG.metadata[Gb.n];
                  SG[bG] = GG ? 1 : 0;
                  const ZG = EG(fG, pG, GG);
                  !GG || ZG && Vb(fG) || (wG[bG] = 0)
                } else LG ? EG(fG, pG, !0 === fG.metadata[Gb.n]) : RG.g.prototype.push.call(ZG, fG)
              }
              continue
            }
          }
          LG && UG.finish(ZG, KG)
        })(wG), YG.apply(wG, GG.activeCamera);
        const LG = bG.gwG;
        for (let GG = 0; GG < LG.length; GG++) {
          const bG = LG[GG];
          bG.isEnabled() && RG.g.prototype.push.call(wG, bG)
        }
        return SG(wG, ZG), wG
      }, {
        RwG: () => UG.culled,
        FwG: (GG, bG) => {
          const SG = Math.floor(bG[0] / LG),
            kG = Math.floor(bG[1] / LG),
            UG = Math.floor(bG[2] / LG),
            YG = `${SG}|${kG}|${UG}`;
          let VG = yG.get(YG);
          if (!VG) {
            const GG = [0, 0, 0];
            ZG.abG([SG * LG - 1, kG * LG - 1, UG * LG - 1], null, GG), VG = Object.assign(wG(GG, LG + 2), {
              TwG: YG,
              HwG: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: rG()
            }), zG(VG), QG[VG._noaSlot] = (0, TG.g)(SG, kG, UG), KG[3 * VG._noaSlot] = SG, KG[3 * VG._noaSlot + 1] = kG, KG[3 * VG._noaSlot + 2] = UG, yG.set(YG, VG)
          }
          VG.HwG++, GG.metadata[HG.y] = VG
        },
        Rl: GG => {
          const bG = GG.metadata[HG.y];
          bG && (bG.HwG--, bG.HwG <= 0 && (yG.delete(bG.TwG), dG.push(bG._noaSlot)), GG.metadata[HG.y] = null)
        },
        nwG: (GG, bG) => {
          const ZG = GG,
            wG = bG.metadata[HG.y];
          (ZG._noaSlots ??= []).push(wG._noaSlot), (ZG._noaStamps ??= []).push(0), (ZG._noaTerrain ??= []).push(0), ZG.entries.push(bG)
        },
        removeEntry: (GG, bG) => {
          const ZG = GG,
            wG = ZG.entries,
            SG = wG.indexOf(bG);
          if (SG < 0) return;
          const LG = ZG._noaSlots,
            yG = ZG._noaStamps,
            kG = ZG._noaTerrain,
            UG = wG.length - 1;
          wG[SG] = wG[UG], LG[SG] = LG[UG], yG[SG] = yG[UG], kG[SG] = kG[UG], wG.pop(), LG.pop(), yG.pop(), kG.pop()
        },
        pGG: GG => {
          for (const bG of yG.values()) {
            bG.jwG.twG(GG), bG.lwG.twG(GG);
            for (const ZG of bG.ewG) ZG.twG(GG);
            zG(bG)
          }
        }
      }
    }

    function hb(GG, bG) {
      return bG.set(GG), bG
    }

    function db(GG, bG, ZG) {
      const wG = GG[bG],
        SG = GG[bG + 1],
        LG = GG[bG + 2],
        yG = GG[bG + 3],
        kG = GG[bG + 4],
        UG = GG[bG + 5];
      for (let YG = 0; YG < 24; YG += 4) {
        const GG = ZG[YG],
          bG = ZG[YG + 1],
          VG = ZG[YG + 2];
        if (!(GG * (GG >= 0 ? yG : wG) + bG * (bG >= 0 ? kG : SG) + VG * (VG >= 0 ? UG : LG) + ZG[YG + 3] >= 0)) return !1
      }
      return !0
    }
    var Jb = ZG(38180);
    class rb {
      constructor(GG, bG) {
        var ZG = GG.Ah;
        ZG.KwG(new eG.d(ZG));
        var wG = new nG.e(UG);
        ZG.NwG = wG, wG.blocks = [];
        var SG, LG = {},
          kG = [];
        this.textPlanes = kG, this.RwG = () => SG.RwG(), this.pGG = GG => {
          VG(wG, GG), SG.pGG(GG)
        }, this.FwG = (bG, ZG, yG) => {
          if (!bG.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!bG.metadata[HG.v] && !bG.metadata[HG.r]) {
            if (!ZG) {
              var UG = wG.gwG;
              if (bG.metadata[HG.F] && !bG.parent) {
                UG = kG;
                var VG = bG.HA().xwG;
                bG.metadata[HG.H] = VG.center.length() + VG.radius, bG.WK = !0
              }
              return UG.push(bG), bG.metadata[HG.j] = UG, void(bG.metadata[HG.r] = !0)
            }
            var fG = Math.floor(yG[0] / YG),
              QG = Math.floor(yG[1] / YG),
              KG = Math.floor(yG[2] / YG),
              hG = fG + "|" + QG + "|" + KG,
              dG = LG[hG];
            if (!dG) {
              var JG = [fG * YG, QG * YG, KG * YG],
                rG = [0, 0, 0];
              GG.wf.abG(JG, null, rG), dG = pG(rG, YG), wG.blocks.push(dG), LG[hG] = dG, dG.TwG = hG
            }
            SG.FwG(bG, yG), SG.nwG(dG, bG), dG.HwG = (dG.HwG || 0) + 1, bG.metadata[HG.v] = dG, bG.metadata[HG.t] = !0, bG.WK = !0
          }
        }, this.Rl = GG => {
          if (GG.metadata) {
            GG.metadata[HG.r] && ((0, TG.m)(GG.metadata[HG.j], GG), GG.metadata[HG.r] = !1), GG.metadata[HG.j] === kG && (GG.WK = !1), GG.metadata[HG.j] = void 0, GG.metadata[HG.H] = void 0;
            var bG = GG.metadata[HG.v];
            bG && bG.entries && (GG.metadata[HG.t] && SG.removeEntry(bG, GG), bG.HwG--, bG.HwG <= 0 && (delete LG[bG.TwG], (0, TG.m)(wG.blocks, bG))), SG.Rl(GG), GG.metadata[HG.v] = null, GG.metadata[HG.t] = !1
          }
        }, this.w6 = function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (GG.metadata[HG.v]) {
            if (GG.metadata[HG.t] === bG) return;
            var ZG = GG.metadata[HG.v];
            ZG && ZG.entries && (bG ? SG.nwG(ZG, GG) : SG.removeEntry(ZG, GG)), GG.metadata[HG.t] = bG
          } else {
            if (GG.metadata[HG.r] === bG) return;
            var LG = GG.metadata[HG.j] || wG.gwG;
            bG ? LG.push(GG) : (0, TG.m)(LG, GG), GG.metadata[HG.r] = bG
          }
        };
        var UG = () => {},
          YG = bG * GG.wf.Op.sGG,
          VG = (GG, bG) => {
            GG.blocks.forEach((GG => {
              GG.jwG.twG(bG), GG.lwG.twG(bG), GG.ewG.forEach((GG => GG.twG(bG))), GG.blocks && VG(GG, bG)
            }))
          },
          pG = (GG, bG) => {
            var ZG = new yG.mK(GG[0], GG[1], GG[2]),
              wG = new yG.mK(GG[0] + bG, GG[1] + bG, GG[2] + bG);
            return new gG.b(ZG, wG, void 0, void 0, void 0, UG)
          };
        SG = Kb(ZG, wG, GG.wf, pG, ((GG, bG) => {
          for (var ZG = 0; ZG < kG.length; ZG++) {
            var wG = kG[ZG];
            wG.isEnabled(!1) && ((0, Jb.c)(wG, bG) && RG.g.prototype.push.call(GG, wG))
          }
        }))
      }
    }

    function zb(GG) {
      const {
        holderPosition: bG,
        holderRotation: ZG,
        I3: wG,
        fov: SG,
        near: LG,
        far: yG
      } = GG.model.o3, kG = GG.LSG;
      kG.position.fGG(bG[0], bG[1], bG[2]), kG.rotation.fGG(ZG[0], ZG[1], ZG[2]);
      const UG = GG.camera;
      UG.position.fGG(wG[0], wG[1], wG[2]), UG.fov = SG, UG.minZ = LG, UG.maxZ = yG
    }

    function Eb(GG) {
      const bG = GG.CK(),
        ZG = bG,
        wG = ZG._gl;
      if (!wG || ZG.Zh < 2 || bG.iwG || wG.getParameter(wG.DEPTH_BITS) < 24) return !1;
      const SG = GG._renderingManager,
        LG = SG.getRenderingGroup(-1),
        yG = SG.getRenderingGroup(0),
        kG = PG.b.prototype.render;
      return LG.render = function(GG, bG, ZG, wG, SG, LG, UG, YG, VG) {
        (GG || yG._empty) && kG.call(this, GG, bG, ZG, wG, SG, LG, UG, YG, VG)
      }, yG.render = function(GG, ZG, SG, yG) {
        let UG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          YG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          pG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          fG = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QG = arguments.length > 8 ? arguments[8] : void 0;
        GG ? kG.call(this, GG, ZG, SG, yG, UG, YG, pG, fG, QG) : (bG.setAlphaMode(VG.d.ALPHA_DISABLE), kG.call(this, null, !1, !1, yG, UG, YG, pG, !1), LG._empty || (wG.depthRange(1, 1), kG.call(LG, null, ZG, SG, yG, UG, YG, pG, fG, QG), wG.depthRange(0, 1)), kG.call(this, null, ZG, SG, yG, !1, !1, !1, fG, QG))
      }, !0
    }

    function ob(GG, bG) {
      return [bG, qG.e].map(((bG, ZG) => {
        const wG = new SG.c("light", yG.mK.FromArray(bG), GG);
        return wG.diffuse = LG.Color3.FromArray([1, 1, 1]), wG.specular = LG.Color3.FromArray([1, 1, 1]), wG.intensity = qG.d[ZG], wG
      }))
    }
    class Xb extends UG.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(GG) {
        var bG;
        this.heldTexture = GG, this.particleTexture = null !== (bG = null === GG || void 0 === GG ? void 0 : GG.mirror) && void 0 !== bG ? bG : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let GG = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        GG && (this.particleTexture = null, (0, YG.y)(this.heldTexture), this.heldTexture = null), super.dispose(GG, bG, ZG)
      }
    }
    const ub = wG.c.Zero();
    const ib = {
      gZG: function(GG, bG) {
        return new FG(GG, bG.MZG, {
          preserveDrawingBuffer: bG.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      USG: function(GG, bG) {
        ! function(GG, bG, ZG) {
          const wG = new AG.d(GG.engine);
          GG.Ah = wG, wG.detachControl(), wG.autoClear = !1, MG.b.MIN_RENDERINGGROUPS = -1;
          for (let LG = MG.b.MIN_RENDERINGGROUPS; LG <= 1; LG++) wG.setRenderingOrder(LG, PG.b.PainterSortCompare, PG.b.PainterSortCompare, PG.b.PainterSortCompare);
          wG.setRenderingAutoClearDepthStencil(0, !1), jG.c.Enabled = !1, GG.ZSG = new rb(GG, Math.round(bG.wSG)), GG.LSG = new lG.d("camHolder", wG), GG.camera = new cG.c("camera", new yG.mK(0, 0, 0), wG), GG.camera.parent = GG.LSG, zb(GG), (0, qG.i)(GG, ((GG, bG, ZG) => (0, sG.k)(bG, ZG, GG.Ah))), wG.clearColor = LG.e.FromArray(bG.clearColor), wG.ambientColor = LG.Color3.FromArray(bG.ambientColor);
          const SG = ZG(wG, bG.kSG);
          wG.onNewLightAddedObservable.add((GG => {
            SG.some((bG => bG === GG)) || console.error(`Light "${GG.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), wG.skipPointerMovePicking = !0
        }(GG, bG, ob), Eb(GG.Ah)
      },
      SSG: zb,
      setBabylonFog: function(GG, bG, ZG, wG) {
        const SG = GG.Ah;
        SG.fogMode = 3, SG.fogStart = bG, SG.fogEnd = ZG, SG.fogColor.set(wG[0], wG[1], wG[2])
      },
      VSG: function(GG, bG, ZG) {
        return GG.engine.Zh >= 2 && (GG.pSG || (GG.pSG = new mG(GG.Ah, GG.fSG)), !GG.pSG.failed) ? GG.pSG.rM(bG, ZG) : new Xb(bG, ZG, GG.Ah)
      },
      KSG: function(GG, bG) {
        GG.Ah.lE.forEach((ZG => {
          if (ZG instanceof CG) return void ZG.pGG(bG, GG.wf.zf);
          const wG = ZG;
          if (wG.emitter.getConnectedParticleSystems)
            for (const GG of wG._particles) GG.position.set(GG.position.x - bG[0], GG.position.y - bG[1], GG.position.z - bG[2]);
          else {
            if (!wG.worldOffset) throw new Error("Particle system has no world offset");
            wG.worldOffset.x = -GG.wf.zf[0], wG.worldOffset.y = -GG.wf.zf[1], wG.worldOffset.z = -GG.wf.zf[2]
          }
        }))
      },
      linesFromArrays: function(GG, bG, ZG) {
        const wG = new kG.e(bG, GG.Ah, null, void 0, void 0, !1);
        return (0, sG.g)(bG, ZG, GG.Ah, wG), wG
      },
      sh: Yb,
      QSG: function(GG, bG) {
        return ub.origin.oW(bG.origin), ub.direction.oW(bG.direction), ub.length = bG.length, ub.epsilon = bG.epsilon, ub.QSG(GG, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41515: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => nG,
      g: () => rG,
      i: () => tG
    });
    var wG = ZG(40644),
      SG = ZG(41519),
      LG = ZG(41574),
      yG = ZG(41527),
      kG = ZG(38218),
      UG = ZG(38234),
      YG = ZG(38238),
      VG = ZG(38243),
      pG = ZG(37559),
      fG = ZG(37567),
      QG = ZG(41531),
      KG = ZG(37547),
      hG = ZG(37550),
      dG = ZG(37532);

    function JG(GG, bG) {
      return Object.assign((function(GG, ZG, wG, SG) {
        return bG(this.featureState, GG, ZG, wG, SG)
      }), {
        BQ: GG
      })
    }

    function rG(GG) {
      const bG = class extends QG.b {
          constructor(bG, ZG) {
            const wG = (0, hG.eb)(bG),
              SG = wG && (0, hG.z)(wG, GG.name);
            for (var LG = arguments.length, yG = new Array(LG > 2 ? LG - 2 : 0), kG = 2; kG < LG; kG++) yG[kG - 2] = arguments[kG];
            super(bG, GG.name, GG.priority, SG ? SG.defines : GG.defines(...yG), !1), this.featureState = void 0, this.featureState = ZG, this._pluginManager._addPlugin(this), this._enable(!0), (0, hG.B)(this._material, GG, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return GG.className
          }
          isCompatible(GG) {
            return GG === dG.c.GLSL || GG === dG.c.WGSL
          }
        },
        ZG = (0, KG.j)(GG);
      for (const [wG, SG] of Object.entries(KG.e)) {
        const LG = GG[wG];
        if (LG) {
          const GG = ZG[wG];
          Object.defineProperty(bG.prototype, SG, {
            value: JG(LG, GG),
            writable: !0,
            configurable: !0
          })
        }
      }
      return bG
    }
    class zG extends(rG(kG.c)) {}
    var EG = ZG(40197),
      oG = ZG(41539),
      XG = ZG(41544);

    function uG(GG, bG, ZG) {
      return (0, XG.g)(ZG, bG.urls, (() => async function(GG, bG, ZG) {
        const {
          width: wG
        } = GG[0].getSize(), SG = GG.map(((GG, ZG) => {
          var SG;
          const LG = Math.round(GG.getSize().height / wG),
            yG = null === bG || void 0 === bG ? void 0 : bG[ZG];
          return {
            pixels: yG && yG.byteLength === wG * wG * LG * 4 ? yG : null !== (SG = iG.get(GG.getInternalTexture())) && void 0 !== SG ? SG : GG._readPixelsSync(),
            layers: LG
          }
        })), LG = ZG.CK().getCaps().texture2DArrayMaxLayerCount, kG = (0, XG.c)(SG, wG, LG).map((GG => {
          let {
            pixels: bG,
            layers: SG
          } = GG;
          return {
            atlas: new oG.b(bG, wG, wG, SG, EG.b.TEXTUREFORMAT_RGBA, ZG, !0, !1, yG.d.NEAREST_NEAREST_MIPLINEAR),
            layers: SG
          }
        }));
        return GG.forEach(((GG, bG) => {
          const wG = GG.getInternalTexture();
          iG.has(wG) || (! function(GG, bG) {
            const ZG = bG.createRawTexture(new Uint8Array(4), 1, 1, EG.b.TEXTUREFORMAT_RGBA, !1, !1, yG.d.NEAREST_SAMPLINGMODE);
            GG._hardwareTexture.release(), bG.unbindAllTextures(), ZG._swapAndDie(GG, !1)
          }(wG, ZG.CK()), iG.set(wG, SG[bG].pixels))
        })), kG
      }(GG, bG.pixels, ZG)))
    }
    const iG = new WeakMap;
    var CG = ZG(38248);
    class WG extends(rG(UG.i)) {
      constructor(GG, bG) {
        super(GG, bG), this.loaded = new Set, this.mirrors = void 0, this.mirrors = bG.textures.map((GG => GG.mirror)), this.mirrors.forEach(((GG, bG) => {
          GG.onLoadObservable.add((GG => {
            this.setTextureArrayData(GG, bG).catch((GG => {
              console.error(`Failed to build the texture arrays, at atlas ${bG}`, GG)
            }))
          }))
        })), (0, CG.k)(bG, GG.shaderLanguage)
      }
      async setTextureArrayData(GG, bG) {
        const ZG = this.featureState,
          {
            width: wG,
            height: SG
          } = GG.getSize(),
          LG = this._material.shaderLanguage;
        if (!ZG.useWebGL2) return void(0, CG.f)(this._material, ZG, bG, wG, Math.round(SG / wG), LG);
        if (this.loaded.add(bG), this.loaded.size < this.mirrors.length) return;
        const yG = await uG(this.mirrors, ZG.sources, this._material.Dv());
        (0, CG.c)(this._material, ZG, yG, wG, LG)
      }
    }
    var mG = ZG(41552),
      IG = ZG(40681),
      FG = ZG(37432),
      vG = ZG(41560),
      aG = ZG(40795),
      cG = ZG(40673),
      lG = ZG(41498),
      jG = ZG(37962),
      PG = ZG(41565);
    class MG extends mG.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const AG = {
      Mesh: vG.d,
      TransformNode: lG.d,
      VK: mG.b,
      VertexBuffer: mG.c,
      BoundingInfo: IG.c,
      mK: FG.mK,
      ArenaBuffer: MG,
      SubMesh: cG.c,
      VertexData: aG.e,
      MirroredGeometry: PG.e,
      meshFromArrays: PG.g,
      plainMeshFromArrays: PG.k
    };
    (0, jG.d)(AG);
    var sG = ZG(37788);
    class qG extends(rG(VG.l)) {
      constructor(GG, bG) {
        if (super(GG, bG), GG instanceof wG.StandardMaterial && bG.dirLightCount > 0) {
          const bG = GG,
            ZG = bG._blockDirtyMechanism;
          bG._blockDirtyMechanism = !0, GG.disableLighting = !0, bG._blockDirtyMechanism = ZG;
          const wG = (0, hG.eb)(GG);
          wG && (wG.disableLighting = !0, (0, hG.cb)(wG))
        }(0, sG.h)(GG)
      }
      dispose(GG) {
        (0, sG.k)(this._material), super.dispose(GG)
      }
    }

    function nG(GG, bG) {
      if (!(bG instanceof wG.StandardMaterial) || bG.specularTexture) return;
      const {
        r: ZG,
        g: SG,
        b: LG
      } = bG.specularColor;
      0 === ZG && 0 === SG && 0 === LG && (GG.SPECULARTERM = !1)
    }(0, VG.h)({
      disableUnusedSpecularTerm: nG
    });
    var gG = ZG(37647),
      eG = ZG(37980);
    const RG = new RegExp(`^#define ${YG.c}\\s*$`, "m");
    class TG extends(rG(YG.f)) {
      constructor(GG, bG) {
        super(GG, bG), this.pK = !1, bG.ditherOnlyWhileFading && (eG.f.add(GG), this.prewarmDitherTwins(GG))
      }
      prewarmDitherTwins(GG) {
        const bG = new WeakSet;
        GG.onEffectCreatedObservable.add((ZG => {
          let {
            effect: wG,
            subMesh: SG
          } = ZG;
          if (this.featureState.prewarmingDither || bG.has(wG)) return;
          bG.add(wG);
          const LG = null === SG || void 0 === SG ? void 0 : SG.getMesh();
          LG && !RG.test(wG.defines) && GG.Dv().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(LG) || bG.delete(wG)
          }))
        }))
      }
      prewarmDither(GG) {
        if (this.pK || GG.Tu()) return !1;
        const bG = new cG.c(0, 0, 0, 0, 0, GG, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(GG, bG)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== bG.effect
      }
      dispose(GG) {
        this.pK = !0, super.dispose(GG)
      }
    }
    const HG = new Map;

    function tG(GG, bG) {
      HG.set(GG, bG)
    }
    tG(kG.c, zG), tG(UG.i, WG), tG(YG.f, TG), tG(VG.l, qG), (0, pG.c)({
      create: (GG, bG) => {
        const ZG = new wG.StandardMaterial(GG.name, bG);
        return (0, gG.r)(GG, ZG), ZG.detailMap._pluginDefineNames
      },
      write: (GG, bG, ZG) => {
        (0, gG.U)(GG.mirror, bG, ZG)
      },
      addFeature: (GG, bG, ZG) => {
        const wG = HG.get(bG.feature);
        if (!wG) throw new Error(`${bG.feature.name} has no plugin class (registerPluginClass)`);
        new wG(GG.mirror, bG.state, ...ZG)
      },
      texture: (GG, bG, ZG) => {
        let {
          url: wG,
          noMipmap: SG,
          invertY: LG,
          samplingMode: kG,
          data: UG,
          sets: YG
        } = ZG;
        if (!UG) {
          const ZG = new yG.d(wG, bG, SG, LG, kG);
          return Object.assign(ZG, YG), void(0, fG.G)(GG, ZG)
        }
        const VG = {},
          pG = new Promise(((GG, bG) => {
            VG.onLoad = GG, VG.onError = (GG, ZG) => {
              bG(new Error(`${UG.context}: ${(null===ZG||void 0===ZG?void 0:ZG.message)||GG||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: QG,
            bytes: KG,
            label: hG
          } = UG,
          dG = {
            noMipmap: SG,
            invertY: !1,
            samplingMode: kG,
            ...VG,
            mimeType: QG,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          JG = new yG.d(null, bG, dG);
        gG.u.set(JG, pG), Object.assign(JG, YG), JG.updateURL(wG, KG);
        const rG = JG.getInternalTexture();
        rG && (rG.label = hG), GG.uvSet = JG.coordinatesIndex, GG.matrix.set((0, gG.M)(JG)), (0, fG.G)(GG, JG)
      },
      cube: (GG, bG, ZG) => {
        let {
          rootUrl: wG,
          files: LG,
          noMipmap: kG,
          luminance: UG
        } = ZG;
        const {
          samplingMode: YG
        } = GG.sampler, VG = YG === (0, fG.x)(kG) ? null : () => {
          (0, gG.K)(pG, YG)
        }, pG = new SG.b(wG, bG, null, kG, LG, VG, null, (0, fG.v)(UG));
        pG.coordinatesMode = yG.d.SKYBOX_MODE, (0, fG.G)(GG, pG)
      },
      canvas: (GG, bG, ZG) => {
        let {
          width: wG,
          height: SG,
          mipmaps: kG,
          samplingMode: UG,
          hasAlpha: YG = !1,
          wrap: VG = yG.d.CLAMP_ADDRESSMODE
        } = ZG;
        const pG = new LG.b(bG, {
          width: wG,
          height: SG
        }, GG, kG, UG);
        pG.hasAlpha = YG, pG.wrapU = VG, pG.wrapV = VG;
        const fG = (0, gG.B)(pG);
        return (0, gG.E)(fG, pG), fG
      }
    })
  },
  41565: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => VG,
      g: () => pG,
      k: () => fG
    });
    var wG = ZG(41552),
      SG = ZG(40447),
      LG = ZG(40681),
      yG = ZG(40797),
      kG = ZG(41560),
      UG = ZG(40795),
      YG = ZG(37845);
    class VG extends yG.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (GG, bG) => {
          this.releaseUnlessInstanced(bG)
        }, this.onLinked = null
      }
      link(GG) {
        var bG;
        (0, YG.n)(GG), this.model = GG, null === (bG = this.onLinked) || void 0 === bG || bG.call(this, GG)
      }
      relink() {
        this.release();
        const GG = [];
        for (const SG of Object.values(this._vertexBuffers))
          if (!SG.getIsInstanced()) {
            const {
              byteOffset: bG,
              byteStride: ZG,
              type: wG,
              normalized: LG
            } = SG;
            GG.push({
              kind: SG.getKind(),
              data: SG.getData(),
              offset: bG,
              stride: ZG,
              components: SG.getSize(),
              glType: wG,
              isNormalized: LG
            })
          } const bG = this._indices.length ? this._indices : null,
          {
            minimum: ZG,
            maximum: wG
          } = this.extend;
        this.link(new YG.f(GG, bG, this.getTotalVertices(), new Float64Array(ZG.mwG()), new Float64Array(wG.mwG())))
      }
      copy(GG) {
        if (!this.model) return super.copy(GG);
        const bG = new VG(GG, this.Dv()),
          ZG = this.IwG(void 0, !0);
        ZG && bG.setIndices(ZG);
        let yG = !1;
        for (const LG in this._vertexBuffers) {
          const GG = this._vertexBuffers[LG],
            ZG = GG.getData();
          if (!ZG) continue;
          const kG = GG.getSize(),
            {
              type: UG,
              byteOffset: YG,
              byteStride: VG,
              normalized: pG
            } = GG;
          yG ||= GG.isUpdatable();
          const fG = GG.getIsInstanced() ? (ZG instanceof Array ? 4 * ZG.length : ZG.byteLength) / VG : this.getTotalVertices(),
            QG = (0, SG.m)(ZG, kG, UG, YG, VG, fG, !0),
            KG = {
              updatable: GG.isUpdatable(),
              stride: kG,
              type: UG,
              normalized: pG,
              takeBufferOwnership: !0,
              instanced: GG.getIsInstanced()
            };
          bG.setVerticesBuffer(new wG.c(this.CK(), QG, LG, KG), fG)
        }
        return bG._updatable = yG, bG._boundingInfo = new LG.c(this.extend.minimum, this.extend.maximum), bG.relink(), bG
      }
      static mergeMeshes(GG, bG, ZG, wG, SG, LG) {
        const UG = GG[0].Dv(),
          YG = new kG.d(GG[0].name + "_merged", UG),
          pG = new VG(yG.e.RandomId(), UG, void 0, !1, YG);
        try {
          if (!kG.d.MergeMeshes(GG, bG, ZG, YG, SG, LG)) return YG.dispose(), null
        } catch (fG) {
          throw YG.dispose(), fG
        }
        return pG.relink(), YG
      }
      removeVerticesData(GG) {
        this.releaseUnlessInstanced(GG), super.removeVerticesData(GG)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(GG) {
        var bG;
        GG && null !== (bG = this.getVertexBuffer(GG)) && void 0 !== bG && bG.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, YG.v)(this.model), this.model = null)
      }
    }

    function pG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new kG.d(GG, ZG);
      const SG = (0, YG.k)(bG),
        {
          positions: LG,
          normals: pG,
          uvs: fG,
          indices: QG,
          named: KG = {}
        } = bG,
        hG = new UG.e;
      hG.positions = LG, hG.normals = null !== pG && void 0 !== pG ? pG : null, hG.uvs = null !== fG && void 0 !== fG ? fG : null, hG.indices = QG;
      const dG = new VG(yG.e.RandomId(), ZG, hG, !1, wG);
      for (const {
          kind: yG,
          components: kG
        }
        of SG.vertexAttributes) yG in KG && wG.setVerticesData(yG, KG[yG], !1, kG);
      return dG.link(SG), wG
    }

    function fG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SG = new kG.d(GG, ZG),
        {
          positions: LG,
          normals: yG,
          uvs: YG,
          indices: VG
        } = bG;
      return Object.assign(new UG.e, {
        positions: LG,
        normals: yG,
        uvs: YG,
        indices: VG
      }).applyToMesh(SG, wG), SG
    }
  },
  42043: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => dG,
      f: () => kG,
      i: () => yG,
      m: () => YG
    });
    var wG = ZG(37618),
      SG = ZG(39116),
      LG = ZG(39111);

    function yG(GG, bG, ZG, wG) {
      const SG = LG.t;
      bG.fill(0), GG.gravity.toArray(bG, SG.gravity), GG.colorDead.toArray(bG, SG.colorDead), ZG[SG.ramp] = GG.useRampGradients ? 1 : 0;
      const yG = GG.getColorGradients(),
        kG = fG(GG, yG, "colour", wG);
      ZG[SG.colorCount] = kG;
      for (let LG = 0; LG < kG; LG++) {
        var UG;
        const GG = yG[QG(yG, LG)];
        bG[SG.colorPositions + LG] = GG.gradient, GG.color1.toArray(bG, SG.color1 + 4 * LG), (null !== (UG = GG.color2) && void 0 !== UG ? UG : GG.color1).toArray(bG, SG.color2 + 4 * LG)
      }
      const YG = GG.getVelocityGradients(),
        VG = fG(GG, YG, "Sd", wG);
      ZG[SG.velocityCount] = VG;
      for (let LG = 0; LG < VG; LG++) rG(bG, SG.Sd + 4 * LG, YG[QG(YG, LG)]);
      const pG = GG.useRampGradients ? GG.getColorRemapGradients() : null,
        KG = fG(GG, pG, "colour remap", wG);
      ZG[SG.remapCount] = KG;
      for (let LG = 0; LG < KG; LG++) rG(bG, SG.remap + 4 * LG, pG[QG(pG, LG)])
    }

    function kG() {
      return {
        key: [],
        texels: new Uint8Array(4 * LG.f)
      }
    }
    const UG = [];

    function YG(GG, bG) {
      return VG(GG, UG), !JG(UG, bG.key) && (bG.key.length = 0, bG.key.push(...UG), bG.key.length > 0 && function(GG, bG) {
        for (let ZG = 0; ZG < LG.f; ZG++) SG.m.GetCurrentGradient(ZG / LG.f, GG, ((GG, bG, ZG) => {
          wG.Color3.LerpToRef(GG.color, bG.color, ZG, pG)
        })), bG[4 * ZG] = 255 * pG.r, bG[4 * ZG + 1] = 255 * pG.g, bG[4 * ZG + 2] = 255 * pG.b, bG[4 * ZG + 3] = 255
      }(GG.getRampGradients(), bG.texels), !0)
    }

    function VG(GG, bG) {
      bG.length = 0;
      const ZG = GG.useRampGradients ? GG.getRampGradients() : null;
      if (null !== ZG && void 0 !== ZG && ZG.length) {
        bG.push(ZG.length);
        for (const GG of ZG) bG.push(GG.gradient, GG.color.r, GG.color.g, GG.color.b)
      }
    }
    const pG = new wG.Color3;

    function fG(GG, bG, ZG, wG) {
      return bG ? bG.length > LG.b ? (wG(`particleStops:${ZG}`, `GPU particles use the first 2 and last ${LG.b-2} of more than ${LG.b} ${ZG} gradient stops (${GG.name})`), LG.b) : bG.length : 0
    }

    function QG(GG, bG) {
      return bG < 2 || GG.length <= LG.b ? bG : GG.length - LG.b + bG
    }
    const KG = new Float32Array(LG.m),
      hG = new Uint32Array(KG.buffer);

    function dG(GG, bG, ZG) {
      return yG(GG, KG, hG, ZG), bG && JG(hG, bG) ? null : hG.slice()
    }

    function JG(GG, bG) {
      if (GG.length !== bG.length) return !1;
      for (let ZG = 0; ZG < GG.length; ZG++)
        if (GG[ZG] !== bG[ZG]) return !1;
      return !0
    }

    function rG(GG, bG, ZG) {
      var wG;
      GG[bG] = ZG.gradient, GG[bG + 1] = ZG.factor1, GG[bG + 2] = null !== (wG = ZG.factor2) && void 0 !== wG ? wG : ZG.factor1
    }
  },
  41544: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      const wG = bG * bG * 4,
        SG = GG[0].layers,
        LG = SG * (GG.length - 1) + GG[GG.length - 1].layers,
        yG = new Uint8Array(LG * wG);
      GG.forEach(((bG, ZG) => {
        const LG = ZG + 1 < GG.length ? Math.min(bG.layers, SG) : bG.layers;
        yG.set(new Uint8Array(bG.pixels.buffer, bG.pixels.byteOffset, LG * wG), ZG * SG * wG)
      }));
      const kG = Math.max(1, Math.min(LG, ZG || LG));
      if (kG === LG) return [{
        pixels: yG,
        layers: LG
      }];
      const UG = [];
      for (let YG = 0; YG < LG; YG += kG) {
        const GG = Math.min(LG, YG + kG);
        UG.push({
          pixels: yG.slice(YG * wG, GG * wG),
          layers: GG - YG
        })
      }
      return UG
    }
    ZG.d(bG, {
      c: () => wG,
      g: () => LG
    });
    const SG = new WeakMap;

    function LG(GG, bG, ZG) {
      var wG, LG;
      const yG = null !== (wG = SG.get(GG)) && void 0 !== wG ? wG : new Map;
      SG.set(GG, yG);
      const kG = null !== (LG = yG.get(bG[0])) && void 0 !== LG ? LG : [];
      yG.set(bG[0], kG);
      const UG = kG.find((GG => GG.urls.length === bG.length && GG.urls.every(((GG, ZG) => GG === bG[ZG]))));
      if (UG) return UG.built;
      const YG = {
        urls: [...bG],
        built: ZG()
      };
      return kG.push(YG), YG.built.catch((() => {
        kG.splice(kG.indexOf(YG), 1)
      })), YG.built
    }
  },
  42035: (GG, bG, ZG) => {
    function wG() {
      let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const bG = new Set;
      return (ZG, wG) => {
        bG.has(ZG) || (bG.add(ZG), console.warn(GG + wG))
      }
    }
    ZG.d(bG, {
      e: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);