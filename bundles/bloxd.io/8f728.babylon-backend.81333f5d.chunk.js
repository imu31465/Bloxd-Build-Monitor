export const id = 0;
export const ids = [0];
export const modules = {
  39505: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      addBabylonLights: () => SB,
      default: () => pB
    });
    var Vc = nc(39509),
      Ic = (nc(38021), nc(39201), nc(38497), nc(39518)),
      rB = nc(37884),
      uc = nc(35808),
      sc = nc(35753),
      Mc = nc(39535),
      Pc = nc(39542),
      qB = nc(35714),
      Oc = (nc(39211), nc(39555)),
      Tc = nc(39550),
      fc = nc(37234),
      mB = nc(39557),
      ec = nc(37923),
      tB = nc(37221);
    const Sc = "gpuParticles",
      yB = tB.y,
      zB = cB => cB / 4,
      pc = cB => `gpuParticleSystem[${cB>>2}].${"xyzw"[3&cB]}`,
      hc = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${tB.e}\n#define COLOR_POSITIONS ${zB(yB.colorPositions)}\n#define COLOR1 ${zB(yB.color1)}\n#define COLOR2 ${zB(yB.color2)}\n#define VELOCITY ${zB(yB.Qu)}\n#define REMAP ${zB(yB.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${tB.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${pc(yB.gravity)}, ${pc(yB.gravity+1)}, ${pc(yB.gravity+2)}); }\nint colorCount() { return int(${pc(yB.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${zB(yB.colorDead)}]; }\nint velocityCount() { return int(${pc(yB.velocityCount)}); }\nint remapCount() { return int(${pc(yB.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    ec.b.ShadersStore[`${Sc}VertexShader`] = hc, ec.b.ShadersStore[`${Sc}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const aB = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      lc = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Yc = nc(37214),
      Lc = nc(39559);
    class gB extends Yc.b {
      constructor(cB, Bc, nc, Vc) {
        super(cB, Bc, nc), this.renderer = nc, this.Ir = Vc, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(tB.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Lc.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (cB, Bc) => {
          const {
            engine: nc,
            perRow: Vc
          } = this, Ic = nc._gl;
          nc._bindTextureDirectly(Ic.TEXTURE_2D, this.records, !0), nc._unpackFlipY(!1);
          const rB = this.ring.recordBits;
          for (let uc = cB; uc < Bc;) {
            const cB = Math.floor(uc / Vc),
              nc = Math.min(Bc, (cB + 1) * Vc);
            Ic.texSubImage2D(Ic.TEXTURE_2D, 0, uc % Vc * 4, cB, 4 * (nc - uc), 1, Ic.RGBA_INTEGER, Ic.UNSIGNED_INT, rB, uc * tB.g), uc = nc
          }
          nc._bindTextureDirectly(Ic.TEXTURE_2D, null)
        }, this.id = cB;
        const Ic = Vc.RV();
        this.engine = Ic;
        const rB = Math.max(1, Bc);
        this.perRow = Math.min(rB, 256), this.records = Ic.createRawTexture(null, 4 * this.perRow, Math.ceil(rB / this.perRow), Oc.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Oc.e.TEXTURE_NEAREST_SAMPLINGMODE, null, Oc.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Ir.getAnimationRatio() || 1;
        const Bc = this.Ir.getFrameId();
        if (Bc === this.animatedFrame) return !1;
        const nc = super.animate(cB);
        return nc && (this.animatedFrame = Bc, this.ring.takeUploads(this.uploadSlots)), nc
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(cB) {
        (0, Lc.h)(this, this.uniforms, this.uniformBits, cB);
        for (const nc of tB.u) this.uniforms[nc] = this.uniformBits[nc];
        var Bc;
        (0, Lc.i)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Bc = this.ramp) || void 0 === Bc || Bc.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Tc.c.CreateRGBATexture(this.rampTexels.texels, tB.n, 1, this.Ir, !1, !1, Oc.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var cB;
        this.records.dispose(), null === (cB = this.ramp) || void 0 === cB || cB.dispose(), this.ramp = null
      }
    }
    class Uc {
      constructor(cB) {
        this.Ir = cB, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, mB.e)(), this.engine = cB.RV(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Tc.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, cB, !1, !1, Oc.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      Vnc(cB, Bc) {
        const nc = 256 * this.engine.getCaps().maxTextureSize;
        Bc > nc && this.warnOnce(`capacity:${cB}`, `particle system ${cB} holds ${nc} particles, not ${Bc}: its records texture's limit`);
        const Vc = new gB(cB, Math.min(Bc, nc), this, this.Ir);
        return this.Ir.addParticleSystem(Vc), Vc
      }
      canDraw(cB) {
        var Bc, nc;
        if (this.failed || null === (Bc = cB.texture) || void 0 === Bc || null === (nc = Bc.mirror) || void 0 === nc || !nc.isReady()) return !1;
        for (const Vc of (0, fc.n)(cB.blendMode))
          if (!this.effectFor(Vc).isReady()) return !1;
        return !0
      }
      disposeStopped(cB) {
        this.Ir._toBeDisposed.push(cB)
      }
      remove(cB) {
        this.Ir.removeParticleSystem(cB), cB.releaseGl()
      }
      render(cB) {
        var Bc;
        if (!cB.isReady() || !cB.hasLiveParticles()) return 0;
        const {
          engine: nc,
          Ir: Vc,
          frame: Ic
        } = this;
        cB.prepareDraw(this.warnOnce), cB.drawOffset(Ic, 0), Ic[3] = cB.drawTime();
        const rB = cB.ring.drawStart(),
          uc = cB.ring.drawCount(),
          sc = null !== (Bc = cB.ramp) && void 0 !== Bc ? Bc : this.whiteRamp;
        nc.setState(!1);
        for (const Mc of (0, fc.n)(cB.blendMode)) {
          const Bc = this.effectFor(Mc);
          nc.enableEffect(Bc), Bc.setTexture("gpuParticleTexture", cB.texture.mirror), Bc.setTexture("gpuParticleRampTexture", sc), Bc._bindTexture("gpuParticleRecords", cB.records), Bc.setMatrix("gpuParticleView", Vc.getViewMatrix()), Bc.setMatrix("gpuParticleProjection", Vc.getProjectionMatrix()), Bc.setFloatArray4("gpuParticleSystem", cB.uniforms), Bc.setFloat4("gpuParticleFrame", Ic[0], Ic[1], Ic[2], Ic[3]), Bc.setFloat2("gpuParticleRange", rB, uc), Bc.setFloat("gpuParticleRamp", cB.uniforms[tB.y.ramp]), nc.bindBuffers(this.vertexBuffers, null, Bc), nc.setAlphaMode((0, fc.j)(Mc)), nc.drawArraysType(Oc.e.MATERIAL_TriangleStripDrawMode, 0, 4, uc), Bc._bindTexture("gpuParticleRecords", null)
        }
        return nc.setAlphaMode(Oc.e.ALPHA_DISABLE), uc
      }
      awaitLink(cB) {
        const Bc = cB.getPipelineContext(),
          nc = this.engine._gl;
        !this.failed && nc && (!Bc || Bc.isParallelCompiled && !Bc.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Bc.isParallelCompiled && Bc.program && (nc.getProgramParameter(Bc.program, nc.LINK_STATUS) || this.fail(nc.getProgramInfoLog(Bc.program) || "a program did not link")))
      }
      effectFor(cB) {
        return cB === fc.e ? this.multiplyEffect : this.effect
      }
      createEffect(cB) {
        return this.engine.createEffect(Sc, [], aB, lc, cB, void 0, void 0, ((cB, Bc) => {
          this.fail(Bc)
        }))
      }
      fail(cB) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${cB}`);
          for (const cB of this.Ir.qD.slice()) cB instanceof gB && cB.disposeOnStop && cB.dispose()
        }
      }
    }
    var bB = nc(38237),
      Zc = nc(39192),
      Qc = nc(38002),
      Cc = nc(38212),
      vB = nc(38204),
      Dc = nc(38137),
      Nc = nc(39248),
      Ec = nc(36111),
      oc = nc(39562),
      Wc = nc(39567),
      wc = nc(39574),
      kB = nc(38158),
      Xc = nc(35985),
      Hc = nc(35979),
      Fc = nc(38349),
      Jc = nc(36069),
      jB = nc(36011);

    function Rc(cB) {
      if (cB.visibility < 1 || !cB.isVisible || !cB.isEnabled() || cB.metadata[jB.d] || !cB.isReady()) return !0;
      const Bc = cB.rD;
      if (!Bc || 0 === Bc.length) return !0;
      for (let nc = 0; nc < Bc.length; nc++) {
        const Vc = Bc[nc],
          Ic = Vc.AV();
        if (!Ic || !Ic.isReadyForSubMesh(cB, Vc, !1)) return !0
      }
      return !1
    }
    class iB {
      constructor(cB, Bc) {
        this.TB = cB, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Bc.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Ln(cB) {
        var Bc;
        const nc = this.armed;
        if (this.armed = !1, this.vis = null, !nc) return !1;
        this.culled = 0;
        const {
          TB: Vc
        } = this, Ic = null === (Bc = Vc.JC) || void 0 === Bc ? void 0 : Bc.visibility;
        if (!Ic || !cB || Vc.tr.SI) return !1;
        if (!(Vc.rn.cOc[0] >= Jc.c)) return !1;
        const rB = cB.getProjectionMatrix().m;
        if (0 !== rB[15]) return !1;
        const uc = Vc.ZB,
          sc = cB.globalPosition,
          Mc = this.eye;
        return Mc[0] = sc.x + uc[0], Mc[1] = sc.y + uc[1], Mc[2] = sc.z + uc[2], !!Ic.eyeClear(Mc[0], Mc[1], Mc[2], cB.minZ, rB, Vc.rn) && (this.vis = Ic, this.passable.clear(), this.count = 0, !0)
      }
      see(cB, Bc) {
        const nc = this.count++;
        if (nc === this.cellSlots.length) {
          const cB = new Int32Array(2 * nc);
          cB.set(this.cellSlots), this.cellSlots = cB
        }
        this.cellSlots[nc] = Bc, this.meshes[nc] = cB
      }
      seeThrough(cB) {
        this.passable.add(cB)
      }
      finish(cB, Bc) {
        const {
          vis: nc,
          eye: Vc,
          meshes: Ic,
          count: rB,
          cellSlots: uc
        } = this, {
          rn: sc
        } = this.TB, [Mc, Pc] = sc.cOc, qB = null !== nc && nc.update(Vc[0], Vc[1], Vc[2], sc.Guc, Mc, Pc, this.passable);
        let Oc = 0;
        for (let Tc = 0; Tc < rB; Tc++) {
          const Vc = Ic[Tc];
          if (qB) {
            const cB = 3 * uc[Tc];
            if (cB >= 0 && !nc.isDrawn(Bc[cB], Bc[cB + 1], Bc[cB + 2])) {
              Oc++;
              continue
            }
          }
          kB.e.prototype.push.call(cB, Vc)
        }
        Ic.fill(null, 0, rB), this.count = 0, this.vis = null, this.culled = Oc
      }
    }
    var Kc = nc(36051),
      xB = nc(35998),
      dc = nc(38326),
      Ac = nc(39580),
      Gc = nc(38332),
      cn = nc(38255);
    let BB = 1;
    const nB = new WeakSet;

    function VB() {
      return BB
    }

    function IB() {
      BB = BB >= 1073741823 ? 1 : BB + 1
    }

    function rn(cB) {
      const Bc = cB.metadata;
      if (!Bc || !0 !== Bc[Hc.k]) return;
      const nc = Bc[Hc.p],
        Vc = null === nc || void 0 === nc ? void 0 : nc._noaStamps;
      if (!nc || !Vc) return;
      const Ic = nc.entries.indexOf(cB);
      Ic >= 0 && (Vc[Ic] = 0)
    }

    function uB(cB) {
      const Bc = cB.rD;
      for (let nc = 0; nc < Bc.length; nc++) {
        const cB = Bc[nc].AV();
        if (cB && !cB.isFrozen) return !1
      }
      for (let nc = 0; nc < Bc.length; nc++) {
        const cB = Bc[nc].AV();
        cB && nB.add(cB)
      }
      return !0
    }
    let sB = !1;
    const MB = new WeakSet;

    function PB(cB, Bc) {
      const nc = cB[Bc];
      if ("function" !== typeof nc) throw new Error(`terrainDrawState: Babylon has no ${Bc} to hook`);
      return nc
    }

    function qn(cB, Bc, nc, Vc, Ic) {
      const rB = nc.rn.Guc,
        uc = new Map;
      let sc = 0;
      const Mc = new iB(nc, cB),
        Pc = new Kc.c(rB, cB.RV());
      ! function(cB) {
        if (MB.has(cB) || (MB.add(cB), cB.onContextLostObservable.add(IB), cB.onContextRestoredObservable.add(IB)), sB) return;
        sB = !0;
        const Bc = Ac.d.prototype,
          nc = PB(Bc, "_markSubMeshesAsDirty");
        Object.assign(Bc, {
          _markSubMeshesAsDirty(cB) {
            nc.call(this, cB), rn(this)
          }
        });
        const Vc = PB(cn.c.prototype, "_syncParentEnabledState");
        Object.assign(cn.c.prototype, {
          _syncParentEnabledState() {
            Vc.call(this), rn(this)
          }
        });
        const Ic = PB(Gc.e.prototype, "resetDrawCache");
        Gc.e.prototype.resetDrawCache = function(cB, Bc) {
          Ic.call(this, cB, Bc), rn(this.getMesh())
        };
        const rB = dc.c.prototype,
          uc = PB(rB, "markDirty");
        rB.markDirty = function(cB) {
          uc.call(this, cB), nB.has(this) && IB()
        };
        const sc = PB(rB, "_markAllSubMeshesAsDirty");
        Object.assign(rB, {
          _markAllSubMeshesAsDirty(cB) {
            sc.call(this, cB), nB.has(this) && IB()
          }
        })
      }(cB.RV());
      let qB = new Float64Array(384),
        Oc = new Int32Array(64),
        Tc = new Uint8Array(64),
        fc = new Float64Array(64),
        mB = new Int32Array(192),
        ec = 0;
      const tB = [],
        Sc = new Float64Array(24),
        yB = () => {
          const cB = tB.pop();
          return void 0 !== cB ? (Oc[cB] = 0, cB) : (ec === Oc.length && (qB = OB(qB, new Float64Array(2 * qB.length)), Oc = OB(Oc, new Int32Array(2 * Oc.length)), Tc = OB(Tc, new Uint8Array(2 * Tc.length)), fc = OB(fc, new Float64Array(2 * fc.length)), mB = OB(mB, new Int32Array(2 * mB.length))), ec++)
        },
        zB = cB => {
          const Bc = 6 * cB._noaSlot,
            nc = cB.sqc[0],
            Vc = cB.sqc[1];
          qB[Bc] = nc.x, qB[Bc + 1] = nc.y, qB[Bc + 2] = nc.z, qB[Bc + 3] = Vc.x, qB[Bc + 4] = Vc.y, qB[Bc + 5] = Vc.z
        },
        pc = (cB, Bc, nc) => {
          if (!nc) return Mc.see(cB, -1), !1;
          const Vc = Rc(cB);
          return Vc && Mc.seeThrough(fc[Bc]), Mc.see(cB, Bc), !Vc
        };
      let hc = -1;
      return cB.getActiveMeshCandidates = () => {
        const nc = cB.frustumPlanes,
          Vc = Bc._selectionContent;
        Vc.reset(), (nc => {
          const Vc = cB.frustumPlanes;
          sc = sc + 1 | 0 || 1;
          const Ic = Bc.blocks,
            rB = Mc.Ln(cB.activeCamera),
            uc = rB && !0;
          if (uc) {
            const Bc = cB.RV().currentRenderPassId;
            Bc !== hc && (hc = Bc, IB())
          }
          const Pc = VB(),
            fc = uc && !1;
          Ic.length > 0 && function(cB, Bc) {
            for (let nc = 0; nc < 6; nc++) {
              const Vc = cB[nc],
                Ic = Vc.normal;
              Bc[4 * nc] = Ic.x, Bc[4 * nc + 1] = Ic.y, Bc[4 * nc + 2] = Ic.z, Bc[4 * nc + 3] = Vc.d
            }
          }(Vc, Sc);
          const ec = qB,
            tB = Oc,
            yB = Tc;
          for (let cB = 0; cB < Ic.length; cB++) {
            const Bc = Ic[cB];
            if (!Fc.d.IsInFrustum(Bc.sqc, Vc)) continue;
            const qB = Bc.entries;
            {
              const cB = Bc._noaSlots,
                Vc = Bc._noaStamps,
                Ic = Bc._noaTerrain;
              for (let Bc = 0; Bc < qB.length; Bc++) {
                const Oc = cB[Bc];
                if (tB[Oc] !== sc && (tB[Oc] = sc, yB[Oc] = TB(ec, 6 * Oc, Sc) ? 1 : 0), 0 === yB[Oc]) continue;
                const Tc = qB[Bc];
                if (uc && Vc[Bc] === Pc) fc && 1 === Ic[Bc] && Rc(Tc) && 0, Mc.see(Tc, 1 === Ic[Bc] ? Oc : -1);
                else if (uc) {
                  Vc[Bc] = Pc;
                  const cB = !0 === Tc.metadata[xB.l];
                  Ic[Bc] = cB ? 1 : 0;
                  const nc = pc(Tc, Oc, cB);
                  !cB || nc && uB(Tc) || (Vc[Bc] = 0)
                } else rB ? pc(Tc, Oc, !0 === Tc.metadata[xB.l]) : kB.e.prototype.push.call(nc, Tc)
              }
              continue
            }
          }
          rB && Mc.finish(nc, mB)
        })(Vc), Pc.apply(Vc, cB.activeCamera);
        const rB = Bc.uqc;
        for (let cB = 0; cB < rB.length; cB++) {
          const Bc = rB[cB];
          Bc.isEnabled() && kB.e.prototype.push.call(Vc, Bc)
        }
        return Ic(Vc, nc), Vc
      }, {
        Mqc: () => Mc.culled,
        JPc: (cB, Bc) => {
          const Ic = Math.floor(Bc[0] / rB),
            sc = Math.floor(Bc[1] / rB),
            Mc = Math.floor(Bc[2] / rB),
            Pc = `${Ic}|${sc}|${Mc}`;
          let qB = uc.get(Pc);
          if (!qB) {
            const cB = [0, 0, 0];
            nc.JsB([Ic * rB - 1, sc * rB - 1, Mc * rB - 1], null, cB), qB = Object.assign(Vc(cB, rB + 2), {
              Pqc: Pc,
              qOc: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: yB()
            }), zB(qB), fc[qB._noaSlot] = (0, Xc.j)(Ic, sc, Mc), mB[3 * qB._noaSlot] = Ic, mB[3 * qB._noaSlot + 1] = sc, mB[3 * qB._noaSlot + 2] = Mc, uc.set(Pc, qB)
          }
          qB.qOc++, cB.metadata[Hc.r] = qB
        },
        xnc: cB => {
          const Bc = cB.metadata[Hc.r];
          Bc && (Bc.qOc--, Bc.qOc <= 0 && (uc.delete(Bc.Pqc), tB.push(Bc._noaSlot)), cB.metadata[Hc.r] = null)
        },
        rOc: (cB, Bc) => {
          const nc = cB,
            Vc = Bc.metadata[Hc.r];
          (nc._noaSlots ??= []).push(Vc._noaSlot), (nc._noaStamps ??= []).push(0), (nc._noaTerrain ??= []).push(0), nc.entries.push(Bc)
        },
        removeEntry: (cB, Bc) => {
          const nc = cB,
            Vc = nc.entries,
            Ic = Vc.indexOf(Bc);
          if (Ic < 0) return;
          const rB = nc._noaSlots,
            uc = nc._noaStamps,
            sc = nc._noaTerrain,
            Mc = Vc.length - 1;
          Vc[Ic] = Vc[Mc], rB[Ic] = rB[Mc], uc[Ic] = uc[Mc], sc[Ic] = sc[Mc], Vc.pop(), rB.pop(), uc.pop(), sc.pop()
        },
        zsc: cB => {
          for (const Bc of uc.values()) {
            Bc.dPc.Tqc(cB), Bc.xqc.Tqc(cB);
            for (const nc of Bc.sqc) nc.Tqc(cB);
            zB(Bc)
          }
        }
      }
    }

    function OB(cB, Bc) {
      return Bc.set(cB), Bc
    }

    function TB(cB, Bc, nc) {
      const Vc = cB[Bc],
        Ic = cB[Bc + 1],
        rB = cB[Bc + 2],
        uc = cB[Bc + 3],
        sc = cB[Bc + 4],
        Mc = cB[Bc + 5];
      for (let Pc = 0; Pc < 24; Pc += 4) {
        const cB = nc[Pc],
          Bc = nc[Pc + 1],
          qB = nc[Pc + 2];
        if (!(cB * (cB >= 0 ? uc : Vc) + Bc * (Bc >= 0 ? sc : Ic) + qB * (qB >= 0 ? Mc : rB) + nc[Pc + 3] >= 0)) return !1
      }
      return !0
    }
    var fB = nc(36333);
    class mn {
      constructor(cB, Bc) {
        var nc = cB.Ir;
        nc.bqc(new wc.c(nc));
        var Vc = new oc.b(Mc);
        nc.mOc = Vc, Vc.blocks = [];
        var Ic, rB = {},
          uc = [];
        this.textPlanes = uc, this.Mqc = () => Ic.Mqc(), this.zsc = cB => {
          qB(Vc, cB), Ic.zsc(cB)
        }, this.JPc = (Bc, nc, sc) => {
          if (!Bc.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Bc.metadata[Hc.p] && !Bc.metadata[Hc.h]) {
            if (!nc) {
              var Mc = Vc.uqc;
              if (Bc.metadata[Hc.v] && !Bc.parent) {
                Mc = uc;
                var qB = Bc.qVc().tOc;
                Bc.metadata[Hc.x] = qB.center.length() + qB.radius, Bc.iI = !0
              }
              return Mc.push(Bc), Bc.metadata[Hc.e] = Mc, void(Bc.metadata[Hc.h] = !0)
            }
            var Tc = Math.floor(sc[0] / Pc),
              fc = Math.floor(sc[1] / Pc),
              mB = Math.floor(sc[2] / Pc),
              ec = Tc + "|" + fc + "|" + mB,
              tB = rB[ec];
            if (!tB) {
              var Sc = [Tc * Pc, fc * Pc, mB * Pc],
                yB = [0, 0, 0];
              cB.TB.JsB(Sc, null, yB), tB = Oc(yB, Pc), Vc.blocks.push(tB), rB[ec] = tB, tB.Pqc = ec
            }
            Ic.JPc(Bc, sc), Ic.rOc(tB, Bc), tB.qOc = (tB.qOc || 0) + 1, Bc.metadata[Hc.p] = tB, Bc.metadata[Hc.k] = !0, Bc.iI = !0
          }
        }, this.xnc = cB => {
          if (cB.metadata) {
            cB.metadata[Hc.h] && ((0, Xc.p)(cB.metadata[Hc.e], cB), cB.metadata[Hc.h] = !1), cB.metadata[Hc.e] === uc && (cB.iI = !1), cB.metadata[Hc.e] = void 0, cB.metadata[Hc.x] = void 0;
            var Bc = cB.metadata[Hc.p];
            Bc && Bc.entries && (cB.metadata[Hc.k] && Ic.removeEntry(Bc, cB), Bc.qOc--, Bc.qOc <= 0 && (delete rB[Bc.Pqc], (0, Xc.p)(Vc.blocks, Bc))), Ic.xnc(cB), cB.metadata[Hc.p] = null, cB.metadata[Hc.k] = !1
          }
        }, this.iuc = function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (cB.metadata[Hc.p]) {
            if (cB.metadata[Hc.k] === Bc) return;
            var nc = cB.metadata[Hc.p];
            nc && nc.entries && (Bc ? Ic.rOc(nc, cB) : Ic.removeEntry(nc, cB)), cB.metadata[Hc.k] = Bc
          } else {
            if (cB.metadata[Hc.h] === Bc) return;
            var rB = cB.metadata[Hc.e] || Vc.uqc;
            Bc ? rB.push(cB) : (0, Xc.p)(rB, cB), cB.metadata[Hc.h] = Bc
          }
        };
        var Mc = () => {},
          Pc = Bc * cB.TB.rn.Guc,
          qB = (cB, Bc) => {
            cB.blocks.forEach((cB => {
              cB.dPc.Tqc(Bc), cB.xqc.Tqc(Bc), cB.sqc.forEach((cB => cB.Tqc(Bc))), cB.blocks && qB(cB, Bc)
            }))
          },
          Oc = (cB, Bc) => {
            var nc = new sc.KV(cB[0], cB[1], cB[2]),
              Vc = new sc.KV(cB[0] + Bc, cB[1] + Bc, cB[2] + Bc);
            return new Wc.d(nc, Vc, void 0, void 0, void 0, Mc)
          };
        Ic = qn(nc, Vc, cB.TB, Oc, ((cB, Bc) => {
          for (var nc = 0; nc < uc.length; nc++) {
            var Vc = uc[nc];
            Vc.isEnabled(!1) && ((0, fB.e)(Vc, Bc) && kB.e.prototype.push.call(cB, Vc))
          }
        }))
      }
    }

    function eB(cB) {
      const {
        holderPosition: Bc,
        holderRotation: nc,
        lIc: Vc,
        fov: Ic,
        near: rB,
        far: uc
      } = cB.model.hIc, sc = cB.lqc;
      sc.position.puc(Bc[0], Bc[1], Bc[2]), sc.rotation.puc(nc[0], nc[1], nc[2]);
      const Mc = cB.camera;
      Mc.position.puc(Vc[0], Vc[1], Vc[2]), Mc.fov = Ic, Mc.minZ = rB, Mc.maxZ = uc
    }

    function tn(cB) {
      const Bc = cB.RV(),
        nc = Bc,
        Vc = nc._gl;
      if (!Vc || nc.Tv < 2 || Bc.HPc || Vc.getParameter(Vc.DEPTH_BITS) < 24) return !1;
      const Ic = cB._renderingManager,
        rB = Ic.getRenderingGroup(-1),
        uc = Ic.getRenderingGroup(0),
        sc = Cc.c.prototype.render;
      return rB.render = function(cB, Bc, nc, Vc, Ic, rB, Mc, Pc, qB) {
        (cB || uc._empty) && sc.call(this, cB, Bc, nc, Vc, Ic, rB, Mc, Pc, qB)
      }, uc.render = function(cB, nc, Ic, uc) {
        let Mc = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Pc = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          qB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Tc = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fc = arguments.length > 8 ? arguments[8] : void 0;
        cB ? sc.call(this, cB, nc, Ic, uc, Mc, Pc, qB, Tc, fc) : (Bc.setAlphaMode(Oc.e.ALPHA_DISABLE), sc.call(this, null, !1, !1, uc, Mc, Pc, qB, !1), rB._empty || (Vc.depthRange(1, 1), sc.call(rB, null, nc, Ic, uc, Mc, Pc, qB, Tc, fc), Vc.depthRange(0, 1)), sc.call(this, null, nc, Ic, uc, !1, !1, !1, Tc, fc))
      }, !0
    }

    function SB(cB, Bc) {
      return [Bc, Ec.f].map(((Bc, nc) => {
        const Vc = new Ic.d("light", sc.KV.FromArray(Bc), cB);
        return Vc.diffuse = uc.Color3.FromArray([1, 1, 1]), Vc.specular = uc.Color3.FromArray([1, 1, 1]), Vc.intensity = Ec.e[nc], Vc
      }))
    }
    class yn extends Pc.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(cB) {
        var Bc;
        this.heldTexture = cB, this.particleTexture = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.mirror) && void 0 !== Bc ? Bc : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let cB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        cB && (this.particleTexture = null, (0, qB.G)(this.heldTexture), this.heldTexture = null), super.dispose(cB, Bc, nc)
      }
    }
    const zn = Vc.e.Zero();
    const pB = {
      bOc: function(cB, Bc) {
        return new rB.e(cB, Bc.BPc, {
          preserveDrawingBuffer: Bc.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      gOc: function(cB, Bc) {
        ! function(cB, Bc, nc) {
          const Vc = new Dc.e(cB.engine);
          cB.Ir = Vc, Vc.detachControl(), Vc.autoClear = !1, vB.c.MIN_RENDERINGGROUPS = -1;
          for (let rB = vB.c.MIN_RENDERINGGROUPS; rB <= 1; rB++) Vc.setRenderingOrder(rB, Cc.c.PainterSortCompare, Cc.c.PainterSortCompare, Cc.c.PainterSortCompare);
          Vc.setRenderingAutoClearDepthStencil(0, !1), Qc.e.Enabled = !1, cB.pqc = new mn(cB, Math.round(Bc.hqc)), cB.lqc = new Zc.d("camHolder", Vc), cB.camera = new bB.c("camera", new sc.KV(0, 0, 0), Vc), cB.camera.parent = cB.lqc, eB(cB), (0, Ec.j)(cB, ((cB, Bc, nc) => (0, Nc.g)(Bc, nc, cB.Ir))), Vc.clearColor = uc.c.FromArray(Bc.clearColor), Vc.ambientColor = uc.Color3.FromArray(Bc.ambientColor);
          const Ic = nc(Vc, Bc.Lqc);
          Vc.onNewLightAddedObservable.add((cB => {
            Ic.some((Bc => Bc === cB)) || console.error(`Light "${cB.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Vc.skipPointerMovePicking = !0
        }(cB, Bc, SB), tn(cB.Ir)
      },
      aOc: eB,
      setBabylonFog: function(cB, Bc, nc, Vc) {
        const Ic = cB.Ir;
        Ic.fogMode = 3, Ic.fogStart = Bc, Ic.fogEnd = nc, Ic.fogColor.set(Vc[0], Vc[1], Vc[2])
      },
      Zqc: function(cB, Bc, nc) {
        return cB.engine.Tv >= 2 && (cB.Qqc || (cB.Qqc = new Uc(cB.Ir)), !cB.Qqc.failed) ? cB.Qqc.Vnc(Bc, nc) : new yn(Bc, nc, cB.Ir)
      },
      vOc: function(cB, Bc) {
        cB.Ir.qD.forEach((nc => {
          if (nc instanceof gB) return void nc.zsc(Bc, cB.TB.ZB);
          const Vc = nc;
          if (Vc.emitter.getConnectedParticleSystems)
            for (const cB of Vc._particles) cB.position.set(cB.position.x - Bc[0], cB.position.y - Bc[1], cB.position.z - Bc[2]);
          else {
            if (!Vc.worldOffset) throw new Error("Particle system has no world offset");
            Vc.worldOffset.x = -cB.TB.ZB[0], Vc.worldOffset.y = -cB.TB.ZB[1], Vc.worldOffset.z = -cB.TB.ZB[2]
          }
        }))
      },
      linesFromArrays: function(cB, Bc, nc) {
        const Vc = new Mc.c(Bc, cB.Ir, null, void 0, void 0, !1);
        return (0, Nc.f)(Bc, nc, cB.Ir, Vc), Vc
      },
      ru: rn,
      Cqc: function(cB, Bc) {
        return zn.origin.qqc(Bc.origin), zn.direction.qqc(Bc.direction), zn.length = Bc.length, zn.epsilon = Bc.epsilon, zn.Cqc(cB, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  39559: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => tB,
      e: () => sc,
      h: () => uc,
      i: () => Pc
    });
    var Vc = nc(35808),
      Ic = nc(37224),
      rB = nc(37221);

    function uc(cB, Bc, nc, Vc) {
      const Ic = rB.y;
      Bc.fill(0), cB.gravity.toArray(Bc, Ic.gravity), cB.colorDead.toArray(Bc, Ic.colorDead), nc[Ic.ramp] = cB.useRampGradients ? 1 : 0;
      const uc = cB.getColorGradients(),
        sc = Tc(cB, uc, "colour", Vc);
      nc[Ic.colorCount] = sc;
      for (let rB = 0; rB < sc; rB++) {
        var Mc;
        const cB = uc[fc(uc, rB)];
        Bc[Ic.colorPositions + rB] = cB.gradient, cB.color1.toArray(Bc, Ic.color1 + 4 * rB), (null !== (Mc = cB.color2) && void 0 !== Mc ? Mc : cB.color1).toArray(Bc, Ic.color2 + 4 * rB)
      }
      const Pc = cB.getVelocityGradients(),
        qB = Tc(cB, Pc, "Qu", Vc);
      nc[Ic.velocityCount] = qB;
      for (let rB = 0; rB < qB; rB++) yB(Bc, Ic.Qu + 4 * rB, Pc[fc(Pc, rB)]);
      const Oc = cB.useRampGradients ? cB.getColorRemapGradients() : null,
        mB = Tc(cB, Oc, "colour remap", Vc);
      nc[Ic.remapCount] = mB;
      for (let rB = 0; rB < mB; rB++) yB(Bc, Ic.remap + 4 * rB, Oc[fc(Oc, rB)])
    }

    function sc() {
      return {
        key: [],
        texels: new Uint8Array(4 * rB.n)
      }
    }
    const Mc = [];

    function Pc(cB, Bc) {
      return qB(cB, Mc), !Sc(Mc, Bc.key) && (Bc.key.length = 0, Bc.key.push(...Mc), Bc.key.length > 0 && function(cB, Bc) {
        for (let nc = 0; nc < rB.n; nc++) Ic.l.GetCurrentGradient(nc / rB.n, cB, ((cB, Bc, nc) => {
          Vc.Color3.LerpToRef(cB.color, Bc.color, nc, Oc)
        })), Bc[4 * nc] = 255 * Oc.r, Bc[4 * nc + 1] = 255 * Oc.g, Bc[4 * nc + 2] = 255 * Oc.b, Bc[4 * nc + 3] = 255
      }(cB.getRampGradients(), Bc.texels), !0)
    }

    function qB(cB, Bc) {
      Bc.length = 0;
      const nc = cB.useRampGradients ? cB.getRampGradients() : null;
      if (null !== nc && void 0 !== nc && nc.length) {
        Bc.push(nc.length);
        for (const cB of nc) Bc.push(cB.gradient, cB.color.r, cB.color.g, cB.color.b)
      }
    }
    const Oc = new Vc.Color3;

    function Tc(cB, Bc, nc, Vc) {
      return Bc ? Bc.length > rB.e ? (Vc(`particleStops:${nc}`, `GPU particles use the first 2 and last ${rB.e-2} of more than ${rB.e} ${nc} gradient stops (${cB.name})`), rB.e) : Bc.length : 0
    }

    function fc(cB, Bc) {
      return Bc < 2 || cB.length <= rB.e ? Bc : cB.length - rB.e + Bc
    }
    const mB = new Float32Array(rB.q),
      ec = new Uint32Array(mB.buffer);

    function tB(cB, Bc, nc) {
      return uc(cB, mB, ec, nc), Bc && Sc(ec, Bc) ? null : ec.slice()
    }

    function Sc(cB, Bc) {
      if (cB.length !== Bc.length) return !1;
      for (let nc = 0; nc < cB.length; nc++)
        if (cB[nc] !== Bc[nc]) return !1;
      return !0
    }

    function yB(cB, Bc, nc) {
      var Vc;
      cB[Bc] = nc.gradient, cB[Bc + 1] = nc.factor1, cB[Bc + 2] = null !== (Vc = nc.factor2) && void 0 !== Vc ? Vc : nc.factor1
    }
  },
  39557: (cB, Bc, nc) => {
    function Vc() {
      let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Bc = new Set;
      return (nc, Vc) => {
        Bc.has(nc) || (Bc.add(nc), console.warn(cB + Vc))
      }
    }
    nc.d(Bc, {
      e: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);