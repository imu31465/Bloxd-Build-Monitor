export const id = 112;
export const ids = [110, 111, 112];
export const modules = {
  37859: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      countDecodesAs: () => xr,
      decodedAudio: () => mr
    });
    var Zr = Qr(4061),
      Wr = Qr(5681);
    const ar = Wr.Howler,
      jr = new Map;
    let Ir = 0;
    const fr = {
        song: 0,
        sound: 0
      },
      Er = new WeakMap,
      pr = new WeakSet;

    function xr(rr, Sr) {
      return Er.set(rr, Sr), rr
    }

    function mr() {
      return {
        bytes: Ir,
        songsDecoded: fr.song,
        soundsDecoded: fr.sound
      }
    }

    function Nr(rr) {
      if (pr.has(rr)) return;
      pr.add(rr);
      const Sr = 1 === rr.decodeAudioData.length,
        Qr = rr.decodeAudioData.bind(rr);
      rr.decodeAudioData = (rr, Zr, Wr) => {
        const pr = rr => {
          const Sr = ar._howls.filter((rr => "loaded" !== rr._state));
          try {
            null === Zr || void 0 === Zr || Zr(rr)
          } finally {
            const Qr = Sr.find((rr => "loaded" === rr._state));
            void 0 !== Qr && "string" === typeof Qr._src && function(rr, Sr, Qr) {
              var Zr;
              Ir += Qr - (null !== (Zr = jr.get(Sr)) && void 0 !== Zr ? Zr : 0), jr.set(Sr, Qr);
              const Wr = Er.get(rr);
              void 0 !== Wr && fr[Wr]++
            }(Qr, Qr._src, rr.length * rr.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return rr
        };
        if (!Sr) return Qr(rr, pr, Wr);
        const xr = Qr(rr).then(pr);
        return xr.catch((rr => {
          null === Wr || void 0 === Wr || Wr(rr)
        })), xr
      }
    }(0, Zr.g)(mr);
    const Ur = Wr.Howl.prototype,
      tr = Ur.init;
    Ur.init = function(rr) {
      return Wr.Howler.volume(), ar.ctx && Nr(ar.ctx), tr.call(this, rr)
    };
    const hr = Ur.unload;
    Ur.unload = function() {
      const rr = this._src,
        Sr = hr.call(this);
      if ("string" !== typeof rr) return Sr;
      const Qr = jr.get(rr);
      return void 0 !== Qr && function(rr) {
        return !ar._howls.some((Sr => Sr._src === rr || "string" === typeof Sr._src && rr.indexOf(Sr._src) >= 0))
      }(rr) && (jr.delete(rr), Ir -= Qr), Sr
    }
  },
  37908: (rr, Sr, Qr) => {
    async function Zr(rr) {
      const Sr = await fetch(rr, {
        priority: "low"
      });
      if (!Sr.ok) throw new Error(`Fetching ${rr} failed: HTTP ${Sr.status}`);
      const Qr = Sr.body.getReader();
      for (; !(await Qr.read()).done;);
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  },
  5681: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Howl: () => Wr.Howl,
      Howler: () => Wr.Howler,
      musicOutput: () => hr,
      readyAudioContext: () => zr
    });
    var Zr, Wr = Qr(5689),
      ar = Qr(4681),
      jr = Qr(5413);
    const Ir = Wr.Howler;

    function fr() {
      var rr, Sr;
      if (Ir.ctx || !Ir.usingWebAudio || "undefined" === typeof AudioContext || !(0, jr.i)()) return;
      const Qr = navigator.audioSession;
      let Zr;
      "auto" === (null === Qr || void 0 === Qr ? void 0 : Qr.type) && (Qr.type = "ambient");
      try {
        Zr = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Wr = Zr.createGain();
      Wr.gain.setValueAtTime(Ir._muted ? 0 : null !== (rr = Ir._volume) && void 0 !== rr ? rr : 1, Zr.currentTime), Wr.connect(Zr.destination), Ir.ctx = Zr, Ir.masterGain = Wr, null === (Sr = Ir._setup) || void 0 === Sr || Sr.call(Ir)
    }
    Ir._mobileUnloaded = !0;
    const Er = Ir.volume.bind(Wr.Howler);
    Ir.volume = function() {
      return fr(), Er(...arguments)
    };
    const pr = Ir.mute.bind(Wr.Howler);
    Ir.mute = rr => (fr(), pr(rr));
    const xr = Wr.Howl.prototype,
      mr = xr.init;

    function Nr() {
      for (; Ir._html5AudioPool.length < Ir.html5PoolSize;) {
        const rr = new Audio;
        rr._unlocked = !0, Ir._releaseHtml5Audio(rr)
      }
      for (const Sr of Ir._howls)
        if (!Sr._webAudio)
          for (const Qr of Sr._getSoundIds()) {
            var rr;
            const Zr = null === (rr = Sr._soundById(Qr)) || void 0 === rr ? void 0 : rr._node;
            Zr && !Zr._unlocked && (Zr._unlocked = !0, Zr.load())
          }
    }
    xr.init = function(rr) {
      return fr(), mr.call(this, rr)
    }, (0, jr.i)() && (Ir._unlockAudio = () => {
      const rr = Ir.ctx;
      if (Ir._audioUnlocked || !rr) return;
      Ir.autoUnlock = !1;
      const Sr = rr.createBuffer(1, 1, 22050);
      Ir._scratchBuffer = Sr;
      const Qr = new AbortController;
      let Zr = "afterPaint";
      const Wr = () => {
          var Zr;
          if (Ir._audioUnlocked) return;
          null === (Zr = Ir._autoResume) || void 0 === Zr || Zr.call(Ir);
          const Wr = rr.createBufferSource();
          Wr.buffer = Sr, Wr.connect(rr.destination), Wr.start(0), rr.resume().catch((() => {})), Wr.onended = () => {
            Wr.disconnect(0), Ir._audioUnlocked = !0, Qr.abort();
            for (const rr of Ir._howls) rr._emit("unlock")
          }
        },
        fr = () => {
          Nr(), Wr()
        },
        Er = Sr => {
          if (Nr(), "inTap" === Zr) {
            if ("running" === rr.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Wr()
          } else "afterPaint" === Zr && (Zr = "queued", (0, ar.e)(Sr.timeStamp, (() => {
            Zr = "inTap", Wr()
          })))
        };
      for (const ar of ["touchstart", "touchend"]) document.addEventListener(ar, fr, {
        capture: !0,
        signal: Qr.signal
      });
      for (const ar of jr.c) document.addEventListener(ar, Er, {
        capture: !0,
        signal: Qr.signal
      })
    });
    let Ur = 0;
    const tr = null === (Zr = Ir._autoSuspend) || void 0 === Zr ? void 0 : Zr.bind(Wr.Howler);

    function hr() {
      zr();
      const {
        ctx: rr,
        masterGain: Sr
      } = Ir;
      return rr && Sr ? {
        ctx: rr,
        destination: Sr,
        holdAwake: rr => {
          var Sr, Qr;
          (Ur += rr ? 1 : -1, rr) ? null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir): null === (Qr = Ir._autoSuspend) || void 0 === Qr || Qr.call(Ir)
        },
        wake: () => {
          var Sr;
          "running" !== rr.state && (null === (Sr = Ir._autoResume) || void 0 === Sr || Sr.call(Ir), rr.resume().catch((() => {})))
        }
      } : null
    }

    function zr() {
      var rr;
      (Ir.volume(), Ir.ctx && Ir.autoUnlock) && (null === (rr = Ir._unlockAudio) || void 0 === rr || rr.call(Ir))
    }
    tr && (Ir._autoSuspend = () => Ur > 0 ? Wr.Howler : tr())
  },
  37893: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      let {
        afterJoin: Qr,
        joining: Zr,
        idle: Wr,
        fetchFile: ar,
        Rr: jr = () => !1
      } = Sr;
      const Ir = Sr => {
        Sr >= rr.length || jr() || Qr((() => {
          Wr((() => {
            jr() || (Zr() ? Ir(Sr) : ar(rr[Sr]).catch((() => {})).finally((() => {
              Ir(Sr + 1)
            })))
          }))
        }))
      };
      Ir(0)
    }
    Qr.d(Sr, {
      d: () => Zr
    })
  },
  37884: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    const Zr = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37915: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      i: () => Ir,
      l: () => jr
    });
    const Zr = 4;
    let Wr = null;

    function ar(rr) {
      return Wr = rr, () => {
        Wr === rr && (Wr = null)
      }
    }

    function jr() {
      return null !== Wr
    }

    function Ir(rr, Sr, Qr, ar) {
      const jr = function(rr, Sr) {
        return "randomCannon" === rr || "randomFirecracker" === rr ? "explosion" : rr.startsWith("gun") ? /_shot_|^headshot/.test(Sr) ? "combat" : null : rr.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(Sr) ? "combat" : /^(chestOpen|chestClose|doorOpen|doorClose|trapdoorOpen)/.test(Sr) ? "container" : null
      }(rr, Sr);
      if (null === jr || !Wr) return;
      Qr * Qr + ar * ar >= Zr && Wr(jr, Math.PI / 2 - Math.atan2(ar, Qr))
    }
  },
  37902: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      f: () => xr
    });
    var Zr = Qr(26),
      Wr = Qr(37851),
      ar = Qr(822),
      jr = Qr(37908),
      Ir = Qr(5681),
      fr = Qr(272),
      Er = Qr(37893);
    const pr = {
        afterJoin: rr => {
          (0, ar.d)(Zr.c.get("gameState"), rr)
        },
        joining: () => (0, ar.e)(Zr.c.get("gameState")),
        idle: fr.c
      },
      xr = function(rr) {
        const Sr = new Set,
          Qr = new Set,
          Zr = Sr => Sr.flatMap((Sr => {
            const Qr = (Zr = (0, Wr.r)(Sr).src, ar = rr.canPlay, Zr.find((rr => {
              var Sr;
              const Qr = null === (Sr = /\.([^.]+)$/.exec(rr.split("?", 1)[0])) || void 0 === Sr ? void 0 : Sr[1];
              return void 0 !== Qr && ar(Qr.toLowerCase())
            })));
            var Zr, ar;
            return void 0 === Qr ? [] : [Qr]
          }));
        return ar => {
          var jr;
          const Ir = (0, Wr.g)(ar),
            fr = [];
          Sr.has(Ir) || (Sr.add(Ir), fr.push(...Zr((0, Wr.h)(Ir).filter((rr => rr !== ar)))));
          const [pr, xr] = null !== (jr = [...Wr.b].find((rr => {
            let [, Sr] = rr;
            return Sr.includes(Ir)
          }))) && void 0 !== jr ? jr : [void 0, []];
          if (void 0 !== pr && !Qr.has(pr)) {
            Qr.add(pr);
            for (const rr of xr) Sr.has(rr) || (Sr.add(rr), fr.push(...Zr((0, Wr.h)(rr))))
          }
          fr.length > 0 && (0, Er.d)(fr, rr)
        }
      }({
        ...pr,
        fetchFile: jr.e,
        canPlay: rr => !!Ir.Howler.codecs(rr)
      })
  },
  37875: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr,
      h: () => Wr,
      l: () => Zr
    });

    function Zr(rr) {
      return rr.replace(/[_\-\s]*\d+$/, "") || rr
    }

    function Wr(rr, Sr, Qr) {
      return Qr <= 0 ? 0 : rr * Qr / Math.max(Sr, Qr)
    }

    function ar(rr, Sr) {
      const Qr = rr.getDurationMs();
      return Qr > 0 ? rr.loudness * Math.max(0, 1 - (Sr - rr.startMs) / Qr) : 0
    }
    class jr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = rr, this.maxPerGroup = Sr, this.voices = []
      }
      admit(rr) {
        if (this.voices = this.voices.filter((rr => rr.isAlive())), null !== rr.group) {
          const Sr = this.voices.filter((Sr => Sr.group === rr.group));
          if (Sr.length >= this.maxPerGroup && !this.dropLeastWorth(Sr, rr)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, rr)) && (this.voices.push(rr), !0)
      }
      dropLeastWorth(rr, Sr) {
        let Qr = null,
          Zr = 1 / 0;
        for (const Wr of rr) {
          if (!Wr.canStop()) continue;
          const rr = ar(Wr, Sr.startMs);
          rr < Zr && (Qr = Wr, Zr = rr)
        }
        return !(!Qr || Sr.loudness < Zr) && (this.voices.splice(this.voices.indexOf(Qr), 1), Qr.stop(), !0)
      }
    }
  },
  37927: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      g: () => jr,
      k: () => Zr
    });
    class Zr {
      constructor(rr) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = rr
      }
      setMultiplierType(rr, Sr) {
        var Qr;
        this.multipliers[rr] = Sr, null === (Qr = this._onUpdate) || void 0 === Qr || Qr.call(this)
      }
      removeMultiplier(rr) {
        var Sr;
        delete this.multipliers[rr], null === (Sr = this._onUpdate) || void 0 === Sr || Sr.call(this)
      }
      getMultiplierType(rr) {
        return this.multipliers[rr]
      }
      getTotalMultipliedVal() {
        let rr = 1;
        for (const Sr in this.multipliers) rr *= this.multipliers[Sr];
        return rr
      }
    }
    class Wr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = rr
      }
      setBooleanType(rr, Sr) {
        const Qr = this._getTotalBooleanVal();
        this.booleans[rr] = !!Sr;
        const Zr = this.getTotalBooleanVal();
        var Wr;
        Zr !== Qr && (null === (Wr = this._onUpdate) || void 0 === Wr || Wr.call(this, Zr, this.booleans));
        return Zr
      }
      removeBoolean(rr) {
        const Sr = this._getTotalBooleanVal();
        delete this.booleans[rr];
        const Qr = this._getTotalBooleanVal();
        var Zr;
        null !== Qr && Qr !== Sr && (null === (Zr = this._onUpdate) || void 0 === Zr || Zr.call(this, Qr, this.booleans));
        return null !== Qr && void 0 !== Qr && Qr
      }
      getBooleanType(rr) {
        return this.booleans[rr]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var rr;
        null === (rr = this._onUpdate) || void 0 === rr || rr.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class ar extends Wr {
      getTotalBooleanVal() {
        const rr = this._getTotalBooleanVal();
        if (null === rr) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return rr
      }
      _getTotalBooleanVal() {
        let rr = !1,
          Sr = !0;
        for (const Qr in this.booleans) rr = !0, Sr &&= this.booleans[Qr];
        return rr ? Sr : null
      }
    }
    class jr extends Wr {
      getTotalBooleanVal() {
        const rr = this._getTotalBooleanVal();
        if (null === rr) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return rr
      }
      _getTotalBooleanVal() {
        let rr = !1,
          Sr = !1;
        for (const Qr in this.booleans) rr = !0, Sr ||= this.booleans[Qr];
        return rr ? Sr : null
      }
    }
  },
  37924: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      e: () => Zr,
      h: () => Wr
    });
    const Zr = 15,
      Wr = 3,
      ar = 30
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);