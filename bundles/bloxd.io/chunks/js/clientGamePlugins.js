export const id = 27;
export const ids = [27];
export const modules = {
  5010: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Lt,
      f: () => Zt
    });
    var Ot = Vt(5015),
      qt = Vt(377);
    const Dt = 120,
      mt = 260,
      dt = 1.15,
      jt = 1.2,
      Ht = 2,
      Xt = 1.08,
      Qt = .8,
      lt = .95,
      Et = 8,
      ft = "[\"')\\]\u300d\u300f\uff09]*",
      wt = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ft}$`),
      yt = new RegExp(`[?\uff1f]${ft}$`),
      Nt = new RegExp(`[!\uff01]${ft}$`),
      Mt = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      bt = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Jt = new RegExp(`[${bt}]`),
      Ct = new RegExp(`[${bt}]|[^${bt}]+`, "g"),
      ut = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Kt(tt) {
      let et = 2166136261;
      for (let Vt = 0; Vt < tt.length; Vt++) et ^= tt.charCodeAt(Vt), et = Math.imul(et, 16777619);
      return (et >>> 0) / 4294967295 * 2 - 1
    }

    function ht(tt) {
      var et;
      if (Jt.test(tt)) return 1;
      const Vt = tt.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ot = Vt.replace(/[^0-9]/g, "");
      if (Ot.length > 0 && !/\p{L}/u.test(Vt)) return Math.min(Ot.length, 4);
      const qt = null !== (et = Vt.match(ut)) && void 0 !== et ? et : [];
      if (0 === qt.length) {
        var Dt, mt;
        const tt = null !== (Dt = null === (mt = Vt.match(/\p{L}/gu)) || void 0 === mt ? void 0 : mt.length) && void 0 !== Dt ? Dt : 0;
        return 0 === tt ? 0 : Math.min(Math.max(1, Math.round(tt / 2.5)), Et)
      }
      const dt = Vt.replace(/[^\p{L}]/gu, ""),
        jt = qt.length > 1 && "e" === qt.at(-1) && dt.endsWith("e") && !dt.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(tt.replace(/[^\p{L}]/gu, ""));
      return Math.min(qt.length - (jt ? 1 : 0), Et)
    }

    function vt(tt) {
      return tt.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Wt(tt) {
      const et = tt.replace(/[^\p{L}]/gu, "");
      return et.length >= 2 && et === et.toUpperCase() && et !== et.toLowerCase()
    }

    function St(tt, et) {
      var Vt;
      const Et = et && (0, Ot.i)(et),
        ft = null !== (Vt = null === Et || void 0 === Et ? void 0 : Et.syllableMs) && void 0 !== Vt ? Vt : Ot.c,
        bt = function(tt) {
          const et = [];
          for (const Ot of (0, qt.Ob)(tt))
            if ("string" === typeof Ot)
              for (const tt of Ot.split(/(\s+)/)) {
                if ("" === tt) continue;
                if (/^\s+$/.test(tt)) {
                  et.push({
                    kind: "space",
                    text: tt
                  });
                  continue
                }
                if (!Jt.test(tt)) {
                  et.push({
                    kind: "word",
                    text: tt,
                    delayMs: 0
                  });
                  continue
                }
                let Ot = !0;
                for (const qt of null !== (Vt = tt.match(Ct)) && void 0 !== Vt ? Vt : []) {
                  var Vt;
                  const tt = et.at(-1);
                  Ot || "word" !== (null === tt || void 0 === tt ? void 0 : tt.kind) || Jt.test(qt) || /[\p{L}\p{N}]/u.test(qt) ? (Ot || et.push({
                    kind: "space",
                    text: "\u200b"
                  }), et.push({
                    kind: "word",
                    text: qt,
                    delayMs: 0
                  }), Ot = !1) : tt.text += qt
                }
              } else et.push({
                kind: "icon",
                text: Ot.icon,
                delayMs: 0
              });
          return et
        }(tt),
        ut = [];
      let St = [];
      for (const Ot of bt) "space" !== Ot.kind && (St.push(Ot), wt.test(Ot.text) && (ut.push(St), St = []));
      ut.push(St);
      const ct = [];
      let Rt = 0;
      for (const Ot of ut) {
        var It, Pt;
        const tt = null !== (It = null === (Pt = Ot.at(-1)) || void 0 === Pt ? void 0 : Pt.text) && void 0 !== It ? It : "",
          et = yt.test(tt),
          Vt = Nt.test(tt),
          qt = Ot.map((tt => "word" === tt.kind ? ht(tt.text) : 1)),
          bt = qt.findLastIndex((tt => tt > 0));
        for (const [yt, Nt] of Ot.entries()) {
          const tt = "word" === Nt.kind,
            Ot = qt[yt];
          Nt.delayMs = Rt;
          for (let qt = 0; Et && qt < Ot; qt++) {
            const {
              intonation: Dt
            } = Et;
            let mt = bt > 0 ? -Dt.declineSemitones * (yt / bt) : 0;
            mt += Kt(`${vt(Nt.text)}|${qt}`) * Dt.variationSemitones;
            const wt = Math.min(1, Dt.variationSemitones);
            let Mt = Et.glideSemitones,
              Jt = 1;
            Vt && (mt += Dt.exclaimLiftSemitones, Jt *= dt), et && yt === bt && (mt += Dt.questionRiseSemitones * (Ot > 1 ? .5 + .5 * qt / (Ot - 1) : 1), qt === Ot - 1 && (Mt = Math.abs(Mt) + Dt.questionRiseSemitones / 2)), tt && Wt(Nt.text) && (mt += Ht * wt, Jt *= jt), Ot > 1 && 0 === qt && (mt += Qt * wt, Jt *= Xt), ct.push({
              atMs: Rt + qt * ft,
              semitones: mt,
              glideSemitones: Mt,
              durationMs: qt < Ot - 1 ? Math.min(Et.durationMs, ft * lt) : Et.durationMs,
              level: Jt
            })
          }
          Rt += Ot * ft + (wt.test(Nt.text) ? mt : Mt.test(Nt.text) ? Dt : 0)
        }
      }
      return {
        pieces: bt.map((tt => "space" === tt.kind ? tt : "icon" === tt.kind ? {
          kind: "icon",
          icon: tt.text,
          delayMs: tt.delayMs
        } : {
          kind: "word",
          text: tt.text,
          delayMs: tt.delayMs
        })),
        blips: ct
      }
    }
    var ct = Vt(1286),
      Rt = Vt(1338),
      It = Vt(2026);

    function Pt(tt) {
      if ("string" === typeof tt) return tt;
      const et = Rt.e.get().getCurrentLanguageCode();
      return (0, ct.t)(et, tt.translationKey, (0, ct.p)(tt.params, It.d.shown))
    }

    function Zt(tt) {
      const et = void 0 === tt.voice ? null : (0, Ot.l)(tt.voice),
        Vt = et && (0, Ot.i)(et);
      return {
        plan: St(Pt(tt.line), Vt),
        synth: Vt
      }
    }

    function Lt(tt) {
      const et = [];
      let Vt = [];
      for (const [qt, Dt] of tt.entries()) {
        var Ot;
        "space" === Dt.kind && (" " !== Dt.text || "icon" !== (null === (Ot = tt[qt + 1]) || void 0 === Ot ? void 0 : Ot.kind)) ? (Vt.length > 0 && et.push(Vt), et.push([Dt]), Vt = []) : Vt.push(Dt)
      }
      return Vt.length > 0 && et.push(Vt), et
    }
  },
  5021: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Xt,
      i: () => Qt
    });
    var Ot = Vt(5030),
      qt = Vt(26);
    const Dt = .25,
      mt = .85,
      dt = .02,
      jt = .01;

    function Ht(tt, et, Vt, Ot, qt, Dt, dt) {
      const {
        waveform: jt,
        pitchHz: Ht,
        attackMs: Xt,
        releaseMs: Qt,
        lowpassHz: lt
      } = Vt, Et = qt + Ot.durationMs / 1e3, ft = Ht * 2 ** (Ot.semitones / 12), wt = tt.createOscillator();
      wt.type = jt, wt.frequency.setValueAtTime(ft, qt), wt.frequency.exponentialRampToValueAtTime(ft * 2 ** (Ot.glideSemitones / 12), Et);
      const yt = qt + Math.min(Xt, Ot.durationMs) / 1e3,
        Nt = tt.createGain();
      Nt.gain.setValueAtTime(0, qt), Nt.gain.linearRampToValueAtTime(Dt, yt), Nt.gain.linearRampToValueAtTime(Dt * mt, Math.max(yt, Et - Qt / 1e3)), Nt.gain.linearRampToValueAtTime(0, Et);
      const Mt = [wt];
      if (null !== lt) {
        const et = tt.createBiquadFilter();
        et.type = "lowpass", et.frequency.value = lt, Mt.push(et)
      }
      Mt.push(Nt, et);
      for (let mt = 1; mt < Mt.length; mt++) Mt[mt - 1].connect(Mt[mt]);
      return wt.onended = () => {
        for (const tt of Mt.slice(0, -1)) tt.disconnect();
        dt()
      }, wt.start(qt), wt.stop(Et), wt
    }

    function Xt(tt, et, Vt, Ot, qt, mt) {
      if (0 === Ot.length) return mt(), () => {};
      const Xt = Dt * Vt.volume * qt,
        Qt = tt.createGain();
      Qt.connect(et);
      const lt = tt.currentTime + dt,
        Et = new Set;
      for (const Dt of Ot) {
        const et = Ht(tt, Qt, Vt, Dt, lt + Dt.atMs / 1e3, Xt * Dt.level, (() => {
          Et.delete(et), 0 === Et.size && (Qt.disconnect(), mt())
        }));
        Et.add(et)
      }
      return () => {
        const et = tt.currentTime;
        Qt.gain.setTargetAtTime(0, et, jt);
        for (const tt of Et) try {
          tt.stop(et + 5 * jt)
        } catch {}
      }
    }

    function Qt(tt, et) {
      var Vt;
      const Dt = Ot.Howler.ctx,
        mt = Ot.Howler.masterGain;
      if (!Dt || !mt || !qt.b.get("soundOnFromAd")) return () => {};
      const dt = Ot.Howler;
      return null === (Vt = dt._autoResume) || void 0 === Vt || Vt.call(dt), Xt(Dt, mt, tt, et, qt.b.get("soundVolume"), (() => {
        var tt;
        null === (tt = dt._autoSuspend) || void 0 === tt || tt.call(dt)
      }))
    }
  },
  39360: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      closeClientGame: () => Ft,
      createDefaultClientPlugins: () => Lt
    });
    var Ot = Vt(391);

    function qt() {
      let tt;
      return {
        onCreate(et) {
          tt = et
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(et, Vt, qt, Dt, mt, dt) {
          var jt, Ht;
          if ("Iron Chest" !== tt.getMetaInfo(mt).rootName) return;
          if (!tt.hasEffect(et, "Thief")) return;
          const Xt = tt.getBlockData(Vt, qt, Dt);
          return tt.getPlayerDbId(et) !== (null === Xt || void 0 === Xt || null === (jt = Xt.persisted) || void 0 === jt || null === (Ht = jt.shared) || void 0 === Ht ? void 0 : Ht.ownerDbId) ? (tt.sendMessage(et, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Ot.P.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Dt = Vt(4339),
      mt = Vt(1325);
    const dt = 8.4,
      jt = 1e-4,
      Ht = .15,
      Xt = .04,
      Qt = [.12, .04, .12],
      lt = 26,
      Et = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        uQ: 1,
        minLifeTime: jt,
        maxLifeTime: jt,
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
        blendMode: Dt.f.Standard
      },
      ft = {
        texture: "bubble",
        mipmaps: !1,
        uQ: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: lt,
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
        blendMode: Dt.f.Standard
      },
      wt = [0, 0, 0],
      yt = [0, 0, 0];

    function Nt(tt) {
      const et = new Map;
      let Vt = null;

      function Ot(tt) {
        var et, Vt;
        null === (et = tt.bubbles) || void 0 === et || et.stop(), null === (Vt = tt.fish) || void 0 === Vt || Vt.stop()
      }

      function qt(Vt) {
        if (!Vt.readDrawnPosition(tt, yt)) {
          for (const tt of et.values()) {
            var Ot;
            null === (Ot = tt.bubbles) || void 0 === Ot || Ot.setEmitRate(0)
          }
          return
        }
        const qt = performance.now();
        for (const [tt, mt] of et) {
          var Dt;
          if (null === (Dt = mt.bubbles) || void 0 === Dt || Dt.setEmitRate(0), !Vt.readDrawnPosition(tt, wt)) continue;
          if (!((wt[0] - yt[0]) ** 2 + (wt[1] - yt[1]) ** 2 + (wt[2] - yt[2]) ** 2 < 900)) continue;
          const et = Math.max(0, mt.biteAt - qt),
            Ot = mt.approachDurationMs > 0 ? Math.min(1, 1 - et / mt.approachDurationMs) : 1,
            jt = (mt.approachDurationMs - et) / 1e3,
            Nt = mt.phase + .25 * Math.sin(1.7 * jt + mt.phase),
            Mt = Math.min(mt.approachDurationMs / 3e3 * 2.8, dt) * (1 - Ot) * (1 + .15 * Math.sin(2.1 * jt + mt.phase)),
            bt = Math.min(1, 4 * (1 - Ot)),
            Jt = (.45 * Math.sin(4.1 * jt + mt.phase) + .18 * Math.sin(9.7 * jt + 2 * mt.phase)) * bt,
            Ct = wt[0] + Math.cos(Nt) * Mt - Math.sin(Nt) * Jt,
            ut = Math.ceil(mt.surfaceY),
            Kt = wt[2] + Math.sin(Nt) * Mt + Math.cos(Nt) * Jt,
            {
              fishAt: ht,
              bubblesAt: vt
            } = mt;
          ht[0] = vt[0] = Ct, ht[1] = ut + Ht, vt[1] = ut + Xt, ht[2] = vt[2] = Kt, mt.fish ??= Vt.createParticles(Et, {
            pos: ht
          }), mt.fish.moveTo(ht), mt.fish.emit(1), mt.bubbles ??= Vt.createParticles(ft, {
            pos: vt,
            half: Qt
          }), mt.bubbles.moveTo(vt), mt.bubbles.setEmitRate(lt + 32 * (.5 + .5 * Math.sin(9 * jt + mt.phase)) ** 4 + 13 * Ot)
        }
      }
      return {
        onCreate(tt) {
          Vt = tt
        },
        onAfterRender() {
          Vt && qt(Vt)
        },
        onClose() {
          for (const tt of et.values()) Ot(tt);
          et.clear(), Vt = null
        },
        onReceivedMessageFromServer(tt, Vt) {
          if (tt !== mt.F) return;
          const {
            hookId: qt,
            waiting: Dt
          } = Vt;
          if (Dt) et.has(qt) || et.set(qt, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Dt.remainingMs,
            approachDurationMs: Dt.durationMs,
            surfaceY: Dt.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const tt = et.get(qt);
            tt && Ot(tt), et.delete(qt)
          }
        }
      }
    }
    var Mt = Vt(5021),
      bt = Vt(5010);

    function Jt(tt) {
      let et, Vt = null,
        Ot = null;
      const qt = () => {
        var tt;
        null === (tt = Ot) || void 0 === tt || tt(), Ot = null
      };
      return {
        onCreate(Ot) {
          et = Ot, Vt = et.getClientOption(tt, "dialogue")
        },
        onAfterRender() {
          if (!et) return;
          const Dt = et.getClientOption(tt, "dialogue");
          if (Dt === Vt) return;
          if (Vt = Dt, qt(), !Dt || !1 === Dt.animateIn) return;
          const {
            plan: mt,
            synth: dt
          } = (0, bt.f)(Dt);
          dt && (Ot = (0, Mt.i)(dt, mt.blips))
        },
        onClose: qt
      }
    }
    var Ct = Vt(39365);
    const ut = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Kt = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      ht = [0, 1, 2, 0, 2, 3];

    function vt(tt, et, Vt) {
      var Ot;
      let [qt, Dt, mt] = et;
      if (tt.hasPackModel("Furnace")) return null;
      const dt = ((null !== (Ot = tt.getMetaInfo(Vt).rot) && void 0 !== Ot ? Ot : 1) - 1) * Math.PI / 2,
        jt = Math.PI + dt,
        Ht = Math.cos(jt),
        Xt = Math.sin(jt),
        Qt = [];
      for (const [ft, wt] of ut) Qt.push(ft * Ht, wt, -ft * Xt);
      const lt = {
          positions: Qt,
          indices: ht,
          uvs: Kt
        },
        Et = [qt + .5 + .51 * Math.sin(dt), Dt + .375, mt + .5 + .51 * Math.cos(dt)];
      return tt.createGameMesh(lt, {
        kind: "furnaceFire"
      }, Et)
    }

    function Wt(tt) {
      return Math.floor(tt / 200) % 3
    }

    function St(tt, et, Vt) {
      tt.setGameMesh(et, {
        uvOffset: [0, Vt / 3]
      })
    }
    const ct = [.12, .025, .12],
      Rt = [{
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
          blendMode: Dt.f.Standard,
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
          blendMode: Dt.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class It {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(tt, et) {
        const Vt = tt.getBlockId(et[0], et[1], et[2]);
        if ("Furnace" !== tt.getMetaInfo(Vt).rootName) return;
        const Ot = performance.now();
        let qt = this.smokes.find((tt => tt.pos[0] === et[0] && tt.pos[1] === et[1] && tt.pos[2] === et[2] && tt.qd === Vt));
        if (qt || (qt = {
            pos: [et[0], et[1], et[2]],
            qd: Vt,
            endMs: Ot,
            lastBurstMs: -1 / 0,
            pending: new Array(Rt.length).fill(0),
            fire: vt(tt, et, Vt)
          }, this.smokes.push(qt), null !== qt.fire && (St(tt, qt.fire, Wt(Ot)), this.shownFireFrame = -1)), qt.endMs = Ot + 6e3, this.smokes.length > 4) {
          const et = this.smokes.reduce(((tt, et) => et.endMs < tt.endMs ? et : tt));
          Pt(tt, et), this.smokes.splice(this.smokes.indexOf(et), 1)
        }
        Ot - qt.lastBurstMs >= 300 && (qt.lastBurstMs = Ot, Rt.forEach(((tt, et) => {
          qt.pending[et] += tt.style.count
        })))
      }
      onAfterRender(tt, et) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Vt = performance.now();
        this.smokes = this.smokes.filter((et => {
          const [Ot, qt, Dt] = et.pos, mt = Vt < et.endMs && tt.getBlockId(Ot, qt, Dt) === et.qd;
          return mt || Pt(tt, et), mt
        }));
        const Ot = Wt(Vt);
        if (Ot !== this.shownFireFrame) {
          this.shownFireFrame = Ot;
          for (const et of this.smokes) null !== et.fire && St(tt, et.fire, Ot)
        }
        if (!tt.particlesEnabled()) {
          for (const tt of this.smokes) tt.pending.fill(0);
          return
        }
        const qt = Math.min(et, 250) / 1e3;
        for (const Dt of this.smokes) {
          const [et, Ot, mt] = Dt.pos;
          if (0 !== tt.getBlockId(et, Ot + 1, mt)) {
            Dt.pending.fill(0);
            continue
          }
          const dt = (Dt.endMs - Vt) / 6e3,
            jt = this.centre;
          jt[0] = et + .5, jt[1] = Ot + 1.275, jt[2] = mt + .5, Rt.forEach(((et, Vt) => {
            Dt.pending[Vt] += et.perSecond * dt * qt;
            const Ot = Math.floor(Dt.pending[Vt]);
            Ot > 0 && this.emit(tt, Vt, jt, Ot) && (Dt.pending[Vt] -= Ot)
          }))
        }
      }
      dispose(tt) {
        for (const Vt of this.smokes) Pt(tt, Vt);
        this.smokes = [];
        for (const Vt of null !== (et = this.puffers) && void 0 !== et ? et : []) {
          var et;
          Vt.dispose()
        }
        this.puffers = null
      }
      emit(tt, et, Vt, Ot) {
        return this.puffers ??= Rt.map((tt => {
          let {
            style: et,
            perSecond: Vt
          } = tt;
          const Ot = (et.count / .3 + Vt) * et.life[1];
          return new Ct.g(et, Math.ceil(4 * Ot), ct)
        })), this.puffers[et].emit(tt, Vt, this.renderFrame, Ot)
      }
    }

    function Pt(tt, et) {
      null !== et.fire && (tt.disposeGameMesh(et.fire), et.fire = null)
    }

    function Zt() {
      let tt;
      const et = new It;
      return {
        onCreate(et) {
          tt = et
        },
        onReceivedMessageFromServer(Vt, Ot) {
          Vt === mt.G && et.start(tt, Ot)
        },
        onAfterRender(Vt) {
          et.onAfterRender(tt, Vt)
        },
        onClose() {
          et.dispose(tt)
        }
      }
    }

    function Lt(tt, et, Vt, Ot) {
      return {
        dialogue: Jt(Ot.localPlayerId),
        fishing: Nt(Ot.localPlayerId),
        furnaceSmoke: Zt(),
        ironChest: qt()
      }
    }

    function Ft(tt, et) {
      for (const qt of [tt, ...null !== et && void 0 !== et ? et : []]) try {
        var Vt;
        null === qt || void 0 === qt || null === (Vt = qt.onClose) || void 0 === Vt || Vt.call(qt)
      } catch (Ot) {
        console.error("Error in client onClose callback", Ot)
      }
    }
  },
  39365: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      g: () => Dt
    });
    const Ot = 1 / .6,
      qt = {
        kind: "smokePuff"
      };
    class Dt {
      constructor(tt, et, Vt) {
        this.style = tt, this.uQ = et, this.half = Vt, this.particles = null, this.lastFrame = -1
      }
      emit(tt, et, Vt) {
        let Dt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Vt !== this.lastFrame && (this.lastFrame = Vt, this.particles || (this.particles = tt.createParticles(function(tt, et) {
          const [
            [Vt, Dt, mt],
            [dt, jt, Ht]
          ] = tt.colours;
          return {
            texture: tt.soft ? qt : "square_particle",
            uQ: et,
            minLifeTime: tt.life[0] / Ot,
            maxLifeTime: tt.life[1] / Ot,
            minEmitPower: tt.power[0] * Ot,
            maxEmitPower: tt.power[1] * Ot,
            minSize: tt.size[0],
            maxSize: tt.size[1],
            emitRate: 0,
            gravity: [0, tt.lift * Ot * Ot, 0],
            dir1: [-tt.spread, 1, -tt.spread],
            dir2: [tt.spread, 1, tt.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Vt, Dt, mt, tt.alpha],
              maxColor: [dt, jt, Ht, tt.alpha]
            }, {
              timeFraction: 1,
              minColor: [Vt, Dt, mt, 0],
              maxColor: [dt, jt, Ht, 0]
            }],
            blendMode: tt.blendMode
          }
        }(this.style, this.uQ), {
          pos: et,
          half: this.half
        })), this.particles.moveTo(et, this.half), this.particles.emit(Dt), !0)
      }
      dispose() {
        var tt;
        null === (tt = this.particles) || void 0 === tt || tt.stop(), this.particles = null
      }
    }
  },
  5015: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      d: () => Ot,
      g: () => Dt,
      i: () => jt,
      l: () => mt
    });
    const Ot = ["sine", "triangle", "square", "sawtooth"],
      qt = 55,
      Dt = {
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

    function mt(tt) {
      return "string" !== typeof tt ? tt : Object.hasOwn(Dt, tt) ? Dt[tt] : null
    }

    function dt(tt, et, Vt) {
      return Math.min(Vt, Math.max(et, tt))
    }

    function jt(tt) {
      const et = dt(tt.durationMs, 10, 500),
        Vt = dt(tt.attackMs, 0, et),
        {
          intonation: qt
        } = tt;
      return {
        waveform: Ot.includes(tt.waveform) ? tt.waveform : "sine",
        pitchHz: dt(tt.pitchHz, 20, 4e3),
        glideSemitones: dt(tt.glideSemitones, -24, 24),
        durationMs: et,
        attackMs: Vt,
        releaseMs: dt(tt.releaseMs, 0, et - Vt),
        lowpassHz: null === tt.lowpassHz ? null : dt(tt.lowpassHz, 20, 2e4),
        volume: dt(tt.volume, 0, 2),
        intonation: {
          variationSemitones: dt(qt.variationSemitones, 0, 6),
          declineSemitones: dt(qt.declineSemitones, 0, 12),
          questionRiseSemitones: dt(qt.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: dt(qt.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: dt(tt.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);