export const id = 27;
export const ids = [27];
export const modules = {
  4501: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => rU,
      c: () => VU
    });
    var tU = gU(4503),
      pU = gU(299);
    const EU = 120,
      PU = 260,
      TU = 1.15,
      qU = 1.2,
      KU = 2,
      cU = 1.08,
      GU = .8,
      jU = .95,
      uU = 8,
      CU = "[\"')\\]\u300d\u300f\uff09]*",
      hU = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${CU}$`),
      QU = new RegExp(`[?\uff1f]${CU}$`),
      eU = new RegExp(`[!\uff01]${CU}$`),
      WU = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      fU = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      xU = new RegExp(`[${fU}]`),
      mU = new RegExp(`[${fU}]|[^${fU}]+`, "g"),
      IU = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function JU(UU) {
      let RU = 2166136261;
      for (let gU = 0; gU < UU.length; gU++) RU ^= UU.charCodeAt(gU), RU = Math.imul(RU, 16777619);
      return (RU >>> 0) / 4294967295 * 2 - 1
    }

    function wU(UU) {
      var RU;
      if (xU.test(UU)) return 1;
      const gU = UU.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        tU = gU.replace(/[^0-9]/g, "");
      if (tU.length > 0 && !/\p{L}/u.test(gU)) return Math.min(tU.length, 4);
      const pU = null !== (RU = gU.match(IU)) && void 0 !== RU ? RU : [];
      if (0 === pU.length) {
        var EU, PU;
        const UU = null !== (EU = null === (PU = gU.match(/\p{L}/gu)) || void 0 === PU ? void 0 : PU.length) && void 0 !== EU ? EU : 0;
        return 0 === UU ? 0 : Math.min(Math.max(1, Math.round(UU / 2.5)), uU)
      }
      const TU = gU.replace(/[^\p{L}]/gu, ""),
        qU = pU.length > 1 && "e" === pU.at(-1) && TU.endsWith("e") && !TU.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(UU.replace(/[^\p{L}]/gu, ""));
      return Math.min(pU.length - (qU ? 1 : 0), uU)
    }

    function nU(UU) {
      return UU.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function bU(UU) {
      const RU = UU.replace(/[^\p{L}]/gu, "");
      return RU.length >= 2 && RU === RU.toUpperCase() && RU !== RU.toLowerCase()
    }

    function oU(UU, RU) {
      var gU;
      const uU = RU && (0, tU.k)(RU),
        CU = null !== (gU = null === uU || void 0 === uU ? void 0 : uU.syllableMs) && void 0 !== gU ? gU : tU.c,
        fU = function(UU) {
          const RU = [];
          for (const tU of (0, pU.dc)(UU))
            if ("string" === typeof tU)
              for (const UU of tU.split(/(\s+)/)) {
                if ("" === UU) continue;
                if (/^\s+$/.test(UU)) {
                  RU.push({
                    kind: "space",
                    text: UU
                  });
                  continue
                }
                if (!xU.test(UU)) {
                  RU.push({
                    kind: "word",
                    text: UU,
                    delayMs: 0
                  });
                  continue
                }
                let tU = !0;
                for (const pU of null !== (gU = UU.match(mU)) && void 0 !== gU ? gU : []) {
                  var gU;
                  const UU = RU.at(-1);
                  tU || "word" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || xU.test(pU) || /[\p{L}\p{N}]/u.test(pU) ? (tU || RU.push({
                    kind: "space",
                    text: "\u200b"
                  }), RU.push({
                    kind: "word",
                    text: pU,
                    delayMs: 0
                  }), tU = !1) : UU.text += pU
                }
              } else RU.push({
                kind: "icon",
                text: tU.icon,
                delayMs: 0
              });
          return RU
        }(UU),
        IU = [];
      let oU = [];
      for (const tU of fU) "space" !== tU.kind && (oU.push(tU), hU.test(tU.text) && (IU.push(oU), oU = []));
      IU.push(oU);
      const ZU = [];
      let aU = 0;
      for (const tU of IU) {
        var YU, BU;
        const UU = null !== (YU = null === (BU = tU.at(-1)) || void 0 === BU ? void 0 : BU.text) && void 0 !== YU ? YU : "",
          RU = QU.test(UU),
          gU = eU.test(UU),
          pU = tU.map((UU => "word" === UU.kind ? wU(UU.text) : 1)),
          fU = pU.findLastIndex((UU => UU > 0));
        for (const [QU, eU] of tU.entries()) {
          const UU = "word" === eU.kind,
            tU = pU[QU];
          eU.delayMs = aU;
          for (let pU = 0; uU && pU < tU; pU++) {
            const {
              intonation: EU
            } = uU;
            let PU = fU > 0 ? -EU.declineSemitones * (QU / fU) : 0;
            PU += JU(`${nU(eU.text)}|${pU}`) * EU.variationSemitones;
            const hU = Math.min(1, EU.variationSemitones);
            let WU = uU.glideSemitones,
              xU = 1;
            gU && (PU += EU.exclaimLiftSemitones, xU *= TU), RU && QU === fU && (PU += EU.questionRiseSemitones * (tU > 1 ? .5 + .5 * pU / (tU - 1) : 1), pU === tU - 1 && (WU = Math.abs(WU) + EU.questionRiseSemitones / 2)), UU && bU(eU.text) && (PU += KU * hU, xU *= qU), tU > 1 && 0 === pU && (PU += GU * hU, xU *= cU), ZU.push({
              atMs: aU + pU * CU,
              semitones: PU,
              glideSemitones: WU,
              durationMs: pU < tU - 1 ? Math.min(uU.durationMs, CU * jU) : uU.durationMs,
              level: xU
            })
          }
          aU += tU * CU + (hU.test(eU.text) ? PU : WU.test(eU.text) ? EU : 0)
        }
      }
      return {
        pieces: fU.map((UU => "space" === UU.kind ? UU : "icon" === UU.kind ? {
          kind: "icon",
          icon: UU.text,
          delayMs: UU.delayMs
        } : {
          kind: "word",
          text: UU.text,
          delayMs: UU.delayMs
        })),
        blips: ZU
      }
    }
    var ZU = gU(1181),
      aU = gU(1249),
      YU = gU(1802);

    function BU(UU) {
      if ("string" === typeof UU) return UU;
      const RU = aU.g.get().getCurrentLanguageCode();
      return (0, ZU.s)(RU, UU.translationKey, (0, ZU.r)(UU.params, YU.b.shown))
    }

    function VU(UU) {
      const RU = void 0 === UU.voice ? null : (0, tU.n)(UU.voice),
        gU = RU && (0, tU.k)(RU);
      return {
        plan: oU(BU(UU.line), gU),
        synth: gU
      }
    }

    function rU(UU) {
      const RU = [];
      let gU = [];
      for (const [pU, EU] of UU.entries()) {
        var tU;
        "space" === EU.kind && (" " !== EU.text || "icon" !== (null === (tU = UU[pU + 1]) || void 0 === tU ? void 0 : tU.kind)) ? (gU.length > 0 && RU.push(gU), RU.push([EU]), gU = []) : gU.push(EU)
      }
      return gU.length > 0 && RU.push(gU), RU
    }
  },
  4508: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => cU,
      f: () => GU
    });
    var tU = gU(4512),
      pU = gU(21);
    const EU = .25,
      PU = .85,
      TU = .02,
      qU = .01;

    function KU(UU, RU, gU, tU, pU, EU, TU) {
      const {
        waveform: qU,
        pitchHz: KU,
        attackMs: cU,
        releaseMs: GU,
        lowpassHz: jU
      } = gU, uU = pU + tU.durationMs / 1e3, CU = KU * 2 ** (tU.semitones / 12), hU = UU.createOscillator();
      hU.type = qU, hU.frequency.setValueAtTime(CU, pU), hU.frequency.exponentialRampToValueAtTime(CU * 2 ** (tU.glideSemitones / 12), uU);
      const QU = pU + Math.min(cU, tU.durationMs) / 1e3,
        eU = UU.createGain();
      eU.gain.setValueAtTime(0, pU), eU.gain.linearRampToValueAtTime(EU, QU), eU.gain.linearRampToValueAtTime(EU * PU, Math.max(QU, uU - GU / 1e3)), eU.gain.linearRampToValueAtTime(0, uU);
      const WU = [hU];
      if (null !== jU) {
        const RU = UU.createBiquadFilter();
        RU.type = "lowpass", RU.frequency.value = jU, WU.push(RU)
      }
      WU.push(eU, RU);
      for (let PU = 1; PU < WU.length; PU++) WU[PU - 1].connect(WU[PU]);
      return hU.onended = () => {
        for (const UU of WU.slice(0, -1)) UU.disconnect();
        TU()
      }, hU.start(pU), hU.stop(uU), hU
    }

    function cU(UU, RU, gU, tU, pU, PU) {
      if (0 === tU.length) return PU(), () => {};
      const cU = EU * gU.volume * pU,
        GU = UU.createGain();
      GU.connect(RU);
      const jU = UU.currentTime + TU,
        uU = new Set;
      for (const EU of tU) {
        const RU = KU(UU, GU, gU, EU, jU + EU.atMs / 1e3, cU * EU.level, (() => {
          uU.delete(RU), 0 === uU.size && (GU.disconnect(), PU())
        }));
        uU.add(RU)
      }
      return () => {
        const RU = UU.currentTime;
        GU.gain.setTargetAtTime(0, RU, qU);
        for (const UU of uU) try {
          UU.stop(RU + 5 * qU)
        } catch {}
      }
    }

    function GU(UU, RU) {
      var gU;
      const EU = tU.Howler.ctx,
        PU = tU.Howler.masterGain;
      if (!EU || !PU || !pU.b.get("soundOnFromAd")) return () => {};
      const TU = tU.Howler;
      return null === (gU = TU._autoResume) || void 0 === gU || gU.call(TU), cU(EU, PU, UU, RU, pU.b.get("soundVolume"), (() => {
        var UU;
        null === (UU = TU._autoSuspend) || void 0 === UU || UU.call(TU)
      }))
    }
  },
  38687: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      closeClientGame: () => XU,
      createDefaultClientPlugins: () => rU
    });
    var tU = gU(311);

    function pU() {
      let UU;
      return {
        onCreate(RU) {
          UU = RU
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(RU, gU, pU, EU, PU, TU) {
          var qU, KU;
          if ("Iron Chest" !== UU.getMetaInfo(PU).rootName) return;
          if (!UU.hasEffect(RU, "Thief")) return;
          const cU = UU.getBlockData(gU, pU, EU);
          return UU.getPlayerDbId(RU) !== (null === cU || void 0 === cU || null === (qU = cU.persisted) || void 0 === qU || null === (KU = qU.shared) || void 0 === KU ? void 0 : KU.ownerDbId) ? (UU.sendMessage(RU, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: tU.N.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var EU = gU(3937),
      PU = gU(1238);
    const TU = 8.4,
      qU = 1e-4,
      KU = .15,
      cU = .04,
      GU = [.12, .04, .12],
      jU = 26,
      uU = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        hG: 1,
        minLifeTime: qU,
        maxLifeTime: qU,
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
        blendMode: EU.g.Standard
      },
      CU = {
        texture: "bubble",
        mipmaps: !1,
        hG: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: jU,
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
        blendMode: EU.g.Standard
      },
      hU = [0, 0, 0],
      QU = [0, 0, 0];

    function eU(UU) {
      const RU = new Map;
      let gU = null;

      function tU(UU) {
        var RU, gU;
        null === (RU = UU.bubbles) || void 0 === RU || RU.stop(), null === (gU = UU.fish) || void 0 === gU || gU.stop()
      }

      function pU(gU) {
        if (!gU.readDrawnPosition(UU, QU)) {
          for (const UU of RU.values()) {
            var tU;
            null === (tU = UU.bubbles) || void 0 === tU || tU.setEmitRate(0)
          }
          return
        }
        const pU = performance.now();
        for (const [UU, PU] of RU) {
          var EU;
          if (null === (EU = PU.bubbles) || void 0 === EU || EU.setEmitRate(0), !gU.readDrawnPosition(UU, hU)) continue;
          if (!((hU[0] - QU[0]) ** 2 + (hU[1] - QU[1]) ** 2 + (hU[2] - QU[2]) ** 2 < 900)) continue;
          const RU = Math.max(0, PU.biteAt - pU),
            tU = PU.approachDurationMs > 0 ? Math.min(1, 1 - RU / PU.approachDurationMs) : 1,
            qU = (PU.approachDurationMs - RU) / 1e3,
            eU = PU.phase + .25 * Math.sin(1.7 * qU + PU.phase),
            WU = Math.min(PU.approachDurationMs / 3e3 * 2.8, TU) * (1 - tU) * (1 + .15 * Math.sin(2.1 * qU + PU.phase)),
            fU = Math.min(1, 4 * (1 - tU)),
            xU = (.45 * Math.sin(4.1 * qU + PU.phase) + .18 * Math.sin(9.7 * qU + 2 * PU.phase)) * fU,
            mU = hU[0] + Math.cos(eU) * WU - Math.sin(eU) * xU,
            IU = Math.ceil(PU.surfaceY),
            JU = hU[2] + Math.sin(eU) * WU + Math.cos(eU) * xU,
            {
              fishAt: wU,
              bubblesAt: nU
            } = PU;
          wU[0] = nU[0] = mU, wU[1] = IU + KU, nU[1] = IU + cU, wU[2] = nU[2] = JU, PU.fish ??= gU.createParticles(uU, {
            pos: wU
          }), PU.fish.moveTo(wU), PU.fish.emit(1), PU.bubbles ??= gU.createParticles(CU, {
            pos: nU,
            half: GU
          }), PU.bubbles.moveTo(nU), PU.bubbles.setEmitRate(jU + 32 * (.5 + .5 * Math.sin(9 * qU + PU.phase)) ** 4 + 13 * tU)
        }
      }
      return {
        onCreate(UU) {
          gU = UU
        },
        onAfterRender() {
          gU && pU(gU)
        },
        onClose() {
          for (const UU of RU.values()) tU(UU);
          RU.clear(), gU = null
        },
        onReceivedMessageFromServer(UU, gU) {
          if (UU !== PU.w) return;
          const {
            hookId: pU,
            waiting: EU
          } = gU;
          if (EU) RU.has(pU) || RU.set(pU, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + EU.remainingMs,
            approachDurationMs: EU.durationMs,
            surfaceY: EU.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const UU = RU.get(pU);
            UU && tU(UU), RU.delete(pU)
          }
        }
      }
    }
    var WU = gU(4508),
      fU = gU(4501);

    function xU(UU) {
      let RU, gU = null,
        tU = null;
      const pU = () => {
        var UU;
        null === (UU = tU) || void 0 === UU || UU(), tU = null
      };
      return {
        onCreate(tU) {
          RU = tU, gU = RU.getClientOption(UU, "dialogue")
        },
        onAfterRender() {
          if (!RU) return;
          const EU = RU.getClientOption(UU, "dialogue");
          if (EU === gU) return;
          if (gU = EU, pU(), !EU || !1 === EU.animateIn) return;
          const {
            plan: PU,
            synth: TU
          } = (0, fU.c)(EU);
          TU && (tU = (0, WU.f)(TU, PU.blips))
        },
        onClose: pU
      }
    }
    var mU = gU(38696);
    const IU = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      JU = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      wU = [0, 1, 2, 0, 2, 3];

    function nU(UU, RU, gU) {
      var tU;
      let [pU, EU, PU] = RU;
      if (UU.hasPackModel("Furnace")) return null;
      const TU = ((null !== (tU = UU.getMetaInfo(gU).rot) && void 0 !== tU ? tU : 1) - 1) * Math.PI / 2,
        qU = Math.PI + TU,
        KU = Math.cos(qU),
        cU = Math.sin(qU),
        GU = [];
      for (const [CU, hU] of IU) GU.push(CU * KU, hU, -CU * cU);
      const jU = {
          positions: GU,
          indices: wU,
          uvs: JU
        },
        uU = [pU + .5 + .51 * Math.sin(TU), EU + .375, PU + .5 + .51 * Math.cos(TU)];
      return UU.createGameMesh(jU, {
        kind: "furnaceFire"
      }, uU)
    }

    function bU(UU) {
      return Math.floor(UU / 200) % 3
    }

    function oU(UU, RU, gU) {
      UU.setGameMesh(RU, {
        uvOffset: [0, gU / 3]
      })
    }
    const ZU = [.12, .025, .12],
      aU = [{
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
          blendMode: EU.g.Standard,
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
          blendMode: EU.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class YU {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(UU, RU) {
        const gU = UU.getBlockId(RU[0], RU[1], RU[2]);
        if ("Furnace" !== UU.getMetaInfo(gU).rootName) return;
        const tU = performance.now();
        let pU = this.smokes.find((UU => UU.pos[0] === RU[0] && UU.pos[1] === RU[1] && UU.pos[2] === RU[2] && UU.gc === gU));
        if (pU || (pU = {
            pos: [RU[0], RU[1], RU[2]],
            gc: gU,
            endMs: tU,
            lastBurstMs: -1 / 0,
            pending: new Array(aU.length).fill(0),
            fire: nU(UU, RU, gU)
          }, this.smokes.push(pU), null !== pU.fire && (oU(UU, pU.fire, bU(tU)), this.shownFireFrame = -1)), pU.endMs = tU + 6e3, this.smokes.length > 4) {
          const RU = this.smokes.reduce(((UU, RU) => RU.endMs < UU.endMs ? RU : UU));
          BU(UU, RU), this.smokes.splice(this.smokes.indexOf(RU), 1)
        }
        tU - pU.lastBurstMs >= 300 && (pU.lastBurstMs = tU, aU.forEach(((UU, RU) => {
          pU.pending[RU] += UU.style.count
        })))
      }
      onAfterRender(UU, RU) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const gU = performance.now();
        this.smokes = this.smokes.filter((RU => {
          const [tU, pU, EU] = RU.pos, PU = gU < RU.endMs && UU.getBlockId(tU, pU, EU) === RU.gc;
          return PU || BU(UU, RU), PU
        }));
        const tU = bU(gU);
        if (tU !== this.shownFireFrame) {
          this.shownFireFrame = tU;
          for (const RU of this.smokes) null !== RU.fire && oU(UU, RU.fire, tU)
        }
        if (!UU.particlesEnabled()) {
          for (const UU of this.smokes) UU.pending.fill(0);
          return
        }
        const pU = Math.min(RU, 250) / 1e3;
        for (const EU of this.smokes) {
          const [RU, tU, PU] = EU.pos;
          if (0 !== UU.getBlockId(RU, tU + 1, PU)) {
            EU.pending.fill(0);
            continue
          }
          const TU = (EU.endMs - gU) / 6e3,
            qU = this.centre;
          qU[0] = RU + .5, qU[1] = tU + 1.275, qU[2] = PU + .5, aU.forEach(((RU, gU) => {
            EU.pending[gU] += RU.perSecond * TU * pU;
            const tU = Math.floor(EU.pending[gU]);
            tU > 0 && this.emit(UU, gU, qU, tU) && (EU.pending[gU] -= tU)
          }))
        }
      }
      dispose(UU) {
        for (const gU of this.smokes) BU(UU, gU);
        this.smokes = [];
        for (const gU of null !== (RU = this.puffers) && void 0 !== RU ? RU : []) {
          var RU;
          gU.dispose()
        }
        this.puffers = null
      }
      emit(UU, RU, gU, tU) {
        return this.puffers ??= aU.map((UU => {
          let {
            style: RU,
            perSecond: gU
          } = UU;
          const tU = (RU.count / .3 + gU) * RU.life[1];
          return new mU.g(RU, Math.ceil(4 * tU), ZU)
        })), this.puffers[RU].emit(UU, gU, this.renderFrame, tU)
      }
    }

    function BU(UU, RU) {
      null !== RU.fire && (UU.disposeGameMesh(RU.fire), RU.fire = null)
    }

    function VU() {
      let UU;
      const RU = new YU;
      return {
        onCreate(RU) {
          UU = RU
        },
        onReceivedMessageFromServer(gU, tU) {
          gU === PU.A && RU.start(UU, tU)
        },
        onAfterRender(gU) {
          RU.onAfterRender(UU, gU)
        },
        onClose() {
          RU.dispose(UU)
        }
      }
    }

    function rU(UU, RU, gU, tU) {
      return {
        dialogue: xU(tU.localPlayerId),
        fishing: eU(tU.localPlayerId),
        furnaceSmoke: VU(),
        ironChest: pU()
      }
    }

    function XU(UU, RU) {
      for (const pU of [UU, ...null !== RU && void 0 !== RU ? RU : []]) try {
        var gU;
        null === pU || void 0 === pU || null === (gU = pU.onClose) || void 0 === gU || gU.call(pU)
      } catch (tU) {
        console.error("Error in client onClose callback", tU)
      }
    }
  },
  38696: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU,
      g: () => EU
    });
    const tU = 1 / .6,
      pU = {
        kind: "smokePuff"
      };
    class EU {
      constructor(UU, RU, gU) {
        this.style = UU, this.hG = RU, this.half = gU, this.particles = null, this.lastFrame = -1
      }
      emit(UU, RU, gU) {
        let EU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return gU !== this.lastFrame && (this.lastFrame = gU, this.particles || (this.particles = UU.createParticles(function(UU, RU) {
          const [
            [gU, EU, PU],
            [TU, qU, KU]
          ] = UU.colours;
          return {
            texture: UU.soft ? pU : "square_particle",
            hG: RU,
            minLifeTime: UU.life[0] / tU,
            maxLifeTime: UU.life[1] / tU,
            minEmitPower: UU.power[0] * tU,
            maxEmitPower: UU.power[1] * tU,
            minSize: UU.size[0],
            maxSize: UU.size[1],
            emitRate: 0,
            gravity: [0, UU.lift * tU * tU, 0],
            dir1: [-UU.spread, 1, -UU.spread],
            dir2: [UU.spread, 1, UU.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [gU, EU, PU, UU.alpha],
              maxColor: [TU, qU, KU, UU.alpha]
            }, {
              timeFraction: 1,
              minColor: [gU, EU, PU, 0],
              maxColor: [TU, qU, KU, 0]
            }],
            blendMode: UU.blendMode
          }
        }(this.style, this.hG), {
          pos: RU,
          half: this.half
        })), this.particles.moveTo(RU, this.half), this.particles.emit(EU), !0)
      }
      dispose() {
        var UU;
        null === (UU = this.particles) || void 0 === UU || UU.stop(), this.particles = null
      }
    }
  },
  4503: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      f: () => tU,
      j: () => EU,
      k: () => qU,
      n: () => PU
    });
    const tU = ["sine", "triangle", "square", "sawtooth"],
      pU = 55,
      EU = {
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

    function PU(UU) {
      return "string" !== typeof UU ? UU : Object.hasOwn(EU, UU) ? EU[UU] : null
    }

    function TU(UU, RU, gU) {
      return Math.min(gU, Math.max(RU, UU))
    }

    function qU(UU) {
      const RU = TU(UU.durationMs, 10, 500),
        gU = TU(UU.attackMs, 0, RU),
        {
          intonation: pU
        } = UU;
      return {
        waveform: tU.includes(UU.waveform) ? UU.waveform : "sine",
        pitchHz: TU(UU.pitchHz, 20, 4e3),
        glideSemitones: TU(UU.glideSemitones, -24, 24),
        durationMs: RU,
        attackMs: gU,
        releaseMs: TU(UU.releaseMs, 0, RU - gU),
        lowpassHz: null === UU.lowpassHz ? null : TU(UU.lowpassHz, 20, 2e4),
        volume: TU(UU.volume, 0, 2),
        intonation: {
          variationSemitones: TU(pU.variationSemitones, 0, 6),
          declineSemitones: TU(pU.declineSemitones, 0, 12),
          questionRiseSemitones: TU(pU.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: TU(pU.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: TU(UU.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);