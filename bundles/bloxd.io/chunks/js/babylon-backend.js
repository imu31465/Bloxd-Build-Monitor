export const id = 0;
export const ids = [0];
export const modules = {
  41339: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CapeMaterialPlugin: () => dp,
      HueTintMaterialPlugin: () => ep,
      LifeformMaterialPlugin: () => jp,
      OverlayMaterialPlugin: () => kp
    });
    var Op = cp(41345),
      op = cp(38232);
    class Ip extends((0, Op.d)(op.d)) {}(0, Op.g)(op.d, Ip);
    var Sp = cp(37411);
    class xp extends((0, Op.d)(Sp.h)) {}(0, Op.g)(Sp.h, xp);
    var Lp = cp(38071);
    class Yp extends((0, Op.d)(Lp.i)) {}(0, Op.g)(Lp.i, Yp);
    var Dp = cp(37655),
      Ap = cp(40459),
      Pp = cp(37646);
    class Wp extends((0, Op.d)(Pp.i)) {
      constructor(pp, ip, cp) {
        super(pp, ip, cp), (0, Dp.g)(pp)
      }
      dispose(pp) {
        (0, Dp.i)(this._material), super.dispose(pp)
      }
    }(0, Op.g)(Pp.i, Wp), (0, Pp.j)({
      disableUnusedSpecularTerm: Op.c,
      isLightingDisabled: pp => pp instanceof Ap.StandardMaterial && pp.disableLighting
    });
    var yp = cp(38916);
    class Up extends((0, Op.d)(yp.g)) {}(0, Op.g)(yp.g, Up);
    var wp = cp(39014),
      vp = cp(37496),
      tp = cp(38352),
      Hp = cp(37454);
    class dp extends((0, Op.d)(wp.b)) {}(0, Op.g)(wp.b, dp);
    class ep extends((0, Op.d)(vp.d)) {}(0, Op.g)(vp.d, ep);
    class jp extends((0, Op.d)(tp.q)) {}(0, Op.g)(tp.q, jp);
    class kp extends((0, Op.d)(Hp.d)) {}(0, Op.g)(Hp.d, kp)
  },
  41801: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      addBabylonLights: () => ji,
      default: () => Ri
    });
    var Op = cp(41806),
      op = (cp(40182), cp(41333), cp(40663), cp(41814)),
      Ip = cp(37479),
      Sp = cp(37313),
      xp = cp(41826),
      Lp = cp(41834),
      Yp = cp(37448),
      Dp = (cp(41345), cp(41851)),
      Ap = cp(41843),
      Pp = cp(38949),
      Wp = cp(41860),
      yp = cp(40062),
      Up = cp(38938);
    const wp = "gpuParticles",
      vp = Up.o,
      tp = pp => pp / 4,
      Hp = pp => `gpuParticleSystem[${pp>>2}].${"xyzw"[3&pp]}`,
      dp = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Up.d}\n#define COLOR_POSITIONS ${tp(vp.colorPositions)}\n#define COLOR1 ${tp(vp.color1)}\n#define COLOR2 ${tp(vp.color2)}\n#define VELOCITY ${tp(vp.tw)}\n#define REMAP ${tp(vp.remap)}\n#define RECORDS_PER_ROW ${Up.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Up.m/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Hp(vp.gravity)}, ${Hp(vp.gravity+1)}, ${Hp(vp.gravity+2)}); }\nint colorCount() { return int(${Hp(vp.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${tp(vp.colorDead)}]; }\nint velocityCount() { return int(${Hp(vp.velocityCount)}); }\nint remapCount() { return int(${Hp(vp.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    yp.b.ShadersStore[`${wp}VertexShader`] = dp, yp.b.ShadersStore[`${wp}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const ep = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      jp = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var kp = cp(38930),
      mp = cp(41864);
    class Rp extends kp.c {
      constructor(pp, ip, cp, Op) {
        super(pp, ip, cp), this.renderer = cp, this.pw = Op, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Up.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, mp.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (pp, ip) => {
          const {
            engine: cp
          } = this, Op = cp._gl;
          cp._bindTextureDirectly(Op.TEXTURE_2D, this.records, !0), cp._unpackFlipY(!1);
          const op = this.ring.recordBits;
          for (let Ip = pp; Ip < ip;) {
            const pp = Math.floor(Ip / Up.l),
              cp = Math.min(ip, (pp + 1) * Up.l);
            Op.texSubImage2D(Op.TEXTURE_2D, 0, Ip % Up.l * 4, pp, 4 * (cp - Ip), 1, Op.RGBA_INTEGER, Op.UNSIGNED_INT, op, Ip * Up.e), Ip = cp
          }
          cp._bindTextureDirectly(Op.TEXTURE_2D, null)
        }, this.id = pp;
        const op = Op.gy();
        this.engine = op;
        const Ip = Math.max(1, ip),
          Sp = Math.min(Ip, Up.l);
        this.records = op.createRawTexture(null, 4 * Sp, Math.ceil(Ip / Sp), Dp.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Dp.d.TEXTURE_NEAREST_SAMPLINGMODE, null, Dp.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pw.getAnimationRatio() || 1;
        const ip = this.pw.getFrameId();
        if (ip === this.animatedFrame) return !1;
        const cp = super.animate(pp);
        return cp && (this.animatedFrame = ip, this.ring.takeUploads(this.uploadSlots)), cp
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(pp) {
        (0, mp.i)(this, this.uniforms, this.uniformBits, pp);
        for (const cp of Up.n) this.uniforms[cp] = this.uniformBits[cp];
        var ip;
        (0, mp.m)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ip = this.ramp) || void 0 === ip || ip.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Ap.b.CreateRGBATexture(this.rampTexels.texels, Up.k, 1, this.pw, !1, !1, Dp.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var pp;
        this.records.dispose(), null === (pp = this.ramp) || void 0 === pp || pp.dispose(), this.ramp = null
      }
    }
    const qp = "the context was lost before the programs linked";
    class Mp {
      constructor(pp, ip) {
        this.pw = pp, this.reportFailure = ip, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Wp.c)(), this.engine = pp.gy(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Ap.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, pp, !1, !1, Dp.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      eJ(pp, ip) {
        const cp = Up.l * this.engine.getCaps().maxTextureSize;
        ip > cp && this.warnOnce(`capacity:${pp}`, `particle system ${pp} holds ${cp} particles, not ${ip}: its records texture's limit`);
        const Op = new Rp(pp, Math.min(ip, cp), this, this.pw);
        return this.pw.addParticleSystem(Op), Op
      }
      canDraw(pp) {
        var ip, cp;
        if (this.failed || null === (ip = pp.texture) || void 0 === ip || null === (cp = ip.mirror) || void 0 === cp || !cp.isReady()) return !1;
        for (const Op of (0, Pp.o)(pp.blendMode))
          if (!this.effectFor(Op).isReady()) return !1;
        return !0
      }
      disposeStopped(pp) {
        this.pw._toBeDisposed.push(pp)
      }
      remove(pp) {
        this.pw.removeParticleSystem(pp), pp.releaseGl()
      }
      render(pp) {
        var ip;
        if (!pp.isReady() || !pp.hasLiveParticles()) return 0;
        const {
          engine: cp,
          pw: Op,
          frame: op
        } = this;
        pp.prepareDraw(this.warnOnce), pp.drawOffset(op, 0), op[3] = pp.drawTime();
        const Ip = pp.ring.drawStart(),
          Sp = pp.ring.drawCount(),
          xp = null !== (ip = pp.ramp) && void 0 !== ip ? ip : this.whiteRamp;
        cp.setState(!1);
        for (const Lp of (0, Pp.o)(pp.blendMode)) {
          const ip = this.effectFor(Lp);
          cp.enableEffect(ip), ip.setTexture("gpuParticleTexture", pp.texture.mirror), ip.setTexture("gpuParticleRampTexture", xp), ip._bindTexture("gpuParticleRecords", pp.records), ip.setMatrix("gpuParticleView", Op.getViewMatrix()), ip.setMatrix("gpuParticleProjection", Op.getProjectionMatrix()), ip.setFloatArray4("gpuParticleSystem", pp.uniforms), ip.setFloat4("gpuParticleFrame", op[0], op[1], op[2], op[3]), ip.setFloat2("gpuParticleRange", Ip, Sp), ip.setFloat("gpuParticleRamp", pp.uniforms[Up.o.ramp]), cp.bindBuffers(this.vertexBuffers, null, ip), cp.setAlphaMode((0, Pp.l)(Lp)), cp.drawArraysType(Dp.d.MATERIAL_TriangleStripDrawMode, 0, 4, Sp), ip._bindTexture("gpuParticleRecords", null)
        }
        return cp.setAlphaMode(Dp.d.ALPHA_DISABLE), Sp
      }
      awaitLink(pp) {
        const ip = pp.getPipelineContext(),
          cp = this.gl();
        !this.failed && cp && (!ip || ip.isParallelCompiled && !ip.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ip.isParallelCompiled && ip.program && (cp.getProgramParameter(ip.program, cp.LINK_STATUS) || this.fail(function(pp, ip, cp) {
          if (pp.isContextLost()) return qp;
          for (const [Op, op] of [
              ["VERTEX SHADER", ip.vertexShader],
              ["FRAGMENT SHADER", ip.fragmentShader]
            ]) {
            const ip = op && !pp.getShaderParameter(op, pp.COMPILE_STATUS) ? pp.getShaderInfoLog(op) : null;
            if (ip) return `${Op} ${ip}`
          }
          return pp.getProgramInfoLog(cp) || "a program did not link"
        }(cp, ip, ip.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(pp) {
        return pp === Pp.d ? this.multiplyEffect : this.effect
      }
      createEffect(pp) {
        return this.engine.createEffect(wp, [], ep, jp, pp, void 0, void 0, ((pp, ip) => {
          var cp;
          this.fail(null !== (cp = this.gl()) && void 0 !== cp && cp.isContextLost() ? qp : function(pp) {
            const ip = pp.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(ip) ? "a program failed, its log not in this browser's stack" : ip.replace(/^Error: /, "")
          }(ip))
        }))
      }
      fail(pp) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${pp}`), this.reportFailure(pp);
          for (const pp of this.pw.Wm.slice()) pp instanceof Rp && pp.disposeOnStop && pp.dispose()
        }
      }
    }
    var Cp = cp(40024);
    class Ep extends Cp.d {
      createEffect() {
        const pp = super.createEffect(...arguments);
        return lp(pp), Xp.has(pp) || (Xp.add(pp), pp.onCompileObservable.add((() => {
          lp(pp)
        }))), pp
      }
    }
    const Xp = new WeakSet;

    function lp(pp) {
      pp._vertexSourceCodeBeforeMigration = "", pp._fragmentSourceCodeBeforeMigration = ""
    }
    var Qp = cp(40405),
      Jp = cp(41325),
      Bp = cp(40159),
      Np = cp(40365),
      Tp = cp(40358),
      fp = cp(40289),
      bp = cp(41391),
      hp = cp(37815),
      ap = cp(41869),
      np = cp(41871),
      Fp = cp(41879),
      gp = cp(40314),
      Gp = cp(2949),
      rp = cp(37713),
      Zp = cp(40504),
      zp = cp(37784),
      sp = cp(37736);

    function Kp(pp) {
      if (pp.visibility < 1 || !pp.isVisible || !pp.isEnabled() || pp.metadata[sp.f] || !pp.isReady()) return !0;
      const ip = pp.Am;
      if (!ip || 0 === ip.length) return !0;
      for (let cp = 0; cp < ip.length; cp++) {
        const Op = ip[cp],
          op = Op.Ky();
        if (!op || !op.isReadyForSubMesh(pp, Op, !1)) return !0
      }
      return !1
    }
    class Vp {
      constructor(pp, ip) {
        this.HP = pp, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ip.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      mW(pp) {
        var ip;
        const cp = this.armed;
        if (this.armed = !1, this.vis = null, !cp) return !1;
        this.culled = 0;
        const {
          HP: Op
        } = this, op = null === (ip = Op.Zk) || void 0 === ip ? void 0 : ip.visibility;
        if (!op || !pp || Op.WU.yU) return !1;
        if (!(Op.WP.FOp[0] >= zp.i)) return !1;
        const Ip = pp.getProjectionMatrix().m;
        if (0 !== Ip[15]) return !1;
        const Sp = Op.BP,
          xp = pp.globalPosition,
          Lp = this.eye;
        return Lp[0] = xp.x + Sp[0], Lp[1] = xp.y + Sp[1], Lp[2] = xp.z + Sp[2], !!op.eyeClear(Lp[0], Lp[1], Lp[2], pp.minZ, Ip, Op.WP) && (this.vis = op, this.passable.clear(), this.count = 0, !0)
      }
      see(pp, ip) {
        const cp = this.count++;
        if (cp === this.cellSlots.length) {
          const pp = new Int32Array(2 * cp);
          pp.set(this.cellSlots), this.cellSlots = pp
        }
        this.cellSlots[cp] = ip, this.meshes[cp] = pp
      }
      seeThrough(pp) {
        this.passable.add(pp)
      }
      finish(pp, ip) {
        const {
          vis: cp,
          eye: Op,
          meshes: op,
          count: Ip,
          cellSlots: Sp
        } = this, {
          WP: xp
        } = this.HP, [Lp, Yp] = xp.FOp, Dp = null !== cp && cp.update(Op[0], Op[1], Op[2], xp.epp, Lp, Yp, this.passable);
        let Ap = 0;
        for (let Pp = 0; Pp < Ip; Pp++) {
          const Op = op[Pp];
          if (Dp) {
            const pp = 3 * Sp[Pp];
            if (pp >= 0 && !cp.isDrawn(ip[pp], ip[pp + 1], ip[pp + 2])) {
              Ap++;
              continue
            }
          }
          gp.g.prototype.push.call(pp, Op)
        }
        op.fill(null, 0, Ip), this.count = 0, this.vis = null, this.culled = Ap
      }
    }
    var ii = cp(37769),
      ci = cp(37723),
      Oi = cp(40476),
      oi = cp(41884),
      Ii = cp(40481),
      Si = cp(40415);
    let xi = 1;
    const Li = new WeakSet;

    function Yi() {
      return xi
    }

    function Di() {
      xi = xi >= 1073741823 ? 1 : xi + 1
    }

    function Ai(pp) {
      const ip = pp.metadata;
      if (!ip || !0 !== ip[rp.o]) return;
      const cp = ip[rp.s],
        Op = null === cp || void 0 === cp ? void 0 : cp._noaStamps;
      if (!cp || !Op) return;
      const op = cp.entries.indexOf(pp);
      op >= 0 && (Op[op] = 0)
    }

    function Pi(pp) {
      const ip = pp.Am;
      for (let cp = 0; cp < ip.length; cp++) {
        const pp = ip[cp].Ky();
        if (pp && !pp.isFrozen) return !1
      }
      for (let cp = 0; cp < ip.length; cp++) {
        const pp = ip[cp].Ky();
        pp && Li.add(pp)
      }
      return !0
    }
    let Wi = !1;
    const yi = new WeakSet;

    function Ui(pp, ip) {
      const cp = pp[ip];
      if ("function" !== typeof cp) throw new Error(`terrainDrawState: Babylon has no ${ip} to hook`);
      return cp
    }

    function wi(pp, ip, cp, Op, op) {
      const Ip = cp.WP.epp,
        Sp = new Map;
      let xp = 0;
      const Lp = new Vp(cp, pp),
        Yp = new ii.d(Ip, pp.gy());
      ! function(pp) {
        if (yi.has(pp) || (yi.add(pp), pp.onContextLostObservable.add(Di), pp.Fy.add(Di)), Wi) return;
        Wi = !0;
        const ip = oi.e.prototype,
          cp = Ui(ip, "_markSubMeshesAsDirty");
        Object.assign(ip, {
          _markSubMeshesAsDirty(pp) {
            cp.call(this, pp), Ai(this)
          }
        });
        const Op = Ui(Si.b.prototype, "_syncParentEnabledState");
        Object.assign(Si.b.prototype, {
          _syncParentEnabledState() {
            Op.call(this), Ai(this)
          }
        });
        const op = Ui(Ii.d.prototype, "resetDrawCache");
        Ii.d.prototype.resetDrawCache = function(pp, ip) {
          op.call(this, pp, ip), Ai(this.getMesh())
        };
        const Ip = Oi.b.prototype,
          Sp = Ui(Ip, "markDirty");
        Ip.markDirty = function(pp) {
          Sp.call(this, pp), Li.has(this) && Di()
        };
        const xp = Ui(Ip, "_markAllSubMeshesAsDirty");
        Object.assign(Ip, {
          _markAllSubMeshesAsDirty(pp) {
            xp.call(this, pp), Li.has(this) && Di()
          }
        })
      }(pp.gy());
      let Dp = new Float64Array(384),
        Ap = new Int32Array(64),
        Pp = new Uint8Array(64),
        Wp = new Float64Array(64),
        yp = new Int32Array(192),
        Up = 0;
      const wp = [],
        vp = new Float64Array(24),
        tp = () => {
          const pp = wp.pop();
          return void 0 !== pp ? (Ap[pp] = 0, pp) : (Up === Ap.length && (Dp = vi(Dp, new Float64Array(2 * Dp.length)), Ap = vi(Ap, new Int32Array(2 * Ap.length)), Pp = vi(Pp, new Uint8Array(2 * Pp.length)), Wp = vi(Wp, new Float64Array(2 * Wp.length)), yp = vi(yp, new Int32Array(2 * yp.length))), Up++)
        },
        Hp = pp => {
          const ip = 6 * pp._noaSlot,
            cp = pp.KOp[0],
            Op = pp.KOp[1];
          Dp[ip] = cp.x, Dp[ip + 1] = cp.y, Dp[ip + 2] = cp.z, Dp[ip + 3] = Op.x, Dp[ip + 4] = Op.y, Dp[ip + 5] = Op.z
        },
        dp = (pp, ip, cp) => {
          if (!cp) return Lp.see(pp, -1), !1;
          const Op = Kp(pp);
          return Op && Lp.seeThrough(Wp[ip]), Lp.see(pp, ip), !Op
        };
      let ep = -1;
      return pp.getActiveMeshCandidates = () => {
        const cp = pp.frustumPlanes,
          Op = ip._selectionContent;
        Op.reset(), (cp => {
          const Op = pp.frustumPlanes;
          xp = xp + 1 | 0 || 1;
          const op = ip.blocks,
            Ip = Lp.mW(pp.activeCamera),
            Sp = Ip && !0;
          if (Sp) {
            const ip = pp.gy().currentRenderPassId;
            ip !== ep && (ep = ip, Di())
          }
          const Yp = Yi(),
            Wp = Sp && !1;
          op.length > 0 && function(pp, ip) {
            for (let cp = 0; cp < 6; cp++) {
              const Op = pp[cp],
                op = Op.normal;
              ip[4 * cp] = op.x, ip[4 * cp + 1] = op.y, ip[4 * cp + 2] = op.z, ip[4 * cp + 3] = Op.d
            }
          }(Op, vp);
          const Up = Dp,
            wp = Ap,
            tp = Pp;
          for (let pp = 0; pp < op.length; pp++) {
            const ip = op[pp];
            if (!Zp.d.IsInFrustum(ip.KOp, Op)) continue;
            const Dp = ip.entries;
            {
              const pp = ip._noaSlots,
                Op = ip._noaStamps,
                op = ip._noaTerrain;
              for (let ip = 0; ip < Dp.length; ip++) {
                const Ap = pp[ip];
                if (wp[Ap] !== xp && (wp[Ap] = xp, tp[Ap] = ti(Up, 6 * Ap, vp) ? 1 : 0), 0 === tp[Ap]) continue;
                const Pp = Dp[ip];
                if (Sp && Op[ip] === Yp) Wp && 1 === op[ip] && Kp(Pp) && 0, Lp.see(Pp, 1 === op[ip] ? Ap : -1);
                else if (Sp) {
                  Op[ip] = Yp;
                  const pp = !0 === Pp.metadata[ci.n];
                  op[ip] = pp ? 1 : 0;
                  const cp = dp(Pp, Ap, pp);
                  !pp || cp && Pi(Pp) || (Op[ip] = 0)
                } else Ip ? dp(Pp, Ap, !0 === Pp.metadata[ci.n]) : gp.g.prototype.push.call(cp, Pp)
              }
              continue
            }
          }
          Ip && Lp.finish(cp, yp)
        })(Op), Yp.apply(Op, pp.activeCamera);
        const Ip = ip.sOp;
        for (let pp = 0; pp < Ip.length; pp++) {
          const ip = Ip[pp];
          ip.isEnabled() && gp.g.prototype.push.call(Op, ip)
        }
        return op(Op, cp), Op
      }, {
        iop: () => Lp.culled,
        TOp: (pp, ip) => {
          const op = Math.floor(ip[0] / Ip),
            xp = Math.floor(ip[1] / Ip),
            Lp = Math.floor(ip[2] / Ip),
            Yp = `${op}|${xp}|${Lp}`;
          let Dp = Sp.get(Yp);
          if (!Dp) {
            const pp = [0, 0, 0];
            cp.uip([op * Ip - 1, xp * Ip - 1, Lp * Ip - 1], null, pp), Dp = Object.assign(Op(pp, Ip + 2), {
              Oop: Yp,
              oop: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: tp()
            }), Hp(Dp), Wp[Dp._noaSlot] = (0, Gp.j)(op, xp, Lp), yp[3 * Dp._noaSlot] = op, yp[3 * Dp._noaSlot + 1] = xp, yp[3 * Dp._noaSlot + 2] = Lp, Sp.set(Yp, Dp)
          }
          Dp.oop++, pp.metadata[rp.w] = Dp
        },
        xJ: pp => {
          const ip = pp.metadata[rp.w];
          ip && (ip.oop--, ip.oop <= 0 && (Sp.delete(ip.Oop), wp.push(ip._noaSlot)), pp.metadata[rp.w] = null)
        },
        zOp: (pp, ip) => {
          const cp = pp,
            Op = ip.metadata[rp.w];
          (cp._noaSlots ??= []).push(Op._noaSlot), (cp._noaStamps ??= []).push(0), (cp._noaTerrain ??= []).push(0), cp.entries.push(ip)
        },
        removeEntry: (pp, ip) => {
          const cp = pp,
            Op = cp.entries,
            op = Op.indexOf(ip);
          if (op < 0) return;
          const Ip = cp._noaSlots,
            Sp = cp._noaStamps,
            xp = cp._noaTerrain,
            Lp = Op.length - 1;
          Op[op] = Op[Lp], Ip[op] = Ip[Lp], Sp[op] = Sp[Lp], xp[op] = xp[Lp], Op.pop(), Ip.pop(), Sp.pop(), xp.pop()
        },
        K9: pp => {
          for (const ip of Sp.values()) {
            ip.nOp.Iop(pp), ip.aOp.Iop(pp);
            for (const cp of ip.KOp) cp.Iop(pp);
            Hp(ip)
          }
        }
      }
    }

    function vi(pp, ip) {
      return ip.set(pp), ip
    }

    function ti(pp, ip, cp) {
      const Op = pp[ip],
        op = pp[ip + 1],
        Ip = pp[ip + 2],
        Sp = pp[ip + 3],
        xp = pp[ip + 4],
        Lp = pp[ip + 5];
      for (let Yp = 0; Yp < 24; Yp += 4) {
        const pp = cp[Yp],
          ip = cp[Yp + 1],
          Dp = cp[Yp + 2];
        if (!(pp * (pp >= 0 ? Sp : Op) + ip * (ip >= 0 ? xp : op) + Dp * (Dp >= 0 ? Lp : Ip) + cp[Yp + 3] >= 0)) return !1
      }
      return !0
    }
    var Hi = cp(37996);
    class di {
      constructor(pp, ip) {
        var cp = pp.pw;
        cp.uOp(new Fp.c(cp));
        var Op = new ap.d(Lp);
        cp.xop = Op, Op.blocks = [];
        var op, Ip = {},
          xp = [];
        this.textPlanes = xp, this.iop = () => op.iop(), this.K9 = pp => {
          Dp(Op, pp), op.K9(pp)
        }, this.TOp = (ip, cp, Sp) => {
          if (!ip.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!ip.metadata[rp.s] && !ip.metadata[rp.l]) {
            if (!cp) {
              var Lp = Op.sOp;
              if (ip.metadata[rp.B] && !ip.parent) {
                Lp = xp;
                var Dp = ip.bJ().Yop;
                ip.metadata[rp.C] = Dp.center.length() + Dp.radius, ip.Gy = !0
              }
              return Lp.push(ip), ip.metadata[rp.h] = Lp, void(ip.metadata[rp.l] = !0)
            }
            var Pp = Math.floor(Sp[0] / Yp),
              Wp = Math.floor(Sp[1] / Yp),
              yp = Math.floor(Sp[2] / Yp),
              Up = Pp + "|" + Wp + "|" + yp,
              wp = Ip[Up];
            if (!wp) {
              var vp = [Pp * Yp, Wp * Yp, yp * Yp],
                tp = [0, 0, 0];
              pp.HP.uip(vp, null, tp), wp = Ap(tp, Yp), Op.blocks.push(wp), Ip[Up] = wp, wp.Oop = Up
            }
            op.TOp(ip, Sp), op.zOp(wp, ip), wp.oop = (wp.oop || 0) + 1, ip.metadata[rp.s] = wp, ip.metadata[rp.o] = !0, ip.Gy = !0
          }
        }, this.xJ = pp => {
          if (pp.metadata) {
            pp.metadata[rp.l] && ((0, Gp.l)(pp.metadata[rp.h], pp), pp.metadata[rp.l] = !1), pp.metadata[rp.h] === xp && (pp.Gy = !1), pp.metadata[rp.h] = void 0, pp.metadata[rp.C] = void 0;
            var ip = pp.metadata[rp.s];
            ip && ip.entries && (pp.metadata[rp.o] && op.removeEntry(ip, pp), ip.oop--, ip.oop <= 0 && (delete Ip[ip.Oop], (0, Gp.l)(Op.blocks, ip))), op.xJ(pp), pp.metadata[rp.s] = null, pp.metadata[rp.o] = !1
          }
        }, this.h_ = function(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (pp.metadata[rp.s]) {
            if (pp.metadata[rp.o] === ip) return;
            var cp = pp.metadata[rp.s];
            cp && cp.entries && (ip ? op.zOp(cp, pp) : op.removeEntry(cp, pp)), pp.metadata[rp.o] = ip
          } else {
            if (pp.metadata[rp.l] === ip) return;
            var Ip = pp.metadata[rp.h] || Op.sOp;
            ip ? Ip.push(pp) : (0, Gp.l)(Ip, pp), pp.metadata[rp.l] = ip
          }
        };
        var Lp = () => {},
          Yp = ip * pp.HP.WP.epp,
          Dp = (pp, ip) => {
            pp.blocks.forEach((pp => {
              pp.nOp.Iop(ip), pp.aOp.Iop(ip), pp.KOp.forEach((pp => pp.Iop(ip))), pp.blocks && Dp(pp, ip)
            }))
          },
          Ap = (pp, ip) => {
            var cp = new Sp.Zy(pp[0], pp[1], pp[2]),
              Op = new Sp.Zy(pp[0] + ip, pp[1] + ip, pp[2] + ip);
            return new np.b(cp, Op, void 0, void 0, void 0, Lp)
          };
        op = wi(cp, Op, pp.HP, Ap, ((pp, ip) => {
          for (var cp = 0; cp < xp.length; cp++) {
            var Op = xp[cp];
            Op.isEnabled(!1) && ((0, Hi.d)(Op, ip) && gp.g.prototype.push.call(pp, Op))
          }
        }))
      }
    }

    function ei(pp) {
      const {
        holderPosition: ip,
        holderRotation: cp,
        tV: Op,
        fov: op,
        near: Ip,
        far: Sp
      } = pp.model.wV, xp = pp.vop;
      xp.position.i5(ip[0], ip[1], ip[2]), xp.rotation.i5(cp[0], cp[1], cp[2]);
      const Lp = pp.camera;
      Lp.position.i5(Op[0], Op[1], Op[2]), Lp.fov = op, Lp.minZ = Ip, Lp.maxZ = Sp
    }

    function ui(pp) {
      const ip = pp.gy(),
        cp = ip,
        Op = cp._gl;
      if (!Op || cp.eU < 2 || ip.lOp || Op.getParameter(Op.DEPTH_BITS) < 24) return !1;
      const op = pp._renderingManager,
        Ip = op.getRenderingGroup(-1),
        Sp = op.getRenderingGroup(0),
        xp = Np.b.prototype.render;
      return Ip.render = function(pp, ip, cp, Op, op, Ip, Lp, Yp, Dp) {
        (pp || Sp._empty) && xp.call(this, pp, ip, cp, Op, op, Ip, Lp, Yp, Dp)
      }, Sp.render = function(pp, cp, op, Sp) {
        let Lp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Yp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ap = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Pp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Wp = arguments.length > 8 ? arguments[8] : void 0;
        pp ? xp.call(this, pp, cp, op, Sp, Lp, Yp, Ap, Pp, Wp) : (ip.setAlphaMode(Dp.d.ALPHA_DISABLE), xp.call(this, null, !1, !1, Sp, Lp, Yp, Ap, !1), Ip._empty || (Op.depthRange(1, 1), xp.call(Ip, null, cp, op, Sp, Lp, Yp, Ap, Pp, Wp), Op.depthRange(0, 1)), xp.call(this, null, cp, op, Sp, !1, !1, !1, Pp, Wp))
      }, !0
    }

    function ji(pp, ip) {
      return [ip, hp.f].map(((ip, cp) => {
        const Op = new op.d("light", Sp.Zy.FromArray(ip), pp);
        return Op.diffuse = Ip.Color3.FromArray([1, 1, 1]), Op.specular = Ip.Color3.FromArray([1, 1, 1]), Op.intensity = hp.b[cp], Op
      }))
    }
    class ki extends Lp.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(pp) {
        var ip;
        this.heldTexture = pp, this.particleTexture = null !== (ip = null === pp || void 0 === pp ? void 0 : pp.mirror) && void 0 !== ip ? ip : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        pp && (this.particleTexture = null, (0, Yp.C)(this.heldTexture), this.heldTexture = null), super.dispose(pp, ip, cp)
      }
    }
    const mi = Op.c.Zero();
    const Ri = {
      Zcp: function(pp, ip) {
        return new Ep(pp, ip.Fcp, {
          preserveDrawingBuffer: ip.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      jop: function(pp, ip) {
        ! function(pp, ip, cp) {
          const Op = new fp.c(pp.engine);
          pp.pw = Op, Op.detachControl(), Op.autoClear = !1, Tp.d.MIN_RENDERINGGROUPS = -1;
          for (let Ip = Tp.d.MIN_RENDERINGGROUPS; Ip <= 1; Ip++) Op.setRenderingOrder(Ip, Np.b.PainterSortCompare, Np.b.PainterSortCompare, Np.b.PainterSortCompare);
          Op.setRenderingAutoClearDepthStencil(0, !1), Bp.b.Enabled = !1, pp.yop = new di(pp, Math.round(ip.Uop)), pp.vop = new Jp.b("camHolder", Op), pp.camera = new Qp.b("camera", new Sp.Zy(0, 0, 0), Op), pp.camera.parent = pp.vop, ei(pp), (0, hp.i)(pp, ((pp, ip, cp) => (0, bp.f)(ip, cp, pp.pw))), Op.clearColor = Ip.b.FromArray(ip.clearColor), Op.ambientColor = Ip.Color3.FromArray(ip.ambientColor);
          const op = cp(Op, ip.uop);
          Op.onNewLightAddedObservable.add((pp => {
            op.some((ip => ip === pp)) || console.error(`Light "${pp.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Op.skipPointerMovePicking = !0
        }(pp, ip, ji), ui(pp.pw)
      },
      wop: ei,
      setBabylonFog: function(pp, ip, cp, Op) {
        const op = pp.pw;
        op.fogMode = 3, op.fogStart = ip, op.fogEnd = cp, op.fogColor.set(Op[0], Op[1], Op[2])
      },
      Rop: function(pp, ip, cp) {
        return pp.engine.eU >= 2 && (pp.qop || (pp.qop = new Mp(pp.pw, pp.Mop)), !pp.qop.failed) ? pp.qop.eJ(ip, cp) : new ki(ip, cp, pp.pw)
      },
      Xop: function(pp, ip) {
        pp.pw.Wm.forEach((cp => {
          if (cp instanceof Rp) return void cp.K9(ip, pp.HP.BP);
          const Op = cp;
          if (Op.emitter.getConnectedParticleSystems)
            for (const pp of Op._particles) pp.position.set(pp.position.x - ip[0], pp.position.y - ip[1], pp.position.z - ip[2]);
          else {
            if (!Op.worldOffset) throw new Error("Particle system has no world offset");
            Op.worldOffset.x = -pp.HP.BP[0], Op.worldOffset.y = -pp.HP.BP[1], Op.worldOffset.z = -pp.HP.BP[2]
          }
        }))
      },
      linesFromArrays: function(pp, ip, cp) {
        const Op = new xp.b(ip, pp.pw, null, void 0, void 0, !1);
        return (0, bp.e)(ip, cp, pp.pw, Op), Op
      },
      iw: Ai,
      Eop: function(pp, ip) {
        return mi.origin.rM(ip.origin), mi.direction.rM(ip.direction), mi.length = ip.length, mi.epsilon = ip.epsilon, mi.Eop(pp, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  41345: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => ap,
      d: () => tp,
      g: () => Zp
    });
    var Op = cp(40459),
      op = cp(41347),
      Ip = cp(41393),
      Sp = cp(41353),
      xp = cp(38045),
      Lp = cp(38055),
      Yp = cp(38061),
      Dp = cp(38064),
      Ap = cp(37445),
      Pp = cp(37448),
      Wp = cp(41359),
      yp = cp(37433),
      Up = cp(37436),
      wp = cp(37421);

    function vp(pp, ip) {
      return Object.assign((function(pp, cp, Op, op) {
        return ip(this.featureState, pp, cp, Op, op)
      }), {
        Py: pp
      })
    }

    function tp(pp) {
      const ip = class extends Wp.c {
          constructor(ip, cp) {
            const Op = (0, Up.$)(ip),
              op = Op && (0, Up.s)(Op, pp.name);
            for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
            super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return pp.className
          }
          isCompatible(pp) {
            return pp === wp.b.GLSL || pp === wp.b.WGSL
          }
        },
        cp = (0, yp.l)(pp);
      for (const [Op, op] of Object.entries(yp.e)) {
        const Ip = pp[Op];
        if (Ip) {
          const pp = cp[Op];
          Object.defineProperty(ip.prototype, op, {
            value: vp(Ip, pp),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ip
    }
    class Hp extends(tp(xp.d)) {}
    var dp = cp(40024),
      ep = cp(41367),
      jp = cp(41375);

    function kp(pp, ip, cp) {
      return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
        const {
          width: Op
        } = pp[0].getSize(), op = pp.map(((pp, cp) => {
          var op;
          const Ip = Math.round(pp.getSize().height / Op),
            Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
          return {
            pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
            layers: Ip
          }
        })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
          let {
            pixels: ip,
            layers: op
          } = pp;
          return {
            atlas: new ep.c(ip, Op, Op, op, dp.d.TEXTUREFORMAT_RGBA, cp, !0, !1, Sp.d.NEAREST_NEAREST_MIPLINEAR),
            layers: op
          }
        }));
        return pp.forEach(((pp, ip) => {
          const Op = pp.getInternalTexture();
          mp.has(Op) || (! function(pp, ip) {
            const cp = ip.createRawTexture(new Uint8Array(4), 1, 1, dp.d.TEXTUREFORMAT_RGBA, !1, !1, Sp.d.NEAREST_SAMPLINGMODE);
            pp._hardwareTexture.release(), ip.unbindAllTextures(), cp._swapAndDie(pp, !1)
          }(Op, cp.gy()), mp.set(Op, op[ip].pixels))
        })), xp
      }(pp, ip.pixels, cp)))
    }
    const mp = new WeakMap;
    var Rp = cp(38069);
    class qp extends(tp(Lp.f)) {
      constructor(pp, ip) {
        super(pp, ip), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ip.textures.map((pp => pp.mirror)), this.mirrors.forEach(((pp, ip) => {
          pp.onLoadObservable.add((pp => {
            this.setTextureArrayData(pp, ip).catch((pp => {
              console.error(`Failed to build the texture arrays, at atlas ${ip}`, pp)
            }))
          }))
        })), (0, Rp.n)(ip, pp.shaderLanguage)
      }
      async setTextureArrayData(pp, ip) {
        const cp = this.featureState,
          {
            width: Op,
            height: op
          } = pp.getSize(),
          Ip = this._material.shaderLanguage;
        if (!cp.useWebGL2) return void(0, Rp.f)(this._material, cp, ip, Op, Math.round(op / Op), Ip);
        if (this.loaded.add(ip), this.loaded.size < this.mirrors.length) return;
        const Sp = await kp(this.mirrors, cp.sources, this._material.Gl());
        (0, Rp.b)(this._material, cp, Sp, Op, Ip)
      }
    }
    var Mp = cp(41378),
      Cp = cp(40498),
      Ep = cp(37313),
      Xp = cp(41383),
      lp = cp(40589),
      Qp = cp(40481),
      Jp = cp(41325),
      Bp = cp(37800),
      Np = cp(41391);
    class Tp extends Mp.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const fp = {
      Mesh: Xp.c,
      TransformNode: Jp.b,
      my: Mp.c,
      VertexBuffer: Mp.f,
      BoundingInfo: Cp.d,
      Zy: Ep.Zy,
      ArenaBuffer: Tp,
      SubMesh: Qp.d,
      VertexData: lp.d,
      MirroredGeometry: Np.b,
      meshFromArrays: Np.e,
      plainMeshFromArrays: Np.f
    };
    (0, Bp.g)(fp);
    var bp = cp(37655);
    class hp extends(tp(Dp.g)) {
      constructor(pp, ip) {
        if (super(pp, ip), pp instanceof Op.StandardMaterial && ip.dirLightCount > 0) {
          const ip = pp,
            cp = ip._blockDirtyMechanism;
          ip._blockDirtyMechanism = !0, pp.disableLighting = !0, ip._blockDirtyMechanism = cp;
          const Op = (0, Up.$)(pp);
          Op && (Op.disableLighting = !0, (0, Up.Y)(Op))
        }(0, bp.g)(pp)
      }
      dispose(pp) {
        (0, bp.i)(this._material), super.dispose(pp)
      }
    }

    function ap(pp, ip) {
      if (!(ip instanceof Op.StandardMaterial) || ip.specularTexture) return;
      const {
        r: cp,
        g: op,
        b: Ip
      } = ip.specularColor;
      0 === cp && 0 === op && 0 === Ip && (pp.SPECULARTERM = !1)
    }(0, Dp.d)({
      disableUnusedSpecularTerm: ap
    });
    var np = cp(37519),
      Fp = cp(37807);
    const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
    class Gp extends(tp(Yp.h)) {
      constructor(pp, ip) {
        super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
      }
      prewarmDitherTwins(pp) {
        const ip = new WeakSet;
        pp.onEffectCreatedObservable.add((cp => {
          let {
            effect: Op,
            subMesh: op
          } = cp;
          if (this.featureState.prewarmingDither || ip.has(Op)) return;
          ip.add(Op);
          const Ip = null === op || void 0 === op ? void 0 : op.getMesh();
          Ip && !gp.test(Op.defines) && pp.Gl().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Ip) || ip.delete(Op)
          }))
        }))
      }
      prewarmDither(pp) {
        if (this.Ry || pp.uR()) return !1;
        const ip = new Qp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(pp, ip)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ip.effect
      }
      dispose(pp) {
        this.Ry = !0, super.dispose(pp)
      }
    }
    const rp = new Map;

    function Zp(pp, ip) {
      rp.set(pp, ip)
    }
    Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
      create: (pp, ip) => {
        const cp = new Op.StandardMaterial(pp.name, ip);
        return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
      },
      write: (pp, ip, cp) => {
        (0, np.S)(pp.mirror, ip, cp)
      },
      addFeature: (pp, ip, cp) => {
        const Op = rp.get(ip.feature);
        if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
        new Op(pp.mirror, ip.state, ...cp)
      },
      texture: (pp, ip, cp) => {
        let {
          url: Op,
          noMipmap: op,
          invertY: Ip,
          samplingMode: xp,
          data: Lp,
          sets: Yp
        } = cp;
        if (!Lp) {
          const cp = new Sp.d(Op, ip, op, Ip, xp);
          return Object.assign(cp, Yp), void(0, Pp.K)(pp, cp)
        }
        const Dp = {},
          Ap = new Promise(((pp, ip) => {
            Dp.onLoad = pp, Dp.onError = (pp, cp) => {
              ip(new Error(`${Lp.context}: ${(null===cp||void 0===cp?void 0:cp.message)||pp||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Wp,
            bytes: yp,
            label: Up
          } = Lp,
          wp = {
            noMipmap: op,
            invertY: !1,
            samplingMode: xp,
            ...Dp,
            mimeType: Wp,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          vp = new Sp.d(null, ip, wp);
        np.t.set(vp, Ap), Object.assign(vp, Yp), vp.updateURL(Op, yp);
        const tp = vp.getInternalTexture();
        tp && (tp.label = Up), pp.uvSet = vp.coordinatesIndex, pp.matrix.set((0, np.L)(vp)), (0, Pp.K)(pp, vp)
      },
      cube: (pp, ip, cp) => {
        let {
          rootUrl: Op,
          files: Ip,
          noMipmap: xp,
          luminance: Lp
        } = cp;
        const {
          samplingMode: Yp
        } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
          (0, np.J)(Ap, Yp)
        }, Ap = new op.b(Op, ip, null, xp, Ip, Dp, null, (0, Pp.w)(Lp));
        Ap.coordinatesMode = Sp.d.SKYBOX_MODE, (0, Pp.K)(pp, Ap)
      },
      canvas: (pp, ip, cp) => {
        let {
          width: Op,
          height: op,
          mipmaps: xp,
          samplingMode: Lp,
          hasAlpha: Yp = !1,
          wrap: Dp = Sp.d.CLAMP_ADDRESSMODE
        } = cp;
        const Ap = new Ip.e(ip, {
          width: Op,
          height: op
        }, pp, xp, Lp);
        Ap.hasAlpha = Yp, Ap.wrapU = Dp, Ap.wrapV = Dp;
        const Pp = (0, np.B)(Ap);
        return (0, np.D)(Pp, Ap), Pp
      }
    })
  },
  41391: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Dp,
      e: () => Ap,
      f: () => Pp
    });
    var Op = cp(41378),
      op = cp(40273),
      Ip = cp(40498),
      Sp = cp(40593),
      xp = cp(41383),
      Lp = cp(40589),
      Yp = cp(37698);
    class Dp extends Sp.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (pp, ip) => {
          this.releaseUnlessInstanced(ip)
        }, this.onLinked = null
      }
      link(pp) {
        var ip;
        (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
      }
      relink() {
        this.release();
        const pp = [];
        for (const op of Object.values(this._vertexBuffers))
          if (!op.getIsInstanced()) {
            const {
              byteOffset: ip,
              byteStride: cp,
              type: Op,
              normalized: Ip
            } = op;
            pp.push({
              kind: op.getKind(),
              data: op.getData(),
              offset: ip,
              stride: cp,
              components: op.getSize(),
              glType: Op,
              isNormalized: Ip
            })
          } const ip = this._indices.length ? this._indices : null,
          {
            minimum: cp,
            maximum: Op
          } = this.extend;
        this.link(new Yp.f(pp, ip, this.getTotalVertices(), new Float64Array(cp.BOp()), new Float64Array(Op.BOp())))
      }
      copy(pp) {
        if (!this.model) return super.copy(pp);
        const ip = new Dp(pp, this.Gl()),
          cp = this.NOp(void 0, !0);
        cp && ip.setIndices(cp);
        let Sp = !1;
        for (const Ip in this._vertexBuffers) {
          const pp = this._vertexBuffers[Ip],
            cp = pp.getData();
          if (!cp) continue;
          const xp = pp.getSize(),
            {
              type: Lp,
              byteOffset: Yp,
              byteStride: Dp,
              normalized: Ap
            } = pp;
          Sp ||= pp.isUpdatable();
          const Pp = pp.getIsInstanced() ? (cp instanceof Array ? 4 * cp.length : cp.byteLength) / Dp : this.getTotalVertices(),
            Wp = (0, op.s)(cp, xp, Lp, Yp, Dp, Pp, !0),
            yp = {
              updatable: pp.isUpdatable(),
              stride: xp,
              type: Lp,
              normalized: Ap,
              takeBufferOwnership: !0,
              instanced: pp.getIsInstanced()
            };
          ip.setVerticesBuffer(new Op.f(this.gy(), Wp, Ip, yp), Pp)
        }
        return ip._updatable = Sp, ip._boundingInfo = new Ip.d(this.extend.minimum, this.extend.maximum), ip.relink(), ip
      }
      static mergeMeshes(pp, ip, cp, Op, op, Ip) {
        const Lp = pp[0].Gl(),
          Yp = new xp.c(pp[0].name + "_merged", Lp),
          Ap = new Dp(Sp.b.RandomId(), Lp, void 0, !1, Yp);
        try {
          if (!xp.c.MergeMeshes(pp, ip, cp, Yp, op, Ip)) return Yp.dispose(), null
        } catch (Pp) {
          throw Yp.dispose(), Pp
        }
        return Ap.relink(), Yp
      }
      removeVerticesData(pp) {
        this.releaseUnlessInstanced(pp), super.removeVerticesData(pp)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(pp) {
        var ip;
        pp && null !== (ip = this.getVertexBuffer(pp)) && void 0 !== ip && ip.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Yp.v)(this.model), this.model = null)
      }
    }

    function Ap(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
      const op = (0, Yp.j)(ip),
        {
          positions: Ip,
          normals: Ap,
          uvs: Pp,
          indices: Wp,
          named: yp = {}
        } = ip,
        Up = new Lp.d;
      Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
      const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
      for (const {
          kind: Sp,
          components: xp
        }
        of op.vertexAttributes) Sp in yp && Op.setVerticesData(Sp, yp[Sp], !1, xp);
      return wp.link(op), Op
    }

    function Pp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const op = new xp.c(pp, cp),
        {
          positions: Ip,
          normals: Sp,
          uvs: Yp,
          indices: Dp
        } = ip;
      return Object.assign(new Lp.d, {
        positions: Ip,
        normals: Sp,
        uvs: Yp,
        indices: Dp
      }).applyToMesh(op, Op), op
    }
  },
  41864: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => wp,
      e: () => xp,
      i: () => Sp,
      m: () => Yp
    });
    var Op = cp(37479),
      op = cp(38942),
      Ip = cp(38938);

    function Sp(pp, ip, cp, Op) {
      const op = Ip.o;
      ip.fill(0), pp.gravity.toArray(ip, op.gravity), pp.colorDead.toArray(ip, op.colorDead), cp[op.ramp] = pp.useRampGradients ? 1 : 0;
      const Sp = pp.getColorGradients(),
        xp = Pp(pp, Sp, "colour", Op);
      cp[op.colorCount] = xp;
      for (let Ip = 0; Ip < xp; Ip++) {
        var Lp;
        const pp = Sp[Wp(Sp, Ip)];
        ip[op.colorPositions + Ip] = pp.gradient, pp.color1.toArray(ip, op.color1 + 4 * Ip), (null !== (Lp = pp.color2) && void 0 !== Lp ? Lp : pp.color1).toArray(ip, op.color2 + 4 * Ip)
      }
      const Yp = pp.getVelocityGradients(),
        Dp = Pp(pp, Yp, "tw", Op);
      cp[op.velocityCount] = Dp;
      for (let Ip = 0; Ip < Dp; Ip++) tp(ip, op.tw + 4 * Ip, Yp[Wp(Yp, Ip)]);
      const Ap = pp.useRampGradients ? pp.getColorRemapGradients() : null,
        yp = Pp(pp, Ap, "colour remap", Op);
      cp[op.remapCount] = yp;
      for (let Ip = 0; Ip < yp; Ip++) tp(ip, op.remap + 4 * Ip, Ap[Wp(Ap, Ip)])
    }

    function xp() {
      return {
        key: [],
        texels: new Uint8Array(4 * Ip.k)
      }
    }
    const Lp = [];

    function Yp(pp, ip) {
      return Dp(pp, Lp), !vp(Lp, ip.key) && (ip.key.length = 0, ip.key.push(...Lp), ip.key.length > 0 && function(pp, ip) {
        for (let cp = 0; cp < Ip.k; cp++) op.l.GetCurrentGradient(cp / Ip.k, pp, ((pp, ip, cp) => {
          Op.Color3.LerpToRef(pp.color, ip.color, cp, Ap)
        })), ip[4 * cp] = 255 * Ap.r, ip[4 * cp + 1] = 255 * Ap.g, ip[4 * cp + 2] = 255 * Ap.b, ip[4 * cp + 3] = 255
      }(pp.getRampGradients(), ip.texels), !0)
    }

    function Dp(pp, ip) {
      ip.length = 0;
      const cp = pp.useRampGradients ? pp.getRampGradients() : null;
      if (null !== cp && void 0 !== cp && cp.length) {
        ip.push(cp.length);
        for (const pp of cp) ip.push(pp.gradient, pp.color.r, pp.color.g, pp.color.b)
      }
    }
    const Ap = new Op.Color3;

    function Pp(pp, ip, cp, Op) {
      return ip ? ip.length > Ip.d ? (Op(`particleStops:${cp}`, `GPU particles use the first 2 and last ${Ip.d-2} of more than ${Ip.d} ${cp} gradient stops (${pp.name})`), Ip.d) : ip.length : 0
    }

    function Wp(pp, ip) {
      return ip < 2 || pp.length <= Ip.d ? ip : pp.length - Ip.d + ip
    }
    const yp = new Float32Array(Ip.m),
      Up = new Uint32Array(yp.buffer);

    function wp(pp, ip, cp) {
      return Sp(pp, yp, Up, cp), ip && vp(Up, ip) ? null : Up.slice()
    }

    function vp(pp, ip) {
      if (pp.length !== ip.length) return !1;
      for (let cp = 0; cp < pp.length; cp++)
        if (pp[cp] !== ip[cp]) return !1;
      return !0
    }

    function tp(pp, ip, cp) {
      var Op;
      pp[ip] = cp.gradient, pp[ip + 1] = cp.factor1, pp[ip + 2] = null !== (Op = cp.factor2) && void 0 !== Op ? Op : cp.factor1
    }
  },
  41375: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      const Op = ip * ip * 4,
        op = pp[0].layers,
        Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
        Sp = new Uint8Array(Ip * Op);
      pp.forEach(((ip, cp) => {
        const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
        Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
      }));
      const xp = Math.max(1, Math.min(Ip, cp || Ip));
      if (xp === Ip) return [{
        pixels: Sp,
        layers: Ip
      }];
      const Lp = [];
      for (let Yp = 0; Yp < Ip; Yp += xp) {
        const pp = Math.min(Ip, Yp + xp);
        Lp.push({
          pixels: Sp.slice(Yp * Op, pp * Op),
          layers: pp - Yp
        })
      }
      return Lp
    }
    cp.d(ip, {
      d: () => Op,
      h: () => Ip
    });
    const op = new WeakMap;

    function Ip(pp, ip, cp) {
      var Op, Ip;
      const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
      op.set(pp, Sp);
      const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
      Sp.set(ip[0], xp);
      const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
      if (Lp) return Lp.built;
      const Yp = {
        urls: [...ip],
        built: cp()
      };
      return xp.push(Yp), Yp.built.catch((() => {
        xp.splice(xp.indexOf(Yp), 1)
      })), Yp.built
    }
  },
  41860: (pp, ip, cp) => {
    function Op() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ip = new Set;
      return (cp, Op) => {
        ip.has(cp) || (ip.add(cp), console.warn(pp + Op))
      }
    }
    cp.d(ip, {
      c: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);