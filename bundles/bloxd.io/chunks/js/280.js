export const id = 280;
export const ids = [280];
export const modules = {
  40504: (bb, wb, Mb) => {
    function eb(bb) {
      return void 0 === bb ? void 0 : [bb[0], bb[1], bb[2]]
    }

    function Hb(bb) {
      const wb = bb.particles;
      return {
        opts: {
          texture: wb.texture,
          qO: wb.qO,
          minLifeTime: wb.minLifeTime,
          maxLifeTime: wb.maxLifeTime,
          minSize: wb.minSize,
          maxSize: wb.maxSize,
          minEmitPower: wb.minEmitPower,
          maxEmitPower: wb.maxEmitPower,
          emitRate: wb.emitRate,
          gravity: eb(wb.gravity),
          dir1: eb(wb.dir1),
          dir2: eb(wb.dir2),
          colorGradients: wb.colorGradients,
          blendMode: wb.blendMode
        },
        half: [wb.width / 2, wb.height / 2, wb.depth / 2]
      }
    }
    Mb.d(wb, {
      d: () => Hb
    })
  },
  40463: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Lb,
      j: () => lb,
      l: () => Vb
    });
    var eb = Mb(236);
    const Hb = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      pb = "PetRoot";
    let Vb = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      gb = Hb;
    new Map, new Map;

    function lb(bb) {
      var wb;
      return null !== (wb = (0, eb.c)(Vb, bb)) && void 0 !== wb ? wb : null
    }

    function Lb(bb) {
      var wb;
      return null !== (wb = (0, eb.c)(gb, bb)) && void 0 !== wb ? wb : null
    }
  },
  40510: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      d: () => Hb,
      e: () => pb
    });
    class eb {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.UF = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(bb) {
        var wb;
        const {
          feet: Mb,
          heading: eb,
          tuning: Vb
        } = bb, gb = Math.min(Math.max(bb.dt, 0), .1), {
          pose: lb,
          UF: Lb,
          target: Ib
        } = this;
        if (this.started && gb > 0) {
          const bb = Math.hypot(Mb[0] - this.lastFeet[0], Mb[1] - this.lastFeet[1], Mb[2] - this.lastFeet[2]);
          this.speed += (bb / gb - this.speed) * Math.min(gb / .15, 1)
        }
        this.lastFeet[0] = Mb[0], this.lastFeet[1] = Mb[1], this.lastFeet[2] = Mb[2], this.stillS = this.speed > .3 ? 0 : this.stillS + gb;
        const Ob = this.stillS >= .6 ? "perched" : "flying";
        "flying" === Ob && "perched" === lb.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += gb, lb.mode = Ob;
        const Ub = Math.sin(eb),
          tb = Math.cos(eb);
        "perched" === Ob ? (pb(Ib, Mb, Vb.perchOffset, Ub, tb), Ib[1] += bb.headTopY - Mb[1]) : (pb(Ib, Mb, Vb.followOffset, Ub, tb), Ib[1] += Hb(Vb, bb.timeS));
        const {
          pos: Cb
        } = lb, Eb = Math.hypot(Ib[0] - Cb[0], Ib[1] - Cb[1], Ib[2] - Cb[2]);
        if (!this.started || Eb > 8 || "perched" === Ob && (this.perchLocked || Eb < .05)) this.perchLocked = this.started && "perched" === Ob, Cb[0] = Ib[0], Cb[1] = Ib[1], Cb[2] = Ib[2], Lb[0] = Lb[1] = Lb[2] = 0;
        else {
          const bb = Vb.followStiffness;
          for (let wb = 0; wb < 3; wb++) Lb[wb] += (bb * bb * (Ib[wb] - Cb[wb]) - 2 * bb * Lb[wb]) * gb, Cb[wb] += Lb[wb] * gb
        }
        const Fb = eb + Vb.yawOffset;
        var Bb;
        return this.started ? lb.yaw += ((Bb = Fb - lb.yaw) - 2 * Math.PI * Math.round(Bb / (2 * Math.PI))) * Math.min(8 * gb, 1) : lb.yaw = Fb, this.started = !0, lb.seated = "perched" === Ob && this.perchLocked, lb.clip = null === (wb = Vb.clips) || void 0 === wb ? void 0 : wb[this.CM(Ob)], lb
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      CM(bb) {
        return "perched" === bb ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function Hb(bb, wb) {
      return bb.bobAmplitude * Math.sin(2 * Math.PI * bb.bobHz * wb)
    }

    function pb(bb, wb, Mb, eb, Hb) {
      const [pb, Vb, gb] = Mb;
      bb[0] = wb[0] + pb * Hb + gb * eb, bb[1] = wb[1] + Vb, bb[2] = wb[2] - pb * eb + gb * Hb
    }
  },
  40470: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(38281),
      Hb = Mb(39099);

    function pb(bb, wb) {
      var Mb;
      bb.blendMode = wb.blendMode, bb.minLifeTime = wb.minLifeTime, bb.maxLifeTime = wb.maxLifeTime, bb.minSize = wb.minSize, bb.maxSize = wb.maxSize, bb.minEmitPower = wb.minEmitPower, bb.maxEmitPower = wb.maxEmitPower;
      const pb = null !== (Mb = wb.gravity) && void 0 !== Mb ? Mb : [0, 0, 0];
      bb.gravity = new eb.YC(pb[0], pb[1], pb[2]);
      for (const eb of wb.colorGradients) bb.addColorGradient(eb.timeFraction, (0, Hb.l)(eb.minColor), eb.maxColor ? (0, Hb.l)(eb.maxColor) : void 0)
    }
  },
  40032: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => hb,
      d: () => xb,
      g: () => Xb,
      i: () => Kb,
      m: () => rb,
      n: () => mb
    });
    var eb = Mb(366),
      Hb = Mb(40052),
      pb = Mb(4025),
      Vb = Mb(4028),
      gb = Mb(40041),
      lb = Mb(40045),
      Lb = Mb(26),
      Ib = Mb(122),
      Ob = Mb(4139),
      Ub = Mb(110),
      tb = Mb(153),
      Cb = Mb(43),
      Eb = Mb(352),
      Fb = Mb(4967),
      Bb = Mb(135);
    const sb = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function mb(bb) {
      var wb;
      const Mb = null !== (wb = Ib.currentUrl.getSearchParam(bb)) && void 0 !== wb ? wb : Cb.i.getItem(bb);
      return null === Mb || void 0 === Mb || "" === Mb ? null : "0" !== Mb && "false" !== Mb && !1 !== Mb && 0 !== Mb
    }
    async function hb(bb, wb) {
      (0, pb.z)(null);
      const Mb = (0, Vb.l)((0, Vb.i)(wb.useWebGpu, !0));
      (0, Ub.setWebGpuRequested)("lite" === Mb.requested && (0, Ub.getWebGpuSupported)());
      const gb = (0, Vb.g)(Mb.source);
      null !== gb && console.info(`Renderer: ${Mb.requested} from ${gb}`), null !== Mb.fallbackReason && console.warn(`Renderer: ${Mb.fallbackReason}`);
      let Ib = Mb.fallbackReason;
      if ("webgl2" !== Mb.choice) {
        const gb = await async function(bb, wb, Mb, Vb) {
          const gb = await (0, Ub.probeWebGpuAdapter)();
          if ("usable" !== gb) return (0, Ub.setWebGpuFallbackReason)(gb), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (Mb && !0 !== Cb.i.getItem(eb.mc)) {
            if (!0 === Cb.i.getItem(Bb.G)) return (0, Ub.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), Bb.c;
            if (await (0, Eb.l)(), (0, Eb.c)()) return (0, Ub.setWebGpuFallbackReason)("few_wasm_memories"), console.info("This tab fits too few wasm memories for WebGPU, rendering with WebGL."), Eb.b
          }
          let Ib = "load_failed";
          try {
            const {
              create: Mb
            } = await (0, pb.s)(Vb).load();
            Ib = "start_failed";
            const eb = Lb.c.antiAliasingOnWebGpuAdapter((0, tb.k)()),
              Hb = (0, lb.h)(bb),
              gb = (0, lb.e)(Hb, {
                size: bb => (0, Ob.i)(Hb, bb)
              });
            return await Mb(bb, {
              Geb: eb,
              sceneDepth: wb.sceneDepth,
              sunShadow: wb.sunShadow,
              bufferSize: gb
            })
          } catch (Fb) {
            const bb = (0, Hb.c)(Fb);
            (0, Ub.setWebGpuFallbackReason)(bb ? sb[bb] : Ib);
            const wb = null === Fb || void 0 === Fb ? void 0 : Fb.fallbackReason;
            return "string" === typeof wb ? (console.warn(`Lite could not start, falling back to WebGL: ${String(Fb)}`), wb) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", Fb), "it failed to start (see the console)")
          }
        }(bb, wb, "setting" === Mb.source, Mb.choice);
        if ("lite" === Mb.choice && Cb.i.setItem(Bb.u, "string" === typeof gb), "string" !== typeof gb) return Lb.c.followGameGpu((0, tb.k)()), (0, Ub.setWebGpuFallbackReason)("none"), (0, Vb.o)(Mb), (0, pb.z)(gb), {
          lite: gb
        };
        Ib = (0, Vb.c)(Mb.choice, [gb]), bb.replaceWith(bb.cloneNode(!1))
      } else "lite" === Mb.requested ? (0, Ub.setWebGpuFallbackReason)("load_failed") : "default" === Mb.source && wb.webGpuDefaultOffReason ? (0, Ub.setWebGpuFallbackReason)(wb.webGpuDefaultOffReason) : (0, Ub.setWebGpuFallbackReason)("not_requested");
      return (0, Vb.o)({
        ...Mb,
        choice: "webgl2",
        fallbackReason: Ib
      }), Lb.c.followGameGpu(null), {
        lite: null
      }
    }

    function zb() {
      return Promise.all([Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(299), Mb.e(293), Mb.e(294), Mb.e(278), Mb.e(0)]).then((() => Mb(53736)))
    }
    async function Xb() {
      return (await zb()).createSceneParticleSystem
    }
    async function xb() {
      Promise.all([Mb.e(290), Mb.e(622)]).then((() => Mb(53836))).then((bb => {
        bb.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [bb, wb] = await Promise.all([zb(), Promise.all([Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(299), Mb.e(293), Mb.e(294), Mb.e(278), Mb.e(0)]).then((() => Mb(53850))), Promise.all([Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(299), Mb.e(293), Mb.e(294), Mb.e(278), Mb.e(0)]).then((() => Mb(42795)))]);
      return (0, gb.c)(wb.SkyMaterial), bb.default
    }

    function jb(bb) {
      return "lite" === (0, Vb.l)((0, Vb.i)(bb, !1)).choice && (0, Ub.getWebGpuSupported)() && !Cb.i.getItem(Bb.u)
    }

    function Kb(bb) {
      jb(bb) || xb().catch((bb => {
        console.warn("Failed to prefetch noa's Babylon backend.", bb)
      }))
    }

    function rb(bb) {
      (0, Fb.e)((() => {
        jb(bb) ? (0, pb.o)().load().catch((bb => {
          console.warn("Failed to prefetch the Lite renderer.", bb)
        })) : Kb(bb)
      }))
    }
  },
  40045: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => gb,
      h: () => Vb
    });
    var eb = Mb(26),
      Hb = Mb(35281),
      pb = Mb(4139);

    function Vb(bb) {
      var wb;
      return null !== (wb = bb.parentElement) && void 0 !== wb ? wb : bb
    }

    function gb(bb, wb) {
      if (bb.clientWidth <= 0 || bb.clientHeight <= 0 || Hb.e.isHeld()) return null;
      const Mb = (0, pb.k)(),
        [Vb, gb] = wb.size(Mb);
      return (0, pb.q)(Vb, gb, Mb, eb.c.get("clientEscMenuOptions").pixelScale)
    }
  },
  40182: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb,
      f: () => Hb
    });
    const eb = 2.2;

    function Hb(bb) {
      let wb = 0;
      return bb > 5 && (wb = .12 * Math.min(bb - 5, 15), bb > 20 && (wb += .01 * (bb - 20))), 1.4 + wb
    }
  },
  40170: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Vb,
      i: () => gb,
      k: () => pb,
      l: () => tb,
      m: () => lb,
      p: () => Ib,
      t: () => Lb,
      x: () => Ub
    });
    var eb = Mb(38281),
      Hb = Mb(38566);
    const pb = 0,
      Vb = 1,
      gb = 18;

    function lb(bb) {
      return !1 !== bb && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
    }

    function Lb(bb, wb) {
      return null !== bb && void 0 !== bb ? bb : wb
    }

    function Ib(bb, wb, Mb) {
      return wb && !Mb ? Math.max(1, bb / gb) : 1
    }
    const Ob = new WeakMap;

    function Ub(bb, wb, Mb, Hb) {
      const pb = bb.pR.ZMb(Mb),
        Vb = pb.offset;
      Vb[0] = Vb[1] = Vb[2] = 0;
      const gb = bb.pR.ZMb(wb);
      if (Hb || !gb || !pb.mesh.isEnabled() || !pb.mesh.isVisible) return 1;
      const lb = bb.pR.Z2(Mb).h_,
        Lb = bb.camera.x_(),
        Ib = bb.camera.N_(),
        Ub = Lb[0] - lb[0],
        tb = Lb[1] - lb[1],
        Cb = Lb[2] - lb[2];
      if (-(Ib[0] * Ub + Ib[1] * tb + Ib[2] * Cb) <= 0 || Math.hypot(Ub, tb, Cb) < .1) return 1;
      const Eb = bb.FO.RJ().getFrameId();
      let Fb = Ob.get(gb);
      if (Fb || (Fb = {
          frame: -1,
          minimum: new eb.YC,
          maximum: new eb.YC,
          valid: !1
        }, Ob.set(gb, Fb)), Fb.frame !== Eb)
        if (Fb.frame = Eb, gb.keb) Fb.valid = bb.FO.GJ.getObjectBounds(gb.qJ, Fb.minimum, Fb.maximum);
        else {
          Fb.minimum.Jbb(1 / 0), Fb.maximum.Jbb(-1 / 0), Fb.valid = !1;
          const bb = [gb.mesh, ...gb.mesh.getChildMeshes(!1)];
          for (const wb of bb) {
            if (!("getTotalVertices" in wb) || !wb.isEnabled() || !wb.isVisible || !wb.getTotalVertices()) continue;
            wb.computeWorldMatrix();
            const bb = wb.XN().boundingBox;
            Fb.minimum.minimizeInPlace(bb.minimumWorld), Fb.maximum.maximizeInPlace(bb.maximumWorld), Fb.valid = !0
          }
        } if (!Fb.valid) return 1;
      const Bb = function(bb, wb, Mb, eb, Hb) {
        const pb = wb[0] - bb[0],
          Vb = wb[1] - bb[1],
          gb = wb[2] - bb[2],
          lb = Math.hypot(pb, Vb, gb),
          Lb = -(Hb[0] * pb + Hb[1] * Vb + Hb[2] * gb);
        if (lb < .1 || Lb <= 0) return 0;
        const Ib = (Math.abs(Hb[0]) * (eb.x - Mb.x) + Math.abs(Hb[1]) * (eb.y - Mb.y) + Math.abs(Hb[2]) * (eb.z - Mb.z)) / 2,
          Ob = -(Hb[0] * ((Mb.x + eb.x) / 2 - bb[0]) + Hb[1] * ((Mb.y + eb.y) / 2 - bb[1]) + Hb[2] * ((Mb.z + eb.z) / 2 - bb[2]));
        return Math.max(0, Math.min((Ob + Ib + .01) / Lb, 2 * Ib / Lb, 1 - .1 / Lb))
      }(lb, Lb, Fb.minimum, Fb.maximum, bb.camera.N_());
      for (let eb = 0; eb < 3; eb++) Vb[eb] = (Lb[eb] - lb[eb]) * Bb;
      return 1 - Bb
    }

    function tb(bb, wb) {
      const {
        mesh: Mb,
        offset: eb
      } = bb.pR.ZMb(wb), pb = bb.pR.Z2(wb).h_, Vb = pb[0] + eb[0], gb = pb[1] + eb[1], lb = pb[2] + eb[2];
      (0, Hb.q)(Mb, Vb, gb, lb)
    }
  },
  40041: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      c: () => gb,
      e: () => lb
    });
    var eb = Mb(38563),
      Hb = Mb(38449);
    const pb = new Set;
    let Vb = null;

    function gb(bb) {
      Vb = bb
    }

    function lb(bb) {
      if (!Vb) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new Vb("sky", bb)
    }

    function Lb(bb, wb, Mb) {
      if (!(0, eb.e)(bb)) return void bb.material.forceCompilation(bb, wb);
      const Vb = () => {
        if (bb.RD()) return void pb.delete(bb);
        const eb = (0, Hb.ab)(bb.material);
        if (![null === eb || void 0 === eb ? void 0 : eb.diffuseTexture, null === eb || void 0 === eb ? void 0 : eb.opacityTexture, null === eb || void 0 === eb ? void 0 : eb.emissiveTexture, null === eb || void 0 === eb ? void 0 : eb.reflectionTexture].every((bb => !bb || Mb.prepareTexture(bb)))) return pb.add(bb), void setTimeout(Vb, 16);
        pb.delete(bb), wb()
      };
      Vb()
    }
  },
  40168: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => Mw,
      F: () => Ow,
      c: () => Qb,
      f: () => Sb,
      g: () => ob,
      k: () => qb,
      n: () => Iw,
      o: () => pw,
      r: () => Hw,
      u: () => Gb,
      v: () => nb,
      x: () => ab
    });
    var eb = Mb(1259),
      Hb = Mb(1321),
      pb = Mb(366),
      Vb = Mb(1491),
      gb = Mb(5315),
      lb = Mb(5331),
      Lb = Mb(2451),
      Ib = Mb(38473),
      Ob = Mb(38468),
      Ub = Mb(39139),
      tb = Mb(38752),
      Cb = Mb(38613),
      Eb = Mb(38397),
      Fb = Mb(40170),
      Bb = Mb(39171),
      sb = Mb(39976),
      mb = Mb(38440),
      hb = Mb(38542),
      zb = Mb(661),
      Xb = Mb(1329),
      xb = Mb(2146),
      jb = Mb(2228),
      Kb = Mb(4529),
      rb = Mb(4522),
      Rb = Mb(2194),
      Db = Mb(26),
      cb = Mb(10155),
      Yb = Mb(5298),
      Zb = Mb(5324),
      fb = Mb(5327),
      Ab = Mb(37471);
    const Wb = Object.create(null),
      Jb = Object.create(null),
      Sb = {
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
      Nb = {
        text: bb => `bolder ${bb}px 'Jetbrains Mono'`
      },
      vb = 41,
      Qb = {
        icon: jb.c,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function Gb(bb, wb) {
      return bb.flatMap((bb => {
        var Mb;
        if ("object" === typeof bb && "chatTag" in bb) return [bb];
        if (ib(bb)) return [bb];
        if ((0, pb.xb)(bb)) return [{
          str: ""
        }];
        if ((0, pb.tb)(bb)) {
          const Mb = (0, cb.c)(bb.action);
          if (Mb) {
            var Vb;
            const eb = bb.style;
            return [{
              icon: (0, cb.e)(Mb),
              style: {
                fontSize: null !== (Vb = null === eb || void 0 === eb ? void 0 : eb.fontSize) && void 0 !== Vb ? Vb : `${wb}px`,
                opacity: null === eb || void 0 === eb ? void 0 : eb.opacity
              }
            }]
          }
          const eb = (0, Rb.o)(bb.action, Db.c.get("isTouchScreen")),
            Hb = (0, Rb.n)(bb.action);
          null === eb && null === Hb && console.warn(`No key binding found for action: ${bb.action}`), bb = {
            str: null !== eb && void 0 !== eb ? eb : (0, Rb.m)(Hb),
            style: bb.style
          }
        }
        let gb;
        return gb = "string" !== typeof bb && "str" in bb ? bb : {
            str: bb
          }, null !== (Mb = gb.style) && void 0 !== Mb && Mb.fontSize ? gb.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : gb.style ? gb.style.fontSize = `${wb}px` : gb.style = {
            fontSize: `${wb}px`
          },
          function(bb) {
            if ("object" !== typeof bb.str || !("translationKey" in bb.str)) return [bb];
            const wb = Hb.g.get().getCurrentLanguageCode(),
              Mb = (0, eb.n)(bb.str.params, xb.d.shown),
              pb = (0, eb.t)(wb, bb.str.translationKey, Mb);
            if (pb.every((bb => "string" === typeof bb))) return [bb];
            return pb.map((wb => "string" === typeof wb ? {
              str: wb,
              style: bb.style
            } : {
              icon: wb.icon,
              style: {
                fontSize: bb.style.fontSize,
                opacity: bb.style.opacity
              }
            }))
          }(gb)
      }))
    }

    function qb(bb) {
      const wb = Object.keys(bb).length;
      return {
        width: Sb.EFFECT_ICON_SIZE * wb,
        height: wb > 0 ? Sb.EFFECT_ICON_SIZE : 0
      }
    }

    function ab(bb) {
      return bb && void 0 !== bb.str
    }

    function ib(bb) {
      return bb && "object" === typeof bb && "icon" in bb && !("mainRGB" in bb)
    }

    function ub(bb) {
      return bb && "object" === typeof bb && "mainRGB" in bb
    }

    function db(bb) {
      var wb, Mb;
      const eb = null !== (wb = ab(bb) ? null === (Mb = bb.style) || void 0 === Mb ? void 0 : Mb.fontSize : void 0) && void 0 !== wb ? wb : `${Sb.DEFAULT_FONT_SIZE}px`;
      return Nb.text(Number(eb.replace("px", "")))
    }

    function Pb(bb) {
      var wb;
      const Mb = null !== (wb = Object.hasOwn(Ab.d, bb) ? Ab.d[bb] : null) && void 0 !== wb ? wb : (0, Vb.e)(bb, (0, Vb.m)(bb));
      return Mb || console.warn(`Unknown rank icon "${bb}" \u2014 not in the bundled Font Awesome subset.`), Mb
    }

    function nb(bb) {
      return ub(bb) ? "" : yb(bb)
    }

    function yb(bb) {
      if (!ab(bb)) return "";
      if ("string" === typeof bb.str) return bb.str;
      if ("translationKey" in bb.str) {
        const wb = Hb.g.get().getCurrentLanguageCode(),
          Mb = (0, eb.n)(bb.str.params, xb.d.shown);
        return (0, eb.x)(wb, bb.str.translationKey, Mb)
      }
      return "entityName" in bb.str ? (0, Xb.c)(bb.str.entityName, xb.d.shown) : ""
    }

    function ob(bb, wb) {
      if ((0, zb.K)(bb) || 0 === bb.length) return {
        width: 0,
        height: 0,
        sizeCache: []
      };
      let Mb = 0;
      for (const Vb of bb) {
        const bb = Lw(Vb);
        Mb = Math.max(Mb, bb)
      }
      const eb = Mb + Sb.VERTICAL_PADDING,
        Hb = [];
      let pb = 0;
      pb += bw(void 0, bb[0]);
      for (let Vb = 0; Vb < bb.length; Vb++) {
        const Mb = bb[Vb],
          eb = {
            x: pb,
            width: 0
          };
        pb += Tb(Mb, wb), pb += bw(Mb, bb[Vb + 1]), eb.width = pb - eb.x, Hb.push(eb)
      }
      return {
        width: pb,
        height: eb,
        sizeCache: Hb
      }
    }

    function Tb(bb, wb) {
      if (ib(bb)) return Lw(bb);
      if (ub(bb)) return function(bb) {
        const wb = Pb(bb);
        if (!wb) return vb;
        const [Mb, eb] = wb.icon;
        return vb * (Mb / eb)
      }(bb.icon) + Sb.HORIZONTAL_PADDING;
      const Mb = db(bb);
      return function(bb, wb, Mb) {
        return Mb.font = wb, Mb.measureText(bb).width
      }(yb(bb), Mb, wb)
    }

    function kb(bb) {
      return ab(bb) || ib(bb)
    }

    function bw(bb, wb) {
      const Mb = kb(bb),
        eb = kb(wb);
      return void 0 === bb && !eb || !Mb && void 0 === wb ? 0 : Mb !== eb ? .5 * Sb.HORIZONTAL_PADDING : 0
    }
    let ww;

    function Mw() {
      return ww ??= document.createElement("canvas").getContext("2d"), ww
    }
    const ew = () => 0;

    function Hw(bb, wb, Mb, eb, Hb) {
      let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ew;
      wb += bw(void 0, bb[0]);
      for (let Vb = 0; Vb < bb.length; Vb++) {
        const gb = bb[Vb],
          lb = pw(gb, wb, Mb, eb, Hb, void 0, pb);
        wb += 0 === lb ? 0 : lb + bw(gb, bb[Vb + 1])
      }
    }

    function pw(bb, wb, Mb, eb, Hb, Vb) {
      var Ob;
      let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ew;
      if (ib(bb)) {
        const eb = Lw(bb);
        return function(bb, wb, Mb, eb, Hb) {
          var pb;
          let Vb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ew;
          const Ob = (0, Ib.h)(Hb);
          Mb += Sb.VERTICAL_PADDING / 2;
          const Ub = Vb(),
            tb = (0, cb.j)(bb.icon),
            Cb = bb => {
              if (Ub === Vb())
                if (Ob.imageSmoothingEnabled = tb, tb && bb.width > bb.height) {
                  const Hb = eb * bb.height / bb.width;
                  Ob.drawImage(bb, wb, Mb + (eb - Hb) / 2, eb, Hb)
                } else Ob.drawImage(bb, wb, Mb, eb, eb)
            };
          if (Jb[bb.icon]) return void Cb(Jb[bb.icon]);
          if (Wb[bb.icon]) {
            const wb = Wb[bb.icon];
            if (wb.complete) return void Cb(wb)
          }
          const Eb = (0, Yb.h)(bb.icon, eb);
          if (Eb) return void Cb(Eb);
          const Fb = function(bb) {
              const wb = (0, cb.i)(bb);
              if (null !== wb) return {
                url: wb,
                type: "padGlyph"
              };
              if (gb.d.includes(bb)) return {
                url: rb.d.getTexture(bb, Kb.f.ICON).url,
                type: "ingameIcon"
              };
              {
                var Mb;
                const wb = null === (Mb = Lb.j.itemsClient[bb]) || void 0 === Mb ? void 0 : Mb.type;
                return lw.includes(wb) ? (console.error(new Error(`Invalid icon type ${wb} is not supported in nametags`).stack), {
                  url: "",
                  type: ""
                }) : (0, Zb.d)(wb) ? {
                  url: "",
                  type: wb
                } : "GrayscaleArmour" === wb || lb.b[bb] ? {
                  url: (0, fb.h)(bb),
                  type: wb,
                  tint: (0, lb.c)(bb)
                } : {
                  url: (0, fb.h)(bb),
                  type: wb
                }
              }
            }(bb.icon),
            Bb = Fb.tint;
          let mb = Fb.url;
          if ((0, Zb.d)(null === (pb = Lb.j.itemsClient[bb.icon]) || void 0 === pb ? void 0 : pb.type)) {
            const wb = bb.icon;
            if (!Lb.j.itemsClient[wb].itemTexture) return void(0, Yb.g)(wb, eb).then((bb => {
              Cb(bb), (0, sb.i)(Hb)
            }), (() => {}));
            mb = (0, fb.h)(wb)
          }
          if (!mb) return;
          const hb = new Image;
          tb && (hb.crossOrigin = "anonymous");
          if (hb.src = mb, Bb) return void(hb.onload = () => {
            const wb = function(bb, wb) {
              let [Mb, eb, Hb] = wb;
              const pb = document.createElement("canvas");
              pb.width = bb.naturalWidth, pb.height = bb.naturalHeight;
              const Vb = pb.getContext("2d");
              return Vb.drawImage(bb, 0, 0), Vb.globalCompositeOperation = "multiply", Vb.fillStyle = `rgb(${Mb}, ${eb}, ${Hb})`, Vb.fillRect(0, 0, pb.width, pb.height), Vb.globalCompositeOperation = "destination-in", Vb.drawImage(bb, 0, 0), pb
            }(hb, Bb);
            Jb[bb.icon] = wb, Cb(wb), (0, sb.i)(Hb)
          });
          Wb[bb.icon] = hb, hb.onload = () => {
            Cb(hb), (0, sb.i)(Hb)
          }
        }(bb, wb, Mb, eb, Hb, Ub), eb
      }
      const tb = (0, Ib.h)(Hb);
      if (ub(bb)) {
        const Hb = null !== Vb && void 0 !== Vb ? Vb : Tb(bb, tb);
        return function(bb, wb, Mb, eb, Hb, pb) {
          var Vb, gb;
          pb.fillStyle = bb.mainRGB, pb.fillRect(wb, Mb, eb, Hb);
          const lb = Pb(bb.icon);
          if (!lb) return;
          const Lb = (null === (Vb = bb.nameTag) || void 0 === Vb ? void 0 : Vb.iconRGB) || "white",
            Ib = (null === (gb = bb.nameTag) || void 0 === gb ? void 0 : gb.iconShadowRGB) || "black",
            [Ob, Ub, , , tb] = lb.icon,
            Cb = "string" === typeof tb ? tb : tb.join(" "),
            Eb = vb / Ub,
            Fb = wb + (eb - Ob * Eb) / 2,
            Bb = Mb + (Hb - vb) / 2,
            sb = new Path2D(Cb),
            mb = pb;
          for (const hb of [-1, 1])
            for (const bb of [-1, 1]) Vw(mb, sb, Fb + Sb.TEXT_SHADOW_WIDTH * hb, Bb + Sb.TEXT_SHADOW_WIDTH * bb, Eb, Ib);
          Vw(mb, sb, Fb, Bb, Eb, Lb)
        }(bb, wb, Mb, Hb, eb, tb), Hb
      }
      const Cb = yb(bb);
      if (0 === Cb.length) return 0;
      const Eb = db(bb);
      tb.font = Eb;
      const Fb = null !== Vb && void 0 !== Vb ? Vb : Tb(bb, tb),
        Bb = ab(bb) && null !== (Ob = (0, pb._b)(bb.style)) && void 0 !== Ob ? Ob : "white";
      let mb = Mb + eb;
      return mb -= Sb.VERTICAL_PADDING, mb += ab(bb) ? 5 : 0,
        function(bb, wb, Mb, eb, Hb, pb, Vb) {
          let gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Sb.TEXT_SHADOW_WIDTH;
          for (const lb of [-1, 1])
            for (const Hb of [-1, 1]) gw(Vb, bb, wb + gb * lb, Mb + gb * Hb, eb, pb);
          gw(Vb, bb, wb, Mb, eb, Hb)
        }(Cb, wb, mb, Eb, Bb, "black", tb), Fb
    }

    function Vw(bb, wb, Mb, eb, Hb, pb) {
      bb.save(), bb.translate(Mb, eb), bb.scale(Hb, Hb), bb.fillStyle = pb, bb.fill(wb), bb.restore()
    }

    function gw(bb, wb, Mb, eb, Hb, pb) {
      bb.font = Hb, bb.fillStyle = pb, bb.fillText(wb, Mb, eb)
    }
    const lw = ["Gun"];

    function Lw(bb) {
      if (ab(bb) || ib(bb)) {
        var wb, Mb;
        const eb = null !== (wb = null === (Mb = bb.style) || void 0 === Mb ? void 0 : Mb.fontSize) && void 0 !== wb ? wb : `${Sb.DEFAULT_FONT_SIZE}px`;
        return Number(eb.replace("px", "")) || Sb.DEFAULT_FONT_SIZE
      }
      return Sb.DEFAULT_FONT_SIZE
    }

    function Iw(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        pb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Vb = bb.FO.RJ(),
        gb = (0, sb.d)(bb, `${Mb}Tex`, eb, Hb, {
          mipped: Ob.j.nearestLinearMipLinear,
          unmipped: Ob.j.nearestLinearMipNearest
        }),
        lb = (0, Ub.q)(bb.FO, Mb, (0, tb.j)({
          width: 1,
          height: 1
        }));
      lb.metadata = new bb.FO.vE, lb.metadata[Cb.z] = !0, lb.billboardMode = Eb.c.BILLBOARDMODE_ALL, lb.renderingGroupId = Fb.e;
      const Lb = bb.pR.add([0, 0, 0], 1, 1, lb, [0, 0, 0]);
      let Ib;
      bb.pR.qS(Lb, bb.pR.names.iK, {
        OC: wb
      });
      const {
        mirror: zb
      } = (0, mb.d)({
        name: `${Mb}Mat`,
        JE: Vb,
        sets: {
          specularColor: [0, 0, 0],
          ambientColor: [1.3, 1.3, 1.3],
          emissiveColor: [1, 1, 1],
          ...(0, sb.h)(gb)
        },
        features: wb => {
          (0, sb.b)(wb, "planes"), Ib = (0, hb.b)(wb, bb.FO, pb ? {
            x: 1,
            y: 1,
            z: 1,
            w: 1
          } : void 0)
        },
        unrendered: !0,
        freeze: !0
      });
      return lb.material = zb, pb ? bb.pR.ZMb(Lb).Alb = !1 : (0, Bb.f)(lb), lb.vJ.add((() => {
        zb.dispose(!1, !0)
      })), {
        planeEId: Lb,
        plane: lb,
        texture: gb,
        lightState: Ib
      }
    }

    function Ow(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        eb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Hb = (0, Fb.m)(wb, Mb, eb);
      return bb.renderingGroupId = Hb ? Fb.e : Fb.k, Hb
    }
  },
  39976: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      d: () => Vb,
      h: () => lb,
      i: () => gb
    });
    var eb = Mb(38473),
      Hb = Mb(38449),
      pb = Mb(39980);

    function Vb(bb, wb, Mb, Hb, pb) {
      const Vb = function(bb) {
          return !bb.FO.engine.needPOTTextures
        }(bb),
        gb = Vb ? pb.mipped : pb.unmipped;
      return (0, eb.k)(bb.FO.RJ(), wb, {
        width: Mb,
        height: Hb,
        mipmaps: Vb,
        samplingMode: gb,
        hasAlpha: !0
      })
    }

    function gb(bb) {
      (0, eb.W)(bb, !0, !bb.sampler.noMipmap)
    }

    function lb(bb) {
      return {
        diffuseTexture: bb,
        useAlphaFromDiffuseTexture: !0,
        transparencyMode: Hb.s.alphaTestAndBlend,
        alphaCutOff: .05,
        alphaMode: Hb.b.premultiplied,
        forceDepthWrite: !0
      }
    }

    function Lb(bb, wb) {
      bb.diffuseTexture.sampler.noMipmap || (0, Hb.t)(bb, pb.d, {
        lodBias: pb.c[wb]
      })
    }
  },
  40052: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return "object" === typeof bb && null !== bb ? Object.assign(bb, {
        startStep: wb
      }) : bb
    }

    function Hb(bb) {
      return "object" === typeof bb && null !== bb && "startStep" in bb ? bb.startStep : null
    }
    Mb.d(wb, {
      c: () => Hb,
      f: () => eb
    })
  },
  40110: (bb, wb, Mb) => {
    var eb = {
      "./cape_cow_cream.png": 28933,
      "./cape_cow_normal.png": 28936,
      "./cape_creator_level1.png": 28940,
      "./cape_creator_level2.png": 28942,
      "./cape_creator_level3.png": 28951,
      "./cape_none.png": 28954,
      "./cape_pig.png": 28957,
      "./cape_sheep.png": 28959,
      "./cape_super.png": 28961,
      "./cape_super_inverted.png": 28968,
      "./cape_youtuber.png": 28970
    };

    function Hb(bb) {
      var wb = pb(bb);
      return Mb(wb)
    }

    function pb(bb) {
      if (!Mb.o(eb, bb)) {
        var wb = new Error("Cannot find module '" + bb + "'");
        throw wb.code = "MODULE_NOT_FOUND", wb
      }
      return eb[bb]
    }
    Hb.keys = function() {
      return Object.keys(eb)
    }, Hb.resolve = pb, bb.exports = Hb, Hb.id = 40110
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);