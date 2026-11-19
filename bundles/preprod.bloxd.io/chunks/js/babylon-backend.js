export const id = 0;
export const ids = [0];
export const modules = {
  40318: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      CapeMaterialPlugin: () => sz,
      HueTintMaterialPlugin: () => rz,
      LifeformMaterialPlugin: () => oz,
      OverlayMaterialPlugin: () => Nz
    });
    var Ez = bz(40326),
      nz = bz(37435);
    class iz extends((0, Ez.f)(nz.c)) {}(0, Ez.i)(nz.c, iz);
    var lz = bz(36604);
    class Mz extends((0, Ez.f)(lz.e)) {}(0, Ez.i)(lz.e, Mz);
    var tz = bz(37295);
    class Hz extends((0, Ez.f)(tz.e)) {}(0, Ez.i)(tz.e, Hz);
    var Oz = bz(36878),
      pz = bz(39425),
      dz = bz(36870);
    class Fz extends((0, Ez.f)(dz.e)) {
      constructor(zz, uz, bz) {
        super(zz, uz, bz), (0, Oz.k)(zz)
      }
      dispose(zz) {
        (0, Oz.n)(this._material), super.dispose(zz)
      }
    }(0, Ez.i)(dz.e, Fz), (0, dz.i)({
      disableUnusedSpecularTerm: Ez.d,
      isLightingDisabled: zz => zz instanceof pz.StandardMaterial && zz.disableLighting
    });
    var Zz = bz(38075);
    class Rz extends((0, Ez.f)(Zz.e)) {}(0, Ez.i)(Zz.e, Rz);
    var Kz = bz(38162),
      wz = bz(36724),
      Xz = bz(37548),
      fz = bz(36661);
    class sz extends((0, Ez.f)(Kz.c)) {}(0, Ez.i)(Kz.c, sz);
    class rz extends((0, Ez.f)(wz.d)) {}(0, Ez.i)(wz.d, rz);
    class oz extends((0, Ez.f)(Xz.p)) {}(0, Ez.i)(Xz.p, oz);
    class Nz extends((0, Ez.f)(fz.e)) {}(0, Ez.i)(fz.e, Nz)
  },
  40766: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      addBabylonLights: () => wu,
      default: () => su
    });
    var Ez = bz(40770),
      nz = (bz(39157), bz(40310), bz(39642), bz(40782)),
      iz = bz(38998),
      lz = bz(36709),
      Mz = bz(36514),
      tz = bz(40792),
      Hz = bz(40798),
      Oz = bz(36654),
      pz = (bz(40326), bz(40809)),
      dz = bz(40803),
      Fz = bz(38101),
      Zz = bz(40812),
      Rz = bz(39033),
      Kz = bz(38083);
    const wz = "gpuParticles",
      Xz = Kz.y,
      fz = zz => zz / 4,
      sz = zz => `gpuParticleSystem[${zz>>2}].${"xyzw"[3&zz]}`,
      rz = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Kz.e}\n#define COLOR_POSITIONS ${fz(Xz.colorPositions)}\n#define COLOR1 ${fz(Xz.color1)}\n#define COLOR2 ${fz(Xz.color2)}\n#define VELOCITY ${fz(Xz.ht)}\n#define REMAP ${fz(Xz.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Kz.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${sz(Xz.gravity)}, ${sz(Xz.gravity+1)}, ${sz(Xz.gravity+2)}); }\nint colorCount() { return int(${sz(Xz.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${fz(Xz.colorDead)}]; }\nint velocityCount() { return int(${sz(Xz.velocityCount)}); }\nint remapCount() { return int(${sz(Xz.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Rz.e.ShadersStore[`${wz}VertexShader`] = rz, Rz.e.ShadersStore[`${wz}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const oz = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      Nz = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var vz = bz(38079),
      xz = bz(40820);
    class Jz extends vz.d {
      constructor(zz, uz, bz, Ez) {
        super(zz, uz, bz), this.renderer = bz, this.tK = Ez, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(Kz.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, xz.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (zz, uz) => {
          const {
            engine: bz,
            perRow: Ez
          } = this, nz = bz._gl;
          bz._bindTextureDirectly(nz.TEXTURE_2D, this.records, !0), bz._unpackFlipY(!1);
          const iz = this.ring.recordBits;
          for (let lz = zz; lz < uz;) {
            const zz = Math.floor(lz / Ez),
              bz = Math.min(uz, (zz + 1) * Ez);
            nz.texSubImage2D(nz.TEXTURE_2D, 0, lz % Ez * 4, zz, 4 * (bz - lz), 1, nz.RGBA_INTEGER, nz.UNSIGNED_INT, iz, lz * Kz.i), lz = bz
          }
          bz._bindTextureDirectly(nz.TEXTURE_2D, null)
        }, this.id = zz;
        const nz = Ez.uR();
        this.engine = nz;
        const iz = Math.max(1, uz);
        this.perRow = Math.min(iz, 256), this.records = nz.createRawTexture(null, 4 * this.perRow, Math.ceil(iz / this.perRow), pz.c.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, pz.c.TEXTURE_NEAREST_SAMPLINGMODE, null, pz.c.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.tK.getAnimationRatio() || 1;
        const uz = this.tK.getFrameId();
        if (uz === this.animatedFrame) return !1;
        const bz = super.animate(zz);
        return bz && (this.animatedFrame = uz, this.ring.takeUploads(this.uploadSlots)), bz
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(zz) {
        (0, xz.f)(this, this.uniforms, this.uniformBits, zz);
        for (const bz of Kz.u) this.uniforms[bz] = this.uniformBits[bz];
        var uz;
        (0, xz.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (uz = this.ramp) || void 0 === uz || uz.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = dz.b.CreateRGBATexture(this.rampTexels.texels, Kz.m, 1, this.tK, !1, !1, pz.c.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var zz;
        this.records.dispose(), null === (zz = this.ramp) || void 0 === zz || zz.dispose(), this.ramp = null
      }
    }
    class Az {
      constructor(zz) {
        this.tK = zz, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, Zz.b)(), this.engine = zz.uR(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = dz.b.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, zz, !1, !1, pz.c.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      cL(zz, uz) {
        const bz = 256 * this.engine.getCaps().maxTextureSize;
        uz > bz && this.warnOnce(`capacity:${zz}`, `particle system ${zz} holds ${bz} particles, not ${uz}: its records texture's limit`);
        const Ez = new Jz(zz, Math.min(uz, bz), this, this.tK);
        return this.tK.addParticleSystem(Ez), Ez
      }
      canDraw(zz) {
        var uz, bz;
        if (this.failed || null === (uz = zz.texture) || void 0 === uz || null === (bz = uz.mirror) || void 0 === bz || !bz.isReady()) return !1;
        for (const Ez of (0, Fz.k)(zz.blendMode))
          if (!this.effectFor(Ez).isReady()) return !1;
        return !0
      }
      disposeStopped(zz) {
        this.tK._toBeDisposed.push(zz)
      }
      remove(zz) {
        this.tK.removeParticleSystem(zz), zz.releaseGl()
      }
      render(zz) {
        var uz;
        if (!zz.isReady() || !zz.hasLiveParticles()) return 0;
        const {
          engine: bz,
          tK: Ez,
          frame: nz
        } = this;
        zz.prepareDraw(this.warnOnce), zz.drawOffset(nz, 0), nz[3] = zz.drawTime();
        const iz = zz.ring.drawStart(),
          lz = zz.ring.drawCount(),
          Mz = null !== (uz = zz.ramp) && void 0 !== uz ? uz : this.whiteRamp;
        bz.setState(!1);
        for (const tz of (0, Fz.k)(zz.blendMode)) {
          const uz = this.effectFor(tz);
          bz.enableEffect(uz), uz.setTexture("gpuParticleTexture", zz.texture.mirror), uz.setTexture("gpuParticleRampTexture", Mz), uz._bindTexture("gpuParticleRecords", zz.records), uz.setMatrix("gpuParticleView", Ez.getViewMatrix()), uz.setMatrix("gpuParticleProjection", Ez.getProjectionMatrix()), uz.setFloatArray4("gpuParticleSystem", zz.uniforms), uz.setFloat4("gpuParticleFrame", nz[0], nz[1], nz[2], nz[3]), uz.setFloat2("gpuParticleRange", iz, lz), uz.setFloat("gpuParticleRamp", zz.uniforms[Kz.y.ramp]), bz.bindBuffers(this.vertexBuffers, null, uz), bz.setAlphaMode((0, Fz.i)(tz)), bz.drawArraysType(pz.c.MATERIAL_TriangleStripDrawMode, 0, 4, lz), uz._bindTexture("gpuParticleRecords", null)
        }
        return bz.setAlphaMode(pz.c.ALPHA_DISABLE), lz
      }
      awaitLink(zz) {
        const uz = zz.getPipelineContext(),
          bz = this.engine._gl;
        !this.failed && bz && (!uz || uz.isParallelCompiled && !uz.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : uz.isParallelCompiled && uz.program && (bz.getProgramParameter(uz.program, bz.LINK_STATUS) || this.fail(bz.getProgramInfoLog(uz.program) || "a program did not link")))
      }
      effectFor(zz) {
        return zz === Fz.c ? this.multiplyEffect : this.effect
      }
      createEffect(zz) {
        return this.engine.createEffect(wz, [], oz, Nz, zz, void 0, void 0, ((zz, uz) => {
          this.fail(uz)
        }))
      }
      fail(zz) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${zz}`);
          for (const zz of this.tK.yN.slice()) zz instanceof Jz && zz.disposeOnStop && zz.dispose()
        }
      }
    }
    var Tz = bz(39365),
      Lz = bz(40308),
      Pz = bz(39135),
      Gz = bz(39323),
      az = bz(39314),
      Vz = bz(39250),
      mz = bz(40373),
      qz = bz(37068),
      hz = bz(40827),
      Uz = bz(40835),
      cz = bz(40841),
      gz = bz(39267),
      Sz = bz(36950),
      yz = bz(36942),
      Dz = bz(39483),
      Qz = bz(37027),
      Wz = bz(36970);

    function ez(zz) {
      if (zz.visibility < 1 || !zz.isVisible || !zz.isEnabled() || zz.metadata[Wz.f] || !zz.isReady()) return !0;
      const uz = zz.hN;
      if (!uz || 0 === uz.length) return !0;
      for (let bz = 0; bz < uz.length; bz++) {
        const Ez = uz[bz],
          nz = Ez.lR();
        if (!nz || !nz.isReadyForSubMesh(zz, Ez, !1)) return !0
      }
      return !1
    }
    class jz {
      constructor(zz, uz) {
        this.Gd = zz, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, uz.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      QF(zz) {
        var uz;
        const bz = this.armed;
        if (this.armed = !1, this.vis = null, !bz) return !1;
        this.culled = 0;
        const {
          Gd: Ez
        } = this, nz = null === (uz = Ez.mN) || void 0 === uz ? void 0 : uz.visibility;
        if (!nz || !zz || Ez.oR.NR) return !1;
        if (!(Ez.xd.Gbz[0] >= Qz.e)) return !1;
        const iz = zz.getProjectionMatrix().m;
        if (0 !== iz[15]) return !1;
        const lz = Ez.kd,
          Mz = zz.globalPosition,
          tz = this.eye;
        return tz[0] = Mz.x + lz[0], tz[1] = Mz.y + lz[1], tz[2] = Mz.z + lz[2], !!nz.eyeClear(tz[0], tz[1], tz[2], zz.minZ, iz, Ez.xd) && (this.vis = nz, this.passable.clear(), this.count = 0, !0)
      }
      see(zz, uz) {
        const bz = this.count++;
        if (bz === this.cellSlots.length) {
          const zz = new Int32Array(2 * bz);
          zz.set(this.cellSlots), this.cellSlots = zz
        }
        this.cellSlots[bz] = uz, this.meshes[bz] = zz
      }
      seeThrough(zz) {
        this.passable.add(zz)
      }
      finish(zz, uz) {
        const {
          vis: bz,
          eye: Ez,
          meshes: nz,
          count: iz,
          cellSlots: lz
        } = this, {
          xd: Mz
        } = this.Gd, [tz, Hz] = Mz.Gbz, Oz = null !== bz && bz.update(Ez[0], Ez[1], Ez[2], Mz.B5, tz, Hz, this.passable);
        let pz = 0;
        for (let dz = 0; dz < iz; dz++) {
          const Ez = nz[dz];
          if (Oz) {
            const zz = 3 * lz[dz];
            if (zz >= 0 && !bz.isDrawn(uz[zz], uz[zz + 1], uz[zz + 2])) {
              pz++;
              continue
            }
          }
          gz.e.prototype.push.call(zz, Ez)
        }
        nz.fill(null, 0, iz), this.count = 0, this.vis = null, this.culled = pz
      }
    }
    var Iz = bz(37015),
      Bz = bz(36961),
      Cz = bz(39451),
      Yz = bz(40847),
      kz = bz(39459),
      zu = bz(39384);
    let uu = 1;
    const bu = new WeakSet;

    function Eu() {
      return uu
    }

    function nu() {
      uu = uu >= 1073741823 ? 1 : uu + 1
    }

    function iu(zz) {
      const uz = zz.metadata;
      if (!uz || !0 !== uz[yz.n]) return;
      const bz = uz[yz.s],
        Ez = null === bz || void 0 === bz ? void 0 : bz._noaStamps;
      if (!bz || !Ez) return;
      const nz = bz.entries.indexOf(zz);
      nz >= 0 && (Ez[nz] = 0)
    }

    function lu(zz) {
      const uz = zz.hN;
      for (let bz = 0; bz < uz.length; bz++) {
        const zz = uz[bz].lR();
        if (zz && !zz.isFrozen) return !1
      }
      for (let bz = 0; bz < uz.length; bz++) {
        const zz = uz[bz].lR();
        zz && bu.add(zz)
      }
      return !0
    }
    let Mu = !1;
    const tu = new WeakSet;

    function Hu(zz, uz) {
      const bz = zz[uz];
      if ("function" !== typeof bz) throw new Error(`terrainDrawState: Babylon has no ${uz} to hook`);
      return bz
    }

    function Ou(zz, uz, bz, Ez, nz) {
      const iz = bz.xd.B5,
        lz = new Map;
      let Mz = 0;
      const tz = new jz(bz, zz),
        Hz = new Iz.e(iz, zz.uR());
      ! function(zz) {
        if (tu.has(zz) || (tu.add(zz), zz.onContextLostObservable.add(nu), zz.onContextRestoredObservable.add(nu)), Mu) return;
        Mu = !0;
        const uz = Yz.d.prototype,
          bz = Hu(uz, "_markSubMeshesAsDirty");
        Object.assign(uz, {
          _markSubMeshesAsDirty(zz) {
            bz.call(this, zz), iu(this)
          }
        });
        const Ez = Hu(zu.c.prototype, "_syncParentEnabledState");
        Object.assign(zu.c.prototype, {
          _syncParentEnabledState() {
            Ez.call(this), iu(this)
          }
        });
        const nz = Hu(kz.e.prototype, "resetDrawCache");
        kz.e.prototype.resetDrawCache = function(zz, uz) {
          nz.call(this, zz, uz), iu(this.getMesh())
        };
        const iz = Cz.c.prototype,
          lz = Hu(iz, "markDirty");
        iz.markDirty = function(zz) {
          lz.call(this, zz), bu.has(this) && nu()
        };
        const Mz = Hu(iz, "_markAllSubMeshesAsDirty");
        Object.assign(iz, {
          _markAllSubMeshesAsDirty(zz) {
            Mz.call(this, zz), bu.has(this) && nu()
          }
        })
      }(zz.uR());
      let Oz = new Float64Array(384),
        pz = new Int32Array(64),
        dz = new Uint8Array(64),
        Fz = new Float64Array(64),
        Zz = new Int32Array(192),
        Rz = 0;
      const Kz = [],
        wz = new Float64Array(24),
        Xz = () => {
          const zz = Kz.pop();
          return void 0 !== zz ? (pz[zz] = 0, zz) : (Rz === pz.length && (Oz = pu(Oz, new Float64Array(2 * Oz.length)), pz = pu(pz, new Int32Array(2 * pz.length)), dz = pu(dz, new Uint8Array(2 * dz.length)), Fz = pu(Fz, new Float64Array(2 * Fz.length)), Zz = pu(Zz, new Int32Array(2 * Zz.length))), Rz++)
        },
        fz = zz => {
          const uz = 6 * zz._noaSlot,
            bz = zz.cbz[0],
            Ez = zz.cbz[1];
          Oz[uz] = bz.x, Oz[uz + 1] = bz.y, Oz[uz + 2] = bz.z, Oz[uz + 3] = Ez.x, Oz[uz + 4] = Ez.y, Oz[uz + 5] = Ez.z
        },
        sz = (zz, uz, bz) => {
          if (!bz) return tz.see(zz, -1), !1;
          const Ez = ez(zz);
          return Ez && tz.seeThrough(Fz[uz]), tz.see(zz, uz), !Ez
        };
      let rz = -1;
      return zz.getActiveMeshCandidates = () => {
        const bz = zz.frustumPlanes,
          Ez = uz._selectionContent;
        Ez.reset(), (bz => {
          const Ez = zz.frustumPlanes;
          Mz = Mz + 1 | 0 || 1;
          const nz = uz.blocks,
            iz = tz.QF(zz.activeCamera),
            lz = iz && !0;
          if (lz) {
            const uz = zz.uR().currentRenderPassId;
            uz !== rz && (rz = uz, nu())
          }
          const Hz = Eu(),
            Fz = lz && !1;
          nz.length > 0 && function(zz, uz) {
            for (let bz = 0; bz < 6; bz++) {
              const Ez = zz[bz],
                nz = Ez.normal;
              uz[4 * bz] = nz.x, uz[4 * bz + 1] = nz.y, uz[4 * bz + 2] = nz.z, uz[4 * bz + 3] = Ez.d
            }
          }(Ez, wz);
          const Rz = Oz,
            Kz = pz,
            Xz = dz;
          for (let zz = 0; zz < nz.length; zz++) {
            const uz = nz[zz];
            if (!Dz.e.IsInFrustum(uz.cbz, Ez)) continue;
            const Oz = uz.entries;
            {
              const zz = uz._noaSlots,
                Ez = uz._noaStamps,
                nz = uz._noaTerrain;
              for (let uz = 0; uz < Oz.length; uz++) {
                const pz = zz[uz];
                if (Kz[pz] !== Mz && (Kz[pz] = Mz, Xz[pz] = du(Rz, 6 * pz, wz) ? 1 : 0), 0 === Xz[pz]) continue;
                const dz = Oz[uz];
                if (lz && Ez[uz] === Hz) Fz && 1 === nz[uz] && ez(dz) && 0, tz.see(dz, 1 === nz[uz] ? pz : -1);
                else if (lz) {
                  Ez[uz] = Hz;
                  const zz = !0 === dz.metadata[Bz.k];
                  nz[uz] = zz ? 1 : 0;
                  const bz = sz(dz, pz, zz);
                  !zz || bz && lu(dz) || (Ez[uz] = 0)
                } else iz ? sz(dz, pz, !0 === dz.metadata[Bz.k]) : gz.e.prototype.push.call(bz, dz)
              }
              continue
            }
          }
          iz && tz.finish(bz, Zz)
        })(Ez), Hz.apply(Ez, zz.activeCamera);
        const iz = uz.Ubz;
        for (let zz = 0; zz < iz.length; zz++) {
          const uz = iz[zz];
          uz.isEnabled() && gz.e.prototype.push.call(Ez, uz)
        }
        return nz(Ez, bz), Ez
      }, {
        gbz: () => tz.culled,
        vbz: (zz, uz) => {
          const nz = Math.floor(uz[0] / iz),
            Mz = Math.floor(uz[1] / iz),
            tz = Math.floor(uz[2] / iz),
            Hz = `${nz}|${Mz}|${tz}`;
          let Oz = lz.get(Hz);
          if (!Oz) {
            const zz = [0, 0, 0];
            bz.rzz([nz * iz - 1, Mz * iz - 1, tz * iz - 1], null, zz), Oz = Object.assign(Ez(zz, iz + 2), {
              Sbz: Hz,
              ybz: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: Xz()
            }), fz(Oz), Fz[Oz._noaSlot] = (0, Sz.h)(nz, Mz, tz), Zz[3 * Oz._noaSlot] = nz, Zz[3 * Oz._noaSlot + 1] = Mz, Zz[3 * Oz._noaSlot + 2] = tz, lz.set(Hz, Oz)
          }
          Oz.ybz++, zz.metadata[yz.w] = Oz
        },
        lL: zz => {
          const uz = zz.metadata[yz.w];
          uz && (uz.ybz--, uz.ybz <= 0 && (lz.delete(uz.Sbz), Kz.push(uz._noaSlot)), zz.metadata[yz.w] = null)
        },
        hbz: (zz, uz) => {
          const bz = zz,
            Ez = uz.metadata[yz.w];
          (bz._noaSlots ??= []).push(Ez._noaSlot), (bz._noaStamps ??= []).push(0), (bz._noaTerrain ??= []).push(0), bz.entries.push(uz)
        },
        removeEntry: (zz, uz) => {
          const bz = zz,
            Ez = bz.entries,
            nz = Ez.indexOf(uz);
          if (nz < 0) return;
          const iz = bz._noaSlots,
            lz = bz._noaStamps,
            Mz = bz._noaTerrain,
            tz = Ez.length - 1;
          Ez[nz] = Ez[tz], iz[nz] = iz[tz], lz[nz] = lz[tz], Mz[nz] = Mz[tz], Ez.pop(), iz.pop(), lz.pop(), Mz.pop()
        },
        L_: zz => {
          for (const uz of lz.values()) {
            uz.Lbz.Qbz(zz), uz.Tbz.Qbz(zz);
            for (const bz of uz.cbz) bz.Qbz(zz);
            fz(uz)
          }
        }
      }
    }

    function pu(zz, uz) {
      return uz.set(zz), uz
    }

    function du(zz, uz, bz) {
      const Ez = zz[uz],
        nz = zz[uz + 1],
        iz = zz[uz + 2],
        lz = zz[uz + 3],
        Mz = zz[uz + 4],
        tz = zz[uz + 5];
      for (let Hz = 0; Hz < 24; Hz += 4) {
        const zz = bz[Hz],
          uz = bz[Hz + 1],
          Oz = bz[Hz + 2];
        if (!(zz * (zz >= 0 ? lz : Ez) + uz * (uz >= 0 ? Mz : nz) + Oz * (Oz >= 0 ? tz : iz) + bz[Hz + 3] >= 0)) return !1
      }
      return !0
    }
    var Fu = bz(37245);
    class Zu {
      constructor(zz, uz) {
        var bz = zz.tK;
        bz.Hbz(new cz.e(bz));
        var Ez = new hz.c(tz);
        bz.ebz = Ez, Ez.blocks = [];
        var nz, iz = {},
          lz = [];
        this.textPlanes = lz, this.gbz = () => nz.gbz(), this.L_ = zz => {
          Oz(Ez, zz), nz.L_(zz)
        }, this.vbz = (uz, bz, Mz) => {
          if (!uz.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!uz.metadata[yz.s] && !uz.metadata[yz.m]) {
            if (!bz) {
              var tz = Ez.Ubz;
              if (uz.metadata[yz.C] && !uz.parent) {
                tz = lz;
                var Oz = uz.lG().Ibz;
                uz.metadata[yz.G] = Oz.center.length() + Oz.radius, uz.bR = !0
              }
              return tz.push(uz), uz.metadata[yz.h] = tz, void(uz.metadata[yz.m] = !0)
            }
            var dz = Math.floor(Mz[0] / Hz),
              Fz = Math.floor(Mz[1] / Hz),
              Zz = Math.floor(Mz[2] / Hz),
              Rz = dz + "|" + Fz + "|" + Zz,
              Kz = iz[Rz];
            if (!Kz) {
              var wz = [dz * Hz, Fz * Hz, Zz * Hz],
                Xz = [0, 0, 0];
              zz.Gd.rzz(wz, null, Xz), Kz = pz(Xz, Hz), Ez.blocks.push(Kz), iz[Rz] = Kz, Kz.Sbz = Rz
            }
            nz.vbz(uz, Mz), nz.hbz(Kz, uz), Kz.ybz = (Kz.ybz || 0) + 1, uz.metadata[yz.s] = Kz, uz.metadata[yz.n] = !0, uz.bR = !0
          }
        }, this.lL = zz => {
          if (zz.metadata) {
            zz.metadata[yz.m] && ((0, Sz.l)(zz.metadata[yz.h], zz), zz.metadata[yz.m] = !1), zz.metadata[yz.h] === lz && (zz.bR = !1), zz.metadata[yz.h] = void 0, zz.metadata[yz.G] = void 0;
            var uz = zz.metadata[yz.s];
            uz && uz.entries && (zz.metadata[yz.n] && nz.removeEntry(uz, zz), uz.ybz--, uz.ybz <= 0 && (delete iz[uz.Sbz], (0, Sz.l)(Ez.blocks, uz))), nz.lL(zz), zz.metadata[yz.s] = null, zz.metadata[yz.n] = !1
          }
        }, this.b_ = function(zz) {
          let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (zz.metadata[yz.s]) {
            if (zz.metadata[yz.n] === uz) return;
            var bz = zz.metadata[yz.s];
            bz && bz.entries && (uz ? nz.hbz(bz, zz) : nz.removeEntry(bz, zz)), zz.metadata[yz.n] = uz
          } else {
            if (zz.metadata[yz.m] === uz) return;
            var iz = zz.metadata[yz.h] || Ez.Ubz;
            uz ? iz.push(zz) : (0, Sz.l)(iz, zz), zz.metadata[yz.m] = uz
          }
        };
        var tz = () => {},
          Hz = uz * zz.Gd.xd.B5,
          Oz = (zz, uz) => {
            zz.blocks.forEach((zz => {
              zz.Lbz.Qbz(uz), zz.Tbz.Qbz(uz), zz.cbz.forEach((zz => zz.Qbz(uz))), zz.blocks && Oz(zz, uz)
            }))
          },
          pz = (zz, uz) => {
            var bz = new Mz.ER(zz[0], zz[1], zz[2]),
              Ez = new Mz.ER(zz[0] + uz, zz[1] + uz, zz[2] + uz);
            return new Uz.e(bz, Ez, void 0, void 0, void 0, tz)
          };
        nz = Ou(bz, Ez, zz.Gd, pz, ((zz, uz) => {
          for (var bz = 0; bz < lz.length; bz++) {
            var Ez = lz[bz];
            Ez.isEnabled(!1) && ((0, Fu.b)(Ez, uz) && gz.e.prototype.push.call(zz, Ez))
          }
        }))
      }
    }

    function Ru(zz) {
      const {
        holderPosition: uz,
        holderRotation: bz,
        MI: Ez,
        fov: nz,
        near: iz,
        far: lz
      } = zz.model.bI, Mz = zz.bEz;
      Mz.position.P_(uz[0], uz[1], uz[2]), Mz.rotation.P_(bz[0], bz[1], bz[2]);
      const tz = zz.camera;
      tz.position.P_(Ez[0], Ez[1], Ez[2]), tz.fov = nz, tz.minZ = iz, tz.maxZ = lz
    }

    function Ku(zz) {
      const uz = zz.uR(),
        bz = uz,
        Ez = bz._gl;
      if (!Ez || bz.PR < 2 || uz.fbz || Ez.getParameter(Ez.DEPTH_BITS) < 24) return !1;
      const nz = zz._renderingManager,
        iz = nz.getRenderingGroup(-1),
        lz = nz.getRenderingGroup(0),
        Mz = Gz.c.prototype.render;
      return iz.render = function(zz, uz, bz, Ez, nz, iz, tz, Hz, Oz) {
        (zz || lz._empty) && Mz.call(this, zz, uz, bz, Ez, nz, iz, tz, Hz, Oz)
      }, lz.render = function(zz, bz, nz, lz) {
        let tz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Hz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          dz = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Fz = arguments.length > 8 ? arguments[8] : void 0;
        zz ? Mz.call(this, zz, bz, nz, lz, tz, Hz, Oz, dz, Fz) : (uz.setAlphaMode(pz.c.ALPHA_DISABLE), Mz.call(this, null, !1, !1, lz, tz, Hz, Oz, !1), iz._empty || (Ez.depthRange(1, 1), Mz.call(iz, null, bz, nz, lz, tz, Hz, Oz, dz, Fz), Ez.depthRange(0, 1)), Mz.call(this, null, bz, nz, lz, !1, !1, !1, dz, Fz))
      }, !0
    }

    function wu(zz, uz) {
      return [uz, qz.f].map(((uz, bz) => {
        const Ez = new nz.e("light", Mz.ER.FromArray(uz), zz);
        return Ez.diffuse = lz.Color3.FromArray([1, 1, 1]), Ez.specular = lz.Color3.FromArray([1, 1, 1]), Ez.intensity = qz.e[bz], Ez
      }))
    }
    class Xu extends Hz.c {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(zz) {
        var uz;
        this.heldTexture = zz, this.particleTexture = null !== (uz = null === zz || void 0 === zz ? void 0 : zz.mirror) && void 0 !== uz ? uz : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let zz = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        zz && (this.particleTexture = null, (0, Oz.z)(this.heldTexture), this.heldTexture = null), super.dispose(zz, uz, bz)
      }
    }
    const fu = Ez.c.Zero();
    const su = {
      MEz: function(zz, uz) {
        return new iz.c(zz, uz.muz, {
          preserveDrawingBuffer: uz.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      iEz: function(zz, uz) {
        ! function(zz, uz, bz) {
          const Ez = new Vz.e(zz.engine);
          zz.tK = Ez, Ez.detachControl(), Ez.autoClear = !1, az.e.MIN_RENDERINGGROUPS = -1;
          for (let iz = az.e.MIN_RENDERINGGROUPS; iz <= 1; iz++) Ez.setRenderingOrder(iz, Gz.c.PainterSortCompare, Gz.c.PainterSortCompare, Gz.c.PainterSortCompare);
          Ez.setRenderingAutoClearDepthStencil(0, !1), Pz.d.Enabled = !1, zz.kbz = new Zu(zz, Math.round(uz.zEz)), zz.bEz = new Lz.e("camHolder", Ez), zz.camera = new Tz.d("camera", new Mz.ER(0, 0, 0), Ez), zz.camera.parent = zz.bEz, Ru(zz), (0, qz.i)(zz, ((zz, uz, bz) => (0, mz.i)(uz, bz, zz.tK))), Ez.clearColor = lz.d.FromArray(uz.clearColor), Ez.ambientColor = lz.Color3.FromArray(uz.ambientColor);
          const nz = bz(Ez, uz.nEz);
          Ez.onNewLightAddedObservable.add((zz => {
            nz.some((uz => uz === zz)) || console.error(`Light "${zz.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Ez.skipPointerMovePicking = !0
        }(zz, uz, wu), Ku(zz.tK)
      },
      uEz: Ru,
      setBabylonFog: function(zz, uz, bz, Ez) {
        const nz = zz.tK;
        nz.fogMode = 3, nz.fogStart = uz, nz.fogEnd = bz, nz.fogColor.set(Ez[0], Ez[1], Ez[2])
      },
      tEz: function(zz, uz, bz) {
        return zz.engine.PR >= 2 && (zz.HEz || (zz.HEz = new Az(zz.tK)), !zz.HEz.failed) ? zz.HEz.cL(uz, bz) : new Xu(uz, bz, zz.tK)
      },
      pEz: function(zz, uz) {
        zz.tK.yN.forEach((bz => {
          if (bz instanceof Jz) return void bz.L_(uz, zz.Gd.kd);
          const Ez = bz;
          if (Ez.emitter.getConnectedParticleSystems)
            for (const zz of Ez._particles) zz.position.set(zz.position.x - uz[0], zz.position.y - uz[1], zz.position.z - uz[2]);
          else {
            if (!Ez.worldOffset) throw new Error("Particle system has no world offset");
            Ez.worldOffset.x = -zz.Gd.kd[0], Ez.worldOffset.y = -zz.Gd.kd[1], Ez.worldOffset.z = -zz.Gd.kd[2]
          }
        }))
      },
      linesFromArrays: function(zz, uz, bz) {
        const Ez = new tz.d(uz, zz.tK, null, void 0, void 0, !1);
        return (0, mz.e)(uz, bz, zz.tK, Ez), Ez
      },
      HK: iu,
      OEz: function(zz, uz) {
        return fu.origin.euz(uz.origin), fu.direction.euz(uz.direction), fu.length = uz.length, fu.epsilon = uz.epsilon, fu.OEz(zz, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40326: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => gz,
      f: () => Xz,
      i: () => ez
    });
    var Ez = bz(39425),
      nz = bz(40334),
      iz = bz(40379),
      lz = bz(40341),
      Mz = bz(37276),
      tz = bz(37282),
      Hz = bz(37287),
      Oz = bz(37290),
      pz = bz(36648),
      dz = bz(36654),
      Fz = bz(40350),
      Zz = bz(36633),
      Rz = bz(36636),
      Kz = bz(36619);

    function wz(zz, uz) {
      return Object.assign((function(zz, bz, Ez, nz) {
        return uz(this.featureState, zz, bz, Ez, nz)
      }), {
        TZ: zz
      })
    }

    function Xz(zz) {
      const uz = class extends Fz.d {
          constructor(uz, bz) {
            const Ez = (0, Rz.W)(uz),
              nz = Ez && (0, Rz.u)(Ez, zz.name);
            for (var iz = arguments.length, lz = new Array(iz > 2 ? iz - 2 : 0), Mz = 2; Mz < iz; Mz++) lz[Mz - 2] = arguments[Mz];
            super(uz, zz.name, zz.priority, nz ? nz.defines : zz.defines(...lz), !1), this.featureState = void 0, this.featureState = bz, this._pluginManager._addPlugin(this), this._enable(!0), (0, Rz.v)(this._material, zz, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return zz.className
          }
          isCompatible(zz) {
            return zz === Kz.c.GLSL || zz === Kz.c.WGSL
          }
        },
        bz = (0, Zz.j)(zz);
      for (const [Ez, nz] of Object.entries(Zz.e)) {
        const iz = zz[Ez];
        if (iz) {
          const zz = bz[Ez];
          Object.defineProperty(uz.prototype, nz, {
            value: wz(iz, zz),
            writable: !0,
            configurable: !0
          })
        }
      }
      return uz
    }
    class fz extends(Xz(Mz.d)) {}
    var sz = bz(38998),
      rz = bz(40354);
    const oz = new WeakMap;

    function Nz(zz, uz, bz) {
      let Ez = oz.get(bz);
      Ez || (Ez = new Map, oz.set(bz, Ez));
      const {
        url: nz
      } = zz;
      let iz = Ez.get(nz);
      return iz || (iz = async function(zz, uz, bz) {
        const {
          width: Ez,
          height: nz
        } = zz.getSize(), iz = Math.round(nz / Ez), Mz = uz && uz.byteLength === Ez * Ez * iz * 4 ? uz : zz._readPixelsSync();
        return new rz.c(Mz, Ez, Ez, iz, sz.c.TEXTUREFORMAT_RGBA, bz, !0, !1, lz.e.NEAREST_NEAREST_MIPLINEAR)
      }(zz, uz, bz), Ez.set(nz, iz), iz.catch((() => {
        Ez.delete(nz)
      }))), iz
    }
    var vz = bz(37292);
    class xz extends(Xz(tz.j)) {
      constructor(zz, uz) {
        super(zz, uz), uz.textures.forEach(((zz, uz) => {
          zz.mirror.onLoadObservable.add((zz => {
            this.setTextureArrayData(zz, uz).catch((zz => {
              console.error(`Failed to build texture array for atlas ${uz}`, zz)
            }))
          }))
        })), (0, vz.i)(uz, zz.shaderLanguage)
      }
      async setTextureArrayData(zz, uz) {
        var bz, Ez;
        const nz = this.featureState,
          {
            width: iz,
            height: lz
          } = zz.getSize(),
          Mz = nz.useWebGL2 ? await Nz(zz, null !== (bz = null === (Ez = nz.sources.pixels) || void 0 === Ez ? void 0 : Ez[uz]) && void 0 !== bz ? bz : null, this._material.XT()) : null;
        (0, vz.b)(this._material, nz, uz, Mz, iz, Math.round(lz / iz), this._material.shaderLanguage)
      }
    }
    var Jz = bz(40360),
      Az = bz(39474),
      Tz = bz(36514),
      Lz = bz(40369),
      Pz = bz(39596),
      Gz = bz(39459),
      az = bz(40308),
      Vz = bz(37046),
      mz = bz(40373);
    class qz extends Jz.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const hz = {
      Mesh: Lz.d,
      TransformNode: az.e,
      gZ: Jz.c,
      VertexBuffer: Jz.d,
      BoundingInfo: Az.e,
      ER: Tz.ER,
      ArenaBuffer: qz,
      SubMesh: Gz.e,
      VertexData: Pz.b,
      MirroredGeometry: mz.d,
      meshFromArrays: mz.e,
      plainMeshFromArrays: mz.i
    };
    (0, Vz.f)(hz);
    var Uz = bz(36878);
    class cz extends(Xz(Oz.i)) {
      constructor(zz, uz) {
        if (super(zz, uz), zz instanceof Ez.StandardMaterial && uz.dirLightCount > 0) {
          const uz = zz,
            bz = uz._blockDirtyMechanism;
          uz._blockDirtyMechanism = !0, zz.disableLighting = !0, uz._blockDirtyMechanism = bz;
          const Ez = (0, Rz.W)(zz);
          Ez && (Ez.disableLighting = !0, (0, Rz.U)(Ez))
        }(0, Uz.k)(zz)
      }
      dispose(zz) {
        (0, Uz.n)(this._material), super.dispose(zz)
      }
    }

    function gz(zz, uz) {
      if (!(uz instanceof Ez.StandardMaterial) || uz.specularTexture) return;
      const {
        r: bz,
        g: nz,
        b: iz
      } = uz.specularColor;
      0 === bz && 0 === nz && 0 === iz && (zz.SPECULARTERM = !1)
    }(0, Oz.g)({
      disableUnusedSpecularTerm: gz
    });
    var Sz = bz(36743),
      yz = bz(37058);
    const Dz = new RegExp(`^#define ${Hz.c}\\s*$`, "m");
    class Qz extends(Xz(Hz.i)) {
      constructor(zz, uz) {
        super(zz, uz), this.SZ = !1, uz.ditherOnlyWhileFading && (yz.f.add(zz), this.prewarmDitherTwins(zz))
      }
      prewarmDitherTwins(zz) {
        const uz = new WeakSet;
        zz.onEffectCreatedObservable.add((bz => {
          let {
            effect: Ez,
            subMesh: nz
          } = bz;
          if (this.featureState.prewarmingDither || uz.has(Ez)) return;
          uz.add(Ez);
          const iz = null === nz || void 0 === nz ? void 0 : nz.getMesh();
          iz && !Dz.test(Ez.defines) && zz.XT().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(iz) || uz.delete(Ez)
          }))
        }))
      }
      prewarmDither(zz) {
        if (this.SZ || zz.Uuz()) return !1;
        const uz = new Gz.e(0, 0, 0, 0, 0, zz, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(zz, uz)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== uz.effect
      }
      dispose(zz) {
        this.SZ = !0, super.dispose(zz)
      }
    }
    const Wz = new Map;

    function ez(zz, uz) {
      Wz.set(zz, uz)
    }
    ez(Mz.d, fz), ez(tz.j, xz), ez(Hz.i, Qz), ez(Oz.i, cz), (0, pz.c)({
      create: (zz, uz) => {
        const bz = new Ez.StandardMaterial(zz.name, uz);
        return (0, Sz.r)(zz, bz), bz.detailMap._pluginDefineNames
      },
      write: (zz, uz, bz) => {
        (0, Sz.X)(zz.mirror, uz, bz)
      },
      addFeature: (zz, uz, bz) => {
        const Ez = Wz.get(uz.feature);
        if (!Ez) throw new Error(`${uz.feature.name} has no plugin class (registerPluginClass)`);
        new Ez(zz.mirror, uz.state, ...bz)
      },
      texture: (zz, uz, bz) => {
        let {
          url: Ez,
          noMipmap: nz,
          invertY: iz,
          samplingMode: Mz,
          data: tz,
          sets: Hz
        } = bz;
        if (!tz) {
          const bz = new lz.e(Ez, uz, nz, iz, Mz);
          return Object.assign(bz, Hz), void(0, dz.H)(zz, bz)
        }
        const Oz = {},
          pz = new Promise(((zz, uz) => {
            Oz.onLoad = zz, Oz.onError = (zz, bz) => {
              uz(new Error(`${tz.context}: ${(null===bz||void 0===bz?void 0:bz.message)||zz||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: Fz,
            bytes: Zz,
            label: Rz
          } = tz,
          Kz = {
            noMipmap: nz,
            invertY: !1,
            samplingMode: Mz,
            ...Oz,
            mimeType: Fz,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          wz = new lz.e(null, uz, Kz);
        Sz.s.set(wz, pz), Object.assign(wz, Hz), wz.updateURL(Ez, Zz);
        const Xz = wz.getInternalTexture();
        Xz && (Xz.label = Rz), zz.uvSet = wz.coordinatesIndex, zz.matrix.set((0, Sz.N)(wz)), (0, dz.H)(zz, wz)
      },
      cube: (zz, uz, bz) => {
        let {
          rootUrl: Ez,
          files: iz,
          noMipmap: Mz,
          luminance: tz
        } = bz;
        const {
          samplingMode: Hz
        } = zz.sampler, Oz = Hz === (0, dz.w)(Mz) ? null : () => {
          (0, Sz.M)(pz, Hz)
        }, pz = new nz.e(Ez, uz, null, Mz, iz, Oz, null, (0, dz.t)(tz));
        pz.coordinatesMode = lz.e.SKYBOX_MODE, (0, dz.H)(zz, pz)
      },
      canvas: (zz, uz, bz) => {
        let {
          width: Ez,
          height: nz,
          mipmaps: Mz,
          samplingMode: tz,
          hasAlpha: Hz = !1,
          wrap: Oz = lz.e.CLAMP_ADDRESSMODE
        } = bz;
        const pz = new iz.b(uz, {
          width: Ez,
          height: nz
        }, zz, Mz, tz);
        pz.hasAlpha = Hz, pz.wrapU = Oz, pz.wrapV = Oz;
        const dz = (0, Sz.z)(pz);
        return (0, Sz.D)(dz, pz), dz
      }
    })
  },
  40373: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Oz,
      e: () => pz,
      i: () => dz
    });
    var Ez = bz(40360),
      nz = bz(39226),
      iz = bz(39474),
      lz = bz(39605),
      Mz = bz(40369),
      tz = bz(39596),
      Hz = bz(36930);
    class Oz extends lz.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (zz, uz) => {
          this.releaseUnlessInstanced(uz)
        }, this.onLinked = null
      }
      link(zz) {
        var uz;
        (0, Hz.n)(zz), this.model = zz, null === (uz = this.onLinked) || void 0 === uz || uz.call(this, zz)
      }
      relink() {
        this.release();
        const zz = [];
        for (const nz of Object.values(this._vertexBuffers))
          if (!nz.getIsInstanced()) {
            const {
              byteOffset: uz,
              byteStride: bz,
              type: Ez,
              normalized: iz
            } = nz;
            zz.push({
              kind: nz.getKind(),
              data: nz.getData(),
              offset: uz,
              stride: bz,
              components: nz.getSize(),
              glType: Ez,
              isNormalized: iz
            })
          } const uz = this._indices.length ? this._indices : null,
          {
            minimum: bz,
            maximum: Ez
          } = this.extend;
        this.link(new Hz.d(zz, uz, this.getTotalVertices(), new Float64Array(bz.obz()), new Float64Array(Ez.obz())))
      }
      copy(zz) {
        if (!this.model) return super.copy(zz);
        const uz = new Oz(zz, this.XT()),
          bz = this.Nbz(void 0, !0);
        bz && uz.setIndices(bz);
        let lz = !1;
        for (const iz in this._vertexBuffers) {
          const zz = this._vertexBuffers[iz],
            bz = zz.getData();
          if (!bz) continue;
          const Mz = zz.getSize(),
            {
              type: tz,
              byteOffset: Hz,
              byteStride: Oz,
              normalized: pz
            } = zz;
          lz ||= zz.isUpdatable();
          const dz = zz.getIsInstanced() ? (bz instanceof Array ? 4 * bz.length : bz.byteLength) / Oz : this.getTotalVertices(),
            Fz = (0, nz.u)(bz, Mz, tz, Hz, Oz, dz, !0),
            Zz = {
              updatable: zz.isUpdatable(),
              stride: Mz,
              type: tz,
              normalized: pz,
              takeBufferOwnership: !0,
              instanced: zz.getIsInstanced()
            };
          uz.setVerticesBuffer(new Ez.d(this.uR(), Fz, iz, Zz), dz)
        }
        return uz._updatable = lz, uz._boundingInfo = new iz.e(this.extend.minimum, this.extend.maximum), uz.relink(), uz
      }
      static mergeMeshes(zz, uz, bz, Ez, nz, iz) {
        const tz = zz[0].XT(),
          Hz = new Mz.d(zz[0].name + "_merged", tz),
          pz = new Oz(lz.b.RandomId(), tz, void 0, !1, Hz);
        try {
          if (!Mz.d.MergeMeshes(zz, uz, bz, Hz, nz, iz)) return Hz.dispose(), null
        } catch (dz) {
          throw Hz.dispose(), dz
        }
        return pz.relink(), Hz
      }
      removeVerticesData(zz) {
        this.releaseUnlessInstanced(zz), super.removeVerticesData(zz)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(zz) {
        var uz;
        zz && null !== (uz = this.getVertexBuffer(zz)) && void 0 !== uz && uz.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Hz.s)(this.model), this.model = null)
      }
    }

    function pz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Mz.d(zz, bz);
      const nz = (0, Hz.j)(uz),
        {
          positions: iz,
          normals: pz,
          uvs: dz,
          indices: Fz,
          named: Zz = {}
        } = uz,
        Rz = new tz.b;
      Rz.positions = iz, Rz.normals = null !== pz && void 0 !== pz ? pz : null, Rz.uvs = null !== dz && void 0 !== dz ? dz : null, Rz.indices = Fz;
      const Kz = new Oz(lz.b.RandomId(), bz, Rz, !1, Ez);
      for (const {
          kind: lz,
          components: Mz
        }
        of nz.vertexAttributes) lz in Zz && Ez.setVerticesData(lz, Zz[lz], !1, Mz);
      return Kz.link(nz), Ez
    }

    function dz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nz = new Mz.d(zz, bz),
        {
          positions: iz,
          normals: lz,
          uvs: Hz,
          indices: Oz
        } = uz;
      return Object.assign(new tz.b, {
        positions: iz,
        normals: lz,
        uvs: Hz,
        indices: Oz
      }).applyToMesh(nz, Ez), nz
    }
  },
  40820: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Kz,
      e: () => Mz,
      f: () => lz,
      j: () => Hz
    });
    var Ez = bz(36709),
      nz = bz(38089),
      iz = bz(38083);

    function lz(zz, uz, bz, Ez) {
      const nz = iz.y;
      uz.fill(0), zz.gravity.toArray(uz, nz.gravity), zz.colorDead.toArray(uz, nz.colorDead), bz[nz.ramp] = zz.useRampGradients ? 1 : 0;
      const lz = zz.getColorGradients(),
        Mz = dz(zz, lz, "colour", Ez);
      bz[nz.colorCount] = Mz;
      for (let iz = 0; iz < Mz; iz++) {
        var tz;
        const zz = lz[Fz(lz, iz)];
        uz[nz.colorPositions + iz] = zz.gradient, zz.color1.toArray(uz, nz.color1 + 4 * iz), (null !== (tz = zz.color2) && void 0 !== tz ? tz : zz.color1).toArray(uz, nz.color2 + 4 * iz)
      }
      const Hz = zz.getVelocityGradients(),
        Oz = dz(zz, Hz, "ht", Ez);
      bz[nz.velocityCount] = Oz;
      for (let iz = 0; iz < Oz; iz++) Xz(uz, nz.ht + 4 * iz, Hz[Fz(Hz, iz)]);
      const pz = zz.useRampGradients ? zz.getColorRemapGradients() : null,
        Zz = dz(zz, pz, "colour remap", Ez);
      bz[nz.remapCount] = Zz;
      for (let iz = 0; iz < Zz; iz++) Xz(uz, nz.remap + 4 * iz, pz[Fz(pz, iz)])
    }

    function Mz() {
      return {
        key: [],
        texels: new Uint8Array(4 * iz.m)
      }
    }
    const tz = [];

    function Hz(zz, uz) {
      return Oz(zz, tz), !wz(tz, uz.key) && (uz.key.length = 0, uz.key.push(...tz), uz.key.length > 0 && function(zz, uz) {
        for (let bz = 0; bz < iz.m; bz++) nz.k.GetCurrentGradient(bz / iz.m, zz, ((zz, uz, bz) => {
          Ez.Color3.LerpToRef(zz.color, uz.color, bz, pz)
        })), uz[4 * bz] = 255 * pz.r, uz[4 * bz + 1] = 255 * pz.g, uz[4 * bz + 2] = 255 * pz.b, uz[4 * bz + 3] = 255
      }(zz.getRampGradients(), uz.texels), !0)
    }

    function Oz(zz, uz) {
      uz.length = 0;
      const bz = zz.useRampGradients ? zz.getRampGradients() : null;
      if (null !== bz && void 0 !== bz && bz.length) {
        uz.push(bz.length);
        for (const zz of bz) uz.push(zz.gradient, zz.color.r, zz.color.g, zz.color.b)
      }
    }
    const pz = new Ez.Color3;

    function dz(zz, uz, bz, Ez) {
      return uz ? uz.length > iz.e ? (Ez(`particleStops:${bz}`, `GPU particles use the first 2 and last ${iz.e-2} of more than ${iz.e} ${bz} gradient stops (${zz.name})`), iz.e) : uz.length : 0
    }

    function Fz(zz, uz) {
      return uz < 2 || zz.length <= iz.e ? uz : zz.length - iz.e + uz
    }
    const Zz = new Float32Array(iz.q),
      Rz = new Uint32Array(Zz.buffer);

    function Kz(zz, uz, bz) {
      return lz(zz, Zz, Rz, bz), uz && wz(Rz, uz) ? null : Rz.slice()
    }

    function wz(zz, uz) {
      if (zz.length !== uz.length) return !1;
      for (let bz = 0; bz < zz.length; bz++)
        if (zz[bz] !== uz[bz]) return !1;
      return !0
    }

    function Xz(zz, uz, bz) {
      var Ez;
      zz[uz] = bz.gradient, zz[uz + 1] = bz.factor1, zz[uz + 2] = null !== (Ez = bz.factor2) && void 0 !== Ez ? Ez : bz.factor1
    }
  },
  40812: (zz, uz, bz) => {
    function Ez() {
      let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const uz = new Set;
      return (bz, Ez) => {
        uz.has(bz) || (uz.add(bz), console.warn(zz + Ez))
      }
    }
    bz.d(uz, {
      b: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);