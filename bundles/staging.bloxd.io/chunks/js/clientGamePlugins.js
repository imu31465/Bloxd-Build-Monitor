export const id = 27;
export const ids = [27];
export const modules = {
  4932: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => VB,
      g: () => YB
    });
    var QB = zB(4939),
      nB = zB(363);
    const dB = 120,
      IB = 260,
      NB = 1.15,
      uB = 1.2,
      UB = 2,
      aB = 1.08,
      pB = .8,
      rB = .95,
      sB = 8,
      JB = "[\"')\\]\u300d\u300f\uff09]*",
      mB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${JB}$`),
      yB = new RegExp(`[?\uff1f]${JB}$`),
      kB = new RegExp(`[!\uff01]${JB}$`),
      GB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      LB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      gB = new RegExp(`[${LB}]`),
      tB = new RegExp(`[${LB}]|[^${LB}]+`, "g"),
      SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function MB(BB) {
      let jB = 2166136261;
      for (let zB = 0; zB < BB.length; zB++) jB ^= BB.charCodeAt(zB), jB = Math.imul(jB, 16777619);
      return (jB >>> 0) / 4294967295 * 2 - 1
    }

    function EB(BB) {
      var jB;
      if (gB.test(BB)) return 1;
      const zB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        QB = zB.replace(/[^0-9]/g, "");
      if (QB.length > 0 && !/\p{L}/u.test(zB)) return Math.min(QB.length, 4);
      const nB = null !== (jB = zB.match(SB)) && void 0 !== jB ? jB : [];
      if (0 === nB.length) {
        var dB, IB;
        const BB = null !== (dB = null === (IB = zB.match(/\p{L}/gu)) || void 0 === IB ? void 0 : IB.length) && void 0 !== dB ? dB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), sB)
      }
      const NB = zB.replace(/[^\p{L}]/gu, ""),
        uB = nB.length > 1 && "e" === nB.at(-1) && NB.endsWith("e") && !NB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(nB.length - (uB ? 1 : 0), sB)
    }

    function iB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function qB(BB) {
      const jB = BB.replace(/[^\p{L}]/gu, "");
      return jB.length >= 2 && jB === jB.toUpperCase() && jB !== jB.toLowerCase()
    }

    function fB(BB, jB) {
      var zB;
      const sB = jB && (0, QB.i)(jB),
        JB = null !== (zB = null === sB || void 0 === sB ? void 0 : sB.syllableMs) && void 0 !== zB ? zB : QB.d,
        LB = function(BB) {
          const jB = [];
          for (const QB of (0, nB.Rb)(BB))
            if ("string" === typeof QB)
              for (const BB of QB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  jB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!gB.test(BB)) {
                  jB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let QB = !0;
                for (const nB of null !== (zB = BB.match(tB)) && void 0 !== zB ? zB : []) {
                  var zB;
                  const BB = jB.at(-1);
                  QB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || gB.test(nB) || /[\p{L}\p{N}]/u.test(nB) ? (QB || jB.push({
                    kind: "space",
                    text: "\u200b"
                  }), jB.push({
                    kind: "word",
                    text: nB,
                    delayMs: 0
                  }), QB = !1) : BB.text += nB
                }
              } else jB.push({
                kind: "icon",
                text: QB.icon,
                delayMs: 0
              });
          return jB
        }(BB),
        SB = [];
      let fB = [];
      for (const QB of LB) "space" !== QB.kind && (fB.push(QB), mB.test(QB.text) && (SB.push(fB), fB = []));
      SB.push(fB);
      const oB = [];
      let HB = 0;
      for (const QB of SB) {
        var DB, FB;
        const BB = null !== (DB = null === (FB = QB.at(-1)) || void 0 === FB ? void 0 : FB.text) && void 0 !== DB ? DB : "",
          jB = yB.test(BB),
          zB = kB.test(BB),
          nB = QB.map((BB => "word" === BB.kind ? EB(BB.text) : 1)),
          LB = nB.findLastIndex((BB => BB > 0));
        for (const [yB, kB] of QB.entries()) {
          const BB = "word" === kB.kind,
            QB = nB[yB];
          kB.delayMs = HB;
          for (let nB = 0; sB && nB < QB; nB++) {
            const {
              intonation: dB
            } = sB;
            let IB = LB > 0 ? -dB.declineSemitones * (yB / LB) : 0;
            IB += MB(`${iB(kB.text)}|${nB}`) * dB.variationSemitones;
            const mB = Math.min(1, dB.variationSemitones);
            let GB = sB.glideSemitones,
              gB = 1;
            zB && (IB += dB.exclaimLiftSemitones, gB *= NB), jB && yB === LB && (IB += dB.questionRiseSemitones * (QB > 1 ? .5 + .5 * nB / (QB - 1) : 1), nB === QB - 1 && (GB = Math.abs(GB) + dB.questionRiseSemitones / 2)), BB && qB(kB.text) && (IB += UB * mB, gB *= uB), QB > 1 && 0 === nB && (IB += pB * mB, gB *= aB), oB.push({
              atMs: HB + nB * JB,
              semitones: IB,
              glideSemitones: GB,
              durationMs: nB < QB - 1 ? Math.min(sB.durationMs, JB * rB) : sB.durationMs,
              level: gB
            })
          }
          HB += QB * JB + (mB.test(kB.text) ? IB : GB.test(kB.text) ? dB : 0)
        }
      }
      return {
        pieces: LB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: oB
      }
    }
    var oB = zB(1240),
      HB = zB(1284),
      DB = zB(1991);

    function FB(BB) {
      if ("string" === typeof BB) return BB;
      const jB = HB.c.get().getCurrentLanguageCode();
      return (0, oB.t)(jB, BB.translationKey, (0, oB.p)(BB.params, DB.b.shown))
    }

    function YB(BB) {
      const jB = void 0 === BB.voice ? null : (0, QB.k)(BB.voice),
        zB = jB && (0, QB.i)(jB);
      return {
        plan: fB(FB(BB.line), zB),
        synth: zB
      }
    }

    function VB(BB) {
      const jB = [];
      let zB = [];
      for (const [nB, dB] of BB.entries()) {
        var QB;
        "space" === dB.kind && (" " !== dB.text || "icon" !== (null === (QB = BB[nB + 1]) || void 0 === QB ? void 0 : QB.kind)) ? (zB.length > 0 && jB.push(zB), jB.push([dB]), zB = []) : zB.push(dB)
      }
      return zB.length > 0 && jB.push(zB), jB
    }
  },
  4947: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      f: () => pB
    });
    var QB = zB(4950),
      nB = zB(28);
    const dB = .25,
      IB = .85,
      NB = .02,
      uB = .01;

    function UB(BB, jB, zB, QB, nB, dB, NB) {
      const {
        waveform: uB,
        pitchHz: UB,
        attackMs: aB,
        releaseMs: pB,
        lowpassHz: rB
      } = zB, sB = nB + QB.durationMs / 1e3, JB = UB * 2 ** (QB.semitones / 12), mB = BB.createOscillator();
      mB.type = uB, mB.frequency.setValueAtTime(JB, nB), mB.frequency.exponentialRampToValueAtTime(JB * 2 ** (QB.glideSemitones / 12), sB);
      const yB = nB + Math.min(aB, QB.durationMs) / 1e3,
        kB = BB.createGain();
      kB.gain.setValueAtTime(0, nB), kB.gain.linearRampToValueAtTime(dB, yB), kB.gain.linearRampToValueAtTime(dB * IB, Math.max(yB, sB - pB / 1e3)), kB.gain.linearRampToValueAtTime(0, sB);
      const GB = [mB];
      if (null !== rB) {
        const jB = BB.createBiquadFilter();
        jB.type = "lowpass", jB.frequency.value = rB, GB.push(jB)
      }
      GB.push(kB, jB);
      for (let IB = 1; IB < GB.length; IB++) GB[IB - 1].connect(GB[IB]);
      return mB.onended = () => {
        for (const BB of GB.slice(0, -1)) BB.disconnect();
        NB()
      }, mB.start(nB), mB.stop(sB), mB
    }

    function aB(BB, jB, zB, QB, nB, IB) {
      if (0 === QB.length) return IB(), () => {};
      const aB = dB * zB.volume * nB,
        pB = BB.createGain();
      pB.connect(jB);
      const rB = BB.currentTime + NB,
        sB = new Set;
      for (const dB of QB) {
        const jB = UB(BB, pB, zB, dB, rB + dB.atMs / 1e3, aB * dB.level, (() => {
          sB.delete(jB), 0 === sB.size && (pB.disconnect(), IB())
        }));
        sB.add(jB)
      }
      return () => {
        const jB = BB.currentTime;
        pB.gain.setTargetAtTime(0, jB, uB);
        for (const BB of sB) try {
          BB.stop(jB + 5 * uB)
        } catch {}
      }
    }

    function pB(BB, jB) {
      var zB;
      const dB = QB.Howler.ctx,
        IB = QB.Howler.masterGain;
      if (!dB || !IB || !nB.c.get("soundOnFromAd")) return () => {};
      const NB = QB.Howler;
      return null === (zB = NB._autoResume) || void 0 === zB || zB.call(NB), aB(dB, IB, BB, jB, nB.c.get("soundVolume"), (() => {
        var BB;
        null === (BB = NB._autoSuspend) || void 0 === BB || BB.call(NB)
      }))
    }
  },
  39237: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      closeClientGame: () => hB,
      createDefaultClientPlugins: () => VB
    });
    var QB = zB(376);

    function nB() {
      let BB;
      return {
        onCreate(jB) {
          BB = jB
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(jB, zB, nB, dB, IB, NB) {
          var uB, UB;
          if ("Iron Chest" !== BB.getMetaInfo(IB).rootName) return;
          if (!BB.hasEffect(jB, "Thief")) return;
          const aB = BB.getBlockData(zB, nB, dB);
          return BB.getPlayerDbId(jB) !== (null === aB || void 0 === aB || null === (uB = aB.persisted) || void 0 === uB || null === (UB = uB.shared) || void 0 === UB ? void 0 : UB.ownerDbId) ? (BB.sendMessage(jB, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: QB.E.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var dB = zB(4334),
      IB = zB(1270);
    const NB = 8.4,
      uB = 1e-4,
      UB = .15,
      aB = .04,
      pB = [.12, .04, .12],
      rB = 26,
      sB = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Ep: 1,
        minLifeTime: uB,
        maxLifeTime: uB,
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
        blendMode: dB.d.Standard
      },
      JB = {
        texture: "bubble",
        mipmaps: !1,
        Ep: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: rB,
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
        blendMode: dB.d.Standard
      },
      mB = [0, 0, 0],
      yB = [0, 0, 0];

    function kB(BB) {
      const jB = new Map;
      let zB = null;

      function QB(BB) {
        var jB, zB;
        null === (jB = BB.bubbles) || void 0 === jB || jB.stop(), null === (zB = BB.fish) || void 0 === zB || zB.stop()
      }

      function nB(zB) {
        if (!zB.readDrawnPosition(BB, yB)) {
          for (const BB of jB.values()) {
            var QB;
            null === (QB = BB.bubbles) || void 0 === QB || QB.setEmitRate(0)
          }
          return
        }
        const nB = performance.now();
        for (const [BB, IB] of jB) {
          var dB;
          if (null === (dB = IB.bubbles) || void 0 === dB || dB.setEmitRate(0), !zB.readDrawnPosition(BB, mB)) continue;
          if (!((mB[0] - yB[0]) ** 2 + (mB[1] - yB[1]) ** 2 + (mB[2] - yB[2]) ** 2 < 900)) continue;
          const jB = Math.max(0, IB.biteAt - nB),
            QB = IB.approachDurationMs > 0 ? Math.min(1, 1 - jB / IB.approachDurationMs) : 1,
            uB = (IB.approachDurationMs - jB) / 1e3,
            kB = IB.phase + .25 * Math.sin(1.7 * uB + IB.phase),
            GB = Math.min(IB.approachDurationMs / 3e3 * 2.8, NB) * (1 - QB) * (1 + .15 * Math.sin(2.1 * uB + IB.phase)),
            LB = Math.min(1, 4 * (1 - QB)),
            gB = (.45 * Math.sin(4.1 * uB + IB.phase) + .18 * Math.sin(9.7 * uB + 2 * IB.phase)) * LB,
            tB = mB[0] + Math.cos(kB) * GB - Math.sin(kB) * gB,
            SB = Math.ceil(IB.surfaceY),
            MB = mB[2] + Math.sin(kB) * GB + Math.cos(kB) * gB,
            {
              fishAt: EB,
              bubblesAt: iB
            } = IB;
          EB[0] = iB[0] = tB, EB[1] = SB + UB, iB[1] = SB + aB, EB[2] = iB[2] = MB, IB.fish ??= zB.createParticles(sB, {
            pos: EB
          }), IB.fish.moveTo(EB), IB.fish.emit(1), IB.bubbles ??= zB.createParticles(JB, {
            pos: iB,
            half: pB
          }), IB.bubbles.moveTo(iB), IB.bubbles.setEmitRate(rB + 32 * (.5 + .5 * Math.sin(9 * uB + IB.phase)) ** 4 + 13 * QB)
        }
      }
      return {
        onCreate(BB) {
          zB = BB
        },
        onAfterRender() {
          zB && nB(zB)
        },
        onClose() {
          for (const BB of jB.values()) QB(BB);
          jB.clear(), zB = null
        },
        onReceivedMessageFromServer(BB, zB) {
          if (BB !== IB.A) return;
          const {
            hookId: nB,
            waiting: dB
          } = zB;
          if (dB) jB.has(nB) || jB.set(nB, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + dB.remainingMs,
            approachDurationMs: dB.durationMs,
            surfaceY: dB.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const BB = jB.get(nB);
            BB && QB(BB), jB.delete(nB)
          }
        }
      }
    }
    var GB = zB(4947),
      LB = zB(4932);

    function gB(BB) {
      let jB, zB = null,
        QB = null;
      const nB = () => {
        var BB;
        null === (BB = QB) || void 0 === BB || BB(), QB = null
      };
      return {
        onCreate(QB) {
          jB = QB, zB = jB.getClientOption(BB, "dialogue")
        },
        onAfterRender() {
          if (!jB) return;
          const dB = jB.getClientOption(BB, "dialogue");
          if (dB === zB) return;
          if (zB = dB, nB(), !dB || !1 === dB.animateIn) return;
          const {
            plan: IB,
            synth: NB
          } = (0, LB.g)(dB);
          NB && (QB = (0, GB.f)(NB, IB.blips))
        },
        onClose: nB
      }
    }
    var tB = zB(39245);
    const SB = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      MB = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      EB = [0, 1, 2, 0, 2, 3];

    function iB(BB, jB, zB) {
      var QB;
      let [nB, dB, IB] = jB;
      if (BB.hasPackModel("Furnace")) return null;
      const NB = ((null !== (QB = BB.getMetaInfo(zB).rot) && void 0 !== QB ? QB : 1) - 1) * Math.PI / 2,
        uB = Math.PI + NB,
        UB = Math.cos(uB),
        aB = Math.sin(uB),
        pB = [];
      for (const [JB, mB] of SB) pB.push(JB * UB, mB, -JB * aB);
      const rB = {
          positions: pB,
          indices: EB,
          uvs: MB
        },
        sB = [nB + .5 + .51 * Math.sin(NB), dB + .375, IB + .5 + .51 * Math.cos(NB)];
      return BB.createGameMesh(rB, {
        kind: "furnaceFire"
      }, sB)
    }

    function qB(BB) {
      return Math.floor(BB / 200) % 3
    }

    function fB(BB, jB, zB) {
      BB.setGameMesh(jB, {
        uvOffset: [0, zB / 3]
      })
    }
    const oB = [.12, .025, .12],
      HB = [{
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
          blendMode: dB.d.Standard,
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
          blendMode: dB.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class DB {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(BB, jB) {
        const zB = BB.getBlockId(jB[0], jB[1], jB[2]);
        if ("Furnace" !== BB.getMetaInfo(zB).rootName) return;
        const QB = performance.now();
        let nB = this.smokes.find((BB => BB.pos[0] === jB[0] && BB.pos[1] === jB[1] && BB.pos[2] === jB[2] && BB.dN === zB));
        if (nB || (nB = {
            pos: [jB[0], jB[1], jB[2]],
            dN: zB,
            endMs: QB,
            lastBurstMs: -1 / 0,
            pending: new Array(HB.length).fill(0),
            fire: iB(BB, jB, zB)
          }, this.smokes.push(nB), null !== nB.fire && (fB(BB, nB.fire, qB(QB)), this.shownFireFrame = -1)), nB.endMs = QB + 6e3, this.smokes.length > 4) {
          const jB = this.smokes.reduce(((BB, jB) => jB.endMs < BB.endMs ? jB : BB));
          FB(BB, jB), this.smokes.splice(this.smokes.indexOf(jB), 1)
        }
        QB - nB.lastBurstMs >= 300 && (nB.lastBurstMs = QB, HB.forEach(((BB, jB) => {
          nB.pending[jB] += BB.style.count
        })))
      }
      onAfterRender(BB, jB) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const zB = performance.now();
        this.smokes = this.smokes.filter((jB => {
          const [QB, nB, dB] = jB.pos, IB = zB < jB.endMs && BB.getBlockId(QB, nB, dB) === jB.dN;
          return IB || FB(BB, jB), IB
        }));
        const QB = qB(zB);
        if (QB !== this.shownFireFrame) {
          this.shownFireFrame = QB;
          for (const jB of this.smokes) null !== jB.fire && fB(BB, jB.fire, QB)
        }
        if (!BB.particlesEnabled()) {
          for (const BB of this.smokes) BB.pending.fill(0);
          return
        }
        const nB = Math.min(jB, 250) / 1e3;
        for (const dB of this.smokes) {
          const [jB, QB, IB] = dB.pos;
          if (0 !== BB.getBlockId(jB, QB + 1, IB)) {
            dB.pending.fill(0);
            continue
          }
          const NB = (dB.endMs - zB) / 6e3,
            uB = this.centre;
          uB[0] = jB + .5, uB[1] = QB + 1.275, uB[2] = IB + .5, HB.forEach(((jB, zB) => {
            dB.pending[zB] += jB.perSecond * NB * nB;
            const QB = Math.floor(dB.pending[zB]);
            QB > 0 && this.emit(BB, zB, uB, QB) && (dB.pending[zB] -= QB)
          }))
        }
      }
      dispose(BB) {
        for (const zB of this.smokes) FB(BB, zB);
        this.smokes = [];
        for (const zB of null !== (jB = this.puffers) && void 0 !== jB ? jB : []) {
          var jB;
          zB.dispose()
        }
        this.puffers = null
      }
      emit(BB, jB, zB, QB) {
        return this.puffers ??= HB.map((BB => {
          let {
            style: jB,
            perSecond: zB
          } = BB;
          const QB = (jB.count / .3 + zB) * jB.life[1];
          return new tB.g(jB, Math.ceil(4 * QB), oB)
        })), this.puffers[jB].emit(BB, zB, this.renderFrame, QB)
      }
    }

    function FB(BB, jB) {
      null !== jB.fire && (BB.disposeGameMesh(jB.fire), jB.fire = null)
    }

    function YB() {
      let BB;
      const jB = new DB;
      return {
        onCreate(jB) {
          BB = jB
        },
        onReceivedMessageFromServer(zB, QB) {
          zB === IB.C && jB.start(BB, QB)
        },
        onAfterRender(zB) {
          jB.onAfterRender(BB, zB)
        },
        onClose() {
          jB.dispose(BB)
        }
      }
    }

    function VB(BB, jB, zB, QB) {
      return {
        dialogue: gB(QB.localPlayerId),
        fishing: kB(QB.localPlayerId),
        furnaceSmoke: YB(),
        ironChest: nB()
      }
    }

    function hB(BB, jB) {
      for (const nB of [BB, ...null !== jB && void 0 !== jB ? jB : []]) try {
        var zB;
        null === nB || void 0 === nB || null === (zB = nB.onClose) || void 0 === zB || zB.call(nB)
      } catch (QB) {
        console.error("Error in client onClose callback", QB)
      }
    }
  },
  39245: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB,
      g: () => dB
    });
    const QB = 1 / .6,
      nB = {
        kind: "smokePuff"
      };
    class dB {
      constructor(BB, jB, zB) {
        this.style = BB, this.Ep = jB, this.half = zB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, jB, zB) {
        let dB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return zB !== this.lastFrame && (this.lastFrame = zB, this.particles || (this.particles = BB.createParticles(function(BB, jB) {
          const [
            [zB, dB, IB],
            [NB, uB, UB]
          ] = BB.colours;
          return {
            texture: BB.soft ? nB : "square_particle",
            Ep: jB,
            minLifeTime: BB.life[0] / QB,
            maxLifeTime: BB.life[1] / QB,
            minEmitPower: BB.power[0] * QB,
            maxEmitPower: BB.power[1] * QB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * QB * QB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [zB, dB, IB, BB.alpha],
              maxColor: [NB, uB, UB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [zB, dB, IB, 0],
              maxColor: [NB, uB, UB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.Ep), {
          pos: jB,
          half: this.half
        })), this.particles.moveTo(jB, this.half), this.particles.emit(dB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  4939: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => QB,
      h: () => dB,
      i: () => uB,
      k: () => IB
    });
    const QB = ["sine", "triangle", "square", "sawtooth"],
      nB = 55,
      dB = {
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

    function IB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(dB, BB) ? dB[BB] : null
    }

    function NB(BB, jB, zB) {
      return Math.min(zB, Math.max(jB, BB))
    }

    function uB(BB) {
      const jB = NB(BB.durationMs, 10, 500),
        zB = NB(BB.attackMs, 0, jB),
        {
          intonation: nB
        } = BB;
      return {
        waveform: QB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: NB(BB.pitchHz, 20, 4e3),
        glideSemitones: NB(BB.glideSemitones, -24, 24),
        durationMs: jB,
        attackMs: zB,
        releaseMs: NB(BB.releaseMs, 0, jB - zB),
        lowpassHz: null === BB.lowpassHz ? null : NB(BB.lowpassHz, 20, 2e4),
        volume: NB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: NB(nB.variationSemitones, 0, 6),
          declineSemitones: NB(nB.declineSemitones, 0, 12),
          questionRiseSemitones: NB(nB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: NB(nB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: NB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);