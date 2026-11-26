export const id = 266;
export const ids = [266];
export const modules = {
  39624: (UU, XU, zU) => {
    var cU = {
      "./cape_cow_cream.png": 28639,
      "./cape_cow_normal.png": 28646,
      "./cape_creator_level1.png": 28648,
      "./cape_creator_level2.png": 28651,
      "./cape_creator_level3.png": 28660,
      "./cape_none.png": 28669,
      "./cape_pig.png": 28676,
      "./cape_sheep.png": 28683,
      "./cape_super.png": 28686,
      "./cape_super_inverted.png": 28689,
      "./cape_youtuber.png": 28694
    };

    function yU(UU) {
      var XU = QU(UU);
      return zU(XU)
    }

    function QU(UU) {
      if (!zU.o(cU, UU)) {
        var XU = new Error("Cannot find module '" + UU + "'");
        throw XU.code = "MODULE_NOT_FOUND", XU
      }
      return cU[UU]
    }
    yU.keys = function() {
      return Object.keys(cU)
    }, yU.resolve = QU, UU.exports = yU, yU.id = 39624
  },
  39994: (UU, XU, zU) => {
    function cU(UU) {
      return void 0 === UU ? void 0 : [UU[0], UU[1], UU[2]]
    }

    function yU(UU) {
      const XU = UU.particles;
      return {
        opts: {
          texture: XU.texture,
          xY: XU.xY,
          minLifeTime: XU.minLifeTime,
          maxLifeTime: XU.maxLifeTime,
          minSize: XU.minSize,
          maxSize: XU.maxSize,
          minEmitPower: XU.minEmitPower,
          maxEmitPower: XU.maxEmitPower,
          emitRate: XU.emitRate,
          gravity: cU(XU.gravity),
          dir1: cU(XU.dir1),
          dir2: cU(XU.dir2),
          colorGradients: XU.colorGradients,
          blendMode: XU.blendMode
        },
        half: [XU.width / 2, XU.height / 2, XU.depth / 2]
      }
    }
    zU.d(XU, {
      c: () => yU
    })
  },
  39954: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      g: () => DU,
      k: () => oU,
      m: () => AU
    });
    var cU = zU(220);
    const yU = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      QU = "PetRoot";
    let AU = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      FU = yU;
    new Map, new Map;

    function oU(UU) {
      var XU;
      return null !== (XU = (0, cU.b)(AU, UU)) && void 0 !== XU ? XU : null
    }

    function DU(UU) {
      var XU;
      return null !== (XU = (0, cU.b)(FU, UU)) && void 0 !== XU ? XU : null
    }
  },
  39999: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU,
      e: () => yU,
      g: () => QU
    });
    class cU {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Et = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(UU) {
        var XU;
        const {
          feet: zU,
          heading: cU,
          tuning: AU
        } = UU, FU = Math.min(Math.max(UU.dt, 0), .1), {
          pose: oU,
          Et: DU,
          target: EU
        } = this;
        if (this.started && FU > 0) {
          const UU = Math.hypot(zU[0] - this.lastFeet[0], zU[1] - this.lastFeet[1], zU[2] - this.lastFeet[2]);
          this.speed += (UU / FU - this.speed) * Math.min(FU / .15, 1)
        }
        this.lastFeet[0] = zU[0], this.lastFeet[1] = zU[1], this.lastFeet[2] = zU[2], this.stillS = this.speed > .3 ? 0 : this.stillS + FU;
        const YU = this.stillS >= .6 ? "perched" : "flying";
        "flying" === YU && "perched" === oU.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += FU, oU.mode = YU;
        const NU = Math.sin(cU),
          IU = Math.cos(cU);
        "perched" === YU ? (QU(EU, zU, AU.perchOffset, NU, IU), EU[1] += UU.headTopY - zU[1]) : (QU(EU, zU, AU.followOffset, NU, IU), EU[1] += yU(AU, UU.timeS));
        const {
          pos: pU
        } = oU, aU = Math.hypot(EU[0] - pU[0], EU[1] - pU[1], EU[2] - pU[2]);
        if (!this.started || aU > 8 || "perched" === YU && (this.perchLocked || aU < .05)) this.perchLocked = this.started && "perched" === YU, pU[0] = EU[0], pU[1] = EU[1], pU[2] = EU[2], DU[0] = DU[1] = DU[2] = 0;
        else {
          const UU = AU.followStiffness;
          for (let XU = 0; XU < 3; XU++) DU[XU] += (UU * UU * (EU[XU] - pU[XU]) - 2 * UU * DU[XU]) * FU, pU[XU] += DU[XU] * FU
        }
        const tU = cU + AU.yawOffset;
        var gU;
        return this.started ? oU.yaw += ((gU = tU - oU.yaw) - 2 * Math.PI * Math.round(gU / (2 * Math.PI))) * Math.min(8 * FU, 1) : oU.yaw = tU, this.started = !0, oU.seated = "perched" === YU && this.perchLocked, oU.clip = null === (XU = AU.clips) || void 0 === XU ? void 0 : XU[this.YX(YU)], oU
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      YX(UU) {
        return "perched" === UU ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function yU(UU, XU) {
      return UU.bobAmplitude * Math.sin(2 * Math.PI * UU.bobHz * XU)
    }

    function QU(UU, XU, zU, cU, yU) {
      const [QU, AU, FU] = zU;
      UU[0] = XU[0] + QU * yU + FU * cU, UU[1] = XU[1] + AU, UU[2] = XU[2] - QU * cU + FU * yU
    }
  },
  39962: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(37814),
      yU = zU(38610);

    function QU(UU, XU) {
      var zU;
      UU.blendMode = XU.blendMode, UU.minLifeTime = XU.minLifeTime, UU.maxLifeTime = XU.maxLifeTime, UU.minSize = XU.minSize, UU.maxSize = XU.maxSize, UU.minEmitPower = XU.minEmitPower, UU.maxEmitPower = XU.maxEmitPower;
      const QU = null !== (zU = XU.gravity) && void 0 !== zU ? zU : [0, 0, 0];
      UU.gravity = new cU.Sp(QU[0], QU[1], QU[2]);
      for (const cU of XU.colorGradients) UU.addColorGradient(cU.timeFraction, (0, yU.k)(cU.minColor), cU.maxColor ? (0, yU.k)(cU.maxColor) : void 0)
    }
  },
  39552: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => GU,
      f: () => RU,
      h: () => ZU,
      i: () => WU,
      l: () => dU,
      m: () => kU
    });
    var cU = zU(320),
      yU = zU(39566),
      QU = zU(3059),
      AU = zU(3064),
      FU = zU(39556),
      oU = zU(39563),
      DU = zU(27),
      EU = zU(111),
      YU = zU(3203),
      NU = zU(97),
      IU = zU(134),
      pU = zU(42),
      aU = zU(3964),
      tU = zU(123);
    const gU = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function kU(UU) {
      var XU;
      const zU = null !== (XU = EU.currentUrl.getSearchParam(UU)) && void 0 !== XU ? XU : pU.k.getItem(UU);
      return null === zU || void 0 === zU || "" === zU ? null : "0" !== zU && "false" !== zU && !1 !== zU && 0 !== zU
    }
    async function GU(UU, XU) {
      (0, QU.z)(null);
      const zU = (0, AU.m)((0, AU.l)(XU.useWebGpu, !0));
      (0, NU.setWebGpuRequested)("lite" === zU.requested && (0, NU.getWebGpuSupported)());
      const FU = (0, AU.f)(zU.source);
      null !== FU && console.info(`Renderer: ${zU.requested} from ${FU}`), null !== zU.fallbackReason && console.warn(`Renderer: ${zU.fallbackReason}`);
      let EU = zU.fallbackReason;
      if ("webgl2" !== zU.choice) {
        const FU = await async function(UU, XU, zU, AU) {
          const FU = await (0, NU.probeWebGpuAdapter)();
          if ("usable" !== FU) return (0, NU.setWebGpuFallbackReason)(FU), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (zU && !0 === pU.k.getItem(tU.B) && !0 !== pU.k.getItem(cU.vc)) return (0, NU.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), tU.b;
          let EU = "load_failed";
          try {
            const {
              create: zU
            } = await (0, QU.p)(AU).load();
            EU = "start_failed";
            const cU = DU.e.antiAliasingOnWebGpuAdapter((0, IU.l)()),
              yU = (0, oU.f)(UU),
              FU = (0, oU.c)(yU, {
                size: UU => (0, YU.h)(yU, UU)
              });
            return await zU(UU, {
              NcU: cU,
              sceneDepth: XU.sceneDepth,
              sunShadow: XU.sunShadow,
              bufferSize: FU
            })
          } catch (aU) {
            const UU = (0, yU.d)(aU);
            (0, NU.setWebGpuFallbackReason)(UU ? gU[UU] : EU);
            const XU = null === aU || void 0 === aU ? void 0 : aU.fallbackReason;
            return "string" === typeof XU ? (console.warn(`Lite could not start, falling back to WebGL: ${String(aU)}`), XU) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", aU), "it failed to start (see the console)")
          }
        }(UU, XU, "setting" === zU.source, zU.choice);
        if ("lite" === zU.choice && pU.k.setItem(tU.p, "string" === typeof FU), "string" !== typeof FU) return DU.e.followGameGpu((0, IU.l)()), (0, NU.setWebGpuFallbackReason)("none"), (0, AU.q)(zU), (0, QU.z)(FU), {
          lite: FU
        };
        EU = (0, AU.d)(zU.choice, [FU]), UU.replaceWith(UU.cloneNode(!1))
      } else "lite" === zU.requested ? (0, NU.setWebGpuFallbackReason)("load_failed") : "default" === zU.source && XU.webGpuDefaultOffReason ? (0, NU.setWebGpuFallbackReason)(XU.webGpuDefaultOffReason) : (0, NU.setWebGpuFallbackReason)("not_requested");
      return (0, AU.q)({
        ...zU,
        choice: "webgl2",
        fallbackReason: EU
      }), DU.e.followGameGpu(null), {
        lite: null
      }
    }

    function BU() {
      return Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(44223)))
    }
    async function ZU() {
      return (await BU()).createSceneParticleSystem
    }
    async function RU() {
      Promise.all([zU.e(277), zU.e(609)]).then((() => zU(44309))).then((UU => {
        UU.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [UU, XU] = await Promise.all([BU(), Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(44318))), Promise.all([zU.e(277), zU.e(278), zU.e(275), zU.e(285), zU.e(279), zU.e(284), zU.e(282), zU.e(274), zU.e(287), zU.e(299), zU.e(286), zU.e(280), zU.e(281), zU.e(264), zU.e(0)]).then((() => zU(42221)))]);
      return (0, FU.e)(XU.SkyMaterial), UU.default
    }

    function PU(UU) {
      return "lite" === (0, AU.m)((0, AU.l)(UU, !1)).choice && (0, NU.getWebGpuSupported)() && !pU.k.getItem(tU.p)
    }

    function WU(UU) {
      PU(UU) || RU().catch((UU => {
        console.warn("Failed to prefetch noa's Babylon backend.", UU)
      }))
    }

    function dU(UU) {
      (0, aU.g)((() => {
        PU(UU) ? (0, QU.n)().load().catch((UU => {
          console.warn("Failed to prefetch the Lite renderer.", UU)
        })) : WU(UU)
      }))
    }
  },
  39563: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      f: () => AU
    });
    var cU = zU(27),
      yU = zU(34809),
      QU = zU(3203);

    function AU(UU) {
      var XU;
      return null !== (XU = UU.parentElement) && void 0 !== XU ? XU : UU
    }

    function FU(UU, XU) {
      if (UU.clientWidth <= 0 || UU.clientHeight <= 0 || yU.c.isHeld()) return null;
      const zU = (0, QU.k)(),
        [AU, FU] = XU.size(zU);
      return (0, QU.n)(AU, FU, zU, cU.e.get("clientEscMenuOptions").pixelScale)
    }
  },
  42213: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => IU,
      d: () => DU,
      g: () => YU,
      k: () => EU,
      n: () => NU
    });
    var cU = zU(1236),
      yU = zU(2334),
      QU = zU(37886),
      AU = zU(38258);
    class FU {
      constructor(UU, XU) {
        this.pose = UU, this.nodes = void 0, this.nodes = UU.boneNames.map((UU => XU.get(UU)))
      }
      write(UU) {
        this.pose.pose(UU), (0, AU.l)(this.pose, this.nodes)
      }
    }

    function oU(UU) {
      UU.unfreezeWorldMatrix();
      for (const XU of UU.getChildren()) oU(XU)
    }
    async function DU(UU, XU, zU, cU) {
      let {
        keepTransforms: yU,
        backFaceCulling: AU
      } = cU;
      const FU = await (0, QU.j)(XU, UU),
        DU = (0, QU.g)(null !== zU && void 0 !== zU ? zU : XU, UU, void 0, AU);
      (0, QU.m)(FU, DU, {
        keepTransforms: yU,
        backFaceCulling: AU,
        onProcessedMesh: XU => {
          UU.UyU(XU, !1), XU.isVisible = !1
        }
      });
      for (const QU of FU.rootNodes) oU(QU);
      return FU
    }

    function EU(UU, XU) {
      UU.isVisible = XU;
      for (const zU of UU.getChildMeshes()) zU.isVisible = XU
    }

    function YU(UU) {
      const XU = new Map;
      for (const zU of UU.getNodes()) XU.set(zU.name, zU);
      return XU
    }

    function NU(UU, XU, zU, cU) {
      EU(UU, !0), (0, QU.r)(UU, XU.overlayColour), zU.attachTransformNode(UU, cU, zU.getNamedNode(cU, XU.destNode))
    }
    class IU {
      constructor(UU, XU, zU) {
        this.sa = UU, this.thinInstMgr = XU, this.YH = zU, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(UU, XU, zU) {
        const cU = (0, QU.h)(UU, XU);
        return cU in this.modelCache || (this.modelCache[cU] = (async () => {
          try {
            const cU = YU(await DU(this.sa, UU, XU, {
                keepTransforms: void 0 !== zU,
                backFaceCulling: !1
              })),
              yU = void 0 === zU ? null : (0, AU.h)(zU, (UU => {
                const XU = cU.get(UU);
                return XU ? (0, AU.g)(XU) : null
              }));
            return {
              nodesByName: cU,
              bones: null === yU ? null : new FU(yU, cU)
            }
          } catch (yU) {
            throw delete this.modelCache[cU], console.error(`Failed to load preview attachment ${cU}:`, yU), yU
          }
        })()), this.modelCache[cU]
      }
      async update(UU, XU) {
        var zU;
        const {
          thinInstMgr: QU,
          YH: AU
        } = this;
        this.cosmeticNames[UU] = XU;
        const FU = this.attachmentsByType[UU];
        if (FU)
          for (const {
              mesh: yU,
              destNode: DU,
              bones: YU
            }
            of FU) {
            null !== YU && (0, cU.bb)(this.shownBones, YU), EU(yU, !1);
            const UU = QU.getNamedNode(AU, DU);
            QU.detachTransformNodeIfFound(yU, AU, UU)
          }
        this.attachmentsByType[UU] = [];
        const oU = (0, yU.g)(UU, XU);
        if (null !== oU && void 0 !== oU && null !== (zU = oU.attachments) && void 0 !== zU && zU.length)
          for (const cU of oU.attachments) {
            let zU;
            try {
              zU = await this.loadModel(cU.modelGlb, cU.texture, cU.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[UU] !== XU) return;
            const yU = zU.nodesByName.get(cU.modelNode);
            yU ? (NU(yU, cU, QU, AU), this.attachmentsByType[UU].push({
              mesh: yU,
              destNode: cU.destNode,
              bones: zU.bones
            }), null !== zU.bones && this.shownBones.push(zU.bones)) : console.error(`Preview attachment node ${cU.modelNode} not found in ${cU.modelGlb}`)
          }
      }
      writePoses(UU) {
        for (const XU of this.shownBones) XU.write(UU)
      }
    }
  },
  42288: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      openCharacterPreview: () => zX
    });
    var cU = zU(38849),
      yU = zU(3043),
      QU = zU(625),
      AU = zU(37876),
      FU = zU(2338),
      oU = zU(37870),
      DU = zU(40929),
      EU = zU(41199),
      YU = zU(42184),
      NU = zU(37814),
      IU = zU(41331),
      pU = zU(37919),
      aU = zU(41348),
      tU = zU(42242),
      gU = zU(37812),
      kU = zU(42213),
      GU = zU(42205),
      BU = zU(38004),
      ZU = zU(39552),
      RU = zU(39954),
      PU = zU(39999),
      WU = zU(39994),
      dU = zU(39962),
      LU = zU(3519),
      eU = zU(38258);
    const CU = [0, 1, 0];
    class wU {
      constructor(UU) {
        this.node = UU, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const XU of UU.getChildTransformNodes()) this.nodesByName.set(XU.name, XU), this.rests.set(XU.name, (0, eU.g)(XU))
      }
      play(UU, XU) {
        const zU = this.clip(UU);
        zU && (zU.pose.pose(XU), (0, eU.l)(zU.pose, zU.nodes))
      }
      clip(UU) {
        let XU = this.clips.get(UU);
        if (void 0 === XU) {
          const zU = (0, eU.h)(UU, (UU => {
            var XU;
            return null !== (XU = this.rests.get(UU)) && void 0 !== XU ? XU : null
          }));
          XU = zU && {
            pose: zU,
            nodes: zU.boneNames.map((UU => this.nodesByName.get(UU)))
          }, this.clips.set(UU, XU)
        }
        return XU
      }
    }

    function qU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new NU.Sp(UU[0] * XU, UU[1] * XU, UU[2] * XU)
    }
    class OU {
      constructor(UU, XU) {
        this.sa = UU, this.scale = XU, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(UU) {
        var XU;
        this.petName = UU, null === (XU = this.shownPet) || void 0 === XU || XU.node.YC(!1), this.shownPet = null;
        const zU = (0, RU.k)(UU);
        if (!zU) return;
        let cU;
        try {
          cU = await this.petNode(zU.model)
        } catch {
          return
        }
        this.petName === UU && (cU.node.YC(!0), this.shownPet = cU)
      }
      setAura(UU) {
        const XU = (0, RU.g)(UU);
        return UU === this.auraName && XU === this.auraTuning || (this.auraName = UU, this.auraTuning = XU, this.auraDrawn = this.showAura(UU, XU)), this.auraDrawn
      }
      async showAura(UU, XU) {
        var zU, cU, yU;
        const QU = ++this.auraSeq;
        if (null === (zU = this.aura) || void 0 === zU || zU.dispose(!1), this.aura = null, !XU) return;
        const AU = await (0, ZU.h)().catch((XU => (console.error(`Couldn't load the preview's particles for ${UU}:`, XU), null)));
        if (!AU || QU !== this.auraSeq) return;
        const {
          scale: FU
        } = this, {
          opts: oU,
          half: DU
        } = (0, WU.c)(XU), EU = AU(this.sa, `aura|${UU}`, oU.xY), YU = this.particleTexture(XU.particles.texture);
        EU.texture = YU, (0, dU.e)(EU, {
          ...oU,
          minSize: oU.minSize * FU,
          maxSize: oU.maxSize * FU,
          minEmitPower: oU.minEmitPower * FU,
          maxEmitPower: oU.maxEmitPower * FU,
          gravity: oU.gravity && [oU.gravity[0] * FU, oU.gravity[1] * FU, oU.gravity[2] * FU]
        }), EU.emitRate = oU.emitRate, EU.createBoxEmitter(qU(null !== (cU = oU.dir1) && void 0 !== cU ? cU : CU), qU(null !== (yU = oU.dir2) && void 0 !== yU ? yU : CU), qU(DU, -FU), qU(DU, FU));
        const [IU, pU, aU] = XU.offset;
        EU.emitter = new NU.Sp(IU * FU, (pU - 1) * FU, aU * FU), EU.start(), this.aura = EU;
        const tU = YU.mirror;
        tU.isReady() || tU.loadingError || await new Promise((XU => {
          tU.onLoadObservable.addOnce((() => {
            XU()
          })), tU.getInternalTexture().onErrorObservable.addOnce((zU => {
            let {
              message: cU
            } = zU;
            console.error(`Preview aura ${UU}'s texture failed to load: ${cU}`), XU()
          }))
        }))
      }
      writePose(UU) {
        var XU;
        if (!this.shownPet) return;
        const zU = (0, RU.k)(this.petName),
          {
            scale: cU
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, zU);
        const [yU, QU, AU] = zU.followOffset, {
          node: FU
        } = this.shownPet;
        FU.position.set(yU * cU, (QU + (0, PU.e)(zU, UU) - 1) * cU, AU * cU), FU.rotation.y = zU.yawOffset, FU.RY.IUU(zU.scale * cU), null !== (XU = zU.clips) && void 0 !== XU && XU.fly && this.shownPet.play(zU.clips.fly, UU)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(UU, XU) {
        var zU, cU, yU;
        const {
          node: QU
        } = UU;
        QU.position.IUU(0), QU.rotation.y = XU.yawOffset, QU.RY.IUU(1);
        const AU = null !== (zU = null === (cU = XU.clips) || void 0 === cU ? void 0 : cU.perch) && void 0 !== zU ? zU : null === (yU = XU.clips) || void 0 === yU ? void 0 : yU.fly;
        AU && UU.play(AU, 0);
        const {
          min: FU,
          max: oU
        } = QU.getHierarchyBoundingVectors(!0), DU = 2 * this.scale / (oU.y - FU.y);
        QU.RY.IUU(DU), QU.position.set(-(FU.x + oU.x) / 2 * DU, -(FU.y + oU.y) / 2 * DU, -(FU.z + oU.z) / 2 * DU)
      }
      petNode(UU) {
        let XU = this.petNodes.get(UU);
        return XU || (XU = (0, kU.d)(this.sa, UU, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((XU => {
          const zU = new GU.c(`pet|${UU}`, this.sa);
          zU.YC(!1);
          for (const UU of XU.rootNodes) UU.parent = zU, (0, kU.k)(UU, !0);
          return new wU(zU)
        }), (XU => {
          throw this.petNodes.delete(UU), console.error(`Failed to load preview pet ${UU}:`, XU), XU
        })), this.petNodes.set(UU, XU)), XU
      }
      particleTexture(UU) {
        let XU = this.particleTextures.get(UU);
        return XU || (XU = (0, BU.q)(this.sa, (0, LU.e)(UU)), this.particleTextures.set(UU, XU)), XU
      }
    }
    var SU = zU(37882),
      rU = (zU(42215), zU(41563), zU(42221), zU(34904)),
      uU = zU(42292);
    let fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU;
    const JU = document.createElement("canvas");
    async function jU() {
      await new Promise((UU => {
        setTimeout((() => {
          UU()
        }), 100)
      }))
    }
    JU.classList.add("CharCustomisationPreviewCanvas");
    const KU = {};

    function bU(UU, XU) {
      if (!MU) return;
      const AU = (0, yU.e)();
      if (AU.nC(!1), cU.d.Player.meshApi.updatePlayerCosmetic(AU.pM, sU, UU, XU, !0), "cape" === UU)
        if (XU === QU.f) vU.YC(!1);
        else {
          vU.YC(!0);
          vU.material.diffuseTexture = new tU.b(zU(39624)(`./cape_${XU}.png`), vU.nS(), {
            invertY: !1,
            samplingMode: tU.b.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === UU ? KU.pet = lU.setPet(XU) : "aura" === UU ? KU.aura = lU.setAura(XU) : KU[UU] = mU.update(UU, XU)
    }

    function TU(UU, XU) {
      const [zU, cU] = (0, uU.e)(UU, XU, window.devicePixelRatio);
      fU.setSize(Math.max(zU, Math.floor(UU)), Math.max(cU, Math.floor(XU)))
    }
    let hU = 0;
    class UX {
      constructor(UU, XU) {
        this.framing = XU, this.ready = xU, this.dev = {
          canvas: () => JU,
          isolateHead(UU) {
            const XU = VU.getNodeNames(sU);
            for (let zU = 0; zU < XU.length; zU++) "HeadMesh" !== XU[zU] && "__root__" !== XU[zU] && "TorsoNode" !== XU[zU] && VU.setNodeEnabled(sU, zU, !1);
            if (UU) {
              const UU = VU.getNamedNode(sU, "HeadMesh");
              VU.setNodeDisableColorWrite(sU, UU, !0, (UU => {
                const XU = new aU.StandardMaterial(`${UU.name}_depthOnly`, UU.nS());
                return XU.disableColorWrite = !0, XU
              }))
            }
            VU.setPosition(sU, 0, -12, 0), bU("pet", "pet_none"), bU("aura", "aura_none")
          },
          isolatePet() {
            const UU = VU.getNodeNames(sU).length;
            for (let XU = 0; XU < UU; XU++) VU.setNodeEnabled(sU, XU, !1);
            vU.YC(!1), bU("aura", "aura_none"), lU.isolatePet()
          }
        }, this.closed = !1, this.resetCamera();
        const zU = UU.getBoundingClientRect();
        TU(zU.width, zU.height), hU++, fU.stopRenderLoop(), fU.runRenderLoop((() => {
          var UU, XU, zU;
          null === (UU = nU) || void 0 === UU || UU.render(fU.getDeltaTime());
          const cU = performance.now() / 1e3;
          null === (XU = mU) || void 0 === XU || XU.writePoses(cU), null === (zU = lU) || void 0 === zU || zU.writePose(cU), HU.render()
        }))
      }
      isReady() {
        return !!MU
      }
      setCosmetic(UU, XU) {
        bU(UU, XU)
      }
      playEmote(UU) {
        if (!nU) return;
        if (!UU) return void nU.stopAnimation(oU.f.Emote);
        const XU = (0, AU.g)((0, FU.g)(UU).animation);
        nU.startAnimation(XU, oU.f.Emote, 0, FU.b)
      }
      async untilDrawn(UU) {
        if (await jU(), "cape" === UU && vU) {
          const UU = vU.material,
            XU = null === UU || void 0 === UU ? void 0 : UU.diffuseTexture;
          XU && !XU.isReady() && (await new Promise((UU => {
            XU.onLoadObservable.addOnce((() => {
              UU()
            }))
          })), await jU())
        }
        KU[UU] && (await KU[UU], await jU()), await HU.whenReadyAsync(), await new Promise((UU => {
          HU.onAfterRenderObservable.addOnce((() => {
            UU()
          }))
        }))
      }
      setOrbit(UU) {
        XX(UU)
      }
      resetCamera() {
        iU.inertialAlphaOffset = 0, iU.inertialBetaOffset = 0, iU.inertialRadiusOffset = 0, XX(rU.e[this.framing])
      }
      resize(UU, XU) {
        TU(UU, XU)
      }
      close() {
        this.closed || (this.closed = !0, hU--, 0 === hU && fU.stopRenderLoop())
      }
    }

    function XX(UU) {
      let {
        yaw: XU,
        pitch: zU,
        radius: cU,
        target: yU
      } = UU;
      iU.alpha = XU, iU.beta = zU, cU && (iU.radius = cU), yU && iU.target.set(yU[0], yU[1], yU[2])
    }

    function zX(UU, XU) {
      return UU.appendChild(JU), fU || function() {
        fU = new DU.c(JU, !0, {
          preserveDrawingBuffer: !0
        });
        const UU = (0, yU.e)();
        fU.XyU = UU.WY.engine.XyU, HU = new EU.e(fU), HU.clearColor = new pU.e(0, 0, 0, 0), HU.ambientColor = new pU.Color3(1, 1, 1), iU = new YU.e("bt", 0, 0, 1, NU.Sp.Zero(), HU), iU.attachControl(JU, !0), iU.panningSensibility = 0, xU = (0, cU.w)("Player", HU, !0).then((XU => {
          MU = XU.meshApi, vU = XU.capeMesh, VU = UU.WY.DH;
          const zU = 8.33;
          sU = (0, cU.o)("Player", zU, !0, !0), VU.setPosition(sU, 0, -8.33, 0);
          const yU = VU.getNamedNode(sU, "BodyMesh");
          VU.attachTransformNode(vU, sU, yU), VU.set(sU, "aOpacity", 1), VU.rM(sU, "aOpacity", 1), mU = new kU.c(HU, VU, sU), lU = new OU(HU, zU), nU = new gU.AnimatorState, nU.WN = UU, nU.thinInstMgr = VU, nU.YH = sU, nU.RcU = VU.icU(sU, 0), nU.modelLifeformType = "Player", nU.nodeNameAliases = (0, SU.e)("Player").nodeNameAliases;
          const QU = vU.gM().boundingBox;
          vU.position.y = ((24 - QU.maximum.y + QU.minimum.y) / 2 - 1 / 32) / zU, vU.position.z = -1 / zU, vU.rotationQuaternion = null;
          const AU = Math.PI / 18,
            FU = QU.maximum.y / zU;
          vU.rotation.x = AU;
          const oU = Math.cos(AU),
            DU = Math.sin(AU);
          vU.position.y += FU * (1 - oU) + 0 * DU, vU.position.z -= FU * DU + 0 * (1 - oU);
          const EU = new aU.StandardMaterial("capeMaterial", vU.nS());
          vU.material = EU;
          const YU = new pU.Color3(1, 1, 1);
          EU.diffuseColor = new pU.Color3, EU.specularColor = new pU.Color3, EU.emissiveColor = new pU.Color3, EU.ambientColor = new pU.Color3, YU.scaleToRef(.43, EU.diffuseColor), YU.scaleToRef(1.75, EU.ambientColor), EU.freeze();
          const tU = new IU.d("light", new NU.Sp(-.1, 1, -.3), HU);
          tU.diffuse = new pU.Color3(1, 1, 1), tU.specular = new pU.Color3(1, 1, 1), tU.groundColor = new pU.Color3(.5, .5, .5)
        }))
      }(), new UX(UU, XU)
    }
  },
  39621: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU
    });
    var cU = zU(37940),
      yU = zU(38037),
      QU = zU(38077),
      AU = zU(37961),
      FU = zU(37946);

    function oU(UU) {
      return `\n\t\t\t\t${(0,FU.x)(UU,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, FU.C)(UU, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, FU.C)(UU, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, FU.k)(UU, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function DU(UU, XU) {
      let zU = (0, FU.xb)(UU, "skele" + (XU - 1));
      for (let yU = XU - 2; yU >= 0; yU--) zU = (0, FU.mb)(UU, `boneIdx == ${yU}`, (0, FU.xb)(UU, `skele${yU}`), zU);
      const cU = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,FU.C)(UU,"int","boneIdx",(0,FU.rb)(UU,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,FU.C)(UU,"vec3","bone",zU)}\n\t\t\t\t${(0,FU.C)(UU,"vec2","pivot",(0,FU.k)(UU,"vec2","0.0",`${(0,FU.Ib)(UU,"position")}.z`))}\n\t\t\t\t${(0,FU.V)(UU)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${cU}));`:`positionUpdated.yz += ${cU};`}\n\t\t`
    }

    function EU(UU) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,FU.k)(UU,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const YU = {
        x: 0,
        y: 0,
        z: 0,
        zY(UU, XU) {
          return this.x = UU[XU], this.y = UU[XU + 1], this.z = UU[XU + 2], this
        }
      },
      NU = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (UU, XU) => ({
          ...(0, cU.d)("CAPE"),
          BLOXD_CAPE_BONES: `${UU}`,
          BLOXD_CAPE_MAX_Y: (0, yU.Ab)(XU)
        }),
        getUniforms(UU) {
          return (0, QU.d)(function(UU) {
            const XU = [];
            for (let zU = 0; zU < UU; zU++) XU.push({
              name: `skele${zU}`,
              type: "highp vec3"
            });
            return XU
          }(this.skeleLen), "vertex", UU)
        },
        bind(UU) {
          for (let XU = 0; XU < this.skeleLen; XU++) UU.updateVector3(`skele${XU}`, YU.zY(this.skele, 3 * XU))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(UU, XU) {
          return "vertex" !== UU ? null : {
            CUSTOM_VERTEX_DEFINITIONS: oU(XU),
            CUSTOM_VERTEX_UPDATE_POSITION: DU(XU, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: EU(XU)
          }
        }
      };
    (0, AU.n)(NU)
  },
  39504: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => EU,
      g: () => YU
    });
    var cU = zU(37940),
      yU = zU(38077),
      QU = zU(37946),
      AU = zU(37961);
    const FU = "bloxdTextLodBias",
      oU = [{
        name: FU,
        type: "float"
      }],
      DU = "bloxdTextSample",
      EU = {
        planes: -.5,
        boards: -.5
      },
      YU = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, cU.d)("TEXT_SAMPLER"),
        getUniforms: UU => (0, yU.d)(oU, "fragment", UU),
        bind(UU) {
          UU.updateFloat(FU, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(UU, XU) {
          if ("fragment" !== UU) return null;
          const zU = (0, QU.L)(XU, `vec4 ${DU}(sampler2D s, vec2 uv, float bias)`, `fn ${DU}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            cU = (0, QU.L)(XU, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            yU = `${(0,QU.R)(XU,"vDiffuseUV")} + uvOffset`,
            AU = (0, QU.L)(XU, `${DU}(diffuseSampler, ${yU}, ${(0,QU.xb)(XU,FU)})`, `${DU}(diffuseSampler, diffuseSamplerSampler, ${yU}, ${(0,QU.xb)(XU,FU)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${zU} {\n\t\t\t\t\t${(0,QU.C)(XU,"vec4","texel",cU)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,QU.k)(XU,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,QU.k)(XU,"vec3","0.0")}, ${(0,QU.k)(XU,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, QU.F)(XU)]: `baseColor = ${AU};`
          }
        }
      };
    (0, AU.n)(YU)
  },
  42221: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      CapeMaterialPlugin: () => BU,
      HueTintMaterialPlugin: () => ZU,
      LifeformMaterialPlugin: () => RU,
      OverlayMaterialPlugin: () => PU
    });
    var cU = zU(42229),
      yU = zU(38758);
    class QU extends((0, cU.i)(yU.e)) {}(0, cU.l)(yU.e, QU);
    var AU = zU(38034);
    class FU extends((0, cU.i)(AU.d)) {}(0, cU.l)(AU.d, FU);
    var oU = zU(38597);
    class DU extends((0, cU.i)(oU.e)) {}(0, cU.l)(oU.e, DU);
    var EU = zU(38057),
      YU = zU(41348),
      NU = zU(38053);
    class IU extends((0, cU.i)(NU.g)) {
      constructor(UU, XU, zU) {
        super(UU, XU, zU), (0, EU.h)(UU)
      }
      dispose(UU) {
        (0, EU.k)(this._material), super.dispose(UU)
      }
    }(0, cU.l)(NU.g, IU), (0, NU.i)({
      disableUnusedSpecularTerm: cU.e,
      isLightingDisabled: UU => UU instanceof YU.StandardMaterial && UU.disableLighting
    });
    var pU = zU(39504);
    class aU extends((0, cU.i)(pU.g)) {}(0, cU.l)(pU.g, aU);
    var tU = zU(39621),
      gU = zU(37932),
      kU = zU(38891),
      GU = zU(38046);
    class BU extends((0, cU.i)(tU.e)) {}(0, cU.l)(tU.e, BU);
    class ZU extends((0, cU.i)(gU.b)) {}(0, cU.l)(gU.b, ZU);
    class RU extends((0, cU.i)(kU.p)) {}(0, cU.l)(kU.p, RU);
    class PU extends((0, cU.i)(GU.d)) {}(0, cU.l)(GU.d, PU)
  },
  39556: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU,
      e: () => FU,
      h: () => oU
    });
    var cU = zU(38083),
      yU = zU(37977);
    const QU = new Set;
    let AU = null;

    function FU(UU) {
      AU = UU
    }

    function oU(UU) {
      if (!AU) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new AU("sky", UU)
    }

    function DU(UU, XU, zU) {
      if (!(0, cU.e)(UU)) return void UU.material.forceCompilation(UU, XU);
      const AU = () => {
        if (UU.oR()) return void QU.delete(UU);
        const cU = (0, yU.V)(UU.material);
        if (![null === cU || void 0 === cU ? void 0 : cU.diffuseTexture, null === cU || void 0 === cU ? void 0 : cU.opacityTexture, null === cU || void 0 === cU ? void 0 : cU.emissiveTexture, null === cU || void 0 === cU ? void 0 : cU.reflectionTexture].every((UU => !UU || zU.prepareTexture(UU)))) return QU.add(UU), void setTimeout(AU, 16);
        QU.delete(UU), XU()
      };
      AU()
    }
  },
  42292: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    const cU = 4e5,
      yU = 2;

    function QU(UU, XU, zU) {
      let [QU, AU] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [UU, XU], FU = Math.min(Number.isFinite(zU) && zU > 0 ? zU : 1, yU);
      const oU = Math.max(0, QU, UU) * Math.max(0, AU, XU) * FU * FU;
      return oU > cU && (FU *= Math.sqrt(cU / oU)), [Math.max(1, Math.floor(Math.max(0, UU) * FU)), Math.max(1, Math.floor(Math.max(0, XU) * FU))]
    }
  },
  42229: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => VU,
      i: () => kU,
      l: () => JU
    });
    var cU = zU(41348),
      yU = zU(42233),
      QU = zU(42279),
      AU = zU(42242),
      FU = zU(38563),
      oU = zU(38573),
      DU = zU(38581),
      EU = zU(38589),
      YU = zU(37995),
      NU = zU(38004),
      IU = zU(42248),
      pU = zU(37961),
      aU = zU(37977),
      tU = zU(37946);

    function gU(UU, XU) {
      return Object.assign((function(UU, zU, cU, yU) {
        return XU(this.featureState, UU, zU, cU, yU)
      }), {
        FY: UU
      })
    }

    function kU(UU) {
      const XU = class extends IU.c {
          constructor(XU, zU) {
            const cU = (0, aU.V)(XU),
              yU = cU && (0, aU.v)(cU, UU.name);
            for (var QU = arguments.length, AU = new Array(QU > 2 ? QU - 2 : 0), FU = 2; FU < QU; FU++) AU[FU - 2] = arguments[FU];
            super(XU, UU.name, UU.priority, yU ? yU.defines : UU.defines(...AU), !1), this.featureState = void 0, this.featureState = zU, this._pluginManager._addPlugin(this), this._enable(!0), (0, aU.x)(this._material, UU, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return UU.className
          }
          isCompatible(UU) {
            return UU === tU.b.GLSL || UU === tU.b.WGSL
          }
        },
        zU = (0, pU.j)(UU);
      for (const [cU, yU] of Object.entries(pU.e)) {
        const QU = UU[cU];
        if (QU) {
          const UU = zU[cU];
          Object.defineProperty(XU.prototype, yU, {
            value: gU(QU, UU),
            writable: !0,
            configurable: !0
          })
        }
      }
      return XU
    }
    class GU extends(kU(FU.c)) {}
    var BU = zU(40929),
      ZU = zU(42257),
      RU = zU(42259);

    function PU(UU, XU, zU) {
      return (0, RU.g)(zU, XU.urls, (() => async function(UU, XU, zU) {
        const {
          width: cU
        } = UU[0].getSize(), yU = UU.map(((UU, zU) => {
          var yU;
          const QU = Math.round(UU.getSize().height / cU),
            AU = null === XU || void 0 === XU ? void 0 : XU[zU];
          return {
            pixels: AU && AU.byteLength === cU * cU * QU * 4 ? AU : null !== (yU = WU.get(UU.getInternalTexture())) && void 0 !== yU ? yU : UU._readPixelsSync(),
            layers: QU
          }
        })), QU = Math.min(zU.qp().getCaps().texture2DArrayMaxLayerCount, 256), FU = (0, RU.d)(yU, cU, QU).map((UU => {
          let {
            pixels: XU,
            layers: yU
          } = UU;
          return {
            atlas: new ZU.b(XU, cU, cU, yU, BU.c.TEXTUREFORMAT_RGBA, zU, !0, !1, AU.b.NEAREST_NEAREST_MIPLINEAR),
            layers: yU
          }
        }));
        return UU.forEach(((UU, XU) => {
          const cU = UU.getInternalTexture();
          WU.has(cU) || (! function(UU, XU) {
            const zU = XU.createRawTexture(new Uint8Array(4), 1, 1, BU.c.TEXTUREFORMAT_RGBA, !1, !1, AU.b.NEAREST_SAMPLINGMODE);
            UU._hardwareTexture.release(), XU.unbindAllTextures(), zU._swapAndDie(UU, !1)
          }(cU, zU.qp()), WU.set(cU, yU[XU].pixels))
        })), FU
      }(UU, XU.pixels, zU)))
    }
    const WU = new WeakMap;
    var dU = zU(38592);
    class LU extends(kU(oU.j)) {
      constructor(UU, XU) {
        super(UU, XU), this.loaded = new Set, this.mirrors = void 0, this.mirrors = XU.textures.map((UU => UU.mirror)), XU.useWebGL2 && !XU.imagesPerAtlas.length && XU.textureAtlases.splice(0, XU.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((UU, XU) => {
          UU.onLoadObservable.add((UU => {
            this.setTextureArrayData(UU, XU).catch((UU => {
              console.error(`Failed to build the texture arrays, at atlas ${XU}`, UU)
            }))
          }))
        })), (0, dU.h)(XU, UU.shaderLanguage)
      }
      async setTextureArrayData(UU, XU) {
        const zU = this.featureState,
          {
            width: cU,
            height: yU
          } = UU.getSize(),
          QU = this._material.shaderLanguage;
        if (!zU.useWebGL2) return void(0, dU.d)(this._material, zU, XU, cU, Math.round(yU / cU), QU);
        if (this.loaded.add(XU), this.loaded.size < this.mirrors.length) return;
        const AU = await PU(this.mirrors, zU.sources, this._material.nS());
        (0, dU.b)(this._material, zU, AU, cU, QU)
      }
    }
    var eU = zU(42261),
      CU = zU(41387),
      wU = zU(37814),
      qU = zU(42269),
      OU = zU(41493),
      SU = zU(41378),
      rU = zU(42205),
      uU = zU(38236),
      fU = zU(42273);
    class iU extends eU.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const HU = {
      Mesh: qU.d,
      TransformNode: rU.c,
      XY: eU.b,
      VertexBuffer: eU.e,
      BoundingInfo: CU.b,
      Sp: wU.Sp,
      ArenaBuffer: iU,
      SubMesh: SU.d,
      VertexData: OU.c,
      MirroredGeometry: fU.e,
      meshFromArrays: fU.f,
      plainMeshFromArrays: fU.i
    };
    (0, uU.d)(HU);
    var MU = zU(38057);
    class vU extends(kU(EU.h)) {
      constructor(UU, XU) {
        if (super(UU, XU), UU instanceof cU.StandardMaterial && XU.dirLightCount > 0) {
          const XU = UU,
            zU = XU._blockDirtyMechanism;
          XU._blockDirtyMechanism = !0, UU.disableLighting = !0, XU._blockDirtyMechanism = zU;
          const cU = (0, aU.V)(UU);
          cU && (cU.disableLighting = !0, (0, aU.T)(cU))
        }(0, MU.h)(UU)
      }
      dispose(UU) {
        (0, MU.k)(this._material), super.dispose(UU)
      }
    }

    function VU(UU, XU) {
      if (!(XU instanceof cU.StandardMaterial) || XU.specularTexture) return;
      const {
        r: zU,
        g: yU,
        b: QU
      } = XU.specularColor;
      0 === zU && 0 === yU && 0 === QU && (UU.SPECULARTERM = !1)
    }(0, EU.f)({
      disableUnusedSpecularTerm: VU
    });
    var sU = zU(38007),
      nU = zU(38243);
    const mU = new RegExp(`^#define ${DU.b}\\s*$`, "m");
    class lU extends(kU(DU.f)) {
      constructor(UU, XU) {
        super(UU, XU), this.kp = !1, XU.ditherOnlyWhileFading && (nU.e.add(UU), this.prewarmDitherTwins(UU))
      }
      prewarmDitherTwins(UU) {
        const XU = new WeakSet;
        UU.onEffectCreatedObservable.add((zU => {
          let {
            effect: cU,
            subMesh: yU
          } = zU;
          if (this.featureState.prewarmingDither || XU.has(cU)) return;
          XU.add(cU);
          const QU = null === yU || void 0 === yU ? void 0 : yU.getMesh();
          QU && !mU.test(cU.defines) && UU.nS().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(QU) || XU.delete(cU)
          }))
        }))
      }
      prewarmDither(UU) {
        if (this.kp || UU.oR()) return !1;
        const XU = new SU.d(0, 0, 0, 0, 0, UU, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(UU, XU)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== XU.effect
      }
      dispose(UU) {
        this.kp = !0, super.dispose(UU)
      }
    }
    const xU = new Map;

    function JU(UU, XU) {
      xU.set(UU, XU)
    }
    JU(FU.c, GU), JU(oU.j, LU), JU(DU.f, lU), JU(EU.h, vU), (0, YU.e)({
      create: (UU, XU) => {
        const zU = new cU.StandardMaterial(UU.name, XU);
        return (0, sU.m)(UU, zU), zU.detailMap._pluginDefineNames
      },
      write: (UU, XU, zU) => {
        (0, sU.S)(UU.mirror, XU, zU)
      },
      addFeature: (UU, XU, zU) => {
        const cU = xU.get(XU.feature);
        if (!cU) throw new Error(`${XU.feature.name} has no plugin class (registerPluginClass)`);
        new cU(UU.mirror, XU.state, ...zU)
      },
      texture: (UU, XU, zU) => {
        let {
          url: cU,
          noMipmap: yU,
          invertY: QU,
          samplingMode: FU,
          data: oU,
          sets: DU
        } = zU;
        if (!oU) {
          const zU = new AU.b(cU, XU, yU, QU, FU);
          return Object.assign(zU, DU), void(0, NU.I)(UU, zU)
        }
        const EU = {},
          YU = new Promise(((UU, XU) => {
            EU.onLoad = UU, EU.onError = (UU, zU) => {
              XU(new Error(`${oU.context}: ${(null===zU||void 0===zU?void 0:zU.message)||UU||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: IU,
            bytes: pU,
            label: aU
          } = oU,
          tU = {
            noMipmap: yU,
            invertY: !1,
            samplingMode: FU,
            ...EU,
            mimeType: IU,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          gU = new AU.b(null, XU, tU);
        sU.n.set(gU, YU), Object.assign(gU, DU), gU.updateURL(cU, pU);
        const kU = gU.getInternalTexture();
        kU && (kU.label = aU), UU.uvSet = gU.coordinatesIndex, UU.matrix.set((0, sU.J)(gU)), (0, NU.I)(UU, gU)
      },
      cube: (UU, XU, zU) => {
        let {
          rootUrl: cU,
          files: QU,
          noMipmap: FU,
          luminance: oU
        } = zU;
        const {
          samplingMode: DU
        } = UU.sampler, EU = DU === (0, NU.A)(FU) ? null : () => {
          (0, sU.F)(YU, DU)
        }, YU = new yU.b(cU, XU, null, FU, QU, EU, null, (0, NU.w)(oU));
        YU.coordinatesMode = AU.b.SKYBOX_MODE, (0, NU.I)(UU, YU)
      },
      canvas: (UU, XU, zU) => {
        let {
          width: cU,
          height: yU,
          mipmaps: FU,
          samplingMode: oU,
          hasAlpha: DU = !1,
          wrap: EU = AU.b.CLAMP_ADDRESSMODE
        } = zU;
        const YU = new QU.e(XU, {
          width: cU,
          height: yU
        }, UU, FU, oU);
        YU.hasAlpha = DU, YU.wrapU = EU, YU.wrapV = EU;
        const NU = (0, sU.v)(YU);
        return (0, sU.x)(NU, YU), NU
      }
    })
  },
  42273: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      f: () => YU,
      i: () => NU
    });
    var cU = zU(42261),
      yU = zU(41177),
      QU = zU(41387),
      AU = zU(41495),
      FU = zU(42269),
      oU = zU(41493),
      DU = zU(38121);
    class EU extends AU.d {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (UU, XU) => {
          this.releaseUnlessInstanced(XU)
        }, this.onLinked = null
      }
      link(UU) {
        var XU;
        (0, DU.p)(UU), this.model = UU, null === (XU = this.onLinked) || void 0 === XU || XU.call(this, UU)
      }
      relink() {
        this.release();
        const UU = [];
        for (const yU of Object.values(this._vertexBuffers))
          if (!yU.getIsInstanced()) {
            const {
              byteOffset: XU,
              byteStride: zU,
              type: cU,
              normalized: QU
            } = yU;
            UU.push({
              kind: yU.getKind(),
              data: yU.getData(),
              offset: XU,
              stride: zU,
              components: yU.getSize(),
              glType: cU,
              isNormalized: QU
            })
          } const XU = this._indices.length ? this._indices : null,
          {
            minimum: zU,
            maximum: cU
          } = this.extend;
        this.link(new DU.h(UU, XU, this.getTotalVertices(), new Float64Array(zU.cyU()), new Float64Array(cU.cyU())))
      }
      copy(UU) {
        if (!this.model) return super.copy(UU);
        const XU = new EU(UU, this.nS()),
          zU = this.yyU(void 0, !0);
        zU && XU.setIndices(zU);
        let AU = !1;
        for (const QU in this._vertexBuffers) {
          const UU = this._vertexBuffers[QU],
            zU = UU.getData();
          if (!zU) continue;
          const FU = UU.getSize(),
            {
              type: oU,
              byteOffset: DU,
              byteStride: EU,
              normalized: YU
            } = UU;
          AU ||= UU.isUpdatable();
          const NU = UU.getIsInstanced() ? (zU instanceof Array ? 4 * zU.length : zU.byteLength) / EU : this.getTotalVertices(),
            IU = (0, yU.s)(zU, FU, oU, DU, EU, NU, !0),
            pU = {
              updatable: UU.isUpdatable(),
              stride: FU,
              type: oU,
              normalized: YU,
              takeBufferOwnership: !0,
              instanced: UU.getIsInstanced()
            };
          XU.setVerticesBuffer(new cU.e(this.qp(), IU, QU, pU), NU)
        }
        return XU._updatable = AU, XU._boundingInfo = new QU.b(this.extend.minimum, this.extend.maximum), XU.relink(), XU
      }
      static mergeMeshes(UU, XU, zU, cU, yU, QU) {
        const oU = UU[0].nS(),
          DU = new FU.d(UU[0].name + "_merged", oU),
          YU = new EU(AU.d.RandomId(), oU, void 0, !1, DU);
        try {
          if (!FU.d.MergeMeshes(UU, XU, zU, DU, yU, QU)) return DU.dispose(), null
        } catch (NU) {
          throw DU.dispose(), NU
        }
        return YU.relink(), DU
      }
      removeVerticesData(UU) {
        this.releaseUnlessInstanced(UU), super.removeVerticesData(UU)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(UU) {
        var XU;
        UU && null !== (XU = this.getVertexBuffer(UU)) && void 0 !== XU && XU.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, DU.w)(this.model), this.model = null)
      }
    }

    function YU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new FU.d(UU, zU);
      const yU = (0, DU.l)(XU),
        {
          positions: QU,
          normals: YU,
          uvs: NU,
          indices: IU,
          named: pU = {}
        } = XU,
        aU = new oU.c;
      aU.positions = QU, aU.normals = null !== YU && void 0 !== YU ? YU : null, aU.uvs = null !== NU && void 0 !== NU ? NU : null, aU.indices = IU;
      const tU = new EU(AU.d.RandomId(), zU, aU, !1, cU);
      for (const {
          kind: AU,
          components: FU
        }
        of yU.vertexAttributes) AU in pU && cU.setVerticesData(AU, pU[AU], !1, FU);
      return tU.link(yU), cU
    }

    function NU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const yU = new FU.d(UU, zU),
        {
          positions: QU,
          normals: AU,
          uvs: DU,
          indices: EU
        } = XU;
      return Object.assign(new oU.c, {
        positions: QU,
        normals: AU,
        uvs: DU,
        indices: EU
      }).applyToMesh(yU, cU), yU
    }
  },
  42259: (UU, XU, zU) => {
    function cU(UU, XU, zU) {
      const cU = XU * XU * 4,
        yU = UU[0].layers,
        QU = yU * (UU.length - 1) + UU[UU.length - 1].layers,
        AU = new Uint8Array(QU * cU);
      UU.forEach(((XU, zU) => {
        const QU = zU + 1 < UU.length ? Math.min(XU.layers, yU) : XU.layers;
        AU.set(new Uint8Array(XU.pixels.buffer, XU.pixels.byteOffset, QU * cU), zU * yU * cU)
      }));
      const FU = Math.max(1, Math.min(QU, zU || QU));
      if (FU === QU) return [{
        pixels: AU,
        layers: QU
      }];
      const oU = [];
      for (let DU = 0; DU < QU; DU += FU) {
        const UU = Math.min(QU, DU + FU);
        oU.push({
          pixels: AU.slice(DU * cU, UU * cU),
          layers: UU - DU
        })
      }
      return oU
    }
    zU.d(XU, {
      d: () => cU,
      g: () => QU
    });
    const yU = new WeakMap;

    function QU(UU, XU, zU) {
      var cU, QU;
      const AU = null !== (cU = yU.get(UU)) && void 0 !== cU ? cU : new Map;
      yU.set(UU, AU);
      const FU = null !== (QU = AU.get(XU[0])) && void 0 !== QU ? QU : [];
      AU.set(XU[0], FU);
      const oU = FU.find((UU => UU.urls.length === XU.length && UU.urls.every(((UU, zU) => UU === XU[zU]))));
      if (oU) return oU.built;
      const DU = {
        urls: [...XU],
        built: zU()
      };
      return FU.push(DU), DU.built.catch((() => {
        FU.splice(FU.indexOf(DU), 1)
      })), DU.built
    }
  },
  39566: (UU, XU, zU) => {
    function cU(UU, XU) {
      return "object" === typeof UU && null !== UU ? Object.assign(UU, {
        startStep: XU
      }) : UU
    }

    function yU(UU) {
      return "object" === typeof UU && null !== UU && "startStep" in UU ? UU.startStep : null
    }
    zU.d(XU, {
      d: () => yU,
      g: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);