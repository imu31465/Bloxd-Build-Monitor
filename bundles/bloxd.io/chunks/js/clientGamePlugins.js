export const id = 27;
export const ids = [27];
export const modules = {
  4531: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Gb,
      g: () => hb
    });
    var Ab = Ub(4536),
      Mb = Ub(307);
    const Tb = 120,
      Eb = 260,
      Yb = 1.15,
      Bb = 1.2,
      eb = 2,
      vb = 1.08,
      Lb = .8,
      Pb = .95,
      Xb = 8,
      jb = "[\"')\\]\u300d\u300f\uff09]*",
      Rb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jb}$`),
      kb = new RegExp(`[?\uff1f]${jb}$`),
      yb = new RegExp(`[!\uff01]${jb}$`),
      Zb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Db = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      zb = new RegExp(`[${Db}]`),
      xb = new RegExp(`[${Db}]|[^${Db}]+`, "g"),
      ib = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fb(bb) {
      let ab = 2166136261;
      for (let Ub = 0; Ub < bb.length; Ub++) ab ^= bb.charCodeAt(Ub), ab = Math.imul(ab, 16777619);
      return (ab >>> 0) / 4294967295 * 2 - 1
    }

    function mb(bb) {
      var ab;
      if (zb.test(bb)) return 1;
      const Ub = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ab = Ub.replace(/[^0-9]/g, "");
      if (Ab.length > 0 && !/\p{L}/u.test(Ub)) return Math.min(Ab.length, 4);
      const Mb = null !== (ab = Ub.match(ib)) && void 0 !== ab ? ab : [];
      if (0 === Mb.length) {
        var Tb, Eb;
        const bb = null !== (Tb = null === (Eb = Ub.match(/\p{L}/gu)) || void 0 === Eb ? void 0 : Eb.length) && void 0 !== Tb ? Tb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Xb)
      }
      const Yb = Ub.replace(/[^\p{L}]/gu, ""),
        Bb = Mb.length > 1 && "e" === Mb.at(-1) && Yb.endsWith("e") && !Yb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Mb.length - (Bb ? 1 : 0), Xb)
    }

    function pb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Nb(bb) {
      const ab = bb.replace(/[^\p{L}]/gu, "");
      return ab.length >= 2 && ab === ab.toUpperCase() && ab !== ab.toLowerCase()
    }

    function Wb(bb, ab) {
      var Ub;
      const Xb = ab && (0, Ab.k)(ab),
        jb = null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.syllableMs) && void 0 !== Ub ? Ub : Ab.b,
        Db = function(bb) {
          const ab = [];
          for (const Ab of (0, Mb.cc)(bb))
            if ("string" === typeof Ab)
              for (const bb of Ab.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  ab.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!zb.test(bb)) {
                  ab.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let Ab = !0;
                for (const Mb of null !== (Ub = bb.match(xb)) && void 0 !== Ub ? Ub : []) {
                  var Ub;
                  const bb = ab.at(-1);
                  Ab || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || zb.test(Mb) || /[\p{L}\p{N}]/u.test(Mb) ? (Ab || ab.push({
                    kind: "space",
                    text: "\u200b"
                  }), ab.push({
                    kind: "word",
                    text: Mb,
                    delayMs: 0
                  }), Ab = !1) : bb.text += Mb
                }
              } else ab.push({
                kind: "icon",
                text: Ab.icon,
                delayMs: 0
              });
          return ab
        }(bb),
        ib = [];
      let Wb = [];
      for (const Ab of Db) "space" !== Ab.kind && (Wb.push(Ab), Rb.test(Ab.text) && (ib.push(Wb), Wb = []));
      ib.push(Wb);
      const Hb = [];
      let Ib = 0;
      for (const Ab of ib) {
        var db, Fb;
        const bb = null !== (db = null === (Fb = Ab.at(-1)) || void 0 === Fb ? void 0 : Fb.text) && void 0 !== db ? db : "",
          ab = kb.test(bb),
          Ub = yb.test(bb),
          Mb = Ab.map((bb => "word" === bb.kind ? mb(bb.text) : 1)),
          Db = Mb.findLastIndex((bb => bb > 0));
        for (const [kb, yb] of Ab.entries()) {
          const bb = "word" === yb.kind,
            Ab = Mb[kb];
          yb.delayMs = Ib;
          for (let Mb = 0; Xb && Mb < Ab; Mb++) {
            const {
              intonation: Tb
            } = Xb;
            let Eb = Db > 0 ? -Tb.declineSemitones * (kb / Db) : 0;
            Eb += fb(`${pb(yb.text)}|${Mb}`) * Tb.variationSemitones;
            const Rb = Math.min(1, Tb.variationSemitones);
            let Zb = Xb.glideSemitones,
              zb = 1;
            Ub && (Eb += Tb.exclaimLiftSemitones, zb *= Yb), ab && kb === Db && (Eb += Tb.questionRiseSemitones * (Ab > 1 ? .5 + .5 * Mb / (Ab - 1) : 1), Mb === Ab - 1 && (Zb = Math.abs(Zb) + Tb.questionRiseSemitones / 2)), bb && Nb(yb.text) && (Eb += eb * Rb, zb *= Bb), Ab > 1 && 0 === Mb && (Eb += Lb * Rb, zb *= vb), Hb.push({
              atMs: Ib + Mb * jb,
              semitones: Eb,
              glideSemitones: Zb,
              durationMs: Mb < Ab - 1 ? Math.min(Xb.durationMs, jb * Pb) : Xb.durationMs,
              level: zb
            })
          }
          Ib += Ab * jb + (Rb.test(yb.text) ? Eb : Zb.test(yb.text) ? Tb : 0)
        }
      }
      return {
        pieces: Db.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: Hb
      }
    }
    var Hb = Ub(1134),
      Ib = Ub(1198),
      db = Ub(1829);

    function Fb(bb) {
      if ("string" === typeof bb) return bb;
      const ab = Ib.f.get().getCurrentLanguageCode();
      return (0, Hb.p)(ab, bb.translationKey, (0, Hb.m)(bb.params, db.c.shown))
    }

    function hb(bb) {
      const ab = void 0 === bb.voice ? null : (0, Ab.n)(bb.voice),
        Ub = ab && (0, Ab.k)(ab);
      return {
        plan: Wb(Fb(bb.line), Ub),
        synth: Ub
      }
    }

    function Gb(bb) {
      const ab = [];
      let Ub = [];
      for (const [Mb, Tb] of bb.entries()) {
        var Ab;
        "space" === Tb.kind && (" " !== Tb.text || "icon" !== (null === (Ab = bb[Mb + 1]) || void 0 === Ab ? void 0 : Ab.kind)) ? (Ub.length > 0 && ab.push(Ub), ab.push([Tb]), Ub = []) : Ub.push(Tb)
      }
      return Ub.length > 0 && ab.push(Ub), ab
    }
  },
  4541: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => vb,
      g: () => Lb
    });
    var Ab = Ub(4546),
      Mb = Ub(19);
    const Tb = .25,
      Eb = .85,
      Yb = .02,
      Bb = .01;

    function eb(bb, ab, Ub, Ab, Mb, Tb, Yb) {
      const {
        waveform: Bb,
        pitchHz: eb,
        attackMs: vb,
        releaseMs: Lb,
        lowpassHz: Pb
      } = Ub, Xb = Mb + Ab.durationMs / 1e3, jb = eb * 2 ** (Ab.semitones / 12), Rb = bb.createOscillator();
      Rb.type = Bb, Rb.frequency.setValueAtTime(jb, Mb), Rb.frequency.exponentialRampToValueAtTime(jb * 2 ** (Ab.glideSemitones / 12), Xb);
      const kb = Mb + Math.min(vb, Ab.durationMs) / 1e3,
        yb = bb.createGain();
      yb.gain.setValueAtTime(0, Mb), yb.gain.linearRampToValueAtTime(Tb, kb), yb.gain.linearRampToValueAtTime(Tb * Eb, Math.max(kb, Xb - Lb / 1e3)), yb.gain.linearRampToValueAtTime(0, Xb);
      const Zb = [Rb];
      if (null !== Pb) {
        const ab = bb.createBiquadFilter();
        ab.type = "lowpass", ab.frequency.value = Pb, Zb.push(ab)
      }
      Zb.push(yb, ab);
      for (let Eb = 1; Eb < Zb.length; Eb++) Zb[Eb - 1].connect(Zb[Eb]);
      return Rb.onended = () => {
        for (const bb of Zb.slice(0, -1)) bb.disconnect();
        Yb()
      }, Rb.start(Mb), Rb.stop(Xb), Rb
    }

    function vb(bb, ab, Ub, Ab, Mb, Eb) {
      if (0 === Ab.length) return Eb(), () => {};
      const vb = Tb * Ub.volume * Mb,
        Lb = bb.createGain();
      Lb.connect(ab);
      const Pb = bb.currentTime + Yb,
        Xb = new Set;
      for (const Tb of Ab) {
        const ab = eb(bb, Lb, Ub, Tb, Pb + Tb.atMs / 1e3, vb * Tb.level, (() => {
          Xb.delete(ab), 0 === Xb.size && (Lb.disconnect(), Eb())
        }));
        Xb.add(ab)
      }
      return () => {
        const ab = bb.currentTime;
        Lb.gain.setTargetAtTime(0, ab, Bb);
        for (const bb of Xb) try {
          bb.stop(ab + 5 * Bb)
        } catch {}
      }
    }

    function Lb(bb, ab) {
      var Ub;
      const Tb = Ab.Howler.ctx,
        Eb = Ab.Howler.masterGain;
      if (!Tb || !Eb || !Mb.c.get("soundOnFromAd")) return () => {};
      const Yb = Ab.Howler;
      return null === (Ub = Yb._autoResume) || void 0 === Ub || Ub.call(Yb), vb(Tb, Eb, bb, ab, Mb.c.get("soundVolume"), (() => {
        var bb;
        null === (bb = Yb._autoSuspend) || void 0 === bb || bb.call(Yb)
      }))
    }
  },
  38428: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      closeClientGame: () => Qb,
      createDefaultClientPlugins: () => Gb
    });
    var Ab = Ub(325);

    function Mb() {
      let bb;
      return {
        onCreate(ab) {
          bb = ab
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(ab, Ub, Mb, Tb, Eb, Yb) {
          var Bb, eb;
          if ("Iron Chest" !== bb.getMetaInfo(Eb).rootName) return;
          if (!bb.hasEffect(ab, "Thief")) return;
          const vb = bb.getBlockData(Ub, Mb, Tb);
          return bb.getPlayerDbId(ab) !== (null === vb || void 0 === vb || null === (Bb = vb.persisted) || void 0 === Bb || null === (eb = Bb.shared) || void 0 === eb ? void 0 : eb.ownerDbId) ? (bb.sendMessage(ab, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Ab.E.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Tb = Ub(3959),
      Eb = Ub(1189);
    const Yb = 8.4,
      Bb = 1e-4,
      eb = .15,
      vb = .04,
      Lb = [.12, .04, .12],
      Pb = 26,
      Xb = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        PL: 1,
        minLifeTime: Bb,
        maxLifeTime: Bb,
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
        blendMode: Tb.f.Standard
      },
      jb = {
        texture: "bubble",
        mipmaps: !1,
        PL: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Pb,
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
        blendMode: Tb.f.Standard
      },
      Rb = [0, 0, 0],
      kb = [0, 0, 0];

    function yb(bb) {
      const ab = new Map;
      let Ub = null;

      function Ab(bb) {
        var ab, Ub;
        null === (ab = bb.bubbles) || void 0 === ab || ab.stop(), null === (Ub = bb.fish) || void 0 === Ub || Ub.stop()
      }

      function Mb(Ub) {
        if (!Ub.readDrawnPosition(bb, kb)) {
          for (const bb of ab.values()) {
            var Ab;
            null === (Ab = bb.bubbles) || void 0 === Ab || Ab.setEmitRate(0)
          }
          return
        }
        const Mb = performance.now();
        for (const [bb, Eb] of ab) {
          var Tb;
          if (null === (Tb = Eb.bubbles) || void 0 === Tb || Tb.setEmitRate(0), !Ub.readDrawnPosition(bb, Rb)) continue;
          if (!((Rb[0] - kb[0]) ** 2 + (Rb[1] - kb[1]) ** 2 + (Rb[2] - kb[2]) ** 2 < 900)) continue;
          const ab = Math.max(0, Eb.biteAt - Mb),
            Ab = Eb.approachDurationMs > 0 ? Math.min(1, 1 - ab / Eb.approachDurationMs) : 1,
            Bb = (Eb.approachDurationMs - ab) / 1e3,
            yb = Eb.phase + .25 * Math.sin(1.7 * Bb + Eb.phase),
            Zb = Math.min(Eb.approachDurationMs / 3e3 * 2.8, Yb) * (1 - Ab) * (1 + .15 * Math.sin(2.1 * Bb + Eb.phase)),
            Db = Math.min(1, 4 * (1 - Ab)),
            zb = (.45 * Math.sin(4.1 * Bb + Eb.phase) + .18 * Math.sin(9.7 * Bb + 2 * Eb.phase)) * Db,
            xb = Rb[0] + Math.cos(yb) * Zb - Math.sin(yb) * zb,
            ib = Math.ceil(Eb.surfaceY),
            fb = Rb[2] + Math.sin(yb) * Zb + Math.cos(yb) * zb,
            {
              fishAt: mb,
              bubblesAt: pb
            } = Eb;
          mb[0] = pb[0] = xb, mb[1] = ib + eb, pb[1] = ib + vb, mb[2] = pb[2] = fb, Eb.fish ??= Ub.createParticles(Xb, {
            pos: mb
          }), Eb.fish.moveTo(mb), Eb.fish.emit(1), Eb.bubbles ??= Ub.createParticles(jb, {
            pos: pb,
            half: Lb
          }), Eb.bubbles.moveTo(pb), Eb.bubbles.setEmitRate(Pb + 32 * (.5 + .5 * Math.sin(9 * Bb + Eb.phase)) ** 4 + 13 * Ab)
        }
      }
      return {
        onCreate(bb) {
          Ub = bb
        },
        onAfterRender() {
          Ub && Mb(Ub)
        },
        onClose() {
          for (const bb of ab.values()) Ab(bb);
          ab.clear(), Ub = null
        },
        onReceivedMessageFromServer(bb, Ub) {
          if (bb !== Eb.w) return;
          const {
            hookId: Mb,
            waiting: Tb
          } = Ub;
          if (Tb) ab.has(Mb) || ab.set(Mb, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Tb.remainingMs,
            approachDurationMs: Tb.durationMs,
            surfaceY: Tb.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const bb = ab.get(Mb);
            bb && Ab(bb), ab.delete(Mb)
          }
        }
      }
    }
    var Zb = Ub(4541),
      Db = Ub(4531);

    function zb(bb) {
      let ab, Ub = null,
        Ab = null;
      const Mb = () => {
        var bb;
        null === (bb = Ab) || void 0 === bb || bb(), Ab = null
      };
      return {
        onCreate(Ab) {
          ab = Ab, Ub = ab.getClientOption(bb, "dialogue")
        },
        onAfterRender() {
          if (!ab) return;
          const Tb = ab.getClientOption(bb, "dialogue");
          if (Tb === Ub) return;
          if (Ub = Tb, Mb(), !Tb || !1 === Tb.animateIn) return;
          const {
            plan: Eb,
            synth: Yb
          } = (0, Db.g)(Tb);
          Yb && (Ab = (0, Zb.g)(Yb, Eb.blips))
        },
        onClose: Mb
      }
    }
    var xb = Ub(38434);
    const ib = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      fb = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      mb = [0, 1, 2, 0, 2, 3];

    function pb(bb, ab, Ub) {
      var Ab;
      let [Mb, Tb, Eb] = ab;
      if (bb.hasPackModel("Furnace")) return null;
      const Yb = ((null !== (Ab = bb.getMetaInfo(Ub).rot) && void 0 !== Ab ? Ab : 1) - 1) * Math.PI / 2,
        Bb = Math.PI + Yb,
        eb = Math.cos(Bb),
        vb = Math.sin(Bb),
        Lb = [];
      for (const [jb, Rb] of ib) Lb.push(jb * eb, Rb, -jb * vb);
      const Pb = {
          positions: Lb,
          indices: mb,
          uvs: fb
        },
        Xb = [Mb + .5 + .51 * Math.sin(Yb), Tb + .375, Eb + .5 + .51 * Math.cos(Yb)];
      return bb.createGameMesh(Pb, {
        kind: "furnaceFire"
      }, Xb)
    }

    function Nb(bb) {
      return Math.floor(bb / 200) % 3
    }

    function Wb(bb, ab, Ub) {
      bb.setGameMesh(ab, {
        uvOffset: [0, Ub / 3]
      })
    }
    const Hb = [.12, .025, .12],
      Ib = [{
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
          blendMode: Tb.f.Standard,
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
          blendMode: Tb.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class db {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(bb, ab) {
        const Ub = bb.getBlockId(ab[0], ab[1], ab[2]);
        if ("Furnace" !== bb.getMetaInfo(Ub).rootName) return;
        const Ab = performance.now();
        let Mb = this.smokes.find((bb => bb.pos[0] === ab[0] && bb.pos[1] === ab[1] && bb.pos[2] === ab[2] && bb.Av === Ub));
        if (Mb || (Mb = {
            pos: [ab[0], ab[1], ab[2]],
            Av: Ub,
            endMs: Ab,
            lastBurstMs: -1 / 0,
            pending: new Array(Ib.length).fill(0),
            fire: pb(bb, ab, Ub)
          }, this.smokes.push(Mb), null !== Mb.fire && (Wb(bb, Mb.fire, Nb(Ab)), this.shownFireFrame = -1)), Mb.endMs = Ab + 6e3, this.smokes.length > 4) {
          const ab = this.smokes.reduce(((bb, ab) => ab.endMs < bb.endMs ? ab : bb));
          Fb(bb, ab), this.smokes.splice(this.smokes.indexOf(ab), 1)
        }
        Ab - Mb.lastBurstMs >= 300 && (Mb.lastBurstMs = Ab, Ib.forEach(((bb, ab) => {
          Mb.pending[ab] += bb.style.count
        })))
      }
      onAfterRender(bb, ab) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Ub = performance.now();
        this.smokes = this.smokes.filter((ab => {
          const [Ab, Mb, Tb] = ab.pos, Eb = Ub < ab.endMs && bb.getBlockId(Ab, Mb, Tb) === ab.Av;
          return Eb || Fb(bb, ab), Eb
        }));
        const Ab = Nb(Ub);
        if (Ab !== this.shownFireFrame) {
          this.shownFireFrame = Ab;
          for (const ab of this.smokes) null !== ab.fire && Wb(bb, ab.fire, Ab)
        }
        if (!bb.particlesEnabled()) {
          for (const bb of this.smokes) bb.pending.fill(0);
          return
        }
        const Mb = Math.min(ab, 250) / 1e3;
        for (const Tb of this.smokes) {
          const [ab, Ab, Eb] = Tb.pos;
          if (0 !== bb.getBlockId(ab, Ab + 1, Eb)) {
            Tb.pending.fill(0);
            continue
          }
          const Yb = (Tb.endMs - Ub) / 6e3,
            Bb = this.centre;
          Bb[0] = ab + .5, Bb[1] = Ab + 1.275, Bb[2] = Eb + .5, Ib.forEach(((ab, Ub) => {
            Tb.pending[Ub] += ab.perSecond * Yb * Mb;
            const Ab = Math.floor(Tb.pending[Ub]);
            Ab > 0 && this.emit(bb, Ub, Bb, Ab) && (Tb.pending[Ub] -= Ab)
          }))
        }
      }
      dispose(bb) {
        for (const Ub of this.smokes) Fb(bb, Ub);
        this.smokes = [];
        for (const Ub of null !== (ab = this.puffers) && void 0 !== ab ? ab : []) {
          var ab;
          Ub.dispose()
        }
        this.puffers = null
      }
      emit(bb, ab, Ub, Ab) {
        return this.puffers ??= Ib.map((bb => {
          let {
            style: ab,
            perSecond: Ub
          } = bb;
          const Ab = (ab.count / .3 + Ub) * ab.life[1];
          return new xb.f(ab, Math.ceil(4 * Ab), Hb)
        })), this.puffers[ab].emit(bb, Ub, this.renderFrame, Ab)
      }
    }

    function Fb(bb, ab) {
      null !== ab.fire && (bb.disposeGameMesh(ab.fire), ab.fire = null)
    }

    function hb() {
      let bb;
      const ab = new db;
      return {
        onCreate(ab) {
          bb = ab
        },
        onReceivedMessageFromServer(Ub, Ab) {
          Ub === Eb.x && ab.start(bb, Ab)
        },
        onAfterRender(Ub) {
          ab.onAfterRender(bb, Ub)
        },
        onClose() {
          ab.dispose(bb)
        }
      }
    }

    function Gb(bb, ab, Ub, Ab) {
      return {
        dialogue: zb(Ab.localPlayerId),
        fishing: yb(Ab.localPlayerId),
        furnaceSmoke: hb(),
        ironChest: Mb()
      }
    }

    function Qb(bb, ab) {
      for (const Mb of [bb, ...null !== ab && void 0 !== ab ? ab : []]) try {
        var Ub;
        null === Mb || void 0 === Mb || null === (Ub = Mb.onClose) || void 0 === Ub || Ub.call(Mb)
      } catch (Ab) {
        console.error("Error in client onClose callback", Ab)
      }
    }
  },
  38434: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => Tb
    });
    const Ab = 1 / .6,
      Mb = {
        kind: "smokePuff"
      };
    class Tb {
      constructor(bb, ab, Ub) {
        this.style = bb, this.PL = ab, this.half = Ub, this.particles = null, this.lastFrame = -1
      }
      emit(bb, ab, Ub) {
        let Tb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Ub !== this.lastFrame && (this.lastFrame = Ub, this.particles || (this.particles = bb.createParticles(function(bb, ab) {
          const [
            [Ub, Tb, Eb],
            [Yb, Bb, eb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Mb : "square_particle",
            PL: ab,
            minLifeTime: bb.life[0] / Ab,
            maxLifeTime: bb.life[1] / Ab,
            minEmitPower: bb.power[0] * Ab,
            maxEmitPower: bb.power[1] * Ab,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * Ab * Ab, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Ub, Tb, Eb, bb.alpha],
              maxColor: [Yb, Bb, eb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [Ub, Tb, Eb, 0],
              maxColor: [Yb, Bb, eb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.PL), {
          pos: ab,
          half: this.half
        })), this.particles.moveTo(ab, this.half), this.particles.emit(Tb), !0)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
    }
  },
  4536: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => Ab,
      i: () => Tb,
      k: () => Bb,
      n: () => Eb
    });
    const Ab = ["sine", "triangle", "square", "sawtooth"],
      Mb = 55,
      Tb = {
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

    function Eb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(Tb, bb) ? Tb[bb] : null
    }

    function Yb(bb, ab, Ub) {
      return Math.min(Ub, Math.max(ab, bb))
    }

    function Bb(bb) {
      const ab = Yb(bb.durationMs, 10, 500),
        Ub = Yb(bb.attackMs, 0, ab),
        {
          intonation: Mb
        } = bb;
      return {
        waveform: Ab.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Yb(bb.pitchHz, 20, 4e3),
        glideSemitones: Yb(bb.glideSemitones, -24, 24),
        durationMs: ab,
        attackMs: Ub,
        releaseMs: Yb(bb.releaseMs, 0, ab - Ub),
        lowpassHz: null === bb.lowpassHz ? null : Yb(bb.lowpassHz, 20, 2e4),
        volume: Yb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Yb(Mb.variationSemitones, 0, 6),
          declineSemitones: Yb(Mb.declineSemitones, 0, 12),
          questionRiseSemitones: Yb(Mb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Yb(Mb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Yb(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);