export const id = 32;
export const ids = [32];
export const modules = {
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
  5364: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => rU,
      g: () => SU
    });
    var cU = zU(5369),
      yU = zU(320);
    const QU = 120,
      AU = 260,
      FU = 1.15,
      oU = 1.2,
      DU = 2,
      EU = 1.08,
      YU = .8,
      NU = .95,
      IU = 8,
      pU = "[\"')\\]\u300d\u300f\uff09]*",
      aU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pU}$`),
      tU = new RegExp(`[?\uff1f]${pU}$`),
      gU = new RegExp(`[!\uff01]${pU}$`),
      kU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      GU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      BU = new RegExp(`[${GU}]`),
      ZU = new RegExp(`[${GU}]|[^${GU}]+`, "g"),
      RU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function PU(UU) {
      let XU = 2166136261;
      for (let zU = 0; zU < UU.length; zU++) XU ^= UU.charCodeAt(zU), XU = Math.imul(XU, 16777619);
      return (XU >>> 0) / 4294967295 * 2 - 1
    }

    function WU(UU) {
      var XU;
      if (BU.test(UU)) return 1;
      const zU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        cU = zU.replace(/[^0-9]/g, "");
      if (cU.length > 0 && !/\p{L}/u.test(zU)) return Math.min(cU.length, 4);
      const yU = null !== (XU = zU.match(RU)) && void 0 !== XU ? XU : [];
      if (0 === yU.length) {
        var QU, AU;
        const UU = null !== (QU = null === (AU = zU.match(/\p{L}/gu)) || void 0 === AU ? void 0 : AU.length) && void 0 !== QU ? QU : 0;
        return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), IU)
      }
      const FU = zU.replace(/[^\p{L}]/gu, ""),
        oU = yU.length > 1 && "e" === yU.at(-1) && FU.endsWith("e") && !FU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
      return Math.min(yU.length - (oU ? 1 : 0), IU)
    }

    function dU(UU) {
      return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function LU(UU) {
      const XU = UU.replace(/[^\p{L}]/gu, "");
      return XU.length >= 2 && XU === XU.toUpperCase() && XU !== XU.toLowerCase()
    }

    function eU(UU, XU) {
      var zU;
      const IU = XU && (0, cU.l)(XU),
        pU = null !== (zU = null === IU || void 0 === IU ? void 0 : IU.syllableMs) && void 0 !== zU ? zU : cU.e,
        GU = function(UU) {
          const XU = [];
          for (const cU of (0, yU.rc)(UU))
            if ("string" === typeof cU)
              for (const UU of cU.split(/(\s+)/)) {
                if ("" === UU) continue;
                if (/^\s+$/.test(UU)) {
                  XU.push({
                    kind: "space",
                    text: UU
                  });
                  continue
                }
                if (!BU.test(UU)) {
                  XU.push({
                    kind: "word",
                    text: UU,
                    delayMs: 0
                  });
                  continue
                }
                let cU = !0;
                for (const yU of null !== (zU = UU.match(ZU)) && void 0 !== zU ? zU : []) {
                  var zU;
                  const UU = XU.at(-1);
                  cU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || BU.test(yU) || /[\p{L}\p{N}]/u.test(yU) ? (cU || XU.push({
                    kind: "space",
                    text: "\u200b"
                  }), XU.push({
                    kind: "word",
                    text: yU,
                    delayMs: 0
                  }), cU = !1) : UU.text += yU
                }
              } else XU.push({
                kind: "icon",
                text: cU.icon,
                delayMs: 0
              });
          return XU
        }(UU),
        RU = [];
      let eU = [];
      for (const cU of GU) "space" !== cU.kind && (eU.push(cU), aU.test(cU.text) && (RU.push(eU), eU = []));
      RU.push(eU);
      const CU = [];
      let wU = 0;
      for (const cU of RU) {
        var qU, OU;
        const UU = null !== (qU = null === (OU = cU.at(-1)) || void 0 === OU ? void 0 : OU.text) && void 0 !== qU ? qU : "",
          XU = tU.test(UU),
          zU = gU.test(UU),
          yU = cU.map((UU => "word" === UU.kind ? WU(UU.text) : 1)),
          GU = yU.findLastIndex((UU => UU > 0));
        for (const [tU, gU] of cU.entries()) {
          const UU = "word" === gU.kind,
            cU = yU[tU];
          gU.delayMs = wU;
          for (let yU = 0; IU && yU < cU; yU++) {
            const {
              intonation: QU
            } = IU;
            let AU = GU > 0 ? -QU.declineSemitones * (tU / GU) : 0;
            AU += PU(`${dU(gU.text)}|${yU}`) * QU.variationSemitones;
            const aU = Math.min(1, QU.variationSemitones);
            let kU = IU.glideSemitones,
              BU = 1;
            zU && (AU += QU.exclaimLiftSemitones, BU *= FU), XU && tU === GU && (AU += QU.questionRiseSemitones * (cU > 1 ? .5 + .5 * yU / (cU - 1) : 1), yU === cU - 1 && (kU = Math.abs(kU) + QU.questionRiseSemitones / 2)), UU && LU(gU.text) && (AU += DU * aU, BU *= oU), cU > 1 && 0 === yU && (AU += YU * aU, BU *= EU), CU.push({
              atMs: wU + yU * pU,
              semitones: AU,
              glideSemitones: kU,
              durationMs: yU < cU - 1 ? Math.min(IU.durationMs, pU * NU) : IU.durationMs,
              level: BU
            })
          }
          wU += cU * pU + (aU.test(gU.text) ? AU : kU.test(gU.text) ? QU : 0)
        }
      }
      return {
        pieces: GU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
          kind: "icon",
          icon: UU.text,
          delayMs: UU.delayMs
        } : {
          kind: "word",
          text: UU.text,
          delayMs: UU.delayMs
        })),
        blips: CU
      }
    }
    var CU = zU(1193),
      wU = zU(1266),
      qU = zU(2012);

    function OU(UU) {
      if ("string" === typeof UU) return UU;
      const XU = wU.h.get().getCurrentLanguageCode();
      return (0, CU.t)(XU, UU.translationKey, (0, CU.p)(UU.params, qU.c.shown))
    }

    function SU(UU) {
      const XU = void 0 === UU.voice ? null : (0, cU.o)(UU.voice),
        zU = XU && (0, cU.l)(XU);
      return {
        plan: eU(OU(UU.line), zU),
        synth: zU
      }
    }

    function rU(UU) {
      const XU = [];
      let zU = [];
      for (const [yU, QU] of UU.entries()) {
        var cU;
        "space" === QU.kind && (" " !== QU.text || "icon" !== (null === (cU = UU[yU + 1]) || void 0 === cU ? void 0 : cU.kind)) ? (zU.length > 0 && XU.push(zU), XU.push([QU]), zU = []) : zU.push(QU)
      }
      return zU.length > 0 && XU.push(zU), XU
    }
  },
  5374: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => EU,
      e: () => YU
    });
    var cU = zU(5378),
      yU = zU(27);
    const QU = .25,
      AU = .85,
      FU = .02,
      oU = .01;

    function DU(UU, XU, zU, cU, yU, QU, FU) {
      const {
        waveform: oU,
        pitchHz: DU,
        attackMs: EU,
        releaseMs: YU,
        lowpassHz: NU
      } = zU, IU = yU + cU.durationMs / 1e3, pU = DU * 2 ** (cU.semitones / 12), aU = UU.createOscillator();
      aU.type = oU, aU.frequency.setValueAtTime(pU, yU), aU.frequency.exponentialRampToValueAtTime(pU * 2 ** (cU.glideSemitones / 12), IU);
      const tU = yU + Math.min(EU, cU.durationMs) / 1e3,
        gU = UU.createGain();
      gU.gain.setValueAtTime(0, yU), gU.gain.linearRampToValueAtTime(QU, tU), gU.gain.linearRampToValueAtTime(QU * AU, Math.max(tU, IU - YU / 1e3)), gU.gain.linearRampToValueAtTime(0, IU);
      const kU = [aU];
      if (null !== NU) {
        const XU = UU.createBiquadFilter();
        XU.type = "lowpass", XU.frequency.value = NU, kU.push(XU)
      }
      kU.push(gU, XU);
      for (let AU = 1; AU < kU.length; AU++) kU[AU - 1].connect(kU[AU]);
      return aU.onended = () => {
        for (const UU of kU.slice(0, -1)) UU.disconnect();
        FU()
      }, aU.start(yU), aU.stop(IU), aU
    }

    function EU(UU, XU, zU, cU, yU, AU) {
      if (0 === cU.length) return AU(), () => {};
      const EU = QU * zU.volume * yU,
        YU = UU.createGain();
      YU.connect(XU);
      const NU = UU.currentTime + FU,
        IU = new Set;
      for (const QU of cU) {
        const XU = DU(UU, YU, zU, QU, NU + QU.atMs / 1e3, EU * QU.level, (() => {
          IU.delete(XU), 0 === IU.size && (YU.disconnect(), AU())
        }));
        IU.add(XU)
      }
      return () => {
        const XU = UU.currentTime;
        YU.gain.setTargetAtTime(0, XU, oU);
        for (const UU of IU) try {
          UU.stop(XU + 5 * oU)
        } catch {}
      }
    }

    function YU(UU, XU) {
      var zU;
      const QU = cU.Howler.ctx,
        AU = cU.Howler.masterGain;
      if (!QU || !AU || !yU.e.get("soundOnFromAd")) return () => {};
      const FU = cU.Howler;
      return null === (zU = FU._autoResume) || void 0 === zU || zU.call(FU), EU(QU, AU, UU, XU, yU.e.get("soundVolume"), (() => {
        var UU;
        null === (UU = FU._autoSuspend) || void 0 === UU || UU.call(FU)
      }))
    }
  },
  39983: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      closeClientGame: () => YX,
      createDefaultClientPlugins: () => EX
    });
    var cU = zU(344);

    function yU() {
      let UU;
      return {
        onCreate(XU) {
          UU = XU
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(XU, zU, yU, QU, AU, FU) {
          var oU, DU;
          if ("Iron Chest" !== UU.getMetaInfo(AU).rootName) return;
          if (!UU.hasEffect(XU, "Thief")) return;
          const EU = UU.getBlockData(zU, yU, QU);
          return UU.getPlayerDbId(XU) !== (null === EU || void 0 === EU || null === (oU = EU.persisted) || void 0 === oU || null === (DU = oU.shared) || void 0 === DU ? void 0 : DU.ownerDbId) ? (UU.sendMessage(XU, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: cU.H.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var QU = zU(4608),
      AU = zU(1258);
    const FU = 8.4,
      oU = 1e-4,
      DU = .15,
      EU = .04,
      YU = [.12, .04, .12],
      NU = 26,
      IU = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        xY: 1,
        minLifeTime: oU,
        maxLifeTime: oU,
        minSize: .55,
        maxSize: .55,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 0,
        colorGradients: [{
          timeFraction: 0,
          minColor: [255, 255, 255, 1]
        }, {
          timeFraction: 1,
          minColor: [0, 0, 0, 1]
        }],
        blendMode: QU.f.Standard
      },
      pU = {
        texture: "bubble",
        mipmaps: !1,
        xY: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: NU,
        gravity: [0, .3, 0],
        dir1: [-.3, .3, -.3],
        dir2: [.3, .7, .3],
        colorGradients: [{
          timeFraction: 0,
          minColor: [216.75, 242.25, 255, 1]
        }, {
          timeFraction: .4,
          minColor: [216.75, 242.25, 255, .9]
        }, {
          timeFraction: 1,
          minColor: [178.5, 229.5, 255, 0]
        }],
        blendMode: QU.f.Standard
      },
      aU = [0, 0, 0],
      tU = [0, 0, 0];

    function gU(UU) {
      const XU = new Map;
      let zU = null;

      function cU(UU) {
        var XU, zU;
        null === (XU = UU.bubbles) || void 0 === XU || XU.stop(), null === (zU = UU.fish) || void 0 === zU || zU.stop()
      }

      function yU(zU) {
        if (!zU.readDrawnPosition(UU, tU)) {
          for (const UU of XU.values()) {
            var cU;
            null === (cU = UU.bubbles) || void 0 === cU || cU.setEmitRate(0)
          }
          return
        }
        const yU = performance.now();
        for (const [UU, AU] of XU) {
          var QU;
          if (null === (QU = AU.bubbles) || void 0 === QU || QU.setEmitRate(0), !zU.readDrawnPosition(UU, aU)) continue;
          if (!((aU[0] - tU[0]) ** 2 + (aU[1] - tU[1]) ** 2 + (aU[2] - tU[2]) ** 2 < 900)) continue;
          const XU = Math.max(0, AU.biteAt - yU),
            cU = AU.approachDurationMs > 0 ? Math.min(1, 1 - XU / AU.approachDurationMs) : 1,
            oU = (AU.approachDurationMs - XU) / 1e3,
            gU = AU.phase + .25 * Math.sin(1.7 * oU + AU.phase),
            kU = Math.min(AU.approachDurationMs / 3e3 * 2.8, FU) * (1 - cU) * (1 + .15 * Math.sin(2.1 * oU + AU.phase)),
            GU = Math.min(1, 4 * (1 - cU)),
            BU = (.45 * Math.sin(4.1 * oU + AU.phase) + .18 * Math.sin(9.7 * oU + 2 * AU.phase)) * GU,
            ZU = aU[0] + Math.cos(gU) * kU - Math.sin(gU) * BU,
            RU = Math.ceil(AU.surfaceY),
            PU = aU[2] + Math.sin(gU) * kU + Math.cos(gU) * BU,
            {
              fishAt: WU,
              bubblesAt: dU
            } = AU;
          WU[0] = dU[0] = ZU, WU[1] = RU + DU, dU[1] = RU + EU, WU[2] = dU[2] = PU, AU.fish ??= zU.createParticles(IU, {
            pos: WU
          }), AU.fish.moveTo(WU), AU.fish.emit(1), AU.bubbles ??= zU.createParticles(pU, {
            pos: dU,
            half: YU
          }), AU.bubbles.moveTo(dU), AU.bubbles.setEmitRate(NU + 32 * (.5 + .5 * Math.sin(9 * oU + AU.phase)) ** 4 + 13 * cU)
        }
      }
      return {
        onCreate(UU) {
          zU = UU
        },
        onAfterRender() {
          zU && yU(zU)
        },
        onClose() {
          for (const UU of XU.values()) cU(UU);
          XU.clear(), zU = null
        },
        onReceivedMessageFromServer(UU, zU) {
          if (UU !== AU.B) return;
          const {
            hookId: yU,
            waiting: QU
          } = zU;
          if (QU) XU.has(yU) || XU.set(yU, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + QU.remainingMs,
            approachDurationMs: QU.durationMs,
            surfaceY: QU.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const UU = XU.get(yU);
            UU && cU(UU), XU.delete(yU)
          }
        }
      }
    }
    var kU = zU(5374),
      GU = zU(5364);

    function BU(UU) {
      let XU, zU = null,
        cU = null;
      const yU = () => {
        var UU;
        null === (UU = cU) || void 0 === UU || UU(), cU = null
      };
      return {
        onCreate(cU) {
          XU = cU, zU = XU.getClientOption(UU, "dialogue")
        },
        onAfterRender() {
          if (!XU) return;
          const QU = XU.getClientOption(UU, "dialogue");
          if (QU === zU) return;
          if (zU = QU, yU(), !QU || !1 === QU.animateIn) return;
          const {
            plan: AU,
            synth: FU
          } = (0, GU.g)(QU);
          FU && (cU = (0, kU.e)(FU, AU.blips))
        },
        onClose: yU
      }
    }
    var ZU = zU(39988);
    const RU = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      PU = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      WU = [0, 1, 2, 0, 2, 3];

    function dU(UU, XU, zU) {
      var cU;
      let [yU, QU, AU] = XU;
      if (UU.hasPackModel("Furnace")) return null;
      const FU = ((null !== (cU = UU.getMetaInfo(zU).rot) && void 0 !== cU ? cU : 1) - 1) * Math.PI / 2,
        oU = Math.PI + FU,
        DU = Math.cos(oU),
        EU = Math.sin(oU),
        YU = [];
      for (const [pU, aU] of RU) YU.push(pU * DU, aU, -pU * EU);
      const NU = {
          positions: YU,
          indices: WU,
          uvs: PU
        },
        IU = [yU + .5 + .51 * Math.sin(FU), QU + .375, AU + .5 + .51 * Math.cos(FU)];
      return UU.createGameMesh(NU, {
        kind: "furnaceFire"
      }, IU)
    }

    function LU(UU) {
      return Math.floor(UU / 200) % 3
    }

    function eU(UU, XU, zU) {
      UU.setGameMesh(XU, {
        uvOffset: [0, zU / 3]
      })
    }
    const CU = [.12, .025, .12],
      wU = [{
        style: {
          colours: [
            [176, 176, 182],
            [128, 128, 134]
          ],
          alpha: .6,
          size: [.18, .32],
          life: [1.6, 2.6],
          power: [.5, .8],
          lift: .12,
          spread: .12,
          count: 6,
          blendMode: QU.f.Standard,
          soft: !0
        },
        perSecond: 7
      }, {
        style: {
          colours: [
            [255, 190, 80],
            [255, 110, 35]
          ],
          alpha: 1,
          size: [.04, .07],
          life: [.6, 1.1],
          power: [1, 1.8],
          lift: -.6,
          spread: .35,
          count: 10,
          blendMode: QU.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class qU {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(UU, XU) {
        const zU = UU.getBlockId(XU[0], XU[1], XU[2]);
        if ("Furnace" !== UU.getMetaInfo(zU).rootName) return;
        const cU = performance.now();
        let yU = this.smokes.find((UU => UU.pos[0] === XU[0] && UU.pos[1] === XU[1] && UU.pos[2] === XU[2] && UU.yF === zU));
        if (yU || (yU = {
            pos: [XU[0], XU[1], XU[2]],
            yF: zU,
            endMs: cU,
            lastBurstMs: -1 / 0,
            pending: new Array(wU.length).fill(0),
            fire: dU(UU, XU, zU)
          }, this.smokes.push(yU), null !== yU.fire && (eU(UU, yU.fire, LU(cU)), this.shownFireFrame = -1)), yU.endMs = cU + 6e3, this.smokes.length > 4) {
          const XU = this.smokes.reduce(((UU, XU) => XU.endMs < UU.endMs ? XU : UU));
          OU(UU, XU), this.smokes.splice(this.smokes.indexOf(XU), 1)
        }
        cU - yU.lastBurstMs >= 300 && (yU.lastBurstMs = cU, wU.forEach(((UU, XU) => {
          yU.pending[XU] += UU.style.count
        })))
      }
      onAfterRender(UU, XU) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const zU = performance.now();
        this.smokes = this.smokes.filter((XU => {
          const [cU, yU, QU] = XU.pos, AU = zU < XU.endMs && UU.getBlockId(cU, yU, QU) === XU.yF;
          return AU || OU(UU, XU), AU
        }));
        const cU = LU(zU);
        if (cU !== this.shownFireFrame) {
          this.shownFireFrame = cU;
          for (const XU of this.smokes) null !== XU.fire && eU(UU, XU.fire, cU)
        }
        if (!UU.particlesEnabled()) {
          for (const UU of this.smokes) UU.pending.fill(0);
          return
        }
        const yU = Math.min(XU, 250) / 1e3;
        for (const QU of this.smokes) {
          const [XU, cU, AU] = QU.pos;
          if (0 !== UU.getBlockId(XU, cU + 1, AU)) {
            QU.pending.fill(0);
            continue
          }
          const FU = (QU.endMs - zU) / 6e3,
            oU = this.centre;
          oU[0] = XU + .5, oU[1] = cU + 1.275, oU[2] = AU + .5, wU.forEach(((XU, zU) => {
            QU.pending[zU] += XU.perSecond * FU * yU;
            const cU = Math.floor(QU.pending[zU]);
            cU > 0 && this.emit(UU, zU, oU, cU) && (QU.pending[zU] -= cU)
          }))
        }
      }
      dispose(UU) {
        for (const zU of this.smokes) OU(UU, zU);
        this.smokes = [];
        for (const zU of null !== (XU = this.puffers) && void 0 !== XU ? XU : []) {
          var XU;
          zU.dispose()
        }
        this.puffers = null
      }
      emit(UU, XU, zU, cU) {
        return this.puffers ??= wU.map((UU => {
          let {
            style: XU,
            perSecond: zU
          } = UU;
          const cU = (XU.count / .3 + zU) * XU.life[1];
          return new ZU.f(XU, Math.ceil(4 * cU), CU)
        })), this.puffers[XU].emit(UU, zU, this.renderFrame, cU)
      }
    }

    function OU(UU, XU) {
      null !== XU.fire && (UU.disposeGameMesh(XU.fire), XU.fire = null)
    }

    function SU() {
      let UU;
      const XU = new qU;
      return {
        onCreate(XU) {
          UU = XU
        },
        onReceivedMessageFromServer(zU, cU) {
          zU === AU.C && XU.start(UU, cU)
        },
        onAfterRender(zU) {
          XU.onAfterRender(UU, zU)
        },
        onClose() {
          XU.dispose(UU)
        }
      }
    }
    var rU = zU(212),
      uU = zU(39954),
      fU = zU(39994),
      iU = zU(39999);
    class HU {
      constructor(UU, XU, zU) {
        this.api = UU, this.wearer = XU, this.name = zU, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new iU.c, this.shown = !1, this.raised = 0
      }
      update(UU) {
        var XU;
        const zU = (0, uU.k)(this.name);
        if (!zU) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === zU.model && this.madeFrom.scale === zU.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(zU.model, zU.scale), this.madeFrom = zU, !this.model)) return void this.raiseNametag(0);
        if (!(UU.drawn && !UU.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const cU = this.motion.step({
          dt: UU.dt,
          feet: UU.feet,
          heading: UU.heading,
          headTopY: UU.headTopY,
          tuning: zU,
          timeS: UU.timeS
        });
        this.model.setPose(cU.pos, cU.yaw + Math.PI), this.model.setClip(null !== (XU = cU.clip) && void 0 !== XU ? XU : null);
        const yU = cU.seated ? zU : null;
        yU !== this.perchedWith && (this.perchedWith = yU, this.model.setPerch(yU && {
          FX: this.wearer,
          offset: yU.perchOffset,
          yaw: yU.yawOffset
        })), this.setShown(!0), this.raiseNametag(zU.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(UU) {
        UU !== this.raised && (this.raised = UU, this.api.setNametagOffset(this.wearer, UU))
      }
      freeModel() {
        var UU;
        null === (UU = this.model) || void 0 === UU || UU.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(UU) {
        this.model && UU !== this.shown && (this.shown = UU, this.model.setVisible(UU))
      }
    }
    class MU {
      constructor(UU, XU) {
        this.api = UU, this.name = XU, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(UU) {
        const XU = (0, uU.g)(this.name);
        if (XU !== this.madeFrom && this.stop(), !XU) return;
        const zU = UU.ownFirstPerson ? XU.ownInFirstPerson : UU.drawn;
        if (zU) {
          const {
            centre: zU
          } = this;
          if ((0, iU.g)(zU, UU.feet, XU.offset, Math.sin(UU.heading), Math.cos(UU.heading)), this.particles) this.particles.moveTo(zU, this.half);
          else {
            const UU = (0, fU.c)(XU);
            this.half = UU.half, this.particles = this.api.createParticles(UU.opts, {
              pos: zU,
              half: UU.half
            }), this.madeFrom = XU, this.emitting = !0
          }
        }
        this.particles && zU !== this.emitting && (this.emitting = zU, this.particles.setEmitRate(zU ? XU.particles.emitRate : 0))
      }
      stop() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const vU = .25,
      VU = 48,
      sU = 4,
      nU = 24,
      mU = 12,
      lU = .6,
      xU = 1 / rU.f.playerEyeToHeightRatio;

    function JU(UU, XU, zU) {
      const cU = UU.filter((UU => UU[XU] <= VU));
      return cU.sort(((UU, zU) => UU[XU] - zU[XU])), new Set(cU.slice(0, zU).map((UU => UU.id)))
    }

    function jU() {
      let UU;
      const XU = new Map;
      let zU = 0,
        cU = 0;
      const yU = [0, 0, 0],
        QU = {
          feet: yU,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function AU(UU) {
        var XU, zU;
        null === (XU = UU.pet) || void 0 === XU || XU.dispose(), null === (zU = UU.aura) || void 0 === zU || zU.stop()
      }

      function FU(XU, zU) {
        var cU, AU;
        const {
          id: FU
        } = XU, oU = UU.readDrawnPosition(FU, yU) ? UU.getDrawnHeading(FU) : null, DU = null === oU ? null : UU.getDrawnEyeHeight(FU);
        if (null === oU || null === DU) QU.drawn = !1, QU.ownFirstPerson = !1;
        else {
          const XU = zU.cameraPosition;
          QU.heading = oU, QU.headTopY = yU[1] + DU * xU, QU.drawn = UU.isAlive(FU) && UU.isEntityDrawn(FU), QU.ownFirstPerson = UU.isLocalPlayer(FU) && UU.isAlive(FU) && Math.hypot(XU[0] - yU[0], XU[1] - yU[1] - DU, XU[2] - yU[2]) < lU
        }
        null === (cU = XU.pet) || void 0 === cU || cU.update(QU), null === (AU = XU.aura) || void 0 === AU || AU.update(QU)
      }
      return {
        onCreate(XU) {
          UU = XU
        },
        onAfterRender(oU, DU) {
          const EU = oU / 1e3;
          cU += EU, zU -= EU, zU <= 0 && (zU = vU, function(zU) {
            const cU = [];
            for (const AU of UU.getPlayerIds()) {
              const QU = UU.getPlayerCosmetics(AU),
                FU = void 0 !== (null === QU || void 0 === QU ? void 0 : QU.pet) && (0, uU.k)(QU.pet) ? QU.pet : null,
                oU = void 0 !== (null === QU || void 0 === QU ? void 0 : QU.aura) && (0, uU.g)(QU.aura) ? QU.aura : null;
              if (null === FU && null === oU || !UU.readDrawnPosition(AU, yU)) continue;
              const DU = Math.hypot(yU[0] - zU[0], yU[1] - zU[1], yU[2] - zU[2]),
                EU = XU.get(AU);
              cU.push({
                id: AU,
                pet: FU,
                aura: oU,
                petDist: null === FU ? 1 / 0 : DU - (null !== EU && void 0 !== EU && EU.pet ? sU : 0),
                auraDist: null === oU ? 1 / 0 : DU - (null !== EU && void 0 !== EU && EU.aura ? sU : 0)
              })
            }
            const QU = JU(cU, "petDist", nU),
              FU = UU.particlesEnabled() ? JU(cU, "auraDist", mU) : new Set,
              oU = new Set;
            for (const {
                id: yU,
                pet: AU,
                aura: aU
              }
              of cU) {
              var DU, EU, YU;
              const zU = null !== (DU = XU.get(yU)) && void 0 !== DU ? DU : {
                  id: yU,
                  pet: null,
                  aura: null
                },
                cU = QU.has(yU) ? AU : null,
                tU = FU.has(yU) ? aU : null;
              var NU, IU, pU;
              (null === (EU = zU.pet) || void 0 === EU ? void 0 : EU.name) !== cU ? (null === (NU = zU.pet) || void 0 === NU || NU.dispose(), zU.pet = null === cU ? null : new HU(UU, yU, cU)) : null === (IU = zU.pet) || void 0 === IU || IU.refreshNametag(), (null === (YU = zU.aura) || void 0 === YU ? void 0 : YU.name) !== tU && (null === (pU = zU.aura) || void 0 === pU || pU.stop(), zU.aura = null === tU ? null : new MU(UU, tU)), (zU.pet || zU.aura) && (XU.set(yU, zU), oU.add(yU))
            }
            for (const [UU, yU] of XU) oU.has(UU) || (AU(yU), XU.delete(UU))
          }(DU.cameraPosition)), QU.dt = EU, QU.timeS = cU;
          for (const UU of XU.values()) FU(UU, DU)
        },
        onClose() {
          for (const UU of XU.values()) AU(UU);
          XU.clear()
        }
      }
    }
    var KU = zU(9291);
    const bU = "skyblockLoot",
      TU = "autoPickupClick";
    var hU = zU(1709);

    function UX(UU, XU) {
      return [{
        timeFraction: 0,
        minColor: [255 * UU[0], 255 * UU[1], 255 * UU[2], 1],
        maxColor: [255 * XU[0], 255 * XU[1], 255 * XU[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const XX = [0, 0, 0],
      zX = {
        texture: "glint",
        mipmaps: !1,
        xY: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: XX,
        dir2: XX,
        blendMode: QU.f.OneOne
      },
      cX = {
        ...zX,
        colorGradients: UX([1, .88, .38], [1, .65, .15])
      },
      yX = {
        ...zX,
        colorGradients: UX([.55, .95, 1], [.9, 1, 1])
      },
      QX = [.5, .5, .5],
      AX = {
        texture: "glint",
        mipmaps: !1,
        xY: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: UX([1, .12, .12], [1, .35, .2]),
        blendMode: QU.f.OneOne
      };
    class FX {
      constructor() {
        this.drops = new Map
      }
      PY(UU, XU) {
        if ("overflowFlash" === XU.kind) {
          const [zU, cU, yU] = XU.position, QU = UU.createParticles(AX, {
            pos: [zU, cU, yU],
            half: QX
          });
          return QU.emit(18), void QU.stop()
        }
        this.drops.has(XU.itemId) || this.drops.set(XU.itemId, {
          owner: XU.owner,
          cosmetic: XU.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      LY(UU) {
        if (0 === this.drops.size) return;
        const XU = performance.now(),
          zU = UU.getCameraPosition();
        let cU = 0;
        for (const QU of this.drops.values()) null !== QU.particles && cU++;
        for (const [QU, AU] of this.drops) {
          const FU = UU.getPositionView(QU);
          if (null === FU) {
            var yU;
            if (AU.seen || XU - AU.markedAt > 5e3) null !== AU.particles && cU--, null === (yU = AU.particles) || void 0 === yU || yU.stop(), this.drops.delete(QU);
            continue
          }
          AU.cosmetic || !UU.isLocalPlayer(AU.owner) || AU.pickupDelayCleared || (UU.clearPickupDelay(QU), AU.pickupDelayCleared = !0);
          const oU = AU.lastPosition,
            DU = AU.seen && (FU[0] - oU[0]) ** 2 + (FU[1] - oU[1]) ** 2 + (FU[2] - oU[2]) ** 2 > 4e-4,
            EU = (FU[0] - zU[0]) ** 2 + (FU[1] - zU[1]) ** 2 + (FU[2] - zU[2]) ** 2 < 2025;
          AU.seen = !0, oU[0] = FU[0], oU[1] = FU[1], oU[2] = FU[2], DU && (AU.lastMovingAt = XU), null !== AU.particles && (!EU || XU - AU.lastMovingAt > 500) && (AU.particles.stop(), AU.particles = null, cU--), DU && EU && null === AU.particles && cU < 32 && (AU.particles = UU.createParticles(AU.cosmetic ? yX : cX, {
            pos: FU
          }), cU++), null !== AU.particles && (AU.particles.moveTo(FU), AU.particles.setEmitRate(DU ? 12 : 0)), !DU && null === AU.particles && XU - Math.max(AU.lastMovingAt, AU.markedAt) > 2e3 && this.drops.delete(QU)
        }
      }
      dispose() {
        for (const XU of this.drops.values()) {
          var UU;
          null === (UU = XU.particles) || void 0 === UU || UU.stop()
        }
        this.drops.clear()
      }
    }
    const oX = new Set;

    function DX() {
      let UU;
      const XU = new FX;
      return {
        onCreate(XU) {
          UU = XU
        },
        onReceivedMessageFromServer(zU, cU) {
          if (zU === bU) XU.PY(UU, cU);
          else if (zU === TU) {
            const UU = cU,
              XU = `${UU.id}|${UU.value}`;
            oX.has(XU) || (oX.add(XU), (0, hU.f)({
              id: UU.id,
              value: UU.value
            }))
          }
        },
        LY() {
          XU.LY(UU)
        },
        onClose() {
          XU.dispose()
        }
      }
    }

    function EX(UU, XU, zU, cU) {
      return {
        cosmeticCompanions: jU(),
        dialogue: BU(cU.localPlayerId),
        fishing: gU(cU.localPlayerId),
        furnaceSmoke: SU(),
        ironChest: yU(),
        localBlockBroken: (0, KU.b)(),
        magnetLoot: DX()
      }
    }

    function YX(UU, XU) {
      for (const yU of [UU, ...null !== XU && void 0 !== XU ? XU : []]) try {
        var zU;
        null === yU || void 0 === yU || null === (zU = yU.onClose) || void 0 === zU || zU.call(yU)
      } catch (cU) {
        console.error("Error in client onClose callback", cU)
      }
    }
  },
  9291: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => QU,
      f: () => yU
    });
    var cU = zU(31);
    const yU = "localBlockBroken";

    function QU() {
      return {
        onPlayerChangeBlock(UU, XU, zU, QU, AU, FU) {
          "Air" === FU && cU.k.UY(yU)
        }
      }
    }
  },
  39988: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU,
      f: () => QU
    });
    const cU = 1 / .6,
      yU = {
        kind: "smokePuff"
      };
    class QU {
      constructor(UU, XU, zU) {
        this.style = UU, this.xY = XU, this.half = zU, this.particles = null, this.lastFrame = -1
      }
      emit(UU, XU, zU) {
        let QU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return zU !== this.lastFrame && (this.lastFrame = zU, this.particles || (this.particles = UU.createParticles(function(UU, XU) {
          const [
            [zU, QU, AU],
            [FU, oU, DU]
          ] = UU.colours;
          return {
            texture: UU.soft ? yU : "square_particle",
            xY: XU,
            minLifeTime: UU.life[0] / cU,
            maxLifeTime: UU.life[1] / cU,
            minEmitPower: UU.power[0] * cU,
            maxEmitPower: UU.power[1] * cU,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            emitRate: 0,
            gravity: [0, UU.lift * cU * cU, 0],
            dir1: [-UU.spread, 1, -UU.spread],
            dir2: [UU.spread, 1, UU.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [zU, QU, AU, UU.alpha],
              maxColor: [FU, oU, DU, UU.alpha]
            }, {
              timeFraction: 1,
              minColor: [zU, QU, AU, 0],
              maxColor: [FU, oU, DU, 0]
            }],
            blendMode: UU.blendMode
          }
        }(this.style, this.xY), {
          pos: XU,
          half: this.half
        })), this.particles.moveTo(XU, this.half), this.particles.emit(QU), !0)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
    }
  },
  5369: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => yU,
      h: () => cU,
      i: () => QU,
      l: () => oU,
      o: () => AU
    });
    const cU = ["sine", "triangle", "square", "sawtooth"],
      yU = 55,
      QU = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function AU(UU) {
      return "string" !== typeof UU ? UU : Object.hasOwn(QU, UU) ? QU[UU] : null
    }

    function FU(UU, XU, zU) {
      return Math.min(zU, Math.max(XU, UU))
    }

    function oU(UU) {
      const XU = FU(UU.durationMs, 10, 500),
        zU = FU(UU.attackMs, 0, XU),
        {
          intonation: yU
        } = UU;
      return {
        waveform: cU.includes(UU.waveform) ? UU.waveform : "sine",
        pitchHz: FU(UU.pitchHz, 20, 4e3),
        glideSemitones: FU(UU.glideSemitones, -24, 24),
        durationMs: XU,
        attackMs: zU,
        releaseMs: FU(UU.releaseMs, 0, XU - zU),
        lowpassHz: null === UU.lowpassHz ? null : FU(UU.lowpassHz, 20, 2e4),
        volume: FU(UU.volume, 0, 2),
        intonation: {
          variationSemitones: FU(yU.variationSemitones, 0, 6),
          declineSemitones: FU(yU.declineSemitones, 0, 12),
          questionRiseSemitones: FU(yU.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: FU(yU.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: FU(UU.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);