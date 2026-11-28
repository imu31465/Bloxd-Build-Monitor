export const id = 0;
export const ids = [0];
export const modules = {
  43085: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CapeMaterialPlugin: () => Yd,
      HueTintMaterialPlugin: () => gd,
      LifeformMaterialPlugin: () => wd,
      OverlayMaterialPlugin: () => Ed
    });
    var Wd = md(43088),
      Fd = md(39567);
    class Rd extends((0, Wd.h)(Fd.c)) {}(0, Wd.l)(Fd.c, Rd);
    var Xd = md(38852);
    class Kd extends((0, Wd.h)(Xd.e)) {}(0, Wd.l)(Xd.e, Kd);
    var hd = md(39395);
    class vd extends((0, Wd.h)(hd.d)) {}(0, Wd.l)(hd.d, vd);
    var Qd = md(38877),
      td = md(42179),
      od = md(38869);
    class Nd extends((0, Wd.h)(od.h)) {
      constructor(dd, Od, md) {
        super(dd, Od, md), (0, Qd.i)(dd)
      }
      dispose(dd) {
        (0, Qd.j)(this._material), super.dispose(dd)
      }
    }(0, Wd.l)(od.h, Nd), (0, od.j)({
      disableUnusedSpecularTerm: Wd.e,
      isLightingDisabled: dd => dd instanceof td.StandardMaterial && dd.disableLighting
    });
    var qd = md(40272);
    class Hd extends((0, Wd.h)(qd.f)) {}(0, Wd.l)(qd.f, Hd);
    var yd = md(40373),
      bd = md(38746),
      Td = md(39676),
      pd = md(38860);
    class Yd extends((0, Wd.h)(yd.d)) {}(0, Wd.l)(yd.d, Yd);
    class gd extends((0, Wd.h)(bd.b)) {}(0, Wd.l)(bd.b, gd);
    class wd extends((0, Wd.h)(Td.l)) {}(0, Wd.l)(Td.l, wd);
    class Ed extends((0, Wd.h)(pd.b)) {}(0, Wd.l)(pd.b, Ed)
  },
  53976: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      addBabylonLights: () => SO,
      createSceneParticleSystem: () => iO,
      default: () => rO
    });
    var Wd = md(53984),
      Fd = (md(41901), md(43076), md(42420), md(53993)),
      Rd = md(38736),
      Xd = md(38627),
      Kd = md(54003),
      hd = md(54009),
      vd = md(38794),
      Qd = (md(43088), md(54019)),
      td = md(54016),
      od = md(40307),
      Nd = md(54022),
      qd = md(41785),
      Hd = md(40293);
    const yd = "gpuParticles",
      bd = "gpuParticlesSummed",
      Td = Hd.s,
      pd = dd => dd / 4,
      Yd = (dd, Od, md, Wd) => Array.from({
        length: Od
      }, ((Fd, Rd) => `(${((dd,Od,md)=>0===Od?`${dd} < 1`:Od===md-1?`${dd} >= ${Od}`:`${dd} == ${Od}`)(dd,Rd,Od)} ? ${md(Rd)} : ${Wd})`)).join("\n\t\t+ "),
      gd = (dd, Od, md) => `vec4 ${dd}(int i) {\n\treturn ${Yd("i",md,(dd=>`gpuParticleSystem[${Od+dd}]`),"vec4(0.0)")};\n}\n`,
      wd = `\n${gd("colorPositionsAt",pd(Td.colorPositions),Hd.b/4)}\n${gd("color1At",pd(Td.color1),Hd.b)}\n${gd("color2At",pd(Td.color2),Hd.b)}\n${gd("velocityAt",pd(Td.Gy),Hd.b)}\n${gd("remapStopAt",pd(Td.remap),Hd.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${Yd("j",4,(dd=>`v[${dd}]`),"0.0")};\n}\n`,
      Ed = (dd, Od, md, Wd) => dd ? `${md}(${Wd})` : `gpuParticleSystem[${Od} + ${Wd}]`,
      Jd = dd => `gpuParticleSystem[${dd>>2}].${"xyzw"[3&dd]}`,
      Ud = dd => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Hd.b}\n#define COLOR_POSITIONS ${pd(Td.colorPositions)}\n#define COLOR1 ${pd(Td.color1)}\n#define COLOR2 ${pd(Td.color2)}\n#define VELOCITY ${pd(Td.Gy)}\n#define REMAP ${pd(Td.remap)}\n#define RECORDS_PER_ROW ${Hd.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Hd.m/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Jd(Td.gravity)}, ${Jd(Td.gravity+1)}, ${Jd(Td.gravity+2)}); }\nint colorCount() { return int(${Jd(Td.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${pd(Td.colorDead)}]; }\nint velocityCount() { return int(${Jd(Td.velocityCount)}); }\nint remapCount() { return int(${Jd(Td.remapCount)}); }\n${dd?wd:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${dd?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${Ed(dd,"COLOR1","color1At","i")}, ${Ed(dd,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${Ed(dd,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${Ed(dd,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${Ed(dd,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${Ed(dd,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${Ed(dd,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${Ed(dd,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${Ed(dd,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      xd = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    qd.e.ShadersStore[`${yd}VertexShader`] = Ud(!1), qd.e.ShadersStore[`${yd}PixelShader`] = xd, qd.e.ShadersStore[`${bd}VertexShader`] = Ud(!0), qd.e.ShadersStore[`${bd}PixelShader`] = xd;
    const Bd = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Sd = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var sd = md(40289),
      ud = md(54026);
    class Vd extends sd.b {
      constructor(dd, Od, md, Wd) {
        super(dd, Od, md), this.renderer = md, this.MH = Wd, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Hd.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, ud.h)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (dd, Od) => {
          const {
            engine: md
          } = this, Wd = md._gl;
          md._bindTextureDirectly(Wd.TEXTURE_2D, this.records, !0), md._unpackFlipY(!1);
          const Fd = this.ring.recordBits;
          for (let Rd = dd; Rd < Od;) {
            const dd = Math.floor(Rd / Hd.l),
              md = Math.min(Od, (dd + 1) * Hd.l);
            Wd.texSubImage2D(Wd.TEXTURE_2D, 0, Rd % Hd.l * 4, dd, 4 * (md - Rd), 1, Wd.RGBA_INTEGER, Wd.UNSIGNED_INT, Fd, Rd * Hd.e), Rd = md
          }
          md._bindTextureDirectly(Wd.TEXTURE_2D, null)
        }, this.id = dd;
        const Fd = Wd.Iq();
        this.engine = Fd;
        const Rd = Math.max(1, Od),
          Xd = Math.min(Rd, Hd.l);
        this.records = Fd.createRawTexture(null, 4 * Xd, Math.ceil(Rd / Xd), Qd.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Qd.b.TEXTURE_NEAREST_SAMPLINGMODE, null, Qd.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.MH.getAnimationRatio() || 1;
        const Od = this.MH.getFrameId();
        if (Od === this.animatedFrame) return !1;
        const md = super.animate(dd);
        return md && (this.animatedFrame = Od, this.ring.takeUploads(this.uploadSlots)), md
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(dd) {
        (0, ud.l)(this, this.uniforms, this.uniformBits, dd);
        for (const md of Hd.q) this.uniforms[md] = this.uniformBits[md];
        var Od;
        (0, ud.p)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (Od = this.ramp) || void 0 === Od || Od.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = td.e.CreateRGBATexture(this.rampTexels.texels, Hd.k, 1, this.MH, !1, !1, Qd.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var dd;
        this.records.dispose(), null === (dd = this.ramp) || void 0 === dd || dd.dispose(), this.ramp = null
      }
    }
    const Ad = "the context was lost before the programs linked";
    class rd {
      constructor(dd, Od) {
        this.MH = dd, this.reportFailure = Od, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = yd, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Nd.b)(), this.engine = dd.Iq(), this.whiteRamp = td.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, dd, !1, !1, Qd.b.TEXTURE_NEAREST_SAMPLINGMODE);
        const md = this.linkPair(yd),
          Wd = null !== md && md !== Ad ? this.linkPair(bd) : md;
        null === Wd && null !== md ? (console.warn(`GPU particles link their fallback here: ${md}`), this.reportFailure(md, !0)) : null !== Wd && this.fail(Wd === Ad ? Ad : null !== md && void 0 !== md ? md : Wd)
      }
      wG(dd, Od) {
        const md = Hd.l * this.engine.getCaps().maxTextureSize;
        Od > md && this.warnOnce(`capacity:${dd}`, `particle system ${dd} holds ${md} particles, not ${Od}: its records texture's limit`);
        const Wd = new Vd(dd, Math.min(Od, md), this, this.MH);
        return this.MH.addParticleSystem(Wd), Wd
      }
      canDraw(dd) {
        var Od, md;
        if (this.failed || null === (Od = dd.texture) || void 0 === Od || null === (md = Od.mirror) || void 0 === md || !md.isReady()) return !1;
        for (const Wd of (0, od.i)(dd.blendMode))
          if (!this.effectFor(Wd).isReady()) return !1;
        return !0
      }
      disposeStopped(dd) {
        this.MH._toBeDisposed.push(dd)
      }
      remove(dd) {
        this.MH.removeParticleSystem(dd), dd.releaseGl()
      }
      render(dd) {
        var Od;
        if (!dd.isReady() || !dd.hasLiveParticles()) return 0;
        const {
          engine: md,
          MH: Wd,
          frame: Fd
        } = this;
        dd.prepareDraw(this.warnOnce), dd.drawOffset(Fd, 0), Fd[3] = dd.drawTime();
        const Rd = dd.ring.drawStart(),
          Xd = dd.ring.drawCount(),
          Kd = null !== (Od = dd.ramp) && void 0 !== Od ? Od : this.whiteRamp;
        md.setState(!1);
        for (const hd of (0, od.i)(dd.blendMode)) {
          const Od = this.effectFor(hd);
          md.enableEffect(Od), Od.setTexture("gpuParticleTexture", dd.texture.mirror), Od.setTexture("gpuParticleRampTexture", Kd), Od._bindTexture("gpuParticleRecords", dd.records), Od.setMatrix("gpuParticleView", Wd.getViewMatrix()), Od.setMatrix("gpuParticleProjection", Wd.getProjectionMatrix()), Od.setFloatArray4("gpuParticleSystem", dd.uniforms), Od.setFloat4("gpuParticleFrame", Fd[0], Fd[1], Fd[2], Fd[3]), Od.setFloat2("gpuParticleRange", Rd, Xd), Od.setFloat("gpuParticleRamp", dd.uniforms[Hd.s.ramp]), md.bindBuffers(this.vertexBuffers, null, Od), md.setAlphaMode((0, od.e)(hd)), md.drawArraysType(Qd.b.MATERIAL_TriangleStripDrawMode, 0, 4, Xd), Od._bindTexture("gpuParticleRecords", null)
        }
        return md.setAlphaMode(Qd.b.ALPHA_DISABLE), Xd
      }
      linkPair(dd) {
        this.shader = dd, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(dd, ""), this.multiplyEffect = this.createEffect(dd, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(dd) {
        const Od = dd.getPipelineContext(),
          md = this.gl();
        md && null === this.pairFailure && (!Od || Od.isParallelCompiled && !Od.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : Od.isParallelCompiled && Od.program && (md.getProgramParameter(Od.program, md.LINK_STATUS) || this.programFailed(function(dd, Od, md) {
          if (dd.isContextLost()) return Ad;
          for (const [Wd, Fd] of [
              ["VERTEX SHADER", Od.vertexShader],
              ["FRAGMENT SHADER", Od.fragmentShader]
            ]) {
            const Od = Fd && !dd.getShaderParameter(Fd, dd.COMPILE_STATUS) ? dd.getShaderInfoLog(Fd) : null;
            if (Od) return `${Wd} ${Od}`
          }
          return dd.getProgramInfoLog(md) || "a program did not link"
        }(md, Od, Od.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(dd) {
        return dd === od.b ? this.multiplyEffect : this.effect
      }
      createEffect(dd, Od) {
        return this.engine.createEffect(dd, [], Bd, Sd, Od, void 0, void 0, ((Od, md) => {
          var Wd;
          dd === this.shader && this.programFailed(null !== (Wd = this.gl()) && void 0 !== Wd && Wd.isContextLost() ? Ad : function(dd) {
            const Od = dd.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(Od) ? "a program failed, its log not in this browser's stack" : Od.replace(/^Error: /, "")
          }(md))
        }))
      }
      programFailed(dd) {
        this.linkingPair ? this.pairFailure ??= dd : this.fail(dd)
      }
      fail(dd) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${dd}`), this.reportFailure(dd, !1);
          for (const dd of this.MH.kE.slice()) dd instanceof Vd && dd.disposeOnStop && dd.dispose()
        }
      }
    }
    var Gd = md(41756);
    class nd extends Gd.d {
      createEffect() {
        const dd = super.createEffect(...arguments);
        return Pd(dd), Ld.has(dd) || (Ld.add(dd), dd.onCompileObservable.add((() => {
          Pd(dd)
        }))), dd
      }
    }
    const Ld = new WeakSet;

    function Pd(dd) {
      dd._vertexSourceCodeBeforeMigration = "", dd._fragmentSourceCodeBeforeMigration = ""
    }
    var zd = md(42121),
      cd = md(43061),
      jd = md(41878),
      Dd = md(42091),
      ed = md(42089),
      Id = md(42016),
      ld = md(43134),
      Cd = md(39065),
      Zd = md(54032),
      kd = md(54035),
      fd = md(54037),
      Md = md(42041),
      dO = md(3942),
      OO = md(38933),
      mO = md(42228),
      WO = md(39013),
      FO = md(38956);

    function RO(dd) {
      if (dd.visibility < 1 || !dd.isVisible || !dd.isEnabled() || dd.metadata[FO.d] || !dd.isReady()) return !0;
      const Od = dd.ZE;
      if (!Od || 0 === Od.length) return !0;
      for (let md = 0; md < Od.length; md++) {
        const Wd = Od[md],
          Fd = Wd.fq();
        if (!Fd || !Fd.isReadyForSubMesh(dd, Wd, !1)) return !0
      }
      return !1
    }
    class XO {
      constructor(dd, Od) {
        this.zo = dd, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, Od.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      ot(dd) {
        var Od;
        const md = this.armed;
        if (this.armed = !1, this.vis = null, !md) return !1;
        this.culled = 0;
        const {
          zo: Wd
        } = this, Fd = null === (Od = Wd.aE) || void 0 === Od ? void 0 : Od.visibility;
        if (!Fd || !dd || Wd.gt.NH) return !1;
        if (!(Wd.Bt.vRd[0] >= WO.d)) return !1;
        const Rd = dd.getProjectionMatrix().m;
        if (0 !== Rd[15]) return !1;
        const Xd = Wd.XN,
          Kd = dd.globalPosition,
          hd = this.eye;
        return hd[0] = Kd.x + Xd[0], hd[1] = Kd.y + Xd[1], hd[2] = Kd.z + Xd[2], !!Fd.eyeClear(hd[0], hd[1], hd[2], dd.minZ, Rd, Wd.Bt) && (this.vis = Fd, this.passable.clear(), this.count = 0, !0)
      }
      see(dd, Od) {
        const md = this.count++;
        if (md === this.cellSlots.length) {
          const dd = new Int32Array(2 * md);
          dd.set(this.cellSlots), this.cellSlots = dd
        }
        this.cellSlots[md] = Od, this.meshes[md] = dd
      }
      seeThrough(dd) {
        this.passable.add(dd)
      }
      finish(dd, Od) {
        const {
          vis: md,
          eye: Wd,
          meshes: Fd,
          count: Rd,
          cellSlots: Xd
        } = this, {
          Bt: Kd
        } = this.zo, [hd, vd] = Kd.vRd, Qd = null !== md && md.update(Wd[0], Wd[1], Wd[2], Kd.tt, hd, vd, this.passable);
        let td = 0;
        for (let od = 0; od < Rd; od++) {
          const Wd = Fd[od];
          if (Qd) {
            const dd = 3 * Xd[od];
            if (dd >= 0 && !md.isDrawn(Od[dd], Od[dd + 1], Od[dd + 2])) {
              td++;
              continue
            }
          }
          Md.e.prototype.push.call(dd, Wd)
        }
        Fd.fill(null, 0, Rd), this.count = 0, this.vis = null, this.culled = td
      }
    }
    var KO = md(38993),
      hO = md(38942),
      vO = md(42208),
      QO = md(54040),
      tO = md(42217),
      oO = md(42132);
    let NO = 1;
    const qO = new WeakSet;

    function HO() {
      return NO
    }

    function yO() {
      NO = NO >= 1073741823 ? 1 : NO + 1
    }

    function bO(dd) {
      const Od = dd.metadata;
      if (!Od || !0 !== Od[OO.p]) return;
      const md = Od[OO.u],
        Wd = null === md || void 0 === md ? void 0 : md._noaStamps;
      if (!md || !Wd) return;
      const Fd = md.entries.indexOf(dd);
      Fd >= 0 && (Wd[Fd] = 0)
    }

    function TO(dd) {
      const Od = dd.ZE;
      for (let md = 0; md < Od.length; md++) {
        const dd = Od[md].fq();
        if (dd && !dd.isFrozen) return !1
      }
      for (let md = 0; md < Od.length; md++) {
        const dd = Od[md].fq();
        dd && qO.add(dd)
      }
      return !0
    }
    let pO = !1;
    const YO = new WeakSet;

    function gO(dd, Od) {
      const md = dd[Od];
      if ("function" !== typeof md) throw new Error(`terrainDrawState: Babylon has no ${Od} to hook`);
      return md
    }

    function wO(dd, Od, md, Wd, Fd) {
      const Rd = md.Bt.tt,
        Xd = new Map;
      let Kd = 0;
      const hd = new XO(md, dd),
        vd = new KO.e(Rd, dd.Iq());
      ! function(dd) {
        if (YO.has(dd) || (YO.add(dd), dd.onContextLostObservable.add(yO), dd.eq.add(yO)), pO) return;
        pO = !0;
        const Od = QO.d.prototype,
          md = gO(Od, "_markSubMeshesAsDirty");
        Object.assign(Od, {
          _markSubMeshesAsDirty(dd) {
            md.call(this, dd), bO(this)
          }
        });
        const Wd = gO(oO.b.prototype, "_syncParentEnabledState");
        Object.assign(oO.b.prototype, {
          _syncParentEnabledState() {
            Wd.call(this), bO(this)
          }
        });
        const Fd = gO(tO.d.prototype, "resetDrawCache");
        tO.d.prototype.resetDrawCache = function(dd, Od) {
          Fd.call(this, dd, Od), bO(this.getMesh())
        };
        const Rd = vO.b.prototype,
          Xd = gO(Rd, "markDirty");
        Rd.markDirty = function(dd) {
          Xd.call(this, dd), qO.has(this) && yO()
        };
        const Kd = gO(Rd, "_markAllSubMeshesAsDirty");
        Object.assign(Rd, {
          _markAllSubMeshesAsDirty(dd) {
            Kd.call(this, dd), qO.has(this) && yO()
          }
        })
      }(dd.Iq());
      let Qd = new Float64Array(384),
        td = new Int32Array(64),
        od = new Uint8Array(64),
        Nd = new Float64Array(64),
        qd = new Int32Array(192),
        Hd = 0;
      const yd = [],
        bd = new Float64Array(24),
        Td = () => {
          const dd = yd.pop();
          return void 0 !== dd ? (td[dd] = 0, dd) : (Hd === td.length && (Qd = aO(Qd, new Float64Array(2 * Qd.length)), td = aO(td, new Int32Array(2 * td.length)), od = aO(od, new Uint8Array(2 * od.length)), Nd = aO(Nd, new Float64Array(2 * Nd.length)), qd = aO(qd, new Int32Array(2 * qd.length))), Hd++)
        },
        pd = dd => {
          const Od = 6 * dd._noaSlot,
            md = dd.yRd[0],
            Wd = dd.yRd[1];
          Qd[Od] = md.x, Qd[Od + 1] = md.y, Qd[Od + 2] = md.z, Qd[Od + 3] = Wd.x, Qd[Od + 4] = Wd.y, Qd[Od + 5] = Wd.z
        },
        Yd = (dd, Od, md) => {
          if (!md) return hd.see(dd, -1), !1;
          const Wd = RO(dd);
          return Wd && hd.seeThrough(Nd[Od]), hd.see(dd, Od), !Wd
        };
      let gd = -1;
      return dd.getActiveMeshCandidates = () => {
        const md = dd.frustumPlanes,
          Wd = Od._selectionContent;
        Wd.reset(), (md => {
          const Wd = dd.frustumPlanes;
          Kd = Kd + 1 | 0 || 1;
          const Fd = Od.blocks,
            Rd = hd.ot(dd.activeCamera),
            Xd = Rd && !0;
          if (Xd) {
            const Od = dd.Iq().currentRenderPassId;
            Od !== gd && (gd = Od, yO())
          }
          const vd = HO(),
            Nd = Xd && !1;
          Fd.length > 0 && function(dd, Od) {
            for (let md = 0; md < 6; md++) {
              const Wd = dd[md],
                Fd = Wd.normal;
              Od[4 * md] = Fd.x, Od[4 * md + 1] = Fd.y, Od[4 * md + 2] = Fd.z, Od[4 * md + 3] = Wd.d
            }
          }(Wd, bd);
          const Hd = Qd,
            yd = td,
            Td = od;
          for (let dd = 0; dd < Fd.length; dd++) {
            const Od = Fd[dd];
            if (!mO.d.IsInFrustum(Od.yRd, Wd)) continue;
            const Qd = Od.entries;
            {
              const dd = Od._noaSlots,
                Wd = Od._noaStamps,
                Fd = Od._noaTerrain;
              for (let Od = 0; Od < Qd.length; Od++) {
                const td = dd[Od];
                if (yd[td] !== Kd && (yd[td] = Kd, Td[td] = EO(Hd, 6 * td, bd) ? 1 : 0), 0 === Td[td]) continue;
                const od = Qd[Od];
                if (Xd && Wd[Od] === vd) Nd && 1 === Fd[Od] && RO(od) && 0, hd.see(od, 1 === Fd[Od] ? td : -1);
                else if (Xd) {
                  Wd[Od] = vd;
                  const dd = !0 === od.metadata[hO.n];
                  Fd[Od] = dd ? 1 : 0;
                  const md = Yd(od, td, dd);
                  !dd || md && TO(od) || (Wd[Od] = 0)
                } else Rd ? Yd(od, td, !0 === od.metadata[hO.n]) : Md.e.prototype.push.call(md, od)
              }
              continue
            }
          }
          Rd && hd.finish(md, qd)
        })(Wd), vd.apply(Wd, dd.activeCamera);
        const Rd = Od.HRd;
        for (let dd = 0; dd < Rd.length; dd++) {
          const Od = Rd[dd];
          Od.isEnabled() && Md.e.prototype.push.call(Wd, Od)
        }
        return Fd(Wd, md), Wd
      }, {
        bRd: () => hd.culled,
        hRd: (dd, Od) => {
          const Fd = Math.floor(Od[0] / Rd),
            Kd = Math.floor(Od[1] / Rd),
            hd = Math.floor(Od[2] / Rd),
            vd = `${Fd}|${Kd}|${hd}`;
          let Qd = Xd.get(vd);
          if (!Qd) {
            const dd = [0, 0, 0];
            md.Smd([Fd * Rd - 1, Kd * Rd - 1, hd * Rd - 1], null, dd), Qd = Object.assign(Wd(dd, Rd + 2), {
              TRd: vd,
              pRd: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Td()
            }), pd(Qd), Nd[Qd._noaSlot] = (0, dO.g)(Fd, Kd, hd), qd[3 * Qd._noaSlot] = Fd, qd[3 * Qd._noaSlot + 1] = Kd, qd[3 * Qd._noaSlot + 2] = hd, Xd.set(vd, Qd)
          }
          Qd.pRd++, dd.metadata[OO.y] = Qd
        },
        WG: dd => {
          const Od = dd.metadata[OO.y];
          Od && (Od.pRd--, Od.pRd <= 0 && (Xd.delete(Od.TRd), yd.push(Od._noaSlot)), dd.metadata[OO.y] = null)
        },
        qRd: (dd, Od) => {
          const md = dd,
            Wd = Od.metadata[OO.y];
          (md._noaSlots ??= []).push(Wd._noaSlot), (md._noaStamps ??= []).push(0), (md._noaTerrain ??= []).push(0), md.entries.push(Od)
        },
        removeEntry: (dd, Od) => {
          const md = dd,
            Wd = md.entries,
            Fd = Wd.indexOf(Od);
          if (Fd < 0) return;
          const Rd = md._noaSlots,
            Xd = md._noaStamps,
            Kd = md._noaTerrain,
            hd = Wd.length - 1;
          Wd[Fd] = Wd[hd], Rd[Fd] = Rd[hd], Xd[Fd] = Xd[hd], Kd[Fd] = Kd[hd], Wd.pop(), Rd.pop(), Xd.pop(), Kd.pop()
        },
        XOd: dd => {
          for (const Od of Xd.values()) {
            Od.KRd.YRd(dd), Od.XRd.YRd(dd);
            for (const md of Od.yRd) md.YRd(dd);
            pd(Od)
          }
        }
      }
    }

    function aO(dd, Od) {
      return Od.set(dd), Od
    }

    function EO(dd, Od, md) {
      const Wd = dd[Od],
        Fd = dd[Od + 1],
        Rd = dd[Od + 2],
        Xd = dd[Od + 3],
        Kd = dd[Od + 4],
        hd = dd[Od + 5];
      for (let vd = 0; vd < 24; vd += 4) {
        const dd = md[vd],
          Od = md[vd + 1],
          Qd = md[vd + 2];
        if (!(dd * (dd >= 0 ? Xd : Wd) + Od * (Od >= 0 ? Kd : Fd) + Qd * (Qd >= 0 ? hd : Rd) + md[vd + 3] >= 0)) return !1
      }
      return !0
    }
    var JO = md(39314);
    class UO {
      constructor(dd, Od) {
        var md = dd.MH;
        md.yFd(new fd.d(md));
        var Wd = new Zd.e(hd);
        md.wRd = Wd, Wd.blocks = [];
        var Fd, Rd = {},
          Kd = [];
        this.textPlanes = Kd, this.bRd = () => Fd.bRd(), this.XOd = dd => {
          Qd(Wd, dd), Fd.XOd(dd)
        }, this.hRd = (Od, md, Xd) => {
          if (!Od.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!Od.metadata[OO.u] && !Od.metadata[OO.m]) {
            if (!md) {
              var hd = Wd.HRd;
              if (Od.metadata[OO.E] && !Od.parent) {
                hd = Kd;
                var Qd = Od.iG().ERd;
                Od.metadata[OO.H] = Qd.center.length() + Qd.radius, Od.lq = !0
              }
              return hd.push(Od), Od.metadata[OO.g] = hd, void(Od.metadata[OO.m] = !0)
            }
            var od = Math.floor(Xd[0] / vd),
              Nd = Math.floor(Xd[1] / vd),
              qd = Math.floor(Xd[2] / vd),
              Hd = od + "|" + Nd + "|" + qd,
              yd = Rd[Hd];
            if (!yd) {
              var bd = [od * vd, Nd * vd, qd * vd],
                Td = [0, 0, 0];
              dd.zo.Smd(bd, null, Td), yd = td(Td, vd), Wd.blocks.push(yd), Rd[Hd] = yd, yd.TRd = Hd
            }
            Fd.hRd(Od, Xd), Fd.qRd(yd, Od), yd.pRd = (yd.pRd || 0) + 1, Od.metadata[OO.u] = yd, Od.metadata[OO.p] = !0, Od.lq = !0
          }
        }, this.WG = dd => {
          if (dd.metadata) {
            dd.metadata[OO.m] && ((0, dO.n)(dd.metadata[OO.g], dd), dd.metadata[OO.m] = !1), dd.metadata[OO.g] === Kd && (dd.lq = !1), dd.metadata[OO.g] = void 0, dd.metadata[OO.H] = void 0;
            var Od = dd.metadata[OO.u];
            Od && Od.entries && (dd.metadata[OO.p] && Fd.removeEntry(Od, dd), Od.pRd--, Od.pRd <= 0 && (delete Rd[Od.TRd], (0, dO.n)(Wd.blocks, Od))), Fd.WG(dd), dd.metadata[OO.u] = null, dd.metadata[OO.p] = !1
          }
        }, this.zdd = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (dd.metadata[OO.u]) {
            if (dd.metadata[OO.p] === Od) return;
            var md = dd.metadata[OO.u];
            md && md.entries && (Od ? Fd.qRd(md, dd) : Fd.removeEntry(md, dd)), dd.metadata[OO.p] = Od
          } else {
            if (dd.metadata[OO.m] === Od) return;
            var Rd = dd.metadata[OO.g] || Wd.HRd;
            Od ? Rd.push(dd) : (0, dO.n)(Rd, dd), dd.metadata[OO.m] = Od
          }
        };
        var hd = () => {},
          vd = Od * dd.zo.Bt.tt,
          Qd = (dd, Od) => {
            dd.blocks.forEach((dd => {
              dd.KRd.YRd(Od), dd.XRd.YRd(Od), dd.yRd.forEach((dd => dd.YRd(Od))), dd.blocks && Qd(dd, Od)
            }))
          },
          td = (dd, Od) => {
            var md = new Xd.Cq(dd[0], dd[1], dd[2]),
              Wd = new Xd.Cq(dd[0] + Od, dd[1] + Od, dd[2] + Od);
            return new kd.d(md, Wd, void 0, void 0, void 0, hd)
          };
        Fd = wO(md, Wd, dd.zo, td, ((dd, Od) => {
          for (var md = 0; md < Kd.length; md++) {
            var Wd = Kd[md];
            Wd.isEnabled(!1) && ((0, JO.c)(Wd, Od) && Md.e.prototype.push.call(dd, Wd))
          }
        }))
      }
    }

    function xO(dd) {
      const {
        holderPosition: Od,
        holderRotation: md,
        k_: Wd,
        fov: Fd,
        near: Rd,
        far: Xd
      } = dd.model.l_, Kd = dd.uRd;
      Kd.position.KOd(Od[0], Od[1], Od[2]), Kd.rotation.KOd(md[0], md[1], md[2]);
      const hd = dd.camera;
      hd.position.KOd(Wd[0], Wd[1], Wd[2]), hd.fov = Fd, hd.minZ = Rd, hd.maxZ = Xd
    }

    function BO(dd) {
      const Od = dd.Iq(),
        md = Od,
        Wd = md._gl;
      if (!Wd || md.YH < 2 || Od.JFd || Wd.getParameter(Wd.DEPTH_BITS) < 24) return !1;
      const Fd = dd._renderingManager,
        Rd = Fd.getRenderingGroup(-1),
        Xd = Fd.getRenderingGroup(0),
        Kd = Dd.e.prototype.render;
      return Rd.render = function(dd, Od, md, Wd, Fd, Rd, hd, vd, Qd) {
        (dd || Xd._empty) && Kd.call(this, dd, Od, md, Wd, Fd, Rd, hd, vd, Qd)
      }, Xd.render = function(dd, md, Fd, Xd) {
        let hd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          vd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          td = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          od = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Nd = arguments.length > 8 ? arguments[8] : void 0;
        dd ? Kd.call(this, dd, md, Fd, Xd, hd, vd, td, od, Nd) : (Od.setAlphaMode(Qd.b.ALPHA_DISABLE), Kd.call(this, null, !1, !1, Xd, hd, vd, td, !1), Rd._empty || (Wd.depthRange(1, 1), Kd.call(Rd, null, md, Fd, Xd, hd, vd, td, od, Nd), Wd.depthRange(0, 1)), Kd.call(this, null, md, Fd, Xd, !1, !1, !1, od, Nd))
      }, !0
    }

    function SO(dd, Od) {
      return [Od, Cd.d].map(((Od, md) => {
        const Wd = new Fd.c("light", Xd.Cq.FromArray(Od), dd);
        return Wd.diffuse = Rd.Color3.FromArray([1, 1, 1]), Wd.specular = Rd.Color3.FromArray([1, 1, 1]), Wd.intensity = Cd.c[md], Wd
      }))
    }
    class sO extends hd.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(dd) {
        var Od;
        this.heldTexture = dd, this.particleTexture = null !== (Od = null === dd || void 0 === dd ? void 0 : dd.mirror) && void 0 !== Od ? Od : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let dd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        dd && (this.particleTexture = null, (0, vd.z)(this.heldTexture), this.heldTexture = null), super.dispose(dd, Od, md)
      }
    }

    function uO(dd, Od, md, Wd) {
      return Od && !Od.failed ? Od.wG(md, Wd) : new sO(md, Wd, dd)
    }
    const VO = new WeakMap;

    function iO(dd, Od, md) {
      var Wd;
      let Fd = null !== (Wd = VO.get(dd)) && void 0 !== Wd ? Wd : null;
      return !Fd && dd.Iq().YH >= 2 && (Fd = new rd(dd, (Od => {
        console.error(`Particle programs failed in scene ${dd.uid}: ${Od}`)
      })), VO.set(dd, Fd)), uO(dd, Fd, Od, md)
    }
    const AO = Wd.c.Zero();
    const rO = {
      eWd: function(dd, Od) {
        return new nd(dd, Od.zWd, {
          preserveDrawingBuffer: Od.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      ARd: function(dd, Od) {
        ! function(dd, Od, md) {
          const Wd = new Id.e(dd.engine);
          dd.MH = Wd, Wd.detachControl(), Wd.autoClear = !1, ed.c.MIN_RENDERINGGROUPS = -1;
          for (let Rd = ed.c.MIN_RENDERINGGROUPS; Rd <= 1; Rd++) Wd.setRenderingOrder(Rd, Dd.e.PainterSortCompare, Dd.e.PainterSortCompare, Dd.e.PainterSortCompare);
          Wd.setRenderingAutoClearDepthStencil(0, !1), jd.b.Enabled = !1, dd.BRd = new UO(dd, Math.round(Od.SRd)), dd.uRd = new cd.c("camHolder", Wd), dd.camera = new zd.e("camera", new Xd.Cq(0, 0, 0), Wd), dd.camera.parent = dd.uRd, xO(dd), (0, Cd.e)(dd, ((dd, Od, md) => (0, ld.k)(Od, md, dd.MH))), Wd.clearColor = Rd.b.FromArray(Od.clearColor), Wd.ambientColor = Rd.Color3.FromArray(Od.ambientColor);
          const Fd = md(Wd, Od.iRd);
          Wd.onNewLightAddedObservable.add((dd => {
            Fd.some((Od => Od === dd)) || console.error(`Light "${dd.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Wd.skipPointerMovePicking = !0
        }(dd, Od, SO), BO(dd.MH)
      },
      sRd: xO,
      setBabylonFog: function(dd, Od, md, Wd) {
        const Fd = dd.MH;
        Fd.fogMode = 3, Fd.fogStart = Od, Fd.fogEnd = md, Fd.fogColor.set(Wd[0], Wd[1], Wd[2])
      },
      GRd: function(dd, Od, md) {
        return dd.engine.YH >= 2 && !dd.nRd && (dd.nRd = new rd(dd.MH, dd.LRd)), uO(dd.MH, dd.nRd, Od, md)
      },
      zRd: function(dd, Od) {
        dd.MH.kE.forEach((md => {
          if (md instanceof Vd) return void md.XOd(Od, dd.zo.XN);
          const Wd = md;
          if (Wd.emitter.getConnectedParticleSystems)
            for (const dd of Wd._particles) dd.position.set(dd.position.x - Od[0], dd.position.y - Od[1], dd.position.z - Od[2]);
          else {
            if (!Wd.worldOffset) throw new Error("Particle system has no world offset");
            Wd.worldOffset.x = -dd.zo.XN[0], Wd.worldOffset.y = -dd.zo.XN[1], Wd.worldOffset.z = -dd.zo.XN[2]
          }
        }))
      },
      linesFromArrays: function(dd, Od, md) {
        const Wd = new Kd.d(Od, dd.MH, null, void 0, void 0, !1);
        return (0, ld.h)(Od, md, dd.MH, Wd), Wd
      },
      Oy: bO,
      PRd: function(dd, Od) {
        return AO.origin.Bx(Od.origin), AO.direction.Bx(Od.direction), AO.length = Od.length, AO.epsilon = Od.epsilon, AO.PRd(dd, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  43088: (dd, Od, md) => {
    md.d(Od, {
      e: () => Dd,
      h: () => pd,
      l: () => fd
    });
    var Wd = md(42179),
      Fd = md(43097),
      Rd = md(43143),
      Xd = md(43101),
      Kd = md(39368),
      hd = md(39371),
      vd = md(39380),
      Qd = md(39384),
      td = md(38835),
      od = md(38788),
      Nd = md(38794),
      qd = md(43110),
      Hd = md(38758),
      yd = md(38779),
      bd = md(38752);

    function Td(dd, Od) {
      return Object.assign((function(dd, md, Wd, Fd) {
        return Od(this.featureState, dd, md, Wd, Fd)
      }), {
        Ot: dd
      })
    }

    function pd(dd) {
      const Od = class extends qd.d {
          constructor(Od, md) {
            const Wd = (0, yd.db)(Od),
              Fd = Wd && (0, yd.B)(Wd, dd.name);
            for (var Rd = arguments.length, Xd = new Array(Rd > 2 ? Rd - 2 : 0), Kd = 2; Kd < Rd; Kd++) Xd[Kd - 2] = arguments[Kd];
            super(Od, dd.name, dd.priority, Fd ? Fd.defines : dd.defines(...Xd), !1), this.featureState = void 0, this.featureState = md, this._pluginManager._addPlugin(this), this._enable(!0), (0, yd.C)(this._material, dd, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return dd.className
          }
          isCompatible(dd) {
            return dd === bd.e.GLSL || dd === bd.e.WGSL
          }
        },
        md = (0, Hd.i)(dd);
      for (const [Wd, Fd] of Object.entries(Hd.d)) {
        const Rd = dd[Wd];
        if (Rd) {
          const dd = md[Wd];
          Object.defineProperty(Od.prototype, Fd, {
            value: Td(Rd, dd),
            writable: !0,
            configurable: !0
          })
        }
      }
      return Od
    }
    class Yd extends(pd(Kd.e)) {}
    var gd = md(41756),
      wd = md(43113),
      Ed = md(43115);

    function Jd(dd, Od, md) {
      return (0, Ed.h)(md, Od.urls, (() => async function(dd, Od, md) {
        const {
          width: Wd
        } = dd[0].getSize(), Fd = dd.map(((dd, md) => {
          var Fd;
          const Rd = Math.round(dd.getSize().height / Wd),
            Xd = null === Od || void 0 === Od ? void 0 : Od[md];
          return {
            pixels: Xd && Xd.byteLength === Wd * Wd * Rd * 4 ? Xd : null !== (Fd = Ud.get(dd.getInternalTexture())) && void 0 !== Fd ? Fd : dd._readPixelsSync(),
            layers: Rd
          }
        })), Rd = Math.min(md.Iq().getCaps().texture2DArrayMaxLayerCount, 256), Kd = (0, Ed.d)(Fd, Wd, Rd).map((dd => {
          let {
            pixels: Od,
            layers: Fd
          } = dd;
          return {
            atlas: new wd.e(Od, Wd, Wd, Fd, gd.d.TEXTUREFORMAT_RGBA, md, !0, !1, Xd.b.NEAREST_NEAREST_MIPLINEAR),
            layers: Fd
          }
        }));
        return dd.forEach(((dd, Od) => {
          const Wd = dd.getInternalTexture();
          Ud.has(Wd) || (! function(dd, Od) {
            const md = Od.createRawTexture(new Uint8Array(4), 1, 1, gd.d.TEXTUREFORMAT_RGBA, !1, !1, Xd.b.NEAREST_SAMPLINGMODE);
            dd._hardwareTexture.release(), Od.unbindAllTextures(), md._swapAndDie(dd, !1)
          }(Wd, md.Iq()), Ud.set(Wd, Fd[Od].pixels))
        })), Kd
      }(dd, Od.pixels, md)))
    }
    const Ud = new WeakMap;
    var xd = md(39391);
    class Bd extends(pd(hd.h)) {
      constructor(dd, Od) {
        super(dd, Od), this.loaded = new Set, this.mirrors = void 0, this.mirrors = Od.textures.map((dd => dd.mirror)), Od.useWebGL2 && !Od.imagesPerAtlas.length && Od.textureAtlases.splice(0, Od.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((dd, Od) => {
          dd.onLoadObservable.add((dd => {
            this.setTextureArrayData(dd, Od).catch((dd => {
              console.error(`Failed to build the texture arrays, at atlas ${Od}`, dd)
            }))
          }))
        })), (0, xd.k)(Od, dd.shaderLanguage)
      }
      async setTextureArrayData(dd, Od) {
        const md = this.featureState,
          {
            width: Wd,
            height: Fd
          } = dd.getSize(),
          Rd = this._material.shaderLanguage;
        if (!md.useWebGL2) return void(0, xd.f)(this._material, md, Od, Wd, Math.round(Fd / Wd), Rd);
        if (this.loaded.add(Od), this.loaded.size < this.mirrors.length) return;
        const Xd = await Jd(this.mirrors, md.sources, this._material.zV());
        (0, xd.e)(this._material, md, Xd, Wd, Rd)
      }
    }
    var Sd = md(43122),
      sd = md(42225),
      ud = md(38627),
      Vd = md(43129),
      Ad = md(42339),
      rd = md(42217),
      Gd = md(43061),
      nd = md(39037),
      Ld = md(43134);
    class Pd extends Sd.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const zd = {
      Mesh: Vd.d,
      TransformNode: Gd.c,
      CQ: Sd.d,
      VertexBuffer: Sd.g,
      BoundingInfo: sd.c,
      Cq: ud.Cq,
      ArenaBuffer: Pd,
      SubMesh: rd.d,
      VertexData: Ad.c,
      MirroredGeometry: Ld.d,
      meshFromArrays: Ld.h,
      plainMeshFromArrays: Ld.k
    };
    (0, nd.g)(zd);
    var cd = md(38877);
    class jd extends(pd(Qd.j)) {
      constructor(dd, Od) {
        if (super(dd, Od), dd instanceof Wd.StandardMaterial && Od.dirLightCount > 0) {
          const Od = dd,
            md = Od._blockDirtyMechanism;
          Od._blockDirtyMechanism = !0, dd.disableLighting = !0, Od._blockDirtyMechanism = md;
          const Wd = (0, yd.db)(dd);
          Wd && (Wd.disableLighting = !0, (0, yd.ab)(Wd))
        }(0, cd.i)(dd)
      }
      dispose(dd) {
        (0, cd.j)(this._material), super.dispose(dd)
      }
    }

    function Dd(dd, Od) {
      if (!(Od instanceof Wd.StandardMaterial) || Od.specularTexture) return;
      const {
        r: md,
        g: Fd,
        b: Rd
      } = Od.specularColor;
      0 === md && 0 === Fd && 0 === Rd && (dd.SPECULARTERM = !1)
    }(0, Qd.f)({
      disableUnusedSpecularTerm: Dd
    });
    var ed = md(38799),
      Id = md(39050);
    const ld = new RegExp(`^#define ${vd.e}\\s*$`, "m");
    class Cd extends(pd(vd.i)) {
      constructor(dd, Od) {
        super(dd, Od), this.Aq = !1, Od.ditherOnlyWhileFading && (Id.d.add(dd), this.prewarmDitherTwins(dd))
      }
      prewarmDitherTwins(dd) {
        const Od = new WeakSet;
        dd.onEffectCreatedObservable.add((md => {
          let {
            effect: Wd,
            subMesh: Fd
          } = md;
          if (this.featureState.prewarmingDither || Od.has(Wd)) return;
          Od.add(Wd);
          const Rd = null === Fd || void 0 === Fd ? void 0 : Fd.getMesh();
          Rd && !ld.test(Wd.defines) && dd.zV().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Rd) || Od.delete(Wd)
          }))
        }))
      }
      prewarmDither(dd) {
        if (this.Aq || dd.yJ()) return !1;
        const Od = new rd.d(0, 0, 0, 0, 0, dd, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(dd, Od)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== Od.effect
      }
      dispose(dd) {
        this.Aq = !0, super.dispose(dd)
      }
    }
    class Zd extends(pd(td.b)) {}
    const kd = new Map;

    function fd(dd, Od) {
      kd.set(dd, Od)
    }
    fd(Kd.e, Yd), fd(hd.h, Bd), fd(vd.i, Cd), fd(Qd.j, jd), fd(td.b, Zd), (0, od.d)({
      create: (dd, Od) => {
        const md = new Wd.StandardMaterial(dd.name, Od);
        return (0, ed.p)(dd, md), md.detailMap._pluginDefineNames
      },
      write: (dd, Od, md) => {
        (0, ed.V)(dd.mirror, Od, md)
      },
      addFeature: (dd, Od, md) => {
        const Wd = kd.get(Od.feature);
        if (!Wd) throw new Error(`${Od.feature.name} has no plugin class (registerPluginClass)`);
        new Wd(dd.mirror, Od.state, ...md)
      },
      texture: (dd, Od, md) => {
        let {
          url: Wd,
          noMipmap: Fd,
          invertY: Rd,
          samplingMode: Kd,
          data: hd,
          sets: vd
        } = md;
        if (!hd) {
          const md = new Xd.b(Wd, Od, Fd, Rd, Kd);
          return Object.assign(md, vd), void(0, Nd.F)(dd, md)
        }
        const Qd = {},
          td = new Promise(((dd, Od) => {
            Qd.onLoad = dd, Qd.onError = (dd, md) => {
              Od(new Error(`${hd.context}: ${(null===md||void 0===md?void 0:md.message)||dd||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: od,
            bytes: qd,
            label: Hd
          } = hd,
          yd = {
            noMipmap: Fd,
            invertY: !1,
            samplingMode: Kd,
            ...Qd,
            mimeType: od,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          bd = new Xd.b(null, Od, yd);
        ed.q.set(bd, td), Object.assign(bd, vd), bd.updateURL(Wd, qd);
        const Td = bd.getInternalTexture();
        Td && (Td.label = Hd), dd.uvSet = bd.coordinatesIndex, dd.matrix.set((0, ed.P)(bd)), (0, Nd.F)(dd, bd)
      },
      cube: (dd, Od, md) => {
        let {
          rootUrl: Wd,
          files: Rd,
          noMipmap: Kd,
          luminance: hd
        } = md;
        const {
          samplingMode: vd
        } = dd.sampler, Qd = vd === (0, Nd.v)(Kd) ? null : () => {
          (0, ed.L)(td, vd)
        }, td = new Fd.b(Wd, Od, null, Kd, Rd, Qd, null, (0, Nd.r)(hd));
        td.coordinatesMode = Xd.b.SKYBOX_MODE, (0, Nd.F)(dd, td)
      },
      canvas: (dd, Od, md) => {
        let {
          width: Wd,
          height: Fd,
          mipmaps: Kd,
          samplingMode: hd,
          hasAlpha: vd = !1,
          wrap: Qd = Xd.b.CLAMP_ADDRESSMODE
        } = md;
        const td = new Rd.e(Od, {
          width: Wd,
          height: Fd
        }, dd, Kd, hd);
        td.hasAlpha = vd, td.wrapU = Qd, td.wrapV = Qd;
        const od = (0, ed.y)(td);
        return (0, ed.C)(od, td), od
      }
    })
  },
  43134: (dd, Od, md) => {
    md.d(Od, {
      d: () => Qd,
      h: () => td,
      k: () => od
    });
    var Wd = md(43122),
      Fd = md(41991),
      Rd = md(42225),
      Xd = md(42344),
      Kd = md(43129),
      hd = md(42339),
      vd = md(38929);
    class Qd extends Xd.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (dd, Od) => {
          this.releaseUnlessInstanced(Od)
        }, this.onLinked = null
      }
      link(dd) {
        var Od;
        (0, vd.o)(dd), this.model = dd, null === (Od = this.onLinked) || void 0 === Od || Od.call(this, dd)
      }
      relink() {
        this.release();
        const dd = [];
        for (const Fd of Object.values(this._vertexBuffers))
          if (!Fd.getIsInstanced()) {
            const {
              byteOffset: Od,
              byteStride: md,
              type: Wd,
              normalized: Rd
            } = Fd;
            dd.push({
              kind: Fd.getKind(),
              data: Fd.getData(),
              offset: Od,
              stride: md,
              components: Fd.getSize(),
              glType: Wd,
              isNormalized: Rd
            })
          } const Od = this._indices.length ? this._indices : null,
          {
            minimum: md,
            maximum: Wd
          } = this.extend;
        this.link(new vd.i(dd, Od, this.getTotalVertices(), new Float64Array(md.RRd()), new Float64Array(Wd.RRd())))
      }
      copy(dd) {
        if (!this.model) return super.copy(dd);
        const Od = new Qd(dd, this.zV()),
          md = this.jRd(void 0, !0);
        md && Od.setIndices(md);
        let Xd = !1;
        for (const Rd in this._vertexBuffers) {
          const dd = this._vertexBuffers[Rd],
            md = dd.getData();
          if (!md) continue;
          const Kd = dd.getSize(),
            {
              type: hd,
              byteOffset: vd,
              byteStride: Qd,
              normalized: td
            } = dd;
          Xd ||= dd.isUpdatable();
          const od = dd.getIsInstanced() ? (md instanceof Array ? 4 * md.length : md.byteLength) / Qd : this.getTotalVertices(),
            Nd = (0, Fd.q)(md, Kd, hd, vd, Qd, od, !0),
            qd = {
              updatable: dd.isUpdatable(),
              stride: Kd,
              type: hd,
              normalized: td,
              takeBufferOwnership: !0,
              instanced: dd.getIsInstanced()
            };
          Od.setVerticesBuffer(new Wd.g(this.Iq(), Nd, Rd, qd), od)
        }
        return Od._updatable = Xd, Od._boundingInfo = new Rd.c(this.extend.minimum, this.extend.maximum), Od.relink(), Od
      }
      static mergeMeshes(dd, Od, md, Wd, Fd, Rd) {
        const hd = dd[0].zV(),
          vd = new Kd.d(dd[0].name + "_merged", hd),
          td = new Qd(Xd.c.RandomId(), hd, void 0, !1, vd);
        try {
          if (!Kd.d.MergeMeshes(dd, Od, md, vd, Fd, Rd)) return vd.dispose(), null
        } catch (od) {
          throw vd.dispose(), od
        }
        return td.relink(), vd
      }
      removeVerticesData(dd) {
        this.releaseUnlessInstanced(dd), super.removeVerticesData(dd)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(dd) {
        var Od;
        dd && null !== (Od = this.getVertexBuffer(dd)) && void 0 !== Od && Od.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, vd.u)(this.model), this.model = null)
      }
    }

    function td(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Kd.d(dd, md);
      const Fd = (0, vd.l)(Od),
        {
          positions: Rd,
          normals: td,
          uvs: od,
          indices: Nd,
          named: qd = {}
        } = Od,
        Hd = new hd.c;
      Hd.positions = Rd, Hd.normals = null !== td && void 0 !== td ? td : null, Hd.uvs = null !== od && void 0 !== od ? od : null, Hd.indices = Nd;
      const yd = new Qd(Xd.c.RandomId(), md, Hd, !1, Wd);
      for (const {
          kind: Xd,
          components: Kd
        }
        of Fd.vertexAttributes) Xd in qd && Wd.setVerticesData(Xd, qd[Xd], !1, Kd);
      return yd.link(Fd), Wd
    }

    function od(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Fd = new Kd.d(dd, md),
        {
          positions: Rd,
          normals: Xd,
          uvs: vd,
          indices: Qd
        } = Od;
      return Object.assign(new hd.c, {
        positions: Rd,
        normals: Xd,
        uvs: vd,
        indices: Qd
      }).applyToMesh(Fd, Wd), Fd
    }
  },
  40293: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd,
      e: () => Xd,
      i: () => Rd,
      k: () => Fd,
      l: () => Kd,
      m: () => vd,
      q: () => Qd,
      s: () => hd
    });
    const Wd = 16,
      Fd = 256,
      Rd = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      Xd = 16,
      Kd = 256,
      hd = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + Wd,
        color2: 12 + 5 * Wd,
        Gy: 12 + 9 * Wd,
        remap: 12 + 13 * Wd
      },
      vd = 12 + 17 * Wd,
      Qd = [hd.colorCount, hd.velocityCount, hd.remapCount, hd.ramp]
  },
  40289: (dd, Od, md) => {
    md.d(Od, {
      b: () => yd,
      f: () => pd
    });
    var Wd = md(38663),
      Fd = md(38627),
      Rd = md(38794),
      Xd = md(40293);
    class Kd {
      constructor(dd) {
        this.Mt = dd, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const Od = Math.max(1, dd);
        this.records = new Float32Array(Od * Xd.e), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(Od).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(dd) {
        const Od = this.Mt;
        for (let md = 0; md < Od; md++) {
          const md = this.cursor;
          if (this.cursor = md + 1 === Od ? 0 : md + 1, this.deaths[md] <= dd) return md
        }
        return -1
      }
      written(dd, Od) {
        this.deaths[dd] = Od, dd >= this.highWater && (this.highWater = dd + 1), this.uploadFrom < 0 ? (this.uploadFrom = dd, this.uploadTo = dd + 1) : dd >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, dd + 1) : this.wrapTo = Math.max(this.wrapTo, dd + 1)
      }
      shiftTimes(dd) {
        const Od = this.records,
          md = this.highWater * Xd.e;
        for (let Wd = Xd.i.time; Wd < md; Wd += Xd.e) Od[Wd] -= dd;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(dd) {
        this.uploadFrom >= 0 && (dd(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && dd(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(dd) {
        let Od = 0;
        for (let md = 0; md < this.highWater; md++) this.deaths[md] > dd && Od++;
        return Od
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var hd = md(38736),
      vd = md(40298),
      Qd = md(40301),
      td = md(40307);
    class od {
      constructor() {
        this.particleEmitterType = new Qd.c, this.texture = null, this.blendMode = td.c, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = Fd.Cq.Zero(), this.worldOffset = new Fd.Cq(0, 0, 0), this.color1 = new hd.b(1, 1, 1, 1), this.color2 = new hd.b(1, 1, 1, 1), this.colorDead = new hd.b(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var dd;
        return null !== (dd = Nd(this).direction1) && void 0 !== dd ? dd : Fd.Cq.Zero()
      }
      set direction1(dd) {
        const Od = Nd(this);
        Od.direction1 && (Od.direction1 = dd)
      }
      get direction2() {
        var dd;
        return null !== (dd = Nd(this).direction2) && void 0 !== dd ? dd : Fd.Cq.Zero()
      }
      set direction2(dd) {
        const Od = Nd(this);
        Od.direction2 && (Od.direction2 = dd)
      }
      get minEmitBox() {
        var dd;
        return null !== (dd = Nd(this).minEmitBox) && void 0 !== dd ? dd : Fd.Cq.Zero()
      }
      set minEmitBox(dd) {
        const Od = Nd(this);
        Od.minEmitBox && (Od.minEmitBox = dd)
      }
      get maxEmitBox() {
        var dd;
        return null !== (dd = Nd(this).maxEmitBox) && void 0 !== dd ? dd : Fd.Cq.Zero()
      }
      set maxEmitBox(dd) {
        const Od = Nd(this);
        Od.maxEmitBox && (Od.maxEmitBox = dd)
      }
      createBoxEmitter(dd, Od, md, Wd) {
        const Fd = new Qd.c;
        return this.particleEmitterType = Fd, Fd.direction1 = dd, Fd.direction2 = Od, Fd.minEmitBox = md, Fd.maxEmitBox = Wd, Fd
      }
      addColorGradient(dd, Od, md) {
        return this.colorGradients ??= [], this.colorGradients.push(new vd.d(dd, Od, md)), this.colorGradients.sort(qd), this
      }
      removeColorGradient(dd) {
        return Hd(this.colorGradients, dd), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(dd, Od, md) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new vd.k(dd, Od, md)), this.velocityGradients.sort(qd), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(dd, Od, md) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new vd.k(dd, Od, md)), this.colorRemapGradients.sort(qd), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(dd, Od) {
        return this.rampGradients ??= [], this.rampGradients.push(new vd.h(dd, Od)), this.rampGradients.sort(qd), this
      }
      removeRampGradient(dd) {
        return Hd(this.rampGradients, dd), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function Nd(dd) {
      return dd.particleEmitterType
    }

    function qd(dd, Od) {
      return dd.gradient < Od.gradient ? -1 : dd.gradient > Od.gradient ? 1 : 0
    }

    function Hd(dd, Od) {
      const md = dd ? dd.findIndex((dd => dd.gradient === Od)) : -1;
      md >= 0 && dd.splice(md, 1)
    }
    class yd extends od {
      constructor(dd, Od, md) {
        super(), this.name = dd, this.host = md, this.onDispose = bd, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = Fd.Cq.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.Aq = !1, this.emitterMatrix = new Fd.Matrix, this.inverseEmitterMatrix = new Fd.Matrix, this.spawned = {
          position: new Fd.Cq,
          direction: new Fd.Cq
        }, this.ring = new Kd(Od)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(dd) {
        var Od;
        null === (Od = this.emitterDisposed) || void 0 === Od || Od.remove(), this.emitterDisposed = null, this.emitterValue = dd, dd && Yd(dd) && (this.emitterDisposed = dd.cV.add((() => {
          this.emitterDisposed = null, this.dispose()
        })))
      }
      start() {
        this.started = !0, this.stopped = !1
      }
      stop() {
        this.stopped = !0, this.endIfSpent()
      }
      isStarted() {
        return this.started
      }
      isStopping() {
        return this.stopped && this.alive
      }
      isEmitting() {
        return this.started && !this.stopped
      }
      isReady() {
        return !this.Aq && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var dd;
        let Od = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.Aq || (this.Aq = !0, null === (dd = this.emitterDisposed) || void 0 === dd || dd.remove(), this.emitterDisposed = null, Od && ((0, Rd.z)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(dd) {
        const Od = this.emitter;
        return !!Od && !(Yd(Od) && !Od.isEnabled()) && this.animate(dd)
      }
      animate(dd) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const Od = this.updateSpeed * dd;
        let md;
        return this.manualEmitCount > -1 ? (md = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (md = this.emitRate * Od | 0, this.newPartsExcess += this.emitRate * Od - md), this.newPartsExcess > 1 && (md += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (md = 0), this.alive = this.liveUntil > this.time, this.time += Od, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), md > 0 && this.spawn(md), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.Aq && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var dd;
        return this.started = !1, null === (dd = this.onAnimationEnd) || void 0 === dd || dd.call(this), !!this.Aq || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(dd, Od) {
        dd[Od] = this.anchor[0] + this.shift[0] + this.worldOffset.x, dd[Od + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, dd[Od + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      XOd(dd, Od) {
        this.emitterValue && Yd(this.emitterValue) ? (this.shift[0] -= dd[0], this.shift[1] -= dd[1], this.shift[2] -= dd[2]) : this.worldOffset.set(-Od[0], -Od[1], -Od[2])
      }
      spawn(dd) {
        var Od, md;
        const Rd = this.emitterValue,
          Kd = Yd(Rd) ? Rd.getWorldMatrix() : Fd.Matrix.TranslationToRef(Rd.x, Rd.y, Rd.z, this.emitterMatrix);
        Kd.invertToRef(this.inverseEmitterMatrix);
        const {
          position: hd,
          direction: vd
        } = this.spawned, Qd = this.spawned, td = this.ring, od = this.liveUntil <= this.time;
        od && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, td.restart());
        const {
          records: Nd,
          recordBits: qd
        } = td, Hd = Xd.i, yd = null === (Od = this.getColorGradients()) || void 0 === Od ? void 0 : Od[0], bd = yd ? yd.color1 : this.color1, Td = yd ? null !== (md = yd.color2) && void 0 !== md ? md : yd.color1 : this.color2;
        for (let Fd = 0; Fd < dd; Fd++) {
          const dd = td.freeSlot(this.time);
          if (dd < 0) break;
          const Od = (0, Wd.RandomRange)(this.minLifeTime, this.maxLifeTime),
            md = (0, Wd.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(Kd, hd, Qd, !1), this.particleEmitterType.startDirectionFunction(Kd, vd, Qd, !1, this.inverseEmitterMatrix), 0 === md ? vd.set(0, 0, 0) : vd.scaleInPlace(md);
          const Rd = (0, Wd.RandomRange)(this.minSize, this.maxSize);
          od && 0 === Fd && (this.anchor[0] = hd.x, this.anchor[1] = hd.y, this.anchor[2] = hd.z);
          const yd = dd * Xd.e;
          Nd[yd + Hd.position] = hd.x - this.anchor[0] - this.shift[0], Nd[yd + Hd.position + 1] = hd.y - this.anchor[1] - this.shift[1], Nd[yd + Hd.position + 2] = hd.z - this.anchor[2] - this.shift[2], Nd[yd + Hd.time] = this.time - this.epoch, Nd[yd + Hd.direction] = vd.x, Nd[yd + Hd.direction + 1] = vd.y, Nd[yd + Hd.direction + 2] = vd.z, Nd[yd + Hd.lifeTime] = Od, Nd[yd + Hd.size] = Rd, qd[yd + Hd.seed] = 4294967296 * Math.random() >>> 0;
          const pd = Math.random();
          Nd[yd + Hd.colour] = bd.r + (Td.r - bd.r) * pd, Nd[yd + Hd.colour + 1] = bd.g + (Td.g - bd.g) * pd, Nd[yd + Hd.colour + 2] = bd.b + (Td.b - bd.b) * pd, Nd[yd + Hd.colour + 3] = bd.a + (Td.a - bd.a) * pd;
          const Yd = this.time + Od;
          Yd > this.liveUntil && (this.liveUntil = Yd), td.written(dd, Yd)
        }
      }
    }

    function bd() {}
    const Td = 5;

    function pd(dd, Od) {
      const md = [];
      let Wd = 0;
      for (const Fd of dd) Fd.isReady() || (Wd++, md.length < Td && md.push(`${Od} particle system ${Fd.name}`));
      return Wd > md.length && md.push(`${Wd-md.length} more ${Od} particle systems`), md
    }

    function Yd(dd) {
      return void 0 !== dd.position
    }
  },
  54026: (dd, Od, md) => {
    md.d(Od, {
      e: () => yd,
      h: () => Kd,
      l: () => Xd,
      p: () => vd
    });
    var Wd = md(38736),
      Fd = md(40298),
      Rd = md(40293);

    function Xd(dd, Od, md, Wd) {
      const Fd = Rd.s;
      Od.fill(0), dd.gravity.toArray(Od, Fd.gravity), dd.colorDead.toArray(Od, Fd.colorDead), md[Fd.ramp] = dd.useRampGradients ? 1 : 0;
      const Xd = dd.getColorGradients(),
        Kd = od(dd, Xd, "colour", Wd);
      md[Fd.colorCount] = Kd;
      for (let Rd = 0; Rd < Kd; Rd++) {
        var hd;
        const dd = Xd[Nd(Xd, Rd)];
        Od[Fd.colorPositions + Rd] = dd.gradient, dd.color1.toArray(Od, Fd.color1 + 4 * Rd), (null !== (hd = dd.color2) && void 0 !== hd ? hd : dd.color1).toArray(Od, Fd.color2 + 4 * Rd)
      }
      const vd = dd.getVelocityGradients(),
        Qd = od(dd, vd, "Gy", Wd);
      md[Fd.velocityCount] = Qd;
      for (let Rd = 0; Rd < Qd; Rd++) Td(Od, Fd.Gy + 4 * Rd, vd[Nd(vd, Rd)]);
      const td = dd.useRampGradients ? dd.getColorRemapGradients() : null,
        qd = od(dd, td, "colour remap", Wd);
      md[Fd.remapCount] = qd;
      for (let Rd = 0; Rd < qd; Rd++) Td(Od, Fd.remap + 4 * Rd, td[Nd(td, Rd)])
    }

    function Kd() {
      return {
        key: [],
        texels: new Uint8Array(4 * Rd.k)
      }
    }
    const hd = [];

    function vd(dd, Od) {
      return Qd(dd, hd), !bd(hd, Od.key) && (Od.key.length = 0, Od.key.push(...hd), Od.key.length > 0 && function(dd, Od) {
        for (let md = 0; md < Rd.k; md++) Fd.m.GetCurrentGradient(md / Rd.k, dd, ((dd, Od, md) => {
          Wd.Color3.LerpToRef(dd.color, Od.color, md, td)
        })), Od[4 * md] = 255 * td.r, Od[4 * md + 1] = 255 * td.g, Od[4 * md + 2] = 255 * td.b, Od[4 * md + 3] = 255
      }(dd.getRampGradients(), Od.texels), !0)
    }

    function Qd(dd, Od) {
      Od.length = 0;
      const md = dd.useRampGradients ? dd.getRampGradients() : null;
      if (null !== md && void 0 !== md && md.length) {
        Od.push(md.length);
        for (const dd of md) Od.push(dd.gradient, dd.color.r, dd.color.g, dd.color.b)
      }
    }
    const td = new Wd.Color3;

    function od(dd, Od, md, Wd) {
      return Od ? Od.length > Rd.b ? (Wd(`particleStops:${md}`, `GPU particles use the first 2 and last ${Rd.b-2} of more than ${Rd.b} ${md} gradient stops (${dd.name})`), Rd.b) : Od.length : 0
    }

    function Nd(dd, Od) {
      return Od < 2 || dd.length <= Rd.b ? Od : dd.length - Rd.b + Od
    }
    const qd = new Float32Array(Rd.m),
      Hd = new Uint32Array(qd.buffer);

    function yd(dd, Od, md) {
      return Xd(dd, qd, Hd, md), Od && bd(Hd, Od) ? null : Hd.slice()
    }

    function bd(dd, Od) {
      if (dd.length !== Od.length) return !1;
      for (let md = 0; md < dd.length; md++)
        if (dd[md] !== Od[md]) return !1;
      return !0
    }

    function Td(dd, Od, md) {
      var Wd;
      dd[Od] = md.gradient, dd[Od + 1] = md.factor1, dd[Od + 2] = null !== (Wd = md.factor2) && void 0 !== Wd ? Wd : md.factor1
    }
  },
  43115: (dd, Od, md) => {
    function Wd(dd, Od, md) {
      const Wd = Od * Od * 4,
        Fd = dd[0].layers,
        Rd = Fd * (dd.length - 1) + dd[dd.length - 1].layers,
        Xd = new Uint8Array(Rd * Wd);
      dd.forEach(((Od, md) => {
        const Rd = md + 1 < dd.length ? Math.min(Od.layers, Fd) : Od.layers;
        Xd.set(new Uint8Array(Od.pixels.buffer, Od.pixels.byteOffset, Rd * Wd), md * Fd * Wd)
      }));
      const Kd = Math.max(1, Math.min(Rd, md || Rd));
      if (Kd === Rd) return [{
        pixels: Xd,
        layers: Rd
      }];
      const hd = [];
      for (let vd = 0; vd < Rd; vd += Kd) {
        const dd = Math.min(Rd, vd + Kd);
        hd.push({
          pixels: Xd.slice(vd * Wd, dd * Wd),
          layers: dd - vd
        })
      }
      return hd
    }
    md.d(Od, {
      d: () => Wd,
      h: () => Rd
    });
    const Fd = new WeakMap;

    function Rd(dd, Od, md) {
      var Wd, Rd;
      const Xd = null !== (Wd = Fd.get(dd)) && void 0 !== Wd ? Wd : new Map;
      Fd.set(dd, Xd);
      const Kd = null !== (Rd = Xd.get(Od[0])) && void 0 !== Rd ? Rd : [];
      Xd.set(Od[0], Kd);
      const hd = Kd.find((dd => dd.urls.length === Od.length && dd.urls.every(((dd, md) => dd === Od[md]))));
      if (hd) return hd.built;
      const vd = {
        urls: [...Od],
        built: md()
      };
      return Kd.push(vd), vd.built.catch((() => {
        Kd.splice(Kd.indexOf(vd), 1)
      })), vd.built
    }
  },
  40307: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Fd,
      e: () => hd,
      i: () => td
    });
    var Wd = md(38731);
    const Fd = 0,
      Rd = 3,
      Xd = 4,
      Kd = new Map([
        [Fd, Wd.c.ALPHA_ONEONE],
        [1, Wd.c.ALPHA_COMBINE],
        [2, Wd.c.ALPHA_ADD],
        [Rd, Wd.c.ALPHA_MULTIPLY],
        [-1, Wd.c.ALPHA_SUBTRACT]
      ]);

    function hd(dd) {
      var Od;
      return null !== (Od = Kd.get(dd)) && void 0 !== Od ? Od : dd
    }
    const vd = [Rd, 2],
      Qd = new Map;

    function td(dd) {
      if (dd === Xd) return vd;
      let Od = Qd.get(dd);
      return Od || (Od = [dd], Qd.set(dd, Od)), Od
    }
  },
  54022: (dd, Od, md) => {
    function Wd() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const Od = new Set;
      return (md, Wd) => {
        Od.has(md) || (Od.add(md), console.warn(dd + Wd))
      }
    }
    md.d(Od, {
      b: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);