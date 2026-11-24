export const id = 27;
export const ids = [27];
export const modules = {
  4985: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => AS,
      g: () => YS
    });
    var tS = gS(4992),
      bS = gS(369);
    const XS = 120,
      xS = 260,
      NS = 1.15,
      qS = 1.2,
      uS = 2,
      IS = 1.08,
      fS = .8,
      kS = .95,
      aS = 8,
      KS = "[\"')\\]\u300d\u300f\uff09]*",
      jS = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${KS}$`),
      GS = new RegExp(`[?\uff1f]${KS}$`),
      CS = new RegExp(`[!\uff01]${KS}$`),
      nS = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      PS = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      QS = new RegExp(`[${PS}]`),
      DS = new RegExp(`[${PS}]|[^${PS}]+`, "g"),
      wS = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function hS(SS) {
      let HS = 2166136261;
      for (let gS = 0; gS < SS.length; gS++) HS ^= SS.charCodeAt(gS), HS = Math.imul(HS, 16777619);
      return (HS >>> 0) / 4294967295 * 2 - 1
    }

    function ZS(SS) {
      var HS;
      if (QS.test(SS)) return 1;
      const gS = SS.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        tS = gS.replace(/[^0-9]/g, "");
      if (tS.length > 0 && !/\p{L}/u.test(gS)) return Math.min(tS.length, 4);
      const bS = null !== (HS = gS.match(wS)) && void 0 !== HS ? HS : [];
      if (0 === bS.length) {
        var XS, xS;
        const SS = null !== (XS = null === (xS = gS.match(/\p{L}/gu)) || void 0 === xS ? void 0 : xS.length) && void 0 !== XS ? XS : 0;
        return 0 === SS ? 0 : Math.min(Math.max(1, Math.round(SS / 2.5)), aS)
      }
      const NS = gS.replace(/[^\p{L}]/gu, ""),
        qS = bS.length > 1 && "e" === bS.at(-1) && NS.endsWith("e") && !NS.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(SS.replace(/[^\p{L}]/gu, ""));
      return Math.min(bS.length - (qS ? 1 : 0), aS)
    }

    function JS(SS) {
      return SS.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function OS(SS) {
      const HS = SS.replace(/[^\p{L}]/gu, "");
      return HS.length >= 2 && HS === HS.toUpperCase() && HS !== HS.toLowerCase()
    }

    function dS(SS, HS) {
      var gS;
      const aS = HS && (0, tS.j)(HS),
        KS = null !== (gS = null === aS || void 0 === aS ? void 0 : aS.syllableMs) && void 0 !== gS ? gS : tS.d,
        PS = function(SS) {
          const HS = [];
          for (const tS of (0, bS.ec)(SS))
            if ("string" === typeof tS)
              for (const SS of tS.split(/(\s+)/)) {
                if ("" === SS) continue;
                if (/^\s+$/.test(SS)) {
                  HS.push({
                    kind: "space",
                    text: SS
                  });
                  continue
                }
                if (!QS.test(SS)) {
                  HS.push({
                    kind: "word",
                    text: SS,
                    delayMs: 0
                  });
                  continue
                }
                let tS = !0;
                for (const bS of null !== (gS = SS.match(DS)) && void 0 !== gS ? gS : []) {
                  var gS;
                  const SS = HS.at(-1);
                  tS || "word" !== (null === SS || void 0 === SS ? void 0 : SS.kind) || QS.test(bS) || /[\p{L}\p{N}]/u.test(bS) ? (tS || HS.push({
                    kind: "space",
                    text: "\u200b"
                  }), HS.push({
                    kind: "word",
                    text: bS,
                    delayMs: 0
                  }), tS = !1) : SS.text += bS
                }
              } else HS.push({
                kind: "icon",
                text: tS.icon,
                delayMs: 0
              });
          return HS
        }(SS),
        wS = [];
      let dS = [];
      for (const tS of PS) "space" !== tS.kind && (dS.push(tS), jS.test(tS.text) && (wS.push(dS), dS = []));
      wS.push(dS);
      const cS = [];
      let vS = 0;
      for (const tS of wS) {
        var ES, LS;
        const SS = null !== (ES = null === (LS = tS.at(-1)) || void 0 === LS ? void 0 : LS.text) && void 0 !== ES ? ES : "",
          HS = GS.test(SS),
          gS = CS.test(SS),
          bS = tS.map((SS => "word" === SS.kind ? ZS(SS.text) : 1)),
          PS = bS.findLastIndex((SS => SS > 0));
        for (const [GS, CS] of tS.entries()) {
          const SS = "word" === CS.kind,
            tS = bS[GS];
          CS.delayMs = vS;
          for (let bS = 0; aS && bS < tS; bS++) {
            const {
              intonation: XS
            } = aS;
            let xS = PS > 0 ? -XS.declineSemitones * (GS / PS) : 0;
            xS += hS(`${JS(CS.text)}|${bS}`) * XS.variationSemitones;
            const jS = Math.min(1, XS.variationSemitones);
            let nS = aS.glideSemitones,
              QS = 1;
            gS && (xS += XS.exclaimLiftSemitones, QS *= NS), HS && GS === PS && (xS += XS.questionRiseSemitones * (tS > 1 ? .5 + .5 * bS / (tS - 1) : 1), bS === tS - 1 && (nS = Math.abs(nS) + XS.questionRiseSemitones / 2)), SS && OS(CS.text) && (xS += uS * jS, QS *= qS), tS > 1 && 0 === bS && (xS += fS * jS, QS *= IS), cS.push({
              atMs: vS + bS * KS,
              semitones: xS,
              glideSemitones: nS,
              durationMs: bS < tS - 1 ? Math.min(aS.durationMs, KS * kS) : aS.durationMs,
              level: QS
            })
          }
          vS += tS * KS + (jS.test(CS.text) ? xS : nS.test(CS.text) ? XS : 0)
        }
      }
      return {
        pieces: PS.map((SS => "space" === SS.kind ? SS : "icon" === SS.kind ? {
          kind: "icon",
          icon: SS.text,
          delayMs: SS.delayMs
        } : {
          kind: "word",
          text: SS.text,
          delayMs: SS.delayMs
        })),
        blips: cS
      }
    }
    var cS = gS(1281),
      vS = gS(1334),
      ES = gS(2069);

    function LS(SS) {
      if ("string" === typeof SS) return SS;
      const HS = vS.f.get().getCurrentLanguageCode();
      return (0, cS.x)(HS, SS.translationKey, (0, cS.t)(SS.params, ES.c.shown))
    }

    function YS(SS) {
      const HS = void 0 === SS.voice ? null : (0, tS.k)(SS.voice),
        gS = HS && (0, tS.j)(HS);
      return {
        plan: dS(LS(SS.line), gS),
        synth: gS
      }
    }

    function AS(SS) {
      const HS = [];
      let gS = [];
      for (const [bS, XS] of SS.entries()) {
        var tS;
        "space" === XS.kind && (" " !== XS.text || "icon" !== (null === (tS = SS[bS + 1]) || void 0 === tS ? void 0 : tS.kind)) ? (gS.length > 0 && HS.push(gS), HS.push([XS]), gS = []) : gS.push(XS)
      }
      return gS.length > 0 && HS.push(gS), HS
    }
  },
  5e3: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => IS,
      d: () => fS
    });
    var tS = gS(5005),
      bS = gS(24);
    const XS = .25,
      xS = .85,
      NS = .02,
      qS = .01;

    function uS(SS, HS, gS, tS, bS, XS, NS) {
      const {
        waveform: qS,
        pitchHz: uS,
        attackMs: IS,
        releaseMs: fS,
        lowpassHz: kS
      } = gS, aS = bS + tS.durationMs / 1e3, KS = uS * 2 ** (tS.semitones / 12), jS = SS.createOscillator();
      jS.type = qS, jS.frequency.setValueAtTime(KS, bS), jS.frequency.exponentialRampToValueAtTime(KS * 2 ** (tS.glideSemitones / 12), aS);
      const GS = bS + Math.min(IS, tS.durationMs) / 1e3,
        CS = SS.createGain();
      CS.gain.setValueAtTime(0, bS), CS.gain.linearRampToValueAtTime(XS, GS), CS.gain.linearRampToValueAtTime(XS * xS, Math.max(GS, aS - fS / 1e3)), CS.gain.linearRampToValueAtTime(0, aS);
      const nS = [jS];
      if (null !== kS) {
        const HS = SS.createBiquadFilter();
        HS.type = "lowpass", HS.frequency.value = kS, nS.push(HS)
      }
      nS.push(CS, HS);
      for (let xS = 1; xS < nS.length; xS++) nS[xS - 1].connect(nS[xS]);
      return jS.onended = () => {
        for (const SS of nS.slice(0, -1)) SS.disconnect();
        NS()
      }, jS.start(bS), jS.stop(aS), jS
    }

    function IS(SS, HS, gS, tS, bS, xS) {
      if (0 === tS.length) return xS(), () => {};
      const IS = XS * gS.volume * bS,
        fS = SS.createGain();
      fS.connect(HS);
      const kS = SS.currentTime + NS,
        aS = new Set;
      for (const XS of tS) {
        const HS = uS(SS, fS, gS, XS, kS + XS.atMs / 1e3, IS * XS.level, (() => {
          aS.delete(HS), 0 === aS.size && (fS.disconnect(), xS())
        }));
        aS.add(HS)
      }
      return () => {
        const HS = SS.currentTime;
        fS.gain.setTargetAtTime(0, HS, qS);
        for (const SS of aS) try {
          SS.stop(HS + 5 * qS)
        } catch {}
      }
    }

    function fS(SS, HS) {
      var gS;
      const XS = tS.Howler.ctx,
        xS = tS.Howler.masterGain;
      if (!XS || !xS || !bS.b.get("soundOnFromAd")) return () => {};
      const NS = tS.Howler;
      return null === (gS = NS._autoResume) || void 0 === gS || gS.call(NS), IS(XS, xS, SS, HS, bS.b.get("soundVolume"), (() => {
        var SS;
        null === (SS = NS._autoSuspend) || void 0 === SS || SS.call(NS)
      }))
    }
  },
  39162: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      closeClientGame: () => yS,
      createDefaultClientPlugins: () => AS
    });
    var tS = gS(387);

    function bS() {
      let SS;
      return {
        onCreate(HS) {
          SS = HS
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(HS, gS, bS, XS, xS, NS) {
          var qS, uS;
          if ("Iron Chest" !== SS.getMetaInfo(xS).rootName) return;
          if (!SS.hasEffect(HS, "Thief")) return;
          const IS = SS.getBlockData(gS, bS, XS);
          return SS.getPlayerDbId(HS) !== (null === IS || void 0 === IS || null === (qS = IS.persisted) || void 0 === qS || null === (uS = qS.shared) || void 0 === uS ? void 0 : uS.ownerDbId) ? (SS.sendMessage(HS, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: tS.B.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var XS = gS(4356),
      xS = gS(1327);
    const NS = 8.4,
      qS = 1e-4,
      uS = .15,
      IS = .04,
      fS = [.12, .04, .12],
      kS = 26,
      aS = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        hf: 1,
        minLifeTime: qS,
        maxLifeTime: qS,
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
        blendMode: XS.g.Standard
      },
      KS = {
        texture: "bubble",
        mipmaps: !1,
        hf: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: kS,
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
        blendMode: XS.g.Standard
      },
      jS = [0, 0, 0],
      GS = [0, 0, 0];

    function CS(SS) {
      const HS = new Map;
      let gS = null;

      function tS(SS) {
        var HS, gS;
        null === (HS = SS.bubbles) || void 0 === HS || HS.stop(), null === (gS = SS.fish) || void 0 === gS || gS.stop()
      }

      function bS(gS) {
        if (!gS.readDrawnPosition(SS, GS)) {
          for (const SS of HS.values()) {
            var tS;
            null === (tS = SS.bubbles) || void 0 === tS || tS.setEmitRate(0)
          }
          return
        }
        const bS = performance.now();
        for (const [SS, xS] of HS) {
          var XS;
          if (null === (XS = xS.bubbles) || void 0 === XS || XS.setEmitRate(0), !gS.readDrawnPosition(SS, jS)) continue;
          if (!((jS[0] - GS[0]) ** 2 + (jS[1] - GS[1]) ** 2 + (jS[2] - GS[2]) ** 2 < 900)) continue;
          const HS = Math.max(0, xS.biteAt - bS),
            tS = xS.approachDurationMs > 0 ? Math.min(1, 1 - HS / xS.approachDurationMs) : 1,
            qS = (xS.approachDurationMs - HS) / 1e3,
            CS = xS.phase + .25 * Math.sin(1.7 * qS + xS.phase),
            nS = Math.min(xS.approachDurationMs / 3e3 * 2.8, NS) * (1 - tS) * (1 + .15 * Math.sin(2.1 * qS + xS.phase)),
            PS = Math.min(1, 4 * (1 - tS)),
            QS = (.45 * Math.sin(4.1 * qS + xS.phase) + .18 * Math.sin(9.7 * qS + 2 * xS.phase)) * PS,
            DS = jS[0] + Math.cos(CS) * nS - Math.sin(CS) * QS,
            wS = Math.ceil(xS.surfaceY),
            hS = jS[2] + Math.sin(CS) * nS + Math.cos(CS) * QS,
            {
              fishAt: ZS,
              bubblesAt: JS
            } = xS;
          ZS[0] = JS[0] = DS, ZS[1] = wS + uS, JS[1] = wS + IS, ZS[2] = JS[2] = hS, xS.fish ??= gS.createParticles(aS, {
            pos: ZS
          }), xS.fish.moveTo(ZS), xS.fish.emit(1), xS.bubbles ??= gS.createParticles(KS, {
            pos: JS,
            half: fS
          }), xS.bubbles.moveTo(JS), xS.bubbles.setEmitRate(kS + 32 * (.5 + .5 * Math.sin(9 * qS + xS.phase)) ** 4 + 13 * tS)
        }
      }
      return {
        onCreate(SS) {
          gS = SS
        },
        onAfterRender() {
          gS && bS(gS)
        },
        onClose() {
          for (const SS of HS.values()) tS(SS);
          HS.clear(), gS = null
        },
        onReceivedMessageFromServer(SS, gS) {
          if (SS !== xS.z) return;
          const {
            hookId: bS,
            waiting: XS
          } = gS;
          if (XS) HS.has(bS) || HS.set(bS, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + XS.remainingMs,
            approachDurationMs: XS.durationMs,
            surfaceY: XS.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const SS = HS.get(bS);
            SS && tS(SS), HS.delete(bS)
          }
        }
      }
    }
    var nS = gS(5e3),
      PS = gS(4985);

    function QS(SS) {
      let HS, gS = null,
        tS = null;
      const bS = () => {
        var SS;
        null === (SS = tS) || void 0 === SS || SS(), tS = null
      };
      return {
        onCreate(tS) {
          HS = tS, gS = HS.getClientOption(SS, "dialogue")
        },
        onAfterRender() {
          if (!HS) return;
          const XS = HS.getClientOption(SS, "dialogue");
          if (XS === gS) return;
          if (gS = XS, bS(), !XS || !1 === XS.animateIn) return;
          const {
            plan: xS,
            synth: NS
          } = (0, PS.g)(XS);
          NS && (tS = (0, nS.d)(NS, xS.blips))
        },
        onClose: bS
      }
    }
    var DS = gS(39164);
    const wS = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      hS = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      ZS = [0, 1, 2, 0, 2, 3];

    function JS(SS, HS, gS) {
      var tS;
      let [bS, XS, xS] = HS;
      if (SS.hasPackModel("Furnace")) return null;
      const NS = ((null !== (tS = SS.getMetaInfo(gS).rot) && void 0 !== tS ? tS : 1) - 1) * Math.PI / 2,
        qS = Math.PI + NS,
        uS = Math.cos(qS),
        IS = Math.sin(qS),
        fS = [];
      for (const [KS, jS] of wS) fS.push(KS * uS, jS, -KS * IS);
      const kS = {
          positions: fS,
          indices: ZS,
          uvs: hS
        },
        aS = [bS + .5 + .51 * Math.sin(NS), XS + .375, xS + .5 + .51 * Math.cos(NS)];
      return SS.createGameMesh(kS, {
        kind: "furnaceFire"
      }, aS)
    }

    function OS(SS) {
      return Math.floor(SS / 200) % 3
    }

    function dS(SS, HS, gS) {
      SS.setGameMesh(HS, {
        uvOffset: [0, gS / 3]
      })
    }
    const cS = [.12, .025, .12],
      vS = [{
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
          blendMode: XS.g.Standard,
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
          blendMode: XS.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class ES {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(SS, HS) {
        const gS = SS.getBlockId(HS[0], HS[1], HS[2]);
        if ("Furnace" !== SS.getMetaInfo(gS).rootName) return;
        const tS = performance.now();
        let bS = this.smokes.find((SS => SS.pos[0] === HS[0] && SS.pos[1] === HS[1] && SS.pos[2] === HS[2] && SS.XI === gS));
        if (bS || (bS = {
            pos: [HS[0], HS[1], HS[2]],
            XI: gS,
            endMs: tS,
            lastBurstMs: -1 / 0,
            pending: new Array(vS.length).fill(0),
            fire: JS(SS, HS, gS)
          }, this.smokes.push(bS), null !== bS.fire && (dS(SS, bS.fire, OS(tS)), this.shownFireFrame = -1)), bS.endMs = tS + 6e3, this.smokes.length > 4) {
          const HS = this.smokes.reduce(((SS, HS) => HS.endMs < SS.endMs ? HS : SS));
          LS(SS, HS), this.smokes.splice(this.smokes.indexOf(HS), 1)
        }
        tS - bS.lastBurstMs >= 300 && (bS.lastBurstMs = tS, vS.forEach(((SS, HS) => {
          bS.pending[HS] += SS.style.count
        })))
      }
      onAfterRender(SS, HS) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const gS = performance.now();
        this.smokes = this.smokes.filter((HS => {
          const [tS, bS, XS] = HS.pos, xS = gS < HS.endMs && SS.getBlockId(tS, bS, XS) === HS.XI;
          return xS || LS(SS, HS), xS
        }));
        const tS = OS(gS);
        if (tS !== this.shownFireFrame) {
          this.shownFireFrame = tS;
          for (const HS of this.smokes) null !== HS.fire && dS(SS, HS.fire, tS)
        }
        if (!SS.particlesEnabled()) {
          for (const SS of this.smokes) SS.pending.fill(0);
          return
        }
        const bS = Math.min(HS, 250) / 1e3;
        for (const XS of this.smokes) {
          const [HS, tS, xS] = XS.pos;
          if (0 !== SS.getBlockId(HS, tS + 1, xS)) {
            XS.pending.fill(0);
            continue
          }
          const NS = (XS.endMs - gS) / 6e3,
            qS = this.centre;
          qS[0] = HS + .5, qS[1] = tS + 1.275, qS[2] = xS + .5, vS.forEach(((HS, gS) => {
            XS.pending[gS] += HS.perSecond * NS * bS;
            const tS = Math.floor(XS.pending[gS]);
            tS > 0 && this.emit(SS, gS, qS, tS) && (XS.pending[gS] -= tS)
          }))
        }
      }
      dispose(SS) {
        for (const gS of this.smokes) LS(SS, gS);
        this.smokes = [];
        for (const gS of null !== (HS = this.puffers) && void 0 !== HS ? HS : []) {
          var HS;
          gS.dispose()
        }
        this.puffers = null
      }
      emit(SS, HS, gS, tS) {
        return this.puffers ??= vS.map((SS => {
          let {
            style: HS,
            perSecond: gS
          } = SS;
          const tS = (HS.count / .3 + gS) * HS.life[1];
          return new DS.e(HS, Math.ceil(4 * tS), cS)
        })), this.puffers[HS].emit(SS, gS, this.renderFrame, tS)
      }
    }

    function LS(SS, HS) {
      null !== HS.fire && (SS.disposeGameMesh(HS.fire), HS.fire = null)
    }

    function YS() {
      let SS;
      const HS = new ES;
      return {
        onCreate(HS) {
          SS = HS
        },
        onReceivedMessageFromServer(gS, tS) {
          gS === xS.D && HS.start(SS, tS)
        },
        onAfterRender(gS) {
          HS.onAfterRender(SS, gS)
        },
        onClose() {
          HS.dispose(SS)
        }
      }
    }

    function AS(SS, HS, gS, tS) {
      return {
        dialogue: QS(tS.localPlayerId),
        fishing: CS(tS.localPlayerId),
        furnaceSmoke: YS(),
        ironChest: bS()
      }
    }

    function yS(SS, HS) {
      for (const bS of [SS, ...null !== HS && void 0 !== HS ? HS : []]) try {
        var gS;
        null === bS || void 0 === bS || null === (gS = bS.onClose) || void 0 === gS || gS.call(bS)
      } catch (tS) {
        console.error("Error in client onClose callback", tS)
      }
    }
  },
  39164: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS,
      e: () => XS
    });
    const tS = 1 / .6,
      bS = {
        kind: "smokePuff"
      };
    class XS {
      constructor(SS, HS, gS) {
        this.style = SS, this.hf = HS, this.half = gS, this.particles = null, this.lastFrame = -1
      }
      emit(SS, HS, gS) {
        let XS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return gS !== this.lastFrame && (this.lastFrame = gS, this.particles || (this.particles = SS.createParticles(function(SS, HS) {
          const [
            [gS, XS, xS],
            [NS, qS, uS]
          ] = SS.colours;
          return {
            texture: SS.soft ? bS : "square_particle",
            hf: HS,
            minLifeTime: SS.life[0] / tS,
            maxLifeTime: SS.life[1] / tS,
            minEmitPower: SS.power[0] * tS,
            maxEmitPower: SS.power[1] * tS,
            minSize: SS.size[0],
            maxSize: SS.size[1],
            emitRate: 0,
            gravity: [0, SS.lift * tS * tS, 0],
            dir1: [-SS.spread, 1, -SS.spread],
            dir2: [SS.spread, 1, SS.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [gS, XS, xS, SS.alpha],
              maxColor: [NS, qS, uS, SS.alpha]
            }, {
              timeFraction: 1,
              minColor: [gS, XS, xS, 0],
              maxColor: [NS, qS, uS, 0]
            }],
            blendMode: SS.blendMode
          }
        }(this.style, this.hf), {
          pos: HS,
          half: this.half
        })), this.particles.moveTo(HS, this.half), this.particles.emit(XS), !0)
      }
      dispose() {
        var SS;
        null === (SS = this.particles) || void 0 === SS || SS.stop(), this.particles = null
      }
    }
  },
  4992: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS,
      e: () => tS,
      g: () => XS,
      j: () => qS,
      k: () => xS
    });
    const tS = ["sine", "triangle", "square", "sawtooth"],
      bS = 55,
      XS = {
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

    function xS(SS) {
      return "string" !== typeof SS ? SS : Object.hasOwn(XS, SS) ? XS[SS] : null
    }

    function NS(SS, HS, gS) {
      return Math.min(gS, Math.max(HS, SS))
    }

    function qS(SS) {
      const HS = NS(SS.durationMs, 10, 500),
        gS = NS(SS.attackMs, 0, HS),
        {
          intonation: bS
        } = SS;
      return {
        waveform: tS.includes(SS.waveform) ? SS.waveform : "sine",
        pitchHz: NS(SS.pitchHz, 20, 4e3),
        glideSemitones: NS(SS.glideSemitones, -24, 24),
        durationMs: HS,
        attackMs: gS,
        releaseMs: NS(SS.releaseMs, 0, HS - gS),
        lowpassHz: null === SS.lowpassHz ? null : NS(SS.lowpassHz, 20, 2e4),
        volume: NS(SS.volume, 0, 2),
        intonation: {
          variationSemitones: NS(bS.variationSemitones, 0, 6),
          declineSemitones: NS(bS.declineSemitones, 0, 12),
          questionRiseSemitones: NS(bS.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: NS(bS.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: NS(SS.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);