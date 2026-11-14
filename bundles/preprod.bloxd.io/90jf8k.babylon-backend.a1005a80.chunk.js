export const id = 0;
export const ids = [0];
export const modules = {
  39407: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      addBabylonLights: () => tS,
      default: () => kS
    });
    var CF = SF(39416),
      AF = (SF(37944), SF(39079), SF(38456), SF(39430)),
      uF = SF(37783),
      hF = SF(35671),
      bW = SF(35617),
      dF = SF(39437),
      PF = SF(39446),
      RF = SF(35579),
      iW = (SF(39093), SF(39455)),
      eF = SF(39450),
      EF = SF(37123),
      QF = SF(39464),
      rW = SF(37824),
      gW = SF(37103);
    const tW = "gpuParticles",
      TF = gW.u,
      aW = FF => FF / 4,
      kW = FF => `gpuParticleSystem[${FF>>2}].${"xyzw"[3&FF]}`,
      qW = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${gW.e}\n#define COLOR_POSITIONS ${aW(TF.colorPositions)}\n#define COLOR1 ${aW(TF.color1)}\n#define COLOR2 ${aW(TF.color2)}\n#define VELOCITY ${aW(TF.Th)}\n#define REMAP ${aW(TF.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${gW.o/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${kW(TF.gravity)}, ${kW(TF.gravity+1)}, ${kW(TF.gravity+2)}); }\nint colorCount() { return int(${kW(TF.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${aW(TF.colorDead)}]; }\nint velocityCount() { return int(${kW(TF.velocityCount)}); }\nint remapCount() { return int(${kW(TF.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    rW.c.ShadersStore[`${tW}VertexShader`] = qW, rW.c.ShadersStore[`${tW}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const VF = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      NF = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var DF = SF(37096),
      LF = SF(39466);
    class mW extends DF.d {
      constructor(FF, WF, SF, CF) {
        super(FF, WF, SF), this.renderer = SF, this.ju = CF, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(gW.o), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, LF.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (FF, WF) => {
          const {
            engine: SF,
            perRow: CF
          } = this, AF = SF._gl;
          SF._bindTextureDirectly(AF.TEXTURE_2D, this.records, !0), SF._unpackFlipY(!1);
          const uF = this.ring.recordBits;
          for (let hF = FF; hF < WF;) {
            const FF = Math.floor(hF / CF),
              SF = Math.min(WF, (FF + 1) * CF);
            AF.texSubImage2D(AF.TEXTURE_2D, 0, hF % CF * 4, FF, 4 * (SF - hF), 1, AF.RGBA_INTEGER, AF.UNSIGNED_INT, uF, hF * gW.g), hF = SF
          }
          SF._bindTextureDirectly(AF.TEXTURE_2D, null)
        }, this.id = FF;
        const AF = CF.sC();
        this.engine = AF;
        const uF = Math.max(1, WF);
        this.perRow = Math.min(uF, 256), this.records = AF.createRawTexture(null, 4 * this.perRow, Math.ceil(uF / this.perRow), iW.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, iW.c.TEXTURE_NEAREST_SAMPLINGMODE, null, iW.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ju.getAnimationRatio() || 1;
        const WF = this.ju.getFrameId();
        if (WF === this.animatedFrame) return !1;
        const SF = super.animate(FF);
        return SF && (this.animatedFrame = WF, this.ring.takeUploads(this.uploadSlots)), SF
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(FF) {
        (0, LF.i)(this, this.uniforms, this.uniformBits, FF);
        for (const SF of gW.q) this.uniforms[SF] = this.uniformBits[SF];
        var WF;
        (0, LF.l)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (WF = this.ramp) || void 0 === WF || WF.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = eF.b.CreateRGBATexture(this.rampTexels.texels, gW.k, 1, this.ju, !1, !1, iW.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var FF;
        this.records.dispose(), null === (FF = this.ramp) || void 0 === FF || FF.dispose(), this.ramp = null
      }
    }
    class OF {
      constructor(FF) {
        this.ju = FF, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, QF.e)(), this.engine = FF.sC(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = eF.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, FF, !1, !1, iW.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      wWF(FF, WF) {
        const SF = 256 * this.engine.getCaps().maxTextureSize;
        WF > SF && this.warnOnce(`capacity:${FF}`, `particle system ${FF} holds ${SF} particles, not ${WF}: its records texture's limit`);
        const CF = new mW(FF, Math.min(WF, SF), this, this.ju);
        return this.ju.addParticleSystem(CF), CF
      }
      canDraw(FF) {
        var WF, SF;
        if (this.failed || null === (WF = FF.texture) || void 0 === WF || null === (SF = WF.mirror) || void 0 === SF || !SF.isReady()) return !1;
        for (const CF of (0, EF.k)(FF.blendMode))
          if (!this.effectFor(CF).isReady()) return !1;
        return !0
      }
      disposeStopped(FF) {
        this.ju._toBeDisposed.push(FF)
      }
      remove(FF) {
        this.ju.removeParticleSystem(FF), FF.releaseGl()
      }
      render(FF) {
        var WF;
        if (!FF.isReady() || !FF.hasLiveParticles()) return 0;
        const {
          engine: SF,
          ju: CF,
          frame: AF
        } = this;
        FF.prepareDraw(this.warnOnce), FF.drawOffset(AF, 0), AF[3] = FF.drawTime();
        const uF = FF.ring.drawStart(),
          hF = FF.ring.drawCount(),
          bW = null !== (WF = FF.ramp) && void 0 !== WF ? WF : this.whiteRamp;
        SF.setState(!1);
        for (const dF of (0, EF.k)(FF.blendMode)) {
          const WF = this.effectFor(dF);
          SF.enableEffect(WF), WF.setTexture("gpuParticleTexture", FF.texture.mirror), WF.setTexture("gpuParticleRampTexture", bW), WF._bindTexture("gpuParticleRecords", FF.records), WF.setMatrix("gpuParticleView", CF.getViewMatrix()), WF.setMatrix("gpuParticleProjection", CF.getProjectionMatrix()), WF.setFloatArray4("gpuParticleSystem", FF.uniforms), WF.setFloat4("gpuParticleFrame", AF[0], AF[1], AF[2], AF[3]), WF.setFloat2("gpuParticleRange", uF, hF), WF.setFloat("gpuParticleRamp", FF.uniforms[gW.u.ramp]), SF.bindBuffers(this.vertexBuffers, null, WF), SF.setAlphaMode((0, EF.h)(dF)), SF.drawArraysType(iW.c.MATERIAL_TriangleStripDrawMode, 0, 4, hF), WF._bindTexture("gpuParticleRecords", null)
        }
        return SF.setAlphaMode(iW.c.ALPHA_DISABLE), hF
      }
      awaitLink(FF) {
        const WF = FF.getPipelineContext(),
          SF = this.engine._gl;
        !this.failed && SF && (!WF || WF.isParallelCompiled && !WF.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : WF.isParallelCompiled && WF.program && (SF.getProgramParameter(WF.program, SF.LINK_STATUS) || this.fail(SF.getProgramInfoLog(WF.program) || "a program did not link")))
      }
      effectFor(FF) {
        return FF === EF.b ? this.multiplyEffect : this.effect
      }
      createEffect(FF) {
        return this.engine.createEffect(tW, [], VF, NF, FF, void 0, void 0, ((FF, WF) => {
          this.fail(WF)
        }))
      }
      fail(FF) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${FF}`);
          for (const FF of this.ju.Zm.slice()) FF instanceof mW && FF.disposeOnStop && FF.dispose()
        }
      }
    }
    var xW = SF(38171),
      ZF = SF(39075),
      oF = SF(37911),
      YF = SF(38128),
      MF = SF(38124),
      cW = SF(38053),
      GF = SF(39123),
      zW = SF(35954),
      IF = SF(39468),
      fF = SF(39477),
      yW = SF(39483),
      sF = SF(38081),
      nF = SF(35840),
      HF = SF(35832),
      KF = SF(38286),
      wF = SF(35912),
      XF = SF(35856);

    function UF(FF) {
      if (FF.visibility < 1 || !FF.isVisible || !FF.isEnabled() || FF.metadata[XF.e] || !FF.isReady()) return !0;
      const WF = FF.Om;
      if (!WF || 0 === WF.length) return !0;
      for (let SF = 0; SF < WF.length; SF++) {
        const CF = WF[SF],
          AF = CF.XC();
        if (!AF || !AF.isReadyForSubMesh(FF, CF, !1)) return !0
      }
      return !1
    }
    class BF {
      constructor(FF, WF) {
        this.iS = FF, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, WF.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      aC(FF) {
        var WF;
        const SF = this.armed;
        if (this.armed = !1, this.vis = null, !SF) return !1;
        this.culled = 0;
        const {
          iS: CF
        } = this, AF = null === (WF = CF.Qm) || void 0 === WF ? void 0 : WF.visibility;
        if (!AF || !FF || CF.dA.PA) return !1;
        if (!(CF.uW.DPF[0] >= wF.e)) return !1;
        const uF = FF.getProjectionMatrix().m;
        if (0 !== uF[15]) return !1;
        const hF = CF.OW,
          bW = FF.globalPosition,
          dF = this.eye;
        return dF[0] = bW.x + hF[0], dF[1] = bW.y + hF[1], dF[2] = bW.z + hF[2], !!AF.eyeClear(dF[0], dF[1], dF[2], FF.minZ, uF, CF.uW) && (this.vis = AF, this.passable.clear(), this.count = 0, !0)
      }
      see(FF, WF) {
        const SF = this.count++;
        if (SF === this.cellSlots.length) {
          const FF = new Int32Array(2 * SF);
          FF.set(this.cellSlots), this.cellSlots = FF
        }
        this.cellSlots[SF] = WF, this.meshes[SF] = FF
      }
      seeThrough(FF) {
        this.passable.add(FF)
      }
      finish(FF, WF) {
        const {
          vis: SF,
          eye: CF,
          meshes: AF,
          count: uF,
          cellSlots: hF
        } = this, {
          uW: bW
        } = this.iS, [dF, PF] = bW.DPF, RF = null !== SF && SF.update(CF[0], CF[1], CF[2], bW.ZhF, dF, PF, this.passable);
        let iW = 0;
        for (let eF = 0; eF < uF; eF++) {
          const CF = AF[eF];
          if (RF) {
            const FF = 3 * hF[eF];
            if (FF >= 0 && !SF.isDrawn(WF[FF], WF[FF + 1], WF[FF + 2])) {
              iW++;
              continue
            }
          }
          sF.f.prototype.push.call(FF, CF)
        }
        AF.fill(null, 0, uF), this.count = 0, this.vis = null, this.culled = iW
      }
    }
    var jW = SF(35893),
      vW = SF(35849),
      JF = SF(38267),
      pF = SF(39486),
      lF = SF(38269),
      FW = SF(38187);
    let WW = 1;
    const SW = new WeakSet;

    function CW() {
      return WW
    }

    function AW() {
      WW = WW >= 1073741823 ? 1 : WW + 1
    }

    function uW(FF) {
      const WF = FF.metadata;
      if (!WF || !0 !== WF[HF.p]) return;
      const SF = WF[HF.t],
        CF = null === SF || void 0 === SF ? void 0 : SF._noaStamps;
      if (!SF || !CF) return;
      const AF = SF.entries.indexOf(FF);
      AF >= 0 && (CF[AF] = 0)
    }

    function hW(FF) {
      const WF = FF.Om;
      for (let SF = 0; SF < WF.length; SF++) {
        const FF = WF[SF].XC();
        if (FF && !FF.isFrozen) return !1
      }
      for (let SF = 0; SF < WF.length; SF++) {
        const FF = WF[SF].XC();
        FF && SW.add(FF)
      }
      return !0
    }
    let bS = !1;
    const dW = new WeakSet;

    function PW(FF, WF) {
      const SF = FF[WF];
      if ("function" !== typeof SF) throw new Error(`terrainDrawState: Babylon has no ${WF} to hook`);
      return SF
    }

    function RW(FF, WF, SF, CF, AF) {
      const uF = SF.uW.ZhF,
        hF = new Map;
      let bW = 0;
      const dF = new BF(SF, FF),
        PF = new jW.e(uF, FF.sC());
      ! function(FF) {
        if (dW.has(FF) || (dW.add(FF), FF.onContextLostObservable.add(AW), FF.onContextRestoredObservable.add(AW)), bS) return;
        bS = !0;
        const WF = pF.b.prototype,
          SF = PW(WF, "_markSubMeshesAsDirty");
        Object.assign(WF, {
          _markSubMeshesAsDirty(FF) {
            SF.call(this, FF), uW(this)
          }
        });
        const CF = PW(FW.e.prototype, "_syncParentEnabledState");
        Object.assign(FW.e.prototype, {
          _syncParentEnabledState() {
            CF.call(this), uW(this)
          }
        });
        const AF = PW(lF.c.prototype, "resetDrawCache");
        lF.c.prototype.resetDrawCache = function(FF, WF) {
          AF.call(this, FF, WF), uW(this.getMesh())
        };
        const uF = JF.c.prototype,
          hF = PW(uF, "markDirty");
        uF.markDirty = function(FF) {
          hF.call(this, FF), SW.has(this) && AW()
        };
        const bW = PW(uF, "_markAllSubMeshesAsDirty");
        Object.assign(uF, {
          _markAllSubMeshesAsDirty(FF) {
            bW.call(this, FF), SW.has(this) && AW()
          }
        })
      }(FF.sC());
      let RF = new Float64Array(384),
        iW = new Int32Array(64),
        eF = new Uint8Array(64),
        EF = new Float64Array(64),
        QF = new Int32Array(192),
        rW = 0;
      const gW = [],
        tW = new Float64Array(24),
        TF = () => {
          const FF = gW.pop();
          return void 0 !== FF ? (iW[FF] = 0, FF) : (rW === iW.length && (RF = iS(RF, new Float64Array(2 * RF.length)), iW = iS(iW, new Int32Array(2 * iW.length)), eF = iS(eF, new Uint8Array(2 * eF.length)), EF = iS(EF, new Float64Array(2 * EF.length)), QF = iS(QF, new Int32Array(2 * QF.length))), rW++)
        },
        aW = FF => {
          const WF = 6 * FF._noaSlot,
            SF = FF.YPF[0],
            CF = FF.YPF[1];
          RF[WF] = SF.x, RF[WF + 1] = SF.y, RF[WF + 2] = SF.z, RF[WF + 3] = CF.x, RF[WF + 4] = CF.y, RF[WF + 5] = CF.z
        },
        kW = (FF, WF, SF) => {
          if (!SF) return dF.see(FF, -1), !1;
          const CF = UF(FF);
          return CF && dF.seeThrough(EF[WF]), dF.see(FF, WF), !CF
        };
      let qW = -1;
      return FF.getActiveMeshCandidates = () => {
        const SF = FF.frustumPlanes,
          CF = WF._selectionContent;
        CF.reset(), (SF => {
          const CF = FF.frustumPlanes;
          bW = bW + 1 | 0 || 1;
          const AF = WF.blocks,
            uF = dF.aC(FF.activeCamera),
            hF = uF && !0;
          if (hF) {
            const WF = FF.sC().currentRenderPassId;
            WF !== qW && (qW = WF, AW())
          }
          const PF = CW(),
            EF = hF && !1;
          AF.length > 0 && function(FF, WF) {
            for (let SF = 0; SF < 6; SF++) {
              const CF = FF[SF],
                AF = CF.normal;
              WF[4 * SF] = AF.x, WF[4 * SF + 1] = AF.y, WF[4 * SF + 2] = AF.z, WF[4 * SF + 3] = CF.d
            }
          }(CF, tW);
          const rW = RF,
            gW = iW,
            TF = eF;
          for (let FF = 0; FF < AF.length; FF++) {
            const WF = AF[FF];
            if (!KF.e.IsInFrustum(WF.YPF, CF)) continue;
            const RF = WF.entries;
            {
              const FF = WF._noaSlots,
                CF = WF._noaStamps,
                AF = WF._noaTerrain;
              for (let WF = 0; WF < RF.length; WF++) {
                const iW = FF[WF];
                if (gW[iW] !== bW && (gW[iW] = bW, TF[iW] = eW(rW, 6 * iW, tW) ? 1 : 0), 0 === TF[iW]) continue;
                const eF = RF[WF];
                if (hF && CF[WF] === PF) EF && 1 === AF[WF] && UF(eF) && 0, dF.see(eF, 1 === AF[WF] ? iW : -1);
                else if (hF) {
                  CF[WF] = PF;
                  const FF = !0 === eF.metadata[vW.h];
                  AF[WF] = FF ? 1 : 0;
                  const SF = kW(eF, iW, FF);
                  !FF || SF && hW(eF) || (CF[WF] = 0)
                } else uF ? kW(eF, iW, !0 === eF.metadata[vW.h]) : sF.f.prototype.push.call(SF, eF)
              }
              continue
            }
          }
          uF && dF.finish(SF, QF)
        })(CF), PF.apply(CF, FF.activeCamera);
        const uF = WF.oPF;
        for (let FF = 0; FF < uF.length; FF++) {
          const WF = uF[FF];
          WF.isEnabled() && sF.f.prototype.push.call(CF, WF)
        }
        return AF(CF, SF), CF
      }, {
        MPF: () => dF.culled,
        gRF: (FF, WF) => {
          const AF = Math.floor(WF[0] / uF),
            bW = Math.floor(WF[1] / uF),
            dF = Math.floor(WF[2] / uF),
            PF = `${AF}|${bW}|${dF}`;
          let RF = hF.get(PF);
          if (!RF) {
            const FF = [0, 0, 0];
            SF.TbF([AF * uF - 1, bW * uF - 1, dF * uF - 1], null, FF), RF = Object.assign(CF(FF, uF + 2), {
              cRF: PF,
              GPF: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: TF()
            }), aW(RF), EF[RF._noaSlot] = (0, nF.g)(AF, bW, dF), QF[3 * RF._noaSlot] = AF, QF[3 * RF._noaSlot + 1] = bW, QF[3 * RF._noaSlot + 2] = dF, hF.set(PF, RF)
          }
          RF.GPF++, FF.metadata[HF.v] = RF
        },
        zSF: FF => {
          const WF = FF.metadata[HF.v];
          WF && (WF.GPF--, WF.GPF <= 0 && (hF.delete(WF.cRF), gW.push(WF._noaSlot)), FF.metadata[HF.v] = null)
        },
        ZPF: (FF, WF) => {
          const SF = FF,
            CF = WF.metadata[HF.v];
          (SF._noaSlots ??= []).push(CF._noaSlot), (SF._noaStamps ??= []).push(0), (SF._noaTerrain ??= []).push(0), SF.entries.push(WF)
        },
        removeEntry: (FF, WF) => {
          const SF = FF,
            CF = SF.entries,
            AF = CF.indexOf(WF);
          if (AF < 0) return;
          const uF = SF._noaSlots,
            hF = SF._noaStamps,
            bW = SF._noaTerrain,
            dF = CF.length - 1;
          CF[AF] = CF[dF], uF[AF] = uF[dF], hF[AF] = hF[dF], bW[AF] = bW[dF], CF.pop(), uF.pop(), hF.pop(), bW.pop()
        },
        luF: FF => {
          for (const WF of hF.values()) {
            WF.VPF.IPF(FF), WF.qRF.IPF(FF);
            for (const SF of WF.YPF) SF.IPF(FF);
            aW(WF)
          }
        }
      }
    }

    function iS(FF, WF) {
      return WF.set(FF), WF
    }

    function eW(FF, WF, SF) {
      const CF = FF[WF],
        AF = FF[WF + 1],
        uF = FF[WF + 2],
        hF = FF[WF + 3],
        bW = FF[WF + 4],
        dF = FF[WF + 5];
      for (let PF = 0; PF < 24; PF += 4) {
        const FF = SF[PF],
          WF = SF[PF + 1],
          RF = SF[PF + 2];
        if (!(FF * (FF >= 0 ? hF : CF) + WF * (WF >= 0 ? bW : AF) + RF * (RF >= 0 ? dF : uF) + SF[PF + 3] >= 0)) return !1
      }
      return !0
    }
    var EW = SF(36189);
    class QW {
      constructor(FF, WF) {
        var SF = FF.ju;
        SF.SPF(new yW.e(SF));
        var CF = new IF.c(dF);
        SF.yRF = CF, CF.blocks = [];
        var AF, uF = {},
          hF = [];
        this.textPlanes = hF, this.MPF = () => AF.MPF(), this.luF = FF => {
          RF(CF, FF), AF.luF(FF)
        }, this.gRF = (WF, SF, bW) => {
          if (!WF.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!WF.metadata[HF.t] && !WF.metadata[HF.n]) {
            if (!SF) {
              var dF = CF.oPF;
              if (WF.metadata[HF.z] && !WF.parent) {
                dF = hF;
                var RF = WF.JWF().nPF;
                WF.metadata[HF.A] = RF.center.length() + RF.radius, WF.nC = !0
              }
              return dF.push(WF), WF.metadata[HF.h] = dF, void(WF.metadata[HF.n] = !0)
            }
            var eF = Math.floor(bW[0] / PF),
              EF = Math.floor(bW[1] / PF),
              QF = Math.floor(bW[2] / PF),
              rW = eF + "|" + EF + "|" + QF,
              gW = uF[rW];
            if (!gW) {
              var tW = [eF * PF, EF * PF, QF * PF],
                TF = [0, 0, 0];
              FF.iS.TbF(tW, null, TF), gW = iW(TF, PF), CF.blocks.push(gW), uF[rW] = gW, gW.cRF = rW
            }
            AF.gRF(WF, bW), AF.ZPF(gW, WF), gW.GPF = (gW.GPF || 0) + 1, WF.metadata[HF.t] = gW, WF.metadata[HF.p] = !0, WF.nC = !0
          }
        }, this.zSF = FF => {
          if (FF.metadata) {
            FF.metadata[HF.n] && ((0, nF.m)(FF.metadata[HF.h], FF), FF.metadata[HF.n] = !1), FF.metadata[HF.h] === hF && (FF.nC = !1), FF.metadata[HF.h] = void 0, FF.metadata[HF.A] = void 0;
            var WF = FF.metadata[HF.t];
            WF && WF.entries && (FF.metadata[HF.p] && AF.removeEntry(WF, FF), WF.GPF--, WF.GPF <= 0 && (delete uF[WF.cRF], (0, nF.m)(CF.blocks, WF))), AF.zSF(FF), FF.metadata[HF.t] = null, FF.metadata[HF.p] = !1
          }
        }, this.chF = function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (FF.metadata[HF.t]) {
            if (FF.metadata[HF.p] === WF) return;
            var SF = FF.metadata[HF.t];
            SF && SF.entries && (WF ? AF.ZPF(SF, FF) : AF.removeEntry(SF, FF)), FF.metadata[HF.p] = WF
          } else {
            if (FF.metadata[HF.n] === WF) return;
            var uF = FF.metadata[HF.h] || CF.oPF;
            WF ? uF.push(FF) : (0, nF.m)(uF, FF), FF.metadata[HF.n] = WF
          }
        };
        var dF = () => {},
          PF = WF * FF.iS.uW.ZhF,
          RF = (FF, WF) => {
            FF.blocks.forEach((FF => {
              FF.VPF.IPF(WF), FF.qRF.IPF(WF), FF.YPF.forEach((FF => FF.IPF(WF))), FF.blocks && RF(FF, WF)
            }))
          },
          iW = (FF, WF) => {
            var SF = new bW.HC(FF[0], FF[1], FF[2]),
              CF = new bW.HC(FF[0] + WF, FF[1] + WF, FF[2] + WF);
            return new fF.c(SF, CF, void 0, void 0, void 0, dF)
          };
        AF = RW(SF, CF, FF.iS, iW, ((FF, WF) => {
          for (var SF = 0; SF < hF.length; SF++) {
            var CF = hF[SF];
            CF.isEnabled(!1) && ((0, EW.e)(CF, WF) && sF.f.prototype.push.call(FF, CF))
          }
        }))
      }
    }

    function rS(FF) {
      const {
        holderPosition: WF,
        holderRotation: SF,
        EAF: CF,
        fov: AF,
        near: uF,
        far: hF
      } = FF.model.eAF, bW = FF.vRF;
      bW.position.FhF(WF[0], WF[1], WF[2]), bW.rotation.FhF(SF[0], SF[1], SF[2]);
      const dF = FF.camera;
      dF.position.FhF(CF[0], CF[1], CF[2]), dF.fov = AF, dF.minZ = uF, dF.maxZ = hF
    }

    function gS(FF) {
      const WF = FF.sC(),
        SF = WF,
        CF = SF._gl;
      if (!CF || SF.Im < 2 || WF.QPF || CF.getParameter(CF.DEPTH_BITS) < 24) return !1;
      const AF = FF._renderingManager,
        uF = AF.getRenderingGroup(-1),
        hF = AF.getRenderingGroup(0),
        bW = YF.c.prototype.render;
      return uF.render = function(FF, WF, SF, CF, AF, uF, dF, PF, RF) {
        (FF || hF._empty) && bW.call(this, FF, WF, SF, CF, AF, uF, dF, PF, RF)
      }, hF.render = function(FF, SF, AF, hF) {
        let dF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          eF = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          EF = arguments.length > 8 ? arguments[8] : void 0;
        FF ? bW.call(this, FF, SF, AF, hF, dF, PF, RF, eF, EF) : (WF.setAlphaMode(iW.c.ALPHA_DISABLE), bW.call(this, null, !1, !1, hF, dF, PF, RF, !1), uF._empty || (CF.depthRange(1, 1), bW.call(uF, null, SF, AF, hF, dF, PF, RF, eF, EF), CF.depthRange(0, 1)), bW.call(this, null, SF, AF, hF, !1, !1, !1, eF, EF))
      }, !0
    }

    function tS(FF, WF) {
      return [WF, zW.d].map(((WF, SF) => {
        const CF = new AF.d("light", bW.HC.FromArray(WF), FF);
        return CF.diffuse = hF.Color3.FromArray([1, 1, 1]), CF.specular = hF.Color3.FromArray([1, 1, 1]), CF.intensity = zW.c[SF], CF
      }))
    }
    class TW extends PF.d {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(FF) {
        var WF;
        this.heldTexture = FF, this.particleTexture = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.mirror) && void 0 !== WF ? WF : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        FF && (this.particleTexture = null, (0, RF.E)(this.heldTexture), this.heldTexture = null), super.dispose(FF, WF, SF)
      }
    }
    const aS = CF.d.Zero();
    const kS = {
      WRF: function(FF, WF) {
        return new uF.d(FF, WF.mPF, {
          preserveDrawingBuffer: WF.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      lPF: function(FF, WF) {
        ! function(FF, WF, SF) {
          const CF = new cW.e(FF.engine);
          FF.ju = CF, CF.detachControl(), CF.autoClear = !1, MF.e.MIN_RENDERINGGROUPS = -1;
          for (let uF = MF.e.MIN_RENDERINGGROUPS; uF <= 1; uF++) CF.setRenderingOrder(uF, YF.c.PainterSortCompare, YF.c.PainterSortCompare, YF.c.PainterSortCompare);
          CF.setRenderingAutoClearDepthStencil(0, !1), oF.b.Enabled = !1, FF.UPF = new QW(FF, Math.round(WF.BPF)), FF.vRF = new ZF.c("camHolder", CF), FF.camera = new xW.e("camera", new bW.HC(0, 0, 0), CF), FF.camera.parent = FF.vRF, rS(FF), (0, zW.f)(FF, ((FF, WF, SF) => (0, GF.j)(WF, SF, FF.ju))), CF.clearColor = hF.d.FromArray(WF.clearColor), CF.ambientColor = hF.Color3.FromArray(WF.ambientColor);
          const AF = SF(CF, WF.pPF);
          CF.onNewLightAddedObservable.add((FF => {
            AF.some((WF => WF === FF)) || console.error(`Light "${FF.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), CF.skipPointerMovePicking = !0
        }(FF, WF, tS), gS(FF.ju)
      },
      jRF: rS,
      setBabylonFog: function(FF, WF, SF, CF) {
        const AF = FF.ju;
        AF.fogMode = 3, AF.fogStart = WF, AF.fogEnd = SF, AF.fogColor.set(CF[0], CF[1], CF[2])
      },
      SRF: function(FF, WF, SF) {
        return FF.engine.Im >= 2 && (FF.CRF || (FF.CRF = new OF(FF.ju)), !FF.CRF.failed) ? FF.CRF.wWF(WF, SF) : new TW(WF, SF, FF.ju)
      },
      uRF: function(FF, WF) {
        FF.ju.Zm.forEach((SF => {
          if (SF instanceof mW) return void SF.luF(WF, FF.iS.OW);
          const CF = SF;
          if (CF.emitter.getConnectedParticleSystems)
            for (const FF of CF._particles) FF.position.set(FF.position.x - WF[0], FF.position.y - WF[1], FF.position.z - WF[2]);
          else {
            if (!CF.worldOffset) throw new Error("Particle system has no world offset");
            CF.worldOffset.x = -FF.iS.OW[0], CF.worldOffset.y = -FF.iS.OW[1], CF.worldOffset.z = -FF.iS.OW[2]
          }
        }))
      },
      linesFromArrays: function(FF, WF, SF) {
        const CF = new dF.e(WF, FF.ju, null, void 0, void 0, !1);
        return (0, GF.f)(WF, SF, FF.ju, CF), CF
      },
      vu: uW,
      ARF: function(FF, WF) {
        return aS.origin.fdF(WF.origin), aS.direction.fdF(WF.direction), aS.length = WF.length, aS.epsilon = WF.epsilon, aS.ARF(FF, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  39466: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => gW,
      f: () => bW,
      i: () => hF,
      l: () => PF
    });
    var CF = SF(35671),
      AF = SF(37107),
      uF = SF(37103);

    function hF(FF, WF, SF, CF) {
      const AF = uF.u;
      WF.fill(0), FF.gravity.toArray(WF, AF.gravity), FF.colorDead.toArray(WF, AF.colorDead), SF[AF.ramp] = FF.useRampGradients ? 1 : 0;
      const hF = FF.getColorGradients(),
        bW = eF(FF, hF, "colour", CF);
      SF[AF.colorCount] = bW;
      for (let uF = 0; uF < bW; uF++) {
        var dF;
        const FF = hF[EF(hF, uF)];
        WF[AF.colorPositions + uF] = FF.gradient, FF.color1.toArray(WF, AF.color1 + 4 * uF), (null !== (dF = FF.color2) && void 0 !== dF ? dF : FF.color1).toArray(WF, AF.color2 + 4 * uF)
      }
      const PF = FF.getVelocityGradients(),
        RF = eF(FF, PF, "Th", CF);
      SF[AF.velocityCount] = RF;
      for (let uF = 0; uF < RF; uF++) TF(WF, AF.Th + 4 * uF, PF[EF(PF, uF)]);
      const iW = FF.useRampGradients ? FF.getColorRemapGradients() : null,
        QF = eF(FF, iW, "colour remap", CF);
      SF[AF.remapCount] = QF;
      for (let uF = 0; uF < QF; uF++) TF(WF, AF.remap + 4 * uF, iW[EF(iW, uF)])
    }

    function bW() {
      return {
        key: [],
        texels: new Uint8Array(4 * uF.k)
      }
    }
    const dF = [];

    function PF(FF, WF) {
      return RF(FF, dF), !tW(dF, WF.key) && (WF.key.length = 0, WF.key.push(...dF), WF.key.length > 0 && function(FF, WF) {
        for (let SF = 0; SF < uF.k; SF++) AF.l.GetCurrentGradient(SF / uF.k, FF, ((FF, WF, SF) => {
          CF.Color3.LerpToRef(FF.color, WF.color, SF, iW)
        })), WF[4 * SF] = 255 * iW.r, WF[4 * SF + 1] = 255 * iW.g, WF[4 * SF + 2] = 255 * iW.b, WF[4 * SF + 3] = 255
      }(FF.getRampGradients(), WF.texels), !0)
    }

    function RF(FF, WF) {
      WF.length = 0;
      const SF = FF.useRampGradients ? FF.getRampGradients() : null;
      if (null !== SF && void 0 !== SF && SF.length) {
        WF.push(SF.length);
        for (const FF of SF) WF.push(FF.gradient, FF.color.r, FF.color.g, FF.color.b)
      }
    }
    const iW = new CF.Color3;

    function eF(FF, WF, SF, CF) {
      return WF ? WF.length > uF.e ? (CF(`particleStops:${SF}`, `GPU particles use the first 2 and last ${uF.e-2} of more than ${uF.e} ${SF} gradient stops (${FF.name})`), uF.e) : WF.length : 0
    }

    function EF(FF, WF) {
      return WF < 2 || FF.length <= uF.e ? WF : FF.length - uF.e + WF
    }
    const QF = new Float32Array(uF.o),
      rW = new Uint32Array(QF.buffer);

    function gW(FF, WF, SF) {
      return hF(FF, QF, rW, SF), WF && tW(rW, WF) ? null : rW.slice()
    }

    function tW(FF, WF) {
      if (FF.length !== WF.length) return !1;
      for (let SF = 0; SF < FF.length; SF++)
        if (FF[SF] !== WF[SF]) return !1;
      return !0
    }

    function TF(FF, WF, SF) {
      var CF;
      FF[WF] = SF.gradient, FF[WF + 1] = SF.factor1, FF[WF + 2] = null !== (CF = SF.factor2) && void 0 !== CF ? CF : SF.factor1
    }
  },
  39464: (FF, WF, SF) => {
    function CF() {
      let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const WF = new Set;
      return (SF, CF) => {
        WF.has(SF) || (WF.add(SF), console.warn(FF + CF))
      }
    }
    SF.d(WF, {
      e: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);