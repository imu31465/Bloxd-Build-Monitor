export const id = 109;
export const ids = [108, 109, 110];
export const modules = {
  37345: (UU, XU, zU) => {
    function cU(UU, XU, zU, cU) {
      return !(zU && !UU.aimable) && (!XU || UU.gun && "head" !== cU)
    }

    function yU(UU) {
      return Math.max(.1 * UU, 1)
    }

    function QU(UU, XU) {
      return !UU && XU
    }
    zU.d(XU, {
      c: () => QU,
      e: () => yU,
      h: () => cU
    })
  },
  37354: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      d: () => AU
    });
    let cU = null;
    const yU = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      QU = {
        crosshairAccuracy: UU => {
          const XU = yU.crosshairAccuracy.at(-1);
          XU ? XU.hook(UU) : cU = UU
        },
        turnDamageIndicators: UU => {
          var XU;
          null === (XU = yU.turnDamageIndicators.at(-1)) || void 0 === XU || XU.hook(UU)
        }
      };

    function AU(UU, XU) {
      const zU = {
          hook: XU
        },
        AU = yU[UU];
      if (AU.push(zU), "crosshairAccuracy" === UU && null !== cU) {
        const UU = cU;
        cU = null, QU.crosshairAccuracy(UU)
      }
      return () => {
        const UU = AU.indexOf(zU); - 1 !== UU && AU.splice(UU, 1)
      }
    }

    function FU() {
      return QU
    }
  },
  37148: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      countDecodesAs: () => YU,
      decodedAudio: () => NU
    });
    var cU = zU(3258),
      yU = zU(5378);
    const QU = yU.Howler,
      AU = new Map;
    let FU = 0;
    const oU = {
        song: 0,
        sound: 0
      },
      DU = new WeakMap,
      EU = new WeakSet;

    function YU(UU, XU) {
      return DU.set(UU, XU), UU
    }

    function NU() {
      return {
        bytes: FU,
        songsDecoded: oU.song,
        soundsDecoded: oU.sound
      }
    }

    function IU(UU) {
      if (EU.has(UU)) return;
      EU.add(UU);
      const XU = 1 === UU.decodeAudioData.length,
        zU = UU.decodeAudioData.bind(UU);
      UU.decodeAudioData = (UU, cU, yU) => {
        const EU = UU => {
          const XU = QU._howls.filter((UU => "loaded" !== UU._state));
          try {
            null === cU || void 0 === cU || cU(UU)
          } finally {
            const zU = XU.find((UU => "loaded" === UU._state));
            void 0 !== zU && "string" === typeof zU._src && function(UU, XU, zU) {
              var cU;
              FU += zU - (null !== (cU = AU.get(XU)) && void 0 !== cU ? cU : 0), AU.set(XU, zU);
              const yU = DU.get(UU);
              void 0 !== yU && oU[yU]++
            }(zU, zU._src, UU.length * UU.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return UU
        };
        if (!XU) return zU(UU, EU, yU);
        const YU = zU(UU).then(EU);
        return YU.catch((UU => {
          null === yU || void 0 === yU || yU(UU)
        })), YU
      }
    }(0, cU.c)(NU);
    const pU = yU.Howl.prototype,
      aU = pU.init;
    pU.init = function(UU) {
      return yU.Howler.volume(), QU.ctx && IU(QU.ctx), aU.call(this, UU)
    };
    const tU = pU.unload;
    pU.unload = function() {
      const UU = this._src,
        XU = tU.call(this);
      if ("string" !== typeof UU) return XU;
      const zU = AU.get(UU);
      return void 0 !== zU && function(UU) {
        return !QU._howls.some((XU => XU._src === UU || "string" === typeof XU._src && UU.indexOf(XU._src) >= 0))
      }(UU) && (AU.delete(UU), FU -= zU), XU
    }
  },
  37514: (UU, XU, zU) => {
    async function cU(UU) {
      const XU = await fetch(UU, {
        priority: "low"
      });
      if (!XU.ok) throw new Error(`Fetching ${UU} failed: HTTP ${XU.status}`);
      const zU = XU.body.getReader();
      for (; !(await zU.read()).done;);
    }
    zU.d(XU, {
      c: () => cU
    })
  },
  5378: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Howl: () => yU.Howl,
      Howler: () => yU.Howler,
      musicOutput: () => tU,
      readyAudioContext: () => gU
    });
    var cU, yU = zU(5383),
      QU = zU(3837),
      AU = zU(5092);
    const FU = yU.Howler;

    function oU() {
      var UU, XU;
      if (FU.ctx || !FU.usingWebAudio || "undefined" === typeof AudioContext || !(0, AU.j)()) return;
      const zU = navigator.audioSession;
      let cU;
      "auto" === (null === zU || void 0 === zU ? void 0 : zU.type) && (zU.type = "ambient");
      try {
        cU = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const yU = cU.createGain();
      yU.gain.setValueAtTime(FU._muted ? 0 : null !== (UU = FU._volume) && void 0 !== UU ? UU : 1, cU.currentTime), yU.connect(cU.destination), FU.ctx = cU, FU.masterGain = yU, null === (XU = FU._setup) || void 0 === XU || XU.call(FU)
    }
    FU._mobileUnloaded = !0;
    const DU = FU.volume.bind(yU.Howler);
    FU.volume = function() {
      return oU(), DU(...arguments)
    };
    const EU = FU.mute.bind(yU.Howler);
    FU.mute = UU => (oU(), EU(UU));
    const YU = yU.Howl.prototype,
      NU = YU.init;

    function IU() {
      for (; FU._html5AudioPool.length < FU.html5PoolSize;) {
        const UU = new Audio;
        UU._unlocked = !0, FU._releaseHtml5Audio(UU)
      }
      for (const XU of FU._howls)
        if (!XU._webAudio)
          for (const zU of XU._getSoundIds()) {
            var UU;
            const cU = null === (UU = XU._soundById(zU)) || void 0 === UU ? void 0 : UU._node;
            cU && !cU._unlocked && (cU._unlocked = !0, cU.load())
          }
    }
    YU.init = function(UU) {
      return oU(), NU.call(this, UU)
    }, (0, AU.j)() && (FU._unlockAudio = () => {
      const UU = FU.ctx;
      if (FU._audioUnlocked || !UU) return;
      FU.autoUnlock = !1;
      const XU = UU.createBuffer(1, 1, 22050);
      FU._scratchBuffer = XU;
      const zU = new AbortController;
      let cU = "afterPaint";
      const yU = () => {
          var cU;
          if (FU._audioUnlocked) return;
          null === (cU = FU._autoResume) || void 0 === cU || cU.call(FU);
          const yU = UU.createBufferSource();
          yU.buffer = XU, yU.connect(UU.destination), yU.start(0), UU.resume().catch((() => {})), yU.onended = () => {
            yU.disconnect(0), FU._audioUnlocked = !0, zU.abort();
            for (const UU of FU._howls) UU._emit("unlock")
          }
        },
        oU = () => {
          IU(), yU()
        },
        DU = XU => {
          if (IU(), "inTap" === cU) {
            if ("running" === UU.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), yU()
          } else "afterPaint" === cU && (cU = "queued", (0, QU.d)(XU.timeStamp, (() => {
            cU = "inTap", yU()
          })))
        };
      for (const QU of ["touchstart", "touchend"]) document.addEventListener(QU, oU, {
        capture: !0,
        signal: zU.signal
      });
      for (const QU of AU.c) document.addEventListener(QU, DU, {
        capture: !0,
        signal: zU.signal
      })
    });
    let pU = 0;
    const aU = null === (cU = FU._autoSuspend) || void 0 === cU ? void 0 : cU.bind(yU.Howler);

    function tU() {
      gU();
      const {
        ctx: UU,
        masterGain: XU
      } = FU;
      return UU && XU ? {
        ctx: UU,
        destination: XU,
        holdAwake: UU => {
          var XU, zU;
          (pU += UU ? 1 : -1, UU) ? null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU): null === (zU = FU._autoSuspend) || void 0 === zU || zU.call(FU)
        },
        wake: () => {
          var XU;
          "running" !== UU.state && (null === (XU = FU._autoResume) || void 0 === XU || XU.call(FU), UU.resume().catch((() => {})))
        }
      } : null
    }

    function gU() {
      var UU;
      (FU.volume(), FU.ctx && FU.autoUnlock) && (null === (UU = FU._unlockAudio) || void 0 === UU || UU.call(FU))
    }
    aU && (FU._autoSuspend = () => pU > 0 ? yU.Howler : aU())
  },
  37502: (UU, XU, zU) => {
    function cU(UU, XU) {
      let {
        afterJoin: zU,
        joining: cU,
        idle: yU,
        fetchFile: QU,
        QU: AU = () => !1
      } = XU;
      const FU = XU => {
        XU >= UU.length || AU() || zU((() => {
          yU((() => {
            AU() || (cU() ? FU(XU) : QU(UU[XU]).catch((() => {})).finally((() => {
              FU(XU + 1)
            })))
          }))
        }))
      };
      FU(0)
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  37495: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    const cU = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37507: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => EU,
      e: () => YU
    });
    var cU = zU(27),
      yU = zU(37480),
      QU = zU(4735),
      AU = zU(37514),
      FU = zU(5378),
      oU = zU(264),
      DU = zU(37502);
    const EU = {
        afterJoin: UU => {
          (0, QU.d)(cU.e.get("gameState"), UU)
        },
        joining: () => (0, QU.g)(cU.e.get("gameState")),
        idle: oU.b
      },
      YU = function(UU) {
        const XU = new Set,
          zU = new Set,
          cU = XU => XU.flatMap((XU => {
            const zU = (cU = (0, yU.y)(XU).src, QU = UU.canPlay, cU.find((UU => {
              var XU;
              const zU = null === (XU = /\.([^.]+)$/.exec(UU.split("?", 1)[0])) || void 0 === XU ? void 0 : XU[1];
              return void 0 !== zU && QU(zU.toLowerCase())
            })));
            var cU, QU;
            return void 0 === zU ? [] : [zU]
          }));
        return QU => {
          var AU;
          const FU = (0, yU.n)(QU),
            oU = [];
          XU.has(FU) || (XU.add(FU), oU.push(...cU((0, yU.r)(FU).filter((UU => UU !== QU)))));
          const [EU, YU] = null !== (AU = [...yU.e].find((UU => {
            let [, XU] = UU;
            return XU.includes(FU)
          }))) && void 0 !== AU ? AU : [void 0, []];
          if (void 0 !== EU && !zU.has(EU)) {
            zU.add(EU);
            for (const UU of YU) XU.has(UU) || (XU.add(UU), oU.push(...cU((0, yU.r)(UU))))
          }
          oU.length > 0 && (0, DU.d)(oU, UU)
        }
      }({
        ...EU,
        fetchFile: AU.c,
        canPlay: UU => !!FU.Howler.codecs(UU)
      })
  },
  37492: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU,
      d: () => yU,
      e: () => cU
    });

    function cU(UU) {
      return UU.replace(/[_\-\s]*\d+$/, "") || UU
    }

    function yU(UU, XU, zU) {
      return zU <= 0 ? 0 : UU * zU / Math.max(XU, zU)
    }

    function QU(UU, XU) {
      const zU = UU.getDurationMs();
      return zU > 0 ? UU.loudness * Math.max(0, 1 - (XU - UU.startMs) / zU) : 0
    }
    class AU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = UU, this.maxPerGroup = XU, this.voices = []
      }
      admit(UU) {
        if (this.voices = this.voices.filter((UU => UU.isAlive())), null !== UU.group) {
          const XU = this.voices.filter((XU => XU.group === UU.group));
          if (XU.length >= this.maxPerGroup && !this.dropLeastWorth(XU, UU)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, UU)) && (this.voices.push(UU), !0)
      }
      dropLeastWorth(UU, XU) {
        let zU = null,
          cU = 1 / 0;
        for (const yU of UU) {
          if (!yU.canStop()) continue;
          const UU = QU(yU, XU.startMs);
          UU < cU && (zU = yU, cU = UU)
        }
        return !(!zU || XU.loudness < cU) && (this.voices.splice(this.voices.indexOf(zU), 1), zU.stop(), !0)
      }
    }
  },
  37311: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      g: () => AU,
      h: () => FU
    });
    var cU = zU(31);
    const yU = "touchSprintChanged";
    let QU = !0;

    function AU() {
      return QU
    }

    function FU(UU) {
      UU !== QU && (QU = UU, cU.k.UY(yU, UU))
    }
  },
  37532: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      g: () => AU,
      i: () => cU
    });
    class cU {
      constructor(UU) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = UU
      }
      setMultiplierType(UU, XU) {
        var zU;
        this.multipliers[UU] = XU, null === (zU = this._onUpdate) || void 0 === zU || zU.call(this)
      }
      removeMultiplier(UU) {
        var XU;
        delete this.multipliers[UU], null === (XU = this._onUpdate) || void 0 === XU || XU.call(this)
      }
      getMultiplierType(UU) {
        return this.multipliers[UU]
      }
      getTotalMultipliedVal() {
        let UU = 1;
        for (const XU in this.multipliers) UU *= this.multipliers[XU];
        return UU
      }
    }
    class yU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = UU
      }
      setBooleanType(UU, XU) {
        const zU = this._getTotalBooleanVal();
        this.booleans[UU] = !!XU;
        const cU = this.getTotalBooleanVal();
        var yU;
        cU !== zU && (null === (yU = this._onUpdate) || void 0 === yU || yU.call(this, cU, this.booleans));
        return cU
      }
      removeBoolean(UU) {
        const XU = this._getTotalBooleanVal();
        delete this.booleans[UU];
        const zU = this._getTotalBooleanVal();
        var cU;
        null !== zU && zU !== XU && (null === (cU = this._onUpdate) || void 0 === cU || cU.call(this, zU, this.booleans));
        return null !== zU && void 0 !== zU && zU
      }
      getBooleanType(UU) {
        return this.booleans[UU]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var UU;
        null === (UU = this._onUpdate) || void 0 === UU || UU.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class QU extends yU {
      getTotalBooleanVal() {
        const UU = this._getTotalBooleanVal();
        if (null === UU) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return UU
      }
      _getTotalBooleanVal() {
        let UU = !1,
          XU = !0;
        for (const zU in this.booleans) UU = !0, XU &&= this.booleans[zU];
        return UU ? XU : null
      }
    }
    class AU extends yU {
      getTotalBooleanVal() {
        const UU = this._getTotalBooleanVal();
        if (null === UU) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return UU
      }
      _getTotalBooleanVal() {
        let UU = !1,
          XU = !1;
        for (const zU in this.booleans) UU = !0, XU ||= this.booleans[zU];
        return UU ? XU : null
      }
    }
  },
  37523: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      f: () => cU,
      g: () => yU
    });
    const cU = 15,
      yU = 3,
      QU = 30
  },
  7056: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU,
      f: () => yU,
      j: () => oU,
      k: () => QU,
      l: () => DU,
      o: () => cU,
      p: () => FU
    });
    let cU = function(UU) {
        return UU[UU.DEFAULT = 0] = "DEFAULT", UU[UU.BOAT = 1] = "BOAT", UU[UU.GLIDER = 2] = "GLIDER", UU[UU.BALLOON = 3] = "BALLOON", UU[UU.SLEEPING = 4] = "SLEEPING", UU[UU.RIDING_MOB = 5] = "RIDING_MOB", UU[UU.CAR = 6] = "CAR", UU[UU.HOVERCRAFT = 7] = "HOVERCRAFT", UU
      }({}),
      yU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.OBSIDIAN = 1] = "OBSIDIAN", UU[UU.SPEED = 2] = "SPEED", UU
      }({}),
      QU = function(UU) {
        return UU[UU.WOOD = 0] = "WOOD", UU[UU.IRON = 1] = "IRON", UU[UU.GOLD = 2] = "GOLD", UU[UU.DIAMOND = 3] = "DIAMOND", UU
      }({}),
      AU = function(UU) {
        return UU[UU.YELLOW = 0] = "YELLOW", UU[UU.WHITE = 1] = "WHITE", UU[UU.RED = 2] = "RED", UU[UU.PURPLE = 3] = "PURPLE", UU[UU.PINK = 4] = "PINK", UU[UU.ORANGE = 5] = "ORANGE", UU[UU.MAGENTA = 6] = "MAGENTA", UU[UU.LIME = 7] = "LIME", UU[UU.LIGHT_GRAY = 8] = "LIGHT_GRAY", UU[UU.LIGHT_BLUE = 9] = "LIGHT_BLUE", UU[UU.GREEN = 10] = "GREEN", UU[UU.GRAY = 11] = "GRAY", UU[UU.CYAN = 12] = "CYAN", UU[UU.BROWN = 13] = "BROWN", UU[UU.BLUE = 14] = "BLUE", UU[UU.BLACK = 15] = "BLACK", UU
      }({}),
      FU = function(UU) {
        return UU[UU.ROTATION_1 = 0] = "ROTATION_1", UU[UU.ROTATION_2 = 1] = "ROTATION_2", UU[UU.ROTATION_3 = 2] = "ROTATION_3", UU[UU.ROTATION_4 = 3] = "ROTATION_4", UU
      }({}),
      oU = function(UU) {
        return UU[UU.KART = 0] = "KART", UU[UU.OFF_ROADER = 1] = "OFF_ROADER", UU[UU.CAR = 2] = "CAR", UU[UU.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", UU[UU.ARMORED_CAR = 4] = "ARMORED_CAR", UU[UU.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", UU[UU.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", UU[UU.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", UU
      }({});
    cU.DEFAULT, cU.BOAT, yU.SPEED, cU.GLIDER, QU.DIAMOND, cU.BALLOON, AU.BLACK, cU.SLEEPING, FU.ROTATION_4, cU.RIDING_MOB, cU.CAR, oU.MOONSTONE_MINING_DRILL, cU.HOVERCRAFT;
    let DU = function(UU) {
      return UU[UU.NORMAL = 0] = "NORMAL", UU[UU.GLIDING = 1] = "GLIDING", UU[UU.FLOATING = 2] = "FLOATING", UU
    }({})
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);