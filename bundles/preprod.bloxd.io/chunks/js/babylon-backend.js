export const id = 0;
export const ids = [0];
export const modules = {
  40001: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      addBabylonLights: () => lb,
      default: () => Tb
    });
    var Uy = Wy(40010),
      hy = (Wy(38447), Wy(39693), Wy(38991), Wy(40020)),
      fy = Wy(38272),
      Zy = Wy(35917),
      cb = Wy(35856),
      Py = Wy(40034),
      oy = Wy(40043),
      By = Wy(35817),
      Ky = (Wy(39700), Wy(40059)),
      ey = Wy(40051),
      qb = Wy(37386),
      sy = Wy(40066),
      Sy = Wy(38319),
      Ey = Wy(37374);
    const ly = "gpuParticles",
      mb = Ey.u,
      Cy = yb => yb / 4,
      Ty = yb => `gpuParticleSystem[${yb>>2}].${"xyzw"[3&yb]}`,
      Vy = `\nprecision highp float;\nprecision highp int;\nprecision highp usampler2D;\n\n#define MAX_STOPS ${Ey.c}\n#define COLOR_POSITIONS ${Cy(mb.colorPositions)}\n#define COLOR1 ${Cy(mb.color1)}\n#define COLOR2 ${Cy(mb.color2)}\n#define VELOCITY ${Cy(mb.nZ)}\n#define REMAP ${Cy(mb.remap)}\n\nuniform mat4 gpuParticleView;\nuniform mat4 gpuParticleProjection;\nuniform vec4 gpuParticleSystem[${Ey.q/4}];\n// The records' frame offset and the system's clock; the slot drawn first (the oldest) and the slots in use.\nuniform vec4 gpuParticleFrame;\nuniform vec2 gpuParticleRange;\nuniform usampler2D gpuParticleRecords;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvec3 gravity() { return vec3(${Ty(mb.gravity)}, ${Ty(mb.gravity+1)}, ${Ty(mb.gravity+2)}); }\nint colorCount() { return int(${Ty(mb.colorCount)}); }\nvec4 colorDead() { return gpuParticleSystem[${Cy(mb.colorDead)}]; }\nint velocityCount() { return int(${Ty(mb.velocityCount)}); }\nint remapCount() { return int(${Ty(mb.remapCount)}); }\n\nuint hash(uint v) {\n\tuint state = v * 747796405u + 2891336453u;\n\tuint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;\n\treturn (word >> 22u) ^ word;\n}\n\n// The particle's own random pick for a gradient stop, as Babylon picks one when the particle reaches it.\nfloat random(uint seed, int stop) {\n\treturn float(hash(seed ^ (uint(stop) * 0x9e3779b9u)) >> 8u) / 16777216.0;\n}\n\nfloat colourPosition(int i) {\n\treturn gpuParticleSystem[COLOR_POSITIONS + i / 4][i % 4];\n}\n\nvec4 stopColour(int i, uint seed) {\n\treturn mix(gpuParticleSystem[COLOR1 + i], gpuParticleSystem[COLOR2 + i], random(seed, i));\n}\n\nfloat velocityFactor(int i, uint seed) {\n\tvec4 stop = gpuParticleSystem[VELOCITY + i];\n\treturn mix(stop.y, stop.z, random(seed, MAX_STOPS + i));\n}\n\nvec4 colourAt(vec4 colour0, float age, float ratio, uint seed) {\n\tint n = colorCount();\n\tvec4 colour;\n\tif (n == 0) {\n\t\tcolour = mix(colour0, colorDead(), ratio);\n\t} else if (age == 0.0) {\n\t\treturn stopColour(0, seed);\n\t} else if (ratio < colourPosition(0)) {\n\t\tcolour = stopColour(min(1, n - 1), seed);\n\t} else {\n\t\tcolour = stopColour(n - 1, seed);\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tfloat a = colourPosition(i);\n\t\t\tfloat b = colourPosition(i + 1);\n\t\t\tif (ratio >= a && ratio <= b) {\n\t\t\t\tfloat scale = b > a ? (ratio - a) / (b - a) : 0.0;\n\t\t\t\tcolour = mix(stopColour(i, seed), stopColour(i + 1, seed), scale);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\tcolour.a = max(colour.a, 0.0);\n\treturn colour;\n}\n\nvec3 travel(float alpha, float beta, vec3 d, vec3 g, float s0, float s1) {\n\tfloat ds = s1 - s0;\n\tfloat ds2 = (s1 * s1 - s0 * s0) * 0.5;\n\tfloat ds3 = (s1 * s1 * s1 - s0 * s0 * s0) / 3.0;\n\treturn d * (alpha * ds) + (g * alpha + d * beta) * ds2 + g * (beta * ds3);\n}\n\nvec3 displacement(vec3 d, float age, float life, uint seed) {\n\tvec3 g = gravity();\n\tint n = velocityCount();\n\tif (n == 0) {\n\t\treturn d * age + g * (0.5 * age * age);\n\t}\n\tvec3 total = vec3(0.0);\n\tfloat beforeFirst = min(age, gpuParticleSystem[VELOCITY].x * life);\n\tif (beforeFirst > 0.0) {\n\t\ttotal += travel(velocityFactor(min(1, n - 1), seed), 0.0, d, g, 0.0, beforeFirst);\n\t}\n\tfor (int i = 0; i + 1 < n; i++) {\n\t\tfloat a = gpuParticleSystem[VELOCITY + i].x * life;\n\t\tfloat b = gpuParticleSystem[VELOCITY + i + 1].x * life;\n\t\tfloat lo = max(a, 0.0);\n\t\tfloat hi = min(b, age);\n\t\tif (hi > lo) {\n\t\t\tfloat fa = velocityFactor(i, seed);\n\t\t\tfloat beta = (velocityFactor(i + 1, seed) - fa) / (b - a);\n\t\t\ttotal += travel(fa - beta * a, beta, d, g, lo, hi);\n\t\t}\n\t}\n\tfloat afterLast = max(gpuParticleSystem[VELOCITY + n - 1].x * life, 0.0);\n\tif (age > afterLast) {\n\t\ttotal += travel(velocityFactor(n - 1, seed), 0.0, d, g, afterLast, age);\n\t}\n\treturn total;\n}\n\nvec4 remapAt(float age, float ratio) {\n\tint n = remapCount();\n\tif (n == 0 || age == 0.0) {\n\t\treturn vec4(0.0, 1.0, 0.0, 1.0);\n\t}\n\tvec2 stop = gpuParticleSystem[REMAP + n - 1].yz;\n\tif (ratio < gpuParticleSystem[REMAP].x) {\n\t\tstop = gpuParticleSystem[REMAP].yz;\n\t} else {\n\t\tfor (int i = 0; i + 1 < n; i++) {\n\t\t\tvec4 a = gpuParticleSystem[REMAP + i];\n\t\t\tvec4 b = gpuParticleSystem[REMAP + i + 1];\n\t\t\tif (ratio >= a.x && ratio <= b.x) {\n\t\t\t\tstop = mix(a.yz, b.yz, b.x > a.x ? (ratio - a.x) / (b.x - a.x) : 0.0);\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t}\n\treturn vec4(stop.x, stop.y - stop.x, 0.0, 1.0);\n}\n\nvoid main(void) {\n\tint slot = (int(gpuParticleRange.x) + gl_InstanceID) % int(gpuParticleRange.y);\n\tint perRow = textureSize(gpuParticleRecords, 0).x / 4;\n\tivec2 at = ivec2((slot % perRow) * 4, slot / perRow);\n\tvec4 spawn = uintBitsToFloat(texelFetch(gpuParticleRecords, at, 0));\n\tvec4 velocity = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(1, 0), 0));\n\tuvec4 sizeSeed = texelFetch(gpuParticleRecords, at + ivec2(2, 0), 0);\n\tvec4 colour0 = uintBitsToFloat(texelFetch(gpuParticleRecords, at + ivec2(3, 0), 0));\n\tfloat age = gpuParticleFrame.w - spawn.w;\n\tfloat life = velocity.w;\n\t// The strip's corners: (0, 0), (1, 0), (0, 1), (1, 1).\n\tvec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1));\n\tvUV = corner;\n\tif (!(age >= 0.0 && age < life)) {\n\t\t// Dead, or not yet written: outside the clip volume.\n\t\tgl_Position = vec4(0.0, 0.0, 2.0, 1.0);\n\t\tvColor = vec4(0.0);\n\t\tvRemap = vec4(0.0, 1.0, 0.0, 1.0);\n\t\treturn;\n\t}\n\tfloat ratio = age / life;\n\tuint seed = sizeSeed.y;\n\tvec3 centre = gpuParticleFrame.xyz + spawn.xyz + displacement(velocity.xyz, age, life, seed);\n\t// particles.vertex's billboard: the corner offset in view space.\n\tvec3 viewPos = (gpuParticleView * vec4(centre, 1.0)).xyz + vec3((corner - 0.5) * uintBitsToFloat(sizeSeed.x), 0.0);\n\tgl_Position = gpuParticleProjection * vec4(viewPos, 1.0);\n\tvColor = colourAt(colour0, age, ratio, seed);\n\tvRemap = remapAt(age, ratio);\n}\n`;
    Sy.e.ShadersStore[`${ly}VertexShader`] = Vy, Sy.e.ShadersStore[`${ly}PixelShader`] = "\nprecision highp float;\n\nuniform sampler2D gpuParticleTexture;\nuniform sampler2D gpuParticleRampTexture;\nuniform float gpuParticleRamp;\n\nvarying vec2 vUV;\nvarying vec4 vColor;\nvarying vec4 vRemap;\n\nvoid main(void) {\n\tvec4 textureColour = texture2D(gpuParticleTexture, vUV);\n\tvec4 colour = textureColour * vColor;\n\tif (gpuParticleRamp != 0.0) {\n\t\tfloat alpha = colour.a;\n\t\tfloat index = clamp((alpha - vRemap.x) / vRemap.y, 0.0, 1.0);\n\t\tvec4 rampColour = texture2D(gpuParticleRampTexture, vec2(1.0 - index, 0.0));\n\t\tcolour = vec4(colour.rgb * rampColour.rgb, clamp((alpha * rampColour.a - vRemap.z) / vRemap.w, 0.0, 1.0));\n\t}\n#ifdef MULTIPLY_PASS\n\t// The MULTIPLY pass of BLENDMULTIPLYMODE, which MULTIPLYADD draws before its ADD pass.\n\tfloat sourceAlpha = vColor.a * textureColour.a;\n\tcolour.rgb = colour.rgb * sourceAlpha + vec3(1.0 - sourceAlpha);\n#endif\n\tgl_FragColor = colour;\n}\n";
    const Jy = ["gpuParticleView", "gpuParticleProjection", "gpuParticleSystem", "gpuParticleFrame", "gpuParticleRange", "gpuParticleRamp"],
      gb = ["gpuParticleTexture", "gpuParticleRampTexture", "gpuParticleRecords"];
    var Gy = Wy(37372),
      Oy = Wy(40074);
    class Ry extends Gy.b {
      constructor(yb, bb, Wy, Uy) {
        super(yb, bb, Wy), this.renderer = Wy, this.Pf = Uy, this.id = void 0, this.renderingGroupId = 0, this.layerMask = 268435455, this.records = void 0, this.perRow = void 0, this.uniforms = new Float32Array(Ey.q), this.uniformBits = new Uint32Array(this.uniforms.buffer), this.ramp = null, this.rampTexels = (0, Oy.e)(), this.engine = void 0, this.animatedFrame = -1, this.uploadSlots = (yb, bb) => {
          const {
            engine: Wy,
            perRow: Uy
          } = this, hy = Wy._gl;
          Wy._bindTextureDirectly(hy.TEXTURE_2D, this.records, !0), Wy._unpackFlipY(!1);
          const fy = this.ring.recordBits;
          for (let Zy = yb; Zy < bb;) {
            const yb = Math.floor(Zy / Uy),
              Wy = Math.min(bb, (yb + 1) * Uy);
            hy.texSubImage2D(hy.TEXTURE_2D, 0, Zy % Uy * 4, yb, 4 * (Wy - Zy), 1, hy.RGBA_INTEGER, hy.UNSIGNED_INT, fy, Zy * Ey.f), Zy = Wy
          }
          Wy._bindTextureDirectly(hy.TEXTURE_2D, null)
        }, this.id = yb;
        const hy = Uy.xh();
        this.engine = hy;
        const fy = Math.max(1, bb);
        this.perRow = Math.min(fy, 256), this.records = hy.createRawTexture(null, 4 * this.perRow, Math.ceil(fy / this.perRow), Ky.b.TEXTUREFORMAT_RGBA_INTEGER, !1, !1, Ky.b.TEXTURE_NEAREST_SAMPLINGMODE, null, Ky.b.TEXTURETYPE_UNSIGNED_INTEGER)
      }
      animate() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Pf.getAnimationRatio() || 1;
        const bb = this.Pf.getFrameId();
        if (bb === this.animatedFrame) return !1;
        const Wy = super.animate(yb);
        return Wy && (this.animatedFrame = bb, this.ring.takeUploads(this.uploadSlots)), Wy
      }
      render() {
        return this.renderer.render(this)
      }
      rebuild() {}
      clone() {
        return null
      }
      prepareDraw(yb) {
        (0, Oy.i)(this, this.uniforms, this.uniformBits, yb);
        for (const Wy of Ey.r) this.uniforms[Wy] = this.uniformBits[Wy];
        var bb;
        (0, Oy.j)(this, this.rampTexels) && (0 === this.rampTexels.key.length ? (null === (bb = this.ramp) || void 0 === bb || bb.dispose(), this.ramp = null) : this.ramp ? this.ramp.update(this.rampTexels.texels) : this.ramp = ey.d.CreateRGBATexture(this.rampTexels.texels, Ey.m, 1, this.Pf, !1, !1, Ky.b.TEXTURE_NEAREST_SAMPLINGMODE))
      }
      releaseGl() {
        var yb;
        this.records.dispose(), null === (yb = this.ramp) || void 0 === yb || yb.dispose(), this.ramp = null
      }
    }
    class vb {
      constructor(yb) {
        this.Pf = yb, this.failed = !1, this.engine = void 0, this.effect = void 0, this.multiplyEffect = void 0, this.whiteRamp = void 0, this.vertexBuffers = {}, this.frame = new Float32Array(4), this.warnOnce = (0, sy.e)(), this.engine = yb.xh(), this.effect = this.createEffect(""), this.multiplyEffect = this.createEffect("#define MULTIPLY_PASS"), this.whiteRamp = ey.d.CreateRGBATexture(new Uint8Array([255, 255, 255, 255]), 1, 1, yb, !1, !1, Ky.b.TEXTURE_NEAREST_SAMPLINGMODE), this.awaitLink(this.effect), this.awaitLink(this.multiplyEffect)
      }
      cUy(yb, bb) {
        const Wy = 256 * this.engine.getCaps().maxTextureSize;
        bb > Wy && this.warnOnce(`capacity:${yb}`, `particle system ${yb} holds ${Wy} particles, not ${bb}: its records texture's limit`);
        const Uy = new Ry(yb, Math.min(bb, Wy), this, this.Pf);
        return this.Pf.addParticleSystem(Uy), Uy
      }
      canDraw(yb) {
        var bb, Wy;
        if (this.failed || null === (bb = yb.texture) || void 0 === bb || null === (Wy = bb.mirror) || void 0 === Wy || !Wy.isReady()) return !1;
        for (const Uy of (0, qb.m)(yb.blendMode))
          if (!this.effectFor(Uy).isReady()) return !1;
        return !0
      }
      disposeStopped(yb) {
        this.Pf._toBeDisposed.push(yb)
      }
      remove(yb) {
        this.Pf.removeParticleSystem(yb), yb.releaseGl()
      }
      render(yb) {
        var bb;
        if (!yb.isReady() || !yb.hasLiveParticles()) return 0;
        const {
          engine: Wy,
          Pf: Uy,
          frame: hy
        } = this;
        yb.prepareDraw(this.warnOnce), yb.drawOffset(hy, 0), hy[3] = yb.drawTime();
        const fy = yb.ring.drawStart(),
          Zy = yb.ring.drawCount(),
          cb = null !== (bb = yb.ramp) && void 0 !== bb ? bb : this.whiteRamp;
        Wy.setState(!1);
        for (const Py of (0, qb.m)(yb.blendMode)) {
          const bb = this.effectFor(Py);
          Wy.enableEffect(bb), bb.setTexture("gpuParticleTexture", yb.texture.mirror), bb.setTexture("gpuParticleRampTexture", cb), bb._bindTexture("gpuParticleRecords", yb.records), bb.setMatrix("gpuParticleView", Uy.getViewMatrix()), bb.setMatrix("gpuParticleProjection", Uy.getProjectionMatrix()), bb.setFloatArray4("gpuParticleSystem", yb.uniforms), bb.setFloat4("gpuParticleFrame", hy[0], hy[1], hy[2], hy[3]), bb.setFloat2("gpuParticleRange", fy, Zy), bb.setFloat("gpuParticleRamp", yb.uniforms[Ey.u.ramp]), Wy.bindBuffers(this.vertexBuffers, null, bb), Wy.setAlphaMode((0, qb.i)(Py)), Wy.drawArraysType(Ky.b.MATERIAL_TriangleStripDrawMode, 0, 4, Zy), bb._bindTexture("gpuParticleRecords", null)
        }
        return Wy.setAlphaMode(Ky.b.ALPHA_DISABLE), Zy
      }
      awaitLink(yb) {
        const bb = yb.getPipelineContext(),
          Wy = this.engine._gl;
        !this.failed && Wy && (!bb || bb.isParallelCompiled && !bb.program ? this.warnOnce("asyncProgram", "GPU particles: Babylon made a particle program asynchronously, so a failed link shows only after the first systems are made") : bb.isParallelCompiled && bb.program && (Wy.getProgramParameter(bb.program, Wy.LINK_STATUS) || this.fail(Wy.getProgramInfoLog(bb.program) || "a program did not link")))
      }
      effectFor(yb) {
        return yb === qb.d ? this.multiplyEffect : this.effect
      }
      createEffect(yb) {
        return this.engine.createEffect(ly, [], Jy, gb, yb, void 0, void 0, ((yb, bb) => {
          this.fail(bb)
        }))
      }
      fail(yb) {
        if (!this.failed) {
          this.failed = !0, console.warn(`GPU particles cannot compile here, so new particle systems are Babylon's: ${yb}`);
          for (const yb of this.Pf.YV.slice()) yb instanceof Ry && yb.disposeOnStop && yb.dispose()
        }
      }
    }
    var ib = Wy(38682),
      My = Wy(39689),
      Yy = Wy(38422),
      Xy = Wy(38644),
      ny = Wy(38637),
      uy = Wy(38564),
      rb = Wy(39729),
      Hy = Wy(36213),
      ab = Wy(40083),
      Fy = Wy(40088),
      py = Wy(40090),
      Ly = Wy(38587),
      Qy = Wy(36073),
      jb = Wy(36068),
      Dy = Wy(38805),
      tb = Wy(36160),
      wy = Wy(36099);

    function kb(yb) {
      if (yb.visibility < 1 || !yb.isVisible || !yb.isEnabled() || yb.metadata[wy.d] || !yb.isReady()) return !0;
      const bb = yb.vJ;
      if (!bb || 0 === bb.length) return !0;
      for (let Wy = 0; Wy < bb.length; Wy++) {
        const Uy = bb[Wy],
          hy = Uy.Wh();
        if (!hy || !hy.isReadyForSubMesh(yb, Uy, !1)) return !0
      }
      return !1
    }
    class Ny {
      constructor(yb, bb) {
        this.lb = yb, this.culled = 0, this.armed = !1, this.vis = null, this.eye = [0, 0, 0], this.passable = new Set, this.meshes = [], this.cellSlots = new Int32Array(256), this.count = 0, bb.onBeforeActiveMeshesEvaluationObservable.add((() => {
          this.armed = !0
        }))
      }
      vU(yb) {
        var bb;
        const Wy = this.armed;
        if (this.armed = !1, this.vis = null, !Wy) return !1;
        this.culled = 0;
        const {
          lb: Uy
        } = this, hy = null === (bb = Uy.Im) || void 0 === bb ? void 0 : bb.visibility;
        if (!hy || !yb || Uy.Ch.Th) return !1;
        if (!(Uy.Kb.PBy[0] >= tb.f)) return !1;
        const fy = yb.getProjectionMatrix().m;
        if (0 !== fy[15]) return !1;
        const Zy = Uy.ub,
          cb = yb.globalPosition,
          Py = this.eye;
        return Py[0] = cb.x + Zy[0], Py[1] = cb.y + Zy[1], Py[2] = cb.z + Zy[2], !!hy.eyeClear(Py[0], Py[1], Py[2], yb.minZ, fy, Uy.Kb) && (this.vis = hy, this.passable.clear(), this.count = 0, !0)
      }
      see(yb, bb) {
        const Wy = this.count++;
        if (Wy === this.cellSlots.length) {
          const yb = new Int32Array(2 * Wy);
          yb.set(this.cellSlots), this.cellSlots = yb
        }
        this.cellSlots[Wy] = bb, this.meshes[Wy] = yb
      }
      seeThrough(yb) {
        this.passable.add(yb)
      }
      finish(yb, bb) {
        const {
          vis: Wy,
          eye: Uy,
          meshes: hy,
          count: fy,
          cellSlots: Zy
        } = this, {
          Kb: cb
        } = this.lb, [Py, oy] = cb.PBy, By = null !== Wy && Wy.update(Uy[0], Uy[1], Uy[2], cb.Zcy, Py, oy, this.passable);
        let Ky = 0;
        for (let ey = 0; ey < fy; ey++) {
          const Uy = hy[ey];
          if (By) {
            const yb = 3 * Zy[ey];
            if (yb >= 0 && !Wy.isDrawn(bb[yb], bb[yb + 1], bb[yb + 2])) {
              Ky++;
              continue
            }
          }
          Ly.e.prototype.push.call(yb, Uy)
        }
        hy.fill(null, 0, fy), this.count = 0, this.vis = null, this.culled = Ky
      }
    }
    var zb = Wy(36144),
      Iy = Wy(36084),
      xb = Wy(38782),
      Ay = Wy(40099),
      dy = Wy(38784),
      yW = Wy(38697);
    let bW = 1;
    const Wb = new WeakSet;

    function Ub() {
      return bW
    }

    function hb() {
      bW = bW >= 1073741823 ? 1 : bW + 1
    }

    function fb(yb) {
      const bb = yb.metadata;
      if (!bb || !0 !== bb[jb.q]) return;
      const Wy = bb[jb.v],
        Uy = null === Wy || void 0 === Wy ? void 0 : Wy._noaStamps;
      if (!Wy || !Uy) return;
      const hy = Wy.entries.indexOf(yb);
      hy >= 0 && (Uy[hy] = 0)
    }

    function Zb(yb) {
      const bb = yb.vJ;
      for (let Wy = 0; Wy < bb.length; Wy++) {
        const yb = bb[Wy].Wh();
        if (yb && !yb.isFrozen) return !1
      }
      for (let Wy = 0; Wy < bb.length; Wy++) {
        const yb = bb[Wy].Wh();
        yb && Wb.add(yb)
      }
      return !0
    }
    let cW = !1;
    const Pb = new WeakSet;

    function ob(yb, bb) {
      const Wy = yb[bb];
      if ("function" !== typeof Wy) throw new Error(`terrainDrawState: Babylon has no ${bb} to hook`);
      return Wy
    }

    function Bb(yb, bb, Wy, Uy, hy) {
      const fy = Wy.Kb.Zcy,
        Zy = new Map;
      let cb = 0;
      const Py = new Ny(Wy, yb),
        oy = new zb.c(fy, yb.xh());
      ! function(yb) {
        if (Pb.has(yb) || (Pb.add(yb), yb.onContextLostObservable.add(hb), yb.onContextRestoredObservable.add(hb)), cW) return;
        cW = !0;
        const bb = Ay.b.prototype,
          Wy = ob(bb, "_markSubMeshesAsDirty");
        Object.assign(bb, {
          _markSubMeshesAsDirty(yb) {
            Wy.call(this, yb), fb(this)
          }
        });
        const Uy = ob(yW.b.prototype, "_syncParentEnabledState");
        Object.assign(yW.b.prototype, {
          _syncParentEnabledState() {
            Uy.call(this), fb(this)
          }
        });
        const hy = ob(dy.d.prototype, "resetDrawCache");
        dy.d.prototype.resetDrawCache = function(yb, bb) {
          hy.call(this, yb, bb), fb(this.getMesh())
        };
        const fy = xb.e.prototype,
          Zy = ob(fy, "markDirty");
        fy.markDirty = function(yb) {
          Zy.call(this, yb), Wb.has(this) && hb()
        };
        const cb = ob(fy, "_markAllSubMeshesAsDirty");
        Object.assign(fy, {
          _markAllSubMeshesAsDirty(yb) {
            cb.call(this, yb), Wb.has(this) && hb()
          }
        })
      }(yb.xh());
      let By = new Float64Array(384),
        Ky = new Int32Array(64),
        ey = new Uint8Array(64),
        qb = new Float64Array(64),
        sy = new Int32Array(192),
        Sy = 0;
      const Ey = [],
        ly = new Float64Array(24),
        mb = () => {
          const yb = Ey.pop();
          return void 0 !== yb ? (Ky[yb] = 0, yb) : (Sy === Ky.length && (By = Kb(By, new Float64Array(2 * By.length)), Ky = Kb(Ky, new Int32Array(2 * Ky.length)), ey = Kb(ey, new Uint8Array(2 * ey.length)), qb = Kb(qb, new Float64Array(2 * qb.length)), sy = Kb(sy, new Int32Array(2 * sy.length))), Sy++)
        },
        Cy = yb => {
          const bb = 6 * yb._noaSlot,
            Wy = yb.SBy[0],
            Uy = yb.SBy[1];
          By[bb] = Wy.x, By[bb + 1] = Wy.y, By[bb + 2] = Wy.z, By[bb + 3] = Uy.x, By[bb + 4] = Uy.y, By[bb + 5] = Uy.z
        },
        Ty = (yb, bb, Wy) => {
          if (!Wy) return Py.see(yb, -1), !1;
          const Uy = kb(yb);
          return Uy && Py.seeThrough(qb[bb]), Py.see(yb, bb), !Uy
        };
      let Vy = -1;
      return yb.getActiveMeshCandidates = () => {
        const Wy = yb.frustumPlanes,
          Uy = bb._selectionContent;
        Uy.reset(), (Wy => {
          const Uy = yb.frustumPlanes;
          cb = cb + 1 | 0 || 1;
          const hy = bb.blocks,
            fy = Py.vU(yb.activeCamera),
            Zy = fy && !0;
          if (Zy) {
            const bb = yb.xh().currentRenderPassId;
            bb !== Vy && (Vy = bb, hb())
          }
          const oy = Ub(),
            qb = Zy && !1;
          hy.length > 0 && function(yb, bb) {
            for (let Wy = 0; Wy < 6; Wy++) {
              const Uy = yb[Wy],
                hy = Uy.normal;
              bb[4 * Wy] = hy.x, bb[4 * Wy + 1] = hy.y, bb[4 * Wy + 2] = hy.z, bb[4 * Wy + 3] = Uy.d
            }
          }(Uy, ly);
          const Sy = By,
            Ey = Ky,
            mb = ey;
          for (let yb = 0; yb < hy.length; yb++) {
            const bb = hy[yb];
            if (!Dy.e.IsInFrustum(bb.SBy, Uy)) continue;
            const By = bb.entries;
            {
              const yb = bb._noaSlots,
                Uy = bb._noaStamps,
                hy = bb._noaTerrain;
              for (let bb = 0; bb < By.length; bb++) {
                const Ky = yb[bb];
                if (Ey[Ky] !== cb && (Ey[Ky] = cb, mb[Ky] = eb(Sy, 6 * Ky, ly) ? 1 : 0), 0 === mb[Ky]) continue;
                const ey = By[bb];
                if (Zy && Uy[bb] === oy) qb && 1 === hy[bb] && kb(ey) && 0, Py.see(ey, 1 === hy[bb] ? Ky : -1);
                else if (Zy) {
                  Uy[bb] = oy;
                  const yb = !0 === ey.metadata[Iy.l];
                  hy[bb] = yb ? 1 : 0;
                  const Wy = Ty(ey, Ky, yb);
                  !yb || Wy && Zb(ey) || (Uy[bb] = 0)
                } else fy ? Ty(ey, Ky, !0 === ey.metadata[Iy.l]) : Ly.e.prototype.push.call(Wy, ey)
              }
              continue
            }
          }
          fy && Py.finish(Wy, sy)
        })(Uy), oy.apply(Uy, yb.activeCamera);
        const fy = bb.sBy;
        for (let yb = 0; yb < fy.length; yb++) {
          const bb = fy[yb];
          bb.isEnabled() && Ly.e.prototype.push.call(Uy, bb)
        }
        return hy(Uy, Wy), Uy
      }, {
        EBy: () => Py.culled,
        yKy: (yb, bb) => {
          const hy = Math.floor(bb[0] / fy),
            cb = Math.floor(bb[1] / fy),
            Py = Math.floor(bb[2] / fy),
            oy = `${hy}|${cb}|${Py}`;
          let By = Zy.get(oy);
          if (!By) {
            const yb = [0, 0, 0];
            Wy.zPy([hy * fy - 1, cb * fy - 1, Py * fy - 1], null, yb), By = Object.assign(Uy(yb, fy + 2), {
              lBy: oy,
              mKy: 0,
              _selectionId: 0,
              _inFrustum: !1,
              _noaSlot: mb()
            }), Cy(By), qb[By._noaSlot] = (0, Qy.m)(hy, cb, Py), sy[3 * By._noaSlot] = hy, sy[3 * By._noaSlot + 1] = cb, sy[3 * By._noaSlot + 2] = Py, Zy.set(oy, By)
          }
          By.mKy++, yb.metadata[jb.y] = By
        },
        yUy: yb => {
          const bb = yb.metadata[jb.y];
          bb && (bb.mKy--, bb.mKy <= 0 && (Zy.delete(bb.lBy), Ey.push(bb._noaSlot)), yb.metadata[jb.y] = null)
        },
        qKy: (yb, bb) => {
          const Wy = yb,
            Uy = bb.metadata[jb.y];
          (Wy._noaSlots ??= []).push(Uy._noaSlot), (Wy._noaStamps ??= []).push(0), (Wy._noaTerrain ??= []).push(0), Wy.entries.push(bb)
        },
        removeEntry: (yb, bb) => {
          const Wy = yb,
            Uy = Wy.entries,
            hy = Uy.indexOf(bb);
          if (hy < 0) return;
          const fy = Wy._noaSlots,
            Zy = Wy._noaStamps,
            cb = Wy._noaTerrain,
            Py = Uy.length - 1;
          Uy[hy] = Uy[Py], fy[hy] = fy[Py], Zy[hy] = Zy[Py], cb[hy] = cb[Py], Uy.pop(), fy.pop(), Zy.pop(), cb.pop()
        },
        RZy: yb => {
          for (const bb of Zy.values()) {
            bb.ZBy.TBy(yb), bb.fBy.TBy(yb);
            for (const Wy of bb.SBy) Wy.TBy(yb);
            Cy(bb)
          }
        }
      }
    }

    function Kb(yb, bb) {
      return bb.set(yb), bb
    }

    function eb(yb, bb, Wy) {
      const Uy = yb[bb],
        hy = yb[bb + 1],
        fy = yb[bb + 2],
        Zy = yb[bb + 3],
        cb = yb[bb + 4],
        Py = yb[bb + 5];
      for (let oy = 0; oy < 24; oy += 4) {
        const yb = Wy[oy],
          bb = Wy[oy + 1],
          By = Wy[oy + 2];
        if (!(yb * (yb >= 0 ? Zy : Uy) + bb * (bb >= 0 ? cb : hy) + By * (By >= 0 ? Py : fy) + Wy[oy + 3] >= 0)) return !1
      }
      return !0
    }
    var qW = Wy(36439);
    class sb {
      constructor(yb, bb) {
        var Wy = yb.Pf;
        Wy.Foy(new py.d(Wy));
        var Uy = new ab.b(Py);
        Wy.JBy = Uy, Uy.blocks = [];
        var hy, fy = {},
          Zy = [];
        this.textPlanes = Zy, this.EBy = () => hy.EBy(), this.RZy = yb => {
          By(Uy, yb), hy.RZy(yb)
        }, this.yKy = (bb, Wy, cb) => {
          if (!bb.metadata) throw new Error("Mesh should have mesh.metadata property");
          if (!bb.metadata[jb.v] && !bb.metadata[jb.o]) {
            if (!Wy) {
              var Py = Uy.sBy;
              if (bb.metadata[jb.D] && !bb.parent) {
                Py = Zy;
                var By = bb.qUy().GBy;
                bb.metadata[jb.E] = By.center.length() + By.radius, bb.AU = !0
              }
              return Py.push(bb), bb.metadata[jb.i] = Py, void(bb.metadata[jb.o] = !0)
            }
            var ey = Math.floor(cb[0] / oy),
              qb = Math.floor(cb[1] / oy),
              sy = Math.floor(cb[2] / oy),
              Sy = ey + "|" + qb + "|" + sy,
              Ey = fy[Sy];
            if (!Ey) {
              var ly = [ey * oy, qb * oy, sy * oy],
                mb = [0, 0, 0];
              yb.lb.zPy(ly, null, mb), Ey = Ky(mb, oy), Uy.blocks.push(Ey), fy[Sy] = Ey, Ey.lBy = Sy
            }
            hy.yKy(bb, cb), hy.qKy(Ey, bb), Ey.mKy = (Ey.mKy || 0) + 1, bb.metadata[jb.v] = Ey, bb.metadata[jb.q] = !0, bb.AU = !0
          }
        }, this.yUy = yb => {
          if (yb.metadata) {
            yb.metadata[jb.o] && ((0, Qy.q)(yb.metadata[jb.i], yb), yb.metadata[jb.o] = !1), yb.metadata[jb.i] === Zy && (yb.AU = !1), yb.metadata[jb.i] = void 0, yb.metadata[jb.E] = void 0;
            var bb = yb.metadata[jb.v];
            bb && bb.entries && (yb.metadata[jb.q] && hy.removeEntry(bb, yb), bb.mKy--, bb.mKy <= 0 && (delete fy[bb.lBy], (0, Qy.q)(Uy.blocks, bb))), hy.yUy(yb), yb.metadata[jb.v] = null, yb.metadata[jb.q] = !1
          }
        }, this.PZy = function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (yb.metadata[jb.v]) {
            if (yb.metadata[jb.q] === bb) return;
            var Wy = yb.metadata[jb.v];
            Wy && Wy.entries && (bb ? hy.qKy(Wy, yb) : hy.removeEntry(Wy, yb)), yb.metadata[jb.q] = bb
          } else {
            if (yb.metadata[jb.o] === bb) return;
            var fy = yb.metadata[jb.i] || Uy.sBy;
            bb ? fy.push(yb) : (0, Qy.q)(fy, yb), yb.metadata[jb.o] = bb
          }
        };
        var Py = () => {},
          oy = bb * yb.lb.Kb.Zcy,
          By = (yb, bb) => {
            yb.blocks.forEach((yb => {
              yb.ZBy.TBy(bb), yb.fBy.TBy(bb), yb.SBy.forEach((yb => yb.TBy(bb))), yb.blocks && By(yb, bb)
            }))
          },
          Ky = (yb, bb) => {
            var Wy = new cb.dU(yb[0], yb[1], yb[2]),
              Uy = new cb.dU(yb[0] + bb, yb[1] + bb, yb[2] + bb);
            return new Fy.d(Wy, Uy, void 0, void 0, void 0, Py)
          };
        hy = Bb(Wy, Uy, yb.lb, Ky, ((yb, bb) => {
          for (var Wy = 0; Wy < Zy.length; Wy++) {
            var Uy = Zy[Wy];
            Uy.isEnabled(!1) && ((0, qW.c)(Uy, bb) && Ly.e.prototype.push.call(yb, Uy))
          }
        }))
      }
    }

    function Sb(yb) {
      const {
        holderPosition: bb,
        holderRotation: Wy,
        Lhy: Uy,
        fov: hy,
        near: fy,
        far: Zy
      } = yb.model.phy, cb = yb.XBy;
      cb.position.vcy(bb[0], bb[1], bb[2]), cb.rotation.vcy(Wy[0], Wy[1], Wy[2]);
      const Py = yb.camera;
      Py.position.vcy(Uy[0], Uy[1], Uy[2]), Py.fov = hy, Py.minZ = fy, Py.maxZ = Zy
    }

    function Eb(yb) {
      const bb = yb.xh(),
        Wy = bb,
        Uy = Wy._gl;
      if (!Uy || Wy.vf < 2 || bb.Aoy || Uy.getParameter(Uy.DEPTH_BITS) < 24) return !1;
      const hy = yb._renderingManager,
        fy = hy.getRenderingGroup(-1),
        Zy = hy.getRenderingGroup(0),
        cb = Xy.b.prototype.render;
      return fy.render = function(yb, bb, Wy, Uy, hy, fy, Py, oy, By) {
        (yb || Zy._empty) && cb.call(this, yb, bb, Wy, Uy, hy, fy, Py, oy, By)
      }, Zy.render = function(yb, Wy, hy, Zy) {
        let Py = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          By = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          ey = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qb = arguments.length > 8 ? arguments[8] : void 0;
        yb ? cb.call(this, yb, Wy, hy, Zy, Py, oy, By, ey, qb) : (bb.setAlphaMode(Ky.b.ALPHA_DISABLE), cb.call(this, null, !1, !1, Zy, Py, oy, By, !1), fy._empty || (Uy.depthRange(1, 1), cb.call(fy, null, Wy, hy, Zy, Py, oy, By, ey, qb), Uy.depthRange(0, 1)), cb.call(this, null, Wy, hy, Zy, !1, !1, !1, ey, qb))
      }, !0
    }

    function lb(yb, bb) {
      return [bb, Hy.h].map(((bb, Wy) => {
        const Uy = new hy.e("light", cb.dU.FromArray(bb), yb);
        return Uy.diffuse = Zy.Color3.FromArray([1, 1, 1]), Uy.specular = Zy.Color3.FromArray([1, 1, 1]), Uy.intensity = Hy.d[Wy], Uy
      }))
    }
    class mW extends oy.e {
      constructor() {
        super(...arguments), this.heldTexture = null
      }
      get texture() {
        return this.heldTexture
      }
      set texture(yb) {
        var bb;
        this.heldTexture = yb, this.particleTexture = null !== (bb = null === yb || void 0 === yb ? void 0 : yb.mirror) && void 0 !== bb ? bb : null
      }
      isEmitting() {
        return this.isStarted() && !this._stopped
      }
      dispose() {
        let yb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        yb && (this.particleTexture = null, (0, By.z)(this.heldTexture), this.heldTexture = null), super.dispose(yb, bb, Wy)
      }
    }
    const Cb = Uy.d.Zero();
    const Tb = {
      FBy: function(yb, bb) {
        return new fy.b(yb, bb.Boy, {
          preserveDrawingBuffer: bb.preserveDrawingBuffer,
          powerPreference: "high-performance",
          alpha: !1,
          stencil: !1
        })
      },
      HBy: function(yb, bb) {
        ! function(yb, bb, Wy) {
          const Uy = new uy.b(yb.engine);
          yb.Pf = Uy, Uy.detachControl(), Uy.autoClear = !1, ny.e.MIN_RENDERINGGROUPS = -1;
          for (let fy = ny.e.MIN_RENDERINGGROUPS; fy <= 1; fy++) Uy.setRenderingOrder(fy, Xy.b.PainterSortCompare, Xy.b.PainterSortCompare, Xy.b.PainterSortCompare);
          Uy.setRenderingAutoClearDepthStencil(0, !1), Yy.c.Enabled = !1, yb.iKy = new sb(yb, Math.round(bb.MBy)), yb.XBy = new My.d("camHolder", Uy), yb.camera = new ib.b("camera", new cb.dU(0, 0, 0), Uy), yb.camera.parent = yb.XBy, Sb(yb), (0, Hy.j)(yb, ((yb, bb, Wy) => (0, rb.i)(bb, Wy, yb.Pf))), Uy.clearColor = Zy.e.FromArray(bb.clearColor), Uy.ambientColor = Zy.Color3.FromArray(bb.ambientColor);
          const hy = Wy(Uy, bb.rKy);
          Uy.onNewLightAddedObservable.add((yb => {
            hy.some((bb => bb === yb)) || console.error(`Light "${yb.name}" was added to the scene after startup; terrain, block models and Lite will ignore it. Add it in addNoaLights (renderingCamera.ts) and addBabylonLights (babylonBackend.ts).`)
          })), Uy.skipPointerMovePicking = !0
        }(yb, bb, lb), Eb(yb.Pf)
      },
      YBy: Sb,
      setBabylonFog: function(yb, bb, Wy, Uy) {
        const hy = yb.Pf;
        hy.fogMode = 3, hy.fogStart = bb, hy.fogEnd = Wy, hy.fogColor.set(Uy[0], Uy[1], Uy[2])
      },
      pBy: function(yb, bb, Wy) {
        return yb.engine.vf >= 2 && (yb.LBy || (yb.LBy = new vb(yb.Pf)), !yb.LBy.failed) ? yb.LBy.cUy(bb, Wy) : new mW(bb, Wy, yb.Pf)
      },
      jKy: function(yb, bb) {
        yb.Pf.YV.forEach((Wy => {
          if (Wy instanceof Ry) return void Wy.RZy(bb, yb.lb.ub);
          const Uy = Wy;
          if (Uy.emitter.getConnectedParticleSystems)
            for (const yb of Uy._particles) yb.position.set(yb.position.x - bb[0], yb.position.y - bb[1], yb.position.z - bb[2]);
          else {
            if (!Uy.worldOffset) throw new Error("Particle system has no world offset");
            Uy.worldOffset.x = -yb.lb.ub[0], Uy.worldOffset.y = -yb.lb.ub[1], Uy.worldOffset.z = -yb.lb.ub[2]
          }
        }))
      },
      linesFromArrays: function(yb, bb, Wy) {
        const Uy = new Py.b(bb, yb.Pf, null, void 0, void 0, !1);
        return (0, rb.e)(bb, Wy, yb.Pf, Uy), Uy
      },
      Bf: fb,
      QBy: function(yb, bb) {
        return Cb.origin.Coy(bb.origin), Cb.direction.Coy(bb.direction), Cb.length = bb.length, Cb.epsilon = bb.epsilon, Cb.QBy(yb, !1, void 0, !1, void 0, !0).pickedPoint
      }
    }
  },
  40074: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ey,
      e: () => cb,
      i: () => Zy,
      j: () => oy
    });
    var Uy = Wy(35917),
      hy = Wy(37380),
      fy = Wy(37374);

    function Zy(yb, bb, Wy, Uy) {
      const hy = fy.u;
      bb.fill(0), yb.gravity.toArray(bb, hy.gravity), yb.colorDead.toArray(bb, hy.colorDead), Wy[hy.ramp] = yb.useRampGradients ? 1 : 0;
      const Zy = yb.getColorGradients(),
        cb = ey(yb, Zy, "colour", Uy);
      Wy[hy.colorCount] = cb;
      for (let fy = 0; fy < cb; fy++) {
        var Py;
        const yb = Zy[qb(Zy, fy)];
        bb[hy.colorPositions + fy] = yb.gradient, yb.color1.toArray(bb, hy.color1 + 4 * fy), (null !== (Py = yb.color2) && void 0 !== Py ? Py : yb.color1).toArray(bb, hy.color2 + 4 * fy)
      }
      const oy = yb.getVelocityGradients(),
        By = ey(yb, oy, "nZ", Uy);
      Wy[hy.velocityCount] = By;
      for (let fy = 0; fy < By; fy++) mb(bb, hy.nZ + 4 * fy, oy[qb(oy, fy)]);
      const Ky = yb.useRampGradients ? yb.getColorRemapGradients() : null,
        sy = ey(yb, Ky, "colour remap", Uy);
      Wy[hy.remapCount] = sy;
      for (let fy = 0; fy < sy; fy++) mb(bb, hy.remap + 4 * fy, Ky[qb(Ky, fy)])
    }

    function cb() {
      return {
        key: [],
        texels: new Uint8Array(4 * fy.m)
      }
    }
    const Py = [];

    function oy(yb, bb) {
      return By(yb, Py), !ly(Py, bb.key) && (bb.key.length = 0, bb.key.push(...Py), bb.key.length > 0 && function(yb, bb) {
        for (let Wy = 0; Wy < fy.m; Wy++) hy.i.GetCurrentGradient(Wy / fy.m, yb, ((yb, bb, Wy) => {
          Uy.Color3.LerpToRef(yb.color, bb.color, Wy, Ky)
        })), bb[4 * Wy] = 255 * Ky.r, bb[4 * Wy + 1] = 255 * Ky.g, bb[4 * Wy + 2] = 255 * Ky.b, bb[4 * Wy + 3] = 255
      }(yb.getRampGradients(), bb.texels), !0)
    }

    function By(yb, bb) {
      bb.length = 0;
      const Wy = yb.useRampGradients ? yb.getRampGradients() : null;
      if (null !== Wy && void 0 !== Wy && Wy.length) {
        bb.push(Wy.length);
        for (const yb of Wy) bb.push(yb.gradient, yb.color.r, yb.color.g, yb.color.b)
      }
    }
    const Ky = new Uy.Color3;

    function ey(yb, bb, Wy, Uy) {
      return bb ? bb.length > fy.c ? (Uy(`particleStops:${Wy}`, `GPU particles use the first 2 and last ${fy.c-2} of more than ${fy.c} ${Wy} gradient stops (${yb.name})`), fy.c) : bb.length : 0
    }

    function qb(yb, bb) {
      return bb < 2 || yb.length <= fy.c ? bb : yb.length - fy.c + bb
    }
    const sy = new Float32Array(fy.q),
      Sy = new Uint32Array(sy.buffer);

    function Ey(yb, bb, Wy) {
      return Zy(yb, sy, Sy, Wy), bb && ly(Sy, bb) ? null : Sy.slice()
    }

    function ly(yb, bb) {
      if (yb.length !== bb.length) return !1;
      for (let Wy = 0; Wy < yb.length; Wy++)
        if (yb[Wy] !== bb[Wy]) return !1;
      return !0
    }

    function mb(yb, bb, Wy) {
      var Uy;
      yb[bb] = Wy.gradient, yb[bb + 1] = Wy.factor1, yb[bb + 2] = null !== (Uy = Wy.factor2) && void 0 !== Uy ? Uy : Wy.factor1
    }
  },
  40066: (yb, bb, Wy) => {
    function Uy() {
      let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      const bb = new Set;
      return (Wy, Uy) => {
        bb.has(Wy) || (bb.add(Wy), console.warn(yb + Uy))
      }
    }
    Wy.d(bb, {
      e: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);