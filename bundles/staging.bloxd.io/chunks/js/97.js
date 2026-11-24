export const id = 97;
export const ids = [95, 96, 97];
export const modules = {
  36636: (BB, IB, ZB) => {
    function TB(BB, IB, ZB, TB) {
      return !(ZB && !BB.aimable) && (!IB || BB.gun && "head" !== TB)
    }

    function JB(BB) {
      return Math.max(.1 * BB, 1)
    }

    function oB(BB, IB) {
      return !BB && IB
    }
    ZB.d(IB, {
      d: () => oB,
      f: () => JB,
      g: () => TB
    })
  },
  36642: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      d: () => GB
    });
    let TB = null;
    const JB = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      oB = {
        crosshairAccuracy: BB => {
          const IB = JB.crosshairAccuracy.at(-1);
          IB ? IB.hook(BB) : TB = BB
        },
        turnDamageIndicators: BB => {
          var IB;
          null === (IB = JB.turnDamageIndicators.at(-1)) || void 0 === IB || IB.hook(BB)
        }
      };

    function GB(BB, IB) {
      const ZB = {
          hook: IB
        },
        GB = JB[BB];
      if (GB.push(ZB), "crosshairAccuracy" === BB && null !== TB) {
        const BB = TB;
        TB = null, oB.crosshairAccuracy(BB)
      }
      return () => {
        const BB = GB.indexOf(ZB); - 1 !== BB && GB.splice(BB, 1)
      }
    }

    function vB() {
      return oB
    }
  },
  36464: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      countDecodesAs: () => hB,
      decodedAudio: () => zB
    });
    var TB = ZB(3428),
      JB = ZB(5028);
    const oB = JB.Howler,
      GB = new Map;
    let vB = 0;
    const kB = {
        song: 0,
        sheet: 0
      },
      cB = new WeakMap,
      nB = new WeakSet;

    function hB(BB, IB) {
      return cB.set(BB, IB), BB
    }

    function zB() {
      return {
        bytes: vB,
        songsDecoded: kB.song,
        sheetsDecoded: kB.sheet
      }
    }

    function FB(BB) {
      if (nB.has(BB)) return;
      nB.add(BB);
      const IB = 1 === BB.decodeAudioData.length,
        ZB = BB.decodeAudioData.bind(BB);
      BB.decodeAudioData = (BB, TB, JB) => {
        const nB = BB => {
          const IB = oB._howls.filter((BB => "loaded" !== BB._state));
          try {
            null === TB || void 0 === TB || TB(BB)
          } finally {
            const ZB = IB.find((BB => "loaded" === BB._state));
            void 0 !== ZB && "string" === typeof ZB._src && function(BB, IB, ZB) {
              var TB;
              vB += ZB - (null !== (TB = GB.get(IB)) && void 0 !== TB ? TB : 0), GB.set(IB, ZB);
              const JB = cB.get(BB);
              void 0 !== JB && kB[JB]++
            }(ZB, ZB._src, BB.length * BB.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return BB
        };
        if (!IB) return ZB(BB, nB, JB);
        const hB = ZB(BB).then(nB);
        return hB.catch((BB => {
          null === JB || void 0 === JB || JB(BB)
        })), hB
      }
    }(0, TB.e)(zB);
    const NB = JB.Howl.prototype,
      gB = NB.init;
    NB.init = function(BB) {
      return JB.Howler.volume(), oB.ctx && FB(oB.ctx), gB.call(this, BB)
    };
    const qB = NB.unload;
    NB.unload = function() {
      const BB = this._src,
        IB = qB.call(this);
      if ("string" !== typeof BB) return IB;
      const ZB = GB.get(BB);
      return void 0 !== ZB && function(BB) {
        return !oB._howls.some((IB => IB._src === BB || "string" === typeof IB._src && BB.indexOf(IB._src) >= 0))
      }(BB) && (GB.delete(BB), vB -= ZB), IB
    }
  },
  36812: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => kB
    });
    var TB = ZB(20),
      JB = ZB(36783),
      oB = ZB(4518),
      GB = ZB(36821),
      vB = ZB(5028);
    const kB = function(BB) {
      const IB = new Set;
      return ZB => {
        var TB;
        const oB = null === (TB = [...JB.c].find((BB => {
          let [, IB] = BB;
          return IB.includes(ZB)
        }))) || void 0 === TB ? void 0 : TB[0];
        if (void 0 === oB || IB.has(oB)) return;
        IB.add(oB);
        ! function(BB, IB) {
          let {
            afterJoin: ZB,
            joining: TB,
            idle: JB,
            fetchFile: oB
          } = IB;
          const GB = IB => {
            IB >= BB.length || ZB((() => {
              JB((() => {
                TB() ? GB(IB) : oB(BB[IB]).catch((() => {})).finally((() => {
                  GB(IB + 1)
                }))
              }))
            }))
          };
          GB(0)
        }(JB.c.get(oB).filter((BB => BB !== ZB)).flatMap((IB => {
          const ZB = (TB = (0, JB.g)(IB).src, oB = BB.canPlay, TB.find((BB => {
            var IB;
            const ZB = null === (IB = /\.([^.]+)$/.exec(BB.split("?", 1)[0])) || void 0 === IB ? void 0 : IB[1];
            return void 0 !== ZB && oB(ZB.toLowerCase())
          })));
          var TB, oB;
          return void 0 === ZB ? [] : [ZB]
        })), BB)
      }
    }({
      afterJoin: BB => {
        (0, oB.e)(TB.d.get("gameState"), BB)
      },
      joining: () => (0, oB.f)(TB.d.get("gameState")),
      idle: ZB(256).c,
      fetchFile: GB.e,
      canPlay: BB => !!vB.Howler.codecs(BB)
    })
  },
  36821: (BB, IB, ZB) => {
    async function TB(BB) {
      const IB = await fetch(BB, {
        priority: "low"
      });
      if (!IB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${IB.status}`);
      const ZB = IB.body.getReader();
      for (; !(await ZB.read()).done;);
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  36789: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    const TB = ["end", "stop", "playerror"];

    function JB(BB, IB) {
      const ZB = () => {
        if (function(BB) {
            return "loaded" === BB.state() && !BB.playing() && !BB._playLock
          }(BB)) {
          for (const IB of TB) BB.off(IB, ZB);
          BB.unload(), IB()
        }
      };
      for (const JB of TB) BB.on(JB, ZB);
      ZB()
    }
  },
  5028: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      Howl: () => JB.Howl,
      Howler: () => JB.Howler,
      musicOutput: () => qB,
      readyAudioContext: () => yB
    });
    var TB, JB = ZB(5031),
      oB = ZB(3625),
      GB = ZB(4824);
    const vB = JB.Howler;

    function kB() {
      var BB, IB;
      if (vB.ctx || !vB.usingWebAudio || "undefined" === typeof AudioContext || !(0, GB.i)()) return;
      const ZB = navigator.audioSession;
      let TB;
      "auto" === (null === ZB || void 0 === ZB ? void 0 : ZB.type) && (ZB.type = "ambient");
      try {
        TB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const JB = TB.createGain();
      JB.gain.setValueAtTime(vB._muted ? 0 : null !== (BB = vB._volume) && void 0 !== BB ? BB : 1, TB.currentTime), JB.connect(TB.destination), vB.ctx = TB, vB.masterGain = JB, null === (IB = vB._setup) || void 0 === IB || IB.call(vB)
    }
    vB._mobileUnloaded = !0;
    const cB = vB.volume.bind(JB.Howler);
    vB.volume = function() {
      return kB(), cB(...arguments)
    };
    const nB = vB.mute.bind(JB.Howler);
    vB.mute = BB => (kB(), nB(BB));
    const hB = JB.Howl.prototype,
      zB = hB.init;

    function FB() {
      for (; vB._html5AudioPool.length < vB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, vB._releaseHtml5Audio(BB)
      }
      for (const IB of vB._howls)
        if (!IB._webAudio)
          for (const ZB of IB._getSoundIds()) {
            var BB;
            const TB = null === (BB = IB._soundById(ZB)) || void 0 === BB ? void 0 : BB._node;
            TB && !TB._unlocked && (TB._unlocked = !0, TB.load())
          }
    }
    hB.init = function(BB) {
      return kB(), zB.call(this, BB)
    }, (0, GB.i)() && (vB._unlockAudio = () => {
      const BB = vB.ctx;
      if (vB._audioUnlocked || !BB) return;
      vB.autoUnlock = !1;
      const IB = BB.createBuffer(1, 1, 22050);
      vB._scratchBuffer = IB;
      const ZB = new AbortController;
      let TB = "afterPaint";
      const JB = () => {
          var TB;
          if (vB._audioUnlocked) return;
          null === (TB = vB._autoResume) || void 0 === TB || TB.call(vB);
          const JB = BB.createBufferSource();
          JB.buffer = IB, JB.connect(BB.destination), JB.start(0), BB.resume().catch((() => {})), JB.onended = () => {
            JB.disconnect(0), vB._audioUnlocked = !0, ZB.abort();
            for (const BB of vB._howls) BB._emit("unlock")
          }
        },
        kB = () => {
          FB(), JB()
        },
        cB = IB => {
          if (FB(), "inTap" === TB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), JB()
          } else "afterPaint" === TB && (TB = "queued", (0, oB.d)(IB.timeStamp, (() => {
            TB = "inTap", JB()
          })))
        };
      for (const oB of ["touchstart", "touchend"]) document.addEventListener(oB, kB, {
        capture: !0,
        signal: ZB.signal
      });
      for (const oB of GB.e) document.addEventListener(oB, cB, {
        capture: !0,
        signal: ZB.signal
      })
    });
    let NB = 0;
    const gB = null === (TB = vB._autoSuspend) || void 0 === TB ? void 0 : TB.bind(JB.Howler);

    function qB() {
      yB();
      const {
        ctx: BB,
        masterGain: IB
      } = vB;
      return BB && IB ? {
        ctx: BB,
        destination: IB,
        holdAwake: BB => {
          var IB, ZB;
          (NB += BB ? 1 : -1, BB) ? null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB): null === (ZB = vB._autoSuspend) || void 0 === ZB || ZB.call(vB)
        },
        wake: () => {
          var IB;
          "running" !== BB.state && (null === (IB = vB._autoResume) || void 0 === IB || IB.call(vB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function yB() {
      var BB;
      (vB.volume(), vB.ctx && vB.autoUnlock) && (null === (BB = vB._unlockAudio) || void 0 === BB || BB.call(vB))
    }
    gB && (vB._autoSuspend = () => NB > 0 ? JB.Howler : gB())
  },
  36807: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    const TB = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36800: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB,
      f: () => JB,
      j: () => TB
    });

    function TB(BB) {
      return BB.replace(/[_\-\s]*\d+$/, "") || BB
    }

    function JB(BB, IB, ZB) {
      return ZB <= 0 ? 0 : BB * ZB / Math.max(IB, ZB)
    }

    function oB(BB, IB) {
      const ZB = BB.getDurationMs();
      return ZB > 0 ? BB.loudness * Math.max(0, 1 - (IB - BB.startMs) / ZB) : 0
    }
    class GB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = BB, this.maxPerGroup = IB, this.voices = []
      }
      admit(BB) {
        if (this.voices = this.voices.filter((BB => BB.isAlive())), null !== BB.group) {
          const IB = this.voices.filter((IB => IB.group === BB.group));
          if (IB.length >= this.maxPerGroup && !this.dropLeastWorth(IB, BB)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, BB)) && (this.voices.push(BB), !0)
      }
      dropLeastWorth(BB, IB) {
        let ZB = null,
          TB = 1 / 0;
        for (const JB of BB) {
          if (!JB.canStop()) continue;
          const BB = oB(JB, IB.startMs);
          BB < TB && (ZB = JB, TB = BB)
        }
        return !(!ZB || IB.loudness < TB) && (this.voices.splice(this.voices.indexOf(ZB), 1), ZB.stop(), !0)
      }
    }
  },
  36609: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB,
      h: () => GB,
      i: () => vB
    });
    var TB = ZB(24);
    const JB = "touchSprintChanged";
    let oB = !0;

    function GB() {
      return oB
    }

    function vB(BB) {
      BB !== oB && (oB = BB, TB.l.Gq(JB, BB))
    }
  },
  36829: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      h: () => GB,
      k: () => TB
    });
    class TB {
      constructor(BB) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setMultiplierType(BB, IB) {
        var ZB;
        this.multipliers[BB] = IB, null === (ZB = this._onUpdate) || void 0 === ZB || ZB.call(this)
      }
      removeMultiplier(BB) {
        var IB;
        delete this.multipliers[BB], null === (IB = this._onUpdate) || void 0 === IB || IB.call(this)
      }
      getMultiplierType(BB) {
        return this.multipliers[BB]
      }
      getTotalMultipliedVal() {
        let BB = 1;
        for (const IB in this.multipliers) BB *= this.multipliers[IB];
        return BB
      }
    }
    class JB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setBooleanType(BB, IB) {
        const ZB = this._getTotalBooleanVal();
        this.booleans[BB] = !!IB;
        const TB = this.getTotalBooleanVal();
        var JB;
        TB !== ZB && (null === (JB = this._onUpdate) || void 0 === JB || JB.call(this, TB, this.booleans));
        return TB
      }
      removeBoolean(BB) {
        const IB = this._getTotalBooleanVal();
        delete this.booleans[BB];
        const ZB = this._getTotalBooleanVal();
        var TB;
        null !== ZB && ZB !== IB && (null === (TB = this._onUpdate) || void 0 === TB || TB.call(this, ZB, this.booleans));
        return null !== ZB && void 0 !== ZB && ZB
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
    class oB extends JB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          IB = !0;
        for (const ZB in this.booleans) BB = !0, IB &&= this.booleans[ZB];
        return BB ? IB : null
      }
    }
    class GB extends JB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          IB = !1;
        for (const ZB in this.booleans) BB = !0, IB ||= this.booleans[ZB];
        return BB ? IB : null
      }
    }
  },
  36827: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      g: () => TB,
      h: () => JB
    });
    const TB = 15,
      JB = 3,
      oB = 30
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);