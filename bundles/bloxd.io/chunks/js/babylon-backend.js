export const id = 0;
export const ids = [0];
export const modules = {
  40279: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      addBabylonLights: () => ET,
      default: () => iT
    });
    var VB = dB(40287),
      yB = (dB(38728), dB(39955), dB(39222), dB(40295)),
      pB = dB(38562),
      lB = dB(36180),
      JB = dB(36119),
      YB = dB(40304),
      gB = dB(40308),
      oB = dB(36074),
      kB = (dB(39962), dB(40312)),
      LB = dB(40310),
      OB = dB(37699),
      DB = dB(40314),
      uB = dB(38595),
      HB = dB(37673);
    const EB = "gpuParticles",
      vB = HB.s,
      mB = BB => BB / 4,
      iB = BB => `gpuParticleSystem[${BB>>2}].${"xyzw"[3&BB]}`,
      NB = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${HB.e}\n#define COLOR_POSITIONS ${mB(vB.colorPositions)}\n#define COLOR1 ${mB(vB.color1)}\n#define COLOR2 ${mB(vB.color2)}\n#define VELOCITY ${mB(vB.bu)}\n#define REMAP ${mB(vB.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${HB.n/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${iB(vB.gravity)}, ${iB(vB.gravity+1)}, ${iB(vB.gravity+2)}); }\nint colorCount() { return int(${iB(vB.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${mB(vB.colorDead)}]; }\nint velocityCount() { return int(${iB(vB.velocityCount)}); }\nint remapCount() { return int(${iB(vB.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    uB.e.ShadersStore[`${EB}VertexShader`] = NB, uB.e.ShadersStore[`${EB}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const tB = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      fB = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var sB = dB(37666),
      MB = dB(40322);
    class zB extends sB.d {
      constructor(BB, TB, dB, VB) {
        super(BB, TB, dB), this.renderer = dB, this.Gu = VB, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(HB.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, MB.c)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (BB, TB) => {
          const {
            engine: dB,
            perRow: VB
          } = this, yB = dB._gl;
          dB._bindTextureDirectly(yB.TEXTURE_2D, this.records, !0), dB._unpackFlipY(!1);
          const pB = this.ring.recordBits;
          for (let lB = BB; lB < TB;) {
            const BB = Math.floor(lB / VB),
              dB = Math.min(TB, (BB + 1) * VB);
            yB.texSubImage2D(yB.TEXTURE_2D, 0, lB % VB * 4, BB, 4 * (dB - lB), 1, yB.RGBA_INTEGER, yB.UNSIGNED_INT, pB, lB * HB.f), lB = dB
          }
          dB._bindTextureDirectly(yB.TEXTURE_2D, null)
        }, this.id = BB;
        const yB = VB.PD();
        this.engine = yB;
        const pB = Math.max(1, TB);
        this.perRow = Math.min(pB, 256), this.records = yB.createRawTexture(null, 4 * this.perRow, Math.ceil(pB / this.perRow), kB.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, kB.c.TEXTURE_NEAREST_SAMPLINGMODE, null, kB.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Gu.getAnimationRatio() || 1;
        const TB = this.Gu.getFrameId();
        if (TB === this.animatedFrame) return !1;
        const dB = super.animate(BB);
        return dB && (this.animatedFrame = TB, this.ring.takeUploads(this.uploadSlots)), dB
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(BB) {
        (0, MB.g)(this, this.uniforms, this.uniformBits, BB);
        for (const dB of HB.q) this.uniforms[dB] = this.uniformBits[dB];
        var TB;
        (0, MB.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (TB = this.ramp) || void 0 === TB || TB.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = LB.d.CreateRGBATexture(this.rampTexels.texels, HB.k, 1, this.Gu, !1, !1, kB.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var BB;
        this.records.dispose(), null === (BB = this.ramp) || void 0 === BB || BB.dispose(), this.ramp = null
      }
    }
    class wB {
      constructor(BB) {
        this.Gu = BB, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, DB.d)(), this.engine = BB.PD(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = LB.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, BB, !1, !1, kB.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      iK(BB, TB) {
        const dB = 256 * this.engine.getCaps().maxTextureSize;
        TB > dB && this.warnOnce(`capacity:${BB}`, `particle system ${BB} holds ${dB} particles, not ${TB}: its records texture's limit`);
        const VB = new zB(BB, Math.min(TB, dB), this, this.Gu);
        return this.Gu.addParticleSystem(VB), VB
      }
      canDraw(BB) {
        var TB, dB;
        if (this.failed || null === (TB = BB.texture) || void 0 === TB || null === (dB = TB.mirror) || void 0 === dB || !dB.isReady()) return !1;
        for (const VB of (0, OB.k)(BB.blendMode))
          if (!this.effectFor(VB).isReady()) return !1;
        return !0
      }
      disposeStopped(BB) {
        this.Gu._toBeDisposed.push(BB)
      }
      remove(BB) {
        this.Gu.removeParticleSystem(BB), BB.releaseGl()
      }
      render(BB) {
        var TB;
        if (!BB.isReady() || !BB.hasLiveParticles()) return 0;
        const {
          engine: dB,
          Gu: VB,
          frame: yB
        } = this;
        BB.prepareDraw(this.warnOnce), BB.drawOffset(yB, 0), yB[3] = BB.drawTime();
        const pB = BB.ring.drawStart(),
          lB = BB.ring.drawCount(),
          JB = null !== (TB = BB.ramp) && void 0 !== TB ? TB : this.whiteRamp;
        dB.setState(!1);
        for (const YB of (0, OB.k)(BB.blendMode)) {
          const TB = this.effectFor(YB);
          dB.enableEffect(TB), TB.setTexture("gpuParticleTexture", BB.texture.mirror), TB.setTexture("gpuParticleRampTexture", JB), TB._bindTexture("gpuParticleRecords", BB.records), TB.setMatrix("gpuParticleView", VB.getViewMatrix()), TB.setMatrix("gpuParticleProjection", VB.getProjectionMatrix()), TB.setFloatArray4("gpuParticleSystem", BB.uniforms), TB.setFloat4("gpuParticleFrame", yB[0], yB[1], yB[2], yB[3]), TB.setFloat2("gpuParticleRange", pB, lB), TB.setFloat("gpuParticleRamp", BB.uniforms[HB.s.ramp]), dB.bindBuffers(this.vertexBuffers, null, TB), dB.setAlphaMode((0, OB.h)(YB)), dB.drawArraysType(kB.c.MATERIAL_TriangleStripDrawMode, 0, 4, lB), TB._bindTexture("gpuParticleRecords", null)
        }
        return dB.setAlphaMode(kB.c.ALPHA_DISABLE), lB
      }
      awaitLink(BB) {
        const TB = BB.getPipelineContext(),
          dB = this.engine._gl;
        !this.failed && dB && (!TB || TB.isParallelCompiled && !TB.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : TB.isParallelCompiled && TB.program && (dB.getProgramParameter(TB.program, dB.LINK_STATUS) || this.fail(dB.getProgramInfoLog(TB.program) || "a program did not link")))
      }
      effectFor(BB) {
        return BB === OB.c ? this.multiplyEffect : this.effect
      }
      createEffect(BB) {
        return this.engine.createEffect(EB, [], tB, fB, BB, void 0, void 0, ((BB, TB) => {
          this.fail(TB)
        }))
      }
      fail(BB) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${BB}`);
          for (const BB of this.Gu.kN.slice()) BB instanceof zB && BB.disposeOnStop && BB.dispose()
        }
      }
    }
    var UB = dB(38963),
      FB = dB(39949),
      KB = dB(38708),
      rB = dB(38923),
      IB = dB(38916),
      cB = dB(38840),
      SB = dB(40010),
      PB = dB(36469),
      QB = dB(40326),
      RB = dB(40332),
      aB = dB(40339),
      ZB = dB(38861),
      XB = dB(36345),
      WB = dB(36342),
      hB = dB(39060),
      CB = dB(36431),
      GB = dB(36376);

    function qB(BB) {
      if (BB.visibility < 1 || !BB.isVisible || !BB.isEnabled() || BB.metadata[GB.g] || !BB.isReady()) return !0;
      const TB = BB.oN;
      if (!TB || 0 === TB.length) return !0;
      for (let dB = 0; dB < TB.length; dB++) {
        const VB = TB[dB],
          yB = VB.XD();
        if (!yB || !yB.isReadyForSubMesh(BB, VB, !1)) return !0
      }
      return !1
    }
    class xB {
      constructor(BB, TB) {
        this.OL = BB, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, TB.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      tO(BB) {
        var TB;
        const dB = this.armed;
        if (this.armed = !1, this.vis = null, !dB) return !1;
        this.culled = 0;
        const {
          OL: VB
        } = this, yB = null === (TB = VB.yN) || void 0 === TB ? void 0 : TB.visibility;
        if (!yB || !BB || VB.yu.pu) return !1;
        if (!(VB.JL.cVB[0] >= CB.d)) return !1;
        const pB = BB.getProjectionMatrix().m;
        if (0 !== pB[15]) return !1;
        const lB = VB.FL,
          JB = BB.globalPosition,
          YB = this.eye;
        return YB[0] = JB.x + lB[0], YB[1] = JB.y + lB[1], YB[2] = JB.z + lB[2], !!yB.eyeClear(YB[0], YB[1], YB[2], BB.minZ, pB, VB.JL) && (this.vis = yB, this.passable.clear(), this.count = 0, !0)
      }
      see(BB, TB) {
        const dB = this.count++;
        if (dB === this.cellSlots.length) {
          const BB = new Int32Array(2 * dB);
          BB.set(this.cellSlots), this.cellSlots = BB
        }
        this.cellSlots[dB] = TB, this.meshes[dB] = BB
      }
      seeThrough(BB) {
        this.passable.add(BB)
      }
      finish(BB, TB) {
        const {
          vis: dB,
          eye: VB,
          meshes: yB,
          count: pB,
          cellSlots: lB
        } = this, {
          JL: JB
        } = this.OL, [YB, gB] = JB.cVB, oB = null !== dB && dB.update(VB[0], VB[1], VB[2], JB.ZBB, YB, gB, this.passable);
        let kB = 0;
        for (let LB = 0; LB < pB; LB++) {
          const VB = yB[LB];
          if (oB) {
            const BB = 3 * lB[LB];
            if (BB >= 0 && !dB.isDrawn(TB[BB], TB[BB + 1], TB[BB + 2])) {
              kB++;
              continue
            }
          }
          ZB.g.prototype.push.call(BB, VB)
        }
        yB.fill(null, 0, pB), this.count = 0, this.vis = null, this.culled = kB
      }
    }
    var jB = dB(36412),
      AB = dB(36362),
      bB = dB(39040),
      nB = dB(40347),
      eB = dB(39045),
      BT = dB(38980);
    let TT = 1;
    const dT = new WeakSet;

    function VT() {
      return TT
    }

    function yT() {
      TT = TT >= 1073741823 ? 1 : TT + 1
    }

    function pT(BB) {
      const TB = BB.metadata;
      if (!TB || !0 !== TB[WB.m]) return;
      const dB = TB[WB.r],
        VB = null === dB || void 0 === dB ? void 0 : dB._noaStamps;
      if (!dB || !VB) return;
      const yB = dB.entries.indexOf(BB);
      yB >= 0 && (VB[yB] = 0)
    }

    function lT(BB) {
      const TB = BB.oN;
      for (let dB = 0; dB < TB.length; dB++) {
        const BB = TB[dB].XD();
        if (BB && !BB.isFrozen) return !1
      }
      for (let dB = 0; dB < TB.length; dB++) {
        const BB = TB[dB].XD();
        BB && dT.add(BB)
      }
      return !0
    }
    let JT = !1;
    const YT = new WeakSet;

    function gT(BB, TB) {
      const dB = BB[TB];
      if ("function" !== typeof dB) throw new Error(`terrainDrawState: Babylon has no ${TB} to hook`);
      return dB
    }

    function oT(BB, TB, dB, VB, yB) {
      const pB = dB.JL.ZBB,
        lB = new Map;
      let JB = 0;
      const YB = new xB(dB, BB),
        gB = new jB.d(pB, BB.PD());
      ! function(BB) {
        if (YT.has(BB) || (YT.add(BB), BB.onContextLostObservable.add(yT), BB.onContextRestoredObservable.add(yT)), JT) return;
        JT = !0;
        const TB = nB.e.prototype,
          dB = gT(TB, "_markSubMeshesAsDirty");
        Object.assign(TB, {
          _markSubMeshesAsDirty(BB) {
            dB.call(this, BB), pT(this)
          }
        });
        const VB = gT(BT.e.prototype, "_syncParentEnabledState");
        Object.assign(BT.e.prototype, {
          _syncParentEnabledState() {
            VB.call(this), pT(this)
          }
        });
        const yB = gT(eB.c.prototype, "resetDrawCache");
        eB.c.prototype.resetDrawCache = function(BB, TB) {
          yB.call(this, BB, TB), pT(this.getMesh())
        };
        const pB = bB.b.prototype,
          lB = gT(pB, "markDirty");
        pB.markDirty = function(BB) {
          lB.call(this, BB), dT.has(this) && yT()
        };
        const JB = gT(pB, "_markAllSubMeshesAsDirty");
        Object.assign(pB, {
          _markAllSubMeshesAsDirty(BB) {
            JB.call(this, BB), dT.has(this) && yT()
          }
        })
      }(BB.PD());
      let oB = new Float64Array(384),
        kB = new Int32Array(64),
        LB = new Uint8Array(64),
        OB = new Float64Array(64),
        DB = new Int32Array(192),
        uB = 0;
      const HB = [],
        EB = new Float64Array(24),
        vB = () => {
          const BB = HB.pop();
          return void 0 !== BB ? (kB[BB] = 0, BB) : (uB === kB.length && (oB = kT(oB, new Float64Array(2 * oB.length)), kB = kT(kB, new Int32Array(2 * kB.length)), LB = kT(LB, new Uint8Array(2 * LB.length)), OB = kT(OB, new Float64Array(2 * OB.length)), DB = kT(DB, new Int32Array(2 * DB.length))), uB++)
        },
        mB = BB => {
          const TB = 6 * BB._noaSlot,
            dB = BB.XVB[0],
            VB = BB.XVB[1];
          oB[TB] = dB.x, oB[TB + 1] = dB.y, oB[TB + 2] = dB.z, oB[TB + 3] = VB.x, oB[TB + 4] = VB.y, oB[TB + 5] = VB.z
        },
        iB = (BB, TB, dB) => {
          if (!dB) return YB.see(BB, -1), !1;
          const VB = qB(BB);
          return VB && YB.seeThrough(OB[TB]), YB.see(BB, TB), !VB
        };
      let NB = -1;
      return BB.getActiveMeshCandidates = () => {
        const dB = BB.frustumPlanes,
          VB = TB._selectionContent;
        VB.reset(), (dB => {
          const VB = BB.frustumPlanes;
          JB = JB + 1 | 0 || 1;
          const yB = TB.blocks,
            pB = YB.tO(BB.activeCamera),
            lB = pB && !0;
          if (lB) {
            const TB = BB.PD().currentRenderPassId;
            TB !== NB && (NB = TB, yT())
          }
          const gB = VT(),
            OB = lB && !1;
          yB.length > 0 && function(BB, TB) {
            for (let dB = 0; dB < 6; dB++) {
              const VB = BB[dB],
                yB = VB.normal;
              TB[4 * dB] = yB.x, TB[4 * dB + 1] = yB.y, TB[4 * dB + 2] = yB.z, TB[4 * dB + 3] = VB.d
            }
          }(VB, EB);
          const uB = oB,
            HB = kB,
            vB = LB;
          for (let BB = 0; BB < yB.length; BB++) {
            const TB = yB[BB];
            if (!hB.d.IsInFrustum(TB.XVB, VB)) continue;
            const oB = TB.entries;
            {
              const BB = TB._noaSlots,
                VB = TB._noaStamps,
                yB = TB._noaTerrain;
              for (let TB = 0; TB < oB.length; TB++) {
                const kB = BB[TB];
                if (HB[kB] !== JB && (HB[kB] = JB, vB[kB] = LT(uB, 6 * kB, EB) ? 1 : 0), 0 === vB[kB]) continue;
                const LB = oB[TB];
                if (lB && VB[TB] === gB) OB && 1 === yB[TB] && qB(LB) && 0, YB.see(LB, 1 === yB[TB] ? kB : -1);
                else if (lB) {
                  VB[TB] = gB;
                  const BB = !0 === LB.metadata[AB.o];
                  yB[TB] = BB ? 1 : 0;
                  const dB = iB(LB, kB, BB);
                  !BB || dB && lT(LB) || (VB[TB] = 0)
                } else pB ? iB(LB, kB, !0 === LB.metadata[AB.o]) : ZB.g.prototype.push.call(dB, LB)
              }
              continue
            }
          }
          pB && YB.finish(dB, DB)
        })(VB), gB.apply(VB, BB.activeCamera);
        const pB = TB.ZVB;
        for (let BB = 0; BB < pB.length; BB++) {
          const TB = pB[BB];
          TB.isEnabled() && ZB.g.prototype.push.call(VB, TB)
        }
        return yB(VB, dB), VB
      }, {
        WVB: () => YB.culled,
        MVB: (BB, TB) => {
          const yB = Math.floor(TB[0] / pB),
            JB = Math.floor(TB[1] / pB),
            YB = Math.floor(TB[2] / pB),
            gB = `${yB}|${JB}|${YB}`;
          let oB = lB.get(gB);
          if (!oB) {
            const BB = [0, 0, 0];
            dB.KTB([yB * pB - 1, JB * pB - 1, YB * pB - 1], null, BB), oB = Object.assign(VB(BB, pB + 2), {
              hVB: gB,
              CVB: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: vB()
            }), mB(oB), OB[oB._noaSlot] = (0, XB.i)(yB, JB, YB), DB[3 * oB._noaSlot] = yB, DB[3 * oB._noaSlot + 1] = JB, DB[3 * oB._noaSlot + 2] = YB, lB.set(gB, oB)
          }
          oB.CVB++, BB.metadata[WB.v] = oB
        },
        mF: BB => {
          const TB = BB.metadata[WB.v];
          TB && (TB.CVB--, TB.CVB <= 0 && (lB.delete(TB.hVB), HB.push(TB._noaSlot)), BB.metadata[WB.v] = null)
        },
        aVB: (BB, TB) => {
          const dB = BB,
            VB = TB.metadata[WB.v];
          (dB._noaSlots ??= []).push(VB._noaSlot), (dB._noaStamps ??= []).push(0), (dB._noaTerrain ??= []).push(0), dB.entries.push(TB)
        },
        removeEntry: (BB, TB) => {
          const dB = BB,
            VB = dB.entries,
            yB = VB.indexOf(TB);
          if (yB < 0) return;
          const pB = dB._noaSlots,
            lB = dB._noaStamps,
            JB = dB._noaTerrain,
            YB = VB.length - 1;
          VB[yB] = VB[YB], pB[yB] = pB[YB], lB[yB] = lB[YB], JB[yB] = JB[YB], VB.pop(), pB.pop(), lB.pop(), JB.pop()
        },
        JBB: BB => {
          for (const TB of lB.values()) {
            TB.rVB.qVB(BB), TB.KVB.qVB(BB);
            for (const dB of TB.XVB) dB.qVB(BB);
            mB(TB)
          }
        }
      }
    }

    function kT(BB, TB) {
      return TB.set(BB), TB
    }

    function LT(BB, TB, dB) {
      const VB = BB[TB],
        yB = BB[TB + 1],
        pB = BB[TB + 2],
        lB = BB[TB + 3],
        JB = BB[TB + 4],
        YB = BB[TB + 5];
      for (let gB = 0; gB < 24; gB += 4) {
        const BB = dB[gB],
          TB = dB[gB + 1],
          oB = dB[gB + 2];
        if (!(BB * (BB >= 0 ? lB : VB) + TB * (TB >= 0 ? JB : yB) + oB * (oB >= 0 ? YB : pB) + dB[gB + 3] >= 0)) return !1
      }
      return !0
    }
    var OT = dB(36693);
    class DT {
      constructor(BB, TB) {
        var dB = BB.Gu;
        dB.OVB(new aB.d(dB));
        var VB = new QB.d(YB);
        dB.jVB = VB, VB.blocks = [];
        var yB, pB = {},
          lB = [];
        this.textPlanes = lB, this.WVB = () => yB.WVB(), this.JBB = BB => {
          oB(VB, BB), yB.JBB(BB)
        }, this.MVB = (TB, dB, JB) => {
          if (!TB.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!TB.metadata[WB.r] && !TB.metadata[WB.l]) {
            if (!dB) {
              var YB = VB.ZVB;
              if (TB.metadata[WB.y] && !TB.parent) {
                YB = lB;
                var oB = TB.IK().bVB;
                TB.metadata[WB.A] = oB.center.length() + oB.radius, TB.QD = !0
              }
              return YB.push(TB), TB.metadata[WB.g] = YB, void(TB.metadata[WB.l] = !0)
            }
            var LB = Math.floor(JB[0] / gB),
              OB = Math.floor(JB[1] / gB),
              DB = Math.floor(JB[2] / gB),
              uB = LB + "|" + OB + "|" + DB,
              HB = pB[uB];
            if (!HB) {
              var EB = [LB * gB, OB * gB, DB * gB],
                vB = [0, 0, 0];
              BB.OL.KTB(EB, null, vB), HB = kB(vB, gB), VB.blocks.push(HB), pB[uB] = HB, HB.hVB = uB
            }
            yB.MVB(TB, JB), yB.aVB(HB, TB), HB.CVB = (HB.CVB || 0) + 1, TB.metadata[WB.r] = HB, TB.metadata[WB.m] = !0, TB.QD = !0
          }
        }, this.mF = BB => {
          if (BB.metadata) {
            BB.metadata[WB.l] && ((0, XB.m)(BB.metadata[WB.g], BB), BB.metadata[WB.l] = !1), BB.metadata[WB.g] === lB && (BB.QD = !1), BB.metadata[WB.g] = void 0, BB.metadata[WB.A] = void 0;
            var TB = BB.metadata[WB.r];
            TB && TB.entries && (BB.metadata[WB.m] && yB.removeEntry(TB, BB), TB.CVB--, TB.CVB <= 0 && (delete pB[TB.hVB], (0, XB.m)(VB.blocks, TB))), yB.mF(BB), BB.metadata[WB.r] = null, BB.metadata[WB.m] = !1
          }
        }, this.W9 = function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (BB.metadata[WB.r]) {
            if (BB.metadata[WB.m] === TB) return;
            var dB = BB.metadata[WB.r];
            dB && dB.entries && (TB ? yB.aVB(dB, BB) : yB.removeEntry(dB, BB)), BB.metadata[WB.m] = TB
          } else {
            if (BB.metadata[WB.l] === TB) return;
            var pB = BB.metadata[WB.g] || VB.ZVB;
            TB ? pB.push(BB) : (0, XB.m)(pB, BB), BB.metadata[WB.l] = TB
          }
        };
        var YB = () => {},
          gB = TB * BB.OL.JL.ZBB,
          oB = (BB, TB) => {
            BB.blocks.forEach((BB => {
              BB.rVB.qVB(TB), BB.KVB.qVB(TB), BB.XVB.forEach((BB => BB.qVB(TB))), BB.blocks && oB(BB, TB)
            }))
          },
          kB = (BB, TB) => {
            var dB = new JB.RD(BB[0], BB[1], BB[2]),
              VB = new JB.RD(BB[0] + TB, BB[1] + TB, BB[2] + TB);
            return new RB.c(dB, VB, void 0, void 0, void 0, YB)
          };
        yB = oT(dB, VB, BB.OL, kB, ((BB, TB) => {
          for (var dB = 0; dB < lB.length; dB++) {
            var VB = lB[dB];
            VB.isEnabled(!1) && ((0, OT.e)(VB, TB) && ZB.g.prototype.push.call(BB, VB))
          }
        }))
      }
    }

    function uT(BB) {
      const {
        holderPosition: TB,
        holderRotation: dB,
        fn: VB,
        fov: yB,
        near: pB,
        far: lB
      } = BB.model.hA, JB = BB.yyB;
      JB.position.YBB(TB[0], TB[1], TB[2]), JB.rotation.YBB(dB[0], dB[1], dB[2]);
      const YB = BB.camera;
      YB.position.YBB(VB[0], VB[1], VB[2]), YB.fov = yB, YB.minZ = pB, YB.maxZ = lB
    }

    function HT(BB) {
      const TB = BB.PD(),
        dB = TB,
        VB = dB._gl;
      if (!VB || dB.Lu < 2 || TB.fVB || VB.getParameter(VB.DEPTH_BITS) < 24) return !1;
      const yB = BB._renderingManager,
        pB = yB.getRenderingGroup(-1),
        lB = yB.getRenderingGroup(0),
        JB = rB.c.prototype.render;
      return pB.render = function(BB, TB, dB, VB, yB, pB, YB, gB, oB) {
        (BB || lB._empty) && JB.call(this, BB, TB, dB, VB, yB, pB, YB, gB, oB)
      }, lB.render = function(BB, dB, yB, lB) {
        let YB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          gB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          LB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          OB = arguments.length > 8 ? arguments[8] : void 0;
        BB ? JB.call(this, BB, dB, yB, lB, YB, gB, oB, LB, OB) : (TB.setAlphaMode(kB.c.ALPHA_DISABLE), JB.call(this, null, !1, !1, lB, YB, gB, oB, !1), pB._empty || (VB.depthRange(1, 1), JB.call(pB, null, dB, yB, lB, YB, gB, oB, LB, OB), VB.depthRange(0, 1)), JB.call(this, null, dB, yB, lB, !1, !1, !1, LB, OB))
      }, !0
    }

    function ET(BB, TB) {
      return [TB, PB.g].map(((TB, dB) => {
        const VB = new yB.e("light", JB.RD.FromArray(TB), BB);
        return VB.diffuse = lB.Color3.FromArray([1, 1, 1]), VB.specular = lB.Color3.FromArray([1, 1, 1]), VB.intensity = PB.c[dB], VB
      }))
    }
    class vT extends gB.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(BB) {
        var TB;
        this.heldTexture = BB, this.particleTexture = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.mirror) && void 0 !== TB ? TB : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        BB && (this.particleTexture = null, (0, oB.B)(this.heldTexture), this.heldTexture = null), super.dispose(BB, TB, dB)
      }
    }
    const mT = VB.d.Zero();
    const iT = {
      gyB: function(BB, TB) {
        return new pB.d(BB, TB.adB, {
          preserveDrawingBuffer: TB.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      JyB: function(BB, TB) {
        ! function(BB, TB, dB) {
          const VB = new cB.c(BB.engine);
          BB.Gu = VB, VB.detachControl(), VB.autoClear = !1, IB.d.MIN_RENDERINGGROUPS = -1;
          for (let pB = IB.d.MIN_RENDERINGGROUPS; pB <= 1; pB++) VB.setRenderingOrder(pB, rB.c.PainterSortCompare, rB.c.PainterSortCompare, rB.c.PainterSortCompare);
          VB.setRenderingAutoClearDepthStencil(0, !1), KB.e.Enabled = !1, BB.TyB = new DT(BB, Math.round(TB.dyB)), BB.yyB = new FB.c("camHolder", VB), BB.camera = new UB.e("camera", new JB.RD(0, 0, 0), VB), BB.camera.parent = BB.yyB, uT(BB), (0, PB.h)(BB, ((BB, TB, dB) => (0, SB.f)(TB, dB, BB.Gu))), VB.clearColor = lB.d.FromArray(TB.clearColor), VB.ambientColor = lB.Color3.FromArray(TB.ambientColor);
          const yB = dB(VB, TB.lyB);
          VB.onNewLightAddedObservable.add((BB => {
            yB.some((TB => TB === BB)) || console.error(`Light "${BB.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), VB.skipPointerMovePicking = !0
        }(BB, TB, ET), HT(BB.Gu)
      },
      VyB: uT,
      setBabylonFog: function(BB, TB, dB, VB) {
        const yB = BB.Gu;
        yB.fogMode = 3, yB.fogStart = TB, yB.fogEnd = dB, yB.fogColor.set(VB[0], VB[1], VB[2])
      },
      oyB: function(BB, TB, dB) {
        return BB.engine.Lu >= 2 && (BB.kyB || (BB.kyB = new wB(BB.Gu)), !BB.kyB.failed) ? BB.kyB.iK(TB, dB) : new vT(TB, dB, BB.Gu)
      },
      OyB: function(BB, TB) {
        BB.Gu.kN.forEach((dB => {
          if (dB instanceof zB) return void dB.JBB(TB, BB.OL.FL);
          const VB = dB;
          if (VB.emitter.getConnectedParticleSystems)
            for (const BB of VB._particles) BB.position.set(BB.position.x - TB[0], BB.position.y - TB[1], BB.position.z - TB[2]);
          else {
            if (!VB.worldOffset) throw new Error("Particle system has no world offset");
            VB.worldOffset.x = -BB.OL.FL[0], VB.worldOffset.y = -BB.OL.FL[1], VB.worldOffset.z = -BB.OL.FL[2]
          }
        }))
      },
      linesFromArrays: function(BB, TB, dB) {
        const VB = new YB.c(TB, BB.Gu, null, void 0, void 0, !1);
        return (0, SB.d)(TB, dB, BB.Gu, VB), VB
      },
      qu: pT,
      LyB: function(BB, TB) {
        return mT.origin.bdB(TB.origin), mT.direction.bdB(TB.direction), mT.length = TB.length, mT.epsilon = TB.epsilon, mT.LyB(BB, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40322: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => HB,
      c: () => JB,
      g: () => lB,
      k: () => gB
    });
    var VB = dB(36180),
      yB = dB(37681),
      pB = dB(37673);

    function lB(BB, TB, dB, VB) {
      const yB = pB.s;
      TB.fill(0), BB.gravity.toArray(TB, yB.gravity), BB.colorDead.toArray(TB, yB.colorDead), dB[yB.ramp] = BB.useRampGradients ? 1 : 0;
      const lB = BB.getColorGradients(),
        JB = LB(BB, lB, "colour", VB);
      dB[yB.colorCount] = JB;
      for (let pB = 0; pB < JB; pB++) {
        var YB;
        const BB = lB[OB(lB, pB)];
        TB[yB.colorPositions + pB] = BB.gradient, BB.color1.toArray(TB, yB.color1 + 4 * pB), (null !== (YB = BB.color2) && void 0 !== YB ? YB : BB.color1).toArray(TB, yB.color2 + 4 * pB)
      }
      const gB = BB.getVelocityGradients(),
        oB = LB(BB, gB, "bu", VB);
      dB[yB.velocityCount] = oB;
      for (let pB = 0; pB < oB; pB++) vB(TB, yB.bu + 4 * pB, gB[OB(gB, pB)]);
      const kB = BB.useRampGradients ? BB.getColorRemapGradients() : null,
        DB = LB(BB, kB, "colour remap", VB);
      dB[yB.remapCount] = DB;
      for (let pB = 0; pB < DB; pB++) vB(TB, yB.remap + 4 * pB, kB[OB(kB, pB)])
    }

    function JB() {
      return {
        key: [],
        texels: new Uint8Array(4 * pB.k)
      }
    }
    const YB = [];

    function gB(BB, TB) {
      return oB(BB, YB), !EB(YB, TB.key) && (TB.key.length = 0, TB.key.push(...YB), TB.key.length > 0 && function(BB, TB) {
        for (let dB = 0; dB < pB.k; dB++) yB.l.GetCurrentGradient(dB / pB.k, BB, ((BB, TB, dB) => {
          VB.Color3.LerpToRef(BB.color, TB.color, dB, kB)
        })), TB[4 * dB] = 255 * kB.r, TB[4 * dB + 1] = 255 * kB.g, TB[4 * dB + 2] = 255 * kB.b, TB[4 * dB + 3] = 255
      }(BB.getRampGradients(), TB.texels), !0)
    }

    function oB(BB, TB) {
      TB.length = 0;
      const dB = BB.useRampGradients ? BB.getRampGradients() : null;
      if (null !== dB && void 0 !== dB && dB.length) {
        TB.push(dB.length);
        for (const BB of dB) TB.push(BB.gradient, BB.color.r, BB.color.g, BB.color.b)
      }
    }
    const kB = new VB.Color3;

    function LB(BB, TB, dB, VB) {
      return TB ? TB.length > pB.e ? (VB(`particleStops:${dB}`, `GPU particles use the first 2 and last ${pB.e-2} of more than ${pB.e} ${dB} gradient stops (${BB.name})`), pB.e) : TB.length : 0
    }

    function OB(BB, TB) {
      return TB < 2 || BB.length <= pB.e ? TB : BB.length - pB.e + TB
    }
    const DB = new Float32Array(pB.n),
      uB = new Uint32Array(DB.buffer);

    function HB(BB, TB, dB) {
      return lB(BB, DB, uB, dB), TB && EB(uB, TB) ? null : uB.slice()
    }

    function EB(BB, TB) {
      if (BB.length !== TB.length) return !1;
      for (let dB = 0; dB < BB.length; dB++)
        if (BB[dB] !== TB[dB]) return !1;
      return !0
    }

    function vB(BB, TB, dB) {
      var VB;
      BB[TB] = dB.gradient, BB[TB + 1] = dB.factor1, BB[TB + 2] = null !== (VB = dB.factor2) && void 0 !== VB ? VB : dB.factor1
    }
  },
  40314: (BB, TB, dB) => {
    function VB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const TB = new Set;
      return (dB, VB) => {
        TB.has(dB) || (TB.add(dB), console.warn(BB + VB))
      }
    }
    dB.d(TB, {
      d: () => VB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);