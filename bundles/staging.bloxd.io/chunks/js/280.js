export const id = 280;
export const ids = [280];
export const modules = {
  40756: (dd, Od, md) => {
    function Wd(dd) {
      return void 0 === dd ? void 0 : [dd[0], dd[1], dd[2]]
    }

    function Fd(dd) {
      const Od = dd.particles;
      return {
        opts: {
          texture: Od.texture,
          Mt: Od.Mt,
          minLifeTime: Od.minLifeTime,
          maxLifeTime: Od.maxLifeTime,
          minSize: Od.minSize,
          maxSize: Od.maxSize,
          minEmitPower: Od.minEmitPower,
          maxEmitPower: Od.maxEmitPower,
          emitRate: Od.emitRate,
          gravity: Wd(Od.gravity),
          dir1: Wd(Od.dir1),
          dir2: Wd(Od.dir2),
          colorGradients: Od.colorGradients,
          blendMode: Od.blendMode
        },
        half: [Od.width / 2, Od.height / 2, Od.depth / 2]
      }
    }
    md.d(Od, {
      d: () => Fd
    })
  },
  40721: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      i: () => vd,
      j: () => hd,
      k: () => Xd
    });
    var Wd = md(231);
    const Fd = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      Rd = "PetRoot";
    let Xd = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Kd = Fd;
    new Map, new Map;

    function hd(dd) {
      var Od;
      return null !== (Od = (0, Wd.b)(Xd, dd)) && void 0 !== Od ? Od : null
    }

    function vd(dd) {
      var Od;
      return null !== (Od = (0, Wd.b)(Kd, dd)) && void 0 !== Od ? Od : null
    }
  },
  40760: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      d: () => Fd,
      e: () => Rd
    });
    class Wd {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Gy = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(dd) {
        var Od;
        const {
          feet: md,
          heading: Wd,
          tuning: Xd
        } = dd, Kd = Math.min(Math.max(dd.dt, 0), .1), {
          pose: hd,
          Gy: vd,
          target: Qd
        } = this;
        if (this.started && Kd > 0) {
          const dd = Math.hypot(md[0] - this.lastFeet[0], md[1] - this.lastFeet[1], md[2] - this.lastFeet[2]);
          this.speed += (dd / Kd - this.speed) * Math.min(Kd / .15, 1)
        }
        this.lastFeet[0] = md[0], this.lastFeet[1] = md[1], this.lastFeet[2] = md[2], this.stillS = this.speed > .3 ? 0 : this.stillS + Kd;
        const td = this.stillS >= .6 ? "perched" : "flying";
        "flying" === td && "perched" === hd.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += Kd, hd.mode = td;
        const od = Math.sin(Wd),
          Nd = Math.cos(Wd);
        "perched" === td ? (Rd(Qd, md, Xd.perchOffset, od, Nd), Qd[1] += dd.headTopY - md[1]) : (Rd(Qd, md, Xd.followOffset, od, Nd), Qd[1] += Fd(Xd, dd.timeS));
        const {
          pos: qd
        } = hd, Hd = Math.hypot(Qd[0] - qd[0], Qd[1] - qd[1], Qd[2] - qd[2]);
        if (!this.started || Hd > 8 || "perched" === td && (this.perchLocked || Hd < .05)) this.perchLocked = this.started && "perched" === td, qd[0] = Qd[0], qd[1] = Qd[1], qd[2] = Qd[2], vd[0] = vd[1] = vd[2] = 0;
        else {
          const dd = Xd.followStiffness;
          for (let Od = 0; Od < 3; Od++) vd[Od] += (dd * dd * (Qd[Od] - qd[Od]) - 2 * dd * vd[Od]) * Kd, qd[Od] += vd[Od] * Kd
        }
        const yd = Wd + Xd.yawOffset;
        var bd;
        return this.started ? hd.yaw += ((bd = yd - hd.yaw) - 2 * Math.PI * Math.round(bd / (2 * Math.PI))) * Math.min(8 * Kd, 1) : hd.yaw = yd, this.started = !0, hd.seated = "perched" === td && this.perchLocked, hd.clip = null === (Od = Xd.clips) || void 0 === Od ? void 0 : Od[this.Tm(td)], hd
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      Tm(dd) {
        return "perched" === dd ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function Fd(dd, Od) {
      return dd.bobAmplitude * Math.sin(2 * Math.PI * dd.bobHz * Od)
    }

    function Rd(dd, Od, md, Wd, Fd) {
      const [Rd, Xd, Kd] = md;
      dd[0] = Od[0] + Rd * Fd + Kd * Wd, dd[1] = Od[1] + Xd, dd[2] = Od[2] - Rd * Wd + Kd * Fd
    }
  },
  40729: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd
    });
    var Wd = md(38627),
      Fd = md(39409);

    function Rd(dd, Od) {
      var md;
      dd.blendMode = Od.blendMode, dd.minLifeTime = Od.minLifeTime, dd.maxLifeTime = Od.maxLifeTime, dd.minSize = Od.minSize, dd.maxSize = Od.maxSize, dd.minEmitPower = Od.minEmitPower, dd.maxEmitPower = Od.maxEmitPower;
      const Rd = null !== (md = Od.gravity) && void 0 !== md ? md : [0, 0, 0];
      dd.gravity = new Wd.Cq(Rd[0], Rd[1], Rd[2]);
      for (const Wd of Od.colorGradients) dd.addColorGradient(Wd.timeFraction, (0, Fd.h)(Wd.minColor), Wd.maxColor ? (0, Fd.h)(Wd.maxColor) : void 0)
    }
  },
  40319: (dd, Od, md) => {
    md.d(Od, {
      e: () => Yd,
      i: () => Ed,
      l: () => wd,
      p: () => Ud,
      r: () => xd,
      u: () => pd
    });
    var Wd = md(387),
      Fd = md(40327),
      Rd = md(3864),
      Xd = md(3868),
      Kd = md(40323),
      hd = md(40325),
      vd = md(29),
      Qd = md(118),
      td = md(3973),
      od = md(107),
      Nd = md(145),
      qd = md(46),
      Hd = md(364),
      yd = md(4820),
      bd = md(132);
    const Td = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function pd(dd) {
      var Od;
      const md = null !== (Od = Qd.currentUrl.getSearchParam(dd)) && void 0 !== Od ? Od : qd.k.getItem(dd);
      return null === md || void 0 === md || "" === md ? null : "0" !== md && "false" !== md && !1 !== md && 0 !== md
    }
    async function Yd(dd, Od) {
      (0, Rd.x)(null);
      const md = (0, Xd.q)((0, Xd.m)(Od.useWebGpu, !0));
      (0, od.setWebGpuRequested)("lite" === md.requested && (0, od.getWebGpuSupported)());
      const Kd = (0, Xd.i)(md.source);
      null !== Kd && console.info(`Renderer: ${md.requested} from ${Kd}`), null !== md.fallbackReason && console.warn(`Renderer: ${md.fallbackReason}`);
      let Qd = md.fallbackReason;
      if ("webgl2" !== md.choice) {
        const Kd = await async function(dd, Od, md, Xd) {
          const Kd = await (0, od.probeWebGpuAdapter)();
          if ("usable" !== Kd) return (0, od.setWebGpuFallbackReason)(Kd), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (md && !0 !== qd.k.getItem(Wd.kc)) {
            if (!0 === qd.k.getItem(bd.J)) return (0, od.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), bd.b;
            if (await (0, Hd.p)(), (0, Hd.h)()) return (0, od.setWebGpuFallbackReason)("few_wasm_memories"), console.info("This tab fits too few wasm memories for WebGPU, rendering with WebGL."), Hd.e
          }
          let Qd = "load_failed";
          try {
            const {
              create: md
            } = await (0, Rd.p)(Xd).load();
            Qd = "start_failed";
            const Wd = vd.e.antiAliasingOnWebGpuAdapter((0, Nd.l)()),
              Fd = (0, hd.f)(dd),
              Kd = (0, hd.b)(Fd, {
                size: dd => (0, td.l)(Fd, dd)
              });
            return await md(dd, {
              zWd: Wd,
              sceneDepth: Od.sceneDepth,
              sunShadow: Od.sunShadow,
              bufferSize: Kd
            })
          } catch (yd) {
            const dd = (0, Fd.b)(yd);
            (0, od.setWebGpuFallbackReason)(dd ? Td[dd] : Qd);
            const Od = null === yd || void 0 === yd ? void 0 : yd.fallbackReason;
            return "string" === typeof Od ? (console.warn(`Lite could not start, falling back to WebGL: ${String(yd)}`), Od) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", yd), "it failed to start (see the console)")
          }
        }(dd, Od, "setting" === md.source, md.choice);
        if ("lite" === md.choice && qd.k.setItem(bd.s, "string" === typeof Kd), "string" !== typeof Kd) return vd.e.followGameGpu((0, Nd.l)()), (0, od.setWebGpuFallbackReason)("none"), (0, Xd.t)(md), (0, Rd.x)(Kd), {
          lite: Kd
        };
        Qd = (0, Xd.e)(md.choice, [Kd]), dd.replaceWith(dd.cloneNode(!1))
      } else "lite" === md.requested ? (0, od.setWebGpuFallbackReason)("load_failed") : "default" === md.source && Od.webGpuDefaultOffReason ? (0, od.setWebGpuFallbackReason)(Od.webGpuDefaultOffReason) : (0, od.setWebGpuFallbackReason)("not_requested");
      return (0, Xd.t)({
        ...md,
        choice: "webgl2",
        fallbackReason: Qd
      }), vd.e.followGameGpu(null), {
        lite: null
      }
    }

    function gd() {
      return Promise.all([md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(299), md.e(293), md.e(294), md.e(278), md.e(0)]).then((() => md(53976)))
    }
    async function wd() {
      return (await gd()).createSceneParticleSystem
    }
    async function Ed() {
      Promise.all([md.e(290), md.e(622)]).then((() => md(54045))).then((dd => {
        dd.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [dd, Od] = await Promise.all([gd(), Promise.all([md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(299), md.e(293), md.e(294), md.e(278), md.e(0)]).then((() => md(54055))), Promise.all([md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(299), md.e(293), md.e(294), md.e(278), md.e(0)]).then((() => md(43085)))]);
      return (0, Kd.f)(Od.SkyMaterial), dd.default
    }

    function Jd(dd) {
      return "lite" === (0, Xd.q)((0, Xd.m)(dd, !1)).choice && (0, od.getWebGpuSupported)() && !qd.k.getItem(bd.s)
    }

    function Ud(dd) {
      Jd(dd) || Ed().catch((dd => {
        console.warn("Failed to prefetch noa's Babylon backend.", dd)
      }))
    }

    function xd(dd) {
      (0, yd.e)((() => {
        Jd(dd) ? (0, Rd.n)().load().catch((dd => {
          console.warn("Failed to prefetch the Lite renderer.", dd)
        })) : Ud(dd)
      }))
    }
  },
  40325: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      f: () => Xd
    });
    var Wd = md(29),
      Fd = md(35482),
      Rd = md(3973);

    function Xd(dd) {
      var Od;
      return null !== (Od = dd.parentElement) && void 0 !== Od ? Od : dd
    }

    function Kd(dd, Od) {
      if (dd.clientWidth <= 0 || dd.clientHeight <= 0 || Fd.d.isHeld()) return null;
      const md = (0, Rd.m)(),
        [Xd, Kd] = Od.size(md);
      return (0, Rd.r)(Xd, Kd, md, Wd.e.get("clientEscMenuOptions").pixelScale)
    }
  },
  40453: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd,
      f: () => Fd
    });
    const Wd = 2.2;

    function Fd(dd) {
      let Od = 0;
      return dd > 5 && (Od = .12 * Math.min(dd - 5, 15), dd > 20 && (Od += .01 * (dd - 20))), 1.4 + Od
    }
  },
  40439: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      c: () => Kd,
      d: () => Rd,
      f: () => Nd,
      i: () => hd,
      j: () => Qd,
      n: () => vd,
      p: () => od
    });
    var Wd = md(38627),
      Fd = md(38907);
    const Rd = 0,
      Xd = 1,
      Kd = 18;

    function hd(dd) {
      return !1 !== dd && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
    }

    function vd(dd, Od) {
      return null !== dd && void 0 !== dd ? dd : Od
    }

    function Qd(dd, Od, md) {
      return Od && !md ? Math.max(1, dd / Kd) : 1
    }
    const td = new WeakMap;

    function od(dd, Od, md, Fd) {
      const Rd = dd.qE.Vmd(md),
        Xd = Rd.offset;
      Xd[0] = Xd[1] = Xd[2] = 0;
      const Kd = dd.qE.Vmd(Od);
      if (Fd || !Kd || !Rd.mesh.isEnabled() || !Rd.mesh.isVisible) return 1;
      const hd = dd.qE.gM(md).y_,
        vd = dd.camera.b_(),
        Qd = dd.camera.S_(),
        od = vd[0] - hd[0],
        Nd = vd[1] - hd[1],
        qd = vd[2] - hd[2];
      if (-(Qd[0] * od + Qd[1] * Nd + Qd[2] * qd) <= 0 || Math.hypot(od, Nd, qd) < .1) return 1;
      const Hd = dd.gt.zV().getFrameId();
      let yd = td.get(Kd);
      if (yd || (yd = {
          frame: -1,
          minimum: new Wd.Cq,
          maximum: new Wd.Cq,
          valid: !1
        }, td.set(Kd, yd)), yd.frame !== Hd)
        if (yd.frame = Hd, Kd.fWd) yd.valid = dd.gt.HA.getObjectBounds(Kd.JA, yd.minimum, yd.maximum);
        else {
          yd.minimum.Bdd(1 / 0), yd.maximum.Bdd(-1 / 0), yd.valid = !1;
          const dd = [Kd.mesh, ...Kd.mesh.getChildMeshes(!1)];
          for (const Od of dd) {
            if (!("getTotalVertices" in Od) || !Od.isEnabled() || !Od.isVisible || !Od.getTotalVertices()) continue;
            Od.computeWorldMatrix();
            const dd = Od.iG().boundingBox;
            yd.minimum.minimizeInPlace(dd.minimumWorld), yd.maximum.maximizeInPlace(dd.maximumWorld), yd.valid = !0
          }
        } if (!yd.valid) return 1;
      const bd = function(dd, Od, md, Wd, Fd) {
        const Rd = Od[0] - dd[0],
          Xd = Od[1] - dd[1],
          Kd = Od[2] - dd[2],
          hd = Math.hypot(Rd, Xd, Kd),
          vd = -(Fd[0] * Rd + Fd[1] * Xd + Fd[2] * Kd);
        if (hd < .1 || vd <= 0) return 0;
        const Qd = (Math.abs(Fd[0]) * (Wd.x - md.x) + Math.abs(Fd[1]) * (Wd.y - md.y) + Math.abs(Fd[2]) * (Wd.z - md.z)) / 2,
          td = -(Fd[0] * ((md.x + Wd.x) / 2 - dd[0]) + Fd[1] * ((md.y + Wd.y) / 2 - dd[1]) + Fd[2] * ((md.z + Wd.z) / 2 - dd[2]));
        return Math.max(0, Math.min((td + Qd + .01) / vd, 2 * Qd / vd, 1 - .1 / vd))
      }(hd, vd, yd.minimum, yd.maximum, dd.camera.S_());
      for (let Wd = 0; Wd < 3; Wd++) Xd[Wd] = (vd[Wd] - hd[Wd]) * bd;
      return 1 - bd
    }

    function Nd(dd, Od) {
      const {
        mesh: md,
        offset: Wd
      } = dd.qE.Vmd(Od), Rd = dd.qE.gM(Od).y_, Xd = Rd[0] + Wd[0], Kd = Rd[1] + Wd[1], hd = Rd[2] + Wd[2];
      (0, Fd.q)(md, Xd, Kd, hd)
    }
  },
  40323: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      f: () => Kd,
      g: () => hd
    });
    var Wd = md(38898),
      Fd = md(38779);
    const Rd = new Set;
    let Xd = null;

    function Kd(dd) {
      Xd = dd
    }

    function hd(dd) {
      if (!Xd) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new Xd("sky", dd)
    }

    function vd(dd, Od, md) {
      if (!(0, Wd.g)(dd)) return void dd.material.forceCompilation(dd, Od);
      const Xd = () => {
        if (dd.yJ()) return void Rd.delete(dd);
        const Wd = (0, Fd.db)(dd.material);
        if (![null === Wd || void 0 === Wd ? void 0 : Wd.diffuseTexture, null === Wd || void 0 === Wd ? void 0 : Wd.opacityTexture, null === Wd || void 0 === Wd ? void 0 : Wd.emissiveTexture, null === Wd || void 0 === Wd ? void 0 : Wd.reflectionTexture].every((dd => !dd || md.prepareTexture(dd)))) return Rd.add(dd), void setTimeout(Xd, 16);
        Rd.delete(dd), Od()
      };
      Xd()
    }
  },
  40431: (dd, Od, md) => {
    md.d(Od, {
      A: () => kd,
      C: () => ed,
      D: () => FO,
      G: () => NO,
      d: () => cd,
      h: () => Ld,
      i: () => Md,
      k: () => Dd,
      n: () => oO,
      r: () => KO,
      u: () => XO,
      x: () => jd
    });
    var Wd = md(1238),
      Fd = md(1306),
      Rd = md(387),
      Xd = md(1452),
      Kd = md(5134),
      hd = md(5155),
      vd = md(2402),
      Qd = md(38799),
      td = md(38794),
      od = md(39459),
      Nd = md(39074),
      qd = md(38933),
      Hd = md(38731),
      yd = md(40439),
      bd = md(39484),
      Td = md(40269),
      pd = md(38766),
      Yd = md(38869),
      gd = md(701),
      wd = md(1315),
      Ed = md(2094),
      Jd = md(2178),
      Ud = md(4373),
      xd = md(4365),
      Bd = md(2134),
      Sd = md(29),
      sd = md(9965),
      ud = md(5124),
      Vd = md(5141),
      Ad = md(5147),
      rd = md(37755);
    const Gd = Object.create(null),
      nd = Object.create(null),
      Ld = {
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
      Pd = {
        text: dd => `bolder ${dd}px 'Jetbrains Mono'`
      },
      zd = 41,
      cd = {
        icon: Jd.e,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function jd(dd, Od) {
      return dd.flatMap((dd => {
        var md;
        if ("object" === typeof dd && "chatTag" in dd) return [dd];
        if (Id(dd)) return [dd];
        if ((0, Rd.wb)(dd)) return [{
          str: ""
        }];
        if ((0, Rd.sb)(dd)) {
          const md = (0, sd.d)(dd.action);
          if (md) {
            var Xd;
            const Wd = dd.style;
            return [{
              icon: (0, sd.e)(md),
              style: {
                fontSize: null !== (Xd = null === Wd || void 0 === Wd ? void 0 : Wd.fontSize) && void 0 !== Xd ? Xd : `${Od}px`,
                opacity: null === Wd || void 0 === Wd ? void 0 : Wd.opacity
              }
            }]
          }
          const Wd = (0, Bd.w)(dd.action, Sd.e.get("isTouchScreen")),
            Fd = (0, Bd.u)(dd.action);
          null === Wd && null === Fd && console.warn(`No key binding found for action: ${dd.action}`), dd = {
            str: null !== Wd && void 0 !== Wd ? Wd : (0, Bd.r)(Fd),
            style: dd.style
          }
        }
        let Kd;
        return Kd = "string" !== typeof dd && "str" in dd ? dd : {
            str: dd
          }, null !== (md = Kd.style) && void 0 !== md && md.fontSize ? Kd.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : Kd.style ? Kd.style.fontSize = `${Od}px` : Kd.style = {
            fontSize: `${Od}px`
          },
          function(dd) {
            if ("object" !== typeof dd.str || !("translationKey" in dd.str)) return [dd];
            const Od = Fd.f.get().getCurrentLanguageCode(),
              md = (0, Wd.s)(dd.str.params, Ed.c.shown),
              Rd = (0, Wd.x)(Od, dd.str.translationKey, md);
            if (Rd.every((dd => "string" === typeof dd))) return [dd];
            return Rd.map((Od => "string" === typeof Od ? {
              str: Od,
              style: dd.style
            } : {
              icon: Od.icon,
              style: {
                fontSize: dd.style.fontSize,
                opacity: dd.style.opacity
              }
            }))
          }(Kd)
      }))
    }

    function Dd(dd) {
      const Od = Object.keys(dd).length;
      return {
        width: Ld.EFFECT_ICON_SIZE * Od,
        height: Od > 0 ? Ld.EFFECT_ICON_SIZE : 0
      }
    }

    function ed(dd) {
      return dd && void 0 !== dd.str
    }

    function Id(dd) {
      return dd && "object" === typeof dd && "icon" in dd && !("mainRGB" in dd)
    }

    function ld(dd) {
      return dd && "object" === typeof dd && "mainRGB" in dd
    }

    function Cd(dd) {
      var Od, md;
      const Wd = null !== (Od = ed(dd) ? null === (md = dd.style) || void 0 === md ? void 0 : md.fontSize : void 0) && void 0 !== Od ? Od : `${Ld.DEFAULT_FONT_SIZE}px`;
      return Pd.text(Number(Wd.replace("px", "")))
    }

    function Zd(dd) {
      var Od;
      const md = null !== (Od = Object.hasOwn(rd.d, dd) ? rd.d[dd] : null) && void 0 !== Od ? Od : (0, Xd.e)(dd, (0, Xd.m)(dd));
      return md || console.warn(`Unknown rank icon "${dd}" \u2014 not in the bundled Font Awesome subset.`), md
    }

    function kd(dd) {
      return ld(dd) ? "" : fd(dd)
    }

    function fd(dd) {
      if (!ed(dd)) return "";
      if ("string" === typeof dd.str) return dd.str;
      if ("translationKey" in dd.str) {
        const Od = Fd.f.get().getCurrentLanguageCode(),
          md = (0, Wd.s)(dd.str.params, Ed.c.shown);
        return (0, Wd.B)(Od, dd.str.translationKey, md)
      }
      return "entityName" in dd.str ? (0, wd.e)(dd.str.entityName, Ed.c.shown) : ""
    }

    function Md(dd, Od) {
      if ((0, gd.O)(dd) || 0 === dd.length) return {
        width: 0,
        height: 0,
        sizeCache: []
      };
      let md = 0;
      for (const Xd of dd) {
        const dd = tO(Xd);
        md = Math.max(md, dd)
      }
      const Wd = md + Ld.VERTICAL_PADDING,
        Fd = [];
      let Rd = 0;
      Rd += mO(void 0, dd[0]);
      for (let Xd = 0; Xd < dd.length; Xd++) {
        const md = dd[Xd],
          Wd = {
            x: Rd,
            width: 0
          };
        Rd += dO(md, Od), Rd += mO(md, dd[Xd + 1]), Wd.width = Rd - Wd.x, Fd.push(Wd)
      }
      return {
        width: Rd,
        height: Wd,
        sizeCache: Fd
      }
    }

    function dO(dd, Od) {
      if (Id(dd)) return tO(dd);
      if (ld(dd)) return function(dd) {
        const Od = Zd(dd);
        if (!Od) return zd;
        const [md, Wd] = Od.icon;
        return zd * (md / Wd)
      }(dd.icon) + Ld.HORIZONTAL_PADDING;
      const md = Cd(dd);
      return function(dd, Od, md) {
        return md.font = Od, md.measureText(dd).width
      }(fd(dd), md, Od)
    }

    function OO(dd) {
      return ed(dd) || Id(dd)
    }

    function mO(dd, Od) {
      const md = OO(dd),
        Wd = OO(Od);
      return void 0 === dd && !Wd || !md && void 0 === Od ? 0 : md !== Wd ? .5 * Ld.HORIZONTAL_PADDING : 0
    }
    let WO;

    function FO() {
      return WO ??= document.createElement("canvas").getContext("2d"), WO
    }
    const RO = () => 0;

    function XO(dd, Od, md, Wd, Fd) {
      let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RO;
      Od += mO(void 0, dd[0]);
      for (let Xd = 0; Xd < dd.length; Xd++) {
        const Kd = dd[Xd],
          hd = KO(Kd, Od, md, Wd, Fd, void 0, Rd);
        Od += 0 === hd ? 0 : hd + mO(Kd, dd[Xd + 1])
      }
    }

    function KO(dd, Od, md, Wd, Fd, Xd) {
      var td;
      let od = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RO;
      if (Id(dd)) {
        const Wd = tO(dd);
        return function(dd, Od, md, Wd, Fd) {
          var Rd;
          let Xd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : RO;
          const td = (0, Qd.k)(Fd);
          md += Ld.VERTICAL_PADDING / 2;
          const od = Xd(),
            Nd = (0, sd.m)(dd.icon),
            qd = dd => {
              if (od === Xd())
                if (td.imageSmoothingEnabled = Nd, Nd && dd.width > dd.height) {
                  const Fd = Wd * dd.height / dd.width;
                  td.drawImage(dd, Od, md + (Wd - Fd) / 2, Wd, Fd)
                } else td.drawImage(dd, Od, md, Wd, Wd)
            };
          if (nd[dd.icon]) return void qd(nd[dd.icon]);
          if (Gd[dd.icon]) {
            const Od = Gd[dd.icon];
            if (Od.complete) return void qd(Od)
          }
          const Hd = (0, ud.g)(dd.icon, Wd);
          if (Hd) return void qd(Hd);
          const yd = function(dd) {
              const Od = (0, sd.i)(dd);
              if (null !== Od) return {
                url: Od,
                type: "padGlyph"
              };
              if (Kd.e.includes(dd)) return {
                url: xd.c.getTexture(dd, Ud.i.ICON).url,
                type: "ingameIcon"
              };
              {
                var md;
                const Od = null === (md = vd.g.itemsClient[dd]) || void 0 === md ? void 0 : md.type;
                return QO.includes(Od) ? (console.error(new Error(`Invalid icon type ${Od} is not supported in nametags`).stack), {
                  url: "",
                  type: ""
                }) : (0, Vd.e)(Od) ? {
                  url: "",
                  type: Od
                } : "GrayscaleArmour" === Od || hd.b[dd] ? {
                  url: (0, Ad.h)(dd),
                  type: Od,
                  tint: (0, hd.c)(dd)
                } : {
                  url: (0, Ad.h)(dd),
                  type: Od
                }
              }
            }(dd.icon),
            bd = yd.tint;
          let pd = yd.url;
          if ((0, Vd.e)(null === (Rd = vd.g.itemsClient[dd.icon]) || void 0 === Rd ? void 0 : Rd.type)) {
            const Od = dd.icon;
            if (!vd.g.itemsClient[Od].itemTexture) return void(0, ud.f)(Od, Wd).then((dd => {
              qd(dd), (0, Td.o)(Fd)
            }), (() => {}));
            pd = (0, Ad.h)(Od)
          }
          if (!pd) return;
          const Yd = new Image;
          Nd && (Yd.crossOrigin = "anonymous");
          if (Yd.src = pd, bd) return void(Yd.onload = () => {
            const Od = function(dd, Od) {
              let [md, Wd, Fd] = Od;
              const Rd = document.createElement("canvas");
              Rd.width = dd.naturalWidth, Rd.height = dd.naturalHeight;
              const Xd = Rd.getContext("2d");
              return Xd.drawImage(dd, 0, 0), Xd.globalCompositeOperation = "multiply", Xd.fillStyle = `rgb(${md}, ${Wd}, ${Fd})`, Xd.fillRect(0, 0, Rd.width, Rd.height), Xd.globalCompositeOperation = "destination-in", Xd.drawImage(dd, 0, 0), Rd
            }(Yd, bd);
            nd[dd.icon] = Od, qd(Od), (0, Td.o)(Fd)
          });
          Gd[dd.icon] = Yd, Yd.onload = () => {
            qd(Yd), (0, Td.o)(Fd)
          }
        }(dd, Od, md, Wd, Fd, od), Wd
      }
      const Nd = (0, Qd.k)(Fd);
      if (ld(dd)) {
        const Fd = null !== Xd && void 0 !== Xd ? Xd : dO(dd, Nd);
        return function(dd, Od, md, Wd, Fd, Rd) {
          var Xd, Kd;
          Rd.fillStyle = dd.mainRGB, Rd.fillRect(Od, md, Wd, Fd);
          const hd = Zd(dd.icon);
          if (!hd) return;
          const vd = (null === (Xd = dd.nameTag) || void 0 === Xd ? void 0 : Xd.iconRGB) || "white",
            Qd = (null === (Kd = dd.nameTag) || void 0 === Kd ? void 0 : Kd.iconShadowRGB) || "black",
            [td, od, , , Nd] = hd.icon,
            qd = "string" === typeof Nd ? Nd : Nd.join(" "),
            Hd = zd / od,
            yd = Od + (Wd - td * Hd) / 2,
            bd = md + (Fd - zd) / 2,
            Td = new Path2D(qd),
            pd = Rd;
          for (const Yd of [-1, 1])
            for (const dd of [-1, 1]) hO(pd, Td, yd + Ld.TEXT_SHADOW_WIDTH * Yd, bd + Ld.TEXT_SHADOW_WIDTH * dd, Hd, Qd);
          hO(pd, Td, yd, bd, Hd, vd)
        }(dd, Od, md, Fd, Wd, Nd), Fd
      }
      const qd = fd(dd);
      if (0 === qd.length) return 0;
      const Hd = Cd(dd);
      Nd.font = Hd;
      const yd = null !== Xd && void 0 !== Xd ? Xd : dO(dd, Nd),
        bd = ed(dd) && null !== (td = (0, Rd.Yb)(dd.style)) && void 0 !== td ? td : "white";
      let pd = md + Wd;
      return pd -= Ld.VERTICAL_PADDING, pd += ed(dd) ? 5 : 0,
        function(dd, Od, md, Wd, Fd, Rd, Xd) {
          let Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Ld.TEXT_SHADOW_WIDTH;
          for (const hd of [-1, 1])
            for (const Fd of [-1, 1]) vO(Xd, dd, Od + Kd * hd, md + Kd * Fd, Wd, Rd);
          vO(Xd, dd, Od, md, Wd, Fd)
        }(qd, Od, pd, Hd, bd, "black", Nd), yd
    }

    function hO(dd, Od, md, Wd, Fd, Rd) {
      dd.save(), dd.translate(md, Wd), dd.scale(Fd, Fd), dd.fillStyle = Rd, dd.fill(Od), dd.restore()
    }

    function vO(dd, Od, md, Wd, Fd, Rd) {
      dd.font = Fd, dd.fillStyle = Rd, dd.fillText(Od, md, Wd)
    }
    const QO = ["Gun"];

    function tO(dd) {
      if (ed(dd) || Id(dd)) {
        var Od, md;
        const Wd = null !== (Od = null === (md = dd.style) || void 0 === md ? void 0 : md.fontSize) && void 0 !== Od ? Od : `${Ld.DEFAULT_FONT_SIZE}px`;
        return Number(Wd.replace("px", "")) || Ld.DEFAULT_FONT_SIZE
      }
      return Ld.DEFAULT_FONT_SIZE
    }

    function oO(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        Rd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const Xd = dd.gt.zV(),
        Kd = (0, Td.g)(dd, `${md}Tex`, Wd, Fd, {
          mipped: td.g.nearestLinearMipLinear,
          unmipped: td.g.nearestLinearMipNearest
        }),
        hd = (0, od.p)(dd.gt, md, (0, Nd.j)({
          width: 1,
          height: 1
        }));
      hd.metadata = new dd.gt.Wy, hd.metadata[qd.E] = !0, hd.billboardMode = Hd.c.BILLBOARDMODE_ALL, hd.renderingGroupId = yd.b;
      const vd = dd.qE.add([0, 0, 0], 1, 1, hd, [0, 0, 0]);
      let Qd;
      dd.qE.yG(vd, dd.qE.names.XE, {
        xq: Od
      });
      const {
        mirror: gd
      } = (0, pd.d)({
        name: `${md}Mat`,
        MH: Xd,
        sets: {
          specularColor: [0, 0, 0],
          ambientColor: [1.3, 1.3, 1.3],
          emissiveColor: [1, 1, 1],
          ...(0, Td.k)(Kd)
        },
        features: Od => {
          (0, Td.d)(Od, "planes"), Qd = (0, Yd.e)(Od, dd.gt, Rd ? {
            x: 1,
            y: 1,
            z: 1,
            w: 1
          } : void 0)
        },
        unrendered: !0,
        freeze: !0
      });
      return hd.material = gd, Rd ? dd.qE.Vmd(vd).xhd = !1 : (0, bd.g)(hd), hd.cV.add((() => {
        gd.dispose(!1, !0)
      })), {
        planeEId: vd,
        plane: hd,
        texture: Kd,
        lightState: Qd
      }
    }

    function NO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Fd = (0, yd.i)(Od, md, Wd);
      return dd.renderingGroupId = Fd ? yd.b : yd.d, Fd
    }
  },
  40269: (dd, Od, md) => {
    md.d(Od, {
      d: () => vd,
      g: () => Xd,
      k: () => hd,
      o: () => Kd
    });
    var Wd = md(38799),
      Fd = md(38779),
      Rd = md(40272);

    function Xd(dd, Od, md, Fd, Rd) {
      const Xd = function(dd) {
          return !dd.gt.engine.needPOTTextures
        }(dd),
        Kd = Xd ? Rd.mipped : Rd.unmipped;
      return (0, Wd.m)(dd.gt.zV(), Od, {
        width: md,
        height: Fd,
        mipmaps: Xd,
        samplingMode: Kd,
        hasAlpha: !0
      })
    }

    function Kd(dd) {
      (0, Wd.T)(dd, !0, !dd.sampler.noMipmap)
    }

    function hd(dd) {
      return {
        diffuseTexture: dd,
        useAlphaFromDiffuseTexture: !0,
        transparencyMode: Fd.r.alphaTestAndBlend,
        alphaCutOff: .05,
        alphaMode: Fd.d.premultiplied,
        forceDepthWrite: !0
      }
    }

    function vd(dd, Od) {
      dd.diffuseTexture.sampler.noMipmap || (0, Fd.t)(dd, Rd.f, {
        lodBias: Rd.b[Od]
      })
    }
  },
  40327: (dd, Od, md) => {
    function Wd(dd, Od) {
      return "object" === typeof dd && null !== dd ? Object.assign(dd, {
        startStep: Od
      }) : dd
    }

    function Fd(dd) {
      return "object" === typeof dd && null !== dd && "startStep" in dd ? dd.startStep : null
    }
    md.d(Od, {
      b: () => Fd,
      c: () => Wd
    })
  },
  40376: (dd, Od, md) => {
    var Wd = {
      "./cape_cow_cream.png": 29157,
      "./cape_cow_normal.png": 29162,
      "./cape_creator_level1.png": 29171,
      "./cape_creator_level2.png": 29173,
      "./cape_creator_level3.png": 29176,
      "./cape_none.png": 29178,
      "./cape_pig.png": 29184,
      "./cape_sheep.png": 29187,
      "./cape_super.png": 29194,
      "./cape_super_inverted.png": 29200,
      "./cape_youtuber.png": 29204
    };

    function Fd(dd) {
      var Od = Rd(dd);
      return md(Od)
    }

    function Rd(dd) {
      if (!md.o(Wd, dd)) {
        var Od = new Error("Cannot find module '" + dd + "'");
        throw Od.code = "MODULE_NOT_FOUND", Od
      }
      return Wd[dd]
    }
    Fd.keys = function() {
      return Object.keys(Wd)
    }, Fd.resolve = Rd, dd.exports = Fd, Fd.id = 40376
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);