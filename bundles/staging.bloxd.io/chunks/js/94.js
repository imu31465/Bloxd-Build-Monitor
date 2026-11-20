export const id = 94;
export const ids = [92, 93, 94];
export const modules = {
  36674: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq, Yq) {
      return !(gq && !qq.aimable) && (!Eq || qq.gun && "head" !== Yq)
    }

    function lq(qq) {
      return Math.max(.1 * qq, 1)
    }

    function Oq(qq, Eq) {
      return !qq && Eq
    }
    gq.d(Eq, {
      b: () => Oq,
      f: () => lq,
      j: () => Yq
    })
  },
  36681: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      h: () => mq
    });
    let Yq = null;
    const lq = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Oq = {
        crosshairAccuracy: qq => {
          const Eq = lq.crosshairAccuracy.at(-1);
          Eq ? Eq.hook(qq) : Yq = qq
        },
        turnDamageIndicators: qq => {
          var Eq;
          null === (Eq = lq.turnDamageIndicators.at(-1)) || void 0 === Eq || Eq.hook(qq)
        }
      };

    function mq(qq, Eq) {
      const gq = {
          hook: Eq
        },
        mq = lq[qq];
      if (mq.push(gq), "crosshairAccuracy" === qq && null !== Yq) {
        const qq = Yq;
        Yq = null, Oq.crosshairAccuracy(qq)
      }
      return () => {
        const qq = mq.indexOf(gq); - 1 !== qq && mq.splice(qq, 1)
      }
    }

    function xq() {
      return Oq
    }
  },
  36493: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      countDecodesAs: () => Bq,
      decodedAudio: () => Wq
    });
    var Yq = gq(36496),
      lq = gq(4684);
    const Oq = lq.Howler,
      mq = new Map;
    let xq = 0;
    const Aq = {
        song: 0,
        sheet: 0
      },
      cq = new WeakMap,
      uq = new WeakSet;

    function Bq(qq, Eq) {
      return cq.set(qq, Eq), qq
    }

    function Wq() {
      return {
        bytes: xq,
        songsDecoded: Aq.song,
        sheetsDecoded: Aq.sheet
      }
    }

    function Nq(qq) {
      if (uq.has(qq)) return;
      uq.add(qq);
      const Eq = 1 === qq.decodeAudioData.length,
        gq = qq.decodeAudioData.bind(qq);
      qq.decodeAudioData = (qq, Yq, lq) => {
        const uq = qq => {
          const Eq = Oq._howls.filter((qq => "loaded" !== qq._state));
          try {
            null === Yq || void 0 === Yq || Yq(qq)
          } finally {
            const gq = Eq.find((qq => "loaded" === qq._state));
            void 0 !== gq && "string" === typeof gq._src && function(qq, Eq, gq) {
              var Yq;
              xq += gq - (null !== (Yq = mq.get(Eq)) && void 0 !== Yq ? Yq : 0), mq.set(Eq, gq);
              const lq = cq.get(qq);
              void 0 !== lq && Aq[lq]++
            }(gq, gq._src, qq.length * qq.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return qq
        };
        if (!Eq) return gq(qq, uq, lq);
        const Bq = gq(qq).then(uq);
        return Bq.catch((qq => {
          null === lq || void 0 === lq || lq(qq)
        })), Bq
      }
    }(0, Yq.d)(Wq);
    const aq = lq.Howl.prototype,
      Vq = aq.init;
    aq.init = function(qq) {
      return lq.Howler.volume(), Oq.ctx && Nq(Oq.ctx), Vq.call(this, qq)
    };
    const dq = aq.unload;
    aq.unload = function() {
      const qq = this._src,
        Eq = dq.call(this);
      if ("string" !== typeof qq) return Eq;
      const gq = mq.get(qq);
      return void 0 !== gq && function(qq) {
        return !Oq._howls.some((Eq => Eq._src === qq || "string" === typeof Eq._src && qq.indexOf(Eq._src) >= 0))
      }(qq) && (mq.delete(qq), xq -= gq), Eq
    }
  },
  36496: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => lq
    });
    let Yq = null;

    function lq(qq) {
      Yq = qq
    }

    function Oq() {
      return null === Yq ? null : Yq()
    }
  },
  36821: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq
    });
    var Yq = gq(24),
      lq = gq(36796),
      Oq = gq(4173),
      mq = gq(36828),
      xq = gq(4684);
    const Aq = function(qq) {
      const Eq = new Set;
      return gq => {
        var Yq;
        const Oq = null === (Yq = [...lq.b].find((qq => {
          let [, Eq] = qq;
          return Eq.includes(gq)
        }))) || void 0 === Yq ? void 0 : Yq[0];
        if (void 0 === Oq || Eq.has(Oq)) return;
        Eq.add(Oq);
        ! function(qq, Eq) {
          let {
            afterJoin: gq,
            joining: Yq,
            idle: lq,
            fetchFile: Oq
          } = Eq;
          const mq = Eq => {
            Eq >= qq.length || gq((() => {
              lq((() => {
                Yq() ? mq(Eq) : Oq(qq[Eq]).catch((() => {})).finally((() => {
                  mq(Eq + 1)
                }))
              }))
            }))
          };
          mq(0)
        }(lq.b.get(Oq).filter((qq => qq !== gq)).flatMap((Eq => {
          const gq = (Yq = (0, lq.g)(Eq).src, Oq = qq.canPlay, Yq.find((qq => {
            var Eq;
            const gq = null === (Eq = /\.([^.]+)$/.exec(qq.split("?", 1)[0])) || void 0 === Eq ? void 0 : Eq[1];
            return void 0 !== gq && Oq(gq.toLowerCase())
          })));
          var Yq, Oq;
          return void 0 === gq ? [] : [gq]
        })), qq)
      }
    }({
      afterJoin: qq => {
        (0, Oq.d)(Yq.b.get("gameState"), qq)
      },
      joining: () => (0, Oq.f)(Yq.b.get("gameState")),
      idle: gq(248).e,
      fetchFile: mq.c,
      canPlay: qq => !!xq.Howler.codecs(qq)
    })
  },
  36828: (qq, Eq, gq) => {
    async function Yq(qq) {
      const Eq = await fetch(qq, {
        priority: "low"
      });
      if (!Eq.ok) throw new Error(`Fetching ${qq} failed: HTTP ${Eq.status}`);
      const gq = Eq.body.getReader();
      for (; !(await gq.read()).done;);
    }
    gq.d(Eq, {
      c: () => Yq
    })
  },
  36802: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    const Yq = ["end", "stop", "playerror"];

    function lq(qq, Eq) {
      const gq = () => {
        if (function(qq) {
            return "loaded" === qq.state() && !qq.playing() && !qq._playLock
          }(qq)) {
          for (const Eq of Yq) qq.off(Eq, gq);
          qq.unload(), Eq()
        }
      };
      for (const lq of Yq) qq.on(lq, gq);
      gq()
    }
  },
  4684: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Howl: () => lq.Howl,
      Howler: () => lq.Howler,
      musicOutput: () => aq,
      readyAudioContext: () => Vq
    });
    var Yq, lq = gq(4692),
      Oq = gq(4477);
    const mq = lq.Howler;

    function xq() {
      var qq, Eq;
      if (mq.ctx || !mq.usingWebAudio || "undefined" === typeof AudioContext || !(0, Oq.f)()) return;
      const gq = navigator.audioSession;
      let Yq;
      "auto" === (null === gq || void 0 === gq ? void 0 : gq.type) && (gq.type = "ambient");
      try {
        Yq = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const lq = Yq.createGain();
      lq.gain.setValueAtTime(mq._muted ? 0 : null !== (qq = mq._volume) && void 0 !== qq ? qq : 1, Yq.currentTime), lq.connect(Yq.destination), mq.ctx = Yq, mq.masterGain = lq, null === (Eq = mq._setup) || void 0 === Eq || Eq.call(mq)
    }
    mq._mobileUnloaded = !0;
    const Aq = mq.volume.bind(lq.Howler);
    mq.volume = function() {
      return xq(), Aq(...arguments)
    };
    const cq = mq.mute.bind(lq.Howler);
    mq.mute = qq => (xq(), cq(qq));
    const uq = lq.Howl.prototype,
      Bq = uq.init;
    uq.init = function(qq) {
      return xq(), Bq.call(this, qq)
    };
    let Wq = 0;
    const Nq = null === (Yq = mq._autoSuspend) || void 0 === Yq ? void 0 : Yq.bind(lq.Howler);

    function aq() {
      Vq();
      const {
        ctx: qq,
        masterGain: Eq
      } = mq;
      return qq && Eq ? {
        ctx: qq,
        destination: Eq,
        holdAwake: qq => {
          var Eq, gq;
          (Wq += qq ? 1 : -1, qq) ? null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq): null === (gq = mq._autoSuspend) || void 0 === gq || gq.call(mq)
        },
        wake: () => {
          var Eq;
          "running" !== qq.state && (null === (Eq = mq._autoResume) || void 0 === Eq || Eq.call(mq), qq.resume().catch((() => {})))
        }
      } : null
    }

    function Vq() {
      var qq;
      (mq.volume(), mq.ctx && mq.autoUnlock) && (null === (qq = mq._unlockAudio) || void 0 === qq || qq.call(mq))
    }
    Nq && (mq._autoSuspend = () => Wq > 0 ? lq.Howler : Nq())
  },
  36815: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    const Yq = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36813: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      f: () => lq,
      g: () => Yq
    });

    function Yq(qq) {
      return qq.replace(/[_\-\s]*\d+$/, "") || qq
    }

    function lq(qq, Eq, gq) {
      return gq <= 0 ? 0 : qq * gq / Math.max(Eq, gq)
    }

    function Oq(qq, Eq) {
      const gq = qq.getDurationMs();
      return gq > 0 ? qq.loudness * Math.max(0, 1 - (Eq - qq.startMs) / gq) : 0
    }
    class mq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = qq, this.maxPerGroup = Eq, this.voices = []
      }
      admit(qq) {
        if (this.voices = this.voices.filter((qq => qq.isAlive())), null !== qq.group) {
          const Eq = this.voices.filter((Eq => Eq.group === qq.group));
          if (Eq.length >= this.maxPerGroup && !this.dropLeastWorth(Eq, qq)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, qq)) && (this.voices.push(qq), !0)
      }
      dropLeastWorth(qq, Eq) {
        let gq = null,
          Yq = 1 / 0;
        for (const lq of qq) {
          if (!lq.canStop()) continue;
          const qq = Oq(lq, Eq.startMs);
          qq < Yq && (gq = lq, Yq = qq)
        }
        return !(!gq || Eq.loudness < Yq) && (this.voices.splice(this.voices.indexOf(gq), 1), gq.stop(), !0)
      }
    }
  },
  36841: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      f: () => mq,
      g: () => Yq
    });
    class Yq {
      constructor(qq) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = qq
      }
      setMultiplierType(qq, Eq) {
        var gq;
        this.multipliers[qq] = Eq, null === (gq = this._onUpdate) || void 0 === gq || gq.call(this)
      }
      removeMultiplier(qq) {
        var Eq;
        delete this.multipliers[qq], null === (Eq = this._onUpdate) || void 0 === Eq || Eq.call(this)
      }
      getMultiplierType(qq) {
        return this.multipliers[qq]
      }
      getTotalMultipliedVal() {
        let qq = 1;
        for (const Eq in this.multipliers) qq *= this.multipliers[Eq];
        return qq
      }
    }
    class lq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = qq
      }
      setBooleanType(qq, Eq) {
        const gq = this._getTotalBooleanVal();
        this.booleans[qq] = !!Eq;
        const Yq = this.getTotalBooleanVal();
        var lq;
        Yq !== gq && (null === (lq = this._onUpdate) || void 0 === lq || lq.call(this, Yq, this.booleans));
        return Yq
      }
      removeBoolean(qq) {
        const Eq = this._getTotalBooleanVal();
        delete this.booleans[qq];
        const gq = this._getTotalBooleanVal();
        var Yq;
        null !== gq && gq !== Eq && (null === (Yq = this._onUpdate) || void 0 === Yq || Yq.call(this, gq, this.booleans));
        return null !== gq && void 0 !== gq && gq
      }
      getBooleanType(qq) {
        return this.booleans[qq]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var qq;
        null === (qq = this._onUpdate) || void 0 === qq || qq.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Oq extends lq {
      getTotalBooleanVal() {
        const qq = this._getTotalBooleanVal();
        if (null === qq) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return qq
      }
      _getTotalBooleanVal() {
        let qq = !1,
          Eq = !0;
        for (const gq in this.booleans) qq = !0, Eq &&= this.booleans[gq];
        return qq ? Eq : null
      }
    }
    class mq extends lq {
      getTotalBooleanVal() {
        const qq = this._getTotalBooleanVal();
        if (null === qq) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return qq
      }
      _getTotalBooleanVal() {
        let qq = !1,
          Eq = !1;
        for (const gq in this.booleans) qq = !0, Eq ||= this.booleans[gq];
        return qq ? Eq : null
      }
    }
  },
  36832: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq,
      c: () => Yq,
      f: () => lq
    });
    const Yq = 15,
      lq = 3,
      Oq = 30
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);