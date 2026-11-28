export const id = 33;
export const ids = [33];
export const modules = {
  40756: (dd, Od, md) => {
    function Wd(dd) {
      return void 0 === dd ? void 0 : [dd[0], dd[1], dd[2]]
    }

    function Fd(dd) {
      const Od = dd.particles;
      return {
        opts: {
          texture: Od.texture,
          Mt: Od.Mt,
          minLifeTime: Od.minLifeTime,
          maxLifeTime: Od.maxLifeTime,
          minSize: Od.minSize,
          maxSize: Od.maxSize,
          minEmitPower: Od.minEmitPower,
          maxEmitPower: Od.maxEmitPower,
          emitRate: Od.emitRate,
          gravity: Wd(Od.gravity),
          dir1: Wd(Od.dir1),
          dir2: Wd(Od.dir2),
          colorGradients: Od.colorGradients,
          blendMode: Od.blendMode
        },
        half: [Od.width / 2, Od.height / 2, Od.depth / 2]
      }
    }
    md.d(Od, {
      d: () => Fd
    })
  },
  40721: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      i: () => vd,
      j: () => hd,
      k: () => Xd
    });
    var Wd = md(231);
    const Fd = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      Rd = "PetRoot";
    let Xd = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Kd = Fd;
    new Map, new Map;

    function hd(dd) {
      var Od;
      return null !== (Od = (0, Wd.b)(Xd, dd)) && void 0 !== Od ? Od : null
    }

    function vd(dd) {
      var Od;
      return null !== (Od = (0, Wd.b)(Kd, dd)) && void 0 !== Od ? Od : null
    }
  },
  40760: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      d: () => Fd,
      e: () => Rd
    });
    class Wd {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Gy = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(dd) {
        var Od;
        const {
          feet: md,
          heading: Wd,
          tuning: Xd
        } = dd, Kd = Math.min(Math.max(dd.dt, 0), .1), {
          pose: hd,
          Gy: vd,
          target: Qd
        } = this;
        if (this.started && Kd > 0) {
          const dd = Math.hypot(md[0] - this.lastFeet[0], md[1] - this.lastFeet[1], md[2] - this.lastFeet[2]);
          this.speed += (dd / Kd - this.speed) * Math.min(Kd / .15, 1)
        }
        this.lastFeet[0] = md[0], this.lastFeet[1] = md[1], this.lastFeet[2] = md[2], this.stillS = this.speed > .3 ? 0 : this.stillS + Kd;
        const td = this.stillS >= .6 ? "perched" : "flying";
        "flying" === td && "perched" === hd.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += Kd, hd.mode = td;
        const od = Math.sin(Wd),
          Nd = Math.cos(Wd);
        "perched" === td ? (Rd(Qd, md, Xd.perchOffset, od, Nd), Qd[1] += dd.headTopY - md[1]) : (Rd(Qd, md, Xd.followOffset, od, Nd), Qd[1] += Fd(Xd, dd.timeS));
        const {
          pos: qd
        } = hd, Hd = Math.hypot(Qd[0] - qd[0], Qd[1] - qd[1], Qd[2] - qd[2]);
        if (!this.started || Hd > 8 || "perched" === td && (this.perchLocked || Hd < .05)) this.perchLocked = this.started && "perched" === td, qd[0] = Qd[0], qd[1] = Qd[1], qd[2] = Qd[2], vd[0] = vd[1] = vd[2] = 0;
        else {
          const dd = Xd.followStiffness;
          for (let Od = 0; Od < 3; Od++) vd[Od] += (dd * dd * (Qd[Od] - qd[Od]) - 2 * dd * vd[Od]) * Kd, qd[Od] += vd[Od] * Kd
        }
        const yd = Wd + Xd.yawOffset;
        var bd;
        return this.started ? hd.yaw += ((bd = yd - hd.yaw) - 2 * Math.PI * Math.round(bd / (2 * Math.PI))) * Math.min(8 * Kd, 1) : hd.yaw = yd, this.started = !0, hd.seated = "perched" === td && this.perchLocked, hd.clip = null === (Od = Xd.clips) || void 0 === Od ? void 0 : Od[this.Tm(td)], hd
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      Tm(dd) {
        return "perched" === dd ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function Fd(dd, Od) {
      return dd.bobAmplitude * Math.sin(2 * Math.PI * dd.bobHz * Od)
    }

    function Rd(dd, Od, md, Wd, Fd) {
      const [Rd, Xd, Kd] = md;
      dd[0] = Od[0] + Rd * Fd + Kd * Wd, dd[1] = Od[1] + Xd, dd[2] = Od[2] - Rd * Wd + Kd * Fd
    }
  },
  5620: (dd, Od, md) => {
    md.d(Od, {
      c: () => rd,
      e: () => Ad
    });
    var Wd = md(5623),
      Fd = md(387);
    const Rd = 120,
      Xd = 260,
      Kd = 1.15,
      hd = 1.2,
      vd = 2,
      Qd = 1.08,
      td = .8,
      od = .95,
      Nd = 8,
      qd = "[\"')\\]\u300d\u300f\uff09]*",
      Hd = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${qd}$`),
      yd = new RegExp(`[?\uff1f]${qd}$`),
      bd = new RegExp(`[!\uff01]${qd}$`),
      Td = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      pd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Yd = new RegExp(`[${pd}]`),
      gd = new RegExp(`[${pd}]|[^${pd}]+`, "g"),
      wd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Ed(dd) {
      let Od = 2166136261;
      for (let md = 0; md < dd.length; md++) Od ^= dd.charCodeAt(md), Od = Math.imul(Od, 16777619);
      return (Od >>> 0) / 4294967295 * 2 - 1
    }

    function Jd(dd) {
      var Od;
      if (Yd.test(dd)) return 1;
      const md = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Wd = md.replace(/[^0-9]/g, "");
      if (Wd.length > 0 && !/\p{L}/u.test(md)) return Math.min(Wd.length, 4);
      const Fd = null !== (Od = md.match(wd)) && void 0 !== Od ? Od : [];
      if (0 === Fd.length) {
        var Rd, Xd;
        const dd = null !== (Rd = null === (Xd = md.match(/\p{L}/gu)) || void 0 === Xd ? void 0 : Xd.length) && void 0 !== Rd ? Rd : 0;
        return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Nd)
      }
      const Kd = md.replace(/[^\p{L}]/gu, ""),
        hd = Fd.length > 1 && "e" === Fd.at(-1) && Kd.endsWith("e") && !Kd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
      return Math.min(Fd.length - (hd ? 1 : 0), Nd)
    }

    function Ud(dd) {
      return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function xd(dd) {
      const Od = dd.replace(/[^\p{L}]/gu, "");
      return Od.length >= 2 && Od === Od.toUpperCase() && Od !== Od.toLowerCase()
    }

    function Bd(dd, Od) {
      var md;
      const Nd = Od && (0, Wd.k)(Od),
        qd = null !== (md = null === Nd || void 0 === Nd ? void 0 : Nd.syllableMs) && void 0 !== md ? md : Wd.d,
        pd = function(dd) {
          const Od = [];
          for (const Wd of (0, Fd.dc)(dd))
            if ("string" === typeof Wd)
              for (const dd of Wd.split(/(\s+)/)) {
                if ("" === dd) continue;
                if (/^\s+$/.test(dd)) {
                  Od.push({
                    kind: "space",
                    text: dd
                  });
                  continue
                }
                if (!Yd.test(dd)) {
                  Od.push({
                    kind: "word",
                    text: dd,
                    delayMs: 0
                  });
                  continue
                }
                let Wd = !0;
                for (const Fd of null !== (md = dd.match(gd)) && void 0 !== md ? md : []) {
                  var md;
                  const dd = Od.at(-1);
                  Wd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || Yd.test(Fd) || /[\p{L}\p{N}]/u.test(Fd) ? (Wd || Od.push({
                    kind: "space",
                    text: "\u200b"
                  }), Od.push({
                    kind: "word",
                    text: Fd,
                    delayMs: 0
                  }), Wd = !1) : dd.text += Fd
                }
              } else Od.push({
                kind: "icon",
                text: Wd.icon,
                delayMs: 0
              });
          return Od
        }(dd),
        wd = [];
      let Bd = [];
      for (const Wd of pd) "space" !== Wd.kind && (Bd.push(Wd), Hd.test(Wd.text) && (wd.push(Bd), Bd = []));
      wd.push(Bd);
      const Sd = [];
      let sd = 0;
      for (const Wd of wd) {
        var ud, Vd;
        const dd = null !== (ud = null === (Vd = Wd.at(-1)) || void 0 === Vd ? void 0 : Vd.text) && void 0 !== ud ? ud : "",
          Od = yd.test(dd),
          md = bd.test(dd),
          Fd = Wd.map((dd => "word" === dd.kind ? Jd(dd.text) : 1)),
          pd = Fd.findLastIndex((dd => dd > 0));
        for (const [yd, bd] of Wd.entries()) {
          const dd = "word" === bd.kind,
            Wd = Fd[yd];
          bd.delayMs = sd;
          for (let Fd = 0; Nd && Fd < Wd; Fd++) {
            const {
              intonation: Rd
            } = Nd;
            let Xd = pd > 0 ? -Rd.declineSemitones * (yd / pd) : 0;
            Xd += Ed(`${Ud(bd.text)}|${Fd}`) * Rd.variationSemitones;
            const Hd = Math.min(1, Rd.variationSemitones);
            let Td = Nd.glideSemitones,
              Yd = 1;
            md && (Xd += Rd.exclaimLiftSemitones, Yd *= Kd), Od && yd === pd && (Xd += Rd.questionRiseSemitones * (Wd > 1 ? .5 + .5 * Fd / (Wd - 1) : 1), Fd === Wd - 1 && (Td = Math.abs(Td) + Rd.questionRiseSemitones / 2)), dd && xd(bd.text) && (Xd += vd * Hd, Yd *= hd), Wd > 1 && 0 === Fd && (Xd += td * Hd, Yd *= Qd), Sd.push({
              atMs: sd + Fd * qd,
              semitones: Xd,
              glideSemitones: Td,
              durationMs: Fd < Wd - 1 ? Math.min(Nd.durationMs, qd * od) : Nd.durationMs,
              level: Yd
            })
          }
          sd += Wd * qd + (Hd.test(bd.text) ? Xd : Td.test(bd.text) ? Rd : 0)
        }
      }
      return {
        pieces: pd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
          kind: "icon",
          icon: dd.text,
          delayMs: dd.delayMs
        } : {
          kind: "word",
          text: dd.text,
          delayMs: dd.delayMs
        })),
        blips: Sd
      }
    }
    var Sd = md(1238),
      sd = md(1306),
      ud = md(2094);

    function Vd(dd) {
      if ("string" === typeof dd) return dd;
      const Od = sd.f.get().getCurrentLanguageCode();
      return (0, Sd.u)(Od, dd.translationKey, (0, Sd.s)(dd.params, ud.c.shown))
    }

    function Ad(dd) {
      const Od = void 0 === dd.voice ? null : (0, Wd.l)(dd.voice),
        md = Od && (0, Wd.k)(Od);
      return {
        plan: Bd(Vd(dd.line), md),
        synth: md
      }
    }

    function rd(dd) {
      const Od = [];
      let md = [];
      for (const [Fd, Rd] of dd.entries()) {
        var Wd;
        "space" === Rd.kind && (" " !== Rd.text || "icon" !== (null === (Wd = dd[Fd + 1]) || void 0 === Wd ? void 0 : Wd.kind)) ? (md.length > 0 && Od.push(md), Od.push([Rd]), md = []) : md.push(Rd)
      }
      return md.length > 0 && Od.push(md), Od
    }
  },
  5632: (dd, Od, md) => {
    md.d(Od, {
      b: () => Qd,
      f: () => td
    });
    var Wd = md(5641),
      Fd = md(29);
    const Rd = .25,
      Xd = .85,
      Kd = .02,
      hd = .01;

    function vd(dd, Od, md, Wd, Fd, Rd, Kd) {
      const {
        waveform: hd,
        pitchHz: vd,
        attackMs: Qd,
        releaseMs: td,
        lowpassHz: od
      } = md, Nd = Fd + Wd.durationMs / 1e3, qd = vd * 2 ** (Wd.semitones / 12), Hd = dd.createOscillator();
      Hd.type = hd, Hd.frequency.setValueAtTime(qd, Fd), Hd.frequency.exponentialRampToValueAtTime(qd * 2 ** (Wd.glideSemitones / 12), Nd);
      const yd = Fd + Math.min(Qd, Wd.durationMs) / 1e3,
        bd = dd.createGain();
      bd.gain.setValueAtTime(0, Fd), bd.gain.linearRampToValueAtTime(Rd, yd), bd.gain.linearRampToValueAtTime(Rd * Xd, Math.max(yd, Nd - td / 1e3)), bd.gain.linearRampToValueAtTime(0, Nd);
      const Td = [Hd];
      if (null !== od) {
        const Od = dd.createBiquadFilter();
        Od.type = "lowpass", Od.frequency.value = od, Td.push(Od)
      }
      Td.push(bd, Od);
      for (let Xd = 1; Xd < Td.length; Xd++) Td[Xd - 1].connect(Td[Xd]);
      return Hd.onended = () => {
        for (const dd of Td.slice(0, -1)) dd.disconnect();
        Kd()
      }, Hd.start(Fd), Hd.stop(Nd), Hd
    }

    function Qd(dd, Od, md, Wd, Fd, Xd) {
      if (0 === Wd.length) return Xd(), () => {};
      const Qd = Rd * md.volume * Fd,
        td = dd.createGain();
      td.connect(Od);
      const od = dd.currentTime + Kd,
        Nd = new Set;
      for (const Rd of Wd) {
        const Od = vd(dd, td, md, Rd, od + Rd.atMs / 1e3, Qd * Rd.level, (() => {
          Nd.delete(Od), 0 === Nd.size && (td.disconnect(), Xd())
        }));
        Nd.add(Od)
      }
      return () => {
        const Od = dd.currentTime;
        td.gain.setTargetAtTime(0, Od, hd);
        for (const dd of Nd) try {
          dd.stop(Od + 5 * hd)
        } catch {}
      }
    }

    function td(dd, Od) {
      var md;
      const Rd = Wd.Howler.ctx,
        Xd = Wd.Howler.masterGain;
      if (!Rd || !Xd || !Fd.e.get("soundOnFromAd")) return () => {};
      const Kd = Wd.Howler;
      return null === (md = Kd._autoResume) || void 0 === md || md.call(Kd), Qd(Rd, Xd, dd, Od, Fd.e.get("soundVolume"), (() => {
        var dd;
        null === (dd = Kd._autoSuspend) || void 0 === dd || dd.call(Kd)
      }))
    }
  },
  40744: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      closeClientGame: () => NO,
      createDefaultClientPlugins: () => oO
    });
    var Wd = md(405);

    function Fd() {
      let dd;
      return {
        onCreate(Od) {
          dd = Od
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Od, md, Fd, Rd, Xd, Kd) {
          var hd, vd;
          if ("Iron Chest" !== dd.getMetaInfo(Xd).rootName) return;
          if (!dd.hasEffect(Od, "Thief")) return;
          const Qd = dd.getBlockData(md, Fd, Rd);
          return dd.getPlayerDbId(Od) !== (null === Qd || void 0 === Qd || null === (hd = Qd.persisted) || void 0 === hd || null === (vd = hd.shared) || void 0 === vd ? void 0 : vd.ownerDbId) ? (dd.sendMessage(Od, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Wd.E.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Rd = md(2991),
      Xd = md(1300);
    const Kd = 8.4,
      hd = 1e-4,
      vd = .15,
      Qd = .04,
      td = [.12, .04, .12],
      od = 26,
      Nd = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Mt: 1,
        minLifeTime: hd,
        maxLifeTime: hd,
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
        blendMode: Rd.g.Standard
      },
      qd = {
        texture: "bubble",
        mipmaps: !1,
        Mt: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: od,
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
        blendMode: Rd.g.Standard
      },
      Hd = [0, 0, 0],
      yd = [0, 0, 0];

    function bd(dd) {
      const Od = new Map;
      let md = null;

      function Wd(dd) {
        var Od, md;
        null === (Od = dd.bubbles) || void 0 === Od || Od.stop(), null === (md = dd.fish) || void 0 === md || md.stop()
      }

      function Fd(md) {
        if (!md.readDrawnPosition(dd, yd)) {
          for (const dd of Od.values()) {
            var Wd;
            null === (Wd = dd.bubbles) || void 0 === Wd || Wd.setEmitRate(0)
          }
          return
        }
        const Fd = performance.now();
        for (const [dd, Xd] of Od) {
          var Rd;
          if (null === (Rd = Xd.bubbles) || void 0 === Rd || Rd.setEmitRate(0), !md.readDrawnPosition(dd, Hd)) continue;
          if (!((Hd[0] - yd[0]) ** 2 + (Hd[1] - yd[1]) ** 2 + (Hd[2] - yd[2]) ** 2 < 900)) continue;
          const Od = Math.max(0, Xd.biteAt - Fd),
            Wd = Xd.approachDurationMs > 0 ? Math.min(1, 1 - Od / Xd.approachDurationMs) : 1,
            hd = (Xd.approachDurationMs - Od) / 1e3,
            bd = Xd.phase + .25 * Math.sin(1.7 * hd + Xd.phase),
            Td = Math.min(Xd.approachDurationMs / 3e3 * 2.8, Kd) * (1 - Wd) * (1 + .15 * Math.sin(2.1 * hd + Xd.phase)),
            pd = Math.min(1, 4 * (1 - Wd)),
            Yd = (.45 * Math.sin(4.1 * hd + Xd.phase) + .18 * Math.sin(9.7 * hd + 2 * Xd.phase)) * pd,
            gd = Hd[0] + Math.cos(bd) * Td - Math.sin(bd) * Yd,
            wd = Math.ceil(Xd.surfaceY),
            Ed = Hd[2] + Math.sin(bd) * Td + Math.cos(bd) * Yd,
            {
              fishAt: Jd,
              bubblesAt: Ud
            } = Xd;
          Jd[0] = Ud[0] = gd, Jd[1] = wd + vd, Ud[1] = wd + Qd, Jd[2] = Ud[2] = Ed, Xd.fish ??= md.createParticles(Nd, {
            pos: Jd
          }), Xd.fish.moveTo(Jd), Xd.fish.emit(1), Xd.bubbles ??= md.createParticles(qd, {
            pos: Ud,
            half: td
          }), Xd.bubbles.moveTo(Ud), Xd.bubbles.setEmitRate(od + 32 * (.5 + .5 * Math.sin(9 * hd + Xd.phase)) ** 4 + 13 * Wd)
        }
      }
      return {
        onCreate(dd) {
          md = dd
        },
        onAfterRender() {
          md && Fd(md)
        },
        onClose() {
          for (const dd of Od.values()) Wd(dd);
          Od.clear(), md = null
        },
        onReceivedMessageFromServer(dd, md) {
          if (dd !== Xd.x) return;
          const {
            hookId: Fd,
            waiting: Rd
          } = md;
          if (Rd) Od.has(Fd) || Od.set(Fd, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Rd.remainingMs,
            approachDurationMs: Rd.durationMs,
            surfaceY: Rd.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const dd = Od.get(Fd);
            dd && Wd(dd), Od.delete(Fd)
          }
        }
      }
    }
    var Td = md(5632),
      pd = md(5620);

    function Yd(dd) {
      let Od, md = null,
        Wd = null;
      const Fd = () => {
        var dd;
        null === (dd = Wd) || void 0 === dd || dd(), Wd = null
      };
      return {
        onCreate(Wd) {
          Od = Wd, md = Od.getClientOption(dd, "dialogue")
        },
        onAfterRender() {
          if (!Od) return;
          const Rd = Od.getClientOption(dd, "dialogue");
          if (Rd === md) return;
          if (md = Rd, Fd(), !Rd || !1 === Rd.animateIn) return;
          const {
            plan: Xd,
            synth: Kd
          } = (0, pd.e)(Rd);
          Kd && (Wd = (0, Td.f)(Kd, Xd.blips))
        },
        onClose: Fd
      }
    }
    var gd = md(40748);
    const wd = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Ed = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Jd = [0, 1, 2, 0, 2, 3];

    function Ud(dd, Od, md) {
      var Wd;
      let [Fd, Rd, Xd] = Od;
      if (dd.hasPackModel("Furnace")) return null;
      const Kd = ((null !== (Wd = dd.getMetaInfo(md).rot) && void 0 !== Wd ? Wd : 1) - 1) * Math.PI / 2,
        hd = Math.PI + Kd,
        vd = Math.cos(hd),
        Qd = Math.sin(hd),
        td = [];
      for (const [qd, Hd] of wd) td.push(qd * vd, Hd, -qd * Qd);
      const od = {
          positions: td,
          indices: Jd,
          uvs: Ed
        },
        Nd = [Fd + .5 + .51 * Math.sin(Kd), Rd + .375, Xd + .5 + .51 * Math.cos(Kd)];
      return dd.createGameMesh(od, {
        kind: "furnaceFire"
      }, Nd)
    }

    function xd(dd) {
      return Math.floor(dd / 200) % 3
    }

    function Bd(dd, Od, md) {
      dd.setGameMesh(Od, {
        uvOffset: [0, md / 3]
      })
    }
    const Sd = [.12, .025, .12],
      sd = [{
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
          blendMode: Rd.g.Standard,
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
          blendMode: Rd.g.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class ud {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(dd, Od) {
        const md = dd.getBlockId(Od[0], Od[1], Od[2]);
        if ("Furnace" !== dd.getMetaInfo(md).rootName) return;
        const Wd = performance.now();
        let Fd = this.smokes.find((dd => dd.pos[0] === Od[0] && dd.pos[1] === Od[1] && dd.pos[2] === Od[2] && dd.XK === md));
        if (Fd || (Fd = {
            pos: [Od[0], Od[1], Od[2]],
            XK: md,
            endMs: Wd,
            lastBurstMs: -1 / 0,
            pending: new Array(sd.length).fill(0),
            fire: Ud(dd, Od, md)
          }, this.smokes.push(Fd), null !== Fd.fire && (Bd(dd, Fd.fire, xd(Wd)), this.shownFireFrame = -1)), Fd.endMs = Wd + 6e3, this.smokes.length > 4) {
          const Od = this.smokes.reduce(((dd, Od) => Od.endMs < dd.endMs ? Od : dd));
          Vd(dd, Od), this.smokes.splice(this.smokes.indexOf(Od), 1)
        }
        Wd - Fd.lastBurstMs >= 300 && (Fd.lastBurstMs = Wd, sd.forEach(((dd, Od) => {
          Fd.pending[Od] += dd.style.count
        })))
      }
      onAfterRender(dd, Od) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const md = performance.now();
        this.smokes = this.smokes.filter((Od => {
          const [Wd, Fd, Rd] = Od.pos, Xd = md < Od.endMs && dd.getBlockId(Wd, Fd, Rd) === Od.XK;
          return Xd || Vd(dd, Od), Xd
        }));
        const Wd = xd(md);
        if (Wd !== this.shownFireFrame) {
          this.shownFireFrame = Wd;
          for (const Od of this.smokes) null !== Od.fire && Bd(dd, Od.fire, Wd)
        }
        if (!dd.particlesEnabled()) {
          for (const dd of this.smokes) dd.pending.fill(0);
          return
        }
        const Fd = Math.min(Od, 250) / 1e3;
        for (const Rd of this.smokes) {
          const [Od, Wd, Xd] = Rd.pos;
          if (0 !== dd.getBlockId(Od, Wd + 1, Xd)) {
            Rd.pending.fill(0);
            continue
          }
          const Kd = (Rd.endMs - md) / 6e3,
            hd = this.centre;
          hd[0] = Od + .5, hd[1] = Wd + 1.275, hd[2] = Xd + .5, sd.forEach(((Od, md) => {
            Rd.pending[md] += Od.perSecond * Kd * Fd;
            const Wd = Math.floor(Rd.pending[md]);
            Wd > 0 && this.emit(dd, md, hd, Wd) && (Rd.pending[md] -= Wd)
          }))
        }
      }
      dispose(dd) {
        for (const md of this.smokes) Vd(dd, md);
        this.smokes = [];
        for (const md of null !== (Od = this.puffers) && void 0 !== Od ? Od : []) {
          var Od;
          md.dispose()
        }
        this.puffers = null
      }
      emit(dd, Od, md, Wd) {
        return this.puffers ??= sd.map((dd => {
          let {
            style: Od,
            perSecond: md
          } = dd;
          const Wd = (Od.count / .3 + md) * Od.life[1];
          return new gd.f(Od, Math.ceil(4 * Wd), Sd)
        })), this.puffers[Od].emit(dd, md, this.renderFrame, Wd)
      }
    }

    function Vd(dd, Od) {
      null !== Od.fire && (dd.disposeGameMesh(Od.fire), Od.fire = null)
    }

    function Ad() {
      let dd;
      const Od = new ud;
      return {
        onCreate(Od) {
          dd = Od
        },
        onReceivedMessageFromServer(md, Wd) {
          md === Xd.A && Od.start(dd, Wd)
        },
        onAfterRender(md) {
          Od.onAfterRender(dd, md)
        },
        onClose() {
          Od.dispose(dd)
        }
      }
    }
    var rd = md(218),
      Gd = md(40721),
      nd = md(40756),
      Ld = md(40760);
    class Pd {
      constructor(dd, Od, md) {
        this.api = dd, this.wearer = Od, this.name = md, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new Ld.c, this.shown = !1, this.raised = 0
      }
      update(dd) {
        var Od;
        const md = (0, Gd.j)(this.name);
        if (!md) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === md.model && this.madeFrom.scale === md.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(md.model, md.scale), this.madeFrom = md, !this.model)) return void this.raiseNametag(0);
        if (!(dd.drawn && !dd.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const Wd = this.motion.step({
          dt: dd.dt,
          feet: dd.feet,
          heading: dd.heading,
          headTopY: dd.headTopY,
          tuning: md,
          timeS: dd.timeS
        });
        this.model.setPose(Wd.pos, Wd.yaw + Math.PI), this.model.setClip(null !== (Od = Wd.clip) && void 0 !== Od ? Od : null);
        const Fd = Wd.seated ? md : null;
        Fd !== this.perchedWith && (this.perchedWith = Fd, this.model.setPerch(Fd && {
          qm: this.wearer,
          offset: Fd.perchOffset,
          yaw: Fd.yawOffset
        })), this.setShown(!0), this.raiseNametag(md.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(dd) {
        dd !== this.raised && (this.raised = dd, this.api.setNametagOffset(this.wearer, dd))
      }
      freeModel() {
        var dd;
        null === (dd = this.model) || void 0 === dd || dd.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(dd) {
        this.model && dd !== this.shown && (this.shown = dd, this.model.setVisible(dd))
      }
    }
    class zd {
      constructor(dd, Od) {
        this.api = dd, this.name = Od, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(dd) {
        const Od = (0, Gd.i)(this.name);
        if (Od !== this.madeFrom && this.stop(), !Od) return;
        const md = dd.ownFirstPerson ? Od.ownInFirstPerson : dd.drawn;
        if (md) {
          const {
            centre: md
          } = this;
          if ((0, Ld.e)(md, dd.feet, Od.offset, Math.sin(dd.heading), Math.cos(dd.heading)), this.particles) this.particles.moveTo(md, this.half);
          else {
            const dd = (0, nd.d)(Od);
            this.half = dd.half, this.particles = this.api.createParticles(dd.opts, {
              pos: md,
              half: dd.half
            }), this.madeFrom = Od, this.emitting = !0
          }
        }
        this.particles && md !== this.emitting && (this.emitting = md, this.particles.setEmitRate(md ? Od.particles.emitRate : 0))
      }
      stop() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const cd = .25,
      jd = 48,
      Dd = 4,
      ed = 24,
      Id = 12,
      ld = .6,
      Cd = 1 / rd.i.playerEyeToHeightRatio;

    function Zd(dd, Od, md) {
      const Wd = dd.filter((dd => dd[Od] <= jd));
      return Wd.sort(((dd, md) => dd[Od] - md[Od])), new Set(Wd.slice(0, md).map((dd => dd.id)))
    }

    function kd() {
      let dd;
      const Od = new Map;
      let md = 0,
        Wd = 0;
      const Fd = [0, 0, 0],
        Rd = {
          feet: Fd,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function Xd(dd) {
        var Od, md;
        null === (Od = dd.pet) || void 0 === Od || Od.dispose(), null === (md = dd.aura) || void 0 === md || md.stop()
      }

      function Kd(Od, md) {
        var Wd, Xd;
        const {
          id: Kd
        } = Od, hd = dd.readDrawnPosition(Kd, Fd) ? dd.getDrawnHeading(Kd) : null, vd = null === hd ? null : dd.getDrawnEyeHeight(Kd);
        if (null === hd || null === vd) Rd.drawn = !1, Rd.ownFirstPerson = !1;
        else {
          const Od = md.cameraPosition;
          Rd.heading = hd, Rd.headTopY = Fd[1] + vd * Cd, Rd.drawn = dd.isAlive(Kd) && dd.isEntityDrawn(Kd), Rd.ownFirstPerson = dd.isLocalPlayer(Kd) && dd.isAlive(Kd) && Math.hypot(Od[0] - Fd[0], Od[1] - Fd[1] - vd, Od[2] - Fd[2]) < ld
        }
        null === (Wd = Od.pet) || void 0 === Wd || Wd.update(Rd), null === (Xd = Od.aura) || void 0 === Xd || Xd.update(Rd)
      }
      return {
        onCreate(Od) {
          dd = Od
        },
        onAfterRender(hd, vd) {
          const Qd = hd / 1e3;
          Wd += Qd, md -= Qd, md <= 0 && (md = cd, function(md) {
            const Wd = [];
            for (const Xd of dd.getPlayerIds()) {
              const Rd = dd.getPlayerCosmetics(Xd),
                Kd = void 0 !== (null === Rd || void 0 === Rd ? void 0 : Rd.pet) && (0, Gd.j)(Rd.pet) ? Rd.pet : null,
                hd = void 0 !== (null === Rd || void 0 === Rd ? void 0 : Rd.aura) && (0, Gd.i)(Rd.aura) ? Rd.aura : null;
              if (null === Kd && null === hd || !dd.readDrawnPosition(Xd, Fd)) continue;
              const vd = Math.hypot(Fd[0] - md[0], Fd[1] - md[1], Fd[2] - md[2]),
                Qd = Od.get(Xd);
              Wd.push({
                id: Xd,
                pet: Kd,
                aura: hd,
                petDist: null === Kd ? 1 / 0 : vd - (null !== Qd && void 0 !== Qd && Qd.pet ? Dd : 0),
                auraDist: null === hd ? 1 / 0 : vd - (null !== Qd && void 0 !== Qd && Qd.aura ? Dd : 0)
              })
            }
            const Rd = Zd(Wd, "petDist", ed),
              Kd = dd.particlesEnabled() ? Zd(Wd, "auraDist", Id) : new Set,
              hd = new Set;
            for (const {
                id: Fd,
                pet: Xd,
                aura: Hd
              }
              of Wd) {
              var vd, Qd, td;
              const md = null !== (vd = Od.get(Fd)) && void 0 !== vd ? vd : {
                  id: Fd,
                  pet: null,
                  aura: null
                },
                Wd = Rd.has(Fd) ? Xd : null,
                yd = Kd.has(Fd) ? Hd : null;
              var od, Nd, qd;
              (null === (Qd = md.pet) || void 0 === Qd ? void 0 : Qd.name) !== Wd ? (null === (od = md.pet) || void 0 === od || od.dispose(), md.pet = null === Wd ? null : new Pd(dd, Fd, Wd)) : null === (Nd = md.pet) || void 0 === Nd || Nd.refreshNametag(), (null === (td = md.aura) || void 0 === td ? void 0 : td.name) !== yd && (null === (qd = md.aura) || void 0 === qd || qd.stop(), md.aura = null === yd ? null : new zd(dd, yd)), (md.pet || md.aura) && (Od.set(Fd, md), hd.add(Fd))
            }
            for (const [dd, Fd] of Od) hd.has(dd) || (Xd(Fd), Od.delete(dd))
          }(vd.cameraPosition)), Rd.dt = Qd, Rd.timeS = Wd;
          for (const dd of Od.values()) Kd(dd, vd)
        },
        onClose() {
          for (const dd of Od.values()) Xd(dd);
          Od.clear()
        }
      }
    }
    var fd = md(9861);
    const Md = "skyblockLoot",
      dO = "autoPickupClick";
    var OO = md(1796);

    function mO(dd, Od) {
      return [{
        timeFraction: 0,
        minColor: [255 * dd[0], 255 * dd[1], 255 * dd[2], 1],
        maxColor: [255 * Od[0], 255 * Od[1], 255 * Od[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const WO = [0, 0, 0],
      FO = {
        texture: "glint",
        mipmaps: !1,
        Mt: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: WO,
        dir2: WO,
        blendMode: Rd.g.OneOne
      },
      RO = {
        ...FO,
        colorGradients: mO([1, .88, .38], [1, .65, .15])
      },
      XO = {
        ...FO,
        colorGradients: mO([.55, .95, 1], [.9, 1, 1])
      },
      KO = [.5, .5, .5],
      hO = {
        texture: "glint",
        mipmaps: !1,
        Mt: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: mO([1, .12, .12], [1, .35, .2]),
        blendMode: Rd.g.OneOne
      };
    class vO {
      constructor() {
        this.drops = new Map
      }
      Yt(dd, Od) {
        if ("overflowFlash" === Od.kind) {
          const [md, Wd, Fd] = Od.position, Rd = dd.createParticles(hO, {
            pos: [md, Wd, Fd],
            half: KO
          });
          return Rd.emit(18), void Rd.stop()
        }
        this.drops.has(Od.itemId) || this.drops.set(Od.itemId, {
          owner: Od.owner,
          cosmetic: Od.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Et(dd) {
        if (0 === this.drops.size) return;
        const Od = performance.now(),
          md = dd.getCameraPosition();
        let Wd = 0;
        for (const Rd of this.drops.values()) null !== Rd.particles && Wd++;
        for (const [Rd, Xd] of this.drops) {
          const Kd = dd.getPositionView(Rd);
          if (null === Kd) {
            var Fd;
            if (Xd.seen || Od - Xd.markedAt > 5e3) null !== Xd.particles && Wd--, null === (Fd = Xd.particles) || void 0 === Fd || Fd.stop(), this.drops.delete(Rd);
            continue
          }
          Xd.cosmetic || !dd.isLocalPlayer(Xd.owner) || Xd.pickupDelayCleared || (dd.clearPickupDelay(Rd), Xd.pickupDelayCleared = !0);
          const hd = Xd.lastPosition,
            vd = Xd.seen && (Kd[0] - hd[0]) ** 2 + (Kd[1] - hd[1]) ** 2 + (Kd[2] - hd[2]) ** 2 > 4e-4,
            Qd = (Kd[0] - md[0]) ** 2 + (Kd[1] - md[1]) ** 2 + (Kd[2] - md[2]) ** 2 < 2025;
          Xd.seen = !0, hd[0] = Kd[0], hd[1] = Kd[1], hd[2] = Kd[2], vd && (Xd.lastMovingAt = Od), null !== Xd.particles && (!Qd || Od - Xd.lastMovingAt > 500) && (Xd.particles.stop(), Xd.particles = null, Wd--), vd && Qd && null === Xd.particles && Wd < 32 && (Xd.particles = dd.createParticles(Xd.cosmetic ? XO : RO, {
            pos: Kd
          }), Wd++), null !== Xd.particles && (Xd.particles.moveTo(Kd), Xd.particles.setEmitRate(vd ? 12 : 0)), !vd && null === Xd.particles && Od - Math.max(Xd.lastMovingAt, Xd.markedAt) > 2e3 && this.drops.delete(Rd)
        }
      }
      dispose() {
        for (const Od of this.drops.values()) {
          var dd;
          null === (dd = Od.particles) || void 0 === dd || dd.stop()
        }
        this.drops.clear()
      }
    }
    const QO = new Set;

    function tO() {
      let dd;
      const Od = new vO;
      return {
        onCreate(Od) {
          dd = Od
        },
        onReceivedMessageFromServer(md, Wd) {
          if (md === Md) Od.Yt(dd, Wd);
          else if (md === dO) {
            const dd = Wd,
              Od = `${dd.id}|${dd.value}`;
            QO.has(Od) || (QO.add(Od), (0, OO.g)({
              id: dd.id,
              value: dd.value
            }))
          }
        },
        Et() {
          Od.Et(dd)
        },
        onClose() {
          Od.dispose()
        }
      }
    }

    function oO(dd, Od, md, Wd) {
      return {
        cosmeticCompanions: kd(),
        dialogue: Yd(Wd.localPlayerId),
        fishing: bd(Wd.localPlayerId),
        furnaceSmoke: Ad(),
        ironChest: Fd(),
        localBlockBroken: (0, fd.c)(),
        magnetLoot: tO()
      }
    }

    function NO(dd, Od) {
      for (const Fd of [dd, ...null !== Od && void 0 !== Od ? Od : []]) try {
        var md;
        null === Fd || void 0 === Fd || null === (md = Fd.onClose) || void 0 === md || md.call(Fd)
      } catch (Wd) {
        console.error("Error in client onClose callback", Wd)
      }
    }
  },
  9861: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      g: () => Fd
    });
    var Wd = md(32);
    const Fd = "localBlockBroken";

    function Rd() {
      return {
        onPlayerChangeBlock(dd, Od, md, Rd, Xd, Kd) {
          "Air" === Kd && Wd.j.lQ(Fd)
        }
      }
    }
  },
  40748: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Rd
    });
    const Wd = 1 / .6,
      Fd = {
        kind: "smokePuff"
      };
    class Rd {
      constructor(dd, Od, md) {
        this.style = dd, this.Mt = Od, this.half = md, this.particles = null, this.lastFrame = -1
      }
      emit(dd, Od, md) {
        let Rd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return md !== this.lastFrame && (this.lastFrame = md, this.particles || (this.particles = dd.createParticles(function(dd, Od) {
          const [
            [md, Rd, Xd],
            [Kd, hd, vd]
          ] = dd.colours;
          return {
            texture: dd.soft ? Fd : "square_particle",
            Mt: Od,
            minLifeTime: dd.life[0] / Wd,
            maxLifeTime: dd.life[1] / Wd,
            minEmitPower: dd.power[0] * Wd,
            maxEmitPower: dd.power[1] * Wd,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            emitRate: 0,
            gravity: [0, dd.lift * Wd * Wd, 0],
            dir1: [-dd.spread, 1, -dd.spread],
            dir2: [dd.spread, 1, dd.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [md, Rd, Xd, dd.alpha],
              maxColor: [Kd, hd, vd, dd.alpha]
            }, {
              timeFraction: 1,
              minColor: [md, Rd, Xd, 0],
              maxColor: [Kd, hd, vd, 0]
            }],
            blendMode: dd.blendMode
          }
        }(this.style, this.Mt), {
          pos: Od,
          half: this.half
        })), this.particles.moveTo(Od, this.half), this.particles.emit(Rd), !0)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
    }
  },
  5623: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd,
      h: () => Wd,
      j: () => Rd,
      k: () => hd,
      l: () => Xd
    });
    const Wd = ["sine", "triangle", "square", "sawtooth"],
      Fd = 55,
      Rd = {
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

    function Xd(dd) {
      return "string" !== typeof dd ? dd : Object.hasOwn(Rd, dd) ? Rd[dd] : null
    }

    function Kd(dd, Od, md) {
      return Math.min(md, Math.max(Od, dd))
    }

    function hd(dd) {
      const Od = Kd(dd.durationMs, 10, 500),
        md = Kd(dd.attackMs, 0, Od),
        {
          intonation: Fd
        } = dd;
      return {
        waveform: Wd.includes(dd.waveform) ? dd.waveform : "sine",
        pitchHz: Kd(dd.pitchHz, 20, 4e3),
        glideSemitones: Kd(dd.glideSemitones, -24, 24),
        durationMs: Od,
        attackMs: md,
        releaseMs: Kd(dd.releaseMs, 0, Od - md),
        lowpassHz: null === dd.lowpassHz ? null : Kd(dd.lowpassHz, 20, 2e4),
        volume: Kd(dd.volume, 0, 2),
        intonation: {
          variationSemitones: Kd(Fd.variationSemitones, 0, 6),
          declineSemitones: Kd(Fd.declineSemitones, 0, 12),
          questionRiseSemitones: Kd(Fd.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Kd(Fd.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Kd(dd.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);