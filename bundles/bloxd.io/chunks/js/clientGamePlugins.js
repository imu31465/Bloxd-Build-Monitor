export const id = 27;
export const ids = [27];
export const modules = {
  4561: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ib,
      h: () => Eb
    });
    var kb = sb(4569),
      Wb = sb(334);
    const ab = 120,
      Tb = 260,
      Ub = 1.15,
      Ib = 1.2,
      Hb = 2,
      fb = 1.08,
      Mb = .8,
      Xb = .95,
      nb = 8,
      mb = "[\"')\\]\u300d\u300f\uff09]*",
      lb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mb}$`),
      Qb = new RegExp(`[?\uff1f]${mb}$`),
      eb = new RegExp(`[!\uff01]${mb}$`),
      Cb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Nb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Vb = new RegExp(`[${Nb}]`),
      Lb = new RegExp(`[${Nb}]|[^${Nb}]+`, "g"),
      ub = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Yb(bb) {
      let cb = 2166136261;
      for (let sb = 0; sb < bb.length; sb++) cb ^= bb.charCodeAt(sb), cb = Math.imul(cb, 16777619);
      return (cb >>> 0) / 4294967295 * 2 - 1
    }

    function hb(bb) {
      var cb;
      if (Vb.test(bb)) return 1;
      const sb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        kb = sb.replace(/[^0-9]/g, "");
      if (kb.length > 0 && !/\p{L}/u.test(sb)) return Math.min(kb.length, 4);
      const Wb = null !== (cb = sb.match(ub)) && void 0 !== cb ? cb : [];
      if (0 === Wb.length) {
        var ab, Tb;
        const bb = null !== (ab = null === (Tb = sb.match(/\p{L}/gu)) || void 0 === Tb ? void 0 : Tb.length) && void 0 !== ab ? ab : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), nb)
      }
      const Ub = sb.replace(/[^\p{L}]/gu, ""),
        Ib = Wb.length > 1 && "e" === Wb.at(-1) && Ub.endsWith("e") && !Ub.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wb.length - (Ib ? 1 : 0), nb)
    }

    function Jb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function gb(bb) {
      const cb = bb.replace(/[^\p{L}]/gu, "");
      return cb.length >= 2 && cb === cb.toUpperCase() && cb !== cb.toLowerCase()
    }

    function Bb(bb, cb) {
      var sb;
      const nb = cb && (0, kb.g)(cb),
        mb = null !== (sb = null === nb || void 0 === nb ? void 0 : nb.syllableMs) && void 0 !== sb ? sb : kb.b,
        Nb = function(bb) {
          const cb = [];
          for (const kb of (0, Wb.ic)(bb))
            if ("string" === typeof kb)
              for (const bb of kb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  cb.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!Vb.test(bb)) {
                  cb.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let kb = !0;
                for (const Wb of null !== (sb = bb.match(Lb)) && void 0 !== sb ? sb : []) {
                  var sb;
                  const bb = cb.at(-1);
                  kb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Vb.test(Wb) || /[\p{L}\p{N}]/u.test(Wb) ? (kb || cb.push({
                    kind: "space",
                    text: "\u200b"
                  }), cb.push({
                    kind: "word",
                    text: Wb,
                    delayMs: 0
                  }), kb = !1) : bb.text += Wb
                }
              } else cb.push({
                kind: "icon",
                text: kb.icon,
                delayMs: 0
              });
          return cb
        }(bb),
        ub = [];
      let Bb = [];
      for (const kb of Nb) "space" !== kb.kind && (Bb.push(kb), lb.test(kb.text) && (ub.push(Bb), Bb = []));
      ub.push(Bb);
      const tb = [];
      let yb = 0;
      for (const kb of ub) {
        var Pb, Db;
        const bb = null !== (Pb = null === (Db = kb.at(-1)) || void 0 === Db ? void 0 : Db.text) && void 0 !== Pb ? Pb : "",
          cb = Qb.test(bb),
          sb = eb.test(bb),
          Wb = kb.map((bb => "word" === bb.kind ? hb(bb.text) : 1)),
          Nb = Wb.findLastIndex((bb => bb > 0));
        for (const [Qb, eb] of kb.entries()) {
          const bb = "word" === eb.kind,
            kb = Wb[Qb];
          eb.delayMs = yb;
          for (let Wb = 0; nb && Wb < kb; Wb++) {
            const {
              intonation: ab
            } = nb;
            let Tb = Nb > 0 ? -ab.declineSemitones * (Qb / Nb) : 0;
            Tb += Yb(`${Jb(eb.text)}|${Wb}`) * ab.variationSemitones;
            const lb = Math.min(1, ab.variationSemitones);
            let Cb = nb.glideSemitones,
              Vb = 1;
            sb && (Tb += ab.exclaimLiftSemitones, Vb *= Ub), cb && Qb === Nb && (Tb += ab.questionRiseSemitones * (kb > 1 ? .5 + .5 * Wb / (kb - 1) : 1), Wb === kb - 1 && (Cb = Math.abs(Cb) + ab.questionRiseSemitones / 2)), bb && gb(eb.text) && (Tb += Hb * lb, Vb *= Ib), kb > 1 && 0 === Wb && (Tb += Mb * lb, Vb *= fb), tb.push({
              atMs: yb + Wb * mb,
              semitones: Tb,
              glideSemitones: Cb,
              durationMs: Wb < kb - 1 ? Math.min(nb.durationMs, mb * Xb) : nb.durationMs,
              level: Vb
            })
          }
          yb += kb * mb + (lb.test(eb.text) ? Tb : Cb.test(eb.text) ? ab : 0)
        }
      }
      return {
        pieces: Nb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: tb
      }
    }
    var tb = sb(1197),
      yb = sb(1258),
      Pb = sb(1876);

    function Db(bb) {
      if ("string" === typeof bb) return bb;
      const cb = yb.e.get().getCurrentLanguageCode();
      return (0, tb.q)(cb, bb.translationKey, (0, tb.p)(bb.params, Pb.b.shown))
    }

    function Eb(bb) {
      const cb = void 0 === bb.voice ? null : (0, kb.i)(bb.voice),
        sb = cb && (0, kb.g)(cb);
      return {
        plan: Bb(Db(bb.line), sb),
        synth: sb
      }
    }

    function ib(bb) {
      const cb = [];
      let sb = [];
      for (const [Wb, ab] of bb.entries()) {
        var kb;
        "space" === ab.kind && (" " !== ab.text || "icon" !== (null === (kb = bb[Wb + 1]) || void 0 === kb ? void 0 : kb.kind)) ? (sb.length > 0 && cb.push(sb), cb.push([ab]), sb = []) : sb.push(ab)
      }
      return sb.length > 0 && cb.push(sb), cb
    }
  },
  4576: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => fb,
      g: () => Mb
    });
    var kb = sb(4579),
      Wb = sb(19);
    const ab = .25,
      Tb = .85,
      Ub = .02,
      Ib = .01;

    function Hb(bb, cb, sb, kb, Wb, ab, Ub) {
      const {
        waveform: Ib,
        pitchHz: Hb,
        attackMs: fb,
        releaseMs: Mb,
        lowpassHz: Xb
      } = sb, nb = Wb + kb.durationMs / 1e3, mb = Hb * 2 ** (kb.semitones / 12), lb = bb.createOscillator();
      lb.type = Ib, lb.frequency.setValueAtTime(mb, Wb), lb.frequency.exponentialRampToValueAtTime(mb * 2 ** (kb.glideSemitones / 12), nb);
      const Qb = Wb + Math.min(fb, kb.durationMs) / 1e3,
        eb = bb.createGain();
      eb.gain.setValueAtTime(0, Wb), eb.gain.linearRampToValueAtTime(ab, Qb), eb.gain.linearRampToValueAtTime(ab * Tb, Math.max(Qb, nb - Mb / 1e3)), eb.gain.linearRampToValueAtTime(0, nb);
      const Cb = [lb];
      if (null !== Xb) {
        const cb = bb.createBiquadFilter();
        cb.type = "lowpass", cb.frequency.value = Xb, Cb.push(cb)
      }
      Cb.push(eb, cb);
      for (let Tb = 1; Tb < Cb.length; Tb++) Cb[Tb - 1].connect(Cb[Tb]);
      return lb.onended = () => {
        for (const bb of Cb.slice(0, -1)) bb.disconnect();
        Ub()
      }, lb.start(Wb), lb.stop(nb), lb
    }

    function fb(bb, cb, sb, kb, Wb, Tb) {
      if (0 === kb.length) return Tb(), () => {};
      const fb = ab * sb.volume * Wb,
        Mb = bb.createGain();
      Mb.connect(cb);
      const Xb = bb.currentTime + Ub,
        nb = new Set;
      for (const ab of kb) {
        const cb = Hb(bb, Mb, sb, ab, Xb + ab.atMs / 1e3, fb * ab.level, (() => {
          nb.delete(cb), 0 === nb.size && (Mb.disconnect(), Tb())
        }));
        nb.add(cb)
      }
      return () => {
        const cb = bb.currentTime;
        Mb.gain.setTargetAtTime(0, cb, Ib);
        for (const bb of nb) try {
          bb.stop(cb + 5 * Ib)
        } catch {}
      }
    }

    function Mb(bb, cb) {
      var sb;
      const ab = kb.Howler.ctx,
        Tb = kb.Howler.masterGain;
      if (!ab || !Tb || !Wb.d.get("soundOnFromAd")) return () => {};
      const Ub = kb.Howler;
      return null === (sb = Ub._autoResume) || void 0 === sb || sb.call(Ub), fb(ab, Tb, bb, cb, Wb.d.get("soundVolume"), (() => {
        var bb;
        null === (bb = Ub._autoSuspend) || void 0 === bb || bb.call(Ub)
      }))
    }
  },
  38713: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      closeClientGame: () => Ob,
      createDefaultClientPlugins: () => ib
    });
    var kb = sb(344);

    function Wb() {
      let bb;
      return {
        onCreate(cb) {
          bb = cb
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(cb, sb, Wb, ab, Tb, Ub) {
          var Ib, Hb;
          if ("Iron Chest" !== bb.getMetaInfo(Tb).rootName) return;
          if (!bb.hasEffect(cb, "Thief")) return;
          const fb = bb.getBlockData(sb, Wb, ab);
          return bb.getPlayerDbId(cb) !== (null === fb || void 0 === fb || null === (Ib = fb.persisted) || void 0 === Ib || null === (Hb = Ib.shared) || void 0 === Hb ? void 0 : Hb.ownerDbId) ? (bb.sendMessage(cb, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: kb.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var ab = sb(4023),
      Tb = sb(1253);
    const Ub = 8.4,
      Ib = 1e-4,
      Hb = .15,
      fb = .04,
      Mb = [.12, .04, .12],
      Xb = 26,
      nb = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        GM: 1,
        minLifeTime: Ib,
        maxLifeTime: Ib,
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
        blendMode: ab.f.Standard
      },
      mb = {
        texture: "bubble",
        mipmaps: !1,
        GM: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Xb,
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
        blendMode: ab.f.Standard
      },
      lb = [0, 0, 0],
      Qb = [0, 0, 0];

    function eb(bb) {
      const cb = new Map;
      let sb = null;

      function kb(bb) {
        var cb, sb;
        null === (cb = bb.bubbles) || void 0 === cb || cb.stop(), null === (sb = bb.fish) || void 0 === sb || sb.stop()
      }

      function Wb(sb) {
        if (!sb.readDrawnPosition(bb, Qb)) {
          for (const bb of cb.values()) {
            var kb;
            null === (kb = bb.bubbles) || void 0 === kb || kb.setEmitRate(0)
          }
          return
        }
        const Wb = performance.now();
        for (const [bb, Tb] of cb) {
          var ab;
          if (null === (ab = Tb.bubbles) || void 0 === ab || ab.setEmitRate(0), !sb.readDrawnPosition(bb, lb)) continue;
          if (!((lb[0] - Qb[0]) ** 2 + (lb[1] - Qb[1]) ** 2 + (lb[2] - Qb[2]) ** 2 < 900)) continue;
          const cb = Math.max(0, Tb.biteAt - Wb),
            kb = Tb.approachDurationMs > 0 ? Math.min(1, 1 - cb / Tb.approachDurationMs) : 1,
            Ib = (Tb.approachDurationMs - cb) / 1e3,
            eb = Tb.phase + .25 * Math.sin(1.7 * Ib + Tb.phase),
            Cb = Math.min(Tb.approachDurationMs / 3e3 * 2.8, Ub) * (1 - kb) * (1 + .15 * Math.sin(2.1 * Ib + Tb.phase)),
            Nb = Math.min(1, 4 * (1 - kb)),
            Vb = (.45 * Math.sin(4.1 * Ib + Tb.phase) + .18 * Math.sin(9.7 * Ib + 2 * Tb.phase)) * Nb,
            Lb = lb[0] + Math.cos(eb) * Cb - Math.sin(eb) * Vb,
            ub = Math.ceil(Tb.surfaceY),
            Yb = lb[2] + Math.sin(eb) * Cb + Math.cos(eb) * Vb,
            {
              fishAt: hb,
              bubblesAt: Jb
            } = Tb;
          hb[0] = Jb[0] = Lb, hb[1] = ub + Hb, Jb[1] = ub + fb, hb[2] = Jb[2] = Yb, Tb.fish ??= sb.createParticles(nb, {
            pos: hb
          }), Tb.fish.moveTo(hb), Tb.fish.emit(1), Tb.bubbles ??= sb.createParticles(mb, {
            pos: Jb,
            half: Mb
          }), Tb.bubbles.moveTo(Jb), Tb.bubbles.setEmitRate(Xb + 32 * (.5 + .5 * Math.sin(9 * Ib + Tb.phase)) ** 4 + 13 * kb)
        }
      }
      return {
        onCreate(bb) {
          sb = bb
        },
        onAfterRender() {
          sb && Wb(sb)
        },
        onClose() {
          for (const bb of cb.values()) kb(bb);
          cb.clear(), sb = null
        },
        onReceivedMessageFromServer(bb, sb) {
          if (bb !== Tb.v) return;
          const {
            hookId: Wb,
            waiting: ab
          } = sb;
          if (ab) cb.has(Wb) || cb.set(Wb, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + ab.remainingMs,
            approachDurationMs: ab.durationMs,
            surfaceY: ab.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const bb = cb.get(Wb);
            bb && kb(bb), cb.delete(Wb)
          }
        }
      }
    }
    var Cb = sb(4576),
      Nb = sb(4561);

    function Vb(bb) {
      let cb, sb = null,
        kb = null;
      const Wb = () => {
        var bb;
        null === (bb = kb) || void 0 === bb || bb(), kb = null
      };
      return {
        onCreate(kb) {
          cb = kb, sb = cb.getClientOption(bb, "dialogue")
        },
        onAfterRender() {
          if (!cb) return;
          const ab = cb.getClientOption(bb, "dialogue");
          if (ab === sb) return;
          if (sb = ab, Wb(), !ab || !1 === ab.animateIn) return;
          const {
            plan: Tb,
            synth: Ub
          } = (0, Nb.h)(ab);
          Ub && (kb = (0, Cb.g)(Ub, Tb.blips))
        },
        onClose: Wb
      }
    }
    var Lb = sb(38719);
    const ub = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Yb = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      hb = [0, 1, 2, 0, 2, 3];

    function Jb(bb, cb, sb) {
      var kb;
      let [Wb, ab, Tb] = cb;
      if (bb.hasPackModel("Furnace")) return null;
      const Ub = ((null !== (kb = bb.getMetaInfo(sb).rot) && void 0 !== kb ? kb : 1) - 1) * Math.PI / 2,
        Ib = Math.PI + Ub,
        Hb = Math.cos(Ib),
        fb = Math.sin(Ib),
        Mb = [];
      for (const [mb, lb] of ub) Mb.push(mb * Hb, lb, -mb * fb);
      const Xb = {
          positions: Mb,
          indices: hb,
          uvs: Yb
        },
        nb = [Wb + .5 + .51 * Math.sin(Ub), ab + .375, Tb + .5 + .51 * Math.cos(Ub)];
      return bb.createGameMesh(Xb, {
        kind: "furnaceFire"
      }, nb)
    }

    function gb(bb) {
      return Math.floor(bb / 200) % 3
    }

    function Bb(bb, cb, sb) {
      bb.setGameMesh(cb, {
        uvOffset: [0, sb / 3]
      })
    }
    const tb = [.12, .025, .12],
      yb = [{
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
          blendMode: ab.f.Standard,
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
          blendMode: ab.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Pb {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(bb, cb) {
        const sb = bb.getBlockId(cb[0], cb[1], cb[2]);
        if ("Furnace" !== bb.getMetaInfo(sb).rootName) return;
        const kb = performance.now();
        let Wb = this.smokes.find((bb => bb.pos[0] === cb[0] && bb.pos[1] === cb[1] && bb.pos[2] === cb[2] && bb.Jf === sb));
        if (Wb || (Wb = {
            pos: [cb[0], cb[1], cb[2]],
            Jf: sb,
            endMs: kb,
            lastBurstMs: -1 / 0,
            pending: new Array(yb.length).fill(0),
            fire: Jb(bb, cb, sb)
          }, this.smokes.push(Wb), null !== Wb.fire && (Bb(bb, Wb.fire, gb(kb)), this.shownFireFrame = -1)), Wb.endMs = kb + 6e3, this.smokes.length > 4) {
          const cb = this.smokes.reduce(((bb, cb) => cb.endMs < bb.endMs ? cb : bb));
          Db(bb, cb), this.smokes.splice(this.smokes.indexOf(cb), 1)
        }
        kb - Wb.lastBurstMs >= 300 && (Wb.lastBurstMs = kb, yb.forEach(((bb, cb) => {
          Wb.pending[cb] += bb.style.count
        })))
      }
      onAfterRender(bb, cb) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const sb = performance.now();
        this.smokes = this.smokes.filter((cb => {
          const [kb, Wb, ab] = cb.pos, Tb = sb < cb.endMs && bb.getBlockId(kb, Wb, ab) === cb.Jf;
          return Tb || Db(bb, cb), Tb
        }));
        const kb = gb(sb);
        if (kb !== this.shownFireFrame) {
          this.shownFireFrame = kb;
          for (const cb of this.smokes) null !== cb.fire && Bb(bb, cb.fire, kb)
        }
        if (!bb.particlesEnabled()) {
          for (const bb of this.smokes) bb.pending.fill(0);
          return
        }
        const Wb = Math.min(cb, 250) / 1e3;
        for (const ab of this.smokes) {
          const [cb, kb, Tb] = ab.pos;
          if (0 !== bb.getBlockId(cb, kb + 1, Tb)) {
            ab.pending.fill(0);
            continue
          }
          const Ub = (ab.endMs - sb) / 6e3,
            Ib = this.centre;
          Ib[0] = cb + .5, Ib[1] = kb + 1.275, Ib[2] = Tb + .5, yb.forEach(((cb, sb) => {
            ab.pending[sb] += cb.perSecond * Ub * Wb;
            const kb = Math.floor(ab.pending[sb]);
            kb > 0 && this.emit(bb, sb, Ib, kb) && (ab.pending[sb] -= kb)
          }))
        }
      }
      dispose(bb) {
        for (const sb of this.smokes) Db(bb, sb);
        this.smokes = [];
        for (const sb of null !== (cb = this.puffers) && void 0 !== cb ? cb : []) {
          var cb;
          sb.dispose()
        }
        this.puffers = null
      }
      emit(bb, cb, sb, kb) {
        return this.puffers ??= yb.map((bb => {
          let {
            style: cb,
            perSecond: sb
          } = bb;
          const kb = (cb.count / .3 + sb) * cb.life[1];
          return new Lb.e(cb, Math.ceil(4 * kb), tb)
        })), this.puffers[cb].emit(bb, sb, this.renderFrame, kb)
      }
    }

    function Db(bb, cb) {
      null !== cb.fire && (bb.disposeGameMesh(cb.fire), cb.fire = null)
    }

    function Eb() {
      let bb;
      const cb = new Pb;
      return {
        onCreate(cb) {
          bb = cb
        },
        onReceivedMessageFromServer(sb, kb) {
          sb === Tb.x && cb.start(bb, kb)
        },
        onAfterRender(sb) {
          cb.onAfterRender(bb, sb)
        },
        onClose() {
          cb.dispose(bb)
        }
      }
    }

    function ib(bb, cb, sb, kb) {
      return {
        dialogue: Vb(kb.localPlayerId),
        fishing: eb(kb.localPlayerId),
        furnaceSmoke: Eb(),
        ironChest: Wb()
      }
    }

    function Ob(bb, cb) {
      for (const Wb of [bb, ...null !== cb && void 0 !== cb ? cb : []]) try {
        var sb;
        null === Wb || void 0 === Wb || null === (sb = Wb.onClose) || void 0 === sb || sb.call(Wb)
      } catch (kb) {
        console.error("Error in client onClose callback", kb)
      }
    }
  },
  38719: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb,
      e: () => ab
    });
    const kb = 1 / .6,
      Wb = {
        kind: "smokePuff"
      };
    class ab {
      constructor(bb, cb, sb) {
        this.style = bb, this.GM = cb, this.half = sb, this.particles = null, this.lastFrame = -1
      }
      emit(bb, cb, sb) {
        let ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return sb !== this.lastFrame && (this.lastFrame = sb, this.particles || (this.particles = bb.createParticles(function(bb, cb) {
          const [
            [sb, ab, Tb],
            [Ub, Ib, Hb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Wb : "square_particle",
            GM: cb,
            minLifeTime: bb.life[0] / kb,
            maxLifeTime: bb.life[1] / kb,
            minEmitPower: bb.power[0] * kb,
            maxEmitPower: bb.power[1] * kb,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * kb * kb, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [sb, ab, Tb, bb.alpha],
              maxColor: [Ub, Ib, Hb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [sb, ab, Tb, 0],
              maxColor: [Ub, Ib, Hb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.GM), {
          pos: cb,
          half: this.half
        })), this.particles.moveTo(cb, this.half), this.particles.emit(ab), !0)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
    }
  },
  4569: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      e: () => kb,
      f: () => ab,
      g: () => Ib,
      i: () => Tb
    });
    const kb = ["sine", "triangle", "square", "sawtooth"],
      Wb = 55,
      ab = {
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

    function Tb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(ab, bb) ? ab[bb] : null
    }

    function Ub(bb, cb, sb) {
      return Math.min(sb, Math.max(cb, bb))
    }

    function Ib(bb) {
      const cb = Ub(bb.durationMs, 10, 500),
        sb = Ub(bb.attackMs, 0, cb),
        {
          intonation: Wb
        } = bb;
      return {
        waveform: kb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Ub(bb.pitchHz, 20, 4e3),
        glideSemitones: Ub(bb.glideSemitones, -24, 24),
        durationMs: cb,
        attackMs: sb,
        releaseMs: Ub(bb.releaseMs, 0, cb - sb),
        lowpassHz: null === bb.lowpassHz ? null : Ub(bb.lowpassHz, 20, 2e4),
        volume: Ub(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Ub(Wb.variationSemitones, 0, 6),
          declineSemitones: Ub(Wb.declineSemitones, 0, 12),
          questionRiseSemitones: Ub(Wb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ub(Wb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ub(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);