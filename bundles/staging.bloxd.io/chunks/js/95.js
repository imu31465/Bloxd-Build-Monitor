export const id = 95;
export const ids = [93, 94, 95];
export const modules = {
  36618: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik, Xk) {
      return !(Ik && !kk.aimable) && (!Fk || kk.gun && "head" !== Xk)
    }

    function Tk(kk) {
      return Math.max(.1 * kk, 1)
    }

    function ik(kk, Fk) {
      return !kk && Fk
    }
    Ik.d(Fk, {
      e: () => ik,
      h: () => Tk,
      k: () => Xk
    })
  },
  36620: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => lk,
      g: () => yk
    });
    let Xk = null;
    const Tk = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      ik = {
        crosshairAccuracy: kk => {
          const Fk = Tk.crosshairAccuracy.at(-1);
          Fk ? Fk.hook(kk) : Xk = kk
        },
        turnDamageIndicators: kk => {
          var Fk;
          null === (Fk = Tk.turnDamageIndicators.at(-1)) || void 0 === Fk || Fk.hook(kk)
        }
      };

    function yk(kk, Fk) {
      const Ik = {
          hook: Fk
        },
        yk = Tk[kk];
      if (yk.push(Ik), "crosshairAccuracy" === kk && null !== Xk) {
        const kk = Xk;
        Xk = null, ik.crosshairAccuracy(kk)
      }
      return () => {
        const kk = yk.indexOf(Ik); - 1 !== kk && yk.splice(kk, 1)
      }
    }

    function lk() {
      return ik
    }
  },
  36432: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      countDecodesAs: () => tk,
      decodedAudio: () => Zk
    });
    var Xk = Ik(3191),
      Tk = Ik(4857);
    const ik = Tk.Howler,
      yk = new Map;
    let lk = 0;
    const ak = {
        song: 0,
        sheet: 0
      },
      qk = new WeakMap,
      Lk = new WeakSet;

    function tk(kk, Fk) {
      return qk.set(kk, Fk), kk
    }

    function Zk() {
      return {
        bytes: lk,
        songsDecoded: ak.song,
        sheetsDecoded: ak.sheet
      }
    }

    function jk(kk) {
      if (Lk.has(kk)) return;
      Lk.add(kk);
      const Fk = 1 === kk.decodeAudioData.length,
        Ik = kk.decodeAudioData.bind(kk);
      kk.decodeAudioData = (kk, Xk, Tk) => {
        const Lk = kk => {
          const Fk = ik._howls.filter((kk => "loaded" !== kk._state));
          try {
            null === Xk || void 0 === Xk || Xk(kk)
          } finally {
            const Ik = Fk.find((kk => "loaded" === kk._state));
            void 0 !== Ik && "string" === typeof Ik._src && function(kk, Fk, Ik) {
              var Xk;
              lk += Ik - (null !== (Xk = yk.get(Fk)) && void 0 !== Xk ? Xk : 0), yk.set(Fk, Ik);
              const Tk = qk.get(kk);
              void 0 !== Tk && ak[Tk]++
            }(Ik, Ik._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return kk
        };
        if (!Fk) return Ik(kk, Lk, Tk);
        const tk = Ik(kk).then(Lk);
        return tk.catch((kk => {
          null === Tk || void 0 === Tk || Tk(kk)
        })), tk
      }
    }(0, Xk.d)(Zk);
    const ek = Tk.Howl.prototype,
      wk = ek.init;
    ek.init = function(kk) {
      return Tk.Howler.volume(), ik.ctx && jk(ik.ctx), wk.call(this, kk)
    };
    const Hk = ek.unload;
    ek.unload = function() {
      const kk = this._src,
        Fk = Hk.call(this);
      if ("string" !== typeof kk) return Fk;
      const Ik = yk.get(kk);
      return void 0 !== Ik && function(kk) {
        return !ik._howls.some((Fk => Fk._src === kk || "string" === typeof Fk._src && kk.indexOf(Fk._src) >= 0))
      }(kk) && (yk.delete(kk), lk -= Ik), Fk
    }
  },
  36803: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ak
    });
    var Xk = Ik(25),
      Tk = Ik(36772),
      ik = Ik(2473),
      yk = Ik(36810),
      lk = Ik(4857);
    const ak = function(kk) {
      const Fk = new Set;
      return Ik => {
        var Xk;
        const ik = null === (Xk = [...Tk.e].find((kk => {
          let [, Fk] = kk;
          return Fk.includes(Ik)
        }))) || void 0 === Xk ? void 0 : Xk[0];
        if (void 0 === ik || Fk.has(ik)) return;
        Fk.add(ik);
        ! function(kk, Fk) {
          let {
            afterJoin: Ik,
            joining: Xk,
            idle: Tk,
            fetchFile: ik
          } = Fk;
          const yk = Fk => {
            Fk >= kk.length || Ik((() => {
              Tk((() => {
                Xk() ? yk(Fk) : ik(kk[Fk]).catch((() => {})).finally((() => {
                  yk(Fk + 1)
                }))
              }))
            }))
          };
          yk(0)
        }(Tk.e.get(ik).filter((kk => kk !== Ik)).flatMap((Fk => {
          const Ik = (Xk = (0, Tk.g)(Fk).src, ik = kk.canPlay, Xk.find((kk => {
            var Fk;
            const Ik = null === (Fk = /\.([^.]+)$/.exec(kk.split("?", 1)[0])) || void 0 === Fk ? void 0 : Fk[1];
            return void 0 !== Ik && ik(Ik.toLowerCase())
          })));
          var Xk, ik;
          return void 0 === Ik ? [] : [Ik]
        })), kk)
      }
    }({
      afterJoin: kk => {
        (0, ik.c)(Xk.d.get("gameState"), kk)
      },
      joining: () => (0, ik.e)(Xk.d.get("gameState")),
      idle: Ik(243).b,
      fetchFile: yk.e,
      canPlay: kk => !!lk.Howler.codecs(kk)
    })
  },
  36810: (kk, Fk, Ik) => {
    async function Xk(kk) {
      const Fk = await fetch(kk, {
        priority: "low"
      });
      if (!Fk.ok) throw new Error(`Fetching ${kk} failed: HTTP ${Fk.status}`);
      const Ik = Fk.body.getReader();
      for (; !(await Ik.read()).done;);
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  36777: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    const Xk = ["end", "stop", "playerror"];

    function Tk(kk, Fk) {
      const Ik = () => {
        if (function(kk) {
            return "loaded" === kk.state() && !kk.playing() && !kk._playLock
          }(kk)) {
          for (const Fk of Xk) kk.off(Fk, Ik);
          kk.unload(), Fk()
        }
      };
      for (const Tk of Xk) kk.on(Tk, Ik);
      Ik()
    }
  },
  4857: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Howl: () => Tk.Howl,
      Howler: () => Tk.Howler,
      musicOutput: () => Hk,
      readyAudioContext: () => Jk
    });
    var Xk, Tk = Ik(4863),
      ik = Ik(3378),
      yk = Ik(4636);
    const lk = Tk.Howler;

    function ak() {
      var kk, Fk;
      if (lk.ctx || !lk.usingWebAudio || "undefined" === typeof AudioContext || !(0, yk.h)()) return;
      const Ik = navigator.audioSession;
      let Xk;
      "auto" === (null === Ik || void 0 === Ik ? void 0 : Ik.type) && (Ik.type = "ambient");
      try {
        Xk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Tk = Xk.createGain();
      Tk.gain.setValueAtTime(lk._muted ? 0 : null !== (kk = lk._volume) && void 0 !== kk ? kk : 1, Xk.currentTime), Tk.connect(Xk.destination), lk.ctx = Xk, lk.masterGain = Tk, null === (Fk = lk._setup) || void 0 === Fk || Fk.call(lk)
    }
    lk._mobileUnloaded = !0;
    const qk = lk.volume.bind(Tk.Howler);
    lk.volume = function() {
      return ak(), qk(...arguments)
    };
    const Lk = lk.mute.bind(Tk.Howler);
    lk.mute = kk => (ak(), Lk(kk));
    const tk = Tk.Howl.prototype,
      Zk = tk.init;

    function jk() {
      for (; lk._html5AudioPool.length < lk.html5PoolSize;) {
        const kk = new Audio;
        kk._unlocked = !0, lk._releaseHtml5Audio(kk)
      }
      for (const Fk of lk._howls)
        if (!Fk._webAudio)
          for (const Ik of Fk._getSoundIds()) {
            var kk;
            const Xk = null === (kk = Fk._soundById(Ik)) || void 0 === kk ? void 0 : kk._node;
            Xk && !Xk._unlocked && (Xk._unlocked = !0, Xk.load())
          }
    }
    tk.init = function(kk) {
      return ak(), Zk.call(this, kk)
    }, (0, yk.h)() && (lk._unlockAudio = () => {
      const kk = lk.ctx;
      if (lk._audioUnlocked || !kk) return;
      lk.autoUnlock = !1;
      const Fk = kk.createBuffer(1, 1, 22050);
      lk._scratchBuffer = Fk;
      const Ik = new AbortController;
      let Xk = "afterPaint";
      const Tk = () => {
          var Xk;
          if (lk._audioUnlocked) return;
          null === (Xk = lk._autoResume) || void 0 === Xk || Xk.call(lk);
          const Tk = kk.createBufferSource();
          Tk.buffer = Fk, Tk.connect(kk.destination), Tk.start(0), kk.resume().catch((() => {})), Tk.onended = () => {
            Tk.disconnect(0), lk._audioUnlocked = !0, Ik.abort();
            for (const kk of lk._howls) kk._emit("unlock")
          }
        },
        ak = () => {
          jk(), Tk()
        },
        qk = Fk => {
          if (jk(), "inTap" === Xk) {
            if ("running" === kk.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Tk()
          } else "afterPaint" === Xk && (Xk = "queued", (0, ik.b)(Fk.timeStamp, (() => {
            Xk = "inTap", Tk()
          })))
        };
      for (const ik of ["touchstart", "touchend"]) document.addEventListener(ik, ak, {
        capture: !0,
        signal: Ik.signal
      });
      for (const ik of yk.b) document.addEventListener(ik, qk, {
        capture: !0,
        signal: Ik.signal
      })
    });
    let ek = 0;
    const wk = null === (Xk = lk._autoSuspend) || void 0 === Xk ? void 0 : Xk.bind(Tk.Howler);

    function Hk() {
      Jk();
      const {
        ctx: kk,
        masterGain: Fk
      } = lk;
      return kk && Fk ? {
        ctx: kk,
        destination: Fk,
        holdAwake: kk => {
          var Fk, Ik;
          (ek += kk ? 1 : -1, kk) ? null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk): null === (Ik = lk._autoSuspend) || void 0 === Ik || Ik.call(lk)
        },
        wake: () => {
          var Fk;
          "running" !== kk.state && (null === (Fk = lk._autoResume) || void 0 === Fk || Fk.call(lk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function Jk() {
      var kk;
      (lk.volume(), lk.ctx && lk.autoUnlock) && (null === (kk = lk._unlockAudio) || void 0 === kk || kk.call(lk))
    }
    wk && (lk._autoSuspend = () => ek > 0 ? Tk.Howler : wk())
  },
  36796: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    const Xk = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36789: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      g: () => Tk,
      k: () => Xk
    });

    function Xk(kk) {
      return kk.replace(/[_\-\s]*\d+$/, "") || kk
    }

    function Tk(kk, Fk, Ik) {
      return Ik <= 0 ? 0 : kk * Ik / Math.max(Fk, Ik)
    }

    function ik(kk, Fk) {
      const Ik = kk.getDurationMs();
      return Ik > 0 ? kk.loudness * Math.max(0, 1 - (Fk - kk.startMs) / Ik) : 0
    }
    class yk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = kk, this.maxPerGroup = Fk, this.voices = []
      }
      admit(kk) {
        if (this.voices = this.voices.filter((kk => kk.isAlive())), null !== kk.group) {
          const Fk = this.voices.filter((Fk => Fk.group === kk.group));
          if (Fk.length >= this.maxPerGroup && !this.dropLeastWorth(Fk, kk)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, kk)) && (this.voices.push(kk), !0)
      }
      dropLeastWorth(kk, Fk) {
        let Ik = null,
          Xk = 1 / 0;
        for (const Tk of kk) {
          if (!Tk.canStop()) continue;
          const kk = ik(Tk, Fk.startMs);
          kk < Xk && (Ik = Tk, Xk = kk)
        }
        return !(!Ik || Fk.loudness < Xk) && (this.voices.splice(this.voices.indexOf(Ik), 1), Ik.stop(), !0)
      }
    }
  },
  36824: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => ik,
      h: () => yk,
      i: () => Xk
    });
    class Xk {
      constructor(kk) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = kk
      }
      setMultiplierType(kk, Fk) {
        var Ik;
        this.multipliers[kk] = Fk, null === (Ik = this._onUpdate) || void 0 === Ik || Ik.call(this)
      }
      removeMultiplier(kk) {
        var Fk;
        delete this.multipliers[kk], null === (Fk = this._onUpdate) || void 0 === Fk || Fk.call(this)
      }
      getMultiplierType(kk) {
        return this.multipliers[kk]
      }
      getTotalMultipliedVal() {
        let kk = 1;
        for (const Fk in this.multipliers) kk *= this.multipliers[Fk];
        return kk
      }
    }
    class Tk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = kk
      }
      setBooleanType(kk, Fk) {
        const Ik = this._getTotalBooleanVal();
        this.booleans[kk] = !!Fk;
        const Xk = this.getTotalBooleanVal();
        var Tk;
        Xk !== Ik && (null === (Tk = this._onUpdate) || void 0 === Tk || Tk.call(this, Xk, this.booleans));
        return Xk
      }
      removeBoolean(kk) {
        const Fk = this._getTotalBooleanVal();
        delete this.booleans[kk];
        const Ik = this._getTotalBooleanVal();
        var Xk;
        null !== Ik && Ik !== Fk && (null === (Xk = this._onUpdate) || void 0 === Xk || Xk.call(this, Ik, this.booleans));
        return null !== Ik && void 0 !== Ik && Ik
      }
      getBooleanType(kk) {
        return this.booleans[kk]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var kk;
        null === (kk = this._onUpdate) || void 0 === kk || kk.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class ik extends Tk {
      getTotalBooleanVal() {
        const kk = this._getTotalBooleanVal();
        if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return kk
      }
      _getTotalBooleanVal() {
        let kk = !1,
          Fk = !0;
        for (const Ik in this.booleans) kk = !0, Fk &&= this.booleans[Ik];
        return kk ? Fk : null
      }
    }
    class yk extends Tk {
      getTotalBooleanVal() {
        const kk = this._getTotalBooleanVal();
        if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return kk
      }
      _getTotalBooleanVal() {
        let kk = !1,
          Fk = !1;
        for (const Ik in this.booleans) kk = !0, Fk ||= this.booleans[Ik];
        return kk ? Fk : null
      }
    }
  },
  36816: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      e: () => Xk,
      f: () => Tk
    });
    const Xk = 15,
      Tk = 3,
      ik = 30
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);