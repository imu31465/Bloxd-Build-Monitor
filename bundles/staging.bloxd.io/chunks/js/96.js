export const id = 96;
export const ids = [95, 96];
export const modules = {
  36514: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      countDecodesAs: () => pB,
      decodedAudio: () => rB
    });
    var QB = zB(3362),
      nB = zB(4950);
    const dB = nB.Howler,
      IB = new Map;
    let NB = 0;
    const uB = {
        song: 0,
        sheet: 0
      },
      UB = new WeakMap,
      aB = new WeakSet;

    function pB(BB, jB) {
      return UB.set(BB, jB), BB
    }

    function rB() {
      return {
        bytes: NB,
        songsDecoded: uB.song,
        sheetsDecoded: uB.sheet
      }
    }

    function sB(BB) {
      if (aB.has(BB)) return;
      aB.add(BB);
      const jB = 1 === BB.decodeAudioData.length,
        zB = BB.decodeAudioData.bind(BB);
      BB.decodeAudioData = (BB, QB, nB) => {
        const aB = BB => {
          const jB = dB._howls.filter((BB => "loaded" !== BB._state));
          try {
            null === QB || void 0 === QB || QB(BB)
          } finally {
            const zB = jB.find((BB => "loaded" === BB._state));
            void 0 !== zB && "string" === typeof zB._src && function(BB, jB, zB) {
              var QB;
              NB += zB - (null !== (QB = IB.get(jB)) && void 0 !== QB ? QB : 0), IB.set(jB, zB);
              const nB = UB.get(BB);
              void 0 !== nB && uB[nB]++
            }(zB, zB._src, BB.length * BB.numberOfChannels * Float32Array.BYTES_PER_ELEMENT)
          }
          return BB
        };
        if (!jB) return zB(BB, aB, nB);
        const pB = zB(BB).then(aB);
        return pB.catch((BB => {
          null === nB || void 0 === nB || nB(BB)
        })), pB
      }
    }(0, QB.h)(rB);
    const JB = nB.Howl.prototype,
      mB = JB.init;
    JB.init = function(BB) {
      return nB.Howler.volume(), dB.ctx && sB(dB.ctx), mB.call(this, BB)
    };
    const yB = JB.unload;
    JB.unload = function() {
      const BB = this._src,
        jB = yB.call(this);
      if ("string" !== typeof BB) return jB;
      const zB = IB.get(BB);
      return void 0 !== zB && function(BB) {
        return !dB._howls.some((jB => jB._src === BB || "string" === typeof jB._src && BB.indexOf(jB._src) >= 0))
      }(BB) && (IB.delete(BB), NB -= zB), jB
    }
  },
  4950: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Howl: () => nB.Howl,
      Howler: () => nB.Howler,
      musicOutput: () => yB,
      readyAudioContext: () => kB
    });
    var QB, nB = zB(4958),
      dB = zB(3551),
      IB = zB(4741);
    const NB = nB.Howler;

    function uB() {
      var BB, jB;
      if (NB.ctx || !NB.usingWebAudio || "undefined" === typeof AudioContext || !(0, IB.h)()) return;
      const zB = navigator.audioSession;
      let QB;
      "auto" === (null === zB || void 0 === zB ? void 0 : zB.type) && (zB.type = "ambient");
      try {
        QB = new AudioContext({
          sampleRate: 44100
        })
      } catch {
        return
      }
      const nB = QB.createGain();
      nB.gain.setValueAtTime(NB._muted ? 0 : null !== (BB = NB._volume) && void 0 !== BB ? BB : 1, QB.currentTime), nB.connect(QB.destination), NB.ctx = QB, NB.masterGain = nB, null === (jB = NB._setup) || void 0 === jB || jB.call(NB)
    }
    NB._mobileUnloaded = !0;
    const UB = NB.volume.bind(nB.Howler);
    NB.volume = function() {
      return uB(), UB(...arguments)
    };
    const aB = NB.mute.bind(nB.Howler);
    NB.mute = BB => (uB(), aB(BB));
    const pB = nB.Howl.prototype,
      rB = pB.init;

    function sB() {
      for (; NB._html5AudioPool.length < NB.html5PoolSize;) {
        const BB = new Audio;
        BB._unlocked = !0, NB._releaseHtml5Audio(BB)
      }
      for (const jB of NB._howls)
        if (!jB._webAudio)
          for (const zB of jB._getSoundIds()) {
            var BB;
            const QB = null === (BB = jB._soundById(zB)) || void 0 === BB ? void 0 : BB._node;
            QB && !QB._unlocked && (QB._unlocked = !0, QB.load())
          }
    }
    pB.init = function(BB) {
      return uB(), rB.call(this, BB)
    }, (0, IB.h)() && (NB._unlockAudio = () => {
      const BB = NB.ctx;
      if (NB._audioUnlocked || !BB) return;
      NB.autoUnlock = !1;
      const jB = BB.createBuffer(1, 1, 22050);
      NB._scratchBuffer = jB;
      const zB = new AbortController;
      let QB = "afterPaint";
      const nB = () => {
          var QB;
          if (NB._audioUnlocked) return;
          null === (QB = NB._autoResume) || void 0 === QB || QB.call(NB);
          const nB = BB.createBufferSource();
          nB.buffer = jB, nB.connect(BB.destination), nB.start(0), BB.resume().catch((() => {})), nB.onended = () => {
            nB.disconnect(0), NB._audioUnlocked = !0, zB.abort();
            for (const BB of NB._howls) BB._emit("unlock")
          }
        },
        uB = () => {
          sB(), nB()
        },
        UB = jB => {
          if (sB(), "inTap" === QB) {
            if ("running" === BB.state) return;
            console.warn("A click's resume after its frame left Howler's context suspended, so this click resumes it"), nB()
          } else "afterPaint" === QB && (QB = "queued", (0, dB.b)(jB.timeStamp, (() => {
            QB = "inTap", nB()
          })))
        };
      for (const dB of ["touchstart", "touchend"]) document.addEventListener(dB, uB, {
        capture: !0,
        signal: zB.signal
      });
      for (const dB of IB.d) document.addEventListener(dB, UB, {
        capture: !0,
        signal: zB.signal
      })
    });
    let JB = 0;
    const mB = null === (QB = NB._autoSuspend) || void 0 === QB ? void 0 : QB.bind(nB.Howler);

    function yB() {
      kB();
      const {
        ctx: BB,
        masterGain: jB
      } = NB;
      return BB && jB ? {
        ctx: BB,
        destination: jB,
        holdAwake: BB => {
          var jB, zB;
          (JB += BB ? 1 : -1, BB) ? null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB): null === (zB = NB._autoSuspend) || void 0 === zB || zB.call(NB)
        },
        wake: () => {
          var jB;
          "running" !== BB.state && (null === (jB = NB._autoResume) || void 0 === jB || jB.call(NB), BB.resume().catch((() => {})))
        }
      } : null
    }

    function kB() {
      var BB;
      (NB.volume(), NB.ctx && NB.autoUnlock) && (null === (BB = NB._unlockAudio) || void 0 === BB || BB.call(NB))
    }
    mB && (NB._autoSuspend = () => JB > 0 ? nB.Howler : mB())
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);