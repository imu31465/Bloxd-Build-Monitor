export const id = 27;
export const ids = [27];
export const modules = {
  4859: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => SD,
      g: () => dD
    });
    var pD = wD(4866),
      sD = wD(338);
    const KD = 120,
      rD = 260,
      LD = 1.15,
      cD = 1.2,
      gD = 2,
      RD = 1.08,
      AD = .8,
      UD = .95,
      fD = 8,
      ID = "[\"')\\]\u300d\u300f\uff09]*",
      BD = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${ID}$`),
      GD = new RegExp(`[?\uff1f]${ID}$`),
      hD = new RegExp(`[!\uff01]${ID}$`),
      nD = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      MD = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      OD = new RegExp(`[${MD}]`),
      JD = new RegExp(`[${MD}]|[^${MD}]+`, "g"),
      ED = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function QD(DD) {
      let zD = 2166136261;
      for (let wD = 0; wD < DD.length; wD++) zD ^= DD.charCodeAt(wD), zD = Math.imul(zD, 16777619);
      return (zD >>> 0) / 4294967295 * 2 - 1
    }

    function XD(DD) {
      var zD;
      if (OD.test(DD)) return 1;
      const wD = DD.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        pD = wD.replace(/[^0-9]/g, "");
      if (pD.length > 0 && !/\p{L}/u.test(wD)) return Math.min(pD.length, 4);
      const sD = null !== (zD = wD.match(ED)) && void 0 !== zD ? zD : [];
      if (0 === sD.length) {
        var KD, rD;
        const DD = null !== (KD = null === (rD = wD.match(/\p{L}/gu)) || void 0 === rD ? void 0 : rD.length) && void 0 !== KD ? KD : 0;
        return 0 === DD ? 0 : Math.min(Math.max(1, Math.round(DD / 2.5)), fD)
      }
      const LD = wD.replace(/[^\p{L}]/gu, ""),
        cD = sD.length > 1 && "e" === sD.at(-1) && LD.endsWith("e") && !LD.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(DD.replace(/[^\p{L}]/gu, ""));
      return Math.min(sD.length - (cD ? 1 : 0), fD)
    }

    function VD(DD) {
      return DD.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function PD(DD) {
      const zD = DD.replace(/[^\p{L}]/gu, "");
      return zD.length >= 2 && zD === zD.toUpperCase() && zD !== zD.toLowerCase()
    }

    function CD(DD, zD) {
      var wD;
      const fD = zD && (0, pD.i)(zD),
        ID = null !== (wD = null === fD || void 0 === fD ? void 0 : fD.syllableMs) && void 0 !== wD ? wD : pD.c,
        MD = function(DD) {
          const zD = [];
          for (const pD of (0, sD.Vb)(DD))
            if ("string" === typeof pD)
              for (const DD of pD.split(/(\s+)/)) {
                if ("" === DD) continue;
                if (/^\s+$/.test(DD)) {
                  zD.push({
                    kind: "space",
                    text: DD
                  });
                  continue
                }
                if (!OD.test(DD)) {
                  zD.push({
                    kind: "word",
                    text: DD,
                    delayMs: 0
                  });
                  continue
                }
                let pD = !0;
                for (const sD of null !== (wD = DD.match(JD)) && void 0 !== wD ? wD : []) {
                  var wD;
                  const DD = zD.at(-1);
                  pD || "word" !== (null === DD || void 0 === DD ? void 0 : DD.kind) || OD.test(sD) || /[\p{L}\p{N}]/u.test(sD) ? (pD || zD.push({
                    kind: "space",
                    text: "\u200b"
                  }), zD.push({
                    kind: "word",
                    text: sD,
                    delayMs: 0
                  }), pD = !1) : DD.text += sD
                }
              } else zD.push({
                kind: "icon",
                text: pD.icon,
                delayMs: 0
              });
          return zD
        }(DD),
        ED = [];
      let CD = [];
      for (const pD of MD) "space" !== pD.kind && (CD.push(pD), BD.test(pD.text) && (ED.push(CD), CD = []));
      ED.push(CD);
      const xD = [];
      let TD = 0;
      for (const pD of ED) {
        var bD, jD;
        const DD = null !== (bD = null === (jD = pD.at(-1)) || void 0 === jD ? void 0 : jD.text) && void 0 !== bD ? bD : "",
          zD = GD.test(DD),
          wD = hD.test(DD),
          sD = pD.map((DD => "word" === DD.kind ? XD(DD.text) : 1)),
          MD = sD.findLastIndex((DD => DD > 0));
        for (const [GD, hD] of pD.entries()) {
          const DD = "word" === hD.kind,
            pD = sD[GD];
          hD.delayMs = TD;
          for (let sD = 0; fD && sD < pD; sD++) {
            const {
              intonation: KD
            } = fD;
            let rD = MD > 0 ? -KD.declineSemitones * (GD / MD) : 0;
            rD += QD(`${VD(hD.text)}|${sD}`) * KD.variationSemitones;
            const BD = Math.min(1, KD.variationSemitones);
            let nD = fD.glideSemitones,
              OD = 1;
            wD && (rD += KD.exclaimLiftSemitones, OD *= LD), zD && GD === MD && (rD += KD.questionRiseSemitones * (pD > 1 ? .5 + .5 * sD / (pD - 1) : 1), sD === pD - 1 && (nD = Math.abs(nD) + KD.questionRiseSemitones / 2)), DD && PD(hD.text) && (rD += gD * BD, OD *= cD), pD > 1 && 0 === sD && (rD += AD * BD, OD *= RD), xD.push({
              atMs: TD + sD * ID,
              semitones: rD,
              glideSemitones: nD,
              durationMs: sD < pD - 1 ? Math.min(fD.durationMs, ID * UD) : fD.durationMs,
              level: OD
            })
          }
          TD += pD * ID + (BD.test(hD.text) ? rD : nD.test(hD.text) ? KD : 0)
        }
      }
      return {
        pieces: MD.map((DD => "space" === DD.kind ? DD : "icon" === DD.kind ? {
          kind: "icon",
          icon: DD.text,
          delayMs: DD.delayMs
        } : {
          kind: "word",
          text: DD.text,
          delayMs: DD.delayMs
        })),
        blips: xD
      }
    }
    var xD = wD(1200),
      TD = wD(1260),
      bD = wD(1932);

    function jD(DD) {
      if ("string" === typeof DD) return DD;
      const zD = TD.e.get().getCurrentLanguageCode();
      return (0, xD.s)(zD, DD.translationKey, (0, xD.r)(DD.params, bD.d.shown))
    }

    function dD(DD) {
      const zD = void 0 === DD.voice ? null : (0, pD.l)(DD.voice),
        wD = zD && (0, pD.i)(zD);
      return {
        plan: CD(jD(DD.line), wD),
        synth: wD
      }
    }

    function SD(DD) {
      const zD = [];
      let wD = [];
      for (const [sD, KD] of DD.entries()) {
        var pD;
        "space" === KD.kind && (" " !== KD.text || "icon" !== (null === (pD = DD[sD + 1]) || void 0 === pD ? void 0 : pD.kind)) ? (wD.length > 0 && zD.push(wD), zD.push([KD]), wD = []) : wD.push(KD)
      }
      return wD.length > 0 && zD.push(wD), zD
    }
  },
  4872: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      g: () => AD
    });
    var pD = wD(4875),
      sD = wD(20);
    const KD = .25,
      rD = .85,
      LD = .02,
      cD = .01;

    function gD(DD, zD, wD, pD, sD, KD, LD) {
      const {
        waveform: cD,
        pitchHz: gD,
        attackMs: RD,
        releaseMs: AD,
        lowpassHz: UD
      } = wD, fD = sD + pD.durationMs / 1e3, ID = gD * 2 ** (pD.semitones / 12), BD = DD.createOscillator();
      BD.type = cD, BD.frequency.setValueAtTime(ID, sD), BD.frequency.exponentialRampToValueAtTime(ID * 2 ** (pD.glideSemitones / 12), fD);
      const GD = sD + Math.min(RD, pD.durationMs) / 1e3,
        hD = DD.createGain();
      hD.gain.setValueAtTime(0, sD), hD.gain.linearRampToValueAtTime(KD, GD), hD.gain.linearRampToValueAtTime(KD * rD, Math.max(GD, fD - AD / 1e3)), hD.gain.linearRampToValueAtTime(0, fD);
      const nD = [BD];
      if (null !== UD) {
        const zD = DD.createBiquadFilter();
        zD.type = "lowpass", zD.frequency.value = UD, nD.push(zD)
      }
      nD.push(hD, zD);
      for (let rD = 1; rD < nD.length; rD++) nD[rD - 1].connect(nD[rD]);
      return BD.onended = () => {
        for (const DD of nD.slice(0, -1)) DD.disconnect();
        LD()
      }, BD.start(sD), BD.stop(fD), BD
    }

    function RD(DD, zD, wD, pD, sD, rD) {
      if (0 === pD.length) return rD(), () => {};
      const RD = KD * wD.volume * sD,
        AD = DD.createGain();
      AD.connect(zD);
      const UD = DD.currentTime + LD,
        fD = new Set;
      for (const KD of pD) {
        const zD = gD(DD, AD, wD, KD, UD + KD.atMs / 1e3, RD * KD.level, (() => {
          fD.delete(zD), 0 === fD.size && (AD.disconnect(), rD())
        }));
        fD.add(zD)
      }
      return () => {
        const zD = DD.currentTime;
        AD.gain.setTargetAtTime(0, zD, cD);
        for (const DD of fD) try {
          DD.stop(zD + 5 * cD)
        } catch {}
      }
    }

    function AD(DD, zD) {
      var wD;
      const KD = pD.Howler.ctx,
        rD = pD.Howler.masterGain;
      if (!KD || !rD || !sD.e.get("soundOnFromAd")) return () => {};
      const LD = pD.Howler;
      return null === (wD = LD._autoResume) || void 0 === wD || wD.call(LD), RD(KD, rD, DD, zD, sD.e.get("soundVolume"), (() => {
        var DD;
        null === (DD = LD._autoSuspend) || void 0 === DD || DD.call(LD)
      }))
    }
  },
  39111: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      closeClientGame: () => iD,
      createDefaultClientPlugins: () => SD
    });
    var pD = wD(351);

    function sD() {
      let DD;
      return {
        onCreate(zD) {
          DD = zD
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(zD, wD, sD, KD, rD, LD) {
          var cD, gD;
          if ("Iron Chest" !== DD.getMetaInfo(rD).rootName) return;
          if (!DD.hasEffect(zD, "Thief")) return;
          const RD = DD.getBlockData(wD, sD, KD);
          return DD.getPlayerDbId(zD) !== (null === RD || void 0 === RD || null === (cD = RD.persisted) || void 0 === cD || null === (gD = cD.shared) || void 0 === gD ? void 0 : gD.ownerDbId) ? (DD.sendMessage(zD, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: pD.I.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var KD = wD(4257),
      rD = wD(1245);
    const LD = 8.4,
      cD = 1e-4,
      gD = .15,
      RD = .04,
      AD = [.12, .04, .12],
      UD = 26,
      fD = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        bA: 1,
        minLifeTime: cD,
        maxLifeTime: cD,
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
        blendMode: KD.f.Standard
      },
      ID = {
        texture: "bubble",
        mipmaps: !1,
        bA: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: UD,
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
        blendMode: KD.f.Standard
      },
      BD = [0, 0, 0],
      GD = [0, 0, 0];

    function hD(DD) {
      const zD = new Map;
      let wD = null;

      function pD(DD) {
        var zD, wD;
        null === (zD = DD.bubbles) || void 0 === zD || zD.stop(), null === (wD = DD.fish) || void 0 === wD || wD.stop()
      }

      function sD(wD) {
        if (!wD.readDrawnPosition(DD, GD)) {
          for (const DD of zD.values()) {
            var pD;
            null === (pD = DD.bubbles) || void 0 === pD || pD.setEmitRate(0)
          }
          return
        }
        const sD = performance.now();
        for (const [DD, rD] of zD) {
          var KD;
          if (null === (KD = rD.bubbles) || void 0 === KD || KD.setEmitRate(0), !wD.readDrawnPosition(DD, BD)) continue;
          if (!((BD[0] - GD[0]) ** 2 + (BD[1] - GD[1]) ** 2 + (BD[2] - GD[2]) ** 2 < 900)) continue;
          const zD = Math.max(0, rD.biteAt - sD),
            pD = rD.approachDurationMs > 0 ? Math.min(1, 1 - zD / rD.approachDurationMs) : 1,
            cD = (rD.approachDurationMs - zD) / 1e3,
            hD = rD.phase + .25 * Math.sin(1.7 * cD + rD.phase),
            nD = Math.min(rD.approachDurationMs / 3e3 * 2.8, LD) * (1 - pD) * (1 + .15 * Math.sin(2.1 * cD + rD.phase)),
            MD = Math.min(1, 4 * (1 - pD)),
            OD = (.45 * Math.sin(4.1 * cD + rD.phase) + .18 * Math.sin(9.7 * cD + 2 * rD.phase)) * MD,
            JD = BD[0] + Math.cos(hD) * nD - Math.sin(hD) * OD,
            ED = Math.ceil(rD.surfaceY),
            QD = BD[2] + Math.sin(hD) * nD + Math.cos(hD) * OD,
            {
              fishAt: XD,
              bubblesAt: VD
            } = rD;
          XD[0] = VD[0] = JD, XD[1] = ED + gD, VD[1] = ED + RD, XD[2] = VD[2] = QD, rD.fish ??= wD.createParticles(fD, {
            pos: XD
          }), rD.fish.moveTo(XD), rD.fish.emit(1), rD.bubbles ??= wD.createParticles(ID, {
            pos: VD,
            half: AD
          }), rD.bubbles.moveTo(VD), rD.bubbles.setEmitRate(UD + 32 * (.5 + .5 * Math.sin(9 * cD + rD.phase)) ** 4 + 13 * pD)
        }
      }
      return {
        onCreate(DD) {
          wD = DD
        },
        onAfterRender() {
          wD && sD(wD)
        },
        onClose() {
          for (const DD of zD.values()) pD(DD);
          zD.clear(), wD = null
        },
        onReceivedMessageFromServer(DD, wD) {
          if (DD !== rD.x) return;
          const {
            hookId: sD,
            waiting: KD
          } = wD;
          if (KD) zD.has(sD) || zD.set(sD, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + KD.remainingMs,
            approachDurationMs: KD.durationMs,
            surfaceY: KD.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const DD = zD.get(sD);
            DD && pD(DD), zD.delete(sD)
          }
        }
      }
    }
    var nD = wD(4872),
      MD = wD(4859);

    function OD(DD) {
      let zD, wD = null,
        pD = null;
      const sD = () => {
        var DD;
        null === (DD = pD) || void 0 === DD || DD(), pD = null
      };
      return {
        onCreate(pD) {
          zD = pD, wD = zD.getClientOption(DD, "dialogue")
        },
        onAfterRender() {
          if (!zD) return;
          const KD = zD.getClientOption(DD, "dialogue");
          if (KD === wD) return;
          if (wD = KD, sD(), !KD || !1 === KD.animateIn) return;
          const {
            plan: rD,
            synth: LD
          } = (0, MD.g)(KD);
          LD && (pD = (0, nD.g)(LD, rD.blips))
        },
        onClose: sD
      }
    }
    var JD = wD(39113);
    const ED = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      QD = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      XD = [0, 1, 2, 0, 2, 3];

    function VD(DD, zD, wD) {
      var pD;
      let [sD, KD, rD] = zD;
      if (DD.hasPackModel("Furnace")) return null;
      const LD = ((null !== (pD = DD.getMetaInfo(wD).rot) && void 0 !== pD ? pD : 1) - 1) * Math.PI / 2,
        cD = Math.PI + LD,
        gD = Math.cos(cD),
        RD = Math.sin(cD),
        AD = [];
      for (const [ID, BD] of ED) AD.push(ID * gD, BD, -ID * RD);
      const UD = {
          positions: AD,
          indices: XD,
          uvs: QD
        },
        fD = [sD + .5 + .51 * Math.sin(LD), KD + .375, rD + .5 + .51 * Math.cos(LD)];
      return DD.createGameMesh(UD, {
        kind: "furnaceFire"
      }, fD)
    }

    function PD(DD) {
      return Math.floor(DD / 200) % 3
    }

    function CD(DD, zD, wD) {
      DD.setGameMesh(zD, {
        uvOffset: [0, wD / 3]
      })
    }
    const xD = [.12, .025, .12],
      TD = [{
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
          blendMode: KD.f.Standard,
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
          blendMode: KD.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class bD {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(DD, zD) {
        const wD = DD.getBlockId(zD[0], zD[1], zD[2]);
        if ("Furnace" !== DD.getMetaInfo(wD).rootName) return;
        const pD = performance.now();
        let sD = this.smokes.find((DD => DD.pos[0] === zD[0] && DD.pos[1] === zD[1] && DD.pos[2] === zD[2] && DD.fR === wD));
        if (sD || (sD = {
            pos: [zD[0], zD[1], zD[2]],
            fR: wD,
            endMs: pD,
            lastBurstMs: -1 / 0,
            pending: new Array(TD.length).fill(0),
            fire: VD(DD, zD, wD)
          }, this.smokes.push(sD), null !== sD.fire && (CD(DD, sD.fire, PD(pD)), this.shownFireFrame = -1)), sD.endMs = pD + 6e3, this.smokes.length > 4) {
          const zD = this.smokes.reduce(((DD, zD) => zD.endMs < DD.endMs ? zD : DD));
          jD(DD, zD), this.smokes.splice(this.smokes.indexOf(zD), 1)
        }
        pD - sD.lastBurstMs >= 300 && (sD.lastBurstMs = pD, TD.forEach(((DD, zD) => {
          sD.pending[zD] += DD.style.count
        })))
      }
      onAfterRender(DD, zD) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const wD = performance.now();
        this.smokes = this.smokes.filter((zD => {
          const [pD, sD, KD] = zD.pos, rD = wD < zD.endMs && DD.getBlockId(pD, sD, KD) === zD.fR;
          return rD || jD(DD, zD), rD
        }));
        const pD = PD(wD);
        if (pD !== this.shownFireFrame) {
          this.shownFireFrame = pD;
          for (const zD of this.smokes) null !== zD.fire && CD(DD, zD.fire, pD)
        }
        if (!DD.particlesEnabled()) {
          for (const DD of this.smokes) DD.pending.fill(0);
          return
        }
        const sD = Math.min(zD, 250) / 1e3;
        for (const KD of this.smokes) {
          const [zD, pD, rD] = KD.pos;
          if (0 !== DD.getBlockId(zD, pD + 1, rD)) {
            KD.pending.fill(0);
            continue
          }
          const LD = (KD.endMs - wD) / 6e3,
            cD = this.centre;
          cD[0] = zD + .5, cD[1] = pD + 1.275, cD[2] = rD + .5, TD.forEach(((zD, wD) => {
            KD.pending[wD] += zD.perSecond * LD * sD;
            const pD = Math.floor(KD.pending[wD]);
            pD > 0 && this.emit(DD, wD, cD, pD) && (KD.pending[wD] -= pD)
          }))
        }
      }
      dispose(DD) {
        for (const wD of this.smokes) jD(DD, wD);
        this.smokes = [];
        for (const wD of null !== (zD = this.puffers) && void 0 !== zD ? zD : []) {
          var zD;
          wD.dispose()
        }
        this.puffers = null
      }
      emit(DD, zD, wD, pD) {
        return this.puffers ??= TD.map((DD => {
          let {
            style: zD,
            perSecond: wD
          } = DD;
          const pD = (zD.count / .3 + wD) * zD.life[1];
          return new JD.f(zD, Math.ceil(4 * pD), xD)
        })), this.puffers[zD].emit(DD, wD, this.renderFrame, pD)
      }
    }

    function jD(DD, zD) {
      null !== zD.fire && (DD.disposeGameMesh(zD.fire), zD.fire = null)
    }

    function dD() {
      let DD;
      const zD = new bD;
      return {
        onCreate(zD) {
          DD = zD
        },
        onReceivedMessageFromServer(wD, pD) {
          wD === rD.B && zD.start(DD, pD)
        },
        onAfterRender(wD) {
          zD.onAfterRender(DD, wD)
        },
        onClose() {
          zD.dispose(DD)
        }
      }
    }

    function SD(DD, zD, wD, pD) {
      return {
        dialogue: OD(pD.localPlayerId),
        fishing: hD(pD.localPlayerId),
        furnaceSmoke: dD(),
        ironChest: sD()
      }
    }

    function iD(DD, zD) {
      for (const sD of [DD, ...null !== zD && void 0 !== zD ? zD : []]) try {
        var wD;
        null === sD || void 0 === sD || null === (wD = sD.onClose) || void 0 === wD || wD.call(sD)
      } catch (pD) {
        console.error("Error in client onClose callback", pD)
      }
    }
  },
  39113: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD,
      f: () => KD
    });
    const pD = 1 / .6,
      sD = {
        kind: "smokePuff"
      };
    class KD {
      constructor(DD, zD, wD) {
        this.style = DD, this.bA = zD, this.half = wD, this.particles = null, this.lastFrame = -1
      }
      emit(DD, zD, wD) {
        let KD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return wD !== this.lastFrame && (this.lastFrame = wD, this.particles || (this.particles = DD.createParticles(function(DD, zD) {
          const [
            [wD, KD, rD],
            [LD, cD, gD]
          ] = DD.colours;
          return {
            texture: DD.soft ? sD : "square_particle",
            bA: zD,
            minLifeTime: DD.life[0] / pD,
            maxLifeTime: DD.life[1] / pD,
            minEmitPower: DD.power[0] * pD,
            maxEmitPower: DD.power[1] * pD,
            minSize: DD.size[0],
            maxSize: DD.size[1],
            emitRate: 0,
            gravity: [0, DD.lift * pD * pD, 0],
            dir1: [-DD.spread, 1, -DD.spread],
            dir2: [DD.spread, 1, DD.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [wD, KD, rD, DD.alpha],
              maxColor: [LD, cD, gD, DD.alpha]
            }, {
              timeFraction: 1,
              minColor: [wD, KD, rD, 0],
              maxColor: [LD, cD, gD, 0]
            }],
            blendMode: DD.blendMode
          }
        }(this.style, this.bA), {
          pos: zD,
          half: this.half
        })), this.particles.moveTo(zD, this.half), this.particles.emit(KD), !0)
      }
      dispose() {
        var DD;
        null === (DD = this.particles) || void 0 === DD || DD.stop(), this.particles = null
      }
    }
  },
  4866: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      g: () => pD,
      h: () => KD,
      i: () => cD,
      l: () => rD
    });
    const pD = ["sine", "triangle", "square", "sawtooth"],
      sD = 55,
      KD = {
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

    function rD(DD) {
      return "string" !== typeof DD ? DD : Object.hasOwn(KD, DD) ? KD[DD] : null
    }

    function LD(DD, zD, wD) {
      return Math.min(wD, Math.max(zD, DD))
    }

    function cD(DD) {
      const zD = LD(DD.durationMs, 10, 500),
        wD = LD(DD.attackMs, 0, zD),
        {
          intonation: sD
        } = DD;
      return {
        waveform: pD.includes(DD.waveform) ? DD.waveform : "sine",
        pitchHz: LD(DD.pitchHz, 20, 4e3),
        glideSemitones: LD(DD.glideSemitones, -24, 24),
        durationMs: zD,
        attackMs: wD,
        releaseMs: LD(DD.releaseMs, 0, zD - wD),
        lowpassHz: null === DD.lowpassHz ? null : LD(DD.lowpassHz, 20, 2e4),
        volume: LD(DD.volume, 0, 2),
        intonation: {
          variationSemitones: LD(sD.variationSemitones, 0, 6),
          declineSemitones: LD(sD.declineSemitones, 0, 12),
          questionRiseSemitones: LD(sD.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: LD(sD.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: LD(DD.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);