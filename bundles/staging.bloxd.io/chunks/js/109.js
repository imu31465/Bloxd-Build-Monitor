export const id = 109;
export const ids = [108, 109, 110];
export const modules = {
  37786: (VV, eV, xV) => {
    function JV(VV, eV, xV, JV) {
      return !(xV && !VV.aimable) && (!eV || VV.gun && "head" !== JV)
    }

    function YV(VV) {
      return Math.max(.1 * VV, 1)
    }

    function UV(VV, eV) {
      return !VV && eV
    }
    xV.d(eV, {
      c: () => UV,
      d: () => YV,
      g: () => JV
    })
  },
  37790: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      g: () => yV
    });
    let JV = null;
    const YV = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      UV = {
        crosshairAccuracy: VV => {
          const eV = YV.crosshairAccuracy.at(-1);
          eV ? eV.hook(VV) : JV = VV
        },
        turnDamageIndicators: VV => {
          var eV;
          null === (eV = YV.turnDamageIndicators.at(-1)) || void 0 === eV || eV.hook(VV)
        }
      };

    function yV(VV, eV) {
      const xV = {
          hook: eV
        },
        yV = YV[VV];
      if (yV.push(xV), "crosshairAccuracy" === VV && null !== JV) {
        const VV = JV;
        JV = null, UV.crosshairAccuracy(VV)
      }
      return () => {
        const VV = yV.indexOf(xV); - 1 !== VV && yV.splice(VV, 1)
      }
    }

    function pV() {
      return UV
    }
  },
  37593: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      countDecodesAs: () => ZV,
      decodedAudio: () => vV
    });
    var JV = xV(3297),
      YV = xV(5353);
    const UV = YV.Howler,
      yV = new Map;
    let pV = 0;
    const QV = {
        song: 0,
        sound: 0
      },
      nV = new WeakMap,
      wV = new WeakSet;

    function ZV(VV, eV) {
      return nV.set(VV, eV), VV
    }

    function vV() {
      return {
        bytes: pV,
        songsDecoded: QV.song,
        soundsDecoded: QV.sound
      }
    }

    function rV(VV) {
      if (wV.has(VV)) return;
      wV.add(VV);
      const eV = 1 === VV.decodeAudioData.length,
        xV = VV.decodeAudioData.bind(VV);
      VV.decodeAudioData = (VV, JV, YV) => {
        const wV = VV => {
          const eV = UV._howls.filter((VV => "loaded" !== VV._state));
          try {
            null === JV || void 0 === JV || JV(VV)
          } finally {
            const xV = eV.find((VV => "loaded" === VV._state));
            void 0 !== xV && "string" === typeof xV._src && function(VV, eV, xV) {
              var JV;
              pV += xV - (null !== (JV = yV.get(eV)) && void 0 !== JV ? JV : 0), yV.set(eV, xV);
              const YV = nV.get(VV);
              void 0 !== YV && QV[YV]++
            }(xV, xV._src, VV.length * VV.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return VV
        };
        if (!eV) return xV(VV, wV, YV);
        const ZV = xV(VV).then(wV);
        return ZV.catch((VV => {
          null === YV || void 0 === YV || YV(VV)
        })), ZV
      }
    }(0, JV.h)(vV);
    const kV = YV.Howl.prototype,
      bV = kV.init;
    kV.init = function(VV) {
      return YV.Howler.volume(), UV.ctx && rV(UV.ctx), bV.call(this, VV)
    };
    const EV = kV.unload;
    kV.unload = function() {
      const VV = this._src,
        eV = EV.call(this);
      if ("string" !== typeof VV) return eV;
      const xV = yV.get(VV);
      return void 0 !== xV && function(VV) {
        return !UV._howls.some((eV => eV._src === VV || "string" === typeof eV._src && VV.indexOf(eV._src) >= 0))
      }(VV) && (yV.delete(VV), pV -= xV), eV
    }
  },
  37968: (VV, eV, xV) => {
    async function JV(VV) {
      const eV = await fetch(VV, {
        priority: "low"
      });
      if (!eV.ok) throw new Error(`Fetching ${VV} failed: HTTP ${eV.status}`);
      const xV = eV.body.getReader();
      for (; !(await xV.read()).done;);
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  5353: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      Howl: () => YV.Howl,
      Howler: () => YV.Howler,
      musicOutput: () => EV,
      readyAudioContext: () => BV
    });
    var JV, YV = xV(5357),
      UV = xV(3886),
      yV = xV(5137);
    const pV = YV.Howler;

    function QV() {
      var VV, eV;
      if (pV.ctx || !pV.usingWebAudio || "undefined" === typeof AudioContext || !(0, yV.i)()) return;
      const xV = navigator.audioSession;
      let JV;
      "auto" === (null === xV || void 0 === xV ? void 0 : xV.type) && (xV.type = "ambient");
      try {
        JV = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const YV = JV.createGain();
      YV.gain.setValueAtTime(pV._muted ? 0 : null !== (VV = pV._volume) && void 0 !== VV ? VV : 1, JV.currentTime), YV.connect(JV.destination), pV.ctx = JV, pV.masterGain = YV, null === (eV = pV._setup) || void 0 === eV || eV.call(pV)
    }
    pV._mobileUnloaded = !0;
    const nV = pV.volume.bind(YV.Howler);
    pV.volume = function() {
      return QV(), nV(...arguments)
    };
    const wV = pV.mute.bind(YV.Howler);
    pV.mute = VV => (QV(), wV(VV));
    const ZV = YV.Howl.prototype,
      vV = ZV.init;

    function rV() {
      for (; pV._html5AudioPool.length < pV.html5PoolSize;) {
        const VV = new Audio;
        VV._unlocked = !0, pV._releaseHtml5Audio(VV)
      }
      for (const eV of pV._howls)
        if (!eV._webAudio)
          for (const xV of eV._getSoundIds()) {
            var VV;
            const JV = null === (VV = eV._soundById(xV)) || void 0 === VV ? void 0 : VV._node;
            JV && !JV._unlocked && (JV._unlocked = !0, JV.load())
          }
    }
    ZV.init = function(VV) {
      return QV(), vV.call(this, VV)
    }, (0, yV.i)() && (pV._unlockAudio = () => {
      const VV = pV.ctx;
      if (pV._audioUnlocked || !VV) return;
      pV.autoUnlock = !1;
      const eV = VV.createBuffer(1, 1, 22050);
      pV._scratchBuffer = eV;
      const xV = new AbortController;
      let JV = "afterPaint";
      const YV = () => {
          var JV;
          if (pV._audioUnlocked) return;
          null === (JV = pV._autoResume) || void 0 === JV || JV.call(pV);
          const YV = VV.createBufferSource();
          YV.buffer = eV, YV.connect(VV.destination), YV.start(0), VV.resume().catch((() => {})), YV.onended = () => {
            YV.disconnect(0), pV._audioUnlocked = !0, xV.abort();
            for (const VV of pV._howls) VV._emit("unlock")
          }
        },
        QV = () => {
          rV(), YV()
        },
        nV = eV => {
          if (rV(), "inTap" === JV) {
            if ("running" === VV.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), YV()
          } else "afterPaint" === JV && (JV = "queued", (0, UV.c)(eV.timeStamp, (() => {
            JV = "inTap", YV()
          })))
        };
      for (const UV of ["touchstart", "touchend"]) document.addEventListener(UV, QV, {
        capture: !0,
        signal: xV.signal
      });
      for (const UV of yV.c) document.addEventListener(UV, nV, {
        capture: !0,
        signal: xV.signal
      })
    });
    let kV = 0;
    const bV = null === (JV = pV._autoSuspend) || void 0 === JV ? void 0 : JV.bind(YV.Howler);

    function EV() {
      BV();
      const {
        ctx: VV,
        masterGain: eV
      } = pV;
      return VV && eV ? {
        ctx: VV,
        destination: eV,
        holdAwake: VV => {
          var eV, xV;
          (kV += VV ? 1 : -1, VV) ? null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV): null === (xV = pV._autoSuspend) || void 0 === xV || xV.call(pV)
        },
        wake: () => {
          var eV;
          "running" !== VV.state && (null === (eV = pV._autoResume) || void 0 === eV || eV.call(pV), VV.resume().catch((() => {})))
        }
      } : null
    }

    function BV() {
      var VV;
      (pV.volume(), pV.ctx && pV.autoUnlock) && (null === (VV = pV._unlockAudio) || void 0 === VV || VV.call(pV))
    }
    bV && (pV._autoSuspend = () => kV > 0 ? YV.Howler : bV())
  },
  37959: (VV, eV, xV) => {
    function JV(VV, eV) {
      let {
        afterJoin: xV,
        joining: JV,
        idle: YV,
        fetchFile: UV,
        pJ: yV = () => !1
      } = eV;
      const pV = eV => {
        eV >= VV.length || yV() || xV((() => {
          YV((() => {
            yV() || (JV() ? pV(eV) : UV(VV[eV]).catch((() => {})).finally((() => {
              pV(eV + 1)
            })))
          }))
        }))
      };
      pV(0)
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  37952: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    const JV = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37964: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      d: () => ZV
    });
    var JV = xV(27),
      YV = xV(37930),
      UV = xV(4759),
      yV = xV(37968),
      pV = xV(5353),
      QV = xV(275),
      nV = xV(37959);
    const wV = {
        afterJoin: VV => {
          (0, UV.c)(JV.b.get("gameState"), VV)
        },
        joining: () => (0, UV.f)(JV.b.get("gameState")),
        idle: QV.e
      },
      ZV = function(VV) {
        const eV = new Set,
          xV = new Set,
          JV = eV => eV.flatMap((eV => {
            const xV = (JV = (0, YV.w)(eV).src, UV = VV.canPlay, JV.find((VV => {
              var eV;
              const xV = null === (eV = /\.([^.]+)$/.exec(VV.split("?", 1)[0])) || void 0 === eV ? void 0 : eV[1];
              return void 0 !== xV && UV(xV.toLowerCase())
            })));
            var JV, UV;
            return void 0 === xV ? [] : [xV]
          }));
        return UV => {
          var yV;
          const pV = (0, YV.n)(UV),
            QV = [];
          eV.has(pV) || (eV.add(pV), QV.push(...JV((0, YV.o)(pV).filter((VV => VV !== UV)))));
          const [wV, ZV] = null !== (yV = [...YV.e].find((VV => {
            let [, eV] = VV;
            return eV.includes(pV)
          }))) && void 0 !== yV ? yV : [void 0, []];
          if (void 0 !== wV && !xV.has(wV)) {
            xV.add(wV);
            for (const VV of ZV) eV.has(VV) || (eV.add(VV), QV.push(...JV((0, YV.o)(VV))))
          }
          QV.length > 0 && (0, nV.d)(QV, VV)
        }
      }({
        ...wV,
        fetchFile: yV.b,
        canPlay: VV => !!pV.Howler.codecs(VV)
      })
  },
  37950: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV,
      d: () => YV,
      e: () => JV
    });

    function JV(VV) {
      return VV.replace(/[_\-\s]*\d+$/, "") || VV
    }

    function YV(VV, eV, xV) {
      return xV <= 0 ? 0 : VV * xV / Math.max(eV, xV)
    }

    function UV(VV, eV) {
      const xV = VV.getDurationMs();
      return xV > 0 ? VV.loudness * Math.max(0, 1 - (eV - VV.startMs) / xV) : 0
    }
    class yV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = VV, this.maxPerGroup = eV, this.voices = []
      }
      admit(VV) {
        if (this.voices = this.voices.filter((VV => VV.isAlive())), null !== VV.group) {
          const eV = this.voices.filter((eV => eV.group === VV.group));
          if (eV.length >= this.maxPerGroup && !this.dropLeastWorth(eV, VV)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, VV)) && (this.voices.push(VV), !0)
      }
      dropLeastWorth(VV, eV) {
        let xV = null,
          JV = 1 / 0;
        for (const YV of VV) {
          if (!YV.canStop()) continue;
          const VV = UV(YV, eV.startMs);
          VV < JV && (xV = YV, JV = VV)
        }
        return !(!xV || eV.loudness < JV) && (this.voices.splice(this.voices.indexOf(xV), 1), xV.stop(), !0)
      }
    }
  },
  37749: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      g: () => yV,
      k: () => pV
    });
    var JV = xV(32);
    const YV = "touchSprintChanged";
    let UV = !0;

    function yV() {
      return UV
    }

    function pV(VV) {
      VV !== UV && (UV = VV, JV.h.QZ(YV, VV))
    }
  },
  37985: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV,
      g: () => yV,
      i: () => JV
    });
    class JV {
      constructor(VV) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = VV
      }
      setMultiplierType(VV, eV) {
        var xV;
        this.multipliers[VV] = eV, null === (xV = this._onUpdate) || void 0 === xV || xV.call(this)
      }
      removeMultiplier(VV) {
        var eV;
        delete this.multipliers[VV], null === (eV = this._onUpdate) || void 0 === eV || eV.call(this)
      }
      getMultiplierType(VV) {
        return this.multipliers[VV]
      }
      getTotalMultipliedVal() {
        let VV = 1;
        for (const eV in this.multipliers) VV *= this.multipliers[eV];
        return VV
      }
    }
    class YV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = VV
      }
      setBooleanType(VV, eV) {
        const xV = this._getTotalBooleanVal();
        this.booleans[VV] = !!eV;
        const JV = this.getTotalBooleanVal();
        var YV;
        JV !== xV && (null === (YV = this._onUpdate) || void 0 === YV || YV.call(this, JV, this.booleans));
        return JV
      }
      removeBoolean(VV) {
        const eV = this._getTotalBooleanVal();
        delete this.booleans[VV];
        const xV = this._getTotalBooleanVal();
        var JV;
        null !== xV && xV !== eV && (null === (JV = this._onUpdate) || void 0 === JV || JV.call(this, xV, this.booleans));
        return null !== xV && void 0 !== xV && xV
      }
      getBooleanType(VV) {
        return this.booleans[VV]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var VV;
        null === (VV = this._onUpdate) || void 0 === VV || VV.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class UV extends YV {
      getTotalBooleanVal() {
        const VV = this._getTotalBooleanVal();
        if (null === VV) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return VV
      }
      _getTotalBooleanVal() {
        let VV = !1,
          eV = !0;
        for (const xV in this.booleans) VV = !0, eV &&= this.booleans[xV];
        return VV ? eV : null
      }
    }
    class yV extends YV {
      getTotalBooleanVal() {
        const VV = this._getTotalBooleanVal();
        if (null === VV) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return VV
      }
      _getTotalBooleanVal() {
        let VV = !1,
          eV = !1;
        for (const xV in this.booleans) VV = !0, eV ||= this.booleans[xV];
        return VV ? eV : null
      }
    }
  },
  37977: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      f: () => JV,
      h: () => YV
    });
    const JV = 15,
      YV = 3,
      UV = 30
  },
  7024: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      i: () => YV,
      j: () => QV,
      n: () => UV,
      o: () => nV,
      q: () => JV,
      s: () => pV
    });
    let JV = function(VV) {
        return VV[VV.DEFAULT = 0] = "DEFAULT", VV[VV.BOAT = 1] = "BOAT", VV[VV.GLIDER = 2] = "GLIDER", VV[VV.BALLOON = 3] = "BALLOON", VV[VV.SLEEPING = 4] = "SLEEPING", VV[VV.RIDING_MOB = 5] = "RIDING_MOB", VV[VV.CAR = 6] = "CAR", VV[VV.HOVERCRAFT = 7] = "HOVERCRAFT", VV
      }({}),
      YV = function(VV) {
        return VV[VV.WOOD = 0] = "WOOD", VV[VV.OBSIDIAN = 1] = "OBSIDIAN", VV[VV.SPEED = 2] = "SPEED", VV
      }({}),
      UV = function(VV) {
        return VV[VV.WOOD = 0] = "WOOD", VV[VV.IRON = 1] = "IRON", VV[VV.GOLD = 2] = "GOLD", VV[VV.DIAMOND = 3] = "DIAMOND", VV
      }({}),
      yV = function(VV) {
        return VV[VV.YELLOW = 0] = "YELLOW", VV[VV.WHITE = 1] = "WHITE", VV[VV.RED = 2] = "RED", VV[VV.PURPLE = 3] = "PURPLE", VV[VV.PINK = 4] = "PINK", VV[VV.ORANGE = 5] = "ORANGE", VV[VV.MAGENTA = 6] = "MAGENTA", VV[VV.LIME = 7] = "LIME", VV[VV.LIGHT_GRAY = 8] = "LIGHT_GRAY", VV[VV.LIGHT_BLUE = 9] = "LIGHT_BLUE", VV[VV.GREEN = 10] = "GREEN", VV[VV.GRAY = 11] = "GRAY", VV[VV.CYAN = 12] = "CYAN", VV[VV.BROWN = 13] = "BROWN", VV[VV.BLUE = 14] = "BLUE", VV[VV.BLACK = 15] = "BLACK", VV
      }({}),
      pV = function(VV) {
        return VV[VV.ROTATION_1 = 0] = "ROTATION_1", VV[VV.ROTATION_2 = 1] = "ROTATION_2", VV[VV.ROTATION_3 = 2] = "ROTATION_3", VV[VV.ROTATION_4 = 3] = "ROTATION_4", VV
      }({}),
      QV = function(VV) {
        return VV[VV.KART = 0] = "KART", VV[VV.OFF_ROADER = 1] = "OFF_ROADER", VV[VV.CAR = 2] = "CAR", VV[VV.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", VV[VV.ARMORED_CAR = 4] = "ARMORED_CAR", VV[VV.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", VV[VV.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", VV[VV.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", VV
      }({});
    JV.DEFAULT, JV.BOAT, YV.SPEED, JV.GLIDER, UV.DIAMOND, JV.BALLOON, yV.BLACK, JV.SLEEPING, pV.ROTATION_4, JV.RIDING_MOB, JV.CAR, QV.MOONSTONE_MINING_DRILL, JV.HOVERCRAFT;
    let nV = function(VV) {
      return VV[VV.NORMAL = 0] = "NORMAL", VV[VV.GLIDING = 1] = "GLIDING", VV[VV.FLOATING = 2] = "FLOATING", VV
    }({})
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);