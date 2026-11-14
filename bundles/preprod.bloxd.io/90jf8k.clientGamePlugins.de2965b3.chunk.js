export const id = 24;
export const ids = [24];
export const modules = {
  3840: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => cW,
      c: () => MF
    });
    var CF = SF(3847),
      AF = SF(220);
    const uF = 120,
      hF = 260,
      bW = 1.15,
      dF = 1.2,
      PF = 2,
      RF = 1.08,
      iW = .8,
      eF = .95,
      EF = 8,
      QF = "[\"')\\]\u300d\u300f\uff09]*",
      rW = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${QF}$`),
      gW = new RegExp(`[?\uff1f]${QF}$`),
      tW = new RegExp(`[!\uff01]${QF}$`),
      TF = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      aW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      kW = new RegExp(`[${aW}]`),
      qW = new RegExp(`[${aW}]|[^${aW}]+`, "g"),
      VF = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function NF(FF) {
      let WF = 2166136261;
      for (let SF = 0; SF < FF.length; SF++) WF ^= FF.charCodeAt(SF), WF = Math.imul(WF, 16777619);
      return (WF >>> 0) / 4294967295 * 2 - 1
    }

    function DF(FF) {
      var WF;
      if (kW.test(FF)) return 1;
      const SF = FF.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        CF = SF.replace(/[^0-9]/g, "");
      if (CF.length > 0 && !/\p{L}/u.test(SF)) return Math.min(CF.length, 4);
      const AF = null !== (WF = SF.match(VF)) && void 0 !== WF ? WF : [];
      if (0 === AF.length) {
        var uF, hF;
        const FF = null !== (uF = null === (hF = SF.match(/\p{L}/gu)) || void 0 === hF ? void 0 : hF.length) && void 0 !== uF ? uF : 0;
        return 0 === FF ? 0 : Math.min(Math.max(1, Math.round(FF / 2.5)), EF)
      }
      const bW = SF.replace(/[^\p{L}]/gu, ""),
        dF = AF.length > 1 && "e" === AF.at(-1) && bW.endsWith("e") && !bW.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(FF.replace(/[^\p{L}]/gu, ""));
      return Math.min(AF.length - (dF ? 1 : 0), EF)
    }

    function LF(FF) {
      return FF.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function mW(FF) {
      const WF = FF.replace(/[^\p{L}]/gu, "");
      return WF.length >= 2 && WF === WF.toUpperCase() && WF !== WF.toLowerCase()
    }

    function OF(FF, WF) {
      var SF;
      const EF = WF && (0, CF.m)(WF),
        QF = null !== (SF = null === EF || void 0 === EF ? void 0 : EF.syllableMs) && void 0 !== SF ? SF : CF.d,
        aW = function(FF) {
          const WF = [];
          for (const CF of (0, AF.ec)(FF))
            if ("string" === typeof CF)
              for (const FF of CF.split(/(\s+)/)) {
                if ("" === FF) continue;
                if (/^\s+$/.test(FF)) {
                  WF.push({
                    kind: "space",
                    text: FF
                  });
                  continue
                }
                if (!kW.test(FF)) {
                  WF.push({
                    kind: "word",
                    text: FF,
                    delayMs: 0
                  });
                  continue
                }
                let CF = !0;
                for (const AF of null !== (SF = FF.match(qW)) && void 0 !== SF ? SF : []) {
                  var SF;
                  const FF = WF.at(-1);
                  CF || "word" !== (null === FF || void 0 === FF ? void 0 : FF.kind) || kW.test(AF) || /[\p{L}\p{N}]/u.test(AF) ? (CF || WF.push({
                    kind: "space",
                    text: "\u200b"
                  }), WF.push({
                    kind: "word",
                    text: AF,
                    delayMs: 0
                  }), CF = !1) : FF.text += AF
                }
              } else WF.push({
                kind: "icon",
                text: CF.icon,
                delayMs: 0
              });
          return WF
        }(FF),
        VF = [];
      let OF = [];
      for (const CF of aW) "space" !== CF.kind && (OF.push(CF), rW.test(CF.text) && (VF.push(OF), OF = []));
      VF.push(OF);
      const xW = [];
      let ZF = 0;
      for (const CF of VF) {
        var oF, YF;
        const FF = null !== (oF = null === (YF = CF.at(-1)) || void 0 === YF ? void 0 : YF.text) && void 0 !== oF ? oF : "",
          WF = gW.test(FF),
          SF = tW.test(FF),
          AF = CF.map((FF => "word" === FF.kind ? DF(FF.text) : 1)),
          aW = AF.findLastIndex((FF => FF > 0));
        for (const [gW, tW] of CF.entries()) {
          const FF = "word" === tW.kind,
            CF = AF[gW];
          tW.delayMs = ZF;
          for (let AF = 0; EF && AF < CF; AF++) {
            const {
              intonation: uF
            } = EF;
            let hF = aW > 0 ? -uF.declineSemitones * (gW / aW) : 0;
            hF += NF(`${LF(tW.text)}|${AF}`) * uF.variationSemitones;
            const rW = Math.min(1, uF.variationSemitones);
            let TF = EF.glideSemitones,
              kW = 1;
            SF && (hF += uF.exclaimLiftSemitones, kW *= bW), WF && gW === aW && (hF += uF.questionRiseSemitones * (CF > 1 ? .5 + .5 * AF / (CF - 1) : 1), AF === CF - 1 && (TF = Math.abs(TF) + uF.questionRiseSemitones / 2)), FF && mW(tW.text) && (hF += PF * rW, kW *= dF), CF > 1 && 0 === AF && (hF += iW * rW, kW *= RF), xW.push({
              atMs: ZF + AF * QF,
              semitones: hF,
              glideSemitones: TF,
              durationMs: AF < CF - 1 ? Math.min(EF.durationMs, QF * eF) : EF.durationMs,
              level: kW
            })
          }
          ZF += CF * QF + (rW.test(tW.text) ? hF : TF.test(tW.text) ? uF : 0)
        }
      }
      return {
        pieces: aW.map((FF => "space" === FF.kind ? FF : "icon" === FF.kind ? {
          kind: "icon",
          icon: FF.text,
          delayMs: FF.delayMs
        } : {
          kind: "word",
          text: FF.text,
          delayMs: FF.delayMs
        })),
        blips: xW
      }
    }
    var xW = SF(1046),
      ZF = SF(1115),
      oF = SF(1580);

    function YF(FF) {
      if ("string" === typeof FF) return FF;
      const WF = ZF.h.get().getCurrentLanguageCode();
      return (0, xW.o)(WF, FF.translationKey, (0, xW.n)(FF.params, oF.b.shown))
    }

    function MF(FF) {
      const WF = void 0 === FF.voice ? null : (0, CF.n)(FF.voice),
        SF = WF && (0, CF.m)(WF);
      return {
        plan: OF(YF(FF.line), SF),
        synth: SF
      }
    }

    function cW(FF) {
      const WF = [];
      let SF = [];
      for (const [AF, uF] of FF.entries()) {
        var CF;
        "space" === uF.kind && (" " !== uF.text || "icon" !== (null === (CF = FF[AF + 1]) || void 0 === CF ? void 0 : CF.kind)) ? (SF.length > 0 && WF.push(SF), WF.push([uF]), SF = []) : SF.push(uF)
      }
      return SF.length > 0 && WF.push(SF), WF
    }
  },
  3851: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF,
      c: () => iW
    });
    var CF = SF(3855),
      AF = SF(11);
    const uF = .25,
      hF = .85,
      bW = .02,
      dF = .01;

    function PF(FF, WF, SF, CF, AF, uF, bW) {
      const {
        waveform: dF,
        pitchHz: PF,
        attackMs: RF,
        releaseMs: iW,
        lowpassHz: eF
      } = SF, EF = AF + CF.durationMs / 1e3, QF = PF * 2 ** (CF.semitones / 12), rW = FF.createOscillator();
      rW.type = dF, rW.frequency.setValueAtTime(QF, AF), rW.frequency.exponentialRampToValueAtTime(QF * 2 ** (CF.glideSemitones / 12), EF);
      const gW = AF + Math.min(RF, CF.durationMs) / 1e3,
        tW = FF.createGain();
      tW.gain.setValueAtTime(0, AF), tW.gain.linearRampToValueAtTime(uF, gW), tW.gain.linearRampToValueAtTime(uF * hF, Math.max(gW, EF - iW / 1e3)), tW.gain.linearRampToValueAtTime(0, EF);
      const TF = [rW];
      if (null !== eF) {
        const WF = FF.createBiquadFilter();
        WF.type = "lowpass", WF.frequency.value = eF, TF.push(WF)
      }
      TF.push(tW, WF);
      for (let hF = 1; hF < TF.length; hF++) TF[hF - 1].connect(TF[hF]);
      return rW.onended = () => {
        for (const FF of TF.slice(0, -1)) FF.disconnect();
        bW()
      }, rW.start(AF), rW.stop(EF), rW
    }

    function RF(FF, WF, SF, CF, AF, hF) {
      if (0 === CF.length) return hF(), () => {};
      const RF = uF * SF.volume * AF,
        iW = FF.createGain();
      iW.connect(WF);
      const eF = FF.currentTime + bW,
        EF = new Set;
      for (const uF of CF) {
        const WF = PF(FF, iW, SF, uF, eF + uF.atMs / 1e3, RF * uF.level, (() => {
          EF.delete(WF), 0 === EF.size && (iW.disconnect(), hF())
        }));
        EF.add(WF)
      }
      return () => {
        const WF = FF.currentTime;
        iW.gain.setTargetAtTime(0, WF, dF);
        for (const FF of EF) try {
          FF.stop(WF + 5 * dF)
        } catch {}
      }
    }

    function iW(FF, WF) {
      var SF;
      const uF = CF.c.ctx,
        hF = CF.c.masterGain;
      if (!uF || !hF || !AF.b.get("soundOnFromAd")) return () => {};
      const bW = CF.c;
      return null === (SF = bW._autoResume) || void 0 === SF || SF.call(bW), RF(uF, hF, FF, WF, AF.b.get("soundVolume"), (() => {
        var FF;
        null === (FF = bW._autoSuspend) || void 0 === FF || FF.call(bW)
      }))
    }
  },
  37488: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      closeClientGame: () => IF,
      createDefaultClientPlugins: () => zW
    });
    var CF = SF(271);

    function AF() {
      let FF;
      return {
        onCreate(WF) {
          FF = WF
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(WF, SF, AF, uF, hF, bW) {
          var dF, PF;
          if ("Iron Chest" !== FF.getMetaInfo(hF).rootName) return;
          if (!FF.hasEffect(WF, "Thief")) return;
          const RF = FF.getBlockData(SF, AF, uF);
          return FF.getPlayerDbId(WF) !== (null === RF || void 0 === RF || null === (dF = RF.persisted) || void 0 === dF || null === (PF = dF.shared) || void 0 === PF ? void 0 : PF.ownerDbId) ? (FF.sendMessage(WF, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: CF.D.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var uF = SF(3434),
      hF = SF(1101);
    const bW = 8.4,
      dF = 1e-4,
      PF = .15,
      RF = .04,
      iW = [.12, .04, .12],
      eF = 26,
      EF = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        ZF: 1,
        minLifeTime: dF,
        maxLifeTime: dF,
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
        blendMode: uF.f.Standard
      },
      QF = {
        texture: "bubble",
        mipmaps: !1,
        ZF: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: eF,
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
        blendMode: uF.f.Standard
      },
      rW = [0, 0, 0],
      gW = [0, 0, 0];

    function tW(FF) {
      const WF = new Map;
      let SF = null;

      function CF(FF) {
        var WF, SF;
        null === (WF = FF.bubbles) || void 0 === WF || WF.stop(), null === (SF = FF.fish) || void 0 === SF || SF.stop()
      }

      function AF(SF) {
        if (!SF.readDrawnPosition(FF, gW)) {
          for (const FF of WF.values()) {
            var CF;
            null === (CF = FF.bubbles) || void 0 === CF || CF.setEmitRate(0)
          }
          return
        }
        const AF = performance.now();
        for (const [FF, hF] of WF) {
          var uF;
          if (null === (uF = hF.bubbles) || void 0 === uF || uF.setEmitRate(0), !SF.readDrawnPosition(FF, rW)) continue;
          if (!((rW[0] - gW[0]) ** 2 + (rW[1] - gW[1]) ** 2 + (rW[2] - gW[2]) ** 2 < 900)) continue;
          const WF = Math.max(0, hF.biteAt - AF),
            CF = hF.approachDurationMs > 0 ? Math.min(1, 1 - WF / hF.approachDurationMs) : 1,
            dF = (hF.approachDurationMs - WF) / 1e3,
            tW = hF.phase + .25 * Math.sin(1.7 * dF + hF.phase),
            TF = Math.min(hF.approachDurationMs / 3e3 * 2.8, bW) * (1 - CF) * (1 + .15 * Math.sin(2.1 * dF + hF.phase)),
            aW = Math.min(1, 4 * (1 - CF)),
            kW = (.45 * Math.sin(4.1 * dF + hF.phase) + .18 * Math.sin(9.7 * dF + 2 * hF.phase)) * aW,
            qW = rW[0] + Math.cos(tW) * TF - Math.sin(tW) * kW,
            VF = Math.ceil(hF.surfaceY),
            NF = rW[2] + Math.sin(tW) * TF + Math.cos(tW) * kW,
            {
              fishAt: DF,
              bubblesAt: LF
            } = hF;
          DF[0] = LF[0] = qW, DF[1] = VF + PF, LF[1] = VF + RF, DF[2] = LF[2] = NF, hF.fish ??= SF.createParticles(EF, {
            pos: DF
          }), hF.fish.moveTo(DF), hF.fish.emit(1), hF.bubbles ??= SF.createParticles(QF, {
            pos: LF,
            half: iW
          }), hF.bubbles.moveTo(LF), hF.bubbles.setEmitRate(eF + 32 * (.5 + .5 * Math.sin(9 * dF + hF.phase)) ** 4 + 13 * CF)
        }
      }
      return {
        onCreate(FF) {
          SF = FF
        },
        onAfterRender() {
          SF && AF(SF)
        },
        onClose() {
          for (const FF of WF.values()) CF(FF);
          WF.clear(), SF = null
        },
        onReceivedMessageFromServer(FF, SF) {
          if (FF !== hF.A) return;
          const {
            hookId: AF,
            waiting: uF
          } = SF;
          if (uF) WF.has(AF) || WF.set(AF, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + uF.remainingMs,
            approachDurationMs: uF.durationMs,
            surfaceY: uF.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const FF = WF.get(AF);
            FF && CF(FF), WF.delete(AF)
          }
        }
      }
    }
    var TF = SF(3851),
      aW = SF(3840);

    function kW(FF) {
      let WF, SF = null,
        CF = null;
      const AF = () => {
        var FF;
        null === (FF = CF) || void 0 === FF || FF(), CF = null
      };
      return {
        onCreate(CF) {
          WF = CF, SF = WF.getClientOption(FF, "dialogue")
        },
        onAfterRender() {
          if (!WF) return;
          const uF = WF.getClientOption(FF, "dialogue");
          if (uF === SF) return;
          if (SF = uF, AF(), !uF || !1 === uF.animateIn) return;
          const {
            plan: hF,
            synth: bW
          } = (0, aW.c)(uF);
          bW && (CF = (0, TF.c)(bW, hF.blips))
        },
        onClose: AF
      }
    }
    const qW = 1 / .6,
      VF = {
        kind: "smokePuff"
      };
    class NF {
      constructor(FF, WF, SF) {
        this.style = FF, this.ZF = WF, this.half = SF, this.particles = null, this.lastFrame = -1
      }
      emit(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return SF !== this.lastFrame && (this.lastFrame = SF, this.particles || (this.particles = FF.createParticles(function(FF, WF) {
          const [
            [SF, CF, AF],
            [uF, hF, bW]
          ] = FF.colours;
          return {
            texture: FF.soft ? VF : "square_particle",
            ZF: WF,
            minLifeTime: FF.life[0] / qW,
            maxLifeTime: FF.life[1] / qW,
            minEmitPower: FF.power[0] * qW,
            maxEmitPower: FF.power[1] * qW,
            minSize: FF.size[0],
            maxSize: FF.size[1],
            emitRate: 0,
            gravity: [0, FF.lift * qW * qW, 0],
            dir1: [-FF.spread, 1, -FF.spread],
            dir2: [FF.spread, 1, FF.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [SF, CF, AF, FF.alpha],
              maxColor: [uF, hF, bW, FF.alpha]
            }, {
              timeFraction: 1,
              minColor: [SF, CF, AF, 0],
              maxColor: [uF, hF, bW, 0]
            }],
            blendMode: FF.blendMode
          }
        }(this.style, this.ZF), {
          pos: WF,
          half: this.half
        })), this.particles.moveTo(WF, this.half), this.particles.emit(CF), !0)
      }
      dispose() {
        var FF;
        null === (FF = this.particles) || void 0 === FF || FF.stop(), this.particles = null
      }
    }
    const DF = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      LF = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      mW = [0, 1, 2, 0, 2, 3];

    function OF(FF, WF, SF) {
      var CF;
      let [AF, uF, hF] = WF;
      if (FF.hasPackModel("Furnace")) return null;
      const bW = ((null !== (CF = FF.getMetaInfo(SF).rot) && void 0 !== CF ? CF : 1) - 1) * Math.PI / 2,
        dF = Math.PI + bW,
        PF = Math.cos(dF),
        RF = Math.sin(dF),
        iW = [];
      for (const [QF, rW] of DF) iW.push(QF * PF, rW, -QF * RF);
      const eF = {
          positions: iW,
          indices: mW,
          uvs: LF
        },
        EF = [AF + .5 + .51 * Math.sin(bW), uF + .375, hF + .5 + .51 * Math.cos(bW)];
      return FF.createGameMesh(eF, {
        kind: "furnaceFire"
      }, EF)
    }

    function xW(FF) {
      return Math.floor(FF / 200) % 3
    }

    function ZF(FF, WF, SF) {
      FF.setGameMesh(WF, {
        uvOffset: [0, SF / 3]
      })
    }
    const oF = [.12, .025, .12],
      YF = [{
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
          blendMode: uF.f.Standard,
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
          blendMode: uF.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class MF {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(FF, WF) {
        const SF = FF.getBlockId(WF[0], WF[1], WF[2]);
        if ("Furnace" !== FF.getMetaInfo(SF).rootName) return;
        const CF = performance.now();
        let AF = this.smokes.find((FF => FF.pos[0] === WF[0] && FF.pos[1] === WF[1] && FF.pos[2] === WF[2] && FF.ah === SF));
        if (AF || (AF = {
            pos: [WF[0], WF[1], WF[2]],
            ah: SF,
            endMs: CF,
            lastBurstMs: -1 / 0,
            pending: new Array(YF.length).fill(0),
            fire: OF(FF, WF, SF)
          }, this.smokes.push(AF), null !== AF.fire && (ZF(FF, AF.fire, xW(CF)), this.shownFireFrame = -1)), AF.endMs = CF + 6e3, this.smokes.length > 4) {
          const WF = this.smokes.reduce(((FF, WF) => WF.endMs < FF.endMs ? WF : FF));
          cW(FF, WF), this.smokes.splice(this.smokes.indexOf(WF), 1)
        }
        CF - AF.lastBurstMs >= 300 && (AF.lastBurstMs = CF, YF.forEach(((FF, WF) => {
          AF.pending[WF] += FF.style.count
        })))
      }
      onAfterRender(FF, WF) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const SF = performance.now();
        this.smokes = this.smokes.filter((WF => {
          const [CF, AF, uF] = WF.pos, hF = SF < WF.endMs && FF.getBlockId(CF, AF, uF) === WF.ah;
          return hF || cW(FF, WF), hF
        }));
        const CF = xW(SF);
        if (CF !== this.shownFireFrame) {
          this.shownFireFrame = CF;
          for (const WF of this.smokes) null !== WF.fire && ZF(FF, WF.fire, CF)
        }
        if (!FF.particlesEnabled()) {
          for (const FF of this.smokes) FF.pending.fill(0);
          return
        }
        const AF = Math.min(WF, 250) / 1e3;
        for (const uF of this.smokes) {
          const [WF, CF, hF] = uF.pos;
          if (0 !== FF.getBlockId(WF, CF + 1, hF)) {
            uF.pending.fill(0);
            continue
          }
          const bW = (uF.endMs - SF) / 6e3,
            dF = this.centre;
          dF[0] = WF + .5, dF[1] = CF + 1.275, dF[2] = hF + .5, YF.forEach(((WF, SF) => {
            uF.pending[SF] += WF.perSecond * bW * AF;
            const CF = Math.floor(uF.pending[SF]);
            CF > 0 && this.emit(FF, SF, dF, CF) && (uF.pending[SF] -= CF)
          }))
        }
      }
      dispose(FF) {
        for (const SF of this.smokes) cW(FF, SF);
        this.smokes = [];
        for (const SF of null !== (WF = this.puffers) && void 0 !== WF ? WF : []) {
          var WF;
          SF.dispose()
        }
        this.puffers = null
      }
      emit(FF, WF, SF, CF) {
        return this.puffers ??= YF.map((FF => {
          let {
            style: WF,
            perSecond: SF
          } = FF;
          const CF = (WF.count / .3 + SF) * WF.life[1];
          return new NF(WF, Math.ceil(4 * CF), oF)
        })), this.puffers[WF].emit(FF, SF, this.renderFrame, CF)
      }
    }

    function cW(FF, WF) {
      null !== WF.fire && (FF.disposeGameMesh(WF.fire), WF.fire = null)
    }

    function GF() {
      let FF;
      const WF = new MF;
      return {
        onCreate(WF) {
          FF = WF
        },
        onReceivedMessageFromServer(SF, CF) {
          SF === hF.E && WF.start(FF, CF)
        },
        onAfterRender(SF) {
          WF.onAfterRender(FF, SF)
        },
        onClose() {
          WF.dispose(FF)
        }
      }
    }

    function zW(FF, WF, SF, CF) {
      return {
        dialogue: kW(CF.localPlayerId),
        fishing: tW(CF.localPlayerId),
        furnaceSmoke: GF(),
        ironChest: AF()
      }
    }

    function IF(FF, WF) {
      for (const AF of [FF, ...null !== WF && void 0 !== WF ? WF : []]) try {
        var SF;
        null === AF || void 0 === AF || null === (SF = AF.onClose) || void 0 === SF || SF.call(AF)
      } catch (CF) {
        console.error("Error in client onClose callback", CF)
      }
    }
  },
  3847: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      g: () => CF,
      j: () => uF,
      m: () => dF,
      n: () => hF
    });
    const CF = ["sine", "triangle", "square", "sawtooth"],
      AF = 55,
      uF = {
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

    function hF(FF) {
      return "string" !== typeof FF ? FF : Object.hasOwn(uF, FF) ? uF[FF] : null
    }

    function bW(FF, WF, SF) {
      return Math.min(SF, Math.max(WF, FF))
    }

    function dF(FF) {
      const WF = bW(FF.durationMs, 10, 500),
        SF = bW(FF.attackMs, 0, WF),
        {
          intonation: AF
        } = FF;
      return {
        waveform: CF.includes(FF.waveform) ? FF.waveform : "sine",
        pitchHz: bW(FF.pitchHz, 20, 4e3),
        glideSemitones: bW(FF.glideSemitones, -24, 24),
        durationMs: WF,
        attackMs: SF,
        releaseMs: bW(FF.releaseMs, 0, WF - SF),
        lowpassHz: null === FF.lowpassHz ? null : bW(FF.lowpassHz, 20, 2e4),
        volume: bW(FF.volume, 0, 2),
        intonation: {
          variationSemitones: bW(AF.variationSemitones, 0, 6),
          declineSemitones: bW(AF.declineSemitones, 0, 12),
          questionRiseSemitones: bW(AF.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bW(AF.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bW(FF.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);