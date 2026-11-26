export const id = 32;
export const ids = [32];
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
  5339: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => DV,
      g: () => gV
    });
    var JV = xV(5342),
      YV = xV(364);
    const UV = 120,
      yV = 260,
      pV = 1.15,
      QV = 1.2,
      nV = 2,
      wV = 1.08,
      ZV = .8,
      vV = .95,
      rV = 8,
      kV = "[\"')\\]\u300d\u300f\uff09]*",
      bV = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${kV}$`),
      EV = new RegExp(`[?\uff1f]${kV}$`),
      BV = new RegExp(`[!\uff01]${kV}$`),
      jV = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      qV = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      tV = new RegExp(`[${qV}]`),
      FV = new RegExp(`[${qV}]|[^${qV}]+`, "g"),
      TV = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function PV(VV) {
      let eV = 2166136261;
      for (let xV = 0; xV < VV.length; xV++) eV ^= VV.charCodeAt(xV), eV = Math.imul(eV, 16777619);
      return (eV >>> 0) / 4294967295 * 2 - 1
    }

    function AV(VV) {
      var eV;
      if (tV.test(VV)) return 1;
      const xV = VV.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        JV = xV.replace(/[^0-9]/g, "");
      if (JV.length > 0 && !/\p{L}/u.test(xV)) return Math.min(JV.length, 4);
      const YV = null !== (eV = xV.match(TV)) && void 0 !== eV ? eV : [];
      if (0 === YV.length) {
        var UV, yV;
        const VV = null !== (UV = null === (yV = xV.match(/\p{L}/gu)) || void 0 === yV ? void 0 : yV.length) && void 0 !== UV ? UV : 0;
        return 0 === VV ? 0 : Math.min(Math.max(1, Math.round(VV / 2.5)), rV)
      }
      const pV = xV.replace(/[^\p{L}]/gu, ""),
        QV = YV.length > 1 && "e" === YV.at(-1) && pV.endsWith("e") && !pV.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(VV.replace(/[^\p{L}]/gu, ""));
      return Math.min(YV.length - (QV ? 1 : 0), rV)
    }

    function NV(VV) {
      return VV.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function XV(VV) {
      const eV = VV.replace(/[^\p{L}]/gu, "");
      return eV.length >= 2 && eV === eV.toUpperCase() && eV !== eV.toLowerCase()
    }

    function MV(VV, eV) {
      var xV;
      const rV = eV && (0, JV.j)(eV),
        kV = null !== (xV = null === rV || void 0 === rV ? void 0 : rV.syllableMs) && void 0 !== xV ? xV : JV.e,
        qV = function(VV) {
          const eV = [];
          for (const JV of (0, YV.dc)(VV))
            if ("string" === typeof JV)
              for (const VV of JV.split(/(\s+)/)) {
                if ("" === VV) continue;
                if (/^\s+$/.test(VV)) {
                  eV.push({
                    kind: "space",
                    text: VV
                  });
                  continue
                }
                if (!tV.test(VV)) {
                  eV.push({
                    kind: "word",
                    text: VV,
                    delayMs: 0
                  });
                  continue
                }
                let JV = !0;
                for (const YV of null !== (xV = VV.match(FV)) && void 0 !== xV ? xV : []) {
                  var xV;
                  const VV = eV.at(-1);
                  JV || "word" !== (null === VV || void 0 === VV ? void 0 : VV.kind) || tV.test(YV) || /[\p{L}\p{N}]/u.test(YV) ? (JV || eV.push({
                    kind: "space",
                    text: "\u200b"
                  }), eV.push({
                    kind: "word",
                    text: YV,
                    delayMs: 0
                  }), JV = !1) : VV.text += YV
                }
              } else eV.push({
                kind: "icon",
                text: JV.icon,
                delayMs: 0
              });
          return eV
        }(VV),
        TV = [];
      let MV = [];
      for (const JV of qV) "space" !== JV.kind && (MV.push(JV), bV.test(JV.text) && (TV.push(MV), MV = []));
      TV.push(MV);
      const zV = [];
      let GV = 0;
      for (const JV of TV) {
        var WV, RV;
        const VV = null !== (WV = null === (RV = JV.at(-1)) || void 0 === RV ? void 0 : RV.text) && void 0 !== WV ? WV : "",
          eV = EV.test(VV),
          xV = BV.test(VV),
          YV = JV.map((VV => "word" === VV.kind ? AV(VV.text) : 1)),
          qV = YV.findLastIndex((VV => VV > 0));
        for (const [EV, BV] of JV.entries()) {
          const VV = "word" === BV.kind,
            JV = YV[EV];
          BV.delayMs = GV;
          for (let YV = 0; rV && YV < JV; YV++) {
            const {
              intonation: UV
            } = rV;
            let yV = qV > 0 ? -UV.declineSemitones * (EV / qV) : 0;
            yV += PV(`${NV(BV.text)}|${YV}`) * UV.variationSemitones;
            const bV = Math.min(1, UV.variationSemitones);
            let jV = rV.glideSemitones,
              tV = 1;
            xV && (yV += UV.exclaimLiftSemitones, tV *= pV), eV && EV === qV && (yV += UV.questionRiseSemitones * (JV > 1 ? .5 + .5 * YV / (JV - 1) : 1), YV === JV - 1 && (jV = Math.abs(jV) + UV.questionRiseSemitones / 2)), VV && XV(BV.text) && (yV += nV * bV, tV *= QV), JV > 1 && 0 === YV && (yV += ZV * bV, tV *= wV), zV.push({
              atMs: GV + YV * kV,
              semitones: yV,
              glideSemitones: jV,
              durationMs: YV < JV - 1 ? Math.min(rV.durationMs, kV * vV) : rV.durationMs,
              level: tV
            })
          }
          GV += JV * kV + (bV.test(BV.text) ? yV : jV.test(BV.text) ? UV : 0)
        }
      }
      return {
        pieces: qV.map((VV => "space" === VV.kind ? VV : "icon" === VV.kind ? {
          kind: "icon",
          icon: VV.text,
          delayMs: VV.delayMs
        } : {
          kind: "word",
          text: VV.text,
          delayMs: VV.delayMs
        })),
        blips: zV
      }
    }
    var zV = xV(1220),
      GV = xV(1279),
      WV = xV(2059);

    function RV(VV) {
      if ("string" === typeof VV) return VV;
      const eV = GV.c.get().getCurrentLanguageCode();
      return (0, zV.r)(eV, VV.translationKey, (0, zV.p)(VV.params, WV.e.shown))
    }

    function gV(VV) {
      const eV = void 0 === VV.voice ? null : (0, JV.n)(VV.voice),
        xV = eV && (0, JV.j)(eV);
      return {
        plan: MV(RV(VV.line), xV),
        synth: xV
      }
    }

    function DV(VV) {
      const eV = [];
      let xV = [];
      for (const [YV, UV] of VV.entries()) {
        var JV;
        "space" === UV.kind && (" " !== UV.text || "icon" !== (null === (JV = VV[YV + 1]) || void 0 === JV ? void 0 : JV.kind)) ? (xV.length > 0 && eV.push(xV), eV.push([UV]), xV = []) : xV.push(UV)
      }
      return xV.length > 0 && eV.push(xV), eV
    }
  },
  5351: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => wV,
      g: () => ZV
    });
    var JV = xV(5353),
      YV = xV(27);
    const UV = .25,
      yV = .85,
      pV = .02,
      QV = .01;

    function nV(VV, eV, xV, JV, YV, UV, pV) {
      const {
        waveform: QV,
        pitchHz: nV,
        attackMs: wV,
        releaseMs: ZV,
        lowpassHz: vV
      } = xV, rV = YV + JV.durationMs / 1e3, kV = nV * 2 ** (JV.semitones / 12), bV = VV.createOscillator();
      bV.type = QV, bV.frequency.setValueAtTime(kV, YV), bV.frequency.exponentialRampToValueAtTime(kV * 2 ** (JV.glideSemitones / 12), rV);
      const EV = YV + Math.min(wV, JV.durationMs) / 1e3,
        BV = VV.createGain();
      BV.gain.setValueAtTime(0, YV), BV.gain.linearRampToValueAtTime(UV, EV), BV.gain.linearRampToValueAtTime(UV * yV, Math.max(EV, rV - ZV / 1e3)), BV.gain.linearRampToValueAtTime(0, rV);
      const jV = [bV];
      if (null !== vV) {
        const eV = VV.createBiquadFilter();
        eV.type = "lowpass", eV.frequency.value = vV, jV.push(eV)
      }
      jV.push(BV, eV);
      for (let yV = 1; yV < jV.length; yV++) jV[yV - 1].connect(jV[yV]);
      return bV.onended = () => {
        for (const VV of jV.slice(0, -1)) VV.disconnect();
        pV()
      }, bV.start(YV), bV.stop(rV), bV
    }

    function wV(VV, eV, xV, JV, YV, yV) {
      if (0 === JV.length) return yV(), () => {};
      const wV = UV * xV.volume * YV,
        ZV = VV.createGain();
      ZV.connect(eV);
      const vV = VV.currentTime + pV,
        rV = new Set;
      for (const UV of JV) {
        const eV = nV(VV, ZV, xV, UV, vV + UV.atMs / 1e3, wV * UV.level, (() => {
          rV.delete(eV), 0 === rV.size && (ZV.disconnect(), yV())
        }));
        rV.add(eV)
      }
      return () => {
        const eV = VV.currentTime;
        ZV.gain.setTargetAtTime(0, eV, QV);
        for (const VV of rV) try {
          VV.stop(eV + 5 * QV)
        } catch {}
      }
    }

    function ZV(VV, eV) {
      var xV;
      const UV = JV.Howler.ctx,
        yV = JV.Howler.masterGain;
      if (!UV || !yV || !YV.b.get("soundOnFromAd")) return () => {};
      const pV = JV.Howler;
      return null === (xV = pV._autoResume) || void 0 === xV || xV.call(pV), wV(UV, yV, VV, eV, YV.b.get("soundVolume"), (() => {
        var VV;
        null === (VV = pV._autoSuspend) || void 0 === VV || VV.call(pV)
      }))
    }
  },
  40367: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      closeClientGame: () => dV,
      createDefaultClientPlugins: () => IV
    });
    var JV = xV(375);

    function YV() {
      let VV;
      return {
        onCreate(eV) {
          VV = eV
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(eV, xV, YV, UV, yV, pV) {
          var QV, nV;
          if ("Iron Chest" !== VV.getMetaInfo(yV).rootName) return;
          if (!VV.hasEffect(eV, "Thief")) return;
          const wV = VV.getBlockData(xV, YV, UV);
          return VV.getPlayerDbId(eV) !== (null === wV || void 0 === wV || null === (QV = wV.persisted) || void 0 === QV || null === (nV = QV.shared) || void 0 === nV ? void 0 : nV.ownerDbId) ? (VV.sendMessage(eV, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: JV.E.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var UV = xV(4642),
      yV = xV(1269);
    const pV = 8.4,
      QV = 1e-4,
      nV = .15,
      wV = .04,
      ZV = [.12, .04, .12],
      vV = 26,
      rV = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Jv: 1,
        minLifeTime: QV,
        maxLifeTime: QV,
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
        blendMode: UV.g.Standard
      },
      kV = {
        texture: "bubble",
        mipmaps: !1,
        Jv: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: vV,
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
        blendMode: UV.g.Standard
      },
      bV = [0, 0, 0],
      EV = [0, 0, 0];

    function BV(VV) {
      const eV = new Map;
      let xV = null;

      function JV(VV) {
        var eV, xV;
        null === (eV = VV.bubbles) || void 0 === eV || eV.stop(), null === (xV = VV.fish) || void 0 === xV || xV.stop()
      }

      function YV(xV) {
        if (!xV.readDrawnPosition(VV, EV)) {
          for (const VV of eV.values()) {
            var JV;
            null === (JV = VV.bubbles) || void 0 === JV || JV.setEmitRate(0)
          }
          return
        }
        const YV = performance.now();
        for (const [VV, yV] of eV) {
          var UV;
          if (null === (UV = yV.bubbles) || void 0 === UV || UV.setEmitRate(0), !xV.readDrawnPosition(VV, bV)) continue;
          if (!((bV[0] - EV[0]) ** 2 + (bV[1] - EV[1]) ** 2 + (bV[2] - EV[2]) ** 2 < 900)) continue;
          const eV = Math.max(0, yV.biteAt - YV),
            JV = yV.approachDurationMs > 0 ? Math.min(1, 1 - eV / yV.approachDurationMs) : 1,
            QV = (yV.approachDurationMs - eV) / 1e3,
            BV = yV.phase + .25 * Math.sin(1.7 * QV + yV.phase),
            jV = Math.min(yV.approachDurationMs / 3e3 * 2.8, pV) * (1 - JV) * (1 + .15 * Math.sin(2.1 * QV + yV.phase)),
            qV = Math.min(1, 4 * (1 - JV)),
            tV = (.45 * Math.sin(4.1 * QV + yV.phase) + .18 * Math.sin(9.7 * QV + 2 * yV.phase)) * qV,
            FV = bV[0] + Math.cos(BV) * jV - Math.sin(BV) * tV,
            TV = Math.ceil(yV.surfaceY),
            PV = bV[2] + Math.sin(BV) * jV + Math.cos(BV) * tV,
            {
              fishAt: AV,
              bubblesAt: NV
            } = yV;
          AV[0] = NV[0] = FV, AV[1] = TV + nV, NV[1] = TV + wV, AV[2] = NV[2] = PV, yV.fish ??= xV.createParticles(rV, {
            pos: AV
          }), yV.fish.moveTo(AV), yV.fish.emit(1), yV.bubbles ??= xV.createParticles(kV, {
            pos: NV,
            half: ZV
          }), yV.bubbles.moveTo(NV), yV.bubbles.setEmitRate(vV + 32 * (.5 + .5 * Math.sin(9 * QV + yV.phase)) ** 4 + 13 * JV)
        }
      }
      return {
        onCreate(VV) {
          xV = VV
        },
        onAfterRender() {
          xV && YV(xV)
        },
        onClose() {
          for (const VV of eV.values()) JV(VV);
          eV.clear(), xV = null
        },
        onReceivedMessageFromServer(VV, xV) {
          if (VV !== yV.C) return;
          const {
            hookId: YV,
            waiting: UV
          } = xV;
          if (UV) eV.has(YV) || eV.set(YV, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + UV.remainingMs,
            approachDurationMs: UV.durationMs,
            surfaceY: UV.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const VV = eV.get(YV);
            VV && JV(VV), eV.delete(YV)
          }
        }
      }
    }
    var jV = xV(5351),
      qV = xV(5339);

    function tV(VV) {
      let eV, xV = null,
        JV = null;
      const YV = () => {
        var VV;
        null === (VV = JV) || void 0 === VV || VV(), JV = null
      };
      return {
        onCreate(JV) {
          eV = JV, xV = eV.getClientOption(VV, "dialogue")
        },
        onAfterRender() {
          if (!eV) return;
          const UV = eV.getClientOption(VV, "dialogue");
          if (UV === xV) return;
          if (xV = UV, YV(), !UV || !1 === UV.animateIn) return;
          const {
            plan: yV,
            synth: pV
          } = (0, qV.g)(UV);
          pV && (JV = (0, jV.g)(pV, yV.blips))
        },
        onClose: YV
      }
    }
    var FV = xV(40370);
    const TV = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      PV = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      AV = [0, 1, 2, 0, 2, 3];

    function NV(VV, eV, xV) {
      var JV;
      let [YV, UV, yV] = eV;
      if (VV.hasPackModel("Furnace")) return null;
      const pV = ((null !== (JV = VV.getMetaInfo(xV).rot) && void 0 !== JV ? JV : 1) - 1) * Math.PI / 2,
        QV = Math.PI + pV,
        nV = Math.cos(QV),
        wV = Math.sin(QV),
        ZV = [];
      for (const [kV, bV] of TV) ZV.push(kV * nV, bV, -kV * wV);
      const vV = {
          positions: ZV,
          indices: AV,
          uvs: PV
        },
        rV = [YV + .5 + .51 * Math.sin(pV), UV + .375, yV + .5 + .51 * Math.cos(pV)];
      return VV.createGameMesh(vV, {
        kind: "furnaceFire"
      }, rV)
    }

    function XV(VV) {
      return Math.floor(VV / 200) % 3
    }

    function MV(VV, eV, xV) {
      VV.setGameMesh(eV, {
        uvOffset: [0, xV / 3]
      })
    }
    const zV = [.12, .025, .12],
      GV = [{
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
          blendMode: UV.g.Standard,
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
          blendMode: UV.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class WV {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(VV, eV) {
        const xV = VV.getBlockId(eV[0], eV[1], eV[2]);
        if ("Furnace" !== VV.getMetaInfo(xV).rootName) return;
        const JV = performance.now();
        let YV = this.smokes.find((VV => VV.pos[0] === eV[0] && VV.pos[1] === eV[1] && VV.pos[2] === eV[2] && VV.vp === xV));
        if (YV || (YV = {
            pos: [eV[0], eV[1], eV[2]],
            vp: xV,
            endMs: JV,
            lastBurstMs: -1 / 0,
            pending: new Array(GV.length).fill(0),
            fire: NV(VV, eV, xV)
          }, this.smokes.push(YV), null !== YV.fire && (MV(VV, YV.fire, XV(JV)), this.shownFireFrame = -1)), YV.endMs = JV + 6e3, this.smokes.length > 4) {
          const eV = this.smokes.reduce(((VV, eV) => eV.endMs < VV.endMs ? eV : VV));
          RV(VV, eV), this.smokes.splice(this.smokes.indexOf(eV), 1)
        }
        JV - YV.lastBurstMs >= 300 && (YV.lastBurstMs = JV, GV.forEach(((VV, eV) => {
          YV.pending[eV] += VV.style.count
        })))
      }
      onAfterRender(VV, eV) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const xV = performance.now();
        this.smokes = this.smokes.filter((eV => {
          const [JV, YV, UV] = eV.pos, yV = xV < eV.endMs && VV.getBlockId(JV, YV, UV) === eV.vp;
          return yV || RV(VV, eV), yV
        }));
        const JV = XV(xV);
        if (JV !== this.shownFireFrame) {
          this.shownFireFrame = JV;
          for (const eV of this.smokes) null !== eV.fire && MV(VV, eV.fire, JV)
        }
        if (!VV.particlesEnabled()) {
          for (const VV of this.smokes) VV.pending.fill(0);
          return
        }
        const YV = Math.min(eV, 250) / 1e3;
        for (const UV of this.smokes) {
          const [eV, JV, yV] = UV.pos;
          if (0 !== VV.getBlockId(eV, JV + 1, yV)) {
            UV.pending.fill(0);
            continue
          }
          const pV = (UV.endMs - xV) / 6e3,
            QV = this.centre;
          QV[0] = eV + .5, QV[1] = JV + 1.275, QV[2] = yV + .5, GV.forEach(((eV, xV) => {
            UV.pending[xV] += eV.perSecond * pV * YV;
            const JV = Math.floor(UV.pending[xV]);
            JV > 0 && this.emit(VV, xV, QV, JV) && (UV.pending[xV] -= JV)
          }))
        }
      }
      dispose(VV) {
        for (const xV of this.smokes) RV(VV, xV);
        this.smokes = [];
        for (const xV of null !== (eV = this.puffers) && void 0 !== eV ? eV : []) {
          var eV;
          xV.dispose()
        }
        this.puffers = null
      }
      emit(VV, eV, xV, JV) {
        return this.puffers ??= GV.map((VV => {
          let {
            style: eV,
            perSecond: xV
          } = VV;
          const JV = (eV.count / .3 + xV) * eV.life[1];
          return new FV.f(eV, Math.ceil(4 * JV), zV)
        })), this.puffers[eV].emit(VV, xV, this.renderFrame, JV)
      }
    }

    function RV(VV, eV) {
      null !== eV.fire && (VV.disposeGameMesh(eV.fire), eV.fire = null)
    }

    function gV() {
      let VV;
      const eV = new WV;
      return {
        onCreate(eV) {
          VV = eV
        },
        onReceivedMessageFromServer(xV, JV) {
          xV === yV.G && eV.start(VV, JV)
        },
        onAfterRender(xV) {
          eV.onAfterRender(VV, xV)
        },
        onClose() {
          eV.dispose(VV)
        }
      }
    }
    var DV = xV(206),
      iV = xV(40342),
      CV = xV(40373),
      aV = xV(40375);
    class oV {
      constructor(VV, eV, xV) {
        this.api = VV, this.wearer = eV, this.name = xV, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new aV.c, this.shown = !1, this.raised = 0
      }
      update(VV) {
        var eV;
        const xV = (0, iV.h)(this.name);
        if (!xV) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === xV.model && this.madeFrom.scale === xV.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(xV.model, xV.scale), this.madeFrom = xV, !this.model)) return void this.raiseNametag(0);
        if (!(VV.drawn && !VV.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const JV = this.motion.step({
          dt: VV.dt,
          feet: VV.feet,
          heading: VV.heading,
          headTopY: VV.headTopY,
          tuning: xV,
          timeS: VV.timeS
        });
        this.model.setPose(JV.pos, JV.yaw + Math.PI), this.model.setClip(null !== (eV = JV.clip) && void 0 !== eV ? eV : null);
        const YV = JV.seated ? xV : null;
        YV !== this.perchedWith && (this.perchedWith = YV, this.model.setPerch(YV && {
          EY: this.wearer,
          offset: YV.perchOffset,
          yaw: YV.yawOffset
        })), this.setShown(!0), this.raiseNametag(xV.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(VV) {
        VV !== this.raised && (this.raised = VV, this.api.setNametagOffset(this.wearer, VV))
      }
      freeModel() {
        var VV;
        null === (VV = this.model) || void 0 === VV || VV.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(VV) {
        this.model && VV !== this.shown && (this.shown = VV, this.model.setVisible(VV))
      }
    }
    class cV {
      constructor(VV, eV) {
        this.api = VV, this.name = eV, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(VV) {
        const eV = (0, iV.f)(this.name);
        if (eV !== this.madeFrom && this.stop(), !eV) return;
        const xV = VV.ownFirstPerson ? eV.ownInFirstPerson : VV.drawn;
        if (xV) {
          const {
            centre: xV
          } = this;
          if ((0, aV.g)(xV, VV.feet, eV.offset, Math.sin(VV.heading), Math.cos(VV.heading)), this.particles) this.particles.moveTo(xV, this.half);
          else {
            const VV = (0, CV.d)(eV);
            this.half = VV.half, this.particles = this.api.createParticles(VV.opts, {
              pos: xV,
              half: VV.half
            }), this.madeFrom = eV, this.emitting = !0
          }
        }
        this.particles && xV !== this.emitting && (this.emitting = xV, this.particles.setEmitRate(xV ? eV.particles.emitRate : 0))
      }
      stop() {
        var VV;
        null === (VV = this.particles) || void 0 === VV || VV.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const hV = .25,
      lV = 48,
      LV = 4,
      fV = 24,
      mV = 12,
      KV = .6,
      HV = 1 / DV.f.playerEyeToHeightRatio;

    function uV(VV, eV, xV) {
      const JV = VV.filter((VV => VV[eV] <= lV));
      return JV.sort(((VV, xV) => VV[eV] - xV[eV])), new Set(JV.slice(0, xV).map((VV => VV.id)))
    }

    function sV() {
      let VV;
      const eV = new Map;
      let xV = 0,
        JV = 0;
      const YV = [0, 0, 0],
        UV = {
          feet: YV,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function yV(VV) {
        var eV, xV;
        null === (eV = VV.pet) || void 0 === eV || eV.dispose(), null === (xV = VV.aura) || void 0 === xV || xV.stop()
      }

      function pV(eV, xV) {
        var JV, yV;
        const {
          id: pV
        } = eV, QV = VV.readDrawnPosition(pV, YV) ? VV.getDrawnHeading(pV) : null, nV = null === QV ? null : VV.getDrawnEyeHeight(pV);
        if (null === QV || null === nV) UV.drawn = !1, UV.ownFirstPerson = !1;
        else {
          const eV = xV.cameraPosition;
          UV.heading = QV, UV.headTopY = YV[1] + nV * HV, UV.drawn = VV.isAlive(pV) && VV.isEntityDrawn(pV), UV.ownFirstPerson = VV.isLocalPlayer(pV) && VV.isAlive(pV) && Math.hypot(eV[0] - YV[0], eV[1] - YV[1] - nV, eV[2] - YV[2]) < KV
        }
        null === (JV = eV.pet) || void 0 === JV || JV.update(UV), null === (yV = eV.aura) || void 0 === yV || yV.update(UV)
      }
      return {
        onCreate(eV) {
          VV = eV
        },
        onAfterRender(QV, nV) {
          const wV = QV / 1e3;
          JV += wV, xV -= wV, xV <= 0 && (xV = hV, function(xV) {
            const JV = [];
            for (const yV of VV.getPlayerIds()) {
              const UV = VV.getPlayerCosmetics(yV),
                pV = void 0 !== (null === UV || void 0 === UV ? void 0 : UV.pet) && (0, iV.h)(UV.pet) ? UV.pet : null,
                QV = void 0 !== (null === UV || void 0 === UV ? void 0 : UV.aura) && (0, iV.f)(UV.aura) ? UV.aura : null;
              if (null === pV && null === QV || !VV.readDrawnPosition(yV, YV)) continue;
              const nV = Math.hypot(YV[0] - xV[0], YV[1] - xV[1], YV[2] - xV[2]),
                wV = eV.get(yV);
              JV.push({
                id: yV,
                pet: pV,
                aura: QV,
                petDist: null === pV ? 1 / 0 : nV - (null !== wV && void 0 !== wV && wV.pet ? LV : 0),
                auraDist: null === QV ? 1 / 0 : nV - (null !== wV && void 0 !== wV && wV.aura ? LV : 0)
              })
            }
            const UV = uV(JV, "petDist", fV),
              pV = VV.particlesEnabled() ? uV(JV, "auraDist", mV) : new Set,
              QV = new Set;
            for (const {
                id: YV,
                pet: yV,
                aura: bV
              }
              of JV) {
              var nV, wV, ZV;
              const xV = null !== (nV = eV.get(YV)) && void 0 !== nV ? nV : {
                  id: YV,
                  pet: null,
                  aura: null
                },
                JV = UV.has(YV) ? yV : null,
                EV = pV.has(YV) ? bV : null;
              var vV, rV, kV;
              (null === (wV = xV.pet) || void 0 === wV ? void 0 : wV.name) !== JV ? (null === (vV = xV.pet) || void 0 === vV || vV.dispose(), xV.pet = null === JV ? null : new oV(VV, YV, JV)) : null === (rV = xV.pet) || void 0 === rV || rV.refreshNametag(), (null === (ZV = xV.aura) || void 0 === ZV ? void 0 : ZV.name) !== EV && (null === (kV = xV.aura) || void 0 === kV || kV.stop(), xV.aura = null === EV ? null : new cV(VV, EV)), (xV.pet || xV.aura) && (eV.set(YV, xV), QV.add(YV))
            }
            for (const [VV, YV] of eV) QV.has(VV) || (yV(YV), eV.delete(VV))
          }(nV.cameraPosition)), UV.dt = wV, UV.timeS = JV;
          for (const VV of eV.values()) pV(VV, nV)
        },
        onClose() {
          for (const VV of eV.values()) yV(VV);
          eV.clear()
        }
      }
    }
    var SV = xV(9340);

    function IV(VV, eV, xV, JV) {
      return {
        cosmeticCompanions: sV(),
        dialogue: tV(JV.localPlayerId),
        fishing: BV(JV.localPlayerId),
        furnaceSmoke: gV(),
        ironChest: YV(),
        localBlockBroken: (0, SV.b)()
      }
    }

    function dV(VV, eV) {
      for (const YV of [VV, ...null !== eV && void 0 !== eV ? eV : []]) try {
        var xV;
        null === YV || void 0 === YV || null === (xV = YV.onClose) || void 0 === xV || xV.call(YV)
      } catch (JV) {
        console.error("Error in client onClose callback", JV)
      }
    }
  },
  9340: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      d: () => YV
    });
    var JV = xV(32);
    const YV = "localBlockBroken";

    function UV() {
      return {
        onPlayerChangeBlock(VV, eV, xV, UV, yV, pV) {
          "Air" === pV && JV.h.QZ(YV)
        }
      }
    }
  },
  40370: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV,
      f: () => UV
    });
    const JV = 1 / .6,
      YV = {
        kind: "smokePuff"
      };
    class UV {
      constructor(VV, eV, xV) {
        this.style = VV, this.Jv = eV, this.half = xV, this.particles = null, this.lastFrame = -1
      }
      emit(VV, eV, xV) {
        let UV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return xV !== this.lastFrame && (this.lastFrame = xV, this.particles || (this.particles = VV.createParticles(function(VV, eV) {
          const [
            [xV, UV, yV],
            [pV, QV, nV]
          ] = VV.colours;
          return {
            texture: VV.soft ? YV : "square_particle",
            Jv: eV,
            minLifeTime: VV.life[0] / JV,
            maxLifeTime: VV.life[1] / JV,
            minEmitPower: VV.power[0] * JV,
            maxEmitPower: VV.power[1] * JV,
            minSize: VV.size[0],
            maxSize: VV.size[1],
            emitRate: 0,
            gravity: [0, VV.lift * JV * JV, 0],
            dir1: [-VV.spread, 1, -VV.spread],
            dir2: [VV.spread, 1, VV.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [xV, UV, yV, VV.alpha],
              maxColor: [pV, QV, nV, VV.alpha]
            }, {
              timeFraction: 1,
              minColor: [xV, UV, yV, 0],
              maxColor: [pV, QV, nV, 0]
            }],
            blendMode: VV.blendMode
          }
        }(this.style, this.Jv), {
          pos: eV,
          half: this.half
        })), this.particles.moveTo(eV, this.half), this.particles.emit(UV), !0)
      }
      dispose() {
        var VV;
        null === (VV = this.particles) || void 0 === VV || VV.stop(), this.particles = null
      }
    }
  },
  5342: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV,
      g: () => JV,
      i: () => UV,
      j: () => QV,
      n: () => yV
    });
    const JV = ["sine", "triangle", "square", "sawtooth"],
      YV = 55,
      UV = {
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

    function yV(VV) {
      return "string" !== typeof VV ? VV : Object.hasOwn(UV, VV) ? UV[VV] : null
    }

    function pV(VV, eV, xV) {
      return Math.min(xV, Math.max(eV, VV))
    }

    function QV(VV) {
      const eV = pV(VV.durationMs, 10, 500),
        xV = pV(VV.attackMs, 0, eV),
        {
          intonation: YV
        } = VV;
      return {
        waveform: JV.includes(VV.waveform) ? VV.waveform : "sine",
        pitchHz: pV(VV.pitchHz, 20, 4e3),
        glideSemitones: pV(VV.glideSemitones, -24, 24),
        durationMs: eV,
        attackMs: xV,
        releaseMs: pV(VV.releaseMs, 0, eV - xV),
        lowpassHz: null === VV.lowpassHz ? null : pV(VV.lowpassHz, 20, 2e4),
        volume: pV(VV.volume, 0, 2),
        intonation: {
          variationSemitones: pV(YV.variationSemitones, 0, 6),
          declineSemitones: pV(YV.declineSemitones, 0, 12),
          questionRiseSemitones: pV(YV.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: pV(YV.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: pV(VV.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);