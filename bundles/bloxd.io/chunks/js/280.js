export const id = 280;
export const ids = [280];
export const modules = {
  40728: (rr, Sr, Qr) => {
    function Zr(rr) {
      return void 0 === rr ? void 0 : [rr[0], rr[1], rr[2]]
    }

    function Wr(rr) {
      const Sr = rr.particles;
      return {
        opts: {
          texture: Sr.texture,
          sx: Sr.sx,
          minLifeTime: Sr.minLifeTime,
          maxLifeTime: Sr.maxLifeTime,
          minSize: Sr.minSize,
          maxSize: Sr.maxSize,
          minEmitPower: Sr.minEmitPower,
          maxEmitPower: Sr.maxEmitPower,
          emitRate: Sr.emitRate,
          gravity: Zr(Sr.gravity),
          dir1: Zr(Sr.dir1),
          dir2: Zr(Sr.dir2),
          colorGradients: Sr.colorGradients,
          blendMode: Sr.blendMode
        },
        half: [Sr.width / 2, Sr.height / 2, Sr.depth / 2]
      }
    }
    Qr.d(Sr, {
      e: () => Wr
    })
  },
  40699: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      h: () => Er,
      i: () => fr,
      l: () => jr
    });
    var Zr = Qr(215);
    const Wr = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      ar = "PetRoot";
    let jr = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Ir = Wr;
    new Map, new Map;

    function fr(rr) {
      var Sr;
      return null !== (Sr = (0, Zr.b)(jr, rr)) && void 0 !== Sr ? Sr : null
    }

    function Er(rr) {
      var Sr;
      return null !== (Sr = (0, Zr.b)(Ir, rr)) && void 0 !== Sr ? Sr : null
    }
  },
  40733: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      e: () => Wr,
      f: () => ar
    });
    class Zr {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Lh = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(rr) {
        var Sr;
        const {
          feet: Qr,
          heading: Zr,
          tuning: jr
        } = rr, Ir = Math.min(Math.max(rr.dt, 0), .1), {
          pose: fr,
          Lh: Er,
          target: pr
        } = this;
        if (this.started && Ir > 0) {
          const rr = Math.hypot(Qr[0] - this.lastFeet[0], Qr[1] - this.lastFeet[1], Qr[2] - this.lastFeet[2]);
          this.speed += (rr / Ir - this.speed) * Math.min(Ir / .15, 1)
        }
        this.lastFeet[0] = Qr[0], this.lastFeet[1] = Qr[1], this.lastFeet[2] = Qr[2], this.stillS = this.speed > .3 ? 0 : this.stillS + Ir;
        const xr = this.stillS >= .6 ? "perched" : "flying";
        "flying" === xr && "perched" === fr.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += Ir, fr.mode = xr;
        const mr = Math.sin(Zr),
          Nr = Math.cos(Zr);
        "perched" === xr ? (ar(pr, Qr, jr.perchOffset, mr, Nr), pr[1] += rr.headTopY - Qr[1]) : (ar(pr, Qr, jr.followOffset, mr, Nr), pr[1] += Wr(jr, rr.timeS));
        const {
          pos: Ur
        } = fr, tr = Math.hypot(pr[0] - Ur[0], pr[1] - Ur[1], pr[2] - Ur[2]);
        if (!this.started || tr > 8 || "perched" === xr && (this.perchLocked || tr < .05)) this.perchLocked = this.started && "perched" === xr, Ur[0] = pr[0], Ur[1] = pr[1], Ur[2] = pr[2], Er[0] = Er[1] = Er[2] = 0;
        else {
          const rr = jr.followStiffness;
          for (let Sr = 0; Sr < 3; Sr++) Er[Sr] += (rr * rr * (pr[Sr] - Ur[Sr]) - 2 * rr * Er[Sr]) * Ir, Ur[Sr] += Er[Sr] * Ir
        }
        const hr = Zr + jr.yawOffset;
        var zr;
        return this.started ? fr.yaw += ((zr = hr - fr.yaw) - 2 * Math.PI * Math.round(zr / (2 * Math.PI))) * Math.min(8 * Ir, 1) : fr.yaw = hr, this.started = !0, fr.seated = "perched" === xr && this.perchLocked, fr.clip = null === (Sr = jr.clips) || void 0 === Sr ? void 0 : Sr[this.eQ(xr)], fr
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      eQ(rr) {
        return "perched" === rr ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function Wr(rr, Sr) {
      return rr.bobAmplitude * Math.sin(2 * Math.PI * rr.bobHz * Sr)
    }

    function ar(rr, Sr, Qr, Zr, Wr) {
      const [ar, jr, Ir] = Qr;
      rr[0] = Sr[0] + ar * Wr + Ir * Zr, rr[1] = Sr[1] + jr, rr[2] = Sr[2] - ar * Zr + Ir * Wr
    }
  },
  40701: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(38555),
      Wr = Qr(39365);

    function ar(rr, Sr) {
      var Qr;
      rr.blendMode = Sr.blendMode, rr.minLifeTime = Sr.minLifeTime, rr.maxLifeTime = Sr.maxLifeTime, rr.minSize = Sr.minSize, rr.maxSize = Sr.maxSize, rr.minEmitPower = Sr.minEmitPower, rr.maxEmitPower = Sr.maxEmitPower;
      const ar = null !== (Qr = Sr.gravity) && void 0 !== Qr ? Qr : [0, 0, 0];
      rr.gravity = new Zr.kU(ar[0], ar[1], ar[2]);
      for (const Zr of Sr.colorGradients) rr.addColorGradient(Zr.timeFraction, (0, Wr.i)(Zr.minColor), Zr.maxColor ? (0, Wr.i)(Zr.maxColor) : void 0)
    }
  },
  40313: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => er,
      g: () => Br,
      i: () => yr,
      m: () => vr,
      p: () => Or,
      s: () => nr
    });
    var Zr = Qr(360),
      Wr = Qr(40327),
      ar = Qr(3879),
      jr = Qr(3884),
      Ir = Qr(40317),
      fr = Qr(40320),
      Er = Qr(26),
      pr = Qr(120),
      xr = Qr(3995),
      mr = Qr(109),
      Nr = Qr(135),
      Ur = Qr(43),
      tr = Qr(335),
      hr = Qr(4832),
      zr = Qr(127);
    const Yr = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function nr(rr) {
      var Sr;
      const Qr = null !== (Sr = pr.currentUrl.getSearchParam(rr)) && void 0 !== Sr ? Sr : Ur.j.getItem(rr);
      return null === Qr || void 0 === Qr || "" === Qr ? null : "0" !== Qr && "false" !== Qr && !1 !== Qr && 0 !== Qr
    }
    async function er(rr, Sr) {
      (0, ar.H)(null);
      const Qr = (0, jr.p)((0, jr.n)(Sr.useWebGpu, !0));
      (0, mr.setWebGpuRequested)("lite" === Qr.requested && (0, mr.getWebGpuSupported)());
      const Ir = (0, jr.i)(Qr.source);
      null !== Ir && console.info(`Renderer: ${Qr.requested} from ${Ir}`), null !== Qr.fallbackReason && console.warn(`Renderer: ${Qr.fallbackReason}`);
      let pr = Qr.fallbackReason;
      if ("webgl2" !== Qr.choice) {
        const Ir = await async function(rr, Sr, Qr, jr) {
          const Ir = await (0, mr.probeWebGpuAdapter)();
          if ("usable" !== Ir) return (0, mr.setWebGpuFallbackReason)(Ir), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (Qr && !0 !== Ur.j.getItem(Zr.mc)) {
            if (!0 === Ur.j.getItem(zr.F)) return (0, mr.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), zr.b;
            if (await (0, tr.p)(), (0, tr.i)()) return (0, mr.setWebGpuFallbackReason)("few_wasm_memories"), console.info("This tab fits too few wasm memories for WebGPU, rendering with WebGL."), tr.e
          }
          let pr = "load_failed";
          try {
            const {
              create: Qr
            } = await (0, ar.t)(jr).load();
            pr = "start_failed";
            const Zr = Er.c.antiAliasingOnWebGpuAdapter((0, Nr.m)()),
              Wr = (0, fr.i)(rr),
              Ir = (0, fr.e)(Wr, {
                size: rr => (0, xr.l)(Wr, rr)
              });
            return await Qr(rr, {
              aZr: Zr,
              sceneDepth: Sr.sceneDepth,
              sunShadow: Sr.sunShadow,
              bufferSize: Ir
            })
          } catch (hr) {
            const rr = (0, Wr.e)(hr);
            (0, mr.setWebGpuFallbackReason)(rr ? Yr[rr] : pr);
            const Sr = null === hr || void 0 === hr ? void 0 : hr.fallbackReason;
            return "string" === typeof Sr ? (console.warn(`Lite could not start, falling back to WebGL: ${String(hr)}`), Sr) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", hr), "it failed to start (see the console)")
          }
        }(rr, Sr, "setting" === Qr.source, Qr.choice);
        if ("lite" === Qr.choice && Ur.j.setItem(zr.s, "string" === typeof Ir), "string" !== typeof Ir) return Er.c.followGameGpu((0, Nr.m)()), (0, mr.setWebGpuFallbackReason)("none"), (0, jr.s)(Qr), (0, ar.H)(Ir), {
          lite: Ir
        };
        pr = (0, jr.e)(Qr.choice, [Ir]), rr.replaceWith(rr.cloneNode(!1))
      } else "lite" === Qr.requested ? (0, mr.setWebGpuFallbackReason)("load_failed") : "default" === Qr.source && Sr.webGpuDefaultOffReason ? (0, mr.setWebGpuFallbackReason)(Sr.webGpuDefaultOffReason) : (0, mr.setWebGpuFallbackReason)("not_requested");
      return (0, jr.s)({
        ...Qr,
        choice: "webgl2",
        fallbackReason: pr
      }), Er.c.followGameGpu(null), {
        lite: null
      }
    }

    function Kr() {
      return Promise.all([Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(299), Qr.e(293), Qr.e(294), Qr.e(278), Qr.e(0)]).then((() => Qr(54088)))
    }
    async function yr() {
      return (await Kr()).createSceneParticleSystem
    }
    async function Br() {
      Promise.all([Qr.e(290), Qr.e(622)]).then((() => Qr(54157))).then((rr => {
        rr.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [rr, Sr] = await Promise.all([Kr(), Promise.all([Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(299), Qr.e(293), Qr.e(294), Qr.e(278), Qr.e(0)]).then((() => Qr(54165))), Promise.all([Qr.e(290), Qr.e(291), Qr.e(288), Qr.e(298), Qr.e(292), Qr.e(297), Qr.e(295), Qr.e(287), Qr.e(300), Qr.e(312), Qr.e(299), Qr.e(293), Qr.e(294), Qr.e(278), Qr.e(0)]).then((() => Qr(42986)))]);
      return (0, Ir.c)(Sr.SkyMaterial), rr.default
    }

    function Tr(rr) {
      return "lite" === (0, jr.p)((0, jr.n)(rr, !1)).choice && (0, mr.getWebGpuSupported)() && !Ur.j.getItem(zr.s)
    }

    function vr(rr) {
      Tr(rr) || Br().catch((rr => {
        console.warn("Failed to prefetch noa's Babylon backend.", rr)
      }))
    }

    function Or(rr) {
      (0, hr.g)((() => {
        Tr(rr) ? (0, ar.q)().load().catch((rr => {
          console.warn("Failed to prefetch the Lite renderer.", rr)
        })) : vr(rr)
      }))
    }
  },
  40320: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      i: () => jr
    });
    var Zr = Qr(26),
      Wr = Qr(35399),
      ar = Qr(3995);

    function jr(rr) {
      var Sr;
      return null !== (Sr = rr.parentElement) && void 0 !== Sr ? Sr : rr
    }

    function Ir(rr, Sr) {
      if (rr.clientWidth <= 0 || rr.clientHeight <= 0 || Wr.d.isHeld()) return null;
      const Qr = (0, ar.m)(),
        [jr, Ir] = Sr.size(Qr);
      return (0, ar.o)(jr, Ir, Qr, Zr.c.get("clientEscMenuOptions").pixelScale)
    }
  },
  40445: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr,
      f: () => Wr
    });
    const Zr = 2.2;

    function Wr(rr) {
      let Sr = 0;
      return rr > 5 && (Sr = .12 * Math.min(rr - 5, 15), rr > 20 && (Sr += .01 * (rr - 20))), 1.4 + Sr
    }
  },
  40436: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => jr,
      d: () => Ir,
      h: () => ar,
      l: () => Nr,
      m: () => fr,
      p: () => pr,
      s: () => Er,
      t: () => mr
    });
    var Zr = Qr(38555),
      Wr = Qr(38849);
    const ar = 0,
      jr = 1,
      Ir = 18;

    function fr(rr) {
      return !1 !== rr && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
    }

    function Er(rr, Sr) {
      return null !== rr && void 0 !== rr ? rr : Sr
    }

    function pr(rr, Sr, Qr) {
      return Sr && !Qr ? Math.max(1, rr / Ir) : 1
    }
    const xr = new WeakMap;

    function mr(rr, Sr, Qr, Wr) {
      const ar = rr.YB.rQr(Qr),
        jr = ar.offset;
      jr[0] = jr[1] = jr[2] = 0;
      const Ir = rr.YB.rQr(Sr);
      if (Wr || !Ir || !ar.mesh.isEnabled() || !ar.mesh.isVisible) return 1;
      const fr = rr.YB.gJ(Qr).lD,
        Er = rr.camera.PD(),
        pr = rr.camera.W4(),
        mr = Er[0] - fr[0],
        Nr = Er[1] - fr[1],
        Ur = Er[2] - fr[2];
      if (-(pr[0] * mr + pr[1] * Nr + pr[2] * Ur) <= 0 || Math.hypot(mr, Nr, Ur) < .1) return 1;
      const tr = rr.Ox.eC().getFrameId();
      let hr = xr.get(Ir);
      if (hr || (hr = {
          frame: -1,
          minimum: new Zr.kU,
          maximum: new Zr.kU,
          valid: !1
        }, xr.set(Ir, hr)), hr.frame !== tr)
        if (hr.frame = tr, Ir.tZr) hr.valid = rr.Ox.bC.getObjectBounds(Ir.JC, hr.minimum, hr.maximum);
        else {
          hr.minimum.Srr(1 / 0), hr.maximum.Srr(-1 / 0), hr.valid = !1;
          const rr = [Ir.mesh, ...Ir.mesh.getChildMeshes(!1)];
          for (const Sr of rr) {
            if (!("getTotalVertices" in Sr) || !Sr.isEnabled() || !Sr.isVisible || !Sr.getTotalVertices()) continue;
            Sr.computeWorldMatrix();
            const rr = Sr.mG().boundingBox;
            hr.minimum.minimizeInPlace(rr.minimumWorld), hr.maximum.maximizeInPlace(rr.maximumWorld), hr.valid = !0
          }
        } if (!hr.valid) return 1;
      const zr = function(rr, Sr, Qr, Zr, Wr) {
        const ar = Sr[0] - rr[0],
          jr = Sr[1] - rr[1],
          Ir = Sr[2] - rr[2],
          fr = Math.hypot(ar, jr, Ir),
          Er = -(Wr[0] * ar + Wr[1] * jr + Wr[2] * Ir);
        if (fr < .1 || Er <= 0) return 0;
        const pr = (Math.abs(Wr[0]) * (Zr.x - Qr.x) + Math.abs(Wr[1]) * (Zr.y - Qr.y) + Math.abs(Wr[2]) * (Zr.z - Qr.z)) / 2,
          xr = -(Wr[0] * ((Qr.x + Zr.x) / 2 - rr[0]) + Wr[1] * ((Qr.y + Zr.y) / 2 - rr[1]) + Wr[2] * ((Qr.z + Zr.z) / 2 - rr[2]));
        return Math.max(0, Math.min((xr + pr + .01) / Er, 2 * pr / Er, 1 - .1 / Er))
      }(fr, Er, hr.minimum, hr.maximum, rr.camera.W4());
      for (let Zr = 0; Zr < 3; Zr++) jr[Zr] = (Er[Zr] - fr[Zr]) * zr;
      return 1 - zr
    }

    function Nr(rr, Sr) {
      const {
        mesh: Qr,
        offset: Zr
      } = rr.YB.rQr(Sr), ar = rr.YB.gJ(Sr).lD, jr = ar[0] + Zr[0], Ir = ar[1] + Zr[1], fr = ar[2] + Zr[2];
      (0, Wr.p)(Qr, jr, Ir, fr)
    }
  },
  40317: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er,
      c: () => Ir,
      e: () => fr
    });
    var Zr = Qr(38845),
      Wr = Qr(38736);
    const ar = new Set;
    let jr = null;

    function Ir(rr) {
      jr = rr
    }

    function fr(rr) {
      if (!jr) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new jr("sky", rr)
    }

    function Er(rr, Sr, Qr) {
      if (!(0, Zr.c)(rr)) return void rr.material.forceCompilation(rr, Sr);
      const jr = () => {
        if (rr.Dv()) return void ar.delete(rr);
        const Zr = (0, Wr.Y)(rr.material);
        if (![null === Zr || void 0 === Zr ? void 0 : Zr.diffuseTexture, null === Zr || void 0 === Zr ? void 0 : Zr.opacityTexture, null === Zr || void 0 === Zr ? void 0 : Zr.emissiveTexture, null === Zr || void 0 === Zr ? void 0 : Zr.reflectionTexture].every((rr => !rr || Qr.prepareTexture(rr)))) return ar.add(rr), void setTimeout(jr, 16);
        ar.delete(rr), Sr()
      };
      jr()
    }
  },
  40434: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      D: () => xS,
      e: () => Ar,
      i: () => Mr,
      j: () => dr,
      m: () => ir,
      n: () => pS,
      o: () => aS,
      q: () => WS,
      s: () => Vr,
      t: () => Jr,
      x: () => wr,
      z: () => QS
    });
    var Zr = Qr(1251),
      Wr = Qr(1304),
      ar = Qr(360),
      jr = Qr(1463),
      Ir = Qr(5223),
      fr = Qr(5249),
      Er = Qr(2383),
      pr = Qr(38762),
      xr = Qr(38754),
      mr = Qr(39402),
      Nr = Qr(39030),
      Ur = Qr(38889),
      tr = Qr(38677),
      hr = Qr(40436),
      zr = Qr(39428),
      Yr = Qr(40255),
      nr = Qr(38723),
      er = Qr(38824),
      Kr = Qr(688),
      yr = Qr(1317),
      Br = Qr(2093),
      Tr = Qr(2179),
      vr = Qr(4362),
      Or = Qr(4354),
      Lr = Qr(2135),
      lr = Qr(26),
      Xr = Qr(9937),
      Pr = Qr(5195),
      Hr = Qr(5229),
      qr = Qr(5231),
      Rr = Qr(37642);
    const gr = Object.create(null),
      Cr = Object.create(null),
      Mr = {
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
      Gr = {
        text: rr => `bolder ${rr}px 'Jetbrains Mono'`
      },
      kr = 41,
      Ar = {
        icon: Tr.b,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function Vr(rr, Sr) {
      return rr.flatMap((rr => {
        var Qr;
        if ("object" === typeof rr && "chatTag" in rr) return [rr];
        if (cr(rr)) return [rr];
        if ((0, ar.xb)(rr)) return [{
          str: ""
        }];
        if ((0, ar.wb)(rr)) {
          const Qr = (0, Xr.d)(rr.action);
          if (Qr) {
            var jr;
            const Zr = rr.style;
            return [{
              icon: (0, Xr.h)(Qr),
              style: {
                fontSize: null !== (jr = null === Zr || void 0 === Zr ? void 0 : Zr.fontSize) && void 0 !== jr ? jr : `${Sr}px`,
                opacity: null === Zr || void 0 === Zr ? void 0 : Zr.opacity
              }
            }]
          }
          const Zr = (0, Lr.o)(rr.action, lr.c.get("isTouchScreen")),
            Wr = (0, Lr.m)(rr.action);
          null === Zr && null === Wr && console.warn(`No key binding found for action: ${rr.action}`), rr = {
            str: null !== Zr && void 0 !== Zr ? Zr : (0, Lr.j)(Wr),
            style: rr.style
          }
        }
        let Ir;
        return Ir = "string" !== typeof rr && "str" in rr ? rr : {
            str: rr
          }, null !== (Qr = Ir.style) && void 0 !== Qr && Qr.fontSize ? Ir.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : Ir.style ? Ir.style.fontSize = `${Sr}px` : Ir.style = {
            fontSize: `${Sr}px`
          },
          function(rr) {
            if ("object" !== typeof rr.str || !("translationKey" in rr.str)) return [rr];
            const Sr = Wr.f.get().getCurrentLanguageCode(),
              Qr = (0, Zr.p)(rr.str.params, Br.b.shown),
              ar = (0, Zr.v)(Sr, rr.str.translationKey, Qr);
            if (ar.every((rr => "string" === typeof rr))) return [rr];
            return ar.map((Sr => "string" === typeof Sr ? {
              str: Sr,
              style: rr.style
            } : {
              icon: Sr.icon,
              style: {
                fontSize: rr.style.fontSize,
                opacity: rr.style.opacity
              }
            }))
          }(Ir)
      }))
    }

    function ir(rr) {
      const Sr = Object.keys(rr).length;
      return {
        width: Mr.EFFECT_ICON_SIZE * Sr,
        height: Sr > 0 ? Mr.EFFECT_ICON_SIZE : 0
      }
    }

    function wr(rr) {
      return rr && void 0 !== rr.str
    }

    function cr(rr) {
      return rr && "object" === typeof rr && "icon" in rr && !("mainRGB" in rr)
    }

    function Fr(rr) {
      return rr && "object" === typeof rr && "mainRGB" in rr
    }

    function or(rr) {
      var Sr, Qr;
      const Zr = null !== (Sr = wr(rr) ? null === (Qr = rr.style) || void 0 === Qr ? void 0 : Qr.fontSize : void 0) && void 0 !== Sr ? Sr : `${Mr.DEFAULT_FONT_SIZE}px`;
      return Gr.text(Number(Zr.replace("px", "")))
    }

    function br(rr) {
      var Sr;
      const Qr = null !== (Sr = Object.hasOwn(Rr.d, rr) ? Rr.d[rr] : null) && void 0 !== Sr ? Sr : (0, jr.e)(rr, (0, jr.m)(rr));
      return Qr || console.warn(`Unknown rank icon "${rr}" \u2014 not in the bundled Font Awesome subset.`), Qr
    }

    function Jr(rr) {
      return Fr(rr) ? "" : Dr(rr)
    }

    function Dr(rr) {
      if (!wr(rr)) return "";
      if ("string" === typeof rr.str) return rr.str;
      if ("translationKey" in rr.str) {
        const Sr = Wr.f.get().getCurrentLanguageCode(),
          Qr = (0, Zr.p)(rr.str.params, Br.b.shown);
        return (0, Zr.z)(Sr, rr.str.translationKey, Qr)
      }
      return "entityName" in rr.str ? (0, yr.c)(rr.str.entityName, Br.b.shown) : ""
    }

    function dr(rr, Sr) {
      if ((0, Kr.L)(rr) || 0 === rr.length) return {
        width: 0,
        height: 0,
        sizeCache: []
      };
      let Qr = 0;
      for (const jr of rr) {
        const rr = ES(jr);
        Qr = Math.max(Qr, rr)
      }
      const Zr = Qr + Mr.VERTICAL_PADDING,
        Wr = [];
      let ar = 0;
      ar += rS(void 0, rr[0]);
      for (let jr = 0; jr < rr.length; jr++) {
        const Qr = rr[jr],
          Zr = {
            x: ar,
            width: 0
          };
        ar += sr(Qr, Sr), ar += rS(Qr, rr[jr + 1]), Zr.width = ar - Zr.x, Wr.push(Zr)
      }
      return {
        width: ar,
        height: Zr,
        sizeCache: Wr
      }
    }

    function sr(rr, Sr) {
      if (cr(rr)) return ES(rr);
      if (Fr(rr)) return function(rr) {
        const Sr = br(rr);
        if (!Sr) return kr;
        const [Qr, Zr] = Sr.icon;
        return kr * (Qr / Zr)
      }(rr.icon) + Mr.HORIZONTAL_PADDING;
      const Qr = or(rr);
      return function(rr, Sr, Qr) {
        return Qr.font = Sr, Qr.measureText(rr).width
      }(Dr(rr), Qr, Sr)
    }

    function ur(rr) {
      return wr(rr) || cr(rr)
    }

    function rS(rr, Sr) {
      const Qr = ur(rr),
        Zr = ur(Sr);
      return void 0 === rr && !Zr || !Qr && void 0 === Sr ? 0 : Qr !== Zr ? .5 * Mr.HORIZONTAL_PADDING : 0
    }
    let SS;

    function QS() {
      return SS ??= document.createElement("canvas").getContext("2d"), SS
    }
    const ZS = () => 0;

    function WS(rr, Sr, Qr, Zr, Wr) {
      let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ZS;
      Sr += rS(void 0, rr[0]);
      for (let jr = 0; jr < rr.length; jr++) {
        const Ir = rr[jr],
          fr = aS(Ir, Sr, Qr, Zr, Wr, void 0, ar);
        Sr += 0 === fr ? 0 : fr + rS(Ir, rr[jr + 1])
      }
    }

    function aS(rr, Sr, Qr, Zr, Wr, jr) {
      var xr;
      let mr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ZS;
      if (cr(rr)) {
        const Zr = ES(rr);
        return function(rr, Sr, Qr, Zr, Wr) {
          var ar;
          let jr = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : ZS;
          const xr = (0, pr.h)(Wr);
          Qr += Mr.VERTICAL_PADDING / 2;
          const mr = jr(),
            Nr = (0, Xr.p)(rr.icon),
            Ur = rr => {
              if (mr === jr())
                if (xr.imageSmoothingEnabled = Nr, Nr && rr.width > rr.height) {
                  const Wr = Zr * rr.height / rr.width;
                  xr.drawImage(rr, Sr, Qr + (Zr - Wr) / 2, Zr, Wr)
                } else xr.drawImage(rr, Sr, Qr, Zr, Zr)
            };
          if (Cr[rr.icon]) return void Ur(Cr[rr.icon]);
          if (gr[rr.icon]) {
            const Sr = gr[rr.icon];
            if (Sr.complete) return void Ur(Sr)
          }
          const tr = (0, Pr.i)(rr.icon, Zr);
          if (tr) return void Ur(tr);
          const hr = function(rr) {
              const Sr = (0, Xr.l)(rr);
              if (null !== Sr) return {
                url: Sr,
                type: "padGlyph"
              };
              if (Ir.b.includes(rr)) return {
                url: Or.d.getTexture(rr, vr.e.ICON).url,
                type: "ingameIcon"
              };
              {
                var Qr;
                const Sr = null === (Qr = Er.h.itemsClient[rr]) || void 0 === Qr ? void 0 : Qr.type;
                return fS.includes(Sr) ? (console.error(new Error(`Invalid icon type ${Sr} is not supported in nametags`).stack), {
                  url: "",
                  type: ""
                }) : (0, Hr.e)(Sr) ? {
                  url: "",
                  type: Sr
                } : "GrayscaleArmour" === Sr || fr.c[rr] ? {
                  url: (0, qr.e)(rr),
                  type: Sr,
                  tint: (0, fr.e)(rr)
                } : {
                  url: (0, qr.e)(rr),
                  type: Sr
                }
              }
            }(rr.icon),
            zr = hr.tint;
          let nr = hr.url;
          if ((0, Hr.e)(null === (ar = Er.h.itemsClient[rr.icon]) || void 0 === ar ? void 0 : ar.type)) {
            const Sr = rr.icon;
            if (!Er.h.itemsClient[Sr].itemTexture) return void(0, Pr.e)(Sr, Zr).then((rr => {
              Ur(rr), (0, Yr.i)(Wr)
            }), (() => {}));
            nr = (0, qr.e)(Sr)
          }
          if (!nr) return;
          const er = new Image;
          Nr && (er.crossOrigin = "anonymous");
          if (er.src = nr, zr) return void(er.onload = () => {
            const Sr = function(rr, Sr) {
              let [Qr, Zr, Wr] = Sr;
              const ar = document.createElement("canvas");
              ar.width = rr.naturalWidth, ar.height = rr.naturalHeight;
              const jr = ar.getContext("2d");
              return jr.drawImage(rr, 0, 0), jr.globalCompositeOperation = "multiply", jr.fillStyle = `rgb(${Qr}, ${Zr}, ${Wr})`, jr.fillRect(0, 0, ar.width, ar.height), jr.globalCompositeOperation = "destination-in", jr.drawImage(rr, 0, 0), ar
            }(er, zr);
            Cr[rr.icon] = Sr, Ur(Sr), (0, Yr.i)(Wr)
          });
          gr[rr.icon] = er, er.onload = () => {
            Ur(er), (0, Yr.i)(Wr)
          }
        }(rr, Sr, Qr, Zr, Wr, mr), Zr
      }
      const Nr = (0, pr.h)(Wr);
      if (Fr(rr)) {
        const Wr = null !== jr && void 0 !== jr ? jr : sr(rr, Nr);
        return function(rr, Sr, Qr, Zr, Wr, ar) {
          var jr, Ir;
          ar.fillStyle = rr.mainRGB, ar.fillRect(Sr, Qr, Zr, Wr);
          const fr = br(rr.icon);
          if (!fr) return;
          const Er = (null === (jr = rr.nameTag) || void 0 === jr ? void 0 : jr.iconRGB) || "white",
            pr = (null === (Ir = rr.nameTag) || void 0 === Ir ? void 0 : Ir.iconShadowRGB) || "black",
            [xr, mr, , , Nr] = fr.icon,
            Ur = "string" === typeof Nr ? Nr : Nr.join(" "),
            tr = kr / mr,
            hr = Sr + (Zr - xr * tr) / 2,
            zr = Qr + (Wr - kr) / 2,
            Yr = new Path2D(Ur),
            nr = ar;
          for (const er of [-1, 1])
            for (const rr of [-1, 1]) jS(nr, Yr, hr + Mr.TEXT_SHADOW_WIDTH * er, zr + Mr.TEXT_SHADOW_WIDTH * rr, tr, pr);
          jS(nr, Yr, hr, zr, tr, Er)
        }(rr, Sr, Qr, Wr, Zr, Nr), Wr
      }
      const Ur = Dr(rr);
      if (0 === Ur.length) return 0;
      const tr = or(rr);
      Nr.font = tr;
      const hr = null !== jr && void 0 !== jr ? jr : sr(rr, Nr),
        zr = wr(rr) && null !== (xr = (0, ar._b)(rr.style)) && void 0 !== xr ? xr : "white";
      let nr = Qr + Zr;
      return nr -= Mr.VERTICAL_PADDING, nr += wr(rr) ? 5 : 0,
        function(rr, Sr, Qr, Zr, Wr, ar, jr) {
          let Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Mr.TEXT_SHADOW_WIDTH;
          for (const fr of [-1, 1])
            for (const Wr of [-1, 1]) IS(jr, rr, Sr + Ir * fr, Qr + Ir * Wr, Zr, ar);
          IS(jr, rr, Sr, Qr, Zr, Wr)
        }(Ur, Sr, nr, tr, zr, "black", Nr), hr
    }

    function jS(rr, Sr, Qr, Zr, Wr, ar) {
      rr.save(), rr.translate(Qr, Zr), rr.scale(Wr, Wr), rr.fillStyle = ar, rr.fill(Sr), rr.restore()
    }

    function IS(rr, Sr, Qr, Zr, Wr, ar) {
      rr.font = Wr, rr.fillStyle = ar, rr.fillText(Sr, Qr, Zr)
    }
    const fS = ["Gun"];

    function ES(rr) {
      if (wr(rr) || cr(rr)) {
        var Sr, Qr;
        const Zr = null !== (Sr = null === (Qr = rr.style) || void 0 === Qr ? void 0 : Qr.fontSize) && void 0 !== Sr ? Sr : `${Mr.DEFAULT_FONT_SIZE}px`;
        return Number(Zr.replace("px", "")) || Mr.DEFAULT_FONT_SIZE
      }
      return Mr.DEFAULT_FONT_SIZE
    }

    function pS(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        ar = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const jr = rr.Ox.eC(),
        Ir = (0, Yr.f)(rr, `${Qr}Tex`, Zr, Wr, {
          mipped: xr.g.nearestLinearMipLinear,
          unmipped: xr.g.nearestLinearMipNearest
        }),
        fr = (0, mr.p)(rr.Ox, Qr, (0, Nr.h)({
          width: 1,
          height: 1
        }));
      fr.metadata = new rr.Ox.rh, fr.metadata[Ur.C] = !0, fr.billboardMode = tr.d.BILLBOARDMODE_ALL, fr.renderingGroupId = hr.c;
      const Er = rr.YB.add([0, 0, 0], 1, 1, fr, [0, 0, 0]);
      let pr;
      rr.YB.gM(Er, rr.YB.names.pB, {
        nU: Sr
      });
      const {
        mirror: Kr
      } = (0, nr.b)({
        name: `${Qr}Mat`,
        Dt: jr,
        sets: {
          specularColor: [0, 0, 0],
          ambientColor: [1.3, 1.3, 1.3],
          emissiveColor: [1, 1, 1],
          ...(0, Yr.h)(Ir)
        },
        features: Sr => {
          (0, Yr.b)(Sr, "planes"), pr = (0, er.d)(Sr, rr.Ox, ar ? {
            x: 1,
            y: 1,
            z: 1,
            w: 1
          } : void 0)
        },
        unrendered: !0,
        freeze: !0
      });
      return fr.material = Kr, ar ? rr.YB.rQr(Er).Tfr = !1 : (0, zr.h)(fr), fr.lC.add((() => {
        Kr.dispose(!1, !0)
      })), {
        planeEId: Er,
        plane: fr,
        texture: Ir,
        lightState: pr
      }
    }

    function xS(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Zr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Wr = (0, hr.m)(Sr, Qr, Zr);
      return rr.renderingGroupId = Wr ? hr.c : hr.h, Wr
    }
  },
  40255: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Er,
      f: () => jr,
      h: () => fr,
      i: () => Ir
    });
    var Zr = Qr(38762),
      Wr = Qr(38736),
      ar = Qr(40263);

    function jr(rr, Sr, Qr, Wr, ar) {
      const jr = function(rr) {
          return !rr.Ox.engine.needPOTTextures
        }(rr),
        Ir = jr ? ar.mipped : ar.unmipped;
      return (0, Zr.k)(rr.Ox.eC(), Sr, {
        width: Qr,
        height: Wr,
        mipmaps: jr,
        samplingMode: Ir,
        hasAlpha: !0
      })
    }

    function Ir(rr) {
      (0, Zr.R)(rr, !0, !rr.sampler.noMipmap)
    }

    function fr(rr) {
      return {
        diffuseTexture: rr,
        useAlphaFromDiffuseTexture: !0,
        transparencyMode: Wr.s.alphaTestAndBlend,
        alphaCutOff: .05,
        alphaMode: Wr.e.premultiplied,
        forceDepthWrite: !0
      }
    }

    function Er(rr, Sr) {
      rr.diffuseTexture.sampler.noMipmap || (0, Wr.t)(rr, ar.h, {
        lodBias: ar.d[Sr]
      })
    }
  },
  40327: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return "object" === typeof rr && null !== rr ? Object.assign(rr, {
        startStep: Sr
      }) : rr
    }

    function Wr(rr) {
      return "object" === typeof rr && null !== rr && "startStep" in rr ? rr.startStep : null
    }
    Qr.d(Sr, {
      e: () => Wr,
      f: () => Zr
    })
  },
  40378: (rr, Sr, Qr) => {
    var Zr = {
      "./cape_cow_cream.png": 29026,
      "./cape_cow_normal.png": 29035,
      "./cape_creator_level1.png": 29043,
      "./cape_creator_level2.png": 29051,
      "./cape_creator_level3.png": 29055,
      "./cape_none.png": 29061,
      "./cape_pig.png": 29065,
      "./cape_sheep.png": 29073,
      "./cape_super.png": 29079,
      "./cape_super_inverted.png": 29087,
      "./cape_youtuber.png": 29089
    };

    function Wr(rr) {
      var Sr = ar(rr);
      return Qr(Sr)
    }

    function ar(rr) {
      if (!Qr.o(Zr, rr)) {
        var Sr = new Error("Cannot find module '" + rr + "'");
        throw Sr.code = "MODULE_NOT_FOUND", Sr
      }
      return Zr[rr]
    }
    Wr.keys = function() {
      return Object.keys(Zr)
    }, Wr.resolve = ar, rr.exports = Wr, Wr.id = 40378
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);