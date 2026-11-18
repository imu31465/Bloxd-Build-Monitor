export const id = 27;
export const ids = [27];
export const modules = {
  4240: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => cB,
      f: () => IB
    });
    var VB = dB(4247),
      yB = dB(270);
    const pB = 120,
      lB = 260,
      JB = 1.15,
      YB = 1.2,
      gB = 2,
      oB = 1.08,
      kB = .8,
      LB = .95,
      OB = 8,
      DB = "[\"')\\]\u300d\u300f\uff09]*",
      uB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${DB}$`),
      HB = new RegExp(`[?\uff1f]${DB}$`),
      EB = new RegExp(`[!\uff01]${DB}$`),
      vB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      iB = new RegExp(`[${mB}]`),
      NB = new RegExp(`[${mB}]|[^${mB}]+`, "g"),
      tB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fB(BB) {
      let TB = 2166136261;
      for (let dB = 0; dB < BB.length; dB++) TB ^= BB.charCodeAt(dB), TB = Math.imul(TB, 16777619);
      return (TB >>> 0) / 4294967295 * 2 - 1
    }

    function sB(BB) {
      var TB;
      if (iB.test(BB)) return 1;
      const dB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        VB = dB.replace(/[^0-9]/g, "");
      if (VB.length > 0 && !/\p{L}/u.test(dB)) return Math.min(VB.length, 4);
      const yB = null !== (TB = dB.match(tB)) && void 0 !== TB ? TB : [];
      if (0 === yB.length) {
        var pB, lB;
        const BB = null !== (pB = null === (lB = dB.match(/\p{L}/gu)) || void 0 === lB ? void 0 : lB.length) && void 0 !== pB ? pB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), OB)
      }
      const JB = dB.replace(/[^\p{L}]/gu, ""),
        YB = yB.length > 1 && "e" === yB.at(-1) && JB.endsWith("e") && !JB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(yB.length - (YB ? 1 : 0), OB)
    }

    function MB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function zB(BB) {
      const TB = BB.replace(/[^\p{L}]/gu, "");
      return TB.length >= 2 && TB === TB.toUpperCase() && TB !== TB.toLowerCase()
    }

    function wB(BB, TB) {
      var dB;
      const OB = TB && (0, VB.i)(TB),
        DB = null !== (dB = null === OB || void 0 === OB ? void 0 : OB.syllableMs) && void 0 !== dB ? dB : VB.b,
        mB = function(BB) {
          const TB = [];
          for (const VB of (0, yB.hc)(BB))
            if ("string" === typeof VB)
              for (const BB of VB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  TB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!iB.test(BB)) {
                  TB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let VB = !0;
                for (const yB of null !== (dB = BB.match(NB)) && void 0 !== dB ? dB : []) {
                  var dB;
                  const BB = TB.at(-1);
                  VB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || iB.test(yB) || /[\p{L}\p{N}]/u.test(yB) ? (VB || TB.push({
                    kind: "space",
                    text: "\u200b"
                  }), TB.push({
                    kind: "word",
                    text: yB,
                    delayMs: 0
                  }), VB = !1) : BB.text += yB
                }
              } else TB.push({
                kind: "icon",
                text: VB.icon,
                delayMs: 0
              });
          return TB
        }(BB),
        tB = [];
      let wB = [];
      for (const VB of mB) "space" !== VB.kind && (wB.push(VB), uB.test(VB.text) && (tB.push(wB), wB = []));
      tB.push(wB);
      const UB = [];
      let FB = 0;
      for (const VB of tB) {
        var KB, rB;
        const BB = null !== (KB = null === (rB = VB.at(-1)) || void 0 === rB ? void 0 : rB.text) && void 0 !== KB ? KB : "",
          TB = HB.test(BB),
          dB = EB.test(BB),
          yB = VB.map((BB => "word" === BB.kind ? sB(BB.text) : 1)),
          mB = yB.findLastIndex((BB => BB > 0));
        for (const [HB, EB] of VB.entries()) {
          const BB = "word" === EB.kind,
            VB = yB[HB];
          EB.delayMs = FB;
          for (let yB = 0; OB && yB < VB; yB++) {
            const {
              intonation: pB
            } = OB;
            let lB = mB > 0 ? -pB.declineSemitones * (HB / mB) : 0;
            lB += fB(`${MB(EB.text)}|${yB}`) * pB.variationSemitones;
            const uB = Math.min(1, pB.variationSemitones);
            let vB = OB.glideSemitones,
              iB = 1;
            dB && (lB += pB.exclaimLiftSemitones, iB *= JB), TB && HB === mB && (lB += pB.questionRiseSemitones * (VB > 1 ? .5 + .5 * yB / (VB - 1) : 1), yB === VB - 1 && (vB = Math.abs(vB) + pB.questionRiseSemitones / 2)), BB && zB(EB.text) && (lB += gB * uB, iB *= YB), VB > 1 && 0 === yB && (lB += kB * uB, iB *= oB), UB.push({
              atMs: FB + yB * DB,
              semitones: lB,
              glideSemitones: vB,
              durationMs: yB < VB - 1 ? Math.min(OB.durationMs, DB * LB) : OB.durationMs,
              level: iB
            })
          }
          FB += VB * DB + (uB.test(EB.text) ? lB : vB.test(EB.text) ? pB : 0)
        }
      }
      return {
        pieces: mB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: UB
      }
    }
    var UB = dB(1078),
      FB = dB(1133),
      KB = dB(1685);

    function rB(BB) {
      if ("string" === typeof BB) return BB;
      const TB = FB.f.get().getCurrentLanguageCode();
      return (0, UB.r)(TB, BB.translationKey, (0, UB.o)(BB.params, KB.c.shown))
    }

    function IB(BB) {
      const TB = void 0 === BB.voice ? null : (0, VB.j)(BB.voice),
        dB = TB && (0, VB.i)(TB);
      return {
        plan: wB(rB(BB.line), dB),
        synth: dB
      }
    }

    function cB(BB) {
      const TB = [];
      let dB = [];
      for (const [yB, pB] of BB.entries()) {
        var VB;
        "space" === pB.kind && (" " !== pB.text || "icon" !== (null === (VB = BB[yB + 1]) || void 0 === VB ? void 0 : VB.kind)) ? (dB.length > 0 && TB.push(dB), TB.push([pB]), dB = []) : dB.push(pB)
      }
      return dB.length > 0 && TB.push(dB), TB
    }
  },
  4252: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB,
      f: () => kB
    });
    var VB = dB(4258),
      yB = dB(21);
    const pB = .25,
      lB = .85,
      JB = .02,
      YB = .01;

    function gB(BB, TB, dB, VB, yB, pB, JB) {
      const {
        waveform: YB,
        pitchHz: gB,
        attackMs: oB,
        releaseMs: kB,
        lowpassHz: LB
      } = dB, OB = yB + VB.durationMs / 1e3, DB = gB * 2 ** (VB.semitones / 12), uB = BB.createOscillator();
      uB.type = YB, uB.frequency.setValueAtTime(DB, yB), uB.frequency.exponentialRampToValueAtTime(DB * 2 ** (VB.glideSemitones / 12), OB);
      const HB = yB + Math.min(oB, VB.durationMs) / 1e3,
        EB = BB.createGain();
      EB.gain.setValueAtTime(0, yB), EB.gain.linearRampToValueAtTime(pB, HB), EB.gain.linearRampToValueAtTime(pB * lB, Math.max(HB, OB - kB / 1e3)), EB.gain.linearRampToValueAtTime(0, OB);
      const vB = [uB];
      if (null !== LB) {
        const TB = BB.createBiquadFilter();
        TB.type = "lowpass", TB.frequency.value = LB, vB.push(TB)
      }
      vB.push(EB, TB);
      for (let lB = 1; lB < vB.length; lB++) vB[lB - 1].connect(vB[lB]);
      return uB.onended = () => {
        for (const BB of vB.slice(0, -1)) BB.disconnect();
        JB()
      }, uB.start(yB), uB.stop(OB), uB
    }

    function oB(BB, TB, dB, VB, yB, lB) {
      if (0 === VB.length) return lB(), () => {};
      const oB = pB * dB.volume * yB,
        kB = BB.createGain();
      kB.connect(TB);
      const LB = BB.currentTime + JB,
        OB = new Set;
      for (const pB of VB) {
        const TB = gB(BB, kB, dB, pB, LB + pB.atMs / 1e3, oB * pB.level, (() => {
          OB.delete(TB), 0 === OB.size && (kB.disconnect(), lB())
        }));
        OB.add(TB)
      }
      return () => {
        const TB = BB.currentTime;
        kB.gain.setTargetAtTime(0, TB, YB);
        for (const BB of OB) try {
          BB.stop(TB + 5 * YB)
        } catch {}
      }
    }

    function kB(BB, TB) {
      var dB;
      const pB = VB.b.ctx,
        lB = VB.b.masterGain;
      if (!pB || !lB || !yB.d.get("soundOnFromAd")) return () => {};
      const JB = VB.b;
      return null === (dB = JB._autoResume) || void 0 === dB || dB.call(JB), oB(pB, lB, BB, TB, yB.d.get("soundVolume"), (() => {
        var BB;
        null === (BB = JB._autoSuspend) || void 0 === BB || BB.call(JB)
      }))
    }
  },
  38078: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      closeClientGame: () => SB,
      createDefaultClientPlugins: () => cB
    });
    var VB = dB(279);

    function yB() {
      let BB;
      return {
        onCreate(TB) {
          BB = TB
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(TB, dB, yB, pB, lB, JB) {
          var YB, gB;
          if ("Iron Chest" !== BB.getMetaInfo(lB).rootName) return;
          if (!BB.hasEffect(TB, "Thief")) return;
          const oB = BB.getBlockData(dB, yB, pB);
          return BB.getPlayerDbId(TB) !== (null === oB || void 0 === oB || null === (YB = oB.persisted) || void 0 === YB || null === (gB = YB.shared) || void 0 === gB ? void 0 : gB.ownerDbId) ? (BB.sendMessage(TB, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: VB.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var pB = dB(3716),
      lB = dB(1117);
    const JB = 8.4,
      YB = 1e-4,
      gB = .15,
      oB = .04,
      kB = [.12, .04, .12],
      LB = 26,
      OB = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Kk: 1,
        minLifeTime: YB,
        maxLifeTime: YB,
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
        blendMode: pB.e.Standard
      },
      DB = {
        texture: "bubble",
        mipmaps: !1,
        Kk: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: LB,
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
        blendMode: pB.e.Standard
      },
      uB = [0, 0, 0],
      HB = [0, 0, 0];

    function EB(BB) {
      const TB = new Map;
      let dB = null;

      function VB(BB) {
        var TB, dB;
        null === (TB = BB.bubbles) || void 0 === TB || TB.stop(), null === (dB = BB.fish) || void 0 === dB || dB.stop()
      }

      function yB(dB) {
        if (!dB.readDrawnPosition(BB, HB)) {
          for (const BB of TB.values()) {
            var VB;
            null === (VB = BB.bubbles) || void 0 === VB || VB.setEmitRate(0)
          }
          return
        }
        const yB = performance.now();
        for (const [BB, lB] of TB) {
          var pB;
          if (null === (pB = lB.bubbles) || void 0 === pB || pB.setEmitRate(0), !dB.readDrawnPosition(BB, uB)) continue;
          if (!((uB[0] - HB[0]) ** 2 + (uB[1] - HB[1]) ** 2 + (uB[2] - HB[2]) ** 2 < 900)) continue;
          const TB = Math.max(0, lB.biteAt - yB),
            VB = lB.approachDurationMs > 0 ? Math.min(1, 1 - TB / lB.approachDurationMs) : 1,
            YB = (lB.approachDurationMs - TB) / 1e3,
            EB = lB.phase + .25 * Math.sin(1.7 * YB + lB.phase),
            vB = Math.min(lB.approachDurationMs / 3e3 * 2.8, JB) * (1 - VB) * (1 + .15 * Math.sin(2.1 * YB + lB.phase)),
            mB = Math.min(1, 4 * (1 - VB)),
            iB = (.45 * Math.sin(4.1 * YB + lB.phase) + .18 * Math.sin(9.7 * YB + 2 * lB.phase)) * mB,
            NB = uB[0] + Math.cos(EB) * vB - Math.sin(EB) * iB,
            tB = Math.ceil(lB.surfaceY),
            fB = uB[2] + Math.sin(EB) * vB + Math.cos(EB) * iB,
            {
              fishAt: sB,
              bubblesAt: MB
            } = lB;
          sB[0] = MB[0] = NB, sB[1] = tB + gB, MB[1] = tB + oB, sB[2] = MB[2] = fB, lB.fish ??= dB.createParticles(OB, {
            pos: sB
          }), lB.fish.moveTo(sB), lB.fish.emit(1), lB.bubbles ??= dB.createParticles(DB, {
            pos: MB,
            half: kB
          }), lB.bubbles.moveTo(MB), lB.bubbles.setEmitRate(LB + 32 * (.5 + .5 * Math.sin(9 * YB + lB.phase)) ** 4 + 13 * VB)
        }
      }
      return {
        onCreate(BB) {
          dB = BB
        },
        onAfterRender() {
          dB && yB(dB)
        },
        onClose() {
          for (const BB of TB.values()) VB(BB);
          TB.clear(), dB = null
        },
        onReceivedMessageFromServer(BB, dB) {
          if (BB !== lB.t) return;
          const {
            hookId: yB,
            waiting: pB
          } = dB;
          if (pB) TB.has(yB) || TB.set(yB, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + pB.remainingMs,
            approachDurationMs: pB.durationMs,
            surfaceY: pB.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const BB = TB.get(yB);
            BB && VB(BB), TB.delete(yB)
          }
        }
      }
    }
    var vB = dB(4252),
      mB = dB(4240);

    function iB(BB) {
      let TB, dB = null,
        VB = null;
      const yB = () => {
        var BB;
        null === (BB = VB) || void 0 === BB || BB(), VB = null
      };
      return {
        onCreate(VB) {
          TB = VB, dB = TB.getClientOption(BB, "dialogue")
        },
        onAfterRender() {
          if (!TB) return;
          const pB = TB.getClientOption(BB, "dialogue");
          if (pB === dB) return;
          if (dB = pB, yB(), !pB || !1 === pB.animateIn) return;
          const {
            plan: lB,
            synth: JB
          } = (0, mB.f)(pB);
          JB && (VB = (0, vB.f)(JB, lB.blips))
        },
        onClose: yB
      }
    }
    var NB = dB(38087);
    const tB = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      fB = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      sB = [0, 1, 2, 0, 2, 3];

    function MB(BB, TB, dB) {
      var VB;
      let [yB, pB, lB] = TB;
      if (BB.hasPackModel("Furnace")) return null;
      const JB = ((null !== (VB = BB.getMetaInfo(dB).rot) && void 0 !== VB ? VB : 1) - 1) * Math.PI / 2,
        YB = Math.PI + JB,
        gB = Math.cos(YB),
        oB = Math.sin(YB),
        kB = [];
      for (const [DB, uB] of tB) kB.push(DB * gB, uB, -DB * oB);
      const LB = {
          positions: kB,
          indices: sB,
          uvs: fB
        },
        OB = [yB + .5 + .51 * Math.sin(JB), pB + .375, lB + .5 + .51 * Math.cos(JB)];
      return BB.createGameMesh(LB, {
        kind: "furnaceFire"
      }, OB)
    }

    function zB(BB) {
      return Math.floor(BB / 200) % 3
    }

    function wB(BB, TB, dB) {
      BB.setGameMesh(TB, {
        uvOffset: [0, dB / 3]
      })
    }
    const UB = [.12, .025, .12],
      FB = [{
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
          blendMode: pB.e.Standard,
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
          blendMode: pB.e.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class KB {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(BB, TB) {
        const dB = BB.getBlockId(TB[0], TB[1], TB[2]);
        if ("Furnace" !== BB.getMetaInfo(dB).rootName) return;
        const VB = performance.now();
        let yB = this.smokes.find((BB => BB.pos[0] === TB[0] && BB.pos[1] === TB[1] && BB.pos[2] === TB[2] && BB.rY === dB));
        if (yB || (yB = {
            pos: [TB[0], TB[1], TB[2]],
            rY: dB,
            endMs: VB,
            lastBurstMs: -1 / 0,
            pending: new Array(FB.length).fill(0),
            fire: MB(BB, TB, dB)
          }, this.smokes.push(yB), null !== yB.fire && (wB(BB, yB.fire, zB(VB)), this.shownFireFrame = -1)), yB.endMs = VB + 6e3, this.smokes.length > 4) {
          const TB = this.smokes.reduce(((BB, TB) => TB.endMs < BB.endMs ? TB : BB));
          rB(BB, TB), this.smokes.splice(this.smokes.indexOf(TB), 1)
        }
        VB - yB.lastBurstMs >= 300 && (yB.lastBurstMs = VB, FB.forEach(((BB, TB) => {
          yB.pending[TB] += BB.style.count
        })))
      }
      onAfterRender(BB, TB) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const dB = performance.now();
        this.smokes = this.smokes.filter((TB => {
          const [VB, yB, pB] = TB.pos, lB = dB < TB.endMs && BB.getBlockId(VB, yB, pB) === TB.rY;
          return lB || rB(BB, TB), lB
        }));
        const VB = zB(dB);
        if (VB !== this.shownFireFrame) {
          this.shownFireFrame = VB;
          for (const TB of this.smokes) null !== TB.fire && wB(BB, TB.fire, VB)
        }
        if (!BB.particlesEnabled()) {
          for (const BB of this.smokes) BB.pending.fill(0);
          return
        }
        const yB = Math.min(TB, 250) / 1e3;
        for (const pB of this.smokes) {
          const [TB, VB, lB] = pB.pos;
          if (0 !== BB.getBlockId(TB, VB + 1, lB)) {
            pB.pending.fill(0);
            continue
          }
          const JB = (pB.endMs - dB) / 6e3,
            YB = this.centre;
          YB[0] = TB + .5, YB[1] = VB + 1.275, YB[2] = lB + .5, FB.forEach(((TB, dB) => {
            pB.pending[dB] += TB.perSecond * JB * yB;
            const VB = Math.floor(pB.pending[dB]);
            VB > 0 && this.emit(BB, dB, YB, VB) && (pB.pending[dB] -= VB)
          }))
        }
      }
      dispose(BB) {
        for (const dB of this.smokes) rB(BB, dB);
        this.smokes = [];
        for (const dB of null !== (TB = this.puffers) && void 0 !== TB ? TB : []) {
          var TB;
          dB.dispose()
        }
        this.puffers = null
      }
      emit(BB, TB, dB, VB) {
        return this.puffers ??= FB.map((BB => {
          let {
            style: TB,
            perSecond: dB
          } = BB;
          const VB = (TB.count / .3 + dB) * TB.life[1];
          return new NB.g(TB, Math.ceil(4 * VB), UB)
        })), this.puffers[TB].emit(BB, dB, this.renderFrame, VB)
      }
    }

    function rB(BB, TB) {
      null !== TB.fire && (BB.disposeGameMesh(TB.fire), TB.fire = null)
    }

    function IB() {
      let BB;
      const TB = new KB;
      return {
        onCreate(TB) {
          BB = TB
        },
        onReceivedMessageFromServer(dB, VB) {
          dB === lB.x && TB.start(BB, VB)
        },
        onAfterRender(dB) {
          TB.onAfterRender(BB, dB)
        },
        onClose() {
          TB.dispose(BB)
        }
      }
    }

    function cB(BB, TB, dB, VB) {
      return {
        dialogue: iB(VB.localPlayerId),
        fishing: EB(VB.localPlayerId),
        furnaceSmoke: IB(),
        ironChest: yB()
      }
    }

    function SB(BB, TB) {
      for (const yB of [BB, ...null !== TB && void 0 !== TB ? TB : []]) try {
        var dB;
        null === yB || void 0 === yB || null === (dB = yB.onClose) || void 0 === dB || dB.call(yB)
      } catch (VB) {
        console.error("Error in client onClose callback", VB)
      }
    }
  },
  38087: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      g: () => pB
    });
    const VB = 1 / .6,
      yB = {
        kind: "smokePuff"
      };
    class pB {
      constructor(BB, TB, dB) {
        this.style = BB, this.Kk = TB, this.half = dB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, TB, dB) {
        let pB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return dB !== this.lastFrame && (this.lastFrame = dB, this.particles || (this.particles = BB.createParticles(function(BB, TB) {
          const [
            [dB, pB, lB],
            [JB, YB, gB]
          ] = BB.colours;
          return {
            texture: BB.soft ? yB : "square_particle",
            Kk: TB,
            minLifeTime: BB.life[0] / VB,
            maxLifeTime: BB.life[1] / VB,
            minEmitPower: BB.power[0] * VB,
            maxEmitPower: BB.power[1] * VB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * VB * VB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [dB, pB, lB, BB.alpha],
              maxColor: [JB, YB, gB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [dB, pB, lB, 0],
              maxColor: [JB, YB, gB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.Kk), {
          pos: TB,
          half: this.half
        })), this.particles.moveTo(TB, this.half), this.particles.emit(pB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  4247: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => VB,
      e: () => pB,
      i: () => YB,
      j: () => lB
    });
    const VB = ["sine", "triangle", "square", "sawtooth"],
      yB = 55,
      pB = {
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

    function lB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(pB, BB) ? pB[BB] : null
    }

    function JB(BB, TB, dB) {
      return Math.min(dB, Math.max(TB, BB))
    }

    function YB(BB) {
      const TB = JB(BB.durationMs, 10, 500),
        dB = JB(BB.attackMs, 0, TB),
        {
          intonation: yB
        } = BB;
      return {
        waveform: VB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: JB(BB.pitchHz, 20, 4e3),
        glideSemitones: JB(BB.glideSemitones, -24, 24),
        durationMs: TB,
        attackMs: dB,
        releaseMs: JB(BB.releaseMs, 0, TB - dB),
        lowpassHz: null === BB.lowpassHz ? null : JB(BB.lowpassHz, 20, 2e4),
        volume: JB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: JB(yB.variationSemitones, 0, 6),
          declineSemitones: JB(yB.declineSemitones, 0, 12),
          questionRiseSemitones: JB(yB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: JB(yB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: JB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);