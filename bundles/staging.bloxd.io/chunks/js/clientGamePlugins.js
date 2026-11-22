export const id = 27;
export const ids = [27];
export const modules = {
  4778: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Qk,
      f: () => zk
    });
    var Dk = ik(4786),
      fk = ik(302);
    const Sk = 120,
      bk = 260,
      rk = 1.15,
      Pk = 1.2,
      mk = 2,
      Mk = 1.08,
      Kk = .8,
      xk = .95,
      nk = 8,
      Uk = "[\"')\\]\u300d\u300f\uff09]*",
      Hk = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Uk}$`),
      wk = new RegExp(`[?\uff1f]${Uk}$`),
      lk = new RegExp(`[!\uff01]${Uk}$`),
      pk = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      yk = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Yk = new RegExp(`[${yk}]`),
      Lk = new RegExp(`[${yk}]|[^${yk}]+`, "g"),
      Ck = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Ak(kk) {
      let ek = 2166136261;
      for (let ik = 0; ik < kk.length; ik++) ek ^= kk.charCodeAt(ik), ek = Math.imul(ek, 16777619);
      return (ek >>> 0) / 4294967295 * 2 - 1
    }

    function jk(kk) {
      var ek;
      if (Yk.test(kk)) return 1;
      const ik = kk.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Dk = ik.replace(/[^0-9]/g, "");
      if (Dk.length > 0 && !/\p{L}/u.test(ik)) return Math.min(Dk.length, 4);
      const fk = null !== (ek = ik.match(Ck)) && void 0 !== ek ? ek : [];
      if (0 === fk.length) {
        var Sk, bk;
        const kk = null !== (Sk = null === (bk = ik.match(/\p{L}/gu)) || void 0 === bk ? void 0 : bk.length) && void 0 !== Sk ? Sk : 0;
        return 0 === kk ? 0 : Math.min(Math.max(1, Math.round(kk / 2.5)), nk)
      }
      const rk = ik.replace(/[^\p{L}]/gu, ""),
        Pk = fk.length > 1 && "e" === fk.at(-1) && rk.endsWith("e") && !rk.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(kk.replace(/[^\p{L}]/gu, ""));
      return Math.min(fk.length - (Pk ? 1 : 0), nk)
    }

    function sk(kk) {
      return kk.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function dk(kk) {
      const ek = kk.replace(/[^\p{L}]/gu, "");
      return ek.length >= 2 && ek === ek.toUpperCase() && ek !== ek.toLowerCase()
    }

    function Vk(kk, ek) {
      var ik;
      const nk = ek && (0, Dk.i)(ek),
        Uk = null !== (ik = null === nk || void 0 === nk ? void 0 : nk.syllableMs) && void 0 !== ik ? ik : Dk.c,
        yk = function(kk) {
          const ek = [];
          for (const Dk of (0, fk.hc)(kk))
            if ("string" === typeof Dk)
              for (const kk of Dk.split(/(\s+)/)) {
                if ("" === kk) continue;
                if (/^\s+$/.test(kk)) {
                  ek.push({
                    kind: "space",
                    text: kk
                  });
                  continue
                }
                if (!Yk.test(kk)) {
                  ek.push({
                    kind: "word",
                    text: kk,
                    delayMs: 0
                  });
                  continue
                }
                let Dk = !0;
                for (const fk of null !== (ik = kk.match(Lk)) && void 0 !== ik ? ik : []) {
                  var ik;
                  const kk = ek.at(-1);
                  Dk || "word" !== (null === kk || void 0 === kk ? void 0 : kk.kind) || Yk.test(fk) || /[\p{L}\p{N}]/u.test(fk) ? (Dk || ek.push({
                    kind: "space",
                    text: "\u200b"
                  }), ek.push({
                    kind: "word",
                    text: fk,
                    delayMs: 0
                  }), Dk = !1) : kk.text += fk
                }
              } else ek.push({
                kind: "icon",
                text: Dk.icon,
                delayMs: 0
              });
          return ek
        }(kk),
        Ck = [];
      let Vk = [];
      for (const Dk of yk) "space" !== Dk.kind && (Vk.push(Dk), Hk.test(Dk.text) && (Ck.push(Vk), Vk = []));
      Ck.push(Vk);
      const Fk = [];
      let uk = 0;
      for (const Dk of Ck) {
        var qk, Ik;
        const kk = null !== (qk = null === (Ik = Dk.at(-1)) || void 0 === Ik ? void 0 : Ik.text) && void 0 !== qk ? qk : "",
          ek = wk.test(kk),
          ik = lk.test(kk),
          fk = Dk.map((kk => "word" === kk.kind ? jk(kk.text) : 1)),
          yk = fk.findLastIndex((kk => kk > 0));
        for (const [wk, lk] of Dk.entries()) {
          const kk = "word" === lk.kind,
            Dk = fk[wk];
          lk.delayMs = uk;
          for (let fk = 0; nk && fk < Dk; fk++) {
            const {
              intonation: Sk
            } = nk;
            let bk = yk > 0 ? -Sk.declineSemitones * (wk / yk) : 0;
            bk += Ak(`${sk(lk.text)}|${fk}`) * Sk.variationSemitones;
            const Hk = Math.min(1, Sk.variationSemitones);
            let pk = nk.glideSemitones,
              Yk = 1;
            ik && (bk += Sk.exclaimLiftSemitones, Yk *= rk), ek && wk === yk && (bk += Sk.questionRiseSemitones * (Dk > 1 ? .5 + .5 * fk / (Dk - 1) : 1), fk === Dk - 1 && (pk = Math.abs(pk) + Sk.questionRiseSemitones / 2)), kk && dk(lk.text) && (bk += mk * Hk, Yk *= Pk), Dk > 1 && 0 === fk && (bk += Kk * Hk, Yk *= Mk), Fk.push({
              atMs: uk + fk * Uk,
              semitones: bk,
              glideSemitones: pk,
              durationMs: fk < Dk - 1 ? Math.min(nk.durationMs, Uk * xk) : nk.durationMs,
              level: Yk
            })
          }
          uk += Dk * Uk + (Hk.test(lk.text) ? bk : pk.test(lk.text) ? Sk : 0)
        }
      }
      return {
        pieces: yk.map((kk => "space" === kk.kind ? kk : "icon" === kk.kind ? {
          kind: "icon",
          icon: kk.text,
          delayMs: kk.delayMs
        } : {
          kind: "word",
          text: kk.text,
          delayMs: kk.delayMs
        })),
        blips: Fk
      }
    }
    var Fk = ik(1172),
      uk = ik(1223),
      qk = ik(1895);

    function Ik(kk) {
      if ("string" === typeof kk) return kk;
      const ek = uk.f.get().getCurrentLanguageCode();
      return (0, Fk.u)(ek, kk.translationKey, (0, Fk.r)(kk.params, qk.c.shown))
    }

    function zk(kk) {
      const ek = void 0 === kk.voice ? null : (0, Dk.m)(kk.voice),
        ik = ek && (0, Dk.i)(ek);
      return {
        plan: Vk(Ik(kk.line), ik),
        synth: ik
      }
    }

    function Qk(kk) {
      const ek = [];
      let ik = [];
      for (const [fk, Sk] of kk.entries()) {
        var Dk;
        "space" === Sk.kind && (" " !== Sk.text || "icon" !== (null === (Dk = kk[fk + 1]) || void 0 === Dk ? void 0 : Dk.kind)) ? (ik.length > 0 && ek.push(ik), ek.push([Sk]), ik = []) : ik.push(Sk)
      }
      return ik.length > 0 && ek.push(ik), ek
    }
  },
  4791: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Mk,
      f: () => Kk
    });
    var Dk = ik(4799),
      fk = ik(22);
    const Sk = .25,
      bk = .85,
      rk = .02,
      Pk = .01;

    function mk(kk, ek, ik, Dk, fk, Sk, rk) {
      const {
        waveform: Pk,
        pitchHz: mk,
        attackMs: Mk,
        releaseMs: Kk,
        lowpassHz: xk
      } = ik, nk = fk + Dk.durationMs / 1e3, Uk = mk * 2 ** (Dk.semitones / 12), Hk = kk.createOscillator();
      Hk.type = Pk, Hk.frequency.setValueAtTime(Uk, fk), Hk.frequency.exponentialRampToValueAtTime(Uk * 2 ** (Dk.glideSemitones / 12), nk);
      const wk = fk + Math.min(Mk, Dk.durationMs) / 1e3,
        lk = kk.createGain();
      lk.gain.setValueAtTime(0, fk), lk.gain.linearRampToValueAtTime(Sk, wk), lk.gain.linearRampToValueAtTime(Sk * bk, Math.max(wk, nk - Kk / 1e3)), lk.gain.linearRampToValueAtTime(0, nk);
      const pk = [Hk];
      if (null !== xk) {
        const ek = kk.createBiquadFilter();
        ek.type = "lowpass", ek.frequency.value = xk, pk.push(ek)
      }
      pk.push(lk, ek);
      for (let bk = 1; bk < pk.length; bk++) pk[bk - 1].connect(pk[bk]);
      return Hk.onended = () => {
        for (const kk of pk.slice(0, -1)) kk.disconnect();
        rk()
      }, Hk.start(fk), Hk.stop(nk), Hk
    }

    function Mk(kk, ek, ik, Dk, fk, bk) {
      if (0 === Dk.length) return bk(), () => {};
      const Mk = Sk * ik.volume * fk,
        Kk = kk.createGain();
      Kk.connect(ek);
      const xk = kk.currentTime + rk,
        nk = new Set;
      for (const Sk of Dk) {
        const ek = mk(kk, Kk, ik, Sk, xk + Sk.atMs / 1e3, Mk * Sk.level, (() => {
          nk.delete(ek), 0 === nk.size && (Kk.disconnect(), bk())
        }));
        nk.add(ek)
      }
      return () => {
        const ek = kk.currentTime;
        Kk.gain.setTargetAtTime(0, ek, Pk);
        for (const kk of nk) try {
          kk.stop(ek + 5 * Pk)
        } catch {}
      }
    }

    function Kk(kk, ek) {
      var ik;
      const Sk = Dk.Howler.ctx,
        bk = Dk.Howler.masterGain;
      if (!Sk || !bk || !fk.b.get("soundOnFromAd")) return () => {};
      const rk = Dk.Howler;
      return null === (ik = rk._autoResume) || void 0 === ik || ik.call(rk), Mk(Sk, bk, kk, ek, fk.b.get("soundVolume"), (() => {
        var kk;
        null === (kk = rk._autoSuspend) || void 0 === kk || kk.call(rk)
      }))
    }
  },
  38719: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      closeClientGame: () => vk,
      createDefaultClientPlugins: () => Qk
    });
    var Dk = ik(314);

    function fk() {
      let kk;
      return {
        onCreate(ek) {
          kk = ek
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(ek, ik, fk, Sk, bk, rk) {
          var Pk, mk;
          if ("Iron Chest" !== kk.getMetaInfo(bk).rootName) return;
          if (!kk.hasEffect(ek, "Thief")) return;
          const Mk = kk.getBlockData(ik, fk, Sk);
          return kk.getPlayerDbId(ek) !== (null === Mk || void 0 === Mk || null === (Pk = Mk.persisted) || void 0 === Pk || null === (mk = Pk.shared) || void 0 === mk ? void 0 : mk.ownerDbId) ? (kk.sendMessage(ek, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Dk.D.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Sk = ik(4189),
      bk = ik(1218);
    const rk = 8.4,
      Pk = 1e-4,
      mk = .15,
      Mk = .04,
      Kk = [.12, .04, .12],
      xk = 26,
      nk = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        vK: 1,
        minLifeTime: Pk,
        maxLifeTime: Pk,
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
        blendMode: Sk.h.Standard
      },
      Uk = {
        texture: "bubble",
        mipmaps: !1,
        vK: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: xk,
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
        blendMode: Sk.h.Standard
      },
      Hk = [0, 0, 0],
      wk = [0, 0, 0];

    function lk(kk) {
      const ek = new Map;
      let ik = null;

      function Dk(kk) {
        var ek, ik;
        null === (ek = kk.bubbles) || void 0 === ek || ek.stop(), null === (ik = kk.fish) || void 0 === ik || ik.stop()
      }

      function fk(ik) {
        if (!ik.readDrawnPosition(kk, wk)) {
          for (const kk of ek.values()) {
            var Dk;
            null === (Dk = kk.bubbles) || void 0 === Dk || Dk.setEmitRate(0)
          }
          return
        }
        const fk = performance.now();
        for (const [kk, bk] of ek) {
          var Sk;
          if (null === (Sk = bk.bubbles) || void 0 === Sk || Sk.setEmitRate(0), !ik.readDrawnPosition(kk, Hk)) continue;
          if (!((Hk[0] - wk[0]) ** 2 + (Hk[1] - wk[1]) ** 2 + (Hk[2] - wk[2]) ** 2 < 900)) continue;
          const ek = Math.max(0, bk.biteAt - fk),
            Dk = bk.approachDurationMs > 0 ? Math.min(1, 1 - ek / bk.approachDurationMs) : 1,
            Pk = (bk.approachDurationMs - ek) / 1e3,
            lk = bk.phase + .25 * Math.sin(1.7 * Pk + bk.phase),
            pk = Math.min(bk.approachDurationMs / 3e3 * 2.8, rk) * (1 - Dk) * (1 + .15 * Math.sin(2.1 * Pk + bk.phase)),
            yk = Math.min(1, 4 * (1 - Dk)),
            Yk = (.45 * Math.sin(4.1 * Pk + bk.phase) + .18 * Math.sin(9.7 * Pk + 2 * bk.phase)) * yk,
            Lk = Hk[0] + Math.cos(lk) * pk - Math.sin(lk) * Yk,
            Ck = Math.ceil(bk.surfaceY),
            Ak = Hk[2] + Math.sin(lk) * pk + Math.cos(lk) * Yk,
            {
              fishAt: jk,
              bubblesAt: sk
            } = bk;
          jk[0] = sk[0] = Lk, jk[1] = Ck + mk, sk[1] = Ck + Mk, jk[2] = sk[2] = Ak, bk.fish ??= ik.createParticles(nk, {
            pos: jk
          }), bk.fish.moveTo(jk), bk.fish.emit(1), bk.bubbles ??= ik.createParticles(Uk, {
            pos: sk,
            half: Kk
          }), bk.bubbles.moveTo(sk), bk.bubbles.setEmitRate(xk + 32 * (.5 + .5 * Math.sin(9 * Pk + bk.phase)) ** 4 + 13 * Dk)
        }
      }
      return {
        onCreate(kk) {
          ik = kk
        },
        onAfterRender() {
          ik && fk(ik)
        },
        onClose() {
          for (const kk of ek.values()) Dk(kk);
          ek.clear(), ik = null
        },
        onReceivedMessageFromServer(kk, ik) {
          if (kk !== bk.D) return;
          const {
            hookId: fk,
            waiting: Sk
          } = ik;
          if (Sk) ek.has(fk) || ek.set(fk, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Sk.remainingMs,
            approachDurationMs: Sk.durationMs,
            surfaceY: Sk.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const kk = ek.get(fk);
            kk && Dk(kk), ek.delete(fk)
          }
        }
      }
    }
    var pk = ik(4791),
      yk = ik(4778);

    function Yk(kk) {
      let ek, ik = null,
        Dk = null;
      const fk = () => {
        var kk;
        null === (kk = Dk) || void 0 === kk || kk(), Dk = null
      };
      return {
        onCreate(Dk) {
          ek = Dk, ik = ek.getClientOption(kk, "dialogue")
        },
        onAfterRender() {
          if (!ek) return;
          const Sk = ek.getClientOption(kk, "dialogue");
          if (Sk === ik) return;
          if (ik = Sk, fk(), !Sk || !1 === Sk.animateIn) return;
          const {
            plan: bk,
            synth: rk
          } = (0, yk.f)(Sk);
          rk && (Dk = (0, pk.f)(rk, bk.blips))
        },
        onClose: fk
      }
    }
    var Lk = ik(38725);
    const Ck = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Ak = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      jk = [0, 1, 2, 0, 2, 3];

    function sk(kk, ek, ik) {
      var Dk;
      let [fk, Sk, bk] = ek;
      if (kk.hasPackModel("Furnace")) return null;
      const rk = ((null !== (Dk = kk.getMetaInfo(ik).rot) && void 0 !== Dk ? Dk : 1) - 1) * Math.PI / 2,
        Pk = Math.PI + rk,
        mk = Math.cos(Pk),
        Mk = Math.sin(Pk),
        Kk = [];
      for (const [Uk, Hk] of Ck) Kk.push(Uk * mk, Hk, -Uk * Mk);
      const xk = {
          positions: Kk,
          indices: jk,
          uvs: Ak
        },
        nk = [fk + .5 + .51 * Math.sin(rk), Sk + .375, bk + .5 + .51 * Math.cos(rk)];
      return kk.createGameMesh(xk, {
        kind: "furnaceFire"
      }, nk)
    }

    function dk(kk) {
      return Math.floor(kk / 200) % 3
    }

    function Vk(kk, ek, ik) {
      kk.setGameMesh(ek, {
        uvOffset: [0, ik / 3]
      })
    }
    const Fk = [.12, .025, .12],
      uk = [{
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
          blendMode: Sk.h.Standard,
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
          blendMode: Sk.h.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class qk {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(kk, ek) {
        const ik = kk.getBlockId(ek[0], ek[1], ek[2]);
        if ("Furnace" !== kk.getMetaInfo(ik).rootName) return;
        const Dk = performance.now();
        let fk = this.smokes.find((kk => kk.pos[0] === ek[0] && kk.pos[1] === ek[1] && kk.pos[2] === ek[2] && kk.wP === ik));
        if (fk || (fk = {
            pos: [ek[0], ek[1], ek[2]],
            wP: ik,
            endMs: Dk,
            lastBurstMs: -1 / 0,
            pending: new Array(uk.length).fill(0),
            fire: sk(kk, ek, ik)
          }, this.smokes.push(fk), null !== fk.fire && (Vk(kk, fk.fire, dk(Dk)), this.shownFireFrame = -1)), fk.endMs = Dk + 6e3, this.smokes.length > 4) {
          const ek = this.smokes.reduce(((kk, ek) => ek.endMs < kk.endMs ? ek : kk));
          Ik(kk, ek), this.smokes.splice(this.smokes.indexOf(ek), 1)
        }
        Dk - fk.lastBurstMs >= 300 && (fk.lastBurstMs = Dk, uk.forEach(((kk, ek) => {
          fk.pending[ek] += kk.style.count
        })))
      }
      onAfterRender(kk, ek) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const ik = performance.now();
        this.smokes = this.smokes.filter((ek => {
          const [Dk, fk, Sk] = ek.pos, bk = ik < ek.endMs && kk.getBlockId(Dk, fk, Sk) === ek.wP;
          return bk || Ik(kk, ek), bk
        }));
        const Dk = dk(ik);
        if (Dk !== this.shownFireFrame) {
          this.shownFireFrame = Dk;
          for (const ek of this.smokes) null !== ek.fire && Vk(kk, ek.fire, Dk)
        }
        if (!kk.particlesEnabled()) {
          for (const kk of this.smokes) kk.pending.fill(0);
          return
        }
        const fk = Math.min(ek, 250) / 1e3;
        for (const Sk of this.smokes) {
          const [ek, Dk, bk] = Sk.pos;
          if (0 !== kk.getBlockId(ek, Dk + 1, bk)) {
            Sk.pending.fill(0);
            continue
          }
          const rk = (Sk.endMs - ik) / 6e3,
            Pk = this.centre;
          Pk[0] = ek + .5, Pk[1] = Dk + 1.275, Pk[2] = bk + .5, uk.forEach(((ek, ik) => {
            Sk.pending[ik] += ek.perSecond * rk * fk;
            const Dk = Math.floor(Sk.pending[ik]);
            Dk > 0 && this.emit(kk, ik, Pk, Dk) && (Sk.pending[ik] -= Dk)
          }))
        }
      }
      dispose(kk) {
        for (const ik of this.smokes) Ik(kk, ik);
        this.smokes = [];
        for (const ik of null !== (ek = this.puffers) && void 0 !== ek ? ek : []) {
          var ek;
          ik.dispose()
        }
        this.puffers = null
      }
      emit(kk, ek, ik, Dk) {
        return this.puffers ??= uk.map((kk => {
          let {
            style: ek,
            perSecond: ik
          } = kk;
          const Dk = (ek.count / .3 + ik) * ek.life[1];
          return new Lk.e(ek, Math.ceil(4 * Dk), Fk)
        })), this.puffers[ek].emit(kk, ik, this.renderFrame, Dk)
      }
    }

    function Ik(kk, ek) {
      null !== ek.fire && (kk.disposeGameMesh(ek.fire), ek.fire = null)
    }

    function zk() {
      let kk;
      const ek = new qk;
      return {
        onCreate(ek) {
          kk = ek
        },
        onReceivedMessageFromServer(ik, Dk) {
          ik === bk.E && ek.start(kk, Dk)
        },
        onAfterRender(ik) {
          ek.onAfterRender(kk, ik)
        },
        onClose() {
          ek.dispose(kk)
        }
      }
    }

    function Qk(kk, ek, ik, Dk) {
      return {
        dialogue: Yk(Dk.localPlayerId),
        fishing: lk(Dk.localPlayerId),
        furnaceSmoke: zk(),
        ironChest: fk()
      }
    }

    function vk(kk, ek) {
      for (const fk of [kk, ...null !== ek && void 0 !== ek ? ek : []]) try {
        var ik;
        null === fk || void 0 === fk || null === (ik = fk.onClose) || void 0 === ik || ik.call(fk)
      } catch (Dk) {
        console.error("Error in client onClose callback", Dk)
      }
    }
  },
  38725: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk,
      e: () => Sk
    });
    const Dk = 1 / .6,
      fk = {
        kind: "smokePuff"
      };
    class Sk {
      constructor(kk, ek, ik) {
        this.style = kk, this.vK = ek, this.half = ik, this.particles = null, this.lastFrame = -1
      }
      emit(kk, ek, ik) {
        let Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ik !== this.lastFrame && (this.lastFrame = ik, this.particles || (this.particles = kk.createParticles(function(kk, ek) {
          const [
            [ik, Sk, bk],
            [rk, Pk, mk]
          ] = kk.colours;
          return {
            texture: kk.soft ? fk : "square_particle",
            vK: ek,
            minLifeTime: kk.life[0] / Dk,
            maxLifeTime: kk.life[1] / Dk,
            minEmitPower: kk.power[0] * Dk,
            maxEmitPower: kk.power[1] * Dk,
            minSize: kk.size[0],
            maxSize: kk.size[1],
            emitRate: 0,
            gravity: [0, kk.lift * Dk * Dk, 0],
            dir1: [-kk.spread, 1, -kk.spread],
            dir2: [kk.spread, 1, kk.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ik, Sk, bk, kk.alpha],
              maxColor: [rk, Pk, mk, kk.alpha]
            }, {
              timeFraction: 1,
              minColor: [ik, Sk, bk, 0],
              maxColor: [rk, Pk, mk, 0]
            }],
            blendMode: kk.blendMode
          }
        }(this.style, this.vK), {
          pos: ek,
          half: this.half
        })), this.particles.moveTo(ek, this.half), this.particles.emit(Sk), !0)
      }
      dispose() {
        var kk;
        null === (kk = this.particles) || void 0 === kk || kk.stop(), this.particles = null
      }
    }
  },
  4786: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk,
      d: () => Dk,
      g: () => Sk,
      i: () => Pk,
      m: () => bk
    });
    const Dk = ["sine", "triangle", "square", "sawtooth"],
      fk = 55,
      Sk = {
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

    function bk(kk) {
      return "string" !== typeof kk ? kk : Object.hasOwn(Sk, kk) ? Sk[kk] : null
    }

    function rk(kk, ek, ik) {
      return Math.min(ik, Math.max(ek, kk))
    }

    function Pk(kk) {
      const ek = rk(kk.durationMs, 10, 500),
        ik = rk(kk.attackMs, 0, ek),
        {
          intonation: fk
        } = kk;
      return {
        waveform: Dk.includes(kk.waveform) ? kk.waveform : "sine",
        pitchHz: rk(kk.pitchHz, 20, 4e3),
        glideSemitones: rk(kk.glideSemitones, -24, 24),
        durationMs: ek,
        attackMs: ik,
        releaseMs: rk(kk.releaseMs, 0, ek - ik),
        lowpassHz: null === kk.lowpassHz ? null : rk(kk.lowpassHz, 20, 2e4),
        volume: rk(kk.volume, 0, 2),
        intonation: {
          variationSemitones: rk(fk.variationSemitones, 0, 6),
          declineSemitones: rk(fk.declineSemitones, 0, 12),
          questionRiseSemitones: rk(fk.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: rk(fk.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: rk(kk.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);