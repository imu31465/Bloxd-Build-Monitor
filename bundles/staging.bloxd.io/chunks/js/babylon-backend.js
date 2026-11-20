export const id = 0;
export const ids = [0];
export const modules = {
  40204: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      CapeMaterialPlugin: () => rz,
      HueTintMaterialPlugin: () => Yz,
      LifeformMaterialPlugin: () => xz,
      OverlayMaterialPlugin: () => mz
    });
    var Fz = sz(40211),
      Wz = sz(37437);
    class Xz extends((0, Fz.f)(Wz.b)) {}(0, Fz.h)(Wz.b, Xz);
    var Oz = sz(36560);
    class oz extends((0, Fz.f)(Oz.i)) {}(0, Fz.h)(Oz.i, oz);
    var vz = sz(37277);
    class Uz extends((0, Fz.f)(vz.g)) {}(0, Fz.h)(vz.g, Uz);
    var Kz = sz(36800),
      uz = sz(39427),
      Nz = sz(36794);
    class bz extends((0, Fz.f)(Nz.f)) {
      constructor(zz, tz, sz) {
        super(zz, tz, sz), (0, Kz.i)(zz)
      }
      dispose(zz) {
        (0, Kz.k)(this._material), super.dispose(zz)
      }
    }(0, Fz.h)(Nz.f, bz), (0, Nz.g)({
      disableUnusedSpecularTerm: Fz.c,
      isLightingDisabled: zz => zz instanceof uz.StandardMaterial && zz.disableLighting
    });
    var wz = sz(38108);
    class Dz extends((0, Fz.f)(wz.e)) {}(0, Fz.h)(wz.e, Dz);
    var gz = sz(38210),
      Hz = sz(36662),
      Bz = sz(37583),
      Pz = sz(36608);
    class rz extends((0, Fz.f)(gz.e)) {}(0, Fz.h)(gz.e, rz);
    class Yz extends((0, Fz.f)(Hz.b)) {}(0, Fz.h)(Hz.b, Yz);
    class xz extends((0, Fz.f)(Bz.l)) {}(0, Fz.h)(Bz.l, xz);
    class mz extends((0, Fz.f)(Pz.b)) {}(0, Fz.h)(Pz.b, mz)
  },
  40668: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      addBabylonLights: () => Ht,
      default: () => rt
    });
    var Fz = sz(40674),
      Wz = (sz(39143), sz(40201), sz(39623), sz(40689)),
      Xz = sz(39010),
      Oz = sz(36652),
      oz = sz(36473),
      vz = sz(40701),
      Uz = sz(40706),
      Kz = sz(36605),
      uz = (sz(40211), sz(40717)),
      Nz = sz(40715),
      bz = sz(38137),
      wz = sz(40726),
      Dz = sz(39041),
      gz = sz(38119);
    const Hz = "gpuParticles",
      Bz = gz.t,
      Pz = zz => zz / 4,
      rz = zz => `gpuParticleSystem[${zz>>2}].${"xyzw"[3&zz]}`,
      Yz = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${gz.b}\n#define COLOR_POSITIONS ${Pz(Bz.colorPositions)}\n#define COLOR1 ${Pz(Bz.color1)}\n#define COLOR2 ${Pz(Bz.color2)}\n#define VELOCITY ${Pz(Bz.hb)}\n#define REMAP ${Pz(Bz.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${gz.m/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${rz(Bz.gravity)}, ${rz(Bz.gravity+1)}, ${rz(Bz.gravity+2)}); }\nint colorCount() { return int(${rz(Bz.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Pz(Bz.colorDead)}]; }\nint velocityCount() { return int(${rz(Bz.velocityCount)}); }\nint remapCount() { return int(${rz(Bz.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Dz.e.ShadersStore[`${Hz}VertexShader`] = Yz, Dz.e.ShadersStore[`${Hz}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const xz = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      mz = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Jz = sz(38112),
      Iz = sz(40729);
    class Cz extends Jz.e {
      constructor(zz, tz, sz, Fz) {
        super(zz, tz, sz), this.renderer = sz, this.Kg = Fz, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(gz.m), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Iz.d)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (zz, tz) => {
          const {
            engine: sz,
            perRow: Fz
          } = this, Wz = sz._gl;
          sz._bindTextureDirectly(Wz.TEXTURE_2D, this.records, !0), sz._unpackFlipY(!1);
          const Xz = this.ring.recordBits;
          for (let Oz = zz; Oz < tz;) {
            const zz = Math.floor(Oz / Fz),
              sz = Math.min(tz, (zz + 1) * Fz);
            Wz.texSubImage2D(Wz.TEXTURE_2D, 0, Oz % Fz * 4, zz, 4 * (sz - Oz), 1, Wz.RGBA_INTEGER, Wz.UNSIGNED_INT, Xz, Oz * gz.f), Oz = sz
          }
          sz._bindTextureDirectly(Wz.TEXTURE_2D, null)
        }, this.id = zz;
        const Wz = Fz.FD();
        this.engine = Wz;
        const Xz = Math.max(1, tz);
        this.perRow = Math.min(Xz, 256), this.records = Wz.createRawTexture(null, 4 * this.perRow, Math.ceil(Xz / this.perRow), uz.e.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, uz.e.TEXTURE_NEAREST_SAMPLINGMODE, null, uz.e.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Kg.getAnimationRatio() || 1;
        const tz = this.Kg.getFrameId();
        if (tz === this.animatedFrame) return !1;
        const sz = super.animate(zz);
        return sz && (this.animatedFrame = tz, this.ring.takeUploads(this.uploadSlots)), sz
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(zz) {
        (0, Iz.g)(this, this.uniforms, this.uniformBits, zz);
        for (const sz of gz.p) this.uniforms[sz] = this.uniformBits[sz];
        var tz;
        (0, Iz.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (tz = this.ramp) || void 0 === tz || tz.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = Nz.b.CreateRGBATexture(this.rampTexels.texels, gz.k, 1, this.Kg, !1, !1, uz.e.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var zz;
        this.records.dispose(), null === (zz = this.ramp) || void 0 === zz || zz.dispose(), this.ramp = null
      }
    }
    class ez {
      constructor(zz) {
        this.Kg = zz, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, wz.c)(), this.engine = zz.FD(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = Nz.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, zz, !1, !1, uz.e.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      tC(zz, tz) {
        const sz = 256 * this.engine.getCaps().maxTextureSize;
        tz > sz && this.warnOnce(`capacity:${zz}`, `particle system ${zz} holds ${sz} particles, not ${tz}: its records texture's limit`);
        const Fz = new Cz(zz, Math.min(tz, sz), this, this.Kg);
        return this.Kg.addParticleSystem(Fz), Fz
      }
      canDraw(zz) {
        var tz, sz;
        if (this.failed || null === (tz = zz.texture) || void 0 === tz || null === (sz = tz.mirror) || void 0 === sz || !sz.isReady()) return !1;
        for (const Fz of (0, bz.l)(zz.blendMode))
          if (!this.effectFor(Fz).isReady()) return !1;
        return !0
      }
      disposeStopped(zz) {
        this.Kg._toBeDisposed.push(zz)
      }
      remove(zz) {
        this.Kg.removeParticleSystem(zz), zz.releaseGl()
      }
      render(zz) {
        var tz;
        if (!zz.isReady() || !zz.hasLiveParticles()) return 0;
        const {
          engine: sz,
          Kg: Fz,
          frame: Wz
        } = this;
        zz.prepareDraw(this.warnOnce), zz.drawOffset(Wz, 0), Wz[3] = zz.drawTime();
        const Xz = zz.ring.drawStart(),
          Oz = zz.ring.drawCount(),
          oz = null !== (tz = zz.ramp) && void 0 !== tz ? tz : this.whiteRamp;
        sz.setState(!1);
        for (const vz of (0, bz.l)(zz.blendMode)) {
          const tz = this.effectFor(vz);
          sz.enableEffect(tz), tz.setTexture("gpuParticleTexture", zz.texture.mirror), tz.setTexture("gpuParticleRampTexture", oz), tz._bindTexture("gpuParticleRecords", zz.records), tz.setMatrix("gpuParticleView", Fz.getViewMatrix()), tz.setMatrix("gpuParticleProjection", Fz.getProjectionMatrix()), tz.setFloatArray4("gpuParticleSystem", zz.uniforms), tz.setFloat4("gpuParticleFrame", Wz[0], Wz[1], Wz[2], Wz[3]), tz.setFloat2("gpuParticleRange", Xz, Oz), tz.setFloat("gpuParticleRamp", zz.uniforms[gz.t.ramp]), sz.bindBuffers(this.vertexBuffers, null, tz), sz.setAlphaMode((0, bz.i)(vz)), sz.drawArraysType(uz.e.MATERIAL_TriangleStripDrawMode, 0, 4, Oz), tz._bindTexture("gpuParticleRecords", null)
        }
        return sz.setAlphaMode(uz.e.ALPHA_DISABLE), Oz
      }
      awaitLink(zz) {
        const tz = zz.getPipelineContext(),
          sz = this.engine._gl;
        !this.failed && sz && (!tz || tz.isParallelCompiled && !tz.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : tz.isParallelCompiled && tz.program && (sz.getProgramParameter(tz.program, sz.LINK_STATUS) || this.fail(sz.getProgramInfoLog(tz.program) || "a program did not link")))
      }
      effectFor(zz) {
        return zz === bz.e ? this.multiplyEffect : this.effect
      }
      createEffect(zz) {
        return this.engine.createEffect(Hz, [], xz, mz, zz, void 0, void 0, ((zz, tz) => {
          this.fail(tz)
        }))
      }
      fail(zz) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${zz}`);
          for (const zz of this.Kg.lY.slice()) zz instanceof Cz && zz.disposeOnStop && zz.dispose()
        }
      }
    }
    var Zz = sz(39353),
      Gz = sz(40192),
      Tz = sz(39121),
      cz = sz(39314),
      jz = sz(39312),
      Az = sz(39252),
      yz = sz(40249),
      Mz = sz(36985),
      dz = sz(40734),
      hz = sz(40742),
      Qz = sz(40746),
      kz = sz(39270),
      iz = sz(36879),
      Lz = sz(36874),
      lz = sz(39475),
      nz = sz(36949),
      az = sz(36900);

    function qz(zz) {
      if (zz.visibility < 1 || !zz.isVisible || !zz.isEnabled() || zz.metadata[az.h] || !zz.isReady()) return !0;
      const tz = zz.kY;
      if (!tz || 0 === tz.length) return !0;
      for (let sz = 0; sz < tz.length; sz++) {
        const Fz = tz[sz],
          Wz = Fz.vD();
        if (!Wz || !Wz.isReadyForSubMesh(zz, Fz, !1)) return !0
      }
      return !1
    }
    class Sz {
      constructor(zz, tz) {
        this.CN = zz, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, tz.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      ib(zz) {
        var tz;
        const sz = this.armed;
        if (this.armed = !1, this.vis = null, !sz) return !1;
        this.culled = 0;
        const {
          CN: Fz
        } = this, Wz = null === (tz = Fz.AY) || void 0 === tz ? void 0 : tz.visibility;
        if (!Wz || !zz || Fz.mD.JD) return !1;
        if (!(Fz.PN.Ssz[0] >= nz.e)) return !1;
        const Xz = zz.getProjectionMatrix().m;
        if (0 !== Xz[15]) return !1;
        const Oz = Fz.nN,
          oz = zz.globalPosition,
          vz = this.eye;
        return vz[0] = oz.x + Oz[0], vz[1] = oz.y + Oz[1], vz[2] = oz.z + Oz[2], !!Wz.eyeClear(vz[0], vz[1], vz[2], zz.minZ, Xz, Fz.PN) && (this.vis = Wz, this.passable.clear(), this.count = 0, !0)
      }
      see(zz, tz) {
        const sz = this.count++;
        if (sz === this.cellSlots.length) {
          const zz = new Int32Array(2 * sz);
          zz.set(this.cellSlots), this.cellSlots = zz
        }
        this.cellSlots[sz] = tz, this.meshes[sz] = zz
      }
      seeThrough(zz) {
        this.passable.add(zz)
      }
      finish(zz, tz) {
        const {
          vis: sz,
          eye: Fz,
          meshes: Wz,
          count: Xz,
          cellSlots: Oz
        } = this, {
          PN: oz
        } = this.CN, [vz, Uz] = oz.Ssz, Kz = null !== sz && sz.update(Fz[0], Fz[1], Fz[2], oz.K9, vz, Uz, this.passable);
        let uz = 0;
        for (let Nz = 0; Nz < Xz; Nz++) {
          const Fz = Wz[Nz];
          if (Kz) {
            const zz = 3 * Oz[Nz];
            if (zz >= 0 && !sz.isDrawn(tz[zz], tz[zz + 1], tz[zz + 2])) {
              uz++;
              continue
            }
          }
          kz.h.prototype.push.call(zz, Fz)
        }
        Wz.fill(null, 0, Xz), this.count = 0, this.vis = null, this.culled = uz
      }
    }
    var Vz = sz(36934),
      Rz = sz(36888),
      pz = sz(39451),
      fz = sz(40752),
      Ez = sz(39458),
      zt = sz(39374);
    let tt = 1;
    const st = new WeakSet;

    function Ft() {
      return tt
    }

    function Wt() {
      tt = tt >= 1073741823 ? 1 : tt + 1
    }

    function Xt(zz) {
      const tz = zz.metadata;
      if (!tz || !0 !== tz[Lz.p]) return;
      const sz = tz[Lz.t],
        Fz = null === sz || void 0 === sz ? void 0 : sz._noaStamps;
      if (!sz || !Fz) return;
      const Wz = sz.entries.indexOf(zz);
      Wz >= 0 && (Fz[Wz] = 0)
    }

    function Ot(zz) {
      const tz = zz.kY;
      for (let sz = 0; sz < tz.length; sz++) {
        const zz = tz[sz].vD();
        if (zz && !zz.isFrozen) return !1
      }
      for (let sz = 0; sz < tz.length; sz++) {
        const zz = tz[sz].vD();
        zz && st.add(zz)
      }
      return !0
    }
    let ot = !1;
    const vt = new WeakSet;

    function Ut(zz, tz) {
      const sz = zz[tz];
      if ("function" !== typeof sz) throw new Error(`terrainDrawState: Babylon has no ${tz} to hook`);
      return sz
    }

    function Kt(zz, tz, sz, Fz, Wz) {
      const Xz = sz.PN.K9,
        Oz = new Map;
      let oz = 0;
      const vz = new Sz(sz, zz),
        Uz = new Vz.c(Xz, zz.FD());
      ! function(zz) {
        if (vt.has(zz) || (vt.add(zz), zz.onContextLostObservable.add(Wt), zz.onContextRestoredObservable.add(Wt)), ot) return;
        ot = !0;
        const tz = fz.e.prototype,
          sz = Ut(tz, "_markSubMeshesAsDirty");
        Object.assign(tz, {
          _markSubMeshesAsDirty(zz) {
            sz.call(this, zz), Xt(this)
          }
        });
        const Fz = Ut(zt.e.prototype, "_syncParentEnabledState");
        Object.assign(zt.e.prototype, {
          _syncParentEnabledState() {
            Fz.call(this), Xt(this)
          }
        });
        const Wz = Ut(Ez.c.prototype, "resetDrawCache");
        Ez.c.prototype.resetDrawCache = function(zz, tz) {
          Wz.call(this, zz, tz), Xt(this.getMesh())
        };
        const Xz = pz.b.prototype,
          Oz = Ut(Xz, "markDirty");
        Xz.markDirty = function(zz) {
          Oz.call(this, zz), st.has(this) && Wt()
        };
        const oz = Ut(Xz, "_markAllSubMeshesAsDirty");
        Object.assign(Xz, {
          _markAllSubMeshesAsDirty(zz) {
            oz.call(this, zz), st.has(this) && Wt()
          }
        })
      }(zz.FD());
      let Kz = new Float64Array(384),
        uz = new Int32Array(64),
        Nz = new Uint8Array(64),
        bz = new Float64Array(64),
        wz = new Int32Array(192),
        Dz = 0;
      const gz = [],
        Hz = new Float64Array(24),
        Bz = () => {
          const zz = gz.pop();
          return void 0 !== zz ? (uz[zz] = 0, zz) : (Dz === uz.length && (Kz = ut(Kz, new Float64Array(2 * Kz.length)), uz = ut(uz, new Int32Array(2 * uz.length)), Nz = ut(Nz, new Uint8Array(2 * Nz.length)), bz = ut(bz, new Float64Array(2 * bz.length)), wz = ut(wz, new Int32Array(2 * wz.length))), Dz++)
        },
        Pz = zz => {
          const tz = 6 * zz._noaSlot,
            sz = zz.tFz[0],
            Fz = zz.tFz[1];
          Kz[tz] = sz.x, Kz[tz + 1] = sz.y, Kz[tz + 2] = sz.z, Kz[tz + 3] = Fz.x, Kz[tz + 4] = Fz.y, Kz[tz + 5] = Fz.z
        },
        rz = (zz, tz, sz) => {
          if (!sz) return vz.see(zz, -1), !1;
          const Fz = qz(zz);
          return Fz && vz.seeThrough(bz[tz]), vz.see(zz, tz), !Fz
        };
      let Yz = -1;
      return zz.getActiveMeshCandidates = () => {
        const sz = zz.frustumPlanes,
          Fz = tz._selectionContent;
        Fz.reset(), (sz => {
          const Fz = zz.frustumPlanes;
          oz = oz + 1 | 0 || 1;
          const Wz = tz.blocks,
            Xz = vz.ib(zz.activeCamera),
            Oz = Xz && !0;
          if (Oz) {
            const tz = zz.FD().currentRenderPassId;
            tz !== Yz && (Yz = tz, Wt())
          }
          const Uz = Ft(),
            bz = Oz && !1;
          Wz.length > 0 && function(zz, tz) {
            for (let sz = 0; sz < 6; sz++) {
              const Fz = zz[sz],
                Wz = Fz.normal;
              tz[4 * sz] = Wz.x, tz[4 * sz + 1] = Wz.y, tz[4 * sz + 2] = Wz.z, tz[4 * sz + 3] = Fz.d
            }
          }(Fz, Hz);
          const Dz = Kz,
            gz = uz,
            Bz = Nz;
          for (let zz = 0; zz < Wz.length; zz++) {
            const tz = Wz[zz];
            if (!lz.c.IsInFrustum(tz.tFz, Fz)) continue;
            const Kz = tz.entries;
            {
              const zz = tz._noaSlots,
                Fz = tz._noaStamps,
                Wz = tz._noaTerrain;
              for (let tz = 0; tz < Kz.length; tz++) {
                const uz = zz[tz];
                if (gz[uz] !== oz && (gz[uz] = oz, Bz[uz] = Nt(Dz, 6 * uz, Hz) ? 1 : 0), 0 === Bz[uz]) continue;
                const Nz = Kz[tz];
                if (Oz && Fz[tz] === Uz) bz && 1 === Wz[tz] && qz(Nz) && 0, vz.see(Nz, 1 === Wz[tz] ? uz : -1);
                else if (Oz) {
                  Fz[tz] = Uz;
                  const zz = !0 === Nz.metadata[Rz.h];
                  Wz[tz] = zz ? 1 : 0;
                  const sz = rz(Nz, uz, zz);
                  !zz || sz && Ot(Nz) || (Fz[tz] = 0)
                } else Xz ? rz(Nz, uz, !0 === Nz.metadata[Rz.h]) : kz.h.prototype.push.call(sz, Nz)
              }
              continue
            }
          }
          Xz && vz.finish(sz, wz)
        })(Fz), Uz.apply(Fz, zz.activeCamera);
        const Xz = tz.zFz;
        for (let zz = 0; zz < Xz.length; zz++) {
          const tz = Xz[zz];
          tz.isEnabled() && kz.h.prototype.push.call(Fz, tz)
        }
        return Wz(Fz, sz), Fz
      }, {
        sFz: () => vz.culled,
        ksz: (zz, tz) => {
          const Wz = Math.floor(tz[0] / Xz),
            oz = Math.floor(tz[1] / Xz),
            vz = Math.floor(tz[2] / Xz),
            Uz = `${Wz}|${oz}|${vz}`;
          let Kz = Oz.get(Uz);
          if (!Kz) {
            const zz = [0, 0, 0];
            sz.dzz([Wz * Xz - 1, oz * Xz - 1, vz * Xz - 1], null, zz), Kz = Object.assign(Fz(zz, Xz + 2), {
              FFz: Uz,
              WFz: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Bz()
            }), Pz(Kz), bz[Kz._noaSlot] = (0, iz.l)(Wz, oz, vz), wz[3 * Kz._noaSlot] = Wz, wz[3 * Kz._noaSlot + 1] = oz, wz[3 * Kz._noaSlot + 2] = vz, Oz.set(Uz, Kz)
          }
          Kz.WFz++, zz.metadata[Lz.u] = Kz
        },
        mI: zz => {
          const tz = zz.metadata[Lz.u];
          tz && (tz.WFz--, tz.WFz <= 0 && (Oz.delete(tz.FFz), gz.push(tz._noaSlot)), zz.metadata[Lz.u] = null)
        },
        Esz: (zz, tz) => {
          const sz = zz,
            Fz = tz.metadata[Lz.u];
          (sz._noaSlots ??= []).push(Fz._noaSlot), (sz._noaStamps ??= []).push(0), (sz._noaTerrain ??= []).push(0), sz.entries.push(tz)
        },
        removeEntry: (zz, tz) => {
          const sz = zz,
            Fz = sz.entries,
            Wz = Fz.indexOf(tz);
          if (Wz < 0) return;
          const Xz = sz._noaSlots,
            Oz = sz._noaStamps,
            oz = sz._noaTerrain,
            vz = Fz.length - 1;
          Fz[Wz] = Fz[vz], Xz[Wz] = Xz[vz], Oz[Wz] = Oz[vz], oz[Wz] = oz[vz], Fz.pop(), Xz.pop(), Oz.pop(), oz.pop()
        },
        x_: zz => {
          for (const tz of Oz.values()) {
            tz.asz.oFz(zz), tz.nsz.oFz(zz);
            for (const sz of tz.tFz) sz.oFz(zz);
            Pz(tz)
          }
        }
      }
    }

    function ut(zz, tz) {
      return tz.set(zz), tz
    }

    function Nt(zz, tz, sz) {
      const Fz = zz[tz],
        Wz = zz[tz + 1],
        Xz = zz[tz + 2],
        Oz = zz[tz + 3],
        oz = zz[tz + 4],
        vz = zz[tz + 5];
      for (let Uz = 0; Uz < 24; Uz += 4) {
        const zz = sz[Uz],
          tz = sz[Uz + 1],
          Kz = sz[Uz + 2];
        if (!(zz * (zz >= 0 ? Oz : Fz) + tz * (tz >= 0 ? oz : Wz) + Kz * (Kz >= 0 ? vz : Xz) + sz[Uz + 3] >= 0)) return !1
      }
      return !0
    }
    var bt = sz(37201);
    class wt {
      constructor(zz, tz) {
        var sz = zz.Kg;
        sz.Jsz(new Qz.c(sz));
        var Fz = new dz.b(vz);
        sz.UFz = Fz, Fz.blocks = [];
        var Wz, Xz = {},
          Oz = [];
        this.textPlanes = Oz, this.sFz = () => Wz.sFz(), this.x_ = zz => {
          Kz(Fz, zz), Wz.x_(zz)
        }, this.ksz = (tz, sz, oz) => {
          if (!tz.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!tz.metadata[Lz.t] && !tz.metadata[Lz.l]) {
            if (!sz) {
              var vz = Fz.zFz;
              if (tz.metadata[Lz.A] && !tz.parent) {
                vz = Oz;
                var Kz = tz.rC().uFz;
                tz.metadata[Lz.C] = Kz.center.length() + Kz.radius, tz.WD = !0
              }
              return vz.push(tz), tz.metadata[Lz.j] = vz, void(tz.metadata[Lz.l] = !0)
            }
            var Nz = Math.floor(oz[0] / Uz),
              bz = Math.floor(oz[1] / Uz),
              wz = Math.floor(oz[2] / Uz),
              Dz = Nz + "|" + bz + "|" + wz,
              gz = Xz[Dz];
            if (!gz) {
              var Hz = [Nz * Uz, bz * Uz, wz * Uz],
                Bz = [0, 0, 0];
              zz.CN.dzz(Hz, null, Bz), gz = uz(Bz, Uz), Fz.blocks.push(gz), Xz[Dz] = gz, gz.FFz = Dz
            }
            Wz.ksz(tz, oz), Wz.Esz(gz, tz), gz.WFz = (gz.WFz || 0) + 1, tz.metadata[Lz.t] = gz, tz.metadata[Lz.p] = !0, tz.WD = !0
          }
        }, this.mI = zz => {
          if (zz.metadata) {
            zz.metadata[Lz.l] && ((0, iz.p)(zz.metadata[Lz.j], zz), zz.metadata[Lz.l] = !1), zz.metadata[Lz.j] === Oz && (zz.WD = !1), zz.metadata[Lz.j] = void 0, zz.metadata[Lz.C] = void 0;
            var tz = zz.metadata[Lz.t];
            tz && tz.entries && (zz.metadata[Lz.p] && Wz.removeEntry(tz, zz), tz.WFz--, tz.WFz <= 0 && (delete Xz[tz.FFz], (0, iz.p)(Fz.blocks, tz))), Wz.mI(zz), zz.metadata[Lz.t] = null, zz.metadata[Lz.p] = !1
          }
        }, this.o5 = function(zz) {
          let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (zz.metadata[Lz.t]) {
            if (zz.metadata[Lz.p] === tz) return;
            var sz = zz.metadata[Lz.t];
            sz && sz.entries && (tz ? Wz.Esz(sz, zz) : Wz.removeEntry(sz, zz)), zz.metadata[Lz.p] = tz
          } else {
            if (zz.metadata[Lz.l] === tz) return;
            var Xz = zz.metadata[Lz.j] || Fz.zFz;
            tz ? Xz.push(zz) : (0, iz.p)(Xz, zz), zz.metadata[Lz.l] = tz
          }
        };
        var vz = () => {},
          Uz = tz * zz.CN.PN.K9,
          Kz = (zz, tz) => {
            zz.blocks.forEach((zz => {
              zz.asz.oFz(tz), zz.nsz.oFz(tz), zz.tFz.forEach((zz => zz.oFz(tz))), zz.blocks && Kz(zz, tz)
            }))
          },
          uz = (zz, tz) => {
            var sz = new oz.XD(zz[0], zz[1], zz[2]),
              Fz = new oz.XD(zz[0] + tz, zz[1] + tz, zz[2] + tz);
            return new hz.b(sz, Fz, void 0, void 0, void 0, vz)
          };
        Wz = Kt(sz, Fz, zz.CN, uz, ((zz, tz) => {
          for (var sz = 0; sz < Oz.length; sz++) {
            var Fz = Oz[sz];
            Fz.isEnabled(!1) && ((0, bt.e)(Fz, tz) && kz.h.prototype.push.call(zz, Fz))
          }
        }))
      }
    }

    function Dt(zz) {
      const {
        holderPosition: tz,
        holderRotation: sz,
        XV: Fz,
        fov: Wz,
        near: Xz,
        far: Oz
      } = zz.model.sV, oz = zz.BFz;
      oz.position.m_(tz[0], tz[1], tz[2]), oz.rotation.m_(sz[0], sz[1], sz[2]);
      const vz = zz.camera;
      vz.position.m_(Fz[0], Fz[1], Fz[2]), vz.fov = Wz, vz.minZ = Xz, vz.maxZ = Oz
    }

    function gt(zz) {
      const tz = zz.FD(),
        sz = tz,
        Fz = sz._gl;
      if (!Fz || sz.jD < 2 || tz.ysz || Fz.getParameter(Fz.DEPTH_BITS) < 24) return !1;
      const Wz = zz._renderingManager,
        Xz = Wz.getRenderingGroup(-1),
        Oz = Wz.getRenderingGroup(0),
        oz = cz.c.prototype.render;
      return Xz.render = function(zz, tz, sz, Fz, Wz, Xz, vz, Uz, Kz) {
        (zz || Oz._empty) && oz.call(this, zz, tz, sz, Fz, Wz, Xz, vz, Uz, Kz)
      }, Oz.render = function(zz, sz, Wz, Oz) {
        let vz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Uz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Kz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Nz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          bz = arguments.length > 8 ? arguments[8] : void 0;
        zz ? oz.call(this, zz, sz, Wz, Oz, vz, Uz, Kz, Nz, bz) : (tz.setAlphaMode(uz.e.ALPHA_DISABLE), oz.call(this, null, !1, !1, Oz, vz, Uz, Kz, !1), Xz._empty || (Fz.depthRange(1, 1), oz.call(Xz, null, sz, Wz, Oz, vz, Uz, Kz, Nz, bz), Fz.depthRange(0, 1)), oz.call(this, null, sz, Wz, Oz, !1, !1, !1, Nz, bz))
      }, !0
    }

    function Ht(zz, tz) {
      return [tz, Mz.e].map(((tz, sz) => {
        const Fz = new Wz.b("light", oz.XD.FromArray(tz), zz);
        return Fz.diffuse = Oz.Color3.FromArray([1, 1, 1]), Fz.specular = Oz.Color3.FromArray([1, 1, 1]), Fz.intensity = Mz.d[sz], Fz
      }))
    }
    class Bt extends Uz.b {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(zz) {
        var tz;
        this.heldTexture = zz, this.particleTexture = null !== (tz = null === zz || void 0 === zz ? void 0 : zz.mirror) && void 0 !== tz ? tz : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        zz && (this.particleTexture = null, (0, Kz.J)(this.heldTexture), this.heldTexture = null), super.dispose(zz, tz, sz)
      }
    }
    const Pt = Fz.d.Zero();
    const rt = {
      mFz: function(zz, tz) {
        return new Xz.b(zz, tz.ptz, {
          preserveDrawingBuffer: tz.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      YFz: function(zz, tz) {
        ! function(zz, tz, sz) {
          const Fz = new Az.b(zz.engine);
          zz.Kg = Fz, Fz.detachControl(), Fz.autoClear = !1, jz.e.MIN_RENDERINGGROUPS = -1;
          for (let Xz = jz.e.MIN_RENDERINGGROUPS; Xz <= 1; Xz++) Fz.setRenderingOrder(Xz, cz.c.PainterSortCompare, cz.c.PainterSortCompare, cz.c.PainterSortCompare);
          Fz.setRenderingAutoClearDepthStencil(0, !1), Tz.d.Enabled = !1, zz.DFz = new wt(zz, Math.round(tz.gFz)), zz.BFz = new Gz.c("camHolder", Fz), zz.camera = new Zz.d("camera", new oz.XD(0, 0, 0), Fz), zz.camera.parent = zz.BFz, Dt(zz), (0, Mz.i)(zz, ((zz, tz, sz) => (0, yz.j)(tz, sz, zz.Kg))), Fz.clearColor = Oz.c.FromArray(tz.clearColor), Fz.ambientColor = Oz.Color3.FromArray(tz.ambientColor);
          const Wz = sz(Fz, tz.rFz);
          Fz.onNewLightAddedObservable.add((zz => {
            Wz.some((tz => tz === zz)) || console.error(`Light "${zz.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Fz.skipPointerMovePicking = !0
        }(zz, tz, Ht), gt(zz.Kg)
      },
      HFz: Dt,
      setBabylonFog: function(zz, tz, sz, Fz) {
        const Wz = zz.Kg;
        Wz.fogMode = 3, Wz.fogStart = tz, Wz.fogEnd = sz, Wz.fogColor.set(Fz[0], Fz[1], Fz[2])
      },
      JFz: function(zz, tz, sz) {
        return zz.engine.jD >= 2 && (zz.IFz || (zz.IFz = new ez(zz.Kg)), !zz.IFz.failed) ? zz.IFz.tC(tz, sz) : new Bt(tz, sz, zz.Kg)
      },
      eFz: function(zz, tz) {
        zz.Kg.lY.forEach((sz => {
          if (sz instanceof Cz) return void sz.x_(tz, zz.CN.nN);
          const Fz = sz;
          if (Fz.emitter.getConnectedParticleSystems)
            for (const zz of Fz._particles) zz.position.set(zz.position.x - tz[0], zz.position.y - tz[1], zz.position.z - tz[2]);
          else {
            if (!Fz.worldOffset) throw new Error("Particle system has no world offset");
            Fz.worldOffset.x = -zz.CN.nN[0], Fz.worldOffset.y = -zz.CN.nN[1], Fz.worldOffset.z = -zz.CN.nN[2]
          }
        }))
      },
      linesFromArrays: function(zz, tz, sz) {
        const Fz = new vz.b(tz, zz.Kg, null, void 0, void 0, !1);
        return (0, yz.f)(tz, sz, zz.Kg, Fz), Fz
      },
      ug: Xt,
      CFz: function(zz, tz) {
        return Pt.origin.vsz(tz.origin), Pt.direction.vsz(tz.direction), Pt.length = tz.length, Pt.epsilon = tz.epsilon, Pt.CFz(zz, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40211: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => kz,
      f: () => Bz,
      h: () => qz
    });
    var Fz = sz(39427),
      Wz = sz(40216),
      Xz = sz(40253),
      Oz = sz(40220),
      oz = sz(37250),
      vz = sz(37257),
      Uz = sz(37259),
      Kz = sz(37268),
      uz = sz(36600),
      Nz = sz(36605),
      bz = sz(40225),
      wz = sz(36581),
      Dz = sz(36590),
      gz = sz(36569);

    function Hz(zz, tz) {
      return Object.assign((function(zz, sz, Fz, Wz) {
        return tz(this.featureState, zz, sz, Fz, Wz)
      }), {
        Zw: zz
      })
    }

    function Bz(zz) {
      const tz = class extends bz.d {
          constructor(tz, sz) {
            const Fz = (0, Dz.$)(tz),
              Wz = Fz && (0, Dz.z)(Fz, zz.name);
            for (var Xz = arguments.length, Oz = new Array(Xz > 2 ? Xz - 2 : 0), oz = 2; oz < Xz; oz++) Oz[oz - 2] = arguments[oz];
            super(tz, zz.name, zz.priority, Wz ? Wz.defines : zz.defines(...Oz), !1), this.featureState = void 0, this.featureState = sz, this._pluginManager._addPlugin(this), this._enable(!0), (0, Dz.B)(this._material, zz, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return zz.className
          }
          isCompatible(zz) {
            return zz === gz.e.GLSL || zz === gz.e.WGSL
          }
        },
        sz = (0, wz.g)(zz);
      for (const [Fz, Wz] of Object.entries(wz.b)) {
        const Xz = zz[Fz];
        if (Xz) {
          const zz = sz[Fz];
          Object.defineProperty(tz.prototype, Wz, {
            value: Hz(Xz, zz),
            writable: !0,
            configurable: !0
          })
        }
      }
      return tz
    }
    class Pz extends(Bz(oz.e)) {}
    var rz = sz(39010),
      Yz = sz(40234);
    const xz = new WeakMap;

    function mz(zz, tz, sz) {
      let Fz = xz.get(sz);
      Fz || (Fz = new Map, xz.set(sz, Fz));
      const {
        url: Wz
      } = zz;
      let Xz = Fz.get(Wz);
      return Xz || (Xz = async function(zz, tz, sz) {
        const {
          width: Fz,
          height: Wz
        } = zz.getSize(), Xz = Math.round(Wz / Fz), oz = tz && tz.byteLength === Fz * Fz * Xz * 4 ? tz : zz._readPixelsSync();
        return new Yz.e(oz, Fz, Fz, Xz, rz.b.TEXTUREFORMAT_RGBA, sz, !0, !1, Oz.c.NEAREST_NEAREST_MIPLINEAR)
      }(zz, tz, sz), Fz.set(Wz, Xz), Xz.catch((() => {
        Fz.delete(Wz)
      }))), Xz
    }
    var Jz = sz(37271);
    class Iz extends(Bz(vz.i)) {
      constructor(zz, tz) {
        super(zz, tz), tz.textures.forEach(((zz, tz) => {
          zz.mirror.onLoadObservable.add((zz => {
            this.setTextureArrayData(zz, tz).catch((zz => {
              console.error(`Failed to build texture array for atlas ${tz}`, zz)
            }))
          }))
        })), (0, Jz.h)(tz, zz.shaderLanguage)
      }
      async setTextureArrayData(zz, tz) {
        var sz, Fz;
        const Wz = this.featureState,
          {
            width: Xz,
            height: Oz
          } = zz.getSize(),
          oz = Wz.useWebGL2 ? await mz(zz, null !== (sz = null === (Fz = Wz.sources.pixels) || void 0 === Fz ? void 0 : Fz[tz]) && void 0 !== sz ? sz : null, this._material.aJ()) : null;
        (0, Jz.d)(this._material, Wz, tz, oz, Xz, Math.round(Oz / Xz), this._material.shaderLanguage)
      }
    }
    var Cz = sz(40238),
      ez = sz(39472),
      Zz = sz(36473),
      Gz = sz(40240),
      Tz = sz(39562),
      cz = sz(39458),
      jz = sz(40192),
      Az = sz(36969),
      yz = sz(40249);
    class Mz extends Cz.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const dz = {
      Mesh: Gz.b,
      TransformNode: jz.c,
      Lw: Cz.b,
      VertexBuffer: Cz.c,
      BoundingInfo: ez.d,
      XD: Zz.XD,
      ArenaBuffer: Mz,
      SubMesh: cz.c,
      VertexData: Tz.b,
      MirroredGeometry: yz.c,
      meshFromArrays: yz.f,
      plainMeshFromArrays: yz.j
    };
    (0, Az.f)(dz);
    var hz = sz(36800);
    class Qz extends(Bz(Kz.h)) {
      constructor(zz, tz) {
        if (super(zz, tz), zz instanceof Fz.StandardMaterial && tz.dirLightCount > 0) {
          const tz = zz,
            sz = tz._blockDirtyMechanism;
          tz._blockDirtyMechanism = !0, zz.disableLighting = !0, tz._blockDirtyMechanism = sz;
          const Fz = (0, Dz.$)(zz);
          Fz && (Fz.disableLighting = !0, (0, Dz.Z)(Fz))
        }(0, hz.i)(zz)
      }
      dispose(zz) {
        (0, hz.k)(this._material), super.dispose(zz)
      }
    }

    function kz(zz, tz) {
      if (!(tz instanceof Fz.StandardMaterial) || tz.specularTexture) return;
      const {
        r: sz,
        g: Wz,
        b: Xz
      } = tz.specularColor;
      0 === sz && 0 === Wz && 0 === Xz && (zz.SPECULARTERM = !1)
    }(0, Kz.f)({
      disableUnusedSpecularTerm: kz
    });
    var iz = sz(36682),
      Lz = sz(36976);
    const lz = new RegExp(`^#define ${Uz.c}\\s*$`, "m");
    class nz extends(Bz(Uz.k)) {
      constructor(zz, tz) {
        super(zz, tz), this.lw = !1, tz.ditherOnlyWhileFading && (Lz.e.add(zz), this.prewarmDitherTwins(zz))
      }
      prewarmDitherTwins(zz) {
        const tz = new WeakSet;
        zz.onEffectCreatedObservable.add((sz => {
          let {
            effect: Fz,
            subMesh: Wz
          } = sz;
          if (this.featureState.prewarmingDither || tz.has(Fz)) return;
          tz.add(Fz);
          const Xz = null === Wz || void 0 === Wz ? void 0 : Wz.getMesh();
          Xz && !lz.test(Fz.defines) && zz.aJ().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Xz) || tz.delete(Fz)
          }))
        }))
      }
      prewarmDither(zz) {
        if (this.lw || zz.zsz()) return !1;
        const tz = new cz.c(0, 0, 0, 0, 0, zz, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(zz, tz)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== tz.effect
      }
      dispose(zz) {
        this.lw = !0, super.dispose(zz)
      }
    }
    const az = new Map;

    function qz(zz, tz) {
      az.set(zz, tz)
    }
    qz(oz.e, Pz), qz(vz.i, Iz), qz(Uz.k, nz), qz(Kz.h, Qz), (0, uz.b)({
      create: (zz, tz) => {
        const sz = new Fz.StandardMaterial(zz.name, tz);
        return (0, iz.m)(zz, sz), sz.detailMap._pluginDefineNames
      },
      write: (zz, tz, sz) => {
        (0, iz.Q)(zz.mirror, tz, sz)
      },
      addFeature: (zz, tz, sz) => {
        const Fz = az.get(tz.feature);
        if (!Fz) throw new Error(`${tz.feature.name} has no plugin class (registerPluginClass)`);
        new Fz(zz.mirror, tz.state, ...sz)
      },
      texture: (zz, tz, sz) => {
        let {
          url: Fz,
          noMipmap: Wz,
          invertY: Xz,
          samplingMode: oz,
          data: vz,
          sets: Uz
        } = sz;
        if (!vz) {
          const sz = new Oz.c(Fz, tz, Wz, Xz, oz);
          return Object.assign(sz, Uz), void(0, Nz.T)(zz, sz)
        }
        const Kz = {},
          uz = new Promise(((zz, tz) => {
            Kz.onLoad = zz, Kz.onError = (zz, sz) => {
              tz(new Error(`${vz.context}: ${(null===sz||void 0===sz?void 0:sz.message)||zz||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: bz,
            bytes: wz,
            label: Dz
          } = vz,
          gz = {
            noMipmap: Wz,
            invertY: !1,
            samplingMode: oz,
            ...Kz,
            mimeType: bz,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Hz = new Oz.c(null, tz, gz);
        iz.p.set(Hz, uz), Object.assign(Hz, Uz), Hz.updateURL(Fz, wz);
        const Bz = Hz.getInternalTexture();
        Bz && (Bz.label = Dz), zz.uvSet = Hz.coordinatesIndex, zz.matrix.set((0, iz.K)(Hz)), (0, Nz.T)(zz, Hz)
      },
      cube: (zz, tz, sz) => {
        let {
          rootUrl: Fz,
          files: Xz,
          noMipmap: oz,
          luminance: vz
        } = sz;
        const {
          samplingMode: Uz
        } = zz.sampler, Kz = Uz === (0, Nz.I)(oz) ? null : () => {
          (0, iz.I)(uz, Uz)
        }, uz = new Wz.b(Fz, tz, null, oz, Xz, Kz, null, (0, Nz.E)(vz));
        uz.coordinatesMode = Oz.c.SKYBOX_MODE, (0, Nz.T)(zz, uz)
      },
      canvas: (zz, tz, sz) => {
        let {
          width: Fz,
          height: Wz,
          mipmaps: oz,
          samplingMode: vz,
          hasAlpha: Uz = !1,
          wrap: Kz = Oz.c.CLAMP_ADDRESSMODE
        } = sz;
        const uz = new Xz.d(tz, {
          width: Fz,
          height: Wz
        }, zz, oz, vz);
        uz.hasAlpha = Uz, uz.wrapU = Kz, uz.wrapV = Kz;
        const Nz = (0, iz.x)(uz);
        return (0, iz.A)(Nz, uz), Nz
      }
    })
  },
  40249: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Kz,
      f: () => uz,
      j: () => Nz
    });
    var Fz = sz(40238),
      Wz = sz(39231),
      Xz = sz(39472),
      Oz = sz(39566),
      oz = sz(40240),
      vz = sz(39562),
      Uz = sz(36860);
    class Kz extends Oz.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (zz, tz) => {
          this.releaseUnlessInstanced(tz)
        }, this.onLinked = null
      }
      link(zz) {
        var tz;
        (0, Uz.p)(zz), this.model = zz, null === (tz = this.onLinked) || void 0 === tz || tz.call(this, zz)
      }
      relink() {
        this.release();
        const zz = [];
        for (const Wz of Object.values(this._vertexBuffers))
          if (!Wz.getIsInstanced()) {
            const {
              byteOffset: tz,
              byteStride: sz,
              type: Fz,
              normalized: Xz
            } = Wz;
            zz.push({
              kind: Wz.getKind(),
              data: Wz.getData(),
              offset: tz,
              stride: sz,
              components: Wz.getSize(),
              glType: Fz,
              isNormalized: Xz
            })
          } const tz = this._indices.length ? this._indices : null,
          {
            minimum: sz,
            maximum: Fz
          } = this.extend;
        this.link(new Uz.g(zz, tz, this.getTotalVertices(), new Float64Array(sz.hsz()), new Float64Array(Fz.hsz())))
      }
      copy(zz) {
        if (!this.model) return super.copy(zz);
        const tz = new Kz(zz, this.aJ()),
          sz = this.Qsz(void 0, !0);
        sz && tz.setIndices(sz);
        let Oz = !1;
        for (const Xz in this._vertexBuffers) {
          const zz = this._vertexBuffers[Xz],
            sz = zz.getData();
          if (!sz) continue;
          const oz = zz.getSize(),
            {
              type: vz,
              byteOffset: Uz,
              byteStride: Kz,
              normalized: uz
            } = zz;
          Oz ||= zz.isUpdatable();
          const Nz = zz.getIsInstanced() ? (sz instanceof Array ? 4 * sz.length : sz.byteLength) / Kz : this.getTotalVertices(),
            bz = (0, Wz.s)(sz, oz, vz, Uz, Kz, Nz, !0),
            wz = {
              updatable: zz.isUpdatable(),
              stride: oz,
              type: vz,
              normalized: uz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            };
          tz.setVerticesBuffer(new Fz.c(this.FD(), bz, Xz, wz), Nz)
        }
        return tz._updatable = Oz, tz._boundingInfo = new Xz.d(this.extend.minimum, this.extend.maximum), tz.relink(), tz
      }
      static mergeMeshes(zz, tz, sz, Fz, Wz, Xz) {
        const vz = zz[0].aJ(),
          Uz = new oz.b(zz[0].name + "_merged", vz),
          uz = new Kz(Oz.b.RandomId(), vz, void 0, !1, Uz);
        try {
          if (!oz.b.MergeMeshes(zz, tz, sz, Uz, Wz, Xz)) return Uz.dispose(), null
        } catch (Nz) {
          throw Uz.dispose(), Nz
        }
        return uz.relink(), Uz
      }
      removeVerticesData(zz) {
        this.releaseUnlessInstanced(zz), super.removeVerticesData(zz)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(zz) {
        var tz;
        zz && null !== (tz = this.getVertexBuffer(zz)) && void 0 !== tz && tz.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Uz.v)(this.model), this.model = null)
      }
    }

    function uz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new oz.b(zz, sz);
      const Wz = (0, Uz.m)(tz),
        {
          positions: Xz,
          normals: uz,
          uvs: Nz,
          indices: bz,
          named: wz = {}
        } = tz,
        Dz = new vz.b;
      Dz.positions = Xz, Dz.normals = null !== uz && void 0 !== uz ? uz : null, Dz.uvs = null !== Nz && void 0 !== Nz ? Nz : null, Dz.indices = bz;
      const gz = new Kz(Oz.b.RandomId(), sz, Dz, !1, Fz);
      for (const {
          kind: Oz,
          components: oz
        }
        of Wz.vertexAttributes) Oz in wz && Fz.setVerticesData(Oz, wz[Oz], !1, oz);
      return gz.link(Wz), Fz
    }

    function Nz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wz = new oz.b(zz, sz),
        {
          positions: Xz,
          normals: Oz,
          uvs: Uz,
          indices: Kz
        } = tz;
      return Object.assign(new vz.b, {
        positions: Xz,
        normals: Oz,
        uvs: Uz,
        indices: Kz
      }).applyToMesh(Wz, Fz), Wz
    }
  },
  40729: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => gz,
      d: () => oz,
      g: () => Oz,
      j: () => Uz
    });
    var Fz = sz(36652),
      Wz = sz(38126),
      Xz = sz(38119);

    function Oz(zz, tz, sz, Fz) {
      const Wz = Xz.t;
      tz.fill(0), zz.gravity.toArray(tz, Wz.gravity), zz.colorDead.toArray(tz, Wz.colorDead), sz[Wz.ramp] = zz.useRampGradients ? 1 : 0;
      const Oz = zz.getColorGradients(),
        oz = Nz(zz, Oz, "colour", Fz);
      sz[Wz.colorCount] = oz;
      for (let Xz = 0; Xz < oz; Xz++) {
        var vz;
        const zz = Oz[bz(Oz, Xz)];
        tz[Wz.colorPositions + Xz] = zz.gradient, zz.color1.toArray(tz, Wz.color1 + 4 * Xz), (null !== (vz = zz.color2) && void 0 !== vz ? vz : zz.color1).toArray(tz, Wz.color2 + 4 * Xz)
      }
      const Uz = zz.getVelocityGradients(),
        Kz = Nz(zz, Uz, "hb", Fz);
      sz[Wz.velocityCount] = Kz;
      for (let Xz = 0; Xz < Kz; Xz++) Bz(tz, Wz.hb + 4 * Xz, Uz[bz(Uz, Xz)]);
      const uz = zz.useRampGradients ? zz.getColorRemapGradients() : null,
        wz = Nz(zz, uz, "colour remap", Fz);
      sz[Wz.remapCount] = wz;
      for (let Xz = 0; Xz < wz; Xz++) Bz(tz, Wz.remap + 4 * Xz, uz[bz(uz, Xz)])
    }

    function oz() {
      return {
        key: [],
        texels: new Uint8Array(4 * Xz.k)
      }
    }
    const vz = [];

    function Uz(zz, tz) {
      return Kz(zz, vz), !Hz(vz, tz.key) && (tz.key.length = 0, tz.key.push(...vz), tz.key.length > 0 && function(zz, tz) {
        for (let sz = 0; sz < Xz.k; sz++) Wz.o.GetCurrentGradient(sz / Xz.k, zz, ((zz, tz, sz) => {
          Fz.Color3.LerpToRef(zz.color, tz.color, sz, uz)
        })), tz[4 * sz] = 255 * uz.r, tz[4 * sz + 1] = 255 * uz.g, tz[4 * sz + 2] = 255 * uz.b, tz[4 * sz + 3] = 255
      }(zz.getRampGradients(), tz.texels), !0)
    }

    function Kz(zz, tz) {
      tz.length = 0;
      const sz = zz.useRampGradients ? zz.getRampGradients() : null;
      if (null !== sz && void 0 !== sz && sz.length) {
        tz.push(sz.length);
        for (const zz of sz) tz.push(zz.gradient, zz.color.r, zz.color.g, zz.color.b)
      }
    }
    const uz = new Fz.Color3;

    function Nz(zz, tz, sz, Fz) {
      return tz ? tz.length > Xz.b ? (Fz(`particleStops:${sz}`, `GPU particles use the first 2 and last ${Xz.b-2} of more than ${Xz.b} ${sz} gradient stops (${zz.name})`), Xz.b) : tz.length : 0
    }

    function bz(zz, tz) {
      return tz < 2 || zz.length <= Xz.b ? tz : zz.length - Xz.b + tz
    }
    const wz = new Float32Array(Xz.m),
      Dz = new Uint32Array(wz.buffer);

    function gz(zz, tz, sz) {
      return Oz(zz, wz, Dz, sz), tz && Hz(Dz, tz) ? null : Dz.slice()
    }

    function Hz(zz, tz) {
      if (zz.length !== tz.length) return !1;
      for (let sz = 0; sz < zz.length; sz++)
        if (zz[sz] !== tz[sz]) return !1;
      return !0
    }

    function Bz(zz, tz, sz) {
      var Fz;
      zz[tz] = sz.gradient, zz[tz + 1] = sz.factor1, zz[tz + 2] = null !== (Fz = sz.factor2) && void 0 !== Fz ? Fz : sz.factor1
    }
  },
  40726: (zz, tz, sz) => {
    function Fz() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const tz = new Set;
      return (sz, Fz) => {
        tz.has(sz) || (tz.add(sz), console.warn(zz + Fz))
      }
    }
    sz.d(tz, {
      c: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);