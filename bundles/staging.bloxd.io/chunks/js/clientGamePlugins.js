export const id = 33;
export const ids = [33];
export const modules = {
  40728: (rr, Sr, Qr) => {
    function Zr(rr) {
      return void 0 === rr ? void 0 : [rr[0], rr[1], rr[2]]
    }

    function Wr(rr) {
      const Sr = rr.particles;
      return {
        opts: {
          texture: Sr.texture,
          sx: Sr.sx,
          minLifeTime: Sr.minLifeTime,
          maxLifeTime: Sr.maxLifeTime,
          minSize: Sr.minSize,
          maxSize: Sr.maxSize,
          minEmitPower: Sr.minEmitPower,
          maxEmitPower: Sr.maxEmitPower,
          emitRate: Sr.emitRate,
          gravity: Zr(Sr.gravity),
          dir1: Zr(Sr.dir1),
          dir2: Zr(Sr.dir2),
          colorGradients: Sr.colorGradients,
          blendMode: Sr.blendMode
        },
        half: [Sr.width / 2, Sr.height / 2, Sr.depth / 2]
      }
    }
    Qr.d(Sr, {
      e: () => Wr
    })
  },
  40699: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      h: () => Er,
      i: () => fr,
      l: () => jr
    });
    var Zr = Qr(215);
    const Wr = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      ar = "PetRoot";
    let jr = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Ir = Wr;
    new Map, new Map;

    function fr(rr) {
      var Sr;
      return null !== (Sr = (0, Zr.b)(jr, rr)) && void 0 !== Sr ? Sr : null
    }

    function Er(rr) {
      var Sr;
      return null !== (Sr = (0, Zr.b)(Ir, rr)) && void 0 !== Sr ? Sr : null
    }
  },
  40733: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      e: () => Wr,
      f: () => ar
    });
    class Zr {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Lh = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(rr) {
        var Sr;
        const {
          feet: Qr,
          heading: Zr,
          tuning: jr
        } = rr, Ir = Math.min(Math.max(rr.dt, 0), .1), {
          pose: fr,
          Lh: Er,
          target: pr
        } = this;
        if (this.started && Ir > 0) {
          const rr = Math.hypot(Qr[0] - this.lastFeet[0], Qr[1] - this.lastFeet[1], Qr[2] - this.lastFeet[2]);
          this.speed += (rr / Ir - this.speed) * Math.min(Ir / .15, 1)
        }
        this.lastFeet[0] = Qr[0], this.lastFeet[1] = Qr[1], this.lastFeet[2] = Qr[2], this.stillS = this.speed > .3 ? 0 : this.stillS + Ir;
        const xr = this.stillS >= .6 ? "perched" : "flying";
        "flying" === xr && "perched" === fr.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += Ir, fr.mode = xr;
        const mr = Math.sin(Zr),
          Nr = Math.cos(Zr);
        "perched" === xr ? (ar(pr, Qr, jr.perchOffset, mr, Nr), pr[1] += rr.headTopY - Qr[1]) : (ar(pr, Qr, jr.followOffset, mr, Nr), pr[1] += Wr(jr, rr.timeS));
        const {
          pos: Ur
        } = fr, tr = Math.hypot(pr[0] - Ur[0], pr[1] - Ur[1], pr[2] - Ur[2]);
        if (!this.started || tr > 8 || "perched" === xr && (this.perchLocked || tr < .05)) this.perchLocked = this.started && "perched" === xr, Ur[0] = pr[0], Ur[1] = pr[1], Ur[2] = pr[2], Er[0] = Er[1] = Er[2] = 0;
        else {
          const rr = jr.followStiffness;
          for (let Sr = 0; Sr < 3; Sr++) Er[Sr] += (rr * rr * (pr[Sr] - Ur[Sr]) - 2 * rr * Er[Sr]) * Ir, Ur[Sr] += Er[Sr] * Ir
        }
        const hr = Zr + jr.yawOffset;
        var zr;
        return this.started ? fr.yaw += ((zr = hr - fr.yaw) - 2 * Math.PI * Math.round(zr / (2 * Math.PI))) * Math.min(8 * Ir, 1) : fr.yaw = hr, this.started = !0, fr.seated = "perched" === xr && this.perchLocked, fr.clip = null === (Sr = jr.clips) || void 0 === Sr ? void 0 : Sr[this.eQ(xr)], fr
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      eQ(rr) {
        return "perched" === rr ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function Wr(rr, Sr) {
      return rr.bobAmplitude * Math.sin(2 * Math.PI * rr.bobHz * Sr)
    }

    function ar(rr, Sr, Qr, Zr, Wr) {
      const [ar, jr, Ir] = Qr;
      rr[0] = Sr[0] + ar * Wr + Ir * Zr, rr[1] = Sr[1] + jr, rr[2] = Sr[2] - ar * Zr + Ir * Wr
    }
  },
  5658: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Rr,
      h: () => qr
    });
    var Zr = Qr(5667),
      Wr = Qr(360);
    const ar = 120,
      jr = 260,
      Ir = 1.15,
      fr = 1.2,
      Er = 2,
      pr = 1.08,
      xr = .8,
      mr = .95,
      Nr = 8,
      Ur = "[\"')\\]\u300d\u300f\uff09]*",
      tr = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ur}$`),
      hr = new RegExp(`[?\uff1f]${Ur}$`),
      zr = new RegExp(`[!\uff01]${Ur}$`),
      Yr = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      nr = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      er = new RegExp(`[${nr}]`),
      Kr = new RegExp(`[${nr}]|[^${nr}]+`, "g"),
      yr = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Br(rr) {
      let Sr = 2166136261;
      for (let Qr = 0; Qr < rr.length; Qr++) Sr ^= rr.charCodeAt(Qr), Sr = Math.imul(Sr, 16777619);
      return (Sr >>> 0) / 4294967295 * 2 - 1
    }

    function Tr(rr) {
      var Sr;
      if (er.test(rr)) return 1;
      const Qr = rr.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Zr = Qr.replace(/[^0-9]/g, "");
      if (Zr.length > 0 && !/\p{L}/u.test(Qr)) return Math.min(Zr.length, 4);
      const Wr = null !== (Sr = Qr.match(yr)) && void 0 !== Sr ? Sr : [];
      if (0 === Wr.length) {
        var ar, jr;
        const rr = null !== (ar = null === (jr = Qr.match(/\p{L}/gu)) || void 0 === jr ? void 0 : jr.length) && void 0 !== ar ? ar : 0;
        return 0 === rr ? 0 : Math.min(Math.max(1, Math.round(rr / 2.5)), Nr)
      }
      const Ir = Qr.replace(/[^\p{L}]/gu, ""),
        fr = Wr.length > 1 && "e" === Wr.at(-1) && Ir.endsWith("e") && !Ir.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(rr.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wr.length - (fr ? 1 : 0), Nr)
    }

    function vr(rr) {
      return rr.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Or(rr) {
      const Sr = rr.replace(/[^\p{L}]/gu, "");
      return Sr.length >= 2 && Sr === Sr.toUpperCase() && Sr !== Sr.toLowerCase()
    }

    function Lr(rr, Sr) {
      var Qr;
      const Nr = Sr && (0, Zr.n)(Sr),
        Ur = null !== (Qr = null === Nr || void 0 === Nr ? void 0 : Nr.syllableMs) && void 0 !== Qr ? Qr : Zr.e,
        nr = function(rr) {
          const Sr = [];
          for (const Zr of (0, Wr.gc)(rr))
            if ("string" === typeof Zr)
              for (const rr of Zr.split(/(\s+)/)) {
                if ("" === rr) continue;
                if (/^\s+$/.test(rr)) {
                  Sr.push({
                    kind: "space",
                    text: rr
                  });
                  continue
                }
                if (!er.test(rr)) {
                  Sr.push({
                    kind: "word",
                    text: rr,
                    delayMs: 0
                  });
                  continue
                }
                let Zr = !0;
                for (const Wr of null !== (Qr = rr.match(Kr)) && void 0 !== Qr ? Qr : []) {
                  var Qr;
                  const rr = Sr.at(-1);
                  Zr || "word" !== (null === rr || void 0 === rr ? void 0 : rr.kind) || er.test(Wr) || /[\p{L}\p{N}]/u.test(Wr) ? (Zr || Sr.push({
                    kind: "space",
                    text: "\u200b"
                  }), Sr.push({
                    kind: "word",
                    text: Wr,
                    delayMs: 0
                  }), Zr = !1) : rr.text += Wr
                }
              } else Sr.push({
                kind: "icon",
                text: Zr.icon,
                delayMs: 0
              });
          return Sr
        }(rr),
        yr = [];
      let Lr = [];
      for (const Zr of nr) "space" !== Zr.kind && (Lr.push(Zr), tr.test(Zr.text) && (yr.push(Lr), Lr = []));
      yr.push(Lr);
      const lr = [];
      let Xr = 0;
      for (const Zr of yr) {
        var Pr, Hr;
        const rr = null !== (Pr = null === (Hr = Zr.at(-1)) || void 0 === Hr ? void 0 : Hr.text) && void 0 !== Pr ? Pr : "",
          Sr = hr.test(rr),
          Qr = zr.test(rr),
          Wr = Zr.map((rr => "word" === rr.kind ? Tr(rr.text) : 1)),
          nr = Wr.findLastIndex((rr => rr > 0));
        for (const [hr, zr] of Zr.entries()) {
          const rr = "word" === zr.kind,
            Zr = Wr[hr];
          zr.delayMs = Xr;
          for (let Wr = 0; Nr && Wr < Zr; Wr++) {
            const {
              intonation: ar
            } = Nr;
            let jr = nr > 0 ? -ar.declineSemitones * (hr / nr) : 0;
            jr += Br(`${vr(zr.text)}|${Wr}`) * ar.variationSemitones;
            const tr = Math.min(1, ar.variationSemitones);
            let Yr = Nr.glideSemitones,
              er = 1;
            Qr && (jr += ar.exclaimLiftSemitones, er *= Ir), Sr && hr === nr && (jr += ar.questionRiseSemitones * (Zr > 1 ? .5 + .5 * Wr / (Zr - 1) : 1), Wr === Zr - 1 && (Yr = Math.abs(Yr) + ar.questionRiseSemitones / 2)), rr && Or(zr.text) && (jr += Er * tr, er *= fr), Zr > 1 && 0 === Wr && (jr += xr * tr, er *= pr), lr.push({
              atMs: Xr + Wr * Ur,
              semitones: jr,
              glideSemitones: Yr,
              durationMs: Wr < Zr - 1 ? Math.min(Nr.durationMs, Ur * mr) : Nr.durationMs,
              level: er
            })
          }
          Xr += Zr * Ur + (tr.test(zr.text) ? jr : Yr.test(zr.text) ? ar : 0)
        }
      }
      return {
        pieces: nr.map((rr => "space" === rr.kind ? rr : "icon" === rr.kind ? {
          kind: "icon",
          icon: rr.text,
          delayMs: rr.delayMs
        } : {
          kind: "word",
          text: rr.text,
          delayMs: rr.delayMs
        })),
        blips: lr
      }
    }
    var lr = Qr(1251),
      Xr = Qr(1304),
      Pr = Qr(2093);

    function Hr(rr) {
      if ("string" === typeof rr) return rr;
      const Sr = Xr.f.get().getCurrentLanguageCode();
      return (0, lr.s)(Sr, rr.translationKey, (0, lr.p)(rr.params, Pr.b.shown))
    }

    function qr(rr) {
      const Sr = void 0 === rr.voice ? null : (0, Zr.p)(rr.voice),
        Qr = Sr && (0, Zr.n)(Sr);
      return {
        plan: Lr(Hr(rr.line), Qr),
        synth: Qr
      }
    }

    function Rr(rr) {
      const Sr = [];
      let Qr = [];
      for (const [Wr, ar] of rr.entries()) {
        var Zr;
        "space" === ar.kind && (" " !== ar.text || "icon" !== (null === (Zr = rr[Wr + 1]) || void 0 === Zr ? void 0 : Zr.kind)) ? (Qr.length > 0 && Sr.push(Qr), Sr.push([ar]), Qr = []) : Qr.push(ar)
      }
      return Qr.length > 0 && Sr.push(Qr), Sr
    }
  },
  5675: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => pr,
      h: () => xr
    });
    var Zr = Qr(5681),
      Wr = Qr(26);
    const ar = .25,
      jr = .85,
      Ir = .02,
      fr = .01;

    function Er(rr, Sr, Qr, Zr, Wr, ar, Ir) {
      const {
        waveform: fr,
        pitchHz: Er,
        attackMs: pr,
        releaseMs: xr,
        lowpassHz: mr
      } = Qr, Nr = Wr + Zr.durationMs / 1e3, Ur = Er * 2 ** (Zr.semitones / 12), tr = rr.createOscillator();
      tr.type = fr, tr.frequency.setValueAtTime(Ur, Wr), tr.frequency.exponentialRampToValueAtTime(Ur * 2 ** (Zr.glideSemitones / 12), Nr);
      const hr = Wr + Math.min(pr, Zr.durationMs) / 1e3,
        zr = rr.createGain();
      zr.gain.setValueAtTime(0, Wr), zr.gain.linearRampToValueAtTime(ar, hr), zr.gain.linearRampToValueAtTime(ar * jr, Math.max(hr, Nr - xr / 1e3)), zr.gain.linearRampToValueAtTime(0, Nr);
      const Yr = [tr];
      if (null !== mr) {
        const Sr = rr.createBiquadFilter();
        Sr.type = "lowpass", Sr.frequency.value = mr, Yr.push(Sr)
      }
      Yr.push(zr, Sr);
      for (let jr = 1; jr < Yr.length; jr++) Yr[jr - 1].connect(Yr[jr]);
      return tr.onended = () => {
        for (const rr of Yr.slice(0, -1)) rr.disconnect();
        Ir()
      }, tr.start(Wr), tr.stop(Nr), tr
    }

    function pr(rr, Sr, Qr, Zr, Wr, jr) {
      if (0 === Zr.length) return jr(), () => {};
      const pr = ar * Qr.volume * Wr,
        xr = rr.createGain();
      xr.connect(Sr);
      const mr = rr.currentTime + Ir,
        Nr = new Set;
      for (const ar of Zr) {
        const Sr = Er(rr, xr, Qr, ar, mr + ar.atMs / 1e3, pr * ar.level, (() => {
          Nr.delete(Sr), 0 === Nr.size && (xr.disconnect(), jr())
        }));
        Nr.add(Sr)
      }
      return () => {
        const Sr = rr.currentTime;
        xr.gain.setTargetAtTime(0, Sr, fr);
        for (const rr of Nr) try {
          rr.stop(Sr + 5 * fr)
        } catch {}
      }
    }

    function xr(rr, Sr) {
      var Qr;
      const ar = Zr.Howler.ctx,
        jr = Zr.Howler.masterGain;
      if (!ar || !jr || !Wr.c.get("soundOnFromAd")) return () => {};
      const Ir = Zr.Howler;
      return null === (Qr = Ir._autoResume) || void 0 === Qr || Qr.call(Ir), pr(ar, jr, rr, Sr, Wr.c.get("soundVolume"), (() => {
        var rr;
        null === (rr = Ir._autoSuspend) || void 0 === rr || rr.call(Ir)
      }))
    }
  },
  40714: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      closeClientGame: () => xS,
      createDefaultClientPlugins: () => pS
    });
    var Zr = Qr(379);

    function Wr() {
      let rr;
      return {
        onCreate(Sr) {
          rr = Sr
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Sr, Qr, Wr, ar, jr, Ir) {
          var fr, Er;
          if ("Iron Chest" !== rr.getMetaInfo(jr).rootName) return;
          if (!rr.hasEffect(Sr, "Thief")) return;
          const pr = rr.getBlockData(Qr, Wr, ar);
          return rr.getPlayerDbId(Sr) !== (null === pr || void 0 === pr || null === (fr = pr.persisted) || void 0 === fr || null === (Er = fr.shared) || void 0 === Er ? void 0 : Er.ownerDbId) ? (rr.sendMessage(Sr, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Zr.K.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var ar = Qr(2984),
      jr = Qr(1287);
    const Ir = 8.4,
      fr = 1e-4,
      Er = .15,
      pr = .04,
      xr = [.12, .04, .12],
      mr = 26,
      Nr = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        sx: 1,
        minLifeTime: fr,
        maxLifeTime: fr,
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
        blendMode: ar.e.Standard
      },
      Ur = {
        texture: "bubble",
        mipmaps: !1,
        sx: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: mr,
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
        blendMode: ar.e.Standard
      },
      tr = [0, 0, 0],
      hr = [0, 0, 0];

    function zr(rr) {
      const Sr = new Map;
      let Qr = null;

      function Zr(rr) {
        var Sr, Qr;
        null === (Sr = rr.bubbles) || void 0 === Sr || Sr.stop(), null === (Qr = rr.fish) || void 0 === Qr || Qr.stop()
      }

      function Wr(Qr) {
        if (!Qr.readDrawnPosition(rr, hr)) {
          for (const rr of Sr.values()) {
            var Zr;
            null === (Zr = rr.bubbles) || void 0 === Zr || Zr.setEmitRate(0)
          }
          return
        }
        const Wr = performance.now();
        for (const [rr, jr] of Sr) {
          var ar;
          if (null === (ar = jr.bubbles) || void 0 === ar || ar.setEmitRate(0), !Qr.readDrawnPosition(rr, tr)) continue;
          if (!((tr[0] - hr[0]) ** 2 + (tr[1] - hr[1]) ** 2 + (tr[2] - hr[2]) ** 2 < 900)) continue;
          const Sr = Math.max(0, jr.biteAt - Wr),
            Zr = jr.approachDurationMs > 0 ? Math.min(1, 1 - Sr / jr.approachDurationMs) : 1,
            fr = (jr.approachDurationMs - Sr) / 1e3,
            zr = jr.phase + .25 * Math.sin(1.7 * fr + jr.phase),
            Yr = Math.min(jr.approachDurationMs / 3e3 * 2.8, Ir) * (1 - Zr) * (1 + .15 * Math.sin(2.1 * fr + jr.phase)),
            nr = Math.min(1, 4 * (1 - Zr)),
            er = (.45 * Math.sin(4.1 * fr + jr.phase) + .18 * Math.sin(9.7 * fr + 2 * jr.phase)) * nr,
            Kr = tr[0] + Math.cos(zr) * Yr - Math.sin(zr) * er,
            yr = Math.ceil(jr.surfaceY),
            Br = tr[2] + Math.sin(zr) * Yr + Math.cos(zr) * er,
            {
              fishAt: Tr,
              bubblesAt: vr
            } = jr;
          Tr[0] = vr[0] = Kr, Tr[1] = yr + Er, vr[1] = yr + pr, Tr[2] = vr[2] = Br, jr.fish ??= Qr.createParticles(Nr, {
            pos: Tr
          }), jr.fish.moveTo(Tr), jr.fish.emit(1), jr.bubbles ??= Qr.createParticles(Ur, {
            pos: vr,
            half: xr
          }), jr.bubbles.moveTo(vr), jr.bubbles.setEmitRate(mr + 32 * (.5 + .5 * Math.sin(9 * fr + jr.phase)) ** 4 + 13 * Zr)
        }
      }
      return {
        onCreate(rr) {
          Qr = rr
        },
        onAfterRender() {
          Qr && Wr(Qr)
        },
        onClose() {
          for (const rr of Sr.values()) Zr(rr);
          Sr.clear(), Qr = null
        },
        onReceivedMessageFromServer(rr, Qr) {
          if (rr !== jr.F) return;
          const {
            hookId: Wr,
            waiting: ar
          } = Qr;
          if (ar) Sr.has(Wr) || Sr.set(Wr, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + ar.remainingMs,
            approachDurationMs: ar.durationMs,
            surfaceY: ar.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const rr = Sr.get(Wr);
            rr && Zr(rr), Sr.delete(Wr)
          }
        }
      }
    }
    var Yr = Qr(5675),
      nr = Qr(5658);

    function er(rr) {
      let Sr, Qr = null,
        Zr = null;
      const Wr = () => {
        var rr;
        null === (rr = Zr) || void 0 === rr || rr(), Zr = null
      };
      return {
        onCreate(Zr) {
          Sr = Zr, Qr = Sr.getClientOption(rr, "dialogue")
        },
        onAfterRender() {
          if (!Sr) return;
          const ar = Sr.getClientOption(rr, "dialogue");
          if (ar === Qr) return;
          if (Qr = ar, Wr(), !ar || !1 === ar.animateIn) return;
          const {
            plan: jr,
            synth: Ir
          } = (0, nr.h)(ar);
          Ir && (Zr = (0, Yr.h)(Ir, jr.blips))
        },
        onClose: Wr
      }
    }
    var Kr = Qr(40721);
    const yr = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Br = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Tr = [0, 1, 2, 0, 2, 3];

    function vr(rr, Sr, Qr) {
      var Zr;
      let [Wr, ar, jr] = Sr;
      if (rr.hasPackModel("Furnace")) return null;
      const Ir = ((null !== (Zr = rr.getMetaInfo(Qr).rot) && void 0 !== Zr ? Zr : 1) - 1) * Math.PI / 2,
        fr = Math.PI + Ir,
        Er = Math.cos(fr),
        pr = Math.sin(fr),
        xr = [];
      for (const [Ur, tr] of yr) xr.push(Ur * Er, tr, -Ur * pr);
      const mr = {
          positions: xr,
          indices: Tr,
          uvs: Br
        },
        Nr = [Wr + .5 + .51 * Math.sin(Ir), ar + .375, jr + .5 + .51 * Math.cos(Ir)];
      return rr.createGameMesh(mr, {
        kind: "furnaceFire"
      }, Nr)
    }

    function Or(rr) {
      return Math.floor(rr / 200) % 3
    }

    function Lr(rr, Sr, Qr) {
      rr.setGameMesh(Sr, {
        uvOffset: [0, Qr / 3]
      })
    }
    const lr = [.12, .025, .12],
      Xr = [{
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
          blendMode: ar.e.Standard,
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
          blendMode: ar.e.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Pr {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(rr, Sr) {
        const Qr = rr.getBlockId(Sr[0], Sr[1], Sr[2]);
        if ("Furnace" !== rr.getMetaInfo(Qr).rootName) return;
        const Zr = performance.now();
        let Wr = this.smokes.find((rr => rr.pos[0] === Sr[0] && rr.pos[1] === Sr[1] && rr.pos[2] === Sr[2] && rr.aI === Qr));
        if (Wr || (Wr = {
            pos: [Sr[0], Sr[1], Sr[2]],
            aI: Qr,
            endMs: Zr,
            lastBurstMs: -1 / 0,
            pending: new Array(Xr.length).fill(0),
            fire: vr(rr, Sr, Qr)
          }, this.smokes.push(Wr), null !== Wr.fire && (Lr(rr, Wr.fire, Or(Zr)), this.shownFireFrame = -1)), Wr.endMs = Zr + 6e3, this.smokes.length > 4) {
          const Sr = this.smokes.reduce(((rr, Sr) => Sr.endMs < rr.endMs ? Sr : rr));
          Hr(rr, Sr), this.smokes.splice(this.smokes.indexOf(Sr), 1)
        }
        Zr - Wr.lastBurstMs >= 300 && (Wr.lastBurstMs = Zr, Xr.forEach(((rr, Sr) => {
          Wr.pending[Sr] += rr.style.count
        })))
      }
      onAfterRender(rr, Sr) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Qr = performance.now();
        this.smokes = this.smokes.filter((Sr => {
          const [Zr, Wr, ar] = Sr.pos, jr = Qr < Sr.endMs && rr.getBlockId(Zr, Wr, ar) === Sr.aI;
          return jr || Hr(rr, Sr), jr
        }));
        const Zr = Or(Qr);
        if (Zr !== this.shownFireFrame) {
          this.shownFireFrame = Zr;
          for (const Sr of this.smokes) null !== Sr.fire && Lr(rr, Sr.fire, Zr)
        }
        if (!rr.particlesEnabled()) {
          for (const rr of this.smokes) rr.pending.fill(0);
          return
        }
        const Wr = Math.min(Sr, 250) / 1e3;
        for (const ar of this.smokes) {
          const [Sr, Zr, jr] = ar.pos;
          if (0 !== rr.getBlockId(Sr, Zr + 1, jr)) {
            ar.pending.fill(0);
            continue
          }
          const Ir = (ar.endMs - Qr) / 6e3,
            fr = this.centre;
          fr[0] = Sr + .5, fr[1] = Zr + 1.275, fr[2] = jr + .5, Xr.forEach(((Sr, Qr) => {
            ar.pending[Qr] += Sr.perSecond * Ir * Wr;
            const Zr = Math.floor(ar.pending[Qr]);
            Zr > 0 && this.emit(rr, Qr, fr, Zr) && (ar.pending[Qr] -= Zr)
          }))
        }
      }
      dispose(rr) {
        for (const Qr of this.smokes) Hr(rr, Qr);
        this.smokes = [];
        for (const Qr of null !== (Sr = this.puffers) && void 0 !== Sr ? Sr : []) {
          var Sr;
          Qr.dispose()
        }
        this.puffers = null
      }
      emit(rr, Sr, Qr, Zr) {
        return this.puffers ??= Xr.map((rr => {
          let {
            style: Sr,
            perSecond: Qr
          } = rr;
          const Zr = (Sr.count / .3 + Qr) * Sr.life[1];
          return new Kr.d(Sr, Math.ceil(4 * Zr), lr)
        })), this.puffers[Sr].emit(rr, Qr, this.renderFrame, Zr)
      }
    }

    function Hr(rr, Sr) {
      null !== Sr.fire && (rr.disposeGameMesh(Sr.fire), Sr.fire = null)
    }

    function qr() {
      let rr;
      const Sr = new Pr;
      return {
        onCreate(Sr) {
          rr = Sr
        },
        onReceivedMessageFromServer(Qr, Zr) {
          Qr === jr.J && Sr.start(rr, Zr)
        },
        onAfterRender(Qr) {
          Sr.onAfterRender(rr, Qr)
        },
        onClose() {
          Sr.dispose(rr)
        }
      }
    }
    var Rr = Qr(208),
      gr = Qr(40699),
      Cr = Qr(40728),
      Mr = Qr(40733);
    class Gr {
      constructor(rr, Sr, Qr) {
        this.api = rr, this.wearer = Sr, this.name = Qr, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new Mr.b, this.shown = !1, this.raised = 0
      }
      update(rr) {
        var Sr;
        const Qr = (0, gr.i)(this.name);
        if (!Qr) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === Qr.model && this.madeFrom.scale === Qr.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(Qr.model, Qr.scale), this.madeFrom = Qr, !this.model)) return void this.raiseNametag(0);
        if (!(rr.drawn && !rr.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const Zr = this.motion.step({
          dt: rr.dt,
          feet: rr.feet,
          heading: rr.heading,
          headTopY: rr.headTopY,
          tuning: Qr,
          timeS: rr.timeS
        });
        this.model.setPose(Zr.pos, Zr.yaw + Math.PI), this.model.setClip(null !== (Sr = Zr.clip) && void 0 !== Sr ? Sr : null);
        const Wr = Zr.seated ? Qr : null;
        Wr !== this.perchedWith && (this.perchedWith = Wr, this.model.setPerch(Wr && {
          hQ: this.wearer,
          offset: Wr.perchOffset,
          yaw: Wr.yawOffset
        })), this.setShown(!0), this.raiseNametag(Qr.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(rr) {
        rr !== this.raised && (this.raised = rr, this.api.setNametagOffset(this.wearer, rr))
      }
      freeModel() {
        var rr;
        null === (rr = this.model) || void 0 === rr || rr.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(rr) {
        this.model && rr !== this.shown && (this.shown = rr, this.model.setVisible(rr))
      }
    }
    class kr {
      constructor(rr, Sr) {
        this.api = rr, this.name = Sr, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(rr) {
        const Sr = (0, gr.h)(this.name);
        if (Sr !== this.madeFrom && this.stop(), !Sr) return;
        const Qr = rr.ownFirstPerson ? Sr.ownInFirstPerson : rr.drawn;
        if (Qr) {
          const {
            centre: Qr
          } = this;
          if ((0, Mr.f)(Qr, rr.feet, Sr.offset, Math.sin(rr.heading), Math.cos(rr.heading)), this.particles) this.particles.moveTo(Qr, this.half);
          else {
            const rr = (0, Cr.e)(Sr);
            this.half = rr.half, this.particles = this.api.createParticles(rr.opts, {
              pos: Qr,
              half: rr.half
            }), this.madeFrom = Sr, this.emitting = !0
          }
        }
        this.particles && Qr !== this.emitting && (this.emitting = Qr, this.particles.setEmitRate(Qr ? Sr.particles.emitRate : 0))
      }
      stop() {
        var rr;
        null === (rr = this.particles) || void 0 === rr || rr.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const Ar = .25,
      Vr = 48,
      ir = 4,
      wr = 24,
      cr = 12,
      Fr = .6,
      or = 1 / Rr.i.playerEyeToHeightRatio;

    function br(rr, Sr, Qr) {
      const Zr = rr.filter((rr => rr[Sr] <= Vr));
      return Zr.sort(((rr, Qr) => rr[Sr] - Qr[Sr])), new Set(Zr.slice(0, Qr).map((rr => rr.id)))
    }

    function Jr() {
      let rr;
      const Sr = new Map;
      let Qr = 0,
        Zr = 0;
      const Wr = [0, 0, 0],
        ar = {
          feet: Wr,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function jr(rr) {
        var Sr, Qr;
        null === (Sr = rr.pet) || void 0 === Sr || Sr.dispose(), null === (Qr = rr.aura) || void 0 === Qr || Qr.stop()
      }

      function Ir(Sr, Qr) {
        var Zr, jr;
        const {
          id: Ir
        } = Sr, fr = rr.readDrawnPosition(Ir, Wr) ? rr.getDrawnHeading(Ir) : null, Er = null === fr ? null : rr.getDrawnEyeHeight(Ir);
        if (null === fr || null === Er) ar.drawn = !1, ar.ownFirstPerson = !1;
        else {
          const Sr = Qr.cameraPosition;
          ar.heading = fr, ar.headTopY = Wr[1] + Er * or, ar.drawn = rr.isAlive(Ir) && rr.isEntityDrawn(Ir), ar.ownFirstPerson = rr.isLocalPlayer(Ir) && rr.isAlive(Ir) && Math.hypot(Sr[0] - Wr[0], Sr[1] - Wr[1] - Er, Sr[2] - Wr[2]) < Fr
        }
        null === (Zr = Sr.pet) || void 0 === Zr || Zr.update(ar), null === (jr = Sr.aura) || void 0 === jr || jr.update(ar)
      }
      return {
        onCreate(Sr) {
          rr = Sr
        },
        onAfterRender(fr, Er) {
          const pr = fr / 1e3;
          Zr += pr, Qr -= pr, Qr <= 0 && (Qr = Ar, function(Qr) {
            const Zr = [];
            for (const jr of rr.getPlayerIds()) {
              const ar = rr.getPlayerCosmetics(jr),
                Ir = void 0 !== (null === ar || void 0 === ar ? void 0 : ar.pet) && (0, gr.i)(ar.pet) ? ar.pet : null,
                fr = void 0 !== (null === ar || void 0 === ar ? void 0 : ar.aura) && (0, gr.h)(ar.aura) ? ar.aura : null;
              if (null === Ir && null === fr || !rr.readDrawnPosition(jr, Wr)) continue;
              const Er = Math.hypot(Wr[0] - Qr[0], Wr[1] - Qr[1], Wr[2] - Qr[2]),
                pr = Sr.get(jr);
              Zr.push({
                id: jr,
                pet: Ir,
                aura: fr,
                petDist: null === Ir ? 1 / 0 : Er - (null !== pr && void 0 !== pr && pr.pet ? ir : 0),
                auraDist: null === fr ? 1 / 0 : Er - (null !== pr && void 0 !== pr && pr.aura ? ir : 0)
              })
            }
            const ar = br(Zr, "petDist", wr),
              Ir = rr.particlesEnabled() ? br(Zr, "auraDist", cr) : new Set,
              fr = new Set;
            for (const {
                id: Wr,
                pet: jr,
                aura: tr
              }
              of Zr) {
              var Er, pr, xr;
              const Qr = null !== (Er = Sr.get(Wr)) && void 0 !== Er ? Er : {
                  id: Wr,
                  pet: null,
                  aura: null
                },
                Zr = ar.has(Wr) ? jr : null,
                hr = Ir.has(Wr) ? tr : null;
              var mr, Nr, Ur;
              (null === (pr = Qr.pet) || void 0 === pr ? void 0 : pr.name) !== Zr ? (null === (mr = Qr.pet) || void 0 === mr || mr.dispose(), Qr.pet = null === Zr ? null : new Gr(rr, Wr, Zr)) : null === (Nr = Qr.pet) || void 0 === Nr || Nr.refreshNametag(), (null === (xr = Qr.aura) || void 0 === xr ? void 0 : xr.name) !== hr && (null === (Ur = Qr.aura) || void 0 === Ur || Ur.stop(), Qr.aura = null === hr ? null : new kr(rr, hr)), (Qr.pet || Qr.aura) && (Sr.set(Wr, Qr), fr.add(Wr))
            }
            for (const [rr, Wr] of Sr) fr.has(rr) || (jr(Wr), Sr.delete(rr))
          }(Er.cameraPosition)), ar.dt = pr, ar.timeS = Zr;
          for (const rr of Sr.values()) Ir(rr, Er)
        },
        onClose() {
          for (const rr of Sr.values()) jr(rr);
          Sr.clear()
        }
      }
    }
    var Dr = Qr(9832);
    const dr = "skyblockLoot",
      sr = "autoPickupClick";
    var ur = Qr(1788);

    function rS(rr, Sr) {
      return [{
        timeFraction: 0,
        minColor: [255 * rr[0], 255 * rr[1], 255 * rr[2], 1],
        maxColor: [255 * Sr[0], 255 * Sr[1], 255 * Sr[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const SS = [0, 0, 0],
      QS = {
        texture: "glint",
        mipmaps: !1,
        sx: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: SS,
        dir2: SS,
        blendMode: ar.e.OneOne
      },
      ZS = {
        ...QS,
        colorGradients: rS([1, .88, .38], [1, .65, .15])
      },
      WS = {
        ...QS,
        colorGradients: rS([.55, .95, 1], [.9, 1, 1])
      },
      aS = [.5, .5, .5],
      jS = {
        texture: "glint",
        mipmaps: !1,
        sx: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: rS([1, .12, .12], [1, .35, .2]),
        blendMode: ar.e.OneOne
      };
    class IS {
      constructor() {
        this.drops = new Map
      }
      vx(rr, Sr) {
        if ("overflowFlash" === Sr.kind) {
          const [Qr, Zr, Wr] = Sr.position, ar = rr.createParticles(jS, {
            pos: [Qr, Zr, Wr],
            half: aS
          });
          return ar.emit(18), void ar.stop()
        }
        this.drops.has(Sr.itemId) || this.drops.set(Sr.itemId, {
          owner: Sr.owner,
          cosmetic: Sr.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      lx(rr) {
        if (0 === this.drops.size) return;
        const Sr = performance.now(),
          Qr = rr.getCameraPosition();
        let Zr = 0;
        for (const ar of this.drops.values()) null !== ar.particles && Zr++;
        for (const [ar, jr] of this.drops) {
          const Ir = rr.getPositionView(ar);
          if (null === Ir) {
            var Wr;
            if (jr.seen || Sr - jr.markedAt > 5e3) null !== jr.particles && Zr--, null === (Wr = jr.particles) || void 0 === Wr || Wr.stop(), this.drops.delete(ar);
            continue
          }
          jr.cosmetic || !rr.isLocalPlayer(jr.owner) || jr.pickupDelayCleared || (rr.clearPickupDelay(ar), jr.pickupDelayCleared = !0);
          const fr = jr.lastPosition,
            Er = jr.seen && (Ir[0] - fr[0]) ** 2 + (Ir[1] - fr[1]) ** 2 + (Ir[2] - fr[2]) ** 2 > 4e-4,
            pr = (Ir[0] - Qr[0]) ** 2 + (Ir[1] - Qr[1]) ** 2 + (Ir[2] - Qr[2]) ** 2 < 2025;
          jr.seen = !0, fr[0] = Ir[0], fr[1] = Ir[1], fr[2] = Ir[2], Er && (jr.lastMovingAt = Sr), null !== jr.particles && (!pr || Sr - jr.lastMovingAt > 500) && (jr.particles.stop(), jr.particles = null, Zr--), Er && pr && null === jr.particles && Zr < 32 && (jr.particles = rr.createParticles(jr.cosmetic ? WS : ZS, {
            pos: Ir
          }), Zr++), null !== jr.particles && (jr.particles.moveTo(Ir), jr.particles.setEmitRate(Er ? 12 : 0)), !Er && null === jr.particles && Sr - Math.max(jr.lastMovingAt, jr.markedAt) > 2e3 && this.drops.delete(ar)
        }
      }
      dispose() {
        for (const Sr of this.drops.values()) {
          var rr;
          null === (rr = Sr.particles) || void 0 === rr || rr.stop()
        }
        this.drops.clear()
      }
    }
    const fS = new Set;

    function ES() {
      let rr;
      const Sr = new IS;
      return {
        onCreate(Sr) {
          rr = Sr
        },
        onReceivedMessageFromServer(Qr, Zr) {
          if (Qr === dr) Sr.vx(rr, Zr);
          else if (Qr === sr) {
            const rr = Zr,
              Sr = `${rr.id}|${rr.value}`;
            fS.has(Sr) || (fS.add(Sr), (0, ur.e)({
              id: rr.id,
              value: rr.value
            }))
          }
        },
        lx() {
          Sr.lx(rr)
        },
        onClose() {
          Sr.dispose()
        }
      }
    }

    function pS(rr, Sr, Qr, Zr) {
      return {
        cosmeticCompanions: Jr(),
        dialogue: er(Zr.localPlayerId),
        fishing: zr(Zr.localPlayerId),
        furnaceSmoke: qr(),
        ironChest: Wr(),
        localBlockBroken: (0, Dr.e)(),
        magnetLoot: ES()
      }
    }

    function xS(rr, Sr) {
      for (const Wr of [rr, ...null !== Sr && void 0 !== Sr ? Sr : []]) try {
        var Qr;
        null === Wr || void 0 === Wr || null === (Qr = Wr.onClose) || void 0 === Qr || Qr.call(Wr)
      } catch (Zr) {
        console.error("Error in client onClose callback", Zr)
      }
    }
  },
  9832: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      h: () => Wr
    });
    var Zr = Qr(34);
    const Wr = "localBlockBroken";

    function ar() {
      return {
        onPlayerChangeBlock(rr, Sr, Qr, ar, jr, Ir) {
          "Air" === Ir && Zr.i.Jp(Wr)
        }
      }
    }
  },
  40721: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr,
      d: () => ar
    });
    const Zr = 1 / .6,
      Wr = {
        kind: "smokePuff"
      };
    class ar {
      constructor(rr, Sr, Qr) {
        this.style = rr, this.sx = Sr, this.half = Qr, this.particles = null, this.lastFrame = -1
      }
      emit(rr, Sr, Qr) {
        let ar = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Qr !== this.lastFrame && (this.lastFrame = Qr, this.particles || (this.particles = rr.createParticles(function(rr, Sr) {
          const [
            [Qr, ar, jr],
            [Ir, fr, Er]
          ] = rr.colours;
          return {
            texture: rr.soft ? Wr : "square_particle",
            sx: Sr,
            minLifeTime: rr.life[0] / Zr,
            maxLifeTime: rr.life[1] / Zr,
            minEmitPower: rr.power[0] * Zr,
            maxEmitPower: rr.power[1] * Zr,
            minSize: rr.size[0],
            maxSize: rr.size[1],
            emitRate: 0,
            gravity: [0, rr.lift * Zr * Zr, 0],
            dir1: [-rr.spread, 1, -rr.spread],
            dir2: [rr.spread, 1, rr.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Qr, ar, jr, rr.alpha],
              maxColor: [Ir, fr, Er, rr.alpha]
            }, {
              timeFraction: 1,
              minColor: [Qr, ar, jr, 0],
              maxColor: [Ir, fr, Er, 0]
            }],
            blendMode: rr.blendMode
          }
        }(this.style, this.sx), {
          pos: Sr,
          half: this.half
        })), this.particles.moveTo(Sr, this.half), this.particles.emit(ar), !0)
      }
      dispose() {
        var rr;
        null === (rr = this.particles) || void 0 === rr || rr.stop(), this.particles = null
      }
    }
  },
  5667: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr,
      h: () => Zr,
      l: () => ar,
      n: () => fr,
      p: () => jr
    });
    const Zr = ["sine", "triangle", "square", "sawtooth"],
      Wr = 55,
      ar = {
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

    function jr(rr) {
      return "string" !== typeof rr ? rr : Object.hasOwn(ar, rr) ? ar[rr] : null
    }

    function Ir(rr, Sr, Qr) {
      return Math.min(Qr, Math.max(Sr, rr))
    }

    function fr(rr) {
      const Sr = Ir(rr.durationMs, 10, 500),
        Qr = Ir(rr.attackMs, 0, Sr),
        {
          intonation: Wr
        } = rr;
      return {
        waveform: Zr.includes(rr.waveform) ? rr.waveform : "sine",
        pitchHz: Ir(rr.pitchHz, 20, 4e3),
        glideSemitones: Ir(rr.glideSemitones, -24, 24),
        durationMs: Sr,
        attackMs: Qr,
        releaseMs: Ir(rr.releaseMs, 0, Sr - Qr),
        lowpassHz: null === rr.lowpassHz ? null : Ir(rr.lowpassHz, 20, 2e4),
        volume: Ir(rr.volume, 0, 2),
        intonation: {
          variationSemitones: Ir(Wr.variationSemitones, 0, 6),
          declineSemitones: Ir(Wr.declineSemitones, 0, 12),
          questionRiseSemitones: Ir(Wr.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ir(Wr.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ir(rr.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);