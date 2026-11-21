export const id = 94;
export const ids = [92, 93, 94];
export const modules = {
  36242: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ, LQ) {
      return !(wQ && !QQ.aimable) && (!FQ || QQ.gun && "head" !== LQ)
    }

    function qQ(QQ) {
      return Math.max(.1 * QQ, 1)
    }

    function oQ(QQ, FQ) {
      return !QQ && FQ
    }
    wQ.d(FQ, {
      c: () => oQ,
      f: () => qQ,
      j: () => LQ
    })
  },
  36248: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => kQ,
      g: () => DQ
    });
    let LQ = null;
    const qQ = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      oQ = {
        crosshairAccuracy: QQ => {
          const FQ = qQ.crosshairAccuracy.at(-1);
          FQ ? FQ.hook(QQ) : LQ = QQ
        },
        turnDamageIndicators: QQ => {
          var FQ;
          null === (FQ = qQ.turnDamageIndicators.at(-1)) || void 0 === FQ || FQ.hook(QQ)
        }
      };

    function DQ(QQ, FQ) {
      const wQ = {
          hook: FQ
        },
        DQ = qQ[QQ];
      if (DQ.push(wQ), "crosshairAccuracy" === QQ && null !== LQ) {
        const QQ = LQ;
        LQ = null, oQ.crosshairAccuracy(QQ)
      }
      return () => {
        const QQ = DQ.indexOf(wQ); - 1 !== QQ && DQ.splice(QQ, 1)
      }
    }

    function kQ() {
      return oQ
    }
  },
  36082: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      countDecodesAs: () => HQ,
      decodedAudio: () => bQ
    });
    var LQ = wQ(36086),
      qQ = wQ(4694);
    const oQ = qQ.Howler,
      DQ = new Map;
    let kQ = 0;
    const vQ = {
        song: 0,
        sheet: 0
      },
      mQ = new WeakMap,
      uQ = new WeakSet;

    function HQ(QQ, FQ) {
      return mQ.set(QQ, FQ), QQ
    }

    function bQ() {
      return {
        bytes: kQ,
        songsDecoded: vQ.song,
        sheetsDecoded: vQ.sheet
      }
    }

    function YQ(QQ) {
      if (uQ.has(QQ)) return;
      uQ.add(QQ);
      const FQ = 1 === QQ.decodeAudioData.length,
        wQ = QQ.decodeAudioData.bind(QQ);
      QQ.decodeAudioData = (QQ, LQ, qQ) => {
        const uQ = QQ => {
          const FQ = oQ._howls.filter((QQ => "loaded" !== QQ._state));
          try {
            null === LQ || void 0 === LQ || LQ(QQ)
          } finally {
            const wQ = FQ.find((QQ => "loaded" === QQ._state));
            void 0 !== wQ && "string" === typeof wQ._src && function(QQ, FQ, wQ) {
              var LQ;
              kQ += wQ - (null !== (LQ = DQ.get(FQ)) && void 0 !== LQ ? LQ : 0), DQ.set(FQ, wQ);
              const qQ = mQ.get(QQ);
              void 0 !== qQ && vQ[qQ]++
            }(wQ, wQ._src, QQ.length * QQ.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return QQ
        };
        if (!FQ) return wQ(QQ, uQ, qQ);
        const HQ = wQ(QQ).then(uQ);
        return HQ.catch((QQ => {
          null === qQ || void 0 === qQ || qQ(QQ)
        })), HQ
      }
    }(0, LQ.c)(bQ);
    const xQ = qQ.Howl.prototype,
      AQ = xQ.init;
    xQ.init = function(QQ) {
      return qQ.Howler.volume(), oQ.ctx && YQ(oQ.ctx), AQ.call(this, QQ)
    };
    const tQ = xQ.unload;
    xQ.unload = function() {
      const QQ = this._src,
        FQ = tQ.call(this);
      if ("string" !== typeof QQ) return FQ;
      const wQ = DQ.get(QQ);
      return void 0 !== wQ && function(QQ) {
        return !oQ._howls.some((FQ => FQ._src === QQ || "string" === typeof FQ._src && QQ.indexOf(FQ._src) >= 0))
      }(QQ) && (DQ.delete(QQ), kQ -= wQ), FQ
    }
  },
  36086: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => qQ
    });
    let LQ = null;

    function qQ(QQ) {
      LQ = QQ
    }

    function oQ() {
      return null === LQ ? null : LQ()
    }
  },
  36415: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => vQ
    });
    var LQ = wQ(17),
      qQ = wQ(36388),
      oQ = wQ(4208),
      DQ = wQ(36417),
      kQ = wQ(4694);
    const vQ = function(QQ) {
      const FQ = new Set;
      return wQ => {
        var LQ;
        const oQ = null === (LQ = [...qQ.b].find((QQ => {
          let [, FQ] = QQ;
          return FQ.includes(wQ)
        }))) || void 0 === LQ ? void 0 : LQ[0];
        if (void 0 === oQ || FQ.has(oQ)) return;
        FQ.add(oQ);
        ! function(QQ, FQ) {
          let {
            afterJoin: wQ,
            joining: LQ,
            idle: qQ,
            fetchFile: oQ
          } = FQ;
          const DQ = FQ => {
            FQ >= QQ.length || wQ((() => {
              qQ((() => {
                LQ() ? DQ(FQ) : oQ(QQ[FQ]).catch((() => {})).finally((() => {
                  DQ(FQ + 1)
                }))
              }))
            }))
          };
          DQ(0)
        }(qQ.b.get(oQ).filter((QQ => QQ !== wQ)).flatMap((FQ => {
          const wQ = (LQ = (0, qQ.e)(FQ).src, oQ = QQ.canPlay, LQ.find((QQ => {
            var FQ;
            const wQ = null === (FQ = /\.([^.]+)$/.exec(QQ.split("?", 1)[0])) || void 0 === FQ ? void 0 : FQ[1];
            return void 0 !== wQ && oQ(wQ.toLowerCase())
          })));
          var LQ, oQ;
          return void 0 === wQ ? [] : [wQ]
        })), QQ)
      }
    }({
      afterJoin: QQ => {
        (0, oQ.c)(LQ.c.get("gameState"), QQ)
      },
      joining: () => (0, oQ.d)(LQ.c.get("gameState")),
      idle: wQ(259).d,
      fetchFile: DQ.d,
      canPlay: QQ => !!kQ.Howler.codecs(QQ)
    })
  },
  36417: (QQ, FQ, wQ) => {
    async function LQ(QQ) {
      const FQ = await fetch(QQ, {
        priority: "low"
      });
      if (!FQ.ok) throw new Error(`Fetching ${QQ} failed: HTTP ${FQ.status}`);
      const wQ = FQ.body.getReader();
      for (; !(await wQ.read()).done;);
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  36390: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    const LQ = ["end", "stop", "playerror"];

    function qQ(QQ, FQ) {
      const wQ = () => {
        if (function(QQ) {
            return "loaded" === QQ.state() && !QQ.playing() && !QQ._playLock
          }(QQ)) {
          for (const FQ of LQ) QQ.off(FQ, wQ);
          QQ.unload(), FQ()
        }
      };
      for (const qQ of LQ) QQ.on(qQ, wQ);
      wQ()
    }
  },
  4694: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      Howl: () => qQ.Howl,
      Howler: () => qQ.Howler,
      musicOutput: () => xQ,
      readyAudioContext: () => AQ
    });
    var LQ, qQ = wQ(4702),
      oQ = wQ(4494);
    const DQ = qQ.Howler;

    function kQ() {
      var QQ, FQ;
      if (DQ.ctx || !DQ.usingWebAudio || "undefined" === typeof AudioContext || !(0, oQ.i)()) return;
      const wQ = navigator.audioSession;
      let LQ;
      "auto" === (null === wQ || void 0 === wQ ? void 0 : wQ.type) && (wQ.type = "ambient");
      try {
        LQ = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const qQ = LQ.createGain();
      qQ.gain.setValueAtTime(DQ._muted ? 0 : null !== (QQ = DQ._volume) && void 0 !== QQ ? QQ : 1, LQ.currentTime), qQ.connect(LQ.destination), DQ.ctx = LQ, DQ.masterGain = qQ, null === (FQ = DQ._setup) || void 0 === FQ || FQ.call(DQ)
    }
    DQ._mobileUnloaded = !0;
    const vQ = DQ.volume.bind(qQ.Howler);
    DQ.volume = function() {
      return kQ(), vQ(...arguments)
    };
    const mQ = DQ.mute.bind(qQ.Howler);
    DQ.mute = QQ => (kQ(), mQ(QQ));
    const uQ = qQ.Howl.prototype,
      HQ = uQ.init;
    uQ.init = function(QQ) {
      return kQ(), HQ.call(this, QQ)
    };
    let bQ = 0;
    const YQ = null === (LQ = DQ._autoSuspend) || void 0 === LQ ? void 0 : LQ.bind(qQ.Howler);

    function xQ() {
      AQ();
      const {
        ctx: QQ,
        masterGain: FQ
      } = DQ;
      return QQ && FQ ? {
        ctx: QQ,
        destination: FQ,
        holdAwake: QQ => {
          var FQ, wQ;
          (bQ += QQ ? 1 : -1, QQ) ? null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ): null === (wQ = DQ._autoSuspend) || void 0 === wQ || wQ.call(DQ)
        },
        wake: () => {
          var FQ;
          "running" !== QQ.state && (null === (FQ = DQ._autoResume) || void 0 === FQ || FQ.call(DQ), QQ.resume().catch((() => {})))
        }
      } : null
    }

    function AQ() {
      var QQ;
      (DQ.volume(), DQ.ctx && DQ.autoUnlock) && (null === (QQ = DQ._unlockAudio) || void 0 === QQ || QQ.call(DQ))
    }
    YQ && (DQ._autoSuspend = () => bQ > 0 ? qQ.Howler : YQ())
  },
  36410: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    const LQ = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36404: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ,
      h: () => qQ,
      k: () => LQ
    });

    function LQ(QQ) {
      return QQ.replace(/[_\-\s]*\d+$/, "") || QQ
    }

    function qQ(QQ, FQ, wQ) {
      return wQ <= 0 ? 0 : QQ * wQ / Math.max(FQ, wQ)
    }

    function oQ(QQ, FQ) {
      const wQ = QQ.getDurationMs();
      return wQ > 0 ? QQ.loudness * Math.max(0, 1 - (FQ - QQ.startMs) / wQ) : 0
    }
    class DQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = QQ, this.maxPerGroup = FQ, this.voices = []
      }
      admit(QQ) {
        if (this.voices = this.voices.filter((QQ => QQ.isAlive())), null !== QQ.group) {
          const FQ = this.voices.filter((FQ => FQ.group === QQ.group));
          if (FQ.length >= this.maxPerGroup && !this.dropLeastWorth(FQ, QQ)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, QQ)) && (this.voices.push(QQ), !0)
      }
      dropLeastWorth(QQ, FQ) {
        let wQ = null,
          LQ = 1 / 0;
        for (const qQ of QQ) {
          if (!qQ.canStop()) continue;
          const QQ = oQ(qQ, FQ.startMs);
          QQ < LQ && (wQ = qQ, LQ = QQ)
        }
        return !(!wQ || FQ.loudness < LQ) && (this.voices.splice(this.voices.indexOf(wQ), 1), wQ.stop(), !0)
      }
    }
  },
  36422: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ,
      f: () => DQ,
      j: () => LQ
    });
    class LQ {
      constructor(QQ) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = QQ
      }
      setMultiplierType(QQ, FQ) {
        var wQ;
        this.multipliers[QQ] = FQ, null === (wQ = this._onUpdate) || void 0 === wQ || wQ.call(this)
      }
      removeMultiplier(QQ) {
        var FQ;
        delete this.multipliers[QQ], null === (FQ = this._onUpdate) || void 0 === FQ || FQ.call(this)
      }
      getMultiplierType(QQ) {
        return this.multipliers[QQ]
      }
      getTotalMultipliedVal() {
        let QQ = 1;
        for (const FQ in this.multipliers) QQ *= this.multipliers[FQ];
        return QQ
      }
    }
    class qQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = QQ
      }
      setBooleanType(QQ, FQ) {
        const wQ = this._getTotalBooleanVal();
        this.booleans[QQ] = !!FQ;
        const LQ = this.getTotalBooleanVal();
        var qQ;
        LQ !== wQ && (null === (qQ = this._onUpdate) || void 0 === qQ || qQ.call(this, LQ, this.booleans));
        return LQ
      }
      removeBoolean(QQ) {
        const FQ = this._getTotalBooleanVal();
        delete this.booleans[QQ];
        const wQ = this._getTotalBooleanVal();
        var LQ;
        null !== wQ && wQ !== FQ && (null === (LQ = this._onUpdate) || void 0 === LQ || LQ.call(this, wQ, this.booleans));
        return null !== wQ && void 0 !== wQ && wQ
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
    class oQ extends qQ {
      getTotalBooleanVal() {
        const QQ = this._getTotalBooleanVal();
        if (null === QQ) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return QQ
      }
      _getTotalBooleanVal() {
        let QQ = !1,
          FQ = !0;
        for (const wQ in this.booleans) QQ = !0, FQ &&= this.booleans[wQ];
        return QQ ? FQ : null
      }
    }
    class DQ extends qQ {
      getTotalBooleanVal() {
        const QQ = this._getTotalBooleanVal();
        if (null === QQ) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return QQ
      }
      _getTotalBooleanVal() {
        let QQ = !1,
          FQ = !1;
        for (const wQ in this.booleans) QQ = !0, FQ ||= this.booleans[wQ];
        return QQ ? FQ : null
      }
    }
  },
  36419: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      d: () => LQ,
      h: () => qQ
    });
    const LQ = 15,
      qQ = 3,
      oQ = 30
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);