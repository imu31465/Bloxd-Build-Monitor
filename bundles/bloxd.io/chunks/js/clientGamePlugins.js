export const id = 32;
export const ids = [32];
export const modules = {
  39973: (ee, ie, He) => {
    function ye(ee) {
      return void 0 === ee ? void 0 : [ee[0], ee[1], ee[2]]
    }

    function be(ee) {
      const ie = ee.particles;
      return {
        opts: {
          texture: ie.texture,
          bk: ie.bk,
          minLifeTime: ie.minLifeTime,
          maxLifeTime: ie.maxLifeTime,
          minSize: ie.minSize,
          maxSize: ie.maxSize,
          minEmitPower: ie.minEmitPower,
          maxEmitPower: ie.maxEmitPower,
          emitRate: ie.emitRate,
          gravity: ye(ie.gravity),
          dir1: ye(ie.dir1),
          dir2: ye(ie.dir2),
          colorGradients: ie.colorGradients,
          blendMode: ie.blendMode
        },
        half: [ie.width / 2, ie.height / 2, ie.depth / 2]
      }
    }
    He.d(ie, {
      d: () => be
    })
  },
  39925: (ee, ie, He) => {
    He.d(ie, {
      e: () => Me,
      i: () => Je,
      m: () => Fe,
      o: () => Ke
    });
    var ye = He(198);
    const be = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2":[0.2,-1,0.2],"emitRate":12,"gravity":[0,-1.5,0],"height":0.2,"maxEmitPower":0.6,"maxLifeTime":2.5,"maxSize":0.15,"minEmitPower":0.3,"minLifeTime":1.5,"minSize":0.08,"texture":"snowflake","width":3}}}'),
      Me = "PetRoot";
    let Ke = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0},"pet_reindeer2":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset":[0.9,1.7,-0.2],"followStiffness":8,"model":"pet_reindeer","nametagRaise":0.6,"perchOffset":[0,0.02,0],"scale":0.45,"yawOffset":0}}'),
      Ue = be;
    new Map, new Map;

    function Fe(ee) {
      var ie;
      return null !== (ie = (0, ye.b)(Ke, ee)) && void 0 !== ie ? ie : null
    }

    function Je(ee) {
      var ie;
      return null !== (ie = (0, ye.b)(Ue, ee)) && void 0 !== ie ? ie : null
    }
  },
  39980: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye,
      f: () => be,
      j: () => Me
    });
    class ye {
      constructor() {
        this.pose = {
          pos: [0, 0, 0],
          yaw: 0,
          mode: "flying",
          seated: !1,
          clip: void 0
        }, this.Op = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
      }
      step(ee) {
        var ie;
        const {
          feet: He,
          heading: ye,
          tuning: Ke
        } = ee, Ue = Math.min(Math.max(ee.dt, 0), .1), {
          pose: Fe,
          Op: Je,
          target: oe
        } = this;
        if (this.started && Ue > 0) {
          const ee = Math.hypot(He[0] - this.lastFeet[0], He[1] - this.lastFeet[1], He[2] - this.lastFeet[2]);
          this.speed += (ee / Ue - this.speed) * Math.min(Ue / .15, 1)
        }
        this.lastFeet[0] = He[0], this.lastFeet[1] = He[1], this.lastFeet[2] = He[2], this.stillS = this.speed > .3 ? 0 : this.stillS + Ue;
        const Re = this.stillS >= .6 ? "perched" : "flying";
        "flying" === Re && "perched" === Fe.mode && (this.sinceTakeOffS = 0, this.perchLocked = !1), this.sinceTakeOffS += Ue, Fe.mode = Re;
        const ke = Math.sin(ye),
          qe = Math.cos(ye);
        "perched" === Re ? (Me(oe, He, Ke.perchOffset, ke, qe), oe[1] += ee.headTopY - He[1]) : (Me(oe, He, Ke.followOffset, ke, qe), oe[1] += be(Ke, ee.timeS));
        const {
          pos: fe
        } = Fe, Te = Math.hypot(oe[0] - fe[0], oe[1] - fe[1], oe[2] - fe[2]);
        if (!this.started || Te > 8 || "perched" === Re && (this.perchLocked || Te < .05)) this.perchLocked = this.started && "perched" === Re, fe[0] = oe[0], fe[1] = oe[1], fe[2] = oe[2], Je[0] = Je[1] = Je[2] = 0;
        else {
          const ee = Ke.followStiffness;
          for (let ie = 0; ie < 3; ie++) Je[ie] += (ee * ee * (oe[ie] - fe[ie]) - 2 * ee * Je[ie]) * Ue, fe[ie] += Je[ie] * Ue
        }
        const pe = ye + Ke.yawOffset;
        var Xe;
        return this.started ? Fe.yaw += ((Xe = pe - Fe.yaw) - 2 * Math.PI * Math.round(Xe / (2 * Math.PI))) * Math.min(8 * Ue, 1) : Fe.yaw = pe, this.started = !0, Fe.seated = "perched" === Re && this.perchLocked, Fe.clip = null === (ie = Ke.clips) || void 0 === ie ? void 0 : ie[this.gH(Re)], Fe
      }
      reset() {
        this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
      }
      gH(ee) {
        return "perched" === ee ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
      }
    }

    function be(ee, ie) {
      return ee.bobAmplitude * Math.sin(2 * Math.PI * ee.bobHz * ie)
    }

    function Me(ee, ie, He, ye, be) {
      const [Me, Ke, Ue] = He;
      ee[0] = ie[0] + Me * be + Ue * ye, ee[1] = ie[1] + Ke, ee[2] = ie[2] - Me * ye + Ue * be
    }
  },
  5319: (ee, ie, He) => {
    He.d(ie, {
      e: () => ae,
      g: () => Ve
    });
    var ye = He(5326),
      be = He(335);
    const Me = 120,
      Ke = 260,
      Ue = 1.15,
      Fe = 1.2,
      Je = 2,
      oe = 1.08,
      Re = .8,
      ke = .95,
      qe = 8,
      fe = "[\"')\\]\u300d\u300f\uff09]*",
      Te = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${fe}$`),
      pe = new RegExp(`[?\uff1f]${fe}$`),
      Xe = new RegExp(`[!\uff01]${fe}$`),
      ze = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Be = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Ee = new RegExp(`[${Be}]`),
      ge = new RegExp(`[${Be}]|[^${Be}]+`, "g"),
      Oe = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function de(ee) {
      let ie = 2166136261;
      for (let He = 0; He < ee.length; He++) ie ^= ee.charCodeAt(He), ie = Math.imul(ie, 16777619);
      return (ie >>> 0) / 4294967295 * 2 - 1
    }

    function We(ee) {
      var ie;
      if (Ee.test(ee)) return 1;
      const He = ee.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        ye = He.replace(/[^0-9]/g, "");
      if (ye.length > 0 && !/\p{L}/u.test(He)) return Math.min(ye.length, 4);
      const be = null !== (ie = He.match(Oe)) && void 0 !== ie ? ie : [];
      if (0 === be.length) {
        var Me, Ke;
        const ee = null !== (Me = null === (Ke = He.match(/\p{L}/gu)) || void 0 === Ke ? void 0 : Ke.length) && void 0 !== Me ? Me : 0;
        return 0 === ee ? 0 : Math.min(Math.max(1, Math.round(ee / 2.5)), qe)
      }
      const Ue = He.replace(/[^\p{L}]/gu, ""),
        Fe = be.length > 1 && "e" === be.at(-1) && Ue.endsWith("e") && !Ue.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(ee.replace(/[^\p{L}]/gu, ""));
      return Math.min(be.length - (Fe ? 1 : 0), qe)
    }

    function te(ee) {
      return ee.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ze(ee) {
      const ie = ee.replace(/[^\p{L}]/gu, "");
      return ie.length >= 2 && ie === ie.toUpperCase() && ie !== ie.toLowerCase()
    }

    function we(ee, ie) {
      var He;
      const qe = ie && (0, ye.l)(ie),
        fe = null !== (He = null === qe || void 0 === qe ? void 0 : qe.syllableMs) && void 0 !== He ? He : ye.d,
        Be = function(ee) {
          const ie = [];
          for (const ye of (0, be.kc)(ee))
            if ("string" === typeof ye)
              for (const ee of ye.split(/(\s+)/)) {
                if ("" === ee) continue;
                if (/^\s+$/.test(ee)) {
                  ie.push({
                    kind: "space",
                    text: ee
                  });
                  continue
                }
                if (!Ee.test(ee)) {
                  ie.push({
                    kind: "word",
                    text: ee,
                    delayMs: 0
                  });
                  continue
                }
                let ye = !0;
                for (const be of null !== (He = ee.match(ge)) && void 0 !== He ? He : []) {
                  var He;
                  const ee = ie.at(-1);
                  ye || "word" !== (null === ee || void 0 === ee ? void 0 : ee.kind) || Ee.test(be) || /[\p{L}\p{N}]/u.test(be) ? (ye || ie.push({
                    kind: "space",
                    text: "\u200b"
                  }), ie.push({
                    kind: "word",
                    text: be,
                    delayMs: 0
                  }), ye = !1) : ee.text += be
                }
              } else ie.push({
                kind: "icon",
                text: ye.icon,
                delayMs: 0
              });
          return ie
        }(ee),
        Oe = [];
      let we = [];
      for (const ye of Be) "space" !== ye.kind && (we.push(ye), Te.test(ye.text) && (Oe.push(we), we = []));
      Oe.push(we);
      const De = [];
      let Pe = 0;
      for (const ye of Oe) {
        var Ae, Ye;
        const ee = null !== (Ae = null === (Ye = ye.at(-1)) || void 0 === Ye ? void 0 : Ye.text) && void 0 !== Ae ? Ae : "",
          ie = pe.test(ee),
          He = Xe.test(ee),
          be = ye.map((ee => "word" === ee.kind ? We(ee.text) : 1)),
          Be = be.findLastIndex((ee => ee > 0));
        for (const [pe, Xe] of ye.entries()) {
          const ee = "word" === Xe.kind,
            ye = be[pe];
          Xe.delayMs = Pe;
          for (let be = 0; qe && be < ye; be++) {
            const {
              intonation: Me
            } = qe;
            let Ke = Be > 0 ? -Me.declineSemitones * (pe / Be) : 0;
            Ke += de(`${te(Xe.text)}|${be}`) * Me.variationSemitones;
            const Te = Math.min(1, Me.variationSemitones);
            let ze = qe.glideSemitones,
              Ee = 1;
            He && (Ke += Me.exclaimLiftSemitones, Ee *= Ue), ie && pe === Be && (Ke += Me.questionRiseSemitones * (ye > 1 ? .5 + .5 * be / (ye - 1) : 1), be === ye - 1 && (ze = Math.abs(ze) + Me.questionRiseSemitones / 2)), ee && Ze(Xe.text) && (Ke += Je * Te, Ee *= Fe), ye > 1 && 0 === be && (Ke += Re * Te, Ee *= oe), De.push({
              atMs: Pe + be * fe,
              semitones: Ke,
              glideSemitones: ze,
              durationMs: be < ye - 1 ? Math.min(qe.durationMs, fe * ke) : qe.durationMs,
              level: Ee
            })
          }
          Pe += ye * fe + (Te.test(Xe.text) ? Ke : ze.test(Xe.text) ? Me : 0)
        }
      }
      return {
        pieces: Be.map((ee => "space" === ee.kind ? ee : "icon" === ee.kind ? {
          kind: "icon",
          icon: ee.text,
          delayMs: ee.delayMs
        } : {
          kind: "word",
          text: ee.text,
          delayMs: ee.delayMs
        })),
        blips: De
      }
    }
    var De = He(1127),
      Pe = He(1196),
      Ae = He(1988);

    function Ye(ee) {
      if ("string" === typeof ee) return ee;
      const ie = Pe.f.get().getCurrentLanguageCode();
      return (0, De.o)(ie, ee.translationKey, (0, De.m)(ee.params, Ae.c.shown))
    }

    function Ve(ee) {
      const ie = void 0 === ee.voice ? null : (0, ye.n)(ee.voice),
        He = ie && (0, ye.l)(ie);
      return {
        plan: we(Ye(ee.line), He),
        synth: He
      }
    }

    function ae(ee) {
      const ie = [];
      let He = [];
      for (const [be, Me] of ee.entries()) {
        var ye;
        "space" === Me.kind && (" " !== Me.text || "icon" !== (null === (ye = ee[be + 1]) || void 0 === ye ? void 0 : ye.kind)) ? (He.length > 0 && ie.push(He), ie.push([Me]), He = []) : He.push(Me)
      }
      return He.length > 0 && ie.push(He), ie
    }
  },
  5333: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Re
    });
    var ye = He(5338),
      be = He(18);
    const Me = .25,
      Ke = .85,
      Ue = .02,
      Fe = .01;

    function Je(ee, ie, He, ye, be, Me, Ue) {
      const {
        waveform: Fe,
        pitchHz: Je,
        attackMs: oe,
        releaseMs: Re,
        lowpassHz: ke
      } = He, qe = be + ye.durationMs / 1e3, fe = Je * 2 ** (ye.semitones / 12), Te = ee.createOscillator();
      Te.type = Fe, Te.frequency.setValueAtTime(fe, be), Te.frequency.exponentialRampToValueAtTime(fe * 2 ** (ye.glideSemitones / 12), qe);
      const pe = be + Math.min(oe, ye.durationMs) / 1e3,
        Xe = ee.createGain();
      Xe.gain.setValueAtTime(0, be), Xe.gain.linearRampToValueAtTime(Me, pe), Xe.gain.linearRampToValueAtTime(Me * Ke, Math.max(pe, qe - Re / 1e3)), Xe.gain.linearRampToValueAtTime(0, qe);
      const ze = [Te];
      if (null !== ke) {
        const ie = ee.createBiquadFilter();
        ie.type = "lowpass", ie.frequency.value = ke, ze.push(ie)
      }
      ze.push(Xe, ie);
      for (let Ke = 1; Ke < ze.length; Ke++) ze[Ke - 1].connect(ze[Ke]);
      return Te.onended = () => {
        for (const ee of ze.slice(0, -1)) ee.disconnect();
        Ue()
      }, Te.start(be), Te.stop(qe), Te
    }

    function oe(ee, ie, He, ye, be, Ke) {
      if (0 === ye.length) return Ke(), () => {};
      const oe = Me * He.volume * be,
        Re = ee.createGain();
      Re.connect(ie);
      const ke = ee.currentTime + Ue,
        qe = new Set;
      for (const Me of ye) {
        const ie = Je(ee, Re, He, Me, ke + Me.atMs / 1e3, oe * Me.level, (() => {
          qe.delete(ie), 0 === qe.size && (Re.disconnect(), Ke())
        }));
        qe.add(ie)
      }
      return () => {
        const ie = ee.currentTime;
        Re.gain.setTargetAtTime(0, ie, Fe);
        for (const ee of qe) try {
          ee.stop(ie + 5 * Fe)
        } catch {}
      }
    }

    function Re(ee, ie) {
      var He;
      const Me = ye.Howler.ctx,
        Ke = ye.Howler.masterGain;
      if (!Me || !Ke || !be.e.get("soundOnFromAd")) return () => {};
      const Ue = ye.Howler;
      return null === (He = Ue._autoResume) || void 0 === He || He.call(Ue), oe(Me, Ke, ee, ie, be.e.get("soundVolume"), (() => {
        var ee;
        null === (ee = Ue._autoSuspend) || void 0 === ee || ee.call(Ue)
      }))
    }
  },
  39956: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      closeClientGame: () => Ri,
      createDefaultClientPlugins: () => oi
    });
    var ye = He(347);

    function be() {
      let ee;
      return {
        onCreate(ie) {
          ee = ie
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(ie, He, be, Me, Ke, Ue) {
          var Fe, Je;
          if ("Iron Chest" !== ee.getMetaInfo(Ke).rootName) return;
          if (!ee.hasEffect(ie, "Thief")) return;
          const oe = ee.getBlockData(He, be, Me);
          return ee.getPlayerDbId(ie) !== (null === oe || void 0 === oe || null === (Fe = oe.persisted) || void 0 === Fe || null === (Je = Fe.shared) || void 0 === Je ? void 0 : Je.ownerDbId) ? (ee.sendMessage(ie, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: ye.L.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var Me = He(4598),
      Ke = He(1189);
    const Ue = 8.4,
      Fe = 1e-4,
      Je = .15,
      oe = .04,
      Re = [.12, .04, .12],
      ke = 26,
      qe = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        bk: 1,
        minLifeTime: Fe,
        maxLifeTime: Fe,
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
        blendMode: Me.e.Standard
      },
      fe = {
        texture: "bubble",
        mipmaps: !1,
        bk: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: ke,
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
        blendMode: Me.e.Standard
      },
      Te = [0, 0, 0],
      pe = [0, 0, 0];

    function Xe(ee) {
      const ie = new Map;
      let He = null;

      function ye(ee) {
        var ie, He;
        null === (ie = ee.bubbles) || void 0 === ie || ie.stop(), null === (He = ee.fish) || void 0 === He || He.stop()
      }

      function be(He) {
        if (!He.readDrawnPosition(ee, pe)) {
          for (const ee of ie.values()) {
            var ye;
            null === (ye = ee.bubbles) || void 0 === ye || ye.setEmitRate(0)
          }
          return
        }
        const be = performance.now();
        for (const [ee, Ke] of ie) {
          var Me;
          if (null === (Me = Ke.bubbles) || void 0 === Me || Me.setEmitRate(0), !He.readDrawnPosition(ee, Te)) continue;
          if (!((Te[0] - pe[0]) ** 2 + (Te[1] - pe[1]) ** 2 + (Te[2] - pe[2]) ** 2 < 900)) continue;
          const ie = Math.max(0, Ke.biteAt - be),
            ye = Ke.approachDurationMs > 0 ? Math.min(1, 1 - ie / Ke.approachDurationMs) : 1,
            Fe = (Ke.approachDurationMs - ie) / 1e3,
            Xe = Ke.phase + .25 * Math.sin(1.7 * Fe + Ke.phase),
            ze = Math.min(Ke.approachDurationMs / 3e3 * 2.8, Ue) * (1 - ye) * (1 + .15 * Math.sin(2.1 * Fe + Ke.phase)),
            Be = Math.min(1, 4 * (1 - ye)),
            Ee = (.45 * Math.sin(4.1 * Fe + Ke.phase) + .18 * Math.sin(9.7 * Fe + 2 * Ke.phase)) * Be,
            ge = Te[0] + Math.cos(Xe) * ze - Math.sin(Xe) * Ee,
            Oe = Math.ceil(Ke.surfaceY),
            de = Te[2] + Math.sin(Xe) * ze + Math.cos(Xe) * Ee,
            {
              fishAt: We,
              bubblesAt: te
            } = Ke;
          We[0] = te[0] = ge, We[1] = Oe + Je, te[1] = Oe + oe, We[2] = te[2] = de, Ke.fish ??= He.createParticles(qe, {
            pos: We
          }), Ke.fish.moveTo(We), Ke.fish.emit(1), Ke.bubbles ??= He.createParticles(fe, {
            pos: te,
            half: Re
          }), Ke.bubbles.moveTo(te), Ke.bubbles.setEmitRate(ke + 32 * (.5 + .5 * Math.sin(9 * Fe + Ke.phase)) ** 4 + 13 * ye)
        }
      }
      return {
        onCreate(ee) {
          He = ee
        },
        onAfterRender() {
          He && be(He)
        },
        onClose() {
          for (const ee of ie.values()) ye(ee);
          ie.clear(), He = null
        },
        onReceivedMessageFromServer(ee, He) {
          if (ee !== Ke.B) return;
          const {
            hookId: be,
            waiting: Me
          } = He;
          if (Me) ie.has(be) || ie.set(be, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + Me.remainingMs,
            approachDurationMs: Me.durationMs,
            surfaceY: Me.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const ee = ie.get(be);
            ee && ye(ee), ie.delete(be)
          }
        }
      }
    }
    var ze = He(5333),
      Be = He(5319);

    function Ee(ee) {
      let ie, He = null,
        ye = null;
      const be = () => {
        var ee;
        null === (ee = ye) || void 0 === ee || ee(), ye = null
      };
      return {
        onCreate(ye) {
          ie = ye, He = ie.getClientOption(ee, "dialogue")
        },
        onAfterRender() {
          if (!ie) return;
          const Me = ie.getClientOption(ee, "dialogue");
          if (Me === He) return;
          if (He = Me, be(), !Me || !1 === Me.animateIn) return;
          const {
            plan: Ke,
            synth: Ue
          } = (0, Be.g)(Me);
          Ue && (ye = (0, ze.f)(Ue, Ke.blips))
        },
        onClose: be
      }
    }
    var ge = He(39965);
    const Oe = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      de = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      We = [0, 1, 2, 0, 2, 3];

    function te(ee, ie, He) {
      var ye;
      let [be, Me, Ke] = ie;
      if (ee.hasPackModel("Furnace")) return null;
      const Ue = ((null !== (ye = ee.getMetaInfo(He).rot) && void 0 !== ye ? ye : 1) - 1) * Math.PI / 2,
        Fe = Math.PI + Ue,
        Je = Math.cos(Fe),
        oe = Math.sin(Fe),
        Re = [];
      for (const [fe, Te] of Oe) Re.push(fe * Je, Te, -fe * oe);
      const ke = {
          positions: Re,
          indices: We,
          uvs: de
        },
        qe = [be + .5 + .51 * Math.sin(Ue), Me + .375, Ke + .5 + .51 * Math.cos(Ue)];
      return ee.createGameMesh(ke, {
        kind: "furnaceFire"
      }, qe)
    }

    function Ze(ee) {
      return Math.floor(ee / 200) % 3
    }

    function we(ee, ie, He) {
      ee.setGameMesh(ie, {
        uvOffset: [0, He / 3]
      })
    }
    const De = [.12, .025, .12],
      Pe = [{
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
          blendMode: Me.e.Standard,
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
          blendMode: Me.e.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Ae {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(ee, ie) {
        const He = ee.getBlockId(ie[0], ie[1], ie[2]);
        if ("Furnace" !== ee.getMetaInfo(He).rootName) return;
        const ye = performance.now();
        let be = this.smokes.find((ee => ee.pos[0] === ie[0] && ee.pos[1] === ie[1] && ee.pos[2] === ie[2] && ee.po === He));
        if (be || (be = {
            pos: [ie[0], ie[1], ie[2]],
            po: He,
            endMs: ye,
            lastBurstMs: -1 / 0,
            pending: new Array(Pe.length).fill(0),
            fire: te(ee, ie, He)
          }, this.smokes.push(be), null !== be.fire && (we(ee, be.fire, Ze(ye)), this.shownFireFrame = -1)), be.endMs = ye + 6e3, this.smokes.length > 4) {
          const ie = this.smokes.reduce(((ee, ie) => ie.endMs < ee.endMs ? ie : ee));
          Ye(ee, ie), this.smokes.splice(this.smokes.indexOf(ie), 1)
        }
        ye - be.lastBurstMs >= 300 && (be.lastBurstMs = ye, Pe.forEach(((ee, ie) => {
          be.pending[ie] += ee.style.count
        })))
      }
      onAfterRender(ee, ie) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const He = performance.now();
        this.smokes = this.smokes.filter((ie => {
          const [ye, be, Me] = ie.pos, Ke = He < ie.endMs && ee.getBlockId(ye, be, Me) === ie.po;
          return Ke || Ye(ee, ie), Ke
        }));
        const ye = Ze(He);
        if (ye !== this.shownFireFrame) {
          this.shownFireFrame = ye;
          for (const ie of this.smokes) null !== ie.fire && we(ee, ie.fire, ye)
        }
        if (!ee.particlesEnabled()) {
          for (const ee of this.smokes) ee.pending.fill(0);
          return
        }
        const be = Math.min(ie, 250) / 1e3;
        for (const Me of this.smokes) {
          const [ie, ye, Ke] = Me.pos;
          if (0 !== ee.getBlockId(ie, ye + 1, Ke)) {
            Me.pending.fill(0);
            continue
          }
          const Ue = (Me.endMs - He) / 6e3,
            Fe = this.centre;
          Fe[0] = ie + .5, Fe[1] = ye + 1.275, Fe[2] = Ke + .5, Pe.forEach(((ie, He) => {
            Me.pending[He] += ie.perSecond * Ue * be;
            const ye = Math.floor(Me.pending[He]);
            ye > 0 && this.emit(ee, He, Fe, ye) && (Me.pending[He] -= ye)
          }))
        }
      }
      dispose(ee) {
        for (const He of this.smokes) Ye(ee, He);
        this.smokes = [];
        for (const He of null !== (ie = this.puffers) && void 0 !== ie ? ie : []) {
          var ie;
          He.dispose()
        }
        this.puffers = null
      }
      emit(ee, ie, He, ye) {
        return this.puffers ??= Pe.map((ee => {
          let {
            style: ie,
            perSecond: He
          } = ee;
          const ye = (ie.count / .3 + He) * ie.life[1];
          return new ge.e(ie, Math.ceil(4 * ye), De)
        })), this.puffers[ie].emit(ee, He, this.renderFrame, ye)
      }
    }

    function Ye(ee, ie) {
      null !== ie.fire && (ee.disposeGameMesh(ie.fire), ie.fire = null)
    }

    function Ve() {
      let ee;
      const ie = new Ae;
      return {
        onCreate(ie) {
          ee = ie
        },
        onReceivedMessageFromServer(He, ye) {
          He === Ke.F && ie.start(ee, ye)
        },
        onAfterRender(He) {
          ie.onAfterRender(ee, He)
        },
        onClose() {
          ie.dispose(ee)
        }
      }
    }
    var ae = He(186),
      ce = He(39925),
      xe = He(39973),
      Le = He(39980);
    class Ce {
      constructor(ee, ie, He) {
        this.api = ee, this.wearer = ie, this.name = He, this.model = null, this.madeFrom = null, this.perchedWith = null, this.motion = new Le.d, this.shown = !1, this.raised = 0
      }
      update(ee) {
        var ie;
        const He = (0, ce.m)(this.name);
        if (!He) return void this.dispose();
        if (!this.madeFrom || this.madeFrom.model === He.model && this.madeFrom.scale === He.scale || this.freeModel(), !this.model && (this.model = this.api.createCosmeticModel(He.model, He.scale), this.madeFrom = He, !this.model)) return void this.raiseNametag(0);
        if (!(ee.drawn && !ee.ownFirstPerson)) return this.setShown(!1), this.raiseNametag(0), void this.motion.reset();
        const ye = this.motion.step({
          dt: ee.dt,
          feet: ee.feet,
          heading: ee.heading,
          headTopY: ee.headTopY,
          tuning: He,
          timeS: ee.timeS
        });
        this.model.setPose(ye.pos, ye.yaw + Math.PI), this.model.setClip(null !== (ie = ye.clip) && void 0 !== ie ? ie : null);
        const be = ye.seated ? He : null;
        be !== this.perchedWith && (this.perchedWith = be, this.model.setPerch(be && {
          XH: this.wearer,
          offset: be.perchOffset,
          yaw: be.yawOffset
        })), this.setShown(!0), this.raiseNametag(He.nametagRaise)
      }
      refreshNametag() {
        0 !== this.raised && this.api.setNametagOffset(this.wearer, this.raised)
      }
      dispose() {
        this.freeModel(), this.raiseNametag(0)
      }
      raiseNametag(ee) {
        ee !== this.raised && (this.raised = ee, this.api.setNametagOffset(this.wearer, ee))
      }
      freeModel() {
        var ee;
        null === (ee = this.model) || void 0 === ee || ee.dispose(), this.model = null, this.madeFrom = null, this.perchedWith = null, this.shown = !1, this.motion.reset()
      }
      setShown(ee) {
        this.model && ee !== this.shown && (this.shown = ee, this.model.setVisible(ee))
      }
    }
    class ve {
      constructor(ee, ie) {
        this.api = ee, this.name = ie, this.particles = null, this.madeFrom = null, this.half = [0, 0, 0], this.emitting = !0, this.centre = [0, 0, 0]
      }
      update(ee) {
        const ie = (0, ce.i)(this.name);
        if (ie !== this.madeFrom && this.stop(), !ie) return;
        const He = ee.ownFirstPerson ? ie.ownInFirstPerson : ee.drawn;
        if (He) {
          const {
            centre: He
          } = this;
          if ((0, Le.j)(He, ee.feet, ie.offset, Math.sin(ee.heading), Math.cos(ee.heading)), this.particles) this.particles.moveTo(He, this.half);
          else {
            const ee = (0, xe.d)(ie);
            this.half = ee.half, this.particles = this.api.createParticles(ee.opts, {
              pos: He,
              half: ee.half
            }), this.madeFrom = ie, this.emitting = !0
          }
        }
        this.particles && He !== this.emitting && (this.emitting = He, this.particles.setEmitRate(He ? ie.particles.emitRate : 0))
      }
      stop() {
        var ee;
        null === (ee = this.particles) || void 0 === ee || ee.stop(), this.particles = null, this.madeFrom = null
      }
    }
    const ue = .25,
      me = 48,
      le = 4,
      Se = 24,
      ne = 12,
      je = .6,
      se = 1 / ae.g.playerEyeToHeightRatio;

    function Ie(ee, ie, He) {
      const ye = ee.filter((ee => ee[ie] <= me));
      return ye.sort(((ee, He) => ee[ie] - He[ie])), new Set(ye.slice(0, He).map((ee => ee.id)))
    }

    function he() {
      let ee;
      const ie = new Map;
      let He = 0,
        ye = 0;
      const be = [0, 0, 0],
        Me = {
          feet: be,
          heading: 0,
          headTopY: 0,
          drawn: !1,
          ownFirstPerson: !1,
          dt: 0,
          timeS: 0
        };

      function Ke(ee) {
        var ie, He;
        null === (ie = ee.pet) || void 0 === ie || ie.dispose(), null === (He = ee.aura) || void 0 === He || He.stop()
      }

      function Ue(ie, He) {
        var ye, Ke;
        const {
          id: Ue
        } = ie, Fe = ee.readDrawnPosition(Ue, be) ? ee.getDrawnHeading(Ue) : null, Je = null === Fe ? null : ee.getDrawnEyeHeight(Ue);
        if (null === Fe || null === Je) Me.drawn = !1, Me.ownFirstPerson = !1;
        else {
          const ie = He.cameraPosition;
          Me.heading = Fe, Me.headTopY = be[1] + Je * se, Me.drawn = ee.isAlive(Ue) && ee.isEntityDrawn(Ue), Me.ownFirstPerson = ee.isLocalPlayer(Ue) && ee.isAlive(Ue) && Math.hypot(ie[0] - be[0], ie[1] - be[1] - Je, ie[2] - be[2]) < je
        }
        null === (ye = ie.pet) || void 0 === ye || ye.update(Me), null === (Ke = ie.aura) || void 0 === Ke || Ke.update(Me)
      }
      return {
        onCreate(ie) {
          ee = ie
        },
        onAfterRender(Fe, Je) {
          const oe = Fe / 1e3;
          ye += oe, He -= oe, He <= 0 && (He = ue, function(He) {
            const ye = [];
            for (const Ke of ee.getPlayerIds()) {
              const Me = ee.getPlayerCosmetics(Ke),
                Ue = void 0 !== (null === Me || void 0 === Me ? void 0 : Me.pet) && (0, ce.m)(Me.pet) ? Me.pet : null,
                Fe = void 0 !== (null === Me || void 0 === Me ? void 0 : Me.aura) && (0, ce.i)(Me.aura) ? Me.aura : null;
              if (null === Ue && null === Fe || !ee.readDrawnPosition(Ke, be)) continue;
              const Je = Math.hypot(be[0] - He[0], be[1] - He[1], be[2] - He[2]),
                oe = ie.get(Ke);
              ye.push({
                id: Ke,
                pet: Ue,
                aura: Fe,
                petDist: null === Ue ? 1 / 0 : Je - (null !== oe && void 0 !== oe && oe.pet ? le : 0),
                auraDist: null === Fe ? 1 / 0 : Je - (null !== oe && void 0 !== oe && oe.aura ? le : 0)
              })
            }
            const Me = Ie(ye, "petDist", Se),
              Ue = ee.particlesEnabled() ? Ie(ye, "auraDist", ne) : new Set,
              Fe = new Set;
            for (const {
                id: be,
                pet: Ke,
                aura: Te
              }
              of ye) {
              var Je, oe, Re;
              const He = null !== (Je = ie.get(be)) && void 0 !== Je ? Je : {
                  id: be,
                  pet: null,
                  aura: null
                },
                ye = Me.has(be) ? Ke : null,
                pe = Ue.has(be) ? Te : null;
              var ke, qe, fe;
              (null === (oe = He.pet) || void 0 === oe ? void 0 : oe.name) !== ye ? (null === (ke = He.pet) || void 0 === ke || ke.dispose(), He.pet = null === ye ? null : new Ce(ee, be, ye)) : null === (qe = He.pet) || void 0 === qe || qe.refreshNametag(), (null === (Re = He.aura) || void 0 === Re ? void 0 : Re.name) !== pe && (null === (fe = He.aura) || void 0 === fe || fe.stop(), He.aura = null === pe ? null : new ve(ee, pe)), (He.pet || He.aura) && (ie.set(be, He), Fe.add(be))
            }
            for (const [ee, be] of ie) Fe.has(ee) || (Ke(be), ie.delete(ee))
          }(Je.cameraPosition)), Me.dt = oe, Me.timeS = ye;
          for (const ee of ie.values()) Ue(ee, Je)
        },
        onClose() {
          for (const ee of ie.values()) Ke(ee);
          ie.clear()
        }
      }
    }
    var Ne = He(9453);
    const Ge = "skyblockLoot",
      re = "autoPickupClick";
    var Qe = He(1653);

    function ei(ee, ie) {
      return [{
        timeFraction: 0,
        minColor: [255 * ee[0], 255 * ee[1], 255 * ee[2], 1],
        maxColor: [255 * ie[0], 255 * ie[1], 255 * ie[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const ii = [0, 0, 0],
      Hi = {
        texture: "glint",
        mipmaps: !1,
        bk: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: ii,
        dir2: ii,
        blendMode: Me.e.OneOne
      },
      yi = {
        ...Hi,
        colorGradients: ei([1, .88, .38], [1, .65, .15])
      },
      bi = {
        ...Hi,
        colorGradients: ei([.55, .95, 1], [.9, 1, 1])
      },
      Mi = [.5, .5, .5],
      Ki = {
        texture: "glint",
        mipmaps: !1,
        bk: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: ei([1, .12, .12], [1, .35, .2]),
        blendMode: Me.e.OneOne
      };
    class Ui {
      constructor() {
        this.drops = new Map
      }
      DR(ee, ie) {
        if ("overflowFlash" === ie.kind) {
          const [He, ye, be] = ie.position, Me = ee.createParticles(Ki, {
            pos: [He, ye, be],
            half: Mi
          });
          return Me.emit(18), void Me.stop()
        }
        this.drops.has(ie.itemId) || this.drops.set(ie.itemId, {
          owner: ie.owner,
          cosmetic: ie.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      YR(ee) {
        if (0 === this.drops.size) return;
        const ie = performance.now(),
          He = ee.getCameraPosition();
        let ye = 0;
        for (const Me of this.drops.values()) null !== Me.particles && ye++;
        for (const [Me, Ke] of this.drops) {
          const Ue = ee.getPositionView(Me);
          if (null === Ue) {
            var be;
            if (Ke.seen || ie - Ke.markedAt > 5e3) null !== Ke.particles && ye--, null === (be = Ke.particles) || void 0 === be || be.stop(), this.drops.delete(Me);
            continue
          }
          Ke.cosmetic || !ee.isLocalPlayer(Ke.owner) || Ke.pickupDelayCleared || (ee.clearPickupDelay(Me), Ke.pickupDelayCleared = !0);
          const Fe = Ke.lastPosition,
            Je = Ke.seen && (Ue[0] - Fe[0]) ** 2 + (Ue[1] - Fe[1]) ** 2 + (Ue[2] - Fe[2]) ** 2 > 4e-4,
            oe = (Ue[0] - He[0]) ** 2 + (Ue[1] - He[1]) ** 2 + (Ue[2] - He[2]) ** 2 < 2025;
          Ke.seen = !0, Fe[0] = Ue[0], Fe[1] = Ue[1], Fe[2] = Ue[2], Je && (Ke.lastMovingAt = ie), null !== Ke.particles && (!oe || ie - Ke.lastMovingAt > 500) && (Ke.particles.stop(), Ke.particles = null, ye--), Je && oe && null === Ke.particles && ye < 32 && (Ke.particles = ee.createParticles(Ke.cosmetic ? bi : yi, {
            pos: Ue
          }), ye++), null !== Ke.particles && (Ke.particles.moveTo(Ue), Ke.particles.setEmitRate(Je ? 12 : 0)), !Je && null === Ke.particles && ie - Math.max(Ke.lastMovingAt, Ke.markedAt) > 2e3 && this.drops.delete(Me)
        }
      }
      dispose() {
        for (const ie of this.drops.values()) {
          var ee;
          null === (ee = ie.particles) || void 0 === ee || ee.stop()
        }
        this.drops.clear()
      }
    }
    const Fi = new Set;

    function Ji() {
      let ee;
      const ie = new Ui;
      return {
        onCreate(ie) {
          ee = ie
        },
        onReceivedMessageFromServer(He, ye) {
          if (He === Ge) ie.DR(ee, ye);
          else if (He === re) {
            const ee = ye,
              ie = `${ee.id}|${ee.value}`;
            Fi.has(ie) || (Fi.add(ie), (0, Qe.h)({
              id: ee.id,
              value: ee.value
            }))
          }
        },
        YR() {
          ie.YR(ee)
        },
        onClose() {
          ie.dispose()
        }
      }
    }

    function oi(ee, ie, He, ye) {
      return {
        cosmeticCompanions: he(),
        dialogue: Ee(ye.localPlayerId),
        fishing: Xe(ye.localPlayerId),
        furnaceSmoke: Ve(),
        ironChest: be(),
        localBlockBroken: (0, Ne.d)(),
        magnetLoot: Ji()
      }
    }

    function Ri(ee, ie) {
      for (const be of [ee, ...null !== ie && void 0 !== ie ? ie : []]) try {
        var He;
        null === be || void 0 === be || null === (He = be.onClose) || void 0 === He || He.call(be)
      } catch (ye) {
        console.error("Error in client onClose callback", ye)
      }
    }
  },
  9453: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      f: () => be
    });
    var ye = He(27);
    const be = "localBlockBroken";

    function Me() {
      return {
        onPlayerChangeBlock(ee, ie, He, Me, Ke, Ue) {
          "Air" === Ue && ye.h.yR(be)
        }
      }
    }
  },
  39965: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye,
      e: () => Me
    });
    const ye = 1 / .6,
      be = {
        kind: "smokePuff"
      };
    class Me {
      constructor(ee, ie, He) {
        this.style = ee, this.bk = ie, this.half = He, this.particles = null, this.lastFrame = -1
      }
      emit(ee, ie, He) {
        let Me = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return He !== this.lastFrame && (this.lastFrame = He, this.particles || (this.particles = ee.createParticles(function(ee, ie) {
          const [
            [He, Me, Ke],
            [Ue, Fe, Je]
          ] = ee.colours;
          return {
            texture: ee.soft ? be : "square_particle",
            bk: ie,
            minLifeTime: ee.life[0] / ye,
            maxLifeTime: ee.life[1] / ye,
            minEmitPower: ee.power[0] * ye,
            maxEmitPower: ee.power[1] * ye,
            minSize: ee.size[0],
            maxSize: ee.size[1],
            emitRate: 0,
            gravity: [0, ee.lift * ye * ye, 0],
            dir1: [-ee.spread, 1, -ee.spread],
            dir2: [ee.spread, 1, ee.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [He, Me, Ke, ee.alpha],
              maxColor: [Ue, Fe, Je, ee.alpha]
            }, {
              timeFraction: 1,
              minColor: [He, Me, Ke, 0],
              maxColor: [Ue, Fe, Je, 0]
            }],
            blendMode: ee.blendMode
          }
        }(this.style, this.bk), {
          pos: ie,
          half: this.half
        })), this.particles.moveTo(ie, this.half), this.particles.emit(Me), !0)
      }
      dispose() {
        var ee;
        null === (ee = this.particles) || void 0 === ee || ee.stop(), this.particles = null
      }
    }
  },
  5326: (ee, ie, He) => {
    He.d(ie, {
      d: () => be,
      h: () => ye,
      k: () => Me,
      l: () => Fe,
      n: () => Ke
    });
    const ye = ["sine", "triangle", "square", "sawtooth"],
      be = 55,
      Me = {
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

    function Ke(ee) {
      return "string" !== typeof ee ? ee : Object.hasOwn(Me, ee) ? Me[ee] : null
    }

    function Ue(ee, ie, He) {
      return Math.min(He, Math.max(ie, ee))
    }

    function Fe(ee) {
      const ie = Ue(ee.durationMs, 10, 500),
        He = Ue(ee.attackMs, 0, ie),
        {
          intonation: be
        } = ee;
      return {
        waveform: ye.includes(ee.waveform) ? ee.waveform : "sine",
        pitchHz: Ue(ee.pitchHz, 20, 4e3),
        glideSemitones: Ue(ee.glideSemitones, -24, 24),
        durationMs: ie,
        attackMs: He,
        releaseMs: Ue(ee.releaseMs, 0, ie - He),
        lowpassHz: null === ee.lowpassHz ? null : Ue(ee.lowpassHz, 20, 2e4),
        volume: Ue(ee.volume, 0, 2),
        intonation: {
          variationSemitones: Ue(be.variationSemitones, 0, 6),
          declineSemitones: Ue(be.declineSemitones, 0, 12),
          questionRiseSemitones: Ue(be.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ue(be.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ue(ee.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);