export const id = 27;
export const ids = [27];
export const modules = {
  4729: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Xd,
      d: () => jd
    });
    var pd = kd(4733),
      Nd = kd(300);
    const Wd = 120,
      Pd = 260,
      Zd = 1.15,
      gd = 1.2,
      Cd = 2,
      Kd = 1.08,
      od = .8,
      ld = .95,
      Qd = 8,
      Ld = "[\"')\\]\u300d\u300f\uff09]*",
      Od = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Ld}$`),
      ed = new RegExp(`[?\uff1f]${Ld}$`),
      Rd = new RegExp(`[!\uff01]${Ld}$`),
      Id = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Gd = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      vd = new RegExp(`[${Gd}]`),
      xd = new RegExp(`[${Gd}]|[^${Gd}]+`, "g"),
      qd = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Bd(dd) {
      let Jd = 2166136261;
      for (let kd = 0; kd < dd.length; kd++) Jd ^= dd.charCodeAt(kd), Jd = Math.imul(Jd, 16777619);
      return (Jd >>> 0) / 4294967295 * 2 - 1
    }

    function sd(dd) {
      var Jd;
      if (vd.test(dd)) return 1;
      const kd = dd.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        pd = kd.replace(/[^0-9]/g, "");
      if (pd.length > 0 && !/\p{L}/u.test(kd)) return Math.min(pd.length, 4);
      const Nd = null !== (Jd = kd.match(qd)) && void 0 !== Jd ? Jd : [];
      if (0 === Nd.length) {
        var Wd, Pd;
        const dd = null !== (Wd = null === (Pd = kd.match(/\p{L}/gu)) || void 0 === Pd ? void 0 : Pd.length) && void 0 !== Wd ? Wd : 0;
        return 0 === dd ? 0 : Math.min(Math.max(1, Math.round(dd / 2.5)), Qd)
      }
      const Zd = kd.replace(/[^\p{L}]/gu, ""),
        gd = Nd.length > 1 && "e" === Nd.at(-1) && Zd.endsWith("e") && !Zd.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(dd.replace(/[^\p{L}]/gu, ""));
      return Math.min(Nd.length - (gd ? 1 : 0), Qd)
    }

    function ad(dd) {
      return dd.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Md(dd) {
      const Jd = dd.replace(/[^\p{L}]/gu, "");
      return Jd.length >= 2 && Jd === Jd.toUpperCase() && Jd !== Jd.toLowerCase()
    }

    function Fd(dd, Jd) {
      var kd;
      const Qd = Jd && (0, pd.k)(Jd),
        Ld = null !== (kd = null === Qd || void 0 === Qd ? void 0 : Qd.syllableMs) && void 0 !== kd ? kd : pd.b,
        Gd = function(dd) {
          const Jd = [];
          for (const pd of (0, Nd.Wb)(dd))
            if ("string" === typeof pd)
              for (const dd of pd.split(/(\s+)/)) {
                if ("" === dd) continue;
                if (/^\s+$/.test(dd)) {
                  Jd.push({
                    kind: "space",
                    text: dd
                  });
                  continue
                }
                if (!vd.test(dd)) {
                  Jd.push({
                    kind: "word",
                    text: dd,
                    delayMs: 0
                  });
                  continue
                }
                let pd = !0;
                for (const Nd of null !== (kd = dd.match(xd)) && void 0 !== kd ? kd : []) {
                  var kd;
                  const dd = Jd.at(-1);
                  pd || "word" !== (null === dd || void 0 === dd ? void 0 : dd.kind) || vd.test(Nd) || /[\p{L}\p{N}]/u.test(Nd) ? (pd || Jd.push({
                    kind: "space",
                    text: "\u200b"
                  }), Jd.push({
                    kind: "word",
                    text: Nd,
                    delayMs: 0
                  }), pd = !1) : dd.text += Nd
                }
              } else Jd.push({
                kind: "icon",
                text: pd.icon,
                delayMs: 0
              });
          return Jd
        }(dd),
        qd = [];
      let Fd = [];
      for (const pd of Gd) "space" !== pd.kind && (Fd.push(pd), Od.test(pd.text) && (qd.push(Fd), Fd = []));
      qd.push(Fd);
      const Yd = [];
      let md = 0;
      for (const pd of qd) {
        var bd, Sd;
        const dd = null !== (bd = null === (Sd = pd.at(-1)) || void 0 === Sd ? void 0 : Sd.text) && void 0 !== bd ? bd : "",
          Jd = ed.test(dd),
          kd = Rd.test(dd),
          Nd = pd.map((dd => "word" === dd.kind ? sd(dd.text) : 1)),
          Gd = Nd.findLastIndex((dd => dd > 0));
        for (const [ed, Rd] of pd.entries()) {
          const dd = "word" === Rd.kind,
            pd = Nd[ed];
          Rd.delayMs = md;
          for (let Nd = 0; Qd && Nd < pd; Nd++) {
            const {
              intonation: Wd
            } = Qd;
            let Pd = Gd > 0 ? -Wd.declineSemitones * (ed / Gd) : 0;
            Pd += Bd(`${ad(Rd.text)}|${Nd}`) * Wd.variationSemitones;
            const Od = Math.min(1, Wd.variationSemitones);
            let Id = Qd.glideSemitones,
              vd = 1;
            kd && (Pd += Wd.exclaimLiftSemitones, vd *= Zd), Jd && ed === Gd && (Pd += Wd.questionRiseSemitones * (pd > 1 ? .5 + .5 * Nd / (pd - 1) : 1), Nd === pd - 1 && (Id = Math.abs(Id) + Wd.questionRiseSemitones / 2)), dd && Md(Rd.text) && (Pd += Cd * Od, vd *= gd), pd > 1 && 0 === Nd && (Pd += od * Od, vd *= Kd), Yd.push({
              atMs: md + Nd * Ld,
              semitones: Pd,
              glideSemitones: Id,
              durationMs: Nd < pd - 1 ? Math.min(Qd.durationMs, Ld * ld) : Qd.durationMs,
              level: vd
            })
          }
          md += pd * Ld + (Od.test(Rd.text) ? Pd : Id.test(Rd.text) ? Wd : 0)
        }
      }
      return {
        pieces: Gd.map((dd => "space" === dd.kind ? dd : "icon" === dd.kind ? {
          kind: "icon",
          icon: dd.text,
          delayMs: dd.delayMs
        } : {
          kind: "word",
          text: dd.text,
          delayMs: dd.delayMs
        })),
        blips: Yd
      }
    }
    var Yd = kd(1211),
      md = kd(1273),
      bd = kd(1938);

    function Sd(dd) {
      if ("string" === typeof dd) return dd;
      const Jd = md.c.get().getCurrentLanguageCode();
      return (0, Yd.t)(Jd, dd.translationKey, (0, Yd.r)(dd.params, bd.d.shown))
    }

    function jd(dd) {
      const Jd = void 0 === dd.voice ? null : (0, pd.m)(dd.voice),
        kd = Jd && (0, pd.k)(Jd);
      return {
        plan: Fd(Sd(dd.line), kd),
        synth: kd
      }
    }

    function Xd(dd) {
      const Jd = [];
      let kd = [];
      for (const [Nd, Wd] of dd.entries()) {
        var pd;
        "space" === Wd.kind && (" " !== Wd.text || "icon" !== (null === (pd = dd[Nd + 1]) || void 0 === pd ? void 0 : pd.kind)) ? (kd.length > 0 && Jd.push(kd), Jd.push([Wd]), kd = []) : kd.push(Wd)
      }
      return kd.length > 0 && Jd.push(kd), Jd
    }
  },
  4740: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Kd,
      h: () => od
    });
    var pd = kd(4743),
      Nd = kd(22);
    const Wd = .25,
      Pd = .85,
      Zd = .02,
      gd = .01;

    function Cd(dd, Jd, kd, pd, Nd, Wd, Zd) {
      const {
        waveform: gd,
        pitchHz: Cd,
        attackMs: Kd,
        releaseMs: od,
        lowpassHz: ld
      } = kd, Qd = Nd + pd.durationMs / 1e3, Ld = Cd * 2 ** (pd.semitones / 12), Od = dd.createOscillator();
      Od.type = gd, Od.frequency.setValueAtTime(Ld, Nd), Od.frequency.exponentialRampToValueAtTime(Ld * 2 ** (pd.glideSemitones / 12), Qd);
      const ed = Nd + Math.min(Kd, pd.durationMs) / 1e3,
        Rd = dd.createGain();
      Rd.gain.setValueAtTime(0, Nd), Rd.gain.linearRampToValueAtTime(Wd, ed), Rd.gain.linearRampToValueAtTime(Wd * Pd, Math.max(ed, Qd - od / 1e3)), Rd.gain.linearRampToValueAtTime(0, Qd);
      const Id = [Od];
      if (null !== ld) {
        const Jd = dd.createBiquadFilter();
        Jd.type = "lowpass", Jd.frequency.value = ld, Id.push(Jd)
      }
      Id.push(Rd, Jd);
      for (let Pd = 1; Pd < Id.length; Pd++) Id[Pd - 1].connect(Id[Pd]);
      return Od.onended = () => {
        for (const dd of Id.slice(0, -1)) dd.disconnect();
        Zd()
      }, Od.start(Nd), Od.stop(Qd), Od
    }

    function Kd(dd, Jd, kd, pd, Nd, Pd) {
      if (0 === pd.length) return Pd(), () => {};
      const Kd = Wd * kd.volume * Nd,
        od = dd.createGain();
      od.connect(Jd);
      const ld = dd.currentTime + Zd,
        Qd = new Set;
      for (const Wd of pd) {
        const Jd = Cd(dd, od, kd, Wd, ld + Wd.atMs / 1e3, Kd * Wd.level, (() => {
          Qd.delete(Jd), 0 === Qd.size && (od.disconnect(), Pd())
        }));
        Qd.add(Jd)
      }
      return () => {
        const Jd = dd.currentTime;
        od.gain.setTargetAtTime(0, Jd, gd);
        for (const dd of Qd) try {
          dd.stop(Jd + 5 * gd)
        } catch {}
      }
    }

    function od(dd, Jd) {
      var kd;
      const Wd = pd.Howler.ctx,
        Pd = pd.Howler.masterGain;
      if (!Wd || !Pd || !Nd.d.get("soundOnFromAd")) return () => {};
      const Zd = pd.Howler;
      return null === (kd = Zd._autoResume) || void 0 === kd || kd.call(Zd), Kd(Wd, Pd, dd, Jd, Nd.d.get("soundVolume"), (() => {
        var dd;
        null === (dd = Zd._autoSuspend) || void 0 === dd || dd.call(Zd)
      }))
    }
  },
  39283: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      closeClientGame: () => fd,
      createDefaultClientPlugins: () => Xd
    });
    var pd = kd(313);

    function Nd() {
      let dd;
      return {
        onCreate(Jd) {
          dd = Jd
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(Jd, kd, Nd, Wd, Pd, Zd) {
          var gd, Cd;
          if ("Iron Chest" !== dd.getMetaInfo(Pd).rootName) return;
          if (!dd.hasEffect(Jd, "Thief")) return;
          const Kd = dd.getBlockData(kd, Nd, Wd);
          return dd.getPlayerDbId(Jd) !== (null === Kd || void 0 === Kd || null === (gd = Kd.persisted) || void 0 === gd || null === (Cd = gd.shared) || void 0 === Cd ? void 0 : Cd.ownerDbId) ? (dd.sendMessage(Jd, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: pd.M.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Wd = kd(4090),
      Pd = kd(1260);
    const Zd = 8.4,
      gd = 1e-4,
      Cd = .15,
      Kd = .04,
      od = [.12, .04, .12],
      ld = 26,
      Qd = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        oo: 1,
        minLifeTime: gd,
        maxLifeTime: gd,
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
        blendMode: Wd.d.Standard
      },
      Ld = {
        texture: "bubble",
        mipmaps: !1,
        oo: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: ld,
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
        blendMode: Wd.d.Standard
      },
      Od = [0, 0, 0],
      ed = [0, 0, 0];

    function Rd(dd) {
      const Jd = new Map;
      let kd = null;

      function pd(dd) {
        var Jd, kd;
        null === (Jd = dd.bubbles) || void 0 === Jd || Jd.stop(), null === (kd = dd.fish) || void 0 === kd || kd.stop()
      }

      function Nd(kd) {
        if (!kd.readDrawnPosition(dd, ed)) {
          for (const dd of Jd.values()) {
            var pd;
            null === (pd = dd.bubbles) || void 0 === pd || pd.setEmitRate(0)
          }
          return
        }
        const Nd = performance.now();
        for (const [dd, Pd] of Jd) {
          var Wd;
          if (null === (Wd = Pd.bubbles) || void 0 === Wd || Wd.setEmitRate(0), !kd.readDrawnPosition(dd, Od)) continue;
          if (!((Od[0] - ed[0]) ** 2 + (Od[1] - ed[1]) ** 2 + (Od[2] - ed[2]) ** 2 < 900)) continue;
          const Jd = Math.max(0, Pd.biteAt - Nd),
            pd = Pd.approachDurationMs > 0 ? Math.min(1, 1 - Jd / Pd.approachDurationMs) : 1,
            gd = (Pd.approachDurationMs - Jd) / 1e3,
            Rd = Pd.phase + .25 * Math.sin(1.7 * gd + Pd.phase),
            Id = Math.min(Pd.approachDurationMs / 3e3 * 2.8, Zd) * (1 - pd) * (1 + .15 * Math.sin(2.1 * gd + Pd.phase)),
            Gd = Math.min(1, 4 * (1 - pd)),
            vd = (.45 * Math.sin(4.1 * gd + Pd.phase) + .18 * Math.sin(9.7 * gd + 2 * Pd.phase)) * Gd,
            xd = Od[0] + Math.cos(Rd) * Id - Math.sin(Rd) * vd,
            qd = Math.ceil(Pd.surfaceY),
            Bd = Od[2] + Math.sin(Rd) * Id + Math.cos(Rd) * vd,
            {
              fishAt: sd,
              bubblesAt: ad
            } = Pd;
          sd[0] = ad[0] = xd, sd[1] = qd + Cd, ad[1] = qd + Kd, sd[2] = ad[2] = Bd, Pd.fish ??= kd.createParticles(Qd, {
            pos: sd
          }), Pd.fish.moveTo(sd), Pd.fish.emit(1), Pd.bubbles ??= kd.createParticles(Ld, {
            pos: ad,
            half: od
          }), Pd.bubbles.moveTo(ad), Pd.bubbles.setEmitRate(ld + 32 * (.5 + .5 * Math.sin(9 * gd + Pd.phase)) ** 4 + 13 * pd)
        }
      }
      return {
        onCreate(dd) {
          kd = dd
        },
        onAfterRender() {
          kd && Nd(kd)
        },
        onClose() {
          for (const dd of Jd.values()) pd(dd);
          Jd.clear(), kd = null
        },
        onReceivedMessageFromServer(dd, kd) {
          if (dd !== Pd.C) return;
          const {
            hookId: Nd,
            waiting: Wd
          } = kd;
          if (Wd) Jd.has(Nd) || Jd.set(Nd, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Wd.remainingMs,
            approachDurationMs: Wd.durationMs,
            surfaceY: Wd.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const dd = Jd.get(Nd);
            dd && pd(dd), Jd.delete(Nd)
          }
        }
      }
    }
    var Id = kd(4740),
      Gd = kd(4729);

    function vd(dd) {
      let Jd, kd = null,
        pd = null;
      const Nd = () => {
        var dd;
        null === (dd = pd) || void 0 === dd || dd(), pd = null
      };
      return {
        onCreate(pd) {
          Jd = pd, kd = Jd.getClientOption(dd, "dialogue")
        },
        onAfterRender() {
          if (!Jd) return;
          const Wd = Jd.getClientOption(dd, "dialogue");
          if (Wd === kd) return;
          if (kd = Wd, Nd(), !Wd || !1 === Wd.animateIn) return;
          const {
            plan: Pd,
            synth: Zd
          } = (0, Gd.d)(Wd);
          Zd && (pd = (0, Id.h)(Zd, Pd.blips))
        },
        onClose: Nd
      }
    }
    var xd = kd(39287);
    const qd = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      Bd = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      sd = [0, 1, 2, 0, 2, 3];

    function ad(dd, Jd, kd) {
      var pd;
      let [Nd, Wd, Pd] = Jd;
      if (dd.hasPackModel("Furnace")) return null;
      const Zd = ((null !== (pd = dd.getMetaInfo(kd).rot) && void 0 !== pd ? pd : 1) - 1) * Math.PI / 2,
        gd = Math.PI + Zd,
        Cd = Math.cos(gd),
        Kd = Math.sin(gd),
        od = [];
      for (const [Ld, Od] of qd) od.push(Ld * Cd, Od, -Ld * Kd);
      const ld = {
          positions: od,
          indices: sd,
          uvs: Bd
        },
        Qd = [Nd + .5 + .51 * Math.sin(Zd), Wd + .375, Pd + .5 + .51 * Math.cos(Zd)];
      return dd.createGameMesh(ld, {
        kind: "furnaceFire"
      }, Qd)
    }

    function Md(dd) {
      return Math.floor(dd / 200) % 3
    }

    function Fd(dd, Jd, kd) {
      dd.setGameMesh(Jd, {
        uvOffset: [0, kd / 3]
      })
    }
    const Yd = [.12, .025, .12],
      md = [{
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
          blendMode: Wd.d.Standard,
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
          blendMode: Wd.d.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class bd {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(dd, Jd) {
        const kd = dd.getBlockId(Jd[0], Jd[1], Jd[2]);
        if ("Furnace" !== dd.getMetaInfo(kd).rootName) return;
        const pd = performance.now();
        let Nd = this.smokes.find((dd => dd.pos[0] === Jd[0] && dd.pos[1] === Jd[1] && dd.pos[2] === Jd[2] && dd.NC === kd));
        if (Nd || (Nd = {
            pos: [Jd[0], Jd[1], Jd[2]],
            NC: kd,
            endMs: pd,
            lastBurstMs: -1 / 0,
            pending: new Array(md.length).fill(0),
            fire: ad(dd, Jd, kd)
          }, this.smokes.push(Nd), null !== Nd.fire && (Fd(dd, Nd.fire, Md(pd)), this.shownFireFrame = -1)), Nd.endMs = pd + 6e3, this.smokes.length > 4) {
          const Jd = this.smokes.reduce(((dd, Jd) => Jd.endMs < dd.endMs ? Jd : dd));
          Sd(dd, Jd), this.smokes.splice(this.smokes.indexOf(Jd), 1)
        }
        pd - Nd.lastBurstMs >= 300 && (Nd.lastBurstMs = pd, md.forEach(((dd, Jd) => {
          Nd.pending[Jd] += dd.style.count
        })))
      }
      onAfterRender(dd, Jd) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const kd = performance.now();
        this.smokes = this.smokes.filter((Jd => {
          const [pd, Nd, Wd] = Jd.pos, Pd = kd < Jd.endMs && dd.getBlockId(pd, Nd, Wd) === Jd.NC;
          return Pd || Sd(dd, Jd), Pd
        }));
        const pd = Md(kd);
        if (pd !== this.shownFireFrame) {
          this.shownFireFrame = pd;
          for (const Jd of this.smokes) null !== Jd.fire && Fd(dd, Jd.fire, pd)
        }
        if (!dd.particlesEnabled()) {
          for (const dd of this.smokes) dd.pending.fill(0);
          return
        }
        const Nd = Math.min(Jd, 250) / 1e3;
        for (const Wd of this.smokes) {
          const [Jd, pd, Pd] = Wd.pos;
          if (0 !== dd.getBlockId(Jd, pd + 1, Pd)) {
            Wd.pending.fill(0);
            continue
          }
          const Zd = (Wd.endMs - kd) / 6e3,
            gd = this.centre;
          gd[0] = Jd + .5, gd[1] = pd + 1.275, gd[2] = Pd + .5, md.forEach(((Jd, kd) => {
            Wd.pending[kd] += Jd.perSecond * Zd * Nd;
            const pd = Math.floor(Wd.pending[kd]);
            pd > 0 && this.emit(dd, kd, gd, pd) && (Wd.pending[kd] -= pd)
          }))
        }
      }
      dispose(dd) {
        for (const kd of this.smokes) Sd(dd, kd);
        this.smokes = [];
        for (const kd of null !== (Jd = this.puffers) && void 0 !== Jd ? Jd : []) {
          var Jd;
          kd.dispose()
        }
        this.puffers = null
      }
      emit(dd, Jd, kd, pd) {
        return this.puffers ??= md.map((dd => {
          let {
            style: Jd,
            perSecond: kd
          } = dd;
          const pd = (Jd.count / .3 + kd) * Jd.life[1];
          return new xd.g(Jd, Math.ceil(4 * pd), Yd)
        })), this.puffers[Jd].emit(dd, kd, this.renderFrame, pd)
      }
    }

    function Sd(dd, Jd) {
      null !== Jd.fire && (dd.disposeGameMesh(Jd.fire), Jd.fire = null)
    }

    function jd() {
      let dd;
      const Jd = new bd;
      return {
        onCreate(Jd) {
          dd = Jd
        },
        onReceivedMessageFromServer(kd, pd) {
          kd === Pd.D && Jd.start(dd, pd)
        },
        onAfterRender(kd) {
          Jd.onAfterRender(dd, kd)
        },
        onClose() {
          Jd.dispose(dd)
        }
      }
    }

    function Xd(dd, Jd, kd, pd) {
      return {
        dialogue: vd(pd.localPlayerId),
        fishing: Rd(pd.localPlayerId),
        furnaceSmoke: jd(),
        ironChest: Nd()
      }
    }

    function fd(dd, Jd) {
      for (const Nd of [dd, ...null !== Jd && void 0 !== Jd ? Jd : []]) try {
        var kd;
        null === Nd || void 0 === Nd || null === (kd = Nd.onClose) || void 0 === kd || kd.call(Nd)
      } catch (pd) {
        console.error("Error in client onClose callback", pd)
      }
    }
  },
  39287: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd,
      g: () => Wd
    });
    const pd = 1 / .6,
      Nd = {
        kind: "smokePuff"
      };
    class Wd {
      constructor(dd, Jd, kd) {
        this.style = dd, this.oo = Jd, this.half = kd, this.particles = null, this.lastFrame = -1
      }
      emit(dd, Jd, kd) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return kd !== this.lastFrame && (this.lastFrame = kd, this.particles || (this.particles = dd.createParticles(function(dd, Jd) {
          const [
            [kd, Wd, Pd],
            [Zd, gd, Cd]
          ] = dd.colours;
          return {
            texture: dd.soft ? Nd : "square_particle",
            oo: Jd,
            minLifeTime: dd.life[0] / pd,
            maxLifeTime: dd.life[1] / pd,
            minEmitPower: dd.power[0] * pd,
            maxEmitPower: dd.power[1] * pd,
            minSize: dd.size[0],
            maxSize: dd.size[1],
            emitRate: 0,
            gravity: [0, dd.lift * pd * pd, 0],
            dir1: [-dd.spread, 1, -dd.spread],
            dir2: [dd.spread, 1, dd.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [kd, Wd, Pd, dd.alpha],
              maxColor: [Zd, gd, Cd, dd.alpha]
            }, {
              timeFraction: 1,
              minColor: [kd, Wd, Pd, 0],
              maxColor: [Zd, gd, Cd, 0]
            }],
            blendMode: dd.blendMode
          }
        }(this.style, this.oo), {
          pos: Jd,
          half: this.half
        })), this.particles.moveTo(Jd, this.half), this.particles.emit(Wd), !0)
      }
      dispose() {
        var dd;
        null === (dd = this.particles) || void 0 === dd || dd.stop(), this.particles = null
      }
    }
  },
  4733: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      f: () => pd,
      i: () => Wd,
      k: () => gd,
      m: () => Pd
    });
    const pd = ["sine", "triangle", "square", "sawtooth"],
      Nd = 55,
      Wd = {
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

    function Pd(dd) {
      return "string" !== typeof dd ? dd : Object.hasOwn(Wd, dd) ? Wd[dd] : null
    }

    function Zd(dd, Jd, kd) {
      return Math.min(kd, Math.max(Jd, dd))
    }

    function gd(dd) {
      const Jd = Zd(dd.durationMs, 10, 500),
        kd = Zd(dd.attackMs, 0, Jd),
        {
          intonation: Nd
        } = dd;
      return {
        waveform: pd.includes(dd.waveform) ? dd.waveform : "sine",
        pitchHz: Zd(dd.pitchHz, 20, 4e3),
        glideSemitones: Zd(dd.glideSemitones, -24, 24),
        durationMs: Jd,
        attackMs: kd,
        releaseMs: Zd(dd.releaseMs, 0, Jd - kd),
        lowpassHz: null === dd.lowpassHz ? null : Zd(dd.lowpassHz, 20, 2e4),
        volume: Zd(dd.volume, 0, 2),
        intonation: {
          variationSemitones: Zd(Nd.variationSemitones, 0, 6),
          declineSemitones: Zd(Nd.declineSemitones, 0, 12),
          questionRiseSemitones: Zd(Nd.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Zd(Nd.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Zd(dd.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);