export const id = 27;
export const ids = [27];
export const modules = {
  5003: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Vu,
      i: () => Ku
    });
    var su = ju(5011),
      Uu = ju(337);
    const Zu = 120,
      Xu = 260,
      lu = 1.15,
      qu = 1.2,
      fu = 2,
      Cu = 1.08,
      bu = .8,
      cu = .95,
      Nu = 8,
      Ou = "[\"')\\]\u300d\u300f\uff09]*",
      Yu = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ou}$`),
      hu = new RegExp(`[?\uff1f]${Ou}$`),
      Du = new RegExp(`[!\uff01]${Ou}$`),
      gu = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Mu = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      eu = new RegExp(`[${Mu}]`),
      Gu = new RegExp(`[${Mu}]|[^${Mu}]+`, "g"),
      pu = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function wu(uu) {
      let Eu = 2166136261;
      for (let ju = 0; ju < uu.length; ju++) Eu ^= uu.charCodeAt(ju), Eu = Math.imul(Eu, 16777619);
      return (Eu >>> 0) / 4294967295 * 2 - 1
    }

    function Ju(uu) {
      var Eu;
      if (eu.test(uu)) return 1;
      const ju = uu.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        su = ju.replace(/[^0-9]/g, "");
      if (su.length > 0 && !/\p{L}/u.test(ju)) return Math.min(su.length, 4);
      const Uu = null !== (Eu = ju.match(pu)) && void 0 !== Eu ? Eu : [];
      if (0 === Uu.length) {
        var Zu, Xu;
        const uu = null !== (Zu = null === (Xu = ju.match(/\p{L}/gu)) || void 0 === Xu ? void 0 : Xu.length) && void 0 !== Zu ? Zu : 0;
        return 0 === uu ? 0 : Math.min(Math.max(1, Math.round(uu / 2.5)), Nu)
      }
      const lu = ju.replace(/[^\p{L}]/gu, ""),
        qu = Uu.length > 1 && "e" === Uu.at(-1) && lu.endsWith("e") && !lu.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(uu.replace(/[^\p{L}]/gu, ""));
      return Math.min(Uu.length - (qu ? 1 : 0), Nu)
    }

    function du(uu) {
      return uu.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function au(uu) {
      const Eu = uu.replace(/[^\p{L}]/gu, "");
      return Eu.length >= 2 && Eu === Eu.toUpperCase() && Eu !== Eu.toLowerCase()
    }

    function Pu(uu, Eu) {
      var ju;
      const Nu = Eu && (0, su.l)(Eu),
        Ou = null !== (ju = null === Nu || void 0 === Nu ? void 0 : Nu.syllableMs) && void 0 !== ju ? ju : su.e,
        Mu = function(uu) {
          const Eu = [];
          for (const su of (0, Uu.gc)(uu))
            if ("string" === typeof su)
              for (const uu of su.split(/(\s+)/)) {
                if ("" === uu) continue;
                if (/^\s+$/.test(uu)) {
                  Eu.push({
                    kind: "space",
                    text: uu
                  });
                  continue
                }
                if (!eu.test(uu)) {
                  Eu.push({
                    kind: "word",
                    text: uu,
                    delayMs: 0
                  });
                  continue
                }
                let su = !0;
                for (const Uu of null !== (ju = uu.match(Gu)) && void 0 !== ju ? ju : []) {
                  var ju;
                  const uu = Eu.at(-1);
                  su || "word" !== (null === uu || void 0 === uu ? void 0 : uu.kind) || eu.test(Uu) || /[\p{L}\p{N}]/u.test(Uu) ? (su || Eu.push({
                    kind: "space",
                    text: "\u200b"
                  }), Eu.push({
                    kind: "word",
                    text: Uu,
                    delayMs: 0
                  }), su = !1) : uu.text += Uu
                }
              } else Eu.push({
                kind: "icon",
                text: su.icon,
                delayMs: 0
              });
          return Eu
        }(uu),
        pu = [];
      let Pu = [];
      for (const su of Mu) "space" !== su.kind && (Pu.push(su), Yu.test(su.text) && (pu.push(Pu), Pu = []));
      pu.push(Pu);
      const ou = [];
      let ku = 0;
      for (const su of pu) {
        var mu, vu;
        const uu = null !== (mu = null === (vu = su.at(-1)) || void 0 === vu ? void 0 : vu.text) && void 0 !== mu ? mu : "",
          Eu = hu.test(uu),
          ju = Du.test(uu),
          Uu = su.map((uu => "word" === uu.kind ? Ju(uu.text) : 1)),
          Mu = Uu.findLastIndex((uu => uu > 0));
        for (const [hu, Du] of su.entries()) {
          const uu = "word" === Du.kind,
            su = Uu[hu];
          Du.delayMs = ku;
          for (let Uu = 0; Nu && Uu < su; Uu++) {
            const {
              intonation: Zu
            } = Nu;
            let Xu = Mu > 0 ? -Zu.declineSemitones * (hu / Mu) : 0;
            Xu += wu(`${du(Du.text)}|${Uu}`) * Zu.variationSemitones;
            const Yu = Math.min(1, Zu.variationSemitones);
            let gu = Nu.glideSemitones,
              eu = 1;
            ju && (Xu += Zu.exclaimLiftSemitones, eu *= lu), Eu && hu === Mu && (Xu += Zu.questionRiseSemitones * (su > 1 ? .5 + .5 * Uu / (su - 1) : 1), Uu === su - 1 && (gu = Math.abs(gu) + Zu.questionRiseSemitones / 2)), uu && au(Du.text) && (Xu += fu * Yu, eu *= qu), su > 1 && 0 === Uu && (Xu += bu * Yu, eu *= Cu), ou.push({
              atMs: ku + Uu * Ou,
              semitones: Xu,
              glideSemitones: gu,
              durationMs: Uu < su - 1 ? Math.min(Nu.durationMs, Ou * cu) : Nu.durationMs,
              level: eu
            })
          }
          ku += su * Ou + (Yu.test(Du.text) ? Xu : gu.test(Du.text) ? Zu : 0)
        }
      }
      return {
        pieces: Mu.map((uu => "space" === uu.kind ? uu : "icon" === uu.kind ? {
          kind: "icon",
          icon: uu.text,
          delayMs: uu.delayMs
        } : {
          kind: "word",
          text: uu.text,
          delayMs: uu.delayMs
        })),
        blips: ou
      }
    }
    var ou = ju(1244),
      ku = ju(1303),
      mu = ju(1995);

    function vu(uu) {
      if ("string" === typeof uu) return uu;
      const Eu = ku.h.get().getCurrentLanguageCode();
      return (0, ou.u)(Eu, uu.translationKey, (0, ou.r)(uu.params, mu.e.shown))
    }

    function Ku(uu) {
      const Eu = void 0 === uu.voice ? null : (0, su.o)(uu.voice),
        ju = Eu && (0, su.l)(Eu);
      return {
        plan: Pu(vu(uu.line), ju),
        synth: ju
      }
    }

    function Vu(uu) {
      const Eu = [];
      let ju = [];
      for (const [Uu, Zu] of uu.entries()) {
        var su;
        "space" === Zu.kind && (" " !== Zu.text || "icon" !== (null === (su = uu[Uu + 1]) || void 0 === su ? void 0 : su.kind)) ? (ju.length > 0 && Eu.push(ju), Eu.push([Zu]), ju = []) : ju.push(Zu)
      }
      return ju.length > 0 && Eu.push(ju), Eu
    }
  },
  5019: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Cu,
      d: () => bu
    });
    var su = ju(5026),
      Uu = ju(22);
    const Zu = .25,
      Xu = .85,
      lu = .02,
      qu = .01;

    function fu(uu, Eu, ju, su, Uu, Zu, lu) {
      const {
        waveform: qu,
        pitchHz: fu,
        attackMs: Cu,
        releaseMs: bu,
        lowpassHz: cu
      } = ju, Nu = Uu + su.durationMs / 1e3, Ou = fu * 2 ** (su.semitones / 12), Yu = uu.createOscillator();
      Yu.type = qu, Yu.frequency.setValueAtTime(Ou, Uu), Yu.frequency.exponentialRampToValueAtTime(Ou * 2 ** (su.glideSemitones / 12), Nu);
      const hu = Uu + Math.min(Cu, su.durationMs) / 1e3,
        Du = uu.createGain();
      Du.gain.setValueAtTime(0, Uu), Du.gain.linearRampToValueAtTime(Zu, hu), Du.gain.linearRampToValueAtTime(Zu * Xu, Math.max(hu, Nu - bu / 1e3)), Du.gain.linearRampToValueAtTime(0, Nu);
      const gu = [Yu];
      if (null !== cu) {
        const Eu = uu.createBiquadFilter();
        Eu.type = "lowpass", Eu.frequency.value = cu, gu.push(Eu)
      }
      gu.push(Du, Eu);
      for (let Xu = 1; Xu < gu.length; Xu++) gu[Xu - 1].connect(gu[Xu]);
      return Yu.onended = () => {
        for (const uu of gu.slice(0, -1)) uu.disconnect();
        lu()
      }, Yu.start(Uu), Yu.stop(Nu), Yu
    }

    function Cu(uu, Eu, ju, su, Uu, Xu) {
      if (0 === su.length) return Xu(), () => {};
      const Cu = Zu * ju.volume * Uu,
        bu = uu.createGain();
      bu.connect(Eu);
      const cu = uu.currentTime + lu,
        Nu = new Set;
      for (const Zu of su) {
        const Eu = fu(uu, bu, ju, Zu, cu + Zu.atMs / 1e3, Cu * Zu.level, (() => {
          Nu.delete(Eu), 0 === Nu.size && (bu.disconnect(), Xu())
        }));
        Nu.add(Eu)
      }
      return () => {
        const Eu = uu.currentTime;
        bu.gain.setTargetAtTime(0, Eu, qu);
        for (const uu of Nu) try {
          uu.stop(Eu + 5 * qu)
        } catch {}
      }
    }

    function bu(uu, Eu) {
      var ju;
      const Zu = su.Howler.ctx,
        Xu = su.Howler.masterGain;
      if (!Zu || !Xu || !Uu.d.get("soundOnFromAd")) return () => {};
      const lu = su.Howler;
      return null === (ju = lu._autoResume) || void 0 === ju || ju.call(lu), Cu(Zu, Xu, uu, Eu, Uu.d.get("soundVolume"), (() => {
        var uu;
        null === (uu = lu._autoSuspend) || void 0 === uu || uu.call(lu)
      }))
    }
  },
  39455: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      closeClientGame: () => ru,
      createDefaultClientPlugins: () => Vu
    });
    var su = ju(349);

    function Uu() {
      let uu;
      return {
        onCreate(Eu) {
          uu = Eu
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Eu, ju, Uu, Zu, Xu, lu) {
          var qu, fu;
          if ("Iron Chest" !== uu.getMetaInfo(Xu).rootName) return;
          if (!uu.hasEffect(Eu, "Thief")) return;
          const Cu = uu.getBlockData(ju, Uu, Zu);
          return uu.getPlayerDbId(Eu) !== (null === Cu || void 0 === Cu || null === (qu = Cu.persisted) || void 0 === qu || null === (fu = qu.shared) || void 0 === fu ? void 0 : fu.ownerDbId) ? (uu.sendMessage(Eu, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: su.G.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Zu = ju(4427),
      Xu = ju(1298);
    const lu = 8.4,
      qu = 1e-4,
      fu = .15,
      Cu = .04,
      bu = [.12, .04, .12],
      cu = 26,
      Nu = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Mb: 1,
        minLifeTime: qu,
        maxLifeTime: qu,
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
        blendMode: Zu.e.Standard
      },
      Ou = {
        texture: "bubble",
        mipmaps: !1,
        Mb: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: cu,
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
        blendMode: Zu.e.Standard
      },
      Yu = [0, 0, 0],
      hu = [0, 0, 0];

    function Du(uu) {
      const Eu = new Map;
      let ju = null;

      function su(uu) {
        var Eu, ju;
        null === (Eu = uu.bubbles) || void 0 === Eu || Eu.stop(), null === (ju = uu.fish) || void 0 === ju || ju.stop()
      }

      function Uu(ju) {
        if (!ju.readDrawnPosition(uu, hu)) {
          for (const uu of Eu.values()) {
            var su;
            null === (su = uu.bubbles) || void 0 === su || su.setEmitRate(0)
          }
          return
        }
        const Uu = performance.now();
        for (const [uu, Xu] of Eu) {
          var Zu;
          if (null === (Zu = Xu.bubbles) || void 0 === Zu || Zu.setEmitRate(0), !ju.readDrawnPosition(uu, Yu)) continue;
          if (!((Yu[0] - hu[0]) ** 2 + (Yu[1] - hu[1]) ** 2 + (Yu[2] - hu[2]) ** 2 < 900)) continue;
          const Eu = Math.max(0, Xu.biteAt - Uu),
            su = Xu.approachDurationMs > 0 ? Math.min(1, 1 - Eu / Xu.approachDurationMs) : 1,
            qu = (Xu.approachDurationMs - Eu) / 1e3,
            Du = Xu.phase + .25 * Math.sin(1.7 * qu + Xu.phase),
            gu = Math.min(Xu.approachDurationMs / 3e3 * 2.8, lu) * (1 - su) * (1 + .15 * Math.sin(2.1 * qu + Xu.phase)),
            Mu = Math.min(1, 4 * (1 - su)),
            eu = (.45 * Math.sin(4.1 * qu + Xu.phase) + .18 * Math.sin(9.7 * qu + 2 * Xu.phase)) * Mu,
            Gu = Yu[0] + Math.cos(Du) * gu - Math.sin(Du) * eu,
            pu = Math.ceil(Xu.surfaceY),
            wu = Yu[2] + Math.sin(Du) * gu + Math.cos(Du) * eu,
            {
              fishAt: Ju,
              bubblesAt: du
            } = Xu;
          Ju[0] = du[0] = Gu, Ju[1] = pu + fu, du[1] = pu + Cu, Ju[2] = du[2] = wu, Xu.fish ??= ju.createParticles(Nu, {
            pos: Ju
          }), Xu.fish.moveTo(Ju), Xu.fish.emit(1), Xu.bubbles ??= ju.createParticles(Ou, {
            pos: du,
            half: bu
          }), Xu.bubbles.moveTo(du), Xu.bubbles.setEmitRate(cu + 32 * (.5 + .5 * Math.sin(9 * qu + Xu.phase)) ** 4 + 13 * su)
        }
      }
      return {
        onCreate(uu) {
          ju = uu
        },
        onAfterRender() {
          ju && Uu(ju)
        },
        onClose() {
          for (const uu of Eu.values()) su(uu);
          Eu.clear(), ju = null
        },
        onReceivedMessageFromServer(uu, ju) {
          if (uu !== Xu.x) return;
          const {
            hookId: Uu,
            waiting: Zu
          } = ju;
          if (Zu) Eu.has(Uu) || Eu.set(Uu, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Zu.remainingMs,
            approachDurationMs: Zu.durationMs,
            surfaceY: Zu.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const uu = Eu.get(Uu);
            uu && su(uu), Eu.delete(Uu)
          }
        }
      }
    }
    var gu = ju(5019),
      Mu = ju(5003);

    function eu(uu) {
      let Eu, ju = null,
        su = null;
      const Uu = () => {
        var uu;
        null === (uu = su) || void 0 === uu || uu(), su = null
      };
      return {
        onCreate(su) {
          Eu = su, ju = Eu.getClientOption(uu, "dialogue")
        },
        onAfterRender() {
          if (!Eu) return;
          const Zu = Eu.getClientOption(uu, "dialogue");
          if (Zu === ju) return;
          if (ju = Zu, Uu(), !Zu || !1 === Zu.animateIn) return;
          const {
            plan: Xu,
            synth: lu
          } = (0, Mu.i)(Zu);
          lu && (su = (0, gu.d)(lu, Xu.blips))
        },
        onClose: Uu
      }
    }
    var Gu = ju(39461);
    const pu = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      wu = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Ju = [0, 1, 2, 0, 2, 3];

    function du(uu, Eu, ju) {
      var su;
      let [Uu, Zu, Xu] = Eu;
      if (uu.hasPackModel("Furnace")) return null;
      const lu = ((null !== (su = uu.getMetaInfo(ju).rot) && void 0 !== su ? su : 1) - 1) * Math.PI / 2,
        qu = Math.PI + lu,
        fu = Math.cos(qu),
        Cu = Math.sin(qu),
        bu = [];
      for (const [Ou, Yu] of pu) bu.push(Ou * fu, Yu, -Ou * Cu);
      const cu = {
          positions: bu,
          indices: Ju,
          uvs: wu
        },
        Nu = [Uu + .5 + .51 * Math.sin(lu), Zu + .375, Xu + .5 + .51 * Math.cos(lu)];
      return uu.createGameMesh(cu, {
        kind: "furnaceFire"
      }, Nu)
    }

    function au(uu) {
      return Math.floor(uu / 200) % 3
    }

    function Pu(uu, Eu, ju) {
      uu.setGameMesh(Eu, {
        uvOffset: [0, ju / 3]
      })
    }
    const ou = [.12, .025, .12],
      ku = [{
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
          blendMode: Zu.e.Standard,
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
          blendMode: Zu.e.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class mu {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(uu, Eu) {
        const ju = uu.getBlockId(Eu[0], Eu[1], Eu[2]);
        if ("Furnace" !== uu.getMetaInfo(ju).rootName) return;
        const su = performance.now();
        let Uu = this.smokes.find((uu => uu.pos[0] === Eu[0] && uu.pos[1] === Eu[1] && uu.pos[2] === Eu[2] && uu.ul === ju));
        if (Uu || (Uu = {
            pos: [Eu[0], Eu[1], Eu[2]],
            ul: ju,
            endMs: su,
            lastBurstMs: -1 / 0,
            pending: new Array(ku.length).fill(0),
            fire: du(uu, Eu, ju)
          }, this.smokes.push(Uu), null !== Uu.fire && (Pu(uu, Uu.fire, au(su)), this.shownFireFrame = -1)), Uu.endMs = su + 6e3, this.smokes.length > 4) {
          const Eu = this.smokes.reduce(((uu, Eu) => Eu.endMs < uu.endMs ? Eu : uu));
          vu(uu, Eu), this.smokes.splice(this.smokes.indexOf(Eu), 1)
        }
        su - Uu.lastBurstMs >= 300 && (Uu.lastBurstMs = su, ku.forEach(((uu, Eu) => {
          Uu.pending[Eu] += uu.style.count
        })))
      }
      onAfterRender(uu, Eu) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const ju = performance.now();
        this.smokes = this.smokes.filter((Eu => {
          const [su, Uu, Zu] = Eu.pos, Xu = ju < Eu.endMs && uu.getBlockId(su, Uu, Zu) === Eu.ul;
          return Xu || vu(uu, Eu), Xu
        }));
        const su = au(ju);
        if (su !== this.shownFireFrame) {
          this.shownFireFrame = su;
          for (const Eu of this.smokes) null !== Eu.fire && Pu(uu, Eu.fire, su)
        }
        if (!uu.particlesEnabled()) {
          for (const uu of this.smokes) uu.pending.fill(0);
          return
        }
        const Uu = Math.min(Eu, 250) / 1e3;
        for (const Zu of this.smokes) {
          const [Eu, su, Xu] = Zu.pos;
          if (0 !== uu.getBlockId(Eu, su + 1, Xu)) {
            Zu.pending.fill(0);
            continue
          }
          const lu = (Zu.endMs - ju) / 6e3,
            qu = this.centre;
          qu[0] = Eu + .5, qu[1] = su + 1.275, qu[2] = Xu + .5, ku.forEach(((Eu, ju) => {
            Zu.pending[ju] += Eu.perSecond * lu * Uu;
            const su = Math.floor(Zu.pending[ju]);
            su > 0 && this.emit(uu, ju, qu, su) && (Zu.pending[ju] -= su)
          }))
        }
      }
      dispose(uu) {
        for (const ju of this.smokes) vu(uu, ju);
        this.smokes = [];
        for (const ju of null !== (Eu = this.puffers) && void 0 !== Eu ? Eu : []) {
          var Eu;
          ju.dispose()
        }
        this.puffers = null
      }
      emit(uu, Eu, ju, su) {
        return this.puffers ??= ku.map((uu => {
          let {
            style: Eu,
            perSecond: ju
          } = uu;
          const su = (Eu.count / .3 + ju) * Eu.life[1];
          return new Gu.h(Eu, Math.ceil(4 * su), ou)
        })), this.puffers[Eu].emit(uu, ju, this.renderFrame, su)
      }
    }

    function vu(uu, Eu) {
      null !== Eu.fire && (uu.disposeGameMesh(Eu.fire), Eu.fire = null)
    }

    function Ku() {
      let uu;
      const Eu = new mu;
      return {
        onCreate(Eu) {
          uu = Eu
        },
        onReceivedMessageFromServer(ju, su) {
          ju === Xu.A && Eu.start(uu, su)
        },
        onAfterRender(ju) {
          Eu.onAfterRender(uu, ju)
        },
        onClose() {
          Eu.dispose(uu)
        }
      }
    }

    function Vu(uu, Eu, ju, su) {
      return {
        dialogue: eu(su.localPlayerId),
        fishing: Du(su.localPlayerId),
        furnaceSmoke: Ku(),
        ironChest: Uu()
      }
    }

    function ru(uu, Eu) {
      for (const Uu of [uu, ...null !== Eu && void 0 !== Eu ? Eu : []]) try {
        var ju;
        null === Uu || void 0 === Uu || null === (ju = Uu.onClose) || void 0 === ju || ju.call(Uu)
      } catch (su) {
        console.error("Error in client onClose callback", su)
      }
    }
  },
  39461: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su,
      h: () => Zu
    });
    const su = 1 / .6,
      Uu = {
        kind: "smokePuff"
      };
    class Zu {
      constructor(uu, Eu, ju) {
        this.style = uu, this.Mb = Eu, this.half = ju, this.particles = null, this.lastFrame = -1
      }
      emit(uu, Eu, ju) {
        let Zu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ju !== this.lastFrame && (this.lastFrame = ju, this.particles || (this.particles = uu.createParticles(function(uu, Eu) {
          const [
            [ju, Zu, Xu],
            [lu, qu, fu]
          ] = uu.colours;
          return {
            texture: uu.soft ? Uu : "square_particle",
            Mb: Eu,
            minLifeTime: uu.life[0] / su,
            maxLifeTime: uu.life[1] / su,
            minEmitPower: uu.power[0] * su,
            maxEmitPower: uu.power[1] * su,
            minSize: uu.size[0],
            maxSize: uu.size[1],
            emitRate: 0,
            gravity: [0, uu.lift * su * su, 0],
            dir1: [-uu.spread, 1, -uu.spread],
            dir2: [uu.spread, 1, uu.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ju, Zu, Xu, uu.alpha],
              maxColor: [lu, qu, fu, uu.alpha]
            }, {
              timeFraction: 1,
              minColor: [ju, Zu, Xu, 0],
              maxColor: [lu, qu, fu, 0]
            }],
            blendMode: uu.blendMode
          }
        }(this.style, this.Mb), {
          pos: Eu,
          half: this.half
        })), this.particles.moveTo(Eu, this.half), this.particles.emit(Zu), !0)
      }
      dispose() {
        var uu;
        null === (uu = this.particles) || void 0 === uu || uu.stop(), this.particles = null
      }
    }
  },
  5011: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      h: () => su,
      j: () => Zu,
      l: () => qu,
      o: () => Xu
    });
    const su = ["sine", "triangle", "square", "sawtooth"],
      Uu = 55,
      Zu = {
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

    function Xu(uu) {
      return "string" !== typeof uu ? uu : Object.hasOwn(Zu, uu) ? Zu[uu] : null
    }

    function lu(uu, Eu, ju) {
      return Math.min(ju, Math.max(Eu, uu))
    }

    function qu(uu) {
      const Eu = lu(uu.durationMs, 10, 500),
        ju = lu(uu.attackMs, 0, Eu),
        {
          intonation: Uu
        } = uu;
      return {
        waveform: su.includes(uu.waveform) ? uu.waveform : "sine",
        pitchHz: lu(uu.pitchHz, 20, 4e3),
        glideSemitones: lu(uu.glideSemitones, -24, 24),
        durationMs: Eu,
        attackMs: ju,
        releaseMs: lu(uu.releaseMs, 0, Eu - ju),
        lowpassHz: null === uu.lowpassHz ? null : lu(uu.lowpassHz, 20, 2e4),
        volume: lu(uu.volume, 0, 2),
        intonation: {
          variationSemitones: lu(Uu.variationSemitones, 0, 6),
          declineSemitones: lu(Uu.declineSemitones, 0, 12),
          questionRiseSemitones: lu(Uu.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: lu(Uu.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: lu(uu.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);