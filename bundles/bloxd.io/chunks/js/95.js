export const id = 95;
export const ids = [95];
export const modules = {
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