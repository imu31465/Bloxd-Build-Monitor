export const id = 97;
export const ids = [95, 96, 97];
export const modules = {
  37007: (uu, Eu, ju) => {
    function su(uu, Eu, ju, su) {
      return !(ju && !uu.aimable) && (!Eu || uu.gun && "head" !== su)
    }

    function Uu(uu) {
      return Math.max(.1 * uu, 1)
    }

    function Zu(uu, Eu) {
      return !uu && Eu
    }
    ju.d(Eu, {
      d: () => Zu,
      e: () => Uu,
      i: () => su
    })
  },
  37011: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => lu,
      d: () => Xu
    });
    let su = null;
    const Uu = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Zu = {
        crosshairAccuracy: uu => {
          const Eu = Uu.crosshairAccuracy.at(-1);
          Eu ? Eu.hook(uu) : su = uu
        },
        turnDamageIndicators: uu => {
          var Eu;
          null === (Eu = Uu.turnDamageIndicators.at(-1)) || void 0 === Eu || Eu.hook(uu)
        }
      };

    function Xu(uu, Eu) {
      const ju = {
          hook: Eu
        },
        Xu = Uu[uu];
      if (Xu.push(ju), "crosshairAccuracy" === uu && null !== su) {
        const uu = su;
        su = null, Zu.crosshairAccuracy(uu)
      }
      return () => {
        const uu = Xu.indexOf(ju); - 1 !== uu && Xu.splice(uu, 1)
      }
    }

    function lu() {
      return Zu
    }
  },
  36823: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      countDecodesAs: () => bu,
      decodedAudio: () => cu
    });
    var su = ju(3432),
      Uu = ju(5026);
    const Zu = Uu.Howler,
      Xu = new Map;
    let lu = 0;
    const qu = {
        song: 0,
        sheet: 0
      },
      fu = new WeakMap,
      Cu = new WeakSet;

    function bu(uu, Eu) {
      return fu.set(uu, Eu), uu
    }

    function cu() {
      return {
        bytes: lu,
        songsDecoded: qu.song,
        sheetsDecoded: qu.sheet
      }
    }

    function Nu(uu) {
      if (Cu.has(uu)) return;
      Cu.add(uu);
      const Eu = 1 === uu.decodeAudioData.length,
        ju = uu.decodeAudioData.bind(uu);
      uu.decodeAudioData = (uu, su, Uu) => {
        const Cu = uu => {
          const Eu = Zu._howls.filter((uu => "loaded" !== uu._state));
          try {
            null === su || void 0 === su || su(uu)
          } finally {
            const ju = Eu.find((uu => "loaded" === uu._state));
            void 0 !== ju && "string" === typeof ju._src && function(uu, Eu, ju) {
              var su;
              lu += ju - (null !== (su = Xu.get(Eu)) && void 0 !== su ? su : 0), Xu.set(Eu, ju);
              const Uu = fu.get(uu);
              void 0 !== Uu && qu[Uu]++
            }(ju, ju._src, uu.length * uu.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return uu
        };
        if (!Eu) return ju(uu, Cu, Uu);
        const bu = ju(uu).then(Cu);
        return bu.catch((uu => {
          null === Uu || void 0 === Uu || Uu(uu)
        })), bu
      }
    }(0, su.f)(cu);
    const Ou = Uu.Howl.prototype,
      Yu = Ou.init;
    Ou.init = function(uu) {
      return Uu.Howler.volume(), Zu.ctx && Nu(Zu.ctx), Yu.call(this, uu)
    };
    const hu = Ou.unload;
    Ou.unload = function() {
      const uu = this._src,
        Eu = hu.call(this);
      if ("string" !== typeof uu) return Eu;
      const ju = Xu.get(uu);
      return void 0 !== ju && function(uu) {
        return !Zu._howls.some((Eu => Eu._src === uu || "string" === typeof Eu._src && uu.indexOf(Eu._src) >= 0))
      }(uu) && (Xu.delete(uu), lu -= ju), Eu
    }
  },
  37181: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu
    });
    var su = ju(22),
      Uu = ju(37151),
      Zu = ju(4504),
      Xu = ju(37183),
      lu = ju(5026);
    const qu = function(uu) {
      const Eu = new Set;
      return ju => {
        var su;
        const Zu = null === (su = [...Uu.c].find((uu => {
          let [, Eu] = uu;
          return Eu.includes(ju)
        }))) || void 0 === su ? void 0 : su[0];
        if (void 0 === Zu || Eu.has(Zu)) return;
        Eu.add(Zu);
        ! function(uu, Eu) {
          let {
            afterJoin: ju,
            joining: su,
            idle: Uu,
            fetchFile: Zu
          } = Eu;
          const Xu = Eu => {
            Eu >= uu.length || ju((() => {
              Uu((() => {
                su() ? Xu(Eu) : Zu(uu[Eu]).catch((() => {})).finally((() => {
                  Xu(Eu + 1)
                }))
              }))
            }))
          };
          Xu(0)
        }(Uu.c.get(Zu).filter((uu => uu !== ju)).flatMap((Eu => {
          const ju = (su = (0, Uu.g)(Eu).src, Zu = uu.canPlay, su.find((uu => {
            var Eu;
            const ju = null === (Eu = /\.([^.]+)$/.exec(uu.split("?", 1)[0])) || void 0 === Eu ? void 0 : Eu[1];
            return void 0 !== ju && Zu(ju.toLowerCase())
          })));
          var su, Zu;
          return void 0 === ju ? [] : [ju]
        })), uu)
      }
    }({
      afterJoin: uu => {
        (0, Zu.e)(su.d.get("gameState"), uu)
      },
      joining: () => (0, Zu.g)(su.d.get("gameState")),
      idle: ju(257).b,
      fetchFile: Xu.e,
      canPlay: uu => !!lu.Howler.codecs(uu)
    })
  },
  37183: (uu, Eu, ju) => {
    async function su(uu) {
      const Eu = await fetch(uu, {
        priority: "low"
      });
      if (!Eu.ok) throw new Error(`Fetching ${uu} failed: HTTP ${Eu.status}`);
      const ju = Eu.body.getReader();
      for (; !(await ju.read()).done;);
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  37159: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu
    });
    const su = ["end", "stop", "playerror"];

    function Uu(uu, Eu) {
      const ju = () => {
        if (function(uu) {
            return "loaded" === uu.state() && !uu.playing() && !uu._playLock
          }(uu)) {
          for (const Eu of su) uu.off(Eu, ju);
          uu.unload(), Eu()
        }
      };
      for (const Uu of su) uu.on(Uu, ju);
      ju()
    }
  },
  5026: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Howl: () => Uu.Howl,
      Howler: () => Uu.Howler,
      musicOutput: () => hu,
      readyAudioContext: () => Du
    });
    var su, Uu = ju(5032),
      Zu = ju(3634),
      Xu = ju(4834);
    const lu = Uu.Howler;

    function qu() {
      var uu, Eu;
      if (lu.ctx || !lu.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xu.j)()) return;
      const ju = navigator.audioSession;
      let su;
      "auto" === (null === ju || void 0 === ju ? void 0 : ju.type) && (ju.type = "ambient");
      try {
        su = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Uu = su.createGain();
      Uu.gain.setValueAtTime(lu._muted ? 0 : null !== (uu = lu._volume) && void 0 !== uu ? uu : 1, su.currentTime), Uu.connect(su.destination), lu.ctx = su, lu.masterGain = Uu, null === (Eu = lu._setup) || void 0 === Eu || Eu.call(lu)
    }
    lu._mobileUnloaded = !0;
    const fu = lu.volume.bind(Uu.Howler);
    lu.volume = function() {
      return qu(), fu(...arguments)
    };
    const Cu = lu.mute.bind(Uu.Howler);
    lu.mute = uu => (qu(), Cu(uu));
    const bu = Uu.Howl.prototype,
      cu = bu.init;

    function Nu() {
      for (; lu._html5AudioPool.length < lu.html5PoolSize;) {
        const uu = new Audio;
        uu._unlocked = !0, lu._releaseHtml5Audio(uu)
      }
      for (const Eu of lu._howls)
        if (!Eu._webAudio)
          for (const ju of Eu._getSoundIds()) {
            var uu;
            const su = null === (uu = Eu._soundById(ju)) || void 0 === uu ? void 0 : uu._node;
            su && !su._unlocked && (su._unlocked = !0, su.load())
          }
    }
    bu.init = function(uu) {
      return qu(), cu.call(this, uu)
    }, (0, Xu.j)() && (lu._unlockAudio = () => {
      const uu = lu.ctx;
      if (lu._audioUnlocked || !uu) return;
      lu.autoUnlock = !1;
      const Eu = uu.createBuffer(1, 1, 22050);
      lu._scratchBuffer = Eu;
      const ju = new AbortController;
      let su = "afterPaint";
      const Uu = () => {
          var su;
          if (lu._audioUnlocked) return;
          null === (su = lu._autoResume) || void 0 === su || su.call(lu);
          const Uu = uu.createBufferSource();
          Uu.buffer = Eu, Uu.connect(uu.destination), Uu.start(0), uu.resume().catch((() => {})), Uu.onended = () => {
            Uu.disconnect(0), lu._audioUnlocked = !0, ju.abort();
            for (const uu of lu._howls) uu._emit("unlock")
          }
        },
        qu = () => {
          Nu(), Uu()
        },
        fu = Eu => {
          if (Nu(), "inTap" === su) {
            if ("running" === uu.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Uu()
          } else "afterPaint" === su && (su = "queued", (0, Zu.d)(Eu.timeStamp, (() => {
            su = "inTap", Uu()
          })))
        };
      for (const Zu of ["touchstart", "touchend"]) document.addEventListener(Zu, qu, {
        capture: !0,
        signal: ju.signal
      });
      for (const Zu of Xu.c) document.addEventListener(Zu, fu, {
        capture: !0,
        signal: ju.signal
      })
    });
    let Ou = 0;
    const Yu = null === (su = lu._autoSuspend) || void 0 === su ? void 0 : su.bind(Uu.Howler);

    function hu() {
      Du();
      const {
        ctx: uu,
        masterGain: Eu
      } = lu;
      return uu && Eu ? {
        ctx: uu,
        destination: Eu,
        holdAwake: uu => {
          var Eu, ju;
          (Ou += uu ? 1 : -1, uu) ? null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu): null === (ju = lu._autoSuspend) || void 0 === ju || ju.call(lu)
        },
        wake: () => {
          var Eu;
          "running" !== uu.state && (null === (Eu = lu._autoResume) || void 0 === Eu || Eu.call(lu), uu.resume().catch((() => {})))
        }
      } : null
    }

    function Du() {
      var uu;
      (lu.volume(), lu.ctx && lu.autoUnlock) && (null === (uu = lu._unlockAudio) || void 0 === uu || uu.call(lu))
    }
    Yu && (lu._autoSuspend = () => Ou > 0 ? Uu.Howler : Yu())
  },
  37172: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    const su = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37170: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      g: () => Uu,
      i: () => su
    });

    function su(uu) {
      return uu.replace(/[_\-\s]*\d+$/, "") || uu
    }

    function Uu(uu, Eu, ju) {
      return ju <= 0 ? 0 : uu * ju / Math.max(Eu, ju)
    }

    function Zu(uu, Eu) {
      const ju = uu.getDurationMs();
      return ju > 0 ? uu.loudness * Math.max(0, 1 - (Eu - uu.startMs) / ju) : 0
    }
    class Xu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = uu, this.maxPerGroup = Eu, this.voices = []
      }
      admit(uu) {
        if (this.voices = this.voices.filter((uu => uu.isAlive())), null !== uu.group) {
          const Eu = this.voices.filter((Eu => Eu.group === uu.group));
          if (Eu.length >= this.maxPerGroup && !this.dropLeastWorth(Eu, uu)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, uu)) && (this.voices.push(uu), !0)
      }
      dropLeastWorth(uu, Eu) {
        let ju = null,
          su = 1 / 0;
        for (const Uu of uu) {
          if (!Uu.canStop()) continue;
          const uu = Zu(Uu, Eu.startMs);
          uu < su && (ju = Uu, su = uu)
        }
        return !(!ju || Eu.loudness < su) && (this.voices.splice(this.voices.indexOf(ju), 1), ju.stop(), !0)
      }
    }
  },
  36988: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu,
      i: () => Xu,
      j: () => lu
    });
    var su = ju(24);
    const Uu = "touchSprintChanged";
    let Zu = !0;

    function Xu() {
      return Zu
    }

    function lu(uu) {
      uu !== Zu && (Zu = uu, su.h.TY(Uu, uu))
    }
  },
  37194: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Zu,
      f: () => Xu,
      i: () => su
    });
    class su {
      constructor(uu) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = uu
      }
      setMultiplierType(uu, Eu) {
        var ju;
        this.multipliers[uu] = Eu, null === (ju = this._onUpdate) || void 0 === ju || ju.call(this)
      }
      removeMultiplier(uu) {
        var Eu;
        delete this.multipliers[uu], null === (Eu = this._onUpdate) || void 0 === Eu || Eu.call(this)
      }
      getMultiplierType(uu) {
        return this.multipliers[uu]
      }
      getTotalMultipliedVal() {
        let uu = 1;
        for (const Eu in this.multipliers) uu *= this.multipliers[Eu];
        return uu
      }
    }
    class Uu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = uu
      }
      setBooleanType(uu, Eu) {
        const ju = this._getTotalBooleanVal();
        this.booleans[uu] = !!Eu;
        const su = this.getTotalBooleanVal();
        var Uu;
        su !== ju && (null === (Uu = this._onUpdate) || void 0 === Uu || Uu.call(this, su, this.booleans));
        return su
      }
      removeBoolean(uu) {
        const Eu = this._getTotalBooleanVal();
        delete this.booleans[uu];
        const ju = this._getTotalBooleanVal();
        var su;
        null !== ju && ju !== Eu && (null === (su = this._onUpdate) || void 0 === su || su.call(this, ju, this.booleans));
        return null !== ju && void 0 !== ju && ju
      }
      getBooleanType(uu) {
        return this.booleans[uu]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var uu;
        null === (uu = this._onUpdate) || void 0 === uu || uu.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Zu extends Uu {
      getTotalBooleanVal() {
        const uu = this._getTotalBooleanVal();
        if (null === uu) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return uu
      }
      _getTotalBooleanVal() {
        let uu = !1,
          Eu = !0;
        for (const ju in this.booleans) uu = !0, Eu &&= this.booleans[ju];
        return uu ? Eu : null
      }
    }
    class Xu extends Uu {
      getTotalBooleanVal() {
        const uu = this._getTotalBooleanVal();
        if (null === uu) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return uu
      }
      _getTotalBooleanVal() {
        let uu = !1,
          Eu = !1;
        for (const ju in this.booleans) uu = !0, Eu ||= this.booleans[ju];
        return uu ? Eu : null
      }
    }
  },
  37185: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      h: () => su,
      j: () => Uu
    });
    const su = 15,
      Uu = 3,
      Zu = 30
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);