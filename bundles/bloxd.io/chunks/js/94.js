export const id = 94;
export const ids = [92, 93, 94];
export const modules = {
  36790: (dd, Jd, kd) => {
    function pd(dd, Jd, kd, pd) {
      return !(kd && !dd.aimable) && (!Jd || dd.gun && "head" !== pd)
    }

    function Nd(dd) {
      return Math.max(.1 * dd, 1)
    }

    function Wd(dd, Jd) {
      return !dd && Jd
    }
    kd.d(Jd, {
      e: () => Wd,
      i: () => Nd,
      j: () => pd
    })
  },
  36798: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Zd,
      i: () => Pd
    });
    let pd = null;
    const Nd = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Wd = {
        crosshairAccuracy: dd => {
          const Jd = Nd.crosshairAccuracy.at(-1);
          Jd ? Jd.hook(dd) : pd = dd
        },
        turnDamageIndicators: dd => {
          var Jd;
          null === (Jd = Nd.turnDamageIndicators.at(-1)) || void 0 === Jd || Jd.hook(dd)
        }
      };

    function Pd(dd, Jd) {
      const kd = {
          hook: Jd
        },
        Pd = Nd[dd];
      if (Pd.push(kd), "crosshairAccuracy" === dd && null !== pd) {
        const dd = pd;
        pd = null, Wd.crosshairAccuracy(dd)
      }
      return () => {
        const dd = Pd.indexOf(kd); - 1 !== dd && Pd.splice(dd, 1)
      }
    }

    function Zd() {
      return Wd
    }
  },
  36605: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      countDecodesAs: () => od,
      decodedAudio: () => ld
    });
    var pd = kd(36608),
      Nd = kd(4743);
    const Wd = Nd.Howler,
      Pd = new Map;
    let Zd = 0;
    const gd = {
        song: 0,
        sheet: 0
      },
      Cd = new WeakMap,
      Kd = new WeakSet;

    function od(dd, Jd) {
      return Cd.set(dd, Jd), dd
    }

    function ld() {
      return {
        bytes: Zd,
        songsDecoded: gd.song,
        sheetsDecoded: gd.sheet
      }
    }

    function Qd(dd) {
      if (Kd.has(dd)) return;
      Kd.add(dd);
      const Jd = 1 === dd.decodeAudioData.length,
        kd = dd.decodeAudioData.bind(dd);
      dd.decodeAudioData = (dd, pd, Nd) => {
        const Kd = dd => {
          const Jd = Wd._howls.filter((dd => "loaded" !== dd._state));
          try {
            null === pd || void 0 === pd || pd(dd)
          } finally {
            const kd = Jd.find((dd => "loaded" === dd._state));
            void 0 !== kd && "string" === typeof kd._src && function(dd, Jd, kd) {
              var pd;
              Zd += kd - (null !== (pd = Pd.get(Jd)) && void 0 !== pd ? pd : 0), Pd.set(Jd, kd);
              const Nd = Cd.get(dd);
              void 0 !== Nd && gd[Nd]++
            }(kd, kd._src, dd.length * dd.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return dd
        };
        if (!Jd) return kd(dd, Kd, Nd);
        const od = kd(dd).then(Kd);
        return od.catch((dd => {
          null === Nd || void 0 === Nd || Nd(dd)
        })), od
      }
    }(0, pd.e)(ld);
    const Ld = Nd.Howl.prototype,
      Od = Ld.init;
    Ld.init = function(dd) {
      return Nd.Howler.volume(), Wd.ctx && Qd(Wd.ctx), Od.call(this, dd)
    };
    const ed = Ld.unload;
    Ld.unload = function() {
      const dd = this._src,
        Jd = ed.call(this);
      if ("string" !== typeof dd) return Jd;
      const kd = Pd.get(dd);
      return void 0 !== kd && function(dd) {
        return !Wd._howls.some((Jd => Jd._src === dd || "string" === typeof Jd._src && dd.indexOf(Jd._src) >= 0))
      }(dd) && (Pd.delete(dd), Zd -= kd), Jd
    }
  },
  36608: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      e: () => Nd
    });
    let pd = null;

    function Nd(dd) {
      pd = dd
    }

    function Wd() {
      return null === pd ? null : pd()
    }
  },
  36960: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gd
    });
    var pd = kd(22),
      Nd = kd(36933),
      Wd = kd(4176),
      Pd = kd(36962),
      Zd = kd(4743);
    const gd = function(dd) {
      const Jd = new Set;
      return kd => {
        var pd;
        const Wd = null === (pd = [...Nd.d].find((dd => {
          let [, Jd] = dd;
          return Jd.includes(kd)
        }))) || void 0 === pd ? void 0 : pd[0];
        if (void 0 === Wd || Jd.has(Wd)) return;
        Jd.add(Wd);
        ! function(dd, Jd) {
          let {
            afterJoin: kd,
            joining: pd,
            idle: Nd,
            fetchFile: Wd
          } = Jd;
          const Pd = Jd => {
            Jd >= dd.length || kd((() => {
              Nd((() => {
                pd() ? Pd(Jd) : Wd(dd[Jd]).catch((() => {})).finally((() => {
                  Pd(Jd + 1)
                }))
              }))
            }))
          };
          Pd(0)
        }(Nd.d.get(Wd).filter((dd => dd !== kd)).flatMap((Jd => {
          const kd = (pd = (0, Nd.k)(Jd).src, Wd = dd.canPlay, pd.find((dd => {
            var Jd;
            const kd = null === (Jd = /\.([^.]+)$/.exec(dd.split("?", 1)[0])) || void 0 === Jd ? void 0 : Jd[1];
            return void 0 !== kd && Wd(kd.toLowerCase())
          })));
          var pd, Wd;
          return void 0 === kd ? [] : [kd]
        })), dd)
      }
    }({
      afterJoin: dd => {
        (0, Wd.c)(pd.d.get("gameState"), dd)
      },
      joining: () => (0, Wd.f)(pd.d.get("gameState")),
      idle: kd(256).c,
      fetchFile: Pd.c,
      canPlay: dd => !!Zd.Howler.codecs(dd)
    })
  },
  36962: (dd, Jd, kd) => {
    async function pd(dd) {
      const Jd = await fetch(dd, {
        priority: "low"
      });
      if (!Jd.ok) throw new Error(`Fetching ${dd} failed: HTTP ${Jd.status}`);
      const kd = Jd.body.getReader();
      for (; !(await kd.read()).done;);
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  36935: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    const pd = ["end", "stop", "playerror"];

    function Nd(dd, Jd) {
      const kd = () => {
        if (function(dd) {
            return "loaded" === dd.state() && !dd.playing() && !dd._playLock
          }(dd)) {
          for (const Jd of pd) dd.off(Jd, kd);
          dd.unload(), Jd()
        }
      };
      for (const Nd of pd) dd.on(Nd, kd);
      kd()
    }
  },
  4743: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Howl: () => Nd.Howl,
      Howler: () => Nd.Howler,
      musicOutput: () => Ld,
      readyAudioContext: () => Od
    });
    var pd, Nd = kd(4745),
      Wd = kd(4516);
    const Pd = Nd.Howler;

    function Zd() {
      var dd, Jd;
      if (Pd.ctx || !Pd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Wd.h)()) return;
      const kd = navigator.audioSession;
      let pd;
      "auto" === (null === kd || void 0 === kd ? void 0 : kd.type) && (kd.type = "ambient");
      try {
        pd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Nd = pd.createGain();
      Nd.gain.setValueAtTime(Pd._muted ? 0 : null !== (dd = Pd._volume) && void 0 !== dd ? dd : 1, pd.currentTime), Nd.connect(pd.destination), Pd.ctx = pd, Pd.masterGain = Nd, null === (Jd = Pd._setup) || void 0 === Jd || Jd.call(Pd)
    }
    Pd._mobileUnloaded = !0;
    const gd = Pd.volume.bind(Nd.Howler);
    Pd.volume = function() {
      return Zd(), gd(...arguments)
    };
    const Cd = Pd.mute.bind(Nd.Howler);
    Pd.mute = dd => (Zd(), Cd(dd));
    const Kd = Nd.Howl.prototype,
      od = Kd.init;
    Kd.init = function(dd) {
      return Zd(), od.call(this, dd)
    };
    let ld = 0;
    const Qd = null === (pd = Pd._autoSuspend) || void 0 === pd ? void 0 : pd.bind(Nd.Howler);

    function Ld() {
      Od();
      const {
        ctx: dd,
        masterGain: Jd
      } = Pd;
      return dd && Jd ? {
        ctx: dd,
        destination: Jd,
        holdAwake: dd => {
          var Jd, kd;
          (ld += dd ? 1 : -1, dd) ? null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd): null === (kd = Pd._autoSuspend) || void 0 === kd || kd.call(Pd)
        },
        wake: () => {
          var Jd;
          "running" !== dd.state && (null === (Jd = Pd._autoResume) || void 0 === Jd || Jd.call(Pd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function Od() {
      var dd;
      (Pd.volume(), Pd.ctx && Pd.autoUnlock) && (null === (dd = Pd._unlockAudio) || void 0 === dd || dd.call(Pd))
    }
    Qd && (Pd._autoSuspend = () => ld > 0 ? Nd.Howler : Qd())
  },
  36952: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    const pd = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36946: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      g: () => Nd,
      j: () => pd
    });

    function pd(dd) {
      return dd.replace(/[_\-\s]*\d+$/, "") || dd
    }

    function Nd(dd, Jd, kd) {
      return kd <= 0 ? 0 : dd * kd / Math.max(Jd, kd)
    }

    function Wd(dd, Jd) {
      const kd = dd.getDurationMs();
      return kd > 0 ? dd.loudness * Math.max(0, 1 - (Jd - dd.startMs) / kd) : 0
    }
    class Pd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = dd, this.maxPerGroup = Jd, this.voices = []
      }
      admit(dd) {
        if (this.voices = this.voices.filter((dd => dd.isAlive())), null !== dd.group) {
          const Jd = this.voices.filter((Jd => Jd.group === dd.group));
          if (Jd.length >= this.maxPerGroup && !this.dropLeastWorth(Jd, dd)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, dd)) && (this.voices.push(dd), !0)
      }
      dropLeastWorth(dd, Jd) {
        let kd = null,
          pd = 1 / 0;
        for (const Nd of dd) {
          if (!Nd.canStop()) continue;
          const dd = Wd(Nd, Jd.startMs);
          dd < pd && (kd = Nd, pd = dd)
        }
        return !(!kd || Jd.loudness < pd) && (this.voices.splice(this.voices.indexOf(kd), 1), kd.stop(), !0)
      }
    }
  },
  36972: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      g: () => Pd,
      j: () => pd
    });
    class pd {
      constructor(dd) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = dd
      }
      setMultiplierType(dd, Jd) {
        var kd;
        this.multipliers[dd] = Jd, null === (kd = this._onUpdate) || void 0 === kd || kd.call(this)
      }
      removeMultiplier(dd) {
        var Jd;
        delete this.multipliers[dd], null === (Jd = this._onUpdate) || void 0 === Jd || Jd.call(this)
      }
      getMultiplierType(dd) {
        return this.multipliers[dd]
      }
      getTotalMultipliedVal() {
        let dd = 1;
        for (const Jd in this.multipliers) dd *= this.multipliers[Jd];
        return dd
      }
    }
    class Nd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = dd
      }
      setBooleanType(dd, Jd) {
        const kd = this._getTotalBooleanVal();
        this.booleans[dd] = !!Jd;
        const pd = this.getTotalBooleanVal();
        var Nd;
        pd !== kd && (null === (Nd = this._onUpdate) || void 0 === Nd || Nd.call(this, pd, this.booleans));
        return pd
      }
      removeBoolean(dd) {
        const Jd = this._getTotalBooleanVal();
        delete this.booleans[dd];
        const kd = this._getTotalBooleanVal();
        var pd;
        null !== kd && kd !== Jd && (null === (pd = this._onUpdate) || void 0 === pd || pd.call(this, kd, this.booleans));
        return null !== kd && void 0 !== kd && kd
      }
      getBooleanType(dd) {
        return this.booleans[dd]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var dd;
        null === (dd = this._onUpdate) || void 0 === dd || dd.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Wd extends Nd {
      getTotalBooleanVal() {
        const dd = this._getTotalBooleanVal();
        if (null === dd) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return dd
      }
      _getTotalBooleanVal() {
        let dd = !1,
          Jd = !0;
        for (const kd in this.booleans) dd = !0, Jd &&= this.booleans[kd];
        return dd ? Jd : null
      }
    }
    class Pd extends Nd {
      getTotalBooleanVal() {
        const dd = this._getTotalBooleanVal();
        if (null === dd) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return dd
      }
      _getTotalBooleanVal() {
        let dd = !1,
          Jd = !1;
        for (const kd in this.booleans) dd = !0, Jd ||= this.booleans[kd];
        return dd ? Jd : null
      }
    }
  },
  36965: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Wd,
      f: () => pd,
      h: () => Nd
    });
    const pd = 15,
      Nd = 3,
      Wd = 30
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);