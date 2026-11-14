export const id = 25;
export const ids = [25];
export const modules = {
  3885: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Dc,
      h: () => vB
    });
    var Vc = nc(3893),
      Ic = nc(244);
    const rB = 120,
      uc = 260,
      sc = 1.15,
      Mc = 1.2,
      Pc = 2,
      qB = 1.08,
      Oc = .8,
      Tc = .95,
      fc = 8,
      mB = "[\"')\\]\u300d\u300f\uff09]*",
      ec = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mB}$`),
      tB = new RegExp(`[?\uff1f]${mB}$`),
      Sc = new RegExp(`[!\uff01]${mB}$`),
      yB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      zB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      pc = new RegExp(`[${zB}]`),
      hc = new RegExp(`[${zB}]|[^${zB}]+`, "g"),
      aB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function lc(cB) {
      let Bc = 2166136261;
      for (let nc = 0; nc < cB.length; nc++) Bc ^= cB.charCodeAt(nc), Bc = Math.imul(Bc, 16777619);
      return (Bc >>> 0) / 4294967295 * 2 - 1
    }

    function Yc(cB) {
      var Bc;
      if (pc.test(cB)) return 1;
      const nc = cB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Vc = nc.replace(/[^0-9]/g, "");
      if (Vc.length > 0 && !/\p{L}/u.test(nc)) return Math.min(Vc.length, 4);
      const Ic = null !== (Bc = nc.match(aB)) && void 0 !== Bc ? Bc : [];
      if (0 === Ic.length) {
        var rB, uc;
        const cB = null !== (rB = null === (uc = nc.match(/\p{L}/gu)) || void 0 === uc ? void 0 : uc.length) && void 0 !== rB ? rB : 0;
        return 0 === cB ? 0 : Math.min(Math.max(1, Math.round(cB / 2.5)), fc)
      }
      const sc = nc.replace(/[^\p{L}]/gu, ""),
        Mc = Ic.length > 1 && "e" === Ic.at(-1) && sc.endsWith("e") && !sc.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(cB.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ic.length - (Mc ? 1 : 0), fc)
    }

    function Lc(cB) {
      return cB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function gB(cB) {
      const Bc = cB.replace(/[^\p{L}]/gu, "");
      return Bc.length >= 2 && Bc === Bc.toUpperCase() && Bc !== Bc.toLowerCase()
    }

    function Uc(cB, Bc) {
      var nc;
      const fc = Bc && (0, Vc.k)(Bc),
        mB = null !== (nc = null === fc || void 0 === fc ? void 0 : fc.syllableMs) && void 0 !== nc ? nc : Vc.e,
        zB = function(cB) {
          const Bc = [];
          for (const Vc of (0, Ic.Zb)(cB))
            if ("string" === typeof Vc)
              for (const cB of Vc.split(/(\s+)/)) {
                if ("" === cB) continue;
                if (/^\s+$/.test(cB)) {
                  Bc.push({
                    kind: "space",
                    text: cB
                  });
                  continue
                }
                if (!pc.test(cB)) {
                  Bc.push({
                    kind: "word",
                    text: cB,
                    delayMs: 0
                  });
                  continue
                }
                let Vc = !0;
                for (const Ic of null !== (nc = cB.match(hc)) && void 0 !== nc ? nc : []) {
                  var nc;
                  const cB = Bc.at(-1);
                  Vc || "word" !== (null === cB || void 0 === cB ? void 0 : cB.kind) || pc.test(Ic) || /[\p{L}\p{N}]/u.test(Ic) ? (Vc || Bc.push({
                    kind: "space",
                    text: "\u200b"
                  }), Bc.push({
                    kind: "word",
                    text: Ic,
                    delayMs: 0
                  }), Vc = !1) : cB.text += Ic
                }
              } else Bc.push({
                kind: "icon",
                text: Vc.icon,
                delayMs: 0
              });
          return Bc
        }(cB),
        aB = [];
      let Uc = [];
      for (const Vc of zB) "space" !== Vc.kind && (Uc.push(Vc), ec.test(Vc.text) && (aB.push(Uc), Uc = []));
      aB.push(Uc);
      const bB = [];
      let Zc = 0;
      for (const Vc of aB) {
        var Qc, Cc;
        const cB = null !== (Qc = null === (Cc = Vc.at(-1)) || void 0 === Cc ? void 0 : Cc.text) && void 0 !== Qc ? Qc : "",
          Bc = tB.test(cB),
          nc = Sc.test(cB),
          Ic = Vc.map((cB => "word" === cB.kind ? Yc(cB.text) : 1)),
          zB = Ic.findLastIndex((cB => cB > 0));
        for (const [tB, Sc] of Vc.entries()) {
          const cB = "word" === Sc.kind,
            Vc = Ic[tB];
          Sc.delayMs = Zc;
          for (let Ic = 0; fc && Ic < Vc; Ic++) {
            const {
              intonation: rB
            } = fc;
            let uc = zB > 0 ? -rB.declineSemitones * (tB / zB) : 0;
            uc += lc(`${Lc(Sc.text)}|${Ic}`) * rB.variationSemitones;
            const ec = Math.min(1, rB.variationSemitones);
            let yB = fc.glideSemitones,
              pc = 1;
            nc && (uc += rB.exclaimLiftSemitones, pc *= sc), Bc && tB === zB && (uc += rB.questionRiseSemitones * (Vc > 1 ? .5 + .5 * Ic / (Vc - 1) : 1), Ic === Vc - 1 && (yB = Math.abs(yB) + rB.questionRiseSemitones / 2)), cB && gB(Sc.text) && (uc += Pc * ec, pc *= Mc), Vc > 1 && 0 === Ic && (uc += Oc * ec, pc *= qB), bB.push({
              atMs: Zc + Ic * mB,
              semitones: uc,
              glideSemitones: yB,
              durationMs: Ic < Vc - 1 ? Math.min(fc.durationMs, mB * Tc) : fc.durationMs,
              level: pc
            })
          }
          Zc += Vc * mB + (ec.test(Sc.text) ? uc : yB.test(Sc.text) ? rB : 0)
        }
      }
      return {
        pieces: zB.map((cB => "space" === cB.kind ? cB : "icon" === cB.kind ? {
          kind: "icon",
          icon: cB.text,
          delayMs: cB.delayMs
        } : {
          kind: "word",
          text: cB.text,
          delayMs: cB.delayMs
        })),
        blips: bB
      }
    }
    var bB = nc(1051),
      Zc = nc(1117),
      Qc = nc(1572);

    function Cc(cB) {
      if ("string" === typeof cB) return cB;
      const Bc = Zc.e.get().getCurrentLanguageCode();
      return (0, bB.l)(Bc, cB.translationKey, (0, bB.j)(cB.params, Qc.d.shown))
    }

    function vB(cB) {
      const Bc = void 0 === cB.voice ? null : (0, Vc.m)(cB.voice),
        nc = Bc && (0, Vc.k)(Bc);
      return {
        plan: Uc(Cc(cB.line), nc),
        synth: nc
      }
    }

    function Dc(cB) {
      const Bc = [];
      let nc = [];
      for (const [Ic, rB] of cB.entries()) {
        var Vc;
        "space" === rB.kind && (" " !== rB.text || "icon" !== (null === (Vc = cB[Ic + 1]) || void 0 === Vc ? void 0 : Vc.kind)) ? (nc.length > 0 && Bc.push(nc), Bc.push([rB]), nc = []) : nc.push(rB)
      }
      return nc.length > 0 && Bc.push(nc), Bc
    }
  },
  3900: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => qB,
      i: () => Oc
    });
    var Vc = nc(3907),
      Ic = nc(27);
    const rB = .25,
      uc = .85,
      sc = .02,
      Mc = .01;

    function Pc(cB, Bc, nc, Vc, Ic, rB, sc) {
      const {
        waveform: Mc,
        pitchHz: Pc,
        attackMs: qB,
        releaseMs: Oc,
        lowpassHz: Tc
      } = nc, fc = Ic + Vc.durationMs / 1e3, mB = Pc * 2 ** (Vc.semitones / 12), ec = cB.createOscillator();
      ec.type = Mc, ec.frequency.setValueAtTime(mB, Ic), ec.frequency.exponentialRampToValueAtTime(mB * 2 ** (Vc.glideSemitones / 12), fc);
      const tB = Ic + Math.min(qB, Vc.durationMs) / 1e3,
        Sc = cB.createGain();
      Sc.gain.setValueAtTime(0, Ic), Sc.gain.linearRampToValueAtTime(rB, tB), Sc.gain.linearRampToValueAtTime(rB * uc, Math.max(tB, fc - Oc / 1e3)), Sc.gain.linearRampToValueAtTime(0, fc);
      const yB = [ec];
      if (null !== Tc) {
        const Bc = cB.createBiquadFilter();
        Bc.type = "lowpass", Bc.frequency.value = Tc, yB.push(Bc)
      }
      yB.push(Sc, Bc);
      for (let uc = 1; uc < yB.length; uc++) yB[uc - 1].connect(yB[uc]);
      return ec.onended = () => {
        for (const cB of yB.slice(0, -1)) cB.disconnect();
        sc()
      }, ec.start(Ic), ec.stop(fc), ec
    }

    function qB(cB, Bc, nc, Vc, Ic, uc) {
      if (0 === Vc.length) return uc(), () => {};
      const qB = rB * nc.volume * Ic,
        Oc = cB.createGain();
      Oc.connect(Bc);
      const Tc = cB.currentTime + sc,
        fc = new Set;
      for (const rB of Vc) {
        const Bc = Pc(cB, Oc, nc, rB, Tc + rB.atMs / 1e3, qB * rB.level, (() => {
          fc.delete(Bc), 0 === fc.size && (Oc.disconnect(), uc())
        }));
        fc.add(Bc)
      }
      return () => {
        const Bc = cB.currentTime;
        Oc.gain.setTargetAtTime(0, Bc, Mc);
        for (const cB of fc) try {
          cB.stop(Bc + 5 * Mc)
        } catch {}
      }
    }

    function Oc(cB, Bc) {
      var nc;
      const rB = Vc.d.ctx,
        uc = Vc.d.masterGain;
      if (!rB || !uc || !Ic.d.get("soundOnFromAd")) return () => {};
      const sc = Vc.d;
      return null === (nc = sc._autoResume) || void 0 === nc || nc.call(sc), qB(rB, uc, cB, Bc, Ic.d.get("soundVolume"), (() => {
        var cB;
        null === (cB = sc._autoSuspend) || void 0 === cB || cB.call(sc)
      }))
    }
  },
  37587: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      closeClientGame: () => oc,
      createDefaultClientPlugins: () => Ec
    });
    var Vc = nc(302);

    function Ic() {
      let cB;
      return {
        onCreate(Bc) {
          cB = Bc
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Bc, nc, Ic, rB, uc, sc) {
          var Mc, Pc;
          if ("Iron Chest" !== cB.getMetaInfo(uc).rootName) return;
          if (!cB.hasEffect(Bc, "Thief")) return;
          const qB = cB.getBlockData(nc, Ic, rB);
          return cB.getPlayerDbId(Bc) !== (null === qB || void 0 === qB || null === (Mc = qB.persisted) || void 0 === Mc || null === (Pc = Mc.shared) || void 0 === Pc ? void 0 : Pc.ownerDbId) ? (cB.sendMessage(Bc, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Vc.C.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var rB = nc(3441),
      uc = nc(1108);
    const sc = 8.4,
      Mc = 1e-4,
      Pc = .15,
      qB = .04,
      Oc = [.12, .04, .12],
      Tc = 26,
      fc = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Qc: 1,
        minLifeTime: Mc,
        maxLifeTime: Mc,
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
        blendMode: rB.f.Standard
      },
      mB = {
        texture: "bubble",
        mipmaps: !1,
        Qc: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Tc,
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
        blendMode: rB.f.Standard
      },
      ec = [0, 0, 0],
      tB = [0, 0, 0];

    function Sc(cB) {
      const Bc = new Map;
      let nc = null;

      function Vc(cB) {
        var Bc, nc;
        null === (Bc = cB.bubbles) || void 0 === Bc || Bc.stop(), null === (nc = cB.fish) || void 0 === nc || nc.stop()
      }

      function Ic(nc) {
        if (!nc.readDrawnPosition(cB, tB)) {
          for (const cB of Bc.values()) {
            var Vc;
            null === (Vc = cB.bubbles) || void 0 === Vc || Vc.setEmitRate(0)
          }
          return
        }
        const Ic = performance.now();
        for (const [cB, uc] of Bc) {
          var rB;
          if (null === (rB = uc.bubbles) || void 0 === rB || rB.setEmitRate(0), !nc.readDrawnPosition(cB, ec)) continue;
          if (!((ec[0] - tB[0]) ** 2 + (ec[1] - tB[1]) ** 2 + (ec[2] - tB[2]) ** 2 < 900)) continue;
          const Bc = Math.max(0, uc.biteAt - Ic),
            Vc = uc.approachDurationMs > 0 ? Math.min(1, 1 - Bc / uc.approachDurationMs) : 1,
            Mc = (uc.approachDurationMs - Bc) / 1e3,
            Sc = uc.phase + .25 * Math.sin(1.7 * Mc + uc.phase),
            yB = Math.min(uc.approachDurationMs / 3e3 * 2.8, sc) * (1 - Vc) * (1 + .15 * Math.sin(2.1 * Mc + uc.phase)),
            zB = Math.min(1, 4 * (1 - Vc)),
            pc = (.45 * Math.sin(4.1 * Mc + uc.phase) + .18 * Math.sin(9.7 * Mc + 2 * uc.phase)) * zB,
            hc = ec[0] + Math.cos(Sc) * yB - Math.sin(Sc) * pc,
            aB = Math.ceil(uc.surfaceY),
            lc = ec[2] + Math.sin(Sc) * yB + Math.cos(Sc) * pc,
            {
              fishAt: Yc,
              bubblesAt: Lc
            } = uc;
          Yc[0] = Lc[0] = hc, Yc[1] = aB + Pc, Lc[1] = aB + qB, Yc[2] = Lc[2] = lc, uc.fish ??= nc.createParticles(fc, {
            pos: Yc
          }), uc.fish.moveTo(Yc), uc.fish.emit(1), uc.bubbles ??= nc.createParticles(mB, {
            pos: Lc,
            half: Oc
          }), uc.bubbles.moveTo(Lc), uc.bubbles.setEmitRate(Tc + 32 * (.5 + .5 * Math.sin(9 * Mc + uc.phase)) ** 4 + 13 * Vc)
        }
      }
      return {
        onCreate(cB) {
          nc = cB
        },
        onAfterRender() {
          nc && Ic(nc)
        },
        onClose() {
          for (const cB of Bc.values()) Vc(cB);
          Bc.clear(), nc = null
        },
        onReceivedMessageFromServer(cB, nc) {
          if (cB !== uc.B) return;
          const {
            hookId: Ic,
            waiting: rB
          } = nc;
          if (rB) Bc.has(Ic) || Bc.set(Ic, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + rB.remainingMs,
            approachDurationMs: rB.durationMs,
            surfaceY: rB.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const cB = Bc.get(Ic);
            cB && Vc(cB), Bc.delete(Ic)
          }
        }
      }
    }
    var yB = nc(3900),
      zB = nc(3885);

    function pc(cB) {
      let Bc, nc = null,
        Vc = null;
      const Ic = () => {
        var cB;
        null === (cB = Vc) || void 0 === cB || cB(), Vc = null
      };
      return {
        onCreate(Vc) {
          Bc = Vc, nc = Bc.getClientOption(cB, "dialogue")
        },
        onAfterRender() {
          if (!Bc) return;
          const rB = Bc.getClientOption(cB, "dialogue");
          if (rB === nc) return;
          if (nc = rB, Ic(), !rB || !1 === rB.animateIn) return;
          const {
            plan: uc,
            synth: sc
          } = (0, zB.h)(rB);
          sc && (Vc = (0, yB.i)(sc, uc.blips))
        },
        onClose: Ic
      }
    }
    const hc = 1 / .6,
      aB = {
        kind: "smokePuff"
      };
    class lc {
      constructor(cB, Bc, nc) {
        this.style = cB, this.Qc = Bc, this.half = nc, this.particles = null, this.lastFrame = -1
      }
      emit(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return nc !== this.lastFrame && (this.lastFrame = nc, this.particles || (this.particles = cB.createParticles(function(cB, Bc) {
          const [
            [nc, Vc, Ic],
            [rB, uc, sc]
          ] = cB.colours;
          return {
            texture: cB.soft ? aB : "square_particle",
            Qc: Bc,
            minLifeTime: cB.life[0] / hc,
            maxLifeTime: cB.life[1] / hc,
            minEmitPower: cB.power[0] * hc,
            maxEmitPower: cB.power[1] * hc,
            minSize: cB.size[0],
            maxSize: cB.size[1],
            emitRate: 0,
            gravity: [0, cB.lift * hc * hc, 0],
            dir1: [-cB.spread, 1, -cB.spread],
            dir2: [cB.spread, 1, cB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [nc, Vc, Ic, cB.alpha],
              maxColor: [rB, uc, sc, cB.alpha]
            }, {
              timeFraction: 1,
              minColor: [nc, Vc, Ic, 0],
              maxColor: [rB, uc, sc, 0]
            }],
            blendMode: cB.blendMode
          }
        }(this.style, this.Qc), {
          pos: Bc,
          half: this.half
        })), this.particles.moveTo(Bc, this.half), this.particles.emit(Vc), !0)
      }
      dispose() {
        var cB;
        null === (cB = this.particles) || void 0 === cB || cB.stop(), this.particles = null
      }
    }
    const Yc = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Lc = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      gB = [0, 1, 2, 0, 2, 3];

    function Uc(cB, Bc, nc) {
      var Vc;
      let [Ic, rB, uc] = Bc;
      if (cB.hasPackModel("Furnace")) return null;
      const sc = ((null !== (Vc = cB.getMetaInfo(nc).rot) && void 0 !== Vc ? Vc : 1) - 1) * Math.PI / 2,
        Mc = Math.PI + sc,
        Pc = Math.cos(Mc),
        qB = Math.sin(Mc),
        Oc = [];
      for (const [mB, ec] of Yc) Oc.push(mB * Pc, ec, -mB * qB);
      const Tc = {
          positions: Oc,
          indices: gB,
          uvs: Lc
        },
        fc = [Ic + .5 + .51 * Math.sin(sc), rB + .375, uc + .5 + .51 * Math.cos(sc)];
      return cB.createGameMesh(Tc, {
        kind: "furnaceFire"
      }, fc)
    }

    function bB(cB) {
      return Math.floor(cB / 200) % 3
    }

    function Zc(cB, Bc, nc) {
      cB.setGameMesh(Bc, {
        uvOffset: [0, nc / 3]
      })
    }
    const Qc = [.12, .025, .12],
      Cc = [{
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
          blendMode: rB.f.Standard,
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
          blendMode: rB.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class vB {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(cB, Bc) {
        const nc = cB.getBlockId(Bc[0], Bc[1], Bc[2]);
        if ("Furnace" !== cB.getMetaInfo(nc).rootName) return;
        const Vc = performance.now();
        let Ic = this.smokes.find((cB => cB.pos[0] === Bc[0] && cB.pos[1] === Bc[1] && cB.pos[2] === Bc[2] && cB.Zr === nc));
        if (Ic || (Ic = {
            pos: [Bc[0], Bc[1], Bc[2]],
            Zr: nc,
            endMs: Vc,
            lastBurstMs: -1 / 0,
            pending: new Array(Cc.length).fill(0),
            fire: Uc(cB, Bc, nc)
          }, this.smokes.push(Ic), null !== Ic.fire && (Zc(cB, Ic.fire, bB(Vc)), this.shownFireFrame = -1)), Ic.endMs = Vc + 6e3, this.smokes.length > 4) {
          const Bc = this.smokes.reduce(((cB, Bc) => Bc.endMs < cB.endMs ? Bc : cB));
          Dc(cB, Bc), this.smokes.splice(this.smokes.indexOf(Bc), 1)
        }
        Vc - Ic.lastBurstMs >= 300 && (Ic.lastBurstMs = Vc, Cc.forEach(((cB, Bc) => {
          Ic.pending[Bc] += cB.style.count
        })))
      }
      onAfterRender(cB, Bc) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const nc = performance.now();
        this.smokes = this.smokes.filter((Bc => {
          const [Vc, Ic, rB] = Bc.pos, uc = nc < Bc.endMs && cB.getBlockId(Vc, Ic, rB) === Bc.Zr;
          return uc || Dc(cB, Bc), uc
        }));
        const Vc = bB(nc);
        if (Vc !== this.shownFireFrame) {
          this.shownFireFrame = Vc;
          for (const Bc of this.smokes) null !== Bc.fire && Zc(cB, Bc.fire, Vc)
        }
        if (!cB.particlesEnabled()) {
          for (const cB of this.smokes) cB.pending.fill(0);
          return
        }
        const Ic = Math.min(Bc, 250) / 1e3;
        for (const rB of this.smokes) {
          const [Bc, Vc, uc] = rB.pos;
          if (0 !== cB.getBlockId(Bc, Vc + 1, uc)) {
            rB.pending.fill(0);
            continue
          }
          const sc = (rB.endMs - nc) / 6e3,
            Mc = this.centre;
          Mc[0] = Bc + .5, Mc[1] = Vc + 1.275, Mc[2] = uc + .5, Cc.forEach(((Bc, nc) => {
            rB.pending[nc] += Bc.perSecond * sc * Ic;
            const Vc = Math.floor(rB.pending[nc]);
            Vc > 0 && this.emit(cB, nc, Mc, Vc) && (rB.pending[nc] -= Vc)
          }))
        }
      }
      dispose(cB) {
        for (const nc of this.smokes) Dc(cB, nc);
        this.smokes = [];
        for (const nc of null !== (Bc = this.puffers) && void 0 !== Bc ? Bc : []) {
          var Bc;
          nc.dispose()
        }
        this.puffers = null
      }
      emit(cB, Bc, nc, Vc) {
        return this.puffers ??= Cc.map((cB => {
          let {
            style: Bc,
            perSecond: nc
          } = cB;
          const Vc = (Bc.count / .3 + nc) * Bc.life[1];
          return new lc(Bc, Math.ceil(4 * Vc), Qc)
        })), this.puffers[Bc].emit(cB, nc, this.renderFrame, Vc)
      }
    }

    function Dc(cB, Bc) {
      null !== Bc.fire && (cB.disposeGameMesh(Bc.fire), Bc.fire = null)
    }

    function Nc() {
      let cB;
      const Bc = new vB;
      return {
        onCreate(Bc) {
          cB = Bc
        },
        onReceivedMessageFromServer(nc, Vc) {
          nc === uc.E && Bc.start(cB, Vc)
        },
        onAfterRender(nc) {
          Bc.onAfterRender(cB, nc)
        },
        onClose() {
          Bc.dispose(cB)
        }
      }
    }

    function Ec(cB, Bc, nc, Vc) {
      return {
        dialogue: pc(Vc.localPlayerId),
        fishing: Sc(Vc.localPlayerId),
        furnaceSmoke: Nc(),
        ironChest: Ic()
      }
    }

    function oc(cB, Bc) {
      for (const Ic of [cB, ...null !== Bc && void 0 !== Bc ? Bc : []]) try {
        var nc;
        null === Ic || void 0 === Ic || null === (nc = Ic.onClose) || void 0 === nc || nc.call(Ic)
      } catch (Vc) {
        console.error("Error in client onClose callback", Vc)
      }
    }
  },
  3893: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc,
      j: () => rB,
      k: () => Mc,
      m: () => uc
    });
    const Vc = ["sine", "triangle", "square", "sawtooth"],
      Ic = 55,
      rB = {
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

    function uc(cB) {
      return "string" !== typeof cB ? cB : Object.hasOwn(rB, cB) ? rB[cB] : null
    }

    function sc(cB, Bc, nc) {
      return Math.min(nc, Math.max(Bc, cB))
    }

    function Mc(cB) {
      const Bc = sc(cB.durationMs, 10, 500),
        nc = sc(cB.attackMs, 0, Bc),
        {
          intonation: Ic
        } = cB;
      return {
        waveform: Vc.includes(cB.waveform) ? cB.waveform : "sine",
        pitchHz: sc(cB.pitchHz, 20, 4e3),
        glideSemitones: sc(cB.glideSemitones, -24, 24),
        durationMs: Bc,
        attackMs: nc,
        releaseMs: sc(cB.releaseMs, 0, Bc - nc),
        lowpassHz: null === cB.lowpassHz ? null : sc(cB.lowpassHz, 20, 2e4),
        volume: sc(cB.volume, 0, 2),
        intonation: {
          variationSemitones: sc(Ic.variationSemitones, 0, 6),
          declineSemitones: sc(Ic.declineSemitones, 0, 12),
          questionRiseSemitones: sc(Ic.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: sc(Ic.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: sc(cB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);