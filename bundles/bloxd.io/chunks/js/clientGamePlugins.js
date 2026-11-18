export const id = 27;
export const ids = [27];
export const modules = {
  4242: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => HJ,
      f: () => gJ
    });
    var FJ = ZJ(4245),
      UJ = ZJ(227);
    const eJ = 120,
      XJ = 260,
      AJ = 1.15,
      qJ = 1.2,
      jJ = 2,
      YJ = 1.08,
      hJ = .8,
      DJ = .95,
      sJ = 8,
      nJ = "[\"')\\]\u300d\u300f\uff09]*",
      GJ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${nJ}$`),
      fJ = new RegExp(`[?\uff1f]${nJ}$`),
      xJ = new RegExp(`[!\uff01]${nJ}$`),
      rJ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vJ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      mJ = new RegExp(`[${vJ}]`),
      QJ = new RegExp(`[${vJ}]|[^${vJ}]+`, "g"),
      EJ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function VJ(JJ) {
      let cJ = 2166136261;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ ^= JJ.charCodeAt(ZJ), cJ = Math.imul(cJ, 16777619);
      return (cJ >>> 0) / 4294967295 * 2 - 1
    }

    function KJ(JJ) {
      var cJ;
      if (mJ.test(JJ)) return 1;
      const ZJ = JJ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        FJ = ZJ.replace(/[^0-9]/g, "");
      if (FJ.length > 0 && !/\p{L}/u.test(ZJ)) return Math.min(FJ.length, 4);
      const UJ = null !== (cJ = ZJ.match(EJ)) && void 0 !== cJ ? cJ : [];
      if (0 === UJ.length) {
        var eJ, XJ;
        const JJ = null !== (eJ = null === (XJ = ZJ.match(/\p{L}/gu)) || void 0 === XJ ? void 0 : XJ.length) && void 0 !== eJ ? eJ : 0;
        return 0 === JJ ? 0 : Math.min(Math.max(1, Math.round(JJ / 2.5)), sJ)
      }
      const AJ = ZJ.replace(/[^\p{L}]/gu, ""),
        qJ = UJ.length > 1 && "e" === UJ.at(-1) && AJ.endsWith("e") && !AJ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(JJ.replace(/[^\p{L}]/gu, ""));
      return Math.min(UJ.length - (qJ ? 1 : 0), sJ)
    }

    function yJ(JJ) {
      return JJ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function SJ(JJ) {
      const cJ = JJ.replace(/[^\p{L}]/gu, "");
      return cJ.length >= 2 && cJ === cJ.toUpperCase() && cJ !== cJ.toLowerCase()
    }

    function IJ(JJ, cJ) {
      var ZJ;
      const sJ = cJ && (0, FJ.h)(cJ),
        nJ = null !== (ZJ = null === sJ || void 0 === sJ ? void 0 : sJ.syllableMs) && void 0 !== ZJ ? ZJ : FJ.c,
        vJ = function(JJ) {
          const cJ = [];
          for (const FJ of (0, UJ.Sb)(JJ))
            if ("string" === typeof FJ)
              for (const JJ of FJ.split(/(\s+)/)) {
                if ("" === JJ) continue;
                if (/^\s+$/.test(JJ)) {
                  cJ.push({
                    kind: "space",
                    text: JJ
                  });
                  continue
                }
                if (!mJ.test(JJ)) {
                  cJ.push({
                    kind: "word",
                    text: JJ,
                    delayMs: 0
                  });
                  continue
                }
                let FJ = !0;
                for (const UJ of null !== (ZJ = JJ.match(QJ)) && void 0 !== ZJ ? ZJ : []) {
                  var ZJ;
                  const JJ = cJ.at(-1);
                  FJ || "word" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) || mJ.test(UJ) || /[\p{L}\p{N}]/u.test(UJ) ? (FJ || cJ.push({
                    kind: "space",
                    text: "\u200b"
                  }), cJ.push({
                    kind: "word",
                    text: UJ,
                    delayMs: 0
                  }), FJ = !1) : JJ.text += UJ
                }
              } else cJ.push({
                kind: "icon",
                text: FJ.icon,
                delayMs: 0
              });
          return cJ
        }(JJ),
        EJ = [];
      let IJ = [];
      for (const FJ of vJ) "space" !== FJ.kind && (IJ.push(FJ), GJ.test(FJ.text) && (EJ.push(IJ), IJ = []));
      EJ.push(IJ);
      const MJ = [];
      let bJ = 0;
      for (const FJ of EJ) {
        var wJ, WJ;
        const JJ = null !== (wJ = null === (WJ = FJ.at(-1)) || void 0 === WJ ? void 0 : WJ.text) && void 0 !== wJ ? wJ : "",
          cJ = fJ.test(JJ),
          ZJ = xJ.test(JJ),
          UJ = FJ.map((JJ => "word" === JJ.kind ? KJ(JJ.text) : 1)),
          vJ = UJ.findLastIndex((JJ => JJ > 0));
        for (const [fJ, xJ] of FJ.entries()) {
          const JJ = "word" === xJ.kind,
            FJ = UJ[fJ];
          xJ.delayMs = bJ;
          for (let UJ = 0; sJ && UJ < FJ; UJ++) {
            const {
              intonation: eJ
            } = sJ;
            let XJ = vJ > 0 ? -eJ.declineSemitones * (fJ / vJ) : 0;
            XJ += VJ(`${yJ(xJ.text)}|${UJ}`) * eJ.variationSemitones;
            const GJ = Math.min(1, eJ.variationSemitones);
            let rJ = sJ.glideSemitones,
              mJ = 1;
            ZJ && (XJ += eJ.exclaimLiftSemitones, mJ *= AJ), cJ && fJ === vJ && (XJ += eJ.questionRiseSemitones * (FJ > 1 ? .5 + .5 * UJ / (FJ - 1) : 1), UJ === FJ - 1 && (rJ = Math.abs(rJ) + eJ.questionRiseSemitones / 2)), JJ && SJ(xJ.text) && (XJ += jJ * GJ, mJ *= qJ), FJ > 1 && 0 === UJ && (XJ += hJ * GJ, mJ *= YJ), MJ.push({
              atMs: bJ + UJ * nJ,
              semitones: XJ,
              glideSemitones: rJ,
              durationMs: UJ < FJ - 1 ? Math.min(sJ.durationMs, nJ * DJ) : sJ.durationMs,
              level: mJ
            })
          }
          bJ += FJ * nJ + (GJ.test(xJ.text) ? XJ : rJ.test(xJ.text) ? eJ : 0)
        }
      }
      return {
        pieces: vJ.map((JJ => "space" === JJ.kind ? JJ : "icon" === JJ.kind ? {
          kind: "icon",
          icon: JJ.text,
          delayMs: JJ.delayMs
        } : {
          kind: "word",
          text: JJ.text,
          delayMs: JJ.delayMs
        })),
        blips: MJ
      }
    }
    var MJ = ZJ(1086),
      bJ = ZJ(1151),
      wJ = ZJ(1712);

    function WJ(JJ) {
      if ("string" === typeof JJ) return JJ;
      const cJ = bJ.e.get().getCurrentLanguageCode();
      return (0, MJ.t)(cJ, JJ.translationKey, (0, MJ.s)(JJ.params, wJ.d.shown))
    }

    function gJ(JJ) {
      const cJ = void 0 === JJ.voice ? null : (0, FJ.k)(JJ.voice),
        ZJ = cJ && (0, FJ.h)(cJ);
      return {
        plan: IJ(WJ(JJ.line), ZJ),
        synth: ZJ
      }
    }

    function HJ(JJ) {
      const cJ = [];
      let ZJ = [];
      for (const [UJ, eJ] of JJ.entries()) {
        var FJ;
        "space" === eJ.kind && (" " !== eJ.text || "icon" !== (null === (FJ = JJ[UJ + 1]) || void 0 === FJ ? void 0 : FJ.kind)) ? (ZJ.length > 0 && cJ.push(ZJ), cJ.push([eJ]), ZJ = []) : ZJ.push(eJ)
      }
      return ZJ.length > 0 && cJ.push(ZJ), cJ
    }
  },
  4254: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => YJ,
      e: () => hJ
    });
    var FJ = ZJ(4259),
      UJ = ZJ(13);
    const eJ = .25,
      XJ = .85,
      AJ = .02,
      qJ = .01;

    function jJ(JJ, cJ, ZJ, FJ, UJ, eJ, AJ) {
      const {
        waveform: qJ,
        pitchHz: jJ,
        attackMs: YJ,
        releaseMs: hJ,
        lowpassHz: DJ
      } = ZJ, sJ = UJ + FJ.durationMs / 1e3, nJ = jJ * 2 ** (FJ.semitones / 12), GJ = JJ.createOscillator();
      GJ.type = qJ, GJ.frequency.setValueAtTime(nJ, UJ), GJ.frequency.exponentialRampToValueAtTime(nJ * 2 ** (FJ.glideSemitones / 12), sJ);
      const fJ = UJ + Math.min(YJ, FJ.durationMs) / 1e3,
        xJ = JJ.createGain();
      xJ.gain.setValueAtTime(0, UJ), xJ.gain.linearRampToValueAtTime(eJ, fJ), xJ.gain.linearRampToValueAtTime(eJ * XJ, Math.max(fJ, sJ - hJ / 1e3)), xJ.gain.linearRampToValueAtTime(0, sJ);
      const rJ = [GJ];
      if (null !== DJ) {
        const cJ = JJ.createBiquadFilter();
        cJ.type = "lowpass", cJ.frequency.value = DJ, rJ.push(cJ)
      }
      rJ.push(xJ, cJ);
      for (let XJ = 1; XJ < rJ.length; XJ++) rJ[XJ - 1].connect(rJ[XJ]);
      return GJ.onended = () => {
        for (const JJ of rJ.slice(0, -1)) JJ.disconnect();
        AJ()
      }, GJ.start(UJ), GJ.stop(sJ), GJ
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ, XJ) {
      if (0 === FJ.length) return XJ(), () => {};
      const YJ = eJ * ZJ.volume * UJ,
        hJ = JJ.createGain();
      hJ.connect(cJ);
      const DJ = JJ.currentTime + AJ,
        sJ = new Set;
      for (const eJ of FJ) {
        const cJ = jJ(JJ, hJ, ZJ, eJ, DJ + eJ.atMs / 1e3, YJ * eJ.level, (() => {
          sJ.delete(cJ), 0 === sJ.size && (hJ.disconnect(), XJ())
        }));
        sJ.add(cJ)
      }
      return () => {
        const cJ = JJ.currentTime;
        hJ.gain.setTargetAtTime(0, cJ, qJ);
        for (const JJ of sJ) try {
          JJ.stop(cJ + 5 * qJ)
        } catch {}
      }
    }

    function hJ(JJ, cJ) {
      var ZJ;
      const eJ = FJ.b.ctx,
        XJ = FJ.b.masterGain;
      if (!eJ || !XJ || !UJ.d.get("soundOnFromAd")) return () => {};
      const AJ = FJ.b;
      return null === (ZJ = AJ._autoResume) || void 0 === ZJ || ZJ.call(AJ), YJ(eJ, XJ, JJ, cJ, UJ.d.get("soundVolume"), (() => {
        var JJ;
        null === (JJ = AJ._autoSuspend) || void 0 === JJ || JJ.call(AJ)
      }))
    }
  },
  38089: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      closeClientGame: () => PJ,
      createDefaultClientPlugins: () => HJ
    });
    var FJ = ZJ(235);

    function UJ() {
      let JJ;
      return {
        onCreate(cJ) {
          JJ = cJ
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(cJ, ZJ, UJ, eJ, XJ, AJ) {
          var qJ, jJ;
          if ("Iron Chest" !== JJ.getMetaInfo(XJ).rootName) return;
          if (!JJ.hasEffect(cJ, "Thief")) return;
          const YJ = JJ.getBlockData(ZJ, UJ, eJ);
          return JJ.getPlayerDbId(cJ) !== (null === YJ || void 0 === YJ || null === (qJ = YJ.persisted) || void 0 === qJ || null === (jJ = qJ.shared) || void 0 === jJ ? void 0 : jJ.ownerDbId) ? (JJ.sendMessage(cJ, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: FJ.D.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var eJ = ZJ(3726),
      XJ = ZJ(1137);
    const AJ = 8.4,
      qJ = 1e-4,
      jJ = .15,
      YJ = .04,
      hJ = [.12, .04, .12],
      DJ = 26,
      sJ = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        qh: 1,
        minLifeTime: qJ,
        maxLifeTime: qJ,
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
        blendMode: eJ.g.Standard
      },
      nJ = {
        texture: "bubble",
        mipmaps: !1,
        qh: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: DJ,
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
        blendMode: eJ.g.Standard
      },
      GJ = [0, 0, 0],
      fJ = [0, 0, 0];

    function xJ(JJ) {
      const cJ = new Map;
      let ZJ = null;

      function FJ(JJ) {
        var cJ, ZJ;
        null === (cJ = JJ.bubbles) || void 0 === cJ || cJ.stop(), null === (ZJ = JJ.fish) || void 0 === ZJ || ZJ.stop()
      }

      function UJ(ZJ) {
        if (!ZJ.readDrawnPosition(JJ, fJ)) {
          for (const JJ of cJ.values()) {
            var FJ;
            null === (FJ = JJ.bubbles) || void 0 === FJ || FJ.setEmitRate(0)
          }
          return
        }
        const UJ = performance.now();
        for (const [JJ, XJ] of cJ) {
          var eJ;
          if (null === (eJ = XJ.bubbles) || void 0 === eJ || eJ.setEmitRate(0), !ZJ.readDrawnPosition(JJ, GJ)) continue;
          if (!((GJ[0] - fJ[0]) ** 2 + (GJ[1] - fJ[1]) ** 2 + (GJ[2] - fJ[2]) ** 2 < 900)) continue;
          const cJ = Math.max(0, XJ.biteAt - UJ),
            FJ = XJ.approachDurationMs > 0 ? Math.min(1, 1 - cJ / XJ.approachDurationMs) : 1,
            qJ = (XJ.approachDurationMs - cJ) / 1e3,
            xJ = XJ.phase + .25 * Math.sin(1.7 * qJ + XJ.phase),
            rJ = Math.min(XJ.approachDurationMs / 3e3 * 2.8, AJ) * (1 - FJ) * (1 + .15 * Math.sin(2.1 * qJ + XJ.phase)),
            vJ = Math.min(1, 4 * (1 - FJ)),
            mJ = (.45 * Math.sin(4.1 * qJ + XJ.phase) + .18 * Math.sin(9.7 * qJ + 2 * XJ.phase)) * vJ,
            QJ = GJ[0] + Math.cos(xJ) * rJ - Math.sin(xJ) * mJ,
            EJ = Math.ceil(XJ.surfaceY),
            VJ = GJ[2] + Math.sin(xJ) * rJ + Math.cos(xJ) * mJ,
            {
              fishAt: KJ,
              bubblesAt: yJ
            } = XJ;
          KJ[0] = yJ[0] = QJ, KJ[1] = EJ + jJ, yJ[1] = EJ + YJ, KJ[2] = yJ[2] = VJ, XJ.fish ??= ZJ.createParticles(sJ, {
            pos: KJ
          }), XJ.fish.moveTo(KJ), XJ.fish.emit(1), XJ.bubbles ??= ZJ.createParticles(nJ, {
            pos: yJ,
            half: hJ
          }), XJ.bubbles.moveTo(yJ), XJ.bubbles.setEmitRate(DJ + 32 * (.5 + .5 * Math.sin(9 * qJ + XJ.phase)) ** 4 + 13 * FJ)
        }
      }
      return {
        onCreate(JJ) {
          ZJ = JJ
        },
        onAfterRender() {
          ZJ && UJ(ZJ)
        },
        onClose() {
          for (const JJ of cJ.values()) FJ(JJ);
          cJ.clear(), ZJ = null
        },
        onReceivedMessageFromServer(JJ, ZJ) {
          if (JJ !== XJ.y) return;
          const {
            hookId: UJ,
            waiting: eJ
          } = ZJ;
          if (eJ) cJ.has(UJ) || cJ.set(UJ, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + eJ.remainingMs,
            approachDurationMs: eJ.durationMs,
            surfaceY: eJ.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const JJ = cJ.get(UJ);
            JJ && FJ(JJ), cJ.delete(UJ)
          }
        }
      }
    }
    var rJ = ZJ(4254),
      vJ = ZJ(4242);

    function mJ(JJ) {
      let cJ, ZJ = null,
        FJ = null;
      const UJ = () => {
        var JJ;
        null === (JJ = FJ) || void 0 === JJ || JJ(), FJ = null
      };
      return {
        onCreate(FJ) {
          cJ = FJ, ZJ = cJ.getClientOption(JJ, "dialogue")
        },
        onAfterRender() {
          if (!cJ) return;
          const eJ = cJ.getClientOption(JJ, "dialogue");
          if (eJ === ZJ) return;
          if (ZJ = eJ, UJ(), !eJ || !1 === eJ.animateIn) return;
          const {
            plan: XJ,
            synth: AJ
          } = (0, vJ.f)(eJ);
          AJ && (FJ = (0, rJ.e)(AJ, XJ.blips))
        },
        onClose: UJ
      }
    }
    var QJ = ZJ(38095);
    const EJ = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      VJ = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      KJ = [0, 1, 2, 0, 2, 3];

    function yJ(JJ, cJ, ZJ) {
      var FJ;
      let [UJ, eJ, XJ] = cJ;
      if (JJ.hasPackModel("Furnace")) return null;
      const AJ = ((null !== (FJ = JJ.getMetaInfo(ZJ).rot) && void 0 !== FJ ? FJ : 1) - 1) * Math.PI / 2,
        qJ = Math.PI + AJ,
        jJ = Math.cos(qJ),
        YJ = Math.sin(qJ),
        hJ = [];
      for (const [nJ, GJ] of EJ) hJ.push(nJ * jJ, GJ, -nJ * YJ);
      const DJ = {
          positions: hJ,
          indices: KJ,
          uvs: VJ
        },
        sJ = [UJ + .5 + .51 * Math.sin(AJ), eJ + .375, XJ + .5 + .51 * Math.cos(AJ)];
      return JJ.createGameMesh(DJ, {
        kind: "furnaceFire"
      }, sJ)
    }

    function SJ(JJ) {
      return Math.floor(JJ / 200) % 3
    }

    function IJ(JJ, cJ, ZJ) {
      JJ.setGameMesh(cJ, {
        uvOffset: [0, ZJ / 3]
      })
    }
    const MJ = [.12, .025, .12],
      bJ = [{
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
          blendMode: eJ.g.Standard,
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
          blendMode: eJ.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class wJ {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(JJ, cJ) {
        const ZJ = JJ.getBlockId(cJ[0], cJ[1], cJ[2]);
        if ("Furnace" !== JJ.getMetaInfo(ZJ).rootName) return;
        const FJ = performance.now();
        let UJ = this.smokes.find((JJ => JJ.pos[0] === cJ[0] && JJ.pos[1] === cJ[1] && JJ.pos[2] === cJ[2] && JJ.EA === ZJ));
        if (UJ || (UJ = {
            pos: [cJ[0], cJ[1], cJ[2]],
            EA: ZJ,
            endMs: FJ,
            lastBurstMs: -1 / 0,
            pending: new Array(bJ.length).fill(0),
            fire: yJ(JJ, cJ, ZJ)
          }, this.smokes.push(UJ), null !== UJ.fire && (IJ(JJ, UJ.fire, SJ(FJ)), this.shownFireFrame = -1)), UJ.endMs = FJ + 6e3, this.smokes.length > 4) {
          const cJ = this.smokes.reduce(((JJ, cJ) => cJ.endMs < JJ.endMs ? cJ : JJ));
          WJ(JJ, cJ), this.smokes.splice(this.smokes.indexOf(cJ), 1)
        }
        FJ - UJ.lastBurstMs >= 300 && (UJ.lastBurstMs = FJ, bJ.forEach(((JJ, cJ) => {
          UJ.pending[cJ] += JJ.style.count
        })))
      }
      onAfterRender(JJ, cJ) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const ZJ = performance.now();
        this.smokes = this.smokes.filter((cJ => {
          const [FJ, UJ, eJ] = cJ.pos, XJ = ZJ < cJ.endMs && JJ.getBlockId(FJ, UJ, eJ) === cJ.EA;
          return XJ || WJ(JJ, cJ), XJ
        }));
        const FJ = SJ(ZJ);
        if (FJ !== this.shownFireFrame) {
          this.shownFireFrame = FJ;
          for (const cJ of this.smokes) null !== cJ.fire && IJ(JJ, cJ.fire, FJ)
        }
        if (!JJ.particlesEnabled()) {
          for (const JJ of this.smokes) JJ.pending.fill(0);
          return
        }
        const UJ = Math.min(cJ, 250) / 1e3;
        for (const eJ of this.smokes) {
          const [cJ, FJ, XJ] = eJ.pos;
          if (0 !== JJ.getBlockId(cJ, FJ + 1, XJ)) {
            eJ.pending.fill(0);
            continue
          }
          const AJ = (eJ.endMs - ZJ) / 6e3,
            qJ = this.centre;
          qJ[0] = cJ + .5, qJ[1] = FJ + 1.275, qJ[2] = XJ + .5, bJ.forEach(((cJ, ZJ) => {
            eJ.pending[ZJ] += cJ.perSecond * AJ * UJ;
            const FJ = Math.floor(eJ.pending[ZJ]);
            FJ > 0 && this.emit(JJ, ZJ, qJ, FJ) && (eJ.pending[ZJ] -= FJ)
          }))
        }
      }
      dispose(JJ) {
        for (const ZJ of this.smokes) WJ(JJ, ZJ);
        this.smokes = [];
        for (const ZJ of null !== (cJ = this.puffers) && void 0 !== cJ ? cJ : []) {
          var cJ;
          ZJ.dispose()
        }
        this.puffers = null
      }
      emit(JJ, cJ, ZJ, FJ) {
        return this.puffers ??= bJ.map((JJ => {
          let {
            style: cJ,
            perSecond: ZJ
          } = JJ;
          const FJ = (cJ.count / .3 + ZJ) * cJ.life[1];
          return new QJ.g(cJ, Math.ceil(4 * FJ), MJ)
        })), this.puffers[cJ].emit(JJ, ZJ, this.renderFrame, FJ)
      }
    }

    function WJ(JJ, cJ) {
      null !== cJ.fire && (JJ.disposeGameMesh(cJ.fire), cJ.fire = null)
    }

    function gJ() {
      let JJ;
      const cJ = new wJ;
      return {
        onCreate(cJ) {
          JJ = cJ
        },
        onReceivedMessageFromServer(ZJ, FJ) {
          ZJ === XJ.A && cJ.start(JJ, FJ)
        },
        onAfterRender(ZJ) {
          cJ.onAfterRender(JJ, ZJ)
        },
        onClose() {
          cJ.dispose(JJ)
        }
      }
    }

    function HJ(JJ, cJ, ZJ, FJ) {
      return {
        dialogue: mJ(FJ.localPlayerId),
        fishing: xJ(FJ.localPlayerId),
        furnaceSmoke: gJ(),
        ironChest: UJ()
      }
    }

    function PJ(JJ, cJ) {
      for (const UJ of [JJ, ...null !== cJ && void 0 !== cJ ? cJ : []]) try {
        var ZJ;
        null === UJ || void 0 === UJ || null === (ZJ = UJ.onClose) || void 0 === ZJ || ZJ.call(UJ)
      } catch (FJ) {
        console.error("Error in client onClose callback", FJ)
      }
    }
  },
  38095: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      g: () => eJ
    });
    const FJ = 1 / .6,
      UJ = {
        kind: "smokePuff"
      };
    class eJ {
      constructor(JJ, cJ, ZJ) {
        this.style = JJ, this.qh = cJ, this.half = ZJ, this.particles = null, this.lastFrame = -1
      }
      emit(JJ, cJ, ZJ) {
        let eJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZJ !== this.lastFrame && (this.lastFrame = ZJ, this.particles || (this.particles = JJ.createParticles(function(JJ, cJ) {
          const [
            [ZJ, eJ, XJ],
            [AJ, qJ, jJ]
          ] = JJ.colours;
          return {
            texture: JJ.soft ? UJ : "square_particle",
            qh: cJ,
            minLifeTime: JJ.life[0] / FJ,
            maxLifeTime: JJ.life[1] / FJ,
            minEmitPower: JJ.power[0] * FJ,
            maxEmitPower: JJ.power[1] * FJ,
            minSize: JJ.size[0],
            maxSize: JJ.size[1],
            emitRate: 0,
            gravity: [0, JJ.lift * FJ * FJ, 0],
            dir1: [-JJ.spread, 1, -JJ.spread],
            dir2: [JJ.spread, 1, JJ.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZJ, eJ, XJ, JJ.alpha],
              maxColor: [AJ, qJ, jJ, JJ.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZJ, eJ, XJ, 0],
              maxColor: [AJ, qJ, jJ, 0]
            }],
            blendMode: JJ.blendMode
          }
        }(this.style, this.qh), {
          pos: cJ,
          half: this.half
        })), this.particles.moveTo(cJ, this.half), this.particles.emit(eJ), !0)
      }
      dispose() {
        var JJ;
        null === (JJ = this.particles) || void 0 === JJ || JJ.stop(), this.particles = null
      }
    }
  },
  4245: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => FJ,
      f: () => eJ,
      h: () => qJ,
      k: () => XJ
    });
    const FJ = ["sine", "triangle", "square", "sawtooth"],
      UJ = 55,
      eJ = {
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

    function XJ(JJ) {
      return "string" !== typeof JJ ? JJ : Object.hasOwn(eJ, JJ) ? eJ[JJ] : null
    }

    function AJ(JJ, cJ, ZJ) {
      return Math.min(ZJ, Math.max(cJ, JJ))
    }

    function qJ(JJ) {
      const cJ = AJ(JJ.durationMs, 10, 500),
        ZJ = AJ(JJ.attackMs, 0, cJ),
        {
          intonation: UJ
        } = JJ;
      return {
        waveform: FJ.includes(JJ.waveform) ? JJ.waveform : "sine",
        pitchHz: AJ(JJ.pitchHz, 20, 4e3),
        glideSemitones: AJ(JJ.glideSemitones, -24, 24),
        durationMs: cJ,
        attackMs: ZJ,
        releaseMs: AJ(JJ.releaseMs, 0, cJ - ZJ),
        lowpassHz: null === JJ.lowpassHz ? null : AJ(JJ.lowpassHz, 20, 2e4),
        volume: AJ(JJ.volume, 0, 2),
        intonation: {
          variationSemitones: AJ(UJ.variationSemitones, 0, 6),
          declineSemitones: AJ(UJ.declineSemitones, 0, 12),
          questionRiseSemitones: AJ(UJ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: AJ(UJ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: AJ(JJ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);