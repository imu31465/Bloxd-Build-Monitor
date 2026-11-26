export const id = 110;
export const ids = [108, 110];
export const modules = {
  37113: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      countDecodesAs: () => PB,
      decodedAudio: () => zB
    });
    var YB = GB(3311),
      DB = GB(5353);
    const QB = DB.Howler,
      oB = new Map;
    let jB = 0;
    const yB = {
        song: 0,
        sound: 0
      },
      JB = new WeakMap,
      MB = new WeakSet;

    function PB(BB, OB) {
      return JB.set(BB, OB), BB
    }

    function zB() {
      return {
        bytes: jB,
        songsDecoded: yB.song,
        soundsDecoded: yB.sound
      }
    }

    function lB(BB) {
      if (MB.has(BB)) return;
      MB.add(BB);
      const OB = 1 === BB.decodeAudioData.length,
        GB = BB.decodeAudioData.bind(BB);
      BB.decodeAudioData = (BB, YB, DB) => {
        const MB = BB => {
          const OB = QB._howls.filter((BB => "loaded" !== BB._state));
          try {
            null === YB || void 0 === YB || YB(BB)
          } finally {
            const GB = OB.find((BB => "loaded" === BB._state));
            void 0 !== GB && "string" === typeof GB._src && function(BB, OB, GB) {
              var YB;
              jB += GB - (null !== (YB = oB.get(OB)) && void 0 !== YB ? YB : 0), oB.set(OB, GB);
              const DB = JB.get(BB);
              void 0 !== DB && yB[DB]++
            }(GB, GB._src, BB.length * BB.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return BB
        };
        if (!OB) return GB(BB, MB, DB);
        const PB = GB(BB).then(MB);
        return PB.catch((BB => {
          null === DB || void 0 === DB || DB(BB)
        })), PB
      }
    }(0, YB.g)(zB);
    const pB = DB.Howl.prototype,
      qB = pB.init;
    pB.init = function(BB) {
      return DB.Howler.volume(), QB.ctx && lB(QB.ctx), qB.call(this, BB)
    };
    const ZB = pB.unload;
    pB.unload = function() {
      const BB = this._src,
        OB = ZB.call(this);
      if ("string" !== typeof BB) return OB;
      const GB = oB.get(BB);
      return void 0 !== GB && function(BB) {
        return !QB._howls.some((OB => OB._src === BB || "string" === typeof OB._src && BB.indexOf(OB._src) >= 0))
      }(BB) && (oB.delete(BB), jB -= GB), OB
    }
  },
  5353: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Howl: () => DB.Howl,
      Howler: () => DB.Howler,
      musicOutput: () => ZB,
      readyAudioContext: () => NB
    });
    var YB, DB = GB(5362),
      QB = GB(3873),
      oB = GB(5073);
    const jB = DB.Howler;

    function yB() {
      var BB, OB;
      if (jB.ctx || !jB.usingWebAudio || "undefined" === typeof AudioContext || !(0, oB.h)()) return;
      const GB = navigator.audioSession;
      let YB;
      "auto" === (null === GB || void 0 === GB ? void 0 : GB.type) && (GB.type = "ambient");
      try {
        YB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const DB = YB.createGain();
      DB.gain.setValueAtTime(jB._muted ? 0 : null !== (BB = jB._volume) && void 0 !== BB ? BB : 1, YB.currentTime), DB.connect(YB.destination), jB.ctx = YB, jB.masterGain = DB, null === (OB = jB._setup) || void 0 === OB || OB.call(jB)
    }
    jB._mobileUnloaded = !0;
    const JB = jB.volume.bind(DB.Howler);
    jB.volume = function() {
      return yB(), JB(...arguments)
    };
    const MB = jB.mute.bind(DB.Howler);
    jB.mute = BB => (yB(), MB(BB));
    const PB = DB.Howl.prototype,
      zB = PB.init;

    function lB() {
      for (; jB._html5AudioPool.length < jB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, jB._releaseHtml5Audio(BB)
      }
      for (const OB of jB._howls)
        if (!OB._webAudio)
          for (const GB of OB._getSoundIds()) {
            var BB;
            const YB = null === (BB = OB._soundById(GB)) || void 0 === BB ? void 0 : BB._node;
            YB && !YB._unlocked && (YB._unlocked = !0, YB.load())
          }
    }
    PB.init = function(BB) {
      return yB(), zB.call(this, BB)
    }, (0, oB.h)() && (jB._unlockAudio = () => {
      const BB = jB.ctx;
      if (jB._audioUnlocked || !BB) return;
      jB.autoUnlock = !1;
      const OB = BB.createBuffer(1, 1, 22050);
      jB._scratchBuffer = OB;
      const GB = new AbortController;
      let YB = "afterPaint";
      const DB = () => {
          var YB;
          if (jB._audioUnlocked) return;
          null === (YB = jB._autoResume) || void 0 === YB || YB.call(jB);
          const DB = BB.createBufferSource();
          DB.buffer = OB, DB.connect(BB.destination), DB.start(0), BB.resume().catch((() => {})), DB.onended = () => {
            DB.disconnect(0), jB._audioUnlocked = !0, GB.abort();
            for (const BB of jB._howls) BB._emit("unlock")
          }
        },
        yB = () => {
          lB(), DB()
        },
        JB = OB => {
          if (lB(), "inTap" === YB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), DB()
          } else "afterPaint" === YB && (YB = "queued", (0, QB.c)(OB.timeStamp, (() => {
            YB = "inTap", DB()
          })))
        };
      for (const QB of ["touchstart", "touchend"]) document.addEventListener(QB, yB, {
        capture: !0,
        signal: GB.signal
      });
      for (const QB of oB.c) document.addEventListener(QB, JB, {
        capture: !0,
        signal: GB.signal
      })
    });
    let pB = 0;
    const qB = null === (YB = jB._autoSuspend) || void 0 === YB ? void 0 : YB.bind(DB.Howler);

    function ZB() {
      NB();
      const {
        ctx: BB,
        masterGain: OB
      } = jB;
      return BB && OB ? {
        ctx: BB,
        destination: OB,
        holdAwake: BB => {
          var OB, GB;
          (pB += BB ? 1 : -1, BB) ? null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB): null === (GB = jB._autoSuspend) || void 0 === GB || GB.call(jB)
        },
        wake: () => {
          var OB;
          "running" !== BB.state && (null === (OB = jB._autoResume) || void 0 === OB || OB.call(jB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function NB() {
      var BB;
      (jB.volume(), jB.ctx && jB.autoUnlock) && (null === (BB = jB._unlockAudio) || void 0 === BB || BB.call(jB))
    }
    qB && (jB._autoSuspend = () => pB > 0 ? DB.Howler : qB())
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);