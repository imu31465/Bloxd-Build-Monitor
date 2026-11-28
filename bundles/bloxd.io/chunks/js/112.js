export const id = 112;
export const ids = [110, 111, 112];
export const modules = {
  37955: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      countDecodesAs: () => td,
      decodedAudio: () => od
    });
    var Wd = md(4040),
      Fd = md(5641);
    const Rd = Fd.Howler,
      Xd = new Map;
    let Kd = 0;
    const hd = {
        song: 0,
        sound: 0
      },
      vd = new WeakMap,
      Qd = new WeakSet;

    function td(dd, Od) {
      return vd.set(dd, Od), dd
    }

    function od() {
      return {
        bytes: Kd,
        songsDecoded: hd.song,
        soundsDecoded: hd.sound
      }
    }

    function Nd(dd) {
      if (Qd.has(dd)) return;
      Qd.add(dd);
      const Od = 1 === dd.decodeAudioData.length,
        md = dd.decodeAudioData.bind(dd);
      dd.decodeAudioData = (dd, Wd, Fd) => {
        const Qd = dd => {
          const Od = Rd._howls.filter((dd => "loaded" !== dd._state));
          try {
            null === Wd || void 0 === Wd || Wd(dd)
          } finally {
            const md = Od.find((dd => "loaded" === dd._state));
            void 0 !== md && "string" === typeof md._src && function(dd, Od, md) {
              var Wd;
              Kd += md - (null !== (Wd = Xd.get(Od)) && void 0 !== Wd ? Wd : 0), Xd.set(Od, md);
              const Fd = vd.get(dd);
              void 0 !== Fd && hd[Fd]++
            }(md, md._src, dd.length * dd.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return dd
        };
        if (!Od) return md(dd, Qd, Fd);
        const td = md(dd).then(Qd);
        return td.catch((dd => {
          null === Fd || void 0 === Fd || Fd(dd)
        })), td
      }
    }(0, Wd.e)(od);
    const qd = Fd.Howl.prototype,
      Hd = qd.init;
    qd.init = function(dd) {
      return Fd.Howler.volume(), Rd.ctx && Nd(Rd.ctx), Hd.call(this, dd)
    };
    const yd = qd.unload;
    qd.unload = function() {
      const dd = this._src,
        Od = yd.call(this);
      if ("string" !== typeof dd) return Od;
      const md = Xd.get(dd);
      return void 0 !== md && function(dd) {
        return !Rd._howls.some((Od => Od._src === dd || "string" === typeof Od._src && dd.indexOf(Od._src) >= 0))
      }(dd) && (Xd.delete(dd), Kd -= md), Od
    }
  },
  37991: (dd, Od, md) => {
    async function Wd(dd) {
      const Od = await fetch(dd, {
        priority: "low"
      });
      if (!Od.ok) throw new Error(`Fetching ${dd} failed: HTTP ${Od.status}`);
      const md = Od.body.getReader();
      for (; !(await md.read()).done;);
    }
    md.d(Od, {
      c: () => Wd
    })
  },
  5641: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Howl: () => Fd.Howl,
      Howler: () => Fd.Howler,
      musicOutput: () => yd,
      readyAudioContext: () => bd
    });
    var Wd, Fd = md(5650),
      Rd = md(4664),
      Xd = md(5326);
    const Kd = Fd.Howler;

    function hd() {
      var dd, Od;
      if (Kd.ctx || !Kd.usingWebAudio || "undefined" === typeof AudioContext || !(0, Xd.j)()) return;
      const md = navigator.audioSession;
      let Wd;
      "auto" === (null === md || void 0 === md ? void 0 : md.type) && (md.type = "ambient");
      try {
        Wd = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const Fd = Wd.createGain();
      Fd.gain.setValueAtTime(Kd._muted ? 0 : null !== (dd = Kd._volume) && void 0 !== dd ? dd : 1, Wd.currentTime), Fd.connect(Wd.destination), Kd.ctx = Wd, Kd.masterGain = Fd, null === (Od = Kd._setup) || void 0 === Od || Od.call(Kd)
    }
    Kd._mobileUnloaded = !0;
    const vd = Kd.volume.bind(Fd.Howler);
    Kd.volume = function() {
      return hd(), vd(...arguments)
    };
    const Qd = Kd.mute.bind(Fd.Howler);
    Kd.mute = dd => (hd(), Qd(dd));
    const td = Fd.Howl.prototype,
      od = td.init;

    function Nd() {
      for (; Kd._html5AudioPool.length < Kd.html5PoolSize;) {
        const dd = new Audio;
        dd._unlocked = !0, Kd._releaseHtml5Audio(dd)
      }
      for (const Od of Kd._howls)
        if (!Od._webAudio)
          for (const md of Od._getSoundIds()) {
            var dd;
            const Wd = null === (dd = Od._soundById(md)) || void 0 === dd ? void 0 : dd._node;
            Wd && !Wd._unlocked && (Wd._unlocked = !0, Wd.load())
          }
    }
    td.init = function(dd) {
      return hd(), od.call(this, dd)
    }, (0, Xd.j)() && (Kd._unlockAudio = () => {
      const dd = Kd.ctx;
      if (Kd._audioUnlocked || !dd) return;
      Kd.autoUnlock = !1;
      const Od = dd.createBuffer(1, 1, 22050);
      Kd._scratchBuffer = Od;
      const md = new AbortController;
      let Wd = "afterPaint";
      const Fd = () => {
          var Wd;
          if (Kd._audioUnlocked) return;
          null === (Wd = Kd._autoResume) || void 0 === Wd || Wd.call(Kd);
          const Fd = dd.createBufferSource();
          Fd.buffer = Od, Fd.connect(dd.destination), Fd.start(0), dd.resume().catch((() => {})), Fd.onended = () => {
            Fd.disconnect(0), Kd._audioUnlocked = !0, md.abort();
            for (const dd of Kd._howls) dd._emit("unlock")
          }
        },
        hd = () => {
          Nd(), Fd()
        },
        vd = Od => {
          if (Nd(), "inTap" === Wd) {
            if ("running" === dd.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), Fd()
          } else "afterPaint" === Wd && (Wd = "queued", (0, Rd.d)(Od.timeStamp, (() => {
            Wd = "inTap", Fd()
          })))
        };
      for (const Rd of ["touchstart", "touchend"]) document.addEventListener(Rd, hd, {
        capture: !0,
        signal: md.signal
      });
      for (const Rd of Xd.d) document.addEventListener(Rd, vd, {
        capture: !0,
        signal: md.signal
      })
    });
    let qd = 0;
    const Hd = null === (Wd = Kd._autoSuspend) || void 0 === Wd ? void 0 : Wd.bind(Fd.Howler);

    function yd() {
      bd();
      const {
        ctx: dd,
        masterGain: Od
      } = Kd;
      return dd && Od ? {
        ctx: dd,
        destination: Od,
        holdAwake: dd => {
          var Od, md;
          (qd += dd ? 1 : -1, dd) ? null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd): null === (md = Kd._autoSuspend) || void 0 === md || md.call(Kd)
        },
        wake: () => {
          var Od;
          "running" !== dd.state && (null === (Od = Kd._autoResume) || void 0 === Od || Od.call(Kd), dd.resume().catch((() => {})))
        }
      } : null
    }

    function bd() {
      var dd;
      (Kd.volume(), Kd.ctx && Kd.autoUnlock) && (null === (dd = Kd._unlockAudio) || void 0 === dd || dd.call(Kd))
    }
    Hd && (Kd._autoSuspend = () => qd > 0 ? Fd.Howler : Hd())
  },
  37982: (dd, Od, md) => {
    function Wd(dd, Od) {
      let {
        afterJoin: md,
        joining: Wd,
        idle: Fd,
        fetchFile: Rd,
        Ad: Xd = () => !1
      } = Od;
      const Kd = Od => {
        Od >= dd.length || Xd() || md((() => {
          Fd((() => {
            Xd() || (Wd() ? Kd(Od) : Rd(dd[Od]).catch((() => {})).finally((() => {
              Kd(Od + 1)
            })))
          }))
        }))
      };
      Kd(0)
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  37974: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    const Wd = new Set(["gunSemiAutomatic", "gunSubmachineGun", "gunShotgun", "gunRifle", "gunPistol", "gunMisc", "step", "dig", "randomItems", "randomExp", "randomCash", "randomFallsmall", "note", "rpg", "phoneAndMoney"])
  },
  37996: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      d: () => Kd,
      g: () => Xd
    });
    const Wd = 4;
    let Fd = null;

    function Rd(dd) {
      return Fd = dd, () => {
        Fd === dd && (Fd = null)
      }
    }

    function Xd() {
      return null !== Fd
    }

    function Kd(dd, Od, md, Rd) {
      const Xd = function(dd, Od) {
        return "randomCannon" === dd || "randomFirecracker" === dd ? "explosion" : dd.startsWith("gun") ? /_shot_|^headshot/.test(Od) ? "combat" : null : dd.startsWith("mob") ? "creature" : /^(hit\d*|bow|successfulBowHit)$/.test(Od) ? "combat" : /^(chestOpen|chestClose|doorOpen|doorClose|trapdoorOpen)/.test(Od) ? "container" : null
      }(dd, Od);
      if (null === Xd || !Fd) return;
      md * md + Rd * Rd >= Wd && Fd(Xd, Math.PI / 2 - Math.atan2(Rd, md))
    }
  },
  37989: (dd, Od, md) => {
    md.d(Od, {
      c: () => Qd,
      g: () => td
    });
    var Wd = md(29),
      Fd = md(37942),
      Rd = md(837),
      Xd = md(37991),
      Kd = md(5641),
      hd = md(285),
      vd = md(37982);
    const Qd = {
        afterJoin: dd => {
          (0, Rd.b)(Wd.e.get("gameState"), dd)
        },
        joining: () => (0, Rd.d)(Wd.e.get("gameState")),
        idle: hd.e
      },
      td = function(dd) {
        const Od = new Set,
          md = new Set,
          Wd = Od => Od.flatMap((Od => {
            const md = (Wd = (0, Fd.t)(Od).src, Rd = dd.canPlay, Wd.find((dd => {
              var Od;
              const md = null === (Od = /\.([^.]+)$/.exec(dd.split("?", 1)[0])) || void 0 === Od ? void 0 : Od[1];
              return void 0 !== md && Rd(md.toLowerCase())
            })));
            var Wd, Rd;
            return void 0 === md ? [] : [md]
          }));
        return Rd => {
          var Xd;
          const Kd = (0, Fd.j)(Rd),
            hd = [];
          Od.has(Kd) || (Od.add(Kd), hd.push(...Wd((0, Fd.n)(Kd).filter((dd => dd !== Rd)))));
          const [Qd, td] = null !== (Xd = [...Fd.c].find((dd => {
            let [, Od] = dd;
            return Od.includes(Kd)
          }))) && void 0 !== Xd ? Xd : [void 0, []];
          if (void 0 !== Qd && !md.has(Qd)) {
            md.add(Qd);
            for (const dd of td) Od.has(dd) || (Od.add(dd), hd.push(...Wd((0, Fd.n)(dd))))
          }
          hd.length > 0 && (0, vd.b)(hd, dd)
        }
      }({
        ...Qd,
        fetchFile: Xd.c,
        canPlay: dd => !!Kd.Howler.codecs(dd)
      })
  },
  37965: (dd, Od, md) => {
    md.d(Od, {
      d: () => Xd,
      e: () => Fd,
      i: () => Wd
    });

    function Wd(dd) {
      return dd.replace(/[_\-\s]*\d+$/, "") || dd
    }

    function Fd(dd, Od, md) {
      return md <= 0 ? 0 : dd * md / Math.max(Od, md)
    }

    function Rd(dd, Od) {
      const md = dd.getDurationMs();
      return md > 0 ? dd.loudness * Math.max(0, 1 - (Od - dd.startMs) / md) : 0
    }
    class Xd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 24,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6;
        this.maxVoices = dd, this.maxPerGroup = Od, this.voices = []
      }
      admit(dd) {
        if (this.voices = this.voices.filter((dd => dd.isAlive())), null !== dd.group) {
          const Od = this.voices.filter((Od => Od.group === dd.group));
          if (Od.length >= this.maxPerGroup && !this.dropLeastWorth(Od, dd)) return !1
        }
        return !(this.voices.length >= this.maxVoices && !this.dropLeastWorth(this.voices, dd)) && (this.voices.push(dd), !0)
      }
      dropLeastWorth(dd, Od) {
        let md = null,
          Wd = 1 / 0;
        for (const Fd of dd) {
          if (!Fd.canStop()) continue;
          const dd = Rd(Fd, Od.startMs);
          dd < Wd && (md = Fd, Wd = dd)
        }
        return !(!md || Od.loudness < Wd) && (this.voices.splice(this.voices.indexOf(md), 1), md.stop(), !0)
      }
    }
  },
  38006: (dd, Od, md) => {
    md.d(Od, {
      e: () => Rd,
      g: () => Xd,
      h: () => Wd
    });
    class Wd {
      constructor(dd) {
        this.multipliers = {}, this._onUpdate = void 0, this._onUpdate = dd
      }
      setMultiplierType(dd, Od) {
        var md;
        this.multipliers[dd] = Od, null === (md = this._onUpdate) || void 0 === md || md.call(this)
      }
      removeMultiplier(dd) {
        var Od;
        delete this.multipliers[dd], null === (Od = this._onUpdate) || void 0 === Od || Od.call(this)
      }
      getMultiplierType(dd) {
        return this.multipliers[dd]
      }
      getTotalMultipliedVal() {
        let dd = 1;
        for (const Od in this.multipliers) dd *= this.multipliers[Od];
        return dd
      }
    }
    class Fd {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        this.booleans = {}, this._onUpdate = void 0, this._onUpdate = dd
      }
      setBooleanType(dd, Od) {
        const md = this._getTotalBooleanVal();
        this.booleans[dd] = !!Od;
        const Wd = this.getTotalBooleanVal();
        var Fd;
        Wd !== md && (null === (Fd = this._onUpdate) || void 0 === Fd || Fd.call(this, Wd, this.booleans));
        return Wd
      }
      removeBoolean(dd) {
        const Od = this._getTotalBooleanVal();
        delete this.booleans[dd];
        const md = this._getTotalBooleanVal();
        var Wd;
        null !== md && md !== Od && (null === (Wd = this._onUpdate) || void 0 === Wd || Wd.call(this, md, this.booleans));
        return null !== md && void 0 !== md && md
      }
      getBooleanType(dd) {
        return this.booleans[dd]
      }
      getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
      forceUpdate() {
        var dd;
        null === (dd = this._onUpdate) || void 0 === dd || dd.call(this, this.getTotalBooleanVal(), this.booleans)
      }
      _getTotalBooleanVal() {
        throw new Error("This is an abstract class, use BooleanAndCombinator")
      }
    }
    class Rd extends Fd {
      getTotalBooleanVal() {
        const dd = this._getTotalBooleanVal();
        if (null === dd) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return dd
      }
      _getTotalBooleanVal() {
        let dd = !1,
          Od = !0;
        for (const md in this.booleans) dd = !0, Od &&= this.booleans[md];
        return dd ? Od : null
      }
    }
    class Xd extends Fd {
      getTotalBooleanVal() {
        const dd = this._getTotalBooleanVal();
        if (null === dd) throw new Error("Should not be gotten before at least 1 type has been initialised");
        return dd
      }
      _getTotalBooleanVal() {
        let dd = !1,
          Od = !1;
        for (const md in this.booleans) dd = !0, Od ||= this.booleans[md];
        return dd ? Od : null
      }
    }
  },
  38003: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd,
      f: () => Wd,
      i: () => Fd
    });
    const Wd = 15,
      Fd = 3,
      Rd = 30
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);