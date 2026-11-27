export const id = 218;
export const ids = [218];
export const modules = {
  39973: (ee, ie, He) => {
    function ye(ee) {
      return void 0 === ee ? void 0 : [ee[0], ee[1], ee[2]]
    }

    function be(ee) {
      const ie = ee.particles;
      return {
        opts: {
          texture: ie.texture,
          bk: ie.bk,
          minLifeTime: ie.minLifeTime,
          maxLifeTime: ie.maxLifeTime,
          minSize: ie.minSize,
          maxSize: ie.maxSize,
          minEmitPower: ie.minEmitPower,
          maxEmitPower: ie.maxEmitPower,
          emitRate: ie.emitRate,
          gravity: ye(ie.gravity),
          dir1: ye(ie.dir1),
          dir2: ye(ie.dir2),
          colorGradients: ie.colorGradients,
          blendMode: ie.blendMode
        },
        half: [ie.width / 2, ie.height / 2, ie.depth / 2]
      }
    }
    He.d(ie, {
      d: () => be
    })
  },
  39925: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      i: () => Je,
      m: () => Fe,
      o: () => Ke
    });
    var ye = He(198);
    const be = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      Me = "PetRoot";
    let Ke = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Ue = be;
    new Map, new Map;

    function Fe(ee) {
      var ie;
      return null !== (ie = (0, ye.b)(Ke, ee)) && void 0 !== ie ? ie : null
    }

    function Je(ee) {
      var ie;
      return null !== (ie = (0, ye.b)(Ue, ee)) && void 0 !== ie ? ie : null
    }
  },
  39980: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      f: () => be,
      j: () => Me
    });
    class ye {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Op = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(ee) {
        var ie;
        const {
          feet: He,
          heading: ye,
          tuning: Ke
        } = ee, Ue = Math.min(Math.max(ee.dt, 0), .1), {
          pose: Fe,
          Op: Je,
          target: oe
        } = this;
        if (this.started && Ue > 0) {
          const ee = Math.hypot(He[0] - this.lastFeet[0], He[1] - this.lastFeet[1], He[2] - this.lastFeet[2]);
          this.speed += (ee / Ue - this.speed) * Math.min(Ue / .15, 1)
        }
        this.lastFeet[0] = He[0], this.lastFeet[1] = He[1], this.lastFeet[2] = He[2], this.stillS = this.speed > .3 ? 0 : this.stillS + Ue;
        const Re = this.stillS >= .6 ? "perched" : "flying";
        "flying" === Re && "perched" === Fe.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += Ue, Fe.mode = Re;
        const ke = Math.sin(ye),
          qe = Math.cos(ye);
        "perched" === Re ? (Me(oe, He, Ke.perchOffset, ke, qe), oe[1] += ee.headTopY - He[1]) : (Me(oe, He, Ke.followOffset, ke, qe), oe[1] += be(Ke, ee.timeS));
        const {
          pos: fe
        } = Fe, Te = Math.hypot(oe[0] - fe[0], oe[1] - fe[1], oe[2] - fe[2]);
        if (!this.started || Te > 8 || "perched" === Re && (this.perchLocked || Te < .05)) this.perchLocked = this.started && "perched" === Re, fe[0] = oe[0], fe[1] = oe[1], fe[2] = oe[2], Je[0] = Je[1] = Je[2] = 0;
        else {
          const ee = Ke.followStiffness;
          for (let ie = 0; ie < 3; ie++) Je[ie] += (ee * ee * (oe[ie] - fe[ie]) - 2 * ee * Je[ie]) * Ue, fe[ie] += Je[ie] * Ue
        }
        const pe = ye + Ke.yawOffset;
        var Xe;
        return this.started ? Fe.yaw += ((Xe = pe - Fe.yaw) - 2 * Math.PI * Math.round(Xe / (2 * Math.PI))) * Math.min(8 * Ue, 1) : Fe.yaw = pe, this.started = !0, Fe.seated = "perched" === Re && this.perchLocked, Fe.clip = null === (ie = Ke.clips) || void 0 === ie ? void 0 : ie[this.gH(Re)], Fe
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      gH(ee) {
        return "perched" === ee ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function be(ee, ie) {
      return ee.bobAmplitude * Math.sin(2 * Math.PI * ee.bobHz * ie)
    }

    function Me(ee, ie, He, ye, be) {
      const [Me, Ke, Ue] = He;
      ee[0] = ie[0] + Me * be + Ue * ye, ee[1] = ie[1] + Ke, ee[2] = ie[2] - Me * ye + Ue * be
    }
  },
  39934: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me
    });
    var ye = He(37913),
      be = He(38702);

    function Me(ee, ie) {
      var He;
      ee.blendMode = ie.blendMode, ee.minLifeTime = ie.minLifeTime, ee.maxLifeTime = ie.maxLifeTime, ee.minSize = ie.minSize, ee.maxSize = ie.maxSize, ee.minEmitPower = ie.minEmitPower, ee.maxEmitPower = ie.maxEmitPower;
      const Me = null !== (He = ie.gravity) && void 0 !== He ? He : [0, 0, 0];
      ee.gravity = new ye.rf(Me[0], Me[1], Me[2]);
      for (const ye of ie.colorGradients) ee.addColorGradient(ye.timeFraction, (0, be.k)(ye.minColor), ye.maxColor ? (0, be.k)(ye.maxColor) : void 0)
    }
  },
  39523: (ee, ie, He) => {
    He.d(ie, {
      e: () => Be,
      g: () => Oe,
      h: () => ge,
      l: () => We,
      m: () => te,
      p: () => ze
    });
    var ye = He(335),
      be = He(39540),
      Me = He(2978),
      Ke = He(2987),
      Ue = He(39528),
      Fe = He(39533),
      Je = He(18),
      oe = He(103),
      Re = He(3128),
      ke = He(97),
      qe = He(123),
      fe = He(35),
      Te = He(3977),
      pe = He(115);
    const Xe = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function ze(ee) {
      var ie;
      const He = null !== (ie = oe.currentUrl.getSearchParam(ee)) && void 0 !== ie ? ie : fe.i.getItem(ee);
      return null === He || void 0 === He || "" === He ? null : "0" !== He && "false" !== He && !1 !== He && 0 !== He
    }
    async function Be(ee, ie) {
      (0, Me.D)(null);
      const He = (0, Ke.l)((0, Ke.k)(ie.useWebGpu, !0));
      (0, ke.setWebGpuRequested)("lite" === He.requested && (0, ke.getWebGpuSupported)());
      const Ue = (0, Ke.e)(He.source);
      null !== Ue && console.info(`Renderer: ${He.requested} from ${Ue}`), null !== He.fallbackReason && console.warn(`Renderer: ${He.fallbackReason}`);
      let oe = He.fallbackReason;
      if ("webgl2" !== He.choice) {
        const Ue = await async function(ee, ie, He, Ke) {
          const Ue = await (0, ke.probeWebGpuAdapter)();
          if ("usable" !== Ue) return (0, ke.setWebGpuFallbackReason)(Ue), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (He && !0 === fe.i.getItem(pe.H) && !0 !== fe.i.getItem(ye.nc)) return (0, ke.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), pe.d;
          let oe = "load_failed";
          try {
            const {
              create: He
            } = await (0, Me.s)(Ke).load();
            oe = "start_failed";
            const ye = Je.e.antiAliasingOnWebGpuAdapter((0, qe.n)()),
              be = (0, Fe.f)(ee),
              Ue = (0, Fe.e)(be, {
                size: ee => (0, Re.n)(be, ee)
              });
            return await He(ee, {
              Ube: ye,
              sceneDepth: ie.sceneDepth,
              sunShadow: ie.sunShadow,
              bufferSize: Ue
            })
          } catch (Te) {
            const ee = (0, be.d)(Te);
            (0, ke.setWebGpuFallbackReason)(ee ? Xe[ee] : oe);
            const ie = null === Te || void 0 === Te ? void 0 : Te.fallbackReason;
            return "string" === typeof ie ? (console.warn(`Lite could not start, falling back to WebGL: ${String(Te)}`), ie) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", Te), "it failed to start (see the console)")
          }
        }(ee, ie, "setting" === He.source, He.choice);
        if ("lite" === He.choice && fe.i.setItem(pe.s, "string" === typeof Ue), "string" !== typeof Ue) return Je.e.followGameGpu((0, qe.n)()), (0, ke.setWebGpuFallbackReason)("none"), (0, Ke.m)(He), (0, Me.D)(Ue), {
          lite: Ue
        };
        oe = (0, Ke.b)(He.choice, [Ue]), ee.replaceWith(ee.cloneNode(!1))
      } else "lite" === He.requested ? (0, ke.setWebGpuFallbackReason)("load_failed") : "default" === He.source && ie.webGpuDefaultOffReason ? (0, ke.setWebGpuFallbackReason)(ie.webGpuDefaultOffReason) : (0, ke.setWebGpuFallbackReason)("not_requested");
      return (0, Ke.m)({
        ...He,
        choice: "webgl2",
        fallbackReason: oe
      }), Je.e.followGameGpu(null), {
        lite: null
      }
    }

    function Ee() {
      return Promise.all([He.e(283), He.e(284), He.e(281), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(293), He.e(303), He.e(292), He.e(286), He.e(287), He.e(271), He.e(0)]).then((() => He(44740)))
    }
    async function ge() {
      return (await Ee()).createSceneParticleSystem
    }
    async function Oe() {
      Promise.all([He.e(283), He.e(612)]).then((() => He(44822))).then((ee => {
        ee.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [ee, ie] = await Promise.all([Ee(), Promise.all([He.e(283), He.e(284), He.e(281), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(293), He.e(303), He.e(292), He.e(286), He.e(287), He.e(271), He.e(0)]).then((() => He(44830))), Promise.all([He.e(283), He.e(284), He.e(281), He.e(291), He.e(285), He.e(290), He.e(288), He.e(280), He.e(293), He.e(303), He.e(292), He.e(286), He.e(287), He.e(271), He.e(0)]).then((() => He(42196)))]);
      return (0, Ue.d)(ie.SkyMaterial), ee.default
    }

    function de(ee) {
      return "lite" === (0, Ke.l)((0, Ke.k)(ee, !1)).choice && (0, ke.getWebGpuSupported)() && !fe.i.getItem(pe.s)
    }

    function We(ee) {
      de(ee) || Oe().catch((ee => {
        console.warn("Failed to prefetch noa's Babylon backend.", ee)
      }))
    }

    function te(ee) {
      (0, Te.e)((() => {
        de(ee) ? (0, Me.p)().load().catch((ee => {
          console.warn("Failed to prefetch the Lite renderer.", ee)
        })) : We(ee)
      }))
    }
  },
  39533: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      f: () => Ke
    });
    var ye = He(18),
      be = He(34807),
      Me = He(3128);

    function Ke(ee) {
      var ie;
      return null !== (ie = ee.parentElement) && void 0 !== ie ? ie : ee
    }

    function Ue(ee, ie) {
      if (ee.clientWidth <= 0 || ee.clientHeight <= 0 || be.c.isHeld()) return null;
      const He = (0, Me.o)(),
        [Ke, Ue] = ie.size(He);
      return (0, Me.t)(Ke, Ue, He, ye.e.get("clientEscMenuOptions").pixelScale)
    }
  },
  42184: (ee, ie, He) => {
    He.d(ie, {
      c: () => qe,
      f: () => Je,
      h: () => Re,
      i: () => oe,
      k: () => ke
    });
    var ye = He(1169),
      be = He(2278),
      Me = He(37987),
      Ke = He(38351);
    class Ue {
      constructor(ee, ie) {
        this.pose = ee, this.nodes = void 0, this.nodes = ee.boneNames.map((ee => ie.get(ee)))
      }
      write(ee) {
        this.pose.pose(ee), (0, Ke.o)(this.pose, this.nodes)
      }
    }

    function Fe(ee) {
      ee.unfreezeWorldMatrix();
      for (const ie of ee.getChildren()) Fe(ie)
    }
    async function Je(ee, ie, He, ye) {
      let {
        keepTransforms: be,
        backFaceCulling: Ke
      } = ye;
      const Ue = await (0, Me.o)(ie, ee),
        Je = (0, Me.i)(null !== He && void 0 !== He ? He : ie, ee, void 0, Ke);
      (0, Me.q)(Ue, Je, {
        keepTransforms: be,
        backFaceCulling: Ke,
        onProcessedMesh: ie => {
          ee.Nbe(ie, !1), ie.isVisible = !1
        }
      });
      for (const Me of Ue.rootNodes) Fe(Me);
      return Ue
    }

    function oe(ee, ie) {
      ee.isVisible = ie;
      for (const He of ee.getChildMeshes()) He.isVisible = ie
    }

    function Re(ee) {
      const ie = new Map;
      for (const He of ee.getNodes()) ie.set(He.name, He);
      return ie
    }

    function ke(ee, ie, He, ye) {
      oe(ee, !0), (0, Me.x)(ee, ie.overlayColour), He.attachTransformNode(ee, ye, He.getNamedNode(ye, ie.destNode))
    }
    class qe {
      constructor(ee, ie, He) {
        this.yp = ee, this.thinInstMgr = ie, this.Ix = He, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(ee, ie, He) {
        const ye = (0, Me.m)(ee, ie);
        return ye in this.modelCache || (this.modelCache[ye] = (async () => {
          try {
            const ye = Re(await Je(this.yp, ee, ie, {
                keepTransforms: void 0 !== He,
                backFaceCulling: !1
              })),
              be = void 0 === He ? null : (0, Ke.k)(He, (ee => {
                const ie = ye.get(ee);
                return ie ? (0, Ke.g)(ie) : null
              }));
            return {
              nodesByName: ye,
              bones: null === be ? null : new Ue(be, ye)
            }
          } catch (be) {
            throw delete this.modelCache[ye], console.error(`Failed to load preview attachment ${ye}:`, be), be
          }
        })()), this.modelCache[ye]
      }
      async update(ee, ie) {
        var He;
        const {
          thinInstMgr: Me,
          Ix: Ke
        } = this;
        this.cosmeticNames[ee] = ie;
        const Ue = this.attachmentsByType[ee];
        if (Ue)
          for (const {
              mesh: be,
              destNode: Je,
              bones: Re
            }
            of Ue) {
            null !== Re && (0, ye.mb)(this.shownBones, Re), oe(be, !1);
            const ee = Me.getNamedNode(Ke, Je);
            Me.detachTransformNodeIfFound(be, Ke, ee)
          }
        this.attachmentsByType[ee] = [];
        const Fe = (0, be.h)(ee, ie);
        if (null !== Fe && void 0 !== Fe && null !== (He = Fe.attachments) && void 0 !== He && He.length)
          for (const ye of Fe.attachments) {
            let He;
            try {
              He = await this.loadModel(ye.modelGlb, ye.texture, ye.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[ee] !== ie) return;
            const be = He.nodesByName.get(ye.modelNode);
            be ? (ke(be, ye, Me, Ke), this.attachmentsByType[ee].push({
              mesh: be,
              destNode: ye.destNode,
              bones: He.bones
            }), null !== He.bones && this.shownBones.push(He.bones)) : console.error(`Preview attachment node ${ye.modelNode} not found in ${ye.modelGlb}`)
          }
      }
      writePoses(ee) {
        for (const ie of this.shownBones) ie.write(ee)
      }
    }
  },
  42256: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      openCharacterPreview: () => Hi
    });
    var ye = He(38927),
      be = He(2969),
      Me = He(602),
      Ke = He(37971),
      Ue = He(2284),
      Fe = He(37963),
      Je = He(40913),
      oe = He(41195),
      Re = He(42157),
      ke = He(37913),
      qe = He(41357),
      fe = He(38020),
      Te = He(41380),
      pe = He(42217),
      Xe = He(37908),
      ze = He(42184),
      Be = He(42177),
      Ee = He(38075),
      ge = He(39523),
      Oe = He(39925),
      de = He(39980),
      We = He(39973),
      te = He(39934),
      Ze = He(3465),
      we = He(38351);
    const De = [0, 1, 0];
    class Pe {
      constructor(ee) {
        this.node = ee, this.nodesByName = new Map, this.rests = new Map, this.clips = new Map;
        for (const ie of ee.getChildTransformNodes()) this.nodesByName.set(ie.name, ie), this.rests.set(ie.name, (0, we.g)(ie))
      }
      play(ee, ie) {
        const He = this.clip(ee);
        He && (He.pose.pose(ie), (0, we.o)(He.pose, He.nodes))
      }
      clip(ee) {
        let ie = this.clips.get(ee);
        if (void 0 === ie) {
          const He = (0, we.k)(ee, (ee => {
            var ie;
            return null !== (ie = this.rests.get(ee)) && void 0 !== ie ? ie : null
          }));
          ie = He && {
            pose: He,
            nodes: He.boneNames.map((ee => this.nodesByName.get(ee)))
          }, this.clips.set(ee, ie)
        }
        return ie
      }
    }

    function Ae(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return new ke.rf(ee[0] * ie, ee[1] * ie, ee[2] * ie)
    }
    class Ye {
      constructor(ee, ie) {
        this.yp = ee, this.scale = ie, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promise.resolve()
      }
      async setPet(ee) {
        var ie;
        this.petName = ee, null === (ie = this.shownPet) || void 0 === ie || ie.node.JY(!1), this.shownPet = null;
        const He = (0, Oe.m)(ee);
        if (!He) return;
        let ye;
        try {
          ye = await this.petNode(He.model)
        } catch {
          return
        }
        this.petName === ee && (ye.node.JY(!0), this.shownPet = ye)
      }
      setAura(ee) {
        const ie = (0, Oe.i)(ee);
        return ee === this.auraName && ie === this.auraTuning || (this.auraName = ee, this.auraTuning = ie, this.auraDrawn = this.showAura(ee, ie)), this.auraDrawn
      }
      async showAura(ee, ie) {
        var He, ye, be;
        const Me = ++this.auraSeq;
        if (null === (He = this.aura) || void 0 === He || He.dispose(!1), this.aura = null, !ie) return;
        const Ke = await (0, ge.h)().catch((ie => (console.error(`Couldn't load the preview's particles for ${ee}:`, ie), null)));
        if (!Ke || Me !== this.auraSeq) return;
        const {
          scale: Ue
        } = this, {
          opts: Fe,
          half: Je
        } = (0, We.d)(ie), oe = Ke(this.yp, `aura|${ee}`, Fe.bk), Re = this.particleTexture(ie.particles.texture);
        oe.texture = Re, (0, te.e)(oe, {
          ...Fe,
          minSize: Fe.minSize * Ue,
          maxSize: Fe.maxSize * Ue,
          minEmitPower: Fe.minEmitPower * Ue,
          maxEmitPower: Fe.maxEmitPower * Ue,
          gravity: Fe.gravity && [Fe.gravity[0] * Ue, Fe.gravity[1] * Ue, Fe.gravity[2] * Ue]
        }), oe.emitRate = Fe.emitRate, oe.createBoxEmitter(Ae(null !== (ye = Fe.dir1) && void 0 !== ye ? ye : De), Ae(null !== (be = Fe.dir2) && void 0 !== be ? be : De), Ae(Je, -Ue), Ae(Je, Ue));
        const [qe, fe, Te] = ie.offset;
        oe.emitter = new ke.rf(qe * Ue, (fe - 1) * Ue, Te * Ue), oe.start(), this.aura = oe;
        const pe = Re.mirror;
        pe.isReady() || pe.loadingError || await new Promise((ie => {
          pe.onLoadObservable.addOnce((() => {
            ie()
          })), pe.getInternalTexture().onErrorObservable.addOnce((He => {
            let {
              message: ye
            } = He;
            console.error(`Preview aura ${ee}'s texture failed to load: ${ye}`), ie()
          }))
        }))
      }
      writePose(ee) {
        var ie;
        if (!this.shownPet) return;
        const He = (0, Oe.m)(this.petName),
          {
            scale: ye
          } = this;
        if (this.petIsolated) return void this.writeIsolatedPose(this.shownPet, He);
        const [be, Me, Ke] = He.followOffset, {
          node: Ue
        } = this.shownPet;
        Ue.position.set(be * ye, (Me + (0, de.f)(He, ee) - 1) * ye, Ke * ye), Ue.rotation.y = He.yawOffset, Ue.wR.Iee(He.scale * ye), null !== (ie = He.clips) && void 0 !== ie && ie.fly && this.shownPet.play(He.clips.fly, ee)
      }
      isolatePet() {
        this.petIsolated = !0
      }
      writeIsolatedPose(ee, ie) {
        var He, ye, be;
        const {
          node: Me
        } = ee;
        Me.position.Iee(0), Me.rotation.y = ie.yawOffset, Me.wR.Iee(1);
        const Ke = null !== (He = null === (ye = ie.clips) || void 0 === ye ? void 0 : ye.perch) && void 0 !== He ? He : null === (be = ie.clips) || void 0 === be ? void 0 : be.fly;
        Ke && ee.play(Ke, 0);
        const {
          min: Ue,
          max: Fe
        } = Me.getHierarchyBoundingVectors(!0), Je = 2 * this.scale / (Fe.y - Ue.y);
        Me.wR.Iee(Je), Me.position.set(-(Ue.x + Fe.x) / 2 * Je, -(Ue.y + Fe.y) / 2 * Je, -(Ue.z + Fe.z) / 2 * Je)
      }
      petNode(ee) {
        let ie = this.petNodes.get(ee);
        return ie || (ie = (0, ze.f)(this.yp, ee, void 0, {
          keepTransforms: !0,
          backFaceCulling: !0
        }).then((ie => {
          const He = new Be.b(`pet|${ee}`, this.yp);
          He.JY(!1);
          for (const ee of ie.rootNodes) ee.parent = He, (0, ze.i)(ee, !0);
          return new Pe(He)
        }), (ie => {
          throw this.petNodes.delete(ee), console.error(`Failed to load preview pet ${ee}:`, ie), ie
        })), this.petNodes.set(ee, ie)), ie
      }
      particleTexture(ee) {
        let ie = this.particleTextures.get(ee);
        return ie || (ie = (0, Ee.q)(this.yp, (0, Ze.g)(ee)), this.particleTextures.set(ee, ie)), ie
      }
    }
    var Ve = He(37979),
      ae = (He(42193), He(41601), He(42196), He(34927)),
      ce = He(37035);
    let xe, Le, Ce, ve, ue, me, le, Se, ne, je, se;
    const Ie = document.createElement("canvas");
    async function he() {
      await new Promise((ee => {
        setTimeout((() => {
          ee()
        }), 100)
      }))
    }
    Ie.classList.add("CharCustomisationPreviewCanvas");
    const Ne = {};

    function Ge(ee, ie) {
      if (!ve) return;
      const Ke = (0, be.h)();
      if (Ke.vY(!1), ye.b.Player.meshApi.updatePlayerCosmetic(Ke.gC, le, ee, ie, !0), "cape" === ee)
        if (ie === Me.g) ue.JY(!1);
        else {
          ue.JY(!0);
          ue.material.diffuseTexture = new pe.d(He(39584)(`./cape_${ie}.png`), ue.Xx(), {
            invertY: !1,
            samplingMode: pe.d.NEAREST_NEAREST_MIPLINEAR
          })
        }
      "pet" === ee ? Ne.pet = je.setPet(ie) : "aura" === ee ? Ne.aura = je.setAura(ie) : Ne[ee] = ne.update(ee, ie)
    }

    function re(ee, ie) {
      const [He, ye] = (0, ce.c)(ee, ie, window.devicePixelRatio);
      xe.setSize(Math.max(He, Math.floor(ee)), Math.max(ye, Math.floor(ie)))
    }
    let Qe = 0;
    class ei {
      constructor(ee, ie) {
        this.framing = ie, this.ready = se, this.dev = {
          canvas: () => Ie,
          isolateHead(ee) {
            const ie = me.getNodeNames(le);
            for (let He = 0; He < ie.length; He++) "HeadMesh" !== ie[He] && "__root__" !== ie[He] && "TorsoNode" !== ie[He] && me.setNodeEnabled(le, He, !1);
            if (ee) {
              const ee = me.getNamedNode(le, "HeadMesh");
              me.setNodeDisableColorWrite(le, ee, !0, (ee => {
                const ie = new Te.StandardMaterial(`${ee.name}_depthOnly`, ee.Xx());
                return ie.disableColorWrite = !0, ie
              }))
            }
            me.setPosition(le, 0, -12, 0), Ge("pet", "pet_none"), Ge("aura", "aura_none")
          },
          isolatePet() {
            const ee = me.getNodeNames(le).length;
            for (let ie = 0; ie < ee; ie++) me.setNodeEnabled(le, ie, !1);
            ue.JY(!1), Ge("aura", "aura_none"), je.isolatePet()
          }
        }, this.closed = !1, this.resetCamera();
        const He = ee.getBoundingClientRect();
        re(He.width, He.height), Qe++, xe.stopRenderLoop(), xe.runRenderLoop((() => {
          var ee, ie, He;
          null === (ee = Se) || void 0 === ee || ee.render(xe.getDeltaTime());
          const ye = performance.now() / 1e3;
          null === (ie = ne) || void 0 === ie || ie.writePoses(ye), null === (He = je) || void 0 === He || He.writePose(ye), Ce.render()
        }))
      }
      isReady() {
        return !!ve
      }
      setCosmetic(ee, ie) {
        Ge(ee, ie)
      }
      playEmote(ee) {
        if (!Se) return;
        if (!ee) return void Se.stopAnimation(Fe.c.Emote);
        const ie = (0, Ke.e)((0, Ue.l)(ee).animation);
        Se.startAnimation(ie, Fe.c.Emote, 0, Ue.e)
      }
      async untilDrawn(ee) {
        if (await he(), "cape" === ee && ue) {
          const ee = ue.material,
            ie = null === ee || void 0 === ee ? void 0 : ee.diffuseTexture;
          ie && !ie.isReady() && (await new Promise((ee => {
            ie.onLoadObservable.addOnce((() => {
              ee()
            }))
          })), await he())
        }
        Ne[ee] && (await Ne[ee], await he()), await Ce.whenReadyAsync(), await new Promise((ee => {
          Ce.onAfterRenderObservable.addOnce((() => {
            ee()
          }))
        }))
      }
      setOrbit(ee) {
        ii(ee)
      }
      resetCamera() {
        Le.inertialAlphaOffset = 0, Le.inertialBetaOffset = 0, Le.inertialRadiusOffset = 0, ii(ae.b[this.framing])
      }
      resize(ee, ie) {
        re(ee, ie)
      }
      close() {
        this.closed || (this.closed = !0, Qe--, 0 === Qe && xe.stopRenderLoop())
      }
    }

    function ii(ee) {
      let {
        yaw: ie,
        pitch: He,
        radius: ye,
        target: be
      } = ee;
      Le.alpha = ie, Le.beta = He, ye && (Le.radius = ye), be && Le.target.set(be[0], be[1], be[2])
    }

    function Hi(ee, ie) {
      return ee.appendChild(Ie), xe || function() {
        xe = new Je.b(Ie, !0, {
          preserveDrawingBuffer: !0
        });
        const ee = (0, be.h)();
        xe.Gbe = ee.PR.engine.Gbe, Ce = new oe.b(xe), Ce.clearColor = new fe.e(0, 0, 0, 0), Ce.ambientColor = new fe.Color3(1, 1, 1), Le = new Re.b("iX", 0, 0, 1, ke.rf.Zero(), Ce), Le.attachControl(Ie, !0), Le.panningSensibility = 0, se = (0, ye.s)("Player", Ce, !0).then((ie => {
          ve = ie.meshApi, ue = ie.capeMesh, me = ee.PR.vx;
          const He = 8.33;
          le = (0, ye.i)("Player", He, !0, !0), me.setPosition(le, 0, -8.33, 0);
          const be = me.getNamedNode(le, "BodyMesh");
          me.attachTransformNode(ue, le, be), me.set(le, "aOpacity", 1), me.tC(le, "aOpacity", 1), ne = new ze.c(Ce, me, le), je = new Ye(Ce, He), Se = new Xe.AnimatorState, Se.uk = ee, Se.thinInstMgr = me, Se.Ix = le, Se.Xbe = me.Abe(le, 0), Se.modelLifeformType = "Player", Se.nodeNameAliases = (0, Ve.d)("Player").nodeNameAliases;
          const Me = ue.WC().boundingBox;
          ue.position.y = ((24 - Me.maximum.y + Me.minimum.y) / 2 - 1 / 32) / He, ue.position.z = -1 / He, ue.rotationQuaternion = null;
          const Ke = Math.PI / 18,
            Ue = Me.maximum.y / He;
          ue.rotation.x = Ke;
          const Fe = Math.cos(Ke),
            Je = Math.sin(Ke);
          ue.position.y += Ue * (1 - Fe) + 0 * Je, ue.position.z -= Ue * Je + 0 * (1 - Fe);
          const oe = new Te.StandardMaterial("capeMaterial", ue.Xx());
          ue.material = oe;
          const Re = new fe.Color3(1, 1, 1);
          oe.diffuseColor = new fe.Color3, oe.specularColor = new fe.Color3, oe.emissiveColor = new fe.Color3, oe.ambientColor = new fe.Color3, Re.scaleToRef(.43, oe.diffuseColor), Re.scaleToRef(1.75, oe.ambientColor), oe.freeze();
          const pe = new qe.c("light", new ke.rf(-.1, 1, -.3), Ce);
          pe.diffuse = new fe.Color3(1, 1, 1), pe.specular = new fe.Color3(1, 1, 1), pe.groundColor = new fe.Color3(.5, .5, .5)
        }))
      }(), new ei(ee, ie)
    }
  },
  39577: (ee, ie, He) => {
    He.d(ie, {
      c: () => ke
    });
    var ye = He(38032),
      be = He(38133),
      Me = He(38162),
      Ke = He(38045),
      Ue = He(38034);

    function Fe(ee) {
      return `\n\t\t\t\t${(0,Ue.v)(ee,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, Ue.C)(ee, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, Ue.C)(ee, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, Ue.o)(ee, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Je(ee, ie) {
      let He = (0, Ue.zb)(ee, "skele" + (ie - 1));
      for (let be = ie - 2; be >= 0; be--) He = (0, Ue.pb)(ee, `boneIdx == ${be}`, (0, Ue.zb)(ee, `skele${be}`), He);
      const ye = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,Ue.C)(ee,"int","boneIdx",(0,Ue.xb)(ee,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,Ue.C)(ee,"vec3","bone",He)}\n\t\t\t\t${(0,Ue.C)(ee,"vec2","pivot",(0,Ue.o)(ee,"vec2","0.0",`${(0,Ue.Fb)(ee,"position")}.z`))}\n\t\t\t\t${(0,Ue.Z)(ee)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${ye}));`:`positionUpdated.yz += ${ye};`}\n\t\t`
    }

    function oe(ee) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,Ue.o)(ee,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Re = {
        x: 0,
        y: 0,
        z: 0,
        MR(ee, ie) {
          return this.x = ee[ie], this.y = ee[ie + 1], this.z = ee[ie + 2], this
        }
      },
      ke = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (ee, ie) => ({
          ...(0, ye.c)("CAPE"),
          BLOXD_CAPE_BONES: `${ee}`,
          BLOXD_CAPE_MAX_Y: (0, be.mb)(ie)
        }),
        getUniforms(ee) {
          return (0, Me.b)(function(ee) {
            const ie = [];
            for (let He = 0; He < ee; He++) ie.push({
              name: `skele${He}`,
              type: "highp vec3"
            });
            return ie
          }(this.skeleLen), "vertex", ee)
        },
        bind(ee) {
          for (let ie = 0; ie < this.skeleLen; ie++) ee.updateVector3(`skele${ie}`, Re.MR(this.skele, 3 * ie))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(ee, ie) {
          return "vertex" !== ee ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Fe(ie),
            CUSTOM_VERTEX_UPDATE_POSITION: Je(ie, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: oe(ie)
          }
        }
      };
    (0, Ke.m)(ke)
  },
  39479: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      g: () => Re
    });
    var ye = He(38032),
      be = He(38162),
      Me = He(38034),
      Ke = He(38045);
    const Ue = "bloxdTextLodBias",
      Fe = [{
        name: Ue,
        type: "float"
      }],
      Je = "bloxdTextSample",
      oe = {
        planes: -.5,
        boards: -.5
      },
      Re = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, ye.c)("TEXT_SAMPLER"),
        getUniforms: ee => (0, be.b)(Fe, "fragment", ee),
        bind(ee) {
          ee.updateFloat(Ue, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(ee, ie) {
          if ("fragment" !== ee) return null;
          const He = (0, Me.J)(ie, `vec4 ${Je}(sampler2D s, vec2 uv, float bias)`, `fn ${Je}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            ye = (0, Me.J)(ie, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            be = `${(0,Me.S)(ie,"vDiffuseUV")} + uvOffset`,
            Ke = (0, Me.J)(ie, `${Je}(diffuseSampler, ${be}, ${(0,Me.zb)(ie,Ue)})`, `${Je}(diffuseSampler, diffuseSamplerSampler, ${be}, ${(0,Me.zb)(ie,Ue)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${He} {\n\t\t\t\t\t${(0,Me.C)(ie,"vec4","texel",ye)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,Me.o)(ie,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,Me.o)(ie,"vec3","0.0")}, ${(0,Me.o)(ie,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, Me.F)(ie)]: `baseColor = ${Ke};`
          }
        }
      };
    (0, Ke.m)(Re)
  },
  42196: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CapeMaterialPlugin: () => Ee,
      HueTintMaterialPlugin: () => ge,
      LifeformMaterialPlugin: () => Oe,
      OverlayMaterialPlugin: () => de
    });
    var ye = He(42201),
      be = He(38850);
    class Me extends((0, ye.e)(be.c)) {}(0, ye.h)(be.c, Me);
    var Ke = He(38126);
    class Ue extends((0, ye.e)(Ke.f)) {}(0, ye.h)(Ke.f, Ue);
    var Fe = He(38685);
    class Je extends((0, ye.e)(Fe.g)) {}(0, ye.h)(Fe.g, Je);
    var oe = He(38146),
      Re = He(41380),
      ke = He(38141);
    class qe extends((0, ye.e)(ke.f)) {
      constructor(ee, ie, He) {
        super(ee, ie, He), (0, oe.i)(ee)
      }
      dispose(ee) {
        (0, oe.m)(this._material), super.dispose(ee)
      }
    }(0, ye.h)(ke.f, qe), (0, ke.j)({
      disableUnusedSpecularTerm: ye.d,
      isLightingDisabled: ee => ee instanceof Re.StandardMaterial && ee.disableLighting
    });
    var fe = He(39479);
    class Te extends((0, ye.e)(fe.g)) {}(0, ye.h)(fe.g, Te);
    var pe = He(39577),
      Xe = He(38026),
      ze = He(38949),
      Be = He(38137);
    class Ee extends((0, ye.e)(pe.c)) {}(0, ye.h)(pe.c, Ee);
    class ge extends((0, ye.e)(Xe.b)) {}(0, ye.h)(Xe.b, ge);
    class Oe extends((0, ye.e)(ze.m)) {}(0, ye.h)(ze.m, Oe);
    class de extends((0, ye.e)(Be.d)) {}(0, ye.h)(Be.d, de)
  },
  39528: (ee, ie, He) => {
    He.d(ie, {
      c: () => Je,
      d: () => Ue,
      e: () => Fe
    });
    var ye = He(38171),
      be = He(38057);
    const Me = new Set;
    let Ke = null;

    function Ue(ee) {
      Ke = ee
    }

    function Fe(ee) {
      if (!Ke) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new Ke("sky", ee)
    }

    function Je(ee, ie, He) {
      if (!(0, ye.f)(ee)) return void ee.material.forceCompilation(ee, ie);
      const Ke = () => {
        if (ee.RZ()) return void Me.delete(ee);
        const ye = (0, be.V)(ee.material);
        if (![null === ye || void 0 === ye ? void 0 : ye.diffuseTexture, null === ye || void 0 === ye ? void 0 : ye.opacityTexture, null === ye || void 0 === ye ? void 0 : ye.emissiveTexture, null === ye || void 0 === ye ? void 0 : ye.reflectionTexture].every((ee => !ee || He.prepareTexture(ee)))) return Me.add(ee), void setTimeout(Ke, 16);
        Me.delete(ee), ie()
      };
      Ke()
    }
  },
  34807: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    var ye = He(1268);

    function be() {
      var ee, ie;
      return null !== (ee = null === (ie = screen.orientation) || void 0 === ie ? void 0 : ie.type) && void 0 !== ee ? ee : innerWidth > innerHeight ? "landscape" : "portrait"
    }
    const Me = new class {
      constructor() {
        this.holding = !1, this.heldOrientation = "", this.releaseTimer = void 0, this.longHoldTimer = void 0, this.resizers = new Set, this.releaseWhenShown = () => {
          document.hidden || (document.removeEventListener("visibilitychange", this.releaseWhenShown), this.release())
        }
      }
      isHeld() {
        return this.holding && be() !== this.heldOrientation && (this.holding = !1), this.holding
      }
      hold() {
        this.heldOrientation = be(), this.holding = !0, clearTimeout(this.releaseTimer), document.removeEventListener("visibilitychange", this.releaseWhenShown), clearTimeout(this.longHoldTimer), this.longHoldTimer = setTimeout((() => {
          this.holding && (0, ye.vT)(new Error("Game view size held for 60 s"))
        }), 6e4)
      }
      release() {
        clearTimeout(this.longHoldTimer), this.releaseTimer = setTimeout((() => {
          if (document.hidden) document.addEventListener("visibilitychange", this.releaseWhenShown);
          else {
            this.holding = !1;
            for (const ee of this.resizers) ee()
          }
        }), 1e3)
      }
      heldSizer(ee) {
        let ie = !1;
        return () => {
          if (ie && this.isHeld()) return null;
          const He = ee();
          return ie ||= null !== He, He
        }
      }
      onRelease(ee) {
        return this.resizers.add(ee), () => {
          this.resizers.delete(ee)
        }
      }
    }
  },
  37035: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me
    });
    const ye = 4e5,
      be = 2;

    function Me(ee, ie, He) {
      let [Me, Ke] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [ee, ie], Ue = Math.min(Number.isFinite(He) && He > 0 ? He : 1, be);
      const Fe = Math.max(0, Me, ee) * Math.max(0, Ke, ie) * Ue * Ue;
      return Fe > ye && (Ue *= Math.sqrt(ye / Fe)), [Math.max(1, Math.floor(Math.max(0, ee) * Ue)), Math.max(1, Math.floor(Math.max(0, ie) * Ue))]
    }
  },
  42201: (ee, ie, He) => {
    He.d(ie, {
      d: () => me,
      e: () => ze,
      h: () => Ie
    });
    var ye = He(41380),
      be = He(42210),
      Me = He(42250),
      Ke = He(42217),
      Ue = He(38650),
      Fe = He(38659),
      Je = He(38664),
      oe = He(38673),
      Re = He(38070),
      ke = He(38075),
      qe = He(42219),
      fe = He(38045),
      Te = He(38057),
      pe = He(38034);

    function Xe(ee, ie) {
      return Object.assign((function(ee, He, ye, be) {
        return ie(this.featureState, ee, He, ye, be)
      }), {
        oR: ee
      })
    }

    function ze(ee) {
      const ie = class extends qe.e {
          constructor(ie, He) {
            const ye = (0, Te.V)(ie),
              be = ye && (0, Te.y)(ye, ee.name);
            for (var Me = arguments.length, Ke = new Array(Me > 2 ? Me - 2 : 0), Ue = 2; Ue < Me; Ue++) Ke[Ue - 2] = arguments[Ue];
            super(ie, ee.name, ee.priority, be ? be.defines : ee.defines(...Ke), !1), this.featureState = void 0, this.featureState = He, this._pluginManager._addPlugin(this), this._enable(!0), (0, Te.A)(this._material, ee, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return ee.className
          }
          isCompatible(ee) {
            return ee === pe.b.GLSL || ee === pe.b.WGSL
          }
        },
        He = (0, fe.e)(ee);
      for (const [ye, be] of Object.entries(fe.c)) {
        const Me = ee[ye];
        if (Me) {
          const ee = He[ye];
          Object.defineProperty(ie.prototype, be, {
            value: Xe(Me, ee),
            writable: !0,
            configurable: !0
          })
        }
      }
      return ie
    }
    class Be extends(ze(Ue.e)) {}
    var Ee = He(40913),
      ge = He(42223),
      Oe = He(42229);

    function de(ee, ie, He) {
      return (0, Oe.e)(He, ie.urls, (() => async function(ee, ie, He) {
        const {
          width: ye
        } = ee[0].getSize(), be = ee.map(((ee, He) => {
          var be;
          const Me = Math.round(ee.getSize().height / ye),
            Ke = null === ie || void 0 === ie ? void 0 : ie[He];
          return {
            pixels: Ke && Ke.byteLength === ye * ye * Me * 4 ? Ke : null !== (be = We.get(ee.getInternalTexture())) && void 0 !== be ? be : ee._readPixelsSync(),
            layers: Me
          }
        })), Me = Math.min(He.Nf().getCaps().texture2DArrayMaxLayerCount, 256), Ue = (0, Oe.c)(be, ye, Me).map((ee => {
          let {
            pixels: ie,
            layers: be
          } = ee;
          return {
            atlas: new ge.c(ie, ye, ye, be, Ee.b.TEXTUREFORMAT_RGBA, He, !0, !1, Ke.d.NEAREST_NEAREST_MIPLINEAR),
            layers: be
          }
        }));
        return ee.forEach(((ee, ie) => {
          const ye = ee.getInternalTexture();
          We.has(ye) || (! function(ee, ie) {
            const He = ie.createRawTexture(new Uint8Array(4), 1, 1, Ee.b.TEXTUREFORMAT_RGBA, !1, !1, Ke.d.NEAREST_SAMPLINGMODE);
            ee._hardwareTexture.release(), ie.unbindAllTextures(), He._swapAndDie(ee, !1)
          }(ye, He.Nf()), We.set(ye, be[ie].pixels))
        })), Ue
      }(ee, ie.pixels, He)))
    }
    const We = new WeakMap;
    var te = He(38682);
    class Ze extends(ze(Fe.k)) {
      constructor(ee, ie) {
        super(ee, ie), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ie.textures.map((ee => ee.mirror)), ie.useWebGL2 && !ie.imagesPerAtlas.length && ie.textureAtlases.splice(0, ie.textureAtlases.length, ...this.mirrors.map((() => null))), this.mirrors.forEach(((ee, ie) => {
          ee.onLoadObservable.add((ee => {
            this.setTextureArrayData(ee, ie).catch((ee => {
              console.error(`Failed to build the texture arrays, at atlas ${ie}`, ee)
            }))
          }))
        })), (0, te.l)(ie, ee.shaderLanguage)
      }
      async setTextureArrayData(ee, ie) {
        const He = this.featureState,
          {
            width: ye,
            height: be
          } = ee.getSize(),
          Me = this._material.shaderLanguage;
        if (!He.useWebGL2) return void(0, te.f)(this._material, He, ie, ye, Math.round(be / ye), Me);
        if (this.loaded.add(ie), this.loaded.size < this.mirrors.length) return;
        const Ke = await de(this.mirrors, He.sources, this._material.Xx());
        (0, te.d)(this._material, He, Ke, ye, Me)
      }
    }
    var we = He(42233),
      De = He(41429),
      Pe = He(37913),
      Ae = He(42240),
      Ye = He(41535),
      Ve = He(41421),
      ae = He(42177),
      ce = He(38314),
      xe = He(42244);
    class Le extends we.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Ce = {
      Mesh: Ae.e,
      TransformNode: ae.b,
      bR: we.c,
      VertexBuffer: we.f,
      BoundingInfo: De.c,
      rf: Pe.rf,
      ArenaBuffer: Le,
      SubMesh: Ve.b,
      VertexData: Ye.e,
      MirroredGeometry: xe.b,
      meshFromArrays: xe.f,
      plainMeshFromArrays: xe.h
    };
    (0, ce.f)(Ce);
    var ve = He(38146);
    class ue extends(ze(oe.e)) {
      constructor(ee, ie) {
        if (super(ee, ie), ee instanceof ye.StandardMaterial && ie.dirLightCount > 0) {
          const ie = ee,
            He = ie._blockDirtyMechanism;
          ie._blockDirtyMechanism = !0, ee.disableLighting = !0, ie._blockDirtyMechanism = He;
          const ye = (0, Te.V)(ee);
          ye && (ye.disableLighting = !0, (0, Te.S)(ye))
        }(0, ve.i)(ee)
      }
      dispose(ee) {
        (0, ve.m)(this._material), super.dispose(ee)
      }
    }

    function me(ee, ie) {
      if (!(ie instanceof ye.StandardMaterial) || ie.specularTexture) return;
      const {
        r: He,
        g: be,
        b: Me
      } = ie.specularColor;
      0 === He && 0 === be && 0 === Me && (ee.SPECULARTERM = !1)
    }(0, oe.d)({
      disableUnusedSpecularTerm: me
    });
    var le = He(38081),
      Se = He(38330);
    const ne = new RegExp(`^#define ${Je.c}\\s*$`, "m");
    class je extends(ze(Je.h)) {
      constructor(ee, ie) {
        super(ee, ie), this.xf = !1, ie.ditherOnlyWhileFading && (Se.f.add(ee), this.prewarmDitherTwins(ee))
      }
      prewarmDitherTwins(ee) {
        const ie = new WeakSet;
        ee.onEffectCreatedObservable.add((He => {
          let {
            effect: ye,
            subMesh: be
          } = He;
          if (this.featureState.prewarmingDither || ie.has(ye)) return;
          ie.add(ye);
          const Me = null === be || void 0 === be ? void 0 : be.getMesh();
          Me && !ne.test(ye.defines) && ee.Xx().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(Me) || ie.delete(ye)
          }))
        }))
      }
      prewarmDither(ee) {
        if (this.xf || ee.RZ()) return !1;
        const ie = new Ve.b(0, 0, 0, 0, 0, ee, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(ee, ie)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== ie.effect
      }
      dispose(ee) {
        this.xf = !0, super.dispose(ee)
      }
    }
    const se = new Map;

    function Ie(ee, ie) {
      se.set(ee, ie)
    }
    Ie(Ue.e, Be), Ie(Fe.k, Ze), Ie(Je.h, je), Ie(oe.e, ue), (0, Re.d)({
      create: (ee, ie) => {
        const He = new ye.StandardMaterial(ee.name, ie);
        return (0, le.o)(ee, He), He.detailMap._pluginDefineNames
      },
      write: (ee, ie, He) => {
        (0, le.S)(ee.mirror, ie, He)
      },
      addFeature: (ee, ie, He) => {
        const ye = se.get(ie.feature);
        if (!ye) throw new Error(`${ie.feature.name} has no plugin class (registerPluginClass)`);
        new ye(ee.mirror, ie.state, ...He)
      },
      texture: (ee, ie, He) => {
        let {
          url: ye,
          noMipmap: be,
          invertY: Me,
          samplingMode: Ue,
          data: Fe,
          sets: Je
        } = He;
        if (!Fe) {
          const He = new Ke.d(ye, ie, be, Me, Ue);
          return Object.assign(He, Je), void(0, ke.F)(ee, He)
        }
        const oe = {},
          Re = new Promise(((ee, ie) => {
            oe.onLoad = ee, oe.onError = (ee, He) => {
              ie(new Error(`${Fe.context}: ${(null===He||void 0===He?void 0:He.message)||ee||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: qe,
            bytes: fe,
            label: Te
          } = Fe,
          pe = {
            noMipmap: be,
            invertY: !1,
            samplingMode: Ue,
            ...oe,
            mimeType: qe,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          Xe = new Ke.d(null, ie, pe);
        le.q.set(Xe, Re), Object.assign(Xe, Je), Xe.updateURL(ye, fe);
        const ze = Xe.getInternalTexture();
        ze && (ze.label = Te), ee.uvSet = Xe.coordinatesIndex, ee.matrix.set((0, le.L)(Xe)), (0, ke.F)(ee, Xe)
      },
      cube: (ee, ie, He) => {
        let {
          rootUrl: ye,
          files: Me,
          noMipmap: Ue,
          luminance: Fe
        } = He;
        const {
          samplingMode: Je
        } = ee.sampler, oe = Je === (0, ke.y)(Ue) ? null : () => {
          (0, le.K)(Re, Je)
        }, Re = new be.c(ye, ie, null, Ue, Me, oe, null, (0, ke.u)(Fe));
        Re.coordinatesMode = Ke.d.SKYBOX_MODE, (0, ke.F)(ee, Re)
      },
      canvas: (ee, ie, He) => {
        let {
          width: ye,
          height: be,
          mipmaps: Ue,
          samplingMode: Fe,
          hasAlpha: Je = !1,
          wrap: oe = Ke.d.CLAMP_ADDRESSMODE
        } = He;
        const Re = new Me.d(ie, {
          width: ye,
          height: be
        }, ee, Ue, Fe);
        Re.hasAlpha = Je, Re.wrapU = oe, Re.wrapV = oe;
        const ke = (0, le.y)(Re);
        return (0, le.C)(ke, Re), ke
      }
    })
  },
  42244: (ee, ie, He) => {
    He.d(ie, {
      b: () => oe,
      f: () => Re,
      h: () => ke
    });
    var ye = He(42233),
      be = He(41175),
      Me = He(41429),
      Ke = He(41540),
      Ue = He(42240),
      Fe = He(41535),
      Je = He(38195);
    class oe extends Ke.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (ee, ie) => {
          this.releaseUnlessInstanced(ie)
        }, this.onLinked = null
      }
      link(ee) {
        var ie;
        (0, Je.k)(ee), this.model = ee, null === (ie = this.onLinked) || void 0 === ie || ie.call(this, ee)
      }
      relink() {
        this.release();
        const ee = [];
        for (const be of Object.values(this._vertexBuffers))
          if (!be.getIsInstanced()) {
            const {
              byteOffset: ie,
              byteStride: He,
              type: ye,
              normalized: Me
            } = be;
            ee.push({
              kind: be.getKind(),
              data: be.getData(),
              offset: ie,
              stride: He,
              components: be.getSize(),
              glType: ye,
              isNormalized: Me
            })
          } const ie = this._indices.length ? this._indices : null,
          {
            minimum: He,
            maximum: ye
          } = this.extend;
        this.link(new Je.c(ee, ie, this.getTotalVertices(), new Float64Array(He.Qbe()), new Float64Array(ye.Qbe())))
      }
      copy(ee) {
        if (!this.model) return super.copy(ee);
        const ie = new oe(ee, this.Xx()),
          He = this.eMe(void 0, !0);
        He && ie.setIndices(He);
        let Ke = !1;
        for (const Me in this._vertexBuffers) {
          const ee = this._vertexBuffers[Me],
            He = ee.getData();
          if (!He) continue;
          const Ue = ee.getSize(),
            {
              type: Fe,
              byteOffset: Je,
              byteStride: oe,
              normalized: Re
            } = ee;
          Ke ||= ee.isUpdatable();
          const ke = ee.getIsInstanced() ? (He instanceof Array ? 4 * He.length : He.byteLength) / oe : this.getTotalVertices(),
            qe = (0, be.s)(He, Ue, Fe, Je, oe, ke, !0),
            fe = {
              updatable: ee.isUpdatable(),
              stride: Ue,
              type: Fe,
              normalized: Re,
              takeBufferOwnership: !0,
              instanced: ee.getIsInstanced()
            };
          ie.setVerticesBuffer(new ye.f(this.Nf(), qe, Me, fe), ke)
        }
        return ie._updatable = Ke, ie._boundingInfo = new Me.c(this.extend.minimum, this.extend.maximum), ie.relink(), ie
      }
      static mergeMeshes(ee, ie, He, ye, be, Me) {
        const Fe = ee[0].Xx(),
          Je = new Ue.e(ee[0].name + "_merged", Fe),
          Re = new oe(Ke.b.RandomId(), Fe, void 0, !1, Je);
        try {
          if (!Ue.e.MergeMeshes(ee, ie, He, Je, be, Me)) return Je.dispose(), null
        } catch (ke) {
          throw Je.dispose(), ke
        }
        return Re.relink(), Je
      }
      removeVerticesData(ee) {
        this.releaseUnlessInstanced(ee), super.removeVerticesData(ee)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(ee) {
        var ie;
        ee && null !== (ie = this.getVertexBuffer(ee)) && void 0 !== ie && ie.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Je.q)(this.model), this.model = null)
      }
    }

    function Re(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ue.e(ee, He);
      const be = (0, Je.h)(ie),
        {
          positions: Me,
          normals: Re,
          uvs: ke,
          indices: qe,
          named: fe = {}
        } = ie,
        Te = new Fe.e;
      Te.positions = Me, Te.normals = null !== Re && void 0 !== Re ? Re : null, Te.uvs = null !== ke && void 0 !== ke ? ke : null, Te.indices = qe;
      const pe = new oe(Ke.b.RandomId(), He, Te, !1, ye);
      for (const {
          kind: Ke,
          components: Ue
        }
        of be.vertexAttributes) Ke in fe && ye.setVerticesData(Ke, fe[Ke], !1, Ue);
      return pe.link(be), ye
    }

    function ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const be = new Ue.e(ee, He),
        {
          positions: Me,
          normals: Ke,
          uvs: Je,
          indices: oe
        } = ie;
      return Object.assign(new Fe.e, {
        positions: Me,
        normals: Ke,
        uvs: Je,
        indices: oe
      }).applyToMesh(be, ye), be
    }
  },
  42229: (ee, ie, He) => {
    function ye(ee, ie, He) {
      const ye = ie * ie * 4,
        be = ee[0].layers,
        Me = be * (ee.length - 1) + ee[ee.length - 1].layers,
        Ke = new Uint8Array(Me * ye);
      ee.forEach(((ie, He) => {
        const Me = He + 1 < ee.length ? Math.min(ie.layers, be) : ie.layers;
        Ke.set(new Uint8Array(ie.pixels.buffer, ie.pixels.byteOffset, Me * ye), He * be * ye)
      }));
      const Ue = Math.max(1, Math.min(Me, He || Me));
      if (Ue === Me) return [{
        pixels: Ke,
        layers: Me
      }];
      const Fe = [];
      for (let Je = 0; Je < Me; Je += Ue) {
        const ee = Math.min(Me, Je + Ue);
        Fe.push({
          pixels: Ke.slice(Je * ye, ee * ye),
          layers: ee - Je
        })
      }
      return Fe
    }
    He.d(ie, {
      c: () => ye,
      e: () => Me
    });
    const be = new WeakMap;

    function Me(ee, ie, He) {
      var ye, Me;
      const Ke = null !== (ye = be.get(ee)) && void 0 !== ye ? ye : new Map;
      be.set(ee, Ke);
      const Ue = null !== (Me = Ke.get(ie[0])) && void 0 !== Me ? Me : [];
      Ke.set(ie[0], Ue);
      const Fe = Ue.find((ee => ee.urls.length === ie.length && ee.urls.every(((ee, He) => ee === ie[He]))));
      if (Fe) return Fe.built;
      const Je = {
        urls: [...ie],
        built: He()
      };
      return Ue.push(Je), Je.built.catch((() => {
        Ue.splice(Ue.indexOf(Je), 1)
      })), Je.built
    }
  },
  39540: (ee, ie, He) => {
    function ye(ee, ie) {
      return "object" === typeof ee && null !== ee ? Object.assign(ee, {
        startStep: ie
      }) : ee
    }

    function be(ee) {
      return "object" === typeof ee && null !== ee && "startStep" in ee ? ee.startStep : null
    }
    He.d(ie, {
      d: () => be,
      e: () => ye
    })
  },
  39584: (ee, ie, He) => {
    var ye = {
      "./cape_cow_cream.png": 28632,
      "./cape_cow_normal.png": 28635,
      "./cape_creator_level1.png": 28638,
      "./cape_creator_level2.png": 28646,
      "./cape_creator_level3.png": 28648,
      "./cape_none.png": 28652,
      "./cape_pig.png": 28656,
      "./cape_sheep.png": 28662,
      "./cape_super.png": 28668,
      "./cape_super_inverted.png": 28674,
      "./cape_youtuber.png": 28680
    };

    function be(ee) {
      var ie = Me(ee);
      return He(ie)
    }

    function Me(ee) {
      if (!He.o(ye, ee)) {
        var ie = new Error("Cannot find module '" + ee + "'");
        throw ie.code = "MODULE_NOT_FOUND", ie
      }
      return ye[ee]
    }
    be.keys = function() {
      return Object.keys(ye)
    }, be.resolve = Me, ee.exports = be, be.id = 39584
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);