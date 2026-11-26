export const id = 218;
export const ids = [218];
export const modules = {
  39735: (HH, BH, LH) => {
    var AH = {
      "./cape_cow_cream.png": 28495,
      "./cape_cow_normal.png": 28500,
      "./cape_creator_level1.png": 28507,
      "./cape_creator_level2.png": 28514,
      "./cape_creator_level3.png": 28521,
      "./cape_none.png": 28530,
      "./cape_pig.png": 28532,
      "./cape_sheep.png": 28537,
      "./cape_super.png": 28544,
      "./cape_super_inverted.png": 28550,
      "./cape_youtuber.png": 28552
    };

    function rH(HH) {
      var BH = SH(HH);
      return LH(BH)
    }

    function SH(HH) {
      if (!LH.o(AH, HH)) {
        var BH = new Error("Cannot find module '" + HH + "'");
        throw BH.code = "MODULE_NOT_FOUND", BH
      }
      return AH[HH]
    }
    rH.keys = function() {
      return Object.keys(AH)
    }, rH.resolve = SH, HH.exports = rH, rH.id = 39735
  },
  40108: (HH, BH, LH) => {
    function AH(HH) {
      return void 0 === HH ? void 0 : [HH[0], HH[1], HH[2]]
    }

    function rH(HH) {
      const BH = HH.particles;
      return {
        opts: {
          texture: BH.texture,
          aX: BH.aX,
          minLifeTime: BH.minLifeTime,
          maxLifeTime: BH.maxLifeTime,
          minSize: BH.minSize,
          maxSize: BH.maxSize,
          minEmitPower: BH.minEmitPower,
          maxEmitPower: BH.maxEmitPower,
          emitRate: BH.emitRate,
          gravity: AH(BH.gravity),
          dir1: AH(BH.dir1),
          dir2: AH(BH.dir2),
          colorGradients: BH.colorGradients,
          blendMode: BH.blendMode
        },
        half: [BH.width / 2, BH.height / 2, BH.depth / 2]
      }
    }
    LH.d(BH, {
      b: () => rH
    })
  },
  40066: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => CH,
      h: () => zH,
      i: () => hH
    });
    var AH = LH(186);
    const rH = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      SH = "PetRoot";
    let hH = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      tH = rH;
    new Map, new Map;

    function zH(HH) {
      var BH;
      return null !== (BH = (0, AH.d)(hH, HH)) && void 0 !== BH ? BH : null
    }

    function CH(HH) {
      var BH;
      return null !== (BH = (0, AH.d)(tH, HH)) && void 0 !== BH ? BH : null
    }
  },
  40117: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => rH,
      g: () => SH
    });
    class AH {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.EW = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(HH) {
        var BH;
        const {
          feet: LH,
          heading: AH,
          tuning: hH
        } = HH, tH = Math.min(Math.max(HH.dt, 0), .1), {
          pose: zH,
          EW: CH,
          target: EH
        } = this;
        if (this.started && tH > 0) {
          const HH = Math.hypot(LH[0] - this.lastFeet[0], LH[1] - this.lastFeet[1], LH[2] - this.lastFeet[2]);
          this.speed += (HH / tH - this.speed) * Math.min(tH / .15, 1)
        }
        this.lastFeet[0] = LH[0], this.lastFeet[1] = LH[1], this.lastFeet[2] = LH[2], this.stillS = this.speed > .3 ? 0 : this.stillS + tH;
        const XH = this.stillS >= .6 ? "perched" : "flying";
        "flying" === XH && "perched" === zH.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += tH, zH.mode = XH;
        const GH = Math.sin(AH),
          YH = Math.cos(AH);
        "perched" === XH ? (SH(EH, LH, hH.perchOffset, GH, YH), EH[1] += HH.headTopY - LH[1]) : (SH(EH, LH, hH.followOffset, GH, YH), EH[1] += rH(hH, HH.timeS));
        const {
          pos: uH
        } = zH, QH = Math.hypot(EH[0] - uH[0], EH[1] - uH[1], EH[2] - uH[2]);
        if (!this.started || QH > 8 || "perched" === XH && (this.perchLocked || QH < .05)) this.perchLocked = this.started && "perched" === XH, uH[0] = EH[0], uH[1] = EH[1], uH[2] = EH[2], CH[0] = CH[1] = CH[2] = 0;
        else {
          const HH = hH.followStiffness;
          for (let BH = 0; BH < 3; BH++) CH[BH] += (HH * HH * (EH[BH] - uH[BH]) - 2 * HH * CH[BH]) * tH, uH[BH] += CH[BH] * tH
        }
        const WH = AH + hH.yawOffset;
        var MH;
        return this.started ? zH.yaw += ((MH = WH - zH.yaw) - 2 * Math.PI * Math.round(MH / (2 * Math.PI))) * Math.min(8 * tH, 1) : zH.yaw = WH, this.started = !0, zH.seated = "perched" === XH && this.perchLocked, zH.clip = null === (BH = hH.clips) || void 0 === BH ? void 0 : BH[this.VB(XH)], zH
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      VB(HH) {
        return "perched" === HH ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function rH(HH, BH) {
      return HH.bobAmplitude * Math.sin(2 * Math.PI * HH.bobHz * BH)
    }

    function SH(HH, BH, LH, AH, rH) {
      const [SH, hH, tH] = LH;
      HH[0] = BH[0] + SH * rH + tH * AH, HH[1] = BH[1] + hH, HH[2] = BH[2] - SH * AH + tH * rH
    }
  },
  40075: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH
    });
    var AH = LH(37961),
      rH = LH(38729);

    function SH(HH, BH) {
      var LH;
      HH.blendMode = BH.blendMode, HH.minLifeTime = BH.minLifeTime, HH.maxLifeTime = BH.maxLifeTime, HH.minSize = BH.minSize, HH.maxSize = BH.maxSize, HH.minEmitPower = BH.minEmitPower, HH.maxEmitPower = BH.maxEmitPower;
      const SH = null !== (LH = BH.gravity) && void 0 !== LH ? LH : [0, 0, 0];
      HH.gravity = new AH.lu(SH[0], SH[1], SH[2]);
      for (const AH of BH.colorGradients) HH.addColorGradient(AH.timeFraction, (0, rH.g)(AH.minColor), AH.maxColor ? (0, rH.g)(AH.maxColor) : void 0)
    }
  },
  39657: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => vH,
      f: () => UH,
      h: () => TH,
      k: () => OH,
      n: () => bH,
      r: () => xH
    });
    var AH = LH(304),
      rH = LH(39677),
      SH = LH(3049),
      hH = LH(3054),
      tH = LH(39666),
      zH = LH(39673),
      CH = LH(15),
      EH = LH(92),
      XH = LH(3195),
      GH = LH(81),
      YH = LH(114),
      uH = LH(30),
      QH = LH(3961),
      WH = LH(105);
    const MH = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function xH(HH) {
      var BH;
      const LH = null !== (BH = EH.currentUrl.getSearchParam(HH)) && void 0 !== BH ? BH : uH.e.getItem(HH);
      return null === LH || void 0 === LH || "" === LH ? null : "0" !== LH && "false" !== LH && !1 !== LH && 0 !== LH
    }
    async function vH(HH, BH) {
      (0, SH.E)(null);
      const LH = (0, hH.r)((0, hH.n)(BH.useWebGpu, !0));
      (0, GH.setWebGpuRequested)("lite" === LH.requested && (0, GH.getWebGpuSupported)());
      const tH = (0, hH.h)(LH.source);
      null !== tH && console.info(`Renderer: ${LH.requested} from ${tH}`), null !== LH.fallbackReason && console.warn(`Renderer: ${LH.fallbackReason}`);
      let EH = LH.fallbackReason;
      if ("webgl2" !== LH.choice) {
        const tH = await async function(HH, BH, LH, hH) {
          const tH = await (0, GH.probeWebGpuAdapter)();
          if ("usable" !== tH) return (0, GH.setWebGpuFallbackReason)(tH), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (LH && !0 === uH.e.getItem(WH.L) && !0 !== uH.e.getItem(AH.zc)) return (0, GH.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), WH.b;
          let EH = "load_failed";
          try {
            const {
              create: LH
            } = await (0, SH.w)(hH).load();
            EH = "start_failed";
            const AH = CH.c.antiAliasingOnWebGpuAdapter((0, YH.i)()),
              rH = (0, zH.d)(HH),
              tH = (0, zH.b)(rH, {
                size: HH => (0, XH.m)(rH, HH)
              });
            return await LH(HH, {
              mAH: AH,
              sceneDepth: BH.sceneDepth,
              sunShadow: BH.sunShadow,
              bufferSize: tH
            })
          } catch (QH) {
            const HH = (0, rH.c)(QH);
            (0, GH.setWebGpuFallbackReason)(HH ? MH[HH] : EH);
            const BH = null === QH || void 0 === QH ? void 0 : QH.fallbackReason;
            return "string" === typeof BH ? (console.warn(`Lite could not start, falling back to WebGL: ${String(QH)}`), BH) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", QH), "it failed to start (see the console)")
          }
        }(HH, BH, "setting" === LH.source, LH.choice);
        if ("lite" === LH.choice && uH.e.setItem(WH.v, "string" === typeof tH), "string" !== typeof tH) return CH.c.followGameGpu((0, YH.i)()), (0, GH.setWebGpuFallbackReason)("none"), (0, hH.s)(LH), (0, SH.E)(tH), {
          lite: tH
        };
        EH = (0, hH.d)(LH.choice, [tH]), HH.replaceWith(HH.cloneNode(!1))
      } else "lite" === LH.requested ? (0, GH.setWebGpuFallbackReason)("load_failed") : "default" === LH.source && BH.webGpuDefaultOffReason ? (0, GH.setWebGpuFallbackReason)(BH.webGpuDefaultOffReason) : (0, GH.setWebGpuFallbackReason)("not_requested");
      return (0, hH.s)({
        ...LH,
        choice: "webgl2",
        fallbackReason: EH
      }), CH.c.followGameGpu(null), {
        lite: null
      }
    }

    function PH() {
      return Promise.all([LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(293), LH.e(303), LH.e(292), LH.e(286), LH.e(287), LH.e(271), LH.e(0)]).then((() => LH(45030)))
    }
    async function TH() {
      return (await PH()).createSceneParticleSystem
    }
    async function UH() {
      Promise.all([LH.e(283), LH.e(612)]).then((() => LH(45111))).then((HH => {
        HH.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [HH, BH] = await Promise.all([PH(), Promise.all([LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(293), LH.e(303), LH.e(292), LH.e(286), LH.e(287), LH.e(271), LH.e(0)]).then((() => LH(45125))), Promise.all([LH.e(283), LH.e(284), LH.e(281), LH.e(291), LH.e(285), LH.e(290), LH.e(288), LH.e(280), LH.e(293), LH.e(303), LH.e(292), LH.e(286), LH.e(287), LH.e(271), LH.e(0)]).then((() => LH(42420)))]);
      return (0, tH.i)(BH.SkyMaterial), HH.default
    }

    function VH(HH) {
      return "lite" === (0, hH.r)((0, hH.n)(HH, !1)).choice && (0, GH.getWebGpuSupported)() && !uH.e.getItem(WH.v)
    }

    function OH(HH) {
      VH(HH) || UH().catch((HH => {
        console.warn("Failed to prefetch noa's Babylon backend.", HH)
      }))
    }

    function bH(HH) {
      (0, QH.d)((() => {
        VH(HH) ? (0, SH.s)().load().catch((HH => {
          console.warn("Failed to prefetch the Lite renderer.", HH)
        })) : OH(HH)
      }))
    }
  },
  39673: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      d: () => hH
    });
    var AH = LH(15),
      rH = LH(34929),
      SH = LH(3195);

    function hH(HH) {
      var BH;
      return null !== (BH = HH.parentElement) && void 0 !== BH ? BH : HH
    }

    function tH(HH, BH) {
      if (HH.clientWidth <= 0 || HH.clientHeight <= 0 || rH.e.isHeld()) return null;
      const LH = (0, SH.q)(),
        [hH, tH] = BH.size(LH);
      return (0, SH.v)(hH, tH, LH, AH.c.get("clientEscMenuOptions").pixelScale)
    }
  },
  42416: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => YH,
      e: () => CH,
      h: () => XH,
      k: () => EH,
      m: () => GH
    });
    var AH = LH(1168),
      rH = LH(2339),
      SH = LH(38041),
      hH = LH(38378);
    class tH {
      constructor(HH, BH) {
        this.pose = HH, this.nodes = void 0, this.nodes = HH.boneNames.map((HH => BH.get(HH)))
      }
      write(HH) {
        this.pose.pose(HH), (0, hH.l)(this.pose, this.nodes)
      }
    }

    function zH(HH) {
      HH.unfreezeWorldMatrix();
      for (const BH of HH.getChildren()) zH(BH)
    }
    async function CH(HH, BH, LH, AH) {
      let {
        keepTransforms: rH,
        backFaceCulling: hH
      } = AH;
      const tH = await (0, SH.i)(BH, HH),
        CH = (0, SH.f)(null !== LH && void 0 !== LH ? LH : BH, HH, void 0, hH);
      (0, SH.l)(tH, CH, {
        keepTransforms: rH,
        backFaceCulling: hH,
        onProcessedMesh: BH => {
          HH.QrH(BH, !1), BH.isVisible = !1
        }
      });
      for (const SH of tH.rootNodes) zH(SH);
      return tH
    }

    function EH(HH, BH) {
      HH.isVisible = BH;
      for (const LH of HH.getChildMeshes()) LH.isVisible = BH
    }

    function XH(HH) {
      const BH = new Map;
      for (const LH of HH.getNodes()) BH.set(LH.name, LH);
      return BH
    }

    function GH(HH, BH, LH, AH) {
      EH(HH, !0), (0, SH.o)(HH, BH.overlayColour), LH.attachTransformNode(HH, AH, LH.getNamedNode(AH, BH.destNode))
    }
    class YH {
      constructor(HH, BH, LH) {
        this.NQ = HH, this.thinInstMgr = BH, this.kR = LH, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(HH, BH, LH) {
        const AH = (0, SH.g)(HH, BH);
        return AH in this.modelCache || (this.modelCache[AH] = (async () => {
          try {
            const AH = XH(await CH(this.NQ, HH, BH, {
                keepTransforms: void 0 !== LH,
                backFaceCulling: !1
              })),
              rH = void 0 === LH ? null : (0, hH.j)(LH, (HH => {
                const BH = AH.get(HH);
                return BH ? (0, hH.i)(BH) : null
              }));
            return {
              nodesByName: AH,
              bones: null === rH ? null : new tH(rH, AH)
            }
          } catch (rH) {
            throw delete this.modelCache[AH], console.error(`Failed to load preview attachment ${AH}:`, rH), rH
          }
        })()), this.modelCache[AH]
      }
      async update(HH, BH) {
        var LH;
        const {
          thinInstMgr: SH,
          kR: hH
        } = this;
        this.cosmeticNames[HH] = BH;
        const tH = this.attachmentsByType[HH];
        if (tH)
          for (const {
              mesh: rH,
              destNode: CH,
              bones: XH
            }
            of tH) {
            null !== XH && (0, AH.kb)(this.shownBones, XH), EH(rH, !1);
            const HH = SH.getNamedNode(hH, CH);
            SH.detachTransformNodeIfFound(rH, hH, HH)
          }
        this.attachmentsByType[HH] = [];
        const zH = (0, rH.h)(HH, BH);
        if (null !== zH && void 0 !== zH && null !== (LH = zH.attachments) && void 0 !== LH && LH.length)
          for (const AH of zH.attachments) {
            let LH;
            try {
              LH = await this.loadModel(AH.modelGlb, AH.texture, AH.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[HH] !== BH) return;
            const rH = LH.nodesByName.get(AH.modelNode);
            rH ? (GH(rH, AH, SH, hH), this.attachmentsByType[HH].push({
              mesh: rH,
              destNode: AH.destNode,
              bones: LH.bones
            }), null !== LH.bones && this.shownBones.push(LH.bones)) : console.error(`Preview attachment node ${AH.modelNode} not found in ${AH.modelGlb}`)
          }
      }
      writePoses(HH) {
        for (const BH of this.shownBones) BH.write(HH)
      }
    }
  },
  42476: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      openCharacterPreview: () => LB
    });
    var AH = LH(38970),
      rH = LH(3038),
      SH = LH(602),
      hH = LH(38029),
      tH = LH(2347),
      zH = LH(38020),
      CH = LH(41106),
      EH = LH(41374),
      XH = LH(42390),
      GH = LH(37961),
      YH = LH(41525),
      uH = LH(38071),
      QH = LH(41538),
      WH = LH(42434),
      MH = LH(37952),
      xH = LH(42416),
      vH = LH(42414),
      PH = LH(38135),
      TH = LH(39657),
      UH = LH(40066),
      VH = LH(40117),
      OH = LH(40108),
      bH = LH(40075),
      kH = LH(3503),
      mH = LH(38378);
    const oH = [0, 1, 0];
    class IH {
      constructor(HH) {
        this.node = HH, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const BH of HH.getChildTransformNodes()) this.nodesByName.set(BH.name, BH), this.rests.set(BH.name, (0, mH.i)(BH))
      }
      play(HH, BH) {
        const LH = this.clip(HH);
        LH && (LH.pose.pose(BH), (0, mH.l)(LH.pose, LH.nodes))
      }
      clip(HH) {
        let BH = this.clips.get(HH);
        if (void 0 === BH) {
          const LH = (0, mH.j)(HH, (HH => {
            var BH;
            return null !== (BH = this.rests.get(HH)) && void 0 !== BH ? BH : null
          }));
          BH = LH && {
            pose: LH,
            nodes: LH.boneNames.map((HH => this.nodesByName.get(HH)))
          }, this.clips.set(HH, BH)
        }
        return BH
      }
    }

    function fH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new GH.lu(HH[0] * BH, HH[1] * BH, HH[2] * BH)
    }
    class lH {
      constructor(HH, BH) {
        this.NQ = HH, this.scale = BH, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(HH) {
        var BH;
        this.petName = HH, null === (BH = this.shownPet) || void 0 === BH || BH.node.vI(!1), this.shownPet = null;
        const LH = (0, UH.h)(HH);
        if (!LH) return;
        let AH;
        try {
          AH = await this.petNode(LH.model)
        } catch {
          return
        }
        this.petName === HH && (AH.node.vI(!0), this.shownPet = AH)
      }
      setAura(HH) {
        const BH = (0, UH.d)(HH);
        return HH === this.auraName && BH === this.auraTuning || (this.auraName = HH, this.auraTuning = BH, this.auraDrawn = this.showAura(HH, BH)), this.auraDrawn
      }
      async showAura(HH, BH) {
        var LH, AH, rH;
        const SH = ++this.auraSeq;
        if (null === (LH = this.aura) || void 0 === LH || LH.dispose(!1), this.aura = null, !BH) return;
        const hH = await (0, TH.h)().catch((BH => (console.error(`Couldn't load the preview's particles for ${HH}:`, BH), null)));
        if (!hH || SH !== this.auraSeq) return;
        const {
          scale: tH
        } = this, {
          opts: zH,
          half: CH
        } = (0, OH.b)(BH), EH = hH(this.NQ, `aura|${HH}`, zH.aX), XH = this.particleTexture(BH.particles.texture);
        EH.texture = XH, (0, bH.b)(EH, {
          ...zH,
          minSize: zH.minSize * tH,
          maxSize: zH.maxSize * tH,
          minEmitPower: zH.minEmitPower * tH,
          maxEmitPower: zH.maxEmitPower * tH,
          gravity: zH.gravity && [zH.gravity[0] * tH, zH.gravity[1] * tH, zH.gravity[2] * tH]
        }), EH.emitRate = zH.emitRate, EH.createBoxEmitter(fH(null !== (AH = zH.dir1) && void 0 !== AH ? AH : oH), fH(null !== (rH = zH.dir2) && void 0 !== rH ? rH : oH), fH(CH, -tH), fH(CH, tH));
        const [YH, uH, QH] = BH.offset;
        EH.emitter = new GH.lu(YH * tH, (uH - 1) * tH, QH * tH), EH.start(), this.aura = EH;
        const WH = XH.mirror;
        WH.isReady() || WH.loadingError || await new Promise((BH => {
          WH.onLoadObservable.addOnce((() => {
            BH()
          })), WH.getInternalTexture().onErrorObservable.addOnce((LH => {
            let {
              message: AH
            } = LH;
            console.error(`Preview aura ${HH}'s texture failed to load: ${AH}`), BH()
          }))
        }))
      }
      writePose(HH) {
        var BH;
        if (!this.shownPet) return;
        const LH = (0, UH.h)(this.petName),
          {
            scale: AH
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, LH);
        const [rH, SH, hH] = LH.followOffset, {
          node: tH
        } = this.shownPet;
        tH.position.set(rH * AH, (SH + (0, VH.c)(LH, HH) - 1) * AH, hH * AH), tH.rotation.y = LH.yawOffset, tH.bX.IHH(LH.scale * AH), null !== (BH = LH.clips) && void 0 !== BH && BH.fly && this.shownPet.play(LH.clips.fly, HH)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(HH, BH) {
        var LH, AH, rH;
        const {
          node: SH
        } = HH;
        SH.position.IHH(0), SH.rotation.y = BH.yawOffset, SH.bX.IHH(1);
        const hH = null !== (LH = null === (AH = BH.clips) || void 0 === AH ? void 0 : AH.perch) && void 0 !== LH ? LH : null === (rH = BH.clips) || void 0 === rH ? void 0 : rH.fly;
        hH && HH.play(hH, 0);
        const {
          min: tH,
          max: zH
        } = SH.getHierarchyBoundingVectors(!0), CH = 2 * this.scale / (zH.y - tH.y);
        SH.bX.IHH(CH), SH.position.set(-(tH.x + zH.x) / 2 * CH, -(tH.y + zH.y) / 2 * CH, -(tH.z + zH.z) / 2 * CH)
      }
      petNode(HH) {
        let BH = this.petNodes.get(HH);
        return BH || (BH = (0, xH.e)(this.NQ, HH, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((BH => {
          const LH = new vH.c(`pet|${HH}`, this.NQ);
          LH.vI(!1);
          for (const HH of BH.rootNodes) HH.parent = LH, (0, xH.k)(HH, !0);
          return new IH(LH)
        }), (BH => {
          throw this.petNodes.delete(HH), console.error(`Failed to load preview pet ${HH}:`, BH), BH
        })), this.petNodes.set(HH, BH)), BH
      }
      particleTexture(HH) {
        let BH = this.particleTextures.get(HH);
        return BH || (BH = (0, PH.o)(this.NQ, (0, kH.f)(HH)), this.particleTextures.set(HH, BH)), BH
      }
    }
    var KH = LH(38035),
      cH = (LH(42418), LH(41784), LH(42420), LH(35018)),
      eH = LH(37105);
    let qH, gH, NH, RH, jH, nH, FH, DH, wH, ZH, dH;
    const aH = document.createElement("canvas");
    async function sH() {
      await new Promise((HH => {
        setTimeout((() => {
          HH()
        }), 100)
      }))
    }
    aH.classList.add("CharCustomisationPreviewCanvas");
    const JH = {};

    function iH(HH, BH) {
      if (!RH) return;
      const hH = (0, rH.c)();
      if (hH.IK(!1), AH.d.Player.meshApi.updatePlayerCosmetic(hH.lF, FH, HH, BH, !0), "cape" === HH)
        if (BH === SH.f) jH.vI(!1);
        else {
          jH.vI(!0);
          jH.material.diffuseTexture = new WH.d(LH(39735)(`./cape_${BH}.png`), jH.yN(), {
            invertY: !1,
            samplingMode: WH.d.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === HH ? JH.pet = ZH.setPet(BH) : "aura" === HH ? JH.aura = ZH.setAura(BH) : JH[HH] = wH.update(HH, BH)
    }

    function pH(HH, BH) {
      const [LH, AH] = (0, eH.e)(HH, BH, window.devicePixelRatio);
      qH.setSize(Math.max(LH, Math.floor(HH)), Math.max(AH, Math.floor(BH)))
    }
    let yH = 0;
    class HB {
      constructor(HH, BH) {
        this.framing = BH, this.ready = dH, this.dev = {
          canvas: () => aH,
          isolateHead(HH) {
            const BH = nH.getNodeNames(FH);
            for (let LH = 0; LH < BH.length; LH++) "HeadMesh" !== BH[LH] && "__root__" !== BH[LH] && "TorsoNode" !== BH[LH] && nH.setNodeEnabled(FH, LH, !1);
            if (HH) {
              const HH = nH.getNamedNode(FH, "HeadMesh");
              nH.setNodeDisableColorWrite(FH, HH, !0, (HH => {
                const BH = new QH.StandardMaterial(`${HH.name}_depthOnly`, HH.yN());
                return BH.disableColorWrite = !0, BH
              }))
            }
            nH.setPosition(FH, 0, -12, 0), iH("pet", "pet_none"), iH("aura", "aura_none")
          },
          isolatePet() {
            const HH = nH.getNodeNames(FH).length;
            for (let BH = 0; BH < HH; BH++) nH.setNodeEnabled(FH, BH, !1);
            jH.vI(!1), iH("aura", "aura_none"), ZH.isolatePet()
          }
        }, this.closed = !1, this.resetCamera();
        const LH = HH.getBoundingClientRect();
        pH(LH.width, LH.height), yH++, qH.stopRenderLoop(), qH.runRenderLoop((() => {
          var HH, BH, LH;
          null === (HH = DH) || void 0 === HH || HH.render(qH.getDeltaTime());
          const AH = performance.now() / 1e3;
          null === (BH = wH) || void 0 === BH || BH.writePoses(AH), null === (LH = ZH) || void 0 === LH || LH.writePose(AH), NH.render()
        }))
      }
      isReady() {
        return !!RH
      }
      setCosmetic(HH, BH) {
        iH(HH, BH)
      }
      playEmote(HH) {
        if (!DH) return;
        if (!HH) return void DH.stopAnimation(zH.g.Emote);
        const BH = (0, hH.h)((0, tH.i)(HH).animation);
        DH.startAnimation(BH, zH.g.Emote, 0, tH.e)
      }
      async untilDrawn(HH) {
        if (await sH(), "cape" === HH && jH) {
          const HH = jH.material,
            BH = null === HH || void 0 === HH ? void 0 : HH.diffuseTexture;
          BH && !BH.isReady() && (await new Promise((HH => {
            BH.onLoadObservable.addOnce((() => {
              HH()
            }))
          })), await sH())
        }
        JH[HH] && (await JH[HH], await sH()), await NH.whenReadyAsync(), await new Promise((HH => {
          NH.onAfterRenderObservable.addOnce((() => {
            HH()
          }))
        }))
      }
      setOrbit(HH) {
        BB(HH)
      }
      resetCamera() {
        gH.inertialAlphaOffset = 0, gH.inertialBetaOffset = 0, gH.inertialRadiusOffset = 0, BB(cH.d[this.framing])
      }
      resize(HH, BH) {
        pH(HH, BH)
      }
      close() {
        this.closed || (this.closed = !0, yH--, 0 === yH && qH.stopRenderLoop())
      }
    }

    function BB(HH) {
      let {
        yaw: BH,
        pitch: LH,
        radius: AH,
        target: rH
      } = HH;
      gH.alpha = BH, gH.beta = LH, AH && (gH.radius = AH), rH && gH.target.set(rH[0], rH[1], rH[2])
    }

    function LB(HH, BH) {
      return HH.appendChild(aH), qH || function() {
        qH = new CH.b(aH, !0, {
          preserveDrawingBuffer: !0
        });
        const HH = (0, rH.c)();
        qH.WrH = HH.mX.engine.WrH, NH = new EH.e(qH), NH.clearColor = new uH.d(0, 0, 0, 0), NH.ambientColor = new uH.Color3(1, 1, 1), gH = new XH.e("wW", 0, 0, 1, GH.lu.Zero(), NH), gH.attachControl(aH, !0), gH.panningSensibility = 0, dH = (0, AH.u)("Player", NH, !0).then((BH => {
          RH = BH.meshApi, jH = BH.capeMesh, nH = HH.mX.bR;
          const LH = 8.33;
          FH = (0, AH.m)("Player", LH, !0, !0), nH.setPosition(FH, 0, -8.33, 0);
          const rH = nH.getNamedNode(FH, "BodyMesh");
          nH.attachTransformNode(jH, FH, rH), nH.set(FH, "aOpacity", 1), nH.sF(FH, "aOpacity", 1), wH = new xH.b(NH, nH, FH), ZH = new lH(NH, LH), DH = new MH.AnimatorState, DH.bG = HH, DH.thinInstMgr = nH, DH.kR = FH, DH.NAH = nH.yAH(FH, 0), DH.modelLifeformType = "Player", DH.nodeNameAliases = (0, KH.e)("Player").nodeNameAliases;
          const SH = jH.jF().boundingBox;
          jH.position.y = ((24 - SH.maximum.y + SH.minimum.y) / 2 - 1 / 32) / LH, jH.position.z = -1 / LH, jH.rotationQuaternion = null;
          const hH = Math.PI / 18,
            tH = SH.maximum.y / LH;
          jH.rotation.x = hH;
          const zH = Math.cos(hH),
            CH = Math.sin(hH);
          jH.position.y += tH * (1 - zH) + 0 * CH, jH.position.z -= tH * CH + 0 * (1 - zH);
          const EH = new QH.StandardMaterial("capeMaterial", jH.yN());
          jH.material = EH;
          const XH = new uH.Color3(1, 1, 1);
          EH.diffuseColor = new uH.Color3, EH.specularColor = new uH.Color3, EH.emissiveColor = new uH.Color3, EH.ambientColor = new uH.Color3, XH.scaleToRef(.43, EH.diffuseColor), XH.scaleToRef(1.75, EH.ambientColor), EH.freeze();
          const WH = new YH.d("light", new GH.lu(-.1, 1, -.3), NH);
          WH.diffuse = new uH.Color3(1, 1, 1), WH.specular = new uH.Color3(1, 1, 1), WH.groundColor = new uH.Color3(.5, .5, .5)
        }))
      }(), new HB(HH, BH)
    }
  },
  39726: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => GH
    });
    var AH = LH(38084),
      rH = LH(38183),
      SH = LH(38213),
      hH = LH(38098),
      tH = LH(38086);

    function zH(HH) {
      return `\n\t\t\t\t${(0,tH.x)(HH,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, tH.C)(HH, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, tH.C)(HH, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, tH.l)(HH, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function CH(HH, BH) {
      let LH = (0, tH.Cb)(HH, "skele" + (BH - 1));
      for (let rH = BH - 2; rH >= 0; rH--) LH = (0, tH.pb)(HH, `boneIdx == ${rH}`, (0, tH.Cb)(HH, `skele${rH}`), LH);
      const AH = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,tH.C)(HH,"int","boneIdx",(0,tH.ub)(HH,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,tH.C)(HH,"vec3","bone",LH)}\n\t\t\t\t${(0,tH.C)(HH,"vec2","pivot",(0,tH.l)(HH,"vec2","0.0",`${(0,tH.Lb)(HH,"position")}.z`))}\n\t\t\t\t${(0,tH.$)(HH)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${AH}));`:`positionUpdated.yz += ${AH};`}\n\t\t`
    }

    function EH(HH) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,tH.l)(HH,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const XH = {
        x: 0,
        y: 0,
        z: 0,
        SX(HH, BH) {
          return this.x = HH[BH], this.y = HH[BH + 1], this.z = HH[BH + 2], this
        }
      },
      GH = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (HH, BH) => ({
          ...(0, AH.e)("CAPE"),
          BLOXD_CAPE_BONES: `${HH}`,
          BLOXD_CAPE_MAX_Y: (0, rH.zb)(BH)
        }),
        getUniforms(HH) {
          return (0, SH.d)(function(HH) {
            const BH = [];
            for (let LH = 0; LH < HH; LH++) BH.push({
              name: `skele${LH}`,
              type: "highp vec3"
            });
            return BH
          }(this.skeleLen), "vertex", HH)
        },
        bind(HH) {
          for (let BH = 0; BH < this.skeleLen; BH++) HH.updateVector3(`skele${BH}`, XH.SX(this.skele, 3 * BH))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(HH, BH) {
          return "vertex" !== HH ? null : {
            CUSTOM_VERTEX_DEFINITIONS: zH(BH),
            CUSTOM_VERTEX_UPDATE_POSITION: CH(BH, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: EH(BH)
          }
        }
      };
    (0, hH.n)(GH)
  },
  39607: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => XH
    });
    var AH = LH(38084),
      rH = LH(38213),
      SH = LH(38086),
      hH = LH(38098);
    const tH = "bloxdTextLodBias",
      zH = [{
        name: tH,
        type: "float"
      }],
      CH = "bloxdTextSample",
      EH = {
        planes: -.5,
        boards: -.5
      },
      XH = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, AH.e)("TEXT_SAMPLER"),
        getUniforms: HH => (0, rH.d)(zH, "fragment", HH),
        bind(HH) {
          HH.updateFloat(tH, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(HH, BH) {
          if ("fragment" !== HH) return null;
          const LH = (0, SH.M)(BH, `vec4 ${CH}(sampler2D s, vec2 uv, float bias)`, `fn ${CH}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            AH = (0, SH.M)(BH, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            rH = `${(0,SH.U)(BH,"vDiffuseUV")} + uvOffset`,
            hH = (0, SH.M)(BH, `${CH}(diffuseSampler, ${rH}, ${(0,SH.Cb)(BH,tH)})`, `${CH}(diffuseSampler, diffuseSamplerSampler, ${rH}, ${(0,SH.Cb)(BH,tH)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${LH} {\n\t\t\t\t\t${(0,SH.C)(BH,"vec4","texel",AH)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,SH.l)(BH,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,SH.l)(BH,"vec3","0.0")}, ${(0,SH.l)(BH,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, SH.G)(BH)]: `baseColor = ${hH};`
          }
        }
      };
    (0, hH.n)(XH)
  },
  42420: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      CapeMaterialPlugin: () => PH,
      HueTintMaterialPlugin: () => TH,
      LifeformMaterialPlugin: () => UH,
      OverlayMaterialPlugin: () => VH
    });
    var AH = LH(42424),
      rH = LH(38878);
    class SH extends((0, AH.f)(rH.e)) {}(0, AH.g)(rH.e, SH);
    var hH = LH(38176);
    class tH extends((0, AH.f)(hH.d)) {}(0, AH.g)(hH.d, tH);
    var zH = LH(38713);
    class CH extends((0, AH.f)(zH.h)) {}(0, AH.g)(zH.h, CH);
    var EH = LH(38194),
      XH = LH(41538),
      GH = LH(38192);
    class YH extends((0, AH.f)(GH.f)) {
      constructor(HH, BH, LH) {
        super(HH, BH, LH), (0, EH.k)(HH)
      }
      dispose(HH) {
        (0, EH.o)(this._material), super.dispose(HH)
      }
    }(0, AH.g)(GH.f, YH), (0, GH.h)({
      disableUnusedSpecularTerm: AH.d,
      isLightingDisabled: HH => HH instanceof XH.StandardMaterial && HH.disableLighting
    });
    var uH = LH(39607);
    class QH extends((0, AH.f)(uH.i)) {}(0, AH.g)(uH.i, QH);
    var WH = LH(39726),
      MH = LH(38077),
      xH = LH(39019),
      vH = LH(38190);
    class PH extends((0, AH.f)(WH.e)) {}(0, AH.g)(WH.e, PH);
    class TH extends((0, AH.f)(MH.e)) {}(0, AH.g)(MH.e, TH);
    class UH extends((0, AH.f)(xH.l)) {}(0, AH.g)(xH.l, UH);
    class VH extends((0, AH.f)(vH.d)) {}(0, AH.g)(vH.d, VH)
  },
  39666: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => CH,
      i: () => tH,
      l: () => zH
    });
    var AH = LH(38222),
      rH = LH(38118);
    const SH = new Set;
    let hH = null;

    function tH(HH) {
      hH = HH
    }

    function zH(HH) {
      if (!hH) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new hH("sky", HH)
    }

    function CH(HH, BH, LH) {
      if (!(0, AH.f)(HH)) return void HH.material.forceCompilation(HH, BH);
      const hH = () => {
        if (HH.mV()) return void SH.delete(HH);
        const AH = (0, rH.V)(HH.material);
        if (![null === AH || void 0 === AH ? void 0 : AH.diffuseTexture, null === AH || void 0 === AH ? void 0 : AH.opacityTexture, null === AH || void 0 === AH ? void 0 : AH.emissiveTexture, null === AH || void 0 === AH ? void 0 : AH.reflectionTexture].every((HH => !HH || LH.prepareTexture(HH)))) return SH.add(HH), void setTimeout(hH, 16);
        SH.delete(HH), BH()
      };
      hH()
    }
  },
  34929: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    var AH = LH(1260);

    function rH() {
      var HH, BH;
      return null !== (HH = null === (BH = screen.orientation) || void 0 === BH ? void 0 : BH.type) && void 0 !== HH ? HH : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const SH = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && rH() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = rH(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, AH.TQ)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const HH of this.resizers) HH()
          }
        }), 1e3)
      }
      heldSizer(HH) {
        let BH = !1;
        return () => {
          if (BH && this.isHeld()) return null;
          const LH = HH();
          return BH ||= null !== LH, LH
        }
      }
      onRelease(HH) {
        return this.resizers.add(HH), () => {
          this.resizers.delete(HH)
        }
      }
    }
  },
  37105: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH
    });
    const AH = 4e5,
      rH = 2;

    function SH(HH, BH, LH) {
      let [SH, hH] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [HH, BH], tH = Math.min(Number.isFinite(LH) && LH > 0 ? LH : 1, rH);
      const zH = Math.max(0, SH, HH) * Math.max(0, hH, BH) * tH * tH;
      return zH > AH && (tH *= Math.sqrt(AH / zH)), [Math.max(1, Math.floor(Math.max(0, HH) * tH)), Math.max(1, Math.floor(Math.max(0, BH) * tH))]
    }
  },
  42424: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => nH,
      f: () => xH,
      g: () => aH
    });
    var AH = LH(41538),
      rH = LH(42427),
      SH = LH(42472),
      hH = LH(42434),
      tH = LH(38681),
      zH = LH(38687),
      CH = LH(38695),
      EH = LH(38697),
      XH = LH(38131),
      GH = LH(38135),
      YH = LH(42439),
      uH = LH(38098),
      QH = LH(38118),
      WH = LH(38086);

    function MH(HH, BH) {
      return Object.assign((function(HH, LH, AH, rH) {
        return BH(this.featureState, HH, LH, AH, rH)
      }), {
        EX: HH
      })
    }

    function xH(HH) {
      const BH = class extends YH.e {
          constructor(BH, LH) {
            const AH = (0, QH.V)(BH),
              rH = AH && (0, QH.s)(AH, HH.name);
            for (var SH = arguments.length, hH = new Array(SH > 2 ? SH - 2 : 0), tH = 2; tH < SH; tH++) hH[tH - 2] = arguments[tH];
            super(BH, HH.name, HH.priority, rH ? rH.defines : HH.defines(...hH), !1), this.featureState = void 0, this.featureState = LH, this._pluginManager._addPlugin(this), this._enable(!0), (0, QH.v)(this._material, HH, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return HH.className
          }
          isCompatible(HH) {
            return HH === WH.c.GLSL || HH === WH.c.WGSL
          }
        },
        LH = (0, uH.h)(HH);
      for (const [AH, rH] of Object.entries(uH.d)) {
        const SH = HH[AH];
        if (SH) {
          const HH = LH[AH];
          Object.defineProperty(BH.prototype, rH, {
            value: MH(SH, HH),
            writable: !0,
            configurable: !0
          })
        }
      }
      return BH
    }
    class vH extends(xH(tH.c)) {}
    var PH = LH(41106),
      TH = LH(42445),
      UH = LH(42449);

    function VH(HH, BH, LH) {
      return (0, UH.d)(LH, BH.urls, (() => async function(HH, BH, LH) {
        const {
          width: AH
        } = HH[0].getSize(), rH = HH.map(((HH, LH) => {
          var rH;
          const SH = Math.round(HH.getSize().height / AH),
            hH = null === BH || void 0 === BH ? void 0 : BH[LH];
          return {
            pixels: hH && hH.byteLength === AH * AH * SH * 4 ? hH : null !== (rH = OH.get(HH.getInternalTexture())) && void 0 !== rH ? rH : HH._readPixelsSync(),
            layers: SH
          }
        })), SH = Math.min(LH.Iu().getCaps().texture2DArrayMaxLayerCount, 256), tH = (0, UH.c)(rH, AH, SH).map((HH => {
          let {
            pixels: BH,
            layers: rH
          } = HH;
          return {
            atlas: new TH.c(BH, AH, AH, rH, PH.b.TEXTUREFORMAT_RGBA, LH, !0, !1, hH.d.NEAREST_NEAREST_MIPLINEAR),
            layers: rH
          }
        }));
        return HH.forEach(((HH, BH) => {
          const AH = HH.getInternalTexture();
          OH.has(AH) || (! function(HH, BH) {
            const LH = BH.createRawTexture(new Uint8Array(4), 1, 1, PH.b.TEXTUREFORMAT_RGBA, !1, !1, hH.d.NEAREST_SAMPLINGMODE);
            HH._hardwareTexture.release(), BH.unbindAllTextures(), LH._swapAndDie(HH, !1)
          }(AH, LH.Iu()), OH.set(AH, rH[BH].pixels))
        })), tH
      }(HH, BH.pixels, LH)))
    }
    const OH = new WeakMap;
    var bH = LH(38705);
    class kH extends(xH(zH.g)) {
      constructor(HH, BH) {
        super(HH, BH), this.loaded = new Set, this.mirrors = void 0, this.mirrors = BH.textures.map((HH => HH.mirror)), BH.useWebGL2 && !BH.imagesPerAtlas.length && BH.textureAtlases.splice(0, BH.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((HH, BH) => {
          HH.onLoadObservable.add((HH => {
            this.setTextureArrayData(HH, BH).catch((HH => {
              console.error(`Failed to build the texture arrays, at atlas ${BH}`, HH)
            }))
          }))
        })), (0, bH.l)(BH, HH.shaderLanguage)
      }
      async setTextureArrayData(HH, BH) {
        const LH = this.featureState,
          {
            width: AH,
            height: rH
          } = HH.getSize(),
          SH = this._material.shaderLanguage;
        if (!LH.useWebGL2) return void(0, bH.f)(this._material, LH, BH, AH, Math.round(rH / AH), SH);
        if (this.loaded.add(BH), this.loaded.size < this.mirrors.length) return;
        const hH = await VH(this.mirrors, LH.sources, this._material.yN());
        (0, bH.b)(this._material, LH, hH, AH, SH)
      }
    }
    var mH = LH(42455),
      oH = LH(41588),
      IH = LH(37961),
      fH = LH(42458),
      lH = LH(41703),
      KH = LH(41578),
      cH = LH(42414),
      eH = LH(38339),
      qH = LH(42463);
    class gH extends mH.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const NH = {
      Mesh: fH.c,
      TransformNode: cH.c,
      rX: mH.b,
      VertexBuffer: mH.e,
      BoundingInfo: oH.d,
      lu: IH.lu,
      ArenaBuffer: gH,
      SubMesh: KH.d,
      VertexData: lH.b,
      MirroredGeometry: qH.c,
      meshFromArrays: qH.f,
      plainMeshFromArrays: qH.g
    };
    (0, eH.d)(NH);
    var RH = LH(38194);
    class jH extends(xH(EH.h)) {
      constructor(HH, BH) {
        if (super(HH, BH), HH instanceof AH.StandardMaterial && BH.dirLightCount > 0) {
          const BH = HH,
            LH = BH._blockDirtyMechanism;
          BH._blockDirtyMechanism = !0, HH.disableLighting = !0, BH._blockDirtyMechanism = LH;
          const AH = (0, QH.V)(HH);
          AH && (AH.disableLighting = !0, (0, QH.T)(AH))
        }(0, RH.k)(HH)
      }
      dispose(HH) {
        (0, RH.o)(this._material), super.dispose(HH)
      }
    }

    function nH(HH, BH) {
      if (!(BH instanceof AH.StandardMaterial) || BH.specularTexture) return;
      const {
        r: LH,
        g: rH,
        b: SH
      } = BH.specularColor;
      0 === LH && 0 === rH && 0 === SH && (HH.SPECULARTERM = !1)
    }(0, EH.d)({
      disableUnusedSpecularTerm: nH
    });
    var FH = LH(38141),
      DH = LH(38353);
    const wH = new RegExp(`^#define ${CH.d}\\s*$`, "m");
    class ZH extends(xH(CH.j)) {
      constructor(HH, BH) {
        super(HH, BH), this.Mu = !1, BH.ditherOnlyWhileFading && (DH.c.add(HH), this.prewarmDitherTwins(HH))
      }
      prewarmDitherTwins(HH) {
        const BH = new WeakSet;
        HH.onEffectCreatedObservable.add((LH => {
          let {
            effect: AH,
            subMesh: rH
          } = LH;
          if (this.featureState.prewarmingDither || BH.has(AH)) return;
          BH.add(AH);
          const SH = null === rH || void 0 === rH ? void 0 : rH.getMesh();
          SH && !wH.test(AH.defines) && HH.yN().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(SH) || BH.delete(AH)
          }))
        }))
      }
      prewarmDither(HH) {
        if (this.Mu || HH.mV()) return !1;
        const BH = new KH.d(0, 0, 0, 0, 0, HH, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(HH, BH)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== BH.effect
      }
      dispose(HH) {
        this.Mu = !0, super.dispose(HH)
      }
    }
    const dH = new Map;

    function aH(HH, BH) {
      dH.set(HH, BH)
    }
    aH(tH.c, vH), aH(zH.g, kH), aH(CH.j, ZH), aH(EH.h, jH), (0, XH.d)({
      create: (HH, BH) => {
        const LH = new AH.StandardMaterial(HH.name, BH);
        return (0, FH.m)(HH, LH), LH.detailMap._pluginDefineNames
      },
      write: (HH, BH, LH) => {
        (0, FH.P)(HH.mirror, BH, LH)
      },
      addFeature: (HH, BH, LH) => {
        const AH = dH.get(BH.feature);
        if (!AH) throw new Error(`${BH.feature.name} has no plugin class (registerPluginClass)`);
        new AH(HH.mirror, BH.state, ...LH)
      },
      texture: (HH, BH, LH) => {
        let {
          url: AH,
          noMipmap: rH,
          invertY: SH,
          samplingMode: tH,
          data: zH,
          sets: CH
        } = LH;
        if (!zH) {
          const LH = new hH.d(AH, BH, rH, SH, tH);
          return Object.assign(LH, CH), void(0, GH.H)(HH, LH)
        }
        const EH = {},
          XH = new Promise(((HH, BH) => {
            EH.onLoad = HH, EH.onError = (HH, LH) => {
              BH(new Error(`${zH.context}: ${(null===LH||void 0===LH?void 0:LH.message)||HH||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: YH,
            bytes: uH,
            label: QH
          } = zH,
          WH = {
            noMipmap: rH,
            invertY: !1,
            samplingMode: tH,
            ...EH,
            mimeType: YH,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          MH = new hH.d(null, BH, WH);
        FH.o.set(MH, XH), Object.assign(MH, CH), MH.updateURL(AH, uH);
        const xH = MH.getInternalTexture();
        xH && (xH.label = QH), HH.uvSet = MH.coordinatesIndex, HH.matrix.set((0, FH.K)(MH)), (0, GH.H)(HH, MH)
      },
      cube: (HH, BH, LH) => {
        let {
          rootUrl: AH,
          files: SH,
          noMipmap: tH,
          luminance: zH
        } = LH;
        const {
          samplingMode: CH
        } = HH.sampler, EH = CH === (0, GH.w)(tH) ? null : () => {
          (0, FH.G)(XH, CH)
        }, XH = new rH.e(AH, BH, null, tH, SH, EH, null, (0, GH.s)(zH));
        XH.coordinatesMode = hH.d.SKYBOX_MODE, (0, GH.H)(HH, XH)
      },
      canvas: (HH, BH, LH) => {
        let {
          width: AH,
          height: rH,
          mipmaps: tH,
          samplingMode: zH,
          hasAlpha: CH = !1,
          wrap: EH = hH.d.CLAMP_ADDRESSMODE
        } = LH;
        const XH = new SH.e(BH, {
          width: AH,
          height: rH
        }, HH, tH, zH);
        XH.hasAlpha = CH, XH.wrapU = EH, XH.wrapV = EH;
        const GH = (0, FH.x)(XH);
        return (0, FH.y)(GH, XH), GH
      }
    })
  },
  42463: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH,
      f: () => XH,
      g: () => GH
    });
    var AH = LH(42455),
      rH = LH(41356),
      SH = LH(41588),
      hH = LH(41706),
      tH = LH(42458),
      zH = LH(41703),
      CH = LH(38251);
    class EH extends hH.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (HH, BH) => {
          this.releaseUnlessInstanced(BH)
        }, this.onLinked = null
      }
      link(HH) {
        var BH;
        (0, CH.r)(HH), this.model = HH, null === (BH = this.onLinked) || void 0 === BH || BH.call(this, HH)
      }
      relink() {
        this.release();
        const HH = [];
        for (const rH of Object.values(this._vertexBuffers))
          if (!rH.getIsInstanced()) {
            const {
              byteOffset: BH,
              byteStride: LH,
              type: AH,
              normalized: SH
            } = rH;
            HH.push({
              kind: rH.getKind(),
              data: rH.getData(),
              offset: BH,
              stride: LH,
              components: rH.getSize(),
              glType: AH,
              isNormalized: SH
            })
          } const BH = this._indices.length ? this._indices : null,
          {
            minimum: LH,
            maximum: AH
          } = this.extend;
        this.link(new CH.h(HH, BH, this.getTotalVertices(), new Float64Array(LH.xrH()), new Float64Array(AH.xrH())))
      }
      copy(HH) {
        if (!this.model) return super.copy(HH);
        const BH = new EH(HH, this.yN()),
          LH = this.vrH(void 0, !0);
        LH && BH.setIndices(LH);
        let hH = !1;
        for (const SH in this._vertexBuffers) {
          const HH = this._vertexBuffers[SH],
            LH = HH.getData();
          if (!LH) continue;
          const tH = HH.getSize(),
            {
              type: zH,
              byteOffset: CH,
              byteStride: EH,
              normalized: XH
            } = HH;
          hH ||= HH.isUpdatable();
          const GH = HH.getIsInstanced() ? (LH instanceof Array ? 4 * LH.length : LH.byteLength) / EH : this.getTotalVertices(),
            YH = (0, rH.r)(LH, tH, zH, CH, EH, GH, !0),
            uH = {
              updatable: HH.isUpdatable(),
              stride: tH,
              type: zH,
              normalized: XH,
              takeBufferOwnership: !0,
              instanced: HH.getIsInstanced()
            };
          BH.setVerticesBuffer(new AH.e(this.Iu(), YH, SH, uH), GH)
        }
        return BH._updatable = hH, BH._boundingInfo = new SH.d(this.extend.minimum, this.extend.maximum), BH.relink(), BH
      }
      static mergeMeshes(HH, BH, LH, AH, rH, SH) {
        const zH = HH[0].yN(),
          CH = new tH.c(HH[0].name + "_merged", zH),
          XH = new EH(hH.d.RandomId(), zH, void 0, !1, CH);
        try {
          if (!tH.c.MergeMeshes(HH, BH, LH, CH, rH, SH)) return CH.dispose(), null
        } catch (GH) {
          throw CH.dispose(), GH
        }
        return XH.relink(), CH
      }
      removeVerticesData(HH) {
        this.releaseUnlessInstanced(HH), super.removeVerticesData(HH)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(HH) {
        var BH;
        HH && null !== (BH = this.getVertexBuffer(HH)) && void 0 !== BH && BH.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, CH.z)(this.model), this.model = null)
      }
    }

    function XH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tH.c(HH, LH);
      const rH = (0, CH.p)(BH),
        {
          positions: SH,
          normals: XH,
          uvs: GH,
          indices: YH,
          named: uH = {}
        } = BH,
        QH = new zH.b;
      QH.positions = SH, QH.normals = null !== XH && void 0 !== XH ? XH : null, QH.uvs = null !== GH && void 0 !== GH ? GH : null, QH.indices = YH;
      const WH = new EH(hH.d.RandomId(), LH, QH, !1, AH);
      for (const {
          kind: hH,
          components: tH
        }
        of rH.vertexAttributes) hH in uH && AH.setVerticesData(hH, uH[hH], !1, tH);
      return WH.link(rH), AH
    }

    function GH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const rH = new tH.c(HH, LH),
        {
          positions: SH,
          normals: hH,
          uvs: CH,
          indices: EH
        } = BH;
      return Object.assign(new zH.b, {
        positions: SH,
        normals: hH,
        uvs: CH,
        indices: EH
      }).applyToMesh(rH, AH), rH
    }
  },
  42449: (HH, BH, LH) => {
    function AH(HH, BH, LH) {
      const AH = BH * BH * 4,
        rH = HH[0].layers,
        SH = rH * (HH.length - 1) + HH[HH.length - 1].layers,
        hH = new Uint8Array(SH * AH);
      HH.forEach(((BH, LH) => {
        const SH = LH + 1 < HH.length ? Math.min(BH.layers, rH) : BH.layers;
        hH.set(new Uint8Array(BH.pixels.buffer, BH.pixels.byteOffset, SH * AH), LH * rH * AH)
      }));
      const tH = Math.max(1, Math.min(SH, LH || SH));
      if (tH === SH) return [{
        pixels: hH,
        layers: SH
      }];
      const zH = [];
      for (let CH = 0; CH < SH; CH += tH) {
        const HH = Math.min(SH, CH + tH);
        zH.push({
          pixels: hH.slice(CH * AH, HH * AH),
          layers: HH - CH
        })
      }
      return zH
    }
    LH.d(BH, {
      c: () => AH,
      d: () => SH
    });
    const rH = new WeakMap;

    function SH(HH, BH, LH) {
      var AH, SH;
      const hH = null !== (AH = rH.get(HH)) && void 0 !== AH ? AH : new Map;
      rH.set(HH, hH);
      const tH = null !== (SH = hH.get(BH[0])) && void 0 !== SH ? SH : [];
      hH.set(BH[0], tH);
      const zH = tH.find((HH => HH.urls.length === BH.length && HH.urls.every(((HH, LH) => HH === BH[LH]))));
      if (zH) return zH.built;
      const CH = {
        urls: [...BH],
        built: LH()
      };
      return tH.push(CH), CH.built.catch((() => {
        tH.splice(tH.indexOf(CH), 1)
      })), CH.built
    }
  },
  39677: (HH, BH, LH) => {
    function AH(HH, BH) {
      return "object" === typeof HH && null !== HH ? Object.assign(HH, {
        startStep: BH
      }) : HH
    }

    function rH(HH) {
      return "object" === typeof HH && null !== HH && "startStep" in HH ? HH.startStep : null
    }
    LH.d(BH, {
      c: () => rH,
      e: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);