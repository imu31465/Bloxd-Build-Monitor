export const id = 27;
export const ids = [27];
export const modules = {
  4608: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => zD,
      e: () => VD
    });
    var ID = cD(4615),
      pD = cD(312);
    const iD = 120,
      fD = 260,
      bD = 1.15,
      QD = 1.2,
      wD = 2,
      SD = 1.08,
      BD = .8,
      yD = .95,
      MD = 8,
      tD = "[\"')\\]\u300d\u300f\uff09]*",
      ZD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${tD}$`),
      oD = new RegExp(`[?\uff1f]${tD}$`),
      vD = new RegExp(`[!\uff01]${tD}$`),
      ND = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      gD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      XD = new RegExp(`[${gD}]`),
      mD = new RegExp(`[${gD}]|[^${gD}]+`, "g"),
      nD = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function OD(DD) {
      let CD = 2166136261;
      for (let cD = 0; cD < DD.length; cD++) CD ^= DD.charCodeAt(cD), CD = Math.imul(CD, 16777619);
      return (CD >>> 0) / 4294967295 * 2 - 1
    }

    function PD(DD) {
      var CD;
      if (XD.test(DD)) return 1;
      const cD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ID = cD.replace(/[^0-9]/g, "");
      if (ID.length > 0 && !/\p{L}/u.test(cD)) return Math.min(ID.length, 4);
      const pD = null !== (CD = cD.match(nD)) && void 0 !== CD ? CD : [];
      if (0 === pD.length) {
        var iD, fD;
        const DD = null !== (iD = null === (fD = cD.match(/\p{L}/gu)) || void 0 === fD ? void 0 : fD.length) && void 0 !== iD ? iD : 0;
        return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), MD)
      }
      const bD = cD.replace(/[^\p{L}]/gu, ""),
        QD = pD.length > 1 && "e" === pD.at(-1) && bD.endsWith("e") && !bD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
      return Math.min(pD.length - (QD ? 1 : 0), MD)
    }

    function HD(DD) {
      return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function UD(DD) {
      const CD = DD.replace(/[^\p{L}]/gu, "");
      return CD.length >= 2 && CD === CD.toUpperCase() && CD !== CD.toLowerCase()
    }

    function xD(DD, CD) {
      var cD;
      const MD = CD && (0, ID.l)(CD),
        tD = null !== (cD = null === MD || void 0 === MD ? void 0 : MD.syllableMs) && void 0 !== cD ? cD : ID.d,
        gD = function(DD) {
          const CD = [];
          for (const ID of (0, pD.bc)(DD))
            if ("string" === typeof ID)
              for (const DD of ID.split(/(\s+)/)) {
                if ("" === DD) continue;
                if (/^\s+$/.test(DD)) {
                  CD.push({
                    kind: "space",
                    text: DD
                  });
                  continue
                }
                if (!XD.test(DD)) {
                  CD.push({
                    kind: "word",
                    text: DD,
                    delayMs: 0
                  });
                  continue
                }
                let ID = !0;
                for (const pD of null !== (cD = DD.match(mD)) && void 0 !== cD ? cD : []) {
                  var cD;
                  const DD = CD.at(-1);
                  ID || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || XD.test(pD) || /[\p{L}\p{N}]/u.test(pD) ? (ID || CD.push({
                    kind: "space",
                    text: "\u200b"
                  }), CD.push({
                    kind: "word",
                    text: pD,
                    delayMs: 0
                  }), ID = !1) : DD.text += pD
                }
              } else CD.push({
                kind: "icon",
                text: ID.icon,
                delayMs: 0
              });
          return CD
        }(DD),
        nD = [];
      let xD = [];
      for (const ID of gD) "space" !== ID.kind && (xD.push(ID), ZD.test(ID.text) && (nD.push(xD), xD = []));
      nD.push(xD);
      const qD = [];
      let JD = 0;
      for (const ID of nD) {
        var KD, aD;
        const DD = null !== (KD = null === (aD = ID.at(-1)) || void 0 === aD ? void 0 : aD.text) && void 0 !== KD ? KD : "",
          CD = oD.test(DD),
          cD = vD.test(DD),
          pD = ID.map((DD => "word" === DD.kind ? PD(DD.text) : 1)),
          gD = pD.findLastIndex((DD => DD > 0));
        for (const [oD, vD] of ID.entries()) {
          const DD = "word" === vD.kind,
            ID = pD[oD];
          vD.delayMs = JD;
          for (let pD = 0; MD && pD < ID; pD++) {
            const {
              intonation: iD
            } = MD;
            let fD = gD > 0 ? -iD.declineSemitones * (oD / gD) : 0;
            fD += OD(`${HD(vD.text)}|${pD}`) * iD.variationSemitones;
            const ZD = Math.min(1, iD.variationSemitones);
            let ND = MD.glideSemitones,
              XD = 1;
            cD && (fD += iD.exclaimLiftSemitones, XD *= bD), CD && oD === gD && (fD += iD.questionRiseSemitones * (ID > 1 ? .5 + .5 * pD / (ID - 1) : 1), pD === ID - 1 && (ND = Math.abs(ND) + iD.questionRiseSemitones / 2)), DD && UD(vD.text) && (fD += wD * ZD, XD *= QD), ID > 1 && 0 === pD && (fD += BD * ZD, XD *= SD), qD.push({
              atMs: JD + pD * tD,
              semitones: fD,
              glideSemitones: ND,
              durationMs: pD < ID - 1 ? Math.min(MD.durationMs, tD * yD) : MD.durationMs,
              level: XD
            })
          }
          JD += ID * tD + (ZD.test(vD.text) ? fD : ND.test(vD.text) ? iD : 0)
        }
      }
      return {
        pieces: gD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
          kind: "icon",
          icon: DD.text,
          delayMs: DD.delayMs
        } : {
          kind: "word",
          text: DD.text,
          delayMs: DD.delayMs
        })),
        blips: qD
      }
    }
    var qD = cD(1192),
      JD = cD(1250),
      KD = cD(1913);

    function aD(DD) {
      if ("string" === typeof DD) return DD;
      const CD = JD.e.get().getCurrentLanguageCode();
      return (0, qD.s)(CD, DD.translationKey, (0, qD.o)(DD.params, KD.c.shown))
    }

    function VD(DD) {
      const CD = void 0 === DD.voice ? null : (0, ID.p)(DD.voice),
        cD = CD && (0, ID.l)(CD);
      return {
        plan: xD(aD(DD.line), cD),
        synth: cD
      }
    }

    function zD(DD) {
      const CD = [];
      let cD = [];
      for (const [pD, iD] of DD.entries()) {
        var ID;
        "space" === iD.kind && (" " !== iD.text || "icon" !== (null === (ID = DD[pD + 1]) || void 0 === ID ? void 0 : ID.kind)) ? (cD.length > 0 && CD.push(cD), CD.push([iD]), cD = []) : cD.push(iD)
      }
      return cD.length > 0 && CD.push(cD), CD
    }
  },
  4618: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => SD,
      g: () => BD
    });
    var ID = cD(4621),
      pD = cD(16);
    const iD = .25,
      fD = .85,
      bD = .02,
      QD = .01;

    function wD(DD, CD, cD, ID, pD, iD, bD) {
      const {
        waveform: QD,
        pitchHz: wD,
        attackMs: SD,
        releaseMs: BD,
        lowpassHz: yD
      } = cD, MD = pD + ID.durationMs / 1e3, tD = wD * 2 ** (ID.semitones / 12), ZD = DD.createOscillator();
      ZD.type = QD, ZD.frequency.setValueAtTime(tD, pD), ZD.frequency.exponentialRampToValueAtTime(tD * 2 ** (ID.glideSemitones / 12), MD);
      const oD = pD + Math.min(SD, ID.durationMs) / 1e3,
        vD = DD.createGain();
      vD.gain.setValueAtTime(0, pD), vD.gain.linearRampToValueAtTime(iD, oD), vD.gain.linearRampToValueAtTime(iD * fD, Math.max(oD, MD - BD / 1e3)), vD.gain.linearRampToValueAtTime(0, MD);
      const ND = [ZD];
      if (null !== yD) {
        const CD = DD.createBiquadFilter();
        CD.type = "lowpass", CD.frequency.value = yD, ND.push(CD)
      }
      ND.push(vD, CD);
      for (let fD = 1; fD < ND.length; fD++) ND[fD - 1].connect(ND[fD]);
      return ZD.onended = () => {
        for (const DD of ND.slice(0, -1)) DD.disconnect();
        bD()
      }, ZD.start(pD), ZD.stop(MD), ZD
    }

    function SD(DD, CD, cD, ID, pD, fD) {
      if (0 === ID.length) return fD(), () => {};
      const SD = iD * cD.volume * pD,
        BD = DD.createGain();
      BD.connect(CD);
      const yD = DD.currentTime + bD,
        MD = new Set;
      for (const iD of ID) {
        const CD = wD(DD, BD, cD, iD, yD + iD.atMs / 1e3, SD * iD.level, (() => {
          MD.delete(CD), 0 === MD.size && (BD.disconnect(), fD())
        }));
        MD.add(CD)
      }
      return () => {
        const CD = DD.currentTime;
        BD.gain.setTargetAtTime(0, CD, QD);
        for (const DD of MD) try {
          DD.stop(CD + 5 * QD)
        } catch {}
      }
    }

    function BD(DD, CD) {
      var cD;
      const iD = ID.Howler.ctx,
        fD = ID.Howler.masterGain;
      if (!iD || !fD || !pD.d.get("soundOnFromAd")) return () => {};
      const bD = ID.Howler;
      return null === (cD = bD._autoResume) || void 0 === cD || cD.call(bD), SD(iD, fD, DD, CD, pD.d.get("soundVolume"), (() => {
        var DD;
        null === (DD = bD._autoSuspend) || void 0 === DD || DD.call(bD)
      }))
    }
  },
  38470: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      closeClientGame: () => jD,
      createDefaultClientPlugins: () => zD
    });
    var ID = cD(326);

    function pD() {
      let DD;
      return {
        onCreate(CD) {
          DD = CD
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(CD, cD, pD, iD, fD, bD) {
          var QD, wD;
          if ("Iron Chest" !== DD.getMetaInfo(fD).rootName) return;
          if (!DD.hasEffect(CD, "Thief")) return;
          const SD = DD.getBlockData(cD, pD, iD);
          return DD.getPlayerDbId(CD) !== (null === SD || void 0 === SD || null === (QD = SD.persisted) || void 0 === QD || null === (wD = QD.shared) || void 0 === wD ? void 0 : wD.ownerDbId) ? (DD.sendMessage(CD, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: ID.J.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var iD = cD(4081),
      fD = cD(1240);
    const bD = 8.4,
      QD = 1e-4,
      wD = .15,
      SD = .04,
      BD = [.12, .04, .12],
      yD = 26,
      MD = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        LB: 1,
        minLifeTime: QD,
        maxLifeTime: QD,
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
        blendMode: iD.c.Standard
      },
      tD = {
        texture: "bubble",
        mipmaps: !1,
        LB: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: yD,
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
        blendMode: iD.c.Standard
      },
      ZD = [0, 0, 0],
      oD = [0, 0, 0];

    function vD(DD) {
      const CD = new Map;
      let cD = null;

      function ID(DD) {
        var CD, cD;
        null === (CD = DD.bubbles) || void 0 === CD || CD.stop(), null === (cD = DD.fish) || void 0 === cD || cD.stop()
      }

      function pD(cD) {
        if (!cD.readDrawnPosition(DD, oD)) {
          for (const DD of CD.values()) {
            var ID;
            null === (ID = DD.bubbles) || void 0 === ID || ID.setEmitRate(0)
          }
          return
        }
        const pD = performance.now();
        for (const [DD, fD] of CD) {
          var iD;
          if (null === (iD = fD.bubbles) || void 0 === iD || iD.setEmitRate(0), !cD.readDrawnPosition(DD, ZD)) continue;
          if (!((ZD[0] - oD[0]) ** 2 + (ZD[1] - oD[1]) ** 2 + (ZD[2] - oD[2]) ** 2 < 900)) continue;
          const CD = Math.max(0, fD.biteAt - pD),
            ID = fD.approachDurationMs > 0 ? Math.min(1, 1 - CD / fD.approachDurationMs) : 1,
            QD = (fD.approachDurationMs - CD) / 1e3,
            vD = fD.phase + .25 * Math.sin(1.7 * QD + fD.phase),
            ND = Math.min(fD.approachDurationMs / 3e3 * 2.8, bD) * (1 - ID) * (1 + .15 * Math.sin(2.1 * QD + fD.phase)),
            gD = Math.min(1, 4 * (1 - ID)),
            XD = (.45 * Math.sin(4.1 * QD + fD.phase) + .18 * Math.sin(9.7 * QD + 2 * fD.phase)) * gD,
            mD = ZD[0] + Math.cos(vD) * ND - Math.sin(vD) * XD,
            nD = Math.ceil(fD.surfaceY),
            OD = ZD[2] + Math.sin(vD) * ND + Math.cos(vD) * XD,
            {
              fishAt: PD,
              bubblesAt: HD
            } = fD;
          PD[0] = HD[0] = mD, PD[1] = nD + wD, HD[1] = nD + SD, PD[2] = HD[2] = OD, fD.fish ??= cD.createParticles(MD, {
            pos: PD
          }), fD.fish.moveTo(PD), fD.fish.emit(1), fD.bubbles ??= cD.createParticles(tD, {
            pos: HD,
            half: BD
          }), fD.bubbles.moveTo(HD), fD.bubbles.setEmitRate(yD + 32 * (.5 + .5 * Math.sin(9 * QD + fD.phase)) ** 4 + 13 * ID)
        }
      }
      return {
        onCreate(DD) {
          cD = DD
        },
        onAfterRender() {
          cD && pD(cD)
        },
        onClose() {
          for (const DD of CD.values()) ID(DD);
          CD.clear(), cD = null
        },
        onReceivedMessageFromServer(DD, cD) {
          if (DD !== fD.w) return;
          const {
            hookId: pD,
            waiting: iD
          } = cD;
          if (iD) CD.has(pD) || CD.set(pD, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + iD.remainingMs,
            approachDurationMs: iD.durationMs,
            surfaceY: iD.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const DD = CD.get(pD);
            DD && ID(DD), CD.delete(pD)
          }
        }
      }
    }
    var ND = cD(4618),
      gD = cD(4608);

    function XD(DD) {
      let CD, cD = null,
        ID = null;
      const pD = () => {
        var DD;
        null === (DD = ID) || void 0 === DD || DD(), ID = null
      };
      return {
        onCreate(ID) {
          CD = ID, cD = CD.getClientOption(DD, "dialogue")
        },
        onAfterRender() {
          if (!CD) return;
          const iD = CD.getClientOption(DD, "dialogue");
          if (iD === cD) return;
          if (cD = iD, pD(), !iD || !1 === iD.animateIn) return;
          const {
            plan: fD,
            synth: bD
          } = (0, gD.e)(iD);
          bD && (ID = (0, ND.g)(bD, fD.blips))
        },
        onClose: pD
      }
    }
    var mD = cD(38478);
    const nD = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      OD = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      PD = [0, 1, 2, 0, 2, 3];

    function HD(DD, CD, cD) {
      var ID;
      let [pD, iD, fD] = CD;
      if (DD.hasPackModel("Furnace")) return null;
      const bD = ((null !== (ID = DD.getMetaInfo(cD).rot) && void 0 !== ID ? ID : 1) - 1) * Math.PI / 2,
        QD = Math.PI + bD,
        wD = Math.cos(QD),
        SD = Math.sin(QD),
        BD = [];
      for (const [tD, ZD] of nD) BD.push(tD * wD, ZD, -tD * SD);
      const yD = {
          positions: BD,
          indices: PD,
          uvs: OD
        },
        MD = [pD + .5 + .51 * Math.sin(bD), iD + .375, fD + .5 + .51 * Math.cos(bD)];
      return DD.createGameMesh(yD, {
        kind: "furnaceFire"
      }, MD)
    }

    function UD(DD) {
      return Math.floor(DD / 200) % 3
    }

    function xD(DD, CD, cD) {
      DD.setGameMesh(CD, {
        uvOffset: [0, cD / 3]
      })
    }
    const qD = [.12, .025, .12],
      JD = [{
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
          blendMode: iD.c.Standard,
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
          blendMode: iD.c.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class KD {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(DD, CD) {
        const cD = DD.getBlockId(CD[0], CD[1], CD[2]);
        if ("Furnace" !== DD.getMetaInfo(cD).rootName) return;
        const ID = performance.now();
        let pD = this.smokes.find((DD => DD.pos[0] === CD[0] && DD.pos[1] === CD[1] && DD.pos[2] === CD[2] && DD.HS === cD));
        if (pD || (pD = {
            pos: [CD[0], CD[1], CD[2]],
            HS: cD,
            endMs: ID,
            lastBurstMs: -1 / 0,
            pending: new Array(JD.length).fill(0),
            fire: HD(DD, CD, cD)
          }, this.smokes.push(pD), null !== pD.fire && (xD(DD, pD.fire, UD(ID)), this.shownFireFrame = -1)), pD.endMs = ID + 6e3, this.smokes.length > 4) {
          const CD = this.smokes.reduce(((DD, CD) => CD.endMs < DD.endMs ? CD : DD));
          aD(DD, CD), this.smokes.splice(this.smokes.indexOf(CD), 1)
        }
        ID - pD.lastBurstMs >= 300 && (pD.lastBurstMs = ID, JD.forEach(((DD, CD) => {
          pD.pending[CD] += DD.style.count
        })))
      }
      onAfterRender(DD, CD) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const cD = performance.now();
        this.smokes = this.smokes.filter((CD => {
          const [ID, pD, iD] = CD.pos, fD = cD < CD.endMs && DD.getBlockId(ID, pD, iD) === CD.HS;
          return fD || aD(DD, CD), fD
        }));
        const ID = UD(cD);
        if (ID !== this.shownFireFrame) {
          this.shownFireFrame = ID;
          for (const CD of this.smokes) null !== CD.fire && xD(DD, CD.fire, ID)
        }
        if (!DD.particlesEnabled()) {
          for (const DD of this.smokes) DD.pending.fill(0);
          return
        }
        const pD = Math.min(CD, 250) / 1e3;
        for (const iD of this.smokes) {
          const [CD, ID, fD] = iD.pos;
          if (0 !== DD.getBlockId(CD, ID + 1, fD)) {
            iD.pending.fill(0);
            continue
          }
          const bD = (iD.endMs - cD) / 6e3,
            QD = this.centre;
          QD[0] = CD + .5, QD[1] = ID + 1.275, QD[2] = fD + .5, JD.forEach(((CD, cD) => {
            iD.pending[cD] += CD.perSecond * bD * pD;
            const ID = Math.floor(iD.pending[cD]);
            ID > 0 && this.emit(DD, cD, QD, ID) && (iD.pending[cD] -= ID)
          }))
        }
      }
      dispose(DD) {
        for (const cD of this.smokes) aD(DD, cD);
        this.smokes = [];
        for (const cD of null !== (CD = this.puffers) && void 0 !== CD ? CD : []) {
          var CD;
          cD.dispose()
        }
        this.puffers = null
      }
      emit(DD, CD, cD, ID) {
        return this.puffers ??= JD.map((DD => {
          let {
            style: CD,
            perSecond: cD
          } = DD;
          const ID = (CD.count / .3 + cD) * CD.life[1];
          return new mD.f(CD, Math.ceil(4 * ID), qD)
        })), this.puffers[CD].emit(DD, cD, this.renderFrame, ID)
      }
    }

    function aD(DD, CD) {
      null !== CD.fire && (DD.disposeGameMesh(CD.fire), CD.fire = null)
    }

    function VD() {
      let DD;
      const CD = new KD;
      return {
        onCreate(CD) {
          DD = CD
        },
        onReceivedMessageFromServer(cD, ID) {
          cD === fD.A && CD.start(DD, ID)
        },
        onAfterRender(cD) {
          CD.onAfterRender(DD, cD)
        },
        onClose() {
          CD.dispose(DD)
        }
      }
    }

    function zD(DD, CD, cD, ID) {
      return {
        dialogue: XD(ID.localPlayerId),
        fishing: vD(ID.localPlayerId),
        furnaceSmoke: VD(),
        ironChest: pD()
      }
    }

    function jD(DD, CD) {
      for (const pD of [DD, ...null !== CD && void 0 !== CD ? CD : []]) try {
        var cD;
        null === pD || void 0 === pD || null === (cD = pD.onClose) || void 0 === cD || cD.call(pD)
      } catch (ID) {
        console.error("Error in client onClose callback", ID)
      }
    }
  },
  38478: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      f: () => iD
    });
    const ID = 1 / .6,
      pD = {
        kind: "smokePuff"
      };
    class iD {
      constructor(DD, CD, cD) {
        this.style = DD, this.LB = CD, this.half = cD, this.particles = null, this.lastFrame = -1
      }
      emit(DD, CD, cD) {
        let iD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return cD !== this.lastFrame && (this.lastFrame = cD, this.particles || (this.particles = DD.createParticles(function(DD, CD) {
          const [
            [cD, iD, fD],
            [bD, QD, wD]
          ] = DD.colours;
          return {
            texture: DD.soft ? pD : "square_particle",
            LB: CD,
            minLifeTime: DD.life[0] / ID,
            maxLifeTime: DD.life[1] / ID,
            minEmitPower: DD.power[0] * ID,
            maxEmitPower: DD.power[1] * ID,
            minSize: DD.size[0],
            maxSize: DD.size[1],
            emitRate: 0,
            gravity: [0, DD.lift * ID * ID, 0],
            dir1: [-DD.spread, 1, -DD.spread],
            dir2: [DD.spread, 1, DD.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cD, iD, fD, DD.alpha],
              maxColor: [bD, QD, wD, DD.alpha]
            }, {
              timeFraction: 1,
              minColor: [cD, iD, fD, 0],
              maxColor: [bD, QD, wD, 0]
            }],
            blendMode: DD.blendMode
          }
        }(this.style, this.LB), {
          pos: CD,
          half: this.half
        })), this.particles.moveTo(CD, this.half), this.particles.emit(iD), !0)
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.stop(), this.particles = null
      }
    }
  },
  4615: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD,
      h: () => ID,
      k: () => iD,
      l: () => QD,
      p: () => fD
    });
    const ID = ["sine", "triangle", "square", "sawtooth"],
      pD = 55,
      iD = {
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

    function fD(DD) {
      return "string" !== typeof DD ? DD : Object.hasOwn(iD, DD) ? iD[DD] : null
    }

    function bD(DD, CD, cD) {
      return Math.min(cD, Math.max(CD, DD))
    }

    function QD(DD) {
      const CD = bD(DD.durationMs, 10, 500),
        cD = bD(DD.attackMs, 0, CD),
        {
          intonation: pD
        } = DD;
      return {
        waveform: ID.includes(DD.waveform) ? DD.waveform : "sine",
        pitchHz: bD(DD.pitchHz, 20, 4e3),
        glideSemitones: bD(DD.glideSemitones, -24, 24),
        durationMs: CD,
        attackMs: cD,
        releaseMs: bD(DD.releaseMs, 0, CD - cD),
        lowpassHz: null === DD.lowpassHz ? null : bD(DD.lowpassHz, 20, 2e4),
        volume: bD(DD.volume, 0, 2),
        intonation: {
          variationSemitones: bD(pD.variationSemitones, 0, 6),
          declineSemitones: bD(pD.declineSemitones, 0, 12),
          questionRiseSemitones: bD(pD.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: bD(pD.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: bD(DD.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);