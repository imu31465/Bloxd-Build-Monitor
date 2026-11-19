export const id = 0;
export const ids = [0];
export const modules = {
  40189: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CapeMaterialPlugin: () => XD,
      HueTintMaterialPlugin: () => mD,
      LifeformMaterialPlugin: () => nD,
      OverlayMaterialPlugin: () => OD
    });
    var ID = cD(40194),
      pD = cD(37406);
    class iD extends((0, ID.e)(pD.c)) {}(0, ID.f)(pD.c, iD);
    var fD = cD(36528);
    class bD extends((0, ID.e)(fD.i)) {}(0, ID.f)(fD.i, bD);
    var QD = cD(37235);
    class wD extends((0, ID.e)(QD.g)) {}(0, ID.f)(QD.g, wD);
    var SD = cD(36780),
      BD = cD(39396),
      yD = cD(36771);
    class MD extends((0, ID.e)(yD.i)) {
      constructor(DD, CD, cD) {
        super(DD, CD, cD), (0, SD.j)(DD)
      }
      dispose(DD) {
        (0, SD.l)(this._material), super.dispose(DD)
      }
    }(0, ID.f)(yD.i, MD), (0, yD.j)({
      disableUnusedSpecularTerm: ID.c,
      isLightingDisabled: DD => DD instanceof BD.StandardMaterial && DD.disableLighting
    });
    var tD = cD(38064);
    class ZD extends((0, ID.e)(tD.g)) {}(0, ID.f)(tD.g, ZD);
    var oD = cD(38157),
      vD = cD(36626),
      ND = cD(37506),
      gD = cD(36585);
    class XD extends((0, ID.e)(oD.b)) {}(0, ID.f)(oD.b, XD);
    class mD extends((0, ID.e)(vD.c)) {}(0, ID.f)(vD.c, mD);
    class nD extends((0, ID.e)(ND.p)) {}(0, ID.f)(ND.p, nD);
    class OD extends((0, ID.e)(gD.c)) {}(0, ID.f)(gD.c, OD)
  },
  40610: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      addBabylonLights: () => vC,
      default: () => XC
    });
    var ID = cD(40618),
      pD = (cD(39133), cD(40180), cD(39602), cD(40627)),
      iD = cD(38968),
      fD = cD(36613),
      bD = cD(36440),
      QD = cD(40641),
      wD = cD(40646),
      SD = cD(36579),
      BD = (cD(40194), cD(40662)),
      yD = cD(40654),
      MD = cD(38095),
      tD = cD(40670),
      ZD = cD(39003),
      oD = cD(38076);
    const vD = "gpuParticles",
      ND = oD.i,
      gD = DD => DD / 4,
      XD = DD => `gpuParticleSystem[${DD>>2}].${"xyzw"[3&DD]}`,
      mD = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${oD.b}\n#define COLOR_POSITIONS ${gD(ND.colorPositions)}\n#define COLOR1 ${gD(ND.color1)}\n#define COLOR2 ${gD(ND.color2)}\n#define VELOCITY ${gD(ND.lb)}\n#define REMAP ${gD(ND.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${oD.f/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${XD(ND.gravity)}, ${XD(ND.gravity+1)}, ${XD(ND.gravity+2)}); }\nint colorCount() { return int(${XD(ND.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${gD(ND.colorDead)}]; }\nint velocityCount() { return int(${XD(ND.velocityCount)}); }\nint remapCount() { return int(${XD(ND.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    ZD.e.ShadersStore[`${vD}VertexShader`] = mD, ZD.e.ShadersStore[`${vD}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const nD = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      OD = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var PD = cD(38072),
      HD = cD(40674);
    class UD extends PD.c {
      constructor(DD, CD, cD, ID) {
        super(DD, CD, cD), this.renderer = cD, this.wo = ID, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(oD.f), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, HD.f)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (DD, CD) => {
          const {
            engine: cD,
            perRow: ID
          } = this, pD = cD._gl;
          cD._bindTextureDirectly(pD.TEXTURE_2D, this.records, !0), cD._unpackFlipY(!1);
          const iD = this.ring.recordBits;
          for (let fD = DD; fD < CD;) {
            const DD = Math.floor(fD / ID),
              cD = Math.min(CD, (DD + 1) * ID);
            pD.texSubImage2D(pD.TEXTURE_2D, 0, fD % ID * 4, DD, 4 * (cD - fD), 1, pD.RGBA_INTEGER, pD.UNSIGNED_INT, iD, fD * oD.c), fD = cD
          }
          cD._bindTextureDirectly(pD.TEXTURE_2D, null)
        }, this.id = DD;
        const pD = ID.DZ();
        this.engine = pD;
        const iD = Math.max(1, CD);
        this.perRow = Math.min(iD, 256), this.records = pD.createRawTexture(null, 4 * this.perRow, Math.ceil(iD / this.perRow), BD.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, BD.b.TEXTURE_NEAREST_SAMPLINGMODE, null, BD.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.wo.getAnimationRatio() || 1;
        const CD = this.wo.getFrameId();
        if (CD === this.animatedFrame) return !1;
        const cD = super.animate(DD);
        return cD && (this.animatedFrame = CD, this.ring.takeUploads(this.uploadSlots)), cD
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(DD) {
        (0, HD.j)(this, this.uniforms, this.uniformBits, DD);
        for (const cD of oD.h) this.uniforms[cD] = this.uniformBits[cD];
        var CD;
        (0, HD.k)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (CD = this.ramp) || void 0 === CD || CD.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = yD.e.CreateRGBATexture(this.rampTexels.texels, oD.e, 1, this.wo, !1, !1, BD.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var DD;
        this.records.dispose(), null === (DD = this.ramp) || void 0 === DD || DD.dispose(), this.ramp = null
      }
    }
    class xD {
      constructor(DD) {
        this.wo = DD, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, tD.e)(), this.engine = DD.DZ(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = yD.e.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, DD, !1, !1, BD.b.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      PJ(DD, CD) {
        const cD = 256 * this.engine.getCaps().maxTextureSize;
        CD > cD && this.warnOnce(`capacity:${DD}`, `particle system ${DD} holds ${cD} particles, not ${CD}: its records texture's limit`);
        const ID = new UD(DD, Math.min(CD, cD), this, this.wo);
        return this.wo.addParticleSystem(ID), ID
      }
      canDraw(DD) {
        var CD, cD;
        if (this.failed || null === (CD = DD.texture) || void 0 === CD || null === (cD = CD.mirror) || void 0 === cD || !cD.isReady()) return !1;
        for (const ID of (0, MD.m)(DD.blendMode))
          if (!this.effectFor(ID).isReady()) return !1;
        return !0
      }
      disposeStopped(DD) {
        this.wo._toBeDisposed.push(DD)
      }
      remove(DD) {
        this.wo.removeParticleSystem(DD), DD.releaseGl()
      }
      render(DD) {
        var CD;
        if (!DD.isReady() || !DD.hasLiveParticles()) return 0;
        const {
          engine: cD,
          wo: ID,
          frame: pD
        } = this;
        DD.prepareDraw(this.warnOnce), DD.drawOffset(pD, 0), pD[3] = DD.drawTime();
        const iD = DD.ring.drawStart(),
          fD = DD.ring.drawCount(),
          bD = null !== (CD = DD.ramp) && void 0 !== CD ? CD : this.whiteRamp;
        cD.setState(!1);
        for (const QD of (0, MD.m)(DD.blendMode)) {
          const CD = this.effectFor(QD);
          cD.enableEffect(CD), CD.setTexture("gpuParticleTexture", DD.texture.mirror), CD.setTexture("gpuParticleRampTexture", bD), CD._bindTexture("gpuParticleRecords", DD.records), CD.setMatrix("gpuParticleView", ID.getViewMatrix()), CD.setMatrix("gpuParticleProjection", ID.getProjectionMatrix()), CD.setFloatArray4("gpuParticleSystem", DD.uniforms), CD.setFloat4("gpuParticleFrame", pD[0], pD[1], pD[2], pD[3]), CD.setFloat2("gpuParticleRange", iD, fD), CD.setFloat("gpuParticleRamp", DD.uniforms[oD.i.ramp]), cD.bindBuffers(this.vertexBuffers, null, CD), cD.setAlphaMode((0, MD.j)(QD)), cD.drawArraysType(BD.b.MATERIAL_TriangleStripDrawMode, 0, 4, fD), CD._bindTexture("gpuParticleRecords", null)
        }
        return cD.setAlphaMode(BD.b.ALPHA_DISABLE), fD
      }
      awaitLink(DD) {
        const CD = DD.getPipelineContext(),
          cD = this.engine._gl;
        !this.failed && cD && (!CD || CD.isParallelCompiled && !CD.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : CD.isParallelCompiled && CD.program && (cD.getProgramParameter(CD.program, cD.LINK_STATUS) || this.fail(cD.getProgramInfoLog(CD.program) || "a program did not link")))
      }
      effectFor(DD) {
        return DD === MD.e ? this.multiplyEffect : this.effect
      }
      createEffect(DD) {
        return this.engine.createEffect(vD, [], nD, OD, DD, void 0, void 0, ((DD, CD) => {
          this.fail(CD)
        }))
      }
      fail(DD) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${DD}`);
          for (const DD of this.wo.iH.slice()) DD instanceof UD && DD.disposeOnStop && DD.dispose()
        }
      }
    }
    var qD = cD(39347),
      JD = cD(40178),
      KD = cD(39104),
      aD = cD(39308),
      VD = cD(39303),
      zD = cD(39231),
      jD = cD(40224),
      lD = cD(36985),
      LD = cD(40683),
      TD = cD(40689),
      GD = cD(40694),
      RD = cD(39257),
      kD = cD(36866),
      dD = cD(36861),
      YD = cD(39447),
      WD = cD(36952),
      sD = cD(36894);

    function ED(DD) {
      if (DD.visibility < 1 || !DD.isVisible || !DD.isEnabled() || DD.metadata[sD.f] || !DD.isReady()) return !0;
      const CD = DD.IH;
      if (!CD || 0 === CD.length) return !0;
      for (let cD = 0; cD < CD.length; cD++) {
        const ID = CD[cD],
          pD = ID.iZ();
        if (!pD || !pD.isReadyForSubMesh(DD, ID, !1)) return !0
      }
      return !1
    }
    class eD {
      constructor(DD, CD) {
        this.ny = DD, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, CD.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      VM(DD) {
        var CD;
        const cD = this.armed;
        if (this.armed = !1, this.vis = null, !cD) return !1;
        this.culled = 0;
        const {
          ny: ID
        } = this, pD = null === (CD = ID.RP) || void 0 === CD ? void 0 : CD.visibility;
        if (!pD || !DD || ID.XZ.mZ) return !1;
        if (!(ID.Zy.VcD[0] >= WD.c)) return !1;
        const iD = DD.getProjectionMatrix().m;
        if (0 !== iD[15]) return !1;
        const fD = ID.Ry,
          bD = DD.globalPosition,
          QD = this.eye;
        return QD[0] = bD.x + fD[0], QD[1] = bD.y + fD[1], QD[2] = bD.z + fD[2], !!pD.eyeClear(QD[0], QD[1], QD[2], DD.minZ, iD, ID.Zy) && (this.vis = pD, this.passable.clear(), this.count = 0, !0)
      }
      see(DD, CD) {
        const cD = this.count++;
        if (cD === this.cellSlots.length) {
          const DD = new Int32Array(2 * cD);
          DD.set(this.cellSlots), this.cellSlots = DD
        }
        this.cellSlots[cD] = CD, this.meshes[cD] = DD
      }
      seeThrough(DD) {
        this.passable.add(DD)
      }
      finish(DD, CD) {
        const {
          vis: cD,
          eye: ID,
          meshes: pD,
          count: iD,
          cellSlots: fD
        } = this, {
          Zy: bD
        } = this.ny, [QD, wD] = bD.VcD, SD = null !== cD && cD.update(ID[0], ID[1], ID[2], bD.J_, QD, wD, this.passable);
        let BD = 0;
        for (let yD = 0; yD < iD; yD++) {
          const ID = pD[yD];
          if (SD) {
            const DD = 3 * fD[yD];
            if (DD >= 0 && !cD.isDrawn(CD[DD], CD[DD + 1], CD[DD + 2])) {
              BD++;
              continue
            }
          }
          RD.f.prototype.push.call(DD, ID)
        }
        pD.fill(null, 0, iD), this.count = 0, this.vis = null, this.culled = BD
      }
    }
    var uD = cD(36930),
      hD = cD(36877),
      rD = cD(39416),
      AD = cD(40703),
      FD = cD(39425),
      DC = cD(39356);
    let CC = 1;
    const cC = new WeakSet;

    function IC() {
      return CC
    }

    function pC() {
      CC = CC >= 1073741823 ? 1 : CC + 1
    }

    function iC(DD) {
      const CD = DD.metadata;
      if (!CD || !0 !== CD[dD.l]) return;
      const cD = CD[dD.s],
        ID = null === cD || void 0 === cD ? void 0 : cD._noaStamps;
      if (!cD || !ID) return;
      const pD = cD.entries.indexOf(DD);
      pD >= 0 && (ID[pD] = 0)
    }

    function fC(DD) {
      const CD = DD.IH;
      for (let cD = 0; cD < CD.length; cD++) {
        const DD = CD[cD].iZ();
        if (DD && !DD.isFrozen) return !1
      }
      for (let cD = 0; cD < CD.length; cD++) {
        const DD = CD[cD].iZ();
        DD && cC.add(DD)
      }
      return !0
    }
    let bC = !1;
    const QC = new WeakSet;

    function wC(DD, CD) {
      const cD = DD[CD];
      if ("function" !== typeof cD) throw new Error(`terrainDrawState: Babylon has no ${CD} to hook`);
      return cD
    }

    function SC(DD, CD, cD, ID, pD) {
      const iD = cD.Zy.J_,
        fD = new Map;
      let bD = 0;
      const QD = new eD(cD, DD),
        wD = new uD.c(iD, DD.DZ());
      ! function(DD) {
        if (QC.has(DD) || (QC.add(DD), DD.onContextLostObservable.add(pC), DD.onContextRestoredObservable.add(pC)), bC) return;
        bC = !0;
        const CD = AD.e.prototype,
          cD = wC(CD, "_markSubMeshesAsDirty");
        Object.assign(CD, {
          _markSubMeshesAsDirty(DD) {
            cD.call(this, DD), iC(this)
          }
        });
        const ID = wC(DC.b.prototype, "_syncParentEnabledState");
        Object.assign(DC.b.prototype, {
          _syncParentEnabledState() {
            ID.call(this), iC(this)
          }
        });
        const pD = wC(FD.c.prototype, "resetDrawCache");
        FD.c.prototype.resetDrawCache = function(DD, CD) {
          pD.call(this, DD, CD), iC(this.getMesh())
        };
        const iD = rD.d.prototype,
          fD = wC(iD, "markDirty");
        iD.markDirty = function(DD) {
          fD.call(this, DD), cC.has(this) && pC()
        };
        const bD = wC(iD, "_markAllSubMeshesAsDirty");
        Object.assign(iD, {
          _markAllSubMeshesAsDirty(DD) {
            bD.call(this, DD), cC.has(this) && pC()
          }
        })
      }(DD.DZ());
      let SD = new Float64Array(384),
        BD = new Int32Array(64),
        yD = new Uint8Array(64),
        MD = new Float64Array(64),
        tD = new Int32Array(192),
        ZD = 0;
      const oD = [],
        vD = new Float64Array(24),
        ND = () => {
          const DD = oD.pop();
          return void 0 !== DD ? (BD[DD] = 0, DD) : (ZD === BD.length && (SD = BC(SD, new Float64Array(2 * SD.length)), BD = BC(BD, new Int32Array(2 * BD.length)), yD = BC(yD, new Uint8Array(2 * yD.length)), MD = BC(MD, new Float64Array(2 * MD.length)), tD = BC(tD, new Int32Array(2 * tD.length))), ZD++)
        },
        gD = DD => {
          const CD = 6 * DD._noaSlot,
            cD = DD.kcD[0],
            ID = DD.kcD[1];
          SD[CD] = cD.x, SD[CD + 1] = cD.y, SD[CD + 2] = cD.z, SD[CD + 3] = ID.x, SD[CD + 4] = ID.y, SD[CD + 5] = ID.z
        },
        XD = (DD, CD, cD) => {
          if (!cD) return QD.see(DD, -1), !1;
          const ID = ED(DD);
          return ID && QD.seeThrough(MD[CD]), QD.see(DD, CD), !ID
        };
      let mD = -1;
      return DD.getActiveMeshCandidates = () => {
        const cD = DD.frustumPlanes,
          ID = CD._selectionContent;
        ID.reset(), (cD => {
          const ID = DD.frustumPlanes;
          bD = bD + 1 | 0 || 1;
          const pD = CD.blocks,
            iD = QD.VM(DD.activeCamera),
            fD = iD && !0;
          if (fD) {
            const CD = DD.DZ().currentRenderPassId;
            CD !== mD && (mD = CD, pC())
          }
          const wD = IC(),
            MD = fD && !1;
          pD.length > 0 && function(DD, CD) {
            for (let cD = 0; cD < 6; cD++) {
              const ID = DD[cD],
                pD = ID.normal;
              CD[4 * cD] = pD.x, CD[4 * cD + 1] = pD.y, CD[4 * cD + 2] = pD.z, CD[4 * cD + 3] = ID.d
            }
          }(ID, vD);
          const ZD = SD,
            oD = BD,
            ND = yD;
          for (let DD = 0; DD < pD.length; DD++) {
            const CD = pD[DD];
            if (!YD.c.IsInFrustum(CD.kcD, ID)) continue;
            const SD = CD.entries;
            {
              const DD = CD._noaSlots,
                ID = CD._noaStamps,
                pD = CD._noaTerrain;
              for (let CD = 0; CD < SD.length; CD++) {
                const BD = DD[CD];
                if (oD[BD] !== bD && (oD[BD] = bD, ND[BD] = yC(ZD, 6 * BD, vD) ? 1 : 0), 0 === ND[BD]) continue;
                const yD = SD[CD];
                if (fD && ID[CD] === wD) MD && 1 === pD[CD] && ED(yD) && 0, QD.see(yD, 1 === pD[CD] ? BD : -1);
                else if (fD) {
                  ID[CD] = wD;
                  const DD = !0 === yD.metadata[hD.l];
                  pD[CD] = DD ? 1 : 0;
                  const cD = XD(yD, BD, DD);
                  !DD || cD && fC(yD) || (ID[CD] = 0)
                } else iD ? XD(yD, BD, !0 === yD.metadata[hD.l]) : RD.f.prototype.push.call(cD, yD)
              }
              continue
            }
          }
          iD && QD.finish(cD, tD)
        })(ID), wD.apply(ID, DD.activeCamera);
        const iD = CD.RcD;
        for (let DD = 0; DD < iD.length; DD++) {
          const CD = iD[DD];
          CD.isEnabled() && RD.f.prototype.push.call(ID, CD)
        }
        return pD(ID, cD), ID
      }, {
        dcD: () => QD.culled,
        HcD: (DD, CD) => {
          const pD = Math.floor(CD[0] / iD),
            bD = Math.floor(CD[1] / iD),
            QD = Math.floor(CD[2] / iD),
            wD = `${pD}|${bD}|${QD}`;
          let SD = fD.get(wD);
          if (!SD) {
            const DD = [0, 0, 0];
            cD.gDD([pD * iD - 1, bD * iD - 1, QD * iD - 1], null, DD), SD = Object.assign(ID(DD, iD + 2), {
              YcD: wD,
              WcD: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: ND()
            }), gD(SD), MD[SD._noaSlot] = (0, kD.f)(pD, bD, QD), tD[3 * SD._noaSlot] = pD, tD[3 * SD._noaSlot + 1] = bD, tD[3 * SD._noaSlot + 2] = QD, fD.set(wD, SD)
          }
          SD.WcD++, DD.metadata[dD.v] = SD
        },
        MJ: DD => {
          const CD = DD.metadata[dD.v];
          CD && (CD.WcD--, CD.WcD <= 0 && (fD.delete(CD.YcD), oD.push(CD._noaSlot)), DD.metadata[dD.v] = null)
        },
        GcD: (DD, CD) => {
          const cD = DD,
            ID = CD.metadata[dD.v];
          (cD._noaSlots ??= []).push(ID._noaSlot), (cD._noaStamps ??= []).push(0), (cD._noaTerrain ??= []).push(0), cD.entries.push(CD)
        },
        removeEntry: (DD, CD) => {
          const cD = DD,
            ID = cD.entries,
            pD = ID.indexOf(CD);
          if (pD < 0) return;
          const iD = cD._noaSlots,
            fD = cD._noaStamps,
            bD = cD._noaTerrain,
            QD = ID.length - 1;
          ID[pD] = ID[QD], iD[pD] = iD[QD], fD[pD] = fD[QD], bD[pD] = bD[QD], ID.pop(), iD.pop(), fD.pop(), bD.pop()
        },
        O4: DD => {
          for (const CD of fD.values()) {
            CD.KcD.EcD(DD), CD.JcD.EcD(DD);
            for (const cD of CD.kcD) cD.EcD(DD);
            gD(CD)
          }
        }
      }
    }

    function BC(DD, CD) {
      return CD.set(DD), CD
    }

    function yC(DD, CD, cD) {
      const ID = DD[CD],
        pD = DD[CD + 1],
        iD = DD[CD + 2],
        fD = DD[CD + 3],
        bD = DD[CD + 4],
        QD = DD[CD + 5];
      for (let wD = 0; wD < 24; wD += 4) {
        const DD = cD[wD],
          CD = cD[wD + 1],
          SD = cD[wD + 2];
        if (!(DD * (DD >= 0 ? fD : ID) + CD * (CD >= 0 ? bD : pD) + SD * (SD >= 0 ? QD : iD) + cD[wD + 3] >= 0)) return !1
      }
      return !0
    }
    var MC = cD(37175);
    class tC {
      constructor(DD, CD) {
        var cD = DD.wo;
        cD.fcD(new GD.d(cD));
        var ID = new LD.c(QD);
        cD.ucD = ID, ID.blocks = [];
        var pD, iD = {},
          fD = [];
        this.textPlanes = fD, this.dcD = () => pD.dcD(), this.O4 = DD => {
          SD(ID, DD), pD.O4(DD)
        }, this.HcD = (CD, cD, bD) => {
          if (!CD.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!CD.metadata[dD.s] && !CD.metadata[dD.k]) {
            if (!cD) {
              var QD = ID.RcD;
              if (CD.metadata[dD.A] && !CD.parent) {
                QD = fD;
                var SD = CD.VJ().rcD;
                CD.metadata[dD.B] = SD.center.length() + SD.radius, CD.CZ = !0
              }
              return QD.push(CD), CD.metadata[dD.f] = QD, void(CD.metadata[dD.k] = !0)
            }
            var yD = Math.floor(bD[0] / wD),
              MD = Math.floor(bD[1] / wD),
              tD = Math.floor(bD[2] / wD),
              ZD = yD + "|" + MD + "|" + tD,
              oD = iD[ZD];
            if (!oD) {
              var vD = [yD * wD, MD * wD, tD * wD],
                ND = [0, 0, 0];
              DD.ny.gDD(vD, null, ND), oD = BD(ND, wD), ID.blocks.push(oD), iD[ZD] = oD, oD.YcD = ZD
            }
            pD.HcD(CD, bD), pD.GcD(oD, CD), oD.WcD = (oD.WcD || 0) + 1, CD.metadata[dD.s] = oD, CD.metadata[dD.l] = !0, CD.CZ = !0
          }
        }, this.MJ = DD => {
          if (DD.metadata) {
            DD.metadata[dD.k] && ((0, kD.j)(DD.metadata[dD.f], DD), DD.metadata[dD.k] = !1), DD.metadata[dD.f] === fD && (DD.CZ = !1), DD.metadata[dD.f] = void 0, DD.metadata[dD.B] = void 0;
            var CD = DD.metadata[dD.s];
            CD && CD.entries && (DD.metadata[dD.l] && pD.removeEntry(CD, DD), CD.WcD--, CD.WcD <= 0 && (delete iD[CD.YcD], (0, kD.j)(ID.blocks, CD))), pD.MJ(DD), DD.metadata[dD.s] = null, DD.metadata[dD.l] = !1
          }
        }, this.i5 = function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (DD.metadata[dD.s]) {
            if (DD.metadata[dD.l] === CD) return;
            var cD = DD.metadata[dD.s];
            cD && cD.entries && (CD ? pD.GcD(cD, DD) : pD.removeEntry(cD, DD)), DD.metadata[dD.l] = CD
          } else {
            if (DD.metadata[dD.k] === CD) return;
            var iD = DD.metadata[dD.f] || ID.RcD;
            CD ? iD.push(DD) : (0, kD.j)(iD, DD), DD.metadata[dD.k] = CD
          }
        };
        var QD = () => {},
          wD = CD * DD.ny.Zy.J_,
          SD = (DD, CD) => {
            DD.blocks.forEach((DD => {
              DD.KcD.EcD(CD), DD.JcD.EcD(CD), DD.kcD.forEach((DD => DD.EcD(CD))), DD.blocks && SD(DD, CD)
            }))
          },
          BD = (DD, CD) => {
            var cD = new bD.cZ(DD[0], DD[1], DD[2]),
              ID = new bD.cZ(DD[0] + CD, DD[1] + CD, DD[2] + CD);
            return new TD.c(cD, ID, void 0, void 0, void 0, QD)
          };
        pD = SC(cD, ID, DD.ny, BD, ((DD, CD) => {
          for (var cD = 0; cD < fD.length; cD++) {
            var ID = fD[cD];
            ID.isEnabled(!1) && ((0, MC.b)(ID, CD) && RD.f.prototype.push.call(DD, ID))
          }
        }))
      }
    }

    function ZC(DD) {
      const {
        holderPosition: CD,
        holderRotation: cD,
        AY: ID,
        fov: pD,
        near: iD,
        far: fD
      } = DD.model.rY, bD = DD.iID;
      bD.position.K4(CD[0], CD[1], CD[2]), bD.rotation.K4(cD[0], cD[1], cD[2]);
      const QD = DD.camera;
      QD.position.K4(ID[0], ID[1], ID[2]), QD.fov = pD, QD.minZ = iD, QD.maxZ = fD
    }

    function oC(DD) {
      const CD = DD.DZ(),
        cD = CD,
        ID = cD._gl;
      if (!ID || cD.JZ < 2 || CD.vcD || ID.getParameter(ID.DEPTH_BITS) < 24) return !1;
      const pD = DD._renderingManager,
        iD = pD.getRenderingGroup(-1),
        fD = pD.getRenderingGroup(0),
        bD = aD.b.prototype.render;
      return iD.render = function(DD, CD, cD, ID, pD, iD, QD, wD, SD) {
        (DD || fD._empty) && bD.call(this, DD, CD, cD, ID, pD, iD, QD, wD, SD)
      }, fD.render = function(DD, cD, pD, fD) {
        let QD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          wD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          SD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          yD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          MD = arguments.length > 8 ? arguments[8] : void 0;
        DD ? bD.call(this, DD, cD, pD, fD, QD, wD, SD, yD, MD) : (CD.setAlphaMode(BD.b.ALPHA_DISABLE), bD.call(this, null, !1, !1, fD, QD, wD, SD, !1), iD._empty || (ID.depthRange(1, 1), bD.call(iD, null, cD, pD, fD, QD, wD, SD, yD, MD), ID.depthRange(0, 1)), bD.call(this, null, cD, pD, fD, !1, !1, !1, yD, MD))
      }, !0
    }

    function vC(DD, CD) {
      return [CD, lD.g].map(((CD, cD) => {
        const ID = new pD.c("light", bD.cZ.FromArray(CD), DD);
        return ID.diffuse = fD.Color3.FromArray([1, 1, 1]), ID.specular = fD.Color3.FromArray([1, 1, 1]), ID.intensity = lD.d[cD], ID
      }))
    }
    class NC extends wD.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(DD) {
        var CD;
        this.heldTexture = DD, this.particleTexture = null !== (CD = null === DD || void 0 === DD ? void 0 : DD.mirror) && void 0 !== CD ? CD : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        DD && (this.particleTexture = null, (0, SD.y)(this.heldTexture), this.heldTexture = null), super.dispose(DD, CD, cD)
      }
    }
    const gC = ID.d.Zero();
    const XC = {
      BID: function(DD, CD) {
        return new iD.e(DD, CD.aCD, {
          preserveDrawingBuffer: CD.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      wID: function(DD, CD) {
        ! function(DD, CD, cD) {
          const ID = new zD.d(DD.engine);
          DD.wo = ID, ID.detachControl(), ID.autoClear = !1, VD.b.MIN_RENDERINGGROUPS = -1;
          for (let iD = VD.b.MIN_RENDERINGGROUPS; iD <= 1; iD++) ID.setRenderingOrder(iD, aD.b.PainterSortCompare, aD.b.PainterSortCompare, aD.b.PainterSortCompare);
          ID.setRenderingAutoClearDepthStencil(0, !1), KD.c.Enabled = !1, DD.cID = new tC(DD, Math.round(CD.IID)), DD.iID = new JD.e("camHolder", ID), DD.camera = new qD.c("camera", new bD.cZ(0, 0, 0), ID), DD.camera.parent = DD.iID, ZC(DD), (0, lD.h)(DD, ((DD, CD, cD) => (0, jD.j)(CD, cD, DD.wo))), ID.clearColor = fD.c.FromArray(CD.clearColor), ID.ambientColor = fD.Color3.FromArray(CD.ambientColor);
          const pD = cD(ID, CD.bID);
          ID.onNewLightAddedObservable.add((DD => {
            pD.some((CD => CD === DD)) || console.error(`Light "${DD.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), ID.skipPointerMovePicking = !0
        }(DD, CD, vC), oC(DD.wo)
      },
      pID: ZC,
      setBabylonFog: function(DD, CD, cD, ID) {
        const pD = DD.wo;
        pD.fogMode = 3, pD.fogStart = CD, pD.fogEnd = cD, pD.fogColor.set(ID[0], ID[1], ID[2])
      },
      yID: function(DD, CD, cD) {
        return DD.engine.JZ >= 2 && (DD.tID || (DD.tID = new xD(DD.wo)), !DD.tID.failed) ? DD.tID.PJ(CD, cD) : new NC(CD, cD, DD.wo)
      },
      oID: function(DD, CD) {
        DD.wo.iH.forEach((cD => {
          if (cD instanceof UD) return void cD.O4(CD, DD.ny.Ry);
          const ID = cD;
          if (ID.emitter.getConnectedParticleSystems)
            for (const DD of ID._particles) DD.position.set(DD.position.x - CD[0], DD.position.y - CD[1], DD.position.z - CD[2]);
          else {
            if (!ID.worldOffset) throw new Error("Particle system has no world offset");
            ID.worldOffset.x = -DD.ny.Ry[0], ID.worldOffset.y = -DD.ny.Ry[1], ID.worldOffset.z = -DD.ny.Ry[2]
          }
        }))
      },
      linesFromArrays: function(DD, CD, cD) {
        const ID = new QD.e(CD, DD.wo, null, void 0, void 0, !1);
        return (0, jD.f)(CD, cD, DD.wo, ID), ID
      },
      Bo: iC,
      ZID: function(DD, CD) {
        return gC.origin.YCD(CD.origin), gC.direction.YCD(CD.direction), gC.length = CD.length, gC.epsilon = CD.epsilon, gC.ZID(DD, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40194: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => RD,
      e: () => ND,
      f: () => ED
    });
    var ID = cD(39396),
      pD = cD(40196),
      iD = cD(40226),
      fD = cD(40198),
      bD = cD(37201),
      QD = cD(37211),
      wD = cD(37218),
      SD = cD(37222),
      BD = cD(36572),
      yD = cD(36579),
      MD = cD(40201),
      tD = cD(36553),
      ZD = cD(36561),
      oD = cD(36539);

    function vD(DD, CD) {
      return Object.assign((function(DD, cD, ID, pD) {
        return CD(this.featureState, DD, cD, ID, pD)
      }), {
        Ot: DD
      })
    }

    function ND(DD) {
      const CD = class extends MD.c {
          constructor(CD, cD) {
            const ID = (0, ZD.N)(CD),
              pD = ID && (0, ZD.q)(ID, DD.name);
            for (var iD = arguments.length, fD = new Array(iD > 2 ? iD - 2 : 0), bD = 2; bD < iD; bD++) fD[bD - 2] = arguments[bD];
            super(CD, DD.name, DD.priority, pD ? pD.defines : DD.defines(...fD), !1), this.featureState = void 0, this.featureState = cD, this._pluginManager._addPlugin(this), this._enable(!0), (0, ZD.t)(this._material, DD, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return DD.className
          }
          isCompatible(DD) {
            return DD === oD.e.GLSL || DD === oD.e.WGSL
          }
        },
        cD = (0, tD.h)(DD);
      for (const [ID, pD] of Object.entries(tD.e)) {
        const iD = DD[ID];
        if (iD) {
          const DD = cD[ID];
          Object.defineProperty(CD.prototype, pD, {
            value: vD(iD, DD),
            writable: !0,
            configurable: !0
          })
        }
      }
      return CD
    }
    class gD extends(ND(bD.c)) {}
    var XD = cD(38968),
      mD = cD(40203);
    const nD = new WeakMap;

    function OD(DD, CD, cD) {
      let ID = nD.get(cD);
      ID || (ID = new Map, nD.set(cD, ID));
      const {
        url: pD
      } = DD;
      let iD = ID.get(pD);
      return iD || (iD = async function(DD, CD, cD) {
        const {
          width: ID,
          height: pD
        } = DD.getSize(), iD = Math.round(pD / ID), bD = CD && CD.byteLength === ID * ID * iD * 4 ? CD : DD._readPixelsSync();
        return new mD.d(bD, ID, ID, iD, XD.e.TEXTUREFORMAT_RGBA, cD, !0, !1, fD.e.NEAREST_NEAREST_MIPLINEAR)
      }(DD, CD, cD), ID.set(pD, iD), iD.catch((() => {
        ID.delete(pD)
      }))), iD
    }
    var PD = cD(37227);
    class HD extends(ND(QD.k)) {
      constructor(DD, CD) {
        super(DD, CD), CD.textures.forEach(((DD, CD) => {
          DD.mirror.onLoadObservable.add((DD => {
            this.setTextureArrayData(DD, CD).catch((DD => {
              console.error(`Failed to build texture array for atlas ${CD}`, DD)
            }))
          }))
        })), (0, PD.f)(CD, DD.shaderLanguage)
      }
      async setTextureArrayData(DD, CD) {
        var cD, ID;
        const pD = this.featureState,
          {
            width: iD,
            height: fD
          } = DD.getSize(),
          bD = pD.useWebGL2 ? await OD(DD, null !== (cD = null === (ID = pD.sources.pixels) || void 0 === ID ? void 0 : ID[CD]) && void 0 !== cD ? cD : null, this._material.hq()) : null;
        (0, PD.b)(this._material, pD, CD, bD, iD, Math.round(fD / iD), this._material.shaderLanguage)
      }
    }
    var UD = cD(40207),
      xD = cD(39441),
      qD = cD(36440),
      JD = cD(40215),
      KD = cD(39545),
      aD = cD(39425),
      VD = cD(40178),
      zD = cD(36969),
      jD = cD(40224);
    class lD extends UD.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const LD = {
      Mesh: JD.d,
      TransformNode: VD.e,
      lt: UD.c,
      VertexBuffer: UD.e,
      BoundingInfo: xD.e,
      cZ: qD.cZ,
      ArenaBuffer: lD,
      SubMesh: aD.c,
      VertexData: KD.c,
      MirroredGeometry: jD.c,
      meshFromArrays: jD.f,
      plainMeshFromArrays: jD.j
    };
    (0, zD.h)(LD);
    var TD = cD(36780);
    class GD extends(ND(SD.i)) {
      constructor(DD, CD) {
        if (super(DD, CD), DD instanceof ID.StandardMaterial && CD.dirLightCount > 0) {
          const CD = DD,
            cD = CD._blockDirtyMechanism;
          CD._blockDirtyMechanism = !0, DD.disableLighting = !0, CD._blockDirtyMechanism = cD;
          const ID = (0, ZD.N)(DD);
          ID && (ID.disableLighting = !0, (0, ZD.K)(ID))
        }(0, TD.j)(DD)
      }
      dispose(DD) {
        (0, TD.l)(this._material), super.dispose(DD)
      }
    }

    function RD(DD, CD) {
      if (!(CD instanceof ID.StandardMaterial) || CD.specularTexture) return;
      const {
        r: cD,
        g: pD,
        b: iD
      } = CD.specularColor;
      0 === cD && 0 === pD && 0 === iD && (DD.SPECULARTERM = !1)
    }(0, SD.h)({
      disableUnusedSpecularTerm: RD
    });
    var kD = cD(36647),
      dD = cD(36975);
    const YD = new RegExp(`^#define ${wD.d}\\s*$`, "m");
    class WD extends(ND(wD.i)) {
      constructor(DD, CD) {
        super(DD, CD), this.Lt = !1, CD.ditherOnlyWhileFading && (dD.c.add(DD), this.prewarmDitherTwins(DD))
      }
      prewarmDitherTwins(DD) {
        const CD = new WeakSet;
        DD.onEffectCreatedObservable.add((cD => {
          let {
            effect: ID,
            subMesh: pD
          } = cD;
          if (this.featureState.prewarmingDither || CD.has(ID)) return;
          CD.add(ID);
          const iD = null === pD || void 0 === pD ? void 0 : pD.getMesh();
          iD && !YD.test(ID.defines) && DD.hq().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(iD) || CD.delete(ID)
          }))
        }))
      }
      prewarmDither(DD) {
        if (this.Lt || DD.jCD()) return !1;
        const CD = new aD.c(0, 0, 0, 0, 0, DD, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(DD, CD)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== CD.effect
      }
      dispose(DD) {
        this.Lt = !0, super.dispose(DD)
      }
    }
    const sD = new Map;

    function ED(DD, CD) {
      sD.set(DD, CD)
    }
    ED(bD.c, gD), ED(QD.k, HD), ED(wD.i, WD), ED(SD.i, GD), (0, BD.d)({
      create: (DD, CD) => {
        const cD = new ID.StandardMaterial(DD.name, CD);
        return (0, kD.r)(DD, cD), cD.detailMap._pluginDefineNames
      },
      write: (DD, CD, cD) => {
        (0, kD.U)(DD.mirror, CD, cD)
      },
      addFeature: (DD, CD, cD) => {
        const ID = sD.get(CD.feature);
        if (!ID) throw new Error(`${CD.feature.name} has no plugin class (registerPluginClass)`);
        new ID(DD.mirror, CD.state, ...cD)
      },
      texture: (DD, CD, cD) => {
        let {
          url: ID,
          noMipmap: pD,
          invertY: iD,
          samplingMode: bD,
          data: QD,
          sets: wD
        } = cD;
        if (!QD) {
          const cD = new fD.e(ID, CD, pD, iD, bD);
          return Object.assign(cD, wD), void(0, yD.G)(DD, cD)
        }
        const SD = {},
          BD = new Promise(((DD, CD) => {
            SD.onLoad = DD, SD.onError = (DD, cD) => {
              CD(new Error(`${QD.context}: ${(null===cD||void 0===cD?void 0:cD.message)||DD||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: MD,
            bytes: tD,
            label: ZD
          } = QD,
          oD = {
            noMipmap: pD,
            invertY: !1,
            samplingMode: bD,
            ...SD,
            mimeType: MD,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          vD = new fD.e(null, CD, oD);
        kD.t.set(vD, BD), Object.assign(vD, wD), vD.updateURL(ID, tD);
        const ND = vD.getInternalTexture();
        ND && (ND.label = ZD), DD.uvSet = vD.coordinatesIndex, DD.matrix.set((0, kD.M)(vD)), (0, yD.G)(DD, vD)
      },
      cube: (DD, CD, cD) => {
        let {
          rootUrl: ID,
          files: iD,
          noMipmap: bD,
          luminance: QD
        } = cD;
        const {
          samplingMode: wD
        } = DD.sampler, SD = wD === (0, yD.x)(bD) ? null : () => {
          (0, kD.L)(BD, wD)
        }, BD = new pD.b(ID, CD, null, bD, iD, SD, null, (0, yD.w)(QD));
        BD.coordinatesMode = fD.e.SKYBOX_MODE, (0, yD.G)(DD, BD)
      },
      canvas: (DD, CD, cD) => {
        let {
          width: ID,
          height: pD,
          mipmaps: bD,
          samplingMode: QD,
          hasAlpha: wD = !1,
          wrap: SD = fD.e.CLAMP_ADDRESSMODE
        } = cD;
        const BD = new iD.e(CD, {
          width: ID,
          height: pD
        }, DD, bD, QD);
        BD.hasAlpha = wD, BD.wrapU = SD, BD.wrapV = SD;
        const yD = (0, kD.A)(BD);
        return (0, kD.C)(yD, BD), yD
      }
    })
  },
  40224: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD,
      f: () => BD,
      j: () => yD
    });
    var ID = cD(40207),
      pD = cD(39213),
      iD = cD(39441),
      fD = cD(39549),
      bD = cD(40215),
      QD = cD(39545),
      wD = cD(36845);
    class SD extends fD.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (DD, CD) => {
          this.releaseUnlessInstanced(CD)
        }, this.onLinked = null
      }
      link(DD) {
        var CD;
        (0, wD.m)(DD), this.model = DD, null === (CD = this.onLinked) || void 0 === CD || CD.call(this, DD)
      }
      relink() {
        this.release();
        const DD = [];
        for (const pD of Object.values(this._vertexBuffers))
          if (!pD.getIsInstanced()) {
            const {
              byteOffset: CD,
              byteStride: cD,
              type: ID,
              normalized: iD
            } = pD;
            DD.push({
              kind: pD.getKind(),
              data: pD.getData(),
              offset: CD,
              stride: cD,
              components: pD.getSize(),
              glType: ID,
              isNormalized: iD
            })
          } const CD = this._indices.length ? this._indices : null,
          {
            minimum: cD,
            maximum: ID
          } = this.extend;
        this.link(new wD.f(DD, CD, this.getTotalVertices(), new Float64Array(cD.XcD()), new Float64Array(ID.XcD())))
      }
      copy(DD) {
        if (!this.model) return super.copy(DD);
        const CD = new SD(DD, this.hq()),
          cD = this.ncD(void 0, !0);
        cD && CD.setIndices(cD);
        let fD = !1;
        for (const iD in this._vertexBuffers) {
          const DD = this._vertexBuffers[iD],
            cD = DD.getData();
          if (!cD) continue;
          const bD = DD.getSize(),
            {
              type: QD,
              byteOffset: wD,
              byteStride: SD,
              normalized: BD
            } = DD;
          fD ||= DD.isUpdatable();
          const yD = DD.getIsInstanced() ? (cD instanceof Array ? 4 * cD.length : cD.byteLength) / SD : this.getTotalVertices(),
            MD = (0, pD.u)(cD, bD, QD, wD, SD, yD, !0),
            tD = {
              updatable: DD.isUpdatable(),
              stride: bD,
              type: QD,
              normalized: BD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            };
          CD.setVerticesBuffer(new ID.e(this.DZ(), MD, iD, tD), yD)
        }
        return CD._updatable = fD, CD._boundingInfo = new iD.e(this.extend.minimum, this.extend.maximum), CD.relink(), CD
      }
      static mergeMeshes(DD, CD, cD, ID, pD, iD) {
        const QD = DD[0].hq(),
          wD = new bD.d(DD[0].name + "_merged", QD),
          BD = new SD(fD.e.RandomId(), QD, void 0, !1, wD);
        try {
          if (!bD.d.MergeMeshes(DD, CD, cD, wD, pD, iD)) return wD.dispose(), null
        } catch (yD) {
          throw wD.dispose(), yD
        }
        return BD.relink(), wD
      }
      removeVerticesData(DD) {
        this.releaseUnlessInstanced(DD), super.removeVerticesData(DD)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(DD) {
        var CD;
        DD && null !== (CD = this.getVertexBuffer(DD)) && void 0 !== CD && CD.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, wD.s)(this.model), this.model = null)
      }
    }

    function BD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bD.d(DD, cD);
      const pD = (0, wD.l)(CD),
        {
          positions: iD,
          normals: BD,
          uvs: yD,
          indices: MD,
          named: tD = {}
        } = CD,
        ZD = new QD.c;
      ZD.positions = iD, ZD.normals = null !== BD && void 0 !== BD ? BD : null, ZD.uvs = null !== yD && void 0 !== yD ? yD : null, ZD.indices = MD;
      const oD = new SD(fD.e.RandomId(), cD, ZD, !1, ID);
      for (const {
          kind: fD,
          components: bD
        }
        of pD.vertexAttributes) fD in tD && ID.setVerticesData(fD, tD[fD], !1, bD);
      return oD.link(pD), ID
    }

    function yD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const pD = new bD.d(DD, cD),
        {
          positions: iD,
          normals: fD,
          uvs: wD,
          indices: SD
        } = CD;
      return Object.assign(new QD.c, {
        positions: iD,
        normals: fD,
        uvs: wD,
        indices: SD
      }).applyToMesh(pD, ID), pD
    }
  },
  40674: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => oD,
      f: () => bD,
      j: () => fD,
      k: () => wD
    });
    var ID = cD(36613),
      pD = cD(38084),
      iD = cD(38076);

    function fD(DD, CD, cD, ID) {
      const pD = iD.i;
      CD.fill(0), DD.gravity.toArray(CD, pD.gravity), DD.colorDead.toArray(CD, pD.colorDead), cD[pD.ramp] = DD.useRampGradients ? 1 : 0;
      const fD = DD.getColorGradients(),
        bD = yD(DD, fD, "colour", ID);
      cD[pD.colorCount] = bD;
      for (let iD = 0; iD < bD; iD++) {
        var QD;
        const DD = fD[MD(fD, iD)];
        CD[pD.colorPositions + iD] = DD.gradient, DD.color1.toArray(CD, pD.color1 + 4 * iD), (null !== (QD = DD.color2) && void 0 !== QD ? QD : DD.color1).toArray(CD, pD.color2 + 4 * iD)
      }
      const wD = DD.getVelocityGradients(),
        SD = yD(DD, wD, "lb", ID);
      cD[pD.velocityCount] = SD;
      for (let iD = 0; iD < SD; iD++) ND(CD, pD.lb + 4 * iD, wD[MD(wD, iD)]);
      const BD = DD.useRampGradients ? DD.getColorRemapGradients() : null,
        tD = yD(DD, BD, "colour remap", ID);
      cD[pD.remapCount] = tD;
      for (let iD = 0; iD < tD; iD++) ND(CD, pD.remap + 4 * iD, BD[MD(BD, iD)])
    }

    function bD() {
      return {
        key: [],
        texels: new Uint8Array(4 * iD.e)
      }
    }
    const QD = [];

    function wD(DD, CD) {
      return SD(DD, QD), !vD(QD, CD.key) && (CD.key.length = 0, CD.key.push(...QD), CD.key.length > 0 && function(DD, CD) {
        for (let cD = 0; cD < iD.e; cD++) pD.k.GetCurrentGradient(cD / iD.e, DD, ((DD, CD, cD) => {
          ID.Color3.LerpToRef(DD.color, CD.color, cD, BD)
        })), CD[4 * cD] = 255 * BD.r, CD[4 * cD + 1] = 255 * BD.g, CD[4 * cD + 2] = 255 * BD.b, CD[4 * cD + 3] = 255
      }(DD.getRampGradients(), CD.texels), !0)
    }

    function SD(DD, CD) {
      CD.length = 0;
      const cD = DD.useRampGradients ? DD.getRampGradients() : null;
      if (null !== cD && void 0 !== cD && cD.length) {
        CD.push(cD.length);
        for (const DD of cD) CD.push(DD.gradient, DD.color.r, DD.color.g, DD.color.b)
      }
    }
    const BD = new ID.Color3;

    function yD(DD, CD, cD, ID) {
      return CD ? CD.length > iD.b ? (ID(`particleStops:${cD}`, `GPU particles use the first 2 and last ${iD.b-2} of more than ${iD.b} ${cD} gradient stops (${DD.name})`), iD.b) : CD.length : 0
    }

    function MD(DD, CD) {
      return CD < 2 || DD.length <= iD.b ? CD : DD.length - iD.b + CD
    }
    const tD = new Float32Array(iD.f),
      ZD = new Uint32Array(tD.buffer);

    function oD(DD, CD, cD) {
      return fD(DD, tD, ZD, cD), CD && vD(ZD, CD) ? null : ZD.slice()
    }

    function vD(DD, CD) {
      if (DD.length !== CD.length) return !1;
      for (let cD = 0; cD < DD.length; cD++)
        if (DD[cD] !== CD[cD]) return !1;
      return !0
    }

    function ND(DD, CD, cD) {
      var ID;
      DD[CD] = cD.gradient, DD[CD + 1] = cD.factor1, DD[CD + 2] = null !== (ID = cD.factor2) && void 0 !== ID ? ID : cD.factor1
    }
  },
  40670: (DD, CD, cD) => {
    function ID() {
      let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const CD = new Set;
      return (cD, ID) => {
        CD.has(cD) || (CD.add(cD), console.warn(DD + ID))
      }
    }
    cD.d(CD, {
      e: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);