export const id = 0;
export const ids = [0];
export const modules = {
  40286: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      addBabylonLights: () => xc,
      default: () => mc
    });
    var FJ = ZJ(40289),
      UJ = (ZJ(38779), ZJ(39980), ZJ(39250), ZJ(40302)),
      eJ = ZJ(38624),
      XJ = ZJ(36229),
      AJ = ZJ(36165),
      qJ = ZJ(40315),
      jJ = ZJ(40322),
      YJ = ZJ(36125),
      hJ = (ZJ(39993), ZJ(40327)),
      DJ = ZJ(40325),
      sJ = ZJ(37691),
      nJ = ZJ(40329),
      GJ = ZJ(38658),
      fJ = ZJ(37680);
    const xJ = "gpuParticles",
      rJ = fJ.q,
      vJ = JJ => JJ / 4,
      mJ = JJ => `gpuParticleSystem[${JJ>>2}].${"xyzw"[3&JJ]}`,
      QJ = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${fJ.d}\n#define COLOR_POSITIONS ${vJ(rJ.colorPositions)}\n#define COLOR1 ${vJ(rJ.color1)}\n#define COLOR2 ${vJ(rJ.color2)}\n#define VELOCITY ${vJ(rJ.jf)}\n#define REMAP ${vJ(rJ.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${fJ.m/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${mJ(rJ.gravity)}, ${mJ(rJ.gravity+1)}, ${mJ(rJ.gravity+2)}); }\nint colorCount() { return int(${mJ(rJ.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${vJ(rJ.colorDead)}]; }\nint velocityCount() { return int(${mJ(rJ.velocityCount)}); }\nint remapCount() { return int(${mJ(rJ.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    GJ.b.ShadersStore[`${xJ}VertexShader`] = QJ, GJ.b.ShadersStore[`${xJ}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const EJ = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      VJ = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var KJ = ZJ(37673),
      yJ = ZJ(40336);
    class SJ extends KJ.e {
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, cJ, ZJ), this.renderer = ZJ, this.iG = FJ, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(fJ.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, yJ.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (JJ, cJ) => {
          const {
            engine: ZJ,
            perRow: FJ
          } = this, UJ = ZJ._gl;
          ZJ._bindTextureDirectly(UJ.TEXTURE_2D, this.records, !0), ZJ._unpackFlipY(!1);
          const eJ = this.ring.recordBits;
          for (let XJ = JJ; XJ < cJ;) {
            const JJ = Math.floor(XJ / FJ),
              ZJ = Math.min(cJ, (JJ + 1) * FJ);
            UJ.texSubImage2D(UJ.TEXTURE_2D, 0, XJ % FJ * 4, JJ, 4 * (ZJ - XJ), 1, UJ.RGBA_INTEGER, UJ.UNSIGNED_INT, eJ, XJ * fJ.h), XJ = ZJ
          }
          ZJ._bindTextureDirectly(UJ.TEXTURE_2D, null)
        }, this.id = JJ;
        const UJ = FJ.gn();
        this.engine = UJ;
        const eJ = Math.max(1, cJ);
        this.perRow = Math.min(eJ, 256), this.records = UJ.createRawTexture(null, 4 * this.perRow, Math.ceil(eJ / this.perRow), hJ.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, hJ.c.TEXTURE_NEAREST_SAMPLINGMODE, null, hJ.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.iG.getAnimationRatio() || 1;
        const cJ = this.iG.getFrameId();
        if (cJ === this.animatedFrame) return !1;
        const ZJ = super.animate(JJ);
        return ZJ && (this.animatedFrame = cJ, this.ring.takeUploads(this.uploadSlots)), ZJ
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(JJ) {
        (0, yJ.f)(this, this.uniforms, this.uniformBits, JJ);
        for (const ZJ of fJ.o) this.uniforms[ZJ] = this.uniformBits[ZJ];
        var cJ;
        (0, yJ.g)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (cJ = this.ramp) || void 0 === cJ || cJ.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = DJ.e.CreateRGBATexture(this.rampTexels.texels, fJ.l, 1, this.iG, !1, !1, hJ.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var JJ;
        this.records.dispose(), null === (JJ = this.ramp) || void 0 === JJ || JJ.dispose(), this.ramp = null
      }
    }
    class IJ {
      constructor(JJ) {
        this.iG = JJ, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, nJ.e)(), this.engine = JJ.gn(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = DJ.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, JJ, !1, !1, hJ.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      yI(JJ, cJ) {
        const ZJ = 256 * this.engine.getCaps().maxTextureSize;
        cJ > ZJ && this.warnOnce(`capacity:${JJ}`, `particle system ${JJ} holds ${ZJ} particles, not ${cJ}: its records texture's limit`);
        const FJ = new SJ(JJ, Math.min(cJ, ZJ), this, this.iG);
        return this.iG.addParticleSystem(FJ), FJ
      }
      canDraw(JJ) {
        var cJ, ZJ;
        if (this.failed || null === (cJ = JJ.texture) || void 0 === cJ || null === (ZJ = cJ.mirror) || void 0 === ZJ || !ZJ.isReady()) return !1;
        for (const FJ of (0, sJ.k)(JJ.blendMode))
          if (!this.effectFor(FJ).isReady()) return !1;
        return !0
      }
      disposeStopped(JJ) {
        this.iG._toBeDisposed.push(JJ)
      }
      remove(JJ) {
        this.iG.removeParticleSystem(JJ), JJ.releaseGl()
      }
      render(JJ) {
        var cJ;
        if (!JJ.isReady() || !JJ.hasLiveParticles()) return 0;
        const {
          engine: ZJ,
          iG: FJ,
          frame: UJ
        } = this;
        JJ.prepareDraw(this.warnOnce), JJ.drawOffset(UJ, 0), UJ[3] = JJ.drawTime();
        const eJ = JJ.ring.drawStart(),
          XJ = JJ.ring.drawCount(),
          AJ = null !== (cJ = JJ.ramp) && void 0 !== cJ ? cJ : this.whiteRamp;
        ZJ.setState(!1);
        for (const qJ of (0, sJ.k)(JJ.blendMode)) {
          const cJ = this.effectFor(qJ);
          ZJ.enableEffect(cJ), cJ.setTexture("gpuParticleTexture", JJ.texture.mirror), cJ.setTexture("gpuParticleRampTexture", AJ), cJ._bindTexture("gpuParticleRecords", JJ.records), cJ.setMatrix("gpuParticleView", FJ.getViewMatrix()), cJ.setMatrix("gpuParticleProjection", FJ.getProjectionMatrix()), cJ.setFloatArray4("gpuParticleSystem", JJ.uniforms), cJ.setFloat4("gpuParticleFrame", UJ[0], UJ[1], UJ[2], UJ[3]), cJ.setFloat2("gpuParticleRange", eJ, XJ), cJ.setFloat("gpuParticleRamp", JJ.uniforms[fJ.q.ramp]), ZJ.bindBuffers(this.vertexBuffers, null, cJ), ZJ.setAlphaMode((0, sJ.h)(qJ)), ZJ.drawArraysType(hJ.c.MATERIAL_TriangleStripDrawMode, 0, 4, XJ), cJ._bindTexture("gpuParticleRecords", null)
        }
        return ZJ.setAlphaMode(hJ.c.ALPHA_DISABLE), XJ
      }
      awaitLink(JJ) {
        const cJ = JJ.getPipelineContext(),
          ZJ = this.engine._gl;
        !this.failed && ZJ && (!cJ || cJ.isParallelCompiled && !cJ.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : cJ.isParallelCompiled && cJ.program && (ZJ.getProgramParameter(cJ.program, ZJ.LINK_STATUS) || this.fail(ZJ.getProgramInfoLog(cJ.program) || "a program did not link")))
      }
      effectFor(JJ) {
        return JJ === sJ.d ? this.multiplyEffect : this.effect
      }
      createEffect(JJ) {
        return this.engine.createEffect(xJ, [], EJ, VJ, JJ, void 0, void 0, ((JJ, cJ) => {
          this.fail(cJ)
        }))
      }
      fail(JJ) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${JJ}`);
          for (const JJ of this.iG.lE.slice()) JJ instanceof SJ && JJ.disposeOnStop && JJ.dispose()
        }
      }
    }
    var MJ = ZJ(38976),
      bJ = ZJ(39971),
      wJ = ZJ(38748),
      WJ = ZJ(38931),
      gJ = ZJ(38929),
      HJ = ZJ(38872),
      PJ = ZJ(40033),
      kJ = ZJ(36529),
      pJ = ZJ(40339),
      dJ = ZJ(40344),
      zJ = ZJ(40347),
      NJ = ZJ(38890),
      OJ = ZJ(36393),
      TJ = ZJ(36387),
      CJ = ZJ(39072),
      uJ = ZJ(36478),
      iJ = ZJ(36420);

    function RJ(JJ) {
      if (JJ.visibility < 1 || !JJ.isVisible || !JJ.isEnabled() || JJ.metadata[iJ.d] || !JJ.isReady()) return !0;
      const cJ = JJ.aE;
      if (!cJ || 0 === cJ.length) return !0;
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
        const FJ = cJ[ZJ],
          UJ = FJ.dn();
        if (!UJ || !UJ.isReadyForSubMesh(JJ, FJ, !1)) return !0
      }
      return !1
    }
    class LJ {
      constructor(JJ, cJ) {
        this.ih = JJ, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, cJ.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Fs(JJ) {
        var cJ;
        const ZJ = this.armed;
        if (this.armed = !1, this.vis = null, !ZJ) return !1;
        this.culled = 0;
        const {
          ih: FJ
        } = this, UJ = null === (cJ = FJ.TE) || void 0 === cJ ? void 0 : cJ.visibility;
        if (!UJ || !JJ || FJ.XG.AG) return !1;
        if (!(FJ.zh.eFJ[0] >= uJ.d)) return !1;
        const eJ = JJ.getProjectionMatrix().m;
        if (0 !== eJ[15]) return !1;
        const XJ = FJ.YD,
          AJ = JJ.globalPosition,
          qJ = this.eye;
        return qJ[0] = AJ.x + XJ[0], qJ[1] = AJ.y + XJ[1], qJ[2] = AJ.z + XJ[2], !!UJ.eyeClear(qJ[0], qJ[1], qJ[2], JJ.minZ, eJ, FJ.zh) && (this.vis = UJ, this.passable.clear(), this.count = 0, !0)
      }
      see(JJ, cJ) {
        const ZJ = this.count++;
        if (ZJ === this.cellSlots.length) {
          const JJ = new Int32Array(2 * ZJ);
          JJ.set(this.cellSlots), this.cellSlots = JJ
        }
        this.cellSlots[ZJ] = cJ, this.meshes[ZJ] = JJ
      }
      seeThrough(JJ) {
        this.passable.add(JJ)
      }
      finish(JJ, cJ) {
        const {
          vis: ZJ,
          eye: FJ,
          meshes: UJ,
          count: eJ,
          cellSlots: XJ
        } = this, {
          zh: AJ
        } = this.ih, [qJ, jJ] = AJ.eFJ, YJ = null !== ZJ && ZJ.update(FJ[0], FJ[1], FJ[2], AJ.hJJ, qJ, jJ, this.passable);
        let hJ = 0;
        for (let DJ = 0; DJ < eJ; DJ++) {
          const FJ = UJ[DJ];
          if (YJ) {
            const JJ = 3 * XJ[DJ];
            if (JJ >= 0 && !ZJ.isDrawn(cJ[JJ], cJ[JJ + 1], cJ[JJ + 2])) {
              hJ++;
              continue
            }
          }
          NJ.c.prototype.push.call(JJ, FJ)
        }
        UJ.fill(null, 0, eJ), this.count = 0, this.vis = null, this.culled = hJ
      }
    }
    var aJ = ZJ(36459),
      BJ = ZJ(36408),
      tJ = ZJ(39049),
      oJ = ZJ(40350),
      lJ = ZJ(39058),
      Jc = ZJ(38989);
    let cc = 1;
    const Zc = new WeakSet;

    function Fc() {
      return cc
    }

    function Uc() {
      cc = cc >= 1073741823 ? 1 : cc + 1
    }

    function ec(JJ) {
      const cJ = JJ.metadata;
      if (!cJ || !0 !== cJ[TJ.n]) return;
      const ZJ = cJ[TJ.u],
        FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ._noaStamps;
      if (!ZJ || !FJ) return;
      const UJ = ZJ.entries.indexOf(JJ);
      UJ >= 0 && (FJ[UJ] = 0)
    }

    function Xc(JJ) {
      const cJ = JJ.aE;
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
        const JJ = cJ[ZJ].dn();
        if (JJ && !JJ.isFrozen) return !1
      }
      for (let ZJ = 0; ZJ < cJ.length; ZJ++) {
        const JJ = cJ[ZJ].dn();
        JJ && Zc.add(JJ)
      }
      return !0
    }
    let Ac = !1;
    const qc = new WeakSet;

    function jc(JJ, cJ) {
      const ZJ = JJ[cJ];
      if ("function" !== typeof ZJ) throw new Error(`terrainDrawState: Babylon has no ${cJ} to hook`);
      return ZJ
    }

    function Yc(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = ZJ.zh.hJJ,
        XJ = new Map;
      let AJ = 0;
      const qJ = new LJ(ZJ, JJ),
        jJ = new aJ.c(eJ, JJ.gn());
      ! function(JJ) {
        if (qc.has(JJ) || (qc.add(JJ), JJ.onContextLostObservable.add(Uc), JJ.onContextRestoredObservable.add(Uc)), Ac) return;
        Ac = !0;
        const cJ = oJ.d.prototype,
          ZJ = jc(cJ, "_markSubMeshesAsDirty");
        Object.assign(cJ, {
          _markSubMeshesAsDirty(JJ) {
            ZJ.call(this, JJ), ec(this)
          }
        });
        const FJ = jc(Jc.b.prototype, "_syncParentEnabledState");
        Object.assign(Jc.b.prototype, {
          _syncParentEnabledState() {
            FJ.call(this), ec(this)
          }
        });
        const UJ = jc(lJ.e.prototype, "resetDrawCache");
        lJ.e.prototype.resetDrawCache = function(JJ, cJ) {
          UJ.call(this, JJ, cJ), ec(this.getMesh())
        };
        const eJ = tJ.c.prototype,
          XJ = jc(eJ, "markDirty");
        eJ.markDirty = function(JJ) {
          XJ.call(this, JJ), Zc.has(this) && Uc()
        };
        const AJ = jc(eJ, "_markAllSubMeshesAsDirty");
        Object.assign(eJ, {
          _markAllSubMeshesAsDirty(JJ) {
            AJ.call(this, JJ), Zc.has(this) && Uc()
          }
        })
      }(JJ.gn());
      let YJ = new Float64Array(384),
        hJ = new Int32Array(64),
        DJ = new Uint8Array(64),
        sJ = new Float64Array(64),
        nJ = new Int32Array(192),
        GJ = 0;
      const fJ = [],
        xJ = new Float64Array(24),
        rJ = () => {
          const JJ = fJ.pop();
          return void 0 !== JJ ? (hJ[JJ] = 0, JJ) : (GJ === hJ.length && (YJ = hc(YJ, new Float64Array(2 * YJ.length)), hJ = hc(hJ, new Int32Array(2 * hJ.length)), DJ = hc(DJ, new Uint8Array(2 * DJ.length)), sJ = hc(sJ, new Float64Array(2 * sJ.length)), nJ = hc(nJ, new Int32Array(2 * nJ.length))), GJ++)
        },
        vJ = JJ => {
          const cJ = 6 * JJ._noaSlot,
            ZJ = JJ.DFJ[0],
            FJ = JJ.DFJ[1];
          YJ[cJ] = ZJ.x, YJ[cJ + 1] = ZJ.y, YJ[cJ + 2] = ZJ.z, YJ[cJ + 3] = FJ.x, YJ[cJ + 4] = FJ.y, YJ[cJ + 5] = FJ.z
        },
        mJ = (JJ, cJ, ZJ) => {
          if (!ZJ) return qJ.see(JJ, -1), !1;
          const FJ = RJ(JJ);
          return FJ && qJ.seeThrough(sJ[cJ]), qJ.see(JJ, cJ), !FJ
        };
      let QJ = -1;
      return JJ.getActiveMeshCandidates = () => {
        const ZJ = JJ.frustumPlanes,
          FJ = cJ._selectionContent;
        FJ.reset(), (ZJ => {
          const FJ = JJ.frustumPlanes;
          AJ = AJ + 1 | 0 || 1;
          const UJ = cJ.blocks,
            eJ = qJ.Fs(JJ.activeCamera),
            XJ = eJ && !0;
          if (XJ) {
            const cJ = JJ.gn().currentRenderPassId;
            cJ !== QJ && (QJ = cJ, Uc())
          }
          const jJ = Fc(),
            sJ = XJ && !1;
          UJ.length > 0 && function(JJ, cJ) {
            for (let ZJ = 0; ZJ < 6; ZJ++) {
              const FJ = JJ[ZJ],
                UJ = FJ.normal;
              cJ[4 * ZJ] = UJ.x, cJ[4 * ZJ + 1] = UJ.y, cJ[4 * ZJ + 2] = UJ.z, cJ[4 * ZJ + 3] = FJ.d
            }
          }(FJ, xJ);
          const GJ = YJ,
            fJ = hJ,
            rJ = DJ;
          for (let JJ = 0; JJ < UJ.length; JJ++) {
            const cJ = UJ[JJ];
            if (!CJ.e.IsInFrustum(cJ.DFJ, FJ)) continue;
            const YJ = cJ.entries;
            {
              const JJ = cJ._noaSlots,
                FJ = cJ._noaStamps,
                UJ = cJ._noaTerrain;
              for (let cJ = 0; cJ < YJ.length; cJ++) {
                const hJ = JJ[cJ];
                if (fJ[hJ] !== AJ && (fJ[hJ] = AJ, rJ[hJ] = Dc(GJ, 6 * hJ, xJ) ? 1 : 0), 0 === rJ[hJ]) continue;
                const DJ = YJ[cJ];
                if (XJ && FJ[cJ] === jJ) sJ && 1 === UJ[cJ] && RJ(DJ) && 0, qJ.see(DJ, 1 === UJ[cJ] ? hJ : -1);
                else if (XJ) {
                  FJ[cJ] = jJ;
                  const JJ = !0 === DJ.metadata[BJ.o];
                  UJ[cJ] = JJ ? 1 : 0;
                  const ZJ = mJ(DJ, hJ, JJ);
                  !JJ || ZJ && Xc(DJ) || (FJ[cJ] = 0)
                } else eJ ? mJ(DJ, hJ, !0 === DJ.metadata[BJ.o]) : NJ.c.prototype.push.call(ZJ, DJ)
              }
              continue
            }
          }
          eJ && qJ.finish(ZJ, nJ)
        })(FJ), jJ.apply(FJ, JJ.activeCamera);
        const eJ = cJ.hFJ;
        for (let JJ = 0; JJ < eJ.length; JJ++) {
          const cJ = eJ[JJ];
          cJ.isEnabled() && NJ.c.prototype.push.call(FJ, cJ)
        }
        return UJ(FJ, ZJ), FJ
      }, {
        sFJ: () => qJ.culled,
        BZJ: (JJ, cJ) => {
          const UJ = Math.floor(cJ[0] / eJ),
            AJ = Math.floor(cJ[1] / eJ),
            qJ = Math.floor(cJ[2] / eJ),
            jJ = `${UJ}|${AJ}|${qJ}`;
          let YJ = XJ.get(jJ);
          if (!YJ) {
            const JJ = [0, 0, 0];
            ZJ.JcJ([UJ * eJ - 1, AJ * eJ - 1, qJ * eJ - 1], null, JJ), YJ = Object.assign(FJ(JJ, eJ + 2), {
              nFJ: jJ,
              GFJ: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: rJ()
            }), vJ(YJ), sJ[YJ._noaSlot] = (0, OJ.h)(UJ, AJ, qJ), nJ[3 * YJ._noaSlot] = UJ, nJ[3 * YJ._noaSlot + 1] = AJ, nJ[3 * YJ._noaSlot + 2] = qJ, XJ.set(jJ, YJ)
          }
          YJ.GFJ++, JJ.metadata[TJ.w] = YJ
        },
        kS: JJ => {
          const cJ = JJ.metadata[TJ.w];
          cJ && (cJ.GFJ--, cJ.GFJ <= 0 && (XJ.delete(cJ.nFJ), fJ.push(cJ._noaSlot)), JJ.metadata[TJ.w] = null)
        },
        YFJ: (JJ, cJ) => {
          const ZJ = JJ,
            FJ = cJ.metadata[TJ.w];
          (ZJ._noaSlots ??= []).push(FJ._noaSlot), (ZJ._noaStamps ??= []).push(0), (ZJ._noaTerrain ??= []).push(0), ZJ.entries.push(cJ)
        },
        removeEntry: (JJ, cJ) => {
          const ZJ = JJ,
            FJ = ZJ.entries,
            UJ = FJ.indexOf(cJ);
          if (UJ < 0) return;
          const eJ = ZJ._noaSlots,
            XJ = ZJ._noaStamps,
            AJ = ZJ._noaTerrain,
            qJ = FJ.length - 1;
          FJ[UJ] = FJ[qJ], eJ[UJ] = eJ[qJ], XJ[UJ] = XJ[qJ], AJ[UJ] = AJ[qJ], FJ.pop(), eJ.pop(), XJ.pop(), AJ.pop()
        },
        J9: JJ => {
          for (const cJ of XJ.values()) {
            cJ.ZFJ.xFJ(JJ), cJ.cFJ.xFJ(JJ);
            for (const ZJ of cJ.DFJ) ZJ.xFJ(JJ);
            vJ(cJ)
          }
        }
      }
    }

    function hc(JJ, cJ) {
      return cJ.set(JJ), cJ
    }

    function Dc(JJ, cJ, ZJ) {
      const FJ = JJ[cJ],
        UJ = JJ[cJ + 1],
        eJ = JJ[cJ + 2],
        XJ = JJ[cJ + 3],
        AJ = JJ[cJ + 4],
        qJ = JJ[cJ + 5];
      for (let jJ = 0; jJ < 24; jJ += 4) {
        const JJ = ZJ[jJ],
          cJ = ZJ[jJ + 1],
          YJ = ZJ[jJ + 2];
        if (!(JJ * (JJ >= 0 ? XJ : FJ) + cJ * (cJ >= 0 ? AJ : UJ) + YJ * (YJ >= 0 ? qJ : eJ) + ZJ[jJ + 3] >= 0)) return !1
      }
      return !0
    }
    var sc = ZJ(36753);
    class nc {
      constructor(JJ, cJ) {
        var ZJ = JJ.iG;
        ZJ.pZJ(new zJ.d(ZJ));
        var FJ = new pJ.e(qJ);
        ZJ.vFJ = FJ, FJ.blocks = [];
        var UJ, eJ = {},
          XJ = [];
        this.textPlanes = XJ, this.sFJ = () => UJ.sFJ(), this.J9 = JJ => {
          YJ(FJ, JJ), UJ.J9(JJ)
        }, this.BZJ = (cJ, ZJ, AJ) => {
          if (!cJ.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!cJ.metadata[TJ.u] && !cJ.metadata[TJ.j]) {
            if (!ZJ) {
              var qJ = FJ.hFJ;
              if (cJ.metadata[TJ.B] && !cJ.parent) {
                qJ = XJ;
                var YJ = cJ.rM().QFJ;
                cJ.metadata[TJ.C] = YJ.center.length() + YJ.radius, cJ.Hn = !0
              }
              return qJ.push(cJ), cJ.metadata[TJ.h] = qJ, void(cJ.metadata[TJ.j] = !0)
            }
            var DJ = Math.floor(AJ[0] / jJ),
              sJ = Math.floor(AJ[1] / jJ),
              nJ = Math.floor(AJ[2] / jJ),
              GJ = DJ + "|" + sJ + "|" + nJ,
              fJ = eJ[GJ];
            if (!fJ) {
              var xJ = [DJ * jJ, sJ * jJ, nJ * jJ],
                rJ = [0, 0, 0];
              JJ.ih.JcJ(xJ, null, rJ), fJ = hJ(rJ, jJ), FJ.blocks.push(fJ), eJ[GJ] = fJ, fJ.nFJ = GJ
            }
            UJ.BZJ(cJ, AJ), UJ.YFJ(fJ, cJ), fJ.GFJ = (fJ.GFJ || 0) + 1, cJ.metadata[TJ.u] = fJ, cJ.metadata[TJ.n] = !0, cJ.Hn = !0
          }
        }, this.kS = JJ => {
          if (JJ.metadata) {
            JJ.metadata[TJ.j] && ((0, OJ.j)(JJ.metadata[TJ.h], JJ), JJ.metadata[TJ.j] = !1), JJ.metadata[TJ.h] === XJ && (JJ.Hn = !1), JJ.metadata[TJ.h] = void 0, JJ.metadata[TJ.C] = void 0;
            var cJ = JJ.metadata[TJ.u];
            cJ && cJ.entries && (JJ.metadata[TJ.n] && UJ.removeEntry(cJ, JJ), cJ.GFJ--, cJ.GFJ <= 0 && (delete eJ[cJ.nFJ], (0, OJ.j)(FJ.blocks, cJ))), UJ.kS(JJ), JJ.metadata[TJ.u] = null, JJ.metadata[TJ.n] = !1
          }
        }, this.w6 = function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (JJ.metadata[TJ.u]) {
            if (JJ.metadata[TJ.n] === cJ) return;
            var ZJ = JJ.metadata[TJ.u];
            ZJ && ZJ.entries && (cJ ? UJ.YFJ(ZJ, JJ) : UJ.removeEntry(ZJ, JJ)), JJ.metadata[TJ.n] = cJ
          } else {
            if (JJ.metadata[TJ.j] === cJ) return;
            var eJ = JJ.metadata[TJ.h] || FJ.hFJ;
            cJ ? eJ.push(JJ) : (0, OJ.j)(eJ, JJ), JJ.metadata[TJ.j] = cJ
          }
        };
        var qJ = () => {},
          jJ = cJ * JJ.ih.zh.hJJ,
          YJ = (JJ, cJ) => {
            JJ.blocks.forEach((JJ => {
              JJ.ZFJ.xFJ(cJ), JJ.cFJ.xFJ(cJ), JJ.DFJ.forEach((JJ => JJ.xFJ(cJ))), JJ.blocks && YJ(JJ, cJ)
            }))
          },
          hJ = (JJ, cJ) => {
            var ZJ = new AJ.Pn(JJ[0], JJ[1], JJ[2]),
              FJ = new AJ.Pn(JJ[0] + cJ, JJ[1] + cJ, JJ[2] + cJ);
            return new dJ.c(ZJ, FJ, void 0, void 0, void 0, qJ)
          };
        UJ = Yc(ZJ, FJ, JJ.ih, hJ, ((JJ, cJ) => {
          for (var ZJ = 0; ZJ < XJ.length; ZJ++) {
            var FJ = XJ[ZJ];
            FJ.isEnabled(!1) && ((0, sc.c)(FJ, cJ) && NJ.c.prototype.push.call(JJ, FJ))
          }
        }))
      }
    }

    function Gc(JJ) {
      const {
        holderPosition: cJ,
        holderRotation: ZJ,
        fL: FJ,
        fov: UJ,
        near: eJ,
        far: XJ
      } = JJ.model.sL, AJ = JJ.MFJ;
      AJ.position.K9(cJ[0], cJ[1], cJ[2]), AJ.rotation.K9(ZJ[0], ZJ[1], ZJ[2]);
      const qJ = JJ.camera;
      qJ.position.K9(FJ[0], FJ[1], FJ[2]), qJ.fov = UJ, qJ.minZ = eJ, qJ.maxZ = XJ
    }

    function fc(JJ) {
      const cJ = JJ.gn(),
        ZJ = cJ,
        FJ = ZJ._gl;
      if (!FJ || ZJ.nG < 2 || cJ.LZJ || FJ.getParameter(FJ.DEPTH_BITS) < 24) return !1;
      const UJ = JJ._renderingManager,
        eJ = UJ.getRenderingGroup(-1),
        XJ = UJ.getRenderingGroup(0),
        AJ = WJ.c.prototype.render;
      return eJ.render = function(JJ, cJ, ZJ, FJ, UJ, eJ, qJ, jJ, YJ) {
        (JJ || XJ._empty) && AJ.call(this, JJ, cJ, ZJ, FJ, UJ, eJ, qJ, jJ, YJ)
      }, XJ.render = function(JJ, ZJ, UJ, XJ) {
        let qJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          jJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          YJ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          DJ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          sJ = arguments.length > 8 ? arguments[8] : void 0;
        JJ ? AJ.call(this, JJ, ZJ, UJ, XJ, qJ, jJ, YJ, DJ, sJ) : (cJ.setAlphaMode(hJ.c.ALPHA_DISABLE), AJ.call(this, null, !1, !1, XJ, qJ, jJ, YJ, !1), eJ._empty || (FJ.depthRange(1, 1), AJ.call(eJ, null, ZJ, UJ, XJ, qJ, jJ, YJ, DJ, sJ), FJ.depthRange(0, 1)), AJ.call(this, null, ZJ, UJ, XJ, !1, !1, !1, DJ, sJ))
      }, !0
    }

    function xc(JJ, cJ) {
      return [cJ, kJ.f].map(((cJ, ZJ) => {
        const FJ = new UJ.d("light", AJ.Pn.FromArray(cJ), JJ);
        return FJ.diffuse = XJ.Color3.FromArray([1, 1, 1]), FJ.specular = XJ.Color3.FromArray([1, 1, 1]), FJ.intensity = kJ.b[ZJ], FJ
      }))
    }
    class rc extends jJ.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(JJ) {
        var cJ;
        this.heldTexture = JJ, this.particleTexture = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.mirror) && void 0 !== cJ ? cJ : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let JJ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        JJ && (this.particleTexture = null, (0, YJ.D)(this.heldTexture), this.heldTexture = null), super.dispose(JJ, cJ, ZJ)
      }
    }
    const vc = FJ.b.Zero();
    const mc = {
      HFJ: function(JJ, cJ) {
        return new eJ.e(JJ, cJ.AZJ, {
          preserveDrawingBuffer: cJ.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      WFJ: function(JJ, cJ) {
        ! function(JJ, cJ, ZJ) {
          const FJ = new HJ.b(JJ.engine);
          JJ.iG = FJ, FJ.detachControl(), FJ.autoClear = !1, gJ.b.MIN_RENDERINGGROUPS = -1;
          for (let eJ = gJ.b.MIN_RENDERINGGROUPS; eJ <= 1; eJ++) FJ.setRenderingOrder(eJ, WJ.c.PainterSortCompare, WJ.c.PainterSortCompare, WJ.c.PainterSortCompare);
          FJ.setRenderingAutoClearDepthStencil(0, !1), wJ.b.Enabled = !1, JJ.yFJ = new nc(JJ, Math.round(cJ.SFJ)), JJ.MFJ = new bJ.e("camHolder", FJ), JJ.camera = new MJ.e("camera", new AJ.Pn(0, 0, 0), FJ), JJ.camera.parent = JJ.MFJ, Gc(JJ), (0, kJ.h)(JJ, ((JJ, cJ, ZJ) => (0, PJ.g)(cJ, ZJ, JJ.iG))), FJ.clearColor = XJ.e.FromArray(cJ.clearColor), FJ.ambientColor = XJ.Color3.FromArray(cJ.ambientColor);
          const UJ = ZJ(FJ, cJ.wFJ);
          FJ.onNewLightAddedObservable.add((JJ => {
            UJ.some((cJ => cJ === JJ)) || console.error(`Light "${JJ.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), FJ.skipPointerMovePicking = !0
        }(JJ, cJ, xc), fc(JJ.iG)
      },
      IFJ: Gc,
      setBabylonFog: function(JJ, cJ, ZJ, FJ) {
        const UJ = JJ.iG;
        UJ.fogMode = 3, UJ.fogStart = cJ, UJ.fogEnd = ZJ, UJ.fogColor.set(FJ[0], FJ[1], FJ[2])
      },
      PFJ: function(JJ, cJ, ZJ) {
        return JJ.engine.nG >= 2 && (JJ.kFJ || (JJ.kFJ = new IJ(JJ.iG)), !JJ.kFJ.failed) ? JJ.kFJ.yI(cJ, ZJ) : new rc(cJ, ZJ, JJ.iG)
      },
      dFJ: function(JJ, cJ) {
        JJ.iG.lE.forEach((ZJ => {
          if (ZJ instanceof SJ) return void ZJ.J9(cJ, JJ.ih.YD);
          const FJ = ZJ;
          if (FJ.emitter.getConnectedParticleSystems)
            for (const JJ of FJ._particles) JJ.position.set(JJ.position.x - cJ[0], JJ.position.y - cJ[1], JJ.position.z - cJ[2]);
          else {
            if (!FJ.worldOffset) throw new Error("Particle system has no world offset");
            FJ.worldOffset.x = -JJ.ih.YD[0], FJ.worldOffset.y = -JJ.ih.YD[1], FJ.worldOffset.z = -JJ.ih.YD[2]
          }
        }))
      },
      linesFromArrays: function(JJ, cJ, ZJ) {
        const FJ = new qJ.e(cJ, JJ.iG, null, void 0, void 0, !1);
        return (0, PJ.f)(cJ, ZJ, JJ.iG, FJ), FJ
      },
      LG: ec,
      pFJ: function(JJ, cJ) {
        return vc.origin.rZJ(cJ.origin), vc.direction.rZJ(cJ.direction), vc.length = cJ.length, vc.epsilon = cJ.epsilon, vc.pFJ(JJ, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40336: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => fJ,
      e: () => AJ,
      f: () => XJ,
      g: () => jJ
    });
    var FJ = ZJ(36229),
      UJ = ZJ(37683),
      eJ = ZJ(37680);

    function XJ(JJ, cJ, ZJ, FJ) {
      const UJ = eJ.q;
      cJ.fill(0), JJ.gravity.toArray(cJ, UJ.gravity), JJ.colorDead.toArray(cJ, UJ.colorDead), ZJ[UJ.ramp] = JJ.useRampGradients ? 1 : 0;
      const XJ = JJ.getColorGradients(),
        AJ = DJ(JJ, XJ, "colour", FJ);
      ZJ[UJ.colorCount] = AJ;
      for (let eJ = 0; eJ < AJ; eJ++) {
        var qJ;
        const JJ = XJ[sJ(XJ, eJ)];
        cJ[UJ.colorPositions + eJ] = JJ.gradient, JJ.color1.toArray(cJ, UJ.color1 + 4 * eJ), (null !== (qJ = JJ.color2) && void 0 !== qJ ? qJ : JJ.color1).toArray(cJ, UJ.color2 + 4 * eJ)
      }
      const jJ = JJ.getVelocityGradients(),
        YJ = DJ(JJ, jJ, "jf", FJ);
      ZJ[UJ.velocityCount] = YJ;
      for (let eJ = 0; eJ < YJ; eJ++) rJ(cJ, UJ.jf + 4 * eJ, jJ[sJ(jJ, eJ)]);
      const hJ = JJ.useRampGradients ? JJ.getColorRemapGradients() : null,
        nJ = DJ(JJ, hJ, "colour remap", FJ);
      ZJ[UJ.remapCount] = nJ;
      for (let eJ = 0; eJ < nJ; eJ++) rJ(cJ, UJ.remap + 4 * eJ, hJ[sJ(hJ, eJ)])
    }

    function AJ() {
      return {
        key: [],
        texels: new Uint8Array(4 * eJ.l)
      }
    }
    const qJ = [];

    function jJ(JJ, cJ) {
      return YJ(JJ, qJ), !xJ(qJ, cJ.key) && (cJ.key.length = 0, cJ.key.push(...qJ), cJ.key.length > 0 && function(JJ, cJ) {
        for (let ZJ = 0; ZJ < eJ.l; ZJ++) UJ.j.GetCurrentGradient(ZJ / eJ.l, JJ, ((JJ, cJ, ZJ) => {
          FJ.Color3.LerpToRef(JJ.color, cJ.color, ZJ, hJ)
        })), cJ[4 * ZJ] = 255 * hJ.r, cJ[4 * ZJ + 1] = 255 * hJ.g, cJ[4 * ZJ + 2] = 255 * hJ.b, cJ[4 * ZJ + 3] = 255
      }(JJ.getRampGradients(), cJ.texels), !0)
    }

    function YJ(JJ, cJ) {
      cJ.length = 0;
      const ZJ = JJ.useRampGradients ? JJ.getRampGradients() : null;
      if (null !== ZJ && void 0 !== ZJ && ZJ.length) {
        cJ.push(ZJ.length);
        for (const JJ of ZJ) cJ.push(JJ.gradient, JJ.color.r, JJ.color.g, JJ.color.b)
      }
    }
    const hJ = new FJ.Color3;

    function DJ(JJ, cJ, ZJ, FJ) {
      return cJ ? cJ.length > eJ.d ? (FJ(`particleStops:${ZJ}`, `GPU particles use the first 2 and last ${eJ.d-2} of more than ${eJ.d} ${ZJ} gradient stops (${JJ.name})`), eJ.d) : cJ.length : 0
    }

    function sJ(JJ, cJ) {
      return cJ < 2 || JJ.length <= eJ.d ? cJ : JJ.length - eJ.d + cJ
    }
    const nJ = new Float32Array(eJ.m),
      GJ = new Uint32Array(nJ.buffer);

    function fJ(JJ, cJ, ZJ) {
      return XJ(JJ, nJ, GJ, ZJ), cJ && xJ(GJ, cJ) ? null : GJ.slice()
    }

    function xJ(JJ, cJ) {
      if (JJ.length !== cJ.length) return !1;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++)
        if (JJ[ZJ] !== cJ[ZJ]) return !1;
      return !0
    }

    function rJ(JJ, cJ, ZJ) {
      var FJ;
      JJ[cJ] = ZJ.gradient, JJ[cJ + 1] = ZJ.factor1, JJ[cJ + 2] = null !== (FJ = ZJ.factor2) && void 0 !== FJ ? FJ : ZJ.factor1
    }
  },
  40329: (JJ, cJ, ZJ) => {
    function FJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const cJ = new Set;
      return (ZJ, FJ) => {
        cJ.has(ZJ) || (cJ.add(ZJ), console.warn(JJ + FJ))
      }
    }
    ZJ.d(cJ, {
      e: () => FJ
    })
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);