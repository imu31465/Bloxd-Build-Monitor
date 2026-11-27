export const id = 33;
export const ids = [33];
export const modules = {
  40429: (RR, JR, GR) => {
    function yR(RR) {
      return void 0 === RR ? void 0 : [RR[0], RR[1], RR[2]]
    }

    function tR(RR) {
      const JR = RR.particles;
      return {
        opts: {
          texture: JR.texture,
          hK: JR.hK,
          minLifeTime: JR.minLifeTime,
          maxLifeTime: JR.maxLifeTime,
          minSize: JR.minSize,
          maxSize: JR.maxSize,
          minEmitPower: JR.minEmitPower,
          maxEmitPower: JR.maxEmitPower,
          emitRate: JR.emitRate,
          gravity: yR(JR.gravity),
          dir1: yR(JR.dir1),
          dir2: yR(JR.dir2),
          colorGradients: JR.colorGradients,
          blendMode: JR.blendMode
        },
        half: [JR.width / 2, JR.height / 2, JR.depth / 2]
      }
    }
    GR.d(JR, {
      c: () => tR
    })
  },
  40393: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => fR,
      e: () => iR,
      i: () => ZR
    });
    var yR = GR(216);
    const tR = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      uR = "PetRoot";
    let ZR = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      qR = tR;
    new Map, new Map;

    function iR(RR) {
      var JR;
      return null !== (JR = (0, yR.b)(ZR, RR)) && void 0 !== JR ? JR : null
    }

    function fR(RR) {
      var JR;
      return null !== (JR = (0, yR.b)(qR, RR)) && void 0 !== JR ? JR : null
    }
  },
  40432: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      c: () => tR,
      g: () => uR
    });
    class yR {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.BL = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(RR) {
        var JR;
        const {
          feet: GR,
          heading: yR,
          tuning: ZR
        } = RR, qR = Math.min(Math.max(RR.dt, 0), .1), {
          pose: iR,
          BL: fR,
          target: VR
        } = this;
        if (this.started && qR > 0) {
          const RR = Math.hypot(GR[0] - this.lastFeet[0], GR[1] - this.lastFeet[1], GR[2] - this.lastFeet[2]);
          this.speed += (RR / qR - this.speed) * Math.min(qR / .15, 1)
        }
        this.lastFeet[0] = GR[0], this.lastFeet[1] = GR[1], this.lastFeet[2] = GR[2], this.stillS = this.speed > .3 ? 0 : this.stillS + qR;
        const KR = this.stillS >= .6 ? "perched" : "flying";
        "flying" === KR && "perched" === iR.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += qR, iR.mode = KR;
        const wR = Math.sin(yR),
          rR = Math.cos(yR);
        "perched" === KR ? (uR(VR, GR, ZR.perchOffset, wR, rR), VR[1] += RR.headTopY - GR[1]) : (uR(VR, GR, ZR.followOffset, wR, rR), VR[1] += tR(ZR, RR.timeS));
        const {
          pos: eR
        } = iR, aR = Math.hypot(VR[0] - eR[0], VR[1] - eR[1], VR[2] - eR[2]);
        if (!this.started || aR > 8 || "perched" === KR && (this.perchLocked || aR < .05)) this.perchLocked = this.started && "perched" === KR, eR[0] = VR[0], eR[1] = VR[1], eR[2] = VR[2], fR[0] = fR[1] = fR[2] = 0;
        else {
          const RR = ZR.followStiffness;
          for (let JR = 0; JR < 3; JR++) fR[JR] += (RR * RR * (VR[JR] - eR[JR]) - 2 * RR * fR[JR]) * qR, eR[JR] += fR[JR] * qR
        }
        const LR = yR + ZR.yawOffset;
        var nR;
        return this.started ? iR.yaw += ((nR = LR - iR.yaw) - 2 * Math.PI * Math.round(nR / (2 * Math.PI))) * Math.min(8 * qR, 1) : iR.yaw = LR, this.started = !0, iR.seated = "perched" === KR && this.perchLocked, iR.clip = null === (JR = ZR.clips) || void 0 === JR ? void 0 : JR[this.rG(KR)], iR
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      rG(RR) {
        return "perched" === RR ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function tR(RR, JR) {
      return RR.bobAmplitude * Math.sin(2 * Math.PI * RR.bobHz * JR)
    }

    function uR(RR, JR, GR, yR, tR) {
      const [uR, ZR, qR] = GR;
      RR[0] = JR[0] + uR * tR + qR * yR, RR[1] = JR[1] + ZR, RR[2] = JR[2] - uR * yR + qR * tR
    }
  },
  5728: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => DR,
      f: () => NR
    });
    var yR = GR(5733),
      tR = GR(359);
    const uR = 120,
      ZR = 260,
      qR = 1.15,
      iR = 1.2,
      fR = 2,
      VR = 1.08,
      KR = .8,
      wR = .95,
      rR = 8,
      eR = "[\"')\\]\u300d\u300f\uff09]*",
      aR = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${eR}$`),
      LR = new RegExp(`[?\uff1f]${eR}$`),
      nR = new RegExp(`[!\uff01]${eR}$`),
      UR = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WR = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AR = new RegExp(`[${WR}]`),
      CR = new RegExp(`[${WR}]|[^${WR}]+`, "g"),
      XR = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function MR(RR) {
      let JR = 2166136261;
      for (let GR = 0; GR < RR.length; GR++) JR ^= RR.charCodeAt(GR), JR = Math.imul(JR, 16777619);
      return (JR >>> 0) / 4294967295 * 2 - 1
    }

    function BR(RR) {
      var JR;
      if (AR.test(RR)) return 1;
      const GR = RR.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        yR = GR.replace(/[^0-9]/g, "");
      if (yR.length > 0 && !/\p{L}/u.test(GR)) return Math.min(yR.length, 4);
      const tR = null !== (JR = GR.match(XR)) && void 0 !== JR ? JR : [];
      if (0 === tR.length) {
        var uR, ZR;
        const RR = null !== (uR = null === (ZR = GR.match(/\p{L}/gu)) || void 0 === ZR ? void 0 : ZR.length) && void 0 !== uR ? uR : 0;
        return 0 === RR ? 0 : Math.min(Math.max(1, Math.round(RR / 2.5)), rR)
      }
      const qR = GR.replace(/[^\p{L}]/gu, ""),
        iR = tR.length > 1 && "e" === tR.at(-1) && qR.endsWith("e") && !qR.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(RR.replace(/[^\p{L}]/gu, ""));
      return Math.min(tR.length - (iR ? 1 : 0), rR)
    }

    function lR(RR) {
      return RR.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function pR(RR) {
      const JR = RR.replace(/[^\p{L}]/gu, "");
      return JR.length >= 2 && JR === JR.toUpperCase() && JR !== JR.toLowerCase()
    }

    function gR(RR, JR) {
      var GR;
      const rR = JR && (0, yR.i)(JR),
        eR = null !== (GR = null === rR || void 0 === rR ? void 0 : rR.syllableMs) && void 0 !== GR ? GR : yR.b,
        WR = function(RR) {
          const JR = [];
          for (const yR of (0, tR.dc)(RR))
            if ("string" === typeof yR)
              for (const RR of yR.split(/(\s+)/)) {
                if ("" === RR) continue;
                if (/^\s+$/.test(RR)) {
                  JR.push({
                    kind: "space",
                    text: RR
                  });
                  continue
                }
                if (!AR.test(RR)) {
                  JR.push({
                    kind: "word",
                    text: RR,
                    delayMs: 0
                  });
                  continue
                }
                let yR = !0;
                for (const tR of null !== (GR = RR.match(CR)) && void 0 !== GR ? GR : []) {
                  var GR;
                  const RR = JR.at(-1);
                  yR || "word" !== (null === RR || void 0 === RR ? void 0 : RR.kind) || AR.test(tR) || /[\p{L}\p{N}]/u.test(tR) ? (yR || JR.push({
                    kind: "space",
                    text: "\u200b"
                  }), JR.push({
                    kind: "word",
                    text: tR,
                    delayMs: 0
                  }), yR = !1) : RR.text += tR
                }
              } else JR.push({
                kind: "icon",
                text: yR.icon,
                delayMs: 0
              });
          return JR
        }(RR),
        XR = [];
      let gR = [];
      for (const yR of WR) "space" !== yR.kind && (gR.push(yR), aR.test(yR.text) && (XR.push(gR), gR = []));
      XR.push(gR);
      const bR = [];
      let vR = 0;
      for (const yR of XR) {
        var OR, xR;
        const RR = null !== (OR = null === (xR = yR.at(-1)) || void 0 === xR ? void 0 : xR.text) && void 0 !== OR ? OR : "",
          JR = LR.test(RR),
          GR = nR.test(RR),
          tR = yR.map((RR => "word" === RR.kind ? BR(RR.text) : 1)),
          WR = tR.findLastIndex((RR => RR > 0));
        for (const [LR, nR] of yR.entries()) {
          const RR = "word" === nR.kind,
            yR = tR[LR];
          nR.delayMs = vR;
          for (let tR = 0; rR && tR < yR; tR++) {
            const {
              intonation: uR
            } = rR;
            let ZR = WR > 0 ? -uR.declineSemitones * (LR / WR) : 0;
            ZR += MR(`${lR(nR.text)}|${tR}`) * uR.variationSemitones;
            const aR = Math.min(1, uR.variationSemitones);
            let UR = rR.glideSemitones,
              AR = 1;
            GR && (ZR += uR.exclaimLiftSemitones, AR *= qR), JR && LR === WR && (ZR += uR.questionRiseSemitones * (yR > 1 ? .5 + .5 * tR / (yR - 1) : 1), tR === yR - 1 && (UR = Math.abs(UR) + uR.questionRiseSemitones / 2)), RR && pR(nR.text) && (ZR += fR * aR, AR *= iR), yR > 1 && 0 === tR && (ZR += KR * aR, AR *= VR), bR.push({
              atMs: vR + tR * eR,
              semitones: ZR,
              glideSemitones: UR,
              durationMs: tR < yR - 1 ? Math.min(rR.durationMs, eR * wR) : rR.durationMs,
              level: AR
            })
          }
          vR += yR * eR + (aR.test(nR.text) ? ZR : UR.test(nR.text) ? uR : 0)
        }
      }
      return {
        pieces: WR.map((RR => "space" === RR.kind ? RR : "icon" === RR.kind ? {
          kind: "icon",
          icon: RR.text,
          delayMs: RR.delayMs
        } : {
          kind: "word",
          text: RR.text,
          delayMs: RR.delayMs
        })),
        blips: bR
      }
    }
    var bR = GR(1270),
      vR = GR(1343),
      OR = GR(2137);

    function xR(RR) {
      if ("string" === typeof RR) return RR;
      const JR = vR.g.get().getCurrentLanguageCode();
      return (0, bR.r)(JR, RR.translationKey, (0, bR.o)(RR.params, OR.e.shown))
    }

    function NR(RR) {
      const JR = void 0 === RR.voice ? null : (0, yR.m)(RR.voice),
        GR = JR && (0, yR.i)(JR);
      return {
        plan: gR(xR(RR.line), GR),
        synth: GR
      }
    }

    function DR(RR) {
      const JR = [];
      let GR = [];
      for (const [tR, uR] of RR.entries()) {
        var yR;
        "space" === uR.kind && (" " !== uR.text || "icon" !== (null === (yR = RR[tR + 1]) || void 0 === yR ? void 0 : yR.kind)) ? (GR.length > 0 && JR.push(GR), JR.push([uR]), GR = []) : GR.push(uR)
      }
      return GR.length > 0 && JR.push(GR), JR
    }
  },
  5736: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      d: () => KR
    });
    var yR = GR(5742),
      tR = GR(25);
    const uR = .25,
      ZR = .85,
      qR = .02,
      iR = .01;

    function fR(RR, JR, GR, yR, tR, uR, qR) {
      const {
        waveform: iR,
        pitchHz: fR,
        attackMs: VR,
        releaseMs: KR,
        lowpassHz: wR
      } = GR, rR = tR + yR.durationMs / 1e3, eR = fR * 2 ** (yR.semitones / 12), aR = RR.createOscillator();
      aR.type = iR, aR.frequency.setValueAtTime(eR, tR), aR.frequency.exponentialRampToValueAtTime(eR * 2 ** (yR.glideSemitones / 12), rR);
      const LR = tR + Math.min(VR, yR.durationMs) / 1e3,
        nR = RR.createGain();
      nR.gain.setValueAtTime(0, tR), nR.gain.linearRampToValueAtTime(uR, LR), nR.gain.linearRampToValueAtTime(uR * ZR, Math.max(LR, rR - KR / 1e3)), nR.gain.linearRampToValueAtTime(0, rR);
      const UR = [aR];
      if (null !== wR) {
        const JR = RR.createBiquadFilter();
        JR.type = "lowpass", JR.frequency.value = wR, UR.push(JR)
      }
      UR.push(nR, JR);
      for (let ZR = 1; ZR < UR.length; ZR++) UR[ZR - 1].connect(UR[ZR]);
      return aR.onended = () => {
        for (const RR of UR.slice(0, -1)) RR.disconnect();
        qR()
      }, aR.start(tR), aR.stop(rR), aR
    }

    function VR(RR, JR, GR, yR, tR, ZR) {
      if (0 === yR.length) return ZR(), () => {};
      const VR = uR * GR.volume * tR,
        KR = RR.createGain();
      KR.connect(JR);
      const wR = RR.currentTime + qR,
        rR = new Set;
      for (const uR of yR) {
        const JR = fR(RR, KR, GR, uR, wR + uR.atMs / 1e3, VR * uR.level, (() => {
          rR.delete(JR), 0 === rR.size && (KR.disconnect(), ZR())
        }));
        rR.add(JR)
      }
      return () => {
        const JR = RR.currentTime;
        KR.gain.setTargetAtTime(0, JR, iR);
        for (const RR of rR) try {
          RR.stop(JR + 5 * iR)
        } catch {}
      }
    }

    function KR(RR, JR) {
      var GR;
      const uR = yR.Howler.ctx,
        ZR = yR.Howler.masterGain;
      if (!uR || !ZR || !tR.d.get("soundOnFromAd")) return () => {};
      const qR = yR.Howler;
      return null === (GR = qR._autoResume) || void 0 === GR || GR.call(qR), VR(uR, ZR, RR, JR, tR.d.get("soundVolume"), (() => {
        var RR;
        null === (RR = qR._autoSuspend) || void 0 === RR || RR.call(qR)
      }))
    }
  },
  40419: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      closeClientGame: () => KJ,
      createDefaultClientPlugins: () => VJ
    });
    var yR = GR(377);

    function tR() {
      let RR;
      return {
        onCreate(JR) {
          RR = JR
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(JR, GR, tR, uR, ZR, qR) {
          var iR, fR;
          if ("Iron Chest" !== RR.getMetaInfo(ZR).rootName) return;
          if (!RR.hasEffect(JR, "Thief")) return;
          const VR = RR.getBlockData(GR, tR, uR);
          return RR.getPlayerDbId(JR) !== (null === VR || void 0 === VR || null === (iR = VR.persisted) || void 0 === iR || null === (fR = iR.shared) || void 0 === fR ? void 0 : fR.ownerDbId) ? (RR.sendMessage(JR, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: yR.C.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var uR = GR(3017),
      ZR = GR(1336);
    const qR = 8.4,
      iR = 1e-4,
      fR = .15,
      VR = .04,
      KR = [.12, .04, .12],
      wR = 26,
      rR = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        hK: 1,
        minLifeTime: iR,
        maxLifeTime: iR,
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
        blendMode: uR.c.Standard
      },
      eR = {
        texture: "bubble",
        mipmaps: !1,
        hK: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: wR,
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
        blendMode: uR.c.Standard
      },
      aR = [0, 0, 0],
      LR = [0, 0, 0];

    function nR(RR) {
      const JR = new Map;
      let GR = null;

      function yR(RR) {
        var JR, GR;
        null === (JR = RR.bubbles) || void 0 === JR || JR.stop(), null === (GR = RR.fish) || void 0 === GR || GR.stop()
      }

      function tR(GR) {
        if (!GR.readDrawnPosition(RR, LR)) {
          for (const RR of JR.values()) {
            var yR;
            null === (yR = RR.bubbles) || void 0 === yR || yR.setEmitRate(0)
          }
          return
        }
        const tR = performance.now();
        for (const [RR, ZR] of JR) {
          var uR;
          if (null === (uR = ZR.bubbles) || void 0 === uR || uR.setEmitRate(0), !GR.readDrawnPosition(RR, aR)) continue;
          if (!((aR[0] - LR[0]) ** 2 + (aR[1] - LR[1]) ** 2 + (aR[2] - LR[2]) ** 2 < 900)) continue;
          const JR = Math.max(0, ZR.biteAt - tR),
            yR = ZR.approachDurationMs > 0 ? Math.min(1, 1 - JR / ZR.approachDurationMs) : 1,
            iR = (ZR.approachDurationMs - JR) / 1e3,
            nR = ZR.phase + .25 * Math.sin(1.7 * iR + ZR.phase),
            UR = Math.min(ZR.approachDurationMs / 3e3 * 2.8, qR) * (1 - yR) * (1 + .15 * Math.sin(2.1 * iR + ZR.phase)),
            WR = Math.min(1, 4 * (1 - yR)),
            AR = (.45 * Math.sin(4.1 * iR + ZR.phase) + .18 * Math.sin(9.7 * iR + 2 * ZR.phase)) * WR,
            CR = aR[0] + Math.cos(nR) * UR - Math.sin(nR) * AR,
            XR = Math.ceil(ZR.surfaceY),
            MR = aR[2] + Math.sin(nR) * UR + Math.cos(nR) * AR,
            {
              fishAt: BR,
              bubblesAt: lR
            } = ZR;
          BR[0] = lR[0] = CR, BR[1] = XR + fR, lR[1] = XR + VR, BR[2] = lR[2] = MR, ZR.fish ??= GR.createParticles(rR, {
            pos: BR
          }), ZR.fish.moveTo(BR), ZR.fish.emit(1), ZR.bubbles ??= GR.createParticles(eR, {
            pos: lR,
            half: KR
          }), ZR.bubbles.moveTo(lR), ZR.bubbles.setEmitRate(wR + 32 * (.5 + .5 * Math.sin(9 * iR + ZR.phase)) ** 4 + 13 * yR)
        }
      }
      return {
        onCreate(RR) {
          GR = RR
        },
        onAfterRender() {
          GR && tR(GR)
        },
        onClose() {
          for (const RR of JR.values()) yR(RR);
          JR.clear(), GR = null
        },
        onReceivedMessageFromServer(RR, GR) {
          if (RR !== ZR.B) return;
          const {
            hookId: tR,
            waiting: uR
          } = GR;
          if (uR) JR.has(tR) || JR.set(tR, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + uR.remainingMs,
            approachDurationMs: uR.durationMs,
            surfaceY: uR.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const RR = JR.get(tR);
            RR && yR(RR), JR.delete(tR)
          }
        }
      }
    }
    var UR = GR(5736),
      WR = GR(5728);

    function AR(RR) {
      let JR, GR = null,
        yR = null;
      const tR = () => {
        var RR;
        null === (RR = yR) || void 0 === RR || RR(), yR = null
      };
      return {
        onCreate(yR) {
          JR = yR, GR = JR.getClientOption(RR, "dialogue")
        },
        onAfterRender() {
          if (!JR) return;
          const uR = JR.getClientOption(RR, "dialogue");
          if (uR === GR) return;
          if (GR = uR, tR(), !uR || !1 === uR.animateIn) return;
          const {
            plan: ZR,
            synth: qR
          } = (0, WR.f)(uR);
          qR && (yR = (0, UR.d)(qR, ZR.blips))
        },
        onClose: tR
      }
    }
    var CR = GR(40422);
    const XR = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      MR = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      BR = [0, 1, 2, 0, 2, 3];

    function lR(RR, JR, GR) {
      var yR;
      let [tR, uR, ZR] = JR;
      if (RR.hasPackModel("Furnace")) return null;
      const qR = ((null !== (yR = RR.getMetaInfo(GR).rot) && void 0 !== yR ? yR : 1) - 1) * Math.PI / 2,
        iR = Math.PI + qR,
        fR = Math.cos(iR),
        VR = Math.sin(iR),
        KR = [];
      for (const [eR, aR] of XR) KR.push(eR * fR, aR, -eR * VR);
      const wR = {
          positions: KR,
          indices: BR,
          uvs: MR
        },
        rR = [tR + .5 + .51 * Math.sin(qR), uR + .375, ZR + .5 + .51 * Math.cos(qR)];
      return RR.createGameMesh(wR, {
        kind: "furnaceFire"
      }, rR)
    }

    function pR(RR) {
      return Math.floor(RR / 200) % 3
    }

    function gR(RR, JR, GR) {
      RR.setGameMesh(JR, {
        uvOffset: [0, GR / 3]
      })
    }
    const bR = [.12, .025, .12],
      vR = [{
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
          blendMode: uR.c.Standard,
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
          blendMode: uR.c.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class OR {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(RR, JR) {
        const GR = RR.getBlockId(JR[0], JR[1], JR[2]);
        if ("Furnace" !== RR.getMetaInfo(GR).rootName) return;
        const yR = performance.now();
        let tR = this.smokes.find((RR => RR.pos[0] === JR[0] && RR.pos[1] === JR[1] && RR.pos[2] === JR[2] && RR.Vq === GR));
        if (tR || (tR = {
            pos: [JR[0], JR[1], JR[2]],
            Vq: GR,
            endMs: yR,
            lastBurstMs: -1 / 0,
            pending: new Array(vR.length).fill(0),
            fire: lR(RR, JR, GR)
          }, this.smokes.push(tR), null !== tR.fire && (gR(RR, tR.fire, pR(yR)), this.shownFireFrame = -1)), tR.endMs = yR + 6e3, this.smokes.length > 4) {
          const JR = this.smokes.reduce(((RR, JR) => JR.endMs < RR.endMs ? JR : RR));
          xR(RR, JR), this.smokes.splice(this.smokes.indexOf(JR), 1)
        }
        yR - tR.lastBurstMs >= 300 && (tR.lastBurstMs = yR, vR.forEach(((RR, JR) => {
          tR.pending[JR] += RR.style.count
        })))
      }
      onAfterRender(RR, JR) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const GR = performance.now();
        this.smokes = this.smokes.filter((JR => {
          const [yR, tR, uR] = JR.pos, ZR = GR < JR.endMs && RR.getBlockId(yR, tR, uR) === JR.Vq;
          return ZR || xR(RR, JR), ZR
        }));
        const yR = pR(GR);
        if (yR !== this.shownFireFrame) {
          this.shownFireFrame = yR;
          for (const JR of this.smokes) null !== JR.fire && gR(RR, JR.fire, yR)
        }
        if (!RR.particlesEnabled()) {
          for (const RR of this.smokes) RR.pending.fill(0);
          return
        }
        const tR = Math.min(JR, 250) / 1e3;
        for (const uR of this.smokes) {
          const [JR, yR, ZR] = uR.pos;
          if (0 !== RR.getBlockId(JR, yR + 1, ZR)) {
            uR.pending.fill(0);
            continue
          }
          const qR = (uR.endMs - GR) / 6e3,
            iR = this.centre;
          iR[0] = JR + .5, iR[1] = yR + 1.275, iR[2] = ZR + .5, vR.forEach(((JR, GR) => {
            uR.pending[GR] += JR.perSecond * qR * tR;
            const yR = Math.floor(uR.pending[GR]);
            yR > 0 && this.emit(RR, GR, iR, yR) && (uR.pending[GR] -= yR)
          }))
        }
      }
      dispose(RR) {
        for (const GR of this.smokes) xR(RR, GR);
        this.smokes = [];
        for (const GR of null !== (JR = this.puffers) && void 0 !== JR ? JR : []) {
          var JR;
          GR.dispose()
        }
        this.puffers = null
      }
      emit(RR, JR, GR, yR) {
        return this.puffers ??= vR.map((RR => {
          let {
            style: JR,
            perSecond: GR
          } = RR;
          const yR = (JR.count / .3 + GR) * JR.life[1];
          return new CR.d(JR, Math.ceil(4 * yR), bR)
        })), this.puffers[JR].emit(RR, GR, this.renderFrame, yR)
      }
    }

    function xR(RR, JR) {
      null !== JR.fire && (RR.disposeGameMesh(JR.fire), JR.fire = null)
    }

    function NR() {
      let RR;
      const JR = new OR;
      return {
        onCreate(JR) {
          RR = JR
        },
        onReceivedMessageFromServer(GR, yR) {
          GR === ZR.F && JR.start(RR, yR)
        },
        onAfterRender(GR) {
          JR.onAfterRender(RR, GR)
        },
        onClose() {
          JR.dispose(RR)
        }
      }
    }
    var DR = GR(203),
      HR = GR(40393),
      oR = GR(40429),
      cR = GR(40432);
    class PR {
      constructor(RR, JR, GR) {
        this.api = RR, this.wearer = JR, this.name = GR, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new cR.b, this.shown = !1, this.raised = 0
      }
      update(RR) {
        var JR;
        const GR = (0, HR.e)(this.name);
        if (!GR) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === GR.model && this.madeFrom.scale === GR.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(GR.model, GR.scale), this.madeFrom = GR, !this.model)) return void this.raiseNametag(0);
        if (!(RR.drawn && !RR.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const yR = this.motion.step({
          dt: RR.dt,
          feet: RR.feet,
          heading: RR.heading,
          headTopY: RR.headTopY,
          tuning: GR,
          timeS: RR.timeS
        });
        this.model.setPose(yR.pos, yR.yaw + Math.PI), this.model.setClip(null !== (JR = yR.clip) && void 0 !== JR ? JR : null);
        const tR = yR.seated ? GR : null;
        tR !== this.perchedWith && (this.perchedWith = tR, this.model.setPerch(tR && {
          fG: this.wearer,
          offset: tR.perchOffset,
          yaw: tR.yawOffset
        })), this.setShown(!0), this.raiseNametag(GR.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(RR) {
        RR !== this.raised && (this.raised = RR, this.api.setNametagOffset(this.wearer, RR))
      }
      freeModel() {
        var RR;
        null === (RR = this.model) || void 0 === RR || RR.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(RR) {
        this.model && RR !== this.shown && (this.shown = RR, this.model.setVisible(RR))
      }
    }
    class IR {
      constructor(RR, JR) {
        this.api = RR, this.name = JR, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(RR) {
        const JR = (0, HR.d)(this.name);
        if (JR !== this.madeFrom && this.stop(), !JR) return;
        const GR = RR.ownFirstPerson ? JR.ownInFirstPerson : RR.drawn;
        if (GR) {
          const {
            centre: GR
          } = this;
          if ((0, cR.g)(GR, RR.feet, JR.offset, Math.sin(RR.heading), Math.cos(RR.heading)), this.particles) this.particles.moveTo(GR, this.half);
          else {
            const RR = (0, oR.c)(JR);
            this.half = RR.half, this.particles = this.api.createParticles(RR.opts, {
              pos: GR,
              half: RR.half
            }), this.madeFrom = JR, this.emitting = !0
          }
        }
        this.particles && GR !== this.emitting && (this.emitting = GR, this.particles.setEmitRate(GR ? JR.particles.emitRate : 0))
      }
      stop() {
        var RR;
        null === (RR = this.particles) || void 0 === RR || RR.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const mR = .25,
      zR = 48,
      SR = 4,
      jR = 24,
      dR = 12,
      ER = .6,
      YR = 1 / DR.g.playerEyeToHeightRatio;

    function kR(RR, JR, GR) {
      const yR = RR.filter((RR => RR[JR] <= zR));
      return yR.sort(((RR, GR) => RR[JR] - GR[JR])), new Set(yR.slice(0, GR).map((RR => RR.id)))
    }

    function QR() {
      let RR;
      const JR = new Map;
      let GR = 0,
        yR = 0;
      const tR = [0, 0, 0],
        uR = {
          feet: tR,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function ZR(RR) {
        var JR, GR;
        null === (JR = RR.pet) || void 0 === JR || JR.dispose(), null === (GR = RR.aura) || void 0 === GR || GR.stop()
      }

      function qR(JR, GR) {
        var yR, ZR;
        const {
          id: qR
        } = JR, iR = RR.readDrawnPosition(qR, tR) ? RR.getDrawnHeading(qR) : null, fR = null === iR ? null : RR.getDrawnEyeHeight(qR);
        if (null === iR || null === fR) uR.drawn = !1, uR.ownFirstPerson = !1;
        else {
          const JR = GR.cameraPosition;
          uR.heading = iR, uR.headTopY = tR[1] + fR * YR, uR.drawn = RR.isAlive(qR) && RR.isEntityDrawn(qR), uR.ownFirstPerson = RR.isLocalPlayer(qR) && RR.isAlive(qR) && Math.hypot(JR[0] - tR[0], JR[1] - tR[1] - fR, JR[2] - tR[2]) < ER
        }
        null === (yR = JR.pet) || void 0 === yR || yR.update(uR), null === (ZR = JR.aura) || void 0 === ZR || ZR.update(uR)
      }
      return {
        onCreate(JR) {
          RR = JR
        },
        onAfterRender(iR, fR) {
          const VR = iR / 1e3;
          yR += VR, GR -= VR, GR <= 0 && (GR = mR, function(GR) {
            const yR = [];
            for (const ZR of RR.getPlayerIds()) {
              const uR = RR.getPlayerCosmetics(ZR),
                qR = void 0 !== (null === uR || void 0 === uR ? void 0 : uR.pet) && (0, HR.e)(uR.pet) ? uR.pet : null,
                iR = void 0 !== (null === uR || void 0 === uR ? void 0 : uR.aura) && (0, HR.d)(uR.aura) ? uR.aura : null;
              if (null === qR && null === iR || !RR.readDrawnPosition(ZR, tR)) continue;
              const fR = Math.hypot(tR[0] - GR[0], tR[1] - GR[1], tR[2] - GR[2]),
                VR = JR.get(ZR);
              yR.push({
                id: ZR,
                pet: qR,
                aura: iR,
                petDist: null === qR ? 1 / 0 : fR - (null !== VR && void 0 !== VR && VR.pet ? SR : 0),
                auraDist: null === iR ? 1 / 0 : fR - (null !== VR && void 0 !== VR && VR.aura ? SR : 0)
              })
            }
            const uR = kR(yR, "petDist", jR),
              qR = RR.particlesEnabled() ? kR(yR, "auraDist", dR) : new Set,
              iR = new Set;
            for (const {
                id: tR,
                pet: ZR,
                aura: aR
              }
              of yR) {
              var fR, VR, KR;
              const GR = null !== (fR = JR.get(tR)) && void 0 !== fR ? fR : {
                  id: tR,
                  pet: null,
                  aura: null
                },
                yR = uR.has(tR) ? ZR : null,
                LR = qR.has(tR) ? aR : null;
              var wR, rR, eR;
              (null === (VR = GR.pet) || void 0 === VR ? void 0 : VR.name) !== yR ? (null === (wR = GR.pet) || void 0 === wR || wR.dispose(), GR.pet = null === yR ? null : new PR(RR, tR, yR)) : null === (rR = GR.pet) || void 0 === rR || rR.refreshNametag(), (null === (KR = GR.aura) || void 0 === KR ? void 0 : KR.name) !== LR && (null === (eR = GR.aura) || void 0 === eR || eR.stop(), GR.aura = null === LR ? null : new IR(RR, LR)), (GR.pet || GR.aura) && (JR.set(tR, GR), iR.add(tR))
            }
            for (const [RR, tR] of JR) iR.has(RR) || (ZR(tR), JR.delete(RR))
          }(fR.cameraPosition)), uR.dt = VR, uR.timeS = yR;
          for (const RR of JR.values()) qR(RR, fR)
        },
        onClose() {
          for (const RR of JR.values()) ZR(RR);
          JR.clear()
        }
      }
    }
    var FR = GR(10063);
    const TR = "skyblockLoot",
      sR = "autoPickupClick";
    var hR = GR(1841);

    function RJ(RR, JR) {
      return [{
        timeFraction: 0,
        minColor: [255 * RR[0], 255 * RR[1], 255 * RR[2], 1],
        maxColor: [255 * JR[0], 255 * JR[1], 255 * JR[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const JJ = [0, 0, 0],
      GJ = {
        texture: "glint",
        mipmaps: !1,
        hK: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: JJ,
        dir2: JJ,
        blendMode: uR.c.OneOne
      },
      yJ = {
        ...GJ,
        colorGradients: RJ([1, .88, .38], [1, .65, .15])
      },
      tJ = {
        ...GJ,
        colorGradients: RJ([.55, .95, 1], [.9, 1, 1])
      },
      uJ = [.5, .5, .5],
      ZJ = {
        texture: "glint",
        mipmaps: !1,
        hK: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: RJ([1, .12, .12], [1, .35, .2]),
        blendMode: uR.c.OneOne
      };
    class qJ {
      constructor() {
        this.drops = new Map
      }
      BK(RR, JR) {
        if ("overflowFlash" === JR.kind) {
          const [GR, yR, tR] = JR.position, uR = RR.createParticles(ZJ, {
            pos: [GR, yR, tR],
            half: uJ
          });
          return uR.emit(18), void uR.stop()
        }
        this.drops.has(JR.itemId) || this.drops.set(JR.itemId, {
          owner: JR.owner,
          cosmetic: JR.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      gK(RR) {
        if (0 === this.drops.size) return;
        const JR = performance.now(),
          GR = RR.getCameraPosition();
        let yR = 0;
        for (const uR of this.drops.values()) null !== uR.particles && yR++;
        for (const [uR, ZR] of this.drops) {
          const qR = RR.getPositionView(uR);
          if (null === qR) {
            var tR;
            if (ZR.seen || JR - ZR.markedAt > 5e3) null !== ZR.particles && yR--, null === (tR = ZR.particles) || void 0 === tR || tR.stop(), this.drops.delete(uR);
            continue
          }
          ZR.cosmetic || !RR.isLocalPlayer(ZR.owner) || ZR.pickupDelayCleared || (RR.clearPickupDelay(uR), ZR.pickupDelayCleared = !0);
          const iR = ZR.lastPosition,
            fR = ZR.seen && (qR[0] - iR[0]) ** 2 + (qR[1] - iR[1]) ** 2 + (qR[2] - iR[2]) ** 2 > 4e-4,
            VR = (qR[0] - GR[0]) ** 2 + (qR[1] - GR[1]) ** 2 + (qR[2] - GR[2]) ** 2 < 2025;
          ZR.seen = !0, iR[0] = qR[0], iR[1] = qR[1], iR[2] = qR[2], fR && (ZR.lastMovingAt = JR), null !== ZR.particles && (!VR || JR - ZR.lastMovingAt > 500) && (ZR.particles.stop(), ZR.particles = null, yR--), fR && VR && null === ZR.particles && yR < 32 && (ZR.particles = RR.createParticles(ZR.cosmetic ? tJ : yJ, {
            pos: qR
          }), yR++), null !== ZR.particles && (ZR.particles.moveTo(qR), ZR.particles.setEmitRate(fR ? 12 : 0)), !fR && null === ZR.particles && JR - Math.max(ZR.lastMovingAt, ZR.markedAt) > 2e3 && this.drops.delete(uR)
        }
      }
      dispose() {
        for (const JR of this.drops.values()) {
          var RR;
          null === (RR = JR.particles) || void 0 === RR || RR.stop()
        }
        this.drops.clear()
      }
    }
    const iJ = new Set;

    function fJ() {
      let RR;
      const JR = new qJ;
      return {
        onCreate(JR) {
          RR = JR
        },
        onReceivedMessageFromServer(GR, yR) {
          if (GR === TR) JR.BK(RR, yR);
          else if (GR === sR) {
            const RR = yR,
              JR = `${RR.id}|${RR.value}`;
            iJ.has(JR) || (iJ.add(JR), (0, hR.c)({
              id: RR.id,
              value: RR.value
            }))
          }
        },
        gK() {
          JR.gK(RR)
        },
        onClose() {
          JR.dispose()
        }
      }
    }

    function VJ(RR, JR, GR, yR) {
      return {
        cosmeticCompanions: QR(),
        dialogue: AR(yR.localPlayerId),
        fishing: nR(yR.localPlayerId),
        furnaceSmoke: NR(),
        ironChest: tR(),
        localBlockBroken: (0, FR.c)(),
        magnetLoot: fJ()
      }
    }

    function KJ(RR, JR) {
      for (const tR of [RR, ...null !== JR && void 0 !== JR ? JR : []]) try {
        var GR;
        null === tR || void 0 === tR || null === (GR = tR.onClose) || void 0 === GR || GR.call(tR)
      } catch (yR) {
        console.error("Error in client onClose callback", yR)
      }
    }
  },
  10063: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    var yR = GR(32);
    const tR = "localBlockBroken";

    function uR() {
      return {
        onPlayerChangeBlock(RR, JR, GR, uR, ZR, qR) {
          "Air" === qR && yR.n.JK(tR)
        }
      }
    }
  },
  40422: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      d: () => uR
    });
    const yR = 1 / .6,
      tR = {
        kind: "smokePuff"
      };
    class uR {
      constructor(RR, JR, GR) {
        this.style = RR, this.hK = JR, this.half = GR, this.particles = null, this.lastFrame = -1
      }
      emit(RR, JR, GR) {
        let uR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return GR !== this.lastFrame && (this.lastFrame = GR, this.particles || (this.particles = RR.createParticles(function(RR, JR) {
          const [
            [GR, uR, ZR],
            [qR, iR, fR]
          ] = RR.colours;
          return {
            texture: RR.soft ? tR : "square_particle",
            hK: JR,
            minLifeTime: RR.life[0] / yR,
            maxLifeTime: RR.life[1] / yR,
            minEmitPower: RR.power[0] * yR,
            maxEmitPower: RR.power[1] * yR,
            minSize: RR.size[0],
            maxSize: RR.size[1],
            emitRate: 0,
            gravity: [0, RR.lift * yR * yR, 0],
            dir1: [-RR.spread, 1, -RR.spread],
            dir2: [RR.spread, 1, RR.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [GR, uR, ZR, RR.alpha],
              maxColor: [qR, iR, fR, RR.alpha]
            }, {
              timeFraction: 1,
              minColor: [GR, uR, ZR, 0],
              maxColor: [qR, iR, fR, 0]
            }],
            blendMode: RR.blendMode
          }
        }(this.style, this.hK), {
          pos: JR,
          half: this.half
        })), this.particles.moveTo(JR, this.half), this.particles.emit(uR), !0)
      }
      dispose() {
        var RR;
        null === (RR = this.particles) || void 0 === RR || RR.stop(), this.particles = null
      }
    }
  },
  5733: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => tR,
      e: () => yR,
      f: () => uR,
      i: () => iR,
      m: () => ZR
    });
    const yR = ["sine", "triangle", "square", "sawtooth"],
      tR = 55,
      uR = {
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

    function ZR(RR) {
      return "string" !== typeof RR ? RR : Object.hasOwn(uR, RR) ? uR[RR] : null
    }

    function qR(RR, JR, GR) {
      return Math.min(GR, Math.max(JR, RR))
    }

    function iR(RR) {
      const JR = qR(RR.durationMs, 10, 500),
        GR = qR(RR.attackMs, 0, JR),
        {
          intonation: tR
        } = RR;
      return {
        waveform: yR.includes(RR.waveform) ? RR.waveform : "sine",
        pitchHz: qR(RR.pitchHz, 20, 4e3),
        glideSemitones: qR(RR.glideSemitones, -24, 24),
        durationMs: JR,
        attackMs: GR,
        releaseMs: qR(RR.releaseMs, 0, JR - GR),
        lowpassHz: null === RR.lowpassHz ? null : qR(RR.lowpassHz, 20, 2e4),
        volume: qR(RR.volume, 0, 2),
        intonation: {
          variationSemitones: qR(tR.variationSemitones, 0, 6),
          declineSemitones: qR(tR.declineSemitones, 0, 12),
          questionRiseSemitones: qR(tR.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: qR(tR.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: qR(RR.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);