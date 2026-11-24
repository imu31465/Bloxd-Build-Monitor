export const id = 27;
export const ids = [27];
export const modules = {
  4939: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => IT,
      e: () => XT
    });
    var WT = mT(4948),
      zT = mT(351);
    const MT = 120,
      gT = 260,
      nT = 1.15,
      HT = 1.2,
      kT = 2,
      jT = 1.08,
      lT = .8,
      LT = .95,
      pT = 8,
      BT = "[\"')\\]\u300d\u300f\uff09]*",
      ZT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${BT}$`),
      cT = new RegExp(`[?\uff1f]${BT}$`),
      vT = new RegExp(`[!\uff01]${BT}$`),
      fT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      qT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      iT = new RegExp(`[${qT}]`),
      bT = new RegExp(`[${qT}]|[^${qT}]+`, "g"),
      OT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eT(TT) {
      let UT = 2166136261;
      for (let mT = 0; mT < TT.length; mT++) UT ^= TT.charCodeAt(mT), UT = Math.imul(UT, 16777619);
      return (UT >>> 0) / 4294967295 * 2 - 1
    }

    function YT(TT) {
      var UT;
      if (iT.test(TT)) return 1;
      const mT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        WT = mT.replace(/[^0-9]/g, "");
      if (WT.length > 0 && !/\p{L}/u.test(mT)) return Math.min(WT.length, 4);
      const zT = null !== (UT = mT.match(OT)) && void 0 !== UT ? UT : [];
      if (0 === zT.length) {
        var MT, gT;
        const TT = null !== (MT = null === (gT = mT.match(/\p{L}/gu)) || void 0 === gT ? void 0 : gT.length) && void 0 !== MT ? MT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), pT)
      }
      const nT = mT.replace(/[^\p{L}]/gu, ""),
        HT = zT.length > 1 && "e" === zT.at(-1) && nT.endsWith("e") && !nT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(zT.length - (HT ? 1 : 0), pT)
    }

    function JT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function xT(TT) {
      const UT = TT.replace(/[^\p{L}]/gu, "");
      return UT.length >= 2 && UT === UT.toUpperCase() && UT !== UT.toLowerCase()
    }

    function dT(TT, UT) {
      var mT;
      const pT = UT && (0, WT.k)(UT),
        BT = null !== (mT = null === pT || void 0 === pT ? void 0 : pT.syllableMs) && void 0 !== mT ? mT : WT.d,
        qT = function(TT) {
          const UT = [];
          for (const WT of (0, zT.Wb)(TT))
            if ("string" === typeof WT)
              for (const TT of WT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  UT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!iT.test(TT)) {
                  UT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let WT = !0;
                for (const zT of null !== (mT = TT.match(bT)) && void 0 !== mT ? mT : []) {
                  var mT;
                  const TT = UT.at(-1);
                  WT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || iT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (WT || UT.push({
                    kind: "space",
                    text: "\u200b"
                  }), UT.push({
                    kind: "word",
                    text: zT,
                    delayMs: 0
                  }), WT = !1) : TT.text += zT
                }
              } else UT.push({
                kind: "icon",
                text: WT.icon,
                delayMs: 0
              });
          return UT
        }(TT),
        OT = [];
      let dT = [];
      for (const WT of qT) "space" !== WT.kind && (dT.push(WT), ZT.test(WT.text) && (OT.push(dT), dT = []));
      OT.push(dT);
      const wT = [];
      let tT = 0;
      for (const WT of OT) {
        var aT, yT;
        const TT = null !== (aT = null === (yT = WT.at(-1)) || void 0 === yT ? void 0 : yT.text) && void 0 !== aT ? aT : "",
          UT = cT.test(TT),
          mT = vT.test(TT),
          zT = WT.map((TT => "word" === TT.kind ? YT(TT.text) : 1)),
          qT = zT.findLastIndex((TT => TT > 0));
        for (const [cT, vT] of WT.entries()) {
          const TT = "word" === vT.kind,
            WT = zT[cT];
          vT.delayMs = tT;
          for (let zT = 0; pT && zT < WT; zT++) {
            const {
              intonation: MT
            } = pT;
            let gT = qT > 0 ? -MT.declineSemitones * (cT / qT) : 0;
            gT += eT(`${JT(vT.text)}|${zT}`) * MT.variationSemitones;
            const ZT = Math.min(1, MT.variationSemitones);
            let fT = pT.glideSemitones,
              iT = 1;
            mT && (gT += MT.exclaimLiftSemitones, iT *= nT), UT && cT === qT && (gT += MT.questionRiseSemitones * (WT > 1 ? .5 + .5 * zT / (WT - 1) : 1), zT === WT - 1 && (fT = Math.abs(fT) + MT.questionRiseSemitones / 2)), TT && xT(vT.text) && (gT += kT * ZT, iT *= HT), WT > 1 && 0 === zT && (gT += lT * ZT, iT *= jT), wT.push({
              atMs: tT + zT * BT,
              semitones: gT,
              glideSemitones: fT,
              durationMs: zT < WT - 1 ? Math.min(pT.durationMs, BT * LT) : pT.durationMs,
              level: iT
            })
          }
          tT += WT * BT + (ZT.test(vT.text) ? gT : fT.test(vT.text) ? MT : 0)
        }
      }
      return {
        pieces: qT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: wT
      }
    }
    var wT = mT(1288),
      tT = mT(1345),
      aT = mT(2054);

    function yT(TT) {
      if ("string" === typeof TT) return TT;
      const UT = tT.f.get().getCurrentLanguageCode();
      return (0, wT.r)(UT, TT.translationKey, (0, wT.o)(TT.params, aT.d.shown))
    }

    function XT(TT) {
      const UT = void 0 === TT.voice ? null : (0, WT.l)(TT.voice),
        mT = UT && (0, WT.k)(UT);
      return {
        plan: dT(yT(TT.line), mT),
        synth: mT
      }
    }

    function IT(TT) {
      const UT = [];
      let mT = [];
      for (const [zT, MT] of TT.entries()) {
        var WT;
        "space" === MT.kind && (" " !== MT.text || "icon" !== (null === (WT = TT[zT + 1]) || void 0 === WT ? void 0 : WT.kind)) ? (mT.length > 0 && UT.push(mT), UT.push([MT]), mT = []) : mT.push(MT)
      }
      return mT.length > 0 && UT.push(mT), UT
    }
  },
  4956: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => jT,
      f: () => lT
    });
    var WT = mT(4959),
      zT = mT(25);
    const MT = .25,
      gT = .85,
      nT = .02,
      HT = .01;

    function kT(TT, UT, mT, WT, zT, MT, nT) {
      const {
        waveform: HT,
        pitchHz: kT,
        attackMs: jT,
        releaseMs: lT,
        lowpassHz: LT
      } = mT, pT = zT + WT.durationMs / 1e3, BT = kT * 2 ** (WT.semitones / 12), ZT = TT.createOscillator();
      ZT.type = HT, ZT.frequency.setValueAtTime(BT, zT), ZT.frequency.exponentialRampToValueAtTime(BT * 2 ** (WT.glideSemitones / 12), pT);
      const cT = zT + Math.min(jT, WT.durationMs) / 1e3,
        vT = TT.createGain();
      vT.gain.setValueAtTime(0, zT), vT.gain.linearRampToValueAtTime(MT, cT), vT.gain.linearRampToValueAtTime(MT * gT, Math.max(cT, pT - lT / 1e3)), vT.gain.linearRampToValueAtTime(0, pT);
      const fT = [ZT];
      if (null !== LT) {
        const UT = TT.createBiquadFilter();
        UT.type = "lowpass", UT.frequency.value = LT, fT.push(UT)
      }
      fT.push(vT, UT);
      for (let gT = 1; gT < fT.length; gT++) fT[gT - 1].connect(fT[gT]);
      return ZT.onended = () => {
        for (const TT of fT.slice(0, -1)) TT.disconnect();
        nT()
      }, ZT.start(zT), ZT.stop(pT), ZT
    }

    function jT(TT, UT, mT, WT, zT, gT) {
      if (0 === WT.length) return gT(), () => {};
      const jT = MT * mT.volume * zT,
        lT = TT.createGain();
      lT.connect(UT);
      const LT = TT.currentTime + nT,
        pT = new Set;
      for (const MT of WT) {
        const UT = kT(TT, lT, mT, MT, LT + MT.atMs / 1e3, jT * MT.level, (() => {
          pT.delete(UT), 0 === pT.size && (lT.disconnect(), gT())
        }));
        pT.add(UT)
      }
      return () => {
        const UT = TT.currentTime;
        lT.gain.setTargetAtTime(0, UT, HT);
        for (const TT of pT) try {
          TT.stop(UT + 5 * HT)
        } catch {}
      }
    }

    function lT(TT, UT) {
      var mT;
      const MT = WT.Howler.ctx,
        gT = WT.Howler.masterGain;
      if (!MT || !gT || !zT.b.get("soundOnFromAd")) return () => {};
      const nT = WT.Howler;
      return null === (mT = nT._autoResume) || void 0 === mT || mT.call(nT), jT(MT, gT, TT, UT, zT.b.get("soundVolume"), (() => {
        var TT;
        null === (TT = nT._autoSuspend) || void 0 === TT || TT.call(nT)
      }))
    }
  },
  39278: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      closeClientGame: () => QT,
      createDefaultClientPlugins: () => IT
    });
    var WT = mT(366);

    function zT() {
      let TT;
      return {
        onCreate(UT) {
          TT = UT
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(UT, mT, zT, MT, gT, nT) {
          var HT, kT;
          if ("Iron Chest" !== TT.getMetaInfo(gT).rootName) return;
          if (!TT.hasEffect(UT, "Thief")) return;
          const jT = TT.getBlockData(mT, zT, MT);
          return TT.getPlayerDbId(UT) !== (null === jT || void 0 === jT || null === (HT = jT.persisted) || void 0 === HT || null === (kT = HT.shared) || void 0 === kT ? void 0 : kT.ownerDbId) ? (TT.sendMessage(UT, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: WT.R.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var MT = mT(4328),
      gT = mT(1336);
    const nT = 8.4,
      HT = 1e-4,
      kT = .15,
      jT = .04,
      lT = [.12, .04, .12],
      LT = 26,
      pT = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        fl: 1,
        minLifeTime: HT,
        maxLifeTime: HT,
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
        blendMode: MT.e.Standard
      },
      BT = {
        texture: "bubble",
        mipmaps: !1,
        fl: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: LT,
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
        blendMode: MT.e.Standard
      },
      ZT = [0, 0, 0],
      cT = [0, 0, 0];

    function vT(TT) {
      const UT = new Map;
      let mT = null;

      function WT(TT) {
        var UT, mT;
        null === (UT = TT.bubbles) || void 0 === UT || UT.stop(), null === (mT = TT.fish) || void 0 === mT || mT.stop()
      }

      function zT(mT) {
        if (!mT.readDrawnPosition(TT, cT)) {
          for (const TT of UT.values()) {
            var WT;
            null === (WT = TT.bubbles) || void 0 === WT || WT.setEmitRate(0)
          }
          return
        }
        const zT = performance.now();
        for (const [TT, gT] of UT) {
          var MT;
          if (null === (MT = gT.bubbles) || void 0 === MT || MT.setEmitRate(0), !mT.readDrawnPosition(TT, ZT)) continue;
          if (!((ZT[0] - cT[0]) ** 2 + (ZT[1] - cT[1]) ** 2 + (ZT[2] - cT[2]) ** 2 < 900)) continue;
          const UT = Math.max(0, gT.biteAt - zT),
            WT = gT.approachDurationMs > 0 ? Math.min(1, 1 - UT / gT.approachDurationMs) : 1,
            HT = (gT.approachDurationMs - UT) / 1e3,
            vT = gT.phase + .25 * Math.sin(1.7 * HT + gT.phase),
            fT = Math.min(gT.approachDurationMs / 3e3 * 2.8, nT) * (1 - WT) * (1 + .15 * Math.sin(2.1 * HT + gT.phase)),
            qT = Math.min(1, 4 * (1 - WT)),
            iT = (.45 * Math.sin(4.1 * HT + gT.phase) + .18 * Math.sin(9.7 * HT + 2 * gT.phase)) * qT,
            bT = ZT[0] + Math.cos(vT) * fT - Math.sin(vT) * iT,
            OT = Math.ceil(gT.surfaceY),
            eT = ZT[2] + Math.sin(vT) * fT + Math.cos(vT) * iT,
            {
              fishAt: YT,
              bubblesAt: JT
            } = gT;
          YT[0] = JT[0] = bT, YT[1] = OT + kT, JT[1] = OT + jT, YT[2] = JT[2] = eT, gT.fish ??= mT.createParticles(pT, {
            pos: YT
          }), gT.fish.moveTo(YT), gT.fish.emit(1), gT.bubbles ??= mT.createParticles(BT, {
            pos: JT,
            half: lT
          }), gT.bubbles.moveTo(JT), gT.bubbles.setEmitRate(LT + 32 * (.5 + .5 * Math.sin(9 * HT + gT.phase)) ** 4 + 13 * WT)
        }
      }
      return {
        onCreate(TT) {
          mT = TT
        },
        onAfterRender() {
          mT && zT(mT)
        },
        onClose() {
          for (const TT of UT.values()) WT(TT);
          UT.clear(), mT = null
        },
        onReceivedMessageFromServer(TT, mT) {
          if (TT !== gT.w) return;
          const {
            hookId: zT,
            waiting: MT
          } = mT;
          if (MT) UT.has(zT) || UT.set(zT, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + MT.remainingMs,
            approachDurationMs: MT.durationMs,
            surfaceY: MT.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const TT = UT.get(zT);
            TT && WT(TT), UT.delete(zT)
          }
        }
      }
    }
    var fT = mT(4956),
      qT = mT(4939);

    function iT(TT) {
      let UT, mT = null,
        WT = null;
      const zT = () => {
        var TT;
        null === (TT = WT) || void 0 === TT || TT(), WT = null
      };
      return {
        onCreate(WT) {
          UT = WT, mT = UT.getClientOption(TT, "dialogue")
        },
        onAfterRender() {
          if (!UT) return;
          const MT = UT.getClientOption(TT, "dialogue");
          if (MT === mT) return;
          if (mT = MT, zT(), !MT || !1 === MT.animateIn) return;
          const {
            plan: gT,
            synth: nT
          } = (0, qT.e)(MT);
          nT && (WT = (0, fT.f)(nT, gT.blips))
        },
        onClose: zT
      }
    }
    var bT = mT(39281);
    const OT = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      eT = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      YT = [0, 1, 2, 0, 2, 3];

    function JT(TT, UT, mT) {
      var WT;
      let [zT, MT, gT] = UT;
      if (TT.hasPackModel("Furnace")) return null;
      const nT = ((null !== (WT = TT.getMetaInfo(mT).rot) && void 0 !== WT ? WT : 1) - 1) * Math.PI / 2,
        HT = Math.PI + nT,
        kT = Math.cos(HT),
        jT = Math.sin(HT),
        lT = [];
      for (const [BT, ZT] of OT) lT.push(BT * kT, ZT, -BT * jT);
      const LT = {
          positions: lT,
          indices: YT,
          uvs: eT
        },
        pT = [zT + .5 + .51 * Math.sin(nT), MT + .375, gT + .5 + .51 * Math.cos(nT)];
      return TT.createGameMesh(LT, {
        kind: "furnaceFire"
      }, pT)
    }

    function xT(TT) {
      return Math.floor(TT / 200) % 3
    }

    function dT(TT, UT, mT) {
      TT.setGameMesh(UT, {
        uvOffset: [0, mT / 3]
      })
    }
    const wT = [.12, .025, .12],
      tT = [{
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
          blendMode: MT.e.Standard,
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
          blendMode: MT.e.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class aT {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(TT, UT) {
        const mT = TT.getBlockId(UT[0], UT[1], UT[2]);
        if ("Furnace" !== TT.getMetaInfo(mT).rootName) return;
        const WT = performance.now();
        let zT = this.smokes.find((TT => TT.pos[0] === UT[0] && TT.pos[1] === UT[1] && TT.pos[2] === UT[2] && TT.Gg === mT));
        if (zT || (zT = {
            pos: [UT[0], UT[1], UT[2]],
            Gg: mT,
            endMs: WT,
            lastBurstMs: -1 / 0,
            pending: new Array(tT.length).fill(0),
            fire: JT(TT, UT, mT)
          }, this.smokes.push(zT), null !== zT.fire && (dT(TT, zT.fire, xT(WT)), this.shownFireFrame = -1)), zT.endMs = WT + 6e3, this.smokes.length > 4) {
          const UT = this.smokes.reduce(((TT, UT) => UT.endMs < TT.endMs ? UT : TT));
          yT(TT, UT), this.smokes.splice(this.smokes.indexOf(UT), 1)
        }
        WT - zT.lastBurstMs >= 300 && (zT.lastBurstMs = WT, tT.forEach(((TT, UT) => {
          zT.pending[UT] += TT.style.count
        })))
      }
      onAfterRender(TT, UT) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const mT = performance.now();
        this.smokes = this.smokes.filter((UT => {
          const [WT, zT, MT] = UT.pos, gT = mT < UT.endMs && TT.getBlockId(WT, zT, MT) === UT.Gg;
          return gT || yT(TT, UT), gT
        }));
        const WT = xT(mT);
        if (WT !== this.shownFireFrame) {
          this.shownFireFrame = WT;
          for (const UT of this.smokes) null !== UT.fire && dT(TT, UT.fire, WT)
        }
        if (!TT.particlesEnabled()) {
          for (const TT of this.smokes) TT.pending.fill(0);
          return
        }
        const zT = Math.min(UT, 250) / 1e3;
        for (const MT of this.smokes) {
          const [UT, WT, gT] = MT.pos;
          if (0 !== TT.getBlockId(UT, WT + 1, gT)) {
            MT.pending.fill(0);
            continue
          }
          const nT = (MT.endMs - mT) / 6e3,
            HT = this.centre;
          HT[0] = UT + .5, HT[1] = WT + 1.275, HT[2] = gT + .5, tT.forEach(((UT, mT) => {
            MT.pending[mT] += UT.perSecond * nT * zT;
            const WT = Math.floor(MT.pending[mT]);
            WT > 0 && this.emit(TT, mT, HT, WT) && (MT.pending[mT] -= WT)
          }))
        }
      }
      dispose(TT) {
        for (const mT of this.smokes) yT(TT, mT);
        this.smokes = [];
        for (const mT of null !== (UT = this.puffers) && void 0 !== UT ? UT : []) {
          var UT;
          mT.dispose()
        }
        this.puffers = null
      }
      emit(TT, UT, mT, WT) {
        return this.puffers ??= tT.map((TT => {
          let {
            style: UT,
            perSecond: mT
          } = TT;
          const WT = (UT.count / .3 + mT) * UT.life[1];
          return new bT.e(UT, Math.ceil(4 * WT), wT)
        })), this.puffers[UT].emit(TT, mT, this.renderFrame, WT)
      }
    }

    function yT(TT, UT) {
      null !== UT.fire && (TT.disposeGameMesh(UT.fire), UT.fire = null)
    }

    function XT() {
      let TT;
      const UT = new aT;
      return {
        onCreate(UT) {
          TT = UT
        },
        onReceivedMessageFromServer(mT, WT) {
          mT === gT.A && UT.start(TT, WT)
        },
        onAfterRender(mT) {
          UT.onAfterRender(TT, mT)
        },
        onClose() {
          UT.dispose(TT)
        }
      }
    }

    function IT(TT, UT, mT, WT) {
      return {
        dialogue: iT(WT.localPlayerId),
        fishing: vT(WT.localPlayerId),
        furnaceSmoke: XT(),
        ironChest: zT()
      }
    }

    function QT(TT, UT) {
      for (const zT of [TT, ...null !== UT && void 0 !== UT ? UT : []]) try {
        var mT;
        null === zT || void 0 === zT || null === (mT = zT.onClose) || void 0 === mT || mT.call(zT)
      } catch (WT) {
        console.error("Error in client onClose callback", WT)
      }
    }
  },
  39281: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT,
      e: () => MT
    });
    const WT = 1 / .6,
      zT = {
        kind: "smokePuff"
      };
    class MT {
      constructor(TT, UT, mT) {
        this.style = TT, this.fl = UT, this.half = mT, this.particles = null, this.lastFrame = -1
      }
      emit(TT, UT, mT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return mT !== this.lastFrame && (this.lastFrame = mT, this.particles || (this.particles = TT.createParticles(function(TT, UT) {
          const [
            [mT, MT, gT],
            [nT, HT, kT]
          ] = TT.colours;
          return {
            texture: TT.soft ? zT : "square_particle",
            fl: UT,
            minLifeTime: TT.life[0] / WT,
            maxLifeTime: TT.life[1] / WT,
            minEmitPower: TT.power[0] * WT,
            maxEmitPower: TT.power[1] * WT,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            emitRate: 0,
            gravity: [0, TT.lift * WT * WT, 0],
            dir1: [-TT.spread, 1, -TT.spread],
            dir2: [TT.spread, 1, TT.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [mT, MT, gT, TT.alpha],
              maxColor: [nT, HT, kT, TT.alpha]
            }, {
              timeFraction: 1,
              minColor: [mT, MT, gT, 0],
              maxColor: [nT, HT, kT, 0]
            }],
            blendMode: TT.blendMode
          }
        }(this.style, this.fl), {
          pos: UT,
          half: this.half
        })), this.particles.moveTo(UT, this.half), this.particles.emit(MT), !0)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
    }
  },
  4948: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      e: () => WT,
      h: () => MT,
      k: () => HT,
      l: () => gT
    });
    const WT = ["sine", "triangle", "square", "sawtooth"],
      zT = 55,
      MT = {
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

    function gT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(MT, TT) ? MT[TT] : null
    }

    function nT(TT, UT, mT) {
      return Math.min(mT, Math.max(UT, TT))
    }

    function HT(TT) {
      const UT = nT(TT.durationMs, 10, 500),
        mT = nT(TT.attackMs, 0, UT),
        {
          intonation: zT
        } = TT;
      return {
        waveform: WT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: nT(TT.pitchHz, 20, 4e3),
        glideSemitones: nT(TT.glideSemitones, -24, 24),
        durationMs: UT,
        attackMs: mT,
        releaseMs: nT(TT.releaseMs, 0, UT - mT),
        lowpassHz: null === TT.lowpassHz ? null : nT(TT.lowpassHz, 20, 2e4),
        volume: nT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: nT(zT.variationSemitones, 0, 6),
          declineSemitones: nT(zT.declineSemitones, 0, 12),
          questionRiseSemitones: nT(zT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: nT(zT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: nT(TT.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);