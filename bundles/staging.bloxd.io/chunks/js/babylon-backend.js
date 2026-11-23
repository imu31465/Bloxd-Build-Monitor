export const id = 0;
export const ids = [0];
export const modules = {
  40956: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      CapeMaterialPlugin: () => AC,
      HueTintMaterialPlugin: () => xC,
      LifeformMaterialPlugin: () => JC,
      OverlayMaterialPlugin: () => IC
    });
    var QC = ZC(40958),
      wC = ZC(37849);
    class bC extends((0, QC.g)(wC.e)) {}(0, QC.i)(wC.e, bC);
    var nC = ZC(37040);
    class fC extends((0, QC.g)(nC.f)) {}(0, QC.i)(nC.f, fC);
    var oC = ZC(37677);
    class qC extends((0, QC.g)(oC.d)) {}(0, QC.i)(oC.d, qC);
    var FC = ZC(37290),
      WC = ZC(40092),
      NC = ZC(37285);
    class MC extends((0, QC.g)(NC.d)) {
      constructor(CC, zC, ZC) {
        super(CC, zC, ZC), (0, FC.g)(CC)
      }
      dispose(CC) {
        (0, FC.k)(this._material), super.dispose(CC)
      }
    }(0, QC.i)(NC.d, MC), (0, NC.f)({
      disableUnusedSpecularTerm: QC.c,
      isLightingDisabled: CC => CC instanceof WC.StandardMaterial && CC.disableLighting
    });
    var gC = ZC(38517);
    class SC extends((0, QC.g)(gC.c)) {}(0, QC.i)(gC.c, SC);
    var pC = ZC(38623),
      PC = ZC(37149),
      GC = ZC(37973),
      RC = ZC(37086);
    class AC extends((0, QC.g)(pC.e)) {}(0, QC.i)(pC.e, AC);
    class xC extends((0, QC.g)(PC.b)) {}(0, QC.i)(PC.b, xC);
    class JC extends((0, QC.g)(GC.q)) {}(0, QC.i)(GC.q, JC);
    class IC extends((0, QC.g)(RC.e)) {}(0, QC.i)(RC.e, IC)
  },
  41355: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      addBabylonLights: () => xz,
      default: () => iz
    });
    var QC = ZC(41362),
      wC = (ZC(39791), ZC(40948), ZC(40308), ZC(41375)),
      bC = ZC(37138),
      nC = ZC(36961),
      fC = ZC(41392),
      oC = ZC(41394),
      qC = ZC(37083),
      FC = (ZC(40958), ZC(41402)),
      WC = ZC(41396),
      NC = ZC(38548),
      MC = ZC(41411),
      gC = ZC(39674),
      SC = ZC(38529);
    const pC = "gpuParticles",
      PC = SC.x,
      GC = CC => CC / 4,
      RC = CC => `gpuParticleSystem[${CC>>2}].${"xyzw"[3&CC]}`,
      AC = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${SC.d}\n#define COLOR_POSITIONS ${GC(PC.colorPositions)}\n#define COLOR1 ${GC(PC.color1)}\n#define COLOR2 ${GC(PC.color2)}\n#define VELOCITY ${GC(PC.Np)}\n#define REMAP ${GC(PC.remap)}\n#define RECORDS_PER_ROW ${SC.n}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${SC.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${RC(PC.gravity)}, ${RC(PC.gravity+1)}, ${RC(PC.gravity+2)}); }\nint colorCount() { return int(${RC(PC.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${GC(PC.colorDead)}]; }\nint velocityCount() { return int(${RC(PC.velocityCount)}); }\nint remapCount() { return int(${RC(PC.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\t// (state >> 28) + 4 as constant shifts: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 shifts by a variable amount wrongly\n\tuint top = state >> 28u;\n\tuint bits0 = state >> 4u;\n\tuint bits1 = (top & 1u) != 0u ? bits0 >> 1u : bits0;\n\tuint bits2 = (top & 2u) != 0u ? bits1 >> 2u : bits1;\n\tuint bits3 = (top & 4u) != 0u ? bits2 >> 4u : bits2;\n\tuint word = (((top & 8u) != 0u ? bits3 >> 8u : bits3) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\t// No division by a variable: ANGLE's Direct3D 11 on Intel gen 7/7.5/8 is suspected of dividing by a uniform wrongly\n\tint count = int(gpuParticleRange.y);\n\tint unwrapped = int(gpuParticleRange.x) + gl_InstanceID;\n\t// One wrap, as start < count and the draw's instances are count (gpuParticleRing.ts)\n\tint slot = unwrapped >= count ? unwrapped - count : unwrapped;\n\tivec2 at = ivec2((slot % RECORDS_PER_ROW) * 4, slot / RECORDS_PER_ROW);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    gC.b.ShadersStore[`${pC}VertexShader`] = AC, gC.b.ShadersStore[`${pC}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const xC = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      JC = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var IC = ZC(38523),
      iC = ZC(41418);
    class vC extends IC.d {
      constructor(CC, zC, ZC, QC) {
        super(CC, zC, ZC), this.renderer = ZC, this.sS = QC, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.uniforms = new Float32Array(SC.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, iC.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (CC, zC) => {
          const {
            engine: ZC
          } = this, QC = ZC._gl;
          ZC._bindTextureDirectly(QC.TEXTURE_2D, this.records, !0), ZC._unpackFlipY(!1);
          const wC = this.ring.recordBits;
          for (let bC = CC; bC < zC;) {
            const CC = Math.floor(bC / SC.n),
              ZC = Math.min(zC, (CC + 1) * SC.n);
            QC.texSubImage2D(QC.TEXTURE_2D, 0, bC % SC.n * 4, CC, 4 * (ZC - bC), 1, QC.RGBA_INTEGER, QC.UNSIGNED_INT, wC, bC * SC.e), bC = ZC
          }
          ZC._bindTextureDirectly(QC.TEXTURE_2D, null)
        }, this.id = CC;
        const wC = QC.mg();
        this.engine = wC;
        const bC = Math.max(1, zC),
          nC = Math.min(bC, SC.n);
        this.records = wC.createRawTexture(null, 4 * nC, Math.ceil(bC / nC), FC.d.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, FC.d.TEXTURE_NEAREST_SAMPLINGMODE, null, FC.d.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.sS.getAnimationRatio() || 1;
        const zC = this.sS.getFrameId();
        if (zC === this.animatedFrame) return !1;
        const ZC = super.animate(CC);
        return ZC && (this.animatedFrame = zC, this.ring.takeUploads(this.uploadSlots)), ZC
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(CC) {
        (0, iC.h)(this, this.uniforms, this.uniformBits, CC);
        for (const ZC of SC.t) this.uniforms[ZC] = this.uniformBits[ZC];
        var zC;
        (0, iC.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (zC = this.ramp) || void 0 === zC || zC.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = WC.b.CreateRGBATexture(this.rampTexels.texels, SC.k, 1, this.sS, !1, !1, FC.d.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var CC;
        this.records.dispose(), null === (CC = this.ramp) || void 0 === CC || CC.dispose(), this.ramp = null
      }
    }
    const eC = "the context was lost before the programs linked";
    class hC {
      constructor(CC, zC) {
        this.sS = CC, this.reportFailure = zC, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, MC.b)(), this.engine = CC.mg(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = WC.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, CC, !1, !1, FC.d.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      DH(CC, zC) {
        const ZC = SC.n * this.engine.getCaps().maxTextureSize;
        zC > ZC && this.warnOnce(`capacity:${CC}`, `particle system ${CC} holds ${ZC} particles, not ${zC}: its records texture's limit`);
        const QC = new vC(CC, Math.min(zC, ZC), this, this.sS);
        return this.sS.addParticleSystem(QC), QC
      }
      canDraw(CC) {
        var zC, ZC;
        if (this.failed || null === (zC = CC.texture) || void 0 === zC || null === (ZC = zC.mirror) || void 0 === ZC || !ZC.isReady()) return !1;
        for (const QC of (0, NC.i)(CC.blendMode))
          if (!this.effectFor(QC).isReady()) return !1;
        return !0
      }
      disposeStopped(CC) {
        this.sS._toBeDisposed.push(CC)
      }
      remove(CC) {
        this.sS.removeParticleSystem(CC), CC.releaseGl()
      }
      render(CC) {
        var zC;
        if (!CC.isReady() || !CC.hasLiveParticles()) return 0;
        const {
          engine: ZC,
          sS: QC,
          frame: wC
        } = this;
        CC.prepareDraw(this.warnOnce), CC.drawOffset(wC, 0), wC[3] = CC.drawTime();
        const bC = CC.ring.drawStart(),
          nC = CC.ring.drawCount(),
          fC = null !== (zC = CC.ramp) && void 0 !== zC ? zC : this.whiteRamp;
        ZC.setState(!1);
        for (const oC of (0, NC.i)(CC.blendMode)) {
          const zC = this.effectFor(oC);
          ZC.enableEffect(zC), zC.setTexture("gpuParticleTexture", CC.texture.mirror), zC.setTexture("gpuParticleRampTexture", fC), zC._bindTexture("gpuParticleRecords", CC.records), zC.setMatrix("gpuParticleView", QC.getViewMatrix()), zC.setMatrix("gpuParticleProjection", QC.getProjectionMatrix()), zC.setFloatArray4("gpuParticleSystem", CC.uniforms), zC.setFloat4("gpuParticleFrame", wC[0], wC[1], wC[2], wC[3]), zC.setFloat2("gpuParticleRange", bC, nC), zC.setFloat("gpuParticleRamp", CC.uniforms[SC.x.ramp]), ZC.bindBuffers(this.vertexBuffers, null, zC), ZC.setAlphaMode((0, NC.h)(oC)), ZC.drawArraysType(FC.d.MATERIAL_TriangleStripDrawMode, 0, 4, nC), zC._bindTexture("gpuParticleRecords", null)
        }
        return ZC.setAlphaMode(FC.d.ALPHA_DISABLE), nC
      }
      awaitLink(CC) {
        const zC = CC.getPipelineContext(),
          ZC = this.gl();
        !this.failed && ZC && (!zC || zC.isParallelCompiled && !zC.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : zC.isParallelCompiled && zC.program && (ZC.getProgramParameter(zC.program, ZC.LINK_STATUS) || this.fail(function(CC, zC, ZC) {
          if (CC.isContextLost()) return eC;
          for (const [QC, wC] of [
              ["VERTEX SHADER", zC.vertexShader],
              ["FRAGMENT SHADER", zC.fragmentShader]
            ]) {
            const zC = wC && !CC.getShaderParameter(wC, CC.COMPILE_STATUS) ? CC.getShaderInfoLog(wC) : null;
            if (zC) return `${QC} ${zC}`
          }
          return CC.getProgramInfoLog(ZC) || "a program did not link"
        }(ZC, zC, zC.program))))
      }
      gl() {
        return this.engine._gl
      }
      effectFor(CC) {
        return CC === NC.e ? this.multiplyEffect : this.effect
      }
      createEffect(CC) {
        return this.engine.createEffect(pC, [], xC, JC, CC, void 0, void 0, ((CC, zC) => {
          var ZC;
          this.fail(null !== (ZC = this.gl()) && void 0 !== ZC && ZC.isContextLost() ? eC : function(CC) {
            const zC = CC.split("\n    at ")[0];
            return /^\S*@\S*:\d+:\d+/.test(zC) ? "a program failed, its log not in this browser's stack" : zC.replace(/^Error: /, "")
          }(zC))
        }))
      }
      fail(CC) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${CC}`), this.reportFailure(CC);
          for (const CC of this.sS.Ix.slice()) CC instanceof vC && CC.disposeOnStop && CC.dispose()
        }
      }
    }
    var KC = ZC(39635);
    class YC extends KC.d {
      createEffect() {
        const CC = super.createEffect(...arguments);
        return mC(CC), dC.has(CC) || (dC.add(CC), CC.onCompileObservable.add((() => {
          mC(CC)
        }))), CC
      }
    }
    const dC = new WeakSet;

    function mC(CC) {
      CC._vertexSourceCodeBeforeMigration = "", CC._fragmentSourceCodeBeforeMigration = ""
    }
    var HC = ZC(40031),
      EC = ZC(40946),
      lC = ZC(39766),
      XC = ZC(39984),
      cC = ZC(39978),
      uC = ZC(39902),
      rC = ZC(40992),
      sC = ZC(37456),
      TC = ZC(41422),
      aC = ZC(41429),
      tC = ZC(41434),
      DC = ZC(39925),
      jC = ZC(2837),
      yC = ZC(37353),
      LC = ZC(40136),
      UC = ZC(37423),
      BC = ZC(37373);

    function OC(CC) {
      if (CC.visibility < 1 || !CC.isVisible || !CC.isEnabled() || CC.metadata[BC.e] || !CC.isReady()) return !0;
      const zC = CC.Zx;
      if (!zC || 0 === zC.length) return !0;
      for (let ZC = 0; ZC < zC.length; ZC++) {
        const QC = zC[ZC],
          wC = QC.cg();
        if (!wC || !wC.isReadyForSubMesh(CC, QC, !1)) return !0
      }
      return !1
    }
    class kC {
      constructor(CC, zC) {
        this.MN = CC, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, zC.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      RM(CC) {
        var zC;
        const ZC = this.armed;
        if (this.armed = !1, this.vis = null, !ZC) return !1;
        this.culled = 0;
        const {
          MN: QC
        } = this, wC = null === (zC = QC.JA) || void 0 === zC ? void 0 : zC.visibility;
        if (!wC || !CC || QC.Vg.CS) return !1;
        if (!(QC.fN.fQC[0] >= UC.e)) return !1;
        const bC = CC.getProjectionMatrix().m;
        if (0 !== bC[15]) return !1;
        const nC = QC.YN,
          fC = CC.globalPosition,
          oC = this.eye;
        return oC[0] = fC.x + nC[0], oC[1] = fC.y + nC[1], oC[2] = fC.z + nC[2], !!wC.eyeClear(oC[0], oC[1], oC[2], CC.minZ, bC, QC.fN) && (this.vis = wC, this.passable.clear(), this.count = 0, !0)
      }
      see(CC, zC) {
        const ZC = this.count++;
        if (ZC === this.cellSlots.length) {
          const CC = new Int32Array(2 * ZC);
          CC.set(this.cellSlots), this.cellSlots = CC
        }
        this.cellSlots[ZC] = zC, this.meshes[ZC] = CC
      }
      seeThrough(CC) {
        this.passable.add(CC)
      }
      finish(CC, zC) {
        const {
          vis: ZC,
          eye: QC,
          meshes: wC,
          count: bC,
          cellSlots: nC
        } = this, {
          fN: fC
        } = this.MN, [oC, qC] = fC.fQC, FC = null !== ZC && ZC.update(QC[0], QC[1], QC[2], fC.WCC, oC, qC, this.passable);
        let WC = 0;
        for (let NC = 0; NC < bC; NC++) {
          const QC = wC[NC];
          if (FC) {
            const CC = 3 * nC[NC];
            if (CC >= 0 && !ZC.isDrawn(zC[CC], zC[CC + 1], zC[CC + 2])) {
              WC++;
              continue
            }
          }
          DC.i.prototype.push.call(CC, QC)
        }
        wC.fill(null, 0, bC), this.count = 0, this.vis = null, this.culled = WC
      }
    }
    var VC = ZC(37404),
      Cz = ZC(37363),
      zz = ZC(40110),
      Zz = ZC(41438),
      Qz = ZC(40119),
      wz = ZC(40046);
    let bz = 1;
    const nz = new WeakSet;

    function fz() {
      return bz
    }

    function oz() {
      bz = bz >= 1073741823 ? 1 : bz + 1
    }

    function qz(CC) {
      const zC = CC.metadata;
      if (!zC || !0 !== zC[yC.o]) return;
      const ZC = zC[yC.q],
        QC = null === ZC || void 0 === ZC ? void 0 : ZC._noaStamps;
      if (!ZC || !QC) return;
      const wC = ZC.entries.indexOf(CC);
      wC >= 0 && (QC[wC] = 0)
    }

    function Fz(CC) {
      const zC = CC.Zx;
      for (let ZC = 0; ZC < zC.length; ZC++) {
        const CC = zC[ZC].cg();
        if (CC && !CC.isFrozen) return !1
      }
      for (let ZC = 0; ZC < zC.length; ZC++) {
        const CC = zC[ZC].cg();
        CC && nz.add(CC)
      }
      return !0
    }
    let Wz = !1;
    const Nz = new WeakSet;

    function Mz(CC, zC) {
      const ZC = CC[zC];
      if ("function" !== typeof ZC) throw new Error(`terrainDrawState: Babylon has no ${zC} to hook`);
      return ZC
    }

    function gz(CC, zC, ZC, QC, wC) {
      const bC = ZC.fN.WCC,
        nC = new Map;
      let fC = 0;
      const oC = new kC(ZC, CC),
        qC = new VC.d(bC, CC.mg());
      ! function(CC) {
        if (Nz.has(CC) || (Nz.add(CC), CC.onContextLostObservable.add(oz), CC.Yg.add(oz)), Wz) return;
        Wz = !0;
        const zC = Zz.c.prototype,
          ZC = Mz(zC, "_markSubMeshesAsDirty");
        Object.assign(zC, {
          _markSubMeshesAsDirty(CC) {
            ZC.call(this, CC), qz(this)
          }
        });
        const QC = Mz(wz.d.prototype, "_syncParentEnabledState");
        Object.assign(wz.d.prototype, {
          _syncParentEnabledState() {
            QC.call(this), qz(this)
          }
        });
        const wC = Mz(Qz.d.prototype, "resetDrawCache");
        Qz.d.prototype.resetDrawCache = function(CC, zC) {
          wC.call(this, CC, zC), qz(this.getMesh())
        };
        const bC = zz.d.prototype,
          nC = Mz(bC, "markDirty");
        bC.markDirty = function(CC) {
          nC.call(this, CC), nz.has(this) && oz()
        };
        const fC = Mz(bC, "_markAllSubMeshesAsDirty");
        Object.assign(bC, {
          _markAllSubMeshesAsDirty(CC) {
            fC.call(this, CC), nz.has(this) && oz()
          }
        })
      }(CC.mg());
      let FC = new Float64Array(384),
        WC = new Int32Array(64),
        NC = new Uint8Array(64),
        MC = new Float64Array(64),
        gC = new Int32Array(192),
        SC = 0;
      const pC = [],
        PC = new Float64Array(24),
        GC = () => {
          const CC = pC.pop();
          return void 0 !== CC ? (WC[CC] = 0, CC) : (SC === WC.length && (FC = Sz(FC, new Float64Array(2 * FC.length)), WC = Sz(WC, new Int32Array(2 * WC.length)), NC = Sz(NC, new Uint8Array(2 * NC.length)), MC = Sz(MC, new Float64Array(2 * MC.length)), gC = Sz(gC, new Int32Array(2 * gC.length))), SC++)
        },
        RC = CC => {
          const zC = 6 * CC._noaSlot,
            ZC = CC.SQC[0],
            QC = CC.SQC[1];
          FC[zC] = ZC.x, FC[zC + 1] = ZC.y, FC[zC + 2] = ZC.z, FC[zC + 3] = QC.x, FC[zC + 4] = QC.y, FC[zC + 5] = QC.z
        },
        AC = (CC, zC, ZC) => {
          if (!ZC) return oC.see(CC, -1), !1;
          const QC = OC(CC);
          return QC && oC.seeThrough(MC[zC]), oC.see(CC, zC), !QC
        };
      let xC = -1;
      return CC.getActiveMeshCandidates = () => {
        const ZC = CC.frustumPlanes,
          QC = zC._selectionContent;
        QC.reset(), (ZC => {
          const QC = CC.frustumPlanes;
          fC = fC + 1 | 0 || 1;
          const wC = zC.blocks,
            bC = oC.RM(CC.activeCamera),
            nC = bC && !0;
          if (nC) {
            const zC = CC.mg().currentRenderPassId;
            zC !== xC && (xC = zC, oz())
          }
          const qC = fz(),
            MC = nC && !1;
          wC.length > 0 && function(CC, zC) {
            for (let ZC = 0; ZC < 6; ZC++) {
              const QC = CC[ZC],
                wC = QC.normal;
              zC[4 * ZC] = wC.x, zC[4 * ZC + 1] = wC.y, zC[4 * ZC + 2] = wC.z, zC[4 * ZC + 3] = QC.d
            }
          }(QC, PC);
          const SC = FC,
            pC = WC,
            GC = NC;
          for (let CC = 0; CC < wC.length; CC++) {
            const zC = wC[CC];
            if (!LC.b.IsInFrustum(zC.SQC, QC)) continue;
            const FC = zC.entries;
            {
              const CC = zC._noaSlots,
                QC = zC._noaStamps,
                wC = zC._noaTerrain;
              for (let zC = 0; zC < FC.length; zC++) {
                const WC = CC[zC];
                if (pC[WC] !== fC && (pC[WC] = fC, GC[WC] = pz(SC, 6 * WC, PC) ? 1 : 0), 0 === GC[WC]) continue;
                const NC = FC[zC];
                if (nC && QC[zC] === qC) MC && 1 === wC[zC] && OC(NC) && 0, oC.see(NC, 1 === wC[zC] ? WC : -1);
                else if (nC) {
                  QC[zC] = qC;
                  const CC = !0 === NC.metadata[Cz.l];
                  wC[zC] = CC ? 1 : 0;
                  const ZC = AC(NC, WC, CC);
                  !CC || ZC && Fz(NC) || (QC[zC] = 0)
                } else bC ? AC(NC, WC, !0 === NC.metadata[Cz.l]) : DC.i.prototype.push.call(ZC, NC)
              }
              continue
            }
          }
          bC && oC.finish(ZC, gC)
        })(QC), qC.apply(QC, CC.activeCamera);
        const bC = zC.gQC;
        for (let CC = 0; CC < bC.length; CC++) {
          const zC = bC[CC];
          zC.isEnabled() && DC.i.prototype.push.call(QC, zC)
        }
        return wC(QC, ZC), QC
      }, {
        pQC: () => oC.culled,
        zQC: (CC, zC) => {
          const wC = Math.floor(zC[0] / bC),
            fC = Math.floor(zC[1] / bC),
            oC = Math.floor(zC[2] / bC),
            qC = `${wC}|${fC}|${oC}`;
          let FC = nC.get(qC);
          if (!FC) {
            const CC = [0, 0, 0];
            ZC.wzC([wC * bC - 1, fC * bC - 1, oC * bC - 1], null, CC), FC = Object.assign(QC(CC, bC + 2), {
              PQC: qC,
              GQC: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: GC()
            }), RC(FC), MC[FC._noaSlot] = (0, jC.f)(wC, fC, oC), gC[3 * FC._noaSlot] = wC, gC[3 * FC._noaSlot + 1] = fC, gC[3 * FC._noaSlot + 2] = oC, nC.set(qC, FC)
          }
          FC.GQC++, CC.metadata[yC.s] = FC
        },
        IH: CC => {
          const zC = CC.metadata[yC.s];
          zC && (zC.GQC--, zC.GQC <= 0 && (nC.delete(zC.PQC), pC.push(zC._noaSlot)), CC.metadata[yC.s] = null)
        },
        MQC: (CC, zC) => {
          const ZC = CC,
            QC = zC.metadata[yC.s];
          (ZC._noaSlots ??= []).push(QC._noaSlot), (ZC._noaStamps ??= []).push(0), (ZC._noaTerrain ??= []).push(0), ZC.entries.push(zC)
        },
        removeEntry: (CC, zC) => {
          const ZC = CC,
            QC = ZC.entries,
            wC = QC.indexOf(zC);
          if (wC < 0) return;
          const bC = ZC._noaSlots,
            nC = ZC._noaStamps,
            fC = ZC._noaTerrain,
            oC = QC.length - 1;
          QC[wC] = QC[oC], bC[wC] = bC[oC], nC[wC] = nC[oC], fC[wC] = fC[oC], QC.pop(), bC.pop(), nC.pop(), fC.pop()
        },
        y_: CC => {
          for (const zC of nC.values()) {
            zC.nQC.RQC(CC), zC.bQC.RQC(CC);
            for (const ZC of zC.SQC) ZC.RQC(CC);
            RC(zC)
          }
        }
      }
    }

    function Sz(CC, zC) {
      return zC.set(CC), zC
    }

    function pz(CC, zC, ZC) {
      const QC = CC[zC],
        wC = CC[zC + 1],
        bC = CC[zC + 2],
        nC = CC[zC + 3],
        fC = CC[zC + 4],
        oC = CC[zC + 5];
      for (let qC = 0; qC < 24; qC += 4) {
        const CC = ZC[qC],
          zC = ZC[qC + 1],
          FC = ZC[qC + 2];
        if (!(CC * (CC >= 0 ? nC : QC) + zC * (zC >= 0 ? fC : wC) + FC * (FC >= 0 ? oC : bC) + ZC[qC + 3] >= 0)) return !1
      }
      return !0
    }
    var Pz = ZC(37604);
    class Gz {
      constructor(CC, zC) {
        var ZC = CC.sS;
        ZC.sZC(new tC.e(ZC));
        var QC = new TC.c(oC);
        ZC.xQC = QC, QC.blocks = [];
        var wC, bC = {},
          fC = [];
        this.textPlanes = fC, this.pQC = () => wC.pQC(), this.y_ = CC => {
          FC(QC, CC), wC.y_(CC)
        }, this.zQC = (zC, ZC, nC) => {
          if (!zC.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!zC.metadata[yC.q] && !zC.metadata[yC.n]) {
            if (!ZC) {
              var oC = QC.gQC;
              if (zC.metadata[yC.x] && !zC.parent) {
                oC = fC;
                var FC = zC.WE().IQC;
                zC.metadata[yC.y] = FC.center.length() + FC.radius, zC.Hg = !0
              }
              return oC.push(zC), zC.metadata[yC.g] = oC, void(zC.metadata[yC.n] = !0)
            }
            var NC = Math.floor(nC[0] / qC),
              MC = Math.floor(nC[1] / qC),
              gC = Math.floor(nC[2] / qC),
              SC = NC + "|" + MC + "|" + gC,
              pC = bC[SC];
            if (!pC) {
              var PC = [NC * qC, MC * qC, gC * qC],
                GC = [0, 0, 0];
              CC.MN.wzC(PC, null, GC), pC = WC(GC, qC), QC.blocks.push(pC), bC[SC] = pC, pC.PQC = SC
            }
            wC.zQC(zC, nC), wC.MQC(pC, zC), pC.GQC = (pC.GQC || 0) + 1, zC.metadata[yC.q] = pC, zC.metadata[yC.o] = !0, zC.Hg = !0
          }
        }, this.IH = CC => {
          if (CC.metadata) {
            CC.metadata[yC.n] && ((0, jC.i)(CC.metadata[yC.g], CC), CC.metadata[yC.n] = !1), CC.metadata[yC.g] === fC && (CC.Hg = !1), CC.metadata[yC.g] = void 0, CC.metadata[yC.y] = void 0;
            var zC = CC.metadata[yC.q];
            zC && zC.entries && (CC.metadata[yC.o] && wC.removeEntry(zC, CC), zC.GQC--, zC.GQC <= 0 && (delete bC[zC.PQC], (0, jC.i)(QC.blocks, zC))), wC.IH(CC), CC.metadata[yC.q] = null, CC.metadata[yC.o] = !1
          }
        }, this.S_ = function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (CC.metadata[yC.q]) {
            if (CC.metadata[yC.o] === zC) return;
            var ZC = CC.metadata[yC.q];
            ZC && ZC.entries && (zC ? wC.MQC(ZC, CC) : wC.removeEntry(ZC, CC)), CC.metadata[yC.o] = zC
          } else {
            if (CC.metadata[yC.n] === zC) return;
            var bC = CC.metadata[yC.g] || QC.gQC;
            zC ? bC.push(CC) : (0, jC.i)(bC, CC), CC.metadata[yC.n] = zC
          }
        };
        var oC = () => {},
          qC = zC * CC.MN.fN.WCC,
          FC = (CC, zC) => {
            CC.blocks.forEach((CC => {
              CC.nQC.RQC(zC), CC.bQC.RQC(zC), CC.SQC.forEach((CC => CC.RQC(zC))), CC.blocks && FC(CC, zC)
            }))
          },
          WC = (CC, zC) => {
            var ZC = new nC.Eg(CC[0], CC[1], CC[2]),
              QC = new nC.Eg(CC[0] + zC, CC[1] + zC, CC[2] + zC);
            return new aC.b(ZC, QC, void 0, void 0, void 0, oC)
          };
        wC = gz(ZC, QC, CC.MN, WC, ((CC, zC) => {
          for (var ZC = 0; ZC < fC.length; ZC++) {
            var QC = fC[ZC];
            QC.isEnabled(!1) && ((0, Pz.b)(QC, zC) && DC.i.prototype.push.call(CC, QC))
          }
        }))
      }
    }

    function Rz(CC) {
      const {
        holderPosition: zC,
        holderRotation: ZC,
        Vk: QC,
        fov: wC,
        near: bC,
        far: nC
      } = CC.model.Lk, fC = CC.dQC;
      fC.position.L_(zC[0], zC[1], zC[2]), fC.rotation.L_(ZC[0], ZC[1], ZC[2]);
      const oC = CC.camera;
      oC.position.L_(QC[0], QC[1], QC[2]), oC.fov = wC, oC.minZ = bC, oC.maxZ = nC
    }

    function Az(CC) {
      const zC = CC.mg(),
        ZC = zC,
        QC = ZC._gl;
      if (!QC || ZC.fS < 2 || zC.BZC || QC.getParameter(QC.DEPTH_BITS) < 24) return !1;
      const wC = CC._renderingManager,
        bC = wC.getRenderingGroup(-1),
        nC = wC.getRenderingGroup(0),
        fC = XC.b.prototype.render;
      return bC.render = function(CC, zC, ZC, QC, wC, bC, oC, qC, FC) {
        (CC || nC._empty) && fC.call(this, CC, zC, ZC, QC, wC, bC, oC, qC, FC)
      }, nC.render = function(CC, ZC, wC, nC) {
        let oC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          qC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          NC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          MC = arguments.length > 8 ? arguments[8] : void 0;
        CC ? fC.call(this, CC, ZC, wC, nC, oC, qC, WC, NC, MC) : (zC.setAlphaMode(FC.d.ALPHA_DISABLE), fC.call(this, null, !1, !1, nC, oC, qC, WC, !1), bC._empty || (QC.depthRange(1, 1), fC.call(bC, null, ZC, wC, nC, oC, qC, WC, NC, MC), QC.depthRange(0, 1)), fC.call(this, null, ZC, wC, nC, !1, !1, !1, NC, MC))
      }, !0
    }

    function xz(CC, zC) {
      return [zC, sC.h].map(((zC, ZC) => {
        const QC = new wC.e("light", nC.Eg.FromArray(zC), CC);
        return QC.diffuse = bC.Color3.FromArray([1, 1, 1]), QC.specular = bC.Color3.FromArray([1, 1, 1]), QC.intensity = sC.e[ZC], QC
      }))
    }
    class Jz extends oC.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(CC) {
        var zC;
        this.heldTexture = CC, this.particleTexture = null !== (zC = null === CC || void 0 === CC ? void 0 : CC.mirror) && void 0 !== zC ? zC : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        CC && (this.particleTexture = null, (0, qC.C)(this.heldTexture), this.heldTexture = null), super.dispose(CC, zC, ZC)
      }
    }
    const Iz = QC.c.Zero();
    const iz = {
      gZC: function(CC, zC) {
        return new YC(CC, zC.FZC, {
          preserveDrawingBuffer: zC.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      EQC: function(CC, zC) {
        ! function(CC, zC, ZC) {
          const QC = new uC.e(CC.engine);
          CC.sS = QC, QC.detachControl(), QC.autoClear = !1, cC.b.MIN_RENDERINGGROUPS = -1;
          for (let bC = cC.b.MIN_RENDERINGGROUPS; bC <= 1; bC++) QC.setRenderingOrder(bC, XC.b.PainterSortCompare, XC.b.PainterSortCompare, XC.b.PainterSortCompare);
          QC.setRenderingAutoClearDepthStencil(0, !1), lC.b.Enabled = !1, CC.hQC = new Gz(CC, Math.round(zC.KQC)), CC.dQC = new EC.c("camHolder", QC), CC.camera = new HC.d("camera", new nC.Eg(0, 0, 0), QC), CC.camera.parent = CC.dQC, Rz(CC), (0, sC.l)(CC, ((CC, zC, ZC) => (0, rC.f)(zC, ZC, CC.sS))), QC.clearColor = bC.e.FromArray(zC.clearColor), QC.ambientColor = bC.Color3.FromArray(zC.ambientColor);
          const wC = ZC(QC, zC.HQC);
          QC.onNewLightAddedObservable.add((CC => {
            wC.some((zC => zC === CC)) || console.error(`Light "${CC.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), QC.skipPointerMovePicking = !0
        }(CC, zC, xz), Az(CC.sS)
      },
      YQC: Rz,
      setBabylonFog: function(CC, zC, ZC, QC) {
        const wC = CC.sS;
        wC.fogMode = 3, wC.fogStart = zC, wC.fogEnd = ZC, wC.fogColor.set(QC[0], QC[1], QC[2])
      },
      XQC: function(CC, zC, ZC) {
        return CC.engine.fS >= 2 && (CC.uQC || (CC.uQC = new hC(CC.sS, CC.rQC)), !CC.uQC.failed) ? CC.uQC.DH(zC, ZC) : new Jz(zC, ZC, CC.sS)
      },
      TQC: function(CC, zC) {
        CC.sS.Ix.forEach((ZC => {
          if (ZC instanceof vC) return void ZC.y_(zC, CC.MN.YN);
          const QC = ZC;
          if (QC.emitter.getConnectedParticleSystems)
            for (const CC of QC._particles) CC.position.set(CC.position.x - zC[0], CC.position.y - zC[1], CC.position.z - zC[2]);
          else {
            if (!QC.worldOffset) throw new Error("Particle system has no world offset");
            QC.worldOffset.x = -CC.MN.YN[0], QC.worldOffset.y = -CC.MN.YN[1], QC.worldOffset.z = -CC.MN.YN[2]
          }
        }))
      },
      linesFromArrays: function(CC, zC, ZC) {
        const QC = new fC.d(zC, CC.sS, null, void 0, void 0, !1);
        return (0, rC.e)(zC, ZC, CC.sS, QC), QC
      },
      aS: qz,
      sQC: function(CC, zC) {
        return Iz.origin.Av(zC.origin), Iz.direction.Av(zC.direction), Iz.length = zC.length, Iz.epsilon = zC.epsilon, Iz.sQC(CC, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40958: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => TC,
      g: () => GC,
      i: () => LC
    });
    var QC = ZC(40092),
      wC = ZC(40963),
      bC = ZC(40994),
      nC = ZC(40968),
      fC = ZC(37648),
      oC = ZC(37660),
      qC = ZC(37666),
      FC = ZC(37670),
      WC = ZC(37076),
      NC = ZC(37083),
      MC = ZC(40970),
      gC = ZC(37061),
      SC = ZC(37063),
      pC = ZC(37050);

    function PC(CC, zC) {
      return Object.assign((function(CC, ZC, QC, wC) {
        return zC(this.featureState, CC, ZC, QC, wC)
      }), {
        Qg: CC
      })
    }

    function GC(CC) {
      const zC = class extends MC.e {
          constructor(zC, ZC) {
            const QC = (0, SC.Y)(zC),
              wC = QC && (0, SC.x)(QC, CC.name);
            for (var bC = arguments.length, nC = new Array(bC > 2 ? bC - 2 : 0), fC = 2; fC < bC; fC++) nC[fC - 2] = arguments[fC];
            super(zC, CC.name, CC.priority, wC ? wC.defines : CC.defines(...nC), !1), this.featureState = void 0, this.featureState = ZC, this._pluginManager._addPlugin(this), this._enable(!0), (0, SC.B)(this._material, CC, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return CC.className
          }
          isCompatible(CC) {
            return CC === pC.e.GLSL || CC === pC.e.WGSL
          }
        },
        ZC = (0, gC.l)(CC);
      for (const [QC, wC] of Object.entries(gC.e)) {
        const bC = CC[QC];
        if (bC) {
          const CC = ZC[QC];
          Object.defineProperty(zC.prototype, wC, {
            value: PC(bC, CC),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zC
    }
    class RC extends(GC(fC.d)) {}
    var AC = ZC(39635),
      xC = ZC(40977);
    const JC = new WeakMap;

    function IC(CC, zC, ZC) {
      let QC = JC.get(ZC);
      QC || (QC = new Map, JC.set(ZC, QC));
      const {
        url: wC
      } = CC;
      let bC = QC.get(wC);
      return bC || (bC = async function(CC, zC, ZC) {
        var QC;
        const {
          width: wC,
          height: bC
        } = CC.getSize(), fC = Math.round(bC / wC), oC = CC.getInternalTexture(), qC = zC && zC.byteLength === wC * wC * fC * 4 ? zC : null !== (QC = iC.get(oC)) && void 0 !== QC ? QC : CC._readPixelsSync(), FC = new xC.d(qC, wC, wC, fC, AC.d.TEXTUREFORMAT_RGBA, ZC, !0, !1, nC.e.NEAREST_NEAREST_MIPLINEAR);
        iC.has(oC) || (! function(CC, zC) {
          const ZC = zC.createRawTexture(new Uint8Array(4), 1, 1, AC.d.TEXTUREFORMAT_RGBA, !1, !1, nC.e.NEAREST_SAMPLINGMODE);
          CC._hardwareTexture.release(), zC.unbindAllTextures(), ZC._swapAndDie(CC, !1)
        }(oC, ZC.mg()), iC.set(oC, qC));
        return FC
      }(CC, zC, ZC), QC.set(wC, bC), bC.catch((() => {
        QC.delete(wC)
      }))), bC
    }
    const iC = new WeakMap;
    var vC = ZC(37673);
    class eC extends(GC(oC.j)) {
      constructor(CC, zC) {
        super(CC, zC), zC.textures.forEach(((CC, zC) => {
          CC.mirror.onLoadObservable.add((CC => {
            this.setTextureArrayData(CC, zC).catch((CC => {
              console.error(`Failed to build texture array for atlas ${zC}`, CC)
            }))
          }))
        })), (0, vC.k)(zC, CC.shaderLanguage)
      }
      async setTextureArrayData(CC, zC) {
        var ZC, QC;
        const wC = this.featureState,
          {
            width: bC,
            height: nC
          } = CC.getSize(),
          fC = wC.useWebGL2 ? await IC(CC, null !== (ZC = null === (QC = wC.sources.pixels) || void 0 === QC ? void 0 : QC[zC]) && void 0 !== ZC ? ZC : null, this._material.Km()) : null;
        (0, vC.d)(this._material, wC, zC, fC, bC, Math.round(nC / bC), this._material.shaderLanguage)
      }
    }
    var hC = ZC(40985),
      KC = ZC(40127),
      YC = ZC(36961),
      dC = ZC(40988),
      mC = ZC(40235),
      HC = ZC(40119),
      EC = ZC(40946),
      lC = ZC(37432),
      XC = ZC(40992);
    class cC extends hC.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const uC = {
      Mesh: dC.e,
      TransformNode: EC.c,
      gg: hC.c,
      VertexBuffer: hC.f,
      BoundingInfo: KC.d,
      Eg: YC.Eg,
      ArenaBuffer: cC,
      SubMesh: HC.d,
      VertexData: mC.e,
      MirroredGeometry: XC.d,
      meshFromArrays: XC.e,
      plainMeshFromArrays: XC.f
    };
    (0, lC.e)(uC);
    var rC = ZC(37290);
    class sC extends(GC(FC.f)) {
      constructor(CC, zC) {
        if (super(CC, zC), CC instanceof QC.StandardMaterial && zC.dirLightCount > 0) {
          const zC = CC,
            ZC = zC._blockDirtyMechanism;
          zC._blockDirtyMechanism = !0, CC.disableLighting = !0, zC._blockDirtyMechanism = ZC;
          const QC = (0, SC.Y)(CC);
          QC && (QC.disableLighting = !0, (0, SC.W)(QC))
        }(0, rC.g)(CC)
      }
      dispose(CC) {
        (0, rC.k)(this._material), super.dispose(CC)
      }
    }

    function TC(CC, zC) {
      if (!(zC instanceof QC.StandardMaterial) || zC.specularTexture) return;
      const {
        r: ZC,
        g: wC,
        b: bC
      } = zC.specularColor;
      0 === ZC && 0 === wC && 0 === bC && (CC.SPECULARTERM = !1)
    }(0, FC.d)({
      disableUnusedSpecularTerm: TC
    });
    var aC = ZC(37175),
      tC = ZC(37450);
    const DC = new RegExp(`^#define ${qC.e}\\s*$`, "m");
    class jC extends(GC(qC.g)) {
      constructor(CC, zC) {
        super(CC, zC), this.Sg = !1, zC.ditherOnlyWhileFading && (tC.g.add(CC), this.prewarmDitherTwins(CC))
      }
      prewarmDitherTwins(CC) {
        const zC = new WeakSet;
        CC.onEffectCreatedObservable.add((ZC => {
          let {
            effect: QC,
            subMesh: wC
          } = ZC;
          if (this.featureState.prewarmingDither || zC.has(QC)) return;
          zC.add(QC);
          const bC = null === wC || void 0 === wC ? void 0 : wC.getMesh();
          bC && !DC.test(QC.defines) && CC.Km().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(bC) || zC.delete(QC)
          }))
        }))
      }
      prewarmDither(CC) {
        if (this.Sg || CC.GJ()) return !1;
        const zC = new HC.d(0, 0, 0, 0, 0, CC, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(CC, zC)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zC.effect
      }
      dispose(CC) {
        this.Sg = !0, super.dispose(CC)
      }
    }
    const yC = new Map;

    function LC(CC, zC) {
      yC.set(CC, zC)
    }
    LC(fC.d, RC), LC(oC.j, eC), LC(qC.g, jC), LC(FC.f, sC), (0, WC.c)({
      create: (CC, zC) => {
        const ZC = new QC.StandardMaterial(CC.name, zC);
        return (0, aC.u)(CC, ZC), ZC.detailMap._pluginDefineNames
      },
      write: (CC, zC, ZC) => {
        (0, aC.X)(CC.mirror, zC, ZC)
      },
      addFeature: (CC, zC, ZC) => {
        const QC = yC.get(zC.feature);
        if (!QC) throw new Error(`${zC.feature.name} has no plugin class (registerPluginClass)`);
        new QC(CC.mirror, zC.state, ...ZC)
      },
      texture: (CC, zC, ZC) => {
        let {
          url: QC,
          noMipmap: wC,
          invertY: bC,
          samplingMode: fC,
          data: oC,
          sets: qC
        } = ZC;
        if (!oC) {
          const ZC = new nC.e(QC, zC, wC, bC, fC);
          return Object.assign(ZC, qC), void(0, NC.L)(CC, ZC)
        }
        const FC = {},
          WC = new Promise(((CC, zC) => {
            FC.onLoad = CC, FC.onError = (CC, ZC) => {
              zC(new Error(`${oC.context}: ${(null===ZC||void 0===ZC?void 0:ZC.message)||CC||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: MC,
            bytes: gC,
            label: SC
          } = oC,
          pC = {
            noMipmap: wC,
            invertY: !1,
            samplingMode: fC,
            ...FC,
            mimeType: MC,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          PC = new nC.e(null, zC, pC);
        aC.w.set(PC, WC), Object.assign(PC, qC), PC.updateURL(QC, gC);
        const GC = PC.getInternalTexture();
        GC && (GC.label = SC), CC.uvSet = PC.coordinatesIndex, CC.matrix.set((0, aC.P)(PC)), (0, NC.L)(CC, PC)
      },
      cube: (CC, zC, ZC) => {
        let {
          rootUrl: QC,
          files: bC,
          noMipmap: fC,
          luminance: oC
        } = ZC;
        const {
          samplingMode: qC
        } = CC.sampler, FC = qC === (0, NC.y)(fC) ? null : () => {
          (0, aC.L)(WC, qC)
        }, WC = new wC.c(QC, zC, null, fC, bC, FC, null, (0, NC.u)(oC));
        WC.coordinatesMode = nC.e.SKYBOX_MODE, (0, NC.L)(CC, WC)
      },
      canvas: (CC, zC, ZC) => {
        let {
          width: QC,
          height: wC,
          mipmaps: fC,
          samplingMode: oC,
          hasAlpha: qC = !1,
          wrap: FC = nC.e.CLAMP_ADDRESSMODE
        } = ZC;
        const WC = new bC.d(zC, {
          width: QC,
          height: wC
        }, CC, fC, oC);
        WC.hasAlpha = qC, WC.wrapU = FC, WC.wrapV = FC;
        const NC = (0, aC.C)(WC);
        return (0, aC.F)(NC, WC), NC
      }
    })
  },
  40992: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => FC,
      e: () => WC,
      f: () => NC
    });
    var QC = ZC(40985),
      wC = ZC(39882),
      bC = ZC(40127),
      nC = ZC(40244),
      fC = ZC(40988),
      oC = ZC(40235),
      qC = ZC(37339);
    class FC extends nC.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (CC, zC) => {
          this.releaseUnlessInstanced(zC)
        }, this.onLinked = null
      }
      link(CC) {
        var zC;
        (0, qC.n)(CC), this.model = CC, null === (zC = this.onLinked) || void 0 === zC || zC.call(this, CC)
      }
      relink() {
        this.release();
        const CC = [];
        for (const wC of Object.values(this._vertexBuffers))
          if (!wC.getIsInstanced()) {
            const {
              byteOffset: zC,
              byteStride: ZC,
              type: QC,
              normalized: bC
            } = wC;
            CC.push({
              kind: wC.getKind(),
              data: wC.getData(),
              offset: zC,
              stride: ZC,
              components: wC.getSize(),
              glType: QC,
              isNormalized: bC
            })
          } const zC = this._indices.length ? this._indices : null,
          {
            minimum: ZC,
            maximum: QC
          } = this.extend;
        this.link(new qC.f(CC, zC, this.getTotalVertices(), new Float64Array(ZC.VZC()), new Float64Array(QC.VZC())))
      }
      copy(CC) {
        if (!this.model) return super.copy(CC);
        const zC = new FC(CC, this.Km()),
          ZC = this.CQC(void 0, !0);
        ZC && zC.setIndices(ZC);
        let nC = !1;
        for (const bC in this._vertexBuffers) {
          const CC = this._vertexBuffers[bC],
            ZC = CC.getData();
          if (!ZC) continue;
          const fC = CC.getSize(),
            {
              type: oC,
              byteOffset: qC,
              byteStride: FC,
              normalized: WC
            } = CC;
          nC ||= CC.isUpdatable();
          const NC = CC.getIsInstanced() ? (ZC instanceof Array ? 4 * ZC.length : ZC.byteLength) / FC : this.getTotalVertices(),
            MC = (0, wC.o)(ZC, fC, oC, qC, FC, NC, !0),
            gC = {
              updatable: CC.isUpdatable(),
              stride: fC,
              type: oC,
              normalized: WC,
              takeBufferOwnership: !0,
              instanced: CC.getIsInstanced()
            };
          zC.setVerticesBuffer(new QC.f(this.mg(), MC, bC, gC), NC)
        }
        return zC._updatable = nC, zC._boundingInfo = new bC.d(this.extend.minimum, this.extend.maximum), zC.relink(), zC
      }
      static mergeMeshes(CC, zC, ZC, QC, wC, bC) {
        const oC = CC[0].Km(),
          qC = new fC.e(CC[0].name + "_merged", oC),
          WC = new FC(nC.c.RandomId(), oC, void 0, !1, qC);
        try {
          if (!fC.e.MergeMeshes(CC, zC, ZC, qC, wC, bC)) return qC.dispose(), null
        } catch (NC) {
          throw qC.dispose(), NC
        }
        return WC.relink(), qC
      }
      removeVerticesData(CC) {
        this.releaseUnlessInstanced(CC), super.removeVerticesData(CC)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(CC) {
        var zC;
        CC && null !== (zC = this.getVertexBuffer(CC)) && void 0 !== zC && zC.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, qC.x)(this.model), this.model = null)
      }
    }

    function WC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fC.e(CC, ZC);
      const wC = (0, qC.j)(zC),
        {
          positions: bC,
          normals: WC,
          uvs: NC,
          indices: MC,
          named: gC = {}
        } = zC,
        SC = new oC.e;
      SC.positions = bC, SC.normals = null !== WC && void 0 !== WC ? WC : null, SC.uvs = null !== NC && void 0 !== NC ? NC : null, SC.indices = MC;
      const pC = new FC(nC.c.RandomId(), ZC, SC, !1, QC);
      for (const {
          kind: nC,
          components: fC
        }
        of wC.vertexAttributes) nC in gC && QC.setVerticesData(nC, gC[nC], !1, fC);
      return pC.link(wC), QC
    }

    function NC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const wC = new fC.e(CC, ZC),
        {
          positions: bC,
          normals: nC,
          uvs: qC,
          indices: FC
        } = zC;
      return Object.assign(new oC.e, {
        positions: bC,
        normals: nC,
        uvs: qC,
        indices: FC
      }).applyToMesh(wC, QC), wC
    }
  },
  41418: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => pC,
      e: () => fC,
      h: () => nC,
      j: () => qC
    });
    var QC = ZC(37138),
      wC = ZC(38538),
      bC = ZC(38529);

    function nC(CC, zC, ZC, QC) {
      const wC = bC.x;
      zC.fill(0), CC.gravity.toArray(zC, wC.gravity), CC.colorDead.toArray(zC, wC.colorDead), ZC[wC.ramp] = CC.useRampGradients ? 1 : 0;
      const nC = CC.getColorGradients(),
        fC = NC(CC, nC, "colour", QC);
      ZC[wC.colorCount] = fC;
      for (let bC = 0; bC < fC; bC++) {
        var oC;
        const CC = nC[MC(nC, bC)];
        zC[wC.colorPositions + bC] = CC.gradient, CC.color1.toArray(zC, wC.color1 + 4 * bC), (null !== (oC = CC.color2) && void 0 !== oC ? oC : CC.color1).toArray(zC, wC.color2 + 4 * bC)
      }
      const qC = CC.getVelocityGradients(),
        FC = NC(CC, qC, "Np", QC);
      ZC[wC.velocityCount] = FC;
      for (let bC = 0; bC < FC; bC++) GC(zC, wC.Np + 4 * bC, qC[MC(qC, bC)]);
      const WC = CC.useRampGradients ? CC.getColorRemapGradients() : null,
        gC = NC(CC, WC, "colour remap", QC);
      ZC[wC.remapCount] = gC;
      for (let bC = 0; bC < gC; bC++) GC(zC, wC.remap + 4 * bC, WC[MC(WC, bC)])
    }

    function fC() {
      return {
        key: [],
        texels: new Uint8Array(4 * bC.k)
      }
    }
    const oC = [];

    function qC(CC, zC) {
      return FC(CC, oC), !PC(oC, zC.key) && (zC.key.length = 0, zC.key.push(...oC), zC.key.length > 0 && function(CC, zC) {
        for (let ZC = 0; ZC < bC.k; ZC++) wC.k.GetCurrentGradient(ZC / bC.k, CC, ((CC, zC, ZC) => {
          QC.Color3.LerpToRef(CC.color, zC.color, ZC, WC)
        })), zC[4 * ZC] = 255 * WC.r, zC[4 * ZC + 1] = 255 * WC.g, zC[4 * ZC + 2] = 255 * WC.b, zC[4 * ZC + 3] = 255
      }(CC.getRampGradients(), zC.texels), !0)
    }

    function FC(CC, zC) {
      zC.length = 0;
      const ZC = CC.useRampGradients ? CC.getRampGradients() : null;
      if (null !== ZC && void 0 !== ZC && ZC.length) {
        zC.push(ZC.length);
        for (const CC of ZC) zC.push(CC.gradient, CC.color.r, CC.color.g, CC.color.b)
      }
    }
    const WC = new QC.Color3;

    function NC(CC, zC, ZC, QC) {
      return zC ? zC.length > bC.d ? (QC(`particleStops:${ZC}`, `GPU particles use the first 2 and last ${bC.d-2} of more than ${bC.d} ${ZC} gradient stops (${CC.name})`), bC.d) : zC.length : 0
    }

    function MC(CC, zC) {
      return zC < 2 || CC.length <= bC.d ? zC : CC.length - bC.d + zC
    }
    const gC = new Float32Array(bC.r),
      SC = new Uint32Array(gC.buffer);

    function pC(CC, zC, ZC) {
      return nC(CC, gC, SC, ZC), zC && PC(SC, zC) ? null : SC.slice()
    }

    function PC(CC, zC) {
      if (CC.length !== zC.length) return !1;
      for (let ZC = 0; ZC < CC.length; ZC++)
        if (CC[ZC] !== zC[ZC]) return !1;
      return !0
    }

    function GC(CC, zC, ZC) {
      var QC;
      CC[zC] = ZC.gradient, CC[zC + 1] = ZC.factor1, CC[zC + 2] = null !== (QC = ZC.factor2) && void 0 !== QC ? QC : ZC.factor1
    }
  },
  41411: (CC, zC, ZC) => {
    function QC() {
      let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const zC = new Set;
      return (ZC, QC) => {
        zC.has(ZC) || (zC.add(ZC), console.warn(CC + QC))
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);