export const id = 32;
export const ids = [32];
export const modules = {
  40219: (MM, rM, iM) => {
    function OM(MM) {
      return void 0 === MM ? void 0 : [MM[0], MM[1], MM[2]]
    }

    function SM(MM) {
      const rM = MM.particles;
      return {
        opts: {
          texture: rM.texture,
          vL: rM.vL,
          minLifeTime: rM.minLifeTime,
          maxLifeTime: rM.maxLifeTime,
          minSize: rM.minSize,
          maxSize: rM.maxSize,
          minEmitPower: rM.minEmitPower,
          maxEmitPower: rM.maxEmitPower,
          emitRate: rM.emitRate,
          gravity: OM(rM.gravity),
          dir1: OM(rM.dir1),
          dir2: OM(rM.dir2),
          colorGradients: rM.colorGradients,
          blendMode: rM.blendMode
        },
        half: [rM.width / 2, rM.height / 2, rM.depth / 2]
      }
    }
    iM.d(rM, {
      b: () => SM
    })
  },
  40186: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      h: () => QM,
      k: () => nM,
      m: () => aM
    });
    var OM = iM(187);
    const SM = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      jM = "PetRoot";
    let aM = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      PM = SM;
    new Map, new Map;

    function nM(MM) {
      var rM;
      return null !== (rM = (0, OM.d)(aM, MM)) && void 0 !== rM ? rM : null
    }

    function QM(MM) {
      var rM;
      return null !== (rM = (0, OM.d)(PM, MM)) && void 0 !== rM ? rM : null
    }
  },
  40222: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM,
      g: () => SM,
      j: () => jM
    });
    class OM {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.dd = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(MM) {
        var rM;
        const {
          feet: iM,
          heading: OM,
          tuning: aM
        } = MM, PM = Math.min(Math.max(MM.dt, 0), .1), {
          pose: nM,
          dd: QM,
          target: zM
        } = this;
        if (this.started && PM > 0) {
          const MM = Math.hypot(iM[0] - this.lastFeet[0], iM[1] - this.lastFeet[1], iM[2] - this.lastFeet[2]);
          this.speed += (MM / PM - this.speed) * Math.min(PM / .15, 1)
        }
        this.lastFeet[0] = iM[0], this.lastFeet[1] = iM[1], this.lastFeet[2] = iM[2], this.stillS = this.speed > .3 ? 0 : this.stillS + PM;
        const LM = this.stillS >= .6 ? "perched" : "flying";
        "flying" === LM && "perched" === nM.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += PM, nM.mode = LM;
        const mM = Math.sin(OM),
          HM = Math.cos(OM);
        "perched" === LM ? (jM(zM, iM, aM.perchOffset, mM, HM), zM[1] += MM.headTopY - iM[1]) : (jM(zM, iM, aM.followOffset, mM, HM), zM[1] += SM(aM, MM.timeS));
        const {
          pos: hM
        } = nM, JM = Math.hypot(zM[0] - hM[0], zM[1] - hM[1], zM[2] - hM[2]);
        if (!this.started || JM > 8 || "perched" === LM && (this.perchLocked || JM < .05)) this.perchLocked = this.started && "perched" === LM, hM[0] = zM[0], hM[1] = zM[1], hM[2] = zM[2], QM[0] = QM[1] = QM[2] = 0;
        else {
          const MM = aM.followStiffness;
          for (let rM = 0; rM < 3; rM++) QM[rM] += (MM * MM * (zM[rM] - hM[rM]) - 2 * MM * QM[rM]) * PM, hM[rM] += QM[rM] * PM
        }
        const dM = OM + aM.yawOffset;
        var yM;
        return this.started ? nM.yaw += ((yM = dM - nM.yaw) - 2 * Math.PI * Math.round(yM / (2 * Math.PI))) * Math.min(8 * PM, 1) : nM.yaw = dM, this.started = !0, nM.seated = "perched" === LM && this.perchLocked, nM.clip = null === (rM = aM.clips) || void 0 === rM ? void 0 : rM[this.HS(LM)], nM
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      HS(MM) {
        return "perched" === MM ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function SM(MM, rM) {
      return MM.bobAmplitude * Math.sin(2 * Math.PI * MM.bobHz * rM)
    }

    function jM(MM, rM, iM, OM, SM) {
      const [jM, aM, PM] = iM;
      MM[0] = rM[0] + jM * SM + PM * OM, MM[1] = rM[1] + aM, MM[2] = rM[2] - jM * OM + PM * SM
    }
  },
  5248: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => DM,
      i: () => sM
    });
    var OM = iM(5251),
      SM = iM(313);
    const jM = 120,
      aM = 260,
      PM = 1.15,
      nM = 1.2,
      QM = 2,
      zM = 1.08,
      LM = .8,
      mM = .95,
      HM = 8,
      hM = "[\"')\\]\u300d\u300f\uff09]*",
      JM = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${hM}$`),
      dM = new RegExp(`[?\uff1f]${hM}$`),
      yM = new RegExp(`[!\uff01]${hM}$`),
      lM = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      EM = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      UM = new RegExp(`[${EM}]`),
      GM = new RegExp(`[${EM}]|[^${EM}]+`, "g"),
      CM = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eM(MM) {
      let rM = 2166136261;
      for (let iM = 0; iM < MM.length; iM++) rM ^= MM.charCodeAt(iM), rM = Math.imul(rM, 16777619);
      return (rM >>> 0) / 4294967295 * 2 - 1
    }

    function bM(MM) {
      var rM;
      if (UM.test(MM)) return 1;
      const iM = MM.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        OM = iM.replace(/[^0-9]/g, "");
      if (OM.length > 0 && !/\p{L}/u.test(iM)) return Math.min(OM.length, 4);
      const SM = null !== (rM = iM.match(CM)) && void 0 !== rM ? rM : [];
      if (0 === SM.length) {
        var jM, aM;
        const MM = null !== (jM = null === (aM = iM.match(/\p{L}/gu)) || void 0 === aM ? void 0 : aM.length) && void 0 !== jM ? jM : 0;
        return 0 === MM ? 0 : Math.min(Math.max(1, Math.round(MM / 2.5)), HM)
      }
      const PM = iM.replace(/[^\p{L}]/gu, ""),
        nM = SM.length > 1 && "e" === SM.at(-1) && PM.endsWith("e") && !PM.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(MM.replace(/[^\p{L}]/gu, ""));
      return Math.min(SM.length - (nM ? 1 : 0), HM)
    }

    function wM(MM) {
      return MM.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function tM(MM) {
      const rM = MM.replace(/[^\p{L}]/gu, "");
      return rM.length >= 2 && rM === rM.toUpperCase() && rM !== rM.toLowerCase()
    }

    function gM(MM, rM) {
      var iM;
      const HM = rM && (0, OM.p)(rM),
        hM = null !== (iM = null === HM || void 0 === HM ? void 0 : HM.syllableMs) && void 0 !== iM ? iM : OM.d,
        EM = function(MM) {
          const rM = [];
          for (const OM of (0, SM.bc)(MM))
            if ("string" === typeof OM)
              for (const MM of OM.split(/(\s+)/)) {
                if ("" === MM) continue;
                if (/^\s+$/.test(MM)) {
                  rM.push({
                    kind: "space",
                    text: MM
                  });
                  continue
                }
                if (!UM.test(MM)) {
                  rM.push({
                    kind: "word",
                    text: MM,
                    delayMs: 0
                  });
                  continue
                }
                let OM = !0;
                for (const SM of null !== (iM = MM.match(GM)) && void 0 !== iM ? iM : []) {
                  var iM;
                  const MM = rM.at(-1);
                  OM || "word" !== (null === MM || void 0 === MM ? void 0 : MM.kind) || UM.test(SM) || /[\p{L}\p{N}]/u.test(SM) ? (OM || rM.push({
                    kind: "space",
                    text: "\u200b"
                  }), rM.push({
                    kind: "word",
                    text: SM,
                    delayMs: 0
                  }), OM = !1) : MM.text += SM
                }
              } else rM.push({
                kind: "icon",
                text: OM.icon,
                delayMs: 0
              });
          return rM
        }(MM),
        CM = [];
      let gM = [];
      for (const OM of EM) "space" !== OM.kind && (gM.push(OM), JM.test(OM.text) && (CM.push(gM), gM = []));
      CM.push(gM);
      const uM = [];
      let RM = 0;
      for (const OM of CM) {
        var pM, WM;
        const MM = null !== (pM = null === (WM = OM.at(-1)) || void 0 === WM ? void 0 : WM.text) && void 0 !== pM ? pM : "",
          rM = dM.test(MM),
          iM = yM.test(MM),
          SM = OM.map((MM => "word" === MM.kind ? bM(MM.text) : 1)),
          EM = SM.findLastIndex((MM => MM > 0));
        for (const [dM, yM] of OM.entries()) {
          const MM = "word" === yM.kind,
            OM = SM[dM];
          yM.delayMs = RM;
          for (let SM = 0; HM && SM < OM; SM++) {
            const {
              intonation: jM
            } = HM;
            let aM = EM > 0 ? -jM.declineSemitones * (dM / EM) : 0;
            aM += eM(`${wM(yM.text)}|${SM}`) * jM.variationSemitones;
            const JM = Math.min(1, jM.variationSemitones);
            let lM = HM.glideSemitones,
              UM = 1;
            iM && (aM += jM.exclaimLiftSemitones, UM *= PM), rM && dM === EM && (aM += jM.questionRiseSemitones * (OM > 1 ? .5 + .5 * SM / (OM - 1) : 1), SM === OM - 1 && (lM = Math.abs(lM) + jM.questionRiseSemitones / 2)), MM && tM(yM.text) && (aM += QM * JM, UM *= nM), OM > 1 && 0 === SM && (aM += LM * JM, UM *= zM), uM.push({
              atMs: RM + SM * hM,
              semitones: aM,
              glideSemitones: lM,
              durationMs: SM < OM - 1 ? Math.min(HM.durationMs, hM * mM) : HM.durationMs,
              level: UM
            })
          }
          RM += OM * hM + (JM.test(yM.text) ? aM : lM.test(yM.text) ? jM : 0)
        }
      }
      return {
        pieces: EM.map((MM => "space" === MM.kind ? MM : "icon" === MM.kind ? {
          kind: "icon",
          icon: MM.text,
          delayMs: MM.delayMs
        } : {
          kind: "word",
          text: MM.text,
          delayMs: MM.delayMs
        })),
        blips: uM
      }
    }
    var uM = iM(1188),
      RM = iM(1258),
      pM = iM(2045);

    function WM(MM) {
      if ("string" === typeof MM) return MM;
      const rM = RM.e.get().getCurrentLanguageCode();
      return (0, uM.r)(rM, MM.translationKey, (0, uM.o)(MM.params, pM.c.shown))
    }

    function sM(MM) {
      const rM = void 0 === MM.voice ? null : (0, OM.r)(MM.voice),
        iM = rM && (0, OM.p)(rM);
      return {
        plan: gM(WM(MM.line), iM),
        synth: iM
      }
    }

    function DM(MM) {
      const rM = [];
      let iM = [];
      for (const [SM, jM] of MM.entries()) {
        var OM;
        "space" === jM.kind && (" " !== jM.text || "icon" !== (null === (OM = MM[SM + 1]) || void 0 === OM ? void 0 : OM.kind)) ? (iM.length > 0 && rM.push(iM), rM.push([jM]), iM = []) : iM.push(jM)
      }
      return iM.length > 0 && rM.push(iM), rM
    }
  },
  5259: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => LM
    });
    var OM = iM(5265),
      SM = iM(19);
    const jM = .25,
      aM = .85,
      PM = .02,
      nM = .01;

    function QM(MM, rM, iM, OM, SM, jM, PM) {
      const {
        waveform: nM,
        pitchHz: QM,
        attackMs: zM,
        releaseMs: LM,
        lowpassHz: mM
      } = iM, HM = SM + OM.durationMs / 1e3, hM = QM * 2 ** (OM.semitones / 12), JM = MM.createOscillator();
      JM.type = nM, JM.frequency.setValueAtTime(hM, SM), JM.frequency.exponentialRampToValueAtTime(hM * 2 ** (OM.glideSemitones / 12), HM);
      const dM = SM + Math.min(zM, OM.durationMs) / 1e3,
        yM = MM.createGain();
      yM.gain.setValueAtTime(0, SM), yM.gain.linearRampToValueAtTime(jM, dM), yM.gain.linearRampToValueAtTime(jM * aM, Math.max(dM, HM - LM / 1e3)), yM.gain.linearRampToValueAtTime(0, HM);
      const lM = [JM];
      if (null !== mM) {
        const rM = MM.createBiquadFilter();
        rM.type = "lowpass", rM.frequency.value = mM, lM.push(rM)
      }
      lM.push(yM, rM);
      for (let aM = 1; aM < lM.length; aM++) lM[aM - 1].connect(lM[aM]);
      return JM.onended = () => {
        for (const MM of lM.slice(0, -1)) MM.disconnect();
        PM()
      }, JM.start(SM), JM.stop(HM), JM
    }

    function zM(MM, rM, iM, OM, SM, aM) {
      if (0 === OM.length) return aM(), () => {};
      const zM = jM * iM.volume * SM,
        LM = MM.createGain();
      LM.connect(rM);
      const mM = MM.currentTime + PM,
        HM = new Set;
      for (const jM of OM) {
        const rM = QM(MM, LM, iM, jM, mM + jM.atMs / 1e3, zM * jM.level, (() => {
          HM.delete(rM), 0 === HM.size && (LM.disconnect(), aM())
        }));
        HM.add(rM)
      }
      return () => {
        const rM = MM.currentTime;
        LM.gain.setTargetAtTime(0, rM, nM);
        for (const MM of HM) try {
          MM.stop(rM + 5 * nM)
        } catch {}
      }
    }

    function LM(MM, rM) {
      var iM;
      const jM = OM.Howler.ctx,
        aM = OM.Howler.masterGain;
      if (!jM || !aM || !SM.d.get("soundOnFromAd")) return () => {};
      const PM = OM.Howler;
      return null === (iM = PM._autoResume) || void 0 === iM || iM.call(PM), zM(jM, aM, MM, rM, SM.d.get("soundVolume"), (() => {
        var MM;
        null === (MM = PM._autoSuspend) || void 0 === MM || MM.call(PM)
      }))
    }
  },
  40209: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      closeClientGame: () => VM,
      createDefaultClientPlugins: () => TM
    });
    var OM = iM(332);

    function SM() {
      let MM;
      return {
        onCreate(rM) {
          MM = rM
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(rM, iM, SM, jM, aM, PM) {
          var nM, QM;
          if ("Iron Chest" !== MM.getMetaInfo(aM).rootName) return;
          if (!MM.hasEffect(rM, "Thief")) return;
          const zM = MM.getBlockData(iM, SM, jM);
          return MM.getPlayerDbId(rM) !== (null === zM || void 0 === zM || null === (nM = zM.persisted) || void 0 === nM || null === (QM = nM.shared) || void 0 === QM ? void 0 : QM.ownerDbId) ? (MM.sendMessage(rM, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: OM.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var jM = iM(4577),
      aM = iM(1242);
    const PM = 8.4,
      nM = 1e-4,
      QM = .15,
      zM = .04,
      LM = [.12, .04, .12],
      mM = 26,
      HM = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        vL: 1,
        minLifeTime: nM,
        maxLifeTime: nM,
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
        blendMode: jM.d.Standard
      },
      hM = {
        texture: "bubble",
        mipmaps: !1,
        vL: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: mM,
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
        blendMode: jM.d.Standard
      },
      JM = [0, 0, 0],
      dM = [0, 0, 0];

    function yM(MM) {
      const rM = new Map;
      let iM = null;

      function OM(MM) {
        var rM, iM;
        null === (rM = MM.bubbles) || void 0 === rM || rM.stop(), null === (iM = MM.fish) || void 0 === iM || iM.stop()
      }

      function SM(iM) {
        if (!iM.readDrawnPosition(MM, dM)) {
          for (const MM of rM.values()) {
            var OM;
            null === (OM = MM.bubbles) || void 0 === OM || OM.setEmitRate(0)
          }
          return
        }
        const SM = performance.now();
        for (const [MM, aM] of rM) {
          var jM;
          if (null === (jM = aM.bubbles) || void 0 === jM || jM.setEmitRate(0), !iM.readDrawnPosition(MM, JM)) continue;
          if (!((JM[0] - dM[0]) ** 2 + (JM[1] - dM[1]) ** 2 + (JM[2] - dM[2]) ** 2 < 900)) continue;
          const rM = Math.max(0, aM.biteAt - SM),
            OM = aM.approachDurationMs > 0 ? Math.min(1, 1 - rM / aM.approachDurationMs) : 1,
            nM = (aM.approachDurationMs - rM) / 1e3,
            yM = aM.phase + .25 * Math.sin(1.7 * nM + aM.phase),
            lM = Math.min(aM.approachDurationMs / 3e3 * 2.8, PM) * (1 - OM) * (1 + .15 * Math.sin(2.1 * nM + aM.phase)),
            EM = Math.min(1, 4 * (1 - OM)),
            UM = (.45 * Math.sin(4.1 * nM + aM.phase) + .18 * Math.sin(9.7 * nM + 2 * aM.phase)) * EM,
            GM = JM[0] + Math.cos(yM) * lM - Math.sin(yM) * UM,
            CM = Math.ceil(aM.surfaceY),
            eM = JM[2] + Math.sin(yM) * lM + Math.cos(yM) * UM,
            {
              fishAt: bM,
              bubblesAt: wM
            } = aM;
          bM[0] = wM[0] = GM, bM[1] = CM + QM, wM[1] = CM + zM, bM[2] = wM[2] = eM, aM.fish ??= iM.createParticles(HM, {
            pos: bM
          }), aM.fish.moveTo(bM), aM.fish.emit(1), aM.bubbles ??= iM.createParticles(hM, {
            pos: wM,
            half: LM
          }), aM.bubbles.moveTo(wM), aM.bubbles.setEmitRate(mM + 32 * (.5 + .5 * Math.sin(9 * nM + aM.phase)) ** 4 + 13 * OM)
        }
      }
      return {
        onCreate(MM) {
          iM = MM
        },
        onAfterRender() {
          iM && SM(iM)
        },
        onClose() {
          for (const MM of rM.values()) OM(MM);
          rM.clear(), iM = null
        },
        onReceivedMessageFromServer(MM, iM) {
          if (MM !== aM.y) return;
          const {
            hookId: SM,
            waiting: jM
          } = iM;
          if (jM) rM.has(SM) || rM.set(SM, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + jM.remainingMs,
            approachDurationMs: jM.durationMs,
            surfaceY: jM.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const MM = rM.get(SM);
            MM && OM(MM), rM.delete(SM)
          }
        }
      }
    }
    var lM = iM(5259),
      EM = iM(5248);

    function UM(MM) {
      let rM, iM = null,
        OM = null;
      const SM = () => {
        var MM;
        null === (MM = OM) || void 0 === MM || MM(), OM = null
      };
      return {
        onCreate(OM) {
          rM = OM, iM = rM.getClientOption(MM, "dialogue")
        },
        onAfterRender() {
          if (!rM) return;
          const jM = rM.getClientOption(MM, "dialogue");
          if (jM === iM) return;
          if (iM = jM, SM(), !jM || !1 === jM.animateIn) return;
          const {
            plan: aM,
            synth: PM
          } = (0, EM.i)(jM);
          PM && (OM = (0, lM.g)(PM, aM.blips))
        },
        onClose: SM
      }
    }
    var GM = iM(40215);
    const CM = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      eM = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      bM = [0, 1, 2, 0, 2, 3];

    function wM(MM, rM, iM) {
      var OM;
      let [SM, jM, aM] = rM;
      if (MM.hasPackModel("Furnace")) return null;
      const PM = ((null !== (OM = MM.getMetaInfo(iM).rot) && void 0 !== OM ? OM : 1) - 1) * Math.PI / 2,
        nM = Math.PI + PM,
        QM = Math.cos(nM),
        zM = Math.sin(nM),
        LM = [];
      for (const [hM, JM] of CM) LM.push(hM * QM, JM, -hM * zM);
      const mM = {
          positions: LM,
          indices: bM,
          uvs: eM
        },
        HM = [SM + .5 + .51 * Math.sin(PM), jM + .375, aM + .5 + .51 * Math.cos(PM)];
      return MM.createGameMesh(mM, {
        kind: "furnaceFire"
      }, HM)
    }

    function tM(MM) {
      return Math.floor(MM / 200) % 3
    }

    function gM(MM, rM, iM) {
      MM.setGameMesh(rM, {
        uvOffset: [0, iM / 3]
      })
    }
    const uM = [.12, .025, .12],
      RM = [{
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
          blendMode: jM.d.Standard,
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
          blendMode: jM.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class pM {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(MM, rM) {
        const iM = MM.getBlockId(rM[0], rM[1], rM[2]);
        if ("Furnace" !== MM.getMetaInfo(iM).rootName) return;
        const OM = performance.now();
        let SM = this.smokes.find((MM => MM.pos[0] === rM[0] && MM.pos[1] === rM[1] && MM.pos[2] === rM[2] && MM.jP === iM));
        if (SM || (SM = {
            pos: [rM[0], rM[1], rM[2]],
            jP: iM,
            endMs: OM,
            lastBurstMs: -1 / 0,
            pending: new Array(RM.length).fill(0),
            fire: wM(MM, rM, iM)
          }, this.smokes.push(SM), null !== SM.fire && (gM(MM, SM.fire, tM(OM)), this.shownFireFrame = -1)), SM.endMs = OM + 6e3, this.smokes.length > 4) {
          const rM = this.smokes.reduce(((MM, rM) => rM.endMs < MM.endMs ? rM : MM));
          WM(MM, rM), this.smokes.splice(this.smokes.indexOf(rM), 1)
        }
        OM - SM.lastBurstMs >= 300 && (SM.lastBurstMs = OM, RM.forEach(((MM, rM) => {
          SM.pending[rM] += MM.style.count
        })))
      }
      onAfterRender(MM, rM) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const iM = performance.now();
        this.smokes = this.smokes.filter((rM => {
          const [OM, SM, jM] = rM.pos, aM = iM < rM.endMs && MM.getBlockId(OM, SM, jM) === rM.jP;
          return aM || WM(MM, rM), aM
        }));
        const OM = tM(iM);
        if (OM !== this.shownFireFrame) {
          this.shownFireFrame = OM;
          for (const rM of this.smokes) null !== rM.fire && gM(MM, rM.fire, OM)
        }
        if (!MM.particlesEnabled()) {
          for (const MM of this.smokes) MM.pending.fill(0);
          return
        }
        const SM = Math.min(rM, 250) / 1e3;
        for (const jM of this.smokes) {
          const [rM, OM, aM] = jM.pos;
          if (0 !== MM.getBlockId(rM, OM + 1, aM)) {
            jM.pending.fill(0);
            continue
          }
          const PM = (jM.endMs - iM) / 6e3,
            nM = this.centre;
          nM[0] = rM + .5, nM[1] = OM + 1.275, nM[2] = aM + .5, RM.forEach(((rM, iM) => {
            jM.pending[iM] += rM.perSecond * PM * SM;
            const OM = Math.floor(jM.pending[iM]);
            OM > 0 && this.emit(MM, iM, nM, OM) && (jM.pending[iM] -= OM)
          }))
        }
      }
      dispose(MM) {
        for (const iM of this.smokes) WM(MM, iM);
        this.smokes = [];
        for (const iM of null !== (rM = this.puffers) && void 0 !== rM ? rM : []) {
          var rM;
          iM.dispose()
        }
        this.puffers = null
      }
      emit(MM, rM, iM, OM) {
        return this.puffers ??= RM.map((MM => {
          let {
            style: rM,
            perSecond: iM
          } = MM;
          const OM = (rM.count / .3 + iM) * rM.life[1];
          return new GM.i(rM, Math.ceil(4 * OM), uM)
        })), this.puffers[rM].emit(MM, iM, this.renderFrame, OM)
      }
    }

    function WM(MM, rM) {
      null !== rM.fire && (MM.disposeGameMesh(rM.fire), rM.fire = null)
    }

    function sM() {
      let MM;
      const rM = new pM;
      return {
        onCreate(rM) {
          MM = rM
        },
        onReceivedMessageFromServer(iM, OM) {
          iM === aM.A && rM.start(MM, OM)
        },
        onAfterRender(iM) {
          rM.onAfterRender(MM, iM)
        },
        onClose() {
          rM.dispose(MM)
        }
      }
    }
    var DM = iM(181),
      kM = iM(40186),
      ZM = iM(40219),
      oM = iM(40222);
    class fM {
      constructor(MM, rM, iM) {
        this.api = MM, this.wearer = rM, this.name = iM, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new oM.c, this.shown = !1, this.raised = 0
      }
      update(MM) {
        var rM;
        const iM = (0, kM.k)(this.name);
        if (!iM) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === iM.model && this.madeFrom.scale === iM.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(iM.model, iM.scale), this.madeFrom = iM, !this.model)) return void this.raiseNametag(0);
        if (!(MM.drawn && !MM.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const OM = this.motion.step({
          dt: MM.dt,
          feet: MM.feet,
          heading: MM.heading,
          headTopY: MM.headTopY,
          tuning: iM,
          timeS: MM.timeS
        });
        this.model.setPose(OM.pos, OM.yaw + Math.PI), this.model.setClip(null !== (rM = OM.clip) && void 0 !== rM ? rM : null);
        const SM = OM.seated ? iM : null;
        SM !== this.perchedWith && (this.perchedWith = SM, this.model.setPerch(SM && {
          QS: this.wearer,
          offset: SM.perchOffset,
          yaw: SM.yawOffset
        })), this.setShown(!0), this.raiseNametag(iM.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(MM) {
        MM !== this.raised && (this.raised = MM, this.api.setNametagOffset(this.wearer, MM))
      }
      freeModel() {
        var MM;
        null === (MM = this.model) || void 0 === MM || MM.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(MM) {
        this.model && MM !== this.shown && (this.shown = MM, this.model.setVisible(MM))
      }
    }
    class YM {
      constructor(MM, rM) {
        this.api = MM, this.name = rM, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(MM) {
        const rM = (0, kM.h)(this.name);
        if (rM !== this.madeFrom && this.stop(), !rM) return;
        const iM = MM.ownFirstPerson ? rM.ownInFirstPerson : MM.drawn;
        if (iM) {
          const {
            centre: iM
          } = this;
          if ((0, oM.j)(iM, MM.feet, rM.offset, Math.sin(MM.heading), Math.cos(MM.heading)), this.particles) this.particles.moveTo(iM, this.half);
          else {
            const MM = (0, ZM.b)(rM);
            this.half = MM.half, this.particles = this.api.createParticles(MM.opts, {
              pos: iM,
              half: MM.half
            }), this.madeFrom = rM, this.emitting = !0
          }
        }
        this.particles && iM !== this.emitting && (this.emitting = iM, this.particles.setEmitRate(iM ? rM.particles.emitRate : 0))
      }
      stop() {
        var MM;
        null === (MM = this.particles) || void 0 === MM || MM.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const NM = .25,
      AM = 48,
      xM = 4,
      vM = 24,
      FM = 12,
      BM = .6,
      XM = 1 / DM.f.playerEyeToHeightRatio;

    function IM(MM, rM, iM) {
      const OM = MM.filter((MM => MM[rM] <= AM));
      return OM.sort(((MM, iM) => MM[rM] - iM[rM])), new Set(OM.slice(0, iM).map((MM => MM.id)))
    }

    function KM() {
      let MM;
      const rM = new Map;
      let iM = 0,
        OM = 0;
      const SM = [0, 0, 0],
        jM = {
          feet: SM,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function aM(MM) {
        var rM, iM;
        null === (rM = MM.pet) || void 0 === rM || rM.dispose(), null === (iM = MM.aura) || void 0 === iM || iM.stop()
      }

      function PM(rM, iM) {
        var OM, aM;
        const {
          id: PM
        } = rM, nM = MM.readDrawnPosition(PM, SM) ? MM.getDrawnHeading(PM) : null, QM = null === nM ? null : MM.getDrawnEyeHeight(PM);
        if (null === nM || null === QM) jM.drawn = !1, jM.ownFirstPerson = !1;
        else {
          const rM = iM.cameraPosition;
          jM.heading = nM, jM.headTopY = SM[1] + QM * XM, jM.drawn = MM.isAlive(PM) && MM.isEntityDrawn(PM), jM.ownFirstPerson = MM.isLocalPlayer(PM) && MM.isAlive(PM) && Math.hypot(rM[0] - SM[0], rM[1] - SM[1] - QM, rM[2] - SM[2]) < BM
        }
        null === (OM = rM.pet) || void 0 === OM || OM.update(jM), null === (aM = rM.aura) || void 0 === aM || aM.update(jM)
      }
      return {
        onCreate(rM) {
          MM = rM
        },
        onAfterRender(nM, QM) {
          const zM = nM / 1e3;
          OM += zM, iM -= zM, iM <= 0 && (iM = NM, function(iM) {
            const OM = [];
            for (const aM of MM.getPlayerIds()) {
              const jM = MM.getPlayerCosmetics(aM),
                PM = void 0 !== (null === jM || void 0 === jM ? void 0 : jM.pet) && (0, kM.k)(jM.pet) ? jM.pet : null,
                nM = void 0 !== (null === jM || void 0 === jM ? void 0 : jM.aura) && (0, kM.h)(jM.aura) ? jM.aura : null;
              if (null === PM && null === nM || !MM.readDrawnPosition(aM, SM)) continue;
              const QM = Math.hypot(SM[0] - iM[0], SM[1] - iM[1], SM[2] - iM[2]),
                zM = rM.get(aM);
              OM.push({
                id: aM,
                pet: PM,
                aura: nM,
                petDist: null === PM ? 1 / 0 : QM - (null !== zM && void 0 !== zM && zM.pet ? xM : 0),
                auraDist: null === nM ? 1 / 0 : QM - (null !== zM && void 0 !== zM && zM.aura ? xM : 0)
              })
            }
            const jM = IM(OM, "petDist", vM),
              PM = MM.particlesEnabled() ? IM(OM, "auraDist", FM) : new Set,
              nM = new Set;
            for (const {
                id: SM,
                pet: aM,
                aura: JM
              }
              of OM) {
              var QM, zM, LM;
              const iM = null !== (QM = rM.get(SM)) && void 0 !== QM ? QM : {
                  id: SM,
                  pet: null,
                  aura: null
                },
                OM = jM.has(SM) ? aM : null,
                dM = PM.has(SM) ? JM : null;
              var mM, HM, hM;
              (null === (zM = iM.pet) || void 0 === zM ? void 0 : zM.name) !== OM ? (null === (mM = iM.pet) || void 0 === mM || mM.dispose(), iM.pet = null === OM ? null : new fM(MM, SM, OM)) : null === (HM = iM.pet) || void 0 === HM || HM.refreshNametag(), (null === (LM = iM.aura) || void 0 === LM ? void 0 : LM.name) !== dM && (null === (hM = iM.aura) || void 0 === hM || hM.stop(), iM.aura = null === dM ? null : new YM(MM, dM)), (iM.pet || iM.aura) && (rM.set(SM, iM), nM.add(SM))
            }
            for (const [MM, SM] of rM) nM.has(MM) || (aM(SM), rM.delete(MM))
          }(QM.cameraPosition)), jM.dt = zM, jM.timeS = OM;
          for (const MM of rM.values()) PM(MM, QM)
        },
        onClose() {
          for (const MM of rM.values()) aM(MM);
          rM.clear()
        }
      }
    }
    var qM = iM(9337);

    function TM(MM, rM, iM, OM) {
      return {
        cosmeticCompanions: KM(),
        dialogue: UM(OM.localPlayerId),
        fishing: yM(OM.localPlayerId),
        furnaceSmoke: sM(),
        ironChest: SM(),
        localBlockBroken: (0, qM.e)()
      }
    }

    function VM(MM, rM) {
      for (const SM of [MM, ...null !== rM && void 0 !== rM ? rM : []]) try {
        var iM;
        null === SM || void 0 === SM || null === (iM = SM.onClose) || void 0 === iM || iM.call(SM)
      } catch (OM) {
        console.error("Error in client onClose callback", OM)
      }
    }
  },
  9337: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      h: () => SM
    });
    var OM = iM(22);
    const SM = "localBlockBroken";

    function jM() {
      return {
        onPlayerChangeBlock(MM, rM, iM, jM, aM, PM) {
          "Air" === PM && OM.i.Tz(SM)
        }
      }
    }
  },
  40215: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM,
      i: () => jM
    });
    const OM = 1 / .6,
      SM = {
        kind: "smokePuff"
      };
    class jM {
      constructor(MM, rM, iM) {
        this.style = MM, this.vL = rM, this.half = iM, this.particles = null, this.lastFrame = -1
      }
      emit(MM, rM, iM) {
        let jM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return iM !== this.lastFrame && (this.lastFrame = iM, this.particles || (this.particles = MM.createParticles(function(MM, rM) {
          const [
            [iM, jM, aM],
            [PM, nM, QM]
          ] = MM.colours;
          return {
            texture: MM.soft ? SM : "square_particle",
            vL: rM,
            minLifeTime: MM.life[0] / OM,
            maxLifeTime: MM.life[1] / OM,
            minEmitPower: MM.power[0] * OM,
            maxEmitPower: MM.power[1] * OM,
            minSize: MM.size[0],
            maxSize: MM.size[1],
            emitRate: 0,
            gravity: [0, MM.lift * OM * OM, 0],
            dir1: [-MM.spread, 1, -MM.spread],
            dir2: [MM.spread, 1, MM.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [iM, jM, aM, MM.alpha],
              maxColor: [PM, nM, QM, MM.alpha]
            }, {
              timeFraction: 1,
              minColor: [iM, jM, aM, 0],
              maxColor: [PM, nM, QM, 0]
            }],
            blendMode: MM.blendMode
          }
        }(this.style, this.vL), {
          pos: rM,
          half: this.half
        })), this.particles.moveTo(rM, this.half), this.particles.emit(jM), !0)
      }
      dispose() {
        var MM;
        null === (MM = this.particles) || void 0 === MM || MM.stop(), this.particles = null
      }
    }
  },
  5251: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM,
      h: () => OM,
      l: () => jM,
      p: () => nM,
      r: () => aM
    });
    const OM = ["sine", "triangle", "square", "sawtooth"],
      SM = 55,
      jM = {
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

    function aM(MM) {
      return "string" !== typeof MM ? MM : Object.hasOwn(jM, MM) ? jM[MM] : null
    }

    function PM(MM, rM, iM) {
      return Math.min(iM, Math.max(rM, MM))
    }

    function nM(MM) {
      const rM = PM(MM.durationMs, 10, 500),
        iM = PM(MM.attackMs, 0, rM),
        {
          intonation: SM
        } = MM;
      return {
        waveform: OM.includes(MM.waveform) ? MM.waveform : "sine",
        pitchHz: PM(MM.pitchHz, 20, 4e3),
        glideSemitones: PM(MM.glideSemitones, -24, 24),
        durationMs: rM,
        attackMs: iM,
        releaseMs: PM(MM.releaseMs, 0, rM - iM),
        lowpassHz: null === MM.lowpassHz ? null : PM(MM.lowpassHz, 20, 2e4),
        volume: PM(MM.volume, 0, 2),
        intonation: {
          variationSemitones: PM(SM.variationSemitones, 0, 6),
          declineSemitones: PM(SM.declineSemitones, 0, 12),
          questionRiseSemitones: PM(SM.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: PM(SM.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: PM(MM.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);