export const id = 97;
export const ids = [95, 96, 97];
export const modules = {
  36699: (BB, jB, zB) => {
    function QB(BB, jB, zB, QB) {
      return !(zB && !BB.aimable) && (!jB || BB.gun && "head" !== QB)
    }

    function nB(BB) {
      return Math.max(.1 * BB, 1)
    }

    function dB(BB, jB) {
      return !BB && jB
    }
    zB.d(jB, {
      e: () => dB,
      h: () => nB,
      l: () => QB
    })
  },
  36703: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => IB
    });
    let QB = null;
    const nB = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      dB = {
        crosshairAccuracy: BB => {
          const jB = nB.crosshairAccuracy.at(-1);
          jB ? jB.hook(BB) : QB = BB
        },
        turnDamageIndicators: BB => {
          var jB;
          null === (jB = nB.turnDamageIndicators.at(-1)) || void 0 === jB || jB.hook(BB)
        }
      };

    function IB(BB, jB) {
      const zB = {
          hook: jB
        },
        IB = nB[BB];
      if (IB.push(zB), "crosshairAccuracy" === BB && null !== QB) {
        const BB = QB;
        QB = null, dB.crosshairAccuracy(BB)
      }
      return () => {
        const BB = IB.indexOf(zB); - 1 !== BB && IB.splice(BB, 1)
      }
    }

    function NB() {
      return dB
    }
  },
  36514: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      countDecodesAs: () => pB,
      decodedAudio: () => rB
    });
    var QB = zB(3362),
      nB = zB(4950);
    const dB = nB.Howler,
      IB = new Map;
    let NB = 0;
    const uB = {
        song: 0,
        sheet: 0
      },
      UB = new WeakMap,
      aB = new WeakSet;

    function pB(BB, jB) {
      return UB.set(BB, jB), BB
    }

    function rB() {
      return {
        bytes: NB,
        songsDecoded: uB.song,
        sheetsDecoded: uB.sheet
      }
    }

    function sB(BB) {
      if (aB.has(BB)) return;
      aB.add(BB);
      const jB = 1 === BB.decodeAudioData.length,
        zB = BB.decodeAudioData.bind(BB);
      BB.decodeAudioData = (BB, QB, nB) => {
        const aB = BB => {
          const jB = dB._howls.filter((BB => "loaded" !== BB._state));
          try {
            null === QB || void 0 === QB || QB(BB)
          } finally {
            const zB = jB.find((BB => "loaded" === BB._state));
            void 0 !== zB && "string" === typeof zB._src && function(BB, jB, zB) {
              var QB;
              NB += zB - (null !== (QB = IB.get(jB)) && void 0 !== QB ? QB : 0), IB.set(jB, zB);
              const nB = UB.get(BB);
              void 0 !== nB && uB[nB]++
            }(zB, zB._src, BB.length * BB.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return BB
        };
        if (!jB) return zB(BB, aB, nB);
        const pB = zB(BB).then(aB);
        return pB.catch((BB => {
          null === nB || void 0 === nB || nB(BB)
        })), pB
      }
    }(0, QB.h)(rB);
    const JB = nB.Howl.prototype,
      mB = JB.init;
    JB.init = function(BB) {
      return nB.Howler.volume(), dB.ctx && sB(dB.ctx), mB.call(this, BB)
    };
    const yB = JB.unload;
    JB.unload = function() {
      const BB = this._src,
        jB = yB.call(this);
      if ("string" !== typeof BB) return jB;
      const zB = IB.get(BB);
      return void 0 !== zB && function(BB) {
        return !dB._howls.some((jB => jB._src === BB || "string" === typeof jB._src && BB.indexOf(jB._src) >= 0))
      }(BB) && (IB.delete(BB), NB -= zB), jB
    }
  },
  36864: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB
    });
    var QB = zB(28),
      nB = zB(36830),
      dB = zB(4443),
      IB = zB(36871),
      NB = zB(4950);
    const uB = function(BB) {
      const jB = new Set;
      return zB => {
        var QB;
        const dB = null === (QB = [...nB.d].find((BB => {
          let [, jB] = BB;
          return jB.includes(zB)
        }))) || void 0 === QB ? void 0 : QB[0];
        if (void 0 === dB || jB.has(dB)) return;
        jB.add(dB);
        ! function(BB, jB) {
          let {
            afterJoin: zB,
            joining: QB,
            idle: nB,
            fetchFile: dB
          } = jB;
          const IB = jB => {
            jB >= BB.length || zB((() => {
              nB((() => {
                QB() ? IB(jB) : dB(BB[jB]).catch((() => {})).finally((() => {
                  IB(jB + 1)
                }))
              }))
            }))
          };
          IB(0)
        }(nB.d.get(dB).filter((BB => BB !== zB)).flatMap((jB => {
          const zB = (QB = (0, nB.g)(jB).src, dB = BB.canPlay, QB.find((BB => {
            var jB;
            const zB = null === (jB = /\.([^.]+)$/.exec(BB.split("?", 1)[0])) || void 0 === jB ? void 0 : jB[1];
            return void 0 !== zB && dB(zB.toLowerCase())
          })));
          var QB, dB;
          return void 0 === zB ? [] : [zB]
        })), BB)
      }
    }({
      afterJoin: BB => {
        (0, dB.e)(QB.c.get("gameState"), BB)
      },
      joining: () => (0, dB.h)(QB.c.get("gameState")),
      idle: zB(269).c,
      fetchFile: IB.e,
      canPlay: BB => !!NB.Howler.codecs(BB)
    })
  },
  36871: (BB, jB, zB) => {
    async function QB(BB) {
      const jB = await fetch(BB, {
        priority: "low"
      });
      if (!jB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${jB.status}`);
      const zB = jB.body.getReader();
      for (; !(await zB.read()).done;);
    }
    zB.d(jB, {
      e: () => QB
    })
  },
  36838: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    const QB = ["end", "stop", "playerror"];

    function nB(BB, jB) {
      const zB = () => {
        if (function(BB) {
            return "loaded" === BB.state() && !BB.playing() && !BB._playLock
          }(BB)) {
          for (const jB of QB) BB.off(jB, zB);
          BB.unload(), jB()
        }
      };
      for (const nB of QB) BB.on(nB, zB);
      zB()
    }
  },
  4950: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Howl: () => nB.Howl,
      Howler: () => nB.Howler,
      musicOutput: () => yB,
      readyAudioContext: () => kB
    });
    var QB, nB = zB(4958),
      dB = zB(3551),
      IB = zB(4741);
    const NB = nB.Howler;

    function uB() {
      var BB, jB;
      if (NB.ctx || !NB.usingWebAudio || "undefined" === typeof AudioContext || !(0, IB.h)()) return;
      const zB = navigator.audioSession;
      let QB;
      "auto" === (null === zB || void 0 === zB ? void 0 : zB.type) && (zB.type = "ambient");
      try {
        QB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const nB = QB.createGain();
      nB.gain.setValueAtTime(NB._muted ? 0 : null !== (BB = NB._volume) && void 0 !== BB ? BB : 1, QB.currentTime), nB.connect(QB.destination), NB.ctx = QB, NB.masterGain = nB, null === (jB = NB._setup) || void 0 === jB || jB.call(NB)
    }
    NB._mobileUnloaded = !0;
    const UB = NB.volume.bind(nB.Howler);
    NB.volume = function() {
      return uB(), UB(...arguments)
    };
    const aB = NB.mute.bind(nB.Howler);
    NB.mute = BB => (uB(), aB(BB));
    const pB = nB.Howl.prototype,
      rB = pB.init;

    function sB() {
      for (; NB._html5AudioPool.length < NB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, NB._releaseHtml5Audio(BB)
      }
      for (const jB of NB._howls)
        if (!jB._webAudio)
          for (const zB of jB._getSoundIds()) {
            var BB;
            const QB = null === (BB = jB._soundById(zB)) || void 0 === BB ? void 0 : BB._node;
            QB && !QB._unlocked && (QB._unlocked = !0, QB.load())
          }
    }
    pB.init = function(BB) {
      return uB(), rB.call(this, BB)
    }, (0, IB.h)() && (NB._unlockAudio = () => {
      const BB = NB.ctx;
      if (NB._audioUnlocked || !BB) return;
      NB.autoUnlock = !1;
      const jB = BB.createBuffer(1, 1, 22050);
      NB._scratchBuffer = jB;
      const zB = new AbortController;
      let QB = "afterPaint";
      const nB = () => {
          var QB;
          if (NB._audioUnlocked) return;
          null === (QB = NB._autoResume) || void 0 === QB || QB.call(NB);
          const nB = BB.createBufferSource();
          nB.buffer = jB, nB.connect(BB.destination), nB.start(0), BB.resume().catch((() => {})), nB.onended = () => {
            nB.disconnect(0), NB._audioUnlocked = !0, zB.abort();
            for (const BB of NB._howls) BB._emit("unlock")
          }
        },
        uB = () => {
          sB(), nB()
        },
        UB = jB => {
          if (sB(), "inTap" === QB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), nB()
          } else "afterPaint" === QB && (QB = "queued", (0, dB.b)(jB.timeStamp, (() => {
            QB = "inTap", nB()
          })))
        };
      for (const dB of ["touchstart", "touchend"]) document.addEventListener(dB, uB, {
        capture: !0,
        signal: zB.signal
      });
      for (const dB of IB.d) document.addEventListener(dB, UB, {
        capture: !0,
        signal: zB.signal
      })
    });
    let JB = 0;
    const mB = null === (QB = NB._autoSuspend) || void 0 === QB ? void 0 : QB.bind(nB.Howler);

    function yB() {
      kB();
      const {
        ctx: BB,
        masterGain: jB
      } = NB;
      return BB && jB ? {
        ctx: BB,
        destination: jB,
        holdAwake: BB => {
          var jB, zB;
          (JB += BB ? 1 : -1, BB) ? null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB): null === (zB = NB._autoSuspend) || void 0 === zB || zB.call(NB)
        },
        wake: () => {
          var jB;
          "running" !== BB.state && (null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function kB() {
      var BB;
      (NB.volume(), NB.ctx && NB.autoUnlock) && (null === (BB = NB._unlockAudio) || void 0 === BB || BB.call(NB))
    }
    mB && (NB._autoSuspend = () => JB > 0 ? nB.Howler : mB())
  },
  36856: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB
    });
    const QB = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36848: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => nB,
      g: () => QB
    });

    function QB(BB) {
      return BB.replace(/[_\-\s]*\d+$/, "") || BB
    }

    function nB(BB, jB, zB) {
      return zB <= 0 ? 0 : BB * zB / Math.max(jB, zB)
    }

    function dB(BB, jB) {
      const zB = BB.getDurationMs();
      return zB > 0 ? BB.loudness * Math.max(0, 1 - (jB - BB.startMs) / zB) : 0
    }
    class IB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = BB, this.maxPerGroup = jB, this.voices = []
      }
      admit(BB) {
        if (this.voices = this.voices.filter((BB => BB.isAlive())), null !== BB.group) {
          const jB = this.voices.filter((jB => jB.group === BB.group));
          if (jB.length >= this.maxPerGroup && !this.dropLeastWorth(jB, BB)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, BB)) && (this.voices.push(BB), !0)
      }
      dropLeastWorth(BB, jB) {
        let zB = null,
          QB = 1 / 0;
        for (const nB of BB) {
          if (!nB.canStop()) continue;
          const BB = dB(nB, jB.startMs);
          BB < QB && (zB = nB, QB = BB)
        }
        return !(!zB || jB.loudness < QB) && (this.voices.splice(this.voices.indexOf(zB), 1), zB.stop(), !0)
      }
    }
  },
  36668: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => IB,
      i: () => NB
    });
    var QB = zB(31);
    const nB = "touchSprintChanged";
    let dB = !0;

    function IB() {
      return dB
    }

    function NB(BB) {
      BB !== dB && (dB = BB, QB.n.Ly(nB, BB))
    }
  },
  36882: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      f: () => IB,
      j: () => QB
    });
    class QB {
      constructor(BB) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setMultiplierType(BB, jB) {
        var zB;
        this.multipliers[BB] = jB, null === (zB = this._onUpdate) || void 0 === zB || zB.call(this)
      }
      removeMultiplier(BB) {
        var jB;
        delete this.multipliers[BB], null === (jB = this._onUpdate) || void 0 === jB || jB.call(this)
      }
      getMultiplierType(BB) {
        return this.multipliers[BB]
      }
      getTotalMultipliedVal() {
        let BB = 1;
        for (const jB in this.multipliers) BB *= this.multipliers[jB];
        return BB
      }
    }
    class nB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setBooleanType(BB, jB) {
        const zB = this._getTotalBooleanVal();
        this.booleans[BB] = !!jB;
        const QB = this.getTotalBooleanVal();
        var nB;
        QB !== zB && (null === (nB = this._onUpdate) || void 0 === nB || nB.call(this, QB, this.booleans));
        return QB
      }
      removeBoolean(BB) {
        const jB = this._getTotalBooleanVal();
        delete this.booleans[BB];
        const zB = this._getTotalBooleanVal();
        var QB;
        null !== zB && zB !== jB && (null === (QB = this._onUpdate) || void 0 === QB || QB.call(this, zB, this.booleans));
        return null !== zB && void 0 !== zB && zB
      }
      getBooleanType(BB) {
        return this.booleans[BB]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var BB;
        null === (BB = this._onUpdate) || void 0 === BB || BB.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class dB extends nB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          jB = !0;
        for (const zB in this.booleans) BB = !0, jB &&= this.booleans[zB];
        return BB ? jB : null
      }
    }
    class IB extends nB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          jB = !1;
        for (const zB in this.booleans) BB = !0, jB ||= this.booleans[zB];
        return BB ? jB : null
      }
    }
  },
  36873: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => QB,
      k: () => nB
    });
    const QB = 15,
      nB = 3,
      dB = 30
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);