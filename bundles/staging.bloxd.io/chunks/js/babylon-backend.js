export const id = 0;
export const ids = [0];
export const modules = {
  40497: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      CapeMaterialPlugin: () => xU,
      HueTintMaterialPlugin: () => mU,
      LifeformMaterialPlugin: () => IU,
      OverlayMaterialPlugin: () => JU
    });
    var tU = gU(40505),
      pU = gU(37549);
    class EU extends((0, tU.f)(pU.d)) {}(0, tU.h)(pU.d, EU);
    var PU = gU(36670);
    class TU extends((0, tU.f)(PU.i)) {}(0, tU.h)(PU.i, TU);
    var qU = gU(37377);
    class KU extends((0, tU.f)(qU.f)) {}(0, tU.h)(qU.f, KU);
    var cU = gU(36925),
      GU = gU(39648),
      jU = gU(36921);
    class uU extends((0, tU.f)(jU.h)) {
      constructor(UU, RU, gU) {
        super(UU, RU, gU), (0, cU.h)(UU)
      }
      dispose(UU) {
        (0, cU.l)(this._material), super.dispose(UU)
      }
    }(0, tU.h)(jU.h, uU), (0, jU.i)({
      disableUnusedSpecularTerm: tU.d,
      isLightingDisabled: UU => UU instanceof GU.StandardMaterial && UU.disableLighting
    });
    var CU = gU(38247);
    class hU extends((0, tU.f)(CU.g)) {}(0, tU.h)(CU.g, hU);
    var QU = gU(38350),
      eU = gU(36765),
      WU = gU(37682),
      fU = gU(36712);
    class xU extends((0, tU.f)(QU.c)) {}(0, tU.h)(QU.c, xU);
    class mU extends((0, tU.f)(eU.d)) {}(0, tU.h)(eU.d, mU);
    class IU extends((0, tU.f)(WU.k)) {}(0, tU.h)(WU.k, IU);
    class JU extends((0, tU.f)(fU.b)) {}(0, tU.h)(fU.b, JU)
  },
  40931: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      addBabylonLights: () => eR,
      default: () => xR
    });
    var tU = gU(40934),
      pU = (gU(39356), gU(40494), gU(39864), gU(40946)),
      EU = gU(39196),
      PU = gU(36754),
      TU = gU(36593),
      qU = gU(40960),
      KU = gU(40963),
      cU = gU(36707),
      GU = (gU(40505), gU(40975)),
      jU = gU(40966),
      uU = gU(38272),
      CU = gU(40981),
      hU = gU(39225),
      QU = gU(38253);
    const eU = "gpuParticles",
      WU = QU.s,
      fU = UU => UU / 4,
      xU = UU => `gpuParticleSystem[${UU>>2}].${"xyzw"[3&UU]}`,
      mU = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${QU.b}\n#define COLOR_POSITIONS ${fU(WU.colorPositions)}\n#define COLOR1 ${fU(WU.color1)}\n#define COLOR2 ${fU(WU.color2)}\n#define VELOCITY ${fU(WU.Fh)}\n#define REMAP ${fU(WU.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${QU.k/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${xU(WU.gravity)}, ${xU(WU.gravity+1)}, ${xU(WU.gravity+2)}); }\nint colorCount() { return int(${xU(WU.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${fU(WU.colorDead)}]; }\nint velocityCount() { return int(${xU(WU.velocityCount)}); }\nint remapCount() { return int(${xU(WU.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    hU.d.ShadersStore[`${eU}VertexShader`] = mU, hU.d.ShadersStore[`${eU}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const IU = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      JU = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var wU = gU(38250),
      nU = gU(40988);
    class bU extends wU.b {
      constructor(UU, RU, gU, tU) {
        super(UU, RU, gU), this.renderer = gU, this.Zh = tU, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(QU.k), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, nU.h)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (UU, RU) => {
          const {
            engine: gU,
            perRow: tU
          } = this, pU = gU._gl;
          gU._bindTextureDirectly(pU.TEXTURE_2D, this.records, !0), gU._unpackFlipY(!1);
          const EU = this.ring.recordBits;
          for (let PU = UU; PU < RU;) {
            const UU = Math.floor(PU / tU),
              gU = Math.min(RU, (UU + 1) * tU);
            pU.texSubImage2D(pU.TEXTURE_2D, 0, PU % tU * 4, UU, 4 * (gU - PU), 1, pU.RGBA_INTEGER, pU.UNSIGNED_INT, EU, PU * QU.d), PU = gU
          }
          gU._bindTextureDirectly(pU.TEXTURE_2D, null)
        }, this.id = UU;
        const pU = tU.WC();
        this.engine = pU;
        const EU = Math.max(1, RU);
        this.perRow = Math.min(EU, 256), this.records = pU.createRawTexture(null, 4 * this.perRow, Math.ceil(EU / this.perRow), GU.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, GU.d.TEXTURE_NEAREST_SAMPLINGMODE, null, GU.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Zh.getAnimationRatio() || 1;
        const RU = this.Zh.getFrameId();
        if (RU === this.animatedFrame) return !1;
        const gU = super.animate(UU);
        return gU && (this.animatedFrame = RU, this.ring.takeUploads(this.uploadSlots)), gU
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(UU) {
        (0, nU.i)(this, this.uniforms, this.uniformBits, UU);
        for (const gU of QU.o) this.uniforms[gU] = this.uniformBits[gU];
        var RU;
        (0, nU.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (RU = this.ramp) || void 0 === RU || RU.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = jU.e.CreateRGBATexture(this.rampTexels.texels, QU.g, 1, this.Zh, !1, !1, GU.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var UU;
        this.records.dispose(), null === (UU = this.ramp) || void 0 === UU || UU.dispose(), this.ramp = null
      }
    }
    class oU {
      constructor(UU) {
        this.Zh = UU, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, CU.b)(), this.engine = UU.WC(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = jU.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, UU, !1, !1, GU.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      aY(UU, RU) {
        const gU = 256 * this.engine.getCaps().maxTextureSize;
        RU > gU && this.warnOnce(`capacity:${UU}`, `particle system ${UU} holds ${gU} particles, not ${RU}: its records texture's limit`);
        const tU = new bU(UU, Math.min(RU, gU), this, this.Zh);
        return this.Zh.addParticleSystem(tU), tU
      }
      canDraw(UU) {
        var RU, gU;
        if (this.failed || null === (RU = UU.texture) || void 0 === RU || null === (gU = RU.mirror) || void 0 === gU || !gU.isReady()) return !1;
        for (const tU of (0, uU.l)(UU.blendMode))
          if (!this.effectFor(tU).isReady()) return !1;
        return !0
      }
      disposeStopped(UU) {
        this.Zh._toBeDisposed.push(UU)
      }
      remove(UU) {
        this.Zh.removeParticleSystem(UU), UU.releaseGl()
      }
      render(UU) {
        var RU;
        if (!UU.isReady() || !UU.hasLiveParticles()) return 0;
        const {
          engine: gU,
          Zh: tU,
          frame: pU
        } = this;
        UU.prepareDraw(this.warnOnce), UU.drawOffset(pU, 0), pU[3] = UU.drawTime();
        const EU = UU.ring.drawStart(),
          PU = UU.ring.drawCount(),
          TU = null !== (RU = UU.ramp) && void 0 !== RU ? RU : this.whiteRamp;
        gU.setState(!1);
        for (const qU of (0, uU.l)(UU.blendMode)) {
          const RU = this.effectFor(qU);
          gU.enableEffect(RU), RU.setTexture("gpuParticleTexture", UU.texture.mirror), RU.setTexture("gpuParticleRampTexture", TU), RU._bindTexture("gpuParticleRecords", UU.records), RU.setMatrix("gpuParticleView", tU.getViewMatrix()), RU.setMatrix("gpuParticleProjection", tU.getProjectionMatrix()), RU.setFloatArray4("gpuParticleSystem", UU.uniforms), RU.setFloat4("gpuParticleFrame", pU[0], pU[1], pU[2], pU[3]), RU.setFloat2("gpuParticleRange", EU, PU), RU.setFloat("gpuParticleRamp", UU.uniforms[QU.s.ramp]), gU.bindBuffers(this.vertexBuffers, null, RU), gU.setAlphaMode((0, uU.k)(qU)), gU.drawArraysType(GU.d.MATERIAL_TriangleStripDrawMode, 0, 4, PU), RU._bindTexture("gpuParticleRecords", null)
        }
        return gU.setAlphaMode(GU.d.ALPHA_DISABLE), PU
      }
      awaitLink(UU) {
        const RU = UU.getPipelineContext(),
          gU = this.engine._gl;
        !this.failed && gU && (!RU || RU.isParallelCompiled && !RU.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : RU.isParallelCompiled && RU.program && (gU.getProgramParameter(RU.program, gU.LINK_STATUS) || this.fail(gU.getProgramInfoLog(RU.program) || "a program did not link")))
      }
      effectFor(UU) {
        return UU === uU.d ? this.multiplyEffect : this.effect
      }
      createEffect(UU) {
        return this.engine.createEffect(eU, [], IU, JU, UU, void 0, void 0, ((UU, RU) => {
          this.fail(RU)
        }))
      }
      fail(UU) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${UU}`);
          for (const UU of this.Zh.vI.slice()) UU instanceof bU && UU.disposeOnStop && UU.dispose()
        }
      }
    }
    var ZU = gU(39590),
      aU = gU(40488),
      YU = gU(39326),
      BU = gU(39543),
      VU = gU(39534),
      rU = gU(39460),
      XU = gU(40543),
      vU = gU(37124),
      dU = gU(40991),
      HU = gU(40998),
      SU = gU(41005),
      sU = gU(39480),
      yU = gU(37012),
      kU = gU(37004),
      FU = gU(39701),
      iU = gU(37081),
      AU = gU(37030);

    function zU(UU) {
      if (UU.visibility < 1 || !UU.isVisible || !UU.isEnabled() || UU.metadata[AU.h] || !UU.isReady()) return !0;
      const RU = UU.ZI;
      if (!RU || 0 === RU.length) return !0;
      for (let gU = 0; gU < RU.length; gU++) {
        const tU = RU[gU],
          pU = tU.JC();
        if (!pU || !pU.isReadyForSubMesh(UU, tU, !1)) return !0
      }
      return !1
    }
    class MU {
      constructor(UU, RU) {
        this.LG = UU, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, RU.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      pu(UU) {
        var RU;
        const gU = this.armed;
        if (this.armed = !1, this.vis = null, !gU) return !1;
        this.culled = 0;
        const {
          LG: tU
        } = this, pU = null === (RU = tU.JI) || void 0 === RU ? void 0 : RU.visibility;
        if (!pU || !UU || tU.SC.sC) return !1;
        if (!(tU.FG.AgU[0] >= iU.e)) return !1;
        const EU = UU.getProjectionMatrix().m;
        if (0 !== EU[15]) return !1;
        const PU = tU.uj,
          TU = UU.globalPosition,
          qU = this.eye;
        return qU[0] = TU.x + PU[0], qU[1] = TU.y + PU[1], qU[2] = TU.z + PU[2], !!pU.eyeClear(qU[0], qU[1], qU[2], UU.minZ, EU, tU.FG) && (this.vis = pU, this.passable.clear(), this.count = 0, !0)
      }
      see(UU, RU) {
        const gU = this.count++;
        if (gU === this.cellSlots.length) {
          const UU = new Int32Array(2 * gU);
          UU.set(this.cellSlots), this.cellSlots = UU
        }
        this.cellSlots[gU] = RU, this.meshes[gU] = UU
      }
      seeThrough(UU) {
        this.passable.add(UU)
      }
      finish(UU, RU) {
        const {
          vis: gU,
          eye: tU,
          meshes: pU,
          count: EU,
          cellSlots: PU
        } = this, {
          FG: TU
        } = this.LG, [qU, KU] = TU.AgU, cU = null !== gU && gU.update(tU[0], tU[1], tU[2], TU.u9, qU, KU, this.passable);
        let GU = 0;
        for (let jU = 0; jU < EU; jU++) {
          const tU = pU[jU];
          if (cU) {
            const UU = 3 * PU[jU];
            if (UU >= 0 && !gU.isDrawn(RU[UU], RU[UU + 1], RU[UU + 2])) {
              GU++;
              continue
            }
          }
          sU.h.prototype.push.call(UU, tU)
        }
        pU.fill(null, 0, EU), this.count = 0, this.vis = null, this.culled = GU
      }
    }
    var DU = gU(37067),
      LU = gU(37017),
      NU = gU(39676),
      lU = gU(41007),
      OU = gU(39681),
      UR = gU(39610);
    let RR = 1;
    const gR = new WeakSet;

    function tR() {
      return RR
    }

    function pR() {
      RR = RR >= 1073741823 ? 1 : RR + 1
    }

    function ER(UU) {
      const RU = UU.metadata;
      if (!RU || !0 !== RU[kU.r]) return;
      const gU = RU[kU.u],
        tU = null === gU || void 0 === gU ? void 0 : gU._noaStamps;
      if (!gU || !tU) return;
      const pU = gU.entries.indexOf(UU);
      pU >= 0 && (tU[pU] = 0)
    }

    function PR(UU) {
      const RU = UU.ZI;
      for (let gU = 0; gU < RU.length; gU++) {
        const UU = RU[gU].JC();
        if (UU && !UU.isFrozen) return !1
      }
      for (let gU = 0; gU < RU.length; gU++) {
        const UU = RU[gU].JC();
        UU && gR.add(UU)
      }
      return !0
    }
    let TR = !1;
    const qR = new WeakSet;

    function KR(UU, RU) {
      const gU = UU[RU];
      if ("function" !== typeof gU) throw new Error(`terrainDrawState: Babylon has no ${RU} to hook`);
      return gU
    }

    function cR(UU, RU, gU, tU, pU) {
      const EU = gU.FG.u9,
        PU = new Map;
      let TU = 0;
      const qU = new MU(gU, UU),
        KU = new DU.c(EU, UU.WC());
      ! function(UU) {
        if (qR.has(UU) || (qR.add(UU), UU.onContextLostObservable.add(pR), UU.onContextRestoredObservable.add(pR)), TR) return;
        TR = !0;
        const RU = lU.e.prototype,
          gU = KR(RU, "_markSubMeshesAsDirty");
        Object.assign(RU, {
          _markSubMeshesAsDirty(UU) {
            gU.call(this, UU), ER(this)
          }
        });
        const tU = KR(UR.b.prototype, "_syncParentEnabledState");
        Object.assign(UR.b.prototype, {
          _syncParentEnabledState() {
            tU.call(this), ER(this)
          }
        });
        const pU = KR(OU.d.prototype, "resetDrawCache");
        OU.d.prototype.resetDrawCache = function(UU, RU) {
          pU.call(this, UU, RU), ER(this.getMesh())
        };
        const EU = NU.c.prototype,
          PU = KR(EU, "markDirty");
        EU.markDirty = function(UU) {
          PU.call(this, UU), gR.has(this) && pR()
        };
        const TU = KR(EU, "_markAllSubMeshesAsDirty");
        Object.assign(EU, {
          _markAllSubMeshesAsDirty(UU) {
            TU.call(this, UU), gR.has(this) && pR()
          }
        })
      }(UU.WC());
      let cU = new Float64Array(384),
        GU = new Int32Array(64),
        jU = new Uint8Array(64),
        uU = new Float64Array(64),
        CU = new Int32Array(192),
        hU = 0;
      const QU = [],
        eU = new Float64Array(24),
        WU = () => {
          const UU = QU.pop();
          return void 0 !== UU ? (GU[UU] = 0, UU) : (hU === GU.length && (cU = GR(cU, new Float64Array(2 * cU.length)), GU = GR(GU, new Int32Array(2 * GU.length)), jU = GR(jU, new Uint8Array(2 * jU.length)), uU = GR(uU, new Float64Array(2 * uU.length)), CU = GR(CU, new Int32Array(2 * CU.length))), hU++)
        },
        fU = UU => {
          const RU = 6 * UU._noaSlot,
            gU = UU.OgU[0],
            tU = UU.OgU[1];
          cU[RU] = gU.x, cU[RU + 1] = gU.y, cU[RU + 2] = gU.z, cU[RU + 3] = tU.x, cU[RU + 4] = tU.y, cU[RU + 5] = tU.z
        },
        xU = (UU, RU, gU) => {
          if (!gU) return qU.see(UU, -1), !1;
          const tU = zU(UU);
          return tU && qU.seeThrough(uU[RU]), qU.see(UU, RU), !tU
        };
      let mU = -1;
      return UU.getActiveMeshCandidates = () => {
        const gU = UU.frustumPlanes,
          tU = RU._selectionContent;
        tU.reset(), (gU => {
          const tU = UU.frustumPlanes;
          TU = TU + 1 | 0 || 1;
          const pU = RU.blocks,
            EU = qU.pu(UU.activeCamera),
            PU = EU && !0;
          if (PU) {
            const RU = UU.WC().currentRenderPassId;
            RU !== mU && (mU = RU, pR())
          }
          const KU = tR(),
            uU = PU && !1;
          pU.length > 0 && function(UU, RU) {
            for (let gU = 0; gU < 6; gU++) {
              const tU = UU[gU],
                pU = tU.normal;
              RU[4 * gU] = pU.x, RU[4 * gU + 1] = pU.y, RU[4 * gU + 2] = pU.z, RU[4 * gU + 3] = tU.d
            }
          }(tU, eU);
          const hU = cU,
            QU = GU,
            WU = jU;
          for (let UU = 0; UU < pU.length; UU++) {
            const RU = pU[UU];
            if (!FU.c.IsInFrustum(RU.OgU, tU)) continue;
            const cU = RU.entries;
            {
              const UU = RU._noaSlots,
                tU = RU._noaStamps,
                pU = RU._noaTerrain;
              for (let RU = 0; RU < cU.length; RU++) {
                const GU = UU[RU];
                if (QU[GU] !== TU && (QU[GU] = TU, WU[GU] = jR(hU, 6 * GU, eU) ? 1 : 0), 0 === WU[GU]) continue;
                const jU = cU[RU];
                if (PU && tU[RU] === KU) uU && 1 === pU[RU] && zU(jU) && 0, qU.see(jU, 1 === pU[RU] ? GU : -1);
                else if (PU) {
                  tU[RU] = KU;
                  const UU = !0 === jU.metadata[LU.n];
                  pU[RU] = UU ? 1 : 0;
                  const gU = xU(jU, GU, UU);
                  !UU || gU && PR(jU) || (tU[RU] = 0)
                } else EU ? xU(jU, GU, !0 === jU.metadata[LU.n]) : sU.h.prototype.push.call(gU, jU)
              }
              continue
            }
          }
          EU && qU.finish(gU, CU)
        })(tU), KU.apply(tU, UU.activeCamera);
        const EU = RU.lgU;
        for (let UU = 0; UU < EU.length; UU++) {
          const RU = EU[UU];
          RU.isEnabled() && sU.h.prototype.push.call(tU, RU)
        }
        return pU(tU, gU), tU
      }, {
        UtU: () => qU.culled,
        HgU: (UU, RU) => {
          const pU = Math.floor(RU[0] / EU),
            TU = Math.floor(RU[1] / EU),
            qU = Math.floor(RU[2] / EU),
            KU = `${pU}|${TU}|${qU}`;
          let cU = PU.get(KU);
          if (!cU) {
            const UU = [0, 0, 0];
            gU.HUU([pU * EU - 1, TU * EU - 1, qU * EU - 1], null, UU), cU = Object.assign(tU(UU, EU + 2), {
              RtU: KU,
              gtU: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: WU()
            }), fU(cU), uU[cU._noaSlot] = (0, yU.k)(pU, TU, qU), CU[3 * cU._noaSlot] = pU, CU[3 * cU._noaSlot + 1] = TU, CU[3 * cU._noaSlot + 2] = qU, PU.set(KU, cU)
          }
          cU.gtU++, UU.metadata[kU.x] = cU
        },
        TY: UU => {
          const RU = UU.metadata[kU.x];
          RU && (RU.gtU--, RU.gtU <= 0 && (PU.delete(RU.RtU), QU.push(RU._noaSlot)), UU.metadata[kU.x] = null)
        },
        NgU: (UU, RU) => {
          const gU = UU,
            tU = RU.metadata[kU.x];
          (gU._noaSlots ??= []).push(tU._noaSlot), (gU._noaStamps ??= []).push(0), (gU._noaTerrain ??= []).push(0), gU.entries.push(RU)
        },
        removeEntry: (UU, RU) => {
          const gU = UU,
            tU = gU.entries,
            pU = tU.indexOf(RU);
          if (pU < 0) return;
          const EU = gU._noaSlots,
            PU = gU._noaStamps,
            TU = gU._noaTerrain,
            qU = tU.length - 1;
          tU[pU] = tU[qU], EU[pU] = EU[qU], PU[pU] = PU[qU], TU[pU] = TU[qU], tU.pop(), EU.pop(), PU.pop(), TU.pop()
        },
        n_: UU => {
          for (const RU of PU.values()) {
            RU.FgU.ptU(UU), RU.kgU.ptU(UU);
            for (const gU of RU.OgU) gU.ptU(UU);
            fU(RU)
          }
        }
      }
    }

    function GR(UU, RU) {
      return RU.set(UU), RU
    }

    function jR(UU, RU, gU) {
      const tU = UU[RU],
        pU = UU[RU + 1],
        EU = UU[RU + 2],
        PU = UU[RU + 3],
        TU = UU[RU + 4],
        qU = UU[RU + 5];
      for (let KU = 0; KU < 24; KU += 4) {
        const UU = gU[KU],
          RU = gU[KU + 1],
          cU = gU[KU + 2];
        if (!(UU * (UU >= 0 ? PU : tU) + RU * (RU >= 0 ? TU : pU) + cU * (cU >= 0 ? qU : EU) + gU[KU + 3] >= 0)) return !1
      }
      return !0
    }
    var uR = gU(37312);
    class CR {
      constructor(UU, RU) {
        var gU = UU.Zh;
        gU.IgU(new SU.d(gU));
        var tU = new dU.e(qU);
        gU.PtU = tU, tU.blocks = [];
        var pU, EU = {},
          PU = [];
        this.textPlanes = PU, this.UtU = () => pU.UtU(), this.n_ = UU => {
          cU(tU, UU), pU.n_(UU)
        }, this.HgU = (RU, gU, TU) => {
          if (!RU.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!RU.metadata[kU.u] && !RU.metadata[kU.p]) {
            if (!gU) {
              var qU = tU.lgU;
              if (RU.metadata[kU.C] && !RU.parent) {
                qU = PU;
                var cU = RU.lY().qtU;
                RU.metadata[kU.F] = cU.center.length() + cU.radius, RU.fC = !0
              }
              return qU.push(RU), RU.metadata[kU.j] = qU, void(RU.metadata[kU.p] = !0)
            }
            var jU = Math.floor(TU[0] / KU),
              uU = Math.floor(TU[1] / KU),
              CU = Math.floor(TU[2] / KU),
              hU = jU + "|" + uU + "|" + CU,
              QU = EU[hU];
            if (!QU) {
              var eU = [jU * KU, uU * KU, CU * KU],
                WU = [0, 0, 0];
              UU.LG.HUU(eU, null, WU), QU = GU(WU, KU), tU.blocks.push(QU), EU[hU] = QU, QU.RtU = hU
            }
            pU.HgU(RU, TU), pU.NgU(QU, RU), QU.gtU = (QU.gtU || 0) + 1, RU.metadata[kU.u] = QU, RU.metadata[kU.r] = !0, RU.fC = !0
          }
        }, this.TY = UU => {
          if (UU.metadata) {
            UU.metadata[kU.p] && ((0, yU.m)(UU.metadata[kU.j], UU), UU.metadata[kU.p] = !1), UU.metadata[kU.j] === PU && (UU.fC = !1), UU.metadata[kU.j] = void 0, UU.metadata[kU.F] = void 0;
            var RU = UU.metadata[kU.u];
            RU && RU.entries && (UU.metadata[kU.r] && pU.removeEntry(RU, UU), RU.gtU--, RU.gtU <= 0 && (delete EU[RU.RtU], (0, yU.m)(tU.blocks, RU))), pU.TY(UU), UU.metadata[kU.u] = null, UU.metadata[kU.r] = !1
          }
        }, this.Z6 = function(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (UU.metadata[kU.u]) {
            if (UU.metadata[kU.r] === RU) return;
            var gU = UU.metadata[kU.u];
            gU && gU.entries && (RU ? pU.NgU(gU, UU) : pU.removeEntry(gU, UU)), UU.metadata[kU.r] = RU
          } else {
            if (UU.metadata[kU.p] === RU) return;
            var EU = UU.metadata[kU.j] || tU.lgU;
            RU ? EU.push(UU) : (0, yU.m)(EU, UU), UU.metadata[kU.p] = RU
          }
        };
        var qU = () => {},
          KU = RU * UU.LG.FG.u9,
          cU = (UU, RU) => {
            UU.blocks.forEach((UU => {
              UU.FgU.ptU(RU), UU.kgU.ptU(RU), UU.OgU.forEach((UU => UU.ptU(RU))), UU.blocks && cU(UU, RU)
            }))
          },
          GU = (UU, RU) => {
            var gU = new TU.xC(UU[0], UU[1], UU[2]),
              tU = new TU.xC(UU[0] + RU, UU[1] + RU, UU[2] + RU);
            return new HU.b(gU, tU, void 0, void 0, void 0, qU)
          };
        pU = cR(gU, tU, UU.LG, GU, ((UU, RU) => {
          for (var gU = 0; gU < PU.length; gU++) {
            var tU = PU[gU];
            tU.isEnabled(!1) && ((0, uR.e)(tU, RU) && sU.h.prototype.push.call(UU, tU))
          }
        }))
      }
    }

    function hR(UU) {
      const {
        holderPosition: RU,
        holderRotation: gU,
        fD: tU,
        fov: pU,
        near: EU,
        far: PU
      } = UU.model.eD, TU = UU.htU;
      TU.position.b_(RU[0], RU[1], RU[2]), TU.rotation.b_(gU[0], gU[1], gU[2]);
      const qU = UU.camera;
      qU.position.b_(tU[0], tU[1], tU[2]), qU.fov = pU, qU.minZ = EU, qU.maxZ = PU
    }

    function QR(UU) {
      const RU = UU.WC(),
        gU = RU,
        tU = gU._gl;
      if (!tU || gU.MC < 2 || RU.VgU || tU.getParameter(tU.DEPTH_BITS) < 24) return !1;
      const pU = UU._renderingManager,
        EU = pU.getRenderingGroup(-1),
        PU = pU.getRenderingGroup(0),
        TU = BU.e.prototype.render;
      return EU.render = function(UU, RU, gU, tU, pU, EU, qU, KU, cU) {
        (UU || PU._empty) && TU.call(this, UU, RU, gU, tU, pU, EU, qU, KU, cU)
      }, PU.render = function(UU, gU, pU, PU) {
        let qU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          KU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          cU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          jU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          uU = arguments.length > 8 ? arguments[8] : void 0;
        UU ? TU.call(this, UU, gU, pU, PU, qU, KU, cU, jU, uU) : (RU.setAlphaMode(GU.d.ALPHA_DISABLE), TU.call(this, null, !1, !1, PU, qU, KU, cU, !1), EU._empty || (tU.depthRange(1, 1), TU.call(EU, null, gU, pU, PU, qU, KU, cU, jU, uU), tU.depthRange(0, 1)), TU.call(this, null, gU, pU, PU, !1, !1, !1, jU, uU))
      }, !0
    }

    function eR(UU, RU) {
      return [RU, vU.f].map(((RU, gU) => {
        const tU = new pU.c("light", TU.xC.FromArray(RU), UU);
        return tU.diffuse = PU.Color3.FromArray([1, 1, 1]), tU.specular = PU.Color3.FromArray([1, 1, 1]), tU.intensity = vU.b[gU], tU
      }))
    }
    class WR extends KU.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(UU) {
        var RU;
        this.heldTexture = UU, this.particleTexture = null !== (RU = null === UU || void 0 === UU ? void 0 : UU.mirror) && void 0 !== RU ? RU : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        UU && (this.particleTexture = null, (0, cU.y)(this.heldTexture), this.heldTexture = null), super.dispose(UU, RU, gU)
      }
    }
    const fR = tU.b.Zero();
    const xR = {
      xtU: function(UU, RU) {
        return new EU.d(UU, RU.DRU, {
          preserveDrawingBuffer: RU.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      WtU: function(UU, RU) {
        ! function(UU, RU, gU) {
          const tU = new rU.b(UU.engine);
          UU.Zh = tU, tU.detachControl(), tU.autoClear = !1, VU.e.MIN_RENDERINGGROUPS = -1;
          for (let EU = VU.e.MIN_RENDERINGGROUPS; EU <= 1; EU++) tU.setRenderingOrder(EU, BU.e.PainterSortCompare, BU.e.PainterSortCompare, BU.e.PainterSortCompare);
          tU.setRenderingAutoClearDepthStencil(0, !1), YU.c.Enabled = !1, UU.jtU = new CR(UU, Math.round(RU.utU)), UU.htU = new aU.d("camHolder", tU), UU.camera = new ZU.d("camera", new TU.xC(0, 0, 0), tU), UU.camera.parent = UU.htU, hR(UU), (0, vU.g)(UU, ((UU, RU, gU) => (0, XU.h)(RU, gU, UU.Zh))), tU.clearColor = PU.c.FromArray(RU.clearColor), tU.ambientColor = PU.Color3.FromArray(RU.ambientColor);
          const pU = gU(tU, RU.etU);
          tU.onNewLightAddedObservable.add((UU => {
            pU.some((RU => RU === UU)) || console.error(`Light "${UU.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), tU.skipPointerMovePicking = !0
        }(UU, RU, eR), QR(UU.Zh)
      },
      CtU: hR,
      setBabylonFog: function(UU, RU, gU, tU) {
        const pU = UU.Zh;
        pU.fogMode = 3, pU.fogStart = RU, pU.fogEnd = gU, pU.fogColor.set(tU[0], tU[1], tU[2])
      },
      mtU: function(UU, RU, gU) {
        return UU.engine.MC >= 2 && (UU.ItU || (UU.ItU = new oU(UU.Zh)), !UU.ItU.failed) ? UU.ItU.aY(RU, gU) : new WR(RU, gU, UU.Zh)
      },
      wtU: function(UU, RU) {
        UU.Zh.vI.forEach((gU => {
          if (gU instanceof bU) return void gU.n_(RU, UU.LG.uj);
          const tU = gU;
          if (tU.emitter.getConnectedParticleSystems)
            for (const UU of tU._particles) UU.position.set(UU.position.x - RU[0], UU.position.y - RU[1], UU.position.z - RU[2]);
          else {
            if (!tU.worldOffset) throw new Error("Particle system has no world offset");
            tU.worldOffset.x = -UU.LG.uj[0], tU.worldOffset.y = -UU.LG.uj[1], tU.worldOffset.z = -UU.LG.uj[2]
          }
        }))
      },
      linesFromArrays: function(UU, RU, gU) {
        const tU = new qU.d(RU, UU.Zh, null, void 0, void 0, !1);
        return (0, XU.e)(RU, gU, UU.Zh, tU), tU
      },
      ah: ER,
      JtU: function(UU, RU) {
        return fR.origin.PgU(RU.origin), fR.direction.PgU(RU.direction), fR.length = RU.length, fR.epsilon = RU.epsilon, fR.JtU(UU, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40505: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => sU,
      f: () => WU,
      h: () => zU
    });
    var tU = gU(39648),
      pU = gU(40511),
      EU = gU(40546),
      PU = gU(40520),
      TU = gU(37346),
      qU = gU(37359),
      KU = gU(37363),
      cU = gU(37365),
      GU = gU(36703),
      jU = gU(36707),
      uU = gU(40522),
      CU = gU(36683),
      hU = gU(36689),
      QU = gU(36678);

    function eU(UU, RU) {
      return Object.assign((function(UU, gU, tU, pU) {
        return RU(this.featureState, UU, gU, tU, pU)
      }), {
        Au: UU
      })
    }

    function WU(UU) {
      const RU = class extends uU.b {
          constructor(RU, gU) {
            const tU = (0, hU.kb)(RU),
              pU = tU && (0, hU.D)(tU, UU.name);
            for (var EU = arguments.length, PU = new Array(EU > 2 ? EU - 2 : 0), TU = 2; TU < EU; TU++) PU[TU - 2] = arguments[TU];
            super(RU, UU.name, UU.priority, pU ? pU.defines : UU.defines(...PU), !1), this.featureState = void 0, this.featureState = gU, this._pluginManager._addPlugin(this), this._enable(!0), (0, hU.E)(this._material, UU, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return UU.className
          }
          isCompatible(UU) {
            return UU === QU.d.GLSL || UU === QU.d.WGSL
          }
        },
        gU = (0, CU.j)(UU);
      for (const [tU, pU] of Object.entries(CU.b)) {
        const EU = UU[tU];
        if (EU) {
          const UU = gU[tU];
          Object.defineProperty(RU.prototype, pU, {
            value: eU(EU, UU),
            writable: !0,
            configurable: !0
          })
        }
      }
      return RU
    }
    class fU extends(WU(TU.e)) {}
    var xU = gU(39196),
      mU = gU(40525);
    const IU = new WeakMap;

    function JU(UU, RU, gU) {
      let tU = IU.get(gU);
      tU || (tU = new Map, IU.set(gU, tU));
      const {
        url: pU
      } = UU;
      let EU = tU.get(pU);
      return EU || (EU = async function(UU, RU, gU) {
        const {
          width: tU,
          height: pU
        } = UU.getSize(), EU = Math.round(pU / tU), TU = RU && RU.byteLength === tU * tU * EU * 4 ? RU : UU._readPixelsSync();
        return new mU.b(TU, tU, tU, EU, xU.d.TEXTUREFORMAT_RGBA, gU, !0, !1, PU.c.NEAREST_NEAREST_MIPLINEAR)
      }(UU, RU, gU), tU.set(pU, EU), EU.catch((() => {
        tU.delete(pU)
      }))), EU
    }
    var wU = gU(37374);
    class nU extends(WU(qU.h)) {
      constructor(UU, RU) {
        super(UU, RU), RU.textures.forEach(((UU, RU) => {
          UU.mirror.onLoadObservable.add((UU => {
            this.setTextureArrayData(UU, RU).catch((UU => {
              console.error(`Failed to build texture array for atlas ${RU}`, UU)
            }))
          }))
        })), (0, wU.j)(RU, UU.shaderLanguage)
      }
      async setTextureArrayData(UU, RU) {
        var gU, tU;
        const pU = this.featureState,
          {
            width: EU,
            height: PU
          } = UU.getSize(),
          TU = pU.useWebGL2 ? await JU(UU, null !== (gU = null === (tU = pU.sources.pixels) || void 0 === tU ? void 0 : tU[RU]) && void 0 !== gU ? gU : null, this._material.aZ()) : null;
        (0, wU.d)(this._material, pU, RU, TU, EU, Math.round(PU / EU), this._material.shaderLanguage)
      }
    }
    var bU = gU(40533),
      oU = gU(39698),
      ZU = gU(36593),
      aU = gU(40536),
      YU = gU(39792),
      BU = gU(39681),
      VU = gU(40488),
      rU = gU(37109),
      XU = gU(40543);
    class vU extends bU.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const dU = {
      Mesh: aU.c,
      TransformNode: VU.d,
      tC: bU.c,
      VertexBuffer: bU.e,
      BoundingInfo: oU.d,
      xC: ZU.xC,
      ArenaBuffer: vU,
      SubMesh: BU.d,
      VertexData: YU.b,
      MirroredGeometry: XU.c,
      meshFromArrays: XU.e,
      plainMeshFromArrays: XU.h
    };
    (0, rU.g)(dU);
    var HU = gU(36925);
    class SU extends(WU(cU.k)) {
      constructor(UU, RU) {
        if (super(UU, RU), UU instanceof tU.StandardMaterial && RU.dirLightCount > 0) {
          const RU = UU,
            gU = RU._blockDirtyMechanism;
          RU._blockDirtyMechanism = !0, UU.disableLighting = !0, RU._blockDirtyMechanism = gU;
          const tU = (0, hU.kb)(UU);
          tU && (tU.disableLighting = !0, (0, hU.gb)(tU))
        }(0, HU.h)(UU)
      }
      dispose(UU) {
        (0, HU.l)(this._material), super.dispose(UU)
      }
    }

    function sU(UU, RU) {
      if (!(RU instanceof tU.StandardMaterial) || RU.specularTexture) return;
      const {
        r: gU,
        g: pU,
        b: EU
      } = RU.specularColor;
      0 === gU && 0 === pU && 0 === EU && (UU.SPECULARTERM = !1)
    }(0, cU.g)({
      disableUnusedSpecularTerm: sU
    });
    var yU = gU(36790),
      kU = gU(37114);
    const FU = new RegExp(`^#define ${KU.e}\\s*$`, "m");
    class iU extends(WU(KU.k)) {
      constructor(UU, RU) {
        super(UU, RU), this.pC = !1, RU.ditherOnlyWhileFading && (kU.d.add(UU), this.prewarmDitherTwins(UU))
      }
      prewarmDitherTwins(UU) {
        const RU = new WeakSet;
        UU.onEffectCreatedObservable.add((gU => {
          let {
            effect: tU,
            subMesh: pU
          } = gU;
          if (this.featureState.prewarmingDither || RU.has(tU)) return;
          RU.add(tU);
          const EU = null === pU || void 0 === pU ? void 0 : pU.getMesh();
          EU && !FU.test(tU.defines) && UU.aZ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(EU) || RU.delete(tU)
          }))
        }))
      }
      prewarmDither(UU) {
        if (this.pC || UU.lRU()) return !1;
        const RU = new BU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(UU, RU)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== RU.effect
      }
      dispose(UU) {
        this.pC = !0, super.dispose(UU)
      }
    }
    const AU = new Map;

    function zU(UU, RU) {
      AU.set(UU, RU)
    }
    zU(TU.e, fU), zU(qU.h, nU), zU(KU.k, iU), zU(cU.k, SU), (0, GU.d)({
      create: (UU, RU) => {
        const gU = new tU.StandardMaterial(UU.name, RU);
        return (0, yU.m)(UU, gU), gU.detailMap._pluginDefineNames
      },
      write: (UU, RU, gU) => {
        (0, yU.V)(UU.mirror, RU, gU)
      },
      addFeature: (UU, RU, gU) => {
        const tU = AU.get(RU.feature);
        if (!tU) throw new Error(`${RU.feature.name} has no plugin class (registerPluginClass)`);
        new tU(UU.mirror, RU.state, ...gU)
      },
      texture: (UU, RU, gU) => {
        let {
          url: tU,
          noMipmap: pU,
          invertY: EU,
          samplingMode: TU,
          data: qU,
          sets: KU
        } = gU;
        if (!qU) {
          const gU = new PU.c(tU, RU, pU, EU, TU);
          return Object.assign(gU, KU), void(0, jU.F)(UU, gU)
        }
        const cU = {},
          GU = new Promise(((UU, RU) => {
            cU.onLoad = UU, cU.onError = (UU, gU) => {
              RU(new Error(`${qU.context}: ${(null===gU||void 0===gU?void 0:gU.message)||UU||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: uU,
            bytes: CU,
            label: hU
          } = qU,
          QU = {
            noMipmap: pU,
            invertY: !1,
            samplingMode: TU,
            ...cU,
            mimeType: uU,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          eU = new PU.c(null, RU, QU);
        yU.o.set(eU, GU), Object.assign(eU, KU), eU.updateURL(tU, CU);
        const WU = eU.getInternalTexture();
        WU && (WU.label = hU), UU.uvSet = eU.coordinatesIndex, UU.matrix.set((0, yU.M)(eU)), (0, jU.F)(UU, eU)
      },
      cube: (UU, RU, gU) => {
        let {
          rootUrl: tU,
          files: EU,
          noMipmap: TU,
          luminance: qU
        } = gU;
        const {
          samplingMode: KU
        } = UU.sampler, cU = KU === (0, jU.x)(TU) ? null : () => {
          (0, yU.K)(GU, KU)
        }, GU = new pU.d(tU, RU, null, TU, EU, cU, null, (0, jU.w)(qU));
        GU.coordinatesMode = PU.c.SKYBOX_MODE, (0, jU.F)(UU, GU)
      },
      canvas: (UU, RU, gU) => {
        let {
          width: tU,
          height: pU,
          mipmaps: TU,
          samplingMode: qU,
          hasAlpha: KU = !1,
          wrap: cU = PU.c.CLAMP_ADDRESSMODE
        } = gU;
        const GU = new EU.d(RU, {
          width: tU,
          height: pU
        }, UU, TU, qU);
        GU.hasAlpha = KU, GU.wrapU = cU, GU.wrapV = cU;
        const jU = (0, yU.w)(GU);
        return (0, yU.z)(jU, GU), jU
      }
    })
  },
  40543: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      e: () => GU,
      h: () => jU
    });
    var tU = gU(40533),
      pU = gU(39437),
      EU = gU(39698),
      PU = gU(39797),
      TU = gU(40536),
      qU = gU(39792),
      KU = gU(36988);
    class cU extends PU.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (UU, RU) => {
          this.releaseUnlessInstanced(RU)
        }, this.onLinked = null
      }
      link(UU) {
        var RU;
        (0, KU.i)(UU), this.model = UU, null === (RU = this.onLinked) || void 0 === RU || RU.call(this, UU)
      }
      relink() {
        this.release();
        const UU = [];
        for (const pU of Object.values(this._vertexBuffers))
          if (!pU.getIsInstanced()) {
            const {
              byteOffset: RU,
              byteStride: gU,
              type: tU,
              normalized: EU
            } = pU;
            UU.push({
              kind: pU.getKind(),
              data: pU.getData(),
              offset: RU,
              stride: gU,
              components: pU.getSize(),
              glType: tU,
              isNormalized: EU
            })
          } const RU = this._indices.length ? this._indices : null,
          {
            minimum: gU,
            maximum: tU
          } = this.extend;
        this.link(new KU.e(UU, RU, this.getTotalVertices(), new Float64Array(gU.vgU()), new Float64Array(tU.vgU())))
      }
      copy(UU) {
        if (!this.model) return super.copy(UU);
        const RU = new cU(UU, this.aZ()),
          gU = this.dgU(void 0, !0);
        gU && RU.setIndices(gU);
        let PU = !1;
        for (const EU in this._vertexBuffers) {
          const UU = this._vertexBuffers[EU],
            gU = UU.getData();
          if (!gU) continue;
          const TU = UU.getSize(),
            {
              type: qU,
              byteOffset: KU,
              byteStride: cU,
              normalized: GU
            } = UU;
          PU ||= UU.isUpdatable();
          const jU = UU.getIsInstanced() ? (gU instanceof Array ? 4 * gU.length : gU.byteLength) / cU : this.getTotalVertices(),
            uU = (0, pU.r)(gU, TU, qU, KU, cU, jU, !0),
            CU = {
              updatable: UU.isUpdatable(),
              stride: TU,
              type: qU,
              normalized: GU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            };
          RU.setVerticesBuffer(new tU.e(this.WC(), uU, EU, CU), jU)
        }
        return RU._updatable = PU, RU._boundingInfo = new EU.d(this.extend.minimum, this.extend.maximum), RU.relink(), RU
      }
      static mergeMeshes(UU, RU, gU, tU, pU, EU) {
        const qU = UU[0].aZ(),
          KU = new TU.c(UU[0].name + "_merged", qU),
          GU = new cU(PU.b.RandomId(), qU, void 0, !1, KU);
        try {
          if (!TU.c.MergeMeshes(UU, RU, gU, KU, pU, EU)) return KU.dispose(), null
        } catch (jU) {
          throw KU.dispose(), jU
        }
        return GU.relink(), KU
      }
      removeVerticesData(UU) {
        this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(UU) {
        var RU;
        UU && null !== (RU = this.getVertexBuffer(UU)) && void 0 !== RU && RU.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, KU.o)(this.model), this.model = null)
      }
    }

    function GU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TU.c(UU, gU);
      const pU = (0, KU.g)(RU),
        {
          positions: EU,
          normals: GU,
          uvs: jU,
          indices: uU,
          named: CU = {}
        } = RU,
        hU = new qU.b;
      hU.positions = EU, hU.normals = null !== GU && void 0 !== GU ? GU : null, hU.uvs = null !== jU && void 0 !== jU ? jU : null, hU.indices = uU;
      const QU = new cU(PU.b.RandomId(), gU, hU, !1, tU);
      for (const {
          kind: PU,
          components: TU
        }
        of pU.vertexAttributes) PU in CU && tU.setVerticesData(PU, CU[PU], !1, TU);
      return QU.link(pU), tU
    }

    function jU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const pU = new TU.c(UU, gU),
        {
          positions: EU,
          normals: PU,
          uvs: KU,
          indices: cU
        } = RU;
      return Object.assign(new qU.b, {
        positions: EU,
        normals: PU,
        uvs: KU,
        indices: cU
      }).applyToMesh(pU, tU), pU
    }
  },
  40988: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => QU,
      h: () => TU,
      i: () => PU,
      j: () => KU
    });
    var tU = gU(36754),
      pU = gU(38260),
      EU = gU(38253);

    function PU(UU, RU, gU, tU) {
      const pU = EU.s;
      RU.fill(0), UU.gravity.toArray(RU, pU.gravity), UU.colorDead.toArray(RU, pU.colorDead), gU[pU.ramp] = UU.useRampGradients ? 1 : 0;
      const PU = UU.getColorGradients(),
        TU = jU(UU, PU, "colour", tU);
      gU[pU.colorCount] = TU;
      for (let EU = 0; EU < TU; EU++) {
        var qU;
        const UU = PU[uU(PU, EU)];
        RU[pU.colorPositions + EU] = UU.gradient, UU.color1.toArray(RU, pU.color1 + 4 * EU), (null !== (qU = UU.color2) && void 0 !== qU ? qU : UU.color1).toArray(RU, pU.color2 + 4 * EU)
      }
      const KU = UU.getVelocityGradients(),
        cU = jU(UU, KU, "Fh", tU);
      gU[pU.velocityCount] = cU;
      for (let EU = 0; EU < cU; EU++) WU(RU, pU.Fh + 4 * EU, KU[uU(KU, EU)]);
      const GU = UU.useRampGradients ? UU.getColorRemapGradients() : null,
        CU = jU(UU, GU, "colour remap", tU);
      gU[pU.remapCount] = CU;
      for (let EU = 0; EU < CU; EU++) WU(RU, pU.remap + 4 * EU, GU[uU(GU, EU)])
    }

    function TU() {
      return {
        key: [],
        texels: new Uint8Array(4 * EU.g)
      }
    }
    const qU = [];

    function KU(UU, RU) {
      return cU(UU, qU), !eU(qU, RU.key) && (RU.key.length = 0, RU.key.push(...qU), RU.key.length > 0 && function(UU, RU) {
        for (let gU = 0; gU < EU.g; gU++) pU.j.GetCurrentGradient(gU / EU.g, UU, ((UU, RU, gU) => {
          tU.Color3.LerpToRef(UU.color, RU.color, gU, GU)
        })), RU[4 * gU] = 255 * GU.r, RU[4 * gU + 1] = 255 * GU.g, RU[4 * gU + 2] = 255 * GU.b, RU[4 * gU + 3] = 255
      }(UU.getRampGradients(), RU.texels), !0)
    }

    function cU(UU, RU) {
      RU.length = 0;
      const gU = UU.useRampGradients ? UU.getRampGradients() : null;
      if (null !== gU && void 0 !== gU && gU.length) {
        RU.push(gU.length);
        for (const UU of gU) RU.push(UU.gradient, UU.color.r, UU.color.g, UU.color.b)
      }
    }
    const GU = new tU.Color3;

    function jU(UU, RU, gU, tU) {
      return RU ? RU.length > EU.b ? (tU(`particleStops:${gU}`, `GPU particles use the first 2 and last ${EU.b-2} of more than ${EU.b} ${gU} gradient stops (${UU.name})`), EU.b) : RU.length : 0
    }

    function uU(UU, RU) {
      return RU < 2 || UU.length <= EU.b ? RU : UU.length - EU.b + RU
    }
    const CU = new Float32Array(EU.k),
      hU = new Uint32Array(CU.buffer);

    function QU(UU, RU, gU) {
      return PU(UU, CU, hU, gU), RU && eU(hU, RU) ? null : hU.slice()
    }

    function eU(UU, RU) {
      if (UU.length !== RU.length) return !1;
      for (let gU = 0; gU < UU.length; gU++)
        if (UU[gU] !== RU[gU]) return !1;
      return !0
    }

    function WU(UU, RU, gU) {
      var tU;
      UU[RU] = gU.gradient, UU[RU + 1] = gU.factor1, UU[RU + 2] = null !== (tU = gU.factor2) && void 0 !== tU ? tU : gU.factor1
    }
  },
  40981: (UU, RU, gU) => {
    function tU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const RU = new Set;
      return (gU, tU) => {
        RU.has(gU) || (RU.add(gU), console.warn(UU + tU))
      }
    }
    gU.d(RU, {
      b: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);