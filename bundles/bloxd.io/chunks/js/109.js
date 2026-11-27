export const id = 109;
export const ids = [108, 109, 110];
export const modules = {
  37440: (ee, ie, He) => {
    function ye(ee, ie, He, ye) {
      return !(He && !ee.aimable) && (!ie || ee.gun && "head" !== ye)
    }

    function be(ee) {
      return Math.max(.1 * ee, 1)
    }

    function Me(ee, ie) {
      return !ee && ie
    }
    He.d(ie, {
      b: () => Me,
      d: () => be,
      e: () => ye
    })
  },
  37447: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      e: () => Ke
    });
    let ye = null;
    const be = {
        crosshairAccuracy: [],
        turnDamageIndicators: []
      },
      Me = {
        crosshairAccuracy: ee => {
          const ie = be.crosshairAccuracy.at(-1);
          ie ? ie.hook(ee) : ye = ee
        },
        turnDamageIndicators: ee => {
          var ie;
          null === (ie = be.turnDamageIndicators.at(-1)) || void 0 === ie || ie.hook(ee)
        }
      };

    function Ke(ee, ie) {
      const He = {
          hook: ie
        },
        Ke = be[ee];
      if (Ke.push(He), "crosshairAccuracy" === ee && null !== ye) {
        const ee = ye;
        ye = null, Me.crosshairAccuracy(ee)
      }
      return () => {
        const ee = Ke.indexOf(He); - 1 !== ee && Ke.splice(ee, 1)
      }
    }

    function Ue() {
      return Me
    }
  },
  34824: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      e: () => be
    });
    var ye = He(18);

    function be(ee, ie) {
      return ee && !ie
    }

    function Me() {
      return be(ye.e.get("isTouchScreen"), ye.e.get("clientEscMenuOptions").touchActionButtons)
    }
  },
  37224: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      countDecodesAs: () => Re,
      decodedAudio: () => ke
    });
    var ye = He(3189),
      be = He(5338);
    const Me = be.Howler,
      Ke = new Map;
    let Ue = 0;
    const Fe = {
        song: 0,
        sound: 0
      },
      Je = new WeakMap,
      oe = new WeakSet;

    function Re(ee, ie) {
      return Je.set(ee, ie), ee
    }

    function ke() {
      return {
        bytes: Ue,
        songsDecoded: Fe.song,
        soundsDecoded: Fe.sound
      }
    }

    function qe(ee) {
      if (oe.has(ee)) return;
      oe.add(ee);
      const ie = 1 === ee.decodeAudioData.length,
        He = ee.decodeAudioData.bind(ee);
      ee.decodeAudioData = (ee, ye, be) => {
        const oe = ee => {
          const ie = Me._howls.filter((ee => "loaded" !== ee._state));
          try {
            null === ye || void 0 === ye || ye(ee)
          } finally {
            const He = ie.find((ee => "loaded" === ee._state));
            void 0 !== He && "string" === typeof He._src && function(ee, ie, He) {
              var ye;
              Ue += He - (null !== (ye = Ke.get(ie)) && void 0 !== ye ? ye : 0), Ke.set(ie, He);
              const be = Je.get(ee);
              void 0 !== be && Fe[be]++
            }(He, He._src, ee.length * ee.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return ee
        };
        if (!ie) return He(ee, oe, be);
        const Re = He(ee).then(oe);
        return Re.catch((ee => {
          null === be || void 0 === be || be(ee)
        })), Re
      }
    }(0, ye.g)(ke);
    const fe = be.Howl.prototype,
      Te = fe.init;
    fe.init = function(ee) {
      return be.Howler.volume(), Me.ctx && qe(Me.ctx), Te.call(this, ee)
    };
    const pe = fe.unload;
    fe.unload = function() {
      const ee = this._src,
        ie = pe.call(this);
      if ("string" !== typeof ee) return ie;
      const He = Ke.get(ee);
      return void 0 !== He && function(ee) {
        return !Me._howls.some((ie => ie._src === ee || "string" === typeof ie._src && ee.indexOf(ie._src) >= 0))
      }(ee) && (Ke.delete(ee), Ue -= He), ie
    }
  },
  37617: (ee, ie, He) => {
    async function ye(ee) {
      const ie = await fetch(ee, {
        priority: "low"
      });
      if (!ie.ok) throw new Error(`Fetching ${ee} failed: HTTP ${ie.status}`);
      const He = ie.body.getReader();
      for (; !(await He.read()).done;);
    }
    He.d(ie, {
      e: () => ye
    })
  },
  5338: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Howl: () => be.Howl,
      Howler: () => be.Howler,
      musicOutput: () => pe,
      readyAudioContext: () => Xe
    });
    var ye, be = He(5340),
      Me = He(3791),
      Ke = He(5055);
    const Ue = be.Howler;

    function Fe() {
      var ee, ie;
      if (Ue.ctx || !Ue.usingWebAudio || "undefined" === typeof AudioContext || !(0, Ke.f)()) return;
      const He = navigator.audioSession;
      let ye;
      "auto" === (null === He || void 0 === He ? void 0 : He.type) && (He.type = "ambient");
      try {
        ye = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const be = ye.createGain();
      be.gain.setValueAtTime(Ue._muted ? 0 : null !== (ee = Ue._volume) && void 0 !== ee ? ee : 1, ye.currentTime), be.connect(ye.destination), Ue.ctx = ye, Ue.masterGain = be, null === (ie = Ue._setup) || void 0 === ie || ie.call(Ue)
    }
    Ue._mobileUnloaded = !0;
    const Je = Ue.volume.bind(be.Howler);
    Ue.volume = function() {
      return Fe(), Je(...arguments)
    };
    const oe = Ue.mute.bind(be.Howler);
    Ue.mute = ee => (Fe(), oe(ee));
    const Re = be.Howl.prototype,
      ke = Re.init;

    function qe() {
      for (; Ue._html5AudioPool.length < Ue.html5PoolSize;) {
        const ee = new Audio;
        ee._unlocked = !0, Ue._releaseHtml5Audio(ee)
      }
      for (const ie of Ue._howls)
        if (!ie._webAudio)
          for (const He of ie._getSoundIds()) {
            var ee;
            const ye = null === (ee = ie._soundById(He)) || void 0 === ee ? void 0 : ee._node;
            ye && !ye._unlocked && (ye._unlocked = !0, ye.load())
          }
    }
    Re.init = function(ee) {
      return Fe(), ke.call(this, ee)
    }, (0, Ke.f)() && (Ue._unlockAudio = () => {
      const ee = Ue.ctx;
      if (Ue._audioUnlocked || !ee) return;
      Ue.autoUnlock = !1;
      const ie = ee.createBuffer(1, 1, 22050);
      Ue._scratchBuffer = ie;
      const He = new AbortController;
      let ye = "afterPaint";
      const be = () => {
          var ye;
          if (Ue._audioUnlocked) return;
          null === (ye = Ue._autoResume) || void 0 === ye || ye.call(Ue);
          const be = ee.createBufferSource();
          be.buffer = ie, be.connect(ee.destination), be.start(0), ee.resume().catch((() => {})), be.onended = () => {
            be.disconnect(0), Ue._audioUnlocked = !0, He.abort();
            for (const ee of Ue._howls) ee._emit("unlock")
          }
        },
        Fe = () => {
          qe(), be()
        },
        Je = ie => {
          if (qe(), "inTap" === ye) {
            if ("running" === ee.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), be()
          } else "afterPaint" === ye && (ye = "queued", (0, Me.c)(ie.timeStamp, (() => {
            ye = "inTap", be()
          })))
        };
      for (const Me of ["touchstart", "touchend"]) document.addEventListener(Me, Fe, {
        capture: !0,
        signal: He.signal
      });
      for (const Me of Ke.b) document.addEventListener(Me, Je, {
        capture: !0,
        signal: He.signal
      })
    });
    let fe = 0;
    const Te = null === (ye = Ue._autoSuspend) || void 0 === ye ? void 0 : ye.bind(be.Howler);

    function pe() {
      Xe();
      const {
        ctx: ee,
        masterGain: ie
      } = Ue;
      return ee && ie ? {
        ctx: ee,
        destination: ie,
        holdAwake: ee => {
          var ie, He;
          (fe += ee ? 1 : -1, ee) ? null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue): null === (He = Ue._autoSuspend) || void 0 === He || He.call(Ue)
        },
        wake: () => {
          var ie;
          "running" !== ee.state && (null === (ie = Ue._autoResume) || void 0 === ie || ie.call(Ue), ee.resume().catch((() => {})))
        }
      } : null
    }

    function Xe() {
      var ee;
      (Ue.volume(), Ue.ctx && Ue.autoUnlock) && (null === (ee = Ue._unlockAudio) || void 0 === ee || ee.call(Ue))
    }
    Te && (Ue._autoSuspend = () => fe > 0 ? be.Howler : Te())
  },
  37605: (ee, ie, He) => {
    function ye(ee, ie) {
      let {
        afterJoin: He,
        joining: ye,
        idle: be,
        fetchFile: Me,
        Ce: Ke = () => !1
      } = ie;
      const Ue = ie => {
        ie >= ee.length || Ke() || He((() => {
          be((() => {
            Ke() || (ye() ? Ue(ie) : Me(ee[ie]).catch((() => {})).finally((() => {
              Ue(ie + 1)
            })))
          }))
        }))
      };
      Ue(0)
    }
    He.d(ie, {
      c: () => ye
    })
  },
  37601: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    const ye = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37612: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      h: () => Re
    });
    var ye = He(18),
      be = He(37578),
      Me = He(4697),
      Ke = He(37617),
      Ue = He(5338),
      Fe = He(242),
      Je = He(37605);
    const oe = {
        afterJoin: ee => {
          (0, Me.d)(ye.e.get("gameState"), ee)
        },
        joining: () => (0, Me.e)(ye.e.get("gameState")),
        idle: Fe.e
      },
      Re = function(ee) {
        const ie = new Set,
          He = new Set,
          ye = ie => ie.flatMap((ie => {
            const He = (ye = (0, be.s)(ie).src, Me = ee.canPlay, ye.find((ee => {
              var ie;
              const He = null === (ie = /\.([^.]+)$/.exec(ee.split("?", 1)[0])) || void 0 === ie ? void 0 : ie[1];
              return void 0 !== He && Me(He.toLowerCase())
            })));
            var ye, Me;
            return void 0 === He ? [] : [He]
          }));
        return Me => {
          var Ke;
          const Ue = (0, be.j)(Me),
            Fe = [];
          ie.has(Ue) || (ie.add(Ue), Fe.push(...ye((0, be.n)(Ue).filter((ee => ee !== Me)))));
          const [oe, Re] = null !== (Ke = [...be.c].find((ee => {
            let [, ie] = ee;
            return ie.includes(Ue)
          }))) && void 0 !== Ke ? Ke : [void 0, []];
          if (void 0 !== oe && !He.has(oe)) {
            He.add(oe);
            for (const ee of Re) ie.has(ee) || (ie.add(ee), Fe.push(...ye((0, be.n)(ee))))
          }
          Fe.length > 0 && (0, Je.c)(Fe, ee)
        }
      }({
        ...oe,
        fetchFile: Ke.e,
        canPlay: ee => !!Ue.Howler.codecs(ee)
      })
  },
  37596: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => be,
      i: () => ye
    });

    function ye(ee) {
      return ee.replace(/[_\-\s]*\d+$/, "") || ee
    }

    function be(ee, ie, He) {
      return He <= 0 ? 0 : ee * He / Math.max(ie, He)
    }

    function Me(ee, ie) {
      const He = ee.getDurationMs();
      return He > 0 ? ee.loudness * Math.max(0, 1 - (ie - ee.startMs) / He) : 0
    }
    class Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = ee, this.maxPerGroup = ie, this.voices = []
      }
      admit(ee) {
        if (this.voices = this.voices.filter((ee => ee.isAlive())), null !== ee.group) {
          const ie = this.voices.filter((ie => ie.group === ee.group));
          if (ie.length >= this.maxPerGroup && !this.dropLeastWorth(ie, ee)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, ee)) && (this.voices.push(ee), !0)
      }
      dropLeastWorth(ee, ie) {
        let He = null,
          ye = 1 / 0;
        for (const be of ee) {
          if (!be.canStop()) continue;
          const ee = Me(be, ie.startMs);
          ee < ye && (He = be, ye = ee)
        }
        return !(!He || ie.loudness < ye) && (this.voices.splice(this.voices.indexOf(He), 1), He.stop(), !0)
      }
    }
  },
  37415: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Ke,
      i: () => Ue
    });
    var ye = He(27);
    const be = "touchSprintChanged";
    let Me = !0;

    function Ke() {
      return Me
    }

    function Ue(ee) {
      ee !== Me && (Me = ee, ye.h.yR(be, ee))
    }
  },
  37627: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      e: () => Ke,
      i: () => ye
    });
    class ye {
      constructor(ee) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = ee
      }
      setMultiplierType(ee, ie) {
        var He;
        this.multipliers[ee] = ie, null === (He = this._onUpdate) || void 0 === He || He.call(this)
      }
      removeMultiplier(ee) {
        var ie;
        delete this.multipliers[ee], null === (ie = this._onUpdate) || void 0 === ie || ie.call(this)
      }
      getMultiplierType(ee) {
        return this.multipliers[ee]
      }
      getTotalMultipliedVal() {
        let ee = 1;
        for (const ie in this.multipliers) ee *= this.multipliers[ie];
        return ee
      }
    }
    class be {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = ee
      }
      setBooleanType(ee, ie) {
        const He = this._getTotalBooleanVal();
        this.booleans[ee] = !!ie;
        const ye = this.getTotalBooleanVal();
        var be;
        ye !== He && (null === (be = this._onUpdate) || void 0 === be || be.call(this, ye, this.booleans));
        return ye
      }
      removeBoolean(ee) {
        const ie = this._getTotalBooleanVal();
        delete this.booleans[ee];
        const He = this._getTotalBooleanVal();
        var ye;
        null !== He && He !== ie && (null === (ye = this._onUpdate) || void 0 === ye || ye.call(this, He, this.booleans));
        return null !== He && void 0 !== He && He
      }
      getBooleanType(ee) {
        return this.booleans[ee]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var ee;
        null === (ee = this._onUpdate) || void 0 === ee || ee.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Me extends be {
      getTotalBooleanVal() {
        const ee = this._getTotalBooleanVal();
        if (null === ee) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return ee
      }
      _getTotalBooleanVal() {
        let ee = !1,
          ie = !0;
        for (const He in this.booleans) ee = !0, ie &&= this.booleans[He];
        return ee ? ie : null
      }
    }
    class Ke extends be {
      getTotalBooleanVal() {
        const ee = this._getTotalBooleanVal();
        if (null === ee) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return ee
      }
      _getTotalBooleanVal() {
        let ee = !1,
          ie = !1;
        for (const He in this.booleans) ee = !0, ie ||= this.booleans[He];
        return ee ? ie : null
      }
    }
  },
  37620: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      f: () => ye,
      j: () => be
    });
    const ye = 15,
      be = 3,
      Me = 30
  },
  7083: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke,
      f: () => be,
      j: () => Fe,
      m: () => Me,
      o: () => Je,
      s: () => ye,
      u: () => Ue
    });
    let ye = function(ee) {
        return ee[ee.DEFAULT = 0] = "DEFAULT", ee[ee.BOAT = 1] = "BOAT", ee[ee.GLIDER = 2] = "GLIDER", ee[ee.BALLOON = 3] = "BALLOON", ee[ee.SLEEPING = 4] = "SLEEPING", ee[ee.RIDING_MOB = 5] = "RIDING_MOB", ee[ee.CAR = 6] = "CAR", ee[ee.HOVERCRAFT = 7] = "HOVERCRAFT", ee
      }({}),
      be = function(ee) {
        return ee[ee.WOOD = 0] = "WOOD", ee[ee.OBSIDIAN = 1] = "OBSIDIAN", ee[ee.SPEED = 2] = "SPEED", ee
      }({}),
      Me = function(ee) {
        return ee[ee.WOOD = 0] = "WOOD", ee[ee.IRON = 1] = "IRON", ee[ee.GOLD = 2] = "GOLD", ee[ee.DIAMOND = 3] = "DIAMOND", ee
      }({}),
      Ke = function(ee) {
        return ee[ee.YELLOW = 0] = "YELLOW", ee[ee.WHITE = 1] = "WHITE", ee[ee.RED = 2] = "RED", ee[ee.PURPLE = 3] = "PURPLE", ee[ee.PINK = 4] = "PINK", ee[ee.ORANGE = 5] = "ORANGE", ee[ee.MAGENTA = 6] = "MAGENTA", ee[ee.LIME = 7] = "LIME", ee[ee.LIGHT_GRAY = 8] = "LIGHT_GRAY", ee[ee.LIGHT_BLUE = 9] = "LIGHT_BLUE", ee[ee.GREEN = 10] = "GREEN", ee[ee.GRAY = 11] = "GRAY", ee[ee.CYAN = 12] = "CYAN", ee[ee.BROWN = 13] = "BROWN", ee[ee.BLUE = 14] = "BLUE", ee[ee.BLACK = 15] = "BLACK", ee
      }({}),
      Ue = function(ee) {
        return ee[ee.ROTATION_1 = 0] = "ROTATION_1", ee[ee.ROTATION_2 = 1] = "ROTATION_2", ee[ee.ROTATION_3 = 2] = "ROTATION_3", ee[ee.ROTATION_4 = 3] = "ROTATION_4", ee
      }({}),
      Fe = function(ee) {
        return ee[ee.KART = 0] = "KART", ee[ee.OFF_ROADER = 1] = "OFF_ROADER", ee[ee.CAR = 2] = "CAR", ee[ee.GOLD_MINING_DRILL = 3] = "GOLD_MINING_DRILL", ee[ee.ARMORED_CAR = 4] = "ARMORED_CAR", ee[ee.IRON_MINING_DRILL = 5] = "IRON_MINING_DRILL", ee[ee.DIAMOND_MINING_DRILL = 6] = "DIAMOND_MINING_DRILL", ee[ee.MOONSTONE_MINING_DRILL = 7] = "MOONSTONE_MINING_DRILL", ee
      }({});
    ye.DEFAULT, ye.BOAT, be.SPEED, ye.GLIDER, Me.DIAMOND, ye.BALLOON, Ke.BLACK, ye.SLEEPING, Ue.ROTATION_4, ye.RIDING_MOB, ye.CAR, Fe.MOONSTONE_MINING_DRILL, ye.HOVERCRAFT;
    let Je = function(ee) {
      return ee[ee.NORMAL = 0] = "NORMAL", ee[ee.GLIDING = 1] = "GLIDING", ee[ee.FLOATING = 2] = "FLOATING", ee
    }({})
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);