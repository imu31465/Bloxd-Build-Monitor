export const id = 270;
export const ids = [270];
export const modules = {
  40373: (VV, eV, xV) => {
    function JV(VV) {
      return void 0 === VV ? void 0 : [VV[0], VV[1], VV[2]]
    }

    function YV(VV) {
      const eV = VV.particles;
      return {
        opts: {
          texture: eV.texture,
          Jv: eV.Jv,
          minLifeTime: eV.minLifeTime,
          maxLifeTime: eV.maxLifeTime,
          minSize: eV.minSize,
          maxSize: eV.maxSize,
          minEmitPower: eV.minEmitPower,
          maxEmitPower: eV.maxEmitPower,
          emitRate: eV.emitRate,
          gravity: JV(eV.gravity),
          dir1: JV(eV.dir1),
          dir2: JV(eV.dir2),
          colorGradients: eV.colorGradients,
          blendMode: eV.blendMode
        },
        half: [eV.width / 2, eV.height / 2, eV.depth / 2]
      }
    }
    xV.d(eV, {
      d: () => YV
    })
  },
  40342: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      f: () => nV,
      h: () => QV,
      k: () => yV
    });
    var JV = xV(220);
    const YV = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      UV = "PetRoot";
    let yV = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      pV = YV;
    new Map, new Map;

    function QV(VV) {
      var eV;
      return null !== (eV = (0, JV.b)(yV, VV)) && void 0 !== eV ? eV : null
    }

    function nV(VV) {
      var eV;
      return null !== (eV = (0, JV.b)(pV, VV)) && void 0 !== eV ? eV : null
    }
  },
  40375: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      e: () => YV,
      g: () => UV
    });
    class JV {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.ME = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(VV) {
        var eV;
        const {
          feet: xV,
          heading: JV,
          tuning: yV
        } = VV, pV = Math.min(Math.max(VV.dt, 0), .1), {
          pose: QV,
          ME: nV,
          target: wV
        } = this;
        if (this.started && pV > 0) {
          const VV = Math.hypot(xV[0] - this.lastFeet[0], xV[1] - this.lastFeet[1], xV[2] - this.lastFeet[2]);
          this.speed += (VV / pV - this.speed) * Math.min(pV / .15, 1)
        }
        this.lastFeet[0] = xV[0], this.lastFeet[1] = xV[1], this.lastFeet[2] = xV[2], this.stillS = this.speed > .3 ? 0 : this.stillS + pV;
        const ZV = this.stillS >= .6 ? "perched" : "flying";
        "flying" === ZV && "perched" === QV.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += pV, QV.mode = ZV;
        const vV = Math.sin(JV),
          rV = Math.cos(JV);
        "perched" === ZV ? (UV(wV, xV, yV.perchOffset, vV, rV), wV[1] += VV.headTopY - xV[1]) : (UV(wV, xV, yV.followOffset, vV, rV), wV[1] += YV(yV, VV.timeS));
        const {
          pos: kV
        } = QV, bV = Math.hypot(wV[0] - kV[0], wV[1] - kV[1], wV[2] - kV[2]);
        if (!this.started || bV > 8 || "perched" === ZV && (this.perchLocked || bV < .05)) this.perchLocked = this.started && "perched" === ZV, kV[0] = wV[0], kV[1] = wV[1], kV[2] = wV[2], nV[0] = nV[1] = nV[2] = 0;
        else {
          const VV = yV.followStiffness;
          for (let eV = 0; eV < 3; eV++) nV[eV] += (VV * VV * (wV[eV] - kV[eV]) - 2 * VV * nV[eV]) * pV, kV[eV] += nV[eV] * pV
        }
        const EV = JV + yV.yawOffset;
        var BV;
        return this.started ? QV.yaw += ((BV = EV - QV.yaw) - 2 * Math.PI * Math.round(BV / (2 * Math.PI))) * Math.min(8 * pV, 1) : QV.yaw = EV, this.started = !0, QV.seated = "perched" === ZV && this.perchLocked, QV.clip = null === (eV = yV.clips) || void 0 === eV ? void 0 : eV[this.tY(ZV)], QV
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      tY(VV) {
        return "perched" === VV ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function YV(VV, eV) {
      return VV.bobAmplitude * Math.sin(2 * Math.PI * VV.bobHz * eV)
    }

    function UV(VV, eV, xV, JV, YV) {
      const [UV, yV, pV] = xV;
      VV[0] = eV[0] + UV * YV + pV * JV, VV[1] = eV[1] + yV, VV[2] = eV[2] - UV * JV + pV * YV
    }
  },
  40350: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV
    });
    var JV = xV(38263),
      YV = xV(39013);

    function UV(VV, eV) {
      var xV;
      VV.blendMode = eV.blendMode, VV.minLifeTime = eV.minLifeTime, VV.maxLifeTime = eV.maxLifeTime, VV.minSize = eV.minSize, VV.maxSize = eV.maxSize, VV.minEmitPower = eV.minEmitPower, VV.maxEmitPower = eV.maxEmitPower;
      const UV = null !== (xV = eV.gravity) && void 0 !== xV ? xV : [0, 0, 0];
      VV.gravity = new JV.Ik(UV[0], UV[1], UV[2]);
      for (const JV of eV.colorGradients) VV.addColorGradient(JV.timeFraction, (0, YV.j)(JV.minColor), JV.maxColor ? (0, YV.j)(JV.maxColor) : void 0)
    }
  },
  39923: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => qV,
      e: () => TV,
      i: () => FV,
      l: () => AV,
      o: () => NV,
      p: () => jV
    });
    var JV = xV(364),
      YV = xV(39943),
      UV = xV(3105),
      yV = xV(3107),
      pV = xV(39931),
      QV = xV(39934),
      nV = xV(27),
      wV = xV(110),
      ZV = xV(3239),
      vV = xV(99),
      rV = xV(134),
      kV = xV(40),
      bV = xV(2617),
      EV = xV(124);
    const BV = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function jV(VV) {
      var eV;
      const xV = null !== (eV = wV.currentUrl.getSearchParam(VV)) && void 0 !== eV ? eV : kV.m.getItem(VV);
      return null === xV || void 0 === xV || "" === xV ? null : "0" !== xV && "false" !== xV && !1 !== xV && 0 !== xV
    }
    async function qV(VV, eV) {
      (0, UV.B)(null);
      const xV = (0, yV.i)((0, yV.h)(eV.useWebGpu, !0));
      (0, vV.setWebGpuRequested)("lite" === xV.requested && (0, vV.getWebGpuSupported)());
      const pV = (0, yV.f)(xV.source);
      null !== pV && console.info(`Renderer: ${xV.requested} from ${pV}`), null !== xV.fallbackReason && console.warn(`Renderer: ${xV.fallbackReason}`);
      let wV = xV.fallbackReason;
      if ("webgl2" !== xV.choice) {
        const pV = await async function(VV, eV, xV, yV) {
          const pV = await (0, vV.probeWebGpuAdapter)();
          if ("usable" !== pV) return (0, vV.setWebGpuFallbackReason)(pV), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (xV && !0 === kV.m.getItem(EV.G) && !0 !== kV.m.getItem(JV.jc)) return (0, vV.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), EV.b;
          let wV = "load_failed";
          try {
            const {
              create: xV
            } = await (0, UV.t)(yV).load();
            wV = "start_failed";
            const JV = nV.b.antiAliasingOnWebGpuAdapter((0, rV.k)()),
              YV = (0, QV.f)(VV),
              pV = (0, QV.c)(YV, {
                size: VV => (0, ZV.j)(YV, VV)
              });
            return await xV(VV, {
              fJV: JV,
              sceneDepth: eV.sceneDepth,
              sunShadow: eV.sunShadow,
              bufferSize: pV
            })
          } catch (bV) {
            const VV = (0, YV.b)(bV);
            (0, vV.setWebGpuFallbackReason)(VV ? BV[VV] : wV);
            const eV = null === bV || void 0 === bV ? void 0 : bV.fallbackReason;
            return "string" === typeof eV ? (console.warn(`Lite could not start, falling back to WebGL: ${String(bV)}`), eV) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", bV), "it failed to start (see the console)")
          }
        }(VV, eV, "setting" === xV.source, xV.choice);
        if ("lite" === xV.choice && kV.m.setItem(EV.u, "string" === typeof pV), "string" !== typeof pV) return nV.b.followGameGpu((0, rV.k)()), (0, vV.setWebGpuFallbackReason)("none"), (0, yV.l)(xV), (0, UV.B)(pV), {
          lite: pV
        };
        wV = (0, yV.c)(xV.choice, [pV]), VV.replaceWith(VV.cloneNode(!1))
      } else "lite" === xV.requested ? (0, vV.setWebGpuFallbackReason)("load_failed") : "default" === xV.source && eV.webGpuDefaultOffReason ? (0, vV.setWebGpuFallbackReason)(eV.webGpuDefaultOffReason) : (0, vV.setWebGpuFallbackReason)("not_requested");
      return (0, yV.l)({
        ...xV,
        choice: "webgl2",
        fallbackReason: wV
      }), nV.b.followGameGpu(null), {
        lite: null
      }
    }

    function tV() {
      return Promise.all([xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(288), xV.e(282), xV.e(283), xV.e(268), xV.e(0)]).then((() => xV(44455)))
    }
    async function FV() {
      return (await tV()).createSceneParticleSystem
    }
    async function TV() {
      Promise.all([xV.e(279), xV.e(612)]).then((() => xV(44520))).then((VV => {
        VV.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [VV, eV] = await Promise.all([tV(), Promise.all([xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(288), xV.e(282), xV.e(283), xV.e(268), xV.e(0)]).then((() => xV(44538))), Promise.all([xV.e(279), xV.e(280), xV.e(277), xV.e(287), xV.e(281), xV.e(286), xV.e(284), xV.e(276), xV.e(289), xV.e(302), xV.e(288), xV.e(282), xV.e(283), xV.e(268), xV.e(0)]).then((() => xV(42450)))]);
      return (0, pV.e)(eV.SkyMaterial), VV.default
    }

    function PV(VV) {
      return "lite" === (0, yV.i)((0, yV.h)(VV, !1)).choice && (0, vV.getWebGpuSupported)() && !kV.m.getItem(EV.u)
    }

    function AV(VV) {
      PV(VV) || TV().catch((VV => {
        console.warn("Failed to prefetch noa's Babylon backend.", VV)
      }))
    }

    function NV(VV) {
      (0, bV.d)((() => {
        PV(VV) ? (0, UV.p)().load().catch((VV => {
          console.warn("Failed to prefetch the Lite renderer.", VV)
        })) : AV(VV)
      }))
    }
  },
  39934: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => yV
    });
    var JV = xV(27),
      YV = xV(35251),
      UV = xV(3239);

    function yV(VV) {
      var eV;
      return null !== (eV = VV.parentElement) && void 0 !== eV ? eV : VV
    }

    function pV(VV, eV) {
      if (VV.clientWidth <= 0 || VV.clientHeight <= 0 || YV.e.isHeld()) return null;
      const xV = (0, UV.n)(),
        [yV, pV] = eV.size(xV);
      return (0, UV.t)(yV, pV, xV, JV.b.get("clientEscMenuOptions").pixelScale)
    }
  },
  42518: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      openCharacterPreview: () => ne
    });
    var JV = xV(39243),
      YV = xV(3093),
      UV = xV(642),
      yV = xV(38340),
      pV = xV(2388),
      QV = xV(38328),
      nV = xV(41071),
      wV = xV(41331),
      ZV = xV(42419),
      vV = xV(38263),
      rV = xV(41510),
      kV = xV(38387),
      bV = xV(41524),
      EV = xV(42471),
      BV = xV(38256),
      jV = xV(1252),
      qV = xV(2385),
      tV = xV(38363),
      FV = xV(38698);
    class TV {
      constructor(VV, eV) {
        this.pose = VV, this.nodes = void 0, this.nodes = VV.boneNames.map((VV => eV.get(VV)))
      }
      write(VV) {
        this.pose.pose(VV), (0, FV.n)(this.pose, this.nodes)
      }
    }

    function PV(VV) {
      VV.unfreezeWorldMatrix();
      for (const eV of VV.getChildren()) PV(eV)
    }
    async function AV(VV, eV, xV, JV) {
      let {
        keepTransforms: YV,
        backFaceCulling: UV
      } = JV;
      const yV = await (0, tV.g)(eV, VV),
        pV = (0, tV.d)(null !== xV && void 0 !== xV ? xV : eV, VV, void 0, UV);
      (0, tV.k)(yV, pV, {
        keepTransforms: YV,
        backFaceCulling: UV,
        onProcessedMesh: eV => {
          VV.gYV(eV, !1), eV.isVisible = !1
        }
      });
      for (const QV of yV.rootNodes) PV(QV);
      return yV
    }

    function NV(VV, eV) {
      VV.isVisible = eV;
      for (const xV of VV.getChildMeshes()) xV.isVisible = eV
    }
    class XV {
      constructor(VV, eV, xV) {
        this.yE = VV, this.thinInstMgr = eV, this.pC = xV, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(VV, eV, xV) {
        const JV = (0, tV.e)(VV, eV);
        return JV in this.modelCache || (this.modelCache[JV] = (async () => {
          try {
            const JV = await AV(this.yE, VV, eV, {
                keepTransforms: void 0 !== xV,
                backFaceCulling: !1
              }),
              YV = new Map;
            for (const VV of JV.getNodes()) YV.set(VV.name, VV);
            const UV = void 0 === xV ? null : (0, FV.i)(xV, (VV => {
              const eV = YV.get(VV);
              return eV ? (0, FV.h)(eV) : null
            }));
            return {
              nodesByName: YV,
              bones: null === UV ? null : new TV(UV, YV)
            }
          } catch (YV) {
            throw delete this.modelCache[JV], console.error(`Failed to load preview attachment ${JV}:`, YV), YV
          }
        })()), this.modelCache[JV]
      }
      async update(VV, eV) {
        var xV;
        const {
          thinInstMgr: JV,
          pC: YV
        } = this;
        this.cosmeticNames[VV] = eV;
        const UV = this.attachmentsByType[VV];
        if (UV)
          for (const {
              mesh: pV,
              destNode: QV,
              bones: nV
            }
            of UV) {
            null !== nV && (0, jV.fb)(this.shownBones, nV), NV(pV, !1);
            const VV = JV.getNamedNode(YV, QV);
            JV.detachTransformNodeIfFound(pV, YV, VV)
          }
        this.attachmentsByType[VV] = [];
        const yV = (0, qV.h)(VV, eV);
        if (null !== yV && void 0 !== yV && null !== (xV = yV.attachments) && void 0 !== xV && xV.length)
          for (const pV of yV.attachments) {
            let xV;
            try {
              xV = await this.loadModel(pV.modelGlb, pV.texture, pV.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[VV] !== eV) return;
            const UV = xV.nodesByName.get(pV.modelNode);
            if (!UV) {
              console.error(`Preview attachment node ${pV.modelNode} not found in ${pV.modelGlb}`);
              continue
            }
            NV(UV, !0), (0, tV.s)(UV, pV.overlayColour);
            const yV = JV.getNamedNode(YV, pV.destNode);
            JV.attachTransformNode(UV, YV, yV), this.attachmentsByType[VV].push({
              mesh: UV,
              destNode: pV.destNode,
              bones: xV.bones
            }), null !== xV.bones && this.shownBones.push(xV.bones)
          }
      }
      writePoses(VV) {
        for (const eV of this.shownBones) eV.write(VV)
      }
    }
    var MV = xV(42439),
      zV = xV(38437),
      GV = xV(39923),
      WV = xV(40342),
      RV = xV(40375),
      gV = xV(40373),
      DV = xV(40350),
      iV = xV(3584);
    const CV = [0, 1, 0];
    class aV {
      constructor(VV) {
        this.node = VV, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const eV of VV.getChildTransformNodes()) this.nodesByName.set(eV.name, eV), this.rests.set(eV.name, (0, FV.h)(eV))
      }
      play(VV, eV) {
        const xV = this.clip(VV);
        xV && (xV.pose.pose(eV), (0, FV.n)(xV.pose, xV.nodes))
      }
      clip(VV) {
        let eV = this.clips.get(VV);
        if (void 0 === eV) {
          const xV = (0, FV.i)(VV, (VV => {
            var eV;
            return null !== (eV = this.rests.get(VV)) && void 0 !== eV ? eV : null
          }));
          eV = xV && {
            pose: xV,
            nodes: xV.boneNames.map((VV => this.nodesByName.get(VV)))
          }, this.clips.set(VV, eV)
        }
        return eV
      }
    }

    function oV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new vV.Ik(VV[0] * eV, VV[1] * eV, VV[2] * eV)
    }
    class cV {
      constructor(VV, eV) {
        this.yE = VV, this.scale = eV, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(VV) {
        var eV;
        this.petName = VV, null === (eV = this.shownPet) || void 0 === eV || eV.node.pW(!1), this.shownPet = null;
        const xV = (0, WV.h)(VV);
        if (!xV) return;
        let JV;
        try {
          JV = await this.petNode(xV.model)
        } catch {
          return
        }
        this.petName === VV && (JV.node.pW(!0), this.shownPet = JV)
      }
      setAura(VV) {
        const eV = (0, WV.f)(VV);
        return VV === this.auraName && eV === this.auraTuning || (this.auraName = VV, this.auraTuning = eV, this.auraDrawn = this.showAura(VV, eV)), this.auraDrawn
      }
      async showAura(VV, eV) {
        var xV, JV, YV;
        const UV = ++this.auraSeq;
        if (null === (xV = this.aura) || void 0 === xV || xV.dispose(!1), this.aura = null, !eV) return;
        const yV = await (0, GV.i)().catch((eV => (console.error(`Couldn't load the preview's particles for ${VV}:`, eV), null)));
        if (!yV || UV !== this.auraSeq) return;
        const {
          scale: pV
        } = this, {
          opts: QV,
          half: nV
        } = (0, gV.d)(eV), wV = yV(this.yE, `aura|${VV}`, QV.Jv), ZV = this.particleTexture(eV.particles.texture);
        wV.texture = ZV, (0, DV.b)(wV, {
          ...QV,
          minSize: QV.minSize * pV,
          maxSize: QV.maxSize * pV,
          minEmitPower: QV.minEmitPower * pV,
          maxEmitPower: QV.maxEmitPower * pV,
          gravity: QV.gravity && [QV.gravity[0] * pV, QV.gravity[1] * pV, QV.gravity[2] * pV]
        }), wV.emitRate = QV.emitRate, wV.createBoxEmitter(oV(null !== (JV = QV.dir1) && void 0 !== JV ? JV : CV), oV(null !== (YV = QV.dir2) && void 0 !== YV ? YV : CV), oV(nV, -pV), oV(nV, pV));
        const [rV, kV, bV] = eV.offset;
        wV.emitter = new vV.Ik(rV * pV, (kV - 1) * pV, bV * pV), wV.start(), this.aura = wV;
        const EV = ZV.mirror;
        EV.isReady() || EV.loadingError || await new Promise((eV => {
          EV.onLoadObservable.addOnce((() => {
            eV()
          })), EV.getInternalTexture().onErrorObservable.addOnce((xV => {
            let {
              message: JV
            } = xV;
            console.error(`Preview aura ${VV}'s texture failed to load: ${JV}`), eV()
          }))
        }))
      }
      writePose(VV) {
        var eV;
        if (!this.shownPet) return;
        const xV = (0, WV.h)(this.petName),
          {
            scale: JV
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, xV);
        const [YV, UV, yV] = xV.followOffset, {
          node: pV
        } = this.shownPet;
        pV.position.set(YV * JV, (UV + (0, RV.e)(xV, VV) - 1) * JV, yV * JV), pV.rotation.y = xV.yawOffset, pV.WZ.HVV(xV.scale * JV), null !== (eV = xV.clips) && void 0 !== eV && eV.fly && this.shownPet.play(xV.clips.fly, VV)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(VV, eV) {
        var xV, JV, YV;
        const {
          node: UV
        } = VV;
        UV.position.HVV(0), UV.rotation.y = eV.yawOffset, UV.WZ.HVV(1);
        const yV = null !== (xV = null === (JV = eV.clips) || void 0 === JV ? void 0 : JV.perch) && void 0 !== xV ? xV : null === (YV = eV.clips) || void 0 === YV ? void 0 : YV.fly;
        yV && VV.play(yV, 0);
        const {
          min: pV,
          max: QV
        } = UV.getHierarchyBoundingVectors(!0), nV = 2 * this.scale / (QV.y - pV.y);
        UV.WZ.HVV(nV), UV.position.set(-(pV.x + QV.x) / 2 * nV, -(pV.y + QV.y) / 2 * nV, -(pV.z + QV.z) / 2 * nV)
      }
      petNode(VV) {
        let eV = this.petNodes.get(VV);
        return eV || (eV = AV(this.yE, VV, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((eV => {
          const xV = new MV.d(`pet|${VV}`, this.yE);
          xV.pW(!1);
          for (const VV of eV.rootNodes) VV.parent = xV, NV(VV, !0);
          return new aV(xV)
        }), (eV => {
          throw this.petNodes.delete(VV), console.error(`Failed to load preview pet ${VV}:`, eV), eV
        })), this.petNodes.set(VV, eV)), eV
      }
      particleTexture(VV) {
        let eV = this.particleTextures.get(VV);
        return eV || (eV = (0, zV.u)(this.yE, (0, iV.e)(VV)), this.particleTextures.set(VV, eV)), eV
      }
    }
    var hV = xV(38358),
      lV = (xV(42445), xV(41744), xV(42450), xV(35343)),
      LV = xV(42527);
    let fV, mV, KV, HV, uV, sV, SV, IV, dV, OV, Ve;
    const ee = document.createElement("canvas");
    async function xe() {
      await new Promise((VV => {
        setTimeout((() => {
          VV()
        }), 100)
      }))
    }
    ee.classList.add("CharCustomisationPreviewCanvas");
    const Je = {};

    function Ye(VV, eV) {
      if (!HV) return;
      const yV = (0, YV.d)();
      if (yV.fW(!1), JV.e.Player.meshApi.updatePlayerCosmetic(yV.bD, SV, VV, eV, !0), "cape" === VV)
        if (eV === UV.i) uV.pW(!1);
        else {
          uV.pW(!0);
          uV.material.diffuseTexture = new EV.b(xV(39993)(`./cape_${eV}.png`), uV.dD(), {
            invertY: !1,
            samplingMode: EV.b.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === VV ? Je.pet = OV.setPet(eV) : "aura" === VV ? Je.aura = OV.setAura(eV) : Je[VV] = dV.update(VV, eV)
    }

    function Ue(VV, eV) {
      const [xV, JV] = (0, LV.d)(VV, eV, window.devicePixelRatio);
      fV.setSize(Math.max(xV, Math.floor(VV)), Math.max(JV, Math.floor(eV)))
    }
    let ye = 0;
    class pe {
      constructor(VV, eV) {
        this.framing = eV, this.ready = Ve, this.dev = {
          canvas: () => ee,
          isolateHead(VV) {
            const eV = sV.getNodeNames(SV);
            for (let xV = 0; xV < eV.length; xV++) "HeadMesh" !== eV[xV] && "__root__" !== eV[xV] && "TorsoNode" !== eV[xV] && sV.setNodeEnabled(SV, xV, !1);
            if (VV) {
              const VV = sV.getNamedNode(SV, "HeadMesh");
              sV.setNodeDisableColorWrite(SV, VV, !0, (VV => {
                const eV = new bV.StandardMaterial(`${VV.name}_depthOnly`, VV.dD());
                return eV.disableColorWrite = !0, eV
              }))
            }
            sV.setPosition(SV, 0, -12, 0), Ye("pet", "pet_none"), Ye("aura", "aura_none")
          },
          isolatePet() {
            const VV = sV.getNodeNames(SV).length;
            for (let eV = 0; eV < VV; eV++) sV.setNodeEnabled(SV, eV, !1);
            uV.pW(!1), Ye("aura", "aura_none"), OV.isolatePet()
          }
        }, this.closed = !1, this.resetCamera();
        const xV = VV.getBoundingClientRect();
        Ue(xV.width, xV.height), ye++, fV.stopRenderLoop(), fV.runRenderLoop((() => {
          var VV, eV, xV;
          null === (VV = IV) || void 0 === VV || VV.render(fV.getDeltaTime());
          const JV = performance.now() / 1e3;
          null === (eV = dV) || void 0 === eV || eV.writePoses(JV), null === (xV = OV) || void 0 === xV || xV.writePose(JV), KV.render()
        }))
      }
      isReady() {
        return !!HV
      }
      setCosmetic(VV, eV) {
        Ye(VV, eV)
      }
      playEmote(VV) {
        if (!IV) return;
        if (!VV) return void IV.stopAnimation(QV.h.Emote);
        const eV = (0, yV.e)((0, pV.j)(VV).animation);
        IV.startAnimation(eV, QV.h.Emote, 0, pV.d)
      }
      async untilDrawn(VV) {
        if (await xe(), "cape" === VV && uV) {
          const VV = uV.material,
            eV = null === VV || void 0 === VV ? void 0 : VV.diffuseTexture;
          eV && !eV.isReady() && (await new Promise((VV => {
            eV.onLoadObservable.addOnce((() => {
              VV()
            }))
          })), await xe())
        }
        Je[VV] && (await Je[VV], await xe()), await KV.whenReadyAsync(), await new Promise((VV => {
          KV.onAfterRenderObservable.addOnce((() => {
            VV()
          }))
        }))
      }
      setOrbit(VV) {
        Qe(VV)
      }
      resetCamera() {
        mV.inertialAlphaOffset = 0, mV.inertialBetaOffset = 0, mV.inertialRadiusOffset = 0, Qe(lV.b[this.framing])
      }
      resize(VV, eV) {
        Ue(VV, eV)
      }
      close() {
        this.closed || (this.closed = !0, ye--, 0 === ye && fV.stopRenderLoop())
      }
    }

    function Qe(VV) {
      let {
        yaw: eV,
        pitch: xV,
        radius: JV,
        target: YV
      } = VV;
      mV.alpha = eV, mV.beta = xV, JV && (mV.radius = JV), YV && mV.target.set(YV[0], YV[1], YV[2])
    }

    function ne(VV, eV) {
      return VV.appendChild(ee), fV || function() {
        fV = new nV.c(ee, !0, {
          preserveDrawingBuffer: !0
        });
        const VV = (0, YV.d)();
        fV.zYV = VV.gZ.engine.zYV, KV = new wV.c(fV), KV.clearColor = new kV.c(0, 0, 0, 0), KV.ambientColor = new kV.Color3(1, 1, 1), mV = new ZV.c("JB", 0, 0, 1, vV.Ik.Zero(), KV), mV.attachControl(ee, !0), mV.panningSensibility = 0, Ve = (0, JV.u)("Player", KV, !0).then((eV => {
          HV = eV.meshApi, uV = eV.capeMesh, sV = VV.gZ.YC;
          const xV = 8.33;
          SV = (0, JV.n)("Player", xV, !0, !0), sV.setPosition(SV, 0, -8.33, 0);
          const YV = sV.getNamedNode(SV, "BodyMesh");
          sV.attachTransformNode(uV, SV, YV), sV.set(SV, "aOpacity", 1), sV.RL(SV, "aOpacity", 1), dV = new XV(KV, sV, SV), OV = new cV(KV, xV), IV = new BV.AnimatorState, IV.iv = VV, IV.thinInstMgr = sV, IV.pC = SV, IV.VYV = sV.rD(SV, 0), IV.modelLifeformType = "Player", IV.nodeNameAliases = (0, hV.b)("Player").nodeNameAliases;
          const UV = uV.qL().boundingBox;
          uV.position.y = ((24 - UV.maximum.y + UV.minimum.y) / 2 - 1 / 32) / xV, uV.position.z = -1 / xV, uV.rotationQuaternion = null;
          const yV = Math.PI / 18,
            pV = UV.maximum.y / xV;
          uV.rotation.x = yV;
          const QV = Math.cos(yV),
            nV = Math.sin(yV);
          uV.position.y += pV * (1 - QV) + 0 * nV, uV.position.z -= pV * nV + 0 * (1 - QV);
          const wV = new bV.StandardMaterial("capeMaterial", uV.dD());
          uV.material = wV;
          const ZV = new kV.Color3(1, 1, 1);
          wV.diffuseColor = new kV.Color3, wV.specularColor = new kV.Color3, wV.emissiveColor = new kV.Color3, wV.ambientColor = new kV.Color3, ZV.scaleToRef(.43, wV.diffuseColor), ZV.scaleToRef(1.75, wV.ambientColor), wV.freeze();
          const EV = new rV.d("light", new vV.Ik(-.1, 1, -.3), KV);
          EV.diffuse = new kV.Color3(1, 1, 1), EV.specular = new kV.Color3(1, 1, 1), EV.groundColor = new kV.Color3(.5, .5, .5)
        }))
      }(), new pe(VV, eV)
    }
  },
  39984: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV
    });
    var JV = xV(38397),
      YV = xV(38484),
      UV = xV(38517),
      yV = xV(38408),
      pV = xV(38399);

    function QV(VV) {
      return `\n\t\t\t\t${(0,pV.z)(VV,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, pV.F)(VV, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, pV.F)(VV, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, pV.p)(VV, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function nV(VV, eV) {
      let xV = (0, pV.Gb)(VV, "skele" + (eV - 1));
      for (let YV = eV - 2; YV >= 0; YV--) xV = (0, pV.sb)(VV, `boneIdx == ${YV}`, (0, pV.Gb)(VV, `skele${YV}`), xV);
      const JV = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,pV.F)(VV,"int","boneIdx",(0,pV.Ab)(VV,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,pV.F)(VV,"vec3","bone",xV)}\n\t\t\t\t${(0,pV.F)(VV,"vec2","pivot",(0,pV.p)(VV,"vec2","0.0",`${(0,pV.Kb)(VV,"position")}.z`))}\n\t\t\t\t${(0,pV.db)(VV)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${JV}));`:`positionUpdated.yz += ${JV};`}\n\t\t`
    }

    function wV(VV) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,pV.p)(VV,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const ZV = {
        x: 0,
        y: 0,
        z: 0,
        wZ(VV, eV) {
          return this.x = VV[eV], this.y = VV[eV + 1], this.z = VV[eV + 2], this
        }
      },
      vV = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (VV, eV) => ({
          ...(0, JV.d)("CAPE"),
          BLOXD_CAPE_BONES: `${VV}`,
          BLOXD_CAPE_MAX_Y: (0, YV.ob)(eV)
        }),
        getUniforms(VV) {
          return (0, UV.d)(function(VV) {
            const eV = [];
            for (let xV = 0; xV < VV; xV++) eV.push({
              name: `skele${xV}`,
              type: "highp vec3"
            });
            return eV
          }(this.skeleLen), "vertex", VV)
        },
        bind(VV) {
          for (let eV = 0; eV < this.skeleLen; eV++) VV.updateVector3(`skele${eV}`, ZV.wZ(this.skele, 3 * eV))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(VV, eV) {
          return "vertex" !== VV ? null : {
            CUSTOM_VERTEX_DEFINITIONS: QV(eV),
            CUSTOM_VERTEX_UPDATE_POSITION: nV(eV, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: wV(eV)
          }
        }
      };
    (0, yV.m)(vV)
  },
  39880: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => ZV
    });
    var JV = xV(38397),
      YV = xV(38517),
      UV = xV(38399),
      yV = xV(38408);
    const pV = "bloxdTextLodBias",
      QV = [{
        name: pV,
        type: "float"
      }],
      nV = "bloxdTextSample",
      wV = {
        planes: -.5,
        boards: -.5
      },
      ZV = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, JV.d)("TEXT_SAMPLER"),
        getUniforms: VV => (0, YV.d)(QV, "fragment", VV),
        bind(VV) {
          VV.updateFloat(pV, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(VV, eV) {
          if ("fragment" !== VV) return null;
          const xV = (0, UV.P)(eV, `vec4 ${nV}(sampler2D s, vec2 uv, float bias)`, `fn ${nV}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            JV = (0, UV.P)(eV, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            YV = `${(0,UV.X)(eV,"vDiffuseUV")} + uvOffset`,
            yV = (0, UV.P)(eV, `${nV}(diffuseSampler, ${YV}, ${(0,UV.Gb)(eV,pV)})`, `${nV}(diffuseSampler, diffuseSamplerSampler, ${YV}, ${(0,UV.Gb)(eV,pV)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${xV} {\n\t\t\t\t\t${(0,UV.F)(eV,"vec4","texel",JV)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,UV.p)(eV,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,UV.p)(eV,"vec3","0.0")}, ${(0,UV.p)(eV,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, UV.J)(eV)]: `baseColor = ${yV};`
          }
        }
      };
    (0, yV.m)(ZV)
  },
  42450: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CapeMaterialPlugin: () => tV,
      HueTintMaterialPlugin: () => FV,
      LifeformMaterialPlugin: () => TV,
      OverlayMaterialPlugin: () => PV
    });
    var JV = xV(42457),
      YV = xV(39173);
    class UV extends((0, JV.h)(YV.b)) {}(0, JV.l)(YV.b, UV);
    var yV = xV(38479);
    class pV extends((0, JV.h)(yV.d)) {}(0, JV.l)(yV.d, pV);
    var QV = xV(39003);
    class nV extends((0, JV.h)(QV.g)) {}(0, JV.l)(QV.g, nV);
    var wV = xV(38502),
      ZV = xV(41524),
      vV = xV(38497);
    class rV extends((0, JV.h)(vV.g)) {
      constructor(VV, eV, xV) {
        super(VV, eV, xV), (0, wV.g)(VV)
      }
      dispose(VV) {
        (0, wV.h)(this._material), super.dispose(VV)
      }
    }(0, JV.l)(vV.g, rV), (0, vV.k)({
      disableUnusedSpecularTerm: JV.e,
      isLightingDisabled: VV => VV instanceof ZV.StandardMaterial && VV.disableLighting
    });
    var kV = xV(39880);
    class bV extends((0, JV.h)(kV.g)) {}(0, JV.l)(kV.g, bV);
    var EV = xV(39984),
      BV = xV(38395),
      jV = xV(39277),
      qV = xV(38493);
    class tV extends((0, JV.h)(EV.b)) {}(0, JV.l)(EV.b, tV);
    class FV extends((0, JV.h)(BV.e)) {}(0, JV.l)(BV.e, FV);
    class TV extends((0, JV.h)(jV.q)) {}(0, JV.l)(jV.q, TV);
    class PV extends((0, JV.h)(qV.e)) {}(0, JV.l)(qV.e, PV)
  },
  39931: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => nV,
      e: () => pV,
      g: () => QV
    });
    var JV = xV(38519),
      YV = xV(38421);
    const UV = new Set;
    let yV = null;

    function pV(VV) {
      yV = VV
    }

    function QV(VV) {
      if (!yV) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new yV("sky", VV)
    }

    function nV(VV, eV, xV) {
      if (!(0, JV.f)(VV)) return void VV.material.forceCompilation(VV, eV);
      const yV = () => {
        if (VV.iN()) return void UV.delete(VV);
        const JV = (0, YV.eb)(VV.material);
        if (![null === JV || void 0 === JV ? void 0 : JV.diffuseTexture, null === JV || void 0 === JV ? void 0 : JV.opacityTexture, null === JV || void 0 === JV ? void 0 : JV.emissiveTexture, null === JV || void 0 === JV ? void 0 : JV.reflectionTexture].every((VV => !VV || xV.prepareTexture(VV)))) return UV.add(VV), void setTimeout(yV, 16);
        UV.delete(VV), eV()
      };
      yV()
    }
  },
  42527: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    const JV = 4e5,
      YV = 2;

    function UV(VV, eV, xV) {
      let [UV, yV] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [VV, eV], pV = Math.min(Number.isFinite(xV) && xV > 0 ? xV : 1, YV);
      const QV = Math.max(0, UV, VV) * Math.max(0, yV, eV) * pV * pV;
      return QV > JV && (pV *= Math.sqrt(JV / QV)), [Math.max(1, Math.floor(Math.max(0, VV) * pV)), Math.max(1, Math.floor(Math.max(0, eV) * pV))]
    }
  },
  42457: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => lV,
      h: () => jV,
      l: () => uV
    });
    var JV = xV(41524),
      YV = xV(42463),
      UV = xV(42509),
      yV = xV(42471),
      pV = xV(38977),
      QV = xV(38985),
      nV = xV(38987),
      wV = xV(38991),
      ZV = xV(38433),
      vV = xV(38437),
      rV = xV(42479),
      kV = xV(38408),
      bV = xV(38421),
      EV = xV(38399);

    function BV(VV, eV) {
      return Object.assign((function(VV, xV, JV, YV) {
        return eV(this.featureState, VV, xV, JV, YV)
      }), {
        bZ: VV
      })
    }

    function jV(VV) {
      const eV = class extends rV.c {
          constructor(eV, xV) {
            const JV = (0, bV.eb)(eV),
              YV = JV && (0, bV.v)(JV, VV.name);
            for (var UV = arguments.length, yV = new Array(UV > 2 ? UV - 2 : 0), pV = 2; pV < UV; pV++) yV[pV - 2] = arguments[pV];
            super(eV, VV.name, VV.priority, YV ? YV.defines : VV.defines(...yV), !1), this.featureState = void 0, this.featureState = xV, this._pluginManager._addPlugin(this), this._enable(!0), (0, bV.z)(this._material, VV, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return VV.className
          }
          isCompatible(VV) {
            return VV === EV.d.GLSL || VV === EV.d.WGSL
          }
        },
        xV = (0, kV.j)(VV);
      for (const [JV, YV] of Object.entries(kV.c)) {
        const UV = VV[JV];
        if (UV) {
          const VV = xV[JV];
          Object.defineProperty(eV.prototype, YV, {
            value: BV(UV, VV),
            writable: !0,
            configurable: !0
          })
        }
      }
      return eV
    }
    class qV extends(jV(pV.b)) {}
    var tV = xV(41071),
      FV = xV(42487),
      TV = xV(42490);

    function PV(VV, eV, xV) {
      return (0, TV.g)(xV, eV.urls, (() => async function(VV, eV, xV) {
        const {
          width: JV
        } = VV[0].getSize(), YV = VV.map(((VV, xV) => {
          var YV;
          const UV = Math.round(VV.getSize().height / JV),
            yV = null === eV || void 0 === eV ? void 0 : eV[xV];
          return {
            pixels: yV && yV.byteLength === JV * JV * UV * 4 ? yV : null !== (YV = AV.get(VV.getInternalTexture())) && void 0 !== YV ? YV : VV._readPixelsSync(),
            layers: UV
          }
        })), UV = xV.sk().getCaps().texture2DArrayMaxLayerCount, pV = (0, TV.e)(YV, JV, UV).map((VV => {
          let {
            pixels: eV,
            layers: YV
          } = VV;
          return {
            atlas: new FV.d(eV, JV, JV, YV, tV.c.TEXTUREFORMAT_RGBA, xV, !0, !1, yV.b.NEAREST_NEAREST_MIPLINEAR),
            layers: YV
          }
        }));
        return VV.forEach(((VV, eV) => {
          const JV = VV.getInternalTexture();
          AV.has(JV) || (! function(VV, eV) {
            const xV = eV.createRawTexture(new Uint8Array(4), 1, 1, tV.c.TEXTUREFORMAT_RGBA, !1, !1, yV.b.NEAREST_SAMPLINGMODE);
            VV._hardwareTexture.release(), eV.unbindAllTextures(), xV._swapAndDie(VV, !1)
          }(JV, xV.sk()), AV.set(JV, YV[eV].pixels))
        })), pV
      }(VV, eV.pixels, xV)))
    }
    const AV = new WeakMap;
    var NV = xV(38994);
    class XV extends(jV(QV.h)) {
      constructor(VV, eV) {
        super(VV, eV), this.loaded = new Set, this.mirrors = void 0, this.mirrors = eV.textures.map((VV => VV.mirror)), this.mirrors.forEach(((VV, eV) => {
          VV.onLoadObservable.add((VV => {
            this.setTextureArrayData(VV, eV).catch((VV => {
              console.error(`Failed to build the texture arrays, at atlas ${eV}`, VV)
            }))
          }))
        })), (0, NV.f)(eV, VV.shaderLanguage)
      }
      async setTextureArrayData(VV, eV) {
        const xV = this.featureState,
          {
            width: JV,
            height: YV
          } = VV.getSize(),
          UV = this._material.shaderLanguage;
        if (!xV.useWebGL2) return void(0, NV.c)(this._material, xV, eV, JV, Math.round(YV / JV), UV);
        if (this.loaded.add(eV), this.loaded.size < this.mirrors.length) return;
        const yV = await PV(this.mirrors, xV.sources, this._material.dD());
        (0, NV.b)(this._material, xV, yV, JV, UV)
      }
    }
    var MV = xV(42496),
      zV = xV(41566),
      GV = xV(38263),
      WV = xV(42498),
      RV = xV(41674),
      gV = xV(41559),
      DV = xV(42439),
      iV = xV(38662),
      CV = xV(42506);
    class aV extends MV.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const oV = {
      Mesh: WV.e,
      TransformNode: DV.d,
      nZ: MV.b,
      VertexBuffer: MV.c,
      BoundingInfo: zV.b,
      Ik: GV.Ik,
      ArenaBuffer: aV,
      SubMesh: gV.c,
      VertexData: RV.c,
      MirroredGeometry: CV.b,
      meshFromArrays: CV.c,
      plainMeshFromArrays: CV.d
    };
    (0, iV.h)(oV);
    var cV = xV(38502);
    class hV extends(jV(wV.j)) {
      constructor(VV, eV) {
        if (super(VV, eV), VV instanceof JV.StandardMaterial && eV.dirLightCount > 0) {
          const eV = VV,
            xV = eV._blockDirtyMechanism;
          eV._blockDirtyMechanism = !0, VV.disableLighting = !0, eV._blockDirtyMechanism = xV;
          const JV = (0, bV.eb)(VV);
          JV && (JV.disableLighting = !0, (0, bV.bb)(JV))
        }(0, cV.g)(VV)
      }
      dispose(VV) {
        (0, cV.h)(this._material), super.dispose(VV)
      }
    }

    function lV(VV, eV) {
      if (!(eV instanceof JV.StandardMaterial) || eV.specularTexture) return;
      const {
        r: xV,
        g: YV,
        b: UV
      } = eV.specularColor;
      0 === xV && 0 === YV && 0 === UV && (VV.SPECULARTERM = !1)
    }(0, wV.g)({
      disableUnusedSpecularTerm: lV
    });
    var LV = xV(38445),
      fV = xV(38673);
    const mV = new RegExp(`^#define ${nV.e}\\s*$`, "m");
    class KV extends(jV(nV.l)) {
      constructor(VV, eV) {
        super(VV, eV), this.ik = !1, eV.ditherOnlyWhileFading && (fV.e.add(VV), this.prewarmDitherTwins(VV))
      }
      prewarmDitherTwins(VV) {
        const eV = new WeakSet;
        VV.onEffectCreatedObservable.add((xV => {
          let {
            effect: JV,
            subMesh: YV
          } = xV;
          if (this.featureState.prewarmingDither || eV.has(JV)) return;
          eV.add(JV);
          const UV = null === YV || void 0 === YV ? void 0 : YV.getMesh();
          UV && !mV.test(JV.defines) && VV.dD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(UV) || eV.delete(JV)
          }))
        }))
      }
      prewarmDither(VV) {
        if (this.ik || VV.iN()) return !1;
        const eV = new gV.c(0, 0, 0, 0, 0, VV, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(VV, eV)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== eV.effect
      }
      dispose(VV) {
        this.ik = !0, super.dispose(VV)
      }
    }
    const HV = new Map;

    function uV(VV, eV) {
      HV.set(VV, eV)
    }
    uV(pV.b, qV), uV(QV.h, XV), uV(nV.l, KV), uV(wV.j, hV), (0, ZV.e)({
      create: (VV, eV) => {
        const xV = new JV.StandardMaterial(VV.name, eV);
        return (0, LV.m)(VV, xV), xV.detailMap._pluginDefineNames
      },
      write: (VV, eV, xV) => {
        (0, LV.I)(VV.mirror, eV, xV)
      },
      addFeature: (VV, eV, xV) => {
        const JV = HV.get(eV.feature);
        if (!JV) throw new Error(`${eV.feature.name} has no plugin class (registerPluginClass)`);
        new JV(VV.mirror, eV.state, ...xV)
      },
      texture: (VV, eV, xV) => {
        let {
          url: JV,
          noMipmap: YV,
          invertY: UV,
          samplingMode: pV,
          data: QV,
          sets: nV
        } = xV;
        if (!QV) {
          const xV = new yV.b(JV, eV, YV, UV, pV);
          return Object.assign(xV, nV), void(0, vV.J)(VV, xV)
        }
        const wV = {},
          ZV = new Promise(((VV, eV) => {
            wV.onLoad = VV, wV.onError = (VV, xV) => {
              eV(new Error(`${QV.context}: ${(null===xV||void 0===xV?void 0:xV.message)||VV||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: rV,
            bytes: kV,
            label: bV
          } = QV,
          EV = {
            noMipmap: YV,
            invertY: !1,
            samplingMode: pV,
            ...wV,
            mimeType: rV,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          BV = new yV.b(null, eV, EV);
        LV.q.set(BV, ZV), Object.assign(BV, nV), BV.updateURL(JV, kV);
        const jV = BV.getInternalTexture();
        jV && (jV.label = bV), VV.uvSet = BV.coordinatesIndex, VV.matrix.set((0, LV.B)(BV)), (0, vV.J)(VV, BV)
      },
      cube: (VV, eV, xV) => {
        let {
          rootUrl: JV,
          files: UV,
          noMipmap: pV,
          luminance: QV
        } = xV;
        const {
          samplingMode: nV
        } = VV.sampler, wV = nV === (0, vV.z)(pV) ? null : () => {
          (0, LV.A)(ZV, nV)
        }, ZV = new YV.c(JV, eV, null, pV, UV, wV, null, (0, vV.w)(QV));
        ZV.coordinatesMode = yV.b.SKYBOX_MODE, (0, vV.J)(VV, ZV)
      },
      canvas: (VV, eV, xV) => {
        let {
          width: JV,
          height: YV,
          mipmaps: pV,
          samplingMode: QV,
          hasAlpha: nV = !1,
          wrap: wV = yV.b.CLAMP_ADDRESSMODE
        } = xV;
        const ZV = new UV.c(eV, {
          width: JV,
          height: YV
        }, VV, pV, QV);
        ZV.hasAlpha = nV, ZV.wrapU = wV, ZV.wrapV = wV;
        const vV = (0, LV.v)(ZV);
        return (0, LV.w)(vV, ZV), vV
      }
    })
  },
  42506: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      c: () => ZV,
      d: () => vV
    });
    var JV = xV(42496),
      YV = xV(41318),
      UV = xV(41566),
      yV = xV(41677),
      pV = xV(42498),
      QV = xV(41674),
      nV = xV(38547);
    class wV extends yV.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (VV, eV) => {
          this.releaseUnlessInstanced(eV)
        }, this.onLinked = null
      }
      link(VV) {
        var eV;
        (0, nV.m)(VV), this.model = VV, null === (eV = this.onLinked) || void 0 === eV || eV.call(this, VV)
      }
      relink() {
        this.release();
        const VV = [];
        for (const YV of Object.values(this._vertexBuffers))
          if (!YV.getIsInstanced()) {
            const {
              byteOffset: eV,
              byteStride: xV,
              type: JV,
              normalized: UV
            } = YV;
            VV.push({
              kind: YV.getKind(),
              data: YV.getData(),
              offset: eV,
              stride: xV,
              components: YV.getSize(),
              glType: JV,
              isNormalized: UV
            })
          } const eV = this._indices.length ? this._indices : null,
          {
            minimum: xV,
            maximum: JV
          } = this.extend;
        this.link(new nV.e(VV, eV, this.getTotalVertices(), new Float64Array(xV.WYV()), new Float64Array(JV.WYV())))
      }
      copy(VV) {
        if (!this.model) return super.copy(VV);
        const eV = new wV(VV, this.dD()),
          xV = this.RYV(void 0, !0);
        xV && eV.setIndices(xV);
        let yV = !1;
        for (const UV in this._vertexBuffers) {
          const VV = this._vertexBuffers[UV],
            xV = VV.getData();
          if (!xV) continue;
          const pV = VV.getSize(),
            {
              type: QV,
              byteOffset: nV,
              byteStride: wV,
              normalized: ZV
            } = VV;
          yV ||= VV.isUpdatable();
          const vV = VV.getIsInstanced() ? (xV instanceof Array ? 4 * xV.length : xV.byteLength) / wV : this.getTotalVertices(),
            rV = (0, YV.q)(xV, pV, QV, nV, wV, vV, !0),
            kV = {
              updatable: VV.isUpdatable(),
              stride: pV,
              type: QV,
              normalized: ZV,
              takeBufferOwnership: !0,
              instanced: VV.getIsInstanced()
            };
          eV.setVerticesBuffer(new JV.c(this.sk(), rV, UV, kV), vV)
        }
        return eV._updatable = yV, eV._boundingInfo = new UV.b(this.extend.minimum, this.extend.maximum), eV.relink(), eV
      }
      static mergeMeshes(VV, eV, xV, JV, YV, UV) {
        const QV = VV[0].dD(),
          nV = new pV.e(VV[0].name + "_merged", QV),
          ZV = new wV(yV.c.RandomId(), QV, void 0, !1, nV);
        try {
          if (!pV.e.MergeMeshes(VV, eV, xV, nV, YV, UV)) return nV.dispose(), null
        } catch (vV) {
          throw nV.dispose(), vV
        }
        return ZV.relink(), nV
      }
      removeVerticesData(VV) {
        this.releaseUnlessInstanced(VV), super.removeVerticesData(VV)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(VV) {
        var eV;
        VV && null !== (eV = this.getVertexBuffer(VV)) && void 0 !== eV && eV.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, nV.u)(this.model), this.model = null)
      }
    }

    function ZV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pV.e(VV, xV);
      const YV = (0, nV.i)(eV),
        {
          positions: UV,
          normals: ZV,
          uvs: vV,
          indices: rV,
          named: kV = {}
        } = eV,
        bV = new QV.c;
      bV.positions = UV, bV.normals = null !== ZV && void 0 !== ZV ? ZV : null, bV.uvs = null !== vV && void 0 !== vV ? vV : null, bV.indices = rV;
      const EV = new wV(yV.c.RandomId(), xV, bV, !1, JV);
      for (const {
          kind: yV,
          components: pV
        }
        of YV.vertexAttributes) yV in kV && JV.setVerticesData(yV, kV[yV], !1, pV);
      return EV.link(YV), JV
    }

    function vV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const YV = new pV.e(VV, xV),
        {
          positions: UV,
          normals: yV,
          uvs: nV,
          indices: wV
        } = eV;
      return Object.assign(new QV.c, {
        positions: UV,
        normals: yV,
        uvs: nV,
        indices: wV
      }).applyToMesh(YV, JV), YV
    }
  },
  42490: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      const JV = eV * eV * 4,
        YV = VV[0].layers,
        UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
        yV = new Uint8Array(UV * JV);
      VV.forEach(((eV, xV) => {
        const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
        yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
      }));
      const pV = Math.max(1, Math.min(UV, xV || UV));
      if (pV === UV) return [{
        pixels: yV,
        layers: UV
      }];
      const QV = [];
      for (let nV = 0; nV < UV; nV += pV) {
        const VV = Math.min(UV, nV + pV);
        QV.push({
          pixels: yV.slice(nV * JV, VV * JV),
          layers: VV - nV
        })
      }
      return QV
    }
    xV.d(eV, {
      e: () => JV,
      g: () => UV
    });
    const YV = new WeakMap;

    function UV(VV, eV, xV) {
      var JV, UV;
      const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
      YV.set(VV, yV);
      const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
      yV.set(eV[0], pV);
      const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
      if (QV) return QV.built;
      const nV = {
        urls: [...eV],
        built: xV()
      };
      return pV.push(nV), nV.built.catch((() => {
        pV.splice(pV.indexOf(nV), 1)
      })), nV.built
    }
  },
  39943: (VV, eV, xV) => {
    function JV(VV, eV) {
      return "object" === typeof VV && null !== VV ? Object.assign(VV, {
        startStep: eV
      }) : VV
    }

    function YV(VV) {
      return "object" === typeof VV && null !== VV && "startStep" in VV ? VV.startStep : null
    }
    xV.d(eV, {
      b: () => YV,
      d: () => JV
    })
  },
  39993: (VV, eV, xV) => {
    var JV = {
      "./cape_cow_cream.png": 28712,
      "./cape_cow_normal.png": 28719,
      "./cape_creator_level1.png": 28728,
      "./cape_creator_level2.png": 28737,
      "./cape_creator_level3.png": 28746,
      "./cape_none.png": 28750,
      "./cape_pig.png": 28758,
      "./cape_sheep.png": 28762,
      "./cape_super.png": 28764,
      "./cape_super_inverted.png": 28770,
      "./cape_youtuber.png": 28772
    };

    function YV(VV) {
      var eV = UV(VV);
      return xV(eV)
    }

    function UV(VV) {
      if (!xV.o(JV, VV)) {
        var eV = new Error("Cannot find module '" + VV + "'");
        throw eV.code = "MODULE_NOT_FOUND", eV
      }
      return JV[VV]
    }
    YV.keys = function() {
      return Object.keys(JV)
    }, YV.resolve = UV, VV.exports = YV, YV.id = 39993
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);