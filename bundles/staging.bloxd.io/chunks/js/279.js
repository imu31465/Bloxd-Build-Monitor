export const id = 279;
export const ids = [279];
export const modules = {
  40429: (RR, JR, GR) => {
    function yR(RR) {
      return void 0 === RR ? void 0 : [RR[0], RR[1], RR[2]]
    }

    function tR(RR) {
      const JR = RR.particles;
      return {
        opts: {
          texture: JR.texture,
          hK: JR.hK,
          minLifeTime: JR.minLifeTime,
          maxLifeTime: JR.maxLifeTime,
          minSize: JR.minSize,
          maxSize: JR.maxSize,
          minEmitPower: JR.minEmitPower,
          maxEmitPower: JR.maxEmitPower,
          emitRate: JR.emitRate,
          gravity: yR(JR.gravity),
          dir1: yR(JR.dir1),
          dir2: yR(JR.dir2),
          colorGradients: JR.colorGradients,
          blendMode: JR.blendMode
        },
        half: [JR.width / 2, JR.height / 2, JR.depth / 2]
      }
    }
    GR.d(JR, {
      c: () => tR
    })
  },
  40393: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => fR,
      e: () => iR,
      i: () => ZR
    });
    var yR = GR(216);
    const tR = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      uR = "PetRoot";
    let ZR = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      qR = tR;
    new Map, new Map;

    function iR(RR) {
      var JR;
      return null !== (JR = (0, yR.b)(ZR, RR)) && void 0 !== JR ? JR : null
    }

    function fR(RR) {
      var JR;
      return null !== (JR = (0, yR.b)(qR, RR)) && void 0 !== JR ? JR : null
    }
  },
  40432: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      c: () => tR,
      g: () => uR
    });
    class yR {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.BL = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(RR) {
        var JR;
        const {
          feet: GR,
          heading: yR,
          tuning: ZR
        } = RR, qR = Math.min(Math.max(RR.dt, 0), .1), {
          pose: iR,
          BL: fR,
          target: VR
        } = this;
        if (this.started && qR > 0) {
          const RR = Math.hypot(GR[0] - this.lastFeet[0], GR[1] - this.lastFeet[1], GR[2] - this.lastFeet[2]);
          this.speed += (RR / qR - this.speed) * Math.min(qR / .15, 1)
        }
        this.lastFeet[0] = GR[0], this.lastFeet[1] = GR[1], this.lastFeet[2] = GR[2], this.stillS = this.speed > .3 ? 0 : this.stillS + qR;
        const KR = this.stillS >= .6 ? "perched" : "flying";
        "flying" === KR && "perched" === iR.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += qR, iR.mode = KR;
        const wR = Math.sin(yR),
          rR = Math.cos(yR);
        "perched" === KR ? (uR(VR, GR, ZR.perchOffset, wR, rR), VR[1] += RR.headTopY - GR[1]) : (uR(VR, GR, ZR.followOffset, wR, rR), VR[1] += tR(ZR, RR.timeS));
        const {
          pos: eR
        } = iR, aR = Math.hypot(VR[0] - eR[0], VR[1] - eR[1], VR[2] - eR[2]);
        if (!this.started || aR > 8 || "perched" === KR && (this.perchLocked || aR < .05)) this.perchLocked = this.started && "perched" === KR, eR[0] = VR[0], eR[1] = VR[1], eR[2] = VR[2], fR[0] = fR[1] = fR[2] = 0;
        else {
          const RR = ZR.followStiffness;
          for (let JR = 0; JR < 3; JR++) fR[JR] += (RR * RR * (VR[JR] - eR[JR]) - 2 * RR * fR[JR]) * qR, eR[JR] += fR[JR] * qR
        }
        const LR = yR + ZR.yawOffset;
        var nR;
        return this.started ? iR.yaw += ((nR = LR - iR.yaw) - 2 * Math.PI * Math.round(nR / (2 * Math.PI))) * Math.min(8 * qR, 1) : iR.yaw = LR, this.started = !0, iR.seated = "perched" === KR && this.perchLocked, iR.clip = null === (JR = ZR.clips) || void 0 === JR ? void 0 : JR[this.rG(KR)], iR
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      rG(RR) {
        return "perched" === RR ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function tR(RR, JR) {
      return RR.bobAmplitude * Math.sin(2 * Math.PI * RR.bobHz * JR)
    }

    function uR(RR, JR, GR, yR, tR) {
      const [uR, ZR, qR] = GR;
      RR[0] = JR[0] + uR * tR + qR * yR, RR[1] = JR[1] + ZR, RR[2] = JR[2] - uR * yR + qR * tR
    }
  },
  40402: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(38195),
      tR = GR(39020);

    function uR(RR, JR) {
      var GR;
      RR.blendMode = JR.blendMode, RR.minLifeTime = JR.minLifeTime, RR.maxLifeTime = JR.maxLifeTime, RR.minSize = JR.minSize, RR.maxSize = JR.maxSize, RR.minEmitPower = JR.minEmitPower, RR.maxEmitPower = JR.maxEmitPower;
      const uR = null !== (GR = JR.gravity) && void 0 !== GR ? GR : [0, 0, 0];
      RR.gravity = new yR.Fe(uR[0], uR[1], uR[2]);
      for (const yR of JR.colorGradients) RR.addColorGradient(yR.timeFraction, (0, tR.k)(yR.minColor), yR.maxColor ? (0, tR.k)(yR.maxColor) : void 0)
    }
  },
  39961: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => AR,
      h: () => MR,
      k: () => XR,
      l: () => lR,
      n: () => pR,
      o: () => WR
    });
    var yR = GR(359),
      tR = GR(39974),
      uR = GR(3928),
      ZR = GR(3933),
      qR = GR(39964),
      iR = GR(39971),
      fR = GR(25),
      VR = GR(112),
      KR = GR(4044),
      wR = GR(103),
      rR = GR(132),
      eR = GR(46),
      aR = GR(327),
      LR = GR(4928),
      nR = GR(123);
    const UR = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function WR(RR) {
      var JR;
      const GR = null !== (JR = VR.currentUrl.getSearchParam(RR)) && void 0 !== JR ? JR : eR.i.getItem(RR);
      return null === GR || void 0 === GR || "" === GR ? null : "0" !== GR && "false" !== GR && !1 !== GR && 0 !== GR
    }
    async function AR(RR, JR) {
      (0, uR.x)(null);
      const GR = (0, ZR.m)((0, ZR.l)(JR.useWebGpu, !0));
      (0, wR.setWebGpuRequested)("lite" === GR.requested && (0, wR.getWebGpuSupported)());
      const qR = (0, ZR.g)(GR.source);
      null !== qR && console.info(`Renderer: ${GR.requested} from ${qR}`), null !== GR.fallbackReason && console.warn(`Renderer: ${GR.fallbackReason}`);
      let VR = GR.fallbackReason;
      if ("webgl2" !== GR.choice) {
        const qR = await async function(RR, JR, GR, ZR) {
          const qR = await (0, wR.probeWebGpuAdapter)();
          if ("usable" !== qR) return (0, wR.setWebGpuFallbackReason)(qR), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (GR && !0 !== eR.i.getItem(yR.jc)) {
            if (!0 === eR.i.getItem(nR.J)) return (0, wR.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), nR.c;
            if (await (0, aR.k)(), (0, aR.d)()) return (0, wR.setWebGpuFallbackReason)("few_wasm_memories"), console.info("This tab fits too few wasm memories for WebGPU, rendering with WebGL."), aR.c
          }
          let VR = "load_failed";
          try {
            const {
              create: GR
            } = await (0, uR.o)(ZR).load();
            VR = "start_failed";
            const yR = fR.d.antiAliasingOnWebGpuAdapter((0, rR.k)()),
              tR = (0, iR.g)(RR),
              qR = (0, iR.e)(tR, {
                size: RR => (0, KR.j)(tR, RR)
              });
            return await GR(RR, {
              xyR: yR,
              sceneDepth: JR.sceneDepth,
              sunShadow: JR.sunShadow,
              bufferSize: qR
            })
          } catch (LR) {
            const RR = (0, tR.e)(LR);
            (0, wR.setWebGpuFallbackReason)(RR ? UR[RR] : VR);
            const JR = null === LR || void 0 === LR ? void 0 : LR.fallbackReason;
            return "string" === typeof JR ? (console.warn(`Lite could not start, falling back to WebGL: ${String(LR)}`), JR) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", LR), "it failed to start (see the console)")
          }
        }(RR, JR, "setting" === GR.source, GR.choice);
        if ("lite" === GR.choice && eR.i.setItem(nR.w, "string" === typeof qR), "string" !== typeof qR) return fR.d.followGameGpu((0, rR.k)()), (0, wR.setWebGpuFallbackReason)("none"), (0, ZR.p)(GR), (0, uR.x)(qR), {
          lite: qR
        };
        VR = (0, ZR.c)(GR.choice, [qR]), RR.replaceWith(RR.cloneNode(!1))
      } else "lite" === GR.requested ? (0, wR.setWebGpuFallbackReason)("load_failed") : "default" === GR.source && JR.webGpuDefaultOffReason ? (0, wR.setWebGpuFallbackReason)(JR.webGpuDefaultOffReason) : (0, wR.setWebGpuFallbackReason)("not_requested");
      return (0, ZR.p)({
        ...GR,
        choice: "webgl2",
        fallbackReason: VR
      }), fR.d.followGameGpu(null), {
        lite: null
      }
    }

    function CR() {
      return Promise.all([GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(298), GR.e(292), GR.e(293), GR.e(277), GR.e(0)]).then((() => GR(53540)))
    }
    async function XR() {
      return (await CR()).createSceneParticleSystem
    }
    async function MR() {
      Promise.all([GR.e(289), GR.e(621)]).then((() => GR(53623))).then((RR => {
        RR.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [RR, JR] = await Promise.all([CR(), Promise.all([GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(298), GR.e(292), GR.e(293), GR.e(277), GR.e(0)]).then((() => GR(53641))), Promise.all([GR.e(289), GR.e(290), GR.e(287), GR.e(297), GR.e(291), GR.e(296), GR.e(294), GR.e(286), GR.e(299), GR.e(311), GR.e(298), GR.e(292), GR.e(293), GR.e(277), GR.e(0)]).then((() => GR(42663)))]);
      return (0, qR.g)(JR.SkyMaterial), RR.default
    }

    function BR(RR) {
      return "lite" === (0, ZR.m)((0, ZR.l)(RR, !1)).choice && (0, wR.getWebGpuSupported)() && !eR.i.getItem(nR.w)
    }

    function lR(RR) {
      BR(RR) || MR().catch((RR => {
        console.warn("Failed to prefetch noa's Babylon backend.", RR)
      }))
    }

    function pR(RR) {
      (0, LR.e)((() => {
        BR(RR) ? (0, uR.k)().load().catch((RR => {
          console.warn("Failed to prefetch the Lite renderer.", RR)
        })) : lR(RR)
      }))
    }
  },
  39971: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => qR,
      g: () => ZR
    });
    var yR = GR(25),
      tR = GR(35085),
      uR = GR(4044);

    function ZR(RR) {
      var JR;
      return null !== (JR = RR.parentElement) && void 0 !== JR ? JR : RR
    }

    function qR(RR, JR) {
      if (RR.clientWidth <= 0 || RR.clientHeight <= 0 || tR.c.isHeld()) return null;
      const GR = (0, uR.l)(),
        [ZR, qR] = JR.size(GR);
      return (0, uR.n)(ZR, qR, GR, yR.d.get("clientEscMenuOptions").pixelScale)
    }
  },
  40112: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR,
      f: () => tR
    });
    const yR = 2.2;

    function tR(RR) {
      let JR = 0;
      return RR > 5 && (JR = .12 * Math.min(RR - 5, 15), RR > 20 && (JR += .01 * (RR - 20))), 1.4 + JR
    }
  },
  40105: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      d: () => qR,
      h: () => uR,
      k: () => rR,
      n: () => iR,
      o: () => VR,
      p: () => fR,
      r: () => wR
    });
    var yR = GR(38195),
      tR = GR(38496);
    const uR = 0,
      ZR = 1,
      qR = 18;

    function iR(RR) {
      return !1 !== RR && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
    }

    function fR(RR, JR) {
      return null !== RR && void 0 !== RR ? RR : JR
    }

    function VR(RR, JR, GR) {
      return JR && !GR ? Math.max(1, RR / qR) : 1
    }
    const KR = new WeakMap;

    function wR(RR, JR, GR, tR) {
      const uR = RR.zC.vGR(GR),
        ZR = uR.offset;
      ZR[0] = ZR[1] = ZR[2] = 0;
      const qR = RR.zC.vGR(JR);
      if (tR || !qR || !uR.mesh.isEnabled() || !uR.mesh.isVisible) return 1;
      const iR = RR.zC.f6(GR).B_,
        fR = RR.camera.l_(),
        VR = RR.camera.S_(),
        wR = fR[0] - iR[0],
        rR = fR[1] - iR[1],
        eR = fR[2] - iR[2];
      if (-(VR[0] * wR + VR[1] * rR + VR[2] * eR) <= 0 || Math.hypot(wR, rR, eR) < .1) return 1;
      const aR = RR.lK.jH().getFrameId();
      let LR = KR.get(qR);
      if (LR || (LR = {
          frame: -1,
          minimum: new yR.Fe,
          maximum: new yR.Fe,
          valid: !1
        }, KR.set(qR, LR)), LR.frame !== aR)
        if (LR.frame = aR, qR.SyR) LR.valid = RR.lK.RP.getObjectBounds(qR.JI, LR.minimum, LR.maximum);
        else {
          LR.minimum.NRR(1 / 0), LR.maximum.NRR(-1 / 0), LR.valid = !1;
          const RR = [qR.mesh, ...qR.mesh.getChildMeshes(!1)];
          for (const JR of RR) {
            if (!("getTotalVertices" in JR) || !JR.isEnabled() || !JR.isVisible || !JR.getTotalVertices()) continue;
            JR.computeWorldMatrix();
            const RR = JR.Tm().boundingBox;
            LR.minimum.minimizeInPlace(RR.minimumWorld), LR.maximum.maximizeInPlace(RR.maximumWorld), LR.valid = !0
          }
        } if (!LR.valid) return 1;
      const nR = function(RR, JR, GR, yR, tR) {
        const uR = JR[0] - RR[0],
          ZR = JR[1] - RR[1],
          qR = JR[2] - RR[2],
          iR = Math.hypot(uR, ZR, qR),
          fR = -(tR[0] * uR + tR[1] * ZR + tR[2] * qR);
        if (iR < .1 || fR <= 0) return 0;
        const VR = (Math.abs(tR[0]) * (yR.x - GR.x) + Math.abs(tR[1]) * (yR.y - GR.y) + Math.abs(tR[2]) * (yR.z - GR.z)) / 2,
          KR = -(tR[0] * ((GR.x + yR.x) / 2 - RR[0]) + tR[1] * ((GR.y + yR.y) / 2 - RR[1]) + tR[2] * ((GR.z + yR.z) / 2 - RR[2]));
        return Math.max(0, Math.min((KR + VR + .01) / fR, 2 * VR / fR, 1 - .1 / fR))
      }(iR, fR, LR.minimum, LR.maximum, RR.camera.S_());
      for (let yR = 0; yR < 3; yR++) ZR[yR] = (fR[yR] - iR[yR]) * nR;
      return 1 - nR
    }

    function rR(RR, JR) {
      const {
        mesh: GR,
        offset: yR
      } = RR.zC.vGR(JR), uR = RR.zC.f6(JR).B_, ZR = uR[0] + yR[0], qR = uR[1] + yR[1], iR = uR[2] + yR[2];
      (0, tR.i)(GR, ZR, qR, iR)
    }
  },
  39964: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      g: () => qR,
      h: () => iR
    });
    var yR = GR(38489),
      tR = GR(38382);
    const uR = new Set;
    let ZR = null;

    function qR(RR) {
      ZR = RR
    }

    function iR(RR) {
      if (!ZR) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new ZR("sky", RR)
    }

    function fR(RR, JR, GR) {
      if (!(0, yR.d)(RR)) return void RR.material.forceCompilation(RR, JR);
      const ZR = () => {
        if (RR.oB()) return void uR.delete(RR);
        const yR = (0, tR.bb)(RR.material);
        if (![null === yR || void 0 === yR ? void 0 : yR.diffuseTexture, null === yR || void 0 === yR ? void 0 : yR.opacityTexture, null === yR || void 0 === yR ? void 0 : yR.emissiveTexture, null === yR || void 0 === yR ? void 0 : yR.reflectionTexture].every((RR => !RR || GR.prepareTexture(RR)))) return uR.add(RR), void setTimeout(ZR, 16);
        uR.delete(RR), JR()
      };
      ZR()
    }
  },
  40103: (RR, JR, GR) => {
    GR.d(JR, {
      B: () => jR,
      D: () => GJ,
      F: () => KJ,
      b: () => mR,
      c: () => cR,
      e: () => TR,
      g: () => SR,
      k: () => VJ,
      n: () => uJ,
      r: () => tJ,
      u: () => zR,
      y: () => QR
    });
    var yR = GR(1270),
      tR = GR(1343),
      uR = GR(359),
      ZR = GR(1479),
      qR = GR(5281),
      iR = GR(5303),
      fR = GR(2435),
      VR = GR(38406),
      KR = GR(38397),
      wR = GR(39055),
      rR = GR(38682),
      eR = GR(38550),
      aR = GR(38325),
      LR = GR(40105),
      nR = GR(39094),
      UR = GR(39917),
      WR = GR(38371),
      AR = GR(38466),
      CR = GR(679),
      XR = GR(1351),
      MR = GR(2137),
      BR = GR(2242),
      lR = GR(4428),
      pR = GR(4422),
      gR = GR(2194),
      bR = GR(25),
      vR = GR(10178),
      OR = GR(5254),
      xR = GR(5290),
      NR = GR(5292),
      DR = GR(37278);
    const HR = Object.create(null),
      oR = Object.create(null),
      cR = {
        DEFAULT_FONT_SIZE: 47,
        DEFAULT_SUBTITLE_FONT_SIZE: 30,
        HORIZONTAL_PADDING: 30,
        VERTICAL_PADDING: 22,
        TEXT_SHADOW_WIDTH: 2,
        TEXT_PLANE_RATIO: .2 / 64,
        LINE_SPACING: 8,
        ICON_PADDING: 6,
        ANIMATE_IN_DELAY: 40,
        EFFECT_ICON_SIZE: 70
      },
      PR = {
        text: RR => `bolder ${RR}px 'Jetbrains Mono'`
      },
      IR = 41,
      mR = {
        icon: BR.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function zR(RR, JR) {
      return RR.flatMap((RR => {
        var GR;
        if ("object" === typeof RR && "chatTag" in RR) return [RR];
        if (dR(RR)) return [RR];
        if ((0, uR.sb)(RR)) return [{
          str: ""
        }];
        if ((0, uR.rb)(RR)) {
          const GR = (0, vR.e)(RR.action);
          if (GR) {
            var ZR;
            const yR = RR.style;
            return [{
              icon: (0, vR.g)(GR),
              style: {
                fontSize: null !== (ZR = null === yR || void 0 === yR ? void 0 : yR.fontSize) && void 0 !== ZR ? ZR : `${JR}px`,
                opacity: null === yR || void 0 === yR ? void 0 : yR.opacity
              }
            }]
          }
          const yR = (0, gR.q)(RR.action, bR.d.get("isTouchScreen")),
            tR = (0, gR.n)(RR.action);
          null === yR && null === tR && console.warn(`No key binding found for action: ${RR.action}`), RR = {
            str: null !== yR && void 0 !== yR ? yR : (0, gR.m)(tR),
            style: RR.style
          }
        }
        let qR;
        return qR = "string" !== typeof RR && "str" in RR ? RR : {
            str: RR
          }, null !== (GR = qR.style) && void 0 !== GR && GR.fontSize ? qR.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : qR.style ? qR.style.fontSize = `${JR}px` : qR.style = {
            fontSize: `${JR}px`
          },
          function(RR) {
            if ("object" !== typeof RR.str || !("translationKey" in RR.str)) return [RR];
            const JR = tR.g.get().getCurrentLanguageCode(),
              GR = (0, yR.o)(RR.str.params, MR.e.shown),
              uR = (0, yR.u)(JR, RR.str.translationKey, GR);
            if (uR.every((RR => "string" === typeof RR))) return [RR];
            return uR.map((JR => "string" === typeof JR ? {
              str: JR,
              style: RR.style
            } : {
              icon: JR.icon,
              style: {
                fontSize: RR.style.fontSize,
                opacity: RR.style.opacity
              }
            }))
          }(qR)
      }))
    }

    function SR(RR) {
      const JR = Object.keys(RR).length;
      return {
        width: cR.EFFECT_ICON_SIZE * JR,
        height: JR > 0 ? cR.EFFECT_ICON_SIZE : 0
      }
    }

    function jR(RR) {
      return RR && void 0 !== RR.str
    }

    function dR(RR) {
      return RR && "object" === typeof RR && "icon" in RR && !("mainRGB" in RR)
    }

    function ER(RR) {
      return RR && "object" === typeof RR && "mainRGB" in RR
    }

    function YR(RR) {
      var JR, GR;
      const yR = null !== (JR = jR(RR) ? null === (GR = RR.style) || void 0 === GR ? void 0 : GR.fontSize : void 0) && void 0 !== JR ? JR : `${cR.DEFAULT_FONT_SIZE}px`;
      return PR.text(Number(yR.replace("px", "")))
    }

    function kR(RR) {
      var JR;
      const GR = null !== (JR = Object.hasOwn(DR.c, RR) ? DR.c[RR] : null) && void 0 !== JR ? JR : (0, ZR.c)(RR, (0, ZR.j)(RR));
      return GR || console.warn(`Unknown rank icon "${RR}" \u2014 not in the bundled Font Awesome subset.`), GR
    }

    function QR(RR) {
      return ER(RR) ? "" : FR(RR)
    }

    function FR(RR) {
      if (!jR(RR)) return "";
      if ("string" === typeof RR.str) return RR.str;
      if ("translationKey" in RR.str) {
        const JR = tR.g.get().getCurrentLanguageCode(),
          GR = (0, yR.o)(RR.str.params, MR.e.shown);
        return (0, yR.w)(JR, RR.str.translationKey, GR)
      }
      return "entityName" in RR.str ? (0, XR.e)(RR.str.entityName, MR.e.shown) : ""
    }

    function TR(RR, JR) {
      if ((0, CR.I)(RR) || 0 === RR.length) return {
        width: 0,
        height: 0,
        sizeCache: []
      };
      let GR = 0;
      for (const ZR of RR) {
        const RR = fJ(ZR);
        GR = Math.max(GR, RR)
      }
      const yR = GR + cR.VERTICAL_PADDING,
        tR = [];
      let uR = 0;
      uR += RJ(void 0, RR[0]);
      for (let ZR = 0; ZR < RR.length; ZR++) {
        const GR = RR[ZR],
          yR = {
            x: uR,
            width: 0
          };
        uR += sR(GR, JR), uR += RJ(GR, RR[ZR + 1]), yR.width = uR - yR.x, tR.push(yR)
      }
      return {
        width: uR,
        height: yR,
        sizeCache: tR
      }
    }

    function sR(RR, JR) {
      if (dR(RR)) return fJ(RR);
      if (ER(RR)) return function(RR) {
        const JR = kR(RR);
        if (!JR) return IR;
        const [GR, yR] = JR.icon;
        return IR * (GR / yR)
      }(RR.icon) + cR.HORIZONTAL_PADDING;
      const GR = YR(RR);
      return function(RR, JR, GR) {
        return GR.font = JR, GR.measureText(RR).width
      }(FR(RR), GR, JR)
    }

    function hR(RR) {
      return jR(RR) || dR(RR)
    }

    function RJ(RR, JR) {
      const GR = hR(RR),
        yR = hR(JR);
      return void 0 === RR && !yR || !GR && void 0 === JR ? 0 : GR !== yR ? .5 * cR.HORIZONTAL_PADDING : 0
    }
    let JJ;

    function GJ() {
      return JJ ??= document.createElement("canvas").getContext("2d"), JJ
    }
    const yJ = () => 0;

    function tJ(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yJ;
      JR += RJ(void 0, RR[0]);
      for (let ZR = 0; ZR < RR.length; ZR++) {
        const qR = RR[ZR],
          iR = uJ(qR, JR, GR, yR, tR, void 0, uR);
        JR += 0 === iR ? 0 : iR + RJ(qR, RR[ZR + 1])
      }
    }

    function uJ(RR, JR, GR, yR, tR, ZR) {
      var KR;
      let wR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : yJ;
      if (dR(RR)) {
        const yR = fJ(RR);
        return function(RR, JR, GR, yR, tR) {
          var uR;
          let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : yJ;
          const KR = (0, VR.j)(tR);
          GR += cR.VERTICAL_PADDING / 2;
          const wR = ZR(),
            rR = (0, vR.m)(RR.icon),
            eR = RR => {
              if (wR === ZR())
                if (KR.imageSmoothingEnabled = rR, rR && RR.width > RR.height) {
                  const tR = yR * RR.height / RR.width;
                  KR.drawImage(RR, JR, GR + (yR - tR) / 2, yR, tR)
                } else KR.drawImage(RR, JR, GR, yR, yR)
            };
          if (oR[RR.icon]) return void eR(oR[RR.icon]);
          if (HR[RR.icon]) {
            const JR = HR[RR.icon];
            if (JR.complete) return void eR(JR)
          }
          const aR = (0, OR.j)(RR.icon, yR);
          if (aR) return void eR(aR);
          const LR = function(RR) {
              const JR = (0, vR.k)(RR);
              if (null !== JR) return {
                url: JR,
                type: "padGlyph"
              };
              if (qR.c.includes(RR)) return {
                url: pR.b.getTexture(RR, lR.k.ICON).url,
                type: "ingameIcon"
              };
              {
                var GR;
                const JR = null === (GR = fR.k.itemsClient[RR]) || void 0 === GR ? void 0 : GR.type;
                return iJ.includes(JR) ? (console.error(new Error(`Invalid icon type ${JR} is not supported in nametags`).stack), {
                  url: "",
                  type: ""
                }) : (0, xR.b)(JR) ? {
                  url: "",
                  type: JR
                } : "GrayscaleArmour" === JR || iR.d[RR] ? {
                  url: (0, NR.g)(RR),
                  type: JR,
                  tint: (0, iR.f)(RR)
                } : {
                  url: (0, NR.g)(RR),
                  type: JR
                }
              }
            }(RR.icon),
            nR = LR.tint;
          let WR = LR.url;
          if ((0, xR.b)(null === (uR = fR.k.itemsClient[RR.icon]) || void 0 === uR ? void 0 : uR.type)) {
            const JR = RR.icon;
            if (!fR.k.itemsClient[JR].itemTexture) return void(0, OR.f)(JR, yR).then((RR => {
              eR(RR), (0, UR.l)(tR)
            }), (() => {}));
            WR = (0, NR.g)(JR)
          }
          if (!WR) return;
          const AR = new Image;
          rR && (AR.crossOrigin = "anonymous");
          if (AR.src = WR, nR) return void(AR.onload = () => {
            const JR = function(RR, JR) {
              let [GR, yR, tR] = JR;
              const uR = document.createElement("canvas");
              uR.width = RR.naturalWidth, uR.height = RR.naturalHeight;
              const ZR = uR.getContext("2d");
              return ZR.drawImage(RR, 0, 0), ZR.globalCompositeOperation = "multiply", ZR.fillStyle = `rgb(${GR}, ${yR}, ${tR})`, ZR.fillRect(0, 0, uR.width, uR.height), ZR.globalCompositeOperation = "destination-in", ZR.drawImage(RR, 0, 0), uR
            }(AR, nR);
            oR[RR.icon] = JR, eR(JR), (0, UR.l)(tR)
          });
          HR[RR.icon] = AR, AR.onload = () => {
            eR(AR), (0, UR.l)(tR)
          }
        }(RR, JR, GR, yR, tR, wR), yR
      }
      const rR = (0, VR.j)(tR);
      if (ER(RR)) {
        const tR = null !== ZR && void 0 !== ZR ? ZR : sR(RR, rR);
        return function(RR, JR, GR, yR, tR, uR) {
          var ZR, qR;
          uR.fillStyle = RR.mainRGB, uR.fillRect(JR, GR, yR, tR);
          const iR = kR(RR.icon);
          if (!iR) return;
          const fR = (null === (ZR = RR.nameTag) || void 0 === ZR ? void 0 : ZR.iconRGB) || "white",
            VR = (null === (qR = RR.nameTag) || void 0 === qR ? void 0 : qR.iconShadowRGB) || "black",
            [KR, wR, , , rR] = iR.icon,
            eR = "string" === typeof rR ? rR : rR.join(" "),
            aR = IR / wR,
            LR = JR + (yR - KR * aR) / 2,
            nR = GR + (tR - IR) / 2,
            UR = new Path2D(eR),
            WR = uR;
          for (const AR of [-1, 1])
            for (const RR of [-1, 1]) ZJ(WR, UR, LR + cR.TEXT_SHADOW_WIDTH * AR, nR + cR.TEXT_SHADOW_WIDTH * RR, aR, VR);
          ZJ(WR, UR, LR, nR, aR, fR)
        }(RR, JR, GR, tR, yR, rR), tR
      }
      const eR = FR(RR);
      if (0 === eR.length) return 0;
      const aR = YR(RR);
      rR.font = aR;
      const LR = null !== ZR && void 0 !== ZR ? ZR : sR(RR, rR),
        nR = jR(RR) && null !== (KR = (0, uR.Zb)(RR.style)) && void 0 !== KR ? KR : "white";
      let WR = GR + yR;
      return WR -= cR.VERTICAL_PADDING, WR += jR(RR) ? 5 : 0,
        function(RR, JR, GR, yR, tR, uR, ZR) {
          let qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : cR.TEXT_SHADOW_WIDTH;
          for (const iR of [-1, 1])
            for (const tR of [-1, 1]) qJ(ZR, RR, JR + qR * iR, GR + qR * tR, yR, uR);
          qJ(ZR, RR, JR, GR, yR, tR)
        }(eR, JR, WR, aR, nR, "black", rR), LR
    }

    function ZJ(RR, JR, GR, yR, tR, uR) {
      RR.save(), RR.translate(GR, yR), RR.scale(tR, tR), RR.fillStyle = uR, RR.fill(JR), RR.restore()
    }

    function qJ(RR, JR, GR, yR, tR, uR) {
      RR.font = tR, RR.fillStyle = uR, RR.fillText(JR, GR, yR)
    }
    const iJ = ["Gun"];

    function fJ(RR) {
      if (jR(RR) || dR(RR)) {
        var JR, GR;
        const yR = null !== (JR = null === (GR = RR.style) || void 0 === GR ? void 0 : GR.fontSize) && void 0 !== JR ? JR : `${cR.DEFAULT_FONT_SIZE}px`;
        return Number(yR.replace("px", "")) || cR.DEFAULT_FONT_SIZE
      }
      return cR.DEFAULT_FONT_SIZE
    }

    function VJ(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const ZR = RR.lK.jH(),
        qR = (0, UR.h)(RR, `${GR}Tex`, yR, tR, {
          mipped: KR.f.nearestLinearMipLinear,
          unmipped: KR.f.nearestLinearMipNearest
        }),
        iR = (0, wR.m)(RR.lK, GR, (0, rR.k)({
          width: 1,
          height: 1
        }));
      iR.metadata = new RR.lK.qL, iR.metadata[eR.C] = !0, iR.billboardMode = aR.d.BILLBOARDMODE_ALL, iR.renderingGroupId = LR.b;
      const fR = RR.zC.add([0, 0, 0], 1, 1, iR, [0, 0, 0]);
      let VR;
      RR.zC.Jm(fR, RR.zC.names.bC, {
        pe: JR
      });
      const {
        mirror: CR
      } = (0, WR.b)({
        name: `${GR}Mat`,
        tL: ZR,
        sets: {
          specularColor: [0, 0, 0],
          ambientColor: [1.3, 1.3, 1.3],
          emissiveColor: [1, 1, 1],
          ...(0, UR.i)(qR)
        },
        features: JR => {
          (0, UR.e)(JR, "planes"), VR = (0, AR.c)(JR, RR.lK, uR ? {
            x: 1,
            y: 1,
            z: 1,
            w: 1
          } : void 0)
        },
        unrendered: !0,
        freeze: !0
      });
      return iR.material = CR, uR ? RR.zC.vGR(fR).UiR = !1 : (0, nR.f)(iR), iR.YH.add((() => {
        CR.dispose(!1, !0)
      })), {
        planeEId: fR,
        plane: iR,
        texture: qR,
        lightState: VR
      }
    }

    function KJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const tR = (0, LR.n)(JR, GR, yR);
      return RR.renderingGroupId = tR ? LR.b : LR.h, tR
    }
  },
  39917: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => fR,
      h: () => ZR,
      i: () => iR,
      l: () => qR
    });
    var yR = GR(38406),
      tR = GR(38382),
      uR = GR(39922);

    function ZR(RR, JR, GR, tR, uR) {
      const ZR = function(RR) {
          return !RR.lK.engine.needPOTTextures
        }(RR),
        qR = ZR ? uR.mipped : uR.unmipped;
      return (0, yR.n)(RR.lK.jH(), JR, {
        width: GR,
        height: tR,
        mipmaps: ZR,
        samplingMode: qR,
        hasAlpha: !0
      })
    }

    function qR(RR) {
      (0, yR.Z)(RR, !0, !RR.sampler.noMipmap)
    }

    function iR(RR) {
      return {
        diffuseTexture: RR,
        useAlphaFromDiffuseTexture: !0,
        transparencyMode: tR.v.alphaTestAndBlend,
        alphaCutOff: .05,
        alphaMode: tR.e.premultiplied,
        forceDepthWrite: !0
      }
    }

    function fR(RR, JR) {
      RR.diffuseTexture.sampler.noMipmap || (0, tR.y)(RR, uR.f, {
        lodBias: uR.e[JR]
      })
    }
  },
  39974: (RR, JR, GR) => {
    function yR(RR, JR) {
      return "object" === typeof RR && null !== RR ? Object.assign(RR, {
        startStep: JR
      }) : RR
    }

    function tR(RR) {
      return "object" === typeof RR && null !== RR && "startStep" in RR ? RR.startStep : null
    }
    GR.d(JR, {
      e: () => tR,
      h: () => yR
    })
  },
  40042: (RR, JR, GR) => {
    var yR = {
      "./cape_cow_cream.png": 28783,
      "./cape_cow_normal.png": 28787,
      "./cape_creator_level1.png": 28794,
      "./cape_creator_level2.png": 28801,
      "./cape_creator_level3.png": 28803,
      "./cape_none.png": 28806,
      "./cape_pig.png": 28808,
      "./cape_sheep.png": 28813,
      "./cape_super.png": 28820,
      "./cape_super_inverted.png": 28826,
      "./cape_youtuber.png": 28829
    };

    function tR(RR) {
      var JR = uR(RR);
      return GR(JR)
    }

    function uR(RR) {
      if (!GR.o(yR, RR)) {
        var JR = new Error("Cannot find module '" + RR + "'");
        throw JR.code = "MODULE_NOT_FOUND", JR
      }
      return yR[RR]
    }
    tR.keys = function() {
      return Object.keys(yR)
    }, tR.resolve = uR, RR.exports = tR, tR.id = 40042
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);