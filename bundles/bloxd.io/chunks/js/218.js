export const id = 218;
export const ids = [218];
export const modules = {
  39500: (BB, OB, GB) => {
    var YB = {
      "./cape_cow_cream.png": 28523,
      "./cape_cow_normal.png": 28532,
      "./cape_creator_level1.png": 28538,
      "./cape_creator_level2.png": 28544,
      "./cape_creator_level3.png": 28552,
      "./cape_none.png": 28554,
      "./cape_pig.png": 28558,
      "./cape_sheep.png": 28564,
      "./cape_super.png": 28567,
      "./cape_super_inverted.png": 28570,
      "./cape_youtuber.png": 28573
    };

    function DB(BB) {
      var OB = QB(BB);
      return GB(OB)
    }

    function QB(BB) {
      if (!GB.o(YB, BB)) {
        var OB = new Error("Cannot find module '" + BB + "'");
        throw OB.code = "MODULE_NOT_FOUND", OB
      }
      return YB[BB]
    }
    DB.keys = function() {
      return Object.keys(YB)
    }, DB.resolve = QB, BB.exports = DB, DB.id = 39500
  },
  39860: (BB, OB, GB) => {
    function YB(BB) {
      return void 0 === BB ? void 0 : [BB[0], BB[1], BB[2]]
    }

    function DB(BB) {
      const OB = BB.particles;
      return {
        opts: {
          texture: OB.texture,
          CP: OB.CP,
          minLifeTime: OB.minLifeTime,
          maxLifeTime: OB.maxLifeTime,
          minSize: OB.minSize,
          maxSize: OB.maxSize,
          minEmitPower: OB.minEmitPower,
          maxEmitPower: OB.maxEmitPower,
          emitRate: OB.emitRate,
          gravity: YB(OB.gravity),
          dir1: YB(OB.dir1),
          dir2: YB(OB.dir2),
          colorGradients: OB.colorGradients,
          blendMode: OB.blendMode
        },
        half: [OB.width / 2, OB.height / 2, OB.depth / 2]
      }
    }
    GB.d(OB, {
      c: () => DB
    })
  },
  39836: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      d: () => JB,
      f: () => yB,
      g: () => oB
    });
    var YB = GB(204);
    const DB = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      QB = "PetRoot";
    let oB = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      jB = DB;
    new Map, new Map;

    function yB(BB) {
      var OB;
      return null !== (OB = (0, YB.c)(oB, BB)) && void 0 !== OB ? OB : null
    }

    function JB(BB) {
      var OB;
      return null !== (OB = (0, YB.c)(jB, BB)) && void 0 !== OB ? OB : null
    }
  },
  39869: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => DB,
      h: () => QB
    });
    class YB {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.lZ = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(BB) {
        var OB;
        const {
          feet: GB,
          heading: YB,
          tuning: oB
        } = BB, jB = Math.min(Math.max(BB.dt, 0), .1), {
          pose: yB,
          lZ: JB,
          target: MB
        } = this;
        if (this.started && jB > 0) {
          const BB = Math.hypot(GB[0] - this.lastFeet[0], GB[1] - this.lastFeet[1], GB[2] - this.lastFeet[2]);
          this.speed += (BB / jB - this.speed) * Math.min(jB / .15, 1)
        }
        this.lastFeet[0] = GB[0], this.lastFeet[1] = GB[1], this.lastFeet[2] = GB[2], this.stillS = this.speed > .3 ? 0 : this.stillS + jB;
        const PB = this.stillS >= .6 ? "perched" : "flying";
        "flying" === PB && "perched" === yB.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += jB, yB.mode = PB;
        const zB = Math.sin(YB),
          lB = Math.cos(YB);
        "perched" === PB ? (QB(MB, GB, oB.perchOffset, zB, lB), MB[1] += BB.headTopY - GB[1]) : (QB(MB, GB, oB.followOffset, zB, lB), MB[1] += DB(oB, BB.timeS));
        const {
          pos: pB
        } = yB, qB = Math.hypot(MB[0] - pB[0], MB[1] - pB[1], MB[2] - pB[2]);
        if (!this.started || qB > 8 || "perched" === PB && (this.perchLocked || qB < .05)) this.perchLocked = this.started && "perched" === PB, pB[0] = MB[0], pB[1] = MB[1], pB[2] = MB[2], JB[0] = JB[1] = JB[2] = 0;
        else {
          const BB = oB.followStiffness;
          for (let OB = 0; OB < 3; OB++) JB[OB] += (BB * BB * (MB[OB] - pB[OB]) - 2 * BB * JB[OB]) * jB, pB[OB] += JB[OB] * jB
        }
        const ZB = YB + oB.yawOffset;
        var NB;
        return this.started ? yB.yaw += ((NB = ZB - yB.yaw) - 2 * Math.PI * Math.round(NB / (2 * Math.PI))) * Math.min(8 * jB, 1) : yB.yaw = ZB, this.started = !0, yB.seated = "perched" === PB && this.perchLocked, yB.clip = null === (OB = oB.clips) || void 0 === OB ? void 0 : OB[this.pG(PB)], yB
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      pG(BB) {
        return "perched" === BB ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function DB(BB, OB) {
      return BB.bobAmplitude * Math.sin(2 * Math.PI * BB.bobHz * OB)
    }

    function QB(BB, OB, GB, YB, DB) {
      const [QB, oB, jB] = GB;
      BB[0] = OB[0] + QB * DB + jB * YB, BB[1] = OB[1] + oB, BB[2] = OB[2] - QB * YB + jB * DB
    }
  },
  39840: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(37771),
      DB = GB(38545);

    function QB(BB, OB) {
      var GB;
      BB.blendMode = OB.blendMode, BB.minLifeTime = OB.minLifeTime, BB.maxLifeTime = OB.maxLifeTime, BB.minSize = OB.minSize, BB.maxSize = OB.maxSize, BB.minEmitPower = OB.minEmitPower, BB.maxEmitPower = OB.maxEmitPower;
      const QB = null !== (GB = OB.gravity) && void 0 !== GB ? GB : [0, 0, 0];
      BB.gravity = new YB.Xp(QB[0], QB[1], QB[2]);
      for (const YB of OB.colorGradients) BB.addColorGradient(YB.timeFraction, (0, DB.m)(YB.minColor), YB.maxColor ? (0, DB.m)(YB.maxColor) : void 0)
    }
  },
  39434: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => WB,
      f: () => SB,
      h: () => VB,
      i: () => UB,
      m: () => fB,
      o: () => RB
    });
    var YB = GB(331),
      DB = GB(39446),
      QB = GB(3097),
      oB = GB(3104),
      jB = GB(39437),
      yB = GB(39439),
      JB = GB(16),
      MB = GB(98),
      PB = GB(3249),
      zB = GB(92),
      lB = GB(118),
      pB = GB(31),
      qB = GB(4018),
      ZB = GB(113);
    const NB = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function RB(BB) {
      var OB;
      const GB = null !== (OB = MB.currentUrl.getSearchParam(BB)) && void 0 !== OB ? OB : pB.g.getItem(BB);
      return null === GB || void 0 === GB || "" === GB ? null : "0" !== GB && "false" !== GB && !1 !== GB && 0 !== GB
    }
    async function WB(BB, OB) {
      (0, QB.E)(null);
      const GB = (0, oB.m)((0, oB.i)(OB.useWebGpu, !0));
      (0, zB.setWebGpuRequested)("lite" === GB.requested && (0, zB.getWebGpuSupported)());
      const jB = (0, oB.d)(GB.source);
      null !== jB && console.info(`Renderer: ${GB.requested} from ${jB}`), null !== GB.fallbackReason && console.warn(`Renderer: ${GB.fallbackReason}`);
      let MB = GB.fallbackReason;
      if ("webgl2" !== GB.choice) {
        const jB = await async function(BB, OB, GB, oB) {
          const jB = await (0, zB.probeWebGpuAdapter)();
          if ("usable" !== jB) return (0, zB.setWebGpuFallbackReason)(jB), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (GB && !0 === pB.g.getItem(ZB.J) && !0 !== pB.g.getItem(YB.nc)) return (0, zB.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), ZB.c;
          let MB = "load_failed";
          try {
            const {
              create: GB
            } = await (0, QB.s)(oB).load();
            MB = "start_failed";
            const YB = JB.c.antiAliasingOnWebGpuAdapter((0, lB.m)()),
              DB = (0, yB.f)(BB),
              jB = (0, yB.e)(DB, {
                size: BB => (0, PB.m)(DB, BB)
              });
            return await GB(BB, {
              XYB: YB,
              sceneDepth: OB.sceneDepth,
              sunShadow: OB.sunShadow,
              bufferSize: jB
            })
          } catch (qB) {
            const BB = (0, DB.d)(qB);
            (0, zB.setWebGpuFallbackReason)(BB ? NB[BB] : MB);
            const OB = null === qB || void 0 === qB ? void 0 : qB.fallbackReason;
            return "string" === typeof OB ? (console.warn(`Lite could not start, falling back to WebGL: ${String(qB)}`), OB) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", qB), "it failed to start (see the console)")
          }
        }(BB, OB, "setting" === GB.source, GB.choice);
        if ("lite" === GB.choice && pB.g.setItem(ZB.v, "string" === typeof jB), "string" !== typeof jB) return JB.c.followGameGpu((0, lB.m)()), (0, zB.setWebGpuFallbackReason)("none"), (0, oB.q)(GB), (0, QB.E)(jB), {
          lite: jB
        };
        MB = (0, oB.c)(GB.choice, [jB]), BB.replaceWith(BB.cloneNode(!1))
      } else "lite" === GB.requested ? (0, zB.setWebGpuFallbackReason)("load_failed") : "default" === GB.source && OB.webGpuDefaultOffReason ? (0, zB.setWebGpuFallbackReason)(OB.webGpuDefaultOffReason) : (0, zB.setWebGpuFallbackReason)("not_requested");
      return (0, oB.q)({
        ...GB,
        choice: "webgl2",
        fallbackReason: MB
      }), JB.c.followGameGpu(null), {
        lite: null
      }
    }

    function AB() {
      return Promise.all([GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(293), GB.e(303), GB.e(292), GB.e(286), GB.e(287), GB.e(271), GB.e(0)]).then((() => GB(44687)))
    }
    async function VB() {
      return (await AB()).createSceneParticleSystem
    }
    async function SB() {
      Promise.all([GB.e(283), GB.e(612)]).then((() => GB(44758))).then((BB => {
        BB.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [BB, OB] = await Promise.all([AB(), Promise.all([GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(293), GB.e(303), GB.e(292), GB.e(286), GB.e(287), GB.e(271), GB.e(0)]).then((() => GB(44769))), Promise.all([GB.e(283), GB.e(284), GB.e(281), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(293), GB.e(303), GB.e(292), GB.e(286), GB.e(287), GB.e(271), GB.e(0)]).then((() => GB(42124)))]);
      return (0, jB.g)(OB.SkyMaterial), BB.default
    }

    function nB(BB) {
      return "lite" === (0, oB.m)((0, oB.i)(BB, !1)).choice && (0, zB.getWebGpuSupported)() && !pB.g.getItem(ZB.v)
    }

    function UB(BB) {
      nB(BB) || SB().catch((BB => {
        console.warn("Failed to prefetch noa's Babylon backend.", BB)
      }))
    }

    function fB(BB) {
      (0, qB.e)((() => {
        nB(BB) ? (0, QB.o)().load().catch((BB => {
          console.warn("Failed to prefetch the Lite renderer.", BB)
        })) : UB(BB)
      }))
    }
  },
  39439: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      f: () => oB
    });
    var YB = GB(16),
      DB = GB(34737),
      QB = GB(3249);

    function oB(BB) {
      var OB;
      return null !== (OB = BB.parentElement) && void 0 !== OB ? OB : BB
    }

    function jB(BB, OB) {
      if (BB.clientWidth <= 0 || BB.clientHeight <= 0 || DB.b.isHeld()) return null;
      const GB = (0, QB.n)(),
        [oB, jB] = OB.size(GB);
      return (0, QB.s)(oB, jB, GB, YB.c.get("clientEscMenuOptions").pixelScale)
    }
  },
  42113: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => lB,
      e: () => JB,
      i: () => PB,
      j: () => MB,
      m: () => zB
    });
    var YB = GB(1217),
      DB = GB(2392),
      QB = GB(37849),
      oB = GB(38201);
    class jB {
      constructor(BB, OB) {
        this.pose = BB, this.nodes = void 0, this.nodes = BB.boneNames.map((BB => OB.get(BB)))
      }
      write(BB) {
        this.pose.pose(BB), (0, oB.q)(this.pose, this.nodes)
      }
    }

    function yB(BB) {
      BB.unfreezeWorldMatrix();
      for (const OB of BB.getChildren()) yB(OB)
    }
    async function JB(BB, OB, GB, YB) {
      let {
        keepTransforms: DB,
        backFaceCulling: oB
      } = YB;
      const jB = await (0, QB.n)(OB, BB),
        JB = (0, QB.g)(null !== GB && void 0 !== GB ? GB : OB, BB, void 0, oB);
      (0, QB.r)(jB, JB, {
        keepTransforms: DB,
        backFaceCulling: oB,
        onProcessedMesh: OB => {
          BB.UDB(OB, !1), OB.isVisible = !1
        }
      });
      for (const QB of jB.rootNodes) yB(QB);
      return jB
    }

    function MB(BB, OB) {
      BB.isVisible = OB;
      for (const GB of BB.getChildMeshes()) GB.isVisible = OB
    }

    function PB(BB) {
      const OB = new Map;
      for (const GB of BB.getNodes()) OB.set(GB.name, GB);
      return OB
    }

    function zB(BB, OB, GB, YB) {
      MB(BB, !0), (0, QB.x)(BB, OB.overlayColour), GB.attachTransformNode(BB, YB, GB.getNamedNode(YB, OB.destNode))
    }
    class lB {
      constructor(BB, OB, GB) {
        this.eq = BB, this.thinInstMgr = OB, this.uF = GB, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(BB, OB, GB) {
        const YB = (0, QB.k)(BB, OB);
        return YB in this.modelCache || (this.modelCache[YB] = (async () => {
          try {
            const YB = PB(await JB(this.eq, BB, OB, {
                keepTransforms: void 0 !== GB,
                backFaceCulling: !1
              })),
              DB = void 0 === GB ? null : (0, oB.m)(GB, (BB => {
                const OB = YB.get(BB);
                return OB ? (0, oB.j)(OB) : null
              }));
            return {
              nodesByName: YB,
              bones: null === DB ? null : new jB(DB, YB)
            }
          } catch (DB) {
            throw delete this.modelCache[YB], console.error(`Failed to load preview attachment ${YB}:`, DB), DB
          }
        })()), this.modelCache[YB]
      }
      async update(BB, OB) {
        var GB;
        const {
          thinInstMgr: QB,
          uF: oB
        } = this;
        this.cosmeticNames[BB] = OB;
        const jB = this.attachmentsByType[BB];
        if (jB)
          for (const {
              mesh: DB,
              destNode: JB,
              bones: PB
            }
            of jB) {
            null !== PB && (0, YB.ob)(this.shownBones, PB), MB(DB, !1);
            const BB = QB.getNamedNode(oB, JB);
            QB.detachTransformNodeIfFound(DB, oB, BB)
          }
        this.attachmentsByType[BB] = [];
        const yB = (0, DB.n)(BB, OB);
        if (null !== yB && void 0 !== yB && null !== (GB = yB.attachments) && void 0 !== GB && GB.length)
          for (const YB of yB.attachments) {
            let GB;
            try {
              GB = await this.loadModel(YB.modelGlb, YB.texture, YB.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[BB] !== OB) return;
            const DB = GB.nodesByName.get(YB.modelNode);
            DB ? (zB(DB, YB, QB, oB), this.attachmentsByType[BB].push({
              mesh: DB,
              destNode: YB.destNode,
              bones: GB.bones
            }), null !== GB.bones && this.shownBones.push(GB.bones)) : console.error(`Preview attachment node ${YB.modelNode} not found in ${YB.modelGlb}`)
          }
      }
      writePoses(BB) {
        for (const OB of this.shownBones) OB.write(BB)
      }
    }
  },
  42186: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      openCharacterPreview: () => GO
    });
    var YB = GB(38771),
      DB = GB(3088),
      QB = GB(627),
      oB = GB(37841),
      jB = GB(2397),
      yB = GB(37836),
      JB = GB(40825),
      MB = GB(41089),
      PB = GB(42087),
      zB = GB(37771),
      lB = GB(41246),
      pB = GB(37885),
      qB = GB(41258),
      ZB = GB(42133),
      NB = GB(37769),
      RB = GB(42113),
      WB = GB(42111),
      AB = GB(37962),
      VB = GB(39434),
      SB = GB(39836),
      nB = GB(39869),
      UB = GB(39860),
      fB = GB(39840),
      kB = GB(3573),
      dB = GB(38201);
    const KB = [0, 1, 0];
    class uB {
      constructor(BB) {
        this.node = BB, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const OB of BB.getChildTransformNodes()) this.nodesByName.set(OB.name, OB), this.rests.set(OB.name, (0, dB.j)(OB))
      }
      play(BB, OB) {
        const GB = this.clip(BB);
        GB && (GB.pose.pose(OB), (0, dB.q)(GB.pose, GB.nodes))
      }
      clip(BB) {
        let OB = this.clips.get(BB);
        if (void 0 === OB) {
          const GB = (0, dB.m)(BB, (BB => {
            var OB;
            return null !== (OB = this.rests.get(BB)) && void 0 !== OB ? OB : null
          }));
          OB = GB && {
            pose: GB,
            nodes: GB.boneNames.map((BB => this.nodesByName.get(BB)))
          }, this.clips.set(BB, OB)
        }
        return OB
      }
    }

    function mB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new zB.Xp(BB[0] * OB, BB[1] * OB, BB[2] * OB)
    }
    class IB {
      constructor(BB, OB) {
        this.eq = BB, this.scale = OB, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(BB) {
        var OB;
        this.petName = BB, null === (OB = this.shownPet) || void 0 === OB || OB.node.Zk(!1), this.shownPet = null;
        const GB = (0, SB.f)(BB);
        if (!GB) return;
        let YB;
        try {
          YB = await this.petNode(GB.model)
        } catch {
          return
        }
        this.petName === BB && (YB.node.Zk(!0), this.shownPet = YB)
      }
      setAura(BB) {
        const OB = (0, SB.d)(BB);
        return BB === this.auraName && OB === this.auraTuning || (this.auraName = BB, this.auraTuning = OB, this.auraDrawn = this.showAura(BB, OB)), this.auraDrawn
      }
      async showAura(BB, OB) {
        var GB, YB, DB;
        const QB = ++this.auraSeq;
        if (null === (GB = this.aura) || void 0 === GB || GB.dispose(!1), this.aura = null, !OB) return;
        const oB = await (0, VB.h)().catch((OB => (console.error(`Couldn't load the preview's particles for ${BB}:`, OB), null)));
        if (!oB || QB !== this.auraSeq) return;
        const {
          scale: jB
        } = this, {
          opts: yB,
          half: JB
        } = (0, UB.c)(OB), MB = oB(this.eq, `aura|${BB}`, yB.CP), PB = this.particleTexture(OB.particles.texture);
        MB.texture = PB, (0, fB.d)(MB, {
          ...yB,
          minSize: yB.minSize * jB,
          maxSize: yB.maxSize * jB,
          minEmitPower: yB.minEmitPower * jB,
          maxEmitPower: yB.maxEmitPower * jB,
          gravity: yB.gravity && [yB.gravity[0] * jB, yB.gravity[1] * jB, yB.gravity[2] * jB]
        }), MB.emitRate = yB.emitRate, MB.createBoxEmitter(mB(null !== (YB = yB.dir1) && void 0 !== YB ? YB : KB), mB(null !== (DB = yB.dir2) && void 0 !== DB ? DB : KB), mB(JB, -jB), mB(JB, jB));
        const [lB, pB, qB] = OB.offset;
        MB.emitter = new zB.Xp(lB * jB, (pB - 1) * jB, qB * jB), MB.start(), this.aura = MB;
        const ZB = PB.mirror;
        ZB.isReady() || ZB.loadingError || await new Promise((OB => {
          ZB.onLoadObservable.addOnce((() => {
            OB()
          })), ZB.getInternalTexture().onErrorObservable.addOnce((GB => {
            let {
              message: YB
            } = GB;
            console.error(`Preview aura ${BB}'s texture failed to load: ${YB}`), OB()
          }))
        }))
      }
      writePose(BB) {
        var OB;
        if (!this.shownPet) return;
        const GB = (0, SB.f)(this.petName),
          {
            scale: YB
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, GB);
        const [DB, QB, oB] = GB.followOffset, {
          node: jB
        } = this.shownPet;
        jB.position.set(DB * YB, (QB + (0, nB.g)(GB, BB) - 1) * YB, oB * YB), jB.rotation.y = GB.yawOffset, jB.SP.uBB(GB.scale * YB), null !== (OB = GB.clips) && void 0 !== OB && OB.fly && this.shownPet.play(GB.clips.fly, BB)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(BB, OB) {
        var GB, YB, DB;
        const {
          node: QB
        } = BB;
        QB.position.uBB(0), QB.rotation.y = OB.yawOffset, QB.SP.uBB(1);
        const oB = null !== (GB = null === (YB = OB.clips) || void 0 === YB ? void 0 : YB.perch) && void 0 !== GB ? GB : null === (DB = OB.clips) || void 0 === DB ? void 0 : DB.fly;
        oB && BB.play(oB, 0);
        const {
          min: jB,
          max: yB
        } = QB.getHierarchyBoundingVectors(!0), JB = 2 * this.scale / (yB.y - jB.y);
        QB.SP.uBB(JB), QB.position.set(-(jB.x + yB.x) / 2 * JB, -(jB.y + yB.y) / 2 * JB, -(jB.z + yB.z) / 2 * JB)
      }
      petNode(BB) {
        let OB = this.petNodes.get(BB);
        return OB || (OB = (0, RB.e)(this.eq, BB, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((OB => {
          const GB = new WB.e(`pet|${BB}`, this.eq);
          GB.Zk(!1);
          for (const BB of OB.rootNodes) BB.parent = GB, (0, RB.j)(BB, !0);
          return new uB(GB)
        }), (OB => {
          throw this.petNodes.delete(BB), console.error(`Failed to load preview pet ${BB}:`, OB), OB
        })), this.petNodes.set(BB, OB)), OB
      }
      particleTexture(BB) {
        let OB = this.particleTextures.get(BB);
        return OB || (OB = (0, AB.q)(this.eq, (0, kB.g)(BB)), this.particleTextures.set(BB, OB)), OB
      }
    }
    var FB = GB(37845),
      iB = (GB(42118), GB(41472), GB(42124), GB(34832)),
      LB = GB(36939);
    let gB, rB, XB, wB, EB, cB, hB, aB, eB, TB, bB;
    const CB = document.createElement("canvas");
    async function HB() {
      await new Promise((BB => {
        setTimeout((() => {
          BB()
        }), 100)
      }))
    }
    CB.classList.add("CharCustomisationPreviewCanvas");
    const vB = {};

    function sB(BB, OB) {
      if (!wB) return;
      const oB = (0, DB.g)();
      if (oB.NK(!1), YB.e.Player.meshApi.updatePlayerCosmetic(oB.EX, hB, BB, OB, !0), "cape" === BB)
        if (OB === QB.e) EB.Zk(!1);
        else {
          EB.Zk(!0);
          EB.material.diffuseTexture = new ZB.e(GB(39500)(`./cape_${OB}.png`), EB.JF(), {
            invertY: !1,
            samplingMode: ZB.e.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === BB ? vB.pet = TB.setPet(OB) : "aura" === BB ? vB.aura = TB.setAura(OB) : vB[BB] = eB.update(BB, OB)
    }

    function xB(BB, OB) {
      const [GB, YB] = (0, LB.c)(BB, OB, window.devicePixelRatio);
      gB.setSize(Math.max(GB, Math.floor(BB)), Math.max(YB, Math.floor(OB)))
    }
    let tB = 0;
    class BO {
      constructor(BB, OB) {
        this.framing = OB, this.ready = bB, this.dev = {
          canvas: () => CB,
          isolateHead(BB) {
            const OB = cB.getNodeNames(hB);
            for (let GB = 0; GB < OB.length; GB++) "HeadMesh" !== OB[GB] && "__root__" !== OB[GB] && "TorsoNode" !== OB[GB] && cB.setNodeEnabled(hB, GB, !1);
            if (BB) {
              const BB = cB.getNamedNode(hB, "HeadMesh");
              cB.setNodeDisableColorWrite(hB, BB, !0, (BB => {
                const OB = new qB.StandardMaterial(`${BB.name}_depthOnly`, BB.JF());
                return OB.disableColorWrite = !0, OB
              }))
            }
            cB.setPosition(hB, 0, -12, 0), sB("pet", "pet_none"), sB("aura", "aura_none")
          },
          isolatePet() {
            const BB = cB.getNodeNames(hB).length;
            for (let OB = 0; OB < BB; OB++) cB.setNodeEnabled(hB, OB, !1);
            EB.Zk(!1), sB("aura", "aura_none"), TB.isolatePet()
          }
        }, this.closed = !1, this.resetCamera();
        const GB = BB.getBoundingClientRect();
        xB(GB.width, GB.height), tB++, gB.stopRenderLoop(), gB.runRenderLoop((() => {
          var BB, OB, GB;
          null === (BB = aB) || void 0 === BB || BB.render(gB.getDeltaTime());
          const YB = performance.now() / 1e3;
          null === (OB = eB) || void 0 === OB || OB.writePoses(YB), null === (GB = TB) || void 0 === GB || GB.writePose(YB), XB.render()
        }))
      }
      isReady() {
        return !!wB
      }
      setCosmetic(BB, OB) {
        sB(BB, OB)
      }
      playEmote(BB) {
        if (!aB) return;
        if (!BB) return void aB.stopAnimation(yB.f.Emote);
        const OB = (0, oB.e)((0, jB.k)(BB).animation);
        aB.startAnimation(OB, yB.f.Emote, 0, jB.e)
      }
      async untilDrawn(BB) {
        if (await HB(), "cape" === BB && EB) {
          const BB = EB.material,
            OB = null === BB || void 0 === BB ? void 0 : BB.diffuseTexture;
          OB && !OB.isReady() && (await new Promise((BB => {
            OB.onLoadObservable.addOnce((() => {
              BB()
            }))
          })), await HB())
        }
        vB[BB] && (await vB[BB], await HB()), await XB.whenReadyAsync(), await new Promise((BB => {
          XB.onAfterRenderObservable.addOnce((() => {
            BB()
          }))
        }))
      }
      setOrbit(BB) {
        OO(BB)
      }
      resetCamera() {
        rB.inertialAlphaOffset = 0, rB.inertialBetaOffset = 0, rB.inertialRadiusOffset = 0, OO(iB.d[this.framing])
      }
      resize(BB, OB) {
        xB(BB, OB)
      }
      close() {
        this.closed || (this.closed = !0, tB--, 0 === tB && gB.stopRenderLoop())
      }
    }

    function OO(BB) {
      let {
        yaw: OB,
        pitch: GB,
        radius: YB,
        target: DB
      } = BB;
      rB.alpha = OB, rB.beta = GB, YB && (rB.radius = YB), DB && rB.target.set(DB[0], DB[1], DB[2])
    }

    function GO(BB, OB) {
      return BB.appendChild(CB), gB || function() {
        gB = new JB.c(CB, !0, {
          preserveDrawingBuffer: !0
        });
        const BB = (0, DB.g)();
        gB.fDB = BB.UP.engine.fDB, XB = new MB.b(gB), XB.clearColor = new pB.e(0, 0, 0, 0), XB.ambientColor = new pB.Color3(1, 1, 1), rB = new PB.e("TZ", 0, 0, 1, zB.Xp.Zero(), XB), rB.attachControl(CB, !0), rB.panningSensibility = 0, bB = (0, YB.z)("Player", XB, !0).then((OB => {
          wB = OB.meshApi, EB = OB.capeMesh, cB = BB.UP.kF;
          const GB = 8.33;
          hB = (0, YB.n)("Player", GB, !0, !0), cB.setPosition(hB, 0, -8.33, 0);
          const DB = cB.getNamedNode(hB, "BodyMesh");
          cB.attachTransformNode(EB, hB, DB), cB.set(hB, "aOpacity", 1), cB.Jw(hB, "aOpacity", 1), eB = new RB.d(XB, cB, hB), TB = new IB(XB, GB), aB = new NB.AnimatorState, aB.kz = BB, aB.thinInstMgr = cB, aB.uF = hB, aB.HYB = cB.yDB(hB, 0), aB.modelLifeformType = "Player", aB.nodeNameAliases = (0, FB.e)("Player").nodeNameAliases;
          const QB = EB.Gw().boundingBox;
          EB.position.y = ((24 - QB.maximum.y + QB.minimum.y) / 2 - 1 / 32) / GB, EB.position.z = -1 / GB, EB.rotationQuaternion = null;
          const oB = Math.PI / 18,
            jB = QB.maximum.y / GB;
          EB.rotation.x = oB;
          const yB = Math.cos(oB),
            JB = Math.sin(oB);
          EB.position.y += jB * (1 - yB) + 0 * JB, EB.position.z -= jB * JB + 0 * (1 - yB);
          const MB = new qB.StandardMaterial("capeMaterial", EB.JF());
          EB.material = MB;
          const PB = new pB.Color3(1, 1, 1);
          MB.diffuseColor = new pB.Color3, MB.specularColor = new pB.Color3, MB.emissiveColor = new pB.Color3, MB.ambientColor = new pB.Color3, PB.scaleToRef(.43, MB.diffuseColor), PB.scaleToRef(1.75, MB.ambientColor), MB.freeze();
          const ZB = new lB.d("light", new zB.Xp(-.1, 1, -.3), XB);
          ZB.diffuse = new pB.Color3(1, 1, 1), ZB.specular = new pB.Color3(1, 1, 1), ZB.groundColor = new pB.Color3(.5, .5, .5)
        }))
      }(), new BO(BB, OB)
    }
  },
  39497: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => zB
    });
    var YB = GB(37903),
      DB = GB(38008),
      QB = GB(38042),
      oB = GB(37919),
      jB = GB(37910);

    function yB(BB) {
      return `\n\t\t\t\t${(0,jB.q)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, jB.t)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, jB.t)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, jB.h)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function JB(BB, OB) {
      let GB = (0, jB.Ab)(BB, "skele" + (OB - 1));
      for (let DB = OB - 2; DB >= 0; DB--) GB = (0, jB.nb)(BB, `boneIdx == ${DB}`, (0, jB.Ab)(BB, `skele${DB}`), GB);
      const YB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,jB.t)(BB,"int","boneIdx",(0,jB.tb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,jB.t)(BB,"vec3","bone",GB)}\n\t\t\t\t${(0,jB.t)(BB,"vec2","pivot",(0,jB.h)(BB,"vec2","0.0",`${(0,jB.Lb)(BB,"position")}.z`))}\n\t\t\t\t${(0,jB.S)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${YB}));`:`positionUpdated.yz += ${YB};`}\n\t\t`
    }

    function MB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,jB.h)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const PB = {
        x: 0,
        y: 0,
        z: 0,
        OP(BB, OB) {
          return this.x = BB[OB], this.y = BB[OB + 1], this.z = BB[OB + 2], this
        }
      },
      zB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, OB) => ({
          ...(0, YB.b)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, DB.pb)(OB)
        }),
        getUniforms(BB) {
          return (0, QB.c)(function(BB) {
            const OB = [];
            for (let GB = 0; GB < BB; GB++) OB.push({
              name: `skele${GB}`,
              type: "highp vec3"
            });
            return OB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let OB = 0; OB < this.skeleLen; OB++) BB.updateVector3(`skele${OB}`, PB.OP(this.skele, 3 * OB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, OB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: yB(OB),
            CUSTOM_VERTEX_UPDATE_POSITION: JB(OB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: MB(OB)
          }
        }
      };
    (0, oB.n)(zB)
  },
  39376: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => PB
    });
    var YB = GB(37903),
      DB = GB(38042),
      QB = GB(37910),
      oB = GB(37919);
    const jB = "bloxdTextLodBias",
      yB = [{
        name: jB,
        type: "float"
      }],
      JB = "bloxdTextSample",
      MB = {
        planes: -.5,
        boards: -.5
      },
      PB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, YB.b)("TEXT_SAMPLER"),
        getUniforms: BB => (0, DB.c)(yB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(jB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, OB) {
          if ("fragment" !== BB) return null;
          const GB = (0, QB.C)(OB, `vec4 ${JB}(sampler2D s, vec2 uv, float bias)`, `fn ${JB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            YB = (0, QB.C)(OB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            DB = `${(0,QB.I)(OB,"vDiffuseUV")} + uvOffset`,
            oB = (0, QB.C)(OB, `${JB}(diffuseSampler, ${DB}, ${(0,QB.Ab)(OB,jB)})`, `${JB}(diffuseSampler, diffuseSamplerSampler, ${DB}, ${(0,QB.Ab)(OB,jB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${GB} {\n\t\t\t\t\t${(0,QB.t)(OB,"vec4","texel",YB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,QB.h)(OB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,QB.h)(OB,"vec3","0.0")}, ${(0,QB.h)(OB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, QB.w)(OB)]: `baseColor = ${oB};`
          }
        }
      };
    (0, oB.n)(PB)
  },
  42124: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CapeMaterialPlugin: () => AB,
      HueTintMaterialPlugin: () => VB,
      LifeformMaterialPlugin: () => SB,
      OverlayMaterialPlugin: () => nB
    });
    var YB = GB(42129),
      DB = GB(38682);
    class QB extends((0, YB.e)(DB.e)) {}(0, YB.h)(DB.e, QB);
    var oB = GB(38005);
    class jB extends((0, YB.e)(oB.f)) {}(0, YB.h)(oB.f, jB);
    var yB = GB(38531);
    class JB extends((0, YB.e)(yB.f)) {}(0, YB.h)(yB.f, JB);
    var MB = GB(38025),
      PB = GB(41258),
      zB = GB(38019);
    class lB extends((0, YB.e)(zB.f)) {
      constructor(BB, OB, GB) {
        super(BB, OB, GB), (0, MB.j)(BB)
      }
      dispose(BB) {
        (0, MB.m)(this._material), super.dispose(BB)
      }
    }(0, YB.h)(zB.f, lB), (0, zB.g)({
      disableUnusedSpecularTerm: YB.b,
      isLightingDisabled: BB => BB instanceof PB.StandardMaterial && BB.disableLighting
    });
    var pB = GB(39376);
    class qB extends((0, YB.e)(pB.d)) {}(0, YB.h)(pB.d, qB);
    var ZB = GB(39497),
      NB = GB(37899),
      RB = GB(38801),
      WB = GB(38011);
    class AB extends((0, YB.e)(ZB.d)) {}(0, YB.h)(ZB.d, AB);
    class VB extends((0, YB.e)(NB.d)) {}(0, YB.h)(NB.d, VB);
    class SB extends((0, YB.e)(RB.l)) {}(0, YB.h)(RB.l, SB);
    class nB extends((0, YB.e)(WB.c)) {}(0, YB.h)(WB.c, nB)
  },
  39437: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB,
      g: () => jB,
      j: () => yB
    });
    var YB = GB(38049),
      DB = GB(37946);
    const QB = new Set;
    let oB = null;

    function jB(BB) {
      oB = BB
    }

    function yB(BB) {
      if (!oB) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new oB("sky", BB)
    }

    function JB(BB, OB, GB) {
      if (!(0, YB.e)(BB)) return void BB.material.forceCompilation(BB, OB);
      const oB = () => {
        if (BB.lV()) return void QB.delete(BB);
        const YB = (0, DB.U)(BB.material);
        if (![null === YB || void 0 === YB ? void 0 : YB.diffuseTexture, null === YB || void 0 === YB ? void 0 : YB.opacityTexture, null === YB || void 0 === YB ? void 0 : YB.emissiveTexture, null === YB || void 0 === YB ? void 0 : YB.reflectionTexture].every((BB => !BB || GB.prepareTexture(BB)))) return QB.add(BB), void setTimeout(oB, 16);
        QB.delete(BB), OB()
      };
      oB()
    }
  },
  34737: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(1308);

    function DB() {
      var BB, OB;
      return null !== (BB = null === (OB = screen.orientation) || void 0 === OB ? void 0 : OB.type) && void 0 !== BB ? BB : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const QB = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && DB() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = DB(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, YB.kq)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const BB of this.resizers) BB()
          }
        }), 1e3)
      }
      heldSizer(BB) {
        let OB = !1;
        return () => {
          if (OB && this.isHeld()) return null;
          const GB = BB();
          return OB ||= null !== GB, GB
        }
      }
      onRelease(BB) {
        return this.resizers.add(BB), () => {
          this.resizers.delete(BB)
        }
      }
    }
  },
  36939: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    const YB = 4e5,
      DB = 2;

    function QB(BB, OB, GB) {
      let [QB, oB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, OB], jB = Math.min(Number.isFinite(GB) && GB > 0 ? GB : 1, DB);
      const yB = Math.max(0, QB, BB) * Math.max(0, oB, OB) * jB * jB;
      return yB > YB && (jB *= Math.sqrt(YB / yB)), [Math.max(1, Math.floor(Math.max(0, BB) * jB)), Math.max(1, Math.floor(Math.max(0, OB) * jB))]
    }
  },
  42129: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => cB,
      e: () => RB,
      h: () => CB
    });
    var YB = GB(41258),
      DB = GB(42131),
      QB = GB(42177),
      oB = GB(42133),
      jB = GB(38494),
      yB = GB(38504),
      JB = GB(38513),
      MB = GB(38515),
      PB = GB(37958),
      zB = GB(37962),
      lB = GB(42140),
      pB = GB(37919),
      qB = GB(37946),
      ZB = GB(37910);

    function NB(BB, OB) {
      return Object.assign((function(BB, GB, YB, DB) {
        return OB(this.featureState, BB, GB, YB, DB)
      }), {
        oP: BB
      })
    }

    function RB(BB) {
      const OB = class extends lB.c {
          constructor(OB, GB) {
            const YB = (0, qB.U)(OB),
              DB = YB && (0, qB.A)(YB, BB.name);
            for (var QB = arguments.length, oB = new Array(QB > 2 ? QB - 2 : 0), jB = 2; jB < QB; jB++) oB[jB - 2] = arguments[jB];
            super(OB, BB.name, BB.priority, DB ? DB.defines : BB.defines(...oB), !1), this.featureState = void 0, this.featureState = GB, this._pluginManager._addPlugin(this), this._enable(!0), (0, qB.B)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === ZB.c.GLSL || BB === ZB.c.WGSL
          }
        },
        GB = (0, pB.i)(BB);
      for (const [YB, DB] of Object.entries(pB.d)) {
        const QB = BB[YB];
        if (QB) {
          const BB = GB[YB];
          Object.defineProperty(OB.prototype, DB, {
            value: NB(QB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return OB
    }
    class WB extends(RB(jB.e)) {}
    var AB = GB(40825),
      VB = GB(42148),
      SB = GB(42154);

    function nB(BB, OB, GB) {
      return (0, SB.i)(GB, OB.urls, (() => async function(BB, OB, GB) {
        const {
          width: YB
        } = BB[0].getSize(), DB = BB.map(((BB, GB) => {
          var DB;
          const QB = Math.round(BB.getSize().height / YB),
            oB = null === OB || void 0 === OB ? void 0 : OB[GB];
          return {
            pixels: oB && oB.byteLength === YB * YB * QB * 4 ? oB : null !== (DB = UB.get(BB.getInternalTexture())) && void 0 !== DB ? DB : BB._readPixelsSync(),
            layers: QB
          }
        })), QB = Math.min(GB.Lp().getCaps().texture2DArrayMaxLayerCount, 256), jB = (0, SB.e)(DB, YB, QB).map((BB => {
          let {
            pixels: OB,
            layers: DB
          } = BB;
          return {
            atlas: new VB.e(OB, YB, YB, DB, AB.c.TEXTUREFORMAT_RGBA, GB, !0, !1, oB.e.NEAREST_NEAREST_MIPLINEAR),
            layers: DB
          }
        }));
        return BB.forEach(((BB, OB) => {
          const YB = BB.getInternalTexture();
          UB.has(YB) || (! function(BB, OB) {
            const GB = OB.createRawTexture(new Uint8Array(4), 1, 1, AB.c.TEXTUREFORMAT_RGBA, !1, !1, oB.e.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), OB.unbindAllTextures(), GB._swapAndDie(BB, !1)
          }(YB, GB.Lp()), UB.set(YB, DB[OB].pixels))
        })), jB
      }(BB, OB.pixels, GB)))
    }
    const UB = new WeakMap;
    var fB = GB(38522);
    class kB extends(RB(yB.f)) {
      constructor(BB, OB) {
        super(BB, OB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = OB.textures.map((BB => BB.mirror)), OB.useWebGL2 && !OB.imagesPerAtlas.length && OB.textureAtlases.splice(0, OB.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((BB, OB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, OB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${OB}`, BB)
            }))
          }))
        })), (0, fB.k)(OB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, OB) {
        const GB = this.featureState,
          {
            width: YB,
            height: DB
          } = BB.getSize(),
          QB = this._material.shaderLanguage;
        if (!GB.useWebGL2) return void(0, fB.g)(this._material, GB, OB, YB, Math.round(DB / YB), QB);
        if (this.loaded.add(OB), this.loaded.size < this.mirrors.length) return;
        const oB = await nB(this.mirrors, GB.sources, this._material.JF());
        (0, fB.d)(this._material, GB, oB, YB, QB)
      }
    }
    var dB = GB(42160),
      KB = GB(41300),
      uB = GB(37771),
      mB = GB(42167),
      IB = GB(41423),
      FB = GB(41287),
      iB = GB(42111),
      LB = GB(38169),
      gB = GB(42169);
    class rB extends dB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const XB = {
      Mesh: mB.b,
      TransformNode: iB.e,
      BP: dB.d,
      VertexBuffer: dB.g,
      BoundingInfo: KB.e,
      Xp: uB.Xp,
      ArenaBuffer: rB,
      SubMesh: FB.c,
      VertexData: IB.e,
      MirroredGeometry: gB.d,
      meshFromArrays: gB.g,
      plainMeshFromArrays: gB.h
    };
    (0, LB.d)(XB);
    var wB = GB(38025);
    class EB extends(RB(MB.f)) {
      constructor(BB, OB) {
        if (super(BB, OB), BB instanceof YB.StandardMaterial && OB.dirLightCount > 0) {
          const OB = BB,
            GB = OB._blockDirtyMechanism;
          OB._blockDirtyMechanism = !0, BB.disableLighting = !0, OB._blockDirtyMechanism = GB;
          const YB = (0, qB.U)(BB);
          YB && (YB.disableLighting = !0, (0, qB.S)(YB))
        }(0, wB.j)(BB)
      }
      dispose(BB) {
        (0, wB.m)(this._material), super.dispose(BB)
      }
    }

    function cB(BB, OB) {
      if (!(OB instanceof YB.StandardMaterial) || OB.specularTexture) return;
      const {
        r: GB,
        g: DB,
        b: QB
      } = OB.specularColor;
      0 === GB && 0 === DB && 0 === QB && (BB.SPECULARTERM = !1)
    }(0, MB.e)({
      disableUnusedSpecularTerm: cB
    });
    var hB = GB(37966),
      aB = GB(38183);
    const eB = new RegExp(`^#define ${JB.d}\\s*$`, "m");
    class TB extends(RB(JB.i)) {
      constructor(BB, OB) {
        super(BB, OB), this.Vp = !1, OB.ditherOnlyWhileFading && (aB.e.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const OB = new WeakSet;
        BB.onEffectCreatedObservable.add((GB => {
          let {
            effect: YB,
            subMesh: DB
          } = GB;
          if (this.featureState.prewarmingDither || OB.has(YB)) return;
          OB.add(YB);
          const QB = null === DB || void 0 === DB ? void 0 : DB.getMesh();
          QB && !eB.test(YB.defines) && BB.JF().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(QB) || OB.delete(YB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.Vp || BB.lV()) return !1;
        const OB = new FB.c(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, OB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== OB.effect
      }
      dispose(BB) {
        this.Vp = !0, super.dispose(BB)
      }
    }
    const bB = new Map;

    function CB(BB, OB) {
      bB.set(BB, OB)
    }
    CB(jB.e, WB), CB(yB.f, kB), CB(JB.i, TB), CB(MB.f, EB), (0, PB.c)({
      create: (BB, OB) => {
        const GB = new YB.StandardMaterial(BB.name, OB);
        return (0, hB.n)(BB, GB), GB.detailMap._pluginDefineNames
      },
      write: (BB, OB, GB) => {
        (0, hB.M)(BB.mirror, OB, GB)
      },
      addFeature: (BB, OB, GB) => {
        const YB = bB.get(OB.feature);
        if (!YB) throw new Error(`${OB.feature.name} has no plugin class (registerPluginClass)`);
        new YB(BB.mirror, OB.state, ...GB)
      },
      texture: (BB, OB, GB) => {
        let {
          url: YB,
          noMipmap: DB,
          invertY: QB,
          samplingMode: jB,
          data: yB,
          sets: JB
        } = GB;
        if (!yB) {
          const GB = new oB.e(YB, OB, DB, QB, jB);
          return Object.assign(GB, JB), void(0, zB.D)(BB, GB)
        }
        const MB = {},
          PB = new Promise(((BB, OB) => {
            MB.onLoad = BB, MB.onError = (BB, GB) => {
              OB(new Error(`${yB.context}: ${(null===GB||void 0===GB?void 0:GB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: lB,
            bytes: pB,
            label: qB
          } = yB,
          ZB = {
            noMipmap: DB,
            invertY: !1,
            samplingMode: jB,
            ...MB,
            mimeType: lB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          NB = new oB.e(null, OB, ZB);
        hB.o.set(NB, PB), Object.assign(NB, JB), NB.updateURL(YB, pB);
        const RB = NB.getInternalTexture();
        RB && (RB.label = qB), BB.uvSet = NB.coordinatesIndex, BB.matrix.set((0, hB.E)(NB)), (0, zB.D)(BB, NB)
      },
      cube: (BB, OB, GB) => {
        let {
          rootUrl: YB,
          files: QB,
          noMipmap: jB,
          luminance: yB
        } = GB;
        const {
          samplingMode: JB
        } = BB.sampler, MB = JB === (0, zB.v)(jB) ? null : () => {
          (0, hB.D)(PB, JB)
        }, PB = new DB.e(YB, OB, null, jB, QB, MB, null, (0, zB.u)(yB));
        PB.coordinatesMode = oB.e.SKYBOX_MODE, (0, zB.D)(BB, PB)
      },
      canvas: (BB, OB, GB) => {
        let {
          width: YB,
          height: DB,
          mipmaps: jB,
          samplingMode: yB,
          hasAlpha: JB = !1,
          wrap: MB = oB.e.CLAMP_ADDRESSMODE
        } = GB;
        const PB = new QB.c(OB, {
          width: YB,
          height: DB
        }, BB, jB, yB);
        PB.hasAlpha = JB, PB.wrapU = MB, PB.wrapV = MB;
        const zB = (0, hB.u)(PB);
        return (0, hB.x)(zB, PB), zB
      }
    })
  },
  42169: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => PB,
      h: () => zB
    });
    var YB = GB(42160),
      DB = GB(41067),
      QB = GB(41300),
      oB = GB(41426),
      jB = GB(42167),
      yB = GB(41423),
      JB = GB(38087);
    class MB extends oB.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, OB) => {
          this.releaseUnlessInstanced(OB)
        }, this.onLinked = null
      }
      link(BB) {
        var OB;
        (0, JB.k)(BB), this.model = BB, null === (OB = this.onLinked) || void 0 === OB || OB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const DB of Object.values(this._vertexBuffers))
          if (!DB.getIsInstanced()) {
            const {
              byteOffset: OB,
              byteStride: GB,
              type: YB,
              normalized: QB
            } = DB;
            BB.push({
              kind: DB.getKind(),
              data: DB.getData(),
              offset: OB,
              stride: GB,
              components: DB.getSize(),
              glType: YB,
              isNormalized: QB
            })
          } const OB = this._indices.length ? this._indices : null,
          {
            minimum: GB,
            maximum: YB
          } = this.extend;
        this.link(new JB.e(BB, OB, this.getTotalVertices(), new Float64Array(GB.dDB()), new Float64Array(YB.dDB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const OB = new MB(BB, this.JF()),
          GB = this.KDB(void 0, !0);
        GB && OB.setIndices(GB);
        let oB = !1;
        for (const QB in this._vertexBuffers) {
          const BB = this._vertexBuffers[QB],
            GB = BB.getData();
          if (!GB) continue;
          const jB = BB.getSize(),
            {
              type: yB,
              byteOffset: JB,
              byteStride: MB,
              normalized: PB
            } = BB;
          oB ||= BB.isUpdatable();
          const zB = BB.getIsInstanced() ? (GB instanceof Array ? 4 * GB.length : GB.byteLength) / MB : this.getTotalVertices(),
            lB = (0, DB.v)(GB, jB, yB, JB, MB, zB, !0),
            pB = {
              updatable: BB.isUpdatable(),
              stride: jB,
              type: yB,
              normalized: PB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          OB.setVerticesBuffer(new YB.g(this.Lp(), lB, QB, pB), zB)
        }
        return OB._updatable = oB, OB._boundingInfo = new QB.e(this.extend.minimum, this.extend.maximum), OB.relink(), OB
      }
      static mergeMeshes(BB, OB, GB, YB, DB, QB) {
        const yB = BB[0].JF(),
          JB = new jB.b(BB[0].name + "_merged", yB),
          PB = new MB(oB.d.RandomId(), yB, void 0, !1, JB);
        try {
          if (!jB.b.MergeMeshes(BB, OB, GB, JB, DB, QB)) return JB.dispose(), null
        } catch (zB) {
          throw JB.dispose(), zB
        }
        return PB.relink(), JB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var OB;
        BB && null !== (OB = this.getVertexBuffer(BB)) && void 0 !== OB && OB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, JB.q)(this.model), this.model = null)
      }
    }

    function PB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new jB.b(BB, GB);
      const DB = (0, JB.j)(OB),
        {
          positions: QB,
          normals: PB,
          uvs: zB,
          indices: lB,
          named: pB = {}
        } = OB,
        qB = new yB.e;
      qB.positions = QB, qB.normals = null !== PB && void 0 !== PB ? PB : null, qB.uvs = null !== zB && void 0 !== zB ? zB : null, qB.indices = lB;
      const ZB = new MB(oB.d.RandomId(), GB, qB, !1, YB);
      for (const {
          kind: oB,
          components: jB
        }
        of DB.vertexAttributes) oB in pB && YB.setVerticesData(oB, pB[oB], !1, jB);
      return ZB.link(DB), YB
    }

    function zB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const DB = new jB.b(BB, GB),
        {
          positions: QB,
          normals: oB,
          uvs: JB,
          indices: MB
        } = OB;
      return Object.assign(new yB.e, {
        positions: QB,
        normals: oB,
        uvs: JB,
        indices: MB
      }).applyToMesh(DB, YB), DB
    }
  },
  42154: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      const YB = OB * OB * 4,
        DB = BB[0].layers,
        QB = DB * (BB.length - 1) + BB[BB.length - 1].layers,
        oB = new Uint8Array(QB * YB);
      BB.forEach(((OB, GB) => {
        const QB = GB + 1 < BB.length ? Math.min(OB.layers, DB) : OB.layers;
        oB.set(new Uint8Array(OB.pixels.buffer, OB.pixels.byteOffset, QB * YB), GB * DB * YB)
      }));
      const jB = Math.max(1, Math.min(QB, GB || QB));
      if (jB === QB) return [{
        pixels: oB,
        layers: QB
      }];
      const yB = [];
      for (let JB = 0; JB < QB; JB += jB) {
        const BB = Math.min(QB, JB + jB);
        yB.push({
          pixels: oB.slice(JB * YB, BB * YB),
          layers: BB - JB
        })
      }
      return yB
    }
    GB.d(OB, {
      e: () => YB,
      i: () => QB
    });
    const DB = new WeakMap;

    function QB(BB, OB, GB) {
      var YB, QB;
      const oB = null !== (YB = DB.get(BB)) && void 0 !== YB ? YB : new Map;
      DB.set(BB, oB);
      const jB = null !== (QB = oB.get(OB[0])) && void 0 !== QB ? QB : [];
      oB.set(OB[0], jB);
      const yB = jB.find((BB => BB.urls.length === OB.length && BB.urls.every(((BB, GB) => BB === OB[GB]))));
      if (yB) return yB.built;
      const JB = {
        urls: [...OB],
        built: GB()
      };
      return jB.push(JB), JB.built.catch((() => {
        jB.splice(jB.indexOf(JB), 1)
      })), JB.built
    }
  },
  39446: (BB, OB, GB) => {
    function YB(BB, OB) {
      return "object" === typeof BB && null !== BB ? Object.assign(BB, {
        startStep: OB
      }) : BB
    }

    function DB(BB) {
      return "object" === typeof BB && null !== BB && "startStep" in BB ? BB.startStep : null
    }
    GB.d(OB, {
      d: () => DB,
      f: () => YB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);