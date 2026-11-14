export const id = 0;
export const ids = [0];
export const modules = {
  39025: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      addBabylonLights: () => JR,
      default: () => oR
    });
    var wW = MW(39033),
      CW = (MW(37566), MW(38704), MW(38074), MW(39046)),
      zR = MW(37418),
      AW = MW(35373),
      bR = MW(35317),
      yR = MW(39055),
      NW = MW(39063),
      eW = MW(35284),
      BW = (MW(38718), MW(39074)),
      tR = MW(39072),
      TW = MW(36757),
      gR = MW(39077),
      iR = MW(37441),
      YW = MW(36747);
    const JW = "gpuParticles",
      PW = YW.w,
      IW = WW => WW / 4,
      oW = WW => `gpuParticleSystem[${WW>>2}].${"xyzw"[3&WW]}`,
      lW = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${YW.e}\n#define COLOR_POSITIONS ${IW(PW.colorPositions)}\n#define COLOR1 ${IW(PW.color1)}\n#define COLOR2 ${IW(PW.color2)}\n#define VELOCITY ${IW(PW.lA)}\n#define REMAP ${IW(PW.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${YW.r/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${oW(PW.gravity)}, ${oW(PW.gravity+1)}, ${oW(PW.gravity+2)}); }\nint colorCount() { return int(${oW(PW.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${IW(PW.colorDead)}]; }\nint velocityCount() { return int(${oW(PW.velocityCount)}); }\nint remapCount() { return int(${oW(PW.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    iR.c.ShadersStore[`${JW}VertexShader`] = lW, iR.c.ShadersStore[`${JW}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const FW = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      fW = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var QW = MW(36742),
      rR = MW(39082);
    class cR extends QW.e {
      constructor(WW, RW, MW, wW) {
        super(WW, RW, MW), this.renderer = MW, this.LC = wW, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(YW.r), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, rR.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (WW, RW) => {
          const {
            engine: MW,
            perRow: wW
          } = this, CW = MW._gl;
          MW._bindTextureDirectly(CW.TEXTURE_2D, this.records, !0), MW._unpackFlipY(!1);
          const zR = this.ring.recordBits;
          for (let AW = WW; AW < RW;) {
            const WW = Math.floor(AW / wW),
              MW = Math.min(RW, (WW + 1) * wW);
            CW.texSubImage2D(CW.TEXTURE_2D, 0, AW % wW * 4, WW, 4 * (MW - AW), 1, CW.RGBA_INTEGER, CW.UNSIGNED_INT, zR, AW * YW.i), AW = MW
          }
          MW._bindTextureDirectly(CW.TEXTURE_2D, null)
        }, this.id = WW;
        const CW = wW.mC();
        this.engine = CW;
        const zR = Math.max(1, RW);
        this.perRow = Math.min(zR, 256), this.records = CW.createRawTexture(null, 4 * this.perRow, Math.ceil(zR / this.perRow), BW.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, BW.c.TEXTURE_NEAREST_SAMPLINGMODE, null, BW.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.LC.getAnimationRatio() || 1;
        const RW = this.LC.getFrameId();
        if (RW === this.animatedFrame) return !1;
        const MW = super.animate(WW);
        return MW && (this.animatedFrame = RW, this.ring.takeUploads(this.uploadSlots)), MW
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(WW) {
        (0, rR.g)(this, this.uniforms, this.uniformBits, WW);
        for (const MW of YW.u) this.uniforms[MW] = this.uniformBits[MW];
        var RW;
        (0, rR.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (RW = this.ramp) || void 0 === RW || RW.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = tR.b.CreateRGBATexture(this.rampTexels.texels, YW.o, 1, this.LC, !1, !1, BW.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var WW;
        this.records.dispose(), null === (WW = this.ramp) || void 0 === WW || WW.dispose(), this.ramp = null
      }
    }
    class XW {
      constructor(WW) {
        this.LC = WW, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, gR.d)(), this.engine = WW.mC(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = tR.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, WW, !1, !1, BW.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      xMW(WW, RW) {
        const MW = 256 * this.engine.getCaps().maxTextureSize;
        RW > MW && this.warnOnce(`capacity:${WW}`, `particle system ${WW} holds ${MW} particles, not ${RW}: its records texture's limit`);
        const wW = new cR(WW, Math.min(RW, MW), this, this.LC);
        return this.LC.addParticleSystem(wW), wW
      }
      canDraw(WW) {
        var RW, MW;
        if (this.failed || null === (RW = WW.texture) || void 0 === RW || null === (MW = RW.mirror) || void 0 === MW || !MW.isReady()) return !1;
        for (const wW of (0, TW.n)(WW.blendMode))
          if (!this.effectFor(wW).isReady()) return !1;
        return !0
      }
      disposeStopped(WW) {
        this.LC._toBeDisposed.push(WW)
      }
      remove(WW) {
        this.LC.removeParticleSystem(WW), WW.releaseGl()
      }
      render(WW) {
        var RW;
        if (!WW.isReady() || !WW.hasLiveParticles()) return 0;
        const {
          engine: MW,
          LC: wW,
          frame: CW
        } = this;
        WW.prepareDraw(this.warnOnce), WW.drawOffset(CW, 0), CW[3] = WW.drawTime();
        const zR = WW.ring.drawStart(),
          AW = WW.ring.drawCount(),
          bR = null !== (RW = WW.ramp) && void 0 !== RW ? RW : this.whiteRamp;
        MW.setState(!1);
        for (const yR of (0, TW.n)(WW.blendMode)) {
          const RW = this.effectFor(yR);
          MW.enableEffect(RW), RW.setTexture("gpuParticleTexture", WW.texture.mirror), RW.setTexture("gpuParticleRampTexture", bR), RW._bindTexture("gpuParticleRecords", WW.records), RW.setMatrix("gpuParticleView", wW.getViewMatrix()), RW.setMatrix("gpuParticleProjection", wW.getProjectionMatrix()), RW.setFloatArray4("gpuParticleSystem", WW.uniforms), RW.setFloat4("gpuParticleFrame", CW[0], CW[1], CW[2], CW[3]), RW.setFloat2("gpuParticleRange", zR, AW), RW.setFloat("gpuParticleRamp", WW.uniforms[YW.w.ramp]), MW.bindBuffers(this.vertexBuffers, null, RW), MW.setAlphaMode((0, TW.k)(yR)), MW.drawArraysType(BW.c.MATERIAL_TriangleStripDrawMode, 0, 4, AW), RW._bindTexture("gpuParticleRecords", null)
        }
        return MW.setAlphaMode(BW.c.ALPHA_DISABLE), AW
      }
      awaitLink(WW) {
        const RW = WW.getPipelineContext(),
          MW = this.engine._gl;
        !this.failed && MW && (!RW || RW.isParallelCompiled && !RW.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : RW.isParallelCompiled && RW.program && (MW.getProgramParameter(RW.program, MW.LINK_STATUS) || this.fail(MW.getProgramInfoLog(RW.program) || "a program did not link")))
      }
      effectFor(WW) {
        return WW === TW.e ? this.multiplyEffect : this.effect
      }
      createEffect(WW) {
        return this.engine.createEffect(JW, [], FW, fW, WW, void 0, void 0, ((WW, RW) => {
          this.fail(RW)
        }))
      }
      fail(WW) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${WW}`);
          for (const WW of this.LC.Xs.slice()) WW instanceof cR && WW.disposeOnStop && WW.dispose()
        }
      }
    }
    var jR = MW(37781),
      kR = MW(38701),
      aR = MW(37541),
      sW = MW(37742),
      dW = MW(37739),
      pW = MW(37670),
      hW = MW(38757),
      UW = MW(35651),
      EW = MW(39088),
      VW = MW(39093),
      mR = MW(39100),
      xR = MW(37693),
      vR = MW(35530),
      KW = MW(35523),
      uW = MW(37888),
      OW = MW(35615),
      nW = MW(35556);

    function GW(WW) {
      if (WW.visibility < 1 || !WW.isVisible || !WW.isEnabled() || WW.metadata[nW.e] || !WW.isReady()) return !0;
      const RW = WW.Qs;
      if (!RW || 0 === RW.length) return !0;
      for (let MW = 0; MW < RW.length; MW++) {
        const wW = RW[MW],
          CW = wW.Ow();
        if (!CW || !CW.isReadyForSubMesh(WW, wW, !1)) return !0
      }
      return !1
    }
    class LW {
      constructor(WW, RW) {
        this.BR = WW, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, RW.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      IM(WW) {
        var RW;
        const MW = this.armed;
        if (this.armed = !1, this.vis = null, !MW) return !1;
        this.culled = 0;
        const {
          BR: wW
        } = this, CW = null === (RW = wW.JsW) || void 0 === RW ? void 0 : RW.visibility;
        if (!CW || !WW || wW.AC.bz) return !1;
        if (!(wW.zM.lNW[0] >= OW.g)) return !1;
        const zR = WW.getProjectionMatrix().m;
        if (0 !== zR[15]) return !1;
        const AW = wW.XR,
          bR = WW.globalPosition,
          yR = this.eye;
        return yR[0] = bR.x + AW[0], yR[1] = bR.y + AW[1], yR[2] = bR.z + AW[2], !!CW.eyeClear(yR[0], yR[1], yR[2], WW.minZ, zR, wW.zM) && (this.vis = CW, this.passable.clear(), this.count = 0, !0)
      }
      see(WW, RW) {
        const MW = this.count++;
        if (MW === this.cellSlots.length) {
          const WW = new Int32Array(2 * MW);
          WW.set(this.cellSlots), this.cellSlots = WW
        }
        this.cellSlots[MW] = RW, this.meshes[MW] = WW
      }
      seeThrough(WW) {
        this.passable.add(WW)
      }
      finish(WW, RW) {
        const {
          vis: MW,
          eye: wW,
          meshes: CW,
          count: zR,
          cellSlots: AW
        } = this, {
          zM: bR
        } = this.BR, [yR, NW] = bR.lNW, eW = null !== MW && MW.update(wW[0], wW[1], wW[2], bR.fAW, yR, NW, this.passable);
        let BW = 0;
        for (let tR = 0; tR < zR; tR++) {
          const wW = CW[tR];
          if (eW) {
            const WW = 3 * AW[tR];
            if (WW >= 0 && !MW.isDrawn(RW[WW], RW[WW + 1], RW[WW + 2])) {
              BW++;
              continue
            }
          }
          xR.i.prototype.push.call(WW, wW)
        }
        CW.fill(null, 0, zR), this.count = 0, this.vis = null, this.culled = BW
      }
    }
    var HW = MW(35600),
      DW = MW(35544),
      qR = MW(37866),
      ZW = MW(39108),
      SW = MW(37874),
      WR = MW(37800);
    let RR = 1;
    const MR = new WeakSet;

    function wR() {
      return RR
    }

    function CR() {
      RR = RR >= 1073741823 ? 1 : RR + 1
    }

    function zM(WW) {
      const RW = WW.metadata;
      if (!RW || !0 !== RW[KW.m]) return;
      const MW = RW[KW.s],
        wW = null === MW || void 0 === MW ? void 0 : MW._noaStamps;
      if (!MW || !wW) return;
      const CW = MW.entries.indexOf(WW);
      CW >= 0 && (wW[CW] = 0)
    }

    function AR(WW) {
      const RW = WW.Qs;
      for (let MW = 0; MW < RW.length; MW++) {
        const WW = RW[MW].Ow();
        if (WW && !WW.isFrozen) return !1
      }
      for (let MW = 0; MW < RW.length; MW++) {
        const WW = RW[MW].Ow();
        WW && MR.add(WW)
      }
      return !0
    }
    let bM = !1;
    const yM = new WeakSet;

    function NR(WW, RW) {
      const MW = WW[RW];
      if ("function" !== typeof MW) throw new Error(`terrainDrawState: Babylon has no ${RW} to hook`);
      return MW
    }

    function eR(WW, RW, MW, wW, CW) {
      const zR = MW.zM.fAW,
        AW = new Map;
      let bR = 0;
      const yR = new LW(MW, WW),
        NW = new HW.d(zR, WW.mC());
      ! function(WW) {
        if (yM.has(WW) || (yM.add(WW), WW.onContextLostObservable.add(CR), WW.onContextRestoredObservable.add(CR)), bM) return;
        bM = !0;
        const RW = ZW.b.prototype,
          MW = NR(RW, "_markSubMeshesAsDirty");
        Object.assign(RW, {
          _markSubMeshesAsDirty(WW) {
            MW.call(this, WW), zM(this)
          }
        });
        const wW = NR(WR.b.prototype, "_syncParentEnabledState");
        Object.assign(WR.b.prototype, {
          _syncParentEnabledState() {
            wW.call(this), zM(this)
          }
        });
        const CW = NR(SW.e.prototype, "resetDrawCache");
        SW.e.prototype.resetDrawCache = function(WW, RW) {
          CW.call(this, WW, RW), zM(this.getMesh())
        };
        const zR = qR.e.prototype,
          AW = NR(zR, "markDirty");
        zR.markDirty = function(WW) {
          AW.call(this, WW), MR.has(this) && CR()
        };
        const bR = NR(zR, "_markAllSubMeshesAsDirty");
        Object.assign(zR, {
          _markAllSubMeshesAsDirty(WW) {
            bR.call(this, WW), MR.has(this) && CR()
          }
        })
      }(WW.mC());
      let eW = new Float64Array(384),
        BW = new Int32Array(64),
        tR = new Uint8Array(64),
        TW = new Float64Array(64),
        gR = new Int32Array(192),
        iR = 0;
      const YW = [],
        JW = new Float64Array(24),
        PW = () => {
          const WW = YW.pop();
          return void 0 !== WW ? (BW[WW] = 0, WW) : (iR === BW.length && (eW = BR(eW, new Float64Array(2 * eW.length)), BW = BR(BW, new Int32Array(2 * BW.length)), tR = BR(tR, new Uint8Array(2 * tR.length)), TW = BR(TW, new Float64Array(2 * TW.length)), gR = BR(gR, new Int32Array(2 * gR.length))), iR++)
        },
        IW = WW => {
          const RW = 6 * WW._noaSlot,
            MW = WW.jeW[0],
            wW = WW.jeW[1];
          eW[RW] = MW.x, eW[RW + 1] = MW.y, eW[RW + 2] = MW.z, eW[RW + 3] = wW.x, eW[RW + 4] = wW.y, eW[RW + 5] = wW.z
        },
        oW = (WW, RW, MW) => {
          if (!MW) return yR.see(WW, -1), !1;
          const wW = GW(WW);
          return wW && yR.seeThrough(TW[RW]), yR.see(WW, RW), !wW
        };
      let lW = -1;
      return WW.getActiveMeshCandidates = () => {
        const MW = WW.frustumPlanes,
          wW = RW._selectionContent;
        wW.reset(), (MW => {
          const wW = WW.frustumPlanes;
          bR = bR + 1 | 0 || 1;
          const CW = RW.blocks,
            zR = yR.IM(WW.activeCamera),
            AW = zR && !0;
          if (AW) {
            const RW = WW.mC().currentRenderPassId;
            RW !== lW && (lW = RW, CR())
          }
          const NW = wR(),
            TW = AW && !1;
          CW.length > 0 && function(WW, RW) {
            for (let MW = 0; MW < 6; MW++) {
              const wW = WW[MW],
                CW = wW.normal;
              RW[4 * MW] = CW.x, RW[4 * MW + 1] = CW.y, RW[4 * MW + 2] = CW.z, RW[4 * MW + 3] = wW.d
            }
          }(wW, JW);
          const iR = eW,
            YW = BW,
            PW = tR;
          for (let WW = 0; WW < CW.length; WW++) {
            const RW = CW[WW];
            if (!uW.e.IsInFrustum(RW.jeW, wW)) continue;
            const eW = RW.entries;
            {
              const WW = RW._noaSlots,
                wW = RW._noaStamps,
                CW = RW._noaTerrain;
              for (let RW = 0; RW < eW.length; RW++) {
                const BW = WW[RW];
                if (YW[BW] !== bR && (YW[BW] = bR, PW[BW] = tM(iR, 6 * BW, JW) ? 1 : 0), 0 === PW[BW]) continue;
                const tR = eW[RW];
                if (AW && wW[RW] === NW) TW && 1 === CW[RW] && GW(tR) && 0, yR.see(tR, 1 === CW[RW] ? BW : -1);
                else if (AW) {
                  wW[RW] = NW;
                  const WW = !0 === tR.metadata[DW.m];
                  CW[RW] = WW ? 1 : 0;
                  const MW = oW(tR, BW, WW);
                  !WW || MW && AR(tR) || (wW[RW] = 0)
                } else zR ? oW(tR, BW, !0 === tR.metadata[DW.m]) : xR.i.prototype.push.call(MW, tR)
              }
              continue
            }
          }
          zR && yR.finish(MW, gR)
        })(wW), NW.apply(wW, WW.activeCamera);
        const zR = RW.XNW;
        for (let WW = 0; WW < zR.length; WW++) {
          const RW = zR[WW];
          RW.isEnabled() && xR.i.prototype.push.call(wW, RW)
        }
        return CW(wW, MW), wW
      }, {
        keW: () => yR.culled,
        TNW: (WW, RW) => {
          const CW = Math.floor(RW[0] / zR),
            bR = Math.floor(RW[1] / zR),
            yR = Math.floor(RW[2] / zR),
            NW = `${CW}|${bR}|${yR}`;
          let eW = AW.get(NW);
          if (!eW) {
            const WW = [0, 0, 0];
            MW.TbW([CW * zR - 1, bR * zR - 1, yR * zR - 1], null, WW), eW = Object.assign(wW(WW, zR + 2), {
              aeW: NW,
              sNW: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: PW()
            }), IW(eW), TW[eW._noaSlot] = (0, vR.j)(CW, bR, yR), gR[3 * eW._noaSlot] = CW, gR[3 * eW._noaSlot + 1] = bR, gR[3 * eW._noaSlot + 2] = yR, AW.set(NW, eW)
          }
          eW.sNW++, WW.metadata[KW.w] = eW
        },
        dRW: WW => {
          const RW = WW.metadata[KW.w];
          RW && (RW.sNW--, RW.sNW <= 0 && (AW.delete(RW.aeW), YW.push(RW._noaSlot)), WW.metadata[KW.w] = null)
        },
        ceW: (WW, RW) => {
          const MW = WW,
            wW = RW.metadata[KW.w];
          (MW._noaSlots ??= []).push(wW._noaSlot), (MW._noaStamps ??= []).push(0), (MW._noaTerrain ??= []).push(0), MW.entries.push(RW)
        },
        removeEntry: (WW, RW) => {
          const MW = WW,
            wW = MW.entries,
            CW = wW.indexOf(RW);
          if (CW < 0) return;
          const zR = MW._noaSlots,
            AW = MW._noaStamps,
            bR = MW._noaTerrain,
            yR = wW.length - 1;
          wW[CW] = wW[yR], zR[CW] = zR[yR], AW[CW] = AW[yR], bR[CW] = bR[yR], wW.pop(), zR.pop(), AW.pop(), bR.pop()
        },
        OzW: WW => {
          for (const RW of AW.values()) {
            RW.INW.pNW(WW), RW.PNW.pNW(WW);
            for (const MW of RW.jeW) MW.pNW(WW);
            IW(RW)
          }
        }
      }
    }

    function BR(WW, RW) {
      return RW.set(WW), RW
    }

    function tM(WW, RW, MW) {
      const wW = WW[RW],
        CW = WW[RW + 1],
        zR = WW[RW + 2],
        AW = WW[RW + 3],
        bR = WW[RW + 4],
        yR = WW[RW + 5];
      for (let NW = 0; NW < 24; NW += 4) {
        const WW = MW[NW],
          RW = MW[NW + 1],
          eW = MW[NW + 2];
        if (!(WW * (WW >= 0 ? AW : wW) + RW * (RW >= 0 ? bR : CW) + eW * (eW >= 0 ? yR : zR) + MW[NW + 3] >= 0)) return !1
      }
      return !0
    }
    var TR = MW(35859);
    class gM {
      constructor(WW, RW) {
        var MW = WW.LC;
        MW.SyW(new mR.c(MW));
        var wW = new EW.b(yR);
        MW.UNW = wW, wW.blocks = [];
        var CW, zR = {},
          AW = [];
        this.textPlanes = AW, this.keW = () => CW.keW(), this.OzW = WW => {
          eW(wW, WW), CW.OzW(WW)
        }, this.TNW = (RW, MW, bR) => {
          if (!RW.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!RW.metadata[KW.s] && !RW.metadata[KW.i]) {
            if (!MW) {
              var yR = wW.XNW;
              if (RW.metadata[KW.A] && !RW.parent) {
                yR = AW;
                var eW = RW.LRW().VNW;
                RW.metadata[KW.B] = eW.center.length() + eW.radius, RW.xC = !0
              }
              return yR.push(RW), RW.metadata[KW.e] = yR, void(RW.metadata[KW.i] = !0)
            }
            var tR = Math.floor(bR[0] / NW),
              TW = Math.floor(bR[1] / NW),
              gR = Math.floor(bR[2] / NW),
              iR = tR + "|" + TW + "|" + gR,
              YW = zR[iR];
            if (!YW) {
              var JW = [tR * NW, TW * NW, gR * NW],
                PW = [0, 0, 0];
              WW.BR.TbW(JW, null, PW), YW = BW(PW, NW), wW.blocks.push(YW), zR[iR] = YW, YW.aeW = iR
            }
            CW.TNW(RW, bR), CW.ceW(YW, RW), YW.sNW = (YW.sNW || 0) + 1, RW.metadata[KW.s] = YW, RW.metadata[KW.m] = !0, RW.xC = !0
          }
        }, this.dRW = WW => {
          if (WW.metadata) {
            WW.metadata[KW.i] && ((0, vR.p)(WW.metadata[KW.e], WW), WW.metadata[KW.i] = !1), WW.metadata[KW.e] === AW && (WW.xC = !1), WW.metadata[KW.e] = void 0, WW.metadata[KW.B] = void 0;
            var RW = WW.metadata[KW.s];
            RW && RW.entries && (WW.metadata[KW.m] && CW.removeEntry(RW, WW), RW.sNW--, RW.sNW <= 0 && (delete zR[RW.aeW], (0, vR.p)(wW.blocks, RW))), CW.dRW(WW), WW.metadata[KW.s] = null, WW.metadata[KW.m] = !1
          }
        }, this.rAW = function(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (WW.metadata[KW.s]) {
            if (WW.metadata[KW.m] === RW) return;
            var MW = WW.metadata[KW.s];
            MW && MW.entries && (RW ? CW.ceW(MW, WW) : CW.removeEntry(MW, WW)), WW.metadata[KW.m] = RW
          } else {
            if (WW.metadata[KW.i] === RW) return;
            var zR = WW.metadata[KW.e] || wW.XNW;
            RW ? zR.push(WW) : (0, vR.p)(zR, WW), WW.metadata[KW.i] = RW
          }
        };
        var yR = () => {},
          NW = RW * WW.BR.zM.fAW,
          eW = (WW, RW) => {
            WW.blocks.forEach((WW => {
              WW.INW.pNW(RW), WW.PNW.pNW(RW), WW.jeW.forEach((WW => WW.pNW(RW))), WW.blocks && eW(WW, RW)
            }))
          },
          BW = (WW, RW) => {
            var MW = new bR.vC(WW[0], WW[1], WW[2]),
              wW = new bR.vC(WW[0] + RW, WW[1] + RW, WW[2] + RW);
            return new VW.c(MW, wW, void 0, void 0, void 0, yR)
          };
        CW = eR(MW, wW, WW.BR, BW, ((WW, RW) => {
          for (var MW = 0; MW < AW.length; MW++) {
            var wW = AW[MW];
            wW.isEnabled(!1) && ((0, TR.b)(wW, RW) && xR.i.prototype.push.call(WW, wW))
          }
        }))
      }
    }

    function iM(WW) {
      const {
        holderPosition: RW,
        holderRotation: MW,
        bzW: wW,
        fov: CW,
        near: zR,
        far: AW
      } = WW.model.ACW, bR = WW.nNW;
      bR.position.nzW(RW[0], RW[1], RW[2]), bR.rotation.nzW(MW[0], MW[1], MW[2]);
      const yR = WW.camera;
      yR.position.nzW(wW[0], wW[1], wW[2]), yR.fov = CW, yR.minZ = zR, yR.maxZ = AW
    }

    function YR(WW) {
      const RW = WW.mC(),
        MW = RW,
        wW = MW._gl;
      if (!wW || MW.Gs < 2 || RW.BNW || wW.getParameter(wW.DEPTH_BITS) < 24) return !1;
      const CW = WW._renderingManager,
        zR = CW.getRenderingGroup(-1),
        AW = CW.getRenderingGroup(0),
        bR = sW.b.prototype.render;
      return zR.render = function(WW, RW, MW, wW, CW, zR, yR, NW, eW) {
        (WW || AW._empty) && bR.call(this, WW, RW, MW, wW, CW, zR, yR, NW, eW)
      }, AW.render = function(WW, MW, CW, AW) {
        let yR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          eW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          tR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          TW = arguments.length > 8 ? arguments[8] : void 0;
        WW ? bR.call(this, WW, MW, CW, AW, yR, NW, eW, tR, TW) : (RW.setAlphaMode(BW.c.ALPHA_DISABLE), bR.call(this, null, !1, !1, AW, yR, NW, eW, !1), zR._empty || (wW.depthRange(1, 1), bR.call(zR, null, MW, CW, AW, yR, NW, eW, tR, TW), wW.depthRange(0, 1)), bR.call(this, null, MW, CW, AW, !1, !1, !1, tR, TW))
      }, !0
    }

    function JR(WW, RW) {
      return [RW, UW.f].map(((RW, MW) => {
        const wW = new CW.e("light", bR.vC.FromArray(RW), WW);
        return wW.diffuse = AW.Color3.FromArray([1, 1, 1]), wW.specular = AW.Color3.FromArray([1, 1, 1]), wW.intensity = UW.c[MW], wW
      }))
    }
    class PR extends NW.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(WW) {
        var RW;
        this.heldTexture = WW, this.particleTexture = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.mirror) && void 0 !== RW ? RW : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let WW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        WW && (this.particleTexture = null, (0, eW.C)(this.heldTexture), this.heldTexture = null), super.dispose(WW, RW, MW)
      }
    }
    const IR = wW.d.Zero();
    const oR = {
      ZNW: function(WW, RW) {
        return new zR.b(WW, RW.fyW, {
          preserveDrawingBuffer: RW.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      HNW: function(WW, RW) {
        ! function(WW, RW, MW) {
          const wW = new pW.b(WW.engine);
          WW.LC = wW, wW.detachControl(), wW.autoClear = !1, dW.d.MIN_RENDERINGGROUPS = -1;
          for (let zR = dW.d.MIN_RENDERINGGROUPS; zR <= 1; zR++) wW.setRenderingOrder(zR, sW.b.PainterSortCompare, sW.b.PainterSortCompare, sW.b.PainterSortCompare);
          wW.setRenderingAutoClearDepthStencil(0, !1), aR.d.Enabled = !1, WW.KNW = new gM(WW, Math.round(RW.uNW)), WW.nNW = new kR.d("camHolder", wW), WW.camera = new jR.d("camera", new bR.vC(0, 0, 0), wW), WW.camera.parent = WW.nNW, iM(WW), (0, UW.g)(WW, ((WW, RW, MW) => (0, hW.i)(RW, MW, WW.LC))), wW.clearColor = AW.d.FromArray(RW.clearColor), wW.ambientColor = AW.Color3.FromArray(RW.ambientColor);
          const CW = MW(wW, RW.LNW);
          wW.onNewLightAddedObservable.add((WW => {
            CW.some((RW => RW === WW)) || console.error(`Light "${WW.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), wW.skipPointerMovePicking = !0
        }(WW, RW, JR), YR(WW.LC)
      },
      ONW: iM,
      setBabylonFog: function(WW, RW, MW, wW) {
        const CW = WW.LC;
        CW.fogMode = 3, CW.fogStart = RW, CW.fogEnd = MW, CW.fogColor.set(wW[0], wW[1], wW[2])
      },
      SNW: function(WW, RW, MW) {
        return WW.engine.Gs >= 2 && (WW.WeW || (WW.WeW = new XW(WW.LC)), !WW.WeW.failed) ? WW.WeW.xMW(RW, MW) : new PR(RW, MW, WW.LC)
      },
      MeW: function(WW, RW) {
        WW.LC.Xs.forEach((MW => {
          if (MW instanceof cR) return void MW.OzW(RW, WW.BR.XR);
          const wW = MW;
          if (wW.emitter.getConnectedParticleSystems)
            for (const WW of wW._particles) WW.position.set(WW.position.x - RW[0], WW.position.y - RW[1], WW.position.z - RW[2]);
          else {
            if (!wW.worldOffset) throw new Error("Particle system has no world offset");
            wW.worldOffset.x = -WW.BR.XR[0], wW.worldOffset.y = -WW.BR.XR[1], wW.worldOffset.z = -WW.BR.XR[2]
          }
        }))
      },
      linesFromArrays: function(WW, RW, MW) {
        const wW = new yR.d(RW, WW.LC, null, void 0, void 0, !1);
        return (0, hW.f)(RW, MW, WW.LC, wW), wW
      },
      HC: zM,
      ReW: function(WW, RW) {
        return IR.origin.hyW(RW.origin), IR.direction.hyW(RW.direction), IR.length = RW.length, IR.epsilon = RW.epsilon, IR.ReW(WW, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  39082: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => YW,
      e: () => bR,
      g: () => AW,
      j: () => NW
    });
    var wW = MW(35373),
      CW = MW(36750),
      zR = MW(36747);

    function AW(WW, RW, MW, wW) {
      const CW = zR.w;
      RW.fill(0), WW.gravity.toArray(RW, CW.gravity), WW.colorDead.toArray(RW, CW.colorDead), MW[CW.ramp] = WW.useRampGradients ? 1 : 0;
      const AW = WW.getColorGradients(),
        bR = tR(WW, AW, "colour", wW);
      MW[CW.colorCount] = bR;
      for (let zR = 0; zR < bR; zR++) {
        var yR;
        const WW = AW[TW(AW, zR)];
        RW[CW.colorPositions + zR] = WW.gradient, WW.color1.toArray(RW, CW.color1 + 4 * zR), (null !== (yR = WW.color2) && void 0 !== yR ? yR : WW.color1).toArray(RW, CW.color2 + 4 * zR)
      }
      const NW = WW.getVelocityGradients(),
        eW = tR(WW, NW, "lA", wW);
      MW[CW.velocityCount] = eW;
      for (let zR = 0; zR < eW; zR++) PW(RW, CW.lA + 4 * zR, NW[TW(NW, zR)]);
      const BW = WW.useRampGradients ? WW.getColorRemapGradients() : null,
        gR = tR(WW, BW, "colour remap", wW);
      MW[CW.remapCount] = gR;
      for (let zR = 0; zR < gR; zR++) PW(RW, CW.remap + 4 * zR, BW[TW(BW, zR)])
    }

    function bR() {
      return {
        key: [],
        texels: new Uint8Array(4 * zR.o)
      }
    }
    const yR = [];

    function NW(WW, RW) {
      return eW(WW, yR), !JW(yR, RW.key) && (RW.key.length = 0, RW.key.push(...yR), RW.key.length > 0 && function(WW, RW) {
        for (let MW = 0; MW < zR.o; MW++) CW.g.GetCurrentGradient(MW / zR.o, WW, ((WW, RW, MW) => {
          wW.Color3.LerpToRef(WW.color, RW.color, MW, BW)
        })), RW[4 * MW] = 255 * BW.r, RW[4 * MW + 1] = 255 * BW.g, RW[4 * MW + 2] = 255 * BW.b, RW[4 * MW + 3] = 255
      }(WW.getRampGradients(), RW.texels), !0)
    }

    function eW(WW, RW) {
      RW.length = 0;
      const MW = WW.useRampGradients ? WW.getRampGradients() : null;
      if (null !== MW && void 0 !== MW && MW.length) {
        RW.push(MW.length);
        for (const WW of MW) RW.push(WW.gradient, WW.color.r, WW.color.g, WW.color.b)
      }
    }
    const BW = new wW.Color3;

    function tR(WW, RW, MW, wW) {
      return RW ? RW.length > zR.e ? (wW(`particleStops:${MW}`, `GPU particles use the first 2 and last ${zR.e-2} of more than ${zR.e} ${MW} gradient stops (${WW.name})`), zR.e) : RW.length : 0
    }

    function TW(WW, RW) {
      return RW < 2 || WW.length <= zR.e ? RW : WW.length - zR.e + RW
    }
    const gR = new Float32Array(zR.r),
      iR = new Uint32Array(gR.buffer);

    function YW(WW, RW, MW) {
      return AW(WW, gR, iR, MW), RW && JW(iR, RW) ? null : iR.slice()
    }

    function JW(WW, RW) {
      if (WW.length !== RW.length) return !1;
      for (let MW = 0; MW < WW.length; MW++)
        if (WW[MW] !== RW[MW]) return !1;
      return !0
    }

    function PW(WW, RW, MW) {
      var wW;
      WW[RW] = MW.gradient, WW[RW + 1] = MW.factor1, WW[RW + 2] = null !== (wW = MW.factor2) && void 0 !== wW ? wW : MW.factor1
    }
  },
  39077: (WW, RW, MW) => {
    function wW() {
      let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const RW = new Set;
      return (MW, wW) => {
        RW.has(MW) || (RW.add(MW), console.warn(WW + wW))
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);