export const id = 112;
export const ids = [110, 111, 112];
export const modules = {
  37641: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      countDecodesAs: () => Ob,
      decodedAudio: () => Ub
    });
    var eb = Mb(4220),
      Hb = Mb(5766);
    const pb = Hb.Howler,
      Vb = new Map;
    let gb = 0;
    const lb = {
        song: 0,
        sound: 0
      },
      Lb = new WeakMap,
      Ib = new WeakSet;

    function Ob(bb, wb) {
      return Lb.set(bb, wb), bb
    }

    function Ub() {
      return {
        bytes: gb,
        songsDecoded: lb.song,
        soundsDecoded: lb.sound
      }
    }

    function tb(bb) {
      if (Ib.has(bb)) return;
      Ib.add(bb);
      const wb = 1 === bb.decodeAudioData.length,
        Mb = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, eb, Hb) => {
        const Ib = bb => {
          const wb = pb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === eb || void 0 === eb || eb(bb)
          } finally {
            const Mb = wb.find((bb => "loaded" === bb._state));
            void 0 !== Mb && "string" === typeof Mb._src && function(bb, wb, Mb) {
              var eb;
              gb += Mb - (null !== (eb = Vb.get(wb)) && void 0 !== eb ? eb : 0), Vb.set(wb, Mb);
              const Hb = Lb.get(bb);
              void 0 !== Hb && lb[Hb]++
            }(Mb, Mb._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!wb) return Mb(bb, Ib, Hb);
        const Ob = Mb(bb).then(Ib);
        return Ob.catch((bb => {
          null === Hb || void 0 === Hb || Hb(bb)
        })), Ob
      }
    }(0, eb.e)(Ub);
    const Cb = Hb.Howl.prototype,
      Eb = Cb.init;
    Cb.init = function(bb) {
      return Hb.Howler.volume(), pb.ctx && tb(pb.ctx), Eb.call(this, bb)
    };
    const Fb = Cb.unload;
    Cb.unload = function() {
      const bb = this._src,
        wb = Fb.call(this);
      if ("string" !== typeof bb) return wb;
      const Mb = Vb.get(bb);
      return void 0 !== Mb && function(bb) {
        return !pb._howls.some((wb => wb._src === bb || "string" === typeof wb._src && bb.indexOf(wb._src) >= 0))
      }(bb) && (Vb.delete(bb), gb -= Mb), wb
    }
  },
  37685: (bb, wb, Mb) => {
    async function eb(bb) {
      const wb = await fetch(bb, {
        priority: "low"
      });
      if (!wb.ok) throw new Error(`Fetching ${bb} failed: HTTP ${wb.status}`);
      const Mb = wb.body.getReader();
      for (; !(await Mb.read()).done;);
    }
    Mb.d(wb, {
      b: () => eb
    })
  },
  5766: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Howl: () => Hb.Howl,
      Howler: () => Hb.Howler,
      musicOutput: () => Fb,
      readyAudioContext: () => Bb
    });
    var eb, Hb = Mb(5768),
      pb = Mb(4835),
      Vb = Mb(5505);
    const gb = Hb.Howler;

    function lb() {
      var bb, wb;
      if (gb.ctx || !gb.usingWebAudio || "undefined" === typeof AudioContext || !(0, Vb.h)()) return;
      const Mb = navigator.audioSession;
      let eb;
      "auto" === (null === Mb || void 0 === Mb ? void 0 : Mb.type) && (Mb.type = "ambient");
      try {
        eb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Hb = eb.createGain();
      Hb.gain.setValueAtTime(gb._muted ? 0 : null !== (bb = gb._volume) && void 0 !== bb ? bb : 1, eb.currentTime), Hb.connect(eb.destination), gb.ctx = eb, gb.masterGain = Hb, null === (wb = gb._setup) || void 0 === wb || wb.call(gb)
    }
    gb._mobileUnloaded = !0;
    const Lb = gb.volume.bind(Hb.Howler);
    gb.volume = function() {
      return lb(), Lb(...arguments)
    };
    const Ib = gb.mute.bind(Hb.Howler);
    gb.mute = bb => (lb(), Ib(bb));
    const Ob = Hb.Howl.prototype,
      Ub = Ob.init;

    function tb() {
      for (; gb._html5AudioPool.length < gb.html5PoolSize;) {
        const bb = new Audio;
        bb._unlocked = !0, gb._releaseHtml5Audio(bb)
      }
      for (const wb of gb._howls)
        if (!wb._webAudio)
          for (const Mb of wb._getSoundIds()) {
            var bb;
            const eb = null === (bb = wb._soundById(Mb)) || void 0 === bb ? void 0 : bb._node;
            eb && !eb._unlocked && (eb._unlocked = !0, eb.load())
          }
    }
    Ob.init = function(bb) {
      return lb(), Ub.call(this, bb)
    }, (0, Vb.h)() && (gb._unlockAudio = () => {
      const bb = gb.ctx;
      if (gb._audioUnlocked || !bb) return;
      gb.autoUnlock = !1;
      const wb = bb.createBuffer(1, 1, 22050);
      gb._scratchBuffer = wb;
      const Mb = new AbortController;
      let eb = "afterPaint";
      const Hb = () => {
          var eb;
          if (gb._audioUnlocked) return;
          null === (eb = gb._autoResume) || void 0 === eb || eb.call(gb);
          const Hb = bb.createBufferSource();
          Hb.buffer = wb, Hb.connect(bb.destination), Hb.start(0), bb.resume().catch((() => {})), Hb.onended = () => {
            Hb.disconnect(0), gb._audioUnlocked = !0, Mb.abort();
            for (const bb of gb._howls) bb._emit("unlock")
          }
        },
        lb = () => {
          tb(), Hb()
        },
        Lb = wb => {
          if (tb(), "inTap" === eb) {
            if ("running" === bb.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Hb()
          } else "afterPaint" === eb && (eb = "queued", (0, pb.b)(wb.timeStamp, (() => {
            eb = "inTap", Hb()
          })))
        };
      for (const pb of ["touchstart", "touchend"]) document.addEventListener(pb, lb, {
        capture: !0,
        signal: Mb.signal
      });
      for (const pb of Vb.d) document.addEventListener(pb, Lb, {
        capture: !0,
        signal: Mb.signal
      })
    });
    let Cb = 0;
    const Eb = null === (eb = gb._autoSuspend) || void 0 === eb ? void 0 : eb.bind(Hb.Howler);

    function Fb() {
      Bb();
      const {
        ctx: bb,
        masterGain: wb
      } = gb;
      return bb && wb ? {
        ctx: bb,
        destination: wb,
        holdAwake: bb => {
          var wb, Mb;
          (Cb += bb ? 1 : -1, bb) ? null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb): null === (Mb = gb._autoSuspend) || void 0 === Mb || Mb.call(gb)
        },
        wake: () => {
          var wb;
          "running" !== bb.state && (null === (wb = gb._autoResume) || void 0 === wb || wb.call(gb), bb.resume().catch((() => {})))
        }
      } : null
    }

    function Bb() {
      var bb;
      (gb.volume(), gb.ctx && gb.autoUnlock) && (null === (bb = gb._unlockAudio) || void 0 === bb || bb.call(gb))
    }
    Eb && (gb._autoSuspend = () => Cb > 0 ? Hb.Howler : Eb())
  },
  37668: (bb, wb, Mb) => {
    function eb(bb, wb) {
      let {
        afterJoin: Mb,
        joining: eb,
        idle: Hb,
        fetchFile: pb,
        Yb: Vb = () => !1
      } = wb;
      const gb = wb => {
        wb >= bb.length || Vb() || Mb((() => {
          Hb((() => {
            Vb() || (eb() ? gb(wb) : pb(bb[wb]).catch((() => {})).finally((() => {
              gb(wb + 1)
            })))
          }))
        }))
      };
      gb(0)
    }
    Mb.d(wb, {
      d: () => eb
    })
  },
  37659: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    const eb = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37687: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => gb,
      e: () => Vb
    });
    const eb = 4;
    let Hb = null;

    function pb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }

    function Vb() {
      return null !== Hb
    }

    function gb(bb, wb, Mb, pb) {
      const Vb = function(bb, wb) {
        return "randomCannon" === bb || "randomFirecracker" === bb ? "explosion" : bb.startsWith("gun") ? /_shot_|^headshot/.test(wb) ? "combat" : null : bb.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(wb) ? "combat" : /^(chestOpen|chestClose|doorOpen|doorClose|trapdoorOpen)/.test(wb) ? "container" : null
      }(bb, wb);
      if (null === Vb || !Hb) return;
      Mb * Mb + pb * pb >= eb && Hb(Vb, Math.PI / 2 - Math.atan2(pb, Mb))
    }
  },
  37677: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Ib,
      f: () => Ob
    });
    var eb = Mb(26),
      Hb = Mb(37630),
      pb = Mb(825),
      Vb = Mb(37685),
      gb = Mb(5766),
      lb = Mb(294),
      Lb = Mb(37668);
    const Ib = {
        afterJoin: bb => {
          (0, pb.b)(eb.c.get("gameState"), bb)
        },
        joining: () => (0, pb.e)(eb.c.get("gameState")),
        idle: lb.b
      },
      Ob = function(bb) {
        const wb = new Set,
          Mb = new Set,
          eb = wb => wb.flatMap((wb => {
            const Mb = (eb = (0, Hb.v)(wb).src, pb = bb.canPlay, eb.find((bb => {
              var wb;
              const Mb = null === (wb = /\.([^.]+)$/.exec(bb.split("?", 1)[0])) || void 0 === wb ? void 0 : wb[1];
              return void 0 !== Mb && pb(Mb.toLowerCase())
            })));
            var eb, pb;
            return void 0 === Mb ? [] : [Mb]
          }));
        return pb => {
          var Vb;
          const gb = (0, Hb.k)(pb),
            lb = [];
          wb.has(gb) || (wb.add(gb), lb.push(...eb((0, Hb.o)(gb).filter((bb => bb !== pb)))));
          const [Ib, Ob] = null !== (Vb = [...Hb.d].find((bb => {
            let [, wb] = bb;
            return wb.includes(gb)
          }))) && void 0 !== Vb ? Vb : [void 0, []];
          if (void 0 !== Ib && !Mb.has(Ib)) {
            Mb.add(Ib);
            for (const bb of Ob) wb.has(bb) || (wb.add(bb), lb.push(...eb((0, Hb.o)(bb))))
          }
          lb.length > 0 && (0, Lb.d)(lb, bb)
        }
      }({
        ...Ib,
        fetchFile: Vb.b,
        canPlay: bb => !!gb.Howler.codecs(bb)
      })
  },
  37653: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      f: () => Hb,
      i: () => eb
    });

    function eb(bb) {
      return bb.replace(/[_\-\s]*\d+$/, "") || bb
    }

    function Hb(bb, wb, Mb) {
      return Mb <= 0 ? 0 : bb * Mb / Math.max(wb, Mb)
    }

    function pb(bb, wb) {
      const Mb = bb.getDurationMs();
      return Mb > 0 ? bb.loudness * Math.max(0, 1 - (wb - bb.startMs) / Mb) : 0
    }
    class Vb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = bb, this.maxPerGroup = wb, this.voices = []
      }
      admit(bb) {
        if (this.voices = this.voices.filter((bb => bb.isAlive())), null !== bb.group) {
          const wb = this.voices.filter((wb => wb.group === bb.group));
          if (wb.length >= this.maxPerGroup && !this.dropLeastWorth(wb, bb)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, bb)) && (this.voices.push(bb), !0)
      }
      dropLeastWorth(bb, wb) {
        let Mb = null,
          eb = 1 / 0;
        for (const Hb of bb) {
          if (!Hb.canStop()) continue;
          const bb = pb(Hb, wb.startMs);
          bb < eb && (Mb = Hb, eb = bb)
        }
        return !(!Mb || wb.loudness < eb) && (this.voices.splice(this.voices.indexOf(Mb), 1), Mb.stop(), !0)
      }
    }
  },
  37695: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      d: () => Vb,
      f: () => eb
    });
    class eb {
      constructor(bb) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setMultiplierType(bb, wb) {
        var Mb;
        this.multipliers[bb] = wb, null === (Mb = this._onUpdate) || void 0 === Mb || Mb.call(this)
      }
      removeMultiplier(bb) {
        var wb;
        delete this.multipliers[bb], null === (wb = this._onUpdate) || void 0 === wb || wb.call(this)
      }
      getMultiplierType(bb) {
        return this.multipliers[bb]
      }
      getTotalMultipliedVal() {
        let bb = 1;
        for (const wb in this.multipliers) bb *= this.multipliers[wb];
        return bb
      }
    }
    class Hb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setBooleanType(bb, wb) {
        const Mb = this._getTotalBooleanVal();
        this.booleans[bb] = !!wb;
        const eb = this.getTotalBooleanVal();
        var Hb;
        eb !== Mb && (null === (Hb = this._onUpdate) || void 0 === Hb || Hb.call(this, eb, this.booleans));
        return eb
      }
      removeBoolean(bb) {
        const wb = this._getTotalBooleanVal();
        delete this.booleans[bb];
        const Mb = this._getTotalBooleanVal();
        var eb;
        null !== Mb && Mb !== wb && (null === (eb = this._onUpdate) || void 0 === eb || eb.call(this, Mb, this.booleans));
        return null !== Mb && void 0 !== Mb && Mb
      }
      getBooleanType(bb) {
        return this.booleans[bb]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var bb;
        null === (bb = this._onUpdate) || void 0 === bb || bb.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class pb extends Hb {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          wb = !0;
        for (const Mb in this.booleans) bb = !0, wb &&= this.booleans[Mb];
        return bb ? wb : null
      }
    }
    class Vb extends Hb {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          wb = !1;
        for (const Mb in this.booleans) bb = !0, wb ||= this.booleans[Mb];
        return bb ? wb : null
      }
    }
  },
  37691: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      f: () => eb,
      j: () => Hb
    });
    const eb = 15,
      Hb = 3,
      pb = 30
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);