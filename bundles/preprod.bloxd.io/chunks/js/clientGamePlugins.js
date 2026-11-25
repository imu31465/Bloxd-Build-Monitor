export const id = 28;
export const ids = [28];
export const modules = {
  5187: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => EQ,
      f: () => RQ
    });
    var wQ = XQ(5196),
      qQ = XQ(382);
    const TQ = 120,
      zQ = 260,
      sQ = 1.15,
      FQ = 1.2,
      PQ = 2,
      gQ = 1.08,
      JQ = .8,
      rQ = .95,
      IQ = 8,
      jQ = "[\"')\\]\u300d\u300f\uff09]*",
      BQ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jQ}$`),
      yQ = new RegExp(`[?\uff1f]${jQ}$`),
      VQ = new RegExp(`[!\uff01]${jQ}$`),
      DQ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      pQ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      GQ = new RegExp(`[${pQ}]`),
      UQ = new RegExp(`[${pQ}]|[^${pQ}]+`, "g"),
      bQ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function vQ(QQ) {
      let WQ = 2166136261;
      for (let XQ = 0; XQ < QQ.length; XQ++) WQ ^= QQ.charCodeAt(XQ), WQ = Math.imul(WQ, 16777619);
      return (WQ >>> 0) / 4294967295 * 2 - 1
    }

    function dQ(QQ) {
      var WQ;
      if (GQ.test(QQ)) return 1;
      const XQ = QQ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wQ = XQ.replace(/[^0-9]/g, "");
      if (wQ.length > 0 && !/\p{L}/u.test(XQ)) return Math.min(wQ.length, 4);
      const qQ = null !== (WQ = XQ.match(bQ)) && void 0 !== WQ ? WQ : [];
      if (0 === qQ.length) {
        var TQ, zQ;
        const QQ = null !== (TQ = null === (zQ = XQ.match(/\p{L}/gu)) || void 0 === zQ ? void 0 : zQ.length) && void 0 !== TQ ? TQ : 0;
        return 0 === QQ ? 0 : Math.min(Math.max(1, Math.round(QQ / 2.5)), IQ)
      }
      const sQ = XQ.replace(/[^\p{L}]/gu, ""),
        FQ = qQ.length > 1 && "e" === qQ.at(-1) && sQ.endsWith("e") && !sQ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(QQ.replace(/[^\p{L}]/gu, ""));
      return Math.min(qQ.length - (FQ ? 1 : 0), IQ)
    }

    function HQ(QQ) {
      return QQ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function aQ(QQ) {
      const WQ = QQ.replace(/[^\p{L}]/gu, "");
      return WQ.length >= 2 && WQ === WQ.toUpperCase() && WQ !== WQ.toLowerCase()
    }

    function lQ(QQ, WQ) {
      var XQ;
      const IQ = WQ && (0, wQ.l)(WQ),
        jQ = null !== (XQ = null === IQ || void 0 === IQ ? void 0 : IQ.syllableMs) && void 0 !== XQ ? XQ : wQ.d,
        pQ = function(QQ) {
          const WQ = [];
          for (const wQ of (0, qQ.gc)(QQ))
            if ("string" === typeof wQ)
              for (const QQ of wQ.split(/(\s+)/)) {
                if ("" === QQ) continue;
                if (/^\s+$/.test(QQ)) {
                  WQ.push({
                    kind: "space",
                    text: QQ
                  });
                  continue
                }
                if (!GQ.test(QQ)) {
                  WQ.push({
                    kind: "word",
                    text: QQ,
                    delayMs: 0
                  });
                  continue
                }
                let wQ = !0;
                for (const qQ of null !== (XQ = QQ.match(UQ)) && void 0 !== XQ ? XQ : []) {
                  var XQ;
                  const QQ = WQ.at(-1);
                  wQ || "word" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || GQ.test(qQ) || /[\p{L}\p{N}]/u.test(qQ) ? (wQ || WQ.push({
                    kind: "space",
                    text: "\u200b"
                  }), WQ.push({
                    kind: "word",
                    text: qQ,
                    delayMs: 0
                  }), wQ = !1) : QQ.text += qQ
                }
              } else WQ.push({
                kind: "icon",
                text: wQ.icon,
                delayMs: 0
              });
          return WQ
        }(QQ),
        bQ = [];
      let lQ = [];
      for (const wQ of pQ) "space" !== wQ.kind && (lQ.push(wQ), BQ.test(wQ.text) && (bQ.push(lQ), lQ = []));
      bQ.push(lQ);
      const hQ = [];
      let iQ = 0;
      for (const wQ of bQ) {
        var cQ, AQ;
        const QQ = null !== (cQ = null === (AQ = wQ.at(-1)) || void 0 === AQ ? void 0 : AQ.text) && void 0 !== cQ ? cQ : "",
          WQ = yQ.test(QQ),
          XQ = VQ.test(QQ),
          qQ = wQ.map((QQ => "word" === QQ.kind ? dQ(QQ.text) : 1)),
          pQ = qQ.findLastIndex((QQ => QQ > 0));
        for (const [yQ, VQ] of wQ.entries()) {
          const QQ = "word" === VQ.kind,
            wQ = qQ[yQ];
          VQ.delayMs = iQ;
          for (let qQ = 0; IQ && qQ < wQ; qQ++) {
            const {
              intonation: TQ
            } = IQ;
            let zQ = pQ > 0 ? -TQ.declineSemitones * (yQ / pQ) : 0;
            zQ += vQ(`${HQ(VQ.text)}|${qQ}`) * TQ.variationSemitones;
            const BQ = Math.min(1, TQ.variationSemitones);
            let DQ = IQ.glideSemitones,
              GQ = 1;
            XQ && (zQ += TQ.exclaimLiftSemitones, GQ *= sQ), WQ && yQ === pQ && (zQ += TQ.questionRiseSemitones * (wQ > 1 ? .5 + .5 * qQ / (wQ - 1) : 1), qQ === wQ - 1 && (DQ = Math.abs(DQ) + TQ.questionRiseSemitones / 2)), QQ && aQ(VQ.text) && (zQ += PQ * BQ, GQ *= FQ), wQ > 1 && 0 === qQ && (zQ += JQ * BQ, GQ *= gQ), hQ.push({
              atMs: iQ + qQ * jQ,
              semitones: zQ,
              glideSemitones: DQ,
              durationMs: qQ < wQ - 1 ? Math.min(IQ.durationMs, jQ * rQ) : IQ.durationMs,
              level: GQ
            })
          }
          iQ += wQ * jQ + (BQ.test(VQ.text) ? zQ : DQ.test(VQ.text) ? TQ : 0)
        }
      }
      return {
        pieces: pQ.map((QQ => "space" === QQ.kind ? QQ : "icon" === QQ.kind ? {
          kind: "icon",
          icon: QQ.text,
          delayMs: QQ.delayMs
        } : {
          kind: "word",
          text: QQ.text,
          delayMs: QQ.delayMs
        })),
        blips: hQ
      }
    }
    var hQ = XQ(1226),
      iQ = XQ(1285),
      cQ = XQ(2010);

    function AQ(QQ) {
      if ("string" === typeof QQ) return QQ;
      const WQ = iQ.h.get().getCurrentLanguageCode();
      return (0, hQ.t)(WQ, QQ.translationKey, (0, hQ.r)(QQ.params, cQ.e.shown))
    }

    function RQ(QQ) {
      const WQ = void 0 === QQ.voice ? null : (0, wQ.p)(QQ.voice),
        XQ = WQ && (0, wQ.l)(WQ);
      return {
        plan: lQ(AQ(QQ.line), XQ),
        synth: XQ
      }
    }

    function EQ(QQ) {
      const WQ = [];
      let XQ = [];
      for (const [qQ, TQ] of QQ.entries()) {
        var wQ;
        "space" === TQ.kind && (" " !== TQ.text || "icon" !== (null === (wQ = QQ[qQ + 1]) || void 0 === wQ ? void 0 : wQ.kind)) ? (XQ.length > 0 && WQ.push(XQ), WQ.push([TQ]), XQ = []) : XQ.push(TQ)
      }
      return XQ.length > 0 && WQ.push(XQ), WQ
    }
  },
  5205: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      g: () => JQ
    });
    var wQ = XQ(5212),
      qQ = XQ(26);
    const TQ = .25,
      zQ = .85,
      sQ = .02,
      FQ = .01;

    function PQ(QQ, WQ, XQ, wQ, qQ, TQ, sQ) {
      const {
        waveform: FQ,
        pitchHz: PQ,
        attackMs: gQ,
        releaseMs: JQ,
        lowpassHz: rQ
      } = XQ, IQ = qQ + wQ.durationMs / 1e3, jQ = PQ * 2 ** (wQ.semitones / 12), BQ = QQ.createOscillator();
      BQ.type = FQ, BQ.frequency.setValueAtTime(jQ, qQ), BQ.frequency.exponentialRampToValueAtTime(jQ * 2 ** (wQ.glideSemitones / 12), IQ);
      const yQ = qQ + Math.min(gQ, wQ.durationMs) / 1e3,
        VQ = QQ.createGain();
      VQ.gain.setValueAtTime(0, qQ), VQ.gain.linearRampToValueAtTime(TQ, yQ), VQ.gain.linearRampToValueAtTime(TQ * zQ, Math.max(yQ, IQ - JQ / 1e3)), VQ.gain.linearRampToValueAtTime(0, IQ);
      const DQ = [BQ];
      if (null !== rQ) {
        const WQ = QQ.createBiquadFilter();
        WQ.type = "lowpass", WQ.frequency.value = rQ, DQ.push(WQ)
      }
      DQ.push(VQ, WQ);
      for (let zQ = 1; zQ < DQ.length; zQ++) DQ[zQ - 1].connect(DQ[zQ]);
      return BQ.onended = () => {
        for (const QQ of DQ.slice(0, -1)) QQ.disconnect();
        sQ()
      }, BQ.start(qQ), BQ.stop(IQ), BQ
    }

    function gQ(QQ, WQ, XQ, wQ, qQ, zQ) {
      if (0 === wQ.length) return zQ(), () => {};
      const gQ = TQ * XQ.volume * qQ,
        JQ = QQ.createGain();
      JQ.connect(WQ);
      const rQ = QQ.currentTime + sQ,
        IQ = new Set;
      for (const TQ of wQ) {
        const WQ = PQ(QQ, JQ, XQ, TQ, rQ + TQ.atMs / 1e3, gQ * TQ.level, (() => {
          IQ.delete(WQ), 0 === IQ.size && (JQ.disconnect(), zQ())
        }));
        IQ.add(WQ)
      }
      return () => {
        const WQ = QQ.currentTime;
        JQ.gain.setTargetAtTime(0, WQ, FQ);
        for (const QQ of IQ) try {
          QQ.stop(WQ + 5 * FQ)
        } catch {}
      }
    }

    function JQ(QQ, WQ) {
      var XQ;
      const TQ = wQ.Howler.ctx,
        zQ = wQ.Howler.masterGain;
      if (!TQ || !zQ || !qQ.b.get("soundOnFromAd")) return () => {};
      const sQ = wQ.Howler;
      return null === (XQ = sQ._autoResume) || void 0 === XQ || XQ.call(sQ), gQ(TQ, zQ, QQ, WQ, qQ.b.get("soundVolume"), (() => {
        var QQ;
        null === (QQ = sQ._autoSuspend) || void 0 === QQ || QQ.call(sQ)
      }))
    }
  },
  39421: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      closeClientGame: () => uQ,
      createDefaultClientPlugins: () => CQ
    });
    var wQ = XQ(402);

    function qQ() {
      let QQ;
      return {
        onCreate(WQ) {
          QQ = WQ
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(WQ, XQ, qQ, TQ, zQ, sQ) {
          var FQ, PQ;
          if ("Iron Chest" !== QQ.getMetaInfo(zQ).rootName) return;
          if (!QQ.hasEffect(WQ, "Thief")) return;
          const gQ = QQ.getBlockData(XQ, qQ, TQ);
          return QQ.getPlayerDbId(WQ) !== (null === gQ || void 0 === gQ || null === (FQ = gQ.persisted) || void 0 === FQ || null === (PQ = FQ.shared) || void 0 === PQ ? void 0 : PQ.ownerDbId) ? (QQ.sendMessage(WQ, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: wQ.N.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var TQ = XQ(4534),
      zQ = XQ(1273);
    const sQ = 8.4,
      FQ = 1e-4,
      PQ = .15,
      gQ = .04,
      JQ = [.12, .04, .12],
      rQ = 26,
      IQ = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        yJ: 1,
        minLifeTime: FQ,
        maxLifeTime: FQ,
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
        blendMode: TQ.c.Standard
      },
      jQ = {
        texture: "bubble",
        mipmaps: !1,
        yJ: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: rQ,
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
        blendMode: TQ.c.Standard
      },
      BQ = [0, 0, 0],
      yQ = [0, 0, 0];

    function VQ(QQ) {
      const WQ = new Map;
      let XQ = null;

      function wQ(QQ) {
        var WQ, XQ;
        null === (WQ = QQ.bubbles) || void 0 === WQ || WQ.stop(), null === (XQ = QQ.fish) || void 0 === XQ || XQ.stop()
      }

      function qQ(XQ) {
        if (!XQ.readDrawnPosition(QQ, yQ)) {
          for (const QQ of WQ.values()) {
            var wQ;
            null === (wQ = QQ.bubbles) || void 0 === wQ || wQ.setEmitRate(0)
          }
          return
        }
        const qQ = performance.now();
        for (const [QQ, zQ] of WQ) {
          var TQ;
          if (null === (TQ = zQ.bubbles) || void 0 === TQ || TQ.setEmitRate(0), !XQ.readDrawnPosition(QQ, BQ)) continue;
          if (!((BQ[0] - yQ[0]) ** 2 + (BQ[1] - yQ[1]) ** 2 + (BQ[2] - yQ[2]) ** 2 < 900)) continue;
          const WQ = Math.max(0, zQ.biteAt - qQ),
            wQ = zQ.approachDurationMs > 0 ? Math.min(1, 1 - WQ / zQ.approachDurationMs) : 1,
            FQ = (zQ.approachDurationMs - WQ) / 1e3,
            VQ = zQ.phase + .25 * Math.sin(1.7 * FQ + zQ.phase),
            DQ = Math.min(zQ.approachDurationMs / 3e3 * 2.8, sQ) * (1 - wQ) * (1 + .15 * Math.sin(2.1 * FQ + zQ.phase)),
            pQ = Math.min(1, 4 * (1 - wQ)),
            GQ = (.45 * Math.sin(4.1 * FQ + zQ.phase) + .18 * Math.sin(9.7 * FQ + 2 * zQ.phase)) * pQ,
            UQ = BQ[0] + Math.cos(VQ) * DQ - Math.sin(VQ) * GQ,
            bQ = Math.ceil(zQ.surfaceY),
            vQ = BQ[2] + Math.sin(VQ) * DQ + Math.cos(VQ) * GQ,
            {
              fishAt: dQ,
              bubblesAt: HQ
            } = zQ;
          dQ[0] = HQ[0] = UQ, dQ[1] = bQ + PQ, HQ[1] = bQ + gQ, dQ[2] = HQ[2] = vQ, zQ.fish ??= XQ.createParticles(IQ, {
            pos: dQ
          }), zQ.fish.moveTo(dQ), zQ.fish.emit(1), zQ.bubbles ??= XQ.createParticles(jQ, {
            pos: HQ,
            half: JQ
          }), zQ.bubbles.moveTo(HQ), zQ.bubbles.setEmitRate(rQ + 32 * (.5 + .5 * Math.sin(9 * FQ + zQ.phase)) ** 4 + 13 * wQ)
        }
      }
      return {
        onCreate(QQ) {
          XQ = QQ
        },
        onAfterRender() {
          XQ && qQ(XQ)
        },
        onClose() {
          for (const QQ of WQ.values()) wQ(QQ);
          WQ.clear(), XQ = null
        },
        onReceivedMessageFromServer(QQ, XQ) {
          if (QQ !== zQ.D) return;
          const {
            hookId: qQ,
            waiting: TQ
          } = XQ;
          if (TQ) WQ.has(qQ) || WQ.set(qQ, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + TQ.remainingMs,
            approachDurationMs: TQ.durationMs,
            surfaceY: TQ.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const QQ = WQ.get(qQ);
            QQ && wQ(QQ), WQ.delete(qQ)
          }
        }
      }
    }
    var DQ = XQ(5205),
      pQ = XQ(5187);

    function GQ(QQ) {
      let WQ, XQ = null,
        wQ = null;
      const qQ = () => {
        var QQ;
        null === (QQ = wQ) || void 0 === QQ || QQ(), wQ = null
      };
      return {
        onCreate(wQ) {
          WQ = wQ, XQ = WQ.getClientOption(QQ, "dialogue")
        },
        onAfterRender() {
          if (!WQ) return;
          const TQ = WQ.getClientOption(QQ, "dialogue");
          if (TQ === XQ) return;
          if (XQ = TQ, qQ(), !TQ || !1 === TQ.animateIn) return;
          const {
            plan: zQ,
            synth: sQ
          } = (0, pQ.f)(TQ);
          sQ && (wQ = (0, DQ.g)(sQ, zQ.blips))
        },
        onClose: qQ
      }
    }
    var UQ = XQ(39427);
    const bQ = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      vQ = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      dQ = [0, 1, 2, 0, 2, 3];

    function HQ(QQ, WQ, XQ) {
      var wQ;
      let [qQ, TQ, zQ] = WQ;
      if (QQ.hasPackModel("Furnace")) return null;
      const sQ = ((null !== (wQ = QQ.getMetaInfo(XQ).rot) && void 0 !== wQ ? wQ : 1) - 1) * Math.PI / 2,
        FQ = Math.PI + sQ,
        PQ = Math.cos(FQ),
        gQ = Math.sin(FQ),
        JQ = [];
      for (const [jQ, BQ] of bQ) JQ.push(jQ * PQ, BQ, -jQ * gQ);
      const rQ = {
          positions: JQ,
          indices: dQ,
          uvs: vQ
        },
        IQ = [qQ + .5 + .51 * Math.sin(sQ), TQ + .375, zQ + .5 + .51 * Math.cos(sQ)];
      return QQ.createGameMesh(rQ, {
        kind: "furnaceFire"
      }, IQ)
    }

    function aQ(QQ) {
      return Math.floor(QQ / 200) % 3
    }

    function lQ(QQ, WQ, XQ) {
      QQ.setGameMesh(WQ, {
        uvOffset: [0, XQ / 3]
      })
    }
    const hQ = [.12, .025, .12],
      iQ = [{
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
          blendMode: TQ.c.Standard,
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
          blendMode: TQ.c.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class cQ {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(QQ, WQ) {
        const XQ = QQ.getBlockId(WQ[0], WQ[1], WQ[2]);
        if ("Furnace" !== QQ.getMetaInfo(XQ).rootName) return;
        const wQ = performance.now();
        let qQ = this.smokes.find((QQ => QQ.pos[0] === WQ[0] && QQ.pos[1] === WQ[1] && QQ.pos[2] === WQ[2] && QQ.ez === XQ));
        if (qQ || (qQ = {
            pos: [WQ[0], WQ[1], WQ[2]],
            ez: XQ,
            endMs: wQ,
            lastBurstMs: -1 / 0,
            pending: new Array(iQ.length).fill(0),
            fire: HQ(QQ, WQ, XQ)
          }, this.smokes.push(qQ), null !== qQ.fire && (lQ(QQ, qQ.fire, aQ(wQ)), this.shownFireFrame = -1)), qQ.endMs = wQ + 6e3, this.smokes.length > 4) {
          const WQ = this.smokes.reduce(((QQ, WQ) => WQ.endMs < QQ.endMs ? WQ : QQ));
          AQ(QQ, WQ), this.smokes.splice(this.smokes.indexOf(WQ), 1)
        }
        wQ - qQ.lastBurstMs >= 300 && (qQ.lastBurstMs = wQ, iQ.forEach(((QQ, WQ) => {
          qQ.pending[WQ] += QQ.style.count
        })))
      }
      onAfterRender(QQ, WQ) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const XQ = performance.now();
        this.smokes = this.smokes.filter((WQ => {
          const [wQ, qQ, TQ] = WQ.pos, zQ = XQ < WQ.endMs && QQ.getBlockId(wQ, qQ, TQ) === WQ.ez;
          return zQ || AQ(QQ, WQ), zQ
        }));
        const wQ = aQ(XQ);
        if (wQ !== this.shownFireFrame) {
          this.shownFireFrame = wQ;
          for (const WQ of this.smokes) null !== WQ.fire && lQ(QQ, WQ.fire, wQ)
        }
        if (!QQ.particlesEnabled()) {
          for (const QQ of this.smokes) QQ.pending.fill(0);
          return
        }
        const qQ = Math.min(WQ, 250) / 1e3;
        for (const TQ of this.smokes) {
          const [WQ, wQ, zQ] = TQ.pos;
          if (0 !== QQ.getBlockId(WQ, wQ + 1, zQ)) {
            TQ.pending.fill(0);
            continue
          }
          const sQ = (TQ.endMs - XQ) / 6e3,
            FQ = this.centre;
          FQ[0] = WQ + .5, FQ[1] = wQ + 1.275, FQ[2] = zQ + .5, iQ.forEach(((WQ, XQ) => {
            TQ.pending[XQ] += WQ.perSecond * sQ * qQ;
            const wQ = Math.floor(TQ.pending[XQ]);
            wQ > 0 && this.emit(QQ, XQ, FQ, wQ) && (TQ.pending[XQ] -= wQ)
          }))
        }
      }
      dispose(QQ) {
        for (const XQ of this.smokes) AQ(QQ, XQ);
        this.smokes = [];
        for (const XQ of null !== (WQ = this.puffers) && void 0 !== WQ ? WQ : []) {
          var WQ;
          XQ.dispose()
        }
        this.puffers = null
      }
      emit(QQ, WQ, XQ, wQ) {
        return this.puffers ??= iQ.map((QQ => {
          let {
            style: WQ,
            perSecond: XQ
          } = QQ;
          const wQ = (WQ.count / .3 + XQ) * WQ.life[1];
          return new UQ.e(WQ, Math.ceil(4 * wQ), hQ)
        })), this.puffers[WQ].emit(QQ, XQ, this.renderFrame, wQ)
      }
    }

    function AQ(QQ, WQ) {
      null !== WQ.fire && (QQ.disposeGameMesh(WQ.fire), WQ.fire = null)
    }

    function RQ() {
      let QQ;
      const WQ = new cQ;
      return {
        onCreate(WQ) {
          QQ = WQ
        },
        onReceivedMessageFromServer(XQ, wQ) {
          XQ === zQ.F && WQ.start(QQ, wQ)
        },
        onAfterRender(XQ) {
          WQ.onAfterRender(QQ, XQ)
        },
        onClose() {
          WQ.dispose(QQ)
        }
      }
    }
    var EQ = XQ(9104);

    function CQ(QQ, WQ, XQ, wQ) {
      return {
        dialogue: GQ(wQ.localPlayerId),
        fishing: VQ(wQ.localPlayerId),
        furnaceSmoke: RQ(),
        ironChest: qQ(),
        localBlockBroken: (0, EQ.c)()
      }
    }

    function uQ(QQ, WQ) {
      for (const qQ of [QQ, ...null !== WQ && void 0 !== WQ ? WQ : []]) try {
        var XQ;
        null === qQ || void 0 === qQ || null === (XQ = qQ.onClose) || void 0 === XQ || XQ.call(qQ)
      } catch (wQ) {
        console.error("Error in client onClose callback", wQ)
      }
    }
  },
  9104: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      g: () => qQ
    });
    var wQ = XQ(31);
    const qQ = "localBlockBroken";

    function TQ() {
      return {
        onPlayerChangeBlock(QQ, WQ, XQ, TQ, zQ, sQ) {
          "Air" === sQ && wQ.k.mB(qQ)
        }
      }
    }
  },
  39427: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ,
      e: () => TQ
    });
    const wQ = 1 / .6,
      qQ = {
        kind: "smokePuff"
      };
    class TQ {
      constructor(QQ, WQ, XQ) {
        this.style = QQ, this.yJ = WQ, this.half = XQ, this.particles = null, this.lastFrame = -1
      }
      emit(QQ, WQ, XQ) {
        let TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return XQ !== this.lastFrame && (this.lastFrame = XQ, this.particles || (this.particles = QQ.createParticles(function(QQ, WQ) {
          const [
            [XQ, TQ, zQ],
            [sQ, FQ, PQ]
          ] = QQ.colours;
          return {
            texture: QQ.soft ? qQ : "square_particle",
            yJ: WQ,
            minLifeTime: QQ.life[0] / wQ,
            maxLifeTime: QQ.life[1] / wQ,
            minEmitPower: QQ.power[0] * wQ,
            maxEmitPower: QQ.power[1] * wQ,
            minSize: QQ.size[0],
            maxSize: QQ.size[1],
            emitRate: 0,
            gravity: [0, QQ.lift * wQ * wQ, 0],
            dir1: [-QQ.spread, 1, -QQ.spread],
            dir2: [QQ.spread, 1, QQ.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [XQ, TQ, zQ, QQ.alpha],
              maxColor: [sQ, FQ, PQ, QQ.alpha]
            }, {
              timeFraction: 1,
              minColor: [XQ, TQ, zQ, 0],
              maxColor: [sQ, FQ, PQ, 0]
            }],
            blendMode: QQ.blendMode
          }
        }(this.style, this.yJ), {
          pos: WQ,
          half: this.half
        })), this.particles.moveTo(WQ, this.half), this.particles.emit(TQ), !0)
      }
      dispose() {
        var QQ;
        null === (QQ = this.particles) || void 0 === QQ || QQ.stop(), this.particles = null
      }
    }
  },
  5196: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => wQ,
      h: () => TQ,
      l: () => FQ,
      p: () => zQ
    });
    const wQ = ["sine", "triangle", "square", "sawtooth"],
      qQ = 55,
      TQ = {
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

    function zQ(QQ) {
      return "string" !== typeof QQ ? QQ : Object.hasOwn(TQ, QQ) ? TQ[QQ] : null
    }

    function sQ(QQ, WQ, XQ) {
      return Math.min(XQ, Math.max(WQ, QQ))
    }

    function FQ(QQ) {
      const WQ = sQ(QQ.durationMs, 10, 500),
        XQ = sQ(QQ.attackMs, 0, WQ),
        {
          intonation: qQ
        } = QQ;
      return {
        waveform: wQ.includes(QQ.waveform) ? QQ.waveform : "sine",
        pitchHz: sQ(QQ.pitchHz, 20, 4e3),
        glideSemitones: sQ(QQ.glideSemitones, -24, 24),
        durationMs: WQ,
        attackMs: XQ,
        releaseMs: sQ(QQ.releaseMs, 0, WQ - XQ),
        lowpassHz: null === QQ.lowpassHz ? null : sQ(QQ.lowpassHz, 20, 2e4),
        volume: sQ(QQ.volume, 0, 2),
        intonation: {
          variationSemitones: sQ(qQ.variationSemitones, 0, 6),
          declineSemitones: sQ(qQ.declineSemitones, 0, 12),
          questionRiseSemitones: sQ(qQ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: sQ(qQ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: sQ(QQ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);