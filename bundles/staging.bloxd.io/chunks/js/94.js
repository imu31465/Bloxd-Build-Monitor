export const id = 94;
export const ids = [92, 93, 94];
export const modules = {
  36151: (vv, zv, Pv) => {
    function hv(vv, zv, Pv, hv) {
      return !(Pv && !vv.aimable) && (!zv || vv.gun && "head" !== hv)
    }

    function Sv(vv) {
      return Math.max(.1 * vv, 1)
    }

    function ev(vv, zv) {
      return !vv && zv
    }
    Pv.d(zv, {
      b: () => ev,
      d: () => Sv,
      e: () => hv
    })
  },
  36153: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      c: () => gv
    });
    let hv = null;
    const Sv = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      ev = {
        crosshairAccuracy: vv => {
          const zv = Sv.crosshairAccuracy.at(-1);
          zv ? zv.hook(vv) : hv = vv
        },
        turnDamageIndicators: vv => {
          var zv;
          null === (zv = Sv.turnDamageIndicators.at(-1)) || void 0 === zv || zv.hook(vv)
        }
      };

    function gv(vv, zv) {
      const Pv = {
          hook: zv
        },
        gv = Sv[vv];
      if (gv.push(Pv), "crosshairAccuracy" === vv && null !== hv) {
        const vv = hv;
        hv = null, ev.crosshairAccuracy(vv)
      }
      return () => {
        const vv = gv.indexOf(Pv); - 1 !== vv && gv.splice(vv, 1)
      }
    }

    function pv() {
      return ev
    }
  },
  35980: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      countDecodesAs: () => Tv,
      decodedAudio: () => Wv
    });
    var hv = Pv(35983),
      Sv = Pv(4603);
    const ev = Sv.Howler,
      gv = new Map;
    let pv = 0;
    const dv = {
        song: 0,
        sheet: 0
      },
      Nv = new WeakMap,
      lv = new WeakSet;

    function Tv(vv, zv) {
      return Nv.set(vv, zv), vv
    }

    function Wv() {
      return {
        bytes: pv,
        songsDecoded: dv.song,
        sheetsDecoded: dv.sheet
      }
    }

    function wv(vv) {
      if (lv.has(vv)) return;
      lv.add(vv);
      const zv = 1 === vv.decodeAudioData.length,
        Pv = vv.decodeAudioData.bind(vv);
      vv.decodeAudioData = (vv, hv, Sv) => {
        const lv = vv => {
          const zv = ev._howls.filter((vv => "loaded" !== vv._state));
          try {
            null === hv || void 0 === hv || hv(vv)
          } finally {
            const Pv = zv.find((vv => "loaded" === vv._state));
            void 0 !== Pv && "string" === typeof Pv._src && function(vv, zv, Pv) {
              var hv;
              pv += Pv - (null !== (hv = gv.get(zv)) && void 0 !== hv ? hv : 0), gv.set(zv, Pv);
              const Sv = Nv.get(vv);
              void 0 !== Sv && dv[Sv]++
            }(Pv, Pv._src, vv.length * vv.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return vv
        };
        if (!zv) return Pv(vv, lv, Sv);
        const Tv = Pv(vv).then(lv);
        return Tv.catch((vv => {
          null === Sv || void 0 === Sv || Sv(vv)
        })), Tv
      }
    }(0, hv.e)(Wv);
    const av = Sv.Howl.prototype,
      sv = av.init;
    av.init = function(vv) {
      return Sv.Howler.volume(), ev.ctx && wv(ev.ctx), sv.call(this, vv)
    };
    const Cv = av.unload;
    av.unload = function() {
      const vv = this._src,
        zv = Cv.call(this);
      if ("string" !== typeof vv) return zv;
      const Pv = gv.get(vv);
      return void 0 !== Pv && function(vv) {
        return !ev._howls.some((zv => zv._src === vv || "string" === typeof zv._src && vv.indexOf(zv._src) >= 0))
      }(vv) && (gv.delete(vv), pv -= Pv), zv
    }
  },
  35983: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      e: () => Sv
    });
    let hv = null;

    function Sv(vv) {
      hv = vv
    }

    function ev() {
      return null === hv ? null : hv()
    }
  },
  36299: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv
    });
    var hv = Pv(22),
      Sv = Pv(36271),
      ev = Pv(4107),
      gv = Pv(36302),
      pv = Pv(4603);
    const dv = function(vv) {
      const zv = new Set;
      return Pv => {
        var hv;
        const ev = null === (hv = [...Sv.c].find((vv => {
          let [, zv] = vv;
          return zv.includes(Pv)
        }))) || void 0 === hv ? void 0 : hv[0];
        if (void 0 === ev || zv.has(ev)) return;
        zv.add(ev);
        ! function(vv, zv) {
          let {
            afterJoin: Pv,
            joining: hv,
            idle: Sv,
            fetchFile: ev
          } = zv;
          const gv = zv => {
            zv >= vv.length || Pv((() => {
              Sv((() => {
                hv() ? gv(zv) : ev(vv[zv]).catch((() => {})).finally((() => {
                  gv(zv + 1)
                }))
              }))
            }))
          };
          gv(0)
        }(Sv.c.get(ev).filter((vv => vv !== Pv)).flatMap((zv => {
          const Pv = (hv = (0, Sv.f)(zv).src, ev = vv.canPlay, hv.find((vv => {
            var zv;
            const Pv = null === (zv = /\.([^.]+)$/.exec(vv.split("?", 1)[0])) || void 0 === zv ? void 0 : zv[1];
            return void 0 !== Pv && ev(Pv.toLowerCase())
          })));
          var hv, ev;
          return void 0 === Pv ? [] : [Pv]
        })), vv)
      }
    }({
      afterJoin: vv => {
        (0, ev.c)(hv.c.get("gameState"), vv)
      },
      joining: () => (0, ev.d)(hv.c.get("gameState")),
      idle: Pv(250).e,
      fetchFile: gv.d,
      canPlay: vv => !!pv.Howler.codecs(vv)
    })
  },
  36302: (vv, zv, Pv) => {
    async function hv(vv) {
      const zv = await fetch(vv, {
        priority: "low"
      });
      if (!zv.ok) throw new Error(`Fetching ${vv} failed: HTTP ${zv.status}`);
      const Pv = zv.body.getReader();
      for (; !(await Pv.read()).done;);
    }
    Pv.d(zv, {
      d: () => hv
    })
  },
  36279: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    const hv = ["end", "stop", "playerror"];

    function Sv(vv, zv) {
      const Pv = () => {
        if (function(vv) {
            return "loaded" === vv.state() && !vv.playing() && !vv._playLock
          }(vv)) {
          for (const zv of hv) vv.off(zv, Pv);
          vv.unload(), zv()
        }
      };
      for (const Sv of hv) vv.on(Sv, Pv);
      Pv()
    }
  },
  4603: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Howl: () => Sv.Howl,
      Howler: () => Sv.Howler,
      musicOutput: () => av,
      readyAudioContext: () => sv
    });
    var hv, Sv = Pv(4611),
      ev = Pv(4411);
    const gv = Sv.Howler;

    function pv() {
      var vv, zv;
      if (gv.ctx || !gv.usingWebAudio || "undefined" === typeof AudioContext || !(0, ev.f)()) return;
      const Pv = navigator.audioSession;
      let hv;
      "auto" === (null === Pv || void 0 === Pv ? void 0 : Pv.type) && (Pv.type = "ambient");
      try {
        hv = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Sv = hv.createGain();
      Sv.gain.setValueAtTime(gv._muted ? 0 : null !== (vv = gv._volume) && void 0 !== vv ? vv : 1, hv.currentTime), Sv.connect(hv.destination), gv.ctx = hv, gv.masterGain = Sv, null === (zv = gv._setup) || void 0 === zv || zv.call(gv)
    }
    gv._mobileUnloaded = !0;
    const dv = gv.volume.bind(Sv.Howler);
    gv.volume = function() {
      return pv(), dv(...arguments)
    };
    const Nv = gv.mute.bind(Sv.Howler);
    gv.mute = vv => (pv(), Nv(vv));
    const lv = Sv.Howl.prototype,
      Tv = lv.init;
    lv.init = function(vv) {
      return pv(), Tv.call(this, vv)
    };
    let Wv = 0;
    const wv = null === (hv = gv._autoSuspend) || void 0 === hv ? void 0 : hv.bind(Sv.Howler);

    function av() {
      sv();
      const {
        ctx: vv,
        masterGain: zv
      } = gv;
      return vv && zv ? {
        ctx: vv,
        destination: zv,
        holdAwake: vv => {
          var zv, Pv;
          (Wv += vv ? 1 : -1, vv) ? null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv): null === (Pv = gv._autoSuspend) || void 0 === Pv || Pv.call(gv)
        },
        wake: () => {
          var zv;
          "running" !== vv.state && (null === (zv = gv._autoResume) || void 0 === zv || zv.call(gv), vv.resume().catch((() => {})))
        }
      } : null
    }

    function sv() {
      var vv;
      (gv.volume(), gv.ctx && gv.autoUnlock) && (null === (vv = gv._unlockAudio) || void 0 === vv || vv.call(gv))
    }
    wv && (gv._autoSuspend = () => Wv > 0 ? Sv.Howler : wv())
  },
  36292: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    const hv = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36290: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      g: () => Sv,
      k: () => hv
    });

    function hv(vv) {
      return vv.replace(/[_\-\s]*\d+$/, "") || vv
    }

    function Sv(vv, zv, Pv) {
      return Pv <= 0 ? 0 : vv * Pv / Math.max(zv, Pv)
    }

    function ev(vv, zv) {
      const Pv = vv.getDurationMs();
      return Pv > 0 ? vv.loudness * Math.max(0, 1 - (zv - vv.startMs) / Pv) : 0
    }
    class gv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = vv, this.maxPerGroup = zv, this.voices = []
      }
      admit(vv) {
        if (this.voices = this.voices.filter((vv => vv.isAlive())), null !== vv.group) {
          const zv = this.voices.filter((zv => zv.group === vv.group));
          if (zv.length >= this.maxPerGroup && !this.dropLeastWorth(zv, vv)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, vv)) && (this.voices.push(vv), !0)
      }
      dropLeastWorth(vv, zv) {
        let Pv = null,
          hv = 1 / 0;
        for (const Sv of vv) {
          if (!Sv.canStop()) continue;
          const vv = ev(Sv, zv.startMs);
          vv < hv && (Pv = Sv, hv = vv)
        }
        return !(!Pv || zv.loudness < hv) && (this.voices.splice(this.voices.indexOf(Pv), 1), Pv.stop(), !0)
      }
    }
  },
  36314: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      h: () => gv,
      j: () => hv
    });
    class hv {
      constructor(vv) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = vv
      }
      setMultiplierType(vv, zv) {
        var Pv;
        this.multipliers[vv] = zv, null === (Pv = this._onUpdate) || void 0 === Pv || Pv.call(this)
      }
      removeMultiplier(vv) {
        var zv;
        delete this.multipliers[vv], null === (zv = this._onUpdate) || void 0 === zv || zv.call(this)
      }
      getMultiplierType(vv) {
        return this.multipliers[vv]
      }
      getTotalMultipliedVal() {
        let vv = 1;
        for (const zv in this.multipliers) vv *= this.multipliers[zv];
        return vv
      }
    }
    class Sv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = vv
      }
      setBooleanType(vv, zv) {
        const Pv = this._getTotalBooleanVal();
        this.booleans[vv] = !!zv;
        const hv = this.getTotalBooleanVal();
        var Sv;
        hv !== Pv && (null === (Sv = this._onUpdate) || void 0 === Sv || Sv.call(this, hv, this.booleans));
        return hv
      }
      removeBoolean(vv) {
        const zv = this._getTotalBooleanVal();
        delete this.booleans[vv];
        const Pv = this._getTotalBooleanVal();
        var hv;
        null !== Pv && Pv !== zv && (null === (hv = this._onUpdate) || void 0 === hv || hv.call(this, Pv, this.booleans));
        return null !== Pv && void 0 !== Pv && Pv
      }
      getBooleanType(vv) {
        return this.booleans[vv]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var vv;
        null === (vv = this._onUpdate) || void 0 === vv || vv.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class ev extends Sv {
      getTotalBooleanVal() {
        const vv = this._getTotalBooleanVal();
        if (null === vv) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return vv
      }
      _getTotalBooleanVal() {
        let vv = !1,
          zv = !0;
        for (const Pv in this.booleans) vv = !0, zv &&= this.booleans[Pv];
        return vv ? zv : null
      }
    }
    class gv extends Sv {
      getTotalBooleanVal() {
        const vv = this._getTotalBooleanVal();
        if (null === vv) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return vv
      }
      _getTotalBooleanVal() {
        let vv = !1,
          zv = !1;
        for (const Pv in this.booleans) vv = !0, zv ||= this.booleans[Pv];
        return vv ? zv : null
      }
    }
  },
  36310: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => ev,
      d: () => hv,
      e: () => Sv
    });
    const hv = 15,
      Sv = 3,
      ev = 30
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);