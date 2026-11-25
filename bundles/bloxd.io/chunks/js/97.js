export const id = 97;
export const ids = [95, 96, 97];
export const modules = {
  36965: (GG, bG, ZG) => {
    function wG(GG, bG, ZG, wG) {
      return !(ZG && !GG.aimable) && (!bG || GG.gun && "head" !== wG)
    }

    function SG(GG) {
      return Math.max(.1 * GG, 1)
    }

    function LG(GG, bG) {
      return !GG && bG
    }
    ZG.d(bG, {
      d: () => LG,
      g: () => SG,
      h: () => wG
    })
  },
  36973: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      c: () => yG
    });
    let wG = null;
    const SG = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      LG = {
        crosshairAccuracy: GG => {
          const bG = SG.crosshairAccuracy.at(-1);
          bG ? bG.hook(GG) : wG = GG
        },
        turnDamageIndicators: GG => {
          var bG;
          null === (bG = SG.turnDamageIndicators.at(-1)) || void 0 === bG || bG.hook(GG)
        }
      };

    function yG(GG, bG) {
      const ZG = {
          hook: bG
        },
        yG = SG[GG];
      if (yG.push(ZG), "crosshairAccuracy" === GG && null !== wG) {
        const GG = wG;
        wG = null, LG.crosshairAccuracy(GG)
      }
      return () => {
        const GG = yG.indexOf(ZG); - 1 !== GG && yG.splice(GG, 1)
      }
    }

    function kG() {
      return LG
    }
  },
  36778: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      countDecodesAs: () => pG,
      decodedAudio: () => fG
    });
    var wG = ZG(3238),
      SG = ZG(4883);
    const LG = SG.Howler,
      yG = new Map;
    let kG = 0;
    const UG = {
        song: 0,
        sheet: 0
      },
      YG = new WeakMap,
      VG = new WeakSet;

    function pG(GG, bG) {
      return YG.set(GG, bG), GG
    }

    function fG() {
      return {
        bytes: kG,
        songsDecoded: UG.song,
        sheetsDecoded: UG.sheet
      }
    }

    function QG(GG) {
      if (VG.has(GG)) return;
      VG.add(GG);
      const bG = 1 === GG.decodeAudioData.length,
        ZG = GG.decodeAudioData.bind(GG);
      GG.decodeAudioData = (GG, wG, SG) => {
        const VG = GG => {
          const bG = LG._howls.filter((GG => "loaded" !== GG._state));
          try {
            null === wG || void 0 === wG || wG(GG)
          } finally {
            const ZG = bG.find((GG => "loaded" === GG._state));
            void 0 !== ZG && "string" === typeof ZG._src && function(GG, bG, ZG) {
              var wG;
              kG += ZG - (null !== (wG = yG.get(bG)) && void 0 !== wG ? wG : 0), yG.set(bG, ZG);
              const SG = YG.get(GG);
              void 0 !== SG && UG[SG]++
            }(ZG, ZG._src, GG.length * GG.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return GG
        };
        if (!bG) return ZG(GG, VG, SG);
        const pG = ZG(GG).then(VG);
        return pG.catch((GG => {
          null === SG || void 0 === SG || SG(GG)
        })), pG
      }
    }(0, wG.h)(fG);
    const KG = SG.Howl.prototype,
      hG = KG.init;
    KG.init = function(GG) {
      return SG.Howler.volume(), LG.ctx && QG(LG.ctx), hG.call(this, GG)
    };
    const dG = KG.unload;
    KG.unload = function() {
      const GG = this._src,
        bG = dG.call(this);
      if ("string" !== typeof GG) return bG;
      const ZG = yG.get(GG);
      return void 0 !== ZG && function(GG) {
        return !LG._howls.some((bG => bG._src === GG || "string" === typeof bG._src && GG.indexOf(bG._src) >= 0))
      }(GG) && (yG.delete(GG), kG -= ZG), bG
    }
  },
  37134: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => UG
    });
    var wG = ZG(17),
      SG = ZG(37105),
      LG = ZG(4355),
      yG = ZG(37137),
      kG = ZG(4883);
    const UG = function(GG) {
      const bG = new Set;
      return ZG => {
        var wG;
        const LG = null === (wG = [...SG.e].find((GG => {
          let [, bG] = GG;
          return bG.includes(ZG)
        }))) || void 0 === wG ? void 0 : wG[0];
        if (void 0 === LG || bG.has(LG)) return;
        bG.add(LG);
        ! function(GG, bG) {
          let {
            afterJoin: ZG,
            joining: wG,
            idle: SG,
            fetchFile: LG
          } = bG;
          const yG = bG => {
            bG >= GG.length || ZG((() => {
              SG((() => {
                wG() ? yG(bG) : LG(GG[bG]).catch((() => {})).finally((() => {
                  yG(bG + 1)
                }))
              }))
            }))
          };
          yG(0)
        }(SG.e.get(LG).filter((GG => GG !== ZG)).flatMap((bG => {
          const ZG = (wG = (0, SG.i)(bG).src, LG = GG.canPlay, wG.find((GG => {
            var bG;
            const ZG = null === (bG = /\.([^.]+)$/.exec(GG.split("?", 1)[0])) || void 0 === bG ? void 0 : bG[1];
            return void 0 !== ZG && LG(ZG.toLowerCase())
          })));
          var wG, LG;
          return void 0 === ZG ? [] : [ZG]
        })), GG)
      }
    }({
      afterJoin: GG => {
        (0, LG.e)(wG.e.get("gameState"), GG)
      },
      joining: () => (0, LG.f)(wG.e.get("gameState")),
      idle: ZG(252).b,
      fetchFile: yG.b,
      canPlay: GG => !!kG.Howler.codecs(GG)
    })
  },
  37137: (GG, bG, ZG) => {
    async function wG(GG) {
      const bG = await fetch(GG, {
        priority: "low"
      });
      if (!bG.ok) throw new Error(`Fetching ${GG} failed: HTTP ${bG.status}`);
      const ZG = bG.body.getReader();
      for (; !(await ZG.read()).done;);
    }
    ZG.d(bG, {
      b: () => wG
    })
  },
  37114: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => SG
    });
    const wG = ["end", "stop", "playerror"];

    function SG(GG, bG) {
      const ZG = () => {
        if (function(GG) {
            return "loaded" === GG.state() && !GG.playing() && !GG._playLock
          }(GG)) {
          for (const bG of wG) GG.off(bG, ZG);
          GG.unload(), bG()
        }
      };
      for (const SG of wG) GG.on(SG, ZG);
      ZG()
    }
  },
  4883: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Howl: () => SG.Howl,
      Howler: () => SG.Howler,
      musicOutput: () => dG,
      readyAudioContext: () => JG
    });
    var wG, SG = ZG(4889),
      LG = ZG(3423),
      yG = ZG(4672);
    const kG = SG.Howler;

    function UG() {
      var GG, bG;
      if (kG.ctx || !kG.usingWebAudio || "undefined" === typeof AudioContext || !(0, yG.h)()) return;
      const ZG = navigator.audioSession;
      let wG;
      "auto" === (null === ZG || void 0 === ZG ? void 0 : ZG.type) && (ZG.type = "ambient");
      try {
        wG = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const SG = wG.createGain();
      SG.gain.setValueAtTime(kG._muted ? 0 : null !== (GG = kG._volume) && void 0 !== GG ? GG : 1, wG.currentTime), SG.connect(wG.destination), kG.ctx = wG, kG.masterGain = SG, null === (bG = kG._setup) || void 0 === bG || bG.call(kG)
    }
    kG._mobileUnloaded = !0;
    const YG = kG.volume.bind(SG.Howler);
    kG.volume = function() {
      return UG(), YG(...arguments)
    };
    const VG = kG.mute.bind(SG.Howler);
    kG.mute = GG => (UG(), VG(GG));
    const pG = SG.Howl.prototype,
      fG = pG.init;

    function QG() {
      for (; kG._html5AudioPool.length < kG.html5PoolSize;) {
        const GG = new Audio;
        GG._unlocked = !0, kG._releaseHtml5Audio(GG)
      }
      for (const bG of kG._howls)
        if (!bG._webAudio)
          for (const ZG of bG._getSoundIds()) {
            var GG;
            const wG = null === (GG = bG._soundById(ZG)) || void 0 === GG ? void 0 : GG._node;
            wG && !wG._unlocked && (wG._unlocked = !0, wG.load())
          }
    }
    pG.init = function(GG) {
      return UG(), fG.call(this, GG)
    }, (0, yG.h)() && (kG._unlockAudio = () => {
      const GG = kG.ctx;
      if (kG._audioUnlocked || !GG) return;
      kG.autoUnlock = !1;
      const bG = GG.createBuffer(1, 1, 22050);
      kG._scratchBuffer = bG;
      const ZG = new AbortController;
      let wG = "afterPaint";
      const SG = () => {
          var wG;
          if (kG._audioUnlocked) return;
          null === (wG = kG._autoResume) || void 0 === wG || wG.call(kG);
          const SG = GG.createBufferSource();
          SG.buffer = bG, SG.connect(GG.destination), SG.start(0), GG.resume().catch((() => {})), SG.onended = () => {
            SG.disconnect(0), kG._audioUnlocked = !0, ZG.abort();
            for (const GG of kG._howls) GG._emit("unlock")
          }
        },
        UG = () => {
          QG(), SG()
        },
        YG = bG => {
          if (QG(), "inTap" === wG) {
            if ("running" === GG.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), SG()
          } else "afterPaint" === wG && (wG = "queued", (0, LG.d)(bG.timeStamp, (() => {
            wG = "inTap", SG()
          })))
        };
      for (const LG of ["touchstart", "touchend"]) document.addEventListener(LG, UG, {
        capture: !0,
        signal: ZG.signal
      });
      for (const LG of yG.d) document.addEventListener(LG, YG, {
        capture: !0,
        signal: ZG.signal
      })
    });
    let KG = 0;
    const hG = null === (wG = kG._autoSuspend) || void 0 === wG ? void 0 : wG.bind(SG.Howler);

    function dG() {
      JG();
      const {
        ctx: GG,
        masterGain: bG
      } = kG;
      return GG && bG ? {
        ctx: GG,
        destination: bG,
        holdAwake: GG => {
          var bG, ZG;
          (KG += GG ? 1 : -1, GG) ? null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG): null === (ZG = kG._autoSuspend) || void 0 === ZG || ZG.call(kG)
        },
        wake: () => {
          var bG;
          "running" !== GG.state && (null === (bG = kG._autoResume) || void 0 === bG || bG.call(kG), GG.resume().catch((() => {})))
        }
      } : null
    }

    function JG() {
      var GG;
      (kG.volume(), kG.ctx && kG.autoUnlock) && (null === (GG = kG._unlockAudio) || void 0 === GG || GG.call(kG))
    }
    hG && (kG._autoSuspend = () => KG > 0 ? SG.Howler : hG())
  },
  37132: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG
    });
    const wG = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37125: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG,
      f: () => SG,
      i: () => wG
    });

    function wG(GG) {
      return GG.replace(/[_\-\s]*\d+$/, "") || GG
    }

    function SG(GG, bG, ZG) {
      return ZG <= 0 ? 0 : GG * ZG / Math.max(bG, ZG)
    }

    function LG(GG, bG) {
      const ZG = GG.getDurationMs();
      return ZG > 0 ? GG.loudness * Math.max(0, 1 - (bG - GG.startMs) / ZG) : 0
    }
    class yG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = GG, this.maxPerGroup = bG, this.voices = []
      }
      admit(GG) {
        if (this.voices = this.voices.filter((GG => GG.isAlive())), null !== GG.group) {
          const bG = this.voices.filter((bG => bG.group === GG.group));
          if (bG.length >= this.maxPerGroup && !this.dropLeastWorth(bG, GG)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, GG)) && (this.voices.push(GG), !0)
      }
      dropLeastWorth(GG, bG) {
        let ZG = null,
          wG = 1 / 0;
        for (const SG of GG) {
          if (!SG.canStop()) continue;
          const GG = LG(SG, bG.startMs);
          GG < wG && (ZG = SG, wG = GG)
        }
        return !(!ZG || bG.loudness < wG) && (this.voices.splice(this.voices.indexOf(ZG), 1), ZG.stop(), !0)
      }
    }
  },
  36940: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG,
      f: () => yG,
      h: () => kG
    });
    var wG = ZG(19);
    const SG = "touchSprintChanged";
    let LG = !0;

    function yG() {
      return LG
    }

    function kG(GG) {
      GG !== LG && (LG = GG, wG.l.xh(SG, GG))
    }
  },
  37154: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      g: () => yG,
      i: () => wG
    });
    class wG {
      constructor(GG) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = GG
      }
      setMultiplierType(GG, bG) {
        var ZG;
        this.multipliers[GG] = bG, null === (ZG = this._onUpdate) || void 0 === ZG || ZG.call(this)
      }
      removeMultiplier(GG) {
        var bG;
        delete this.multipliers[GG], null === (bG = this._onUpdate) || void 0 === bG || bG.call(this)
      }
      getMultiplierType(GG) {
        return this.multipliers[GG]
      }
      getTotalMultipliedVal() {
        let GG = 1;
        for (const bG in this.multipliers) GG *= this.multipliers[bG];
        return GG
      }
    }
    class SG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = GG
      }
      setBooleanType(GG, bG) {
        const ZG = this._getTotalBooleanVal();
        this.booleans[GG] = !!bG;
        const wG = this.getTotalBooleanVal();
        var SG;
        wG !== ZG && (null === (SG = this._onUpdate) || void 0 === SG || SG.call(this, wG, this.booleans));
        return wG
      }
      removeBoolean(GG) {
        const bG = this._getTotalBooleanVal();
        delete this.booleans[GG];
        const ZG = this._getTotalBooleanVal();
        var wG;
        null !== ZG && ZG !== bG && (null === (wG = this._onUpdate) || void 0 === wG || wG.call(this, ZG, this.booleans));
        return null !== ZG && void 0 !== ZG && ZG
      }
      getBooleanType(GG) {
        return this.booleans[GG]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var GG;
        null === (GG = this._onUpdate) || void 0 === GG || GG.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class LG extends SG {
      getTotalBooleanVal() {
        const GG = this._getTotalBooleanVal();
        if (null === GG) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return GG
      }
      _getTotalBooleanVal() {
        let GG = !1,
          bG = !0;
        for (const ZG in this.booleans) GG = !0, bG &&= this.booleans[ZG];
        return GG ? bG : null
      }
    }
    class yG extends SG {
      getTotalBooleanVal() {
        const GG = this._getTotalBooleanVal();
        if (null === GG) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return GG
      }
      _getTotalBooleanVal() {
        let GG = !1,
          bG = !1;
        for (const ZG in this.booleans) GG = !0, bG ||= this.booleans[ZG];
        return GG ? bG : null
      }
    }
  },
  37146: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => wG,
      l: () => SG
    });
    const wG = 15,
      SG = 3,
      LG = 30
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);