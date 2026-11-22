export const id = 95;
export const ids = [93, 94, 95];
export const modules = {
  36164: (kk, ek, ik) => {
    function Dk(kk, ek, ik, Dk) {
      return !(ik && !kk.aimable) && (!ek || kk.gun && "head" !== Dk)
    }

    function fk(kk) {
      return Math.max(.1 * kk, 1)
    }

    function Sk(kk, ek) {
      return !kk && ek
    }
    ik.d(ek, {
      b: () => Sk,
      d: () => fk,
      f: () => Dk
    })
  },
  36167: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk,
      g: () => bk
    });
    let Dk = null;
    const fk = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Sk = {
        crosshairAccuracy: kk => {
          const ek = fk.crosshairAccuracy.at(-1);
          ek ? ek.hook(kk) : Dk = kk
        },
        turnDamageIndicators: kk => {
          var ek;
          null === (ek = fk.turnDamageIndicators.at(-1)) || void 0 === ek || ek.hook(kk)
        }
      };

    function bk(kk, ek) {
      const ik = {
          hook: ek
        },
        bk = fk[kk];
      if (bk.push(ik), "crosshairAccuracy" === kk && null !== Dk) {
        const kk = Dk;
        Dk = null, Sk.crosshairAccuracy(kk)
      }
      return () => {
        const kk = bk.indexOf(ik); - 1 !== kk && bk.splice(kk, 1)
      }
    }

    function rk() {
      return Sk
    }
  },
  35966: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      countDecodesAs: () => Kk,
      decodedAudio: () => xk
    });
    var Dk = ik(3224),
      fk = ik(4799);
    const Sk = fk.Howler,
      bk = new Map;
    let rk = 0;
    const Pk = {
        song: 0,
        sheet: 0
      },
      mk = new WeakMap,
      Mk = new WeakSet;

    function Kk(kk, ek) {
      return mk.set(kk, ek), kk
    }

    function xk() {
      return {
        bytes: rk,
        songsDecoded: Pk.song,
        sheetsDecoded: Pk.sheet
      }
    }

    function nk(kk) {
      if (Mk.has(kk)) return;
      Mk.add(kk);
      const ek = 1 === kk.decodeAudioData.length,
        ik = kk.decodeAudioData.bind(kk);
      kk.decodeAudioData = (kk, Dk, fk) => {
        const Mk = kk => {
          const ek = Sk._howls.filter((kk => "loaded" !== kk._state));
          try {
            null === Dk || void 0 === Dk || Dk(kk)
          } finally {
            const ik = ek.find((kk => "loaded" === kk._state));
            void 0 !== ik && "string" === typeof ik._src && function(kk, ek, ik) {
              var Dk;
              rk += ik - (null !== (Dk = bk.get(ek)) && void 0 !== Dk ? Dk : 0), bk.set(ek, ik);
              const fk = mk.get(kk);
              void 0 !== fk && Pk[fk]++
            }(ik, ik._src, kk.length * kk.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return kk
        };
        if (!ek) return ik(kk, Mk, fk);
        const Kk = ik(kk).then(Mk);
        return Kk.catch((kk => {
          null === fk || void 0 === fk || fk(kk)
        })), Kk
      }
    }(0, Dk.d)(xk);
    const Uk = fk.Howl.prototype,
      Hk = Uk.init;
    Uk.init = function(kk) {
      return fk.Howler.volume(), Sk.ctx && nk(Sk.ctx), Hk.call(this, kk)
    };
    const wk = Uk.unload;
    Uk.unload = function() {
      const kk = this._src,
        ek = wk.call(this);
      if ("string" !== typeof kk) return ek;
      const ik = bk.get(kk);
      return void 0 !== ik && function(kk) {
        return !Sk._howls.some((ek => ek._src === kk || "string" === typeof ek._src && kk.indexOf(ek._src) >= 0))
      }(kk) && (bk.delete(kk), rk -= ik), ek
    }
  },
  36361: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk
    });
    var Dk = ik(22),
      fk = ik(36341),
      Sk = ik(4302),
      bk = ik(36367),
      rk = ik(4799);
    const Pk = function(kk) {
      const ek = new Set;
      return ik => {
        var Dk;
        const Sk = null === (Dk = [...fk.e].find((kk => {
          let [, ek] = kk;
          return ek.includes(ik)
        }))) || void 0 === Dk ? void 0 : Dk[0];
        if (void 0 === Sk || ek.has(Sk)) return;
        ek.add(Sk);
        ! function(kk, ek) {
          let {
            afterJoin: ik,
            joining: Dk,
            idle: fk,
            fetchFile: Sk
          } = ek;
          const bk = ek => {
            ek >= kk.length || ik((() => {
              fk((() => {
                Dk() ? bk(ek) : Sk(kk[ek]).catch((() => {})).finally((() => {
                  bk(ek + 1)
                }))
              }))
            }))
          };
          bk(0)
        }(fk.e.get(Sk).filter((kk => kk !== ik)).flatMap((ek => {
          const ik = (Dk = (0, fk.j)(ek).src, Sk = kk.canPlay, Dk.find((kk => {
            var ek;
            const ik = null === (ek = /\.([^.]+)$/.exec(kk.split("?", 1)[0])) || void 0 === ek ? void 0 : ek[1];
            return void 0 !== ik && Sk(ik.toLowerCase())
          })));
          var Dk, Sk;
          return void 0 === ik ? [] : [ik]
        })), kk)
      }
    }({
      afterJoin: kk => {
        (0, Sk.e)(Dk.b.get("gameState"), kk)
      },
      joining: () => (0, Sk.i)(Dk.b.get("gameState")),
      idle: ik(247).c,
      fetchFile: bk.e,
      canPlay: kk => !!rk.Howler.codecs(kk)
    })
  },
  36367: (kk, ek, ik) => {
    async function Dk(kk) {
      const ek = await fetch(kk, {
        priority: "low"
      });
      if (!ek.ok) throw new Error(`Fetching ${kk} failed: HTTP ${ek.status}`);
      const ik = ek.body.getReader();
      for (; !(await ik.read()).done;);
    }
    ik.d(ek, {
      e: () => Dk
    })
  },
  36346: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    const Dk = ["end", "stop", "playerror"];

    function fk(kk, ek) {
      const ik = () => {
        if (function(kk) {
            return "loaded" === kk.state() && !kk.playing() && !kk._playLock
          }(kk)) {
          for (const ek of Dk) kk.off(ek, ik);
          kk.unload(), ek()
        }
      };
      for (const fk of Dk) kk.on(fk, ik);
      ik()
    }
  },
  4799: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Howl: () => fk.Howl,
      Howler: () => fk.Howler,
      musicOutput: () => wk,
      readyAudioContext: () => lk
    });
    var Dk, fk = ik(4804),
      Sk = ik(3521),
      bk = ik(4583);
    const rk = fk.Howler;

    function Pk() {
      var kk, ek;
      if (rk.ctx || !rk.usingWebAudio || "undefined" === typeof AudioContext || !(0, bk.i)()) return;
      const ik = navigator.audioSession;
      let Dk;
      "auto" === (null === ik || void 0 === ik ? void 0 : ik.type) && (ik.type = "ambient");
      try {
        Dk = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const fk = Dk.createGain();
      fk.gain.setValueAtTime(rk._muted ? 0 : null !== (kk = rk._volume) && void 0 !== kk ? kk : 1, Dk.currentTime), fk.connect(Dk.destination), rk.ctx = Dk, rk.masterGain = fk, null === (ek = rk._setup) || void 0 === ek || ek.call(rk)
    }
    rk._mobileUnloaded = !0;
    const mk = rk.volume.bind(fk.Howler);
    rk.volume = function() {
      return Pk(), mk(...arguments)
    };
    const Mk = rk.mute.bind(fk.Howler);
    rk.mute = kk => (Pk(), Mk(kk));
    const Kk = fk.Howl.prototype,
      xk = Kk.init;

    function nk() {
      for (; rk._html5AudioPool.length < rk.html5PoolSize;) {
        const kk = new Audio;
        kk._unlocked = !0, rk._releaseHtml5Audio(kk)
      }
      for (const ek of rk._howls)
        if (!ek._webAudio)
          for (const ik of ek._getSoundIds()) {
            var kk;
            const Dk = null === (kk = ek._soundById(ik)) || void 0 === kk ? void 0 : kk._node;
            Dk && !Dk._unlocked && (Dk._unlocked = !0, Dk.load())
          }
    }
    Kk.init = function(kk) {
      return Pk(), xk.call(this, kk)
    }, (0, bk.i)() && (rk._unlockAudio = () => {
      const kk = rk.ctx;
      if (rk._audioUnlocked || !kk) return;
      rk.autoUnlock = !1;
      const ek = kk.createBuffer(1, 1, 22050);
      rk._scratchBuffer = ek;
      const ik = new AbortController;
      let Dk = "afterPaint";
      const fk = () => {
          var Dk;
          if (rk._audioUnlocked) return;
          null === (Dk = rk._autoResume) || void 0 === Dk || Dk.call(rk);
          const fk = kk.createBufferSource();
          fk.buffer = ek, fk.connect(kk.destination), fk.start(0), kk.resume().catch((() => {})), fk.onended = () => {
            fk.disconnect(0), rk._audioUnlocked = !0, ik.abort();
            for (const kk of rk._howls) kk._emit("unlock")
          }
        },
        Pk = () => {
          nk(), fk()
        },
        mk = ek => {
          if (nk(), "inTap" === Dk) {
            if ("running" === kk.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), fk()
          } else "afterPaint" === Dk && (Dk = "queued", (0, Sk.d)(ek.timeStamp, (() => {
            Dk = "inTap", fk()
          })))
        };
      for (const Sk of ["touchstart", "touchend"]) document.addEventListener(Sk, Pk, {
        capture: !0,
        signal: ik.signal
      });
      for (const Sk of bk.e) document.addEventListener(Sk, mk, {
        capture: !0,
        signal: ik.signal
      })
    });
    let Uk = 0;
    const Hk = null === (Dk = rk._autoSuspend) || void 0 === Dk ? void 0 : Dk.bind(fk.Howler);

    function wk() {
      lk();
      const {
        ctx: kk,
        masterGain: ek
      } = rk;
      return kk && ek ? {
        ctx: kk,
        destination: ek,
        holdAwake: kk => {
          var ek, ik;
          (Uk += kk ? 1 : -1, kk) ? null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk): null === (ik = rk._autoSuspend) || void 0 === ik || ik.call(rk)
        },
        wake: () => {
          var ek;
          "running" !== kk.state && (null === (ek = rk._autoResume) || void 0 === ek || ek.call(rk), kk.resume().catch((() => {})))
        }
      } : null
    }

    function lk() {
      var kk;
      (rk.volume(), rk.ctx && rk.autoUnlock) && (null === (kk = rk._unlockAudio) || void 0 === kk || kk.call(rk))
    }
    Hk && (rk._autoSuspend = () => Uk > 0 ? fk.Howler : Hk())
  },
  36354: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    const Dk = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36351: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => bk,
      d: () => fk,
      e: () => Dk
    });

    function Dk(kk) {
      return kk.replace(/[_\-\s]*\d+$/, "") || kk
    }

    function fk(kk, ek, ik) {
      return ik <= 0 ? 0 : kk * ik / Math.max(ek, ik)
    }

    function Sk(kk, ek) {
      const ik = kk.getDurationMs();
      return ik > 0 ? kk.loudness * Math.max(0, 1 - (ek - kk.startMs) / ik) : 0
    }
    class bk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = kk, this.maxPerGroup = ek, this.voices = []
      }
      admit(kk) {
        if (this.voices = this.voices.filter((kk => kk.isAlive())), null !== kk.group) {
          const ek = this.voices.filter((ek => ek.group === kk.group));
          if (ek.length >= this.maxPerGroup && !this.dropLeastWorth(ek, kk)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, kk)) && (this.voices.push(kk), !0)
      }
      dropLeastWorth(kk, ek) {
        let ik = null,
          Dk = 1 / 0;
        for (const fk of kk) {
          if (!fk.canStop()) continue;
          const kk = Sk(fk, ek.startMs);
          kk < Dk && (ik = fk, Dk = kk)
        }
        return !(!ik || ek.loudness < Dk) && (this.voices.splice(this.voices.indexOf(ik), 1), ik.stop(), !0)
      }
    }
  },
  36376: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      g: () => bk,
      j: () => Dk
    });
    class Dk {
      constructor(kk) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = kk
      }
      setMultiplierType(kk, ek) {
        var ik;
        this.multipliers[kk] = ek, null === (ik = this._onUpdate) || void 0 === ik || ik.call(this)
      }
      removeMultiplier(kk) {
        var ek;
        delete this.multipliers[kk], null === (ek = this._onUpdate) || void 0 === ek || ek.call(this)
      }
      getMultiplierType(kk) {
        return this.multipliers[kk]
      }
      getTotalMultipliedVal() {
        let kk = 1;
        for (const ek in this.multipliers) kk *= this.multipliers[ek];
        return kk
      }
    }
    class fk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = kk
      }
      setBooleanType(kk, ek) {
        const ik = this._getTotalBooleanVal();
        this.booleans[kk] = !!ek;
        const Dk = this.getTotalBooleanVal();
        var fk;
        Dk !== ik && (null === (fk = this._onUpdate) || void 0 === fk || fk.call(this, Dk, this.booleans));
        return Dk
      }
      removeBoolean(kk) {
        const ek = this._getTotalBooleanVal();
        delete this.booleans[kk];
        const ik = this._getTotalBooleanVal();
        var Dk;
        null !== ik && ik !== ek && (null === (Dk = this._onUpdate) || void 0 === Dk || Dk.call(this, ik, this.booleans));
        return null !== ik && void 0 !== ik && ik
      }
      getBooleanType(kk) {
        return this.booleans[kk]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var kk;
        null === (kk = this._onUpdate) || void 0 === kk || kk.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Sk extends fk {
      getTotalBooleanVal() {
        const kk = this._getTotalBooleanVal();
        if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return kk
      }
      _getTotalBooleanVal() {
        let kk = !1,
          ek = !0;
        for (const ik in this.booleans) kk = !0, ek &&= this.booleans[ik];
        return kk ? ek : null
      }
    }
    class bk extends fk {
      getTotalBooleanVal() {
        const kk = this._getTotalBooleanVal();
        if (null === kk) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return kk
      }
      _getTotalBooleanVal() {
        let kk = !1,
          ek = !1;
        for (const ik in this.booleans) kk = !0, ek ||= this.booleans[ik];
        return kk ? ek : null
      }
    }
  },
  36370: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Sk,
      h: () => Dk,
      k: () => fk
    });
    const Dk = 15,
      fk = 3,
      Sk = 30
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);