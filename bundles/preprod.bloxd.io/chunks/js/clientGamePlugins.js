export const id = 33;
export const ids = [33];
export const modules = {
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
  5599: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => eW,
      g: () => dW
    });
    var mW = OW(5605),
      EW = OW(327);
    const NW = 120,
      PW = 260,
      LW = 1.15,
      cW = 1.2,
      wW = 2,
      tW = 1.08,
      ZW = .8,
      xW = .95,
      lW = 8,
      AW = "[\"')\\]\u300d\u300f\uff09]*",
      bW = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${AW}$`),
      jW = new RegExp(`[?\uff1f]${AW}$`),
      UW = new RegExp(`[!\uff01]${AW}$`),
      kW = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      sW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      MW = new RegExp(`[${sW}]`),
      KW = new RegExp(`[${sW}]|[^${sW}]+`, "g"),
      SW = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function YW(WW) {
      let iW = 2166136261;
      for (let OW = 0; OW < WW.length; OW++) iW ^= WW.charCodeAt(OW), iW = Math.imul(iW, 16777619);
      return (iW >>> 0) / 4294967295 * 2 - 1
    }

    function yW(WW) {
      var iW;
      if (MW.test(WW)) return 1;
      const OW = WW.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        mW = OW.replace(/[^0-9]/g, "");
      if (mW.length > 0 && !/\p{L}/u.test(OW)) return Math.min(mW.length, 4);
      const EW = null !== (iW = OW.match(SW)) && void 0 !== iW ? iW : [];
      if (0 === EW.length) {
        var NW, PW;
        const WW = null !== (NW = null === (PW = OW.match(/\p{L}/gu)) || void 0 === PW ? void 0 : PW.length) && void 0 !== NW ? NW : 0;
        return 0 === WW ? 0 : Math.min(Math.max(1, Math.round(WW / 2.5)), lW)
      }
      const LW = OW.replace(/[^\p{L}]/gu, ""),
        cW = EW.length > 1 && "e" === EW.at(-1) && LW.endsWith("e") && !LW.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(WW.replace(/[^\p{L}]/gu, ""));
      return Math.min(EW.length - (cW ? 1 : 0), lW)
    }

    function TW(WW) {
      return WW.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function JW(WW) {
      const iW = WW.replace(/[^\p{L}]/gu, "");
      return iW.length >= 2 && iW === iW.toUpperCase() && iW !== iW.toLowerCase()
    }

    function hW(WW, iW) {
      var OW;
      const lW = iW && (0, mW.h)(iW),
        AW = null !== (OW = null === lW || void 0 === lW ? void 0 : lW.syllableMs) && void 0 !== OW ? OW : mW.d,
        sW = function(WW) {
          const iW = [];
          for (const mW of (0, EW.kc)(WW))
            if ("string" === typeof mW)
              for (const WW of mW.split(/(\s+)/)) {
                if ("" === WW) continue;
                if (/^\s+$/.test(WW)) {
                  iW.push({
                    kind: "space",
                    text: WW
                  });
                  continue
                }
                if (!MW.test(WW)) {
                  iW.push({
                    kind: "word",
                    text: WW,
                    delayMs: 0
                  });
                  continue
                }
                let mW = !0;
                for (const EW of null !== (OW = WW.match(KW)) && void 0 !== OW ? OW : []) {
                  var OW;
                  const WW = iW.at(-1);
                  mW || "word" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || MW.test(EW) || /[\p{L}\p{N}]/u.test(EW) ? (mW || iW.push({
                    kind: "space",
                    text: "\u200b"
                  }), iW.push({
                    kind: "word",
                    text: EW,
                    delayMs: 0
                  }), mW = !1) : WW.text += EW
                }
              } else iW.push({
                kind: "icon",
                text: mW.icon,
                delayMs: 0
              });
          return iW
        }(WW),
        SW = [];
      let hW = [];
      for (const mW of sW) "space" !== mW.kind && (hW.push(mW), bW.test(mW.text) && (SW.push(hW), hW = []));
      SW.push(hW);
      const HW = [];
      let nW = 0;
      for (const mW of SW) {
        var uW, oW;
        const WW = null !== (uW = null === (oW = mW.at(-1)) || void 0 === oW ? void 0 : oW.text) && void 0 !== uW ? uW : "",
          iW = jW.test(WW),
          OW = UW.test(WW),
          EW = mW.map((WW => "word" === WW.kind ? yW(WW.text) : 1)),
          sW = EW.findLastIndex((WW => WW > 0));
        for (const [jW, UW] of mW.entries()) {
          const WW = "word" === UW.kind,
            mW = EW[jW];
          UW.delayMs = nW;
          for (let EW = 0; lW && EW < mW; EW++) {
            const {
              intonation: NW
            } = lW;
            let PW = sW > 0 ? -NW.declineSemitones * (jW / sW) : 0;
            PW += YW(`${TW(UW.text)}|${EW}`) * NW.variationSemitones;
            const bW = Math.min(1, NW.variationSemitones);
            let kW = lW.glideSemitones,
              MW = 1;
            OW && (PW += NW.exclaimLiftSemitones, MW *= LW), iW && jW === sW && (PW += NW.questionRiseSemitones * (mW > 1 ? .5 + .5 * EW / (mW - 1) : 1), EW === mW - 1 && (kW = Math.abs(kW) + NW.questionRiseSemitones / 2)), WW && JW(UW.text) && (PW += wW * bW, MW *= cW), mW > 1 && 0 === EW && (PW += ZW * bW, MW *= tW), HW.push({
              atMs: nW + EW * AW,
              semitones: PW,
              glideSemitones: kW,
              durationMs: EW < mW - 1 ? Math.min(lW.durationMs, AW * xW) : lW.durationMs,
              level: MW
            })
          }
          nW += mW * AW + (bW.test(UW.text) ? PW : kW.test(UW.text) ? NW : 0)
        }
      }
      return {
        pieces: sW.map((WW => "space" === WW.kind ? WW : "icon" === WW.kind ? {
          kind: "icon",
          icon: WW.text,
          delayMs: WW.delayMs
        } : {
          kind: "word",
          text: WW.text,
          delayMs: WW.delayMs
        })),
        blips: HW
      }
    }
    var HW = OW(1172),
      nW = OW(1244),
      uW = OW(2042);

    function oW(WW) {
      if ("string" === typeof WW) return WW;
      const iW = nW.e.get().getCurrentLanguageCode();
      return (0, HW.p)(iW, WW.translationKey, (0, HW.o)(WW.params, uW.e.shown))
    }

    function dW(WW) {
      const iW = void 0 === WW.voice ? null : (0, mW.j)(WW.voice),
        OW = iW && (0, mW.h)(iW);
      return {
        plan: hW(oW(WW.line), OW),
        synth: OW
      }
    }

    function eW(WW) {
      const iW = [];
      let OW = [];
      for (const [EW, NW] of WW.entries()) {
        var mW;
        "space" === NW.kind && (" " !== NW.text || "icon" !== (null === (mW = WW[EW + 1]) || void 0 === mW ? void 0 : mW.kind)) ? (OW.length > 0 && iW.push(OW), iW.push([NW]), OW = []) : OW.push(NW)
      }
      return OW.length > 0 && iW.push(OW), iW
    }
  },
  5610: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => tW,
      h: () => ZW
    });
    var mW = OW(5615),
      EW = OW(25);
    const NW = .25,
      PW = .85,
      LW = .02,
      cW = .01;

    function wW(WW, iW, OW, mW, EW, NW, LW) {
      const {
        waveform: cW,
        pitchHz: wW,
        attackMs: tW,
        releaseMs: ZW,
        lowpassHz: xW
      } = OW, lW = EW + mW.durationMs / 1e3, AW = wW * 2 ** (mW.semitones / 12), bW = WW.createOscillator();
      bW.type = cW, bW.frequency.setValueAtTime(AW, EW), bW.frequency.exponentialRampToValueAtTime(AW * 2 ** (mW.glideSemitones / 12), lW);
      const jW = EW + Math.min(tW, mW.durationMs) / 1e3,
        UW = WW.createGain();
      UW.gain.setValueAtTime(0, EW), UW.gain.linearRampToValueAtTime(NW, jW), UW.gain.linearRampToValueAtTime(NW * PW, Math.max(jW, lW - ZW / 1e3)), UW.gain.linearRampToValueAtTime(0, lW);
      const kW = [bW];
      if (null !== xW) {
        const iW = WW.createBiquadFilter();
        iW.type = "lowpass", iW.frequency.value = xW, kW.push(iW)
      }
      kW.push(UW, iW);
      for (let PW = 1; PW < kW.length; PW++) kW[PW - 1].connect(kW[PW]);
      return bW.onended = () => {
        for (const WW of kW.slice(0, -1)) WW.disconnect();
        LW()
      }, bW.start(EW), bW.stop(lW), bW
    }

    function tW(WW, iW, OW, mW, EW, PW) {
      if (0 === mW.length) return PW(), () => {};
      const tW = NW * OW.volume * EW,
        ZW = WW.createGain();
      ZW.connect(iW);
      const xW = WW.currentTime + LW,
        lW = new Set;
      for (const NW of mW) {
        const iW = wW(WW, ZW, OW, NW, xW + NW.atMs / 1e3, tW * NW.level, (() => {
          lW.delete(iW), 0 === lW.size && (ZW.disconnect(), PW())
        }));
        lW.add(iW)
      }
      return () => {
        const iW = WW.currentTime;
        ZW.gain.setTargetAtTime(0, iW, cW);
        for (const WW of lW) try {
          WW.stop(iW + 5 * cW)
        } catch {}
      }
    }

    function ZW(WW, iW) {
      var OW;
      const NW = mW.Howler.ctx,
        PW = mW.Howler.masterGain;
      if (!NW || !PW || !EW.d.get("soundOnFromAd")) return () => {};
      const LW = mW.Howler;
      return null === (OW = LW._autoResume) || void 0 === OW || OW.call(LW), tW(NW, PW, WW, iW, EW.d.get("soundVolume"), (() => {
        var WW;
        null === (WW = LW._autoSuspend) || void 0 === WW || WW.call(LW)
      }))
    }
  },
  40366: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      closeClientGame: () => Zi,
      createDefaultClientPlugins: () => ti
    });
    var mW = OW(344);

    function EW() {
      let WW;
      return {
        onCreate(iW) {
          WW = iW
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(iW, OW, EW, NW, PW, LW) {
          var cW, wW;
          if ("Iron Chest" !== WW.getMetaInfo(PW).rootName) return;
          if (!WW.hasEffect(iW, "Thief")) return;
          const tW = WW.getBlockData(OW, EW, NW);
          return WW.getPlayerDbId(iW) !== (null === tW || void 0 === tW || null === (cW = tW.persisted) || void 0 === cW || null === (wW = cW.shared) || void 0 === wW ? void 0 : wW.ownerDbId) ? (WW.sendMessage(iW, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: mW.M.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var NW = OW(2937),
      PW = OW(1230);
    const LW = 8.4,
      cW = 1e-4,
      wW = .15,
      tW = .04,
      ZW = [.12, .04, .12],
      xW = 26,
      lW = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        aZ: 1,
        minLifeTime: cW,
        maxLifeTime: cW,
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
        blendMode: NW.d.Standard
      },
      AW = {
        texture: "bubble",
        mipmaps: !1,
        aZ: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: xW,
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
        blendMode: NW.d.Standard
      },
      bW = [0, 0, 0],
      jW = [0, 0, 0];

    function UW(WW) {
      const iW = new Map;
      let OW = null;

      function mW(WW) {
        var iW, OW;
        null === (iW = WW.bubbles) || void 0 === iW || iW.stop(), null === (OW = WW.fish) || void 0 === OW || OW.stop()
      }

      function EW(OW) {
        if (!OW.readDrawnPosition(WW, jW)) {
          for (const WW of iW.values()) {
            var mW;
            null === (mW = WW.bubbles) || void 0 === mW || mW.setEmitRate(0)
          }
          return
        }
        const EW = performance.now();
        for (const [WW, PW] of iW) {
          var NW;
          if (null === (NW = PW.bubbles) || void 0 === NW || NW.setEmitRate(0), !OW.readDrawnPosition(WW, bW)) continue;
          if (!((bW[0] - jW[0]) ** 2 + (bW[1] - jW[1]) ** 2 + (bW[2] - jW[2]) ** 2 < 900)) continue;
          const iW = Math.max(0, PW.biteAt - EW),
            mW = PW.approachDurationMs > 0 ? Math.min(1, 1 - iW / PW.approachDurationMs) : 1,
            cW = (PW.approachDurationMs - iW) / 1e3,
            UW = PW.phase + .25 * Math.sin(1.7 * cW + PW.phase),
            kW = Math.min(PW.approachDurationMs / 3e3 * 2.8, LW) * (1 - mW) * (1 + .15 * Math.sin(2.1 * cW + PW.phase)),
            sW = Math.min(1, 4 * (1 - mW)),
            MW = (.45 * Math.sin(4.1 * cW + PW.phase) + .18 * Math.sin(9.7 * cW + 2 * PW.phase)) * sW,
            KW = bW[0] + Math.cos(UW) * kW - Math.sin(UW) * MW,
            SW = Math.ceil(PW.surfaceY),
            YW = bW[2] + Math.sin(UW) * kW + Math.cos(UW) * MW,
            {
              fishAt: yW,
              bubblesAt: TW
            } = PW;
          yW[0] = TW[0] = KW, yW[1] = SW + wW, TW[1] = SW + tW, yW[2] = TW[2] = YW, PW.fish ??= OW.createParticles(lW, {
            pos: yW
          }), PW.fish.moveTo(yW), PW.fish.emit(1), PW.bubbles ??= OW.createParticles(AW, {
            pos: TW,
            half: ZW
          }), PW.bubbles.moveTo(TW), PW.bubbles.setEmitRate(xW + 32 * (.5 + .5 * Math.sin(9 * cW + PW.phase)) ** 4 + 13 * mW)
        }
      }
      return {
        onCreate(WW) {
          OW = WW
        },
        onAfterRender() {
          OW && EW(OW)
        },
        onClose() {
          for (const WW of iW.values()) mW(WW);
          iW.clear(), OW = null
        },
        onReceivedMessageFromServer(WW, OW) {
          if (WW !== PW.r) return;
          const {
            hookId: EW,
            waiting: NW
          } = OW;
          if (NW) iW.has(EW) || iW.set(EW, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + NW.remainingMs,
            approachDurationMs: NW.durationMs,
            surfaceY: NW.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const WW = iW.get(EW);
            WW && mW(WW), iW.delete(EW)
          }
        }
      }
    }
    var kW = OW(5610),
      sW = OW(5599);

    function MW(WW) {
      let iW, OW = null,
        mW = null;
      const EW = () => {
        var WW;
        null === (WW = mW) || void 0 === WW || WW(), mW = null
      };
      return {
        onCreate(mW) {
          iW = mW, OW = iW.getClientOption(WW, "dialogue")
        },
        onAfterRender() {
          if (!iW) return;
          const NW = iW.getClientOption(WW, "dialogue");
          if (NW === OW) return;
          if (OW = NW, EW(), !NW || !1 === NW.animateIn) return;
          const {
            plan: PW,
            synth: LW
          } = (0, sW.g)(NW);
          LW && (mW = (0, kW.h)(LW, PW.blips))
        },
        onClose: EW
      }
    }
    var KW = OW(40371);
    const SW = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      YW = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      yW = [0, 1, 2, 0, 2, 3];

    function TW(WW, iW, OW) {
      var mW;
      let [EW, NW, PW] = iW;
      if (WW.hasPackModel("Furnace")) return null;
      const LW = ((null !== (mW = WW.getMetaInfo(OW).rot) && void 0 !== mW ? mW : 1) - 1) * Math.PI / 2,
        cW = Math.PI + LW,
        wW = Math.cos(cW),
        tW = Math.sin(cW),
        ZW = [];
      for (const [AW, bW] of SW) ZW.push(AW * wW, bW, -AW * tW);
      const xW = {
          positions: ZW,
          indices: yW,
          uvs: YW
        },
        lW = [EW + .5 + .51 * Math.sin(LW), NW + .375, PW + .5 + .51 * Math.cos(LW)];
      return WW.createGameMesh(xW, {
        kind: "furnaceFire"
      }, lW)
    }

    function JW(WW) {
      return Math.floor(WW / 200) % 3
    }

    function hW(WW, iW, OW) {
      WW.setGameMesh(iW, {
        uvOffset: [0, OW / 3]
      })
    }
    const HW = [.12, .025, .12],
      nW = [{
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
          blendMode: NW.d.Standard,
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
          blendMode: NW.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class uW {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(WW, iW) {
        const OW = WW.getBlockId(iW[0], iW[1], iW[2]);
        if ("Furnace" !== WW.getMetaInfo(OW).rootName) return;
        const mW = performance.now();
        let EW = this.smokes.find((WW => WW.pos[0] === iW[0] && WW.pos[1] === iW[1] && WW.pos[2] === iW[2] && WW.NL === OW));
        if (EW || (EW = {
            pos: [iW[0], iW[1], iW[2]],
            NL: OW,
            endMs: mW,
            lastBurstMs: -1 / 0,
            pending: new Array(nW.length).fill(0),
            fire: TW(WW, iW, OW)
          }, this.smokes.push(EW), null !== EW.fire && (hW(WW, EW.fire, JW(mW)), this.shownFireFrame = -1)), EW.endMs = mW + 6e3, this.smokes.length > 4) {
          const iW = this.smokes.reduce(((WW, iW) => iW.endMs < WW.endMs ? iW : WW));
          oW(WW, iW), this.smokes.splice(this.smokes.indexOf(iW), 1)
        }
        mW - EW.lastBurstMs >= 300 && (EW.lastBurstMs = mW, nW.forEach(((WW, iW) => {
          EW.pending[iW] += WW.style.count
        })))
      }
      onAfterRender(WW, iW) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const OW = performance.now();
        this.smokes = this.smokes.filter((iW => {
          const [mW, EW, NW] = iW.pos, PW = OW < iW.endMs && WW.getBlockId(mW, EW, NW) === iW.NL;
          return PW || oW(WW, iW), PW
        }));
        const mW = JW(OW);
        if (mW !== this.shownFireFrame) {
          this.shownFireFrame = mW;
          for (const iW of this.smokes) null !== iW.fire && hW(WW, iW.fire, mW)
        }
        if (!WW.particlesEnabled()) {
          for (const WW of this.smokes) WW.pending.fill(0);
          return
        }
        const EW = Math.min(iW, 250) / 1e3;
        for (const NW of this.smokes) {
          const [iW, mW, PW] = NW.pos;
          if (0 !== WW.getBlockId(iW, mW + 1, PW)) {
            NW.pending.fill(0);
            continue
          }
          const LW = (NW.endMs - OW) / 6e3,
            cW = this.centre;
          cW[0] = iW + .5, cW[1] = mW + 1.275, cW[2] = PW + .5, nW.forEach(((iW, OW) => {
            NW.pending[OW] += iW.perSecond * LW * EW;
            const mW = Math.floor(NW.pending[OW]);
            mW > 0 && this.emit(WW, OW, cW, mW) && (NW.pending[OW] -= mW)
          }))
        }
      }
      dispose(WW) {
        for (const OW of this.smokes) oW(WW, OW);
        this.smokes = [];
        for (const OW of null !== (iW = this.puffers) && void 0 !== iW ? iW : []) {
          var iW;
          OW.dispose()
        }
        this.puffers = null
      }
      emit(WW, iW, OW, mW) {
        return this.puffers ??= nW.map((WW => {
          let {
            style: iW,
            perSecond: OW
          } = WW;
          const mW = (iW.count / .3 + OW) * iW.life[1];
          return new KW.h(iW, Math.ceil(4 * mW), HW)
        })), this.puffers[iW].emit(WW, OW, this.renderFrame, mW)
      }
    }

    function oW(WW, iW) {
      null !== iW.fire && (WW.disposeGameMesh(iW.fire), iW.fire = null)
    }

    function dW() {
      let WW;
      const iW = new uW;
      return {
        onCreate(iW) {
          WW = iW
        },
        onReceivedMessageFromServer(OW, mW) {
          OW === PW.s && iW.start(WW, mW)
        },
        onAfterRender(OW) {
          iW.onAfterRender(WW, OW)
        },
        onClose() {
          iW.dispose(WW)
        }
      }
    }
    var eW = OW(182),
      vW = OW(40337),
      gW = OW(40380),
      DW = OW(40384);
    class VW {
      constructor(WW, iW, OW) {
        this.api = WW, this.wearer = iW, this.name = OW, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new DW.e, this.shown = !1, this.raised = 0
      }
      update(WW) {
        var iW;
        const OW = (0, vW.h)(this.name);
        if (!OW) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === OW.model && this.madeFrom.scale === OW.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(OW.model, OW.scale), this.madeFrom = OW, !this.model)) return void this.raiseNametag(0);
        if (!(WW.drawn && !WW.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const mW = this.motion.step({
          dt: WW.dt,
          feet: WW.feet,
          heading: WW.heading,
          headTopY: WW.headTopY,
          tuning: OW,
          timeS: WW.timeS
        });
        this.model.setPose(mW.pos, mW.yaw + Math.PI), this.model.setClip(null !== (iW = mW.clip) && void 0 !== iW ? iW : null);
        const EW = mW.seated ? OW : null;
        EW !== this.perchedWith && (this.perchedWith = EW, this.model.setPerch(EW && {
          ZO: this.wearer,
          offset: EW.perchOffset,
          yaw: EW.yawOffset
        })), this.setShown(!0), this.raiseNametag(OW.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(WW) {
        WW !== this.raised && (this.raised = WW, this.api.setNametagOffset(this.wearer, WW))
      }
      freeModel() {
        var WW;
        null === (WW = this.model) || void 0 === WW || WW.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(WW) {
        this.model && WW !== this.shown && (this.shown = WW, this.model.setVisible(WW))
      }
    }
    class pW {
      constructor(WW, iW) {
        this.api = WW, this.name = iW, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(WW) {
        const iW = (0, vW.g)(this.name);
        if (iW !== this.madeFrom && this.stop(), !iW) return;
        const OW = WW.ownFirstPerson ? iW.ownInFirstPerson : WW.drawn;
        if (OW) {
          const {
            centre: OW
          } = this;
          if ((0, DW.j)(OW, WW.feet, iW.offset, Math.sin(WW.heading), Math.cos(WW.heading)), this.particles) this.particles.moveTo(OW, this.half);
          else {
            const WW = (0, gW.d)(iW);
            this.half = WW.half, this.particles = this.api.createParticles(WW.opts, {
              pos: OW,
              half: WW.half
            }), this.madeFrom = iW, this.emitting = !0
          }
        }
        this.particles && OW !== this.emitting && (this.emitting = OW, this.particles.setEmitRate(OW ? iW.particles.emitRate : 0))
      }
      stop() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const fW = .25,
      CW = 48,
      XW = 4,
      BW = 24,
      qW = 12,
      RW = .6,
      GW = 1 / eW.f.playerEyeToHeightRatio;

    function IW(WW, iW, OW) {
      const mW = WW.filter((WW => WW[iW] <= CW));
      return mW.sort(((WW, OW) => WW[iW] - OW[iW])), new Set(mW.slice(0, OW).map((WW => WW.id)))
    }

    function aW() {
      let WW;
      const iW = new Map;
      let OW = 0,
        mW = 0;
      const EW = [0, 0, 0],
        NW = {
          feet: EW,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function PW(WW) {
        var iW, OW;
        null === (iW = WW.pet) || void 0 === iW || iW.dispose(), null === (OW = WW.aura) || void 0 === OW || OW.stop()
      }

      function LW(iW, OW) {
        var mW, PW;
        const {
          id: LW
        } = iW, cW = WW.readDrawnPosition(LW, EW) ? WW.getDrawnHeading(LW) : null, wW = null === cW ? null : WW.getDrawnEyeHeight(LW);
        if (null === cW || null === wW) NW.drawn = !1, NW.ownFirstPerson = !1;
        else {
          const iW = OW.cameraPosition;
          NW.heading = cW, NW.headTopY = EW[1] + wW * GW, NW.drawn = WW.isAlive(LW) && WW.isEntityDrawn(LW), NW.ownFirstPerson = WW.isLocalPlayer(LW) && WW.isAlive(LW) && Math.hypot(iW[0] - EW[0], iW[1] - EW[1] - wW, iW[2] - EW[2]) < RW
        }
        null === (mW = iW.pet) || void 0 === mW || mW.update(NW), null === (PW = iW.aura) || void 0 === PW || PW.update(NW)
      }
      return {
        onCreate(iW) {
          WW = iW
        },
        onAfterRender(cW, wW) {
          const tW = cW / 1e3;
          mW += tW, OW -= tW, OW <= 0 && (OW = fW, function(OW) {
            const mW = [];
            for (const PW of WW.getPlayerIds()) {
              const NW = WW.getPlayerCosmetics(PW),
                LW = void 0 !== (null === NW || void 0 === NW ? void 0 : NW.pet) && (0, vW.h)(NW.pet) ? NW.pet : null,
                cW = void 0 !== (null === NW || void 0 === NW ? void 0 : NW.aura) && (0, vW.g)(NW.aura) ? NW.aura : null;
              if (null === LW && null === cW || !WW.readDrawnPosition(PW, EW)) continue;
              const wW = Math.hypot(EW[0] - OW[0], EW[1] - OW[1], EW[2] - OW[2]),
                tW = iW.get(PW);
              mW.push({
                id: PW,
                pet: LW,
                aura: cW,
                petDist: null === LW ? 1 / 0 : wW - (null !== tW && void 0 !== tW && tW.pet ? XW : 0),
                auraDist: null === cW ? 1 / 0 : wW - (null !== tW && void 0 !== tW && tW.aura ? XW : 0)
              })
            }
            const NW = IW(mW, "petDist", BW),
              LW = WW.particlesEnabled() ? IW(mW, "auraDist", qW) : new Set,
              cW = new Set;
            for (const {
                id: EW,
                pet: PW,
                aura: bW
              }
              of mW) {
              var wW, tW, ZW;
              const OW = null !== (wW = iW.get(EW)) && void 0 !== wW ? wW : {
                  id: EW,
                  pet: null,
                  aura: null
                },
                mW = NW.has(EW) ? PW : null,
                jW = LW.has(EW) ? bW : null;
              var xW, lW, AW;
              (null === (tW = OW.pet) || void 0 === tW ? void 0 : tW.name) !== mW ? (null === (xW = OW.pet) || void 0 === xW || xW.dispose(), OW.pet = null === mW ? null : new VW(WW, EW, mW)) : null === (lW = OW.pet) || void 0 === lW || lW.refreshNametag(), (null === (ZW = OW.aura) || void 0 === ZW ? void 0 : ZW.name) !== jW && (null === (AW = OW.aura) || void 0 === AW || AW.stop(), OW.aura = null === jW ? null : new pW(WW, jW)), (OW.pet || OW.aura) && (iW.set(EW, OW), cW.add(EW))
            }
            for (const [WW, EW] of iW) cW.has(WW) || (PW(EW), iW.delete(WW))
          }(wW.cameraPosition)), NW.dt = tW, NW.timeS = mW;
          for (const WW of iW.values()) LW(WW, wW)
        },
        onClose() {
          for (const WW of iW.values()) PW(WW);
          iW.clear()
        }
      }
    }
    var rW = OW(9963);
    const zW = "skyblockLoot",
      FW = "autoPickupClick";
    var QW = OW(1770);

    function Wi(WW, iW) {
      return [{
        timeFraction: 0,
        minColor: [255 * WW[0], 255 * WW[1], 255 * WW[2], 1],
        maxColor: [255 * iW[0], 255 * iW[1], 255 * iW[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const ii = [0, 0, 0],
      Oi = {
        texture: "glint",
        mipmaps: !1,
        aZ: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: ii,
        dir2: ii,
        blendMode: NW.d.OneOne
      },
      mi = {
        ...Oi,
        colorGradients: Wi([1, .88, .38], [1, .65, .15])
      },
      Ei = {
        ...Oi,
        colorGradients: Wi([.55, .95, 1], [.9, 1, 1])
      },
      Ni = [.5, .5, .5],
      Pi = {
        texture: "glint",
        mipmaps: !1,
        aZ: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Wi([1, .12, .12], [1, .35, .2]),
        blendMode: NW.d.OneOne
      };
    class Li {
      constructor() {
        this.drops = new Map
      }
      yZ(WW, iW) {
        if ("overflowFlash" === iW.kind) {
          const [OW, mW, EW] = iW.position, NW = WW.createParticles(Pi, {
            pos: [OW, mW, EW],
            half: Ni
          });
          return NW.emit(18), void NW.stop()
        }
        this.drops.has(iW.itemId) || this.drops.set(iW.itemId, {
          owner: iW.owner,
          cosmetic: iW.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      hZ(WW) {
        if (0 === this.drops.size) return;
        const iW = performance.now(),
          OW = WW.getCameraPosition();
        let mW = 0;
        for (const NW of this.drops.values()) null !== NW.particles && mW++;
        for (const [NW, PW] of this.drops) {
          const LW = WW.getPositionView(NW);
          if (null === LW) {
            var EW;
            if (PW.seen || iW - PW.markedAt > 5e3) null !== PW.particles && mW--, null === (EW = PW.particles) || void 0 === EW || EW.stop(), this.drops.delete(NW);
            continue
          }
          PW.cosmetic || !WW.isLocalPlayer(PW.owner) || PW.pickupDelayCleared || (WW.clearPickupDelay(NW), PW.pickupDelayCleared = !0);
          const cW = PW.lastPosition,
            wW = PW.seen && (LW[0] - cW[0]) ** 2 + (LW[1] - cW[1]) ** 2 + (LW[2] - cW[2]) ** 2 > 4e-4,
            tW = (LW[0] - OW[0]) ** 2 + (LW[1] - OW[1]) ** 2 + (LW[2] - OW[2]) ** 2 < 2025;
          PW.seen = !0, cW[0] = LW[0], cW[1] = LW[1], cW[2] = LW[2], wW && (PW.lastMovingAt = iW), null !== PW.particles && (!tW || iW - PW.lastMovingAt > 500) && (PW.particles.stop(), PW.particles = null, mW--), wW && tW && null === PW.particles && mW < 32 && (PW.particles = WW.createParticles(PW.cosmetic ? Ei : mi, {
            pos: LW
          }), mW++), null !== PW.particles && (PW.particles.moveTo(LW), PW.particles.setEmitRate(wW ? 12 : 0)), !wW && null === PW.particles && iW - Math.max(PW.lastMovingAt, PW.markedAt) > 2e3 && this.drops.delete(NW)
        }
      }
      dispose() {
        for (const iW of this.drops.values()) {
          var WW;
          null === (WW = iW.particles) || void 0 === WW || WW.stop()
        }
        this.drops.clear()
      }
    }
    const ci = new Set;

    function wi() {
      let WW;
      const iW = new Li;
      return {
        onCreate(iW) {
          WW = iW
        },
        onReceivedMessageFromServer(OW, mW) {
          if (OW === zW) iW.yZ(WW, mW);
          else if (OW === FW) {
            const WW = mW,
              iW = `${WW.id}|${WW.value}`;
            ci.has(iW) || (ci.add(iW), (0, QW.e)({
              id: WW.id,
              value: WW.value
            }))
          }
        },
        hZ() {
          iW.hZ(WW)
        },
        onClose() {
          iW.dispose()
        }
      }
    }

    function ti(WW, iW, OW, mW) {
      return {
        cosmeticCompanions: aW(),
        dialogue: MW(mW.localPlayerId),
        fishing: UW(mW.localPlayerId),
        furnaceSmoke: dW(),
        ironChest: EW(),
        localBlockBroken: (0, rW.b)(),
        magnetLoot: wi()
      }
    }

    function Zi(WW, iW) {
      for (const EW of [WW, ...null !== iW && void 0 !== iW ? iW : []]) try {
        var OW;
        null === EW || void 0 === EW || null === (OW = EW.onClose) || void 0 === OW || OW.call(EW)
      } catch (mW) {
        console.error("Error in client onClose callback", mW)
      }
    }
  },
  9963: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW,
      e: () => EW
    });
    var mW = OW(27);
    const EW = "localBlockBroken";

    function NW() {
      return {
        onPlayerChangeBlock(WW, iW, OW, NW, PW, LW) {
          "Air" === LW && mW.l.iZ(EW)
        }
      }
    }
  },
  40371: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW,
      h: () => NW
    });
    const mW = 1 / .6,
      EW = {
        kind: "smokePuff"
      };
    class NW {
      constructor(WW, iW, OW) {
        this.style = WW, this.aZ = iW, this.half = OW, this.particles = null, this.lastFrame = -1
      }
      emit(WW, iW, OW) {
        let NW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return OW !== this.lastFrame && (this.lastFrame = OW, this.particles || (this.particles = WW.createParticles(function(WW, iW) {
          const [
            [OW, NW, PW],
            [LW, cW, wW]
          ] = WW.colours;
          return {
            texture: WW.soft ? EW : "square_particle",
            aZ: iW,
            minLifeTime: WW.life[0] / mW,
            maxLifeTime: WW.life[1] / mW,
            minEmitPower: WW.power[0] * mW,
            maxEmitPower: WW.power[1] * mW,
            minSize: WW.size[0],
            maxSize: WW.size[1],
            emitRate: 0,
            gravity: [0, WW.lift * mW * mW, 0],
            dir1: [-WW.spread, 1, -WW.spread],
            dir2: [WW.spread, 1, WW.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [OW, NW, PW, WW.alpha],
              maxColor: [LW, cW, wW, WW.alpha]
            }, {
              timeFraction: 1,
              minColor: [OW, NW, PW, 0],
              maxColor: [LW, cW, wW, 0]
            }],
            blendMode: WW.blendMode
          }
        }(this.style, this.aZ), {
          pos: iW,
          half: this.half
        })), this.particles.moveTo(iW, this.half), this.particles.emit(NW), !0)
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null
      }
    }
  },
  5605: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW,
      e: () => mW,
      g: () => NW,
      h: () => cW,
      j: () => PW
    });
    const mW = ["sine", "triangle", "square", "sawtooth"],
      EW = 55,
      NW = {
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

    function PW(WW) {
      return "string" !== typeof WW ? WW : Object.hasOwn(NW, WW) ? NW[WW] : null
    }

    function LW(WW, iW, OW) {
      return Math.min(OW, Math.max(iW, WW))
    }

    function cW(WW) {
      const iW = LW(WW.durationMs, 10, 500),
        OW = LW(WW.attackMs, 0, iW),
        {
          intonation: EW
        } = WW;
      return {
        waveform: mW.includes(WW.waveform) ? WW.waveform : "sine",
        pitchHz: LW(WW.pitchHz, 20, 4e3),
        glideSemitones: LW(WW.glideSemitones, -24, 24),
        durationMs: iW,
        attackMs: OW,
        releaseMs: LW(WW.releaseMs, 0, iW - OW),
        lowpassHz: null === WW.lowpassHz ? null : LW(WW.lowpassHz, 20, 2e4),
        volume: LW(WW.volume, 0, 2),
        intonation: {
          variationSemitones: LW(EW.variationSemitones, 0, 6),
          declineSemitones: LW(EW.declineSemitones, 0, 12),
          questionRiseSemitones: LW(EW.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: LW(EW.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: LW(WW.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);