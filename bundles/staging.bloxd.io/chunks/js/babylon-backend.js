export const id = 0;
export const ids = [0];
export const modules = {
  41267: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      CapeMaterialPlugin: () => iT,
      HueTintMaterialPlugin: () => bT,
      LifeformMaterialPlugin: () => OT,
      OverlayMaterialPlugin: () => eT
    });
    var WT = mT(41269),
      zT = mT(38142);
    class MT extends((0, WT.h)(zT.c)) {}(0, WT.i)(zT.c, MT);
    var gT = mT(37273);
    class nT extends((0, WT.h)(gT.e)) {}(0, WT.i)(gT.e, nT);
    var HT = mT(37976);
    class kT extends((0, WT.h)(HT.c)) {}(0, WT.i)(HT.c, kT);
    var jT = mT(37534),
      lT = mT(40379),
      LT = mT(37531);
    class pT extends((0, WT.h)(LT.h)) {
      constructor(TT, UT, mT) {
        super(TT, UT, mT), (0, jT.e)(TT)
      }
      dispose(TT) {
        (0, jT.g)(this._material), super.dispose(TT)
      }
    }(0, WT.i)(LT.h, pT), (0, LT.l)({
      disableUnusedSpecularTerm: WT.e,
      isLightingDisabled: TT => TT instanceof lT.StandardMaterial && TT.disableLighting
    });
    var BT = mT(38807);
    class ZT extends((0, WT.h)(BT.e)) {}(0, WT.i)(BT.e, ZT);
    var cT = mT(38914),
      vT = mT(37376),
      fT = mT(38266),
      qT = mT(37324);
    class iT extends((0, WT.h)(cT.d)) {}(0, WT.i)(cT.d, iT);
    class bT extends((0, WT.h)(vT.c)) {}(0, WT.i)(vT.c, bT);
    class OT extends((0, WT.h)(fT.i)) {}(0, WT.i)(fT.i, OT);
    class eT extends((0, WT.h)(qT.c)) {}(0, WT.i)(qT.c, eT)
  },
  41689: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      addBabylonLights: () => bU,
      default: () => YU
    });
    var WT = mT(41693),
      zT = (mT(40064), mT(41265), mT(40611), mT(41701)),
      MT = mT(37364),
      gT = mT(37185),
      nT = mT(41714),
      HT = mT(41719),
      kT = mT(37321),
      jT = (mT(41269), mT(41732)),
      lT = mT(41727),
      LT = mT(38836),
      pT = mT(41737),
      BT = mT(39934),
      ZT = mT(38815);
    const cT = "gpuParticles",
      vT = ZT.q,
      fT = TT => TT / 4,
      qT = TT => `gpuParticleSystem[${TT>>2}].${"xyzw"[3&TT]}`,
      iT = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${ZT.b}\n#define COLOR_POSITIONS ${fT(vT.colorPositions)}\n#define COLOR1 ${fT(vT.color1)}\n#define COLOR2 ${fT(vT.color2)}\n#define VELOCITY ${fT(vT.Tc)}\n#define REMAP ${fT(vT.remap)}\n#define RECORDS_PER_ROW ${ZT.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${ZT.n/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${qT(vT.gravity)}, ${qT(vT.gravity+1)}, ${qT(vT.gravity+2)}); }\nint colorCount() { return int(${qT(vT.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${fT(vT.colorDead)}]; }\nint velocityCount() { return int(${qT(vT.velocityCount)}); }\nint remapCount() { return int(${qT(vT.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    BT.d.ShadersStore[`${cT}VertexShader`] = iT, BT.d.ShadersStore[`${cT}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const bT = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      OT = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var eT = mT(38813),
      YT = mT(41743);
    class JT extends eT.d {
      constructor(TT, UT, mT, WT) {
        super(TT, UT, mT), this.renderer = mT, this.XZ = WT, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(ZT.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, YT.h)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (TT, UT) => {
          const {
            engine: mT
          } = this, WT = mT._gl;
          mT._bindTextureDirectly(WT.TEXTURE_2D, this.records, !0), mT._unpackFlipY(!1);
          const zT = this.ring.recordBits;
          for (let MT = TT; MT < UT;) {
            const TT = Math.floor(MT / ZT.l),
              mT = Math.min(UT, (TT + 1) * ZT.l);
            WT.texSubImage2D(WT.TEXTURE_2D, 0, MT % ZT.l * 4, TT, 4 * (mT - MT), 1, WT.RGBA_INTEGER, WT.UNSIGNED_INT, zT, MT * ZT.d), MT = mT
          }
          mT._bindTextureDirectly(WT.TEXTURE_2D, null)
        }, this.id = TT;
        const zT = WT.eB();
        this.engine = zT;
        const MT = Math.max(1, UT),
          gT = Math.min(MT, ZT.l);
        this.records = zT.createRawTexture(null, 4 * gT, Math.ceil(MT / gT), jT.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, jT.b.TEXTURE_NEAREST_SAMPLINGMODE, null, jT.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.XZ.getAnimationRatio() || 1;
        const UT = this.XZ.getFrameId();
        if (UT === this.animatedFrame) return !1;
        const mT = super.animate(TT);
        return mT && (this.animatedFrame = UT, this.ring.takeUploads(this.uploadSlots)), mT
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(TT) {
        (0, YT.j)(this, this.uniforms, this.uniformBits, TT);
        for (const mT of ZT.o) this.uniforms[mT] = this.uniformBits[mT];
        var UT;
        (0, YT.n)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (UT = this.ramp) || void 0 === UT || UT.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = lT.b.CreateRGBATexture(this.rampTexels.texels, ZT.i, 1, this.XZ, !1, !1, jT.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var TT;
        this.records.dispose(), null === (TT = this.ramp) || void 0 === TT || TT.dispose(), this.ramp = null
      }
    }
    const xT = "the context was lost before the programs linked";
    class dT {
      constructor(TT, UT) {
        this.XZ = TT, this.reportFailure = UT, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, pT.c)(), this.engine = TT.eB(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = lT.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, TT, !1, !1, jT.b.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      wV(TT, UT) {
        const mT = ZT.l * this.engine.getCaps().maxTextureSize;
        UT > mT && this.warnOnce(`capacity:${TT}`, `particle system ${TT} holds ${mT} particles, not ${UT}: its records texture's limit`);
        const WT = new JT(TT, Math.min(UT, mT), this, this.XZ);
        return this.XZ.addParticleSystem(WT), WT
      }
      canDraw(TT) {
        var UT, mT;
        if (this.failed || null === (UT = TT.texture) || void 0 === UT || null === (mT = UT.mirror) || void 0 === mT || !mT.isReady()) return !1;
        for (const WT of (0, LT.i)(TT.blendMode))
          if (!this.effectFor(WT).isReady()) return !1;
        return !0
      }
      disposeStopped(TT) {
        this.XZ._toBeDisposed.push(TT)
      }
      remove(TT) {
        this.XZ.removeParticleSystem(TT), TT.releaseGl()
      }
      render(TT) {
        var UT;
        if (!TT.isReady() || !TT.hasLiveParticles()) return 0;
        const {
          engine: mT,
          XZ: WT,
          frame: zT
        } = this;
        TT.prepareDraw(this.warnOnce), TT.drawOffset(zT, 0), zT[3] = TT.drawTime();
        const MT = TT.ring.drawStart(),
          gT = TT.ring.drawCount(),
          nT = null !== (UT = TT.ramp) && void 0 !== UT ? UT : this.whiteRamp;
        mT.setState(!1);
        for (const HT of (0, LT.i)(TT.blendMode)) {
          const UT = this.effectFor(HT);
          mT.enableEffect(UT), UT.setTexture("gpuParticleTexture", TT.texture.mirror), UT.setTexture("gpuParticleRampTexture", nT), UT._bindTexture("gpuParticleRecords", TT.records), UT.setMatrix("gpuParticleView", WT.getViewMatrix()), UT.setMatrix("gpuParticleProjection", WT.getProjectionMatrix()), UT.setFloatArray4("gpuParticleSystem", TT.uniforms), UT.setFloat4("gpuParticleFrame", zT[0], zT[1], zT[2], zT[3]), UT.setFloat2("gpuParticleRange", MT, gT), UT.setFloat("gpuParticleRamp", TT.uniforms[ZT.q.ramp]), mT.bindBuffers(this.vertexBuffers, null, UT), mT.setAlphaMode((0, LT.h)(HT)), mT.drawArraysType(jT.b.MATERIAL_TriangleStripDrawMode, 0, 4, gT), UT._bindTexture("gpuParticleRecords", null)
        }
        return mT.setAlphaMode(jT.b.ALPHA_DISABLE), gT
      }
      awaitLink(TT) {
        const UT = TT.getPipelineContext(),
          mT = this.gl();
        !this.failed && mT && (!UT || UT.isParallelCompiled && !UT.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : UT.isParallelCompiled && UT.program && (mT.getProgramParameter(UT.program, mT.LINK_STATUS) || this.fail(function(TT, UT, mT) {
          if (TT.isContextLost()) return xT;
          for (const [WT, zT] of [
              ["VERTEX SHADER", UT.vertexShader],
              ["FRAGMENT SHADER", UT.fragmentShader]
            ]) {
            const UT = zT && !TT.getShaderParameter(zT, TT.COMPILE_STATUS) ? TT.getShaderInfoLog(zT) : null;
            if (UT) return `${WT} ${UT}`
          }
          return TT.getProgramInfoLog(mT) || "a program did not link"
        }(mT, UT, UT.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(TT) {
        return TT === LT.e ? this.multiplyEffect : this.effect
      }
      createEffect(TT) {
        return this.engine.createEffect(cT, [], bT, OT, TT, void 0, void 0, ((TT, UT) => {
          var mT;
          this.fail(null !== (mT = this.gl()) && void 0 !== mT && mT.isContextLost() ? xT : function(TT) {
            const UT = TT.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(UT) ? "a program failed, its log not in this browser's stack" : UT.replace(/^Error: /, "")
          }(UT))
        }))
      }
      fail(TT) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${TT}`), this.reportFailure(TT);
          for (const TT of this.XZ.EY.slice()) TT instanceof JT && TT.disposeOnStop && TT.dispose()
        }
      }
    }
    var wT = mT(39907);
    class tT extends wT.b {
      createEffect() {
        const TT = super.createEffect(...arguments);
        return yT(TT), aT.has(TT) || (aT.add(TT), TT.onCompileObservable.add((() => {
          yT(TT)
        }))), TT
      }
    }
    const aT = new WeakSet;

    function yT(TT) {
      TT._vertexSourceCodeBeforeMigration = "", TT._fragmentSourceCodeBeforeMigration = ""
    }
    var XT = mT(40316),
      IT = mT(41256),
      QT = mT(40039),
      sT = mT(40274),
      FT = mT(40270),
      PT = mT(40192),
      VT = mT(41327),
      uT = mT(37733),
      CT = mT(41745),
      rT = mT(41751),
      KT = mT(41759),
      ST = mT(40215),
      GT = mT(2985),
      NT = mT(37602),
      ET = mT(40440),
      hT = mT(37687),
      DT = mT(37625);

    function oT(TT) {
      if (TT.visibility < 1 || !TT.isVisible || !TT.isEnabled() || TT.metadata[DT.d] || !TT.isReady()) return !0;
      const UT = TT.rY;
      if (!UT || 0 === UT.length) return !0;
      for (let mT = 0; mT < UT.length; mT++) {
        const WT = UT[mT],
          zT = WT.wB();
        if (!zT || !zT.isReadyForSubMesh(TT, WT, !1)) return !0
      }
      return !1
    }
    class AT {
      constructor(TT, UT) {
        this.Rl = TT, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, UT.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      np(TT) {
        var UT;
        const mT = this.armed;
        if (this.armed = !1, this.vis = null, !mT) return !1;
        this.culled = 0;
        const {
          Rl: WT
        } = this, zT = null === (UT = WT.JY) || void 0 === UT ? void 0 : UT.visibility;
        if (!zT || !TT || WT.GB.NB) return !1;
        if (!(WT.Nl.YWT[0] >= hT.f)) return !1;
        const MT = TT.getProjectionMatrix().m;
        if (0 !== MT[15]) return !1;
        const gT = WT.ZL,
          nT = TT.globalPosition,
          HT = this.eye;
        return HT[0] = nT.x + gT[0], HT[1] = nT.y + gT[1], HT[2] = nT.z + gT[2], !!zT.eyeClear(HT[0], HT[1], HT[2], TT.minZ, MT, WT.Nl) && (this.vis = zT, this.passable.clear(), this.count = 0, !0)
      }
      see(TT, UT) {
        const mT = this.count++;
        if (mT === this.cellSlots.length) {
          const TT = new Int32Array(2 * mT);
          TT.set(this.cellSlots), this.cellSlots = TT
        }
        this.cellSlots[mT] = UT, this.meshes[mT] = TT
      }
      seeThrough(TT) {
        this.passable.add(TT)
      }
      finish(TT, UT) {
        const {
          vis: mT,
          eye: WT,
          meshes: zT,
          count: MT,
          cellSlots: gT
        } = this, {
          Nl: nT
        } = this.Rl, [HT, kT] = nT.YWT, jT = null !== mT && mT.update(WT[0], WT[1], WT[2], nT.iTT, HT, kT, this.passable);
        let lT = 0;
        for (let LT = 0; LT < MT; LT++) {
          const WT = zT[LT];
          if (jT) {
            const TT = 3 * gT[LT];
            if (TT >= 0 && !mT.isDrawn(UT[TT], UT[TT + 1], UT[TT + 2])) {
              lT++;
              continue
            }
          }
          ST.f.prototype.push.call(TT, WT)
        }
        zT.fill(null, 0, MT), this.count = 0, this.vis = null, this.culled = lT
      }
    }
    var RT = mT(37673),
      TU = mT(37617),
      UU = mT(40413),
      mU = mT(41768),
      WU = mT(40418),
      zU = mT(40335);
    let MU = 1;
    const gU = new WeakSet;

    function nU() {
      return MU
    }

    function HU() {
      MU = MU >= 1073741823 ? 1 : MU + 1
    }

    function kU(TT) {
      const UT = TT.metadata;
      if (!UT || !0 !== UT[NT.m]) return;
      const mT = UT[NT.q],
        WT = null === mT || void 0 === mT ? void 0 : mT._noaStamps;
      if (!mT || !WT) return;
      const zT = mT.entries.indexOf(TT);
      zT >= 0 && (WT[zT] = 0)
    }

    function jU(TT) {
      const UT = TT.rY;
      for (let mT = 0; mT < UT.length; mT++) {
        const TT = UT[mT].wB();
        if (TT && !TT.isFrozen) return !1
      }
      for (let mT = 0; mT < UT.length; mT++) {
        const TT = UT[mT].wB();
        TT && gU.add(TT)
      }
      return !0
    }
    let lU = !1;
    const LU = new WeakSet;

    function pU(TT, UT) {
      const mT = TT[UT];
      if ("function" !== typeof mT) throw new Error(`terrainDrawState: Babylon has no ${UT} to hook`);
      return mT
    }

    function BU(TT, UT, mT, WT, zT) {
      const MT = mT.Nl.iTT,
        gT = new Map;
      let nT = 0;
      const HT = new AT(mT, TT),
        kT = new RT.e(MT, TT.eB());
      ! function(TT) {
        if (LU.has(TT) || (LU.add(TT), TT.onContextLostObservable.add(HU), TT.OB.add(HU)), lU) return;
        lU = !0;
        const UT = mU.d.prototype,
          mT = pU(UT, "_markSubMeshesAsDirty");
        Object.assign(UT, {
          _markSubMeshesAsDirty(TT) {
            mT.call(this, TT), kU(this)
          }
        });
        const WT = pU(zU.d.prototype, "_syncParentEnabledState");
        Object.assign(zU.d.prototype, {
          _syncParentEnabledState() {
            WT.call(this), kU(this)
          }
        });
        const zT = pU(WU.e.prototype, "resetDrawCache");
        WU.e.prototype.resetDrawCache = function(TT, UT) {
          zT.call(this, TT, UT), kU(this.getMesh())
        };
        const MT = UU.b.prototype,
          gT = pU(MT, "markDirty");
        MT.markDirty = function(TT) {
          gT.call(this, TT), gU.has(this) && HU()
        };
        const nT = pU(MT, "_markAllSubMeshesAsDirty");
        Object.assign(MT, {
          _markAllSubMeshesAsDirty(TT) {
            nT.call(this, TT), gU.has(this) && HU()
          }
        })
      }(TT.eB());
      let jT = new Float64Array(384),
        lT = new Int32Array(64),
        LT = new Uint8Array(64),
        pT = new Float64Array(64),
        BT = new Int32Array(192),
        ZT = 0;
      const cT = [],
        vT = new Float64Array(24),
        fT = () => {
          const TT = cT.pop();
          return void 0 !== TT ? (lT[TT] = 0, TT) : (ZT === lT.length && (jT = ZU(jT, new Float64Array(2 * jT.length)), lT = ZU(lT, new Int32Array(2 * lT.length)), LT = ZU(LT, new Uint8Array(2 * LT.length)), pT = ZU(pT, new Float64Array(2 * pT.length)), BT = ZU(BT, new Int32Array(2 * BT.length))), ZT++)
        },
        qT = TT => {
          const UT = 6 * TT._noaSlot,
            mT = TT.XWT[0],
            WT = TT.XWT[1];
          jT[UT] = mT.x, jT[UT + 1] = mT.y, jT[UT + 2] = mT.z, jT[UT + 3] = WT.x, jT[UT + 4] = WT.y, jT[UT + 5] = WT.z
        },
        iT = (TT, UT, mT) => {
          if (!mT) return HT.see(TT, -1), !1;
          const WT = oT(TT);
          return WT && HT.seeThrough(pT[UT]), HT.see(TT, UT), !WT
        };
      let bT = -1;
      return TT.getActiveMeshCandidates = () => {
        const mT = TT.frustumPlanes,
          WT = UT._selectionContent;
        WT.reset(), (mT => {
          const WT = TT.frustumPlanes;
          nT = nT + 1 | 0 || 1;
          const zT = UT.blocks,
            MT = HT.np(TT.activeCamera),
            gT = MT && !0;
          if (gT) {
            const UT = TT.eB().currentRenderPassId;
            UT !== bT && (bT = UT, HU())
          }
          const kT = nU(),
            pT = gT && !1;
          zT.length > 0 && function(TT, UT) {
            for (let mT = 0; mT < 6; mT++) {
              const WT = TT[mT],
                zT = WT.normal;
              UT[4 * mT] = zT.x, UT[4 * mT + 1] = zT.y, UT[4 * mT + 2] = zT.z, UT[4 * mT + 3] = WT.d
            }
          }(WT, vT);
          const ZT = jT,
            cT = lT,
            fT = LT;
          for (let TT = 0; TT < zT.length; TT++) {
            const UT = zT[TT];
            if (!ET.e.IsInFrustum(UT.XWT, WT)) continue;
            const jT = UT.entries;
            {
              const TT = UT._noaSlots,
                WT = UT._noaStamps,
                zT = UT._noaTerrain;
              for (let UT = 0; UT < jT.length; UT++) {
                const lT = TT[UT];
                if (cT[lT] !== nT && (cT[lT] = nT, fT[lT] = cU(ZT, 6 * lT, vT) ? 1 : 0), 0 === fT[lT]) continue;
                const LT = jT[UT];
                if (gT && WT[UT] === kT) pT && 1 === zT[UT] && oT(LT) && 0, HT.see(LT, 1 === zT[UT] ? lT : -1);
                else if (gT) {
                  WT[UT] = kT;
                  const TT = !0 === LT.metadata[TU.i];
                  zT[UT] = TT ? 1 : 0;
                  const mT = iT(LT, lT, TT);
                  !TT || mT && jU(LT) || (WT[UT] = 0)
                } else MT ? iT(LT, lT, !0 === LT.metadata[TU.i]) : ST.f.prototype.push.call(mT, LT)
              }
              continue
            }
          }
          MT && HT.finish(mT, BT)
        })(WT), kT.apply(WT, TT.activeCamera);
        const MT = UT.yWT;
        for (let TT = 0; TT < MT.length; TT++) {
          const UT = MT[TT];
          UT.isEnabled() && ST.f.prototype.push.call(WT, UT)
        }
        return zT(WT, mT), WT
      }, {
        IWT: () => HT.culled,
        fWT: (TT, UT) => {
          const zT = Math.floor(UT[0] / MT),
            nT = Math.floor(UT[1] / MT),
            HT = Math.floor(UT[2] / MT),
            kT = `${zT}|${nT}|${HT}`;
          let jT = gT.get(kT);
          if (!jT) {
            const TT = [0, 0, 0];
            mT.qUT([zT * MT - 1, nT * MT - 1, HT * MT - 1], null, TT), jT = Object.assign(WT(TT, MT + 2), {
              QWT: kT,
              sWT: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: fT()
            }), qT(jT), pT[jT._noaSlot] = (0, GT.j)(zT, nT, HT), BT[3 * jT._noaSlot] = zT, BT[3 * jT._noaSlot + 1] = nT, BT[3 * jT._noaSlot + 2] = HT, gT.set(kT, jT)
          }
          jT.sWT++, TT.metadata[NT.r] = jT
        },
        cV: TT => {
          const UT = TT.metadata[NT.r];
          UT && (UT.sWT--, UT.sWT <= 0 && (gT.delete(UT.QWT), cT.push(UT._noaSlot)), TT.metadata[NT.r] = null)
        },
        aWT: (TT, UT) => {
          const mT = TT,
            WT = UT.metadata[NT.r];
          (mT._noaSlots ??= []).push(WT._noaSlot), (mT._noaStamps ??= []).push(0), (mT._noaTerrain ??= []).push(0), mT.entries.push(UT)
        },
        removeEntry: (TT, UT) => {
          const mT = TT,
            WT = mT.entries,
            zT = WT.indexOf(UT);
          if (zT < 0) return;
          const MT = mT._noaSlots,
            gT = mT._noaStamps,
            nT = mT._noaTerrain,
            HT = WT.length - 1;
          WT[zT] = WT[HT], MT[zT] = MT[HT], gT[zT] = gT[HT], nT[zT] = nT[HT], WT.pop(), MT.pop(), gT.pop(), nT.pop()
        },
        W9: TT => {
          for (const UT of gT.values()) {
            UT.eWT.FWT(TT), UT.OWT.FWT(TT);
            for (const mT of UT.XWT) mT.FWT(TT);
            qT(UT)
          }
        }
      }
    }

    function ZU(TT, UT) {
      return UT.set(TT), UT
    }

    function cU(TT, UT, mT) {
      const WT = TT[UT],
        zT = TT[UT + 1],
        MT = TT[UT + 2],
        gT = TT[UT + 3],
        nT = TT[UT + 4],
        HT = TT[UT + 5];
      for (let kT = 0; kT < 24; kT += 4) {
        const TT = mT[kT],
          UT = mT[kT + 1],
          jT = mT[kT + 2];
        if (!(TT * (TT >= 0 ? gT : WT) + UT * (UT >= 0 ? nT : zT) + jT * (jT >= 0 ? HT : MT) + mT[kT + 3] >= 0)) return !1
      }
      return !0
    }
    var vU = mT(37895);
    class fU {
      constructor(TT, UT) {
        var mT = TT.XZ;
        mT.WWT(new KT.d(mT));
        var WT = new CT.c(HT);
        mT.VWT = WT, WT.blocks = [];
        var zT, MT = {},
          nT = [];
        this.textPlanes = nT, this.IWT = () => zT.IWT(), this.W9 = TT => {
          jT(WT, TT), zT.W9(TT)
        }, this.fWT = (UT, mT, gT) => {
          if (!UT.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!UT.metadata[NT.q] && !UT.metadata[NT.k]) {
            if (!mT) {
              var HT = WT.yWT;
              if (UT.metadata[NT.y] && !UT.parent) {
                HT = nT;
                var jT = UT.rV().rWT;
                UT.metadata[NT.A] = jT.center.length() + jT.radius, UT.YB = !0
              }
              return HT.push(UT), UT.metadata[NT.f] = HT, void(UT.metadata[NT.k] = !0)
            }
            var LT = Math.floor(gT[0] / kT),
              pT = Math.floor(gT[1] / kT),
              BT = Math.floor(gT[2] / kT),
              ZT = LT + "|" + pT + "|" + BT,
              cT = MT[ZT];
            if (!cT) {
              var vT = [LT * kT, pT * kT, BT * kT],
                fT = [0, 0, 0];
              TT.Rl.qUT(vT, null, fT), cT = lT(fT, kT), WT.blocks.push(cT), MT[ZT] = cT, cT.QWT = ZT
            }
            zT.fWT(UT, gT), zT.aWT(cT, UT), cT.sWT = (cT.sWT || 0) + 1, UT.metadata[NT.q] = cT, UT.metadata[NT.m] = !0, UT.YB = !0
          }
        }, this.cV = TT => {
          if (TT.metadata) {
            TT.metadata[NT.k] && ((0, GT.m)(TT.metadata[NT.f], TT), TT.metadata[NT.k] = !1), TT.metadata[NT.f] === nT && (TT.YB = !1), TT.metadata[NT.f] = void 0, TT.metadata[NT.A] = void 0;
            var UT = TT.metadata[NT.q];
            UT && UT.entries && (TT.metadata[NT.m] && zT.removeEntry(UT, TT), UT.sWT--, UT.sWT <= 0 && (delete MT[UT.QWT], (0, GT.m)(WT.blocks, UT))), zT.cV(TT), TT.metadata[NT.q] = null, TT.metadata[NT.m] = !1
          }
        }, this.t5 = function(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (TT.metadata[NT.q]) {
            if (TT.metadata[NT.m] === UT) return;
            var mT = TT.metadata[NT.q];
            mT && mT.entries && (UT ? zT.aWT(mT, TT) : zT.removeEntry(mT, TT)), TT.metadata[NT.m] = UT
          } else {
            if (TT.metadata[NT.k] === UT) return;
            var MT = TT.metadata[NT.f] || WT.yWT;
            UT ? MT.push(TT) : (0, GT.m)(MT, TT), TT.metadata[NT.k] = UT
          }
        };
        var HT = () => {},
          kT = UT * TT.Rl.Nl.iTT,
          jT = (TT, UT) => {
            TT.blocks.forEach((TT => {
              TT.eWT.FWT(UT), TT.OWT.FWT(UT), TT.XWT.forEach((TT => TT.FWT(UT))), TT.blocks && jT(TT, UT)
            }))
          },
          lT = (TT, UT) => {
            var mT = new gT.JB(TT[0], TT[1], TT[2]),
              WT = new gT.JB(TT[0] + UT, TT[1] + UT, TT[2] + UT);
            return new rT.d(mT, WT, void 0, void 0, void 0, HT)
          };
        zT = BU(mT, WT, TT.Rl, lT, ((TT, UT) => {
          for (var mT = 0; mT < nT.length; mT++) {
            var WT = nT[mT];
            WT.isEnabled(!1) && ((0, vU.d)(WT, UT) && ST.f.prototype.push.call(TT, WT))
          }
        }))
      }
    }

    function qU(TT) {
      const {
        holderPosition: UT,
        holderRotation: mT,
        JA: WT,
        fov: zT,
        near: MT,
        far: gT
      } = TT.model.HA, nT = TT.DWT;
      nT.position.J9(UT[0], UT[1], UT[2]), nT.rotation.J9(mT[0], mT[1], mT[2]);
      const HT = TT.camera;
      HT.position.J9(WT[0], WT[1], WT[2]), HT.fov = zT, HT.minZ = MT, HT.maxZ = gT
    }

    function iU(TT) {
      const UT = TT.eB(),
        mT = UT,
        WT = mT._gl;
      if (!WT || mT.TZ < 2 || UT.pWT || WT.getParameter(WT.DEPTH_BITS) < 24) return !1;
      const zT = TT._renderingManager,
        MT = zT.getRenderingGroup(-1),
        gT = zT.getRenderingGroup(0),
        nT = sT.b.prototype.render;
      return MT.render = function(TT, UT, mT, WT, zT, MT, HT, kT, jT) {
        (TT || gT._empty) && nT.call(this, TT, UT, mT, WT, zT, MT, HT, kT, jT)
      }, gT.render = function(TT, mT, zT, gT) {
        let HT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          LT = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          pT = arguments.length > 8 ? arguments[8] : void 0;
        TT ? nT.call(this, TT, mT, zT, gT, HT, kT, lT, LT, pT) : (UT.setAlphaMode(jT.b.ALPHA_DISABLE), nT.call(this, null, !1, !1, gT, HT, kT, lT, !1), MT._empty || (WT.depthRange(1, 1), nT.call(MT, null, mT, zT, gT, HT, kT, lT, LT, pT), WT.depthRange(0, 1)), nT.call(this, null, mT, zT, gT, !1, !1, !1, LT, pT))
      }, !0
    }

    function bU(TT, UT) {
      return [UT, uT.d].map(((UT, mT) => {
        const WT = new zT.e("light", gT.JB.FromArray(UT), TT);
        return WT.diffuse = MT.Color3.FromArray([1, 1, 1]), WT.specular = MT.Color3.FromArray([1, 1, 1]), WT.intensity = uT.c[mT], WT
      }))
    }
    class OU extends HT.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(TT) {
        var UT;
        this.heldTexture = TT, this.particleTexture = null !== (UT = null === TT || void 0 === TT ? void 0 : TT.mirror) && void 0 !== UT ? UT : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let TT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        TT && (this.particleTexture = null, (0, kT.I)(this.heldTexture), this.heldTexture = null), super.dispose(TT, UT, mT)
      }
    }
    const eU = WT.d.Zero();
    const YU = {
      ymT: function(TT, UT) {
        return new tT(TT, UT.dmT, {
          preserveDrawingBuffer: UT.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      RWT: function(TT, UT) {
        ! function(TT, UT, mT) {
          const WT = new PT.b(TT.engine);
          TT.XZ = WT, WT.detachControl(), WT.autoClear = !1, FT.d.MIN_RENDERINGGROUPS = -1;
          for (let MT = FT.d.MIN_RENDERINGGROUPS; MT <= 1; MT++) WT.setRenderingOrder(MT, sT.b.PainterSortCompare, sT.b.PainterSortCompare, sT.b.PainterSortCompare);
          WT.setRenderingAutoClearDepthStencil(0, !1), QT.b.Enabled = !1, TT.NWT = new fU(TT, Math.round(UT.EWT)), TT.DWT = new IT.d("camHolder", WT), TT.camera = new XT.b("camera", new gT.JB(0, 0, 0), WT), TT.camera.parent = TT.DWT, qU(TT), (0, uT.g)(TT, ((TT, UT, mT) => (0, VT.i)(UT, mT, TT.XZ))), WT.clearColor = MT.e.FromArray(UT.clearColor), WT.ambientColor = MT.Color3.FromArray(UT.ambientColor);
          const zT = mT(WT, UT.AWT);
          WT.onNewLightAddedObservable.add((TT => {
            zT.some((UT => UT === TT)) || console.error(`Light "${TT.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), WT.skipPointerMovePicking = !0
        }(TT, UT, bU), iU(TT.XZ)
      },
      hWT: qU,
      setBabylonFog: function(TT, UT, mT, WT) {
        const zT = TT.XZ;
        zT.fogMode = 3, zT.fogStart = UT, zT.fogEnd = mT, zT.fogColor.set(WT[0], WT[1], WT[2])
      },
      MzT: function(TT, UT, mT) {
        return TT.engine.TZ >= 2 && (TT.gzT || (TT.gzT = new dT(TT.XZ, TT.nzT)), !TT.gzT.failed) ? TT.gzT.wV(UT, mT) : new OU(UT, mT, TT.XZ)
      },
      kzT: function(TT, UT) {
        TT.XZ.EY.forEach((mT => {
          if (mT instanceof JT) return void mT.W9(UT, TT.Rl.ZL);
          const WT = mT;
          if (WT.emitter.getConnectedParticleSystems)
            for (const TT of WT._particles) TT.position.set(TT.position.x - UT[0], TT.position.y - UT[1], TT.position.z - UT[2]);
          else {
            if (!WT.worldOffset) throw new Error("Particle system has no world offset");
            WT.worldOffset.x = -TT.Rl.ZL[0], WT.worldOffset.y = -TT.Rl.ZL[1], WT.worldOffset.z = -TT.Rl.ZL[2]
          }
        }))
      },
      linesFromArrays: function(TT, UT, mT) {
        const WT = new nT.b(UT, TT.XZ, null, void 0, void 0, !1);
        return (0, VT.f)(UT, mT, TT.XZ, WT), WT
      },
      IZ: kU,
      HzT: function(TT, UT) {
        return eU.origin.Gw(UT.origin), eU.direction.Gw(UT.direction), eU.length = UT.length, eU.epsilon = UT.epsilon, eU.HzT(TT, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41269: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => CT,
      h: () => fT,
      i: () => ET
    });
    var WT = mT(40379),
      zT = mT(41277),
      MT = mT(41334),
      gT = mT(41284),
      nT = mT(37947),
      HT = mT(37959),
      kT = mT(37965),
      jT = mT(37972),
      lT = mT(37312),
      LT = mT(37321),
      pT = mT(41286),
      BT = mT(37298),
      ZT = mT(37302),
      cT = mT(37288);

    function vT(TT, UT) {
      return Object.assign((function(TT, mT, WT, zT) {
        return UT(this.featureState, TT, mT, WT, zT)
      }), {
        hp: TT
      })
    }

    function fT(TT) {
      const UT = class extends pT.d {
          constructor(UT, mT) {
            const WT = (0, ZT.R)(UT),
              zT = WT && (0, ZT.s)(WT, TT.name);
            for (var MT = arguments.length, gT = new Array(MT > 2 ? MT - 2 : 0), nT = 2; nT < MT; nT++) gT[nT - 2] = arguments[nT];
            super(UT, TT.name, TT.priority, zT ? zT.defines : TT.defines(...gT), !1), this.featureState = void 0, this.featureState = mT, this._pluginManager._addPlugin(this), this._enable(!0), (0, ZT.t)(this._material, TT, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return TT.className
          }
          isCompatible(TT) {
            return TT === cT.e.GLSL || TT === cT.e.WGSL
          }
        },
        mT = (0, BT.g)(TT);
      for (const [WT, zT] of Object.entries(BT.c)) {
        const MT = TT[WT];
        if (MT) {
          const TT = mT[WT];
          Object.defineProperty(UT.prototype, zT, {
            value: vT(MT, TT),
            writable: !0,
            configurable: !0
          })
        }
      }
      return UT
    }
    class qT extends(fT(nT.b)) {}
    var iT = mT(39907),
      bT = mT(41291),
      OT = mT(41300);

    function eT(TT, UT, mT) {
      return (0, OT.h)(mT, UT.urls, (() => async function(TT, UT, mT) {
        const {
          width: WT
        } = TT[0].getSize(), zT = TT.map(((TT, mT) => {
          var zT;
          const MT = Math.round(TT.getSize().height / WT),
            gT = null === UT || void 0 === UT ? void 0 : UT[mT];
          return {
            pixels: gT && gT.byteLength === WT * WT * MT * 4 ? gT : null !== (zT = YT.get(TT.getInternalTexture())) && void 0 !== zT ? zT : TT._readPixelsSync(),
            layers: MT
          }
        })), MT = mT.eB().getCaps().texture2DArrayMaxLayerCount, nT = (0, OT.e)(zT, WT, MT).map((TT => {
          let {
            pixels: UT,
            layers: zT
          } = TT;
          return {
            atlas: new bT.e(UT, WT, WT, zT, iT.b.TEXTUREFORMAT_RGBA, mT, !0, !1, gT.e.NEAREST_NEAREST_MIPLINEAR),
            layers: zT
          }
        }));
        return TT.forEach(((TT, UT) => {
          const WT = TT.getInternalTexture();
          YT.has(WT) || (! function(TT, UT) {
            const mT = UT.createRawTexture(new Uint8Array(4), 1, 1, iT.b.TEXTUREFORMAT_RGBA, !1, !1, gT.e.NEAREST_SAMPLINGMODE);
            TT._hardwareTexture.release(), UT.unbindAllTextures(), mT._swapAndDie(TT, !1)
          }(WT, mT.eB()), YT.set(WT, zT[UT].pixels))
        })), nT
      }(TT, UT.pixels, mT)))
    }
    const YT = new WeakMap;
    var JT = mT(37974);
    class xT extends(fT(HT.i)) {
      constructor(TT, UT) {
        super(TT, UT), this.loaded = new Set, this.mirrors = void 0, this.mirrors = UT.textures.map((TT => TT.mirror)), this.mirrors.forEach(((TT, UT) => {
          TT.onLoadObservable.add((TT => {
            this.setTextureArrayData(TT, UT).catch((TT => {
              console.error(`Failed to build the texture arrays, at atlas ${UT}`, TT)
            }))
          }))
        })), (0, JT.n)(UT, TT.shaderLanguage)
      }
      async setTextureArrayData(TT, UT) {
        const mT = this.featureState,
          {
            width: WT,
            height: zT
          } = TT.getSize(),
          MT = this._material.shaderLanguage;
        if (!mT.useWebGL2) return void(0, JT.f)(this._material, mT, UT, WT, Math.round(zT / WT), MT);
        if (this.loaded.add(UT), this.loaded.size < this.mirrors.length) return;
        const gT = await eT(this.mirrors, mT.sources, this._material.KF());
        (0, JT.d)(this._material, mT, gT, WT, MT)
      }
    }
    var dT = mT(41309),
      wT = mT(40432),
      tT = mT(37185),
      aT = mT(41318),
      yT = mT(40546),
      XT = mT(40418),
      IT = mT(41256),
      QT = mT(37708),
      sT = mT(41327);
    class FT extends dT.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const PT = {
      Mesh: aT.d,
      TransformNode: IT.d,
      HB: dT.e,
      VertexBuffer: dT.i,
      BoundingInfo: wT.e,
      JB: tT.JB,
      ArenaBuffer: FT,
      SubMesh: XT.e,
      VertexData: yT.d,
      MirroredGeometry: sT.b,
      meshFromArrays: sT.f,
      plainMeshFromArrays: sT.i
    };
    (0, QT.f)(PT);
    var VT = mT(37534);
    class uT extends(fT(jT.k)) {
      constructor(TT, UT) {
        if (super(TT, UT), TT instanceof WT.StandardMaterial && UT.dirLightCount > 0) {
          const UT = TT,
            mT = UT._blockDirtyMechanism;
          UT._blockDirtyMechanism = !0, TT.disableLighting = !0, UT._blockDirtyMechanism = mT;
          const WT = (0, ZT.R)(TT);
          WT && (WT.disableLighting = !0, (0, ZT.Q)(WT))
        }(0, VT.e)(TT)
      }
      dispose(TT) {
        (0, VT.g)(this._material), super.dispose(TT)
      }
    }

    function CT(TT, UT) {
      if (!(UT instanceof WT.StandardMaterial) || UT.specularTexture) return;
      const {
        r: mT,
        g: zT,
        b: MT
      } = UT.specularColor;
      0 === mT && 0 === zT && 0 === MT && (TT.SPECULARTERM = !1)
    }(0, jT.g)({
      disableUnusedSpecularTerm: CT
    });
    var rT = mT(37397),
      KT = mT(37721);
    const ST = new RegExp(`^#define ${kT.c}\\s*$`, "m");
    class GT extends(fT(kT.h)) {
      constructor(TT, UT) {
        super(TT, UT), this.kB = !1, UT.ditherOnlyWhileFading && (KT.f.add(TT), this.prewarmDitherTwins(TT))
      }
      prewarmDitherTwins(TT) {
        const UT = new WeakSet;
        TT.onEffectCreatedObservable.add((mT => {
          let {
            effect: WT,
            subMesh: zT
          } = mT;
          if (this.featureState.prewarmingDither || UT.has(WT)) return;
          UT.add(WT);
          const MT = null === zT || void 0 === zT ? void 0 : zT.getMesh();
          MT && !ST.test(WT.defines) && TT.KF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(MT) || UT.delete(WT)
          }))
        }))
      }
      prewarmDither(TT) {
        if (this.kB || TT.bJ()) return !1;
        const UT = new XT.e(0, 0, 0, 0, 0, TT, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(TT, UT)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== UT.effect
      }
      dispose(TT) {
        this.kB = !0, super.dispose(TT)
      }
    }
    const NT = new Map;

    function ET(TT, UT) {
      NT.set(TT, UT)
    }
    ET(nT.b, qT), ET(HT.i, xT), ET(kT.h, GT), ET(jT.k, uT), (0, lT.d)({
      create: (TT, UT) => {
        const mT = new WT.StandardMaterial(TT.name, UT);
        return (0, rT.o)(TT, mT), mT.detailMap._pluginDefineNames
      },
      write: (TT, UT, mT) => {
        (0, rT._)(TT.mirror, UT, mT)
      },
      addFeature: (TT, UT, mT) => {
        const WT = NT.get(UT.feature);
        if (!WT) throw new Error(`${UT.feature.name} has no plugin class (registerPluginClass)`);
        new WT(TT.mirror, UT.state, ...mT)
      },
      texture: (TT, UT, mT) => {
        let {
          url: WT,
          noMipmap: zT,
          invertY: MT,
          samplingMode: nT,
          data: HT,
          sets: kT
        } = mT;
        if (!HT) {
          const mT = new gT.e(WT, UT, zT, MT, nT);
          return Object.assign(mT, kT), void(0, LT.N)(TT, mT)
        }
        const jT = {},
          lT = new Promise(((TT, UT) => {
            jT.onLoad = TT, jT.onError = (TT, mT) => {
              UT(new Error(`${HT.context}: ${(null===mT||void 0===mT?void 0:mT.message)||TT||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: pT,
            bytes: BT,
            label: ZT
          } = HT,
          cT = {
            noMipmap: zT,
            invertY: !1,
            samplingMode: nT,
            ...jT,
            mimeType: pT,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          vT = new gT.e(null, UT, cT);
        rT.q.set(vT, lT), Object.assign(vT, kT), vT.updateURL(WT, BT);
        const fT = vT.getInternalTexture();
        fT && (fT.label = ZT), TT.uvSet = vT.coordinatesIndex, TT.matrix.set((0, rT.Q)(vT)), (0, LT.N)(TT, vT)
      },
      cube: (TT, UT, mT) => {
        let {
          rootUrl: WT,
          files: MT,
          noMipmap: nT,
          luminance: HT
        } = mT;
        const {
          samplingMode: kT
        } = TT.sampler, jT = kT === (0, LT.G)(nT) ? null : () => {
          (0, rT.M)(lT, kT)
        }, lT = new zT.d(WT, UT, null, nT, MT, jT, null, (0, LT.C)(HT));
        lT.coordinatesMode = gT.e.SKYBOX_MODE, (0, LT.N)(TT, lT)
      },
      canvas: (TT, UT, mT) => {
        let {
          width: WT,
          height: zT,
          mipmaps: nT,
          samplingMode: HT,
          hasAlpha: kT = !1,
          wrap: jT = gT.e.CLAMP_ADDRESSMODE
        } = mT;
        const lT = new MT.b(UT, {
          width: WT,
          height: zT
        }, TT, nT, HT);
        lT.hasAlpha = kT, lT.wrapU = jT, lT.wrapV = jT;
        const LT = (0, rT.A)(lT);
        return (0, rT.E)(LT, lT), LT
      }
    })
  },
  41327: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => jT,
      f: () => lT,
      i: () => LT
    });
    var WT = mT(41309),
      zT = mT(40171),
      MT = mT(40432),
      gT = mT(40550),
      nT = mT(41318),
      HT = mT(40546),
      kT = mT(37584);
    class jT extends gT.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (TT, UT) => {
          this.releaseUnlessInstanced(UT)
        }, this.onLinked = null
      }
      link(TT) {
        var UT;
        (0, kT.m)(TT), this.model = TT, null === (UT = this.onLinked) || void 0 === UT || UT.call(this, TT)
      }
      relink() {
        this.release();
        const TT = [];
        for (const zT of Object.values(this._vertexBuffers))
          if (!zT.getIsInstanced()) {
            const {
              byteOffset: UT,
              byteStride: mT,
              type: WT,
              normalized: MT
            } = zT;
            TT.push({
              kind: zT.getKind(),
              data: zT.getData(),
              offset: UT,
              stride: mT,
              components: zT.getSize(),
              glType: WT,
              isNormalized: MT
            })
          } const UT = this._indices.length ? this._indices : null,
          {
            minimum: mT,
            maximum: WT
          } = this.extend;
        this.link(new kT.f(TT, UT, this.getTotalVertices(), new Float64Array(mT.cWT()), new Float64Array(WT.cWT())))
      }
      copy(TT) {
        if (!this.model) return super.copy(TT);
        const UT = new jT(TT, this.KF()),
          mT = this.vWT(void 0, !0);
        mT && UT.setIndices(mT);
        let gT = !1;
        for (const MT in this._vertexBuffers) {
          const TT = this._vertexBuffers[MT],
            mT = TT.getData();
          if (!mT) continue;
          const nT = TT.getSize(),
            {
              type: HT,
              byteOffset: kT,
              byteStride: jT,
              normalized: lT
            } = TT;
          gT ||= TT.isUpdatable();
          const LT = TT.getIsInstanced() ? (mT instanceof Array ? 4 * mT.length : mT.byteLength) / jT : this.getTotalVertices(),
            pT = (0, zT.v)(mT, nT, HT, kT, jT, LT, !0),
            BT = {
              updatable: TT.isUpdatable(),
              stride: nT,
              type: HT,
              normalized: lT,
              takeBufferOwnership: !0,
              instanced: TT.getIsInstanced()
            };
          UT.setVerticesBuffer(new WT.i(this.eB(), pT, MT, BT), LT)
        }
        return UT._updatable = gT, UT._boundingInfo = new MT.e(this.extend.minimum, this.extend.maximum), UT.relink(), UT
      }
      static mergeMeshes(TT, UT, mT, WT, zT, MT) {
        const HT = TT[0].KF(),
          kT = new nT.d(TT[0].name + "_merged", HT),
          lT = new jT(gT.e.RandomId(), HT, void 0, !1, kT);
        try {
          if (!nT.d.MergeMeshes(TT, UT, mT, kT, zT, MT)) return kT.dispose(), null
        } catch (LT) {
          throw kT.dispose(), LT
        }
        return lT.relink(), kT
      }
      removeVerticesData(TT) {
        this.releaseUnlessInstanced(TT), super.removeVerticesData(TT)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(TT) {
        var UT;
        TT && null !== (UT = this.getVertexBuffer(TT)) && void 0 !== UT && UT.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, kT.s)(this.model), this.model = null)
      }
    }

    function lT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new nT.d(TT, mT);
      const zT = (0, kT.k)(UT),
        {
          positions: MT,
          normals: lT,
          uvs: LT,
          indices: pT,
          named: BT = {}
        } = UT,
        ZT = new HT.d;
      ZT.positions = MT, ZT.normals = null !== lT && void 0 !== lT ? lT : null, ZT.uvs = null !== LT && void 0 !== LT ? LT : null, ZT.indices = pT;
      const cT = new jT(gT.e.RandomId(), mT, ZT, !1, WT);
      for (const {
          kind: gT,
          components: nT
        }
        of zT.vertexAttributes) gT in BT && WT.setVerticesData(gT, BT[gT], !1, nT);
      return cT.link(zT), WT
    }

    function LT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const zT = new nT.d(TT, mT),
        {
          positions: MT,
          normals: gT,
          uvs: kT,
          indices: jT
        } = UT;
      return Object.assign(new HT.d, {
        positions: MT,
        normals: gT,
        uvs: kT,
        indices: jT
      }).applyToMesh(zT, WT), zT
    }
  },
  41743: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => cT,
      h: () => nT,
      j: () => gT,
      n: () => kT
    });
    var WT = mT(37364),
      zT = mT(38824),
      MT = mT(38815);

    function gT(TT, UT, mT, WT) {
      const zT = MT.q;
      UT.fill(0), TT.gravity.toArray(UT, zT.gravity), TT.colorDead.toArray(UT, zT.colorDead), mT[zT.ramp] = TT.useRampGradients ? 1 : 0;
      const gT = TT.getColorGradients(),
        nT = LT(TT, gT, "colour", WT);
      mT[zT.colorCount] = nT;
      for (let MT = 0; MT < nT; MT++) {
        var HT;
        const TT = gT[pT(gT, MT)];
        UT[zT.colorPositions + MT] = TT.gradient, TT.color1.toArray(UT, zT.color1 + 4 * MT), (null !== (HT = TT.color2) && void 0 !== HT ? HT : TT.color1).toArray(UT, zT.color2 + 4 * MT)
      }
      const kT = TT.getVelocityGradients(),
        jT = LT(TT, kT, "Tc", WT);
      mT[zT.velocityCount] = jT;
      for (let MT = 0; MT < jT; MT++) fT(UT, zT.Tc + 4 * MT, kT[pT(kT, MT)]);
      const lT = TT.useRampGradients ? TT.getColorRemapGradients() : null,
        BT = LT(TT, lT, "colour remap", WT);
      mT[zT.remapCount] = BT;
      for (let MT = 0; MT < BT; MT++) fT(UT, zT.remap + 4 * MT, lT[pT(lT, MT)])
    }

    function nT() {
      return {
        key: [],
        texels: new Uint8Array(4 * MT.i)
      }
    }
    const HT = [];

    function kT(TT, UT) {
      return jT(TT, HT), !vT(HT, UT.key) && (UT.key.length = 0, UT.key.push(...HT), UT.key.length > 0 && function(TT, UT) {
        for (let mT = 0; mT < MT.i; mT++) zT.j.GetCurrentGradient(mT / MT.i, TT, ((TT, UT, mT) => {
          WT.Color3.LerpToRef(TT.color, UT.color, mT, lT)
        })), UT[4 * mT] = 255 * lT.r, UT[4 * mT + 1] = 255 * lT.g, UT[4 * mT + 2] = 255 * lT.b, UT[4 * mT + 3] = 255
      }(TT.getRampGradients(), UT.texels), !0)
    }

    function jT(TT, UT) {
      UT.length = 0;
      const mT = TT.useRampGradients ? TT.getRampGradients() : null;
      if (null !== mT && void 0 !== mT && mT.length) {
        UT.push(mT.length);
        for (const TT of mT) UT.push(TT.gradient, TT.color.r, TT.color.g, TT.color.b)
      }
    }
    const lT = new WT.Color3;

    function LT(TT, UT, mT, WT) {
      return UT ? UT.length > MT.b ? (WT(`particleStops:${mT}`, `GPU particles use the first 2 and last ${MT.b-2} of more than ${MT.b} ${mT} gradient stops (${TT.name})`), MT.b) : UT.length : 0
    }

    function pT(TT, UT) {
      return UT < 2 || TT.length <= MT.b ? UT : TT.length - MT.b + UT
    }
    const BT = new Float32Array(MT.n),
      ZT = new Uint32Array(BT.buffer);

    function cT(TT, UT, mT) {
      return gT(TT, BT, ZT, mT), UT && vT(ZT, UT) ? null : ZT.slice()
    }

    function vT(TT, UT) {
      if (TT.length !== UT.length) return !1;
      for (let mT = 0; mT < TT.length; mT++)
        if (TT[mT] !== UT[mT]) return !1;
      return !0
    }

    function fT(TT, UT, mT) {
      var WT;
      TT[UT] = mT.gradient, TT[UT + 1] = mT.factor1, TT[UT + 2] = null !== (WT = mT.factor2) && void 0 !== WT ? WT : mT.factor1
    }
  },
  41300: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      const WT = UT * UT * 4,
        zT = TT[0].layers,
        MT = zT * (TT.length - 1) + TT[TT.length - 1].layers,
        gT = new Uint8Array(MT * WT);
      TT.forEach(((UT, mT) => {
        const MT = mT + 1 < TT.length ? Math.min(UT.layers, zT) : UT.layers;
        gT.set(new Uint8Array(UT.pixels.buffer, UT.pixels.byteOffset, MT * WT), mT * zT * WT)
      }));
      const nT = Math.max(1, Math.min(MT, mT || MT));
      if (nT === MT) return [{
        pixels: gT,
        layers: MT
      }];
      const HT = [];
      for (let kT = 0; kT < MT; kT += nT) {
        const TT = Math.min(MT, kT + nT);
        HT.push({
          pixels: gT.slice(kT * WT, TT * WT),
          layers: TT - kT
        })
      }
      return HT
    }
    mT.d(UT, {
      e: () => WT,
      h: () => MT
    });
    const zT = new WeakMap;

    function MT(TT, UT, mT) {
      var WT, MT;
      const gT = null !== (WT = zT.get(TT)) && void 0 !== WT ? WT : new Map;
      zT.set(TT, gT);
      const nT = null !== (MT = gT.get(UT[0])) && void 0 !== MT ? MT : [];
      gT.set(UT[0], nT);
      const HT = nT.find((TT => TT.urls.length === UT.length && TT.urls.every(((TT, mT) => TT === UT[mT]))));
      if (HT) return HT.built;
      const kT = {
        urls: [...UT],
        built: mT()
      };
      return nT.push(kT), kT.built.catch((() => {
        nT.splice(nT.indexOf(kT), 1)
      })), kT.built
    }
  },
  41737: (TT, UT, mT) => {
    function WT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const UT = new Set;
      return (mT, WT) => {
        UT.has(mT) || (UT.add(mT), console.warn(TT + WT))
      }
    }
    mT.d(UT, {
      c: () => WT
    })
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);