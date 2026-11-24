export const id = 95;
export const ids = [93, 94, 95];
export const modules = {
  36591: (DD, zD, wD) => {
    function pD(DD, zD, wD, pD) {
      return !(wD && !DD.aimable) && (!zD || DD.gun && "head" !== pD)
    }

    function sD(DD) {
      return Math.max(.1 * DD, 1)
    }

    function KD(DD, zD) {
      return !DD && zD
    }
    wD.d(zD, {
      d: () => KD,
      g: () => sD,
      i: () => pD
    })
  },
  36593: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD,
      h: () => rD
    });
    let pD = null;
    const sD = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      KD = {
        crosshairAccuracy: DD => {
          const zD = sD.crosshairAccuracy.at(-1);
          zD ? zD.hook(DD) : pD = DD
        },
        turnDamageIndicators: DD => {
          var zD;
          null === (zD = sD.turnDamageIndicators.at(-1)) || void 0 === zD || zD.hook(DD)
        }
      };

    function rD(DD, zD) {
      const wD = {
          hook: zD
        },
        rD = sD[DD];
      if (rD.push(wD), "crosshairAccuracy" === DD && null !== pD) {
        const DD = pD;
        pD = null, KD.crosshairAccuracy(DD)
      }
      return () => {
        const DD = rD.indexOf(wD); - 1 !== DD && rD.splice(DD, 1)
      }
    }

    function LD() {
      return KD
    }
  },
  36432: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      countDecodesAs: () => AD,
      decodedAudio: () => UD
    });
    var pD = wD(3252),
      sD = wD(4875);
    const KD = sD.Howler,
      rD = new Map;
    let LD = 0;
    const cD = {
        song: 0,
        sheet: 0
      },
      gD = new WeakMap,
      RD = new WeakSet;

    function AD(DD, zD) {
      return gD.set(DD, zD), DD
    }

    function UD() {
      return {
        bytes: LD,
        songsDecoded: cD.song,
        sheetsDecoded: cD.sheet
      }
    }

    function fD(DD) {
      if (RD.has(DD)) return;
      RD.add(DD);
      const zD = 1 === DD.decodeAudioData.length,
        wD = DD.decodeAudioData.bind(DD);
      DD.decodeAudioData = (DD, pD, sD) => {
        const RD = DD => {
          const zD = KD._howls.filter((DD => "loaded" !== DD._state));
          try {
            null === pD || void 0 === pD || pD(DD)
          } finally {
            const wD = zD.find((DD => "loaded" === DD._state));
            void 0 !== wD && "string" === typeof wD._src && function(DD, zD, wD) {
              var pD;
              LD += wD - (null !== (pD = rD.get(zD)) && void 0 !== pD ? pD : 0), rD.set(zD, wD);
              const sD = gD.get(DD);
              void 0 !== sD && cD[sD]++
            }(wD, wD._src, DD.length * DD.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return DD
        };
        if (!zD) return wD(DD, RD, sD);
        const AD = wD(DD).then(RD);
        return AD.catch((DD => {
          null === sD || void 0 === sD || sD(DD)
        })), AD
      }
    }(0, pD.f)(UD);
    const ID = sD.Howl.prototype,
      BD = ID.init;
    ID.init = function(DD) {
      return sD.Howler.volume(), KD.ctx && fD(KD.ctx), BD.call(this, DD)
    };
    const GD = ID.unload;
    ID.unload = function() {
      const DD = this._src,
        zD = GD.call(this);
      if ("string" !== typeof DD) return zD;
      const wD = rD.get(DD);
      return void 0 !== wD && function(DD) {
        return !KD._howls.some((zD => zD._src === DD || "string" === typeof zD._src && DD.indexOf(zD._src) >= 0))
      }(DD) && (rD.delete(DD), LD -= wD), zD
    }
  },
  36742: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => cD
    });
    var pD = wD(20),
      sD = wD(36719),
      KD = wD(2534),
      rD = wD(36744),
      LD = wD(4875);
    const cD = function(DD) {
      const zD = new Set;
      return wD => {
        var pD;
        const KD = null === (pD = [...sD.d].find((DD => {
          let [, zD] = DD;
          return zD.includes(wD)
        }))) || void 0 === pD ? void 0 : pD[0];
        if (void 0 === KD || zD.has(KD)) return;
        zD.add(KD);
        ! function(DD, zD) {
          let {
            afterJoin: wD,
            joining: pD,
            idle: sD,
            fetchFile: KD
          } = zD;
          const rD = zD => {
            zD >= DD.length || wD((() => {
              sD((() => {
                pD() ? rD(zD) : KD(DD[zD]).catch((() => {})).finally((() => {
                  rD(zD + 1)
                }))
              }))
            }))
          };
          rD(0)
        }(sD.d.get(KD).filter((DD => DD !== wD)).flatMap((zD => {
          const wD = (pD = (0, sD.i)(zD).src, KD = DD.canPlay, pD.find((DD => {
            var zD;
            const wD = null === (zD = /\.([^.]+)$/.exec(DD.split("?", 1)[0])) || void 0 === zD ? void 0 : zD[1];
            return void 0 !== wD && KD(wD.toLowerCase())
          })));
          var pD, KD;
          return void 0 === wD ? [] : [wD]
        })), DD)
      }
    }({
      afterJoin: DD => {
        (0, KD.d)(pD.e.get("gameState"), DD)
      },
      joining: () => (0, KD.g)(pD.e.get("gameState")),
      idle: wD(262).b,
      fetchFile: rD.e,
      canPlay: DD => !!LD.Howler.codecs(DD)
    })
  },
  36744: (DD, zD, wD) => {
    async function pD(DD) {
      const zD = await fetch(DD, {
        priority: "low"
      });
      if (!zD.ok) throw new Error(`Fetching ${DD} failed: HTTP ${zD.status}`);
      const wD = zD.body.getReader();
      for (; !(await wD.read()).done;);
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  36723: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD
    });
    const pD = ["end", "stop", "playerror"];

    function sD(DD, zD) {
      const wD = () => {
        if (function(DD) {
            return "loaded" === DD.state() && !DD.playing() && !DD._playLock
          }(DD)) {
          for (const zD of pD) DD.off(zD, wD);
          DD.unload(), zD()
        }
      };
      for (const sD of pD) DD.on(sD, wD);
      wD()
    }
  },
  4875: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      Howl: () => sD.Howl,
      Howler: () => sD.Howler,
      musicOutput: () => GD,
      readyAudioContext: () => hD
    });
    var pD, sD = wD(4877),
      KD = wD(3444),
      rD = wD(4682);
    const LD = sD.Howler;

    function cD() {
      var DD, zD;
      if (LD.ctx || !LD.usingWebAudio || "undefined" === typeof AudioContext || !(0, rD.l)()) return;
      const wD = navigator.audioSession;
      let pD;
      "auto" === (null === wD || void 0 === wD ? void 0 : wD.type) && (wD.type = "ambient");
      try {
        pD = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const sD = pD.createGain();
      sD.gain.setValueAtTime(LD._muted ? 0 : null !== (DD = LD._volume) && void 0 !== DD ? DD : 1, pD.currentTime), sD.connect(pD.destination), LD.ctx = pD, LD.masterGain = sD, null === (zD = LD._setup) || void 0 === zD || zD.call(LD)
    }
    LD._mobileUnloaded = !0;
    const gD = LD.volume.bind(sD.Howler);
    LD.volume = function() {
      return cD(), gD(...arguments)
    };
    const RD = LD.mute.bind(sD.Howler);
    LD.mute = DD => (cD(), RD(DD));
    const AD = sD.Howl.prototype,
      UD = AD.init;

    function fD() {
      for (; LD._html5AudioPool.length < LD.html5PoolSize;) {
        const DD = new Audio;
        DD._unlocked = !0, LD._releaseHtml5Audio(DD)
      }
      for (const zD of LD._howls)
        if (!zD._webAudio)
          for (const wD of zD._getSoundIds()) {
            var DD;
            const pD = null === (DD = zD._soundById(wD)) || void 0 === DD ? void 0 : DD._node;
            pD && !pD._unlocked && (pD._unlocked = !0, pD.load())
          }
    }
    AD.init = function(DD) {
      return cD(), UD.call(this, DD)
    }, (0, rD.l)() && (LD._unlockAudio = () => {
      const DD = LD.ctx;
      if (LD._audioUnlocked || !DD) return;
      LD.autoUnlock = !1;
      const zD = DD.createBuffer(1, 1, 22050);
      LD._scratchBuffer = zD;
      const wD = new AbortController;
      let pD = "afterPaint";
      const sD = () => {
          var pD;
          if (LD._audioUnlocked) return;
          null === (pD = LD._autoResume) || void 0 === pD || pD.call(LD);
          const sD = DD.createBufferSource();
          sD.buffer = zD, sD.connect(DD.destination), sD.start(0), DD.resume().catch((() => {})), sD.onended = () => {
            sD.disconnect(0), LD._audioUnlocked = !0, wD.abort();
            for (const DD of LD._howls) DD._emit("unlock")
          }
        },
        cD = () => {
          fD(), sD()
        },
        gD = zD => {
          if (fD(), "inTap" === pD) {
            if ("running" === DD.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), sD()
          } else "afterPaint" === pD && (pD = "queued", (0, KD.d)(zD.timeStamp, (() => {
            pD = "inTap", sD()
          })))
        };
      for (const KD of ["touchstart", "touchend"]) document.addEventListener(KD, cD, {
        capture: !0,
        signal: wD.signal
      });
      for (const KD of rD.d) document.addEventListener(KD, gD, {
        capture: !0,
        signal: wD.signal
      })
    });
    let ID = 0;
    const BD = null === (pD = LD._autoSuspend) || void 0 === pD ? void 0 : pD.bind(sD.Howler);

    function GD() {
      hD();
      const {
        ctx: DD,
        masterGain: zD
      } = LD;
      return DD && zD ? {
        ctx: DD,
        destination: zD,
        holdAwake: DD => {
          var zD, wD;
          (ID += DD ? 1 : -1, DD) ? null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD): null === (wD = LD._autoSuspend) || void 0 === wD || wD.call(LD)
        },
        wake: () => {
          var zD;
          "running" !== DD.state && (null === (zD = LD._autoResume) || void 0 === zD || zD.call(LD), DD.resume().catch((() => {})))
        }
      } : null
    }

    function hD() {
      var DD;
      (LD.volume(), LD.ctx && LD.autoUnlock) && (null === (DD = LD._unlockAudio) || void 0 === DD || DD.call(LD))
    }
    BD && (LD._autoSuspend = () => ID > 0 ? sD.Howler : BD())
  },
  36738: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    const pD = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36733: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => rD,
      g: () => sD,
      j: () => pD
    });

    function pD(DD) {
      return DD.replace(/[_\-\s]*\d+$/, "") || DD
    }

    function sD(DD, zD, wD) {
      return wD <= 0 ? 0 : DD * wD / Math.max(zD, wD)
    }

    function KD(DD, zD) {
      const wD = DD.getDurationMs();
      return wD > 0 ? DD.loudness * Math.max(0, 1 - (zD - DD.startMs) / wD) : 0
    }
    class rD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = DD, this.maxPerGroup = zD, this.voices = []
      }
      admit(DD) {
        if (this.voices = this.voices.filter((DD => DD.isAlive())), null !== DD.group) {
          const zD = this.voices.filter((zD => zD.group === DD.group));
          if (zD.length >= this.maxPerGroup && !this.dropLeastWorth(zD, DD)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, DD)) && (this.voices.push(DD), !0)
      }
      dropLeastWorth(DD, zD) {
        let wD = null,
          pD = 1 / 0;
        for (const sD of DD) {
          if (!sD.canStop()) continue;
          const DD = KD(sD, zD.startMs);
          DD < pD && (wD = sD, pD = DD)
        }
        return !(!wD || zD.loudness < pD) && (this.voices.splice(this.voices.indexOf(wD), 1), wD.stop(), !0)
      }
    }
  },
  36751: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      f: () => rD,
      g: () => pD
    });
    class pD {
      constructor(DD) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = DD
      }
      setMultiplierType(DD, zD) {
        var wD;
        this.multipliers[DD] = zD, null === (wD = this._onUpdate) || void 0 === wD || wD.call(this)
      }
      removeMultiplier(DD) {
        var zD;
        delete this.multipliers[DD], null === (zD = this._onUpdate) || void 0 === zD || zD.call(this)
      }
      getMultiplierType(DD) {
        return this.multipliers[DD]
      }
      getTotalMultipliedVal() {
        let DD = 1;
        for (const zD in this.multipliers) DD *= this.multipliers[zD];
        return DD
      }
    }
    class sD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = DD
      }
      setBooleanType(DD, zD) {
        const wD = this._getTotalBooleanVal();
        this.booleans[DD] = !!zD;
        const pD = this.getTotalBooleanVal();
        var sD;
        pD !== wD && (null === (sD = this._onUpdate) || void 0 === sD || sD.call(this, pD, this.booleans));
        return pD
      }
      removeBoolean(DD) {
        const zD = this._getTotalBooleanVal();
        delete this.booleans[DD];
        const wD = this._getTotalBooleanVal();
        var pD;
        null !== wD && wD !== zD && (null === (pD = this._onUpdate) || void 0 === pD || pD.call(this, wD, this.booleans));
        return null !== wD && void 0 !== wD && wD
      }
      getBooleanType(DD) {
        return this.booleans[DD]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var DD;
        null === (DD = this._onUpdate) || void 0 === DD || DD.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class KD extends sD {
      getTotalBooleanVal() {
        const DD = this._getTotalBooleanVal();
        if (null === DD) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return DD
      }
      _getTotalBooleanVal() {
        let DD = !1,
          zD = !0;
        for (const wD in this.booleans) DD = !0, zD &&= this.booleans[wD];
        return DD ? zD : null
      }
    }
    class rD extends sD {
      getTotalBooleanVal() {
        const DD = this._getTotalBooleanVal();
        if (null === DD) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return DD
      }
      _getTotalBooleanVal() {
        let DD = !1,
          zD = !1;
        for (const wD in this.booleans) DD = !0, zD ||= this.booleans[wD];
        return DD ? zD : null
      }
    }
  },
  36749: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      f: () => pD,
      g: () => sD
    });
    const pD = 15,
      sD = 3,
      KD = 30
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);