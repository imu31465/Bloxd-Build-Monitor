export const id = 27;
export const ids = [27];
export const modules = {
  5011: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => PB,
      c: () => jB
    });
    var TB = ZB(5016),
      JB = ZB(342);
    const oB = 120,
      GB = 260,
      vB = 1.15,
      kB = 1.2,
      cB = 2,
      nB = 1.08,
      hB = .8,
      zB = .95,
      FB = 8,
      NB = "[\"')\\]\u300d\u300f\uff09]*",
      gB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${NB}$`),
      qB = new RegExp(`[?\uff1f]${NB}$`),
      yB = new RegExp(`[!\uff01]${NB}$`),
      UB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      WB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      dB = new RegExp(`[${WB}]`),
      CB = new RegExp(`[${WB}]|[^${WB}]+`, "g"),
      QB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function sB(BB) {
      let IB = 2166136261;
      for (let ZB = 0; ZB < BB.length; ZB++) IB ^= BB.charCodeAt(ZB), IB = Math.imul(IB, 16777619);
      return (IB >>> 0) / 4294967295 * 2 - 1
    }

    function wB(BB) {
      var IB;
      if (dB.test(BB)) return 1;
      const ZB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        TB = ZB.replace(/[^0-9]/g, "");
      if (TB.length > 0 && !/\p{L}/u.test(ZB)) return Math.min(TB.length, 4);
      const JB = null !== (IB = ZB.match(QB)) && void 0 !== IB ? IB : [];
      if (0 === JB.length) {
        var oB, GB;
        const BB = null !== (oB = null === (GB = ZB.match(/\p{L}/gu)) || void 0 === GB ? void 0 : GB.length) && void 0 !== oB ? oB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), FB)
      }
      const vB = ZB.replace(/[^\p{L}]/gu, ""),
        kB = JB.length > 1 && "e" === JB.at(-1) && vB.endsWith("e") && !vB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(JB.length - (kB ? 1 : 0), FB)
    }

    function OB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function YB(BB) {
      const IB = BB.replace(/[^\p{L}]/gu, "");
      return IB.length >= 2 && IB === IB.toUpperCase() && IB !== IB.toLowerCase()
    }

    function iB(BB, IB) {
      var ZB;
      const FB = IB && (0, TB.j)(IB),
        NB = null !== (ZB = null === FB || void 0 === FB ? void 0 : FB.syllableMs) && void 0 !== ZB ? ZB : TB.c,
        WB = function(BB) {
          const IB = [];
          for (const TB of (0, JB.rc)(BB))
            if ("string" === typeof TB)
              for (const BB of TB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  IB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!dB.test(BB)) {
                  IB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let TB = !0;
                for (const JB of null !== (ZB = BB.match(CB)) && void 0 !== ZB ? ZB : []) {
                  var ZB;
                  const BB = IB.at(-1);
                  TB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || dB.test(JB) || /[\p{L}\p{N}]/u.test(JB) ? (TB || IB.push({
                    kind: "space",
                    text: "\u200b"
                  }), IB.push({
                    kind: "word",
                    text: JB,
                    delayMs: 0
                  }), TB = !1) : BB.text += JB
                }
              } else IB.push({
                kind: "icon",
                text: TB.icon,
                delayMs: 0
              });
          return IB
        }(BB),
        QB = [];
      let iB = [];
      for (const TB of WB) "space" !== TB.kind && (iB.push(TB), gB.test(TB.text) && (QB.push(iB), iB = []));
      QB.push(iB);
      const pB = [];
      let aB = 0;
      for (const TB of QB) {
        var HB, MB;
        const BB = null !== (HB = null === (MB = TB.at(-1)) || void 0 === MB ? void 0 : MB.text) && void 0 !== HB ? HB : "",
          IB = qB.test(BB),
          ZB = yB.test(BB),
          JB = TB.map((BB => "word" === BB.kind ? wB(BB.text) : 1)),
          WB = JB.findLastIndex((BB => BB > 0));
        for (const [qB, yB] of TB.entries()) {
          const BB = "word" === yB.kind,
            TB = JB[qB];
          yB.delayMs = aB;
          for (let JB = 0; FB && JB < TB; JB++) {
            const {
              intonation: oB
            } = FB;
            let GB = WB > 0 ? -oB.declineSemitones * (qB / WB) : 0;
            GB += sB(`${OB(yB.text)}|${JB}`) * oB.variationSemitones;
            const gB = Math.min(1, oB.variationSemitones);
            let UB = FB.glideSemitones,
              dB = 1;
            ZB && (GB += oB.exclaimLiftSemitones, dB *= vB), IB && qB === WB && (GB += oB.questionRiseSemitones * (TB > 1 ? .5 + .5 * JB / (TB - 1) : 1), JB === TB - 1 && (UB = Math.abs(UB) + oB.questionRiseSemitones / 2)), BB && YB(yB.text) && (GB += cB * gB, dB *= kB), TB > 1 && 0 === JB && (GB += hB * gB, dB *= nB), pB.push({
              atMs: aB + JB * NB,
              semitones: GB,
              glideSemitones: UB,
              durationMs: JB < TB - 1 ? Math.min(FB.durationMs, NB * zB) : FB.durationMs,
              level: dB
            })
          }
          aB += TB * NB + (gB.test(yB.text) ? GB : UB.test(yB.text) ? oB : 0)
        }
      }
      return {
        pieces: WB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: pB
      }
    }
    var pB = ZB(1248),
      aB = ZB(1310),
      HB = ZB(2003);

    function MB(BB) {
      if ("string" === typeof BB) return BB;
      const IB = aB.h.get().getCurrentLanguageCode();
      return (0, pB.w)(IB, BB.translationKey, (0, pB.s)(BB.params, HB.b.shown))
    }

    function jB(BB) {
      const IB = void 0 === BB.voice ? null : (0, TB.k)(BB.voice),
        ZB = IB && (0, TB.j)(IB);
      return {
        plan: iB(MB(BB.line), ZB),
        synth: ZB
      }
    }

    function PB(BB) {
      const IB = [];
      let ZB = [];
      for (const [JB, oB] of BB.entries()) {
        var TB;
        "space" === oB.kind && (" " !== oB.text || "icon" !== (null === (TB = BB[JB + 1]) || void 0 === TB ? void 0 : TB.kind)) ? (ZB.length > 0 && IB.push(ZB), IB.push([oB]), ZB = []) : ZB.push(oB)
      }
      return ZB.length > 0 && IB.push(ZB), IB
    }
  },
  5019: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => nB,
      g: () => hB
    });
    var TB = ZB(5028),
      JB = ZB(20);
    const oB = .25,
      GB = .85,
      vB = .02,
      kB = .01;

    function cB(BB, IB, ZB, TB, JB, oB, vB) {
      const {
        waveform: kB,
        pitchHz: cB,
        attackMs: nB,
        releaseMs: hB,
        lowpassHz: zB
      } = ZB, FB = JB + TB.durationMs / 1e3, NB = cB * 2 ** (TB.semitones / 12), gB = BB.createOscillator();
      gB.type = kB, gB.frequency.setValueAtTime(NB, JB), gB.frequency.exponentialRampToValueAtTime(NB * 2 ** (TB.glideSemitones / 12), FB);
      const qB = JB + Math.min(nB, TB.durationMs) / 1e3,
        yB = BB.createGain();
      yB.gain.setValueAtTime(0, JB), yB.gain.linearRampToValueAtTime(oB, qB), yB.gain.linearRampToValueAtTime(oB * GB, Math.max(qB, FB - hB / 1e3)), yB.gain.linearRampToValueAtTime(0, FB);
      const UB = [gB];
      if (null !== zB) {
        const IB = BB.createBiquadFilter();
        IB.type = "lowpass", IB.frequency.value = zB, UB.push(IB)
      }
      UB.push(yB, IB);
      for (let GB = 1; GB < UB.length; GB++) UB[GB - 1].connect(UB[GB]);
      return gB.onended = () => {
        for (const BB of UB.slice(0, -1)) BB.disconnect();
        vB()
      }, gB.start(JB), gB.stop(FB), gB
    }

    function nB(BB, IB, ZB, TB, JB, GB) {
      if (0 === TB.length) return GB(), () => {};
      const nB = oB * ZB.volume * JB,
        hB = BB.createGain();
      hB.connect(IB);
      const zB = BB.currentTime + vB,
        FB = new Set;
      for (const oB of TB) {
        const IB = cB(BB, hB, ZB, oB, zB + oB.atMs / 1e3, nB * oB.level, (() => {
          FB.delete(IB), 0 === FB.size && (hB.disconnect(), GB())
        }));
        FB.add(IB)
      }
      return () => {
        const IB = BB.currentTime;
        hB.gain.setTargetAtTime(0, IB, kB);
        for (const BB of FB) try {
          BB.stop(IB + 5 * kB)
        } catch {}
      }
    }

    function hB(BB, IB) {
      var ZB;
      const oB = TB.Howler.ctx,
        GB = TB.Howler.masterGain;
      if (!oB || !GB || !JB.d.get("soundOnFromAd")) return () => {};
      const vB = TB.Howler;
      return null === (ZB = vB._autoResume) || void 0 === ZB || ZB.call(vB), nB(oB, GB, BB, IB, JB.d.get("soundVolume"), (() => {
        var BB;
        null === (BB = vB._autoSuspend) || void 0 === BB || BB.call(vB)
      }))
    }
  },
  39211: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      closeClientGame: () => RB,
      createDefaultClientPlugins: () => PB
    });
    var TB = ZB(360);

    function JB() {
      let BB;
      return {
        onCreate(IB) {
          BB = IB
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(IB, ZB, JB, oB, GB, vB) {
          var kB, cB;
          if ("Iron Chest" !== BB.getMetaInfo(GB).rootName) return;
          if (!BB.hasEffect(IB, "Thief")) return;
          const nB = BB.getBlockData(ZB, JB, oB);
          return BB.getPlayerDbId(IB) !== (null === nB || void 0 === nB || null === (kB = nB.persisted) || void 0 === kB || null === (cB = kB.shared) || void 0 === cB ? void 0 : cB.ownerDbId) ? (BB.sendMessage(IB, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: TB.P.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var oB = ZB(4416),
      GB = ZB(1300);
    const vB = 8.4,
      kB = 1e-4,
      cB = .15,
      nB = .04,
      hB = [.12, .04, .12],
      zB = 26,
      FB = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        ah: 1,
        minLifeTime: kB,
        maxLifeTime: kB,
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
        blendMode: oB.g.Standard
      },
      NB = {
        texture: "bubble",
        mipmaps: !1,
        ah: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: zB,
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
        blendMode: oB.g.Standard
      },
      gB = [0, 0, 0],
      qB = [0, 0, 0];

    function yB(BB) {
      const IB = new Map;
      let ZB = null;

      function TB(BB) {
        var IB, ZB;
        null === (IB = BB.bubbles) || void 0 === IB || IB.stop(), null === (ZB = BB.fish) || void 0 === ZB || ZB.stop()
      }

      function JB(ZB) {
        if (!ZB.readDrawnPosition(BB, qB)) {
          for (const BB of IB.values()) {
            var TB;
            null === (TB = BB.bubbles) || void 0 === TB || TB.setEmitRate(0)
          }
          return
        }
        const JB = performance.now();
        for (const [BB, GB] of IB) {
          var oB;
          if (null === (oB = GB.bubbles) || void 0 === oB || oB.setEmitRate(0), !ZB.readDrawnPosition(BB, gB)) continue;
          if (!((gB[0] - qB[0]) ** 2 + (gB[1] - qB[1]) ** 2 + (gB[2] - qB[2]) ** 2 < 900)) continue;
          const IB = Math.max(0, GB.biteAt - JB),
            TB = GB.approachDurationMs > 0 ? Math.min(1, 1 - IB / GB.approachDurationMs) : 1,
            kB = (GB.approachDurationMs - IB) / 1e3,
            yB = GB.phase + .25 * Math.sin(1.7 * kB + GB.phase),
            UB = Math.min(GB.approachDurationMs / 3e3 * 2.8, vB) * (1 - TB) * (1 + .15 * Math.sin(2.1 * kB + GB.phase)),
            WB = Math.min(1, 4 * (1 - TB)),
            dB = (.45 * Math.sin(4.1 * kB + GB.phase) + .18 * Math.sin(9.7 * kB + 2 * GB.phase)) * WB,
            CB = gB[0] + Math.cos(yB) * UB - Math.sin(yB) * dB,
            QB = Math.ceil(GB.surfaceY),
            sB = gB[2] + Math.sin(yB) * UB + Math.cos(yB) * dB,
            {
              fishAt: wB,
              bubblesAt: OB
            } = GB;
          wB[0] = OB[0] = CB, wB[1] = QB + cB, OB[1] = QB + nB, wB[2] = OB[2] = sB, GB.fish ??= ZB.createParticles(FB, {
            pos: wB
          }), GB.fish.moveTo(wB), GB.fish.emit(1), GB.bubbles ??= ZB.createParticles(NB, {
            pos: OB,
            half: hB
          }), GB.bubbles.moveTo(OB), GB.bubbles.setEmitRate(zB + 32 * (.5 + .5 * Math.sin(9 * kB + GB.phase)) ** 4 + 13 * TB)
        }
      }
      return {
        onCreate(BB) {
          ZB = BB
        },
        onAfterRender() {
          ZB && JB(ZB)
        },
        onClose() {
          for (const BB of IB.values()) TB(BB);
          IB.clear(), ZB = null
        },
        onReceivedMessageFromServer(BB, ZB) {
          if (BB !== GB.D) return;
          const {
            hookId: JB,
            waiting: oB
          } = ZB;
          if (oB) IB.has(JB) || IB.set(JB, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + oB.remainingMs,
            approachDurationMs: oB.durationMs,
            surfaceY: oB.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const BB = IB.get(JB);
            BB && TB(BB), IB.delete(JB)
          }
        }
      }
    }
    var UB = ZB(5019),
      WB = ZB(5011);

    function dB(BB) {
      let IB, ZB = null,
        TB = null;
      const JB = () => {
        var BB;
        null === (BB = TB) || void 0 === BB || BB(), TB = null
      };
      return {
        onCreate(TB) {
          IB = TB, ZB = IB.getClientOption(BB, "dialogue")
        },
        onAfterRender() {
          if (!IB) return;
          const oB = IB.getClientOption(BB, "dialogue");
          if (oB === ZB) return;
          if (ZB = oB, JB(), !oB || !1 === oB.animateIn) return;
          const {
            plan: GB,
            synth: vB
          } = (0, WB.c)(oB);
          vB && (TB = (0, UB.g)(vB, GB.blips))
        },
        onClose: JB
      }
    }
    var CB = ZB(39216);
    const QB = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      sB = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      wB = [0, 1, 2, 0, 2, 3];

    function OB(BB, IB, ZB) {
      var TB;
      let [JB, oB, GB] = IB;
      if (BB.hasPackModel("Furnace")) return null;
      const vB = ((null !== (TB = BB.getMetaInfo(ZB).rot) && void 0 !== TB ? TB : 1) - 1) * Math.PI / 2,
        kB = Math.PI + vB,
        cB = Math.cos(kB),
        nB = Math.sin(kB),
        hB = [];
      for (const [NB, gB] of QB) hB.push(NB * cB, gB, -NB * nB);
      const zB = {
          positions: hB,
          indices: wB,
          uvs: sB
        },
        FB = [JB + .5 + .51 * Math.sin(vB), oB + .375, GB + .5 + .51 * Math.cos(vB)];
      return BB.createGameMesh(zB, {
        kind: "furnaceFire"
      }, FB)
    }

    function YB(BB) {
      return Math.floor(BB / 200) % 3
    }

    function iB(BB, IB, ZB) {
      BB.setGameMesh(IB, {
        uvOffset: [0, ZB / 3]
      })
    }
    const pB = [.12, .025, .12],
      aB = [{
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
          blendMode: oB.g.Standard,
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
          blendMode: oB.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class HB {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(BB, IB) {
        const ZB = BB.getBlockId(IB[0], IB[1], IB[2]);
        if ("Furnace" !== BB.getMetaInfo(ZB).rootName) return;
        const TB = performance.now();
        let JB = this.smokes.find((BB => BB.pos[0] === IB[0] && BB.pos[1] === IB[1] && BB.pos[2] === IB[2] && BB.KG === ZB));
        if (JB || (JB = {
            pos: [IB[0], IB[1], IB[2]],
            KG: ZB,
            endMs: TB,
            lastBurstMs: -1 / 0,
            pending: new Array(aB.length).fill(0),
            fire: OB(BB, IB, ZB)
          }, this.smokes.push(JB), null !== JB.fire && (iB(BB, JB.fire, YB(TB)), this.shownFireFrame = -1)), JB.endMs = TB + 6e3, this.smokes.length > 4) {
          const IB = this.smokes.reduce(((BB, IB) => IB.endMs < BB.endMs ? IB : BB));
          MB(BB, IB), this.smokes.splice(this.smokes.indexOf(IB), 1)
        }
        TB - JB.lastBurstMs >= 300 && (JB.lastBurstMs = TB, aB.forEach(((BB, IB) => {
          JB.pending[IB] += BB.style.count
        })))
      }
      onAfterRender(BB, IB) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const ZB = performance.now();
        this.smokes = this.smokes.filter((IB => {
          const [TB, JB, oB] = IB.pos, GB = ZB < IB.endMs && BB.getBlockId(TB, JB, oB) === IB.KG;
          return GB || MB(BB, IB), GB
        }));
        const TB = YB(ZB);
        if (TB !== this.shownFireFrame) {
          this.shownFireFrame = TB;
          for (const IB of this.smokes) null !== IB.fire && iB(BB, IB.fire, TB)
        }
        if (!BB.particlesEnabled()) {
          for (const BB of this.smokes) BB.pending.fill(0);
          return
        }
        const JB = Math.min(IB, 250) / 1e3;
        for (const oB of this.smokes) {
          const [IB, TB, GB] = oB.pos;
          if (0 !== BB.getBlockId(IB, TB + 1, GB)) {
            oB.pending.fill(0);
            continue
          }
          const vB = (oB.endMs - ZB) / 6e3,
            kB = this.centre;
          kB[0] = IB + .5, kB[1] = TB + 1.275, kB[2] = GB + .5, aB.forEach(((IB, ZB) => {
            oB.pending[ZB] += IB.perSecond * vB * JB;
            const TB = Math.floor(oB.pending[ZB]);
            TB > 0 && this.emit(BB, ZB, kB, TB) && (oB.pending[ZB] -= TB)
          }))
        }
      }
      dispose(BB) {
        for (const ZB of this.smokes) MB(BB, ZB);
        this.smokes = [];
        for (const ZB of null !== (IB = this.puffers) && void 0 !== IB ? IB : []) {
          var IB;
          ZB.dispose()
        }
        this.puffers = null
      }
      emit(BB, IB, ZB, TB) {
        return this.puffers ??= aB.map((BB => {
          let {
            style: IB,
            perSecond: ZB
          } = BB;
          const TB = (IB.count / .3 + ZB) * IB.life[1];
          return new CB.d(IB, Math.ceil(4 * TB), pB)
        })), this.puffers[IB].emit(BB, ZB, this.renderFrame, TB)
      }
    }

    function MB(BB, IB) {
      null !== IB.fire && (BB.disposeGameMesh(IB.fire), IB.fire = null)
    }

    function jB() {
      let BB;
      const IB = new HB;
      return {
        onCreate(IB) {
          BB = IB
        },
        onReceivedMessageFromServer(ZB, TB) {
          ZB === GB.F && IB.start(BB, TB)
        },
        onAfterRender(ZB) {
          IB.onAfterRender(BB, ZB)
        },
        onClose() {
          IB.dispose(BB)
        }
      }
    }

    function PB(BB, IB, ZB, TB) {
      return {
        dialogue: dB(TB.localPlayerId),
        fishing: yB(TB.localPlayerId),
        furnaceSmoke: jB(),
        ironChest: JB()
      }
    }

    function RB(BB, IB) {
      for (const JB of [BB, ...null !== IB && void 0 !== IB ? IB : []]) try {
        var ZB;
        null === JB || void 0 === JB || null === (ZB = JB.onClose) || void 0 === ZB || ZB.call(JB)
      } catch (TB) {
        console.error("Error in client onClose callback", TB)
      }
    }
  },
  39216: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB,
      d: () => oB
    });
    const TB = 1 / .6,
      JB = {
        kind: "smokePuff"
      };
    class oB {
      constructor(BB, IB, ZB) {
        this.style = BB, this.ah = IB, this.half = ZB, this.particles = null, this.lastFrame = -1
      }
      emit(BB, IB, ZB) {
        let oB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZB !== this.lastFrame && (this.lastFrame = ZB, this.particles || (this.particles = BB.createParticles(function(BB, IB) {
          const [
            [ZB, oB, GB],
            [vB, kB, cB]
          ] = BB.colours;
          return {
            texture: BB.soft ? JB : "square_particle",
            ah: IB,
            minLifeTime: BB.life[0] / TB,
            maxLifeTime: BB.life[1] / TB,
            minEmitPower: BB.power[0] * TB,
            maxEmitPower: BB.power[1] * TB,
            minSize: BB.size[0],
            maxSize: BB.size[1],
            emitRate: 0,
            gravity: [0, BB.lift * TB * TB, 0],
            dir1: [-BB.spread, 1, -BB.spread],
            dir2: [BB.spread, 1, BB.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZB, oB, GB, BB.alpha],
              maxColor: [vB, kB, cB, BB.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZB, oB, GB, 0],
              maxColor: [vB, kB, cB, 0]
            }],
            blendMode: BB.blendMode
          }
        }(this.style, this.ah), {
          pos: IB,
          half: this.half
        })), this.particles.moveTo(IB, this.half), this.particles.emit(oB), !0)
      }
      dispose() {
        var BB;
        null === (BB = this.particles) || void 0 === BB || BB.stop(), this.particles = null
      }
    }
  },
  5016: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB,
      f: () => TB,
      i: () => oB,
      j: () => kB,
      k: () => GB
    });
    const TB = ["sine", "triangle", "square", "sawtooth"],
      JB = 55,
      oB = {
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

    function GB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(oB, BB) ? oB[BB] : null
    }

    function vB(BB, IB, ZB) {
      return Math.min(ZB, Math.max(IB, BB))
    }

    function kB(BB) {
      const IB = vB(BB.durationMs, 10, 500),
        ZB = vB(BB.attackMs, 0, IB),
        {
          intonation: JB
        } = BB;
      return {
        waveform: TB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: vB(BB.pitchHz, 20, 4e3),
        glideSemitones: vB(BB.glideSemitones, -24, 24),
        durationMs: IB,
        attackMs: ZB,
        releaseMs: vB(BB.releaseMs, 0, IB - ZB),
        lowpassHz: null === BB.lowpassHz ? null : vB(BB.lowpassHz, 20, 2e4),
        volume: vB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: vB(JB.variationSemitones, 0, 6),
          declineSemitones: vB(JB.declineSemitones, 0, 12),
          questionRiseSemitones: vB(JB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: vB(JB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: vB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);