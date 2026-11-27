export const id = 279;
export const ids = [279];
export const modules = {
  40014: (WW, iW, OW) => {
    var mW = {
      "./cape_cow_cream.png": 29007,
      "./cape_cow_normal.png": 29012,
      "./cape_creator_level1.png": 29015,
      "./cape_creator_level2.png": 29018,
      "./cape_creator_level3.png": 29022,
      "./cape_none.png": 29027,
      "./cape_pig.png": 29034,
      "./cape_sheep.png": 29041,
      "./cape_super.png": 29044,
      "./cape_super_inverted.png": 29053,
      "./cape_youtuber.png": 29057
    };

    function EW(WW) {
      var iW = NW(WW);
      return OW(iW)
    }

    function NW(WW) {
      if (!OW.o(mW, WW)) {
        var iW = new Error("Cannot find module '" + WW + "'");
        throw iW.code = "MODULE_NOT_FOUND", iW
      }
      return mW[WW]
    }
    EW.keys = function() {
      return Object.keys(mW)
    }, EW.resolve = NW, WW.exports = EW, EW.id = 40014
  },
  40380: (WW, iW, OW) => {
    function mW(WW) {
      return void 0 === WW ? void 0 : [WW[0], WW[1], WW[2]]
    }

    function EW(WW) {
      const iW = WW.particles;
      return {
        opts: {
          texture: iW.texture,
          aZ: iW.aZ,
          minLifeTime: iW.minLifeTime,
          maxLifeTime: iW.maxLifeTime,
          minSize: iW.minSize,
          maxSize: iW.maxSize,
          minEmitPower: iW.minEmitPower,
          maxEmitPower: iW.maxEmitPower,
          emitRate: iW.emitRate,
          gravity: mW(iW.gravity),
          dir1: mW(iW.dir1),
          dir2: mW(iW.dir2),
          colorGradients: iW.colorGradients,
          blendMode: iW.blendMode
        },
        half: [iW.width / 2, iW.height / 2, iW.depth / 2]
      }
    }
    OW.d(iW, {
      d: () => EW
    })
  },
  40337: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      g: () => wW,
      h: () => cW,
      i: () => PW
    });
    var mW = OW(192);
    const EW = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      NW = "PetRoot";
    let PW = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      LW = EW;
    new Map, new Map;

    function cW(WW) {
      var iW;
      return null !== (iW = (0, mW.c)(PW, WW)) && void 0 !== iW ? iW : null
    }

    function wW(WW) {
      var iW;
      return null !== (iW = (0, mW.c)(LW, WW)) && void 0 !== iW ? iW : null
    }
  },
  40384: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW,
      f: () => EW,
      j: () => NW
    });
    class mW {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Sj = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(WW) {
        var iW;
        const {
          feet: OW,
          heading: mW,
          tuning: PW
        } = WW, LW = Math.min(Math.max(WW.dt, 0), .1), {
          pose: cW,
          Sj: wW,
          target: tW
        } = this;
        if (this.started && LW > 0) {
          const WW = Math.hypot(OW[0] - this.lastFeet[0], OW[1] - this.lastFeet[1], OW[2] - this.lastFeet[2]);
          this.speed += (WW / LW - this.speed) * Math.min(LW / .15, 1)
        }
        this.lastFeet[0] = OW[0], this.lastFeet[1] = OW[1], this.lastFeet[2] = OW[2], this.stillS = this.speed > .3 ? 0 : this.stillS + LW;
        const ZW = this.stillS >= .6 ? "perched" : "flying";
        "flying" === ZW && "perched" === cW.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += LW, cW.mode = ZW;
        const xW = Math.sin(mW),
          lW = Math.cos(mW);
        "perched" === ZW ? (NW(tW, OW, PW.perchOffset, xW, lW), tW[1] += WW.headTopY - OW[1]) : (NW(tW, OW, PW.followOffset, xW, lW), tW[1] += EW(PW, WW.timeS));
        const {
          pos: AW
        } = cW, bW = Math.hypot(tW[0] - AW[0], tW[1] - AW[1], tW[2] - AW[2]);
        if (!this.started || bW > 8 || "perched" === ZW && (this.perchLocked || bW < .05)) this.perchLocked = this.started && "perched" === ZW, AW[0] = tW[0], AW[1] = tW[1], AW[2] = tW[2], wW[0] = wW[1] = wW[2] = 0;
        else {
          const WW = PW.followStiffness;
          for (let iW = 0; iW < 3; iW++) wW[iW] += (WW * WW * (tW[iW] - AW[iW]) - 2 * WW * wW[iW]) * LW, AW[iW] += wW[iW] * LW
        }
        const jW = mW + PW.yawOffset;
        var UW;
        return this.started ? cW.yaw += ((UW = jW - cW.yaw) - 2 * Math.PI * Math.round(UW / (2 * Math.PI))) * Math.min(8 * LW, 1) : cW.yaw = jW, this.started = !0, cW.seated = "perched" === ZW && this.perchLocked, cW.clip = null === (iW = PW.clips) || void 0 === iW ? void 0 : iW[this.bO(ZW)], cW
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      bO(WW) {
        return "perched" === WW ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function EW(WW, iW) {
      return WW.bobAmplitude * Math.sin(2 * Math.PI * WW.bobHz * iW)
    }

    function NW(WW, iW, OW, mW, EW) {
      const [NW, PW, LW] = OW;
      WW[0] = iW[0] + NW * EW + LW * mW, WW[1] = iW[1] + PW, WW[2] = iW[2] - NW * mW + LW * EW
    }
  },
  40345: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(38235),
      EW = OW(39045);

    function NW(WW, iW) {
      var OW;
      WW.blendMode = iW.blendMode, WW.minLifeTime = iW.minLifeTime, WW.maxLifeTime = iW.maxLifeTime, WW.minSize = iW.minSize, WW.maxSize = iW.maxSize, WW.minEmitPower = iW.minEmitPower, WW.maxEmitPower = iW.maxEmitPower;
      const NW = null !== (OW = iW.gravity) && void 0 !== OW ? OW : [0, 0, 0];
      WW.gravity = new mW.fA(NW[0], NW[1], NW[2]);
      for (const mW of iW.colorGradients) WW.addColorGradient(mW.timeFraction, (0, EW.k)(mW.minColor), mW.maxColor ? (0, EW.k)(mW.maxColor) : void 0)
    }
  },
  39965: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => MW,
      h: () => YW,
      j: () => SW,
      n: () => TW,
      q: () => JW,
      s: () => sW
    });
    var mW = OW(327),
      EW = OW(39976),
      NW = OW(3827),
      PW = OW(3831),
      LW = OW(39967),
      cW = OW(39972),
      wW = OW(25),
      tW = OW(109),
      ZW = OW(3941),
      xW = OW(100),
      lW = OW(131),
      AW = OW(39),
      bW = OW(299),
      jW = OW(4816),
      UW = OW(119);
    const kW = {
      no_adapter: "start_no_adapter",
      device: "device_failed"
    };

    function sW(WW) {
      var iW;
      const OW = null !== (iW = tW.currentUrl.getSearchParam(WW)) && void 0 !== iW ? iW : AW.i.getItem(WW);
      return null === OW || void 0 === OW || "" === OW ? null : "0" !== OW && "false" !== OW && !1 !== OW && 0 !== OW
    }
    async function MW(WW, iW) {
      (0, NW.E)(null);
      const OW = (0, PW.k)((0, PW.j)(iW.useWebGpu, !0));
      (0, xW.setWebGpuRequested)("lite" === OW.requested && (0, xW.getWebGpuSupported)());
      const LW = (0, PW.d)(OW.source);
      null !== LW && console.info(`Renderer: ${OW.requested} from ${LW}`), null !== OW.fallbackReason && console.warn(`Renderer: ${OW.fallbackReason}`);
      let tW = OW.fallbackReason;
      if ("webgl2" !== OW.choice) {
        const LW = await async function(WW, iW, OW, PW) {
          const LW = await (0, xW.probeWebGpuAdapter)();
          if ("usable" !== LW) return (0, xW.setWebGpuFallbackReason)(LW), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
          if (OW && !0 !== AW.i.getItem(mW.pc)) {
            if (!0 === AW.i.getItem(UW.A)) return (0, xW.setWebGpuFallbackReason)("old_intel_driver"), console.info("The WebGPU adapter is an Intel GPU whose driver is too old for Lite (no shader-f16), rendering with WebGL."), UW.c;
            if (await (0, bW.p)(), (0, bW.e)()) return (0, xW.setWebGpuFallbackReason)("few_wasm_memories"), console.info("This tab fits too few wasm memories for WebGPU, rendering with WebGL."), bW.b
          }
          let tW = "load_failed";
          try {
            const {
              create: OW
            } = await (0, NW.v)(PW).load();
            tW = "start_failed";
            const mW = wW.d.antiAliasingOnWebGpuAdapter((0, lW.f)()),
              EW = (0, cW.i)(WW),
              LW = (0, cW.e)(EW, {
                size: WW => (0, ZW.m)(EW, WW)
              });
            return await OW(WW, {
              ROW: mW,
              sceneDepth: iW.sceneDepth,
              sunShadow: iW.sunShadow,
              bufferSize: LW
            })
          } catch (jW) {
            const WW = (0, EW.d)(jW);
            (0, xW.setWebGpuFallbackReason)(WW ? kW[WW] : tW);
            const iW = null === jW || void 0 === jW ? void 0 : jW.fallbackReason;
            return "string" === typeof iW ? (console.warn(`Lite could not start, falling back to WebGL: ${String(jW)}`), iW) : (console.error("Failed to initialise the Lite renderer, falling back to WebGL.", jW), "it failed to start (see the console)")
          }
        }(WW, iW, "setting" === OW.source, OW.choice);
        if ("lite" === OW.choice && AW.i.setItem(UW.p, "string" === typeof LW), "string" !== typeof LW) return wW.d.followGameGpu((0, lW.f)()), (0, xW.setWebGpuFallbackReason)("none"), (0, PW.o)(OW), (0, NW.E)(LW), {
          lite: LW
        };
        tW = (0, PW.b)(OW.choice, [LW]), WW.replaceWith(WW.cloneNode(!1))
      } else "lite" === OW.requested ? (0, xW.setWebGpuFallbackReason)("load_failed") : "default" === OW.source && iW.webGpuDefaultOffReason ? (0, xW.setWebGpuFallbackReason)(iW.webGpuDefaultOffReason) : (0, xW.setWebGpuFallbackReason)("not_requested");
      return (0, PW.o)({
        ...OW,
        choice: "webgl2",
        fallbackReason: tW
      }), wW.d.followGameGpu(null), {
        lite: null
      }
    }

    function KW() {
      return Promise.all([OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(299), OW.e(311), OW.e(298), OW.e(292), OW.e(293), OW.e(277), OW.e(0)]).then((() => OW(53714)))
    }
    async function SW() {
      return (await KW()).createSceneParticleSystem
    }
    async function YW() {
      Promise.all([OW.e(289), OW.e(621)]).then((() => OW(53803))).then((WW => {
        WW.installImageBitmapTextureLoader()
      })).catch((() => {}));
      const [WW, iW] = await Promise.all([KW(), Promise.all([OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(299), OW.e(311), OW.e(298), OW.e(292), OW.e(293), OW.e(277), OW.e(0)]).then((() => OW(53815))), Promise.all([OW.e(289), OW.e(290), OW.e(287), OW.e(297), OW.e(291), OW.e(296), OW.e(294), OW.e(286), OW.e(299), OW.e(311), OW.e(298), OW.e(292), OW.e(293), OW.e(277), OW.e(0)]).then((() => OW(42601)))]);
      return (0, LW.h)(iW.SkyMaterial), WW.default
    }

    function yW(WW) {
      return "lite" === (0, PW.k)((0, PW.j)(WW, !1)).choice && (0, xW.getWebGpuSupported)() && !AW.i.getItem(UW.p)
    }

    function TW(WW) {
      yW(WW) || YW().catch((WW => {
        console.warn("Failed to prefetch noa's Babylon backend.", WW)
      }))
    }

    function JW(WW) {
      (0, jW.e)((() => {
        yW(WW) ? (0, NW.s)().load().catch((WW => {
          console.warn("Failed to prefetch the Lite renderer.", WW)
        })) : TW(WW)
      }))
    }
  },
  39972: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => LW,
      i: () => PW
    });
    var mW = OW(25),
      EW = OW(35167),
      NW = OW(3941);

    function PW(WW) {
      var iW;
      return null !== (iW = WW.parentElement) && void 0 !== iW ? iW : WW
    }

    function LW(WW, iW) {
      if (WW.clientWidth <= 0 || WW.clientHeight <= 0 || EW.c.isHeld()) return null;
      const OW = (0, NW.p)(),
        [PW, LW] = iW.size(OW);
      return (0, NW.v)(PW, LW, OW, mW.d.get("clientEscMenuOptions").pixelScale)
    }
  },
  40085: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW,
      d: () => EW
    });
    const mW = 2.2;

    function EW(WW) {
      let iW = 0;
      return WW > 5 && (iW = .12 * Math.min(WW - 5, 15), WW > 20 && (iW += .01 * (WW - 20))), 1.4 + iW
    }
  },
  40073: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      g: () => LW,
      k: () => NW,
      n: () => lW,
      r: () => cW,
      t: () => tW,
      u: () => wW,
      v: () => xW
    });
    var mW = OW(38235),
      EW = OW(38532);
    const NW = 0,
      PW = 1,
      LW = 18;

    function cW(WW) {
      return !1 !== WW && (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
    }

    function wW(WW, iW) {
      return null !== WW && void 0 !== WW ? WW : iW
    }

    function tW(WW, iW, OW) {
      return iW && !OW ? Math.max(1, WW / LW) : 1
    }
    const ZW = new WeakMap;

    function xW(WW, iW, OW, EW) {
      const NW = WW.EY.XiW(OW),
        PW = NW.offset;
      PW[0] = PW[1] = PW[2] = 0;
      const LW = WW.EY.XiW(iW);
      if (EW || !LW || !NW.mesh.isEnabled() || !NW.mesh.isVisible) return 1;
      const cW = WW.EY.YG(OW).Yz,
        wW = WW.camera.mF(),
        tW = WW.camera.XF(),
        xW = wW[0] - cW[0],
        lW = wW[1] - cW[1],
        AW = wW[2] - cW[2];
      if (-(tW[0] * xW + tW[1] * lW + tW[2] * AW) <= 0 || Math.hypot(xW, lW, AW) < .1) return 1;
      const bW = WW.TZ.bD().getFrameId();
      let jW = ZW.get(LW);
      if (jW || (jW = {
          frame: -1,
          minimum: new mW.fA,
          maximum: new mW.fA,
          valid: !1
        }, ZW.set(LW, jW)), jW.frame !== bW)
        if (jW.frame = bW, LW.OmW) jW.valid = WW.TZ.nD.getObjectBounds(LW.uD, jW.minimum, jW.maximum);
        else {
          jW.minimum.Z5(1 / 0), jW.maximum.Z5(-1 / 0), jW.valid = !1;
          const WW = [LW.mesh, ...LW.mesh.getChildMeshes(!1)];
          for (const iW of WW) {
            if (!("getTotalVertices" in iW) || !iW.isEnabled() || !iW.isVisible || !iW.getTotalVertices()) continue;
            iW.computeWorldMatrix();
            const WW = iW.KV().boundingBox;
            jW.minimum.minimizeInPlace(WW.minimumWorld), jW.maximum.maximizeInPlace(WW.maximumWorld), jW.valid = !0
          }
        } if (!jW.valid) return 1;
      const UW = function(WW, iW, OW, mW, EW) {
        const NW = iW[0] - WW[0],
          PW = iW[1] - WW[1],
          LW = iW[2] - WW[2],
          cW = Math.hypot(NW, PW, LW),
          wW = -(EW[0] * NW + EW[1] * PW + EW[2] * LW);
        if (cW < .1 || wW <= 0) return 0;
        const tW = (Math.abs(EW[0]) * (mW.x - OW.x) + Math.abs(EW[1]) * (mW.y - OW.y) + Math.abs(EW[2]) * (mW.z - OW.z)) / 2,
          ZW = -(EW[0] * ((OW.x + mW.x) / 2 - WW[0]) + EW[1] * ((OW.y + mW.y) / 2 - WW[1]) + EW[2] * ((OW.z + mW.z) / 2 - WW[2]));
        return Math.max(0, Math.min((ZW + tW + .01) / wW, 2 * tW / wW, 1 - .1 / wW))
      }(cW, wW, jW.minimum, jW.maximum, WW.camera.XF());
      for (let mW = 0; mW < 3; mW++) PW[mW] = (wW[mW] - cW[mW]) * UW;
      return 1 - UW
    }

    function lW(WW, iW) {
      const {
        mesh: OW,
        offset: mW
      } = WW.EY.XiW(iW), NW = WW.EY.YG(iW).Yz, PW = NW[0] + mW[0], LW = NW[1] + mW[1], cW = NW[2] + mW[2];
      (0, EW.q)(OW, PW, LW, cW)
    }
  },
  39967: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => wW,
      h: () => LW,
      j: () => cW
    });
    var mW = OW(38526),
      EW = OW(38419);
    const NW = new Set;
    let PW = null;

    function LW(WW) {
      PW = WW
    }

    function cW(WW) {
      if (!PW) throw new Error("No SkyMaterial: WebGL2's backend installs it");
      return new PW("sky", WW)
    }

    function wW(WW, iW, OW) {
      if (!(0, mW.f)(WW)) return void WW.material.forceCompilation(WW, iW);
      const PW = () => {
        if (WW.Ay()) return void NW.delete(WW);
        const mW = (0, EW.bb)(WW.material);
        if (![null === mW || void 0 === mW ? void 0 : mW.diffuseTexture, null === mW || void 0 === mW ? void 0 : mW.opacityTexture, null === mW || void 0 === mW ? void 0 : mW.emissiveTexture, null === mW || void 0 === mW ? void 0 : mW.reflectionTexture].every((WW => !WW || OW.prepareTexture(WW)))) return NW.add(WW), void setTimeout(PW, 16);
        NW.delete(WW), iW()
      };
      PW()
    }
  },
  40070: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => fW,
      c: () => DW,
      d: () => zW,
      e: () => XW,
      g: () => ti,
      k: () => Ni,
      o: () => Ei,
      p: () => CW,
      q: () => aW,
      s: () => BW,
      u: () => Oi,
      w: () => Zi
    });
    var mW = OW(1172),
      EW = OW(1244),
      NW = OW(327),
      PW = OW(1404),
      LW = OW(5185),
      cW = OW(5199),
      wW = OW(2365),
      tW = OW(38437),
      ZW = OW(38431),
      xW = OW(39083),
      lW = OW(38694),
      AW = OW(38576),
      bW = OW(38364),
      jW = OW(40073),
      UW = OW(39120),
      kW = OW(39913),
      sW = OW(38411),
      MW = OW(38502),
      KW = OW(643),
      SW = OW(1255),
      YW = OW(2042),
      yW = OW(2138),
      TW = OW(4344),
      JW = OW(4337),
      hW = OW(2085),
      HW = OW(25),
      nW = OW(10049),
      uW = OW(5161),
      oW = OW(5187),
      dW = OW(5192),
      eW = OW(37369);
    const vW = Object.create(null),
      gW = Object.create(null),
      DW = {
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
      VW = {
        text: WW => `bolder ${WW}px 'Jetbrains Mono'`
      },
      pW = 41,
      fW = {
        icon: yW.e,
        mainRGB: "transparent",
        chatTag: [],
        nameTag: {
          iconRGB: "#f38ab6",
          iconShadowRGB: "black"
        },
        visible: !0
      };

    function CW(WW, iW) {
      return WW.flatMap((WW => {
        var OW;
        if ("object" === typeof WW && "chatTag" in WW) return [WW];
        if (qW(WW)) return [WW];
        if ((0, NW.Cb)(WW)) return [{
          str: ""
        }];
        if ((0, NW.yb)(WW)) {
          const OW = (0, nW.c)(WW.action);
          if (OW) {
            var PW;
            const mW = WW.style;
            return [{
              icon: (0, nW.e)(OW),
              style: {
                fontSize: null !== (PW = null === mW || void 0 === mW ? void 0 : mW.fontSize) && void 0 !== PW ? PW : `${iW}px`,
                opacity: null === mW || void 0 === mW ? void 0 : mW.opacity
              }
            }]
          }
          const mW = (0, hW.r)(WW.action, HW.d.get("isTouchScreen")),
            EW = (0, hW.n)(WW.action);
          null === mW && null === EW && console.warn(`No key binding found for action: ${WW.action}`), WW = {
            str: null !== mW && void 0 !== mW ? mW : (0, hW.m)(EW),
            style: WW.style
          }
        }
        let LW;
        return LW = "string" !== typeof WW && "str" in WW ? WW : {
            str: WW
          }, null !== (OW = LW.style) && void 0 !== OW && OW.fontSize ? LW.style.fontSize.endsWith("px") || console.warn(new Error("Canvas text font size should be in px").stack) : LW.style ? LW.style.fontSize = `${iW}px` : LW.style = {
            fontSize: `${iW}px`
          },
          function(WW) {
            if ("object" !== typeof WW.str || !("translationKey" in WW.str)) return [WW];
            const iW = EW.e.get().getCurrentLanguageCode(),
              OW = (0, mW.o)(WW.str.params, YW.e.shown),
              NW = (0, mW.t)(iW, WW.str.translationKey, OW);
            if (NW.every((WW => "string" === typeof WW))) return [WW];
            return NW.map((iW => "string" === typeof iW ? {
              str: iW,
              style: WW.style
            } : {
              icon: iW.icon,
              style: {
                fontSize: WW.style.fontSize,
                opacity: WW.style.opacity
              }
            }))
          }(LW)
      }))
    }

    function XW(WW) {
      const iW = Object.keys(WW).length;
      return {
        width: DW.EFFECT_ICON_SIZE * iW,
        height: iW > 0 ? DW.EFFECT_ICON_SIZE : 0
      }
    }

    function BW(WW) {
      return WW && void 0 !== WW.str
    }

    function qW(WW) {
      return WW && "object" === typeof WW && "icon" in WW && !("mainRGB" in WW)
    }

    function RW(WW) {
      return WW && "object" === typeof WW && "mainRGB" in WW
    }

    function GW(WW) {
      var iW, OW;
      const mW = null !== (iW = BW(WW) ? null === (OW = WW.style) || void 0 === OW ? void 0 : OW.fontSize : void 0) && void 0 !== iW ? iW : `${DW.DEFAULT_FONT_SIZE}px`;
      return VW.text(Number(mW.replace("px", "")))
    }

    function IW(WW) {
      var iW;
      const OW = null !== (iW = Object.hasOwn(eW.e, WW) ? eW.e[WW] : null) && void 0 !== iW ? iW : (0, PW.e)(WW, (0, PW.m)(WW));
      return OW || console.warn(`Unknown rank icon "${WW}" \u2014 not in the bundled Font Awesome subset.`), OW
    }

    function aW(WW) {
      return RW(WW) ? "" : rW(WW)
    }

    function rW(WW) {
      if (!BW(WW)) return "";
      if ("string" === typeof WW.str) return WW.str;
      if ("translationKey" in WW.str) {
        const iW = EW.e.get().getCurrentLanguageCode(),
          OW = (0, mW.o)(WW.str.params, YW.e.shown);
        return (0, mW.u)(iW, WW.str.translationKey, OW)
      }
      return "entityName" in WW.str ? (0, SW.g)(WW.str.entityName, YW.e.shown) : ""
    }

    function zW(WW, iW) {
      if ((0, KW.K)(WW) || 0 === WW.length) return {
        width: 0,
        height: 0,
        sizeCache: []
      };
      let OW = 0;
      for (const PW of WW) {
        const WW = wi(PW);
        OW = Math.max(OW, WW)
      }
      const mW = OW + DW.VERTICAL_PADDING,
        EW = [];
      let NW = 0;
      NW += Wi(void 0, WW[0]);
      for (let PW = 0; PW < WW.length; PW++) {
        const OW = WW[PW],
          mW = {
            x: NW,
            width: 0
          };
        NW += FW(OW, iW), NW += Wi(OW, WW[PW + 1]), mW.width = NW - mW.x, EW.push(mW)
      }
      return {
        width: NW,
        height: mW,
        sizeCache: EW
      }
    }

    function FW(WW, iW) {
      if (qW(WW)) return wi(WW);
      if (RW(WW)) return function(WW) {
        const iW = IW(WW);
        if (!iW) return pW;
        const [OW, mW] = iW.icon;
        return pW * (OW / mW)
      }(WW.icon) + DW.HORIZONTAL_PADDING;
      const OW = GW(WW);
      return function(WW, iW, OW) {
        return OW.font = iW, OW.measureText(WW).width
      }(rW(WW), OW, iW)
    }

    function QW(WW) {
      return BW(WW) || qW(WW)
    }

    function Wi(WW, iW) {
      const OW = QW(WW),
        mW = QW(iW);
      return void 0 === WW && !mW || !OW && void 0 === iW ? 0 : OW !== mW ? .5 * DW.HORIZONTAL_PADDING : 0
    }
    let ii;

    function Oi() {
      return ii ??= document.createElement("canvas").getContext("2d"), ii
    }
    const mi = () => 0;

    function Ei(WW, iW, OW, mW, EW) {
      let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mi;
      iW += Wi(void 0, WW[0]);
      for (let PW = 0; PW < WW.length; PW++) {
        const LW = WW[PW],
          cW = Ni(LW, iW, OW, mW, EW, void 0, NW);
        iW += 0 === cW ? 0 : cW + Wi(LW, WW[PW + 1])
      }
    }

    function Ni(WW, iW, OW, mW, EW, PW) {
      var ZW;
      let xW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mi;
      if (qW(WW)) {
        const mW = wi(WW);
        return function(WW, iW, OW, mW, EW) {
          var NW;
          let PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : mi;
          const ZW = (0, tW.k)(EW);
          OW += DW.VERTICAL_PADDING / 2;
          const xW = PW(),
            lW = (0, nW.l)(WW.icon),
            AW = WW => {
              if (xW === PW())
                if (ZW.imageSmoothingEnabled = lW, lW && WW.width > WW.height) {
                  const EW = mW * WW.height / WW.width;
                  ZW.drawImage(WW, iW, OW + (mW - EW) / 2, mW, EW)
                } else ZW.drawImage(WW, iW, OW, mW, mW)
            };
          if (gW[WW.icon]) return void AW(gW[WW.icon]);
          if (vW[WW.icon]) {
            const iW = vW[WW.icon];
            if (iW.complete) return void AW(iW)
          }
          const bW = (0, uW.j)(WW.icon, mW);
          if (bW) return void AW(bW);
          const jW = function(WW) {
              const iW = (0, nW.i)(WW);
              if (null !== iW) return {
                url: iW,
                type: "padGlyph"
              };
              if (LW.c.includes(WW)) return {
                url: JW.d.getTexture(WW, TW.g.ICON).url,
                type: "ingameIcon"
              };
              {
                var OW;
                const iW = null === (OW = wW.l.itemsClient[WW]) || void 0 === OW ? void 0 : OW.type;
                return ci.includes(iW) ? (console.error(new Error(`Invalid icon type ${iW} is not supported in nametags`).stack), {
                  url: "",
                  type: ""
                }) : (0, oW.c)(iW) ? {
                  url: "",
                  type: iW
                } : "GrayscaleArmour" === iW || cW.b[WW] ? {
                  url: (0, dW.f)(WW),
                  type: iW,
                  tint: (0, cW.c)(WW)
                } : {
                  url: (0, dW.f)(WW),
                  type: iW
                }
              }
            }(WW.icon),
            UW = jW.tint;
          let sW = jW.url;
          if ((0, oW.c)(null === (NW = wW.l.itemsClient[WW.icon]) || void 0 === NW ? void 0 : NW.type)) {
            const iW = WW.icon;
            if (!wW.l.itemsClient[iW].itemTexture) return void(0, uW.g)(iW, mW).then((WW => {
              AW(WW), (0, kW.l)(EW)
            }), (() => {}));
            sW = (0, dW.f)(iW)
          }
          if (!sW) return;
          const MW = new Image;
          lW && (MW.crossOrigin = "anonymous");
          if (MW.src = sW, UW) return void(MW.onload = () => {
            const iW = function(WW, iW) {
              let [OW, mW, EW] = iW;
              const NW = document.createElement("canvas");
              NW.width = WW.naturalWidth, NW.height = WW.naturalHeight;
              const PW = NW.getContext("2d");
              return PW.drawImage(WW, 0, 0), PW.globalCompositeOperation = "multiply", PW.fillStyle = `rgb(${OW}, ${mW}, ${EW})`, PW.fillRect(0, 0, NW.width, NW.height), PW.globalCompositeOperation = "destination-in", PW.drawImage(WW, 0, 0), NW
            }(MW, UW);
            gW[WW.icon] = iW, AW(iW), (0, kW.l)(EW)
          });
          vW[WW.icon] = MW, MW.onload = () => {
            AW(MW), (0, kW.l)(EW)
          }
        }(WW, iW, OW, mW, EW, xW), mW
      }
      const lW = (0, tW.k)(EW);
      if (RW(WW)) {
        const EW = null !== PW && void 0 !== PW ? PW : FW(WW, lW);
        return function(WW, iW, OW, mW, EW, NW) {
          var PW, LW;
          NW.fillStyle = WW.mainRGB, NW.fillRect(iW, OW, mW, EW);
          const cW = IW(WW.icon);
          if (!cW) return;
          const wW = (null === (PW = WW.nameTag) || void 0 === PW ? void 0 : PW.iconRGB) || "white",
            tW = (null === (LW = WW.nameTag) || void 0 === LW ? void 0 : LW.iconShadowRGB) || "black",
            [ZW, xW, , , lW] = cW.icon,
            AW = "string" === typeof lW ? lW : lW.join(" "),
            bW = pW / xW,
            jW = iW + (mW - ZW * bW) / 2,
            UW = OW + (EW - pW) / 2,
            kW = new Path2D(AW),
            sW = NW;
          for (const MW of [-1, 1])
            for (const WW of [-1, 1]) Pi(sW, kW, jW + DW.TEXT_SHADOW_WIDTH * MW, UW + DW.TEXT_SHADOW_WIDTH * WW, bW, tW);
          Pi(sW, kW, jW, UW, bW, wW)
        }(WW, iW, OW, EW, mW, lW), EW
      }
      const AW = rW(WW);
      if (0 === AW.length) return 0;
      const bW = GW(WW);
      lW.font = bW;
      const jW = null !== PW && void 0 !== PW ? PW : FW(WW, lW),
        UW = BW(WW) && null !== (ZW = (0, NW.cc)(WW.style)) && void 0 !== ZW ? ZW : "white";
      let sW = OW + mW;
      return sW -= DW.VERTICAL_PADDING, sW += BW(WW) ? 5 : 0,
        function(WW, iW, OW, mW, EW, NW, PW) {
          let LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : DW.TEXT_SHADOW_WIDTH;
          for (const cW of [-1, 1])
            for (const EW of [-1, 1]) Li(PW, WW, iW + LW * cW, OW + LW * EW, mW, NW);
          Li(PW, WW, iW, OW, mW, EW)
        }(AW, iW, sW, bW, UW, "black", lW), jW
    }

    function Pi(WW, iW, OW, mW, EW, NW) {
      WW.save(), WW.translate(OW, mW), WW.scale(EW, EW), WW.fillStyle = NW, WW.fill(iW), WW.restore()
    }

    function Li(WW, iW, OW, mW, EW, NW) {
      WW.font = EW, WW.fillStyle = NW, WW.fillText(iW, OW, mW)
    }
    const ci = ["Gun"];

    function wi(WW) {
      if (BW(WW) || qW(WW)) {
        var iW, OW;
        const mW = null !== (iW = null === (OW = WW.style) || void 0 === OW ? void 0 : OW.fontSize) && void 0 !== iW ? iW : `${DW.DEFAULT_FONT_SIZE}px`;
        return Number(mW.replace("px", "")) || DW.DEFAULT_FONT_SIZE
      }
      return DW.DEFAULT_FONT_SIZE
    }

    function ti(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
        NW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
      const PW = WW.TZ.bD(),
        LW = (0, kW.g)(WW, `${OW}Tex`, mW, EW, {
          mipped: ZW.k.nearestLinearMipLinear,
          unmipped: ZW.k.nearestLinearMipNearest
        }),
        cW = (0, xW.r)(WW.TZ, OW, (0, lW.f)({
          width: 1,
          height: 1
        }));
      cW.metadata = new WW.TZ.Qb, cW.metadata[AW.E] = !0, cW.billboardMode = bW.e.BILLBOARDMODE_ALL, cW.renderingGroupId = jW.c;
      const wW = WW.EY.add([0, 0, 0], 1, 1, cW, [0, 0, 0]);
      let tW;
      WW.EY.zD(wW, WW.EY.names.qS, {
        MA: iW
      });
      const {
        mirror: KW
      } = (0, sW.b)({
        name: `${OW}Mat`,
        rb: PW,
        sets: {
          specularColor: [0, 0, 0],
          ambientColor: [1.3, 1.3, 1.3],
          emissiveColor: [1, 1, 1],
          ...(0, kW.k)(LW)
        },
        features: iW => {
          (0, kW.c)(iW, "planes"), tW = (0, MW.e)(iW, WW.TZ, NW ? {
            x: 1,
            y: 1,
            z: 1,
            w: 1
          } : void 0)
        },
        unrendered: !0,
        freeze: !0
      });
      return cW.material = KW, NW ? WW.EY.XiW(wW).dLW = !1 : (0, UW.d)(cW), cW.jD.add((() => {
        KW.dispose(!1, !0)
      })), {
        planeEId: wW,
        plane: cW,
        texture: LW,
        lightState: tW
      }
    }

    function Zi(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const EW = (0, jW.r)(iW, OW, mW);
      return WW.renderingGroupId = EW ? jW.c : jW.k, EW
    }
  },
  39913: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => wW,
      g: () => PW,
      k: () => cW,
      l: () => LW
    });
    var mW = OW(38437),
      EW = OW(38419),
      NW = OW(39915);

    function PW(WW, iW, OW, EW, NW) {
      const PW = function(WW) {
          return !WW.TZ.engine.needPOTTextures
        }(WW),
        LW = PW ? NW.mipped : NW.unmipped;
      return (0, mW.o)(WW.TZ.bD(), iW, {
        width: OW,
        height: EW,
        mipmaps: PW,
        samplingMode: LW,
        hasAlpha: !0
      })
    }

    function LW(WW) {
      (0, mW.Y)(WW, !0, !WW.sampler.noMipmap)
    }

    function cW(WW) {
      return {
        diffuseTexture: WW,
        useAlphaFromDiffuseTexture: !0,
        transparencyMode: EW.n.alphaTestAndBlend,
        alphaCutOff: .05,
        alphaMode: EW.b.premultiplied,
        forceDepthWrite: !0
      }
    }

    function wW(WW, iW) {
      WW.diffuseTexture.sampler.noMipmap || (0, EW.q)(WW, NW.d, {
        lodBias: NW.b[iW]
      })
    }
  },
  39976: (WW, iW, OW) => {
    function mW(WW, iW) {
      return "object" === typeof WW && null !== WW ? Object.assign(WW, {
        startStep: iW
      }) : WW
    }

    function EW(WW) {
      return "object" === typeof WW && null !== WW && "startStep" in WW ? WW.startStep : null
    }
    OW.d(iW, {
      d: () => EW,
      f: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);