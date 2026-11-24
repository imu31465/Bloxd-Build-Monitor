export const id = 27;
export const ids = [27];
export const modules = {
  4784: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Xm,
      f: () => Gm
    });
    var hm = fm(4789),
      Am = fm(339);
    const am = 120,
      xm = 260,
      wm = 1.15,
      Dm = 1.2,
      im = 2,
      Rm = 1.08,
      pm = .8,
      Em = .95,
      om = 8,
      Om = "[\"')\\]\u300d\u300f\uff09]*",
      Ym = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Om}$`),
      qm = new RegExp(`[?\uff1f]${Om}$`),
      jm = new RegExp(`[!\uff01]${Om}$`),
      Vm = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Im = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Km = new RegExp(`[${Im}]`),
      Qm = new RegExp(`[${Im}]|[^${Im}]+`, "g"),
      nm = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Jm(mm) {
      let Tm = 2166136261;
      for (let fm = 0; fm < mm.length; fm++) Tm ^= mm.charCodeAt(fm), Tm = Math.imul(Tm, 16777619);
      return (Tm >>> 0) / 4294967295 * 2 - 1
    }

    function cm(mm) {
      var Tm;
      if (Km.test(mm)) return 1;
      const fm = mm.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        hm = fm.replace(/[^0-9]/g, "");
      if (hm.length > 0 && !/\p{L}/u.test(fm)) return Math.min(hm.length, 4);
      const Am = null !== (Tm = fm.match(nm)) && void 0 !== Tm ? Tm : [];
      if (0 === Am.length) {
        var am, xm;
        const mm = null !== (am = null === (xm = fm.match(/\p{L}/gu)) || void 0 === xm ? void 0 : xm.length) && void 0 !== am ? am : 0;
        return 0 === mm ? 0 : Math.min(Math.max(1, Math.round(mm / 2.5)), om)
      }
      const wm = fm.replace(/[^\p{L}]/gu, ""),
        Dm = Am.length > 1 && "e" === Am.at(-1) && wm.endsWith("e") && !wm.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(mm.replace(/[^\p{L}]/gu, ""));
      return Math.min(Am.length - (Dm ? 1 : 0), om)
    }

    function zm(mm) {
      return mm.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Zm(mm) {
      const Tm = mm.replace(/[^\p{L}]/gu, "");
      return Tm.length >= 2 && Tm === Tm.toUpperCase() && Tm !== Tm.toLowerCase()
    }

    function km(mm, Tm) {
      var fm;
      const om = Tm && (0, hm.g)(Tm),
        Om = null !== (fm = null === om || void 0 === om ? void 0 : om.syllableMs) && void 0 !== fm ? fm : hm.d,
        Im = function(mm) {
          const Tm = [];
          for (const hm of (0, Am.Zb)(mm))
            if ("string" === typeof hm)
              for (const mm of hm.split(/(\s+)/)) {
                if ("" === mm) continue;
                if (/^\s+$/.test(mm)) {
                  Tm.push({
                    kind: "space",
                    text: mm
                  });
                  continue
                }
                if (!Km.test(mm)) {
                  Tm.push({
                    kind: "word",
                    text: mm,
                    delayMs: 0
                  });
                  continue
                }
                let hm = !0;
                for (const Am of null !== (fm = mm.match(Qm)) && void 0 !== fm ? fm : []) {
                  var fm;
                  const mm = Tm.at(-1);
                  hm || "word" !== (null === mm || void 0 === mm ? void 0 : mm.kind) || Km.test(Am) || /[\p{L}\p{N}]/u.test(Am) ? (hm || Tm.push({
                    kind: "space",
                    text: "\u200b"
                  }), Tm.push({
                    kind: "word",
                    text: Am,
                    delayMs: 0
                  }), hm = !1) : mm.text += Am
                }
              } else Tm.push({
                kind: "icon",
                text: hm.icon,
                delayMs: 0
              });
          return Tm
        }(mm),
        nm = [];
      let km = [];
      for (const hm of Im) "space" !== hm.kind && (km.push(hm), Ym.test(hm.text) && (nm.push(km), km = []));
      nm.push(km);
      const bm = [];
      let Sm = 0;
      for (const hm of nm) {
        var em, Nm;
        const mm = null !== (em = null === (Nm = hm.at(-1)) || void 0 === Nm ? void 0 : Nm.text) && void 0 !== em ? em : "",
          Tm = qm.test(mm),
          fm = jm.test(mm),
          Am = hm.map((mm => "word" === mm.kind ? cm(mm.text) : 1)),
          Im = Am.findLastIndex((mm => mm > 0));
        for (const [qm, jm] of hm.entries()) {
          const mm = "word" === jm.kind,
            hm = Am[qm];
          jm.delayMs = Sm;
          for (let Am = 0; om && Am < hm; Am++) {
            const {
              intonation: am
            } = om;
            let xm = Im > 0 ? -am.declineSemitones * (qm / Im) : 0;
            xm += Jm(`${zm(jm.text)}|${Am}`) * am.variationSemitones;
            const Ym = Math.min(1, am.variationSemitones);
            let Vm = om.glideSemitones,
              Km = 1;
            fm && (xm += am.exclaimLiftSemitones, Km *= wm), Tm && qm === Im && (xm += am.questionRiseSemitones * (hm > 1 ? .5 + .5 * Am / (hm - 1) : 1), Am === hm - 1 && (Vm = Math.abs(Vm) + am.questionRiseSemitones / 2)), mm && Zm(jm.text) && (xm += im * Ym, Km *= Dm), hm > 1 && 0 === Am && (xm += pm * Ym, Km *= Rm), bm.push({
              atMs: Sm + Am * Om,
              semitones: xm,
              glideSemitones: Vm,
              durationMs: Am < hm - 1 ? Math.min(om.durationMs, Om * Em) : om.durationMs,
              level: Km
            })
          }
          Sm += hm * Om + (Ym.test(jm.text) ? xm : Vm.test(jm.text) ? am : 0)
        }
      }
      return {
        pieces: Im.map((mm => "space" === mm.kind ? mm : "icon" === mm.kind ? {
          kind: "icon",
          icon: mm.text,
          delayMs: mm.delayMs
        } : {
          kind: "word",
          text: mm.text,
          delayMs: mm.delayMs
        })),
        blips: bm
      }
    }
    var bm = fm(1208),
      Sm = fm(1259),
      em = fm(1912);

    function Nm(mm) {
      if ("string" === typeof mm) return mm;
      const Tm = Sm.e.get().getCurrentLanguageCode();
      return (0, bm.t)(Tm, mm.translationKey, (0, bm.r)(mm.params, em.e.shown))
    }

    function Gm(mm) {
      const Tm = void 0 === mm.voice ? null : (0, hm.k)(mm.voice),
        fm = Tm && (0, hm.g)(Tm);
      return {
        plan: km(Nm(mm.line), fm),
        synth: fm
      }
    }

    function Xm(mm) {
      const Tm = [];
      let fm = [];
      for (const [Am, am] of mm.entries()) {
        var hm;
        "space" === am.kind && (" " !== am.text || "icon" !== (null === (hm = mm[Am + 1]) || void 0 === hm ? void 0 : hm.kind)) ? (fm.length > 0 && Tm.push(fm), Tm.push([am]), fm = []) : fm.push(am)
      }
      return fm.length > 0 && Tm.push(fm), Tm
    }
  },
  4796: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Rm,
      e: () => pm
    });
    var hm = fm(4800),
      Am = fm(23);
    const am = .25,
      xm = .85,
      wm = .02,
      Dm = .01;

    function im(mm, Tm, fm, hm, Am, am, wm) {
      const {
        waveform: Dm,
        pitchHz: im,
        attackMs: Rm,
        releaseMs: pm,
        lowpassHz: Em
      } = fm, om = Am + hm.durationMs / 1e3, Om = im * 2 ** (hm.semitones / 12), Ym = mm.createOscillator();
      Ym.type = Dm, Ym.frequency.setValueAtTime(Om, Am), Ym.frequency.exponentialRampToValueAtTime(Om * 2 ** (hm.glideSemitones / 12), om);
      const qm = Am + Math.min(Rm, hm.durationMs) / 1e3,
        jm = mm.createGain();
      jm.gain.setValueAtTime(0, Am), jm.gain.linearRampToValueAtTime(am, qm), jm.gain.linearRampToValueAtTime(am * xm, Math.max(qm, om - pm / 1e3)), jm.gain.linearRampToValueAtTime(0, om);
      const Vm = [Ym];
      if (null !== Em) {
        const Tm = mm.createBiquadFilter();
        Tm.type = "lowpass", Tm.frequency.value = Em, Vm.push(Tm)
      }
      Vm.push(jm, Tm);
      for (let xm = 1; xm < Vm.length; xm++) Vm[xm - 1].connect(Vm[xm]);
      return Ym.onended = () => {
        for (const mm of Vm.slice(0, -1)) mm.disconnect();
        wm()
      }, Ym.start(Am), Ym.stop(om), Ym
    }

    function Rm(mm, Tm, fm, hm, Am, xm) {
      if (0 === hm.length) return xm(), () => {};
      const Rm = am * fm.volume * Am,
        pm = mm.createGain();
      pm.connect(Tm);
      const Em = mm.currentTime + wm,
        om = new Set;
      for (const am of hm) {
        const Tm = im(mm, pm, fm, am, Em + am.atMs / 1e3, Rm * am.level, (() => {
          om.delete(Tm), 0 === om.size && (pm.disconnect(), xm())
        }));
        om.add(Tm)
      }
      return () => {
        const Tm = mm.currentTime;
        pm.gain.setTargetAtTime(0, Tm, Dm);
        for (const mm of om) try {
          mm.stop(Tm + 5 * Dm)
        } catch {}
      }
    }

    function pm(mm, Tm) {
      var fm;
      const am = hm.Howler.ctx,
        xm = hm.Howler.masterGain;
      if (!am || !xm || !Am.c.get("soundOnFromAd")) return () => {};
      const wm = hm.Howler;
      return null === (fm = wm._autoResume) || void 0 === fm || fm.call(wm), Rm(am, xm, mm, Tm, Am.c.get("soundVolume"), (() => {
        var mm;
        null === (mm = wm._autoSuspend) || void 0 === mm || mm.call(wm)
      }))
    }
  },
  39273: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      closeClientGame: () => Pm,
      createDefaultClientPlugins: () => Xm
    });
    var hm = fm(354);

    function Am() {
      let mm;
      return {
        onCreate(Tm) {
          mm = Tm
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Tm, fm, Am, am, xm, wm) {
          var Dm, im;
          if ("Iron Chest" !== mm.getMetaInfo(xm).rootName) return;
          if (!mm.hasEffect(Tm, "Thief")) return;
          const Rm = mm.getBlockData(fm, Am, am);
          return mm.getPlayerDbId(Tm) !== (null === Rm || void 0 === Rm || null === (Dm = Rm.persisted) || void 0 === Dm || null === (im = Dm.shared) || void 0 === im ? void 0 : im.ownerDbId) ? (mm.sendMessage(Tm, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: hm.J.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var am = fm(4171),
      xm = fm(1247);
    const wm = 8.4,
      Dm = 1e-4,
      im = .15,
      Rm = .04,
      pm = [.12, .04, .12],
      Em = 26,
      om = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        yp: 1,
        minLifeTime: Dm,
        maxLifeTime: Dm,
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
        blendMode: am.g.Standard
      },
      Om = {
        texture: "bubble",
        mipmaps: !1,
        yp: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Em,
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
        blendMode: am.g.Standard
      },
      Ym = [0, 0, 0],
      qm = [0, 0, 0];

    function jm(mm) {
      const Tm = new Map;
      let fm = null;

      function hm(mm) {
        var Tm, fm;
        null === (Tm = mm.bubbles) || void 0 === Tm || Tm.stop(), null === (fm = mm.fish) || void 0 === fm || fm.stop()
      }

      function Am(fm) {
        if (!fm.readDrawnPosition(mm, qm)) {
          for (const mm of Tm.values()) {
            var hm;
            null === (hm = mm.bubbles) || void 0 === hm || hm.setEmitRate(0)
          }
          return
        }
        const Am = performance.now();
        for (const [mm, xm] of Tm) {
          var am;
          if (null === (am = xm.bubbles) || void 0 === am || am.setEmitRate(0), !fm.readDrawnPosition(mm, Ym)) continue;
          if (!((Ym[0] - qm[0]) ** 2 + (Ym[1] - qm[1]) ** 2 + (Ym[2] - qm[2]) ** 2 < 900)) continue;
          const Tm = Math.max(0, xm.biteAt - Am),
            hm = xm.approachDurationMs > 0 ? Math.min(1, 1 - Tm / xm.approachDurationMs) : 1,
            Dm = (xm.approachDurationMs - Tm) / 1e3,
            jm = xm.phase + .25 * Math.sin(1.7 * Dm + xm.phase),
            Vm = Math.min(xm.approachDurationMs / 3e3 * 2.8, wm) * (1 - hm) * (1 + .15 * Math.sin(2.1 * Dm + xm.phase)),
            Im = Math.min(1, 4 * (1 - hm)),
            Km = (.45 * Math.sin(4.1 * Dm + xm.phase) + .18 * Math.sin(9.7 * Dm + 2 * xm.phase)) * Im,
            Qm = Ym[0] + Math.cos(jm) * Vm - Math.sin(jm) * Km,
            nm = Math.ceil(xm.surfaceY),
            Jm = Ym[2] + Math.sin(jm) * Vm + Math.cos(jm) * Km,
            {
              fishAt: cm,
              bubblesAt: zm
            } = xm;
          cm[0] = zm[0] = Qm, cm[1] = nm + im, zm[1] = nm + Rm, cm[2] = zm[2] = Jm, xm.fish ??= fm.createParticles(om, {
            pos: cm
          }), xm.fish.moveTo(cm), xm.fish.emit(1), xm.bubbles ??= fm.createParticles(Om, {
            pos: zm,
            half: pm
          }), xm.bubbles.moveTo(zm), xm.bubbles.setEmitRate(Em + 32 * (.5 + .5 * Math.sin(9 * Dm + xm.phase)) ** 4 + 13 * hm)
        }
      }
      return {
        onCreate(mm) {
          fm = mm
        },
        onAfterRender() {
          fm && Am(fm)
        },
        onClose() {
          for (const mm of Tm.values()) hm(mm);
          Tm.clear(), fm = null
        },
        onReceivedMessageFromServer(mm, fm) {
          if (mm !== xm.t) return;
          const {
            hookId: Am,
            waiting: am
          } = fm;
          if (am) Tm.has(Am) || Tm.set(Am, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + am.remainingMs,
            approachDurationMs: am.durationMs,
            surfaceY: am.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const mm = Tm.get(Am);
            mm && hm(mm), Tm.delete(Am)
          }
        }
      }
    }
    var Vm = fm(4796),
      Im = fm(4784);

    function Km(mm) {
      let Tm, fm = null,
        hm = null;
      const Am = () => {
        var mm;
        null === (mm = hm) || void 0 === mm || mm(), hm = null
      };
      return {
        onCreate(hm) {
          Tm = hm, fm = Tm.getClientOption(mm, "dialogue")
        },
        onAfterRender() {
          if (!Tm) return;
          const am = Tm.getClientOption(mm, "dialogue");
          if (am === fm) return;
          if (fm = am, Am(), !am || !1 === am.animateIn) return;
          const {
            plan: xm,
            synth: wm
          } = (0, Im.f)(am);
          wm && (hm = (0, Vm.e)(wm, xm.blips))
        },
        onClose: Am
      }
    }
    var Qm = fm(39275);
    const nm = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Jm = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      cm = [0, 1, 2, 0, 2, 3];

    function zm(mm, Tm, fm) {
      var hm;
      let [Am, am, xm] = Tm;
      if (mm.hasPackModel("Furnace")) return null;
      const wm = ((null !== (hm = mm.getMetaInfo(fm).rot) && void 0 !== hm ? hm : 1) - 1) * Math.PI / 2,
        Dm = Math.PI + wm,
        im = Math.cos(Dm),
        Rm = Math.sin(Dm),
        pm = [];
      for (const [Om, Ym] of nm) pm.push(Om * im, Ym, -Om * Rm);
      const Em = {
          positions: pm,
          indices: cm,
          uvs: Jm
        },
        om = [Am + .5 + .51 * Math.sin(wm), am + .375, xm + .5 + .51 * Math.cos(wm)];
      return mm.createGameMesh(Em, {
        kind: "furnaceFire"
      }, om)
    }

    function Zm(mm) {
      return Math.floor(mm / 200) % 3
    }

    function km(mm, Tm, fm) {
      mm.setGameMesh(Tm, {
        uvOffset: [0, fm / 3]
      })
    }
    const bm = [.12, .025, .12],
      Sm = [{
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
          blendMode: am.g.Standard,
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
          blendMode: am.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class em {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(mm, Tm) {
        const fm = mm.getBlockId(Tm[0], Tm[1], Tm[2]);
        if ("Furnace" !== mm.getMetaInfo(fm).rootName) return;
        const hm = performance.now();
        let Am = this.smokes.find((mm => mm.pos[0] === Tm[0] && mm.pos[1] === Tm[1] && mm.pos[2] === Tm[2] && mm.jR === fm));
        if (Am || (Am = {
            pos: [Tm[0], Tm[1], Tm[2]],
            jR: fm,
            endMs: hm,
            lastBurstMs: -1 / 0,
            pending: new Array(Sm.length).fill(0),
            fire: zm(mm, Tm, fm)
          }, this.smokes.push(Am), null !== Am.fire && (km(mm, Am.fire, Zm(hm)), this.shownFireFrame = -1)), Am.endMs = hm + 6e3, this.smokes.length > 4) {
          const Tm = this.smokes.reduce(((mm, Tm) => Tm.endMs < mm.endMs ? Tm : mm));
          Nm(mm, Tm), this.smokes.splice(this.smokes.indexOf(Tm), 1)
        }
        hm - Am.lastBurstMs >= 300 && (Am.lastBurstMs = hm, Sm.forEach(((mm, Tm) => {
          Am.pending[Tm] += mm.style.count
        })))
      }
      onAfterRender(mm, Tm) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const fm = performance.now();
        this.smokes = this.smokes.filter((Tm => {
          const [hm, Am, am] = Tm.pos, xm = fm < Tm.endMs && mm.getBlockId(hm, Am, am) === Tm.jR;
          return xm || Nm(mm, Tm), xm
        }));
        const hm = Zm(fm);
        if (hm !== this.shownFireFrame) {
          this.shownFireFrame = hm;
          for (const Tm of this.smokes) null !== Tm.fire && km(mm, Tm.fire, hm)
        }
        if (!mm.particlesEnabled()) {
          for (const mm of this.smokes) mm.pending.fill(0);
          return
        }
        const Am = Math.min(Tm, 250) / 1e3;
        for (const am of this.smokes) {
          const [Tm, hm, xm] = am.pos;
          if (0 !== mm.getBlockId(Tm, hm + 1, xm)) {
            am.pending.fill(0);
            continue
          }
          const wm = (am.endMs - fm) / 6e3,
            Dm = this.centre;
          Dm[0] = Tm + .5, Dm[1] = hm + 1.275, Dm[2] = xm + .5, Sm.forEach(((Tm, fm) => {
            am.pending[fm] += Tm.perSecond * wm * Am;
            const hm = Math.floor(am.pending[fm]);
            hm > 0 && this.emit(mm, fm, Dm, hm) && (am.pending[fm] -= hm)
          }))
        }
      }
      dispose(mm) {
        for (const fm of this.smokes) Nm(mm, fm);
        this.smokes = [];
        for (const fm of null !== (Tm = this.puffers) && void 0 !== Tm ? Tm : []) {
          var Tm;
          fm.dispose()
        }
        this.puffers = null
      }
      emit(mm, Tm, fm, hm) {
        return this.puffers ??= Sm.map((mm => {
          let {
            style: Tm,
            perSecond: fm
          } = mm;
          const hm = (Tm.count / .3 + fm) * Tm.life[1];
          return new Qm.g(Tm, Math.ceil(4 * hm), bm)
        })), this.puffers[Tm].emit(mm, fm, this.renderFrame, hm)
      }
    }

    function Nm(mm, Tm) {
      null !== Tm.fire && (mm.disposeGameMesh(Tm.fire), Tm.fire = null)
    }

    function Gm() {
      let mm;
      const Tm = new em;
      return {
        onCreate(Tm) {
          mm = Tm
        },
        onReceivedMessageFromServer(fm, hm) {
          fm === xm.w && Tm.start(mm, hm)
        },
        onAfterRender(fm) {
          Tm.onAfterRender(mm, fm)
        },
        onClose() {
          Tm.dispose(mm)
        }
      }
    }

    function Xm(mm, Tm, fm, hm) {
      return {
        dialogue: Km(hm.localPlayerId),
        fishing: jm(hm.localPlayerId),
        furnaceSmoke: Gm(),
        ironChest: Am()
      }
    }

    function Pm(mm, Tm) {
      for (const Am of [mm, ...null !== Tm && void 0 !== Tm ? Tm : []]) try {
        var fm;
        null === Am || void 0 === Am || null === (fm = Am.onClose) || void 0 === fm || fm.call(Am)
      } catch (hm) {
        console.error("Error in client onClose callback", hm)
      }
    }
  },
  39275: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      g: () => am
    });
    const hm = 1 / .6,
      Am = {
        kind: "smokePuff"
      };
    class am {
      constructor(mm, Tm, fm) {
        this.style = mm, this.yp = Tm, this.half = fm, this.particles = null, this.lastFrame = -1
      }
      emit(mm, Tm, fm) {
        let am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return fm !== this.lastFrame && (this.lastFrame = fm, this.particles || (this.particles = mm.createParticles(function(mm, Tm) {
          const [
            [fm, am, xm],
            [wm, Dm, im]
          ] = mm.colours;
          return {
            texture: mm.soft ? Am : "square_particle",
            yp: Tm,
            minLifeTime: mm.life[0] / hm,
            maxLifeTime: mm.life[1] / hm,
            minEmitPower: mm.power[0] * hm,
            maxEmitPower: mm.power[1] * hm,
            minSize: mm.size[0],
            maxSize: mm.size[1],
            emitRate: 0,
            gravity: [0, mm.lift * hm * hm, 0],
            dir1: [-mm.spread, 1, -mm.spread],
            dir2: [mm.spread, 1, mm.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [fm, am, xm, mm.alpha],
              maxColor: [wm, Dm, im, mm.alpha]
            }, {
              timeFraction: 1,
              minColor: [fm, am, xm, 0],
              maxColor: [wm, Dm, im, 0]
            }],
            blendMode: mm.blendMode
          }
        }(this.style, this.yp), {
          pos: Tm,
          half: this.half
        })), this.particles.moveTo(Tm, this.half), this.particles.emit(am), !0)
      }
      dispose() {
        var mm;
        null === (mm = this.particles) || void 0 === mm || mm.stop(), this.particles = null
      }
    }
  },
  4789: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      e: () => hm,
      f: () => am,
      g: () => Dm,
      k: () => xm
    });
    const hm = ["sine", "triangle", "square", "sawtooth"],
      Am = 55,
      am = {
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

    function xm(mm) {
      return "string" !== typeof mm ? mm : Object.hasOwn(am, mm) ? am[mm] : null
    }

    function wm(mm, Tm, fm) {
      return Math.min(fm, Math.max(Tm, mm))
    }

    function Dm(mm) {
      const Tm = wm(mm.durationMs, 10, 500),
        fm = wm(mm.attackMs, 0, Tm),
        {
          intonation: Am
        } = mm;
      return {
        waveform: hm.includes(mm.waveform) ? mm.waveform : "sine",
        pitchHz: wm(mm.pitchHz, 20, 4e3),
        glideSemitones: wm(mm.glideSemitones, -24, 24),
        durationMs: Tm,
        attackMs: fm,
        releaseMs: wm(mm.releaseMs, 0, Tm - fm),
        lowpassHz: null === mm.lowpassHz ? null : wm(mm.lowpassHz, 20, 2e4),
        volume: wm(mm.volume, 0, 2),
        intonation: {
          variationSemitones: wm(Am.variationSemitones, 0, 6),
          declineSemitones: wm(Am.declineSemitones, 0, 12),
          questionRiseSemitones: wm(Am.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: wm(Am.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: wm(mm.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);