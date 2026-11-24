export const id = 27;
export const ids = [27];
export const modules = {
  4964: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Jp,
      h: () => Qp
    });
    var Op = cp(4970),
      op = cp(322);
    const Ip = 120,
      Sp = 260,
      xp = 1.15,
      Lp = 1.2,
      Yp = 2,
      Dp = 1.08,
      Ap = .8,
      Pp = .95,
      Wp = 8,
      yp = "[\"')\\]\u300d\u300f\uff09]*",
      Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
      wp = new RegExp(`[?\uff1f]${yp}$`),
      vp = new RegExp(`[!\uff01]${yp}$`),
      tp = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Hp = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      dp = new RegExp(`[${Hp}]`),
      ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
      jp = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function kp(pp) {
      let ip = 2166136261;
      for (let cp = 0; cp < pp.length; cp++) ip ^= pp.charCodeAt(cp), ip = Math.imul(ip, 16777619);
      return (ip >>> 0) / 4294967295 * 2 - 1
    }

    function mp(pp) {
      var ip;
      if (dp.test(pp)) return 1;
      const cp = pp.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Op = cp.replace(/[^0-9]/g, "");
      if (Op.length > 0 && !/\p{L}/u.test(cp)) return Math.min(Op.length, 4);
      const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
      if (0 === op.length) {
        var Ip, Sp;
        const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
        return 0 === pp ? 0 : Math.min(Math.max(1, Math.round(pp / 2.5)), Wp)
      }
      const xp = cp.replace(/[^\p{L}]/gu, ""),
        Lp = op.length > 1 && "e" === op.at(-1) && xp.endsWith("e") && !xp.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(pp.replace(/[^\p{L}]/gu, ""));
      return Math.min(op.length - (Lp ? 1 : 0), Wp)
    }

    function Rp(pp) {
      return pp.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function qp(pp) {
      const ip = pp.replace(/[^\p{L}]/gu, "");
      return ip.length >= 2 && ip === ip.toUpperCase() && ip !== ip.toLowerCase()
    }

    function Mp(pp, ip) {
      var cp;
      const Wp = ip && (0, Op.m)(ip),
        yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
        Hp = function(pp) {
          const ip = [];
          for (const Op of (0, op.nc)(pp))
            if ("string" === typeof Op)
              for (const pp of Op.split(/(\s+)/)) {
                if ("" === pp) continue;
                if (/^\s+$/.test(pp)) {
                  ip.push({
                    kind: "space",
                    text: pp
                  });
                  continue
                }
                if (!dp.test(pp)) {
                  ip.push({
                    kind: "word",
                    text: pp,
                    delayMs: 0
                  });
                  continue
                }
                let Op = !0;
                for (const op of null !== (cp = pp.match(ep)) && void 0 !== cp ? cp : []) {
                  var cp;
                  const pp = ip.at(-1);
                  Op || "word" !== (null === pp || void 0 === pp ? void 0 : pp.kind) || dp.test(op) || /[\p{L}\p{N}]/u.test(op) ? (Op || ip.push({
                    kind: "space",
                    text: "\u200b"
                  }), ip.push({
                    kind: "word",
                    text: op,
                    delayMs: 0
                  }), Op = !1) : pp.text += op
                }
              } else ip.push({
                kind: "icon",
                text: Op.icon,
                delayMs: 0
              });
          return ip
        }(pp),
        jp = [];
      let Mp = [];
      for (const Op of Hp) "space" !== Op.kind && (Mp.push(Op), Up.test(Op.text) && (jp.push(Mp), Mp = []));
      jp.push(Mp);
      const Cp = [];
      let Ep = 0;
      for (const Op of jp) {
        var Xp, lp;
        const pp = null !== (Xp = null === (lp = Op.at(-1)) || void 0 === lp ? void 0 : lp.text) && void 0 !== Xp ? Xp : "",
          ip = wp.test(pp),
          cp = vp.test(pp),
          op = Op.map((pp => "word" === pp.kind ? mp(pp.text) : 1)),
          Hp = op.findLastIndex((pp => pp > 0));
        for (const [wp, vp] of Op.entries()) {
          const pp = "word" === vp.kind,
            Op = op[wp];
          vp.delayMs = Ep;
          for (let op = 0; Wp && op < Op; op++) {
            const {
              intonation: Ip
            } = Wp;
            let Sp = Hp > 0 ? -Ip.declineSemitones * (wp / Hp) : 0;
            Sp += kp(`${Rp(vp.text)}|${op}`) * Ip.variationSemitones;
            const Up = Math.min(1, Ip.variationSemitones);
            let tp = Wp.glideSemitones,
              dp = 1;
            cp && (Sp += Ip.exclaimLiftSemitones, dp *= xp), ip && wp === Hp && (Sp += Ip.questionRiseSemitones * (Op > 1 ? .5 + .5 * op / (Op - 1) : 1), op === Op - 1 && (tp = Math.abs(tp) + Ip.questionRiseSemitones / 2)), pp && qp(vp.text) && (Sp += Yp * Up, dp *= Lp), Op > 1 && 0 === op && (Sp += Ap * Up, dp *= Dp), Cp.push({
              atMs: Ep + op * yp,
              semitones: Sp,
              glideSemitones: tp,
              durationMs: op < Op - 1 ? Math.min(Wp.durationMs, yp * Pp) : Wp.durationMs,
              level: dp
            })
          }
          Ep += Op * yp + (Up.test(vp.text) ? Sp : tp.test(vp.text) ? Ip : 0)
        }
      }
      return {
        pieces: Hp.map((pp => "space" === pp.kind ? pp : "icon" === pp.kind ? {
          kind: "icon",
          icon: pp.text,
          delayMs: pp.delayMs
        } : {
          kind: "word",
          text: pp.text,
          delayMs: pp.delayMs
        })),
        blips: Cp
      }
    }
    var Cp = cp(1201),
      Ep = cp(1260),
      Xp = cp(1963);

    function lp(pp) {
      if ("string" === typeof pp) return pp;
      const ip = Ep.g.get().getCurrentLanguageCode();
      return (0, Cp.w)(ip, pp.translationKey, (0, Cp.t)(pp.params, Xp.d.shown))
    }

    function Qp(pp) {
      const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
        cp = ip && (0, Op.m)(ip);
      return {
        plan: Mp(lp(pp.line), cp),
        synth: cp
      }
    }

    function Jp(pp) {
      const ip = [];
      let cp = [];
      for (const [op, Ip] of pp.entries()) {
        var Op;
        "space" === Ip.kind && (" " !== Ip.text || "icon" !== (null === (Op = pp[op + 1]) || void 0 === Op ? void 0 : Op.kind)) ? (cp.length > 0 && ip.push(cp), ip.push([Ip]), cp = []) : cp.push(Ip)
      }
      return cp.length > 0 && ip.push(cp), ip
    }
  },
  4972: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Dp,
      f: () => Ap
    });
    var Op = cp(4974),
      op = cp(25);
    const Ip = .25,
      Sp = .85,
      xp = .02,
      Lp = .01;

    function Yp(pp, ip, cp, Op, op, Ip, xp) {
      const {
        waveform: Lp,
        pitchHz: Yp,
        attackMs: Dp,
        releaseMs: Ap,
        lowpassHz: Pp
      } = cp, Wp = op + Op.durationMs / 1e3, yp = Yp * 2 ** (Op.semitones / 12), Up = pp.createOscillator();
      Up.type = Lp, Up.frequency.setValueAtTime(yp, op), Up.frequency.exponentialRampToValueAtTime(yp * 2 ** (Op.glideSemitones / 12), Wp);
      const wp = op + Math.min(Dp, Op.durationMs) / 1e3,
        vp = pp.createGain();
      vp.gain.setValueAtTime(0, op), vp.gain.linearRampToValueAtTime(Ip, wp), vp.gain.linearRampToValueAtTime(Ip * Sp, Math.max(wp, Wp - Ap / 1e3)), vp.gain.linearRampToValueAtTime(0, Wp);
      const tp = [Up];
      if (null !== Pp) {
        const ip = pp.createBiquadFilter();
        ip.type = "lowpass", ip.frequency.value = Pp, tp.push(ip)
      }
      tp.push(vp, ip);
      for (let Sp = 1; Sp < tp.length; Sp++) tp[Sp - 1].connect(tp[Sp]);
      return Up.onended = () => {
        for (const pp of tp.slice(0, -1)) pp.disconnect();
        xp()
      }, Up.start(op), Up.stop(Wp), Up
    }

    function Dp(pp, ip, cp, Op, op, Sp) {
      if (0 === Op.length) return Sp(), () => {};
      const Dp = Ip * cp.volume * op,
        Ap = pp.createGain();
      Ap.connect(ip);
      const Pp = pp.currentTime + xp,
        Wp = new Set;
      for (const Ip of Op) {
        const ip = Yp(pp, Ap, cp, Ip, Pp + Ip.atMs / 1e3, Dp * Ip.level, (() => {
          Wp.delete(ip), 0 === Wp.size && (Ap.disconnect(), Sp())
        }));
        Wp.add(ip)
      }
      return () => {
        const ip = pp.currentTime;
        Ap.gain.setTargetAtTime(0, ip, Lp);
        for (const pp of Wp) try {
          pp.stop(ip + 5 * Lp)
        } catch {}
      }
    }

    function Ap(pp, ip) {
      var cp;
      const Ip = Op.Howler.ctx,
        Sp = Op.Howler.masterGain;
      if (!Ip || !Sp || !op.c.get("soundOnFromAd")) return () => {};
      const xp = Op.Howler;
      return null === (cp = xp._autoResume) || void 0 === cp || cp.call(xp), Dp(Ip, Sp, pp, ip, op.c.get("soundVolume"), (() => {
        var pp;
        null === (pp = xp._autoSuspend) || void 0 === pp || pp.call(xp)
      }))
    }
  },
  39324: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      closeClientGame: () => Bp,
      createDefaultClientPlugins: () => Jp
    });
    var Op = cp(337);

    function op() {
      let pp;
      return {
        onCreate(ip) {
          pp = ip
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(ip, cp, op, Ip, Sp, xp) {
          var Lp, Yp;
          if ("Iron Chest" !== pp.getMetaInfo(Sp).rootName) return;
          if (!pp.hasEffect(ip, "Thief")) return;
          const Dp = pp.getBlockData(cp, op, Ip);
          return pp.getPlayerDbId(ip) !== (null === Dp || void 0 === Dp || null === (Lp = Dp.persisted) || void 0 === Lp || null === (Yp = Lp.shared) || void 0 === Yp ? void 0 : Yp.ownerDbId) ? (pp.sendMessage(ip, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Op.N.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Ip = cp(4341),
      Sp = cp(1251);
    const xp = 8.4,
      Lp = 1e-4,
      Yp = .15,
      Dp = .04,
      Ap = [.12, .04, .12],
      Pp = 26,
      Wp = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        TA: 1,
        minLifeTime: Lp,
        maxLifeTime: Lp,
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
        blendMode: Ip.g.Standard
      },
      yp = {
        texture: "bubble",
        mipmaps: !1,
        TA: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Pp,
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
        blendMode: Ip.g.Standard
      },
      Up = [0, 0, 0],
      wp = [0, 0, 0];

    function vp(pp) {
      const ip = new Map;
      let cp = null;

      function Op(pp) {
        var ip, cp;
        null === (ip = pp.bubbles) || void 0 === ip || ip.stop(), null === (cp = pp.fish) || void 0 === cp || cp.stop()
      }

      function op(cp) {
        if (!cp.readDrawnPosition(pp, wp)) {
          for (const pp of ip.values()) {
            var Op;
            null === (Op = pp.bubbles) || void 0 === Op || Op.setEmitRate(0)
          }
          return
        }
        const op = performance.now();
        for (const [pp, Sp] of ip) {
          var Ip;
          if (null === (Ip = Sp.bubbles) || void 0 === Ip || Ip.setEmitRate(0), !cp.readDrawnPosition(pp, Up)) continue;
          if (!((Up[0] - wp[0]) ** 2 + (Up[1] - wp[1]) ** 2 + (Up[2] - wp[2]) ** 2 < 900)) continue;
          const ip = Math.max(0, Sp.biteAt - op),
            Op = Sp.approachDurationMs > 0 ? Math.min(1, 1 - ip / Sp.approachDurationMs) : 1,
            Lp = (Sp.approachDurationMs - ip) / 1e3,
            vp = Sp.phase + .25 * Math.sin(1.7 * Lp + Sp.phase),
            tp = Math.min(Sp.approachDurationMs / 3e3 * 2.8, xp) * (1 - Op) * (1 + .15 * Math.sin(2.1 * Lp + Sp.phase)),
            Hp = Math.min(1, 4 * (1 - Op)),
            dp = (.45 * Math.sin(4.1 * Lp + Sp.phase) + .18 * Math.sin(9.7 * Lp + 2 * Sp.phase)) * Hp,
            ep = Up[0] + Math.cos(vp) * tp - Math.sin(vp) * dp,
            jp = Math.ceil(Sp.surfaceY),
            kp = Up[2] + Math.sin(vp) * tp + Math.cos(vp) * dp,
            {
              fishAt: mp,
              bubblesAt: Rp
            } = Sp;
          mp[0] = Rp[0] = ep, mp[1] = jp + Yp, Rp[1] = jp + Dp, mp[2] = Rp[2] = kp, Sp.fish ??= cp.createParticles(Wp, {
            pos: mp
          }), Sp.fish.moveTo(mp), Sp.fish.emit(1), Sp.bubbles ??= cp.createParticles(yp, {
            pos: Rp,
            half: Ap
          }), Sp.bubbles.moveTo(Rp), Sp.bubbles.setEmitRate(Pp + 32 * (.5 + .5 * Math.sin(9 * Lp + Sp.phase)) ** 4 + 13 * Op)
        }
      }
      return {
        onCreate(pp) {
          cp = pp
        },
        onAfterRender() {
          cp && op(cp)
        },
        onClose() {
          for (const pp of ip.values()) Op(pp);
          ip.clear(), cp = null
        },
        onReceivedMessageFromServer(pp, cp) {
          if (pp !== Sp.z) return;
          const {
            hookId: op,
            waiting: Ip
          } = cp;
          if (Ip) ip.has(op) || ip.set(op, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Ip.remainingMs,
            approachDurationMs: Ip.durationMs,
            surfaceY: Ip.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const pp = ip.get(op);
            pp && Op(pp), ip.delete(op)
          }
        }
      }
    }
    var tp = cp(4972),
      Hp = cp(4964);

    function dp(pp) {
      let ip, cp = null,
        Op = null;
      const op = () => {
        var pp;
        null === (pp = Op) || void 0 === pp || pp(), Op = null
      };
      return {
        onCreate(Op) {
          ip = Op, cp = ip.getClientOption(pp, "dialogue")
        },
        onAfterRender() {
          if (!ip) return;
          const Ip = ip.getClientOption(pp, "dialogue");
          if (Ip === cp) return;
          if (cp = Ip, op(), !Ip || !1 === Ip.animateIn) return;
          const {
            plan: Sp,
            synth: xp
          } = (0, Hp.h)(Ip);
          xp && (Op = (0, tp.f)(xp, Sp.blips))
        },
        onClose: op
      }
    }
    var ep = cp(39330);
    const jp = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      kp = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      mp = [0, 1, 2, 0, 2, 3];

    function Rp(pp, ip, cp) {
      var Op;
      let [op, Ip, Sp] = ip;
      if (pp.hasPackModel("Furnace")) return null;
      const xp = ((null !== (Op = pp.getMetaInfo(cp).rot) && void 0 !== Op ? Op : 1) - 1) * Math.PI / 2,
        Lp = Math.PI + xp,
        Yp = Math.cos(Lp),
        Dp = Math.sin(Lp),
        Ap = [];
      for (const [yp, Up] of jp) Ap.push(yp * Yp, Up, -yp * Dp);
      const Pp = {
          positions: Ap,
          indices: mp,
          uvs: kp
        },
        Wp = [op + .5 + .51 * Math.sin(xp), Ip + .375, Sp + .5 + .51 * Math.cos(xp)];
      return pp.createGameMesh(Pp, {
        kind: "furnaceFire"
      }, Wp)
    }

    function qp(pp) {
      return Math.floor(pp / 200) % 3
    }

    function Mp(pp, ip, cp) {
      pp.setGameMesh(ip, {
        uvOffset: [0, cp / 3]
      })
    }
    const Cp = [.12, .025, .12],
      Ep = [{
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
          blendMode: Ip.g.Standard,
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
          blendMode: Ip.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Xp {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(pp, ip) {
        const cp = pp.getBlockId(ip[0], ip[1], ip[2]);
        if ("Furnace" !== pp.getMetaInfo(cp).rootName) return;
        const Op = performance.now();
        let op = this.smokes.find((pp => pp.pos[0] === ip[0] && pp.pos[1] === ip[1] && pp.pos[2] === ip[2] && pp.tx === cp));
        if (op || (op = {
            pos: [ip[0], ip[1], ip[2]],
            tx: cp,
            endMs: Op,
            lastBurstMs: -1 / 0,
            pending: new Array(Ep.length).fill(0),
            fire: Rp(pp, ip, cp)
          }, this.smokes.push(op), null !== op.fire && (Mp(pp, op.fire, qp(Op)), this.shownFireFrame = -1)), op.endMs = Op + 6e3, this.smokes.length > 4) {
          const ip = this.smokes.reduce(((pp, ip) => ip.endMs < pp.endMs ? ip : pp));
          lp(pp, ip), this.smokes.splice(this.smokes.indexOf(ip), 1)
        }
        Op - op.lastBurstMs >= 300 && (op.lastBurstMs = Op, Ep.forEach(((pp, ip) => {
          op.pending[ip] += pp.style.count
        })))
      }
      onAfterRender(pp, ip) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const cp = performance.now();
        this.smokes = this.smokes.filter((ip => {
          const [Op, op, Ip] = ip.pos, Sp = cp < ip.endMs && pp.getBlockId(Op, op, Ip) === ip.tx;
          return Sp || lp(pp, ip), Sp
        }));
        const Op = qp(cp);
        if (Op !== this.shownFireFrame) {
          this.shownFireFrame = Op;
          for (const ip of this.smokes) null !== ip.fire && Mp(pp, ip.fire, Op)
        }
        if (!pp.particlesEnabled()) {
          for (const pp of this.smokes) pp.pending.fill(0);
          return
        }
        const op = Math.min(ip, 250) / 1e3;
        for (const Ip of this.smokes) {
          const [ip, Op, Sp] = Ip.pos;
          if (0 !== pp.getBlockId(ip, Op + 1, Sp)) {
            Ip.pending.fill(0);
            continue
          }
          const xp = (Ip.endMs - cp) / 6e3,
            Lp = this.centre;
          Lp[0] = ip + .5, Lp[1] = Op + 1.275, Lp[2] = Sp + .5, Ep.forEach(((ip, cp) => {
            Ip.pending[cp] += ip.perSecond * xp * op;
            const Op = Math.floor(Ip.pending[cp]);
            Op > 0 && this.emit(pp, cp, Lp, Op) && (Ip.pending[cp] -= Op)
          }))
        }
      }
      dispose(pp) {
        for (const cp of this.smokes) lp(pp, cp);
        this.smokes = [];
        for (const cp of null !== (ip = this.puffers) && void 0 !== ip ? ip : []) {
          var ip;
          cp.dispose()
        }
        this.puffers = null
      }
      emit(pp, ip, cp, Op) {
        return this.puffers ??= Ep.map((pp => {
          let {
            style: ip,
            perSecond: cp
          } = pp;
          const Op = (ip.count / .3 + cp) * ip.life[1];
          return new ep.i(ip, Math.ceil(4 * Op), Cp)
        })), this.puffers[ip].emit(pp, cp, this.renderFrame, Op)
      }
    }

    function lp(pp, ip) {
      null !== ip.fire && (pp.disposeGameMesh(ip.fire), ip.fire = null)
    }

    function Qp() {
      let pp;
      const ip = new Xp;
      return {
        onCreate(ip) {
          pp = ip
        },
        onReceivedMessageFromServer(cp, Op) {
          cp === Sp.C && ip.start(pp, Op)
        },
        onAfterRender(cp) {
          ip.onAfterRender(pp, cp)
        },
        onClose() {
          ip.dispose(pp)
        }
      }
    }

    function Jp(pp, ip, cp, Op) {
      return {
        dialogue: dp(Op.localPlayerId),
        fishing: vp(Op.localPlayerId),
        furnaceSmoke: Qp(),
        ironChest: op()
      }
    }

    function Bp(pp, ip) {
      for (const op of [pp, ...null !== ip && void 0 !== ip ? ip : []]) try {
        var cp;
        null === op || void 0 === op || null === (cp = op.onClose) || void 0 === cp || cp.call(op)
      } catch (Op) {
        console.error("Error in client onClose callback", Op)
      }
    }
  },
  39330: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      i: () => Ip
    });
    const Op = 1 / .6,
      op = {
        kind: "smokePuff"
      };
    class Ip {
      constructor(pp, ip, cp) {
        this.style = pp, this.TA = ip, this.half = cp, this.particles = null, this.lastFrame = -1
      }
      emit(pp, ip, cp) {
        let Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return cp !== this.lastFrame && (this.lastFrame = cp, this.particles || (this.particles = pp.createParticles(function(pp, ip) {
          const [
            [cp, Ip, Sp],
            [xp, Lp, Yp]
          ] = pp.colours;
          return {
            texture: pp.soft ? op : "square_particle",
            TA: ip,
            minLifeTime: pp.life[0] / Op,
            maxLifeTime: pp.life[1] / Op,
            minEmitPower: pp.power[0] * Op,
            maxEmitPower: pp.power[1] * Op,
            minSize: pp.size[0],
            maxSize: pp.size[1],
            emitRate: 0,
            gravity: [0, pp.lift * Op * Op, 0],
            dir1: [-pp.spread, 1, -pp.spread],
            dir2: [pp.spread, 1, pp.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cp, Ip, Sp, pp.alpha],
              maxColor: [xp, Lp, Yp, pp.alpha]
            }, {
              timeFraction: 1,
              minColor: [cp, Ip, Sp, 0],
              maxColor: [xp, Lp, Yp, 0]
            }],
            blendMode: pp.blendMode
          }
        }(this.style, this.TA), {
          pos: ip,
          half: this.half
        })), this.particles.moveTo(ip, this.half), this.particles.emit(Ip), !0)
      }
      dispose() {
        var pp;
        null === (pp = this.particles) || void 0 === pp || pp.stop(), this.particles = null
      }
    }
  },
  4970: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      f: () => Op,
      i: () => Ip,
      m: () => Lp,
      o: () => Sp
    });
    const Op = ["sine", "triangle", "square", "sawtooth"],
      op = 55,
      Ip = {
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

    function Sp(pp) {
      return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
    }

    function xp(pp, ip, cp) {
      return Math.min(cp, Math.max(ip, pp))
    }

    function Lp(pp) {
      const ip = xp(pp.durationMs, 10, 500),
        cp = xp(pp.attackMs, 0, ip),
        {
          intonation: op
        } = pp;
      return {
        waveform: Op.includes(pp.waveform) ? pp.waveform : "sine",
        pitchHz: xp(pp.pitchHz, 20, 4e3),
        glideSemitones: xp(pp.glideSemitones, -24, 24),
        durationMs: ip,
        attackMs: cp,
        releaseMs: xp(pp.releaseMs, 0, ip - cp),
        lowpassHz: null === pp.lowpassHz ? null : xp(pp.lowpassHz, 20, 2e4),
        volume: xp(pp.volume, 0, 2),
        intonation: {
          variationSemitones: xp(op.variationSemitones, 0, 6),
          declineSemitones: xp(op.declineSemitones, 0, 12),
          questionRiseSemitones: xp(op.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: xp(op.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: xp(pp.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);