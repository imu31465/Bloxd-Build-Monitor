export const id = 0;
export const ids = [0];
export const modules = {
  40535: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      CapeMaterialPlugin: () => Vb,
      HueTintMaterialPlugin: () => Lb,
      LifeformMaterialPlugin: () => ub,
      OverlayMaterialPlugin: () => Yb
    });
    var kb = sb(40540),
      Wb = sb(37604);
    class ab extends((0, kb.f)(Wb.c)) {}(0, kb.g)(Wb.c, ab);
    var Tb = sb(36727);
    class Ub extends((0, kb.f)(Tb.g)) {}(0, kb.g)(Tb.g, Ub);
    var Ib = sb(37441);
    class Hb extends((0, kb.f)(Ib.d)) {}(0, kb.g)(Ib.d, Hb);
    var fb = sb(36974),
      Mb = sb(39709),
      Xb = sb(36968);
    class nb extends((0, kb.f)(Xb.g)) {
      constructor(bb, cb, sb) {
        super(bb, cb, sb), (0, fb.g)(bb)
      }
      dispose(bb) {
        (0, fb.h)(this._material), super.dispose(bb)
      }
    }(0, kb.g)(Xb.g, nb), (0, Xb.h)({
      disableUnusedSpecularTerm: kb.c,
      isLightingDisabled: bb => bb instanceof Mb.StandardMaterial && bb.disableLighting
    });
    var mb = sb(38292);
    class lb extends((0, kb.f)(mb.h)) {}(0, kb.g)(mb.h, lb);
    var Qb = sb(38392),
      eb = sb(36836),
      Cb = sb(37736),
      Nb = sb(36780);
    class Vb extends((0, kb.f)(Qb.c)) {}(0, kb.g)(Qb.c, Vb);
    class Lb extends((0, kb.f)(eb.c)) {}(0, kb.g)(eb.c, Lb);
    class ub extends((0, kb.f)(Cb.k)) {}(0, kb.g)(Cb.k, ub);
    class Yb extends((0, kb.f)(Nb.d)) {}(0, kb.g)(Nb.d, Yb)
  },
  40964: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      addBabylonLights: () => ec,
      default: () => Vc
    });
    var kb = sb(40966),
      Wb = (sb(39386), sb(40531), sb(39902), sb(40981)),
      ab = sb(39232),
      Tb = sb(36821),
      Ub = sb(36654),
      Ib = sb(40991),
      Hb = sb(40995),
      fb = sb(36772),
      Mb = (sb(40540), sb(41006)),
      Xb = sb(41e3),
      nb = sb(38322),
      mb = sb(41011),
      lb = sb(39267),
      Qb = sb(38304);
    const eb = "gpuParticles",
      Cb = Qb.t,
      Nb = bb => bb / 4,
      Vb = bb => `gpuParticleSystem[${bb>>2}].${"xyzw"[3&bb]}`,
      Lb = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Qb.e}\n#define COLOR_POSITIONS ${Nb(Cb.colorPositions)}\n#define COLOR1 ${Nb(Cb.color1)}\n#define COLOR2 ${Nb(Cb.color2)}\n#define VELOCITY ${Nb(Cb.BQ)}\n#define REMAP ${Nb(Cb.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Qb.n/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Vb(Cb.gravity)}, ${Vb(Cb.gravity+1)}, ${Vb(Cb.gravity+2)}); }\nint colorCount() { return int(${Vb(Cb.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Nb(Cb.colorDead)}]; }\nint velocityCount() { return int(${Vb(Cb.velocityCount)}); }\nint remapCount() { return int(${Vb(Cb.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    lb.d.ShadersStore[`${eb}VertexShader`] = Lb, lb.d.ShadersStore[`${eb}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const ub = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Yb = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var hb = sb(38297),
      Jb = sb(41020);
    class gb extends hb.b {
      constructor(bb, cb, sb, kb) {
        super(bb, cb, sb), this.renderer = sb, this.aQ = kb, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(Qb.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Jb.h)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (bb, cb) => {
          const {
            engine: sb,
            perRow: kb
          } = this, Wb = sb._gl;
          sb._bindTextureDirectly(Wb.TEXTURE_2D, this.records, !0), sb._unpackFlipY(!1);
          const ab = this.ring.recordBits;
          for (let Tb = bb; Tb < cb;) {
            const bb = Math.floor(Tb / kb),
              sb = Math.min(cb, (bb + 1) * kb);
            Wb.texSubImage2D(Wb.TEXTURE_2D, 0, Tb % kb * 4, bb, 4 * (sb - Tb), 1, Wb.RGBA_INTEGER, Wb.UNSIGNED_INT, ab, Tb * Qb.h), Tb = sb
          }
          sb._bindTextureDirectly(Wb.TEXTURE_2D, null)
        }, this.id = bb;
        const Wb = kb.Sm();
        this.engine = Wb;
        const ab = Math.max(1, cb);
        this.perRow = Math.min(ab, 256), this.records = Wb.createRawTexture(null, 4 * this.perRow, Math.ceil(ab / this.perRow), Mb.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Mb.e.TEXTURE_NEAREST_SAMPLINGMODE, null, Mb.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.aQ.getAnimationRatio() || 1;
        const cb = this.aQ.getFrameId();
        if (cb === this.animatedFrame) return !1;
        const sb = super.animate(bb);
        return sb && (this.animatedFrame = cb, this.ring.takeUploads(this.uploadSlots)), sb
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(bb) {
        (0, Jb.k)(this, this.uniforms, this.uniformBits, bb);
        for (const sb of Qb.r) this.uniforms[sb] = this.uniformBits[sb];
        var cb;
        (0, Jb.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (cb = this.ramp) || void 0 === cb || cb.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Xb.e.CreateRGBATexture(this.rampTexels.texels, Qb.m, 1, this.aQ, !1, !1, Mb.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var bb;
        this.records.dispose(), null === (bb = this.ramp) || void 0 === bb || bb.dispose(), this.ramp = null
      }
    }
    class Bb {
      constructor(bb) {
        this.aQ = bb, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, mb.c)(), this.engine = bb.Sm(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Xb.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, bb, !1, !1, Mb.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      eJ(bb, cb) {
        const sb = 256 * this.engine.getCaps().maxTextureSize;
        cb > sb && this.warnOnce(`capacity:${bb}`, `particle system ${bb} holds ${sb} particles, not ${cb}: its records texture's limit`);
        const kb = new gb(bb, Math.min(cb, sb), this, this.aQ);
        return this.aQ.addParticleSystem(kb), kb
      }
      canDraw(bb) {
        var cb, sb;
        if (this.failed || null === (cb = bb.texture) || void 0 === cb || null === (sb = cb.mirror) || void 0 === sb || !sb.isReady()) return !1;
        for (const kb of (0, nb.i)(bb.blendMode))
          if (!this.effectFor(kb).isReady()) return !1;
        return !0
      }
      disposeStopped(bb) {
        this.aQ._toBeDisposed.push(bb)
      }
      remove(bb) {
        this.aQ.removeParticleSystem(bb), bb.releaseGl()
      }
      render(bb) {
        var cb;
        if (!bb.isReady() || !bb.hasLiveParticles()) return 0;
        const {
          engine: sb,
          aQ: kb,
          frame: Wb
        } = this;
        bb.prepareDraw(this.warnOnce), bb.drawOffset(Wb, 0), Wb[3] = bb.drawTime();
        const ab = bb.ring.drawStart(),
          Tb = bb.ring.drawCount(),
          Ub = null !== (cb = bb.ramp) && void 0 !== cb ? cb : this.whiteRamp;
        sb.setState(!1);
        for (const Ib of (0, nb.i)(bb.blendMode)) {
          const cb = this.effectFor(Ib);
          sb.enableEffect(cb), cb.setTexture("gpuParticleTexture", bb.texture.mirror), cb.setTexture("gpuParticleRampTexture", Ub), cb._bindTexture("gpuParticleRecords", bb.records), cb.setMatrix("gpuParticleView", kb.getViewMatrix()), cb.setMatrix("gpuParticleProjection", kb.getProjectionMatrix()), cb.setFloatArray4("gpuParticleSystem", bb.uniforms), cb.setFloat4("gpuParticleFrame", Wb[0], Wb[1], Wb[2], Wb[3]), cb.setFloat2("gpuParticleRange", ab, Tb), cb.setFloat("gpuParticleRamp", bb.uniforms[Qb.t.ramp]), sb.bindBuffers(this.vertexBuffers, null, cb), sb.setAlphaMode((0, nb.h)(Ib)), sb.drawArraysType(Mb.e.MATERIAL_TriangleStripDrawMode, 0, 4, Tb), cb._bindTexture("gpuParticleRecords", null)
        }
        return sb.setAlphaMode(Mb.e.ALPHA_DISABLE), Tb
      }
      awaitLink(bb) {
        const cb = bb.getPipelineContext(),
          sb = this.engine._gl;
        !this.failed && sb && (!cb || cb.isParallelCompiled && !cb.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : cb.isParallelCompiled && cb.program && (sb.getProgramParameter(cb.program, sb.LINK_STATUS) || this.fail(sb.getProgramInfoLog(cb.program) || "a program did not link")))
      }
      effectFor(bb) {
        return bb === nb.c ? this.multiplyEffect : this.effect
      }
      createEffect(bb) {
        return this.engine.createEffect(eb, [], ub, Yb, bb, void 0, void 0, ((bb, cb) => {
          this.fail(cb)
        }))
      }
      fail(bb) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${bb}`);
          for (const bb of this.aQ.mV.slice()) bb instanceof gb && bb.disposeOnStop && bb.dispose()
        }
      }
    }
    var tb = sb(39651),
      yb = sb(40528),
      Pb = sb(39356),
      Db = sb(39601),
      Eb = sb(39593),
      ib = sb(39522),
      Ob = sb(40581),
      Gb = sb(37153),
      Kb = sb(41025),
      Zb = sb(41032),
      zb = sb(41035),
      qb = sb(39536),
      db = sb(37048),
      Ab = sb(37044),
      wb = sb(39750),
      rb = sb(37115),
      ob = sb(37069);

    function Sb(bb) {
      if (bb.visibility < 1 || !bb.isVisible || !bb.isEnabled() || bb.metadata[ob.g] || !bb.isReady()) return !0;
      const cb = bb.XV;
      if (!cb || 0 === cb.length) return !0;
      for (let sb = 0; sb < cb.length; sb++) {
        const kb = cb[sb],
          Wb = kb.pm();
        if (!Wb || !Wb.isReadyForSubMesh(bb, kb, !1)) return !0
      }
      return !1
    }
    class Rb {
      constructor(bb, cb) {
        this.eX = bb, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, cb.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Bn(bb) {
        var cb;
        const sb = this.armed;
        if (this.armed = !1, this.vis = null, !sb) return !1;
        this.culled = 0;
        const {
          eX: kb
        } = this, Wb = null === (cb = kb.HV) || void 0 === cb ? void 0 : cb.visibility;
        if (!Wb || !bb || kb.Cl.Nl) return !1;
        if (!(kb.fX.osb[0] >= rb.f)) return !1;
        const ab = bb.getProjectionMatrix().m;
        if (0 !== ab[15]) return !1;
        const Tb = kb.iX,
          Ub = bb.globalPosition,
          Ib = this.eye;
        return Ib[0] = Ub.x + Tb[0], Ib[1] = Ub.y + Tb[1], Ib[2] = Ub.z + Tb[2], !!Wb.eyeClear(Ib[0], Ib[1], Ib[2], bb.minZ, ab, kb.fX) && (this.vis = Wb, this.passable.clear(), this.count = 0, !0)
      }
      see(bb, cb) {
        const sb = this.count++;
        if (sb === this.cellSlots.length) {
          const bb = new Int32Array(2 * sb);
          bb.set(this.cellSlots), this.cellSlots = bb
        }
        this.cellSlots[sb] = cb, this.meshes[sb] = bb
      }
      seeThrough(bb) {
        this.passable.add(bb)
      }
      finish(bb, cb) {
        const {
          vis: sb,
          eye: kb,
          meshes: Wb,
          count: ab,
          cellSlots: Tb
        } = this, {
          fX: Ub
        } = this.eX, [Ib, Hb] = Ub.osb, fb = null !== sb && sb.update(kb[0], kb[1], kb[2], Ub.h_, Ib, Hb, this.passable);
        let Mb = 0;
        for (let Xb = 0; Xb < ab; Xb++) {
          const kb = Wb[Xb];
          if (fb) {
            const bb = 3 * Tb[Xb];
            if (bb >= 0 && !sb.isDrawn(cb[bb], cb[bb + 1], cb[bb + 2])) {
              Mb++;
              continue
            }
          }
          qb.d.prototype.push.call(bb, kb)
        }
        Wb.fill(null, 0, ab), this.count = 0, this.vis = null, this.culled = Mb
      }
    }
    var vb = sb(37102),
      Fb = sb(37061),
      xb = sb(39730),
      jb = sb(41043),
      pb = sb(39737),
      bc = sb(39667);
    let cc = 1;
    const sc = new WeakSet;

    function kc() {
      return cc
    }

    function Wc() {
      cc = cc >= 1073741823 ? 1 : cc + 1
    }

    function ac(bb) {
      const cb = bb.metadata;
      if (!cb || !0 !== cb[Ab.n]) return;
      const sb = cb[Ab.s],
        kb = null === sb || void 0 === sb ? void 0 : sb._noaStamps;
      if (!sb || !kb) return;
      const Wb = sb.entries.indexOf(bb);
      Wb >= 0 && (kb[Wb] = 0)
    }

    function Tc(bb) {
      const cb = bb.XV;
      for (let sb = 0; sb < cb.length; sb++) {
        const bb = cb[sb].pm();
        if (bb && !bb.isFrozen) return !1
      }
      for (let sb = 0; sb < cb.length; sb++) {
        const bb = cb[sb].pm();
        bb && sc.add(bb)
      }
      return !0
    }
    let Uc = !1;
    const Ic = new WeakSet;

    function Hc(bb, cb) {
      const sb = bb[cb];
      if ("function" !== typeof sb) throw new Error(`terrainDrawState: Babylon has no ${cb} to hook`);
      return sb
    }

    function fc(bb, cb, sb, kb, Wb) {
      const ab = sb.fX.h_,
        Tb = new Map;
      let Ub = 0;
      const Ib = new Rb(sb, bb),
        Hb = new vb.d(ab, bb.Sm());
      ! function(bb) {
        if (Ic.has(bb) || (Ic.add(bb), bb.onContextLostObservable.add(Wc), bb.onContextRestoredObservable.add(Wc)), Uc) return;
        Uc = !0;
        const cb = jb.d.prototype,
          sb = Hc(cb, "_markSubMeshesAsDirty");
        Object.assign(cb, {
          _markSubMeshesAsDirty(bb) {
            sb.call(this, bb), ac(this)
          }
        });
        const kb = Hc(bc.c.prototype, "_syncParentEnabledState");
        Object.assign(bc.c.prototype, {
          _syncParentEnabledState() {
            kb.call(this), ac(this)
          }
        });
        const Wb = Hc(pb.b.prototype, "resetDrawCache");
        pb.b.prototype.resetDrawCache = function(bb, cb) {
          Wb.call(this, bb, cb), ac(this.getMesh())
        };
        const ab = xb.e.prototype,
          Tb = Hc(ab, "markDirty");
        ab.markDirty = function(bb) {
          Tb.call(this, bb), sc.has(this) && Wc()
        };
        const Ub = Hc(ab, "_markAllSubMeshesAsDirty");
        Object.assign(ab, {
          _markAllSubMeshesAsDirty(bb) {
            Ub.call(this, bb), sc.has(this) && Wc()
          }
        })
      }(bb.Sm());
      let fb = new Float64Array(384),
        Mb = new Int32Array(64),
        Xb = new Uint8Array(64),
        nb = new Float64Array(64),
        mb = new Int32Array(192),
        lb = 0;
      const Qb = [],
        eb = new Float64Array(24),
        Cb = () => {
          const bb = Qb.pop();
          return void 0 !== bb ? (Mb[bb] = 0, bb) : (lb === Mb.length && (fb = Mc(fb, new Float64Array(2 * fb.length)), Mb = Mc(Mb, new Int32Array(2 * Mb.length)), Xb = Mc(Xb, new Uint8Array(2 * Xb.length)), nb = Mc(nb, new Float64Array(2 * nb.length)), mb = Mc(mb, new Int32Array(2 * mb.length))), lb++)
        },
        Nb = bb => {
          const cb = 6 * bb._noaSlot,
            sb = bb.psb[0],
            kb = bb.psb[1];
          fb[cb] = sb.x, fb[cb + 1] = sb.y, fb[cb + 2] = sb.z, fb[cb + 3] = kb.x, fb[cb + 4] = kb.y, fb[cb + 5] = kb.z
        },
        Vb = (bb, cb, sb) => {
          if (!sb) return Ib.see(bb, -1), !1;
          const kb = Sb(bb);
          return kb && Ib.seeThrough(nb[cb]), Ib.see(bb, cb), !kb
        };
      let Lb = -1;
      return bb.getActiveMeshCandidates = () => {
        const sb = bb.frustumPlanes,
          kb = cb._selectionContent;
        kb.reset(), (sb => {
          const kb = bb.frustumPlanes;
          Ub = Ub + 1 | 0 || 1;
          const Wb = cb.blocks,
            ab = Ib.Bn(bb.activeCamera),
            Tb = ab && !0;
          if (Tb) {
            const cb = bb.Sm().currentRenderPassId;
            cb !== Lb && (Lb = cb, Wc())
          }
          const Hb = kc(),
            nb = Tb && !1;
          Wb.length > 0 && function(bb, cb) {
            for (let sb = 0; sb < 6; sb++) {
              const kb = bb[sb],
                Wb = kb.normal;
              cb[4 * sb] = Wb.x, cb[4 * sb + 1] = Wb.y, cb[4 * sb + 2] = Wb.z, cb[4 * sb + 3] = kb.d
            }
          }(kb, eb);
          const lb = fb,
            Qb = Mb,
            Cb = Xb;
          for (let bb = 0; bb < Wb.length; bb++) {
            const cb = Wb[bb];
            if (!wb.c.IsInFrustum(cb.psb, kb)) continue;
            const fb = cb.entries;
            {
              const bb = cb._noaSlots,
                kb = cb._noaStamps,
                Wb = cb._noaTerrain;
              for (let cb = 0; cb < fb.length; cb++) {
                const Mb = bb[cb];
                if (Qb[Mb] !== Ub && (Qb[Mb] = Ub, Cb[Mb] = Xc(lb, 6 * Mb, eb) ? 1 : 0), 0 === Cb[Mb]) continue;
                const Xb = fb[cb];
                if (Tb && kb[cb] === Hb) nb && 1 === Wb[cb] && Sb(Xb) && 0, Ib.see(Xb, 1 === Wb[cb] ? Mb : -1);
                else if (Tb) {
                  kb[cb] = Hb;
                  const bb = !0 === Xb.metadata[Fb.n];
                  Wb[cb] = bb ? 1 : 0;
                  const sb = Vb(Xb, Mb, bb);
                  !bb || sb && Tc(Xb) || (kb[cb] = 0)
                } else ab ? Vb(Xb, Mb, !0 === Xb.metadata[Fb.n]) : qb.d.prototype.push.call(sb, Xb)
              }
              continue
            }
          }
          ab && Ib.finish(sb, mb)
        })(kb), Hb.apply(kb, bb.activeCamera);
        const ab = cb.jsb;
        for (let bb = 0; bb < ab.length; bb++) {
          const cb = ab[bb];
          cb.isEnabled() && qb.d.prototype.push.call(kb, cb)
        }
        return Wb(kb, sb), kb
      }, {
        bkb: () => Ib.culled,
        Ksb: (bb, cb) => {
          const Wb = Math.floor(cb[0] / ab),
            Ub = Math.floor(cb[1] / ab),
            Ib = Math.floor(cb[2] / ab),
            Hb = `${Wb}|${Ub}|${Ib}`;
          let fb = Tb.get(Hb);
          if (!fb) {
            const bb = [0, 0, 0];
            sb.Pbb([Wb * ab - 1, Ub * ab - 1, Ib * ab - 1], null, bb), fb = Object.assign(kb(bb, ab + 2), {
              ckb: Hb,
              skb: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Cb()
            }), Nb(fb), nb[fb._noaSlot] = (0, db.g)(Wb, Ub, Ib), mb[3 * fb._noaSlot] = Wb, mb[3 * fb._noaSlot + 1] = Ub, mb[3 * fb._noaSlot + 2] = Ib, Tb.set(Hb, fb)
          }
          fb.skb++, bb.metadata[Ab.v] = fb
        },
        pY: bb => {
          const cb = bb.metadata[Ab.v];
          cb && (cb.skb--, cb.skb <= 0 && (Tb.delete(cb.ckb), Qb.push(cb._noaSlot)), bb.metadata[Ab.v] = null)
        },
        xsb: (bb, cb) => {
          const sb = bb,
            kb = cb.metadata[Ab.v];
          (sb._noaSlots ??= []).push(kb._noaSlot), (sb._noaStamps ??= []).push(0), (sb._noaTerrain ??= []).push(0), sb.entries.push(cb)
        },
        removeEntry: (bb, cb) => {
          const sb = bb,
            kb = sb.entries,
            Wb = kb.indexOf(cb);
          if (Wb < 0) return;
          const ab = sb._noaSlots,
            Tb = sb._noaStamps,
            Ub = sb._noaTerrain,
            Ib = kb.length - 1;
          kb[Wb] = kb[Ib], ab[Wb] = ab[Ib], Tb[Wb] = Tb[Ib], Ub[Wb] = Ub[Ib], kb.pop(), ab.pop(), Tb.pop(), Ub.pop()
        },
        o3: bb => {
          for (const cb of Tb.values()) {
            cb.Asb.Wkb(bb), cb.dsb.Wkb(bb);
            for (const sb of cb.psb) sb.Wkb(bb);
            Nb(cb)
          }
        }
      }
    }

    function Mc(bb, cb) {
      return cb.set(bb), cb
    }

    function Xc(bb, cb, sb) {
      const kb = bb[cb],
        Wb = bb[cb + 1],
        ab = bb[cb + 2],
        Tb = bb[cb + 3],
        Ub = bb[cb + 4],
        Ib = bb[cb + 5];
      for (let Hb = 0; Hb < 24; Hb += 4) {
        const bb = sb[Hb],
          cb = sb[Hb + 1],
          fb = sb[Hb + 2];
        if (!(bb * (bb >= 0 ? Tb : kb) + cb * (cb >= 0 ? Ub : Wb) + fb * (fb >= 0 ? Ib : ab) + sb[Hb + 3] >= 0)) return !1
      }
      return !0
    }
    var nc = sb(37375);
    class mc {
      constructor(bb, cb) {
        var sb = bb.aQ;
        sb.Vsb(new zb.b(sb));
        var kb = new Kb.c(Ib);
        sb.Tkb = kb, kb.blocks = [];
        var Wb, ab = {},
          Tb = [];
        this.textPlanes = Tb, this.bkb = () => Wb.bkb(), this.o3 = bb => {
          fb(kb, bb), Wb.o3(bb)
        }, this.Ksb = (cb, sb, Ub) => {
          if (!cb.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!cb.metadata[Ab.s] && !cb.metadata[Ab.l]) {
            if (!sb) {
              var Ib = kb.jsb;
              if (cb.metadata[Ab.A] && !cb.parent) {
                Ib = Tb;
                var fb = cb.PJ().Ikb;
                cb.metadata[Ab.C] = fb.center.length() + fb.radius, cb.Rm = !0
              }
              return Ib.push(cb), cb.metadata[Ab.h] = Ib, void(cb.metadata[Ab.l] = !0)
            }
            var Xb = Math.floor(Ub[0] / Hb),
              nb = Math.floor(Ub[1] / Hb),
              mb = Math.floor(Ub[2] / Hb),
              lb = Xb + "|" + nb + "|" + mb,
              Qb = ab[lb];
            if (!Qb) {
              var eb = [Xb * Hb, nb * Hb, mb * Hb],
                Cb = [0, 0, 0];
              bb.eX.Pbb(eb, null, Cb), Qb = Mb(Cb, Hb), kb.blocks.push(Qb), ab[lb] = Qb, Qb.ckb = lb
            }
            Wb.Ksb(cb, Ub), Wb.xsb(Qb, cb), Qb.skb = (Qb.skb || 0) + 1, cb.metadata[Ab.s] = Qb, cb.metadata[Ab.n] = !0, cb.Rm = !0
          }
        }, this.pY = bb => {
          if (bb.metadata) {
            bb.metadata[Ab.l] && ((0, db.l)(bb.metadata[Ab.h], bb), bb.metadata[Ab.l] = !1), bb.metadata[Ab.h] === Tb && (bb.Rm = !1), bb.metadata[Ab.h] = void 0, bb.metadata[Ab.C] = void 0;
            var cb = bb.metadata[Ab.s];
            cb && cb.entries && (bb.metadata[Ab.n] && Wb.removeEntry(cb, bb), cb.skb--, cb.skb <= 0 && (delete ab[cb.ckb], (0, db.l)(kb.blocks, cb))), Wb.pY(bb), bb.metadata[Ab.s] = null, bb.metadata[Ab.n] = !1
          }
        }, this.K8 = function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (bb.metadata[Ab.s]) {
            if (bb.metadata[Ab.n] === cb) return;
            var sb = bb.metadata[Ab.s];
            sb && sb.entries && (cb ? Wb.xsb(sb, bb) : Wb.removeEntry(sb, bb)), bb.metadata[Ab.n] = cb
          } else {
            if (bb.metadata[Ab.l] === cb) return;
            var ab = bb.metadata[Ab.h] || kb.jsb;
            cb ? ab.push(bb) : (0, db.l)(ab, bb), bb.metadata[Ab.l] = cb
          }
        };
        var Ib = () => {},
          Hb = cb * bb.eX.fX.h_,
          fb = (bb, cb) => {
            bb.blocks.forEach((bb => {
              bb.Asb.Wkb(cb), bb.dsb.Wkb(cb), bb.psb.forEach((bb => bb.Wkb(cb))), bb.blocks && fb(bb, cb)
            }))
          },
          Mb = (bb, cb) => {
            var sb = new Ub.Fm(bb[0], bb[1], bb[2]),
              kb = new Ub.Fm(bb[0] + cb, bb[1] + cb, bb[2] + cb);
            return new Zb.e(sb, kb, void 0, void 0, void 0, Ib)
          };
        Wb = fc(sb, kb, bb.eX, Mb, ((bb, cb) => {
          for (var sb = 0; sb < Tb.length; sb++) {
            var kb = Tb[sb];
            kb.isEnabled(!1) && ((0, nc.e)(kb, cb) && qb.d.prototype.push.call(bb, kb))
          }
        }))
      }
    }

    function lc(bb) {
      const {
        holderPosition: cb,
        holderRotation: sb,
        Iw: kb,
        fov: Wb,
        near: ab,
        far: Tb
      } = bb.model.rA, Ub = bb.lkb;
      Ub.position.I5(cb[0], cb[1], cb[2]), Ub.rotation.I5(sb[0], sb[1], sb[2]);
      const Ib = bb.camera;
      Ib.position.I5(kb[0], kb[1], kb[2]), Ib.fov = Wb, Ib.minZ = ab, Ib.maxZ = Tb
    }

    function Qc(bb) {
      const cb = bb.Sm(),
        sb = cb,
        kb = sb._gl;
      if (!kb || sb.gl < 2 || cb.Dsb || kb.getParameter(kb.DEPTH_BITS) < 24) return !1;
      const Wb = bb._renderingManager,
        ab = Wb.getRenderingGroup(-1),
        Tb = Wb.getRenderingGroup(0),
        Ub = Db.e.prototype.render;
      return ab.render = function(bb, cb, sb, kb, Wb, ab, Ib, Hb, fb) {
        (bb || Tb._empty) && Ub.call(this, bb, cb, sb, kb, Wb, ab, Ib, Hb, fb)
      }, Tb.render = function(bb, sb, Wb, Tb) {
        let Ib = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Hb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fb = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Xb = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          nb = arguments.length > 8 ? arguments[8] : void 0;
        bb ? Ub.call(this, bb, sb, Wb, Tb, Ib, Hb, fb, Xb, nb) : (cb.setAlphaMode(Mb.e.ALPHA_DISABLE), Ub.call(this, null, !1, !1, Tb, Ib, Hb, fb, !1), ab._empty || (kb.depthRange(1, 1), Ub.call(ab, null, sb, Wb, Tb, Ib, Hb, fb, Xb, nb), kb.depthRange(0, 1)), Ub.call(this, null, sb, Wb, Tb, !1, !1, !1, Xb, nb))
      }, !0
    }

    function ec(bb, cb) {
      return [cb, Gb.f].map(((cb, sb) => {
        const kb = new Wb.d("light", Ub.Fm.FromArray(cb), bb);
        return kb.diffuse = Tb.Color3.FromArray([1, 1, 1]), kb.specular = Tb.Color3.FromArray([1, 1, 1]), kb.intensity = Gb.c[sb], kb
      }))
    }
    class Cc extends Hb.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(bb) {
        var cb;
        this.heldTexture = bb, this.particleTexture = null !== (cb = null === bb || void 0 === bb ? void 0 : bb.mirror) && void 0 !== cb ? cb : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let bb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        bb && (this.particleTexture = null, (0, fb.E)(this.heldTexture), this.heldTexture = null), super.dispose(bb, cb, sb)
      }
    }
    const Nc = kb.e.Zero();
    const Vc = {
      Vkb: function(bb, cb) {
        return new ab.c(bb, cb.dcb, {
          preserveDrawingBuffer: cb.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      Ckb: function(bb, cb) {
        ! function(bb, cb, sb) {
          const kb = new ib.c(bb.engine);
          bb.aQ = kb, kb.detachControl(), kb.autoClear = !1, Eb.e.MIN_RENDERINGGROUPS = -1;
          for (let ab = Eb.e.MIN_RENDERINGGROUPS; ab <= 1; ab++) kb.setRenderingOrder(ab, Db.e.PainterSortCompare, Db.e.PainterSortCompare, Db.e.PainterSortCompare);
          kb.setRenderingAutoClearDepthStencil(0, !1), Pb.b.Enabled = !1, bb.Xkb = new mc(bb, Math.round(cb.nkb)), bb.lkb = new yb.c("camHolder", kb), bb.camera = new tb.b("camera", new Ub.Fm(0, 0, 0), kb), bb.camera.parent = bb.lkb, lc(bb), (0, Gb.i)(bb, ((bb, cb, sb) => (0, Ob.k)(cb, sb, bb.aQ))), kb.clearColor = Tb.e.FromArray(cb.clearColor), kb.ambientColor = Tb.Color3.FromArray(cb.ambientColor);
          const Wb = sb(kb, cb.ekb);
          kb.onNewLightAddedObservable.add((bb => {
            Wb.some((cb => cb === bb)) || console.error(`Light "${bb.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), kb.skipPointerMovePicking = !0
        }(bb, cb, ec), Qc(bb.aQ)
      },
      mkb: lc,
      setBabylonFog: function(bb, cb, sb, kb) {
        const Wb = bb.aQ;
        Wb.fogMode = 3, Wb.fogStart = cb, Wb.fogEnd = sb, Wb.fogColor.set(kb[0], kb[1], kb[2])
      },
      Lkb: function(bb, cb, sb) {
        return bb.engine.gl >= 2 && (bb.ukb || (bb.ukb = new Bb(bb.aQ)), !bb.ukb.failed) ? bb.ukb.eJ(cb, sb) : new Cc(cb, sb, bb.aQ)
      },
      hkb: function(bb, cb) {
        bb.aQ.mV.forEach((sb => {
          if (sb instanceof gb) return void sb.o3(cb, bb.eX.iX);
          const kb = sb;
          if (kb.emitter.getConnectedParticleSystems)
            for (const bb of kb._particles) bb.position.set(bb.position.x - cb[0], bb.position.y - cb[1], bb.position.z - cb[2]);
          else {
            if (!kb.worldOffset) throw new Error("Particle system has no world offset");
            kb.worldOffset.x = -bb.eX.iX[0], kb.worldOffset.y = -bb.eX.iX[1], kb.worldOffset.z = -bb.eX.iX[2]
          }
        }))
      },
      linesFromArrays: function(bb, cb, sb) {
        const kb = new Ib.d(cb, bb.aQ, null, void 0, void 0, !1);
        return (0, Ob.i)(cb, sb, bb.aQ, kb), kb
      },
      TQ: ac,
      Ykb: function(bb, cb) {
        return Nc.origin.ssb(cb.origin), Nc.direction.ssb(cb.direction), Nc.length = cb.length, Nc.epsilon = cb.epsilon, Nc.Ykb(bb, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40540: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => qb,
      f: () => Cb,
      g: () => Sb
    });
    var kb = sb(39709),
      Wb = sb(40542),
      ab = sb(40590),
      Tb = sb(40546),
      Ub = sb(37415),
      Ib = sb(37428),
      Hb = sb(37433),
      fb = sb(37435),
      Mb = sb(36769),
      Xb = sb(36772),
      nb = sb(40555),
      mb = sb(36752),
      lb = sb(36758),
      Qb = sb(36742);

    function eb(bb, cb) {
      return Object.assign((function(bb, sb, kb, Wb) {
        return cb(this.featureState, bb, sb, kb, Wb)
      }), {
        Nm: bb
      })
    }

    function Cb(bb) {
      const cb = class extends nb.e {
          constructor(cb, sb) {
            const kb = (0, lb.W)(cb),
              Wb = kb && (0, lb.v)(kb, bb.name);
            for (var ab = arguments.length, Tb = new Array(ab > 2 ? ab - 2 : 0), Ub = 2; Ub < ab; Ub++) Tb[Ub - 2] = arguments[Ub];
            super(cb, bb.name, bb.priority, Wb ? Wb.defines : bb.defines(...Tb), !1), this.featureState = void 0, this.featureState = sb, this._pluginManager._addPlugin(this), this._enable(!0), (0, lb.z)(this._material, bb, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return bb.className
          }
          isCompatible(bb) {
            return bb === Qb.e.GLSL || bb === Qb.e.WGSL
          }
        },
        sb = (0, mb.g)(bb);
      for (const [kb, Wb] of Object.entries(mb.c)) {
        const ab = bb[kb];
        if (ab) {
          const bb = sb[kb];
          Object.defineProperty(cb.prototype, Wb, {
            value: eb(ab, bb),
            writable: !0,
            configurable: !0
          })
        }
      }
      return cb
    }
    class Nb extends(Cb(Ub.e)) {}
    var Vb = sb(39232),
      Lb = sb(40564);
    const ub = new WeakMap;

    function Yb(bb, cb, sb) {
      let kb = ub.get(sb);
      kb || (kb = new Map, ub.set(sb, kb));
      const {
        url: Wb
      } = bb;
      let ab = kb.get(Wb);
      return ab || (ab = async function(bb, cb, sb) {
        const {
          width: kb,
          height: Wb
        } = bb.getSize(), ab = Math.round(Wb / kb), Ub = cb && cb.byteLength === kb * kb * ab * 4 ? cb : bb._readPixelsSync();
        return new Lb.c(Ub, kb, kb, ab, Vb.c.TEXTUREFORMAT_RGBA, sb, !0, !1, Tb.e.NEAREST_NEAREST_MIPLINEAR)
      }(bb, cb, sb), kb.set(Wb, ab), ab.catch((() => {
        kb.delete(Wb)
      }))), ab
    }
    var hb = sb(37438);
    class Jb extends(Cb(Ib.j)) {
      constructor(bb, cb) {
        super(bb, cb), cb.textures.forEach(((bb, cb) => {
          bb.mirror.onLoadObservable.add((bb => {
            this.setTextureArrayData(bb, cb).catch((bb => {
              console.error(`Failed to build texture array for atlas ${cb}`, bb)
            }))
          }))
        })), (0, hb.h)(cb, bb.shaderLanguage)
      }
      async setTextureArrayData(bb, cb) {
        var sb, kb;
        const Wb = this.featureState,
          {
            width: ab,
            height: Tb
          } = bb.getSize(),
          Ub = Wb.useWebGL2 ? await Yb(bb, null !== (sb = null === (kb = Wb.sources.pixels) || void 0 === kb ? void 0 : kb[cb]) && void 0 !== sb ? sb : null, this._material.EY()) : null;
        (0, hb.c)(this._material, Wb, cb, Ub, ab, Math.round(Tb / ab), this._material.shaderLanguage)
      }
    }
    var gb = sb(40567),
      Bb = sb(39745),
      tb = sb(36654),
      yb = sb(40574),
      Pb = sb(39848),
      Db = sb(39737),
      Eb = sb(40528),
      ib = sb(37134),
      Ob = sb(40581);
    class Gb extends gb.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Kb = {
      Mesh: yb.e,
      TransformNode: Eb.c,
      Dm: gb.e,
      VertexBuffer: gb.f,
      BoundingInfo: Bb.c,
      Fm: tb.Fm,
      ArenaBuffer: Gb,
      SubMesh: Db.b,
      VertexData: Pb.e,
      MirroredGeometry: Ob.e,
      meshFromArrays: Ob.i,
      plainMeshFromArrays: Ob.k
    };
    (0, ib.e)(Kb);
    var Zb = sb(36974);
    class zb extends(Cb(fb.j)) {
      constructor(bb, cb) {
        if (super(bb, cb), bb instanceof kb.StandardMaterial && cb.dirLightCount > 0) {
          const cb = bb,
            sb = cb._blockDirtyMechanism;
          cb._blockDirtyMechanism = !0, bb.disableLighting = !0, cb._blockDirtyMechanism = sb;
          const kb = (0, lb.W)(bb);
          kb && (kb.disableLighting = !0, (0, lb.U)(kb))
        }(0, Zb.g)(bb)
      }
      dispose(bb) {
        (0, Zb.h)(this._material), super.dispose(bb)
      }
    }

    function qb(bb, cb) {
      if (!(cb instanceof kb.StandardMaterial) || cb.specularTexture) return;
      const {
        r: sb,
        g: Wb,
        b: ab
      } = cb.specularColor;
      0 === sb && 0 === Wb && 0 === ab && (bb.SPECULARTERM = !1)
    }(0, fb.i)({
      disableUnusedSpecularTerm: qb
    });
    var db = sb(36855),
      Ab = sb(37147);
    const wb = new RegExp(`^#define ${Hb.e}\\s*$`, "m");
    class rb extends(Cb(Hb.k)) {
      constructor(bb, cb) {
        super(bb, cb), this.Em = !1, cb.ditherOnlyWhileFading && (Ab.g.add(bb), this.prewarmDitherTwins(bb))
      }
      prewarmDitherTwins(bb) {
        const cb = new WeakSet;
        bb.onEffectCreatedObservable.add((sb => {
          let {
            effect: kb,
            subMesh: Wb
          } = sb;
          if (this.featureState.prewarmingDither || cb.has(kb)) return;
          cb.add(kb);
          const ab = null === Wb || void 0 === Wb ? void 0 : Wb.getMesh();
          ab && !wb.test(kb.defines) && bb.EY().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ab) || cb.delete(kb)
          }))
        }))
      }
      prewarmDither(bb) {
        if (this.Em || bb.Scb()) return !1;
        const cb = new Db.b(0, 0, 0, 0, 0, bb, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(bb, cb)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== cb.effect
      }
      dispose(bb) {
        this.Em = !0, super.dispose(bb)
      }
    }
    const ob = new Map;

    function Sb(bb, cb) {
      ob.set(bb, cb)
    }
    Sb(Ub.e, Nb), Sb(Ib.j, Jb), Sb(Hb.k, rb), Sb(fb.j, zb), (0, Mb.d)({
      create: (bb, cb) => {
        const sb = new kb.StandardMaterial(bb.name, cb);
        return (0, db.u)(bb, sb), sb.detailMap._pluginDefineNames
      },
      write: (bb, cb, sb) => {
        (0, db.bb)(bb.mirror, cb, sb)
      },
      addFeature: (bb, cb, sb) => {
        const kb = ob.get(cb.feature);
        if (!kb) throw new Error(`${cb.feature.name} has no plugin class (registerPluginClass)`);
        new kb(bb.mirror, cb.state, ...sb)
      },
      texture: (bb, cb, sb) => {
        let {
          url: kb,
          noMipmap: Wb,
          invertY: ab,
          samplingMode: Ub,
          data: Ib,
          sets: Hb
        } = sb;
        if (!Ib) {
          const sb = new Tb.e(kb, cb, Wb, ab, Ub);
          return Object.assign(sb, Hb), void(0, Xb.K)(bb, sb)
        }
        const fb = {},
          Mb = new Promise(((bb, cb) => {
            fb.onLoad = bb, fb.onError = (bb, sb) => {
              cb(new Error(`${Ib.context}: ${(null===sb||void 0===sb?void 0:sb.message)||bb||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: nb,
            bytes: mb,
            label: lb
          } = Ib,
          Qb = {
            noMipmap: Wb,
            invertY: !1,
            samplingMode: Ub,
            ...fb,
            mimeType: nb,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          eb = new Tb.e(null, cb, Qb);
        db.w.set(eb, Mb), Object.assign(eb, Hb), eb.updateURL(kb, mb);
        const Cb = eb.getInternalTexture();
        Cb && (Cb.label = lb), bb.uvSet = eb.coordinatesIndex, bb.matrix.set((0, db.V)(eb)), (0, Xb.K)(bb, eb)
      },
      cube: (bb, cb, sb) => {
        let {
          rootUrl: kb,
          files: ab,
          noMipmap: Ub,
          luminance: Ib
        } = sb;
        const {
          samplingMode: Hb
        } = bb.sampler, fb = Hb === (0, Xb.A)(Ub) ? null : () => {
          (0, db.S)(Mb, Hb)
        }, Mb = new Wb.e(kb, cb, null, Ub, ab, fb, null, (0, Xb.y)(Ib));
        Mb.coordinatesMode = Tb.e.SKYBOX_MODE, (0, Xb.K)(bb, Mb)
      },
      canvas: (bb, cb, sb) => {
        let {
          width: kb,
          height: Wb,
          mipmaps: Ub,
          samplingMode: Ib,
          hasAlpha: Hb = !1,
          wrap: fb = Tb.e.CLAMP_ADDRESSMODE
        } = sb;
        const Mb = new ab.c(cb, {
          width: kb,
          height: Wb
        }, bb, Ub, Ib);
        Mb.hasAlpha = Hb, Mb.wrapU = fb, Mb.wrapV = fb;
        const Xb = (0, db.G)(Mb);
        return (0, db.I)(Xb, Mb), Xb
      }
    })
  },
  40581: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => fb,
      i: () => Mb,
      k: () => Xb
    });
    var kb = sb(40567),
      Wb = sb(39495),
      ab = sb(39745),
      Tb = sb(39853),
      Ub = sb(40574),
      Ib = sb(39848),
      Hb = sb(37029);
    class fb extends Tb.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (bb, cb) => {
          this.releaseUnlessInstanced(cb)
        }, this.onLinked = null
      }
      link(bb) {
        var cb;
        (0, Hb.n)(bb), this.model = bb, null === (cb = this.onLinked) || void 0 === cb || cb.call(this, bb)
      }
      relink() {
        this.release();
        const bb = [];
        for (const Wb of Object.values(this._vertexBuffers))
          if (!Wb.getIsInstanced()) {
            const {
              byteOffset: cb,
              byteStride: sb,
              type: kb,
              normalized: ab
            } = Wb;
            bb.push({
              kind: Wb.getKind(),
              data: Wb.getData(),
              offset: cb,
              stride: sb,
              components: Wb.getSize(),
              glType: kb,
              isNormalized: ab
            })
          } const cb = this._indices.length ? this._indices : null,
          {
            minimum: sb,
            maximum: kb
          } = this.extend;
        this.link(new Hb.e(bb, cb, this.getTotalVertices(), new Float64Array(sb.Osb()), new Float64Array(kb.Osb())))
      }
      copy(bb) {
        if (!this.model) return super.copy(bb);
        const cb = new fb(bb, this.EY()),
          sb = this.Gsb(void 0, !0);
        sb && cb.setIndices(sb);
        let Tb = !1;
        for (const ab in this._vertexBuffers) {
          const bb = this._vertexBuffers[ab],
            sb = bb.getData();
          if (!sb) continue;
          const Ub = bb.getSize(),
            {
              type: Ib,
              byteOffset: Hb,
              byteStride: fb,
              normalized: Mb
            } = bb;
          Tb ||= bb.isUpdatable();
          const Xb = bb.getIsInstanced() ? (sb instanceof Array ? 4 * sb.length : sb.byteLength) / fb : this.getTotalVertices(),
            nb = (0, Wb.t)(sb, Ub, Ib, Hb, fb, Xb, !0),
            mb = {
              updatable: bb.isUpdatable(),
              stride: Ub,
              type: Ib,
              normalized: Mb,
              takeBufferOwnership: !0,
              instanced: bb.getIsInstanced()
            };
          cb.setVerticesBuffer(new kb.f(this.Sm(), nb, ab, mb), Xb)
        }
        return cb._updatable = Tb, cb._boundingInfo = new ab.c(this.extend.minimum, this.extend.maximum), cb.relink(), cb
      }
      static mergeMeshes(bb, cb, sb, kb, Wb, ab) {
        const Ib = bb[0].EY(),
          Hb = new Ub.e(bb[0].name + "_merged", Ib),
          Mb = new fb(Tb.e.RandomId(), Ib, void 0, !1, Hb);
        try {
          if (!Ub.e.MergeMeshes(bb, cb, sb, Hb, Wb, ab)) return Hb.dispose(), null
        } catch (Xb) {
          throw Hb.dispose(), Xb
        }
        return Mb.relink(), Hb
      }
      removeVerticesData(bb) {
        this.releaseUnlessInstanced(bb), super.removeVerticesData(bb)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(bb) {
        var cb;
        bb && null !== (cb = this.getVertexBuffer(bb)) && void 0 !== cb && cb.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Hb.v)(this.model), this.model = null)
      }
    }

    function Mb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ub.e(bb, sb);
      const Wb = (0, Hb.l)(cb),
        {
          positions: ab,
          normals: Mb,
          uvs: Xb,
          indices: nb,
          named: mb = {}
        } = cb,
        lb = new Ib.e;
      lb.positions = ab, lb.normals = null !== Mb && void 0 !== Mb ? Mb : null, lb.uvs = null !== Xb && void 0 !== Xb ? Xb : null, lb.indices = nb;
      const Qb = new fb(Tb.e.RandomId(), sb, lb, !1, kb);
      for (const {
          kind: Tb,
          components: Ub
        }
        of Wb.vertexAttributes) Tb in mb && kb.setVerticesData(Tb, mb[Tb], !1, Ub);
      return Qb.link(Wb), kb
    }

    function Xb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wb = new Ub.e(bb, sb),
        {
          positions: ab,
          normals: Tb,
          uvs: Hb,
          indices: fb
        } = cb;
      return Object.assign(new Ib.e, {
        positions: ab,
        normals: Tb,
        uvs: Hb,
        indices: fb
      }).applyToMesh(Wb, kb), Wb
    }
  },
  41020: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Qb,
      h: () => Ub,
      k: () => Tb,
      l: () => Hb
    });
    var kb = sb(36821),
      Wb = sb(38313),
      ab = sb(38304);

    function Tb(bb, cb, sb, kb) {
      const Wb = ab.t;
      cb.fill(0), bb.gravity.toArray(cb, Wb.gravity), bb.colorDead.toArray(cb, Wb.colorDead), sb[Wb.ramp] = bb.useRampGradients ? 1 : 0;
      const Tb = bb.getColorGradients(),
        Ub = Xb(bb, Tb, "colour", kb);
      sb[Wb.colorCount] = Ub;
      for (let ab = 0; ab < Ub; ab++) {
        var Ib;
        const bb = Tb[nb(Tb, ab)];
        cb[Wb.colorPositions + ab] = bb.gradient, bb.color1.toArray(cb, Wb.color1 + 4 * ab), (null !== (Ib = bb.color2) && void 0 !== Ib ? Ib : bb.color1).toArray(cb, Wb.color2 + 4 * ab)
      }
      const Hb = bb.getVelocityGradients(),
        fb = Xb(bb, Hb, "BQ", kb);
      sb[Wb.velocityCount] = fb;
      for (let ab = 0; ab < fb; ab++) Cb(cb, Wb.BQ + 4 * ab, Hb[nb(Hb, ab)]);
      const Mb = bb.useRampGradients ? bb.getColorRemapGradients() : null,
        mb = Xb(bb, Mb, "colour remap", kb);
      sb[Wb.remapCount] = mb;
      for (let ab = 0; ab < mb; ab++) Cb(cb, Wb.remap + 4 * ab, Mb[nb(Mb, ab)])
    }

    function Ub() {
      return {
        key: [],
        texels: new Uint8Array(4 * ab.m)
      }
    }
    const Ib = [];

    function Hb(bb, cb) {
      return fb(bb, Ib), !eb(Ib, cb.key) && (cb.key.length = 0, cb.key.push(...Ib), cb.key.length > 0 && function(bb, cb) {
        for (let sb = 0; sb < ab.m; sb++) Wb.i.GetCurrentGradient(sb / ab.m, bb, ((bb, cb, sb) => {
          kb.Color3.LerpToRef(bb.color, cb.color, sb, Mb)
        })), cb[4 * sb] = 255 * Mb.r, cb[4 * sb + 1] = 255 * Mb.g, cb[4 * sb + 2] = 255 * Mb.b, cb[4 * sb + 3] = 255
      }(bb.getRampGradients(), cb.texels), !0)
    }

    function fb(bb, cb) {
      cb.length = 0;
      const sb = bb.useRampGradients ? bb.getRampGradients() : null;
      if (null !== sb && void 0 !== sb && sb.length) {
        cb.push(sb.length);
        for (const bb of sb) cb.push(bb.gradient, bb.color.r, bb.color.g, bb.color.b)
      }
    }
    const Mb = new kb.Color3;

    function Xb(bb, cb, sb, kb) {
      return cb ? cb.length > ab.e ? (kb(`particleStops:${sb}`, `GPU particles use the first 2 and last ${ab.e-2} of more than ${ab.e} ${sb} gradient stops (${bb.name})`), ab.e) : cb.length : 0
    }

    function nb(bb, cb) {
      return cb < 2 || bb.length <= ab.e ? cb : bb.length - ab.e + cb
    }
    const mb = new Float32Array(ab.n),
      lb = new Uint32Array(mb.buffer);

    function Qb(bb, cb, sb) {
      return Tb(bb, mb, lb, sb), cb && eb(lb, cb) ? null : lb.slice()
    }

    function eb(bb, cb) {
      if (bb.length !== cb.length) return !1;
      for (let sb = 0; sb < bb.length; sb++)
        if (bb[sb] !== cb[sb]) return !1;
      return !0
    }

    function Cb(bb, cb, sb) {
      var kb;
      bb[cb] = sb.gradient, bb[cb + 1] = sb.factor1, bb[cb + 2] = null !== (kb = sb.factor2) && void 0 !== kb ? kb : sb.factor1
    }
  },
  41011: (bb, cb, sb) => {
    function kb() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const cb = new Set;
      return (sb, kb) => {
        cb.has(sb) || (cb.add(sb), console.warn(bb + kb))
      }
    }
    sb.d(cb, {
      c: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);