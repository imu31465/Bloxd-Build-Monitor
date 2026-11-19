export const id = 27;
export const ids = [27];
export const modules = {
  4328: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => aT,
      h: () => UT
    });
    var iT = IT(4336),
      zT = IT(306);
    const kT = 120,
      WT = 260,
      XT = 1.15,
      BT = 1.2,
      FT = 2,
      ST = 1.08,
      DT = .8,
      LT = .95,
      xT = 8,
      cT = "[\"')\\]\u300d\u300f\uff09]*",
      KT = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${cT}$`),
      MT = new RegExp(`[?\uff1f]${cT}$`),
      rT = new RegExp(`[!\uff01]${cT}$`),
      AT = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      gT = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      hT = new RegExp(`[${gT}]`),
      wT = new RegExp(`[${gT}]|[^${gT}]+`, "g"),
      mT = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function eT(TT) {
      let oT = 2166136261;
      for (let IT = 0; IT < TT.length; IT++) oT ^= TT.charCodeAt(IT), oT = Math.imul(oT, 16777619);
      return (oT >>> 0) / 4294967295 * 2 - 1
    }

    function RT(TT) {
      var oT;
      if (hT.test(TT)) return 1;
      const IT = TT.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        iT = IT.replace(/[^0-9]/g, "");
      if (iT.length > 0 && !/\p{L}/u.test(IT)) return Math.min(iT.length, 4);
      const zT = null !== (oT = IT.match(mT)) && void 0 !== oT ? oT : [];
      if (0 === zT.length) {
        var kT, WT;
        const TT = null !== (kT = null === (WT = IT.match(/\p{L}/gu)) || void 0 === WT ? void 0 : WT.length) && void 0 !== kT ? kT : 0;
        return 0 === TT ? 0 : Math.min(Math.max(1, Math.round(TT / 2.5)), xT)
      }
      const XT = IT.replace(/[^\p{L}]/gu, ""),
        BT = zT.length > 1 && "e" === zT.at(-1) && XT.endsWith("e") && !XT.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(TT.replace(/[^\p{L}]/gu, ""));
      return Math.min(zT.length - (BT ? 1 : 0), xT)
    }

    function uT(TT) {
      return TT.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function vT(TT) {
      const oT = TT.replace(/[^\p{L}]/gu, "");
      return oT.length >= 2 && oT === oT.toUpperCase() && oT !== oT.toLowerCase()
    }

    function ET(TT, oT) {
      var IT;
      const xT = oT && (0, iT.j)(oT),
        cT = null !== (IT = null === xT || void 0 === xT ? void 0 : xT.syllableMs) && void 0 !== IT ? IT : iT.d,
        gT = function(TT) {
          const oT = [];
          for (const iT of (0, zT.ac)(TT))
            if ("string" === typeof iT)
              for (const TT of iT.split(/(\s+)/)) {
                if ("" === TT) continue;
                if (/^\s+$/.test(TT)) {
                  oT.push({
                    kind: "space",
                    text: TT
                  });
                  continue
                }
                if (!hT.test(TT)) {
                  oT.push({
                    kind: "word",
                    text: TT,
                    delayMs: 0
                  });
                  continue
                }
                let iT = !0;
                for (const zT of null !== (IT = TT.match(wT)) && void 0 !== IT ? IT : []) {
                  var IT;
                  const TT = oT.at(-1);
                  iT || "word" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || hT.test(zT) || /[\p{L}\p{N}]/u.test(zT) ? (iT || oT.push({
                    kind: "space",
                    text: "\u200b"
                  }), oT.push({
                    kind: "word",
                    text: zT,
                    delayMs: 0
                  }), iT = !1) : TT.text += zT
                }
              } else oT.push({
                kind: "icon",
                text: iT.icon,
                delayMs: 0
              });
          return oT
        }(TT),
        mT = [];
      let ET = [];
      for (const iT of gT) "space" !== iT.kind && (ET.push(iT), KT.test(iT.text) && (mT.push(ET), ET = []));
      mT.push(ET);
      const fT = [];
      let CT = 0;
      for (const iT of mT) {
        var jT, JT;
        const TT = null !== (jT = null === (JT = iT.at(-1)) || void 0 === JT ? void 0 : JT.text) && void 0 !== jT ? jT : "",
          oT = MT.test(TT),
          IT = rT.test(TT),
          zT = iT.map((TT => "word" === TT.kind ? RT(TT.text) : 1)),
          gT = zT.findLastIndex((TT => TT > 0));
        for (const [MT, rT] of iT.entries()) {
          const TT = "word" === rT.kind,
            iT = zT[MT];
          rT.delayMs = CT;
          for (let zT = 0; xT && zT < iT; zT++) {
            const {
              intonation: kT
            } = xT;
            let WT = gT > 0 ? -kT.declineSemitones * (MT / gT) : 0;
            WT += eT(`${uT(rT.text)}|${zT}`) * kT.variationSemitones;
            const KT = Math.min(1, kT.variationSemitones);
            let AT = xT.glideSemitones,
              hT = 1;
            IT && (WT += kT.exclaimLiftSemitones, hT *= XT), oT && MT === gT && (WT += kT.questionRiseSemitones * (iT > 1 ? .5 + .5 * zT / (iT - 1) : 1), zT === iT - 1 && (AT = Math.abs(AT) + kT.questionRiseSemitones / 2)), TT && vT(rT.text) && (WT += FT * KT, hT *= BT), iT > 1 && 0 === zT && (WT += DT * KT, hT *= ST), fT.push({
              atMs: CT + zT * cT,
              semitones: WT,
              glideSemitones: AT,
              durationMs: zT < iT - 1 ? Math.min(xT.durationMs, cT * LT) : xT.durationMs,
              level: hT
            })
          }
          CT += iT * cT + (KT.test(rT.text) ? WT : AT.test(rT.text) ? kT : 0)
        }
      }
      return {
        pieces: gT.map((TT => "space" === TT.kind ? TT : "icon" === TT.kind ? {
          kind: "icon",
          icon: TT.text,
          delayMs: TT.delayMs
        } : {
          kind: "word",
          text: TT.text,
          delayMs: TT.delayMs
        })),
        blips: fT
      }
    }
    var fT = IT(1171),
      CT = IT(1220),
      jT = IT(1755);

    function JT(TT) {
      if ("string" === typeof TT) return TT;
      const oT = CT.d.get().getCurrentLanguageCode();
      return (0, fT.n)(oT, TT.translationKey, (0, fT.m)(TT.params, jT.e.shown))
    }

    function UT(TT) {
      const oT = void 0 === TT.voice ? null : (0, iT.m)(TT.voice),
        IT = oT && (0, iT.j)(oT);
      return {
        plan: ET(JT(TT.line), IT),
        synth: IT
      }
    }

    function aT(TT) {
      const oT = [];
      let IT = [];
      for (const [zT, kT] of TT.entries()) {
        var iT;
        "space" === kT.kind && (" " !== kT.text || "icon" !== (null === (iT = TT[zT + 1]) || void 0 === iT ? void 0 : iT.kind)) ? (IT.length > 0 && oT.push(IT), oT.push([kT]), IT = []) : IT.push(kT)
      }
      return IT.length > 0 && oT.push(IT), oT
    }
  },
  4339: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => ST,
      e: () => DT
    });
    var iT = IT(4341),
      zT = IT(12);
    const kT = .25,
      WT = .85,
      XT = .02,
      BT = .01;

    function FT(TT, oT, IT, iT, zT, kT, XT) {
      const {
        waveform: BT,
        pitchHz: FT,
        attackMs: ST,
        releaseMs: DT,
        lowpassHz: LT
      } = IT, xT = zT + iT.durationMs / 1e3, cT = FT * 2 ** (iT.semitones / 12), KT = TT.createOscillator();
      KT.type = BT, KT.frequency.setValueAtTime(cT, zT), KT.frequency.exponentialRampToValueAtTime(cT * 2 ** (iT.glideSemitones / 12), xT);
      const MT = zT + Math.min(ST, iT.durationMs) / 1e3,
        rT = TT.createGain();
      rT.gain.setValueAtTime(0, zT), rT.gain.linearRampToValueAtTime(kT, MT), rT.gain.linearRampToValueAtTime(kT * WT, Math.max(MT, xT - DT / 1e3)), rT.gain.linearRampToValueAtTime(0, xT);
      const AT = [KT];
      if (null !== LT) {
        const oT = TT.createBiquadFilter();
        oT.type = "lowpass", oT.frequency.value = LT, AT.push(oT)
      }
      AT.push(rT, oT);
      for (let WT = 1; WT < AT.length; WT++) AT[WT - 1].connect(AT[WT]);
      return KT.onended = () => {
        for (const TT of AT.slice(0, -1)) TT.disconnect();
        XT()
      }, KT.start(zT), KT.stop(xT), KT
    }

    function ST(TT, oT, IT, iT, zT, WT) {
      if (0 === iT.length) return WT(), () => {};
      const ST = kT * IT.volume * zT,
        DT = TT.createGain();
      DT.connect(oT);
      const LT = TT.currentTime + XT,
        xT = new Set;
      for (const kT of iT) {
        const oT = FT(TT, DT, IT, kT, LT + kT.atMs / 1e3, ST * kT.level, (() => {
          xT.delete(oT), 0 === xT.size && (DT.disconnect(), WT())
        }));
        xT.add(oT)
      }
      return () => {
        const oT = TT.currentTime;
        DT.gain.setTargetAtTime(0, oT, BT);
        for (const TT of xT) try {
          TT.stop(oT + 5 * BT)
        } catch {}
      }
    }

    function DT(TT, oT) {
      var IT;
      const kT = iT.Howler.ctx,
        WT = iT.Howler.masterGain;
      if (!kT || !WT || !zT.c.get("soundOnFromAd")) return () => {};
      const XT = iT.Howler;
      return null === (IT = XT._autoResume) || void 0 === IT || IT.call(XT), ST(kT, WT, TT, oT, zT.c.get("soundVolume"), (() => {
        var TT;
        null === (TT = XT._autoSuspend) || void 0 === TT || TT.call(XT)
      }))
    }
  },
  38098: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      closeClientGame: () => YT,
      createDefaultClientPlugins: () => aT
    });
    var iT = IT(314);

    function zT() {
      let TT;
      return {
        onCreate(oT) {
          TT = oT
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(oT, IT, zT, kT, WT, XT) {
          var BT, FT;
          if ("Iron Chest" !== TT.getMetaInfo(WT).rootName) return;
          if (!TT.hasEffect(oT, "Thief")) return;
          const ST = TT.getBlockData(IT, zT, kT);
          return TT.getPlayerDbId(oT) !== (null === ST || void 0 === ST || null === (BT = ST.persisted) || void 0 === BT || null === (FT = BT.shared) || void 0 === FT ? void 0 : FT.ownerDbId) ? (TT.sendMessage(oT, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: iT.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var kT = IT(3811),
      WT = IT(1214);
    const XT = 8.4,
      BT = 1e-4,
      FT = .15,
      ST = .04,
      DT = [.12, .04, .12],
      LT = 26,
      xT = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        fD: 1,
        minLifeTime: BT,
        maxLifeTime: BT,
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
        blendMode: kT.h.Standard
      },
      cT = {
        texture: "bubble",
        mipmaps: !1,
        fD: 96,
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
        blendMode: kT.h.Standard
      },
      KT = [0, 0, 0],
      MT = [0, 0, 0];

    function rT(TT) {
      const oT = new Map;
      let IT = null;

      function iT(TT) {
        var oT, IT;
        null === (oT = TT.bubbles) || void 0 === oT || oT.stop(), null === (IT = TT.fish) || void 0 === IT || IT.stop()
      }

      function zT(IT) {
        if (!IT.readDrawnPosition(TT, MT)) {
          for (const TT of oT.values()) {
            var iT;
            null === (iT = TT.bubbles) || void 0 === iT || iT.setEmitRate(0)
          }
          return
        }
        const zT = performance.now();
        for (const [TT, WT] of oT) {
          var kT;
          if (null === (kT = WT.bubbles) || void 0 === kT || kT.setEmitRate(0), !IT.readDrawnPosition(TT, KT)) continue;
          if (!((KT[0] - MT[0]) ** 2 + (KT[1] - MT[1]) ** 2 + (KT[2] - MT[2]) ** 2 < 900)) continue;
          const oT = Math.max(0, WT.biteAt - zT),
            iT = WT.approachDurationMs > 0 ? Math.min(1, 1 - oT / WT.approachDurationMs) : 1,
            BT = (WT.approachDurationMs - oT) / 1e3,
            rT = WT.phase + .25 * Math.sin(1.7 * BT + WT.phase),
            AT = Math.min(WT.approachDurationMs / 3e3 * 2.8, XT) * (1 - iT) * (1 + .15 * Math.sin(2.1 * BT + WT.phase)),
            gT = Math.min(1, 4 * (1 - iT)),
            hT = (.45 * Math.sin(4.1 * BT + WT.phase) + .18 * Math.sin(9.7 * BT + 2 * WT.phase)) * gT,
            wT = KT[0] + Math.cos(rT) * AT - Math.sin(rT) * hT,
            mT = Math.ceil(WT.surfaceY),
            eT = KT[2] + Math.sin(rT) * AT + Math.cos(rT) * hT,
            {
              fishAt: RT,
              bubblesAt: uT
            } = WT;
          RT[0] = uT[0] = wT, RT[1] = mT + FT, uT[1] = mT + ST, RT[2] = uT[2] = eT, WT.fish ??= IT.createParticles(xT, {
            pos: RT
          }), WT.fish.moveTo(RT), WT.fish.emit(1), WT.bubbles ??= IT.createParticles(cT, {
            pos: uT,
            half: DT
          }), WT.bubbles.moveTo(uT), WT.bubbles.setEmitRate(LT + 32 * (.5 + .5 * Math.sin(9 * BT + WT.phase)) ** 4 + 13 * iT)
        }
      }
      return {
        onCreate(TT) {
          IT = TT
        },
        onAfterRender() {
          IT && zT(IT)
        },
        onClose() {
          for (const TT of oT.values()) iT(TT);
          oT.clear(), IT = null
        },
        onReceivedMessageFromServer(TT, IT) {
          if (TT !== WT.y) return;
          const {
            hookId: zT,
            waiting: kT
          } = IT;
          if (kT) oT.has(zT) || oT.set(zT, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + kT.remainingMs,
            approachDurationMs: kT.durationMs,
            surfaceY: kT.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const TT = oT.get(zT);
            TT && iT(TT), oT.delete(zT)
          }
        }
      }
    }
    var AT = IT(4339),
      gT = IT(4328);

    function hT(TT) {
      let oT, IT = null,
        iT = null;
      const zT = () => {
        var TT;
        null === (TT = iT) || void 0 === TT || TT(), iT = null
      };
      return {
        onCreate(iT) {
          oT = iT, IT = oT.getClientOption(TT, "dialogue")
        },
        onAfterRender() {
          if (!oT) return;
          const kT = oT.getClientOption(TT, "dialogue");
          if (kT === IT) return;
          if (IT = kT, zT(), !kT || !1 === kT.animateIn) return;
          const {
            plan: WT,
            synth: XT
          } = (0, gT.h)(kT);
          XT && (iT = (0, AT.e)(XT, WT.blips))
        },
        onClose: zT
      }
    }
    var wT = IT(38100);
    const mT = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      eT = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      RT = [0, 1, 2, 0, 2, 3];

    function uT(TT, oT, IT) {
      var iT;
      let [zT, kT, WT] = oT;
      if (TT.hasPackModel("Furnace")) return null;
      const XT = ((null !== (iT = TT.getMetaInfo(IT).rot) && void 0 !== iT ? iT : 1) - 1) * Math.PI / 2,
        BT = Math.PI + XT,
        FT = Math.cos(BT),
        ST = Math.sin(BT),
        DT = [];
      for (const [cT, KT] of mT) DT.push(cT * FT, KT, -cT * ST);
      const LT = {
          positions: DT,
          indices: RT,
          uvs: eT
        },
        xT = [zT + .5 + .51 * Math.sin(XT), kT + .375, WT + .5 + .51 * Math.cos(XT)];
      return TT.createGameMesh(LT, {
        kind: "furnaceFire"
      }, xT)
    }

    function vT(TT) {
      return Math.floor(TT / 200) % 3
    }

    function ET(TT, oT, IT) {
      TT.setGameMesh(oT, {
        uvOffset: [0, IT / 3]
      })
    }
    const fT = [.12, .025, .12],
      CT = [{
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
          blendMode: kT.h.Standard,
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
          blendMode: kT.h.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class jT {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(TT, oT) {
        const IT = TT.getBlockId(oT[0], oT[1], oT[2]);
        if ("Furnace" !== TT.getMetaInfo(IT).rootName) return;
        const iT = performance.now();
        let zT = this.smokes.find((TT => TT.pos[0] === oT[0] && TT.pos[1] === oT[1] && TT.pos[2] === oT[2] && TT.mS === IT));
        if (zT || (zT = {
            pos: [oT[0], oT[1], oT[2]],
            mS: IT,
            endMs: iT,
            lastBurstMs: -1 / 0,
            pending: new Array(CT.length).fill(0),
            fire: uT(TT, oT, IT)
          }, this.smokes.push(zT), null !== zT.fire && (ET(TT, zT.fire, vT(iT)), this.shownFireFrame = -1)), zT.endMs = iT + 6e3, this.smokes.length > 4) {
          const oT = this.smokes.reduce(((TT, oT) => oT.endMs < TT.endMs ? oT : TT));
          JT(TT, oT), this.smokes.splice(this.smokes.indexOf(oT), 1)
        }
        iT - zT.lastBurstMs >= 300 && (zT.lastBurstMs = iT, CT.forEach(((TT, oT) => {
          zT.pending[oT] += TT.style.count
        })))
      }
      onAfterRender(TT, oT) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const IT = performance.now();
        this.smokes = this.smokes.filter((oT => {
          const [iT, zT, kT] = oT.pos, WT = IT < oT.endMs && TT.getBlockId(iT, zT, kT) === oT.mS;
          return WT || JT(TT, oT), WT
        }));
        const iT = vT(IT);
        if (iT !== this.shownFireFrame) {
          this.shownFireFrame = iT;
          for (const oT of this.smokes) null !== oT.fire && ET(TT, oT.fire, iT)
        }
        if (!TT.particlesEnabled()) {
          for (const TT of this.smokes) TT.pending.fill(0);
          return
        }
        const zT = Math.min(oT, 250) / 1e3;
        for (const kT of this.smokes) {
          const [oT, iT, WT] = kT.pos;
          if (0 !== TT.getBlockId(oT, iT + 1, WT)) {
            kT.pending.fill(0);
            continue
          }
          const XT = (kT.endMs - IT) / 6e3,
            BT = this.centre;
          BT[0] = oT + .5, BT[1] = iT + 1.275, BT[2] = WT + .5, CT.forEach(((oT, IT) => {
            kT.pending[IT] += oT.perSecond * XT * zT;
            const iT = Math.floor(kT.pending[IT]);
            iT > 0 && this.emit(TT, IT, BT, iT) && (kT.pending[IT] -= iT)
          }))
        }
      }
      dispose(TT) {
        for (const IT of this.smokes) JT(TT, IT);
        this.smokes = [];
        for (const IT of null !== (oT = this.puffers) && void 0 !== oT ? oT : []) {
          var oT;
          IT.dispose()
        }
        this.puffers = null
      }
      emit(TT, oT, IT, iT) {
        return this.puffers ??= CT.map((TT => {
          let {
            style: oT,
            perSecond: IT
          } = TT;
          const iT = (oT.count / .3 + IT) * oT.life[1];
          return new wT.e(oT, Math.ceil(4 * iT), fT)
        })), this.puffers[oT].emit(TT, IT, this.renderFrame, iT)
      }
    }

    function JT(TT, oT) {
      null !== oT.fire && (TT.disposeGameMesh(oT.fire), oT.fire = null)
    }

    function UT() {
      let TT;
      const oT = new jT;
      return {
        onCreate(oT) {
          TT = oT
        },
        onReceivedMessageFromServer(IT, iT) {
          IT === WT.z && oT.start(TT, iT)
        },
        onAfterRender(IT) {
          oT.onAfterRender(TT, IT)
        },
        onClose() {
          oT.dispose(TT)
        }
      }
    }

    function aT(TT, oT, IT, iT) {
      return {
        dialogue: hT(iT.localPlayerId),
        fishing: rT(iT.localPlayerId),
        furnaceSmoke: UT(),
        ironChest: zT()
      }
    }

    function YT(TT, oT) {
      for (const zT of [TT, ...null !== oT && void 0 !== oT ? oT : []]) try {
        var IT;
        null === zT || void 0 === zT || null === (IT = zT.onClose) || void 0 === IT || IT.call(zT)
      } catch (iT) {
        console.error("Error in client onClose callback", iT)
      }
    }
  },
  38100: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT,
      e: () => kT
    });
    const iT = 1 / .6,
      zT = {
        kind: "smokePuff"
      };
    class kT {
      constructor(TT, oT, IT) {
        this.style = TT, this.fD = oT, this.half = IT, this.particles = null, this.lastFrame = -1
      }
      emit(TT, oT, IT) {
        let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return IT !== this.lastFrame && (this.lastFrame = IT, this.particles || (this.particles = TT.createParticles(function(TT, oT) {
          const [
            [IT, kT, WT],
            [XT, BT, FT]
          ] = TT.colours;
          return {
            texture: TT.soft ? zT : "square_particle",
            fD: oT,
            minLifeTime: TT.life[0] / iT,
            maxLifeTime: TT.life[1] / iT,
            minEmitPower: TT.power[0] * iT,
            maxEmitPower: TT.power[1] * iT,
            minSize: TT.size[0],
            maxSize: TT.size[1],
            emitRate: 0,
            gravity: [0, TT.lift * iT * iT, 0],
            dir1: [-TT.spread, 1, -TT.spread],
            dir2: [TT.spread, 1, TT.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [IT, kT, WT, TT.alpha],
              maxColor: [XT, BT, FT, TT.alpha]
            }, {
              timeFraction: 1,
              minColor: [IT, kT, WT, 0],
              maxColor: [XT, BT, FT, 0]
            }],
            blendMode: TT.blendMode
          }
        }(this.style, this.fD), {
          pos: oT,
          half: this.half
        })), this.particles.moveTo(oT, this.half), this.particles.emit(kT), !0)
      }
      dispose() {
        var TT;
        null === (TT = this.particles) || void 0 === TT || TT.stop(), this.particles = null
      }
    }
  },
  4336: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT,
      f: () => iT,
      g: () => kT,
      j: () => BT,
      m: () => WT
    });
    const iT = ["sine", "triangle", "square", "sawtooth"],
      zT = 55,
      kT = {
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

    function WT(TT) {
      return "string" !== typeof TT ? TT : Object.hasOwn(kT, TT) ? kT[TT] : null
    }

    function XT(TT, oT, IT) {
      return Math.min(IT, Math.max(oT, TT))
    }

    function BT(TT) {
      const oT = XT(TT.durationMs, 10, 500),
        IT = XT(TT.attackMs, 0, oT),
        {
          intonation: zT
        } = TT;
      return {
        waveform: iT.includes(TT.waveform) ? TT.waveform : "sine",
        pitchHz: XT(TT.pitchHz, 20, 4e3),
        glideSemitones: XT(TT.glideSemitones, -24, 24),
        durationMs: oT,
        attackMs: IT,
        releaseMs: XT(TT.releaseMs, 0, oT - IT),
        lowpassHz: null === TT.lowpassHz ? null : XT(TT.lowpassHz, 20, 2e4),
        volume: XT(TT.volume, 0, 2),
        intonation: {
          variationSemitones: XT(zT.variationSemitones, 0, 6),
          declineSemitones: XT(zT.declineSemitones, 0, 12),
          questionRiseSemitones: XT(zT.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: XT(zT.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: XT(TT.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);