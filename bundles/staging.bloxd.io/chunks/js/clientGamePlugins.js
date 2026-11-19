export const id = 27;
export const ids = [27];
export const modules = {
  4601: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Vz,
      g: () => az
    });
    var Ez = bz(4605),
      nz = bz(316);
    const iz = 120,
      lz = 260,
      Mz = 1.15,
      tz = 1.2,
      Hz = 2,
      Oz = 1.08,
      pz = .8,
      dz = .95,
      Fz = 8,
      Zz = "[\"')\\]\u300d\u300f\uff09]*",
      Rz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Zz}$`),
      Kz = new RegExp(`[?\uff1f]${Zz}$`),
      wz = new RegExp(`[!\uff01]${Zz}$`),
      Xz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      fz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      sz = new RegExp(`[${fz}]`),
      rz = new RegExp(`[${fz}]|[^${fz}]+`, "g"),
      oz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Nz(zz) {
      let uz = 2166136261;
      for (let bz = 0; bz < zz.length; bz++) uz ^= zz.charCodeAt(bz), uz = Math.imul(uz, 16777619);
      return (uz >>> 0) / 4294967295 * 2 - 1
    }

    function vz(zz) {
      var uz;
      if (sz.test(zz)) return 1;
      const bz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ez = bz.replace(/[^0-9]/g, "");
      if (Ez.length > 0 && !/\p{L}/u.test(bz)) return Math.min(Ez.length, 4);
      const nz = null !== (uz = bz.match(oz)) && void 0 !== uz ? uz : [];
      if (0 === nz.length) {
        var iz, lz;
        const zz = null !== (iz = null === (lz = bz.match(/\p{L}/gu)) || void 0 === lz ? void 0 : lz.length) && void 0 !== iz ? iz : 0;
        return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), Fz)
      }
      const Mz = bz.replace(/[^\p{L}]/gu, ""),
        tz = nz.length > 1 && "e" === nz.at(-1) && Mz.endsWith("e") && !Mz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
      return Math.min(nz.length - (tz ? 1 : 0), Fz)
    }

    function xz(zz) {
      return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Jz(zz) {
      const uz = zz.replace(/[^\p{L}]/gu, "");
      return uz.length >= 2 && uz === uz.toUpperCase() && uz !== uz.toLowerCase()
    }

    function Az(zz, uz) {
      var bz;
      const Fz = uz && (0, Ez.k)(uz),
        Zz = null !== (bz = null === Fz || void 0 === Fz ? void 0 : Fz.syllableMs) && void 0 !== bz ? bz : Ez.e,
        fz = function(zz) {
          const uz = [];
          for (const Ez of (0, nz.uc)(zz))
            if ("string" === typeof Ez)
              for (const zz of Ez.split(/(\s+)/)) {
                if ("" === zz) continue;
                if (/^\s+$/.test(zz)) {
                  uz.push({
                    kind: "space",
                    text: zz
                  });
                  continue
                }
                if (!sz.test(zz)) {
                  uz.push({
                    kind: "word",
                    text: zz,
                    delayMs: 0
                  });
                  continue
                }
                let Ez = !0;
                for (const nz of null !== (bz = zz.match(rz)) && void 0 !== bz ? bz : []) {
                  var bz;
                  const zz = uz.at(-1);
                  Ez || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || sz.test(nz) || /[\p{L}\p{N}]/u.test(nz) ? (Ez || uz.push({
                    kind: "space",
                    text: "\u200b"
                  }), uz.push({
                    kind: "word",
                    text: nz,
                    delayMs: 0
                  }), Ez = !1) : zz.text += nz
                }
              } else uz.push({
                kind: "icon",
                text: Ez.icon,
                delayMs: 0
              });
          return uz
        }(zz),
        oz = [];
      let Az = [];
      for (const Ez of fz) "space" !== Ez.kind && (Az.push(Ez), Rz.test(Ez.text) && (oz.push(Az), Az = []));
      oz.push(Az);
      const Tz = [];
      let Lz = 0;
      for (const Ez of oz) {
        var Pz, Gz;
        const zz = null !== (Pz = null === (Gz = Ez.at(-1)) || void 0 === Gz ? void 0 : Gz.text) && void 0 !== Pz ? Pz : "",
          uz = Kz.test(zz),
          bz = wz.test(zz),
          nz = Ez.map((zz => "word" === zz.kind ? vz(zz.text) : 1)),
          fz = nz.findLastIndex((zz => zz > 0));
        for (const [Kz, wz] of Ez.entries()) {
          const zz = "word" === wz.kind,
            Ez = nz[Kz];
          wz.delayMs = Lz;
          for (let nz = 0; Fz && nz < Ez; nz++) {
            const {
              intonation: iz
            } = Fz;
            let lz = fz > 0 ? -iz.declineSemitones * (Kz / fz) : 0;
            lz += Nz(`${xz(wz.text)}|${nz}`) * iz.variationSemitones;
            const Rz = Math.min(1, iz.variationSemitones);
            let Xz = Fz.glideSemitones,
              sz = 1;
            bz && (lz += iz.exclaimLiftSemitones, sz *= Mz), uz && Kz === fz && (lz += iz.questionRiseSemitones * (Ez > 1 ? .5 + .5 * nz / (Ez - 1) : 1), nz === Ez - 1 && (Xz = Math.abs(Xz) + iz.questionRiseSemitones / 2)), zz && Jz(wz.text) && (lz += Hz * Rz, sz *= tz), Ez > 1 && 0 === nz && (lz += pz * Rz, sz *= Oz), Tz.push({
              atMs: Lz + nz * Zz,
              semitones: lz,
              glideSemitones: Xz,
              durationMs: nz < Ez - 1 ? Math.min(Fz.durationMs, Zz * dz) : Fz.durationMs,
              level: sz
            })
          }
          Lz += Ez * Zz + (Rz.test(wz.text) ? lz : Xz.test(wz.text) ? iz : 0)
        }
      }
      return {
        pieces: fz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
          kind: "icon",
          icon: zz.text,
          delayMs: zz.delayMs
        } : {
          kind: "word",
          text: zz.text,
          delayMs: zz.delayMs
        })),
        blips: Tz
      }
    }
    var Tz = bz(1181),
      Lz = bz(1241),
      Pz = bz(1873);

    function Gz(zz) {
      if ("string" === typeof zz) return zz;
      const uz = Lz.h.get().getCurrentLanguageCode();
      return (0, Tz.s)(uz, zz.translationKey, (0, Tz.q)(zz.params, Pz.b.shown))
    }

    function az(zz) {
      const uz = void 0 === zz.voice ? null : (0, Ez.n)(zz.voice),
        bz = uz && (0, Ez.k)(uz);
      return {
        plan: Az(Gz(zz.line), bz),
        synth: bz
      }
    }

    function Vz(zz) {
      const uz = [];
      let bz = [];
      for (const [nz, iz] of zz.entries()) {
        var Ez;
        "space" === iz.kind && (" " !== iz.text || "icon" !== (null === (Ez = zz[nz + 1]) || void 0 === Ez ? void 0 : Ez.kind)) ? (bz.length > 0 && uz.push(bz), uz.push([iz]), bz = []) : bz.push(iz)
      }
      return bz.length > 0 && uz.push(bz), uz
    }
  },
  4609: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz,
      d: () => pz
    });
    var Ez = bz(4616),
      nz = bz(20);
    const iz = .25,
      lz = .85,
      Mz = .02,
      tz = .01;

    function Hz(zz, uz, bz, Ez, nz, iz, Mz) {
      const {
        waveform: tz,
        pitchHz: Hz,
        attackMs: Oz,
        releaseMs: pz,
        lowpassHz: dz
      } = bz, Fz = nz + Ez.durationMs / 1e3, Zz = Hz * 2 ** (Ez.semitones / 12), Rz = zz.createOscillator();
      Rz.type = tz, Rz.frequency.setValueAtTime(Zz, nz), Rz.frequency.exponentialRampToValueAtTime(Zz * 2 ** (Ez.glideSemitones / 12), Fz);
      const Kz = nz + Math.min(Oz, Ez.durationMs) / 1e3,
        wz = zz.createGain();
      wz.gain.setValueAtTime(0, nz), wz.gain.linearRampToValueAtTime(iz, Kz), wz.gain.linearRampToValueAtTime(iz * lz, Math.max(Kz, Fz - pz / 1e3)), wz.gain.linearRampToValueAtTime(0, Fz);
      const Xz = [Rz];
      if (null !== dz) {
        const uz = zz.createBiquadFilter();
        uz.type = "lowpass", uz.frequency.value = dz, Xz.push(uz)
      }
      Xz.push(wz, uz);
      for (let lz = 1; lz < Xz.length; lz++) Xz[lz - 1].connect(Xz[lz]);
      return Rz.onended = () => {
        for (const zz of Xz.slice(0, -1)) zz.disconnect();
        Mz()
      }, Rz.start(nz), Rz.stop(Fz), Rz
    }

    function Oz(zz, uz, bz, Ez, nz, lz) {
      if (0 === Ez.length) return lz(), () => {};
      const Oz = iz * bz.volume * nz,
        pz = zz.createGain();
      pz.connect(uz);
      const dz = zz.currentTime + Mz,
        Fz = new Set;
      for (const iz of Ez) {
        const uz = Hz(zz, pz, bz, iz, dz + iz.atMs / 1e3, Oz * iz.level, (() => {
          Fz.delete(uz), 0 === Fz.size && (pz.disconnect(), lz())
        }));
        Fz.add(uz)
      }
      return () => {
        const uz = zz.currentTime;
        pz.gain.setTargetAtTime(0, uz, tz);
        for (const zz of Fz) try {
          zz.stop(uz + 5 * tz)
        } catch {}
      }
    }

    function pz(zz, uz) {
      var bz;
      const iz = Ez.Howler.ctx,
        lz = Ez.Howler.masterGain;
      if (!iz || !lz || !nz.e.get("soundOnFromAd")) return () => {};
      const Mz = Ez.Howler;
      return null === (bz = Mz._autoResume) || void 0 === bz || bz.call(Mz), Oz(iz, lz, zz, uz, nz.e.get("soundVolume"), (() => {
        var zz;
        null === (zz = Mz._autoSuspend) || void 0 === zz || zz.call(Mz)
      }))
    }
  },
  38489: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      closeClientGame: () => mz,
      createDefaultClientPlugins: () => Vz
    });
    var Ez = bz(328);

    function nz() {
      let zz;
      return {
        onCreate(uz) {
          zz = uz
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(uz, bz, nz, iz, lz, Mz) {
          var tz, Hz;
          if ("Iron Chest" !== zz.getMetaInfo(lz).rootName) return;
          if (!zz.hasEffect(uz, "Thief")) return;
          const Oz = zz.getBlockData(bz, nz, iz);
          return zz.getPlayerDbId(uz) !== (null === Oz || void 0 === Oz || null === (tz = Oz.persisted) || void 0 === tz || null === (Hz = tz.shared) || void 0 === Hz ? void 0 : Hz.ownerDbId) ? (zz.sendMessage(uz, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Ez.N.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var iz = bz(4035),
      lz = bz(1226);
    const Mz = 8.4,
      tz = 1e-4,
      Hz = .15,
      Oz = .04,
      pz = [.12, .04, .12],
      dz = 26,
      Fz = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Bp: 1,
        minLifeTime: tz,
        maxLifeTime: tz,
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
        blendMode: iz.d.Standard
      },
      Zz = {
        texture: "bubble",
        mipmaps: !1,
        Bp: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: dz,
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
        blendMode: iz.d.Standard
      },
      Rz = [0, 0, 0],
      Kz = [0, 0, 0];

    function wz(zz) {
      const uz = new Map;
      let bz = null;

      function Ez(zz) {
        var uz, bz;
        null === (uz = zz.bubbles) || void 0 === uz || uz.stop(), null === (bz = zz.fish) || void 0 === bz || bz.stop()
      }

      function nz(bz) {
        if (!bz.readDrawnPosition(zz, Kz)) {
          for (const zz of uz.values()) {
            var Ez;
            null === (Ez = zz.bubbles) || void 0 === Ez || Ez.setEmitRate(0)
          }
          return
        }
        const nz = performance.now();
        for (const [zz, lz] of uz) {
          var iz;
          if (null === (iz = lz.bubbles) || void 0 === iz || iz.setEmitRate(0), !bz.readDrawnPosition(zz, Rz)) continue;
          if (!((Rz[0] - Kz[0]) ** 2 + (Rz[1] - Kz[1]) ** 2 + (Rz[2] - Kz[2]) ** 2 < 900)) continue;
          const uz = Math.max(0, lz.biteAt - nz),
            Ez = lz.approachDurationMs > 0 ? Math.min(1, 1 - uz / lz.approachDurationMs) : 1,
            tz = (lz.approachDurationMs - uz) / 1e3,
            wz = lz.phase + .25 * Math.sin(1.7 * tz + lz.phase),
            Xz = Math.min(lz.approachDurationMs / 3e3 * 2.8, Mz) * (1 - Ez) * (1 + .15 * Math.sin(2.1 * tz + lz.phase)),
            fz = Math.min(1, 4 * (1 - Ez)),
            sz = (.45 * Math.sin(4.1 * tz + lz.phase) + .18 * Math.sin(9.7 * tz + 2 * lz.phase)) * fz,
            rz = Rz[0] + Math.cos(wz) * Xz - Math.sin(wz) * sz,
            oz = Math.ceil(lz.surfaceY),
            Nz = Rz[2] + Math.sin(wz) * Xz + Math.cos(wz) * sz,
            {
              fishAt: vz,
              bubblesAt: xz
            } = lz;
          vz[0] = xz[0] = rz, vz[1] = oz + Hz, xz[1] = oz + Oz, vz[2] = xz[2] = Nz, lz.fish ??= bz.createParticles(Fz, {
            pos: vz
          }), lz.fish.moveTo(vz), lz.fish.emit(1), lz.bubbles ??= bz.createParticles(Zz, {
            pos: xz,
            half: pz
          }), lz.bubbles.moveTo(xz), lz.bubbles.setEmitRate(dz + 32 * (.5 + .5 * Math.sin(9 * tz + lz.phase)) ** 4 + 13 * Ez)
        }
      }
      return {
        onCreate(zz) {
          bz = zz
        },
        onAfterRender() {
          bz && nz(bz)
        },
        onClose() {
          for (const zz of uz.values()) Ez(zz);
          uz.clear(), bz = null
        },
        onReceivedMessageFromServer(zz, bz) {
          if (zz !== lz.y) return;
          const {
            hookId: nz,
            waiting: iz
          } = bz;
          if (iz) uz.has(nz) || uz.set(nz, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + iz.remainingMs,
            approachDurationMs: iz.durationMs,
            surfaceY: iz.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const zz = uz.get(nz);
            zz && Ez(zz), uz.delete(nz)
          }
        }
      }
    }
    var Xz = bz(4609),
      fz = bz(4601);

    function sz(zz) {
      let uz, bz = null,
        Ez = null;
      const nz = () => {
        var zz;
        null === (zz = Ez) || void 0 === zz || zz(), Ez = null
      };
      return {
        onCreate(Ez) {
          uz = Ez, bz = uz.getClientOption(zz, "dialogue")
        },
        onAfterRender() {
          if (!uz) return;
          const iz = uz.getClientOption(zz, "dialogue");
          if (iz === bz) return;
          if (bz = iz, nz(), !iz || !1 === iz.animateIn) return;
          const {
            plan: lz,
            synth: Mz
          } = (0, fz.g)(iz);
          Mz && (Ez = (0, Xz.d)(Mz, lz.blips))
        },
        onClose: nz
      }
    }
    var rz = bz(38496);
    const oz = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Nz = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      vz = [0, 1, 2, 0, 2, 3];

    function xz(zz, uz, bz) {
      var Ez;
      let [nz, iz, lz] = uz;
      if (zz.hasPackModel("Furnace")) return null;
      const Mz = ((null !== (Ez = zz.getMetaInfo(bz).rot) && void 0 !== Ez ? Ez : 1) - 1) * Math.PI / 2,
        tz = Math.PI + Mz,
        Hz = Math.cos(tz),
        Oz = Math.sin(tz),
        pz = [];
      for (const [Zz, Rz] of oz) pz.push(Zz * Hz, Rz, -Zz * Oz);
      const dz = {
          positions: pz,
          indices: vz,
          uvs: Nz
        },
        Fz = [nz + .5 + .51 * Math.sin(Mz), iz + .375, lz + .5 + .51 * Math.cos(Mz)];
      return zz.createGameMesh(dz, {
        kind: "furnaceFire"
      }, Fz)
    }

    function Jz(zz) {
      return Math.floor(zz / 200) % 3
    }

    function Az(zz, uz, bz) {
      zz.setGameMesh(uz, {
        uvOffset: [0, bz / 3]
      })
    }
    const Tz = [.12, .025, .12],
      Lz = [{
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
          blendMode: iz.d.Standard,
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
          blendMode: iz.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Pz {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(zz, uz) {
        const bz = zz.getBlockId(uz[0], uz[1], uz[2]);
        if ("Furnace" !== zz.getMetaInfo(bz).rootName) return;
        const Ez = performance.now();
        let nz = this.smokes.find((zz => zz.pos[0] === uz[0] && zz.pos[1] === uz[1] && zz.pos[2] === uz[2] && zz.hO === bz));
        if (nz || (nz = {
            pos: [uz[0], uz[1], uz[2]],
            hO: bz,
            endMs: Ez,
            lastBurstMs: -1 / 0,
            pending: new Array(Lz.length).fill(0),
            fire: xz(zz, uz, bz)
          }, this.smokes.push(nz), null !== nz.fire && (Az(zz, nz.fire, Jz(Ez)), this.shownFireFrame = -1)), nz.endMs = Ez + 6e3, this.smokes.length > 4) {
          const uz = this.smokes.reduce(((zz, uz) => uz.endMs < zz.endMs ? uz : zz));
          Gz(zz, uz), this.smokes.splice(this.smokes.indexOf(uz), 1)
        }
        Ez - nz.lastBurstMs >= 300 && (nz.lastBurstMs = Ez, Lz.forEach(((zz, uz) => {
          nz.pending[uz] += zz.style.count
        })))
      }
      onAfterRender(zz, uz) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const bz = performance.now();
        this.smokes = this.smokes.filter((uz => {
          const [Ez, nz, iz] = uz.pos, lz = bz < uz.endMs && zz.getBlockId(Ez, nz, iz) === uz.hO;
          return lz || Gz(zz, uz), lz
        }));
        const Ez = Jz(bz);
        if (Ez !== this.shownFireFrame) {
          this.shownFireFrame = Ez;
          for (const uz of this.smokes) null !== uz.fire && Az(zz, uz.fire, Ez)
        }
        if (!zz.particlesEnabled()) {
          for (const zz of this.smokes) zz.pending.fill(0);
          return
        }
        const nz = Math.min(uz, 250) / 1e3;
        for (const iz of this.smokes) {
          const [uz, Ez, lz] = iz.pos;
          if (0 !== zz.getBlockId(uz, Ez + 1, lz)) {
            iz.pending.fill(0);
            continue
          }
          const Mz = (iz.endMs - bz) / 6e3,
            tz = this.centre;
          tz[0] = uz + .5, tz[1] = Ez + 1.275, tz[2] = lz + .5, Lz.forEach(((uz, bz) => {
            iz.pending[bz] += uz.perSecond * Mz * nz;
            const Ez = Math.floor(iz.pending[bz]);
            Ez > 0 && this.emit(zz, bz, tz, Ez) && (iz.pending[bz] -= Ez)
          }))
        }
      }
      dispose(zz) {
        for (const bz of this.smokes) Gz(zz, bz);
        this.smokes = [];
        for (const bz of null !== (uz = this.puffers) && void 0 !== uz ? uz : []) {
          var uz;
          bz.dispose()
        }
        this.puffers = null
      }
      emit(zz, uz, bz, Ez) {
        return this.puffers ??= Lz.map((zz => {
          let {
            style: uz,
            perSecond: bz
          } = zz;
          const Ez = (uz.count / .3 + bz) * uz.life[1];
          return new rz.f(uz, Math.ceil(4 * Ez), Tz)
        })), this.puffers[uz].emit(zz, bz, this.renderFrame, Ez)
      }
    }

    function Gz(zz, uz) {
      null !== uz.fire && (zz.disposeGameMesh(uz.fire), uz.fire = null)
    }

    function az() {
      let zz;
      const uz = new Pz;
      return {
        onCreate(uz) {
          zz = uz
        },
        onReceivedMessageFromServer(bz, Ez) {
          bz === lz.A && uz.start(zz, Ez)
        },
        onAfterRender(bz) {
          uz.onAfterRender(zz, bz)
        },
        onClose() {
          uz.dispose(zz)
        }
      }
    }

    function Vz(zz, uz, bz, Ez) {
      return {
        dialogue: sz(Ez.localPlayerId),
        fishing: wz(Ez.localPlayerId),
        furnaceSmoke: az(),
        ironChest: nz()
      }
    }

    function mz(zz, uz) {
      for (const nz of [zz, ...null !== uz && void 0 !== uz ? uz : []]) try {
        var bz;
        null === nz || void 0 === nz || null === (bz = nz.onClose) || void 0 === bz || bz.call(nz)
      } catch (Ez) {
        console.error("Error in client onClose callback", Ez)
      }
    }
  },
  38496: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez,
      f: () => iz
    });
    const Ez = 1 / .6,
      nz = {
        kind: "smokePuff"
      };
    class iz {
      constructor(zz, uz, bz) {
        this.style = zz, this.Bp = uz, this.half = bz, this.particles = null, this.lastFrame = -1
      }
      emit(zz, uz, bz) {
        let iz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return bz !== this.lastFrame && (this.lastFrame = bz, this.particles || (this.particles = zz.createParticles(function(zz, uz) {
          const [
            [bz, iz, lz],
            [Mz, tz, Hz]
          ] = zz.colours;
          return {
            texture: zz.soft ? nz : "square_particle",
            Bp: uz,
            minLifeTime: zz.life[0] / Ez,
            maxLifeTime: zz.life[1] / Ez,
            minEmitPower: zz.power[0] * Ez,
            maxEmitPower: zz.power[1] * Ez,
            minSize: zz.size[0],
            maxSize: zz.size[1],
            emitRate: 0,
            gravity: [0, zz.lift * Ez * Ez, 0],
            dir1: [-zz.spread, 1, -zz.spread],
            dir2: [zz.spread, 1, zz.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [bz, iz, lz, zz.alpha],
              maxColor: [Mz, tz, Hz, zz.alpha]
            }, {
              timeFraction: 1,
              minColor: [bz, iz, lz, 0],
              maxColor: [Mz, tz, Hz, 0]
            }],
            blendMode: zz.blendMode
          }
        }(this.style, this.Bp), {
          pos: uz,
          half: this.half
        })), this.particles.moveTo(uz, this.half), this.particles.emit(iz), !0)
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.stop(), this.particles = null
      }
    }
  },
  4605: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => Ez,
      i: () => iz,
      k: () => tz,
      n: () => lz
    });
    const Ez = ["sine", "triangle", "square", "sawtooth"],
      nz = 55,
      iz = {
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

    function lz(zz) {
      return "string" !== typeof zz ? zz : Object.hasOwn(iz, zz) ? iz[zz] : null
    }

    function Mz(zz, uz, bz) {
      return Math.min(bz, Math.max(uz, zz))
    }

    function tz(zz) {
      const uz = Mz(zz.durationMs, 10, 500),
        bz = Mz(zz.attackMs, 0, uz),
        {
          intonation: nz
        } = zz;
      return {
        waveform: Ez.includes(zz.waveform) ? zz.waveform : "sine",
        pitchHz: Mz(zz.pitchHz, 20, 4e3),
        glideSemitones: Mz(zz.glideSemitones, -24, 24),
        durationMs: uz,
        attackMs: bz,
        releaseMs: Mz(zz.releaseMs, 0, uz - bz),
        lowpassHz: null === zz.lowpassHz ? null : Mz(zz.lowpassHz, 20, 2e4),
        volume: Mz(zz.volume, 0, 2),
        intonation: {
          variationSemitones: Mz(nz.variationSemitones, 0, 6),
          declineSemitones: Mz(nz.declineSemitones, 0, 12),
          questionRiseSemitones: Mz(nz.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Mz(nz.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Mz(zz.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);