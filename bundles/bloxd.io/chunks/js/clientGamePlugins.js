export const id = 27;
export const ids = [27];
export const modules = {
  4864: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => lG,
      f: () => cG
    });
    var wG = ZG(4871),
      SG = ZG(333);
    const LG = 120,
      yG = 260,
      kG = 1.15,
      UG = 1.2,
      YG = 2,
      VG = 1.08,
      pG = .8,
      fG = .95,
      QG = 8,
      KG = "[\"')\\]\u300d\u300f\uff09]*",
      hG = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KG}$`),
      dG = new RegExp(`[?\uff1f]${KG}$`),
      JG = new RegExp(`[!\uff01]${KG}$`),
      rG = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      zG = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      EG = new RegExp(`[${zG}]`),
      oG = new RegExp(`[${zG}]|[^${zG}]+`, "g"),
      XG = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function uG(GG) {
      let bG = 2166136261;
      for (let ZG = 0; ZG < GG.length; ZG++) bG ^= GG.charCodeAt(ZG), bG = Math.imul(bG, 16777619);
      return (bG >>> 0) / 4294967295 * 2 - 1
    }

    function iG(GG) {
      var bG;
      if (EG.test(GG)) return 1;
      const ZG = GG.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        wG = ZG.replace(/[^0-9]/g, "");
      if (wG.length > 0 && !/\p{L}/u.test(ZG)) return Math.min(wG.length, 4);
      const SG = null !== (bG = ZG.match(XG)) && void 0 !== bG ? bG : [];
      if (0 === SG.length) {
        var LG, yG;
        const GG = null !== (LG = null === (yG = ZG.match(/\p{L}/gu)) || void 0 === yG ? void 0 : yG.length) && void 0 !== LG ? LG : 0;
        return 0 === GG ? 0 : Math.min(Math.max(1, Math.round(GG / 2.5)), QG)
      }
      const kG = ZG.replace(/[^\p{L}]/gu, ""),
        UG = SG.length > 1 && "e" === SG.at(-1) && kG.endsWith("e") && !kG.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(GG.replace(/[^\p{L}]/gu, ""));
      return Math.min(SG.length - (UG ? 1 : 0), QG)
    }

    function CG(GG) {
      return GG.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function WG(GG) {
      const bG = GG.replace(/[^\p{L}]/gu, "");
      return bG.length >= 2 && bG === bG.toUpperCase() && bG !== bG.toLowerCase()
    }

    function mG(GG, bG) {
      var ZG;
      const QG = bG && (0, wG.i)(bG),
        KG = null !== (ZG = null === QG || void 0 === QG ? void 0 : QG.syllableMs) && void 0 !== ZG ? ZG : wG.d,
        zG = function(GG) {
          const bG = [];
          for (const wG of (0, SG.xc)(GG))
            if ("string" === typeof wG)
              for (const GG of wG.split(/(\s+)/)) {
                if ("" === GG) continue;
                if (/^\s+$/.test(GG)) {
                  bG.push({
                    kind: "space",
                    text: GG
                  });
                  continue
                }
                if (!EG.test(GG)) {
                  bG.push({
                    kind: "word",
                    text: GG,
                    delayMs: 0
                  });
                  continue
                }
                let wG = !0;
                for (const SG of null !== (ZG = GG.match(oG)) && void 0 !== ZG ? ZG : []) {
                  var ZG;
                  const GG = bG.at(-1);
                  wG || "word" !== (null === GG || void 0 === GG ? void 0 : GG.kind) || EG.test(SG) || /[\p{L}\p{N}]/u.test(SG) ? (wG || bG.push({
                    kind: "space",
                    text: "\u200b"
                  }), bG.push({
                    kind: "word",
                    text: SG,
                    delayMs: 0
                  }), wG = !1) : GG.text += SG
                }
              } else bG.push({
                kind: "icon",
                text: wG.icon,
                delayMs: 0
              });
          return bG
        }(GG),
        XG = [];
      let mG = [];
      for (const wG of zG) "space" !== wG.kind && (mG.push(wG), hG.test(wG.text) && (XG.push(mG), mG = []));
      XG.push(mG);
      const IG = [];
      let FG = 0;
      for (const wG of XG) {
        var vG, aG;
        const GG = null !== (vG = null === (aG = wG.at(-1)) || void 0 === aG ? void 0 : aG.text) && void 0 !== vG ? vG : "",
          bG = dG.test(GG),
          ZG = JG.test(GG),
          SG = wG.map((GG => "word" === GG.kind ? iG(GG.text) : 1)),
          zG = SG.findLastIndex((GG => GG > 0));
        for (const [dG, JG] of wG.entries()) {
          const GG = "word" === JG.kind,
            wG = SG[dG];
          JG.delayMs = FG;
          for (let SG = 0; QG && SG < wG; SG++) {
            const {
              intonation: LG
            } = QG;
            let yG = zG > 0 ? -LG.declineSemitones * (dG / zG) : 0;
            yG += uG(`${CG(JG.text)}|${SG}`) * LG.variationSemitones;
            const hG = Math.min(1, LG.variationSemitones);
            let rG = QG.glideSemitones,
              EG = 1;
            ZG && (yG += LG.exclaimLiftSemitones, EG *= kG), bG && dG === zG && (yG += LG.questionRiseSemitones * (wG > 1 ? .5 + .5 * SG / (wG - 1) : 1), SG === wG - 1 && (rG = Math.abs(rG) + LG.questionRiseSemitones / 2)), GG && WG(JG.text) && (yG += YG * hG, EG *= UG), wG > 1 && 0 === SG && (yG += pG * hG, EG *= VG), IG.push({
              atMs: FG + SG * KG,
              semitones: yG,
              glideSemitones: rG,
              durationMs: SG < wG - 1 ? Math.min(QG.durationMs, KG * fG) : QG.durationMs,
              level: EG
            })
          }
          FG += wG * KG + (hG.test(JG.text) ? yG : rG.test(JG.text) ? LG : 0)
        }
      }
      return {
        pieces: zG.map((GG => "space" === GG.kind ? GG : "icon" === GG.kind ? {
          kind: "icon",
          icon: GG.text,
          delayMs: GG.delayMs
        } : {
          kind: "word",
          text: GG.text,
          delayMs: GG.delayMs
        })),
        blips: IG
      }
    }
    var IG = ZG(1151),
      FG = ZG(1204),
      vG = ZG(1903);

    function aG(GG) {
      if ("string" === typeof GG) return GG;
      const bG = FG.d.get().getCurrentLanguageCode();
      return (0, IG.o)(bG, GG.translationKey, (0, IG.k)(GG.params, vG.b.shown))
    }

    function cG(GG) {
      const bG = void 0 === GG.voice ? null : (0, wG.j)(GG.voice),
        ZG = bG && (0, wG.i)(bG);
      return {
        plan: mG(aG(GG.line), ZG),
        synth: ZG
      }
    }

    function lG(GG) {
      const bG = [];
      let ZG = [];
      for (const [SG, LG] of GG.entries()) {
        var wG;
        "space" === LG.kind && (" " !== LG.text || "icon" !== (null === (wG = GG[SG + 1]) || void 0 === wG ? void 0 : wG.kind)) ? (ZG.length > 0 && bG.push(ZG), bG.push([LG]), ZG = []) : ZG.push(LG)
      }
      return ZG.length > 0 && bG.push(ZG), bG
    }
  },
  4874: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => VG,
      d: () => pG
    });
    var wG = ZG(4883),
      SG = ZG(17);
    const LG = .25,
      yG = .85,
      kG = .02,
      UG = .01;

    function YG(GG, bG, ZG, wG, SG, LG, kG) {
      const {
        waveform: UG,
        pitchHz: YG,
        attackMs: VG,
        releaseMs: pG,
        lowpassHz: fG
      } = ZG, QG = SG + wG.durationMs / 1e3, KG = YG * 2 ** (wG.semitones / 12), hG = GG.createOscillator();
      hG.type = UG, hG.frequency.setValueAtTime(KG, SG), hG.frequency.exponentialRampToValueAtTime(KG * 2 ** (wG.glideSemitones / 12), QG);
      const dG = SG + Math.min(VG, wG.durationMs) / 1e3,
        JG = GG.createGain();
      JG.gain.setValueAtTime(0, SG), JG.gain.linearRampToValueAtTime(LG, dG), JG.gain.linearRampToValueAtTime(LG * yG, Math.max(dG, QG - pG / 1e3)), JG.gain.linearRampToValueAtTime(0, QG);
      const rG = [hG];
      if (null !== fG) {
        const bG = GG.createBiquadFilter();
        bG.type = "lowpass", bG.frequency.value = fG, rG.push(bG)
      }
      rG.push(JG, bG);
      for (let yG = 1; yG < rG.length; yG++) rG[yG - 1].connect(rG[yG]);
      return hG.onended = () => {
        for (const GG of rG.slice(0, -1)) GG.disconnect();
        kG()
      }, hG.start(SG), hG.stop(QG), hG
    }

    function VG(GG, bG, ZG, wG, SG, yG) {
      if (0 === wG.length) return yG(), () => {};
      const VG = LG * ZG.volume * SG,
        pG = GG.createGain();
      pG.connect(bG);
      const fG = GG.currentTime + kG,
        QG = new Set;
      for (const LG of wG) {
        const bG = YG(GG, pG, ZG, LG, fG + LG.atMs / 1e3, VG * LG.level, (() => {
          QG.delete(bG), 0 === QG.size && (pG.disconnect(), yG())
        }));
        QG.add(bG)
      }
      return () => {
        const bG = GG.currentTime;
        pG.gain.setTargetAtTime(0, bG, UG);
        for (const GG of QG) try {
          GG.stop(bG + 5 * UG)
        } catch {}
      }
    }

    function pG(GG, bG) {
      var ZG;
      const LG = wG.Howler.ctx,
        yG = wG.Howler.masterGain;
      if (!LG || !yG || !SG.e.get("soundOnFromAd")) return () => {};
      const kG = wG.Howler;
      return null === (ZG = kG._autoResume) || void 0 === ZG || ZG.call(kG), VG(LG, yG, GG, bG, SG.e.get("soundVolume"), (() => {
        var GG;
        null === (GG = kG._autoSuspend) || void 0 === GG || GG.call(kG)
      }))
    }
  },
  39558: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      closeClientGame: () => jG,
      createDefaultClientPlugins: () => lG
    });
    var wG = ZG(352);

    function SG() {
      let GG;
      return {
        onCreate(bG) {
          GG = bG
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(bG, ZG, SG, LG, yG, kG) {
          var UG, YG;
          if ("Iron Chest" !== GG.getMetaInfo(yG).rootName) return;
          if (!GG.hasEffect(bG, "Thief")) return;
          const VG = GG.getBlockData(ZG, SG, LG);
          return GG.getPlayerDbId(bG) !== (null === VG || void 0 === VG || null === (UG = VG.persisted) || void 0 === UG || null === (YG = UG.shared) || void 0 === YG ? void 0 : YG.ownerDbId) ? (GG.sendMessage(bG, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: wG.O.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var LG = ZG(4255),
      yG = ZG(1198);
    const kG = 8.4,
      UG = 1e-4,
      YG = .15,
      VG = .04,
      pG = [.12, .04, .12],
      fG = 26,
      QG = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        rp: 1,
        minLifeTime: UG,
        maxLifeTime: UG,
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
        blendMode: LG.c.Standard
      },
      KG = {
        texture: "bubble",
        mipmaps: !1,
        rp: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: fG,
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
        blendMode: LG.c.Standard
      },
      hG = [0, 0, 0],
      dG = [0, 0, 0];

    function JG(GG) {
      const bG = new Map;
      let ZG = null;

      function wG(GG) {
        var bG, ZG;
        null === (bG = GG.bubbles) || void 0 === bG || bG.stop(), null === (ZG = GG.fish) || void 0 === ZG || ZG.stop()
      }

      function SG(ZG) {
        if (!ZG.readDrawnPosition(GG, dG)) {
          for (const GG of bG.values()) {
            var wG;
            null === (wG = GG.bubbles) || void 0 === wG || wG.setEmitRate(0)
          }
          return
        }
        const SG = performance.now();
        for (const [GG, yG] of bG) {
          var LG;
          if (null === (LG = yG.bubbles) || void 0 === LG || LG.setEmitRate(0), !ZG.readDrawnPosition(GG, hG)) continue;
          if (!((hG[0] - dG[0]) ** 2 + (hG[1] - dG[1]) ** 2 + (hG[2] - dG[2]) ** 2 < 900)) continue;
          const bG = Math.max(0, yG.biteAt - SG),
            wG = yG.approachDurationMs > 0 ? Math.min(1, 1 - bG / yG.approachDurationMs) : 1,
            UG = (yG.approachDurationMs - bG) / 1e3,
            JG = yG.phase + .25 * Math.sin(1.7 * UG + yG.phase),
            rG = Math.min(yG.approachDurationMs / 3e3 * 2.8, kG) * (1 - wG) * (1 + .15 * Math.sin(2.1 * UG + yG.phase)),
            zG = Math.min(1, 4 * (1 - wG)),
            EG = (.45 * Math.sin(4.1 * UG + yG.phase) + .18 * Math.sin(9.7 * UG + 2 * yG.phase)) * zG,
            oG = hG[0] + Math.cos(JG) * rG - Math.sin(JG) * EG,
            XG = Math.ceil(yG.surfaceY),
            uG = hG[2] + Math.sin(JG) * rG + Math.cos(JG) * EG,
            {
              fishAt: iG,
              bubblesAt: CG
            } = yG;
          iG[0] = CG[0] = oG, iG[1] = XG + YG, CG[1] = XG + VG, iG[2] = CG[2] = uG, yG.fish ??= ZG.createParticles(QG, {
            pos: iG
          }), yG.fish.moveTo(iG), yG.fish.emit(1), yG.bubbles ??= ZG.createParticles(KG, {
            pos: CG,
            half: pG
          }), yG.bubbles.moveTo(CG), yG.bubbles.setEmitRate(fG + 32 * (.5 + .5 * Math.sin(9 * UG + yG.phase)) ** 4 + 13 * wG)
        }
      }
      return {
        onCreate(GG) {
          ZG = GG
        },
        onAfterRender() {
          ZG && SG(ZG)
        },
        onClose() {
          for (const GG of bG.values()) wG(GG);
          bG.clear(), ZG = null
        },
        onReceivedMessageFromServer(GG, ZG) {
          if (GG !== yG.A) return;
          const {
            hookId: SG,
            waiting: LG
          } = ZG;
          if (LG) bG.has(SG) || bG.set(SG, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + LG.remainingMs,
            approachDurationMs: LG.durationMs,
            surfaceY: LG.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const GG = bG.get(SG);
            GG && wG(GG), bG.delete(SG)
          }
        }
      }
    }
    var rG = ZG(4874),
      zG = ZG(4864);

    function EG(GG) {
      let bG, ZG = null,
        wG = null;
      const SG = () => {
        var GG;
        null === (GG = wG) || void 0 === GG || GG(), wG = null
      };
      return {
        onCreate(wG) {
          bG = wG, ZG = bG.getClientOption(GG, "dialogue")
        },
        onAfterRender() {
          if (!bG) return;
          const LG = bG.getClientOption(GG, "dialogue");
          if (LG === ZG) return;
          if (ZG = LG, SG(), !LG || !1 === LG.animateIn) return;
          const {
            plan: yG,
            synth: kG
          } = (0, zG.f)(LG);
          kG && (wG = (0, rG.d)(kG, yG.blips))
        },
        onClose: SG
      }
    }
    var oG = ZG(39565);
    const XG = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      uG = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      iG = [0, 1, 2, 0, 2, 3];

    function CG(GG, bG, ZG) {
      var wG;
      let [SG, LG, yG] = bG;
      if (GG.hasPackModel("Furnace")) return null;
      const kG = ((null !== (wG = GG.getMetaInfo(ZG).rot) && void 0 !== wG ? wG : 1) - 1) * Math.PI / 2,
        UG = Math.PI + kG,
        YG = Math.cos(UG),
        VG = Math.sin(UG),
        pG = [];
      for (const [KG, hG] of XG) pG.push(KG * YG, hG, -KG * VG);
      const fG = {
          positions: pG,
          indices: iG,
          uvs: uG
        },
        QG = [SG + .5 + .51 * Math.sin(kG), LG + .375, yG + .5 + .51 * Math.cos(kG)];
      return GG.createGameMesh(fG, {
        kind: "furnaceFire"
      }, QG)
    }

    function WG(GG) {
      return Math.floor(GG / 200) % 3
    }

    function mG(GG, bG, ZG) {
      GG.setGameMesh(bG, {
        uvOffset: [0, ZG / 3]
      })
    }
    const IG = [.12, .025, .12],
      FG = [{
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
          blendMode: LG.c.Standard,
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
          blendMode: LG.c.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class vG {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(GG, bG) {
        const ZG = GG.getBlockId(bG[0], bG[1], bG[2]);
        if ("Furnace" !== GG.getMetaInfo(ZG).rootName) return;
        const wG = performance.now();
        let SG = this.smokes.find((GG => GG.pos[0] === bG[0] && GG.pos[1] === bG[1] && GG.pos[2] === bG[2] && GG.Gk === ZG));
        if (SG || (SG = {
            pos: [bG[0], bG[1], bG[2]],
            Gk: ZG,
            endMs: wG,
            lastBurstMs: -1 / 0,
            pending: new Array(FG.length).fill(0),
            fire: CG(GG, bG, ZG)
          }, this.smokes.push(SG), null !== SG.fire && (mG(GG, SG.fire, WG(wG)), this.shownFireFrame = -1)), SG.endMs = wG + 6e3, this.smokes.length > 4) {
          const bG = this.smokes.reduce(((GG, bG) => bG.endMs < GG.endMs ? bG : GG));
          aG(GG, bG), this.smokes.splice(this.smokes.indexOf(bG), 1)
        }
        wG - SG.lastBurstMs >= 300 && (SG.lastBurstMs = wG, FG.forEach(((GG, bG) => {
          SG.pending[bG] += GG.style.count
        })))
      }
      onAfterRender(GG, bG) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const ZG = performance.now();
        this.smokes = this.smokes.filter((bG => {
          const [wG, SG, LG] = bG.pos, yG = ZG < bG.endMs && GG.getBlockId(wG, SG, LG) === bG.Gk;
          return yG || aG(GG, bG), yG
        }));
        const wG = WG(ZG);
        if (wG !== this.shownFireFrame) {
          this.shownFireFrame = wG;
          for (const bG of this.smokes) null !== bG.fire && mG(GG, bG.fire, wG)
        }
        if (!GG.particlesEnabled()) {
          for (const GG of this.smokes) GG.pending.fill(0);
          return
        }
        const SG = Math.min(bG, 250) / 1e3;
        for (const LG of this.smokes) {
          const [bG, wG, yG] = LG.pos;
          if (0 !== GG.getBlockId(bG, wG + 1, yG)) {
            LG.pending.fill(0);
            continue
          }
          const kG = (LG.endMs - ZG) / 6e3,
            UG = this.centre;
          UG[0] = bG + .5, UG[1] = wG + 1.275, UG[2] = yG + .5, FG.forEach(((bG, ZG) => {
            LG.pending[ZG] += bG.perSecond * kG * SG;
            const wG = Math.floor(LG.pending[ZG]);
            wG > 0 && this.emit(GG, ZG, UG, wG) && (LG.pending[ZG] -= wG)
          }))
        }
      }
      dispose(GG) {
        for (const ZG of this.smokes) aG(GG, ZG);
        this.smokes = [];
        for (const ZG of null !== (bG = this.puffers) && void 0 !== bG ? bG : []) {
          var bG;
          ZG.dispose()
        }
        this.puffers = null
      }
      emit(GG, bG, ZG, wG) {
        return this.puffers ??= FG.map((GG => {
          let {
            style: bG,
            perSecond: ZG
          } = GG;
          const wG = (bG.count / .3 + ZG) * bG.life[1];
          return new oG.f(bG, Math.ceil(4 * wG), IG)
        })), this.puffers[bG].emit(GG, ZG, this.renderFrame, wG)
      }
    }

    function aG(GG, bG) {
      null !== bG.fire && (GG.disposeGameMesh(bG.fire), bG.fire = null)
    }

    function cG() {
      let GG;
      const bG = new vG;
      return {
        onCreate(bG) {
          GG = bG
        },
        onReceivedMessageFromServer(ZG, wG) {
          ZG === yG.B && bG.start(GG, wG)
        },
        onAfterRender(ZG) {
          bG.onAfterRender(GG, ZG)
        },
        onClose() {
          bG.dispose(GG)
        }
      }
    }

    function lG(GG, bG, ZG, wG) {
      return {
        dialogue: EG(wG.localPlayerId),
        fishing: JG(wG.localPlayerId),
        furnaceSmoke: cG(),
        ironChest: SG()
      }
    }

    function jG(GG, bG) {
      for (const SG of [GG, ...null !== bG && void 0 !== bG ? bG : []]) try {
        var ZG;
        null === SG || void 0 === SG || null === (ZG = SG.onClose) || void 0 === ZG || ZG.call(SG)
      } catch (wG) {
        console.error("Error in client onClose callback", wG)
      }
    }
  },
  39565: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG,
      f: () => LG
    });
    const wG = 1 / .6,
      SG = {
        kind: "smokePuff"
      };
    class LG {
      constructor(GG, bG, ZG) {
        this.style = GG, this.rp = bG, this.half = ZG, this.particles = null, this.lastFrame = -1
      }
      emit(GG, bG, ZG) {
        let LG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZG !== this.lastFrame && (this.lastFrame = ZG, this.particles || (this.particles = GG.createParticles(function(GG, bG) {
          const [
            [ZG, LG, yG],
            [kG, UG, YG]
          ] = GG.colours;
          return {
            texture: GG.soft ? SG : "square_particle",
            rp: bG,
            minLifeTime: GG.life[0] / wG,
            maxLifeTime: GG.life[1] / wG,
            minEmitPower: GG.power[0] * wG,
            maxEmitPower: GG.power[1] * wG,
            minSize: GG.size[0],
            maxSize: GG.size[1],
            emitRate: 0,
            gravity: [0, GG.lift * wG * wG, 0],
            dir1: [-GG.spread, 1, -GG.spread],
            dir2: [GG.spread, 1, GG.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZG, LG, yG, GG.alpha],
              maxColor: [kG, UG, YG, GG.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZG, LG, yG, 0],
              maxColor: [kG, UG, YG, 0]
            }],
            blendMode: GG.blendMode
          }
        }(this.style, this.rp), {
          pos: bG,
          half: this.half
        })), this.particles.moveTo(bG, this.half), this.particles.emit(LG), !0)
      }
      dispose() {
        var GG;
        null === (GG = this.particles) || void 0 === GG || GG.stop(), this.particles = null
      }
    }
  },
  4871: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      e: () => wG,
      g: () => LG,
      i: () => UG,
      j: () => yG
    });
    const wG = ["sine", "triangle", "square", "sawtooth"],
      SG = 55,
      LG = {
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

    function yG(GG) {
      return "string" !== typeof GG ? GG : Object.hasOwn(LG, GG) ? LG[GG] : null
    }

    function kG(GG, bG, ZG) {
      return Math.min(ZG, Math.max(bG, GG))
    }

    function UG(GG) {
      const bG = kG(GG.durationMs, 10, 500),
        ZG = kG(GG.attackMs, 0, bG),
        {
          intonation: SG
        } = GG;
      return {
        waveform: wG.includes(GG.waveform) ? GG.waveform : "sine",
        pitchHz: kG(GG.pitchHz, 20, 4e3),
        glideSemitones: kG(GG.glideSemitones, -24, 24),
        durationMs: bG,
        attackMs: ZG,
        releaseMs: kG(GG.releaseMs, 0, bG - ZG),
        lowpassHz: null === GG.lowpassHz ? null : kG(GG.lowpassHz, 20, 2e4),
        volume: kG(GG.volume, 0, 2),
        intonation: {
          variationSemitones: kG(SG.variationSemitones, 0, 6),
          declineSemitones: kG(SG.declineSemitones, 0, 12),
          questionRiseSemitones: kG(SG.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: kG(SG.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: kG(GG.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);