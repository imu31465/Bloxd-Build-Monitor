export const id = 94;
export const ids = [92, 93, 94];
export const modules = {
  36440: (TT, kT, cT) => {
    function lT(TT, kT, cT, lT) {
      return !(cT && !TT.aimable) && (!kT || TT.gun && "head" !== lT)
    }

    function MT(TT) {
      return Math.max(.1 * TT, 1)
    }

    function KT(TT, kT) {
      return !TT && kT
    }
    cT.d(kT, {
      d: () => KT,
      f: () => MT,
      g: () => lT
    })
  },
  36445: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => OT
    });
    let lT = null;
    const MT = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      KT = {
        crosshairAccuracy: TT => {
          const kT = MT.crosshairAccuracy.at(-1);
          kT ? kT.hook(TT) : lT = TT
        },
        turnDamageIndicators: TT => {
          var kT;
          null === (kT = MT.turnDamageIndicators.at(-1)) || void 0 === kT || kT.hook(TT)
        }
      };

    function OT(TT, kT) {
      const cT = {
          hook: kT
        },
        OT = MT[TT];
      if (OT.push(cT), "crosshairAccuracy" === TT && null !== lT) {
        const TT = lT;
        lT = null, KT.crosshairAccuracy(TT)
      }
      return () => {
        const TT = OT.indexOf(cT); - 1 !== TT && OT.splice(TT, 1)
      }
    }

    function yT() {
      return KT
    }
  },
  36242: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      countDecodesAs: () => AT,
      decodedAudio: () => CT
    });
    var lT = cT(36247),
      MT = cT(4820);
    const KT = MT.Howler,
      OT = new Map;
    let yT = 0;
    const fT = {
        song: 0,
        sheet: 0
      },
      xT = new WeakMap,
      IT = new WeakSet;

    function AT(TT, kT) {
      return xT.set(TT, kT), TT
    }

    function CT() {
      return {
        bytes: yT,
        songsDecoded: fT.song,
        sheetsDecoded: fT.sheet
      }
    }

    function jT(TT) {
      if (IT.has(TT)) return;
      IT.add(TT);
      const kT = 1 === TT.decodeAudioData.length,
        cT = TT.decodeAudioData.bind(TT);
      TT.decodeAudioData = (TT, lT, MT) => {
        const IT = TT => {
          const kT = KT._howls.filter((TT => "loaded" !== TT._state));
          try {
            null === lT || void 0 === lT || lT(TT)
          } finally {
            const cT = kT.find((TT => "loaded" === TT._state));
            void 0 !== cT && "string" === typeof cT._src && function(TT, kT, cT) {
              var lT;
              yT += cT - (null !== (lT = OT.get(kT)) && void 0 !== lT ? lT : 0), OT.set(kT, cT);
              const MT = xT.get(TT);
              void 0 !== MT && fT[MT]++
            }(cT, cT._src, TT.length * TT.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return TT
        };
        if (!kT) return cT(TT, IT, MT);
        const AT = cT(TT).then(IT);
        return AT.catch((TT => {
          null === MT || void 0 === MT || MT(TT)
        })), AT
      }
    }(0, lT.f)(CT);
    const vT = MT.Howl.prototype,
      tT = vT.init;
    vT.init = function(TT) {
      return MT.Howler.volume(), KT.ctx && jT(KT.ctx), tT.call(this, TT)
    };
    const hT = vT.unload;
    vT.unload = function() {
      const TT = this._src,
        kT = hT.call(this);
      if ("string" !== typeof TT) return kT;
      const cT = OT.get(TT);
      return void 0 !== cT && function(TT) {
        return !KT._howls.some((kT => kT._src === TT || "string" === typeof kT._src && TT.indexOf(kT._src) >= 0))
      }(TT) && (OT.delete(TT), yT -= cT), kT
    }
  },
  36247: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      f: () => MT
    });
    let lT = null;

    function MT(TT) {
      lT = TT
    }

    function KT() {
      return null === lT ? null : lT()
    }
  },
  36602: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => fT
    });
    var lT = cT(31),
      MT = cT(36580),
      KT = cT(4332),
      OT = cT(36610),
      yT = cT(4820);
    const fT = function(TT) {
      const kT = new Set;
      return cT => {
        var lT;
        const KT = null === (lT = [...MT.d].find((TT => {
          let [, kT] = TT;
          return kT.includes(cT)
        }))) || void 0 === lT ? void 0 : lT[0];
        if (void 0 === KT || kT.has(KT)) return;
        kT.add(KT);
        ! function(TT, kT) {
          let {
            afterJoin: cT,
            joining: lT,
            idle: MT,
            fetchFile: KT
          } = kT;
          const OT = kT => {
            kT >= TT.length || cT((() => {
              MT((() => {
                lT() ? OT(kT) : KT(TT[kT]).catch((() => {})).finally((() => {
                  OT(kT + 1)
                }))
              }))
            }))
          };
          OT(0)
        }(MT.d.get(KT).filter((TT => TT !== cT)).flatMap((kT => {
          const cT = (lT = (0, MT.l)(kT).src, KT = TT.canPlay, lT.find((TT => {
            var kT;
            const cT = null === (kT = /\.([^.]+)$/.exec(TT.split("?", 1)[0])) || void 0 === kT ? void 0 : kT[1];
            return void 0 !== cT && KT(cT.toLowerCase())
          })));
          var lT, KT;
          return void 0 === cT ? [] : [cT]
        })), TT)
      }
    }({
      afterJoin: TT => {
        (0, KT.e)(lT.e.get("gameState"), TT)
      },
      joining: () => (0, KT.f)(lT.e.get("gameState")),
      idle: cT(275).e,
      fetchFile: OT.b,
      canPlay: TT => !!yT.Howler.codecs(TT)
    })
  },
  36610: (TT, kT, cT) => {
    async function lT(TT) {
      const kT = await fetch(TT, {
        priority: "low"
      });
      if (!kT.ok) throw new Error(`Fetching ${TT} failed: HTTP ${kT.status}`);
      const cT = kT.body.getReader();
      for (; !(await cT.read()).done;);
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  36584: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    const lT = ["end", "stop", "playerror"];

    function MT(TT, kT) {
      const cT = () => {
        if (function(TT) {
            return "loaded" === TT.state() && !TT.playing() && !TT._playLock
          }(TT)) {
          for (const kT of lT) TT.off(kT, cT);
          TT.unload(), kT()
        }
      };
      for (const MT of lT) TT.on(MT, cT);
      cT()
    }
  },
  4820: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Howl: () => MT.Howl,
      Howler: () => MT.Howler,
      musicOutput: () => vT,
      readyAudioContext: () => tT
    });
    var lT, MT = cT(4825),
      KT = cT(4641);
    const OT = MT.Howler;

    function yT() {
      var TT, kT;
      if (OT.ctx || !OT.usingWebAudio || "undefined" === typeof AudioContext || !(0, KT.f)()) return;
      const cT = navigator.audioSession;
      let lT;
      "auto" === (null === cT || void 0 === cT ? void 0 : cT.type) && (cT.type = "ambient");
      try {
        lT = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const MT = lT.createGain();
      MT.gain.setValueAtTime(OT._muted ? 0 : null !== (TT = OT._volume) && void 0 !== TT ? TT : 1, lT.currentTime), MT.connect(lT.destination), OT.ctx = lT, OT.masterGain = MT, null === (kT = OT._setup) || void 0 === kT || kT.call(OT)
    }
    OT._mobileUnloaded = !0;
    const fT = OT.volume.bind(MT.Howler);
    OT.volume = function() {
      return yT(), fT(...arguments)
    };
    const xT = OT.mute.bind(MT.Howler);
    OT.mute = TT => (yT(), xT(TT));
    const IT = MT.Howl.prototype,
      AT = IT.init;
    IT.init = function(TT) {
      return yT(), AT.call(this, TT)
    };
    let CT = 0;
    const jT = null === (lT = OT._autoSuspend) || void 0 === lT ? void 0 : lT.bind(MT.Howler);

    function vT() {
      tT();
      const {
        ctx: TT,
        masterGain: kT
      } = OT;
      return TT && kT ? {
        ctx: TT,
        destination: kT,
        holdAwake: TT => {
          var kT, cT;
          (CT += TT ? 1 : -1, TT) ? null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT): null === (cT = OT._autoSuspend) || void 0 === cT || cT.call(OT)
        },
        wake: () => {
          var kT;
          "running" !== TT.state && (null === (kT = OT._autoResume) || void 0 === kT || kT.call(OT), TT.resume().catch((() => {})))
        }
      } : null
    }

    function tT() {
      var TT;
      (OT.volume(), OT.ctx && OT.autoUnlock) && (null === (TT = OT._unlockAudio) || void 0 === TT || TT.call(OT))
    }
    jT && (OT._autoSuspend = () => CT > 0 ? MT.Howler : jT())
  },
  36595: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    const lT = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36593: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT,
      f: () => MT,
      h: () => lT
    });

    function lT(TT) {
      return TT.replace(/[_\-\s]*\d+$/, "") || TT
    }

    function MT(TT, kT, cT) {
      return cT <= 0 ? 0 : TT * cT / Math.max(kT, cT)
    }

    function KT(TT, kT) {
      const cT = TT.getDurationMs();
      return cT > 0 ? TT.loudness * Math.max(0, 1 - (kT - TT.startMs) / cT) : 0
    }
    class OT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = TT, this.maxPerGroup = kT, this.voices = []
      }
      admit(TT) {
        if (this.voices = this.voices.filter((TT => TT.isAlive())), null !== TT.group) {
          const kT = this.voices.filter((kT => kT.group === TT.group));
          if (kT.length >= this.maxPerGroup && !this.dropLeastWorth(kT, TT)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, TT)) && (this.voices.push(TT), !0)
      }
      dropLeastWorth(TT, kT) {
        let cT = null,
          lT = 1 / 0;
        for (const MT of TT) {
          if (!MT.canStop()) continue;
          const TT = KT(MT, kT.startMs);
          TT < lT && (cT = MT, lT = TT)
        }
        return !(!cT || kT.loudness < lT) && (this.voices.splice(this.voices.indexOf(cT), 1), cT.stop(), !0)
      }
    }
  },
  36619: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      d: () => OT,
      h: () => lT
    });
    class lT {
      constructor(TT) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = TT
      }
      setMultiplierType(TT, kT) {
        var cT;
        this.multipliers[TT] = kT, null === (cT = this._onUpdate) || void 0 === cT || cT.call(this)
      }
      removeMultiplier(TT) {
        var kT;
        delete this.multipliers[TT], null === (kT = this._onUpdate) || void 0 === kT || kT.call(this)
      }
      getMultiplierType(TT) {
        return this.multipliers[TT]
      }
      getTotalMultipliedVal() {
        let TT = 1;
        for (const kT in this.multipliers) TT *= this.multipliers[kT];
        return TT
      }
    }
    class MT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = TT
      }
      setBooleanType(TT, kT) {
        const cT = this._getTotalBooleanVal();
        this.booleans[TT] = !!kT;
        const lT = this.getTotalBooleanVal();
        var MT;
        lT !== cT && (null === (MT = this._onUpdate) || void 0 === MT || MT.call(this, lT, this.booleans));
        return lT
      }
      removeBoolean(TT) {
        const kT = this._getTotalBooleanVal();
        delete this.booleans[TT];
        const cT = this._getTotalBooleanVal();
        var lT;
        null !== cT && cT !== kT && (null === (lT = this._onUpdate) || void 0 === lT || lT.call(this, cT, this.booleans));
        return null !== cT && void 0 !== cT && cT
      }
      getBooleanType(TT) {
        return this.booleans[TT]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var TT;
        null === (TT = this._onUpdate) || void 0 === TT || TT.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class KT extends MT {
      getTotalBooleanVal() {
        const TT = this._getTotalBooleanVal();
        if (null === TT) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return TT
      }
      _getTotalBooleanVal() {
        let TT = !1,
          kT = !0;
        for (const cT in this.booleans) TT = !0, kT &&= this.booleans[cT];
        return TT ? kT : null
      }
    }
    class OT extends MT {
      getTotalBooleanVal() {
        const TT = this._getTotalBooleanVal();
        if (null === TT) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return TT
      }
      _getTotalBooleanVal() {
        let TT = !1,
          kT = !1;
        for (const cT in this.booleans) TT = !0, kT ||= this.booleans[cT];
        return TT ? kT : null
      }
    }
  },
  36614: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      f: () => lT,
      g: () => MT
    });
    const lT = 15,
      MT = 3,
      KT = 30
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);