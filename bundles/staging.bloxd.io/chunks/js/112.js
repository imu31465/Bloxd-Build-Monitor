export const id = 112;
export const ids = [110, 111, 112];
export const modules = {
  37485: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      countDecodesAs: () => KR,
      decodedAudio: () => wR
    });
    var yR = GR(4111),
      tR = GR(5742);
    const uR = tR.Howler,
      ZR = new Map;
    let qR = 0;
    const iR = {
        song: 0,
        sound: 0
      },
      fR = new WeakMap,
      VR = new WeakSet;

    function KR(RR, JR) {
      return fR.set(RR, JR), RR
    }

    function wR() {
      return {
        bytes: qR,
        songsDecoded: iR.song,
        soundsDecoded: iR.sound
      }
    }

    function rR(RR) {
      if (VR.has(RR)) return;
      VR.add(RR);
      const JR = 1 === RR.decodeAudioData.length,
        GR = RR.decodeAudioData.bind(RR);
      RR.decodeAudioData = (RR, yR, tR) => {
        const VR = RR => {
          const JR = uR._howls.filter((RR => "loaded" !== RR._state));
          try {
            null === yR || void 0 === yR || yR(RR)
          } finally {
            const GR = JR.find((RR => "loaded" === RR._state));
            void 0 !== GR && "string" === typeof GR._src && function(RR, JR, GR) {
              var yR;
              qR += GR - (null !== (yR = ZR.get(JR)) && void 0 !== yR ? yR : 0), ZR.set(JR, GR);
              const tR = fR.get(RR);
              void 0 !== tR && iR[tR]++
            }(GR, GR._src, RR.length * RR.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return RR
        };
        if (!JR) return GR(RR, VR, tR);
        const KR = GR(RR).then(VR);
        return KR.catch((RR => {
          null === tR || void 0 === tR || tR(RR)
        })), KR
      }
    }(0, yR.e)(wR);
    const eR = tR.Howl.prototype,
      aR = eR.init;
    eR.init = function(RR) {
      return tR.Howler.volume(), uR.ctx && rR(uR.ctx), aR.call(this, RR)
    };
    const LR = eR.unload;
    eR.unload = function() {
      const RR = this._src,
        JR = LR.call(this);
      if ("string" !== typeof RR) return JR;
      const GR = ZR.get(RR);
      return void 0 !== GR && function(RR) {
        return !uR._howls.some((JR => JR._src === RR || "string" === typeof JR._src && RR.indexOf(JR._src) >= 0))
      }(RR) && (ZR.delete(RR), qR -= GR), JR
    }
  },
  37520: (RR, JR, GR) => {
    async function yR(RR) {
      const JR = await fetch(RR, {
        priority: "low"
      });
      if (!JR.ok) throw new Error(`Fetching ${RR} failed: HTTP ${JR.status}`);
      const GR = JR.body.getReader();
      for (; !(await GR.read()).done;);
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  5742: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Howl: () => tR.Howl,
      Howler: () => tR.Howler,
      musicOutput: () => LR,
      readyAudioContext: () => nR
    });
    var yR, tR = GR(5744),
      uR = GR(4757),
      ZR = GR(5456);
    const qR = tR.Howler;

    function iR() {
      var RR, JR;
      if (qR.ctx || !qR.usingWebAudio || "undefined" === typeof AudioContext || !(0, ZR.h)()) return;
      const GR = navigator.audioSession;
      let yR;
      "auto" === (null === GR || void 0 === GR ? void 0 : GR.type) && (GR.type = "ambient");
      try {
        yR = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const tR = yR.createGain();
      tR.gain.setValueAtTime(qR._muted ? 0 : null !== (RR = qR._volume) && void 0 !== RR ? RR : 1, yR.currentTime), tR.connect(yR.destination), qR.ctx = yR, qR.masterGain = tR, null === (JR = qR._setup) || void 0 === JR || JR.call(qR)
    }
    qR._mobileUnloaded = !0;
    const fR = qR.volume.bind(tR.Howler);
    qR.volume = function() {
      return iR(), fR(...arguments)
    };
    const VR = qR.mute.bind(tR.Howler);
    qR.mute = RR => (iR(), VR(RR));
    const KR = tR.Howl.prototype,
      wR = KR.init;

    function rR() {
      for (; qR._html5AudioPool.length < qR.html5PoolSize;) {
        const RR = new Audio;
        RR._unlocked = !0, qR._releaseHtml5Audio(RR)
      }
      for (const JR of qR._howls)
        if (!JR._webAudio)
          for (const GR of JR._getSoundIds()) {
            var RR;
            const yR = null === (RR = JR._soundById(GR)) || void 0 === RR ? void 0 : RR._node;
            yR && !yR._unlocked && (yR._unlocked = !0, yR.load())
          }
    }
    KR.init = function(RR) {
      return iR(), wR.call(this, RR)
    }, (0, ZR.h)() && (qR._unlockAudio = () => {
      const RR = qR.ctx;
      if (qR._audioUnlocked || !RR) return;
      qR.autoUnlock = !1;
      const JR = RR.createBuffer(1, 1, 22050);
      qR._scratchBuffer = JR;
      const GR = new AbortController;
      let yR = "afterPaint";
      const tR = () => {
          var yR;
          if (qR._audioUnlocked) return;
          null === (yR = qR._autoResume) || void 0 === yR || yR.call(qR);
          const tR = RR.createBufferSource();
          tR.buffer = JR, tR.connect(RR.destination), tR.start(0), RR.resume().catch((() => {})), tR.onended = () => {
            tR.disconnect(0), qR._audioUnlocked = !0, GR.abort();
            for (const RR of qR._howls) RR._emit("unlock")
          }
        },
        iR = () => {
          rR(), tR()
        },
        fR = JR => {
          if (rR(), "inTap" === yR) {
            if ("running" === RR.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), tR()
          } else "afterPaint" === yR && (yR = "queued", (0, uR.d)(JR.timeStamp, (() => {
            yR = "inTap", tR()
          })))
        };
      for (const uR of ["touchstart", "touchend"]) document.addEventListener(uR, iR, {
        capture: !0,
        signal: GR.signal
      });
      for (const uR of ZR.b) document.addEventListener(uR, fR, {
        capture: !0,
        signal: GR.signal
      })
    });
    let eR = 0;
    const aR = null === (yR = qR._autoSuspend) || void 0 === yR ? void 0 : yR.bind(tR.Howler);

    function LR() {
      nR();
      const {
        ctx: RR,
        masterGain: JR
      } = qR;
      return RR && JR ? {
        ctx: RR,
        destination: JR,
        holdAwake: RR => {
          var JR, GR;
          (eR += RR ? 1 : -1, RR) ? null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR): null === (GR = qR._autoSuspend) || void 0 === GR || GR.call(qR)
        },
        wake: () => {
          var JR;
          "running" !== RR.state && (null === (JR = qR._autoResume) || void 0 === JR || JR.call(qR), RR.resume().catch((() => {})))
        }
      } : null
    }

    function nR() {
      var RR;
      (qR.volume(), qR.ctx && qR.autoUnlock) && (null === (RR = qR._unlockAudio) || void 0 === RR || RR.call(qR))
    }
    aR && (qR._autoSuspend = () => eR > 0 ? tR.Howler : aR())
  },
  37516: (RR, JR, GR) => {
    function yR(RR, JR) {
      let {
        afterJoin: GR,
        joining: yR,
        idle: tR,
        fetchFile: uR,
        xR: ZR = () => !1
      } = JR;
      const qR = JR => {
        JR >= RR.length || ZR() || GR((() => {
          tR((() => {
            ZR() || (yR() ? qR(JR) : uR(RR[JR]).catch((() => {})).finally((() => {
              qR(JR + 1)
            })))
          }))
        }))
      };
      qR(0)
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  37507: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    const yR = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37528: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      h: () => qR,
      k: () => ZR
    });
    const yR = 4;
    let tR = null;

    function uR(RR) {
      return tR = RR, () => {
        tR === RR && (tR = null)
      }
    }

    function ZR() {
      return null !== tR
    }

    function qR(RR, JR, GR, uR) {
      const ZR = function(RR, JR) {
        return "randomCannon" === RR || "randomFirecracker" === RR ? "explosion" : RR.startsWith("gun") ? /_shot_|^headshot/.test(JR) ? "combat" : null : RR.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(JR) ? "combat" : /^(chestOpen|chestClose|doorOpen|doorClose|trapdoorOpen)/.test(JR) ? "container" : null
      }(RR, JR);
      if (null === ZR || !tR) return;
      GR * GR + uR * uR >= yR && tR(ZR, Math.PI / 2 - Math.atan2(uR, GR))
    }
  },
  37518: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      e: () => KR
    });
    var yR = GR(25),
      tR = GR(37470),
      uR = GR(818),
      ZR = GR(37520),
      qR = GR(5742),
      iR = GR(271),
      fR = GR(37516);
    const VR = {
        afterJoin: RR => {
          (0, uR.d)(yR.d.get("gameState"), RR)
        },
        joining: () => (0, uR.e)(yR.d.get("gameState")),
        idle: iR.e
      },
      KR = function(RR) {
        const JR = new Set,
          GR = new Set,
          yR = JR => JR.flatMap((JR => {
            const GR = (yR = (0, tR.v)(JR).src, uR = RR.canPlay, yR.find((RR => {
              var JR;
              const GR = null === (JR = /\.([^.]+)$/.exec(RR.split("?", 1)[0])) || void 0 === JR ? void 0 : JR[1];
              return void 0 !== GR && uR(GR.toLowerCase())
            })));
            var yR, uR;
            return void 0 === GR ? [] : [GR]
          }));
        return uR => {
          var ZR;
          const qR = (0, tR.m)(uR),
            iR = [];
          JR.has(qR) || (JR.add(qR), iR.push(...yR((0, tR.n)(qR).filter((RR => RR !== uR)))));
          const [VR, KR] = null !== (ZR = [...tR.b].find((RR => {
            let [, JR] = RR;
            return JR.includes(qR)
          }))) && void 0 !== ZR ? ZR : [void 0, []];
          if (void 0 !== VR && !GR.has(VR)) {
            GR.add(VR);
            for (const RR of KR) JR.has(RR) || (JR.add(RR), iR.push(...yR((0, tR.n)(RR))))
          }
          iR.length > 0 && (0, fR.c)(iR, RR)
        }
      }({
        ...VR,
        fetchFile: ZR.b,
        canPlay: RR => !!qR.Howler.codecs(RR)
      })
  },
  37498: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR,
      e: () => tR,
      f: () => yR
    });

    function yR(RR) {
      return RR.replace(/[_\-\s]*\d+$/, "") || RR
    }

    function tR(RR, JR, GR) {
      return GR <= 0 ? 0 : RR * GR / Math.max(JR, GR)
    }

    function uR(RR, JR) {
      const GR = RR.getDurationMs();
      return GR > 0 ? RR.loudness * Math.max(0, 1 - (JR - RR.startMs) / GR) : 0
    }
    class ZR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = RR, this.maxPerGroup = JR, this.voices = []
      }
      admit(RR) {
        if (this.voices = this.voices.filter((RR => RR.isAlive())), null !== RR.group) {
          const JR = this.voices.filter((JR => JR.group === RR.group));
          if (JR.length >= this.maxPerGroup && !this.dropLeastWorth(JR, RR)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, RR)) && (this.voices.push(RR), !0)
      }
      dropLeastWorth(RR, JR) {
        let GR = null,
          yR = 1 / 0;
        for (const tR of RR) {
          if (!tR.canStop()) continue;
          const RR = uR(tR, JR.startMs);
          RR < yR && (GR = tR, yR = RR)
        }
        return !(!GR || JR.loudness < yR) && (this.voices.splice(this.voices.indexOf(GR), 1), GR.stop(), !0)
      }
    }
  },
  37537: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => uR,
      g: () => ZR,
      k: () => yR
    });
    class yR {
      constructor(RR) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = RR
      }
      setMultiplierType(RR, JR) {
        var GR;
        this.multipliers[RR] = JR, null === (GR = this._onUpdate) || void 0 === GR || GR.call(this)
      }
      removeMultiplier(RR) {
        var JR;
        delete this.multipliers[RR], null === (JR = this._onUpdate) || void 0 === JR || JR.call(this)
      }
      getMultiplierType(RR) {
        return this.multipliers[RR]
      }
      getTotalMultipliedVal() {
        let RR = 1;
        for (const JR in this.multipliers) RR *= this.multipliers[JR];
        return RR
      }
    }
    class tR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = RR
      }
      setBooleanType(RR, JR) {
        const GR = this._getTotalBooleanVal();
        this.booleans[RR] = !!JR;
        const yR = this.getTotalBooleanVal();
        var tR;
        yR !== GR && (null === (tR = this._onUpdate) || void 0 === tR || tR.call(this, yR, this.booleans));
        return yR
      }
      removeBoolean(RR) {
        const JR = this._getTotalBooleanVal();
        delete this.booleans[RR];
        const GR = this._getTotalBooleanVal();
        var yR;
        null !== GR && GR !== JR && (null === (yR = this._onUpdate) || void 0 === yR || yR.call(this, GR, this.booleans));
        return null !== GR && void 0 !== GR && GR
      }
      getBooleanType(RR) {
        return this.booleans[RR]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var RR;
        null === (RR = this._onUpdate) || void 0 === RR || RR.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class uR extends tR {
      getTotalBooleanVal() {
        const RR = this._getTotalBooleanVal();
        if (null === RR) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return RR
      }
      _getTotalBooleanVal() {
        let RR = !1,
          JR = !0;
        for (const GR in this.booleans) RR = !0, JR &&= this.booleans[GR];
        return RR ? JR : null
      }
    }
    class ZR extends tR {
      getTotalBooleanVal() {
        const RR = this._getTotalBooleanVal();
        if (null === RR) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return RR
      }
      _getTotalBooleanVal() {
        let RR = !1,
          JR = !1;
        for (const GR in this.booleans) RR = !0, JR ||= this.booleans[GR];
        return RR ? JR : null
      }
    }
  },
  37534: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      d: () => yR,
      f: () => tR
    });
    const yR = 15,
      tR = 3,
      uR = 30
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);