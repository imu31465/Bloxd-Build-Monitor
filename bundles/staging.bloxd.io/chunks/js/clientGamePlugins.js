export const id = 27;
export const ids = [27];
export const modules = {
  4662: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Tq,
      f: () => Mq
    });
    var Yq = gq(4671),
      lq = gq(296);
    const Oq = 120,
      mq = 260,
      xq = 1.15,
      Aq = 1.2,
      cq = 2,
      uq = 1.08,
      Bq = .8,
      Wq = .95,
      Nq = 8,
      aq = "[\"')\\]\u300d\u300f\uff09]*",
      Vq = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${aq}$`),
      dq = new RegExp(`[?\uff1f]${aq}$`),
      jq = new RegExp(`[!\uff01]${aq}$`),
      Hq = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      oq = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Pq = new RegExp(`[${oq}]`),
      Qq = new RegExp(`[${oq}]|[^${oq}]+`, "g"),
      yq = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function tq(qq) {
      let Eq = 2166136261;
      for (let gq = 0; gq < qq.length; gq++) Eq ^= qq.charCodeAt(gq), Eq = Math.imul(Eq, 16777619);
      return (Eq >>> 0) / 4294967295 * 2 - 1
    }

    function rq(qq) {
      var Eq;
      if (Pq.test(qq)) return 1;
      const gq = qq.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Yq = gq.replace(/[^0-9]/g, "");
      if (Yq.length > 0 && !/\p{L}/u.test(gq)) return Math.min(Yq.length, 4);
      const lq = null !== (Eq = gq.match(yq)) && void 0 !== Eq ? Eq : [];
      if (0 === lq.length) {
        var Oq, mq;
        const qq = null !== (Oq = null === (mq = gq.match(/\p{L}/gu)) || void 0 === mq ? void 0 : mq.length) && void 0 !== Oq ? Oq : 0;
        return 0 === qq ? 0 : Math.min(Math.max(1, Math.round(qq / 2.5)), Nq)
      }
      const xq = gq.replace(/[^\p{L}]/gu, ""),
        Aq = lq.length > 1 && "e" === lq.at(-1) && xq.endsWith("e") && !xq.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(qq.replace(/[^\p{L}]/gu, ""));
      return Math.min(lq.length - (Aq ? 1 : 0), Nq)
    }

    function vq(qq) {
      return qq.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function hq(qq) {
      const Eq = qq.replace(/[^\p{L}]/gu, "");
      return Eq.length >= 2 && Eq === Eq.toUpperCase() && Eq !== Eq.toLowerCase()
    }

    function nq(qq, Eq) {
      var gq;
      const Nq = Eq && (0, Yq.i)(Eq),
        aq = null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.syllableMs) && void 0 !== gq ? gq : Yq.b,
        oq = function(qq) {
          const Eq = [];
          for (const Yq of (0, lq.Zb)(qq))
            if ("string" === typeof Yq)
              for (const qq of Yq.split(/(\s+)/)) {
                if ("" === qq) continue;
                if (/^\s+$/.test(qq)) {
                  Eq.push({
                    kind: "space",
                    text: qq
                  });
                  continue
                }
                if (!Pq.test(qq)) {
                  Eq.push({
                    kind: "word",
                    text: qq,
                    delayMs: 0
                  });
                  continue
                }
                let Yq = !0;
                for (const lq of null !== (gq = qq.match(Qq)) && void 0 !== gq ? gq : []) {
                  var gq;
                  const qq = Eq.at(-1);
                  Yq || "word" !== (null === qq || void 0 === qq ? void 0 : qq.kind) || Pq.test(lq) || /[\p{L}\p{N}]/u.test(lq) ? (Yq || Eq.push({
                    kind: "space",
                    text: "\u200b"
                  }), Eq.push({
                    kind: "word",
                    text: lq,
                    delayMs: 0
                  }), Yq = !1) : qq.text += lq
                }
              } else Eq.push({
                kind: "icon",
                text: Yq.icon,
                delayMs: 0
              });
          return Eq
        }(qq),
        yq = [];
      let nq = [];
      for (const Yq of oq) "space" !== Yq.kind && (nq.push(Yq), Vq.test(Yq.text) && (yq.push(nq), nq = []));
      yq.push(nq);
      const bq = [];
      let iq = 0;
      for (const Yq of yq) {
        var Zq, fq;
        const qq = null !== (Zq = null === (fq = Yq.at(-1)) || void 0 === fq ? void 0 : fq.text) && void 0 !== Zq ? Zq : "",
          Eq = dq.test(qq),
          gq = jq.test(qq),
          lq = Yq.map((qq => "word" === qq.kind ? rq(qq.text) : 1)),
          oq = lq.findLastIndex((qq => qq > 0));
        for (const [dq, jq] of Yq.entries()) {
          const qq = "word" === jq.kind,
            Yq = lq[dq];
          jq.delayMs = iq;
          for (let lq = 0; Nq && lq < Yq; lq++) {
            const {
              intonation: Oq
            } = Nq;
            let mq = oq > 0 ? -Oq.declineSemitones * (dq / oq) : 0;
            mq += tq(`${vq(jq.text)}|${lq}`) * Oq.variationSemitones;
            const Vq = Math.min(1, Oq.variationSemitones);
            let Hq = Nq.glideSemitones,
              Pq = 1;
            gq && (mq += Oq.exclaimLiftSemitones, Pq *= xq), Eq && dq === oq && (mq += Oq.questionRiseSemitones * (Yq > 1 ? .5 + .5 * lq / (Yq - 1) : 1), lq === Yq - 1 && (Hq = Math.abs(Hq) + Oq.questionRiseSemitones / 2)), qq && hq(jq.text) && (mq += cq * Vq, Pq *= Aq), Yq > 1 && 0 === lq && (mq += Bq * Vq, Pq *= uq), bq.push({
              atMs: iq + lq * aq,
              semitones: mq,
              glideSemitones: Hq,
              durationMs: lq < Yq - 1 ? Math.min(Nq.durationMs, aq * Wq) : Nq.durationMs,
              level: Pq
            })
          }
          iq += Yq * aq + (Vq.test(jq.text) ? mq : Hq.test(jq.text) ? Oq : 0)
        }
      }
      return {
        pieces: oq.map((qq => "space" === qq.kind ? qq : "icon" === qq.kind ? {
          kind: "icon",
          icon: qq.text,
          delayMs: qq.delayMs
        } : {
          kind: "word",
          text: qq.text,
          delayMs: qq.delayMs
        })),
        blips: bq
      }
    }
    var bq = gq(1183),
      iq = gq(1241),
      Zq = gq(1906);

    function fq(qq) {
      if ("string" === typeof qq) return qq;
      const Eq = iq.h.get().getCurrentLanguageCode();
      return (0, bq.n)(Eq, qq.translationKey, (0, bq.j)(qq.params, Zq.d.shown))
    }

    function Mq(qq) {
      const Eq = void 0 === qq.voice ? null : (0, Yq.m)(qq.voice),
        gq = Eq && (0, Yq.i)(Eq);
      return {
        plan: nq(fq(qq.line), gq),
        synth: gq
      }
    }

    function Tq(qq) {
      const Eq = [];
      let gq = [];
      for (const [lq, Oq] of qq.entries()) {
        var Yq;
        "space" === Oq.kind && (" " !== Oq.text || "icon" !== (null === (Yq = qq[lq + 1]) || void 0 === Yq ? void 0 : Yq.kind)) ? (gq.length > 0 && Eq.push(gq), Eq.push([Oq]), gq = []) : gq.push(Oq)
      }
      return gq.length > 0 && Eq.push(gq), Eq
    }
  },
  4679: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => uq,
      g: () => Bq
    });
    var Yq = gq(4684),
      lq = gq(24);
    const Oq = .25,
      mq = .85,
      xq = .02,
      Aq = .01;

    function cq(qq, Eq, gq, Yq, lq, Oq, xq) {
      const {
        waveform: Aq,
        pitchHz: cq,
        attackMs: uq,
        releaseMs: Bq,
        lowpassHz: Wq
      } = gq, Nq = lq + Yq.durationMs / 1e3, aq = cq * 2 ** (Yq.semitones / 12), Vq = qq.createOscillator();
      Vq.type = Aq, Vq.frequency.setValueAtTime(aq, lq), Vq.frequency.exponentialRampToValueAtTime(aq * 2 ** (Yq.glideSemitones / 12), Nq);
      const dq = lq + Math.min(uq, Yq.durationMs) / 1e3,
        jq = qq.createGain();
      jq.gain.setValueAtTime(0, lq), jq.gain.linearRampToValueAtTime(Oq, dq), jq.gain.linearRampToValueAtTime(Oq * mq, Math.max(dq, Nq - Bq / 1e3)), jq.gain.linearRampToValueAtTime(0, Nq);
      const Hq = [Vq];
      if (null !== Wq) {
        const Eq = qq.createBiquadFilter();
        Eq.type = "lowpass", Eq.frequency.value = Wq, Hq.push(Eq)
      }
      Hq.push(jq, Eq);
      for (let mq = 1; mq < Hq.length; mq++) Hq[mq - 1].connect(Hq[mq]);
      return Vq.onended = () => {
        for (const qq of Hq.slice(0, -1)) qq.disconnect();
        xq()
      }, Vq.start(lq), Vq.stop(Nq), Vq
    }

    function uq(qq, Eq, gq, Yq, lq, mq) {
      if (0 === Yq.length) return mq(), () => {};
      const uq = Oq * gq.volume * lq,
        Bq = qq.createGain();
      Bq.connect(Eq);
      const Wq = qq.currentTime + xq,
        Nq = new Set;
      for (const Oq of Yq) {
        const Eq = cq(qq, Bq, gq, Oq, Wq + Oq.atMs / 1e3, uq * Oq.level, (() => {
          Nq.delete(Eq), 0 === Nq.size && (Bq.disconnect(), mq())
        }));
        Nq.add(Eq)
      }
      return () => {
        const Eq = qq.currentTime;
        Bq.gain.setTargetAtTime(0, Eq, Aq);
        for (const qq of Nq) try {
          qq.stop(Eq + 5 * Aq)
        } catch {}
      }
    }

    function Bq(qq, Eq) {
      var gq;
      const Oq = Yq.Howler.ctx,
        mq = Yq.Howler.masterGain;
      if (!Oq || !mq || !lq.b.get("soundOnFromAd")) return () => {};
      const xq = Yq.Howler;
      return null === (gq = xq._autoResume) || void 0 === gq || gq.call(xq), uq(Oq, mq, qq, Eq, lq.b.get("soundVolume"), (() => {
        var qq;
        null === (qq = xq._autoSuspend) || void 0 === qq || qq.call(xq)
      }))
    }
  },
  39093: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      closeClientGame: () => zq,
      createDefaultClientPlugins: () => Tq
    });
    var Yq = gq(307);

    function lq() {
      let qq;
      return {
        onCreate(Eq) {
          qq = Eq
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Eq, gq, lq, Oq, mq, xq) {
          var Aq, cq;
          if ("Iron Chest" !== qq.getMetaInfo(mq).rootName) return;
          if (!qq.hasEffect(Eq, "Thief")) return;
          const uq = qq.getBlockData(gq, lq, Oq);
          return qq.getPlayerDbId(Eq) !== (null === uq || void 0 === uq || null === (Aq = uq.persisted) || void 0 === Aq || null === (cq = Aq.shared) || void 0 === cq ? void 0 : cq.ownerDbId) ? (qq.sendMessage(Eq, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Yq.M.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Oq = gq(4096),
      mq = gq(1226);
    const xq = 8.4,
      Aq = 1e-4,
      cq = .15,
      uq = .04,
      Bq = [.12, .04, .12],
      Wq = 26,
      Nq = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        WB: 1,
        minLifeTime: Aq,
        maxLifeTime: Aq,
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
        blendMode: Oq.h.Standard
      },
      aq = {
        texture: "bubble",
        mipmaps: !1,
        WB: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Wq,
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
        blendMode: Oq.h.Standard
      },
      Vq = [0, 0, 0],
      dq = [0, 0, 0];

    function jq(qq) {
      const Eq = new Map;
      let gq = null;

      function Yq(qq) {
        var Eq, gq;
        null === (Eq = qq.bubbles) || void 0 === Eq || Eq.stop(), null === (gq = qq.fish) || void 0 === gq || gq.stop()
      }

      function lq(gq) {
        if (!gq.readDrawnPosition(qq, dq)) {
          for (const qq of Eq.values()) {
            var Yq;
            null === (Yq = qq.bubbles) || void 0 === Yq || Yq.setEmitRate(0)
          }
          return
        }
        const lq = performance.now();
        for (const [qq, mq] of Eq) {
          var Oq;
          if (null === (Oq = mq.bubbles) || void 0 === Oq || Oq.setEmitRate(0), !gq.readDrawnPosition(qq, Vq)) continue;
          if (!((Vq[0] - dq[0]) ** 2 + (Vq[1] - dq[1]) ** 2 + (Vq[2] - dq[2]) ** 2 < 900)) continue;
          const Eq = Math.max(0, mq.biteAt - lq),
            Yq = mq.approachDurationMs > 0 ? Math.min(1, 1 - Eq / mq.approachDurationMs) : 1,
            Aq = (mq.approachDurationMs - Eq) / 1e3,
            jq = mq.phase + .25 * Math.sin(1.7 * Aq + mq.phase),
            Hq = Math.min(mq.approachDurationMs / 3e3 * 2.8, xq) * (1 - Yq) * (1 + .15 * Math.sin(2.1 * Aq + mq.phase)),
            oq = Math.min(1, 4 * (1 - Yq)),
            Pq = (.45 * Math.sin(4.1 * Aq + mq.phase) + .18 * Math.sin(9.7 * Aq + 2 * mq.phase)) * oq,
            Qq = Vq[0] + Math.cos(jq) * Hq - Math.sin(jq) * Pq,
            yq = Math.ceil(mq.surfaceY),
            tq = Vq[2] + Math.sin(jq) * Hq + Math.cos(jq) * Pq,
            {
              fishAt: rq,
              bubblesAt: vq
            } = mq;
          rq[0] = vq[0] = Qq, rq[1] = yq + cq, vq[1] = yq + uq, rq[2] = vq[2] = tq, mq.fish ??= gq.createParticles(Nq, {
            pos: rq
          }), mq.fish.moveTo(rq), mq.fish.emit(1), mq.bubbles ??= gq.createParticles(aq, {
            pos: vq,
            half: Bq
          }), mq.bubbles.moveTo(vq), mq.bubbles.setEmitRate(Wq + 32 * (.5 + .5 * Math.sin(9 * Aq + mq.phase)) ** 4 + 13 * Yq)
        }
      }
      return {
        onCreate(qq) {
          gq = qq
        },
        onAfterRender() {
          gq && lq(gq)
        },
        onClose() {
          for (const qq of Eq.values()) Yq(qq);
          Eq.clear(), gq = null
        },
        onReceivedMessageFromServer(qq, gq) {
          if (qq !== mq.D) return;
          const {
            hookId: lq,
            waiting: Oq
          } = gq;
          if (Oq) Eq.has(lq) || Eq.set(lq, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Oq.remainingMs,
            approachDurationMs: Oq.durationMs,
            surfaceY: Oq.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const qq = Eq.get(lq);
            qq && Yq(qq), Eq.delete(lq)
          }
        }
      }
    }
    var Hq = gq(4679),
      oq = gq(4662);

    function Pq(qq) {
      let Eq, gq = null,
        Yq = null;
      const lq = () => {
        var qq;
        null === (qq = Yq) || void 0 === qq || qq(), Yq = null
      };
      return {
        onCreate(Yq) {
          Eq = Yq, gq = Eq.getClientOption(qq, "dialogue")
        },
        onAfterRender() {
          if (!Eq) return;
          const Oq = Eq.getClientOption(qq, "dialogue");
          if (Oq === gq) return;
          if (gq = Oq, lq(), !Oq || !1 === Oq.animateIn) return;
          const {
            plan: mq,
            synth: xq
          } = (0, oq.f)(Oq);
          xq && (Yq = (0, Hq.g)(xq, mq.blips))
        },
        onClose: lq
      }
    }
    var Qq = gq(39098);
    const yq = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      tq = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      rq = [0, 1, 2, 0, 2, 3];

    function vq(qq, Eq, gq) {
      var Yq;
      let [lq, Oq, mq] = Eq;
      if (qq.hasPackModel("Furnace")) return null;
      const xq = ((null !== (Yq = qq.getMetaInfo(gq).rot) && void 0 !== Yq ? Yq : 1) - 1) * Math.PI / 2,
        Aq = Math.PI + xq,
        cq = Math.cos(Aq),
        uq = Math.sin(Aq),
        Bq = [];
      for (const [aq, Vq] of yq) Bq.push(aq * cq, Vq, -aq * uq);
      const Wq = {
          positions: Bq,
          indices: rq,
          uvs: tq
        },
        Nq = [lq + .5 + .51 * Math.sin(xq), Oq + .375, mq + .5 + .51 * Math.cos(xq)];
      return qq.createGameMesh(Wq, {
        kind: "furnaceFire"
      }, Nq)
    }

    function hq(qq) {
      return Math.floor(qq / 200) % 3
    }

    function nq(qq, Eq, gq) {
      qq.setGameMesh(Eq, {
        uvOffset: [0, gq / 3]
      })
    }
    const bq = [.12, .025, .12],
      iq = [{
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
          blendMode: Oq.h.Standard,
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
          blendMode: Oq.h.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Zq {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(qq, Eq) {
        const gq = qq.getBlockId(Eq[0], Eq[1], Eq[2]);
        if ("Furnace" !== qq.getMetaInfo(gq).rootName) return;
        const Yq = performance.now();
        let lq = this.smokes.find((qq => qq.pos[0] === Eq[0] && qq.pos[1] === Eq[1] && qq.pos[2] === Eq[2] && qq.lc === gq));
        if (lq || (lq = {
            pos: [Eq[0], Eq[1], Eq[2]],
            lc: gq,
            endMs: Yq,
            lastBurstMs: -1 / 0,
            pending: new Array(iq.length).fill(0),
            fire: vq(qq, Eq, gq)
          }, this.smokes.push(lq), null !== lq.fire && (nq(qq, lq.fire, hq(Yq)), this.shownFireFrame = -1)), lq.endMs = Yq + 6e3, this.smokes.length > 4) {
          const Eq = this.smokes.reduce(((qq, Eq) => Eq.endMs < qq.endMs ? Eq : qq));
          fq(qq, Eq), this.smokes.splice(this.smokes.indexOf(Eq), 1)
        }
        Yq - lq.lastBurstMs >= 300 && (lq.lastBurstMs = Yq, iq.forEach(((qq, Eq) => {
          lq.pending[Eq] += qq.style.count
        })))
      }
      onAfterRender(qq, Eq) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const gq = performance.now();
        this.smokes = this.smokes.filter((Eq => {
          const [Yq, lq, Oq] = Eq.pos, mq = gq < Eq.endMs && qq.getBlockId(Yq, lq, Oq) === Eq.lc;
          return mq || fq(qq, Eq), mq
        }));
        const Yq = hq(gq);
        if (Yq !== this.shownFireFrame) {
          this.shownFireFrame = Yq;
          for (const Eq of this.smokes) null !== Eq.fire && nq(qq, Eq.fire, Yq)
        }
        if (!qq.particlesEnabled()) {
          for (const qq of this.smokes) qq.pending.fill(0);
          return
        }
        const lq = Math.min(Eq, 250) / 1e3;
        for (const Oq of this.smokes) {
          const [Eq, Yq, mq] = Oq.pos;
          if (0 !== qq.getBlockId(Eq, Yq + 1, mq)) {
            Oq.pending.fill(0);
            continue
          }
          const xq = (Oq.endMs - gq) / 6e3,
            Aq = this.centre;
          Aq[0] = Eq + .5, Aq[1] = Yq + 1.275, Aq[2] = mq + .5, iq.forEach(((Eq, gq) => {
            Oq.pending[gq] += Eq.perSecond * xq * lq;
            const Yq = Math.floor(Oq.pending[gq]);
            Yq > 0 && this.emit(qq, gq, Aq, Yq) && (Oq.pending[gq] -= Yq)
          }))
        }
      }
      dispose(qq) {
        for (const gq of this.smokes) fq(qq, gq);
        this.smokes = [];
        for (const gq of null !== (Eq = this.puffers) && void 0 !== Eq ? Eq : []) {
          var Eq;
          gq.dispose()
        }
        this.puffers = null
      }
      emit(qq, Eq, gq, Yq) {
        return this.puffers ??= iq.map((qq => {
          let {
            style: Eq,
            perSecond: gq
          } = qq;
          const Yq = (Eq.count / .3 + gq) * Eq.life[1];
          return new Qq.f(Eq, Math.ceil(4 * Yq), bq)
        })), this.puffers[Eq].emit(qq, gq, this.renderFrame, Yq)
      }
    }

    function fq(qq, Eq) {
      null !== Eq.fire && (qq.disposeGameMesh(Eq.fire), Eq.fire = null)
    }

    function Mq() {
      let qq;
      const Eq = new Zq;
      return {
        onCreate(Eq) {
          qq = Eq
        },
        onReceivedMessageFromServer(gq, Yq) {
          gq === mq.F && Eq.start(qq, Yq)
        },
        onAfterRender(gq) {
          Eq.onAfterRender(qq, gq)
        },
        onClose() {
          Eq.dispose(qq)
        }
      }
    }

    function Tq(qq, Eq, gq, Yq) {
      return {
        dialogue: Pq(Yq.localPlayerId),
        fishing: jq(Yq.localPlayerId),
        furnaceSmoke: Mq(),
        ironChest: lq()
      }
    }

    function zq(qq, Eq) {
      for (const lq of [qq, ...null !== Eq && void 0 !== Eq ? Eq : []]) try {
        var gq;
        null === lq || void 0 === lq || null === (gq = lq.onClose) || void 0 === gq || gq.call(lq)
      } catch (Yq) {
        console.error("Error in client onClose callback", Yq)
      }
    }
  },
  39098: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq,
      f: () => Oq
    });
    const Yq = 1 / .6,
      lq = {
        kind: "smokePuff"
      };
    class Oq {
      constructor(qq, Eq, gq) {
        this.style = qq, this.WB = Eq, this.half = gq, this.particles = null, this.lastFrame = -1
      }
      emit(qq, Eq, gq) {
        let Oq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return gq !== this.lastFrame && (this.lastFrame = gq, this.particles || (this.particles = qq.createParticles(function(qq, Eq) {
          const [
            [gq, Oq, mq],
            [xq, Aq, cq]
          ] = qq.colours;
          return {
            texture: qq.soft ? lq : "square_particle",
            WB: Eq,
            minLifeTime: qq.life[0] / Yq,
            maxLifeTime: qq.life[1] / Yq,
            minEmitPower: qq.power[0] * Yq,
            maxEmitPower: qq.power[1] * Yq,
            minSize: qq.size[0],
            maxSize: qq.size[1],
            emitRate: 0,
            gravity: [0, qq.lift * Yq * Yq, 0],
            dir1: [-qq.spread, 1, -qq.spread],
            dir2: [qq.spread, 1, qq.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [gq, Oq, mq, qq.alpha],
              maxColor: [xq, Aq, cq, qq.alpha]
            }, {
              timeFraction: 1,
              minColor: [gq, Oq, mq, 0],
              maxColor: [xq, Aq, cq, 0]
            }],
            blendMode: qq.blendMode
          }
        }(this.style, this.WB), {
          pos: Eq,
          half: this.half
        })), this.particles.moveTo(Eq, this.half), this.particles.emit(Oq), !0)
      }
      dispose() {
        var qq;
        null === (qq = this.particles) || void 0 === qq || qq.stop(), this.particles = null
      }
    }
  },
  4671: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Yq,
      f: () => Oq,
      i: () => Aq,
      m: () => mq
    });
    const Yq = ["sine", "triangle", "square", "sawtooth"],
      lq = 55,
      Oq = {
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

    function mq(qq) {
      return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
    }

    function xq(qq, Eq, gq) {
      return Math.min(gq, Math.max(Eq, qq))
    }

    function Aq(qq) {
      const Eq = xq(qq.durationMs, 10, 500),
        gq = xq(qq.attackMs, 0, Eq),
        {
          intonation: lq
        } = qq;
      return {
        waveform: Yq.includes(qq.waveform) ? qq.waveform : "sine",
        pitchHz: xq(qq.pitchHz, 20, 4e3),
        glideSemitones: xq(qq.glideSemitones, -24, 24),
        durationMs: Eq,
        attackMs: gq,
        releaseMs: xq(qq.releaseMs, 0, Eq - gq),
        lowpassHz: null === qq.lowpassHz ? null : xq(qq.lowpassHz, 20, 2e4),
        volume: xq(qq.volume, 0, 2),
        intonation: {
          variationSemitones: xq(lq.variationSemitones, 0, 6),
          declineSemitones: xq(lq.declineSemitones, 0, 12),
          questionRiseSemitones: xq(lq.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: xq(lq.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: xq(qq.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);