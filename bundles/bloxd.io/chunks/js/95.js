export const id = 95;
export const ids = [93, 94, 95];
export const modules = {
  36705: (mm, Tm, fm) => {
    function hm(mm, Tm, fm, hm) {
      return !(fm && !mm.aimable) && (!Tm || mm.gun && "head" !== hm)
    }

    function Am(mm) {
      return Math.max(.1 * mm, 1)
    }

    function am(mm, Tm) {
      return !mm && Tm
    }
    fm.d(Tm, {
      e: () => am,
      g: () => Am,
      h: () => hm
    })
  },
  36708: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => xm
    });
    let hm = null;
    const Am = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      am = {
        crosshairAccuracy: mm => {
          const Tm = Am.crosshairAccuracy.at(-1);
          Tm ? Tm.hook(mm) : hm = mm
        },
        turnDamageIndicators: mm => {
          var Tm;
          null === (Tm = Am.turnDamageIndicators.at(-1)) || void 0 === Tm || Tm.hook(mm)
        }
      };

    function xm(mm, Tm) {
      const fm = {
          hook: Tm
        },
        xm = Am[mm];
      if (xm.push(fm), "crosshairAccuracy" === mm && null !== hm) {
        const mm = hm;
        hm = null, am.crosshairAccuracy(mm)
      }
      return () => {
        const mm = xm.indexOf(fm); - 1 !== mm && xm.splice(mm, 1)
      }
    }

    function wm() {
      return am
    }
  },
  36516: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      countDecodesAs: () => pm,
      decodedAudio: () => Em
    });
    var hm = fm(3269),
      Am = fm(4800);
    const am = Am.Howler,
      xm = new Map;
    let wm = 0;
    const Dm = {
        song: 0,
        sheet: 0
      },
      im = new WeakMap,
      Rm = new WeakSet;

    function pm(mm, Tm) {
      return im.set(mm, Tm), mm
    }

    function Em() {
      return {
        bytes: wm,
        songsDecoded: Dm.song,
        sheetsDecoded: Dm.sheet
      }
    }

    function om(mm) {
      if (Rm.has(mm)) return;
      Rm.add(mm);
      const Tm = 1 === mm.decodeAudioData.length,
        fm = mm.decodeAudioData.bind(mm);
      mm.decodeAudioData = (mm, hm, Am) => {
        const Rm = mm => {
          const Tm = am._howls.filter((mm => "loaded" !== mm._state));
          try {
            null === hm || void 0 === hm || hm(mm)
          } finally {
            const fm = Tm.find((mm => "loaded" === mm._state));
            void 0 !== fm && "string" === typeof fm._src && function(mm, Tm, fm) {
              var hm;
              wm += fm - (null !== (hm = xm.get(Tm)) && void 0 !== hm ? hm : 0), xm.set(Tm, fm);
              const Am = im.get(mm);
              void 0 !== Am && Dm[Am]++
            }(fm, fm._src, mm.length * mm.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return mm
        };
        if (!Tm) return fm(mm, Rm, Am);
        const pm = fm(mm).then(Rm);
        return pm.catch((mm => {
          null === Am || void 0 === Am || Am(mm)
        })), pm
      }
    }(0, hm.g)(Em);
    const Om = Am.Howl.prototype,
      Ym = Om.init;
    Om.init = function(mm) {
      return Am.Howler.volume(), am.ctx && om(am.ctx), Ym.call(this, mm)
    };
    const qm = Om.unload;
    Om.unload = function() {
      const mm = this._src,
        Tm = qm.call(this);
      if ("string" !== typeof mm) return Tm;
      const fm = xm.get(mm);
      return void 0 !== fm && function(mm) {
        return !am._howls.some((Tm => Tm._src === mm || "string" === typeof Tm._src && mm.indexOf(Tm._src) >= 0))
      }(mm) && (xm.delete(mm), wm -= fm), Tm
    }
  },
  36871: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm
    });
    var hm = fm(23),
      Am = fm(36846),
      am = fm(2518),
      xm = fm(36877),
      wm = fm(4800);
    const Dm = function(mm) {
      const Tm = new Set;
      return fm => {
        var hm;
        const am = null === (hm = [...Am.e].find((mm => {
          let [, Tm] = mm;
          return Tm.includes(fm)
        }))) || void 0 === hm ? void 0 : hm[0];
        if (void 0 === am || Tm.has(am)) return;
        Tm.add(am);
        ! function(mm, Tm) {
          let {
            afterJoin: fm,
            joining: hm,
            idle: Am,
            fetchFile: am
          } = Tm;
          const xm = Tm => {
            Tm >= mm.length || fm((() => {
              Am((() => {
                hm() ? xm(Tm) : am(mm[Tm]).catch((() => {})).finally((() => {
                  xm(Tm + 1)
                }))
              }))
            }))
          };
          xm(0)
        }(Am.e.get(am).filter((mm => mm !== fm)).flatMap((Tm => {
          const fm = (hm = (0, Am.h)(Tm).src, am = mm.canPlay, hm.find((mm => {
            var Tm;
            const fm = null === (Tm = /\.([^.]+)$/.exec(mm.split("?", 1)[0])) || void 0 === Tm ? void 0 : Tm[1];
            return void 0 !== fm && am(fm.toLowerCase())
          })));
          var hm, am;
          return void 0 === fm ? [] : [fm]
        })), mm)
      }
    }({
      afterJoin: mm => {
        (0, am.e)(hm.c.get("gameState"), mm)
      },
      joining: () => (0, am.g)(hm.c.get("gameState")),
      idle: fm(269).e,
      fetchFile: xm.d,
      canPlay: mm => !!wm.Howler.codecs(mm)
    })
  },
  36877: (mm, Tm, fm) => {
    async function hm(mm) {
      const Tm = await fetch(mm, {
        priority: "low"
      });
      if (!Tm.ok) throw new Error(`Fetching ${mm} failed: HTTP ${Tm.status}`);
      const fm = Tm.body.getReader();
      for (; !(await fm.read()).done;);
    }
    fm.d(Tm, {
      d: () => hm
    })
  },
  36853: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    const hm = ["end", "stop", "playerror"];

    function Am(mm, Tm) {
      const fm = () => {
        if (function(mm) {
            return "loaded" === mm.state() && !mm.playing() && !mm._playLock
          }(mm)) {
          for (const Tm of hm) mm.off(Tm, fm);
          mm.unload(), Tm()
        }
      };
      for (const Am of hm) mm.on(Am, fm);
      fm()
    }
  },
  4800: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Howl: () => Am.Howl,
      Howler: () => Am.Howler,
      musicOutput: () => qm,
      readyAudioContext: () => jm
    });
    var hm, Am = fm(4806),
      am = fm(3443),
      xm = fm(4588);
    const wm = Am.Howler;

    function Dm() {
      var mm, Tm;
      if (wm.ctx || !wm.usingWebAudio || "undefined" === typeof AudioContext || !(0, xm.k)()) return;
      const fm = navigator.audioSession;
      let hm;
      "auto" === (null === fm || void 0 === fm ? void 0 : fm.type) && (fm.type = "ambient");
      try {
        hm = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Am = hm.createGain();
      Am.gain.setValueAtTime(wm._muted ? 0 : null !== (mm = wm._volume) && void 0 !== mm ? mm : 1, hm.currentTime), Am.connect(hm.destination), wm.ctx = hm, wm.masterGain = Am, null === (Tm = wm._setup) || void 0 === Tm || Tm.call(wm)
    }
    wm._mobileUnloaded = !0;
    const im = wm.volume.bind(Am.Howler);
    wm.volume = function() {
      return Dm(), im(...arguments)
    };
    const Rm = wm.mute.bind(Am.Howler);
    wm.mute = mm => (Dm(), Rm(mm));
    const pm = Am.Howl.prototype,
      Em = pm.init;

    function om() {
      for (; wm._html5AudioPool.length < wm.html5PoolSize;) {
        const mm = new Audio;
        mm._unlocked = !0, wm._releaseHtml5Audio(mm)
      }
      for (const Tm of wm._howls)
        if (!Tm._webAudio)
          for (const fm of Tm._getSoundIds()) {
            var mm;
            const hm = null === (mm = Tm._soundById(fm)) || void 0 === mm ? void 0 : mm._node;
            hm && !hm._unlocked && (hm._unlocked = !0, hm.load())
          }
    }
    pm.init = function(mm) {
      return Dm(), Em.call(this, mm)
    }, (0, xm.k)() && (wm._unlockAudio = () => {
      const mm = wm.ctx;
      if (wm._audioUnlocked || !mm) return;
      wm.autoUnlock = !1;
      const Tm = mm.createBuffer(1, 1, 22050);
      wm._scratchBuffer = Tm;
      const fm = new AbortController;
      let hm = "afterPaint";
      const Am = () => {
          var hm;
          if (wm._audioUnlocked) return;
          null === (hm = wm._autoResume) || void 0 === hm || hm.call(wm);
          const Am = mm.createBufferSource();
          Am.buffer = Tm, Am.connect(mm.destination), Am.start(0), mm.resume().catch((() => {})), Am.onended = () => {
            Am.disconnect(0), wm._audioUnlocked = !0, fm.abort();
            for (const mm of wm._howls) mm._emit("unlock")
          }
        },
        Dm = () => {
          om(), Am()
        },
        im = Tm => {
          if (om(), "inTap" === hm) {
            if ("running" === mm.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Am()
          } else "afterPaint" === hm && (hm = "queued", (0, am.c)(Tm.timeStamp, (() => {
            hm = "inTap", Am()
          })))
        };
      for (const am of ["touchstart", "touchend"]) document.addEventListener(am, Dm, {
        capture: !0,
        signal: fm.signal
      });
      for (const am of xm.c) document.addEventListener(am, im, {
        capture: !0,
        signal: fm.signal
      })
    });
    let Om = 0;
    const Ym = null === (hm = wm._autoSuspend) || void 0 === hm ? void 0 : hm.bind(Am.Howler);

    function qm() {
      jm();
      const {
        ctx: mm,
        masterGain: Tm
      } = wm;
      return mm && Tm ? {
        ctx: mm,
        destination: Tm,
        holdAwake: mm => {
          var Tm, fm;
          (Om += mm ? 1 : -1, mm) ? null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm): null === (fm = wm._autoSuspend) || void 0 === fm || fm.call(wm)
        },
        wake: () => {
          var Tm;
          "running" !== mm.state && (null === (Tm = wm._autoResume) || void 0 === Tm || Tm.call(wm), mm.resume().catch((() => {})))
        }
      } : null
    }

    function jm() {
      var mm;
      (wm.volume(), wm.ctx && wm.autoUnlock) && (null === (mm = wm._unlockAudio) || void 0 === mm || mm.call(wm))
    }
    Ym && (wm._autoSuspend = () => Om > 0 ? Am.Howler : Ym())
  },
  36868: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    const hm = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36863: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm,
      f: () => Am,
      h: () => hm
    });

    function hm(mm) {
      return mm.replace(/[_\-\s]*\d+$/, "") || mm
    }

    function Am(mm, Tm, fm) {
      return fm <= 0 ? 0 : mm * fm / Math.max(Tm, fm)
    }

    function am(mm, Tm) {
      const fm = mm.getDurationMs();
      return fm > 0 ? mm.loudness * Math.max(0, 1 - (Tm - mm.startMs) / fm) : 0
    }
    class xm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = mm, this.maxPerGroup = Tm, this.voices = []
      }
      admit(mm) {
        if (this.voices = this.voices.filter((mm => mm.isAlive())), null !== mm.group) {
          const Tm = this.voices.filter((Tm => Tm.group === mm.group));
          if (Tm.length >= this.maxPerGroup && !this.dropLeastWorth(Tm, mm)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, mm)) && (this.voices.push(mm), !0)
      }
      dropLeastWorth(mm, Tm) {
        let fm = null,
          hm = 1 / 0;
        for (const Am of mm) {
          if (!Am.canStop()) continue;
          const mm = am(Am, Tm.startMs);
          mm < hm && (fm = Am, hm = mm)
        }
        return !(!fm || Tm.loudness < hm) && (this.voices.splice(this.voices.indexOf(fm), 1), fm.stop(), !0)
      }
    }
  },
  36895: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am,
      g: () => xm,
      k: () => hm
    });
    class hm {
      constructor(mm) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = mm
      }
      setMultiplierType(mm, Tm) {
        var fm;
        this.multipliers[mm] = Tm, null === (fm = this._onUpdate) || void 0 === fm || fm.call(this)
      }
      removeMultiplier(mm) {
        var Tm;
        delete this.multipliers[mm], null === (Tm = this._onUpdate) || void 0 === Tm || Tm.call(this)
      }
      getMultiplierType(mm) {
        return this.multipliers[mm]
      }
      getTotalMultipliedVal() {
        let mm = 1;
        for (const Tm in this.multipliers) mm *= this.multipliers[Tm];
        return mm
      }
    }
    class Am {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = mm
      }
      setBooleanType(mm, Tm) {
        const fm = this._getTotalBooleanVal();
        this.booleans[mm] = !!Tm;
        const hm = this.getTotalBooleanVal();
        var Am;
        hm !== fm && (null === (Am = this._onUpdate) || void 0 === Am || Am.call(this, hm, this.booleans));
        return hm
      }
      removeBoolean(mm) {
        const Tm = this._getTotalBooleanVal();
        delete this.booleans[mm];
        const fm = this._getTotalBooleanVal();
        var hm;
        null !== fm && fm !== Tm && (null === (hm = this._onUpdate) || void 0 === hm || hm.call(this, fm, this.booleans));
        return null !== fm && void 0 !== fm && fm
      }
      getBooleanType(mm) {
        return this.booleans[mm]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var mm;
        null === (mm = this._onUpdate) || void 0 === mm || mm.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class am extends Am {
      getTotalBooleanVal() {
        const mm = this._getTotalBooleanVal();
        if (null === mm) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return mm
      }
      _getTotalBooleanVal() {
        let mm = !1,
          Tm = !0;
        for (const fm in this.booleans) mm = !0, Tm &&= this.booleans[fm];
        return mm ? Tm : null
      }
    }
    class xm extends Am {
      getTotalBooleanVal() {
        const mm = this._getTotalBooleanVal();
        if (null === mm) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return mm
      }
      _getTotalBooleanVal() {
        let mm = !1,
          Tm = !1;
        for (const fm in this.booleans) mm = !0, Tm ||= this.booleans[fm];
        return mm ? Tm : null
      }
    }
  },
  36886: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      e: () => hm,
      f: () => Am
    });
    const hm = 15,
      Am = 3,
      am = 30
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);