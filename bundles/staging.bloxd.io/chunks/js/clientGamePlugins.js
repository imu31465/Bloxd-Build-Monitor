export const id = 27;
export const ids = [27];
export const modules = {
  4611: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Jb,
      i: () => tb
    });
    var Bb = hb(4617),
      Ob = hb(298);
    const Gb = 120,
      Ub = 260,
      Lb = 1.15,
      Yb = 1.2,
      Sb = 2,
      ab = 1.08,
      Hb = .8,
      wb = .95,
      Zb = 8,
      Xb = "[\"')\\]\u300d\u300f\uff09]*",
      pb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Xb}$`),
      ob = new RegExp(`[?\uff1f]${Xb}$`),
      Ab = new RegExp(`[!\uff01]${Xb}$`),
      lb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Kb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Wb = new RegExp(`[${Kb}]`),
      Cb = new RegExp(`[${Kb}]|[^${Kb}]+`, "g"),
      db = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function rb(bb) {
      let ub = 2166136261;
      for (let hb = 0; hb < bb.length; hb++) ub ^= bb.charCodeAt(hb), ub = Math.imul(ub, 16777619);
      return (ub >>> 0) / 4294967295 * 2 - 1
    }

    function jb(bb) {
      var ub;
      if (Wb.test(bb)) return 1;
      const hb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Bb = hb.replace(/[^0-9]/g, "");
      if (Bb.length > 0 && !/\p{L}/u.test(hb)) return Math.min(Bb.length, 4);
      const Ob = null !== (ub = hb.match(db)) && void 0 !== ub ? ub : [];
      if (0 === Ob.length) {
        var Gb, Ub;
        const bb = null !== (Gb = null === (Ub = hb.match(/\p{L}/gu)) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Gb ? Gb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Zb)
      }
      const Lb = hb.replace(/[^\p{L}]/gu, ""),
        Yb = Ob.length > 1 && "e" === Ob.at(-1) && Lb.endsWith("e") && !Lb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ob.length - (Yb ? 1 : 0), Zb)
    }

    function nb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Db(bb) {
      const ub = bb.replace(/[^\p{L}]/gu, "");
      return ub.length >= 2 && ub === ub.toUpperCase() && ub !== ub.toLowerCase()
    }

    function xb(bb, ub) {
      var hb;
      const Zb = ub && (0, Bb.l)(ub),
        Xb = null !== (hb = null === Zb || void 0 === Zb ? void 0 : Zb.syllableMs) && void 0 !== hb ? hb : Bb.d,
        Kb = function(bb) {
          const ub = [];
          for (const Bb of (0, Ob.nc)(bb))
            if ("string" === typeof Bb)
              for (const bb of Bb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  ub.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!Wb.test(bb)) {
                  ub.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let Bb = !0;
                for (const Ob of null !== (hb = bb.match(Cb)) && void 0 !== hb ? hb : []) {
                  var hb;
                  const bb = ub.at(-1);
                  Bb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Wb.test(Ob) || /[\p{L}\p{N}]/u.test(Ob) ? (Bb || ub.push({
                    kind: "space",
                    text: "\u200b"
                  }), ub.push({
                    kind: "word",
                    text: Ob,
                    delayMs: 0
                  }), Bb = !1) : bb.text += Ob
                }
              } else ub.push({
                kind: "icon",
                text: Bb.icon,
                delayMs: 0
              });
          return ub
        }(bb),
        db = [];
      let xb = [];
      for (const Bb of Kb) "space" !== Bb.kind && (xb.push(Bb), pb.test(Bb.text) && (db.push(xb), xb = []));
      db.push(xb);
      const zb = [];
      let gb = 0;
      for (const Bb of db) {
        var ib, vb;
        const bb = null !== (ib = null === (vb = Bb.at(-1)) || void 0 === vb ? void 0 : vb.text) && void 0 !== ib ? ib : "",
          ub = ob.test(bb),
          hb = Ab.test(bb),
          Ob = Bb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
          Kb = Ob.findLastIndex((bb => bb > 0));
        for (const [ob, Ab] of Bb.entries()) {
          const bb = "word" === Ab.kind,
            Bb = Ob[ob];
          Ab.delayMs = gb;
          for (let Ob = 0; Zb && Ob < Bb; Ob++) {
            const {
              intonation: Gb
            } = Zb;
            let Ub = Kb > 0 ? -Gb.declineSemitones * (ob / Kb) : 0;
            Ub += rb(`${nb(Ab.text)}|${Ob}`) * Gb.variationSemitones;
            const pb = Math.min(1, Gb.variationSemitones);
            let lb = Zb.glideSemitones,
              Wb = 1;
            hb && (Ub += Gb.exclaimLiftSemitones, Wb *= Lb), ub && ob === Kb && (Ub += Gb.questionRiseSemitones * (Bb > 1 ? .5 + .5 * Ob / (Bb - 1) : 1), Ob === Bb - 1 && (lb = Math.abs(lb) + Gb.questionRiseSemitones / 2)), bb && Db(Ab.text) && (Ub += Sb * pb, Wb *= Yb), Bb > 1 && 0 === Ob && (Ub += Hb * pb, Wb *= ab), zb.push({
              atMs: gb + Ob * Xb,
              semitones: Ub,
              glideSemitones: lb,
              durationMs: Ob < Bb - 1 ? Math.min(Zb.durationMs, Xb * wb) : Zb.durationMs,
              level: Wb
            })
          }
          gb += Bb * Xb + (pb.test(Ab.text) ? Ub : lb.test(Ab.text) ? Gb : 0)
        }
      }
      return {
        pieces: Kb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: zb
      }
    }
    var zb = hb(1095),
      gb = hb(1144),
      ib = hb(1819);

    function vb(bb) {
      if ("string" === typeof bb) return bb;
      const ub = gb.h.get().getCurrentLanguageCode();
      return (0, zb.w)(ub, bb.translationKey, (0, zb.s)(bb.params, ib.d.shown))
    }

    function tb(bb) {
      const ub = void 0 === bb.voice ? null : (0, Bb.o)(bb.voice),
        hb = ub && (0, Bb.l)(ub);
      return {
        plan: xb(vb(bb.line), hb),
        synth: hb
      }
    }

    function Jb(bb) {
      const ub = [];
      let hb = [];
      for (const [Ob, Gb] of bb.entries()) {
        var Bb;
        "space" === Gb.kind && (" " !== Gb.text || "icon" !== (null === (Bb = bb[Ob + 1]) || void 0 === Bb ? void 0 : Bb.kind)) ? (hb.length > 0 && ub.push(hb), ub.push([Gb]), hb = []) : hb.push(Gb)
      }
      return hb.length > 0 && ub.push(hb), ub
    }
  },
  4620: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ab,
      f: () => Hb
    });
    var Bb = hb(4626),
      Ob = hb(13);
    const Gb = .25,
      Ub = .85,
      Lb = .02,
      Yb = .01;

    function Sb(bb, ub, hb, Bb, Ob, Gb, Lb) {
      const {
        waveform: Yb,
        pitchHz: Sb,
        attackMs: ab,
        releaseMs: Hb,
        lowpassHz: wb
      } = hb, Zb = Ob + Bb.durationMs / 1e3, Xb = Sb * 2 ** (Bb.semitones / 12), pb = bb.createOscillator();
      pb.type = Yb, pb.frequency.setValueAtTime(Xb, Ob), pb.frequency.exponentialRampToValueAtTime(Xb * 2 ** (Bb.glideSemitones / 12), Zb);
      const ob = Ob + Math.min(ab, Bb.durationMs) / 1e3,
        Ab = bb.createGain();
      Ab.gain.setValueAtTime(0, Ob), Ab.gain.linearRampToValueAtTime(Gb, ob), Ab.gain.linearRampToValueAtTime(Gb * Ub, Math.max(ob, Zb - Hb / 1e3)), Ab.gain.linearRampToValueAtTime(0, Zb);
      const lb = [pb];
      if (null !== wb) {
        const ub = bb.createBiquadFilter();
        ub.type = "lowpass", ub.frequency.value = wb, lb.push(ub)
      }
      lb.push(Ab, ub);
      for (let Ub = 1; Ub < lb.length; Ub++) lb[Ub - 1].connect(lb[Ub]);
      return pb.onended = () => {
        for (const bb of lb.slice(0, -1)) bb.disconnect();
        Lb()
      }, pb.start(Ob), pb.stop(Zb), pb
    }

    function ab(bb, ub, hb, Bb, Ob, Ub) {
      if (0 === Bb.length) return Ub(), () => {};
      const ab = Gb * hb.volume * Ob,
        Hb = bb.createGain();
      Hb.connect(ub);
      const wb = bb.currentTime + Lb,
        Zb = new Set;
      for (const Gb of Bb) {
        const ub = Sb(bb, Hb, hb, Gb, wb + Gb.atMs / 1e3, ab * Gb.level, (() => {
          Zb.delete(ub), 0 === Zb.size && (Hb.disconnect(), Ub())
        }));
        Zb.add(ub)
      }
      return () => {
        const ub = bb.currentTime;
        Hb.gain.setTargetAtTime(0, ub, Yb);
        for (const bb of Zb) try {
          bb.stop(ub + 5 * Yb)
        } catch {}
      }
    }

    function Hb(bb, ub) {
      var hb;
      const Gb = Bb.Howler.ctx,
        Ub = Bb.Howler.masterGain;
      if (!Gb || !Ub || !Ob.d.get("soundOnFromAd")) return () => {};
      const Lb = Bb.Howler;
      return null === (hb = Lb._autoResume) || void 0 === hb || hb.call(Lb), ab(Gb, Ub, bb, ub, Ob.d.get("soundVolume"), (() => {
        var bb;
        null === (bb = Lb._autoSuspend) || void 0 === bb || bb.call(Lb)
      }))
    }
  },
  38764: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      closeClientGame: () => eb,
      createDefaultClientPlugins: () => Jb
    });
    var Bb = hb(314);

    function Ob() {
      let bb;
      return {
        onCreate(ub) {
          bb = ub
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(ub, hb, Ob, Gb, Ub, Lb) {
          var Yb, Sb;
          if ("Iron Chest" !== bb.getMetaInfo(Ub).rootName) return;
          if (!bb.hasEffect(ub, "Thief")) return;
          const ab = bb.getBlockData(hb, Ob, Gb);
          return bb.getPlayerDbId(ub) !== (null === ab || void 0 === ab || null === (Yb = ab.persisted) || void 0 === Yb || null === (Sb = Yb.shared) || void 0 === Sb ? void 0 : Sb.ownerDbId) ? (bb.sendMessage(ub, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Bb.I.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Gb = hb(4013),
      Ub = hb(1133);
    const Lb = 8.4,
      Yb = 1e-4,
      Sb = .15,
      ab = .04,
      Hb = [.12, .04, .12],
      wb = 26,
      Zb = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        LH: 1,
        minLifeTime: Yb,
        maxLifeTime: Yb,
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
        blendMode: Gb.f.Standard
      },
      Xb = {
        texture: "bubble",
        mipmaps: !1,
        LH: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: wb,
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
        blendMode: Gb.f.Standard
      },
      pb = [0, 0, 0],
      ob = [0, 0, 0];

    function Ab(bb) {
      const ub = new Map;
      let hb = null;

      function Bb(bb) {
        var ub, hb;
        null === (ub = bb.bubbles) || void 0 === ub || ub.stop(), null === (hb = bb.fish) || void 0 === hb || hb.stop()
      }

      function Ob(hb) {
        if (!hb.readDrawnPosition(bb, ob)) {
          for (const bb of ub.values()) {
            var Bb;
            null === (Bb = bb.bubbles) || void 0 === Bb || Bb.setEmitRate(0)
          }
          return
        }
        const Ob = performance.now();
        for (const [bb, Ub] of ub) {
          var Gb;
          if (null === (Gb = Ub.bubbles) || void 0 === Gb || Gb.setEmitRate(0), !hb.readDrawnPosition(bb, pb)) continue;
          if (!((pb[0] - ob[0]) ** 2 + (pb[1] - ob[1]) ** 2 + (pb[2] - ob[2]) ** 2 < 900)) continue;
          const ub = Math.max(0, Ub.biteAt - Ob),
            Bb = Ub.approachDurationMs > 0 ? Math.min(1, 1 - ub / Ub.approachDurationMs) : 1,
            Yb = (Ub.approachDurationMs - ub) / 1e3,
            Ab = Ub.phase + .25 * Math.sin(1.7 * Yb + Ub.phase),
            lb = Math.min(Ub.approachDurationMs / 3e3 * 2.8, Lb) * (1 - Bb) * (1 + .15 * Math.sin(2.1 * Yb + Ub.phase)),
            Kb = Math.min(1, 4 * (1 - Bb)),
            Wb = (.45 * Math.sin(4.1 * Yb + Ub.phase) + .18 * Math.sin(9.7 * Yb + 2 * Ub.phase)) * Kb,
            Cb = pb[0] + Math.cos(Ab) * lb - Math.sin(Ab) * Wb,
            db = Math.ceil(Ub.surfaceY),
            rb = pb[2] + Math.sin(Ab) * lb + Math.cos(Ab) * Wb,
            {
              fishAt: jb,
              bubblesAt: nb
            } = Ub;
          jb[0] = nb[0] = Cb, jb[1] = db + Sb, nb[1] = db + ab, jb[2] = nb[2] = rb, Ub.fish ??= hb.createParticles(Zb, {
            pos: jb
          }), Ub.fish.moveTo(jb), Ub.fish.emit(1), Ub.bubbles ??= hb.createParticles(Xb, {
            pos: nb,
            half: Hb
          }), Ub.bubbles.moveTo(nb), Ub.bubbles.setEmitRate(wb + 32 * (.5 + .5 * Math.sin(9 * Yb + Ub.phase)) ** 4 + 13 * Bb)
        }
      }
      return {
        onCreate(bb) {
          hb = bb
        },
        onAfterRender() {
          hb && Ob(hb)
        },
        onClose() {
          for (const bb of ub.values()) Bb(bb);
          ub.clear(), hb = null
        },
        onReceivedMessageFromServer(bb, hb) {
          if (bb !== Ub.D) return;
          const {
            hookId: Ob,
            waiting: Gb
          } = hb;
          if (Gb) ub.has(Ob) || ub.set(Ob, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Gb.remainingMs,
            approachDurationMs: Gb.durationMs,
            surfaceY: Gb.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const bb = ub.get(Ob);
            bb && Bb(bb), ub.delete(Ob)
          }
        }
      }
    }
    var lb = hb(4620),
      Kb = hb(4611);

    function Wb(bb) {
      let ub, hb = null,
        Bb = null;
      const Ob = () => {
        var bb;
        null === (bb = Bb) || void 0 === bb || bb(), Bb = null
      };
      return {
        onCreate(Bb) {
          ub = Bb, hb = ub.getClientOption(bb, "dialogue")
        },
        onAfterRender() {
          if (!ub) return;
          const Gb = ub.getClientOption(bb, "dialogue");
          if (Gb === hb) return;
          if (hb = Gb, Ob(), !Gb || !1 === Gb.animateIn) return;
          const {
            plan: Ub,
            synth: Lb
          } = (0, Kb.i)(Gb);
          Lb && (Bb = (0, lb.f)(Lb, Ub.blips))
        },
        onClose: Ob
      }
    }
    var Cb = hb(38772);
    const db = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      rb = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      jb = [0, 1, 2, 0, 2, 3];

    function nb(bb, ub, hb) {
      var Bb;
      let [Ob, Gb, Ub] = ub;
      if (bb.hasPackModel("Furnace")) return null;
      const Lb = ((null !== (Bb = bb.getMetaInfo(hb).rot) && void 0 !== Bb ? Bb : 1) - 1) * Math.PI / 2,
        Yb = Math.PI + Lb,
        Sb = Math.cos(Yb),
        ab = Math.sin(Yb),
        Hb = [];
      for (const [Xb, pb] of db) Hb.push(Xb * Sb, pb, -Xb * ab);
      const wb = {
          positions: Hb,
          indices: jb,
          uvs: rb
        },
        Zb = [Ob + .5 + .51 * Math.sin(Lb), Gb + .375, Ub + .5 + .51 * Math.cos(Lb)];
      return bb.createGameMesh(wb, {
        kind: "furnaceFire"
      }, Zb)
    }

    function Db(bb) {
      return Math.floor(bb / 200) % 3
    }

    function xb(bb, ub, hb) {
      bb.setGameMesh(ub, {
        uvOffset: [0, hb / 3]
      })
    }
    const zb = [.12, .025, .12],
      gb = [{
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
          blendMode: Gb.f.Standard,
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
          blendMode: Gb.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class ib {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(bb, ub) {
        const hb = bb.getBlockId(ub[0], ub[1], ub[2]);
        if ("Furnace" !== bb.getMetaInfo(hb).rootName) return;
        const Bb = performance.now();
        let Ob = this.smokes.find((bb => bb.pos[0] === ub[0] && bb.pos[1] === ub[1] && bb.pos[2] === ub[2] && bb.bS === hb));
        if (Ob || (Ob = {
            pos: [ub[0], ub[1], ub[2]],
            bS: hb,
            endMs: Bb,
            lastBurstMs: -1 / 0,
            pending: new Array(gb.length).fill(0),
            fire: nb(bb, ub, hb)
          }, this.smokes.push(Ob), null !== Ob.fire && (xb(bb, Ob.fire, Db(Bb)), this.shownFireFrame = -1)), Ob.endMs = Bb + 6e3, this.smokes.length > 4) {
          const ub = this.smokes.reduce(((bb, ub) => ub.endMs < bb.endMs ? ub : bb));
          vb(bb, ub), this.smokes.splice(this.smokes.indexOf(ub), 1)
        }
        Bb - Ob.lastBurstMs >= 300 && (Ob.lastBurstMs = Bb, gb.forEach(((bb, ub) => {
          Ob.pending[ub] += bb.style.count
        })))
      }
      onAfterRender(bb, ub) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const hb = performance.now();
        this.smokes = this.smokes.filter((ub => {
          const [Bb, Ob, Gb] = ub.pos, Ub = hb < ub.endMs && bb.getBlockId(Bb, Ob, Gb) === ub.bS;
          return Ub || vb(bb, ub), Ub
        }));
        const Bb = Db(hb);
        if (Bb !== this.shownFireFrame) {
          this.shownFireFrame = Bb;
          for (const ub of this.smokes) null !== ub.fire && xb(bb, ub.fire, Bb)
        }
        if (!bb.particlesEnabled()) {
          for (const bb of this.smokes) bb.pending.fill(0);
          return
        }
        const Ob = Math.min(ub, 250) / 1e3;
        for (const Gb of this.smokes) {
          const [ub, Bb, Ub] = Gb.pos;
          if (0 !== bb.getBlockId(ub, Bb + 1, Ub)) {
            Gb.pending.fill(0);
            continue
          }
          const Lb = (Gb.endMs - hb) / 6e3,
            Yb = this.centre;
          Yb[0] = ub + .5, Yb[1] = Bb + 1.275, Yb[2] = Ub + .5, gb.forEach(((ub, hb) => {
            Gb.pending[hb] += ub.perSecond * Lb * Ob;
            const Bb = Math.floor(Gb.pending[hb]);
            Bb > 0 && this.emit(bb, hb, Yb, Bb) && (Gb.pending[hb] -= Bb)
          }))
        }
      }
      dispose(bb) {
        for (const hb of this.smokes) vb(bb, hb);
        this.smokes = [];
        for (const hb of null !== (ub = this.puffers) && void 0 !== ub ? ub : []) {
          var ub;
          hb.dispose()
        }
        this.puffers = null
      }
      emit(bb, ub, hb, Bb) {
        return this.puffers ??= gb.map((bb => {
          let {
            style: ub,
            perSecond: hb
          } = bb;
          const Bb = (ub.count / .3 + hb) * ub.life[1];
          return new Cb.g(ub, Math.ceil(4 * Bb), zb)
        })), this.puffers[ub].emit(bb, hb, this.renderFrame, Bb)
      }
    }

    function vb(bb, ub) {
      null !== ub.fire && (bb.disposeGameMesh(ub.fire), ub.fire = null)
    }

    function tb() {
      let bb;
      const ub = new ib;
      return {
        onCreate(ub) {
          bb = ub
        },
        onReceivedMessageFromServer(hb, Bb) {
          hb === Ub.G && ub.start(bb, Bb)
        },
        onAfterRender(hb) {
          ub.onAfterRender(bb, hb)
        },
        onClose() {
          ub.dispose(bb)
        }
      }
    }

    function Jb(bb, ub, hb, Bb) {
      return {
        dialogue: Wb(Bb.localPlayerId),
        fishing: Ab(Bb.localPlayerId),
        furnaceSmoke: tb(),
        ironChest: Ob()
      }
    }

    function eb(bb, ub) {
      for (const Ob of [bb, ...null !== ub && void 0 !== ub ? ub : []]) try {
        var hb;
        null === Ob || void 0 === Ob || null === (hb = Ob.onClose) || void 0 === hb || hb.call(Ob)
      } catch (Bb) {
        console.error("Error in client onClose callback", Bb)
      }
    }
  },
  38772: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      g: () => Gb
    });
    const Bb = 1 / .6,
      Ob = {
        kind: "smokePuff"
      };
    class Gb {
      constructor(bb, ub, hb) {
        this.style = bb, this.LH = ub, this.half = hb, this.particles = null, this.lastFrame = -1
      }
      emit(bb, ub, hb) {
        let Gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return hb !== this.lastFrame && (this.lastFrame = hb, this.particles || (this.particles = bb.createParticles(function(bb, ub) {
          const [
            [hb, Gb, Ub],
            [Lb, Yb, Sb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Ob : "square_particle",
            LH: ub,
            minLifeTime: bb.life[0] / Bb,
            maxLifeTime: bb.life[1] / Bb,
            minEmitPower: bb.power[0] * Bb,
            maxEmitPower: bb.power[1] * Bb,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * Bb * Bb, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [hb, Gb, Ub, bb.alpha],
              maxColor: [Lb, Yb, Sb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [hb, Gb, Ub, 0],
              maxColor: [Lb, Yb, Sb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.LH), {
          pos: ub,
          half: this.half
        })), this.particles.moveTo(ub, this.half), this.particles.emit(Gb), !0)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
    }
  },
  4617: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      h: () => Bb,
      i: () => Gb,
      l: () => Yb,
      o: () => Ub
    });
    const Bb = ["sine", "triangle", "square", "sawtooth"],
      Ob = 55,
      Gb = {
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

    function Ub(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(Gb, bb) ? Gb[bb] : null
    }

    function Lb(bb, ub, hb) {
      return Math.min(hb, Math.max(ub, bb))
    }

    function Yb(bb) {
      const ub = Lb(bb.durationMs, 10, 500),
        hb = Lb(bb.attackMs, 0, ub),
        {
          intonation: Ob
        } = bb;
      return {
        waveform: Bb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Lb(bb.pitchHz, 20, 4e3),
        glideSemitones: Lb(bb.glideSemitones, -24, 24),
        durationMs: ub,
        attackMs: hb,
        releaseMs: Lb(bb.releaseMs, 0, ub - hb),
        lowpassHz: null === bb.lowpassHz ? null : Lb(bb.lowpassHz, 20, 2e4),
        volume: Lb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Lb(Ob.variationSemitones, 0, 6),
          declineSemitones: Lb(Ob.declineSemitones, 0, 12),
          questionRiseSemitones: Lb(Ob.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Lb(Ob.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Lb(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);