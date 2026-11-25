export const id = 100;
export const ids = [98, 99, 100];
export const modules = {
  36920: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ, wQ) {
      return !(XQ && !QQ.aimable) && (!WQ || QQ.gun && "head" !== wQ)
    }

    function qQ(QQ) {
      return Math.max(.1 * QQ, 1)
    }

    function TQ(QQ, WQ) {
      return !QQ && WQ
    }
    XQ.d(WQ, {
      e: () => TQ,
      i: () => qQ,
      l: () => wQ
    })
  },
  36926: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      f: () => zQ
    });
    let wQ = null;
    const qQ = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      TQ = {
        crosshairAccuracy: QQ => {
          const WQ = qQ.crosshairAccuracy.at(-1);
          WQ ? WQ.hook(QQ) : wQ = QQ
        },
        turnDamageIndicators: QQ => {
          var WQ;
          null === (WQ = qQ.turnDamageIndicators.at(-1)) || void 0 === WQ || WQ.hook(QQ)
        }
      };

    function zQ(QQ, WQ) {
      const XQ = {
          hook: WQ
        },
        zQ = qQ[QQ];
      if (zQ.push(XQ), "crosshairAccuracy" === QQ && null !== wQ) {
        const QQ = wQ;
        wQ = null, TQ.crosshairAccuracy(QQ)
      }
      return () => {
        const QQ = zQ.indexOf(XQ); - 1 !== QQ && zQ.splice(QQ, 1)
      }
    }

    function sQ() {
      return TQ
    }
  },
  36750: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      countDecodesAs: () => JQ,
      decodedAudio: () => rQ
    });
    var wQ = XQ(3196),
      qQ = XQ(5212);
    const TQ = qQ.Howler,
      zQ = new Map;
    let sQ = 0;
    const FQ = {
        song: 0,
        sheet: 0
      },
      PQ = new WeakMap,
      gQ = new WeakSet;

    function JQ(QQ, WQ) {
      return PQ.set(QQ, WQ), QQ
    }

    function rQ() {
      return {
        bytes: sQ,
        songsDecoded: FQ.song,
        sheetsDecoded: FQ.sheet
      }
    }

    function IQ(QQ) {
      if (gQ.has(QQ)) return;
      gQ.add(QQ);
      const WQ = 1 === QQ.decodeAudioData.length,
        XQ = QQ.decodeAudioData.bind(QQ);
      QQ.decodeAudioData = (QQ, wQ, qQ) => {
        const gQ = QQ => {
          const WQ = TQ._howls.filter((QQ => "loaded" !== QQ._state));
          try {
            null === wQ || void 0 === wQ || wQ(QQ)
          } finally {
            const XQ = WQ.find((QQ => "loaded" === QQ._state));
            void 0 !== XQ && "string" === typeof XQ._src && function(QQ, WQ, XQ) {
              var wQ;
              sQ += XQ - (null !== (wQ = zQ.get(WQ)) && void 0 !== wQ ? wQ : 0), zQ.set(WQ, XQ);
              const qQ = PQ.get(QQ);
              void 0 !== qQ && FQ[qQ]++
            }(XQ, XQ._src, QQ.length * QQ.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return QQ
        };
        if (!WQ) return XQ(QQ, gQ, qQ);
        const JQ = XQ(QQ).then(gQ);
        return JQ.catch((QQ => {
          null === qQ || void 0 === qQ || qQ(QQ)
        })), JQ
      }
    }(0, wQ.f)(rQ);
    const jQ = qQ.Howl.prototype,
      BQ = jQ.init;
    jQ.init = function(QQ) {
      return qQ.Howler.volume(), TQ.ctx && IQ(TQ.ctx), BQ.call(this, QQ)
    };
    const yQ = jQ.unload;
    jQ.unload = function() {
      const QQ = this._src,
        WQ = yQ.call(this);
      if ("string" !== typeof QQ) return WQ;
      const XQ = zQ.get(QQ);
      return void 0 !== XQ && function(QQ) {
        return !TQ._howls.some((WQ => WQ._src === QQ || "string" === typeof WQ._src && QQ.indexOf(WQ._src) >= 0))
      }(QQ) && (zQ.delete(QQ), sQ -= XQ), WQ
    }
  },
  37081: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ
    });
    var wQ = XQ(26),
      qQ = XQ(37049),
      TQ = XQ(4646),
      zQ = XQ(37086),
      sQ = XQ(5212);
    const FQ = function(QQ) {
      const WQ = new Set;
      return XQ => {
        var wQ;
        const TQ = null === (wQ = [...qQ.b].find((QQ => {
          let [, WQ] = QQ;
          return WQ.includes(XQ)
        }))) || void 0 === wQ ? void 0 : wQ[0];
        if (void 0 === TQ || WQ.has(TQ)) return;
        WQ.add(TQ);
        ! function(QQ, WQ) {
          let {
            afterJoin: XQ,
            joining: wQ,
            idle: qQ,
            fetchFile: TQ
          } = WQ;
          const zQ = WQ => {
            WQ >= QQ.length || XQ((() => {
              qQ((() => {
                wQ() ? zQ(WQ) : TQ(QQ[WQ]).catch((() => {})).finally((() => {
                  zQ(WQ + 1)
                }))
              }))
            }))
          };
          zQ(0)
        }(qQ.b.get(TQ).filter((QQ => QQ !== XQ)).flatMap((WQ => {
          const XQ = (wQ = (0, qQ.h)(WQ).src, TQ = QQ.canPlay, wQ.find((QQ => {
            var WQ;
            const XQ = null === (WQ = /\.([^.]+)$/.exec(QQ.split("?", 1)[0])) || void 0 === WQ ? void 0 : WQ[1];
            return void 0 !== XQ && TQ(XQ.toLowerCase())
          })));
          var wQ, TQ;
          return void 0 === XQ ? [] : [XQ]
        })), QQ)
      }
    }({
      afterJoin: QQ => {
        (0, TQ.b)(wQ.b.get("gameState"), QQ)
      },
      joining: () => (0, TQ.f)(wQ.b.get("gameState")),
      idle: XQ(291).e,
      fetchFile: zQ.c,
      canPlay: QQ => !!sQ.Howler.codecs(QQ)
    })
  },
  37086: (QQ, WQ, XQ) => {
    async function wQ(QQ) {
      const WQ = await fetch(QQ, {
        priority: "low"
      });
      if (!WQ.ok) throw new Error(`Fetching ${QQ} failed: HTTP ${WQ.status}`);
      const XQ = WQ.body.getReader();
      for (; !(await XQ.read()).done;);
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  37052: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    const wQ = ["end", "stop", "playerror"];

    function qQ(QQ, WQ) {
      const XQ = () => {
        if (function(QQ) {
            return "loaded" === QQ.state() && !QQ.playing() && !QQ._playLock
          }(QQ)) {
          for (const WQ of wQ) QQ.off(WQ, XQ);
          QQ.unload(), WQ()
        }
      };
      for (const qQ of wQ) QQ.on(qQ, XQ);
      XQ()
    }
  },
  5212: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      Howl: () => qQ.Howl,
      Howler: () => qQ.Howler,
      musicOutput: () => yQ,
      readyAudioContext: () => VQ
    });
    var wQ, qQ = XQ(5216),
      TQ = XQ(3699),
      zQ = XQ(4969);
    const sQ = qQ.Howler;

    function FQ() {
      var QQ, WQ;
      if (sQ.ctx || !sQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, zQ.f)()) return;
      const XQ = navigator.audioSession;
      let wQ;
      "auto" === (null === XQ || void 0 === XQ ? void 0 : XQ.type) && (XQ.type = "ambient");
      try {
        wQ = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qQ = wQ.createGain();
      qQ.gain.setValueAtTime(sQ._muted ? 0 : null !== (QQ = sQ._volume) && void 0 !== QQ ? QQ : 1, wQ.currentTime), qQ.connect(wQ.destination), sQ.ctx = wQ, sQ.masterGain = qQ, null === (WQ = sQ._setup) || void 0 === WQ || WQ.call(sQ)
    }
    sQ._mobileUnloaded = !0;
    const PQ = sQ.volume.bind(qQ.Howler);
    sQ.volume = function() {
      return FQ(), PQ(...arguments)
    };
    const gQ = sQ.mute.bind(qQ.Howler);
    sQ.mute = QQ => (FQ(), gQ(QQ));
    const JQ = qQ.Howl.prototype,
      rQ = JQ.init;

    function IQ() {
      for (; sQ._html5AudioPool.length < sQ.html5PoolSize;) {
        const QQ = new Audio;
        QQ._unlocked = !0, sQ._releaseHtml5Audio(QQ)
      }
      for (const WQ of sQ._howls)
        if (!WQ._webAudio)
          for (const XQ of WQ._getSoundIds()) {
            var QQ;
            const wQ = null === (QQ = WQ._soundById(XQ)) || void 0 === QQ ? void 0 : QQ._node;
            wQ && !wQ._unlocked && (wQ._unlocked = !0, wQ.load())
          }
    }
    JQ.init = function(QQ) {
      return FQ(), rQ.call(this, QQ)
    }, (0, zQ.f)() && (sQ._unlockAudio = () => {
      const QQ = sQ.ctx;
      if (sQ._audioUnlocked || !QQ) return;
      sQ.autoUnlock = !1;
      const WQ = QQ.createBuffer(1, 1, 22050);
      sQ._scratchBuffer = WQ;
      const XQ = new AbortController;
      let wQ = "afterPaint";
      const qQ = () => {
          var wQ;
          if (sQ._audioUnlocked) return;
          null === (wQ = sQ._autoResume) || void 0 === wQ || wQ.call(sQ);
          const qQ = QQ.createBufferSource();
          qQ.buffer = WQ, qQ.connect(QQ.destination), qQ.start(0), QQ.resume().catch((() => {})), qQ.onended = () => {
            qQ.disconnect(0), sQ._audioUnlocked = !0, XQ.abort();
            for (const QQ of sQ._howls) QQ._emit("unlock")
          }
        },
        FQ = () => {
          IQ(), qQ()
        },
        PQ = WQ => {
          if (IQ(), "inTap" === wQ) {
            if ("running" === QQ.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), qQ()
          } else "afterPaint" === wQ && (wQ = "queued", (0, TQ.c)(WQ.timeStamp, (() => {
            wQ = "inTap", qQ()
          })))
        };
      for (const TQ of ["touchstart", "touchend"]) document.addEventListener(TQ, FQ, {
        capture: !0,
        signal: XQ.signal
      });
      for (const TQ of zQ.d) document.addEventListener(TQ, PQ, {
        capture: !0,
        signal: XQ.signal
      })
    });
    let jQ = 0;
    const BQ = null === (wQ = sQ._autoSuspend) || void 0 === wQ ? void 0 : wQ.bind(qQ.Howler);

    function yQ() {
      VQ();
      const {
        ctx: QQ,
        masterGain: WQ
      } = sQ;
      return QQ && WQ ? {
        ctx: QQ,
        destination: WQ,
        holdAwake: QQ => {
          var WQ, XQ;
          (jQ += QQ ? 1 : -1, QQ) ? null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ): null === (XQ = sQ._autoSuspend) || void 0 === XQ || XQ.call(sQ)
        },
        wake: () => {
          var WQ;
          "running" !== QQ.state && (null === (WQ = sQ._autoResume) || void 0 === WQ || WQ.call(sQ), QQ.resume().catch((() => {})))
        }
      } : null
    }

    function VQ() {
      var QQ;
      (sQ.volume(), sQ.ctx && sQ.autoUnlock) && (null === (QQ = sQ._unlockAudio) || void 0 === QQ || QQ.call(sQ))
    }
    BQ && (sQ._autoSuspend = () => jQ > 0 ? qQ.Howler : BQ())
  },
  37074: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    const wQ = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37067: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ,
      e: () => qQ,
      f: () => wQ
    });

    function wQ(QQ) {
      return QQ.replace(/[_\-\s]*\d+$/, "") || QQ
    }

    function qQ(QQ, WQ, XQ) {
      return XQ <= 0 ? 0 : QQ * XQ / Math.max(WQ, XQ)
    }

    function TQ(QQ, WQ) {
      const XQ = QQ.getDurationMs();
      return XQ > 0 ? QQ.loudness * Math.max(0, 1 - (WQ - QQ.startMs) / XQ) : 0
    }
    class zQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = QQ, this.maxPerGroup = WQ, this.voices = []
      }
      admit(QQ) {
        if (this.voices = this.voices.filter((QQ => QQ.isAlive())), null !== QQ.group) {
          const WQ = this.voices.filter((WQ => WQ.group === QQ.group));
          if (WQ.length >= this.maxPerGroup && !this.dropLeastWorth(WQ, QQ)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, QQ)) && (this.voices.push(QQ), !0)
      }
      dropLeastWorth(QQ, WQ) {
        let XQ = null,
          wQ = 1 / 0;
        for (const qQ of QQ) {
          if (!qQ.canStop()) continue;
          const QQ = TQ(qQ, WQ.startMs);
          QQ < wQ && (XQ = qQ, wQ = QQ)
        }
        return !(!XQ || WQ.loudness < wQ) && (this.voices.splice(this.voices.indexOf(XQ), 1), XQ.stop(), !0)
      }
    }
  },
  36888: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ,
      f: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(31);
    const qQ = "touchSprintChanged";
    let TQ = !0;

    function zQ() {
      return TQ
    }

    function sQ(QQ) {
      QQ !== TQ && (TQ = QQ, wQ.k.mB(qQ, QQ))
    }
  },
  37098: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      h: () => zQ,
      j: () => wQ
    });
    class wQ {
      constructor(QQ) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = QQ
      }
      setMultiplierType(QQ, WQ) {
        var XQ;
        this.multipliers[QQ] = WQ, null === (XQ = this._onUpdate) || void 0 === XQ || XQ.call(this)
      }
      removeMultiplier(QQ) {
        var WQ;
        delete this.multipliers[QQ], null === (WQ = this._onUpdate) || void 0 === WQ || WQ.call(this)
      }
      getMultiplierType(QQ) {
        return this.multipliers[QQ]
      }
      getTotalMultipliedVal() {
        let QQ = 1;
        for (const WQ in this.multipliers) QQ *= this.multipliers[WQ];
        return QQ
      }
    }
    class qQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = QQ
      }
      setBooleanType(QQ, WQ) {
        const XQ = this._getTotalBooleanVal();
        this.booleans[QQ] = !!WQ;
        const wQ = this.getTotalBooleanVal();
        var qQ;
        wQ !== XQ && (null === (qQ = this._onUpdate) || void 0 === qQ || qQ.call(this, wQ, this.booleans));
        return wQ
      }
      removeBoolean(QQ) {
        const WQ = this._getTotalBooleanVal();
        delete this.booleans[QQ];
        const XQ = this._getTotalBooleanVal();
        var wQ;
        null !== XQ && XQ !== WQ && (null === (wQ = this._onUpdate) || void 0 === wQ || wQ.call(this, XQ, this.booleans));
        return null !== XQ && void 0 !== XQ && XQ
      }
      getBooleanType(QQ) {
        return this.booleans[QQ]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var QQ;
        null === (QQ = this._onUpdate) || void 0 === QQ || QQ.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class TQ extends qQ {
      getTotalBooleanVal() {
        const QQ = this._getTotalBooleanVal();
        if (null === QQ) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return QQ
      }
      _getTotalBooleanVal() {
        let QQ = !1,
          WQ = !0;
        for (const XQ in this.booleans) QQ = !0, WQ &&= this.booleans[XQ];
        return QQ ? WQ : null
      }
    }
    class zQ extends qQ {
      getTotalBooleanVal() {
        const QQ = this._getTotalBooleanVal();
        if (null === QQ) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return QQ
      }
      _getTotalBooleanVal() {
        let QQ = !1,
          WQ = !1;
        for (const XQ in this.booleans) QQ = !0, WQ ||= this.booleans[XQ];
        return QQ ? WQ : null
      }
    }
  },
  37091: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ,
      e: () => wQ,
      h: () => qQ
    });
    const wQ = 15,
      qQ = 3,
      TQ = 30
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);