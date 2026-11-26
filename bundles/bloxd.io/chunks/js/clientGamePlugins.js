export const id = 32;
export const ids = [32];
export const modules = {
  39860: (BB, OB, GB) => {
    function YB(BB) {
      return void 0 === BB ? void 0 : [BB[0], BB[1], BB[2]]
    }

    function DB(BB) {
      const OB = BB.particles;
      return {
        opts: {
          texture: OB.texture,
          CP: OB.CP,
          minLifeTime: OB.minLifeTime,
          maxLifeTime: OB.maxLifeTime,
          minSize: OB.minSize,
          maxSize: OB.maxSize,
          minEmitPower: OB.minEmitPower,
          maxEmitPower: OB.maxEmitPower,
          emitRate: OB.emitRate,
          gravity: YB(OB.gravity),
          dir1: YB(OB.dir1),
          dir2: YB(OB.dir2),
          colorGradients: OB.colorGradients,
          blendMode: OB.blendMode
        },
        half: [OB.width / 2, OB.height / 2, OB.depth / 2]
      }
    }
    GB.d(OB, {
      c: () => DB
    })
  },
  39836: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      d: () => JB,
      f: () => yB,
      g: () => oB
    });
    var YB = GB(204);
    const DB = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      QB = "PetRoot";
    let oB = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      jB = DB;
    new Map, new Map;

    function yB(BB) {
      var OB;
      return null !== (OB = (0, YB.c)(oB, BB)) && void 0 !== OB ? OB : null
    }

    function JB(BB) {
      var OB;
      return null !== (OB = (0, YB.c)(jB, BB)) && void 0 !== OB ? OB : null
    }
  },
  39869: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB,
      g: () => DB,
      h: () => QB
    });
    class YB {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.lZ = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(BB) {
        var OB;
        const {
          feet: GB,
          heading: YB,
          tuning: oB
        } = BB, jB = Math.min(Math.max(BB.dt, 0), .1), {
          pose: yB,
          lZ: JB,
          target: MB
        } = this;
        if (this.started && jB > 0) {
          const BB = Math.hypot(GB[0] - this.lastFeet[0], GB[1] - this.lastFeet[1], GB[2] - this.lastFeet[2]);
          this.speed += (BB / jB - this.speed) * Math.min(jB / .15, 1)
        }
        this.lastFeet[0] = GB[0], this.lastFeet[1] = GB[1], this.lastFeet[2] = GB[2], this.stillS = this.speed > .3 ? 0 : this.stillS + jB;
        const PB = this.stillS >= .6 ? "perched" : "flying";
        "flying" === PB && "perched" === yB.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += jB, yB.mode = PB;
        const zB = Math.sin(YB),
          lB = Math.cos(YB);
        "perched" === PB ? (QB(MB, GB, oB.perchOffset, zB, lB), MB[1] += BB.headTopY - GB[1]) : (QB(MB, GB, oB.followOffset, zB, lB), MB[1] += DB(oB, BB.timeS));
        const {
          pos: pB
        } = yB, qB = Math.hypot(MB[0] - pB[0], MB[1] - pB[1], MB[2] - pB[2]);
        if (!this.started || qB > 8 || "perched" === PB && (this.perchLocked || qB < .05)) this.perchLocked = this.started && "perched" === PB, pB[0] = MB[0], pB[1] = MB[1], pB[2] = MB[2], JB[0] = JB[1] = JB[2] = 0;
        else {
          const BB = oB.followStiffness;
          for (let OB = 0; OB < 3; OB++) JB[OB] += (BB * BB * (MB[OB] - pB[OB]) - 2 * BB * JB[OB]) * jB, pB[OB] += JB[OB] * jB
        }
        const ZB = YB + oB.yawOffset;
        var NB;
        return this.started ? yB.yaw += ((NB = ZB - yB.yaw) - 2 * Math.PI * Math.round(NB / (2 * Math.PI))) * Math.min(8 * jB, 1) : yB.yaw = ZB, this.started = !0, yB.seated = "perched" === PB && this.perchLocked, yB.clip = null === (OB = oB.clips) || void 0 === OB ? void 0 : OB[this.pG(PB)], yB
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      pG(BB) {
        return "perched" === BB ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function DB(BB, OB) {
      return BB.bobAmplitude * Math.sin(2 * Math.PI * BB.bobHz * OB)
    }

    function QB(BB, OB, GB, YB, DB) {
      const [QB, oB, jB] = GB;
      BB[0] = OB[0] + QB * DB + jB * YB, BB[1] = OB[1] + oB, BB[2] = OB[2] - QB * YB + jB * DB
    }
  },
  5337: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => iB,
      c: () => FB
    });
    var YB = GB(5345),
      DB = GB(331);
    const QB = 120,
      oB = 260,
      jB = 1.15,
      yB = 1.2,
      JB = 2,
      MB = 1.08,
      PB = .8,
      zB = .95,
      lB = 8,
      pB = "[\"')\\]\u300d\u300f\uff09]*",
      qB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${pB}$`),
      ZB = new RegExp(`[?\uff1f]${pB}$`),
      NB = new RegExp(`[!\uff01]${pB}$`),
      RB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AB = new RegExp(`[${WB}]`),
      VB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
      SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function nB(BB) {
      let OB = 2166136261;
      for (let GB = 0; GB < BB.length; GB++) OB ^= BB.charCodeAt(GB), OB = Math.imul(OB, 16777619);
      return (OB >>> 0) / 4294967295 * 2 - 1
    }

    function UB(BB) {
      var OB;
      if (AB.test(BB)) return 1;
      const GB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        YB = GB.replace(/[^0-9]/g, "");
      if (YB.length > 0 && !/\p{L}/u.test(GB)) return Math.min(YB.length, 4);
      const DB = null !== (OB = GB.match(SB)) && void 0 !== OB ? OB : [];
      if (0 === DB.length) {
        var QB, oB;
        const BB = null !== (QB = null === (oB = GB.match(/\p{L}/gu)) || void 0 === oB ? void 0 : oB.length) && void 0 !== QB ? QB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), lB)
      }
      const jB = GB.replace(/[^\p{L}]/gu, ""),
        yB = DB.length > 1 && "e" === DB.at(-1) && jB.endsWith("e") && !jB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(DB.length - (yB ? 1 : 0), lB)
    }

    function fB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function kB(BB) {
      const OB = BB.replace(/[^\p{L}]/gu, "");
      return OB.length >= 2 && OB === OB.toUpperCase() && OB !== OB.toLowerCase()
    }

    function dB(BB, OB) {
      var GB;
      const lB = OB && (0, YB.j)(OB),
        pB = null !== (GB = null === lB || void 0 === lB ? void 0 : lB.syllableMs) && void 0 !== GB ? GB : YB.d,
        WB = function(BB) {
          const OB = [];
          for (const YB of (0, DB.hc)(BB))
            if ("string" === typeof YB)
              for (const BB of YB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  OB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!AB.test(BB)) {
                  OB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let YB = !0;
                for (const DB of null !== (GB = BB.match(VB)) && void 0 !== GB ? GB : []) {
                  var GB;
                  const BB = OB.at(-1);
                  YB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || AB.test(DB) || /[\p{L}\p{N}]/u.test(DB) ? (YB || OB.push({
                    kind: "space",
                    text: "\u200b"
                  }), OB.push({
                    kind: "word",
                    text: DB,
                    delayMs: 0
                  }), YB = !1) : BB.text += DB
                }
              } else OB.push({
                kind: "icon",
                text: YB.icon,
                delayMs: 0
              });
          return OB
        }(BB),
        SB = [];
      let dB = [];
      for (const YB of WB) "space" !== YB.kind && (dB.push(YB), qB.test(YB.text) && (SB.push(dB), dB = []));
      SB.push(dB);
      const KB = [];
      let uB = 0;
      for (const YB of SB) {
        var mB, IB;
        const BB = null !== (mB = null === (IB = YB.at(-1)) || void 0 === IB ? void 0 : IB.text) && void 0 !== mB ? mB : "",
          OB = ZB.test(BB),
          GB = NB.test(BB),
          DB = YB.map((BB => "word" === BB.kind ? UB(BB.text) : 1)),
          WB = DB.findLastIndex((BB => BB > 0));
        for (const [ZB, NB] of YB.entries()) {
          const BB = "word" === NB.kind,
            YB = DB[ZB];
          NB.delayMs = uB;
          for (let DB = 0; lB && DB < YB; DB++) {
            const {
              intonation: QB
            } = lB;
            let oB = WB > 0 ? -QB.declineSemitones * (ZB / WB) : 0;
            oB += nB(`${fB(NB.text)}|${DB}`) * QB.variationSemitones;
            const qB = Math.min(1, QB.variationSemitones);
            let RB = lB.glideSemitones,
              AB = 1;
            GB && (oB += QB.exclaimLiftSemitones, AB *= jB), OB && ZB === WB && (oB += QB.questionRiseSemitones * (YB > 1 ? .5 + .5 * DB / (YB - 1) : 1), DB === YB - 1 && (RB = Math.abs(RB) + QB.questionRiseSemitones / 2)), BB && kB(NB.text) && (oB += JB * qB, AB *= yB), YB > 1 && 0 === DB && (oB += PB * qB, AB *= MB), KB.push({
              atMs: uB + DB * pB,
              semitones: oB,
              glideSemitones: RB,
              durationMs: DB < YB - 1 ? Math.min(lB.durationMs, pB * zB) : lB.durationMs,
              level: AB
            })
          }
          uB += YB * pB + (qB.test(NB.text) ? oB : RB.test(NB.text) ? QB : 0)
        }
      }
      return {
        pieces: WB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: KB
      }
    }
    var KB = GB(1175),
      uB = GB(1253),
      mB = GB(2027);

    function IB(BB) {
      if ("string" === typeof BB) return BB;
      const OB = uB.e.get().getCurrentLanguageCode();
      return (0, KB.x)(OB, BB.translationKey, (0, KB.v)(BB.params, mB.d.shown))
    }

    function FB(BB) {
      const OB = void 0 === BB.voice ? null : (0, YB.k)(BB.voice),
        GB = OB && (0, YB.j)(OB);
      return {
        plan: dB(IB(BB.line), GB),
        synth: GB
      }
    }

    function iB(BB) {
      const OB = [];
      let GB = [];
      for (const [DB, QB] of BB.entries()) {
        var YB;
        "space" === QB.kind && (" " !== QB.text || "icon" !== (null === (YB = BB[DB + 1]) || void 0 === YB ? void 0 : YB.kind)) ? (GB.length > 0 && OB.push(GB), OB.push([QB]), GB = []) : GB.push(QB)
      }
      return GB.length > 0 && OB.push(GB), OB
    }
  },
  5349: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      f: () => PB
    });
    var YB = GB(5353),
      DB = GB(16);
    const QB = .25,
      oB = .85,
      jB = .02,
      yB = .01;

    function JB(BB, OB, GB, YB, DB, QB, jB) {
      const {
        waveform: yB,
        pitchHz: JB,
        attackMs: MB,
        releaseMs: PB,
        lowpassHz: zB
      } = GB, lB = DB + YB.durationMs / 1e3, pB = JB * 2 ** (YB.semitones / 12), qB = BB.createOscillator();
      qB.type = yB, qB.frequency.setValueAtTime(pB, DB), qB.frequency.exponentialRampToValueAtTime(pB * 2 ** (YB.glideSemitones / 12), lB);
      const ZB = DB + Math.min(MB, YB.durationMs) / 1e3,
        NB = BB.createGain();
      NB.gain.setValueAtTime(0, DB), NB.gain.linearRampToValueAtTime(QB, ZB), NB.gain.linearRampToValueAtTime(QB * oB, Math.max(ZB, lB - PB / 1e3)), NB.gain.linearRampToValueAtTime(0, lB);
      const RB = [qB];
      if (null !== zB) {
        const OB = BB.createBiquadFilter();
        OB.type = "lowpass", OB.frequency.value = zB, RB.push(OB)
      }
      RB.push(NB, OB);
      for (let oB = 1; oB < RB.length; oB++) RB[oB - 1].connect(RB[oB]);
      return qB.onended = () => {
        for (const BB of RB.slice(0, -1)) BB.disconnect();
        jB()
      }, qB.start(DB), qB.stop(lB), qB
    }

    function MB(BB, OB, GB, YB, DB, oB) {
      if (0 === YB.length) return oB(), () => {};
      const MB = QB * GB.volume * DB,
        PB = BB.createGain();
      PB.connect(OB);
      const zB = BB.currentTime + jB,
        lB = new Set;
      for (const QB of YB) {
        const OB = JB(BB, PB, GB, QB, zB + QB.atMs / 1e3, MB * QB.level, (() => {
          lB.delete(OB), 0 === lB.size && (PB.disconnect(), oB())
        }));
        lB.add(OB)
      }
      return () => {
        const OB = BB.currentTime;
        PB.gain.setTargetAtTime(0, OB, yB);
        for (const BB of lB) try {
          BB.stop(OB + 5 * yB)
        } catch {}
      }
    }

    function PB(BB, OB) {
      var GB;
      const QB = YB.Howler.ctx,
        oB = YB.Howler.masterGain;
      if (!QB || !oB || !DB.c.get("soundOnFromAd")) return () => {};
      const jB = YB.Howler;
      return null === (GB = jB._autoResume) || void 0 === GB || GB.call(jB), MB(QB, oB, BB, OB, DB.c.get("soundVolume"), (() => {
        var BB;
        null === (BB = jB._autoSuspend) || void 0 === BB || BB.call(jB)
      }))
    }
  },
  39849: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      closeClientGame: () => PO,
      createDefaultClientPlugins: () => MO
    });
    var YB = GB(353);

    function DB() {
      let BB;
      return {
        onCreate(OB) {
          BB = OB
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(OB, GB, DB, QB, oB, jB) {
          var yB, JB;
          if ("Iron Chest" !== BB.getMetaInfo(oB).rootName) return;
          if (!BB.hasEffect(OB, "Thief")) return;
          const MB = BB.getBlockData(GB, DB, QB);
          return BB.getPlayerDbId(OB) !== (null === MB || void 0 === MB || null === (yB = MB.persisted) || void 0 === yB || null === (JB = yB.shared) || void 0 === JB ? void 0 : JB.ownerDbId) ? (BB.sendMessage(OB, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: YB.J.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var QB = GB(4642),
      oB = GB(1238);
    const jB = 8.4,
      yB = 1e-4,
      JB = .15,
      MB = .04,
      PB = [.12, .04, .12],
      zB = 26,
      lB = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        CP: 1,
        minLifeTime: yB,
        maxLifeTime: yB,
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
        blendMode: QB.f.Standard
      },
      pB = {
        texture: "bubble",
        mipmaps: !1,
        CP: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: zB,
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
        blendMode: QB.f.Standard
      },
      qB = [0, 0, 0],
      ZB = [0, 0, 0];

    function NB(BB) {
      const OB = new Map;
      let GB = null;

      function YB(BB) {
        var OB, GB;
        null === (OB = BB.bubbles) || void 0 === OB || OB.stop(), null === (GB = BB.fish) || void 0 === GB || GB.stop()
      }

      function DB(GB) {
        if (!GB.readDrawnPosition(BB, ZB)) {
          for (const BB of OB.values()) {
            var YB;
            null === (YB = BB.bubbles) || void 0 === YB || YB.setEmitRate(0)
          }
          return
        }
        const DB = performance.now();
        for (const [BB, oB] of OB) {
          var QB;
          if (null === (QB = oB.bubbles) || void 0 === QB || QB.setEmitRate(0), !GB.readDrawnPosition(BB, qB)) continue;
          if (!((qB[0] - ZB[0]) ** 2 + (qB[1] - ZB[1]) ** 2 + (qB[2] - ZB[2]) ** 2 < 900)) continue;
          const OB = Math.max(0, oB.biteAt - DB),
            YB = oB.approachDurationMs > 0 ? Math.min(1, 1 - OB / oB.approachDurationMs) : 1,
            yB = (oB.approachDurationMs - OB) / 1e3,
            NB = oB.phase + .25 * Math.sin(1.7 * yB + oB.phase),
            RB = Math.min(oB.approachDurationMs / 3e3 * 2.8, jB) * (1 - YB) * (1 + .15 * Math.sin(2.1 * yB + oB.phase)),
            WB = Math.min(1, 4 * (1 - YB)),
            AB = (.45 * Math.sin(4.1 * yB + oB.phase) + .18 * Math.sin(9.7 * yB + 2 * oB.phase)) * WB,
            VB = qB[0] + Math.cos(NB) * RB - Math.sin(NB) * AB,
            SB = Math.ceil(oB.surfaceY),
            nB = qB[2] + Math.sin(NB) * RB + Math.cos(NB) * AB,
            {
              fishAt: UB,
              bubblesAt: fB
            } = oB;
          UB[0] = fB[0] = VB, UB[1] = SB + JB, fB[1] = SB + MB, UB[2] = fB[2] = nB, oB.fish ??= GB.createParticles(lB, {
            pos: UB
          }), oB.fish.moveTo(UB), oB.fish.emit(1), oB.bubbles ??= GB.createParticles(pB, {
            pos: fB,
            half: PB
          }), oB.bubbles.moveTo(fB), oB.bubbles.setEmitRate(zB + 32 * (.5 + .5 * Math.sin(9 * yB + oB.phase)) ** 4 + 13 * YB)
        }
      }
      return {
        onCreate(BB) {
          GB = BB
        },
        onAfterRender() {
          GB && DB(GB)
        },
        onClose() {
          for (const BB of OB.values()) YB(BB);
          OB.clear(), GB = null
        },
        onReceivedMessageFromServer(BB, GB) {
          if (BB !== oB.y) return;
          const {
            hookId: DB,
            waiting: QB
          } = GB;
          if (QB) OB.has(DB) || OB.set(DB, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + QB.remainingMs,
            approachDurationMs: QB.durationMs,
            surfaceY: QB.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const BB = OB.get(DB);
            BB && YB(BB), OB.delete(DB)
          }
        }
      }
    }
    var RB = GB(5349),
      WB = GB(5337);

    function AB(BB) {
      let OB, GB = null,
        YB = null;
      const DB = () => {
        var BB;
        null === (BB = YB) || void 0 === BB || BB(), YB = null
      };
      return {
        onCreate(YB) {
          OB = YB, GB = OB.getClientOption(BB, "dialogue")
        },
        onAfterRender() {
          if (!OB) return;
          const QB = OB.getClientOption(BB, "dialogue");
          if (QB === GB) return;
          if (GB = QB, DB(), !QB || !1 === QB.animateIn) return;
          const {
            plan: oB,
            synth: jB
          } = (0, WB.c)(QB);
          jB && (YB = (0, RB.f)(jB, oB.blips))
        },
        onClose: DB
      }
    }
    var VB = GB(39858);
    const SB = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      nB = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      UB = [0, 1, 2, 0, 2, 3];

    function fB(BB, OB, GB) {
      var YB;
      let [DB, QB, oB] = OB;
      if (BB.hasPackModel("Furnace")) return null;
      const jB = ((null !== (YB = BB.getMetaInfo(GB).rot) && void 0 !== YB ? YB : 1) - 1) * Math.PI / 2,
        yB = Math.PI + jB,
        JB = Math.cos(yB),
        MB = Math.sin(yB),
        PB = [];
      for (const [pB, qB] of SB) PB.push(pB * JB, qB, -pB * MB);
      const zB = {
          positions: PB,
          indices: UB,
          uvs: nB
        },
        lB = [DB + .5 + .51 * Math.sin(jB), QB + .375, oB + .5 + .51 * Math.cos(jB)];
      return BB.createGameMesh(zB, {
        kind: "furnaceFire"
      }, lB)
    }

    function kB(BB) {
      return Math.floor(BB / 200) % 3
    }

    function dB(BB, OB, GB) {
      BB.setGameMesh(OB, {
        uvOffset: [0, GB / 3]
      })
    }
    const KB = [.12, .025, .12],
      uB = [{
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
          blendMode: QB.f.Standard,
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
          blendMode: QB.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class mB {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(BB, OB) {
        const GB = BB.getBlockId(OB[0], OB[1], OB[2]);
        if ("Furnace" !== BB.getMetaInfo(GB).rootName) return;
        const YB = performance.now();
        let DB = this.smokes.find((BB => BB.pos[0] === OB[0] && BB.pos[1] === OB[1] && BB.pos[2] === OB[2] && BB.SM === GB));
        if (DB || (DB = {
            pos: [OB[0], OB[1], OB[2]],
            SM: GB,
            endMs: YB,
            lastBurstMs: -1 / 0,
            pending: new Array(uB.length).fill(0),
            fire: fB(BB, OB, GB)
          }, this.smokes.push(DB), null !== DB.fire && (dB(BB, DB.fire, kB(YB)), this.shownFireFrame = -1)), DB.endMs = YB + 6e3, this.smokes.length > 4) {
          const OB = this.smokes.reduce(((BB, OB) => OB.endMs < BB.endMs ? OB : BB));
          IB(BB, OB), this.smokes.splice(this.smokes.indexOf(OB), 1)
        }
        YB - DB.lastBurstMs >= 300 && (DB.lastBurstMs = YB, uB.forEach(((BB, OB) => {
          DB.pending[OB] += BB.style.count
        })))
      }
      onAfterRender(BB, OB) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const GB = performance.now();
        this.smokes = this.smokes.filter((OB => {
          const [YB, DB, QB] = OB.pos, oB = GB < OB.endMs && BB.getBlockId(YB, DB, QB) === OB.SM;
          return oB || IB(BB, OB), oB
        }));
        const YB = kB(GB);
        if (YB !== this.shownFireFrame) {
          this.shownFireFrame = YB;
          for (const OB of this.smokes) null !== OB.fire && dB(BB, OB.fire, YB)
        }
        if (!BB.particlesEnabled()) {
          for (const BB of this.smokes) BB.pending.fill(0);
          return
        }
        const DB = Math.min(OB, 250) / 1e3;
        for (const QB of this.smokes) {
          const [OB, YB, oB] = QB.pos;
          if (0 !== BB.getBlockId(OB, YB + 1, oB)) {
            QB.pending.fill(0);
            continue
          }
          const jB = (QB.endMs - GB) / 6e3,
            yB = this.centre;
          yB[0] = OB + .5, yB[1] = YB + 1.275, yB[2] = oB + .5, uB.forEach(((OB, GB) => {
            QB.pending[GB] += OB.perSecond * jB * DB;
            const YB = Math.floor(QB.pending[GB]);
            YB > 0 && this.emit(BB, GB, yB, YB) && (QB.pending[GB] -= YB)
          }))
        }
      }
      dispose(BB) {
        for (const GB of this.smokes) IB(BB, GB);
        this.smokes = [];
        for (const GB of null !== (OB = this.puffers) && void 0 !== OB ? OB : []) {
          var OB;
          GB.dispose()
        }
        this.puffers = null
      }
      emit(BB, OB, GB, YB) {
        return this.puffers ??= uB.map((BB => {
          let {
            style: OB,
            perSecond: GB
          } = BB;
          const YB = (OB.count / .3 + GB) * OB.life[1];
          return new VB.g(OB, Math.ceil(4 * YB), KB)
        })), this.puffers[OB].emit(BB, GB, this.renderFrame, YB)
      }
    }

    function IB(BB, OB) {
      null !== OB.fire && (BB.disposeGameMesh(OB.fire), OB.fire = null)
    }

    function FB() {
      let BB;
      const OB = new mB;
      return {
        onCreate(OB) {
          BB = OB
        },
        onReceivedMessageFromServer(GB, YB) {
          GB === oB.C && OB.start(BB, YB)
        },
        onAfterRender(GB) {
          OB.onAfterRender(BB, GB)
        },
        onClose() {
          OB.dispose(BB)
        }
      }
    }
    var iB = GB(192),
      LB = GB(39836),
      gB = GB(39860),
      rB = GB(39869);
    class XB {
      constructor(BB, OB, GB) {
        this.api = BB, this.wearer = OB, this.name = GB, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new rB.e, this.shown = !1, this.raised = 0
      }
      update(BB) {
        var OB;
        const GB = (0, LB.f)(this.name);
        if (!GB) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === GB.model && this.madeFrom.scale === GB.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(GB.model, GB.scale), this.madeFrom = GB, !this.model)) return void this.raiseNametag(0);
        if (!(BB.drawn && !BB.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const YB = this.motion.step({
          dt: BB.dt,
          feet: BB.feet,
          heading: BB.heading,
          headTopY: BB.headTopY,
          tuning: GB,
          timeS: BB.timeS
        });
        this.model.setPose(YB.pos, YB.yaw + Math.PI), this.model.setClip(null !== (OB = YB.clip) && void 0 !== OB ? OB : null);
        const DB = YB.seated ? GB : null;
        DB !== this.perchedWith && (this.perchedWith = DB, this.model.setPerch(DB && {
          MG: this.wearer,
          offset: DB.perchOffset,
          yaw: DB.yawOffset
        })), this.setShown(!0), this.raiseNametag(GB.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(BB) {
        BB !== this.raised && (this.raised = BB, this.api.setNametagOffset(this.wearer, BB))
      }
      freeModel() {
        var BB;
        null === (BB = this.model) || void 0 === BB || BB.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(BB) {
        this.model && BB !== this.shown && (this.shown = BB, this.model.setVisible(BB))
      }
    }
    class wB {
      constructor(BB, OB) {
        this.api = BB, this.name = OB, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(BB) {
        const OB = (0, LB.d)(this.name);
        if (OB !== this.madeFrom && this.stop(), !OB) return;
        const GB = BB.ownFirstPerson ? OB.ownInFirstPerson : BB.drawn;
        if (GB) {
          const {
            centre: GB
          } = this;
          if ((0, rB.h)(GB, BB.feet, OB.offset, Math.sin(BB.heading), Math.cos(BB.heading)), this.particles) this.particles.moveTo(GB, this.half);
          else {
            const BB = (0, gB.c)(OB);
            this.half = BB.half, this.particles = this.api.createParticles(BB.opts, {
              pos: GB,
              half: BB.half
            }), this.madeFrom = OB, this.emitting = !0
          }
        }
        this.particles && GB !== this.emitting && (this.emitting = GB, this.particles.setEmitRate(GB ? OB.particles.emitRate : 0))
      }
      stop() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const EB = .25,
      cB = 48,
      hB = 4,
      aB = 24,
      eB = 12,
      TB = .6,
      bB = 1 / iB.f.playerEyeToHeightRatio;

    function CB(BB, OB, GB) {
      const YB = BB.filter((BB => BB[OB] <= cB));
      return YB.sort(((BB, GB) => BB[OB] - GB[OB])), new Set(YB.slice(0, GB).map((BB => BB.id)))
    }

    function HB() {
      let BB;
      const OB = new Map;
      let GB = 0,
        YB = 0;
      const DB = [0, 0, 0],
        QB = {
          feet: DB,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function oB(BB) {
        var OB, GB;
        null === (OB = BB.pet) || void 0 === OB || OB.dispose(), null === (GB = BB.aura) || void 0 === GB || GB.stop()
      }

      function jB(OB, GB) {
        var YB, oB;
        const {
          id: jB
        } = OB, yB = BB.readDrawnPosition(jB, DB) ? BB.getDrawnHeading(jB) : null, JB = null === yB ? null : BB.getDrawnEyeHeight(jB);
        if (null === yB || null === JB) QB.drawn = !1, QB.ownFirstPerson = !1;
        else {
          const OB = GB.cameraPosition;
          QB.heading = yB, QB.headTopY = DB[1] + JB * bB, QB.drawn = BB.isAlive(jB) && BB.isEntityDrawn(jB), QB.ownFirstPerson = BB.isLocalPlayer(jB) && BB.isAlive(jB) && Math.hypot(OB[0] - DB[0], OB[1] - DB[1] - JB, OB[2] - DB[2]) < TB
        }
        null === (YB = OB.pet) || void 0 === YB || YB.update(QB), null === (oB = OB.aura) || void 0 === oB || oB.update(QB)
      }
      return {
        onCreate(OB) {
          BB = OB
        },
        onAfterRender(yB, JB) {
          const MB = yB / 1e3;
          YB += MB, GB -= MB, GB <= 0 && (GB = EB, function(GB) {
            const YB = [];
            for (const oB of BB.getPlayerIds()) {
              const QB = BB.getPlayerCosmetics(oB),
                jB = void 0 !== (null === QB || void 0 === QB ? void 0 : QB.pet) && (0, LB.f)(QB.pet) ? QB.pet : null,
                yB = void 0 !== (null === QB || void 0 === QB ? void 0 : QB.aura) && (0, LB.d)(QB.aura) ? QB.aura : null;
              if (null === jB && null === yB || !BB.readDrawnPosition(oB, DB)) continue;
              const JB = Math.hypot(DB[0] - GB[0], DB[1] - GB[1], DB[2] - GB[2]),
                MB = OB.get(oB);
              YB.push({
                id: oB,
                pet: jB,
                aura: yB,
                petDist: null === jB ? 1 / 0 : JB - (null !== MB && void 0 !== MB && MB.pet ? hB : 0),
                auraDist: null === yB ? 1 / 0 : JB - (null !== MB && void 0 !== MB && MB.aura ? hB : 0)
              })
            }
            const QB = CB(YB, "petDist", aB),
              jB = BB.particlesEnabled() ? CB(YB, "auraDist", eB) : new Set,
              yB = new Set;
            for (const {
                id: DB,
                pet: oB,
                aura: qB
              }
              of YB) {
              var JB, MB, PB;
              const GB = null !== (JB = OB.get(DB)) && void 0 !== JB ? JB : {
                  id: DB,
                  pet: null,
                  aura: null
                },
                YB = QB.has(DB) ? oB : null,
                ZB = jB.has(DB) ? qB : null;
              var zB, lB, pB;
              (null === (MB = GB.pet) || void 0 === MB ? void 0 : MB.name) !== YB ? (null === (zB = GB.pet) || void 0 === zB || zB.dispose(), GB.pet = null === YB ? null : new XB(BB, DB, YB)) : null === (lB = GB.pet) || void 0 === lB || lB.refreshNametag(), (null === (PB = GB.aura) || void 0 === PB ? void 0 : PB.name) !== ZB && (null === (pB = GB.aura) || void 0 === pB || pB.stop(), GB.aura = null === ZB ? null : new wB(BB, ZB)), (GB.pet || GB.aura) && (OB.set(DB, GB), yB.add(DB))
            }
            for (const [BB, DB] of OB) yB.has(BB) || (oB(DB), OB.delete(BB))
          }(JB.cameraPosition)), QB.dt = MB, QB.timeS = YB;
          for (const BB of OB.values()) jB(BB, JB)
        },
        onClose() {
          for (const BB of OB.values()) oB(BB);
          OB.clear()
        }
      }
    }
    var vB = GB(9397);
    const sB = "skyblockLoot",
      xB = "autoPickupClick";
    var tB = GB(1723);

    function BO(BB, OB) {
      return [{
        timeFraction: 0,
        minColor: [255 * BB[0], 255 * BB[1], 255 * BB[2], 1],
        maxColor: [255 * OB[0], 255 * OB[1], 255 * OB[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const OO = [0, 0, 0],
      GO = {
        texture: "glint",
        mipmaps: !1,
        CP: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: OO,
        dir2: OO,
        blendMode: QB.f.OneOne
      },
      YO = {
        ...GO,
        colorGradients: BO([1, .88, .38], [1, .65, .15])
      },
      DO = {
        ...GO,
        colorGradients: BO([.55, .95, 1], [.9, 1, 1])
      },
      QO = [.5, .5, .5],
      oO = {
        texture: "glint",
        mipmaps: !1,
        CP: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: BO([1, .12, .12], [1, .35, .2]),
        blendMode: QB.f.OneOne
      };
    class jO {
      constructor() {
        this.drops = new Map
      }
      nP(BB, OB) {
        if ("overflowFlash" === OB.kind) {
          const [GB, YB, DB] = OB.position, QB = BB.createParticles(oO, {
            pos: [GB, YB, DB],
            half: QO
          });
          return QB.emit(18), void QB.stop()
        }
        this.drops.has(OB.itemId) || this.drops.set(OB.itemId, {
          owner: OB.owner,
          cosmetic: OB.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      kP(BB) {
        if (0 === this.drops.size) return;
        const OB = performance.now(),
          GB = BB.getCameraPosition();
        let YB = 0;
        for (const QB of this.drops.values()) null !== QB.particles && YB++;
        for (const [QB, oB] of this.drops) {
          const jB = BB.getPositionView(QB);
          if (null === jB) {
            var DB;
            if (oB.seen || OB - oB.markedAt > 5e3) null !== oB.particles && YB--, null === (DB = oB.particles) || void 0 === DB || DB.stop(), this.drops.delete(QB);
            continue
          }
          oB.cosmetic || !BB.isLocalPlayer(oB.owner) || oB.pickupDelayCleared || (BB.clearPickupDelay(QB), oB.pickupDelayCleared = !0);
          const yB = oB.lastPosition,
            JB = oB.seen && (jB[0] - yB[0]) ** 2 + (jB[1] - yB[1]) ** 2 + (jB[2] - yB[2]) ** 2 > 4e-4,
            MB = (jB[0] - GB[0]) ** 2 + (jB[1] - GB[1]) ** 2 + (jB[2] - GB[2]) ** 2 < 2025;
          oB.seen = !0, yB[0] = jB[0], yB[1] = jB[1], yB[2] = jB[2], JB && (oB.lastMovingAt = OB), null !== oB.particles && (!MB || OB - oB.lastMovingAt > 500) && (oB.particles.stop(), oB.particles = null, YB--), JB && MB && null === oB.particles && YB < 32 && (oB.particles = BB.createParticles(oB.cosmetic ? DO : YO, {
            pos: jB
          }), YB++), null !== oB.particles && (oB.particles.moveTo(jB), oB.particles.setEmitRate(JB ? 12 : 0)), !JB && null === oB.particles && OB - Math.max(oB.lastMovingAt, oB.markedAt) > 2e3 && this.drops.delete(QB)
        }
      }
      dispose() {
        for (const OB of this.drops.values()) {
          var BB;
          null === (BB = OB.particles) || void 0 === BB || BB.stop()
        }
        this.drops.clear()
      }
    }
    const yO = new Set;

    function JO() {
      let BB;
      const OB = new jO;
      return {
        onCreate(OB) {
          BB = OB
        },
        onReceivedMessageFromServer(GB, YB) {
          if (GB === sB) OB.nP(BB, YB);
          else if (GB === xB) {
            const BB = YB,
              OB = `${BB.id}|${BB.value}`;
            yO.has(OB) || (yO.add(OB), (0, tB.h)({
              id: BB.id,
              value: BB.value
            }))
          }
        },
        kP() {
          OB.kP(BB)
        },
        onClose() {
          OB.dispose()
        }
      }
    }

    function MO(BB, OB, GB, YB) {
      return {
        cosmeticCompanions: HB(),
        dialogue: AB(YB.localPlayerId),
        fishing: NB(YB.localPlayerId),
        furnaceSmoke: FB(),
        ironChest: DB(),
        localBlockBroken: (0, vB.c)(),
        magnetLoot: JO()
      }
    }

    function PO(BB, OB) {
      for (const DB of [BB, ...null !== OB && void 0 !== OB ? OB : []]) try {
        var GB;
        null === DB || void 0 === DB || null === (GB = DB.onClose) || void 0 === GB || GB.call(DB)
      } catch (YB) {
        console.error("Error in client onClose callback", YB)
      }
    }
  },
  9397: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      g: () => DB
    });
    var YB = GB(25);
    const DB = "localBlockBroken";

    function QB() {
      return {
        onPlayerChangeBlock(BB, OB, GB, QB, oB, jB) {
          "Air" === jB && YB.o.tM(DB)
        }
      }
    }
  },
  39858: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB,
      g: () => QB
    });
    const YB = 1 / .6,
      DB = {
        kind: "smokePuff"
      };
    class QB {
      constructor(BB, OB, GB) {
        this.style = BB, this.CP = OB, this.half = GB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, OB, GB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return GB !== this.lastFrame && (this.lastFrame = GB, this.particles || (this.particles = BB.createParticles(function(BB, OB) {
          const [
            [GB, QB, oB],
            [jB, yB, JB]
          ] = BB.colours;
          return {
            texture: BB.soft ? DB : "square_particle",
            CP: OB,
            minLifeTime: BB.life[0] / YB,
            maxLifeTime: BB.life[1] / YB,
            minEmitPower: BB.power[0] * YB,
            maxEmitPower: BB.power[1] * YB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * YB * YB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [GB, QB, oB, BB.alpha],
              maxColor: [jB, yB, JB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [GB, QB, oB, 0],
              maxColor: [jB, yB, JB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.CP), {
          pos: OB,
          half: this.half
        })), this.particles.moveTo(OB, this.half), this.particles.emit(QB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  5345: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB,
      e: () => YB,
      g: () => QB,
      j: () => yB,
      k: () => oB
    });
    const YB = ["sine", "triangle", "square", "sawtooth"],
      DB = 55,
      QB = {
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

    function oB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(QB, BB) ? QB[BB] : null
    }

    function jB(BB, OB, GB) {
      return Math.min(GB, Math.max(OB, BB))
    }

    function yB(BB) {
      const OB = jB(BB.durationMs, 10, 500),
        GB = jB(BB.attackMs, 0, OB),
        {
          intonation: DB
        } = BB;
      return {
        waveform: YB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: jB(BB.pitchHz, 20, 4e3),
        glideSemitones: jB(BB.glideSemitones, -24, 24),
        durationMs: OB,
        attackMs: GB,
        releaseMs: jB(BB.releaseMs, 0, OB - GB),
        lowpassHz: null === BB.lowpassHz ? null : jB(BB.lowpassHz, 20, 2e4),
        volume: jB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: jB(DB.variationSemitones, 0, 6),
          declineSemitones: jB(DB.declineSemitones, 0, 12),
          questionRiseSemitones: jB(DB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: jB(DB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: jB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);