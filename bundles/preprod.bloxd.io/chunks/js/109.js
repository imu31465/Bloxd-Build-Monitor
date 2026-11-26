export const id = 109;
export const ids = [108, 109, 110];
export const modules = {
  37288: (BB, OB, GB) => {
    function YB(BB, OB, GB, YB) {
      return !(GB && !BB.aimable) && (!OB || BB.gun && "head" !== YB)
    }

    function DB(BB) {
      return Math.max(.1 * BB, 1)
    }

    function QB(BB, OB) {
      return !BB && OB
    }
    GB.d(OB, {
      e: () => QB,
      f: () => DB,
      h: () => YB
    })
  },
  37292: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      g: () => oB
    });
    let YB = null;
    const DB = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      QB = {
        crosshairAccuracy: BB => {
          const OB = DB.crosshairAccuracy.at(-1);
          OB ? OB.hook(BB) : YB = BB
        },
        turnDamageIndicators: BB => {
          var OB;
          null === (OB = DB.turnDamageIndicators.at(-1)) || void 0 === OB || OB.hook(BB)
        }
      };

    function oB(BB, OB) {
      const GB = {
          hook: OB
        },
        oB = DB[BB];
      if (oB.push(GB), "crosshairAccuracy" === BB && null !== YB) {
        const BB = YB;
        YB = null, QB.crosshairAccuracy(BB)
      }
      return () => {
        const BB = oB.indexOf(GB); - 1 !== BB && oB.splice(BB, 1)
      }
    }

    function jB() {
      return QB
    }
  },
  34755: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB,
      h: () => DB
    });
    var YB = GB(16);

    function DB(BB, OB) {
      return BB && !OB
    }

    function QB() {
      return DB(YB.c.get("isTouchScreen"), YB.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  37113: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      countDecodesAs: () => PB,
      decodedAudio: () => zB
    });
    var YB = GB(3311),
      DB = GB(5353);
    const QB = DB.Howler,
      oB = new Map;
    let jB = 0;
    const yB = {
        song: 0,
        sound: 0
      },
      JB = new WeakMap,
      MB = new WeakSet;

    function PB(BB, OB) {
      return JB.set(BB, OB), BB
    }

    function zB() {
      return {
        bytes: jB,
        songsDecoded: yB.song,
        soundsDecoded: yB.sound
      }
    }

    function lB(BB) {
      if (MB.has(BB)) return;
      MB.add(BB);
      const OB = 1 === BB.decodeAudioData.length,
        GB = BB.decodeAudioData.bind(BB);
      BB.decodeAudioData = (BB, YB, DB) => {
        const MB = BB => {
          const OB = QB._howls.filter((BB => "loaded" !== BB._state));
          try {
            null === YB || void 0 === YB || YB(BB)
          } finally {
            const GB = OB.find((BB => "loaded" === BB._state));
            void 0 !== GB && "string" === typeof GB._src && function(BB, OB, GB) {
              var YB;
              jB += GB - (null !== (YB = oB.get(OB)) && void 0 !== YB ? YB : 0), oB.set(OB, GB);
              const DB = JB.get(BB);
              void 0 !== DB && yB[DB]++
            }(GB, GB._src, BB.length * BB.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return BB
        };
        if (!OB) return GB(BB, MB, DB);
        const PB = GB(BB).then(MB);
        return PB.catch((BB => {
          null === DB || void 0 === DB || DB(BB)
        })), PB
      }
    }(0, YB.g)(zB);
    const pB = DB.Howl.prototype,
      qB = pB.init;
    pB.init = function(BB) {
      return DB.Howler.volume(), QB.ctx && lB(QB.ctx), qB.call(this, BB)
    };
    const ZB = pB.unload;
    pB.unload = function() {
      const BB = this._src,
        OB = ZB.call(this);
      if ("string" !== typeof BB) return OB;
      const GB = oB.get(BB);
      return void 0 !== GB && function(BB) {
        return !QB._howls.some((OB => OB._src === BB || "string" === typeof OB._src && BB.indexOf(OB._src) >= 0))
      }(BB) && (oB.delete(BB), jB -= GB), OB
    }
  },
  37484: (BB, OB, GB) => {
    async function YB(BB) {
      const OB = await fetch(BB, {
        priority: "low"
      });
      if (!OB.ok) throw new Error(`Fetching ${BB} failed: HTTP ${OB.status}`);
      const GB = OB.body.getReader();
      for (; !(await GB.read()).done;);
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  5353: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Howl: () => DB.Howl,
      Howler: () => DB.Howler,
      musicOutput: () => ZB,
      readyAudioContext: () => NB
    });
    var YB, DB = GB(5362),
      QB = GB(3873),
      oB = GB(5073);
    const jB = DB.Howler;

    function yB() {
      var BB, OB;
      if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
      const GB = navigator.audioSession;
      let YB;
      "auto" === (null === GB || void 0 === GB ? void 0 : GB.type) && (GB.type = "ambient");
      try {
        YB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const DB = YB.createGain();
      DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
    }
    jB._mobileUnloaded = !0;
    const JB = jB.volume.bind(DB.Howler);
    jB.volume = function() {
      return yB(), JB(...arguments)
    };
    const MB = jB.mute.bind(DB.Howler);
    jB.mute = BB => (yB(), MB(BB));
    const PB = DB.Howl.prototype,
      zB = PB.init;

    function lB() {
      for (; jB._html5AudioPool.length < jB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, jB._releaseHtml5Audio(BB)
      }
      for (const OB of jB._howls)
        if (!OB._webAudio)
          for (const GB of OB._getSoundIds()) {
            var BB;
            const YB = null === (BB = OB._soundById(GB)) || void 0 === BB ? void 0 : BB._node;
            YB && !YB._unlocked && (YB._unlocked = !0, YB.load())
          }
    }
    PB.init = function(BB) {
      return yB(), zB.call(this, BB)
    }, (0, oB.h)() && (jB._unlockAudio = () => {
      const BB = jB.ctx;
      if (jB._audioUnlocked || !BB) return;
      jB.autoUnlock = !1;
      const OB = BB.createBuffer(1, 1, 22050);
      jB._scratchBuffer = OB;
      const GB = new AbortController;
      let YB = "afterPaint";
      const DB = () => {
          var YB;
          if (jB._audioUnlocked) return;
          null === (YB = jB._autoResume) || void 0 === YB || YB.call(jB);
          const DB = BB.createBufferSource();
          DB.buffer = OB, DB.connect(BB.destination), DB.start(0), BB.resume().catch((() => {})), DB.onended = () => {
            DB.disconnect(0), jB._audioUnlocked = !0, GB.abort();
            for (const BB of jB._howls) BB._emit("unlock")
          }
        },
        yB = () => {
          lB(), DB()
        },
        JB = OB => {
          if (lB(), "inTap" === YB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), DB()
          } else "afterPaint" === YB && (YB = "queued", (0, QB.c)(OB.timeStamp, (() => {
            YB = "inTap", DB()
          })))
        };
      for (const QB of ["touchstart", "touchend"]) document.addEventListener(QB, yB, {
        capture: !0,
        signal: GB.signal
      });
      for (const QB of oB.c) document.addEventListener(QB, JB, {
        capture: !0,
        signal: GB.signal
      })
    });
    let pB = 0;
    const qB = null === (YB = jB._autoSuspend) || void 0 === YB ? void 0 : YB.bind(DB.Howler);

    function ZB() {
      NB();
      const {
        ctx: BB,
        masterGain: OB
      } = jB;
      return BB && OB ? {
        ctx: BB,
        destination: OB,
        holdAwake: BB => {
          var OB, GB;
          (pB += BB ? 1 : -1, BB) ? null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB): null === (GB = jB._autoSuspend) || void 0 === GB || GB.call(jB)
        },
        wake: () => {
          var OB;
          "running" !== BB.state && (null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function NB() {
      var BB;
      (jB.volume(), jB.ctx && jB.autoUnlock) && (null === (BB = jB._unlockAudio) || void 0 === BB || BB.call(jB))
    }
    qB && (jB._autoSuspend = () => pB > 0 ? DB.Howler : qB())
  },
  37475: (BB, OB, GB) => {
    function YB(BB, OB) {
      let {
        afterJoin: GB,
        joining: YB,
        idle: DB,
        fetchFile: QB,
        rB: oB = () => !1
      } = OB;
      const jB = OB => {
        OB >= BB.length || oB() || GB((() => {
          DB((() => {
            oB() || (YB() ? jB(OB) : QB(BB[OB]).catch((() => {})).finally((() => {
              jB(OB + 1)
            })))
          }))
        }))
      };
      jB(0)
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  37466: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    const YB = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37477: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      e: () => PB
    });
    var YB = GB(16),
      DB = GB(37436),
      QB = GB(4744),
      oB = GB(37484),
      jB = GB(5353),
      yB = GB(244),
      JB = GB(37475);
    const MB = {
        afterJoin: BB => {
          (0, QB.c)(YB.c.get("gameState"), BB)
        },
        joining: () => (0, QB.g)(YB.c.get("gameState")),
        idle: yB.b
      },
      PB = function(BB) {
        const OB = new Set,
          GB = new Set,
          YB = OB => OB.flatMap((OB => {
            const GB = (YB = (0, DB.t)(OB).src, QB = BB.canPlay, YB.find((BB => {
              var OB;
              const GB = null === (OB = /\.([^.]+)$/.exec(BB.split("?", 1)[0])) || void 0 === OB ? void 0 : OB[1];
              return void 0 !== GB && QB(GB.toLowerCase())
            })));
            var YB, QB;
            return void 0 === GB ? [] : [GB]
          }));
        return QB => {
          var oB;
          const jB = (0, DB.n)(QB),
            yB = [];
          OB.has(jB) || (OB.add(jB), yB.push(...YB((0, DB.o)(jB).filter((BB => BB !== QB)))));
          const [MB, PB] = null !== (oB = [...DB.c].find((BB => {
            let [, OB] = BB;
            return OB.includes(jB)
          }))) && void 0 !== oB ? oB : [void 0, []];
          if (void 0 !== MB && !GB.has(MB)) {
            GB.add(MB);
            for (const BB of PB) OB.has(BB) || (OB.add(BB), yB.push(...YB((0, DB.o)(BB))))
          }
          yB.length > 0 && (0, JB.b)(yB, BB)
        }
      }({
        ...MB,
        fetchFile: oB.b,
        canPlay: BB => !!jB.Howler.codecs(BB)
      })
  },
  37461: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      f: () => DB,
      j: () => YB
    });

    function YB(BB) {
      return BB.replace(/[_\-\s]*\d+$/, "") || BB
    }

    function DB(BB, OB, GB) {
      return GB <= 0 ? 0 : BB * GB / Math.max(OB, GB)
    }

    function QB(BB, OB) {
      const GB = BB.getDurationMs();
      return GB > 0 ? BB.loudness * Math.max(0, 1 - (OB - BB.startMs) / GB) : 0
    }
    class oB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = BB, this.maxPerGroup = OB, this.voices = []
      }
      admit(BB) {
        if (this.voices = this.voices.filter((BB => BB.isAlive())), null !== BB.group) {
          const OB = this.voices.filter((OB => OB.group === BB.group));
          if (OB.length >= this.maxPerGroup && !this.dropLeastWorth(OB, BB)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, BB)) && (this.voices.push(BB), !0)
      }
      dropLeastWorth(BB, OB) {
        let GB = null,
          YB = 1 / 0;
        for (const DB of BB) {
          if (!DB.canStop()) continue;
          const BB = QB(DB, OB.startMs);
          BB < YB && (GB = DB, YB = BB)
        }
        return !(!GB || OB.loudness < YB) && (this.voices.splice(this.voices.indexOf(GB), 1), GB.stop(), !0)
      }
    }
  },
  37254: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB,
      i: () => oB,
      k: () => jB
    });
    var YB = GB(25);
    const DB = "touchSprintChanged";
    let QB = !0;

    function oB() {
      return QB
    }

    function jB(BB) {
      BB !== QB && (QB = BB, YB.o.tM(DB, BB))
    }
  },
  37490: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      e: () => oB,
      i: () => YB
    });
    class YB {
      constructor(BB) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setMultiplierType(BB, OB) {
        var GB;
        this.multipliers[BB] = OB, null === (GB = this._onUpdate) || void 0 === GB || GB.call(this)
      }
      removeMultiplier(BB) {
        var OB;
        delete this.multipliers[BB], null === (OB = this._onUpdate) || void 0 === OB || OB.call(this)
      }
      getMultiplierType(BB) {
        return this.multipliers[BB]
      }
      getTotalMultipliedVal() {
        let BB = 1;
        for (const OB in this.multipliers) BB *= this.multipliers[OB];
        return BB
      }
    }
    class DB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = BB
      }
      setBooleanType(BB, OB) {
        const GB = this._getTotalBooleanVal();
        this.booleans[BB] = !!OB;
        const YB = this.getTotalBooleanVal();
        var DB;
        YB !== GB && (null === (DB = this._onUpdate) || void 0 === DB || DB.call(this, YB, this.booleans));
        return YB
      }
      removeBoolean(BB) {
        const OB = this._getTotalBooleanVal();
        delete this.booleans[BB];
        const GB = this._getTotalBooleanVal();
        var YB;
        null !== GB && GB !== OB && (null === (YB = this._onUpdate) || void 0 === YB || YB.call(this, GB, this.booleans));
        return null !== GB && void 0 !== GB && GB
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
    class QB extends DB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          OB = !0;
        for (const GB in this.booleans) BB = !0, OB &&= this.booleans[GB];
        return BB ? OB : null
      }
    }
    class oB extends DB {
      getTotalBooleanVal() {
        const BB = this._getTotalBooleanVal();
        if (null === BB) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return BB
      }
      _getTotalBooleanVal() {
        let BB = !1,
          OB = !1;
        for (const GB in this.booleans) BB = !0, OB ||= this.booleans[GB];
        return BB ? OB : null
      }
    }
  },
  37486: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      f: () => YB,
      g: () => DB
    });
    const YB = 15,
      DB = 3,
      QB = 30
  },
  6991: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => oB,
      h: () => DB,
      j: () => yB,
      k: () => QB,
      n: () => JB,
      o: () => YB,
      p: () => jB
    });
    let YB = function(BB) {
        return BB[BB.DEFAULT = 0] = "DEFAULT", BB[BB.BOAT = 1] = "BOAT", BB[BB.GLIDER = 2] = "GLIDER", BB[BB.BALLOON = 3] = "BALLOON", BB[BB.SLEEPING = 4] = "SLEEPING", BB[BB.RIDING_MOB = 5] = "RIDING_MOB", BB[BB.CAR = 6] = "CAR", BB[BB.HOVERCRAFT = 7] = "HOVERCRAFT", BB
      }({}),
      DB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.OBSIDIAN = 1] = "OBSIDIAN", BB[BB.SPEED = 2] = "SPEED", BB
      }({}),
      QB = function(BB) {
        return BB[BB.WOOD = 0] = "WOOD", BB[BB.IRON = 1] = "IRON", BB[BB.GOLD = 2] = "GOLD", BB[BB.DIAMOND = 3] = "DIAMOND", BB
      }({}),
      oB = function(BB) {
        return BB[BB.YELLOW = 0] = "YELLOW", BB[BB.WHITE = 1] = "WHITE", BB[BB.RED = 2] = "RED", BB[BB.PURPLE = 3] = "PURPLE", BB[BB.PINK = 4] = "PINK", BB[BB.ORANGE = 5] = "ORANGE", BB[BB.MAGENTA = 6] = "MAGENTA", BB[BB.LIME = 7] = "LIME", BB[BB.LIGHT_GRAY = 8] = "LIGHT_GRAY", BB[BB.LIGHT_BLUE = 9] = "LIGHT_BLUE", BB[BB.GREEN = 10] = "GREEN", BB[BB.GRAY = 11] = "GRAY", BB[BB.CYAN = 12] = "CYAN", BB[BB.BROWN = 13] = "BROWN", BB[BB.BLUE = 14] = "BLUE", BB[BB.BLACK = 15] = "BLACK", BB
      }({}),
      jB = function(BB) {
        return BB[BB.ROTATION_1 = 0] = "ROTATION_1", BB[BB.ROTATION_2 = 1] = "ROTATION_2", BB[BB.ROTATION_3 = 2] = "ROTATION_3", BB[BB.ROTATION_4 = 3] = "ROTATION_4", BB
      }({}),
      yB = function(BB) {
        return BB[BB.KART = 0] = "KART", BB[BB.OFF_ROADER = 1] = "OFF_ROADER", BB[BB.CAR = 2] = "CAR", BB[BB.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", BB[BB.ARMORED_CAR = 4] = "ARMORED_CAR", BB[BB.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", BB[BB.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", BB[BB.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", BB
      }({});
    YB.DEFAULT, YB.BOAT, DB.SPEED, YB.GLIDER, QB.DIAMOND, YB.BALLOON, oB.BLACK, YB.SLEEPING, jB.ROTATION_4, YB.RIDING_MOB, YB.CAR, yB.MOONSTONE_MINING_DRILL, YB.HOVERCRAFT;
    let JB = function(BB) {
      return BB[BB.NORMAL = 0] = "NORMAL", BB[BB.GLIDING = 1] = "GLIDING", BB[BB.FLOATING = 2] = "FLOATING", BB
    }({})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);