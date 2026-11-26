export const id = 109;
export const ids = [108, 109, 110];
export const modules = {
  37496: (HH, BH, LH) => {
    function AH(HH, BH, LH, AH) {
      return !(LH && !HH.aimable) && (!BH || HH.gun && "head" !== AH)
    }

    function rH(HH) {
      return Math.max(.1 * HH, 1)
    }

    function SH(HH, BH) {
      return !HH && BH
    }
    LH.d(BH, {
      b: () => SH,
      d: () => rH,
      f: () => AH
    })
  },
  37504: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      i: () => hH
    });
    let AH = null;
    const rH = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      SH = {
        crosshairAccuracy: HH => {
          const BH = rH.crosshairAccuracy.at(-1);
          BH ? BH.hook(HH) : AH = HH
        },
        turnDamageIndicators: HH => {
          var BH;
          null === (BH = rH.turnDamageIndicators.at(-1)) || void 0 === BH || BH.hook(HH)
        }
      };

    function hH(HH, BH) {
      const LH = {
          hook: BH
        },
        hH = rH[HH];
      if (hH.push(LH), "crosshairAccuracy" === HH && null !== AH) {
        const HH = AH;
        AH = null, SH.crosshairAccuracy(HH)
      }
      return () => {
        const HH = hH.indexOf(LH); - 1 !== HH && hH.splice(HH, 1)
      }
    }

    function tH() {
      return SH
    }
  },
  34942: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      g: () => rH
    });
    var AH = LH(15);

    function rH(HH, BH) {
      return HH && !BH
    }

    function SH() {
      return rH(AH.c.get("isTouchScreen"), AH.c.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  37326: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      countDecodesAs: () => XH,
      decodedAudio: () => GH
    });
    var AH = LH(3263),
      rH = LH(5335);
    const SH = rH.Howler,
      hH = new Map;
    let tH = 0;
    const zH = {
        song: 0,
        sound: 0
      },
      CH = new WeakMap,
      EH = new WeakSet;

    function XH(HH, BH) {
      return CH.set(HH, BH), HH
    }

    function GH() {
      return {
        bytes: tH,
        songsDecoded: zH.song,
        soundsDecoded: zH.sound
      }
    }

    function YH(HH) {
      if (EH.has(HH)) return;
      EH.add(HH);
      const BH = 1 === HH.decodeAudioData.length,
        LH = HH.decodeAudioData.bind(HH);
      HH.decodeAudioData = (HH, AH, rH) => {
        const EH = HH => {
          const BH = SH._howls.filter((HH => "loaded" !== HH._state));
          try {
            null === AH || void 0 === AH || AH(HH)
          } finally {
            const LH = BH.find((HH => "loaded" === HH._state));
            void 0 !== LH && "string" === typeof LH._src && function(HH, BH, LH) {
              var AH;
              tH += LH - (null !== (AH = hH.get(BH)) && void 0 !== AH ? AH : 0), hH.set(BH, LH);
              const rH = CH.get(HH);
              void 0 !== rH && zH[rH]++
            }(LH, LH._src, HH.length * HH.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return HH
        };
        if (!BH) return LH(HH, EH, rH);
        const XH = LH(HH).then(EH);
        return XH.catch((HH => {
          null === rH || void 0 === rH || rH(HH)
        })), XH
      }
    }(0, AH.h)(GH);
    const uH = rH.Howl.prototype,
      QH = uH.init;
    uH.init = function(HH) {
      return rH.Howler.volume(), SH.ctx && YH(SH.ctx), QH.call(this, HH)
    };
    const WH = uH.unload;
    uH.unload = function() {
      const HH = this._src,
        BH = WH.call(this);
      if ("string" !== typeof HH) return BH;
      const LH = hH.get(HH);
      return void 0 !== LH && function(HH) {
        return !SH._howls.some((BH => BH._src === HH || "string" === typeof BH._src && HH.indexOf(BH._src) >= 0))
      }(HH) && (hH.delete(HH), tH -= LH), BH
    }
  },
  37652: (HH, BH, LH) => {
    async function AH(HH) {
      const BH = await fetch(HH, {
        priority: "low"
      });
      if (!BH.ok) throw new Error(`Fetching ${HH} failed: HTTP ${BH.status}`);
      const LH = BH.body.getReader();
      for (; !(await LH.read()).done;);
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  5335: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Howl: () => rH.Howl,
      Howler: () => rH.Howler,
      musicOutput: () => WH,
      readyAudioContext: () => MH
    });
    var AH, rH = LH(5343),
      SH = LH(3811),
      hH = LH(5067);
    const tH = rH.Howler;

    function zH() {
      var HH, BH;
      if (tH.ctx || !tH.usingWebAudio || "undefined" === typeof AudioContext || !(0, hH.i)()) return;
      const LH = navigator.audioSession;
      let AH;
      "auto" === (null === LH || void 0 === LH ? void 0 : LH.type) && (LH.type = "ambient");
      try {
        AH = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const rH = AH.createGain();
      rH.gain.setValueAtTime(tH._muted ? 0 : null !== (HH = tH._volume) && void 0 !== HH ? HH : 1, AH.currentTime), rH.connect(AH.destination), tH.ctx = AH, tH.masterGain = rH, null === (BH = tH._setup) || void 0 === BH || BH.call(tH)
    }
    tH._mobileUnloaded = !0;
    const CH = tH.volume.bind(rH.Howler);
    tH.volume = function() {
      return zH(), CH(...arguments)
    };
    const EH = tH.mute.bind(rH.Howler);
    tH.mute = HH => (zH(), EH(HH));
    const XH = rH.Howl.prototype,
      GH = XH.init;

    function YH() {
      for (; tH._html5AudioPool.length < tH.html5PoolSize;) {
        const HH = new Audio;
        HH._unlocked = !0, tH._releaseHtml5Audio(HH)
      }
      for (const BH of tH._howls)
        if (!BH._webAudio)
          for (const LH of BH._getSoundIds()) {
            var HH;
            const AH = null === (HH = BH._soundById(LH)) || void 0 === HH ? void 0 : HH._node;
            AH && !AH._unlocked && (AH._unlocked = !0, AH.load())
          }
    }
    XH.init = function(HH) {
      return zH(), GH.call(this, HH)
    }, (0, hH.i)() && (tH._unlockAudio = () => {
      const HH = tH.ctx;
      if (tH._audioUnlocked || !HH) return;
      tH.autoUnlock = !1;
      const BH = HH.createBuffer(1, 1, 22050);
      tH._scratchBuffer = BH;
      const LH = new AbortController;
      let AH = "afterPaint";
      const rH = () => {
          var AH;
          if (tH._audioUnlocked) return;
          null === (AH = tH._autoResume) || void 0 === AH || AH.call(tH);
          const rH = HH.createBufferSource();
          rH.buffer = BH, rH.connect(HH.destination), rH.start(0), HH.resume().catch((() => {})), rH.onended = () => {
            rH.disconnect(0), tH._audioUnlocked = !0, LH.abort();
            for (const HH of tH._howls) HH._emit("unlock")
          }
        },
        zH = () => {
          YH(), rH()
        },
        CH = BH => {
          if (YH(), "inTap" === AH) {
            if ("running" === HH.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), rH()
          } else "afterPaint" === AH && (AH = "queued", (0, SH.c)(BH.timeStamp, (() => {
            AH = "inTap", rH()
          })))
        };
      for (const SH of ["touchstart", "touchend"]) document.addEventListener(SH, zH, {
        capture: !0,
        signal: LH.signal
      });
      for (const SH of hH.d) document.addEventListener(SH, CH, {
        capture: !0,
        signal: LH.signal
      })
    });
    let uH = 0;
    const QH = null === (AH = tH._autoSuspend) || void 0 === AH ? void 0 : AH.bind(rH.Howler);

    function WH() {
      MH();
      const {
        ctx: HH,
        masterGain: BH
      } = tH;
      return HH && BH ? {
        ctx: HH,
        destination: BH,
        holdAwake: HH => {
          var BH, LH;
          (uH += HH ? 1 : -1, HH) ? null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH): null === (LH = tH._autoSuspend) || void 0 === LH || LH.call(tH)
        },
        wake: () => {
          var BH;
          "running" !== HH.state && (null === (BH = tH._autoResume) || void 0 === BH || BH.call(tH), HH.resume().catch((() => {})))
        }
      } : null
    }

    function MH() {
      var HH;
      (tH.volume(), tH.ctx && tH.autoUnlock) && (null === (HH = tH._unlockAudio) || void 0 === HH || HH.call(tH))
    }
    QH && (tH._autoSuspend = () => uH > 0 ? rH.Howler : QH())
  },
  37648: (HH, BH, LH) => {
    function AH(HH, BH) {
      let {
        afterJoin: LH,
        joining: AH,
        idle: rH,
        fetchFile: SH,
        xB: hH = () => !1
      } = BH;
      const tH = BH => {
        BH >= HH.length || hH() || LH((() => {
          rH((() => {
            hH() || (AH() ? tH(BH) : SH(HH[BH]).catch((() => {})).finally((() => {
              tH(BH + 1)
            })))
          }))
        }))
      };
      tH(0)
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  37642: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    const AH = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37650: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => EH,
      i: () => XH
    });
    var AH = LH(15),
      rH = LH(37617),
      SH = LH(4727),
      hH = LH(37652),
      tH = LH(5335),
      zH = LH(225),
      CH = LH(37648);
    const EH = {
        afterJoin: HH => {
          (0, SH.e)(AH.c.get("gameState"), HH)
        },
        joining: () => (0, SH.i)(AH.c.get("gameState")),
        idle: zH.d
      },
      XH = function(HH) {
        const BH = new Set,
          LH = new Set,
          AH = BH => BH.flatMap((BH => {
            const LH = (AH = (0, rH.v)(BH).src, SH = HH.canPlay, AH.find((HH => {
              var BH;
              const LH = null === (BH = /\.([^.]+)$/.exec(HH.split("?", 1)[0])) || void 0 === BH ? void 0 : BH[1];
              return void 0 !== LH && SH(LH.toLowerCase())
            })));
            var AH, SH;
            return void 0 === LH ? [] : [LH]
          }));
        return SH => {
          var hH;
          const tH = (0, rH.o)(SH),
            zH = [];
          BH.has(tH) || (BH.add(tH), zH.push(...AH((0, rH.p)(tH).filter((HH => HH !== SH)))));
          const [EH, XH] = null !== (hH = [...rH.d].find((HH => {
            let [, BH] = HH;
            return BH.includes(tH)
          }))) && void 0 !== hH ? hH : [void 0, []];
          if (void 0 !== EH && !LH.has(EH)) {
            LH.add(EH);
            for (const HH of XH) BH.has(HH) || (BH.add(HH), zH.push(...AH((0, rH.p)(HH))))
          }
          zH.length > 0 && (0, CH.b)(zH, HH)
        }
      }({
        ...EH,
        fetchFile: hH.c,
        canPlay: HH => !!tH.Howler.codecs(HH)
      })
  },
  37640: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      d: () => rH,
      e: () => AH
    });

    function AH(HH) {
      return HH.replace(/[_\-\s]*\d+$/, "") || HH
    }

    function rH(HH, BH, LH) {
      return LH <= 0 ? 0 : HH * LH / Math.max(BH, LH)
    }

    function SH(HH, BH) {
      const LH = HH.getDurationMs();
      return LH > 0 ? HH.loudness * Math.max(0, 1 - (BH - HH.startMs) / LH) : 0
    }
    class hH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = HH, this.maxPerGroup = BH, this.voices = []
      }
      admit(HH) {
        if (this.voices = this.voices.filter((HH => HH.isAlive())), null !== HH.group) {
          const BH = this.voices.filter((BH => BH.group === HH.group));
          if (BH.length >= this.maxPerGroup && !this.dropLeastWorth(BH, HH)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, HH)) && (this.voices.push(HH), !0)
      }
      dropLeastWorth(HH, BH) {
        let LH = null,
          AH = 1 / 0;
        for (const rH of HH) {
          if (!rH.canStop()) continue;
          const HH = SH(rH, BH.startMs);
          HH < AH && (LH = rH, AH = HH)
        }
        return !(!LH || BH.loudness < AH) && (this.voices.splice(this.voices.indexOf(LH), 1), LH.stop(), !0)
      }
    }
  },
  37467: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH,
      g: () => hH,
      i: () => tH
    });
    var AH = LH(18);
    const rH = "touchSprintChanged";
    let SH = !0;

    function hH() {
      return SH
    }

    function tH(HH) {
      HH !== SH && (SH = HH, AH.k.AX(rH, HH))
    }
  },
  37656: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => SH,
      d: () => hH,
      f: () => AH
    });
    class AH {
      constructor(HH) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = HH
      }
      setMultiplierType(HH, BH) {
        var LH;
        this.multipliers[HH] = BH, null === (LH = this._onUpdate) || void 0 === LH || LH.call(this)
      }
      removeMultiplier(HH) {
        var BH;
        delete this.multipliers[HH], null === (BH = this._onUpdate) || void 0 === BH || BH.call(this)
      }
      getMultiplierType(HH) {
        return this.multipliers[HH]
      }
      getTotalMultipliedVal() {
        let HH = 1;
        for (const BH in this.multipliers) HH *= this.multipliers[BH];
        return HH
      }
    }
    class rH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = HH
      }
      setBooleanType(HH, BH) {
        const LH = this._getTotalBooleanVal();
        this.booleans[HH] = !!BH;
        const AH = this.getTotalBooleanVal();
        var rH;
        AH !== LH && (null === (rH = this._onUpdate) || void 0 === rH || rH.call(this, AH, this.booleans));
        return AH
      }
      removeBoolean(HH) {
        const BH = this._getTotalBooleanVal();
        delete this.booleans[HH];
        const LH = this._getTotalBooleanVal();
        var AH;
        null !== LH && LH !== BH && (null === (AH = this._onUpdate) || void 0 === AH || AH.call(this, LH, this.booleans));
        return null !== LH && void 0 !== LH && LH
      }
      getBooleanType(HH) {
        return this.booleans[HH]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var HH;
        null === (HH = this._onUpdate) || void 0 === HH || HH.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class SH extends rH {
      getTotalBooleanVal() {
        const HH = this._getTotalBooleanVal();
        if (null === HH) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return HH
      }
      _getTotalBooleanVal() {
        let HH = !1,
          BH = !0;
        for (const LH in this.booleans) HH = !0, BH &&= this.booleans[LH];
        return HH ? BH : null
      }
    }
    class hH extends rH {
      getTotalBooleanVal() {
        const HH = this._getTotalBooleanVal();
        if (null === HH) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return HH
      }
      _getTotalBooleanVal() {
        let HH = !1,
          BH = !1;
        for (const LH in this.booleans) HH = !0, BH ||= this.booleans[LH];
        return HH ? BH : null
      }
    }
  },
  37654: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => SH,
      f: () => AH,
      i: () => rH
    });
    const AH = 15,
      rH = 3,
      SH = 30
  },
  7007: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH,
      e: () => rH,
      h: () => zH,
      i: () => SH,
      m: () => CH,
      o: () => AH,
      p: () => tH
    });
    let AH = function(HH) {
        return HH[HH.DEFAULT = 0] = "DEFAULT", HH[HH.BOAT = 1] = "BOAT", HH[HH.GLIDER = 2] = "GLIDER", HH[HH.BALLOON = 3] = "BALLOON", HH[HH.SLEEPING = 4] = "SLEEPING", HH[HH.RIDING_MOB = 5] = "RIDING_MOB", HH[HH.CAR = 6] = "CAR", HH[HH.HOVERCRAFT = 7] = "HOVERCRAFT", HH
      }({}),
      rH = function(HH) {
        return HH[HH.WOOD = 0] = "WOOD", HH[HH.OBSIDIAN = 1] = "OBSIDIAN", HH[HH.SPEED = 2] = "SPEED", HH
      }({}),
      SH = function(HH) {
        return HH[HH.WOOD = 0] = "WOOD", HH[HH.IRON = 1] = "IRON", HH[HH.GOLD = 2] = "GOLD", HH[HH.DIAMOND = 3] = "DIAMOND", HH
      }({}),
      hH = function(HH) {
        return HH[HH.YELLOW = 0] = "YELLOW", HH[HH.WHITE = 1] = "WHITE", HH[HH.RED = 2] = "RED", HH[HH.PURPLE = 3] = "PURPLE", HH[HH.PINK = 4] = "PINK", HH[HH.ORANGE = 5] = "ORANGE", HH[HH.MAGENTA = 6] = "MAGENTA", HH[HH.LIME = 7] = "LIME", HH[HH.LIGHT_GRAY = 8] = "LIGHT_GRAY", HH[HH.LIGHT_BLUE = 9] = "LIGHT_BLUE", HH[HH.GREEN = 10] = "GREEN", HH[HH.GRAY = 11] = "GRAY", HH[HH.CYAN = 12] = "CYAN", HH[HH.BROWN = 13] = "BROWN", HH[HH.BLUE = 14] = "BLUE", HH[HH.BLACK = 15] = "BLACK", HH
      }({}),
      tH = function(HH) {
        return HH[HH.ROTATION_1 = 0] = "ROTATION_1", HH[HH.ROTATION_2 = 1] = "ROTATION_2", HH[HH.ROTATION_3 = 2] = "ROTATION_3", HH[HH.ROTATION_4 = 3] = "ROTATION_4", HH
      }({}),
      zH = function(HH) {
        return HH[HH.KART = 0] = "KART", HH[HH.OFF_ROADER = 1] = "OFF_ROADER", HH[HH.CAR = 2] = "CAR", HH[HH.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", HH[HH.ARMORED_CAR = 4] = "ARMORED_CAR", HH[HH.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", HH[HH.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", HH[HH.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", HH
      }({});
    AH.DEFAULT, AH.BOAT, rH.SPEED, AH.GLIDER, SH.DIAMOND, AH.BALLOON, hH.BLACK, AH.SLEEPING, tH.ROTATION_4, AH.RIDING_MOB, AH.CAR, zH.MOONSTONE_MINING_DRILL, AH.HOVERCRAFT;
    let CH = function(HH) {
      return HH[HH.NORMAL = 0] = "NORMAL", HH[HH.GLIDING = 1] = "GLIDING", HH[HH.FLOATING = 2] = "FLOATING", HH
    }({})
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);