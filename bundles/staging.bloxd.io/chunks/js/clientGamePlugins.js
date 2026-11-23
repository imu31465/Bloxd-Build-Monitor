export const id = 27;
export const ids = [27];
export const modules = {
  4837: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => bk,
      e: () => uk
    });
    var Xk = Ik(4843),
      Tk = Ik(318);
    const ik = 120,
      yk = 260,
      lk = 1.15,
      ak = 1.2,
      qk = 2,
      Lk = 1.08,
      tk = .8,
      Zk = .95,
      jk = 8,
      ek = "[\"')\\]\u300d\u300f\uff09]*",
      wk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
      Hk = new RegExp(`[?\uff1f]${ek}$`),
      Jk = new RegExp(`[!\uff01]${ek}$`),
      xk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Pk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Kk = new RegExp(`[${Pk}]`),
      Qk = new RegExp(`[${Pk}]|[^${Pk}]+`, "g"),
      sk = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Vk(kk) {
      let Fk = 2166136261;
      for (let Ik = 0; Ik < kk.length; Ik++) Fk ^= kk.charCodeAt(Ik), Fk = Math.imul(Fk, 16777619);
      return (Fk >>> 0) / 4294967295 * 2 - 1
    }

    function zk(kk) {
      var Fk;
      if (Kk.test(kk)) return 1;
      const Ik = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Xk = Ik.replace(/[^0-9]/g, "");
      if (Xk.length > 0 && !/\p{L}/u.test(Ik)) return Math.min(Xk.length, 4);
      const Tk = null !== (Fk = Ik.match(sk)) && void 0 !== Fk ? Fk : [];
      if (0 === Tk.length) {
        var ik, yk;
        const kk = null !== (ik = null === (yk = Ik.match(/\p{L}/gu)) || void 0 === yk ? void 0 : yk.length) && void 0 !== ik ? ik : 0;
        return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), jk)
      }
      const lk = Ik.replace(/[^\p{L}]/gu, ""),
        ak = Tk.length > 1 && "e" === Tk.at(-1) && lk.endsWith("e") && !lk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
      return Math.min(Tk.length - (ak ? 1 : 0), jk)
    }

    function Sk(kk) {
      return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function vk(kk) {
      const Fk = kk.replace(/[^\p{L}]/gu, "");
      return Fk.length >= 2 && Fk === Fk.toUpperCase() && Fk !== Fk.toLowerCase()
    }

    function Ek(kk, Fk) {
      var Ik;
      const jk = Fk && (0, Xk.k)(Fk),
        ek = null !== (Ik = null === jk || void 0 === jk ? void 0 : jk.syllableMs) && void 0 !== Ik ? Ik : Xk.b,
        Pk = function(kk) {
          const Fk = [];
          for (const Xk of (0, Tk.oc)(kk))
            if ("string" === typeof Xk)
              for (const kk of Xk.split(/(\s+)/)) {
                if ("" === kk) continue;
                if (/^\s+$/.test(kk)) {
                  Fk.push({
                    kind: "space",
                    text: kk
                  });
                  continue
                }
                if (!Kk.test(kk)) {
                  Fk.push({
                    kind: "word",
                    text: kk,
                    delayMs: 0
                  });
                  continue
                }
                let Xk = !0;
                for (const Tk of null !== (Ik = kk.match(Qk)) && void 0 !== Ik ? Ik : []) {
                  var Ik;
                  const kk = Fk.at(-1);
                  Xk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || Kk.test(Tk) || /[\p{L}\p{N}]/u.test(Tk) ? (Xk || Fk.push({
                    kind: "space",
                    text: "\u200b"
                  }), Fk.push({
                    kind: "word",
                    text: Tk,
                    delayMs: 0
                  }), Xk = !1) : kk.text += Tk
                }
              } else Fk.push({
                kind: "icon",
                text: Xk.icon,
                delayMs: 0
              });
          return Fk
        }(kk),
        sk = [];
      let Ek = [];
      for (const Xk of Pk) "space" !== Xk.kind && (Ek.push(Xk), wk.test(Xk.text) && (sk.push(Ek), Ek = []));
      sk.push(Ek);
      const Ok = [];
      let nk = 0;
      for (const Xk of sk) {
        var Gk, pk;
        const kk = null !== (Gk = null === (pk = Xk.at(-1)) || void 0 === pk ? void 0 : pk.text) && void 0 !== Gk ? Gk : "",
          Fk = Hk.test(kk),
          Ik = Jk.test(kk),
          Tk = Xk.map((kk => "word" === kk.kind ? zk(kk.text) : 1)),
          Pk = Tk.findLastIndex((kk => kk > 0));
        for (const [Hk, Jk] of Xk.entries()) {
          const kk = "word" === Jk.kind,
            Xk = Tk[Hk];
          Jk.delayMs = nk;
          for (let Tk = 0; jk && Tk < Xk; Tk++) {
            const {
              intonation: ik
            } = jk;
            let yk = Pk > 0 ? -ik.declineSemitones * (Hk / Pk) : 0;
            yk += Vk(`${Sk(Jk.text)}|${Tk}`) * ik.variationSemitones;
            const wk = Math.min(1, ik.variationSemitones);
            let xk = jk.glideSemitones,
              Kk = 1;
            Ik && (yk += ik.exclaimLiftSemitones, Kk *= lk), Fk && Hk === Pk && (yk += ik.questionRiseSemitones * (Xk > 1 ? .5 + .5 * Tk / (Xk - 1) : 1), Tk === Xk - 1 && (xk = Math.abs(xk) + ik.questionRiseSemitones / 2)), kk && vk(Jk.text) && (yk += qk * wk, Kk *= ak), Xk > 1 && 0 === Tk && (yk += tk * wk, Kk *= Lk), Ok.push({
              atMs: nk + Tk * ek,
              semitones: yk,
              glideSemitones: xk,
              durationMs: Tk < Xk - 1 ? Math.min(jk.durationMs, ek * Zk) : jk.durationMs,
              level: Kk
            })
          }
          nk += Xk * ek + (wk.test(Jk.text) ? yk : xk.test(Jk.text) ? ik : 0)
        }
      }
      return {
        pieces: Pk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
          kind: "icon",
          icon: kk.text,
          delayMs: kk.delayMs
        } : {
          kind: "word",
          text: kk.text,
          delayMs: kk.delayMs
        })),
        blips: Ok
      }
    }
    var Ok = Ik(1179),
      nk = Ik(1241),
      Gk = Ik(1881);

    function pk(kk) {
      if ("string" === typeof kk) return kk;
      const Fk = nk.d.get().getCurrentLanguageCode();
      return (0, Ok.q)(Fk, kk.translationKey, (0, Ok.m)(kk.params, Gk.d.shown))
    }

    function uk(kk) {
      const Fk = void 0 === kk.voice ? null : (0, Xk.n)(kk.voice),
        Ik = Fk && (0, Xk.k)(Fk);
      return {
        plan: Ek(pk(kk.line), Ik),
        synth: Ik
      }
    }

    function bk(kk) {
      const Fk = [];
      let Ik = [];
      for (const [Tk, ik] of kk.entries()) {
        var Xk;
        "space" === ik.kind && (" " !== ik.text || "icon" !== (null === (Xk = kk[Tk + 1]) || void 0 === Xk ? void 0 : Xk.kind)) ? (Ik.length > 0 && Fk.push(Ik), Fk.push([ik]), Ik = []) : Ik.push(ik)
      }
      return Ik.length > 0 && Fk.push(Ik), Fk
    }
  },
  4850: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Lk,
      i: () => tk
    });
    var Xk = Ik(4857),
      Tk = Ik(25);
    const ik = .25,
      yk = .85,
      lk = .02,
      ak = .01;

    function qk(kk, Fk, Ik, Xk, Tk, ik, lk) {
      const {
        waveform: ak,
        pitchHz: qk,
        attackMs: Lk,
        releaseMs: tk,
        lowpassHz: Zk
      } = Ik, jk = Tk + Xk.durationMs / 1e3, ek = qk * 2 ** (Xk.semitones / 12), wk = kk.createOscillator();
      wk.type = ak, wk.frequency.setValueAtTime(ek, Tk), wk.frequency.exponentialRampToValueAtTime(ek * 2 ** (Xk.glideSemitones / 12), jk);
      const Hk = Tk + Math.min(Lk, Xk.durationMs) / 1e3,
        Jk = kk.createGain();
      Jk.gain.setValueAtTime(0, Tk), Jk.gain.linearRampToValueAtTime(ik, Hk), Jk.gain.linearRampToValueAtTime(ik * yk, Math.max(Hk, jk - tk / 1e3)), Jk.gain.linearRampToValueAtTime(0, jk);
      const xk = [wk];
      if (null !== Zk) {
        const Fk = kk.createBiquadFilter();
        Fk.type = "lowpass", Fk.frequency.value = Zk, xk.push(Fk)
      }
      xk.push(Jk, Fk);
      for (let yk = 1; yk < xk.length; yk++) xk[yk - 1].connect(xk[yk]);
      return wk.onended = () => {
        for (const kk of xk.slice(0, -1)) kk.disconnect();
        lk()
      }, wk.start(Tk), wk.stop(jk), wk
    }

    function Lk(kk, Fk, Ik, Xk, Tk, yk) {
      if (0 === Xk.length) return yk(), () => {};
      const Lk = ik * Ik.volume * Tk,
        tk = kk.createGain();
      tk.connect(Fk);
      const Zk = kk.currentTime + lk,
        jk = new Set;
      for (const ik of Xk) {
        const Fk = qk(kk, tk, Ik, ik, Zk + ik.atMs / 1e3, Lk * ik.level, (() => {
          jk.delete(Fk), 0 === jk.size && (tk.disconnect(), yk())
        }));
        jk.add(Fk)
      }
      return () => {
        const Fk = kk.currentTime;
        tk.gain.setTargetAtTime(0, Fk, ak);
        for (const kk of jk) try {
          kk.stop(Fk + 5 * ak)
        } catch {}
      }
    }

    function tk(kk, Fk) {
      var Ik;
      const ik = Xk.Howler.ctx,
        yk = Xk.Howler.masterGain;
      if (!ik || !yk || !Tk.d.get("soundOnFromAd")) return () => {};
      const lk = Xk.Howler;
      return null === (Ik = lk._autoResume) || void 0 === Ik || Ik.call(lk), Lk(ik, yk, kk, Fk, Tk.d.get("soundVolume"), (() => {
        var kk;
        null === (kk = lk._autoSuspend) || void 0 === kk || kk.call(lk)
      }))
    }
  },
  39149: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      closeClientGame: () => Rk,
      createDefaultClientPlugins: () => bk
    });
    var Xk = Ik(337);

    function Tk() {
      let kk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Fk, Ik, Tk, ik, yk, lk) {
          var ak, qk;
          if ("Iron Chest" !== kk.getMetaInfo(yk).rootName) return;
          if (!kk.hasEffect(Fk, "Thief")) return;
          const Lk = kk.getBlockData(Ik, Tk, ik);
          return kk.getPlayerDbId(Fk) !== (null === Lk || void 0 === Lk || null === (ak = Lk.persisted) || void 0 === ak || null === (qk = ak.shared) || void 0 === qk ? void 0 : qk.ownerDbId) ? (kk.sendMessage(Fk, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Xk.J.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var ik = Ik(4210),
      yk = Ik(1231);
    const lk = 8.4,
      ak = 1e-4,
      qk = .15,
      Lk = .04,
      tk = [.12, .04, .12],
      Zk = 26,
      jk = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        St: 1,
        minLifeTime: ak,
        maxLifeTime: ak,
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
        blendMode: ik.d.Standard
      },
      ek = {
        texture: "bubble",
        mipmaps: !1,
        St: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Zk,
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
        blendMode: ik.d.Standard
      },
      wk = [0, 0, 0],
      Hk = [0, 0, 0];

    function Jk(kk) {
      const Fk = new Map;
      let Ik = null;

      function Xk(kk) {
        var Fk, Ik;
        null === (Fk = kk.bubbles) || void 0 === Fk || Fk.stop(), null === (Ik = kk.fish) || void 0 === Ik || Ik.stop()
      }

      function Tk(Ik) {
        if (!Ik.readDrawnPosition(kk, Hk)) {
          for (const kk of Fk.values()) {
            var Xk;
            null === (Xk = kk.bubbles) || void 0 === Xk || Xk.setEmitRate(0)
          }
          return
        }
        const Tk = performance.now();
        for (const [kk, yk] of Fk) {
          var ik;
          if (null === (ik = yk.bubbles) || void 0 === ik || ik.setEmitRate(0), !Ik.readDrawnPosition(kk, wk)) continue;
          if (!((wk[0] - Hk[0]) ** 2 + (wk[1] - Hk[1]) ** 2 + (wk[2] - Hk[2]) ** 2 < 900)) continue;
          const Fk = Math.max(0, yk.biteAt - Tk),
            Xk = yk.approachDurationMs > 0 ? Math.min(1, 1 - Fk / yk.approachDurationMs) : 1,
            ak = (yk.approachDurationMs - Fk) / 1e3,
            Jk = yk.phase + .25 * Math.sin(1.7 * ak + yk.phase),
            xk = Math.min(yk.approachDurationMs / 3e3 * 2.8, lk) * (1 - Xk) * (1 + .15 * Math.sin(2.1 * ak + yk.phase)),
            Pk = Math.min(1, 4 * (1 - Xk)),
            Kk = (.45 * Math.sin(4.1 * ak + yk.phase) + .18 * Math.sin(9.7 * ak + 2 * yk.phase)) * Pk,
            Qk = wk[0] + Math.cos(Jk) * xk - Math.sin(Jk) * Kk,
            sk = Math.ceil(yk.surfaceY),
            Vk = wk[2] + Math.sin(Jk) * xk + Math.cos(Jk) * Kk,
            {
              fishAt: zk,
              bubblesAt: Sk
            } = yk;
          zk[0] = Sk[0] = Qk, zk[1] = sk + qk, Sk[1] = sk + Lk, zk[2] = Sk[2] = Vk, yk.fish ??= Ik.createParticles(jk, {
            pos: zk
          }), yk.fish.moveTo(zk), yk.fish.emit(1), yk.bubbles ??= Ik.createParticles(ek, {
            pos: Sk,
            half: tk
          }), yk.bubbles.moveTo(Sk), yk.bubbles.setEmitRate(Zk + 32 * (.5 + .5 * Math.sin(9 * ak + yk.phase)) ** 4 + 13 * Xk)
        }
      }
      return {
        onCreate(kk) {
          Ik = kk
        },
        onAfterRender() {
          Ik && Tk(Ik)
        },
        onClose() {
          for (const kk of Fk.values()) Xk(kk);
          Fk.clear(), Ik = null
        },
        onReceivedMessageFromServer(kk, Ik) {
          if (kk !== yk.D) return;
          const {
            hookId: Tk,
            waiting: ik
          } = Ik;
          if (ik) Fk.has(Tk) || Fk.set(Tk, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + ik.remainingMs,
            approachDurationMs: ik.durationMs,
            surfaceY: ik.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const kk = Fk.get(Tk);
            kk && Xk(kk), Fk.delete(Tk)
          }
        }
      }
    }
    var xk = Ik(4850),
      Pk = Ik(4837);

    function Kk(kk) {
      let Fk, Ik = null,
        Xk = null;
      const Tk = () => {
        var kk;
        null === (kk = Xk) || void 0 === kk || kk(), Xk = null
      };
      return {
        onCreate(Xk) {
          Fk = Xk, Ik = Fk.getClientOption(kk, "dialogue")
        },
        onAfterRender() {
          if (!Fk) return;
          const ik = Fk.getClientOption(kk, "dialogue");
          if (ik === Ik) return;
          if (Ik = ik, Tk(), !ik || !1 === ik.animateIn) return;
          const {
            plan: yk,
            synth: lk
          } = (0, Pk.e)(ik);
          lk && (Xk = (0, xk.i)(lk, yk.blips))
        },
        onClose: Tk
      }
    }
    var Qk = Ik(39154);
    const sk = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Vk = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      zk = [0, 1, 2, 0, 2, 3];

    function Sk(kk, Fk, Ik) {
      var Xk;
      let [Tk, ik, yk] = Fk;
      if (kk.hasPackModel("Furnace")) return null;
      const lk = ((null !== (Xk = kk.getMetaInfo(Ik).rot) && void 0 !== Xk ? Xk : 1) - 1) * Math.PI / 2,
        ak = Math.PI + lk,
        qk = Math.cos(ak),
        Lk = Math.sin(ak),
        tk = [];
      for (const [ek, wk] of sk) tk.push(ek * qk, wk, -ek * Lk);
      const Zk = {
          positions: tk,
          indices: zk,
          uvs: Vk
        },
        jk = [Tk + .5 + .51 * Math.sin(lk), ik + .375, yk + .5 + .51 * Math.cos(lk)];
      return kk.createGameMesh(Zk, {
        kind: "furnaceFire"
      }, jk)
    }

    function vk(kk) {
      return Math.floor(kk / 200) % 3
    }

    function Ek(kk, Fk, Ik) {
      kk.setGameMesh(Fk, {
        uvOffset: [0, Ik / 3]
      })
    }
    const Ok = [.12, .025, .12],
      nk = [{
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
          blendMode: ik.d.Standard,
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
          blendMode: ik.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Gk {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(kk, Fk) {
        const Ik = kk.getBlockId(Fk[0], Fk[1], Fk[2]);
        if ("Furnace" !== kk.getMetaInfo(Ik).rootName) return;
        const Xk = performance.now();
        let Tk = this.smokes.find((kk => kk.pos[0] === Fk[0] && kk.pos[1] === Fk[1] && kk.pos[2] === Fk[2] && kk.iL === Ik));
        if (Tk || (Tk = {
            pos: [Fk[0], Fk[1], Fk[2]],
            iL: Ik,
            endMs: Xk,
            lastBurstMs: -1 / 0,
            pending: new Array(nk.length).fill(0),
            fire: Sk(kk, Fk, Ik)
          }, this.smokes.push(Tk), null !== Tk.fire && (Ek(kk, Tk.fire, vk(Xk)), this.shownFireFrame = -1)), Tk.endMs = Xk + 6e3, this.smokes.length > 4) {
          const Fk = this.smokes.reduce(((kk, Fk) => Fk.endMs < kk.endMs ? Fk : kk));
          pk(kk, Fk), this.smokes.splice(this.smokes.indexOf(Fk), 1)
        }
        Xk - Tk.lastBurstMs >= 300 && (Tk.lastBurstMs = Xk, nk.forEach(((kk, Fk) => {
          Tk.pending[Fk] += kk.style.count
        })))
      }
      onAfterRender(kk, Fk) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Ik = performance.now();
        this.smokes = this.smokes.filter((Fk => {
          const [Xk, Tk, ik] = Fk.pos, yk = Ik < Fk.endMs && kk.getBlockId(Xk, Tk, ik) === Fk.iL;
          return yk || pk(kk, Fk), yk
        }));
        const Xk = vk(Ik);
        if (Xk !== this.shownFireFrame) {
          this.shownFireFrame = Xk;
          for (const Fk of this.smokes) null !== Fk.fire && Ek(kk, Fk.fire, Xk)
        }
        if (!kk.particlesEnabled()) {
          for (const kk of this.smokes) kk.pending.fill(0);
          return
        }
        const Tk = Math.min(Fk, 250) / 1e3;
        for (const ik of this.smokes) {
          const [Fk, Xk, yk] = ik.pos;
          if (0 !== kk.getBlockId(Fk, Xk + 1, yk)) {
            ik.pending.fill(0);
            continue
          }
          const lk = (ik.endMs - Ik) / 6e3,
            ak = this.centre;
          ak[0] = Fk + .5, ak[1] = Xk + 1.275, ak[2] = yk + .5, nk.forEach(((Fk, Ik) => {
            ik.pending[Ik] += Fk.perSecond * lk * Tk;
            const Xk = Math.floor(ik.pending[Ik]);
            Xk > 0 && this.emit(kk, Ik, ak, Xk) && (ik.pending[Ik] -= Xk)
          }))
        }
      }
      dispose(kk) {
        for (const Ik of this.smokes) pk(kk, Ik);
        this.smokes = [];
        for (const Ik of null !== (Fk = this.puffers) && void 0 !== Fk ? Fk : []) {
          var Fk;
          Ik.dispose()
        }
        this.puffers = null
      }
      emit(kk, Fk, Ik, Xk) {
        return this.puffers ??= nk.map((kk => {
          let {
            style: Fk,
            perSecond: Ik
          } = kk;
          const Xk = (Fk.count / .3 + Ik) * Fk.life[1];
          return new Qk.f(Fk, Math.ceil(4 * Xk), Ok)
        })), this.puffers[Fk].emit(kk, Ik, this.renderFrame, Xk)
      }
    }

    function pk(kk, Fk) {
      null !== Fk.fire && (kk.disposeGameMesh(Fk.fire), Fk.fire = null)
    }

    function uk() {
      let kk;
      const Fk = new Gk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        onReceivedMessageFromServer(Ik, Xk) {
          Ik === yk.G && Fk.start(kk, Xk)
        },
        onAfterRender(Ik) {
          Fk.onAfterRender(kk, Ik)
        },
        onClose() {
          Fk.dispose(kk)
        }
      }
    }

    function bk(kk, Fk, Ik, Xk) {
      return {
        dialogue: Kk(Xk.localPlayerId),
        fishing: Jk(Xk.localPlayerId),
        furnaceSmoke: uk(),
        ironChest: Tk()
      }
    }

    function Rk(kk, Fk) {
      for (const Tk of [kk, ...null !== Fk && void 0 !== Fk ? Fk : []]) try {
        var Ik;
        null === Tk || void 0 === Tk || null === (Ik = Tk.onClose) || void 0 === Ik || Ik.call(Tk)
      } catch (Xk) {
        console.error("Error in client onClose callback", Xk)
      }
    }
  },
  39154: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk,
      f: () => ik
    });
    const Xk = 1 / .6,
      Tk = {
        kind: "smokePuff"
      };
    class ik {
      constructor(kk, Fk, Ik) {
        this.style = kk, this.St = Fk, this.half = Ik, this.particles = null, this.lastFrame = -1
      }
      emit(kk, Fk, Ik) {
        let ik = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Ik !== this.lastFrame && (this.lastFrame = Ik, this.particles || (this.particles = kk.createParticles(function(kk, Fk) {
          const [
            [Ik, ik, yk],
            [lk, ak, qk]
          ] = kk.colours;
          return {
            texture: kk.soft ? Tk : "square_particle",
            St: Fk,
            minLifeTime: kk.life[0] / Xk,
            maxLifeTime: kk.life[1] / Xk,
            minEmitPower: kk.power[0] * Xk,
            maxEmitPower: kk.power[1] * Xk,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            emitRate: 0,
            gravity: [0, kk.lift * Xk * Xk, 0],
            dir1: [-kk.spread, 1, -kk.spread],
            dir2: [kk.spread, 1, kk.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ik, ik, yk, kk.alpha],
              maxColor: [lk, ak, qk, kk.alpha]
            }, {
              timeFraction: 1,
              minColor: [Ik, ik, yk, 0],
              maxColor: [lk, ak, qk, 0]
            }],
            blendMode: kk.blendMode
          }
        }(this.style, this.St), {
          pos: Fk,
          half: this.half
        })), this.particles.moveTo(Fk, this.half), this.particles.emit(ik), !0)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
    }
  },
  4843: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk,
      d: () => Xk,
      g: () => ik,
      k: () => ak,
      n: () => yk
    });
    const Xk = ["sine", "triangle", "square", "sawtooth"],
      Tk = 55,
      ik = {
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

    function yk(kk) {
      return "string" !== typeof kk ? kk : Object.hasOwn(ik, kk) ? ik[kk] : null
    }

    function lk(kk, Fk, Ik) {
      return Math.min(Ik, Math.max(Fk, kk))
    }

    function ak(kk) {
      const Fk = lk(kk.durationMs, 10, 500),
        Ik = lk(kk.attackMs, 0, Fk),
        {
          intonation: Tk
        } = kk;
      return {
        waveform: Xk.includes(kk.waveform) ? kk.waveform : "sine",
        pitchHz: lk(kk.pitchHz, 20, 4e3),
        glideSemitones: lk(kk.glideSemitones, -24, 24),
        durationMs: Fk,
        attackMs: Ik,
        releaseMs: lk(kk.releaseMs, 0, Fk - Ik),
        lowpassHz: null === kk.lowpassHz ? null : lk(kk.lowpassHz, 20, 2e4),
        volume: lk(kk.volume, 0, 2),
        intonation: {
          variationSemitones: lk(Tk.variationSemitones, 0, 6),
          declineSemitones: lk(Tk.declineSemitones, 0, 12),
          questionRiseSemitones: lk(Tk.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: lk(Tk.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: lk(kk.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);