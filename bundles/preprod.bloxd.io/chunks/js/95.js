export const id = 95;
export const ids = [93, 94, 95];
export const modules = {
  36502: (CC, zC, ZC) => {
    function QC(CC, zC, ZC, QC) {
      return !(ZC && !CC.aimable) && (!zC || CC.gun && "head" !== QC)
    }

    function wC(CC) {
      return Math.max(.1 * CC, 1)
    }

    function bC(CC, zC) {
      return !CC && zC
    }
    ZC.d(zC, {
      c: () => bC,
      e: () => wC,
      g: () => QC
    })
  },
  36508: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => nC
    });
    let QC = null;
    const wC = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      bC = {
        crosshairAccuracy: CC => {
          const zC = wC.crosshairAccuracy.at(-1);
          zC ? zC.hook(CC) : QC = CC
        },
        turnDamageIndicators: CC => {
          var zC;
          null === (zC = wC.turnDamageIndicators.at(-1)) || void 0 === zC || zC.hook(CC)
        }
      };

    function nC(CC, zC) {
      const ZC = {
          hook: zC
        },
        nC = wC[CC];
      if (nC.push(ZC), "crosshairAccuracy" === CC && null !== QC) {
        const CC = QC;
        QC = null, bC.crosshairAccuracy(CC)
      }
      return () => {
        const CC = nC.indexOf(ZC); - 1 !== CC && nC.splice(CC, 1)
      }
    }

    function fC() {
      return bC
    }
  },
  36318: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      countDecodesAs: () => WC,
      decodedAudio: () => NC
    });
    var QC = ZC(3252),
      wC = ZC(4797);
    const bC = wC.Howler,
      nC = new Map;
    let fC = 0;
    const oC = {
        song: 0,
        sheet: 0
      },
      qC = new WeakMap,
      FC = new WeakSet;

    function WC(CC, zC) {
      return qC.set(CC, zC), CC
    }

    function NC() {
      return {
        bytes: fC,
        songsDecoded: oC.song,
        sheetsDecoded: oC.sheet
      }
    }

    function MC(CC) {
      if (FC.has(CC)) return;
      FC.add(CC);
      const zC = 1 === CC.decodeAudioData.length,
        ZC = CC.decodeAudioData.bind(CC);
      CC.decodeAudioData = (CC, QC, wC) => {
        const FC = CC => {
          const zC = bC._howls.filter((CC => "loaded" !== CC._state));
          try {
            null === QC || void 0 === QC || QC(CC)
          } finally {
            const ZC = zC.find((CC => "loaded" === CC._state));
            void 0 !== ZC && "string" === typeof ZC._src && function(CC, zC, ZC) {
              var QC;
              fC += ZC - (null !== (QC = nC.get(zC)) && void 0 !== QC ? QC : 0), nC.set(zC, ZC);
              const wC = qC.get(CC);
              void 0 !== wC && oC[wC]++
            }(ZC, ZC._src, CC.length * CC.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return CC
        };
        if (!zC) return ZC(CC, FC, wC);
        const WC = ZC(CC).then(FC);
        return WC.catch((CC => {
          null === wC || void 0 === wC || wC(CC)
        })), WC
      }
    }(0, QC.h)(NC);
    const gC = wC.Howl.prototype,
      SC = gC.init;
    gC.init = function(CC) {
      return wC.Howler.volume(), bC.ctx && MC(bC.ctx), SC.call(this, CC)
    };
    const pC = gC.unload;
    gC.unload = function() {
      const CC = this._src,
        zC = pC.call(this);
      if ("string" !== typeof CC) return zC;
      const ZC = nC.get(CC);
      return void 0 !== ZC && function(CC) {
        return !bC._howls.some((zC => zC._src === CC || "string" === typeof zC._src && CC.indexOf(zC._src) >= 0))
      }(CC) && (nC.delete(CC), fC -= ZC), zC
    }
  },
  36659: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => oC
    });
    var QC = ZC(20),
      wC = ZC(36641),
      bC = ZC(2510),
      nC = ZC(36664),
      fC = ZC(4797);
    const oC = function(CC) {
      const zC = new Set;
      return ZC => {
        var QC;
        const bC = null === (QC = [...wC.e].find((CC => {
          let [, zC] = CC;
          return zC.includes(ZC)
        }))) || void 0 === QC ? void 0 : QC[0];
        if (void 0 === bC || zC.has(bC)) return;
        zC.add(bC);
        ! function(CC, zC) {
          let {
            afterJoin: ZC,
            joining: QC,
            idle: wC,
            fetchFile: bC
          } = zC;
          const nC = zC => {
            zC >= CC.length || ZC((() => {
              wC((() => {
                QC() ? nC(zC) : bC(CC[zC]).catch((() => {})).finally((() => {
                  nC(zC + 1)
                }))
              }))
            }))
          };
          nC(0)
        }(wC.e.get(bC).filter((CC => CC !== ZC)).flatMap((zC => {
          const ZC = (QC = (0, wC.j)(zC).src, bC = CC.canPlay, QC.find((CC => {
            var zC;
            const ZC = null === (zC = /\.([^.]+)$/.exec(CC.split("?", 1)[0])) || void 0 === zC ? void 0 : zC[1];
            return void 0 !== ZC && bC(ZC.toLowerCase())
          })));
          var QC, bC;
          return void 0 === ZC ? [] : [ZC]
        })), CC)
      }
    }({
      afterJoin: CC => {
        (0, bC.d)(QC.b.get("gameState"), CC)
      },
      joining: () => (0, bC.e)(QC.b.get("gameState")),
      idle: ZC(239).e,
      fetchFile: nC.c,
      canPlay: CC => !!fC.Howler.codecs(CC)
    })
  },
  36664: (CC, zC, ZC) => {
    async function QC(CC) {
      const zC = await fetch(CC, {
        priority: "low"
      });
      if (!zC.ok) throw new Error(`Fetching ${CC} failed: HTTP ${zC.status}`);
      const ZC = zC.body.getReader();
      for (; !(await ZC.read()).done;);
    }
    ZC.d(zC, {
      c: () => QC
    })
  },
  36643: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    const QC = ["end", "stop", "playerror"];

    function wC(CC, zC) {
      const ZC = () => {
        if (function(CC) {
            return "loaded" === CC.state() && !CC.playing() && !CC._playLock
          }(CC)) {
          for (const zC of QC) CC.off(zC, ZC);
          CC.unload(), zC()
        }
      };
      for (const wC of QC) CC.on(wC, ZC);
      ZC()
    }
  },
  4797: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Howl: () => wC.Howl,
      Howler: () => wC.Howler,
      musicOutput: () => pC,
      readyAudioContext: () => PC
    });
    var QC, wC = ZC(4801),
      bC = ZC(3419),
      nC = ZC(4587);
    const fC = wC.Howler;

    function oC() {
      var CC, zC;
      if (fC.ctx || !fC.usingWebAudio || "undefined" === typeof AudioContext || !(0, nC.h)()) return;
      const ZC = navigator.audioSession;
      let QC;
      "auto" === (null === ZC || void 0 === ZC ? void 0 : ZC.type) && (ZC.type = "ambient");
      try {
        QC = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const wC = QC.createGain();
      wC.gain.setValueAtTime(fC._muted ? 0 : null !== (CC = fC._volume) && void 0 !== CC ? CC : 1, QC.currentTime), wC.connect(QC.destination), fC.ctx = QC, fC.masterGain = wC, null === (zC = fC._setup) || void 0 === zC || zC.call(fC)
    }
    fC._mobileUnloaded = !0;
    const qC = fC.volume.bind(wC.Howler);
    fC.volume = function() {
      return oC(), qC(...arguments)
    };
    const FC = fC.mute.bind(wC.Howler);
    fC.mute = CC => (oC(), FC(CC));
    const WC = wC.Howl.prototype,
      NC = WC.init;

    function MC() {
      for (; fC._html5AudioPool.length < fC.html5PoolSize;) {
        const CC = new Audio;
        CC._unlocked = !0, fC._releaseHtml5Audio(CC)
      }
      for (const zC of fC._howls)
        if (!zC._webAudio)
          for (const ZC of zC._getSoundIds()) {
            var CC;
            const QC = null === (CC = zC._soundById(ZC)) || void 0 === CC ? void 0 : CC._node;
            QC && !QC._unlocked && (QC._unlocked = !0, QC.load())
          }
    }
    WC.init = function(CC) {
      return oC(), NC.call(this, CC)
    }, (0, nC.h)() && (fC._unlockAudio = () => {
      const CC = fC.ctx;
      if (fC._audioUnlocked || !CC) return;
      fC.autoUnlock = !1;
      const zC = CC.createBuffer(1, 1, 22050);
      fC._scratchBuffer = zC;
      const ZC = new AbortController;
      let QC = "afterPaint";
      const wC = () => {
          var QC;
          if (fC._audioUnlocked) return;
          null === (QC = fC._autoResume) || void 0 === QC || QC.call(fC);
          const wC = CC.createBufferSource();
          wC.buffer = zC, wC.connect(CC.destination), wC.start(0), CC.resume().catch((() => {})), wC.onended = () => {
            wC.disconnect(0), fC._audioUnlocked = !0, ZC.abort();
            for (const CC of fC._howls) CC._emit("unlock")
          }
        },
        oC = () => {
          MC(), wC()
        },
        qC = zC => {
          if (MC(), "inTap" === QC) {
            if ("running" === CC.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), wC()
          } else "afterPaint" === QC && (QC = "queued", (0, bC.c)(zC.timeStamp, (() => {
            QC = "inTap", wC()
          })))
        };
      for (const bC of ["touchstart", "touchend"]) document.addEventListener(bC, oC, {
        capture: !0,
        signal: ZC.signal
      });
      for (const bC of nC.c) document.addEventListener(bC, qC, {
        capture: !0,
        signal: ZC.signal
      })
    });
    let gC = 0;
    const SC = null === (QC = fC._autoSuspend) || void 0 === QC ? void 0 : QC.bind(wC.Howler);

    function pC() {
      PC();
      const {
        ctx: CC,
        masterGain: zC
      } = fC;
      return CC && zC ? {
        ctx: CC,
        destination: zC,
        holdAwake: CC => {
          var zC, ZC;
          (gC += CC ? 1 : -1, CC) ? null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC): null === (ZC = fC._autoSuspend) || void 0 === ZC || ZC.call(fC)
        },
        wake: () => {
          var zC;
          "running" !== CC.state && (null === (zC = fC._autoResume) || void 0 === zC || zC.call(fC), CC.resume().catch((() => {})))
        }
      } : null
    }

    function PC() {
      var CC;
      (fC.volume(), fC.ctx && fC.autoUnlock) && (null === (CC = fC._unlockAudio) || void 0 === CC || CC.call(fC))
    }
    SC && (fC._autoSuspend = () => gC > 0 ? wC.Howler : SC())
  },
  36657: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    const QC = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36650: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => wC,
      g: () => QC
    });

    function QC(CC) {
      return CC.replace(/[_\-\s]*\d+$/, "") || CC
    }

    function wC(CC, zC, ZC) {
      return ZC <= 0 ? 0 : CC * ZC / Math.max(zC, ZC)
    }

    function bC(CC, zC) {
      const ZC = CC.getDurationMs();
      return ZC > 0 ? CC.loudness * Math.max(0, 1 - (zC - CC.startMs) / ZC) : 0
    }
    class nC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = CC, this.maxPerGroup = zC, this.voices = []
      }
      admit(CC) {
        if (this.voices = this.voices.filter((CC => CC.isAlive())), null !== CC.group) {
          const zC = this.voices.filter((zC => zC.group === CC.group));
          if (zC.length >= this.maxPerGroup && !this.dropLeastWorth(zC, CC)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, CC)) && (this.voices.push(CC), !0)
      }
      dropLeastWorth(CC, zC) {
        let ZC = null,
          QC = 1 / 0;
        for (const wC of CC) {
          if (!wC.canStop()) continue;
          const CC = bC(wC, zC.startMs);
          CC < QC && (ZC = wC, QC = CC)
        }
        return !(!ZC || zC.loudness < QC) && (this.voices.splice(this.voices.indexOf(ZC), 1), ZC.stop(), !0)
      }
    }
  },
  36673: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      f: () => nC,
      i: () => QC
    });
    class QC {
      constructor(CC) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = CC
      }
      setMultiplierType(CC, zC) {
        var ZC;
        this.multipliers[CC] = zC, null === (ZC = this._onUpdate) || void 0 === ZC || ZC.call(this)
      }
      removeMultiplier(CC) {
        var zC;
        delete this.multipliers[CC], null === (zC = this._onUpdate) || void 0 === zC || zC.call(this)
      }
      getMultiplierType(CC) {
        return this.multipliers[CC]
      }
      getTotalMultipliedVal() {
        let CC = 1;
        for (const zC in this.multipliers) CC *= this.multipliers[zC];
        return CC
      }
    }
    class wC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = CC
      }
      setBooleanType(CC, zC) {
        const ZC = this._getTotalBooleanVal();
        this.booleans[CC] = !!zC;
        const QC = this.getTotalBooleanVal();
        var wC;
        QC !== ZC && (null === (wC = this._onUpdate) || void 0 === wC || wC.call(this, QC, this.booleans));
        return QC
      }
      removeBoolean(CC) {
        const zC = this._getTotalBooleanVal();
        delete this.booleans[CC];
        const ZC = this._getTotalBooleanVal();
        var QC;
        null !== ZC && ZC !== zC && (null === (QC = this._onUpdate) || void 0 === QC || QC.call(this, ZC, this.booleans));
        return null !== ZC && void 0 !== ZC && ZC
      }
      getBooleanType(CC) {
        return this.booleans[CC]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var CC;
        null === (CC = this._onUpdate) || void 0 === CC || CC.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class bC extends wC {
      getTotalBooleanVal() {
        const CC = this._getTotalBooleanVal();
        if (null === CC) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return CC
      }
      _getTotalBooleanVal() {
        let CC = !1,
          zC = !0;
        for (const ZC in this.booleans) CC = !0, zC &&= this.booleans[ZC];
        return CC ? zC : null
      }
    }
    class nC extends wC {
      getTotalBooleanVal() {
        const CC = this._getTotalBooleanVal();
        if (null === CC) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return CC
      }
      _getTotalBooleanVal() {
        let CC = !1,
          zC = !1;
        for (const ZC in this.booleans) CC = !0, zC ||= this.booleans[ZC];
        return CC ? zC : null
      }
    }
  },
  36667: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      g: () => QC,
      j: () => wC
    });
    const QC = 15,
      wC = 3,
      bC = 30
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);