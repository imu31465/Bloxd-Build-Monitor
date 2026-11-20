export const id = 27;
export const ids = [27];
export const modules = {
  4472: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Az,
      f: () => jz
    });
    var Fz = sz(4476),
      Wz = sz(308);
    const Xz = 120,
      Oz = 260,
      oz = 1.15,
      vz = 1.2,
      Uz = 2,
      Kz = 1.08,
      uz = .8,
      Nz = .95,
      bz = 8,
      wz = "[\"')\\]\u300d\u300f\uff09]*",
      Dz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${wz}$`),
      gz = new RegExp(`[?\uff1f]${wz}$`),
      Hz = new RegExp(`[!\uff01]${wz}$`),
      Bz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Pz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      rz = new RegExp(`[${Pz}]`),
      Yz = new RegExp(`[${Pz}]|[^${Pz}]+`, "g"),
      xz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function mz(zz) {
      let tz = 2166136261;
      for (let sz = 0; sz < zz.length; sz++) tz ^= zz.charCodeAt(sz), tz = Math.imul(tz, 16777619);
      return (tz >>> 0) / 4294967295 * 2 - 1
    }

    function Jz(zz) {
      var tz;
      if (rz.test(zz)) return 1;
      const sz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Fz = sz.replace(/[^0-9]/g, "");
      if (Fz.length > 0 && !/\p{L}/u.test(sz)) return Math.min(Fz.length, 4);
      const Wz = null !== (tz = sz.match(xz)) && void 0 !== tz ? tz : [];
      if (0 === Wz.length) {
        var Xz, Oz;
        const zz = null !== (Xz = null === (Oz = sz.match(/\p{L}/gu)) || void 0 === Oz ? void 0 : Oz.length) && void 0 !== Xz ? Xz : 0;
        return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), bz)
      }
      const oz = sz.replace(/[^\p{L}]/gu, ""),
        vz = Wz.length > 1 && "e" === Wz.at(-1) && oz.endsWith("e") && !oz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wz.length - (vz ? 1 : 0), bz)
    }

    function Iz(zz) {
      return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Cz(zz) {
      const tz = zz.replace(/[^\p{L}]/gu, "");
      return tz.length >= 2 && tz === tz.toUpperCase() && tz !== tz.toLowerCase()
    }

    function ez(zz, tz) {
      var sz;
      const bz = tz && (0, Fz.l)(tz),
        wz = null !== (sz = null === bz || void 0 === bz ? void 0 : bz.syllableMs) && void 0 !== sz ? sz : Fz.e,
        Pz = function(zz) {
          const tz = [];
          for (const Fz of (0, Wz.bc)(zz))
            if ("string" === typeof Fz)
              for (const zz of Fz.split(/(\s+)/)) {
                if ("" === zz) continue;
                if (/^\s+$/.test(zz)) {
                  tz.push({
                    kind: "space",
                    text: zz
                  });
                  continue
                }
                if (!rz.test(zz)) {
                  tz.push({
                    kind: "word",
                    text: zz,
                    delayMs: 0
                  });
                  continue
                }
                let Fz = !0;
                for (const Wz of null !== (sz = zz.match(Yz)) && void 0 !== sz ? sz : []) {
                  var sz;
                  const zz = tz.at(-1);
                  Fz || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || rz.test(Wz) || /[\p{L}\p{N}]/u.test(Wz) ? (Fz || tz.push({
                    kind: "space",
                    text: "\u200b"
                  }), tz.push({
                    kind: "word",
                    text: Wz,
                    delayMs: 0
                  }), Fz = !1) : zz.text += Wz
                }
              } else tz.push({
                kind: "icon",
                text: Fz.icon,
                delayMs: 0
              });
          return tz
        }(zz),
        xz = [];
      let ez = [];
      for (const Fz of Pz) "space" !== Fz.kind && (ez.push(Fz), Dz.test(Fz.text) && (xz.push(ez), ez = []));
      xz.push(ez);
      const Zz = [];
      let Gz = 0;
      for (const Fz of xz) {
        var Tz, cz;
        const zz = null !== (Tz = null === (cz = Fz.at(-1)) || void 0 === cz ? void 0 : cz.text) && void 0 !== Tz ? Tz : "",
          tz = gz.test(zz),
          sz = Hz.test(zz),
          Wz = Fz.map((zz => "word" === zz.kind ? Jz(zz.text) : 1)),
          Pz = Wz.findLastIndex((zz => zz > 0));
        for (const [gz, Hz] of Fz.entries()) {
          const zz = "word" === Hz.kind,
            Fz = Wz[gz];
          Hz.delayMs = Gz;
          for (let Wz = 0; bz && Wz < Fz; Wz++) {
            const {
              intonation: Xz
            } = bz;
            let Oz = Pz > 0 ? -Xz.declineSemitones * (gz / Pz) : 0;
            Oz += mz(`${Iz(Hz.text)}|${Wz}`) * Xz.variationSemitones;
            const Dz = Math.min(1, Xz.variationSemitones);
            let Bz = bz.glideSemitones,
              rz = 1;
            sz && (Oz += Xz.exclaimLiftSemitones, rz *= oz), tz && gz === Pz && (Oz += Xz.questionRiseSemitones * (Fz > 1 ? .5 + .5 * Wz / (Fz - 1) : 1), Wz === Fz - 1 && (Bz = Math.abs(Bz) + Xz.questionRiseSemitones / 2)), zz && Cz(Hz.text) && (Oz += Uz * Dz, rz *= vz), Fz > 1 && 0 === Wz && (Oz += uz * Dz, rz *= Kz), Zz.push({
              atMs: Gz + Wz * wz,
              semitones: Oz,
              glideSemitones: Bz,
              durationMs: Wz < Fz - 1 ? Math.min(bz.durationMs, wz * Nz) : bz.durationMs,
              level: rz
            })
          }
          Gz += Fz * wz + (Dz.test(Hz.text) ? Oz : Bz.test(Hz.text) ? Xz : 0)
        }
      }
      return {
        pieces: Pz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
          kind: "icon",
          icon: zz.text,
          delayMs: zz.delayMs
        } : {
          kind: "word",
          text: zz.text,
          delayMs: zz.delayMs
        })),
        blips: Zz
      }
    }
    var Zz = sz(1173),
      Gz = sz(1237),
      Tz = sz(1862);

    function cz(zz) {
      if ("string" === typeof zz) return zz;
      const tz = Gz.g.get().getCurrentLanguageCode();
      return (0, Zz.s)(tz, zz.translationKey, (0, Zz.r)(zz.params, Tz.d.shown))
    }

    function jz(zz) {
      const tz = void 0 === zz.voice ? null : (0, Fz.n)(zz.voice),
        sz = tz && (0, Fz.l)(tz);
      return {
        plan: ez(cz(zz.line), sz),
        synth: sz
      }
    }

    function Az(zz) {
      const tz = [];
      let sz = [];
      for (const [Wz, Xz] of zz.entries()) {
        var Fz;
        "space" === Xz.kind && (" " !== Xz.text || "icon" !== (null === (Fz = zz[Wz + 1]) || void 0 === Fz ? void 0 : Fz.kind)) ? (sz.length > 0 && tz.push(sz), tz.push([Xz]), sz = []) : sz.push(Xz)
      }
      return sz.length > 0 && tz.push(sz), tz
    }
  },
  4479: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Kz,
      e: () => uz
    });
    var Fz = sz(4488),
      Wz = sz(30);
    const Xz = .25,
      Oz = .85,
      oz = .02,
      vz = .01;

    function Uz(zz, tz, sz, Fz, Wz, Xz, oz) {
      const {
        waveform: vz,
        pitchHz: Uz,
        attackMs: Kz,
        releaseMs: uz,
        lowpassHz: Nz
      } = sz, bz = Wz + Fz.durationMs / 1e3, wz = Uz * 2 ** (Fz.semitones / 12), Dz = zz.createOscillator();
      Dz.type = vz, Dz.frequency.setValueAtTime(wz, Wz), Dz.frequency.exponentialRampToValueAtTime(wz * 2 ** (Fz.glideSemitones / 12), bz);
      const gz = Wz + Math.min(Kz, Fz.durationMs) / 1e3,
        Hz = zz.createGain();
      Hz.gain.setValueAtTime(0, Wz), Hz.gain.linearRampToValueAtTime(Xz, gz), Hz.gain.linearRampToValueAtTime(Xz * Oz, Math.max(gz, bz - uz / 1e3)), Hz.gain.linearRampToValueAtTime(0, bz);
      const Bz = [Dz];
      if (null !== Nz) {
        const tz = zz.createBiquadFilter();
        tz.type = "lowpass", tz.frequency.value = Nz, Bz.push(tz)
      }
      Bz.push(Hz, tz);
      for (let Oz = 1; Oz < Bz.length; Oz++) Bz[Oz - 1].connect(Bz[Oz]);
      return Dz.onended = () => {
        for (const zz of Bz.slice(0, -1)) zz.disconnect();
        oz()
      }, Dz.start(Wz), Dz.stop(bz), Dz
    }

    function Kz(zz, tz, sz, Fz, Wz, Oz) {
      if (0 === Fz.length) return Oz(), () => {};
      const Kz = Xz * sz.volume * Wz,
        uz = zz.createGain();
      uz.connect(tz);
      const Nz = zz.currentTime + oz,
        bz = new Set;
      for (const Xz of Fz) {
        const tz = Uz(zz, uz, sz, Xz, Nz + Xz.atMs / 1e3, Kz * Xz.level, (() => {
          bz.delete(tz), 0 === bz.size && (uz.disconnect(), Oz())
        }));
        bz.add(tz)
      }
      return () => {
        const tz = zz.currentTime;
        uz.gain.setTargetAtTime(0, tz, vz);
        for (const zz of bz) try {
          zz.stop(tz + 5 * vz)
        } catch {}
      }
    }

    function uz(zz, tz) {
      var sz;
      const Xz = Fz.Howler.ctx,
        Oz = Fz.Howler.masterGain;
      if (!Xz || !Oz || !Wz.b.get("soundOnFromAd")) return () => {};
      const oz = Fz.Howler;
      return null === (sz = oz._autoResume) || void 0 === sz || sz.call(oz), Kz(Xz, Oz, zz, tz, Wz.b.get("soundVolume"), (() => {
        var zz;
        null === (zz = oz._autoSuspend) || void 0 === zz || zz.call(oz)
      }))
    }
  },
  38550: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      closeClientGame: () => yz,
      createDefaultClientPlugins: () => Az
    });
    var Fz = sz(321);

    function Wz() {
      let zz;
      return {
        onCreate(tz) {
          zz = tz
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(tz, sz, Wz, Xz, Oz, oz) {
          var vz, Uz;
          if ("Iron Chest" !== zz.getMetaInfo(Oz).rootName) return;
          if (!zz.hasEffect(tz, "Thief")) return;
          const Kz = zz.getBlockData(sz, Wz, Xz);
          return zz.getPlayerDbId(tz) !== (null === Kz || void 0 === Kz || null === (vz = Kz.persisted) || void 0 === vz || null === (Uz = vz.shared) || void 0 === Uz ? void 0 : Uz.ownerDbId) ? (zz.sendMessage(tz, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Fz.N.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Xz = sz(3926),
      Oz = sz(1223);
    const oz = 8.4,
      vz = 1e-4,
      Uz = .15,
      Kz = .04,
      uz = [.12, .04, .12],
      Nz = 26,
      bz = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        au: 1,
        minLifeTime: vz,
        maxLifeTime: vz,
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
        blendMode: Xz.f.Standard
      },
      wz = {
        texture: "bubble",
        mipmaps: !1,
        au: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Nz,
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
        blendMode: Xz.f.Standard
      },
      Dz = [0, 0, 0],
      gz = [0, 0, 0];

    function Hz(zz) {
      const tz = new Map;
      let sz = null;

      function Fz(zz) {
        var tz, sz;
        null === (tz = zz.bubbles) || void 0 === tz || tz.stop(), null === (sz = zz.fish) || void 0 === sz || sz.stop()
      }

      function Wz(sz) {
        if (!sz.readDrawnPosition(zz, gz)) {
          for (const zz of tz.values()) {
            var Fz;
            null === (Fz = zz.bubbles) || void 0 === Fz || Fz.setEmitRate(0)
          }
          return
        }
        const Wz = performance.now();
        for (const [zz, Oz] of tz) {
          var Xz;
          if (null === (Xz = Oz.bubbles) || void 0 === Xz || Xz.setEmitRate(0), !sz.readDrawnPosition(zz, Dz)) continue;
          if (!((Dz[0] - gz[0]) ** 2 + (Dz[1] - gz[1]) ** 2 + (Dz[2] - gz[2]) ** 2 < 900)) continue;
          const tz = Math.max(0, Oz.biteAt - Wz),
            Fz = Oz.approachDurationMs > 0 ? Math.min(1, 1 - tz / Oz.approachDurationMs) : 1,
            vz = (Oz.approachDurationMs - tz) / 1e3,
            Hz = Oz.phase + .25 * Math.sin(1.7 * vz + Oz.phase),
            Bz = Math.min(Oz.approachDurationMs / 3e3 * 2.8, oz) * (1 - Fz) * (1 + .15 * Math.sin(2.1 * vz + Oz.phase)),
            Pz = Math.min(1, 4 * (1 - Fz)),
            rz = (.45 * Math.sin(4.1 * vz + Oz.phase) + .18 * Math.sin(9.7 * vz + 2 * Oz.phase)) * Pz,
            Yz = Dz[0] + Math.cos(Hz) * Bz - Math.sin(Hz) * rz,
            xz = Math.ceil(Oz.surfaceY),
            mz = Dz[2] + Math.sin(Hz) * Bz + Math.cos(Hz) * rz,
            {
              fishAt: Jz,
              bubblesAt: Iz
            } = Oz;
          Jz[0] = Iz[0] = Yz, Jz[1] = xz + Uz, Iz[1] = xz + Kz, Jz[2] = Iz[2] = mz, Oz.fish ??= sz.createParticles(bz, {
            pos: Jz
          }), Oz.fish.moveTo(Jz), Oz.fish.emit(1), Oz.bubbles ??= sz.createParticles(wz, {
            pos: Iz,
            half: uz
          }), Oz.bubbles.moveTo(Iz), Oz.bubbles.setEmitRate(Nz + 32 * (.5 + .5 * Math.sin(9 * vz + Oz.phase)) ** 4 + 13 * Fz)
        }
      }
      return {
        onCreate(zz) {
          sz = zz
        },
        onAfterRender() {
          sz && Wz(sz)
        },
        onClose() {
          for (const zz of tz.values()) Fz(zz);
          tz.clear(), sz = null
        },
        onReceivedMessageFromServer(zz, sz) {
          if (zz !== Oz.z) return;
          const {
            hookId: Wz,
            waiting: Xz
          } = sz;
          if (Xz) tz.has(Wz) || tz.set(Wz, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Xz.remainingMs,
            approachDurationMs: Xz.durationMs,
            surfaceY: Xz.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const zz = tz.get(Wz);
            zz && Fz(zz), tz.delete(Wz)
          }
        }
      }
    }
    var Bz = sz(4479),
      Pz = sz(4472);

    function rz(zz) {
      let tz, sz = null,
        Fz = null;
      const Wz = () => {
        var zz;
        null === (zz = Fz) || void 0 === zz || zz(), Fz = null
      };
      return {
        onCreate(Fz) {
          tz = Fz, sz = tz.getClientOption(zz, "dialogue")
        },
        onAfterRender() {
          if (!tz) return;
          const Xz = tz.getClientOption(zz, "dialogue");
          if (Xz === sz) return;
          if (sz = Xz, Wz(), !Xz || !1 === Xz.animateIn) return;
          const {
            plan: Oz,
            synth: oz
          } = (0, Pz.f)(Xz);
          oz && (Fz = (0, Bz.e)(oz, Oz.blips))
        },
        onClose: Wz
      }
    }
    var Yz = sz(38555);
    const xz = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      mz = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Jz = [0, 1, 2, 0, 2, 3];

    function Iz(zz, tz, sz) {
      var Fz;
      let [Wz, Xz, Oz] = tz;
      if (zz.hasPackModel("Furnace")) return null;
      const oz = ((null !== (Fz = zz.getMetaInfo(sz).rot) && void 0 !== Fz ? Fz : 1) - 1) * Math.PI / 2,
        vz = Math.PI + oz,
        Uz = Math.cos(vz),
        Kz = Math.sin(vz),
        uz = [];
      for (const [wz, Dz] of xz) uz.push(wz * Uz, Dz, -wz * Kz);
      const Nz = {
          positions: uz,
          indices: Jz,
          uvs: mz
        },
        bz = [Wz + .5 + .51 * Math.sin(oz), Xz + .375, Oz + .5 + .51 * Math.cos(oz)];
      return zz.createGameMesh(Nz, {
        kind: "furnaceFire"
      }, bz)
    }

    function Cz(zz) {
      return Math.floor(zz / 200) % 3
    }

    function ez(zz, tz, sz) {
      zz.setGameMesh(tz, {
        uvOffset: [0, sz / 3]
      })
    }
    const Zz = [.12, .025, .12],
      Gz = [{
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
          blendMode: Xz.f.Standard,
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
          blendMode: Xz.f.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Tz {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(zz, tz) {
        const sz = zz.getBlockId(tz[0], tz[1], tz[2]);
        if ("Furnace" !== zz.getMetaInfo(sz).rootName) return;
        const Fz = performance.now();
        let Wz = this.smokes.find((zz => zz.pos[0] === tz[0] && zz.pos[1] === tz[1] && zz.pos[2] === tz[2] && zz.yK === sz));
        if (Wz || (Wz = {
            pos: [tz[0], tz[1], tz[2]],
            yK: sz,
            endMs: Fz,
            lastBurstMs: -1 / 0,
            pending: new Array(Gz.length).fill(0),
            fire: Iz(zz, tz, sz)
          }, this.smokes.push(Wz), null !== Wz.fire && (ez(zz, Wz.fire, Cz(Fz)), this.shownFireFrame = -1)), Wz.endMs = Fz + 6e3, this.smokes.length > 4) {
          const tz = this.smokes.reduce(((zz, tz) => tz.endMs < zz.endMs ? tz : zz));
          cz(zz, tz), this.smokes.splice(this.smokes.indexOf(tz), 1)
        }
        Fz - Wz.lastBurstMs >= 300 && (Wz.lastBurstMs = Fz, Gz.forEach(((zz, tz) => {
          Wz.pending[tz] += zz.style.count
        })))
      }
      onAfterRender(zz, tz) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const sz = performance.now();
        this.smokes = this.smokes.filter((tz => {
          const [Fz, Wz, Xz] = tz.pos, Oz = sz < tz.endMs && zz.getBlockId(Fz, Wz, Xz) === tz.yK;
          return Oz || cz(zz, tz), Oz
        }));
        const Fz = Cz(sz);
        if (Fz !== this.shownFireFrame) {
          this.shownFireFrame = Fz;
          for (const tz of this.smokes) null !== tz.fire && ez(zz, tz.fire, Fz)
        }
        if (!zz.particlesEnabled()) {
          for (const zz of this.smokes) zz.pending.fill(0);
          return
        }
        const Wz = Math.min(tz, 250) / 1e3;
        for (const Xz of this.smokes) {
          const [tz, Fz, Oz] = Xz.pos;
          if (0 !== zz.getBlockId(tz, Fz + 1, Oz)) {
            Xz.pending.fill(0);
            continue
          }
          const oz = (Xz.endMs - sz) / 6e3,
            vz = this.centre;
          vz[0] = tz + .5, vz[1] = Fz + 1.275, vz[2] = Oz + .5, Gz.forEach(((tz, sz) => {
            Xz.pending[sz] += tz.perSecond * oz * Wz;
            const Fz = Math.floor(Xz.pending[sz]);
            Fz > 0 && this.emit(zz, sz, vz, Fz) && (Xz.pending[sz] -= Fz)
          }))
        }
      }
      dispose(zz) {
        for (const sz of this.smokes) cz(zz, sz);
        this.smokes = [];
        for (const sz of null !== (tz = this.puffers) && void 0 !== tz ? tz : []) {
          var tz;
          sz.dispose()
        }
        this.puffers = null
      }
      emit(zz, tz, sz, Fz) {
        return this.puffers ??= Gz.map((zz => {
          let {
            style: tz,
            perSecond: sz
          } = zz;
          const Fz = (tz.count / .3 + sz) * tz.life[1];
          return new Yz.d(tz, Math.ceil(4 * Fz), Zz)
        })), this.puffers[tz].emit(zz, sz, this.renderFrame, Fz)
      }
    }

    function cz(zz, tz) {
      null !== tz.fire && (zz.disposeGameMesh(tz.fire), tz.fire = null)
    }

    function jz() {
      let zz;
      const tz = new Tz;
      return {
        onCreate(tz) {
          zz = tz
        },
        onReceivedMessageFromServer(sz, Fz) {
          sz === Oz.C && tz.start(zz, Fz)
        },
        onAfterRender(sz) {
          tz.onAfterRender(zz, sz)
        },
        onClose() {
          tz.dispose(zz)
        }
      }
    }

    function Az(zz, tz, sz, Fz) {
      return {
        dialogue: rz(Fz.localPlayerId),
        fishing: Hz(Fz.localPlayerId),
        furnaceSmoke: jz(),
        ironChest: Wz()
      }
    }

    function yz(zz, tz) {
      for (const Wz of [zz, ...null !== tz && void 0 !== tz ? tz : []]) try {
        var sz;
        null === Wz || void 0 === Wz || null === (sz = Wz.onClose) || void 0 === sz || sz.call(Wz)
      } catch (Fz) {
        console.error("Error in client onClose callback", Fz)
      }
    }
  },
  38555: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz,
      d: () => Xz
    });
    const Fz = 1 / .6,
      Wz = {
        kind: "smokePuff"
      };
    class Xz {
      constructor(zz, tz, sz) {
        this.style = zz, this.au = tz, this.half = sz, this.particles = null, this.lastFrame = -1
      }
      emit(zz, tz, sz) {
        let Xz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return sz !== this.lastFrame && (this.lastFrame = sz, this.particles || (this.particles = zz.createParticles(function(zz, tz) {
          const [
            [sz, Xz, Oz],
            [oz, vz, Uz]
          ] = zz.colours;
          return {
            texture: zz.soft ? Wz : "square_particle",
            au: tz,
            minLifeTime: zz.life[0] / Fz,
            maxLifeTime: zz.life[1] / Fz,
            minEmitPower: zz.power[0] * Fz,
            maxEmitPower: zz.power[1] * Fz,
            minSize: zz.size[0],
            maxSize: zz.size[1],
            emitRate: 0,
            gravity: [0, zz.lift * Fz * Fz, 0],
            dir1: [-zz.spread, 1, -zz.spread],
            dir2: [zz.spread, 1, zz.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [sz, Xz, Oz, zz.alpha],
              maxColor: [oz, vz, Uz, zz.alpha]
            }, {
              timeFraction: 1,
              minColor: [sz, Xz, Oz, 0],
              maxColor: [oz, vz, Uz, 0]
            }],
            blendMode: zz.blendMode
          }
        }(this.style, this.au), {
          pos: tz,
          half: this.half
        })), this.particles.moveTo(tz, this.half), this.particles.emit(Xz), !0)
      }
      dispose() {
        var zz;
        null === (zz = this.particles) || void 0 === zz || zz.stop(), this.particles = null
      }
    }
  },
  4476: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Fz,
      h: () => Xz,
      l: () => vz,
      n: () => Oz
    });
    const Fz = ["sine", "triangle", "square", "sawtooth"],
      Wz = 55,
      Xz = {
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

    function Oz(zz) {
      return "string" !== typeof zz ? zz : Object.hasOwn(Xz, zz) ? Xz[zz] : null
    }

    function oz(zz, tz, sz) {
      return Math.min(sz, Math.max(tz, zz))
    }

    function vz(zz) {
      const tz = oz(zz.durationMs, 10, 500),
        sz = oz(zz.attackMs, 0, tz),
        {
          intonation: Wz
        } = zz;
      return {
        waveform: Fz.includes(zz.waveform) ? zz.waveform : "sine",
        pitchHz: oz(zz.pitchHz, 20, 4e3),
        glideSemitones: oz(zz.glideSemitones, -24, 24),
        durationMs: tz,
        attackMs: sz,
        releaseMs: oz(zz.releaseMs, 0, tz - sz),
        lowpassHz: null === zz.lowpassHz ? null : oz(zz.lowpassHz, 20, 2e4),
        volume: oz(zz.volume, 0, 2),
        intonation: {
          variationSemitones: oz(Wz.variationSemitones, 0, 6),
          declineSemitones: oz(Wz.declineSemitones, 0, 12),
          questionRiseSemitones: oz(Wz.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: oz(Wz.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: oz(zz.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);