export const id = 27;
export const ids = [27];
export const modules = {
  4611: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => tu,
      g: () => su
    });
    var Eu = yu(4617),
      Ku = yu(330);
    const Qu = 120,
      mu = 260,
      Ju = 1.15,
      Nu = 1.2,
      Xu = 2,
      Vu = 1.08,
      ru = .8,
      Bu = .95,
      xu = 8,
      Su = "[\"')\\]\u300d\u300f\uff09]*",
      pu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Su}$`),
      Tu = new RegExp(`[?\uff1f]${Su}$`),
      Wu = new RegExp(`[!\uff01]${Su}$`),
      ju = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Hu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      du = new RegExp(`[${Hu}]`),
      bu = new RegExp(`[${Hu}]|[^${Hu}]+`, "g"),
      Cu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function ku(uu) {
      let Ru = 2166136261;
      for (let yu = 0; yu < uu.length; yu++) Ru ^= uu.charCodeAt(yu), Ru = Math.imul(Ru, 16777619);
      return (Ru >>> 0) / 4294967295 * 2 - 1
    }

    function eu(uu) {
      var Ru;
      if (du.test(uu)) return 1;
      const yu = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Eu = yu.replace(/[^0-9]/g, "");
      if (Eu.length > 0 && !/\p{L}/u.test(yu)) return Math.min(Eu.length, 4);
      const Ku = null !== (Ru = yu.match(Cu)) && void 0 !== Ru ? Ru : [];
      if (0 === Ku.length) {
        var Qu, mu;
        const uu = null !== (Qu = null === (mu = yu.match(/\p{L}/gu)) || void 0 === mu ? void 0 : mu.length) && void 0 !== Qu ? Qu : 0;
        return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), xu)
      }
      const Ju = yu.replace(/[^\p{L}]/gu, ""),
        Nu = Ku.length > 1 && "e" === Ku.at(-1) && Ju.endsWith("e") && !Ju.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ku.length - (Nu ? 1 : 0), xu)
    }

    function Au(uu) {
      return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Du(uu) {
      const Ru = uu.replace(/[^\p{L}]/gu, "");
      return Ru.length >= 2 && Ru === Ru.toUpperCase() && Ru !== Ru.toLowerCase()
    }

    function Mu(uu, Ru) {
      var yu;
      const xu = Ru && (0, Eu.k)(Ru),
        Su = null !== (yu = null === xu || void 0 === xu ? void 0 : xu.syllableMs) && void 0 !== yu ? yu : Eu.c,
        Hu = function(uu) {
          const Ru = [];
          for (const Eu of (0, Ku.ic)(uu))
            if ("string" === typeof Eu)
              for (const uu of Eu.split(/(\s+)/)) {
                if ("" === uu) continue;
                if (/^\s+$/.test(uu)) {
                  Ru.push({
                    kind: "space",
                    text: uu
                  });
                  continue
                }
                if (!du.test(uu)) {
                  Ru.push({
                    kind: "word",
                    text: uu,
                    delayMs: 0
                  });
                  continue
                }
                let Eu = !0;
                for (const Ku of null !== (yu = uu.match(bu)) && void 0 !== yu ? yu : []) {
                  var yu;
                  const uu = Ru.at(-1);
                  Eu || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || du.test(Ku) || /[\p{L}\p{N}]/u.test(Ku) ? (Eu || Ru.push({
                    kind: "space",
                    text: "\u200b"
                  }), Ru.push({
                    kind: "word",
                    text: Ku,
                    delayMs: 0
                  }), Eu = !1) : uu.text += Ku
                }
              } else Ru.push({
                kind: "icon",
                text: Eu.icon,
                delayMs: 0
              });
          return Ru
        }(uu),
        Cu = [];
      let Mu = [];
      for (const Eu of Hu) "space" !== Eu.kind && (Mu.push(Eu), pu.test(Eu.text) && (Cu.push(Mu), Mu = []));
      Cu.push(Mu);
      const Iu = [];
      let Gu = 0;
      for (const Eu of Cu) {
        var Uu, nu;
        const uu = null !== (Uu = null === (nu = Eu.at(-1)) || void 0 === nu ? void 0 : nu.text) && void 0 !== Uu ? Uu : "",
          Ru = Tu.test(uu),
          yu = Wu.test(uu),
          Ku = Eu.map((uu => "word" === uu.kind ? eu(uu.text) : 1)),
          Hu = Ku.findLastIndex((uu => uu > 0));
        for (const [Tu, Wu] of Eu.entries()) {
          const uu = "word" === Wu.kind,
            Eu = Ku[Tu];
          Wu.delayMs = Gu;
          for (let Ku = 0; xu && Ku < Eu; Ku++) {
            const {
              intonation: Qu
            } = xu;
            let mu = Hu > 0 ? -Qu.declineSemitones * (Tu / Hu) : 0;
            mu += ku(`${Au(Wu.text)}|${Ku}`) * Qu.variationSemitones;
            const pu = Math.min(1, Qu.variationSemitones);
            let ju = xu.glideSemitones,
              du = 1;
            yu && (mu += Qu.exclaimLiftSemitones, du *= Ju), Ru && Tu === Hu && (mu += Qu.questionRiseSemitones * (Eu > 1 ? .5 + .5 * Ku / (Eu - 1) : 1), Ku === Eu - 1 && (ju = Math.abs(ju) + Qu.questionRiseSemitones / 2)), uu && Du(Wu.text) && (mu += Xu * pu, du *= Nu), Eu > 1 && 0 === Ku && (mu += ru * pu, du *= Vu), Iu.push({
              atMs: Gu + Ku * Su,
              semitones: mu,
              glideSemitones: ju,
              durationMs: Ku < Eu - 1 ? Math.min(xu.durationMs, Su * Bu) : xu.durationMs,
              level: du
            })
          }
          Gu += Eu * Su + (pu.test(Wu.text) ? mu : ju.test(Wu.text) ? Qu : 0)
        }
      }
      return {
        pieces: Hu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
          kind: "icon",
          icon: uu.text,
          delayMs: uu.delayMs
        } : {
          kind: "word",
          text: uu.text,
          delayMs: uu.delayMs
        })),
        blips: Iu
      }
    }
    var Iu = yu(1170),
      Gu = yu(1224),
      Uu = yu(1862);

    function nu(uu) {
      if ("string" === typeof uu) return uu;
      const Ru = Gu.f.get().getCurrentLanguageCode();
      return (0, Iu.q)(Ru, uu.translationKey, (0, Iu.o)(uu.params, Uu.d.shown))
    }

    function su(uu) {
      const Ru = void 0 === uu.voice ? null : (0, Eu.m)(uu.voice),
        yu = Ru && (0, Eu.k)(Ru);
      return {
        plan: Mu(nu(uu.line), yu),
        synth: yu
      }
    }

    function tu(uu) {
      const Ru = [];
      let yu = [];
      for (const [Ku, Qu] of uu.entries()) {
        var Eu;
        "space" === Qu.kind && (" " !== Qu.text || "icon" !== (null === (Eu = uu[Ku + 1]) || void 0 === Eu ? void 0 : Eu.kind)) ? (yu.length > 0 && Ru.push(yu), Ru.push([Qu]), yu = []) : yu.push(Qu)
      }
      return yu.length > 0 && Ru.push(yu), Ru
    }
  },
  4626: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Vu,
      h: () => ru
    });
    var Eu = yu(4630),
      Ku = yu(27);
    const Qu = .25,
      mu = .85,
      Ju = .02,
      Nu = .01;

    function Xu(uu, Ru, yu, Eu, Ku, Qu, Ju) {
      const {
        waveform: Nu,
        pitchHz: Xu,
        attackMs: Vu,
        releaseMs: ru,
        lowpassHz: Bu
      } = yu, xu = Ku + Eu.durationMs / 1e3, Su = Xu * 2 ** (Eu.semitones / 12), pu = uu.createOscillator();
      pu.type = Nu, pu.frequency.setValueAtTime(Su, Ku), pu.frequency.exponentialRampToValueAtTime(Su * 2 ** (Eu.glideSemitones / 12), xu);
      const Tu = Ku + Math.min(Vu, Eu.durationMs) / 1e3,
        Wu = uu.createGain();
      Wu.gain.setValueAtTime(0, Ku), Wu.gain.linearRampToValueAtTime(Qu, Tu), Wu.gain.linearRampToValueAtTime(Qu * mu, Math.max(Tu, xu - ru / 1e3)), Wu.gain.linearRampToValueAtTime(0, xu);
      const ju = [pu];
      if (null !== Bu) {
        const Ru = uu.createBiquadFilter();
        Ru.type = "lowpass", Ru.frequency.value = Bu, ju.push(Ru)
      }
      ju.push(Wu, Ru);
      for (let mu = 1; mu < ju.length; mu++) ju[mu - 1].connect(ju[mu]);
      return pu.onended = () => {
        for (const uu of ju.slice(0, -1)) uu.disconnect();
        Ju()
      }, pu.start(Ku), pu.stop(xu), pu
    }

    function Vu(uu, Ru, yu, Eu, Ku, mu) {
      if (0 === Eu.length) return mu(), () => {};
      const Vu = Qu * yu.volume * Ku,
        ru = uu.createGain();
      ru.connect(Ru);
      const Bu = uu.currentTime + Ju,
        xu = new Set;
      for (const Qu of Eu) {
        const Ru = Xu(uu, ru, yu, Qu, Bu + Qu.atMs / 1e3, Vu * Qu.level, (() => {
          xu.delete(Ru), 0 === xu.size && (ru.disconnect(), mu())
        }));
        xu.add(Ru)
      }
      return () => {
        const Ru = uu.currentTime;
        ru.gain.setTargetAtTime(0, Ru, Nu);
        for (const uu of xu) try {
          uu.stop(Ru + 5 * Nu)
        } catch {}
      }
    }

    function ru(uu, Ru) {
      var yu;
      const Qu = Eu.Howler.ctx,
        mu = Eu.Howler.masterGain;
      if (!Qu || !mu || !Ku.d.get("soundOnFromAd")) return () => {};
      const Ju = Eu.Howler;
      return null === (yu = Ju._autoResume) || void 0 === yu || yu.call(Ju), Vu(Qu, mu, uu, Ru, Ku.d.get("soundVolume"), (() => {
        var uu;
        null === (uu = Ju._autoSuspend) || void 0 === uu || uu.call(Ju)
      }))
    }
  },
  38884: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      closeClientGame: () => lu,
      createDefaultClientPlugins: () => tu
    });
    var Eu = yu(343);

    function Ku() {
      let uu;
      return {
        onCreate(Ru) {
          uu = Ru
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Ru, yu, Ku, Qu, mu, Ju) {
          var Nu, Xu;
          if ("Iron Chest" !== uu.getMetaInfo(mu).rootName) return;
          if (!uu.hasEffect(Ru, "Thief")) return;
          const Vu = uu.getBlockData(yu, Ku, Qu);
          return uu.getPlayerDbId(Ru) !== (null === Vu || void 0 === Vu || null === (Nu = Vu.persisted) || void 0 === Nu || null === (Xu = Nu.shared) || void 0 === Xu ? void 0 : Xu.ownerDbId) ? (uu.sendMessage(Ru, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Eu.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Qu = yu(4053),
      mu = yu(1215);
    const Ju = 8.4,
      Nu = 1e-4,
      Xu = .15,
      Vu = .04,
      ru = [.12, .04, .12],
      Bu = 26,
      xu = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Nr: 1,
        minLifeTime: Nu,
        maxLifeTime: Nu,
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
        blendMode: Qu.g.Standard
      },
      Su = {
        texture: "bubble",
        mipmaps: !1,
        Nr: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Bu,
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
        blendMode: Qu.g.Standard
      },
      pu = [0, 0, 0],
      Tu = [0, 0, 0];

    function Wu(uu) {
      const Ru = new Map;
      let yu = null;

      function Eu(uu) {
        var Ru, yu;
        null === (Ru = uu.bubbles) || void 0 === Ru || Ru.stop(), null === (yu = uu.fish) || void 0 === yu || yu.stop()
      }

      function Ku(yu) {
        if (!yu.readDrawnPosition(uu, Tu)) {
          for (const uu of Ru.values()) {
            var Eu;
            null === (Eu = uu.bubbles) || void 0 === Eu || Eu.setEmitRate(0)
          }
          return
        }
        const Ku = performance.now();
        for (const [uu, mu] of Ru) {
          var Qu;
          if (null === (Qu = mu.bubbles) || void 0 === Qu || Qu.setEmitRate(0), !yu.readDrawnPosition(uu, pu)) continue;
          if (!((pu[0] - Tu[0]) ** 2 + (pu[1] - Tu[1]) ** 2 + (pu[2] - Tu[2]) ** 2 < 900)) continue;
          const Ru = Math.max(0, mu.biteAt - Ku),
            Eu = mu.approachDurationMs > 0 ? Math.min(1, 1 - Ru / mu.approachDurationMs) : 1,
            Nu = (mu.approachDurationMs - Ru) / 1e3,
            Wu = mu.phase + .25 * Math.sin(1.7 * Nu + mu.phase),
            ju = Math.min(mu.approachDurationMs / 3e3 * 2.8, Ju) * (1 - Eu) * (1 + .15 * Math.sin(2.1 * Nu + mu.phase)),
            Hu = Math.min(1, 4 * (1 - Eu)),
            du = (.45 * Math.sin(4.1 * Nu + mu.phase) + .18 * Math.sin(9.7 * Nu + 2 * mu.phase)) * Hu,
            bu = pu[0] + Math.cos(Wu) * ju - Math.sin(Wu) * du,
            Cu = Math.ceil(mu.surfaceY),
            ku = pu[2] + Math.sin(Wu) * ju + Math.cos(Wu) * du,
            {
              fishAt: eu,
              bubblesAt: Au
            } = mu;
          eu[0] = Au[0] = bu, eu[1] = Cu + Xu, Au[1] = Cu + Vu, eu[2] = Au[2] = ku, mu.fish ??= yu.createParticles(xu, {
            pos: eu
          }), mu.fish.moveTo(eu), mu.fish.emit(1), mu.bubbles ??= yu.createParticles(Su, {
            pos: Au,
            half: ru
          }), mu.bubbles.moveTo(Au), mu.bubbles.setEmitRate(Bu + 32 * (.5 + .5 * Math.sin(9 * Nu + mu.phase)) ** 4 + 13 * Eu)
        }
      }
      return {
        onCreate(uu) {
          yu = uu
        },
        onAfterRender() {
          yu && Ku(yu)
        },
        onClose() {
          for (const uu of Ru.values()) Eu(uu);
          Ru.clear(), yu = null
        },
        onReceivedMessageFromServer(uu, yu) {
          if (uu !== mu.D) return;
          const {
            hookId: Ku,
            waiting: Qu
          } = yu;
          if (Qu) Ru.has(Ku) || Ru.set(Ku, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Qu.remainingMs,
            approachDurationMs: Qu.durationMs,
            surfaceY: Qu.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const uu = Ru.get(Ku);
            uu && Eu(uu), Ru.delete(Ku)
          }
        }
      }
    }
    var ju = yu(4626),
      Hu = yu(4611);

    function du(uu) {
      let Ru, yu = null,
        Eu = null;
      const Ku = () => {
        var uu;
        null === (uu = Eu) || void 0 === uu || uu(), Eu = null
      };
      return {
        onCreate(Eu) {
          Ru = Eu, yu = Ru.getClientOption(uu, "dialogue")
        },
        onAfterRender() {
          if (!Ru) return;
          const Qu = Ru.getClientOption(uu, "dialogue");
          if (Qu === yu) return;
          if (yu = Qu, Ku(), !Qu || !1 === Qu.animateIn) return;
          const {
            plan: mu,
            synth: Ju
          } = (0, Hu.g)(Qu);
          Ju && (Eu = (0, ju.h)(Ju, mu.blips))
        },
        onClose: Ku
      }
    }
    var bu = yu(38891);
    const Cu = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      ku = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      eu = [0, 1, 2, 0, 2, 3];

    function Au(uu, Ru, yu) {
      var Eu;
      let [Ku, Qu, mu] = Ru;
      if (uu.hasPackModel("Furnace")) return null;
      const Ju = ((null !== (Eu = uu.getMetaInfo(yu).rot) && void 0 !== Eu ? Eu : 1) - 1) * Math.PI / 2,
        Nu = Math.PI + Ju,
        Xu = Math.cos(Nu),
        Vu = Math.sin(Nu),
        ru = [];
      for (const [Su, pu] of Cu) ru.push(Su * Xu, pu, -Su * Vu);
      const Bu = {
          positions: ru,
          indices: eu,
          uvs: ku
        },
        xu = [Ku + .5 + .51 * Math.sin(Ju), Qu + .375, mu + .5 + .51 * Math.cos(Ju)];
      return uu.createGameMesh(Bu, {
        kind: "furnaceFire"
      }, xu)
    }

    function Du(uu) {
      return Math.floor(uu / 200) % 3
    }

    function Mu(uu, Ru, yu) {
      uu.setGameMesh(Ru, {
        uvOffset: [0, yu / 3]
      })
    }
    const Iu = [.12, .025, .12],
      Gu = [{
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
          blendMode: Qu.g.Standard,
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
          blendMode: Qu.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Uu {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(uu, Ru) {
        const yu = uu.getBlockId(Ru[0], Ru[1], Ru[2]);
        if ("Furnace" !== uu.getMetaInfo(yu).rootName) return;
        const Eu = performance.now();
        let Ku = this.smokes.find((uu => uu.pos[0] === Ru[0] && uu.pos[1] === Ru[1] && uu.pos[2] === Ru[2] && uu.yV === yu));
        if (Ku || (Ku = {
            pos: [Ru[0], Ru[1], Ru[2]],
            yV: yu,
            endMs: Eu,
            lastBurstMs: -1 / 0,
            pending: new Array(Gu.length).fill(0),
            fire: Au(uu, Ru, yu)
          }, this.smokes.push(Ku), null !== Ku.fire && (Mu(uu, Ku.fire, Du(Eu)), this.shownFireFrame = -1)), Ku.endMs = Eu + 6e3, this.smokes.length > 4) {
          const Ru = this.smokes.reduce(((uu, Ru) => Ru.endMs < uu.endMs ? Ru : uu));
          nu(uu, Ru), this.smokes.splice(this.smokes.indexOf(Ru), 1)
        }
        Eu - Ku.lastBurstMs >= 300 && (Ku.lastBurstMs = Eu, Gu.forEach(((uu, Ru) => {
          Ku.pending[Ru] += uu.style.count
        })))
      }
      onAfterRender(uu, Ru) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const yu = performance.now();
        this.smokes = this.smokes.filter((Ru => {
          const [Eu, Ku, Qu] = Ru.pos, mu = yu < Ru.endMs && uu.getBlockId(Eu, Ku, Qu) === Ru.yV;
          return mu || nu(uu, Ru), mu
        }));
        const Eu = Du(yu);
        if (Eu !== this.shownFireFrame) {
          this.shownFireFrame = Eu;
          for (const Ru of this.smokes) null !== Ru.fire && Mu(uu, Ru.fire, Eu)
        }
        if (!uu.particlesEnabled()) {
          for (const uu of this.smokes) uu.pending.fill(0);
          return
        }
        const Ku = Math.min(Ru, 250) / 1e3;
        for (const Qu of this.smokes) {
          const [Ru, Eu, mu] = Qu.pos;
          if (0 !== uu.getBlockId(Ru, Eu + 1, mu)) {
            Qu.pending.fill(0);
            continue
          }
          const Ju = (Qu.endMs - yu) / 6e3,
            Nu = this.centre;
          Nu[0] = Ru + .5, Nu[1] = Eu + 1.275, Nu[2] = mu + .5, Gu.forEach(((Ru, yu) => {
            Qu.pending[yu] += Ru.perSecond * Ju * Ku;
            const Eu = Math.floor(Qu.pending[yu]);
            Eu > 0 && this.emit(uu, yu, Nu, Eu) && (Qu.pending[yu] -= Eu)
          }))
        }
      }
      dispose(uu) {
        for (const yu of this.smokes) nu(uu, yu);
        this.smokes = [];
        for (const yu of null !== (Ru = this.puffers) && void 0 !== Ru ? Ru : []) {
          var Ru;
          yu.dispose()
        }
        this.puffers = null
      }
      emit(uu, Ru, yu, Eu) {
        return this.puffers ??= Gu.map((uu => {
          let {
            style: Ru,
            perSecond: yu
          } = uu;
          const Eu = (Ru.count / .3 + yu) * Ru.life[1];
          return new bu.h(Ru, Math.ceil(4 * Eu), Iu)
        })), this.puffers[Ru].emit(uu, yu, this.renderFrame, Eu)
      }
    }

    function nu(uu, Ru) {
      null !== Ru.fire && (uu.disposeGameMesh(Ru.fire), Ru.fire = null)
    }

    function su() {
      let uu;
      const Ru = new Uu;
      return {
        onCreate(Ru) {
          uu = Ru
        },
        onReceivedMessageFromServer(yu, Eu) {
          yu === mu.F && Ru.start(uu, Eu)
        },
        onAfterRender(yu) {
          Ru.onAfterRender(uu, yu)
        },
        onClose() {
          Ru.dispose(uu)
        }
      }
    }

    function tu(uu, Ru, yu, Eu) {
      return {
        dialogue: du(Eu.localPlayerId),
        fishing: Wu(Eu.localPlayerId),
        furnaceSmoke: su(),
        ironChest: Ku()
      }
    }

    function lu(uu, Ru) {
      for (const Ku of [uu, ...null !== Ru && void 0 !== Ru ? Ru : []]) try {
        var yu;
        null === Ku || void 0 === Ku || null === (yu = Ku.onClose) || void 0 === yu || yu.call(Ku)
      } catch (Eu) {
        console.error("Error in client onClose callback", Eu)
      }
    }
  },
  38891: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu,
      h: () => Qu
    });
    const Eu = 1 / .6,
      Ku = {
        kind: "smokePuff"
      };
    class Qu {
      constructor(uu, Ru, yu) {
        this.style = uu, this.Nr = Ru, this.half = yu, this.particles = null, this.lastFrame = -1
      }
      emit(uu, Ru, yu) {
        let Qu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return yu !== this.lastFrame && (this.lastFrame = yu, this.particles || (this.particles = uu.createParticles(function(uu, Ru) {
          const [
            [yu, Qu, mu],
            [Ju, Nu, Xu]
          ] = uu.colours;
          return {
            texture: uu.soft ? Ku : "square_particle",
            Nr: Ru,
            minLifeTime: uu.life[0] / Eu,
            maxLifeTime: uu.life[1] / Eu,
            minEmitPower: uu.power[0] * Eu,
            maxEmitPower: uu.power[1] * Eu,
            minSize: uu.size[0],
            maxSize: uu.size[1],
            emitRate: 0,
            gravity: [0, uu.lift * Eu * Eu, 0],
            dir1: [-uu.spread, 1, -uu.spread],
            dir2: [uu.spread, 1, uu.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [yu, Qu, mu, uu.alpha],
              maxColor: [Ju, Nu, Xu, uu.alpha]
            }, {
              timeFraction: 1,
              minColor: [yu, Qu, mu, 0],
              maxColor: [Ju, Nu, Xu, 0]
            }],
            blendMode: uu.blendMode
          }
        }(this.style, this.Nr), {
          pos: Ru,
          half: this.half
        })), this.particles.moveTo(Ru, this.half), this.particles.emit(Qu), !0)
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.stop(), this.particles = null
      }
    }
  },
  4617: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      d: () => Eu,
      g: () => Qu,
      k: () => Nu,
      m: () => mu
    });
    const Eu = ["sine", "triangle", "square", "sawtooth"],
      Ku = 55,
      Qu = {
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

    function mu(uu) {
      return "string" !== typeof uu ? uu : Object.hasOwn(Qu, uu) ? Qu[uu] : null
    }

    function Ju(uu, Ru, yu) {
      return Math.min(yu, Math.max(Ru, uu))
    }

    function Nu(uu) {
      const Ru = Ju(uu.durationMs, 10, 500),
        yu = Ju(uu.attackMs, 0, Ru),
        {
          intonation: Ku
        } = uu;
      return {
        waveform: Eu.includes(uu.waveform) ? uu.waveform : "sine",
        pitchHz: Ju(uu.pitchHz, 20, 4e3),
        glideSemitones: Ju(uu.glideSemitones, -24, 24),
        durationMs: Ru,
        attackMs: yu,
        releaseMs: Ju(uu.releaseMs, 0, Ru - yu),
        lowpassHz: null === uu.lowpassHz ? null : Ju(uu.lowpassHz, 20, 2e4),
        volume: Ju(uu.volume, 0, 2),
        intonation: {
          variationSemitones: Ju(Ku.variationSemitones, 0, 6),
          declineSemitones: Ju(Ku.declineSemitones, 0, 12),
          questionRiseSemitones: Ju(Ku.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ju(Ku.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ju(uu.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);