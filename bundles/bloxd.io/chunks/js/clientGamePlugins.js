export const id = 27;
export const ids = [27];
export const modules = {
  4806: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => GT,
      e: () => eT
    });
    var lT = cT(4813),
      MT = cT(328);
    const KT = 120,
      OT = 260,
      yT = 1.15,
      fT = 1.2,
      xT = 2,
      IT = 1.08,
      AT = .8,
      CT = .95,
      jT = 8,
      vT = "[\"')\\]\u300d\u300f\uff09]*",
      tT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${vT}$`),
      hT = new RegExp(`[?\uff1f]${vT}$`),
      NT = new RegExp(`[!\uff01]${vT}$`),
      QT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      ST = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      DT = new RegExp(`[${ST}]`),
      aT = new RegExp(`[${ST}]|[^${ST}]+`, "g"),
      FT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function rT(TT) {
      let kT = 2166136261;
      for (let cT = 0; cT < TT.length; cT++) kT ^= TT.charCodeAt(cT), kT = Math.imul(kT, 16777619);
      return (kT >>> 0) / 4294967295 * 2 - 1
    }

    function PT(TT) {
      var kT;
      if (DT.test(TT)) return 1;
      const cT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        lT = cT.replace(/[^0-9]/g, "");
      if (lT.length > 0 && !/\p{L}/u.test(cT)) return Math.min(lT.length, 4);
      const MT = null !== (kT = cT.match(FT)) && void 0 !== kT ? kT : [];
      if (0 === MT.length) {
        var KT, OT;
        const TT = null !== (KT = null === (OT = cT.match(/\p{L}/gu)) || void 0 === OT ? void 0 : OT.length) && void 0 !== KT ? KT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), jT)
      }
      const yT = cT.replace(/[^\p{L}]/gu, ""),
        fT = MT.length > 1 && "e" === MT.at(-1) && yT.endsWith("e") && !yT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(MT.length - (fT ? 1 : 0), jT)
    }

    function wT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function mT(TT) {
      const kT = TT.replace(/[^\p{L}]/gu, "");
      return kT.length >= 2 && kT === kT.toUpperCase() && kT !== kT.toLowerCase()
    }

    function bT(TT, kT) {
      var cT;
      const jT = kT && (0, lT.j)(kT),
        vT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.syllableMs) && void 0 !== cT ? cT : lT.b,
        ST = function(TT) {
          const kT = [];
          for (const lT of (0, MT.Pb)(TT))
            if ("string" === typeof lT)
              for (const TT of lT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  kT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!DT.test(TT)) {
                  kT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let lT = !0;
                for (const MT of null !== (cT = TT.match(aT)) && void 0 !== cT ? cT : []) {
                  var cT;
                  const TT = kT.at(-1);
                  lT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || DT.test(MT) || /[\p{L}\p{N}]/u.test(MT) ? (lT || kT.push({
                    kind: "space",
                    text: "\u200b"
                  }), kT.push({
                    kind: "word",
                    text: MT,
                    delayMs: 0
                  }), lT = !1) : TT.text += MT
                }
              } else kT.push({
                kind: "icon",
                text: lT.icon,
                delayMs: 0
              });
          return kT
        }(TT),
        FT = [];
      let bT = [];
      for (const lT of ST) "space" !== lT.kind && (bT.push(lT), tT.test(lT.text) && (FT.push(bT), bT = []));
      FT.push(bT);
      const zT = [];
      let JT = 0;
      for (const lT of FT) {
        var oT, HT;
        const TT = null !== (oT = null === (HT = lT.at(-1)) || void 0 === HT ? void 0 : HT.text) && void 0 !== oT ? oT : "",
          kT = hT.test(TT),
          cT = NT.test(TT),
          MT = lT.map((TT => "word" === TT.kind ? PT(TT.text) : 1)),
          ST = MT.findLastIndex((TT => TT > 0));
        for (const [hT, NT] of lT.entries()) {
          const TT = "word" === NT.kind,
            lT = MT[hT];
          NT.delayMs = JT;
          for (let MT = 0; jT && MT < lT; MT++) {
            const {
              intonation: KT
            } = jT;
            let OT = ST > 0 ? -KT.declineSemitones * (hT / ST) : 0;
            OT += rT(`${wT(NT.text)}|${MT}`) * KT.variationSemitones;
            const tT = Math.min(1, KT.variationSemitones);
            let QT = jT.glideSemitones,
              DT = 1;
            cT && (OT += KT.exclaimLiftSemitones, DT *= yT), kT && hT === ST && (OT += KT.questionRiseSemitones * (lT > 1 ? .5 + .5 * MT / (lT - 1) : 1), MT === lT - 1 && (QT = Math.abs(QT) + KT.questionRiseSemitones / 2)), TT && mT(NT.text) && (OT += xT * tT, DT *= fT), lT > 1 && 0 === MT && (OT += AT * tT, DT *= IT), zT.push({
              atMs: JT + MT * vT,
              semitones: OT,
              glideSemitones: QT,
              durationMs: MT < lT - 1 ? Math.min(jT.durationMs, vT * CT) : jT.durationMs,
              level: DT
            })
          }
          JT += lT * vT + (tT.test(NT.text) ? OT : QT.test(NT.text) ? KT : 0)
        }
      }
      return {
        pieces: ST.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: zT
      }
    }
    var zT = cT(1195),
      JT = cT(1261),
      oT = cT(1960);

    function HT(TT) {
      if ("string" === typeof TT) return TT;
      const kT = JT.f.get().getCurrentLanguageCode();
      return (0, zT.p)(kT, TT.translationKey, (0, zT.m)(TT.params, oT.c.shown))
    }

    function eT(TT) {
      const kT = void 0 === TT.voice ? null : (0, lT.m)(TT.voice),
        cT = kT && (0, lT.j)(kT);
      return {
        plan: bT(HT(TT.line), cT),
        synth: cT
      }
    }

    function GT(TT) {
      const kT = [];
      let cT = [];
      for (const [MT, KT] of TT.entries()) {
        var lT;
        "space" === KT.kind && (" " !== KT.text || "icon" !== (null === (lT = TT[MT + 1]) || void 0 === lT ? void 0 : lT.kind)) ? (cT.length > 0 && kT.push(cT), kT.push([KT]), cT = []) : cT.push(KT)
      }
      return cT.length > 0 && kT.push(cT), kT
    }
  },
  4815: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => IT,
      g: () => AT
    });
    var lT = cT(4820),
      MT = cT(31);
    const KT = .25,
      OT = .85,
      yT = .02,
      fT = .01;

    function xT(TT, kT, cT, lT, MT, KT, yT) {
      const {
        waveform: fT,
        pitchHz: xT,
        attackMs: IT,
        releaseMs: AT,
        lowpassHz: CT
      } = cT, jT = MT + lT.durationMs / 1e3, vT = xT * 2 ** (lT.semitones / 12), tT = TT.createOscillator();
      tT.type = fT, tT.frequency.setValueAtTime(vT, MT), tT.frequency.exponentialRampToValueAtTime(vT * 2 ** (lT.glideSemitones / 12), jT);
      const hT = MT + Math.min(IT, lT.durationMs) / 1e3,
        NT = TT.createGain();
      NT.gain.setValueAtTime(0, MT), NT.gain.linearRampToValueAtTime(KT, hT), NT.gain.linearRampToValueAtTime(KT * OT, Math.max(hT, jT - AT / 1e3)), NT.gain.linearRampToValueAtTime(0, jT);
      const QT = [tT];
      if (null !== CT) {
        const kT = TT.createBiquadFilter();
        kT.type = "lowpass", kT.frequency.value = CT, QT.push(kT)
      }
      QT.push(NT, kT);
      for (let OT = 1; OT < QT.length; OT++) QT[OT - 1].connect(QT[OT]);
      return tT.onended = () => {
        for (const TT of QT.slice(0, -1)) TT.disconnect();
        yT()
      }, tT.start(MT), tT.stop(jT), tT
    }

    function IT(TT, kT, cT, lT, MT, OT) {
      if (0 === lT.length) return OT(), () => {};
      const IT = KT * cT.volume * MT,
        AT = TT.createGain();
      AT.connect(kT);
      const CT = TT.currentTime + yT,
        jT = new Set;
      for (const KT of lT) {
        const kT = xT(TT, AT, cT, KT, CT + KT.atMs / 1e3, IT * KT.level, (() => {
          jT.delete(kT), 0 === jT.size && (AT.disconnect(), OT())
        }));
        jT.add(kT)
      }
      return () => {
        const kT = TT.currentTime;
        AT.gain.setTargetAtTime(0, kT, fT);
        for (const TT of jT) try {
          TT.stop(kT + 5 * fT)
        } catch {}
      }
    }

    function AT(TT, kT) {
      var cT;
      const KT = lT.Howler.ctx,
        OT = lT.Howler.masterGain;
      if (!KT || !OT || !MT.e.get("soundOnFromAd")) return () => {};
      const yT = lT.Howler;
      return null === (cT = yT._autoResume) || void 0 === cT || cT.call(yT), IT(KT, OT, TT, kT, MT.e.get("soundVolume"), (() => {
        var TT;
        null === (TT = yT._autoSuspend) || void 0 === TT || TT.call(yT)
      }))
    }
  },
  38946: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      closeClientGame: () => VT,
      createDefaultClientPlugins: () => GT
    });
    var lT = cT(339);

    function MT() {
      let TT;
      return {
        onCreate(kT) {
          TT = kT
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(kT, cT, MT, KT, OT, yT) {
          var fT, xT;
          if ("Iron Chest" !== TT.getMetaInfo(OT).rootName) return;
          if (!TT.hasEffect(kT, "Thief")) return;
          const IT = TT.getBlockData(cT, MT, KT);
          return TT.getPlayerDbId(kT) !== (null === IT || void 0 === IT || null === (fT = IT.persisted) || void 0 === fT || null === (xT = fT.shared) || void 0 === xT ? void 0 : xT.ownerDbId) ? (TT.sendMessage(kT, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: lT.H.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var KT = cT(4235),
      OT = cT(1244);
    const yT = 8.4,
      fT = 1e-4,
      xT = .15,
      IT = .04,
      AT = [.12, .04, .12],
      CT = 26,
      jT = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        DA: 1,
        minLifeTime: fT,
        maxLifeTime: fT,
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
        blendMode: KT.f.Standard
      },
      vT = {
        texture: "bubble",
        mipmaps: !1,
        DA: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: CT,
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
        blendMode: KT.f.Standard
      },
      tT = [0, 0, 0],
      hT = [0, 0, 0];

    function NT(TT) {
      const kT = new Map;
      let cT = null;

      function lT(TT) {
        var kT, cT;
        null === (kT = TT.bubbles) || void 0 === kT || kT.stop(), null === (cT = TT.fish) || void 0 === cT || cT.stop()
      }

      function MT(cT) {
        if (!cT.readDrawnPosition(TT, hT)) {
          for (const TT of kT.values()) {
            var lT;
            null === (lT = TT.bubbles) || void 0 === lT || lT.setEmitRate(0)
          }
          return
        }
        const MT = performance.now();
        for (const [TT, OT] of kT) {
          var KT;
          if (null === (KT = OT.bubbles) || void 0 === KT || KT.setEmitRate(0), !cT.readDrawnPosition(TT, tT)) continue;
          if (!((tT[0] - hT[0]) ** 2 + (tT[1] - hT[1]) ** 2 + (tT[2] - hT[2]) ** 2 < 900)) continue;
          const kT = Math.max(0, OT.biteAt - MT),
            lT = OT.approachDurationMs > 0 ? Math.min(1, 1 - kT / OT.approachDurationMs) : 1,
            fT = (OT.approachDurationMs - kT) / 1e3,
            NT = OT.phase + .25 * Math.sin(1.7 * fT + OT.phase),
            QT = Math.min(OT.approachDurationMs / 3e3 * 2.8, yT) * (1 - lT) * (1 + .15 * Math.sin(2.1 * fT + OT.phase)),
            ST = Math.min(1, 4 * (1 - lT)),
            DT = (.45 * Math.sin(4.1 * fT + OT.phase) + .18 * Math.sin(9.7 * fT + 2 * OT.phase)) * ST,
            aT = tT[0] + Math.cos(NT) * QT - Math.sin(NT) * DT,
            FT = Math.ceil(OT.surfaceY),
            rT = tT[2] + Math.sin(NT) * QT + Math.cos(NT) * DT,
            {
              fishAt: PT,
              bubblesAt: wT
            } = OT;
          PT[0] = wT[0] = aT, PT[1] = FT + xT, wT[1] = FT + IT, PT[2] = wT[2] = rT, OT.fish ??= cT.createParticles(jT, {
            pos: PT
          }), OT.fish.moveTo(PT), OT.fish.emit(1), OT.bubbles ??= cT.createParticles(vT, {
            pos: wT,
            half: AT
          }), OT.bubbles.moveTo(wT), OT.bubbles.setEmitRate(CT + 32 * (.5 + .5 * Math.sin(9 * fT + OT.phase)) ** 4 + 13 * lT)
        }
      }
      return {
        onCreate(TT) {
          cT = TT
        },
        onAfterRender() {
          cT && MT(cT)
        },
        onClose() {
          for (const TT of kT.values()) lT(TT);
          kT.clear(), cT = null
        },
        onReceivedMessageFromServer(TT, cT) {
          if (TT !== OT.x) return;
          const {
            hookId: MT,
            waiting: KT
          } = cT;
          if (KT) kT.has(MT) || kT.set(MT, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + KT.remainingMs,
            approachDurationMs: KT.durationMs,
            surfaceY: KT.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const TT = kT.get(MT);
            TT && lT(TT), kT.delete(MT)
          }
        }
      }
    }
    var QT = cT(4815),
      ST = cT(4806);

    function DT(TT) {
      let kT, cT = null,
        lT = null;
      const MT = () => {
        var TT;
        null === (TT = lT) || void 0 === TT || TT(), lT = null
      };
      return {
        onCreate(lT) {
          kT = lT, cT = kT.getClientOption(TT, "dialogue")
        },
        onAfterRender() {
          if (!kT) return;
          const KT = kT.getClientOption(TT, "dialogue");
          if (KT === cT) return;
          if (cT = KT, MT(), !KT || !1 === KT.animateIn) return;
          const {
            plan: OT,
            synth: yT
          } = (0, ST.e)(KT);
          yT && (lT = (0, QT.g)(yT, OT.blips))
        },
        onClose: MT
      }
    }
    var aT = cT(38952);
    const FT = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      rT = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      PT = [0, 1, 2, 0, 2, 3];

    function wT(TT, kT, cT) {
      var lT;
      let [MT, KT, OT] = kT;
      if (TT.hasPackModel("Furnace")) return null;
      const yT = ((null !== (lT = TT.getMetaInfo(cT).rot) && void 0 !== lT ? lT : 1) - 1) * Math.PI / 2,
        fT = Math.PI + yT,
        xT = Math.cos(fT),
        IT = Math.sin(fT),
        AT = [];
      for (const [vT, tT] of FT) AT.push(vT * xT, tT, -vT * IT);
      const CT = {
          positions: AT,
          indices: PT,
          uvs: rT
        },
        jT = [MT + .5 + .51 * Math.sin(yT), KT + .375, OT + .5 + .51 * Math.cos(yT)];
      return TT.createGameMesh(CT, {
        kind: "furnaceFire"
      }, jT)
    }

    function mT(TT) {
      return Math.floor(TT / 200) % 3
    }

    function bT(TT, kT, cT) {
      TT.setGameMesh(kT, {
        uvOffset: [0, cT / 3]
      })
    }
    const zT = [.12, .025, .12],
      JT = [{
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
          blendMode: KT.f.Standard,
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
          blendMode: KT.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class oT {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(TT, kT) {
        const cT = TT.getBlockId(kT[0], kT[1], kT[2]);
        if ("Furnace" !== TT.getMetaInfo(cT).rootName) return;
        const lT = performance.now();
        let MT = this.smokes.find((TT => TT.pos[0] === kT[0] && TT.pos[1] === kT[1] && TT.pos[2] === kT[2] && TT.Rx === cT));
        if (MT || (MT = {
            pos: [kT[0], kT[1], kT[2]],
            Rx: cT,
            endMs: lT,
            lastBurstMs: -1 / 0,
            pending: new Array(JT.length).fill(0),
            fire: wT(TT, kT, cT)
          }, this.smokes.push(MT), null !== MT.fire && (bT(TT, MT.fire, mT(lT)), this.shownFireFrame = -1)), MT.endMs = lT + 6e3, this.smokes.length > 4) {
          const kT = this.smokes.reduce(((TT, kT) => kT.endMs < TT.endMs ? kT : TT));
          HT(TT, kT), this.smokes.splice(this.smokes.indexOf(kT), 1)
        }
        lT - MT.lastBurstMs >= 300 && (MT.lastBurstMs = lT, JT.forEach(((TT, kT) => {
          MT.pending[kT] += TT.style.count
        })))
      }
      onAfterRender(TT, kT) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const cT = performance.now();
        this.smokes = this.smokes.filter((kT => {
          const [lT, MT, KT] = kT.pos, OT = cT < kT.endMs && TT.getBlockId(lT, MT, KT) === kT.Rx;
          return OT || HT(TT, kT), OT
        }));
        const lT = mT(cT);
        if (lT !== this.shownFireFrame) {
          this.shownFireFrame = lT;
          for (const kT of this.smokes) null !== kT.fire && bT(TT, kT.fire, lT)
        }
        if (!TT.particlesEnabled()) {
          for (const TT of this.smokes) TT.pending.fill(0);
          return
        }
        const MT = Math.min(kT, 250) / 1e3;
        for (const KT of this.smokes) {
          const [kT, lT, OT] = KT.pos;
          if (0 !== TT.getBlockId(kT, lT + 1, OT)) {
            KT.pending.fill(0);
            continue
          }
          const yT = (KT.endMs - cT) / 6e3,
            fT = this.centre;
          fT[0] = kT + .5, fT[1] = lT + 1.275, fT[2] = OT + .5, JT.forEach(((kT, cT) => {
            KT.pending[cT] += kT.perSecond * yT * MT;
            const lT = Math.floor(KT.pending[cT]);
            lT > 0 && this.emit(TT, cT, fT, lT) && (KT.pending[cT] -= lT)
          }))
        }
      }
      dispose(TT) {
        for (const cT of this.smokes) HT(TT, cT);
        this.smokes = [];
        for (const cT of null !== (kT = this.puffers) && void 0 !== kT ? kT : []) {
          var kT;
          cT.dispose()
        }
        this.puffers = null
      }
      emit(TT, kT, cT, lT) {
        return this.puffers ??= JT.map((TT => {
          let {
            style: kT,
            perSecond: cT
          } = TT;
          const lT = (kT.count / .3 + cT) * kT.life[1];
          return new aT.f(kT, Math.ceil(4 * lT), zT)
        })), this.puffers[kT].emit(TT, cT, this.renderFrame, lT)
      }
    }

    function HT(TT, kT) {
      null !== kT.fire && (TT.disposeGameMesh(kT.fire), kT.fire = null)
    }

    function eT() {
      let TT;
      const kT = new oT;
      return {
        onCreate(kT) {
          TT = kT
        },
        onReceivedMessageFromServer(cT, lT) {
          cT === OT.A && kT.start(TT, lT)
        },
        onAfterRender(cT) {
          kT.onAfterRender(TT, cT)
        },
        onClose() {
          kT.dispose(TT)
        }
      }
    }

    function GT(TT, kT, cT, lT) {
      return {
        dialogue: DT(lT.localPlayerId),
        fishing: NT(lT.localPlayerId),
        furnaceSmoke: eT(),
        ironChest: MT()
      }
    }

    function VT(TT, kT) {
      for (const MT of [TT, ...null !== kT && void 0 !== kT ? kT : []]) try {
        var cT;
        null === MT || void 0 === MT || null === (cT = MT.onClose) || void 0 === cT || cT.call(MT)
      } catch (lT) {
        console.error("Error in client onClose callback", lT)
      }
    }
  },
  38952: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT,
      f: () => KT
    });
    const lT = 1 / .6,
      MT = {
        kind: "smokePuff"
      };
    class KT {
      constructor(TT, kT, cT) {
        this.style = TT, this.DA = kT, this.half = cT, this.particles = null, this.lastFrame = -1
      }
      emit(TT, kT, cT) {
        let KT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return cT !== this.lastFrame && (this.lastFrame = cT, this.particles || (this.particles = TT.createParticles(function(TT, kT) {
          const [
            [cT, KT, OT],
            [yT, fT, xT]
          ] = TT.colours;
          return {
            texture: TT.soft ? MT : "square_particle",
            DA: kT,
            minLifeTime: TT.life[0] / lT,
            maxLifeTime: TT.life[1] / lT,
            minEmitPower: TT.power[0] * lT,
            maxEmitPower: TT.power[1] * lT,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            emitRate: 0,
            gravity: [0, TT.lift * lT * lT, 0],
            dir1: [-TT.spread, 1, -TT.spread],
            dir2: [TT.spread, 1, TT.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cT, KT, OT, TT.alpha],
              maxColor: [yT, fT, xT, TT.alpha]
            }, {
              timeFraction: 1,
              minColor: [cT, KT, OT, 0],
              maxColor: [yT, fT, xT, 0]
            }],
            blendMode: TT.blendMode
          }
        }(this.style, this.DA), {
          pos: kT,
          half: this.half
        })), this.particles.moveTo(kT, this.half), this.particles.emit(KT), !0)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
    }
  },
  4813: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => MT,
      f: () => lT,
      h: () => KT,
      j: () => fT,
      m: () => OT
    });
    const lT = ["sine", "triangle", "square", "sawtooth"],
      MT = 55,
      KT = {
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

    function OT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(KT, TT) ? KT[TT] : null
    }

    function yT(TT, kT, cT) {
      return Math.min(cT, Math.max(kT, TT))
    }

    function fT(TT) {
      const kT = yT(TT.durationMs, 10, 500),
        cT = yT(TT.attackMs, 0, kT),
        {
          intonation: MT
        } = TT;
      return {
        waveform: lT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: yT(TT.pitchHz, 20, 4e3),
        glideSemitones: yT(TT.glideSemitones, -24, 24),
        durationMs: kT,
        attackMs: cT,
        releaseMs: yT(TT.releaseMs, 0, kT - cT),
        lowpassHz: null === TT.lowpassHz ? null : yT(TT.lowpassHz, 20, 2e4),
        volume: yT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: yT(MT.variationSemitones, 0, 6),
          declineSemitones: yT(MT.declineSemitones, 0, 12),
          questionRiseSemitones: yT(MT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: yT(MT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: yT(TT.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);