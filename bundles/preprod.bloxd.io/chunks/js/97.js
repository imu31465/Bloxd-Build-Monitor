export const id = 97;
export const ids = [95, 96, 97];
export const modules = {
  36819: (pp, ip, cp) => {
    function Op(pp, ip, cp, Op) {
      return !(cp && !pp.aimable) && (!ip || pp.gun && "head" !== Op)
    }

    function op(pp) {
      return Math.max(.1 * pp, 1)
    }

    function Ip(pp, ip) {
      return !pp && ip
    }
    cp.d(ip, {
      d: () => Ip,
      e: () => op,
      h: () => Op
    })
  },
  36828: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      i: () => Sp
    });
    let Op = null;
    const op = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Ip = {
        crosshairAccuracy: pp => {
          const ip = op.crosshairAccuracy.at(-1);
          ip ? ip.hook(pp) : Op = pp
        },
        turnDamageIndicators: pp => {
          var ip;
          null === (ip = op.turnDamageIndicators.at(-1)) || void 0 === ip || ip.hook(pp)
        }
      };

    function Sp(pp, ip) {
      const cp = {
          hook: ip
        },
        Sp = op[pp];
      if (Sp.push(cp), "crosshairAccuracy" === pp && null !== Op) {
        const pp = Op;
        Op = null, Ip.crosshairAccuracy(pp)
      }
      return () => {
        const pp = Sp.indexOf(cp); - 1 !== pp && Sp.splice(pp, 1)
      }
    }

    function xp() {
      return Ip
    }
  },
  36654: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      countDecodesAs: () => Ap,
      decodedAudio: () => Pp
    });
    var Op = cp(3363),
      op = cp(4974);
    const Ip = op.Howler,
      Sp = new Map;
    let xp = 0;
    const Lp = {
        song: 0,
        sheet: 0
      },
      Yp = new WeakMap,
      Dp = new WeakSet;

    function Ap(pp, ip) {
      return Yp.set(pp, ip), pp
    }

    function Pp() {
      return {
        bytes: xp,
        songsDecoded: Lp.song,
        sheetsDecoded: Lp.sheet
      }
    }

    function Wp(pp) {
      if (Dp.has(pp)) return;
      Dp.add(pp);
      const ip = 1 === pp.decodeAudioData.length,
        cp = pp.decodeAudioData.bind(pp);
      pp.decodeAudioData = (pp, Op, op) => {
        const Dp = pp => {
          const ip = Ip._howls.filter((pp => "loaded" !== pp._state));
          try {
            null === Op || void 0 === Op || Op(pp)
          } finally {
            const cp = ip.find((pp => "loaded" === pp._state));
            void 0 !== cp && "string" === typeof cp._src && function(pp, ip, cp) {
              var Op;
              xp += cp - (null !== (Op = Sp.get(ip)) && void 0 !== Op ? Op : 0), Sp.set(ip, cp);
              const op = Yp.get(pp);
              void 0 !== op && Lp[op]++
            }(cp, cp._src, pp.length * pp.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return pp
        };
        if (!ip) return cp(pp, Dp, op);
        const Ap = cp(pp).then(Dp);
        return Ap.catch((pp => {
          null === op || void 0 === op || op(pp)
        })), Ap
      }
    }(0, Op.h)(Pp);
    const yp = op.Howl.prototype,
      Up = yp.init;
    yp.init = function(pp) {
      return op.Howler.volume(), Ip.ctx && Wp(Ip.ctx), Up.call(this, pp)
    };
    const wp = yp.unload;
    yp.unload = function() {
      const pp = this._src,
        ip = wp.call(this);
      if ("string" !== typeof pp) return ip;
      const cp = Sp.get(pp);
      return void 0 !== cp && function(pp) {
        return !Ip._howls.some((ip => ip._src === pp || "string" === typeof ip._src && pp.indexOf(ip._src) >= 0))
      }(pp) && (Sp.delete(pp), xp -= cp), ip
    }
  },
  36980: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Lp
    });
    var Op = cp(25),
      op = cp(36948),
      Ip = cp(4437),
      Sp = cp(36986),
      xp = cp(4974);
    const Lp = function(pp) {
      const ip = new Set;
      return cp => {
        var Op;
        const Ip = null === (Op = [...op.b].find((pp => {
          let [, ip] = pp;
          return ip.includes(cp)
        }))) || void 0 === Op ? void 0 : Op[0];
        if (void 0 === Ip || ip.has(Ip)) return;
        ip.add(Ip);
        ! function(pp, ip) {
          let {
            afterJoin: cp,
            joining: Op,
            idle: op,
            fetchFile: Ip
          } = ip;
          const Sp = ip => {
            ip >= pp.length || cp((() => {
              op((() => {
                Op() ? Sp(ip) : Ip(pp[ip]).catch((() => {})).finally((() => {
                  Sp(ip + 1)
                }))
              }))
            }))
          };
          Sp(0)
        }(op.b.get(Ip).filter((pp => pp !== cp)).flatMap((ip => {
          const cp = (Op = (0, op.e)(ip).src, Ip = pp.canPlay, Op.find((pp => {
            var ip;
            const cp = null === (ip = /\.([^.]+)$/.exec(pp.split("?", 1)[0])) || void 0 === ip ? void 0 : ip[1];
            return void 0 !== cp && Ip(cp.toLowerCase())
          })));
          var Op, Ip;
          return void 0 === cp ? [] : [cp]
        })), pp)
      }
    }({
      afterJoin: pp => {
        (0, Ip.b)(Op.c.get("gameState"), pp)
      },
      joining: () => (0, Ip.f)(Op.c.get("gameState")),
      idle: cp(249).b,
      fetchFile: Sp.c,
      canPlay: pp => !!xp.Howler.codecs(pp)
    })
  },
  36986: (pp, ip, cp) => {
    async function Op(pp) {
      const ip = await fetch(pp, {
        priority: "low"
      });
      if (!ip.ok) throw new Error(`Fetching ${pp} failed: HTTP ${ip.status}`);
      const cp = ip.body.getReader();
      for (; !(await cp.read()).done;);
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  36950: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op
    });
    const Op = ["end", "stop", "playerror"];

    function op(pp, ip) {
      const cp = () => {
        if (function(pp) {
            return "loaded" === pp.state() && !pp.playing() && !pp._playLock
          }(pp)) {
          for (const ip of Op) pp.off(ip, cp);
          pp.unload(), ip()
        }
      };
      for (const op of Op) pp.on(op, cp);
      cp()
    }
  },
  4974: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Howl: () => op.Howl,
      Howler: () => op.Howler,
      musicOutput: () => wp,
      readyAudioContext: () => vp
    });
    var Op, op = cp(4977),
      Ip = cp(3546),
      Sp = cp(4743);
    const xp = op.Howler;

    function Lp() {
      var pp, ip;
      if (xp.ctx || !xp.usingWebAudio || "undefined" === typeof AudioContext || !(0, Sp.f)()) return;
      const cp = navigator.audioSession;
      let Op;
      "auto" === (null === cp || void 0 === cp ? void 0 : cp.type) && (cp.type = "ambient");
      try {
        Op = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const op = Op.createGain();
      op.gain.setValueAtTime(xp._muted ? 0 : null !== (pp = xp._volume) && void 0 !== pp ? pp : 1, Op.currentTime), op.connect(Op.destination), xp.ctx = Op, xp.masterGain = op, null === (ip = xp._setup) || void 0 === ip || ip.call(xp)
    }
    xp._mobileUnloaded = !0;
    const Yp = xp.volume.bind(op.Howler);
    xp.volume = function() {
      return Lp(), Yp(...arguments)
    };
    const Dp = xp.mute.bind(op.Howler);
    xp.mute = pp => (Lp(), Dp(pp));
    const Ap = op.Howl.prototype,
      Pp = Ap.init;

    function Wp() {
      for (; xp._html5AudioPool.length < xp.html5PoolSize;) {
        const pp = new Audio;
        pp._unlocked = !0, xp._releaseHtml5Audio(pp)
      }
      for (const ip of xp._howls)
        if (!ip._webAudio)
          for (const cp of ip._getSoundIds()) {
            var pp;
            const Op = null === (pp = ip._soundById(cp)) || void 0 === pp ? void 0 : pp._node;
            Op && !Op._unlocked && (Op._unlocked = !0, Op.load())
          }
    }
    Ap.init = function(pp) {
      return Lp(), Pp.call(this, pp)
    }, (0, Sp.f)() && (xp._unlockAudio = () => {
      const pp = xp.ctx;
      if (xp._audioUnlocked || !pp) return;
      xp.autoUnlock = !1;
      const ip = pp.createBuffer(1, 1, 22050);
      xp._scratchBuffer = ip;
      const cp = new AbortController;
      let Op = "afterPaint";
      const op = () => {
          var Op;
          if (xp._audioUnlocked) return;
          null === (Op = xp._autoResume) || void 0 === Op || Op.call(xp);
          const op = pp.createBufferSource();
          op.buffer = ip, op.connect(pp.destination), op.start(0), pp.resume().catch((() => {})), op.onended = () => {
            op.disconnect(0), xp._audioUnlocked = !0, cp.abort();
            for (const pp of xp._howls) pp._emit("unlock")
          }
        },
        Lp = () => {
          Wp(), op()
        },
        Yp = ip => {
          if (Wp(), "inTap" === Op) {
            if ("running" === pp.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), op()
          } else "afterPaint" === Op && (Op = "queued", (0, Ip.e)(ip.timeStamp, (() => {
            Op = "inTap", op()
          })))
        };
      for (const Ip of ["touchstart", "touchend"]) document.addEventListener(Ip, Lp, {
        capture: !0,
        signal: cp.signal
      });
      for (const Ip of Sp.c) document.addEventListener(Ip, Yp, {
        capture: !0,
        signal: cp.signal
      })
    });
    let yp = 0;
    const Up = null === (Op = xp._autoSuspend) || void 0 === Op ? void 0 : Op.bind(op.Howler);

    function wp() {
      vp();
      const {
        ctx: pp,
        masterGain: ip
      } = xp;
      return pp && ip ? {
        ctx: pp,
        destination: ip,
        holdAwake: pp => {
          var ip, cp;
          (yp += pp ? 1 : -1, pp) ? null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp): null === (cp = xp._autoSuspend) || void 0 === cp || cp.call(xp)
        },
        wake: () => {
          var ip;
          "running" !== pp.state && (null === (ip = xp._autoResume) || void 0 === ip || ip.call(xp), pp.resume().catch((() => {})))
        }
      } : null
    }

    function vp() {
      var pp;
      (xp.volume(), xp.ctx && xp.autoUnlock) && (null === (pp = xp._unlockAudio) || void 0 === pp || pp.call(xp))
    }
    Up && (xp._autoSuspend = () => yp > 0 ? op.Howler : Up())
  },
  36974: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    const Op = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36965: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      c: () => op,
      f: () => Op
    });

    function Op(pp) {
      return pp.replace(/[_\-\s]*\d+$/, "") || pp
    }

    function op(pp, ip, cp) {
      return cp <= 0 ? 0 : pp * cp / Math.max(ip, cp)
    }

    function Ip(pp, ip) {
      const cp = pp.getDurationMs();
      return cp > 0 ? pp.loudness * Math.max(0, 1 - (ip - pp.startMs) / cp) : 0
    }
    class Sp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = pp, this.maxPerGroup = ip, this.voices = []
      }
      admit(pp) {
        if (this.voices = this.voices.filter((pp => pp.isAlive())), null !== pp.group) {
          const ip = this.voices.filter((ip => ip.group === pp.group));
          if (ip.length >= this.maxPerGroup && !this.dropLeastWorth(ip, pp)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, pp)) && (this.voices.push(pp), !0)
      }
      dropLeastWorth(pp, ip) {
        let cp = null,
          Op = 1 / 0;
        for (const op of pp) {
          if (!op.canStop()) continue;
          const pp = Ip(op, ip.startMs);
          pp < Op && (cp = op, Op = pp)
        }
        return !(!cp || ip.loudness < Op) && (this.voices.splice(this.voices.indexOf(cp), 1), cp.stop(), !0)
      }
    }
  },
  36783: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      d: () => Sp,
      h: () => xp
    });
    var Op = cp(34);
    const op = "touchSprintChanged";
    let Ip = !0;

    function Sp() {
      return Ip
    }

    function xp(pp) {
      pp !== Ip && (Ip = pp, Op.m.GA(op, pp))
    }
  },
  37001: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      c: () => Sp,
      g: () => Op
    });
    class Op {
      constructor(pp) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = pp
      }
      setMultiplierType(pp, ip) {
        var cp;
        this.multipliers[pp] = ip, null === (cp = this._onUpdate) || void 0 === cp || cp.call(this)
      }
      removeMultiplier(pp) {
        var ip;
        delete this.multipliers[pp], null === (ip = this._onUpdate) || void 0 === ip || ip.call(this)
      }
      getMultiplierType(pp) {
        return this.multipliers[pp]
      }
      getTotalMultipliedVal() {
        let pp = 1;
        for (const ip in this.multipliers) pp *= this.multipliers[ip];
        return pp
      }
    }
    class op {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = pp
      }
      setBooleanType(pp, ip) {
        const cp = this._getTotalBooleanVal();
        this.booleans[pp] = !!ip;
        const Op = this.getTotalBooleanVal();
        var op;
        Op !== cp && (null === (op = this._onUpdate) || void 0 === op || op.call(this, Op, this.booleans));
        return Op
      }
      removeBoolean(pp) {
        const ip = this._getTotalBooleanVal();
        delete this.booleans[pp];
        const cp = this._getTotalBooleanVal();
        var Op;
        null !== cp && cp !== ip && (null === (Op = this._onUpdate) || void 0 === Op || Op.call(this, cp, this.booleans));
        return null !== cp && void 0 !== cp && cp
      }
      getBooleanType(pp) {
        return this.booleans[pp]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var pp;
        null === (pp = this._onUpdate) || void 0 === pp || pp.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Ip extends op {
      getTotalBooleanVal() {
        const pp = this._getTotalBooleanVal();
        if (null === pp) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return pp
      }
      _getTotalBooleanVal() {
        let pp = !1,
          ip = !0;
        for (const cp in this.booleans) pp = !0, ip &&= this.booleans[cp];
        return pp ? ip : null
      }
    }
    class Sp extends op {
      getTotalBooleanVal() {
        const pp = this._getTotalBooleanVal();
        if (null === pp) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return pp
      }
      _getTotalBooleanVal() {
        let pp = !1,
          ip = !1;
        for (const cp in this.booleans) pp = !0, ip ||= this.booleans[cp];
        return pp ? ip : null
      }
    }
  },
  36994: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      g: () => Op,
      k: () => op
    });
    const Op = 15,
      op = 3,
      Ip = 30
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);