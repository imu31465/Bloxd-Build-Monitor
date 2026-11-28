export const id = 33;
export const ids = [33];
export const modules = {
  40504: (bb, wb, Mb) => {
    function eb(bb) {
      return void 0 === bb ? void 0 : [bb[0], bb[1], bb[2]]
    }

    function Hb(bb) {
      const wb = bb.particles;
      return {
        opts: {
          texture: wb.texture,
          qO: wb.qO,
          minLifeTime: wb.minLifeTime,
          maxLifeTime: wb.maxLifeTime,
          minSize: wb.minSize,
          maxSize: wb.maxSize,
          minEmitPower: wb.minEmitPower,
          maxEmitPower: wb.maxEmitPower,
          emitRate: wb.emitRate,
          gravity: eb(wb.gravity),
          dir1: eb(wb.dir1),
          dir2: eb(wb.dir2),
          colorGradients: wb.colorGradients,
          blendMode: wb.blendMode
        },
        half: [wb.width / 2, wb.height / 2, wb.depth / 2]
      }
    }
    Mb.d(wb, {
      d: () => Hb
    })
  },
  40463: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Lb,
      j: () => lb,
      l: () => Vb
    });
    var eb = Mb(236);
    const Hb = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      pb = "PetRoot";
    let Vb = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      gb = Hb;
    new Map, new Map;

    function lb(bb) {
      var wb;
      return null !== (wb = (0, eb.c)(Vb, bb)) && void 0 !== wb ? wb : null
    }

    function Lb(bb) {
      var wb;
      return null !== (wb = (0, eb.c)(gb, bb)) && void 0 !== wb ? wb : null
    }
  },
  40510: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb,
      d: () => Hb,
      e: () => pb
    });
    class eb {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.UF = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(bb) {
        var wb;
        const {
          feet: Mb,
          heading: eb,
          tuning: Vb
        } = bb, gb = Math.min(Math.max(bb.dt, 0), .1), {
          pose: lb,
          UF: Lb,
          target: Ib
        } = this;
        if (this.started && gb > 0) {
          const bb = Math.hypot(Mb[0] - this.lastFeet[0], Mb[1] - this.lastFeet[1], Mb[2] - this.lastFeet[2]);
          this.speed += (bb / gb - this.speed) * Math.min(gb / .15, 1)
        }
        this.lastFeet[0] = Mb[0], this.lastFeet[1] = Mb[1], this.lastFeet[2] = Mb[2], this.stillS = this.speed > .3 ? 0 : this.stillS + gb;
        const Ob = this.stillS >= .6 ? "perched" : "flying";
        "flying" === Ob && "perched" === lb.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += gb, lb.mode = Ob;
        const Ub = Math.sin(eb),
          tb = Math.cos(eb);
        "perched" === Ob ? (pb(Ib, Mb, Vb.perchOffset, Ub, tb), Ib[1] += bb.headTopY - Mb[1]) : (pb(Ib, Mb, Vb.followOffset, Ub, tb), Ib[1] += Hb(Vb, bb.timeS));
        const {
          pos: Cb
        } = lb, Eb = Math.hypot(Ib[0] - Cb[0], Ib[1] - Cb[1], Ib[2] - Cb[2]);
        if (!this.started || Eb > 8 || "perched" === Ob && (this.perchLocked || Eb < .05)) this.perchLocked = this.started && "perched" === Ob, Cb[0] = Ib[0], Cb[1] = Ib[1], Cb[2] = Ib[2], Lb[0] = Lb[1] = Lb[2] = 0;
        else {
          const bb = Vb.followStiffness;
          for (let wb = 0; wb < 3; wb++) Lb[wb] += (bb * bb * (Ib[wb] - Cb[wb]) - 2 * bb * Lb[wb]) * gb, Cb[wb] += Lb[wb] * gb
        }
        const Fb = eb + Vb.yawOffset;
        var Bb;
        return this.started ? lb.yaw += ((Bb = Fb - lb.yaw) - 2 * Math.PI * Math.round(Bb / (2 * Math.PI))) * Math.min(8 * gb, 1) : lb.yaw = Fb, this.started = !0, lb.seated = "perched" === Ob && this.perchLocked, lb.clip = null === (wb = Vb.clips) || void 0 === wb ? void 0 : wb[this.CM(Ob)], lb
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      CM(bb) {
        return "perched" === bb ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function Hb(bb, wb) {
      return bb.bobAmplitude * Math.sin(2 * Math.PI * bb.bobHz * wb)
    }

    function pb(bb, wb, Mb, eb, Hb) {
      const [pb, Vb, gb] = Mb;
      bb[0] = wb[0] + pb * Hb + gb * eb, bb[1] = wb[1] + Vb, bb[2] = wb[2] - pb * eb + gb * Hb
    }
  },
  5743: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ab,
      f: () => fb
    });
    var eb = Mb(5752),
      Hb = Mb(366);
    const pb = 120,
      Vb = 260,
      gb = 1.15,
      lb = 1.2,
      Lb = 2,
      Ib = 1.08,
      Ob = .8,
      Ub = .95,
      tb = 8,
      Cb = "[\"')\\]\u300d\u300f\uff09]*",
      Eb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Cb}$`),
      Fb = new RegExp(`[?\uff1f]${Cb}$`),
      Bb = new RegExp(`[!\uff01]${Cb}$`),
      sb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      hb = new RegExp(`[${mb}]`),
      zb = new RegExp(`[${mb}]|[^${mb}]+`, "g"),
      Xb = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function xb(bb) {
      let wb = 2166136261;
      for (let Mb = 0; Mb < bb.length; Mb++) wb ^= bb.charCodeAt(Mb), wb = Math.imul(wb, 16777619);
      return (wb >>> 0) / 4294967295 * 2 - 1
    }

    function jb(bb) {
      var wb;
      if (hb.test(bb)) return 1;
      const Mb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        eb = Mb.replace(/[^0-9]/g, "");
      if (eb.length > 0 && !/\p{L}/u.test(Mb)) return Math.min(eb.length, 4);
      const Hb = null !== (wb = Mb.match(Xb)) && void 0 !== wb ? wb : [];
      if (0 === Hb.length) {
        var pb, Vb;
        const bb = null !== (pb = null === (Vb = Mb.match(/\p{L}/gu)) || void 0 === Vb ? void 0 : Vb.length) && void 0 !== pb ? pb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), tb)
      }
      const gb = Mb.replace(/[^\p{L}]/gu, ""),
        lb = Hb.length > 1 && "e" === Hb.at(-1) && gb.endsWith("e") && !gb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Hb.length - (lb ? 1 : 0), tb)
    }

    function Kb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function rb(bb) {
      const wb = bb.replace(/[^\p{L}]/gu, "");
      return wb.length >= 2 && wb === wb.toUpperCase() && wb !== wb.toLowerCase()
    }

    function Rb(bb, wb) {
      var Mb;
      const tb = wb && (0, eb.k)(wb),
        Cb = null !== (Mb = null === tb || void 0 === tb ? void 0 : tb.syllableMs) && void 0 !== Mb ? Mb : eb.c,
        mb = function(bb) {
          const wb = [];
          for (const eb of (0, Hb.gc)(bb))
            if ("string" === typeof eb)
              for (const bb of eb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  wb.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!hb.test(bb)) {
                  wb.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let eb = !0;
                for (const Hb of null !== (Mb = bb.match(zb)) && void 0 !== Mb ? Mb : []) {
                  var Mb;
                  const bb = wb.at(-1);
                  eb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || hb.test(Hb) || /[\p{L}\p{N}]/u.test(Hb) ? (eb || wb.push({
                    kind: "space",
                    text: "\u200b"
                  }), wb.push({
                    kind: "word",
                    text: Hb,
                    delayMs: 0
                  }), eb = !1) : bb.text += Hb
                }
              } else wb.push({
                kind: "icon",
                text: eb.icon,
                delayMs: 0
              });
          return wb
        }(bb),
        Xb = [];
      let Rb = [];
      for (const eb of mb) "space" !== eb.kind && (Rb.push(eb), Eb.test(eb.text) && (Xb.push(Rb), Rb = []));
      Xb.push(Rb);
      const Db = [];
      let cb = 0;
      for (const eb of Xb) {
        var Yb, Zb;
        const bb = null !== (Yb = null === (Zb = eb.at(-1)) || void 0 === Zb ? void 0 : Zb.text) && void 0 !== Yb ? Yb : "",
          wb = Fb.test(bb),
          Mb = Bb.test(bb),
          Hb = eb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
          mb = Hb.findLastIndex((bb => bb > 0));
        for (const [Fb, Bb] of eb.entries()) {
          const bb = "word" === Bb.kind,
            eb = Hb[Fb];
          Bb.delayMs = cb;
          for (let Hb = 0; tb && Hb < eb; Hb++) {
            const {
              intonation: pb
            } = tb;
            let Vb = mb > 0 ? -pb.declineSemitones * (Fb / mb) : 0;
            Vb += xb(`${Kb(Bb.text)}|${Hb}`) * pb.variationSemitones;
            const Eb = Math.min(1, pb.variationSemitones);
            let sb = tb.glideSemitones,
              hb = 1;
            Mb && (Vb += pb.exclaimLiftSemitones, hb *= gb), wb && Fb === mb && (Vb += pb.questionRiseSemitones * (eb > 1 ? .5 + .5 * Hb / (eb - 1) : 1), Hb === eb - 1 && (sb = Math.abs(sb) + pb.questionRiseSemitones / 2)), bb && rb(Bb.text) && (Vb += Lb * Eb, hb *= lb), eb > 1 && 0 === Hb && (Vb += Ob * Eb, hb *= Ib), Db.push({
              atMs: cb + Hb * Cb,
              semitones: Vb,
              glideSemitones: sb,
              durationMs: Hb < eb - 1 ? Math.min(tb.durationMs, Cb * Ub) : tb.durationMs,
              level: hb
            })
          }
          cb += eb * Cb + (Eb.test(Bb.text) ? Vb : sb.test(Bb.text) ? pb : 0)
        }
      }
      return {
        pieces: mb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: Db
      }
    }
    var Db = Mb(1259),
      cb = Mb(1321),
      Yb = Mb(2146);

    function Zb(bb) {
      if ("string" === typeof bb) return bb;
      const wb = cb.g.get().getCurrentLanguageCode();
      return (0, Db.r)(wb, bb.translationKey, (0, Db.n)(bb.params, Yb.d.shown))
    }

    function fb(bb) {
      const wb = void 0 === bb.voice ? null : (0, eb.n)(bb.voice),
        Mb = wb && (0, eb.k)(wb);
      return {
        plan: Rb(Zb(bb.line), Mb),
        synth: Mb
      }
    }

    function Ab(bb) {
      const wb = [];
      let Mb = [];
      for (const [Hb, pb] of bb.entries()) {
        var eb;
        "space" === pb.kind && (" " !== pb.text || "icon" !== (null === (eb = bb[Hb + 1]) || void 0 === eb ? void 0 : eb.kind)) ? (Mb.length > 0 && wb.push(Mb), wb.push([pb]), Mb = []) : Mb.push(pb)
      }
      return Mb.length > 0 && wb.push(Mb), wb
    }
  },
  5757: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      d: () => Ob
    });
    var eb = Mb(5766),
      Hb = Mb(26);
    const pb = .25,
      Vb = .85,
      gb = .02,
      lb = .01;

    function Lb(bb, wb, Mb, eb, Hb, pb, gb) {
      const {
        waveform: lb,
        pitchHz: Lb,
        attackMs: Ib,
        releaseMs: Ob,
        lowpassHz: Ub
      } = Mb, tb = Hb + eb.durationMs / 1e3, Cb = Lb * 2 ** (eb.semitones / 12), Eb = bb.createOscillator();
      Eb.type = lb, Eb.frequency.setValueAtTime(Cb, Hb), Eb.frequency.exponentialRampToValueAtTime(Cb * 2 ** (eb.glideSemitones / 12), tb);
      const Fb = Hb + Math.min(Ib, eb.durationMs) / 1e3,
        Bb = bb.createGain();
      Bb.gain.setValueAtTime(0, Hb), Bb.gain.linearRampToValueAtTime(pb, Fb), Bb.gain.linearRampToValueAtTime(pb * Vb, Math.max(Fb, tb - Ob / 1e3)), Bb.gain.linearRampToValueAtTime(0, tb);
      const sb = [Eb];
      if (null !== Ub) {
        const wb = bb.createBiquadFilter();
        wb.type = "lowpass", wb.frequency.value = Ub, sb.push(wb)
      }
      sb.push(Bb, wb);
      for (let Vb = 1; Vb < sb.length; Vb++) sb[Vb - 1].connect(sb[Vb]);
      return Eb.onended = () => {
        for (const bb of sb.slice(0, -1)) bb.disconnect();
        gb()
      }, Eb.start(Hb), Eb.stop(tb), Eb
    }

    function Ib(bb, wb, Mb, eb, Hb, Vb) {
      if (0 === eb.length) return Vb(), () => {};
      const Ib = pb * Mb.volume * Hb,
        Ob = bb.createGain();
      Ob.connect(wb);
      const Ub = bb.currentTime + gb,
        tb = new Set;
      for (const pb of eb) {
        const wb = Lb(bb, Ob, Mb, pb, Ub + pb.atMs / 1e3, Ib * pb.level, (() => {
          tb.delete(wb), 0 === tb.size && (Ob.disconnect(), Vb())
        }));
        tb.add(wb)
      }
      return () => {
        const wb = bb.currentTime;
        Ob.gain.setTargetAtTime(0, wb, lb);
        for (const bb of tb) try {
          bb.stop(wb + 5 * lb)
        } catch {}
      }
    }

    function Ob(bb, wb) {
      var Mb;
      const pb = eb.Howler.ctx,
        Vb = eb.Howler.masterGain;
      if (!pb || !Vb || !Hb.c.get("soundOnFromAd")) return () => {};
      const gb = eb.Howler;
      return null === (Mb = gb._autoResume) || void 0 === Mb || Mb.call(gb), Ib(pb, Vb, bb, wb, Hb.c.get("soundVolume"), (() => {
        var bb;
        null === (bb = gb._autoSuspend) || void 0 === bb || bb.call(gb)
      }))
    }
  },
  40488: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      closeClientGame: () => Ow,
      createDefaultClientPlugins: () => Iw
    });
    var eb = Mb(382);

    function Hb() {
      let bb;
      return {
        onCreate(wb) {
          bb = wb
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(wb, Mb, Hb, pb, Vb, gb) {
          var lb, Lb;
          if ("Iron Chest" !== bb.getMetaInfo(Vb).rootName) return;
          if (!bb.hasEffect(wb, "Thief")) return;
          const Ib = bb.getBlockData(Mb, Hb, pb);
          return bb.getPlayerDbId(wb) !== (null === Ib || void 0 === Ib || null === (lb = Ib.persisted) || void 0 === lb || null === (Lb = lb.shared) || void 0 === Lb ? void 0 : Lb.ownerDbId) ? (bb.sendMessage(wb, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: eb.O.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var pb = Mb(3059),
      Vb = Mb(1313);
    const gb = 8.4,
      lb = 1e-4,
      Lb = .15,
      Ib = .04,
      Ob = [.12, .04, .12],
      Ub = 26,
      tb = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        qO: 1,
        minLifeTime: lb,
        maxLifeTime: lb,
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
        blendMode: pb.d.Standard
      },
      Cb = {
        texture: "bubble",
        mipmaps: !1,
        qO: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: Ub,
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
        blendMode: pb.d.Standard
      },
      Eb = [0, 0, 0],
      Fb = [0, 0, 0];

    function Bb(bb) {
      const wb = new Map;
      let Mb = null;

      function eb(bb) {
        var wb, Mb;
        null === (wb = bb.bubbles) || void 0 === wb || wb.stop(), null === (Mb = bb.fish) || void 0 === Mb || Mb.stop()
      }

      function Hb(Mb) {
        if (!Mb.readDrawnPosition(bb, Fb)) {
          for (const bb of wb.values()) {
            var eb;
            null === (eb = bb.bubbles) || void 0 === eb || eb.setEmitRate(0)
          }
          return
        }
        const Hb = performance.now();
        for (const [bb, Vb] of wb) {
          var pb;
          if (null === (pb = Vb.bubbles) || void 0 === pb || pb.setEmitRate(0), !Mb.readDrawnPosition(bb, Eb)) continue;
          if (!((Eb[0] - Fb[0]) ** 2 + (Eb[1] - Fb[1]) ** 2 + (Eb[2] - Fb[2]) ** 2 < 900)) continue;
          const wb = Math.max(0, Vb.biteAt - Hb),
            eb = Vb.approachDurationMs > 0 ? Math.min(1, 1 - wb / Vb.approachDurationMs) : 1,
            lb = (Vb.approachDurationMs - wb) / 1e3,
            Bb = Vb.phase + .25 * Math.sin(1.7 * lb + Vb.phase),
            sb = Math.min(Vb.approachDurationMs / 3e3 * 2.8, gb) * (1 - eb) * (1 + .15 * Math.sin(2.1 * lb + Vb.phase)),
            mb = Math.min(1, 4 * (1 - eb)),
            hb = (.45 * Math.sin(4.1 * lb + Vb.phase) + .18 * Math.sin(9.7 * lb + 2 * Vb.phase)) * mb,
            zb = Eb[0] + Math.cos(Bb) * sb - Math.sin(Bb) * hb,
            Xb = Math.ceil(Vb.surfaceY),
            xb = Eb[2] + Math.sin(Bb) * sb + Math.cos(Bb) * hb,
            {
              fishAt: jb,
              bubblesAt: Kb
            } = Vb;
          jb[0] = Kb[0] = zb, jb[1] = Xb + Lb, Kb[1] = Xb + Ib, jb[2] = Kb[2] = xb, Vb.fish ??= Mb.createParticles(tb, {
            pos: jb
          }), Vb.fish.moveTo(jb), Vb.fish.emit(1), Vb.bubbles ??= Mb.createParticles(Cb, {
            pos: Kb,
            half: Ob
          }), Vb.bubbles.moveTo(Kb), Vb.bubbles.setEmitRate(Ub + 32 * (.5 + .5 * Math.sin(9 * lb + Vb.phase)) ** 4 + 13 * eb)
        }
      }
      return {
        onCreate(bb) {
          Mb = bb
        },
        onAfterRender() {
          Mb && Hb(Mb)
        },
        onClose() {
          for (const bb of wb.values()) eb(bb);
          wb.clear(), Mb = null
        },
        onReceivedMessageFromServer(bb, Mb) {
          if (bb !== Vb.y) return;
          const {
            hookId: Hb,
            waiting: pb
          } = Mb;
          if (pb) wb.has(Hb) || wb.set(Hb, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + pb.remainingMs,
            approachDurationMs: pb.durationMs,
            surfaceY: pb.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const bb = wb.get(Hb);
            bb && eb(bb), wb.delete(Hb)
          }
        }
      }
    }
    var sb = Mb(5757),
      mb = Mb(5743);

    function hb(bb) {
      let wb, Mb = null,
        eb = null;
      const Hb = () => {
        var bb;
        null === (bb = eb) || void 0 === bb || bb(), eb = null
      };
      return {
        onCreate(eb) {
          wb = eb, Mb = wb.getClientOption(bb, "dialogue")
        },
        onAfterRender() {
          if (!wb) return;
          const pb = wb.getClientOption(bb, "dialogue");
          if (pb === Mb) return;
          if (Mb = pb, Hb(), !pb || !1 === pb.animateIn) return;
          const {
            plan: Vb,
            synth: gb
          } = (0, mb.f)(pb);
          gb && (eb = (0, sb.d)(gb, Vb.blips))
        },
        onClose: Hb
      }
    }
    var zb = Mb(40495);
    const Xb = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      xb = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      jb = [0, 1, 2, 0, 2, 3];

    function Kb(bb, wb, Mb) {
      var eb;
      let [Hb, pb, Vb] = wb;
      if (bb.hasPackModel("Furnace")) return null;
      const gb = ((null !== (eb = bb.getMetaInfo(Mb).rot) && void 0 !== eb ? eb : 1) - 1) * Math.PI / 2,
        lb = Math.PI + gb,
        Lb = Math.cos(lb),
        Ib = Math.sin(lb),
        Ob = [];
      for (const [Cb, Eb] of Xb) Ob.push(Cb * Lb, Eb, -Cb * Ib);
      const Ub = {
          positions: Ob,
          indices: jb,
          uvs: xb
        },
        tb = [Hb + .5 + .51 * Math.sin(gb), pb + .375, Vb + .5 + .51 * Math.cos(gb)];
      return bb.createGameMesh(Ub, {
        kind: "furnaceFire"
      }, tb)
    }

    function rb(bb) {
      return Math.floor(bb / 200) % 3
    }

    function Rb(bb, wb, Mb) {
      bb.setGameMesh(wb, {
        uvOffset: [0, Mb / 3]
      })
    }
    const Db = [.12, .025, .12],
      cb = [{
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
          blendMode: pb.d.Standard,
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
          blendMode: pb.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Yb {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(bb, wb) {
        const Mb = bb.getBlockId(wb[0], wb[1], wb[2]);
        if ("Furnace" !== bb.getMetaInfo(Mb).rootName) return;
        const eb = performance.now();
        let Hb = this.smokes.find((bb => bb.pos[0] === wb[0] && bb.pos[1] === wb[1] && bb.pos[2] === wb[2] && bb.Lg === Mb));
        if (Hb || (Hb = {
            pos: [wb[0], wb[1], wb[2]],
            Lg: Mb,
            endMs: eb,
            lastBurstMs: -1 / 0,
            pending: new Array(cb.length).fill(0),
            fire: Kb(bb, wb, Mb)
          }, this.smokes.push(Hb), null !== Hb.fire && (Rb(bb, Hb.fire, rb(eb)), this.shownFireFrame = -1)), Hb.endMs = eb + 6e3, this.smokes.length > 4) {
          const wb = this.smokes.reduce(((bb, wb) => wb.endMs < bb.endMs ? wb : bb));
          Zb(bb, wb), this.smokes.splice(this.smokes.indexOf(wb), 1)
        }
        eb - Hb.lastBurstMs >= 300 && (Hb.lastBurstMs = eb, cb.forEach(((bb, wb) => {
          Hb.pending[wb] += bb.style.count
        })))
      }
      onAfterRender(bb, wb) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Mb = performance.now();
        this.smokes = this.smokes.filter((wb => {
          const [eb, Hb, pb] = wb.pos, Vb = Mb < wb.endMs && bb.getBlockId(eb, Hb, pb) === wb.Lg;
          return Vb || Zb(bb, wb), Vb
        }));
        const eb = rb(Mb);
        if (eb !== this.shownFireFrame) {
          this.shownFireFrame = eb;
          for (const wb of this.smokes) null !== wb.fire && Rb(bb, wb.fire, eb)
        }
        if (!bb.particlesEnabled()) {
          for (const bb of this.smokes) bb.pending.fill(0);
          return
        }
        const Hb = Math.min(wb, 250) / 1e3;
        for (const pb of this.smokes) {
          const [wb, eb, Vb] = pb.pos;
          if (0 !== bb.getBlockId(wb, eb + 1, Vb)) {
            pb.pending.fill(0);
            continue
          }
          const gb = (pb.endMs - Mb) / 6e3,
            lb = this.centre;
          lb[0] = wb + .5, lb[1] = eb + 1.275, lb[2] = Vb + .5, cb.forEach(((wb, Mb) => {
            pb.pending[Mb] += wb.perSecond * gb * Hb;
            const eb = Math.floor(pb.pending[Mb]);
            eb > 0 && this.emit(bb, Mb, lb, eb) && (pb.pending[Mb] -= eb)
          }))
        }
      }
      dispose(bb) {
        for (const Mb of this.smokes) Zb(bb, Mb);
        this.smokes = [];
        for (const Mb of null !== (wb = this.puffers) && void 0 !== wb ? wb : []) {
          var wb;
          Mb.dispose()
        }
        this.puffers = null
      }
      emit(bb, wb, Mb, eb) {
        return this.puffers ??= cb.map((bb => {
          let {
            style: wb,
            perSecond: Mb
          } = bb;
          const eb = (wb.count / .3 + Mb) * wb.life[1];
          return new zb.h(wb, Math.ceil(4 * eb), Db)
        })), this.puffers[wb].emit(bb, Mb, this.renderFrame, eb)
      }
    }

    function Zb(bb, wb) {
      null !== wb.fire && (bb.disposeGameMesh(wb.fire), wb.fire = null)
    }

    function fb() {
      let bb;
      const wb = new Yb;
      return {
        onCreate(wb) {
          bb = wb
        },
        onReceivedMessageFromServer(Mb, eb) {
          Mb === Vb.A && wb.start(bb, eb)
        },
        onAfterRender(Mb) {
          wb.onAfterRender(bb, Mb)
        },
        onClose() {
          wb.dispose(bb)
        }
      }
    }
    var Ab = Mb(225),
      Wb = Mb(40463),
      Jb = Mb(40504),
      Sb = Mb(40510);
    class Nb {
      constructor(bb, wb, Mb) {
        this.api = bb, this.wearer = wb, this.name = Mb, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new Sb.c, this.shown = !1, this.raised = 0
      }
      update(bb) {
        var wb;
        const Mb = (0, Wb.j)(this.name);
        if (!Mb) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === Mb.model && this.madeFrom.scale === Mb.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(Mb.model, Mb.scale), this.madeFrom = Mb, !this.model)) return void this.raiseNametag(0);
        if (!(bb.drawn && !bb.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const eb = this.motion.step({
          dt: bb.dt,
          feet: bb.feet,
          heading: bb.heading,
          headTopY: bb.headTopY,
          tuning: Mb,
          timeS: bb.timeS
        });
        this.model.setPose(eb.pos, eb.yaw + Math.PI), this.model.setClip(null !== (wb = eb.clip) && void 0 !== wb ? wb : null);
        const Hb = eb.seated ? Mb : null;
        Hb !== this.perchedWith && (this.perchedWith = Hb, this.model.setPerch(Hb && {
          IM: this.wearer,
          offset: Hb.perchOffset,
          yaw: Hb.yawOffset
        })), this.setShown(!0), this.raiseNametag(Mb.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(bb) {
        bb !== this.raised && (this.raised = bb, this.api.setNametagOffset(this.wearer, bb))
      }
      freeModel() {
        var bb;
        null === (bb = this.model) || void 0 === bb || bb.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(bb) {
        this.model && bb !== this.shown && (this.shown = bb, this.model.setVisible(bb))
      }
    }
    class vb {
      constructor(bb, wb) {
        this.api = bb, this.name = wb, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(bb) {
        const wb = (0, Wb.i)(this.name);
        if (wb !== this.madeFrom && this.stop(), !wb) return;
        const Mb = bb.ownFirstPerson ? wb.ownInFirstPerson : bb.drawn;
        if (Mb) {
          const {
            centre: Mb
          } = this;
          if ((0, Sb.e)(Mb, bb.feet, wb.offset, Math.sin(bb.heading), Math.cos(bb.heading)), this.particles) this.particles.moveTo(Mb, this.half);
          else {
            const bb = (0, Jb.d)(wb);
            this.half = bb.half, this.particles = this.api.createParticles(bb.opts, {
              pos: Mb,
              half: bb.half
            }), this.madeFrom = wb, this.emitting = !0
          }
        }
        this.particles && Mb !== this.emitting && (this.emitting = Mb, this.particles.setEmitRate(Mb ? wb.particles.emitRate : 0))
      }
      stop() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const Qb = .25,
      Gb = 48,
      qb = 4,
      ab = 24,
      ib = 12,
      ub = .6,
      db = 1 / Ab.e.playerEyeToHeightRatio;

    function Pb(bb, wb, Mb) {
      const eb = bb.filter((bb => bb[wb] <= Gb));
      return eb.sort(((bb, Mb) => bb[wb] - Mb[wb])), new Set(eb.slice(0, Mb).map((bb => bb.id)))
    }

    function nb() {
      let bb;
      const wb = new Map;
      let Mb = 0,
        eb = 0;
      const Hb = [0, 0, 0],
        pb = {
          feet: Hb,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function Vb(bb) {
        var wb, Mb;
        null === (wb = bb.pet) || void 0 === wb || wb.dispose(), null === (Mb = bb.aura) || void 0 === Mb || Mb.stop()
      }

      function gb(wb, Mb) {
        var eb, Vb;
        const {
          id: gb
        } = wb, lb = bb.readDrawnPosition(gb, Hb) ? bb.getDrawnHeading(gb) : null, Lb = null === lb ? null : bb.getDrawnEyeHeight(gb);
        if (null === lb || null === Lb) pb.drawn = !1, pb.ownFirstPerson = !1;
        else {
          const wb = Mb.cameraPosition;
          pb.heading = lb, pb.headTopY = Hb[1] + Lb * db, pb.drawn = bb.isAlive(gb) && bb.isEntityDrawn(gb), pb.ownFirstPerson = bb.isLocalPlayer(gb) && bb.isAlive(gb) && Math.hypot(wb[0] - Hb[0], wb[1] - Hb[1] - Lb, wb[2] - Hb[2]) < ub
        }
        null === (eb = wb.pet) || void 0 === eb || eb.update(pb), null === (Vb = wb.aura) || void 0 === Vb || Vb.update(pb)
      }
      return {
        onCreate(wb) {
          bb = wb
        },
        onAfterRender(lb, Lb) {
          const Ib = lb / 1e3;
          eb += Ib, Mb -= Ib, Mb <= 0 && (Mb = Qb, function(Mb) {
            const eb = [];
            for (const Vb of bb.getPlayerIds()) {
              const pb = bb.getPlayerCosmetics(Vb),
                gb = void 0 !== (null === pb || void 0 === pb ? void 0 : pb.pet) && (0, Wb.j)(pb.pet) ? pb.pet : null,
                lb = void 0 !== (null === pb || void 0 === pb ? void 0 : pb.aura) && (0, Wb.i)(pb.aura) ? pb.aura : null;
              if (null === gb && null === lb || !bb.readDrawnPosition(Vb, Hb)) continue;
              const Lb = Math.hypot(Hb[0] - Mb[0], Hb[1] - Mb[1], Hb[2] - Mb[2]),
                Ib = wb.get(Vb);
              eb.push({
                id: Vb,
                pet: gb,
                aura: lb,
                petDist: null === gb ? 1 / 0 : Lb - (null !== Ib && void 0 !== Ib && Ib.pet ? qb : 0),
                auraDist: null === lb ? 1 / 0 : Lb - (null !== Ib && void 0 !== Ib && Ib.aura ? qb : 0)
              })
            }
            const pb = Pb(eb, "petDist", ab),
              gb = bb.particlesEnabled() ? Pb(eb, "auraDist", ib) : new Set,
              lb = new Set;
            for (const {
                id: Hb,
                pet: Vb,
                aura: Eb
              }
              of eb) {
              var Lb, Ib, Ob;
              const Mb = null !== (Lb = wb.get(Hb)) && void 0 !== Lb ? Lb : {
                  id: Hb,
                  pet: null,
                  aura: null
                },
                eb = pb.has(Hb) ? Vb : null,
                Fb = gb.has(Hb) ? Eb : null;
              var Ub, tb, Cb;
              (null === (Ib = Mb.pet) || void 0 === Ib ? void 0 : Ib.name) !== eb ? (null === (Ub = Mb.pet) || void 0 === Ub || Ub.dispose(), Mb.pet = null === eb ? null : new Nb(bb, Hb, eb)) : null === (tb = Mb.pet) || void 0 === tb || tb.refreshNametag(), (null === (Ob = Mb.aura) || void 0 === Ob ? void 0 : Ob.name) !== Fb && (null === (Cb = Mb.aura) || void 0 === Cb || Cb.stop(), Mb.aura = null === Fb ? null : new vb(bb, Fb)), (Mb.pet || Mb.aura) && (wb.set(Hb, Mb), lb.add(Hb))
            }
            for (const [bb, Hb] of wb) lb.has(bb) || (Vb(Hb), wb.delete(bb))
          }(Lb.cameraPosition)), pb.dt = Ib, pb.timeS = eb;
          for (const bb of wb.values()) gb(bb, Lb)
        },
        onClose() {
          for (const bb of wb.values()) Vb(bb);
          wb.clear()
        }
      }
    }
    var yb = Mb(10075);
    const ob = "skyblockLoot",
      Tb = "autoPickupClick";
    var kb = Mb(1861);

    function bw(bb, wb) {
      return [{
        timeFraction: 0,
        minColor: [255 * bb[0], 255 * bb[1], 255 * bb[2], 1],
        maxColor: [255 * wb[0], 255 * wb[1], 255 * wb[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const ww = [0, 0, 0],
      Mw = {
        texture: "glint",
        mipmaps: !1,
        qO: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: ww,
        dir2: ww,
        blendMode: pb.d.OneOne
      },
      ew = {
        ...Mw,
        colorGradients: bw([1, .88, .38], [1, .65, .15])
      },
      Hw = {
        ...Mw,
        colorGradients: bw([.55, .95, 1], [.9, 1, 1])
      },
      pw = [.5, .5, .5],
      Vw = {
        texture: "glint",
        mipmaps: !1,
        qO: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: bw([1, .12, .12], [1, .35, .2]),
        blendMode: pb.d.OneOne
      };
    class gw {
      constructor() {
        this.drops = new Map
      }
      EO(bb, wb) {
        if ("overflowFlash" === wb.kind) {
          const [Mb, eb, Hb] = wb.position, pb = bb.createParticles(Vw, {
            pos: [Mb, eb, Hb],
            half: pw
          });
          return pb.emit(18), void pb.stop()
        }
        this.drops.has(wb.itemId) || this.drops.set(wb.itemId, {
          owner: wb.owner,
          cosmetic: wb.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      sO(bb) {
        if (0 === this.drops.size) return;
        const wb = performance.now(),
          Mb = bb.getCameraPosition();
        let eb = 0;
        for (const pb of this.drops.values()) null !== pb.particles && eb++;
        for (const [pb, Vb] of this.drops) {
          const gb = bb.getPositionView(pb);
          if (null === gb) {
            var Hb;
            if (Vb.seen || wb - Vb.markedAt > 5e3) null !== Vb.particles && eb--, null === (Hb = Vb.particles) || void 0 === Hb || Hb.stop(), this.drops.delete(pb);
            continue
          }
          Vb.cosmetic || !bb.isLocalPlayer(Vb.owner) || Vb.pickupDelayCleared || (bb.clearPickupDelay(pb), Vb.pickupDelayCleared = !0);
          const lb = Vb.lastPosition,
            Lb = Vb.seen && (gb[0] - lb[0]) ** 2 + (gb[1] - lb[1]) ** 2 + (gb[2] - lb[2]) ** 2 > 4e-4,
            Ib = (gb[0] - Mb[0]) ** 2 + (gb[1] - Mb[1]) ** 2 + (gb[2] - Mb[2]) ** 2 < 2025;
          Vb.seen = !0, lb[0] = gb[0], lb[1] = gb[1], lb[2] = gb[2], Lb && (Vb.lastMovingAt = wb), null !== Vb.particles && (!Ib || wb - Vb.lastMovingAt > 500) && (Vb.particles.stop(), Vb.particles = null, eb--), Lb && Ib && null === Vb.particles && eb < 32 && (Vb.particles = bb.createParticles(Vb.cosmetic ? Hw : ew, {
            pos: gb
          }), eb++), null !== Vb.particles && (Vb.particles.moveTo(gb), Vb.particles.setEmitRate(Lb ? 12 : 0)), !Lb && null === Vb.particles && wb - Math.max(Vb.lastMovingAt, Vb.markedAt) > 2e3 && this.drops.delete(pb)
        }
      }
      dispose() {
        for (const wb of this.drops.values()) {
          var bb;
          null === (bb = wb.particles) || void 0 === bb || bb.stop()
        }
        this.drops.clear()
      }
    }
    const lw = new Set;

    function Lw() {
      let bb;
      const wb = new gw;
      return {
        onCreate(wb) {
          bb = wb
        },
        onReceivedMessageFromServer(Mb, eb) {
          if (Mb === ob) wb.EO(bb, eb);
          else if (Mb === Tb) {
            const bb = eb,
              wb = `${bb.id}|${bb.value}`;
            lw.has(wb) || (lw.add(wb), (0, kb.g)({
              id: bb.id,
              value: bb.value
            }))
          }
        },
        sO() {
          wb.sO(bb)
        },
        onClose() {
          wb.dispose()
        }
      }
    }

    function Iw(bb, wb, Mb, eb) {
      return {
        cosmeticCompanions: nb(),
        dialogue: hb(eb.localPlayerId),
        fishing: Bb(eb.localPlayerId),
        furnaceSmoke: fb(),
        ironChest: Hb(),
        localBlockBroken: (0, yb.b)(),
        magnetLoot: Lw()
      }
    }

    function Ow(bb, wb) {
      for (const Hb of [bb, ...null !== wb && void 0 !== wb ? wb : []]) try {
        var Mb;
        null === Hb || void 0 === Hb || null === (Mb = Hb.onClose) || void 0 === Mb || Mb.call(Hb)
      } catch (eb) {
        console.error("Error in client onClose callback", eb)
      }
    }
  },
  10075: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => Hb
    });
    var eb = Mb(29);
    const Hb = "localBlockBroken";

    function pb() {
      return {
        onPlayerChangeBlock(bb, wb, Mb, pb, Vb, gb) {
          "Air" === gb && eb.k.iI(Hb)
        }
      }
    }
  },
  40495: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb,
      h: () => pb
    });
    const eb = 1 / .6,
      Hb = {
        kind: "smokePuff"
      };
    class pb {
      constructor(bb, wb, Mb) {
        this.style = bb, this.qO = wb, this.half = Mb, this.particles = null, this.lastFrame = -1
      }
      emit(bb, wb, Mb) {
        let pb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Mb !== this.lastFrame && (this.lastFrame = Mb, this.particles || (this.particles = bb.createParticles(function(bb, wb) {
          const [
            [Mb, pb, Vb],
            [gb, lb, Lb]
          ] = bb.colours;
          return {
            texture: bb.soft ? Hb : "square_particle",
            qO: wb,
            minLifeTime: bb.life[0] / eb,
            maxLifeTime: bb.life[1] / eb,
            minEmitPower: bb.power[0] * eb,
            maxEmitPower: bb.power[1] * eb,
            minSize: bb.size[0],
            maxSize: bb.size[1],
            emitRate: 0,
            gravity: [0, bb.lift * eb * eb, 0],
            dir1: [-bb.spread, 1, -bb.spread],
            dir2: [bb.spread, 1, bb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Mb, pb, Vb, bb.alpha],
              maxColor: [gb, lb, Lb, bb.alpha]
            }, {
              timeFraction: 1,
              minColor: [Mb, pb, Vb, 0],
              maxColor: [gb, lb, Lb, 0]
            }],
            blendMode: bb.blendMode
          }
        }(this.style, this.qO), {
          pos: wb,
          half: this.half
        })), this.particles.moveTo(wb, this.half), this.particles.emit(pb), !0)
      }
      dispose() {
        var bb;
        null === (bb = this.particles) || void 0 === bb || bb.stop(), this.particles = null
      }
    }
  },
  5752: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb,
      g: () => eb,
      h: () => pb,
      k: () => lb,
      n: () => Vb
    });
    const eb = ["sine", "triangle", "square", "sawtooth"],
      Hb = 55,
      pb = {
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

    function Vb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(pb, bb) ? pb[bb] : null
    }

    function gb(bb, wb, Mb) {
      return Math.min(Mb, Math.max(wb, bb))
    }

    function lb(bb) {
      const wb = gb(bb.durationMs, 10, 500),
        Mb = gb(bb.attackMs, 0, wb),
        {
          intonation: Hb
        } = bb;
      return {
        waveform: eb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: gb(bb.pitchHz, 20, 4e3),
        glideSemitones: gb(bb.glideSemitones, -24, 24),
        durationMs: wb,
        attackMs: Mb,
        releaseMs: gb(bb.releaseMs, 0, wb - Mb),
        lowpassHz: null === bb.lowpassHz ? null : gb(bb.lowpassHz, 20, 2e4),
        volume: gb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: gb(Hb.variationSemitones, 0, 6),
          declineSemitones: gb(Hb.declineSemitones, 0, 12),
          questionRiseSemitones: gb(Hb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: gb(Hb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: gb(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);