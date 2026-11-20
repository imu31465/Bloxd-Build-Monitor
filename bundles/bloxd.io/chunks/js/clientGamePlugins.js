export const id = 27;
export const ids = [27];
export const modules = {
  4589: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => tv,
      e: () => xv
    });
    var hv = Pv(4592),
      Sv = Pv(302);
    const ev = 120,
      gv = 260,
      pv = 1.15,
      dv = 1.2,
      Nv = 2,
      lv = 1.08,
      Tv = .8,
      Wv = .95,
      wv = 8,
      av = "[\"')\\]\u300d\u300f\uff09]*",
      sv = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${av}$`),
      Cv = new RegExp(`[?\uff1f]${av}$`),
      iv = new RegExp(`[!\uff01]${av}$`),
      cv = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Gv = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      mv = new RegExp(`[${Gv}]`),
      jv = new RegExp(`[${Gv}]|[^${Gv}]+`, "g"),
      fv = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Fv(vv) {
      let zv = 2166136261;
      for (let Pv = 0; Pv < vv.length; Pv++) zv ^= vv.charCodeAt(Pv), zv = Math.imul(zv, 16777619);
      return (zv >>> 0) / 4294967295 * 2 - 1
    }

    function Yv(vv) {
      var zv;
      if (mv.test(vv)) return 1;
      const Pv = vv.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        hv = Pv.replace(/[^0-9]/g, "");
      if (hv.length > 0 && !/\p{L}/u.test(Pv)) return Math.min(hv.length, 4);
      const Sv = null !== (zv = Pv.match(fv)) && void 0 !== zv ? zv : [];
      if (0 === Sv.length) {
        var ev, gv;
        const vv = null !== (ev = null === (gv = Pv.match(/\p{L}/gu)) || void 0 === gv ? void 0 : gv.length) && void 0 !== ev ? ev : 0;
        return 0 === vv ? 0 : Math.min(Math.max(1, Math.round(vv / 2.5)), wv)
      }
      const pv = Pv.replace(/[^\p{L}]/gu, ""),
        dv = Sv.length > 1 && "e" === Sv.at(-1) && pv.endsWith("e") && !pv.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(vv.replace(/[^\p{L}]/gu, ""));
      return Math.min(Sv.length - (dv ? 1 : 0), wv)
    }

    function nv(vv) {
      return vv.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ov(vv) {
      const zv = vv.replace(/[^\p{L}]/gu, "");
      return zv.length >= 2 && zv === zv.toUpperCase() && zv !== zv.toLowerCase()
    }

    function Dv(vv, zv) {
      var Pv;
      const wv = zv && (0, hv.h)(zv),
        av = null !== (Pv = null === wv || void 0 === wv ? void 0 : wv.syllableMs) && void 0 !== Pv ? Pv : hv.c,
        Gv = function(vv) {
          const zv = [];
          for (const hv of (0, Sv.Vb)(vv))
            if ("string" === typeof hv)
              for (const vv of hv.split(/(\s+)/)) {
                if ("" === vv) continue;
                if (/^\s+$/.test(vv)) {
                  zv.push({
                    kind: "space",
                    text: vv
                  });
                  continue
                }
                if (!mv.test(vv)) {
                  zv.push({
                    kind: "word",
                    text: vv,
                    delayMs: 0
                  });
                  continue
                }
                let hv = !0;
                for (const Sv of null !== (Pv = vv.match(jv)) && void 0 !== Pv ? Pv : []) {
                  var Pv;
                  const vv = zv.at(-1);
                  hv || "word" !== (null === vv || void 0 === vv ? void 0 : vv.kind) || mv.test(Sv) || /[\p{L}\p{N}]/u.test(Sv) ? (hv || zv.push({
                    kind: "space",
                    text: "\u200b"
                  }), zv.push({
                    kind: "word",
                    text: Sv,
                    delayMs: 0
                  }), hv = !1) : vv.text += Sv
                }
              } else zv.push({
                kind: "icon",
                text: hv.icon,
                delayMs: 0
              });
          return zv
        }(vv),
        fv = [];
      let Dv = [];
      for (const hv of Gv) "space" !== hv.kind && (Dv.push(hv), sv.test(hv.text) && (fv.push(Dv), Dv = []));
      fv.push(Dv);
      const Kv = [];
      let Vv = 0;
      for (const hv of fv) {
        var Uv, Rv;
        const vv = null !== (Uv = null === (Rv = hv.at(-1)) || void 0 === Rv ? void 0 : Rv.text) && void 0 !== Uv ? Uv : "",
          zv = Cv.test(vv),
          Pv = iv.test(vv),
          Sv = hv.map((vv => "word" === vv.kind ? Yv(vv.text) : 1)),
          Gv = Sv.findLastIndex((vv => vv > 0));
        for (const [Cv, iv] of hv.entries()) {
          const vv = "word" === iv.kind,
            hv = Sv[Cv];
          iv.delayMs = Vv;
          for (let Sv = 0; wv && Sv < hv; Sv++) {
            const {
              intonation: ev
            } = wv;
            let gv = Gv > 0 ? -ev.declineSemitones * (Cv / Gv) : 0;
            gv += Fv(`${nv(iv.text)}|${Sv}`) * ev.variationSemitones;
            const sv = Math.min(1, ev.variationSemitones);
            let cv = wv.glideSemitones,
              mv = 1;
            Pv && (gv += ev.exclaimLiftSemitones, mv *= pv), zv && Cv === Gv && (gv += ev.questionRiseSemitones * (hv > 1 ? .5 + .5 * Sv / (hv - 1) : 1), Sv === hv - 1 && (cv = Math.abs(cv) + ev.questionRiseSemitones / 2)), vv && Ov(iv.text) && (gv += Nv * sv, mv *= dv), hv > 1 && 0 === Sv && (gv += Tv * sv, mv *= lv), Kv.push({
              atMs: Vv + Sv * av,
              semitones: gv,
              glideSemitones: cv,
              durationMs: Sv < hv - 1 ? Math.min(wv.durationMs, av * Wv) : wv.durationMs,
              level: mv
            })
          }
          Vv += hv * av + (sv.test(iv.text) ? gv : cv.test(iv.text) ? ev : 0)
        }
      }
      return {
        pieces: Gv.map((vv => "space" === vv.kind ? vv : "icon" === vv.kind ? {
          kind: "icon",
          icon: vv.text,
          delayMs: vv.delayMs
        } : {
          kind: "word",
          text: vv.text,
          delayMs: vv.delayMs
        })),
        blips: Kv
      }
    }
    var Kv = Pv(1175),
      Vv = Pv(1234),
      Uv = Pv(1884);

    function Rv(vv) {
      if ("string" === typeof vv) return vv;
      const zv = Vv.f.get().getCurrentLanguageCode();
      return (0, Kv.j)(zv, vv.translationKey, (0, Kv.i)(vv.params, Uv.b.shown))
    }

    function xv(vv) {
      const zv = void 0 === vv.voice ? null : (0, hv.l)(vv.voice),
        Pv = zv && (0, hv.h)(zv);
      return {
        plan: Dv(Rv(vv.line), Pv),
        synth: Pv
      }
    }

    function tv(vv) {
      const zv = [];
      let Pv = [];
      for (const [Sv, ev] of vv.entries()) {
        var hv;
        "space" === ev.kind && (" " !== ev.text || "icon" !== (null === (hv = vv[Sv + 1]) || void 0 === hv ? void 0 : hv.kind)) ? (Pv.length > 0 && zv.push(Pv), zv.push([ev]), Pv = []) : Pv.push(ev)
      }
      return Pv.length > 0 && zv.push(Pv), zv
    }
  },
  4595: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv,
      e: () => Tv
    });
    var hv = Pv(4603),
      Sv = Pv(22);
    const ev = .25,
      gv = .85,
      pv = .02,
      dv = .01;

    function Nv(vv, zv, Pv, hv, Sv, ev, pv) {
      const {
        waveform: dv,
        pitchHz: Nv,
        attackMs: lv,
        releaseMs: Tv,
        lowpassHz: Wv
      } = Pv, wv = Sv + hv.durationMs / 1e3, av = Nv * 2 ** (hv.semitones / 12), sv = vv.createOscillator();
      sv.type = dv, sv.frequency.setValueAtTime(av, Sv), sv.frequency.exponentialRampToValueAtTime(av * 2 ** (hv.glideSemitones / 12), wv);
      const Cv = Sv + Math.min(lv, hv.durationMs) / 1e3,
        iv = vv.createGain();
      iv.gain.setValueAtTime(0, Sv), iv.gain.linearRampToValueAtTime(ev, Cv), iv.gain.linearRampToValueAtTime(ev * gv, Math.max(Cv, wv - Tv / 1e3)), iv.gain.linearRampToValueAtTime(0, wv);
      const cv = [sv];
      if (null !== Wv) {
        const zv = vv.createBiquadFilter();
        zv.type = "lowpass", zv.frequency.value = Wv, cv.push(zv)
      }
      cv.push(iv, zv);
      for (let gv = 1; gv < cv.length; gv++) cv[gv - 1].connect(cv[gv]);
      return sv.onended = () => {
        for (const vv of cv.slice(0, -1)) vv.disconnect();
        pv()
      }, sv.start(Sv), sv.stop(wv), sv
    }

    function lv(vv, zv, Pv, hv, Sv, gv) {
      if (0 === hv.length) return gv(), () => {};
      const lv = ev * Pv.volume * Sv,
        Tv = vv.createGain();
      Tv.connect(zv);
      const Wv = vv.currentTime + pv,
        wv = new Set;
      for (const ev of hv) {
        const zv = Nv(vv, Tv, Pv, ev, Wv + ev.atMs / 1e3, lv * ev.level, (() => {
          wv.delete(zv), 0 === wv.size && (Tv.disconnect(), gv())
        }));
        wv.add(zv)
      }
      return () => {
        const zv = vv.currentTime;
        Tv.gain.setTargetAtTime(0, zv, dv);
        for (const vv of wv) try {
          vv.stop(zv + 5 * dv)
        } catch {}
      }
    }

    function Tv(vv, zv) {
      var Pv;
      const ev = hv.Howler.ctx,
        gv = hv.Howler.masterGain;
      if (!ev || !gv || !Sv.c.get("soundOnFromAd")) return () => {};
      const pv = hv.Howler;
      return null === (Pv = pv._autoResume) || void 0 === Pv || Pv.call(pv), lv(ev, gv, vv, zv, Sv.c.get("soundVolume"), (() => {
        var vv;
        null === (vv = pv._autoSuspend) || void 0 === vv || vv.call(pv)
      }))
    }
  },
  38663: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      closeClientGame: () => qv,
      createDefaultClientPlugins: () => tv
    });
    var hv = Pv(312);

    function Sv() {
      let vv;
      return {
        onCreate(zv) {
          vv = zv
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(zv, Pv, Sv, ev, gv, pv) {
          var dv, Nv;
          if ("Iron Chest" !== vv.getMetaInfo(gv).rootName) return;
          if (!vv.hasEffect(zv, "Thief")) return;
          const lv = vv.getBlockData(Pv, Sv, ev);
          return vv.getPlayerDbId(zv) !== (null === lv || void 0 === lv || null === (dv = lv.persisted) || void 0 === dv || null === (Nv = dv.shared) || void 0 === Nv ? void 0 : Nv.ownerDbId) ? (vv.sendMessage(zv, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: hv.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var ev = Pv(4019),
      gv = Pv(1226);
    const pv = 8.4,
      dv = 1e-4,
      Nv = .15,
      lv = .04,
      Tv = [.12, .04, .12],
      Wv = 26,
      wv = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        GT: 1,
        minLifeTime: dv,
        maxLifeTime: dv,
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
        blendMode: ev.f.Standard
      },
      av = {
        texture: "bubble",
        mipmaps: !1,
        GT: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Wv,
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
        blendMode: ev.f.Standard
      },
      sv = [0, 0, 0],
      Cv = [0, 0, 0];

    function iv(vv) {
      const zv = new Map;
      let Pv = null;

      function hv(vv) {
        var zv, Pv;
        null === (zv = vv.bubbles) || void 0 === zv || zv.stop(), null === (Pv = vv.fish) || void 0 === Pv || Pv.stop()
      }

      function Sv(Pv) {
        if (!Pv.readDrawnPosition(vv, Cv)) {
          for (const vv of zv.values()) {
            var hv;
            null === (hv = vv.bubbles) || void 0 === hv || hv.setEmitRate(0)
          }
          return
        }
        const Sv = performance.now();
        for (const [vv, gv] of zv) {
          var ev;
          if (null === (ev = gv.bubbles) || void 0 === ev || ev.setEmitRate(0), !Pv.readDrawnPosition(vv, sv)) continue;
          if (!((sv[0] - Cv[0]) ** 2 + (sv[1] - Cv[1]) ** 2 + (sv[2] - Cv[2]) ** 2 < 900)) continue;
          const zv = Math.max(0, gv.biteAt - Sv),
            hv = gv.approachDurationMs > 0 ? Math.min(1, 1 - zv / gv.approachDurationMs) : 1,
            dv = (gv.approachDurationMs - zv) / 1e3,
            iv = gv.phase + .25 * Math.sin(1.7 * dv + gv.phase),
            cv = Math.min(gv.approachDurationMs / 3e3 * 2.8, pv) * (1 - hv) * (1 + .15 * Math.sin(2.1 * dv + gv.phase)),
            Gv = Math.min(1, 4 * (1 - hv)),
            mv = (.45 * Math.sin(4.1 * dv + gv.phase) + .18 * Math.sin(9.7 * dv + 2 * gv.phase)) * Gv,
            jv = sv[0] + Math.cos(iv) * cv - Math.sin(iv) * mv,
            fv = Math.ceil(gv.surfaceY),
            Fv = sv[2] + Math.sin(iv) * cv + Math.cos(iv) * mv,
            {
              fishAt: Yv,
              bubblesAt: nv
            } = gv;
          Yv[0] = nv[0] = jv, Yv[1] = fv + Nv, nv[1] = fv + lv, Yv[2] = nv[2] = Fv, gv.fish ??= Pv.createParticles(wv, {
            pos: Yv
          }), gv.fish.moveTo(Yv), gv.fish.emit(1), gv.bubbles ??= Pv.createParticles(av, {
            pos: nv,
            half: Tv
          }), gv.bubbles.moveTo(nv), gv.bubbles.setEmitRate(Wv + 32 * (.5 + .5 * Math.sin(9 * dv + gv.phase)) ** 4 + 13 * hv)
        }
      }
      return {
        onCreate(vv) {
          Pv = vv
        },
        onAfterRender() {
          Pv && Sv(Pv)
        },
        onClose() {
          for (const vv of zv.values()) hv(vv);
          zv.clear(), Pv = null
        },
        onReceivedMessageFromServer(vv, Pv) {
          if (vv !== gv.A) return;
          const {
            hookId: Sv,
            waiting: ev
          } = Pv;
          if (ev) zv.has(Sv) || zv.set(Sv, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + ev.remainingMs,
            approachDurationMs: ev.durationMs,
            surfaceY: ev.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const vv = zv.get(Sv);
            vv && hv(vv), zv.delete(Sv)
          }
        }
      }
    }
    var cv = Pv(4595),
      Gv = Pv(4589);

    function mv(vv) {
      let zv, Pv = null,
        hv = null;
      const Sv = () => {
        var vv;
        null === (vv = hv) || void 0 === vv || vv(), hv = null
      };
      return {
        onCreate(hv) {
          zv = hv, Pv = zv.getClientOption(vv, "dialogue")
        },
        onAfterRender() {
          if (!zv) return;
          const ev = zv.getClientOption(vv, "dialogue");
          if (ev === Pv) return;
          if (Pv = ev, Sv(), !ev || !1 === ev.animateIn) return;
          const {
            plan: gv,
            synth: pv
          } = (0, Gv.e)(ev);
          pv && (hv = (0, cv.e)(pv, gv.blips))
        },
        onClose: Sv
      }
    }
    var jv = Pv(38669);
    const fv = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Fv = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Yv = [0, 1, 2, 0, 2, 3];

    function nv(vv, zv, Pv) {
      var hv;
      let [Sv, ev, gv] = zv;
      if (vv.hasPackModel("Furnace")) return null;
      const pv = ((null !== (hv = vv.getMetaInfo(Pv).rot) && void 0 !== hv ? hv : 1) - 1) * Math.PI / 2,
        dv = Math.PI + pv,
        Nv = Math.cos(dv),
        lv = Math.sin(dv),
        Tv = [];
      for (const [av, sv] of fv) Tv.push(av * Nv, sv, -av * lv);
      const Wv = {
          positions: Tv,
          indices: Yv,
          uvs: Fv
        },
        wv = [Sv + .5 + .51 * Math.sin(pv), ev + .375, gv + .5 + .51 * Math.cos(pv)];
      return vv.createGameMesh(Wv, {
        kind: "furnaceFire"
      }, wv)
    }

    function Ov(vv) {
      return Math.floor(vv / 200) % 3
    }

    function Dv(vv, zv, Pv) {
      vv.setGameMesh(zv, {
        uvOffset: [0, Pv / 3]
      })
    }
    const Kv = [.12, .025, .12],
      Vv = [{
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
          blendMode: ev.f.Standard,
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
          blendMode: ev.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Uv {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(vv, zv) {
        const Pv = vv.getBlockId(zv[0], zv[1], zv[2]);
        if ("Furnace" !== vv.getMetaInfo(Pv).rootName) return;
        const hv = performance.now();
        let Sv = this.smokes.find((vv => vv.pos[0] === zv[0] && vv.pos[1] === zv[1] && vv.pos[2] === zv[2] && vv.yN === Pv));
        if (Sv || (Sv = {
            pos: [zv[0], zv[1], zv[2]],
            yN: Pv,
            endMs: hv,
            lastBurstMs: -1 / 0,
            pending: new Array(Vv.length).fill(0),
            fire: nv(vv, zv, Pv)
          }, this.smokes.push(Sv), null !== Sv.fire && (Dv(vv, Sv.fire, Ov(hv)), this.shownFireFrame = -1)), Sv.endMs = hv + 6e3, this.smokes.length > 4) {
          const zv = this.smokes.reduce(((vv, zv) => zv.endMs < vv.endMs ? zv : vv));
          Rv(vv, zv), this.smokes.splice(this.smokes.indexOf(zv), 1)
        }
        hv - Sv.lastBurstMs >= 300 && (Sv.lastBurstMs = hv, Vv.forEach(((vv, zv) => {
          Sv.pending[zv] += vv.style.count
        })))
      }
      onAfterRender(vv, zv) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Pv = performance.now();
        this.smokes = this.smokes.filter((zv => {
          const [hv, Sv, ev] = zv.pos, gv = Pv < zv.endMs && vv.getBlockId(hv, Sv, ev) === zv.yN;
          return gv || Rv(vv, zv), gv
        }));
        const hv = Ov(Pv);
        if (hv !== this.shownFireFrame) {
          this.shownFireFrame = hv;
          for (const zv of this.smokes) null !== zv.fire && Dv(vv, zv.fire, hv)
        }
        if (!vv.particlesEnabled()) {
          for (const vv of this.smokes) vv.pending.fill(0);
          return
        }
        const Sv = Math.min(zv, 250) / 1e3;
        for (const ev of this.smokes) {
          const [zv, hv, gv] = ev.pos;
          if (0 !== vv.getBlockId(zv, hv + 1, gv)) {
            ev.pending.fill(0);
            continue
          }
          const pv = (ev.endMs - Pv) / 6e3,
            dv = this.centre;
          dv[0] = zv + .5, dv[1] = hv + 1.275, dv[2] = gv + .5, Vv.forEach(((zv, Pv) => {
            ev.pending[Pv] += zv.perSecond * pv * Sv;
            const hv = Math.floor(ev.pending[Pv]);
            hv > 0 && this.emit(vv, Pv, dv, hv) && (ev.pending[Pv] -= hv)
          }))
        }
      }
      dispose(vv) {
        for (const Pv of this.smokes) Rv(vv, Pv);
        this.smokes = [];
        for (const Pv of null !== (zv = this.puffers) && void 0 !== zv ? zv : []) {
          var zv;
          Pv.dispose()
        }
        this.puffers = null
      }
      emit(vv, zv, Pv, hv) {
        return this.puffers ??= Vv.map((vv => {
          let {
            style: zv,
            perSecond: Pv
          } = vv;
          const hv = (zv.count / .3 + Pv) * zv.life[1];
          return new jv.i(zv, Math.ceil(4 * hv), Kv)
        })), this.puffers[zv].emit(vv, Pv, this.renderFrame, hv)
      }
    }

    function Rv(vv, zv) {
      null !== zv.fire && (vv.disposeGameMesh(zv.fire), zv.fire = null)
    }

    function xv() {
      let vv;
      const zv = new Uv;
      return {
        onCreate(zv) {
          vv = zv
        },
        onReceivedMessageFromServer(Pv, hv) {
          Pv === gv.B && zv.start(vv, hv)
        },
        onAfterRender(Pv) {
          zv.onAfterRender(vv, Pv)
        },
        onClose() {
          zv.dispose(vv)
        }
      }
    }

    function tv(vv, zv, Pv, hv) {
      return {
        dialogue: mv(hv.localPlayerId),
        fishing: iv(hv.localPlayerId),
        furnaceSmoke: xv(),
        ironChest: Sv()
      }
    }

    function qv(vv, zv) {
      for (const Sv of [vv, ...null !== zv && void 0 !== zv ? zv : []]) try {
        var Pv;
        null === Sv || void 0 === Sv || null === (Pv = Sv.onClose) || void 0 === Pv || Pv.call(Sv)
      } catch (hv) {
        console.error("Error in client onClose callback", hv)
      }
    }
  },
  38669: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      i: () => ev
    });
    const hv = 1 / .6,
      Sv = {
        kind: "smokePuff"
      };
    class ev {
      constructor(vv, zv, Pv) {
        this.style = vv, this.GT = zv, this.half = Pv, this.particles = null, this.lastFrame = -1
      }
      emit(vv, zv, Pv) {
        let ev = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Pv !== this.lastFrame && (this.lastFrame = Pv, this.particles || (this.particles = vv.createParticles(function(vv, zv) {
          const [
            [Pv, ev, gv],
            [pv, dv, Nv]
          ] = vv.colours;
          return {
            texture: vv.soft ? Sv : "square_particle",
            GT: zv,
            minLifeTime: vv.life[0] / hv,
            maxLifeTime: vv.life[1] / hv,
            minEmitPower: vv.power[0] * hv,
            maxEmitPower: vv.power[1] * hv,
            minSize: vv.size[0],
            maxSize: vv.size[1],
            emitRate: 0,
            gravity: [0, vv.lift * hv * hv, 0],
            dir1: [-vv.spread, 1, -vv.spread],
            dir2: [vv.spread, 1, vv.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Pv, ev, gv, vv.alpha],
              maxColor: [pv, dv, Nv, vv.alpha]
            }, {
              timeFraction: 1,
              minColor: [Pv, ev, gv, 0],
              maxColor: [pv, dv, Nv, 0]
            }],
            blendMode: vv.blendMode
          }
        }(this.style, this.GT), {
          pos: zv,
          half: this.half
        })), this.particles.moveTo(zv, this.half), this.particles.emit(ev), !0)
      }
      dispose() {
        var vv;
        null === (vv = this.particles) || void 0 === vv || vv.stop(), this.particles = null
      }
    }
  },
  4592: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      e: () => hv,
      f: () => ev,
      h: () => dv,
      l: () => gv
    });
    const hv = ["sine", "triangle", "square", "sawtooth"],
      Sv = 55,
      ev = {
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

    function gv(vv) {
      return "string" !== typeof vv ? vv : Object.hasOwn(ev, vv) ? ev[vv] : null
    }

    function pv(vv, zv, Pv) {
      return Math.min(Pv, Math.max(zv, vv))
    }

    function dv(vv) {
      const zv = pv(vv.durationMs, 10, 500),
        Pv = pv(vv.attackMs, 0, zv),
        {
          intonation: Sv
        } = vv;
      return {
        waveform: hv.includes(vv.waveform) ? vv.waveform : "sine",
        pitchHz: pv(vv.pitchHz, 20, 4e3),
        glideSemitones: pv(vv.glideSemitones, -24, 24),
        durationMs: zv,
        attackMs: Pv,
        releaseMs: pv(vv.releaseMs, 0, zv - Pv),
        lowpassHz: null === vv.lowpassHz ? null : pv(vv.lowpassHz, 20, 2e4),
        volume: pv(vv.volume, 0, 2),
        intonation: {
          variationSemitones: pv(Sv.variationSemitones, 0, 6),
          declineSemitones: pv(Sv.declineSemitones, 0, 12),
          questionRiseSemitones: pv(Sv.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: pv(Sv.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: pv(vv.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);