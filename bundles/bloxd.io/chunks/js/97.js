export const id = 97;
export const ids = [95, 96, 97];
export const modules = {
  36872: (tt, et, Vt) => {
    function Ot(tt, et, Vt, Ot) {
      return !(Vt && !tt.aimable) && (!et || tt.gun && "head" !== Ot)
    }

    function qt(tt) {
      return Math.max(.1 * tt, 1)
    }

    function Dt(tt, et) {
      return !tt && et
    }
    Vt.d(et, {
      b: () => Dt,
      c: () => qt,
      d: () => Ot
    })
  },
  36880: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => dt,
      h: () => mt
    });
    let Ot = null;
    const qt = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Dt = {
        crosshairAccuracy: tt => {
          const et = qt.crosshairAccuracy.at(-1);
          et ? et.hook(tt) : Ot = tt
        },
        turnDamageIndicators: tt => {
          var et;
          null === (et = qt.turnDamageIndicators.at(-1)) || void 0 === et || et.hook(tt)
        }
      };

    function mt(tt, et) {
      const Vt = {
          hook: et
        },
        mt = qt[tt];
      if (mt.push(Vt), "crosshairAccuracy" === tt && null !== Ot) {
        const tt = Ot;
        Ot = null, Dt.crosshairAccuracy(tt)
      }
      return () => {
        const tt = mt.indexOf(Vt); - 1 !== tt && mt.splice(tt, 1)
      }
    }

    function dt() {
      return Dt
    }
  },
  36685: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      countDecodesAs: () => Qt,
      decodedAudio: () => lt
    });
    var Ot = Vt(3320),
      qt = Vt(5030);
    const Dt = qt.Howler,
      mt = new Map;
    let dt = 0;
    const jt = {
        song: 0,
        sheet: 0
      },
      Ht = new WeakMap,
      Xt = new WeakSet;

    function Qt(tt, et) {
      return Ht.set(tt, et), tt
    }

    function lt() {
      return {
        bytes: dt,
        songsDecoded: jt.song,
        sheetsDecoded: jt.sheet
      }
    }

    function Et(tt) {
      if (Xt.has(tt)) return;
      Xt.add(tt);
      const et = 1 === tt.decodeAudioData.length,
        Vt = tt.decodeAudioData.bind(tt);
      tt.decodeAudioData = (tt, Ot, qt) => {
        const Xt = tt => {
          const et = Dt._howls.filter((tt => "loaded" !== tt._state));
          try {
            null === Ot || void 0 === Ot || Ot(tt)
          } finally {
            const Vt = et.find((tt => "loaded" === tt._state));
            void 0 !== Vt && "string" === typeof Vt._src && function(tt, et, Vt) {
              var Ot;
              dt += Vt - (null !== (Ot = mt.get(et)) && void 0 !== Ot ? Ot : 0), mt.set(et, Vt);
              const qt = Ht.get(tt);
              void 0 !== qt && jt[qt]++
            }(Vt, Vt._src, tt.length * tt.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return tt
        };
        if (!et) return Vt(tt, Xt, qt);
        const Qt = Vt(tt).then(Xt);
        return Qt.catch((tt => {
          null === qt || void 0 === qt || qt(tt)
        })), Qt
      }
    }(0, Ot.h)(lt);
    const ft = qt.Howl.prototype,
      wt = ft.init;
    ft.init = function(tt) {
      return qt.Howler.volume(), Dt.ctx && Et(Dt.ctx), wt.call(this, tt)
    };
    const yt = ft.unload;
    ft.unload = function() {
      const tt = this._src,
        et = yt.call(this);
      if ("string" !== typeof tt) return et;
      const Vt = mt.get(tt);
      return void 0 !== Vt && function(tt) {
        return !Dt._howls.some((et => et._src === tt || "string" === typeof et._src && tt.indexOf(et._src) >= 0))
      }(tt) && (mt.delete(tt), dt -= Vt), et
    }
  },
  37014: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => jt
    });
    var Ot = Vt(26),
      qt = Vt(36996),
      Dt = Vt(4445),
      mt = Vt(37021),
      dt = Vt(5030);
    const jt = function(tt) {
      const et = new Set;
      return Vt => {
        var Ot;
        const Dt = null === (Ot = [...qt.c].find((tt => {
          let [, et] = tt;
          return et.includes(Vt)
        }))) || void 0 === Ot ? void 0 : Ot[0];
        if (void 0 === Dt || et.has(Dt)) return;
        et.add(Dt);
        ! function(tt, et) {
          let {
            afterJoin: Vt,
            joining: Ot,
            idle: qt,
            fetchFile: Dt
          } = et;
          const mt = et => {
            et >= tt.length || Vt((() => {
              qt((() => {
                Ot() ? mt(et) : Dt(tt[et]).catch((() => {})).finally((() => {
                  mt(et + 1)
                }))
              }))
            }))
          };
          mt(0)
        }(qt.c.get(Dt).filter((tt => tt !== Vt)).flatMap((et => {
          const Vt = (Ot = (0, qt.k)(et).src, Dt = tt.canPlay, Ot.find((tt => {
            var et;
            const Vt = null === (et = /\.([^.]+)$/.exec(tt.split("?", 1)[0])) || void 0 === et ? void 0 : et[1];
            return void 0 !== Vt && Dt(Vt.toLowerCase())
          })));
          var Ot, Dt;
          return void 0 === Vt ? [] : [Vt]
        })), tt)
      }
    }({
      afterJoin: tt => {
        (0, Dt.e)(Ot.b.get("gameState"), tt)
      },
      joining: () => (0, Dt.h)(Ot.b.get("gameState")),
      idle: Vt(287).c,
      fetchFile: mt.c,
      canPlay: tt => !!dt.Howler.codecs(tt)
    })
  },
  37021: (tt, et, Vt) => {
    async function Ot(tt) {
      const et = await fetch(tt, {
        priority: "low"
      });
      if (!et.ok) throw new Error(`Fetching ${tt} failed: HTTP ${et.status}`);
      const Vt = et.body.getReader();
      for (; !(await Vt.read()).done;);
    }
    Vt.d(et, {
      c: () => Ot
    })
  },
  36999: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    const Ot = ["end", "stop", "playerror"];

    function qt(tt, et) {
      const Vt = () => {
        if (function(tt) {
            return "loaded" === tt.state() && !tt.playing() && !tt._playLock
          }(tt)) {
          for (const et of Ot) tt.off(et, Vt);
          tt.unload(), et()
        }
      };
      for (const qt of Ot) tt.on(qt, Vt);
      Vt()
    }
  },
  5030: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Howl: () => qt.Howl,
      Howler: () => qt.Howler,
      musicOutput: () => yt,
      readyAudioContext: () => Nt
    });
    var Ot, qt = Vt(5036),
      Dt = Vt(3510),
      mt = Vt(4796);
    const dt = qt.Howler;

    function jt() {
      var tt, et;
      if (dt.ctx || !dt.usingWebAudio || "undefined" === typeof AudioContext || !(0, mt.e)()) return;
      const Vt = navigator.audioSession;
      let Ot;
      "auto" === (null === Vt || void 0 === Vt ? void 0 : Vt.type) && (Vt.type = "ambient");
      try {
        Ot = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qt = Ot.createGain();
      qt.gain.setValueAtTime(dt._muted ? 0 : null !== (tt = dt._volume) && void 0 !== tt ? tt : 1, Ot.currentTime), qt.connect(Ot.destination), dt.ctx = Ot, dt.masterGain = qt, null === (et = dt._setup) || void 0 === et || et.call(dt)
    }
    dt._mobileUnloaded = !0;
    const Ht = dt.volume.bind(qt.Howler);
    dt.volume = function() {
      return jt(), Ht(...arguments)
    };
    const Xt = dt.mute.bind(qt.Howler);
    dt.mute = tt => (jt(), Xt(tt));
    const Qt = qt.Howl.prototype,
      lt = Qt.init;

    function Et() {
      for (; dt._html5AudioPool.length < dt.html5PoolSize;) {
        const tt = new Audio;
        tt._unlocked = !0, dt._releaseHtml5Audio(tt)
      }
      for (const et of dt._howls)
        if (!et._webAudio)
          for (const Vt of et._getSoundIds()) {
            var tt;
            const Ot = null === (tt = et._soundById(Vt)) || void 0 === tt ? void 0 : tt._node;
            Ot && !Ot._unlocked && (Ot._unlocked = !0, Ot.load())
          }
    }
    Qt.init = function(tt) {
      return jt(), lt.call(this, tt)
    }, (0, mt.e)() && (dt._unlockAudio = () => {
      const tt = dt.ctx;
      if (dt._audioUnlocked || !tt) return;
      dt.autoUnlock = !1;
      const et = tt.createBuffer(1, 1, 22050);
      dt._scratchBuffer = et;
      const Vt = new AbortController;
      let Ot = "afterPaint";
      const qt = () => {
          var Ot;
          if (dt._audioUnlocked) return;
          null === (Ot = dt._autoResume) || void 0 === Ot || Ot.call(dt);
          const qt = tt.createBufferSource();
          qt.buffer = et, qt.connect(tt.destination), qt.start(0), tt.resume().catch((() => {})), qt.onended = () => {
            qt.disconnect(0), dt._audioUnlocked = !0, Vt.abort();
            for (const tt of dt._howls) tt._emit("unlock")
          }
        },
        jt = () => {
          Et(), qt()
        },
        Ht = et => {
          if (Et(), "inTap" === Ot) {
            if ("running" === tt.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qt()
          } else "afterPaint" === Ot && (Ot = "queued", (0, Dt.d)(et.timeStamp, (() => {
            Ot = "inTap", qt()
          })))
        };
      for (const Dt of ["touchstart", "touchend"]) document.addEventListener(Dt, jt, {
        capture: !0,
        signal: Vt.signal
      });
      for (const Dt of mt.b) document.addEventListener(Dt, Ht, {
        capture: !0,
        signal: Vt.signal
      })
    });
    let ft = 0;
    const wt = null === (Ot = dt._autoSuspend) || void 0 === Ot ? void 0 : Ot.bind(qt.Howler);

    function yt() {
      Nt();
      const {
        ctx: tt,
        masterGain: et
      } = dt;
      return tt && et ? {
        ctx: tt,
        destination: et,
        holdAwake: tt => {
          var et, Vt;
          (ft += tt ? 1 : -1, tt) ? null === (et = dt._autoResume) || void 0 === et || et.call(dt): null === (Vt = dt._autoSuspend) || void 0 === Vt || Vt.call(dt)
        },
        wake: () => {
          var et;
          "running" !== tt.state && (null === (et = dt._autoResume) || void 0 === et || et.call(dt), tt.resume().catch((() => {})))
        }
      } : null
    }

    function Nt() {
      var tt;
      (dt.volume(), dt.ctx && dt.autoUnlock) && (null === (tt = dt._unlockAudio) || void 0 === tt || tt.call(dt))
    }
    wt && (dt._autoSuspend = () => ft > 0 ? qt.Howler : wt())
  },
  37008: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    const Ot = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37004: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => mt,
      e: () => qt,
      i: () => Ot
    });

    function Ot(tt) {
      return tt.replace(/[_\-\s]*\d+$/, "") || tt
    }

    function qt(tt, et, Vt) {
      return Vt <= 0 ? 0 : tt * Vt / Math.max(et, Vt)
    }

    function Dt(tt, et) {
      const Vt = tt.getDurationMs();
      return Vt > 0 ? tt.loudness * Math.max(0, 1 - (et - tt.startMs) / Vt) : 0
    }
    class mt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = tt, this.maxPerGroup = et, this.voices = []
      }
      admit(tt) {
        if (this.voices = this.voices.filter((tt => tt.isAlive())), null !== tt.group) {
          const et = this.voices.filter((et => et.group === tt.group));
          if (et.length >= this.maxPerGroup && !this.dropLeastWorth(et, tt)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, tt)) && (this.voices.push(tt), !0)
      }
      dropLeastWorth(tt, et) {
        let Vt = null,
          Ot = 1 / 0;
        for (const qt of tt) {
          if (!qt.canStop()) continue;
          const tt = Dt(qt, et.startMs);
          tt < Ot && (Vt = qt, Ot = tt)
        }
        return !(!Vt || et.loudness < Ot) && (this.voices.splice(this.voices.indexOf(Vt), 1), Vt.stop(), !0)
      }
    }
  },
  36844: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt,
      h: () => mt,
      i: () => dt
    });
    var Ot = Vt(31);
    const qt = "touchSprintChanged";
    let Dt = !0;

    function mt() {
      return Dt
    }

    function dt(tt) {
      tt !== Dt && (Dt = tt, Ot.j.sw(qt, tt))
    }
  },
  37032: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      f: () => mt,
      g: () => Ot
    });
    class Ot {
      constructor(tt) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = tt
      }
      setMultiplierType(tt, et) {
        var Vt;
        this.multipliers[tt] = et, null === (Vt = this._onUpdate) || void 0 === Vt || Vt.call(this)
      }
      removeMultiplier(tt) {
        var et;
        delete this.multipliers[tt], null === (et = this._onUpdate) || void 0 === et || et.call(this)
      }
      getMultiplierType(tt) {
        return this.multipliers[tt]
      }
      getTotalMultipliedVal() {
        let tt = 1;
        for (const et in this.multipliers) tt *= this.multipliers[et];
        return tt
      }
    }
    class qt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = tt
      }
      setBooleanType(tt, et) {
        const Vt = this._getTotalBooleanVal();
        this.booleans[tt] = !!et;
        const Ot = this.getTotalBooleanVal();
        var qt;
        Ot !== Vt && (null === (qt = this._onUpdate) || void 0 === qt || qt.call(this, Ot, this.booleans));
        return Ot
      }
      removeBoolean(tt) {
        const et = this._getTotalBooleanVal();
        delete this.booleans[tt];
        const Vt = this._getTotalBooleanVal();
        var Ot;
        null !== Vt && Vt !== et && (null === (Ot = this._onUpdate) || void 0 === Ot || Ot.call(this, Vt, this.booleans));
        return null !== Vt && void 0 !== Vt && Vt
      }
      getBooleanType(tt) {
        return this.booleans[tt]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var tt;
        null === (tt = this._onUpdate) || void 0 === tt || tt.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Dt extends qt {
      getTotalBooleanVal() {
        const tt = this._getTotalBooleanVal();
        if (null === tt) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return tt
      }
      _getTotalBooleanVal() {
        let tt = !1,
          et = !0;
        for (const Vt in this.booleans) tt = !0, et &&= this.booleans[Vt];
        return tt ? et : null
      }
    }
    class mt extends qt {
      getTotalBooleanVal() {
        const tt = this._getTotalBooleanVal();
        if (null === tt) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return tt
      }
      _getTotalBooleanVal() {
        let tt = !1,
          et = !1;
        for (const Vt in this.booleans) tt = !0, et ||= this.booleans[Vt];
        return tt ? et : null
      }
    }
  },
  37028: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Dt,
      c: () => Ot,
      f: () => qt
    });
    const Ot = 15,
      qt = 3,
      Dt = 30
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);