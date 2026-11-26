export const id = 32;
export const ids = [32];
export const modules = {
  40108: (HH, BH, LH) => {
    function AH(HH) {
      return void 0 === HH ? void 0 : [HH[0], HH[1], HH[2]]
    }

    function rH(HH) {
      const BH = HH.particles;
      return {
        opts: {
          texture: BH.texture,
          aX: BH.aX,
          minLifeTime: BH.minLifeTime,
          maxLifeTime: BH.maxLifeTime,
          minSize: BH.minSize,
          maxSize: BH.maxSize,
          minEmitPower: BH.minEmitPower,
          maxEmitPower: BH.maxEmitPower,
          emitRate: BH.emitRate,
          gravity: AH(BH.gravity),
          dir1: AH(BH.dir1),
          dir2: AH(BH.dir2),
          colorGradients: BH.colorGradients,
          blendMode: BH.blendMode
        },
        half: [BH.width / 2, BH.height / 2, BH.depth / 2]
      }
    }
    LH.d(BH, {
      b: () => rH
    })
  },
  40066: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => CH,
      h: () => zH,
      i: () => hH
    });
    var AH = LH(186);
    const rH = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      SH = "PetRoot";
    let hH = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      tH = rH;
    new Map, new Map;

    function zH(HH) {
      var BH;
      return null !== (BH = (0, AH.d)(hH, HH)) && void 0 !== BH ? BH : null
    }

    function CH(HH) {
      var BH;
      return null !== (BH = (0, AH.d)(tH, HH)) && void 0 !== BH ? BH : null
    }
  },
  40117: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      c: () => rH,
      g: () => SH
    });
    class AH {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.EW = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(HH) {
        var BH;
        const {
          feet: LH,
          heading: AH,
          tuning: hH
        } = HH, tH = Math.min(Math.max(HH.dt, 0), .1), {
          pose: zH,
          EW: CH,
          target: EH
        } = this;
        if (this.started && tH > 0) {
          const HH = Math.hypot(LH[0] - this.lastFeet[0], LH[1] - this.lastFeet[1], LH[2] - this.lastFeet[2]);
          this.speed += (HH / tH - this.speed) * Math.min(tH / .15, 1)
        }
        this.lastFeet[0] = LH[0], this.lastFeet[1] = LH[1], this.lastFeet[2] = LH[2], this.stillS = this.speed > .3 ? 0 : this.stillS + tH;
        const XH = this.stillS >= .6 ? "perched" : "flying";
        "flying" === XH && "perched" === zH.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += tH, zH.mode = XH;
        const GH = Math.sin(AH),
          YH = Math.cos(AH);
        "perched" === XH ? (SH(EH, LH, hH.perchOffset, GH, YH), EH[1] += HH.headTopY - LH[1]) : (SH(EH, LH, hH.followOffset, GH, YH), EH[1] += rH(hH, HH.timeS));
        const {
          pos: uH
        } = zH, QH = Math.hypot(EH[0] - uH[0], EH[1] - uH[1], EH[2] - uH[2]);
        if (!this.started || QH > 8 || "perched" === XH && (this.perchLocked || QH < .05)) this.perchLocked = this.started && "perched" === XH, uH[0] = EH[0], uH[1] = EH[1], uH[2] = EH[2], CH[0] = CH[1] = CH[2] = 0;
        else {
          const HH = hH.followStiffness;
          for (let BH = 0; BH < 3; BH++) CH[BH] += (HH * HH * (EH[BH] - uH[BH]) - 2 * HH * CH[BH]) * tH, uH[BH] += CH[BH] * tH
        }
        const WH = AH + hH.yawOffset;
        var MH;
        return this.started ? zH.yaw += ((MH = WH - zH.yaw) - 2 * Math.PI * Math.round(MH / (2 * Math.PI))) * Math.min(8 * tH, 1) : zH.yaw = WH, this.started = !0, zH.seated = "perched" === XH && this.perchLocked, zH.clip = null === (BH = hH.clips) || void 0 === BH ? void 0 : BH[this.VB(XH)], zH
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      VB(HH) {
        return "perched" === HH ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function rH(HH, BH) {
      return HH.bobAmplitude * Math.sin(2 * Math.PI * HH.bobHz * BH)
    }

    function SH(HH, BH, LH, AH, rH) {
      const [SH, hH, tH] = LH;
      HH[0] = BH[0] + SH * rH + tH * AH, HH[1] = BH[1] + hH, HH[2] = BH[2] - SH * AH + tH * rH
    }
  },
  5319: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => cH,
      d: () => KH
    });
    var AH = LH(5325),
      rH = LH(304);
    const SH = 120,
      hH = 260,
      tH = 1.15,
      zH = 1.2,
      CH = 2,
      EH = 1.08,
      XH = .8,
      GH = .95,
      YH = 8,
      uH = "[\"')\\]\u300d\u300f\uff09]*",
      QH = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${uH}$`),
      WH = new RegExp(`[?\uff1f]${uH}$`),
      MH = new RegExp(`[!\uff01]${uH}$`),
      xH = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vH = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      PH = new RegExp(`[${vH}]`),
      TH = new RegExp(`[${vH}]|[^${vH}]+`, "g"),
      UH = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function VH(HH) {
      let BH = 2166136261;
      for (let LH = 0; LH < HH.length; LH++) BH ^= HH.charCodeAt(LH), BH = Math.imul(BH, 16777619);
      return (BH >>> 0) / 4294967295 * 2 - 1
    }

    function OH(HH) {
      var BH;
      if (PH.test(HH)) return 1;
      const LH = HH.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        AH = LH.replace(/[^0-9]/g, "");
      if (AH.length > 0 && !/\p{L}/u.test(LH)) return Math.min(AH.length, 4);
      const rH = null !== (BH = LH.match(UH)) && void 0 !== BH ? BH : [];
      if (0 === rH.length) {
        var SH, hH;
        const HH = null !== (SH = null === (hH = LH.match(/\p{L}/gu)) || void 0 === hH ? void 0 : hH.length) && void 0 !== SH ? SH : 0;
        return 0 === HH ? 0 : Math.min(Math.max(1, Math.round(HH / 2.5)), YH)
      }
      const tH = LH.replace(/[^\p{L}]/gu, ""),
        zH = rH.length > 1 && "e" === rH.at(-1) && tH.endsWith("e") && !tH.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(HH.replace(/[^\p{L}]/gu, ""));
      return Math.min(rH.length - (zH ? 1 : 0), YH)
    }

    function bH(HH) {
      return HH.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function kH(HH) {
      const BH = HH.replace(/[^\p{L}]/gu, "");
      return BH.length >= 2 && BH === BH.toUpperCase() && BH !== BH.toLowerCase()
    }

    function mH(HH, BH) {
      var LH;
      const YH = BH && (0, AH.k)(BH),
        uH = null !== (LH = null === YH || void 0 === YH ? void 0 : YH.syllableMs) && void 0 !== LH ? LH : AH.e,
        vH = function(HH) {
          const BH = [];
          for (const AH of (0, rH.tc)(HH))
            if ("string" === typeof AH)
              for (const HH of AH.split(/(\s+)/)) {
                if ("" === HH) continue;
                if (/^\s+$/.test(HH)) {
                  BH.push({
                    kind: "space",
                    text: HH
                  });
                  continue
                }
                if (!PH.test(HH)) {
                  BH.push({
                    kind: "word",
                    text: HH,
                    delayMs: 0
                  });
                  continue
                }
                let AH = !0;
                for (const rH of null !== (LH = HH.match(TH)) && void 0 !== LH ? LH : []) {
                  var LH;
                  const HH = BH.at(-1);
                  AH || "word" !== (null === HH || void 0 === HH ? void 0 : HH.kind) || PH.test(rH) || /[\p{L}\p{N}]/u.test(rH) ? (AH || BH.push({
                    kind: "space",
                    text: "\u200b"
                  }), BH.push({
                    kind: "word",
                    text: rH,
                    delayMs: 0
                  }), AH = !1) : HH.text += rH
                }
              } else BH.push({
                kind: "icon",
                text: AH.icon,
                delayMs: 0
              });
          return BH
        }(HH),
        UH = [];
      let mH = [];
      for (const AH of vH) "space" !== AH.kind && (mH.push(AH), QH.test(AH.text) && (UH.push(mH), mH = []));
      UH.push(mH);
      const oH = [];
      let IH = 0;
      for (const AH of UH) {
        var fH, lH;
        const HH = null !== (fH = null === (lH = AH.at(-1)) || void 0 === lH ? void 0 : lH.text) && void 0 !== fH ? fH : "",
          BH = WH.test(HH),
          LH = MH.test(HH),
          rH = AH.map((HH => "word" === HH.kind ? OH(HH.text) : 1)),
          vH = rH.findLastIndex((HH => HH > 0));
        for (const [WH, MH] of AH.entries()) {
          const HH = "word" === MH.kind,
            AH = rH[WH];
          MH.delayMs = IH;
          for (let rH = 0; YH && rH < AH; rH++) {
            const {
              intonation: SH
            } = YH;
            let hH = vH > 0 ? -SH.declineSemitones * (WH / vH) : 0;
            hH += VH(`${bH(MH.text)}|${rH}`) * SH.variationSemitones;
            const QH = Math.min(1, SH.variationSemitones);
            let xH = YH.glideSemitones,
              PH = 1;
            LH && (hH += SH.exclaimLiftSemitones, PH *= tH), BH && WH === vH && (hH += SH.questionRiseSemitones * (AH > 1 ? .5 + .5 * rH / (AH - 1) : 1), rH === AH - 1 && (xH = Math.abs(xH) + SH.questionRiseSemitones / 2)), HH && kH(MH.text) && (hH += CH * QH, PH *= zH), AH > 1 && 0 === rH && (hH += XH * QH, PH *= EH), oH.push({
              atMs: IH + rH * uH,
              semitones: hH,
              glideSemitones: xH,
              durationMs: rH < AH - 1 ? Math.min(YH.durationMs, uH * GH) : YH.durationMs,
              level: PH
            })
          }
          IH += AH * uH + (QH.test(MH.text) ? hH : xH.test(MH.text) ? SH : 0)
        }
      }
      return {
        pieces: vH.map((HH => "space" === HH.kind ? HH : "icon" === HH.kind ? {
          kind: "icon",
          icon: HH.text,
          delayMs: HH.delayMs
        } : {
          kind: "word",
          text: HH.text,
          delayMs: HH.delayMs
        })),
        blips: oH
      }
    }
    var oH = LH(1123),
      IH = LH(1194),
      fH = LH(2003);

    function lH(HH) {
      if ("string" === typeof HH) return HH;
      const BH = IH.g.get().getCurrentLanguageCode();
      return (0, oH.r)(BH, HH.translationKey, (0, oH.q)(HH.params, fH.c.shown))
    }

    function KH(HH) {
      const BH = void 0 === HH.voice ? null : (0, AH.l)(HH.voice),
        LH = BH && (0, AH.k)(BH);
      return {
        plan: mH(lH(HH.line), LH),
        synth: LH
      }
    }

    function cH(HH) {
      const BH = [];
      let LH = [];
      for (const [rH, SH] of HH.entries()) {
        var AH;
        "space" === SH.kind && (" " !== SH.text || "icon" !== (null === (AH = HH[rH + 1]) || void 0 === AH ? void 0 : AH.kind)) ? (LH.length > 0 && BH.push(LH), BH.push([SH]), LH = []) : LH.push(SH)
      }
      return LH.length > 0 && BH.push(LH), BH
    }
  },
  5333: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => EH,
      f: () => XH
    });
    var AH = LH(5335),
      rH = LH(15);
    const SH = .25,
      hH = .85,
      tH = .02,
      zH = .01;

    function CH(HH, BH, LH, AH, rH, SH, tH) {
      const {
        waveform: zH,
        pitchHz: CH,
        attackMs: EH,
        releaseMs: XH,
        lowpassHz: GH
      } = LH, YH = rH + AH.durationMs / 1e3, uH = CH * 2 ** (AH.semitones / 12), QH = HH.createOscillator();
      QH.type = zH, QH.frequency.setValueAtTime(uH, rH), QH.frequency.exponentialRampToValueAtTime(uH * 2 ** (AH.glideSemitones / 12), YH);
      const WH = rH + Math.min(EH, AH.durationMs) / 1e3,
        MH = HH.createGain();
      MH.gain.setValueAtTime(0, rH), MH.gain.linearRampToValueAtTime(SH, WH), MH.gain.linearRampToValueAtTime(SH * hH, Math.max(WH, YH - XH / 1e3)), MH.gain.linearRampToValueAtTime(0, YH);
      const xH = [QH];
      if (null !== GH) {
        const BH = HH.createBiquadFilter();
        BH.type = "lowpass", BH.frequency.value = GH, xH.push(BH)
      }
      xH.push(MH, BH);
      for (let hH = 1; hH < xH.length; hH++) xH[hH - 1].connect(xH[hH]);
      return QH.onended = () => {
        for (const HH of xH.slice(0, -1)) HH.disconnect();
        tH()
      }, QH.start(rH), QH.stop(YH), QH
    }

    function EH(HH, BH, LH, AH, rH, hH) {
      if (0 === AH.length) return hH(), () => {};
      const EH = SH * LH.volume * rH,
        XH = HH.createGain();
      XH.connect(BH);
      const GH = HH.currentTime + tH,
        YH = new Set;
      for (const SH of AH) {
        const BH = CH(HH, XH, LH, SH, GH + SH.atMs / 1e3, EH * SH.level, (() => {
          YH.delete(BH), 0 === YH.size && (XH.disconnect(), hH())
        }));
        YH.add(BH)
      }
      return () => {
        const BH = HH.currentTime;
        XH.gain.setTargetAtTime(0, BH, zH);
        for (const HH of YH) try {
          HH.stop(BH + 5 * zH)
        } catch {}
      }
    }

    function XH(HH, BH) {
      var LH;
      const SH = AH.Howler.ctx,
        hH = AH.Howler.masterGain;
      if (!SH || !hH || !rH.c.get("soundOnFromAd")) return () => {};
      const tH = AH.Howler;
      return null === (LH = tH._autoResume) || void 0 === LH || LH.call(tH), EH(SH, hH, HH, BH, rH.c.get("soundVolume"), (() => {
        var HH;
        null === (HH = tH._autoSuspend) || void 0 === HH || HH.call(tH)
      }))
    }
  },
  40091: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      closeClientGame: () => XB,
      createDefaultClientPlugins: () => EB
    });
    var AH = LH(317);

    function rH() {
      let HH;
      return {
        onCreate(BH) {
          HH = BH
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(BH, LH, rH, SH, hH, tH) {
          var zH, CH;
          if ("Iron Chest" !== HH.getMetaInfo(hH).rootName) return;
          if (!HH.hasEffect(BH, "Thief")) return;
          const EH = HH.getBlockData(LH, rH, SH);
          return HH.getPlayerDbId(BH) !== (null === EH || void 0 === EH || null === (zH = EH.persisted) || void 0 === zH || null === (CH = zH.shared) || void 0 === CH ? void 0 : CH.ownerDbId) ? (HH.sendMessage(BH, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: AH.K.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var SH = LH(4617),
      hH = LH(1182);
    const tH = 8.4,
      zH = 1e-4,
      CH = .15,
      EH = .04,
      XH = [.12, .04, .12],
      GH = 26,
      YH = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        aX: 1,
        minLifeTime: zH,
        maxLifeTime: zH,
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
        blendMode: SH.f.Standard
      },
      uH = {
        texture: "bubble",
        mipmaps: !1,
        aX: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: GH,
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
        blendMode: SH.f.Standard
      },
      QH = [0, 0, 0],
      WH = [0, 0, 0];

    function MH(HH) {
      const BH = new Map;
      let LH = null;

      function AH(HH) {
        var BH, LH;
        null === (BH = HH.bubbles) || void 0 === BH || BH.stop(), null === (LH = HH.fish) || void 0 === LH || LH.stop()
      }

      function rH(LH) {
        if (!LH.readDrawnPosition(HH, WH)) {
          for (const HH of BH.values()) {
            var AH;
            null === (AH = HH.bubbles) || void 0 === AH || AH.setEmitRate(0)
          }
          return
        }
        const rH = performance.now();
        for (const [HH, hH] of BH) {
          var SH;
          if (null === (SH = hH.bubbles) || void 0 === SH || SH.setEmitRate(0), !LH.readDrawnPosition(HH, QH)) continue;
          if (!((QH[0] - WH[0]) ** 2 + (QH[1] - WH[1]) ** 2 + (QH[2] - WH[2]) ** 2 < 900)) continue;
          const BH = Math.max(0, hH.biteAt - rH),
            AH = hH.approachDurationMs > 0 ? Math.min(1, 1 - BH / hH.approachDurationMs) : 1,
            zH = (hH.approachDurationMs - BH) / 1e3,
            MH = hH.phase + .25 * Math.sin(1.7 * zH + hH.phase),
            xH = Math.min(hH.approachDurationMs / 3e3 * 2.8, tH) * (1 - AH) * (1 + .15 * Math.sin(2.1 * zH + hH.phase)),
            vH = Math.min(1, 4 * (1 - AH)),
            PH = (.45 * Math.sin(4.1 * zH + hH.phase) + .18 * Math.sin(9.7 * zH + 2 * hH.phase)) * vH,
            TH = QH[0] + Math.cos(MH) * xH - Math.sin(MH) * PH,
            UH = Math.ceil(hH.surfaceY),
            VH = QH[2] + Math.sin(MH) * xH + Math.cos(MH) * PH,
            {
              fishAt: OH,
              bubblesAt: bH
            } = hH;
          OH[0] = bH[0] = TH, OH[1] = UH + CH, bH[1] = UH + EH, OH[2] = bH[2] = VH, hH.fish ??= LH.createParticles(YH, {
            pos: OH
          }), hH.fish.moveTo(OH), hH.fish.emit(1), hH.bubbles ??= LH.createParticles(uH, {
            pos: bH,
            half: XH
          }), hH.bubbles.moveTo(bH), hH.bubbles.setEmitRate(GH + 32 * (.5 + .5 * Math.sin(9 * zH + hH.phase)) ** 4 + 13 * AH)
        }
      }
      return {
        onCreate(HH) {
          LH = HH
        },
        onAfterRender() {
          LH && rH(LH)
        },
        onClose() {
          for (const HH of BH.values()) AH(HH);
          BH.clear(), LH = null
        },
        onReceivedMessageFromServer(HH, LH) {
          if (HH !== hH.y) return;
          const {
            hookId: rH,
            waiting: SH
          } = LH;
          if (SH) BH.has(rH) || BH.set(rH, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + SH.remainingMs,
            approachDurationMs: SH.durationMs,
            surfaceY: SH.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const HH = BH.get(rH);
            HH && AH(HH), BH.delete(rH)
          }
        }
      }
    }
    var xH = LH(5333),
      vH = LH(5319);

    function PH(HH) {
      let BH, LH = null,
        AH = null;
      const rH = () => {
        var HH;
        null === (HH = AH) || void 0 === HH || HH(), AH = null
      };
      return {
        onCreate(AH) {
          BH = AH, LH = BH.getClientOption(HH, "dialogue")
        },
        onAfterRender() {
          if (!BH) return;
          const SH = BH.getClientOption(HH, "dialogue");
          if (SH === LH) return;
          if (LH = SH, rH(), !SH || !1 === SH.animateIn) return;
          const {
            plan: hH,
            synth: tH
          } = (0, vH.d)(SH);
          tH && (AH = (0, xH.f)(tH, hH.blips))
        },
        onClose: rH
      }
    }
    var TH = LH(40100);
    const UH = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      VH = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      OH = [0, 1, 2, 0, 2, 3];

    function bH(HH, BH, LH) {
      var AH;
      let [rH, SH, hH] = BH;
      if (HH.hasPackModel("Furnace")) return null;
      const tH = ((null !== (AH = HH.getMetaInfo(LH).rot) && void 0 !== AH ? AH : 1) - 1) * Math.PI / 2,
        zH = Math.PI + tH,
        CH = Math.cos(zH),
        EH = Math.sin(zH),
        XH = [];
      for (const [uH, QH] of UH) XH.push(uH * CH, QH, -uH * EH);
      const GH = {
          positions: XH,
          indices: OH,
          uvs: VH
        },
        YH = [rH + .5 + .51 * Math.sin(tH), SH + .375, hH + .5 + .51 * Math.cos(tH)];
      return HH.createGameMesh(GH, {
        kind: "furnaceFire"
      }, YH)
    }

    function kH(HH) {
      return Math.floor(HH / 200) % 3
    }

    function mH(HH, BH, LH) {
      HH.setGameMesh(BH, {
        uvOffset: [0, LH / 3]
      })
    }
    const oH = [.12, .025, .12],
      IH = [{
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
          blendMode: SH.f.Standard,
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
          blendMode: SH.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class fH {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(HH, BH) {
        const LH = HH.getBlockId(BH[0], BH[1], BH[2]);
        if ("Furnace" !== HH.getMetaInfo(LH).rootName) return;
        const AH = performance.now();
        let rH = this.smokes.find((HH => HH.pos[0] === BH[0] && HH.pos[1] === BH[1] && HH.pos[2] === BH[2] && HH.ph === LH));
        if (rH || (rH = {
            pos: [BH[0], BH[1], BH[2]],
            ph: LH,
            endMs: AH,
            lastBurstMs: -1 / 0,
            pending: new Array(IH.length).fill(0),
            fire: bH(HH, BH, LH)
          }, this.smokes.push(rH), null !== rH.fire && (mH(HH, rH.fire, kH(AH)), this.shownFireFrame = -1)), rH.endMs = AH + 6e3, this.smokes.length > 4) {
          const BH = this.smokes.reduce(((HH, BH) => BH.endMs < HH.endMs ? BH : HH));
          lH(HH, BH), this.smokes.splice(this.smokes.indexOf(BH), 1)
        }
        AH - rH.lastBurstMs >= 300 && (rH.lastBurstMs = AH, IH.forEach(((HH, BH) => {
          rH.pending[BH] += HH.style.count
        })))
      }
      onAfterRender(HH, BH) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const LH = performance.now();
        this.smokes = this.smokes.filter((BH => {
          const [AH, rH, SH] = BH.pos, hH = LH < BH.endMs && HH.getBlockId(AH, rH, SH) === BH.ph;
          return hH || lH(HH, BH), hH
        }));
        const AH = kH(LH);
        if (AH !== this.shownFireFrame) {
          this.shownFireFrame = AH;
          for (const BH of this.smokes) null !== BH.fire && mH(HH, BH.fire, AH)
        }
        if (!HH.particlesEnabled()) {
          for (const HH of this.smokes) HH.pending.fill(0);
          return
        }
        const rH = Math.min(BH, 250) / 1e3;
        for (const SH of this.smokes) {
          const [BH, AH, hH] = SH.pos;
          if (0 !== HH.getBlockId(BH, AH + 1, hH)) {
            SH.pending.fill(0);
            continue
          }
          const tH = (SH.endMs - LH) / 6e3,
            zH = this.centre;
          zH[0] = BH + .5, zH[1] = AH + 1.275, zH[2] = hH + .5, IH.forEach(((BH, LH) => {
            SH.pending[LH] += BH.perSecond * tH * rH;
            const AH = Math.floor(SH.pending[LH]);
            AH > 0 && this.emit(HH, LH, zH, AH) && (SH.pending[LH] -= AH)
          }))
        }
      }
      dispose(HH) {
        for (const LH of this.smokes) lH(HH, LH);
        this.smokes = [];
        for (const LH of null !== (BH = this.puffers) && void 0 !== BH ? BH : []) {
          var BH;
          LH.dispose()
        }
        this.puffers = null
      }
      emit(HH, BH, LH, AH) {
        return this.puffers ??= IH.map((HH => {
          let {
            style: BH,
            perSecond: LH
          } = HH;
          const AH = (BH.count / .3 + LH) * BH.life[1];
          return new TH.d(BH, Math.ceil(4 * AH), oH)
        })), this.puffers[BH].emit(HH, LH, this.renderFrame, AH)
      }
    }

    function lH(HH, BH) {
      null !== BH.fire && (HH.disposeGameMesh(BH.fire), BH.fire = null)
    }

    function KH() {
      let HH;
      const BH = new fH;
      return {
        onCreate(BH) {
          HH = BH
        },
        onReceivedMessageFromServer(LH, AH) {
          LH === hH.z && BH.start(HH, AH)
        },
        onAfterRender(LH) {
          BH.onAfterRender(HH, LH)
        },
        onClose() {
          BH.dispose(HH)
        }
      }
    }
    var cH = LH(176),
      eH = LH(40066),
      qH = LH(40108),
      gH = LH(40117);
    class NH {
      constructor(HH, BH, LH) {
        this.api = HH, this.wearer = BH, this.name = LH, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new gH.b, this.shown = !1, this.raised = 0
      }
      update(HH) {
        var BH;
        const LH = (0, eH.h)(this.name);
        if (!LH) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === LH.model && this.madeFrom.scale === LH.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(LH.model, LH.scale), this.madeFrom = LH, !this.model)) return void this.raiseNametag(0);
        if (!(HH.drawn && !HH.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const AH = this.motion.step({
          dt: HH.dt,
          feet: HH.feet,
          heading: HH.heading,
          headTopY: HH.headTopY,
          tuning: LH,
          timeS: HH.timeS
        });
        this.model.setPose(AH.pos, AH.yaw + Math.PI), this.model.setClip(null !== (BH = AH.clip) && void 0 !== BH ? BH : null);
        const rH = AH.seated ? LH : null;
        rH !== this.perchedWith && (this.perchedWith = rH, this.model.setPerch(rH && {
          vB: this.wearer,
          offset: rH.perchOffset,
          yaw: rH.yawOffset
        })), this.setShown(!0), this.raiseNametag(LH.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(HH) {
        HH !== this.raised && (this.raised = HH, this.api.setNametagOffset(this.wearer, HH))
      }
      freeModel() {
        var HH;
        null === (HH = this.model) || void 0 === HH || HH.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(HH) {
        this.model && HH !== this.shown && (this.shown = HH, this.model.setVisible(HH))
      }
    }
    class RH {
      constructor(HH, BH) {
        this.api = HH, this.name = BH, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(HH) {
        const BH = (0, eH.d)(this.name);
        if (BH !== this.madeFrom && this.stop(), !BH) return;
        const LH = HH.ownFirstPerson ? BH.ownInFirstPerson : HH.drawn;
        if (LH) {
          const {
            centre: LH
          } = this;
          if ((0, gH.g)(LH, HH.feet, BH.offset, Math.sin(HH.heading), Math.cos(HH.heading)), this.particles) this.particles.moveTo(LH, this.half);
          else {
            const HH = (0, qH.b)(BH);
            this.half = HH.half, this.particles = this.api.createParticles(HH.opts, {
              pos: LH,
              half: HH.half
            }), this.madeFrom = BH, this.emitting = !0
          }
        }
        this.particles && LH !== this.emitting && (this.emitting = LH, this.particles.setEmitRate(LH ? BH.particles.emitRate : 0))
      }
      stop() {
        var HH;
        null === (HH = this.particles) || void 0 === HH || HH.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const jH = .25,
      nH = 48,
      FH = 4,
      DH = 24,
      wH = 12,
      ZH = .6,
      dH = 1 / cH.g.playerEyeToHeightRatio;

    function aH(HH, BH, LH) {
      const AH = HH.filter((HH => HH[BH] <= nH));
      return AH.sort(((HH, LH) => HH[BH] - LH[BH])), new Set(AH.slice(0, LH).map((HH => HH.id)))
    }

    function sH() {
      let HH;
      const BH = new Map;
      let LH = 0,
        AH = 0;
      const rH = [0, 0, 0],
        SH = {
          feet: rH,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function hH(HH) {
        var BH, LH;
        null === (BH = HH.pet) || void 0 === BH || BH.dispose(), null === (LH = HH.aura) || void 0 === LH || LH.stop()
      }

      function tH(BH, LH) {
        var AH, hH;
        const {
          id: tH
        } = BH, zH = HH.readDrawnPosition(tH, rH) ? HH.getDrawnHeading(tH) : null, CH = null === zH ? null : HH.getDrawnEyeHeight(tH);
        if (null === zH || null === CH) SH.drawn = !1, SH.ownFirstPerson = !1;
        else {
          const BH = LH.cameraPosition;
          SH.heading = zH, SH.headTopY = rH[1] + CH * dH, SH.drawn = HH.isAlive(tH) && HH.isEntityDrawn(tH), SH.ownFirstPerson = HH.isLocalPlayer(tH) && HH.isAlive(tH) && Math.hypot(BH[0] - rH[0], BH[1] - rH[1] - CH, BH[2] - rH[2]) < ZH
        }
        null === (AH = BH.pet) || void 0 === AH || AH.update(SH), null === (hH = BH.aura) || void 0 === hH || hH.update(SH)
      }
      return {
        onCreate(BH) {
          HH = BH
        },
        onAfterRender(zH, CH) {
          const EH = zH / 1e3;
          AH += EH, LH -= EH, LH <= 0 && (LH = jH, function(LH) {
            const AH = [];
            for (const hH of HH.getPlayerIds()) {
              const SH = HH.getPlayerCosmetics(hH),
                tH = void 0 !== (null === SH || void 0 === SH ? void 0 : SH.pet) && (0, eH.h)(SH.pet) ? SH.pet : null,
                zH = void 0 !== (null === SH || void 0 === SH ? void 0 : SH.aura) && (0, eH.d)(SH.aura) ? SH.aura : null;
              if (null === tH && null === zH || !HH.readDrawnPosition(hH, rH)) continue;
              const CH = Math.hypot(rH[0] - LH[0], rH[1] - LH[1], rH[2] - LH[2]),
                EH = BH.get(hH);
              AH.push({
                id: hH,
                pet: tH,
                aura: zH,
                petDist: null === tH ? 1 / 0 : CH - (null !== EH && void 0 !== EH && EH.pet ? FH : 0),
                auraDist: null === zH ? 1 / 0 : CH - (null !== EH && void 0 !== EH && EH.aura ? FH : 0)
              })
            }
            const SH = aH(AH, "petDist", DH),
              tH = HH.particlesEnabled() ? aH(AH, "auraDist", wH) : new Set,
              zH = new Set;
            for (const {
                id: rH,
                pet: hH,
                aura: QH
              }
              of AH) {
              var CH, EH, XH;
              const LH = null !== (CH = BH.get(rH)) && void 0 !== CH ? CH : {
                  id: rH,
                  pet: null,
                  aura: null
                },
                AH = SH.has(rH) ? hH : null,
                WH = tH.has(rH) ? QH : null;
              var GH, YH, uH;
              (null === (EH = LH.pet) || void 0 === EH ? void 0 : EH.name) !== AH ? (null === (GH = LH.pet) || void 0 === GH || GH.dispose(), LH.pet = null === AH ? null : new NH(HH, rH, AH)) : null === (YH = LH.pet) || void 0 === YH || YH.refreshNametag(), (null === (XH = LH.aura) || void 0 === XH ? void 0 : XH.name) !== WH && (null === (uH = LH.aura) || void 0 === uH || uH.stop(), LH.aura = null === WH ? null : new RH(HH, WH)), (LH.pet || LH.aura) && (BH.set(rH, LH), zH.add(rH))
            }
            for (const [HH, rH] of BH) zH.has(HH) || (hH(rH), BH.delete(HH))
          }(CH.cameraPosition)), SH.dt = EH, SH.timeS = AH;
          for (const HH of BH.values()) tH(HH, CH)
        },
        onClose() {
          for (const HH of BH.values()) hH(HH);
          BH.clear()
        }
      }
    }
    var JH = LH(9426);
    const iH = "skyblockLoot",
      pH = "autoPickupClick";
    var yH = LH(1689);

    function HB(HH, BH) {
      return [{
        timeFraction: 0,
        minColor: [255 * HH[0], 255 * HH[1], 255 * HH[2], 1],
        maxColor: [255 * BH[0], 255 * BH[1], 255 * BH[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const BB = [0, 0, 0],
      LB = {
        texture: "glint",
        mipmaps: !1,
        aX: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: BB,
        dir2: BB,
        blendMode: SH.f.OneOne
      },
      AB = {
        ...LB,
        colorGradients: HB([1, .88, .38], [1, .65, .15])
      },
      rB = {
        ...LB,
        colorGradients: HB([.55, .95, 1], [.9, 1, 1])
      },
      SB = [.5, .5, .5],
      hB = {
        texture: "glint",
        mipmaps: !1,
        aX: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: HB([1, .12, .12], [1, .35, .2]),
        blendMode: SH.f.OneOne
      };
    class tB {
      constructor() {
        this.drops = new Map
      }
      kX(HH, BH) {
        if ("overflowFlash" === BH.kind) {
          const [LH, AH, rH] = BH.position, SH = HH.createParticles(hB, {
            pos: [LH, AH, rH],
            half: SB
          });
          return SH.emit(18), void SH.stop()
        }
        this.drops.has(BH.itemId) || this.drops.set(BH.itemId, {
          owner: BH.owner,
          cosmetic: BH.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      IX(HH) {
        if (0 === this.drops.size) return;
        const BH = performance.now(),
          LH = HH.getCameraPosition();
        let AH = 0;
        for (const SH of this.drops.values()) null !== SH.particles && AH++;
        for (const [SH, hH] of this.drops) {
          const tH = HH.getPositionView(SH);
          if (null === tH) {
            var rH;
            if (hH.seen || BH - hH.markedAt > 5e3) null !== hH.particles && AH--, null === (rH = hH.particles) || void 0 === rH || rH.stop(), this.drops.delete(SH);
            continue
          }
          hH.cosmetic || !HH.isLocalPlayer(hH.owner) || hH.pickupDelayCleared || (HH.clearPickupDelay(SH), hH.pickupDelayCleared = !0);
          const zH = hH.lastPosition,
            CH = hH.seen && (tH[0] - zH[0]) ** 2 + (tH[1] - zH[1]) ** 2 + (tH[2] - zH[2]) ** 2 > 4e-4,
            EH = (tH[0] - LH[0]) ** 2 + (tH[1] - LH[1]) ** 2 + (tH[2] - LH[2]) ** 2 < 2025;
          hH.seen = !0, zH[0] = tH[0], zH[1] = tH[1], zH[2] = tH[2], CH && (hH.lastMovingAt = BH), null !== hH.particles && (!EH || BH - hH.lastMovingAt > 500) && (hH.particles.stop(), hH.particles = null, AH--), CH && EH && null === hH.particles && AH < 32 && (hH.particles = HH.createParticles(hH.cosmetic ? rB : AB, {
            pos: tH
          }), AH++), null !== hH.particles && (hH.particles.moveTo(tH), hH.particles.setEmitRate(CH ? 12 : 0)), !CH && null === hH.particles && BH - Math.max(hH.lastMovingAt, hH.markedAt) > 2e3 && this.drops.delete(SH)
        }
      }
      dispose() {
        for (const BH of this.drops.values()) {
          var HH;
          null === (HH = BH.particles) || void 0 === HH || HH.stop()
        }
        this.drops.clear()
      }
    }
    const zB = new Set;

    function CB() {
      let HH;
      const BH = new tB;
      return {
        onCreate(BH) {
          HH = BH
        },
        onReceivedMessageFromServer(LH, AH) {
          if (LH === iH) BH.kX(HH, AH);
          else if (LH === pH) {
            const HH = AH,
              BH = `${HH.id}|${HH.value}`;
            zB.has(BH) || (zB.add(BH), (0, yH.f)({
              id: HH.id,
              value: HH.value
            }))
          }
        },
        IX() {
          BH.IX(HH)
        },
        onClose() {
          BH.dispose()
        }
      }
    }

    function EB(HH, BH, LH, AH) {
      return {
        cosmeticCompanions: sH(),
        dialogue: PH(AH.localPlayerId),
        fishing: MH(AH.localPlayerId),
        furnaceSmoke: KH(),
        ironChest: rH(),
        localBlockBroken: (0, JH.d)(),
        magnetLoot: CB()
      }
    }

    function XB(HH, BH) {
      for (const rH of [HH, ...null !== BH && void 0 !== BH ? BH : []]) try {
        var LH;
        null === rH || void 0 === rH || null === (LH = rH.onClose) || void 0 === LH || LH.call(rH)
      } catch (AH) {
        console.error("Error in client onClose callback", AH)
      }
    }
  },
  9426: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      g: () => rH
    });
    var AH = LH(18);
    const rH = "localBlockBroken";

    function SH() {
      return {
        onPlayerChangeBlock(HH, BH, LH, SH, hH, tH) {
          "Air" === tH && AH.k.AX(rH)
        }
      }
    }
  },
  40100: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH,
      d: () => SH
    });
    const AH = 1 / .6,
      rH = {
        kind: "smokePuff"
      };
    class SH {
      constructor(HH, BH, LH) {
        this.style = HH, this.aX = BH, this.half = LH, this.particles = null, this.lastFrame = -1
      }
      emit(HH, BH, LH) {
        let SH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return LH !== this.lastFrame && (this.lastFrame = LH, this.particles || (this.particles = HH.createParticles(function(HH, BH) {
          const [
            [LH, SH, hH],
            [tH, zH, CH]
          ] = HH.colours;
          return {
            texture: HH.soft ? rH : "square_particle",
            aX: BH,
            minLifeTime: HH.life[0] / AH,
            maxLifeTime: HH.life[1] / AH,
            minEmitPower: HH.power[0] * AH,
            maxEmitPower: HH.power[1] * AH,
            minSize: HH.size[0],
            maxSize: HH.size[1],
            emitRate: 0,
            gravity: [0, HH.lift * AH * AH, 0],
            dir1: [-HH.spread, 1, -HH.spread],
            dir2: [HH.spread, 1, HH.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [LH, SH, hH, HH.alpha],
              maxColor: [tH, zH, CH, HH.alpha]
            }, {
              timeFraction: 1,
              minColor: [LH, SH, hH, 0],
              maxColor: [tH, zH, CH, 0]
            }],
            blendMode: HH.blendMode
          }
        }(this.style, this.aX), {
          pos: BH,
          half: this.half
        })), this.particles.moveTo(BH, this.half), this.particles.emit(SH), !0)
      }
      dispose() {
        var HH;
        null === (HH = this.particles) || void 0 === HH || HH.stop(), this.particles = null
      }
    }
  },
  5325: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH,
      g: () => AH,
      i: () => SH,
      k: () => zH,
      l: () => hH
    });
    const AH = ["sine", "triangle", "square", "sawtooth"],
      rH = 55,
      SH = {
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

    function hH(HH) {
      return "string" !== typeof HH ? HH : Object.hasOwn(SH, HH) ? SH[HH] : null
    }

    function tH(HH, BH, LH) {
      return Math.min(LH, Math.max(BH, HH))
    }

    function zH(HH) {
      const BH = tH(HH.durationMs, 10, 500),
        LH = tH(HH.attackMs, 0, BH),
        {
          intonation: rH
        } = HH;
      return {
        waveform: AH.includes(HH.waveform) ? HH.waveform : "sine",
        pitchHz: tH(HH.pitchHz, 20, 4e3),
        glideSemitones: tH(HH.glideSemitones, -24, 24),
        durationMs: BH,
        attackMs: LH,
        releaseMs: tH(HH.releaseMs, 0, BH - LH),
        lowpassHz: null === HH.lowpassHz ? null : tH(HH.lowpassHz, 20, 2e4),
        volume: tH(HH.volume, 0, 2),
        intonation: {
          variationSemitones: tH(rH.variationSemitones, 0, 6),
          declineSemitones: tH(rH.declineSemitones, 0, 12),
          questionRiseSemitones: tH(rH.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: tH(rH.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: tH(HH.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);