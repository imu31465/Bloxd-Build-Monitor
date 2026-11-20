export const id = 94;
export const ids = [92, 93, 94];
export const modules = {
  36231: (bb, ub, hb) => {
    function Bb(bb, ub, hb, Bb) {
      return !(hb && !bb.aimable) && (!ub || bb.gun && "head" !== Bb)
    }

    function Ob(bb) {
      return Math.max(.1 * bb, 1)
    }

    function Gb(bb, ub) {
      return !bb && ub
    }
    hb.d(ub, {
      e: () => Gb,
      g: () => Ob,
      j: () => Bb
    })
  },
  36234: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      d: () => Ub
    });
    let Bb = null;
    const Ob = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Gb = {
        crosshairAccuracy: bb => {
          const ub = Ob.crosshairAccuracy.at(-1);
          ub ? ub.hook(bb) : Bb = bb
        },
        turnDamageIndicators: bb => {
          var ub;
          null === (ub = Ob.turnDamageIndicators.at(-1)) || void 0 === ub || ub.hook(bb)
        }
      };

    function Ub(bb, ub) {
      const hb = {
          hook: ub
        },
        Ub = Ob[bb];
      if (Ub.push(hb), "crosshairAccuracy" === bb && null !== Bb) {
        const bb = Bb;
        Bb = null, Gb.crosshairAccuracy(bb)
      }
      return () => {
        const bb = Ub.indexOf(hb); - 1 !== bb && Ub.splice(bb, 1)
      }
    }

    function Lb() {
      return Gb
    }
  },
  36044: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      countDecodesAs: () => Hb,
      decodedAudio: () => wb
    });
    var Bb = hb(36051),
      Ob = hb(4626);
    const Gb = Ob.Howler,
      Ub = new Map;
    let Lb = 0;
    const Yb = {
        song: 0,
        sheet: 0
      },
      Sb = new WeakMap,
      ab = new WeakSet;

    function Hb(bb, ub) {
      return Sb.set(bb, ub), bb
    }

    function wb() {
      return {
        bytes: Lb,
        songsDecoded: Yb.song,
        sheetsDecoded: Yb.sheet
      }
    }

    function Zb(bb) {
      if (ab.has(bb)) return;
      ab.add(bb);
      const ub = 1 === bb.decodeAudioData.length,
        hb = bb.decodeAudioData.bind(bb);
      bb.decodeAudioData = (bb, Bb, Ob) => {
        const ab = bb => {
          const ub = Gb._howls.filter((bb => "loaded" !== bb._state));
          try {
            null === Bb || void 0 === Bb || Bb(bb)
          } finally {
            const hb = ub.find((bb => "loaded" === bb._state));
            void 0 !== hb && "string" === typeof hb._src && function(bb, ub, hb) {
              var Bb;
              Lb += hb - (null !== (Bb = Ub.get(ub)) && void 0 !== Bb ? Bb : 0), Ub.set(ub, hb);
              const Ob = Sb.get(bb);
              void 0 !== Ob && Yb[Ob]++
            }(hb, hb._src, bb.length * bb.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return bb
        };
        if (!ub) return hb(bb, ab, Ob);
        const Hb = hb(bb).then(ab);
        return Hb.catch((bb => {
          null === Ob || void 0 === Ob || Ob(bb)
        })), Hb
      }
    }(0, Bb.f)(wb);
    const Xb = Ob.Howl.prototype,
      pb = Xb.init;
    Xb.init = function(bb) {
      return Ob.Howler.volume(), Gb.ctx && Zb(Gb.ctx), pb.call(this, bb)
    };
    const ob = Xb.unload;
    Xb.unload = function() {
      const bb = this._src,
        ub = ob.call(this);
      if ("string" !== typeof bb) return ub;
      const hb = Ub.get(bb);
      return void 0 !== hb && function(bb) {
        return !Gb._howls.some((ub => ub._src === bb || "string" === typeof ub._src && bb.indexOf(ub._src) >= 0))
      }(bb) && (Ub.delete(bb), Lb -= hb), ub
    }
  },
  36051: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      f: () => Ob
    });
    let Bb = null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb() {
      return null === Bb ? null : Bb()
    }
  },
  36423: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Yb
    });
    var Bb = hb(13),
      Ob = hb(36393),
      Gb = hb(4094),
      Ub = hb(36426),
      Lb = hb(4626);
    const Yb = function(bb) {
      const ub = new Set;
      return hb => {
        var Bb;
        const Gb = null === (Bb = [...Ob.e].find((bb => {
          let [, ub] = bb;
          return ub.includes(hb)
        }))) || void 0 === Bb ? void 0 : Bb[0];
        if (void 0 === Gb || ub.has(Gb)) return;
        ub.add(Gb);
        ! function(bb, ub) {
          let {
            afterJoin: hb,
            joining: Bb,
            idle: Ob,
            fetchFile: Gb
          } = ub;
          const Ub = ub => {
            ub >= bb.length || hb((() => {
              Ob((() => {
                Bb() ? Ub(ub) : Gb(bb[ub]).catch((() => {})).finally((() => {
                  Ub(ub + 1)
                }))
              }))
            }))
          };
          Ub(0)
        }(Ob.e.get(Gb).filter((bb => bb !== hb)).flatMap((ub => {
          const hb = (Bb = (0, Ob.k)(ub).src, Gb = bb.canPlay, Bb.find((bb => {
            var ub;
            const hb = null === (ub = /\.([^.]+)$/.exec(bb.split("?", 1)[0])) || void 0 === ub ? void 0 : ub[1];
            return void 0 !== hb && Gb(hb.toLowerCase())
          })));
          var Bb, Gb;
          return void 0 === hb ? [] : [hb]
        })), bb)
      }
    }({
      afterJoin: bb => {
        (0, Gb.b)(Bb.d.get("gameState"), bb)
      },
      joining: () => (0, Gb.c)(Bb.d.get("gameState")),
      idle: hb(248).e,
      fetchFile: Ub.c,
      canPlay: bb => !!Lb.Howler.codecs(bb)
    })
  },
  36426: (bb, ub, hb) => {
    async function Bb(bb) {
      const ub = await fetch(bb, {
        priority: "low"
      });
      if (!ub.ok) throw new Error(`Fetching ${bb} failed: HTTP ${ub.status}`);
      const hb = ub.body.getReader();
      for (; !(await hb.read()).done;);
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  36396: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    const Bb = ["end", "stop", "playerror"];

    function Ob(bb, ub) {
      const hb = () => {
        if (function(bb) {
            return "loaded" === bb.state() && !bb.playing() && !bb._playLock
          }(bb)) {
          for (const ub of Bb) bb.off(ub, hb);
          bb.unload(), ub()
        }
      };
      for (const Ob of Bb) bb.on(Ob, hb);
      hb()
    }
  },
  4626: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Howl: () => Ob.Howl,
      Howler: () => Ob.Howler,
      musicOutput: () => Xb,
      readyAudioContext: () => pb
    });
    var Bb, Ob = hb(4629),
      Gb = hb(4415);
    const Ub = Ob.Howler;

    function Lb() {
      var bb, ub;
      if (Ub.ctx || !Ub.usingWebAudio || "undefined" === typeof AudioContext || !(0, Gb.d)()) return;
      const hb = navigator.audioSession;
      let Bb;
      "auto" === (null === hb || void 0 === hb ? void 0 : hb.type) && (hb.type = "ambient");
      try {
        Bb = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Ob = Bb.createGain();
      Ob.gain.setValueAtTime(Ub._muted ? 0 : null !== (bb = Ub._volume) && void 0 !== bb ? bb : 1, Bb.currentTime), Ob.connect(Bb.destination), Ub.ctx = Bb, Ub.masterGain = Ob, null === (ub = Ub._setup) || void 0 === ub || ub.call(Ub)
    }
    Ub._mobileUnloaded = !0;
    const Yb = Ub.volume.bind(Ob.Howler);
    Ub.volume = function() {
      return Lb(), Yb(...arguments)
    };
    const Sb = Ub.mute.bind(Ob.Howler);
    Ub.mute = bb => (Lb(), Sb(bb));
    const ab = Ob.Howl.prototype,
      Hb = ab.init;
    ab.init = function(bb) {
      return Lb(), Hb.call(this, bb)
    };
    let wb = 0;
    const Zb = null === (Bb = Ub._autoSuspend) || void 0 === Bb ? void 0 : Bb.bind(Ob.Howler);

    function Xb() {
      pb();
      const {
        ctx: bb,
        masterGain: ub
      } = Ub;
      return bb && ub ? {
        ctx: bb,
        destination: ub,
        holdAwake: bb => {
          var ub, hb;
          (wb += bb ? 1 : -1, bb) ? null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub): null === (hb = Ub._autoSuspend) || void 0 === hb || hb.call(Ub)
        },
        wake: () => {
          var ub;
          "running" !== bb.state && (null === (ub = Ub._autoResume) || void 0 === ub || ub.call(Ub), bb.resume().catch((() => {})))
        }
      } : null
    }

    function pb() {
      var bb;
      (Ub.volume(), Ub.ctx && Ub.autoUnlock) && (null === (bb = Ub._unlockAudio) || void 0 === bb || bb.call(Ub))
    }
    Zb && (Ub._autoSuspend = () => wb > 0 ? Ob.Howler : Zb())
  },
  36418: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    const Bb = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36411: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      f: () => Ob,
      h: () => Bb
    });

    function Bb(bb) {
      return bb.replace(/[_\-\s]*\d+$/, "") || bb
    }

    function Ob(bb, ub, hb) {
      return hb <= 0 ? 0 : bb * hb / Math.max(ub, hb)
    }

    function Gb(bb, ub) {
      const hb = bb.getDurationMs();
      return hb > 0 ? bb.loudness * Math.max(0, 1 - (ub - bb.startMs) / hb) : 0
    }
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = bb, this.maxPerGroup = ub, this.voices = []
      }
      admit(bb) {
        if (this.voices = this.voices.filter((bb => bb.isAlive())), null !== bb.group) {
          const ub = this.voices.filter((ub => ub.group === bb.group));
          if (ub.length >= this.maxPerGroup && !this.dropLeastWorth(ub, bb)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, bb)) && (this.voices.push(bb), !0)
      }
      dropLeastWorth(bb, ub) {
        let hb = null,
          Bb = 1 / 0;
        for (const Ob of bb) {
          if (!Ob.canStop()) continue;
          const bb = Gb(Ob, ub.startMs);
          bb < Bb && (hb = Ob, Bb = bb)
        }
        return !(!hb || ub.loudness < Bb) && (this.voices.splice(this.voices.indexOf(hb), 1), hb.stop(), !0)
      }
    }
  },
  36437: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      d: () => Ub,
      e: () => Bb
    });
    class Bb {
      constructor(bb) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setMultiplierType(bb, ub) {
        var hb;
        this.multipliers[bb] = ub, null === (hb = this._onUpdate) || void 0 === hb || hb.call(this)
      }
      removeMultiplier(bb) {
        var ub;
        delete this.multipliers[bb], null === (ub = this._onUpdate) || void 0 === ub || ub.call(this)
      }
      getMultiplierType(bb) {
        return this.multipliers[bb]
      }
      getTotalMultipliedVal() {
        let bb = 1;
        for (const ub in this.multipliers) bb *= this.multipliers[ub];
        return bb
      }
    }
    class Ob {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = bb
      }
      setBooleanType(bb, ub) {
        const hb = this._getTotalBooleanVal();
        this.booleans[bb] = !!ub;
        const Bb = this.getTotalBooleanVal();
        var Ob;
        Bb !== hb && (null === (Ob = this._onUpdate) || void 0 === Ob || Ob.call(this, Bb, this.booleans));
        return Bb
      }
      removeBoolean(bb) {
        const ub = this._getTotalBooleanVal();
        delete this.booleans[bb];
        const hb = this._getTotalBooleanVal();
        var Bb;
        null !== hb && hb !== ub && (null === (Bb = this._onUpdate) || void 0 === Bb || Bb.call(this, hb, this.booleans));
        return null !== hb && void 0 !== hb && hb
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
    class Gb extends Ob {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          ub = !0;
        for (const hb in this.booleans) bb = !0, ub &&= this.booleans[hb];
        return bb ? ub : null
      }
    }
    class Ub extends Ob {
      getTotalBooleanVal() {
        const bb = this._getTotalBooleanVal();
        if (null === bb) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return bb
      }
      _getTotalBooleanVal() {
        let bb = !1,
          ub = !1;
        for (const hb in this.booleans) bb = !0, ub ||= this.booleans[hb];
        return bb ? ub : null
      }
    }
  },
  36430: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      c: () => Bb,
      d: () => Ob
    });
    const Bb = 15,
      Ob = 3,
      Gb = 30
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);