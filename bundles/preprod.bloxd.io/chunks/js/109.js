export const id = 109;
export const ids = [108, 109, 110];
export const modules = {
  37554: (MM, rM, iM) => {
    function OM(MM, rM, iM, OM) {
      return !(iM && !MM.aimable) && (!rM || MM.gun && "head" !== OM)
    }

    function SM(MM) {
      return Math.max(.1 * MM, 1)
    }

    function jM(MM, rM) {
      return !MM && rM
    }
    iM.d(rM, {
      e: () => jM,
      g: () => SM,
      k: () => OM
    })
  },
  37559: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => PM,
      h: () => aM
    });
    let OM = null;
    const SM = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      jM = {
        crosshairAccuracy: MM => {
          const rM = SM.crosshairAccuracy.at(-1);
          rM ? rM.hook(MM) : OM = MM
        },
        turnDamageIndicators: MM => {
          var rM;
          null === (rM = SM.turnDamageIndicators.at(-1)) || void 0 === rM || rM.hook(MM)
        }
      };

    function aM(MM, rM) {
      const iM = {
          hook: rM
        },
        aM = SM[MM];
      if (aM.push(iM), "crosshairAccuracy" === MM && null !== OM) {
        const MM = OM;
        OM = null, jM.crosshairAccuracy(MM)
      }
      return () => {
        const MM = aM.indexOf(iM); - 1 !== MM && aM.splice(MM, 1)
      }
    }

    function PM() {
      return jM
    }
  },
  37390: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      countDecodesAs: () => LM,
      decodedAudio: () => mM
    });
    var OM = iM(3291),
      SM = iM(5265);
    const jM = SM.Howler,
      aM = new Map;
    let PM = 0;
    const nM = {
        song: 0,
        sound: 0
      },
      QM = new WeakMap,
      zM = new WeakSet;

    function LM(MM, rM) {
      return QM.set(MM, rM), MM
    }

    function mM() {
      return {
        bytes: PM,
        songsDecoded: nM.song,
        soundsDecoded: nM.sound
      }
    }

    function HM(MM) {
      if (zM.has(MM)) return;
      zM.add(MM);
      const rM = 1 === MM.decodeAudioData.length,
        iM = MM.decodeAudioData.bind(MM);
      MM.decodeAudioData = (MM, OM, SM) => {
        const zM = MM => {
          const rM = jM._howls.filter((MM => "loaded" !== MM._state));
          try {
            null === OM || void 0 === OM || OM(MM)
          } finally {
            const iM = rM.find((MM => "loaded" === MM._state));
            void 0 !== iM && "string" === typeof iM._src && function(MM, rM, iM) {
              var OM;
              PM += iM - (null !== (OM = aM.get(rM)) && void 0 !== OM ? OM : 0), aM.set(rM, iM);
              const SM = QM.get(MM);
              void 0 !== SM && nM[SM]++
            }(iM, iM._src, MM.length * MM.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return MM
        };
        if (!rM) return iM(MM, zM, SM);
        const LM = iM(MM).then(zM);
        return LM.catch((MM => {
          null === SM || void 0 === SM || SM(MM)
        })), LM
      }
    }(0, OM.g)(mM);
    const hM = SM.Howl.prototype,
      JM = hM.init;
    hM.init = function(MM) {
      return SM.Howler.volume(), jM.ctx && HM(jM.ctx), JM.call(this, MM)
    };
    const dM = hM.unload;
    hM.unload = function() {
      const MM = this._src,
        rM = dM.call(this);
      if ("string" !== typeof MM) return rM;
      const iM = aM.get(MM);
      return void 0 !== iM && function(MM) {
        return !jM._howls.some((rM => rM._src === MM || "string" === typeof rM._src && MM.indexOf(rM._src) >= 0))
      }(MM) && (aM.delete(MM), PM -= iM), rM
    }
  },
  37750: (MM, rM, iM) => {
    async function OM(MM) {
      const rM = await fetch(MM, {
        priority: "low"
      });
      if (!rM.ok) throw new Error(`Fetching ${MM} failed: HTTP ${rM.status}`);
      const iM = rM.body.getReader();
      for (; !(await iM.read()).done;);
    }
    iM.d(rM, {
      b: () => OM
    })
  },
  5265: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Howl: () => SM.Howl,
      Howler: () => SM.Howler,
      musicOutput: () => dM,
      readyAudioContext: () => yM
    });
    var OM, SM = iM(5269),
      jM = iM(3839),
      aM = iM(5026);
    const PM = SM.Howler;

    function nM() {
      var MM, rM;
      if (PM.ctx || !PM.usingWebAudio || "undefined" === typeof AudioContext || !(0, aM.k)()) return;
      const iM = navigator.audioSession;
      let OM;
      "auto" === (null === iM || void 0 === iM ? void 0 : iM.type) && (iM.type = "ambient");
      try {
        OM = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const SM = OM.createGain();
      SM.gain.setValueAtTime(PM._muted ? 0 : null !== (MM = PM._volume) && void 0 !== MM ? MM : 1, OM.currentTime), SM.connect(OM.destination), PM.ctx = OM, PM.masterGain = SM, null === (rM = PM._setup) || void 0 === rM || rM.call(PM)
    }
    PM._mobileUnloaded = !0;
    const QM = PM.volume.bind(SM.Howler);
    PM.volume = function() {
      return nM(), QM(...arguments)
    };
    const zM = PM.mute.bind(SM.Howler);
    PM.mute = MM => (nM(), zM(MM));
    const LM = SM.Howl.prototype,
      mM = LM.init;

    function HM() {
      for (; PM._html5AudioPool.length < PM.html5PoolSize;) {
        const MM = new Audio;
        MM._unlocked = !0, PM._releaseHtml5Audio(MM)
      }
      for (const rM of PM._howls)
        if (!rM._webAudio)
          for (const iM of rM._getSoundIds()) {
            var MM;
            const OM = null === (MM = rM._soundById(iM)) || void 0 === MM ? void 0 : MM._node;
            OM && !OM._unlocked && (OM._unlocked = !0, OM.load())
          }
    }
    LM.init = function(MM) {
      return nM(), mM.call(this, MM)
    }, (0, aM.k)() && (PM._unlockAudio = () => {
      const MM = PM.ctx;
      if (PM._audioUnlocked || !MM) return;
      PM.autoUnlock = !1;
      const rM = MM.createBuffer(1, 1, 22050);
      PM._scratchBuffer = rM;
      const iM = new AbortController;
      let OM = "afterPaint";
      const SM = () => {
          var OM;
          if (PM._audioUnlocked) return;
          null === (OM = PM._autoResume) || void 0 === OM || OM.call(PM);
          const SM = MM.createBufferSource();
          SM.buffer = rM, SM.connect(MM.destination), SM.start(0), MM.resume().catch((() => {})), SM.onended = () => {
            SM.disconnect(0), PM._audioUnlocked = !0, iM.abort();
            for (const MM of PM._howls) MM._emit("unlock")
          }
        },
        nM = () => {
          HM(), SM()
        },
        QM = rM => {
          if (HM(), "inTap" === OM) {
            if ("running" === MM.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SM()
          } else "afterPaint" === OM && (OM = "queued", (0, jM.d)(rM.timeStamp, (() => {
            OM = "inTap", SM()
          })))
        };
      for (const jM of ["touchstart", "touchend"]) document.addEventListener(jM, nM, {
        capture: !0,
        signal: iM.signal
      });
      for (const jM of aM.e) document.addEventListener(jM, QM, {
        capture: !0,
        signal: iM.signal
      })
    });
    let hM = 0;
    const JM = null === (OM = PM._autoSuspend) || void 0 === OM ? void 0 : OM.bind(SM.Howler);

    function dM() {
      yM();
      const {
        ctx: MM,
        masterGain: rM
      } = PM;
      return MM && rM ? {
        ctx: MM,
        destination: rM,
        holdAwake: MM => {
          var rM, iM;
          (hM += MM ? 1 : -1, MM) ? null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM): null === (iM = PM._autoSuspend) || void 0 === iM || iM.call(PM)
        },
        wake: () => {
          var rM;
          "running" !== MM.state && (null === (rM = PM._autoResume) || void 0 === rM || rM.call(PM), MM.resume().catch((() => {})))
        }
      } : null
    }

    function yM() {
      var MM;
      (PM.volume(), PM.ctx && PM.autoUnlock) && (null === (MM = PM._unlockAudio) || void 0 === MM || MM.call(PM))
    }
    JM && (PM._autoSuspend = () => hM > 0 ? SM.Howler : JM())
  },
  37741: (MM, rM, iM) => {
    function OM(MM, rM) {
      let {
        afterJoin: iM,
        joining: OM,
        idle: SM,
        fetchFile: jM,
        Ti: aM = () => !1
      } = rM;
      const PM = rM => {
        rM >= MM.length || aM() || iM((() => {
          SM((() => {
            aM() || (OM() ? PM(rM) : jM(MM[rM]).catch((() => {})).finally((() => {
              PM(rM + 1)
            })))
          }))
        }))
      };
      PM(0)
    }
    iM.d(rM, {
      c: () => OM
    })
  },
  37737: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    const OM = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37744: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => zM,
      c: () => LM
    });
    var OM = iM(19),
      SM = iM(37705),
      jM = iM(4692),
      aM = iM(37750),
      PM = iM(5265),
      nM = iM(222),
      QM = iM(37741);
    const zM = {
        afterJoin: MM => {
          (0, jM.d)(OM.d.get("gameState"), MM)
        },
        joining: () => (0, jM.f)(OM.d.get("gameState")),
        idle: nM.d
      },
      LM = function(MM) {
        const rM = new Set,
          iM = new Set,
          OM = rM => rM.flatMap((rM => {
            const iM = (OM = (0, SM.r)(rM).src, jM = MM.canPlay, OM.find((MM => {
              var rM;
              const iM = null === (rM = /\.([^.]+)$/.exec(MM.split("?", 1)[0])) || void 0 === rM ? void 0 : rM[1];
              return void 0 !== iM && jM(iM.toLowerCase())
            })));
            var OM, jM;
            return void 0 === iM ? [] : [iM]
          }));
        return jM => {
          var aM;
          const PM = (0, SM.j)(jM),
            nM = [];
          rM.has(PM) || (rM.add(PM), nM.push(...OM((0, SM.m)(PM).filter((MM => MM !== jM)))));
          const [zM, LM] = null !== (aM = [...SM.b].find((MM => {
            let [, rM] = MM;
            return rM.includes(PM)
          }))) && void 0 !== aM ? aM : [void 0, []];
          if (void 0 !== zM && !iM.has(zM)) {
            iM.add(zM);
            for (const MM of LM) rM.has(MM) || (rM.add(MM), nM.push(...OM((0, SM.m)(MM))))
          }
          nM.length > 0 && (0, QM.c)(nM, MM)
        }
      }({
        ...zM,
        fetchFile: aM.b,
        canPlay: MM => !!PM.Howler.codecs(MM)
      })
  },
  37730: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => aM,
      f: () => SM,
      i: () => OM
    });

    function OM(MM) {
      return MM.replace(/[_\-\s]*\d+$/, "") || MM
    }

    function SM(MM, rM, iM) {
      return iM <= 0 ? 0 : MM * iM / Math.max(rM, iM)
    }

    function jM(MM, rM) {
      const iM = MM.getDurationMs();
      return iM > 0 ? MM.loudness * Math.max(0, 1 - (rM - MM.startMs) / iM) : 0
    }
    class aM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = MM, this.maxPerGroup = rM, this.voices = []
      }
      admit(MM) {
        if (this.voices = this.voices.filter((MM => MM.isAlive())), null !== MM.group) {
          const rM = this.voices.filter((rM => rM.group === MM.group));
          if (rM.length >= this.maxPerGroup && !this.dropLeastWorth(rM, MM)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, MM)) && (this.voices.push(MM), !0)
      }
      dropLeastWorth(MM, rM) {
        let iM = null,
          OM = 1 / 0;
        for (const SM of MM) {
          if (!SM.canStop()) continue;
          const MM = jM(SM, rM.startMs);
          MM < OM && (iM = SM, OM = MM)
        }
        return !(!iM || rM.loudness < OM) && (this.voices.splice(this.voices.indexOf(iM), 1), iM.stop(), !0)
      }
    }
  },
  37529: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM,
      e: () => aM,
      g: () => PM
    });
    var OM = iM(22);
    const SM = "touchSprintChanged";
    let jM = !0;

    function aM() {
      return jM
    }

    function PM(MM) {
      MM !== jM && (jM = MM, OM.i.Tz(SM, MM))
    }
  },
  37761: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      g: () => aM,
      h: () => OM
    });
    class OM {
      constructor(MM) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = MM
      }
      setMultiplierType(MM, rM) {
        var iM;
        this.multipliers[MM] = rM, null === (iM = this._onUpdate) || void 0 === iM || iM.call(this)
      }
      removeMultiplier(MM) {
        var rM;
        delete this.multipliers[MM], null === (rM = this._onUpdate) || void 0 === rM || rM.call(this)
      }
      getMultiplierType(MM) {
        return this.multipliers[MM]
      }
      getTotalMultipliedVal() {
        let MM = 1;
        for (const rM in this.multipliers) MM *= this.multipliers[rM];
        return MM
      }
    }
    class SM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = MM
      }
      setBooleanType(MM, rM) {
        const iM = this._getTotalBooleanVal();
        this.booleans[MM] = !!rM;
        const OM = this.getTotalBooleanVal();
        var SM;
        OM !== iM && (null === (SM = this._onUpdate) || void 0 === SM || SM.call(this, OM, this.booleans));
        return OM
      }
      removeBoolean(MM) {
        const rM = this._getTotalBooleanVal();
        delete this.booleans[MM];
        const iM = this._getTotalBooleanVal();
        var OM;
        null !== iM && iM !== rM && (null === (OM = this._onUpdate) || void 0 === OM || OM.call(this, iM, this.booleans));
        return null !== iM && void 0 !== iM && iM
      }
      getBooleanType(MM) {
        return this.booleans[MM]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var MM;
        null === (MM = this._onUpdate) || void 0 === MM || MM.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class jM extends SM {
      getTotalBooleanVal() {
        const MM = this._getTotalBooleanVal();
        if (null === MM) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return MM
      }
      _getTotalBooleanVal() {
        let MM = !1,
          rM = !0;
        for (const iM in this.booleans) MM = !0, rM &&= this.booleans[iM];
        return MM ? rM : null
      }
    }
    class aM extends SM {
      getTotalBooleanVal() {
        const MM = this._getTotalBooleanVal();
        if (null === MM) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return MM
      }
      _getTotalBooleanVal() {
        let MM = !1,
          rM = !1;
        for (const iM in this.booleans) MM = !0, rM ||= this.booleans[iM];
        return MM ? rM : null
      }
    }
  },
  37758: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM,
      i: () => OM,
      l: () => SM
    });
    const OM = 15,
      SM = 3,
      jM = 30
  },
  6944: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      d: () => SM,
      e: () => nM,
      h: () => jM,
      l: () => QM,
      n: () => OM,
      o: () => PM
    });
    let OM = function(MM) {
        return MM[MM.DEFAULT = 0] = "DEFAULT", MM[MM.BOAT = 1] = "BOAT", MM[MM.GLIDER = 2] = "GLIDER", MM[MM.BALLOON = 3] = "BALLOON", MM[MM.SLEEPING = 4] = "SLEEPING", MM[MM.RIDING_MOB = 5] = "RIDING_MOB", MM[MM.CAR = 6] = "CAR", MM[MM.HOVERCRAFT = 7] = "HOVERCRAFT", MM
      }({}),
      SM = function(MM) {
        return MM[MM.WOOD = 0] = "WOOD", MM[MM.OBSIDIAN = 1] = "OBSIDIAN", MM[MM.SPEED = 2] = "SPEED", MM
      }({}),
      jM = function(MM) {
        return MM[MM.WOOD = 0] = "WOOD", MM[MM.IRON = 1] = "IRON", MM[MM.GOLD = 2] = "GOLD", MM[MM.DIAMOND = 3] = "DIAMOND", MM
      }({}),
      aM = function(MM) {
        return MM[MM.YELLOW = 0] = "YELLOW", MM[MM.WHITE = 1] = "WHITE", MM[MM.RED = 2] = "RED", MM[MM.PURPLE = 3] = "PURPLE", MM[MM.PINK = 4] = "PINK", MM[MM.ORANGE = 5] = "ORANGE", MM[MM.MAGENTA = 6] = "MAGENTA", MM[MM.LIME = 7] = "LIME", MM[MM.LIGHT_GRAY = 8] = "LIGHT_GRAY", MM[MM.LIGHT_BLUE = 9] = "LIGHT_BLUE", MM[MM.GREEN = 10] = "GREEN", MM[MM.GRAY = 11] = "GRAY", MM[MM.CYAN = 12] = "CYAN", MM[MM.BROWN = 13] = "BROWN", MM[MM.BLUE = 14] = "BLUE", MM[MM.BLACK = 15] = "BLACK", MM
      }({}),
      PM = function(MM) {
        return MM[MM.ROTATION_1 = 0] = "ROTATION_1", MM[MM.ROTATION_2 = 1] = "ROTATION_2", MM[MM.ROTATION_3 = 2] = "ROTATION_3", MM[MM.ROTATION_4 = 3] = "ROTATION_4", MM
      }({}),
      nM = function(MM) {
        return MM[MM.KART = 0] = "KART", MM[MM.OFF_ROADER = 1] = "OFF_ROADER", MM[MM.CAR = 2] = "CAR", MM[MM.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", MM[MM.ARMORED_CAR = 4] = "ARMORED_CAR", MM[MM.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", MM[MM.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", MM[MM.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", MM
      }({});
    OM.DEFAULT, OM.BOAT, SM.SPEED, OM.GLIDER, jM.DIAMOND, OM.BALLOON, aM.BLACK, OM.SLEEPING, PM.ROTATION_4, OM.RIDING_MOB, OM.CAR, nM.MOONSTONE_MINING_DRILL, OM.HOVERCRAFT;
    let QM = function(MM) {
      return MM[MM.NORMAL = 0] = "NORMAL", MM[MM.GLIDING = 1] = "GLIDING", MM[MM.FLOATING = 2] = "FLOATING", MM
    }({})
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);