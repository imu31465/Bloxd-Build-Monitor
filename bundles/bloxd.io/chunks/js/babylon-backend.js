export const id = 0;
export const ids = [0];
export const modules = {
  41038: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CapeMaterialPlugin: () => OD,
      HueTintMaterialPlugin: () => JD,
      LifeformMaterialPlugin: () => ED,
      OverlayMaterialPlugin: () => QD
    });
    var pD = wD(41042),
      sD = wD(37984);
    class KD extends((0, pD.h)(sD.e)) {}(0, pD.j)(sD.e, KD);
    var rD = wD(37178);
    class LD extends((0, pD.h)(rD.f)) {}(0, pD.j)(rD.f, LD);
    var cD = wD(37832);
    class gD extends((0, pD.h)(cD.i)) {}(0, pD.j)(cD.i, gD);
    var RD = wD(37422),
      AD = wD(40192),
      UD = wD(37414);
    class fD extends((0, pD.h)(UD.f)) {
      constructor(DD, zD, wD) {
        super(DD, zD, wD), (0, RD.l)(DD)
      }
      dispose(DD) {
        (0, RD.o)(this._material), super.dispose(DD)
      }
    }(0, pD.j)(UD.f, fD), (0, UD.i)({
      disableUnusedSpecularTerm: pD.d,
      isLightingDisabled: DD => DD instanceof AD.StandardMaterial && DD.disableLighting
    });
    var ID = wD(38667);
    class BD extends((0, pD.h)(ID.f)) {}(0, pD.j)(ID.f, BD);
    var GD = wD(38763),
      hD = wD(37280),
      nD = wD(38111),
      MD = wD(37223);
    class OD extends((0, pD.h)(GD.e)) {}(0, pD.j)(GD.e, OD);
    class JD extends((0, pD.h)(hD.d)) {}(0, pD.j)(hD.d, JD);
    class ED extends((0, pD.h)(nD.n)) {}(0, pD.j)(nD.n, ED);
    class QD extends((0, pD.h)(MD.e)) {}(0, pD.j)(MD.e, QD)
  },
  41447: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      addBabylonLights: () => Jz,
      default: () => Xz
    });
    var pD = wD(41451),
      sD = (wD(39905), wD(41035), wD(40408), wD(41465)),
      KD = wD(37267),
      rD = wD(37070),
      LD = wD(41475),
      cD = wD(41482),
      gD = wD(37217),
      RD = (wD(41042), wD(41491)),
      AD = wD(41485),
      UD = wD(38695),
      fD = wD(41496),
      ID = wD(39776),
      BD = wD(38684);
    const GD = "gpuParticles",
      hD = BD.q,
      nD = DD => DD / 4,
      MD = DD => `gpuParticleSystem[${DD>>2}].${"xyzw"[3&DD]}`,
      OD = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${BD.b}\n#define COLOR_POSITIONS ${nD(hD.colorPositions)}\n#define COLOR1 ${nD(hD.color1)}\n#define COLOR2 ${nD(hD.color2)}\n#define VELOCITY ${nD(hD.UG)}\n#define REMAP ${nD(hD.remap)}\n#define RECORDS_PER_ROW ${BD.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${BD.n/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${MD(hD.gravity)}, ${MD(hD.gravity+1)}, ${MD(hD.gravity+2)}); }\nint colorCount() { return int(${MD(hD.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${nD(hD.colorDead)}]; }\nint velocityCount() { return int(${MD(hD.velocityCount)}); }\nint remapCount() { return int(${MD(hD.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    ID.e.ShadersStore[`${GD}VertexShader`] = OD, ID.e.ShadersStore[`${GD}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const JD = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      ED = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var QD = wD(38678),
      XD = wD(41502);
    class VD extends QD.e {
      constructor(DD, zD, wD, pD) {
        super(DD, zD, wD), this.renderer = wD, this.oB = pD, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(BD.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, XD.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (DD, zD) => {
          const {
            engine: wD
          } = this, pD = wD._gl;
          wD._bindTextureDirectly(pD.TEXTURE_2D, this.records, !0), wD._unpackFlipY(!1);
          const sD = this.ring.recordBits;
          for (let KD = DD; KD < zD;) {
            const DD = Math.floor(KD / BD.l),
              wD = Math.min(zD, (DD + 1) * BD.l);
            pD.texSubImage2D(pD.TEXTURE_2D, 0, KD % BD.l * 4, DD, 4 * (wD - KD), 1, pD.RGBA_INTEGER, pD.UNSIGNED_INT, sD, KD * BD.f), KD = wD
          }
          wD._bindTextureDirectly(pD.TEXTURE_2D, null)
        }, this.id = DD;
        const sD = pD.iI();
        this.engine = sD;
        const KD = Math.max(1, zD),
          rD = Math.min(KD, BD.l);
        this.records = sD.createRawTexture(null, 4 * rD, Math.ceil(KD / rD), RD.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, RD.d.TEXTURE_NEAREST_SAMPLINGMODE, null, RD.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.oB.getAnimationRatio() || 1;
        const zD = this.oB.getFrameId();
        if (zD === this.animatedFrame) return !1;
        const wD = super.animate(DD);
        return wD && (this.animatedFrame = zD, this.ring.takeUploads(this.uploadSlots)), wD
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(DD) {
        (0, XD.j)(this, this.uniforms, this.uniformBits, DD);
        for (const wD of BD.p) this.uniforms[wD] = this.uniformBits[wD];
        var zD;
        (0, XD.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zD = this.ramp) || void 0 === zD || zD.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = AD.d.CreateRGBATexture(this.rampTexels.texels, BD.h, 1, this.oB, !1, !1, RD.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var DD;
        this.records.dispose(), null === (DD = this.ramp) || void 0 === DD || DD.dispose(), this.ramp = null
      }
    }
    const PD = "the context was lost before the programs linked";
    class CD {
      constructor(DD, zD) {
        this.oB = DD, this.reportFailure = zD, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, fD.c)(), this.engine = DD.iI(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = AD.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, DD, !1, !1, RD.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      EW(DD, zD) {
        const wD = BD.l * this.engine.getCaps().maxTextureSize;
        zD > wD && this.warnOnce(`capacity:${DD}`, `particle system ${DD} holds ${wD} particles, not ${zD}: its records texture's limit`);
        const pD = new VD(DD, Math.min(zD, wD), this, this.oB);
        return this.oB.addParticleSystem(pD), pD
      }
      canDraw(DD) {
        var zD, wD;
        if (this.failed || null === (zD = DD.texture) || void 0 === zD || null === (wD = zD.mirror) || void 0 === wD || !wD.isReady()) return !1;
        for (const pD of (0, UD.k)(DD.blendMode))
          if (!this.effectFor(pD).isReady()) return !1;
        return !0
      }
      disposeStopped(DD) {
        this.oB._toBeDisposed.push(DD)
      }
      remove(DD) {
        this.oB.removeParticleSystem(DD), DD.releaseGl()
      }
      render(DD) {
        var zD;
        if (!DD.isReady() || !DD.hasLiveParticles()) return 0;
        const {
          engine: wD,
          oB: pD,
          frame: sD
        } = this;
        DD.prepareDraw(this.warnOnce), DD.drawOffset(sD, 0), sD[3] = DD.drawTime();
        const KD = DD.ring.drawStart(),
          rD = DD.ring.drawCount(),
          LD = null !== (zD = DD.ramp) && void 0 !== zD ? zD : this.whiteRamp;
        wD.setState(!1);
        for (const cD of (0, UD.k)(DD.blendMode)) {
          const zD = this.effectFor(cD);
          wD.enableEffect(zD), zD.setTexture("gpuParticleTexture", DD.texture.mirror), zD.setTexture("gpuParticleRampTexture", LD), zD._bindTexture("gpuParticleRecords", DD.records), zD.setMatrix("gpuParticleView", pD.getViewMatrix()), zD.setMatrix("gpuParticleProjection", pD.getProjectionMatrix()), zD.setFloatArray4("gpuParticleSystem", DD.uniforms), zD.setFloat4("gpuParticleFrame", sD[0], sD[1], sD[2], sD[3]), zD.setFloat2("gpuParticleRange", KD, rD), zD.setFloat("gpuParticleRamp", DD.uniforms[BD.q.ramp]), wD.bindBuffers(this.vertexBuffers, null, zD), wD.setAlphaMode((0, UD.h)(cD)), wD.drawArraysType(RD.d.MATERIAL_TriangleStripDrawMode, 0, 4, rD), zD._bindTexture("gpuParticleRecords", null)
        }
        return wD.setAlphaMode(RD.d.ALPHA_DISABLE), rD
      }
      awaitLink(DD) {
        const zD = DD.getPipelineContext(),
          wD = this.gl();
        !this.failed && wD && (!zD || zD.isParallelCompiled && !zD.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : zD.isParallelCompiled && zD.program && (wD.getProgramParameter(zD.program, wD.LINK_STATUS) || this.fail(function(DD, zD, wD) {
          if (DD.isContextLost()) return PD;
          for (const [pD, sD] of [
              ["VERTEX SHADER", zD.vertexShader],
              ["FRAGMENT SHADER", zD.fragmentShader]
            ]) {
            const zD = sD && !DD.getShaderParameter(sD, DD.COMPILE_STATUS) ? DD.getShaderInfoLog(sD) : null;
            if (zD) return `${pD} ${zD}`
          }
          return DD.getProgramInfoLog(wD) || "a program did not link"
        }(wD, zD, zD.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(DD) {
        return DD === UD.e ? this.multiplyEffect : this.effect
      }
      createEffect(DD) {
        return this.engine.createEffect(GD, [], JD, ED, DD, void 0, void 0, ((DD, zD) => {
          var wD;
          this.fail(null !== (wD = this.gl()) && void 0 !== wD && wD.isContextLost() ? PD : function(DD) {
            const zD = DD.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(zD) ? "a program failed, its log not in this browser's stack" : zD.replace(/^Error: /, "")
          }(zD))
        }))
      }
      fail(DD) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${DD}`), this.reportFailure(DD);
          for (const DD of this.oB.XE.slice()) DD instanceof VD && DD.disposeOnStop && DD.dispose()
        }
      }
    }
    var xD = wD(39744);
    class TD extends xD.b {
      createEffect() {
        const DD = super.createEffect(...arguments);
        return jD(DD), bD.has(DD) || (bD.add(DD), DD.onCompileObservable.add((() => {
          jD(DD)
        }))), DD
      }
    }
    const bD = new WeakSet;

    function jD(DD) {
      DD._vertexSourceCodeBeforeMigration = "", DD._fragmentSourceCodeBeforeMigration = ""
    }
    var dD = wD(40137),
      SD = wD(41027),
      iD = wD(39872),
      lD = wD(40090),
      WD = wD(40084),
      ND = wD(40015),
      ZD = wD(41075),
      yD = wD(37594),
      kD = wD(41504),
      mD = wD(41506),
      eD = wD(41514),
      oD = wD(40043),
      aD = wD(2851),
      uD = wD(37486),
      vD = wD(40239),
      tD = wD(37558),
      FD = wD(37504);

    function YD(DD) {
      if (DD.visibility < 1 || !DD.isVisible || !DD.isEnabled() || DD.metadata[FD.h] || !DD.isReady()) return !0;
      const zD = DD.QE;
      if (!zD || 0 === zD.length) return !0;
      for (let wD = 0; wD < zD.length; wD++) {
        const pD = zD[wD],
          sD = pD.yI();
        if (!sD || !sD.isReadyForSubMesh(DD, pD, !1)) return !0
      }
      return !1
    }
    class HD {
      constructor(DD, zD) {
        this.AU = DD, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zD.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Jf(DD) {
        var zD;
        const wD = this.armed;
        if (this.armed = !1, this.vis = null, !wD) return !1;
        this.culled = 0;
        const {
          AU: pD
        } = this, sD = null === (zD = pD.qJ) || void 0 === zD ? void 0 : zD.visibility;
        if (!sD || !DD || pD.wB.pB) return !1;
        if (!(pD.KU.dpD[0] >= tD.h)) return !1;
        const KD = DD.getProjectionMatrix().m;
        if (0 !== KD[15]) return !1;
        const rD = pD.CU,
          LD = DD.globalPosition,
          cD = this.eye;
        return cD[0] = LD.x + rD[0], cD[1] = LD.y + rD[1], cD[2] = LD.z + rD[2], !!sD.eyeClear(cD[0], cD[1], cD[2], DD.minZ, KD, pD.KU) && (this.vis = sD, this.passable.clear(), this.count = 0, !0)
      }
      see(DD, zD) {
        const wD = this.count++;
        if (wD === this.cellSlots.length) {
          const DD = new Int32Array(2 * wD);
          DD.set(this.cellSlots), this.cellSlots = DD
        }
        this.cellSlots[wD] = zD, this.meshes[wD] = DD
      }
      seeThrough(DD) {
        this.passable.add(DD)
      }
      finish(DD, zD) {
        const {
          vis: wD,
          eye: pD,
          meshes: sD,
          count: KD,
          cellSlots: rD
        } = this, {
          KU: LD
        } = this.AU, [cD, gD] = LD.dpD, RD = null !== wD && wD.update(pD[0], pD[1], pD[2], LD.PDD, cD, gD, this.passable);
        let AD = 0;
        for (let UD = 0; UD < KD; UD++) {
          const pD = sD[UD];
          if (RD) {
            const DD = 3 * rD[UD];
            if (DD >= 0 && !wD.isDrawn(zD[DD], zD[DD + 1], zD[DD + 2])) {
              AD++;
              continue
            }
          }
          oD.f.prototype.push.call(DD, pD)
        }
        sD.fill(null, 0, KD), this.count = 0, this.vis = null, this.culled = AD
      }
    }
    var qD = wD(37543),
      Dz = wD(37497),
      zz = wD(40220),
      wz = wD(41522),
      pz = wD(40224),
      sz = wD(40155);
    let Kz = 1;
    const rz = new WeakSet;

    function Lz() {
      return Kz
    }

    function cz() {
      Kz = Kz >= 1073741823 ? 1 : Kz + 1
    }

    function gz(DD) {
      const zD = DD.metadata;
      if (!zD || !0 !== zD[uD.k]) return;
      const wD = zD[uD.p],
        pD = null === wD || void 0 === wD ? void 0 : wD._noaStamps;
      if (!wD || !pD) return;
      const sD = wD.entries.indexOf(DD);
      sD >= 0 && (pD[sD] = 0)
    }

    function Rz(DD) {
      const zD = DD.QE;
      for (let wD = 0; wD < zD.length; wD++) {
        const DD = zD[wD].yI();
        if (DD && !DD.isFrozen) return !1
      }
      for (let wD = 0; wD < zD.length; wD++) {
        const DD = zD[wD].yI();
        DD && rz.add(DD)
      }
      return !0
    }
    let Az = !1;
    const Uz = new WeakSet;

    function fz(DD, zD) {
      const wD = DD[zD];
      if ("function" !== typeof wD) throw new Error(`terrainDrawState: Babylon has no ${zD} to hook`);
      return wD
    }

    function Iz(DD, zD, wD, pD, sD) {
      const KD = wD.KU.PDD,
        rD = new Map;
      let LD = 0;
      const cD = new HD(wD, DD),
        gD = new qD.c(KD, DD.iI());
      ! function(DD) {
        if (Uz.has(DD) || (Uz.add(DD), DD.onContextLostObservable.add(cz), DD.SI.add(cz)), Az) return;
        Az = !0;
        const zD = wz.e.prototype,
          wD = fz(zD, "_markSubMeshesAsDirty");
        Object.assign(zD, {
          _markSubMeshesAsDirty(DD) {
            wD.call(this, DD), gz(this)
          }
        });
        const pD = fz(sz.b.prototype, "_syncParentEnabledState");
        Object.assign(sz.b.prototype, {
          _syncParentEnabledState() {
            pD.call(this), gz(this)
          }
        });
        const sD = fz(pz.b.prototype, "resetDrawCache");
        pz.b.prototype.resetDrawCache = function(DD, zD) {
          sD.call(this, DD, zD), gz(this.getMesh())
        };
        const KD = zz.b.prototype,
          rD = fz(KD, "markDirty");
        KD.markDirty = function(DD) {
          rD.call(this, DD), rz.has(this) && cz()
        };
        const LD = fz(KD, "_markAllSubMeshesAsDirty");
        Object.assign(KD, {
          _markAllSubMeshesAsDirty(DD) {
            LD.call(this, DD), rz.has(this) && cz()
          }
        })
      }(DD.iI());
      let RD = new Float64Array(384),
        AD = new Int32Array(64),
        UD = new Uint8Array(64),
        fD = new Float64Array(64),
        ID = new Int32Array(192),
        BD = 0;
      const GD = [],
        hD = new Float64Array(24),
        nD = () => {
          const DD = GD.pop();
          return void 0 !== DD ? (AD[DD] = 0, DD) : (BD === AD.length && (RD = Bz(RD, new Float64Array(2 * RD.length)), AD = Bz(AD, new Int32Array(2 * AD.length)), UD = Bz(UD, new Uint8Array(2 * UD.length)), fD = Bz(fD, new Float64Array(2 * fD.length)), ID = Bz(ID, new Int32Array(2 * ID.length))), BD++)
        },
        MD = DD => {
          const zD = 6 * DD._noaSlot,
            wD = DD.kpD[0],
            pD = DD.kpD[1];
          RD[zD] = wD.x, RD[zD + 1] = wD.y, RD[zD + 2] = wD.z, RD[zD + 3] = pD.x, RD[zD + 4] = pD.y, RD[zD + 5] = pD.z
        },
        OD = (DD, zD, wD) => {
          if (!wD) return cD.see(DD, -1), !1;
          const pD = YD(DD);
          return pD && cD.seeThrough(fD[zD]), cD.see(DD, zD), !pD
        };
      let JD = -1;
      return DD.getActiveMeshCandidates = () => {
        const wD = DD.frustumPlanes,
          pD = zD._selectionContent;
        pD.reset(), (wD => {
          const pD = DD.frustumPlanes;
          LD = LD + 1 | 0 || 1;
          const sD = zD.blocks,
            KD = cD.Jf(DD.activeCamera),
            rD = KD && !0;
          if (rD) {
            const zD = DD.iI().currentRenderPassId;
            zD !== JD && (JD = zD, cz())
          }
          const gD = Lz(),
            fD = rD && !1;
          sD.length > 0 && function(DD, zD) {
            for (let wD = 0; wD < 6; wD++) {
              const pD = DD[wD],
                sD = pD.normal;
              zD[4 * wD] = sD.x, zD[4 * wD + 1] = sD.y, zD[4 * wD + 2] = sD.z, zD[4 * wD + 3] = pD.d
            }
          }(pD, hD);
          const BD = RD,
            GD = AD,
            nD = UD;
          for (let DD = 0; DD < sD.length; DD++) {
            const zD = sD[DD];
            if (!vD.b.IsInFrustum(zD.kpD, pD)) continue;
            const RD = zD.entries;
            {
              const DD = zD._noaSlots,
                pD = zD._noaStamps,
                sD = zD._noaTerrain;
              for (let zD = 0; zD < RD.length; zD++) {
                const AD = DD[zD];
                if (GD[AD] !== LD && (GD[AD] = LD, nD[AD] = Gz(BD, 6 * AD, hD) ? 1 : 0), 0 === nD[AD]) continue;
                const UD = RD[zD];
                if (rD && pD[zD] === gD) fD && 1 === sD[zD] && YD(UD) && 0, cD.see(UD, 1 === sD[zD] ? AD : -1);
                else if (rD) {
                  pD[zD] = gD;
                  const DD = !0 === UD.metadata[Dz.k];
                  sD[zD] = DD ? 1 : 0;
                  const wD = OD(UD, AD, DD);
                  !DD || wD && Rz(UD) || (pD[zD] = 0)
                } else KD ? OD(UD, AD, !0 === UD.metadata[Dz.k]) : oD.f.prototype.push.call(wD, UD)
              }
              continue
            }
          }
          KD && cD.finish(wD, ID)
        })(pD), gD.apply(pD, DD.activeCamera);
        const KD = zD.ypD;
        for (let DD = 0; DD < KD.length; DD++) {
          const zD = KD[DD];
          zD.isEnabled() && oD.f.prototype.push.call(pD, zD)
        }
        return sD(pD, wD), pD
      }, {
        mpD: () => cD.culled,
        VpD: (DD, zD) => {
          const sD = Math.floor(zD[0] / KD),
            LD = Math.floor(zD[1] / KD),
            cD = Math.floor(zD[2] / KD),
            gD = `${sD}|${LD}|${cD}`;
          let RD = rD.get(gD);
          if (!RD) {
            const DD = [0, 0, 0];
            wD.JzD([sD * KD - 1, LD * KD - 1, cD * KD - 1], null, DD), RD = Object.assign(pD(DD, KD + 2), {
              epD: gD,
              opD: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: nD()
            }), MD(RD), fD[RD._noaSlot] = (0, aD.h)(sD, LD, cD), ID[3 * RD._noaSlot] = sD, ID[3 * RD._noaSlot + 1] = LD, ID[3 * RD._noaSlot + 2] = cD, rD.set(gD, RD)
          }
          RD.opD++, DD.metadata[uD.r] = RD
        },
        zW: DD => {
          const zD = DD.metadata[uD.r];
          zD && (zD.opD--, zD.opD <= 0 && (rD.delete(zD.epD), GD.push(zD._noaSlot)), DD.metadata[uD.r] = null)
        },
        ZpD: (DD, zD) => {
          const wD = DD,
            pD = zD.metadata[uD.r];
          (wD._noaSlots ??= []).push(pD._noaSlot), (wD._noaStamps ??= []).push(0), (wD._noaTerrain ??= []).push(0), wD.entries.push(zD)
        },
        removeEntry: (DD, zD) => {
          const wD = DD,
            pD = wD.entries,
            sD = pD.indexOf(zD);
          if (sD < 0) return;
          const KD = wD._noaSlots,
            rD = wD._noaStamps,
            LD = wD._noaTerrain,
            cD = pD.length - 1;
          pD[sD] = pD[cD], KD[sD] = KD[cD], rD[sD] = rD[cD], LD[sD] = LD[cD], pD.pop(), KD.pop(), rD.pop(), LD.pop()
        },
        Z6: DD => {
          for (const zD of rD.values()) {
            zD.jpD.apD(DD), zD.bpD.apD(DD);
            for (const wD of zD.kpD) wD.apD(DD);
            MD(zD)
          }
        }
      }
    }

    function Bz(DD, zD) {
      return zD.set(DD), zD
    }

    function Gz(DD, zD, wD) {
      const pD = DD[zD],
        sD = DD[zD + 1],
        KD = DD[zD + 2],
        rD = DD[zD + 3],
        LD = DD[zD + 4],
        cD = DD[zD + 5];
      for (let gD = 0; gD < 24; gD += 4) {
        const DD = wD[gD],
          zD = wD[gD + 1],
          RD = wD[gD + 2];
        if (!(DD * (DD >= 0 ? rD : pD) + zD * (zD >= 0 ? LD : sD) + RD * (RD >= 0 ? cD : KD) + wD[gD + 3] >= 0)) return !1
      }
      return !0
    }
    var hz = wD(37760);
    class nz {
      constructor(DD, zD) {
        var wD = DD.oB;
        wD.ApD(new eD.c(wD));
        var pD = new kD.d(cD);
        wD.vpD = pD, pD.blocks = [];
        var sD, KD = {},
          LD = [];
        this.textPlanes = LD, this.mpD = () => sD.mpD(), this.Z6 = DD => {
          RD(pD, DD), sD.Z6(DD)
        }, this.VpD = (zD, wD, rD) => {
          if (!zD.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!zD.metadata[uD.p] && !zD.metadata[uD.j]) {
            if (!wD) {
              var cD = pD.ypD;
              if (zD.metadata[uD.x] && !zD.parent) {
                cD = LD;
                var RD = zD.FW().FpD;
                zD.metadata[uD.z] = RD.center.length() + RD.radius, zD.lI = !0
              }
              return cD.push(zD), zD.metadata[uD.g] = cD, void(zD.metadata[uD.j] = !0)
            }
            var UD = Math.floor(rD[0] / gD),
              fD = Math.floor(rD[1] / gD),
              ID = Math.floor(rD[2] / gD),
              BD = UD + "|" + fD + "|" + ID,
              GD = KD[BD];
            if (!GD) {
              var hD = [UD * gD, fD * gD, ID * gD],
                nD = [0, 0, 0];
              DD.AU.JzD(hD, null, nD), GD = AD(nD, gD), pD.blocks.push(GD), KD[BD] = GD, GD.epD = BD
            }
            sD.VpD(zD, rD), sD.ZpD(GD, zD), GD.opD = (GD.opD || 0) + 1, zD.metadata[uD.p] = GD, zD.metadata[uD.k] = !0, zD.lI = !0
          }
        }, this.zW = DD => {
          if (DD.metadata) {
            DD.metadata[uD.j] && ((0, aD.l)(DD.metadata[uD.g], DD), DD.metadata[uD.j] = !1), DD.metadata[uD.g] === LD && (DD.lI = !1), DD.metadata[uD.g] = void 0, DD.metadata[uD.z] = void 0;
            var zD = DD.metadata[uD.p];
            zD && zD.entries && (DD.metadata[uD.k] && sD.removeEntry(zD, DD), zD.opD--, zD.opD <= 0 && (delete KD[zD.epD], (0, aD.l)(pD.blocks, zD))), sD.zW(DD), DD.metadata[uD.p] = null, DD.metadata[uD.k] = !1
          }
        }, this.W4 = function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (DD.metadata[uD.p]) {
            if (DD.metadata[uD.k] === zD) return;
            var wD = DD.metadata[uD.p];
            wD && wD.entries && (zD ? sD.ZpD(wD, DD) : sD.removeEntry(wD, DD)), DD.metadata[uD.k] = zD
          } else {
            if (DD.metadata[uD.j] === zD) return;
            var KD = DD.metadata[uD.g] || pD.ypD;
            zD ? KD.push(DD) : (0, aD.l)(KD, DD), DD.metadata[uD.j] = zD
          }
        };
        var cD = () => {},
          gD = zD * DD.AU.KU.PDD,
          RD = (DD, zD) => {
            DD.blocks.forEach((DD => {
              DD.jpD.apD(zD), DD.bpD.apD(zD), DD.kpD.forEach((DD => DD.apD(zD))), DD.blocks && RD(DD, zD)
            }))
          },
          AD = (DD, zD) => {
            var wD = new rD.WI(DD[0], DD[1], DD[2]),
              pD = new rD.WI(DD[0] + zD, DD[1] + zD, DD[2] + zD);
            return new mD.d(wD, pD, void 0, void 0, void 0, cD)
          };
        sD = Iz(wD, pD, DD.AU, AD, ((DD, zD) => {
          for (var wD = 0; wD < LD.length; wD++) {
            var pD = LD[wD];
            pD.isEnabled(!1) && ((0, hz.e)(pD, zD) && oD.f.prototype.push.call(DD, pD))
          }
        }))
      }
    }

    function Mz(DD) {
      const {
        holderPosition: zD,
        holderRotation: wD,
        Jq: pD,
        fov: sD,
        near: KD,
        far: rD
      } = DD.model.Mq, LD = DD.psD;
      LD.position.Z2(zD[0], zD[1], zD[2]), LD.rotation.Z2(wD[0], wD[1], wD[2]);
      const cD = DD.camera;
      cD.position.Z2(pD[0], pD[1], pD[2]), cD.fov = sD, cD.minZ = KD, cD.maxZ = rD
    }

    function Oz(DD) {
      const zD = DD.iI(),
        wD = zD,
        pD = wD._gl;
      if (!pD || wD.AB < 2 || zD.OpD || pD.getParameter(pD.DEPTH_BITS) < 24) return !1;
      const sD = DD._renderingManager,
        KD = sD.getRenderingGroup(-1),
        rD = sD.getRenderingGroup(0),
        LD = lD.b.prototype.render;
      return KD.render = function(DD, zD, wD, pD, sD, KD, cD, gD, RD) {
        (DD || rD._empty) && LD.call(this, DD, zD, wD, pD, sD, KD, cD, gD, RD)
      }, rD.render = function(DD, wD, sD, rD) {
        let cD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          UD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fD = arguments.length > 8 ? arguments[8] : void 0;
        DD ? LD.call(this, DD, wD, sD, rD, cD, gD, AD, UD, fD) : (zD.setAlphaMode(RD.d.ALPHA_DISABLE), LD.call(this, null, !1, !1, rD, cD, gD, AD, !1), KD._empty || (pD.depthRange(1, 1), LD.call(KD, null, wD, sD, rD, cD, gD, AD, UD, fD), pD.depthRange(0, 1)), LD.call(this, null, wD, sD, rD, !1, !1, !1, UD, fD))
      }, !0
    }

    function Jz(DD, zD) {
      return [zD, yD.h].map(((zD, wD) => {
        const pD = new sD.d("light", rD.WI.FromArray(zD), DD);
        return pD.diffuse = KD.Color3.FromArray([1, 1, 1]), pD.specular = KD.Color3.FromArray([1, 1, 1]), pD.intensity = yD.d[wD], pD
      }))
    }
    class Ez extends cD.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(DD) {
        var zD;
        this.heldTexture = DD, this.particleTexture = null !== (zD = null === DD || void 0 === DD ? void 0 : DD.mirror) && void 0 !== zD ? zD : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        DD && (this.particleTexture = null, (0, gD.L)(this.heldTexture), this.heldTexture = null), super.dispose(DD, zD, wD)
      }
    }
    const Qz = pD.e.Zero();
    const Xz = {
      ZwD: function(DD, zD) {
        return new TD(DD, zD.iwD, {
          preserveDrawingBuffer: zD.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      rsD: function(DD, zD) {
        ! function(DD, zD, wD) {
          const pD = new ND.b(DD.engine);
          DD.oB = pD, pD.detachControl(), pD.autoClear = !1, WD.d.MIN_RENDERINGGROUPS = -1;
          for (let KD = WD.d.MIN_RENDERINGGROUPS; KD <= 1; KD++) pD.setRenderingOrder(KD, lD.b.PainterSortCompare, lD.b.PainterSortCompare, lD.b.PainterSortCompare);
          pD.setRenderingAutoClearDepthStencil(0, !1), iD.e.Enabled = !1, DD.DsD = new nz(DD, Math.round(zD.zsD)), DD.psD = new SD.e("camHolder", pD), DD.camera = new dD.c("camera", new rD.WI(0, 0, 0), pD), DD.camera.parent = DD.psD, Mz(DD), (0, yD.i)(DD, ((DD, zD, wD) => (0, ZD.h)(zD, wD, DD.oB))), pD.clearColor = KD.e.FromArray(zD.clearColor), pD.ambientColor = KD.Color3.FromArray(zD.ambientColor);
          const sD = wD(pD, zD.KsD);
          pD.onNewLightAddedObservable.add((DD => {
            sD.some((zD => zD === DD)) || console.error(`Light "${DD.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), pD.skipPointerMovePicking = !0
        }(DD, zD, Jz), Oz(DD.oB)
      },
      wsD: Mz,
      setBabylonFog: function(DD, zD, wD, pD) {
        const sD = DD.oB;
        sD.fogMode = 3, sD.fogStart = zD, sD.fogEnd = wD, sD.fogColor.set(pD[0], pD[1], pD[2])
      },
      csD: function(DD, zD, wD) {
        return DD.engine.AB >= 2 && (DD.gsD || (DD.gsD = new CD(DD.oB, DD.RsD)), !DD.gsD.failed) ? DD.gsD.EW(zD, wD) : new Ez(zD, wD, DD.oB)
      },
      UsD: function(DD, zD) {
        DD.oB.XE.forEach((wD => {
          if (wD instanceof VD) return void wD.Z6(zD, DD.AU.CU);
          const pD = wD;
          if (pD.emitter.getConnectedParticleSystems)
            for (const DD of pD._particles) DD.position.set(DD.position.x - zD[0], DD.position.y - zD[1], DD.position.z - zD[2]);
          else {
            if (!pD.worldOffset) throw new Error("Particle system has no world offset");
            pD.worldOffset.x = -DD.AU.CU[0], pD.worldOffset.y = -DD.AU.CU[1], pD.worldOffset.z = -DD.AU.CU[2]
          }
        }))
      },
      linesFromArrays: function(DD, zD, wD) {
        const pD = new LD.c(zD, DD.oB, null, void 0, void 0, !1);
        return (0, ZD.e)(zD, wD, DD.oB, pD), pD
      },
      aB: gz,
      AsD: function(DD, zD) {
        return Qz.origin.pC(zD.origin), Qz.direction.pC(zD.direction), Qz.length = zD.length, Qz.epsilon = zD.epsilon, Qz.AsD(DD, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41042: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => kD,
      h: () => nD,
      j: () => vD
    });
    var pD = wD(40192),
      sD = wD(41044),
      KD = wD(41084),
      rD = wD(41049),
      LD = wD(37805),
      cD = wD(37816),
      gD = wD(37820),
      RD = wD(37824),
      AD = wD(37210),
      UD = wD(37217),
      fD = wD(41055),
      ID = wD(37201),
      BD = wD(37206),
      GD = wD(37186);

    function hD(DD, zD) {
      return Object.assign((function(DD, wD, pD, sD) {
        return zD(this.featureState, DD, wD, pD, sD)
      }), {
        LI: DD
      })
    }

    function nD(DD) {
      const zD = class extends fD.e {
          constructor(zD, wD) {
            const pD = (0, BD.db)(zD),
              sD = pD && (0, BD.y)(pD, DD.name);
            for (var KD = arguments.length, rD = new Array(KD > 2 ? KD - 2 : 0), LD = 2; LD < KD; LD++) rD[LD - 2] = arguments[LD];
            super(zD, DD.name, DD.priority, sD ? sD.defines : DD.defines(...rD), !1), this.featureState = void 0, this.featureState = wD, this._pluginManager._addPlugin(this), this._enable(!0), (0, BD.B)(this._material, DD, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return DD.className
          }
          isCompatible(DD) {
            return DD === GD.c.GLSL || DD === GD.c.WGSL
          }
        },
        wD = (0, ID.j)(DD);
      for (const [pD, sD] of Object.entries(ID.b)) {
        const KD = DD[pD];
        if (KD) {
          const DD = wD[pD];
          Object.defineProperty(zD.prototype, sD, {
            value: hD(KD, DD),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zD
    }
    class MD extends(nD(LD.d)) {}
    var OD = wD(39744),
      JD = wD(41064);
    const ED = new WeakMap;

    function QD(DD, zD, wD) {
      let pD = ED.get(wD);
      pD || (pD = new Map, ED.set(wD, pD));
      const {
        url: sD
      } = DD;
      let KD = pD.get(sD);
      return KD || (KD = async function(DD, zD, wD) {
        var pD;
        const {
          width: sD,
          height: KD
        } = DD.getSize(), LD = Math.round(KD / sD), cD = DD.getInternalTexture(), gD = zD && zD.byteLength === sD * sD * LD * 4 ? zD : null !== (pD = XD.get(cD)) && void 0 !== pD ? pD : DD._readPixelsSync(), RD = new JD.b(gD, sD, sD, LD, OD.b.TEXTUREFORMAT_RGBA, wD, !0, !1, rD.b.NEAREST_NEAREST_MIPLINEAR);
        XD.has(cD) || (! function(DD, zD) {
          const wD = zD.createRawTexture(new Uint8Array(4), 1, 1, OD.b.TEXTUREFORMAT_RGBA, !1, !1, rD.b.NEAREST_SAMPLINGMODE);
          DD._hardwareTexture.release(), zD.unbindAllTextures(), wD._swapAndDie(DD, !1)
        }(cD, wD.iI()), XD.set(cD, gD));
        return RD
      }(DD, zD, wD), pD.set(sD, KD), KD.catch((() => {
        pD.delete(sD)
      }))), KD
    }
    const XD = new WeakMap;
    var VD = wD(37827);
    class PD extends(nD(cD.j)) {
      constructor(DD, zD) {
        super(DD, zD), zD.textures.forEach(((DD, zD) => {
          DD.mirror.onLoadObservable.add((DD => {
            this.setTextureArrayData(DD, zD).catch((DD => {
              console.error(`Failed to build texture array for atlas ${zD}`, DD)
            }))
          }))
        })), (0, VD.g)(zD, DD.shaderLanguage)
      }
      async setTextureArrayData(DD, zD) {
        var wD, pD;
        const sD = this.featureState,
          {
            width: KD,
            height: rD
          } = DD.getSize(),
          LD = sD.useWebGL2 ? await QD(DD, null !== (wD = null === (pD = sD.sources.pixels) || void 0 === pD ? void 0 : pD[zD]) && void 0 !== wD ? wD : null, this._material.Ul()) : null;
        (0, VD.b)(this._material, sD, zD, LD, KD, Math.round(rD / KD), this._material.shaderLanguage)
      }
    }
    var CD = wD(41066),
      xD = wD(40234),
      TD = wD(37070),
      bD = wD(41069),
      jD = wD(40348),
      dD = wD(40224),
      SD = wD(41027),
      iD = wD(37577),
      lD = wD(41075);
    class WD extends CD.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ND = {
      Mesh: bD.e,
      TransformNode: SD.e,
      nI: CD.b,
      VertexBuffer: CD.f,
      BoundingInfo: xD.b,
      WI: TD.WI,
      ArenaBuffer: WD,
      SubMesh: dD.b,
      VertexData: jD.b,
      MirroredGeometry: lD.d,
      meshFromArrays: lD.e,
      plainMeshFromArrays: lD.h
    };
    (0, iD.f)(ND);
    var ZD = wD(37422);
    class yD extends(nD(RD.g)) {
      constructor(DD, zD) {
        if (super(DD, zD), DD instanceof pD.StandardMaterial && zD.dirLightCount > 0) {
          const zD = DD,
            wD = zD._blockDirtyMechanism;
          zD._blockDirtyMechanism = !0, DD.disableLighting = !0, zD._blockDirtyMechanism = wD;
          const pD = (0, BD.db)(DD);
          pD && (pD.disableLighting = !0, (0, BD.ab)(pD))
        }(0, ZD.l)(DD)
      }
      dispose(DD) {
        (0, ZD.o)(this._material), super.dispose(DD)
      }
    }

    function kD(DD, zD) {
      if (!(zD instanceof pD.StandardMaterial) || zD.specularTexture) return;
      const {
        r: wD,
        g: sD,
        b: KD
      } = zD.specularColor;
      0 === wD && 0 === sD && 0 === KD && (DD.SPECULARTERM = !1)
    }(0, RD.e)({
      disableUnusedSpecularTerm: kD
    });
    var mD = wD(37304),
      eD = wD(37584);
    const oD = new RegExp(`^#define ${gD.c}\\s*$`, "m");
    class aD extends(nD(gD.i)) {
      constructor(DD, zD) {
        super(DD, zD), this.MI = !1, zD.ditherOnlyWhileFading && (eD.c.add(DD), this.prewarmDitherTwins(DD))
      }
      prewarmDitherTwins(DD) {
        const zD = new WeakSet;
        DD.onEffectCreatedObservable.add((wD => {
          let {
            effect: pD,
            subMesh: sD
          } = wD;
          if (this.featureState.prewarmingDither || zD.has(pD)) return;
          zD.add(pD);
          const KD = null === sD || void 0 === sD ? void 0 : sD.getMesh();
          KD && !oD.test(pD.defines) && DD.Ul().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(KD) || zD.delete(pD)
          }))
        }))
      }
      prewarmDither(DD) {
        if (this.MI || DD.EX()) return !1;
        const zD = new dD.b(0, 0, 0, 0, 0, DD, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(DD, zD)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zD.effect
      }
      dispose(DD) {
        this.MI = !0, super.dispose(DD)
      }
    }
    const uD = new Map;

    function vD(DD, zD) {
      uD.set(DD, zD)
    }
    vD(LD.d, MD), vD(cD.j, PD), vD(gD.i, aD), vD(RD.g, yD), (0, AD.d)({
      create: (DD, zD) => {
        const wD = new pD.StandardMaterial(DD.name, zD);
        return (0, mD.r)(DD, wD), wD.detailMap._pluginDefineNames
      },
      write: (DD, zD, wD) => {
        (0, mD.V)(DD.mirror, zD, wD)
      },
      addFeature: (DD, zD, wD) => {
        const pD = uD.get(zD.feature);
        if (!pD) throw new Error(`${zD.feature.name} has no plugin class (registerPluginClass)`);
        new pD(DD.mirror, zD.state, ...wD)
      },
      texture: (DD, zD, wD) => {
        let {
          url: pD,
          noMipmap: sD,
          invertY: KD,
          samplingMode: LD,
          data: cD,
          sets: gD
        } = wD;
        if (!cD) {
          const wD = new rD.b(pD, zD, sD, KD, LD);
          return Object.assign(wD, gD), void(0, UD.U)(DD, wD)
        }
        const RD = {},
          AD = new Promise(((DD, zD) => {
            RD.onLoad = DD, RD.onError = (DD, wD) => {
              zD(new Error(`${cD.context}: ${(null===wD||void 0===wD?void 0:wD.message)||DD||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: fD,
            bytes: ID,
            label: BD
          } = cD,
          GD = {
            noMipmap: sD,
            invertY: !1,
            samplingMode: LD,
            ...RD,
            mimeType: fD,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          hD = new rD.b(null, zD, GD);
        mD.t.set(hD, AD), Object.assign(hD, gD), hD.updateURL(pD, ID);
        const nD = hD.getInternalTexture();
        nD && (nD.label = BD), DD.uvSet = hD.coordinatesIndex, DD.matrix.set((0, mD.N)(hD)), (0, UD.U)(DD, hD)
      },
      cube: (DD, zD, wD) => {
        let {
          rootUrl: pD,
          files: KD,
          noMipmap: LD,
          luminance: cD
        } = wD;
        const {
          samplingMode: gD
        } = DD.sampler, RD = gD === (0, UD.H)(LD) ? null : () => {
          (0, mD.L)(AD, gD)
        }, AD = new sD.e(pD, zD, null, LD, KD, RD, null, (0, UD.D)(cD));
        AD.coordinatesMode = rD.b.SKYBOX_MODE, (0, UD.U)(DD, AD)
      },
      canvas: (DD, zD, wD) => {
        let {
          width: pD,
          height: sD,
          mipmaps: LD,
          samplingMode: cD,
          hasAlpha: gD = !1,
          wrap: RD = rD.b.CLAMP_ADDRESSMODE
        } = wD;
        const AD = new KD.e(zD, {
          width: pD,
          height: sD
        }, DD, LD, cD);
        AD.hasAlpha = gD, AD.wrapU = RD, AD.wrapV = RD;
        const UD = (0, mD.A)(AD);
        return (0, mD.E)(UD, AD), UD
      }
    })
  },
  41075: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      e: () => AD,
      h: () => UD
    });
    var pD = wD(41066),
      sD = wD(39984),
      KD = wD(40234),
      rD = wD(40354),
      LD = wD(41069),
      cD = wD(40348),
      gD = wD(37471);
    class RD extends rD.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (DD, zD) => {
          this.releaseUnlessInstanced(zD)
        }, this.onLinked = null
      }
      link(DD) {
        var zD;
        (0, gD.l)(DD), this.model = DD, null === (zD = this.onLinked) || void 0 === zD || zD.call(this, DD)
      }
      relink() {
        this.release();
        const DD = [];
        for (const sD of Object.values(this._vertexBuffers))
          if (!sD.getIsInstanced()) {
            const {
              byteOffset: zD,
              byteStride: wD,
              type: pD,
              normalized: KD
            } = sD;
            DD.push({
              kind: sD.getKind(),
              data: sD.getData(),
              offset: zD,
              stride: wD,
              components: sD.getSize(),
              glType: pD,
              isNormalized: KD
            })
          } const zD = this._indices.length ? this._indices : null,
          {
            minimum: wD,
            maximum: pD
          } = this.extend;
        this.link(new gD.g(DD, zD, this.getTotalVertices(), new Float64Array(wD.QpD()), new Float64Array(pD.QpD())))
      }
      copy(DD) {
        if (!this.model) return super.copy(DD);
        const zD = new RD(DD, this.Ul()),
          wD = this.XpD(void 0, !0);
        wD && zD.setIndices(wD);
        let rD = !1;
        for (const KD in this._vertexBuffers) {
          const DD = this._vertexBuffers[KD],
            wD = DD.getData();
          if (!wD) continue;
          const LD = DD.getSize(),
            {
              type: cD,
              byteOffset: gD,
              byteStride: RD,
              normalized: AD
            } = DD;
          rD ||= DD.isUpdatable();
          const UD = DD.getIsInstanced() ? (wD instanceof Array ? 4 * wD.length : wD.byteLength) / RD : this.getTotalVertices(),
            fD = (0, sD.r)(wD, LD, cD, gD, RD, UD, !0),
            ID = {
              updatable: DD.isUpdatable(),
              stride: LD,
              type: cD,
              normalized: AD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            };
          zD.setVerticesBuffer(new pD.f(this.iI(), fD, KD, ID), UD)
        }
        return zD._updatable = rD, zD._boundingInfo = new KD.b(this.extend.minimum, this.extend.maximum), zD.relink(), zD
      }
      static mergeMeshes(DD, zD, wD, pD, sD, KD) {
        const cD = DD[0].Ul(),
          gD = new LD.e(DD[0].name + "_merged", cD),
          AD = new RD(rD.e.RandomId(), cD, void 0, !1, gD);
        try {
          if (!LD.e.MergeMeshes(DD, zD, wD, gD, sD, KD)) return gD.dispose(), null
        } catch (UD) {
          throw gD.dispose(), UD
        }
        return AD.relink(), gD
      }
      removeVerticesData(DD) {
        this.releaseUnlessInstanced(DD), super.removeVerticesData(DD)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(DD) {
        var zD;
        DD && null !== (zD = this.getVertexBuffer(DD)) && void 0 !== zD && zD.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, gD.t)(this.model), this.model = null)
      }
    }

    function AD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LD.e(DD, wD);
      const sD = (0, gD.k)(zD),
        {
          positions: KD,
          normals: AD,
          uvs: UD,
          indices: fD,
          named: ID = {}
        } = zD,
        BD = new cD.b;
      BD.positions = KD, BD.normals = null !== AD && void 0 !== AD ? AD : null, BD.uvs = null !== UD && void 0 !== UD ? UD : null, BD.indices = fD;
      const GD = new RD(rD.e.RandomId(), wD, BD, !1, pD);
      for (const {
          kind: rD,
          components: LD
        }
        of sD.vertexAttributes) rD in ID && pD.setVerticesData(rD, ID[rD], !1, LD);
      return GD.link(sD), pD
    }

    function UD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const sD = new LD.e(DD, wD),
        {
          positions: KD,
          normals: rD,
          uvs: gD,
          indices: RD
        } = zD;
      return Object.assign(new cD.b, {
        positions: KD,
        normals: rD,
        uvs: gD,
        indices: RD
      }).applyToMesh(sD, pD), sD
    }
  },
  41502: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => GD,
      f: () => LD,
      j: () => rD,
      m: () => gD
    });
    var pD = wD(37267),
      sD = wD(38689),
      KD = wD(38684);

    function rD(DD, zD, wD, pD) {
      const sD = KD.q;
      zD.fill(0), DD.gravity.toArray(zD, sD.gravity), DD.colorDead.toArray(zD, sD.colorDead), wD[sD.ramp] = DD.useRampGradients ? 1 : 0;
      const rD = DD.getColorGradients(),
        LD = UD(DD, rD, "colour", pD);
      wD[sD.colorCount] = LD;
      for (let KD = 0; KD < LD; KD++) {
        var cD;
        const DD = rD[fD(rD, KD)];
        zD[sD.colorPositions + KD] = DD.gradient, DD.color1.toArray(zD, sD.color1 + 4 * KD), (null !== (cD = DD.color2) && void 0 !== cD ? cD : DD.color1).toArray(zD, sD.color2 + 4 * KD)
      }
      const gD = DD.getVelocityGradients(),
        RD = UD(DD, gD, "UG", pD);
      wD[sD.velocityCount] = RD;
      for (let KD = 0; KD < RD; KD++) nD(zD, sD.UG + 4 * KD, gD[fD(gD, KD)]);
      const AD = DD.useRampGradients ? DD.getColorRemapGradients() : null,
        ID = UD(DD, AD, "colour remap", pD);
      wD[sD.remapCount] = ID;
      for (let KD = 0; KD < ID; KD++) nD(zD, sD.remap + 4 * KD, AD[fD(AD, KD)])
    }

    function LD() {
      return {
        key: [],
        texels: new Uint8Array(4 * KD.h)
      }
    }
    const cD = [];

    function gD(DD, zD) {
      return RD(DD, cD), !hD(cD, zD.key) && (zD.key.length = 0, zD.key.push(...cD), zD.key.length > 0 && function(DD, zD) {
        for (let wD = 0; wD < KD.h; wD++) sD.l.GetCurrentGradient(wD / KD.h, DD, ((DD, zD, wD) => {
          pD.Color3.LerpToRef(DD.color, zD.color, wD, AD)
        })), zD[4 * wD] = 255 * AD.r, zD[4 * wD + 1] = 255 * AD.g, zD[4 * wD + 2] = 255 * AD.b, zD[4 * wD + 3] = 255
      }(DD.getRampGradients(), zD.texels), !0)
    }

    function RD(DD, zD) {
      zD.length = 0;
      const wD = DD.useRampGradients ? DD.getRampGradients() : null;
      if (null !== wD && void 0 !== wD && wD.length) {
        zD.push(wD.length);
        for (const DD of wD) zD.push(DD.gradient, DD.color.r, DD.color.g, DD.color.b)
      }
    }
    const AD = new pD.Color3;

    function UD(DD, zD, wD, pD) {
      return zD ? zD.length > KD.b ? (pD(`particleStops:${wD}`, `GPU particles use the first 2 and last ${KD.b-2} of more than ${KD.b} ${wD} gradient stops (${DD.name})`), KD.b) : zD.length : 0
    }

    function fD(DD, zD) {
      return zD < 2 || DD.length <= KD.b ? zD : DD.length - KD.b + zD
    }
    const ID = new Float32Array(KD.n),
      BD = new Uint32Array(ID.buffer);

    function GD(DD, zD, wD) {
      return rD(DD, ID, BD, wD), zD && hD(BD, zD) ? null : BD.slice()
    }

    function hD(DD, zD) {
      if (DD.length !== zD.length) return !1;
      for (let wD = 0; wD < DD.length; wD++)
        if (DD[wD] !== zD[wD]) return !1;
      return !0
    }

    function nD(DD, zD, wD) {
      var pD;
      DD[zD] = wD.gradient, DD[zD + 1] = wD.factor1, DD[zD + 2] = null !== (pD = wD.factor2) && void 0 !== pD ? pD : wD.factor1
    }
  },
  41496: (DD, zD, wD) => {
    function pD() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const zD = new Set;
      return (wD, pD) => {
        zD.has(wD) || (zD.add(wD), console.warn(DD + pD))
      }
    }
    wD.d(zD, {
      c: () => pD
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);