export const id = 0;
export const ids = [0];
export const modules = {
  41215: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CapeMaterialPlugin: () => gB,
      HueTintMaterialPlugin: () => tB,
      LifeformMaterialPlugin: () => SB,
      OverlayMaterialPlugin: () => MB
    });
    var QB = zB(41218),
      nB = zB(38096);
    class dB extends((0, QB.i)(nB.e)) {}(0, QB.j)(nB.e, dB);
    var IB = zB(37271);
    class NB extends((0, QB.i)(IB.f)) {}(0, QB.j)(IB.f, NB);
    var uB = zB(37936);
    class UB extends((0, QB.i)(uB.d)) {}(0, QB.j)(uB.d, UB);
    var aB = zB(37534),
      pB = zB(40350),
      rB = zB(37528);
    class sB extends((0, QB.i)(rB.d)) {
      constructor(BB, jB, zB) {
        super(BB, jB, zB), (0, aB.e)(BB)
      }
      dispose(BB) {
        (0, aB.f)(this._material), super.dispose(BB)
      }
    }(0, QB.j)(rB.d, sB), (0, rB.h)({
      disableUnusedSpecularTerm: QB.e,
      isLightingDisabled: BB => BB instanceof pB.StandardMaterial && BB.disableLighting
    });
    var JB = zB(38794);
    class mB extends((0, QB.i)(JB.h)) {}(0, QB.j)(JB.h, mB);
    var yB = zB(38906),
      kB = zB(37386),
      GB = zB(38204),
      LB = zB(37324);
    class gB extends((0, QB.i)(yB.d)) {}(0, QB.j)(yB.d, gB);
    class tB extends((0, QB.i)(kB.b)) {}(0, QB.j)(kB.b, tB);
    class SB extends((0, QB.i)(GB.k)) {}(0, QB.j)(GB.k, SB);
    class MB extends((0, QB.i)(LB.d)) {}(0, QB.j)(LB.d, MB)
  },
  41644: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      addBabylonLights: () => tj,
      default: () => Ej
    });
    var QB = zB(41651),
      nB = (zB(40051), zB(41208), zB(40584), zB(41663)),
      dB = zB(37372),
      IB = zB(37166),
      NB = zB(41674),
      uB = zB(41679),
      UB = zB(37321),
      aB = (zB(41218), zB(41686)),
      pB = zB(41682),
      rB = zB(38822),
      sB = zB(41690),
      JB = zB(39932),
      mB = zB(38802);
    const yB = "gpuParticles",
      kB = mB.w,
      GB = BB => BB / 4,
      LB = BB => `gpuParticleSystem[${BB>>2}].${"xyzw"[3&BB]}`,
      gB = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${mB.d}\n#define COLOR_POSITIONS ${GB(kB.colorPositions)}\n#define COLOR1 ${GB(kB.color1)}\n#define COLOR2 ${GB(kB.color2)}\n#define VELOCITY ${GB(kB.Hy)}\n#define REMAP ${GB(kB.remap)}\n#define RECORDS_PER_ROW ${mB.o}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${mB.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${LB(kB.gravity)}, ${LB(kB.gravity+1)}, ${LB(kB.gravity+2)}); }\nint colorCount() { return int(${LB(kB.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${GB(kB.colorDead)}]; }\nint velocityCount() { return int(${LB(kB.velocityCount)}); }\nint remapCount() { return int(${LB(kB.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    JB.e.ShadersStore[`${yB}VertexShader`] = gB, JB.e.ShadersStore[`${yB}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const tB = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      SB = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var MB = zB(38800),
      EB = zB(41693);
    class iB extends MB.c {
      constructor(BB, jB, zB, QB) {
        super(BB, jB, zB), this.renderer = zB, this.ny = QB, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(mB.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, EB.g)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (BB, jB) => {
          const {
            engine: zB
          } = this, QB = zB._gl;
          zB._bindTextureDirectly(QB.TEXTURE_2D, this.records, !0), zB._unpackFlipY(!1);
          const nB = this.ring.recordBits;
          for (let dB = BB; dB < jB;) {
            const BB = Math.floor(dB / mB.o),
              zB = Math.min(jB, (BB + 1) * mB.o);
            QB.texSubImage2D(QB.TEXTURE_2D, 0, dB % mB.o * 4, BB, 4 * (zB - dB), 1, QB.RGBA_INTEGER, QB.UNSIGNED_INT, nB, dB * mB.f), dB = zB
          }
          zB._bindTextureDirectly(QB.TEXTURE_2D, null)
        }, this.id = BB;
        const nB = QB.wJ();
        this.engine = nB;
        const dB = Math.max(1, jB),
          IB = Math.min(dB, mB.o);
        this.records = nB.createRawTexture(null, 4 * IB, Math.ceil(dB / IB), aB.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, aB.e.TEXTURE_NEAREST_SAMPLINGMODE, null, aB.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ny.getAnimationRatio() || 1;
        const jB = this.ny.getFrameId();
        if (jB === this.animatedFrame) return !1;
        const zB = super.animate(BB);
        return zB && (this.animatedFrame = jB, this.ring.takeUploads(this.uploadSlots)), zB
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(BB) {
        (0, EB.k)(this, this.uniforms, this.uniformBits, BB);
        for (const zB of mB.t) this.uniforms[zB] = this.uniformBits[zB];
        var jB;
        (0, EB.o)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (jB = this.ramp) || void 0 === jB || jB.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = pB.c.CreateRGBATexture(this.rampTexels.texels, mB.k, 1, this.ny, !1, !1, aB.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var BB;
        this.records.dispose(), null === (BB = this.ramp) || void 0 === BB || BB.dispose(), this.ramp = null
      }
    }
    const qB = "the context was lost before the programs linked";
    class fB {
      constructor(BB, jB) {
        this.ny = BB, this.reportFailure = jB, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, sB.b)(), this.engine = BB.wJ(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = pB.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, BB, !1, !1, aB.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      TY(BB, jB) {
        const zB = mB.o * this.engine.getCaps().maxTextureSize;
        jB > zB && this.warnOnce(`capacity:${BB}`, `particle system ${BB} holds ${zB} particles, not ${jB}: its records texture's limit`);
        const QB = new iB(BB, Math.min(jB, zB), this, this.ny);
        return this.ny.addParticleSystem(QB), QB
      }
      canDraw(BB) {
        var jB, zB;
        if (this.failed || null === (jB = BB.texture) || void 0 === jB || null === (zB = jB.mirror) || void 0 === zB || !zB.isReady()) return !1;
        for (const QB of (0, rB.g)(BB.blendMode))
          if (!this.effectFor(QB).isReady()) return !1;
        return !0
      }
      disposeStopped(BB) {
        this.ny._toBeDisposed.push(BB)
      }
      remove(BB) {
        this.ny.removeParticleSystem(BB), BB.releaseGl()
      }
      render(BB) {
        var jB;
        if (!BB.isReady() || !BB.hasLiveParticles()) return 0;
        const {
          engine: zB,
          ny: QB,
          frame: nB
        } = this;
        BB.prepareDraw(this.warnOnce), BB.drawOffset(nB, 0), nB[3] = BB.drawTime();
        const dB = BB.ring.drawStart(),
          IB = BB.ring.drawCount(),
          NB = null !== (jB = BB.ramp) && void 0 !== jB ? jB : this.whiteRamp;
        zB.setState(!1);
        for (const uB of (0, rB.g)(BB.blendMode)) {
          const jB = this.effectFor(uB);
          zB.enableEffect(jB), jB.setTexture("gpuParticleTexture", BB.texture.mirror), jB.setTexture("gpuParticleRampTexture", NB), jB._bindTexture("gpuParticleRecords", BB.records), jB.setMatrix("gpuParticleView", QB.getViewMatrix()), jB.setMatrix("gpuParticleProjection", QB.getProjectionMatrix()), jB.setFloatArray4("gpuParticleSystem", BB.uniforms), jB.setFloat4("gpuParticleFrame", nB[0], nB[1], nB[2], nB[3]), jB.setFloat2("gpuParticleRange", dB, IB), jB.setFloat("gpuParticleRamp", BB.uniforms[mB.w.ramp]), zB.bindBuffers(this.vertexBuffers, null, jB), zB.setAlphaMode((0, rB.f)(uB)), zB.drawArraysType(aB.e.MATERIAL_TriangleStripDrawMode, 0, 4, IB), jB._bindTexture("gpuParticleRecords", null)
        }
        return zB.setAlphaMode(aB.e.ALPHA_DISABLE), IB
      }
      awaitLink(BB) {
        const jB = BB.getPipelineContext(),
          zB = this.gl();
        !this.failed && zB && (!jB || jB.isParallelCompiled && !jB.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : jB.isParallelCompiled && jB.program && (zB.getProgramParameter(jB.program, zB.LINK_STATUS) || this.fail(function(BB, jB, zB) {
          if (BB.isContextLost()) return qB;
          for (const [QB, nB] of [
              ["VERTEX SHADER", jB.vertexShader],
              ["FRAGMENT SHADER", jB.fragmentShader]
            ]) {
            const jB = nB && !BB.getShaderParameter(nB, BB.COMPILE_STATUS) ? BB.getShaderInfoLog(nB) : null;
            if (jB) return `${QB} ${jB}`
          }
          return BB.getProgramInfoLog(zB) || "a program did not link"
        }(zB, jB, jB.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(BB) {
        return BB === rB.d ? this.multiplyEffect : this.effect
      }
      createEffect(BB) {
        return this.engine.createEffect(yB, [], tB, SB, BB, void 0, void 0, ((BB, jB) => {
          var zB;
          this.fail(null !== (zB = this.gl()) && void 0 !== zB && zB.isContextLost() ? qB : function(BB) {
            const jB = BB.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(jB) ? "a program failed, its log not in this browser's stack" : jB.replace(/^Error: /, "")
          }(jB))
        }))
      }
      fail(BB) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${BB}`), this.reportFailure(BB);
          for (const BB of this.ny.RL.slice()) BB instanceof iB && BB.disposeOnStop && BB.dispose()
        }
      }
    }
    var oB = zB(39895);
    class HB extends oB.b {
      createEffect() {
        const BB = super.createEffect(...arguments);
        return FB(BB), DB.has(BB) || (DB.add(BB), BB.onCompileObservable.add((() => {
          FB(BB)
        }))), BB
      }
    }
    const DB = new WeakSet;

    function FB(BB) {
      BB._vertexSourceCodeBeforeMigration = "", BB._fragmentSourceCodeBeforeMigration = ""
    }
    var YB = zB(40287),
      VB = zB(41200),
      hB = zB(40034),
      XB = zB(40238),
      ZB = zB(40232),
      AB = zB(40154),
      TB = zB(41260),
      PB = zB(37711),
      WB = zB(41701),
      eB = zB(41709),
      lB = zB(41714),
      wB = zB(40171),
      xB = zB(2956),
      KB = zB(37586),
      CB = zB(40412),
      cB = zB(37666),
      bB = zB(37606);

    function vB(BB) {
      if (BB.visibility < 1 || !BB.isVisible || !BB.isEnabled() || BB.metadata[bB.f] || !BB.isReady()) return !0;
      const jB = BB.cL;
      if (!jB || 0 === jB.length) return !0;
      for (let zB = 0; zB < jB.length; zB++) {
        const QB = jB[zB],
          nB = QB.bJ();
        if (!nB || !nB.isReadyForSubMesh(BB, QB, !1)) return !0
      }
      return !1
    }
    class RB {
      constructor(BB, jB) {
        this.ur = BB, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, jB.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Ds(BB) {
        var jB;
        const zB = this.armed;
        if (this.armed = !1, this.vis = null, !zB) return !1;
        this.culled = 0;
        const {
          ur: QB
        } = this, nB = null === (jB = QB.fL) || void 0 === jB ? void 0 : jB.visibility;
        if (!nB || !BB || QB.pm.rm) return !1;
        if (!(QB.zr.rQB[0] >= cB.i)) return !1;
        const dB = BB.getProjectionMatrix().m;
        if (0 !== dB[15]) return !1;
        const IB = QB.qr,
          NB = BB.globalPosition,
          uB = this.eye;
        return uB[0] = NB.x + IB[0], uB[1] = NB.y + IB[1], uB[2] = NB.z + IB[2], !!nB.eyeClear(uB[0], uB[1], uB[2], BB.minZ, dB, QB.zr) && (this.vis = nB, this.passable.clear(), this.count = 0, !0)
      }
      see(BB, jB) {
        const zB = this.count++;
        if (zB === this.cellSlots.length) {
          const BB = new Int32Array(2 * zB);
          BB.set(this.cellSlots), this.cellSlots = BB
        }
        this.cellSlots[zB] = jB, this.meshes[zB] = BB
      }
      seeThrough(BB) {
        this.passable.add(BB)
      }
      finish(BB, jB) {
        const {
          vis: zB,
          eye: QB,
          meshes: nB,
          count: dB,
          cellSlots: IB
        } = this, {
          zr: NB
        } = this.ur, [uB, UB] = NB.rQB, aB = null !== zB && zB.update(QB[0], QB[1], QB[2], NB.aBB, uB, UB, this.passable);
        let pB = 0;
        for (let rB = 0; rB < dB; rB++) {
          const QB = nB[rB];
          if (aB) {
            const BB = 3 * IB[rB];
            if (BB >= 0 && !zB.isDrawn(jB[BB], jB[BB + 1], jB[BB + 2])) {
              pB++;
              continue
            }
          }
          wB.i.prototype.push.call(BB, QB)
        }
        nB.fill(null, 0, dB), this.count = 0, this.vis = null, this.culled = pB
      }
    }
    var OB = zB(37647),
      Bj = zB(37597),
      jj = zB(40380),
      zj = zB(41718),
      Qj = zB(40388),
      nj = zB(40306);
    let dj = 1;
    const Ij = new WeakSet;

    function Nj() {
      return dj
    }

    function uj() {
      dj = dj >= 1073741823 ? 1 : dj + 1
    }

    function Uj(BB) {
      const jB = BB.metadata;
      if (!jB || !0 !== jB[KB.j]) return;
      const zB = jB[KB.o],
        QB = null === zB || void 0 === zB ? void 0 : zB._noaStamps;
      if (!zB || !QB) return;
      const nB = zB.entries.indexOf(BB);
      nB >= 0 && (QB[nB] = 0)
    }

    function aj(BB) {
      const jB = BB.cL;
      for (let zB = 0; zB < jB.length; zB++) {
        const BB = jB[zB].bJ();
        if (BB && !BB.isFrozen) return !1
      }
      for (let zB = 0; zB < jB.length; zB++) {
        const BB = jB[zB].bJ();
        BB && Ij.add(BB)
      }
      return !0
    }
    let pj = !1;
    const rj = new WeakSet;

    function sj(BB, jB) {
      const zB = BB[jB];
      if ("function" !== typeof zB) throw new Error(`terrainDrawState: Babylon has no ${jB} to hook`);
      return zB
    }

    function Jj(BB, jB, zB, QB, nB) {
      const dB = zB.zr.aBB,
        IB = new Map;
      let NB = 0;
      const uB = new RB(zB, BB),
        UB = new OB.b(dB, BB.wJ());
      ! function(BB) {
        if (rj.has(BB) || (rj.add(BB), BB.onContextLostObservable.add(uj), BB.lJ.add(uj)), pj) return;
        pj = !0;
        const jB = zj.e.prototype,
          zB = sj(jB, "_markSubMeshesAsDirty");
        Object.assign(jB, {
          _markSubMeshesAsDirty(BB) {
            zB.call(this, BB), Uj(this)
          }
        });
        const QB = sj(nj.c.prototype, "_syncParentEnabledState");
        Object.assign(nj.c.prototype, {
          _syncParentEnabledState() {
            QB.call(this), Uj(this)
          }
        });
        const nB = sj(Qj.d.prototype, "resetDrawCache");
        Qj.d.prototype.resetDrawCache = function(BB, jB) {
          nB.call(this, BB, jB), Uj(this.getMesh())
        };
        const dB = jj.b.prototype,
          IB = sj(dB, "markDirty");
        dB.markDirty = function(BB) {
          IB.call(this, BB), Ij.has(this) && uj()
        };
        const NB = sj(dB, "_markAllSubMeshesAsDirty");
        Object.assign(dB, {
          _markAllSubMeshesAsDirty(BB) {
            NB.call(this, BB), Ij.has(this) && uj()
          }
        })
      }(BB.wJ());
      let aB = new Float64Array(384),
        pB = new Int32Array(64),
        rB = new Uint8Array(64),
        sB = new Float64Array(64),
        JB = new Int32Array(192),
        mB = 0;
      const yB = [],
        kB = new Float64Array(24),
        GB = () => {
          const BB = yB.pop();
          return void 0 !== BB ? (pB[BB] = 0, BB) : (mB === pB.length && (aB = mj(aB, new Float64Array(2 * aB.length)), pB = mj(pB, new Int32Array(2 * pB.length)), rB = mj(rB, new Uint8Array(2 * rB.length)), sB = mj(sB, new Float64Array(2 * sB.length)), JB = mj(JB, new Int32Array(2 * JB.length))), mB++)
        },
        LB = BB => {
          const jB = 6 * BB._noaSlot,
            zB = BB.LQB[0],
            QB = BB.LQB[1];
          aB[jB] = zB.x, aB[jB + 1] = zB.y, aB[jB + 2] = zB.z, aB[jB + 3] = QB.x, aB[jB + 4] = QB.y, aB[jB + 5] = QB.z
        },
        gB = (BB, jB, zB) => {
          if (!zB) return uB.see(BB, -1), !1;
          const QB = vB(BB);
          return QB && uB.seeThrough(sB[jB]), uB.see(BB, jB), !QB
        };
      let tB = -1;
      return BB.getActiveMeshCandidates = () => {
        const zB = BB.frustumPlanes,
          QB = jB._selectionContent;
        QB.reset(), (zB => {
          const QB = BB.frustumPlanes;
          NB = NB + 1 | 0 || 1;
          const nB = jB.blocks,
            dB = uB.Ds(BB.activeCamera),
            IB = dB && !0;
          if (IB) {
            const jB = BB.wJ().currentRenderPassId;
            jB !== tB && (tB = jB, uj())
          }
          const UB = Nj(),
            sB = IB && !1;
          nB.length > 0 && function(BB, jB) {
            for (let zB = 0; zB < 6; zB++) {
              const QB = BB[zB],
                nB = QB.normal;
              jB[4 * zB] = nB.x, jB[4 * zB + 1] = nB.y, jB[4 * zB + 2] = nB.z, jB[4 * zB + 3] = QB.d
            }
          }(QB, kB);
          const mB = aB,
            yB = pB,
            GB = rB;
          for (let BB = 0; BB < nB.length; BB++) {
            const jB = nB[BB];
            if (!CB.e.IsInFrustum(jB.LQB, QB)) continue;
            const aB = jB.entries;
            {
              const BB = jB._noaSlots,
                QB = jB._noaStamps,
                nB = jB._noaTerrain;
              for (let jB = 0; jB < aB.length; jB++) {
                const pB = BB[jB];
                if (yB[pB] !== NB && (yB[pB] = NB, GB[pB] = yj(mB, 6 * pB, kB) ? 1 : 0), 0 === GB[pB]) continue;
                const rB = aB[jB];
                if (IB && QB[jB] === UB) sB && 1 === nB[jB] && vB(rB) && 0, uB.see(rB, 1 === nB[jB] ? pB : -1);
                else if (IB) {
                  QB[jB] = UB;
                  const BB = !0 === rB.metadata[Bj.n];
                  nB[jB] = BB ? 1 : 0;
                  const zB = gB(rB, pB, BB);
                  !BB || zB && aj(rB) || (QB[jB] = 0)
                } else dB ? gB(rB, pB, !0 === rB.metadata[Bj.n]) : wB.i.prototype.push.call(zB, rB)
              }
              continue
            }
          }
          dB && uB.finish(zB, JB)
        })(QB), UB.apply(QB, BB.activeCamera);
        const dB = jB.GQB;
        for (let BB = 0; BB < dB.length; BB++) {
          const jB = dB[BB];
          jB.isEnabled() && wB.i.prototype.push.call(QB, jB)
        }
        return nB(QB, zB), QB
      }, {
        gQB: () => uB.culled,
        IQB: (BB, jB) => {
          const nB = Math.floor(jB[0] / dB),
            NB = Math.floor(jB[1] / dB),
            uB = Math.floor(jB[2] / dB),
            UB = `${nB}|${NB}|${uB}`;
          let aB = IB.get(UB);
          if (!aB) {
            const BB = [0, 0, 0];
            zB.IjB([nB * dB - 1, NB * dB - 1, uB * dB - 1], null, BB), aB = Object.assign(QB(BB, dB + 2), {
              tQB: UB,
              SQB: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: GB()
            }), LB(aB), sB[aB._noaSlot] = (0, xB.i)(nB, NB, uB), JB[3 * aB._noaSlot] = nB, JB[3 * aB._noaSlot + 1] = NB, JB[3 * aB._noaSlot + 2] = uB, IB.set(UB, aB)
          }
          aB.SQB++, BB.metadata[KB.q] = aB
        },
        qY: BB => {
          const jB = BB.metadata[KB.q];
          jB && (jB.SQB--, jB.SQB <= 0 && (IB.delete(jB.tQB), yB.push(jB._noaSlot)), BB.metadata[KB.q] = null)
        },
        kQB: (BB, jB) => {
          const zB = BB,
            QB = jB.metadata[KB.q];
          (zB._noaSlots ??= []).push(QB._noaSlot), (zB._noaStamps ??= []).push(0), (zB._noaTerrain ??= []).push(0), zB.entries.push(jB)
        },
        removeEntry: (BB, jB) => {
          const zB = BB,
            QB = zB.entries,
            nB = QB.indexOf(jB);
          if (nB < 0) return;
          const dB = zB._noaSlots,
            IB = zB._noaStamps,
            NB = zB._noaTerrain,
            uB = QB.length - 1;
          QB[nB] = QB[uB], dB[nB] = dB[uB], IB[nB] = IB[uB], NB[nB] = NB[uB], QB.pop(), dB.pop(), IB.pop(), NB.pop()
        },
        I3: BB => {
          for (const jB of IB.values()) {
            jB.pQB.MQB(BB), jB.aQB.MQB(BB);
            for (const zB of jB.LQB) zB.MQB(BB);
            LB(jB)
          }
        }
      }
    }

    function mj(BB, jB) {
      return jB.set(BB), jB
    }

    function yj(BB, jB, zB) {
      const QB = BB[jB],
        nB = BB[jB + 1],
        dB = BB[jB + 2],
        IB = BB[jB + 3],
        NB = BB[jB + 4],
        uB = BB[jB + 5];
      for (let UB = 0; UB < 24; UB += 4) {
        const BB = zB[UB],
          jB = zB[UB + 1],
          aB = zB[UB + 2];
        if (!(BB * (BB >= 0 ? IB : QB) + jB * (jB >= 0 ? NB : nB) + aB * (aB >= 0 ? uB : dB) + zB[UB + 3] >= 0)) return !1
      }
      return !0
    }
    var kj = zB(37871);
    class Gj {
      constructor(BB, jB) {
        var zB = BB.ny;
        zB.wzB(new lB.d(zB));
        var QB = new WB.e(uB);
        zB.iQB = QB, QB.blocks = [];
        var nB, dB = {},
          NB = [];
        this.textPlanes = NB, this.gQB = () => nB.gQB(), this.I3 = BB => {
          aB(QB, BB), nB.I3(BB)
        }, this.IQB = (jB, zB, IB) => {
          if (!jB.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!jB.metadata[KB.o] && !jB.metadata[KB.i]) {
            if (!zB) {
              var uB = QB.GQB;
              if (jB.metadata[KB.x] && !jB.parent) {
                uB = NB;
                var aB = jB.rV().fQB;
                jB.metadata[KB.A] = aB.center.length() + aB.radius, jB.xJ = !0
              }
              return uB.push(jB), jB.metadata[KB.e] = uB, void(jB.metadata[KB.i] = !0)
            }
            var rB = Math.floor(IB[0] / UB),
              sB = Math.floor(IB[1] / UB),
              JB = Math.floor(IB[2] / UB),
              mB = rB + "|" + sB + "|" + JB,
              yB = dB[mB];
            if (!yB) {
              var kB = [rB * UB, sB * UB, JB * UB],
                GB = [0, 0, 0];
              BB.ur.IjB(kB, null, GB), yB = pB(GB, UB), QB.blocks.push(yB), dB[mB] = yB, yB.tQB = mB
            }
            nB.IQB(jB, IB), nB.kQB(yB, jB), yB.SQB = (yB.SQB || 0) + 1, jB.metadata[KB.o] = yB, jB.metadata[KB.j] = !0, jB.xJ = !0
          }
        }, this.qY = BB => {
          if (BB.metadata) {
            BB.metadata[KB.i] && ((0, xB.m)(BB.metadata[KB.e], BB), BB.metadata[KB.i] = !1), BB.metadata[KB.e] === NB && (BB.xJ = !1), BB.metadata[KB.e] = void 0, BB.metadata[KB.A] = void 0;
            var jB = BB.metadata[KB.o];
            jB && jB.entries && (BB.metadata[KB.j] && nB.removeEntry(jB, BB), jB.SQB--, jB.SQB <= 0 && (delete dB[jB.tQB], (0, xB.m)(QB.blocks, jB))), nB.qY(BB), BB.metadata[KB.o] = null, BB.metadata[KB.j] = !1
          }
        }, this.h_ = function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (BB.metadata[KB.o]) {
            if (BB.metadata[KB.j] === jB) return;
            var zB = BB.metadata[KB.o];
            zB && zB.entries && (jB ? nB.kQB(zB, BB) : nB.removeEntry(zB, BB)), BB.metadata[KB.j] = jB
          } else {
            if (BB.metadata[KB.i] === jB) return;
            var dB = BB.metadata[KB.e] || QB.GQB;
            jB ? dB.push(BB) : (0, xB.m)(dB, BB), BB.metadata[KB.i] = jB
          }
        };
        var uB = () => {},
          UB = jB * BB.ur.zr.aBB,
          aB = (BB, jB) => {
            BB.blocks.forEach((BB => {
              BB.pQB.MQB(jB), BB.aQB.MQB(jB), BB.LQB.forEach((BB => BB.MQB(jB))), BB.blocks && aB(BB, jB)
            }))
          },
          pB = (BB, jB) => {
            var zB = new IB.KJ(BB[0], BB[1], BB[2]),
              QB = new IB.KJ(BB[0] + jB, BB[1] + jB, BB[2] + jB);
            return new eB.d(zB, QB, void 0, void 0, void 0, uB)
          };
        nB = Jj(zB, QB, BB.ur, pB, ((BB, jB) => {
          for (var zB = 0; zB < NB.length; zB++) {
            var QB = NB[zB];
            QB.isEnabled(!1) && ((0, kj.d)(QB, jB) && wB.i.prototype.push.call(BB, QB))
          }
        }))
      }
    }

    function Lj(BB) {
      const {
        holderPosition: jB,
        holderRotation: zB,
        YC: QB,
        fov: nB,
        near: dB,
        far: IB
      } = BB.model.fC, NB = BB.hQB;
      NB.position.U3(jB[0], jB[1], jB[2]), NB.rotation.U3(zB[0], zB[1], zB[2]);
      const uB = BB.camera;
      uB.position.U3(QB[0], QB[1], QB[2]), uB.fov = nB, uB.minZ = dB, uB.maxZ = IB
    }

    function gj(BB) {
      const jB = BB.wJ(),
        zB = jB,
        QB = zB._gl;
      if (!QB || zB.gm < 2 || jB.jQB || QB.getParameter(QB.DEPTH_BITS) < 24) return !1;
      const nB = BB._renderingManager,
        dB = nB.getRenderingGroup(-1),
        IB = nB.getRenderingGroup(0),
        NB = XB.e.prototype.render;
      return dB.render = function(BB, jB, zB, QB, nB, dB, uB, UB, aB) {
        (BB || IB._empty) && NB.call(this, BB, jB, zB, QB, nB, dB, uB, UB, aB)
      }, IB.render = function(BB, zB, nB, IB) {
        let uB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          UB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          pB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          rB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          sB = arguments.length > 8 ? arguments[8] : void 0;
        BB ? NB.call(this, BB, zB, nB, IB, uB, UB, pB, rB, sB) : (jB.setAlphaMode(aB.e.ALPHA_DISABLE), NB.call(this, null, !1, !1, IB, uB, UB, pB, !1), dB._empty || (QB.depthRange(1, 1), NB.call(dB, null, zB, nB, IB, uB, UB, pB, rB, sB), QB.depthRange(0, 1)), NB.call(this, null, zB, nB, IB, !1, !1, !1, rB, sB))
      }, !0
    }

    function tj(BB, jB) {
      return [jB, PB.g].map(((jB, zB) => {
        const QB = new nB.b("light", IB.KJ.FromArray(jB), BB);
        return QB.diffuse = dB.Color3.FromArray([1, 1, 1]), QB.specular = dB.Color3.FromArray([1, 1, 1]), QB.intensity = PB.c[zB], QB
      }))
    }
    class Sj extends uB.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(BB) {
        var jB;
        this.heldTexture = BB, this.particleTexture = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.mirror) && void 0 !== jB ? jB : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        BB && (this.particleTexture = null, (0, UB.E)(this.heldTexture), this.heldTexture = null), super.dispose(BB, jB, zB)
      }
    }
    const Mj = QB.c.Zero();
    const Ej = {
      GzB: function(BB, jB) {
        return new HB(BB, jB.JzB, {
          preserveDrawingBuffer: jB.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      AQB: function(BB, jB) {
        ! function(BB, jB, zB) {
          const QB = new AB.d(BB.engine);
          BB.ny = QB, QB.detachControl(), QB.autoClear = !1, ZB.d.MIN_RENDERINGGROUPS = -1;
          for (let dB = ZB.d.MIN_RENDERINGGROUPS; dB <= 1; dB++) QB.setRenderingOrder(dB, XB.e.PainterSortCompare, XB.e.PainterSortCompare, XB.e.PainterSortCompare);
          QB.setRenderingAutoClearDepthStencil(0, !1), hB.d.Enabled = !1, BB.FQB = new Gj(BB, Math.round(jB.YQB)), BB.hQB = new VB.e("camHolder", QB), BB.camera = new YB.d("camera", new IB.KJ(0, 0, 0), QB), BB.camera.parent = BB.hQB, Lj(BB), (0, PB.k)(BB, ((BB, jB, zB) => (0, TB.i)(jB, zB, BB.ny))), QB.clearColor = dB.c.FromArray(jB.clearColor), QB.ambientColor = dB.Color3.FromArray(jB.ambientColor);
          const nB = zB(QB, jB.ZQB);
          QB.onNewLightAddedObservable.add((BB => {
            nB.some((jB => jB === BB)) || console.error(`Light "${BB.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), QB.skipPointerMovePicking = !0
        }(BB, jB, tj), gj(BB.ny)
      },
      VQB: Lj,
      setBabylonFog: function(BB, jB, zB, QB) {
        const nB = BB.ny;
        nB.fogMode = 3, nB.fogStart = jB, nB.fogEnd = zB, nB.fogColor.set(QB[0], QB[1], QB[2])
      },
      PQB: function(BB, jB, zB) {
        return BB.engine.gm >= 2 && (BB.WQB || (BB.WQB = new fB(BB.ny, BB.eQB)), !BB.WQB.failed) ? BB.WQB.TY(jB, zB) : new Sj(jB, zB, BB.ny)
      },
      wQB: function(BB, jB) {
        BB.ny.RL.forEach((zB => {
          if (zB instanceof iB) return void zB.I3(jB, BB.ur.qr);
          const QB = zB;
          if (QB.emitter.getConnectedParticleSystems)
            for (const BB of QB._particles) BB.position.set(BB.position.x - jB[0], BB.position.y - jB[1], BB.position.z - jB[2]);
          else {
            if (!QB.worldOffset) throw new Error("Particle system has no world offset");
            QB.worldOffset.x = -BB.ur.qr[0], QB.worldOffset.y = -BB.ur.qr[1], QB.worldOffset.z = -BB.ur.qr[2]
          }
        }))
      },
      linesFromArrays: function(BB, jB, zB) {
        const QB = new NB.d(jB, BB.ny, null, void 0, void 0, !1);
        return (0, TB.g)(jB, zB, BB.ny, QB), QB
      },
      Iy: Uj,
      lQB: function(BB, jB) {
        return Mj.origin.jH(jB.origin), Mj.direction.jH(jB.direction), Mj.length = jB.length, Mj.epsilon = jB.epsilon, Mj.lQB(BB, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41218: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => WB,
      i: () => GB,
      j: () => CB
    });
    var QB = zB(40350),
      nB = zB(41220),
      dB = zB(41266),
      IB = zB(41227),
      NB = zB(37908),
      uB = zB(37915),
      UB = zB(37924),
      aB = zB(37926),
      pB = zB(37315),
      rB = zB(37321),
      sB = zB(41231),
      JB = zB(37291),
      mB = zB(37300),
      yB = zB(37283);

    function kB(BB, jB) {
      return Object.assign((function(BB, zB, QB, nB) {
        return jB(this.featureState, BB, zB, QB, nB)
      }), {
        kJ: BB
      })
    }

    function GB(BB) {
      const jB = class extends sB.b {
          constructor(jB, zB) {
            const QB = (0, mB.eb)(jB),
              nB = QB && (0, mB.w)(QB, BB.name);
            for (var dB = arguments.length, IB = new Array(dB > 2 ? dB - 2 : 0), NB = 2; NB < dB; NB++) IB[NB - 2] = arguments[NB];
            super(jB, BB.name, BB.priority, nB ? nB.defines : BB.defines(...IB), !1), this.featureState = void 0, this.featureState = zB, this._pluginManager._addPlugin(this), this._enable(!0), (0, mB.z)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === yB.c.GLSL || BB === yB.c.WGSL
          }
        },
        zB = (0, JB.g)(BB);
      for (const [QB, nB] of Object.entries(JB.d)) {
        const dB = BB[QB];
        if (dB) {
          const BB = zB[QB];
          Object.defineProperty(jB.prototype, nB, {
            value: kB(dB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return jB
    }
    class LB extends(GB(NB.d)) {}
    var gB = zB(39895),
      tB = zB(41240),
      SB = zB(41248);

    function MB(BB, jB, zB) {
      return (0, SB.h)(zB, jB.urls, (() => async function(BB, jB, zB) {
        const {
          width: QB
        } = BB[0].getSize(), nB = BB.map(((BB, zB) => {
          var nB;
          const dB = Math.round(BB.getSize().height / QB),
            IB = null === jB || void 0 === jB ? void 0 : jB[zB];
          return {
            pixels: IB && IB.byteLength === QB * QB * dB * 4 ? IB : null !== (nB = EB.get(BB.getInternalTexture())) && void 0 !== nB ? nB : BB._readPixelsSync(),
            layers: dB
          }
        })), dB = zB.wJ().getCaps().texture2DArrayMaxLayerCount, NB = (0, SB.d)(nB, QB, dB).map((BB => {
          let {
            pixels: jB,
            layers: nB
          } = BB;
          return {
            atlas: new tB.e(jB, QB, QB, nB, gB.b.TEXTUREFORMAT_RGBA, zB, !0, !1, IB.d.NEAREST_NEAREST_MIPLINEAR),
            layers: nB
          }
        }));
        return BB.forEach(((BB, jB) => {
          const QB = BB.getInternalTexture();
          EB.has(QB) || (! function(BB, jB) {
            const zB = jB.createRawTexture(new Uint8Array(4), 1, 1, gB.b.TEXTUREFORMAT_RGBA, !1, !1, IB.d.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), jB.unbindAllTextures(), zB._swapAndDie(BB, !1)
          }(QB, zB.wJ()), EB.set(QB, nB[jB].pixels))
        })), NB
      }(BB, jB.pixels, zB)))
    }
    const EB = new WeakMap;
    var iB = zB(37934);
    class qB extends(GB(uB.h)) {
      constructor(BB, jB) {
        super(BB, jB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = jB.textures.map((BB => BB.mirror)), this.mirrors.forEach(((BB, jB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, jB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${jB}`, BB)
            }))
          }))
        })), (0, iB.i)(jB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, jB) {
        const zB = this.featureState,
          {
            width: QB,
            height: nB
          } = BB.getSize(),
          dB = this._material.shaderLanguage;
        if (!zB.useWebGL2) return void(0, iB.f)(this._material, zB, jB, QB, Math.round(nB / QB), dB);
        if (this.loaded.add(jB), this.loaded.size < this.mirrors.length) return;
        const IB = await MB(this.mirrors, zB.sources, this._material.aY());
        (0, iB.e)(this._material, zB, IB, QB, dB)
      }
    }
    var fB = zB(41251),
      oB = zB(40404),
      HB = zB(37166),
      DB = zB(41254),
      FB = zB(40519),
      YB = zB(40388),
      VB = zB(41200),
      hB = zB(37687),
      XB = zB(41260);
    class ZB extends fB.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const AB = {
      Mesh: DB.e,
      TransformNode: VB.e,
      oJ: fB.b,
      VertexBuffer: fB.d,
      BoundingInfo: oB.c,
      KJ: HB.KJ,
      ArenaBuffer: ZB,
      SubMesh: YB.d,
      VertexData: FB.e,
      MirroredGeometry: XB.d,
      meshFromArrays: XB.g,
      plainMeshFromArrays: XB.i
    };
    (0, hB.f)(AB);
    var TB = zB(37534);
    class PB extends(GB(aB.j)) {
      constructor(BB, jB) {
        if (super(BB, jB), BB instanceof QB.StandardMaterial && jB.dirLightCount > 0) {
          const jB = BB,
            zB = jB._blockDirtyMechanism;
          jB._blockDirtyMechanism = !0, BB.disableLighting = !0, jB._blockDirtyMechanism = zB;
          const QB = (0, mB.eb)(BB);
          QB && (QB.disableLighting = !0, (0, mB.ab)(QB))
        }(0, TB.e)(BB)
      }
      dispose(BB) {
        (0, TB.f)(this._material), super.dispose(BB)
      }
    }

    function WB(BB, jB) {
      if (!(jB instanceof QB.StandardMaterial) || jB.specularTexture) return;
      const {
        r: zB,
        g: nB,
        b: dB
      } = jB.specularColor;
      0 === zB && 0 === nB && 0 === dB && (BB.SPECULARTERM = !1)
    }(0, aB.h)({
      disableUnusedSpecularTerm: WB
    });
    var eB = zB(37408),
      lB = zB(37696);
    const wB = new RegExp(`^#define ${UB.e}\\s*$`, "m");
    class xB extends(GB(UB.i)) {
      constructor(BB, jB) {
        super(BB, jB), this.HJ = !1, jB.ditherOnlyWhileFading && (lB.g.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const jB = new WeakSet;
        BB.onEffectCreatedObservable.add((zB => {
          let {
            effect: QB,
            subMesh: nB
          } = zB;
          if (this.featureState.prewarmingDither || jB.has(QB)) return;
          jB.add(QB);
          const dB = null === nB || void 0 === nB ? void 0 : nB.getMesh();
          dB && !wB.test(QB.defines) && BB.aY().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(dB) || jB.delete(QB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.HJ || BB.aE()) return !1;
        const jB = new YB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, jB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== jB.effect
      }
      dispose(BB) {
        this.HJ = !0, super.dispose(BB)
      }
    }
    const KB = new Map;

    function CB(BB, jB) {
      KB.set(BB, jB)
    }
    CB(NB.d, LB), CB(uB.h, qB), CB(UB.i, xB), CB(aB.j, PB), (0, pB.d)({
      create: (BB, jB) => {
        const zB = new QB.StandardMaterial(BB.name, jB);
        return (0, eB.k)(BB, zB), zB.detailMap._pluginDefineNames
      },
      write: (BB, jB, zB) => {
        (0, eB.J)(BB.mirror, jB, zB)
      },
      addFeature: (BB, jB, zB) => {
        const QB = KB.get(jB.feature);
        if (!QB) throw new Error(`${jB.feature.name} has no plugin class (registerPluginClass)`);
        new QB(BB.mirror, jB.state, ...zB)
      },
      texture: (BB, jB, zB) => {
        let {
          url: QB,
          noMipmap: nB,
          invertY: dB,
          samplingMode: NB,
          data: uB,
          sets: UB
        } = zB;
        if (!uB) {
          const zB = new IB.d(QB, jB, nB, dB, NB);
          return Object.assign(zB, UB), void(0, rB.M)(BB, zB)
        }
        const aB = {},
          pB = new Promise(((BB, jB) => {
            aB.onLoad = BB, aB.onError = (BB, zB) => {
              jB(new Error(`${uB.context}: ${(null===zB||void 0===zB?void 0:zB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: sB,
            bytes: JB,
            label: mB
          } = uB,
          yB = {
            noMipmap: nB,
            invertY: !1,
            samplingMode: NB,
            ...aB,
            mimeType: sB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          kB = new IB.d(null, jB, yB);
        eB.l.set(kB, pB), Object.assign(kB, UB), kB.updateURL(QB, JB);
        const GB = kB.getInternalTexture();
        GB && (GB.label = mB), BB.uvSet = kB.coordinatesIndex, BB.matrix.set((0, eB.C)(kB)), (0, rB.M)(BB, kB)
      },
      cube: (BB, jB, zB) => {
        let {
          rootUrl: QB,
          files: dB,
          noMipmap: NB,
          luminance: uB
        } = zB;
        const {
          samplingMode: UB
        } = BB.sampler, aB = UB === (0, rB.D)(NB) ? null : () => {
          (0, eB.y)(pB, UB)
        }, pB = new nB.c(QB, jB, null, NB, dB, aB, null, (0, rB.C)(uB));
        pB.coordinatesMode = IB.d.SKYBOX_MODE, (0, rB.M)(BB, pB)
      },
      canvas: (BB, jB, zB) => {
        let {
          width: QB,
          height: nB,
          mipmaps: NB,
          samplingMode: uB,
          hasAlpha: UB = !1,
          wrap: aB = IB.d.CLAMP_ADDRESSMODE
        } = zB;
        const pB = new dB.d(jB, {
          width: QB,
          height: nB
        }, BB, NB, uB);
        pB.hasAlpha = UB, pB.wrapU = aB, pB.wrapV = aB;
        const rB = (0, eB.t)(pB);
        return (0, eB.u)(rB, pB), rB
      }
    })
  },
  41260: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      g: () => pB,
      i: () => rB
    });
    var QB = zB(41251),
      nB = zB(40125),
      dB = zB(40404),
      IB = zB(40525),
      NB = zB(41254),
      uB = zB(40519),
      UB = zB(37578);
    class aB extends IB.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, jB) => {
          this.releaseUnlessInstanced(jB)
        }, this.onLinked = null
      }
      link(BB) {
        var jB;
        (0, UB.o)(BB), this.model = BB, null === (jB = this.onLinked) || void 0 === jB || jB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const nB of Object.values(this._vertexBuffers))
          if (!nB.getIsInstanced()) {
            const {
              byteOffset: jB,
              byteStride: zB,
              type: QB,
              normalized: dB
            } = nB;
            BB.push({
              kind: nB.getKind(),
              data: nB.getData(),
              offset: jB,
              stride: zB,
              components: nB.getSize(),
              glType: QB,
              isNormalized: dB
            })
          } const jB = this._indices.length ? this._indices : null,
          {
            minimum: zB,
            maximum: QB
          } = this.extend;
        this.link(new UB.h(BB, jB, this.getTotalVertices(), new Float64Array(zB.nQB()), new Float64Array(QB.nQB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const jB = new aB(BB, this.aY()),
          zB = this.dQB(void 0, !0);
        zB && jB.setIndices(zB);
        let IB = !1;
        for (const dB in this._vertexBuffers) {
          const BB = this._vertexBuffers[dB],
            zB = BB.getData();
          if (!zB) continue;
          const NB = BB.getSize(),
            {
              type: uB,
              byteOffset: UB,
              byteStride: aB,
              normalized: pB
            } = BB;
          IB ||= BB.isUpdatable();
          const rB = BB.getIsInstanced() ? (zB instanceof Array ? 4 * zB.length : zB.byteLength) / aB : this.getTotalVertices(),
            sB = (0, nB.t)(zB, NB, uB, UB, aB, rB, !0),
            JB = {
              updatable: BB.isUpdatable(),
              stride: NB,
              type: uB,
              normalized: pB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          jB.setVerticesBuffer(new QB.d(this.wJ(), sB, dB, JB), rB)
        }
        return jB._updatable = IB, jB._boundingInfo = new dB.c(this.extend.minimum, this.extend.maximum), jB.relink(), jB
      }
      static mergeMeshes(BB, jB, zB, QB, nB, dB) {
        const uB = BB[0].aY(),
          UB = new NB.e(BB[0].name + "_merged", uB),
          pB = new aB(IB.c.RandomId(), uB, void 0, !1, UB);
        try {
          if (!NB.e.MergeMeshes(BB, jB, zB, UB, nB, dB)) return UB.dispose(), null
        } catch (rB) {
          throw UB.dispose(), rB
        }
        return pB.relink(), UB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var jB;
        BB && null !== (jB = this.getVertexBuffer(BB)) && void 0 !== jB && jB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, UB.z)(this.model), this.model = null)
      }
    }

    function pB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NB.e(BB, zB);
      const nB = (0, UB.m)(jB),
        {
          positions: dB,
          normals: pB,
          uvs: rB,
          indices: sB,
          named: JB = {}
        } = jB,
        mB = new uB.e;
      mB.positions = dB, mB.normals = null !== pB && void 0 !== pB ? pB : null, mB.uvs = null !== rB && void 0 !== rB ? rB : null, mB.indices = sB;
      const yB = new aB(IB.c.RandomId(), zB, mB, !1, QB);
      for (const {
          kind: IB,
          components: NB
        }
        of nB.vertexAttributes) IB in JB && QB.setVerticesData(IB, JB[IB], !1, NB);
      return yB.link(nB), QB
    }

    function rB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nB = new NB.e(BB, zB),
        {
          positions: dB,
          normals: IB,
          uvs: UB,
          indices: aB
        } = jB;
      return Object.assign(new uB.e, {
        positions: dB,
        normals: IB,
        uvs: UB,
        indices: aB
      }).applyToMesh(nB, QB), nB
    }
  },
  41693: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => yB,
      g: () => NB,
      k: () => IB,
      o: () => UB
    });
    var QB = zB(37372),
      nB = zB(38811),
      dB = zB(38802);

    function IB(BB, jB, zB, QB) {
      const nB = dB.w;
      jB.fill(0), BB.gravity.toArray(jB, nB.gravity), BB.colorDead.toArray(jB, nB.colorDead), zB[nB.ramp] = BB.useRampGradients ? 1 : 0;
      const IB = BB.getColorGradients(),
        NB = rB(BB, IB, "colour", QB);
      zB[nB.colorCount] = NB;
      for (let dB = 0; dB < NB; dB++) {
        var uB;
        const BB = IB[sB(IB, dB)];
        jB[nB.colorPositions + dB] = BB.gradient, BB.color1.toArray(jB, nB.color1 + 4 * dB), (null !== (uB = BB.color2) && void 0 !== uB ? uB : BB.color1).toArray(jB, nB.color2 + 4 * dB)
      }
      const UB = BB.getVelocityGradients(),
        aB = rB(BB, UB, "Hy", QB);
      zB[nB.velocityCount] = aB;
      for (let dB = 0; dB < aB; dB++) GB(jB, nB.Hy + 4 * dB, UB[sB(UB, dB)]);
      const pB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        JB = rB(BB, pB, "colour remap", QB);
      zB[nB.remapCount] = JB;
      for (let dB = 0; dB < JB; dB++) GB(jB, nB.remap + 4 * dB, pB[sB(pB, dB)])
    }

    function NB() {
      return {
        key: [],
        texels: new Uint8Array(4 * dB.k)
      }
    }
    const uB = [];

    function UB(BB, jB) {
      return aB(BB, uB), !kB(uB, jB.key) && (jB.key.length = 0, jB.key.push(...uB), jB.key.length > 0 && function(BB, jB) {
        for (let zB = 0; zB < dB.k; zB++) nB.j.GetCurrentGradient(zB / dB.k, BB, ((BB, jB, zB) => {
          QB.Color3.LerpToRef(BB.color, jB.color, zB, pB)
        })), jB[4 * zB] = 255 * pB.r, jB[4 * zB + 1] = 255 * pB.g, jB[4 * zB + 2] = 255 * pB.b, jB[4 * zB + 3] = 255
      }(BB.getRampGradients(), jB.texels), !0)
    }

    function aB(BB, jB) {
      jB.length = 0;
      const zB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== zB && void 0 !== zB && zB.length) {
        jB.push(zB.length);
        for (const BB of zB) jB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const pB = new QB.Color3;

    function rB(BB, jB, zB, QB) {
      return jB ? jB.length > dB.d ? (QB(`particleStops:${zB}`, `GPU particles use the first 2 and last ${dB.d-2} of more than ${dB.d} ${zB} gradient stops (${BB.name})`), dB.d) : jB.length : 0
    }

    function sB(BB, jB) {
      return jB < 2 || BB.length <= dB.d ? jB : BB.length - dB.d + jB
    }
    const JB = new Float32Array(dB.r),
      mB = new Uint32Array(JB.buffer);

    function yB(BB, jB, zB) {
      return IB(BB, JB, mB, zB), jB && kB(mB, jB) ? null : mB.slice()
    }

    function kB(BB, jB) {
      if (BB.length !== jB.length) return !1;
      for (let zB = 0; zB < BB.length; zB++)
        if (BB[zB] !== jB[zB]) return !1;
      return !0
    }

    function GB(BB, jB, zB) {
      var QB;
      BB[jB] = zB.gradient, BB[jB + 1] = zB.factor1, BB[jB + 2] = null !== (QB = zB.factor2) && void 0 !== QB ? QB : zB.factor1
    }
  },
  41248: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      const QB = jB * jB * 4,
        nB = BB[0].layers,
        dB = nB * (BB.length - 1) + BB[BB.length - 1].layers,
        IB = new Uint8Array(dB * QB);
      BB.forEach(((jB, zB) => {
        const dB = zB + 1 < BB.length ? Math.min(jB.layers, nB) : jB.layers;
        IB.set(new Uint8Array(jB.pixels.buffer, jB.pixels.byteOffset, dB * QB), zB * nB * QB)
      }));
      const NB = Math.max(1, Math.min(dB, zB || dB));
      if (NB === dB) return [{
        pixels: IB,
        layers: dB
      }];
      const uB = [];
      for (let UB = 0; UB < dB; UB += NB) {
        const BB = Math.min(dB, UB + NB);
        uB.push({
          pixels: IB.slice(UB * QB, BB * QB),
          layers: BB - UB
        })
      }
      return uB
    }
    zB.d(jB, {
      d: () => QB,
      h: () => dB
    });
    const nB = new WeakMap;

    function dB(BB, jB, zB) {
      var QB, dB;
      const IB = null !== (QB = nB.get(BB)) && void 0 !== QB ? QB : new Map;
      nB.set(BB, IB);
      const NB = null !== (dB = IB.get(jB[0])) && void 0 !== dB ? dB : [];
      IB.set(jB[0], NB);
      const uB = NB.find((BB => BB.urls.length === jB.length && BB.urls.every(((BB, zB) => BB === jB[zB]))));
      if (uB) return uB.built;
      const UB = {
        urls: [...jB],
        built: zB()
      };
      return NB.push(UB), UB.built.catch((() => {
        NB.splice(NB.indexOf(UB), 1)
      })), UB.built
    }
  },
  41690: (BB, jB, zB) => {
    function QB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const jB = new Set;
      return (zB, QB) => {
        jB.has(zB) || (jB.add(zB), console.warn(BB + QB))
      }
    }
    zB.d(jB, {
      b: () => QB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);