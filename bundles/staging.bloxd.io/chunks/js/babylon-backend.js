export const id = 0;
export const ids = [0];
export const modules = {
  40214: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      CapeMaterialPlugin: () => zb,
      HueTintMaterialPlugin: () => xb,
      LifeformMaterialPlugin: () => ib,
      OverlayMaterialPlugin: () => fb
    });
    var Ab = Ub(40217),
      Mb = Ub(37352);
    class Tb extends((0, Ab.d)(Mb.c)) {}(0, Ab.f)(Mb.c, Tb);
    var Eb = Ub(36483);
    class Yb extends((0, Ab.d)(Eb.e)) {}(0, Ab.f)(Eb.e, Yb);
    var Bb = Ub(37202);
    class eb extends((0, Ab.d)(Bb.e)) {}(0, Ab.f)(Bb.e, eb);
    var vb = Ub(36777),
      Lb = Ub(39361),
      Pb = Ub(36768);
    class Xb extends((0, Ab.d)(Pb.f)) {
      constructor(bb, ab, Ub) {
        super(bb, ab, Ub), (0, vb.f)(bb)
      }
      dispose(bb) {
        (0, vb.g)(this._material), super.dispose(bb)
      }
    }(0, Ab.f)(Pb.f, Xb), (0, Pb.j)({
      disableUnusedSpecularTerm: Ab.b,
      isLightingDisabled: bb => bb instanceof Lb.StandardMaterial && bb.disableLighting
    });
    var jb = Ub(38003);
    class Rb extends((0, Ab.d)(jb.g)) {}(0, Ab.f)(jb.g, Rb);
    var kb = Ub(38104),
      yb = Ub(36596),
      Zb = Ub(37468),
      Db = Ub(36540);
    class zb extends((0, Ab.d)(kb.b)) {}(0, Ab.f)(kb.b, zb);
    class xb extends((0, Ab.d)(yb.c)) {}(0, Ab.f)(yb.c, xb);
    class ib extends((0, Ab.d)(Zb.m)) {}(0, Ab.f)(Zb.m, ib);
    class fb extends((0, Ab.d)(Db.b)) {}(0, Ab.f)(Db.b, fb)
  },
  40693: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      addBabylonLights: () => ya,
      default: () => za
    });
    var Ab = Ub(40701),
      Mb = (Ub(39078), Ub(40207), Ub(39611), Ub(40709)),
      Tb = Ub(38898),
      Eb = Ub(36587),
      Yb = Ub(36392),
      Bb = Ub(40716),
      eb = Ub(40719),
      vb = Ub(36533),
      Lb = (Ub(40217), Ub(40732)),
      Pb = Ub(40727),
      Xb = Ub(38029),
      jb = Ub(40736),
      Rb = Ub(38943),
      kb = Ub(38010);
    const yb = "gpuParticles",
      Zb = kb.s,
      Db = bb => bb / 4,
      zb = bb => `gpuParticleSystem[${bb>>2}].${"xyzw"[3&bb]}`,
      xb = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${kb.c}\n#define COLOR_POSITIONS ${Db(Zb.colorPositions)}\n#define COLOR1 ${Db(Zb.color1)}\n#define COLOR2 ${Db(Zb.color2)}\n#define VELOCITY ${Db(Zb.QR)}\n#define REMAP ${Db(Zb.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${kb.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${zb(Zb.gravity)}, ${zb(Zb.gravity+1)}, ${zb(Zb.gravity+2)}); }\nint colorCount() { return int(${zb(Zb.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Db(Zb.colorDead)}]; }\nint velocityCount() { return int(${zb(Zb.velocityCount)}); }\nint remapCount() { return int(${zb(Zb.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Rb.d.ShadersStore[`${yb}VertexShader`] = xb, Rb.d.ShadersStore[`${yb}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const ib = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      fb = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var mb = Ub(38008),
      pb = Ub(40743);
    class Nb extends mb.e {
      constructor(bb, ab, Ub, Ab) {
        super(bb, ab, Ub), this.renderer = Ub, this.ZR = Ab, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(kb.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, pb.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (bb, ab) => {
          const {
            engine: Ub,
            perRow: Ab
          } = this, Mb = Ub._gl;
          Ub._bindTextureDirectly(Mb.TEXTURE_2D, this.records, !0), Ub._unpackFlipY(!1);
          const Tb = this.ring.recordBits;
          for (let Eb = bb; Eb < ab;) {
            const bb = Math.floor(Eb / Ab),
              Ub = Math.min(ab, (bb + 1) * Ab);
            Mb.texSubImage2D(Mb.TEXTURE_2D, 0, Eb % Ab * 4, bb, 4 * (Ub - Eb), 1, Mb.RGBA_INTEGER, Mb.UNSIGNED_INT, Tb, Eb * kb.e), Eb = Ub
          }
          Ub._bindTextureDirectly(Mb.TEXTURE_2D, null)
        }, this.id = bb;
        const Mb = Ab.vj();
        this.engine = Mb;
        const Tb = Math.max(1, ab);
        this.perRow = Math.min(Tb, 256), this.records = Mb.createRawTexture(null, 4 * this.perRow, Math.ceil(Tb / this.perRow), Lb.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Lb.c.TEXTURE_NEAREST_SAMPLINGMODE, null, Lb.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ZR.getAnimationRatio() || 1;
        const ab = this.ZR.getFrameId();
        if (ab === this.animatedFrame) return !1;
        const Ub = super.animate(bb);
        return Ub && (this.animatedFrame = ab, this.ring.takeUploads(this.uploadSlots)), Ub
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(bb) {
        (0, pb.g)(this, this.uniforms, this.uniformBits, bb);
        for (const Ub of kb.r) this.uniforms[Ub] = this.uniformBits[Ub];
        var ab;
        (0, pb.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ab = this.ramp) || void 0 === ab || ab.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Pb.e.CreateRGBATexture(this.rampTexels.texels, kb.m, 1, this.ZR, !1, !1, Lb.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var bb;
        this.records.dispose(), null === (bb = this.ramp) || void 0 === bb || bb.dispose(), this.ramp = null
      }
    }
    class Wb {
      constructor(bb) {
        this.ZR = bb, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, jb.d)(), this.engine = bb.vj(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Pb.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, bb, !1, !1, Lb.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      OW(bb, ab) {
        const Ub = 256 * this.engine.getCaps().maxTextureSize;
        ab > Ub && this.warnOnce(`capacity:${bb}`, `particle system ${bb} holds ${Ub} particles, not ${ab}: its records texture's limit`);
        const Ab = new Nb(bb, Math.min(ab, Ub), this, this.ZR);
        return this.ZR.addParticleSystem(Ab), Ab
      }
      canDraw(bb) {
        var ab, Ub;
        if (this.failed || null === (ab = bb.texture) || void 0 === ab || null === (Ub = ab.mirror) || void 0 === Ub || !Ub.isReady()) return !1;
        for (const Ab of (0, Xb.j)(bb.blendMode))
          if (!this.effectFor(Ab).isReady()) return !1;
        return !0
      }
      disposeStopped(bb) {
        this.ZR._toBeDisposed.push(bb)
      }
      remove(bb) {
        this.ZR.removeParticleSystem(bb), bb.releaseGl()
      }
      render(bb) {
        var ab;
        if (!bb.isReady() || !bb.hasLiveParticles()) return 0;
        const {
          engine: Ub,
          ZR: Ab,
          frame: Mb
        } = this;
        bb.prepareDraw(this.warnOnce), bb.drawOffset(Mb, 0), Mb[3] = bb.drawTime();
        const Tb = bb.ring.drawStart(),
          Eb = bb.ring.drawCount(),
          Yb = null !== (ab = bb.ramp) && void 0 !== ab ? ab : this.whiteRamp;
        Ub.setState(!1);
        for (const Bb of (0, Xb.j)(bb.blendMode)) {
          const ab = this.effectFor(Bb);
          Ub.enableEffect(ab), ab.setTexture("gpuParticleTexture", bb.texture.mirror), ab.setTexture("gpuParticleRampTexture", Yb), ab._bindTexture("gpuParticleRecords", bb.records), ab.setMatrix("gpuParticleView", Ab.getViewMatrix()), ab.setMatrix("gpuParticleProjection", Ab.getProjectionMatrix()), ab.setFloatArray4("gpuParticleSystem", bb.uniforms), ab.setFloat4("gpuParticleFrame", Mb[0], Mb[1], Mb[2], Mb[3]), ab.setFloat2("gpuParticleRange", Tb, Eb), ab.setFloat("gpuParticleRamp", bb.uniforms[kb.s.ramp]), Ub.bindBuffers(this.vertexBuffers, null, ab), Ub.setAlphaMode((0, Xb.g)(Bb)), Ub.drawArraysType(Lb.c.MATERIAL_TriangleStripDrawMode, 0, 4, Eb), ab._bindTexture("gpuParticleRecords", null)
        }
        return Ub.setAlphaMode(Lb.c.ALPHA_DISABLE), Eb
      }
      awaitLink(bb) {
        const ab = bb.getPipelineContext(),
          Ub = this.engine._gl;
        !this.failed && Ub && (!ab || ab.isParallelCompiled && !ab.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ab.isParallelCompiled && ab.program && (Ub.getProgramParameter(ab.program, Ub.LINK_STATUS) || this.fail(Ub.getProgramInfoLog(ab.program) || "a program did not link")))
      }
      effectFor(bb) {
        return bb === Xb.e ? this.multiplyEffect : this.effect
      }
      createEffect(bb) {
        return this.engine.createEffect(yb, [], ib, fb, bb, void 0, void 0, ((bb, ab) => {
          this.fail(ab)
        }))
      }
      fail(bb) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${bb}`);
          for (const bb of this.ZR.pD.slice()) bb instanceof Nb && bb.disposeOnStop && bb.dispose()
        }
      }
    }
    var Hb = Ub(39302),
      Ib = Ub(40205),
      db = Ub(39051),
      Fb = Ub(39259),
      hb = Ub(39256),
      Gb = Ub(39185),
      Qb = Ub(40260),
      qb = Ub(36949),
      ub = Ub(40748),
      rb = Ub(40751),
      Kb = Ub(40759),
      ob = Ub(39205),
      lb = Ub(36830),
      tb = Ub(36828),
      wb = Ub(39420),
      sb = Ub(36901),
      gb = Ub(36848);

    function Cb(bb) {
      if (bb.visibility < 1 || !bb.isVisible || !bb.isEnabled() || bb.metadata[gb.e] || !bb.isReady()) return !0;
      const ab = bb.mD;
      if (!ab || 0 === ab.length) return !0;
      for (let Ub = 0; Ub < ab.length; Ub++) {
        const Ab = ab[Ub],
          Mb = Ab.Rj();
        if (!Mb || !Mb.isReadyForSubMesh(bb, Ab, !1)) return !0
      }
      return !1
    }
    class Vb {
      constructor(bb, ab) {
        this.VL = bb, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ab.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      bX(bb) {
        var ab;
        const Ub = this.armed;
        if (this.armed = !1, this.vis = null, !Ub) return !1;
        this.culled = 0;
        const {
          VL: Ab
        } = this, Mb = null === (ab = Ab.zD) || void 0 === ab ? void 0 : ab.visibility;
        if (!Mb || !bb || Ab.Fj.hj) return !1;
        if (!(Ab.lL.gUb[0] >= sb.d)) return !1;
        const Tb = bb.getProjectionMatrix().m;
        if (0 !== Tb[15]) return !1;
        const Eb = Ab.vP,
          Yb = bb.globalPosition,
          Bb = this.eye;
        return Bb[0] = Yb.x + Eb[0], Bb[1] = Yb.y + Eb[1], Bb[2] = Yb.z + Eb[2], !!Mb.eyeClear(Bb[0], Bb[1], Bb[2], bb.minZ, Tb, Ab.lL) && (this.vis = Mb, this.passable.clear(), this.count = 0, !0)
      }
      see(bb, ab) {
        const Ub = this.count++;
        if (Ub === this.cellSlots.length) {
          const bb = new Int32Array(2 * Ub);
          bb.set(this.cellSlots), this.cellSlots = bb
        }
        this.cellSlots[Ub] = ab, this.meshes[Ub] = bb
      }
      seeThrough(bb) {
        this.passable.add(bb)
      }
      finish(bb, ab) {
        const {
          vis: Ub,
          eye: Ab,
          meshes: Mb,
          count: Tb,
          cellSlots: Eb
        } = this, {
          lL: Yb
        } = this.VL, [Bb, eb] = Yb.gUb, vb = null !== Ub && Ub.update(Ab[0], Ab[1], Ab[2], Yb.j_, Bb, eb, this.passable);
        let Lb = 0;
        for (let Pb = 0; Pb < Tb; Pb++) {
          const Ab = Mb[Pb];
          if (vb) {
            const bb = 3 * Eb[Pb];
            if (bb >= 0 && !Ub.isDrawn(ab[bb], ab[bb + 1], ab[bb + 2])) {
              Lb++;
              continue
            }
          }
          ob.h.prototype.push.call(bb, Ab)
        }
        Mb.fill(null, 0, Tb), this.count = 0, this.vis = null, this.culled = Lb
      }
    }
    var Ob = Ub(36883),
      cb = Ub(36838),
      Jb = Ub(39394),
      nb = Ub(40767),
      Sb = Ub(39400),
      ba = Ub(39314);
    let aa = 1;
    const Ua = new WeakSet;

    function Aa() {
      return aa
    }

    function Ma() {
      aa = aa >= 1073741823 ? 1 : aa + 1
    }

    function Ta(bb) {
      const ab = bb.metadata;
      if (!ab || !0 !== ab[tb.s]) return;
      const Ub = ab[tb.y],
        Ab = null === Ub || void 0 === Ub ? void 0 : Ub._noaStamps;
      if (!Ub || !Ab) return;
      const Mb = Ub.entries.indexOf(bb);
      Mb >= 0 && (Ab[Mb] = 0)
    }

    function Ea(bb) {
      const ab = bb.mD;
      for (let Ub = 0; Ub < ab.length; Ub++) {
        const bb = ab[Ub].Rj();
        if (bb && !bb.isFrozen) return !1
      }
      for (let Ub = 0; Ub < ab.length; Ub++) {
        const bb = ab[Ub].Rj();
        bb && Ua.add(bb)
      }
      return !0
    }
    let Ya = !1;
    const Ba = new WeakSet;

    function ea(bb, ab) {
      const Ub = bb[ab];
      if ("function" !== typeof Ub) throw new Error(`terrainDrawState: Babylon has no ${ab} to hook`);
      return Ub
    }

    function va(bb, ab, Ub, Ab, Mb) {
      const Tb = Ub.lL.j_,
        Eb = new Map;
      let Yb = 0;
      const Bb = new Vb(Ub, bb),
        eb = new Ob.b(Tb, bb.vj());
      ! function(bb) {
        if (Ba.has(bb) || (Ba.add(bb), bb.onContextLostObservable.add(Ma), bb.onContextRestoredObservable.add(Ma)), Ya) return;
        Ya = !0;
        const ab = nb.d.prototype,
          Ub = ea(ab, "_markSubMeshesAsDirty");
        Object.assign(ab, {
          _markSubMeshesAsDirty(bb) {
            Ub.call(this, bb), Ta(this)
          }
        });
        const Ab = ea(ba.c.prototype, "_syncParentEnabledState");
        Object.assign(ba.c.prototype, {
          _syncParentEnabledState() {
            Ab.call(this), Ta(this)
          }
        });
        const Mb = ea(Sb.e.prototype, "resetDrawCache");
        Sb.e.prototype.resetDrawCache = function(bb, ab) {
          Mb.call(this, bb, ab), Ta(this.getMesh())
        };
        const Tb = Jb.d.prototype,
          Eb = ea(Tb, "markDirty");
        Tb.markDirty = function(bb) {
          Eb.call(this, bb), Ua.has(this) && Ma()
        };
        const Yb = ea(Tb, "_markAllSubMeshesAsDirty");
        Object.assign(Tb, {
          _markAllSubMeshesAsDirty(bb) {
            Yb.call(this, bb), Ua.has(this) && Ma()
          }
        })
      }(bb.vj());
      let vb = new Float64Array(384),
        Lb = new Int32Array(64),
        Pb = new Uint8Array(64),
        Xb = new Float64Array(64),
        jb = new Int32Array(192),
        Rb = 0;
      const kb = [],
        yb = new Float64Array(24),
        Zb = () => {
          const bb = kb.pop();
          return void 0 !== bb ? (Lb[bb] = 0, bb) : (Rb === Lb.length && (vb = La(vb, new Float64Array(2 * vb.length)), Lb = La(Lb, new Int32Array(2 * Lb.length)), Pb = La(Pb, new Uint8Array(2 * Pb.length)), Xb = La(Xb, new Float64Array(2 * Xb.length)), jb = La(jb, new Int32Array(2 * jb.length))), Rb++)
        },
        Db = bb => {
          const ab = 6 * bb._noaSlot,
            Ub = bb.SUb[0],
            Ab = bb.SUb[1];
          vb[ab] = Ub.x, vb[ab + 1] = Ub.y, vb[ab + 2] = Ub.z, vb[ab + 3] = Ab.x, vb[ab + 4] = Ab.y, vb[ab + 5] = Ab.z
        },
        zb = (bb, ab, Ub) => {
          if (!Ub) return Bb.see(bb, -1), !1;
          const Ab = Cb(bb);
          return Ab && Bb.seeThrough(Xb[ab]), Bb.see(bb, ab), !Ab
        };
      let xb = -1;
      return bb.getActiveMeshCandidates = () => {
        const Ub = bb.frustumPlanes,
          Ab = ab._selectionContent;
        Ab.reset(), (Ub => {
          const Ab = bb.frustumPlanes;
          Yb = Yb + 1 | 0 || 1;
          const Mb = ab.blocks,
            Tb = Bb.bX(bb.activeCamera),
            Eb = Tb && !0;
          if (Eb) {
            const ab = bb.vj().currentRenderPassId;
            ab !== xb && (xb = ab, Ma())
          }
          const eb = Aa(),
            Xb = Eb && !1;
          Mb.length > 0 && function(bb, ab) {
            for (let Ub = 0; Ub < 6; Ub++) {
              const Ab = bb[Ub],
                Mb = Ab.normal;
              ab[4 * Ub] = Mb.x, ab[4 * Ub + 1] = Mb.y, ab[4 * Ub + 2] = Mb.z, ab[4 * Ub + 3] = Ab.d
            }
          }(Ab, yb);
          const Rb = vb,
            kb = Lb,
            Zb = Pb;
          for (let bb = 0; bb < Mb.length; bb++) {
            const ab = Mb[bb];
            if (!wb.e.IsInFrustum(ab.SUb, Ab)) continue;
            const vb = ab.entries;
            {
              const bb = ab._noaSlots,
                Ab = ab._noaStamps,
                Mb = ab._noaTerrain;
              for (let ab = 0; ab < vb.length; ab++) {
                const Lb = bb[ab];
                if (kb[Lb] !== Yb && (kb[Lb] = Yb, Zb[Lb] = Pa(Rb, 6 * Lb, yb) ? 1 : 0), 0 === Zb[Lb]) continue;
                const Pb = vb[ab];
                if (Eb && Ab[ab] === eb) Xb && 1 === Mb[ab] && Cb(Pb) && 0, Bb.see(Pb, 1 === Mb[ab] ? Lb : -1);
                else if (Eb) {
                  Ab[ab] = eb;
                  const bb = !0 === Pb.metadata[cb.k];
                  Mb[ab] = bb ? 1 : 0;
                  const Ub = zb(Pb, Lb, bb);
                  !bb || Ub && Ea(Pb) || (Ab[ab] = 0)
                } else Tb ? zb(Pb, Lb, !0 === Pb.metadata[cb.k]) : ob.h.prototype.push.call(Ub, Pb)
              }
              continue
            }
          }
          Tb && Bb.finish(Ub, jb)
        })(Ab), eb.apply(Ab, bb.activeCamera);
        const Tb = ab.nUb;
        for (let bb = 0; bb < Tb.length; bb++) {
          const ab = Tb[bb];
          ab.isEnabled() && ob.h.prototype.push.call(Ab, ab)
        }
        return Mb(Ab, Ub), Ab
      }, {
        bAb: () => Bb.culled,
        rUb: (bb, ab) => {
          const Mb = Math.floor(ab[0] / Tb),
            Yb = Math.floor(ab[1] / Tb),
            Bb = Math.floor(ab[2] / Tb),
            eb = `${Mb}|${Yb}|${Bb}`;
          let vb = Eb.get(eb);
          if (!vb) {
            const bb = [0, 0, 0];
            Ub.Hbb([Mb * Tb - 1, Yb * Tb - 1, Bb * Tb - 1], null, bb), vb = Object.assign(Ab(bb, Tb + 2), {
              aAb: eb,
              UAb: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Zb()
            }), Db(vb), Xb[vb._noaSlot] = (0, lb.f)(Mb, Yb, Bb), jb[3 * vb._noaSlot] = Mb, jb[3 * vb._noaSlot + 1] = Yb, jb[3 * vb._noaSlot + 2] = Bb, Eb.set(eb, vb)
          }
          vb.UAb++, bb.metadata[tb.C] = vb
        },
        iW: bb => {
          const ab = bb.metadata[tb.C];
          ab && (ab.UAb--, ab.UAb <= 0 && (Eb.delete(ab.aAb), kb.push(ab._noaSlot)), bb.metadata[tb.C] = null)
        },
        JUb: (bb, ab) => {
          const Ub = bb,
            Ab = ab.metadata[tb.C];
          (Ub._noaSlots ??= []).push(Ab._noaSlot), (Ub._noaStamps ??= []).push(0), (Ub._noaTerrain ??= []).push(0), Ub.entries.push(ab)
        },
        removeEntry: (bb, ab) => {
          const Ub = bb,
            Ab = Ub.entries,
            Mb = Ab.indexOf(ab);
          if (Mb < 0) return;
          const Tb = Ub._noaSlots,
            Eb = Ub._noaStamps,
            Yb = Ub._noaTerrain,
            Bb = Ab.length - 1;
          Ab[Mb] = Ab[Bb], Tb[Mb] = Tb[Bb], Eb[Mb] = Eb[Bb], Yb[Mb] = Yb[Bb], Ab.pop(), Tb.pop(), Eb.pop(), Yb.pop()
        },
        u9: bb => {
          for (const ab of Eb.values()) {
            ab.wUb.MAb(bb), ab.tUb.MAb(bb);
            for (const Ub of ab.SUb) Ub.MAb(bb);
            Db(ab)
          }
        }
      }
    }

    function La(bb, ab) {
      return ab.set(bb), ab
    }

    function Pa(bb, ab, Ub) {
      const Ab = bb[ab],
        Mb = bb[ab + 1],
        Tb = bb[ab + 2],
        Eb = bb[ab + 3],
        Yb = bb[ab + 4],
        Bb = bb[ab + 5];
      for (let eb = 0; eb < 24; eb += 4) {
        const bb = Ub[eb],
          ab = Ub[eb + 1],
          vb = Ub[eb + 2];
        if (!(bb * (bb >= 0 ? Eb : Ab) + ab * (ab >= 0 ? Yb : Mb) + vb * (vb >= 0 ? Bb : Tb) + Ub[eb + 3] >= 0)) return !1
      }
      return !0
    }
    var Xa = Ub(37125);
    class ja {
      constructor(bb, ab) {
        var Ub = bb.ZR;
        Ub.iUb(new Kb.b(Ub));
        var Ab = new ub.b(Bb);
        Ub.EAb = Ab, Ab.blocks = [];
        var Mb, Tb = {},
          Eb = [];
        this.textPlanes = Eb, this.bAb = () => Mb.bAb(), this.u9 = bb => {
          vb(Ab, bb), Mb.u9(bb)
        }, this.rUb = (ab, Ub, Yb) => {
          if (!ab.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!ab.metadata[tb.y] && !ab.metadata[tb.o]) {
            if (!Ub) {
              var Bb = Ab.nUb;
              if (ab.metadata[tb.J] && !ab.parent) {
                Bb = Eb;
                var vb = ab.DH().BAb;
                ab.metadata[tb.K] = vb.center.length() + vb.radius, ab.Lj = !0
              }
              return Bb.push(ab), ab.metadata[tb.h] = Bb, void(ab.metadata[tb.o] = !0)
            }
            var Pb = Math.floor(Yb[0] / eb),
              Xb = Math.floor(Yb[1] / eb),
              jb = Math.floor(Yb[2] / eb),
              Rb = Pb + "|" + Xb + "|" + jb,
              kb = Tb[Rb];
            if (!kb) {
              var yb = [Pb * eb, Xb * eb, jb * eb],
                Zb = [0, 0, 0];
              bb.VL.Hbb(yb, null, Zb), kb = Lb(Zb, eb), Ab.blocks.push(kb), Tb[Rb] = kb, kb.aAb = Rb
            }
            Mb.rUb(ab, Yb), Mb.JUb(kb, ab), kb.UAb = (kb.UAb || 0) + 1, ab.metadata[tb.y] = kb, ab.metadata[tb.s] = !0, ab.Lj = !0
          }
        }, this.iW = bb => {
          if (bb.metadata) {
            bb.metadata[tb.o] && ((0, lb.j)(bb.metadata[tb.h], bb), bb.metadata[tb.o] = !1), bb.metadata[tb.h] === Eb && (bb.Lj = !1), bb.metadata[tb.h] = void 0, bb.metadata[tb.K] = void 0;
            var ab = bb.metadata[tb.y];
            ab && ab.entries && (bb.metadata[tb.s] && Mb.removeEntry(ab, bb), ab.UAb--, ab.UAb <= 0 && (delete Tb[ab.aAb], (0, lb.j)(Ab.blocks, ab))), Mb.iW(bb), bb.metadata[tb.y] = null, bb.metadata[tb.s] = !1
          }
        }, this.K8 = function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (bb.metadata[tb.y]) {
            if (bb.metadata[tb.s] === ab) return;
            var Ub = bb.metadata[tb.y];
            Ub && Ub.entries && (ab ? Mb.JUb(Ub, bb) : Mb.removeEntry(Ub, bb)), bb.metadata[tb.s] = ab
          } else {
            if (bb.metadata[tb.o] === ab) return;
            var Tb = bb.metadata[tb.h] || Ab.nUb;
            ab ? Tb.push(bb) : (0, lb.j)(Tb, bb), bb.metadata[tb.o] = ab
          }
        };
        var Bb = () => {},
          eb = ab * bb.VL.lL.j_,
          vb = (bb, ab) => {
            bb.blocks.forEach((bb => {
              bb.wUb.MAb(ab), bb.tUb.MAb(ab), bb.SUb.forEach((bb => bb.MAb(ab))), bb.blocks && vb(bb, ab)
            }))
          },
          Lb = (bb, ab) => {
            var Ub = new Yb.Pj(bb[0], bb[1], bb[2]),
              Ab = new Yb.Pj(bb[0] + ab, bb[1] + ab, bb[2] + ab);
            return new rb.b(Ub, Ab, void 0, void 0, void 0, Bb)
          };
        Mb = va(Ub, Ab, bb.VL, Lb, ((bb, ab) => {
          for (var Ub = 0; Ub < Eb.length; Ub++) {
            var Ab = Eb[Ub];
            Ab.isEnabled(!1) && ((0, Xa.b)(Ab, ab) && ob.h.prototype.push.call(bb, Ab))
          }
        }))
      }
    }

    function Ra(bb) {
      const {
        holderPosition: ab,
        holderRotation: Ub,
        rC: Ab,
        fov: Mb,
        near: Tb,
        far: Eb
      } = bb.model.uC, Yb = bb.RAb;
      Yb.position.K9(ab[0], ab[1], ab[2]), Yb.rotation.K9(Ub[0], Ub[1], Ub[2]);
      const Bb = bb.camera;
      Bb.position.K9(Ab[0], Ab[1], Ab[2]), Bb.fov = Mb, Bb.minZ = Tb, Bb.maxZ = Eb
    }

    function ka(bb) {
      const ab = bb.vj(),
        Ub = ab,
        Ab = Ub._gl;
      if (!Ab || Ub.oj < 2 || ab.hUb || Ab.getParameter(Ab.DEPTH_BITS) < 24) return !1;
      const Mb = bb._renderingManager,
        Tb = Mb.getRenderingGroup(-1),
        Eb = Mb.getRenderingGroup(0),
        Yb = Fb.b.prototype.render;
      return Tb.render = function(bb, ab, Ub, Ab, Mb, Tb, Bb, eb, vb) {
        (bb || Eb._empty) && Yb.call(this, bb, ab, Ub, Ab, Mb, Tb, Bb, eb, vb)
      }, Eb.render = function(bb, Ub, Mb, Eb) {
        let Bb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          eb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          vb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Pb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Xb = arguments.length > 8 ? arguments[8] : void 0;
        bb ? Yb.call(this, bb, Ub, Mb, Eb, Bb, eb, vb, Pb, Xb) : (ab.setAlphaMode(Lb.c.ALPHA_DISABLE), Yb.call(this, null, !1, !1, Eb, Bb, eb, vb, !1), Tb._empty || (Ab.depthRange(1, 1), Yb.call(Tb, null, Ub, Mb, Eb, Bb, eb, vb, Pb, Xb), Ab.depthRange(0, 1)), Yb.call(this, null, Ub, Mb, Eb, !1, !1, !1, Pb, Xb))
      }, !0
    }

    function ya(bb, ab) {
      return [ab, qb.g].map(((ab, Ub) => {
        const Ab = new Mb.c("light", Yb.Pj.FromArray(ab), bb);
        return Ab.diffuse = Eb.Color3.FromArray([1, 1, 1]), Ab.specular = Eb.Color3.FromArray([1, 1, 1]), Ab.intensity = qb.e[Ub], Ab
      }))
    }
    class Za extends eb.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(bb) {
        var ab;
        this.heldTexture = bb, this.particleTexture = null !== (ab = null === bb || void 0 === bb ? void 0 : bb.mirror) && void 0 !== ab ? ab : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bb && (this.particleTexture = null, (0, vb.H)(this.heldTexture), this.heldTexture = null), super.dispose(bb, ab, Ub)
      }
    }
    const Da = Ab.d.Zero();
    const za = {
      zAb: function(bb, ab) {
        return new Tb.d(bb, ab.Cab, {
          preserveDrawingBuffer: ab.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      ZAb: function(bb, ab) {
        ! function(bb, ab, Ub) {
          const Ab = new Gb.c(bb.engine);
          bb.ZR = Ab, Ab.detachControl(), Ab.autoClear = !1, hb.b.MIN_RENDERINGGROUPS = -1;
          for (let Tb = hb.b.MIN_RENDERINGGROUPS; Tb <= 1; Tb++) Ab.setRenderingOrder(Tb, Fb.b.PainterSortCompare, Fb.b.PainterSortCompare, Fb.b.PainterSortCompare);
          Ab.setRenderingAutoClearDepthStencil(0, !1), db.e.Enabled = !1, bb.PAb = new ja(bb, Math.round(ab.XAb)), bb.RAb = new Ib.b("camHolder", Ab), bb.camera = new Hb.e("camera", new Yb.Pj(0, 0, 0), Ab), bb.camera.parent = bb.RAb, Ra(bb), (0, qb.h)(bb, ((bb, ab, Ub) => (0, Qb.l)(ab, Ub, bb.ZR))), Ab.clearColor = Eb.b.FromArray(ab.clearColor), Ab.ambientColor = Eb.Color3.FromArray(ab.ambientColor);
          const Mb = Ub(Ab, ab.yAb);
          Ab.onNewLightAddedObservable.add((bb => {
            Mb.some((ab => ab === bb)) || console.error(`Light "${bb.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Ab.skipPointerMovePicking = !0
        }(bb, ab, ya), ka(bb.ZR)
      },
      jAb: Ra,
      setBabylonFog: function(bb, ab, Ub, Ab) {
        const Mb = bb.ZR;
        Mb.fogMode = 3, Mb.fogStart = ab, Mb.fogEnd = Ub, Mb.fogColor.set(Ab[0], Ab[1], Ab[2])
      },
      xAb: function(bb, ab, Ub) {
        return bb.engine.oj >= 2 && (bb.iAb || (bb.iAb = new Wb(bb.ZR)), !bb.iAb.failed) ? bb.iAb.OW(ab, Ub) : new Za(ab, Ub, bb.ZR)
      },
      mAb: function(bb, ab) {
        bb.ZR.pD.forEach((Ub => {
          if (Ub instanceof Nb) return void Ub.u9(ab, bb.VL.vP);
          const Ab = Ub;
          if (Ab.emitter.getConnectedParticleSystems)
            for (const bb of Ab._particles) bb.position.set(bb.position.x - ab[0], bb.position.y - ab[1], bb.position.z - ab[2]);
          else {
            if (!Ab.worldOffset) throw new Error("Particle system has no world offset");
            Ab.worldOffset.x = -bb.VL.vP[0], Ab.worldOffset.y = -bb.VL.vP[1], Ab.worldOffset.z = -bb.VL.vP[2]
          }
        }))
      },
      linesFromArrays: function(bb, ab, Ub) {
        const Ab = new Bb.b(ab, bb.ZR, null, void 0, void 0, !1);
        return (0, Qb.h)(ab, Ub, bb.ZR, Ab), Ab
      },
      DR: Ta,
      fAb: function(bb, ab) {
        return Da.origin.EUb(ab.origin), Da.direction.EUb(ab.direction), Da.length = ab.length, Da.epsilon = ab.epsilon, Da.fAb(bb, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40217: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => ob,
      d: () => Zb,
      f: () => Cb
    });
    var Ab = Ub(39361),
      Mb = Ub(40223),
      Tb = Ub(40267),
      Eb = Ub(40230),
      Yb = Ub(37166),
      Bb = Ub(37177),
      eb = Ub(37180),
      vb = Ub(37188),
      Lb = Ub(36524),
      Pb = Ub(36533),
      Xb = Ub(40238),
      jb = Ub(36508),
      Rb = Ub(36512),
      kb = Ub(36495);

    function yb(bb, ab) {
      return Object.assign((function(bb, Ub, Ab, Mb) {
        return ab(this.featureState, bb, Ub, Ab, Mb)
      }), {
        uX: bb
      })
    }

    function Zb(bb) {
      const ab = class extends Xb.e {
          constructor(ab, Ub) {
            const Ab = (0, Rb.W)(ab),
              Mb = Ab && (0, Rb.w)(Ab, bb.name);
            for (var Tb = arguments.length, Eb = new Array(Tb > 2 ? Tb - 2 : 0), Yb = 2; Yb < Tb; Yb++) Eb[Yb - 2] = arguments[Yb];
            super(ab, bb.name, bb.priority, Mb ? Mb.defines : bb.defines(...Eb), !1), this.featureState = void 0, this.featureState = Ub, this._pluginManager._addPlugin(this), this._enable(!0), (0, Rb.x)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === kb.d.GLSL || bb === kb.d.WGSL
          }
        },
        Ub = (0, jb.g)(bb);
      for (const [Ab, Mb] of Object.entries(jb.b)) {
        const Tb = bb[Ab];
        if (Tb) {
          const bb = Ub[Ab];
          Object.defineProperty(ab.prototype, Mb, {
            value: yb(Tb, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ab
    }
    class Db extends(Zb(Yb.d)) {}
    var zb = Ub(38898),
      xb = Ub(40240);
    const ib = new WeakMap;

    function fb(bb, ab, Ub) {
      let Ab = ib.get(Ub);
      Ab || (Ab = new Map, ib.set(Ub, Ab));
      const {
        url: Mb
      } = bb;
      let Tb = Ab.get(Mb);
      return Tb || (Tb = async function(bb, ab, Ub) {
        const {
          width: Ab,
          height: Mb
        } = bb.getSize(), Tb = Math.round(Mb / Ab), Yb = ab && ab.byteLength === Ab * Ab * Tb * 4 ? ab : bb._readPixelsSync();
        return new xb.e(Yb, Ab, Ab, Tb, zb.d.TEXTUREFORMAT_RGBA, Ub, !0, !1, Eb.b.NEAREST_NEAREST_MIPLINEAR)
      }(bb, ab, Ub), Ab.set(Mb, Tb), Tb.catch((() => {
        Ab.delete(Mb)
      }))), Tb
    }
    var mb = Ub(37194);
    class pb extends(Zb(Bb.g)) {
      constructor(bb, ab) {
        super(bb, ab), ab.textures.forEach(((bb, ab) => {
          bb.mirror.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, ab).catch((bb => {
              console.error(`Failed to build texture array for atlas ${ab}`, bb)
            }))
          }))
        })), (0, mb.h)(ab, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, ab) {
        var Ub, Ab;
        const Mb = this.featureState,
          {
            width: Tb,
            height: Eb
          } = bb.getSize(),
          Yb = Mb.useWebGL2 ? await fb(bb, null !== (Ub = null === (Ab = Mb.sources.pixels) || void 0 === Ab ? void 0 : Ab[ab]) && void 0 !== Ub ? Ub : null, this._material.oN()) : null;
        (0, mb.b)(this._material, Mb, ab, Yb, Tb, Math.round(Eb / Tb), this._material.shaderLanguage)
      }
    }
    var Nb = Ub(40248),
      Wb = Ub(39413),
      Hb = Ub(36392),
      Ib = Ub(40251),
      db = Ub(39534),
      Fb = Ub(39400),
      hb = Ub(40205),
      Gb = Ub(36926),
      Qb = Ub(40260);
    class qb extends Nb.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ub = {
      Mesh: Ib.b,
      TransformNode: hb.b,
      OX: Nb.d,
      VertexBuffer: Nb.g,
      BoundingInfo: Wb.b,
      Pj: Hb.Pj,
      ArenaBuffer: qb,
      SubMesh: Fb.e,
      VertexData: db.c,
      MirroredGeometry: Qb.e,
      meshFromArrays: Qb.h,
      plainMeshFromArrays: Qb.l
    };
    (0, Gb.f)(ub);
    var rb = Ub(36777);
    class Kb extends(Zb(vb.l)) {
      constructor(bb, ab) {
        if (super(bb, ab), bb instanceof Ab.StandardMaterial && ab.dirLightCount > 0) {
          const ab = bb,
            Ub = ab._blockDirtyMechanism;
          ab._blockDirtyMechanism = !0, bb.disableLighting = !0, ab._blockDirtyMechanism = Ub;
          const Ab = (0, Rb.W)(bb);
          Ab && (Ab.disableLighting = !0, (0, Rb.S)(Ab))
        }(0, rb.f)(bb)
      }
      dispose(bb) {
        (0, rb.g)(this._material), super.dispose(bb)
      }
    }

    function ob(bb, ab) {
      if (!(ab instanceof Ab.StandardMaterial) || ab.specularTexture) return;
      const {
        r: Ub,
        g: Mb,
        b: Tb
      } = ab.specularColor;
      0 === Ub && 0 === Mb && 0 === Tb && (bb.SPECULARTERM = !1)
    }(0, vb.i)({
      disableUnusedSpecularTerm: ob
    });
    var lb = Ub(36618),
      tb = Ub(36937);
    const wb = new RegExp(`^#define ${eb.c}\\s*$`, "m");
    class sb extends(Zb(eb.f)) {
      constructor(bb, ab) {
        super(bb, ab), this.cX = !1, ab.ditherOnlyWhileFading && (tb.e.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const ab = new WeakSet;
        bb.onEffectCreatedObservable.add((Ub => {
          let {
            effect: Ab,
            subMesh: Mb
          } = Ub;
          if (this.featureState.prewarmingDither || ab.has(Ab)) return;
          ab.add(Ab);
          const Tb = null === Mb || void 0 === Mb ? void 0 : Mb.getMesh();
          Tb && !wb.test(Ab.defines) && bb.oN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Tb) || ab.delete(Ab)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.cX || bb.Jab()) return !1;
        const ab = new Fb.e(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, ab)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ab.effect
      }
      dispose(bb) {
        this.cX = !0, super.dispose(bb)
      }
    }
    const gb = new Map;

    function Cb(bb, ab) {
      gb.set(bb, ab)
    }
    Cb(Yb.d, Db), Cb(Bb.g, pb), Cb(eb.f, sb), Cb(vb.l, Kb), (0, Lb.c)({
      create: (bb, ab) => {
        const Ub = new Ab.StandardMaterial(bb.name, ab);
        return (0, lb.q)(bb, Ub), Ub.detailMap._pluginDefineNames
      },
      write: (bb, ab, Ub) => {
        (0, lb.X)(bb.mirror, ab, Ub)
      },
      addFeature: (bb, ab, Ub) => {
        const Ab = gb.get(ab.feature);
        if (!Ab) throw new Error(`${ab.feature.name} has no plugin class (registerPluginClass)`);
        new Ab(bb.mirror, ab.state, ...Ub)
      },
      texture: (bb, ab, Ub) => {
        let {
          url: Ab,
          noMipmap: Mb,
          invertY: Tb,
          samplingMode: Yb,
          data: Bb,
          sets: eb
        } = Ub;
        if (!Bb) {
          const Ub = new Eb.b(Ab, ab, Mb, Tb, Yb);
          return Object.assign(Ub, eb), void(0, Pb.P)(bb, Ub)
        }
        const vb = {},
          Lb = new Promise(((bb, ab) => {
            vb.onLoad = bb, vb.onError = (bb, Ub) => {
              ab(new Error(`${Bb.context}: ${(null===Ub||void 0===Ub?void 0:Ub.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Xb,
            bytes: jb,
            label: Rb
          } = Bb,
          kb = {
            noMipmap: Mb,
            invertY: !1,
            samplingMode: Yb,
            ...vb,
            mimeType: Xb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yb = new Eb.b(null, ab, kb);
        lb.r.set(yb, Lb), Object.assign(yb, eb), yb.updateURL(Ab, jb);
        const Zb = yb.getInternalTexture();
        Zb && (Zb.label = Rb), bb.uvSet = yb.coordinatesIndex, bb.matrix.set((0, lb.U)(yb)), (0, Pb.P)(bb, yb)
      },
      cube: (bb, ab, Ub) => {
        let {
          rootUrl: Ab,
          files: Tb,
          noMipmap: Yb,
          luminance: Bb
        } = Ub;
        const {
          samplingMode: eb
        } = bb.sampler, vb = eb === (0, Pb.D)(Yb) ? null : () => {
          (0, lb.Q)(Lb, eb)
        }, Lb = new Mb.e(Ab, ab, null, Yb, Tb, vb, null, (0, Pb.C)(Bb));
        Lb.coordinatesMode = Eb.b.SKYBOX_MODE, (0, Pb.P)(bb, Lb)
      },
      canvas: (bb, ab, Ub) => {
        let {
          width: Ab,
          height: Mb,
          mipmaps: Yb,
          samplingMode: Bb,
          hasAlpha: eb = !1,
          wrap: vb = Eb.b.CLAMP_ADDRESSMODE
        } = Ub;
        const Lb = new Tb.c(ab, {
          width: Ab,
          height: Mb
        }, bb, Yb, Bb);
        Lb.hasAlpha = eb, Lb.wrapU = vb, Lb.wrapV = vb;
        const Pb = (0, lb.D)(Lb);
        return (0, lb.E)(Pb, Lb), Pb
      }
    })
  },
  40260: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => vb,
      h: () => Lb,
      l: () => Pb
    });
    var Ab = Ub(40248),
      Mb = Ub(39167),
      Tb = Ub(39413),
      Eb = Ub(39541),
      Yb = Ub(40251),
      Bb = Ub(39534),
      eb = Ub(36821);
    class vb extends Eb.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, ab) => {
          this.releaseUnlessInstanced(ab)
        }, this.onLinked = null
      }
      link(bb) {
        var ab;
        (0, eb.o)(bb), this.model = bb, null === (ab = this.onLinked) || void 0 === ab || ab.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Mb of Object.values(this._vertexBuffers))
          if (!Mb.getIsInstanced()) {
            const {
              byteOffset: ab,
              byteStride: Ub,
              type: Ab,
              normalized: Tb
            } = Mb;
            bb.push({
              kind: Mb.getKind(),
              data: Mb.getData(),
              offset: ab,
              stride: Ub,
              components: Mb.getSize(),
              glType: Ab,
              isNormalized: Tb
            })
          } const ab = this._indices.length ? this._indices : null,
          {
            minimum: Ub,
            maximum: Ab
          } = this.extend;
        this.link(new eb.d(bb, ab, this.getTotalVertices(), new Float64Array(Ub.qUb()), new Float64Array(Ab.qUb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const ab = new vb(bb, this.oN()),
          Ub = this.uUb(void 0, !0);
        Ub && ab.setIndices(Ub);
        let Eb = !1;
        for (const Tb in this._vertexBuffers) {
          const bb = this._vertexBuffers[Tb],
            Ub = bb.getData();
          if (!Ub) continue;
          const Yb = bb.getSize(),
            {
              type: Bb,
              byteOffset: eb,
              byteStride: vb,
              normalized: Lb
            } = bb;
          Eb ||= bb.isUpdatable();
          const Pb = bb.getIsInstanced() ? (Ub instanceof Array ? 4 * Ub.length : Ub.byteLength) / vb : this.getTotalVertices(),
            Xb = (0, Mb.p)(Ub, Yb, Bb, eb, vb, Pb, !0),
            jb = {
              updatable: bb.isUpdatable(),
              stride: Yb,
              type: Bb,
              normalized: Lb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          ab.setVerticesBuffer(new Ab.g(this.vj(), Xb, Tb, jb), Pb)
        }
        return ab._updatable = Eb, ab._boundingInfo = new Tb.b(this.extend.minimum, this.extend.maximum), ab.relink(), ab
      }
      static mergeMeshes(bb, ab, Ub, Ab, Mb, Tb) {
        const Bb = bb[0].oN(),
          eb = new Yb.b(bb[0].name + "_merged", Bb),
          Lb = new vb(Eb.d.RandomId(), Bb, void 0, !1, eb);
        try {
          if (!Yb.b.MergeMeshes(bb, ab, Ub, eb, Mb, Tb)) return eb.dispose(), null
        } catch (Pb) {
          throw eb.dispose(), Pb
        }
        return Lb.relink(), eb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var ab;
        bb && null !== (ab = this.getVertexBuffer(bb)) && void 0 !== ab && ab.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, eb.x)(this.model), this.model = null)
      }
    }

    function Lb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Yb.b(bb, Ub);
      const Mb = (0, eb.k)(ab),
        {
          positions: Tb,
          normals: Lb,
          uvs: Pb,
          indices: Xb,
          named: jb = {}
        } = ab,
        Rb = new Bb.c;
      Rb.positions = Tb, Rb.normals = null !== Lb && void 0 !== Lb ? Lb : null, Rb.uvs = null !== Pb && void 0 !== Pb ? Pb : null, Rb.indices = Xb;
      const kb = new vb(Eb.d.RandomId(), Ub, Rb, !1, Ab);
      for (const {
          kind: Eb,
          components: Yb
        }
        of Mb.vertexAttributes) Eb in jb && Ab.setVerticesData(Eb, jb[Eb], !1, Yb);
      return kb.link(Mb), Ab
    }

    function Pb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Mb = new Yb.b(bb, Ub),
        {
          positions: Tb,
          normals: Eb,
          uvs: eb,
          indices: vb
        } = ab;
      return Object.assign(new Bb.c, {
        positions: Tb,
        normals: Eb,
        uvs: eb,
        indices: vb
      }).applyToMesh(Mb, Ab), Mb
    }
  },
  40743: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => kb,
      f: () => Yb,
      g: () => Eb,
      j: () => eb
    });
    var Ab = Ub(36587),
      Mb = Ub(38015),
      Tb = Ub(38010);

    function Eb(bb, ab, Ub, Ab) {
      const Mb = Tb.s;
      ab.fill(0), bb.gravity.toArray(ab, Mb.gravity), bb.colorDead.toArray(ab, Mb.colorDead), Ub[Mb.ramp] = bb.useRampGradients ? 1 : 0;
      const Eb = bb.getColorGradients(),
        Yb = Pb(bb, Eb, "colour", Ab);
      Ub[Mb.colorCount] = Yb;
      for (let Tb = 0; Tb < Yb; Tb++) {
        var Bb;
        const bb = Eb[Xb(Eb, Tb)];
        ab[Mb.colorPositions + Tb] = bb.gradient, bb.color1.toArray(ab, Mb.color1 + 4 * Tb), (null !== (Bb = bb.color2) && void 0 !== Bb ? Bb : bb.color1).toArray(ab, Mb.color2 + 4 * Tb)
      }
      const eb = bb.getVelocityGradients(),
        vb = Pb(bb, eb, "QR", Ab);
      Ub[Mb.velocityCount] = vb;
      for (let Tb = 0; Tb < vb; Tb++) Zb(ab, Mb.QR + 4 * Tb, eb[Xb(eb, Tb)]);
      const Lb = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        jb = Pb(bb, Lb, "colour remap", Ab);
      Ub[Mb.remapCount] = jb;
      for (let Tb = 0; Tb < jb; Tb++) Zb(ab, Mb.remap + 4 * Tb, Lb[Xb(Lb, Tb)])
    }

    function Yb() {
      return {
        key: [],
        texels: new Uint8Array(4 * Tb.m)
      }
    }
    const Bb = [];

    function eb(bb, ab) {
      return vb(bb, Bb), !yb(Bb, ab.key) && (ab.key.length = 0, ab.key.push(...Bb), ab.key.length > 0 && function(bb, ab) {
        for (let Ub = 0; Ub < Tb.m; Ub++) Mb.g.GetCurrentGradient(Ub / Tb.m, bb, ((bb, ab, Ub) => {
          Ab.Color3.LerpToRef(bb.color, ab.color, Ub, Lb)
        })), ab[4 * Ub] = 255 * Lb.r, ab[4 * Ub + 1] = 255 * Lb.g, ab[4 * Ub + 2] = 255 * Lb.b, ab[4 * Ub + 3] = 255
      }(bb.getRampGradients(), ab.texels), !0)
    }

    function vb(bb, ab) {
      ab.length = 0;
      const Ub = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== Ub && void 0 !== Ub && Ub.length) {
        ab.push(Ub.length);
        for (const bb of Ub) ab.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Lb = new Ab.Color3;

    function Pb(bb, ab, Ub, Ab) {
      return ab ? ab.length > Tb.c ? (Ab(`particleStops:${Ub}`, `GPU particles use the first 2 and last ${Tb.c-2} of more than ${Tb.c} ${Ub} gradient stops (${bb.name})`), Tb.c) : ab.length : 0
    }

    function Xb(bb, ab) {
      return ab < 2 || bb.length <= Tb.c ? ab : bb.length - Tb.c + ab
    }
    const jb = new Float32Array(Tb.q),
      Rb = new Uint32Array(jb.buffer);

    function kb(bb, ab, Ub) {
      return Eb(bb, jb, Rb, Ub), ab && yb(Rb, ab) ? null : Rb.slice()
    }

    function yb(bb, ab) {
      if (bb.length !== ab.length) return !1;
      for (let Ub = 0; Ub < bb.length; Ub++)
        if (bb[Ub] !== ab[Ub]) return !1;
      return !0
    }

    function Zb(bb, ab, Ub) {
      var Ab;
      bb[ab] = Ub.gradient, bb[ab + 1] = Ub.factor1, bb[ab + 2] = null !== (Ab = Ub.factor2) && void 0 !== Ab ? Ab : Ub.factor1
    }
  },
  40736: (bb, ab, Ub) => {
    function Ab() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ab = new Set;
      return (Ub, Ab) => {
        ab.has(Ub) || (ab.add(Ub), console.warn(bb + Ab))
      }
    }
    Ub.d(ab, {
      d: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);