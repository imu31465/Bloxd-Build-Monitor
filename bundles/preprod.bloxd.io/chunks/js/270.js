export const id = 270;
export const ids = [270];
export const modules = {
  39858: (MM, rM, iM) => {
    var OM = {
      "./cape_cow_cream.png": 28492,
      "./cape_cow_normal.png": 28499,
      "./cape_creator_level1.png": 28508,
      "./cape_creator_level2.png": 28515,
      "./cape_creator_level3.png": 28523,
      "./cape_none.png": 28531,
      "./cape_pig.png": 28533,
      "./cape_sheep.png": 28538,
      "./cape_super.png": 28544,
      "./cape_super_inverted.png": 28553,
      "./cape_youtuber.png": 28560
    };

    function SM(MM) {
      var rM = jM(MM);
      return iM(rM)
    }

    function jM(MM) {
      if (!iM.o(OM, MM)) {
        var rM = new Error("Cannot find module '" + MM + "'");
        throw rM.code = "MODULE_NOT_FOUND", rM
      }
      return OM[MM]
    }
    SM.keys = function() {
      return Object.keys(OM)
    }, SM.resolve = jM, MM.exports = SM, SM.id = 39858
  },
  40219: (MM, rM, iM) => {
    function OM(MM) {
      return void 0 === MM ? void 0 : [MM[0], MM[1], MM[2]]
    }

    function SM(MM) {
      const rM = MM.particles;
      return {
        opts: {
          texture: rM.texture,
          vL: rM.vL,
          minLifeTime: rM.minLifeTime,
          maxLifeTime: rM.maxLifeTime,
          minSize: rM.minSize,
          maxSize: rM.maxSize,
          minEmitPower: rM.minEmitPower,
          maxEmitPower: rM.maxEmitPower,
          emitRate: rM.emitRate,
          gravity: OM(rM.gravity),
          dir1: OM(rM.dir1),
          dir2: OM(rM.dir2),
          colorGradients: rM.colorGradients,
          blendMode: rM.blendMode
        },
        half: [rM.width / 2, rM.height / 2, rM.depth / 2]
      }
    }
    iM.d(rM, {
      b: () => SM
    })
  },
  40186: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      h: () => QM,
      k: () => nM,
      m: () => aM
    });
    var OM = iM(187);
    const SM = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      jM = "PetRoot";
    let aM = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      PM = SM;
    new Map, new Map;

    function nM(MM) {
      var rM;
      return null !== (rM = (0, OM.d)(aM, MM)) && void 0 !== rM ? rM : null
    }

    function QM(MM) {
      var rM;
      return null !== (rM = (0, OM.d)(PM, MM)) && void 0 !== rM ? rM : null
    }
  },
  40222: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      g: () => SM,
      j: () => jM
    });
    class OM {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.dd = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(MM) {
        var rM;
        const {
          feet: iM,
          heading: OM,
          tuning: aM
        } = MM, PM = Math.min(Math.max(MM.dt, 0), .1), {
          pose: nM,
          dd: QM,
          target: zM
        } = this;
        if (this.started && PM > 0) {
          const MM = Math.hypot(iM[0] - this.lastFeet[0], iM[1] - this.lastFeet[1], iM[2] - this.lastFeet[2]);
          this.speed += (MM / PM - this.speed) * Math.min(PM / .15, 1)
        }
        this.lastFeet[0] = iM[0], this.lastFeet[1] = iM[1], this.lastFeet[2] = iM[2], this.stillS = this.speed > .3 ? 0 : this.stillS + PM;
        const LM = this.stillS >= .6 ? "perched" : "flying";
        "flying" === LM && "perched" === nM.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += PM, nM.mode = LM;
        const mM = Math.sin(OM),
          HM = Math.cos(OM);
        "perched" === LM ? (jM(zM, iM, aM.perchOffset, mM, HM), zM[1] += MM.headTopY - iM[1]) : (jM(zM, iM, aM.followOffset, mM, HM), zM[1] += SM(aM, MM.timeS));
        const {
          pos: hM
        } = nM, JM = Math.hypot(zM[0] - hM[0], zM[1] - hM[1], zM[2] - hM[2]);
        if (!this.started || JM > 8 || "perched" === LM && (this.perchLocked || JM < .05)) this.perchLocked = this.started && "perched" === LM, hM[0] = zM[0], hM[1] = zM[1], hM[2] = zM[2], QM[0] = QM[1] = QM[2] = 0;
        else {
          const MM = aM.followStiffness;
          for (let rM = 0; rM < 3; rM++) QM[rM] += (MM * MM * (zM[rM] - hM[rM]) - 2 * MM * QM[rM]) * PM, hM[rM] += QM[rM] * PM
        }
        const dM = OM + aM.yawOffset;
        var yM;
        return this.started ? nM.yaw += ((yM = dM - nM.yaw) - 2 * Math.PI * Math.round(yM / (2 * Math.PI))) * Math.min(8 * PM, 1) : nM.yaw = dM, this.started = !0, nM.seated = "perched" === LM && this.perchLocked, nM.clip = null === (rM = aM.clips) || void 0 === rM ? void 0 : rM[this.HS(LM)], nM
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      HS(MM) {
        return "perched" === MM ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function SM(MM, rM) {
      return MM.bobAmplitude * Math.sin(2 * Math.PI * MM.bobHz * rM)
    }

    function jM(MM, rM, iM, OM, SM) {
      const [jM, aM, PM] = iM;
      MM[0] = rM[0] + jM * SM + PM * OM, MM[1] = rM[1] + aM, MM[2] = rM[2] - jM * OM + PM * SM
    }
  },
  40192: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => jM
    });
    var OM = iM(38034),
      SM = iM(38839);

    function jM(MM, rM) {
      var iM;
      MM.blendMode = rM.blendMode, MM.minLifeTime = rM.minLifeTime, MM.maxLifeTime = rM.maxLifeTime, MM.minSize = rM.minSize, MM.maxSize = rM.maxSize, MM.minEmitPower = rM.minEmitPower, MM.maxEmitPower = rM.maxEmitPower;
      const jM = null !== (iM = rM.gravity) && void 0 !== iM ? iM : [0, 0, 0];
      MM.gravity = new OM.sh(jM[0], jM[1], jM[2]);
      for (const OM of rM.colorGradients) MM.addColorGradient(OM.timeFraction, (0, SM.i)(OM.minColor), OM.maxColor ? (0, SM.i)(OM.maxColor) : void 0)
    }
  },
  39774: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => EM,
      e: () => CM,
      h: () => GM,
      k: () => bM,
      o: () => wM,
      r: () => lM
    });
    var OM = iM(313),
      SM = iM(39794),
      jM = iM(3076),
      aM = iM(3085),
      PM = iM(39781),
      nM = iM(39788),
      QM = iM(19),
      zM = iM(94),
      LM = iM(3230),
      mM = iM(83),
      HM = iM(114),
      hM = iM(30),
      JM = iM(2562),
      dM = iM(106);
    const yM = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function lM(MM) {
      var rM;
      const iM = null !== (rM = zM.currentUrl.getSearchParam(MM)) && void 0 !== rM ? rM : hM.g.getItem(MM);
      return null === iM || void 0 === iM || "" === iM ? null : "0" !== iM && "false" !== iM && !1 !== iM && 0 !== iM
    }
    async function EM(MM, rM) {
      (0, jM.D)(null);
      const iM = (0, aM.n)((0, aM.k)(rM.useWebGpu, !0));
      (0, mM.setWebGpuRequested)("lite" === iM.requested && (0, mM.getWebGpuSupported)());
      const PM = (0, aM.f)(iM.source);
      null !== PM && console.info(`Renderer: ${iM.requested} from ${PM}`), null !== iM.fallbackReason && console.warn(`Renderer: ${iM.fallbackReason}`);
      let zM = iM.fallbackReason;
      if ("webgl2" !== iM.choice) {
        const PM = await async function(MM, rM, iM, aM) {
          const PM = await (0, mM.probeWebGpuAdapter)();
          if ("usable" !== PM) return (0, mM.setWebGpuFallbackReason)(PM), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (iM && !0 === hM.g.getItem(dM.N) && !0 !== hM.g.getItem(OM.fc)) return (0, mM.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), dM.e;
          let zM = "load_failed";
          try {
            const {
              create: iM
            } = await (0, jM.v)(aM).load();
            zM = "start_failed";
            const OM = QM.d.antiAliasingOnWebGpuAdapter((0, HM.k)()),
              SM = (0, nM.e)(MM),
              PM = (0, nM.b)(SM, {
                size: MM => (0, LM.k)(SM, MM)
              });
            return await iM(MM, {
              biM: OM,
              sceneDepth: rM.sceneDepth,
              sunShadow: rM.sunShadow,
              bufferSize: PM
            })
          } catch (JM) {
            const MM = (0, SM.d)(JM);
            (0, mM.setWebGpuFallbackReason)(MM ? yM[MM] : zM);
            const rM = null === JM || void 0 === JM ? void 0 : JM.fallbackReason;
            return "string" === typeof rM ? (console.warn(`Lite could not start, falling back to WebGL: ${String(JM)}`), rM) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", JM), "it failed to start (see the console)")
          }
        }(MM, rM, "setting" === iM.source, iM.choice);
        if ("lite" === iM.choice && hM.g.setItem(dM.v, "string" === typeof PM), "string" !== typeof PM) return QM.d.followGameGpu((0, HM.k)()), (0, mM.setWebGpuFallbackReason)("none"), (0, aM.o)(iM), (0, jM.D)(PM), {
          lite: PM
        };
        zM = (0, aM.b)(iM.choice, [PM]), MM.replaceWith(MM.cloneNode(!1))
      } else "lite" === iM.requested ? (0, mM.setWebGpuFallbackReason)("load_failed") : "default" === iM.source && rM.webGpuDefaultOffReason ? (0, mM.setWebGpuFallbackReason)(rM.webGpuDefaultOffReason) : (0, mM.setWebGpuFallbackReason)("not_requested");
      return (0, aM.o)({
        ...iM,
        choice: "webgl2",
        fallbackReason: zM
      }), QM.d.followGameGpu(null), {
        lite: null
      }
    }

    function UM() {
      return Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44202)))
    }
    async function GM() {
      return (await UM()).createSceneParticleSystem
    }
    async function CM() {
      Promise.all([iM.e(279), iM.e(612)]).then((() => iM(44294))).then((MM => {
        MM.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [MM, rM] = await Promise.all([UM(), Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44304))), Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(42227)))]);
      return (0, PM.h)(rM.SkyMaterial), MM.default
    }

    function eM(MM) {
      return "lite" === (0, aM.n)((0, aM.k)(MM, !1)).choice && (0, mM.getWebGpuSupported)() && !hM.g.getItem(dM.v)
    }

    function bM(MM) {
      eM(MM) || CM().catch((MM => {
        console.warn("Failed to prefetch noa's Babylon backend.", MM)
      }))
    }

    function wM(MM) {
      (0, JM.f)((() => {
        eM(MM) ? (0, jM.s)().load().catch((MM => {
          console.warn("Failed to prefetch the Lite renderer.", MM)
        })) : bM(MM)
      }))
    }
  },
  39788: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => PM,
      e: () => aM
    });
    var OM = iM(19),
      SM = iM(34971),
      jM = iM(3230);

    function aM(MM) {
      var rM;
      return null !== (rM = MM.parentElement) && void 0 !== rM ? rM : MM
    }

    function PM(MM, rM) {
      if (MM.clientWidth <= 0 || MM.clientHeight <= 0 || SM.c.isHeld()) return null;
      const iM = (0, jM.o)(),
        [aM, PM] = rM.size(iM);
      return (0, jM.t)(aM, PM, iM, OM.d.get("clientEscMenuOptions").pixelScale)
    }
  },
  42285: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      openCharacterPreview: () => Qr
    });
    var OM = iM(39083),
      SM = iM(3063),
      jM = iM(605),
      aM = iM(38111),
      PM = iM(2367),
      nM = iM(38097),
      QM = iM(40931),
      zM = iM(41190),
      LM = iM(42190),
      mM = iM(38034),
      HM = iM(41358),
      hM = iM(38167),
      JM = iM(41374),
      dM = iM(42248),
      yM = iM(38025),
      lM = iM(1229),
      EM = iM(2362),
      UM = iM(38128),
      GM = iM(38490);
    class CM {
      constructor(MM, rM) {
        this.pose = MM, this.nodes = void 0, this.nodes = MM.boneNames.map((MM => rM.get(MM)))
      }
      write(MM) {
        this.pose.pose(MM), (0, GM.q)(this.pose, this.nodes)
      }
    }

    function eM(MM) {
      MM.unfreezeWorldMatrix();
      for (const rM of MM.getChildren()) eM(rM)
    }
    async function bM(MM, rM, iM, OM) {
      let {
        keepTransforms: SM,
        backFaceCulling: jM
      } = OM;
      const aM = await (0, UM.i)(rM, MM),
        PM = (0, UM.b)(null !== iM && void 0 !== iM ? iM : rM, MM, void 0, jM);
      (0, UM.k)(aM, PM, {
        keepTransforms: SM,
        backFaceCulling: jM,
        onProcessedMesh: rM => {
          MM.JOM(rM, !1), rM.isVisible = !1
        }
      });
      for (const nM of aM.rootNodes) eM(nM);
      return aM
    }

    function wM(MM, rM) {
      MM.isVisible = rM;
      for (const iM of MM.getChildMeshes()) iM.isVisible = rM
    }
    class tM {
      constructor(MM, rM, iM) {
        this.YJ = MM, this.thinInstMgr = rM, this.Zk = iM, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(MM, rM, iM) {
        const OM = (0, UM.f)(MM, rM);
        return OM in this.modelCache || (this.modelCache[OM] = (async () => {
          try {
            const OM = await bM(this.YJ, MM, rM, {
                keepTransforms: void 0 !== iM,
                backFaceCulling: !1
              }),
              SM = new Map;
            for (const MM of OM.getNodes()) SM.set(MM.name, MM);
            const jM = void 0 === iM ? null : (0, GM.m)(iM, (MM => {
              const rM = SM.get(MM);
              return rM ? (0, GM.i)(rM) : null
            }));
            return {
              nodesByName: SM,
              bones: null === jM ? null : new CM(jM, SM)
            }
          } catch (SM) {
            throw delete this.modelCache[OM], console.error(`Failed to load preview attachment ${OM}:`, SM), SM
          }
        })()), this.modelCache[OM]
      }
      async update(MM, rM) {
        var iM;
        const {
          thinInstMgr: OM,
          Zk: SM
        } = this;
        this.cosmeticNames[MM] = rM;
        const jM = this.attachmentsByType[MM];
        if (jM)
          for (const {
              mesh: PM,
              destNode: nM,
              bones: QM
            }
            of jM) {
            null !== QM && (0, lM.mb)(this.shownBones, QM), wM(PM, !1);
            const MM = OM.getNamedNode(SM, nM);
            OM.detachTransformNodeIfFound(PM, SM, MM)
          }
        this.attachmentsByType[MM] = [];
        const aM = (0, EM.m)(MM, rM);
        if (null !== aM && void 0 !== aM && null !== (iM = aM.attachments) && void 0 !== iM && iM.length)
          for (const PM of aM.attachments) {
            let iM;
            try {
              iM = await this.loadModel(PM.modelGlb, PM.texture, PM.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[MM] !== rM) return;
            const jM = iM.nodesByName.get(PM.modelNode);
            if (!jM) {
              console.error(`Preview attachment node ${PM.modelNode} not found in ${PM.modelGlb}`);
              continue
            }
            wM(jM, !0), (0, UM.r)(jM, PM.overlayColour);
            const aM = OM.getNamedNode(SM, PM.destNode);
            OM.attachTransformNode(jM, SM, aM), this.attachmentsByType[MM].push({
              mesh: jM,
              destNode: PM.destNode,
              bones: iM.bones
            }), null !== iM.bones && this.shownBones.push(iM.bones)
          }
      }
      writePoses(MM) {
        for (const rM of this.shownBones) rM.write(MM)
      }
    }
    var gM = iM(42212),
      uM = iM(38233),
      RM = iM(39774),
      pM = iM(40186),
      WM = iM(40222),
      sM = iM(40219),
      DM = iM(40192),
      kM = iM(3563);
    const ZM = [0, 1, 0];
    class oM {
      constructor(MM) {
        this.node = MM, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const rM of MM.getChildTransformNodes()) this.nodesByName.set(rM.name, rM), this.rests.set(rM.name, (0, GM.i)(rM))
      }
      play(MM, rM) {
        const iM = this.clip(MM);
        iM && (iM.pose.pose(rM), (0, GM.q)(iM.pose, iM.nodes))
      }
      clip(MM) {
        let rM = this.clips.get(MM);
        if (void 0 === rM) {
          const iM = (0, GM.m)(MM, (MM => {
            var rM;
            return null !== (rM = this.rests.get(MM)) && void 0 !== rM ? rM : null
          }));
          rM = iM && {
            pose: iM,
            nodes: iM.boneNames.map((MM => this.nodesByName.get(MM)))
          }, this.clips.set(MM, rM)
        }
        return rM
      }
    }

    function fM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new mM.sh(MM[0] * rM, MM[1] * rM, MM[2] * rM)
    }
    class YM {
      constructor(MM, rM) {
        this.YJ = MM, this.scale = rM, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(MM) {
        var rM;
        this.petName = MM, null === (rM = this.shownPet) || void 0 === rM || rM.node.kR(!1), this.shownPet = null;
        const iM = (0, pM.k)(MM);
        if (!iM) return;
        let OM;
        try {
          OM = await this.petNode(iM.model)
        } catch {
          return
        }
        this.petName === MM && (OM.node.kR(!0), this.shownPet = OM)
      }
      setAura(MM) {
        const rM = (0, pM.h)(MM);
        return MM === this.auraName && rM === this.auraTuning || (this.auraName = MM, this.auraTuning = rM, this.auraDrawn = this.showAura(MM, rM)), this.auraDrawn
      }
      async showAura(MM, rM) {
        var iM, OM, SM;
        const jM = ++this.auraSeq;
        if (null === (iM = this.aura) || void 0 === iM || iM.dispose(!1), this.aura = null, !rM) return;
        const aM = await (0, RM.h)().catch((rM => (console.error(`Couldn't load the preview's particles for ${MM}:`, rM), null)));
        if (!aM || jM !== this.auraSeq) return;
        const {
          scale: PM
        } = this, {
          opts: nM,
          half: QM
        } = (0, sM.b)(rM), zM = aM(this.YJ, `aura|${MM}`, nM.vL), LM = this.particleTexture(rM.particles.texture);
        zM.texture = LM, (0, DM.c)(zM, {
          ...nM,
          minSize: nM.minSize * PM,
          maxSize: nM.maxSize * PM,
          minEmitPower: nM.minEmitPower * PM,
          maxEmitPower: nM.maxEmitPower * PM,
          gravity: nM.gravity && [nM.gravity[0] * PM, nM.gravity[1] * PM, nM.gravity[2] * PM]
        }), zM.emitRate = nM.emitRate, zM.createBoxEmitter(fM(null !== (OM = nM.dir1) && void 0 !== OM ? OM : ZM), fM(null !== (SM = nM.dir2) && void 0 !== SM ? SM : ZM), fM(QM, -PM), fM(QM, PM));
        const [HM, hM, JM] = rM.offset;
        zM.emitter = new mM.sh(HM * PM, (hM - 1) * PM, JM * PM), zM.start(), this.aura = zM;
        const dM = LM.mirror;
        dM.isReady() || dM.loadingError || await new Promise((rM => {
          dM.onLoadObservable.addOnce((() => {
            rM()
          })), dM.getInternalTexture().onErrorObservable.addOnce((iM => {
            let {
              message: OM
            } = iM;
            console.error(`Preview aura ${MM}'s texture failed to load: ${OM}`), rM()
          }))
        }))
      }
      writePose(MM) {
        var rM;
        if (!this.shownPet) return;
        const iM = (0, pM.k)(this.petName),
          {
            scale: OM
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, iM);
        const [SM, jM, aM] = iM.followOffset, {
          node: PM
        } = this.shownPet;
        PM.position.set(SM * OM, (jM + (0, WM.g)(iM, MM) - 1) * OM, aM * OM), PM.rotation.y = iM.yawOffset, PM.UL.P_(iM.scale * OM), null !== (rM = iM.clips) && void 0 !== rM && rM.fly && this.shownPet.play(iM.clips.fly, MM)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(MM, rM) {
        var iM, OM, SM;
        const {
          node: jM
        } = MM;
        jM.position.P_(0), jM.rotation.y = rM.yawOffset, jM.UL.P_(1);
        const aM = null !== (iM = null === (OM = rM.clips) || void 0 === OM ? void 0 : OM.perch) && void 0 !== iM ? iM : null === (SM = rM.clips) || void 0 === SM ? void 0 : SM.fly;
        aM && MM.play(aM, 0);
        const {
          min: PM,
          max: nM
        } = jM.getHierarchyBoundingVectors(!0), QM = 2 * this.scale / (nM.y - PM.y);
        jM.UL.P_(QM), jM.position.set(-(PM.x + nM.x) / 2 * QM, -(PM.y + nM.y) / 2 * QM, -(PM.z + nM.z) / 2 * QM)
      }
      petNode(MM) {
        let rM = this.petNodes.get(MM);
        return rM || (rM = bM(this.YJ, MM, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((rM => {
          const iM = new gM.e(`pet|${MM}`, this.YJ);
          iM.kR(!1);
          for (const MM of rM.rootNodes) MM.parent = iM, wM(MM, !0);
          return new oM(iM)
        }), (rM => {
          throw this.petNodes.delete(MM), console.error(`Failed to load preview pet ${MM}:`, rM), rM
        })), this.petNodes.set(MM, rM)), rM
      }
      particleTexture(MM) {
        let rM = this.particleTextures.get(MM);
        return rM || (rM = (0, uM.t)(this.YJ, (0, kM.f)(MM)), this.particleTextures.set(MM, rM)), rM
      }
    }
    var NM = iM(38122),
      AM = (iM(42220), iM(41564), iM(42227), iM(35055)),
      xM = iM(42291);
    let vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr;
    const rr = document.createElement("canvas");
    async function ir() {
      await new Promise((MM => {
        setTimeout((() => {
          MM()
        }), 100)
      }))
    }
    rr.classList.add("CharCustomisationPreviewCanvas");
    const Or = {};

    function Sr(MM, rM) {
      if (!XM) return;
      const aM = (0, SM.f)();
      if (aM.OW(!1), OM.b.Player.meshApi.updatePlayerCosmetic(aM.eD, qM, MM, rM, !0), "cape" === MM)
        if (rM === jM.g) IM.kR(!1);
        else {
          IM.kR(!0);
          IM.material.diffuseTexture = new dM.c(iM(39858)(`./cape_${rM}.png`), IM.Hk(), {
            invertY: !1,
            samplingMode: dM.c.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === MM ? Or.pet = cM.setPet(rM) : "aura" === MM ? Or.aura = cM.setAura(rM) : Or[MM] = VM.update(MM, rM)
    }

    function jr(MM, rM) {
      const [iM, OM] = (0, xM.d)(MM, rM, window.devicePixelRatio);
      vM.setSize(Math.max(iM, Math.floor(MM)), Math.max(OM, Math.floor(rM)))
    }
    let ar = 0;
    class Pr {
      constructor(MM, rM) {
        this.framing = rM, this.ready = Mr, this.dev = {
          canvas: () => rr,
          isolateHead(MM) {
            const rM = KM.getNodeNames(qM);
            for (let iM = 0; iM < rM.length; iM++) "HeadMesh" !== rM[iM] && "__root__" !== rM[iM] && "TorsoNode" !== rM[iM] && KM.setNodeEnabled(qM, iM, !1);
            if (MM) {
              const MM = KM.getNamedNode(qM, "HeadMesh");
              KM.setNodeDisableColorWrite(qM, MM, !0, (MM => {
                const rM = new JM.StandardMaterial(`${MM.name}_depthOnly`, MM.Hk());
                return rM.disableColorWrite = !0, rM
              }))
            }
            KM.setPosition(qM, 0, -12, 0), Sr("pet", "pet_none"), Sr("aura", "aura_none")
          },
          isolatePet() {
            const MM = KM.getNodeNames(qM).length;
            for (let rM = 0; rM < MM; rM++) KM.setNodeEnabled(qM, rM, !1);
            IM.kR(!1), Sr("aura", "aura_none"), cM.isolatePet()
          }
        }, this.closed = !1, this.resetCamera();
        const iM = MM.getBoundingClientRect();
        jr(iM.width, iM.height), ar++, vM.stopRenderLoop(), vM.runRenderLoop((() => {
          var MM, rM, iM;
          null === (MM = TM) || void 0 === MM || MM.render(vM.getDeltaTime());
          const OM = performance.now() / 1e3;
          null === (rM = VM) || void 0 === rM || rM.writePoses(OM), null === (iM = cM) || void 0 === iM || iM.writePose(OM), BM.render()
        }))
      }
      isReady() {
        return !!XM
      }
      setCosmetic(MM, rM) {
        Sr(MM, rM)
      }
      playEmote(MM) {
        if (!TM) return;
        if (!MM) return void TM.stopAnimation(nM.e.Emote);
        const rM = (0, aM.f)((0, PM.e)(MM).animation);
        TM.startAnimation(rM, nM.e.Emote, 0, PM.b)
      }
      async untilDrawn(MM) {
        if (await ir(), "cape" === MM && IM) {
          const MM = IM.material,
            rM = null === MM || void 0 === MM ? void 0 : MM.diffuseTexture;
          rM && !rM.isReady() && (await new Promise((MM => {
            rM.onLoadObservable.addOnce((() => {
              MM()
            }))
          })), await ir())
        }
        Or[MM] && (await Or[MM], await ir()), await BM.whenReadyAsync(), await new Promise((MM => {
          BM.onAfterRenderObservable.addOnce((() => {
            MM()
          }))
        }))
      }
      setOrbit(MM) {
        nr(MM)
      }
      resetCamera() {
        FM.inertialAlphaOffset = 0, FM.inertialBetaOffset = 0, FM.inertialRadiusOffset = 0, nr(AM.d[this.framing])
      }
      resize(MM, rM) {
        jr(MM, rM)
      }
      close() {
        this.closed || (this.closed = !0, ar--, 0 === ar && vM.stopRenderLoop())
      }
    }

    function nr(MM) {
      let {
        yaw: rM,
        pitch: iM,
        radius: OM,
        target: SM
      } = MM;
      FM.alpha = rM, FM.beta = iM, OM && (FM.radius = OM), SM && FM.target.set(SM[0], SM[1], SM[2])
    }

    function Qr(MM, rM) {
      return MM.appendChild(rr), vM || function() {
        vM = new QM.e(rr, !0, {
          preserveDrawingBuffer: !0
        });
        const MM = (0, SM.f)();
        vM.LOM = MM.CL.engine.LOM, BM = new zM.b(vM), BM.clearColor = new hM.d(0, 0, 0, 0), BM.ambientColor = new hM.Color3(1, 1, 1), FM = new LM.c("Td", 0, 0, 1, mM.sh.Zero(), BM), FM.attachControl(rr, !0), FM.panningSensibility = 0, Mr = (0, OM.u)("Player", BM, !0).then((rM => {
          XM = rM.meshApi, IM = rM.capeMesh, KM = MM.CL.Dk;
          const iM = 8.33;
          qM = (0, OM.i)("Player", iM, !0, !0), KM.setPosition(qM, 0, -8.33, 0);
          const SM = KM.getNamedNode(qM, "BodyMesh");
          KM.attachTransformNode(IM, qM, SM), KM.set(qM, "aOpacity", 1), KM.mY(qM, "aOpacity", 1), VM = new tM(BM, KM, qM), cM = new YM(BM, iM), TM = new yM.AnimatorState, TM.Cm = MM, TM.thinInstMgr = KM, TM.Zk = qM, TM.kiM = KM.lD(qM, 0), TM.modelLifeformType = "Player", TM.nodeNameAliases = (0, NM.e)("Player").nodeNameAliases;
          const jM = IM.aY().boundingBox;
          IM.position.y = ((24 - jM.maximum.y + jM.minimum.y) / 2 - 1 / 32) / iM, IM.position.z = -1 / iM, IM.rotationQuaternion = null;
          const aM = Math.PI / 18,
            PM = jM.maximum.y / iM;
          IM.rotation.x = aM;
          const nM = Math.cos(aM),
            QM = Math.sin(aM);
          IM.position.y += PM * (1 - nM) + 0 * QM, IM.position.z -= PM * QM + 0 * (1 - nM);
          const zM = new JM.StandardMaterial("capeMaterial", IM.Hk());
          IM.material = zM;
          const LM = new hM.Color3(1, 1, 1);
          zM.diffuseColor = new hM.Color3, zM.specularColor = new hM.Color3, zM.emissiveColor = new hM.Color3, zM.ambientColor = new hM.Color3, LM.scaleToRef(.43, zM.diffuseColor), LM.scaleToRef(1.75, zM.ambientColor), zM.freeze();
          const dM = new HM.e("light", new mM.sh(-.1, 1, -.3), BM);
          dM.diffuse = new hM.Color3(1, 1, 1), dM.specular = new hM.Color3(1, 1, 1), dM.groundColor = new hM.Color3(.5, .5, .5)
        }))
      }(), new Pr(MM, rM)
    }
  },
  39852: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => mM
    });
    var OM = iM(38181),
      SM = iM(38278),
      jM = iM(38310),
      aM = iM(38198),
      PM = iM(38188);

    function nM(MM) {
      return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, PM.B)(MM, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, PM.B)(MM, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function QM(MM, rM) {
      let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
      for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
      const OM = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,PM.B)(MM,"int","boneIdx",(0,PM.wb)(MM,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,PM.B)(MM,"vec3","bone",iM)}\n\t\t\t\t${(0,PM.B)(MM,"vec2","pivot",(0,PM.n)(MM,"vec2","0.0",`${(0,PM.Hb)(MM,"position")}.z`))}\n\t\t\t\t${(0,PM.Y)(MM)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${OM}));`:`positionUpdated.yz += ${OM};`}\n\t\t`
    }

    function zM(MM) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,PM.n)(MM,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const LM = {
        x: 0,
        y: 0,
        z: 0,
        cz(MM, rM) {
          return this.x = MM[rM], this.y = MM[rM + 1], this.z = MM[rM + 2], this
        }
      },
      mM = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (MM, rM) => ({
          ...(0, OM.b)("CAPE"),
          BLOXD_CAPE_BONES: `${MM}`,
          BLOXD_CAPE_MAX_Y: (0, SM.xb)(rM)
        }),
        getUniforms(MM) {
          return (0, jM.d)(function(MM) {
            const rM = [];
            for (let iM = 0; iM < MM; iM++) rM.push({
              name: `skele${iM}`,
              type: "highp vec3"
            });
            return rM
          }(this.skeleLen), "vertex", MM)
        },
        bind(MM) {
          for (let rM = 0; rM < this.skeleLen; rM++) MM.updateVector3(`skele${rM}`, LM.cz(this.skele, 3 * rM))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(MM, rM) {
          return "vertex" !== MM ? null : {
            CUSTOM_VERTEX_DEFINITIONS: nM(rM),
            CUSTOM_VERTEX_UPDATE_POSITION: QM(rM, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: zM(rM)
          }
        }
      };
    (0, aM.l)(mM)
  },
  39720: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => zM,
      d: () => LM
    });
    var OM = iM(38181),
      SM = iM(38310),
      jM = iM(38188),
      aM = iM(38198);
    const PM = "bloxdTextLodBias",
      nM = [{
        name: PM,
        type: "float"
      }],
      QM = "bloxdTextSample",
      zM = {
        planes: -.5,
        boards: -.5
      },
      LM = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, OM.b)("TEXT_SAMPLER"),
        getUniforms: MM => (0, SM.d)(nM, "fragment", MM),
        bind(MM) {
          MM.updateFloat(PM, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(MM, rM) {
          if ("fragment" !== MM) return null;
          const iM = (0, jM.K)(rM, `vec4 ${QM}(sampler2D s, vec2 uv, float bias)`, `fn ${QM}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            OM = (0, jM.K)(rM, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            SM = `${(0,jM.U)(rM,"vDiffuseUV")} + uvOffset`,
            aM = (0, jM.K)(rM, `${QM}(diffuseSampler, ${SM}, ${(0,jM.Db)(rM,PM)})`, `${QM}(diffuseSampler, diffuseSamplerSampler, ${SM}, ${(0,jM.Db)(rM,PM)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${iM} {\n\t\t\t\t\t${(0,jM.B)(rM,"vec4","texel",OM)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,jM.n)(rM,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,jM.n)(rM,"vec3","0.0")}, ${(0,jM.n)(rM,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, jM.E)(rM)]: `baseColor = ${aM};`
          }
        }
      };
    (0, aM.l)(LM)
  },
  42227: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      CapeMaterialPlugin: () => UM,
      HueTintMaterialPlugin: () => GM,
      LifeformMaterialPlugin: () => CM,
      OverlayMaterialPlugin: () => eM
    });
    var OM = iM(42233),
      SM = iM(38984);
    class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
    var aM = iM(38275);
    class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
    var nM = iM(38832);
    class QM extends((0, OM.i)(nM.e)) {}(0, OM.m)(nM.e, QM);
    var zM = iM(38298),
      LM = iM(41374),
      mM = iM(38294);
    class HM extends((0, OM.i)(mM.e)) {
      constructor(MM, rM, iM) {
        super(MM, rM, iM), (0, zM.k)(MM)
      }
      dispose(MM) {
        (0, zM.m)(this._material), super.dispose(MM)
      }
    }(0, OM.m)(mM.e, HM), (0, mM.f)({
      disableUnusedSpecularTerm: OM.e,
      isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
    });
    var hM = iM(39720);
    class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
    var dM = iM(39852),
      yM = iM(38178),
      lM = iM(39126),
      EM = iM(38287);
    class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
    class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
    class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
    class eM extends((0, OM.i)(EM.c)) {}(0, OM.m)(EM.c, eM)
  },
  39781: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => QM,
      h: () => PM,
      j: () => nM
    });
    var OM = iM(38316),
      SM = iM(38217);
    const jM = new Set;
    let aM = null;

    function PM(MM) {
      aM = MM
    }

    function nM(MM) {
      if (!aM) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new aM("sky", MM)
    }

    function QM(MM, rM, iM) {
      if (!(0, OM.f)(MM)) return void MM.material.forceCompilation(MM, rM);
      const aM = () => {
        if (MM.xG()) return void jM.delete(MM);
        const OM = (0, SM.Y)(MM.material);
        if (![null === OM || void 0 === OM ? void 0 : OM.diffuseTexture, null === OM || void 0 === OM ? void 0 : OM.opacityTexture, null === OM || void 0 === OM ? void 0 : OM.emissiveTexture, null === OM || void 0 === OM ? void 0 : OM.reflectionTexture].every((MM => !MM || iM.prepareTexture(MM)))) return jM.add(MM), void setTimeout(aM, 16);
        jM.delete(MM), rM()
      };
      aM()
    }
  },
  42291: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM
    });
    const OM = 4e5,
      SM = 2;

    function jM(MM, rM, iM) {
      let [jM, aM] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [MM, rM], PM = Math.min(Number.isFinite(iM) && iM > 0 ? iM : 1, SM);
      const nM = Math.max(0, jM, MM) * Math.max(0, aM, rM) * PM * PM;
      return nM > OM && (PM *= Math.sqrt(OM / nM)), [Math.max(1, Math.floor(Math.max(0, MM) * PM)), Math.max(1, Math.floor(Math.max(0, rM) * PM))]
    }
  },
  42233: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => AM,
      i: () => lM,
      m: () => IM
    });
    var OM = iM(41374),
      SM = iM(42241),
      jM = iM(42283),
      aM = iM(42248),
      PM = iM(38797),
      nM = iM(38809),
      QM = iM(38815),
      zM = iM(38822),
      LM = iM(38227),
      mM = iM(38233),
      HM = iM(42256),
      hM = iM(38198),
      JM = iM(38217),
      dM = iM(38188);

    function yM(MM, rM) {
      return Object.assign((function(MM, iM, OM, SM) {
        return rM(this.featureState, MM, iM, OM, SM)
      }), {
        jL: MM
      })
    }

    function lM(MM) {
      const rM = class extends HM.d {
          constructor(rM, iM) {
            const OM = (0, JM.Y)(rM),
              SM = OM && (0, JM.v)(OM, MM.name);
            for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
            super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return MM.className
          }
          isCompatible(MM) {
            return MM === dM.b.GLSL || MM === dM.b.WGSL
          }
        },
        iM = (0, hM.i)(MM);
      for (const [OM, SM] of Object.entries(hM.d)) {
        const jM = MM[OM];
        if (jM) {
          const MM = iM[OM];
          Object.defineProperty(rM.prototype, SM, {
            value: yM(jM, MM),
            writable: !0,
            configurable: !0
          })
        }
      }
      return rM
    }
    class EM extends(lM(PM.b)) {}
    var UM = iM(40931),
      GM = iM(42260),
      CM = iM(42265);

    function eM(MM, rM, iM) {
      return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
        const {
          width: OM
        } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
          var SM;
          const jM = Math.round(MM.getSize().height / OM),
            aM = null === rM || void 0 === rM ? void 0 : rM[iM];
          return {
            pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
            layers: jM
          }
        })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
          let {
            pixels: rM,
            layers: SM
          } = MM;
          return {
            atlas: new GM.e(rM, OM, OM, SM, UM.e.TEXTUREFORMAT_RGBA, iM, !0, !1, aM.c.NEAREST_NEAREST_MIPLINEAR),
            layers: SM
          }
        }));
        return MM.forEach(((MM, rM) => {
          const OM = MM.getInternalTexture();
          bM.has(OM) || (! function(MM, rM) {
            const iM = rM.createRawTexture(new Uint8Array(4), 1, 1, UM.e.TEXTUREFORMAT_RGBA, !1, !1, aM.c.NEAREST_SAMPLINGMODE);
            MM._hardwareTexture.release(), rM.unbindAllTextures(), iM._swapAndDie(MM, !1)
          }(OM, iM.ph()), bM.set(OM, SM[rM].pixels))
        })), PM
      }(MM, rM.pixels, iM)))
    }
    const bM = new WeakMap;
    var wM = iM(38829);
    class tM extends(lM(nM.g)) {
      constructor(MM, rM) {
        super(MM, rM), this.loaded = new Set, this.mirrors = void 0, this.mirrors = rM.textures.map((MM => MM.mirror)), this.mirrors.forEach(((MM, rM) => {
          MM.onLoadObservable.add((MM => {
            this.setTextureArrayData(MM, rM).catch((MM => {
              console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
            }))
          }))
        })), (0, wM.j)(rM, MM.shaderLanguage)
      }
      async setTextureArrayData(MM, rM) {
        const iM = this.featureState,
          {
            width: OM,
            height: SM
          } = MM.getSize(),
          jM = this._material.shaderLanguage;
        if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
        if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
        const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
        (0, wM.c)(this._material, iM, aM, OM, jM)
      }
    }
    var gM = iM(42269),
      uM = iM(41410),
      RM = iM(38034),
      pM = iM(42278),
      WM = iM(41508),
      sM = iM(41400),
      DM = iM(42212),
      kM = iM(38457),
      ZM = iM(42280);
    class oM extends gM.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const fM = {
      Mesh: pM.d,
      TransformNode: DM.e,
      Vz: gM.b,
      VertexBuffer: gM.e,
      BoundingInfo: uM.d,
      sh: RM.sh,
      ArenaBuffer: oM,
      SubMesh: sM.e,
      VertexData: WM.d,
      MirroredGeometry: ZM.d,
      meshFromArrays: ZM.h,
      plainMeshFromArrays: ZM.k
    };
    (0, kM.g)(fM);
    var YM = iM(38298);
    class NM extends(lM(zM.j)) {
      constructor(MM, rM) {
        if (super(MM, rM), MM instanceof OM.StandardMaterial && rM.dirLightCount > 0) {
          const rM = MM,
            iM = rM._blockDirtyMechanism;
          rM._blockDirtyMechanism = !0, MM.disableLighting = !0, rM._blockDirtyMechanism = iM;
          const OM = (0, JM.Y)(MM);
          OM && (OM.disableLighting = !0, (0, JM.W)(OM))
        }(0, YM.k)(MM)
      }
      dispose(MM) {
        (0, YM.m)(this._material), super.dispose(MM)
      }
    }

    function AM(MM, rM) {
      if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
      const {
        r: iM,
        g: SM,
        b: jM
      } = rM.specularColor;
      0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
    }(0, zM.f)({
      disableUnusedSpecularTerm: AM
    });
    var xM = iM(38235),
      vM = iM(38467);
    const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
    class BM extends(lM(QM.g)) {
      constructor(MM, rM) {
        super(MM, rM), this.dh = !1, rM.ditherOnlyWhileFading && (vM.f.add(MM), this.prewarmDitherTwins(MM))
      }
      prewarmDitherTwins(MM) {
        const rM = new WeakSet;
        MM.onEffectCreatedObservable.add((iM => {
          let {
            effect: OM,
            subMesh: SM
          } = iM;
          if (this.featureState.prewarmingDither || rM.has(OM)) return;
          rM.add(OM);
          const jM = null === SM || void 0 === SM ? void 0 : SM.getMesh();
          jM && !FM.test(OM.defines) && MM.Hk().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(jM) || rM.delete(OM)
          }))
        }))
      }
      prewarmDither(MM) {
        if (this.dh || MM.xG()) return !1;
        const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(MM, rM)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== rM.effect
      }
      dispose(MM) {
        this.dh = !0, super.dispose(MM)
      }
    }
    const XM = new Map;

    function IM(MM, rM) {
      XM.set(MM, rM)
    }
    IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
      create: (MM, rM) => {
        const iM = new OM.StandardMaterial(MM.name, rM);
        return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
      },
      write: (MM, rM, iM) => {
        (0, xM.U)(MM.mirror, rM, iM)
      },
      addFeature: (MM, rM, iM) => {
        const OM = XM.get(rM.feature);
        if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
        new OM(MM.mirror, rM.state, ...iM)
      },
      texture: (MM, rM, iM) => {
        let {
          url: OM,
          noMipmap: SM,
          invertY: jM,
          samplingMode: PM,
          data: nM,
          sets: QM
        } = iM;
        if (!nM) {
          const iM = new aM.c(OM, rM, SM, jM, PM);
          return Object.assign(iM, QM), void(0, mM.F)(MM, iM)
        }
        const zM = {},
          LM = new Promise(((MM, rM) => {
            zM.onLoad = MM, zM.onError = (MM, iM) => {
              rM(new Error(`${nM.context}: ${(null===iM||void 0===iM?void 0:iM.message)||MM||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: HM,
            bytes: hM,
            label: JM
          } = nM,
          dM = {
            noMipmap: SM,
            invertY: !1,
            samplingMode: PM,
            ...zM,
            mimeType: HM,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yM = new aM.c(null, rM, dM);
        xM.w.set(yM, LM), Object.assign(yM, QM), yM.updateURL(OM, hM);
        const lM = yM.getInternalTexture();
        lM && (lM.label = JM), MM.uvSet = yM.coordinatesIndex, MM.matrix.set((0, xM.O)(yM)), (0, mM.F)(MM, yM)
      },
      cube: (MM, rM, iM) => {
        let {
          rootUrl: OM,
          files: jM,
          noMipmap: PM,
          luminance: nM
        } = iM;
        const {
          samplingMode: QM
        } = MM.sampler, zM = QM === (0, mM.y)(PM) ? null : () => {
          (0, xM.M)(LM, QM)
        }, LM = new SM.d(OM, rM, null, PM, jM, zM, null, (0, mM.v)(nM));
        LM.coordinatesMode = aM.c.SKYBOX_MODE, (0, mM.F)(MM, LM)
      },
      canvas: (MM, rM, iM) => {
        let {
          width: OM,
          height: SM,
          mipmaps: PM,
          samplingMode: nM,
          hasAlpha: QM = !1,
          wrap: zM = aM.c.CLAMP_ADDRESSMODE
        } = iM;
        const LM = new jM.b(rM, {
          width: OM,
          height: SM
        }, MM, PM, nM);
        LM.hasAlpha = QM, LM.wrapU = zM, LM.wrapV = zM;
        const mM = (0, xM.C)(LM);
        return (0, xM.F)(mM, LM), mM
      }
    })
  },
  42280: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      h: () => LM,
      k: () => mM
    });
    var OM = iM(42269),
      SM = iM(41167),
      jM = iM(41410),
      aM = iM(41512),
      PM = iM(42278),
      nM = iM(41508),
      QM = iM(38347);
    class zM extends aM.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (MM, rM) => {
          this.releaseUnlessInstanced(rM)
        }, this.onLinked = null
      }
      link(MM) {
        var rM;
        (0, QM.j)(MM), this.model = MM, null === (rM = this.onLinked) || void 0 === rM || rM.call(this, MM)
      }
      relink() {
        this.release();
        const MM = [];
        for (const SM of Object.values(this._vertexBuffers))
          if (!SM.getIsInstanced()) {
            const {
              byteOffset: rM,
              byteStride: iM,
              type: OM,
              normalized: jM
            } = SM;
            MM.push({
              kind: SM.getKind(),
              data: SM.getData(),
              offset: rM,
              stride: iM,
              components: SM.getSize(),
              glType: OM,
              isNormalized: jM
            })
          } const rM = this._indices.length ? this._indices : null,
          {
            minimum: iM,
            maximum: OM
          } = this.extend;
        this.link(new QM.e(MM, rM, this.getTotalVertices(), new Float64Array(iM.HOM()), new Float64Array(OM.HOM())))
      }
      copy(MM) {
        if (!this.model) return super.copy(MM);
        const rM = new zM(MM, this.Hk()),
          iM = this.hOM(void 0, !0);
        iM && rM.setIndices(iM);
        let aM = !1;
        for (const jM in this._vertexBuffers) {
          const MM = this._vertexBuffers[jM],
            iM = MM.getData();
          if (!iM) continue;
          const PM = MM.getSize(),
            {
              type: nM,
              byteOffset: QM,
              byteStride: zM,
              normalized: LM
            } = MM;
          aM ||= MM.isUpdatable();
          const mM = MM.getIsInstanced() ? (iM instanceof Array ? 4 * iM.length : iM.byteLength) / zM : this.getTotalVertices(),
            HM = (0, SM.r)(iM, PM, nM, QM, zM, mM, !0),
            hM = {
              updatable: MM.isUpdatable(),
              stride: PM,
              type: nM,
              normalized: LM,
              takeBufferOwnership: !0,
              instanced: MM.getIsInstanced()
            };
          rM.setVerticesBuffer(new OM.e(this.ph(), HM, jM, hM), mM)
        }
        return rM._updatable = aM, rM._boundingInfo = new jM.d(this.extend.minimum, this.extend.maximum), rM.relink(), rM
      }
      static mergeMeshes(MM, rM, iM, OM, SM, jM) {
        const nM = MM[0].Hk(),
          QM = new PM.d(MM[0].name + "_merged", nM),
          LM = new zM(aM.e.RandomId(), nM, void 0, !1, QM);
        try {
          if (!PM.d.MergeMeshes(MM, rM, iM, QM, SM, jM)) return QM.dispose(), null
        } catch (mM) {
          throw QM.dispose(), mM
        }
        return LM.relink(), QM
      }
      removeVerticesData(MM) {
        this.releaseUnlessInstanced(MM), super.removeVerticesData(MM)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(MM) {
        var rM;
        MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, QM.p)(this.model), this.model = null)
      }
    }

    function LM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
      const SM = (0, QM.i)(rM),
        {
          positions: jM,
          normals: LM,
          uvs: mM,
          indices: HM,
          named: hM = {}
        } = rM,
        JM = new nM.d;
      JM.positions = jM, JM.normals = null !== LM && void 0 !== LM ? LM : null, JM.uvs = null !== mM && void 0 !== mM ? mM : null, JM.indices = HM;
      const dM = new zM(aM.e.RandomId(), iM, JM, !1, OM);
      for (const {
          kind: aM,
          components: PM
        }
        of SM.vertexAttributes) aM in hM && OM.setVerticesData(aM, hM[aM], !1, PM);
      return dM.link(SM), OM
    }

    function mM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SM = new PM.d(MM, iM),
        {
          positions: jM,
          normals: aM,
          uvs: QM,
          indices: zM
        } = rM;
      return Object.assign(new nM.d, {
        positions: jM,
        normals: aM,
        uvs: QM,
        indices: zM
      }).applyToMesh(SM, OM), SM
    }
  },
  42265: (MM, rM, iM) => {
    function OM(MM, rM, iM) {
      const OM = rM * rM * 4,
        SM = MM[0].layers,
        jM = SM * (MM.length - 1) + MM[MM.length - 1].layers,
        aM = new Uint8Array(jM * OM);
      MM.forEach(((rM, iM) => {
        const jM = iM + 1 < MM.length ? Math.min(rM.layers, SM) : rM.layers;
        aM.set(new Uint8Array(rM.pixels.buffer, rM.pixels.byteOffset, jM * OM), iM * SM * OM)
      }));
      const PM = Math.max(1, Math.min(jM, iM || jM));
      if (PM === jM) return [{
        pixels: aM,
        layers: jM
      }];
      const nM = [];
      for (let QM = 0; QM < jM; QM += PM) {
        const MM = Math.min(jM, QM + PM);
        nM.push({
          pixels: aM.slice(QM * OM, MM * OM),
          layers: MM - QM
        })
      }
      return nM
    }
    iM.d(rM, {
      c: () => OM,
      f: () => jM
    });
    const SM = new WeakMap;

    function jM(MM, rM, iM) {
      var OM, jM;
      const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
      SM.set(MM, aM);
      const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
      aM.set(rM[0], PM);
      const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
      if (nM) return nM.built;
      const QM = {
        urls: [...rM],
        built: iM()
      };
      return PM.push(QM), QM.built.catch((() => {
        PM.splice(PM.indexOf(QM), 1)
      })), QM.built
    }
  },
  39794: (MM, rM, iM) => {
    function OM(MM, rM) {
      return "object" === typeof MM && null !== MM ? Object.assign(MM, {
        startStep: rM
      }) : MM
    }

    function SM(MM) {
      return "object" === typeof MM && null !== MM && "startStep" in MM ? MM.startStep : null
    }
    iM.d(rM, {
      d: () => SM,
      g: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);