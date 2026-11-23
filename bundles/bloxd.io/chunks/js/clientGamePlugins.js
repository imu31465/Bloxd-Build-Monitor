export const id = 27;
export const ids = [27];
export const modules = {
  4775: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => EC,
      f: () => HC
    });
    var QC = ZC(4783),
      wC = ZC(310);
    const bC = 120,
      nC = 260,
      fC = 1.15,
      oC = 1.2,
      qC = 2,
      FC = 1.08,
      WC = .8,
      NC = .95,
      MC = 8,
      gC = "[\"')\\]\u300d\u300f\uff09]*",
      SC = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${gC}$`),
      pC = new RegExp(`[?\uff1f]${gC}$`),
      PC = new RegExp(`[!\uff01]${gC}$`),
      GC = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      RC = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      AC = new RegExp(`[${RC}]`),
      xC = new RegExp(`[${RC}]|[^${RC}]+`, "g"),
      JC = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function IC(CC) {
      let zC = 2166136261;
      for (let ZC = 0; ZC < CC.length; ZC++) zC ^= CC.charCodeAt(ZC), zC = Math.imul(zC, 16777619);
      return (zC >>> 0) / 4294967295 * 2 - 1
    }

    function iC(CC) {
      var zC;
      if (AC.test(CC)) return 1;
      const ZC = CC.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        QC = ZC.replace(/[^0-9]/g, "");
      if (QC.length > 0 && !/\p{L}/u.test(ZC)) return Math.min(QC.length, 4);
      const wC = null !== (zC = ZC.match(JC)) && void 0 !== zC ? zC : [];
      if (0 === wC.length) {
        var bC, nC;
        const CC = null !== (bC = null === (nC = ZC.match(/\p{L}/gu)) || void 0 === nC ? void 0 : nC.length) && void 0 !== bC ? bC : 0;
        return 0 === CC ? 0 : Math.min(Math.max(1, Math.round(CC / 2.5)), MC)
      }
      const fC = ZC.replace(/[^\p{L}]/gu, ""),
        oC = wC.length > 1 && "e" === wC.at(-1) && fC.endsWith("e") && !fC.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(CC.replace(/[^\p{L}]/gu, ""));
      return Math.min(wC.length - (oC ? 1 : 0), MC)
    }

    function vC(CC) {
      return CC.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function eC(CC) {
      const zC = CC.replace(/[^\p{L}]/gu, "");
      return zC.length >= 2 && zC === zC.toUpperCase() && zC !== zC.toLowerCase()
    }

    function hC(CC, zC) {
      var ZC;
      const MC = zC && (0, QC.m)(zC),
        gC = null !== (ZC = null === MC || void 0 === MC ? void 0 : MC.syllableMs) && void 0 !== ZC ? ZC : QC.b,
        RC = function(CC) {
          const zC = [];
          for (const QC of (0, wC.dc)(CC))
            if ("string" === typeof QC)
              for (const CC of QC.split(/(\s+)/)) {
                if ("" === CC) continue;
                if (/^\s+$/.test(CC)) {
                  zC.push({
                    kind: "space",
                    text: CC
                  });
                  continue
                }
                if (!AC.test(CC)) {
                  zC.push({
                    kind: "word",
                    text: CC,
                    delayMs: 0
                  });
                  continue
                }
                let QC = !0;
                for (const wC of null !== (ZC = CC.match(xC)) && void 0 !== ZC ? ZC : []) {
                  var ZC;
                  const CC = zC.at(-1);
                  QC || "word" !== (null === CC || void 0 === CC ? void 0 : CC.kind) || AC.test(wC) || /[\p{L}\p{N}]/u.test(wC) ? (QC || zC.push({
                    kind: "space",
                    text: "\u200b"
                  }), zC.push({
                    kind: "word",
                    text: wC,
                    delayMs: 0
                  }), QC = !1) : CC.text += wC
                }
              } else zC.push({
                kind: "icon",
                text: QC.icon,
                delayMs: 0
              });
          return zC
        }(CC),
        JC = [];
      let hC = [];
      for (const QC of RC) "space" !== QC.kind && (hC.push(QC), SC.test(QC.text) && (JC.push(hC), hC = []));
      JC.push(hC);
      const KC = [];
      let YC = 0;
      for (const QC of JC) {
        var dC, mC;
        const CC = null !== (dC = null === (mC = QC.at(-1)) || void 0 === mC ? void 0 : mC.text) && void 0 !== dC ? dC : "",
          zC = pC.test(CC),
          ZC = PC.test(CC),
          wC = QC.map((CC => "word" === CC.kind ? iC(CC.text) : 1)),
          RC = wC.findLastIndex((CC => CC > 0));
        for (const [pC, PC] of QC.entries()) {
          const CC = "word" === PC.kind,
            QC = wC[pC];
          PC.delayMs = YC;
          for (let wC = 0; MC && wC < QC; wC++) {
            const {
              intonation: bC
            } = MC;
            let nC = RC > 0 ? -bC.declineSemitones * (pC / RC) : 0;
            nC += IC(`${vC(PC.text)}|${wC}`) * bC.variationSemitones;
            const SC = Math.min(1, bC.variationSemitones);
            let GC = MC.glideSemitones,
              AC = 1;
            ZC && (nC += bC.exclaimLiftSemitones, AC *= fC), zC && pC === RC && (nC += bC.questionRiseSemitones * (QC > 1 ? .5 + .5 * wC / (QC - 1) : 1), wC === QC - 1 && (GC = Math.abs(GC) + bC.questionRiseSemitones / 2)), CC && eC(PC.text) && (nC += qC * SC, AC *= oC), QC > 1 && 0 === wC && (nC += WC * SC, AC *= FC), KC.push({
              atMs: YC + wC * gC,
              semitones: nC,
              glideSemitones: GC,
              durationMs: wC < QC - 1 ? Math.min(MC.durationMs, gC * NC) : MC.durationMs,
              level: AC
            })
          }
          YC += QC * gC + (SC.test(PC.text) ? nC : GC.test(PC.text) ? bC : 0)
        }
      }
      return {
        pieces: RC.map((CC => "space" === CC.kind ? CC : "icon" === CC.kind ? {
          kind: "icon",
          icon: CC.text,
          delayMs: CC.delayMs
        } : {
          kind: "word",
          text: CC.text,
          delayMs: CC.delayMs
        })),
        blips: KC
      }
    }
    var KC = ZC(1143),
      YC = ZC(1192),
      dC = ZC(1843);

    function mC(CC) {
      if ("string" === typeof CC) return CC;
      const zC = YC.h.get().getCurrentLanguageCode();
      return (0, KC.r)(zC, CC.translationKey, (0, KC.q)(CC.params, dC.d.shown))
    }

    function HC(CC) {
      const zC = void 0 === CC.voice ? null : (0, QC.q)(CC.voice),
        ZC = zC && (0, QC.m)(zC);
      return {
        plan: hC(mC(CC.line), ZC),
        synth: ZC
      }
    }

    function EC(CC) {
      const zC = [];
      let ZC = [];
      for (const [wC, bC] of CC.entries()) {
        var QC;
        "space" === bC.kind && (" " !== bC.text || "icon" !== (null === (QC = CC[wC + 1]) || void 0 === QC ? void 0 : QC.kind)) ? (ZC.length > 0 && zC.push(ZC), zC.push([bC]), ZC = []) : ZC.push(bC)
      }
      return ZC.length > 0 && zC.push(ZC), zC
    }
  },
  4788: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      f: () => WC
    });
    var QC = ZC(4797),
      wC = ZC(20);
    const bC = .25,
      nC = .85,
      fC = .02,
      oC = .01;

    function qC(CC, zC, ZC, QC, wC, bC, fC) {
      const {
        waveform: oC,
        pitchHz: qC,
        attackMs: FC,
        releaseMs: WC,
        lowpassHz: NC
      } = ZC, MC = wC + QC.durationMs / 1e3, gC = qC * 2 ** (QC.semitones / 12), SC = CC.createOscillator();
      SC.type = oC, SC.frequency.setValueAtTime(gC, wC), SC.frequency.exponentialRampToValueAtTime(gC * 2 ** (QC.glideSemitones / 12), MC);
      const pC = wC + Math.min(FC, QC.durationMs) / 1e3,
        PC = CC.createGain();
      PC.gain.setValueAtTime(0, wC), PC.gain.linearRampToValueAtTime(bC, pC), PC.gain.linearRampToValueAtTime(bC * nC, Math.max(pC, MC - WC / 1e3)), PC.gain.linearRampToValueAtTime(0, MC);
      const GC = [SC];
      if (null !== NC) {
        const zC = CC.createBiquadFilter();
        zC.type = "lowpass", zC.frequency.value = NC, GC.push(zC)
      }
      GC.push(PC, zC);
      for (let nC = 1; nC < GC.length; nC++) GC[nC - 1].connect(GC[nC]);
      return SC.onended = () => {
        for (const CC of GC.slice(0, -1)) CC.disconnect();
        fC()
      }, SC.start(wC), SC.stop(MC), SC
    }

    function FC(CC, zC, ZC, QC, wC, nC) {
      if (0 === QC.length) return nC(), () => {};
      const FC = bC * ZC.volume * wC,
        WC = CC.createGain();
      WC.connect(zC);
      const NC = CC.currentTime + fC,
        MC = new Set;
      for (const bC of QC) {
        const zC = qC(CC, WC, ZC, bC, NC + bC.atMs / 1e3, FC * bC.level, (() => {
          MC.delete(zC), 0 === MC.size && (WC.disconnect(), nC())
        }));
        MC.add(zC)
      }
      return () => {
        const zC = CC.currentTime;
        WC.gain.setTargetAtTime(0, zC, oC);
        for (const CC of MC) try {
          CC.stop(zC + 5 * oC)
        } catch {}
      }
    }

    function WC(CC, zC) {
      var ZC;
      const bC = QC.Howler.ctx,
        nC = QC.Howler.masterGain;
      if (!bC || !nC || !wC.b.get("soundOnFromAd")) return () => {};
      const fC = QC.Howler;
      return null === (ZC = fC._autoResume) || void 0 === ZC || ZC.call(fC), FC(bC, nC, CC, zC, wC.b.get("soundVolume"), (() => {
        var CC;
        null === (CC = fC._autoSuspend) || void 0 === CC || CC.call(fC)
      }))
    }
  },
  38976: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      closeClientGame: () => lC,
      createDefaultClientPlugins: () => EC
    });
    var QC = ZC(326);

    function wC() {
      let CC;
      return {
        onCreate(zC) {
          CC = zC
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(zC, ZC, wC, bC, nC, fC) {
          var oC, qC;
          if ("Iron Chest" !== CC.getMetaInfo(nC).rootName) return;
          if (!CC.hasEffect(zC, "Thief")) return;
          const FC = CC.getBlockData(ZC, wC, bC);
          return CC.getPlayerDbId(zC) !== (null === FC || void 0 === FC || null === (oC = FC.persisted) || void 0 === oC || null === (qC = oC.shared) || void 0 === qC ? void 0 : qC.ownerDbId) ? (CC.sendMessage(zC, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: QC.H.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var bC = ZC(4179),
      nC = ZC(1183);
    const fC = 8.4,
      oC = 1e-4,
      qC = .15,
      FC = .04,
      WC = [.12, .04, .12],
      NC = 26,
      MC = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        HW: 1,
        minLifeTime: oC,
        maxLifeTime: oC,
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
        blendMode: bC.d.Standard
      },
      gC = {
        texture: "bubble",
        mipmaps: !1,
        HW: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: NC,
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
        blendMode: bC.d.Standard
      },
      SC = [0, 0, 0],
      pC = [0, 0, 0];

    function PC(CC) {
      const zC = new Map;
      let ZC = null;

      function QC(CC) {
        var zC, ZC;
        null === (zC = CC.bubbles) || void 0 === zC || zC.stop(), null === (ZC = CC.fish) || void 0 === ZC || ZC.stop()
      }

      function wC(ZC) {
        if (!ZC.readDrawnPosition(CC, pC)) {
          for (const CC of zC.values()) {
            var QC;
            null === (QC = CC.bubbles) || void 0 === QC || QC.setEmitRate(0)
          }
          return
        }
        const wC = performance.now();
        for (const [CC, nC] of zC) {
          var bC;
          if (null === (bC = nC.bubbles) || void 0 === bC || bC.setEmitRate(0), !ZC.readDrawnPosition(CC, SC)) continue;
          if (!((SC[0] - pC[0]) ** 2 + (SC[1] - pC[1]) ** 2 + (SC[2] - pC[2]) ** 2 < 900)) continue;
          const zC = Math.max(0, nC.biteAt - wC),
            QC = nC.approachDurationMs > 0 ? Math.min(1, 1 - zC / nC.approachDurationMs) : 1,
            oC = (nC.approachDurationMs - zC) / 1e3,
            PC = nC.phase + .25 * Math.sin(1.7 * oC + nC.phase),
            GC = Math.min(nC.approachDurationMs / 3e3 * 2.8, fC) * (1 - QC) * (1 + .15 * Math.sin(2.1 * oC + nC.phase)),
            RC = Math.min(1, 4 * (1 - QC)),
            AC = (.45 * Math.sin(4.1 * oC + nC.phase) + .18 * Math.sin(9.7 * oC + 2 * nC.phase)) * RC,
            xC = SC[0] + Math.cos(PC) * GC - Math.sin(PC) * AC,
            JC = Math.ceil(nC.surfaceY),
            IC = SC[2] + Math.sin(PC) * GC + Math.cos(PC) * AC,
            {
              fishAt: iC,
              bubblesAt: vC
            } = nC;
          iC[0] = vC[0] = xC, iC[1] = JC + qC, vC[1] = JC + FC, iC[2] = vC[2] = IC, nC.fish ??= ZC.createParticles(MC, {
            pos: iC
          }), nC.fish.moveTo(iC), nC.fish.emit(1), nC.bubbles ??= ZC.createParticles(gC, {
            pos: vC,
            half: WC
          }), nC.bubbles.moveTo(vC), nC.bubbles.setEmitRate(NC + 32 * (.5 + .5 * Math.sin(9 * oC + nC.phase)) ** 4 + 13 * QC)
        }
      }
      return {
        onCreate(CC) {
          ZC = CC
        },
        onAfterRender() {
          ZC && wC(ZC)
        },
        onClose() {
          for (const CC of zC.values()) QC(CC);
          zC.clear(), ZC = null
        },
        onReceivedMessageFromServer(CC, ZC) {
          if (CC !== nC.B) return;
          const {
            hookId: wC,
            waiting: bC
          } = ZC;
          if (bC) zC.has(wC) || zC.set(wC, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + bC.remainingMs,
            approachDurationMs: bC.durationMs,
            surfaceY: bC.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const CC = zC.get(wC);
            CC && QC(CC), zC.delete(wC)
          }
        }
      }
    }
    var GC = ZC(4788),
      RC = ZC(4775);

    function AC(CC) {
      let zC, ZC = null,
        QC = null;
      const wC = () => {
        var CC;
        null === (CC = QC) || void 0 === CC || CC(), QC = null
      };
      return {
        onCreate(QC) {
          zC = QC, ZC = zC.getClientOption(CC, "dialogue")
        },
        onAfterRender() {
          if (!zC) return;
          const bC = zC.getClientOption(CC, "dialogue");
          if (bC === ZC) return;
          if (ZC = bC, wC(), !bC || !1 === bC.animateIn) return;
          const {
            plan: nC,
            synth: fC
          } = (0, RC.f)(bC);
          fC && (QC = (0, GC.f)(fC, nC.blips))
        },
        onClose: wC
      }
    }
    var xC = ZC(38979);
    const JC = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      IC = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      iC = [0, 1, 2, 0, 2, 3];

    function vC(CC, zC, ZC) {
      var QC;
      let [wC, bC, nC] = zC;
      if (CC.hasPackModel("Furnace")) return null;
      const fC = ((null !== (QC = CC.getMetaInfo(ZC).rot) && void 0 !== QC ? QC : 1) - 1) * Math.PI / 2,
        oC = Math.PI + fC,
        qC = Math.cos(oC),
        FC = Math.sin(oC),
        WC = [];
      for (const [gC, SC] of JC) WC.push(gC * qC, SC, -gC * FC);
      const NC = {
          positions: WC,
          indices: iC,
          uvs: IC
        },
        MC = [wC + .5 + .51 * Math.sin(fC), bC + .375, nC + .5 + .51 * Math.cos(fC)];
      return CC.createGameMesh(NC, {
        kind: "furnaceFire"
      }, MC)
    }

    function eC(CC) {
      return Math.floor(CC / 200) % 3
    }

    function hC(CC, zC, ZC) {
      CC.setGameMesh(zC, {
        uvOffset: [0, ZC / 3]
      })
    }
    const KC = [.12, .025, .12],
      YC = [{
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
          blendMode: bC.d.Standard,
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
          blendMode: bC.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class dC {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(CC, zC) {
        const ZC = CC.getBlockId(zC[0], zC[1], zC[2]);
        if ("Furnace" !== CC.getMetaInfo(ZC).rootName) return;
        const QC = performance.now();
        let wC = this.smokes.find((CC => CC.pos[0] === zC[0] && CC.pos[1] === zC[1] && CC.pos[2] === zC[2] && CC.SF === ZC));
        if (wC || (wC = {
            pos: [zC[0], zC[1], zC[2]],
            SF: ZC,
            endMs: QC,
            lastBurstMs: -1 / 0,
            pending: new Array(YC.length).fill(0),
            fire: vC(CC, zC, ZC)
          }, this.smokes.push(wC), null !== wC.fire && (hC(CC, wC.fire, eC(QC)), this.shownFireFrame = -1)), wC.endMs = QC + 6e3, this.smokes.length > 4) {
          const zC = this.smokes.reduce(((CC, zC) => zC.endMs < CC.endMs ? zC : CC));
          mC(CC, zC), this.smokes.splice(this.smokes.indexOf(zC), 1)
        }
        QC - wC.lastBurstMs >= 300 && (wC.lastBurstMs = QC, YC.forEach(((CC, zC) => {
          wC.pending[zC] += CC.style.count
        })))
      }
      onAfterRender(CC, zC) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const ZC = performance.now();
        this.smokes = this.smokes.filter((zC => {
          const [QC, wC, bC] = zC.pos, nC = ZC < zC.endMs && CC.getBlockId(QC, wC, bC) === zC.SF;
          return nC || mC(CC, zC), nC
        }));
        const QC = eC(ZC);
        if (QC !== this.shownFireFrame) {
          this.shownFireFrame = QC;
          for (const zC of this.smokes) null !== zC.fire && hC(CC, zC.fire, QC)
        }
        if (!CC.particlesEnabled()) {
          for (const CC of this.smokes) CC.pending.fill(0);
          return
        }
        const wC = Math.min(zC, 250) / 1e3;
        for (const bC of this.smokes) {
          const [zC, QC, nC] = bC.pos;
          if (0 !== CC.getBlockId(zC, QC + 1, nC)) {
            bC.pending.fill(0);
            continue
          }
          const fC = (bC.endMs - ZC) / 6e3,
            oC = this.centre;
          oC[0] = zC + .5, oC[1] = QC + 1.275, oC[2] = nC + .5, YC.forEach(((zC, ZC) => {
            bC.pending[ZC] += zC.perSecond * fC * wC;
            const QC = Math.floor(bC.pending[ZC]);
            QC > 0 && this.emit(CC, ZC, oC, QC) && (bC.pending[ZC] -= QC)
          }))
        }
      }
      dispose(CC) {
        for (const ZC of this.smokes) mC(CC, ZC);
        this.smokes = [];
        for (const ZC of null !== (zC = this.puffers) && void 0 !== zC ? zC : []) {
          var zC;
          ZC.dispose()
        }
        this.puffers = null
      }
      emit(CC, zC, ZC, QC) {
        return this.puffers ??= YC.map((CC => {
          let {
            style: zC,
            perSecond: ZC
          } = CC;
          const QC = (zC.count / .3 + ZC) * zC.life[1];
          return new xC.g(zC, Math.ceil(4 * QC), KC)
        })), this.puffers[zC].emit(CC, ZC, this.renderFrame, QC)
      }
    }

    function mC(CC, zC) {
      null !== zC.fire && (CC.disposeGameMesh(zC.fire), zC.fire = null)
    }

    function HC() {
      let CC;
      const zC = new dC;
      return {
        onCreate(zC) {
          CC = zC
        },
        onReceivedMessageFromServer(ZC, QC) {
          ZC === nC.F && zC.start(CC, QC)
        },
        onAfterRender(ZC) {
          zC.onAfterRender(CC, ZC)
        },
        onClose() {
          zC.dispose(CC)
        }
      }
    }

    function EC(CC, zC, ZC, QC) {
      return {
        dialogue: AC(QC.localPlayerId),
        fishing: PC(QC.localPlayerId),
        furnaceSmoke: HC(),
        ironChest: wC()
      }
    }

    function lC(CC, zC) {
      for (const wC of [CC, ...null !== zC && void 0 !== zC ? zC : []]) try {
        var ZC;
        null === wC || void 0 === wC || null === (ZC = wC.onClose) || void 0 === ZC || ZC.call(wC)
      } catch (QC) {
        console.error("Error in client onClose callback", QC)
      }
    }
  },
  38979: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC,
      g: () => bC
    });
    const QC = 1 / .6,
      wC = {
        kind: "smokePuff"
      };
    class bC {
      constructor(CC, zC, ZC) {
        this.style = CC, this.HW = zC, this.half = ZC, this.particles = null, this.lastFrame = -1
      }
      emit(CC, zC, ZC) {
        let bC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return ZC !== this.lastFrame && (this.lastFrame = ZC, this.particles || (this.particles = CC.createParticles(function(CC, zC) {
          const [
            [ZC, bC, nC],
            [fC, oC, qC]
          ] = CC.colours;
          return {
            texture: CC.soft ? wC : "square_particle",
            HW: zC,
            minLifeTime: CC.life[0] / QC,
            maxLifeTime: CC.life[1] / QC,
            minEmitPower: CC.power[0] * QC,
            maxEmitPower: CC.power[1] * QC,
            minSize: CC.size[0],
            maxSize: CC.size[1],
            emitRate: 0,
            gravity: [0, CC.lift * QC * QC, 0],
            dir1: [-CC.spread, 1, -CC.spread],
            dir2: [CC.spread, 1, CC.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [ZC, bC, nC, CC.alpha],
              maxColor: [fC, oC, qC, CC.alpha]
            }, {
              timeFraction: 1,
              minColor: [ZC, bC, nC, 0],
              maxColor: [fC, oC, qC, 0]
            }],
            blendMode: CC.blendMode
          }
        }(this.style, this.HW), {
          pos: zC,
          half: this.half
        })), this.particles.moveTo(zC, this.half), this.particles.emit(bC), !0)
      }
      dispose() {
        var CC;
        null === (CC = this.particles) || void 0 === CC || CC.stop(), this.particles = null
      }
    }
  },
  4783: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      f: () => QC,
      i: () => bC,
      m: () => oC,
      q: () => nC
    });
    const QC = ["sine", "triangle", "square", "sawtooth"],
      wC = 55,
      bC = {
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

    function nC(CC) {
      return "string" !== typeof CC ? CC : Object.hasOwn(bC, CC) ? bC[CC] : null
    }

    function fC(CC, zC, ZC) {
      return Math.min(ZC, Math.max(zC, CC))
    }

    function oC(CC) {
      const zC = fC(CC.durationMs, 10, 500),
        ZC = fC(CC.attackMs, 0, zC),
        {
          intonation: wC
        } = CC;
      return {
        waveform: QC.includes(CC.waveform) ? CC.waveform : "sine",
        pitchHz: fC(CC.pitchHz, 20, 4e3),
        glideSemitones: fC(CC.glideSemitones, -24, 24),
        durationMs: zC,
        attackMs: ZC,
        releaseMs: fC(CC.releaseMs, 0, zC - ZC),
        lowpassHz: null === CC.lowpassHz ? null : fC(CC.lowpassHz, 20, 2e4),
        volume: fC(CC.volume, 0, 2),
        intonation: {
          variationSemitones: fC(wC.variationSemitones, 0, 6),
          declineSemitones: fC(wC.declineSemitones, 0, 12),
          questionRiseSemitones: fC(wC.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: fC(wC.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: fC(CC.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);