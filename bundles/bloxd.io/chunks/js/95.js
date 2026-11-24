export const id = 95;
export const ids = [93, 94, 95];
export const modules = {
  36647: (SS, HS, gS) => {
    function tS(SS, HS, gS, tS) {
      return !(gS && !SS.aimable) && (!HS || SS.gun && "head" !== tS)
    }

    function bS(SS) {
      return Math.max(.1 * SS, 1)
    }

    function XS(SS, HS) {
      return !SS && HS
    }
    gS.d(HS, {
      d: () => XS,
      e: () => bS,
      g: () => tS
    })
  },
  36650: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => NS,
      f: () => xS
    });
    let tS = null;
    const bS = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      XS = {
        crosshairAccuracy: SS => {
          const HS = bS.crosshairAccuracy.at(-1);
          HS ? HS.hook(SS) : tS = SS
        },
        turnDamageIndicators: SS => {
          var HS;
          null === (HS = bS.turnDamageIndicators.at(-1)) || void 0 === HS || HS.hook(SS)
        }
      };

    function xS(SS, HS) {
      const gS = {
          hook: HS
        },
        xS = bS[SS];
      if (xS.push(gS), "crosshairAccuracy" === SS && null !== tS) {
        const SS = tS;
        tS = null, XS.crosshairAccuracy(SS)
      }
      return () => {
        const SS = xS.indexOf(gS); - 1 !== SS && xS.splice(SS, 1)
      }
    }

    function NS() {
      return XS
    }
  },
  36448: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      countDecodesAs: () => fS,
      decodedAudio: () => kS
    });
    var tS = gS(3408),
      bS = gS(5005);
    const XS = bS.Howler,
      xS = new Map;
    let NS = 0;
    const qS = {
        song: 0,
        sheet: 0
      },
      uS = new WeakMap,
      IS = new WeakSet;

    function fS(SS, HS) {
      return uS.set(SS, HS), SS
    }

    function kS() {
      return {
        bytes: NS,
        songsDecoded: qS.song,
        sheetsDecoded: qS.sheet
      }
    }

    function aS(SS) {
      if (IS.has(SS)) return;
      IS.add(SS);
      const HS = 1 === SS.decodeAudioData.length,
        gS = SS.decodeAudioData.bind(SS);
      SS.decodeAudioData = (SS, tS, bS) => {
        const IS = SS => {
          const HS = XS._howls.filter((SS => "loaded" !== SS._state));
          try {
            null === tS || void 0 === tS || tS(SS)
          } finally {
            const gS = HS.find((SS => "loaded" === SS._state));
            void 0 !== gS && "string" === typeof gS._src && function(SS, HS, gS) {
              var tS;
              NS += gS - (null !== (tS = xS.get(HS)) && void 0 !== tS ? tS : 0), xS.set(HS, gS);
              const bS = uS.get(SS);
              void 0 !== bS && qS[bS]++
            }(gS, gS._src, SS.length * SS.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return SS
        };
        if (!HS) return gS(SS, IS, bS);
        const fS = gS(SS).then(IS);
        return fS.catch((SS => {
          null === bS || void 0 === bS || bS(SS)
        })), fS
      }
    }(0, tS.f)(kS);
    const KS = bS.Howl.prototype,
      jS = KS.init;
    KS.init = function(SS) {
      return bS.Howler.volume(), XS.ctx && aS(XS.ctx), jS.call(this, SS)
    };
    const GS = KS.unload;
    KS.unload = function() {
      const SS = this._src,
        HS = GS.call(this);
      if ("string" !== typeof SS) return HS;
      const gS = xS.get(SS);
      return void 0 !== gS && function(SS) {
        return !XS._howls.some((HS => HS._src === SS || "string" === typeof HS._src && SS.indexOf(HS._src) >= 0))
      }(SS) && (xS.delete(SS), NS -= gS), HS
    }
  },
  36808: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => qS
    });
    var tS = gS(24),
      bS = gS(36773),
      XS = gS(2677),
      xS = gS(36814),
      NS = gS(5005);
    const qS = function(SS) {
      const HS = new Set;
      return gS => {
        var tS;
        const XS = null === (tS = [...bS.c].find((SS => {
          let [, HS] = SS;
          return HS.includes(gS)
        }))) || void 0 === tS ? void 0 : tS[0];
        if (void 0 === XS || HS.has(XS)) return;
        HS.add(XS);
        ! function(SS, HS) {
          let {
            afterJoin: gS,
            joining: tS,
            idle: bS,
            fetchFile: XS
          } = HS;
          const xS = HS => {
            HS >= SS.length || gS((() => {
              bS((() => {
                tS() ? xS(HS) : XS(SS[HS]).catch((() => {})).finally((() => {
                  xS(HS + 1)
                }))
              }))
            }))
          };
          xS(0)
        }(bS.c.get(XS).filter((SS => SS !== gS)).flatMap((HS => {
          const gS = (tS = (0, bS.i)(HS).src, XS = SS.canPlay, tS.find((SS => {
            var HS;
            const gS = null === (HS = /\.([^.]+)$/.exec(SS.split("?", 1)[0])) || void 0 === HS ? void 0 : HS[1];
            return void 0 !== gS && XS(gS.toLowerCase())
          })));
          var tS, XS;
          return void 0 === gS ? [] : [gS]
        })), SS)
      }
    }({
      afterJoin: SS => {
        (0, XS.c)(tS.b.get("gameState"), SS)
      },
      joining: () => (0, XS.g)(tS.b.get("gameState")),
      idle: gS(278).c,
      fetchFile: xS.e,
      canPlay: SS => !!NS.Howler.codecs(SS)
    })
  },
  36814: (SS, HS, gS) => {
    async function tS(SS) {
      const HS = await fetch(SS, {
        priority: "low"
      });
      if (!HS.ok) throw new Error(`Fetching ${SS} failed: HTTP ${HS.status}`);
      const gS = HS.body.getReader();
      for (; !(await gS.read()).done;);
    }
    gS.d(HS, {
      e: () => tS
    })
  },
  36780: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    const tS = ["end", "stop", "playerror"];

    function bS(SS, HS) {
      const gS = () => {
        if (function(SS) {
            return "loaded" === SS.state() && !SS.playing() && !SS._playLock
          }(SS)) {
          for (const HS of tS) SS.off(HS, gS);
          SS.unload(), HS()
        }
      };
      for (const bS of tS) SS.on(bS, gS);
      gS()
    }
  },
  5005: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Howl: () => bS.Howl,
      Howler: () => bS.Howler,
      musicOutput: () => GS,
      readyAudioContext: () => CS
    });
    var tS, bS = gS(5011),
      XS = gS(3577),
      xS = gS(4775);
    const NS = bS.Howler;

    function qS() {
      var SS, HS;
      if (NS.ctx || !NS.usingWebAudio || "undefined" === typeof AudioContext || !(0, xS.k)()) return;
      const gS = navigator.audioSession;
      let tS;
      "auto" === (null === gS || void 0 === gS ? void 0 : gS.type) && (gS.type = "ambient");
      try {
        tS = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const bS = tS.createGain();
      bS.gain.setValueAtTime(NS._muted ? 0 : null !== (SS = NS._volume) && void 0 !== SS ? SS : 1, tS.currentTime), bS.connect(tS.destination), NS.ctx = tS, NS.masterGain = bS, null === (HS = NS._setup) || void 0 === HS || HS.call(NS)
    }
    NS._mobileUnloaded = !0;
    const uS = NS.volume.bind(bS.Howler);
    NS.volume = function() {
      return qS(), uS(...arguments)
    };
    const IS = NS.mute.bind(bS.Howler);
    NS.mute = SS => (qS(), IS(SS));
    const fS = bS.Howl.prototype,
      kS = fS.init;

    function aS() {
      for (; NS._html5AudioPool.length < NS.html5PoolSize;) {
        const SS = new Audio;
        SS._unlocked = !0, NS._releaseHtml5Audio(SS)
      }
      for (const HS of NS._howls)
        if (!HS._webAudio)
          for (const gS of HS._getSoundIds()) {
            var SS;
            const tS = null === (SS = HS._soundById(gS)) || void 0 === SS ? void 0 : SS._node;
            tS && !tS._unlocked && (tS._unlocked = !0, tS.load())
          }
    }
    fS.init = function(SS) {
      return qS(), kS.call(this, SS)
    }, (0, xS.k)() && (NS._unlockAudio = () => {
      const SS = NS.ctx;
      if (NS._audioUnlocked || !SS) return;
      NS.autoUnlock = !1;
      const HS = SS.createBuffer(1, 1, 22050);
      NS._scratchBuffer = HS;
      const gS = new AbortController;
      let tS = "afterPaint";
      const bS = () => {
          var tS;
          if (NS._audioUnlocked) return;
          null === (tS = NS._autoResume) || void 0 === tS || tS.call(NS);
          const bS = SS.createBufferSource();
          bS.buffer = HS, bS.connect(SS.destination), bS.start(0), SS.resume().catch((() => {})), bS.onended = () => {
            bS.disconnect(0), NS._audioUnlocked = !0, gS.abort();
            for (const SS of NS._howls) SS._emit("unlock")
          }
        },
        qS = () => {
          aS(), bS()
        },
        uS = HS => {
          if (aS(), "inTap" === tS) {
            if ("running" === SS.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), bS()
          } else "afterPaint" === tS && (tS = "queued", (0, XS.d)(HS.timeStamp, (() => {
            tS = "inTap", bS()
          })))
        };
      for (const XS of ["touchstart", "touchend"]) document.addEventListener(XS, qS, {
        capture: !0,
        signal: gS.signal
      });
      for (const XS of xS.e) document.addEventListener(XS, uS, {
        capture: !0,
        signal: gS.signal
      })
    });
    let KS = 0;
    const jS = null === (tS = NS._autoSuspend) || void 0 === tS ? void 0 : tS.bind(bS.Howler);

    function GS() {
      CS();
      const {
        ctx: SS,
        masterGain: HS
      } = NS;
      return SS && HS ? {
        ctx: SS,
        destination: HS,
        holdAwake: SS => {
          var HS, gS;
          (KS += SS ? 1 : -1, SS) ? null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS): null === (gS = NS._autoSuspend) || void 0 === gS || gS.call(NS)
        },
        wake: () => {
          var HS;
          "running" !== SS.state && (null === (HS = NS._autoResume) || void 0 === HS || HS.call(NS), SS.resume().catch((() => {})))
        }
      } : null
    }

    function CS() {
      var SS;
      (NS.volume(), NS.ctx && NS.autoUnlock) && (null === (SS = NS._unlockAudio) || void 0 === SS || SS.call(NS))
    }
    jS && (NS._autoSuspend = () => KS > 0 ? bS.Howler : jS())
  },
  36801: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    const tS = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  36793: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS,
      d: () => bS,
      g: () => tS
    });

    function tS(SS) {
      return SS.replace(/[_\-\s]*\d+$/, "") || SS
    }

    function bS(SS, HS, gS) {
      return gS <= 0 ? 0 : SS * gS / Math.max(HS, gS)
    }

    function XS(SS, HS) {
      const gS = SS.getDurationMs();
      return gS > 0 ? SS.loudness * Math.max(0, 1 - (HS - SS.startMs) / gS) : 0
    }
    class xS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = SS, this.maxPerGroup = HS, this.voices = []
      }
      admit(SS) {
        if (this.voices = this.voices.filter((SS => SS.isAlive())), null !== SS.group) {
          const HS = this.voices.filter((HS => HS.group === SS.group));
          if (HS.length >= this.maxPerGroup && !this.dropLeastWorth(HS, SS)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, SS)) && (this.voices.push(SS), !0)
      }
      dropLeastWorth(SS, HS) {
        let gS = null,
          tS = 1 / 0;
        for (const bS of SS) {
          if (!bS.canStop()) continue;
          const SS = XS(bS, HS.startMs);
          SS < tS && (gS = bS, tS = SS)
        }
        return !(!gS || HS.loudness < tS) && (this.voices.splice(this.voices.indexOf(gS), 1), gS.stop(), !0)
      }
    }
  },
  36822: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      e: () => xS,
      h: () => tS
    });
    class tS {
      constructor(SS) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = SS
      }
      setMultiplierType(SS, HS) {
        var gS;
        this.multipliers[SS] = HS, null === (gS = this._onUpdate) || void 0 === gS || gS.call(this)
      }
      removeMultiplier(SS) {
        var HS;
        delete this.multipliers[SS], null === (HS = this._onUpdate) || void 0 === HS || HS.call(this)
      }
      getMultiplierType(SS) {
        return this.multipliers[SS]
      }
      getTotalMultipliedVal() {
        let SS = 1;
        for (const HS in this.multipliers) SS *= this.multipliers[HS];
        return SS
      }
    }
    class bS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = SS
      }
      setBooleanType(SS, HS) {
        const gS = this._getTotalBooleanVal();
        this.booleans[SS] = !!HS;
        const tS = this.getTotalBooleanVal();
        var bS;
        tS !== gS && (null === (bS = this._onUpdate) || void 0 === bS || bS.call(this, tS, this.booleans));
        return tS
      }
      removeBoolean(SS) {
        const HS = this._getTotalBooleanVal();
        delete this.booleans[SS];
        const gS = this._getTotalBooleanVal();
        var tS;
        null !== gS && gS !== HS && (null === (tS = this._onUpdate) || void 0 === tS || tS.call(this, gS, this.booleans));
        return null !== gS && void 0 !== gS && gS
      }
      getBooleanType(SS) {
        return this.booleans[SS]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var SS;
        null === (SS = this._onUpdate) || void 0 === SS || SS.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class XS extends bS {
      getTotalBooleanVal() {
        const SS = this._getTotalBooleanVal();
        if (null === SS) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return SS
      }
      _getTotalBooleanVal() {
        let SS = !1,
          HS = !0;
        for (const gS in this.booleans) SS = !0, HS &&= this.booleans[gS];
        return SS ? HS : null
      }
    }
    class xS extends bS {
      getTotalBooleanVal() {
        const SS = this._getTotalBooleanVal();
        if (null === SS) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return SS
      }
      _getTotalBooleanVal() {
        let SS = !1,
          HS = !1;
        for (const gS in this.booleans) SS = !0, HS ||= this.booleans[gS];
        return SS ? HS : null
      }
    }
  },
  36820: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => XS,
      e: () => tS,
      f: () => bS
    });
    const tS = 15,
      bS = 3,
      XS = 30
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);