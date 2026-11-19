export const id = 27;
export const ids = [27];
export const modules = {
  4419: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => fY,
      g: () => CY
    });
    var FY = DY(4422),
      AY = DY(332);
    const IY = 120,
      RY = 260,
      OY = 1.15,
      gY = 1.2,
      aY = 2,
      vY = 1.08,
      uY = .8,
      sY = .95,
      iY = 8,
      yY = "[\"')\\]\u300d\u300f\uff09]*",
      QY = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yY}$`),
      oY = new RegExp(`[?\uff1f]${yY}$`),
      WY = new RegExp(`[!\uff01]${yY}$`),
      EY = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mY = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      VY = new RegExp(`[${mY}]`),
      SY = new RegExp(`[${mY}]|[^${mY}]+`, "g"),
      lY = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function TY(YY) {
      let rY = 2166136261;
      for (let DY = 0; DY < YY.length; DY++) rY ^= YY.charCodeAt(DY), rY = Math.imul(rY, 16777619);
      return (rY >>> 0) / 4294967295 * 2 - 1
    }

    function eY(YY) {
      var rY;
      if (VY.test(YY)) return 1;
      const DY = YY.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        FY = DY.replace(/[^0-9]/g, "");
      if (FY.length > 0 && !/\p{L}/u.test(DY)) return Math.min(FY.length, 4);
      const AY = null !== (rY = DY.match(lY)) && void 0 !== rY ? rY : [];
      if (0 === AY.length) {
        var IY, RY;
        const YY = null !== (IY = null === (RY = DY.match(/\p{L}/gu)) || void 0 === RY ? void 0 : RY.length) && void 0 !== IY ? IY : 0;
        return 0 === YY ? 0 : Math.min(Math.max(1, Math.round(YY / 2.5)), iY)
      }
      const OY = DY.replace(/[^\p{L}]/gu, ""),
        gY = AY.length > 1 && "e" === AY.at(-1) && OY.endsWith("e") && !OY.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(YY.replace(/[^\p{L}]/gu, ""));
      return Math.min(AY.length - (gY ? 1 : 0), iY)
    }

    function NY(YY) {
      return YY.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function BY(YY) {
      const rY = YY.replace(/[^\p{L}]/gu, "");
      return rY.length >= 2 && rY === rY.toUpperCase() && rY !== rY.toLowerCase()
    }

    function cY(YY, rY) {
      var DY;
      const iY = rY && (0, FY.l)(rY),
        yY = null !== (DY = null === iY || void 0 === iY ? void 0 : iY.syllableMs) && void 0 !== DY ? DY : FY.b,
        mY = function(YY) {
          const rY = [];
          for (const FY of (0, AY.cc)(YY))
            if ("string" === typeof FY)
              for (const YY of FY.split(/(\s+)/)) {
                if ("" === YY) continue;
                if (/^\s+$/.test(YY)) {
                  rY.push({
                    kind: "space",
                    text: YY
                  });
                  continue
                }
                if (!VY.test(YY)) {
                  rY.push({
                    kind: "word",
                    text: YY,
                    delayMs: 0
                  });
                  continue
                }
                let FY = !0;
                for (const AY of null !== (DY = YY.match(SY)) && void 0 !== DY ? DY : []) {
                  var DY;
                  const YY = rY.at(-1);
                  FY || "word" !== (null === YY || void 0 === YY ? void 0 : YY.kind) || VY.test(AY) || /[\p{L}\p{N}]/u.test(AY) ? (FY || rY.push({
                    kind: "space",
                    text: "\u200b"
                  }), rY.push({
                    kind: "word",
                    text: AY,
                    delayMs: 0
                  }), FY = !1) : YY.text += AY
                }
              } else rY.push({
                kind: "icon",
                text: FY.icon,
                delayMs: 0
              });
          return rY
        }(YY),
        lY = [];
      let cY = [];
      for (const FY of mY) "space" !== FY.kind && (cY.push(FY), QY.test(FY.text) && (lY.push(cY), cY = []));
      lY.push(cY);
      const KY = [];
      let HY = 0;
      for (const FY of lY) {
        var zY, ZY;
        const YY = null !== (zY = null === (ZY = FY.at(-1)) || void 0 === ZY ? void 0 : ZY.text) && void 0 !== zY ? zY : "",
          rY = oY.test(YY),
          DY = WY.test(YY),
          AY = FY.map((YY => "word" === YY.kind ? eY(YY.text) : 1)),
          mY = AY.findLastIndex((YY => YY > 0));
        for (const [oY, WY] of FY.entries()) {
          const YY = "word" === WY.kind,
            FY = AY[oY];
          WY.delayMs = HY;
          for (let AY = 0; iY && AY < FY; AY++) {
            const {
              intonation: IY
            } = iY;
            let RY = mY > 0 ? -IY.declineSemitones * (oY / mY) : 0;
            RY += TY(`${NY(WY.text)}|${AY}`) * IY.variationSemitones;
            const QY = Math.min(1, IY.variationSemitones);
            let EY = iY.glideSemitones,
              VY = 1;
            DY && (RY += IY.exclaimLiftSemitones, VY *= OY), rY && oY === mY && (RY += IY.questionRiseSemitones * (FY > 1 ? .5 + .5 * AY / (FY - 1) : 1), AY === FY - 1 && (EY = Math.abs(EY) + IY.questionRiseSemitones / 2)), YY && BY(WY.text) && (RY += aY * QY, VY *= gY), FY > 1 && 0 === AY && (RY += uY * QY, VY *= vY), KY.push({
              atMs: HY + AY * yY,
              semitones: RY,
              glideSemitones: EY,
              durationMs: AY < FY - 1 ? Math.min(iY.durationMs, yY * sY) : iY.durationMs,
              level: VY
            })
          }
          HY += FY * yY + (QY.test(WY.text) ? RY : EY.test(WY.text) ? IY : 0)
        }
      }
      return {
        pieces: mY.map((YY => "space" === YY.kind ? YY : "icon" === YY.kind ? {
          kind: "icon",
          icon: YY.text,
          delayMs: YY.delayMs
        } : {
          kind: "word",
          text: YY.text,
          delayMs: YY.delayMs
        })),
        blips: KY
      }
    }
    var KY = DY(1211),
      HY = DY(1256),
      zY = DY(1816);

    function ZY(YY) {
      if ("string" === typeof YY) return YY;
      const rY = HY.h.get().getCurrentLanguageCode();
      return (0, KY.u)(rY, YY.translationKey, (0, KY.r)(YY.params, zY.e.shown))
    }

    function CY(YY) {
      const rY = void 0 === YY.voice ? null : (0, FY.m)(YY.voice),
        DY = rY && (0, FY.l)(rY);
      return {
        plan: cY(ZY(YY.line), DY),
        synth: DY
      }
    }

    function fY(YY) {
      const rY = [];
      let DY = [];
      for (const [AY, IY] of YY.entries()) {
        var FY;
        "space" === IY.kind && (" " !== IY.text || "icon" !== (null === (FY = YY[AY + 1]) || void 0 === FY ? void 0 : FY.kind)) ? (DY.length > 0 && rY.push(DY), rY.push([IY]), DY = []) : DY.push(IY)
      }
      return DY.length > 0 && rY.push(DY), rY
    }
  },
  4425: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => vY,
      e: () => uY
    });
    var FY = DY(4434),
      AY = DY(19);
    const IY = .25,
      RY = .85,
      OY = .02,
      gY = .01;

    function aY(YY, rY, DY, FY, AY, IY, OY) {
      const {
        waveform: gY,
        pitchHz: aY,
        attackMs: vY,
        releaseMs: uY,
        lowpassHz: sY
      } = DY, iY = AY + FY.durationMs / 1e3, yY = aY * 2 ** (FY.semitones / 12), QY = YY.createOscillator();
      QY.type = gY, QY.frequency.setValueAtTime(yY, AY), QY.frequency.exponentialRampToValueAtTime(yY * 2 ** (FY.glideSemitones / 12), iY);
      const oY = AY + Math.min(vY, FY.durationMs) / 1e3,
        WY = YY.createGain();
      WY.gain.setValueAtTime(0, AY), WY.gain.linearRampToValueAtTime(IY, oY), WY.gain.linearRampToValueAtTime(IY * RY, Math.max(oY, iY - uY / 1e3)), WY.gain.linearRampToValueAtTime(0, iY);
      const EY = [QY];
      if (null !== sY) {
        const rY = YY.createBiquadFilter();
        rY.type = "lowpass", rY.frequency.value = sY, EY.push(rY)
      }
      EY.push(WY, rY);
      for (let RY = 1; RY < EY.length; RY++) EY[RY - 1].connect(EY[RY]);
      return QY.onended = () => {
        for (const YY of EY.slice(0, -1)) YY.disconnect();
        OY()
      }, QY.start(AY), QY.stop(iY), QY
    }

    function vY(YY, rY, DY, FY, AY, RY) {
      if (0 === FY.length) return RY(), () => {};
      const vY = IY * DY.volume * AY,
        uY = YY.createGain();
      uY.connect(rY);
      const sY = YY.currentTime + OY,
        iY = new Set;
      for (const IY of FY) {
        const rY = aY(YY, uY, DY, IY, sY + IY.atMs / 1e3, vY * IY.level, (() => {
          iY.delete(rY), 0 === iY.size && (uY.disconnect(), RY())
        }));
        iY.add(rY)
      }
      return () => {
        const rY = YY.currentTime;
        uY.gain.setTargetAtTime(0, rY, gY);
        for (const YY of iY) try {
          YY.stop(rY + 5 * gY)
        } catch {}
      }
    }

    function uY(YY, rY) {
      var DY;
      const IY = FY.Howler.ctx,
        RY = FY.Howler.masterGain;
      if (!IY || !RY || !AY.b.get("soundOnFromAd")) return () => {};
      const OY = FY.Howler;
      return null === (DY = OY._autoResume) || void 0 === DY || DY.call(OY), vY(IY, RY, YY, rY, AY.b.get("soundVolume"), (() => {
        var YY;
        null === (YY = OY._autoSuspend) || void 0 === YY || YY.call(OY)
      }))
    }
  },
  38487: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      closeClientGame: () => jY,
      createDefaultClientPlugins: () => fY
    });
    var FY = DY(341);

    function AY() {
      let YY;
      return {
        onCreate(rY) {
          YY = rY
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(rY, DY, AY, IY, RY, OY) {
          var gY, aY;
          if ("Iron Chest" !== YY.getMetaInfo(RY).rootName) return;
          if (!YY.hasEffect(rY, "Thief")) return;
          const vY = YY.getBlockData(DY, AY, IY);
          return YY.getPlayerDbId(rY) !== (null === vY || void 0 === vY || null === (gY = vY.persisted) || void 0 === gY || null === (aY = gY.shared) || void 0 === aY ? void 0 : aY.ownerDbId) ? (YY.sendMessage(rY, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: FY.K.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var IY = DY(3815),
      RY = DY(1244);
    const OY = 8.4,
      gY = 1e-4,
      aY = .15,
      vY = .04,
      uY = [.12, .04, .12],
      sY = 26,
      iY = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        gu: 1,
        minLifeTime: gY,
        maxLifeTime: gY,
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
        blendMode: IY.g.Standard
      },
      yY = {
        texture: "bubble",
        mipmaps: !1,
        gu: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: sY,
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
        blendMode: IY.g.Standard
      },
      QY = [0, 0, 0],
      oY = [0, 0, 0];

    function WY(YY) {
      const rY = new Map;
      let DY = null;

      function FY(YY) {
        var rY, DY;
        null === (rY = YY.bubbles) || void 0 === rY || rY.stop(), null === (DY = YY.fish) || void 0 === DY || DY.stop()
      }

      function AY(DY) {
        if (!DY.readDrawnPosition(YY, oY)) {
          for (const YY of rY.values()) {
            var FY;
            null === (FY = YY.bubbles) || void 0 === FY || FY.setEmitRate(0)
          }
          return
        }
        const AY = performance.now();
        for (const [YY, RY] of rY) {
          var IY;
          if (null === (IY = RY.bubbles) || void 0 === IY || IY.setEmitRate(0), !DY.readDrawnPosition(YY, QY)) continue;
          if (!((QY[0] - oY[0]) ** 2 + (QY[1] - oY[1]) ** 2 + (QY[2] - oY[2]) ** 2 < 900)) continue;
          const rY = Math.max(0, RY.biteAt - AY),
            FY = RY.approachDurationMs > 0 ? Math.min(1, 1 - rY / RY.approachDurationMs) : 1,
            gY = (RY.approachDurationMs - rY) / 1e3,
            WY = RY.phase + .25 * Math.sin(1.7 * gY + RY.phase),
            EY = Math.min(RY.approachDurationMs / 3e3 * 2.8, OY) * (1 - FY) * (1 + .15 * Math.sin(2.1 * gY + RY.phase)),
            mY = Math.min(1, 4 * (1 - FY)),
            VY = (.45 * Math.sin(4.1 * gY + RY.phase) + .18 * Math.sin(9.7 * gY + 2 * RY.phase)) * mY,
            SY = QY[0] + Math.cos(WY) * EY - Math.sin(WY) * VY,
            lY = Math.ceil(RY.surfaceY),
            TY = QY[2] + Math.sin(WY) * EY + Math.cos(WY) * VY,
            {
              fishAt: eY,
              bubblesAt: NY
            } = RY;
          eY[0] = NY[0] = SY, eY[1] = lY + aY, NY[1] = lY + vY, eY[2] = NY[2] = TY, RY.fish ??= DY.createParticles(iY, {
            pos: eY
          }), RY.fish.moveTo(eY), RY.fish.emit(1), RY.bubbles ??= DY.createParticles(yY, {
            pos: NY,
            half: uY
          }), RY.bubbles.moveTo(NY), RY.bubbles.setEmitRate(sY + 32 * (.5 + .5 * Math.sin(9 * gY + RY.phase)) ** 4 + 13 * FY)
        }
      }
      return {
        onCreate(YY) {
          DY = YY
        },
        onAfterRender() {
          DY && AY(DY)
        },
        onClose() {
          for (const YY of rY.values()) FY(YY);
          rY.clear(), DY = null
        },
        onReceivedMessageFromServer(YY, DY) {
          if (YY !== RY.z) return;
          const {
            hookId: AY,
            waiting: IY
          } = DY;
          if (IY) rY.has(AY) || rY.set(AY, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + IY.remainingMs,
            approachDurationMs: IY.durationMs,
            surfaceY: IY.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const YY = rY.get(AY);
            YY && FY(YY), rY.delete(AY)
          }
        }
      }
    }
    var EY = DY(4425),
      mY = DY(4419);

    function VY(YY) {
      let rY, DY = null,
        FY = null;
      const AY = () => {
        var YY;
        null === (YY = FY) || void 0 === YY || YY(), FY = null
      };
      return {
        onCreate(FY) {
          rY = FY, DY = rY.getClientOption(YY, "dialogue")
        },
        onAfterRender() {
          if (!rY) return;
          const IY = rY.getClientOption(YY, "dialogue");
          if (IY === DY) return;
          if (DY = IY, AY(), !IY || !1 === IY.animateIn) return;
          const {
            plan: RY,
            synth: OY
          } = (0, mY.g)(IY);
          OY && (FY = (0, EY.e)(OY, RY.blips))
        },
        onClose: AY
      }
    }
    var SY = DY(38493);
    const lY = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      TY = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      eY = [0, 1, 2, 0, 2, 3];

    function NY(YY, rY, DY) {
      var FY;
      let [AY, IY, RY] = rY;
      if (YY.hasPackModel("Furnace")) return null;
      const OY = ((null !== (FY = YY.getMetaInfo(DY).rot) && void 0 !== FY ? FY : 1) - 1) * Math.PI / 2,
        gY = Math.PI + OY,
        aY = Math.cos(gY),
        vY = Math.sin(gY),
        uY = [];
      for (const [yY, QY] of lY) uY.push(yY * aY, QY, -yY * vY);
      const sY = {
          positions: uY,
          indices: eY,
          uvs: TY
        },
        iY = [AY + .5 + .51 * Math.sin(OY), IY + .375, RY + .5 + .51 * Math.cos(OY)];
      return YY.createGameMesh(sY, {
        kind: "furnaceFire"
      }, iY)
    }

    function BY(YY) {
      return Math.floor(YY / 200) % 3
    }

    function cY(YY, rY, DY) {
      YY.setGameMesh(rY, {
        uvOffset: [0, DY / 3]
      })
    }
    const KY = [.12, .025, .12],
      HY = [{
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
          blendMode: IY.g.Standard,
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
          blendMode: IY.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class zY {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(YY, rY) {
        const DY = YY.getBlockId(rY[0], rY[1], rY[2]);
        if ("Furnace" !== YY.getMetaInfo(DY).rootName) return;
        const FY = performance.now();
        let AY = this.smokes.find((YY => YY.pos[0] === rY[0] && YY.pos[1] === rY[1] && YY.pos[2] === rY[2] && YY.rv === DY));
        if (AY || (AY = {
            pos: [rY[0], rY[1], rY[2]],
            rv: DY,
            endMs: FY,
            lastBurstMs: -1 / 0,
            pending: new Array(HY.length).fill(0),
            fire: NY(YY, rY, DY)
          }, this.smokes.push(AY), null !== AY.fire && (cY(YY, AY.fire, BY(FY)), this.shownFireFrame = -1)), AY.endMs = FY + 6e3, this.smokes.length > 4) {
          const rY = this.smokes.reduce(((YY, rY) => rY.endMs < YY.endMs ? rY : YY));
          ZY(YY, rY), this.smokes.splice(this.smokes.indexOf(rY), 1)
        }
        FY - AY.lastBurstMs >= 300 && (AY.lastBurstMs = FY, HY.forEach(((YY, rY) => {
          AY.pending[rY] += YY.style.count
        })))
      }
      onAfterRender(YY, rY) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const DY = performance.now();
        this.smokes = this.smokes.filter((rY => {
          const [FY, AY, IY] = rY.pos, RY = DY < rY.endMs && YY.getBlockId(FY, AY, IY) === rY.rv;
          return RY || ZY(YY, rY), RY
        }));
        const FY = BY(DY);
        if (FY !== this.shownFireFrame) {
          this.shownFireFrame = FY;
          for (const rY of this.smokes) null !== rY.fire && cY(YY, rY.fire, FY)
        }
        if (!YY.particlesEnabled()) {
          for (const YY of this.smokes) YY.pending.fill(0);
          return
        }
        const AY = Math.min(rY, 250) / 1e3;
        for (const IY of this.smokes) {
          const [rY, FY, RY] = IY.pos;
          if (0 !== YY.getBlockId(rY, FY + 1, RY)) {
            IY.pending.fill(0);
            continue
          }
          const OY = (IY.endMs - DY) / 6e3,
            gY = this.centre;
          gY[0] = rY + .5, gY[1] = FY + 1.275, gY[2] = RY + .5, HY.forEach(((rY, DY) => {
            IY.pending[DY] += rY.perSecond * OY * AY;
            const FY = Math.floor(IY.pending[DY]);
            FY > 0 && this.emit(YY, DY, gY, FY) && (IY.pending[DY] -= FY)
          }))
        }
      }
      dispose(YY) {
        for (const DY of this.smokes) ZY(YY, DY);
        this.smokes = [];
        for (const DY of null !== (rY = this.puffers) && void 0 !== rY ? rY : []) {
          var rY;
          DY.dispose()
        }
        this.puffers = null
      }
      emit(YY, rY, DY, FY) {
        return this.puffers ??= HY.map((YY => {
          let {
            style: rY,
            perSecond: DY
          } = YY;
          const FY = (rY.count / .3 + DY) * rY.life[1];
          return new SY.c(rY, Math.ceil(4 * FY), KY)
        })), this.puffers[rY].emit(YY, DY, this.renderFrame, FY)
      }
    }

    function ZY(YY, rY) {
      null !== rY.fire && (YY.disposeGameMesh(rY.fire), rY.fire = null)
    }

    function CY() {
      let YY;
      const rY = new zY;
      return {
        onCreate(rY) {
          YY = rY
        },
        onReceivedMessageFromServer(DY, FY) {
          DY === RY.A && rY.start(YY, FY)
        },
        onAfterRender(DY) {
          rY.onAfterRender(YY, DY)
        },
        onClose() {
          rY.dispose(YY)
        }
      }
    }

    function fY(YY, rY, DY, FY) {
      return {
        dialogue: VY(FY.localPlayerId),
        fishing: WY(FY.localPlayerId),
        furnaceSmoke: CY(),
        ironChest: AY()
      }
    }

    function jY(YY, rY) {
      for (const AY of [YY, ...null !== rY && void 0 !== rY ? rY : []]) try {
        var DY;
        null === AY || void 0 === AY || null === (DY = AY.onClose) || void 0 === DY || DY.call(AY)
      } catch (FY) {
        console.error("Error in client onClose callback", FY)
      }
    }
  },
  38493: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY,
      c: () => IY
    });
    const FY = 1 / .6,
      AY = {
        kind: "smokePuff"
      };
    class IY {
      constructor(YY, rY, DY) {
        this.style = YY, this.gu = rY, this.half = DY, this.particles = null, this.lastFrame = -1
      }
      emit(YY, rY, DY) {
        let IY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return DY !== this.lastFrame && (this.lastFrame = DY, this.particles || (this.particles = YY.createParticles(function(YY, rY) {
          const [
            [DY, IY, RY],
            [OY, gY, aY]
          ] = YY.colours;
          return {
            texture: YY.soft ? AY : "square_particle",
            gu: rY,
            minLifeTime: YY.life[0] / FY,
            maxLifeTime: YY.life[1] / FY,
            minEmitPower: YY.power[0] * FY,
            maxEmitPower: YY.power[1] * FY,
            minSize: YY.size[0],
            maxSize: YY.size[1],
            emitRate: 0,
            gravity: [0, YY.lift * FY * FY, 0],
            dir1: [-YY.spread, 1, -YY.spread],
            dir2: [YY.spread, 1, YY.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [DY, IY, RY, YY.alpha],
              maxColor: [OY, gY, aY, YY.alpha]
            }, {
              timeFraction: 1,
              minColor: [DY, IY, RY, 0],
              maxColor: [OY, gY, aY, 0]
            }],
            blendMode: YY.blendMode
          }
        }(this.style, this.gu), {
          pos: rY,
          half: this.half
        })), this.particles.moveTo(rY, this.half), this.particles.emit(IY), !0)
      }
      dispose() {
        var YY;
        null === (YY = this.particles) || void 0 === YY || YY.stop(), this.particles = null
      }
    }
  },
  4422: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => FY,
      i: () => IY,
      l: () => gY,
      m: () => RY
    });
    const FY = ["sine", "triangle", "square", "sawtooth"],
      AY = 55,
      IY = {
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

    function RY(YY) {
      return "string" !== typeof YY ? YY : Object.hasOwn(IY, YY) ? IY[YY] : null
    }

    function OY(YY, rY, DY) {
      return Math.min(DY, Math.max(rY, YY))
    }

    function gY(YY) {
      const rY = OY(YY.durationMs, 10, 500),
        DY = OY(YY.attackMs, 0, rY),
        {
          intonation: AY
        } = YY;
      return {
        waveform: FY.includes(YY.waveform) ? YY.waveform : "sine",
        pitchHz: OY(YY.pitchHz, 20, 4e3),
        glideSemitones: OY(YY.glideSemitones, -24, 24),
        durationMs: rY,
        attackMs: DY,
        releaseMs: OY(YY.releaseMs, 0, rY - DY),
        lowpassHz: null === YY.lowpassHz ? null : OY(YY.lowpassHz, 20, 2e4),
        volume: OY(YY.volume, 0, 2),
        intonation: {
          variationSemitones: OY(AY.variationSemitones, 0, 6),
          declineSemitones: OY(AY.declineSemitones, 0, 12),
          questionRiseSemitones: OY(AY.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: OY(AY.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: OY(YY.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);