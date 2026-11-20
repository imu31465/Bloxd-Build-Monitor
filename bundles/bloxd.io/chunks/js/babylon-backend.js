export const id = 0;
export const ids = [0];
export const modules = {
  40565: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      CapeMaterialPlugin: () => Wb,
      HueTintMaterialPlugin: () => Cb,
      LifeformMaterialPlugin: () => db,
      OverlayMaterialPlugin: () => rb
    });
    var Bb = hb(40574),
      Ob = hb(37605);
    class Gb extends((0, Bb.i)(Ob.e)) {}(0, Bb.l)(Ob.e, Gb);
    var Ub = hb(36800);
    class Lb extends((0, Bb.i)(Ub.f)) {}(0, Bb.l)(Ub.f, Lb);
    var Yb = hb(37452);
    class Sb extends((0, Bb.i)(Yb.g)) {}(0, Bb.l)(Yb.g, Sb);
    var ab = hb(37054),
      Hb = hb(39705),
      wb = hb(37050);
    class Zb extends((0, Bb.i)(wb.g)) {
      constructor(bb, ub, hb) {
        super(bb, ub, hb), (0, ab.h)(bb)
      }
      dispose(bb) {
        (0, ab.i)(this._material), super.dispose(bb)
      }
    }(0, Bb.l)(wb.g, Zb), (0, wb.j)({
      disableUnusedSpecularTerm: Bb.e,
      isLightingDisabled: bb => bb instanceof Hb.StandardMaterial && bb.disableLighting
    });
    var Xb = hb(38315);
    class pb extends((0, Bb.i)(Xb.e)) {}(0, Bb.l)(Xb.e, pb);
    var ob = hb(38414),
      Ab = hb(36895),
      lb = hb(37746),
      Kb = hb(36864);
    class Wb extends((0, Bb.i)(ob.e)) {}(0, Bb.l)(ob.e, Wb);
    class Cb extends((0, Bb.i)(Ab.d)) {}(0, Bb.l)(Ab.d, Cb);
    class db extends((0, Bb.i)(lb.k)) {}(0, Bb.l)(lb.k, db);
    class rb extends((0, Bb.i)(Kb.d)) {}(0, Bb.l)(Kb.d, rb)
  },
  40996: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      addBabylonLights: () => Au,
      default: () => Wu
    });
    var Bb = hb(41005),
      Ob = (hb(39441), hb(40558), hb(39940), hb(41021)),
      Gb = hb(39277),
      Ub = hb(36889),
      Lb = hb(36720),
      Yb = hb(41037),
      Sb = hb(41043),
      ab = hb(36855),
      Hb = (hb(40574), hb(41056)),
      wb = hb(41051),
      Zb = hb(38342),
      Xb = hb(41065),
      pb = hb(39308),
      ob = hb(38323);
    const Ab = "gpuParticles",
      lb = ob.v,
      Kb = bb => bb / 4,
      Wb = bb => `gpuParticleSystem[${bb>>2}].${"xyzw"[3&bb]}`,
      Cb = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${ob.b}\n#define COLOR_POSITIONS ${Kb(lb.colorPositions)}\n#define COLOR1 ${Kb(lb.color1)}\n#define COLOR2 ${Kb(lb.color2)}\n#define VELOCITY ${Kb(lb.Mp)}\n#define REMAP ${Kb(lb.remap)}\n#define RECORDS_PER_ROW ${ob.m}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${ob.p/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Wb(lb.gravity)}, ${Wb(lb.gravity+1)}, ${Wb(lb.gravity+2)}); }\nint colorCount() { return int(${Wb(lb.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Kb(lb.colorDead)}]; }\nint velocityCount() { return int(${Wb(lb.velocityCount)}); }\nint remapCount() { return int(${Wb(lb.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    pb.e.ShadersStore[`${Ab}VertexShader`] = Cb, pb.e.ShadersStore[`${Ab}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const db = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      rb = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var jb = hb(38321),
      nb = hb(41072);
    class Db extends jb.c {
      constructor(bb, ub, hb, Bb) {
        super(bb, ub, hb), this.renderer = hb, this.Xp = Bb, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(ob.p), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, nb.d)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (bb, ub) => {
          const {
            engine: hb
          } = this, Bb = hb._gl;
          hb._bindTextureDirectly(Bb.TEXTURE_2D, this.records, !0), hb._unpackFlipY(!1);
          const Ob = this.ring.recordBits;
          for (let Gb = bb; Gb < ub;) {
            const bb = Math.floor(Gb / ob.m),
              hb = Math.min(ub, (bb + 1) * ob.m);
            Bb.texSubImage2D(Bb.TEXTURE_2D, 0, Gb % ob.m * 4, bb, 4 * (hb - Gb), 1, Bb.RGBA_INTEGER, Bb.UNSIGNED_INT, Ob, Gb * ob.d), Gb = hb
          }
          hb._bindTextureDirectly(Bb.TEXTURE_2D, null)
        }, this.id = bb;
        const Ob = Bb.UX();
        this.engine = Ob;
        const Gb = Math.max(1, ub),
          Ub = Math.min(Gb, ob.m);
        this.records = Ob.createRawTexture(null, 4 * Ub, Math.ceil(Gb / Ub), Hb.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Hb.e.TEXTURE_NEAREST_SAMPLINGMODE, null, Hb.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Xp.getAnimationRatio() || 1;
        const ub = this.Xp.getFrameId();
        if (ub === this.animatedFrame) return !1;
        const hb = super.animate(bb);
        return hb && (this.animatedFrame = ub, this.ring.takeUploads(this.uploadSlots)), hb
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(bb) {
        (0, nb.f)(this, this.uniforms, this.uniformBits, bb);
        for (const hb of ob.r) this.uniforms[hb] = this.uniformBits[hb];
        var ub;
        (0, nb.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ub = this.ramp) || void 0 === ub || ub.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = wb.b.CreateRGBATexture(this.rampTexels.texels, ob.j, 1, this.Xp, !1, !1, Hb.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var bb;
        this.records.dispose(), null === (bb = this.ramp) || void 0 === bb || bb.dispose(), this.ramp = null
      }
    }
    class xb {
      constructor(bb) {
        this.Xp = bb, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Xb.d)(), this.engine = bb.UX(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = wb.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, bb, !1, !1, Hb.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      Hs(bb, ub) {
        const hb = ob.m * this.engine.getCaps().maxTextureSize;
        ub > hb && this.warnOnce(`capacity:${bb}`, `particle system ${bb} holds ${hb} particles, not ${ub}: its records texture's limit`);
        const Bb = new Db(bb, Math.min(ub, hb), this, this.Xp);
        return this.Xp.addParticleSystem(Bb), Bb
      }
      canDraw(bb) {
        var ub, hb;
        if (this.failed || null === (ub = bb.texture) || void 0 === ub || null === (hb = ub.mirror) || void 0 === hb || !hb.isReady()) return !1;
        for (const Bb of (0, Zb.i)(bb.blendMode))
          if (!this.effectFor(Bb).isReady()) return !1;
        return !0
      }
      disposeStopped(bb) {
        this.Xp._toBeDisposed.push(bb)
      }
      remove(bb) {
        this.Xp.removeParticleSystem(bb), bb.releaseGl()
      }
      render(bb) {
        var ub;
        if (!bb.isReady() || !bb.hasLiveParticles()) return 0;
        const {
          engine: hb,
          Xp: Bb,
          frame: Ob
        } = this;
        bb.prepareDraw(this.warnOnce), bb.drawOffset(Ob, 0), Ob[3] = bb.drawTime();
        const Gb = bb.ring.drawStart(),
          Ub = bb.ring.drawCount(),
          Lb = null !== (ub = bb.ramp) && void 0 !== ub ? ub : this.whiteRamp;
        hb.setState(!1);
        for (const Yb of (0, Zb.i)(bb.blendMode)) {
          const ub = this.effectFor(Yb);
          hb.enableEffect(ub), ub.setTexture("gpuParticleTexture", bb.texture.mirror), ub.setTexture("gpuParticleRampTexture", Lb), ub._bindTexture("gpuParticleRecords", bb.records), ub.setMatrix("gpuParticleView", Bb.getViewMatrix()), ub.setMatrix("gpuParticleProjection", Bb.getProjectionMatrix()), ub.setFloatArray4("gpuParticleSystem", bb.uniforms), ub.setFloat4("gpuParticleFrame", Ob[0], Ob[1], Ob[2], Ob[3]), ub.setFloat2("gpuParticleRange", Gb, Ub), ub.setFloat("gpuParticleRamp", bb.uniforms[ob.v.ramp]), hb.bindBuffers(this.vertexBuffers, null, ub), hb.setAlphaMode((0, Zb.g)(Yb)), hb.drawArraysType(Hb.e.MATERIAL_TriangleStripDrawMode, 0, 4, Ub), ub._bindTexture("gpuParticleRecords", null)
        }
        return hb.setAlphaMode(Hb.e.ALPHA_DISABLE), Ub
      }
      awaitLink(bb) {
        const ub = bb.getPipelineContext(),
          hb = this.engine._gl;
        !this.failed && hb && (!ub || ub.isParallelCompiled && !ub.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ub.isParallelCompiled && ub.program && (hb.getProgramParameter(ub.program, hb.LINK_STATUS) || this.fail(hb.getProgramInfoLog(ub.program) || "a program did not link")))
      }
      effectFor(bb) {
        return bb === Zb.c ? this.multiplyEffect : this.effect
      }
      createEffect(bb) {
        return this.engine.createEffect(Ab, [], db, rb, bb, void 0, void 0, ((bb, ub) => {
          this.fail(ub)
        }))
      }
      fail(bb) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${bb}`);
          for (const bb of this.Xp.fW.slice()) bb instanceof Db && bb.disposeOnStop && bb.dispose()
        }
      }
    }
    var zb = hb(39661),
      gb = hb(40551),
      ib = hb(39411),
      vb = hb(39628),
      tb = hb(39625),
      Jb = hb(39544),
      eb = hb(40608),
      Nb = hb(37241),
      sb = hb(41076),
      Mb = hb(41083),
      mb = hb(41088),
      Ib = hb(39573),
      Pb = hb(2667),
      qb = hb(37124),
      Eb = hb(39758),
      yb = hb(37204),
      Vb = hb(37152);

    function Fb(bb) {
      if (bb.visibility < 1 || !bb.isVisible || !bb.isEnabled() || bb.metadata[Vb.h] || !bb.isReady()) return !0;
      const ub = bb.FW;
      if (!ub || 0 === ub.length) return !0;
      for (let hb = 0; hb < ub.length; hb++) {
        const Bb = ub[hb],
          Ob = Bb.HX();
        if (!Ob || !Ob.isReadyForSubMesh(bb, Bb, !1)) return !0
      }
      return !1
    }
    class fb {
      constructor(bb, ub) {
        this.PH = bb, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ub.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      kw(bb) {
        var ub;
        const hb = this.armed;
        if (this.armed = !1, this.vis = null, !hb) return !1;
        this.culled = 0;
        const {
          PH: Bb
        } = this, Ob = null === (ub = Bb.zW) || void 0 === ub ? void 0 : ub.visibility;
        if (!Ob || !bb || Bb.xX.zX) return !1;
        if (!(Bb.eH.CBb[0] >= yb.d)) return !1;
        const Gb = bb.getProjectionMatrix().m;
        if (0 !== Gb[15]) return !1;
        const Ub = Bb.Ow,
          Lb = bb.globalPosition,
          Yb = this.eye;
        return Yb[0] = Lb.x + Ub[0], Yb[1] = Lb.y + Ub[1], Yb[2] = Lb.z + Ub[2], !!Ob.eyeClear(Yb[0], Yb[1], Yb[2], bb.minZ, Gb, Bb.eH) && (this.vis = Ob, this.passable.clear(), this.count = 0, !0)
      }
      see(bb, ub) {
        const hb = this.count++;
        if (hb === this.cellSlots.length) {
          const bb = new Int32Array(2 * hb);
          bb.set(this.cellSlots), this.cellSlots = bb
        }
        this.cellSlots[hb] = ub, this.meshes[hb] = bb
      }
      seeThrough(bb) {
        this.passable.add(bb)
      }
      finish(bb, ub) {
        const {
          vis: hb,
          eye: Bb,
          meshes: Ob,
          count: Gb,
          cellSlots: Ub
        } = this, {
          eH: Lb
        } = this.PH, [Yb, Sb] = Lb.CBb, ab = null !== hb && hb.update(Bb[0], Bb[1], Bb[2], Lb.Abb, Yb, Sb, this.passable);
        let Hb = 0;
        for (let wb = 0; wb < Gb; wb++) {
          const Bb = Ob[wb];
          if (ab) {
            const bb = 3 * Ub[wb];
            if (bb >= 0 && !hb.isDrawn(ub[bb], ub[bb + 1], ub[bb + 2])) {
              Hb++;
              continue
            }
          }
          Ib.h.prototype.push.call(bb, Bb)
        }
        Ob.fill(null, 0, Gb), this.count = 0, this.vis = null, this.culled = Hb
      }
    }
    var kb = hb(37192),
      Tb = hb(37136),
      cb = hb(39728),
      Qb = hb(41097),
      Rb = hb(39736),
      bu = hb(39670);
    let uu = 1;
    const hu = new WeakSet;

    function Bu() {
      return uu
    }

    function Ou() {
      uu = uu >= 1073741823 ? 1 : uu + 1
    }

    function Gu(bb) {
      const ub = bb.metadata;
      if (!ub || !0 !== ub[qb.n]) return;
      const hb = ub[qb.t],
        Bb = null === hb || void 0 === hb ? void 0 : hb._noaStamps;
      if (!hb || !Bb) return;
      const Ob = hb.entries.indexOf(bb);
      Ob >= 0 && (Bb[Ob] = 0)
    }

    function Uu(bb) {
      const ub = bb.FW;
      for (let hb = 0; hb < ub.length; hb++) {
        const bb = ub[hb].HX();
        if (bb && !bb.isFrozen) return !1
      }
      for (let hb = 0; hb < ub.length; hb++) {
        const bb = ub[hb].HX();
        bb && hu.add(bb)
      }
      return !0
    }
    let Lu = !1;
    const Yu = new WeakSet;

    function Su(bb, ub) {
      const hb = bb[ub];
      if ("function" !== typeof hb) throw new Error(`terrainDrawState: Babylon has no ${ub} to hook`);
      return hb
    }

    function au(bb, ub, hb, Bb, Ob) {
      const Gb = hb.eH.Abb,
        Ub = new Map;
      let Lb = 0;
      const Yb = new fb(hb, bb),
        Sb = new kb.c(Gb, bb.UX());
      ! function(bb) {
        if (Yu.has(bb) || (Yu.add(bb), bb.onContextLostObservable.add(Ou), bb.onContextRestoredObservable.add(Ou)), Lu) return;
        Lu = !0;
        const ub = Qb.b.prototype,
          hb = Su(ub, "_markSubMeshesAsDirty");
        Object.assign(ub, {
          _markSubMeshesAsDirty(bb) {
            hb.call(this, bb), Gu(this)
          }
        });
        const Bb = Su(bu.b.prototype, "_syncParentEnabledState");
        Object.assign(bu.b.prototype, {
          _syncParentEnabledState() {
            Bb.call(this), Gu(this)
          }
        });
        const Ob = Su(Rb.c.prototype, "resetDrawCache");
        Rb.c.prototype.resetDrawCache = function(bb, ub) {
          Ob.call(this, bb, ub), Gu(this.getMesh())
        };
        const Gb = cb.e.prototype,
          Ub = Su(Gb, "markDirty");
        Gb.markDirty = function(bb) {
          Ub.call(this, bb), hu.has(this) && Ou()
        };
        const Lb = Su(Gb, "_markAllSubMeshesAsDirty");
        Object.assign(Gb, {
          _markAllSubMeshesAsDirty(bb) {
            Lb.call(this, bb), hu.has(this) && Ou()
          }
        })
      }(bb.UX());
      let ab = new Float64Array(384),
        Hb = new Int32Array(64),
        wb = new Uint8Array(64),
        Zb = new Float64Array(64),
        Xb = new Int32Array(192),
        pb = 0;
      const ob = [],
        Ab = new Float64Array(24),
        lb = () => {
          const bb = ob.pop();
          return void 0 !== bb ? (Hb[bb] = 0, bb) : (pb === Hb.length && (ab = Hu(ab, new Float64Array(2 * ab.length)), Hb = Hu(Hb, new Int32Array(2 * Hb.length)), wb = Hu(wb, new Uint8Array(2 * wb.length)), Zb = Hu(Zb, new Float64Array(2 * Zb.length)), Xb = Hu(Xb, new Int32Array(2 * Xb.length))), pb++)
        },
        Kb = bb => {
          const ub = 6 * bb._noaSlot,
            hb = bb.zBb[0],
            Bb = bb.zBb[1];
          ab[ub] = hb.x, ab[ub + 1] = hb.y, ab[ub + 2] = hb.z, ab[ub + 3] = Bb.x, ab[ub + 4] = Bb.y, ab[ub + 5] = Bb.z
        },
        Wb = (bb, ub, hb) => {
          if (!hb) return Yb.see(bb, -1), !1;
          const Bb = Fb(bb);
          return Bb && Yb.seeThrough(Zb[ub]), Yb.see(bb, ub), !Bb
        };
      let Cb = -1;
      return bb.getActiveMeshCandidates = () => {
        const hb = bb.frustumPlanes,
          Bb = ub._selectionContent;
        Bb.reset(), (hb => {
          const Bb = bb.frustumPlanes;
          Lb = Lb + 1 | 0 || 1;
          const Ob = ub.blocks,
            Gb = Yb.kw(bb.activeCamera),
            Ub = Gb && !0;
          if (Ub) {
            const ub = bb.UX().currentRenderPassId;
            ub !== Cb && (Cb = ub, Ou())
          }
          const Sb = Bu(),
            Zb = Ub && !1;
          Ob.length > 0 && function(bb, ub) {
            for (let hb = 0; hb < 6; hb++) {
              const Bb = bb[hb],
                Ob = Bb.normal;
              ub[4 * hb] = Ob.x, ub[4 * hb + 1] = Ob.y, ub[4 * hb + 2] = Ob.z, ub[4 * hb + 3] = Bb.d
            }
          }(Bb, Ab);
          const pb = ab,
            ob = Hb,
            lb = wb;
          for (let bb = 0; bb < Ob.length; bb++) {
            const ub = Ob[bb];
            if (!Eb.e.IsInFrustum(ub.zBb, Bb)) continue;
            const ab = ub.entries;
            {
              const bb = ub._noaSlots,
                Bb = ub._noaStamps,
                Ob = ub._noaTerrain;
              for (let ub = 0; ub < ab.length; ub++) {
                const Hb = bb[ub];
                if (ob[Hb] !== Lb && (ob[Hb] = Lb, lb[Hb] = wu(pb, 6 * Hb, Ab) ? 1 : 0), 0 === lb[Hb]) continue;
                const wb = ab[ub];
                if (Ub && Bb[ub] === Sb) Zb && 1 === Ob[ub] && Fb(wb) && 0, Yb.see(wb, 1 === Ob[ub] ? Hb : -1);
                else if (Ub) {
                  Bb[ub] = Sb;
                  const bb = !0 === wb.metadata[Tb.k];
                  Ob[ub] = bb ? 1 : 0;
                  const hb = Wb(wb, Hb, bb);
                  !bb || hb && Uu(wb) || (Bb[ub] = 0)
                } else Gb ? Wb(wb, Hb, !0 === wb.metadata[Tb.k]) : Ib.h.prototype.push.call(hb, wb)
              }
              continue
            }
          }
          Gb && Yb.finish(hb, Xb)
        })(Bb), Sb.apply(Bb, bb.activeCamera);
        const Gb = ub.xBb;
        for (let bb = 0; bb < Gb.length; bb++) {
          const ub = Gb[bb];
          ub.isEnabled() && Ib.h.prototype.push.call(Bb, ub)
        }
        return Ob(Bb, hb), Bb
      }, {
        gBb: () => Yb.culled,
        pBb: (bb, ub) => {
          const Ob = Math.floor(ub[0] / Gb),
            Lb = Math.floor(ub[1] / Gb),
            Yb = Math.floor(ub[2] / Gb),
            Sb = `${Ob}|${Lb}|${Yb}`;
          let ab = Ub.get(Sb);
          if (!ab) {
            const bb = [0, 0, 0];
            hb.oub([Ob * Gb - 1, Lb * Gb - 1, Yb * Gb - 1], null, bb), ab = Object.assign(Bb(bb, Gb + 2), {
              iBb: Sb,
              vBb: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: lb()
            }), Kb(ab), Zb[ab._noaSlot] = (0, Pb.g)(Ob, Lb, Yb), Xb[3 * ab._noaSlot] = Ob, Xb[3 * ab._noaSlot + 1] = Lb, Xb[3 * ab._noaSlot + 2] = Yb, Ub.set(Sb, ab)
          }
          ab.vBb++, bb.metadata[qb.v] = ab
        },
        vN: bb => {
          const ub = bb.metadata[qb.v];
          ub && (ub.vBb--, ub.vBb <= 0 && (Ub.delete(ub.iBb), ob.push(ub._noaSlot)), bb.metadata[qb.v] = null)
        },
        DBb: (bb, ub) => {
          const hb = bb,
            Bb = ub.metadata[qb.v];
          (hb._noaSlots ??= []).push(Bb._noaSlot), (hb._noaStamps ??= []).push(0), (hb._noaTerrain ??= []).push(0), hb.entries.push(ub)
        },
        removeEntry: (bb, ub) => {
          const hb = bb,
            Bb = hb.entries,
            Ob = Bb.indexOf(ub);
          if (Ob < 0) return;
          const Gb = hb._noaSlots,
            Ub = hb._noaStamps,
            Lb = hb._noaTerrain,
            Yb = Bb.length - 1;
          Bb[Ob] = Bb[Yb], Gb[Ob] = Gb[Yb], Ub[Ob] = Ub[Yb], Lb[Ob] = Lb[Yb], Bb.pop(), Gb.pop(), Ub.pop(), Lb.pop()
        },
        N_: bb => {
          for (const ub of Ub.values()) {
            ub.WBb.tBb(bb), ub.KBb.tBb(bb);
            for (const hb of ub.zBb) hb.tBb(bb);
            Kb(ub)
          }
        }
      }
    }

    function Hu(bb, ub) {
      return ub.set(bb), ub
    }

    function wu(bb, ub, hb) {
      const Bb = bb[ub],
        Ob = bb[ub + 1],
        Gb = bb[ub + 2],
        Ub = bb[ub + 3],
        Lb = bb[ub + 4],
        Yb = bb[ub + 5];
      for (let Sb = 0; Sb < 24; Sb += 4) {
        const bb = hb[Sb],
          ub = hb[Sb + 1],
          ab = hb[Sb + 2];
        if (!(bb * (bb >= 0 ? Ub : Bb) + ub * (ub >= 0 ? Lb : Ob) + ab * (ab >= 0 ? Yb : Gb) + hb[Sb + 3] >= 0)) return !1
      }
      return !0
    }
    var Zu = hb(37402);
    class Xu {
      constructor(bb, ub) {
        var hb = bb.Xp;
        hb.bBb(new mb.b(hb));
        var Bb = new sb.c(Yb);
        hb.eBb = Bb, Bb.blocks = [];
        var Ob, Gb = {},
          Ub = [];
        this.textPlanes = Ub, this.gBb = () => Ob.gBb(), this.N_ = bb => {
          ab(Bb, bb), Ob.N_(bb)
        }, this.pBb = (ub, hb, Lb) => {
          if (!ub.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!ub.metadata[qb.t] && !ub.metadata[qb.l]) {
            if (!hb) {
              var Yb = Bb.xBb;
              if (ub.metadata[qb.z] && !ub.parent) {
                Yb = Ub;
                var ab = ub.XM().sBb;
                ub.metadata[qb.D] = ab.center.length() + ab.radius, ub.LX = !0
              }
              return Yb.push(ub), ub.metadata[qb.g] = Yb, void(ub.metadata[qb.l] = !0)
            }
            var wb = Math.floor(Lb[0] / Sb),
              Zb = Math.floor(Lb[1] / Sb),
              Xb = Math.floor(Lb[2] / Sb),
              pb = wb + "|" + Zb + "|" + Xb,
              ob = Gb[pb];
            if (!ob) {
              var Ab = [wb * Sb, Zb * Sb, Xb * Sb],
                lb = [0, 0, 0];
              bb.PH.oub(Ab, null, lb), ob = Hb(lb, Sb), Bb.blocks.push(ob), Gb[pb] = ob, ob.iBb = pb
            }
            Ob.pBb(ub, Lb), Ob.DBb(ob, ub), ob.vBb = (ob.vBb || 0) + 1, ub.metadata[qb.t] = ob, ub.metadata[qb.n] = !0, ub.LX = !0
          }
        }, this.vN = bb => {
          if (bb.metadata) {
            bb.metadata[qb.l] && ((0, Pb.n)(bb.metadata[qb.g], bb), bb.metadata[qb.l] = !1), bb.metadata[qb.g] === Ub && (bb.LX = !1), bb.metadata[qb.g] = void 0, bb.metadata[qb.D] = void 0;
            var ub = bb.metadata[qb.t];
            ub && ub.entries && (bb.metadata[qb.n] && Ob.removeEntry(ub, bb), ub.vBb--, ub.vBb <= 0 && (delete Gb[ub.iBb], (0, Pb.n)(Bb.blocks, ub))), Ob.vN(bb), bb.metadata[qb.t] = null, bb.metadata[qb.n] = !1
          }
        }, this.h_ = function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (bb.metadata[qb.t]) {
            if (bb.metadata[qb.n] === ub) return;
            var hb = bb.metadata[qb.t];
            hb && hb.entries && (ub ? Ob.DBb(hb, bb) : Ob.removeEntry(hb, bb)), bb.metadata[qb.n] = ub
          } else {
            if (bb.metadata[qb.l] === ub) return;
            var Gb = bb.metadata[qb.g] || Bb.xBb;
            ub ? Gb.push(bb) : (0, Pb.n)(Gb, bb), bb.metadata[qb.l] = ub
          }
        };
        var Yb = () => {},
          Sb = ub * bb.PH.eH.Abb,
          ab = (bb, ub) => {
            bb.blocks.forEach((bb => {
              bb.WBb.tBb(ub), bb.KBb.tBb(ub), bb.zBb.forEach((bb => bb.tBb(ub))), bb.blocks && ab(bb, ub)
            }))
          },
          Hb = (bb, ub) => {
            var hb = new Lb.YX(bb[0], bb[1], bb[2]),
              Bb = new Lb.YX(bb[0] + ub, bb[1] + ub, bb[2] + ub);
            return new Mb.e(hb, Bb, void 0, void 0, void 0, Yb)
          };
        Ob = au(hb, Bb, bb.PH, Hb, ((bb, ub) => {
          for (var hb = 0; hb < Ub.length; hb++) {
            var Bb = Ub[hb];
            Bb.isEnabled(!1) && ((0, Zu.b)(Bb, ub) && Ib.h.prototype.push.call(bb, Bb))
          }
        }))
      }
    }

    function pu(bb) {
      const {
        holderPosition: ub,
        holderRotation: hb,
        pT: Bb,
        fov: Ob,
        near: Gb,
        far: Ub
      } = bb.model.XT, Lb = bb.FBb;
      Lb.position.M_(ub[0], ub[1], ub[2]), Lb.rotation.M_(hb[0], hb[1], hb[2]);
      const Yb = bb.camera;
      Yb.position.M_(Bb[0], Bb[1], Bb[2]), Yb.fov = Ob, Yb.minZ = Gb, Yb.maxZ = Ub
    }

    function ou(bb) {
      const ub = bb.UX(),
        hb = ub,
        Bb = hb._gl;
      if (!Bb || hb.NX < 2 || ub.aBb || Bb.getParameter(Bb.DEPTH_BITS) < 24) return !1;
      const Ob = bb._renderingManager,
        Gb = Ob.getRenderingGroup(-1),
        Ub = Ob.getRenderingGroup(0),
        Lb = vb.e.prototype.render;
      return Gb.render = function(bb, ub, hb, Bb, Ob, Gb, Yb, Sb, ab) {
        (bb || Ub._empty) && Lb.call(this, bb, ub, hb, Bb, Ob, Gb, Yb, Sb, ab)
      }, Ub.render = function(bb, hb, Ob, Ub) {
        let Yb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Sb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ab = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          wb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Zb = arguments.length > 8 ? arguments[8] : void 0;
        bb ? Lb.call(this, bb, hb, Ob, Ub, Yb, Sb, ab, wb, Zb) : (ub.setAlphaMode(Hb.e.ALPHA_DISABLE), Lb.call(this, null, !1, !1, Ub, Yb, Sb, ab, !1), Gb._empty || (Bb.depthRange(1, 1), Lb.call(Gb, null, hb, Ob, Ub, Yb, Sb, ab, wb, Zb), Bb.depthRange(0, 1)), Lb.call(this, null, hb, Ob, Ub, !1, !1, !1, wb, Zb))
      }, !0
    }

    function Au(bb, ub) {
      return [ub, Nb.d].map(((ub, hb) => {
        const Bb = new Ob.d("light", Lb.YX.FromArray(ub), bb);
        return Bb.diffuse = Ub.Color3.FromArray([1, 1, 1]), Bb.specular = Ub.Color3.FromArray([1, 1, 1]), Bb.intensity = Nb.c[hb], Bb
      }))
    }
    class lu extends Sb.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(bb) {
        var ub;
        this.heldTexture = bb, this.particleTexture = null !== (ub = null === bb || void 0 === bb ? void 0 : bb.mirror) && void 0 !== ub ? ub : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bb && (this.particleTexture = null, (0, ab.z)(this.heldTexture), this.heldTexture = null), super.dispose(bb, ub, hb)
      }
    }
    const Ku = Bb.c.Zero();
    const Wu = {
      zhb: function(bb, ub) {
        return new Gb.c(bb, ub.nhb, {
          preserveDrawingBuffer: ub.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      TBb: function(bb, ub) {
        ! function(bb, ub, hb) {
          const Bb = new Jb.e(bb.engine);
          bb.Xp = Bb, Bb.detachControl(), Bb.autoClear = !1, tb.c.MIN_RENDERINGGROUPS = -1;
          for (let Gb = tb.c.MIN_RENDERINGGROUPS; Gb <= 1; Gb++) Bb.setRenderingOrder(Gb, vb.e.PainterSortCompare, vb.e.PainterSortCompare, vb.e.PainterSortCompare);
          Bb.setRenderingAutoClearDepthStencil(0, !1), ib.b.Enabled = !1, bb.EBb = new Xu(bb, Math.round(ub.yBb)), bb.FBb = new gb.d("camHolder", Bb), bb.camera = new zb.e("camera", new Lb.YX(0, 0, 0), Bb), bb.camera.parent = bb.FBb, pu(bb), (0, Nb.f)(bb, ((bb, ub, hb) => (0, eb.h)(ub, hb, bb.Xp))), Bb.clearColor = Ub.b.FromArray(ub.clearColor), Bb.ambientColor = Ub.Color3.FromArray(ub.ambientColor);
          const Ob = hb(Bb, ub.kBb);
          Bb.onNewLightAddedObservable.add((bb => {
            Ob.some((ub => ub === bb)) || console.error(`Light "${bb.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Bb.skipPointerMovePicking = !0
        }(bb, ub, Au), ou(bb.Xp)
      },
      VBb: pu,
      setBabylonFog: function(bb, ub, hb, Bb) {
        const Ob = bb.Xp;
        Ob.fogMode = 3, Ob.fogStart = ub, Ob.fogEnd = hb, Ob.fogColor.set(Bb[0], Bb[1], Bb[2])
      },
      QBb: function(bb, ub, hb) {
        return bb.engine.NX >= 2 && (bb.RBb || (bb.RBb = new xb(bb.Xp)), !bb.RBb.failed) ? bb.RBb.Hs(ub, hb) : new lu(ub, hb, bb.Xp)
      },
      uOb: function(bb, ub) {
        bb.Xp.fW.forEach((hb => {
          if (hb instanceof Db) return void hb.N_(ub, bb.PH.Ow);
          const Bb = hb;
          if (Bb.emitter.getConnectedParticleSystems)
            for (const bb of Bb._particles) bb.position.set(bb.position.x - ub[0], bb.position.y - ub[1], bb.position.z - ub[2]);
          else {
            if (!Bb.worldOffset) throw new Error("Particle system has no world offset");
            Bb.worldOffset.x = -bb.PH.Ow[0], Bb.worldOffset.y = -bb.PH.Ow[1], Bb.worldOffset.z = -bb.PH.Ow[2]
          }
        }))
      },
      linesFromArrays: function(bb, ub, hb) {
        const Bb = new Yb.b(ub, bb.Xp, null, void 0, void 0, !1);
        return (0, eb.e)(ub, hb, bb.Xp, Bb), Bb
      },
      Ap: Gu,
      bOb: function(bb, ub) {
        return Ku.origin.mD(ub.origin), Ku.direction.mD(ub.direction), Ku.length = ub.length, Ku.epsilon = ub.epsilon, Ku.bOb(bb, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40574: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ib,
      i: () => lb,
      l: () => Fb
    });
    var Bb = hb(39705),
      Ob = hb(40580),
      Gb = hb(40610),
      Ub = hb(40586),
      Lb = hb(37425),
      Yb = hb(37436),
      Sb = hb(37438),
      ab = hb(37444),
      Hb = hb(36846),
      wb = hb(36855),
      Zb = hb(40588),
      Xb = hb(36830),
      pb = hb(36836),
      ob = hb(36814);

    function Ab(bb, ub) {
      return Object.assign((function(bb, hb, Bb, Ob) {
        return ub(this.featureState, bb, hb, Bb, Ob)
      }), {
        JZ: bb
      })
    }

    function lb(bb) {
      const ub = class extends Zb.c {
          constructor(ub, hb) {
            const Bb = (0, pb._)(ub),
              Ob = Bb && (0, pb.v)(Bb, bb.name);
            for (var Gb = arguments.length, Ub = new Array(Gb > 2 ? Gb - 2 : 0), Lb = 2; Lb < Gb; Lb++) Ub[Lb - 2] = arguments[Lb];
            super(ub, bb.name, bb.priority, Ob ? Ob.defines : bb.defines(...Ub), !1), this.featureState = void 0, this.featureState = hb, this._pluginManager._addPlugin(this), this._enable(!0), (0, pb.w)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === ob.d.GLSL || bb === ob.d.WGSL
          }
        },
        hb = (0, Xb.i)(bb);
      for (const [Bb, Ob] of Object.entries(Xb.b)) {
        const Gb = bb[Bb];
        if (Gb) {
          const bb = hb[Bb];
          Object.defineProperty(ub.prototype, Ob, {
            value: Ab(Gb, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ub
    }
    class Kb extends(lb(Lb.b)) {}
    var Wb = hb(39277),
      Cb = hb(40592);
    const db = new WeakMap;

    function rb(bb, ub, hb) {
      let Bb = db.get(hb);
      Bb || (Bb = new Map, db.set(hb, Bb));
      const {
        url: Ob
      } = bb;
      let Gb = Bb.get(Ob);
      return Gb || (Gb = async function(bb, ub, hb) {
        const {
          width: Bb,
          height: Ob
        } = bb.getSize(), Gb = Math.round(Ob / Bb), Lb = ub && ub.byteLength === Bb * Bb * Gb * 4 ? ub : bb._readPixelsSync();
        return new Cb.d(Lb, Bb, Bb, Gb, Wb.c.TEXTUREFORMAT_RGBA, hb, !0, !1, Ub.c.NEAREST_NEAREST_MIPLINEAR)
      }(bb, ub, hb), Bb.set(Ob, Gb), Gb.catch((() => {
        Bb.delete(Ob)
      }))), Gb
    }
    var jb = hb(37449);
    class nb extends(lb(Yb.h)) {
      constructor(bb, ub) {
        super(bb, ub), ub.textures.forEach(((bb, ub) => {
          bb.mirror.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, ub).catch((bb => {
              console.error(`Failed to build texture array for atlas ${ub}`, bb)
            }))
          }))
        })), (0, jb.h)(ub, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, ub) {
        var hb, Bb;
        const Ob = this.featureState,
          {
            width: Gb,
            height: Ub
          } = bb.getSize(),
          Lb = Ob.useWebGL2 ? await rb(bb, null !== (hb = null === (Bb = Ob.sources.pixels) || void 0 === Bb ? void 0 : Bb[ub]) && void 0 !== hb ? hb : null, this._material.ZN()) : null;
        (0, jb.b)(this._material, Ob, ub, Lb, Gb, Math.round(Ub / Gb), this._material.shaderLanguage)
      }
    }
    var Db = hb(40598),
      xb = hb(39752),
      zb = hb(36720),
      gb = hb(40604),
      ib = hb(39862),
      vb = hb(39736),
      tb = hb(40551),
      Jb = hb(37217),
      eb = hb(40608);
    class Nb extends Db.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const sb = {
      Mesh: gb.b,
      TransformNode: tb.d,
      VZ: Db.d,
      VertexBuffer: Db.e,
      BoundingInfo: xb.e,
      YX: zb.YX,
      ArenaBuffer: Nb,
      SubMesh: vb.c,
      VertexData: ib.c,
      MirroredGeometry: eb.b,
      meshFromArrays: eb.e,
      plainMeshFromArrays: eb.h
    };
    (0, Jb.f)(sb);
    var Mb = hb(37054);
    class mb extends(lb(ab.i)) {
      constructor(bb, ub) {
        if (super(bb, ub), bb instanceof Bb.StandardMaterial && ub.dirLightCount > 0) {
          const ub = bb,
            hb = ub._blockDirtyMechanism;
          ub._blockDirtyMechanism = !0, bb.disableLighting = !0, ub._blockDirtyMechanism = hb;
          const Bb = (0, pb._)(bb);
          Bb && (Bb.disableLighting = !0, (0, pb.Y)(Bb))
        }(0, Mb.h)(bb)
      }
      dispose(bb) {
        (0, Mb.i)(this._material), super.dispose(bb)
      }
    }

    function Ib(bb, ub) {
      if (!(ub instanceof Bb.StandardMaterial) || ub.specularTexture) return;
      const {
        r: hb,
        g: Ob,
        b: Gb
      } = ub.specularColor;
      0 === hb && 0 === Ob && 0 === Gb && (bb.SPECULARTERM = !1)
    }(0, ab.f)({
      disableUnusedSpecularTerm: Ib
    });
    var Pb = hb(36928),
      qb = hb(37230);
    const Eb = new RegExp(`^#define ${Sb.e}\\s*$`, "m");
    class yb extends(lb(Sb.j)) {
      constructor(bb, ub) {
        super(bb, ub), this.FZ = !1, ub.ditherOnlyWhileFading && (qb.h.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const ub = new WeakSet;
        bb.onEffectCreatedObservable.add((hb => {
          let {
            effect: Bb,
            subMesh: Ob
          } = hb;
          if (this.featureState.prewarmingDither || ub.has(Bb)) return;
          ub.add(Bb);
          const Gb = null === Ob || void 0 === Ob ? void 0 : Ob.getMesh();
          Gb && !Eb.test(Bb.defines) && bb.ZN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Gb) || ub.delete(Bb)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.FZ || bb.tC()) return !1;
        const ub = new vb.c(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, ub)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ub.effect
      }
      dispose(bb) {
        this.FZ = !0, super.dispose(bb)
      }
    }
    const Vb = new Map;

    function Fb(bb, ub) {
      Vb.set(bb, ub)
    }
    Fb(Lb.b, Kb), Fb(Yb.h, nb), Fb(Sb.j, yb), Fb(ab.i, mb), (0, Hb.c)({
      create: (bb, ub) => {
        const hb = new Bb.StandardMaterial(bb.name, ub);
        return (0, Pb.q)(bb, hb), hb.detailMap._pluginDefineNames
      },
      write: (bb, ub, hb) => {
        (0, Pb.X)(bb.mirror, ub, hb)
      },
      addFeature: (bb, ub, hb) => {
        const Bb = Vb.get(ub.feature);
        if (!Bb) throw new Error(`${ub.feature.name} has no plugin class (registerPluginClass)`);
        new Bb(bb.mirror, ub.state, ...hb)
      },
      texture: (bb, ub, hb) => {
        let {
          url: Bb,
          noMipmap: Ob,
          invertY: Gb,
          samplingMode: Lb,
          data: Yb,
          sets: Sb
        } = hb;
        if (!Yb) {
          const hb = new Ub.c(Bb, ub, Ob, Gb, Lb);
          return Object.assign(hb, Sb), void(0, wb.F)(bb, hb)
        }
        const ab = {},
          Hb = new Promise(((bb, ub) => {
            ab.onLoad = bb, ab.onError = (bb, hb) => {
              ub(new Error(`${Yb.context}: ${(null===hb||void 0===hb?void 0:hb.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Zb,
            bytes: Xb,
            label: pb
          } = Yb,
          ob = {
            noMipmap: Ob,
            invertY: !1,
            samplingMode: Lb,
            ...ab,
            mimeType: Zb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Ab = new Ub.c(null, ub, ob);
        Pb.t.set(Ab, Hb), Object.assign(Ab, Sb), Ab.updateURL(Bb, Xb);
        const lb = Ab.getInternalTexture();
        lb && (lb.label = pb), bb.uvSet = Ab.coordinatesIndex, bb.matrix.set((0, Pb.P)(Ab)), (0, wb.F)(bb, Ab)
      },
      cube: (bb, ub, hb) => {
        let {
          rootUrl: Bb,
          files: Gb,
          noMipmap: Lb,
          luminance: Yb
        } = hb;
        const {
          samplingMode: Sb
        } = bb.sampler, ab = Sb === (0, wb.w)(Lb) ? null : () => {
          (0, Pb.M)(Hb, Sb)
        }, Hb = new Ob.b(Bb, ub, null, Lb, Gb, ab, null, (0, wb.v)(Yb));
        Hb.coordinatesMode = Ub.c.SKYBOX_MODE, (0, wb.F)(bb, Hb)
      },
      canvas: (bb, ub, hb) => {
        let {
          width: Bb,
          height: Ob,
          mipmaps: Lb,
          samplingMode: Yb,
          hasAlpha: Sb = !1,
          wrap: ab = Ub.c.CLAMP_ADDRESSMODE
        } = hb;
        const Hb = new Gb.e(ub, {
          width: Bb,
          height: Ob
        }, bb, Lb, Yb);
        Hb.hasAlpha = Sb, Hb.wrapU = ab, Hb.wrapV = ab;
        const wb = (0, Pb.A)(Hb);
        return (0, Pb.E)(wb, Hb), wb
      }
    })
  },
  40608: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      e: () => Hb,
      h: () => wb
    });
    var Bb = hb(40598),
      Ob = hb(39533),
      Gb = hb(39752),
      Ub = hb(39869),
      Lb = hb(40604),
      Yb = hb(39862),
      Sb = hb(37110);
    class ab extends Ub.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, ub) => {
          this.releaseUnlessInstanced(ub)
        }, this.onLinked = null
      }
      link(bb) {
        var ub;
        (0, Sb.n)(bb), this.model = bb, null === (ub = this.onLinked) || void 0 === ub || ub.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Ob of Object.values(this._vertexBuffers))
          if (!Ob.getIsInstanced()) {
            const {
              byteOffset: ub,
              byteStride: hb,
              type: Bb,
              normalized: Gb
            } = Ob;
            bb.push({
              kind: Ob.getKind(),
              data: Ob.getData(),
              offset: ub,
              stride: hb,
              components: Ob.getSize(),
              glType: Bb,
              isNormalized: Gb
            })
          } const ub = this._indices.length ? this._indices : null,
          {
            minimum: hb,
            maximum: Bb
          } = this.extend;
        this.link(new Sb.h(bb, ub, this.getTotalVertices(), new Float64Array(hb.ZBb()), new Float64Array(Bb.ZBb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const ub = new ab(bb, this.ZN()),
          hb = this.XBb(void 0, !0);
        hb && ub.setIndices(hb);
        let Ub = !1;
        for (const Gb in this._vertexBuffers) {
          const bb = this._vertexBuffers[Gb],
            hb = bb.getData();
          if (!hb) continue;
          const Lb = bb.getSize(),
            {
              type: Yb,
              byteOffset: Sb,
              byteStride: ab,
              normalized: Hb
            } = bb;
          Ub ||= bb.isUpdatable();
          const wb = bb.getIsInstanced() ? (hb instanceof Array ? 4 * hb.length : hb.byteLength) / ab : this.getTotalVertices(),
            Zb = (0, Ob.s)(hb, Lb, Yb, Sb, ab, wb, !0),
            Xb = {
              updatable: bb.isUpdatable(),
              stride: Lb,
              type: Yb,
              normalized: Hb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          ub.setVerticesBuffer(new Bb.e(this.UX(), Zb, Gb, Xb), wb)
        }
        return ub._updatable = Ub, ub._boundingInfo = new Gb.e(this.extend.minimum, this.extend.maximum), ub.relink(), ub
      }
      static mergeMeshes(bb, ub, hb, Bb, Ob, Gb) {
        const Yb = bb[0].ZN(),
          Sb = new Lb.b(bb[0].name + "_merged", Yb),
          Hb = new ab(Ub.b.RandomId(), Yb, void 0, !1, Sb);
        try {
          if (!Lb.b.MergeMeshes(bb, ub, hb, Sb, Ob, Gb)) return Sb.dispose(), null
        } catch (wb) {
          throw Sb.dispose(), wb
        }
        return Hb.relink(), Sb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var ub;
        bb && null !== (ub = this.getVertexBuffer(bb)) && void 0 !== ub && ub.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Sb.x)(this.model), this.model = null)
      }
    }

    function Hb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Lb.b(bb, hb);
      const Ob = (0, Sb.l)(ub),
        {
          positions: Gb,
          normals: Hb,
          uvs: wb,
          indices: Zb,
          named: Xb = {}
        } = ub,
        pb = new Yb.c;
      pb.positions = Gb, pb.normals = null !== Hb && void 0 !== Hb ? Hb : null, pb.uvs = null !== wb && void 0 !== wb ? wb : null, pb.indices = Zb;
      const ob = new ab(Ub.b.RandomId(), hb, pb, !1, Bb);
      for (const {
          kind: Ub,
          components: Lb
        }
        of Ob.vertexAttributes) Ub in Xb && Bb.setVerticesData(Ub, Xb[Ub], !1, Lb);
      return ob.link(Ob), Bb
    }

    function wb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ob = new Lb.b(bb, hb),
        {
          positions: Gb,
          normals: Ub,
          uvs: Sb,
          indices: ab
        } = ub;
      return Object.assign(new Yb.c, {
        positions: Gb,
        normals: Ub,
        uvs: Sb,
        indices: ab
      }).applyToMesh(Ob, Bb), Ob
    }
  },
  41072: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ob,
      d: () => Lb,
      f: () => Ub,
      j: () => Sb
    });
    var Bb = hb(36889),
      Ob = hb(38329),
      Gb = hb(38323);

    function Ub(bb, ub, hb, Bb) {
      const Ob = Gb.v;
      ub.fill(0), bb.gravity.toArray(ub, Ob.gravity), bb.colorDead.toArray(ub, Ob.colorDead), hb[Ob.ramp] = bb.useRampGradients ? 1 : 0;
      const Ub = bb.getColorGradients(),
        Lb = wb(bb, Ub, "colour", Bb);
      hb[Ob.colorCount] = Lb;
      for (let Gb = 0; Gb < Lb; Gb++) {
        var Yb;
        const bb = Ub[Zb(Ub, Gb)];
        ub[Ob.colorPositions + Gb] = bb.gradient, bb.color1.toArray(ub, Ob.color1 + 4 * Gb), (null !== (Yb = bb.color2) && void 0 !== Yb ? Yb : bb.color1).toArray(ub, Ob.color2 + 4 * Gb)
      }
      const Sb = bb.getVelocityGradients(),
        ab = wb(bb, Sb, "Mp", Bb);
      hb[Ob.velocityCount] = ab;
      for (let Gb = 0; Gb < ab; Gb++) lb(ub, Ob.Mp + 4 * Gb, Sb[Zb(Sb, Gb)]);
      const Hb = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        Xb = wb(bb, Hb, "colour remap", Bb);
      hb[Ob.remapCount] = Xb;
      for (let Gb = 0; Gb < Xb; Gb++) lb(ub, Ob.remap + 4 * Gb, Hb[Zb(Hb, Gb)])
    }

    function Lb() {
      return {
        key: [],
        texels: new Uint8Array(4 * Gb.j)
      }
    }
    const Yb = [];

    function Sb(bb, ub) {
      return ab(bb, Yb), !Ab(Yb, ub.key) && (ub.key.length = 0, ub.key.push(...Yb), ub.key.length > 0 && function(bb, ub) {
        for (let hb = 0; hb < Gb.j; hb++) Ob.k.GetCurrentGradient(hb / Gb.j, bb, ((bb, ub, hb) => {
          Bb.Color3.LerpToRef(bb.color, ub.color, hb, Hb)
        })), ub[4 * hb] = 255 * Hb.r, ub[4 * hb + 1] = 255 * Hb.g, ub[4 * hb + 2] = 255 * Hb.b, ub[4 * hb + 3] = 255
      }(bb.getRampGradients(), ub.texels), !0)
    }

    function ab(bb, ub) {
      ub.length = 0;
      const hb = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== hb && void 0 !== hb && hb.length) {
        ub.push(hb.length);
        for (const bb of hb) ub.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Hb = new Bb.Color3;

    function wb(bb, ub, hb, Bb) {
      return ub ? ub.length > Gb.b ? (Bb(`particleStops:${hb}`, `GPU particles use the first 2 and last ${Gb.b-2} of more than ${Gb.b} ${hb} gradient stops (${bb.name})`), Gb.b) : ub.length : 0
    }

    function Zb(bb, ub) {
      return ub < 2 || bb.length <= Gb.b ? ub : bb.length - Gb.b + ub
    }
    const Xb = new Float32Array(Gb.p),
      pb = new Uint32Array(Xb.buffer);

    function ob(bb, ub, hb) {
      return Ub(bb, Xb, pb, hb), ub && Ab(pb, ub) ? null : pb.slice()
    }

    function Ab(bb, ub) {
      if (bb.length !== ub.length) return !1;
      for (let hb = 0; hb < bb.length; hb++)
        if (bb[hb] !== ub[hb]) return !1;
      return !0
    }

    function lb(bb, ub, hb) {
      var Bb;
      bb[ub] = hb.gradient, bb[ub + 1] = hb.factor1, bb[ub + 2] = null !== (Bb = hb.factor2) && void 0 !== Bb ? Bb : hb.factor1
    }
  },
  41065: (bb, ub, hb) => {
    function Bb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ub = new Set;
      return (hb, Bb) => {
        ub.has(hb) || (ub.add(hb), console.warn(bb + Bb))
      }
    }
    hb.d(ub, {
      d: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);