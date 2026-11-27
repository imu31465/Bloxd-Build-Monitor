export const id = 112;
export const ids = [110, 111, 112];
export const modules = {
  37569: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      countDecodesAs: () => ZW,
      decodedAudio: () => xW
    });
    var mW = OW(4020),
      EW = OW(5615);
    const NW = EW.Howler,
      PW = new Map;
    let LW = 0;
    const cW = {
        song: 0,
        sound: 0
      },
      wW = new WeakMap,
      tW = new WeakSet;

    function ZW(WW, iW) {
      return wW.set(WW, iW), WW
    }

    function xW() {
      return {
        bytes: LW,
        songsDecoded: cW.song,
        soundsDecoded: cW.sound
      }
    }

    function lW(WW) {
      if (tW.has(WW)) return;
      tW.add(WW);
      const iW = 1 === WW.decodeAudioData.length,
        OW = WW.decodeAudioData.bind(WW);
      WW.decodeAudioData = (WW, mW, EW) => {
        const tW = WW => {
          const iW = NW._howls.filter((WW => "loaded" !== WW._state));
          try {
            null === mW || void 0 === mW || mW(WW)
          } finally {
            const OW = iW.find((WW => "loaded" === WW._state));
            void 0 !== OW && "string" === typeof OW._src && function(WW, iW, OW) {
              var mW;
              LW += OW - (null !== (mW = PW.get(iW)) && void 0 !== mW ? mW : 0), PW.set(iW, OW);
              const EW = wW.get(WW);
              void 0 !== EW && cW[EW]++
            }(OW, OW._src, WW.length * WW.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return WW
        };
        if (!iW) return OW(WW, tW, EW);
        const ZW = OW(WW).then(tW);
        return ZW.catch((WW => {
          null === EW || void 0 === EW || EW(WW)
        })), ZW
      }
    }(0, mW.h)(xW);
    const AW = EW.Howl.prototype,
      bW = AW.init;
    AW.init = function(WW) {
      return EW.Howler.volume(), NW.ctx && lW(NW.ctx), bW.call(this, WW)
    };
    const jW = AW.unload;
    AW.unload = function() {
      const WW = this._src,
        iW = jW.call(this);
      if ("string" !== typeof WW) return iW;
      const OW = PW.get(WW);
      return void 0 !== OW && function(WW) {
        return !NW._howls.some((iW => iW._src === WW || "string" === typeof iW._src && WW.indexOf(iW._src) >= 0))
      }(WW) && (PW.delete(WW), LW -= OW), iW
    }
  },
  37606: (WW, iW, OW) => {
    async function mW(WW) {
      const iW = await fetch(WW, {
        priority: "low"
      });
      if (!iW.ok) throw new Error(`Fetching ${WW} failed: HTTP ${iW.status}`);
      const OW = iW.body.getReader();
      for (; !(await OW.read()).done;);
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  5615: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Howl: () => EW.Howl,
      Howler: () => EW.Howler,
      musicOutput: () => jW,
      readyAudioContext: () => UW
    });
    var mW, EW = OW(5618),
      NW = OW(4653),
      PW = OW(5356);
    const LW = EW.Howler;

    function cW() {
      var WW, iW;
      if (LW.ctx || !LW.usingWebAudio || "undefined" === typeof AudioContext || !(0, PW.k)()) return;
      const OW = navigator.audioSession;
      let mW;
      "auto" === (null === OW || void 0 === OW ? void 0 : OW.type) && (OW.type = "ambient");
      try {
        mW = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const EW = mW.createGain();
      EW.gain.setValueAtTime(LW._muted ? 0 : null !== (WW = LW._volume) && void 0 !== WW ? WW : 1, mW.currentTime), EW.connect(mW.destination), LW.ctx = mW, LW.masterGain = EW, null === (iW = LW._setup) || void 0 === iW || iW.call(LW)
    }
    LW._mobileUnloaded = !0;
    const wW = LW.volume.bind(EW.Howler);
    LW.volume = function() {
      return cW(), wW(...arguments)
    };
    const tW = LW.mute.bind(EW.Howler);
    LW.mute = WW => (cW(), tW(WW));
    const ZW = EW.Howl.prototype,
      xW = ZW.init;

    function lW() {
      for (; LW._html5AudioPool.length < LW.html5PoolSize;) {
        const WW = new Audio;
        WW._unlocked = !0, LW._releaseHtml5Audio(WW)
      }
      for (const iW of LW._howls)
        if (!iW._webAudio)
          for (const OW of iW._getSoundIds()) {
            var WW;
            const mW = null === (WW = iW._soundById(OW)) || void 0 === WW ? void 0 : WW._node;
            mW && !mW._unlocked && (mW._unlocked = !0, mW.load())
          }
    }
    ZW.init = function(WW) {
      return cW(), xW.call(this, WW)
    }, (0, PW.k)() && (LW._unlockAudio = () => {
      const WW = LW.ctx;
      if (LW._audioUnlocked || !WW) return;
      LW.autoUnlock = !1;
      const iW = WW.createBuffer(1, 1, 22050);
      LW._scratchBuffer = iW;
      const OW = new AbortController;
      let mW = "afterPaint";
      const EW = () => {
          var mW;
          if (LW._audioUnlocked) return;
          null === (mW = LW._autoResume) || void 0 === mW || mW.call(LW);
          const EW = WW.createBufferSource();
          EW.buffer = iW, EW.connect(WW.destination), EW.start(0), WW.resume().catch((() => {})), EW.onended = () => {
            EW.disconnect(0), LW._audioUnlocked = !0, OW.abort();
            for (const WW of LW._howls) WW._emit("unlock")
          }
        },
        cW = () => {
          lW(), EW()
        },
        wW = iW => {
          if (lW(), "inTap" === mW) {
            if ("running" === WW.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), EW()
          } else "afterPaint" === mW && (mW = "queued", (0, NW.b)(iW.timeStamp, (() => {
            mW = "inTap", EW()
          })))
        };
      for (const NW of ["touchstart", "touchend"]) document.addEventListener(NW, cW, {
        capture: !0,
        signal: OW.signal
      });
      for (const NW of PW.d) document.addEventListener(NW, wW, {
        capture: !0,
        signal: OW.signal
      })
    });
    let AW = 0;
    const bW = null === (mW = LW._autoSuspend) || void 0 === mW ? void 0 : mW.bind(EW.Howler);

    function jW() {
      UW();
      const {
        ctx: WW,
        masterGain: iW
      } = LW;
      return WW && iW ? {
        ctx: WW,
        destination: iW,
        holdAwake: WW => {
          var iW, OW;
          (AW += WW ? 1 : -1, WW) ? null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW): null === (OW = LW._autoSuspend) || void 0 === OW || OW.call(LW)
        },
        wake: () => {
          var iW;
          "running" !== WW.state && (null === (iW = LW._autoResume) || void 0 === iW || iW.call(LW), WW.resume().catch((() => {})))
        }
      } : null
    }

    function UW() {
      var WW;
      (LW.volume(), LW.ctx && LW.autoUnlock) && (null === (WW = LW._unlockAudio) || void 0 === WW || WW.call(LW))
    }
    bW && (LW._autoSuspend = () => AW > 0 ? EW.Howler : bW())
  },
  37590: (WW, iW, OW) => {
    function mW(WW, iW) {
      let {
        afterJoin: OW,
        joining: mW,
        idle: EW,
        fetchFile: NW,
        uW: PW = () => !1
      } = iW;
      const LW = iW => {
        iW >= WW.length || PW() || OW((() => {
          EW((() => {
            PW() || (mW() ? LW(iW) : NW(WW[iW]).catch((() => {})).finally((() => {
              LW(iW + 1)
            })))
          }))
        }))
      };
      LW(0)
    }
    OW.d(iW, {
      c: () => mW
    })
  },
  37588: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    const mW = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37609: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      e: () => LW,
      h: () => PW
    });
    const mW = 4;
    let EW = null;

    function NW(WW) {
      return EW = WW, () => {
        EW === WW && (EW = null)
      }
    }

    function PW() {
      return null !== EW
    }

    function LW(WW, iW, OW, NW) {
      const PW = function(WW, iW) {
        return "randomCannon" === WW || "randomFirecracker" === WW ? "explosion" : WW.startsWith("gun") ? /_shot_|^headshot/.test(iW) ? "combat" : null : WW.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(iW) ? "combat" : /^(chestOpen|chestClose|doorOpen|doorClose|trapdoorOpen)/.test(iW) ? "container" : null
      }(WW, iW);
      if (null === PW || !EW) return;
      OW * OW + NW * NW >= mW && EW(PW, Math.PI / 2 - Math.atan2(NW, OW))
    }
  },
  37597: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => tW,
      e: () => ZW
    });
    var mW = OW(25),
      EW = OW(37559),
      NW = OW(767),
      PW = OW(37606),
      LW = OW(5615),
      cW = OW(232),
      wW = OW(37590);
    const tW = {
        afterJoin: WW => {
          (0, NW.c)(mW.d.get("gameState"), WW)
        },
        joining: () => (0, NW.d)(mW.d.get("gameState")),
        idle: cW.d
      },
      ZW = function(WW) {
        const iW = new Set,
          OW = new Set,
          mW = iW => iW.flatMap((iW => {
            const OW = (mW = (0, EW.u)(iW).src, NW = WW.canPlay, mW.find((WW => {
              var iW;
              const OW = null === (iW = /\.([^.]+)$/.exec(WW.split("?", 1)[0])) || void 0 === iW ? void 0 : iW[1];
              return void 0 !== OW && NW(OW.toLowerCase())
            })));
            var mW, NW;
            return void 0 === OW ? [] : [OW]
          }));
        return NW => {
          var PW;
          const LW = (0, EW.n)(NW),
            cW = [];
          iW.has(LW) || (iW.add(LW), cW.push(...mW((0, EW.r)(LW).filter((WW => WW !== NW)))));
          const [tW, ZW] = null !== (PW = [...EW.e].find((WW => {
            let [, iW] = WW;
            return iW.includes(LW)
          }))) && void 0 !== PW ? PW : [void 0, []];
          if (void 0 !== tW && !OW.has(tW)) {
            OW.add(tW);
            for (const WW of ZW) iW.has(WW) || (iW.add(WW), cW.push(...mW((0, EW.r)(WW))))
          }
          cW.length > 0 && (0, wW.c)(cW, WW)
        }
      }({
        ...tW,
        fetchFile: PW.d,
        canPlay: WW => !!LW.Howler.codecs(WW)
      })
  },
  37583: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW,
      d: () => EW,
      f: () => mW
    });

    function mW(WW) {
      return WW.replace(/[_\-\s]*\d+$/, "") || WW
    }

    function EW(WW, iW, OW) {
      return OW <= 0 ? 0 : WW * OW / Math.max(iW, OW)
    }

    function NW(WW, iW) {
      const OW = WW.getDurationMs();
      return OW > 0 ? WW.loudness * Math.max(0, 1 - (iW - WW.startMs) / OW) : 0
    }
    class PW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = WW, this.maxPerGroup = iW, this.voices = []
      }
      admit(WW) {
        if (this.voices = this.voices.filter((WW => WW.isAlive())), null !== WW.group) {
          const iW = this.voices.filter((iW => iW.group === WW.group));
          if (iW.length >= this.maxPerGroup && !this.dropLeastWorth(iW, WW)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, WW)) && (this.voices.push(WW), !0)
      }
      dropLeastWorth(WW, iW) {
        let OW = null,
          mW = 1 / 0;
        for (const EW of WW) {
          if (!EW.canStop()) continue;
          const WW = NW(EW, iW.startMs);
          WW < mW && (OW = EW, mW = WW)
        }
        return !(!OW || iW.loudness < mW) && (this.voices.splice(this.voices.indexOf(OW), 1), OW.stop(), !0)
      }
    }
  },
  37626: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      i: () => PW,
      j: () => mW
    });
    class mW {
      constructor(WW) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = WW
      }
      setMultiplierType(WW, iW) {
        var OW;
        this.multipliers[WW] = iW, null === (OW = this._onUpdate) || void 0 === OW || OW.call(this)
      }
      removeMultiplier(WW) {
        var iW;
        delete this.multipliers[WW], null === (iW = this._onUpdate) || void 0 === iW || iW.call(this)
      }
      getMultiplierType(WW) {
        return this.multipliers[WW]
      }
      getTotalMultipliedVal() {
        let WW = 1;
        for (const iW in this.multipliers) WW *= this.multipliers[iW];
        return WW
      }
    }
    class EW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = WW
      }
      setBooleanType(WW, iW) {
        const OW = this._getTotalBooleanVal();
        this.booleans[WW] = !!iW;
        const mW = this.getTotalBooleanVal();
        var EW;
        mW !== OW && (null === (EW = this._onUpdate) || void 0 === EW || EW.call(this, mW, this.booleans));
        return mW
      }
      removeBoolean(WW) {
        const iW = this._getTotalBooleanVal();
        delete this.booleans[WW];
        const OW = this._getTotalBooleanVal();
        var mW;
        null !== OW && OW !== iW && (null === (mW = this._onUpdate) || void 0 === mW || mW.call(this, OW, this.booleans));
        return null !== OW && void 0 !== OW && OW
      }
      getBooleanType(WW) {
        return this.booleans[WW]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var WW;
        null === (WW = this._onUpdate) || void 0 === WW || WW.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class NW extends EW {
      getTotalBooleanVal() {
        const WW = this._getTotalBooleanVal();
        if (null === WW) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return WW
      }
      _getTotalBooleanVal() {
        let WW = !1,
          iW = !0;
        for (const OW in this.booleans) WW = !0, iW &&= this.booleans[OW];
        return WW ? iW : null
      }
    }
    class PW extends EW {
      getTotalBooleanVal() {
        const WW = this._getTotalBooleanVal();
        if (null === WW) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return WW
      }
      _getTotalBooleanVal() {
        let WW = !1,
          iW = !1;
        for (const OW in this.booleans) WW = !0, iW ||= this.booleans[OW];
        return WW ? iW : null
      }
    }
  },
  37618: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      f: () => mW,
      g: () => EW
    });
    const mW = 15,
      EW = 3,
      NW = 30
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);