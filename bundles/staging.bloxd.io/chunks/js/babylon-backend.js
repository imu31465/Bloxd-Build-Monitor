export const id = 0;
export const ids = [0];
export const modules = {
  42196: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CapeMaterialPlugin: () => Ee,
      HueTintMaterialPlugin: () => ge,
      LifeformMaterialPlugin: () => Oe,
      OverlayMaterialPlugin: () => de
    });
    var ye = He(42201),
      be = He(38850);
    class Me extends((0, ye.e)(be.c)) {}(0, ye.h)(be.c, Me);
    var Ke = He(38126);
    class Ue extends((0, ye.e)(Ke.f)) {}(0, ye.h)(Ke.f, Ue);
    var Fe = He(38685);
    class Je extends((0, ye.e)(Fe.g)) {}(0, ye.h)(Fe.g, Je);
    var oe = He(38146),
      Re = He(41380),
      ke = He(38141);
    class qe extends((0, ye.e)(ke.f)) {
      constructor(ee, ie, He) {
        super(ee, ie, He), (0, oe.i)(ee)
      }
      dispose(ee) {
        (0, oe.m)(this._material), super.dispose(ee)
      }
    }(0, ye.h)(ke.f, qe), (0, ke.j)({
      disableUnusedSpecularTerm: ye.d,
      isLightingDisabled: ee => ee instanceof Re.StandardMaterial && ee.disableLighting
    });
    var fe = He(39479);
    class Te extends((0, ye.e)(fe.g)) {}(0, ye.h)(fe.g, Te);
    var pe = He(39577),
      Xe = He(38026),
      ze = He(38949),
      Be = He(38137);
    class Ee extends((0, ye.e)(pe.c)) {}(0, ye.h)(pe.c, Ee);
    class ge extends((0, ye.e)(Xe.b)) {}(0, ye.h)(Xe.b, ge);
    class Oe extends((0, ye.e)(ze.m)) {}(0, ye.h)(ze.m, Oe);
    class de extends((0, ye.e)(Be.d)) {}(0, ye.h)(Be.d, de)
  },
  44740: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      addBabylonLights: () => Di,
      createSceneParticleSystem: () => Vi,
      default: () => ci
    });
    var ye = He(44748),
      be = (He(41092), He(42193), He(41601), He(44758)),
      Me = He(38020),
      Ke = He(37913),
      Ue = He(44769),
      Fe = He(44778),
      Je = He(38075),
      oe = (He(42201), He(44789)),
      Re = He(44783),
      ke = He(39508),
      qe = He(44791),
      fe = He(40954),
      Te = He(39492);
    const pe = "gpuParticles",
      Xe = "gpuParticlesSummed",
      ze = Te.v,
      Be = ee => ee / 4,
      Ee = (ee, ie, He, ye) => Array.from({
        length: ie
      }, ((be, Me) => `(${((ee,ie,He)=>0===ie?`${ee} < 1`:ie===He-1?`${ee} >= ${ie}`:`${ee} == ${ie}`)(ee,Me,ie)} ? ${He(Me)} : ${ye})`)).join("\n\t\t+ "),
      ge = (ee, ie, He) => `vec4 ${ee}(int i) {\n\treturn ${Ee("i",He,(ee=>`gpuParticleSystem[${ie+ee}]`),"vec4(0.0)")};\n}\n`,
      Oe = `\n${ge("colorPositionsAt",Be(ze.colorPositions),Te.b/4)}\n${ge("color1At",Be(ze.color1),Te.b)}\n${ge("color2At",Be(ze.color2),Te.b)}\n${ge("velocityAt",Be(ze.Op),Te.b)}\n${ge("remapStopAt",Be(ze.remap),Te.b)}\nfloat componentAt(vec4 v, int j) {\n\treturn ${Ee("j",4,(ee=>`v[${ee}]`),"0.0")};\n}\n`,
      de = (ee, ie, He, ye) => ee ? `${He}(${ye})` : `gpuParticleSystem[${ie} + ${ye}]`,
      We = ee => `gpuParticleSystem[${ee>>2}].${"xyzw"[3&ee]}`,
      te = ee => `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Te.b}\n#define COLOR_POSITIONS ${Be(ze.colorPositions)}\n#define COLOR1 ${Be(ze.color1)}\n#define COLOR2 ${Be(ze.color2)}\n#define VELOCITY ${Be(ze.Op)}\n#define REMAP ${Be(ze.remap)}\n#define RECORDS_PER_ROW ${Te.l}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Te.n/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${We(ze.gravity)}, ${We(ze.gravity+1)}, ${We(ze.gravity+2)}); }\nint colorCount() { return int(${We(ze.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Be(ze.colorDead)}]; }\nint velocityCount() { return int(${We(ze.velocityCount)}); }\nint remapCount() { return int(${We(ze.remapCount)}); }\n${ee?Oe:""}\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn ${ee?"componentAt(colorPositionsAt(i / 4), i % 4)":"gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4]"};\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(${de(ee,"COLOR1","color1At","i")}, ${de(ee,"COLOR2","color2At","i")}, random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = ${de(ee,"VELOCITY","velocityAt","i")};\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = ${de(ee,"VELOCITY","velocityAt","i")}.x * life;\n\t\tfloat b = ${de(ee,"VELOCITY","velocityAt","i + 1")}.x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(${de(ee,"VELOCITY","velocityAt","n - 1")}.x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = ${de(ee,"REMAP","remapStopAt","n - 1")}.yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = ${de(ee,"REMAP","remapStopAt","i")};\n\t\t\tvec4 b = ${de(ee,"REMAP","remapStopAt","i + 1")};\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`,
      Ze = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    fe.d.ShadersStore[`${pe}VertexShader`] = te(!1), fe.d.ShadersStore[`${pe}PixelShader`] = Ze, fe.d.ShadersStore[`${Xe}VertexShader`] = te(!0), fe.d.ShadersStore[`${Xe}PixelShader`] = Ze;
    const we = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      De = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Pe = He(39488),
      Ae = He(44799);
    class Ye extends Pe.d {
      constructor(ee, ie, He, ye) {
        super(ee, ie, He), this.renderer = He, this.yp = ye, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(Te.n), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Ae.g)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (ee, ie) => {
          const {
            engine: He
          } = this, ye = He._gl;
          He._bindTextureDirectly(ye.TEXTURE_2D, this.records, !0), He._unpackFlipY(!1);
          const be = this.ring.recordBits;
          for (let Me = ee; Me < ie;) {
            const ee = Math.floor(Me / Te.l),
              He = Math.min(ie, (ee + 1) * Te.l);
            ye.texSubImage2D(ye.TEXTURE_2D, 0, Me % Te.l * 4, ee, 4 * (He - Me), 1, ye.RGBA_INTEGER, ye.UNSIGNED_INT, be, Me * Te.c), Me = He
          }
          He._bindTextureDirectly(ye.TEXTURE_2D, null)
        }, this.id = ee;
        const be = ye.Nf();
        this.engine = be;
        const Me = Math.max(1, ie),
          Ke = Math.min(Me, Te.l);
        this.records = be.createRawTexture(null, 4 * Ke, Math.ceil(Me / Ke), oe.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, oe.c.TEXTURE_NEAREST_SAMPLINGMODE, null, oe.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.yp.getAnimationRatio() || 1;
        const ie = this.yp.getFrameId();
        if (ie === this.animatedFrame) return !1;
        const He = super.animate(ee);
        return He && (this.animatedFrame = ie, this.ring.takeUploads(this.uploadSlots)), He
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(ee) {
        (0, Ae.h)(this, this.uniforms, this.uniformBits, ee);
        for (const He of Te.r) this.uniforms[He] = this.uniformBits[He];
        var ie;
        (0, Ae.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (ie = this.ramp) || void 0 === ie || ie.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Re.c.CreateRGBATexture(this.rampTexels.texels, Te.i, 1, this.yp, !1, !1, oe.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var ee;
        this.records.dispose(), null === (ee = this.ramp) || void 0 === ee || ee.dispose(), this.ramp = null
      }
    }
    const Ve = "the context was lost before the programs linked";
    class ae {
      constructor(ee, ie) {
        this.yp = ee, this.reportFailure = ie, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.linkingPair = !1, this.pairFailure = null, this.shader = pe, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, qe.b)(), this.engine = ee.Nf(), this.whiteRamp = Re.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, ee, !1, !1, oe.c.TEXTURE_NEAREST_SAMPLINGMODE);
        const He = this.linkPair(pe),
          ye = null !== He && He !== Ve ? this.linkPair(Xe) : He;
        null === ye && null !== He ? (console.warn(`GPU particles link their fallback here: ${He}`), this.reportFailure(He, !0)) : null !== ye && this.fail(ye === Ve ? Ve : null !== He && void 0 !== He ? He : ye)
      }
      bC(ee, ie) {
        const He = Te.l * this.engine.getCaps().maxTextureSize;
        ie > He && this.warnOnce(`capacity:${ee}`, `particle system ${ee} holds ${He} particles, not ${ie}: its records texture's limit`);
        const ye = new Ye(ee, Math.min(ie, He), this, this.yp);
        return this.yp.addParticleSystem(ye), ye
      }
      canDraw(ee) {
        var ie, He;
        if (this.failed || null === (ie = ee.texture) || void 0 === ie || null === (He = ie.mirror) || void 0 === He || !He.isReady()) return !1;
        for (const ye of (0, ke.p)(ee.blendMode))
          if (!this.effectFor(ye).isReady()) return !1;
        return !0
      }
      disposeStopped(ee) {
        this.yp._toBeDisposed.push(ee)
      }
      remove(ee) {
        this.yp.removeParticleSystem(ee), ee.releaseGl()
      }
      render(ee) {
        var ie;
        if (!ee.isReady() || !ee.hasLiveParticles()) return 0;
        const {
          engine: He,
          yp: ye,
          frame: be
        } = this;
        ee.prepareDraw(this.warnOnce), ee.drawOffset(be, 0), be[3] = ee.drawTime();
        const Me = ee.ring.drawStart(),
          Ke = ee.ring.drawCount(),
          Ue = null !== (ie = ee.ramp) && void 0 !== ie ? ie : this.whiteRamp;
        He.setState(!1);
        for (const Fe of (0, ke.p)(ee.blendMode)) {
          const ie = this.effectFor(Fe);
          He.enableEffect(ie), ie.setTexture("gpuParticleTexture", ee.texture.mirror), ie.setTexture("gpuParticleRampTexture", Ue), ie._bindTexture("gpuParticleRecords", ee.records), ie.setMatrix("gpuParticleView", ye.getViewMatrix()), ie.setMatrix("gpuParticleProjection", ye.getProjectionMatrix()), ie.setFloatArray4("gpuParticleSystem", ee.uniforms), ie.setFloat4("gpuParticleFrame", be[0], be[1], be[2], be[3]), ie.setFloat2("gpuParticleRange", Me, Ke), ie.setFloat("gpuParticleRamp", ee.uniforms[Te.v.ramp]), He.bindBuffers(this.vertexBuffers, null, ie), He.setAlphaMode((0, ke.l)(Fe)), He.drawArraysType(oe.c.MATERIAL_TriangleStripDrawMode, 0, 4, Ke), ie._bindTexture("gpuParticleRecords", null)
        }
        return He.setAlphaMode(oe.c.ALPHA_DISABLE), Ke
      }
      linkPair(ee) {
        this.shader = ee, this.pairFailure = null, this.linkingPair = !0;
        try {
          return this.effect = this.createEffect(ee, ""), this.multiplyEffect = this.createEffect(ee, "#define MULTIPLY_PASS"), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect), this.pairFailure
        } finally {
          this.linkingPair = !1
        }
      }
      awaitLink(ee) {
        const ie = ee.getPipelineContext(),
          He = this.gl();
        He && null === this.pairFailure && (!ie || ie.isParallelCompiled && !ie.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : ie.isParallelCompiled && ie.program && (He.getProgramParameter(ie.program, He.LINK_STATUS) || this.programFailed(function(ee, ie, He) {
          if (ee.isContextLost()) return Ve;
          for (const [ye, be] of [
              ["VERTEX SHADER", ie.vertexShader],
              ["FRAGMENT SHADER", ie.fragmentShader]
            ]) {
            const ie = be && !ee.getShaderParameter(be, ee.COMPILE_STATUS) ? ee.getShaderInfoLog(be) : null;
            if (ie) return `${ye} ${ie}`
          }
          return ee.getProgramInfoLog(He) || "a program did not link"
        }(He, ie, ie.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(ee) {
        return ee === ke.d ? this.multiplyEffect : this.effect
      }
      createEffect(ee, ie) {
        return this.engine.createEffect(ee, [], we, De, ie, void 0, void 0, ((ie, He) => {
          var ye;
          ee === this.shader && this.programFailed(null !== (ye = this.gl()) && void 0 !== ye && ye.isContextLost() ? Ve : function(ee) {
            const ie = ee.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(ie) ? "a program failed, its log not in this browser's stack" : ie.replace(/^Error: /, "")
          }(He))
        }))
      }
      programFailed(ee) {
        this.linkingPair ? this.pairFailure ??= ee : this.fail(ee)
      }
      fail(ee) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${ee}`), this.reportFailure(ee, !1);
          for (const ee of this.yp.zW.slice()) ee instanceof Ye && ee.disposeOnStop && ee.dispose()
        }
      }
    }
    var ce = He(40913);
    class xe extends ce.b {
      createEffect() {
        const ee = super.createEffect(...arguments);
        return Ce(ee), Le.has(ee) || (Le.add(ee), ee.onCompileObservable.add((() => {
          Ce(ee)
        }))), ee
      }
    }
    const Le = new WeakSet;

    function Ce(ee) {
      ee._vertexSourceCodeBeforeMigration = "", ee._fragmentSourceCodeBeforeMigration = ""
    }
    var ve = He(41306),
      ue = He(42177),
      me = He(41067),
      le = He(41273),
      Se = He(41269),
      ne = He(41195),
      je = He(42244),
      se = He(38341),
      Ie = He(44803),
      he = He(44806),
      Ne = He(44812),
      Ge = He(41216),
      re = He(3084),
      Qe = He(38209),
      ei = He(41437),
      ii = He(38284),
      Hi = He(38227);

    function yi(ee) {
      if (ee.visibility < 1 || !ee.isVisible || !ee.isEnabled() || ee.metadata[Hi.d] || !ee.isReady()) return !0;
      const ie = ee.pW;
      if (!ie || 0 === ie.length) return !0;
      for (let He = 0; He < ie.length; He++) {
        const ye = ie[He],
          be = ye.iT();
        if (!be || !be.isReadyForSubMesh(ee, ye, !1)) return !0
      }
      return !1
    }
    class bi {
      constructor(ee, ie) {
        this.uk = ee, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, ie.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      gR(ee) {
        var ie;
        const He = this.armed;
        if (this.armed = !1, this.vis = null, !He) return !1;
        this.culled = 0;
        const {
          uk: ye
        } = this, be = null === (ie = ye.iW) || void 0 === ie ? void 0 : ie.visibility;
        if (!be || !ee || ye.PR.pT) return !1;
        if (!(ye.xR.KMe[0] >= ii.f)) return !1;
        const Me = ee.getProjectionMatrix().m;
        if (0 !== Me[15]) return !1;
        const Ke = ye.yq,
          Ue = ee.globalPosition,
          Fe = this.eye;
        return Fe[0] = Ue.x + Ke[0], Fe[1] = Ue.y + Ke[1], Fe[2] = Ue.z + Ke[2], !!be.eyeClear(Fe[0], Fe[1], Fe[2], ee.minZ, Me, ye.xR) && (this.vis = be, this.passable.clear(), this.count = 0, !0)
      }
      see(ee, ie) {
        const He = this.count++;
        if (He === this.cellSlots.length) {
          const ee = new Int32Array(2 * He);
          ee.set(this.cellSlots), this.cellSlots = ee
        }
        this.cellSlots[He] = ie, this.meshes[He] = ee
      }
      seeThrough(ee) {
        this.passable.add(ee)
      }
      finish(ee, ie) {
        const {
          vis: He,
          eye: ye,
          meshes: be,
          count: Me,
          cellSlots: Ke
        } = this, {
          xR: Ue
        } = this.uk, [Fe, Je] = Ue.KMe, oe = null !== He && He.update(ye[0], ye[1], ye[2], Ue.ER, Fe, Je, this.passable);
        let Re = 0;
        for (let ke = 0; ke < Me; ke++) {
          const ye = be[ke];
          if (oe) {
            const ee = 3 * Ke[ke];
            if (ee >= 0 && !He.isDrawn(ie[ee], ie[ee + 1], ie[ee + 2])) {
              Re++;
              continue
            }
          }
          Ge.f.prototype.push.call(ee, ye)
        }
        be.fill(null, 0, Me), this.count = 0, this.vis = null, this.culled = Re
      }
    }
    var Mi = He(38265),
      Ki = He(38220),
      Ui = He(41414),
      Fi = He(44815),
      Ji = He(41421),
      oi = He(41323);
    let Ri = 1;
    const ki = new WeakSet;

    function qi() {
      return Ri
    }

    function fi() {
      Ri = Ri >= 1073741823 ? 1 : Ri + 1
    }

    function Ti(ee) {
      const ie = ee.metadata;
      if (!ie || !0 !== ie[Qe.s]) return;
      const He = ie[Qe.y],
        ye = null === He || void 0 === He ? void 0 : He._noaStamps;
      if (!He || !ye) return;
      const be = He.entries.indexOf(ee);
      be >= 0 && (ye[be] = 0)
    }

    function Xi(ee) {
      const ie = ee.pW;
      for (let He = 0; He < ie.length; He++) {
        const ee = ie[He].iT();
        if (ee && !ee.isFrozen) return !1
      }
      for (let He = 0; He < ie.length; He++) {
        const ee = ie[He].iT();
        ee && ki.add(ee)
      }
      return !0
    }
    let zi = !1;
    const Bi = new WeakSet;

    function Ei(ee, ie) {
      const He = ee[ie];
      if ("function" !== typeof He) throw new Error(`terrainDrawState: Babylon has no ${ie} to hook`);
      return He
    }

    function gi(ee, ie, He, ye, be) {
      const Me = He.xR.ER,
        Ke = new Map;
      let Ue = 0;
      const Fe = new bi(He, ee),
        Je = new Mi.c(Me, ee.Nf());
      ! function(ee) {
        if (Bi.has(ee) || (Bi.add(ee), ee.onContextLostObservable.add(fi), ee.hf.add(fi)), zi) return;
        zi = !0;
        const ie = Fi.c.prototype,
          He = Ei(ie, "_markSubMeshesAsDirty");
        Object.assign(ie, {
          _markSubMeshesAsDirty(ee) {
            He.call(this, ee), Ti(this)
          }
        });
        const ye = Ei(oi.d.prototype, "_syncParentEnabledState");
        Object.assign(oi.d.prototype, {
          _syncParentEnabledState() {
            ye.call(this), Ti(this)
          }
        });
        const be = Ei(Ji.b.prototype, "resetDrawCache");
        Ji.b.prototype.resetDrawCache = function(ee, ie) {
          be.call(this, ee, ie), Ti(this.getMesh())
        };
        const Me = Ui.e.prototype,
          Ke = Ei(Me, "markDirty");
        Me.markDirty = function(ee) {
          Ke.call(this, ee), ki.has(this) && fi()
        };
        const Ue = Ei(Me, "_markAllSubMeshesAsDirty");
        Object.assign(Me, {
          _markAllSubMeshesAsDirty(ee) {
            Ue.call(this, ee), ki.has(this) && fi()
          }
        })
      }(ee.Nf());
      let oe = new Float64Array(384),
        Re = new Int32Array(64),
        ke = new Uint8Array(64),
        qe = new Float64Array(64),
        fe = new Int32Array(192),
        Te = 0;
      const pe = [],
        Xe = new Float64Array(24),
        ze = () => {
          const ee = pe.pop();
          return void 0 !== ee ? (Re[ee] = 0, ee) : (Te === Re.length && (oe = Oi(oe, new Float64Array(2 * oe.length)), Re = Oi(Re, new Int32Array(2 * Re.length)), ke = Oi(ke, new Uint8Array(2 * ke.length)), qe = Oi(qe, new Float64Array(2 * qe.length)), fe = Oi(fe, new Int32Array(2 * fe.length))), Te++)
        },
        Be = ee => {
          const ie = 6 * ee._noaSlot,
            He = ee.qMe[0],
            ye = ee.qMe[1];
          oe[ie] = He.x, oe[ie + 1] = He.y, oe[ie + 2] = He.z, oe[ie + 3] = ye.x, oe[ie + 4] = ye.y, oe[ie + 5] = ye.z
        },
        Ee = (ee, ie, He) => {
          if (!He) return Fe.see(ee, -1), !1;
          const ye = yi(ee);
          return ye && Fe.seeThrough(qe[ie]), Fe.see(ee, ie), !ye
        };
      let ge = -1;
      return ee.getActiveMeshCandidates = () => {
        const He = ee.frustumPlanes,
          ye = ie._selectionContent;
        ye.reset(), (He => {
          const ye = ee.frustumPlanes;
          Ue = Ue + 1 | 0 || 1;
          const be = ie.blocks,
            Me = Fe.gR(ee.activeCamera),
            Ke = Me && !0;
          if (Ke) {
            const ie = ee.Nf().currentRenderPassId;
            ie !== ge && (ge = ie, fi())
          }
          const Je = qi(),
            qe = Ke && !1;
          be.length > 0 && function(ee, ie) {
            for (let He = 0; He < 6; He++) {
              const ye = ee[He],
                be = ye.normal;
              ie[4 * He] = be.x, ie[4 * He + 1] = be.y, ie[4 * He + 2] = be.z, ie[4 * He + 3] = ye.d
            }
          }(ye, Xe);
          const Te = oe,
            pe = Re,
            ze = ke;
          for (let ee = 0; ee < be.length; ee++) {
            const ie = be[ee];
            if (!ei.d.IsInFrustum(ie.qMe, ye)) continue;
            const oe = ie.entries;
            {
              const ee = ie._noaSlots,
                ye = ie._noaStamps,
                be = ie._noaTerrain;
              for (let ie = 0; ie < oe.length; ie++) {
                const Re = ee[ie];
                if (pe[Re] !== Ue && (pe[Re] = Ue, ze[Re] = di(Te, 6 * Re, Xe) ? 1 : 0), 0 === ze[Re]) continue;
                const ke = oe[ie];
                if (Ke && ye[ie] === Je) qe && 1 === be[ie] && yi(ke) && 0, Fe.see(ke, 1 === be[ie] ? Re : -1);
                else if (Ke) {
                  ye[ie] = Je;
                  const ee = !0 === ke.metadata[Ki.h];
                  be[ie] = ee ? 1 : 0;
                  const He = Ee(ke, Re, ee);
                  !ee || He && Xi(ke) || (ye[ie] = 0)
                } else Me ? Ee(ke, Re, !0 === ke.metadata[Ki.h]) : Ge.f.prototype.push.call(He, ke)
              }
              continue
            }
          }
          Me && Fe.finish(He, fe)
        })(ye), Je.apply(ye, ee.activeCamera);
        const Me = ie.kMe;
        for (let ee = 0; ee < Me.length; ee++) {
          const ie = Me[ee];
          ie.isEnabled() && Ge.f.prototype.push.call(ye, ie)
        }
        return be(ye, He), ye
      }, {
        fMe: () => Fe.culled,
        Nbe: (ee, ie) => {
          const be = Math.floor(ie[0] / Me),
            Ue = Math.floor(ie[1] / Me),
            Fe = Math.floor(ie[2] / Me),
            Je = `${be}|${Ue}|${Fe}`;
          let oe = Ke.get(Je);
          if (!oe) {
            const ee = [0, 0, 0];
            He.NHe([be * Me - 1, Ue * Me - 1, Fe * Me - 1], null, ee), oe = Object.assign(ye(ee, Me + 2), {
              TMe: Je,
              pMe: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: ze()
            }), Be(oe), qe[oe._noaSlot] = (0, re.f)(be, Ue, Fe), fe[3 * oe._noaSlot] = be, fe[3 * oe._noaSlot + 1] = Ue, fe[3 * oe._noaSlot + 2] = Fe, Ke.set(Je, oe)
          }
          oe.pMe++, ee.metadata[Qe.B] = oe
        },
        gL: ee => {
          const ie = ee.metadata[Qe.B];
          ie && (ie.pMe--, ie.pMe <= 0 && (Ke.delete(ie.TMe), pe.push(ie._noaSlot)), ee.metadata[Qe.B] = null)
        },
        RMe: (ee, ie) => {
          const He = ee,
            ye = ie.metadata[Qe.B];
          (He._noaSlots ??= []).push(ye._noaSlot), (He._noaStamps ??= []).push(0), (He._noaTerrain ??= []).push(0), He.entries.push(ie)
        },
        removeEntry: (ee, ie) => {
          const He = ee,
            ye = He.entries,
            be = ye.indexOf(ie);
          if (be < 0) return;
          const Me = He._noaSlots,
            Ke = He._noaStamps,
            Ue = He._noaTerrain,
            Fe = ye.length - 1;
          ye[be] = ye[Fe], Me[be] = Me[Fe], Ke[be] = Ke[Fe], Ue[be] = Ue[Fe], ye.pop(), Me.pop(), Ke.pop(), Ue.pop()
        },
        Zie: ee => {
          for (const ie of Ke.values()) {
            ie.MMe.XMe(ee), ie.bMe.XMe(ee);
            for (const He of ie.qMe) He.XMe(ee);
            Be(ie)
          }
        }
      }
    }

    function Oi(ee, ie) {
      return ie.set(ee), ie
    }

    function di(ee, ie, He) {
      const ye = ee[ie],
        be = ee[ie + 1],
        Me = ee[ie + 2],
        Ke = ee[ie + 3],
        Ue = ee[ie + 4],
        Fe = ee[ie + 5];
      for (let Je = 0; Je < 24; Je += 4) {
        const ee = He[Je],
          ie = He[Je + 1],
          oe = He[Je + 2];
        if (!(ee * (ee >= 0 ? Ke : ye) + ie * (ie >= 0 ? Ue : be) + oe * (oe >= 0 ? Fe : Me) + He[Je + 3] >= 0)) return !1
      }
      return !0
    }
    var Wi = He(38597);
    class ti {
      constructor(ee, ie) {
        var He = ee.yp;
        He.Cbe(new Ne.b(He));
        var ye = new Ie.e(Fe);
        He.EMe = ye, ye.blocks = [];
        var be, Me = {},
          Ue = [];
        this.textPlanes = Ue, this.fMe = () => be.fMe(), this.Zie = ee => {
          oe(ye, ee), be.Zie(ee)
        }, this.Nbe = (ie, He, Ke) => {
          if (!ie.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!ie.metadata[Qe.y] && !ie.metadata[Qe.p]) {
            if (!He) {
              var Fe = ye.kMe;
              if (ie.metadata[Qe.F] && !ie.parent) {
                Fe = Ue;
                var oe = ie.WC().OMe;
                ie.metadata[Qe.H] = oe.center.length() + oe.radius, ie.Gf = !0
              }
              return Fe.push(ie), ie.metadata[Qe.l] = Fe, void(ie.metadata[Qe.p] = !0)
            }
            var ke = Math.floor(Ke[0] / Je),
              qe = Math.floor(Ke[1] / Je),
              fe = Math.floor(Ke[2] / Je),
              Te = ke + "|" + qe + "|" + fe,
              pe = Me[Te];
            if (!pe) {
              var Xe = [ke * Je, qe * Je, fe * Je],
                ze = [0, 0, 0];
              ee.uk.NHe(Xe, null, ze), pe = Re(ze, Je), ye.blocks.push(pe), Me[Te] = pe, pe.TMe = Te
            }
            be.Nbe(ie, Ke), be.RMe(pe, ie), pe.pMe = (pe.pMe || 0) + 1, ie.metadata[Qe.y] = pe, ie.metadata[Qe.s] = !0, ie.Gf = !0
          }
        }, this.gL = ee => {
          if (ee.metadata) {
            ee.metadata[Qe.p] && ((0, re.n)(ee.metadata[Qe.l], ee), ee.metadata[Qe.p] = !1), ee.metadata[Qe.l] === Ue && (ee.Gf = !1), ee.metadata[Qe.l] = void 0, ee.metadata[Qe.H] = void 0;
            var ie = ee.metadata[Qe.y];
            ie && ie.entries && (ee.metadata[Qe.s] && be.removeEntry(ie, ee), ie.pMe--, ie.pMe <= 0 && (delete Me[ie.TMe], (0, re.n)(ye.blocks, ie))), be.gL(ee), ee.metadata[Qe.y] = null, ee.metadata[Qe.s] = !1
          }
        }, this.bie = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (ee.metadata[Qe.y]) {
            if (ee.metadata[Qe.s] === ie) return;
            var He = ee.metadata[Qe.y];
            He && He.entries && (ie ? be.RMe(He, ee) : be.removeEntry(He, ee)), ee.metadata[Qe.s] = ie
          } else {
            if (ee.metadata[Qe.p] === ie) return;
            var Me = ee.metadata[Qe.l] || ye.kMe;
            ie ? Me.push(ee) : (0, re.n)(Me, ee), ee.metadata[Qe.p] = ie
          }
        };
        var Fe = () => {},
          Je = ie * ee.uk.xR.ER,
          oe = (ee, ie) => {
            ee.blocks.forEach((ee => {
              ee.MMe.XMe(ie), ee.bMe.XMe(ie), ee.qMe.forEach((ee => ee.XMe(ie))), ee.blocks && oe(ee, ie)
            }))
          },
          Re = (ee, ie) => {
            var He = new Ke.rf(ee[0], ee[1], ee[2]),
              ye = new Ke.rf(ee[0] + ie, ee[1] + ie, ee[2] + ie);
            return new he.c(He, ye, void 0, void 0, void 0, Fe)
          };
        be = gi(He, ye, ee.uk, Re, ((ee, ie) => {
          for (var He = 0; He < Ue.length; He++) {
            var ye = Ue[He];
            ye.isEnabled(!1) && ((0, Wi.d)(ye, ie) && Ge.f.prototype.push.call(ee, ye))
          }
        }))
      }
    }

    function Zi(ee) {
      const {
        holderPosition: ie,
        holderRotation: He,
        Z8: ye,
        fov: be,
        near: Me,
        far: Ke
      } = ee.model.W8, Ue = ee.PMe;
      Ue.position.wie(ie[0], ie[1], ie[2]), Ue.rotation.wie(He[0], He[1], He[2]);
      const Fe = ee.camera;
      Fe.position.wie(ye[0], ye[1], ye[2]), Fe.fov = be, Fe.minZ = Me, Fe.maxZ = Ke
    }

    function wi(ee) {
      const ie = ee.Nf(),
        He = ie,
        ye = He._gl;
      if (!ye || He.dT < 2 || ie.Gbe || ye.getParameter(ye.DEPTH_BITS) < 24) return !1;
      const be = ee._renderingManager,
        Me = be.getRenderingGroup(-1),
        Ke = be.getRenderingGroup(0),
        Ue = le.b.prototype.render;
      return Me.render = function(ee, ie, He, ye, be, Me, Fe, Je, oe) {
        (ee || Ke._empty) && Ue.call(this, ee, ie, He, ye, be, Me, Fe, Je, oe)
      }, Ke.render = function(ee, He, be, Ke) {
        let Fe = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Je = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Re = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          ke = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qe = arguments.length > 8 ? arguments[8] : void 0;
        ee ? Ue.call(this, ee, He, be, Ke, Fe, Je, Re, ke, qe) : (ie.setAlphaMode(oe.c.ALPHA_DISABLE), Ue.call(this, null, !1, !1, Ke, Fe, Je, Re, !1), Me._empty || (ye.depthRange(1, 1), Ue.call(Me, null, He, be, Ke, Fe, Je, Re, ke, qe), ye.depthRange(0, 1)), Ue.call(this, null, He, be, Ke, !1, !1, !1, ke, qe))
      }, !0
    }

    function Di(ee, ie) {
      return [ie, se.e].map(((ie, He) => {
        const ye = new be.b("light", Ke.rf.FromArray(ie), ee);
        return ye.diffuse = Me.Color3.FromArray([1, 1, 1]), ye.specular = Me.Color3.FromArray([1, 1, 1]), ye.intensity = se.d[He], ye
      }))
    }
    class Pi extends Fe.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(ee) {
        var ie;
        this.heldTexture = ee, this.particleTexture = null !== (ie = null === ee || void 0 === ee ? void 0 : ee.mirror) && void 0 !== ie ? ie : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let ee = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        ee && (this.particleTexture = null, (0, Je.A)(this.heldTexture), this.heldTexture = null), super.dispose(ee, ie, He)
      }
    }

    function Ai(ee, ie, He, ye) {
      return ie && !ie.failed ? ie.bC(He, ye) : new Pi(He, ye, ee)
    }
    const Yi = new WeakMap;

    function Vi(ee, ie, He) {
      var ye;
      let be = null !== (ye = Yi.get(ee)) && void 0 !== ye ? ye : null;
      return !be && ee.Nf().dT >= 2 && (be = new ae(ee, (ie => {
        console.error(`Particle programs failed in scene ${ee.uid}: ${ie}`)
      })), Yi.set(ee, be)), Ai(ee, be, ie, He)
    }
    const ai = ye.e.Zero();
    const ci = {
      Rbe: function(ee, ie) {
        return new xe(ee, ie.Ube, {
          preserveDrawingBuffer: ie.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      VMe: function(ee, ie) {
        ! function(ee, ie, He) {
          const ye = new ne.b(ee.engine);
          ee.yp = ye, ye.detachControl(), ye.autoClear = !1, Se.b.MIN_RENDERINGGROUPS = -1;
          for (let Me = Se.b.MIN_RENDERINGGROUPS; Me <= 1; Me++) ye.setRenderingOrder(Me, le.b.PainterSortCompare, le.b.PainterSortCompare, le.b.PainterSortCompare);
          ye.setRenderingAutoClearDepthStencil(0, !1), me.e.Enabled = !1, ee.ZMe = new ti(ee, Math.round(ie.wMe)), ee.PMe = new ue.b("camHolder", ye), ee.camera = new ve.e("camera", new Ke.rf(0, 0, 0), ye), ee.camera.parent = ee.PMe, Zi(ee), (0, se.f)(ee, ((ee, ie, He) => (0, je.h)(ie, He, ee.yp))), ye.clearColor = Me.e.FromArray(ie.clearColor), ye.ambientColor = Me.Color3.FromArray(ie.ambientColor);
          const be = He(ye, ie.YMe);
          ye.onNewLightAddedObservable.add((ee => {
            be.some((ie => ie === ee)) || console.error(`Light "${ee.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), ye.skipPointerMovePicking = !0
        }(ee, ie, Di), wi(ee.yp)
      },
      DMe: Zi,
      setBabylonFog: function(ee, ie, He, ye) {
        const be = ee.yp;
        be.fogMode = 3, be.fogStart = ie, be.fogEnd = He, be.fogColor.set(ye[0], ye[1], ye[2])
      },
      cMe: function(ee, ie, He) {
        return ee.engine.dT >= 2 && !ee.xMe && (ee.xMe = new ae(ee.yp, ee.LMe)), Ai(ee.yp, ee.xMe, ie, He)
      },
      vMe: function(ee, ie) {
        ee.yp.zW.forEach((He => {
          if (He instanceof Ye) return void He.Zie(ie, ee.uk.yq);
          const ye = He;
          if (ye.emitter.getConnectedParticleSystems)
            for (const ee of ye._particles) ee.position.set(ee.position.x - ie[0], ee.position.y - ie[1], ee.position.z - ie[2]);
          else {
            if (!ye.worldOffset) throw new Error("Particle system has no world offset");
            ye.worldOffset.x = -ee.uk.yq[0], ye.worldOffset.y = -ee.uk.yq[1], ye.worldOffset.z = -ee.uk.yq[2]
          }
        }))
      },
      linesFromArrays: function(ee, ie, He) {
        const ye = new Ue.d(ie, ee.yp, null, void 0, void 0, !1);
        return (0, je.f)(ie, He, ee.yp, ye), ye
      },
      bp: Ti,
      CMe: function(ee, ie) {
        return ai.origin.jD(ie.origin), ai.direction.jD(ie.direction), ai.length = ie.length, ai.epsilon = ie.epsilon, ai.CMe(ee, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  42201: (ee, ie, He) => {
    He.d(ie, {
      d: () => me,
      e: () => ze,
      h: () => Ie
    });
    var ye = He(41380),
      be = He(42210),
      Me = He(42250),
      Ke = He(42217),
      Ue = He(38650),
      Fe = He(38659),
      Je = He(38664),
      oe = He(38673),
      Re = He(38070),
      ke = He(38075),
      qe = He(42219),
      fe = He(38045),
      Te = He(38057),
      pe = He(38034);

    function Xe(ee, ie) {
      return Object.assign((function(ee, He, ye, be) {
        return ie(this.featureState, ee, He, ye, be)
      }), {
        oR: ee
      })
    }

    function ze(ee) {
      const ie = class extends qe.e {
          constructor(ie, He) {
            const ye = (0, Te.V)(ie),
              be = ye && (0, Te.y)(ye, ee.name);
            for (var Me = arguments.length, Ke = new Array(Me > 2 ? Me - 2 : 0), Ue = 2; Ue < Me; Ue++) Ke[Ue - 2] = arguments[Ue];
            super(ie, ee.name, ee.priority, be ? be.defines : ee.defines(...Ke), !1), this.featureState = void 0, this.featureState = He, this._pluginManager._addPlugin(this), this._enable(!0), (0, Te.A)(this._material, ee, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return ee.className
          }
          isCompatible(ee) {
            return ee === pe.b.GLSL || ee === pe.b.WGSL
          }
        },
        He = (0, fe.e)(ee);
      for (const [ye, be] of Object.entries(fe.c)) {
        const Me = ee[ye];
        if (Me) {
          const ee = He[ye];
          Object.defineProperty(ie.prototype, be, {
            value: Xe(Me, ee),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ie
    }
    class Be extends(ze(Ue.e)) {}
    var Ee = He(40913),
      ge = He(42223),
      Oe = He(42229);

    function de(ee, ie, He) {
      return (0, Oe.e)(He, ie.urls, (() => async function(ee, ie, He) {
        const {
          width: ye
        } = ee[0].getSize(), be = ee.map(((ee, He) => {
          var be;
          const Me = Math.round(ee.getSize().height / ye),
            Ke = null === ie || void 0 === ie ? void 0 : ie[He];
          return {
            pixels: Ke && Ke.byteLength === ye * ye * Me * 4 ? Ke : null !== (be = We.get(ee.getInternalTexture())) && void 0 !== be ? be : ee._readPixelsSync(),
            layers: Me
          }
        })), Me = Math.min(He.Nf().getCaps().texture2DArrayMaxLayerCount, 256), Ue = (0, Oe.c)(be, ye, Me).map((ee => {
          let {
            pixels: ie,
            layers: be
          } = ee;
          return {
            atlas: new ge.c(ie, ye, ye, be, Ee.b.TEXTUREFORMAT_RGBA, He, !0, !1, Ke.d.NEAREST_NEAREST_MIPLINEAR),
            layers: be
          }
        }));
        return ee.forEach(((ee, ie) => {
          const ye = ee.getInternalTexture();
          We.has(ye) || (! function(ee, ie) {
            const He = ie.createRawTexture(new Uint8Array(4), 1, 1, Ee.b.TEXTUREFORMAT_RGBA, !1, !1, Ke.d.NEAREST_SAMPLINGMODE);
            ee._hardwareTexture.release(), ie.unbindAllTextures(), He._swapAndDie(ee, !1)
          }(ye, He.Nf()), We.set(ye, be[ie].pixels))
        })), Ue
      }(ee, ie.pixels, He)))
    }
    const We = new WeakMap;
    var te = He(38682);
    class Ze extends(ze(Fe.k)) {
      constructor(ee, ie) {
        super(ee, ie), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ie.textures.map((ee => ee.mirror)), ie.useWebGL2 && !ie.imagesPerAtlas.length && ie.textureAtlases.splice(0, ie.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((ee, ie) => {
          ee.onLoadObservable.add((ee => {
            this.setTextureArrayData(ee, ie).catch((ee => {
              console.error(`Failed to build the texture arrays, at atlas ${ie}`, ee)
            }))
          }))
        })), (0, te.l)(ie, ee.shaderLanguage)
      }
      async setTextureArrayData(ee, ie) {
        const He = this.featureState,
          {
            width: ye,
            height: be
          } = ee.getSize(),
          Me = this._material.shaderLanguage;
        if (!He.useWebGL2) return void(0, te.f)(this._material, He, ie, ye, Math.round(be / ye), Me);
        if (this.loaded.add(ie), this.loaded.size < this.mirrors.length) return;
        const Ke = await de(this.mirrors, He.sources, this._material.Xx());
        (0, te.d)(this._material, He, Ke, ye, Me)
      }
    }
    var we = He(42233),
      De = He(41429),
      Pe = He(37913),
      Ae = He(42240),
      Ye = He(41535),
      Ve = He(41421),
      ae = He(42177),
      ce = He(38314),
      xe = He(42244);
    class Le extends we.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Ce = {
      Mesh: Ae.e,
      TransformNode: ae.b,
      bR: we.c,
      VertexBuffer: we.f,
      BoundingInfo: De.c,
      rf: Pe.rf,
      ArenaBuffer: Le,
      SubMesh: Ve.b,
      VertexData: Ye.e,
      MirroredGeometry: xe.b,
      meshFromArrays: xe.f,
      plainMeshFromArrays: xe.h
    };
    (0, ce.f)(Ce);
    var ve = He(38146);
    class ue extends(ze(oe.e)) {
      constructor(ee, ie) {
        if (super(ee, ie), ee instanceof ye.StandardMaterial && ie.dirLightCount > 0) {
          const ie = ee,
            He = ie._blockDirtyMechanism;
          ie._blockDirtyMechanism = !0, ee.disableLighting = !0, ie._blockDirtyMechanism = He;
          const ye = (0, Te.V)(ee);
          ye && (ye.disableLighting = !0, (0, Te.S)(ye))
        }(0, ve.i)(ee)
      }
      dispose(ee) {
        (0, ve.m)(this._material), super.dispose(ee)
      }
    }

    function me(ee, ie) {
      if (!(ie instanceof ye.StandardMaterial) || ie.specularTexture) return;
      const {
        r: He,
        g: be,
        b: Me
      } = ie.specularColor;
      0 === He && 0 === be && 0 === Me && (ee.SPECULARTERM = !1)
    }(0, oe.d)({
      disableUnusedSpecularTerm: me
    });
    var le = He(38081),
      Se = He(38330);
    const ne = new RegExp(`^#define ${Je.c}\\s*$`, "m");
    class je extends(ze(Je.h)) {
      constructor(ee, ie) {
        super(ee, ie), this.xf = !1, ie.ditherOnlyWhileFading && (Se.f.add(ee), this.prewarmDitherTwins(ee))
      }
      prewarmDitherTwins(ee) {
        const ie = new WeakSet;
        ee.onEffectCreatedObservable.add((He => {
          let {
            effect: ye,
            subMesh: be
          } = He;
          if (this.featureState.prewarmingDither || ie.has(ye)) return;
          ie.add(ye);
          const Me = null === be || void 0 === be ? void 0 : be.getMesh();
          Me && !ne.test(ye.defines) && ee.Xx().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Me) || ie.delete(ye)
          }))
        }))
      }
      prewarmDither(ee) {
        if (this.xf || ee.RZ()) return !1;
        const ie = new Ve.b(0, 0, 0, 0, 0, ee, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(ee, ie)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ie.effect
      }
      dispose(ee) {
        this.xf = !0, super.dispose(ee)
      }
    }
    const se = new Map;

    function Ie(ee, ie) {
      se.set(ee, ie)
    }
    Ie(Ue.e, Be), Ie(Fe.k, Ze), Ie(Je.h, je), Ie(oe.e, ue), (0, Re.d)({
      create: (ee, ie) => {
        const He = new ye.StandardMaterial(ee.name, ie);
        return (0, le.o)(ee, He), He.detailMap._pluginDefineNames
      },
      write: (ee, ie, He) => {
        (0, le.S)(ee.mirror, ie, He)
      },
      addFeature: (ee, ie, He) => {
        const ye = se.get(ie.feature);
        if (!ye) throw new Error(`${ie.feature.name} has no plugin class (registerPluginClass)`);
        new ye(ee.mirror, ie.state, ...He)
      },
      texture: (ee, ie, He) => {
        let {
          url: ye,
          noMipmap: be,
          invertY: Me,
          samplingMode: Ue,
          data: Fe,
          sets: Je
        } = He;
        if (!Fe) {
          const He = new Ke.d(ye, ie, be, Me, Ue);
          return Object.assign(He, Je), void(0, ke.F)(ee, He)
        }
        const oe = {},
          Re = new Promise(((ee, ie) => {
            oe.onLoad = ee, oe.onError = (ee, He) => {
              ie(new Error(`${Fe.context}: ${(null===He||void 0===He?void 0:He.message)||ee||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: qe,
            bytes: fe,
            label: Te
          } = Fe,
          pe = {
            noMipmap: be,
            invertY: !1,
            samplingMode: Ue,
            ...oe,
            mimeType: qe,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Xe = new Ke.d(null, ie, pe);
        le.q.set(Xe, Re), Object.assign(Xe, Je), Xe.updateURL(ye, fe);
        const ze = Xe.getInternalTexture();
        ze && (ze.label = Te), ee.uvSet = Xe.coordinatesIndex, ee.matrix.set((0, le.L)(Xe)), (0, ke.F)(ee, Xe)
      },
      cube: (ee, ie, He) => {
        let {
          rootUrl: ye,
          files: Me,
          noMipmap: Ue,
          luminance: Fe
        } = He;
        const {
          samplingMode: Je
        } = ee.sampler, oe = Je === (0, ke.y)(Ue) ? null : () => {
          (0, le.K)(Re, Je)
        }, Re = new be.c(ye, ie, null, Ue, Me, oe, null, (0, ke.u)(Fe));
        Re.coordinatesMode = Ke.d.SKYBOX_MODE, (0, ke.F)(ee, Re)
      },
      canvas: (ee, ie, He) => {
        let {
          width: ye,
          height: be,
          mipmaps: Ue,
          samplingMode: Fe,
          hasAlpha: Je = !1,
          wrap: oe = Ke.d.CLAMP_ADDRESSMODE
        } = He;
        const Re = new Me.d(ie, {
          width: ye,
          height: be
        }, ee, Ue, Fe);
        Re.hasAlpha = Je, Re.wrapU = oe, Re.wrapV = oe;
        const ke = (0, le.y)(Re);
        return (0, le.C)(ke, Re), ke
      }
    })
  },
  42244: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      f: () => Re,
      h: () => ke
    });
    var ye = He(42233),
      be = He(41175),
      Me = He(41429),
      Ke = He(41540),
      Ue = He(42240),
      Fe = He(41535),
      Je = He(38195);
    class oe extends Ke.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (ee, ie) => {
          this.releaseUnlessInstanced(ie)
        }, this.onLinked = null
      }
      link(ee) {
        var ie;
        (0, Je.k)(ee), this.model = ee, null === (ie = this.onLinked) || void 0 === ie || ie.call(this, ee)
      }
      relink() {
        this.release();
        const ee = [];
        for (const be of Object.values(this._vertexBuffers))
          if (!be.getIsInstanced()) {
            const {
              byteOffset: ie,
              byteStride: He,
              type: ye,
              normalized: Me
            } = be;
            ee.push({
              kind: be.getKind(),
              data: be.getData(),
              offset: ie,
              stride: He,
              components: be.getSize(),
              glType: ye,
              isNormalized: Me
            })
          } const ie = this._indices.length ? this._indices : null,
          {
            minimum: He,
            maximum: ye
          } = this.extend;
        this.link(new Je.c(ee, ie, this.getTotalVertices(), new Float64Array(He.Qbe()), new Float64Array(ye.Qbe())))
      }
      copy(ee) {
        if (!this.model) return super.copy(ee);
        const ie = new oe(ee, this.Xx()),
          He = this.eMe(void 0, !0);
        He && ie.setIndices(He);
        let Ke = !1;
        for (const Me in this._vertexBuffers) {
          const ee = this._vertexBuffers[Me],
            He = ee.getData();
          if (!He) continue;
          const Ue = ee.getSize(),
            {
              type: Fe,
              byteOffset: Je,
              byteStride: oe,
              normalized: Re
            } = ee;
          Ke ||= ee.isUpdatable();
          const ke = ee.getIsInstanced() ? (He instanceof Array ? 4 * He.length : He.byteLength) / oe : this.getTotalVertices(),
            qe = (0, be.s)(He, Ue, Fe, Je, oe, ke, !0),
            fe = {
              updatable: ee.isUpdatable(),
              stride: Ue,
              type: Fe,
              normalized: Re,
              takeBufferOwnership: !0,
              instanced: ee.getIsInstanced()
            };
          ie.setVerticesBuffer(new ye.f(this.Nf(), qe, Me, fe), ke)
        }
        return ie._updatable = Ke, ie._boundingInfo = new Me.c(this.extend.minimum, this.extend.maximum), ie.relink(), ie
      }
      static mergeMeshes(ee, ie, He, ye, be, Me) {
        const Fe = ee[0].Xx(),
          Je = new Ue.e(ee[0].name + "_merged", Fe),
          Re = new oe(Ke.b.RandomId(), Fe, void 0, !1, Je);
        try {
          if (!Ue.e.MergeMeshes(ee, ie, He, Je, be, Me)) return Je.dispose(), null
        } catch (ke) {
          throw Je.dispose(), ke
        }
        return Re.relink(), Je
      }
      removeVerticesData(ee) {
        this.releaseUnlessInstanced(ee), super.removeVerticesData(ee)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(ee) {
        var ie;
        ee && null !== (ie = this.getVertexBuffer(ee)) && void 0 !== ie && ie.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Je.q)(this.model), this.model = null)
      }
    }

    function Re(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ue.e(ee, He);
      const be = (0, Je.h)(ie),
        {
          positions: Me,
          normals: Re,
          uvs: ke,
          indices: qe,
          named: fe = {}
        } = ie,
        Te = new Fe.e;
      Te.positions = Me, Te.normals = null !== Re && void 0 !== Re ? Re : null, Te.uvs = null !== ke && void 0 !== ke ? ke : null, Te.indices = qe;
      const pe = new oe(Ke.b.RandomId(), He, Te, !1, ye);
      for (const {
          kind: Ke,
          components: Ue
        }
        of be.vertexAttributes) Ke in fe && ye.setVerticesData(Ke, fe[Ke], !1, Ue);
      return pe.link(be), ye
    }

    function ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const be = new Ue.e(ee, He),
        {
          positions: Me,
          normals: Ke,
          uvs: Je,
          indices: oe
        } = ie;
      return Object.assign(new Fe.e, {
        positions: Me,
        normals: Ke,
        uvs: Je,
        indices: oe
      }).applyToMesh(be, ye), be
    }
  },
  39492: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye,
      c: () => Ke,
      e: () => Me,
      i: () => be,
      l: () => Ue,
      n: () => Je,
      r: () => oe,
      v: () => Fe
    });
    const ye = 16,
      be = 256,
      Me = {
        position: 0,
        time: 3,
        direction: 4,
        lifeTime: 7,
        size: 8,
        seed: 9,
        colour: 12
      },
      Ke = 16,
      Ue = 256,
      Fe = {
        gravity: 0,
        colorCount: 3,
        colorDead: 4,
        velocityCount: 8,
        remapCount: 9,
        ramp: 10,
        colorPositions: 12,
        color1: 12 + ye,
        color2: 12 + 5 * ye,
        Op: 12 + 9 * ye,
        remap: 12 + 13 * ye
      },
      Je = 12 + 17 * ye,
      oe = [Fe.colorCount, Fe.velocityCount, Fe.remapCount, Fe.ramp]
  },
  39488: (ee, ie, He) => {
    He.d(ie, {
      d: () => pe,
      f: () => Be
    });
    var ye = He(37938),
      be = He(37913),
      Me = He(38075),
      Ke = He(39492);
    class Ue {
      constructor(ee) {
        this.bk = ee, this.records = void 0, this.recordBits = void 0, this.deaths = void 0, this.cursor = 0, this.highWater = 0, this.uploadFrom = -1, this.uploadTo = 0, this.wrapTo = 0;
        const ie = Math.max(1, ee);
        this.records = new Float32Array(ie * Ke.c), this.recordBits = new Uint32Array(this.records.buffer), this.deaths = new Float64Array(ie).fill(-1 / 0)
      }
      restart() {
        this.cursor = 0, this.highWater = 0
      }
      clear() {
        this.deaths.fill(-1 / 0), this.restart(), this.uploadFrom = -1, this.wrapTo = 0
      }
      freeSlot(ee) {
        const ie = this.bk;
        for (let He = 0; He < ie; He++) {
          const He = this.cursor;
          if (this.cursor = He + 1 === ie ? 0 : He + 1, this.deaths[He] <= ee) return He
        }
        return -1
      }
      written(ee, ie) {
        this.deaths[ee] = ie, ee >= this.highWater && (this.highWater = ee + 1), this.uploadFrom < 0 ? (this.uploadFrom = ee, this.uploadTo = ee + 1) : ee >= this.uploadFrom && 0 === this.wrapTo ? this.uploadTo = Math.max(this.uploadTo, ee + 1) : this.wrapTo = Math.max(this.wrapTo, ee + 1)
      }
      shiftTimes(ee) {
        const ie = this.records,
          He = this.highWater * Ke.c;
        for (let ye = Ke.e.time; ye < He; ye += Ke.c) ie[ye] -= ee;
        this.highWater > 0 && (this.uploadFrom = 0, this.uploadTo = this.highWater, this.wrapTo = 0)
      }
      takeUploads(ee) {
        this.uploadFrom >= 0 && (ee(this.uploadFrom, this.uploadTo), this.wrapTo > 0 && ee(0, this.wrapTo)), this.uploadFrom = -1, this.wrapTo = 0
      }
      liveCount(ee) {
        let ie = 0;
        for (let He = 0; He < this.highWater; He++) this.deaths[He] > ee && ie++;
        return ie
      }
      drawCount() {
        return this.highWater
      }
      drawStart() {
        return this.cursor < this.highWater ? this.cursor : 0
      }
    }
    var Fe = He(38020),
      Je = He(39499),
      oe = He(39503),
      Re = He(39508);
    class ke {
      constructor() {
        this.particleEmitterType = new oe.d, this.texture = null, this.blendMode = Re.h, this.emitRate = 10, this.manualEmitCount = -1, this.minLifeTime = 1, this.maxLifeTime = 1, this.minEmitPower = 1, this.maxEmitPower = 1, this.minSize = 1, this.maxSize = 1, this.updateSpeed = .01, this.gravity = be.rf.Zero(), this.worldOffset = new be.rf(0, 0, 0), this.color1 = new Fe.e(1, 1, 1, 1), this.color2 = new Fe.e(1, 1, 1, 1), this.colorDead = new Fe.e(0, 0, 0, 1), this.useRampGradients = !1, this.disposeOnStop = !1, this.colorGradients = null, this.velocityGradients = null, this.colorRemapGradients = null, this.rampGradients = null
      }
      get direction1() {
        var ee;
        return null !== (ee = qe(this).direction1) && void 0 !== ee ? ee : be.rf.Zero()
      }
      set direction1(ee) {
        const ie = qe(this);
        ie.direction1 && (ie.direction1 = ee)
      }
      get direction2() {
        var ee;
        return null !== (ee = qe(this).direction2) && void 0 !== ee ? ee : be.rf.Zero()
      }
      set direction2(ee) {
        const ie = qe(this);
        ie.direction2 && (ie.direction2 = ee)
      }
      get minEmitBox() {
        var ee;
        return null !== (ee = qe(this).minEmitBox) && void 0 !== ee ? ee : be.rf.Zero()
      }
      set minEmitBox(ee) {
        const ie = qe(this);
        ie.minEmitBox && (ie.minEmitBox = ee)
      }
      get maxEmitBox() {
        var ee;
        return null !== (ee = qe(this).maxEmitBox) && void 0 !== ee ? ee : be.rf.Zero()
      }
      set maxEmitBox(ee) {
        const ie = qe(this);
        ie.maxEmitBox && (ie.maxEmitBox = ee)
      }
      createBoxEmitter(ee, ie, He, ye) {
        const be = new oe.d;
        return this.particleEmitterType = be, be.direction1 = ee, be.direction2 = ie, be.minEmitBox = He, be.maxEmitBox = ye, be
      }
      addColorGradient(ee, ie, He) {
        return this.colorGradients ??= [], this.colorGradients.push(new Je.e(ee, ie, He)), this.colorGradients.sort(fe), this
      }
      removeColorGradient(ee) {
        return Te(this.colorGradients, ee), this
      }
      getColorGradients() {
        return this.colorGradients
      }
      addVelocityGradient(ee, ie, He) {
        return this.velocityGradients ??= [], this.velocityGradients.push(new Je.i(ee, ie, He)), this.velocityGradients.sort(fe), this
      }
      getVelocityGradients() {
        return this.velocityGradients
      }
      addColorRemapGradient(ee, ie, He) {
        return this.colorRemapGradients ??= [], this.colorRemapGradients.push(new Je.i(ee, ie, He)), this.colorRemapGradients.sort(fe), this
      }
      getColorRemapGradients() {
        return this.colorRemapGradients
      }
      addRampGradient(ee, ie) {
        return this.rampGradients ??= [], this.rampGradients.push(new Je.g(ee, ie)), this.rampGradients.sort(fe), this
      }
      removeRampGradient(ee) {
        return Te(this.rampGradients, ee), this
      }
      getRampGradients() {
        return this.rampGradients
      }
    }

    function qe(ee) {
      return ee.particleEmitterType
    }

    function fe(ee, ie) {
      return ee.gradient < ie.gradient ? -1 : ee.gradient > ie.gradient ? 1 : 0
    }

    function Te(ee, ie) {
      const He = ee ? ee.findIndex((ee => ee.gradient === ie)) : -1;
      He >= 0 && ee.splice(He, 1)
    }
    class pe extends ke {
      constructor(ee, ie, He) {
        super(), this.name = ee, this.host = He, this.onDispose = Xe, this.onAnimationEnd = null, this.ring = void 0, this.emitterValue = be.rf.Zero(), this.emitterDisposed = null, this.time = 0, this.epoch = 0, this.anchor = [0, 0, 0], this.shift = [0, 0, 0], this.liveUntil = -1 / 0, this.newPartsExcess = 0, this.started = !1, this.stopped = !1, this.alive = !1, this.xf = !1, this.emitterMatrix = new be.Matrix, this.inverseEmitterMatrix = new be.Matrix, this.spawned = {
          position: new be.rf,
          direction: new be.rf
        }, this.ring = new Ue(ie)
      }
      get emitter() {
        return this.emitterValue
      }
      set emitter(ee) {
        var ie;
        null === (ie = this.emitterDisposed) || void 0 === ie || ie.remove(), this.emitterDisposed = null, this.emitterValue = ee, ee && Ee(ee) && (this.emitterDisposed = ee.Bx.add((() => {
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
        return !this.xf && null !== this.emitterValue && this.host.canDraw(this)
      }
      dispose() {
        var ee;
        let ie = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this.xf || (this.xf = !0, null === (ee = this.emitterDisposed) || void 0 === ee || ee.remove(), this.emitterDisposed = null, ie && ((0, Me.A)(this.texture), this.texture = null), this.host.remove(this), this.onDispose())
      }
      reset() {
        this.liveUntil = -1 / 0, this.alive = !1, this.ring.clear()
      }
      getActiveCount() {
        return this.ring.liveCount(this.time)
      }
      animateIfActive(ee) {
        const ie = this.emitter;
        return !!ie && !(Ee(ie) && !ie.isEnabled()) && this.animate(ee)
      }
      animate(ee) {
        if (!this.started) return !1;
        if (!this.isReady()) return this.endIfSpent(), !1;
        const ie = this.updateSpeed * ee;
        let He;
        return this.manualEmitCount > -1 ? (He = this.manualEmitCount, this.newPartsExcess = 0, this.manualEmitCount = 0) : (He = this.emitRate * ie | 0, this.newPartsExcess += this.emitRate * ie - He), this.newPartsExcess > 1 && (He += this.newPartsExcess | 0, this.newPartsExcess -= this.newPartsExcess | 0), this.stopped && (He = 0), this.alive = this.liveUntil > this.time, this.time += ie, this.time - this.epoch > 4096 && (this.ring.shiftTimes(this.time - this.epoch), this.epoch = this.time), He > 0 && this.spawn(He), !(this.stopped && !this.alive && this.end()) && (0 === this.manualEmitCount && this.disposeOnStop && (this.stopped = !0), !0)
      }
      endIfSpent() {
        this.started && this.stopped && !this.xf && !this.hasLiveParticles() && (this.manualEmitCount > 0 && (this.manualEmitCount = 0), this.end())
      }
      end() {
        var ee;
        return this.started = !1, null === (ee = this.onAnimationEnd) || void 0 === ee || ee.call(this), !!this.xf || !!this.disposeOnStop && (this.host.disposeStopped(this), !0)
      }
      hasLiveParticles() {
        return this.liveUntil > this.time
      }
      drawOffset(ee, ie) {
        ee[ie] = this.anchor[0] + this.shift[0] + this.worldOffset.x, ee[ie + 1] = this.anchor[1] + this.shift[1] + this.worldOffset.y, ee[ie + 2] = this.anchor[2] + this.shift[2] + this.worldOffset.z
      }
      drawTime() {
        return this.time - this.epoch
      }
      Zie(ee, ie) {
        this.emitterValue && Ee(this.emitterValue) ? (this.shift[0] -= ee[0], this.shift[1] -= ee[1], this.shift[2] -= ee[2]) : this.worldOffset.set(-ie[0], -ie[1], -ie[2])
      }
      spawn(ee) {
        var ie, He;
        const Me = this.emitterValue,
          Ue = Ee(Me) ? Me.getWorldMatrix() : be.Matrix.TranslationToRef(Me.x, Me.y, Me.z, this.emitterMatrix);
        Ue.invertToRef(this.inverseEmitterMatrix);
        const {
          position: Fe,
          direction: Je
        } = this.spawned, oe = this.spawned, Re = this.ring, ke = this.liveUntil <= this.time;
        ke && (this.epoch = this.time, this.shift[0] = this.shift[1] = this.shift[2] = 0, Re.restart());
        const {
          records: qe,
          recordBits: fe
        } = Re, Te = Ke.e, pe = null === (ie = this.getColorGradients()) || void 0 === ie ? void 0 : ie[0], Xe = pe ? pe.color1 : this.color1, ze = pe ? null !== (He = pe.color2) && void 0 !== He ? He : pe.color1 : this.color2;
        for (let be = 0; be < ee; be++) {
          const ee = Re.freeSlot(this.time);
          if (ee < 0) break;
          const ie = (0, ye.RandomRange)(this.minLifeTime, this.maxLifeTime),
            He = (0, ye.RandomRange)(this.minEmitPower, this.maxEmitPower);
          this.particleEmitterType.startPositionFunction(Ue, Fe, oe, !1), this.particleEmitterType.startDirectionFunction(Ue, Je, oe, !1, this.inverseEmitterMatrix), 0 === He ? Je.set(0, 0, 0) : Je.scaleInPlace(He);
          const Me = (0, ye.RandomRange)(this.minSize, this.maxSize);
          ke && 0 === be && (this.anchor[0] = Fe.x, this.anchor[1] = Fe.y, this.anchor[2] = Fe.z);
          const pe = ee * Ke.c;
          qe[pe + Te.position] = Fe.x - this.anchor[0] - this.shift[0], qe[pe + Te.position + 1] = Fe.y - this.anchor[1] - this.shift[1], qe[pe + Te.position + 2] = Fe.z - this.anchor[2] - this.shift[2], qe[pe + Te.time] = this.time - this.epoch, qe[pe + Te.direction] = Je.x, qe[pe + Te.direction + 1] = Je.y, qe[pe + Te.direction + 2] = Je.z, qe[pe + Te.lifeTime] = ie, qe[pe + Te.size] = Me, fe[pe + Te.seed] = 4294967296 * Math.random() >>> 0;
          const Be = Math.random();
          qe[pe + Te.colour] = Xe.r + (ze.r - Xe.r) * Be, qe[pe + Te.colour + 1] = Xe.g + (ze.g - Xe.g) * Be, qe[pe + Te.colour + 2] = Xe.b + (ze.b - Xe.b) * Be, qe[pe + Te.colour + 3] = Xe.a + (ze.a - Xe.a) * Be;
          const Ee = this.time + ie;
          Ee > this.liveUntil && (this.liveUntil = Ee), Re.written(ee, Ee)
        }
      }
    }

    function Xe() {}
    const ze = 5;

    function Be(ee, ie) {
      const He = [];
      let ye = 0;
      for (const be of ee) be.isReady() || (ye++, He.length < ze && He.push(`${ie} particle system ${be.name}`));
      return ye > He.length && He.push(`${ye-He.length} more ${ie} particle systems`), He
    }

    function Ee(ee) {
      return void 0 !== ee.position
    }
  },
  44799: (ee, ie, He) => {
    He.d(ie, {
      c: () => pe,
      g: () => Ue,
      h: () => Ke,
      l: () => Je
    });
    var ye = He(38020),
      be = He(39499),
      Me = He(39492);

    function Ke(ee, ie, He, ye) {
      const be = Me.v;
      ie.fill(0), ee.gravity.toArray(ie, be.gravity), ee.colorDead.toArray(ie, be.colorDead), He[be.ramp] = ee.useRampGradients ? 1 : 0;
      const Ke = ee.getColorGradients(),
        Ue = ke(ee, Ke, "colour", ye);
      He[be.colorCount] = Ue;
      for (let Me = 0; Me < Ue; Me++) {
        var Fe;
        const ee = Ke[qe(Ke, Me)];
        ie[be.colorPositions + Me] = ee.gradient, ee.color1.toArray(ie, be.color1 + 4 * Me), (null !== (Fe = ee.color2) && void 0 !== Fe ? Fe : ee.color1).toArray(ie, be.color2 + 4 * Me)
      }
      const Je = ee.getVelocityGradients(),
        oe = ke(ee, Je, "Op", ye);
      He[be.velocityCount] = oe;
      for (let Me = 0; Me < oe; Me++) ze(ie, be.Op + 4 * Me, Je[qe(Je, Me)]);
      const Re = ee.useRampGradients ? ee.getColorRemapGradients() : null,
        fe = ke(ee, Re, "colour remap", ye);
      He[be.remapCount] = fe;
      for (let Me = 0; Me < fe; Me++) ze(ie, be.remap + 4 * Me, Re[qe(Re, Me)])
    }

    function Ue() {
      return {
        key: [],
        texels: new Uint8Array(4 * Me.i)
      }
    }
    const Fe = [];

    function Je(ee, ie) {
      return oe(ee, Fe), !Xe(Fe, ie.key) && (ie.key.length = 0, ie.key.push(...Fe), ie.key.length > 0 && function(ee, ie) {
        for (let He = 0; He < Me.i; He++) be.k.GetCurrentGradient(He / Me.i, ee, ((ee, ie, He) => {
          ye.Color3.LerpToRef(ee.color, ie.color, He, Re)
        })), ie[4 * He] = 255 * Re.r, ie[4 * He + 1] = 255 * Re.g, ie[4 * He + 2] = 255 * Re.b, ie[4 * He + 3] = 255
      }(ee.getRampGradients(), ie.texels), !0)
    }

    function oe(ee, ie) {
      ie.length = 0;
      const He = ee.useRampGradients ? ee.getRampGradients() : null;
      if (null !== He && void 0 !== He && He.length) {
        ie.push(He.length);
        for (const ee of He) ie.push(ee.gradient, ee.color.r, ee.color.g, ee.color.b)
      }
    }
    const Re = new ye.Color3;

    function ke(ee, ie, He, ye) {
      return ie ? ie.length > Me.b ? (ye(`particleStops:${He}`, `GPU particles use the first 2 and last ${Me.b-2} of more than ${Me.b} ${He} gradient stops (${ee.name})`), Me.b) : ie.length : 0
    }

    function qe(ee, ie) {
      return ie < 2 || ee.length <= Me.b ? ie : ee.length - Me.b + ie
    }
    const fe = new Float32Array(Me.n),
      Te = new Uint32Array(fe.buffer);

    function pe(ee, ie, He) {
      return Ke(ee, fe, Te, He), ie && Xe(Te, ie) ? null : Te.slice()
    }

    function Xe(ee, ie) {
      if (ee.length !== ie.length) return !1;
      for (let He = 0; He < ee.length; He++)
        if (ee[He] !== ie[He]) return !1;
      return !0
    }

    function ze(ee, ie, He) {
      var ye;
      ee[ie] = He.gradient, ee[ie + 1] = He.factor1, ee[ie + 2] = null !== (ye = He.factor2) && void 0 !== ye ? ye : He.factor1
    }
  },
  42229: (ee, ie, He) => {
    function ye(ee, ie, He) {
      const ye = ie * ie * 4,
        be = ee[0].layers,
        Me = be * (ee.length - 1) + ee[ee.length - 1].layers,
        Ke = new Uint8Array(Me * ye);
      ee.forEach(((ie, He) => {
        const Me = He + 1 < ee.length ? Math.min(ie.layers, be) : ie.layers;
        Ke.set(new Uint8Array(ie.pixels.buffer, ie.pixels.byteOffset, Me * ye), He * be * ye)
      }));
      const Ue = Math.max(1, Math.min(Me, He || Me));
      if (Ue === Me) return [{
        pixels: Ke,
        layers: Me
      }];
      const Fe = [];
      for (let Je = 0; Je < Me; Je += Ue) {
        const ee = Math.min(Me, Je + Ue);
        Fe.push({
          pixels: Ke.slice(Je * ye, ee * ye),
          layers: ee - Je
        })
      }
      return Fe
    }
    He.d(ie, {
      c: () => ye,
      e: () => Me
    });
    const be = new WeakMap;

    function Me(ee, ie, He) {
      var ye, Me;
      const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
      be.set(ee, Ke);
      const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
      Ke.set(ie[0], Ue);
      const Fe = Ue.find((ee => ee.urls.length === ie.length && ee.urls.every(((ee, He) => ee === ie[He]))));
      if (Fe) return Fe.built;
      const Je = {
        urls: [...ie],
        built: He()
      };
      return Ue.push(Je), Je.built.catch((() => {
        Ue.splice(Ue.indexOf(Je), 1)
      })), Je.built
    }
  },
  39508: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      h: () => be,
      l: () => Fe,
      p: () => Re
    });
    var ye = He(38012);
    const be = 0,
      Me = 3,
      Ke = 4,
      Ue = new Map([
        [be, ye.e.ALPHA_ONEONE],
        [1, ye.e.ALPHA_COMBINE],
        [2, ye.e.ALPHA_ADD],
        [Me, ye.e.ALPHA_MULTIPLY],
        [-1, ye.e.ALPHA_SUBTRACT]
      ]);

    function Fe(ee) {
      var ie;
      return null !== (ie = Ue.get(ee)) && void 0 !== ie ? ie : ee
    }
    const Je = [Me, 2],
      oe = new Map;

    function Re(ee) {
      if (ee === Ke) return Je;
      let ie = oe.get(ee);
      return ie || (ie = [ee], oe.set(ee, ie)), ie
    }
  },
  44791: (ee, ie, He) => {
    function ye() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const ie = new Set;
      return (He, ye) => {
        ie.has(He) || (ie.add(He), console.warn(ee + ye))
      }
    }
    He.d(ie, {
      b: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);