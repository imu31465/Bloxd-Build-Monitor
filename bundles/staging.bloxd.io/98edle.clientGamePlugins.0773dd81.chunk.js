export const id = 24;
export const ids = [24];
export const modules = {
  3813: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => pW,
      g: () => dW
    });
    var wW = MW(3820),
      CW = MW(232);
    const zR = 120,
      AW = 260,
      bR = 1.15,
      yR = 1.2,
      NW = 2,
      eW = 1.08,
      BW = .8,
      tR = .95,
      TW = 8,
      gR = "[\"')\\]\u300d\u300f\uff09]*",
      iR = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gR}$`),
      YW = new RegExp(`[?\uff1f]${gR}$`),
      JW = new RegExp(`[!\uff01]${gR}$`),
      PW = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      IW = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      oW = new RegExp(`[${IW}]`),
      lW = new RegExp(`[${IW}]|[^${IW}]+`, "g"),
      FW = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fW(WW) {
      let RW = 2166136261;
      for (let MW = 0; MW < WW.length; MW++) RW ^= WW.charCodeAt(MW), RW = Math.imul(RW, 16777619);
      return (RW >>> 0) / 4294967295 * 2 - 1
    }

    function QW(WW) {
      var RW;
      if (oW.test(WW)) return 1;
      const MW = WW.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wW = MW.replace(/[^0-9]/g, "");
      if (wW.length > 0 && !/\p{L}/u.test(MW)) return Math.min(wW.length, 4);
      const CW = null !== (RW = MW.match(FW)) && void 0 !== RW ? RW : [];
      if (0 === CW.length) {
        var zR, AW;
        const WW = null !== (zR = null === (AW = MW.match(/\p{L}/gu)) || void 0 === AW ? void 0 : AW.length) && void 0 !== zR ? zR : 0;
        return 0 === WW ? 0 : Math.min(Math.max(1, Math.round(WW / 2.5)), TW)
      }
      const bR = MW.replace(/[^\p{L}]/gu, ""),
        yR = CW.length > 1 && "e" === CW.at(-1) && bR.endsWith("e") && !bR.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(WW.replace(/[^\p{L}]/gu, ""));
      return Math.min(CW.length - (yR ? 1 : 0), TW)
    }

    function rR(WW) {
      return WW.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function cR(WW) {
      const RW = WW.replace(/[^\p{L}]/gu, "");
      return RW.length >= 2 && RW === RW.toUpperCase() && RW !== RW.toLowerCase()
    }

    function XW(WW, RW) {
      var MW;
      const TW = RW && (0, wW.m)(RW),
        gR = null !== (MW = null === TW || void 0 === TW ? void 0 : TW.syllableMs) && void 0 !== MW ? MW : wW.d,
        IW = function(WW) {
          const RW = [];
          for (const wW of (0, CW.Vb)(WW))
            if ("string" === typeof wW)
              for (const WW of wW.split(/(\s+)/)) {
                if ("" === WW) continue;
                if (/^\s+$/.test(WW)) {
                  RW.push({
                    kind: "space",
                    text: WW
                  });
                  continue
                }
                if (!oW.test(WW)) {
                  RW.push({
                    kind: "word",
                    text: WW,
                    delayMs: 0
                  });
                  continue
                }
                let wW = !0;
                for (const CW of null !== (MW = WW.match(lW)) && void 0 !== MW ? MW : []) {
                  var MW;
                  const WW = RW.at(-1);
                  wW || "word" !== (null === WW || void 0 === WW ? void 0 : WW.kind) || oW.test(CW) || /[\p{L}\p{N}]/u.test(CW) ? (wW || RW.push({
                    kind: "space",
                    text: "\u200b"
                  }), RW.push({
                    kind: "word",
                    text: CW,
                    delayMs: 0
                  }), wW = !1) : WW.text += CW
                }
              } else RW.push({
                kind: "icon",
                text: wW.icon,
                delayMs: 0
              });
          return RW
        }(WW),
        FW = [];
      let XW = [];
      for (const wW of IW) "space" !== wW.kind && (XW.push(wW), iR.test(wW.text) && (FW.push(XW), XW = []));
      FW.push(XW);
      const jR = [];
      let kR = 0;
      for (const wW of FW) {
        var aR, sW;
        const WW = null !== (aR = null === (sW = wW.at(-1)) || void 0 === sW ? void 0 : sW.text) && void 0 !== aR ? aR : "",
          RW = YW.test(WW),
          MW = JW.test(WW),
          CW = wW.map((WW => "word" === WW.kind ? QW(WW.text) : 1)),
          IW = CW.findLastIndex((WW => WW > 0));
        for (const [YW, JW] of wW.entries()) {
          const WW = "word" === JW.kind,
            wW = CW[YW];
          JW.delayMs = kR;
          for (let CW = 0; TW && CW < wW; CW++) {
            const {
              intonation: zR
            } = TW;
            let AW = IW > 0 ? -zR.declineSemitones * (YW / IW) : 0;
            AW += fW(`${rR(JW.text)}|${CW}`) * zR.variationSemitones;
            const iR = Math.min(1, zR.variationSemitones);
            let PW = TW.glideSemitones,
              oW = 1;
            MW && (AW += zR.exclaimLiftSemitones, oW *= bR), RW && YW === IW && (AW += zR.questionRiseSemitones * (wW > 1 ? .5 + .5 * CW / (wW - 1) : 1), CW === wW - 1 && (PW = Math.abs(PW) + zR.questionRiseSemitones / 2)), WW && cR(JW.text) && (AW += NW * iR, oW *= yR), wW > 1 && 0 === CW && (AW += BW * iR, oW *= eW), jR.push({
              atMs: kR + CW * gR,
              semitones: AW,
              glideSemitones: PW,
              durationMs: CW < wW - 1 ? Math.min(TW.durationMs, gR * tR) : TW.durationMs,
              level: oW
            })
          }
          kR += wW * gR + (iR.test(JW.text) ? AW : PW.test(JW.text) ? zR : 0)
        }
      }
      return {
        pieces: IW.map((WW => "space" === WW.kind ? WW : "icon" === WW.kind ? {
          kind: "icon",
          icon: WW.text,
          delayMs: WW.delayMs
        } : {
          kind: "word",
          text: WW.text,
          delayMs: WW.delayMs
        })),
        blips: jR
      }
    }
    var jR = MW(1027),
      kR = MW(1080),
      aR = MW(1548);

    function sW(WW) {
      if ("string" === typeof WW) return WW;
      const RW = kR.d.get().getCurrentLanguageCode();
      return (0, jR.s)(RW, WW.translationKey, (0, jR.p)(WW.params, aR.d.shown))
    }

    function dW(WW) {
      const RW = void 0 === WW.voice ? null : (0, wW.o)(WW.voice),
        MW = RW && (0, wW.m)(RW);
      return {
        plan: XW(sW(WW.line), MW),
        synth: MW
      }
    }

    function pW(WW) {
      const RW = [];
      let MW = [];
      for (const [CW, zR] of WW.entries()) {
        var wW;
        "space" === zR.kind && (" " !== zR.text || "icon" !== (null === (wW = WW[CW + 1]) || void 0 === wW ? void 0 : wW.kind)) ? (MW.length > 0 && RW.push(MW), RW.push([zR]), MW = []) : MW.push(zR)
      }
      return MW.length > 0 && RW.push(MW), RW
    }
  },
  3828: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW,
      g: () => BW
    });
    var wW = MW(3835),
      CW = MW(27);
    const zR = .25,
      AW = .85,
      bR = .02,
      yR = .01;

    function NW(WW, RW, MW, wW, CW, zR, bR) {
      const {
        waveform: yR,
        pitchHz: NW,
        attackMs: eW,
        releaseMs: BW,
        lowpassHz: tR
      } = MW, TW = CW + wW.durationMs / 1e3, gR = NW * 2 ** (wW.semitones / 12), iR = WW.createOscillator();
      iR.type = yR, iR.frequency.setValueAtTime(gR, CW), iR.frequency.exponentialRampToValueAtTime(gR * 2 ** (wW.glideSemitones / 12), TW);
      const YW = CW + Math.min(eW, wW.durationMs) / 1e3,
        JW = WW.createGain();
      JW.gain.setValueAtTime(0, CW), JW.gain.linearRampToValueAtTime(zR, YW), JW.gain.linearRampToValueAtTime(zR * AW, Math.max(YW, TW - BW / 1e3)), JW.gain.linearRampToValueAtTime(0, TW);
      const PW = [iR];
      if (null !== tR) {
        const RW = WW.createBiquadFilter();
        RW.type = "lowpass", RW.frequency.value = tR, PW.push(RW)
      }
      PW.push(JW, RW);
      for (let AW = 1; AW < PW.length; AW++) PW[AW - 1].connect(PW[AW]);
      return iR.onended = () => {
        for (const WW of PW.slice(0, -1)) WW.disconnect();
        bR()
      }, iR.start(CW), iR.stop(TW), iR
    }

    function eW(WW, RW, MW, wW, CW, AW) {
      if (0 === wW.length) return AW(), () => {};
      const eW = zR * MW.volume * CW,
        BW = WW.createGain();
      BW.connect(RW);
      const tR = WW.currentTime + bR,
        TW = new Set;
      for (const zR of wW) {
        const RW = NW(WW, BW, MW, zR, tR + zR.atMs / 1e3, eW * zR.level, (() => {
          TW.delete(RW), 0 === TW.size && (BW.disconnect(), AW())
        }));
        TW.add(RW)
      }
      return () => {
        const RW = WW.currentTime;
        BW.gain.setTargetAtTime(0, RW, yR);
        for (const WW of TW) try {
          WW.stop(RW + 5 * yR)
        } catch {}
      }
    }

    function BW(WW, RW) {
      var MW;
      const zR = wW.d.ctx,
        AW = wW.d.masterGain;
      if (!zR || !AW || !CW.b.get("soundOnFromAd")) return () => {};
      const bR = wW.d;
      return null === (MW = bR._autoResume) || void 0 === MW || MW.call(bR), eW(zR, AW, WW, RW, CW.b.get("soundVolume"), (() => {
        var WW;
        null === (WW = bR._autoSuspend) || void 0 === WW || WW.call(bR)
      }))
    }
  },
  37125: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      closeClientGame: () => EW,
      createDefaultClientPlugins: () => UW
    });
    var wW = MW(284);

    function CW() {
      let WW;
      return {
        onCreate(RW) {
          WW = RW
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(RW, MW, CW, zR, AW, bR) {
          var yR, NW;
          if ("Iron Chest" !== WW.getMetaInfo(AW).rootName) return;
          if (!WW.hasEffect(RW, "Thief")) return;
          const eW = WW.getBlockData(MW, CW, zR);
          return WW.getPlayerDbId(RW) !== (null === eW || void 0 === eW || null === (yR = eW.persisted) || void 0 === yR || null === (NW = yR.shared) || void 0 === NW ? void 0 : NW.ownerDbId) ? (WW.sendMessage(RW, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: wW.G.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var zR = MW(3357),
      AW = MW(1066);
    const bR = 8.4,
      yR = 1e-4,
      NW = .15,
      eW = .04,
      BW = [.12, .04, .12],
      tR = 26,
      TW = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        aR: 1,
        minLifeTime: yR,
        maxLifeTime: yR,
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
        blendMode: zR.f.Standard
      },
      gR = {
        texture: "bubble",
        mipmaps: !1,
        aR: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: tR,
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
        blendMode: zR.f.Standard
      },
      iR = [0, 0, 0],
      YW = [0, 0, 0];

    function JW(WW) {
      const RW = new Map;
      let MW = null;

      function wW(WW) {
        var RW, MW;
        null === (RW = WW.bubbles) || void 0 === RW || RW.stop(), null === (MW = WW.fish) || void 0 === MW || MW.stop()
      }

      function CW(MW) {
        if (!MW.readDrawnPosition(WW, YW)) {
          for (const WW of RW.values()) {
            var wW;
            null === (wW = WW.bubbles) || void 0 === wW || wW.setEmitRate(0)
          }
          return
        }
        const CW = performance.now();
        for (const [WW, AW] of RW) {
          var zR;
          if (null === (zR = AW.bubbles) || void 0 === zR || zR.setEmitRate(0), !MW.readDrawnPosition(WW, iR)) continue;
          if (!((iR[0] - YW[0]) ** 2 + (iR[1] - YW[1]) ** 2 + (iR[2] - YW[2]) ** 2 < 900)) continue;
          const RW = Math.max(0, AW.biteAt - CW),
            wW = AW.approachDurationMs > 0 ? Math.min(1, 1 - RW / AW.approachDurationMs) : 1,
            yR = (AW.approachDurationMs - RW) / 1e3,
            JW = AW.phase + .25 * Math.sin(1.7 * yR + AW.phase),
            PW = Math.min(AW.approachDurationMs / 3e3 * 2.8, bR) * (1 - wW) * (1 + .15 * Math.sin(2.1 * yR + AW.phase)),
            IW = Math.min(1, 4 * (1 - wW)),
            oW = (.45 * Math.sin(4.1 * yR + AW.phase) + .18 * Math.sin(9.7 * yR + 2 * AW.phase)) * IW,
            lW = iR[0] + Math.cos(JW) * PW - Math.sin(JW) * oW,
            FW = Math.ceil(AW.surfaceY),
            fW = iR[2] + Math.sin(JW) * PW + Math.cos(JW) * oW,
            {
              fishAt: QW,
              bubblesAt: rR
            } = AW;
          QW[0] = rR[0] = lW, QW[1] = FW + NW, rR[1] = FW + eW, QW[2] = rR[2] = fW, AW.fish ??= MW.createParticles(TW, {
            pos: QW
          }), AW.fish.moveTo(QW), AW.fish.emit(1), AW.bubbles ??= MW.createParticles(gR, {
            pos: rR,
            half: BW
          }), AW.bubbles.moveTo(rR), AW.bubbles.setEmitRate(tR + 32 * (.5 + .5 * Math.sin(9 * yR + AW.phase)) ** 4 + 13 * wW)
        }
      }
      return {
        onCreate(WW) {
          MW = WW
        },
        onAfterRender() {
          MW && CW(MW)
        },
        onClose() {
          for (const WW of RW.values()) wW(WW);
          RW.clear(), MW = null
        },
        onReceivedMessageFromServer(WW, MW) {
          if (WW !== AW.D) return;
          const {
            hookId: CW,
            waiting: zR
          } = MW;
          if (zR) RW.has(CW) || RW.set(CW, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + zR.remainingMs,
            approachDurationMs: zR.durationMs,
            surfaceY: zR.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const WW = RW.get(CW);
            WW && wW(WW), RW.delete(CW)
          }
        }
      }
    }
    var PW = MW(3828),
      IW = MW(3813);

    function oW(WW) {
      let RW, MW = null,
        wW = null;
      const CW = () => {
        var WW;
        null === (WW = wW) || void 0 === WW || WW(), wW = null
      };
      return {
        onCreate(wW) {
          RW = wW, MW = RW.getClientOption(WW, "dialogue")
        },
        onAfterRender() {
          if (!RW) return;
          const zR = RW.getClientOption(WW, "dialogue");
          if (zR === MW) return;
          if (MW = zR, CW(), !zR || !1 === zR.animateIn) return;
          const {
            plan: AW,
            synth: bR
          } = (0, IW.g)(zR);
          bR && (wW = (0, PW.g)(bR, AW.blips))
        },
        onClose: CW
      }
    }
    const lW = 1 / .6,
      FW = {
        kind: "smokePuff"
      };
    class fW {
      constructor(WW, RW, MW) {
        this.style = WW, this.aR = RW, this.half = MW, this.particles = null, this.lastFrame = -1
      }
      emit(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return MW !== this.lastFrame && (this.lastFrame = MW, this.particles || (this.particles = WW.createParticles(function(WW, RW) {
          const [
            [MW, wW, CW],
            [zR, AW, bR]
          ] = WW.colours;
          return {
            texture: WW.soft ? FW : "square_particle",
            aR: RW,
            minLifeTime: WW.life[0] / lW,
            maxLifeTime: WW.life[1] / lW,
            minEmitPower: WW.power[0] * lW,
            maxEmitPower: WW.power[1] * lW,
            minSize: WW.size[0],
            maxSize: WW.size[1],
            emitRate: 0,
            gravity: [0, WW.lift * lW * lW, 0],
            dir1: [-WW.spread, 1, -WW.spread],
            dir2: [WW.spread, 1, WW.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [MW, wW, CW, WW.alpha],
              maxColor: [zR, AW, bR, WW.alpha]
            }, {
              timeFraction: 1,
              minColor: [MW, wW, CW, 0],
              maxColor: [zR, AW, bR, 0]
            }],
            blendMode: WW.blendMode
          }
        }(this.style, this.aR), {
          pos: RW,
          half: this.half
        })), this.particles.moveTo(RW, this.half), this.particles.emit(wW), !0)
      }
      dispose() {
        var WW;
        null === (WW = this.particles) || void 0 === WW || WW.stop(), this.particles = null
      }
    }
    const QW = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      rR = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      cR = [0, 1, 2, 0, 2, 3];

    function XW(WW, RW, MW) {
      var wW;
      let [CW, zR, AW] = RW;
      if (WW.hasPackModel("Furnace")) return null;
      const bR = ((null !== (wW = WW.getMetaInfo(MW).rot) && void 0 !== wW ? wW : 1) - 1) * Math.PI / 2,
        yR = Math.PI + bR,
        NW = Math.cos(yR),
        eW = Math.sin(yR),
        BW = [];
      for (const [gR, iR] of QW) BW.push(gR * NW, iR, -gR * eW);
      const tR = {
          positions: BW,
          indices: cR,
          uvs: rR
        },
        TW = [CW + .5 + .51 * Math.sin(bR), zR + .375, AW + .5 + .51 * Math.cos(bR)];
      return WW.createGameMesh(tR, {
        kind: "furnaceFire"
      }, TW)
    }

    function jR(WW) {
      return Math.floor(WW / 200) % 3
    }

    function kR(WW, RW, MW) {
      WW.setGameMesh(RW, {
        uvOffset: [0, MW / 3]
      })
    }
    const aR = [.12, .025, .12],
      sW = [{
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
          blendMode: zR.f.Standard,
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
          blendMode: zR.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class dW {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(WW, RW) {
        const MW = WW.getBlockId(RW[0], RW[1], RW[2]);
        if ("Furnace" !== WW.getMetaInfo(MW).rootName) return;
        const wW = performance.now();
        let CW = this.smokes.find((WW => WW.pos[0] === RW[0] && WW.pos[1] === RW[1] && WW.pos[2] === RW[2] && WW.Iz === MW));
        if (CW || (CW = {
            pos: [RW[0], RW[1], RW[2]],
            Iz: MW,
            endMs: wW,
            lastBurstMs: -1 / 0,
            pending: new Array(sW.length).fill(0),
            fire: XW(WW, RW, MW)
          }, this.smokes.push(CW), null !== CW.fire && (kR(WW, CW.fire, jR(wW)), this.shownFireFrame = -1)), CW.endMs = wW + 6e3, this.smokes.length > 4) {
          const RW = this.smokes.reduce(((WW, RW) => RW.endMs < WW.endMs ? RW : WW));
          pW(WW, RW), this.smokes.splice(this.smokes.indexOf(RW), 1)
        }
        wW - CW.lastBurstMs >= 300 && (CW.lastBurstMs = wW, sW.forEach(((WW, RW) => {
          CW.pending[RW] += WW.style.count
        })))
      }
      onAfterRender(WW, RW) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const MW = performance.now();
        this.smokes = this.smokes.filter((RW => {
          const [wW, CW, zR] = RW.pos, AW = MW < RW.endMs && WW.getBlockId(wW, CW, zR) === RW.Iz;
          return AW || pW(WW, RW), AW
        }));
        const wW = jR(MW);
        if (wW !== this.shownFireFrame) {
          this.shownFireFrame = wW;
          for (const RW of this.smokes) null !== RW.fire && kR(WW, RW.fire, wW)
        }
        if (!WW.particlesEnabled()) {
          for (const WW of this.smokes) WW.pending.fill(0);
          return
        }
        const CW = Math.min(RW, 250) / 1e3;
        for (const zR of this.smokes) {
          const [RW, wW, AW] = zR.pos;
          if (0 !== WW.getBlockId(RW, wW + 1, AW)) {
            zR.pending.fill(0);
            continue
          }
          const bR = (zR.endMs - MW) / 6e3,
            yR = this.centre;
          yR[0] = RW + .5, yR[1] = wW + 1.275, yR[2] = AW + .5, sW.forEach(((RW, MW) => {
            zR.pending[MW] += RW.perSecond * bR * CW;
            const wW = Math.floor(zR.pending[MW]);
            wW > 0 && this.emit(WW, MW, yR, wW) && (zR.pending[MW] -= wW)
          }))
        }
      }
      dispose(WW) {
        for (const MW of this.smokes) pW(WW, MW);
        this.smokes = [];
        for (const MW of null !== (RW = this.puffers) && void 0 !== RW ? RW : []) {
          var RW;
          MW.dispose()
        }
        this.puffers = null
      }
      emit(WW, RW, MW, wW) {
        return this.puffers ??= sW.map((WW => {
          let {
            style: RW,
            perSecond: MW
          } = WW;
          const wW = (RW.count / .3 + MW) * RW.life[1];
          return new fW(RW, Math.ceil(4 * wW), aR)
        })), this.puffers[RW].emit(WW, MW, this.renderFrame, wW)
      }
    }

    function pW(WW, RW) {
      null !== RW.fire && (WW.disposeGameMesh(RW.fire), RW.fire = null)
    }

    function hW() {
      let WW;
      const RW = new dW;
      return {
        onCreate(RW) {
          WW = RW
        },
        onReceivedMessageFromServer(MW, wW) {
          MW === AW.G && RW.start(WW, wW)
        },
        onAfterRender(MW) {
          RW.onAfterRender(WW, MW)
        },
        onClose() {
          RW.dispose(WW)
        }
      }
    }

    function UW(WW, RW, MW, wW) {
      return {
        dialogue: oW(wW.localPlayerId),
        fishing: JW(wW.localPlayerId),
        furnaceSmoke: hW(),
        ironChest: CW()
      }
    }

    function EW(WW, RW) {
      for (const CW of [WW, ...null !== RW && void 0 !== RW ? RW : []]) try {
        var MW;
        null === CW || void 0 === CW || null === (MW = CW.onClose) || void 0 === MW || MW.call(CW)
      } catch (wW) {
        console.error("Error in client onClose callback", wW)
      }
    }
  },
  3820: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      e: () => wW,
      i: () => zR,
      m: () => yR,
      o: () => AW
    });
    const wW = ["sine", "triangle", "square", "sawtooth"],
      CW = 55,
      zR = {
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

    function AW(WW) {
      return "string" !== typeof WW ? WW : Object.hasOwn(zR, WW) ? zR[WW] : null
    }

    function bR(WW, RW, MW) {
      return Math.min(MW, Math.max(RW, WW))
    }

    function yR(WW) {
      const RW = bR(WW.durationMs, 10, 500),
        MW = bR(WW.attackMs, 0, RW),
        {
          intonation: CW
        } = WW;
      return {
        waveform: wW.includes(WW.waveform) ? WW.waveform : "sine",
        pitchHz: bR(WW.pitchHz, 20, 4e3),
        glideSemitones: bR(WW.glideSemitones, -24, 24),
        durationMs: RW,
        attackMs: MW,
        releaseMs: bR(WW.releaseMs, 0, RW - MW),
        lowpassHz: null === WW.lowpassHz ? null : bR(WW.lowpassHz, 20, 2e4),
        volume: bR(WW.volume, 0, 2),
        intonation: {
          variationSemitones: bR(CW.variationSemitones, 0, 6),
          declineSemitones: bR(CW.declineSemitones, 0, 12),
          questionRiseSemitones: bR(CW.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bR(CW.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bR(WW.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);