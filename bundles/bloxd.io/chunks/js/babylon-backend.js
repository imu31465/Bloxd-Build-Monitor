export const id = 0;
export const ids = [0];
export const modules = {
  40615: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      addBabylonLights: () => Wr,
      default: () => Vr
    });
    var FY = DY(40617),
      AY = (DY(39109), DY(40316), DY(39602), DY(40633)),
      IY = DY(38965),
      RY = DY(36586),
      OY = DY(36518),
      gY = DY(40640),
      aY = DY(40645),
      vY = DY(36482),
      uY = (DY(40327), DY(40663)),
      sY = DY(40654),
      iY = DY(38075),
      yY = DY(40666),
      QY = DY(38998),
      oY = DY(38058);
    const WY = "gpuParticles",
      EY = oY.r,
      mY = YY => YY / 4,
      VY = YY => `gpuParticleSystem[${YY>>2}].${"xyzw"[3&YY]}`,
      SY = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${oY.b}\n#define COLOR_POSITIONS ${mY(EY.colorPositions)}\n#define COLOR1 ${mY(EY.color1)}\n#define COLOR2 ${mY(EY.color2)}\n#define VELOCITY ${mY(EY.ci)}\n#define REMAP ${mY(EY.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${oY.o/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${VY(EY.gravity)}, ${VY(EY.gravity+1)}, ${VY(EY.gravity+2)}); }\nint colorCount() { return int(${VY(EY.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${mY(EY.colorDead)}]; }\nint velocityCount() { return int(${VY(EY.velocityCount)}); }\nint remapCount() { return int(${VY(EY.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    QY.b.ShadersStore[`${WY}VertexShader`] = SY, QY.b.ShadersStore[`${WY}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const lY = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      TY = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var eY = DY(38054),
      NY = DY(40673);
    class BY extends eY.d {
      constructor(YY, rY, DY, FY) {
        super(YY, rY, DY), this.renderer = DY, this.LQ = FY, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(oY.o), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, NY.g)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (YY, rY) => {
          const {
            engine: DY,
            perRow: FY
          } = this, AY = DY._gl;
          DY._bindTextureDirectly(AY.TEXTURE_2D, this.records, !0), DY._unpackFlipY(!1);
          const IY = this.ring.recordBits;
          for (let RY = YY; RY < rY;) {
            const YY = Math.floor(RY / FY),
              DY = Math.min(rY, (YY + 1) * FY);
            AY.texSubImage2D(AY.TEXTURE_2D, 0, RY % FY * 4, YY, 4 * (DY - RY), 1, AY.RGBA_INTEGER, AY.UNSIGNED_INT, IY, RY * oY.f), RY = DY
          }
          DY._bindTextureDirectly(AY.TEXTURE_2D, null)
        }, this.id = YY;
        const AY = FY.ky();
        this.engine = AY;
        const IY = Math.max(1, rY);
        this.perRow = Math.min(IY, 256), this.records = AY.createRawTexture(null, 4 * this.perRow, Math.ceil(IY / this.perRow), uY.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, uY.b.TEXTURE_NEAREST_SAMPLINGMODE, null, uY.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.LQ.getAnimationRatio() || 1;
        const rY = this.LQ.getFrameId();
        if (rY === this.animatedFrame) return !1;
        const DY = super.animate(YY);
        return DY && (this.animatedFrame = rY, this.ring.takeUploads(this.uploadSlots)), DY
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(YY) {
        (0, NY.h)(this, this.uniforms, this.uniformBits, YY);
        for (const DY of oY.q) this.uniforms[DY] = this.uniformBits[DY];
        var rY;
        (0, NY.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (rY = this.ramp) || void 0 === rY || rY.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = sY.c.CreateRGBATexture(this.rampTexels.texels, oY.k, 1, this.LQ, !1, !1, uY.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var YY;
        this.records.dispose(), null === (YY = this.ramp) || void 0 === YY || YY.dispose(), this.ramp = null
      }
    }
    class cY {
      constructor(YY) {
        this.LQ = YY, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, yY.b)(), this.engine = YY.ky(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = sY.c.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, YY, !1, !1, uY.b.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      XN(YY, rY) {
        const DY = 256 * this.engine.getCaps().maxTextureSize;
        rY > DY && this.warnOnce(`capacity:${YY}`, `particle system ${YY} holds ${DY} particles, not ${rY}: its records texture's limit`);
        const FY = new BY(YY, Math.min(rY, DY), this, this.LQ);
        return this.LQ.addParticleSystem(FY), FY
      }
      canDraw(YY) {
        var rY, DY;
        if (this.failed || null === (rY = YY.texture) || void 0 === rY || null === (DY = rY.mirror) || void 0 === DY || !DY.isReady()) return !1;
        for (const FY of (0, iY.l)(YY.blendMode))
          if (!this.effectFor(FY).isReady()) return !1;
        return !0
      }
      disposeStopped(YY) {
        this.LQ._toBeDisposed.push(YY)
      }
      remove(YY) {
        this.LQ.removeParticleSystem(YY), YY.releaseGl()
      }
      render(YY) {
        var rY;
        if (!YY.isReady() || !YY.hasLiveParticles()) return 0;
        const {
          engine: DY,
          LQ: FY,
          frame: AY
        } = this;
        YY.prepareDraw(this.warnOnce), YY.drawOffset(AY, 0), AY[3] = YY.drawTime();
        const IY = YY.ring.drawStart(),
          RY = YY.ring.drawCount(),
          OY = null !== (rY = YY.ramp) && void 0 !== rY ? rY : this.whiteRamp;
        DY.setState(!1);
        for (const gY of (0, iY.l)(YY.blendMode)) {
          const rY = this.effectFor(gY);
          DY.enableEffect(rY), rY.setTexture("gpuParticleTexture", YY.texture.mirror), rY.setTexture("gpuParticleRampTexture", OY), rY._bindTexture("gpuParticleRecords", YY.records), rY.setMatrix("gpuParticleView", FY.getViewMatrix()), rY.setMatrix("gpuParticleProjection", FY.getProjectionMatrix()), rY.setFloatArray4("gpuParticleSystem", YY.uniforms), rY.setFloat4("gpuParticleFrame", AY[0], AY[1], AY[2], AY[3]), rY.setFloat2("gpuParticleRange", IY, RY), rY.setFloat("gpuParticleRamp", YY.uniforms[oY.r.ramp]), DY.bindBuffers(this.vertexBuffers, null, rY), DY.setAlphaMode((0, iY.h)(gY)), DY.drawArraysType(uY.b.MATERIAL_TriangleStripDrawMode, 0, 4, RY), rY._bindTexture("gpuParticleRecords", null)
        }
        return DY.setAlphaMode(uY.b.ALPHA_DISABLE), RY
      }
      awaitLink(YY) {
        const rY = YY.getPipelineContext(),
          DY = this.engine._gl;
        !this.failed && DY && (!rY || rY.isParallelCompiled && !rY.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : rY.isParallelCompiled && rY.program && (DY.getProgramParameter(rY.program, DY.LINK_STATUS) || this.fail(DY.getProgramInfoLog(rY.program) || "a program did not link")))
      }
      effectFor(YY) {
        return YY === iY.b ? this.multiplyEffect : this.effect
      }
      createEffect(YY) {
        return this.engine.createEffect(WY, [], lY, TY, YY, void 0, void 0, ((YY, rY) => {
          this.fail(rY)
        }))
      }
      fail(YY) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${YY}`);
          for (const YY of this.LQ.YV.slice()) YY instanceof BY && YY.disposeOnStop && YY.dispose()
        }
      }
    }
    var KY = DY(39328),
      HY = DY(40314),
      zY = DY(39087),
      ZY = DY(39290),
      CY = DY(39288),
      fY = DY(39209),
      jY = DY(40368),
      hY = DY(36876),
      dY = DY(40677),
      JY = DY(40686),
      MY = DY(40693),
      wY = DY(39231),
      bY = DY(36751),
      XY = DY(36745),
      qY = DY(39424),
      pY = DY(36830),
      kY = DY(36774);

    function GY(YY) {
      if (YY.visibility < 1 || !YY.isVisible || !YY.isEnabled() || YY.metadata[kY.f] || !YY.isReady()) return !0;
      const rY = YY.qm;
      if (!rY || 0 === rY.length) return !0;
      for (let DY = 0; DY < rY.length; DY++) {
        const FY = rY[DY],
          AY = FY.Uy();
        if (!AY || !AY.isReadyForSubMesh(YY, FY, !1)) return !0
      }
      return !1
    }
    class xY {
      constructor(YY, rY) {
        this.Gu = YY, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, rY.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      Ei(YY) {
        var rY;
        const DY = this.armed;
        if (this.armed = !1, this.vis = null, !DY) return !1;
        this.culled = 0;
        const {
          Gu: FY
        } = this, AY = null === (rY = FY.Zm) || void 0 === rY ? void 0 : rY.visibility;
        if (!AY || !YY || FY.sQ.iQ) return !1;
        if (!(FY.Mu.eDY[0] >= pY.f)) return !1;
        const IY = YY.getProjectionMatrix().m;
        if (0 !== IY[15]) return !1;
        const RY = FY.os,
          OY = YY.globalPosition,
          gY = this.eye;
        return gY[0] = OY.x + RY[0], gY[1] = OY.y + RY[1], gY[2] = OY.z + RY[2], !!AY.eyeClear(gY[0], gY[1], gY[2], YY.minZ, IY, FY.Mu) && (this.vis = AY, this.passable.clear(), this.count = 0, !0)
      }
      see(YY, rY) {
        const DY = this.count++;
        if (DY === this.cellSlots.length) {
          const YY = new Int32Array(2 * DY);
          YY.set(this.cellSlots), this.cellSlots = YY
        }
        this.cellSlots[DY] = rY, this.meshes[DY] = YY
      }
      seeThrough(YY) {
        this.passable.add(YY)
      }
      finish(YY, rY) {
        const {
          vis: DY,
          eye: FY,
          meshes: AY,
          count: IY,
          cellSlots: RY
        } = this, {
          Mu: OY
        } = this.Gu, [gY, aY] = OY.eDY, vY = null !== DY && DY.update(FY[0], FY[1], FY[2], OY.K9, gY, aY, this.passable);
        let uY = 0;
        for (let sY = 0; sY < IY; sY++) {
          const FY = AY[sY];
          if (vY) {
            const YY = 3 * RY[sY];
            if (YY >= 0 && !DY.isDrawn(rY[YY], rY[YY + 1], rY[YY + 2])) {
              uY++;
              continue
            }
          }
          wY.f.prototype.push.call(YY, FY)
        }
        AY.fill(null, 0, IY), this.count = 0, this.vis = null, this.culled = uY
      }
    }
    var nY = DY(36812),
      PY = DY(36762),
      UY = DY(39414),
      LY = DY(40700),
      tY = DY(39416),
      Yr = DY(39347);
    let rr = 1;
    const Dr = new WeakSet;

    function Fr() {
      return rr
    }

    function Ar() {
      rr = rr >= 1073741823 ? 1 : rr + 1
    }

    function Ir(YY) {
      const rY = YY.metadata;
      if (!rY || !0 !== rY[XY.o]) return;
      const DY = rY[XY.s],
        FY = null === DY || void 0 === DY ? void 0 : DY._noaStamps;
      if (!DY || !FY) return;
      const AY = DY.entries.indexOf(YY);
      AY >= 0 && (FY[AY] = 0)
    }

    function Rr(YY) {
      const rY = YY.qm;
      for (let DY = 0; DY < rY.length; DY++) {
        const YY = rY[DY].Uy();
        if (YY && !YY.isFrozen) return !1
      }
      for (let DY = 0; DY < rY.length; DY++) {
        const YY = rY[DY].Uy();
        YY && Dr.add(YY)
      }
      return !0
    }
    let Or = !1;
    const gr = new WeakSet;

    function ar(YY, rY) {
      const DY = YY[rY];
      if ("function" !== typeof DY) throw new Error(`terrainDrawState: Babylon has no ${rY} to hook`);
      return DY
    }

    function vr(YY, rY, DY, FY, AY) {
      const IY = DY.Mu.K9,
        RY = new Map;
      let OY = 0;
      const gY = new xY(DY, YY),
        aY = new nY.c(IY, YY.ky());
      ! function(YY) {
        if (gr.has(YY) || (gr.add(YY), YY.onContextLostObservable.add(Ar), YY.onContextRestoredObservable.add(Ar)), Or) return;
        Or = !0;
        const rY = LY.c.prototype,
          DY = ar(rY, "_markSubMeshesAsDirty");
        Object.assign(rY, {
          _markSubMeshesAsDirty(YY) {
            DY.call(this, YY), Ir(this)
          }
        });
        const FY = ar(Yr.b.prototype, "_syncParentEnabledState");
        Object.assign(Yr.b.prototype, {
          _syncParentEnabledState() {
            FY.call(this), Ir(this)
          }
        });
        const AY = ar(tY.d.prototype, "resetDrawCache");
        tY.d.prototype.resetDrawCache = function(YY, rY) {
          AY.call(this, YY, rY), Ir(this.getMesh())
        };
        const IY = UY.c.prototype,
          RY = ar(IY, "markDirty");
        IY.markDirty = function(YY) {
          RY.call(this, YY), Dr.has(this) && Ar()
        };
        const OY = ar(IY, "_markAllSubMeshesAsDirty");
        Object.assign(IY, {
          _markAllSubMeshesAsDirty(YY) {
            OY.call(this, YY), Dr.has(this) && Ar()
          }
        })
      }(YY.ky());
      let vY = new Float64Array(384),
        uY = new Int32Array(64),
        sY = new Uint8Array(64),
        iY = new Float64Array(64),
        yY = new Int32Array(192),
        QY = 0;
      const oY = [],
        WY = new Float64Array(24),
        EY = () => {
          const YY = oY.pop();
          return void 0 !== YY ? (uY[YY] = 0, YY) : (QY === uY.length && (vY = ur(vY, new Float64Array(2 * vY.length)), uY = ur(uY, new Int32Array(2 * uY.length)), sY = ur(sY, new Uint8Array(2 * sY.length)), iY = ur(iY, new Float64Array(2 * iY.length)), yY = ur(yY, new Int32Array(2 * yY.length))), QY++)
        },
        mY = YY => {
          const rY = 6 * YY._noaSlot,
            DY = YY.ZDY[0],
            FY = YY.ZDY[1];
          vY[rY] = DY.x, vY[rY + 1] = DY.y, vY[rY + 2] = DY.z, vY[rY + 3] = FY.x, vY[rY + 4] = FY.y, vY[rY + 5] = FY.z
        },
        VY = (YY, rY, DY) => {
          if (!DY) return gY.see(YY, -1), !1;
          const FY = GY(YY);
          return FY && gY.seeThrough(iY[rY]), gY.see(YY, rY), !FY
        };
      let SY = -1;
      return YY.getActiveMeshCandidates = () => {
        const DY = YY.frustumPlanes,
          FY = rY._selectionContent;
        FY.reset(), (DY => {
          const FY = YY.frustumPlanes;
          OY = OY + 1 | 0 || 1;
          const AY = rY.blocks,
            IY = gY.Ei(YY.activeCamera),
            RY = IY && !0;
          if (RY) {
            const rY = YY.ky().currentRenderPassId;
            rY !== SY && (SY = rY, Ar())
          }
          const aY = Fr(),
            iY = RY && !1;
          AY.length > 0 && function(YY, rY) {
            for (let DY = 0; DY < 6; DY++) {
              const FY = YY[DY],
                AY = FY.normal;
              rY[4 * DY] = AY.x, rY[4 * DY + 1] = AY.y, rY[4 * DY + 2] = AY.z, rY[4 * DY + 3] = FY.d
            }
          }(FY, WY);
          const QY = vY,
            oY = uY,
            EY = sY;
          for (let YY = 0; YY < AY.length; YY++) {
            const rY = AY[YY];
            if (!qY.e.IsInFrustum(rY.ZDY, FY)) continue;
            const vY = rY.entries;
            {
              const YY = rY._noaSlots,
                FY = rY._noaStamps,
                AY = rY._noaTerrain;
              for (let rY = 0; rY < vY.length; rY++) {
                const uY = YY[rY];
                if (oY[uY] !== OY && (oY[uY] = OY, EY[uY] = sr(QY, 6 * uY, WY) ? 1 : 0), 0 === EY[uY]) continue;
                const sY = vY[rY];
                if (RY && FY[rY] === aY) iY && 1 === AY[rY] && GY(sY) && 0, gY.see(sY, 1 === AY[rY] ? uY : -1);
                else if (RY) {
                  FY[rY] = aY;
                  const YY = !0 === sY.metadata[PY.k];
                  AY[rY] = YY ? 1 : 0;
                  const DY = VY(sY, uY, YY);
                  !YY || DY && Rr(sY) || (FY[rY] = 0)
                } else IY ? VY(sY, uY, !0 === sY.metadata[PY.k]) : wY.f.prototype.push.call(DY, sY)
              }
              continue
            }
          }
          IY && gY.finish(DY, yY)
        })(FY), aY.apply(FY, YY.activeCamera);
        const IY = rY.zDY;
        for (let YY = 0; YY < IY.length; YY++) {
          const rY = IY[YY];
          rY.isEnabled() && wY.f.prototype.push.call(FY, rY)
        }
        return AY(FY, DY), FY
      }, {
        CDY: () => gY.culled,
        WDY: (YY, rY) => {
          const AY = Math.floor(rY[0] / IY),
            OY = Math.floor(rY[1] / IY),
            gY = Math.floor(rY[2] / IY),
            aY = `${AY}|${OY}|${gY}`;
          let vY = RY.get(aY);
          if (!vY) {
            const YY = [0, 0, 0];
            DY.lYY([AY * IY - 1, OY * IY - 1, gY * IY - 1], null, YY), vY = Object.assign(FY(YY, IY + 2), {
              fDY: aY,
              jDY: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: EY()
            }), mY(vY), iY[vY._noaSlot] = (0, bY.i)(AY, OY, gY), yY[3 * vY._noaSlot] = AY, yY[3 * vY._noaSlot + 1] = OY, yY[3 * vY._noaSlot + 2] = gY, RY.set(aY, vY)
          }
          vY.jDY++, YY.metadata[XY.v] = vY
        },
        iN: YY => {
          const rY = YY.metadata[XY.v];
          rY && (rY.jDY--, rY.jDY <= 0 && (RY.delete(rY.fDY), oY.push(rY._noaSlot)), YY.metadata[XY.v] = null)
        },
        HDY: (YY, rY) => {
          const DY = YY,
            FY = rY.metadata[XY.v];
          (DY._noaSlots ??= []).push(FY._noaSlot), (DY._noaStamps ??= []).push(0), (DY._noaTerrain ??= []).push(0), DY.entries.push(rY)
        },
        removeEntry: (YY, rY) => {
          const DY = YY,
            FY = DY.entries,
            AY = FY.indexOf(rY);
          if (AY < 0) return;
          const IY = DY._noaSlots,
            RY = DY._noaStamps,
            OY = DY._noaTerrain,
            gY = FY.length - 1;
          FY[AY] = FY[gY], IY[AY] = IY[gY], RY[AY] = RY[gY], OY[AY] = OY[gY], FY.pop(), IY.pop(), RY.pop(), OY.pop()
        },
        q_: YY => {
          for (const rY of RY.values()) {
            rY.lDY.dDY(YY), rY.SDY.dDY(YY);
            for (const DY of rY.ZDY) DY.dDY(YY);
            mY(rY)
          }
        }
      }
    }

    function ur(YY, rY) {
      return rY.set(YY), rY
    }

    function sr(YY, rY, DY) {
      const FY = YY[rY],
        AY = YY[rY + 1],
        IY = YY[rY + 2],
        RY = YY[rY + 3],
        OY = YY[rY + 4],
        gY = YY[rY + 5];
      for (let aY = 0; aY < 24; aY += 4) {
        const YY = DY[aY],
          rY = DY[aY + 1],
          vY = DY[aY + 2];
        if (!(YY * (YY >= 0 ? RY : FY) + rY * (rY >= 0 ? OY : AY) + vY * (vY >= 0 ? gY : IY) + DY[aY + 3] >= 0)) return !1
      }
      return !0
    }
    var ir = DY(37116);
    class yr {
      constructor(YY, rY) {
        var DY = YY.LQ;
        DY.ADY(new MY.b(DY));
        var FY = new dY.e(gY);
        DY.MDY = FY, FY.blocks = [];
        var AY, IY = {},
          RY = [];
        this.textPlanes = RY, this.CDY = () => AY.CDY(), this.q_ = YY => {
          vY(FY, YY), AY.q_(YY)
        }, this.WDY = (rY, DY, OY) => {
          if (!rY.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!rY.metadata[XY.s] && !rY.metadata[XY.k]) {
            if (!DY) {
              var gY = FY.zDY;
              if (rY.metadata[XY.B] && !rY.parent) {
                gY = RY;
                var vY = rY.oB().bDY;
                rY.metadata[XY.E] = vY.center.length() + vY.radius, rY.Gy = !0
              }
              return gY.push(rY), rY.metadata[XY.g] = gY, void(rY.metadata[XY.k] = !0)
            }
            var sY = Math.floor(OY[0] / aY),
              iY = Math.floor(OY[1] / aY),
              yY = Math.floor(OY[2] / aY),
              QY = sY + "|" + iY + "|" + yY,
              oY = IY[QY];
            if (!oY) {
              var WY = [sY * aY, iY * aY, yY * aY],
                EY = [0, 0, 0];
              YY.Gu.lYY(WY, null, EY), oY = uY(EY, aY), FY.blocks.push(oY), IY[QY] = oY, oY.fDY = QY
            }
            AY.WDY(rY, OY), AY.HDY(oY, rY), oY.jDY = (oY.jDY || 0) + 1, rY.metadata[XY.s] = oY, rY.metadata[XY.o] = !0, rY.Gy = !0
          }
        }, this.iN = YY => {
          if (YY.metadata) {
            YY.metadata[XY.k] && ((0, bY.p)(YY.metadata[XY.g], YY), YY.metadata[XY.k] = !1), YY.metadata[XY.g] === RY && (YY.Gy = !1), YY.metadata[XY.g] = void 0, YY.metadata[XY.E] = void 0;
            var rY = YY.metadata[XY.s];
            rY && rY.entries && (YY.metadata[XY.o] && AY.removeEntry(rY, YY), rY.jDY--, rY.jDY <= 0 && (delete IY[rY.fDY], (0, bY.p)(FY.blocks, rY))), AY.iN(YY), YY.metadata[XY.s] = null, YY.metadata[XY.o] = !1
          }
        }, this.i_ = function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (YY.metadata[XY.s]) {
            if (YY.metadata[XY.o] === rY) return;
            var DY = YY.metadata[XY.s];
            DY && DY.entries && (rY ? AY.HDY(DY, YY) : AY.removeEntry(DY, YY)), YY.metadata[XY.o] = rY
          } else {
            if (YY.metadata[XY.k] === rY) return;
            var IY = YY.metadata[XY.g] || FY.zDY;
            rY ? IY.push(YY) : (0, bY.p)(IY, YY), YY.metadata[XY.k] = rY
          }
        };
        var gY = () => {},
          aY = rY * YY.Gu.Mu.K9,
          vY = (YY, rY) => {
            YY.blocks.forEach((YY => {
              YY.lDY.dDY(rY), YY.SDY.dDY(rY), YY.ZDY.forEach((YY => YY.dDY(rY))), YY.blocks && vY(YY, rY)
            }))
          },
          uY = (YY, rY) => {
            var DY = new OY.xy(YY[0], YY[1], YY[2]),
              FY = new OY.xy(YY[0] + rY, YY[1] + rY, YY[2] + rY);
            return new JY.e(DY, FY, void 0, void 0, void 0, gY)
          };
        AY = vr(DY, FY, YY.Gu, uY, ((YY, rY) => {
          for (var DY = 0; DY < RY.length; DY++) {
            var FY = RY[DY];
            FY.isEnabled(!1) && ((0, ir.e)(FY, rY) && wY.f.prototype.push.call(YY, FY))
          }
        }))
      }
    }

    function Qr(YY) {
      const {
        holderPosition: rY,
        holderRotation: DY,
        Yk: FY,
        fov: AY,
        near: IY,
        far: RY
      } = YY.model.kp, OY = YY.nDY;
      OY.position.p_(rY[0], rY[1], rY[2]), OY.rotation.p_(DY[0], DY[1], DY[2]);
      const gY = YY.camera;
      gY.position.p_(FY[0], FY[1], FY[2]), gY.fov = AY, gY.minZ = IY, gY.maxZ = RY
    }

    function or(YY) {
      const rY = YY.ky(),
        DY = rY,
        FY = DY._gl;
      if (!FY || DY.VQ < 2 || rY.QDY || FY.getParameter(FY.DEPTH_BITS) < 24) return !1;
      const AY = YY._renderingManager,
        IY = AY.getRenderingGroup(-1),
        RY = AY.getRenderingGroup(0),
        OY = ZY.e.prototype.render;
      return IY.render = function(YY, rY, DY, FY, AY, IY, gY, aY, vY) {
        (YY || RY._empty) && OY.call(this, YY, rY, DY, FY, AY, IY, gY, aY, vY)
      }, RY.render = function(YY, DY, AY, RY) {
        let gY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          aY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          vY = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          sY = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          iY = arguments.length > 8 ? arguments[8] : void 0;
        YY ? OY.call(this, YY, DY, AY, RY, gY, aY, vY, sY, iY) : (rY.setAlphaMode(uY.b.ALPHA_DISABLE), OY.call(this, null, !1, !1, RY, gY, aY, vY, !1), IY._empty || (FY.depthRange(1, 1), OY.call(IY, null, DY, AY, RY, gY, aY, vY, sY, iY), FY.depthRange(0, 1)), OY.call(this, null, DY, AY, RY, !1, !1, !1, sY, iY))
      }, !0
    }

    function Wr(YY, rY) {
      return [rY, hY.d].map(((rY, DY) => {
        const FY = new AY.c("light", OY.xy.FromArray(rY), YY);
        return FY.diffuse = RY.Color3.FromArray([1, 1, 1]), FY.specular = RY.Color3.FromArray([1, 1, 1]), FY.intensity = hY.b[DY], FY
      }))
    }
    class Er extends aY.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(YY) {
        var rY;
        this.heldTexture = YY, this.particleTexture = null !== (rY = null === YY || void 0 === YY ? void 0 : YY.mirror) && void 0 !== rY ? rY : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let YY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        YY && (this.particleTexture = null, (0, vY.M)(this.heldTexture), this.heldTexture = null), super.dispose(YY, rY, DY)
      }
    }
    const mr = FY.e.Zero();
    const Vr = {
      YFY: function(YY, rY) {
        return new IY.c(YY, rY.HrY, {
          preserveDrawingBuffer: rY.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      LDY: function(YY, rY) {
        ! function(YY, rY, DY) {
          const FY = new fY.c(YY.engine);
          YY.LQ = FY, FY.detachControl(), FY.autoClear = !1, CY.d.MIN_RENDERINGGROUPS = -1;
          for (let IY = CY.d.MIN_RENDERINGGROUPS; IY <= 1; IY++) FY.setRenderingOrder(IY, ZY.e.PainterSortCompare, ZY.e.PainterSortCompare, ZY.e.PainterSortCompare);
          FY.setRenderingAutoClearDepthStencil(0, !1), zY.e.Enabled = !1, YY.kDY = new yr(YY, Math.round(rY.GDY)), YY.nDY = new HY.e("camHolder", FY), YY.camera = new KY.c("camera", new OY.xy(0, 0, 0), FY), YY.camera.parent = YY.nDY, Qr(YY), (0, hY.f)(YY, ((YY, rY, DY) => (0, jY.h)(rY, DY, YY.LQ))), FY.clearColor = RY.c.FromArray(rY.clearColor), FY.ambientColor = RY.Color3.FromArray(rY.ambientColor);
          const AY = DY(FY, rY.UDY);
          FY.onNewLightAddedObservable.add((YY => {
            AY.some((rY => rY === YY)) || console.error(`Light "${YY.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), FY.skipPointerMovePicking = !0
        }(YY, rY, Wr), or(YY.LQ)
      },
      xDY: Qr,
      setBabylonFog: function(YY, rY, DY, FY) {
        const AY = YY.LQ;
        AY.fogMode = 3, AY.fogStart = rY, AY.fogEnd = DY, AY.fogColor.set(FY[0], FY[1], FY[2])
      },
      rFY: function(YY, rY, DY) {
        return YY.engine.VQ >= 2 && (YY.DFY || (YY.DFY = new cY(YY.LQ)), !YY.DFY.failed) ? YY.DFY.XN(rY, DY) : new Er(rY, DY, YY.LQ)
      },
      AFY: function(YY, rY) {
        YY.LQ.YV.forEach((DY => {
          if (DY instanceof BY) return void DY.q_(rY, YY.Gu.os);
          const FY = DY;
          if (FY.emitter.getConnectedParticleSystems)
            for (const YY of FY._particles) YY.position.set(YY.position.x - rY[0], YY.position.y - rY[1], YY.position.z - rY[2]);
          else {
            if (!FY.worldOffset) throw new Error("Particle system has no world offset");
            FY.worldOffset.x = -YY.Gu.os[0], FY.worldOffset.y = -YY.Gu.os[1], FY.worldOffset.z = -YY.Gu.os[2]
          }
        }))
      },
      linesFromArrays: function(YY, rY, DY) {
        const FY = new gY.c(rY, YY.LQ, null, void 0, void 0, !1);
        return (0, jY.e)(rY, DY, YY.LQ, FY), FY
      },
      tQ: Ir,
      FFY: function(YY, rY) {
        return mr.origin.brY(rY.origin), mr.direction.brY(rY.direction), mr.length = rY.length, mr.epsilon = rY.epsilon, mr.FFY(YY, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40673: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => oY,
      g: () => OY,
      h: () => RY,
      k: () => aY
    });
    var FY = DY(36586),
      AY = DY(38066),
      IY = DY(38058);

    function RY(YY, rY, DY, FY) {
      const AY = IY.r;
      rY.fill(0), YY.gravity.toArray(rY, AY.gravity), YY.colorDead.toArray(rY, AY.colorDead), DY[AY.ramp] = YY.useRampGradients ? 1 : 0;
      const RY = YY.getColorGradients(),
        OY = sY(YY, RY, "colour", FY);
      DY[AY.colorCount] = OY;
      for (let IY = 0; IY < OY; IY++) {
        var gY;
        const YY = RY[iY(RY, IY)];
        rY[AY.colorPositions + IY] = YY.gradient, YY.color1.toArray(rY, AY.color1 + 4 * IY), (null !== (gY = YY.color2) && void 0 !== gY ? gY : YY.color1).toArray(rY, AY.color2 + 4 * IY)
      }
      const aY = YY.getVelocityGradients(),
        vY = sY(YY, aY, "ci", FY);
      DY[AY.velocityCount] = vY;
      for (let IY = 0; IY < vY; IY++) EY(rY, AY.ci + 4 * IY, aY[iY(aY, IY)]);
      const uY = YY.useRampGradients ? YY.getColorRemapGradients() : null,
        yY = sY(YY, uY, "colour remap", FY);
      DY[AY.remapCount] = yY;
      for (let IY = 0; IY < yY; IY++) EY(rY, AY.remap + 4 * IY, uY[iY(uY, IY)])
    }

    function OY() {
      return {
        key: [],
        texels: new Uint8Array(4 * IY.k)
      }
    }
    const gY = [];

    function aY(YY, rY) {
      return vY(YY, gY), !WY(gY, rY.key) && (rY.key.length = 0, rY.key.push(...gY), rY.key.length > 0 && function(YY, rY) {
        for (let DY = 0; DY < IY.k; DY++) AY.g.GetCurrentGradient(DY / IY.k, YY, ((YY, rY, DY) => {
          FY.Color3.LerpToRef(YY.color, rY.color, DY, uY)
        })), rY[4 * DY] = 255 * uY.r, rY[4 * DY + 1] = 255 * uY.g, rY[4 * DY + 2] = 255 * uY.b, rY[4 * DY + 3] = 255
      }(YY.getRampGradients(), rY.texels), !0)
    }

    function vY(YY, rY) {
      rY.length = 0;
      const DY = YY.useRampGradients ? YY.getRampGradients() : null;
      if (null !== DY && void 0 !== DY && DY.length) {
        rY.push(DY.length);
        for (const YY of DY) rY.push(YY.gradient, YY.color.r, YY.color.g, YY.color.b)
      }
    }
    const uY = new FY.Color3;

    function sY(YY, rY, DY, FY) {
      return rY ? rY.length > IY.b ? (FY(`particleStops:${DY}`, `GPU particles use the first 2 and last ${IY.b-2} of more than ${IY.b} ${DY} gradient stops (${YY.name})`), IY.b) : rY.length : 0
    }

    function iY(YY, rY) {
      return rY < 2 || YY.length <= IY.b ? rY : YY.length - IY.b + rY
    }
    const yY = new Float32Array(IY.o),
      QY = new Uint32Array(yY.buffer);

    function oY(YY, rY, DY) {
      return RY(YY, yY, QY, DY), rY && WY(QY, rY) ? null : QY.slice()
    }

    function WY(YY, rY) {
      if (YY.length !== rY.length) return !1;
      for (let DY = 0; DY < YY.length; DY++)
        if (YY[DY] !== rY[DY]) return !1;
      return !0
    }

    function EY(YY, rY, DY) {
      var FY;
      YY[rY] = DY.gradient, YY[rY + 1] = DY.factor1, YY[rY + 2] = null !== (FY = DY.factor2) && void 0 !== FY ? FY : DY.factor1
    }
  },
  40666: (YY, rY, DY) => {
    function FY() {
      let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const rY = new Set;
      return (DY, FY) => {
        rY.has(DY) || (rY.add(DY), console.warn(YY + FY))
      }
    }
    DY.d(rY, {
      b: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);