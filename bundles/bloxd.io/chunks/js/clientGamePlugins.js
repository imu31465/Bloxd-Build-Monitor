export const id = 27;
export const ids = [27];
export const modules = {
  4568: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Gk,
      h: () => ck
    });
    var Rk = Bk(4570),
      tk = Bk(279);
    const ak = 120,
      Xk = 260,
      bk = 1.15,
      wk = 1.2,
      dk = 2,
      sk = 1.08,
      Vk = .8,
      Jk = .95,
      Ak = 8,
      ek = "[\"')\\]\u300d\u300f\uff09]*",
      yk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ek}$`),
      fk = new RegExp(`[?\uff1f]${ek}$`),
      mk = new RegExp(`[!\uff01]${ek}$`),
      Wk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      ik = new RegExp(`[${vk}]`),
      Yk = new RegExp(`[${vk}]|[^${vk}]+`, "g"),
      Lk = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Ok(kk) {
      let Fk = 2166136261;
      for (let Bk = 0; Bk < kk.length; Bk++) Fk ^= kk.charCodeAt(Bk), Fk = Math.imul(Fk, 16777619);
      return (Fk >>> 0) / 4294967295 * 2 - 1
    }

    function Ek(kk) {
      var Fk;
      if (ik.test(kk)) return 1;
      const Bk = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Rk = Bk.replace(/[^0-9]/g, "");
      if (Rk.length > 0 && !/\p{L}/u.test(Bk)) return Math.min(Rk.length, 4);
      const tk = null !== (Fk = Bk.match(Lk)) && void 0 !== Fk ? Fk : [];
      if (0 === tk.length) {
        var ak, Xk;
        const kk = null !== (ak = null === (Xk = Bk.match(/\p{L}/gu)) || void 0 === Xk ? void 0 : Xk.length) && void 0 !== ak ? ak : 0;
        return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), Ak)
      }
      const bk = Bk.replace(/[^\p{L}]/gu, ""),
        wk = tk.length > 1 && "e" === tk.at(-1) && bk.endsWith("e") && !bk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
      return Math.min(tk.length - (wk ? 1 : 0), Ak)
    }

    function Sk(kk) {
      return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Nk(kk) {
      const Fk = kk.replace(/[^\p{L}]/gu, "");
      return Fk.length >= 2 && Fk === Fk.toUpperCase() && Fk !== Fk.toLowerCase()
    }

    function Hk(kk, Fk) {
      var Bk;
      const Ak = Fk && (0, Rk.l)(Fk),
        ek = null !== (Bk = null === Ak || void 0 === Ak ? void 0 : Ak.syllableMs) && void 0 !== Bk ? Bk : Rk.e,
        vk = function(kk) {
          const Fk = [];
          for (const Rk of (0, tk.bc)(kk))
            if ("string" === typeof Rk)
              for (const kk of Rk.split(/(\s+)/)) {
                if ("" === kk) continue;
                if (/^\s+$/.test(kk)) {
                  Fk.push({
                    kind: "space",
                    text: kk
                  });
                  continue
                }
                if (!ik.test(kk)) {
                  Fk.push({
                    kind: "word",
                    text: kk,
                    delayMs: 0
                  });
                  continue
                }
                let Rk = !0;
                for (const tk of null !== (Bk = kk.match(Yk)) && void 0 !== Bk ? Bk : []) {
                  var Bk;
                  const kk = Fk.at(-1);
                  Rk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || ik.test(tk) || /[\p{L}\p{N}]/u.test(tk) ? (Rk || Fk.push({
                    kind: "space",
                    text: "\u200b"
                  }), Fk.push({
                    kind: "word",
                    text: tk,
                    delayMs: 0
                  }), Rk = !1) : kk.text += tk
                }
              } else Fk.push({
                kind: "icon",
                text: Rk.icon,
                delayMs: 0
              });
          return Fk
        }(kk),
        Lk = [];
      let Hk = [];
      for (const Rk of vk) "space" !== Rk.kind && (Hk.push(Rk), yk.test(Rk.text) && (Lk.push(Hk), Hk = []));
      Lk.push(Hk);
      const uk = [];
      let Mk = 0;
      for (const Rk of Lk) {
        var gk, Uk;
        const kk = null !== (gk = null === (Uk = Rk.at(-1)) || void 0 === Uk ? void 0 : Uk.text) && void 0 !== gk ? gk : "",
          Fk = fk.test(kk),
          Bk = mk.test(kk),
          tk = Rk.map((kk => "word" === kk.kind ? Ek(kk.text) : 1)),
          vk = tk.findLastIndex((kk => kk > 0));
        for (const [fk, mk] of Rk.entries()) {
          const kk = "word" === mk.kind,
            Rk = tk[fk];
          mk.delayMs = Mk;
          for (let tk = 0; Ak && tk < Rk; tk++) {
            const {
              intonation: ak
            } = Ak;
            let Xk = vk > 0 ? -ak.declineSemitones * (fk / vk) : 0;
            Xk += Ok(`${Sk(mk.text)}|${tk}`) * ak.variationSemitones;
            const yk = Math.min(1, ak.variationSemitones);
            let Wk = Ak.glideSemitones,
              ik = 1;
            Bk && (Xk += ak.exclaimLiftSemitones, ik *= bk), Fk && fk === vk && (Xk += ak.questionRiseSemitones * (Rk > 1 ? .5 + .5 * tk / (Rk - 1) : 1), tk === Rk - 1 && (Wk = Math.abs(Wk) + ak.questionRiseSemitones / 2)), kk && Nk(mk.text) && (Xk += dk * yk, ik *= wk), Rk > 1 && 0 === tk && (Xk += Vk * yk, ik *= sk), uk.push({
              atMs: Mk + tk * ek,
              semitones: Xk,
              glideSemitones: Wk,
              durationMs: tk < Rk - 1 ? Math.min(Ak.durationMs, ek * Jk) : Ak.durationMs,
              level: ik
            })
          }
          Mk += Rk * ek + (yk.test(mk.text) ? Xk : Wk.test(mk.text) ? ak : 0)
        }
      }
      return {
        pieces: vk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
          kind: "icon",
          icon: kk.text,
          delayMs: kk.delayMs
        } : {
          kind: "word",
          text: kk.text,
          delayMs: kk.delayMs
        })),
        blips: uk
      }
    }
    var uk = Bk(1149),
      Mk = Bk(1203),
      gk = Bk(1849);

    function Uk(kk) {
      if ("string" === typeof kk) return kk;
      const Fk = Mk.c.get().getCurrentLanguageCode();
      return (0, uk.m)(Fk, kk.translationKey, (0, uk.k)(kk.params, gk.b.shown))
    }

    function ck(kk) {
      const Fk = void 0 === kk.voice ? null : (0, Rk.m)(kk.voice),
        Bk = Fk && (0, Rk.l)(Fk);
      return {
        plan: Hk(Uk(kk.line), Bk),
        synth: Bk
      }
    }

    function Gk(kk) {
      const Fk = [];
      let Bk = [];
      for (const [tk, ak] of kk.entries()) {
        var Rk;
        "space" === ak.kind && (" " !== ak.text || "icon" !== (null === (Rk = kk[tk + 1]) || void 0 === Rk ? void 0 : Rk.kind)) ? (Bk.length > 0 && Fk.push(Bk), Fk.push([ak]), Bk = []) : Bk.push(ak)
      }
      return Bk.length > 0 && Fk.push(Bk), Fk
    }
  },
  4573: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => sk,
      f: () => Vk
    });
    var Rk = Bk(4575),
      tk = Bk(22);
    const ak = .25,
      Xk = .85,
      bk = .02,
      wk = .01;

    function dk(kk, Fk, Bk, Rk, tk, ak, bk) {
      const {
        waveform: wk,
        pitchHz: dk,
        attackMs: sk,
        releaseMs: Vk,
        lowpassHz: Jk
      } = Bk, Ak = tk + Rk.durationMs / 1e3, ek = dk * 2 ** (Rk.semitones / 12), yk = kk.createOscillator();
      yk.type = wk, yk.frequency.setValueAtTime(ek, tk), yk.frequency.exponentialRampToValueAtTime(ek * 2 ** (Rk.glideSemitones / 12), Ak);
      const fk = tk + Math.min(sk, Rk.durationMs) / 1e3,
        mk = kk.createGain();
      mk.gain.setValueAtTime(0, tk), mk.gain.linearRampToValueAtTime(ak, fk), mk.gain.linearRampToValueAtTime(ak * Xk, Math.max(fk, Ak - Vk / 1e3)), mk.gain.linearRampToValueAtTime(0, Ak);
      const Wk = [yk];
      if (null !== Jk) {
        const Fk = kk.createBiquadFilter();
        Fk.type = "lowpass", Fk.frequency.value = Jk, Wk.push(Fk)
      }
      Wk.push(mk, Fk);
      for (let Xk = 1; Xk < Wk.length; Xk++) Wk[Xk - 1].connect(Wk[Xk]);
      return yk.onended = () => {
        for (const kk of Wk.slice(0, -1)) kk.disconnect();
        bk()
      }, yk.start(tk), yk.stop(Ak), yk
    }

    function sk(kk, Fk, Bk, Rk, tk, Xk) {
      if (0 === Rk.length) return Xk(), () => {};
      const sk = ak * Bk.volume * tk,
        Vk = kk.createGain();
      Vk.connect(Fk);
      const Jk = kk.currentTime + bk,
        Ak = new Set;
      for (const ak of Rk) {
        const Fk = dk(kk, Vk, Bk, ak, Jk + ak.atMs / 1e3, sk * ak.level, (() => {
          Ak.delete(Fk), 0 === Ak.size && (Vk.disconnect(), Xk())
        }));
        Ak.add(Fk)
      }
      return () => {
        const Fk = kk.currentTime;
        Vk.gain.setTargetAtTime(0, Fk, wk);
        for (const kk of Ak) try {
          kk.stop(Fk + 5 * wk)
        } catch {}
      }
    }

    function Vk(kk, Fk) {
      var Bk;
      const ak = Rk.Howler.ctx,
        Xk = Rk.Howler.masterGain;
      if (!ak || !Xk || !tk.c.get("soundOnFromAd")) return () => {};
      const bk = Rk.Howler;
      return null === (Bk = bk._autoResume) || void 0 === Bk || Bk.call(bk), sk(ak, Xk, kk, Fk, tk.c.get("soundVolume"), (() => {
        var kk;
        null === (kk = bk._autoSuspend) || void 0 === kk || kk.call(bk)
      }))
    }
  },
  38763: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      closeClientGame: () => Tk,
      createDefaultClientPlugins: () => Gk
    });
    var Rk = Bk(291);

    function tk() {
      let kk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Fk, Bk, tk, ak, Xk, bk) {
          var wk, dk;
          if ("Iron Chest" !== kk.getMetaInfo(Xk).rootName) return;
          if (!kk.hasEffect(Fk, "Thief")) return;
          const sk = kk.getBlockData(Bk, tk, ak);
          return kk.getPlayerDbId(Fk) !== (null === sk || void 0 === sk || null === (wk = sk.persisted) || void 0 === wk || null === (dk = wk.shared) || void 0 === dk ? void 0 : dk.ownerDbId) ? (kk.sendMessage(Fk, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Rk.N.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var ak = Bk(4002),
      Xk = Bk(1192);
    const bk = 8.4,
      wk = 1e-4,
      dk = .15,
      sk = .04,
      Vk = [.12, .04, .12],
      Jk = 26,
      Ak = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        KV: 1,
        minLifeTime: wk,
        maxLifeTime: wk,
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
        blendMode: ak.d.Standard
      },
      ek = {
        texture: "bubble",
        mipmaps: !1,
        KV: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Jk,
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
        blendMode: ak.d.Standard
      },
      yk = [0, 0, 0],
      fk = [0, 0, 0];

    function mk(kk) {
      const Fk = new Map;
      let Bk = null;

      function Rk(kk) {
        var Fk, Bk;
        null === (Fk = kk.bubbles) || void 0 === Fk || Fk.stop(), null === (Bk = kk.fish) || void 0 === Bk || Bk.stop()
      }

      function tk(Bk) {
        if (!Bk.readDrawnPosition(kk, fk)) {
          for (const kk of Fk.values()) {
            var Rk;
            null === (Rk = kk.bubbles) || void 0 === Rk || Rk.setEmitRate(0)
          }
          return
        }
        const tk = performance.now();
        for (const [kk, Xk] of Fk) {
          var ak;
          if (null === (ak = Xk.bubbles) || void 0 === ak || ak.setEmitRate(0), !Bk.readDrawnPosition(kk, yk)) continue;
          if (!((yk[0] - fk[0]) ** 2 + (yk[1] - fk[1]) ** 2 + (yk[2] - fk[2]) ** 2 < 900)) continue;
          const Fk = Math.max(0, Xk.biteAt - tk),
            Rk = Xk.approachDurationMs > 0 ? Math.min(1, 1 - Fk / Xk.approachDurationMs) : 1,
            wk = (Xk.approachDurationMs - Fk) / 1e3,
            mk = Xk.phase + .25 * Math.sin(1.7 * wk + Xk.phase),
            Wk = Math.min(Xk.approachDurationMs / 3e3 * 2.8, bk) * (1 - Rk) * (1 + .15 * Math.sin(2.1 * wk + Xk.phase)),
            vk = Math.min(1, 4 * (1 - Rk)),
            ik = (.45 * Math.sin(4.1 * wk + Xk.phase) + .18 * Math.sin(9.7 * wk + 2 * Xk.phase)) * vk,
            Yk = yk[0] + Math.cos(mk) * Wk - Math.sin(mk) * ik,
            Lk = Math.ceil(Xk.surfaceY),
            Ok = yk[2] + Math.sin(mk) * Wk + Math.cos(mk) * ik,
            {
              fishAt: Ek,
              bubblesAt: Sk
            } = Xk;
          Ek[0] = Sk[0] = Yk, Ek[1] = Lk + dk, Sk[1] = Lk + sk, Ek[2] = Sk[2] = Ok, Xk.fish ??= Bk.createParticles(Ak, {
            pos: Ek
          }), Xk.fish.moveTo(Ek), Xk.fish.emit(1), Xk.bubbles ??= Bk.createParticles(ek, {
            pos: Sk,
            half: Vk
          }), Xk.bubbles.moveTo(Sk), Xk.bubbles.setEmitRate(Jk + 32 * (.5 + .5 * Math.sin(9 * wk + Xk.phase)) ** 4 + 13 * Rk)
        }
      }
      return {
        onCreate(kk) {
          Bk = kk
        },
        onAfterRender() {
          Bk && tk(Bk)
        },
        onClose() {
          for (const kk of Fk.values()) Rk(kk);
          Fk.clear(), Bk = null
        },
        onReceivedMessageFromServer(kk, Bk) {
          if (kk !== Xk.x) return;
          const {
            hookId: tk,
            waiting: ak
          } = Bk;
          if (ak) Fk.has(tk) || Fk.set(tk, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + ak.remainingMs,
            approachDurationMs: ak.durationMs,
            surfaceY: ak.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const kk = Fk.get(tk);
            kk && Rk(kk), Fk.delete(tk)
          }
        }
      }
    }
    var Wk = Bk(4573),
      vk = Bk(4568);

    function ik(kk) {
      let Fk, Bk = null,
        Rk = null;
      const tk = () => {
        var kk;
        null === (kk = Rk) || void 0 === kk || kk(), Rk = null
      };
      return {
        onCreate(Rk) {
          Fk = Rk, Bk = Fk.getClientOption(kk, "dialogue")
        },
        onAfterRender() {
          if (!Fk) return;
          const ak = Fk.getClientOption(kk, "dialogue");
          if (ak === Bk) return;
          if (Bk = ak, tk(), !ak || !1 === ak.animateIn) return;
          const {
            plan: Xk,
            synth: bk
          } = (0, vk.h)(ak);
          bk && (Rk = (0, Wk.f)(bk, Xk.blips))
        },
        onClose: tk
      }
    }
    var Yk = Bk(38766);
    const Lk = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Ok = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Ek = [0, 1, 2, 0, 2, 3];

    function Sk(kk, Fk, Bk) {
      var Rk;
      let [tk, ak, Xk] = Fk;
      if (kk.hasPackModel("Furnace")) return null;
      const bk = ((null !== (Rk = kk.getMetaInfo(Bk).rot) && void 0 !== Rk ? Rk : 1) - 1) * Math.PI / 2,
        wk = Math.PI + bk,
        dk = Math.cos(wk),
        sk = Math.sin(wk),
        Vk = [];
      for (const [ek, yk] of Lk) Vk.push(ek * dk, yk, -ek * sk);
      const Jk = {
          positions: Vk,
          indices: Ek,
          uvs: Ok
        },
        Ak = [tk + .5 + .51 * Math.sin(bk), ak + .375, Xk + .5 + .51 * Math.cos(bk)];
      return kk.createGameMesh(Jk, {
        kind: "furnaceFire"
      }, Ak)
    }

    function Nk(kk) {
      return Math.floor(kk / 200) % 3
    }

    function Hk(kk, Fk, Bk) {
      kk.setGameMesh(Fk, {
        uvOffset: [0, Bk / 3]
      })
    }
    const uk = [.12, .025, .12],
      Mk = [{
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
          blendMode: ak.d.Standard,
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
          blendMode: ak.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class gk {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(kk, Fk) {
        const Bk = kk.getBlockId(Fk[0], Fk[1], Fk[2]);
        if ("Furnace" !== kk.getMetaInfo(Bk).rootName) return;
        const Rk = performance.now();
        let tk = this.smokes.find((kk => kk.pos[0] === Fk[0] && kk.pos[1] === Fk[1] && kk.pos[2] === Fk[2] && kk.Ts === Bk));
        if (tk || (tk = {
            pos: [Fk[0], Fk[1], Fk[2]],
            Ts: Bk,
            endMs: Rk,
            lastBurstMs: -1 / 0,
            pending: new Array(Mk.length).fill(0),
            fire: Sk(kk, Fk, Bk)
          }, this.smokes.push(tk), null !== tk.fire && (Hk(kk, tk.fire, Nk(Rk)), this.shownFireFrame = -1)), tk.endMs = Rk + 6e3, this.smokes.length > 4) {
          const Fk = this.smokes.reduce(((kk, Fk) => Fk.endMs < kk.endMs ? Fk : kk));
          Uk(kk, Fk), this.smokes.splice(this.smokes.indexOf(Fk), 1)
        }
        Rk - tk.lastBurstMs >= 300 && (tk.lastBurstMs = Rk, Mk.forEach(((kk, Fk) => {
          tk.pending[Fk] += kk.style.count
        })))
      }
      onAfterRender(kk, Fk) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Bk = performance.now();
        this.smokes = this.smokes.filter((Fk => {
          const [Rk, tk, ak] = Fk.pos, Xk = Bk < Fk.endMs && kk.getBlockId(Rk, tk, ak) === Fk.Ts;
          return Xk || Uk(kk, Fk), Xk
        }));
        const Rk = Nk(Bk);
        if (Rk !== this.shownFireFrame) {
          this.shownFireFrame = Rk;
          for (const Fk of this.smokes) null !== Fk.fire && Hk(kk, Fk.fire, Rk)
        }
        if (!kk.particlesEnabled()) {
          for (const kk of this.smokes) kk.pending.fill(0);
          return
        }
        const tk = Math.min(Fk, 250) / 1e3;
        for (const ak of this.smokes) {
          const [Fk, Rk, Xk] = ak.pos;
          if (0 !== kk.getBlockId(Fk, Rk + 1, Xk)) {
            ak.pending.fill(0);
            continue
          }
          const bk = (ak.endMs - Bk) / 6e3,
            wk = this.centre;
          wk[0] = Fk + .5, wk[1] = Rk + 1.275, wk[2] = Xk + .5, Mk.forEach(((Fk, Bk) => {
            ak.pending[Bk] += Fk.perSecond * bk * tk;
            const Rk = Math.floor(ak.pending[Bk]);
            Rk > 0 && this.emit(kk, Bk, wk, Rk) && (ak.pending[Bk] -= Rk)
          }))
        }
      }
      dispose(kk) {
        for (const Bk of this.smokes) Uk(kk, Bk);
        this.smokes = [];
        for (const Bk of null !== (Fk = this.puffers) && void 0 !== Fk ? Fk : []) {
          var Fk;
          Bk.dispose()
        }
        this.puffers = null
      }
      emit(kk, Fk, Bk, Rk) {
        return this.puffers ??= Mk.map((kk => {
          let {
            style: Fk,
            perSecond: Bk
          } = kk;
          const Rk = (Fk.count / .3 + Bk) * Fk.life[1];
          return new Yk.e(Fk, Math.ceil(4 * Rk), uk)
        })), this.puffers[Fk].emit(kk, Bk, this.renderFrame, Rk)
      }
    }

    function Uk(kk, Fk) {
      null !== Fk.fire && (kk.disposeGameMesh(Fk.fire), Fk.fire = null)
    }

    function ck() {
      let kk;
      const Fk = new gk;
      return {
        onCreate(Fk) {
          kk = Fk
        },
        onReceivedMessageFromServer(Bk, Rk) {
          Bk === Xk.y && Fk.start(kk, Rk)
        },
        onAfterRender(Bk) {
          Fk.onAfterRender(kk, Bk)
        },
        onClose() {
          Fk.dispose(kk)
        }
      }
    }

    function Gk(kk, Fk, Bk, Rk) {
      return {
        dialogue: ik(Rk.localPlayerId),
        fishing: mk(Rk.localPlayerId),
        furnaceSmoke: ck(),
        ironChest: tk()
      }
    }

    function Tk(kk, Fk) {
      for (const tk of [kk, ...null !== Fk && void 0 !== Fk ? Fk : []]) try {
        var Bk;
        null === tk || void 0 === tk || null === (Bk = tk.onClose) || void 0 === Bk || Bk.call(tk)
      } catch (Rk) {
        console.error("Error in client onClose callback", Rk)
      }
    }
  },
  38766: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk,
      e: () => ak
    });
    const Rk = 1 / .6,
      tk = {
        kind: "smokePuff"
      };
    class ak {
      constructor(kk, Fk, Bk) {
        this.style = kk, this.KV = Fk, this.half = Bk, this.particles = null, this.lastFrame = -1
      }
      emit(kk, Fk, Bk) {
        let ak = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Bk !== this.lastFrame && (this.lastFrame = Bk, this.particles || (this.particles = kk.createParticles(function(kk, Fk) {
          const [
            [Bk, ak, Xk],
            [bk, wk, dk]
          ] = kk.colours;
          return {
            texture: kk.soft ? tk : "square_particle",
            KV: Fk,
            minLifeTime: kk.life[0] / Rk,
            maxLifeTime: kk.life[1] / Rk,
            minEmitPower: kk.power[0] * Rk,
            maxEmitPower: kk.power[1] * Rk,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            emitRate: 0,
            gravity: [0, kk.lift * Rk * Rk, 0],
            dir1: [-kk.spread, 1, -kk.spread],
            dir2: [kk.spread, 1, kk.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Bk, ak, Xk, kk.alpha],
              maxColor: [bk, wk, dk, kk.alpha]
            }, {
              timeFraction: 1,
              minColor: [Bk, ak, Xk, 0],
              maxColor: [bk, wk, dk, 0]
            }],
            blendMode: kk.blendMode
          }
        }(this.style, this.KV), {
          pos: Fk,
          half: this.half
        })), this.particles.moveTo(Fk, this.half), this.particles.emit(ak), !0)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
    }
  },
  4570: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk,
      i: () => Rk,
      j: () => ak,
      l: () => wk,
      m: () => Xk
    });
    const Rk = ["sine", "triangle", "square", "sawtooth"],
      tk = 55,
      ak = {
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

    function Xk(kk) {
      return "string" !== typeof kk ? kk : Object.hasOwn(ak, kk) ? ak[kk] : null
    }

    function bk(kk, Fk, Bk) {
      return Math.min(Bk, Math.max(Fk, kk))
    }

    function wk(kk) {
      const Fk = bk(kk.durationMs, 10, 500),
        Bk = bk(kk.attackMs, 0, Fk),
        {
          intonation: tk
        } = kk;
      return {
        waveform: Rk.includes(kk.waveform) ? kk.waveform : "sine",
        pitchHz: bk(kk.pitchHz, 20, 4e3),
        glideSemitones: bk(kk.glideSemitones, -24, 24),
        durationMs: Fk,
        attackMs: Bk,
        releaseMs: bk(kk.releaseMs, 0, Fk - Bk),
        lowpassHz: null === kk.lowpassHz ? null : bk(kk.lowpassHz, 20, 2e4),
        volume: bk(kk.volume, 0, 2),
        intonation: {
          variationSemitones: bk(tk.variationSemitones, 0, 6),
          declineSemitones: bk(tk.declineSemitones, 0, 12),
          questionRiseSemitones: bk(tk.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bk(tk.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bk(kk.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);