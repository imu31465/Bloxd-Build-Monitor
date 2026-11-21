export const id = 27;
export const ids = [27];
export const modules = {
  4680: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => TQ,
      f: () => NQ
    });
    var LQ = wQ(4686),
      qQ = wQ(307);
    const oQ = 120,
      DQ = 260,
      kQ = 1.15,
      vQ = 1.2,
      mQ = 2,
      uQ = 1.08,
      HQ = .8,
      bQ = .95,
      YQ = 8,
      xQ = "[\"')\\]\u300d\u300f\uff09]*",
      AQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${xQ}$`),
      tQ = new RegExp(`[?\uff1f]${xQ}$`),
      eQ = new RegExp(`[!\uff01]${xQ}$`),
      MQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      GQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      pQ = new RegExp(`[${GQ}]`),
      cQ = new RegExp(`[${GQ}]|[^${GQ}]+`, "g"),
      CQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function SQ(QQ) {
      let FQ = 2166136261;
      for (let wQ = 0; wQ < QQ.length; wQ++) FQ ^= QQ.charCodeAt(wQ), FQ = Math.imul(FQ, 16777619);
      return (FQ >>> 0) / 4294967295 * 2 - 1
    }

    function iQ(QQ) {
      var FQ;
      if (pQ.test(QQ)) return 1;
      const wQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        LQ = wQ.replace(/[^0-9]/g, "");
      if (LQ.length > 0 && !/\p{L}/u.test(wQ)) return Math.min(LQ.length, 4);
      const qQ = null !== (FQ = wQ.match(CQ)) && void 0 !== FQ ? FQ : [];
      if (0 === qQ.length) {
        var oQ, DQ;
        const QQ = null !== (oQ = null === (DQ = wQ.match(/\p{L}/gu)) || void 0 === DQ ? void 0 : DQ.length) && void 0 !== oQ ? oQ : 0;
        return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), YQ)
      }
      const kQ = wQ.replace(/[^\p{L}]/gu, ""),
        vQ = qQ.length > 1 && "e" === qQ.at(-1) && kQ.endsWith("e") && !kQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
      return Math.min(qQ.length - (vQ ? 1 : 0), YQ)
    }

    function WQ(QQ) {
      return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function RQ(QQ) {
      const FQ = QQ.replace(/[^\p{L}]/gu, "");
      return FQ.length >= 2 && FQ === FQ.toUpperCase() && FQ !== FQ.toLowerCase()
    }

    function OQ(QQ, FQ) {
      var wQ;
      const YQ = FQ && (0, LQ.i)(FQ),
        xQ = null !== (wQ = null === YQ || void 0 === YQ ? void 0 : YQ.syllableMs) && void 0 !== wQ ? wQ : LQ.c,
        GQ = function(QQ) {
          const FQ = [];
          for (const LQ of (0, qQ.ec)(QQ))
            if ("string" === typeof LQ)
              for (const QQ of LQ.split(/(\s+)/)) {
                if ("" === QQ) continue;
                if (/^\s+$/.test(QQ)) {
                  FQ.push({
                    kind: "space",
                    text: QQ
                  });
                  continue
                }
                if (!pQ.test(QQ)) {
                  FQ.push({
                    kind: "word",
                    text: QQ,
                    delayMs: 0
                  });
                  continue
                }
                let LQ = !0;
                for (const qQ of null !== (wQ = QQ.match(cQ)) && void 0 !== wQ ? wQ : []) {
                  var wQ;
                  const QQ = FQ.at(-1);
                  LQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || pQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (LQ || FQ.push({
                    kind: "space",
                    text: "\u200b"
                  }), FQ.push({
                    kind: "word",
                    text: qQ,
                    delayMs: 0
                  }), LQ = !1) : QQ.text += qQ
                }
              } else FQ.push({
                kind: "icon",
                text: LQ.icon,
                delayMs: 0
              });
          return FQ
        }(QQ),
        CQ = [];
      let OQ = [];
      for (const LQ of GQ) "space" !== LQ.kind && (OQ.push(LQ), AQ.test(LQ.text) && (CQ.push(OQ), OQ = []));
      CQ.push(OQ);
      const sQ = [];
      let rQ = 0;
      for (const LQ of CQ) {
        var IQ, UQ;
        const QQ = null !== (IQ = null === (UQ = LQ.at(-1)) || void 0 === UQ ? void 0 : UQ.text) && void 0 !== IQ ? IQ : "",
          FQ = tQ.test(QQ),
          wQ = eQ.test(QQ),
          qQ = LQ.map((QQ => "word" === QQ.kind ? iQ(QQ.text) : 1)),
          GQ = qQ.findLastIndex((QQ => QQ > 0));
        for (const [tQ, eQ] of LQ.entries()) {
          const QQ = "word" === eQ.kind,
            LQ = qQ[tQ];
          eQ.delayMs = rQ;
          for (let qQ = 0; YQ && qQ < LQ; qQ++) {
            const {
              intonation: oQ
            } = YQ;
            let DQ = GQ > 0 ? -oQ.declineSemitones * (tQ / GQ) : 0;
            DQ += SQ(`${WQ(eQ.text)}|${qQ}`) * oQ.variationSemitones;
            const AQ = Math.min(1, oQ.variationSemitones);
            let MQ = YQ.glideSemitones,
              pQ = 1;
            wQ && (DQ += oQ.exclaimLiftSemitones, pQ *= kQ), FQ && tQ === GQ && (DQ += oQ.questionRiseSemitones * (LQ > 1 ? .5 + .5 * qQ / (LQ - 1) : 1), qQ === LQ - 1 && (MQ = Math.abs(MQ) + oQ.questionRiseSemitones / 2)), QQ && RQ(eQ.text) && (DQ += mQ * AQ, pQ *= vQ), LQ > 1 && 0 === qQ && (DQ += HQ * AQ, pQ *= uQ), sQ.push({
              atMs: rQ + qQ * xQ,
              semitones: DQ,
              glideSemitones: MQ,
              durationMs: qQ < LQ - 1 ? Math.min(YQ.durationMs, xQ * bQ) : YQ.durationMs,
              level: pQ
            })
          }
          rQ += LQ * xQ + (AQ.test(eQ.text) ? DQ : MQ.test(eQ.text) ? oQ : 0)
        }
      }
      return {
        pieces: GQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
          kind: "icon",
          icon: QQ.text,
          delayMs: QQ.delayMs
        } : {
          kind: "word",
          text: QQ.text,
          delayMs: QQ.delayMs
        })),
        blips: sQ
      }
    }
    var sQ = wQ(1207),
      rQ = wQ(1265),
      IQ = wQ(1899);

    function UQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      const FQ = rQ.e.get().getCurrentLanguageCode();
      return (0, sQ.o)(FQ, QQ.translationKey, (0, sQ.m)(QQ.params, IQ.b.shown))
    }

    function NQ(QQ) {
      const FQ = void 0 === QQ.voice ? null : (0, LQ.k)(QQ.voice),
        wQ = FQ && (0, LQ.i)(FQ);
      return {
        plan: OQ(UQ(QQ.line), wQ),
        synth: wQ
      }
    }

    function TQ(QQ) {
      const FQ = [];
      let wQ = [];
      for (const [qQ, oQ] of QQ.entries()) {
        var LQ;
        "space" === oQ.kind && (" " !== oQ.text || "icon" !== (null === (LQ = QQ[qQ + 1]) || void 0 === LQ ? void 0 : LQ.kind)) ? (wQ.length > 0 && FQ.push(wQ), FQ.push([oQ]), wQ = []) : wQ.push(oQ)
      }
      return wQ.length > 0 && FQ.push(wQ), FQ
    }
  },
  4691: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      d: () => HQ
    });
    var LQ = wQ(4694),
      qQ = wQ(17);
    const oQ = .25,
      DQ = .85,
      kQ = .02,
      vQ = .01;

    function mQ(QQ, FQ, wQ, LQ, qQ, oQ, kQ) {
      const {
        waveform: vQ,
        pitchHz: mQ,
        attackMs: uQ,
        releaseMs: HQ,
        lowpassHz: bQ
      } = wQ, YQ = qQ + LQ.durationMs / 1e3, xQ = mQ * 2 ** (LQ.semitones / 12), AQ = QQ.createOscillator();
      AQ.type = vQ, AQ.frequency.setValueAtTime(xQ, qQ), AQ.frequency.exponentialRampToValueAtTime(xQ * 2 ** (LQ.glideSemitones / 12), YQ);
      const tQ = qQ + Math.min(uQ, LQ.durationMs) / 1e3,
        eQ = QQ.createGain();
      eQ.gain.setValueAtTime(0, qQ), eQ.gain.linearRampToValueAtTime(oQ, tQ), eQ.gain.linearRampToValueAtTime(oQ * DQ, Math.max(tQ, YQ - HQ / 1e3)), eQ.gain.linearRampToValueAtTime(0, YQ);
      const MQ = [AQ];
      if (null !== bQ) {
        const FQ = QQ.createBiquadFilter();
        FQ.type = "lowpass", FQ.frequency.value = bQ, MQ.push(FQ)
      }
      MQ.push(eQ, FQ);
      for (let DQ = 1; DQ < MQ.length; DQ++) MQ[DQ - 1].connect(MQ[DQ]);
      return AQ.onended = () => {
        for (const QQ of MQ.slice(0, -1)) QQ.disconnect();
        kQ()
      }, AQ.start(qQ), AQ.stop(YQ), AQ
    }

    function uQ(QQ, FQ, wQ, LQ, qQ, DQ) {
      if (0 === LQ.length) return DQ(), () => {};
      const uQ = oQ * wQ.volume * qQ,
        HQ = QQ.createGain();
      HQ.connect(FQ);
      const bQ = QQ.currentTime + kQ,
        YQ = new Set;
      for (const oQ of LQ) {
        const FQ = mQ(QQ, HQ, wQ, oQ, bQ + oQ.atMs / 1e3, uQ * oQ.level, (() => {
          YQ.delete(FQ), 0 === YQ.size && (HQ.disconnect(), DQ())
        }));
        YQ.add(FQ)
      }
      return () => {
        const FQ = QQ.currentTime;
        HQ.gain.setTargetAtTime(0, FQ, vQ);
        for (const QQ of YQ) try {
          QQ.stop(FQ + 5 * vQ)
        } catch {}
      }
    }

    function HQ(QQ, FQ) {
      var wQ;
      const oQ = LQ.Howler.ctx,
        DQ = LQ.Howler.masterGain;
      if (!oQ || !DQ || !qQ.c.get("soundOnFromAd")) return () => {};
      const kQ = LQ.Howler;
      return null === (wQ = kQ._autoResume) || void 0 === wQ || wQ.call(kQ), uQ(oQ, DQ, QQ, FQ, qQ.c.get("soundVolume"), (() => {
        var QQ;
        null === (QQ = kQ._autoSuspend) || void 0 === QQ || QQ.call(kQ)
      }))
    }
  },
  38675: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      closeClientGame: () => KQ,
      createDefaultClientPlugins: () => TQ
    });
    var LQ = wQ(317);

    function qQ() {
      let QQ;
      return {
        onCreate(FQ) {
          QQ = FQ
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(FQ, wQ, qQ, oQ, DQ, kQ) {
          var vQ, mQ;
          if ("Iron Chest" !== QQ.getMetaInfo(DQ).rootName) return;
          if (!QQ.hasEffect(FQ, "Thief")) return;
          const uQ = QQ.getBlockData(wQ, qQ, oQ);
          return QQ.getPlayerDbId(FQ) !== (null === uQ || void 0 === uQ || null === (vQ = uQ.persisted) || void 0 === vQ || null === (mQ = vQ.shared) || void 0 === mQ ? void 0 : mQ.ownerDbId) ? (QQ.sendMessage(FQ, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: LQ.K.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var oQ = wQ(4119),
      DQ = wQ(1254);
    const kQ = 8.4,
      vQ = 1e-4,
      mQ = .15,
      uQ = .04,
      HQ = [.12, .04, .12],
      bQ = 26,
      YQ = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        MH: 1,
        minLifeTime: vQ,
        maxLifeTime: vQ,
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
        blendMode: oQ.f.Standard
      },
      xQ = {
        texture: "bubble",
        mipmaps: !1,
        MH: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: bQ,
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
        blendMode: oQ.f.Standard
      },
      AQ = [0, 0, 0],
      tQ = [0, 0, 0];

    function eQ(QQ) {
      const FQ = new Map;
      let wQ = null;

      function LQ(QQ) {
        var FQ, wQ;
        null === (FQ = QQ.bubbles) || void 0 === FQ || FQ.stop(), null === (wQ = QQ.fish) || void 0 === wQ || wQ.stop()
      }

      function qQ(wQ) {
        if (!wQ.readDrawnPosition(QQ, tQ)) {
          for (const QQ of FQ.values()) {
            var LQ;
            null === (LQ = QQ.bubbles) || void 0 === LQ || LQ.setEmitRate(0)
          }
          return
        }
        const qQ = performance.now();
        for (const [QQ, DQ] of FQ) {
          var oQ;
          if (null === (oQ = DQ.bubbles) || void 0 === oQ || oQ.setEmitRate(0), !wQ.readDrawnPosition(QQ, AQ)) continue;
          if (!((AQ[0] - tQ[0]) ** 2 + (AQ[1] - tQ[1]) ** 2 + (AQ[2] - tQ[2]) ** 2 < 900)) continue;
          const FQ = Math.max(0, DQ.biteAt - qQ),
            LQ = DQ.approachDurationMs > 0 ? Math.min(1, 1 - FQ / DQ.approachDurationMs) : 1,
            vQ = (DQ.approachDurationMs - FQ) / 1e3,
            eQ = DQ.phase + .25 * Math.sin(1.7 * vQ + DQ.phase),
            MQ = Math.min(DQ.approachDurationMs / 3e3 * 2.8, kQ) * (1 - LQ) * (1 + .15 * Math.sin(2.1 * vQ + DQ.phase)),
            GQ = Math.min(1, 4 * (1 - LQ)),
            pQ = (.45 * Math.sin(4.1 * vQ + DQ.phase) + .18 * Math.sin(9.7 * vQ + 2 * DQ.phase)) * GQ,
            cQ = AQ[0] + Math.cos(eQ) * MQ - Math.sin(eQ) * pQ,
            CQ = Math.ceil(DQ.surfaceY),
            SQ = AQ[2] + Math.sin(eQ) * MQ + Math.cos(eQ) * pQ,
            {
              fishAt: iQ,
              bubblesAt: WQ
            } = DQ;
          iQ[0] = WQ[0] = cQ, iQ[1] = CQ + mQ, WQ[1] = CQ + uQ, iQ[2] = WQ[2] = SQ, DQ.fish ??= wQ.createParticles(YQ, {
            pos: iQ
          }), DQ.fish.moveTo(iQ), DQ.fish.emit(1), DQ.bubbles ??= wQ.createParticles(xQ, {
            pos: WQ,
            half: HQ
          }), DQ.bubbles.moveTo(WQ), DQ.bubbles.setEmitRate(bQ + 32 * (.5 + .5 * Math.sin(9 * vQ + DQ.phase)) ** 4 + 13 * LQ)
        }
      }
      return {
        onCreate(QQ) {
          wQ = QQ
        },
        onAfterRender() {
          wQ && qQ(wQ)
        },
        onClose() {
          for (const QQ of FQ.values()) LQ(QQ);
          FQ.clear(), wQ = null
        },
        onReceivedMessageFromServer(QQ, wQ) {
          if (QQ !== DQ.C) return;
          const {
            hookId: qQ,
            waiting: oQ
          } = wQ;
          if (oQ) FQ.has(qQ) || FQ.set(qQ, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + oQ.remainingMs,
            approachDurationMs: oQ.durationMs,
            surfaceY: oQ.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const QQ = FQ.get(qQ);
            QQ && LQ(QQ), FQ.delete(qQ)
          }
        }
      }
    }
    var MQ = wQ(4691),
      GQ = wQ(4680);

    function pQ(QQ) {
      let FQ, wQ = null,
        LQ = null;
      const qQ = () => {
        var QQ;
        null === (QQ = LQ) || void 0 === QQ || QQ(), LQ = null
      };
      return {
        onCreate(LQ) {
          FQ = LQ, wQ = FQ.getClientOption(QQ, "dialogue")
        },
        onAfterRender() {
          if (!FQ) return;
          const oQ = FQ.getClientOption(QQ, "dialogue");
          if (oQ === wQ) return;
          if (wQ = oQ, qQ(), !oQ || !1 === oQ.animateIn) return;
          const {
            plan: DQ,
            synth: kQ
          } = (0, GQ.f)(oQ);
          kQ && (LQ = (0, MQ.d)(kQ, DQ.blips))
        },
        onClose: qQ
      }
    }
    var cQ = wQ(38678);
    const CQ = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      SQ = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      iQ = [0, 1, 2, 0, 2, 3];

    function WQ(QQ, FQ, wQ) {
      var LQ;
      let [qQ, oQ, DQ] = FQ;
      if (QQ.hasPackModel("Furnace")) return null;
      const kQ = ((null !== (LQ = QQ.getMetaInfo(wQ).rot) && void 0 !== LQ ? LQ : 1) - 1) * Math.PI / 2,
        vQ = Math.PI + kQ,
        mQ = Math.cos(vQ),
        uQ = Math.sin(vQ),
        HQ = [];
      for (const [xQ, AQ] of CQ) HQ.push(xQ * mQ, AQ, -xQ * uQ);
      const bQ = {
          positions: HQ,
          indices: iQ,
          uvs: SQ
        },
        YQ = [qQ + .5 + .51 * Math.sin(kQ), oQ + .375, DQ + .5 + .51 * Math.cos(kQ)];
      return QQ.createGameMesh(bQ, {
        kind: "furnaceFire"
      }, YQ)
    }

    function RQ(QQ) {
      return Math.floor(QQ / 200) % 3
    }

    function OQ(QQ, FQ, wQ) {
      QQ.setGameMesh(FQ, {
        uvOffset: [0, wQ / 3]
      })
    }
    const sQ = [.12, .025, .12],
      rQ = [{
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
          blendMode: oQ.f.Standard,
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
          blendMode: oQ.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class IQ {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(QQ, FQ) {
        const wQ = QQ.getBlockId(FQ[0], FQ[1], FQ[2]);
        if ("Furnace" !== QQ.getMetaInfo(wQ).rootName) return;
        const LQ = performance.now();
        let qQ = this.smokes.find((QQ => QQ.pos[0] === FQ[0] && QQ.pos[1] === FQ[1] && QQ.pos[2] === FQ[2] && QQ.um === wQ));
        if (qQ || (qQ = {
            pos: [FQ[0], FQ[1], FQ[2]],
            um: wQ,
            endMs: LQ,
            lastBurstMs: -1 / 0,
            pending: new Array(rQ.length).fill(0),
            fire: WQ(QQ, FQ, wQ)
          }, this.smokes.push(qQ), null !== qQ.fire && (OQ(QQ, qQ.fire, RQ(LQ)), this.shownFireFrame = -1)), qQ.endMs = LQ + 6e3, this.smokes.length > 4) {
          const FQ = this.smokes.reduce(((QQ, FQ) => FQ.endMs < QQ.endMs ? FQ : QQ));
          UQ(QQ, FQ), this.smokes.splice(this.smokes.indexOf(FQ), 1)
        }
        LQ - qQ.lastBurstMs >= 300 && (qQ.lastBurstMs = LQ, rQ.forEach(((QQ, FQ) => {
          qQ.pending[FQ] += QQ.style.count
        })))
      }
      onAfterRender(QQ, FQ) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const wQ = performance.now();
        this.smokes = this.smokes.filter((FQ => {
          const [LQ, qQ, oQ] = FQ.pos, DQ = wQ < FQ.endMs && QQ.getBlockId(LQ, qQ, oQ) === FQ.um;
          return DQ || UQ(QQ, FQ), DQ
        }));
        const LQ = RQ(wQ);
        if (LQ !== this.shownFireFrame) {
          this.shownFireFrame = LQ;
          for (const FQ of this.smokes) null !== FQ.fire && OQ(QQ, FQ.fire, LQ)
        }
        if (!QQ.particlesEnabled()) {
          for (const QQ of this.smokes) QQ.pending.fill(0);
          return
        }
        const qQ = Math.min(FQ, 250) / 1e3;
        for (const oQ of this.smokes) {
          const [FQ, LQ, DQ] = oQ.pos;
          if (0 !== QQ.getBlockId(FQ, LQ + 1, DQ)) {
            oQ.pending.fill(0);
            continue
          }
          const kQ = (oQ.endMs - wQ) / 6e3,
            vQ = this.centre;
          vQ[0] = FQ + .5, vQ[1] = LQ + 1.275, vQ[2] = DQ + .5, rQ.forEach(((FQ, wQ) => {
            oQ.pending[wQ] += FQ.perSecond * kQ * qQ;
            const LQ = Math.floor(oQ.pending[wQ]);
            LQ > 0 && this.emit(QQ, wQ, vQ, LQ) && (oQ.pending[wQ] -= LQ)
          }))
        }
      }
      dispose(QQ) {
        for (const wQ of this.smokes) UQ(QQ, wQ);
        this.smokes = [];
        for (const wQ of null !== (FQ = this.puffers) && void 0 !== FQ ? FQ : []) {
          var FQ;
          wQ.dispose()
        }
        this.puffers = null
      }
      emit(QQ, FQ, wQ, LQ) {
        return this.puffers ??= rQ.map((QQ => {
          let {
            style: FQ,
            perSecond: wQ
          } = QQ;
          const LQ = (FQ.count / .3 + wQ) * FQ.life[1];
          return new cQ.g(FQ, Math.ceil(4 * LQ), sQ)
        })), this.puffers[FQ].emit(QQ, wQ, this.renderFrame, LQ)
      }
    }

    function UQ(QQ, FQ) {
      null !== FQ.fire && (QQ.disposeGameMesh(FQ.fire), FQ.fire = null)
    }

    function NQ() {
      let QQ;
      const FQ = new IQ;
      return {
        onCreate(FQ) {
          QQ = FQ
        },
        onReceivedMessageFromServer(wQ, LQ) {
          wQ === DQ.F && FQ.start(QQ, LQ)
        },
        onAfterRender(wQ) {
          FQ.onAfterRender(QQ, wQ)
        },
        onClose() {
          FQ.dispose(QQ)
        }
      }
    }

    function TQ(QQ, FQ, wQ, LQ) {
      return {
        dialogue: pQ(LQ.localPlayerId),
        fishing: eQ(LQ.localPlayerId),
        furnaceSmoke: NQ(),
        ironChest: qQ()
      }
    }

    function KQ(QQ, FQ) {
      for (const qQ of [QQ, ...null !== FQ && void 0 !== FQ ? FQ : []]) try {
        var wQ;
        null === qQ || void 0 === qQ || null === (wQ = qQ.onClose) || void 0 === wQ || wQ.call(qQ)
      } catch (LQ) {
        console.error("Error in client onClose callback", LQ)
      }
    }
  },
  38678: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ,
      g: () => oQ
    });
    const LQ = 1 / .6,
      qQ = {
        kind: "smokePuff"
      };
    class oQ {
      constructor(QQ, FQ, wQ) {
        this.style = QQ, this.MH = FQ, this.half = wQ, this.particles = null, this.lastFrame = -1
      }
      emit(QQ, FQ, wQ) {
        let oQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return wQ !== this.lastFrame && (this.lastFrame = wQ, this.particles || (this.particles = QQ.createParticles(function(QQ, FQ) {
          const [
            [wQ, oQ, DQ],
            [kQ, vQ, mQ]
          ] = QQ.colours;
          return {
            texture: QQ.soft ? qQ : "square_particle",
            MH: FQ,
            minLifeTime: QQ.life[0] / LQ,
            maxLifeTime: QQ.life[1] / LQ,
            minEmitPower: QQ.power[0] * LQ,
            maxEmitPower: QQ.power[1] * LQ,
            minSize: QQ.size[0],
            maxSize: QQ.size[1],
            emitRate: 0,
            gravity: [0, QQ.lift * LQ * LQ, 0],
            dir1: [-QQ.spread, 1, -QQ.spread],
            dir2: [QQ.spread, 1, QQ.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wQ, oQ, DQ, QQ.alpha],
              maxColor: [kQ, vQ, mQ, QQ.alpha]
            }, {
              timeFraction: 1,
              minColor: [wQ, oQ, DQ, 0],
              maxColor: [kQ, vQ, mQ, 0]
            }],
            blendMode: QQ.blendMode
          }
        }(this.style, this.MH), {
          pos: FQ,
          half: this.half
        })), this.particles.moveTo(FQ, this.half), this.particles.emit(oQ), !0)
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.stop(), this.particles = null
      }
    }
  },
  4686: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ,
      d: () => LQ,
      f: () => oQ,
      i: () => vQ,
      k: () => DQ
    });
    const LQ = ["sine", "triangle", "square", "sawtooth"],
      qQ = 55,
      oQ = {
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

    function DQ(QQ) {
      return "string" !== typeof QQ ? QQ : Object.hasOwn(oQ, QQ) ? oQ[QQ] : null
    }

    function kQ(QQ, FQ, wQ) {
      return Math.min(wQ, Math.max(FQ, QQ))
    }

    function vQ(QQ) {
      const FQ = kQ(QQ.durationMs, 10, 500),
        wQ = kQ(QQ.attackMs, 0, FQ),
        {
          intonation: qQ
        } = QQ;
      return {
        waveform: LQ.includes(QQ.waveform) ? QQ.waveform : "sine",
        pitchHz: kQ(QQ.pitchHz, 20, 4e3),
        glideSemitones: kQ(QQ.glideSemitones, -24, 24),
        durationMs: FQ,
        attackMs: wQ,
        releaseMs: kQ(QQ.releaseMs, 0, FQ - wQ),
        lowpassHz: null === QQ.lowpassHz ? null : kQ(QQ.lowpassHz, 20, 2e4),
        volume: kQ(QQ.volume, 0, 2),
        intonation: {
          variationSemitones: kQ(qQ.variationSemitones, 0, 6),
          declineSemitones: kQ(qQ.declineSemitones, 0, 12),
          questionRiseSemitones: kQ(qQ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: kQ(qQ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: kQ(QQ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);